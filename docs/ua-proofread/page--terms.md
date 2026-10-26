# page--terms

- Last checked: 2026-10-25
- PR: (this PR)
- Notes: `src/pages/ua/terms.astro` renders `LEGAL.terms.ua` from `src/data/site.js`. Compared section by section with `LEGAL.terms.en`. 14 strings rewritten: the "health disclaimer" was calqued as «заява про здоров’я» (→ «медичне застереження»); «Доступність і зміни» clashed with the Accessibility page name (→ «Робота сайту та зміни»); calques «вашої опори на освітній контент», «для загальної освіти та інформації», «індивідуальні реакції відрізняються» rewritten; added the missing «чи будь-яких інших відносин із медичним фахівцем» (EN "or clinician relationship") and «максимально» (EN "fullest extent"); «травми» → legal term «тілесні ушкодження». Kept the title «Умови використання» because the site footer links use it; aligned seoDesc to the same wording.
