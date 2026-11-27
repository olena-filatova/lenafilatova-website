#!/usr/bin/env node
/**
 * check-brief-duplicate.mjs — does this news brief already exist on the site?
 *
 * Every news brief that arrives as a Jira ticket carries a source URL and a
 * handful of distinctive numbers or names. A published post that quotes the
 * same source, or the same unusual figures, is the same story. This script
 * looks for both, because neither test alone is enough: on 23 Nov 2026 the
 * source-URL test alone cleared two briefs that were in fact already live,
 * and the number test alone would have missed a third.
 *
 * Usage:
 *   node scripts/check-brief-duplicate.mjs "<text of the brief>"
 *   node scripts/check-brief-duplicate.mjs --file brief.txt
 *
 * Paste the whole Jira description in. It pulls out the URLs, DOIs, author
 * surnames and distinctive figures itself and reports any post that shares
 * them, loudest match first.
 *
 * Exit code 1 means at least one strong match: treat the brief as a duplicate
 * and check the matching post before writing anything.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const POSTS = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'posts');

// --- pull the identifying marks out of a brief -----------------------------

const NOT_A_STUDY = new Set([
  'HRT', 'GLP-1', 'GLP', 'CGM', 'BMI', 'HBA1C', 'HBA', 'NHS', 'FDA', 'WHO',
  'UK', 'USA', 'AHA', 'ASDS', 'EASD', 'ADA', 'DOI', 'PMC', 'RCT', 'QOL',
  'MVPA', 'NIH', 'CEO', 'PDF', 'URL', 'LINKS', 'FAQ', 'CATS', 'ISBN', 'ISSN',
  'NICE', 'NHS', 'EMA', 'MHRA', 'BMI', 'CDC', 'JAAD',
]);

const COMMON = new Set([
  'study', 'studies', 'women', 'woman', 'research', 'finds', 'found', 'after',
  'their', 'there', 'about', 'which', 'could', 'might', 'while', 'where',
  'reveals', 'shows', 'linked', 'people', 'adults', 'years', 'according',
]);

const STOP_HOSTS = /^(www\.)?(google|twitter|x|facebook|linkedin|github)\./i;

function marks(text) {
  const urls = new Set();
  const dois = new Set();
  const figures = new Set();
  const names = new Set();

  for (const m of text.matchAll(/https?:\/\/[^\s"'`)\]]+/g)) {
    const u = m[0].replace(/[.,;)\]]+$/, '');
    try {
      const { hostname, pathname } = new URL(u);
      if (STOP_HOSTS.test(hostname)) continue;
      // The path's last meaningful segment identifies the story; query
      // strings and trackers differ between outlets covering the same one.
      const seg = pathname.split('/').filter(Boolean).pop();
      if (seg && seg.length > 8) urls.add(seg.toLowerCase());
    } catch { /* not a usable URL */ }
  }

  for (const m of text.matchAll(/10\.\d{4,9}\/[^\s"'`)\],]+/g)) {
    dois.add(m[0].replace(/[.,;)\]]+$/, '').toLowerCase());
  }

  // Figures are only useful when they are distinctive. Strip the URLs and
  // DOIs first — otherwise their digits ("1016" out of a DOI, "20261023" out
  // of a Healio path) come back as fake matches. Then drop years, which
  // appear in every post, and keep only comma-grouped counts, 4+ digit
  // numbers and one-decimal percentages.
  const prose = text.replace(/https?:\/\/\S+/g, ' ').replace(/10\.\d{4,9}\/\S+/g, ' ');
  for (const m of prose.matchAll(/\b\d{1,3}(?:,\d{3})+\b/g)) figures.add(m[0]);
  for (const m of prose.matchAll(/(?<![\d,.])\d{4,}(?![\d,])/g)) {
    const n = Number(m[0]);
    if (n >= 1900 && n <= 2100) continue; // a year is not a finding
    figures.add(m[0]);
  }
  for (const m of prose.matchAll(/\b\d{1,2}\.\d%/g)) figures.add(m[0]);

  // "Lead author: K. Dasgupta", "Lead researcher: Ronen Arbel, PhD",
  // "Dr Sabrina Fabi", "Prof. Dominic Ehrmann"
  for (const m of prose.matchAll(/(?:Lead (?:author|researcher)|First author|Dr|Prof\.?)[: ]+\s*(?:[A-Z][A-Za-z.'-]*\s+)?([A-Z][a-z]{3,})/g)) {
    names.add(m[1]);
  }

  // Trial and study names are the strongest signal of all and survive being
  // reported by different outlets with different numbers: "RESET for
  // Remission", "PRO-MENTAL", "DCCT/EDIC". Catch ALL-CAPS tokens and
  // Capitalised-Run names, minus the common words that merely look like them.
  const studies = new Set();
  for (const m of prose.matchAll(/\b[A-Z][A-Z0-9-]{3,}(?:\s+(?:for|of|in|and)\s+[A-Z][a-z]+)?/g)) {
    const t = m[0].trim();
    if (!NOT_A_STUDY.has(t.split(/\s+/)[0])) studies.add(t);
  }

  // The headline itself. Two posts about the same study usually share three
  // or more of its uncommon words.
  const headline = (text.trim().split('\n')[0] || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 4 && !COMMON.has(w));

  return { urls: [...urls], dois: [...dois], studies: [...studies],
           figures: [...figures], names: [...names], headline };
}

// --- read every published post ---------------------------------------------

function posts() {
  return readdirSync(POSTS)
    .filter((f) => f.endsWith('.js'))
    .map((f) => ({ slug: f.replace(/\.js$/, ''), body: readFileSync(join(POSTS, f), 'utf8') }));
}

// --- score ------------------------------------------------------------------

const WEIGHT = { dois: 10, urls: 6, studies: 8, names: 3, figures: 2 };

const LABEL = { dois: 'DOI', urls: 'source page', studies: 'study name',
                names: 'author', figures: 'figure' };

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function run(text) {
  const m = marks(text);
  const found = Object.values(m).some((a) => a.length);
  if (!found) {
    console.error('Nothing identifying in that text — no URL, DOI, figure or author name.');
    console.error('Check the brief by hand against src/data/posts/ before writing.');
    process.exit(2);
  }

  const hits = [];
  for (const { slug, body } of posts()) {
    const hay = body.toLowerCase();
    const why = [];
    let score = 0;
    for (const kind of ['dois', 'urls', 'studies', 'names', 'figures']) {
      for (const needle of m[kind]) {
        // Names and figures must match as whole words: "Fabi" should not be
        // found inside another word, and "379" not inside "2,379".
        const loose = kind === 'dois' || kind === 'urls' || kind === 'studies';
        const found = loose
          ? hay.includes(needle.toLowerCase())
          : new RegExp(`(?<![\\w,.])${escape(needle)}(?![\\w,])`, 'i').test(body);
        if (found) {
          score += WEIGHT[kind];
          why.push(`${LABEL[kind]}: ${needle}`);
        }
      }
    }
    // Headline overlap: three or more uncommon words shared with the post's
    // title means the same subject even when every citation differs.
    const title = (body.match(/"title":\s*"([^"]{10,})"/) || [])[1] || slug.replace(/-/g, ' ');
    const shared = m.headline.filter((w) => title.toLowerCase().includes(w));
    if (shared.length >= 3) {
      score += 5;
      why.push(`headline: ${shared.slice(0, 5).join(', ')}`);
    }

    if (score) hits.push({ slug, score, why });
  }

  hits.sort((a, b) => b.score - a.score);

  if (!hits.length) {
    console.log('No published post shares this brief\'s sources, figures or authors.');
    console.log('Looks new — but skim the titles in src/data/posts/ for the same subject before writing.');
    return 0;
  }

  console.log(`Looked for: ${m.dois.length} DOI(s), ${m.urls.length} source page(s), ` +
              `${m.studies.length} study name(s), ${m.names.length} author name(s), ` +
              `${m.figures.length} figure(s), ${m.headline.length} headline word(s).\n`);

  for (const h of hits.slice(0, 8)) {
    const verdict = h.score >= 6 ? 'ALREADY PUBLISHED' : 'possible overlap';
    console.log(`${verdict}  /blog/${h.slug}/   (score ${h.score})`);
    for (const w of h.why.slice(0, 6)) console.log(`    ${w}`);
    console.log('');
  }

  const strong = hits.filter((h) => h.score >= 6);
  if (strong.length) {
    console.log(`${strong.length} post(s) look like the same story. Read ${strong[0].slug} before writing anything.`);
    return 1;
  }
  console.log('Weak matches only — probably a different story, but open the top one and check.');
  return 0;
}

const argv = process.argv.slice(2);
const text = argv[0] === '--file' ? readFileSync(argv[1], 'utf8') : argv.join(' ');
if (!text.trim()) {
  console.error('Usage: node scripts/check-brief-duplicate.mjs "<brief text>"  |  --file <path>');
  process.exit(2);
}
process.exit(run(text));
