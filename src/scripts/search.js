// Client-side search engine (OPS-288) — shared by the header panel and the
// /search/ page.
//
// WHY NOT A LIBRARY. 143 documents is small enough that a linear scan beats
// the cost of shipping and building an inverted index: a full query over the
// whole corpus is a few milliseconds, and a hand-rolled scan keeps the
// matching rules honest about this site's content (see MATCHING below).
//
// MATCHING. Terms match at a word START, not as whole words and not as bare
// substrings. That single rule is what makes one engine serve both languages:
// English plurals and Ukrainian case endings both hang off the stem, so
// "sugar" has to find "sugars" and "цукр" has to find "цукру"/"цукром" —
// while plain substring matching would let "art" match "start". Multiple
// terms are ANDed: every term must appear somewhere in the document.
//
// The index itself is built at build time from the site's data modules —
// src/data/search-lib.js.

// Guarded so the ranking can be exercised from plain Node (no Vite `env`),
// which is how the query set in docs/search-queries.md is checked.
const BASE = (import.meta.env && import.meta.env.BASE_URL) || '/';

// Site language as the index files spell it. The document declares 'uk' (the
// correct ISO code for Ukrainian); the repo's data files key on 'ua'.
export const pageLang = () => (document.documentElement.lang === 'uk' ? 'ua' : 'en');

const WORD = /[\p{L}\p{N}]+/gu;
const escRx = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const escHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Suffixes trimmed off a query term before matching, longest first. Matching
// is prefix-based, which already covers the common direction — you type the
// singular, the page has the plural. This covers the other direction: you
// type "recipes" and the page says "recipe", or you type "цукру" and the page
// says "цукром". Only the query is trimmed, never the document, and never
// below MIN_STEM characters, so "gluten" and "діабет" are left alone.
const SUFFIXES = [
  // Ukrainian case endings, commonest first among the long ones.
  'ами', 'ями', 'ах', 'ях', 'ів', 'ей', 'ою', 'ею', 'ом', 'ем',
  // English.
  'ing', 'es', 'ed',
  // Single-vowel endings shared by both.
  'и', 'і', 'у', 'ю', 'а', 'я', 'е', 'о', 's',
];
const MIN_STEM = 4;

function stem(t) {
  for (const s of SUFFIXES) {
    if (t.length - s.length >= MIN_STEM && t.endsWith(s)) return t.slice(0, -s.length);
  }
  return t;
}

// Query → search terms. Capped: past a handful of words the AND is already
// narrow enough that more terms only cost time.
export function termsOf(q) {
  return (String(q).toLowerCase().match(WORD) || []).slice(0, 8).map(stem);
}

// Word-start matcher, and the rule that lets one engine serve both languages.
//
// A term of three characters or more matches a word that STARTS with it and
// swallows the rest of that word — so "sugar" finds "sugars" and the <mark>
// covers the whole word rather than the stem. Shorter terms have to match the
// whole word instead: as a prefix, "GI" would hit "ginger" and "gift".
//
// The preceding character is captured rather than looked behind, because
// RegExp lookbehind is unsupported in Safari before 16.4 and constructing one
// there throws outright — taking the whole of search down rather than
// degrading one query.
const boundary = (terms) => {
  const alts = terms.map((t) =>
    t.length >= 3 ? `${escRx(t)}[\\p{L}\\p{N}]*` : `${escRx(t)}(?![\\p{L}\\p{N}])`
  );
  return new RegExp(`(^|[^\\p{L}\\p{N}])(${alts.join('|')})`, 'giu');
};

// The same match, but requiring the whole word. Used only as a bonus on the
// title and keywords: prefix matching cannot tell "pump" in "insulin pump"
// from "pump" in "pumpkin", and without this the pumpkin recipes bury the
// insulin-pump calculator for the query "pump".
const exact = (t) => new RegExp(`(^|[^\\p{L}\\p{N}])${escRx(t)}(?![\\p{L}\\p{N}])`, 'giu');

function countHits(re, hay) {
  if (!hay) return 0;
  re.lastIndex = 0;
  let n = 0;
  while (re.exec(hay) !== null) {
    n++;
    if (n > 40) break; // a long article can hit the same word dozens of times
  }
  return n;
}

/* ---------------------------------------------------------------- index --- */

const cache = {};

// One fetch per language per page load; repeated calls share the promise, so
// the header panel and the page body never fetch the index twice.
export function loadIndex(lang = pageLang()) {
  if (cache[lang]) return cache[lang];
  cache[lang] = fetch(`${BASE}search-index-${lang}.json`)
    .then((r) => {
      if (!r.ok) throw new Error(`search index ${r.status}`);
      return r.json();
    })
    .then((docs) => {
      // Lower-case once here rather than per keystroke. Doubles the index's
      // memory footprint (~1 MB) and removes the per-query cost entirely.
      for (const d of docs) {
        d._t = d.t.toLowerCase();
        d._c = (d.c || '').toLowerCase();
        d._x = (d.x || '').toLowerCase();
        d._g = (d.g || '').toLowerCase();
        d._b = (d.b || '').toLowerCase();
      }
      return docs;
    })
    .catch((err) => {
      // Don't cache the failure — a flaky first fetch shouldn't disable
      // search for the rest of the visit.
      delete cache[lang];
      throw err;
    });
  return cache[lang];
}

/* --------------------------------------------------------------- ranking -- */

// Field weights. A title hit is worth far more than a body hit because the
// corpus mixes 6 KB articles with one-line pages: without the gap, any long
// article that mentions a word in passing would bury the page actually about
// it. Body hits are capped for the same reason.
const W_TITLE = 120;
const W_KEYS = 34; // category + tags
const W_EXCERPT = 20;
const W_BODY = 8;
const BODY_CAP = 24;
// Paid once per term when the title or keywords contain it as a whole word
// rather than only as a prefix. Big enough to reorder a page of prefix-only
// title hits, small enough not to outweigh a second matching term.
const W_EXACT = 90;

const DAY = 864e5;

export function search(docs, query, kind = 'all') {
  const terms = termsOf(query);
  if (!terms.length) return [];
  const phrase = String(query).toLowerCase().trim();
  const usePhrase = terms.length > 1;
  // One regex per term, built once — not once per document, which at 143 docs
  // would be over a thousand RegExp constructions per keystroke.
  const res = terms.map((t) => boundary([t]));
  const exacts = terms.map(exact);
  const now = Date.now();
  const out = [];

  for (const d of docs) {
    if (kind !== 'all' && d.k !== kind) continue;

    // Cheap reject first: indexOf over the raw fields throws out most of the
    // corpus for the price of a substring scan, so the (much slower) regex
    // only ever runs on plausible documents.
    let plausible = true;
    for (const t of terms) {
      if (
        d._t.indexOf(t) < 0 && d._c.indexOf(t) < 0 && d._x.indexOf(t) < 0 &&
        d._g.indexOf(t) < 0 && d._b.indexOf(t) < 0
      ) {
        plausible = false;
        break;
      }
    }
    if (!plausible) continue;

    let score = 0;
    let missing = false;
    for (let i = 0; i < res.length; i++) {
      const one = res[i];
      const inTitle = countHits(one, d._t);
      const inKeys = countHits(one, d._c) + countHits(one, d._g);
      const inExcerpt = countHits(one, d._x);
      const inBody = countHits(one, d._b);
      if (!inTitle && !inKeys && !inExcerpt && !inBody) {
        missing = true; // the substring was there, but not at a word start
        break;
      }
      score +=
        Math.min(inTitle, 2) * W_TITLE +
        Math.min(inKeys, 2) * W_KEYS +
        Math.min(inExcerpt, 2) * W_EXCERPT +
        Math.min(inBody * W_BODY, BODY_CAP);
      if ((inTitle || inKeys) && (countHits(exacts[i], d._t) || countHits(exacts[i], d._c))) {
        score += W_EXACT;
      }
    }
    if (missing) continue;

    if (usePhrase) {
      if (d._t.indexOf(phrase) >= 0) score += 260;
      else if (d._x.indexOf(phrase) >= 0 || d._b.indexOf(phrase) >= 0) score += 40;
    }
    if (d._t.startsWith(terms[0])) score += 60;

    // Recency as a tiebreak only — enough to separate two equally relevant
    // articles, never enough to outrank a better match.
    if (d.d) {
      const age = (now - Date.parse(d.d)) / DAY;
      if (age > 0 && age < 900) score += 12 * (1 - age / 900);
    }

    out.push({ d, score });
  }

  out.sort((a, b) => b.score - a.score || (b.d.d || '').localeCompare(a.d.d || ''));
  return out.map((r) => r.d);
}

/* --------------------------------------------------------------- display -- */

// Wrap matches in <mark>, escaping around them. Escaping happens per segment
// rather than up front so a term like "amp" can't match inside an entity the
// escaping itself introduced.
export function mark(text, terms) {
  if (!terms.length) return escHtml(text);
  const re = boundary(terms);
  let out = '';
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    const start = m.index + m[1].length;
    const end = start + m[2].length;
    out += escHtml(text.slice(last, start)) + '<mark>' + escHtml(text.slice(start, end)) + '</mark>';
    last = end;
    if (re.lastIndex === m.index) re.lastIndex++;
  }
  return out + escHtml(text.slice(last));
}

// A window of body text around the first match, so the row shows *why* it
// matched — for a full-text index that is most of the value: the query often
// hits a sentence three-quarters of the way through an article that the
// excerpt never mentions. Falls back to the excerpt when the match is only in
// the title or the keywords.
export function snippet(doc, terms, len = 170) {
  const body = doc.b || '';
  if (body) {
    const re = boundary(terms);
    const m = re.exec(body);
    if (m) {
      const at = m.index + m[1].length;
      let start = Math.max(0, at - Math.round(len / 3));
      // Don't start mid-word.
      if (start > 0) {
        const sp = body.indexOf(' ', start);
        if (sp >= 0 && sp < start + 24) start = sp + 1;
      }
      const cut = body.slice(start, start + len);
      const end = start + len < body.length;
      return (start > 0 ? '…' : '') + mark(cut, terms) + (end ? '…' : '');
    }
  }
  return mark(doc.x || '', terms);
}

/* -------------------------------------------------------------- tracking -- */

// GA4's recommended site-search event. gtag only exists after the visitor
// accepts cookies (public/cookie-consent.js), so this is a no-op otherwise —
// which is the point: the analytics value of search is knowing what people
// looked for and didn't find, and it is not worth breaking consent for.
let lastTracked = '';
export function trackSearch(q) {
  const term = String(q).trim().toLowerCase();
  if (!term || term === lastTracked) return;
  lastTracked = term;
  if (typeof window.gtag === 'function') window.gtag('event', 'search', { search_term: term });
}

/* ----------------------------------------------------------------- utils -- */

export const href = (u) => BASE.replace(/\/$/, '') + u;

export function debounce(fn, ms) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), ms);
  };
}
