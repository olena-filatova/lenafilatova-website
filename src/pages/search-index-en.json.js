// The English search index, emitted as a static JSON file at build time
// (OPS-288). Fetched by src/scripts/search.js the first time a visitor reaches
// for search, so a normal page view never pays for it. Built from the site's
// own data modules — see src/data/search-lib.js for what goes in and why.
//
// Kept at the site root rather than under /search/ so the fetch is one flat
// path with no interaction with `trailingSlash: 'always'`, the same shape
// sitemap.xml and rss.xml already use.
import { buildDocs } from '../data/search-lib.js';

export function GET() {
  return new Response(JSON.stringify(buildDocs('en')), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
