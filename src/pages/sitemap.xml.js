// sitemap.xml — same filename Google Search Console already has submitted for
// the live site, so cutover needs no GSC change. URLs are built from the same
// data modules the pages render from, so a new post/recipe is in the sitemap
// automatically. Every entry carries EN⇄UA hreflang alternates (+ x-default),
// matching the shape of the old repo's build-sitemap.mjs output.
// NOTE: uses the canonical origin (site), never the preview base path.
import { POSTS } from '../data/blog.js';
import { PUBLISHED } from '../data/recipes.js';
import { CALCULATORS } from '../data/calculators.js';
import { LEGAL_SLUGS } from '../data/site.js';
import { resolveTags, tagPath, MIN_INDEXABLE } from '../data/tags-lib.js';

const SITE = 'https://lenafilatova.co.uk';

// Pinned <lastmod> dates for pages that have no content date of their own
// (OPS-208). Previously these all used the build date, so every deploy stamped
// nearly every URL "modified today" and taught Google to ignore the signal.
// Each date is the last git commit that meaningfully touched the page's source
// (git log -1 --format=%as -- <file>) as of 2026-08-10 — bump a date manually
// whenever its page meaningfully changes. Blog posts use p.date and recipes
// use r.dateAdded, so those never need entries here.
const PAGE_DATES = {
  '/': '2026-08-04', // src/pages/index.astro (+ ua) — homepage changes often; keep current
  '/about/': '2026-07-13',
  '/contact/': '2026-07-13',
  '/resources/': '2026-07-13',
  '/dia-school/': '2026-08-17', // OPS-264 — waitlist page (UA is the real one)
  '/blog/': '2026-07-12',
  '/recipes/': '2026-08-05',
  // Legal pages (LEGAL_SLUGS)
  '/privacy/': '2026-07-13',
  '/cookies/': '2026-07-13',
  '/terms/': '2026-07-13',
  '/refunds/': '2026-07-13',
  '/accessibility/': '2026-07-13',
  // Calculators — resources/[tool].astro template + data/calculators.js
  '/resources/food-calculator/': '2026-07-13',
  '/resources/exercise-calculator/': '2026-07-13',
  '/resources/insulin-pump-doses/': '2026-07-13',
};

// [enPath, lastmod, imagePath?] — uaPath is derived as /ua + enPath.
const pairs = [];
const add = (path, lastmod = PAGE_DATES[path], image = null) => {
  // Fail the build rather than silently regress to a fake date if a new
  // static page is added without a PAGE_DATES entry.
  if (!lastmod) throw new Error(`sitemap.xml.js: no lastmod for ${path} — add it to PAGE_DATES`);
  pairs.push([path, lastmod, image]);
};

add('/');
add('/about/');
add('/contact/');
add('/resources/');
// Dia.School (OPS-264). Both languages: /ua/dia-school/ is the waitlist itself,
// /dia-school/ the English "this runs in Ukrainian" explainer that points at it.
add('/dia-school/');
// NOTE: /shop/ deliberately absent — the shop is hidden (nothing on sale yet).
add('/blog/');
add('/recipes/');
Object.values(LEGAL_SLUGS).forEach((s) => add(`/${s}/`));
CALCULATORS.forEach((c) => add(`/resources/${c.slug}/`));
POSTS.forEach((p) => add(`/blog/${p.slug}/`, p.date, p.image));
// Tag archives (OPS-367). lastmod is the newest post on the tag, so a tag only
// looks modified when something was actually filed under it. Tags under
// MIN_INDEXABLE ship `noindex` — submitting them here would be asking Google to
// crawl a page the page itself asks it to drop.
resolveTags(POSTS)
  .filter((t) => t.count >= MIN_INDEXABLE)
  .forEach((t) => add(tagPath('en', t.key), t.resolved[0].date));
PUBLISHED.forEach((r) => {
  const img = Array.isArray(r.imgs) && r.imgs.length ? r.imgs[0] : r.img;
  add(`/recipes/${r.slug}/`, r.dateAdded, `/recipes/images/${img}`);
});

// Standalone tool pages, which live in public/ rather than src/pages/ (EN/UA are
// separate directories, not /ua/ paths). Each [en, ua] pair is emitted with the
// same en / uk / x-default hreflang alternates as the Astro-managed pages,
// matching the <link rel="alternate"> tags these pages carry in their own <head>.
//
// Listed WITH a trailing slash, the form each page's own <link rel="canonical">
// declares. These were flat `<slug>.html` files until OPS-262; GitHub Pages served
// both /aid-comparison and /aid-comparison.html as 200 off the same file, and the
// duplicates ranked separately (/t1d-cure-trials.html earned its own impressions
// at position 9.6). A static host can't 301 an arbitrary path, so each page moved
// to `public/<slug>/index.html`: GitHub Pages now 301s /aid-comparison ->
// /aid-comparison/ and the .html spelling 404s, leaving exactly one 200 URL.
// Keep the slash here — the no-slash form would submit a redirect to Search Console.
//
// Third element = pinned <lastmod> (OPS-208): last git commit touching the
// pair's public/ tool files as of 2026-08-10 — bump manually on meaningful
// content changes, same policy as PAGE_DATES above.
const FLAT = [
  ['/aid-comparison/', '/aid-comparison-ua/', '2026-07-30'],
  ['/cgm-comparison/', '/cgm-comparison-ua/', '2026-07-22'],
  ['/blood-sugar-investigator/', '/blood-sugar-investigator-ua/', '2026-07-30'],
  ['/carb-gi-table/', '/carb-gi-table-ua/', '2026-07-14'],
  ['/t1d-cure-trials/', '/t1d-cure-trials-ua/', '2026-07-30'],
];

const esc = (s) => s.replace(/&/g, '&amp;');

function urlEntry(loc, lastmod, image, alternates) {
  return [
    '  <url>',
    `    <loc>${esc(loc)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    ...alternates.map(
      ([hreflang, href]) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${esc(href)}"/>`
    ),
    ...(image ? [`    <image:image><image:loc>${esc(SITE + image)}</image:loc></image:image>`] : []),
    '  </url>',
  ].join('\n');
}

export function GET() {
  const entries = [];
  for (const [path, lastmod, image] of pairs) {
    const en = SITE + path;
    const ua = SITE + '/ua' + (path === '/' ? '/' : path);
    // ru → the Ukrainian URL (see BaseLayout for why). Google cross-checks the
    // sitemap's alternates against the page's own, so the two sets have to match
    // exactly or International Targeting reports both as errors.
    const alts = [['en', en], ['uk', ua], ['ru', ua], ['x-default', en]];
    entries.push(urlEntry(en, lastmod, image, alts));
    entries.push(urlEntry(ua, lastmod, image, alts));
  }
  for (const [en, ua, lastmod] of FLAT) {
    const enUrl = SITE + en;
    const uaUrl = SITE + ua;
    const alts = [['en', enUrl], ['uk', uaUrl], ['ru', uaUrl], ['x-default', enUrl]];
    entries.push(urlEntry(enUrl, lastmod, null, alts));
    entries.push(urlEntry(uaUrl, lastmod, null, alts));
  }
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
