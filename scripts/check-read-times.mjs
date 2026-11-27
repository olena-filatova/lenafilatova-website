#!/usr/bin/env node
/**
 * Reading-time check (OPS-471, section 5).
 *
 *   node scripts/check-read-times.mjs            report only, exit 0
 *   node scripts/check-read-times.mjs --strict    exit 1 if anything is off
 *   node scripts/check-read-times.mjs --json      machine-readable, for a fixer
 *
 * Every post's `meta` line carries a reading time ("9 min read" / "9 хв читання").
 * Nothing ever computed it, so the numbers were guessed one post at a time and
 * drifted badly: on 2026-11-27, 51 of 130 posts were out by more than a minute and
 * the worst (alcohol-and-blood-sugar) claimed 10 minutes for a 6,044-word article
 * that actually takes about 27. See CLAUDE.md, "Reading time".
 *
 * THE RULE, so it never has to be re-invented:
 *
 *   countable words = lead + the text of quote/h/p blocks + table cells + FAQ (q+a)
 *   NOT counted     = `refs` (the sources list) and `links` ("Keep reading")
 *                     These are appendices. A reader does not read them through,
 *                     and counting them added 3-5 minutes to the longest posts.
 *   Markdown links  [label](url) count as their label only.
 *
 *   minutes = max(1, round(words / wpm)),  wpm: EN 220, UA 200
 *
 * Why those two numbers. 220 wpm is both a normal adult non-fiction reading speed
 * and the median the site's own hand-written figures already implied, so it moves
 * the fewest posts. Ukrainian carries the same article in about 0.90 of the English
 * word count (measured across all 130 posts, median 0.896), so 200 wpm for UA lands
 * on the same minute figure as EN at 220 for all but one post — which is why the two
 * languages agree naturally rather than by being forced to.
 *
 * Tolerance is +/-1 minute: the figure is an estimate and should not churn in a diff
 * every time a sentence is edited.
 *
 * Reads src/data/posts/ off disk on purpose. It must NOT import src/data/blog.js:
 * that uses import.meta.glob, a Vite transform, which throws under plain node.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIR = 'src/data/posts';
const STRICT = process.argv.includes('--strict');
const AS_JSON = process.argv.includes('--json');

export const WPM = { en: 220, ua: 200 };
export const TOLERANCE = 1;
const PROSE_BLOCKS = new Set(['p', 'h', 'quote']);
const UNIT = { en: 'min read', ua: 'хв читання' };

if (!fs.existsSync(DIR)) {
  console.error(`No ${DIR}/ — run this from the Website/ directory.`);
  process.exit(2);
}

/** Words a reader actually reads, per the rule above. */
export function countWords(lang) {
  const parts = [];
  if (lang.lead) parts.push(lang.lead);
  for (const b of lang.blocks || []) {
    if (PROSE_BLOCKS.has(b.t) && b.text) parts.push(b.text);
    if (b.t === 'table') {
      for (const row of b.rows || []) parts.push(Array.isArray(row) ? row.join(' ') : String(row));
      if (Array.isArray(b.head)) parts.push(b.head.join(' '));
    }
    // list-ish blocks: count plain string items and {text} items, nothing else
    if (!PROSE_BLOCKS.has(b.t) && b.t !== 'table' && b.t !== 'refs' && b.t !== 'links') {
      if (b.text) parts.push(b.text);
      for (const item of b.items || []) {
        if (typeof item === 'string') parts.push(item);
        else if (item && item.text) parts.push(item.text);
      }
    }
  }
  for (const f of lang.faq || []) {
    if (f.q) parts.push(f.q);
    if (f.a) parts.push(f.a);
  }
  return parts
    .join(' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // [label](url) -> label
    .split(/\s+/)
    .filter(Boolean).length;
}

export const minutesFor = (words, lang) => Math.max(1, Math.round(words / WPM[lang]));

const files = fs.readdirSync(DIR).filter(f => f.endsWith('.js')).sort();
const rows = [];
for (const file of files) {
  const mod = await import(pathToFileURL(path.resolve(DIR, file)).href);
  const post = mod.default;
  if (!post?.slug) continue;
  for (const lang of ['en', 'ua']) {
    const o = post[lang];
    if (!o) continue;
    const words = countWords(o);
    const should = minutesFor(words, lang);
    const meta = o.meta || '';
    const found = meta.match(/(\d+)\s*(?:min read|хв читання)/);
    const stated = found ? Number(found[1]) : null;
    const ok = stated !== null && Math.abs(stated - should) <= TOLERANCE;
    if (!ok) {
      rows.push({
        slug: post.slug, file, lang, words, stated, should,
        meta,
        newMeta: stated === null ? null : meta.replace(
          /\d+\s*(min read|хв читання)/,
          `${should} ${UNIT[lang]}`,
        ),
      });
    }
  }
}

if (AS_JSON) {
  console.log(JSON.stringify(rows, null, 2));
  process.exit(STRICT && rows.length ? 1 : 0);
}

const pairs = files.length * 2;
if (!rows.length) {
  console.log(`Reading times: all ${pairs} post/language pairs within ${TOLERANCE} min.`);
  process.exit(0);
}

console.log(`Reading times off by more than ${TOLERANCE} min: ${rows.length} of ${pairs} pairs\n`);
console.log('  diff  lang  says  should  words  slug');
for (const r of rows.sort((a, b) => Math.abs(b.stated - b.should) - Math.abs(a.stated - a.should))) {
  const diff = r.stated === null ? '  ?' : String(r.should - r.stated).padStart(4);
  console.log(
    `  ${diff}  ${r.lang}    ${String(r.stated ?? '-').padStart(4)}  ${String(r.should).padStart(6)}  ${String(r.words).padStart(5)}  ${r.slug}`,
  );
}
console.log(`\nRule: words / ${WPM.en} (EN) or / ${WPM.ua} (UA), rounded; sources and "Keep reading" not counted.`);
process.exit(STRICT ? 1 : 0);
