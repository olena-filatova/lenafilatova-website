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

const SITE = 'https://lenafilatova.co.uk';
const today = new Date().toISOString().slice(0, 10);

// [enPath, lastmod, imagePath?] — uaPath is derived as /ua + enPath.
const pairs = [];
const add = (path, lastmod = today, image = null) => pairs.push([path, lastmod, image]);

add('/');
add('/about/');
add('/contact/');
add('/resources/');
// NOTE: /shop/ deliberately absent — the shop is hidden (nothing on sale yet).
add('/blog/');
add('/recipes/');
Object.values(LEGAL_SLUGS).forEach((s) => add(`/${s}/`));
CALCULATORS.forEach((c) => add(`/resources/${c.slug}/`));
POSTS.forEach((p) => add(`/blog/${p.slug}/`, p.date, p.image));
PUBLISHED.forEach((r) => {
  const img = Array.isArray(r.imgs) && r.imgs.length ? r.imgs[0] : r.img;
  add(`/recipes/${r.slug}/`, today, `/recipes/images/${img}`);
});

// Standalone tool pages carried over as flat .html files (EN/UA are separate
// files, not /ua/ paths). Each [en, ua] pair is emitted with the same
// en / uk / x-default hreflang alternates as the Astro-managed pages, matching
// the <link rel="alternate"> tags these pages already carry in their own <head>.
//
// Listed extensionless, which is the form each page's own <link rel="canonical">
// declares. GitHub Pages serves /aid-comparison for aid-comparison.html, so both
// spellings return 200 — submitting the .html one made Search Console report
// "duplicate, submitted URL not selected as canonical" against every tool page.
const FLAT = [
  ['/aid-comparison', '/aid-comparison-ua'],
  ['/cgm-comparison', '/cgm-comparison-ua'],
  ['/blood-sugar-investigator', '/blood-sugar-investigator-ua'],
  ['/carb-gi-table', '/carb-gi-table-ua'],
  ['/t1d-cure-trials', '/t1d-cure-trials-ua'],
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
    const alts = [['en', en], ['uk', ua], ['x-default', en]];
    entries.push(urlEntry(en, lastmod, image, alts));
    entries.push(urlEntry(ua, lastmod, image, alts));
  }
  for (const [en, ua] of FLAT) {
    const enUrl = SITE + en;
    const uaUrl = SITE + ua;
    const alts = [['en', enUrl], ['uk', uaUrl], ['x-default', enUrl]];
    entries.push(urlEntry(enUrl, today, null, alts));
    entries.push(urlEntry(uaUrl, today, null, alts));
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
