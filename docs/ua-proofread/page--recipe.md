# page--recipe

- Last checked: 2026-10-26
- PR: (this PR)
- Notes: First proofread of the recipe-detail template — `src/pages/ua/recipes/[slug].astro` via `RecipeDetailBody.astro` (`T` strings) and the UA labels in `src/data/recipes-lib.js` it renders (`CAT_PAGE`, `DIET`, `GI_DISCLAIMER`, nutrition labels, SEO suffixes). Per-recipe text is tracked under `recipe--*`. 10 fixes: «Поживність» → «Харчова цінність»; GI disclaimer and footnote rewritten (calque «Будь ласка, перевіряйте», «є орієнтовними», missing "general guidance"); «Більше рецептів» → «Ще рецепти»; «Друк» → «Надрукувати» (verb, like «Поділитися»); tense in step hint; «на пошту» → «на електронну пошту»; diet tags agreed with «страва» (Низьковуглеводна, Вегетаріанська) and «Без молочного» → «Без молочних продуктів». Hub filter chips in `RecipeHubBody.astro` still say «Низьковуглеводне / Вегетаріанське / Без молочного» — left for page--recipes (open PR #458 touches that file).
