#!/usr/bin/env node
/**
 * Link checker for the built site.
 *
 *   node scripts/check-links.mjs              internal links, images and citation
 *                                             hygiene. No network. Exits 1 on a break.
 *   node scripts/check-links.mjs --external   additionally resolves every off-site URL.
 *
 * Why the split: internal breaks are unambiguous and always our fault, so they fail
 * the build. External results are not — journal and publisher sites routinely serve
 * 403 to anything that looks automated, and a 403 from Elsevier says nothing about
 * whether the citation is good. Those are reported as inconclusive, never as broken,
 * and --external never fails the build on its own. Read the summary.
 *
 * Not to be confused with scripts/link-audit.mjs, which measures how MANY internal
 * links point at a page (an SEO density question, OPS-313). This one asks whether
 * the links resolve at all.
 *
 * Note for anyone running this inside a Claude Code session: outbound HTTPS there
 * goes through an egress policy that 403s nearly every publisher host, so --external
 * will report almost everything inconclusive and tell you nothing. It is meant for
 * GitHub Actions runners, which have open egress.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const EXTERNAL = process.argv.includes('--external');

if (!fs.existsSync(DIST)) {
  console.error(`No ${DIST}/ directory — run \`npm run build\` first.`);
  process.exit(2);
}

/* ---------- collect ---------- */

const htmlFiles = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) htmlFiles.push(p);
  }
})(DIST);

const internal = new Map();
const images = new Map();
const external = new Map();
const add = (m, k, v) => { if (!m.has(k)) m.set(k, new Set()); m.get(k).add(v); };

for (const f of htmlFiles) {
  const html = fs.readFileSync(f, 'utf8');
  const page = '/' + path.relative(DIST, f).replace(/index\.html$/, '').replace(/\\/g, '/');
  for (const m of html.matchAll(/<a\b[^>]*?href="([^"]+)"/gi)) {
    const h = m[1].trim();
    if (!h || /^(#|mailto:|tel:|javascript:|data:)/i.test(h)) continue;
    if (/^https?:\/\//i.test(h)) add(external, h.split('#')[0], page);
    else if (h.startsWith('/')) add(internal, h.split('#')[0], page);
  }
  for (const m of html.matchAll(/<img\b[^>]*?src="([^"]+)"/gi)) {
    const s = m[1].trim();
    if (s.startsWith('/')) add(images, s.split('?')[0], page);
  }
}

/* ---------- internal ---------- */

const resolves = (target) => {
  const t = target.split('?')[0];
  return [
    path.join(DIST, t),
    path.join(DIST, t, 'index.html'),
    path.join(DIST, t.replace(/\/$/, '') + '.html'),
    path.join(DIST, t.replace(/\/$/, ''), 'index.html'),
  ].some((c) => fs.existsSync(c) && fs.statSync(c).isFile());
};

const brokenInternal = [...internal].filter(([t]) => !resolves(t));
const brokenImages = [...images].filter(([t]) => !fs.existsSync(path.join(DIST, t.split('?')[0])));

/* ---------- citation hygiene (offline) ---------- */
/* Scoped to `refs` blocks only — a citation. Homepages in "Related reading" are
 * signposts ("where to find trials"), and a homepage is the right target for those,
 * so checking rendered HTML flags them wrongly. Read the data module instead.
 *
 * Neither of these is breakage. A search-results URL names no particular study and
 * its results drift; a bare domain does not contain the claim being cited. Both
 * leave a reader unable to check the thing the sentence asserts. Warnings, not
 * failures. */

/* Deliberate exceptions: a citation whose subject really is the site itself.
 * Keyed slug|url, with the reason, so the list stays auditable rather than
 * becoming a place to silence inconvenient warnings. */
const CITATION_EXCEPTIONS = new Map([
  ['clinical-trials-women-over-40|https://clinicaltrials.gov/',
   'cites the registry as the method used to verify every entry, not a single study'],
]);

const citationWarnings = [];
{
  const { POSTS } = await import('../src/data/blog.js');
  const seen = new Set();
  for (const post of POSTS) {
    for (const lang of ['en', 'ua']) {
      for (const blk of post[lang]?.blocks ?? []) {
        if (blk.t !== 'refs') continue;
        for (const item of blk.items ?? []) {
          if (!item.url || !/^https?:/i.test(item.url)) continue;
          const key = post.slug + '|' + item.url;
          if (seen.has(key) || CITATION_EXCEPTIONS.has(key)) continue;
          seen.add(key);
          let u;
          try { u = new URL(item.url); } catch {
            citationWarnings.push({ kind: 'malformed citation URL', url: item.url, slug: post.slug, cite: item.cite });
            continue;
          }
          if (u.search && /[?&](term|q|query|search)=/i.test(u.search)) {
            citationWarnings.push({ kind: 'search-results URL cited — names no specific study', url: item.url, slug: post.slug, cite: item.cite });
          } else if (u.pathname === '/' || u.pathname === '') {
            citationWarnings.push({ kind: 'bare domain cited — does not point at the claim', url: item.url, slug: post.slug, cite: item.cite });
          }
        }
      }
    }
  }
}

/* ---------- report ---------- */

const lines = [];
const say = (s = '') => { lines.push(s); console.log(s); };

say(`Scanned ${htmlFiles.length} pages.`);
say(`  internal links  ${internal.size}`);
say(`  images          ${images.size}`);
say(`  external links  ${external.size}`);
say();

say(`Broken internal links: ${brokenInternal.length}`);
for (const [t, src] of brokenInternal) say(`  ${t}\n      from ${[...src].slice(0, 5).join(', ')}${src.size > 5 ? ` (+${src.size - 5})` : ''}`);
say();
say(`Missing images: ${brokenImages.length}`);
for (const [t, src] of brokenImages) say(`  ${t}\n      from ${[...src].slice(0, 5).join(', ')}${src.size > 5 ? ` (+${src.size - 5})` : ''}`);
say();
say(`Citation warnings: ${citationWarnings.length}`);
for (const w of citationWarnings) say(`  ${w.slug}: ${w.kind}\n      cite: ${w.cite}\n      url : ${w.url}`);

let externalBroken = [];
if (EXTERNAL) {
  const urls = [...external.keys()].filter((u) => !/lenafilatova\.co\.uk$/.test(new URL(u).hostname));
  say();
  say(`Resolving ${urls.length} external URLs...`);

  const UA = 'Mozilla/5.0 (compatible; lenafilatova-link-check/1.0; +https://lenafilatova.co.uk)';
  const attempt = async (url) => {
    for (const method of ['HEAD', 'GET']) {
      try {
        const r = await fetch(url, {
          method, redirect: 'follow', signal: AbortSignal.timeout(20000),
          headers: { 'user-agent': UA, accept: '*/*' },
        });
        if (r.status === 405 && method === 'HEAD') continue;
        return { url, status: r.status };
      } catch (e) {
        if (method === 'GET') return { url, status: 0, error: String(e.message || e).slice(0, 120) };
      }
    }
    return { url, status: 0, error: 'unreachable' };
  };

  /* A timeout or connection reset is as often the runner or a slow host as a dead
   * link, and a false "broken" here costs someone a manual check. Retry once. */
  const check = async (url) => {
    const first = await attempt(url);
    if (first.status !== 0) return first;
    return attempt(url);
  };

  const results = [];
  const queue = [...urls];
  const workers = Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const u = queue.shift();
      results.push(await check(u));
    }
  });
  await Promise.all(workers);

  /* Hosts that refuse connections from CI runners at the network level, so the
   * check cannot say anything about them either way. A connection reset is not
   * evidence of a dead link — each of these was confirmed live by hand. Keep the
   * list short and re-check entries occasionally; it is a place to record what
   * was verified, not a place to hide failures. */
  const BLOCKS_AUTOMATED_CHECKS = new Set([
    'www.trialnet.org', // live; refuses datacenter IPs, verified by hand 25 Aug 2026
  ]);

  /* The publisher declined to talk to a bot — says nothing about the link.
   * 403 is the common one; 412 is Cloudflare's precondition check (Cochrane
   * serves it); 451 is geo-blocking; 429 is rate limiting, which our own
   * concurrency can provoke. */
  const inconclusive = results.filter(
    (r) => [401, 403, 412, 429, 451].includes(r.status) ||
           (r.status === 0 && BLOCKS_AUTOMATED_CHECKS.has(new URL(r.url).hostname)),
  );
  const ok = results.filter((r) => r.status >= 200 && r.status < 400);
  externalBroken = results.filter((r) => !ok.includes(r) && !inconclusive.includes(r));

  say();
  say(`  resolved OK    ${ok.length}`);
  say(`  inconclusive   ${inconclusive.length}  (401/403/429 — publisher blocked the check)`);
  say(`  failed         ${externalBroken.length}`);
  say();
  for (const r of externalBroken.sort((a, b) => a.status - b.status)) {
    say(`  ${r.status || 'ERR'}  ${r.url}`);
    say(`        on ${[...external.get(r.url)].slice(0, 3).join(', ')}`);
    if (r.error) say(`        ${r.error}`);
  }
  if (inconclusive.length) {
    say();
    say('  Inconclusive (verify by hand if one looks wrong):');
    for (const r of inconclusive) say(`  ${r.status}  ${r.url}`);
  }
}

if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, '```\n' + lines.join('\n') + '\n```\n');
}

// Heroes not yet supplied. Since a post with no hero renders without one and
// shares under the default image, nothing is broken and nothing here fails the
// build — but a post going out without its picture should still be visible in
// the run summary, which is the one useful thing the old hard failure did.
{
  const { POSTS } = await import('../src/data/blog.js');
  const pending = POSTS.filter((p) => p.image && !fs.existsSync(path.join(DIST, p.image)));
  say();
  say(`Heroes not yet supplied: ${pending.length}`);
  for (const p of pending) say(`  ${p.image}  (${p.slug}) — brief goes on OPS-315`);
}

const hardFailures = brokenInternal.length + brokenImages.length;
if (hardFailures) {
  console.error(`\n${hardFailures} broken internal link(s) or missing image(s).`);
  process.exit(1);
}
console.log('\nNo broken internal links or missing images.');
