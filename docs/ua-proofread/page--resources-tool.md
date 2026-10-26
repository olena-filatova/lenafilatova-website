# page--resources-tool

- Last checked: 2026-10-26
- PR: (this PR)
- Notes: First proofread. `src/pages/ua/resources/[tool].astro` (3 calculator pages) renders from `CALCULATORS[].ua` + `CALC_UI.ua` in `src/data/calculators.js` via `CalculatorBody.astro` (subject band and «Без реєстрації» badge come from `site.js`, covered by page--resources). 13 fixes: restored EN hedging «імовірно, вплине» (×3, UA stated the effect as fact); «Створено для діабету 1 типу» → «для людей із цукровим діабетом 1 типу» (×3, site term); dangling «силові» → «силові тренування»; calque «команда з догляду за діабетом» → «фахівці, які ведуть ваш діабет» (×3); straight apostrophe in «здоров'я» → ’ and «питаннями» → «запитаннями» (×2); pump seoDesc was missing "or starting a pump" and "no sign-up"; food seoTitle missing "blood sugar impact". Numbers, URLs, `en` untouched.
