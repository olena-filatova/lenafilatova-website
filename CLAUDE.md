# Project notes — lenafilatova.co.uk (repo: `olena-filatova/lenafilatova-website`)

Renamed from `lenafilatova-astro-preview` on 14 Jul 2026 — old links redirect.

**This is the LIVE site** for `lenafilatova.co.uk` since the 13 Jul 2026 cutover
(see `CUTOVER.md`). It is an Astro rebuild of the old Divhunt site. The old Divhunt repo,
`olena-filatova/lenafilatova-website-old`, is **retired** — do not ship fixes there;
its deploys no longer reach visitors. Content added there after 13 Jul 2026 must
be re-added here (`src/data/blog.js`, `src/data/recipes.js`).

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
- **Tables & Safari:** all wide tables use `border-collapse: separate` with a
  sticky first column — Safari cannot stick cells in a collapsed table. Keep that
  pattern when adding tables.
- **Cookie banner** (`src/components/CookieConsent.astro` + `public/cookie-consent.js`):
  shares `localStorage.lf_cookie` with the old site; GA4 (`G-0F8T9VQFQ0`) loads
  only after acceptance. `.cookie-bar[hidden]{display:none}` must stay — the
  flex display otherwise overrides the `hidden` attribute.
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

## Adding posts/recipes without causing merge conflicts

`src/data/blog.js` and `src/data/recipes.js` are ordered **newest-first**, so every
new entry is inserted at the *same* spot — the first element of the array. Two open
PRs adding content therefore **always** conflict, with each other and with whatever
merged first. Nothing is semantically incompatible; the resolution is always "keep
all entries, ordered by `date` descending". Rules:

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
node -e "import('./src/data/blog.js').then(m=>{const s=m.POSTS.map(p=>p.slug);console.log('posts',s.length,'dupes',s.length-new Set(s).size);console.log(m.POSTS.slice(0,3).map(p=>p.date+' '+p.slug).join('\n'))})"
git diff origin/main --stat   # expect ONE data file, pure insertions
```

Post count and dates descending, zero duplicate slugs. Force-push with
`--force-with-lease=<branch>:<pre-rebase-sha>`. Do the rebase in a throwaway
`git worktree` — the main clone usually has another branch checked out with
uncommitted work.
