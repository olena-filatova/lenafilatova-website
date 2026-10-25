# tool--aid-comparison

- Last checked: 2026-10-25
- PR: (this PR)
- Notes: `public/aid-comparison-ua/index.html` — head meta, JSON-LD, page copy, filters, table, footnote and the `DATA`/`T` display strings (chrome markers untouched; `tool-chrome:check` passes). Main issue: the `DATA` array was a verbatim copy of the English page, so ~46 display values were English in the UA table ("Separate CGM", "TBC", "Summer 2026", "/kit", "200 u", "Next-gen AID", "Closed loop (night)"…) — translated; product names, numbers, country codes and all keys unchanged. Also: «автоматичної» → «автоматизованої подачі інсуліну» (matches the rest of the site), «поряд» calque → «в одній таблиці», «0 систем» count label had broken agreement for 1–4 → «Систем: N», chips aligned with EN ("Available now", "Tubeless (patch)", "Tubed pump"), footnote rewritten for natural word order. «діабетична команда» kept — it is the site-wide term.
