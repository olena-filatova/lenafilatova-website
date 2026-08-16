import { defineConfig } from 'astro/config';
import { RETIRED_SLUG_TARGETS } from './src/data/recipes.js';

// `site` = canonical origin (used for <link rel="canonical"> + Open Graph).
// `base` = the GitHub Pages project subpath for this preview deploy. Both the
// local root deploy and the real domain would just drop `base` (or set '/').
// Live at the real domain since the 2026-07-13 cutover — everything
// (redirect targets, noindex, asset paths) follows from BASE.
const BASE = '/';
const withBase = (p) => (BASE === '/' ? p : BASE + p);

// Legacy live-site URLs for the carried-over standalone tools, which live in
// public/ as `<slug>/index.html`. Keeps old inbound links working after cutover.
// Targets carry a trailing slash — the spelling each tool page declares as its
// own canonical, and the only one GitHub Pages serves as 200 (OPS-262 moved
// these out of flat `<slug>.html` files so the extension duplicate stopped
// ranking). Without the slash the visitor would land on a redirect to it.
const TOOL_REDIRECTS = Object.fromEntries(
  ['aid-comparison', 'cgm-comparison', 'blood-sugar-investigator', 'carb-gi-table'].flatMap((t) => [
    [`/resources/${t}`, withBase(`/${t}/`)],
    [`/ua/resources/${t}`, withBase(`/${t}-ua/`)],
  ])
);

// Recipes removed from PUBLISHED (OPS-118 hidden-slug batch) that still 404
// while earning Search Console impressions (OPS-161). 301 the residual search
// interest to the closest surviving destination rather than let it hit a dead
// end. 410 was rejected — these have real residual interest worth recovering,
// and a static host can't cleanly serve 410. Both EN and UA pages 404 (both
// build from PUBLISHED), so redirect both locales.
//
// OPS-128 widened this from 3 slugs to all 64, and changed the destination
// from the bare hub to a like-for-like recipe (RETIRED_SLUG_TARGETS in
// recipes.js). The hub was the earlier choice because the filter is
// chip-click only and ignores URL query params, so a `?cat=` link would land
// on the unfiltered hub anyway — but a matching recipe keeps more of the
// original intent than 86 unfiltered cards do.
const REMOVED_RECIPE_REDIRECTS = Object.fromEntries(
  Object.entries(RETIRED_SLUG_TARGETS).flatMap(([from, to]) => [
    [`/recipes/${from}/`, withBase(`/recipes/${to}/`)],
    [`/ua/recipes/${from}/`, withBase(`/ua/recipes/${to}/`)],
  ])
);

export default defineConfig({
  site: 'https://lenafilatova.co.uk',
  base: BASE,
  trailingSlash: 'always',
  redirects: { ...TOOL_REDIRECTS, ...REMOVED_RECIPE_REDIRECTS },
});
