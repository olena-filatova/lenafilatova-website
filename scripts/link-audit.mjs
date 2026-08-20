/**
 * OPS-313 — measure the internal link graph of the built site.
 *
 * WHY THIS FILE EXISTS. OPS-313 asked whether the 11 pages Google has
 * discovered but never crawled — 8 of them Ukrainian, including the /ua/blog/
 * hub — are starved of internal links. That is a question about the built HTML,
 * and it kept getting answered by eyeballing templates, which is how the
 * hypothesis survived as long as it did. It is wrong: /ua/ is a complete mirror
 * of /en/, and the uncrawled pages are linked at or above their crawled peers'
 * median. See the OPS-313 comment for the numbers.
 *
 * The script stays because "is this page under-linked?" is a recurring SEO
 * question on this site and deserves a measurement rather than a guess.
 *
 * TWO THINGS IT GETS RIGHT that a naive grep does not:
 *
 *  1. It counts links only FROM pages in sitemap.xml. The build emits ~150
 *     retired recipe pages that are absent from the sitemap and 301 at the edge
 *     (OPS-182). Their links are worth nothing and would otherwise inflate
 *     every count.
 *  2. It separates site chrome (header nav, footer, language toggle) from
 *     in-content links. Chrome links are on all ~300 pages and tell you
 *     nothing; the editorial ones are the signal. A page reachable ONLY via
 *     chrome is the shape OPS-313 was looking for.
 *
 * Run: npm run build && npm run link-audit
 *      npm run link-audit -- /ua/blog/ /recipes/summer-berry-pie/   # specific URLs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const ORIGIN = 'https://lenafilatova.co.uk';

const walk = (dir, out = []) => {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (entry.endsWith('.html')) out.push(p);
  }
  return out;
};

const routeOf = (file) => '/' + relative(DIST, file).replace(/index\.html$/, '');

/* Chrome is everything up to </header> plus everything from the last <footer>.
   Whatever sits between the two is the page's own content. */
const splitChrome = (html) => {
  const headEnd = html.indexOf('</header>');
  const footStart = html.lastIndexOf('<footer');
  const head = headEnd >= 0 ? html.slice(0, headEnd) : '';
  const foot = footStart >= 0 ? html.slice(footStart) : '';
  const content = html.slice(
    headEnd >= 0 ? headEnd : 0,
    footStart >= 0 ? footStart : undefined
  );
  return { chrome: head + foot, content };
};

const ASSET = /\.(css|js|xml|json|png|jpe?g|webp|svg|ico|txt|pdf|html)$/i;
const linksIn = (html) =>
  [...html.matchAll(/href="(\/[^"#?]*)"/g)]
    .map((m) => m[1])
    .filter((h) => !ASSET.test(h))
    .map((h) => (h.endsWith('/') ? h : h + '/'));

let files;
try {
  files = walk(DIST);
} catch {
  console.error('No dist/ — run `npm run build` first.');
  process.exit(1);
}

const sitemap = new Set(
  [...readFileSync(join(DIST, 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    m[1].replace(ORIGIN, '')
  )
);

const content = new Map(); // target -> Set(source)
const chrome = new Map();
const record = (map, target, source) => {
  if (!map.has(target)) map.set(target, new Set());
  map.get(target).add(source);
};

for (const file of files) {
  const source = routeOf(file);
  if (!sitemap.has(source)) continue; // retired / non-indexable page: its links carry nothing
  const split = splitChrome(readFileSync(file, 'utf8'));
  for (const t of linksIn(split.content)) if (t !== source) record(content, t, source);
  for (const t of linksIn(split.chrome)) if (t !== source) record(chrome, t, source);
}

const nContent = (r) => content.get(r)?.size ?? 0;
const nChrome = (r) => chrome.get(r)?.size ?? 0;

const requested = process.argv.slice(2);
if (requested.length) {
  console.log('route'.padEnd(52), 'in-content', 'chrome');
  for (const raw of requested) {
    const r = raw.endsWith('/') ? raw : raw + '/';
    console.log(r.padEnd(52), String(nContent(r)).padStart(10), String(nChrome(r)).padStart(6));
    const from = [...(content.get(r) ?? [])].sort();
    if (from.length) console.log('   linked from: ' + from.join('\n                '));
  }
  process.exit(0);
}

/* Default report: the two things worth watching. */
const live = [...sitemap].sort();

const orphans = live.filter((r) => !nContent(r) && !nChrome(r));
console.log(`=== indexable pages with NO inbound link at all (${orphans.length}) ===`);
console.log(orphans.join('\n') || '(none)');

const chromeOnly = live.filter((r) => !nContent(r) && nChrome(r));
console.log(`\n=== indexable pages reachable ONLY via header/footer (${chromeOnly.length}) ===`);
console.log(chromeOnly.join('\n') || '(none)');

/* EN vs UA parity. If the Ukrainian mirror is ever under-linked relative to its
   English twin, it shows up here as a non-zero gap. */
console.log('\n=== EN / UA parity, in-content inbound links ===');
console.log('en route'.padEnd(38), 'en', ' ua', 'gap');
const gaps = live
  .filter((r) => !r.startsWith('/ua/'))
  .map((en) => [en, '/ua' + en])
  .filter(([, ua]) => sitemap.has(ua))
  .map(([en, ua]) => [en, nContent(en), nContent(ua)])
  .filter(([, e, u]) => e !== u);
if (!gaps.length) console.log('(none — every UA page matches its EN twin)');
for (const [en, e, u] of gaps.sort((a, b) => Math.abs(b[1] - b[2]) - Math.abs(a[1] - a[2])).slice(0, 25))
  console.log(en.padEnd(38), String(e).padStart(3), String(u).padStart(3), String(u - e).padStart(4));
console.log(`\n${live.length} indexable pages · ${files.length} built`);
