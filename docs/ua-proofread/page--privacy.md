# page--privacy

- Last checked: 2026-10-25
- PR: (this PR)
- Notes: First proofread. `src/pages/ua/privacy.astro` renders from `LEGAL.privacy.ua` in `src/data/site.js`. Compared section by section with `LEGAL.privacy.en`. 12 fixes: places where UA dropped part of the EN («яке ви надсилаєте нам», «про вас», «Великої Британії» for adequacy regulations), data-subject rights rephrased as rights to *request* correction/erasure, «форма контакту» → «форма зворотного зв’язку», and calques («зберегти їх захищеними», «розумний період», «переглядали» for "revised"). The «Оновлено 3 жовтня 2026» date string was left as it is because the cookies page shares it.
