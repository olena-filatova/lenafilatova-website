/**
 * OPS-182 — generate the 301 rule set for a proxy in front of GitHub Pages.
 *
 * WHY THIS FILE EXISTS. Three tickets (OPS-182 retired recipes, OPS-262 the
 * .html tool duplicates, and the re-opened half of OPS-226 the legacy
 * recipe.html?r= URLs) all want the same thing: a real server-side 301. None of
 * them can have one today. The site is served straight off GitHub Pages with no
 * proxy in front (verified: `server: GitHub.com`, no cf-ray), and Pages serves
 * files — it has no redirect config at all. Astro's `redirects:` key does not
 * close the gap either: on a static build it emits meta-refresh HTML stubs,
 * which are HTTP 200 by construction. That is exactly what /recipes/<retired>/
 * serves now.
 *
 * So the fix is not a code change, it is a hosting change: put a 301-capable
 * layer in front of the domain. This script produces the rule set that layer
 * needs, in the two formats worth having, straight from the maps already in the
 * repo. Generated rather than hand-written so it can never drift from
 * RETIRED_SLUG_TARGETS — the same reason public/recipes/recipe.html refuses to
 * keep its own copy of that map.
 *
 * Run: npm run redirects
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { RETIRED_SLUG_TARGETS, PUBLISHED } from '../src/data/recipes.js';

const ORIGIN = 'https://lenafilatova.co.uk';
const OUT = new URL('../redirects/', import.meta.url);

/* 1. Retired recipes (OPS-182). Both locales — /recipes/<slug>/ and
   /ua/recipes/<slug>/ both currently serve a meta-refresh stub. */
const recipeRules = Object.entries(RETIRED_SLUG_TARGETS).flatMap(([from, to]) => [
  [`/recipes/${from}/`, `/recipes/${to}/`],
  [`/ua/recipes/${from}/`, `/ua/recipes/${to}/`],
]);

/* 2. The standalone tool pages carried over from the Divhunt site (OPS-262).
   OPS-262 itself is already solved, and solved better than a redirect could:
   PR #106 moved each tool from a flat <slug>.html to <slug>/index.html, so the
   duplicate is gone structurally — /<slug>/ is the single 200 URL, /<slug> gets
   Pages' own directory-slash 301, and the .html spelling simply stops existing.

   What that leaves is index residue. Google still holds the .html URLs (
   /t1d-cure-trials.html was earning impressions at position 9.6), and once the
   restructure deploys they 404. A 404 discards whatever equity those URLs
   carried; a 301 hands it to the surviving page. So these rules are not
   re-solving OPS-262 — they recover what its fix would otherwise drop.

   Target the trailing-slash spelling, which is the canonical one after PR #106.
   Sending them to /<slug> instead would cost a needless second hop through the
   directory-slash redirect. */
const TOOLS = [
  'aid-comparison', 'cgm-comparison', 'carb-gi-table',
  'blood-sugar-investigator', 't1d-cure-trials',
];
const toolRules = TOOLS.flatMap((t) => [
  [`/${t}.html`, `/${t}/`],
  [`/${t}-ua.html`, `/${t}-ua/`],
]);

/* 3. Legacy Divhunt recipe URLs (OPS-226). These carry the destination in the
   QUERY STRING (?r=<slug>&lang=ua), which is why no path-only rule can ever
   handle them and why they got a JS redirect instead. A proxy CAN match on
   query, but only per-value — so enumerate every slug that has a live twin,
   in both languages. Retired slugs are enumerated too, resolved straight to
   their surviving target so the redirect never chains through a second hop. */
const liveSlugs = PUBLISHED.map((r) => r.slug);
const resolve = (slug) => RETIRED_SLUG_TARGETS[slug] ?? slug;
const legacyRules = [...liveSlugs, ...Object.keys(RETIRED_SLUG_TARGETS)].flatMap((slug) => [
  [`/recipes/recipe.html?r=${slug}&lang=ua`, `/ua/recipes/${resolve(slug)}/`],
  [`/recipes/recipe.html?r=${slug}`, `/recipes/${resolve(slug)}/`],
]);

const groups = [
  ['OPS-182 retired recipes', recipeRules],
  ['OPS-262 .html tool duplicates', toolRules],
  ['OPS-226 legacy recipe.html query URLs', legacyRules],
];
const all = groups.flatMap(([, rules]) => rules);

/* Guard: a 301 must never point at something that is not built, and must never
   point at another rule's source (a redirect chain loses equity at each hop and
   Google gives up after a few). Both are cheap to get wrong when the recipe
   data changes, so fail the build rather than ship a broken rule set. */
const sources = new Set(all.map(([from]) => from.split('?')[0]));
const bad = all.filter(([, to]) => sources.has(to));
if (bad.length) {
  throw new Error(`redirect target is itself a redirect source:\n${bad.map(([f, t]) => `  ${f} -> ${t}`).join('\n')}`);
}
const liveSet = new Set(liveSlugs);
const deadTargets = all
  .filter(([, to]) => to.includes('/recipes/'))
  .filter(([, to]) => !liveSet.has(to.replace(/^\/(ua\/)?recipes\//, '').replace(/\/$/, '')));
if (deadTargets.length) {
  throw new Error(`redirect points at a recipe that is not published:\n${deadTargets.map(([f, t]) => `  ${f} -> ${t}`).join('\n')}`);
}

mkdirSync(OUT, { recursive: true });

/* Cloudflare Bulk Redirects: an uploadable CSV list. Absolute URLs on both
   sides; preserve_query_string is off because our targets are clean paths and
   the legacy rules have already consumed the query they cared about. */
const csv = [
  'source,target,status,preserve_query_string',
  ...all.map(([from, to]) => `${ORIGIN}${from},${ORIGIN}${to},301,false`),
].join('\n');
writeFileSync(new URL('cloudflare-bulk-redirects.csv', OUT), `${csv}\n`);

/* Netlify / Cloudflare Pages `_redirects`: relevant only if the site MOVES to
   one of those hosts rather than getting a proxy in front of Pages. Same rules,
   different syntax, so it costs nothing to emit both and keeps the hosting
   decision reversible. */
const redirectsFile = [
  '# Generated by scripts/generate-redirects.mjs — do not edit by hand.',
  '# Only used if the site moves to a host that reads this file. GitHub Pages ignores it.',
  ...groups.flatMap(([label, rules]) => ['', `# ${label}`, ...rules.map(([from, to]) => `${from}  ${to}  301`)]),
].join('\n');
writeFileSync(new URL('_redirects', OUT), `${redirectsFile}\n`);

for (const [label, rules] of groups) console.log(`${String(rules.length).padStart(4)}  ${label}`);
console.log(`${String(all.length).padStart(4)}  total rules -> redirects/`);
