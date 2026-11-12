#!/usr/bin/env node
/**
 * Card-summary and search-description length check (OPS-471).
 *
 *   node scripts/check-summary-lengths.mjs            report only, exit 0
 *   node scripts/check-summary-lengths.mjs --strict    exit 1 if anything is over
 *
 * Two fields on every post have a target length and nothing in the build enforced
 * them, so they drifted: by November 2026, 99 of 124 posts were over target, almost
 * all written after the earlier trimming passes. See CLAUDE.md, "Card summary and
 * search description lengths".
 *
 *   excerpt   120-170 characters  the summary under the card on /blog/
 *   metaDesc  <= 160 characters   the Google search description
 *
 * Measured per language. Ukrainian runs ~10-15% longer than the same sentence in
 * English, so a UA string translated straight from a 165-character EN one will be
 * over; it needs its own budget.
 *
 * Reads src/data/posts/ off disk on purpose. It must NOT import src/data/blog.js:
 * that uses import.meta.glob, a Vite transform, which throws under plain node
 * ("(intermediate value).glob is not a function"). Same reason check-links.mjs
 * reads the directory itself.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIR = 'src/data/posts';
const STRICT = process.argv.includes('--strict');
const EX_MIN = 120, EX_MAX = 170, MD_MAX = 160;

if (!fs.existsSync(DIR)) {
  console.error(`No ${DIR}/ — run this from the Website/ directory.`);
  process.exit(2);
}

const rows = [];
for (const file of fs.readdirSync(DIR).filter(f => f.endsWith('.js')).sort()) {
  const mod = await import(pathToFileURL(path.resolve(DIR, file)).href);
  const post = mod.default;
  if (!post?.slug) continue;
  for (const lang of ['en', 'ua']) {
    const o = post[lang];
    if (!o) continue;
    const ex = (o.excerpt || '').length;
    const md = (o.metaDesc || '').length;
    const problems = [];
    if (!o.excerpt) problems.push('excerpt missing');
    else if (ex > EX_MAX) problems.push(`excerpt ${ex} (max ${EX_MAX})`);
    else if (ex < EX_MIN) problems.push(`excerpt ${ex} (min ${EX_MIN})`);
    if (!o.metaDesc) problems.push('metaDesc missing');
    else if (md > MD_MAX) problems.push(`metaDesc ${md} (max ${MD_MAX})`);
    if (problems.length) rows.push({ slug: post.slug, lang, ex, md, problems });
  }
}

const total = fs.readdirSync(DIR).filter(f => f.endsWith('.js')).length;
if (!rows.length) {
  console.log(`All ${total} posts within target in both languages.`);
  process.exit(0);
}

rows.sort((a, b) => Math.max(b.ex, b.md) - Math.max(a.ex, a.md));
console.log(`${rows.length} of ${total * 2} post/language pairs off target:\n`);
for (const r of rows) console.log(`  ${r.slug} [${r.lang}] — ${r.problems.join(', ')}`);
console.log(`\nTargets: excerpt ${EX_MIN}-${EX_MAX} characters, metaDesc <= ${MD_MAX}. Compress; never add a claim the article does not make.`);
process.exit(STRICT ? 1 : 0);
