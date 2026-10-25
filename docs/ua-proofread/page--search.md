# page--search

- Last checked: 2026-10-25
- PR: (opened in this run)
- Notes: UA strings live in `src/data/search-ui.js` (`SEARCH_UI.ua`, `KINDS`,
  `KIND_LABEL`). 6 fixes: "Пошук по сайту" → "Пошук на сайті"; seoTitle brand
  name made consistent with other UA pages ("Лена Філатова"); "recipe index"
  rendered as "каталог рецептів" consistently (3 strings); two wording fixes.
  NOT fixed (needs code, out of scope): the results count in
  `SearchBody.astro` uses one/many only, so UA shows "2 результатів" (should be
  "2 результати") and wraps the query in “ ” rather than «»; EN `resultsOne` is
  '1 result for' while the code prepends the count, so EN reads "1 1 result for".
