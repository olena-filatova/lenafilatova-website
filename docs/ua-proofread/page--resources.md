# page--resources

- Last checked: 2026-10-25
- PR: (this PR)
- Notes: First proofread. `src/pages/ua/resources.astro` renders from `RESOURCES.ua`, `RESOURCES.cards[].ua` and `RESOURCES.guides[].ua` in `src/data/site.js` (badge string `HOME.ua.toolsFree` checked, fine). 14 fixes: «поряд» (calque of "side by side") ×3 → «в одному порівнянні / в одній таблиці»; «без умов» → «без жодних зобов’язань» ("no strings"); dangling adjectives («силові», kicker «Інтерактивний»); «базал» → «базальну дозу»; «діабетична команда» → «лікарі, що ведуть ваш діабет»; T1D tracker «лікування» → «вилікування» (cure ≠ treatment) and broken case «путівник тим, що працює» fixed; CGM card aligned to site term «безперервний моніторинг глюкози»; restored "likely" hedging from `en` in the calculator/table cards; «поштою» → «електронною поштою». URLs, numbers and `en` untouched.
