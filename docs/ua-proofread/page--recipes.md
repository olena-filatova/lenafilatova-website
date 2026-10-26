# page--recipes

- Last checked: 2026-10-26
- PR: (this PR)
- Notes: First proofread — `src/pages/ua/recipes/index.astro` (title) + UA strings in `src/components/RecipeHubBody.astro` (lede, GI explainer, collections, chips, measures section, footer). 17 fixes: lede calque «дружні до рівня цукру» and gender mismatch «кожен» rewritten, missing "Written in the UK" restored; «нічна вівсянка» → «вівсянка на ніч»; missing "one-pan dinners" restored; «З … трохи меду» case error; ««cup»» English left in UA; UK-kitchen paragraph brought back in line with `en` (the UA had been localised — revert that one line if the localisation was deliberate); і/й, з/із euphony. Chip «Без молочного» left as is (matches `recipes-lib.js`).
