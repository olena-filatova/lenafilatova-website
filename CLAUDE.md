# Project notes — lenafilatova.co.uk (repo: `olena-filatova/lenafilatova-website`)

Renamed from `lenafilatova-astro-preview` on 14 Jul 2026 — old links redirect.

**This is the LIVE site** for `lenafilatova.co.uk` since the 13 Jul 2026 cutover
(see `CUTOVER.md`). It is an Astro rebuild of the old Divhunt site. The old Divhunt repo,
`olena-filatova/lenafilatova-website-old`, is **retired** — do not ship fixes there;
its deploys no longer reach visitors. Content added there after 13 Jul 2026 must
be re-added here (`src/data/posts/<slug>.js`, `src/data/recipes.js`).

- **Hosting:** GitHub Pages via `.github/workflows/deploy.yml` (builds on push to
  `main`). Custom domain comes from `public/CNAME` + the repo's Pages settings.
  **Never delete `public/CNAME` or unset the custom domain** — the site silently
  falls back to the github.io URL while the domain serves nothing/stale content.
- The DNS TXT record `_github-pages-challenge-olena-filatova` at Namecheap keeps
  the domain verified for this GitHub account — never remove it.
- **Structure:** pages in `src/pages` (+ `ua/` mirrors), shared components in
  `src/components`, content data in `src/data`. Standalone interactive tools
  (carb/GI table, CGM comparison, AID comparison, blood sugar investigator, T1D
  cure trials — EN and `-ua` variants) are self-contained HTML files in `public/`,
  each as `public/<slug>/index.html`, served at `/carb-gi-table/` etc. **Keep the
  directory shape and the trailing slash** — as flat `<slug>.html` files GitHub
  Pages served the page at two 200 URLs (`/carb-gi-table` *and*
  `/carb-gi-table.html`) and Google ranked both (OPS-262). A static host cannot
  301 an arbitrary path, but it *does* 301 a directory path missing its slash,
  which is the only real redirect available here. Canonical, hreflang, `og:url`,
  the sitemap `FLAT` list, `TOOL_REDIRECTS` targets and any in-post links must all
  use the trailing-slash form.
- **Tool-page chrome** (OPS-303): those ten `public/` files can't use a layout,
  so their masthead nav, footer, newsletter and cookie bar are GENERATED into
  them by `scripts/build-tool-chrome.mjs` from the same `src/data/site.js` the
  Astro components render from, between `<!-- lf-chrome:… -->` markers. **Never
  hand-edit inside those markers** — run `npm run tool-chrome` instead, and run
  it again after changing NAV / FOOTER / HOME / SOCIALS. `npm run
  tool-chrome:check` fails if the pages are stale. The output is committed; the
  build must not rewrite `public/`. Chrome hides itself inside an iframe
  (`data-lf-framed`) so the t1d tracker's embed in its blog post is unchanged and
  never double-counts a GA4 pageview.
- **Site search** (`/search/` + `/ua/search/`, OPS-288): the index is built at
  build time from the data modules by `src/data/search-lib.js` and served as
  `search-index-en.json` / `-ua.json`, so a new post or recipe is searchable
  automatically — **there is no indexing step to run**. Adding a new *static
  page*, though, means adding it to `buildDocs()` or it will be unfindable.
  The results page is `noindex` and deliberately absent from `sitemap.xml`
  (thin, near-duplicate content), but must stay crawlable — never add a
  `Disallow: /search/` to robots.txt or Googlebot can't read the noindex.
  Matching is prefix-based on a lightly-stemmed query, which is what lets one
  engine serve English plurals and Ukrainian case endings; see the header
  comment in `src/scripts/search.js` before changing the ranking weights.
- **Tables & Safari:** all wide tables use `border-collapse: separate` with a
  sticky first column — Safari cannot stick cells in a collapsed table. Keep that
  pattern when adding tables.
- **Cookie banner** (`src/components/CookieConsent.astro` + `public/cookie-consent.js`):
  shares `localStorage.lf_cookie` with the old site; GA4 (`G-0F8T9VQFQ0`) loads
  only after acceptance. `.cookie-bar[hidden]{display:none}` must stay — the
  flex display otherwise overrides the `hidden` attribute.
- **Newsletter form**: markup comes from `src/components/Newsletter.astro` (and,
  for the tool pages, from `build-tool-chrome.mjs`), but the submit handler is
  ONE file — `public/lf-newsletter.js`, loaded by both. It reads everything it
  needs off the form's `data-mc-*` attributes, so it never needs to know a
  language. Change behaviour there, not in the component.
- The embedded calculators are a separate app (repo `olena-filatova/helsico`,
  served at `calculator.lenafilatova.co.uk`), mounted via widget scripts —
  see `src/data/calculators.js`.

- **Old-site media archive:** `old-site-media/` (git-ignored, ~429 MB) holds all images
  downloaded from the old lenafilatova.com WordPress media library on 6 Aug 2026 (OPS-214)
  and then hand-curated by Lena the same day: `recipes/` (577 food/dish photos, dish titles
  in `manifest.csv` where known), `testimonials/` (234 Instagram-screenshot testimonials,
  mostly Dia.School results — for social proof), `generic/` (209 misc kept after pruning).
  Partner logos and non-image files were skipped. Lena's manual sort is authoritative —
  folder placement may differ from `manifest.csv` categories. Never commit this folder.
  Gotcha: the public WP REST media API hides attachments of the recipe/testimonial CPTs —
  use authenticated admin-ajax `query-attachments` for a complete listing (see mempalace).

## Working branches
Each Claude session works on its own `claude/*` branch; changes land on `main`
via squash-merged PRs. Deploys run automatically on merge.

## Card summary and search description lengths

Two fields have a target length, and nothing in the build enforces them, so
they drift every time a post is written without this section in view. By
November 2026, 99 of 124 posts were over target — almost all of them posts
written *after* the trimming work of OPS-471 batches 3 and 4, which is the
regression this section exists to stop.

- **`excerpt`** — the summary under the card on `/blog/`. Target **120–170
  characters**, measured per language. It is two lines on the card; anything
  longer wraps to four and crowds the grid. Write it short in the first place
  rather than leaving it to be trimmed later.
- **`metaDesc`** — the Google search description. **160 characters or fewer**,
  per language. Google truncates beyond that.

Ukrainian runs roughly 10–15% longer than the same sentence in English, so a
UA string written as a direct translation of a 165-character EN one will be
over. Write the UA to its own budget.

Check before opening a PR, from `Website/`:

```bash
npm run check-summaries
```

`scripts/check-summary-lengths.mjs` lists every post and language off target and
exits 0; `npm run check-summaries:strict` exits 1 instead, for a hook or CI. It
reads `src/data/posts/` off disk rather than importing `blog.js`, for the
`import.meta.glob` reason above.

Neither field may **add** a claim the article does not make. Three summaries
found in batch 3 said more than their article did — "hormone balance" in a
review that never discusses it, "had better outcomes" for a study that only
observed women. Compress; never strengthen.

## Adding posts/recipes without causing merge conflicts

**Posts no longer conflict.** Each one is its own file, `src/data/posts/<slug>.js`,
exporting the post object as `export default`. `src/data/blog.js` assembles `POSTS`
from `import.meta.glob('./posts/*.js')`, sorted date-descending. Adding a post means
adding a *new file* and touching nothing shared, so two posts written in parallel
cannot conflict. Nothing outside `blog.js` changed — every consumer still does
`import { POSTS } from '../data/blog.js'`.

Two things to know:

- **Same-date posts.** Order within one date comes from an optional `export const
  seq = <n>` in the post file (absent means 0). Without it, same-date posts come
  back in filesystem order and the hub reshuffles on an unrelated commit. Only write
  it where a date actually repeats.
- **No plain-node script may import `blog.js`, or anything that imports it** —
  they run outside Vite and `import.meta.glob` is a Vite transform, so the
  import throws `(intermediate value).glob is not a function` at startup.
  `scripts/check-links.mjs` reads `src/data/posts/` off disk instead; any other
  plain-node script that needs posts must do the same.

  The trap is the *indirect* import. `scripts/build-tool-chrome.mjs` wanted
  nothing but `SEARCH_UI`, imported it from `search-lib.js`, and `search-lib`
  imports `blog.js` — so the whole tool-chrome build died the day posts moved to
  one file each, and stayed dead unnoticed because nothing in CI ran it
  (OPS-414). The strings now live in `src/data/search-ui.js`, a leaf module that
  imports nothing, and `npm run tool-chrome:check` runs in the link-check
  workflow. **Before adding an import to a `scripts/*.mjs` file, follow its
  chain to the end** — and if you are splitting a data module, keep the half
  that plain node needs free of imports.

**`src/data/recipes.js` still has the old problem**: it is one newest-first array, so
every new recipe inserts at the same anchor and two open recipe PRs always conflict.
Until it gets the same treatment, for recipes:

1. **Rebase onto `origin/main` immediately before opening the PR**, and again
   whenever another content PR merges ahead of you. Never hand-resolve the conflict
   in the GitHub web UI — it's easy to produce a valid-looking but duplicated array.
2. **Never stack content PRs.** This repo squash-merges, so merging the lower PR
   creates a *new* commit; the stacked branch's base stops being an ancestor of
   `main` and its copy of the already-merged entry re-conflicts. Rebase each branch
   straight onto `origin/main`, one at a time, after the previous one lands.
3. If a branch did get stacked, recover with
   `git rebase --onto origin/main <old-base-sha>` — that drops the already-merged
   commit and replays only the new entry.
4. **Merge content PRs promptly.** The conflict cost grows with every day they sit.

Before pushing a rebased content branch, verify:

```bash
node -e "const fs=require('fs');const s=fs.readdirSync('src/data/posts').filter(f=>f.endsWith('.js')).map(f=>f.slice(0,-3));console.log('posts',s.length,'dupes',s.length-new Set(s).size)"  # NOT via blog.js — see import.meta.glob above
git diff origin/main --stat   # a post = ONE new file under src/data/posts/
```

Post count and dates descending, zero duplicate slugs. Force-push with
`--force-with-lease=<branch>:<pre-rebase-sha>`. Do the rebase in a throwaway
`git worktree` — the main clone usually has another branch checked out with
uncommitted work.

## Hero images — Claude sources them, from Unsplash

**Reversed on 24 September 2026, at Lena's request.** This section used to say
every hero was sourced by Lena by hand and that Claude must never fetch one.
That is no longer true, and the old rule should not be followed: she was doing
it manually for every post and asked for it to stop. **Every post now ships
with its hero photo in the same run that writes the post**, both languages,
sourced by Claude from Unsplash. No API key is needed and no credit line goes
on the page (the licence permits commercial use without attribution, and the
site has never carried one). Do not file a photo brief on OPS-315 and do not
ask her for a picture.

How:

- Get the id from the **browser pane**, not `curl` — unsplash.com is bot-walled
  and returns a challenge even with a browser user-agent. Open
  `https://unsplash.com/s/photos/<subject>` and read the DOM for `photo-…` ids.
  Skip any `plus.unsplash.com` id (those need a paid subscription).
- Pull candidates small first and **look at each one** before choosing:
  `curl -sL -A "Mozilla/5.0" -o /tmp/<n>.jpg "https://images.unsplash.com/photo-<id>?w=1200&h=675&fit=crop&q=70&fm=jpg"`.
  Alt text is not a description you can trust — two candidates in one search
  turned out to be a branded product shot and a real person's skin condition,
  neither catchable from the alt text or from `file`.
- Then fetch the chosen one to `public/images/<slug>.jpg`, matching the post's
  `image` field, at `?w=1600&h=900&fit=crop&crop=entropy&q=80&fm=jpg`, and
  check with `file` that it really is a 1600×900 JPEG — a 404 page saves
  happily as a file.
- One photo serves both languages. Write `imageAlt` in **both** `en` and `ua`:
  one literal sentence about what is in the frame, no keyword stuffing.
- Then run `npm run images` and commit the generated variants, and
  `scripts/generate-image-dims.sh` in a clean worktree. Skipping the first is
  not fatal (the post falls back to the plain JPEG) but costs the reader a much
  larger download; skipping the second leaves the hero invisible.

**Prefer photos with no identifiable faces.** The existing library leans on
hands, objects, backs of heads, light and texture, and that is the right
instinct: a stock face beside "women with type 2 diabetes" implies that person
has the condition — untrue, and the one use the licence does not cover. No
medical stock cliché (syringes on white, stethoscopes, head-clutching), and
never imply the person endorses anything.

**Scope:** lenafilatova.co.uk blog posts, EN and UA. BaristaCard articles have
no image slot in their template and are excluded.

**A missing hero no longer blocks the post.** It used to: `check-links` counted
it as a hard failure, so a finished post could not merge until someone made the
picture — while this file forbade making one. Those two rules could not both be
satisfied, and the result was a stalled PR per post, seven deep at one point.
Now a post whose hero is absent from `image-dims.json` renders with **no hero
figure at all**, and its `og:image`, `twitter:image` and JSON-LD `image` fall
back to `DEFAULT_SHARE_IMAGE` in `site.js`. Nothing 404s, so `check-links`
passes and reports the gap under *Heroes not yet supplied* instead of failing.
The post ships the day it is written; the picture lands later as a one-line PR.

This does not soften the rule above — write the brief. It removes the deadlock,
not the deliverable.


Two things that have gone wrong doing this, both worth avoiding:

1. **Look at the actual JPEGs already on the site before choosing a new one,
   not just their `imageAlt` strings.** A brief for `glp1-what-we-know` asked for "a woman reading with a
   laptop and a notebook" — which would have near-duplicated the existing hero on
   `menopause-cost-workplace-productivity`, already a woman at a laptop taking
   notes. Alt text is too short to expose composition. The house style is narrow —
   nearly every hero is either a naturalistic photo of a woman 40–60 doing the
   thing, or a muted still life of the relevant objects — so clashes are easy.
2. **Judge "avoid this imagery" against the one article's argument.** A "no
   injection pens" line written for the bone-loss post got carried into the GLP-1
   hub brief, where a pen was actually the most legible option available. Lena
   overrode it and was right to.

And check a *delivered* image against the article's **argument**, not just its
topic. The first `glp1-menopause-bone-loss` hero was a flat-lay of bathroom scales
and a tape measure — for a post whose whole case is that the scale is a poor guide,
and whose source advises women over 65 to consider maintaining or even gaining
weight. Say so plainly rather than quietly shipping it.

**After the file lands**, committing it is only half the job — see
`adding-a-hero-image` below: run `scripts/generate-image-dims.sh` in a **clean**
worktree (it globs `public/images` and a dirty checkout drags in strays; a correct
run is a one-line diff), and set the per-language `imageAlt`, written from the
delivered image rather than from your brief.

`warnAssetGaps()` in `src/data/blog-lib.js` warns at build time about both a hero
missing from `image-dims.json` and a missing `imageAlt` (OPS-360). Like the
featured-set warning it **warns rather than throws**, so read the build output.

## The featured set goes stale silently — check it when you add posts

`featured: true` in `src/data/blog.js` is a **hand-picked editorial flag**. It drives
the band at the top of `/blog/` and nothing else. Nothing recalculates it, and
nothing fails the build when it rots: between June and August 2026 exactly one post
carried it, so the band sat on its one-card `.solo` fallback while 39 newer posts
piled up behind it, and — because the homepage sorted `featured` ahead of `date` —
the homepage "From the blog" card was pinned to the same June article for two
months (OPS-299).

Rules:

1. **Flag four posts.** Four is both the target and the ceiling (`FEATURED_MAX`).
   One post triggers the `.solo` layout, which is a fallback and not the designed
   band. On desktop the side rows divide the lead's full height between them, so
   below four they stretch and go airy — which is exactly the empty block down the
   right that Lena flagged after the first pass.
2. **The newest flagged post becomes the large lead card**; the others render as
   hairline rows beside it. Order is by `date`, not by position in the array — to
   change which one leads, change which posts are flagged.
3. **The homepage is not part of this.** Its band always shows the newest Journal
   post. If you ever want a hand-picked post on the homepage, add a *separate*
   field — do not put `featured` back into the sort in `HomeBody.astro`.
4. `featuredPosts()` in `src/data/blog-lib.js` warns on the console at build time if
   the set is empty, down to one, or entirely outside the ten newest posts. It
   **warns rather than throws** on purpose — an editorial choice should never block
   a deploy — so it is easy to miss. Read the build output.

Picks are editorial, so prefer evergreen pillars over news items: a digest post
flagged today reads as stale within a fortnight.

**The mix is two newest + two evergreen, refreshed once a week** (Lena's rule,
13 Oct 2026, OPS-604):

- **Two newest:** the two most recent published Journal posts by `date`. The
  newer one leads the band.
- **Two evergreen:** from the pool below, picked so the four cards cover four
  different themes where possible, and rotated — do not leave the same two in
  for more than a couple of weeks running.
- **Weekly:** re-pick every week, on a `claude/*` branch → PR. If the two newest
  posts have not changed since the last refresh, only rotate the evergreen pair.
  The local scheduled task `weekly-blog-featured-refresh` does this on Sundays,
  ahead of the Sunday PR-merge routine.

Evergreen pool (add a pillar here when one is published): `glp1-what-we-know`,
`protein-for-women-over-40`, `strength-training-perimenopause-beginners`,
`walking-after-meals-blood-sugar`.
