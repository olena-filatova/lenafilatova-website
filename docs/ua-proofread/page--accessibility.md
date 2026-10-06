# page--accessibility

- Last checked: 2026-10-06
- PR: (this PR)
- Notes: First proofread of this item — `src/pages/ua/accessibility.astro` renders entirely from `LEGAL.accessibility.ua` in `src/data/site.js`; no hardcoded Cyrillic in the component itself. This text was already a clean, faithful translation of `en` — grammar, case agreement, punctuation («» quotes, ’ apostrophe, — dashes) and terminology were all correct. One small completeness fix: "Known limitations" dropped `en`'s "over time" nuance ("Ми працюємо над їх покращенням" → "...покращенням з часом"). No other issues found.
