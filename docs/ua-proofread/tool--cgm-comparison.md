# tool--cgm-comparison

- Last checked: 2026-10-27
- PR: (this PR)
- Notes: First proofread of `public/cgm-comparison-ua/index.html`: header copy, filters, table headers, badges, footnote and every sensor `note` / `aid` / `cost` string, compared with EN. Chrome markers and the generated JSON-LD left alone; JS logic untouched (the «Немає» / «Не очікується» / «Уточн.» prefixes the renderer checks are kept). 40 fixes: «Пластир» changed to «Накладний», «Імплант» to «Імплантований», «OTC / Велнес» to «Без рецепта (OTC)», «Опційне» to «За бажанням»; the «Розігрів» column renamed «Прогрів» to match the structured data; «пільговий період» (G7) changed to «додатковий період»; «система замкненого циклу» changed to «система із замкненим контуром»; calques in the footnote and notes. No specs, prices or dates changed. Known gap left as is: the count reads «0 сенсорів» for every number, because it's a static word in the markup and fixing it needs a plural function in JS.
