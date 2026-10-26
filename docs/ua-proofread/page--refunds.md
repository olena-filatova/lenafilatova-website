# page--refunds

- Last checked: 2026-10-25
- PR: (this PR)
- Notes: First proofread. `src/pages/ua/refunds.astro` renders entirely from `LEGAL.refunds.ua` in `src/data/site.js`. 11 fixes: h1 restored to the full policy name to match `en` and the Terms link text; legal-register calques reworked («скасувати продукт» → «відмовитися від продукту», «має дефект» → «неналежної якості», «відтворення» → «потокове відтворення», «повернення здійснюються на ваш початковий спосіб оплати» → «повертаємо тим самим способом, яким ви оплатили»); "sits alongside" no longer mistranslated as «доповнює»; misplaced clause «у відповідний період» moved; «Пропущені сесії … не підлягають поверненню» (sessions aren't returned — money is) fixed; «Питання щодо…?» → «Маєте запитання щодо…?». Act names, numbers, emails and `en` untouched.
