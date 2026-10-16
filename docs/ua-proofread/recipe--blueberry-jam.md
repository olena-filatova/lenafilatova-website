# recipe--blueberry-jam

- Last checked: 2026-10-16
- PR: (this PR)
- Notes: UA used "джем" in title/seoTitle/metaDesc/why but "варення" in imgAlt —
  inconsistent with the site's rhubarb-jam cluster, which standardises on
  "варення". Switched all fields to "варення" (incl. gender-agreeing
  adjectives "загущене"/"підсолоджене"). seoTitle had drifted from EN ("Set
  with Agar, No Pectin") into unrelated UA-only claims ("на агарі та стевії,
  ГІ 53"); rewrote to carry "без пектину" like EN. metaDesc invented an
  unsupported claim not in EN ("тож ... цукор спокійний" — "so sugar stays
  calm") in oddly literal phrasing; replaced with a line matching EN's actual
  claim ("so you keep the flavour"). why field had been corrupted to repeat
  the title/seoTitle text verbatim instead of explaining the recipe, and
  dropped EN's "rich in antioxidants"; rewrote from EN. Ingredients, method
  and imgAlt checked paragraph-by-paragraph against EN — no other issues.
