# page--blog

- Last checked: 2026-10-26
- PR: (this PR)
- Notes: First proofread. Covers `src/pages/ua/blog/index.astro` plus the shared UA blog strings in `src/data/blog-lib.js` (`CATS`, `UI.ua`, `AUTHOR_BIO.ua`). 9 fixes: title calque "засноване на доказах" → "науково обґрунтовано"; "з діабетом 1 типу" → "з цукровим діабетом 1 типу" (site terminology, ×3); byline "Автор:" → "Авторка:"; "гайд"/"файли" anglicisms; "все, що вони зачіпають" → "все, що з ними пов’язано"; disclaimer word order; "ведення діабету" (calque of "diabetes management") → "контроль діабету"; author alt "авторка про жіноче здоров’я" → "авторка текстів про…". `AUTHOR_BIO.ua` kept as `\u` escapes. CATS labels fine.
