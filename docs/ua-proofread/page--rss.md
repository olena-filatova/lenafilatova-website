# page--rss

- Last checked: 2026-10-28
- PR: (this PR)
- Notes: First proofread of `/ua/rss.xml` (`src/pages/ua/rss.xml.js` → `META.ua` in `src/data/feed-lib.js`). Channel title and description fine — match EN and the blog hub wording. Item titles/excerpts come from posts (`post--*`); also audited the per-item `<category>` values (UA `cat` across all posts): 1 fix, `melasma-perimenopause` had «Шкіра та краса» where the other 19 «Skin & beauty» posts say «Краса та шкіра», so it showed as a separate category in feed readers and on its card.
