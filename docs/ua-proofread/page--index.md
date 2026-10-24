# page--index

- Last checked: 2026-10-24
- PR: (this PR)
- Notes: First proofread. `src/pages/ua/index.astro` renders `HOME.ua` in `src/data/site.js` via `HomeBody.astro` (portrait alt there was fine). 16 fixes: calques in seoTitle, hero H1 («логіку вашої глюкози крові»), hero lead and note; `trustLabel` missing «жінки» from EN; passive «підтримано через» → «отримали підтримку на» (mirrored in ABOUT.ua.stats, which must match HOME.trust); «практикуючі» → «ендокринологи-практики»; help cards and helpSub reworded; restored EN "no fads" in nlSub; nlBtn made an infinitive like the other CTAs. Left as is: hero CTAs omit EN "free" (button width), the resources-rail nlBtn «Надішліть воркбук» (separate object, EN "Send it to me", 220px column — out of scope). HOME.ua nl* strings also feed the tool-page chrome, so `npm run tool-chrome` was re-run (6 `-ua` tool pages regenerated).
