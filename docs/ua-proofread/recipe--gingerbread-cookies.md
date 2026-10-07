# recipe--gingerbread-cookies

Last checked: 2026-10-07
PR: (this PR)
Notes: Three fixes. (1) `title` said "без цукру" (no sugar), but the
recipe contains honey and the EN title says "No Refined Sugar" — the
`why` field already correctly says "без рафінованого цукру" a few lines
down, so the title was an inconsistent/inaccurate outlier. Changed to
"Різдвяне імбирне печиво без рафінованого цукру" to match EN and the rest
of the entry. (2) `method` step 6 called the pinch of vanilla "ваніль"
while the `ingredients` list for the same ingredient uses "ванілін" —
changed the method's "ваніль" to "ванілін" for internal consistency.
(3) `method` step 8 dropped "a little" from "colour part with a little
cocoa"; added "трохи" before "какао" to restore it. Everything else
(imgAlt, nutrition, meta, ingredients, remaining method steps, note)
matched the English and read naturally — no further changes.
