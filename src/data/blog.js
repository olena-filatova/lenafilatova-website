// Blog posts — the full article content for every post, EN + UA.
// Extracted from the live Divhunt SPA (CONTENT.en.articles / CONTENT.ua.articles
// in the old repo's index.html), which was the single source of truth for both
// the SPA blog and the prerendered standalone pages.
//
// Shape: { slug, date, image, cats: [filter keys], comingSoon?, filedUnder?,
//          en: {...}, ua: {...} }
//
// `filedUnder: 'tools'` (OPS-290) — the post is a tool wearing an article's
// clothes: it wraps one of the standalone interactive pages in the explanation
// that page needs. It keeps its /blog/ URL (moving a page Google already ranks
// buys nothing but a tidier path) and its RESOURCES card in site.js is what
// readers navigate to, so it drops out of every place the Journal is
// enumerated: the blog hub, both RSS feeds and the homepage's latest-post slot.
// It stays eligible as a "Keep reading" card on other posts — that is a
// cross-link, not a listing, and the internal links are worth keeping.
//
// Per-language SEO escape hatches — set these rather than shortening the
// editorial headline, which stays the on-page H1:
//   seoTitle — the <title>/og:title/JSON-LD headline. Required whenever the
//     headline exceeds 60 characters; seoTitleOf() in blog-lib.js enforces the
//     limit at build time, so a long headline without one fails the build.
//   metaDesc — the meta description, when `excerpt` is too long or too vague.
//
// Article body is a list of typed blocks:
//   p (inline [text](url) links) · h · quote · img/graph (src, alt, cap) ·
//   table (head, rows) · refs (claim, detail, cite, url) · links (name, url, desc) ·
//   bio (name, img, alt, text)
// Category filter keys/labels live in blog-lib.js (CATS).

export const POSTS = [
  {
    "slug": "endometriosis-type-2-diabetes-risk",
    "date": "2026-08-16",
    "image": "/images/endometriosis-type-2-diabetes-risk.jpg",
    "cats": [
      "diabetes",
      "perimenopause"
    ],
    "en": {
      "cat": "Diabetes & Perimenopause",
      "title": "Endometriosis is linked to a 46% higher risk of type 2 diabetes — in the women screening tends to miss",
      "seoTitle": "Endometriosis Linked to 46% Higher Type 2 Diabetes Risk",
      "metaDesc": "A 25-year study of 3 million women links endometriosis to 46% higher type 2 diabetes risk — highest before menopause and in women who aren’t overweight.",
      "excerpt": "A 25-year study of nearly three million women found a 46% higher rate of type 2 diabetes in those diagnosed with endometriosis — with the strongest signal in premenopausal women and women who aren’t overweight, the two groups standard diabetes screening deprioritises.",
      "meta": "16 August 2026 · 4 min read",
      "lead": "Endometriosis has been treated for decades as a condition of the reproductive system and nothing more. A 25-year study of nearly three million women suggests its reach may be wider than that — and that the women it flags are the ones routine diabetes screening tends to skip past.",
      "blocks": [
        {
          "t": "p",
          "text": "The study, published in Diabetologia in August 2026, was led by researchers at George Mason University working with the University of Utah, the University of Arizona, Brigham and Women’s Hospital and Intermountain Health. They followed 25 years of linked health records — 1996 to 2021 — in the Utah Population Database, covering nearly three million women, of whom roughly 100,000 had a diagnosis of endometriosis. Those women went on to develop type 2 diabetes at a rate 46% higher than women without the diagnosis."
        },
        {
          "t": "p",
          "text": "What makes that finding new is not the size of the number but the fact that it appeared at all. Earlier research had looked and largely found nothing. As lead author Maggie Fuzak Nunziato puts it, previous studies mostly evaluated endometriosis as a single condition and generally reported little or no overall association with type 2 diabetes. This team split it by type and by location instead — and the association surfaced, strongest of all in women whose endometriosis was found outside the pelvis."
        },
        {
          "t": "p",
          "text": "The other detail worth sitting with is who the signal showed up in. The increase was most pronounced in premenopausal women, and in women with a BMI below 30. Those are precisely the two groups that standard diabetes risk scoring tends to push down the list — younger, not overweight, no obvious flag. If the association holds up, it describes a group of women whose risk is currently invisible to the usual screening logic, which is a more useful thing to know than the headline percentage."
        },
        {
          "t": "p",
          "text": "Now the caution, because it matters here. This is a retrospective cohort study built from existing medical records, not a trial. It can show that two things travel together; it cannot show that one causes the other. The researchers suspect the chronic inflammation that comes with endometriosis is what affects metabolic health over time, but they did not measure that mechanism directly — it is a plausible explanation, not a demonstrated one, and they say so themselves. Their own summary is that the findings show an association, not proof that endometriosis can cause type 2 diabetes."
        },
        {
          "t": "p",
          "text": "One more thing worth knowing when reading any registry study of endometriosis: the data can only see women who were actually diagnosed. Endometriosis is notoriously slow to diagnose, often taking years from the first symptoms, which means the comparison group almost certainly contains women who have it and don’t yet know. That tends to blur the contrast between the two groups rather than exaggerate it — but it is a reason to treat the exact figure as an estimate rather than a measurement."
        },
        {
          "t": "p",
          "text": "So what do you do with it? Not panic — a 46% relative increase still sits on a baseline risk that is low for most women in their thirties and forties, and relative numbers always sound larger than the absolute change behind them. What it is a fair reason for is asking. If you have endometriosis, it is reasonable to have your blood sugar actually checked rather than assumed fine, particularly if you are under 50 and would not otherwise tick any of the boxes. If you want the background on how glucose behaves as hormones shift, I’ve written about that in [perimenopause and blood sugar](/blog/perimenopause-diabetes-blood-sugar/)."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Women with endometriosis developed type 2 diabetes at a 46% higher rate over 25 years.",
              "detail": "The ARCHES study (Advancing Research on Cardiovascular Health and Endometriosis Study), published in Diabetologia in August 2026, analysed linked health records from the Utah Population Database between 1996 and 2021 — nearly 3 million women, including approximately 100,000 with a diagnosis of endometriosis. Women with endometriosis had a 46% higher risk of developing type 2 diabetes than women without it. The association was strongest for extra-pelvic endometriosis, and more pronounced among premenopausal women and women with a BMI below 30. This is a retrospective cohort study using existing medical records: it demonstrates an association, not causation, and the proposed inflammatory mechanism was not directly measured.",
              "cite": "Diabetologia · Fuzak Nunziato et al., August 2026 (DOI 10.1007/s00125-026-06828-w)",
              "url": "https://link.springer.com/article/10.1007/s00125-026-06828-w"
            },
            {
              "claim": "Earlier studies missed this because they treated endometriosis as one condition.",
              "detail": "Lead author Maggie Fuzak Nunziato, a doctoral student in epidemiology at George Mason University, notes that previous studies largely evaluated endometriosis as a single condition and generally reported little or no overall association with type 2 diabetes; separating it by subtype and anatomical location is what revealed the differences. Senior author Anna Pollack, professor of Global and Community Health at George Mason, worked with collaborators at the University of Utah, the University of Arizona, Brigham and Women’s Hospital and Intermountain Health. Fuzak Nunziato’s summary of the work: “Our findings add to a growing understanding that endometriosis may affect more than reproductive health alone.” The team states that more research is needed to understand the connection.",
              "cite": "George Mason University College of Public Health · 12 August 2026",
              "url": "https://publichealth.gmu.edu/news/2026-08/women-endometriosis-face-46-higher-risk-type-2-diabetes-study-finds"
            }
          ]
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Type 2 diabetes is rising twice as fast in women under 40 — and care hasn’t caught up",
              "url": "/blog/type2-diabetes-women-under-40-sex-bias/",
              "desc": "The same pattern in a different setting: younger women whose risk the system isn’t set up to see."
            },
            {
              "name": "Perimenopause & diabetes: what’s really happening to your blood sugar",
              "url": "/blog/perimenopause-diabetes-blood-sugar/",
              "desc": "How glucose actually behaves as oestrogen falls — the background piece to all of this."
            },
            {
              "name": "Type 2 diabetes is linked to heavier menopause symptoms, a Korean study finds",
              "url": "/blog/type-2-diabetes-menopause-symptoms/",
              "desc": "The traffic runs both ways: metabolic health shaping how the menopause transition feels."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "I have endometriosis — how worried should I be about type 2 diabetes?",
          "a": "Concerned enough to check, not enough to lose sleep over. A 46% higher risk is a relative figure, and for most women in their thirties and forties the underlying risk it is raising is still low — so the absolute change is much smaller than the headline sounds. What the study does give you is a reasonable case for asking. If you have endometriosis, it is worth having blood sugar tested rather than assumed normal, especially if you are premenopausal and not overweight, because those are exactly the circumstances in which standard screening tends not to bother."
        },
        {
          "q": "Does this mean endometriosis causes type 2 diabetes?",
          "a": "No, and the researchers are explicit about that. This is an observational study built from 25 years of medical records, so it can show that the two conditions occur together more often than chance would predict, but it cannot establish that one produces the other. Chronic inflammation is the suspected link — endometriosis involves long-term inflammation, and inflammation is known to affect how the body handles insulin — but that mechanism was not measured in this study. It remains a reasonable hypothesis awaiting a study designed to test it."
        }
      ]
    },
    "ua": {
      "cat": "Діабет і перименопауза",
      "title": "Ендометріоз пов’язаний із на 46% вищим ризиком діабету 2 типу — саме в тих жінок, яких скринінг зазвичай оминає",
      "seoTitle": "Ендометріоз: на 46% вищий ризик діабету 2 типу",
      "metaDesc": "25-річне дослідження 3 мільйонів жінок: ендометріоз пов’язаний із на 46% вищим ризиком діабету 2 типу — найбільше до менопаузи та в жінок без ожиріння.",
      "excerpt": "25-річне дослідження майже трьох мільйонів жінок виявило на 46% вищу частоту діабету 2 типу серед тих, кому діагностували ендометріоз, — найсильніший сигнал у жінок до менопаузи та без надмірної ваги, тобто у двох групах, які стандартний скринінг на діабет ставить у кінець черги.",
      "meta": "16 серпня 2026 · 4 хв читання",
      "lead": "Десятиліттями ендометріоз розглядали як хворобу репродуктивної системи — і нічого більше. 25-річне дослідження майже трьох мільйонів жінок дає підстави думати, що його вплив ширший. І що жінки, на яких воно вказує, — саме ті, кого рутинний скринінг на діабет зазвичай пропускає.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідження опублікували в журналі Diabetologia у серпні 2026 року. Його очолили науковці Університету Джорджа Мейсона разом із колегами з Університету Юти, Університету Аризони, лікарні Brigham and Women’s та Intermountain Health. Вони простежили 25 років пов’язаних медичних записів — з 1996 до 2021 року — у базі даних населення Юти: майже три мільйони жінок, з яких приблизно 100 тисяч мали діагноз «ендометріоз». Ці жінки надалі захворювали на діабет 2 типу на 46% частіше, ніж жінки без такого діагнозу."
        },
        {
          "t": "p",
          "text": "Новим тут є не так розмір цифри, як сам факт, що вона взагалі з’явилася. Попередні дослідження шукали цей зв’язок і здебільшого нічого не знаходили. Як пояснює провідна авторка Меґґі Фьюзак Нунціато, раніше ендометріоз оцінювали як одну суцільну хворобу — і зазвичай не бачили жодного помітного зв’язку з діабетом 2 типу. Ця команда натомість розділила його за типом і локалізацією — і зв’язок проявився, найсильніше в жінок, у яких вогнища ендометріозу були поза межами таза."
        },
        {
          "t": "p",
          "text": "Друга деталь, над якою варто затриматися, — у кого саме проявився цей сигнал. Найпомітнішим зростання було в жінок до менопаузи та в жінок з індексом маси тіла нижче 30. Це рівно ті дві групи, які стандартна оцінка ризику діабету відсуває в кінець списку: молодші, без надмірної ваги, без очевидних тривожних ознак. Якщо цей зв’язок підтвердиться, він описує групу жінок, чий ризик наразі просто невидимий для звичної логіки скринінгу. І це знати корисніше, ніж сам відсоток із заголовка."
        },
        {
          "t": "p",
          "text": "Тепер про обережність, бо тут вона важлива. Це ретроспективне когортне дослідження, побудоване на вже наявних медичних записах, а не клінічне випробування. Воно може показати, що два явища йдуть поруч, але не може довести, що одне спричиняє інше. Дослідники припускають, що справа в хронічному запаленні, яке супроводжує ендометріоз і з роками впливає на метаболічне здоров’я, — але напряму цей механізм вони не вимірювали. Це правдоподібне пояснення, а не доведене, і вони самі про це кажуть: результати показують зв’язок, а не доказ того, що ендометріоз здатний спричиняти діабет 2 типу."
        },
        {
          "t": "p",
          "text": "І ще одне, що варто пам’ятати, читаючи будь-яке реєстрове дослідження ендометріозу: дані бачать лише тих жінок, кому діагноз таки поставили. Ендометріоз діагностують сумнозвісно повільно, часто через роки після перших симптомів, — тож у групі порівняння майже напевно є жінки, які його мають, але ще про це не знають. Це радше розмиває різницю між групами, ніж перебільшує її, але це причина сприймати конкретну цифру як оцінку, а не як точне вимірювання."
        },
        {
          "t": "p",
          "text": "То що з цим робити? Не панікувати: зростання на 46% — величина відносна, і базовий ризик, який вона підвищує, у більшості жінок 30–40 років усе одно низький, тож абсолютна зміна значно менша, ніж звучить заголовок. Але це справедлива підстава запитати. Якщо у вас ендометріоз, є сенс таки перевірити цукор крові, а не вважати, що з ним усе гаразд, — особливо якщо вам менше 50 і ви не потрапляєте в жодну зі звичних груп ризику. Якщо хочете зрозуміти тло — як поводиться глюкоза, коли змінюються гормони, — я писала про це в тексті про [перименопаузу і цукор крові](/ua/blog/perimenopause-diabetes-blood-sugar/)."
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "За 25 років жінки з ендометріозом хворіли на діабет 2 типу на 46% частіше.",
              "detail": "Дослідження ARCHES (Advancing Research on Cardiovascular Health and Endometriosis Study), опубліковане в Diabetologia у серпні 2026 року, проаналізувало пов’язані медичні записи з бази даних населення Юти за 1996–2021 роки: майже 3 мільйони жінок, зокрема близько 100 тисяч із діагнозом «ендометріоз». Ризик розвитку діабету 2 типу в жінок з ендометріозом був на 46% вищим, ніж у жінок без нього. Найсильнішим зв’язок був для позатазового ендометріозу, а також помітнішим серед жінок до менопаузи та жінок з ІМТ нижче 30. Це ретроспективне когортне дослідження на основі наявних медичних записів: воно демонструє зв’язок, а не причинність, і припущений запальний механізм у ньому не вимірювали напряму.",
              "cite": "Diabetologia · Fuzak Nunziato та ін., серпень 2026 (DOI 10.1007/s00125-026-06828-w)",
              "url": "https://link.springer.com/article/10.1007/s00125-026-06828-w"
            },
            {
              "claim": "Попередні дослідження цього не бачили, бо розглядали ендометріоз як одну хворобу.",
              "detail": "Провідна авторка Меґґі Фьюзак Нунціато, аспірантка з епідеміології в Університеті Джорджа Мейсона, зазначає, що попередні дослідження здебільшого оцінювали ендометріоз як єдину суцільну хворобу й зазвичай повідомляли про незначний зв’язок із діабетом 2 типу або про його відсутність; саме розділення за підтипом і анатомічною локалізацією виявило різницю. Старша авторка Анна Поллак, професорка глобального та громадського здоров’я в Університеті Джорджа Мейсона, працювала разом із колегами з Університету Юти, Університету Аризони, лікарні Brigham and Women’s та Intermountain Health. Висновок Фьюзак Нунціато: «Наші результати доповнюють дедалі глибше розуміння того, що ендометріоз може впливати не лише на репродуктивне здоров’я». Команда наголошує, що для розуміння цього зв’язку потрібні подальші дослідження.",
              "cite": "Коледж громадського здоров’я Університету Джорджа Мейсона · 12 серпня 2026",
              "url": "https://publichealth.gmu.edu/news/2026-08/women-endometriosis-face-46-higher-risk-type-2-diabetes-study-finds"
            }
          ]
        },
        {
          "t": "links",
          "title": "Дотичне читання",
          "items": [
            {
              "name": "Діабет 2 типу зростає вдвічі швидше серед жінок до 40 — а система догляду цього ще не наздогнала",
              "url": "/ua/blog/type2-diabetes-women-under-40-sex-bias/",
              "desc": "Той самий візерунок в іншому контексті: молодші жінки, чий ризик система просто не налаштована помічати."
            },
            {
              "name": "Перименопауза та діабет: що насправді відбувається з вашим цукром у крові",
              "url": "/ua/blog/perimenopause-diabetes-blood-sugar/",
              "desc": "Як насправді поводиться глюкоза, коли падає естроген, — базовий текст до всього цього."
            },
            {
              "name": "Діабет 2 типу пов’язаний із важчими симптомами менопаузи — корейське дослідження",
              "url": "/ua/blog/type-2-diabetes-menopause-symptoms/",
              "desc": "Рух відбувається в обидва боки: метаболічне здоров’я змінює те, як переживається менопаузальний перехід."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "У мене ендометріоз — наскільки серйозно варто хвилюватися через діабет 2 типу?",
          "a": "Достатньо, щоб перевіритися, і недостатньо, щоб через це не спати. На 46% вищий ризик — це відносна величина, і в більшості жінок 30–40 років базовий ризик, який вона підвищує, усе одно низький, тож абсолютна зміна значно менша, ніж звучить заголовок. Що це дослідження справді дає — вагому підставу попросити перевірку. Якщо у вас ендометріоз, варто здати аналіз на цукор крові, а не припускати, що з ним усе гаразд, — особливо якщо ви ще до менопаузи й без надмірної ваги, бо саме за таких обставин стандартний скринінг зазвичай і не призначають."
        },
        {
          "q": "Чи означає це, що ендометріоз спричиняє діабет 2 типу?",
          "a": "Ні, і дослідники говорять про це прямо. Це обсерваційне дослідження на основі 25 років медичних записів, тож воно може показати, що дві хвороби трапляються разом частіше, ніж передбачала б випадковість, але не може встановити, що одна породжує іншу. Ймовірною ланкою вважають хронічне запалення: ендометріоз супроводжується тривалим запаленням, а запалення, як відомо, впливає на те, як організм працює з інсуліном. Але в цьому дослідженні такий механізм не вимірювали. Він залишається розумною гіпотезою, яка чекає на дослідження, спеціально спроєктоване для її перевірки."
        }
      ]
    }
  },
  {
    "slug": "hrt-type-1-diabetes-evidence",
    "date": "2026-08-16",
    "image": "/images/hrt-type-1-diabetes-evidence.jpg",
    "cats": [
      "perimenopause",
      "diabetes"
    ],
    "en": {
      "cat": "Perimenopause & Type 1 Diabetes",
      "title": "HRT and type 1 diabetes: what the evidence actually says (and where it runs out)",
      "excerpt": "Ask whether HRT will help or harm your blood sugar with type 1 diabetes and you'll get two confident answers that contradict each other. Here's what the research actually covers — and exactly where it stops.",
      "meta": "16 August 2026 · 8 min read",
      "lead": "Ask whether HRT will help or harm your blood sugar with type 1 diabetes, and you'll get two confident answers that contradict each other. Here's what the research actually covers — and exactly where it stops.",
      "seoTitle": "HRT and Type 1 Diabetes: What the Evidence Says",
      "metaDesc": "Does HRT help or harm blood sugar in type 1 diabetes? What's established, what isn't, and the questions to take to your clinician.",
      "blocks": [
        {
          "t": "p",
          "text": "In the space of one month I was told two opposite things about hormone therapy. One person was certain it would wreck my blood sugar control. Another was equally certain it would fix it. Neither of them was being careless — they had both read something real. What neither had read was anything specific to type 1 diabetes, because there is very little to read."
        },
        {
          "t": "p",
          "text": "That is the honest starting point of this article, and I'd rather say it in the first paragraph than bury it: on the question of what HRT does to glucose control in type 1 diabetes specifically, the research thins out to almost nothing. Everything confident you will read on the subject is an extrapolation from women who do not have type 1 diabetes. Extrapolation isn't worthless — but it isn't a finding, and it shouldn't be sold to you as one."
        },
        {
          "t": "quote",
          "text": "This article is education, not medical advice. HRT is a prescribing decision that belongs to you and your clinician — I'm not going to tell you to take it or to avoid it, and nothing here should override what your own doctor advises."
        },
        {
          "t": "p",
          "text": "What I can do is set out what's reasonably well established, mark clearly where the evidence stops, and give you the questions I wish I'd had written down before my own appointments. If you're new to this whole area, the place to start is my longer piece on [what perimenopause does to blood sugar](/blog/perimenopause-diabetes-blood-sugar/) — this article picks up where that one leaves off."
        },
        {
          "t": "h",
          "text": "What happens to blood sugar as oestrogen falls"
        },
        {
          "t": "p",
          "text": "This part is not controversial. As oestrogen fluctuates and then declines through perimenopause, insulin sensitivity falls. Body composition shifts — fat redistributes towards the abdomen and visceral depots, and muscle mass tends to decline unless you actively defend it. Because muscle is where a large share of non-insulin-dependent glucose uptake happens, losing it means glucose has fewer places to go."
        },
        {
          "t": "p",
          "text": "Layered on top of that is variability. It isn't only that average glucose creeps up; it's that the same meal, the same dose and the same walk stop producing the same result. Women with type 1 diabetes describe this constantly — one cycle behaves, the next doesn't, and nothing in the routine has changed. Sleep disruption and night sweats make it worse, because short and broken sleep independently reduces insulin sensitivity."
        },
        {
          "t": "p",
          "text": "The practical consequence is that insulin requirements move — usually upwards through perimenopause, and then for some women down again after the transition settles. There is no single trajectory. This alone is worth knowing, because a lot of women read a rising total daily dose as personal failure rather than physiology."
        },
        {
          "t": "h",
          "text": "What the research shows in women without diabetes"
        },
        {
          "t": "p",
          "text": "Here the evidence is reasonably good. Across randomised trials in postmenopausal women without diabetes, hormone therapy improves markers of insulin sensitivity and modestly lowers fasting glucose. Meta-analyses pooling those trials have found reductions in insulin resistance measures such as HOMA-IR, alongside improvements in body-fat distribution."
        },
        {
          "t": "p",
          "text": "Two caveats that matter. First, these are metabolic markers measured in populations, not glucose outcomes in individuals — a statistically significant fall in mean fasting glucose across thousands of women tells you very little about what will happen to your own CGM trace next Tuesday. Second, none of these women were injecting insulin, so the mechanism by which their bodies absorbed the change simply doesn't exist in type 1 diabetes."
        },
        {
          "t": "h",
          "text": "What it shows in type 2 diabetes"
        },
        {
          "t": "p",
          "text": "This is where the strongest diabetes-specific evidence sits. A 2023 systematic review and meta-analysis in Diabetes Care examined the effect of postmenopausal hormone therapy on glucose regulation in women with diabetes, and found improvements in fasting plasma glucose, fasting insulin and insulin resistance indices in type 2 diabetes. HbA1c also improved in several of the pooled trials."
        },
        {
          "t": "p",
          "text": "It's a genuinely useful body of evidence — and it is largely a type 2 body of evidence. [Type 2 diabetes](/blog/type-2-diabetes-menopause-symptoms/) is fundamentally a disease of insulin resistance, so a therapy that improves insulin sensitivity has an obvious place to act. Type 1 diabetes is a disease of insulin deficiency, with insulin resistance layered on top rather than sitting at the centre. The same intervention is acting on a different problem."
        },
        {
          "t": "h",
          "text": "And in type 1 diabetes?"
        },
        {
          "t": "p",
          "text": "The honest answer is: we don't really know, and a 2025 narrative review says so explicitly — the type 1-specific evidence remains sparse, and clinicians are advised to individualise decisions precisely because the trials to guide them don't exist."
        },
        {
          "t": "p",
          "text": "There are structural reasons for that. Women with type 1 diabetes are a small population to begin with, and the subset in the menopause transition is smaller still — recruiting a properly powered trial is genuinely hard. Historically, diabetes has also been an exclusion criterion in menopause trials rather than a stratification variable, so where women with diabetes were included at all, type 1 and type 2 were often pooled into a single 'diabetes' category that hides exactly the distinction that matters. And the reverse is true too: diabetes research has treated menopause as a footnote rather than a variable worth measuring. It is the same pattern that shows up [everywhere else in women's diabetes care](/blog/type2-diabetes-women-under-40-sex-bias/) — the questions that affect women get asked last."
        },
        {
          "t": "p",
          "text": "What that means in practice is that a clinician who tells you confidently what HRT will do to your control is going beyond the evidence in either direction. The theoretically expected effect — improved insulin sensitivity, so possibly steadier and slightly lower insulin requirements — is plausible. It has not been demonstrated at any scale in type 1 diabetes, and plausible is not the same as proven."
        },
        {
          "t": "h",
          "text": "What women with T1D report themselves"
        },
        {
          "t": "p",
          "text": "In the absence of trials, the next best evidence is what women actually report. Survey work on women with type 1 diabetes going through menopause finds a substantial proportion describing worsened and less predictable glucose after the transition, and difficulty distinguishing hot flushes from hypoglycaemia — a symptom overlap that is both dangerous and almost never mentioned in general menopause material."
        },
        {
          "t": "p",
          "text": "Diabetes UK publishes first-person accounts from women with type 1 who went onto HRT, including women who describe their control improving afterwards. Those accounts are worth reading — they are also, by definition, the accounts of people who chose to write in, and they can't tell you how often the opposite happened. Treat them as company rather than as data. I'd say the same about anything I write about my own experience."
        },
        {
          "t": "h",
          "text": "Why \"it depends\" is the real answer"
        },
        {
          "t": "p",
          "text": "Even setting the T1D gap aside, \"does HRT affect blood sugar?\" isn't one question. Oestrogen taken as a tablet passes through the liver before reaching the rest of the body; oestrogen absorbed through the skin does not. That difference in first-pass metabolism is why route affects things like clotting risk and some metabolic markers, and part of why [prescribing has shifted towards patches and gels](/blog/hrt-prescriptions-doubling/). Which route suits you is a clinical judgement for your prescriber, not a preference for you to arrive with."
        },
        {
          "t": "p",
          "text": "Formulation matters too. Most women with a uterus need a progestogen alongside oestrogen, and different progestogens differ in their metabolic profile. Dose matters. And the calculation is not only metabolic: your personal cardiovascular risk, your blood pressure, your family history and how long you've been postmenopausal all feed into it, and type 1 diabetes of long duration is itself a cardiovascular risk factor that a good clinician will weigh."
        },
        {
          "t": "p",
          "text": "So when a specialist says \"it depends,\" that isn't evasion. It's an accurate description of a decision with five or six moving parts, only one of which is glucose."
        },
        {
          "t": "h",
          "text": "Questions worth taking to your appointment"
        },
        {
          "t": "p",
          "text": "This is the part I'd have found most useful two years ago. You are not trying to catch anyone out — you're trying to make sure type 1 diabetes is actually in the room when the decision is made, because in a standard menopause consultation it often isn't."
        },
        {
          "t": "table",
          "head": [
            "Question to ask",
            "Why it's worth asking"
          ],
          "rows": [
            [
              "Given my type 1 diabetes, what specifically are we hoping HRT will and won't do?",
              "Separates symptom relief from glucose expectations. Setting that expectation up front stops a disappointing HbA1c three months on from being read as failure."
            ],
            [
              "How should I monitor my glucose over the first few months on it?",
              "If insulin sensitivity does shift, you want to catch it early. Agreeing in advance what you'll look at — time in range, total daily dose, overnight patterns — turns it into data rather than anxiety."
            ],
            [
              "Who adjusts my insulin if my requirements change — you, or my diabetes team?",
              "This is the question that most often has no answer. Menopause care and diabetes care frequently sit in different services with no route between them."
            ],
            [
              "Will you write to my diabetes team about this?",
              "Makes the handover explicit rather than leaving you to relay it. Ask the same of your diabetes team in reverse."
            ],
            [
              "What does my cardiovascular risk look like, taking the diabetes into account?",
              "Long-duration type 1 diabetes affects the risk calculation. You want it explicitly factored in, not assumed."
            ],
            [
              "How will I tell a hot flush from a hypo?",
              "The overlap is real and rarely discussed. Worth a plan — usually 'test, don't guess' — before you need one."
            ],
            [
              "How long before we review this, and what would make us change course?",
              "Turns an open-ended prescription into a decision with a checkpoint."
            ],
            [
              "If HRT isn't right for me, what else are we doing about these symptoms?",
              "Keeps the conversation going if the answer is no, rather than ending it."
            ]
          ]
        },
        {
          "t": "p",
          "text": "If your GP isn't confident on the diabetes side of this, that's a reason to ask for a referral to a menopause specialist rather than a reason to give up. It's also worth reading Diabetes UK's [menopause information](https://www.diabetes.org.uk/living-with-diabetes/life-with-diabetes/menopause) before you go, so you're both working from the same page."
        },
        {
          "t": "h",
          "text": "What I did, and why I'm not telling you to do the same"
        },
        {
          "t": "p",
          "text": "I take HRT. I made that decision in my early forties, with regular cycles and no hot flushes, after the same battle a lot of women describe — being told that regular periods meant I couldn't be in perimenopause, and that my numbers looked fine to anyone reading them without knowing what they cost me. For me it made a real difference: I got back a few years of manageable control. Things were still less predictable than in my thirties, but nowhere near as hard."
        },
        {
          "t": "p",
          "text": "I want to be precise about what that is and isn't. It's one woman, unblinded, with no control group, who very much wanted it to work — the weakest form of evidence there is. I can tell you what happened to me. I cannot tell you it was the HRT rather than the changes I made to training and sleep in the same period, and I certainly can't tell you it will happen to you."
        },
        {
          "t": "p",
          "text": "What I'd defend is the process rather than the outcome: I went in knowing what was established and what wasn't, I asked who would adjust my insulin if things moved, and I agreed a review point. That's available to you regardless of what you eventually decide. The decision itself is yours and your clinician's, and I'd be suspicious of anyone — including me — who tried to make it for you."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "p",
          "text": "Here's where the evidence actually stands, with the type 1 gap marked rather than papered over."
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Hormone therapy improves glucose regulation in women with diabetes — mostly type 2.",
              "detail": "A 2023 systematic review and meta-analysis in Diabetes Care examined the effect of postmenopausal hormone therapy on glucose regulation in women with diabetes, reporting improvements in fasting plasma glucose, fasting insulin and insulin resistance indices. The evidence base is dominated by type 2 diabetes.",
              "cite": "Diabetes Care · Systematic review and meta-analysis, 2023",
              "url": "https://diabetesjournals.org/care/article/46/10/1866/153635/Effect-of-Postmenopausal-Hormone-Therapy-on"
            },
            {
              "claim": "Type 1-specific evidence remains sparse, and clinicians are told to individualise because of it.",
              "detail": "A 2025 narrative review of menopause management in type 1 diabetes concludes that dedicated evidence is limited, that recommendations are largely extrapolated from other populations, and that decisions must therefore be individualised.",
              "cite": "Narrative review, 2025 · PubMed Central",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12709055/"
            },
            {
              "claim": "Falling oestrogen worsens insulin resistance and body-fat distribution.",
              "detail": "Reviews of the menopause transition describe declining oestrogen alongside increased visceral adiposity, reduced insulin sensitivity and reduced non-insulin-dependent glucose uptake as muscle mass falls — the mechanistic basis for shifting insulin requirements.",
              "cite": "Review · PubMed Central",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4884259/"
            },
            {
              "claim": "Women with type 1 diabetes report worse and less predictable glucose after menopause.",
              "detail": "Survey and observational work in women with type 1 diabetes going through the menopause transition reports perceived worsening of glucose regulation, greater variability, and difficulty distinguishing vasomotor symptoms from hypoglycaemia.",
              "cite": "Menopause and type 1 diabetes literature · PubMed Central",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12534243/"
            },
            {
              "claim": "Patient accounts exist, but they aren't a substitute for trials.",
              "detail": "Diabetes UK publishes both general guidance on menopause and diabetes and first-person accounts from women with type 1 diabetes who went onto HRT. These are valuable for recognition and for framing questions; they are self-selected accounts and cannot establish an average effect.",
              "cite": "Diabetes UK · Menopause and diabetes",
              "url": "https://www.diabetes.org.uk/living-with-diabetes/life-with-diabetes/menopause"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, women's health writer living with type 1 diabetes",
          "text": "Lena Filatova has lived with type 1 diabetes for 23 years. She writes about women's health, perimenopause and diabetes management at lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Does HRT affect blood sugar if you have type 1 diabetes?",
          "a": "It may, but it has not been well studied in type 1 diabetes specifically. In women without diabetes and in type 2 diabetes, hormone therapy improves markers of insulin sensitivity and modestly lowers fasting glucose. Whether that translates into steadier control or changed insulin requirements in type 1 diabetes is an extrapolation rather than a finding — which is why monitoring closely in the first few months, with a plan agreed in advance, matters more than any prediction."
        },
        {
          "q": "Is HRT safe if you have type 1 diabetes?",
          "a": "Diabetes is not an automatic reason to avoid HRT, but it does change the risk calculation, particularly cardiovascular risk in long-duration type 1 diabetes. Route, formulation, dose, your blood pressure and how long you have been postmenopausal all feed into it. This is a prescribing decision for you and a clinician who knows your full history — ideally one comfortable with both menopause and diabetes."
        },
        {
          "q": "Why is there so little research on HRT in type 1 diabetes?",
          "a": "The population is small, and the subset in the menopause transition smaller still, so adequately powered trials are hard to run. Diabetes has often been an exclusion criterion in menopause trials rather than a variable to stratify by, and where women with diabetes were included, type 1 and type 2 were frequently pooled together — which hides the distinction that matters most. Diabetes research, in turn, has treated menopause as a footnote."
        },
        {
          "q": "How do you tell a hot flush from a hypo?",
          "a": "You often can't by feel alone — sweating, shakiness, palpitations and a wave of heat belong to both. That overlap is one of the most practical reasons to keep testing rather than guessing during the menopause transition, and it is worth raising explicitly at your appointment, because general menopause guidance rarely mentions it."
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза та діабет 1 типу",
      "title": "ЗГТ і діабет 1 типу: що насправді кажуть дослідження (і де вони закінчуються)",
      "excerpt": "Запитайте, чи допоможе ЗГТ вашому цукру при діабеті 1 типу — і отримаєте дві впевнені відповіді, які суперечать одна одній. Ось що дослідження справді охоплюють — і де саме вони зупиняються.",
      "meta": "16 серпня 2026 · 8 хв читання",
      "lead": "Запитайте, чи допоможе ЗГТ вашому цукру при діабеті 1 типу — і отримаєте дві впевнені відповіді, які суперечать одна одній. Ось що дослідження справді охоплюють — і де саме вони зупиняються.",
      "seoTitle": "ЗГТ і діабет 1 типу: що кажуть дослідження",
      "metaDesc": "Чи допомагає ЗГТ контролювати цукор при діабеті 1 типу? Що доведено, що ні — і які запитання варто взяти до лікаря.",
      "blocks": [
        {
          "t": "p",
          "text": "Протягом одного місяця мені сказали дві протилежні речі про гормональну терапію. Одна людина була впевнена, що ЗГТ зруйнує мій контроль цукру. Інша — так само впевнена, що вона все виправить. Жодна з них не була недбалою: обидві щось читали. Але жодна не читала нічого саме про діабет 1 типу — бо читати майже нічого."
        },
        {
          "t": "p",
          "text": "Це чесна відправна точка цієї статті, і я краще скажу це в першому абзаці, ніж заховаю в кінці: щодо того, що ЗГТ робить із контролем глюкози саме при діабеті 1 типу, досліджень майже немає. Усе впевнене, що ви прочитаєте на цю тему, — це екстраполяція з жінок без діабету 1 типу. Екстраполяція не безкорисна, але це не результат дослідження, і її не варто подавати як результат."
        },
        {
          "t": "quote",
          "text": "Ця стаття має освітній характер і не є медичною порадою. ЗГТ — це рішення про призначення ліків, яке належить вам і вашому лікарю. Я не кажу ані приймати її, ані уникати, і ніщо тут не має переважати рекомендації вашого лікаря."
        },
        {
          "t": "p",
          "text": "Що я можу зробити — це викласти те, що відносно добре встановлено, чітко позначити, де докази закінчуються, і дати запитання, які я хотіла б мати записаними перед власними прийомами. Якщо ви тільки починаєте розбиратися, почніть із моєї більшої статті про [те, що перименопауза робить із цукром у крові](/ua/blog/perimenopause-diabetes-blood-sugar/) — ця стаття продовжує з того місця, де та завершується."
        },
        {
          "t": "h",
          "text": "Що відбувається з цукром, коли естроген падає"
        },
        {
          "t": "p",
          "text": "Ця частина не є суперечливою. Коли естроген коливається, а потім знижується протягом перименопаузи, чутливість до інсуліну падає. Змінюється склад тіла: жир перерозподіляється до живота й вісцеральних депо, а м'язова маса має тенденцію зменшуватися, якщо її активно не захищати. Оскільки саме м'язи забезпечують значну частку неінсулінозалежного захоплення глюкози, їх втрата означає, що глюкозі просто нема куди подітися."
        },
        {
          "t": "p",
          "text": "Поверх цього накладається мінливість. Річ не лише в тому, що середній цукор повзе вгору, — а в тому, що та сама їжа, та сама доза й та сама прогулянка перестають давати той самий результат. Жінки з діабетом 1 типу постійно це описують: один цикл поводиться нормально, наступний — ні, і в режимі нічого не змінилося. Порушення сну та нічна пітливість погіршують ситуацію, бо короткий і переривчастий сон сам собою знижує чутливість до інсуліну."
        },
        {
          "t": "p",
          "text": "Практичний наслідок — потреба в інсуліні змінюється: зазвичай зростає протягом перименопаузи, а в деяких жінок знову знижується, коли перехід завершується. Єдиної траєкторії не існує. Це саме собою варто знати, бо багато жінок сприймають зростання добової дози як особисту поразку, а не як фізіологію."
        },
        {
          "t": "h",
          "text": "Що показують дослідження в жінок без діабету"
        },
        {
          "t": "p",
          "text": "Тут докази досить непогані. У рандомізованих дослідженнях за участю жінок у постменопаузі без діабету гормональна терапія покращує показники чутливості до інсуліну й помірно знижує глюкозу натще. Метааналізи цих досліджень виявили зниження маркерів інсулінорезистентності, як-от HOMA-IR, разом із покращенням розподілу жирової тканини."
        },
        {
          "t": "p",
          "text": "Два важливі застереження. По-перше, це метаболічні маркери, виміряні в популяціях, а не результати глюкози в окремих людей: статистично значуще зниження середньої глюкози натще серед тисяч жінок майже нічого не каже про те, що станеться з вашим графіком CGM наступного вівторка. По-друге, жодна з цих жінок не вводила інсулін — тобто механізму, яким їхнє тіло сприймало ці зміни, при діабеті 1 типу просто не існує."
        },
        {
          "t": "h",
          "text": "Що показують дослідження при діабеті 2 типу"
        },
        {
          "t": "p",
          "text": "Саме тут зосереджені найсильніші докази, пов'язані з діабетом. Систематичний огляд і метааналіз 2023 року в Diabetes Care розглянув вплив постменопаузальної гормональної терапії на регуляцію глюкози в жінок із діабетом і виявив покращення глюкози натще, інсуліну натще та індексів інсулінорезистентності при діабеті 2 типу. У кількох об'єднаних дослідженнях покращився і HbA1c."
        },
        {
          "t": "p",
          "text": "Це справді корисний масив доказів — і це переважно масив про діабет 2 типу. [Діабет 2 типу](/ua/blog/type-2-diabetes-menopause-symptoms/) за своєю суттю є хворобою інсулінорезистентності, тож терапія, що покращує чутливість до інсуліну, має очевидну точку прикладання. Діабет 1 типу — це хвороба дефіциту інсуліну, де інсулінорезистентність накладається зверху, а не стоїть у центрі. Те саме втручання діє на іншу проблему."
        },
        {
          "t": "h",
          "text": "А при діабеті 1 типу?"
        },
        {
          "t": "p",
          "text": "Чесна відповідь: ми насправді не знаємо — і наративний огляд 2025 року говорить це прямо: доказів саме щодо діабету 1 типу залишається мало, і лікарям радять ухвалювати рішення індивідуально саме тому, що досліджень, які могли б їх скерувати, не існує."
        },
        {
          "t": "p",
          "text": "Для цього є структурні причини. Жінок із діабетом 1 типу небагато, а тих із них, хто перебуває в менопаузальному переході, ще менше — набрати достатньо потужне дослідження справді важко. Історично діабет був критерієм виключення в дослідженнях менопаузи, а не змінною для стратифікації; а там, де жінок із діабетом усе ж включали, 1-й і 2-й типи часто об'єднували в одну категорію «діабет», що приховує саме ту різницю, яка має значення. Справедливо й зворотне: діабетологічні дослідження ставилися до менопаузи як до примітки, а не як до змінної, варту вимірювання. Це той самий патерн, що й [деінде в діабетичній допомозі жінкам](/ua/blog/type2-diabetes-women-under-40-sex-bias/) — питання, які стосуються жінок, ставлять останніми."
        },
        {
          "t": "p",
          "text": "На практиці це означає, що лікар, який упевнено каже вам, що саме ЗГТ зробить із вашим контролем, виходить за межі доказів — у будь-який бік. Теоретично очікуваний ефект (краща чутливість до інсуліну, а отже, можливо, стабільніший контроль і дещо менша потреба в інсуліні) є правдоподібним. Але він не продемонстрований у скільки-небудь великому масштабі при діабеті 1 типу, а правдоподібне — це не доведене."
        },
        {
          "t": "h",
          "text": "Що повідомляють самі жінки з діабетом 1 типу"
        },
        {
          "t": "p",
          "text": "За відсутності клінічних досліджень наступні за якістю докази — це те, що жінки повідомляють самі. Опитування жінок із діабетом 1 типу, які проходять менопаузу, показують, що значна частка описує погіршення й меншу передбачуваність глюкози після переходу, а також труднощі з тим, щоб відрізнити припливи від гіпоглікемії — збіг симптомів, який є і небезпечним, і майже ніколи не згадується в загальних матеріалах про менопаузу."
        },
        {
          "t": "p",
          "text": "Diabetes UK публікує особисті історії жінок із діабетом 1 типу, які почали ЗГТ, зокрема тих, хто описує покращення контролю після цього. Ці історії варто прочитати — але вони, за визначенням, є розповідями людей, які самі вирішили написати, і не можуть сказати, як часто ставалося протилежне. Сприймайте їх радше як підтримку, ніж як дані. Те саме я сказала б і про будь-що, що пишу про власний досвід."
        },
        {
          "t": "h",
          "text": "Чому «залежить» — це і є справжня відповідь"
        },
        {
          "t": "p",
          "text": "Навіть якщо відкласти прогалину щодо діабету 1 типу, «чи впливає ЗГТ на цукор?» — це не одне запитання. Естроген у таблетках проходить через печінку, перш ніж потрапити в решту організму; естроген, що всмоктується через шкіру, — ні. Ця різниця в метаболізмі першого проходження й пояснює, чому шлях введення впливає на такі речі, як ризик тромбозів і частину метаболічних показників — і частково через це [призначення змістилися в бік пластирів і гелів](/ua/blog/hrt-prescriptions-doubling/). Це клінічне рішення вашого лікаря, а не перевага, з якою вам треба прийти на прийом."
        },
        {
          "t": "p",
          "text": "Форма препарату теж має значення. Більшості жінок із маткою потрібен прогестаген разом з естрогеном, і різні прогестагени відрізняються за метаболічним профілем. Має значення й доза. І розрахунок не лише метаболічний: ваш індивідуальний серцево-судинний ризик, тиск, сімейний анамнез і те, скільки часу минуло від менопаузи, — усе це враховується, а тривалий діабет 1 типу сам собою є серцево-судинним фактором ризику, який хороший лікар зважить."
        },
        {
          "t": "p",
          "text": "Тож коли спеціаліст каже «залежить», це не ухиляння. Це точний опис рішення з п'ятьма-шістьма рухомими частинами, з яких глюкоза — лише одна."
        },
        {
          "t": "h",
          "text": "Запитання, які варто взяти на прийом"
        },
        {
          "t": "p",
          "text": "Це та частина, яка була б мені найкориснішою два роки тому. Ви не намагаєтесь когось підловити — ви намагаєтесь зробити так, щоб діабет 1 типу справді був присутній у розмові, коли ухвалюється рішення, бо на звичайній консультації з менопаузи його часто немає."
        },
        {
          "t": "table",
          "head": [
            "Запитання",
            "Чому варто його поставити"
          ],
          "rows": [
            [
              "З огляду на мій діабет 1 типу, чого саме ми очікуємо і не очікуємо від ЗГТ?",
              "Відокремлює полегшення симптомів від очікувань щодо глюкози. Домовитись про це заздалегідь — щоб не сприймати не той HbA1c за три місяці як провал."
            ],
            [
              "Як мені моніторити глюкозу в перші місяці прийому?",
              "Якщо чутливість до інсуліну зміниться, це варто помітити рано. Домовитись заздалегідь, на що дивитись — час у діапазоні, добова доза, нічні патерни — означає мати дані, а не тривогу."
            ],
            [
              "Хто коригуватиме мій інсулін, якщо потреба зміниться, — ви чи моя діабетична команда?",
              "Саме на це запитання найчастіше немає відповіді. Ведення менопаузи й ведення діабету зазвичай перебувають у різних службах без зв'язку між ними."
            ],
            [
              "Чи напишете ви моїй діабетичній команді про це?",
              "Робить передачу інформації явною, а не залишає її на вас. Попросіть про те саме й діабетичну команду — у зворотному напрямку."
            ],
            [
              "Який у мене серцево-судинний ризик з урахуванням діабету?",
              "Тривалий діабет 1 типу впливає на розрахунок ризику. Ви хочете, щоб його врахували явно, а не припустили."
            ],
            [
              "Як мені відрізнити приплив від гіпоглікемії?",
              "Збіг симптомів реальний і рідко обговорюється. Варто мати план — зазвичай «виміряй, а не вгадуй» — до того, як він знадобиться."
            ],
            [
              "Коли ми переглянемо це рішення і що саме змусило б нас його змінити?",
              "Перетворює безстрокове призначення на рішення з контрольною точкою."
            ],
            [
              "Якщо ЗГТ мені не підходить, що ми робимо з цими симптомами натомість?",
              "Дає розмові продовження, якщо відповідь — «ні», замість того щоб її завершити."
            ]
          ]
        },
        {
          "t": "p",
          "text": "Якщо ваш сімейний лікар не почувається впевнено щодо діабетичної частини цього питання — це привід попросити скерування до спеціаліста з менопаузи, а не привід здаватися. Також варто перед візитом прочитати [інформацію Diabetes UK про менопаузу](https://www.diabetes.org.uk/living-with-diabetes/life-with-diabetes/menopause), щоб ви обидва відштовхувалися від однакових даних."
        },
        {
          "t": "h",
          "text": "Що зробила я — і чому не кажу вам робити так само"
        },
        {
          "t": "p",
          "text": "Я приймаю ЗГТ. Я ухвалила це рішення на початку своїх 40, з регулярними циклами й без припливів, після тієї самої боротьби, яку описує багато жінок: мені казали, що регулярні цикли означають, що я не в перименопаузі, і що мої показники виглядають добре — для тих, хто читав їх, не знаючи, чого вони мені коштували. Для мене це справді змінило ситуацію: я повернула кілька років керованого контролю. Було все ще менш передбачувано, ніж у 30, але й близько не так важко."
        },
        {
          "t": "p",
          "text": "Хочу бути точною щодо того, чим це є і чим не є. Це одна жінка, без засліплення, без контрольної групи, яка дуже хотіла, щоб це спрацювало, — найслабша форма доказу з можливих. Я можу розповісти, що сталося зі мною. Я не можу стверджувати, що це була саме ЗГТ, а не зміни в тренуваннях і сні, які я зробила в той самий період, і тим паче не можу стверджувати, що те саме станеться з вами."
        },
        {
          "t": "p",
          "text": "Що я справді захищала б — це процес, а не результат: я прийшла, знаючи, що доведено, а що ні, запитала, хто коригуватиме мій інсулін, якщо щось зміниться, і домовилася про точку перегляду. Це доступно вам незалежно від того, що ви зрештою вирішите. Саме рішення належить вам і вашому лікарю, і я з підозрою ставилася б до будь-кого — включно зі мною, — хто намагався б ухвалити його за вас."
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "p",
          "text": "Ось де насправді перебувають докази — із позначеною, а не замовчаною прогалиною щодо діабету 1 типу."
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Гормональна терапія покращує регуляцію глюкози в жінок із діабетом — переважно 2 типу.",
              "detail": "Систематичний огляд і метааналіз 2023 року в Diabetes Care розглянув вплив постменопаузальної гормональної терапії на регуляцію глюкози в жінок із діабетом і показав покращення глюкози натще, інсуліну натще та індексів інсулінорезистентності. Доказова база переважно стосується діабету 2 типу.",
              "cite": "Diabetes Care · Систематичний огляд і метааналіз, 2023",
              "url": "https://diabetesjournals.org/care/article/46/10/1866/153635/Effect-of-Postmenopausal-Hormone-Therapy-on"
            },
            {
              "claim": "Доказів саме щодо діабету 1 типу залишається мало, і саме тому лікарям радять діяти індивідуально.",
              "detail": "Наративний огляд 2025 року щодо ведення менопаузи при діабеті 1 типу підсумовує, що спеціальних доказів обмаль, що рекомендації здебільшого екстраполюються з інших популяцій, і що рішення тому мають бути індивідуальними.",
              "cite": "Наративний огляд, 2025 · PubMed Central",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12709055/"
            },
            {
              "claim": "Зниження естрогену погіршує інсулінорезистентність і розподіл жирової тканини.",
              "detail": "Огляди менопаузального переходу описують зниження естрогену разом зі зростанням вісцерального жиру, зниженням чутливості до інсуліну та зменшенням неінсулінозалежного захоплення глюкози через втрату м'язової маси — механістична основа для зміни потреби в інсуліні.",
              "cite": "Огляд · PubMed Central",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4884259/"
            },
            {
              "claim": "Жінки з діабетом 1 типу повідомляють про гірший і менш передбачуваний цукор після менопаузи.",
              "detail": "Опитування та спостережні дослідження жінок із діабетом 1 типу в менопаузальному переході повідомляють про суб'єктивне погіршення регуляції глюкози, більшу мінливість і труднощі з розрізненням вазомоторних симптомів і гіпоглікемії.",
              "cite": "Література про менопаузу та діабет 1 типу · PubMed Central",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12534243/"
            },
            {
              "claim": "Особисті історії існують, але вони не замінюють клінічних досліджень.",
              "detail": "Diabetes UK публікує і загальні матеріали про менопаузу та діабет, і особисті історії жінок із діабетом 1 типу, які почали ЗГТ. Вони цінні для впізнавання себе й формулювання запитань, але це самовідібрані розповіді, які не можуть встановити середній ефект.",
              "cite": "Diabetes UK · Менопауза та діабет",
              "url": "https://www.diabetes.org.uk/living-with-diabetes/life-with-diabetes/menopause"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, авторка про жіноче здоров'я, що живе з діабетом 1 типу",
          "text": "Lena Filatova живе з діабетом 1 типу вже 23 роки. Вона пише про жіноче здоров'я, перименопаузу та ведення діабету на lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Чи впливає ЗГТ на цукор у крові при діабеті 1 типу?",
          "a": "Можливо, але саме при діабеті 1 типу це майже не досліджено. У жінок без діабету та при діабеті 2 типу гормональна терапія покращує показники чутливості до інсуліну й помірно знижує глюкозу натще. Чи означає це стабільніший контроль або змінену потребу в інсуліні при діабеті 1 типу — це екстраполяція, а не доведений факт. Тому уважний моніторинг у перші місяці за заздалегідь узгодженим планом важливіший за будь-які прогнози."
        },
        {
          "q": "Чи безпечна ЗГТ при діабеті 1 типу?",
          "a": "Діабет не є автоматичною протипоказанням до ЗГТ, але він змінює розрахунок ризиків — насамперед серцево-судинних при тривалому діабеті 1 типу. Значення мають шлях введення, форма препарату, доза, ваш тиск і те, скільки часу минуло від менопаузи. Це рішення про призначення, яке ухвалюєте ви разом із лікарем, що знає вашу повну історію — бажано з тим, хто впевнено почувається і в менопаузі, і в діабеті."
        },
        {
          "q": "Чому так мало досліджень про ЗГТ при діабеті 1 типу?",
          "a": "Ця популяція невелика, а тих, хто перебуває в менопаузальному переході, ще менше — тож достатньо потужні дослідження важко провести. Діабет часто був критерієм виключення в дослідженнях менопаузи, а не змінною для стратифікації; а там, де жінок із діабетом включали, 1-й і 2-й типи нерідко об'єднували, що приховує найважливішу різницю. Діабетологічні дослідження, своєю чергою, ставилися до менопаузи як до примітки."
        },
        {
          "q": "Як відрізнити приплив від гіпоглікемії?",
          "a": "Часто лише за відчуттями — ніяк: пітливість, тремтіння, серцебиття й хвиля жару властиві обом станам. Саме через цей збіг під час менопаузального переходу варто вимірювати, а не вгадувати. І про це варто прямо запитати на прийомі, бо загальні рекомендації щодо менопаузи майже ніколи цього не згадують."
        }
      ]
    }
  },
  {
    "slug": "walking-after-meals-blood-sugar",
    "date": "2026-08-13",
    "image": "/images/walking-after-meals-blood-sugar.jpg",
    "cats": [
      "diabetes",
      "nutrition"
    ],
    "en": {
      "cat": "Diabetes",
      "title": "The 10-minute walk after eating: how much it actually lowers your blood sugar",
      "excerpt": "Trials put the drop in the post-meal glucose rise at 10–22%. How long to walk, whether to go immediately or wait, and what changes if you take insulin.",
      "meta": "13 August 2026 · 6 min read",
      "lead": "I've had type 1 diabetes for 23 years, and the single habit that has done the most for my post-meal numbers isn't a supplement or a new gadget. It's ten minutes of walking after I eat.",
      "seoTitle": "Walking After Meals: How Much It Lowers Blood Sugar",
      "metaDesc": "A 10-minute walk after eating lowers the post-meal glucose rise by 10–22% in trials. How long to walk, when to start, and what changes if you take insulin.",
      "blocks": [
        {
          "t": "p",
          "text": "There's a reason this advice keeps circulating: it is one of the few things in metabolic health with a genuinely clean evidence base. What most coverage gets wrong is the detail — how long, how soon, and whether it matters what you ate. Those details are where the research actually disagrees, and they're what this article is about."
        },
        {
          "t": "h",
          "text": "What actually happens to your glucose after you eat"
        },
        {
          "t": "p",
          "text": "Eating carbohydrate delivers glucose into your bloodstream faster than your muscles and liver can clear it. Blood glucose climbs, usually peaking somewhere between 45 and 90 minutes after the first bite depending on the meal, then falls back as insulin does its work."
        },
        {
          "t": "p",
          "text": "The number that matters here is the peak, not the daily average. Two people can end a day with an identical average while one spent it on a gentle plateau and the other rode a series of sharp climbs and crashes. It's the height and steepness of those spikes that tracks most closely with how you feel in the hour afterwards — and, over years, with risk. Lowering the peak is the goal — the same logic behind [why the order you eat your food in changes the curve](/blog/type-2-diabetes-research/)."
        },
        {
          "t": "p",
          "text": "Walking lowers that peak by a route that doesn't need insulin at all. Contracting muscle pulls glucose out of the blood through GLUT4 transporters that move to the cell surface in response to the contraction itself. The glucose your legs burn while you walk is glucose that never gets to contribute to the spike. That's why it works for someone with type 2 diabetes, someone with insulin resistance, and someone with type 1 whose insulin is doing the job from the other direction."
        },
        {
          "t": "h",
          "text": "What the numbers actually show"
        },
        {
          "t": "p",
          "text": "Four studies do most of the work here, and it's worth seeing them side by side rather than as one blurred claim:"
        },
        {
          "t": "table",
          "head": [
            "Study",
            "What was tested",
            "Result"
          ],
          "rows": [
            [
              "Reynolds et al., Diabetologia, 2016",
              "10 min after each of three meals vs 30 min of walking at any time of day (type 2 diabetes)",
              "Post-meal glucose 12% lower overall; 22% lower after the evening meal"
            ],
            [
              "Buffey et al., Sports Medicine, 2022",
              "2–5 min of light walking every 20–30 min vs sitting all day",
              "Glucose 17% lower than prolonged sitting; standing alone gave 9.5%"
            ],
            [
              "Hashimoto et al., Scientific Reports, 2025",
              "10 min of easy walking immediately after a 75 g glucose drink (healthy adults)",
              "Peak glucose fell from 182 to 164 mg/dL (10.1 to 9.1 mmol/L)"
            ],
            [
              "DiPietro et al., Diabetes Care, 2013",
              "Three 15-min post-meal walks vs one 45-min walk (older adults at risk)",
              "Post-meal walks controlled 24-hour glucose better, the after-dinner one most of all"
            ]
          ]
        },
        {
          "t": "p",
          "text": "Put together, that's a reduction in the post-meal rise of roughly 10–20% on average, with the biggest single-meal effects — the carb-heaviest meal, usually dinner — above 20%. You will see much larger figures quoted online. Treat anything above about 30% as one striking result in one setting rather than what to expect on an ordinary Tuesday. It's a meaningful, repeatable nudge, not a replacement for anything."
        },
        {
          "t": "h",
          "text": "Where the benefit plateaus"
        },
        {
          "t": "p",
          "text": "Somewhere around 15–20 minutes, for glucose specifically. The jump from doing nothing to walking ten minutes is large; the jump from ten minutes to thirty is much smaller. In the 2025 trial the 30-minute condition — three times the walking — did not beat the short walk on peak glucose."
        },
        {
          "t": "p",
          "text": "Longer walks are still worth doing for fitness, mood, sleep and cardiovascular health. But if the specific thing you're buying is a flatter post-meal curve, most of the return arrives early. That's genuinely good news: ten minutes is a thing you can do three times a day for years, and forty is not."
        },
        {
          "t": "h",
          "text": "Even two minutes counts"
        },
        {
          "t": "p",
          "text": "The Sports Medicine review is the one to hold on to when ten minutes isn't available. Breaking up sitting with just 2–5 minutes of light walking, repeated through the day, lowered glucose by about 17% compared with staying seated. Standing up without walking gave about 9.5% — roughly half the benefit, but still clearly better than not moving."
        },
        {
          "t": "p",
          "text": "So the floor is low. Two minutes to the kettle and back is not the same as ten minutes outside, but it is meaningfully better than nothing, and it removes the excuse that a short walk is pointless."
        },
        {
          "t": "h",
          "text": "Walk immediately, or wait 30 minutes?"
        },
        {
          "t": "p",
          "text": "This is the part where the evidence genuinely disagrees, and I'd rather show you the disagreement than pretend there's a settled answer."
        },
        {
          "t": "p",
          "text": "The case for going immediately: in the 2025 Scientific Reports trial, participants who walked straight after the glucose drink had a lower peak and a lower two-hour glucose curve than when they sat — and the delayed, longer walk didn't do better."
        },
        {
          "t": "p",
          "text": "The case for waiting: if you start moving at minute zero and stop at minute ten, you may have finished before much of the glucose has arrived. In a 2022 Nutrients study, brisk walking that began 15 minutes after the meal substantially reduced the glucose peak across meals of quite different composition. Given the peak usually lands 45–90 minutes in, a walk that ends before minute ten can only do so much."
        },
        {
          "t": "p",
          "text": "The practical resolution is less dramatic than the debate: anywhere in the first half hour is fine, and the exact minute matters far less than whether the walk happens at all. If you wear a CGM you can settle it for yourself in a week — walk immediately after lunch for three days, wait 20 minutes for the next three, and compare the curves. Your answer is worth more than the average of twelve volunteers on a treadmill."
        },
        {
          "t": "h",
          "text": "Does what you ate change the answer?"
        },
        {
          "t": "p",
          "text": "Yes, though less than you might think. Post-meal walking cut the glucose peak across meals of different carbohydrate and macronutrient composition in the 2022 study — it isn't a trick that only works on plain carbohydrate."
        },
        {
          "t": "p",
          "text": "What changes is the timing of the target. A high-carb, low-fat meal produces a tall, early peak, so an early walk lands squarely on it. Fat and protein slow stomach emptying and push the rise later and flatter — which is why pizza or a creamy pasta can still be climbing two or three hours later. After a meal like that, a second short walk an hour or so afterwards often does more than doubling the first one. The [glycaemic quality of what you're eating](/blog/carb-quality-healthy-aging/) shapes the curve you're trying to blunt, so it's worth knowing which of your regular meals are the steep ones."
        },
        {
          "t": "h",
          "text": "If you take insulin, read this bit"
        },
        {
          "t": "p",
          "text": "Walking after a meal with rapid-acting insulin on board is a different situation from walking after a meal without it. Two glucose-lowering effects stack: the insulin you injected, and the insulin-independent uptake the walking produces. The same habit that gently flattens a curve for one reader can take another one low."
        },
        {
          "t": "p",
          "text": "I do walk after lunch, most days, and I know roughly what it does to me — but I know it because I've watched it on a CGM for years, not because I read a percentage in an article. That's the honest version: this is a habit worth building with insulin, and worth building carefully."
        },
        {
          "t": "p",
          "text": "Practically, that means knowing your number before you set off, checking again 30–60 minutes later, carrying fast-acting carbohydrate, and being aware that the effect can show up hours afterwards rather than during the walk. Anything beyond awareness — changing a dose, changing a ratio, adjusting a pump profile around a new routine — belongs with your diabetes team, not with me or with an article. The same care applies if you take a sulfonylurea, which can also cause hypoglycaemia."
        },
        {
          "t": "h",
          "text": "Making it a habit that survives a real week"
        },
        {
          "t": "p",
          "text": "This rarely fails on motivation. It fails because \"walk after meals\" is quietly three new tasks a day, and three new daily tasks do not survive a bad week."
        },
        {
          "t": "p",
          "text": "So attach it to something that already happens rather than adding a slot to the day: the walk back from the school gates, taking the bins out, the long way round to the kettle, a phone call you were going to make anyway taken standing and moving. Pace should be comfortable — every trial above used easy or briskly comfortable walking, not exercise you'd need to change clothes for."
        },
        {
          "t": "p",
          "text": "And start with one meal, not three. If you only pick one, pick the evening meal: it's usually the carb-heaviest and reliably the most sedentary, which is exactly why it produced the largest effect in the research. It's also a small, cheap habit in an era when it's [getting easier to move less without noticing](/blog/glp1-drugs-less-movement/)."
        },
        {
          "t": "p",
          "text": "Two of my free tools make this easier to aim. The [exercise & blood sugar calculator](/resources/exercise-calculator/) estimates how walking and other movement is likely to shift your numbers, so you can see what a ten-minute walk is worth before you commit to the habit. The [metabolic food calculator](/resources/food-calculator/) does the same for a given food — useful for working out which of your regular meals are the steep ones worth walking off first — and the [carb & GI table](/carb-gi-table/) is a quick reference for the usual suspects."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "10 minutes of walking after each meal beat 30 minutes of walking at any time of day.",
              "detail": "A randomised crossover study in 41 adults with type 2 diabetes compared advice to walk 10 minutes after each main meal with advice to walk 30 minutes a day at any time. Post-meal blood glucose was 12% lower on the after-meal advice overall, with most of the difference coming from a 22% reduction in the three hours after the evening meal — the meal that was both the most carbohydrate-rich and the most sedentary.",
              "cite": "Reynolds AN et al. · Diabetologia, 2016",
              "url": "https://pubmed.ncbi.nlm.nih.gov/27747394/"
            },
            {
              "claim": "Light walking breaks of 2–5 minutes lowered glucose by about 17% compared with sitting.",
              "detail": "A systematic review and meta-analysis of seven studies in which participants interrupted prolonged sitting with 2–5 minutes of standing or light-intensity walking every 20–30 minutes. Intermittent light walking reduced postprandial glucose by an average of 17.01% versus prolonged sitting; standing breaks reduced it by 9.51%. Walking was superior to standing for blunting the post-meal rise.",
              "cite": "Buffey AJ et al. · Sports Medicine, 2022",
              "url": "https://pubmed.ncbi.nlm.nih.gov/35247203/"
            },
            {
              "claim": "A 10-minute walk immediately after a glucose load lowered the peak, and a longer delayed walk did not beat it.",
              "detail": "A randomised, counterbalanced crossover trial in 12 healthy young adults compared seated rest, a 10-minute self-paced walk immediately after 75 g of glucose, and a 30-minute walk beginning 30 minutes after intake. The immediate 10-minute walk lowered peak glucose from 181.9 to 164.3 mg/dL (10.1 to 9.1 mmol/L) and reduced the two-hour glucose area under the curve versus rest. The trial was small and conducted in healthy young adults, so the size of the effect shouldn't be read across to everyone.",
              "cite": "Hashimoto K et al. · Scientific Reports, 2025",
              "url": "https://www.nature.com/articles/s41598-025-07312-y"
            },
            {
              "claim": "Post-meal walking lowered the glucose peak across meals of different composition.",
              "detail": "Two randomised repeated-measures studies in healthy young adults tested 30 minutes of brisk walking (about 120 steps per minute) starting 15 minutes after meals that differed in carbohydrate content and macronutrient composition. Postprandial brisk walking substantially reduced the glucose peak in each case, indicating the effect is not confined to one type of meal.",
              "cite": "Bellini A et al. · Nutrients, 2022",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8912639/"
            },
            {
              "claim": "Short post-meal walks controlled 24-hour glucose better than one longer walk.",
              "detail": "In older adults at risk of impaired glucose tolerance, three 15-minute walks taken shortly after each meal improved 24-hour glycaemic control more effectively than a single 45-minute walk of the same total duration, with the post-dinner walk producing the largest sustained improvement.",
              "cite": "DiPietro L et al. · Diabetes Care, 2013",
              "url": "https://diabetesjournals.org/care/article/36/10/3262/30770/Three-15-min-Bouts-of-Moderate-Postmeal-Walking"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, women's health writer living with type 1 diabetes",
          "text": "Lena Filatova has lived with type 1 diabetes for 23 years. She writes about women's health, perimenopause, nutrition and diabetes management at lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "How long should I walk after a meal to lower blood sugar?",
          "a": "Ten minutes is the sweet spot in the research, and the benefit for glucose largely plateaus around 15–20 minutes. Walking 10 minutes after each meal lowered post-meal glucose by about 12% in people with type 2 diabetes, and by 22% after the evening meal. Longer walks are good for other reasons, but they don't flatten the spike proportionally more."
        },
        {
          "q": "Should I walk immediately after eating or wait 30 minutes?",
          "a": "The evidence genuinely disagrees. A 2025 trial found a 10-minute walk taken immediately after a glucose load lowered the peak, while a 2022 study that started walking 15 minutes after the meal also cut the peak substantially. Since glucose usually peaks 45–90 minutes after the first bite, anywhere in the first half hour works — and starting at all matters far more than the exact minute."
        },
        {
          "q": "Does walking after dinner help more than after other meals?",
          "a": "In the research, yes. The evening meal is typically the most carbohydrate-heavy and is followed by the most sitting, so it has the most to gain. In the 2016 Diabetologia study, the after-dinner walk produced a 22% reduction in post-meal glucose — the largest of the three meals. If you're only going to walk after one meal, make it that one."
        },
        {
          "q": "Is it safe to walk after meals if I take insulin?",
          "a": "It's a good habit, but it needs care. Walking with rapid-acting insulin still active stacks two glucose-lowering effects, so a hypo is possible during the walk or several hours later. Know your number before you go, check again 30–60 minutes afterwards, and carry fast-acting carbohydrate. Any change to insulin doses or ratios around a new walking routine should be made with your diabetes team, not from an article. The same caution applies to sulfonylureas."
        }
      ]
    },
    "ua": {
      "cat": "Діабет",
      "title": "10 хвилин ходьби після їжі: наскільки це насправді знижує цукор у крові",
      "excerpt": "Дослідження показують зниження післяїжного підйому глюкози на 10–22%. Скільки ходити, коли починати — одразу чи згодом — і що змінюється, якщо ви на інсуліні.",
      "meta": "13 серпня 2026 · 6 хв читання",
      "lead": "Я живу з діабетом 1 типу 23 роки, і звичка, яка найбільше вплинула на мої показники після їжі, — це не добавка й не новий гаджет. Це десять хвилин ходьби після того, як я поїла.",
      "seoTitle": "Ходьба після їжі: наскільки вона знижує цукор",
      "metaDesc": "10 хвилин ходьби після їжі знижують післяїжний підйом глюкози на 10–22%. Скільки ходити, коли починати і що змінюється, якщо ви на інсуліні.",
      "blocks": [
        {
          "t": "p",
          "text": "Ця порада повторюється не випадково: це одна з небагатьох речей у метаболічному здоров’ї зі справді чистою доказовою базою. Більшість публікацій помиляється в деталях — скільки ходити, як швидко починати і чи має значення, що саме ви з’їли. Саме в цих деталях дослідження й розходяться, і саме про них ця стаття."
        },
        {
          "t": "h",
          "text": "Що насправді відбувається з глюкозою після їжі"
        },
        {
          "t": "p",
          "text": "Вуглеводи доставляють глюкозу в кров швидше, ніж м’язи й печінка встигають її забирати. Рівень глюкози зростає, зазвичай досягаючи піку через 45–90 хвилин після першого шматка — залежно від страви — а потім знижується, коли спрацьовує інсулін."
        },
        {
          "t": "p",
          "text": "Тут важливий саме пік, а не середнє за день. Дві людини можуть завершити день з однаковим середнім значенням, але одна провела його на пологому плато, а інша — на серії різких підйомів і падінь. Саме висота й крутизна цих стрибків найтісніше пов’язані з тим, як ви почуваєтеся за годину після їжі — і, з роками, з ризиками. Мета — знизити пік: та сама логіка стоїть за тим, [чому порядок, у якому ви їсте страви, змінює криву](/ua/blog/type-2-diabetes-research/)."
        },
        {
          "t": "p",
          "text": "Ходьба знижує цей пік шляхом, який узагалі не потребує інсуліну. М’яз, що скорочується, забирає глюкозу з крові через транспортери GLUT4, які виходять на поверхню клітини у відповідь на саме скорочення. Глюкоза, яку ваші ноги спалюють під час ходьби, — це глюкоза, що вже не потрапить у пік. Тому це працює і для людини з діабетом 2 типу, і для людини з інсулінорезистентністю, і для людини з діабетом 1 типу, чий інсулін робить свою справу з іншого боку."
        },
        {
          "t": "h",
          "text": "Що показують цифри"
        },
        {
          "t": "p",
          "text": "Основну роботу тут виконують чотири дослідження, і їх варто побачити поруч, а не як одне розмите твердження:"
        },
        {
          "t": "table",
          "head": [
            "Дослідження",
            "Що перевіряли",
            "Результат"
          ],
          "rows": [
            [
              "Reynolds та ін., Diabetologia, 2016",
              "10 хв після кожного з трьох прийомів їжі проти 30 хв ходьби в будь-який час дня (діабет 2 типу)",
              "Глюкоза після їжі нижча на 12% загалом; на 22% нижча після вечері"
            ],
            [
              "Buffey та ін., Sports Medicine, 2022",
              "2–5 хв легкої ходьби кожні 20–30 хв проти цілого дня сидіння",
              "Глюкоза на 17% нижча, ніж при тривалому сидінні; саме лише стояння дало 9,5%"
            ],
            [
              "Hashimoto та ін., Scientific Reports, 2025",
              "10 хв спокійної ходьби одразу після напою з 75 г глюкози (здорові дорослі)",
              "Пік глюкози знизився з 182 до 164 мг/дл (з 10,1 до 9,1 ммоль/л)"
            ],
            [
              "DiPietro та ін., Diabetes Care, 2013",
              "Три 15-хвилинні прогулянки після їжі проти однієї 45-хвилинної (літні люди з ризиком)",
              "Прогулянки після їжі краще контролювали глюкозу за добу, найбільше — та, що після вечері"
            ]
          ]
        },
        {
          "t": "p",
          "text": "Разом це дає зниження післяїжного підйому приблизно на 10–20% у середньому, а найбільший ефект в межах одного прийому їжі — після найбільш вуглеводного, зазвичай вечері — перевищує 20%. В інтернеті ви побачите значно більші цифри. Усе, що вище приблизно 30%, варто сприймати як один яскравий результат в одних умовах, а не як те, чого очікувати у звичайний вівторок. Це відчутний і повторюваний поштовх, а не заміна чомусь іншому."
        },
        {
          "t": "h",
          "text": "Де ефект виходить на плато"
        },
        {
          "t": "p",
          "text": "Приблизно на 15–20 хвилинах — якщо говорити саме про глюкозу. Різниця між «нічого» і «десять хвилин» велика; різниця між десятьма й тридцятьма хвилинами значно менша. У дослідженні 2025 року 30-хвилинний варіант — утричі більше ходьби — не перевершив коротку прогулянку за впливом на пік."
        },
        {
          "t": "p",
          "text": "Довші прогулянки все одно варті часу — заради витривалості, настрою, сну та серця. Але якщо ви купуєте саме пологішу криву після їжі, більшість віддачі приходить рано. І це добра новина: десять хвилин можна робити тричі на день роками, а сорок — ні."
        },
        {
          "t": "h",
          "text": "Навіть дві хвилини мають значення"
        },
        {
          "t": "p",
          "text": "Огляд у Sports Medicine — саме те, за що варто триматися, коли десяти хвилин немає. Переривання сидіння лише 2–5 хвилинами легкої ходьби, повторюване протягом дня, знижувало глюкозу приблизно на 17% порівняно з безперервним сидінням. Просте вставання без ходьби дало близько 9,5% — приблизно половину користі, але все одно помітно краще, ніж не рухатися."
        },
        {
          "t": "p",
          "text": "Тож поріг низький. Дві хвилини до чайника й назад — це не те саме, що десять хвилин надворі, але це відчутно краще за ніщо, і це знімає виправдання, ніби коротка прогулянка не має сенсу."
        },
        {
          "t": "h",
          "text": "Іти одразу чи зачекати 30 хвилин?"
        },
        {
          "t": "p",
          "text": "Ось тут дані справді розходяться, і я радше покажу вам це розходження, ніж вдаватиму, що відповідь однозначна."
        },
        {
          "t": "p",
          "text": "Аргумент іти одразу: у дослідженні Scientific Reports 2025 року учасники, які йшли пішки одразу після напою з глюкозою, мали нижчий пік і нижчу двогодинну криву, ніж коли сиділи, — а відкладена й довша прогулянка не дала кращого результату."
        },
        {
          "t": "p",
          "text": "Аргумент зачекати: якщо почати рухатися на нульовій хвилині й зупинитися на десятій, ви можете закінчити ще до того, як більша частина глюкози надійде в кров. У дослідженні в Nutrients 2022 року швидка ходьба, що починалася через 15 хвилин після їжі, суттєво знижувала пік глюкози після страв дуже різного складу. З огляду на те, що пік зазвичай припадає на 45–90 хвилину, прогулянка, яка завершується до десятої, може зробити лише частину роботи."
        },
        {
          "t": "p",
          "text": "Практичний висновок менш драматичний за саму суперечку: будь-коли в перші пів години — це нормально, і конкретна хвилина важить значно менше, ніж те, чи прогулянка взагалі відбулася. Якщо ви носите CGM, за тиждень можна з’ясувати це для себе: три дні ходіть одразу після обіду, наступні три — через 20 хвилин, і порівняйте криві. Ваша власна відповідь вартує більше, ніж середнє по дванадцятьох добровольцях на біговій доріжці."
        },
        {
          "t": "h",
          "text": "Чи змінює відповідь те, що саме ви з’їли?"
        },
        {
          "t": "p",
          "text": "Так, але менше, ніж можна подумати. У дослідженні 2022 року ходьба після їжі знижувала пік глюкози після страв різного вуглеводного й макронутрієнтного складу — це не трюк, що працює лише на чистих вуглеводах."
        },
        {
          "t": "p",
          "text": "Змінюється радше час, у який треба поцілити. Страва з високим вмістом вуглеводів і низьким — жиру дає високий і ранній пік, тож рання прогулянка влучає точно в нього. Жир і білок уповільнюють спорожнення шлунка й зсувають підйом пізніше, роблячи його пологішим — саме тому піца чи паста з вершковим соусом можуть підіймати цукор ще через дві-три години. Після такої страви друга коротка прогулянка приблизно за годину часто дає більше, ніж подвоєння першої. [Якість вуглеводів, які ви обираєте](/ua/blog/carb-quality-healthy-aging/), формує саму криву, яку ви намагаєтеся згладити, тож варто знати, які з ваших звичних страв дають найкрутіші підйоми."
        },
        {
          "t": "h",
          "text": "Якщо ви на інсуліні, прочитайте цей розділ"
        },
        {
          "t": "p",
          "text": "Ходьба після їжі, коли в організмі активний швидкодіючий інсулін, — це зовсім інша ситуація, ніж ходьба без нього. Складаються два цукрознижувальні ефекти: інсулін, який ви ввели, та незалежне від інсуліну засвоєння глюкози, яке дає ходьба. Та сама звичка, що м’яко згладжує криву одній людині, іншу може завести в гіпоглікемію."
        },
        {
          "t": "p",
          "text": "Я справді ходжу після обіду майже щодня і приблизно знаю, як це на мене діє, — але знаю тому, що роками спостерігала це на CGM, а не тому, що прочитала відсоток у статті. Чесна версія така: з інсуліном цю звичку варто будувати — і варто будувати обережно."
        },
        {
          "t": "p",
          "text": "На практиці це означає: знати свій рівень перед виходом, перевірити ще раз через 30–60 хвилин, мати із собою швидкі вуглеводи й пам’ятати, що ефект може проявитися за кілька годин, а не під час самої прогулянки. Усе, що виходить за межі обізнаності — зміна дози, коефіцієнта чи налаштувань помпи під нову рутину — належить вашій діабетичній команді, а не мені й не статті. Та сама обережність стосується препаратів сульфонілсечовини, які теж можуть спричиняти гіпоглікемію."
        },
        {
          "t": "h",
          "text": "Як зробити це звичкою, що переживе справжній тиждень"
        },
        {
          "t": "p",
          "text": "Це рідко зривається через брак мотивації. Це зривається тому, що «ходити після їжі» — це насправді три нові справи щодня, а три нові щоденні справи не переживають поганого тижня."
        },
        {
          "t": "p",
          "text": "Тож прив’яжіть прогулянку до того, що вже відбувається, замість додавати новий пункт у розклад: дорога назад від школи, винести сміття, довший шлях до чайника, дзвінок, який ви й так мали зробити, — але стоячи й на ходу. Темп має бути комфортним: у всіх дослідженнях вище була спокійна або бадьора, але зручна хода, а не тренування, заради якого треба перевдягатися."
        },
        {
          "t": "p",
          "text": "І почніть з одного прийому їжі, а не з трьох. Якщо обирати лише один — обирайте вечерю: вона зазвичай найбільш вуглеводна й стабільно найменш рухлива, тому саме вона дала найбільший ефект у дослідженнях. Це ще й дешева звичка в часи, коли [рухатися менше стає непомітно легше](/ua/blog/glp1-drugs-less-movement/)."
        },
        {
          "t": "p",
          "text": "Два моїх безкоштовних інструменти допоможуть краще прицілитися. [Калькулятор впливу фізичних навантажень на цукор](/ua/resources/exercise-calculator/) оцінює, як ходьба та інший рух імовірно змістять ваші показники, — щоб ви побачили, чого варті десять хвилин, ще до того, як братися за звичку. [Калькулятор впливу їжі на метаболізм](/ua/resources/food-calculator/) робить те саме для конкретного продукту — зручно, щоб зрозуміти, після яких саме ваших звичних страв прогулянка потрібна найбільше, — а [таблиця вуглеводів і ГІ](/carb-gi-table-ua/) слугує швидкою довідкою щодо звичних підозрюваних."
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "10 хвилин ходьби після кожного прийому їжі перевершили 30 хвилин ходьби в будь-який час дня.",
              "detail": "Рандомізоване перехресне дослідження за участю 41 дорослої людини з діабетом 2 типу порівнювало пораду ходити 10 хвилин після кожного основного прийому їжі з порадою ходити 30 хвилин на день у будь-який час. Глюкоза після їжі була на 12% нижчою за першої поради загалом, причому більшість різниці дало зниження на 22% у три години після вечері — прийому їжі, який був водночас найбільш вуглеводним і найменш рухливим.",
              "cite": "Reynolds AN та ін. · Diabetologia, 2016",
              "url": "https://pubmed.ncbi.nlm.nih.gov/27747394/"
            },
            {
              "claim": "Перерви на легку ходьбу по 2–5 хвилин знижували глюкозу приблизно на 17% порівняно із сидінням.",
              "detail": "Систематичний огляд і метааналіз семи досліджень, у яких учасники переривали тривале сидіння 2–5 хвилинами стояння або легкої ходьби кожні 20–30 хвилин. Періодична легка ходьба знижувала післяїжну глюкозу в середньому на 17,01% порівняно з тривалим сидінням; перерви на стояння — на 9,51%. Ходьба виявилася ефективнішою за стояння для згладжування підйому після їжі.",
              "cite": "Buffey AJ та ін. · Sports Medicine, 2022",
              "url": "https://pubmed.ncbi.nlm.nih.gov/35247203/"
            },
            {
              "claim": "10 хвилин ходьби одразу після глюкозного навантаження знизили пік, а довша відкладена прогулянка його не перевершила.",
              "detail": "Рандомізоване перехресне дослідження зі збалансованим порядком умов за участю 12 здорових молодих дорослих порівнювало відпочинок сидячи, 10-хвилинну ходьбу у власному темпі одразу після 75 г глюкози та 30-хвилинну ходьбу, що починалася через 30 хвилин після прийому. Негайна 10-хвилинна ходьба знизила пік глюкози з 181,9 до 164,3 мг/дл (з 10,1 до 9,1 ммоль/л) і зменшила двогодинну площу під кривою порівняно з відпочинком. Дослідження було малим і проведеним на здорових молодих людях, тож розмір ефекту не варто автоматично переносити на всіх.",
              "cite": "Hashimoto K та ін. · Scientific Reports, 2025",
              "url": "https://www.nature.com/articles/s41598-025-07312-y"
            },
            {
              "claim": "Ходьба після їжі знижувала пік глюкози після страв різного складу.",
              "detail": "Два рандомізовані дослідження з повторними вимірюваннями за участю здорових молодих дорослих перевіряли 30 хвилин швидкої ходьби (близько 120 кроків за хвилину), що починалася через 15 хвилин після страв, які відрізнялися вмістом вуглеводів і макронутрієнтним складом. Швидка ходьба після їжі суттєво знижувала пік глюкози в кожному випадку, тобто ефект не обмежується одним типом страви.",
              "cite": "Bellini A та ін. · Nutrients, 2022",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8912639/"
            },
            {
              "claim": "Короткі прогулянки після їжі контролювали добову глюкозу краще, ніж одна довша.",
              "detail": "У літніх людей із ризиком порушеної толерантності до глюкози три 15-хвилинні прогулянки невдовзі після кожного прийому їжі покращували добовий глікемічний контроль ефективніше, ніж одна 45-хвилинна прогулянка тієї самої загальної тривалості, а найбільший стійкий ефект давала прогулянка після вечері.",
              "cite": "DiPietro L та ін. · Diabetes Care, 2013",
              "url": "https://diabetesjournals.org/care/article/36/10/3262/30770/Three-15-min-Bouts-of-Moderate-Postmeal-Walking"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Лена Філатова, авторка про жіноче здоров’я, живе з діабетом 1 типу",
          "text": "Лена Філатова живе з діабетом 1 типу 23 роки. Вона пише про жіноче здоров’я, перименопаузу, харчування та контроль діабету на lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Скільки треба ходити після їжі, щоб знизити цукор?",
          "a": "Десять хвилин — оптимальна точка за даними досліджень, а користь саме для глюкози здебільшого виходить на плато на 15–20 хвилинах. Ходьба по 10 хвилин після кожного прийому їжі знижувала післяїжну глюкозу приблизно на 12% у людей з діабетом 2 типу і на 22% після вечері. Довші прогулянки корисні з інших причин, але вони не згладжують пік пропорційно сильніше."
        },
        {
          "q": "Іти одразу після їжі чи зачекати 30 хвилин?",
          "a": "Дані справді розходяться. Дослідження 2025 року показало, що 10 хвилин ходьби одразу після глюкозного навантаження знижують пік, а дослідження 2022 року, де ходьба починалася через 15 хвилин після їжі, теж суттєво знизило пік. Оскільки глюкоза зазвичай досягає піку через 45–90 хвилин після першого шматка, підійде будь-який момент у перші пів години — а те, чи ви взагалі вийдете, важить набагато більше за конкретну хвилину."
        },
        {
          "q": "Чи справді прогулянка після вечері допомагає більше, ніж після інших прийомів їжі?",
          "a": "За даними досліджень — так. Вечеря зазвичай найбільш вуглеводна, і після неї найбільше сидять, тож і виграти можна найбільше. У дослідженні Diabetologia 2016 року прогулянка після вечері дала зниження післяїжної глюкози на 22% — найбільше з трьох прийомів їжі. Якщо ви ходитимете лише після одного, оберіть саме його."
        },
        {
          "q": "Чи безпечно ходити після їжі, якщо я на інсуліні?",
          "a": "Це хороша звичка, але вона потребує обережності. Ходьба, коли швидкодіючий інсулін ще активний, складає два цукрознижувальні ефекти, тож гіпоглікемія можлива і під час прогулянки, і за кілька годин після неї. Знайте свій рівень перед виходом, перевіряйте його через 30–60 хвилин і майте із собою швидкі вуглеводи. Будь-які зміни доз чи коефіцієнтів під нову рутину варто робити з вашою діабетичною командою, а не за статтею. Та сама обережність стосується препаратів сульфонілсечовини."
        }
      ]
    }
  },
  {
    "slug": "eating-around-training-blood-sugar",
    "date": "2026-08-13",
    "image": "/images/eating-around-training-blood-sugar.jpg",
    "cats": [
      "fitness",
      "nutrition",
      "diabetes"
    ],
    "en": {
      "cat": "Fitness 40+",
      "title": "Eating around training when you're managing blood sugar",
      "seoTitle": "What to Eat Before Training With Diabetes",
      "metaDesc": "Pre- and post-workout eating for insulin resistance and type 1 diabetes — plus an honest verdict on fasted training after 40.",
      "excerpt": "Whether to eat before you train, what to eat afterwards, and why the answer is genuinely different for insulin resistance and type 1 diabetes.",
      "meta": "13 August 2026 · 8 min read",
      "lead": "You've started training. Now you're standing in the kitchen at quarter to seven wondering whether to eat first — and if so, what, and how much. This is the part almost nobody covers well, because the honest answer depends on which kind of blood sugar problem you're managing.",
      "blocks": [
        {
          "t": "p",
          "text": "Please always consult your healthcare professional before changing your diet. And if you take insulin, the specifics of how it fits around exercise belong to your diabetes team — this article is about food, not doses."
        },
        {
          "t": "p",
          "text": "I've lived with type 1 diabetes for 23 years and I train regularly, so I've made most of the available mistakes: trained on an empty stomach and had to stop halfway; eaten a \"sensible\" banana beforehand and watched my glucose climb through the whole session; finished a heavy lifting session with a higher reading than I started with and assumed my meter was broken."
        },
        {
          "t": "p",
          "text": "What finally helped was realising that the advice out there is written for two different people and rarely says which. Diabetes sites tend to write for someone whose main risk is going low. Midlife fitness content tends to write for someone with no glucose problem at all, and increasingly pushes fasted training at women over 40 as though there were no downside. If you're a woman in your forties with insulin resistance — or with type 1 — neither one is talking to you."
        },
        {
          "t": "h",
          "text": "The two things a pre-training meal has to do"
        },
        {
          "t": "p",
          "text": "A pre-training meal has one job with two halves: give you enough fuel to actually train, without setting off the spike or the crash that ruins the session. Everything below is a way of balancing those two things."
        },
        {
          "t": "p",
          "text": "The reason this is trickier than it sounds is that exercise itself moves glucose. Working muscle pulls glucose out of the blood, and it can do a good deal of that without much help from insulin. So the food you eat before training doesn't behave the way the same food behaves at your desk — and the direction it moves you in depends on the session. As [Diabetes UK sets out](https://www.diabetes.org.uk/living-with-diabetes/exercise/blood-sugar-levels), steady activity where you don't get badly out of breath — walking, swimming, easy cycling — tends to bring glucose down, while short, hard, powerful efforts — sprints, heavy lifting, a class that leaves you gasping — tend to push it up."
        },
        {
          "t": "p",
          "text": "That is why \"eat a banana before your workout\" is useless as universal advice. A banana before a 45-minute walk and a banana before a heavy lower-body session are two completely different propositions."
        },
        {
          "t": "h",
          "text": "If you have insulin resistance or prediabetes"
        },
        {
          "t": "p",
          "text": "Your problem is not running out of fuel. In insulin resistance there is generally plenty of glucose available; the difficulty is getting it into the cells efficiently, and a big carb hit before training tends to produce exactly the rise-then-slump that makes people feel dreadful mid-session."
        },
        {
          "t": "p",
          "text": "Protein-forward works better. Eating protein before the carbohydrate part of a meal slows stomach emptying and blunts the glucose rise that follows: a [2023 meta-analysis in the American Journal of Clinical Nutrition](https://ajcn.nutrition.org/article/S0002-9165(23)48905-8/fulltext) pooled 16 crossover trials and found a whey protein premeal lowered peak glucose by around 1.4 mmol/L compared with water. In practice that means something like 20–30g of protein 60–90 minutes before you train — Greek yoghurt, eggs, cottage cheese, a shake if the morning is tight — rather than toast and jam on the way out of the door. If you've read [my piece on protein after 40](/blog/protein-for-women-over-40/), this is the same principle applied to a smaller window."
        },
        {
          "t": "p",
          "text": "Carbohydrate isn't the enemy here; the amount and the type are what matter. For a session under an hour at moderate effort, most women don't need any extra carbohydrate beyond what they've already eaten that day. For anything longer or genuinely hard, add a modest portion of a slower carbohydrate — oats, a slice of proper rye bread, a small sweet potato — with the protein, not on its own. Fast carbohydrate on its own is worth keeping for the sessions that actually justify it, and if you're not sure which foods sit where, the [carb and GI table](/carb-gi-table/) is the quickest way to check."
        },
        {
          "t": "p",
          "text": "One practical note about timing: the closer you get to the session, the smaller the meal should be. Ninety minutes out, eat properly. Twenty minutes out, either keep it to something very small or accept that you'll train on what you've already got on board."
        },
        {
          "t": "h",
          "text": "If you have type 1 diabetes, this is a different problem"
        },
        {
          "t": "p",
          "text": "For type 1, the dominant variable isn't the food — it's how much insulin is still active when you start. The same porridge eaten three hours before a session and forty minutes before a session are, functionally, two different meals, because in one case a large part of the mealtime insulin has already done its work and in the other it hasn't."
        },
        {
          "t": "p",
          "text": "The type of session matters just as much. In a study in [Diabetes Care](https://diabetesjournals.org/care/article/36/3/537/38023/Resistance-Versus-Aerobic-ExerciseAcute-effects-on), twelve physically active adults with type 1 did 45 minutes of resistance exercise, 45 minutes of aerobic exercise, or nothing, on separate days: glucose fell far less during the resistance session, but stayed lower for longer afterwards. The 2017 [consensus statement on exercise in type 1 diabetes](https://www.thelancet.com/article/S2213-8587(17)30014-1/abstract) in The Lancet Diabetes & Endocrinology makes the same distinction — aerobic work generally brings glucose down, while anaerobic and high-intensity work can push it up temporarily. So a steady run and a heavy lifting session need different food around them, and the amount you eat before a run is not a good guide to what you need before weights."
        },
        {
          "t": "p",
          "text": "There is no formula I can give you here, and anyone who offers you one online should be treated with suspicion. What actually works is pattern-finding: pick a session you do regularly, keep the timing and the food the same for a few weeks, and look at what your CGM does — during, straight after, and overnight. My own 7am sessions and 6pm sessions behave nothing like each other, and I only know that because I looked. For a starting expectation before you have your own data, the [exercise and blood sugar calculator](/resources/exercise-calculator/) estimates which way a given type of session is likely to move you, and [my post on glucose patterns](/blog/reading-glucose-patterns/) gives you a structure for reading the traces afterwards."
        },
        {
          "t": "p",
          "text": "Everything involving insulin around exercise — timing, reductions, what to do about a low before you start — is a conversation with your diabetes team, not something to work out from an article. That includes mine."
        },
        {
          "t": "h",
          "text": "After the session"
        },
        {
          "t": "p",
          "text": "Two things are worth knowing about the hours after training. The first is that muscle keeps taking up glucose more readily for a long time afterwards — Diabetes UK suggests staying alert to it for up to 24 hours. If you're on insulin, that's the window where the surprise low arrives, and it's often overnight rather than straight after."
        },
        {
          "t": "p",
          "text": "The second is that the reading immediately after a hard session may look wrong. Finishing a heavy lifting session or a sprint interval class higher than you started is normal physiology — adrenaline and glucose released by the liver, not a mistake you made. It usually settles. What matters is knowing to expect it, so you don't react to it."
        },
        {
          "t": "p",
          "text": "On the food side, the priority afterwards is protein for repair: 25–40g in the meal that follows, which for most women means being deliberate about it rather than assuming it happened. The precise post-workout window matters less than people think — a randomised trial in postmenopausal women found that [total daily protein spread across meals](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4042233/) mattered more for muscle than exact timing around exercise. If you're managing insulin resistance, the hours after training are also the point in the day when your muscles are most receptive to carbohydrate, so this is the meal to put the potatoes or the rice in, if you're having them at all."
        },
        {
          "t": "h",
          "text": "Fasted training: the honest verdict for women over 40"
        },
        {
          "t": "p",
          "text": "Fasted training is having a moment in midlife fitness, and the underlying observation is real: you do burn a higher proportion of fat during a session done on an empty stomach. A [meta-analysis in the British Journal of Nutrition](https://www.cambridge.org/core/journals/british-journal-of-nutrition/article/effects-of-aerobic-exercise-performed-in-fasted-v-fed-state-on-fat-and-carbohydrate-metabolism-in-adults-a-systematic-review-and-metaanalysis/0EA2328A0FF91703C95FD39A38716811) of 27 studies confirmed that much."
        },
        {
          "t": "p",
          "text": "What doesn't follow is the promise attached to it. Burning more fat during the hour doesn't reliably translate into burning more fat over the day, or into losing more of it over months — the body adjusts across the remaining 23 hours, and the trials that have looked at body composition rather than fuel use during exercise have not found a meaningful advantage. Fasted training is a preference, not a fat-loss strategy."
        },
        {
          "t": "p",
          "text": "And it's a poor fit for some people. If you take insulin or a sulfonylurea, training on an empty stomach removes your margin for error in the direction you least want. If your glucose is already volatile, fasted sessions add another variable to something you're trying to make predictable. And if you're already struggling to hit your protein target — which most women over 40 are — skipping the pre-training meal usually means skipping protein you weren't going to make up later."
        },
        {
          "t": "p",
          "text": "Where I think it's genuinely fine: a short, easy morning session — a walk, mobility work, gentle cycling — for someone not on glucose-lowering medication who simply doesn't want food that early. That's a reasonable choice. A 90-minute fasted session because an app told you it burns more fat is not."
        },
        {
          "t": "h",
          "text": "What this looks like on an actual Tuesday"
        },
        {
          "t": "p",
          "text": "Four realistic combinations. Treat the type 1 column as food principles only — the insulin side is your team's."
        },
        {
          "t": "table",
          "head": [
            "The session",
            "Before",
            "After"
          ],
          "rows": [
            [
              "7am — 30-minute walk or easy cycle",
              "Nothing needed for most people, or a small protein-based snack if you wake hungry",
              "Normal breakfast with 25–30g protein: eggs, or Greek yoghurt with berries and seeds"
            ],
            [
              "45-minute strength session after work",
              "Protein-forward late lunch or afternoon snack — cottage cheese, a shake, a boiled egg and a handful of nuts",
              "Dinner built around 30–40g protein: fish, chicken, tofu, plus vegetables and a modest portion of a slower carbohydrate"
            ],
            [
              "60-minute run or a hard class",
              "Protein 90 minutes out, plus a modest slower carbohydrate — porridge with yoghurt, or rye toast with eggs",
              "Protein within an hour or two, and carbohydrate here if you're having it — this is the meal that best tolerates it"
            ],
            [
              "Evening yoga or mobility",
              "No specific fuelling needed — eat as you normally would",
              "Nothing extra; just make sure the day's protein total is where you want it"
            ]
          ]
        },
        {
          "t": "p",
          "text": "If you want to see how a specific combination is likely to land for you, the [food calculator](/resources/food-calculator/) estimates glycaemic load and the macro split for whatever you type in. And for the post-training meal, the [flourless vegetable quiche](/recipes/vegetable-quiche-no-flour/) is the one I make most often — protein-heavy, low GI, and it keeps for the next day."
        },
        {
          "t": "h",
          "text": "Where this stops and your clinician starts"
        },
        {
          "t": "p",
          "text": "Everything here is about food: what to put in the meal, roughly how much, and roughly when. Nothing here is about medication. If you take insulin, a sulfonylurea, or anything else that can lower your glucose, exercise changes how those work, and the adjustments belong with the team that prescribes them. Take this article to that appointment if it helps — but have the appointment."
        },
        {
          "t": "links",
          "title": "Keep reading",
          "items": [
            {
              "name": "Protein for women over 40: how much do you actually need?",
              "url": "/blog/protein-for-women-over-40/",
              "desc": "The targets behind the numbers in this article, and how to hit them without living on chicken breast."
            },
            {
              "name": "How to read your glucose patterns",
              "url": "/blog/reading-glucose-patterns/",
              "desc": "A structure for working out what your own sessions do to you, rather than guessing."
            },
            {
              "name": "Perimenopause and blood sugar",
              "url": "/blog/perimenopause-diabetes-blood-sugar/",
              "desc": "Why glucose gets harder to manage in midlife even when nothing else has changed."
            },
            {
              "name": "Metabolic food calculator",
              "url": "/resources/food-calculator/",
              "desc": "Type in a meal and see the likely glycaemic load, carbs and protein before you eat it."
            },
            {
              "name": "Exercise and blood sugar calculator",
              "url": "/resources/exercise-calculator/",
              "desc": "Estimates how a walk, a run or a lifting session is likely to move your glucose — useful before you have your own pattern."
            }
          ]
        },
        {
          "t": "h",
          "text": "Trusted resources worth knowing about"
        },
        {
          "t": "links",
          "title": "Where to go deeper",
          "items": [
            {
              "name": "Diabetes UK — Does exercise lower blood sugar levels?",
              "url": "https://www.diabetes.org.uk/living-with-diabetes/exercise/blood-sugar-levels",
              "desc": "The clearest UK explanation of why different types of activity move glucose in different directions, and for how long."
            },
            {
              "name": "American Diabetes Association — Eating tips before and after exercise",
              "url": "https://diabetes.org/health-wellness/fitness/eating-tips-before-after-exercise",
              "desc": "Practical food guidance around training from the ADA, including what changes if you take insulin."
            },
            {
              "name": "Exercise management in type 1 diabetes: a consensus statement",
              "url": "https://www.thelancet.com/article/S2213-8587(17)30014-1/abstract",
              "desc": "The reference document your diabetes team is likely working from. Technical, but worth knowing it exists."
            }
          ]
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "A protein premeal lowers the glucose rise that follows — peak glucose around 1.4 mmol/L lower than water.",
              "detail": "A 2023 systematic review and meta-analysis in the American Journal of Clinical Nutrition pooled 16 randomised crossover trials in 244 adults, with and without type 2 diabetes, comparing a whey protein premeal against water before a meal. Peak postprandial glucose was around 1.4 mmol/L lower and the glucose area under the curve was substantially reduced. Proposed mechanisms include slower gastric emptying and stimulation of GLP-1, GIP and insulin secretion. The trials used whey specifically, so the size of the effect from a mixed-protein meal is likely to differ, and these were acute measurements rather than long-term outcomes.",
              "cite": "American Journal of Clinical Nutrition · Systematic review and meta-analysis, 2023",
              "url": "https://ajcn.nutrition.org/article/S0002-9165(23)48905-8/fulltext"
            },
            {
              "claim": "Resistance training drops glucose less during the session but keeps it lower for longer afterwards than aerobic exercise.",
              "detail": "Twelve physically active adults with type 1 diabetes (mean HbA1c 7.1%) completed 45 minutes of resistance exercise, 45 minutes of running at 60% of VO2max, or no exercise, on separate days. Glucose fell substantially less during resistance exercise, but post-exercise reductions were more prolonged. The sample is small and consisted of already-active adults, so the pattern is a useful illustration of the aerobic-versus-resistance difference rather than a number to plan around.",
              "cite": "Diabetes Care · Randomised crossover trial, 2013",
              "url": "https://diabetesjournals.org/care/article/36/3/537/38023/Resistance-Versus-Aerobic-ExerciseAcute-effects-on"
            },
            {
              "claim": "Aerobic exercise generally lowers glucose; anaerobic and high-intensity work can raise it temporarily.",
              "detail": "The 2017 consensus statement on exercise management in type 1 diabetes, published in The Lancet Diabetes & Endocrinology by Riddell, Gallen, Smart and colleagues, sets out nutrition and insulin management principles for different forms of activity. It is written for clinicians and people with type 1 together, and is the source of the aerobic-versus-anaerobic distinction used throughout this article. Its insulin guidance is deliberately not reproduced here — that part belongs with your diabetes team.",
              "cite": "The Lancet Diabetes & Endocrinology · Consensus statement, 2017",
              "url": "https://www.thelancet.com/article/S2213-8587(17)30014-1/abstract"
            },
            {
              "claim": "Fasted exercise burns more fat during the session — which doesn't translate into more fat lost overall.",
              "detail": "A systematic review and meta-analysis in the British Journal of Nutrition covering 27 studies in 273 participants found significantly higher fat oxidation during aerobic exercise performed fasted rather than fed, with lower glucose and insulin concentrations. The authors note that greater fat oxidation during the session does not necessarily produce greater 24-hour fat oxidation or long-term fat loss compared with the same exercise done fed. Most included studies were in men or mixed samples, and none were specific to women over 40 or to people managing diabetes.",
              "cite": "British Journal of Nutrition · Systematic review and meta-analysis",
              "url": "https://www.cambridge.org/core/journals/british-journal-of-nutrition/article/effects-of-aerobic-exercise-performed-in-fasted-v-fed-state-on-fat-and-carbohydrate-metabolism-in-adults-a-systematic-review-and-metaanalysis/0EA2328A0FF91703C95FD39A38716811"
            },
            {
              "claim": "Total daily protein spread across meals matters more for muscle than exact timing around a workout.",
              "detail": "A randomised controlled trial in postmenopausal women on a weight-loss programme found that while some trends around post-exercise timing appeared, total daily protein distributed across meals was the most important variable for muscle protein synthesis rates. This is why the post-training meal in this article is described as \"within an hour or two\" rather than a strict window.",
              "cite": "PMC · Randomised controlled trial",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4042233/"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, women's health writer living with type 1 diabetes",
          "text": "Lena Filatova has lived with type 1 diabetes for 23 years. She writes about women's health, perimenopause, nutrition and diabetes management at lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Should I eat before a morning workout if I have prediabetes or insulin resistance?",
          "a": "For a short, easy session — a walk, gentle cycling, mobility — you generally don't need to. For anything longer or harder, a protein-forward snack 60–90 minutes beforehand usually feels better than training on nothing, and better than a quick carbohydrate hit, which tends to produce a rise and then a slump mid-session."
        },
        {
          "q": "Why is my blood sugar higher after lifting weights?",
          "a": "That's normal physiology rather than a mistake. Short, hard, powerful efforts trigger adrenaline and glucose release from the liver, so glucose can rise during and immediately after heavy resistance work or high-intensity intervals, even though the same session tends to lower glucose for many hours afterwards. Knowing to expect it is the point — if it happens consistently and concerns you, raise it with your diabetes team."
        },
        {
          "q": "Can I train fasted if I take insulin?",
          "a": "This is a question for your diabetes team, not an article. Training on an empty stomach removes your margin for error in the direction of hypoglycaemia, and the right approach depends on your insulin, your regimen and the session. The fat-burning argument for fasted training is weaker than it's usually presented, so there's little to weigh against that risk."
        },
        {
          "q": "Do I need a protein shake straight after training?",
          "a": "No — but you do need the protein somewhere. Aim for 25–40g in the meal after your session, from food if that's practical and from a shake if it isn't. The evidence suggests your total daily protein, spread reasonably evenly across meals, matters more than hitting a narrow window after exercise."
        }
      ]
    },
    "ua": {
      "cat": "Фітнес 40+",
      "title": "Харчування навколо тренувань, коли ви стежите за цукром у крові",
      "seoTitle": "Що їсти перед тренуванням при діабеті",
      "metaDesc": "Харчування до і після тренування при інсулінорезистентності та діабеті 1 типу — і чесний висновок про тренування натщесерце після 40.",
      "excerpt": "Чи їсти перед тренуванням, що їсти після нього і чому відповідь справді різна при інсулінорезистентності та при діабеті 1 типу.",
      "meta": "13 серпня 2026 · 8 хв читання",
      "lead": "Ви почали тренуватися. І ось ви стоїте на кухні за чверть до сьомої й думаєте, чи поїсти спершу — і якщо так, то що і скільки. Про це майже ніхто не пише як слід, бо чесна відповідь залежить від того, з яким саме порушенням цукру ви маєте справу.",
      "blocks": [
        {
          "t": "p",
          "text": "Будь ласка, завжди консультуйтеся зі своїм лікарем, перш ніж змінювати раціон. А якщо ви на інсуліні, то все, що стосується його поєднання з фізичним навантаженням, — це питання до вашої діабетичної команди. Ця стаття про їжу, а не про дози."
        },
        {
          "t": "p",
          "text": "Я живу з діабетом 1 типу вже 23 роки й регулярно тренуюся, тож устигла зробити майже всі можливі помилки: тренувалася натщесерце й мусила зупинитися на півдорозі; з'їдала «розумний» банан перед заняттям і дивилася, як цукор повзе вгору протягом усього тренування; закінчувала важке силове із вищим показником, ніж починала, і думала, що глюкометр зламався."
        },
        {
          "t": "p",
          "text": "Зрештою допомогло розуміння, що поради пишуть для двох різних людей і майже ніколи не уточнюють, для кого саме. Діабетичні сайти зазвичай звертаються до того, чий головний ризик — гіпоглікемія. Фітнес-контент для жінок середнього віку звертається до того, у кого взагалі немає проблем із глюкозою, і дедалі активніше просуває тренування натщесерце жінкам після 40, ніби в цього немає зворотного боку. Якщо вам за сорок і у вас інсулінорезистентність — або діабет 1 типу — жоден із цих текстів не про вас."
        },
        {
          "t": "h",
          "text": "Дві задачі їжі перед тренуванням"
        },
        {
          "t": "p",
          "text": "У прийому їжі перед тренуванням одна робота, але з двох половин: дати достатньо палива, щоб ви реально відтренувалися, і не спровокувати стрибок або провал, який зіпсує заняття. Усе далі — це способи збалансувати ці дві речі."
        },
        {
          "t": "p",
          "text": "Складність у тому, що саме фізичне навантаження рухає глюкозу. М'язи, які працюють, забирають глюкозу з крові, і значною мірою можуть робити це без великої участі інсуліну. Тому їжа перед тренуванням поводиться не так, як та сама їжа за робочим столом, — а напрямок залежить від типу заняття. Як пояснює [Diabetes UK](https://www.diabetes.org.uk/living-with-diabetes/exercise/blood-sugar-levels), спокійна активність, від якої ви не дуже задихаєтеся — ходьба, плавання, легкий велосипед — зазвичай знижує цукор, тоді як короткі потужні зусилля — спринти, важкі ваги, заняття, після якого ви ловите повітря — часто підіймають його."
        },
        {
          "t": "p",
          "text": "Саме тому «з'їжте банан перед тренуванням» — безглузда універсальна порада. Банан перед 45-хвилинною прогулянкою і банан перед важким днем ніг — це дві абсолютно різні історії."
        },
        {
          "t": "h",
          "text": "Якщо у вас інсулінорезистентність або предіабет"
        },
        {
          "t": "p",
          "text": "Ваша проблема — не брак палива. При інсулінорезистентності глюкози зазвичай вистачає; складність у тому, щоб ефективно завести її в клітини. Велика порція вуглеводів перед тренуванням дає рівно той підйом і подальший спад, від якого посеред заняття стає зле."
        },
        {
          "t": "p",
          "text": "Краще працює білок на першому місці. Якщо з'їсти білок перед вуглеводною частиною їжі, шлунок спорожнюється повільніше, і підйом глюкози стає меншим: [метааналіз 2023 року в American Journal of Clinical Nutrition](https://ajcn.nutrition.org/article/S0002-9165(23)48905-8/fulltext) об'єднав 16 перехресних досліджень і показав, що сироватковий білок перед їжею знижував пік глюкози приблизно на 1,4 ммоль/л порівняно з водою. На практиці це приблизно 20–30 г білка за 60–90 хвилин до тренування — грецький йогурт, яйця, сир, протеїновий коктейль, якщо ранок стислий, — а не тост із джемом на бігу. Якщо ви читали [мій текст про білок після 40](/ua/blog/protein-for-women-over-40/), тут той самий принцип, лише у вужчому вікні."
        },
        {
          "t": "p",
          "text": "Вуглеводи тут не ворог; важать кількість і тип. Для заняття до години в помірному темпі більшості жінок не потрібні додаткові вуглеводи понад те, що вже з'їдено за день. Для довшого або справді важкого додайте помірну порцію повільніших вуглеводів — вівсянку, шматок справжнього житнього хліба, невеликий батат — разом із білком, а не окремо. Швидкі вуглеводи самі по собі варто залишити для тих тренувань, які цього справді потребують, а якщо ви не впевнені, де що стоїть, [таблиця вуглеводів і ГІ](/carb-gi-table-ua/) — найшвидший спосіб перевірити."
        },
        {
          "t": "p",
          "text": "Практична деталь про час: що ближче до заняття, то меншою має бути порція. За півтори години — їжте нормально. За двадцять хвилин — або щось зовсім невелике, або тренуйтеся на тому, що вже є."
        },
        {
          "t": "h",
          "text": "Якщо у вас діабет 1 типу, це інша задача"
        },
        {
          "t": "p",
          "text": "При першому типі головна змінна — не їжа, а те, скільки інсуліну ще активно на момент старту. Та сама вівсянка за три години до заняття і за сорок хвилин до нього — це фактично два різні прийоми їжі, бо в одному випадку значна частина болюсу вже відпрацювала, а в іншому — ні."
        },
        {
          "t": "p",
          "text": "Тип заняття важить не менше. У дослідженні в [Diabetes Care](https://diabetesjournals.org/care/article/36/3/537/38023/Resistance-Versus-Aerobic-ExerciseAcute-effects-on) дванадцять фізично активних дорослих із діабетом 1 типу в різні дні виконували 45 хвилин силового тренування, 45 хвилин аеробного або не тренувалися взагалі: під час силового глюкоза падала значно менше, але залишалася нижчою довше після нього. [Консенсусна заява 2017 року про фізичну активність при діабеті 1 типу](https://www.thelancet.com/article/S2213-8587(17)30014-1/abstract) у The Lancet Diabetes & Endocrinology робить те саме розрізнення: аеробне навантаження зазвичай знижує глюкозу, а анаеробне й високоінтенсивне може тимчасово її підіймати. Тож спокійна пробіжка і важке силове потребують різної їжі навколо себе, і те, скільки ви їсте перед бігом, не підказує, що вам потрібно перед вагами."
        },
        {
          "t": "p",
          "text": "Формули я вам тут не дам, і до будь-кого, хто пропонує таку формулу в інтернеті, варто ставитися з підозрою. Працює пошук власної закономірності: візьміть заняття, яке робите регулярно, кілька тижнів тримайте однаковими час і їжу — і дивіться, що показує ваш CGM під час, одразу після і вночі. Мої тренування о 7-й ранку і о 6-й вечора поводяться зовсім по-різному, і я знаю це лише тому, що подивилася. Поки власних даних ще немає, [калькулятор впливу тренувань на цукор](/ua/resources/exercise-calculator/) допоможе зорієнтуватися, куди саме певний тип заняття, найімовірніше, зрушить вас, а [мій текст про патерни глюкози](/ua/blog/reading-glucose-patterns/) дає структуру, щоб читати графіки потім."
        },
        {
          "t": "p",
          "text": "Усе, що стосується інсуліну навколо тренувань — час, зменшення, що робити з гіпоглікемією перед стартом — це розмова з вашою діабетичною командою, а не те, що вираховують зі статті. Зокрема й з моєї."
        },
        {
          "t": "h",
          "text": "Після тренування"
        },
        {
          "t": "p",
          "text": "Про години після заняття варто знати дві речі. Перша: м'язи ще довго охочіше забирають глюкозу — Diabetes UK радить бути уважними до цього до 24 годин. Якщо ви на інсуліні, саме в цьому вікні з'являється несподівана гіпоглікемія, і часто вона нічна, а не одразу після тренування."
        },
        {
          "t": "p",
          "text": "Друга: показник одразу після важкого заняття може виглядати «неправильним». Закінчити важке силове або інтервальне тренування з вищим цукром, ніж на старті, — це нормальна фізіологія: адреналін і глюкоза, яку вивільняє печінка, а не ваша помилка. Зазвичай усе вирівнюється. Важливо знати про це заздалегідь, щоб не реагувати надміру."
        },
        {
          "t": "p",
          "text": "Щодо їжі, після тренування пріоритет — білок для відновлення: 25–40 г у наступному прийомі їжі, що для більшості жінок означає свідомо це спланувати, а не сподіватися, що вийде само. Точне «білкове вікно» важить менше, ніж прийнято думати: рандомізоване дослідження за участю жінок у постменопаузі показало, що [загальна денна кількість білка, розподілена між прийомами їжі](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4042233/), важливіша для м'язів, ніж точний час навколо тренування. Якщо ви працюєте з інсулінорезистентністю, години після заняття — це ще й момент дня, коли м'язи найкраще сприймають вуглеводи, тож саме в цей прийом їжі варто покласти картоплю чи рис, якщо ви їх узагалі їсте."
        },
        {
          "t": "h",
          "text": "Тренування натщесерце: чесний висновок для жінок після 40"
        },
        {
          "t": "p",
          "text": "Тренування натщесерце зараз у моді, і спостереження в основі справжнє: під час заняття на порожній шлунок ви справді окиснюєте більшу частку жиру. [Метааналіз у British Journal of Nutrition](https://www.cambridge.org/core/journals/british-journal-of-nutrition/article/effects-of-aerobic-exercise-performed-in-fasted-v-fed-state-on-fat-and-carbohydrate-metabolism-in-adults-a-systematic-review-and-metaanalysis/0EA2328A0FF91703C95FD39A38716811), що охопив 27 досліджень, це підтвердив."
        },
        {
          "t": "p",
          "text": "Не випливає з цього обіцянка, яку до нього додають. Більше жиру, спаленого протягом години, надійно не перетворюється ні на більше жиру за добу, ні на більшу втрату жиру за місяці — організм компенсує це в решту 23 години, і дослідження, які дивилися на склад тіла, а не на паливо під час заняття, суттєвої переваги не знайшли. Тренування натщесерце — це вподобання, а не стратегія схуднення."
        },
        {
          "t": "p",
          "text": "І декому воно не підходить. Якщо ви приймаєте інсулін або препарати сульфонілсечовини, тренування на порожній шлунок забирає запас міцності саме в тому напрямку, де він найпотрібніший. Якщо ваша глюкоза й так нестабільна, це додає ще одну змінну до того, що ви намагаєтеся зробити передбачуваним. А якщо вам і так важко добирати норму білка — а це більшість жінок після 40 — пропущений прийом їжі перед тренуванням зазвичай означає пропущений білок, який ви потім не надолужите."
        },
        {
          "t": "p",
          "text": "Де це справді нормально: коротке легке ранкове заняття — прогулянка, мобільність, спокійний велосипед — для людини без цукрознижувальних препаратів, якій просто не хочеться їсти так рано. Це розумний вибір. А от 90 хвилин натщесерце тому, що застосунок пообіцяв більше спаленого жиру, — ні."
        },
        {
          "t": "h",
          "text": "Як це виглядає у звичайний вівторок"
        },
        {
          "t": "p",
          "text": "Чотири реалістичні комбінації. Для діабету 1 типу сприймайте це виключно як принципи харчування — інсулінова частина за вашою командою."
        },
        {
          "t": "table",
          "head": [
            "Заняття",
            "До",
            "Після"
          ],
          "rows": [
            [
              "7:00 — 30 хвилин ходьби або легкого велосипеда",
              "Більшості нічого не потрібно, або невеликий білковий перекус, якщо прокидаєтеся голодною",
              "Звичайний сніданок із 25–30 г білка: яйця або грецький йогурт із ягодами й насінням"
            ],
            [
              "45 хвилин силового після роботи",
              "Пізній обід або полуденок із акцентом на білок — сир, коктейль, варене яйце й жменя горіхів",
              "Вечеря навколо 30–40 г білка: риба, курка, тофу, овочі й помірна порція повільніших вуглеводів"
            ],
            [
              "60 хвилин бігу або важке групове заняття",
              "Білок за 90 хвилин плюс помірна порція повільніших вуглеводів — вівсянка з йогуртом або житній тост із яйцями",
              "Білок протягом години-двох, і вуглеводи саме тут, якщо ви їх їсте — цей прийом їжі переносить їх найкраще"
            ],
            [
              "Вечірня йога або мобільність",
              "Спеціального харчування не потрібно — їжте як зазвичай",
              "Нічого додаткового; просто перевірте, що денна норма білка набрана"
            ]
          ]
        },
        {
          "t": "p",
          "text": "Якщо хочете побачити, як конкретна комбінація подіє саме на вас, [калькулятор їжі](/ua/resources/food-calculator/) оцінює глікемічне навантаження і розподіл макронутрієнтів для будь-якої страви. А на прийом їжі після тренування я найчастіше готую [овочевий кіш без борошна](/ua/recipes/vegetable-quiche-no-flour/) — багато білка, низький ГІ, і він смачний наступного дня."
        },
        {
          "t": "h",
          "text": "Де закінчується ця стаття і починається ваш лікар"
        },
        {
          "t": "p",
          "text": "Усе тут — про їжу: що покласти в тарілку, приблизно скільки і приблизно коли. Нічого тут не про ліки. Якщо ви приймаєте інсулін, препарати сульфонілсечовини чи будь-що інше, що знижує глюкозу, фізичне навантаження змінює їхню дію, і корекції — це справа команди, яка їх призначає. Візьміть цю статтю на прийом, якщо вона допоможе, — але сходіть на прийом."
        },
        {
          "t": "links",
          "title": "Читати далі",
          "items": [
            {
              "name": "Білок для жінок після 40: скільки насправді потрібно?",
              "url": "/ua/blog/protein-for-women-over-40/",
              "desc": "Звідки взялися цифри в цій статті і як їх добирати, не живучи на курячих грудках."
            },
            {
              "name": "Як читати свої патерни глюкози",
              "url": "/ua/blog/reading-glucose-patterns/",
              "desc": "Структура, щоб зрозуміти, що ваші тренування роблять саме з вами, а не вгадувати."
            },
            {
              "name": "Перименопауза і цукор у крові",
              "url": "/ua/blog/perimenopause-diabetes-blood-sugar/",
              "desc": "Чому в середньому віці глюкозу стає важче контролювати, навіть коли більше нічого не змінилося."
            },
            {
              "name": "Метаболічний калькулятор їжі",
              "url": "/ua/resources/food-calculator/",
              "desc": "Введіть страву й побачте ймовірне глікемічне навантаження, вуглеводи та білок ще до того, як з'їсте."
            },
            {
              "name": "Калькулятор впливу тренувань на цукор",
              "url": "/ua/resources/exercise-calculator/",
              "desc": "Оцінює, як прогулянка, пробіжка чи силове заняття, найімовірніше, зрушать вашу глюкозу — корисно, поки немає власних спостережень."
            }
          ]
        },
        {
          "t": "h",
          "text": "Надійні джерела, які варто знати"
        },
        {
          "t": "links",
          "title": "Куди заглибитися",
          "items": [
            {
              "name": "Diabetes UK — Чи знижує фізична активність цукор у крові?",
              "url": "https://www.diabetes.org.uk/living-with-diabetes/exercise/blood-sugar-levels",
              "desc": "Найзрозуміліше пояснення, чому різні види активності рухають глюкозу в різні боки і як довго."
            },
            {
              "name": "American Diabetes Association — Харчування до і після тренування",
              "url": "https://diabetes.org/health-wellness/fitness/eating-tips-before-after-exercise",
              "desc": "Практичні поради щодо їжі навколо тренувань, зокрема що змінюється, якщо ви на інсуліні."
            },
            {
              "name": "Консенсус щодо фізичної активності при діабеті 1 типу",
              "url": "https://www.thelancet.com/article/S2213-8587(17)30014-1/abstract",
              "desc": "Документ, на який, найімовірніше, спирається ваша діабетична команда. Технічний, але варто знати, що він існує."
            }
          ]
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Білок перед їжею знижує подальший підйом глюкози — пік приблизно на 1,4 ммоль/л нижчий, ніж із водою.",
              "detail": "Систематичний огляд і метааналіз 2023 року в American Journal of Clinical Nutrition об'єднав 16 рандомізованих перехресних досліджень за участю 244 дорослих із діабетом 2 типу і без нього, які порівнювали сироватковий білок перед їжею з водою. Піковий постпрандіальний рівень глюкози був приблизно на 1,4 ммоль/л нижчим, а площа під кривою глюкози — суттєво меншою. Серед ймовірних механізмів — повільніше спорожнення шлунка та стимуляція GLP-1, GIP та секреції інсуліну. У дослідженнях використовували саме сироватковий білок, тож ефект від змішаного білкового прийому їжі, найімовірніше, буде іншим; це також гострі вимірювання, а не довгострокові наслідки.",
              "cite": "American Journal of Clinical Nutrition · Систематичний огляд і метааналіз, 2023",
              "url": "https://ajcn.nutrition.org/article/S0002-9165(23)48905-8/fulltext"
            },
            {
              "claim": "Силове тренування знижує глюкозу менше під час заняття, але тримає її нижчою довше після нього, ніж аеробне.",
              "detail": "Дванадцять фізично активних дорослих із діабетом 1 типу (середній HbA1c 7,1%) у різні дні виконували 45 хвилин силового тренування, 45 хвилин бігу на рівні 60% VO2max або не тренувалися. Під час силового глюкоза падала значно менше, але зниження після заняття тривало довше. Вибірка мала й складалася з уже активних дорослих, тож це радше ілюстрація різниці між аеробним і силовим навантаженням, ніж цифра для планування.",
              "cite": "Diabetes Care · Рандомізоване перехресне дослідження, 2013",
              "url": "https://diabetesjournals.org/care/article/36/3/537/38023/Resistance-Versus-Aerobic-ExerciseAcute-effects-on"
            },
            {
              "claim": "Аеробне навантаження зазвичай знижує глюкозу; анаеробне й високоінтенсивне може тимчасово її підіймати.",
              "detail": "Консенсусна заява 2017 року про ведення фізичної активності при діабеті 1 типу, опублікована в The Lancet Diabetes & Endocrinology (Riddell, Gallen, Smart та колеги), описує принципи харчування та керування інсуліном для різних видів активності. Вона написана і для клініцистів, і для людей з діабетом 1 типу й є джерелом розрізнення аеробного та анаеробного навантаження в цій статті. Її рекомендації щодо інсуліну тут свідомо не переказано — це частина, яка належить вашій діабетичній команді.",
              "cite": "The Lancet Diabetes & Endocrinology · Консенсусна заява, 2017",
              "url": "https://www.thelancet.com/article/S2213-8587(17)30014-1/abstract"
            },
            {
              "claim": "Натщесерце під час заняття спалюється більше жиру — але це не означає більшої втрати жиру загалом.",
              "detail": "Систематичний огляд і метааналіз у British Journal of Nutrition, що охопив 27 досліджень за участю 273 людей, показав істотно вище окиснення жиру під час аеробного навантаження натщесерце порівняно з тренуванням після їжі, а також нижчі рівні глюкози й інсуліну. Автори зазначають, що більше окиснення жиру під час заняття не обов'язково дає більше окиснення жиру за добу чи більшу втрату жиру в довгій перспективі порівняно з тим самим тренуванням після їжі. Більшість включених досліджень проводили на чоловіках або змішаних вибірках, і жодне не стосувалося саме жінок після 40 чи людей із діабетом.",
              "cite": "British Journal of Nutrition · Систематичний огляд і метааналіз",
              "url": "https://www.cambridge.org/core/journals/british-journal-of-nutrition/article/effects-of-aerobic-exercise-performed-in-fasted-v-fed-state-on-fat-and-carbohydrate-metabolism-in-adults-a-systematic-review-and-metaanalysis/0EA2328A0FF91703C95FD39A38716811"
            },
            {
              "claim": "Загальна денна кількість білка, розподілена між прийомами їжі, важить для м'язів більше, ніж точний час навколо тренування.",
              "detail": "Рандомізоване контрольоване дослідження за участю жінок у постменопаузі на програмі зниження ваги показало: попри окремі тенденції щодо часу після тренування, найважливішою змінною для швидкості синтезу м'язового білка була загальна денна кількість білка, розподілена між прийомами їжі. Саме тому прийом їжі після тренування в цій статті описано як «протягом години-двох», а не як жорстке вікно.",
              "cite": "PMC · Рандомізоване контрольоване дослідження",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4042233/"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Лена Філатова",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Лена Філатова, авторка про жіноче здоров'я, живе з діабетом 1 типу",
          "text": "Лена Філатова живе з діабетом 1 типу 23 роки. Вона пише про жіноче здоров'я, перименопаузу, харчування та життя з діабетом на lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Чи потрібно їсти перед ранковим тренуванням при предіабеті або інсулінорезистентності?",
          "a": "Для короткого легкого заняття — прогулянки, спокійного велосипеда, мобільності — зазвичай ні. Для довшого або важчого білковий перекус за 60–90 хвилин зазвичай відчувається краще, ніж тренування зовсім натщесерце, і краще, ніж швидкі вуглеводи, після яких буває підйом, а потім провал посеред заняття."
        },
        {
          "q": "Чому цукор вищий після силового тренування?",
          "a": "Це нормальна фізіологія, а не помилка. Короткі потужні зусилля запускають викид адреналіну й глюкози з печінки, тож під час і одразу після важкого силового чи високоінтенсивних інтервалів цукор може підійматися — хоча те саме заняття потім знижує його на багато годин. Головне — знати про це заздалегідь; якщо це повторюється й турбує вас, обговоріть із діабетичною командою."
        },
        {
          "q": "Чи можна тренуватися натщесерце на інсуліні?",
          "a": "Це питання до вашої діабетичної команди, а не до статті. Тренування на порожній шлунок забирає запас міцності саме в бік гіпоглікемії, а правильний підхід залежить від вашого інсуліну, схеми й типу заняття. Аргумент про спалювання жиру натщесерце слабший, ніж його зазвичай подають, тож урівноважити цей ризик майже нічим."
        },
        {
          "q": "Чи потрібен протеїновий коктейль одразу після тренування?",
          "a": "Ні — але білок потрібен. Орієнтуйтеся на 25–40 г у прийомі їжі після заняття: з їжі, якщо це реально, і з коктейлю, якщо ні. Дані свідчать, що загальна денна кількість білка, рівномірно розподілена між прийомами їжі, важить більше, ніж вузьке вікно після тренування."
        }
      ]
    }
  },
  {
    "slug": "strength-training-perimenopause-beginners",
    "date": "2026-08-14",
    "image": "/images/strength-training-perimenopause-beginners.jpg",
    "cats": [
      "fitness",
      "perimenopause"
    ],
    "en": {
      "cat": "Fitness 40+",
      "title": "Starting strength training in perimenopause when you've never lifted before",
      "excerpt": "You've been told you should be lifting. Here's the part nobody gives you: which movements, how heavy, how often — and what actually changes at six weeks versus six months.",
      "meta": "14 August 2026 · 9 min read",
      "lead": "You have probably read a dozen times that you should be lifting weights. Almost none of that advice tells you what to actually do on Monday morning — how heavy, how often, or whether it is too late to start. This is the specific version I wish someone had handed me.",
      "seoTitle": "Strength Training for Perimenopause: How to Start",
      "metaDesc": "What actually protects muscle and bone in perimenopause — how heavy, how often, and a realistic timeline for results after 40.",
      "blocks": [
        {
          "t": "p",
          "text": "Please speak to your doctor before starting a new training programme — particularly if you have diagnosed osteoporosis, a recent injury, a heart condition, or diabetes complications such as retinopathy, which changes the guidance on heavy lifting."
        },
        {
          "t": "p",
          "text": "I came to strength training late, and reluctantly. For most of my adult life I did cardio — walking, cycling, the occasional badly-judged run — partly because it felt safer with type 1 diabetes, and partly because I had quietly decided that weights were for other people. Then I reached my forties and the same routine stopped producing the same body."
        },
        {
          "t": "p",
          "text": "What eventually moved me wasn't how I looked. It was reading, over and over, that muscle is the thing that protects you in the second half of life — your bones, your blood sugar, your ability to get up off the floor at seventy-five — and realising that nobody was going to hand me the muscle I had never built."
        },
        {
          "t": "p",
          "text": "The problem is that once you're convinced, the advice runs out. \"Lift weights\" is the entire message. So here is what comes after it: what falling oestrogen does to muscle and bone, why gentle toning classes don't do the job, the handful of movements that cover almost everything, and how long it honestly takes before anything happens."
        },
        {
          "t": "h",
          "text": "What falling oestrogen does to muscle and bone"
        },
        {
          "t": "p",
          "text": "Oestrogen is not just a reproductive hormone. It is quietly involved in how your muscles respond to food and training, and in how fast your skeleton turns itself over. When it falls, both of those change at once — which is why the perimenopausal years feel like more than the sum of getting a bit older. It sits alongside the other changes of this stage — [fat quietly redistributing towards the middle](/blog/cortisol-belly-perimenopause/), and [a set of weight beliefs that don't survive contact with the evidence](/blog/perimenopause-weight-myths/) — but muscle and bone are the two that respond most directly to what you do with a barbell."
        },
        {
          "t": "p",
          "text": "On the muscle side, the phenomenon is called anabolic resistance. [A review in Current Opinion in Clinical Nutrition and Metabolic Care](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4997405/) described it clearly: the same dose of protein produces a smaller muscle-building response than it used to. You are not imagining that eating and training the way you did at thirty no longer works. It genuinely doesn't. Muscle mass declines gradually from around thirty, and the rate of loss steepens across the menopause transition."
        },
        {
          "t": "p",
          "text": "On the bone side, oestrogen acts as a brake on the cells that break bone down. Take the brake off and resorption outpaces formation. The fastest losses cluster in the year before the final period and the two or three years after it — which is precisely the window in which most women are told nothing at all about their skeleton."
        },
        {
          "t": "p",
          "text": "The word that matters in both cases is *accelerates*. This is not a cliff you fall off at fifty. It is a slope that gets steeper for a few years and then settles — and what you do during those years determines how much you're carrying into your sixties. Which is the genuinely hopeful part of this article: the timing is inconvenient, but it is also actionable."
        },
        {
          "t": "h",
          "text": "Why \"light weights, high reps\" isn't enough"
        },
        {
          "t": "p",
          "text": "This is where most midlife fitness advice quietly fails women. The default recommendation — small dumbbells, lots of repetitions, keep it gentle — is comfortable, popular, and not sufficient to protect bone. Bone responds to the *magnitude* of the strain it experiences, not to how many times you repeat a light one. Below a certain threshold, your skeleton reads the signal as ordinary daily loading and does nothing in response."
        },
        {
          "t": "p",
          "text": "The cleanest demonstration of this is the [LIFTMOR trial](https://onlinelibrary.wiley.com/doi/full/10.1002/jbmr.3284), published in the Journal of Bone and Mineral Research in 2018. Postmenopausal women with low bone mass — average age in their mid-sixties — did just two supervised 30-minute sessions a week for eight months: five sets of five repetitions of deadlift, squat and overhead press, at over 85% of their one-rep maximum, plus a jumping movement. They gained bone density at the lumbar spine and femoral neck, and improved on every functional test. The comparison group, doing a gentle low-intensity home programme, did not."
        },
        {
          "t": "p",
          "text": "Two honest caveats. That was supervised training, taught properly and built up gradually — not walking into a gym and loading a barbell in week one. And it was a trial in women who were screened as suitable for it. But the direction of travel is not ambiguous: the stimulus has to be genuinely hard before your skeleton bothers to respond."
        },
        {
          "t": "p",
          "text": "I find that liberating rather than intimidating, because of what \"hard\" turns out to mean in practice. Not two hours. Not six days a week. Roughly thirty minutes, twice a week, of a small number of movements done with real effort."
        },
        {
          "t": "h",
          "text": "The movements that cover almost everything"
        },
        {
          "t": "p",
          "text": "Don't think in exercises — think in patterns. There are four, and between them they load nearly every joint and muscle group you need to protect. Everything else is decoration."
        },
        {
          "t": "table",
          "head": [
            "Pattern",
            "What it protects",
            "Where a beginner starts",
            "Where it goes"
          ],
          "rows": [
            [
              "Squat",
              "Quads, glutes, hips, and the spine — loaded straight down through the skeleton",
              "Sit-to-stand from a chair, bodyweight only",
              "Goblet squat → barbell back squat"
            ],
            [
              "Hinge",
              "Glutes, hamstrings and the whole back chain — the strongest pattern your body owns",
              "Hip hinge facing a wall, then Romanian deadlift with light dumbbells",
              "Trap-bar or conventional deadlift"
            ],
            [
              "Push",
              "Chest, shoulders, triceps; pressing overhead loads the upper spine and wrists",
              "Press-up with hands raised on a bench",
              "Dumbbell or barbell overhead press"
            ],
            [
              "Pull",
              "Upper back, lats and rear shoulders — the muscles that hold your posture up",
              "Seated row machine, or single-arm dumbbell row",
              "Heavier rows, chin-up progressions"
            ]
          ]
        },
        {
          "t": "p",
          "text": "The squat and the hinge are the two that matter most, and they are the two women most often skip. Both load the hip and the spine — the sites where fractures actually cost people their independence. A hinge in particular (the deadlift family) is the single most useful thing you can learn, because it is also how you pick your grandchild up off the floor without hurting yourself."
        },
        {
          "t": "p",
          "text": "The push and the pull are the upper-body pair, and if you only have appetite for one, make it the pull. Almost everything in modern life — desks, phones, steering wheels, carrying shopping in front of you — drags your shoulders forward. Rows are the only thing most of us do that pulls them back."
        },
        {
          "t": "p",
          "text": "That is the whole programme. Two sessions, both covering a squat, a hinge, a push and a pull. You will be tempted to add things, because the internet is full of them. Don't — not for the first three months. A short programme you actually complete twice a week beats an elaborate one you abandon in October."
        },
        {
          "t": "h",
          "text": "How often, how heavy, and how to progress"
        },
        {
          "t": "p",
          "text": "Twice a week is the floor, and it is also where most of the return lives. The [UK Chief Medical Officers' physical activity guidelines](https://www.gov.uk/government/publications/physical-activity-guidelines-uk-chief-medical-officers-report) recommend muscle-strengthening activity on at least two days a week for exactly this reason, and the LIFTMOR women got their results on two. A third session is a bonus if life allows it, not a requirement — and it is worth nothing next to the two you do consistently."
        },
        {
          "t": "p",
          "text": "\"Heavy\" is the part nobody defines, so here is a usable rule. Choose a weight where the last two repetitions of a set are genuinely difficult while your technique still looks the same as the first rep. If you finish a set feeling you could have done another five, it is too light — and that is where the majority of women stay for years."
        },
        {
          "t": "p",
          "text": "For the first month, work in three sets of eight to ten repetitions. You are learning the movements, and lighter sets give you the practice to learn them. After that, as the weights climb, shift towards four or five sets of five — fewer repetitions with more load is where the bone stimulus lives."
        },
        {
          "t": "quote",
          "text": "Progression is not a detail of the programme. Progression is the programme."
        },
        {
          "t": "p",
          "text": "The mechanism is simple and almost everyone ignores it: when you complete all your sets at the top of the rep range with clean form, add a small amount of weight next time. One to 2.5 kg on upper-body movements, 2.5 to 5 kg on lower-body ones. It sounds trivially small. Do it consistently for a year and it is not remotely trivial — and a body that is being asked for slightly more each month is a body that has a reason to keep adapting."
        },
        {
          "t": "p",
          "text": "One thing genuinely worth paying for: two or three sessions with a coach at the start, purely to have someone watch you hinge and squat. It is far cheaper than the physio appointments that follow six months of pulling with a rounded back."
        },
        {
          "t": "h",
          "text": "What to eat around it"
        },
        {
          "t": "p",
          "text": "Training is the signal; food is the material. Sending the signal without supplying the material is how women end up training hard for months and seeing very little. Protein is the first thing to fix — most women over 40 need considerably more than the official 0.8 g/kg, and I've written about [the targets that actually apply after 40](/blog/protein-for-women-over-40/) and about [what higher protein does for bone and muscle after menopause](/blog/higher-protein-postmenopausal-bone-muscle/) separately. As a working figure: 1.2–1.6 g per kg of body weight a day as a baseline, towards 1.6–2.0 g/kg if you are lifting regularly, spread across meals rather than piled into dinner."
        },
        {
          "t": "p",
          "text": "For bone specifically, you also need the raw materials. UK guidance puts adult calcium needs at around 700 mg a day, and recommends a daily 10 microgram vitamin D supplement through the autumn and winter for everyone — vitamin D is what lets you absorb the calcium in the first place. Loading a skeleton that has nothing to build with is not a good use of your Tuesday evening."
        },
        {
          "t": "p",
          "text": "And eat something before you train. Repeatedly lifting fasted, on top of everything else a perimenopausal body is managing, tends to produce worse sessions and worse recovery — and if you are managing blood sugar, it removes your margin for error."
        },
        {
          "t": "h",
          "text": "Recovery is part of the programme, not a reward for it"
        },
        {
          "t": "p",
          "text": "At twenty-five you can train badly and recover anyway. At forty-five, recovery is the limiting factor — which is another argument for two hard sessions rather than five mediocre ones. Leave at least 48 hours between sessions that work the same muscle groups, and treat sleep as part of the training, not as what happens when it's finished. [Poor sleep worsens insulin resistance](/blog/sleep-insulin-resistance-women/) and blunts recovery at the same time, which is a bad combination to be training through."
        },
        {
          "t": "p",
          "text": "Soreness is not the scoreboard. Expect a genuinely uncomfortable first fortnight — that settles, quickly, and its absence later does not mean the session was wasted. But if you are still wrecked four days after a workout, you did too much too soon. Come back lighter rather than stopping altogether; the women who quit almost never quit from injury, they quit from a fortnight that felt punishing."
        },
        {
          "t": "h",
          "text": "A realistic timeline"
        },
        {
          "t": "p",
          "text": "The main reason women stop is not difficulty. It is expecting the wrong thing at the wrong time — looking for a body-composition change at week five, when week five has nothing to show yet. Here is roughly what is happening, and when."
        },
        {
          "t": "table",
          "head": [
            "Timeframe",
            "What is actually happening",
            "What you will notice"
          ],
          "rows": [
            [
              "Weeks 1–3",
              "Your nervous system is learning to recruit the muscle you already have",
              "The weights go up surprisingly fast; some soreness; nothing visible in the mirror"
            ],
            [
              "Weeks 4–6",
              "Real strength gains — still mostly neural, with muscle beginning to follow",
              "Stairs, shopping bags and getting up off the floor feel noticeably easier"
            ],
            [
              "3–4 months",
              "Meaningful muscle accrual, if protein and progression are both in place",
              "Clothes fit differently; visible change through the shoulders, back and legs"
            ],
            [
              "6–12 months",
              "Bone remodelling cycles completing at the loaded sites",
              "Clearly different body composition; bone density change may start to be measurable"
            ]
          ]
        },
        {
          "t": "p",
          "text": "Bone is slow for a structural reason: a single remodelling cycle — old bone removed, new bone laid down and mineralised — takes something like four months at one site, and your skeleton does this a site at a time. That is why LIFTMOR ran for eight months, and why bone density scans are typically repeated years rather than months apart. If you want a metric that moves faster, use the weight on the bar."
        },
        {
          "t": "p",
          "text": "It is also worth knowing that function improves before mass does. A 2026 systematic review and meta-analysis of resistance training in older women found consistent improvements in grip strength, walking speed and sit-to-stand performance — while the measured muscle mass index moved much less. Feeling stronger long before you look different isn't a failure of the programme. It is the normal order of events."
        },
        {
          "t": "h",
          "text": "If you have diabetes or insulin resistance"
        },
        {
          "t": "p",
          "text": "Muscle is the largest place your body puts glucose, so building more of it is one of the more durable things you can do for insulin sensitivity — a point I've made before about [managing blood sugar through perimenopause](/blog/perimenopause-diabetes-blood-sugar/). One practical warning, from my own experience: heavy lifting often pushes glucose *up* during and just after a session, because it is an adrenaline-driven effort, and then improves things for many hours afterwards. That is the opposite shape to a walk, and it catches people out. Don't read the immediate rise as a sign that lifting is bad for your blood sugar — watch the overnight and next-morning numbers instead. I've written about [why lifting sends glucose up, and why that isn't a failure](/blog/does-weight-training-raise-blood-sugar/) in full separately."
        },
        {
          "t": "p",
          "text": "If you have proliferative retinopathy, significant neuropathy, uncontrolled hypertension or a cardiovascular history, get specific advice before you start. Maximal straining has particular cautions with eye disease, and there are usually sensible adaptations rather than a flat no — but that conversation belongs with your team, not with an article."
        },
        {
          "t": "h",
          "text": "Where to start this week"
        },
        {
          "t": "p",
          "text": "Pick two days and put them in the diary as appointments. Do one session of each pattern — sit-to-stand, hip hinge, an elevated press-up, a row — for three sets of eight, using whatever weight lets you finish the last two repetitions with effort and good form. Write down what you did. Next week, do the same thing slightly heavier. That is genuinely the whole method; everything else in this article is context for why it works."
        },
        {
          "t": "p",
          "text": "And give it eight weeks before you judge it — not because you'll look different, but because by then it will be a thing you do rather than a thing you're trying."
        },
        {
          "t": "links",
          "title": "Where to go next",
          "items": [
            {
              "name": "NHS — Physical activity guidelines for adults",
              "url": "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/",
              "desc": "The plain-English version of the official UK guidance, including what counts as muscle-strengthening activity."
            },
            {
              "name": "Royal Osteoporosis Society — Exercise for bones",
              "url": "https://theros.org.uk/information-and-support/bone-health/exercise-for-bones/",
              "desc": "The best UK source on how much loading bone actually needs, with specific guidance if you already have osteoporosis."
            },
            {
              "name": "LIFTMOR trial — Journal of Bone and Mineral Research",
              "url": "https://onlinelibrary.wiley.com/doi/full/10.1002/jbmr.3284",
              "desc": "The full paper behind the twice-weekly heavy-lifting protocol. Worth reading the methods section if you want to see exactly what the women did."
            },
            {
              "name": "British Dietetic Association — Addressing sarcopenia",
              "url": "https://www.bda.uk.com/resource/addressing-sarcopenia.html",
              "desc": "The UK dietitians' body on protein and resistance training for age-related muscle loss."
            },
            {
              "name": "Dr Stacy Sims",
              "url": "https://www.drstacysims.com/",
              "desc": "An exercise physiologist working specifically on female physiology — the most useful single source on how training recommendations should differ for women in midlife."
            }
          ]
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Twice-weekly heavy lifting improved bone density in postmenopausal women with low bone mass — gentle exercise did not.",
              "detail": "The LIFTMOR randomised controlled trial assigned 101 postmenopausal women with low bone mass to eight months of twice-weekly, 30-minute supervised high-intensity resistance and impact training (5 sets of 5 repetitions at over 85% of one-rep maximum: deadlift, squat, overhead press, plus jumping chin-ups) or to a low-intensity home exercise programme. The training group improved bone mineral density at the lumbar spine and femoral neck and improved on functional measures including back and leg strength; the comparison group did not. Adverse events were minimal.",
              "cite": "Journal of Bone and Mineral Research · Randomised controlled trial, 2018",
              "url": "https://onlinelibrary.wiley.com/doi/full/10.1002/jbmr.3284"
            },
            {
              "claim": "Ageing muscle builds less from the same amount of protein — anabolic resistance.",
              "detail": "A review in Current Opinion in Clinical Nutrition and Metabolic Care set out the blunted muscle protein synthesis response that older adults show after eating protein. It is the physiological reason that eating and training as you did in your thirties stops producing the same result, and the reason protein targets rise rather than fall with age.",
              "cite": "Current Opinion in Clinical Nutrition and Metabolic Care · Review, 2018",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4997405/"
            },
            {
              "claim": "In older women, resistance training improves strength and physical function well before it changes measured muscle mass.",
              "detail": "A systematic review and meta-analysis of twelve randomised controlled trials in 518 older women with sarcopenia found significant improvements in handgrip strength, knee extension strength, gait speed, timed up-and-go and 30-second chair stand — but no significant change in skeletal muscle mass index. It is a useful corrective to expecting visible change first: capability improves earlier than composition.",
              "cite": "Frontiers in Public Health · Systematic review and meta-analysis, 2026",
              "url": "https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2025.1735899/full"
            },
            {
              "claim": "How you load matters, not just that you turn up.",
              "detail": "A systematic review with meta-regressions examined which resistance training variables — intensity, volume, frequency, progression — drive muscle mass outcomes in sarcopenia. Increasing muscle mass proves harder than increasing strength, and the way the programme is loaded and progressed is a large part of what separates programmes that work from programmes that don't.",
              "cite": "PMC · Systematic review with meta-regressions",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12688407/"
            },
            {
              "claim": "UK guidance recommends muscle-strengthening activity on at least two days a week.",
              "detail": "The UK Chief Medical Officers' physical activity guidelines advise adults to do activities that develop or maintain strength in the major muscle groups on at least two days a week, alongside 150 minutes of moderate-intensity activity — with the explicit note that any strengthening activity is better than none.",
              "cite": "UK Chief Medical Officers · Physical activity guidelines",
              "url": "https://www.gov.uk/government/publications/physical-activity-guidelines-uk-chief-medical-officers-report"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, women's health writer living with type 1 diabetes",
          "text": "Lena Filatova has lived with type 1 diabetes for 23 years. She writes about women's health, perimenopause, nutrition and diabetes management at lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Is it too late to start lifting at 50?",
          "a": "No. The LIFTMOR trial that produced bone density gains was run in postmenopausal women whose average age was in the mid-sixties, all with low bone mass already. Muscle and bone respond to loading at every age — the response is slower than it would have been at twenty-five, but it is still there, and the benefit is arguably larger because the alternative is continued decline."
        },
        {
          "q": "How heavy should I actually lift if I've never lifted before?",
          "a": "Start much lighter than your eventual working weight and spend the first month learning the movements — three sets of eight to ten, with the last two repetitions requiring real effort but no change in technique. Then add weight in small increments (1–2.5 kg upper body, 2.5–5 kg lower body) whenever you complete all your sets cleanly. Within a few months that steady progression will have taken you somewhere you would not have believed in week one."
        },
        {
          "q": "Will strength training make me bulky?",
          "a": "No. Building visibly large muscle requires years of very specific training, usually alongside a calorie surplus, and is considerably harder for women in midlife because oestrogen is falling rather than helping. What twice-weekly lifting realistically does is preserve and slowly rebuild the muscle you have — which generally reads as leaner and more defined, not bigger."
        },
        {
          "q": "Do I need a gym, or can I do this at home?",
          "a": "You can start at home with bodyweight and a couple of dumbbells, and for the first two or three months that is genuinely enough. The limitation arrives later: progression depends on being able to keep adding load, and at some point a set of light dumbbells stops being challenging. A gym — or a progressively heavier set of adjustable dumbbells and a barbell — is what lets the programme keep working."
        },
        {
          "q": "How long before I see a change in my body?",
          "a": "Expect strength to improve within four to six weeks and daily tasks to feel easier around the same time. Visible change in body composition typically takes three to four months of consistent training with adequate protein. Bone is slower still — a single remodelling cycle takes around four months, and trials measuring bone density change generally run for at least eight."
        },
        {
          "q": "I have osteoporosis. Can I still lift?",
          "a": "Very often yes, but not without guidance. The evidence for heavy loading in women with low bone mass is encouraging, and the LIFTMOR participants had osteopenia or osteoporosis — but that training was supervised and screened. Speak to your doctor first, and look at the Royal Osteoporosis Society's exercise guidance, which is specific about which movements to approach carefully (notably loaded spinal flexion) rather than telling you to avoid effort altogether."
        }
      ]
    },
    "ua": {
      "cat": "Фітнес 40+",
      "title": "Як почати силові тренування в перименопаузі, якщо ви ніколи не піднімали ваги",
      "excerpt": "Вам сто разів сказали, що треба піднімати ваги. Ось те, чого не кажуть: які саме рухи, як важко, як часто — і що насправді змінюється за шість тижнів, а що за шість місяців.",
      "meta": "14 серпня 2026 · 9 хв читання",
      "lead": "Ви, напевно, вже десяток разів читали, що вам варто піднімати ваги. Майже жодна з цих порад не каже, що конкретно робити в понеділок уранці — яка вага, як часто і чи не пізно вже починати. Це та конкретна версія, якої мені самій бракувало.",
      "seoTitle": "Силові тренування в перименопаузі: з чого почати",
      "metaDesc": "Що справді захищає м'язи та кістки в перименопаузі — яка вага, як часто і реалістичні строки результатів після 40.",
      "blocks": [
        {
          "t": "p",
          "text": "Будь ласка, порадьтеся з лікарем, перш ніж починати нову програму тренувань — особливо якщо у вас діагностований остеопороз, свіжа травма, серцеве захворювання або ускладнення діабету, як-от ретинопатія, за якої рекомендації щодо важких ваг інші."
        },
        {
          "t": "p",
          "text": "Я прийшла до силових тренувань пізно й неохоче. Більшу частину дорослого життя я робила кардіо — ходьба, велосипед, час від часу невдало обрана пробіжка — почасти тому, що з діабетом 1 типу це здавалося безпечнішим, а почасти тому, що тихо вирішила: ваги — це для інших. А потім мені виповнилося сорок, і та сама рутина перестала давати те саме тіло."
        },
        {
          "t": "p",
          "text": "Зрушило мене з місця не те, як я виглядаю. А те, що я знову й знову читала: саме м'язи захищають вас у другій половині життя — ваші кістки, ваш цукор у крові, вашу здатність підвестися з підлоги у сімдесят п'ять. І усвідомлення, що м'язи, яких я ніколи не будувала, мені ніхто не подарує."
        },
        {
          "t": "p",
          "text": "Проблема в тому, що коли ви вже переконані, поради закінчуються. «Піднімайте ваги» — і це все повідомлення. Тож ось що йде далі: що падіння естрогену робить із м'язами й кістками, чому м'які «тонусні» заняття не працюють, які кілька рухів покривають майже все — і скільки часу насправді минає, перш ніж щось відбудеться."
        },
        {
          "t": "h",
          "text": "Що падіння естрогену робить із м'язами й кістками"
        },
        {
          "t": "p",
          "text": "Естроген — не лише репродуктивний гормон. Він непомітно бере участь у тому, як ваші м'язи реагують на їжу й тренування, і в тому, як швидко оновлюється ваш скелет. Коли він падає, змінюється і те, і те одночасно — саме тому роки перименопаузи відчуваються як щось більше, ніж просто «трохи постаріла». Це йде поруч з іншими змінами цього періоду — [жир тихо перерозподіляється до середини тіла](/ua/blog/cortisol-belly-perimenopause/), а [низка переконань про вагу не витримує зустрічі з доказами](/ua/blog/perimenopause-weight-myths/) — але саме м'язи й кістки найпряміше реагують на те, що ви робите зі штангою."
        },
        {
          "t": "p",
          "text": "З боку м'язів це явище називають анаболічною резистентністю. [Огляд у Current Opinion in Clinical Nutrition and Metabolic Care](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4997405/) описав його чітко: та сама доза білка дає менший приріст м'язового синтезу, ніж раніше. Вам не здається, що харчуватися й тренуватися так, як у тридцять, більше не працює. Справді не працює. М'язова маса поступово зменшується приблизно з тридцяти, а темп втрати різко зростає під час менопаузального переходу."
        },
        {
          "t": "p",
          "text": "З боку кісток естроген працює як гальмо для клітин, що руйнують кісткову тканину. Приберіть гальмо — і руйнування починає випереджати відновлення. Найшвидші втрати припадають на рік до останньої менструації і два-три роки після неї — тобто саме на те вікно, коли більшості жінок про їхній скелет не кажуть узагалі нічого."
        },
        {
          "t": "p",
          "text": "Ключове слово в обох випадках — *прискорюється*. Це не обрив, з якого ви падаєте у п'ятдесят. Це схил, що на кілька років стає крутішим, а потім вирівнюється — і те, що ви робите в ці роки, визначає, з чим ви ввійдете у шістдесят. І це справді обнадійлива частина: час незручний, але на нього можна вплинути."
        },
        {
          "t": "h",
          "text": "Чому «легкі ваги й багато повторень» недостатньо"
        },
        {
          "t": "p",
          "text": "Саме тут більшість порад для жінок середнього віку тихо провалюється. Стандартна рекомендація — маленькі гантелі, багато повторень, м'яко й обережно — комфортна, популярна й недостатня, щоб захистити кістку. Кістка реагує на *величину* навантаження, а не на кількість повторень із легкою вагою. Нижче певного порогу скелет читає сигнал як звичайне побутове навантаження і не робить нічого."
        },
        {
          "t": "p",
          "text": "Найчистіша демонстрація цього — [дослідження LIFTMOR](https://onlinelibrary.wiley.com/doi/full/10.1002/jbmr.3284), опубліковане в Journal of Bone and Mineral Research 2018 року. Жінки в постменопаузі зі зниженою щільністю кісток — у середньому близько шістдесяти п'яти років — робили лише два наглядові 30-хвилинні тренування на тиждень протягом восьми місяців: п'ять підходів по п'ять повторень станової тяги, присідання й жиму над головою з вагою понад 85% від одноповторного максимуму, плюс стрибковий рух. Вони наростили щільність кістки в поперековому відділі хребта й шийці стегна та покращили всі функціональні показники. Група порівняння, яка робила м'яку домашню програму низької інтенсивності, — ні."
        },
        {
          "t": "p",
          "text": "Два чесних застереження. Це були наглядові тренування, з правильно поставленою технікою й поступовим нарощуванням — а не «прийшла в зал і навантажила штангу першого тижня». І це було дослідження на жінках, яких попередньо перевірили на придатність. Але напрямок однозначний: стимул має бути справді важким, перш ніж скелет візьме на себе клопіт відреагувати."
        },
        {
          "t": "p",
          "text": "Мене це радше звільняє, ніж лякає — через те, що «важко» означає на практиці. Не дві години. Не шість днів на тиждень. Приблизно тридцять хвилин двічі на тиждень, невелика кількість рухів, зроблених із реальним зусиллям."
        },
        {
          "t": "h",
          "text": "Рухи, які покривають майже все"
        },
        {
          "t": "p",
          "text": "Думайте не про вправи, а про патерни руху. Їх чотири, і разом вони навантажують майже всі суглоби й м'язові групи, які треба захистити. Усе решта — декор."
        },
        {
          "t": "table",
          "head": [
            "Патерн",
            "Що захищає",
            "З чого починає новачок",
            "Куди це росте"
          ],
          "rows": [
            [
              "Присідання",
              "Квадрицепси, сідниці, стегна й хребет — навантаження йде вертикально крізь скелет",
              "Встати зі стільця і сісти назад, лише вага тіла",
              "Гоблет-присід → присід зі штангою"
            ],
            [
              "Нахил (шарнір)",
              "Сідниці, задня поверхня стегна й уся задня ланка — найсильніший патерн вашого тіла",
              "Нахил стегнами до стіни, далі румунська тяга з легкими гантелями",
              "Тяга з трап-грифом або класична станова"
            ],
            [
              "Жим",
              "Груди, плечі, трицепси; жим над головою навантажує верх хребта й зап'ястя",
              "Віджимання з руками на лаві",
              "Жим гантелей або штанги над головою"
            ],
            [
              "Тяга до себе",
              "Верх спини, найширші, задні дельти — м'язи, що тримають поставу",
              "Тяга в тренажері сидячи або тяга гантелі однією рукою",
              "Важчі тяги, прогресії до підтягувань"
            ]
          ]
        },
        {
          "t": "p",
          "text": "Присідання й нахил — найважливіші два, і саме їх жінки пропускають найчастіше. Обидва навантажують стегно й хребет — місця, переломи яких реально коштують людям незалежності. Нахил (сімейство станових тяг) — узагалі найкорисніше, що можна опанувати, бо це ще й те, як ви піднімаєте онука з підлоги, не травмувавши себе."
        },
        {
          "t": "p",
          "text": "Жим і тяга — це верхня пара, і якщо сил вистачає лише на одне, обирайте тягу. Майже все в сучасному житті — столи, телефони, кермо, сумки перед собою — тягне плечі вперед. Тяги — єдине, що більшість із нас робить, аби повернути їх назад."
        },
        {
          "t": "p",
          "text": "Це вся програма. Два тренування, у кожному присідання, нахил, жим і тяга. Вам захочеться щось додати, бо інтернет ними переповнений. Не додавайте — принаймні перші три місяці. Коротка програма, яку ви справді робите двічі на тиждень, перемагає складну, яку ви кинете в жовтні."
        },
        {
          "t": "h",
          "text": "Як часто, з якою вагою і як прогресувати"
        },
        {
          "t": "p",
          "text": "Двічі на тиждень — це мінімум, і водночас саме тут лежить більшість користі. [Рекомендації головних медичних радників Великої Британії](https://www.gov.uk/government/publications/physical-activity-guidelines-uk-chief-medical-officers-report) радять силове навантаження щонайменше два дні на тиждень саме з цієї причини, і учасниці LIFTMOR отримали свій результат на двох. Третє тренування — бонус, якщо життя дозволяє, а не вимога, і воно нічого не варте поруч із двома, які ви робите стабільно."
        },
        {
          "t": "p",
          "text": "«Важко» ніхто не визначає, тож ось робоче правило. Беріть вагу, за якої останні два повторення підходу справді важкі, але техніка виглядає так само, як на першому повторенні. Якщо після підходу ви відчуваєте, що могли б зробити ще п'ять, — вага замала. І саме там більшість жінок залишається роками."
        },
        {
          "t": "p",
          "text": "Перший місяць працюйте в трьох підходах по вісім–десять повторень. Ви вчите рухи, а легші підходи дають потрібну практику. Далі, коли ваги зростуть, переходьте до чотирьох-п'яти підходів по п'ять — менше повторень із більшою вагою, саме там живе стимул для кістки."
        },
        {
          "t": "quote",
          "text": "Прогресія — не деталь програми. Прогресія і є програма."
        },
        {
          "t": "p",
          "text": "Механізм простий, і майже всі його ігнорують: коли ви виконали всі підходи у верхній межі діапазону повторень із чистою технікою — наступного разу додайте трохи ваги. Один–2,5 кг на рухах для верху тіла, 2,5–5 кг на рухах для низу. Звучить сміховинно мало. Робіть так рік — і це вже зовсім не мало, бо тіло, у якого щомісяця просять трохи більше, має причину продовжувати адаптуватися."
        },
        {
          "t": "p",
          "text": "Одне, за що справді варто заплатити: два-три заняття з тренером на старті, суто щоб хтось подивився, як ви робите нахил і присід. Це значно дешевше, ніж візити до фізіотерапевта після пів року тяг із круглою спиною."
        },
        {
          "t": "h",
          "text": "Що їсти навколо тренувань"
        },
        {
          "t": "p",
          "text": "Тренування — це сигнал, їжа — матеріал. Надсилати сигнал без матеріалу — це і є те, як жінки тренуються місяцями й майже нічого не бачать. Перше, що треба виправити, — білок: більшості жінок після 40 потрібно значно більше за офіційні 0,8 г/кг, і про [норми, які справді працюють після 40](/ua/blog/protein-for-women-over-40/) та про [те, що дає більше білка для кісток і м'язів після менопаузи](/ua/blog/higher-protein-postmenopausal-bone-muscle/), я писала окремо. Робочий орієнтир: 1,2–1,6 г на кг ваги тіла на добу як базовий рівень і ближче до 1,6–2,0 г/кг, якщо ви регулярно тренуєтеся з вагами, розподілено між прийомами їжі, а не звалено у вечерю."
        },
        {
          "t": "p",
          "text": "Окремо для кісток потрібна сировина. Британські рекомендації дають дорослим близько 700 мг кальцію на добу й радять щоденну добавку вітаміну D 10 мкг усім протягом осені та зими — саме вітамін D дозволяє засвоїти той кальцій. Навантажувати скелет, якому немає з чого будувати, — не найкраще використання вашого вівторкового вечора."
        },
        {
          "t": "p",
          "text": "І з'їжте щось перед тренуванням. Регулярні силові натщесерце, на додачу до всього, що вже балансує тіло в перименопаузі, зазвичай дають гірші тренування й гірше відновлення — а якщо ви контролюєте цукор, це ще й забирає ваш запас міцності."
        },
        {
          "t": "h",
          "text": "Відновлення — частина програми, а не нагорода за неї"
        },
        {
          "t": "p",
          "text": "У двадцять п'ять можна тренуватися погано й усе одно відновитися. У сорок п'ять відновлення стає обмежувальним чинником — і це ще один аргумент за два важких тренування замість п'яти посередніх. Залишайте щонайменше 48 годин між тренуваннями на ті самі групи м'язів і сприймайте сон як частину тренування, а не як те, що відбувається, коли воно скінчилося. [Поганий сон погіршує інсулінорезистентність](/ua/blog/sleep-insulin-resistance-women/) і водночас гальмує відновлення — погане поєднання, щоб крізь нього тренуватися."
        },
        {
          "t": "p",
          "text": "Крепатура — не показник успіху. Перші два тижні будуть справді неприємними; це швидко минає, і її відсутність згодом не означає, що тренування було марним. Але якщо вас розбирає ще чотири дні по тому — ви взяли забагато й зарано. Поверніться з меншою вагою, а не кидайте зовсім: жінки, які припиняють, майже ніколи не припиняють через травму — вони припиняють через два тижні, що відчувалися як покарання."
        },
        {
          "t": "h",
          "text": "Реалістичні строки"
        },
        {
          "t": "p",
          "text": "Головна причина, чому жінки кидають, — не складність. А очікування не того й не тоді: пошук змін у композиції тіла на п'ятому тижні, коли п'ятому тижню просто нічого показати. Ось приблизно що відбувається і коли."
        },
        {
          "t": "table",
          "head": [
            "Період",
            "Що насправді відбувається",
            "Що ви помітите"
          ],
          "rows": [
            [
              "Тижні 1–3",
              "Нервова система вчиться залучати м'язи, які у вас уже є",
              "Ваги зростають напрочуд швидко; трохи крепатури; у дзеркалі нічого"
            ],
            [
              "Тижні 4–6",
              "Справжній приріст сили — переважно нервовий, м'язи починають наздоганяти",
              "Сходи, сумки з покупками й підйом з підлоги відчутно легшають"
            ],
            [
              "3–4 місяці",
              "Реальний приріст м'язів, якщо є і білок, і прогресія",
              "Одяг сидить інакше; видима зміна в плечах, спині й ногах"
            ],
            [
              "6–12 місяців",
              "Завершуються цикли ремоделювання кістки в навантажених місцях",
              "Явно інша композиція тіла; зміна щільності кістки може стати вимірною"
            ]
          ]
        },
        {
          "t": "p",
          "text": "Кістка повільна зі структурної причини: один цикл ремоделювання — стару кістку прибрано, нову вибудувано й мінералізовано — триває близько чотирьох місяців в одному місці, і скелет робить це послідовно, місце за місцем. Саме тому LIFTMOR тривав вісім місяців, а денситометрію зазвичай повторюють через роки, а не через місяці. Якщо вам потрібен показник, який рухається швидше, — дивіться на вагу на штанзі."
        },
        {
          "t": "p",
          "text": "Варто знати й те, що функція покращується раніше за масу. Систематичний огляд і метааналіз силових тренувань у літніх жінок 2026 року показав стабільне покращення сили хвату, швидкості ходьби й підйомів зі стільця — тоді як виміряний індекс м'язової маси змінювався значно менше. Відчувати себе сильнішою задовго до того, як почнете інакше виглядати, — це не провал програми. Це нормальний порядок подій."
        },
        {
          "t": "h",
          "text": "Якщо у вас діабет або інсулінорезистентність"
        },
        {
          "t": "p",
          "text": "М'язи — найбільше місце, куди тіло складає глюкозу, тож нарощувати їх — одна з найтриваліших за ефектом речей для чутливості до інсуліну; про це я вже писала у тексті про [контроль цукру в перименопаузі](/ua/blog/perimenopause-diabetes-blood-sugar/). Одне практичне попередження з власного досвіду: важкі силові часто піднімають глюкозу *вгору* під час і одразу після тренування, бо це зусилля на адреналіні, — а потім покращують показники на багато годин. Це протилежна форма кривої порівняно з прогулянкою, і вона багатьох збиває з пантелику. Не читайте цей миттєвий підйом як знак, що силові шкодять цукру, — дивіться на нічні й ранкові цифри. Про те, [чому силові піднімають глюкозу і чому це не провал](/ua/blog/does-weight-training-raise-blood-sugar/), я написала окремо."
        },
        {
          "t": "p",
          "text": "Якщо у вас проліферативна ретинопатія, значуща нейропатія, неконтрольована гіпертензія або серцево-судинний анамнез — отримайте конкретну пораду до старту. Максимальні натужування мають окремі застереження при захворюваннях очей, і зазвичай існують розумні адаптації, а не категоричне «ні» — але ця розмова належить вашій медичній команді, а не статті."
        },
        {
          "t": "h",
          "text": "З чого почати цього тижня"
        },
        {
          "t": "p",
          "text": "Оберіть два дні й запишіть їх у щоденник як зустрічі. Зробіть по одному руху з кожного патерну — підйом зі стільця, нахил стегнами, віджимання з опорою на лаву, тяга — три підходи по вісім, із такою вагою, щоб останні два повторення давалися із зусиллям і з доброю технікою. Запишіть, що зробили. Наступного тижня зробіть те саме, трохи важче. Це справді весь метод; усе інше в цій статті — контекст, чому він працює."
        },
        {
          "t": "p",
          "text": "І дайте собі вісім тижнів, перш ніж робити висновки — не тому, що ви виглядатимете інакше, а тому, що на той момент це стане тим, що ви робите, а не тим, що ви намагаєтеся робити."
        },
        {
          "t": "links",
          "title": "Куди рухатися далі",
          "items": [
            {
              "name": "NHS — рекомендації щодо фізичної активності для дорослих",
              "url": "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/",
              "desc": "Офіційні британські рекомендації простою мовою, зокрема що саме зараховується до силового навантаження."
            },
            {
              "name": "Royal Osteoporosis Society — вправи для кісток",
              "url": "https://theros.org.uk/information-and-support/bone-health/exercise-for-bones/",
              "desc": "Найкраще британське джерело про те, скільки навантаження насправді потрібно кістці, з окремими порадами, якщо остеопороз уже є."
            },
            {
              "name": "Дослідження LIFTMOR — Journal of Bone and Mineral Research",
              "url": "https://onlinelibrary.wiley.com/doi/full/10.1002/jbmr.3284",
              "desc": "Повний текст дослідження, на якому базується протокол двох важких тренувань на тиждень. Варто прочитати розділ методів, щоб побачити, що саме робили учасниці."
            },
            {
              "name": "British Dietetic Association — саркопенія",
              "url": "https://www.bda.uk.com/resource/addressing-sarcopenia.html",
              "desc": "Британська асоціація дієтологів про роль білка й силових тренувань у віковій втраті м'язів."
            },
            {
              "name": "Dr Stacy Sims",
              "url": "https://www.drstacysims.com/",
              "desc": "Фізіологиня фізичних навантажень, яка працює саме з жіночою фізіологією — найкорисніше окреме джерело про те, чим тренувальні рекомендації для жінок середнього віку мають відрізнятися."
            }
          ]
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Два важких тренування на тиждень підвищили щільність кісток у жінок у постменопаузі — м'які вправи ні.",
              "detail": "Рандомізоване контрольоване дослідження LIFTMOR розподілило 101 жінку в постменопаузі зі зниженою щільністю кісток на вісім місяців двох наглядових 30-хвилинних тренувань на тиждень високоінтенсивного силового й ударного навантаження (5 підходів по 5 повторень із вагою понад 85% одноповторного максимуму: станова тяга, присідання, жим над головою плюс стрибкові підтягування) або на домашню програму низької інтенсивності. Група тренувань покращила мінеральну щільність кістки в поперековому відділі хребта й шийці стегна та функціональні показники, зокрема силу спини й ніг; група порівняння — ні. Побічних явищ було мінімально.",
              "cite": "Journal of Bone and Mineral Research · Рандомізоване контрольоване дослідження, 2018",
              "url": "https://onlinelibrary.wiley.com/doi/full/10.1002/jbmr.3284"
            },
            {
              "claim": "З віком м'язи будують менше з тієї самої кількості білка — анаболічна резистентність.",
              "detail": "Огляд у Current Opinion in Clinical Nutrition and Metabolic Care описав ослаблену відповідь м'язового синтезу білка після їжі в людей старшого віку. Це фізіологічна причина, чому харчуватися й тренуватися як у тридцять перестає давати той самий результат, і чому норми білка з віком зростають, а не падають.",
              "cite": "Current Opinion in Clinical Nutrition and Metabolic Care · Огляд, 2018",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4997405/"
            },
            {
              "claim": "У жінок старшого віку силові тренування покращують силу й функцію задовго до того, як змінюється виміряна м'язова маса.",
              "detail": "Систематичний огляд і метааналіз дванадцяти рандомізованих контрольованих досліджень за участю 518 жінок старшого віку із саркопенією виявив значуще покращення сили хвату, сили розгинання коліна, швидкості ходьби, тесту «встань і йди» та 30-секундного тесту підйому зі стільця — але без значущої зміни індексу скелетної м'язової маси. Корисний коректив для тих, хто чекає передусім видимих змін: спроможність зростає раніше за композицію.",
              "cite": "Frontiers in Public Health · Систематичний огляд і метааналіз, 2026",
              "url": "https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2025.1735899/full"
            },
            {
              "claim": "Має значення, як саме ви навантажуєте, а не лише те, що ви прийшли.",
              "detail": "Систематичний огляд із метарегресіями дослідив, які параметри силових тренувань — інтенсивність, обсяг, частота, прогресія — визначають приріст м'язової маси при саркопенії. Наростити масу виявляється складніше, ніж силу, і те, як програма навантажена й прогресує, значною мірою відрізняє програми, що працюють, від тих, що ні.",
              "cite": "PMC · Систематичний огляд із метарегресіями",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12688407/"
            },
            {
              "claim": "Британські рекомендації радять силове навантаження щонайменше два дні на тиждень.",
              "detail": "Рекомендації головних медичних радників Великої Британії щодо фізичної активності радять дорослим виконувати вправи, що розвивають або підтримують силу основних м'язових груп, щонайменше два дні на тиждень — на додачу до 150 хвилин активності помірної інтенсивності, з окремим зауваженням, що будь-яке силове навантаження краще за жодне.",
              "cite": "Головні медичні радники Великої Британії · Рекомендації щодо фізичної активності",
              "url": "https://www.gov.uk/government/publications/physical-activity-guidelines-uk-chief-medical-officers-report"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Олена Філатова",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Олена Філатова, авторка про жіноче здоров'я, живе з діабетом 1 типу",
          "text": "Олена Філатова живе з діабетом 1 типу вже 23 роки. Вона пише про жіноче здоров'я, перименопаузу, харчування та контроль діабету на lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Чи не пізно починати силові у 50?",
          "a": "Ні. Дослідження LIFTMOR, яке дало приріст щільності кісток, проводили на жінках у постменопаузі середнім віком близько шістдесяти п'яти років, і всі вони вже мали знижену щільність кісток. М'язи й кістки реагують на навантаження в будь-якому віці — реакція повільніша, ніж була б у двадцять п'ять, але вона є, і користь навіть більша, бо альтернатива — подальший спад."
        },
        {
          "q": "З якою вагою починати, якщо я ніколи не тренувалася з вагами?",
          "a": "Починайте значно легше за свою майбутню робочу вагу й присвятіть перший місяць вивченню рухів — три підходи по вісім–десять повторень, де останні два потребують реального зусилля, але техніка не змінюється. Далі додавайте вагу маленькими кроками (1–2,5 кг для верху тіла, 2,5–5 кг для низу) щоразу, коли виконали всі підходи чисто. За кілька місяців ця рівна прогресія приведе вас туди, у що ви б не повірили на першому тижні."
        },
        {
          "q": "Чи стану я «масивною» від силових?",
          "a": "Ні. Щоб набрати помітно великі м'язи, потрібні роки дуже специфічних тренувань, зазвичай із надлишком калорій, і жінкам у середньому віці це значно важче, бо естроген падає, а не допомагає. Що реально дають два тренування на тиждень — це збереження й повільне відновлення м'язів, які у вас є, а це зазвичай виглядає як більш підтягнуте тіло, а не більше."
        },
        {
          "q": "Потрібен зал чи можна вдома?",
          "a": "Почати можна вдома з вагою тіла й парою гантелей, і перші два-три місяці цього справді достатньо. Обмеження приходить пізніше: прогресія залежить від можливості додавати вагу, а легкі гантелі рано чи пізно перестають бути викликом. Зал — або набірні гантелі й штанга — це те, що дозволяє програмі працювати далі."
        },
        {
          "q": "Скільки часу мине, поки я побачу зміни в тілі?",
          "a": "Сила зазвичай помітно зростає за чотири–шість тижнів, і приблизно тоді ж легшають побутові справи. Видима зміна композиції тіла зазвичай потребує трьох-чотирьох місяців стабільних тренувань із достатнім білком. Кістка ще повільніша — один цикл ремоделювання триває близько чотирьох місяців, а дослідження змін щільності кісток зазвичай тривають щонайменше вісім."
        },
        {
          "q": "У мене остеопороз. Чи можна мені піднімати ваги?",
          "a": "Дуже часто так, але не без супроводу. Дані щодо важкого навантаження в жінок зі зниженою щільністю кісток обнадійливі, і учасниці LIFTMOR мали остеопенію або остеопороз — але ті тренування були наглядовими й після відбору. Спершу порадьтеся з лікарем і подивіться рекомендації Royal Osteoporosis Society: вони конкретно вказують, до яких рухів ставитися обережно (зокрема згинання хребта під навантаженням), а не радять уникати зусиль узагалі."
        }
      ]
    }
  },
  {
    "slug": "does-weight-training-raise-blood-sugar",
    "date": "2026-08-13",
    "image": "/images/strength-training-cgm-type-1-diabetes.jpg",
    "cats": [
      "fitness",
      "diabetes"
    ],
    "en": {
      "cat": "Fitness 40+",
      "title": "Why lifting weights sends your blood sugar up — and why that’s not a failure",
      "excerpt": "Lifting pushes glucose up while a walk pulls it down. The mechanism behind the split, what the 24–48 hours afterwards do, and why it matters more after 40.",
      "meta": "13 August 2026 · 8 min read",
      "lead": "You finish a heavy set, glance at your phone, and the arrow is pointing up. Nothing you ate explains it. After 23 years with type 1 diabetes, I can tell you this is one of the most misread readings there is — and one of the least worrying.",
      "seoTitle": "Does Weight Training Raise Blood Sugar? What’s Happening",
      "metaDesc": "Lifting weights can push your glucose up while cardio pulls it down. What’s happening, why it’s normal, and what it means for women over 40.",
      "blocks": [
        {
          "t": "p",
          "text": "This article is educational and describes my own experience. It contains no insulin, carbohydrate-ratio or medication guidance — any change to how you manage exercise is a conversation with your diabetes team."
        },
        {
          "t": "p",
          "text": "For years I had two kinds of movement in my life that behaved like opposites. A steady half-hour walk would pull my glucose gently down, so reliably I could use it. A hard session in the squat rack would push it up — sometimes several mmol/l — while I was still on the gym floor, doing nothing but lifting."
        },
        {
          "t": "p",
          "text": "The first time it happened I assumed I had got something wrong. Miscounted a snack, mistimed something, misjudged the day. It took me an embarrassingly long time to find out that this is not a mistake at all. It is a predictable, well-documented physiological response, and it happens to people whose management is excellent."
        },
        {
          "t": "p",
          "text": "So here is what is actually going on, why it flips depending on what kind of session you do, and why the number on the screen during a workout is the least useful moment to judge that workout by."
        },
        {
          "t": "h",
          "text": "What actually happens when you lift"
        },
        {
          "t": "p",
          "text": "A hard set is, as far as your body is concerned, a small emergency. Heavy effort triggers a surge of adrenaline, along with cortisol and growth hormone. Those hormones have one job in the moment: make fuel available fast. They tell the liver to release stored glucose into the bloodstream, and they make your tissues temporarily less responsive to insulin so that glucose stays in circulation where the working muscle can grab it."
        },
        {
          "t": "p",
          "text": "Meanwhile the muscle doing the lifting is not drawing much of its fuel from your bloodstream. A set of eight heavy reps lasts perhaps twenty seconds, and that kind of short, near-maximal effort runs largely on glycogen stored inside the muscle itself. So you get a surge of glucose arriving from the liver, and comparatively little being taken out of the blood to meet it. Supply outruns demand. The line goes up."
        },
        {
          "t": "p",
          "text": "It is worth being precise about how big that effect is, because the internet is not. In the cleanest head-to-head trial of this, [published in Diabetes Care in 2013](https://diabetesjournals.org/care/article/36/3/537/38023/Resistance-Versus-Aerobic-ExerciseAcute-effects-on), people with type 1 diabetes did 45 minutes of resistance training on one day and 45 minutes of running on another. Resistance training did not send everyone soaring — but glucose fell far less during lifting than during running, and stayed lower for longer afterwards. In other words, weights protect blood glucose during the session in a way cardio does not, and in plenty of people that protection tips over into a frank rise."
        },
        {
          "t": "p",
          "text": "What tips it over is usually intensity, timing or adrenaline. [A 2022 review in Frontiers in Endocrinology](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.1021800/full) noted that fasted morning resistance sessions produced a hyperglycaemic response where the same work in the afternoon did not — the dawn hormones and the exercise hormones stacking on top of each other. Nerves before a heavy attempt do the same thing. So does caffeine, and so does a bad night’s sleep."
        },
        {
          "t": "h",
          "text": "Why cardio does the opposite"
        },
        {
          "t": "p",
          "text": "Steady aerobic work — walking, easy cycling, a conversational jog — is a completely different metabolic situation. It is long and continuous rather than short and explosive, so the muscle burns through its own stores and starts pulling glucose out of the bloodstream to keep going. Crucially, muscle contraction moves glucose transporters to the cell surface all on its own, without needing insulin to ask. And because the effort is moderate, adrenaline never really spikes, so the liver is not being shouted at to top the blood up."
        },
        {
          "t": "p",
          "text": "Drain without a matching refill. That is why a walk lowers your glucose and a deadlift raises it, and why the two feel so contradictory when you first notice it."
        },
        {
          "t": "h",
          "text": "The intensity threshold that decides which way you go"
        },
        {
          "t": "p",
          "text": "“Weights” is not one thing. What actually determines the direction is how anaerobic the session is — how close each set takes you to your limit, how long the sets last, and how much you rest between them."
        },
        {
          "t": "table",
          "head": [
            "Type of session",
            "Which way glucose usually goes",
            "Why"
          ],
          "rows": [
            [
              "Heavy, low reps, long rests, near failure",
              "Up",
              "Strongly anaerobic. Big adrenaline response, liver releases glucose, muscle runs on its own glycogen."
            ],
            [
              "Lighter weight, higher reps, short rests, circuit style",
              "Down, or flat",
              "Behaves much more like cardio — continuous work, steadier heart rate, more glucose drawn from the blood."
            ],
            [
              "HIIT and sprint intervals",
              "Up, or flat",
              "Short maximal efforts. Sits with lifting rather than with steady cardio."
            ],
            [
              "Steady walking, easy cycling, swimming",
              "Down",
              "Sustained aerobic demand pulls glucose from the bloodstream, and contraction moves it into muscle without insulin."
            ],
            [
              "Weights followed by a walk",
              "Up, then settling",
              "The aerobic finish gives the circulating glucose somewhere to go."
            ]
          ]
        },
        {
          "t": "p",
          "text": "This is genuinely useful to know, because it means the answer to “does weight training raise blood sugar” is: it depends which weight training. The same hour in the gym, rearranged, can move your glucose in either direction. If you want a sense of how a session is likely to behave before you do it, my [exercise and blood sugar calculator](/resources/exercise-calculator/) estimates the direction for cardio, strength work, walking and the rest."
        },
        {
          "t": "h",
          "text": "What I see on my own CGM"
        },
        {
          "t": "p",
          "text": "My own pattern is consistent enough that I can now predict it. The line is flat through the warm-up. It starts climbing somewhere in the second or third working set — not slowly. It usually peaks twenty to forty minutes after I have finished, which used to confuse me most of all, because by then I am in the car. Then it comes down over the following couple of hours, more gently than it went up."
        },
        {
          "t": "p",
          "text": "If I walk for ten or fifteen minutes at the end instead of driving straight home, the peak is noticeably lower and shorter. That is not a trick or a hack; it is just the aerobic mechanism above, giving the glucose already sitting in my bloodstream a destination."
        },
        {
          "t": "p",
          "text": "The part I would not have predicted is what happens much later. In that Diabetes Care trial, the glucose-lowering effect of a resistance session was more prolonged than after aerobic exercise, extending well into the night. Anecdotally that matches me: the evening after heavy legs is the one I pay most attention to. I am not going to tell you what to do about that, because it is precisely the kind of thing that belongs in a conversation with your diabetes team — but knowing the pattern exists is what lets you have that conversation properly."
        },
        {
          "t": "quote",
          "text": "A number going up during a session is not the same as the session being bad for you."
        },
        {
          "t": "h",
          "text": "The bit nobody mentions: the 24–48 hour window"
        },
        {
          "t": "p",
          "text": "Here is the part that reframes everything, and it is almost never in the articles that tell you exercise raises blood sugar."
        },
        {
          "t": "p",
          "text": "When you train, your muscles move glucose transporters — GLUT4 — to the cell surface. That effect does not switch off when you rack the bar. [A review in the American Journal of Physiology](https://pmc.ncbi.nlm.nih.gov/articles/PMC4816200/) describes enhanced insulin sensitivity becoming detectable one to four hours after exercise and persisting for up to 24 to 48 hours. For that day and a half or so, the same amount of insulin does more work. Your muscle is, temporarily, a better place for glucose to go."
        },
        {
          "t": "p",
          "text": "Which means the reading you are staring at mid-session is the single least representative moment of the whole thing. You are looking at a twenty-minute hormonal blip and drawing conclusions about a benefit that lasts two days. The day after a session is very often the easier day — and if you train two or three times a week, those windows start to overlap and the improvement stops being occasional."
        },
        {
          "t": "p",
          "text": "There is a longer game too. Muscle is where most of the glucose in your body ends up, insulin-mediated, even when you are sitting still. Building and keeping more of it changes your baseline, not just your Tuesday."
        },
        {
          "t": "h",
          "text": "Why this matters more after 40"
        },
        {
          "t": "p",
          "text": "Everything above is true at any age. What changes after 40 is the stakes."
        },
        {
          "t": "p",
          "text": "As oestrogen falls through perimenopause, insulin sensitivity drops with it — [I have written about how hard that made my own management](/blog/perimenopause-diabetes-blood-sugar/). Fat distribution shifts towards the visceral, which is the metabolically unhelpful kind. And muscle loss accelerates: [a 2023 systematic review in BMC Women’s Health](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/) found menopausal women are at significantly raised risk of sarcopenia, and that resistance exercise combined with adequate protein was among the most effective things to do about it. That is also why [protein intake matters more after 40 than the official guidelines suggest](/blog/protein-for-women-over-40/)."
        },
        {
          "t": "p",
          "text": "So the irony is quite cruel. The decade in which lifting does the most for you is the same decade in which the immediate reading looks the most alarming — and it is exactly the point at which a lot of women quietly stop, because the CGM appears to be telling them off. It isn’t. It is showing you twenty minutes of adrenaline in front of a two-day improvement in insulin sensitivity and a long-term defence of the tissue that handles your glucose."
        },
        {
          "t": "h",
          "text": "How to plan around it rather than fight it"
        },
        {
          "t": "p",
          "text": "None of this is about correcting the rise. It is about knowing your own pattern well enough that it stops being a surprise — and none of the following involves changing insulin, which is not something a blog post can help you with."
        },
        {
          "t": "p",
          "text": "Collect before you change. Two to three weeks of the same kind of session, at roughly the same time of day, tells you far more than any general rule. What you are looking for is shape: when it starts, how high, how long, when it settles, what the night looks like."
        },
        {
          "t": "p",
          "text": "Then note the variables alongside it, because they explain most of the days that do not fit — time of day, fasted or fed, heavy sets versus circuits, caffeine, sleep, stress, and where you are in your cycle if you still have one. My own sessions behave differently in different weeks of the month, and it took me a while to stop blaming the workout for that."
        },
        {
          "t": "p",
          "text": "A longer, gentler warm-up and a few minutes of easy walking at the end tend to blunt the peak, for the mechanical reason described above rather than anything mysterious. Two tools on this site help with the rest: the [exercise and blood sugar calculator](/resources/exercise-calculator/) for what to expect from a given type of session, and [the blood sugar investigator](/blood-sugar-investigator/) for working through a reading that genuinely does not make sense, instead of guessing."
        },
        {
          "t": "p",
          "text": "The one thing I would push back on hardest: do not stop lifting because of the number. Of all the ways to respond to an exercise-related rise, giving up the exercise is the only one that costs you the benefit."
        },
        {
          "t": "h",
          "text": "When to speak to your diabetes team"
        },
        {
          "t": "p",
          "text": "Anything involving insulin around exercise — timing, adjustments, what to do about a delayed drop — is a clinical conversation, not a blog one. That is not a formality. The right answer differs enormously between people, and depends on your insulin, your delivery method and what your own data show."
        },
        {
          "t": "p",
          "text": "Bring your own pattern to that appointment, ideally as two or three weeks of CGM data with the sessions marked. Go sooner rather than later if a post-exercise high stays high and does not respond as you would expect, if you find ketones, or if you are seeing lows in the hours or the night after training. The [2017 international consensus statement on exercise in type 1 diabetes](https://www.thelancet.com/article/S2213-8587(17)30014-1/fulltext) exists precisely because these responses vary so much by exercise type, intensity and individual — your team has a framework for this."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Resistance exercise causes less of a glucose decline than aerobic exercise, but a longer-lasting reduction afterwards.",
              "detail": "A crossover trial in Diabetes Care had 12 physically active adults with type 1 diabetes complete 45 minutes of resistance exercise (three sets of seven exercises at 8RM), 45 minutes of running at 60% of VO₂max, and a no-exercise control on separate days. Glucose fell substantially less during resistance exercise than during aerobic exercise, while the post-exercise reduction in glycaemia was more prolonged after lifting — including overnight.",
              "cite": "Diabetes Care · Randomised crossover trial, 2013",
              "url": "https://diabetesjournals.org/care/article/36/3/537/38023/Resistance-Versus-Aerobic-ExerciseAcute-effects-on"
            },
            {
              "claim": "Resistance training draws mainly on muscle glycogen, which is why blood glucose is “protected” during a session — and why fasted morning sessions can push it up.",
              "detail": "A 2022 review in Frontiers in Endocrinology on exercise timing in type 1 diabetes describes resistance exercise as offering greater blood glucose stability because intramuscular glycogen, not circulating glucose, is the primary fuel — whereas continuous moderate aerobic exercise relies heavily on blood glucose and produces rapid falls. It also reports a hyperglycaemic response to fasted morning resistance exercise that was absent in the afternoon, attributed to raised free fatty acids and the dawn phenomenon compounding the exercise response.",
              "cite": "Frontiers in Endocrinology · Review, 2022",
              "url": "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.1021800/full"
            },
            {
              "claim": "Improved insulin sensitivity after a single session lasts up to 24–48 hours.",
              "detail": "A review in the American Journal of Physiology — Endocrinology and Metabolism reports that enhanced muscle and whole-body insulin sensitivity is detectable roughly 1–4 hours after exercise and can persist for up to 24–48 hours, sustained by greater GLUT4 translocation and AS160 phosphorylation. This is separate from the insulin-independent glucose uptake during exercise itself, which reverses within about 2–3 hours.",
              "cite": "American Journal of Physiology — Endocrinology and Metabolism · Review, 2015",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4816200/"
            },
            {
              "claim": "Menopausal women are at significantly raised risk of muscle loss, and resistance exercise is among the most effective countermeasures.",
              "detail": "A systematic review and meta-analysis of randomised controlled trials in BMC Women’s Health examined non-pharmacological approaches to preventing sarcopenia in menopausal women. Resistance training, particularly combined with adequate dietary protein, was consistently among the most effective interventions — which matters for glucose as well as strength, since skeletal muscle is the main site of insulin-mediated glucose disposal.",
              "cite": "BMC Women’s Health · Systematic review and meta-analysis, 2023",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/"
            },
            {
              "claim": "Glycaemic responses to exercise vary so much by type, intensity and individual that management must be individualised.",
              "detail": "The 2017 international consensus statement on exercise management in type 1 diabetes, published in The Lancet Diabetes & Endocrinology, sets out how aerobic, resistance and mixed activity produce different — sometimes opposite — glucose responses, and how those responses depend on intensity, timing, starting glucose and circulating insulin. It recommends accumulating 150 minutes of activity a week including both aerobic and resistance work, with individualised management around it.",
              "cite": "The Lancet Diabetes & Endocrinology · International consensus statement, 2017",
              "url": "https://www.thelancet.com/article/S2213-8587(17)30014-1/fulltext"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, women’s health writer living with type 1 diabetes",
          "text": "Lena Filatova has lived with type 1 diabetes for 23 years. She writes about women’s health, perimenopause, nutrition and diabetes management at lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Does weight training raise blood sugar?",
          "a": "It often does, and that is a normal physiological response rather than a mistake. Heavy, near-maximal lifting triggers adrenaline and cortisol, which prompt the liver to release glucose, while the working muscle runs largely on its own stored glycogen rather than glucose from the blood. More arrives than leaves, so the reading climbs. Lighter, higher-rep, circuit-style training behaves much more like cardio and often does not raise it at all."
        },
        {
          "q": "Why does my blood sugar go up after exercise but down after a walk?",
          "a": "They are different metabolic situations. A walk is sustained and moderate: the muscle steadily draws glucose out of the bloodstream, contraction moves it in without needing insulin, and adrenaline stays low so the liver is not topping you up. Heavy lifting is short and explosive: adrenaline spikes, the liver releases glucose, and the muscle is burning its own fuel. Same person, same day, opposite direction."
        },
        {
          "q": "Should I stop lifting if my glucose goes up?",
          "a": "Of all the possible responses, stopping is the one that costs you the most. The rise is temporary; the improvement in insulin sensitivity afterwards lasts up to 24–48 hours, and the muscle you build changes how your body handles glucose long term — which matters more, not less, after 40. If the pattern worries you, take two or three weeks of your own data to your diabetes team rather than dropping the training."
        },
        {
          "q": "How long does the blood sugar rise after weight training last?",
          "a": "In my own experience it peaks twenty to forty minutes after the session and settles over the following couple of hours, more gently than it rose. Everyone’s shape is a bit different, which is why two or three weeks of your own readings is worth more than any general figure. Ten to fifteen minutes of easy walking at the end tends to lower and shorten the peak."
        },
        {
          "q": "Does the timing of my session change the response?",
          "a": "It can, quite a lot. Research on exercise timing in type 1 diabetes has found a hyperglycaemic response to fasted morning resistance sessions that was not there for the same work in the afternoon — the dawn hormones and the exercise hormones stacking up. Caffeine, poor sleep, stress and, if you still cycle, where you are in the month all shift the picture too."
        },
        {
          "q": "Is cardio better than weights for blood sugar?",
          "a": "Neither is better — they do different jobs. Cardio lowers glucose during the session, which is useful and also carries more hypoglycaemia risk. Weights protect glucose during the session and build the muscle mass that handles glucose for the rest of your life. The international consensus guidance on exercise in type 1 diabetes recommends both, not one instead of the other."
        }
      ]
    },
    "ua": {
      "cat": "Фітнес 40+",
      "title": "Чому від силових цукор у крові йде вгору — і чому це не провал",
      "excerpt": "Штанга піднімає глюкозу, а прогулянка її опускає. Механізм цього розколу, що відбувається протягом наступних 24–48 годин і чому після 40 це важливіше.",
      "meta": "13 серпня 2026 · 8 хв читання",
      "lead": "Ви завершуєте важкий підхід, дивитеся на телефон — а стрілка вгору. Ніщо зі з’їденого цього не пояснює. За 23 роки з діабетом 1 типу скажу: це одне з найчастіше неправильно прочитаних показань — і одне з найменш тривожних.",
      "seoTitle": "Чи піднімають силові тренування цукор у крові?",
      "metaDesc": "Силові тренування можуть піднімати глюкозу, а кардіо — опускати. Що відбувається, чому це нормально і що це означає для жінок після 40.",
      "blocks": [
        {
          "t": "p",
          "text": "Ця стаття має освітній характер і описує мій власний досвід. У ній немає жодних рекомендацій щодо інсуліну, вуглеводних коефіцієнтів чи ліків — будь-які зміни в тому, як ви керуєте діабетом навколо тренувань, — це розмова з вашою діабетичною командою."
        },
        {
          "t": "p",
          "text": "Роками в моєму житті були два види руху, які поводилися як протилежності. Спокійна півгодинна прогулянка м’яко опускала глюкозу — настільки надійно, що я могла на це розраховувати. А важка сесія в силовій рамі піднімала її, іноді на кілька ммоль/л, ще поки я була в залі й не робила нічого, крім присідань."
        },
        {
          "t": "p",
          "text": "Коли це сталося вперше, я вирішила, що щось зробила не так. Прорахувалася з перекусом, не вгадала з часом, неправильно оцінила день. Мені знадобилося ганебно багато часу, щоб дізнатися: це взагалі не помилка. Це передбачувана, добре задокументована фізіологічна реакція, і вона трапляється з людьми, чий контроль діабету бездоганний."
        },
        {
          "t": "p",
          "text": "Отже, ось що відбувається насправді, чому напрямок змінюється залежно від типу тренування і чому цифра на екрані під час заняття — найменш корисний момент, щоб оцінювати це заняття."
        },
        {
          "t": "h",
          "text": "Що насправді відбувається, коли ви піднімаєте вагу"
        },
        {
          "t": "p",
          "text": "Важкий підхід для вашого тіла — це маленька надзвичайна ситуація. Значне зусилля запускає викид адреналіну, а разом із ним кортизолу й гормону росту. У цих гормонів у цю мить одна робота: швидко зробити паливо доступним. Вони наказують печінці випустити запасену глюкозу в кров і роблять тканини тимчасово менш чутливими до інсуліну, щоб глюкоза залишалася в кровообігу — там, де працюючий м’яз може її взяти."
        },
        {
          "t": "p",
          "text": "Водночас м’яз, який виконує роботу, бере з крові не так уже й багато палива. Підхід із восьми важких повторень триває секунд двадцять, а таке коротке, майже максимальне зусилля живиться переважно глікогеном, що зберігається всередині самого м’яза. Тож ви отримуєте потік глюкози з печінки й порівняно мало вилучення з крові назустріч. Надходження перевищує витрату. Лінія йде вгору."
        },
        {
          "t": "p",
          "text": "Варто бути точними щодо масштабу цього ефекту, бо інтернет точним не буває. У найчистішому прямому порівнянні, [опублікованому в Diabetes Care 2013 року](https://diabetesjournals.org/care/article/36/3/537/38023/Resistance-Versus-Aerobic-ExerciseAcute-effects-on), люди з діабетом 1 типу одного дня виконували 45 хвилин силового тренування, а іншого — 45 хвилин бігу. Силове не підкинуло глюкозу в усіх — але під час штанги вона падала значно менше, ніж під час бігу, і довше залишалася нижчою після. Іншими словами, ваги захищають глюкозу під час заняття так, як кардіо не захищає, і в багатьох людей цей захист переходить у відверте зростання."
        },
        {
          "t": "p",
          "text": "Те, що схиляє шальки, — зазвичай інтенсивність, час доби або адреналін. [Огляд 2022 року у Frontiers in Endocrinology](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.1021800/full) відзначив, що силові сесії натщесерце вранці давали гіперглікемічну реакцію там, де така сама робота вдень її не давала: ранкові гормони й тренувальні гормони накладаються одні на одних. Хвилювання перед важкою спробою робить те саме. Як і кофеїн, і погана ніч сну."
        },
        {
          "t": "h",
          "text": "Чому кардіо робить протилежне"
        },
        {
          "t": "p",
          "text": "Рівномірна аеробна робота — ходьба, легкий велосипед, розмовний біг підтюпцем — це геть інша метаболічна ситуація. Вона довга й безперервна, а не коротка й вибухова, тож м’яз спалює власні запаси й починає витягати глюкозу з крові, щоб продовжувати. І головне: скорочення м’яза саме по собі виводить транспортери глюкози на поверхню клітини, не потребуючи інсуліну. А оскільки зусилля помірне, адреналін по-справжньому не стрибає, тож на печінку ніхто не кричить, щоб вона доливала."
        },
        {
          "t": "p",
          "text": "Витрата без відповідного доливання. Саме тому прогулянка глюкозу знижує, а станова тяга — піднімає, і саме тому ці дві речі здаються такими суперечливими, коли помічаєш їх уперше."
        },
        {
          "t": "h",
          "text": "Поріг інтенсивності, який вирішує напрямок"
        },
        {
          "t": "p",
          "text": "«Силові» — це не одна річ. Напрямок насправді визначає те, наскільки анаеробним є заняття: наскільки близько кожен підхід підводить вас до межі, як довго тривають підходи і скільки ви відпочиваєте між ними."
        },
        {
          "t": "table",
          "head": [
            "Тип заняття",
            "Куди зазвичай іде глюкоза",
            "Чому"
          ],
          "rows": [
            [
              "Важкі ваги, мало повторень, довгий відпочинок, до відмови",
              "Вгору",
              "Виражено анаеробне. Сильна адреналінова реакція, печінка випускає глюкозу, м’яз працює на власному глікогені."
            ],
            [
              "Легші ваги, більше повторень, короткий відпочинок, коловий формат",
              "Вниз або рівно",
              "Поводиться набагато більше як кардіо — безперервна робота, стабільніший пульс, більше глюкози береться з крові."
            ],
            [
              "HIIT та спринтерські інтервали",
              "Вгору або рівно",
              "Короткі максимальні зусилля. Ближче до штанги, ніж до рівномірного кардіо."
            ],
            [
              "Рівномірна ходьба, легкий велосипед, плавання",
              "Вниз",
              "Тривале аеробне навантаження витягає глюкозу з крові, а скорочення заводить її в м’яз без інсуліну."
            ],
            [
              "Силові, а після них прогулянка",
              "Вгору, потім спад",
              "Аеробне завершення дає глюкозі, що вже в крові, куди подітися."
            ]
          ]
        },
        {
          "t": "p",
          "text": "Це справді корисно знати, бо означає, що відповідь на питання «чи піднімають силові цукор» така: залежить від того, які саме силові. Та сама година в залі, переставлена по-іншому, може посунути глюкозу в будь-який бік. Якщо хочете заздалегідь зрозуміти, як поведеться конкретне заняття, мій [калькулятор впливу фізичних навантажень на цукор](/ua/resources/exercise-calculator/) оцінює напрямок для кардіо, силових, ходьби та іншого."
        },
        {
          "t": "h",
          "text": "Що я бачу на власному CGM"
        },
        {
          "t": "p",
          "text": "Мій власний патерн уже настільки послідовний, що я можу його передбачити. Лінія рівна протягом розминки. Вона починає лізти вгору десь на другому-третьому робочому підході — і не повільно. Пік зазвичай настає через двадцять-сорок хвилин після того, як я закінчила, і саме це збивало мене з пантелику найбільше, бо на той момент я вже в машині. Потім вона знижується протягом наступних кількох годин — м’якше, ніж піднімалася."
        },
        {
          "t": "p",
          "text": "Якщо наприкінці я десять-п’ятнадцять хвилин ходжу пішки замість того, щоб одразу їхати додому, пік помітно нижчий і коротший. Це не трюк і не лайфхак — це просто аеробний механізм, описаний вище, який дає глюкозі, що вже сидить у крові, місце призначення."
        },
        {
          "t": "p",
          "text": "Чого я не передбачила б — це те, що відбувається значно пізніше. У тому дослідженні Diabetes Care знижувальний ефект силової сесії був тривалішим, ніж після аеробної, і сягав глибоко в ніч. За моїми відчуттями це збігається: вечір після важких ніг — той, до якого я найуважніша. Я не казатиму вам, що з цим робити, бо це саме той випадок, який належить розмові з вашою діабетичною командою, — але знання про існування патерну і є тим, що дає змогу провести цю розмову як слід."
        },
        {
          "t": "quote",
          "text": "Цифра, що росте під час заняття, — це не те саме, що заняття, яке вам шкодить."
        },
        {
          "t": "h",
          "text": "Те, про що ніхто не згадує: вікно 24–48 годин"
        },
        {
          "t": "p",
          "text": "Ось частина, яка перевертає всю картину, і її майже ніколи немає в статтях, які повідомляють, що вправи піднімають цукор."
        },
        {
          "t": "p",
          "text": "Коли ви тренуєтеся, ваші м’язи виводять транспортери глюкози — GLUT4 — на поверхню клітини. Цей ефект не вимикається, коли ви кладете штангу на стійки. [Огляд в American Journal of Physiology](https://pmc.ncbi.nlm.nih.gov/articles/PMC4816200/) описує, що посилена чутливість до інсуліну стає помітною через одну-чотири години після вправ і може зберігатися до 24–48 годин. Протягом цієї доби з гаком та сама кількість інсуліну виконує більше роботи. Ваш м’яз тимчасово стає кращим місцем для глюкози."
        },
        {
          "t": "p",
          "text": "А отже, показання, на яке ви дивитеся посеред заняття, — найменш репрезентативний момент з усього. Ви дивитеся на двадцятихвилинний гормональний сплеск і робите висновки про користь, що триває два дні. День після тренування дуже часто виявляється легшим — а якщо ви тренуєтеся двічі-тричі на тиждень, ці вікна починають перекриватися, і покращення перестає бути епізодичним."
        },
        {
          "t": "p",
          "text": "Є ще й довга гра. М’язи — це те, куди потрапляє більшість глюкози у вашому тілі через дію інсуліну, навіть коли ви просто сидите. Побудувати й утримати їх більше — це змінити свій базовий рівень, а не лише свій вівторок."
        },
        {
          "t": "h",
          "text": "Чому після 40 це важливіше"
        },
        {
          "t": "p",
          "text": "Усе вищесказане справедливе в будь-якому віці. Після 40 змінюються ставки."
        },
        {
          "t": "p",
          "text": "Зі зниженням естрогену в перименопаузі падає й чутливість до інсуліну — [я вже писала, наскільки важчим це зробило мій власний контроль](/ua/blog/perimenopause-diabetes-blood-sugar/). Розподіл жиру зміщується до вісцерального, метаболічно найнесприятливішого. І втрата м’язів прискорюється: [систематичний огляд 2023 року в BMC Women’s Health](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/) показав, що жінки в менопаузі мають значно підвищений ризик саркопенії і що силові вправи разом із достатньою кількістю білка — серед найдієвіших способів цьому запобігти. Саме тому [білка після 40 потрібно більше, ніж радять офіційні норми](/ua/blog/protein-for-women-over-40/)."
        },
        {
          "t": "p",
          "text": "Іронія тут доволі жорстока. Десятиліття, у якому силові дають вам найбільше, — це те саме десятиліття, у якому миттєве показання виглядає найтривожніше. І це саме той момент, коли багато жінок тихо кидають, бо CGM ніби їх сварить. Ні, не сварить. Він показує двадцять хвилин адреналіну на тлі дводенного покращення чутливості до інсуліну й довгострокового захисту тієї тканини, яка керує вашою глюкозою."
        },
        {
          "t": "h",
          "text": "Як це планувати, а не воювати з цим"
        },
        {
          "t": "p",
          "text": "Ідеться не про те, щоб «виправляти» це зростання. Ідеться про те, щоб знати власний патерн настільки добре, аби він перестав бути несподіванкою, — і жоден із наведених нижче пунктів не стосується зміни інсуліну, бо з цим стаття в блозі допомогти не може."
        },
        {
          "t": "p",
          "text": "Спершу зберіть дані, потім змінюйте. Два-три тижні однотипних занять приблизно в один і той самий час доби скажуть вам набагато більше, ніж будь-яке загальне правило. Ви шукаєте форму кривої: коли починається, наскільки високо, як довго, коли вирівнюється і що відбувається вночі."
        },
        {
          "t": "p",
          "text": "Потім записуйте поряд змінні, бо саме вони пояснюють більшість днів, що не вкладаються в схему: час доби, натщесерце чи після їжі, важкі підходи чи коловий формат, кофеїн, сон, стрес і фаза циклу, якщо він у вас ще є. Мої власні тренування поводяться по-різному в різні тижні місяця, і мені знадобився час, щоб перестати звинувачувати в цьому саме тренування."
        },
        {
          "t": "p",
          "text": "Довша, м’якша розминка й кілька хвилин спокійної ходьби наприкінці зазвичай згладжують пік — із суто механічної причини, описаної вище, а не з якоїсь загадкової. З рештою допоможуть два інструменти на цьому сайті: [калькулятор впливу фізичних навантажень на цукор](/ua/resources/exercise-calculator/) — щоб знати, чого очікувати від певного типу заняття, і [дослідник цукру в крові](/blood-sugar-investigator-ua/) — щоб розібрати показання, яке справді не піддається поясненню, замість того щоб гадати."
        },
        {
          "t": "p",
          "text": "Єдине, проти чого я заперечуватиму найрішучіше: не кидайте силові через цифру. З усіх можливих реакцій на пов’язане з тренуванням зростання відмова від тренування — єдина, яка коштує вам самої користі."
        },
        {
          "t": "h",
          "text": "Коли говорити з діабетичною командою"
        },
        {
          "t": "p",
          "text": "Усе, що стосується інсуліну навколо тренувань — час, корекції, що робити із запізнілим падінням, — це клінічна розмова, а не блогова. І це не формальність. Правильна відповідь надзвичайно різна для різних людей і залежить від вашого інсуліну, способу його введення й того, що показують саме ваші дані."
        },
        {
          "t": "p",
          "text": "Принесіть на прийом власний патерн — найкраще у вигляді два-три тижні даних CGM із позначеними тренуваннями. Ідіть раніше, а не пізніше, якщо високий цукор після тренування залишається високим і не реагує так, як ви очікуєте; якщо з’являються кетони; або якщо ви бачите гіпоглікемії в години чи ніч після заняття. [Міжнародна консенсусна заява 2017 року щодо вправ при діабеті 1 типу](https://www.thelancet.com/article/S2213-8587(17)30014-1/fulltext) існує саме тому, що ці реакції так сильно різняться залежно від типу вправ, інтенсивності та людини, — у вашої команди є рамка для цього."
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Силові вправи спричиняють менше падіння глюкози, ніж аеробні, але триваліше зниження після них.",
              "detail": "У перехресному дослідженні в Diabetes Care 12 фізично активних дорослих із діабетом 1 типу в різні дні виконували 45 хвилин силового тренування (три сети з семи вправ на 8ПМ), 45 хвилин бігу на рівні 60% VO₂max і контрольний день без вправ. Під час силового глюкоза падала значно менше, ніж під час аеробного, тоді як зниження глікемії після заняття було тривалішим саме після штанги — включно з нічними годинами.",
              "cite": "Diabetes Care · Рандомізоване перехресне дослідження, 2013",
              "url": "https://diabetesjournals.org/care/article/36/3/537/38023/Resistance-Versus-Aerobic-ExerciseAcute-effects-on"
            },
            {
              "claim": "Силові тренування живляться переважно м’язовим глікогеном — тому глюкоза «захищена» під час заняття, і тому ранкові сесії натщесерце можуть її піднімати.",
              "detail": "Огляд 2022 року у Frontiers in Endocrinology про час тренувань при діабеті 1 типу описує силові вправи як такі, що дають більшу стабільність глюкози, бо основним паливом є внутрішньом’язовий глікоген, а не глюкоза крові, тоді як безперервні помірні аеробні навантаження значною мірою покладаються на глюкозу крові й дають швидкі падіння. Також повідомляється про гіперглікемічну реакцію на силові вправи натщесерце вранці, якої не було вдень; це пояснюють підвищенням вільних жирних кислот і феноменом ранкової зорі, що накладаються на реакцію на вправи.",
              "cite": "Frontiers in Endocrinology · Огляд, 2022",
              "url": "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.1021800/full"
            },
            {
              "claim": "Покращена чутливість до інсуліну після одного заняття триває до 24–48 годин.",
              "detail": "Огляд в American Journal of Physiology — Endocrinology and Metabolism повідомляє, що посилена чутливість м’язів і всього тіла до інсуліну виявляється приблизно через 1–4 години після вправ і може зберігатися до 24–48 годин, підтримувана активнішою транслокацією GLUT4 та фосфорилюванням AS160. Це окремо від інсуліннезалежного захоплення глюкози під час самих вправ, яке минає приблизно за 2–3 години.",
              "cite": "American Journal of Physiology — Endocrinology and Metabolism · Огляд, 2015",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4816200/"
            },
            {
              "claim": "Жінки в менопаузі мають значно підвищений ризик втрати м’язів, а силові вправи — один із найдієвіших способів цьому протидіяти.",
              "detail": "Систематичний огляд і метааналіз рандомізованих контрольованих досліджень у BMC Women’s Health розглянув нефармакологічні підходи до запобігання саркопенії в жінок у менопаузі. Силові тренування, особливо в поєднанні з достатньою кількістю харчового білка, стабільно були серед найефективніших втручань — а це важливо не лише для сили, а й для глюкози, бо саме скелетні м’язи є основним місцем інсулін-опосередкованої утилізації глюкози.",
              "cite": "BMC Women’s Health · Систематичний огляд і метааналіз, 2023",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/"
            },
            {
              "claim": "Глікемічні реакції на вправи настільки різняться за типом, інтенсивністю й людиною, що керування має бути індивідуальним.",
              "detail": "Міжнародна консенсусна заява 2017 року щодо керування вправами при діабеті 1 типу, опублікована в The Lancet Diabetes & Endocrinology, викладає, як аеробна, силова та змішана активність дають різні — іноді протилежні — реакції глюкози і як ці реакції залежать від інтенсивності, часу, стартового рівня глюкози та кількості інсуліну в крові. Заява рекомендує накопичувати 150 хвилин активності на тиждень, включно з аеробною та силовою роботою, з індивідуальним керуванням навколо неї.",
              "cite": "The Lancet Diabetes & Endocrinology · Міжнародна консенсусна заява, 2017",
              "url": "https://www.thelancet.com/article/S2213-8587(17)30014-1/fulltext"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Лена Філатова, авторка про жіноче здоров’я, яка живе з діабетом 1 типу",
          "text": "Лена Філатова живе з діабетом 1 типу вже 23 роки. Вона пише про жіноче здоров’я, перименопаузу, харчування та контроль діабету на lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Чи піднімають силові тренування цукор у крові?",
          "a": "Часто так — і це нормальна фізіологічна реакція, а не помилка. Важке, майже максимальне навантаження запускає адреналін і кортизол, які змушують печінку випускати глюкозу, тоді як працюючий м’яз живиться переважно власним запасеним глікогеном, а не глюкозою з крові. Надходить більше, ніж витрачається, тож показання росте. Легші, багатоповторні, колові тренування поводяться значно більше як кардіо й часто не піднімають глюкозу взагалі."
        },
        {
          "q": "Чому після тренування цукор росте, а після прогулянки падає?",
          "a": "Це різні метаболічні ситуації. Прогулянка тривала й помірна: м’яз рівномірно витягає глюкозу з крові, скорочення заводить її всередину без інсуліну, а адреналін залишається низьким, тож печінка вас не «доливає». Важкі силові — короткі й вибухові: адреналін стрибає, печінка випускає глюкозу, а м’яз спалює власне паливо. Та сама людина, той самий день, протилежний напрямок."
        },
        {
          "q": "Чи варто кинути силові, якщо глюкоза росте?",
          "a": "З усіх можливих реакцій відмова коштує найдорожче. Зростання тимчасове; покращення чутливості до інсуліну після нього триває до 24–48 годин, а м’язи, які ви будуєте, змінюють те, як тіло керує глюкозою в довгій перспективі — і після 40 це важить більше, а не менше. Якщо патерн вас непокоїть, віднесіть два-три тижні власних даних діабетичній команді, а не кидайте тренування."
        },
        {
          "q": "Скільки триває підйом цукру після силового тренування?",
          "a": "За моїм досвідом пік настає через двадцять-сорок хвилин після заняття й вирівнюється протягом наступних кількох годин — м’якше, ніж піднімався. Форма кривої в кожного трохи своя, тому два-три тижні власних показань варті більше за будь-яку загальну цифру. Десять-п’ятнадцять хвилин спокійної ходьби наприкінці зазвичай роблять пік нижчим і коротшим."
        },
        {
          "q": "Чи впливає час доби на реакцію?",
          "a": "Може впливати, і доволі суттєво. Дослідження часу тренувань при діабеті 1 типу виявили гіперглікемічну реакцію на силові сесії натщесерце вранці, якої не було на таку саму роботу вдень: ранкові гормони накладаються на тренувальні. Кофеїн, поганий сон, стрес і — якщо цикл ще є — фаза місяця теж змінюють картину."
        },
        {
          "q": "Що краще для цукру — кардіо чи силові?",
          "a": "Ані те, ані те: вони роблять різну роботу. Кардіо знижує глюкозу під час заняття, що корисно, але й несе більший ризик гіпоглікемії. Силові захищають глюкозу під час заняття й будують м’язову масу, яка керуватиме глюкозою решту вашого життя. Міжнародні консенсусні рекомендації щодо вправ при діабеті 1 типу радять і те, і те — а не одне замість іншого."
        }
      ]
    }
  },
  {
    "slug": "glp1-weight-loss-sex-difference-women-men",
    "date": "2026-08-12",
    "image": "/images/glp1-weight-loss-sex-difference-women-men.jpg",
    "cats": [
      "weight",
      "nutrition"
    ],
    "en": {
      "cat": "Weight loss",
      "title": "Women lose more weight on GLP-1 drugs than men — the JAMA Internal Medicine review puts a number on it",
      "seoTitle": "GLP-1: Women Lose More Than Men — JAMA Review",
      "metaDesc": "A JAMA Internal Medicine review found women lost 10.9% of body weight on GLP-1 drugs versus 6.8% for men. What that gap does and does not mean.",
      "excerpt": "A Johns Hopkins review of 64 randomised trials found women lost 10.9% of their body weight on GLP-1 drugs against 6.8% for men. Its main finding, though, was how little else made any difference.",
      "meta": "12 August 2026 · 5 min read",
      "lead": "That women tend to lose more weight than men on GLP-1 medicines is not new — it has turned up repeatedly in trial data, and it is something this site has written about before. What is new is the size of the dataset behind the claim, and a number attached to it. It is also worth knowing what the researchers themselves emphasised, because it is close to the opposite of how the finding has been reported.",
      "blocks": [
        {
          "t": "p",
          "text": "Researchers at the Johns Hopkins Bloomberg School of Public Health pulled together [64 randomised controlled trials from 41 published articles](https://www.eurekalert.org/news-releases/1118405) of GLP-1 receptor agonists — the drug class that includes semaglutide, sold as Ozempic and Wegovy — and published the analysis in JAMA Internal Medicine on 2 March 2026. Their question was whether these drugs work differently for different kinds of people. Six of those trials, covering 19,906 patients, reported results separately for women and men. In that subset, women lost an average of 10.9% of their starting body weight; men lost 6.8%. The difference was statistically significant."
        },
        {
          "t": "p",
          "text": "Now the part that got lost. The study was not designed to show that women do better — it was designed to look for differences across every subgroup the trials recorded, and it mostly found none. Weight loss was much the same across age groups, across racial and ethnic groups, across starting BMI and across baseline HbA1c. Sex was the single exception in the whole analysis. The researchers described it as \"moderately greater efficacy\" in women and framed the headline result as reassurance that these drugs work comparably well across the people likely to be prescribed them. A finding of broad sameness with one exception is a different story from a finding about women, and the second is the one that travelled."
        },
        {
          "t": "p",
          "text": "The gap is also worth reading carefully. You will see it written up as women losing \"60% more\" than men, which is arithmetically true of 10.9 against 6.8 as a relative comparison. In absolute terms it is a gap of about four percentage points of body weight — for someone starting at 80 kg, roughly 8.7 kg against 5.4 kg. Both framings describe the same result; the relative one simply sounds far more dramatic. And these are averages across thousands of people, not a forecast for any individual. Plenty of men in those trials lost more than plenty of women."
        },
        {
          "t": "p",
          "text": "One exclusion matters if you are weighing up options. The analysis deliberately left out tirzepatide — sold as Mounjaro and Zepbound — because it acts on a second gut hormone as well as GLP-1, which makes it a different class of drug rather than another version of the same one. So none of these numbers describe tirzepatide, including the [trial of tirzepatide alongside hormone therapy after menopause](/blog/tirzepatide-hrt-weight-loss-menopause-2026/) covered here earlier. The trials also ran to mid-2024, so the newest evidence is not in them."
        },
        {
          "t": "p",
          "text": "The authors do offer possible explanations, and one of them is directly relevant here: a synergistic interaction with oestrogen, alongside differences in how women process the drug and women's lower median body weight. Those are hypotheses rather than findings — this analysis pooled published results, it did not test mechanisms — but an oestrogen interaction is worth filing away if you are approaching or past menopause, because it raises a question nobody has answered yet about whether the advantage holds once oestrogen falls. It also says nothing about what the lost weight was made of — that question was answered separately, by [a meta-analysis finding the large majority of it is fat rather than muscle](/blog/glp1-weight-loss-drugs-fat-not-muscle/). Both things stay true at once: the drugs shift the fat-to-muscle ratio in your favour, and losing weight at any speed still thins muscle and bone unless you defend them with [enough protein](/blog/protein-for-women-over-40/) and resistance training. Through perimenopause, when muscle and bone are already under pressure, that matters more, not less."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Women lost 10.9% of body weight on GLP-1 drugs compared with 6.8% for men.",
              "detail": "A systematic review and meta-analysis by researchers at the Johns Hopkins Bloomberg School of Public Health, published in JAMA Internal Medicine on 2 March 2026, covered 64 randomised controlled trials drawn from 41 published articles through mid-2024. Six of those trials, including 19,906 patients, reported outcomes separately by sex; in that subset women lost a mean 10.9% of baseline body weight against 6.8% for men, a statistically significant difference of roughly four percentage points that the authors characterised as moderately greater efficacy. The analysis excluded tirzepatide because it is a dual GIP/GLP-1 agonist rather than a GLP-1 receptor agonist.",
              "cite": "JAMA Internal Medicine · Systematic review and meta-analysis, 2 March 2026",
              "url": "https://www.eurekalert.org/news-releases/1118405"
            },
            {
              "claim": "Weight loss was otherwise similar across age, race and ethnicity, starting BMI and baseline HbA1c.",
              "detail": "The primary purpose of the review was to test whether GLP-1 receptor agonists perform differently across patient subgroups. Apart from sex, it found comparable weight reduction across the demographic and clinical subgroups the trials reported, which the authors presented as evidence that the drugs work similarly well across the populations likely to be eligible for them. The subgroup analyses rest on very different amounts of data: race drew on nine trials and 25,229 patients, but age on seven trials and 4,314, and baseline HbA1c on only four trials and 1,886. The sex comparison, at six trials and 19,906 patients, is among the best-powered of them, so the finding of a difference there rests on more evidence than several of the findings of no difference. The authors noted that groups under-represented in clinical trials warrant further study.",
              "cite": "Johns Hopkins Bloomberg School of Public Health · Press release, 3 March 2026",
              "url": "https://publichealth.jhu.edu/2026/glp-1-weight-loss-drugs-comparably-effective-for-patients-across-age-race-and-starting-weight"
            }
          ]
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "GLP-1 weight-loss drugs mainly burn fat, not muscle, an International Journal of Obesity meta-analysis finds",
              "url": "/blog/glp1-weight-loss-drugs-fat-not-muscle/",
              "desc": "The companion question: what the lost weight is actually made of, and how to protect muscle while it comes off."
            },
            {
              "name": "Hormone therapy plus tirzepatide: 35% more weight loss after menopause",
              "url": "/blog/tirzepatide-hrt-weight-loss-menopause-2026/",
              "desc": "The drug this review deliberately excluded, and what the evidence looks like for it after menopause."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Do GLP-1 drugs work better for women than for men?",
          "a": "On average, women lost more weight in the trials: 10.9% of starting body weight against 6.8% for men, across six trials and 19,906 patients in a 2026 JAMA Internal Medicine review. That is a real and statistically significant difference of about four percentage points. But it is an average across thousands of people rather than a prediction for any one person, and the same review found weight loss was otherwise similar across age, race and ethnicity, starting BMI and baseline blood-sugar control."
        },
        {
          "q": "Does this apply to Mounjaro and Zepbound?",
          "a": "No. This review covered GLP-1 receptor agonists such as semaglutide and specifically excluded tirzepatide, the drug sold as Mounjaro and Zepbound, because it acts on a second gut hormone as well as GLP-1. Tirzepatide has its own trial evidence, which these numbers do not describe."
        }
      ]
    },
    "ua": {
      "cat": "Схуднення",
      "title": "Жінки втрачають на препаратах GLP-1 більше ваги, ніж чоловіки — цифри з огляду JAMA Internal Medicine",
      "seoTitle": "GLP-1: жінки худнуть більше — огляд JAMA",
      "metaDesc": "Огляд у JAMA Internal Medicine: жінки втратили 10,9% ваги на препаратах GLP-1 проти 6,8% у чоловіків. Що ця різниця означає, а що — ні.",
      "excerpt": "Огляд 64 рандомізованих досліджень від Джонса Гопкінса показав: жінки втратили 10,9% ваги на препаратах GLP-1 проти 6,8% у чоловіків. Але головним висновком було те, наскільки мало важило все інше.",
      "meta": "12 серпня 2026 · 5 хв читання",
      "lead": "Те, що жінки зазвичай втрачають більше ваги на препаратах GLP-1, ніж чоловіки, — не новина: це неодноразово з’являлося в даних досліджень, і на цьому сайті про це вже писали. Новим є обсяг даних, що стоять за цим твердженням, і конкретна цифра. Варто також знати, на чому наголосили самі дослідники, бо це майже протилежне до того, як цю знахідку подали в новинах.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідники зі Школи громадського здоров’я Блумберга при Університеті Джонса Гопкінса зібрали [64 рандомізовані контрольовані дослідження з 41 опублікованої статті](https://www.eurekalert.org/news-releases/1118405) щодо агоністів рецепторів GLP-1 — класу препаратів, до якого належить семаглутид, відомий як Ozempic і Wegovy, — і опублікували аналіз у JAMA Internal Medicine 2 березня 2026 року. Їхнє питання полягало в тому, чи діють ці ліки по-різному на різних людей. Шість із цих досліджень, що охопили 19 906 пацієнтів, подали результати окремо для жінок і чоловіків. У цій підгрупі жінки втратили в середньому 10,9% початкової маси тіла; чоловіки — 6,8%. Різниця була статистично значущою."
        },
        {
          "t": "p",
          "text": "А тепер те, що загубилося. Дослідження не було створене, щоб показати, що жінкам ведеться краще, — воно шукало відмінності в усіх підгрупах, які фіксували випробування, і здебільшого не знайшло жодних. Втрата ваги була приблизно однаковою в різних вікових групах, у різних расових та етнічних групах, за різного початкового ІМТ і за різного вихідного рівня HbA1c. Стать була єдиним винятком в усьому аналізі. Дослідники описали це як «помірно вищу ефективність» у жінок і подали головний результат як підтвердження того, що ці препарати працюють приблизно однаково для тих, кому їх імовірно призначатимуть. Висновок про загальну однаковість з одним винятком — це інша історія, ніж висновок про жінок, і саме друга розійшлася далі."
        },
        {
          "t": "p",
          "text": "Саму різницю теж варто читати уважно. Ви побачите формулювання, що жінки втрачають «на 60% більше», — і це арифметично правильно для 10,9 проти 6,8 як відносного порівняння. В абсолютних числах це різниця приблизно в чотири відсоткові пункти маси тіла: для людини вагою 80 кг це приблизно 8,7 кг проти 5,4 кг. Обидва формулювання описують той самий результат; просто відносне звучить значно драматичніше. І це середні значення по тисячах людей, а не прогноз для конкретної людини. Чимало чоловіків у цих дослідженнях втратили більше, ніж чимало жінок."
        },
        {
          "t": "p",
          "text": "Один виняток має значення, якщо ви зважуєте варіанти. Аналіз свідомо не включив тирзепатид — відомий як Mounjaro і Zepbound, — бо він діє ще й на другий кишковий гормон, окрім GLP-1, що робить його іншим класом препаратів, а не ще однією версією того самого. Тож жодна з цих цифр не описує тирзепатид, зокрема й [дослідження тирзепатиду разом із гормональною терапією після менопаузи](/ua/blog/tirzepatide-hrt-weight-loss-menopause-2026/), про яке тут писали раніше. Крім того, дослідження охоплюють період до середини 2024 року, тож найновіших даних у них немає."
        },
        {
          "t": "p",
          "text": "Автори все ж пропонують можливі пояснення, і одне з них безпосередньо дотичне до теми: синергічна взаємодія з естрогеном, а також відмінності в тому, як жіночий організм переробляє препарат, і нижча медіанна маса тіла у жінок. Це гіпотези, а не встановлені факти — аналіз узагальнював опубліковані результати, а не перевіряв механізми, — але взаємодію з естрогеном варто взяти до уваги, якщо ви наближаєтеся до менопаузи або вже пройшли її: це порушує питання, на яке ще ніхто не відповів, — чи зберігається ця перевага, коли естроген падає. Він також нічого не говорить про те, з чого складалася втрачена вага — на це відповіли окремо, [метааналізом, який показав, що переважна більшість її — це жир, а не м’язи](/ua/blog/glp1-weight-loss-drugs-fat-not-muscle/). Обидва твердження правдиві водночас: препарати змінюють співвідношення жиру та м’язів на вашу користь, і водночас втрата ваги за будь-якої швидкості все одно стоншує м’язи та кістки, якщо їх не захищати [достатньою кількістю білка](/ua/blog/protein-for-women-over-40/) та силовими тренуваннями. У перименопаузі, коли м’язи й кістки вже під тиском, це важить більше, а не менше."
        },
        {
          "t": "h",
          "text": "Що каже дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Жінки втратили 10,9% маси тіла на препаратах GLP-1 проти 6,8% у чоловіків.",
              "detail": "Систематичний огляд і метааналіз дослідників зі Школи громадського здоров’я Блумберга при Університеті Джонса Гопкінса, опублікований у JAMA Internal Medicine 2 березня 2026 року, охопив 64 рандомізовані контрольовані дослідження з 41 опублікованої статті до середини 2024 року. Шість із них, що включали 19 906 пацієнтів, подали результати окремо за статтю; у цій підгрупі жінки втратили в середньому 10,9% початкової маси тіла проти 6,8% у чоловіків — статистично значуща різниця приблизно в чотири відсоткові пункти, яку автори охарактеризували як помірно вищу ефективність. Аналіз не включав тирзепатид, оскільки він є подвійним агоністом GIP/GLP-1, а не агоністом рецепторів GLP-1.",
              "cite": "JAMA Internal Medicine · Систематичний огляд і метааналіз, 2 березня 2026",
              "url": "https://www.eurekalert.org/news-releases/1118405"
            },
            {
              "claim": "В усьому іншому втрата ваги була подібною за віком, расою та етнічністю, початковим ІМТ і вихідним HbA1c.",
              "detail": "Головною метою огляду була перевірка, чи діють агоністи рецепторів GLP-1 по-різному в різних підгрупах пацієнтів. Окрім статі, він виявив порівнянну втрату ваги в демографічних і клінічних підгрупах, які фіксували дослідження, що автори подали як свідчення однакової ефективності препаратів для груп населення, яким їх імовірно призначатимуть. Підгрупові аналізи спираються на дуже різний обсяг даних: раса — на дев’ять досліджень і 25 229 пацієнтів, вік — на сім досліджень і 4 314, а вихідний HbA1c — лише на чотири дослідження і 1 886. Порівняння за статтю, що охопило шість досліджень і 19 906 пацієнтів, є одним із найкраще забезпечених даними, тож висновок про наявність різниці там спирається на більше доказів, ніж кілька висновків про її відсутність. Автори зазначили, що групи, недостатньо представлені в клінічних дослідженнях, потребують подальшого вивчення.",
              "cite": "Школа громадського здоров’я Блумберга, Університет Джонса Гопкінса · Пресреліз, 3 березня 2026",
              "url": "https://publichealth.jhu.edu/2026/glp-1-weight-loss-drugs-comparably-effective-for-patients-across-age-race-and-starting-weight"
            }
          ]
        },
        {
          "t": "links",
          "title": "Дотичне читання",
          "items": [
            {
              "name": "Препарати GLP-1 спалюють переважно жир, а не м’язи — метааналіз International Journal of Obesity",
              "url": "/ua/blog/glp1-weight-loss-drugs-fat-not-muscle/",
              "desc": "Супутнє питання: з чого насправді складається втрачена вага і як зберегти м’язи, поки вона йде."
            },
            {
              "name": "Гормональна терапія плюс тирзепатид: на 35% більше втрати ваги після менопаузи",
              "url": "/ua/blog/tirzepatide-hrt-weight-loss-menopause-2026/",
              "desc": "Препарат, який цей огляд свідомо не включив, і які дані є щодо нього після менопаузи."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи діють препарати GLP-1 краще на жінок, ніж на чоловіків?",
          "a": "У середньому жінки втрачали в дослідженнях більше ваги: 10,9% початкової маси тіла проти 6,8% у чоловіків — за даними шести досліджень і 19 906 пацієнтів в огляді JAMA Internal Medicine 2026 року. Це реальна і статистично значуща різниця приблизно в чотири відсоткові пункти. Але це середнє значення по тисячах людей, а не прогноз для конкретної людини, і той самий огляд показав, що в усьому іншому втрата ваги була подібною за віком, расою та етнічністю, початковим ІМТ і вихідним контролем цукру."
        },
        {
          "q": "Чи стосується це Mounjaro та Zepbound?",
          "a": "Ні. Цей огляд охопив агоністи рецепторів GLP-1, як-от семаглутид, і спеціально не включав тирзепатид — препарат, відомий як Mounjaro і Zepbound, — бо він діє ще й на другий кишковий гормон, окрім GLP-1. Тирзепатид має власну доказову базу, якої ці цифри не описують."
        }
      ]
    }
  },
  {
    "slug": "extended-release-minoxidil-female-hair-loss",
    "date": "2026-08-11",
    "image": "/images/extended-release-minoxidil-female-hair-loss.jpg",
    "cats": [
      "skin",
      "perimenopause"
    ],
    "en": {
      "cat": "Skin & beauty",
      "title": "A new oral minoxidil pill improved hair growth in women — but the trial had no control group",
      "seoTitle": "Oral Minoxidil for Female Hair Loss: What the Trial Shows",
      "metaDesc": "An extended-release oral minoxidil raised hair counts in 28 women at 6 months. The trial was open-label with no placebo — what that means for the result.",
      "excerpt": "A phase 2 trial of extended-release oral minoxidil reported real gains in hair count for women with female-pattern hair loss at six months — in an open-label study with no placebo group, released by press release rather than peer review.",
      "meta": "11 August 2026 · 5 min read",
      "lead": "Hair thinning is one of the least-discussed changes of midlife. The American Academy of Dermatology calls female-pattern hair loss the most common cause of hair loss in women, and says it usually begins in the forties, fifties or sixties, with hormones likely playing a part. The approved options have barely moved in decades — so a new oral minoxidil pill made headlines in July. The results are encouraging. The trial behind them is weaker than the coverage suggested, and both of those things are worth knowing before you take anything to your GP.",
      "blocks": [
        {
          "t": "p",
          "text": "On 15 July 2026 the US company Veradermics reported six-month interim results for VDPHL01, an extended-release tablet form of minoxidil, in 28 women with female-pattern hair loss. Women taking 4.5 mg once a day gained an average of 22.7 non-vellus hairs per square centimetre in the measured area of scalp; those taking 4.5 mg twice a day gained 23.3. Around nine in ten rated their own hair coverage as improved or much improved — though those percentages, 88.9% and 90.0%, work out as eight women out of nine and nine out of ten, so that particular result rests on roughly nineteen of the twenty-eight. For a condition whose approved options have barely changed in decades, that is a genuinely interesting signal."
        },
        {
          "t": "p",
          "text": "Here is the part most of the coverage skipped: there was no control group. The trial registration on ClinicalTrials.gov lists it as [an open-label, single-group study](https://clinicaltrials.gov/study/NCT06527365), with women assigned to once- or twice-daily dosing alternately rather than at random — several reports called the women \"randomised\", and the registry does not support that word. Nobody was blinded and nobody took a placebo, so there is no way to separate the drug's effect from the natural shedding cycle, from more flattering follow-up photographs, or from the well-documented tendency of people who know they are being treated to report that things have improved. One small thing tells you what kind of data this is: the company described the same cohort as 22 women in a release last November and as 28 in July. The results also arrived by company press release and a filing to the US securities regulator — not in a peer-reviewed journal and not at a scientific meeting. And the trial's own main endpoint is at twelve months, which has not been reported yet."
        },
        {
          "t": "p",
          "text": "The \"fewer side effects\" line needs the same care. It is a design argument, not a measurement: ordinary oral minoxidil peaks in the blood about two hours after a dose and clears within about four, and the extended-release version is built to flatten that peak — staying above the level that acts on hair follicles while staying below the level that acts on the heart. Plausible, but nobody has run it head-to-head against the ordinary version, and with no comparator arm in this trial there is nothing to compare the side-effect rate against. Within the 28 women, 53.6% had at least one side effect on treatment, 21.4% grew unwanted hair elsewhere, 7.1% had swelling in the legs or ankles, there were no serious adverse events, and one woman stopped taking it."
        },
        {
          "t": "p",
          "text": "It is also worth being clear about what would actually be new here. Low-dose oral minoxidil is already prescribed off-label for female-pattern hair loss, and a [JAMA Dermatology consensus statement from January 2025](https://jamanetwork.com/journals/jamadermatology/article-abstract/2826573) — 43 hair specialists across 12 countries — set out guidance for doing it, covering 0.625 to 5 mg a day, with 1.25 and 2.5 mg the doses most often used. This trial gave 4.5 mg once or twice daily, so the twice-daily arm at 9 mg a day sits above the range that consensus covers at all — \"low-dose oral minoxidil\" is not a description of what was tested here. What a successful programme would deliver is an approved oral option for women, where today the only approved treatments are [topical minoxidil 2% and 5%](https://www.aad.org/public/diseases/hair-loss/types/female-pattern). The trial that could support approval is a much better one: 552 women, randomised, quadruple-masked, currently recruiting, with the company expecting topline results in the first half of 2027. That is the readout worth waiting for."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Extended-release oral minoxidil increased hair count at six months in 28 women — in an uncontrolled trial.",
              "detail": "Veradermics reported interim six-month data from Study 207 (NCT06527365) on 15 July 2026 via press release and an SEC filing. Mean increase in non-vellus target-area hair count was 22.7 hairs/cm² on 4.5 mg once daily and 23.3 hairs/cm² on 4.5 mg twice daily, with 88.9% and 90.0% of women respectively rating coverage improved or much improved — figures that correspond to 8 of 9 and 9 of 10, implying roughly 19 of the 28 were evaluable for that outcome; per-arm numbers were not disclosed. Veradermics described the same cohort as 22 women in a November 2025 release and as 28 in July 2026. The study is Phase 2, open-label and single-group with no placebo or active comparator, and the registry records dosing as assigned alternately rather than randomised, so the improvement cannot be attributed to the drug with confidence. Baseline counts, standard deviations and confidence intervals were not disclosed. The registered primary endpoint is at month 12 and has not reported. The results are not peer-reviewed and were not presented at a scientific meeting. A Phase 3 trial in 552 women (NCT07146022) — randomised and quadruple-masked — is recruiting, with topline results expected in the first half of 2027.",
              "cite": "Veradermics, Inc. · Company-reported Phase 2 interim data, 15 July 2026",
              "url": "https://www.businesswire.com/news/home/20260715636372/en/Veradermics-Oral-VDPHL01-Delivers-Positive-Study-207-Phase-2-Clinical-Trial-Results-in-Female-Pattern-Hair-Loss-Ahead-of-Upcoming-Phase-23-Study-306-Readout"
            },
            {
              "claim": "Ageing scalp shows more inflammation, fibrosis and cellular senescence — descriptive biology, not a treatment finding.",
              "detail": "Researchers funded by Estée Lauder presented two posters in May 2026 — one at the Society for Investigative Dermatology in Chicago, one at the World Congress for Hair Research in Seoul — reporting that dermal fibroblasts in aged female scalp differ molecularly from young scalp, with increased inflammation, fibrosis and senescence and reduced metabolic activity, which may shorten the hair growth cycle. The Seoul poster used spatial transcriptomics and single-cell RNA sequencing on scalp biopsies from young and aged female donors; the Chicago abstract did not disclose its methodology. Neither disclosed donor numbers or numerical results, neither is peer-reviewed, and both are manufacturer-funded conference abstracts describing biology rather than testing any treatment — so no product claim follows from them.",
              "cite": "The Estée Lauder Companies · Conference posters, May 2026 (not peer-reviewed)",
              "url": "https://www.elcompanies.com/en/news-and-media/newsroom/press-releases/2026/5-22-2026"
            }
          ]
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "2026 review confirms HRT restores skin collagen, elasticity and hydration",
              "url": "/blog/hrt-restores-skin-collagen-2026-review/",
              "desc": "The stronger end of the evidence on what hormone therapy does to skin — and how a good review differs from a press release."
            },
            {
              "name": "“Oestrogen skincare” is becoming its own category — and two very different products share the name",
              "url": "/blog/topical-oestrogen-skincare-menopause/",
              "desc": "Another midlife beauty claim worth reading the label on before you spend anything."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Should I ask my doctor about oral minoxidil for hair loss?",
          "a": "It is a reasonable conversation to have, because low-dose oral minoxidil is already prescribed off-label for female-pattern hair loss and there is a published expert consensus on how to do it — you do not have to wait for this particular tablet. It is prescription-only, and your doctor will want to consider blood pressure, any heart or kidney problems, and the fact that unwanted hair growth elsewhere on the body is common. It should be avoided in pregnancy or if you are planning one. Two other things are true of every minoxidil treatment: it takes six to twelve months to judge, and it only works for as long as you keep taking it."
        },
        {
          "q": "Is this the same as the minoxidil I can already buy?",
          "a": "No. What you can buy over the counter is topical minoxidil 2% or 5%, applied to the scalp, and that remains the only treatment formally approved for women. VDPHL01 is a tablet you swallow, it is not approved or available anywhere, and at 4.5 mg once or twice daily the trial dose is well above the 1.25–2.5 mg a day usually used when doctors prescribe oral minoxidil off-label. Nothing about the July announcement changes what is on the shelf today."
        }
      ]
    },
    "ua": {
      "cat": "Краса та шкіра",
      "title": "Нова таблетка міноксидилу покращила ріст волосся в жінок — але в дослідженні не було контрольної групи",
      "seoTitle": "Міноксидил у таблетках при випадінні волосся в жінок",
      "metaDesc": "Пероральний міноксидил з подовженим вивільненням збільшив кількість волосся у 28 жінок за 6 місяців. Але дослідження було відкритим і без плацебо — що це означає.",
      "excerpt": "Дослідження 2-ї фази перорального міноксидилу з подовженим вивільненням показало реальний приріст волосся в жінок з алопецією за жіночим типом за шість місяців — у відкритому дослідженні без групи плацебо, оприлюдненому пресрелізом, а не через рецензування.",
      "meta": "11 серпня 2026 · 5 хв читання",
      "lead": "Порідіння волосся — одна з найменш обговорюваних змін середини життя. Американська академія дерматології називає алопецію за жіночим типом найпоширенішою причиною випадіння волосся в жінок і зазначає, що зазвичай вона починається у сорок, п'ятдесят чи шістдесят років, і гормони, ймовірно, відіграють тут роль. Схвалені варіанти лікування майже не змінювалися десятиліттями — тож нова таблетка міноксидилу в липні потрапила в заголовки. Результати обнадійливі. Дослідження за ними слабше, ніж це подавали в новинах, і варто знати обидві ці речі, перш ніж іти з цим до лікаря.",
      "blocks": [
        {
          "t": "p",
          "text": "15 липня 2026 року американська компанія Veradermics оприлюднила проміжні шестимісячні результати для VDPHL01 — таблетки міноксидилу з подовженим вивільненням — у 28 жінок з андрогенетичною алопецією за жіночим типом. У тих, хто приймав 4,5 мг раз на день, кількість невелюсного волосся у вимірюваній ділянці шкіри голови зросла в середньому на 22,7 волосини на квадратний сантиметр; у тих, хто приймав 4,5 мг двічі на день, — на 23,3. Приблизно дев'ять із десяти оцінили густоту власного волосся як покращену або значно покращену — хоча ці відсотки, 88,9% і 90,0%, відповідають восьми жінкам із дев'яти та дев'яти із десяти, тож саме цей результат спирається приблизно на дев'ятнадцять із двадцяти восьми. Для стану, схвалені методи лікування якого майже не змінювалися десятиліттями, це справді цікавий сигнал."
        },
        {
          "t": "p",
          "text": "Ось те, що більшість публікацій оминула: контрольної групи не було. У реєстрі ClinicalTrials.gov це [відкрите дослідження з однією групою](https://clinicaltrials.gov/study/NCT06527365), причому жінок розподіляли на приймання раз чи двічі на день по черзі, а не випадково — низка видань написала, що жінок «рандомізували», і реєстр цього слова не підтверджує. Ніхто не був засліплений і ніхто не приймав плацебо, тож немає способу відокремити дію препарату від природного циклу випадіння волосся, від вигідніших фотографій на контрольному візиті чи від добре задокументованої схильності людей, які знають, що їх лікують, повідомляти про покращення. Одна дрібниця показує, що це за дані: ту саму групу компанія описувала як 22 жінки в релізі в листопаді й як 28 — у липні. Результати також з'явилися через пресреліз компанії та подання до регулятора цінних паперів США — не в рецензованому журналі й не на науковій конференції. А головна кінцева точка самого дослідження — на дванадцятому місяці, і її ще не оприлюднили."
        },
        {
          "t": "p",
          "text": "Теза про «менше побічних ефектів» потребує такої ж обережності. Це аргумент від конструкції препарату, а не вимірювання: звичайний пероральний міноксидил досягає піку в крові приблизно через дві години після прийому й виводиться приблизно за чотири, а версія з подовженим вивільненням має цей пік згладити — залишаючись вище рівня, який діє на волосяні фолікули, і нижче того, який діє на серце. Правдоподібно, але прямого порівняння зі звичайною формою ніхто не проводив, а без групи порівняння в цьому дослідженні частоту побічних ефектів просто немає з чим зіставити. Серед 28 жінок у 53,6% був щонайменше один побічний ефект під час лікування, у 21,4% з'явилося небажане волосся в інших місцях, у 7,1% — набряки ніг, серйозних небажаних явищ не було, і одна жінка припинила приймання."
        },
        {
          "t": "p",
          "text": "Варто чітко сказати й про те, що тут насправді нове. Пероральний міноксидил у низьких дозах уже призначають off-label при алопеції за жіночим типом, і [консенсусна заява JAMA Dermatology від січня 2025 року](https://jamanetwork.com/journals/jamadermatology/article-abstract/2826573) — 43 фахівці з волосся з 12 країн — виклала рекомендації, як це робити, охоплюючи дози від 0,625 до 5 мг на добу, із 1,25 та 2,5 мг як найчастішими. У цьому дослідженні давали 4,5 мг раз або двічі на день, тож група з прийомом двічі на день (9 мг на добу) взагалі виходить за межі того діапазону — «низька доза» не описує того, що тут перевіряли. Що дала б успішна програма, так це схвалений пероральний варіант для жінок: сьогодні єдине офіційно схвалене лікування — це [місцевий міноксидил 2% і 5%](https://www.aad.org/public/diseases/hair-loss/types/female-pattern). Дослідження, яке могло б підтвердити схвалення, набагато якісніше: 552 жінки, рандомізація, четверне засліплення, набір триває, і компанія очікує основні результати в першій половині 2027 року. Саме на цей звіт варто чекати."
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Пероральний міноксидил з подовженим вивільненням збільшив кількість волосся за шість місяців у 28 жінок — у дослідженні без контрольної групи.",
              "detail": "Veradermics оприлюднила проміжні шестимісячні дані дослідження 207 (NCT06527365) 15 липня 2026 року через пресреліз і подання до SEC. Середній приріст невелюсного волосся у цільовій ділянці становив 22,7 волосини/см² на 4,5 мг раз на день і 23,3 волосини/см² на 4,5 мг двічі на день; 88,9% і 90,0% жінок відповідно оцінили густоту як покращену або значно покращену — ці цифри відповідають 8 із 9 та 9 із 10, тобто приблизно 19 із 28 жінок були придатні для оцінки цього показника; кількості по групах не оприлюднено. Ту саму групу Veradermics описувала як 22 жінки в релізі в листопаді 2025 року й як 28 — у липні 2026 року. Дослідження має 2-гу фазу, є відкритим і одногруповим, без плацебо чи активного препарату порівняння, а реєстр фіксує розподіл доз по черзі, а не рандомізовано, — тож приписати покращення саме препарату впевнено не можна. Вихідні показники, стандартні відхилення та довірчі інтервали не оприлюднені. Зареєстрована головна кінцева точка — на 12-му місяці, її ще не подано. Результати не рецензовані й не представлені на науковій конференції. Дослідження 3-ї фази за участю 552 жінок (NCT07146022) — рандомізоване, з четверним засліпленням — триває, основні результати очікують у першій половині 2027 року.",
              "cite": "Veradermics, Inc. · Проміжні дані 2-ї фази від компанії, 15 липня 2026",
              "url": "https://www.businesswire.com/news/home/20260715636372/en/Veradermics-Oral-VDPHL01-Delivers-Positive-Study-207-Phase-2-Clinical-Trial-Results-in-Female-Pattern-Hair-Loss-Ahead-of-Upcoming-Phase-23-Study-306-Readout"
            },
            {
              "claim": "У шкірі голови з віком більше запалення, фіброзу й клітинного старіння — це описова біологія, а не дані про лікування.",
              "detail": "Дослідники, яких фінансує Estée Lauder, представили у травні 2026 року два постери — один на з'їзді Society for Investigative Dermatology у Чикаго, інший на World Congress for Hair Research у Сеулі. У них ідеться, що дермальні фібробласти у шкірі голови старших жінок молекулярно відрізняються від молодої шкіри: більше запалення, фіброзу й старіння клітин, менша метаболічна активність, що може вкорочувати цикл росту волосся. Сеульський постер використав просторову транскриптоміку й секвенування РНК окремих клітин на біоптатах шкіри голови молодих і старших донорок; чиказька теза методологію не розкрила. Ані кількості донорок, ані числових результатів не наведено, жодна робота не рецензована, і обидві є конференційними тезами, профінансованими виробником, що описують біологію, а не перевіряють якесь лікування, — тож жодних тверджень про продукт з них не випливає.",
              "cite": "The Estée Lauder Companies · Постери конференцій, травень 2026 (без рецензування)",
              "url": "https://www.elcompanies.com/en/news-and-media/newsroom/press-releases/2026/5-22-2026"
            }
          ]
        },
        {
          "t": "links",
          "title": "Читайте також",
          "items": [
            {
              "name": "Огляд 2026 року підтверджує: ЗГТ відновлює колаген, еластичність і зволоженість шкіри",
              "url": "/ua/blog/hrt-restores-skin-collagen-2026-review/",
              "desc": "Сильніший бік доказів про вплив гормональної терапії на шкіру — і чим добрий огляд відрізняється від пресрелізу."
            },
            {
              "name": "«Естрогенова косметика» стає окремою категорією — і під цією назвою продають два різні продукти",
              "url": "/ua/blog/topical-oestrogen-skincare-menopause/",
              "desc": "Ще одна обіцянка з категорії краси після 40, етикетку якої варто прочитати до покупки."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи варто запитати лікаря про пероральний міноксидил від випадіння волосся?",
          "a": "Це розумна тема для розмови, бо пероральний міноксидил у низьких дозах уже призначають off-label при алопеції за жіночим типом, і є опублікований експертний консенсус про те, як це робити, — чекати саме на цю таблетку не обов'язково. Препарат рецептурний, і лікар захоче врахувати тиск, проблеми з серцем чи нирками та те, що небажане оволосіння в інших місцях трапляється часто. Його слід уникати під час вагітності або якщо ви її плануєте. Ще два факти справедливі для будь-якого міноксидилу: оцінювати результат можна лише через шість-дванадцять місяців, і він працює рівно доти, доки ви його приймаєте."
        },
        {
          "q": "Це те саме, що міноксидил, який можна купити вже зараз?",
          "a": "Ні. Без рецепта продають місцевий міноксидил 2% або 5%, який наносять на шкіру голови, і саме він залишається єдиним офіційно схваленим лікуванням для жінок. VDPHL01 — це таблетка, вона ніде не схвалена й недоступна, а доза в дослідженні (4,5 мг раз або двічі на день) помітно вища за 1,25–2,5 мг на добу, які зазвичай застосовують, коли лікарі призначають пероральний міноксидил off-label. Липневе оголошення нічого не змінює в тому, що є на полиці сьогодні."
        }
      ]
    }
  },
  {
    "slug": "type-2-diabetes-menopause-symptoms",
    "date": "2026-08-10",
    "image": "/images/type-2-diabetes-menopause-symptoms.jpg",
    "cats": [
      "diabetes",
      "perimenopause"
    ],
    "en": {
      "cat": "Diabetes",
      "title": "Type 2 diabetes is linked to heavier menopause symptoms, a Korean study finds",
      "seoTitle": "Type 2 Diabetes Linked to Worse Menopause Symptoms",
      "metaDesc": "A study of 296 Korean women found those with type 2 diabetes reported more numerous, more severe menopause symptoms — clearest after menopause. What it means.",
      "excerpt": "A new study of 296 women aged 40–64 found those with type 2 diabetes or prediabetes reported more numerous and more severe menopause symptoms than women without — with the clearest difference after menopause.",
      "meta": "10 August 2026 · 3 min read",
      "lead": "Diabetes care and menopause care usually happen in separate appointments, if the second one happens at all. A new study published in Menopause suggests they belong in the same conversation — because women with type 2 diabetes appear to carry a heavier symptom load through the transition.",
      "blocks": [
        {
          "t": "p",
          "text": "The study, published on 5 August 2026 in Menopause (the journal of The Menopause Society), surveyed 296 South Korean women aged 40–64. Researchers grouped them by glucose status using fasting glucose and HbA1c — normal, prediabetes or type 2 diabetes — and measured menopause symptoms with the Midlife Women's Symptom Index, a validated questionnaire covering physical, psychological and vasomotor complaints like hot flushes and night sweats."
        },
        {
          "t": "p",
          "text": "Across every menopausal stage, women in the diabetes and prediabetes groups reported more symptoms, and more severe ones, than women with normal glucose. The honest nuance: the gap only reached statistical significance in postmenopausal women. In a sample of ~300 split across stages and glucose groups, that pattern — consistently worse everywhere, provable after menopause — most likely reflects limited numbers rather than a symptom burden that suddenly appears late, but this study alone can't tell those apart."
        },
        {
          "t": "p",
          "text": "Why would blood sugar and menopause symptoms travel together? The traffic runs in both directions. Falling oestrogen worsens insulin sensitivity — something I've felt in my own numbers and written about in [what perimenopause really does to blood sugar](/blog/perimenopause-diabetes-blood-sugar/) — while cardiovascular and metabolic risk factors, including diabetes, hypertension and abnormal cholesterol, have repeatedly been linked to more frequent hot flushes. The Menopause Society's medical director, Dr Stephanie Faubion, put the clinical takeaway plainly: women with diabetes may carry a greater burden of menopause symptoms, and those symptoms need to be recognised and addressed, not filed under \"just your diabetes\"."
        },
        {
          "t": "p",
          "text": "The study's limits are worth naming: it's cross-sectional (a snapshot, so it can't prove which way the causation runs), it relied on an online survey, and 296 women in one country is a modest base. But its practical message doesn't need certainty about mechanism. If you live with type 2 diabetes — or prediabetes — and you're in your forties or fifties, your hot flushes, sleep disruption and mood changes deserve their own assessment. Treating the menopause side can also make the diabetes side easier to manage: symptoms like broken sleep push insulin resistance the wrong way, as I covered in [what less sleep did to women's insulin sensitivity](/blog/sleep-insulin-resistance-women/)."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Women with type 2 diabetes or prediabetes reported more numerous and more severe menopause symptoms.",
              "detail": "A cross-sectional online survey of 296 South Korean women aged 40–64, published in Menopause (5 August 2026), stratified participants by fasting glucose and HbA1c and measured symptoms with the validated Midlife Women's Symptom Index. Symptom prevalence and severity were higher in the diabetes/prediabetes groups across all menopausal stages, reaching statistical significance in the postmenopausal stage. As an observational snapshot it cannot establish causation; the authors call for longitudinal studies of the underlying biological and psychosocial mechanisms.",
              "cite": "Menopause (The Menopause Society) · Cross-sectional study, August 2026",
              "url": "https://medicalxpress.com/news/2026-08-worse-menopause-symptoms-accompany-diabetes.html"
            }
          ]
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Perimenopause & diabetes: what's really happening to your blood sugar",
              "url": "/blog/perimenopause-diabetes-blood-sugar/",
              "desc": "The other direction of the same link — how the menopause transition changes glucose control, from 23 years of living with it."
            },
            {
              "name": "Anxiety and brain fog, not hot flashes, are now women's top menopause symptoms",
              "url": "/blog/anxiety-brain-fog-top-menopause-symptom/",
              "desc": "What large surveys say women actually struggle with most during the transition."
            },
            {
              "name": "What new research says about type 2 diabetes",
              "url": "/blog/type-2-diabetes-research/",
              "desc": "The wider evidence on managing type 2 diabetes — sleep, diet, medication and more."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Does diabetes make menopause worse, or does menopause make diabetes worse?",
          "a": "The evidence increasingly says both. Falling oestrogen reduces insulin sensitivity, which makes glucose harder to control through the transition — and metabolic problems like diabetes, high blood pressure and abnormal cholesterol are linked to more frequent and severe symptoms such as hot flushes. This study is a snapshot, so it can't prove which direction dominates, but clinically the answer is the same either way: the two conditions should be assessed and managed together."
        },
        {
          "q": "I have type 2 diabetes and menopause symptoms — what should I actually do?",
          "a": "Raise both at the same appointment, explicitly. Ask for your menopause symptoms to be assessed in their own right rather than attributed to diabetes, and discuss the full range of options — lifestyle measures, non-hormonal treatments and HRT, which many women with well-managed type 2 diabetes can use. It's also worth prioritising sleep: night sweats that break your sleep worsen insulin resistance, so treating symptoms can genuinely help your glucose numbers too."
        }
      ]
    },
    "ua": {
      "cat": "Діабет",
      "title": "Діабет 2 типу пов'язаний із важчими симптомами менопаузи — корейське дослідження",
      "seoTitle": "Діабет 2 типу та важчі симптоми менопаузи",
      "metaDesc": "Дослідження 296 кореянок: у жінок із діабетом 2 типу симптомів менопаузи більше і вони важчі — найпомітніше після менопаузи. Що це означає на практиці.",
      "excerpt": "Нове дослідження 296 жінок віком 40–64 роки виявило: ті, хто має діабет 2 типу або предіабет, повідомляли про численніші та важчі симптоми менопаузи — з найчіткішою різницею після менопаузи.",
      "meta": "10 серпня 2026 · 3 хв читання",
      "lead": "Лікування діабету і менопауза зазвичай живуть у різних кабінетах — якщо до другого взагалі доходить. Нове дослідження, опубліковане в журналі Menopause, свідчить, що їм місце в одній розмові: жінки з діабетом 2 типу, схоже, несуть важчий тягар симптомів через перехідний період.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідження, опубліковане 5 серпня 2026 року в Menopause (журналі The Menopause Society), охопило 296 південнокорейських жінок віком 40–64 роки. Дослідники розподілили їх за станом глюкозного обміну на основі глюкози натще та HbA1c — норма, предіабет або діабет 2 типу — і виміряли симптоми менопаузи за Midlife Women's Symptom Index, валідованим опитувальником, що охоплює фізичні, психологічні та вазомоторні скарги, як-от припливи та нічна пітливість."
        },
        {
          "t": "p",
          "text": "На кожній стадії менопаузи жінки з груп діабету та предіабету повідомляли про більше симптомів — і про важчі, — ніж жінки з нормальною глюкозою. Чесний нюанс: різниця досягла статистичної значущості лише в постменопаузі. У вибірці з ~300 жінок, поділеній на стадії та глюкозні групи, така картина — стабільно гірше всюди, доказово після менопаузи — найімовірніше відображає обмежену кількість учасниць, а не тягар симптомів, що раптом з'являється пізно. Але саме це дослідження розрізнити цього не може."
        },
        {
          "t": "p",
          "text": "Чому рівень цукру і симптоми менопаузи йдуть поруч? Рух тут двосторонній. Падіння естрогену погіршує чутливість до інсуліну — я відчула це на власних показниках і писала про це в дописі [що перименопауза насправді робить із цукром у крові](/ua/blog/perimenopause-diabetes-blood-sugar/), — а серцево-судинні та метаболічні фактори ризику, зокрема діабет, гіпертонія й порушення холестерину, неодноразово пов'язували з частішими припливами. Медична директорка The Menopause Society докторка Стефані Фобіон сформулювала клінічний висновок прямо: жінки з діабетом можуть нести більший тягар симптомів менопаузи, і ці симптоми треба розпізнавати й лікувати, а не списувати на «це просто ваш діабет»."
        },
        {
          "t": "p",
          "text": "Обмеження дослідження варто назвати: воно поперечне (моментальний знімок, тож не доводить напрямок причинності), спиралося на онлайн-опитування, а 296 жінок з однієї країни — скромна база. Але практичний висновок не потребує певності щодо механізму. Якщо ви живете з діабетом 2 типу — або предіабетом — і вам за сорок чи п'ятдесят, ваші припливи, порушення сну та зміни настрою заслуговують на окрему оцінку. Лікування менопаузального боку може полегшити й діабетичний: такі симптоми, як розірваний сон, штовхають інсулінорезистентність не в той бік — я розбирала це в дописі [що менше сну зробило з чутливістю жінок до інсуліну](/ua/blog/sleep-insulin-resistance-women/)."
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Жінки з діабетом 2 типу або предіабетом повідомляли про численніші та важчі симптоми менопаузи.",
              "detail": "Поперечне онлайн-опитування 296 південнокорейських жінок віком 40–64 роки, опубліковане в Menopause (5 серпня 2026), розподілило учасниць за глюкозою натще та HbA1c і виміряло симптоми валідованим Midlife Women's Symptom Index. Поширеність і тяжкість симптомів були вищими в групах діабету/предіабету на всіх стадіях менопаузи, зі статистичною значущістю в постменопаузі. Як обсерваційний знімок воно не може встановити причинність; автори закликають до лонгітюдних досліджень біологічних і психосоціальних механізмів.",
              "cite": "Menopause (The Menopause Society) · Поперечне дослідження, серпень 2026",
              "url": "https://medicalxpress.com/news/2026-08-worse-menopause-symptoms-accompany-diabetes.html"
            }
          ]
        },
        {
          "t": "links",
          "title": "Схожі новини",
          "items": [
            {
              "name": "Перименопауза і діабет: що насправді відбувається з вашим цукром у крові",
              "url": "/ua/blog/perimenopause-diabetes-blood-sugar/",
              "desc": "Той самий зв'язок з іншого боку — як перехідний період змінює контроль глюкози, з 23 років власного досвіду."
            },
            {
              "name": "Тривожність і туман у голові, а не припливи — тепер головні симптоми менопаузи",
              "url": "/ua/blog/anxiety-brain-fog-top-menopause-symptom/",
              "desc": "Що великі опитування кажуть про те, з чим жінки насправді борються найбільше."
            },
            {
              "name": "Що нові дослідження кажуть про діабет 2 типу",
              "url": "/ua/blog/type-2-diabetes-research/",
              "desc": "Ширші дані про контроль діабету 2 типу — сон, харчування, ліки та інше."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Це діабет погіршує менопаузу чи менопауза погіршує діабет?",
          "a": "Дані дедалі впевненіше кажуть: і те, і те. Падіння естрогену знижує чутливість до інсуліну, тож контролювати глюкозу в перехідний період важче, — а метаболічні проблеми, як-от діабет, гіпертонія та порушення холестерину, пов'язані з частішими й важчими симптомами на кшталт припливів. Це дослідження — моментальний знімок, тож воно не доводить, який напрямок переважає. Але клінічно відповідь однакова в обох випадках: обидва стани треба оцінювати й вести разом."
        },
        {
          "q": "У мене діабет 2 типу і симптоми менопаузи — що робити практично?",
          "a": "Порушіть обидві теми на одному прийомі, прямо. Попросіть оцінити симптоми менопаузи окремо, а не списувати їх на діабет, і обговоріть увесь спектр опцій — зміни способу життя, негормональні методи та ЗГТ, яку багато жінок із добре контрольованим діабетом 2 типу можуть використовувати. Варто також поставити сон у пріоритет: нічна пітливість, що розриває сон, погіршує інсулінорезистентність, тож лікування симптомів може реально покращити й ваші показники глюкози."
        }
      ]
    }
  },
  {
    "slug": "kefir-fibre-synbiotic-inflammation",
    "date": "2026-08-10",
    "image": "/images/kefir-fibre-synbiotic-inflammation.jpg",
    "cats": [
      "nutrition"
    ],
    "en": {
      "cat": "Nutrition",
      "title": "Kefir plus fibre beat omega-3 at lowering inflammation in a six-week trial",
      "seoTitle": "Kefir + Fibre vs Omega-3: What a New Trial Found",
      "metaDesc": "A six-week Nottingham trial found kefir plus a diverse fibre mix lowered seven inflammatory proteins — omega-3 moved just one. What the study really shows.",
      "excerpt": "In a University of Nottingham trial, daily kefir plus a diverse prebiotic fibre mix significantly reduced seven inflammatory proteins in six weeks — omega-3 supplements moved just one. The honest caveats matter, though.",
      "meta": "10 August 2026 · 3 min read",
      "lead": "Fish-oil capsules are what most people reach for when they hear \"anti-inflammatory\". A new University of Nottingham trial suggests a much older combination — fermented milk and plenty of fibre — may do more, at least on blood markers.",
      "blocks": [
        {
          "t": "p",
          "text": "Researchers led by Dr Amrita Vijay ran a six-week, four-arm trial in just over a hundred healthy adults, published in the Journal of Translational Medicine. One group drank 170 ml of goat's-milk kefir a day together with 10 g of a diverse prebiotic fibre blend — a \"synbiotic\" combining 27 live bacterial cultures with 18 different fibre types. The comparison groups took 500 mg of omega-3 a day, 20 g of inulin fibre alone, or nothing. Inflammation was measured properly, with a 96-protein blood panel."
        },
        {
          "t": "p",
          "text": "The result was one-sided. The kefir-plus-fibre group showed significant reductions in seven inflammatory proteins — including IL-6 and interferon-gamma, two of the most-studied drivers of chronic inflammation — while the omega-3 and fibre-only groups each moved just one (TNF-alpha). The synbiotic group also saw total, LDL and non-HDL cholesterol fall, which didn't happen with omega-3. And levels of butyrate — a short-chain fatty acid made when gut bacteria ferment fibre — rose, with the rise tracking the fall in IL-6, a plausible mechanism for why feeding your microbes calms inflammation."
        },
        {
          "t": "p",
          "text": "Now the honest part. Some coverage ran with \"250% better than omega-3\" — that number isn't in the paper; it comes from counting how many markers moved, which is not an effect size. The trial was also small (only 20 people took the synbiotic), neither participants nor researchers were blinded, there was no true placebo, the comparison groups were older on average, and the kefir-fibre product was supplied by the company that sells it. None of that makes the finding wrong — the biology is coherent and the markers were measured objectively — but it does make this a promising early result, not a settled one."
        },
        {
          "t": "p",
          "text": "What I take from it is the pattern, not the product: fermented food plus a wide variety of fibre feeds the gut bacteria that produce butyrate, and that combination outperformed a supplement in a head-to-head test. That fits everything else emerging in this space — I've written about the wider evidence in [gut bacteria, fibre and hormones](/blog/gut-microbiome-precision-nutrition-women-2026/), and about why the gut matters specifically for oestrogen in [your gut bacteria recycle oestrogen](/blog/estrobolome-gut-oestrogen-menopause/). For midlife women, where falling oestrogen already nudges inflammation and insulin resistance upwards, a daily glass of kefir and genuinely varied fibre is a cheap, low-risk habit with increasingly good company in the literature."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Kefir plus a diverse fibre mix reduced seven inflammatory proteins in six weeks; omega-3 and fibre alone each reduced one.",
              "detail": "A four-arm University of Nottingham trial (~104 healthy adults, 6 weeks) compared a daily synbiotic (170 ml goat's-milk kefir + 10 g prebiotic mix; 27 live cultures, 18 fibre types) against 500 mg omega-3, 20 g inulin, and control, using a 96-protein inflammation panel. The synbiotic significantly reduced 7 proteins including IL-6 and IFN-gamma, and lowered total, LDL and non-HDL cholesterol; omega-3 and inulin each reduced only TNF-alpha. Butyrate rose in the synbiotic group and correlated with the IL-6 fall. Limitations: small arms (n=20 synbiotic), no blinding, no true placebo, older comparison groups, and the synbiotic was supplied by its manufacturer.",
              "cite": "Journal of Translational Medicine · Randomised trial, published October 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12529832/"
            }
          ]
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Gut bacteria, fibre and hormones: what 2026's precision-nutrition research means for women",
              "url": "/blog/gut-microbiome-precision-nutrition-women-2026/",
              "desc": "The bigger picture on why microbiome diversity keeps showing up in women's-health research."
            },
            {
              "name": "Your gut bacteria recycle oestrogen — and menopause changes which bacteria you have",
              "url": "/blog/estrobolome-gut-oestrogen-menopause/",
              "desc": "The estrobolome: how the same fibre-fed bacteria influence hormone levels in midlife."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Should I stop taking omega-3 supplements?",
          "a": "Not on the strength of one small trial. Omega-3 still has evidence behind it for specific uses — notably high triglycerides, where it may be prescribed — and this study measured inflammatory blood markers in healthy adults, not heart attacks or any illness. If your omega-3 was recommended by a clinician, keep taking it and ask them. What the trial does suggest is that fermented food plus varied fibre is worth adding, not that supplements must go."
        },
        {
          "q": "Does it have to be goat's-milk kefir with a special fibre mix?",
          "a": "The trial used one commercial product, so strictly the evidence is about that combination. But the proposed mechanism — live cultures plus a wide variety of fermentable fibre raising butyrate — isn't brand-specific. Any live-culture kefir, plus fibre diversity from vegetables, legumes, oats, seeds and whole grains, follows the same logic. If you have diabetes, plain unsweetened kefir is the sensible choice; flavoured versions can carry a surprising amount of sugar."
        }
      ]
    },
    "ua": {
      "cat": "Харчування",
      "title": "Кефір із клітковиною перевершили омега-3 у зниженні запалення — шеститижневе дослідження",
      "seoTitle": "Кефір і клітковина проти омега-3: нове дослідження",
      "metaDesc": "Шеститижневе дослідження в Ноттінгемі: кефір із різноманітною клітковиною знизив сім маркерів запалення, омега-3 — лише один. Що це насправді означає.",
      "excerpt": "У дослідженні Ноттінгемського університету щоденний кефір із різноманітною пребіотичною клітковиною за шість тижнів суттєво знизив сім запальних білків — омега-3 вплинули лише на один. Але чесні застереження важливі.",
      "meta": "10 серпня 2026 · 3 хв читання",
      "lead": "Капсули з риб'ячим жиром — перше, про що більшість згадує на слово «протизапальний». Нове дослідження Ноттінгемського університету свідчить, що значно давніша комбінація — ферментоване молоко і достатньо клітковини — може дати більше, принаймні за показниками крові.",
      "blocks": [
        {
          "t": "p",
          "text": "Команда на чолі з докторкою Амрітою Віджей провела шеститижневе дослідження з чотирма групами за участю трохи більш ніж сотні здорових дорослих; його опубліковано в Journal of Translational Medicine. Одна група щодня випивала 170 мл кефіру з козячого молока разом із 10 г суміші різноманітної пребіотичної клітковини — це «синбіотик», що поєднує 27 живих бактеріальних культур і 18 типів клітковини. Групи порівняння отримували 500 мг омега-3 на день, 20 г інуліну окремо або нічого. Запалення вимірювали ґрунтовно — панеллю з 96 білків крові."
        },
        {
          "t": "p",
          "text": "Результат виявився однозначним. У групі «кефір плюс клітковина» суттєво знизилися сім запальних білків — зокрема IL-6 та інтерферон-гамма, два з найбільш вивчених рушіїв хронічного запалення, — тоді як у групах омега-3 і самої клітковини змінився лише один (TNF-альфа). У синбіотичній групі також знизилися загальний холестерин, LDL і не-HDL холестерин, чого з омега-3 не сталося. А рівень бутирату — коротколанцюгової жирної кислоти, яку виробляють кишкові бактерії, ферментуючи клітковину, — зріс, і це зростання йшло в парі зі зниженням IL-6: правдоподібний механізм того, чому годування власних мікробів заспокоює запалення."
        },
        {
          "t": "p",
          "text": "Тепер чесна частина. Дехто в пресі писав про «на 250% краще за омега-3» — цієї цифри в статті немає; вона з'явилася з підрахунку кількості маркерів, що змінилися, а це не розмір ефекту. Дослідження також було малим (синбіотик приймали лише 20 людей), ані учасники, ані дослідники не були засліплені, справжнього плацебо не було, групи порівняння були в середньому старші, а кефірно-клітковинний продукт надала компанія, яка ним торгує. Ніщо з цього не робить результат хибним — біологія логічна, а маркери вимірювали об'єктивно, — але це багатообіцяльний ранній результат, а не остаточний висновок."
        },
        {
          "t": "p",
          "text": "Для себе я беру з цього закономірність, а не продукт: ферментована їжа плюс широка різноманітність клітковини годують ті кишкові бактерії, що виробляють бутират, — і в прямому порівнянні ця комбінація перевершила добавку. Це збігається з усім, що зараз з'являється в цій темі: про ширші дані я писала в дописі [кишкові бактерії, клітковина та гормони](/ua/blog/gut-microbiome-precision-nutrition-women-2026/), а про те, чому кишківник важливий саме для естрогену, — у [ваші кишкові бактерії переробляють естроген](/ua/blog/estrobolome-gut-oestrogen-menopause/). Для жінок середнього віку, коли падіння естрогену й так підштовхує запалення та інсулінорезистентність угору, щоденна склянка кефіру і справді різноманітна клітковина — дешева звичка з низьким ризиком і дедалі кращою компанією в науковій літературі."
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Кефір із різноманітною клітковиною знизив сім запальних білків за шість тижнів; омега-3 і сама клітковина — по одному.",
              "detail": "Дослідження Ноттінгемського університету з чотирма групами (~104 здорових дорослих, 6 тижнів) порівнювало щоденний синбіотик (170 мл кефіру з козячого молока + 10 г пребіотичної суміші; 27 живих культур, 18 типів клітковини) з 500 мг омега-3, 20 г інуліну та контролем, використовуючи панель із 96 запальних білків. Синбіотик суттєво знизив 7 білків, зокрема IL-6 та IFN-гамма, а також загальний, LDL і не-HDL холестерин; омега-3 та інулін знизили лише TNF-альфа. Бутират у синбіотичній групі зріс і корелював зі зниженням IL-6. Обмеження: малі групи (n=20 на синбіотику), відсутність засліплення і справжнього плацебо, старші групи порівняння, а сам продукт надав його виробник.",
              "cite": "Journal of Translational Medicine · Рандомізоване дослідження, жовтень 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12529832/"
            }
          ]
        },
        {
          "t": "links",
          "title": "Схожі новини",
          "items": [
            {
              "name": "Кишкові бактерії, клітковина та гормони: що означають дослідження точного харчування 2026 року",
              "url": "/ua/blog/gut-microbiome-precision-nutrition-women-2026/",
              "desc": "Ширша картина: чому різноманіття мікробіому постійно з'являється в дослідженнях жіночого здоров'я."
            },
            {
              "name": "Ваші кишкові бактерії переробляють естроген — а менопауза змінює, які бактерії у вас є",
              "url": "/ua/blog/estrobolome-gut-oestrogen-menopause/",
              "desc": "Естроболом: як ті самі бактерії, що живляться клітковиною, впливають на рівень гормонів у середньому віці."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи варто припинити приймати омега-3?",
          "a": "Не на підставі одного малого дослідження. Омега-3 і далі мають докази для конкретних показань — насамперед високих тригліцеридів, коли їх можуть призначати, — а це дослідження вимірювало запальні маркери крові у здорових дорослих, а не інфаркти чи хвороби. Якщо омега-3 вам рекомендував лікар, продовжуйте і порадьтеся з ним. Дослідження радше свідчить, що ферментовану їжу та різноманітну клітковину варто додати, а не що добавки треба викинути."
        },
        {
          "q": "Це має бути саме кефір із козячого молока зі спеціальною сумішшю клітковини?",
          "a": "У дослідженні використовували один комерційний продукт, тож строго кажучи докази стосуються саме цієї комбінації. Але запропонований механізм — живі культури плюс широкий спектр ферментованої клітковини, що підвищують бутират, — не прив'язаний до бренду. Будь-який кефір із живими культурами плюс різноманітна клітковина з овочів, бобових, вівса, насіння та цільних злаків працює за тією ж логікою. Якщо у вас діабет, обирайте звичайний кефір без цукру: у смакових версіях цукру буває несподівано багато."
        }
      ]
    }
  },
  {
    "slug": "perimenopause-uncertainty-us-study",
    "date": "2026-08-08",
    "image": "/images/perimenopause-uncertainty-us-study.jpg",
    "cats": [
      "perimenopause"
    ],
    "en": {
      "cat": "Perimenopause",
      "title": "One in three women over 35 can't tell whether they're in perimenopause — and worse symptoms don't make it clearer",
      "seoTitle": "1 in 3 Women Unsure They're in Perimenopause — 2026 Study",
      "metaDesc": "A 2026 study in Menopause of 7,640 US women found 34% can't tell whether they're in perimenopause — peaking at 42% at ages 40–44. Why, and what actually helps.",
      "excerpt": "A mixed-methods study of 7,640 US women in Menopause found 34% are unsure whether they're in perimenopause — peaking at 42% at ages 40–44. The main driver isn't lack of interest: it's that the symptoms look like everything else.",
      "meta": "8 August 2026 · 3 min read",
      "lead": "Perimenopause has never had more airtime — podcasts, books, celebrity interviews. Yet when researchers asked over 7,600 US women a simple question — are you in it? — one in three couldn't say.",
      "blocks": [
        {
          "t": "p",
          "text": "The study, \"Exploring prevalence and drivers of perimenopause uncertainty among US women\", was published in July 2026 in Menopause, the journal of The Menopause Society. It comes from the same research collaboration — Flo Health with University College London, the Mayo Clinic and RCSI — behind the recent [global perimenopause survey of 17,494 women](/blog/perimenopause-global-survey-symptom-gap/), but it asks a different question: not what perimenopause feels like, but whether women can tell they are in it. Researchers surveyed 7,640 US women aged 35 and over between December 2024 and May 2025, gave them standard definitions of each reproductive stage, and asked them to pick the one that described them. 34% — one in three — chose \"I am unsure.\""
        },
        {
          "t": "p",
          "text": "The uncertainty wasn't evenly spread. It peaked at 42% among women aged 40–44 — precisely the years when perimenopause is most likely to be under way — and only fell below 20% after 50. More striking is what symptoms did to it: nothing helpful. Among women with minimal symptoms, 23% were unsure; with moderate symptoms that rose to 35%, and with severe symptom burden to 37%. A heavier symptom load made women less certain of what was happening to them, not more."
        },
        {
          "t": "p",
          "text": "When a subsample of 409 uncertain women explained why in their own words, the biggest theme — 56% of responses — was symptom confusion: they couldn't distinguish perimenopause from other causes, whether cycle changes that had other plausible explanations or overlapping conditions muddying the picture. Another 28% described knowledge gaps, and 16% described barriers to getting an answer, including dismissive healthcare encounters and clinicians reluctant to name perimenopause at all. Part of the problem is structural: there is no blood test or biomarker that confirms perimenopause. The diagnosis rests on age, cycle pattern and symptoms — which is exactly why it's so easy to sit in the \"unsure\" column for years."
        },
        {
          "t": "p",
          "text": "If you have diabetes or blood sugar trouble, the confusion runs both ways. Fatigue, broken sleep, irritability, brain fog and weight shifts sit on the symptom list for perimenopause and for glucose running high or swinging — and falling oestrogen genuinely does nudge insulin sensitivity downwards, so it's often not either-or. The practical move is to test what's testable — HbA1c, thyroid, ferritin — while raising perimenopause explicitly at the same appointment, rather than waiting for the other results to come back normal first. I've written more on that overlap in [perimenopause and blood sugar](/blog/perimenopause-diabetes-blood-sugar/)."
        },
        {
          "t": "p",
          "text": "The honest caveats: participants were recruited through the Flo cycle-tracking app, so this is a digitally engaged, health-motivated group — if anything, women likely to know more about perimenopause than average, which makes the uncertainty figure more sobering, not less. It's also a cross-sectional snapshot, and the \"why\" analysis covered 409 women. The authors' conclusion is aimed at clinicians as much as patients: work from the whole symptom profile — cognitive and emotional changes included — rather than leaning on irregular periods as the main flag."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "One in three US women aged 35+ cannot say whether they are in perimenopause.",
              "detail": "A mixed-methods study of 7,640 US women aged 35+ surveyed between December 2024 and May 2025, published in Menopause (July 2026) by researchers from Flo Health, UCL, the Mayo Clinic and RCSI. 34% were unsure of their reproductive stage, peaking at 42% at ages 40–44. Uncertainty rose with symptom severity (23% minimal vs 37% severe). Open-text analysis of 409 uncertain respondents found symptom confusion drove 56% of uncertainty, knowledge gaps 28%, and barriers to care 16%. Participants were recruited via the Flo app, so the sample skews digitally engaged and health-motivated; the design is cross-sectional and cannot establish cause.",
              "cite": "Menopause (The Menopause Society) · Mixed-methods study, July 2026",
              "url": "https://menopause.org/press-releases/many-women-still-confused-about-perimenopause"
            }
          ]
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "17,494 women, 158 countries: what perimenopause actually feels like isn't what we're told to expect",
              "url": "/blog/perimenopause-global-survey-symptom-gap/",
              "desc": "The sister study: women expect hot flashes, but live with fatigue, exhaustion and mood changes."
            },
            {
              "name": "Perimenopause & diabetes: what's really happening to your blood sugar",
              "url": "/blog/perimenopause-diabetes-blood-sugar/",
              "desc": "Why falling oestrogen and glucose swings mimic each other — and how to tell them apart."
            },
            {
              "name": "Anxiety and brain fog, not hot flashes, are now women's top menopause complaint",
              "url": "/blog/anxiety-brain-fog-top-menopause-symptom/",
              "desc": "The symptoms nobody warns you about are the ones women actually report most."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Is there a test that confirms perimenopause?",
          "a": "No — there is no single blood test or biomarker that confirms it. Hormone levels like FSH and oestrogen fluctuate so much during the transition that a single reading can mislead in either direction. Diagnosis is clinical: your age, your cycle pattern and your symptom profile taken together. The most useful thing you can bring to an appointment is a few months of tracked cycles and symptoms — and the word \"perimenopause\" raised explicitly, so it's assessed rather than assumed away."
        },
        {
          "q": "My symptoms are severe — shouldn't that make it obvious?",
          "a": "Counterintuitively, no. In this study uncertainty rose with symptom burden — 23% of women with minimal symptoms were unsure versus 37% with severe symptoms. Severe fatigue, poor sleep, mood changes and brain fog overlap with thyroid problems, anaemia, depression and blood sugar issues, so more symptoms can mean more competing explanations, not fewer. That's a reason to get the testable causes checked while raising perimenopause explicitly — not to pick one explanation on feel."
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза",
      "title": "Кожна третя жінка після 35 не може сказати, чи в неї перименопауза — і сильніші симптоми не додають ясності",
      "seoTitle": "Кожна третя жінка не знає, чи в неї перименопауза",
      "metaDesc": "Дослідження 2026 року в журналі Menopause: 34% із 7 640 американок не можуть визначити, чи вони в перименопаузі — пік 42% у 40–44 роки. Чому так і що робити.",
      "excerpt": "Змішане дослідження за участю 7 640 американок у журналі Menopause: 34% не впевнені, чи вони в перименопаузі — пік 42% у віці 40–44. Головна причина не байдужість, а те, що симптоми схожі на все інше.",
      "meta": "8 серпня 2026 · 3 хв читання",
      "lead": "Про перименопаузу ще ніколи не говорили так багато — подкасти, книжки, інтерв'ю зірок. Та коли дослідники поставили понад 7 600 американкам просте запитання — а ви зараз у ній? — кожна третя не змогла відповісти.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідження «Exploring prevalence and drivers of perimenopause uncertainty among US women» опублікували в липні 2026 року в журналі Menopause — виданні The Menopause Society. Його провела та сама дослідницька колаборація — Flo Health разом з University College London, Mayo Clinic та RCSI, — що й нещодавнє [глобальне опитування про перименопаузу за участю 17 494 жінок](/ua/blog/perimenopause-global-survey-symptom-gap/), але запитання тут інше: не як перименопауза відчувається, а чи можуть жінки зрозуміти, що вона вже почалася. Дослідники опитали 7 640 американок віком від 35 років між груднем 2024-го та травнем 2025 року, дали їм стандартні визначення кожного репродуктивного етапу й попросили обрати той, що описує їх. 34% — кожна третя — обрали «я не впевнена»."
        },
        {
          "t": "p",
          "text": "Невпевненість розподілялася нерівномірно. Вона сягала піку — 42% — серед жінок 40–44 років, саме в ті роки, коли перименопауза найімовірніше вже триває, і опускалася нижче 20% лише після 50. Ще показовіше те, як на неї впливали симптоми: ніяк не допомагали. Серед жінок із мінімальними симптомами не впевнені були 23%; з помірними — уже 35%, а з тяжким симптомним навантаженням — 37%. Що важчі симптоми, то менше жінки розуміли, що з ними відбувається, а не більше."
        },
        {
          "t": "p",
          "text": "Коли підгрупу з 409 невпевнених жінок попросили пояснити причину власними словами, найбільша тема — 56% відповідей — це плутанина із симптомами: жінки не могли відрізнити перименопаузу від інших причин, чи то змін циклу з іншими правдоподібними поясненнями, чи то супутніх станів, які розмивали картину. Ще 28% описували брак знань, а 16% — перешкоди на шляху до відповіді, зокрема зневажливе ставлення в медичних закладах і лікарів, які взагалі неохоче називають перименопаузу. Частина проблеми структурна: не існує аналізу крові чи біомаркера, який підтверджує перименопаузу. Діагноз спирається на вік, характер циклу та симптоми — саме тому в колонці «не впевнена» так легко просидіти роками."
        },
        {
          "t": "p",
          "text": "Якщо у вас діабет або проблеми з цукром у крові, плутанина працює в обидва боки. Втома, розірваний сон, дратівливість, туман у голові та коливання ваги стоять у списку симптомів і перименопаузи, і високої або стрибучої глюкози — а падіння естрогену справді підштовхує чутливість до інсуліну донизу, тож часто це не «або-або». Практичний крок — перевірити те, що піддається перевірці (HbA1c, щитоподібна залоза, феритин), і на тому самому прийомі прямо назвати перименопаузу як можливість, а не чекати, поки інші результати повернуться нормальними. Докладніше про цей перетин — у моєму дописі про [перименопаузу та рівень цукру](/ua/blog/perimenopause-diabetes-blood-sugar/)."
        },
        {
          "t": "p",
          "text": "Чесні застереження: учасниць набирали через застосунок для відстеження циклу Flo, тож це цифрово залучена й мотивована щодо здоров'я група — якщо на те пішло, жінки, які, ймовірно, знають про перименопаузу більше за середнє, і це робить цифру невпевненості ще промовистішою, а не навпаки. Це також зріз одного моменту в часі, а аналіз «чому» охопив 409 жінок. Висновок авторів адресований лікарям не менше, ніж пацієнткам: працюйте з повним профілем симптомів — разом із когнітивними та емоційними змінами, — а не спирайтеся на нерегулярні місячні як головну ознаку."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Кожна третя американка після 35 не може сказати, чи вона в перименопаузі.",
              "detail": "Змішане (кількісно-якісне) дослідження за участю 7 640 американок віком 35+, опитаних між груднем 2024-го та травнем 2025 року; опубліковане в Menopause (липень 2026) дослідниками з Flo Health, UCL, Mayo Clinic та RCSI. 34% не були впевнені у своєму репродуктивному етапі, з піком 42% у 40–44 роки. Невпевненість зростала разом із тяжкістю симптомів (23% за мінімальних проти 37% за тяжких). Аналіз відповідей 409 невпевнених жінок показав: 56% невпевненості пояснювала плутанина із симптомами, 28% — брак знань, 16% — перешкоди в доступі до допомоги. Учасниць набирали через застосунок Flo, тож вибірка зміщена в бік цифрово залучених і мотивованих щодо здоров'я; дизайн поперечний і не встановлює причинності.",
              "cite": "Menopause (The Menopause Society) · Змішане дослідження, липень 2026",
              "url": "https://menopause.org/press-releases/many-women-still-confused-about-perimenopause"
            }
          ]
        },
        {
          "t": "links",
          "title": "Схожі новини",
          "items": [
            {
              "name": "17 494 жінки зі 158 країн: перименопауза відчувається зовсім не так, як нас готували",
              "url": "/ua/blog/perimenopause-global-survey-symptom-gap/",
              "desc": "Сестринське дослідження: жінки очікують припливів, а живуть із втомою, виснаженням і змінами настрою."
            },
            {
              "name": "Перименопауза та діабет: що насправді відбувається з вашим цукром у крові",
              "url": "/ua/blog/perimenopause-diabetes-blood-sugar/",
              "desc": "Чому падіння естрогену та стрибки глюкози імітують одне одного — і як їх розрізнити."
            },
            {
              "name": "Тривожність і туман у голові, а не припливи — тепер головна скарга жінок у менопаузі",
              "url": "/ua/blog/anxiety-brain-fog-top-menopause-symptom/",
              "desc": "Симптоми, про які ніхто не попереджає, — саме ті, про які жінки повідомляють найчастіше."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи існує аналіз, який підтверджує перименопаузу?",
          "a": "Ні — немає жодного аналізу крові чи біомаркера, який її підтверджує. Рівні гормонів, як-от ФСГ та естроген, під час переходу коливаються так сильно, що один вимір може ввести в оману в будь-який бік. Діагноз клінічний: ваш вік, характер циклу та профіль симптомів разом. Найкорисніше, що можна принести на прийом, — кілька місяців записів циклів і симптомів, і прямо вимовлене слово «перименопауза», щоб її оцінили, а не відкинули за замовчуванням."
        },
        {
          "q": "У мене тяжкі симптоми — хіба це не мало б усе прояснити?",
          "a": "Парадоксально, але ні. У цьому дослідженні невпевненість зростала разом із симптомним навантаженням — не впевнені були 23% жінок із мінімальними симптомами проти 37% із тяжкими. Сильна втома, поганий сон, зміни настрою й туман у голові перетинаються з проблемами щитоподібної залози, анемією, депресією та порушеннями цукру в крові, тож більше симптомів може означати більше конкурентних пояснень, а не менше. Це привід перевірити те, що піддається аналізам, і водночас прямо назвати перименопаузу — а не обирати одне пояснення на відчуттях."
        }
      ]
    }
  },
  {
    "slug": "estrobolome-gut-oestrogen-menopause",
    "date": "2026-08-03",
    "image": "/images/estrobolome-gut-oestrogen-menopause.jpg",
    "cats": [
      "perimenopause",
      "nutrition"
    ],
    "en": {
      "cat": "Perimenopause",
      "title": "Your gut bacteria recycle oestrogen — and menopause changes which bacteria are doing it",
      "seoTitle": "The Estrobolome: Gut Bacteria, Oestrogen and Menopause",
      "metaDesc": "A 2026 Nutrients review on the estrobolome — the gut bacteria that recycle oestrogen — what changes after menopause, and which dietary changes have evidence behind them.",
      "excerpt": "A 2026 review in Nutrients maps how gut bacteria send oestrogen back into circulation instead of letting it leave the body, how that machinery shifts after menopause, and which dietary changes actually have evidence behind them.",
      "meta": "3 August 2026 · 4 min read",
      "lead": "Some of your oestrogen never really leaves. A set of gut bacteria intercepts it on the way out and sends it back into circulation — and a new review pulls together what happens to that system when oestrogen falls at menopause.",
      "blocks": [
        {
          "t": "p",
          "text": "The idea has a name: the estrobolome. It refers to the gut bacterial genes that make enzymes — chiefly beta-glucuronidase, alongside beta-glucosidase and sulfatase — capable of undoing the packaging the liver puts on oestrogen for disposal. The liver tags used oestrogen so it can be excreted; these bacterial enzymes strip the tag off in the gut, and the freed hormone is reabsorbed through the intestinal wall and returned to the bloodstream to be used again. It is a recycling loop, and gut bacteria hold one end of it."
        },
        {
          "t": "p",
          "text": "That makes the relationship two-way, which is the review's central point. Oestrogen influences which bacteria thrive; those bacteria in turn influence how much oestrogen stays in circulation. So when oestrogen falls at menopause, the gut community shifts too — and the shift is not just cosmetic, because part of what is changing is the machinery that decides how much of your remaining oestrogen gets a second pass."
        },
        {
          "t": "p",
          "text": "What actually changes is more specific, and more mixed, than the headline suggests. Several studies in the review report lower Shannon diversity — a standard measure of how varied a bacterial community is — in postmenopausal women, though one Spanish study found no difference in overall diversity at all. The more consistent finding is a shift in the balance: a reduced Firmicutes-to-Bacteroidetes ratio, with Firmicutes, Roseburia, Ruminococcus, Bifidobacterium animalis and Akkermansia muciniphila among the taxa depleted, and Bacteroidetes, Prevotella, Tolumonas and Sutterella wadsworthensis among those enriched. Those last two names are not household words, and that is rather the point: this is early-stage mapping, not a diagnosis anyone can hand you."
        },
        {
          "t": "p",
          "text": "On what to do about it, the review is more useful than most. Higher-fibre, lower-glycaemic-index diets correlated with a lower burden of menopausal symptoms. A 12-week low-fat, plant-based vegan diet improved hot-flush severity, and Mediterranean-style patterns were linked to better mood and fewer vasomotor symptoms. Phytoestrogens — the plant compounds in soy and flaxseed — come with a real caveat: isoflavones offer vasomotor, bone and urogenital benefits, but the effect is typically modest next to HRT, and the clearest reductions in hot-flush frequency and severity showed up only in \"equol producers\", the minority of people whose gut bacteria can convert the soy compound daidzein into its more active form. Whether you are one of them is decided by bacteria you did not choose."
        },
        {
          "t": "p",
          "text": "Two honest limits before anyone reorganises their kitchen. This is a narrative review — it synthesises other people's work rather than testing anything, and its authors say plainly that studies demonstrating a causal relationship \"remain few and nascent\". Microbiome features also vary by geography and ethnicity, which the authors flag as a real confound for associations drawn mostly from Western populations. And on the strain-specific probiotics the field is most excited about, their own conclusion is that large-scale clinical trials are still needed to confirm efficacy and safety. The practical takeaway is not a supplement or a test — it is fibre, plants and a Mediterranean-leaning pattern, which happens to be the advice that was already worth following for blood sugar and for the heart."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Gut bacteria recycle oestrogen back into circulation via beta-glucuronidase.",
              "detail": "The estrobolome is the set of gut bacterial genes encoding beta-glucuronidase, beta-glucosidase and sulfatase. Beta-glucuronidase deconjugates glucuronidated oestrogens in the intestinal lumen, allowing reabsorption across the intestinal epithelium and return to systemic circulation — the enterohepatic recycling loop. The review describes the relationship between oestrogen signalling and the gut microbiota as bidirectional.",
              "cite": "Lim et al. · Nutrients, 26 March 2026 · Narrative review",
              "url": "https://www.mdpi.com/2072-6643/18/7/1052"
            },
            {
              "claim": "The postmenopausal gut community shifts, but the evidence is not uniform.",
              "detail": "Multiple studies report a lower Shannon diversity index in postmenopausal women, though one Spanish study found no difference in alpha or beta diversity. A reduced Firmicutes/Bacteroidetes ratio is the more consistent finding, with Firmicutes (fold-change 0.551), Roseburia (0.707), Ruminococcus, Bifidobacterium animalis and Akkermansia muciniphila depleted, and Bacteroidetes (1.43), Tolumonas (1.18), Prevotella and Sutterella wadsworthensis enriched. The authors note that microbiome profiles and symptom prevalence both vary by geography and ethnicity, and that causal studies remain few.",
              "cite": "Lim et al. · Nutrients 2026, 18(7), 1052",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13074627/"
            }
          ]
        },
        {
          "t": "h",
          "text": "Related reading"
        },
        {
          "t": "links",
          "title": "More on eating for hormones, gut and blood sugar",
          "items": [
            {
              "name": "Gut bacteria, fibre and hormones: 2026's precision-nutrition research",
              "url": "/blog/gut-microbiome-precision-nutrition-women-2026/",
              "desc": "The companion piece — how the same gut community is being linked to weight and inflammation, and why the 'best' diet may end up being personalised."
            },
            {
              "name": "Why skin changes so fast at menopause",
              "url": "/blog/menopause-skin-oestrogen/",
              "desc": "Another system that depends on oestrogen, and what hormone therapy can and cannot do about it."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Should I get a microbiome test to check my estrobolome?",
          "a": "No — there is nothing clinically actionable to do with the result yet. The review is describing associations, not a validated test with a treatment attached to it, and the authors are explicit that causal studies are few and that large trials are still needed before strain-specific interventions can be recommended. The advice that comes out of this research is broad and low-risk: plenty of fibre, a wide range of plants, and a Mediterranean-leaning pattern."
        },
        {
          "q": "Do soy or flaxseed work as a replacement for HRT?",
          "a": "Not as a replacement. Isoflavones do show vasomotor, bone and urogenital benefits in the research the review covers, but the effect is typically modest compared with hormone therapy. There is also a personal lottery involved: the clearest reductions in hot-flush frequency and severity were seen in \"equol producers\" — people whose gut bacteria convert the soy compound daidzein into a more active form — and not everyone has those bacteria. Soy and flaxseed are worth eating as food; they are not a substitute for a conversation about HRT."
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза",
      "title": "Ваші кишкові бактерії повертають естроген у кров — і менопауза змінює те, які саме бактерії це роблять",
      "seoTitle": "Естроболом: кишкові бактерії, естроген і менопауза",
      "metaDesc": "Огляд у Nutrients за 2026 рік про естроболом — кишкові бактерії, які повертають естроген у кровообіг: що змінюється після менопаузи та які зміни в харчуванні мають докази.",
      "excerpt": "Огляд 2026 року в журналі Nutrients описує, як кишкові бактерії повертають естроген у кровообіг замість того, щоб дати йому вийти з організму, як цей механізм змінюється після менопаузи та які зміни в харчуванні справді мають докази.",
      "meta": "3 серпня 2026 · 4 хв читання",
      "lead": "Частина вашого естрогену насправді нікуди не зникає. Група кишкових бактерій перехоплює його на виході й повертає назад у кровообіг — а новий огляд узагальнює, що стається з цією системою, коли рівень естрогену падає в менопаузі.",
      "blocks": [
        {
          "t": "p",
          "text": "У цього явища є назва — естроболом. Так називають гени кишкових бактерій, які кодують ферменти (насамперед бета-глюкуронідазу, а також бета-глюкозидазу та сульфатазу), здатні зняти те «пакування», яким печінка позначає естроген для виведення. Печінка маркує використаний естроген, щоб організм його позбувся; ці бактеріальні ферменти знімають мітку вже в кишківнику, і вивільнений гормон всмоктується через стінку кишківника та повертається в кров, щоб бути використаним ще раз. Це петля рециклінгу — і один її кінець тримають бактерії."
        },
        {
          "t": "p",
          "text": "Саме тому цей зв'язок двосторонній, і це головна теза огляду. Естроген впливає на те, які бактерії почуваються добре; ці бактерії, своєю чергою, впливають на те, скільки естрогену залишається в кровообігу. Тож коли в менопаузі естроген падає, змінюється й склад мікробіому — і ця зміна не косметична, бо частина того, що змінюється, і є механізмом, який вирішує, скільки з решти вашого естрогену отримає другий шанс."
        },
        {
          "t": "p",
          "text": "Те, що змінюється насправді, конкретніше й неоднозначніше за заголовок. Кілька досліджень в огляді повідомляють про нижчий індекс різноманіття Шеннона — стандартну міру різноманітності бактеріальної спільноти — у жінок після менопаузи, хоча одне іспанське дослідження взагалі не знайшло різниці в загальному різноманітті. Послідовнішою знахідкою є зсув балансу: знижене співвідношення Firmicutes до Bacteroidetes, де серед збіднених таксонів — Firmicutes, Roseburia, Ruminococcus, Bifidobacterium animalis та Akkermansia muciniphila, а серед збагачених — Bacteroidetes, Prevotella, Tolumonas і Sutterella wadsworthensis. Останні дві назви навряд чи комусь знайомі — і в цьому суть: це радше рання картографія, ніж діагноз, який вам можуть видати на руки."
        },
        {
          "t": "p",
          "text": "Щодо того, що з цим робити, огляд корисніший за більшість. Раціони з більшою кількістю клітковини та нижчим глікемічним індексом корелювали з меншою вираженістю менопаузальних симптомів. 12-тижнева нежирна рослинна (веганська) дієта зменшила тяжкість припливів, а середземноморський тип харчування пов'язували з кращим настроєм і меншою кількістю вазомоторних симптомів. Фітоестрогени — рослинні сполуки сої та льону — мають суттєве застереження: ізофлавони дають вазомоторний, кістковий та урогенітальний ефект, але зазвичай помірний порівняно з ЗГТ, а найчіткіше зменшення частоти й тяжкості припливів спостерігали лише у «продуцентів еквол» — тієї меншості людей, чиї кишкові бактерії вміють перетворювати соєву сполуку дайдзеїн на активнішу форму. Чи належите ви до них, вирішують бактерії, яких ви не обирали."
        },
        {
          "t": "p",
          "text": "Два чесних обмеження, перш ніж перебудовувати кухню. Це наративний огляд — він узагальнює чужі роботи, а не перевіряє щось сам, і його автори прямо пишуть, що досліджень, які довели причинний зв'язок, «залишається мало, і вони на ранній стадії». Крім того, характеристики мікробіому різняться залежно від географії та етнічності, і автори називають це реальним фактором, що спотворює асоціації, отримані переважно в західних популяціях. А щодо штам-специфічних пробіотиків, якими галузь захоплюється найбільше, їхній власний висновок такий: потрібні великі клінічні дослідження, щоб підтвердити ефективність і безпеку. Практичний висновок — не добавка й не тест, а клітковина, рослинна їжа та середземноморський тип раціону, тобто саме те, що й так варто було робити заради цукру в крові та серця."
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Кишкові бактерії повертають естроген у кровообіг за допомогою бета-глюкуронідази.",
              "detail": "Естроболом — це сукупність генів кишкових бактерій, які кодують бета-глюкуронідазу, бета-глюкозидазу та сульфатазу. Бета-глюкуронідаза відщеплює глюкуронову кислоту від кон'югованих естрогенів у просвіті кишківника, що дозволяє їм всмоктатися через кишковий епітелій і повернутися в системний кровообіг — це петля ентерогепатичної рециркуляції. Огляд описує зв'язок між естрогеновою сигналізацією та мікробіотою кишківника як двосторонній.",
              "cite": "Lim та ін. · Nutrients, 26 березня 2026 · Наративний огляд",
              "url": "https://www.mdpi.com/2072-6643/18/7/1052"
            },
            {
              "claim": "Мікробіом після менопаузи змінюється, але дані не одностайні.",
              "detail": "Кілька досліджень повідомляють про нижчий індекс різноманіття Шеннона в жінок після менопаузи, хоча одне іспанське дослідження не виявило різниці в альфа- та бета-різноманітті. Послідовнішою знахідкою є знижене співвідношення Firmicutes/Bacteroidetes: збіднені Firmicutes (кратність зміни 0,551), Roseburia (0,707), Ruminococcus, Bifidobacterium animalis та Akkermansia muciniphila; збагачені Bacteroidetes (1,43), Tolumonas (1,18), Prevotella і Sutterella wadsworthensis. Автори зазначають, що і профілі мікробіому, і поширеність симптомів різняться за географією та етнічністю, а досліджень із доведеним причинним зв'язком поки мало.",
              "cite": "Lim та ін. · Nutrients 2026, 18(7), 1052",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13074627/"
            }
          ]
        },
        {
          "t": "h",
          "text": "Схожі новини"
        },
        {
          "t": "links",
          "title": "Більше про харчування для гормонів, кишківника та цукру в крові",
          "items": [
            {
              "name": "Бактерії кишківника, клітковина й гормони: дослідження точного харчування 2026 року",
              "url": "/ua/blog/gut-microbiome-precision-nutrition-women-2026/",
              "desc": "Споріднений матеріал — як ту саму мікробіоту пов'язують із вагою та запаленням і чому «найкраща» дієта може виявитися персональною."
            },
            {
              "name": "Чому шкіра так швидко змінюється в менопаузі",
              "url": "/ua/blog/menopause-skin-oestrogen/",
              "desc": "Ще одна система, що залежить від естрогену, і що з цим може (і чого не може) зробити гормональна терапія."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи варто зробити тест мікробіому, щоб перевірити свій естроболом?",
          "a": "Ні — з результатом поки що немає що клінічно робити. Огляд описує асоціації, а не валідований тест із прив'язаним до нього лікуванням, і автори прямо кажуть, що досліджень із доведеною причинністю мало й що потрібні великі випробування, перш ніж рекомендувати штам-специфічні втручання. Порада, яка випливає з цих досліджень, широка й малоризикова: багато клітковини, різноманітна рослинна їжа та раціон середземноморського типу."
        },
        {
          "q": "Чи можуть соя або льон замінити ЗГТ?",
          "a": "Замінити — ні. Ізофлавони справді показують вазомоторний, кістковий та урогенітальний ефект у дослідженнях, які розглядає огляд, але він зазвичай помірний порівняно з гормональною терапією. Є ще й елемент особистої лотереї: найчіткіше зменшення частоти й тяжкості припливів спостерігали у «продуцентів еквол» — людей, чиї кишкові бактерії перетворюють соєву сполуку дайдзеїн на активнішу форму, — а такі бактерії є не в усіх. Сою та льон варто їсти як їжу, але вони не замінюють розмову про ЗГТ."
        }
      ]
    }
  },
  {
    "slug": "sleep-insulin-resistance-women",
    "date": "2026-08-02",
    "image": "/images/sleep-insulin-resistance-women.jpg",
    "cats": [
      "diabetes",
      "perimenopause"
    ],
    "en": {
      "cat": "Diabetes",
      "title": "Ninety minutes less sleep raised insulin resistance by 15% in women",
      "seoTitle": "Short Sleep Raises Insulin Resistance in Women by 15%",
      "metaDesc": "A randomised crossover trial cut women's sleep by 90 minutes a night for six weeks. Insulin resistance rose about 15% — and more after menopause — regardless of weight.",
      "excerpt": "A randomised trial took 90 minutes a night from women who were sleeping well, for six weeks. Insulin resistance rose about 15% — and the effect was independent of body weight.",
      "meta": "2 August 2026 · 4 min read",
      "lead": "Sleep is the health advice most easily deprioritised — the thing you'll fix once everything else is under control. A randomised trial from Columbia put a number on what that costs women metabolically, and the number is larger than most people expect.",
      "blocks": [
        {
          "t": "p",
          "text": "The design is what makes this study worth reading. Thirty-six women aged 20 to 75 — all of them already sleeping a healthy seven to nine hours a night, none with diabetes or heart disease — completed two six-week phases in random order. In one, they kept sleeping normally. In the other, they went to bed with 90 minutes cut from their night, landing at an average of about 6.2 hours. Every woman did both phases, so each acted as her own control. That makes this a randomised crossover trial rather than a survey of people who happen to sleep badly — it tests cause, not just association."
        },
        {
          "t": "p",
          "text": "During the short-sleep phase, fasting insulin rose significantly and insulin resistance increased by around 15% across the group, according to the National Institutes of Health's summary of the findings. In postmenopausal women the increase reached roughly 20%. Premenopausal women mainly showed a rise in fasting insulin; in postmenopausal women, fasting glucose tended to drift up as well — the body no longer fully compensating by producing more insulin."
        },
        {
          "t": "p",
          "text": "The finding that matters most is the one that's easiest to skim past: the effect was independent of body weight, and independent of any change in body fat across the study. Six weeks of mild sleep restriction is not long enough to make anyone gain meaningful weight, and the researchers checked — the changes in glucose metabolism were not explained by changes in adiposity. So this isn't the familiar story of tiredness leading to worse eating and less movement, which then affects blood sugar. Short sleep appears to act on insulin sensitivity through its own route, in women who were otherwise healthy and at a stable weight."
        },
        {
          "t": "p",
          "text": "Two honest caveats. First, the trial is small — 36 women, of whom only 11 were postmenopausal. The 20% figure rests on that eleven, so treat it as a signal about direction rather than a precise measurement of size; it wants replicating in a larger group before anyone leans on the exact number. Second, this is not new research: it was published in Diabetes Care in November 2023. It circulates periodically as though it were a fresh finding, which it isn't — what it is, is good-quality causal evidence that has held up rather than a preliminary result waiting to be overturned."
        },
        {
          "t": "p",
          "text": "For women in their forties and fifties this compounds awkwardly, because perimenopause is often the thing taking the sleep in the first place — night sweats, 3 a.m. waking, the broken nights that arrive alongside falling oestrogen. Meanwhile oestrogen decline is separately nudging insulin sensitivity downwards. The trial suggests these aren't two unrelated complaints filed under \"midlife\": lost sleep is itself doing measurable metabolic work. I've written more on how that overlap plays out in [perimenopause and blood sugar](/blog/perimenopause-diabetes-blood-sugar/), and on where sleep sits among the other levers in [what the latest type 2 diabetes research actually supports](/blog/type-2-diabetes-research/)."
        },
        {
          "t": "p",
          "text": "The practical read is undramatic, which is usually a good sign. Nobody needs to optimise their sleep. But if you are managing insulin resistance, prediabetes or type 1 diabetes and you are routinely running on six hours, the evidence now says that is not a neutral background condition — it is part of the picture your glucose numbers are responding to, and worth raising at your next review rather than treating as the thing you'll sort out later."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Six weeks of mild sleep restriction increased insulin resistance in women, with a larger effect after menopause.",
              "detail": "In a randomised crossover trial, 36 women aged 20–75 (11 of them postmenopausal) completed two six-week phases: habitual adequate sleep (7–9 hours) and sleep restricted by 1.5 hours per night, achieving an average of about 6.2 hours. Fasting insulin and insulin resistance (HOMA-IR) rose significantly during restriction. The NIH's summary of the trial reports an increase in insulin resistance of 14.8% overall and up to 20.1% in postmenopausal women. Crossover randomisation supports a causal reading, but the sample is small — particularly the postmenopausal subgroup.",
              "cite": "Diabetes Care · Zuraikat et al., randomised crossover trial, 15 November 2023",
              "url": "https://www.nih.gov/news-events/news-releases/chronic-sleep-deficiency-increases-insulin-resistance-women-especially-postmenopausal-women"
            },
            {
              "claim": "The effect on glucose metabolism was not explained by changes in body fat.",
              "detail": "The trial was titled 'Chronic Insufficient Sleep in Women Impairs Insulin Sensitivity Independent of Adiposity Changes'. Analyses found the effects of sleep restriction on glucose metabolism were not mediated by adiposity or by changes in adiposity over the study, meaning the impairment in insulin sensitivity did not depend on participants gaining weight or body fat during the restricted phase.",
              "cite": "Diabetes Care · Columbia University Irving Medical Center, 2023",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10191900/"
            },
            {
              "claim": "Pre- and postmenopausal women showed different patterns of change.",
              "detail": "During sleep restriction, premenopausal women showed a rise in fasting insulin, while postmenopausal women showed increases in both fasting insulin and fasting glucose — a pattern consistent with reduced capacity to compensate for falling insulin sensitivity. The NIH release notes that measures returned towards baseline once participants resumed 7–9 hours of sleep, which is what the crossover design allows the trial to observe.",
              "cite": "National Institutes of Health · News release, 13 November 2023",
              "url": "https://www.nih.gov/news-events/news-releases/chronic-sleep-deficiency-increases-insulin-resistance-women-especially-postmenopausal-women"
            }
          ]
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Perimenopause and blood sugar — the overlap nobody explains",
              "url": "/blog/perimenopause-diabetes-blood-sugar/",
              "desc": "Why falling oestrogen changes insulin sensitivity, and what to watch for in your forties."
            },
            {
              "name": "What the latest type 2 diabetes research actually supports",
              "url": "/blog/type-2-diabetes-research/",
              "desc": "Remission, meal order, time-restricted eating and sleep — sorted by how good the evidence is."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Does catching up on sleep at the weekend undo the damage?",
          "a": "This trial can't answer that directly — it compared six weeks of consistently adequate sleep against six weeks of consistently short sleep, not a pattern of short weeknights and long weekends. What it does show is that the changes weren't permanent: measures moved back towards baseline when women returned to seven to nine hours. That is reassuring about reversibility, but it isn't evidence that two long lie-ins offset five short nights, and other research on catch-up sleep has been mixed. Consistent nights are the safer read of the evidence."
        },
        {
          "q": "I'm at a healthy weight and I sleep about six hours. Does this apply to me?",
          "a": "Quite possibly. That's the specific point of this trial: the women were healthy, at a stable weight, and the effect on insulin sensitivity held after accounting for body fat and any change in it during the study. Being slim doesn't exempt you from the metabolic cost of short sleep. It's worth saying the participants did have some raised cardiometabolic risk — through weight, family history of type 2 diabetes, lipids or cardiovascular history — so the findings speak most directly to women in that group rather than to everyone."
        }
      ]
    },
    "ua": {
      "cat": "Діабет",
      "title": "Мінус півтори години сну — і інсулінорезистентність у жінок зросла на 15%",
      "seoTitle": "Нестача сну підвищує інсулінорезистентність у жінок",
      "metaDesc": "Рандомізоване перехресне дослідження забирало в жінок 90 хвилин сну щоночі протягом шести тижнів. Інсулінорезистентність зросла приблизно на 15% — і більше після менопаузи.",
      "excerpt": "Рандомізоване дослідження забрало 90 хвилин сну щоночі в жінок, які спали добре, — на шість тижнів. Інсулінорезистентність зросла приблизно на 15%, і це не залежало від ваги.",
      "meta": "2 серпня 2026 · 4 хв читання",
      "lead": "Сон — та порада про здоров'я, яку найлегше відкласти: те, чим ви займетеся, коли решта буде під контролем. Рандомізоване дослідження Колумбійського університету показало в цифрах, скільки це коштує жінкам метаболічно, і цифра більша, ніж більшість очікує.",
      "blocks": [
        {
          "t": "p",
          "text": "Саме дизайн робить це дослідження вартим уваги. Тридцять шість жінок віком від 20 до 75 років — усі вже спали здорові сім-дев'ять годин на добу, жодна не мала діабету чи серцево-судинних хвороб — пройшли дві шеститижневі фази у випадковому порядку. В одній вони спали як зазвичай. В іншій лягали так, щоб від ночі відняли 90 хвилин, і виходило в середньому близько 6,2 години. Кожна жінка пройшла обидві фази, тож була сама собі контрольною групою. Це робить дослідження рандомізованим перехресним, а не опитуванням людей, які просто погано сплять: воно перевіряє причину, а не лише зв'язок."
        },
        {
          "t": "p",
          "text": "Під час фази короткого сну рівень інсуліну натще істотно зріс, а інсулінорезистентність збільшилася приблизно на 15% по групі загалом — за підсумком Національних інститутів здоров'я США. У жінок у постменопаузі приріст сягав близько 20%. У жінок до менопаузи зростав переважно інсулін натще; у постменопаузі підіймалася також і глюкоза натще — організм уже не компенсував падіння чутливості додатковим виробленням інсуліну."
        },
        {
          "t": "p",
          "text": "Найважливіший висновок — той, який найлегше проґавити: ефект не залежав від ваги тіла й від жодних змін жирової маси за час дослідження. Шість тижнів помірного обмеження сну — замало, щоб хтось відчутно набрав вагу, і дослідники це перевірили: зміни вуглеводного обміну не пояснювалися змінами жирової маси. Тобто це не звична історія про те, як від утоми люди гірше їдять і менше рухаються, а вже це б'є по цукру. Схоже, короткий сон впливає на чутливість до інсуліну власним шляхом — у жінок, які в усьому іншому були здорові й мали стабільну вагу."
        },
        {
          "t": "p",
          "text": "Два чесні застереження. Перше: дослідження невелике — 36 жінок, і лише 11 із них у постменопаузі. Цифра «20%» тримається саме на цих одинадцятьох, тож сприймайте її як сигнал про напрямок, а не як точний вимір величини; перш ніж спиратися на конкретне число, його варто підтвердити на більшій вибірці. Друге: це не нове дослідження — його опублікували в Diabetes Care у листопаді 2023 року. Воно періодично розходиться мережею так, ніби це свіжа новина, хоча це не так. Але це якісний причинно-наслідковий доказ, який витримав перевірку часом, а не попередній результат, що чекає на спростування."
        },
        {
          "t": "p",
          "text": "Для жінок за сорок і за п'ятдесят це накладається незручно, бо саме перименопауза часто й забирає той сон: нічна пітливість, пробудження о третій ночі, розірвані ночі, які приходять разом із падінням естрогену. А тим часом зниження естрогену окремо підштовхує чутливість до інсуліну донизу. Дослідження свідчить, що це не дві незалежні скарги під спільною биркою «середній вік»: втрачений сон сам по собі виконує вимірювану метаболічну роботу. Докладніше про те, як цей перетин працює, я писала в дописі про [перименопаузу та рівень цукру](/ua/blog/perimenopause-diabetes-blood-sugar/), а про місце сну серед інших важелів — у [огляді того, що насправді підтверджують дослідження діабету 2 типу](/ua/blog/type-2-diabetes-research/)."
        },
        {
          "t": "p",
          "text": "Практичний висновок недраматичний, а це зазвичай хороший знак. Нікому не треба «оптимізувати» свій сон. Але якщо ви маєте справу з інсулінорезистентністю, предіабетом чи діабетом 1 типу й регулярно живете на шести годинах, докази тепер кажуть: це не нейтральне тло. Це частина картини, на яку відгукуються ваші показники глюкози, і про це варто згадати на наступному прийомі, а не відкладати на потім."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Шість тижнів помірного обмеження сну підвищили інсулінорезистентність у жінок, сильніше — після менопаузи.",
              "detail": "У рандомізованому перехресному дослідженні 36 жінок віком 20–75 років (11 із них у постменопаузі) пройшли дві шеститижневі фази: звичний достатній сон (7–9 годин) і сон, скорочений на 1,5 години щоночі, що дало в середньому близько 6,2 години. Інсулін натще та інсулінорезистентність (HOMA-IR) істотно зросли під час обмеження. За підсумком NIH, інсулінорезистентність зросла на 14,8% загалом і до 20,1% у жінок у постменопаузі. Перехресна рандомізація дозволяє причинно-наслідкове прочитання, але вибірка мала — особливо підгрупа в постменопаузі.",
              "cite": "Diabetes Care · Zuraikat та ін., рандомізоване перехресне дослідження, 15 листопада 2023",
              "url": "https://www.nih.gov/news-events/news-releases/chronic-sleep-deficiency-increases-insulin-resistance-women-especially-postmenopausal-women"
            },
            {
              "claim": "Вплив на вуглеводний обмін не пояснювався змінами жирової маси.",
              "detail": "Дослідження мало назву «Хронічно недостатній сон у жінок погіршує чутливість до інсуліну незалежно від змін жирової маси». Аналіз показав, що вплив обмеження сну на вуглеводний обмін не опосередковувався ані жировою масою, ані її змінами за час дослідження, — тобто погіршення чутливості до інсуліну не залежало від того, чи набирали учасниці вагу або жир під час фази обмеження.",
              "cite": "Diabetes Care · Columbia University Irving Medical Center, 2023",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10191900/"
            },
            {
              "claim": "У жінок до та після менопаузи змінювалися різні показники.",
              "detail": "Під час обмеження сну в жінок до менопаузи зростав інсулін натще, а в жінок у постменопаузі підіймалися і інсулін, і глюкоза натще — картина, що узгоджується зі зниженою здатністю компенсувати падіння чутливості до інсуліну. У релізі NIH зазначено, що показники поверталися до вихідних, щойно учасниці відновлювали 7–9 годин сну; саме це й дозволяє побачити перехресний дизайн.",
              "cite": "National Institutes of Health · Пресреліз, 13 листопада 2023",
              "url": "https://www.nih.gov/news-events/news-releases/chronic-sleep-deficiency-increases-insulin-resistance-women-especially-postmenopausal-women"
            }
          ]
        },
        {
          "t": "links",
          "title": "Читайте також",
          "items": [
            {
              "name": "Перименопауза та рівень цукру — перетин, який ніхто не пояснює",
              "url": "/ua/blog/perimenopause-diabetes-blood-sugar/",
              "desc": "Чому падіння естрогену змінює чутливість до інсуліну і на що звертати увагу після сорока."
            },
            {
              "name": "Що насправді підтверджують дослідження діабету 2 типу",
              "url": "/ua/blog/type-2-diabetes-research/",
              "desc": "Ремісія, порядок страв, обмежене в часі харчування і сон — за якістю доказів."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи можна «доспати» на вихідних і все виправити?",
          "a": "Це дослідження не дає прямої відповіді: воно порівнювало шість тижнів стабільно достатнього сну із шістьма тижнями стабільно короткого, а не режим «мало серед тижня, багато у вихідні». Але воно показує, що зміни не були незворотними: показники поверталися до вихідних, коли жінки знову спали сім-дев'ять годин. Це заспокоює щодо зворотності, проте не доводить, що два довгі відсипання компенсують п'ять коротких ночей, — дані про «наздоганяючий» сон загалом суперечливі. Стабільні ночі — надійніше прочитання доказів."
        },
        {
          "q": "У мене нормальна вага, і я сплю приблизно шість годин. Чи стосується це мене?",
          "a": "Цілком можливо, що так. У цьому й суть дослідження: жінки були здорові, зі стабільною вагою, і вплив на чутливість до інсуліну зберігався після врахування жирової маси та її змін. Струнка статура не звільняє від метаболічної ціни короткого сну. Варто додати, що учасниці все ж мали певний підвищений кардіометаболічний ризик — через вагу, сімейну історію діабету 2 типу, ліпіди чи серцево-судинний анамнез, — тож висновки найбільше стосуються саме жінок із цієї групи, а не всіх поспіль."
        }
      ]
    }
  },
  {
    "slug": "perimenopause-global-survey-symptom-gap",
    "date": "2026-08-04",
    "image": "/images/perimenopause-global-survey-symptom-gap.jpg",
    "cats": [
      "perimenopause"
    ],
    "en": {
      "cat": "Perimenopause",
      "title": "17,494 women, 158 countries: what perimenopause actually feels like isn't what we're told to expect",
      "seoTitle": "Perimenopause Symptoms: 158-Country Study",
      "metaDesc": "A Mayo Clinic and Flo Health survey of 17,494 women in 158 countries found the symptoms women expect and the ones they report barely overlap.",
      "excerpt": "A peer-reviewed survey of 17,494 women across 158 countries found that hot flashes are what women recognise as perimenopause — while fatigue, exhaustion, mood and digestive changes are what they actually report.",
      "meta": "4 August 2026 · 4 min read",
      "lead": "Ask most women what perimenopause looks like and they'll say hot flashes. A new global study suggests that answer is the problem — because it isn't what the majority are living with.",
      "blocks": [
        {
          "t": "p",
          "text": "The study, [\"Global perspectives on perimenopause: a digital survey of knowledge and symptoms using the Flo application\"](https://pubmed.ncbi.nlm.nih.gov/41603602/), was published in July 2026 in Menopause, the journal of The Menopause Society. Researchers from the Mayo Clinic worked with the cycle-tracking app Flo to survey 17,494 women aged 18 and over across 158 countries — 12,681 of them aged 35 or older. It is, as far as the authors can tell, the first attempt to compare perimenopause knowledge and symptoms across this many countries at once."
        },
        {
          "t": "p",
          "text": "The headline result is a mismatch. When asked what they knew about perimenopause, women most often named hot flashes (71%), sleep problems (68%) and weight gain (65%). But when women aged 35 and over described what they were actually experiencing, the list came out in a different order: fatigue (83%), physical and mental exhaustion (83%), irritability (80%), depressive mood (77%), sleep problems (76%), digestive issues (76%) and anxiety (75%). Hot flashes — the thing almost everyone associates with the transition — didn't lead the list of lived symptoms at all. Among the narrower group of women 35+ who said they were currently in perimenopause, the same symptoms ran higher still, with exhaustion at 95% and fatigue at 93%."
        },
        {
          "t": "p",
          "text": "That gap has a practical cost. A symptom you've been told to expect is one you can name, look up and take to a doctor. Fatigue, low mood, poor sleep and digestive changes have no such label attached — they get filed under stress, overwork, low iron, thyroid, anxiety, or simply getting older. The authors' own conclusion is a discordance between what women know about perimenopause and what they experience, and they argue the practical fix is better symptom recognition rather than more awareness of hot flashes specifically. Knowledge also varied significantly by region (P<0.001), with the UK, Ireland, Canada, Australia and the Netherlands scoring highest and the United States sixth."
        },
        {
          "t": "p",
          "text": "For women managing diabetes or blood sugar, this list is worth reading twice. Fatigue, exhaustion, poor sleep, irritability and digestive changes are also, more or less exactly, the symptoms of blood sugar running high or swinging — which means during perimenopause the two can mask each other in both directions. Falling oestrogen genuinely does change insulin sensitivity, so it isn't a matter of picking one explanation over the other. It's a reason to keep testing rather than assume, and to raise perimenopause explicitly with a clinician if a cluster of these symptoms is new and doesn't match your usual pattern."
        },
        {
          "t": "p",
          "text": "The study's limits are worth being straight about. This is a cross-sectional survey of people who had already chosen to use a period-tracking app — a group likely to be younger, more health-engaged and more cycle-literate than women in general, and to own a smartphone. It can't tell you how common perimenopause symptoms are worldwide, and it can't establish that the hormonal transition caused any particular symptom, because nothing here was clinically confirmed or followed over time. What a sample this size and this geographically spread can show well is the shape of the gap between expectation and experience — and that gap is consistent enough to be worth acting on."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Women recognise hot flashes as the perimenopause symptom, but report fatigue, exhaustion and mood changes far more often.",
              "detail": "A cross-sectional digital survey of 17,494 women aged 18+ across 158 countries (12,681 aged 35+), conducted via the Flo application with Mayo Clinic researchers. Recognition of perimenopause symptoms was highest for hot flashes (71%), sleep problems (68%) and weight gain (65%). Self-reported symptoms among those aged 35+ were led by fatigue (83%), physical and mental exhaustion (83%), irritability (80%), depressive mood (77%), sleep problems (76%), digestive issues (76%) and anxiety (75%). Regional differences in knowledge were significant (P<0.001). The authors conclude there is a discordance between perimenopause knowledge and the symptoms actually experienced. As a self-selected sample of app users, it is not a prevalence estimate for the general population, and its cross-sectional design cannot establish cause.",
              "cite": "Hedges MS et al. · Menopause 2026;33(7):789–798",
              "url": "https://pubmed.ncbi.nlm.nih.gov/41603602/"
            }
          ]
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Anxiety and brain fog, not hot flashes, are now women's top menopause complaint",
              "url": "/blog/anxiety-brain-fog-top-menopause-symptom/",
              "desc": "The same pattern in a smaller US survey — this global study is the larger, peer-reviewed version of it."
            },
            {
              "name": "Perimenopause & diabetes: what's really happening to your blood sugar",
              "url": "/blog/perimenopause-diabetes-blood-sugar/",
              "desc": "Why fatigue and sleep problems in your 40s can be hormonal, metabolic, or both at once."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "If I don't have hot flashes, can I still be in perimenopause?",
          "a": "Yes. In this global survey of more than 17,000 women, hot flashes were what women most often recognised as a perimenopause symptom, but they were not what women aged 35 and over most often reported experiencing — fatigue, physical and mental exhaustion, irritability, low mood, poor sleep and digestive changes all ranked higher. Absence of hot flashes doesn't rule perimenopause out, and it's a common reason the transition gets missed or mislabelled."
        },
        {
          "q": "How do I tell perimenopause fatigue from a blood sugar problem?",
          "a": "Often you can't tell them apart on symptoms alone, and that's the honest answer — fatigue, poor sleep, irritability and digestive changes appear on both lists. They can also coexist, since falling oestrogen affects insulin sensitivity. The practical route is to test rather than guess: ask your doctor about blood sugar and HbA1c, thyroid function and ferritin, and raise perimenopause explicitly as a possibility at the same appointment rather than after the other results come back normal."
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза",
      "title": "17 494 жінки зі 158 країн: перименопауза відчувається зовсім не так, як нас готували",
      "seoTitle": "Симптоми перименопаузи: дослідження 158 країн",
      "metaDesc": "Опитування Mayo Clinic і Flo Health серед 17 494 жінок зі 158 країн: симптоми, яких жінки очікують, майже не збігаються з тими, які вони мають.",
      "excerpt": "Рецензоване опитування 17 494 жінок зі 158 країн показало: припливи — це те, що жінки знають про перименопаузу, а втома, виснаження, настрій і травні розлади — те, що вони насправді переживають.",
      "meta": "4 серпня 2026 · 4 хв читання",
      "lead": "Запитайте більшість жінок, як виглядає перименопауза, і вони скажуть: припливи. Нове глобальне дослідження свідчить, що саме ця відповідь і є проблемою — бо це не те, з чим живе більшість.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідження [«Global perspectives on perimenopause: a digital survey of knowledge and symptoms using the Flo application»](https://pubmed.ncbi.nlm.nih.gov/41603602/) опублікували в липні 2026 року в журналі Menopause — виданні The Menopause Society. Дослідники з Mayo Clinic разом із застосунком для відстеження циклу Flo опитали 17 494 жінки віком від 18 років у 158 країнах, з них 12 681 — віком 35 років і старше. Наскільки відомо авторам, це перша спроба порівняти знання про перименопаузу та її симптоми одразу в такій кількості країн."
        },
        {
          "t": "p",
          "text": "Головний результат — розбіжність. Коли жінок питали, що вони знають про перименопаузу, найчастіше називали припливи (71%), проблеми зі сном (68%) і набір ваги (65%). Але коли жінки віком 35+ описували те, що переживають насправді, порядок виявився іншим: втома (83%), фізичне й розумове виснаження (83%), дратівливість (80%), пригнічений настрій (77%), проблеми зі сном (76%), розлади травлення (76%) і тривожність (75%). Припливи — те, що майже всі асоціюють із цим періодом, — узагалі не очолили список реальних симптомів. У вужчій групі жінок 35+, які сказали, що перебувають у перименопаузі зараз, ті самі симптоми були ще вищими: виснаження 95%, втома 93%."
        },
        {
          "t": "p",
          "text": "Ця прогалина має практичну ціну. Симптом, до якого вас підготували, можна назвати, знайти про нього інформацію і принести лікарю. У втоми, зниженого настрою, поганого сну й розладів травлення такої етикетки немає — їх списують на стрес, перевтому, залізо, щитоподібну залозу, тривожність або просто вік. Власний висновок авторів — розбіжність між тим, що жінки знають про перименопаузу, і тим, що вони переживають; вони наполягають, що виправляти треба розпізнавання симптомів, а не додавати обізнаності саме про припливи. Рівень знань суттєво відрізнявся за регіонами (P<0,001): найвищий — у Великій Британії, Ірландії, Канаді, Австралії та Нідерландах, США — на шостому місці."
        },
        {
          "t": "p",
          "text": "Жінкам, які живуть із діабетом або стежать за цукром, цей список варто перечитати двічі. Втома, виснаження, поганий сон, дратівливість і зміни травлення — це більш-менш точно симптоми високого або стрибкоподібного цукру. Тобто в перименопаузі ці два стани можуть маскувати одне одного в обидва боки. Падіння естрогену справді змінює чутливість до інсуліну, тож питання не в тому, щоб обрати одне пояснення замість іншого. Це причина вимірювати, а не припускати, — і окремо назвати перименопаузу лікарю, якщо поєднання цих симптомів нове й не схоже на ваш звичний стан."
        },
        {
          "t": "p",
          "text": "Про обмеження дослідження варто сказати прямо. Це поперечне (одномоментне) опитування людей, які вже обрали користуватися застосунком для відстеження циклу, — а це група, що радше молодша, більш залучена до теми здоров’я, краще обізнана про свій цикл і має смартфон. Воно не показує, наскільки поширені симптоми перименопаузи у світі, і не доводить, що гормональний перехід спричинив конкретний симптом: нічого тут не підтверджували клінічно й не спостерігали в часі. Що вибірка такого розміру й такої географії показує добре — це форму розриву між очікуванням і досвідом. І цей розрив достатньо стабільний, щоб на нього зважати."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Жінки впізнають припливи як симптом перименопаузи, але значно частіше повідомляють про втому, виснаження та зміни настрою.",
              "detail": "Поперечне цифрове опитування 17 494 жінок віком 18+ у 158 країнах (12 681 віком 35+), проведене через застосунок Flo разом із дослідниками Mayo Clinic. Найкраще жінки впізнавали припливи (71%), проблеми зі сном (68%) і набір ваги (65%). Серед жінок 35+ найчастіше повідомляли про втому (83%), фізичне й розумове виснаження (83%), дратівливість (80%), пригнічений настрій (77%), проблеми зі сном (76%), розлади травлення (76%) і тривожність (75%). Регіональні відмінності в знаннях були значущими (P<0,001). Автори роблять висновок про розбіжність між знаннями про перименопаузу та реально пережитими симптомами. Оскільки це вибірка користувачок застосунку, які долучилися самостійно, вона не є оцінкою поширеності в загальній популяції, а поперечний дизайн не встановлює причинності.",
              "cite": "Hedges MS та ін. · Menopause 2026;33(7):789–798",
              "url": "https://pubmed.ncbi.nlm.nih.gov/41603602/"
            }
          ]
        },
        {
          "t": "links",
          "title": "Що ще почитати",
          "items": [
            {
              "name": "Тривожність і туман у голові, а не припливи — тепер головна скарга жінок у менопаузі",
              "url": "/ua/blog/anxiety-brain-fog-top-menopause-symptom/",
              "desc": "Той самий висновок у меншому опитуванні в США — це глобальна рецензована версія тієї ж історії."
            },
            {
              "name": "Перименопауза та діабет: що насправді відбувається з вашим цукром у крові",
              "url": "/ua/blog/perimenopause-diabetes-blood-sugar/",
              "desc": "Чому втома й проблеми зі сном після 40 можуть бути гормональними, метаболічними — або і тим, і тим одночасно."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Якщо в мене немає припливів, чи можу я бути в перименопаузі?",
          "a": "Так. У цьому глобальному опитуванні понад 17 000 жінок припливи були тим, що жінки найчастіше впізнавали як симптом перименопаузи, але не тим, про що найчастіше повідомляли жінки віком 35+ — втома, фізичне й розумове виснаження, дратівливість, знижений настрій, поганий сон і зміни травлення були поширенішими. Відсутність припливів не виключає перименопаузу, і саме через це її часто пропускають або називають чимось іншим."
        },
        {
          "q": "Як відрізнити втому в перименопаузі від проблем із цукром у крові?",
          "a": "Часто за самими симптомами відрізнити неможливо — і це чесна відповідь: втома, поганий сон, дратівливість і розлади травлення є в обох списках. Ці стани можуть існувати й одночасно, адже падіння естрогену впливає на чутливість до інсуліну. Практичний шлях — вимірювати, а не вгадувати: попросіть лікаря перевірити цукор і HbA1c, роботу щитоподібної залози та феритин, і одразу на тому ж прийомі окремо назвіть перименопаузу як можливу причину, а не після того, як інші результати виявляться нормальними."
        }
      ]
    }
  },
  {
    "slug": "gut-microbiome-precision-nutrition-women-2026",
    "date": "2026-07-25",
    "image": "/images/gut-microbiome-precision-nutrition-women-2026.jpg",
    "cats": [
      "nutrition"
    ],
    "en": {
      "cat": "Nutrition",
      "title": "Gut bacteria, fibre and hormones: what 2026's precision-nutrition research means for women over 40",
      "seoTitle": "Gut Bacteria, Fibre & Hormones After 40: 2026 Research",
      "excerpt": "A new 2026 review argues that fibre-rich, Mediterranean-style eating feeds the gut bacteria linked to weight, inflammation and hormone balance — and that the 'best' diet may increasingly be tailored to your own microbiome.",
      "meta": "25 July 2026 · 3 min read",
      "lead": "The idea that your gut bacteria shape your weight and hormones has moved from fringe to mainstream — and a new research review pulls the threads together, with a practical message for women over 40.",
      "blocks": [
        {
          "t": "p",
          "text": "A 2026 review in Frontiers in Microbiology, \"Precision nutrition targeting the gut microbiota for weight management,\" gathers the evidence on how what we eat feeds the trillions of microbes in our gut — and how those microbes, in turn, influence weight, metabolism and inflammation. Its headline point is one nutritionists have made for years: diets rich in fibre, or built along Mediterranean lines, tend to encourage a more diverse, beneficial mix of gut bacteria, while Western ultra-processed eating tends to narrow that diversity."
        },
        {
          "t": "p",
          "text": "The mechanism the authors keep returning to is short-chain fatty acids (SCFAs). When gut bacteria ferment the fibre you eat — from vegetables, pulses, whole grains, nuts and fruit — they produce SCFAs such as butyrate. These compounds help feed the cells lining the gut, support the gut barrier, calm inflammation and play a role in how the body handles energy. Less fibre means fewer of the bacteria that make them, and less of that quiet background work."
        },
        {
          "t": "p",
          "text": "What's newer is the \"precision\" angle. Researchers are combining multi-omics data (reading the genes, proteins and metabolites of the microbiome) with AI to map how one person's gut community differs from another's, and why the same diet can produce different results in different people. The review also points to a measure called the Dietary Index for Gut Microbiota (DI-GM) — essentially a score for how gut-friendly your eating pattern is — which, in observational data, higher-scoring diets have been associated with lower rates of some women's health conditions, including female infertility and pelvic inflammatory disease."
        },
        {
          "t": "p",
          "text": "A note on how firmly to hold all this: this is a narrative review, not a clinical trial. It synthesises existing research and explains mechanisms rather than testing a diet head-to-head, and several of the human links (like the DI-GM associations) come from observational studies, which can show a pattern but not prove cause. The sensible takeaway isn't a supplement or a test — it's the least surprising advice in nutrition: eat a wide range of plants, lean into fibre and a Mediterranean-style pattern, and go easy on ultra-processed food. For women in perimenopause, when weight and inflammation often shift, that's a foundation worth having regardless of what the microbiome science settles on next."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Fibre-rich, Mediterranean-style diets support a healthier gut microbiome and SCFA production.",
              "detail": "A 2026 narrative review in Frontiers in Microbiology (\"Precision nutrition targeting the gut microbiota for weight management: mechanisms and applications\") concludes that diets high in fibre or resembling the Mediterranean pattern favourably modulate gut microbiota composition, promote beneficial bacteria and enhance short-chain fatty acid production — supporting weight regulation and lower inflammation — whereas Western ultra-processed diets reduce microbial diversity. It also describes emerging use of multi-omics and AI to personalise nutrition, and notes that a higher Dietary Index for Gut Microbiota (DI-GM) score has been associated with reduced risk of some conditions, including female infertility and pelvic inflammatory disease. As a review, it summarises mechanisms and existing (often observational) evidence rather than reporting a new randomised trial.",
              "cite": "Frontiers in Microbiology · Narrative review, 2026",
              "url": "https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2026.1806152/full"
            }
          ]
        },
        {
          "t": "h",
          "text": "Related reading"
        },
        {
          "t": "links",
          "title": "More on eating for weight, hormones and healthy ageing",
          "items": [
            {
              "name": "Carbohydrate quality and healthy ageing",
              "url": "/blog/carb-quality-healthy-aging/",
              "desc": "Why fibre-rich, unrefined carbohydrates in midlife are tied to better odds of ageing well — the same whole-food pattern this gut research points to."
            },
            {
              "name": "Natural sweeteners, sugar and your gut",
              "url": "/blog/natural-sweeteners/",
              "desc": "A closer look at how different sweeteners can affect the gut microbiome and your blood-sugar response."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "What are short-chain fatty acids, and why do they matter?",
          "a": "Short-chain fatty acids (SCFAs) like butyrate are made when your gut bacteria ferment dietary fibre. They help nourish the cells lining the gut, support the gut barrier, dampen inflammation and contribute to how your body manages energy. You don't get them from a bottle — you get them by feeding the bacteria that make them, which means eating enough fibre from a variety of plants."
        },
        {
          "q": "Do I need a microbiome test to eat for my gut?",
          "a": "No. Personalised microbiome testing is an active research area, but for most people it isn't necessary to act well. The advice that comes out of this research is broad and low-risk: eat a wide range of plants, prioritise fibre, favour a Mediterranean-style pattern and limit ultra-processed foods. That helps your gut bacteria whether or not you ever test them."
        }
      ]
    },
    "ua": {
      "cat": "Харчування",
      "title": "Бактерії кишківника, клітковина й гормони: що дослідження точного харчування 2026 року означають для жінок після 40",
      "seoTitle": "Мікробіом, клітковина й гормони після 40: дані 2026",
      "excerpt": "Новий огляд 2026 року стверджує, що багате на клітковину харчування середземноморського типу живить бактерії кишківника, пов'язані з вагою, запаленням і гормональним балансом — і що «найкраща» дієта дедалі більше залежатиме від вашого власного мікробіому.",
      "meta": "25 липня 2026 · 3 хв читання",
      "lead": "Ідея, що бактерії кишківника впливають на вашу вагу й гормони, перейшла з маргінесу в мейнстрім — і новий науковий огляд зводить усе докупи, з практичним висновком для жінок після 40.",
      "blocks": [
        {
          "t": "p",
          "text": "Огляд 2026 року у Frontiers in Microbiology — «Точне харчування, спрямоване на мікробіоту кишківника для контролю ваги» — узагальнює докази того, як їжа живить трильйони мікробів у нашому кишківнику й як ці мікроби, своєю чергою, впливають на вагу, метаболізм і запалення. Головна теза — та, яку нутриціологи повторюють роками: раціони, багаті на клітковину, або побудовані за середземноморським зразком, зазвичай сприяють різноманітнішому й корисному складу бактерій, тоді як західне ультраоброблене харчування цю різноманітність звужує."
        },
        {
          "t": "p",
          "text": "Механізм, до якого автори постійно повертаються, — це коротколанцюгові жирні кислоти (КЛЖК). Коли бактерії кишківника ферментують спожиту вами клітковину — з овочів, бобових, цільних злаків, горіхів і фруктів — вони виробляють КЛЖК, зокрема бутират. Ці сполуки живлять клітини, що вистилають кишківник, підтримують кишковий бар'єр, гамують запалення й беруть участь у тому, як організм розпоряджається енергією. Менше клітковини — менше бактерій, які їх виробляють, і менше цієї тихої фонової роботи."
        },
        {
          "t": "p",
          "text": "Новим є акцент на «точності». Дослідники поєднують дані мультиоміки (читання генів, білків і метаболітів мікробіому) зі штучним інтелектом, щоб зрозуміти, чим спільнота бактерій однієї людини відрізняється від іншої та чому та сама дієта дає різні результати в різних людей. Огляд також згадує показник під назвою Дієтичний індекс для мікробіоти кишківника (DI-GM) — по суті, оцінку того, наскільки ваш раціон дружній до кишківника, — і вищі його значення в спостережних даних пов'язували з нижчою частотою деяких станів у жінок, зокрема безпліддя та запальних захворювань органів малого таза."
        },
        {
          "t": "p",
          "text": "Кілька слів про те, наскільки твердо це сприймати: це наративний огляд, а не клінічне дослідження. Він узагальнює наявні дані й пояснює механізми, а не порівнює дієти безпосередньо, і чимало зв'язків у людей (як-от асоціації DI-GM) походять зі спостережних досліджень, які показують закономірність, але не доводять причину. Розумний висновок — не добавка й не тест, а найменш несподівана порада в харчуванні: їжте широкий набір рослинної їжі, налягайте на клітковину й середземноморський тип раціону, а ультрапереробленого їжте менше. Для жінок у перименопаузі, коли вага й запалення часто змінюються, це основа, яку варто мати незалежно від того, до чого прийде наука про мікробіом."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Багаті на клітковину дієти середземноморського типу підтримують здоровіший мікробіом і вироблення КЛЖК.",
              "detail": "Наративний огляд 2026 року у Frontiers in Microbiology («Точне харчування, спрямоване на мікробіоту кишківника для контролю ваги: механізми та застосування») робить висновок, що раціони з високим вмістом клітковини або схожі на середземноморський тип сприятливо змінюють склад мікробіоти кишківника, сприяють корисним бактеріям і посилюють вироблення коротколанцюгових жирних кислот — підтримуючи регуляцію ваги й менше запалення, — тоді як західні ультраоброблені дієти знижують мікробне різноманіття. Він також описує застосування мультиоміки та ШІ для персоналізації харчування й зазначає, що вищий бал Дієтичного індексу для мікробіоти кишківника (DI-GM) пов'язували зі зниженим ризиком деяких станів, зокрема жіночого безпліддя та запальних захворювань органів малого таза. Як огляд, він узагальнює механізми та наявні (часто спостережні) докази, а не повідомляє про нове рандомізоване дослідження.",
              "cite": "Frontiers in Microbiology · Наративний огляд, 2026",
              "url": "https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2026.1806152/full"
            }
          ]
        },
        {
          "t": "h",
          "text": "Схожі новини"
        },
        {
          "t": "links",
          "title": "Більше про харчування для ваги, гормонів і здорового старіння",
          "items": [
            {
              "name": "Якість вуглеводів і здорове старіння",
              "url": "/ua/blog/carb-quality-healthy-aging/",
              "desc": "Чому багаті на клітковину, нерафіновані вуглеводи в середньому віці пов'язані з кращими шансами старіти здорово — той самий цільнопродуктовий патерн, на який вказує це дослідження кишківника."
            },
            {
              "name": "Натуральні підсолоджувачі, цукор і ваш кишківник",
              "url": "/ua/blog/natural-sweeteners/",
              "desc": "Докладніше про те, як різні підсолоджувачі можуть впливати на мікробіом кишківника й реакцію цукру в крові."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Що таке коротколанцюгові жирні кислоти й чому вони важливі?",
          "a": "Коротколанцюгові жирні кислоти (КЛЖК), як-от бутират, утворюються, коли бактерії кишківника ферментують харчову клітковину. Вони живлять клітини, що вистилають кишківник, підтримують кишковий бар'єр, гамують запалення й впливають на те, як організм розпоряджається енергією. Їх не отримати з пляшечки — їх отримують, годуючи бактерії, які їх виробляють, тобто споживаючи достатньо клітковини з різноманітної рослинної їжі."
        },
        {
          "q": "Чи потрібен тест мікробіому, щоб харчуватися на користь кишківника?",
          "a": "Ні. Персоналізоване тестування мікробіому — активна галузь досліджень, але більшості людей воно не потрібне, щоб діяти правильно. Порада, яка випливає з цих досліджень, широка й малоризикова: їжте різноманітну рослинну їжу, віддавайте перевагу клітковині, тримайтеся середземноморського типу раціону й обмежуйте ультрапереробні продукти. Це допомагає вашим бактеріям незалежно від того, чи ви колись їх тестуєте."
        }
      ]
    }
  },
  {
    "slug": "tirzepatide-hrt-weight-loss-menopause-2026",
    "date": "2026-07-27",
    "image": "/images/tirzepatide-hrt-weight-loss-menopause-2026.jpg",
    "cats": [
      "weight",
      "perimenopause"
    ],
    "en": {
      "cat": "Weight loss",
      "title": "Hormone therapy plus tirzepatide: 35% more weight loss after menopause — with one caveat worth reading",
      "seoTitle": "Tirzepatide + HRT: 35% More Weight Loss After Menopause",
      "metaDesc": "A 2026 Lancet cohort study found postmenopausal women on tirzepatide plus hormone therapy lost 35% more weight than on tirzepatide alone. What it means — and the bone-and-muscle caveat.",
      "excerpt": "Postmenopausal women on tirzepatide plus hormone therapy lost 35% more weight than those on tirzepatide alone in a 2026 Lancet cohort study. Encouraging — but it's observational, and rapid weight loss at midlife carries a bone-and-muscle cost worth planning for.",
      "meta": "27 July 2026 · 4 min read",
      "lead": "If you're navigating both menopause and weight, this one caught my eye. A 2026 analysis suggests that adding hormone therapy to tirzepatide — the GLP-1/GIP drug behind Mounjaro and Zepbound — may meaningfully boost weight loss after menopause. It's a genuinely interesting signal, so let me walk through what the study actually showed, and the part that matters just as much as the headline.",
      "blocks": [
        {
          "t": "p",
          "text": "The study, published in The Lancet Obstetrics, Gynaecology & Women's Health in early 2026, followed postmenopausal women with overweight or obesity who were taking tirzepatide. It compared those also using menopausal hormone therapy (HT) with those on tirzepatide alone. Over 12 months, the hormone-therapy group lost about 35% more weight — a total bodyweight reduction of –19.2% versus –14.0% (p=0.0023). Put another way, 45% of the hormone-therapy users lost at least a fifth of their bodyweight, compared with 18% of the others. Cardiometabolic markers improved more in the combination group too."
        },
        {
          "t": "p",
          "text": "Why might oestrogen make a difference? The leading explanation is that oestrogen influences where the body stores fat and how it handles insulin and appetite signals. As it falls in menopause, weight tends to shift toward the abdomen and metabolism becomes less forgiving — so topping oestrogen back up may simply restore some of the metabolic conditions that make a weight-loss drug work better. That's a plausible mechanism, not a proven one, and this study wasn't designed to prove cause and effect."
        },
        {
          "t": "p",
          "text": "That's the caveat I'd underline. This is a retrospective cohort study — it looked back at records of women who happened to be on these treatments, rather than randomly assigning them. Women who choose hormone therapy may differ in ways that also help with weight (they may be more engaged with their health, for instance), and an observational design can't fully rule that out. It shows a strong association, not proof. Tirzepatide's own weight-loss effect is well established from randomised trials — around 20% bodyweight versus roughly 3% on placebo — but the specific hormone-therapy boost still needs a proper randomised trial to confirm."
        },
        {
          "t": "p",
          "text": "And the part that doesn't make the headline: rapid weight loss at midlife has a body-composition cost. A meaningful share of the weight lost on any GLP-1 drug can come from muscle as well as fat, and menopause is already a vulnerable time for bone density as oestrogen drops. Losing weight fast, while your bones and muscle are under pressure anyway, is a combination clinicians increasingly flag. It doesn't mean don't do it — it means build in the protective habits from day one: [enough protein](/blog/protein-for-women-over-40/) (roughly 1.2–1.6 g per kg of bodyweight a day), resistance training a couple of times a week, and adequate vitamin D and calcium. None of that is optional if you want to keep the muscle and bone you'll rely on for decades."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Adding hormone therapy to tirzepatide was linked to 35% more weight loss after menopause.",
              "detail": "In a retrospective cohort study of postmenopausal women with overweight or obesity, those using menopausal hormone therapy alongside tirzepatide lost 35% more total bodyweight over 12 months than those on tirzepatide alone (–19.2% vs –14.0%; p=0.0023). 45% of hormone-therapy users achieved at least 20% total bodyweight loss versus 18% of controls, with greater improvement in cardiometabolic markers. Because the design is observational, it demonstrates association rather than causation.",
              "cite": "The Lancet Obstetrics, Gynaecology & Women's Health · Retrospective cohort study, 2026",
              "url": "https://www.thelancet.com/journals/lanogw/article/PIIS3050-5038(25)00145-1/abstract"
            },
            {
              "claim": "Rapid GLP-1 weight loss around menopause raises a bone-and-muscle preservation concern.",
              "detail": "GLP-1-based drugs produce fast weight loss, a portion of which can come from lean mass, and menopause independently accelerates bone-density loss as oestrogen declines. Clinicians therefore recommend pairing these medications with adequate protein (about 1.2–1.6 g/kg/day), regular resistance training, and sufficient vitamin D and calcium to protect muscle and bone during treatment.",
              "cite": "Clinical guidance on GLP-1 use, menopause and body composition, 2026",
              "url": "https://www.sciencedaily.com/releases/2026/03/260323005543.htm"
            }
          ]
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "GLP-1 weight-loss drugs mainly burn fat, not muscle, an International Journal of Obesity meta-analysis finds",
              "url": "/blog/glp1-weight-loss-drugs-fat-not-muscle/",
              "desc": "What the body-composition data show about muscle loss on GLP-1 drugs, and why it matters more for women."
            },
            {
              "name": "Eating more protein than the official guideline supports better muscle and bone after menopause",
              "url": "/blog/higher-protein-postmenopausal-bone-muscle/",
              "desc": "The protein case for protecting muscle and bone — especially while losing weight at midlife."
            },
            {
              "name": "5 myths about perimenopause and weight",
              "url": "/blog/perimenopause-weight-myths/",
              "desc": "What's actually true about weight changes during perimenopause."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Does this mean I should ask for hormone therapy to lose more weight?",
          "a": "Not on the strength of this study alone. It found a strong association, but it's observational — it can't prove the hormone therapy caused the extra weight loss, and it wasn't a trial. Hormone therapy is a decision that should rest on your menopause symptoms, your timing relative to menopause and your personal risk profile, discussed with your clinician. Better weight loss on a GLP-1 drug, if it holds up, would be a bonus rather than a reason to start."
        },
        {
          "q": "How do I avoid losing muscle and bone on a GLP-1 drug during menopause?",
          "a": "Plan for it from the start rather than reacting later. The core protections are eating enough protein (roughly 1.2–1.6 g per kg of bodyweight a day), doing resistance training two to three times a week, and making sure your vitamin D and calcium are adequate. These are the same habits that protect bone and muscle through menopause generally — the weight-loss drug just makes them non-negotiable."
        }
      ]
    },
    "ua": {
      "cat": "Схуднення",
      "title": "Гормональна терапія плюс тирзепатид: на 35% більше втрати ваги після менопаузи — з одним важливим застереженням",
      "seoTitle": "Тирзепатид + ГЗТ: на 35% більше втрати ваги після менопаузи",
      "metaDesc": "Дослідження The Lancet 2026 року: жінки в постменопаузі на тирзепатиді разом із гормональною терапією втратили на 35% більше ваги, ніж на самому тирзепатиді. Що це означає — і застереження щодо кісток і м'язів.",
      "excerpt": "Жінки в постменопаузі на тирзепатиді разом із гормональною терапією втратили на 35% більше ваги, ніж на самому тирзепатиді, у когортному дослідженні The Lancet 2026 року. Обнадійливо — але дослідження спостережне, а швидка втрата ваги в середньому віці має ціну для кісток і м'язів, яку варто спланувати.",
      "meta": "27 липня 2026 · 4 хв читання",
      "lead": "Якщо ви одночасно проходите через менопаузу й працюєте над вагою, це вас зацікавить. Аналіз 2026 року припускає, що додавання гормональної терапії до тирзепатиду — препарату GLP-1/GIP, що стоїть за Mounjaro та Zepbound — може відчутно посилити втрату ваги після менопаузи. Сигнал справді цікавий, тож розберімо, що саме показало дослідження, і ту частину, яка важить не менше за заголовок.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідження, опубліковане в The Lancet Obstetrics, Gynaecology & Women's Health на початку 2026 року, спостерігало за жінками в постменопаузі з надмірною вагою чи ожирінням, які приймали тирзепатид. Воно порівняло тих, хто додатково використовував менопаузальну гормональну терапію (ГТ), із тими, хто був лише на тирзепатиді. За 12 місяців група з гормональною терапією втратила приблизно на 35% більше ваги — загальне зниження маси тіла –19,2% проти –14,0% (p=0,0023). Інакше кажучи, 45% тих, хто був на гормональній терапії, втратили щонайменше п'яту частину маси тіла, порівняно з 18% в іншій групі. Кардіометаболічні показники також покращилися більше в комбінованій групі."
        },
        {
          "t": "p",
          "text": "Чому естроген може мати значення? Провідне пояснення — естроген впливає на те, де тіло зберігає жир і як воно обробляє інсулін та сигнали апетиту. Коли він знижується в менопаузі, вага зміщується до живота, а метаболізм стає менш поблажливим — тож повернення рівня естрогену може просто відновити частину метаболічних умов, за яких препарат для схуднення працює краще. Це правдоподібний механізм, а не доведений, і це дослідження не було створене, щоб довести причину й наслідок."
        },
        {
          "t": "p",
          "text": "Саме це застереження я б підкреслила. Це ретроспективне когортне дослідження — воно переглядало записи жінок, які вже приймали ці препарати, а не розподіляло їх випадковим чином. Жінки, які обирають гормональну терапію, можуть відрізнятися й у інший спосіб, що теж допомагає з вагою (наприклад, вони можуть уважніше ставитися до свого здоров'я), і спостережний дизайн не може цього повністю виключити. Воно показує сильний зв'язок, а не доказ. Власний ефект тирзепатиду для схуднення добре встановлений рандомізованими дослідженнями — близько 20% маси тіла проти приблизно 3% на плацебо — але конкретний внесок гормональної терапії ще потребує підтвердження належним рандомізованим дослідженням."
        },
        {
          "t": "p",
          "text": "І частина, яка не потрапляє в заголовок: швидка втрата ваги в середньому віці має ціну для складу тіла. Помітна частка ваги, втраченої на будь-якому препараті GLP-1, може припадати на м'язи, а не лише на жир, а менопауза й так є вразливим часом для щільності кісток через падіння естрогену. Швидко худнути, коли ваші кістки й м'язи вже під тиском, — це поєднання, на яке дедалі частіше звертають увагу лікарі. Це не означає «не робіть цього» — це означає закласти захисні звички з першого дня: [достатньо білка](/ua/blog/protein-for-women-over-40/) (приблизно 1,2–1,6 г на кг маси тіла на день), силові тренування кілька разів на тиждень і достатньо вітаміну D та кальцію. Нічого з цього не є необов'язковим, якщо ви хочете зберегти м'язи й кістки, на які покладатиметеся десятиліттями."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Додавання гормональної терапії до тирзепатиду пов'язане з на 35% більшою втратою ваги після менопаузи.",
              "detail": "У ретроспективному когортному дослідженні жінок у постменопаузі з надмірною вагою чи ожирінням ті, хто використовував менопаузальну гормональну терапію разом із тирзепатидом, втратили на 35% більше загальної маси тіла за 12 місяців, ніж ті, хто був лише на тирзепатиді (–19,2% проти –14,0%; p=0,0023). 45% тих, хто був на гормональній терапії, досягли щонайменше 20% втрати маси тіла проти 18% у контрольній групі, з більшим покращенням кардіометаболічних показників. Оскільки дизайн спостережний, він демонструє зв'язок, а не причинність.",
              "cite": "The Lancet Obstetrics, Gynaecology & Women's Health · Ретроспективне когортне дослідження, 2026",
              "url": "https://www.thelancet.com/journals/lanogw/article/PIIS3050-5038(25)00145-1/abstract"
            },
            {
              "claim": "Швидка втрата ваги на GLP-1 під час менопаузи підвищує занепокоєння щодо збереження кісток і м'язів.",
              "detail": "Препарати на основі GLP-1 дають швидку втрату ваги, частина якої може припадати на м'язову масу, а менопауза самостійно прискорює втрату щільності кісток через зниження естрогену. Тому лікарі рекомендують поєднувати ці препарати з достатньою кількістю білка (приблизно 1,2–1,6 г/кг/день), регулярними силовими тренуваннями та достатнім вітаміном D і кальцієм, щоб захистити м'язи й кістки під час лікування.",
              "cite": "Клінічні рекомендації щодо застосування GLP-1, менопаузи та складу тіла, 2026",
              "url": "https://www.sciencedaily.com/releases/2026/03/260323005543.htm"
            }
          ]
        },
        {
          "t": "links",
          "title": "Більше по темі",
          "items": [
            {
              "name": "Препарати для схуднення GLP-1 спалюють переважно жир, а не м'язи — метааналіз International Journal of Obesity",
              "url": "/ua/blog/glp1-weight-loss-drugs-fat-not-muscle/",
              "desc": "Що показують дані про склад тіла щодо втрати м'язів на препаратах GLP-1 і чому це важливіше для жінок."
            },
            {
              "name": "Більше білка, ніж рекомендує офіційна норма, підтримує м'язи й кістки після менопаузи",
              "url": "/ua/blog/higher-protein-postmenopausal-bone-muscle/",
              "desc": "Аргументи на користь білка для захисту м'язів і кісток — особливо під час схуднення в середньому віці."
            },
            {
              "name": "5 міфів про перименопаузу та вагу",
              "url": "/ua/blog/perimenopause-weight-myths/",
              "desc": "Що насправді правда про зміни ваги під час перименопаузи."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи означає це, що мені варто попросити гормональну терапію, щоб більше схуднути?",
          "a": "Не на підставі лише цього дослідження. Воно виявило сильний зв'язок, але є спостережним — воно не може довести, що гормональна терапія спричинила додаткову втрату ваги, і це не було рандомізоване дослідження. Гормональна терапія — це рішення, яке має спиратися на ваші симптоми менопаузи, час відносно менопаузи та особистий профіль ризику, обговорене з лікарем. Краща втрата ваги на препараті GLP-1, якщо вона підтвердиться, була б приємним бонусом, а не приводом починати."
        },
        {
          "q": "Як уникнути втрати м'язів і кісток на препараті GLP-1 під час менопаузи?",
          "a": "Плануйте це від самого початку, а не реагуйте потім. Основні засоби захисту — їсти достатньо білка (приблизно 1,2–1,6 г на кг маси тіла на день), робити силові тренування два-три рази на тиждень і стежити, щоб вітамін D і кальцій були на достатньому рівні. Це ті самі звички, які захищають кістки й м'язи впродовж менопаузи загалом — препарат для схуднення просто робить їх обов'язковими."
        }
      ]
    }
  },
  {
    "slug": "topical-oestrogen-skincare-menopause",
    "date": "2026-07-28",
    "image": "/images/topical-oestrogen-skincare-menopause.jpg",
    "cats": [
      "skin",
      "perimenopause"
    ],
    "en": {
      "cat": "Skin & beauty",
      "title": "“Oestrogen skincare” is becoming its own category — and two very different products share the name",
      "seoTitle": "Oestrogen Skincare for Menopausal Skin: The Evidence",
      "metaDesc": "Topical estradiol and non-hormonal MEP are both sold as “oestrogen skincare”, but they are not the same thing. What the trials actually show — and what they don’t.",
      "excerpt": "After the FDA’s move on hormone therapy labels, oestrogen skincare is being marketed hard. Two quite different products sit behind the name, and the evidence behind them is thinner than the packaging suggests.",
      "meta": "28 July 2026 · 4 min read",
      "lead": "Clinics and brands are pushing “oestrogen skincare” as the next serious answer to menopausal skin. Before spending anything on it, it’s worth knowing that the phrase covers two different products — one is a hormone, one isn’t — and that the trial evidence is early.",
      "blocks": [
        {
          "t": "p",
          "text": "The regulatory ground shifted first. In November 2025 the FDA announced it would strip the “black box” warning — covering cardiovascular disease, breast cancer and probable dementia — from menopausal hormone therapy labels, and by February 2026 it had approved the reworded labels for a first batch of six products, among them Bijuva, Divigel, Prometrium and Estring. The endometrial cancer warning stays on systemic oestrogen-alone therapy for women who still have a uterus, and the new labelling leans on timing: starting before 60, or within ten years of menopause. Dermatology noticed. Skin had always been a footnote in the hormone conversation, and suddenly there was room for it."
        },
        {
          "t": "p",
          "text": "There’s a reason skin keeps coming up. The American Society of Plastic Surgeons puts the loss at up to 30% of dermal collagen in the first five years after menopause, then roughly 2% a year after that — steeper than ordinary ageing explains. It’s also strikingly under-discussed: in a survey of 463 postmenopausal women aged 42 to 83 published in the journal Cosmetics, around 47% said nobody had ever told them menopause would affect their skin, hair and nails, and more than half felt it had knocked their self-esteem. That was a self-selected online questionnaire in a single country, so read it as a signal about how little gets said, not as a precise national figure."
        },
        {
          "t": "p",
          "text": "Here’s the part the marketing blurs. Two quite different things are sold as “oestrogen skincare”. The first is genuine topical oestrogen — bio-identical estradiol, or the weaker estriol for more sensitive skin. These are real hormones with real effects and a real side-effect list: irritation, hormonal acne, unwanted hair growth, hyperpigmentation. They belong in a prescriber’s hands. The second is MEP (methyl estradiolpropanoate), which isn’t an oestrogen at all. It activates oestrogen receptors in skin cells but enters the bloodstream as an inactive metabolite — that’s the entire design goal, the receptor effect without systemic hormonal activity. It’s sold as a cosmeceutical, not approved by the FDA as an anti-ageing drug. The two aren’t interchangeable, and the word “oestrogen” on a box tells you almost nothing about which one you’re holding."
        },
        {
          "t": "p",
          "text": "The evidence for MEP is genuinely early. The most-cited trial is an open-label study of 31 women who had been without periods for at least a year: 26 of them (84%) improved, clinician-rated improvement averaged 21%, and self-reported satisfaction with the eye area rose 47%, with no significant side effects reported. Encouraging — but open-label with no control group means the placebo response can’t be separated out, and in cosmetic studies that response is large. A small double-blind randomised pilot against vehicle also exists. What doesn’t exist yet is a large, long, properly controlled trial."
        },
        {
          "t": "p",
          "text": "In-clinic treatments are being repositioned the same way. Galderma has released interim data from an investigator-initiated study led by Andreas Nikolis at McGill, pairing Restylane Skinboosters with Sculptra on menopausal skin: hydration, skin-barrier measures and patient satisfaction all improved, satisfaction peaked at six months, and the order mattered — skinboosters first gave the best hydration results. Worth knowing, and worth discounting appropriately: it’s interim, industry-supported, announced by press release rather than peer review, and no control arm has been reported. None of it replaces the unglamorous basics that do have good evidence behind them — daily sunscreen, a retinoid, topical vitamin C. And systemic HRT still isn’t a skincare decision. If you’re considering topical hormones, that’s a conversation with a clinician, particularly if you have a history of hormone-sensitive cancer: the ASPS guidance lists breast cancer patients on aromatase inhibitors as candidates only with their oncologist’s sign-off."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "The FDA has removed the strongest warnings from menopausal hormone therapy labels.",
              "detail": "The FDA announced in November 2025 that it would remove boxed-warning language on cardiovascular disease, breast cancer and probable dementia from menopausal hormone therapy products, and by February 2026 had approved revised labelling for a first group of six products including Bijuva, Divigel, Cenestin, Enjuvia, Prometrium and Estring. The endometrial cancer warning remains on systemic oestrogen-alone therapy for women with a uterus, and the updated labels emphasise starting therapy before age 60 or within ten years of menopause.",
              "cite": "U.S. Food and Drug Administration · Labelling changes, 2026",
              "url": "https://www.fda.gov/news-events/press-announcements/fda-approves-labeling-changes-menopausal-hormone-therapy-products"
            },
            {
              "claim": "Up to 30% of dermal collagen is lost in the first five post-menopausal years.",
              "detail": "The American Society of Plastic Surgeons describes women losing up to 30% of dermal collagen within the first five years after menopause, followed by a further decline of about 2% each year. The same article sets out the emerging category of bio-identical topical oestrogen skincare — estradiol as the strongest form, estriol for more sensitive patients — and its side-effect profile, including skin irritation, hormonal acne, unwanted hair growth and hyperpigmentation.",
              "cite": "American Society of Plastic Surgeons",
              "url": "https://www.plasticsurgery.org/news/articles/the-innovation-of-estrogen-based-medical-skincare"
            },
            {
              "claim": "MEP improved periorbital skin in a small open-label study — with no control group.",
              "detail": "An open-label study of 31 women amenorrhoeic for at least one year applied a cosmeceutical containing methyl estradiolpropanoate (MEP) to the eye area. 26 of 31 subjects (84%) showed improvement, mean clinician-rated Global Aesthetic Improvement averaged 21%, and participant-reported satisfaction improved 47%. It was well tolerated with no significant side effects. Because the study was open-label and uncontrolled, the placebo response cannot be separated from the treatment effect.",
              "cite": "Journal of Drugs in Dermatology · Open-label study, 2022",
              "url": "https://pubmed.ncbi.nlm.nih.gov/36342739/"
            },
            {
              "claim": "Combining a hyaluronic acid skinbooster with a biostimulator improved menopausal skin quality — interim data only.",
              "detail": "Galderma reported interim results from an investigator-initiated study led by Andreas Nikolis (McGill University) combining Restylane Skinboosters with Sculptra, a poly-L-lactic acid biostimulator, in menopausal women. Facial hydration, skin-barrier measures and patient satisfaction improved over six months, with satisfaction peaking at month six and the best hydration results when skinboosters were used before Sculptra. A six-month extension is ongoing. The data are interim, industry-supported and released via press announcement rather than peer-reviewed publication, and no control arm has been reported.",
              "cite": "Galderma · Interim investigator-initiated trial data, 2026",
              "url": "https://www.galderma.com/news/interim-data-two-ongoing-investigator-initiated-trials-highlight-role-sculptra-and-restylane"
            },
            {
              "claim": "Roughly half of postmenopausal women say nobody warned them about skin, hair and nail changes.",
              "detail": "A questionnaire study of 463 postmenopausal women aged 42 to 83, published in the journal Cosmetics, found around 47% had not been informed about the impact of menopause on their skin, hair and nails, and more than half fully or partly agreed that menopause had affected their self-esteem. It was a self-selected online survey conducted in a single country, so it indicates the scale of the information gap rather than a precise population figure.",
              "cite": "Cosmetics · Survey of 463 women, 2024",
              "url": "https://doi.org/10.3390/cosmetics11010009"
            }
          ]
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Why skin changes so fast at menopause — and what hormone therapy can and can’t do",
              "url": "/blog/menopause-skin-oestrogen/",
              "desc": "The systemic side of the same question: what HRT does for skin, and where the limits are."
            },
            {
              "name": "2026 review confirms HRT restores skin collagen, elasticity and hydration",
              "url": "/blog/hrt-restores-skin-collagen-2026-review/",
              "desc": "What the review evidence shows for systemic hormone therapy and skin."
            },
            {
              "name": "Do collagen products actually improve your skin?",
              "url": "/blog/collagen-and-skin/",
              "desc": "The other thing sold hard for menopausal skin — and what the trials say."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Is “oestrogen skincare” the same as taking HRT for my skin?",
          "a": "No, and it’s worth keeping the two apart. Systemic HRT is a prescription medicine taken for menopausal symptoms, with skin benefit as a documented side effect rather than the reason to take it. Topical oestrogen is a hormone applied to one area of skin, still a prescriber’s decision. MEP-based products are a third thing again — non-hormonal, sold over the counter or through clinics, and not approved as a drug. Only the first has large, long-term trial evidence behind it, and that evidence is about menopausal symptoms, not wrinkles."
        },
        {
          "q": "I’ve had breast cancer. Is MEP safe for me because it’s non-hormonal?",
          "a": "Ask your oncologist rather than assuming. MEP is designed so that it activates oestrogen receptors in skin while entering the bloodstream as an inactive metabolite — meaning no systemic hormonal activity by design. But “designed not to” is not the same as “proven safe in this group”, and the published studies are small and short. The ASPS guidance takes the same line for topical oestrogens, listing breast cancer patients on aromatase inhibitors as candidates only with their oncologist’s approval."
        }
      ]
    },
    "ua": {
      "cat": "Краса та шкіра",
      "title": "«Естрогенова косметика» стає окремою категорією — і під цією назвою продають два різні продукти",
      "seoTitle": "Естрогенова косметика при менопаузі: що каже наука",
      "metaDesc": "Місцевий естрадіол і негормональний MEP продають як «естрогенову косметику», але це не одне й те саме. Що справді доводять дослідження — і чого вони не доводять.",
      "excerpt": "Після рішення FDA щодо маркування гормональної терапії естрогенову косметику рекламують дедалі активніше. За цією назвою стоять два різні продукти, а доказова база тонша, ніж обіцяє упаковка.",
      "meta": "28 липня 2026 · 4 хв читання",
      "lead": "Клініки та бренди просувають «естрогенову косметику» як серйозну відповідь на зміни шкіри в менопаузі. Перш ніж витрачати на це гроші, варто знати: за цією фразою стоять два різні продукти — один гормон, інший ні — і доказова база поки що рання.",
      "blocks": [
        {
          "t": "p",
          "text": "Спершу змінилося регулювання. У листопаді 2025 року FDA оголосило, що прибирає «чорну рамку» — попередження про серцево-судинні захворювання, рак грудей і ймовірну деменцію — з інструкцій до менопаузальної гормональної терапії, а до лютого 2026-го затвердило оновлене маркування для перших шести препаратів, серед них Bijuva, Divigel, Prometrium та Estring. Попередження про рак ендометрія залишається для системної терапії лише естрогеном у жінок із маткою, а нове маркування наголошує на часі початку: до 60 років або протягом десяти років після менопаузи. Дерматологія це помітила. Шкіра завжди була виноскою в розмові про гормони — і раптом для неї з’явилося місце."
        },
        {
          "t": "p",
          "text": "Причина, чому шкіра постійно виринає в цій темі, цілком конкретна. Американське товариство пластичних хірургів (ASPS) наводить втрату до 30% колагену дерми за перші п’ять років після менопаузи, а далі — приблизно 2% щороку. Це крутіше падіння, ніж пояснює звичайне старіння. І про це вражаюче мало говорять: в опитуванні 463 жінок у постменопаузі віком від 42 до 83 років, опублікованому в журналі Cosmetics, близько 47% сказали, що їм ніхто не пояснив, як менопауза вплине на шкіру, волосся та нігті, а більше половини відчули удар по самооцінці. Це було онлайн-опитування з самостійним набором учасниць в одній країні, тож читайте його як сигнал про мовчання навколо теми, а не як точну національну цифру."
        },
        {
          "t": "p",
          "text": "Ось те, що маркетинг розмиває. Під назвою «естрогенова косметика» продають дві доволі різні речі. Перша — справжній місцевий естроген: біоідентичний естрадіол або слабший естріол для чутливішої шкіри. Це справжні гормони зі справжнім ефектом і справжнім переліком побічних дій: подразнення, гормональне акне, небажане оволосіння, гіперпігментація. Їх призначає лікар. Друга — MEP (метилестрадіолпропаноат), який узагалі не є естрогеном. Він активує естрогенові рецептори в клітинах шкіри, але потрапляє в кровотік уже як неактивний метаболіт — у цьому і весь задум: ефект на рецептори без системної гормональної дії. Його продають як космецевтику, а не як схвалений FDA препарат проти старіння. Ці два продукти не взаємозамінні, і слово «естроген» на коробці майже нічого не каже про те, що саме ви тримаєте в руках."
        },
        {
          "t": "p",
          "text": "Доказова база MEP справді рання. Найчастіше цитують відкрите дослідження за участю 31 жінки, у яких не було місячних щонайменше рік: у 26 із них (84%) стан покращився, середня оцінка покращення лікарем становила 21%, а задоволеність зоною навколо очей за словами самих учасниць зросла на 47%, без значущих побічних ефектів. Обнадійливо — але відкритий дизайн без контрольної групи означає, що ефект плацебо неможливо відокремити, а в косметичних дослідженнях він великий. Існує також невелике подвійне сліпе рандомізоване пілотне дослідження проти плацебо-основи. Чого поки немає — так це великого, тривалого і належно контрольованого дослідження."
        },
        {
          "t": "p",
          "text": "Процедури в клініці позиціонують так само. Galderma оприлюднила проміжні дані ініційованого дослідниками дослідження під керівництвом Андреаса Ніколіса з Університету Макгілла: комбінація Restylane Skinboosters і Sculptra на шкірі жінок у менопаузі покращила зволоженість, показники бар’єрної функції та задоволеність пацієнток, пік задоволеності припав на шостий місяць, і порядок мав значення — найкращі результати щодо зволоження давали скінбустери перед Sculptra. Це варто знати — і варто відповідно знизити очікування: дані проміжні, за підтримки виробника, оприлюднені пресрелізом, а не рецензованою публікацією, і про контрольну групу не повідомляють. Ніщо з цього не замінює непоказні базові речі з доброю доказовою базою — щоденний сонцезахист, ретиноїд, вітамін C місцево. І системна ЗГТ — це досі не рішення про догляд за шкірою. Якщо ви розглядаєте місцеві гормони, це розмова з лікарем, особливо за наявності гормонозалежного раку в анамнезі: рекомендації ASPS зараховують пацієнток із раком грудей на інгібіторах ароматази до кандидаток лише за згодою онколога."
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "FDA прибрало найсуворіші попередження з інструкцій до менопаузальної гормональної терапії.",
              "detail": "У листопаді 2025 року FDA оголосило про вилучення з «чорної рамки» попереджень щодо серцево-судинних захворювань, раку грудей та ймовірної деменції для препаратів менопаузальної гормональної терапії, а до лютого 2026-го затвердило оновлене маркування для першої групи з шести препаратів, включно з Bijuva, Divigel, Cenestin, Enjuvia, Prometrium та Estring. Попередження про рак ендометрія залишається для системної терапії лише естрогеном у жінок із маткою, а оновлені інструкції наголошують на початку терапії до 60 років або протягом десяти років після менопаузи.",
              "cite": "U.S. Food and Drug Administration · Зміни маркування, 2026",
              "url": "https://www.fda.gov/news-events/press-announcements/fda-approves-labeling-changes-menopausal-hormone-therapy-products"
            },
            {
              "claim": "До 30% колагену дерми втрачається за перші п’ять років після менопаузи.",
              "detail": "Американське товариство пластичних хірургів описує втрату до 30% колагену дерми протягом перших п’яти років після менопаузи з подальшим зниженням приблизно на 2% щороку. У тій самій статті викладено нову категорію біоідентичної місцевої естрогенової косметики — естрадіол як найсильніша форма, естріол для чутливіших пацієнток — та її побічні ефекти: подразнення шкіри, гормональне акне, небажане оволосіння і гіперпігментація.",
              "cite": "American Society of Plastic Surgeons",
              "url": "https://www.plasticsurgery.org/news/articles/the-innovation-of-estrogen-based-medical-skincare"
            },
            {
              "claim": "MEP покращив шкіру навколо очей у невеликому відкритому дослідженні — без контрольної групи.",
              "detail": "У відкритому дослідженні 31 жінка, у якої не було місячних щонайменше рік, наносила космецевтичний засіб із метилестрадіолпропаноатом (MEP) на зону навколо очей. Покращення показали 26 із 31 учасниці (84%), середня оцінка глобального естетичного покращення лікарем становила 21%, а задоволеність за словами учасниць зросла на 47%. Засіб переносився добре, без значущих побічних ефектів. Оскільки дослідження було відкритим і без контролю, ефект плацебо неможливо відокремити від ефекту лікування.",
              "cite": "Journal of Drugs in Dermatology · Відкрите дослідження, 2022",
              "url": "https://pubmed.ncbi.nlm.nih.gov/36342739/"
            },
            {
              "claim": "Поєднання гіалуронового скінбустера з біостимулятором покращило якість шкіри в менопаузі — але це лише проміжні дані.",
              "detail": "Galderma повідомила проміжні результати ініційованого дослідниками дослідження під керівництвом Андреаса Ніколіса (Університет Макгілла), яке поєднувало Restylane Skinboosters зі Sculptra, біостимулятором на основі полі-L-молочної кислоти, у жінок у менопаузі. За шість місяців покращилися зволоженість обличчя, показники шкірного бар’єру та задоволеність пацієнток, пік задоволеності припав на шостий місяць, а найкращі показники зволоження були тоді, коли скінбустери застосовували перед Sculptra. Триває шестимісячне продовження. Дані проміжні, за підтримки виробника, оприлюднені пресрелізом, а не рецензованою публікацією; про контрольну групу не повідомляють.",
              "cite": "Galderma · Проміжні дані дослідження, 2026",
              "url": "https://www.galderma.com/news/interim-data-two-ongoing-investigator-initiated-trials-highlight-role-sculptra-and-restylane"
            },
            {
              "claim": "Приблизно половині жінок у постменопаузі ніхто не розповів про зміни шкіри, волосся й нігтів.",
              "detail": "Опитування 463 жінок у постменопаузі віком від 42 до 83 років, опубліковане в журналі Cosmetics, показало, що близько 47% не отримали інформації про вплив менопаузи на шкіру, волосся та нігті, а більше половини повністю або частково погодилися, що менопауза вплинула на їхню самооцінку. Це було онлайн-опитування із самостійним набором учасниць в одній країні, тож воно радше показує масштаб інформаційної прогалини, ніж точну цифру для популяції.",
              "cite": "Cosmetics · Опитування 463 жінок, 2024",
              "url": "https://doi.org/10.3390/cosmetics11010009"
            }
          ]
        },
        {
          "t": "links",
          "title": "Що ще почитати",
          "items": [
            {
              "name": "Чому шкіра так швидко змінюється в менопаузі — і що може та чого не може гормональна терапія",
              "url": "/ua/blog/menopause-skin-oestrogen/",
              "desc": "Системний бік того самого питання: що ЗГТ робить для шкіри і де межі."
            },
            {
              "name": "Огляд 2026 року підтверджує: ЗГТ відновлює колаген, еластичність і зволоженість шкіри",
              "url": "/ua/blog/hrt-restores-skin-collagen-2026-review/",
              "desc": "Що показують оглядові дані щодо системної гормональної терапії та шкіри."
            },
            {
              "name": "Чи справді колагенові продукти покращують шкіру?",
              "url": "/ua/blog/collagen-and-skin/",
              "desc": "Інший продукт, який активно продають для шкіри в менопаузі — і що кажуть дослідження."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "«Естрогенова косметика» — це те саме, що приймати ЗГТ заради шкіри?",
          "a": "Ні, і ці речі варто розділяти. Системна ЗГТ — це рецептурний препарат, який приймають через симптоми менопаузи, а користь для шкіри є задокументованим побічним ефектом, а не причиною його приймати. Місцевий естроген — це гормон, який наносять на певну ділянку шкіри, і це теж рішення лікаря. Засоби з MEP — узагалі третя категорія: негормональні, продаються без рецепта або через клініки і не схвалені як лікарський засіб. Лише перша має великі довготривалі дослідження, і стосуються вони симптомів менопаузи, а не зморшок."
        },
        {
          "q": "У мене був рак грудей. Чи безпечний MEP для мене, якщо він негормональний?",
          "a": "Запитайте свого онколога, а не припускайте. MEP розроблений так, щоб активувати естрогенові рецептори в шкірі, потрапляючи в кровотік уже неактивним метаболітом — тобто без системної гормональної дії за задумом. Але «розроблений так, щоб не» — це не те саме, що «доведено безпечний для цієї групи», а опубліковані дослідження малі й короткі. Рекомендації ASPS дотримуються тієї самої логіки щодо місцевих естрогенів: пацієнтки з раком грудей на інгібіторах ароматази є кандидатками лише за згодою онколога."
        }
      ]
    }
  },
  {
    "slug": "ada-2026-glp1-type1-diabetes-women",
    "date": "2026-07-24",
    "image": "/images/ada-2026-glp1-type1-diabetes-women.jpg",
    "cats": [
      "diabetes"
    ],
    "en": {
      "cat": "Diabetes",
      "title": "The 2026 diabetes guidelines back GLP-1 drugs in type 1 diabetes for the first time",
      "seoTitle": "GLP-1 Drugs Enter Type 1 Diabetes Guidelines — 2026 ADA",
      "metaDesc": "The 2026 ADA Standards of Care endorse GLP-1 drugs for adults with type 1 diabetes and obesity — a first. What changed, the caveats, and why it matters for women.",
      "excerpt": "For the first time, the ADA’s 2026 Standards of Care back GLP-1 medicines to manage obesity in adults with type 1 diabetes. Here’s what changed — and what it means for women with T1D.",
      "meta": "24 July 2026 · 4 min read",
      "lead": "For years the diabetes guidelines kept GLP-1 drugs firmly on the type 2 side of the ledger. The 2026 update quietly changes that — and for women with type 1 diabetes, the reasons it matters go beyond the headline.",
      "blocks": [
        {
          "t": "p",
          "text": "In its 2026 Standards of Care, the American Diabetes Association (ADA) for the first time endorses GLP-1 receptor agonist–based therapy as an option to manage obesity in adults who have type 1 diabetes (T1D) and a body mass index of 30 or above (27.5 or above for Asian Americans). Bariatric (metabolic) surgery is recommended for the same group. Earlier editions had kept these drugs out of routine type 1 care."
        },
        {
          "t": "p",
          "text": "Two things are worth being precise about. First, this is a recommendation for weight and obesity management — not a glucose-lowering swap, and not for everyone with T1D. Insulin remains essential; a GLP-1 would sit on top of it. Second, drugs such as semaglutide and tirzepatide still aren’t licensed specifically for type 1 diabetes, so this is guideline-supported use for the obesity indication, to be weighed drug by drug with your team."
        },
        {
          "t": "p",
          "text": "The evidence behind it is real but still modest. The largest trials in T1D used liraglutide 1.8 mg and found only small average effects — roughly a 0.4% drop in HbA1c, about 5 kg of weight loss, and slightly lower insulin doses. Data for the newer, stronger drugs (semaglutide, tirzepatide) in type 1 diabetes so far come from small retrospective series and pilot studies rather than large randomised trials. The guideline also flags the real risks of adding a GLP-1 to insulin — low blood sugar, and a form of diabetic ketoacidosis that can occur even when glucose looks near-normal. Remember, too, that Standards of Care are expert consensus built on pooled evidence, not a single clinical trial."
        },
        {
          "t": "p",
          "text": "The 2026 update makes two other changes that quietly help people with T1D: continuous glucose monitoring is now recommended from diagnosis and for anyone who could benefit, with an explicit push to remove insurance barriers; and the prerequisites people previously had to meet to qualify for an automated insulin delivery (‘closed-loop’) system have been dropped to widen access. Together they lower the bar to the tools that smooth out day-to-day control — see my note on [reading glucose patterns](/blog/reading-glucose-patterns/)."
        },
        {
          "t": "p",
          "text": "None of this is written specifically for women — but it lands differently for them. Women with T1D ride a monthly tide of insulin sensitivity: in the second half of the cycle (the luteal phase) sensitivity falls, and glucose tends to run higher and more variable. At the other end of the reproductive years, a 2025 Dutch survey of 159 women with T1D found about two-thirds felt their control worsened after menopause, when falling oestrogen adds insulin resistance and visceral weight. An obesity-management tool that also protects the heart, kidneys and liver is therefore squarely relevant to midlife women — with the honest caveat that women have long been under-represented in T1D drug and device trials, so this is a conversation to individualise, not a prescription to assume. If perimenopause is part of your picture, my post on [perimenopause and blood sugar](/blog/perimenopause-diabetes-blood-sugar/) goes deeper."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "The 2026 ADA Standards endorse GLP-1–based therapy for obesity in adults with type 1 diabetes.",
              "detail": "Recommendation 8.29 in the ADA’s Standards of Care in Diabetes—2026 supports GLP-1 receptor agonist–based therapy (evidence grade B) and metabolic surgery (grade C) as obesity-management options for adults with type 1 diabetes and a BMI ≥30 kg/m² (≥27.5 for Asian Americans). It is a shift from earlier Standards, which excluded GLP-1s from routine type 1 care on the grounds of limited evidence and safety concerns. The Standards are evidence-graded clinical guidelines, not a single trial.",
              "cite": "American Diabetes Association · Standards of Care in Diabetes—2026, Section 8",
              "url": "https://diabetesjournals.org/care/article/49/Supplement_1/S166/163915/8-Obesity-and-Weight-Management-for-the-Prevention"
            },
            {
              "claim": "GLP-1 evidence in type 1 diabetes is still modest and mostly from liraglutide.",
              "detail": "The largest randomised trials of GLP-1 receptor agonists in type 1 diabetes used liraglutide 1.8 mg daily and showed modest effects — about a 0.4% reduction in HbA1c, roughly 5 kg of weight loss, and small reductions in insulin dose. Evidence for semaglutide and tirzepatide in type 1 diabetes so far comes mainly from small retrospective case series and pilot studies. Adding a GLP-1 to insulin raises the risk of hypoglycaemia and of euglycaemic diabetic ketoacidosis.",
              "cite": "diaTribe · Your Guide to the 2026 ADA Standards of Care",
              "url": "https://diatribe.org/diabetes-management/your-guide-2026-ada-standards-care"
            },
            {
              "claim": "Around two-thirds of women with type 1 diabetes report worse glucose control after menopause.",
              "detail": "In a 2025 cross-sectional survey of 159 women with type 1 diabetes in the Netherlands, about two-thirds reported that their blood-glucose regulation felt worse after menopause. Separately, controlled studies show insulin sensitivity falls in the luteal (second) half of the menstrual cycle, raising average glucose and time above range. Both are observational or physiological findings, not treatment trials.",
              "cite": "Diabetologia · Cross-sectional survey, 2025",
              "url": "https://link.springer.com/article/10.1007/s00125-025-06518-z"
            }
          ]
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "The type 1 diabetes cure trials worth watching",
              "url": "/blog/type-1-diabetes-cure-trials/",
              "desc": "A filterable tracker of the most promising T1D cure and disease-modifying trials."
            },
            {
              "name": "Every patient in a small type 1 diabetes trial became insulin-free",
              "url": "/blog/islet-transplant-insulin-independence/",
              "desc": "An early islet-transplant trial hints at where cell-replacement therapy is heading."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Does this mean people with type 1 diabetes should start a GLP-1 like Ozempic?",
          "a": "Not from the headline alone. The 2026 guideline supports GLP-1s specifically for adults with type 1 diabetes who also have obesity (BMI ≥30), as a way to manage weight alongside insulin — not as a routine addition for everyone with T1D, and not as a glucose treatment in its own right. Whether it fits you depends on your weight, your other health risks and your team’s judgement, because these drugs aren’t licensed for type 1 and add some risk on top of insulin."
        },
        {
          "q": "Can a GLP-1 replace insulin in type 1 diabetes?",
          "a": "No. Type 1 diabetes means the body makes little or no insulin, so insulin is life-sustaining and can’t be replaced by a GLP-1. In type 1 a GLP-1 is only ever an add-on — here, for managing obesity — and using one alongside insulin needs care, because it can increase the risk of low blood sugar and of ketoacidosis. Never adjust or stop insulin without medical advice."
        }
      ]
    },
    "ua": {
      "cat": "Діабет",
      "title": "Настанови з діабету 2026 вперше підтримують препарати GLP-1 при діабеті 1 типу",
      "seoTitle": "GLP-1 у настановах при діабеті 1 типу — ADA 2026",
      "metaDesc": "Стандарти ADA 2026 вперше підтримують препарати GLP-1 для дорослих із діабетом 1 типу та ожирінням. Що змінилося, застереження і чому це важливо для жінок.",
      "excerpt": "Уперше Стандарти медичної допомоги ADA 2026 підтримують препарати GLP-1 для контролю ваги в дорослих із діабетом 1 типу. Що змінилося — і що це означає для жінок із ЦД1.",
      "meta": "24 липня 2026 · 4 хв читання",
      "lead": "Роками настанови з діабету тримали препарати GLP-1 суто на боці 2-го типу. Оновлення 2026 року тихо це змінює — і для жінок із діабетом 1 типу причини, чому це важливо, виходять за межі заголовка.",
      "blocks": [
        {
          "t": "p",
          "text": "У Стандартах медичної допомоги 2026 року Американська діабетична асоціація (ADA) вперше підтримує терапію на основі агоністів рецепторів GLP-1 як варіант контролю ожиріння в дорослих, які мають діабет 1 типу (ЦД1) та індекс маси тіла 30 і вище (27,5 і вище для американців азійського походження). Баріатрична (метаболічна) хірургія рекомендована для тієї самої групи. Попередні редакції тримали ці препарати поза межами звичайного лікування 1 типу."
        },
        {
          "t": "p",
          "text": "Дві речі варто уточнити. По-перше, це рекомендація щодо контролю ваги й ожиріння — а не заміна цукрознижувальної терапії й не для всіх із ЦД1. Інсулін залишається необхідним; GLP-1 додається понад нього. По-друге, препарати на кшталт семаглутиду й тирзепатиду досі не ліцензовані саме для діабету 1 типу, тож це підтримане настановами застосування за показанням «ожиріння», яке зважують окремо для кожного препарату разом із вашою командою."
        },
        {
          "t": "p",
          "text": "Доказова база реальна, але поки скромна. Найбільші дослідження при ЦД1 використовували ліраглутид 1,8 мг і виявили лише невеликі середні ефекти — приблизно зниження HbA1c на 0,4%, близько 5 кг втрати ваги та трохи нижчі дози інсуліну. Дані щодо новіших, потужніших препаратів (семаглутид, тирзепатид) при діабеті 1 типу наразі походять радше з невеликих ретроспективних серій і пілотних досліджень, ніж із великих рандомізованих випробувань. Настанови також наголошують на реальних ризиках додавання GLP-1 до інсуліну — низький цукор і форма діабетичного кетоацидозу, що може виникнути навіть за майже нормального рівня глюкози. Пам’ятайте й те, що Стандарти медичної допомоги — це експертний консенсус на основі узагальнених даних, а не окреме клінічне дослідження."
        },
        {
          "t": "p",
          "text": "Оновлення 2026 року вносить ще дві зміни, що тихо допомагають людям із ЦД1: безперервний моніторинг глюкози тепер рекомендують від моменту встановлення діагнозу й для кожного, кому він може бути корисним, із прямим закликом усунути страхові бар’єри; а попередні вимоги, яким людина мала відповідати, щоб отримати систему автоматизованої подачі інсуліну («замкнена петля»), скасовано, щоб розширити доступ. Разом вони знижують поріг до інструментів, які згладжують щоденний контроль — див. мою нотатку про [читання патернів глюкози](/blog/reading-glucose-patterns/)."
        },
        {
          "t": "p",
          "text": "Нічого з цього не написано спеціально для жінок — але для них воно звучить інакше. Жінки з ЦД1 живуть у щомісячному припливі й відпливі чутливості до інсуліну: у другій половині циклу (лютеїнова фаза) чутливість падає, а глюкоза схильна бути вищою й мінливішою. З іншого боку репродуктивних років, нідерландське опитування 2025 року за участю 159 жінок із ЦД1 показало, що близько двох третин відчули погіршення контролю після менопаузи, коли падіння естрогену додає інсулінорезистентності та вісцеральної ваги. Тож інструмент контролю ожиріння, який також захищає серце, нирки й печінку, напряму стосується жінок середнього віку — із чесним застереженням, що жінки давно недостатньо представлені в дослідженнях ліків і пристроїв при ЦД1, тож це розмова, яку треба індивідуалізувати, а не призначення, яке можна припускати. Якщо перименопауза — частина вашої картини, мій допис про [перименопаузу та рівень цукру](/blog/perimenopause-diabetes-blood-sugar/) розкриває це глибше."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Стандарти ADA 2026 підтримують терапію на основі GLP-1 для контролю ожиріння в дорослих із діабетом 1 типу.",
              "detail": "Рекомендація 8.29 у Стандартах медичної допомоги при діабеті ADA 2026 підтримує терапію на основі агоністів рецепторів GLP-1 (рівень доказовості B) і метаболічну хірургію (рівень C) як варіанти контролю ожиріння для дорослих із діабетом 1 типу та ІМТ ≥30 кг/м² (≥27,5 для американців азійського походження). Це зміна порівняно з попередніми Стандартами, які виключали GLP-1 зі звичайного лікування 1 типу через обмежені докази й міркування безпеки. Стандарти — це клінічні настанови з градацією доказів, а не окреме дослідження.",
              "cite": "American Diabetes Association · Standards of Care in Diabetes—2026, Section 8",
              "url": "https://diabetesjournals.org/care/article/49/Supplement_1/S166/163915/8-Obesity-and-Weight-Management-for-the-Prevention"
            },
            {
              "claim": "Докази щодо GLP-1 при діабеті 1 типу поки скромні й переважно щодо ліраглутиду.",
              "detail": "Найбільші рандомізовані дослідження агоністів рецепторів GLP-1 при діабеті 1 типу використовували ліраглутид 1,8 мг на добу й показали помірні ефекти — приблизно зниження HbA1c на 0,4%, близько 5 кг втрати ваги та невелике зниження дози інсуліну. Докази щодо семаглутиду й тирзепатиду при діабеті 1 типу наразі походять переважно з невеликих ретроспективних серій випадків і пілотних досліджень. Додавання GLP-1 до інсуліну підвищує ризик гіпоглікемії та еуглікемічного діабетичного кетоацидозу.",
              "cite": "diaTribe · Your Guide to the 2026 ADA Standards of Care",
              "url": "https://diatribe.org/diabetes-management/your-guide-2026-ada-standards-care"
            },
            {
              "claim": "Близько двох третин жінок із діабетом 1 типу повідомляють про гірший контроль глюкози після менопаузи.",
              "detail": "У поперечному опитуванні 2025 року за участю 159 жінок із діабетом 1 типу в Нідерландах близько двох третин повідомили, що регуляція глюкози після менопаузи відчувалася гіршою. Окремо контрольовані дослідження показують, що чутливість до інсуліну падає в лютеїновій (другій) половині менструального циклу, підвищуючи середню глюкозу й час над цільовим діапазоном. Обидва — спостережні або фізіологічні висновки, а не дослідження лікування.",
              "cite": "Diabetologia · Поперечне опитування, 2025",
              "url": "https://link.springer.com/article/10.1007/s00125-025-06518-z"
            }
          ]
        },
        {
          "t": "links",
          "title": "Читайте також",
          "items": [
            {
              "name": "Дослідження щодо лікування діабету 1 типу, за якими варто стежити",
              "url": "/blog/type-1-diabetes-cure-trials/",
              "desc": "Трекер із фільтрами найперспективніших досліджень щодо лікування та зупинки ЦД1."
            },
            {
              "name": "Усі учасники невеликого дослідження діабету 1 типу відмовилися від інсуліну",
              "url": "/blog/islet-transplant-insulin-independence/",
              "desc": "Раннє дослідження трансплантації острівцевих клітин натякає, куди рухається клітинна замісна терапія."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи означає це, що людям із діабетом 1 типу варто почати GLP-1, як-от Ozempic?",
          "a": "Не за самим лише заголовком. Настанова 2026 року підтримує GLP-1 саме для дорослих із діабетом 1 типу, які також мають ожиріння (ІМТ ≥30), як спосіб контролю ваги поряд з інсуліном — а не як звичайне доповнення для всіх із ЦД1 і не як самостійне цукрознижувальне лікування. Чи підходить це вам, залежить від ваги, інших ризиків для здоров’я та рішення вашої команди, адже ці препарати не ліцензовані для 1 типу й додають певний ризик понад інсулін."
        },
        {
          "q": "Чи може GLP-1 замінити інсулін при діабеті 1 типу?",
          "a": "Ні. Діабет 1 типу означає, що організм виробляє мало інсуліну або зовсім його не виробляє, тож інсулін є життєво необхідним, і GLP-1 його не замінить. При 1 типі GLP-1 завжди лише доповнення — тут для контролю ожиріння, — а застосування його разом з інсуліном потребує обережності, бо він може підвищувати ризик низького цукру та кетоацидозу. Ніколи не змінюйте й не припиняйте інсулін без консультації лікаря."
        }
      ]
    }
  },
  {
    "slug": "menstrual-blood-research-medicine",
    "date": "2026-07-19",
    "image": "/images/menstrual-blood-research-medicine.jpg",
    "cats": [
      "perimenopause",
      "diabetes"
    ],
    "en": {
      "cat": "Women's Health & Research",
      "title": "What menstrual blood is teaching modern medicine",
      "seoTitle": "Menstrual Blood in Medicine: Tests & Stem Cell Research",
      "metaDesc": "A verified guide to how menstrual blood is used in real medicine: an FDA-cleared diabetes test, stem-cell research, and non-invasive clues to endometriosis and autoimmune disease.",
      "excerpt": "A sample medicine spent centuries discarding is now an FDA-cleared diabetes test, a renewable source of stem cells, and a rare non-invasive window onto the immune system — including autoimmune disease.",
      "meta": "19 July 2026 · 9 min read",
      "lead": "For most of history, menstrual blood was treated as waste — something to absorb, hide and throw away. In the last few years, researchers have started treating it as the opposite: one of the richest, most accessible samples the female body offers. Here's what it's already doing in medicine, and the autoimmune clues scientists are only beginning to read.",
      "blocks": [
        {
          "t": "p",
          "text": "I'll be honest about why this caught my attention. I've lived with type 1 diabetes for 23 years, so I've given more blood samples than I can count — fingertips, veins, the lot. The idea that some of that testing could one day happen from a sample I already produce every month, with no needle at all, is genuinely exciting to me. But hope and hype sit close together in women's health, so I've tried to separate what is actually approved and published from what is still a promise."
        },
        {
          "t": "p",
          "text": "It helps to know that menstrual blood is not simply blood. Collected in the first day or so of a period, it carries shed cells from the endometrium — the lining of the uterus — along with immune cells, stem cells and, by one count, more than 350 proteins not found in ordinary circulating blood. That mix is exactly why it is useful in three very different ways: as a non-invasive diagnostic sample, as a renewable source of stem cells, and as a window onto the immune system."
        },
        {
          "t": "h",
          "text": "A diabetes test that reads a pad, not a needle"
        },
        {
          "t": "p",
          "text": "The clearest real-world example arrived in January 2024, when a company called Qvin received FDA clearance for the Q-Pad — the first test authorised to measure HbA1c from menstrual blood. It looks like an ordinary pad, but it holds a small collection strip; you wear it, remove the strip and post it to a lab, which reads your average blood sugar over the previous three months. No finger-prick, no blood draw."
        },
        {
          "t": "p",
          "text": "For anyone living with diabetes, HbA1c is the number that shapes every appointment, and I've watched mine be taken by needle for two decades. In Qvin's validation work, the pad-collected results tracked venous blood closely — correlation coefficients as high as 0.96 and a mean bias under 1%. The clearance is narrow for now (A1c only), but the company is researching the same approach for anaemia, thyroid health, fertility, endometriosis and perimenopause — conditions where women are often under-tested precisely because testing is inconvenient."
        },
        {
          "t": "h",
          "text": "A renewable source of stem cells"
        },
        {
          "t": "p",
          "text": "The second use is more experimental but, to me, more astonishing. In 2007, scientists showed that the endometrial cells shed in menstrual blood include mesenchymal stem cells — now usually called menstrual blood-derived stem cells, or MenSCs. Unlike bone-marrow stem cells, which need a painful, invasive extraction, these can be collected non-invasively, month after month, from something the body discards anyway. They multiply quickly in the lab and provoke relatively little immune reaction."
        },
        {
          "t": "p",
          "text": "In animal and early laboratory studies, MenSCs have been tested against a long list of conditions — liver disease, heart damage, stroke, wounds that won't heal — and, close to my own heart, type 1 diabetes. In one 2022 study, transplanting these cells into diabetic mice improved their symptoms and protected their organs, performing on par with the umbilical-cord stem cells researchers already use. It is important to be clear: this is mouse work, not an approved treatment, and the road from a promising rodent study to a therapy for people is long and littered with failures. But the source itself — accessible, renewable, ethically uncomplicated — is what keeps this field moving."
        },
        {
          "t": "h",
          "text": "The autoimmune connection — what the research actually shows"
        },
        {
          "t": "p",
          "text": "You asked specifically about autoimmune disease, and it is a good instinct, because this is where menstrual blood gets most interesting. Start with a stark fact: [roughly 80% of people with autoimmune conditions are women](https://www.scientificamerican.com/article/why-nearly-80-percent-of-autoimmune-sufferers-are-female/), who carry up to four times the risk men do. The reasons are still being untangled — sex hormones, and increasingly the X chromosome itself — but the upshot is that autoimmunity is, disproportionately, a women's health problem. And menstrual blood is a sample only women produce, packed with the very immune cells involved."
        },
        {
          "t": "p",
          "text": "Two threads are worth watching. The first is that MenSCs don't just regenerate tissue — they calm the immune system, dampening overactive T cells and B cells. In a mouse model of multiple sclerosis (experimental autoimmune encephalomyelitis), menstrual blood-derived cells eased the disease specifically by inhibiting T-cell activation. That same immune-modulating property is why mesenchymal stem cells more broadly are being trialled in lupus, rheumatoid arthritis and type 1 diabetes — all conditions where the immune system attacks the body's own tissue."
        },
        {
          "t": "p",
          "text": "The second thread is diagnostic, and it runs through endometriosis — a disease that affects roughly one in ten women, takes seven to ten years to diagnose, and shares many features with autoimmune conditions, including the broad T- and B-cell activation doctors use to define autoimmunity. At the Feinstein Institutes in New York, the long-running ROSE study (Research OutSmarts Endometriosis), led by Christine Metz and the autoimmunity geneticist Peter Gregersen, is analysing menstrual effluent cell by cell, using single-cell RNA sequencing, to build a non-invasive test that could replace diagnostic surgery. Related work now uses the immune profile of the endometrium to [assess women with systemic autoimmune diseases such as lupus before they try to conceive](https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2023.1334231/full)."
        },
        {
          "t": "p",
          "text": "None of this means menstrual blood is a magic key to autoimmune disease. But it gives researchers something they have rarely had: repeated, low-cost, non-invasive access to immune cells from the exact population most affected."
        },
        {
          "t": "h",
          "text": "The honest caveats"
        },
        {
          "t": "p",
          "text": "Because this is women's health, and because I've been burned by overselling before, here is the sober version. Only one menstrual-blood test is FDA-cleared, and only for HbA1c; the endometriosis tests are still in research, not on pharmacy shelves. The stem-cell therapies are overwhelmingly preclinical — cells in dishes and studies in mice, not proven treatments you can ask for. Be wary of any clinic already selling menstrual stem cell cures; the science isn't there yet. What is real is the direction of travel, and it is genuinely promising."
        },
        {
          "t": "h",
          "text": "Why a discarded sample matters so much"
        },
        {
          "t": "p",
          "text": "The thread running through this whole journal is that women's health after 40 — and women's health generally — has been under-studied for a long time. Part of the reason is practical: research needs samples, and samples usually mean needles, clinics and cost. Menstrual blood quietly removes that barrier. A sample most of us have spent our lives throwing away turns out to be a monthly, needle-free readout of metabolism, hormones and immunity. If even a fraction of this research delivers, the humble period could become one of the most useful diagnostic tools we have — and, for once, one built entirely around the female body."
        },
        {
          "t": "links",
          "title": "Where to follow this research",
          "items": [
            {
              "name": "Qvin — the Q-Pad",
              "url": "https://qvin.com/",
              "desc": "The company behind the Q-Pad, the first FDA-cleared test to measure HbA1c from menstrual blood, with more biomarkers in development."
            },
            {
              "name": "ROSE study — Feinstein Institutes",
              "url": "https://feinstein.northwell.edu/institutes-researchers/institute-molecular-medicine/robert-s-boas-center-for-genomics-and-human-genetics/rose-research-outsmarts-endometriosis",
              "desc": "A decade-long study using menstrual effluent and single-cell sequencing to build a non-invasive test for endometriosis and understand its biology."
            },
            {
              "name": "Endometriosis Foundation of America",
              "url": "https://www.endofound.org/",
              "desc": "Plain-language research updates on endometriosis, including the menstrual-blood diagnostic work, plus patient support resources."
            }
          ]
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "p",
          "text": "This is a fast-moving field, so here is where the evidence stands today — what is approved, what is published, and what is still confined to the lab."
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "A menstrual pad can now measure blood sugar — the first FDA-cleared test of its kind.",
              "detail": "In January 2024, Qvin received FDA clearance for the Q-Pad, which measures HbA1c from self-collected menstrual blood with no needle. In validation studies its results tracked standard venous blood closely, with correlation coefficients up to 0.96 and a mean bias under 1%.",
              "cite": "Qvin · PR Newswire, January 2024",
              "url": "https://www.prnewswire.com/news-releases/qvin-introduces-q-pad-transforming-womens-health-with-fda-cleared-lab-testing-using-menstrual-blood-302027835.html"
            },
            {
              "claim": "Menstrual blood contains stem cells that can be collected without a needle.",
              "detail": "First described in 2007, menstrual blood-derived stem cells (MenSCs) are mesenchymal stem cells from the shed uterine lining. They are abundant, easy to grow, low in immunogenicity and collected non-invasively — practical advantages over bone-marrow sources.",
              "cite": "Stem Cell Research & Therapy · review of MenSCs in regenerative medicine",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6318883/"
            },
            {
              "claim": "In diabetic mice, menstrual blood stem cells improved symptoms and protected organs.",
              "detail": "A 2022 study transplanted MenSCs into mice with streptozotocin-induced type 1 diabetes; the cells improved the disease and protected major organs, performing comparably to umbilical-cord stem cells. This is preclinical (animal) work, not an approved therapy.",
              "cite": "World Journal of Stem Cells, 2022;14(1):104–116",
              "url": "https://pubmed.ncbi.nlm.nih.gov/35126831/"
            },
            {
              "claim": "The same cells eased a multiple-sclerosis-like disease by calming T cells.",
              "detail": "In a mouse model of MS (experimental autoimmune encephalomyelitis), menstrual blood-derived cells reduced disease severity specifically by inhibiting T-cell activation — the immunomodulatory property also being explored in lupus, rheumatoid arthritis and type 1 diabetes.",
              "cite": "Stem Cell Research & Therapy, 2022",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8995916/"
            },
            {
              "claim": "Menstrual blood is being used to build a non-invasive endometriosis test.",
              "detail": "The ROSE study at the Feinstein Institutes analyses menstrual effluent with single-cell RNA sequencing to distinguish endometriosis from healthy tissue, aiming to replace diagnostic surgery and shorten the typical seven-to-ten-year delay. Endometriosis shares several features with autoimmune disease.",
              "cite": "Feinstein Institutes for Medical Research · ROSE study",
              "url": "https://feinstein.northwell.edu/institutes-researchers/institute-molecular-medicine/robert-s-boas-center-for-genomics-and-human-genetics/rose-research-outsmarts-endometriosis"
            }
          ]
        },
        {
          "t": "p",
          "text": "I'll keep an eye on this as the trials and tests mature. For now, the take-home is simple: the next time you're told there is not enough research on women's bodies, know that some scientists have found their answer in the one sample medicine spent centuries ignoring."
        }
      ],
      "faq": [
        {
          "q": "Can menstrual blood really be used for medical tests?",
          "a": "Yes — one test is already FDA-cleared. Qvin's Q-Pad, cleared in 2024, measures HbA1c (average blood sugar) from blood collected on a modified pad, with no needle. Researchers are studying the same non-invasive approach for anaemia, thyroid health, fertility, endometriosis and perimenopause, though those uses are not approved yet."
        },
        {
          "q": "What are menstrual blood stem cells (MenSCs)?",
          "a": "They are mesenchymal stem cells found in the endometrial tissue shed during a period, first identified in 2007. They can be collected non-invasively and grown easily in the lab, which makes them an attractive research tool. So far they have mostly been tested in animals — for liver, heart, wound and type 1 diabetes models — not in approved human therapies."
        },
        {
          "q": "Is there a link between menstrual blood research and autoimmune disease?",
          "a": "There are two. First, menstrual blood-derived stem cells calm overactive immune cells and have eased a multiple-sclerosis-like disease in mice by inhibiting T cells — the same property being explored for lupus, rheumatoid arthritis and type 1 diabetes. Second, menstrual blood is being used to study and diagnose endometriosis, which shares many features with autoimmune disease. Since about 80% of autoimmune patients are women, a female-specific, non-invasive sample is especially valuable."
        },
        {
          "q": "Can menstrual blood diagnose endometriosis?",
          "a": "Not yet in routine practice, but it is close. The ROSE study at the Feinstein Institutes is analysing menstrual effluent with single-cell sequencing to build a non-invasive test that could replace diagnostic surgery — potentially cutting the current seven-to-ten-year diagnostic delay. It is still in research."
        },
        {
          "q": "Are menstrual stem cell treatments available now?",
          "a": "No. Despite promising animal studies, no MenSC therapy is approved, and the only cleared menstrual-blood test measures HbA1c. Be cautious of any clinic advertising menstrual stem cell cures — the evidence is not there yet. Always discuss options with a qualified doctor."
        }
      ]
    },
    "ua": {
      "cat": "Жіноче здоров'я та дослідження",
      "title": "Чого менструальна кров вчить сучасну медицину",
      "seoTitle": "Менструальна кров у медицині: тести й стовбурові клітини",
      "metaDesc": "Перевірений путівник тим, як менструальну кров використовують у реальній медицині: схвалений FDA тест на діабет, дослідження стовбурових клітин і неінвазивні підказки щодо ендометріозу та автоімунних хвороб.",
      "excerpt": "Зразок, який медицина століттями викидала, тепер є схваленим FDA тестом на діабет, відновлюваним джерелом стовбурових клітин і рідкісним неінвазивним вікном до імунної системи — зокрема автоімунних хвороб.",
      "meta": "19 липня 2026 · 9 хв читання",
      "lead": "Упродовж майже всієї історії менструальну кров вважали відходами — чимось, що треба увібрати, сховати й викинути. За останні кілька років дослідники почали ставитися до неї навпаки: як до одного з найбагатших і найдоступніших зразків, які дає жіноче тіло. Ось що вона вже робить у медицині — і які автоімунні підказки науковці лише починають розгадувати.",
      "blocks": [
        {
          "t": "p",
          "text": "Скажу чесно, чому це привернуло мою увагу. Я живу з діабетом 1 типу вже 23 роки, тож здала більше зразків крові, ніж можу порахувати — з пальця, з вени, яких тільки не було. Думка про те, що частина цих аналізів колись могла б робитися зі зразка, який моє тіло й так виділяє щомісяця, узагалі без голки, мене справді захоплює. Але у сфері жіночого здоров'я надія й ажіотаж стоять поруч, тож я намагалася відокремити те, що справді схвалене й опубліковане, від того, що поки лишається обіцянкою."
        },
        {
          "t": "p",
          "text": "Варто знати, що менструальна кров — це не просто кров. Зібрана в перший день менструації чи близько того, вона несе злущені клітини ендометрія — вистилки матки — разом з імунними клітинами, стовбуровими клітинами і, за одним підрахунком, понад 350 білками, яких немає у звичайній циркулюючій крові. Саме ця суміш і робить її корисною у трьох дуже різних напрямах: як неінвазивний діагностичний зразок, як відновлюване джерело стовбурових клітин і як вікно до імунної системи."
        },
        {
          "t": "h",
          "text": "Тест на діабет, що зчитує прокладку, а не голку"
        },
        {
          "t": "p",
          "text": "Найяскравіший приклад із реального життя з'явився в січні 2024 року, коли компанія Qvin отримала схвалення FDA для Q-Pad — першого тесту, дозволеного для вимірювання HbA1c із менструальної крові. Він має вигляд звичайної прокладки, але містить невелику смужку для збору; ви носите її, виймаєте смужку й надсилаєте до лабораторії, яка визначає ваш середній цукор за попередні три місяці. Без проколу пальця, без забору крові з вени."
        },
        {
          "t": "p",
          "text": "Для будь-кого, хто живе з діабетом, HbA1c — це показник, довкола якого будується кожен прийом, і я двадцять років спостерігала, як його беруть голкою. У валідаційних дослідженнях Qvin результати, зібрані прокладкою, тісно збігалися з венозною кров'ю — коефіцієнти кореляції сягали 0,96, а середнє відхилення було менше 1%. Наразі дозвіл вузький (лише A1c), але компанія досліджує той самий підхід для анемії, здоров'я щитоподібної залози, фертильності, ендометріозу та перименопаузи — станів, за яких жінок часто недообстежують саме тому, що аналізи незручні."
        },
        {
          "t": "h",
          "text": "Відновлюване джерело стовбурових клітин"
        },
        {
          "t": "p",
          "text": "Друге застосування експериментальніше, але, як на мене, ще дивовижніше. У 2007 році науковці показали, що клітини ендометрія, які злущуються в менструальну кров, містять мезенхімальні стовбурові клітини — тепер їх зазвичай називають стовбуровими клітинами з менструальної крові, або MenSC. На відміну від стовбурових клітин кісткового мозку, які потребують болісного інвазивного забору, ці можна збирати неінвазивно, місяць за місяцем, із того, що тіло й так відкидає. Вони швидко розмножуються в лабораторії й викликають відносно слабку імунну реакцію."
        },
        {
          "t": "p",
          "text": "У дослідженнях на тваринах і ранніх лабораторних роботах MenSC вивчали при цілій низці станів — хворобах печінки, ушкодженні серця, інсульті, ранах, що не гояться, — і, що особливо близьке мені, діабеті 1 типу. В одному дослідженні 2022 року пересадка цих клітин мишам із діабетом покращила їхні симптоми й захистила органи, спрацювавши нарівні з клітинами пуповини, які дослідники вже використовують. Тут треба бути відвертою: це робота на мишах, а не схвалене лікування, і шлях від перспективного дослідження на гризунах до терапії для людей довгий і всіяний невдачами. Але саме джерело — доступне, відновлюване, без етичних ускладнень — і рухає цю галузь уперед."
        },
        {
          "t": "h",
          "text": "Автоімунний зв'язок — що насправді показують дослідження"
        },
        {
          "t": "p",
          "text": "Ви запитали саме про автоімунні хвороби — і не дарма, бо саме тут менструальна кров стає найцікавішою. Почнімо з разючого факту: [приблизно 80% людей з автоімунними станами — жінки](https://www.scientificamerican.com/article/why-nearly-80-percent-of-autoimmune-sufferers-are-female/), які мають до чотирьох разів вищий ризик, ніж чоловіки. Причини ще розплутують — статеві гормони, а дедалі частіше й сама Х-хромосома, — але висновок такий: автоімунні хвороби вражають переважно жінок. А менструальна кров — це зразок, який утворюють лише жінки, наповнений саме тими імунними клітинами, які беруть у цьому участь."
        },
        {
          "t": "p",
          "text": "Варто стежити за двома напрямами. Перший: MenSC не лише відновлюють тканини — вони заспокоюють імунну систему, гальмуючи надмірно активні T- і B-клітини. У мишачій моделі розсіяного склерозу (експериментальний автоімунний енцефаломієліт) клітини з менструальної крові полегшили хворобу саме через пригнічення активації T-клітин. Ця сама здатність модулювати імунітет і є причиною, чому мезенхімальні стовбурові клітини загалом випробовують при вовчаку, ревматоїдному артриті та діабеті 1 типу — усіх станах, за яких імунна система атакує власні тканини організму."
        },
        {
          "t": "p",
          "text": "Другий напрям — діагностичний, і він проходить через ендометріоз — хворобу, яка вражає приблизно одну з десяти жінок, діагностується по сім–десять років і має багато спільного з автоімунними станами, зокрема ту широку активацію T- і B-клітин, якою лікарі визначають автоімунність. У Feinstein Institutes у Нью-Йорку багаторічне дослідження ROSE (Research OutSmarts Endometriosis) під керівництвом Крістін Метц і генетика автоімунності Пітера Ґреґерсена аналізує менструальні виділення клітину за клітиною, за допомогою одноклітинного секвенування РНК, щоб створити неінвазивний тест, який міг би замінити діагностичну операцію. Суміжні дослідження тепер використовують імунний профіль ендометрія, щоб [оцінювати жінок із системними автоімунними хворобами, як-от вовчак, перш ніж вони спробують завагітніти](https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2023.1334231/full)."
        },
        {
          "t": "p",
          "text": "Ніщо з цього не означає, що менструальна кров — чарівний ключ до автоімунних хвороб. Але вона дає дослідникам те, чого вони рідко мали: повторюваний, дешевий, неінвазивний доступ до імунних клітин саме тієї популяції, яка страждає найбільше."
        },
        {
          "t": "h",
          "text": "Чесні застереження"
        },
        {
          "t": "p",
          "text": "Оскільки це жіноче здоров'я і оскільки мене вже колись обпікали надмірні обіцянки, ось тверезий погляд. Схвалений FDA лише один тест на основі менструальної крові, і лише для HbA1c; тести на ендометріоз досі в дослідженнях, а не на аптечних полицях. Терапії стовбуровими клітинами переважно доклінічні — клітини в чашках і дослідження на мишах, а не доведений метод лікування, який можна отримати. Остерігайтеся будь-якої клініки, що вже продає «лікування менструальними стовбуровими клітинами»; науки для цього поки немає. Що справді реальне — це напрям руху, і він по-справжньому багатообіцяючий."
        },
        {
          "t": "h",
          "text": "Чому викинутий зразок так багато важить"
        },
        {
          "t": "p",
          "text": "Наскрізна ідея всього цього журналу — у тому, що жіноче здоров'я після 40 — та й жіноче здоров'я взагалі — довго було недостатньо вивченим. Почасти причина суто практична: дослідженням потрібні зразки, а зразки зазвичай означають голки, клініки й витрати. Менструальна кров тихо усуває цей бар'єр. Зразок, який більшість із нас усе життя викидала, виявляється щомісячним джерелом даних про обмін речовин, гормони та імунітет — без жодної голки. Якщо здійсниться бодай частина цих досліджень, звичайна менструація може стати одним із найкорисніших діагностичних інструментів, які ми маємо, — і, нарешті, побудованим цілком навколо жіночого тіла."
        },
        {
          "t": "links",
          "title": "Де стежити за цими дослідженнями",
          "items": [
            {
              "name": "Qvin — Q-Pad",
              "url": "https://qvin.com/",
              "desc": "Компанія, що створила Q-Pad — перший схвалений FDA тест для вимірювання HbA1c із менструальної крові, з іншими біомаркерами в розробці."
            },
            {
              "name": "Дослідження ROSE — Feinstein Institutes",
              "url": "https://feinstein.northwell.edu/institutes-researchers/institute-molecular-medicine/robert-s-boas-center-for-genomics-and-human-genetics/rose-research-outsmarts-endometriosis",
              "desc": "Десятирічне дослідження, що використовує менструальні виділення й одноклітинне секвенування, щоб створити неінвазивний тест на ендометріоз і зрозуміти його біологію."
            },
            {
              "name": "Endometriosis Foundation of America",
              "url": "https://www.endofound.org/",
              "desc": "Зрозумілі оновлення досліджень щодо ендометріозу, зокрема діагностичної роботи з менструальною кров'ю, а також ресурси підтримки пацієнток."
            }
          ]
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "p",
          "text": "Це галузь, що швидко рухається, тож ось де стоять докази сьогодні — що схвалене, що опубліковане, а що поки лишається в лабораторії."
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Менструальна прокладка тепер може вимірювати цукор у крові — перший схвалений FDA тест такого роду.",
              "detail": "У січні 2024 року Qvin отримала схвалення FDA для Q-Pad, який вимірює HbA1c із самостійно зібраної менструальної крові без голки. У валідаційних дослідженнях його результати тісно збігалися зі звичайною венозною кров'ю — коефіцієнти кореляції до 0,96 і середнє відхилення менше 1%.",
              "cite": "Qvin · PR Newswire, січень 2024",
              "url": "https://www.prnewswire.com/news-releases/qvin-introduces-q-pad-transforming-womens-health-with-fda-cleared-lab-testing-using-menstrual-blood-302027835.html"
            },
            {
              "claim": "Менструальна кров містить стовбурові клітини, які можна зібрати без голки.",
              "detail": "Уперше описані у 2007 році, стовбурові клітини з менструальної крові (MenSC) — це мезенхімальні стовбурові клітини зі злущеної вистилки матки. Вони численні, легко ростуть, мають низьку імуногенність і збираються неінвазивно — практичні переваги над джерелами з кісткового мозку.",
              "cite": "Stem Cell Research & Therapy · огляд MenSC у регенеративній медицині",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6318883/"
            },
            {
              "claim": "У мишей із діабетом стовбурові клітини з менструальної крові покращили симптоми й захистили органи.",
              "detail": "У дослідженні 2022 року MenSC пересадили мишам зі стрептозотоцин-індукованим діабетом 1 типу; клітини покращили перебіг хвороби й захистили основні органи, спрацювавши порівнянно з клітинами пуповини. Це доклінічна (на тваринах) робота, а не схвалена терапія.",
              "cite": "World Journal of Stem Cells, 2022;14(1):104–116",
              "url": "https://pubmed.ncbi.nlm.nih.gov/35126831/"
            },
            {
              "claim": "Ті самі клітини полегшили хворобу, подібну до розсіяного склерозу, заспокоївши T-клітини.",
              "detail": "У мишачій моделі РС (експериментальний автоімунний енцефаломієліт) клітини з менструальної крові зменшили тяжкість хвороби саме через пригнічення активації T-клітин — ту саму імуномодулювальну властивість, яку досліджують при вовчаку, ревматоїдному артриті та діабеті 1 типу.",
              "cite": "Stem Cell Research & Therapy, 2022",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8995916/"
            },
            {
              "claim": "Менструальну кров використовують, щоб створити неінвазивний тест на ендометріоз.",
              "detail": "Дослідження ROSE у Feinstein Institutes аналізує менструальні виділення за допомогою одноклітинного секвенування РНК, щоб відрізнити ендометріоз від здорової тканини, прагнучи замінити діагностичну операцію й скоротити типову затримку в сім–десять років. Ендометріоз має кілька спільних рис з автоімунними хворобами.",
              "cite": "Feinstein Institutes for Medical Research · дослідження ROSE",
              "url": "https://feinstein.northwell.edu/institutes-researchers/institute-molecular-medicine/robert-s-boas-center-for-genomics-and-human-genetics/rose-research-outsmarts-endometriosis"
            }
          ]
        },
        {
          "t": "p",
          "text": "Я стежитиму за цим, поки дослідження й тести дозрівають. Наразі висновок простий: наступного разу, коли вам скажуть, що досліджень про жіноче тіло замало, знайте, що деякі науковці знайшли свою відповідь в одному зразку, який медицина століттями ігнорувала."
        }
      ],
      "faq": [
        {
          "q": "Чи справді менструальну кров можна використовувати для медичних аналізів?",
          "a": "Так — один тест уже схвалений FDA. Q-Pad від Qvin, схвалений у 2024 році, вимірює HbA1c (середній цукор у крові) із крові, зібраної на модифіковану прокладку, без голки. Дослідники вивчають той самий неінвазивний підхід для анемії, здоров'я щитоподібної залози, фертильності, ендометріозу та перименопаузи, хоча ці застосування ще не схвалені."
        },
        {
          "q": "Що таке стовбурові клітини з менструальної крові (MenSC)?",
          "a": "Це мезенхімальні стовбурові клітини, що містяться в тканині ендометрія, яка злущується під час менструації, вперше виявлені у 2007 році. Їх можна збирати неінвазивно й легко вирощувати в лабораторії, що робить їх привабливим інструментом для досліджень. Досі їх переважно перевіряли на тваринах — у моделях печінки, серця, ран і діабету 1 типу, — а не у схвалених терапіях для людей."
        },
        {
          "q": "Чи є зв'язок між дослідженнями менструальної крові та автоімунними хворобами?",
          "a": "Так, навіть два. По-перше, стовбурові клітини з менструальної крові заспокоюють надмірно активні імунні клітини й полегшили хворобу, подібну до розсіяного склерозу, у мишей, пригнічуючи T-клітини — ту саму властивість досліджують при вовчаку, ревматоїдному артриті та діабеті 1 типу. По-друге, менструальну кров використовують, щоб вивчати й діагностувати ендометріоз, який має багато спільного з автоімунними хворобами. Оскільки близько 80% пацієнтів з автоімунними станами — жінки, специфічний для жінок неінвазивний зразок особливо цінний."
        },
        {
          "q": "Чи можна діагностувати ендометріоз за менструальною кров'ю?",
          "a": "Поки що не в рутинній практиці, але це близько. Дослідження ROSE у Feinstein Institutes аналізує менструальні виділення за допомогою одноклітинного секвенування, щоб створити неінвазивний тест, який міг би замінити діагностичну операцію — потенційно скоротивши нинішню затримку діагнозу в сім–десять років. Це досі на стадії досліджень."
        },
        {
          "q": "Чи доступне лікування стовбуровими клітинами з менструальної крові вже зараз?",
          "a": "Ні. Попри перспективні дослідження на тваринах, жодна терапія MenSC не схвалена, а єдиний дозволений тест на основі менструальної крові вимірює HbA1c. Будьте обережні з будь-якою клінікою, що рекламує «лікування менструальними стовбуровими клітинами» — доказів для цього поки немає. Завжди обговорюйте варіанти з кваліфікованим лікарем."
        }
      ]
    }
  },
  {
    "slug": "type-1-diabetes-cure-trials",
    "date": "2026-07-19",
    "filedUnder": "tools",
    "image": "/images/type-1-diabetes-cure-trials.jpg",
    "cats": [
      "diabetes"
    ],
    "en": {
      "cat": "Diabetes",
      "title": "Type 1 diabetes cure research: the trials worth following in 2026",
      "seoTitle": "Type 1 Diabetes Cure: What’s Actually Working in 2026",
      "metaDesc": "Some people in type 1 trials have lived years without insulin. An honest, verified guide to the cure research worth following — and how to join a trial.",
      "excerpt": "For the first time, people in trials are living without insulin for years. Here's an honest, verified map of the type 1 cure research worth following — and how to follow or join it.",
      "meta": "19 July 2026 · 11 min read",
      "lead": "A cure for type 1 diabetes has been “five years away” for as long as many of us have lived with it. But something has genuinely shifted. For the first time, people in trials are living without insulin — not for a week, but for years. Here is an honest map of the research actually worth following, and how to follow or even join it yourself.",
      "blocks": [
        {
          "t": "p",
          "text": "I want to be careful with the word “cure,” because hope is precious and it has been sold cheaply before. So let me be clear about what this article is. It is not a promise. Most experimental treatments never reach the clinic, and timelines slip. But the research has reached a point that genuinely deserves your attention — and, if you choose, your participation."
        },
        {
          "t": "p",
          "text": "To make sense of it, it helps to know that type 1 diabetes is really two problems at once. First, the immune system mistakenly destroys the beta cells in the pancreas that make insulin. Second, once those cells are gone, the body can no longer control blood sugar on its own. A true cure has to answer both — and the trials below split neatly into the strategies that tackle each side."
        },
        {
          "t": "p",
          "text": "There are three broad approaches. Replace the lost cells (with transplanted or lab-grown insulin-making cells). Calm or retrain the immune attack (so it stops destroying beta cells). Or protect the cells someone still has, especially right after diagnosis. Some of the most exciting work combines them."
        },
        {
          "t": "h",
          "text": "The trials, side by side"
        },
        {
          "t": "p",
          "text": "Below is a filterable tracker of the most notable programmes. Tap any card to open the full detail — what it is, who can take part (including age), results so far, the honest pros and cons, and a link to the official study on ClinicalTrials.gov. Filter by country, whether it's recruiting, whether it's free to join, interventional or observational, approach or phase — and open the glossary if a term is new. It also includes free screening studies (like TrialNet and the UK's ELSA) that are often the first step to taking part. Every fact here was checked against the trial registry and sponsor reports in July 2026."
        },
        {
          "t": "embed",
          "src": "/t1d-cure-trials/",
          "title": "Type 1 diabetes cure trials tracker",
          "minHeight": 680,
          "cap": "Filterable tracker of type 1 diabetes cure and disease-modifying trials. Educational only — details change often, so always confirm on the study's official page and with your diabetes team."
        },
        {
          "t": "h",
          "text": "Replacing the cells: the closest thing to a functional cure"
        },
        {
          "t": "p",
          "text": "The furthest-advanced programme is Vertex's zimislecel (VX-880), now in a Phase 3 study called FORWARD. It infuses lab-grown, insulin-making islet cells into the liver's blood supply. The early results are the kind we have waited decades for: of the first 12 patients followed for a year, the company reports that 10 came off insulin completely, and all reached healthy blood-sugar targets and stopped having severe hypos. It builds on the same principle as the [donor islet cell transplants that have quietly restored insulin independence](/blog/islet-transplant-insulin-independence/) in a small number of people."
        },
        {
          "t": "p",
          "text": "There is one large catch, and it applies to almost every cell-replacement approach: recipients must take immune-suppressing drugs for life so the body doesn't reject or re-attack the new cells. Those drugs carry real risks, which is why, for now, these trials are limited to people whose diabetes is hardest to manage — usually severe, unpredictable hypoglycaemia."
        },
        {
          "t": "p",
          "text": "That is exactly why two other efforts matter so much. A University of Chicago study pairs an islet transplant with a gentler antibody called tegoprubart instead of the usual harsh anti-rejection drugs — and reports that all 12 recipients so far are insulin-independent. And in Sweden, Sana Biotechnology's team gene-edited donor islet cells to “hide” from the immune system and placed them in one patient with no anti-rejection drugs at all; the cells survived and made insulin for over a year. That single patient, published in a top medical journal, is a proof of principle that could eventually remove the immunosuppression problem entirely."
        },
        {
          "t": "p",
          "text": "One more milestone is worth knowing: in China, doctors reprogrammed a woman's own fat cells into stem cells, turned them into islets, and transplanted them — no donor needed. She became insulin-independent and stayed that way at one year. It was a single case (and she was already on immune-suppressing drugs from an earlier transplant), but using a person's own cells is a genuine step toward sidestepping both the donor shortage and rejection."
        },
        {
          "t": "h",
          "text": "Calming the immune attack"
        },
        {
          "t": "p",
          "text": "The other half of the field tries to stop the immune system attacking beta cells in the first place. This is where the only approved disease-modifying treatment lives: teplizumab (TZIELD). In people at high risk — found through antibody screening, often relatives of someone with type 1 — a two-week course delays the onset of full diabetes by about two years on average. As of April 2026 it is approved in the US from age 1. It does not cure or prevent, but it is the first drug ever shown to change the course of type 1, and it is available now."
        },
        {
          "t": "p",
          "text": "Several others are following. Sanofi's frexalimab and, notably, an existing arthritis tablet called baricitinib both aim to protect the insulin a newly-diagnosed person still has. Baricitinib is especially interesting because it is a cheap, daily pill rather than an infusion, and its Phase 2 results were strong enough to publish in the New England Journal of Medicine; a Phase 3 is now recruiting. Sweden's Diamyd takes a precision route — a lymph-node “vaccine” that only works in people with a particular gene type. And in Poland, PolTREG is testing whether a child's own calming immune cells can prevent type 1 before it ever starts."
        },
        {
          "t": "h",
          "text": "The honest part: what has recently failed"
        },
        {
          "t": "p",
          "text": "Trust matters more than hype, so here is the other side. In 2025, Vertex's VX-264 — an encapsulated cell therapy designed to avoid immunosuppression — was discontinued after it didn't produce enough insulin. The immunotherapy IMCY-0098 was stopped for lack of effect. And the definitive adult trial of verapamil, a blood-pressure drug once hoped to preserve beta cells, came back negative (an earlier study in children had shown a modest signal, so the idea isn't fully dead — but the big adult trial did not work)."
        },
        {
          "t": "p",
          "text": "Two long-running approaches remain genuinely contested. The repeat BCG vaccine work and “Stem Cell Educator” therapy both have loyal followings and years of small studies, but their claims have not been independently reproduced, and mainstream diabetes researchers urge real caution. I have included both in the tracker with clear warnings, because you deserve to see them and to see why experts are sceptical — not to have them quietly left out."
        },
        {
          "t": "h",
          "text": "How to actually follow — or join — a trial"
        },
        {
          "t": "p",
          "text": "If a programme interests you, here is how to go further. Every entry in the tracker links to its official page on [ClinicalTrials.gov](https://clinicaltrials.gov/), the public registry — search the NCT number to see live recruiting status, the exact eligibility criteria, and the contact details for each site. “Recruiting” means they are actively enrolling; “active, not recruiting” means the group is full."
        },
        {
          "t": "p",
          "text": "A few practical notes. Many prevention and early-intervention trials (including the path to teplizumab) start with autoantibody screening, which relatives of people with type 1 can often get free through research programmes like TrialNet and, in Europe, ELSA. Trials have strict criteria — age, how long you've had diabetes, how much of your own insulin is left — so don't be discouraged if one doesn't fit; another may. And never stop or change your current treatment for a trial without your diabetes team; bring the study's page to your appointment and decide together."
        },
        {
          "t": "p",
          "text": "For the bigger picture on where diabetes science is heading — including how the field is starting to treat these as several different diseases rather than one — you might also find my note on [what new research says about type 2 diabetes](/blog/type-2-diabetes-research/) useful."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Lab-grown islet cells (zimislecel) freed most early patients from insulin.",
              "detail": "In Vertex's Phase 1/2 data presented in June 2025, all 12 patients followed for at least a year reached target HbA1c and time-in-range and eliminated severe hypoglycaemia, with 10 of 12 fully insulin-independent. This is company-reported data from an ongoing trial, not yet an approved therapy.",
              "cite": "ClinicalTrials.gov · FORWARD study (NCT04786262)",
              "url": "https://clinicaltrials.gov/study/NCT04786262"
            },
            {
              "claim": "Teplizumab is the first and only approved treatment that changes the course of type 1 diabetes.",
              "detail": "In at-risk (stage 2) people it delays clinical onset by roughly two years; the PROTECT trial also showed it preserves insulin production in the newly diagnosed. US approval was expanded to age 1 and older in April 2026.",
              "cite": "ClinicalTrials.gov · PROTECT (NCT03875729)",
              "url": "https://clinicaltrials.gov/study/NCT03875729"
            },
            {
              "claim": "A daily arthritis tablet, baricitinib, preserved insulin production after diagnosis.",
              "detail": "The BANDIT Phase 2 trial, published in the New England Journal of Medicine in December 2023, found that people taking baricitinib kept significantly more of their own insulin at 48 weeks, with lower insulin needs and better time-in-range. A Phase 3 is now recruiting.",
              "cite": "ClinicalTrials.gov · BANDIT (NCT04774224)",
              "url": "https://clinicaltrials.gov/study/NCT04774224"
            },
            {
              "claim": "Gene-edited islet cells survived in a patient with no immunosuppression.",
              "detail": "A first-in-human report from Sweden using Sana's hypoimmune technology found that donor islet cells edited to evade the immune system survived and produced insulin for over a year in one patient without any anti-rejection drugs — a proof of concept, not yet insulin independence.",
              "cite": "Sana Biotechnology · reported in the New England Journal of Medicine",
              "url": "https://ir.sana.com/news-releases"
            },
            {
              "claim": "A person's own reprogrammed cells reversed their type 1 diabetes for a year.",
              "detail": "In a single published case from Tianjin, China, a woman's own cells were reprogrammed into insulin-making islets and transplanted; she became insulin-independent from day 75 and remained so at one year.",
              "cite": "Cell · Case report, September 2024",
              "url": "https://www.cell.com/cell/fulltext/S0092-8674(24)01022-5"
            }
          ]
        },
        {
          "t": "links",
          "title": "Where to look for trials and screening",
          "items": [
            {
              "name": "ClinicalTrials.gov",
              "url": "https://clinicaltrials.gov/",
              "desc": "The public registry of clinical trials worldwide. Search a study's NCT number (in the tracker above) to see live recruiting status, full eligibility and site contacts."
            },
            {
              "name": "Breakthrough T1D — clinical trials",
              "url": "https://www.breakthfound.org/",
              "desc": "The major type 1 research charity (formerly JDRF). Explains current trials in plain language and helps people find studies they may be eligible for."
            },
            {
              "name": "TrialNet — free autoantibody screening",
              "url": "https://www.trialnet.org/",
              "desc": "Relatives of people with type 1 can get free screening to find early-stage type 1 — the entry point for many prevention trials, including teplizumab."
            },
            {
              "name": "Diabetes UK — research",
              "url": "https://www.diabetes.org.uk/research",
              "desc": "UK-focused, evidence-based updates on diabetes research, plus a helpline on 0345 123 2399."
            }
          ]
        },
        {
          "t": "p",
          "text": "I will keep this tracker updated as trials read out and new ones open. After more than two decades of “five years away,” I am not going to promise you a date. But for the first time, I can point to real people, in real trials, living without insulin — and tell you exactly where to look."
        }
      ],
      "faq": [
        {
          "q": "Is there a cure for type 1 diabetes yet?",
          "a": "Not an approved, widely-available cure. But for the first time, people in trials have lived without insulin for years after receiving lab-grown or transplanted insulin-making cells, and one approved drug (teplizumab) can delay the disease in at-risk people. These are real, verified milestones — but most are still experimental, limited to small numbers, and often require lifelong anti-rejection drugs."
        },
        {
          "q": "Which trial is closest to becoming available?",
          "a": "Vertex's zimislecel (VX-880) is the furthest along — it is in Phase 3, with early patients coming off insulin. Vertex has said it aims to begin regulatory submissions in 2026, but nothing has been filed yet, so a realistic best case is around 2027 or later if the bigger trial succeeds. Teplizumab, which delays rather than cures, is already approved and available in the US."
        },
        {
          "q": "Can I join a type 1 diabetes trial?",
          "a": "Possibly. Each trial has strict criteria — age, how long you've had diabetes, how much of your own insulin remains, and where you live. Use the tracker above to find studies that fit, click through to ClinicalTrials.gov for live recruiting status and contacts, and discuss any trial with your diabetes team before doing anything. Relatives of people with type 1 can also get free autoantibody screening through TrialNet or ELSA, which opens the door to prevention trials."
        },
        {
          "q": "Do cell-replacement cures require lifelong anti-rejection drugs?",
          "a": "For now, most do — including the furthest-advanced programme, because the body would otherwise reject or re-attack the new cells. That's why these trials are currently limited to people with the hardest-to-manage diabetes. The most exciting newer work (gene-edited “hidden” cells and a person's own reprogrammed cells) is specifically trying to remove that requirement, but it is still very early."
        },
        {
          "q": "What about teplizumab — how do I get it?",
          "a": "Teplizumab (TZIELD) is approved in the US for stage 2 type 1 — people who have the autoantibodies and early blood-sugar changes but not yet full diabetes, from age 1. It is usually reached through autoantibody screening (often offered free to relatives of someone with type 1) and given as a roughly two-week course of infusions. Speak to an endocrinologist about screening and eligibility."
        },
        {
          "q": "Does any of this apply to type 2 diabetes?",
          "a": "Mostly not, because the two conditions fail in different ways. Type 1 is an autoimmune attack that destroys the insulin-making beta cells, so the research here is about replacing those cells or stopping the attack. In type 2 the cells are still there but the body responds poorly to insulin, so type 2 diabetes research is aimed elsewhere — weight and metabolic treatments such as GLP-1 drugs, and remission through significant weight loss. The one genuine overlap is beta-cell biology: work on protecting or regrowing beta cells could eventually matter for people with long-standing type 2 who have lost much of their own insulin production."
        }
      ]
    },
    "ua": {
      "cat": "Діабет",
      "title": "Дослідження щодо лікування діабету 1 типу: які дослідження варто стежити у 2026 році",
      "seoTitle": "Лікування діабету 1 типу: дослідження 2026",
      "metaDesc": "Зрозумілий, перевірений путівник найперспективнішими дослідженнями щодо лікування діабету 1 типу у 2026 році — що це, хто може взяти участь і як за ними стежити.",
      "excerpt": "Уперше люди в дослідженнях живуть без інсуліну роками. Ось чесна, перевірена карта досліджень щодо лікування діабету 1 типу — і як за ними стежити чи долучитися.",
      "meta": "19 липня 2026 · 11 хв читання",
      "lead": "Ліки від діабету 1 типу були «за п’ять років від нас» стільки, скільки багато хто з нас із ним живе. Але щось справді змінилося. Уперше люди в дослідженнях живуть без інсуліну — не тиждень, а роками. Ось чесна карта досліджень, за якими справді варто стежити, і як за ними стежити чи навіть долучитися.",
      "blocks": [
        {
          "t": "p",
          "text": "Я хочу бути обережною зі словом «ліки», бо надія — цінна, а її вже не раз продавали дешево. Тож скажу чітко, що це за стаття. Це не обіцянка. Більшість експериментальних методів так і не доходять до клініки, а терміни зсуваються. Але дослідження дійшли точки, яка справді заслуговує вашої уваги — і, якщо захочете, вашої участі."
        },
        {
          "t": "p",
          "text": "Щоб у цьому зорієнтуватися, варто знати, що діабет 1 типу — це насправді дві проблеми водночас. По-перше, імунна система помилково руйнує бета-клітини підшлункової залози, які виробляють інсулін. По-друге, коли цих клітин більше немає, тіло вже не може саме керувати цукром. Справжнє лікування має відповісти на обидві частини — і дослідження нижче акуратно поділяються на стратегії, що працюють із кожною з них."
        },
        {
          "t": "p",
          "text": "Є три широкі підходи. Замінити втрачені клітини (пересадженими або вирощеними в лабораторії клітинами, що виробляють інсулін). Заспокоїти або перенавчити імунну атаку (щоб вона перестала руйнувати бета-клітини). Або захистити ті клітини, які в людини ще є, особливо одразу після діагнозу. Найцікавіші роботи поєднують ці підходи."
        },
        {
          "t": "h",
          "text": "Дослідження поруч"
        },
        {
          "t": "p",
          "text": "Нижче — трекер із фільтрами найпомітніших програм. Натисніть на будь-яку картку, щоб відкрити повні деталі — що це, хто може взяти участь (зокрема вік), результати наразі, чесні плюси й мінуси та посилання на офіційне дослідження на ClinicalTrials.gov. Фільтруйте за країною, статусом набору, безкоштовністю, типом (інтервенційне чи спостережне), підходом або фазою — і відкрийте глосарій, якщо якийсь термін новий. Трекер також містить безкоштовні скринінгові дослідження (як-от TrialNet і британське ELSA), які часто є першим кроком до участі. Кожен факт тут перевірений за реєстром досліджень і звітами спонсорів у липні 2026 року."
        },
        {
          "t": "embed",
          "src": "/t1d-cure-trials-ua/",
          "title": "Трекер досліджень щодо лікування діабету 1 типу",
          "minHeight": 680,
          "cap": "Трекер із фільтрами досліджень щодо лікування та зміни перебігу діабету 1 типу. Лише для інформації — деталі часто змінюються, тож завжди перевіряйте на офіційній сторінці дослідження та зі своєю діабетичною командою."
        },
        {
          "t": "h",
          "text": "Заміна клітин: найближче до функціонального зцілення"
        },
        {
          "t": "p",
          "text": "Найбільш просунута програма — це зиміслецел (VX-880) від Vertex, зараз у дослідженні Фази 3 під назвою FORWARD. Воно вводить у кровотік печінки вирощені в лабораторії острівцеві клітини, що виробляють інсулін. Ранні результати — саме такі, на які ми чекали десятиліттями: із перших 12 пацієнтів, за якими спостерігали рік, компанія повідомляє, що 10 повністю відмовилися від інсуліну, а всі досягли здорових показників цукру й перестали мати тяжкі гіпоглікемії. Це спирається на той самий принцип, що й [трансплантація донорських острівцевих клітин, яка тихо повернула інсулінонезалежність](/blog/islet-transplant-insulin-independence/) кільком людям."
        },
        {
          "t": "p",
          "text": "Є одне велике «але», і воно стосується майже кожного підходу із заміною клітин: реципієнти мають довічно приймати препарати, що пригнічують імунітет, аби тіло не відторгло й не атакувало нові клітини. Ці препарати мають реальні ризики, тому наразі ці дослідження обмежені людьми, чий діабет найважче контролювати — зазвичай через тяжкі, непередбачувані гіпоглікемії."
        },
        {
          "t": "p",
          "text": "Саме тому так важливі два інші напрями. Дослідження Університету Чикаго поєднує трансплантацію острівців із м’якшим антитілом під назвою теґопрубарт замість звичних жорстких препаратів проти відторгнення — і повідомляє, що всі 12 реципієнтів наразі інсулінонезалежні. А у Швеції команда Sana Biotechnology генетично відредагувала донорські острівцеві клітини, щоб вони «ховалися» від імунної системи, і вмістила їх одному пацієнту без жодних препаратів проти відторгнення; клітини вижили й виробляли інсулін понад рік. Цей один пацієнт, описаний у провідному медичному журналі, — це доказ принципу, який згодом міг би взагалі зняти проблему пригнічення імунітету."
        },
        {
          "t": "p",
          "text": "Ще одна віха варта уваги: у Китаї лікарі перепрограмували власні жирові клітини жінки на стовбурові, перетворили їх на острівці й трансплантували — без донора. Вона стала інсулінонезалежною й лишалася такою на першому році. Це був одиничний випадок (і вона вже приймала препарати проти відторгнення після попередньої трансплантації), але використання власних клітин людини — це справжній крок до того, щоб обійти й дефіцит донорів, і відторгнення."
        },
        {
          "t": "h",
          "text": "Як заспокоїти імунну атаку"
        },
        {
          "t": "p",
          "text": "Інша половина галузі намагається взагалі зупинити атаку імунної системи на бета-клітини. Саме тут — єдина схвалена терапія, що змінює перебіг хвороби: теплізумаб (TZIELD). У людей із високим ризиком — яких виявляють через скринінг на антитіла, часто родичів людини з діабетом 1 типу — двотижневий курс відкладає початок повного діабету в середньому приблизно на два роки. З квітня 2026 року він схвалений у США від 1 року. Він не виліковує й не запобігає, але це перший препарат, який доведено змінює перебіг діабету 1 типу, і він доступний уже зараз."
        },
        {
          "t": "p",
          "text": "За ним йдуть інші. Фрексалімаб від Sanofi і, що показово, уже наявна таблетка від артриту під назвою барицитиніб — обидва мають на меті захистити той інсулін, який людина з нещодавнім діагнозом ще має. Барицитиніб особливо цікавий, бо це дешева щоденна таблетка, а не інфузія, і його результати Фази 2 виявилися достатньо вагомими, щоб опублікувати їх у New England Journal of Medicine; зараз триває набір на Фазу 3. Шведська Diamyd обрала точковий шлях — «вакцину» у лімфовузол, яка працює лише в людей із певним типом гена. А в Польщі PolTREG перевіряє, чи можуть власні заспокійливі імунні клітини дитини запобігти діабету 1 типу ще до його початку."
        },
        {
          "t": "h",
          "text": "Чесна частина: що нещодавно зазнало невдачі"
        },
        {
          "t": "p",
          "text": "Довіра важливіша за галас, тож ось інша сторона. У 2025 році VX-264 від Vertex — інкапсульовану клітинну терапію, розроблену, щоб уникнути пригнічення імунітету — припинили після того, як вона не дала достатньо інсуліну. Імунотерапію IMCY-0098 зупинили через відсутність ефекту. А вирішальне доросле дослідження верапамілу, препарату від тиску, на який колись покладали надію щодо збереження бета-клітин, дало негативний результат (раніше дослідження в дітей показало скромний сигнал, тож ідея не зовсім мертва — але велике доросле дослідження не спрацювало)."
        },
        {
          "t": "p",
          "text": "Два тривалі підходи залишаються справді суперечливими. Робота з повторною вакциною БЦЖ і терапія «Stem Cell Educator» мають відданих прихильників і роки невеликих досліджень, але їхні твердження не відтворені незалежно, і провідні дослідники діабету закликають до справжньої обережності. Я включила обидва в трекер із чіткими попередженнями, бо ви заслуговуєте їх бачити й розуміти, чому експерти скептичні, — а не щоб їх тихо оминули."
        },
        {
          "t": "h",
          "text": "Як справді стежити — або долучитися до дослідження"
        },
        {
          "t": "p",
          "text": "Якщо якась програма вас зацікавила, ось як рухатися далі. Кожен пункт у трекері посилається на його офіційну сторінку на [ClinicalTrials.gov](https://clinicaltrials.gov/), публічному реєстрі — шукайте номер NCT, щоб побачити актуальний статус набору, точні критерії участі та контакти кожного центру. «Набір триває» означає, що вони активно набирають учасників; «активне, без набору» — що група вже заповнена."
        },
        {
          "t": "p",
          "text": "Кілька практичних нотаток. Багато профілактичних досліджень і досліджень раннього втручання (зокрема шлях до теплізумабу) починаються зі скринінгу на автоантитіла, який родичі людей із діабетом 1 типу часто можуть пройти безкоштовно через дослідницькі програми на кшталт TrialNet, а в Європі — ELSA. У досліджень суворі критерії — вік, скільки часу ви маєте діабет, скільки власного інсуліну залишилося — тож не варто знеохочуватися, якщо одне не підходить; може підійти інше. І ніколи не припиняйте й не змінюйте нинішнє лікування заради дослідження без своєї діабетичної команди; принесіть сторінку дослідження на прийом і вирішуйте разом."
        },
        {
          "t": "p",
          "text": "Щоб побачити ширшу картину того, куди рухається наука про діабет, вам може бути корисною й моя нотатка про те, [що каже нове дослідження про діабет 2 типу](/blog/type-2-diabetes-research/)."
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Вирощені в лабораторії острівцеві клітини (зиміслецел) звільнили більшість перших пацієнтів від інсуліну.",
              "detail": "За даними Vertex Фази 1/2, представленими у червні 2025 року, усі 12 пацієнтів, за якими спостерігали щонайменше рік, досягли цільових HbA1c і часу в діапазоні та позбулися тяжких гіпоглікемій, а 10 із 12 повністю інсулінонезалежні. Це дані компанії з дослідження, що триває, а не схвалена терапія.",
              "cite": "ClinicalTrials.gov · FORWARD (NCT04786262)",
              "url": "https://clinicaltrials.gov/study/NCT04786262"
            },
            {
              "claim": "Теплізумаб — перша й єдина схвалена терапія, що змінює перебіг діабету 1 типу.",
              "detail": "У людей із ризиком (стадія 2) він відкладає клінічний початок приблизно на два роки; дослідження PROTECT також показало, що він зберігає вироблення інсуліну в людей із нещодавнім діагнозом. У квітні 2026 року схвалення у США розширили до віку від 1 року.",
              "cite": "ClinicalTrials.gov · PROTECT (NCT03875729)",
              "url": "https://clinicaltrials.gov/study/NCT03875729"
            },
            {
              "claim": "Щоденна таблетка від артриту, барицитиніб, зберегла вироблення інсуліну після діагнозу.",
              "detail": "Дослідження BANDIT Фази 2, опубліковане в New England Journal of Medicine у грудні 2023 року, виявило, що люди на барицитинібі зберегли значно більше власного інсуліну на 48-му тижні. Зараз триває набір на Фазу 3.",
              "cite": "ClinicalTrials.gov · BANDIT (NCT04774224)",
              "url": "https://clinicaltrials.gov/study/NCT04774224"
            },
            {
              "claim": "Генетично відредаговані острівцеві клітини вижили в пацієнта без пригнічення імунітету.",
              "detail": "Звіт уперше на людині зі Швеції із технологією Sana виявив, що донорські острівцеві клітини, відредаговані, щоб уникати імунної системи, вижили й виробляли інсулін понад рік в одного пацієнта без жодних препаратів проти відторгнення — це доказ принципу, а не ще інсулінонезалежність.",
              "cite": "Sana Biotechnology · за даними New England Journal of Medicine",
              "url": "https://ir.sana.com/news-releases"
            },
            {
              "claim": "Власні перепрограмовані клітини людини повернули діабет 1 типу на рік.",
              "detail": "У опублікованому окремому випадку з Тяньцзіня (Китай) власні клітини жінки перепрограмували на острівці, що виробляють інсулін, і трансплантували; вона стала інсулінонезалежною з 75-го дня й лишалася такою на першому році.",
              "cite": "Cell · Опис випадку, вересень 2024",
              "url": "https://www.cell.com/cell/fulltext/S0092-8674(24)01022-5"
            }
          ]
        },
        {
          "t": "links",
          "title": "Де шукати дослідження та скринінг",
          "items": [
            {
              "name": "ClinicalTrials.gov",
              "url": "https://clinicaltrials.gov/",
              "desc": "Публічний реєстр клінічних досліджень у світі. Шукайте номер NCT дослідження (із трекера вище), щоб побачити актуальний статус набору, повні критерії та контакти центрів."
            },
            {
              "name": "Breakthrough T1D — клінічні дослідження",
              "url": "https://www.breakthfound.org/",
              "desc": "Провідна благодійна організація з досліджень діабету 1 типу (колишня JDRF). Пояснює поточні дослідження зрозумілою мовою."
            },
            {
              "name": "TrialNet — безкоштовний скринінг на антитіла",
              "url": "https://www.trialnet.org/",
              "desc": "Родичі людей із діабетом 1 типу можуть пройти безкоштовний скринінг, щоб виявити ранню стадію діабету 1 типу — вхід до багатьох профілактичних досліджень."
            },
            {
              "name": "Diabetes UK — дослідження",
              "url": "https://www.diabetes.org.uk/research",
              "desc": "Науково обґрунтовані оновлення про дослідження діабету (Велика Британія)."
            }
          ]
        },
        {
          "t": "p",
          "text": "Я оновлюватиму цей трекер, коли дослідження даватимуть результати й відкриватимуться нові. Після понад двох десятиліть «за п’ять років від нас» я не обіцятиму вам дати. Але вперше я можу вказати на реальних людей у реальних дослідженнях, які живуть без інсуліну, — і точно сказати, де шукати."
        }
      ],
      "faq": [
        {
          "q": "Чи є вже ліки від діабету 1 типу?",
          "a": "Схвалених, широко доступних ліків немає. Але вперше люди в дослідженнях живуть без інсуліну роками після введення вирощених або пересаджених клітин, а один схвалений препарат (теплізумаб) може відкласти хворобу в людей із ризиком. Це реальні, перевірені віхи — але більшість ще експериментальні, обмежені малими числами й часто потребують довічних препаратів проти відторгнення."
        },
        {
          "q": "Яке дослідження найближче до того, щоб стати доступним?",
          "a": "Зиміслецел (VX-880) від Vertex — найбільш просунутий: він у Фазі 3, і перші пацієнти відмовляються від інсуліну. Vertex каже, що планує почати подання регуляторам у 2026 році, але поки нічого не подано, тож реалістичний найкращий варіант — приблизно 2027 рік або пізніше, якщо більше дослідження буде успішним. Теплізумаб, який відкладає, а не виліковує, уже схвалений і доступний у США."
        },
        {
          "q": "Чи можу я долучитися до дослідження діабету 1 типу?",
          "a": "Можливо. У кожного дослідження суворі критерії — вік, скільки часу ви маєте діабет, скільки власного інсуліну залишилося й де ви живете. Скористайтеся трекером вище, щоб знайти підходящі дослідження, перейдіть на ClinicalTrials.gov по актуальний статус і контакти, і обговоріть будь-яке дослідження зі своєю діабетичною командою, перш ніж щось робити."
        },
        {
          "q": "Чи потребують лікування із заміною клітин довічних препаратів проти відторгнення?",
          "a": "Наразі більшість — так, зокрема найпросунутіша програма, бо інакше тіло відторгло б або знову атакувало нові клітини. Саме тому ці дослідження наразі обмежені людьми з найважче керованим діабетом. Найцікавіші новіші роботи (генетично «приховані» клітини та власні перепрограмовані клітини) саме намагаються зняти цю вимогу, але це ще дуже рання стадія."
        },
        {
          "q": "А теплізумаб — як його отримати?",
          "a": "Теплізумаб (TZIELD) схвалений у США для 2-ї стадії діабету 1 типу — людей, які мають автоантитіла й ранні зміни цукру, але ще не повний діабет, від 1 року. До нього зазвичай доходять через скринінг на антитіла (часто безкоштовного для родичів людини з діабетом 1 типу) і вводять як приблизно двотижневий курс інфузій. Поговоріть із ендокринологом про скринінг і відповідність критеріям."
        }
      ]
    }
  },
  {
    "slug": "hrt-prescriptions-doubling",
    "date": "2026-07-10",
    "image": "/images/hrt-prescriptions-doubling.jpg",
    "cats": [
      "perimenopause"
    ],
    "en": {
      "cat": "Perimenopause",
      "title": "HRT prescriptions have more than doubled since 2018 — and patches are now running short",
      "seoTitle": "HRT Prescriptions Have Doubled — Patches Now Running Short",
      "metaDesc": "Estrogen HRT prescribing has doubled since 2018 — 1 in 20 women aged 45–54 now prescribed. Why patches are running short and what it means for perimenopause.",
      "excerpt": "New US data show estrogen HRT prescribing has doubled since 2018, with 1 in 20 women aged 45–54 now on it — driven partly by the FDA dropping its strongest warnings.",
      "meta": "10 July 2026 · 3 min read",
      "lead": "Hormone therapy is having a moment — and the numbers are striking. A new analysis of US prescribing data finds estrogen-based HRT has gone from niche to mainstream in just a few years.",
      "blocks": [
        {
          "t": "p",
          "text": "Researchers at Truveta looked at electronic health records and found that estrogen-based HRT prescribing more than doubled between January 2018 and February 2026 — rising from 11.5 to 23.5 prescriptions per 1,000 women. Among women aged 45–54, the group deepest in perimenopause, roughly 1 in 20 now has an active estrogen prescription, a 184% jump."
        },
        {
          "t": "p",
          "text": "Part of the shift is regulatory. In November 2025 the FDA removed the long-standing \"black box\" warning — its strongest caution — from many menopausal hormone products, after an expert panel concluded the label overstated the risks for the women who benefit most. Prescribing has climbed steeply since."
        },
        {
          "t": "p",
          "text": "The type of HRT is changing too. Skin patches more than tripled over the period and vaginal estrogen creams rose more than fourfold, while older oral tablets fell by about 17%. That mirrors what the evidence favours: estrogen absorbed through the skin carries a lower clot risk than tablets."
        },
        {
          "t": "p",
          "text": "The catch is supply. Demand has risen so fast that several estrogen patch products are now in shortage. If you're on a patch and struggling to fill it, don't simply stop — talk to your prescriber about an equivalent dose, a different brand or a gel, which delivers estrogen the same way through the skin."
        },
        {
          "t": "p",
          "text": "One honest note: this analysis is preliminary and not yet peer-reviewed, and it describes prescribing trends, not whether HRT is right for any individual. Whether to start it depends on your symptoms, your timing relative to menopause and your personal risk — a conversation worth having properly, not a decision to make from a headline."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Estrogen HRT prescribing more than doubled since 2018.",
              "detail": "An analysis of US electronic health records by Truveta Research found estrogen-based HRT prescribing rose from 11.5 to 23.5 per 1,000 women between January 2018 and February 2026 — a roughly 105% increase overall, and a 184% increase among women aged 45–54, of whom about 1 in 20 now hold an active prescription. Patch use more than tripled and vaginal cream use more than quadrupled, while oral HRT fell about 17%. The findings are described as preliminary and not peer-reviewed.",
              "cite": "Truveta Research · Preliminary analysis, 2026",
              "url": "https://www.truveta.com/blog/research/estrogen-based-hormone-replacement-therapy/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Why has HRT become so much more popular?",
          "a": "Two things converged: a wave of better public information about perimenopause, and a regulatory shift. In November 2025 the FDA removed its strongest \"black box\" warning from many menopausal hormone products, concluding it overstated the risk for most women. Prescribing has risen sharply since, especially skin patches and vaginal estrogen."
        },
        {
          "q": "There's an estrogen patch shortage — what should I do?",
          "a": "Don't stop abruptly. Contact your prescriber or pharmacist about an equivalent-dose alternative — a different patch brand, or an estrogen gel or spray, which deliver hormone through the skin in the same way patches do. Switching form is usually straightforward when guided by your clinician."
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Why skin changes so fast at menopause — and what hormone therapy can and can't do",
              "url": "/blog/menopause-skin-oestrogen/",
              "desc": "Oestrogen affects far more than hot flushes — the full picture on HRT and skin changes."
            },
            {
              "name": "Do collagen products actually improve your skin?",
              "url": "/blog/collagen-and-skin/",
              "desc": "Declining oestrogen accelerates collagen loss. What the evidence says about supplementing."
            },
            {
              "name": "5 myths about perimenopause and weight",
              "url": "/blog/perimenopause-weight-myths/",
              "desc": "What's actually true about weight changes during perimenopause."
            }
          ]
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза",
      "title": "Призначень ЗГТ стало вдвічі більше з 2018 року — а пластирів уже бракує",
      "seoTitle": "Призначення ГЗТ подвоїлись — пластирі у дефіциті",
      "metaDesc": "Призначення естрогенової ГЗТ подвоїлись з 2018 року. Чому пластирі у дефіциті — і що це означає для жінок у перименопаузі.",
      "excerpt": "Нові дані зі США показують, що призначень естрогенової ЗГТ стало вдвічі більше з 2018 року, і тепер її отримує 1 з 20 жінок віком 45–54 роки — частково через скасування найсуворіших попереджень FDA.",
      "meta": "10 липня 2026 · 3 хв читання",
      "lead": "Гормональна терапія переживає сплеск популярності — і цифри вражають. Новий аналіз даних про призначення у США показує, що естрогенова ЗГТ за кілька років перетворилася з нішевої на масову.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідники Truveta проаналізували електронні медичні записи й виявили, що призначень естрогенової ЗГТ між січнем 2018-го та лютим 2026 року стало більш ніж удвічі більше — з 11,5 до 23,5 призначення на 1000 жінок. Серед жінок 45–54 років, які найглибше в перименопаузі, тепер приблизно 1 з 20 має активне призначення естрогену — це зростання на 184%."
        },
        {
          "t": "p",
          "text": "Частково це пов’язано з регулюванням. У листопаді 2025 року FDA прибрало давнє попередження в чорній рамці — свій найсуворіший застережний напис — з багатьох менопаузальних гормональних препаратів, після того як експертна панель дійшла висновку, що етикетка перебільшувала ризики для жінок, яким терапія допомагає найбільше. Відтоді призначень різко побільшало."
        },
        {
          "t": "p",
          "text": "Змінюється й тип ЗГТ. Використання шкірних пластирів за цей період зросло більш ніж утричі, а вагінальних кремів з естрогеном — більш ніж учетверо, тоді як старіших таблеток стало менше приблизно на 17%. Це відповідає тому, що підказують дані: естроген, який всмоктується через шкіру, несе нижчий ризик тромбів, ніж таблетки."
        },
        {
          "t": "p",
          "text": "Проблема — у постачанні. Попит зріс так швидко, що кількох пластирів з естрогеном тепер бракує. Якщо ви на пластирі й не можете його дістати, не припиняйте просто так — обговоріть із лікарем еквівалентну дозу, інший бренд або гель, який доставляє естроген через шкіру так само."
        },
        {
          "t": "p",
          "text": "Одне чесне зауваження: цей аналіз є попереднім і ще не пройшов рецензування, і він описує тенденції призначень, а не те, чи підходить ЗГТ конкретній людині. Рішення почати залежить від ваших симптомів, часу відносно менопаузи та особистих ризиків — це розмова, яку варто провести належно, а не рішення, що ухвалюють із заголовка."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Призначень естрогенової ЗГТ стало більш ніж удвічі більше з 2018 року.",
              "detail": "Аналіз електронних медичних записів у США, проведений Truveta Research, показав, що призначень естрогенової ЗГТ між січнем 2018-го та лютим 2026 року стало більше з 11,5 до 23,5 на 1000 жінок — приблизно на 105% загалом і на 184% серед жінок 45–54 років, з яких близько 1 з 20 тепер має активне призначення. Використання пластирів зросло більш ніж утричі, вагінальних кремів — більш ніж учетверо, а таблеток стало менше приблизно на 17%. Результати описано як попередні та не рецензовані.",
              "cite": "Truveta Research · Попередній аналіз, 2026",
              "url": "https://www.truveta.com/blog/research/estrogen-based-hormone-replacement-therapy/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чому ЗГТ стала настільки популярнішою?",
          "a": "Збіглися дві речі: хвиля кращої суспільної обізнаності про перименопаузу та регуляторні зміни. У листопаді 2025 року FDA прибрало свій найсуворіший напис у чорній рамці з багатьох менопаузальних гормональних препаратів, дійшовши висновку, що він перебільшував ризик для більшості жінок. Відтоді призначень різко побільшало, особливо шкірних пластирів і вагінального естрогену."
        },
        {
          "q": "Пластирів з естрогеном бракує — що робити?",
          "a": "Не припиняйте різко. Зверніться до лікаря чи фармацевта щодо еквівалентної за дозою альтернативи — іншого бренду пластиру або гелю чи спрею з естрогеном, які доставляють гормон через шкіру так само, як пластирі. Зміна форми зазвичай проста, коли її веде ваш лікар."
        }
      ]
    }
  },
  {
    "slug": "islet-transplant-insulin-independence",
    "date": "2026-07-10",
    "image": "/images/islet-transplant-insulin-independence.jpg",
    "cats": [
      "diabetes"
    ],
    "en": {
      "cat": "Diabetes",
      "title": "Every patient in a small type 1 diabetes trial became insulin-free",
      "seoTitle": "Type 1 Trial: Every Patient Became Insulin-Free",
      "metaDesc": "In an early UChicago trial, all 12 people with long-standing type 1 diabetes reached insulin independence after donor islet transplants. What it means.",
      "excerpt": "In an early UChicago trial, all 12 people with long-standing type 1 diabetes reached insulin independence after donor islet transplants paired with a new anti-rejection antibody.",
      "meta": "10 July 2026 · 3 min read",
      "lead": "It's the kind of result that makes you read the sentence twice: in a small pilot study, every single participant with type 1 diabetes stopped needing insulin.",
      "blocks": [
        {
          "t": "p",
          "text": "At UChicago Medicine, 12 people with long-standing type 1 diabetes — a median of 33 years living with the condition — received transplants of insulin-producing islet cells from a donor pancreas. All 12 achieved insulin independence: they no longer needed injected or pumped insulin to manage their blood sugar."
        },
        {
          "t": "p",
          "text": "The results went beyond simply stopping insulin. Every participant reached an HbA1c below 6.5% (a mean of about 5.4%, in the non-diabetic range), and none had a severe low-blood-sugar episode after the transplant — a striking change for a group who had all suffered dangerous hypos before."
        },
        {
          "t": "p",
          "text": "Islet transplants aren't new; the obstacle has always been the powerful anti-rejection drugs needed to protect the graft, which can themselves harm the kidneys and the transplanted cells. This trial's twist was a new antibody called tegoprubart, which blocks an immune signal (CD40L) to prevent rejection without the usual toxic calcineurin inhibitors."
        },
        {
          "t": "p",
          "text": "The honest caveats matter here. This is a tiny, early, investigator-led study with follow-up so far measured in months, not years — a median of eight. Islet transplants still require donor tissue and lifelong immune-suppressing medication, so this isn't a cure you can ask for at a clinic. But as proof that better anti-rejection tools could make cell-replacement therapy realistic, it's genuinely exciting — and it points toward the stem-cell islet work moving through trials behind it."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "All 12 patients reached insulin independence after islet transplant with tegoprubart.",
              "detail": "In an investigator-initiated pilot study at UChicago Medicine, 12 people with type 1 diabetes (median duration 33 years) received donor islet cell transplants with the anti-CD40L antibody tegoprubart instead of standard calcineurin-inhibitor immunosuppression. All 12 achieved insulin independence and an HbA1c below 6.5% (mean about 5.4%), with no severe hypoglycaemic episodes after transplant, over a median follow-up of 8 months (maximum 22).",
              "cite": "Breakthrough T1D / Eledon Pharmaceuticals · Pilot study update, 2026",
              "url": "https://www.breakthrought1d.org/for-the-media/press-releases/eledon-announces-updated-data-from-investigator-initiated-islet-transplant-trial-of-tegoprubart-in-patients-with-type-1-diabetes-t1d-at-uchicago-medicine/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Does this mean type 1 diabetes is cured?",
          "a": "Not yet. This was a small, early study, and islet transplantation still needs donor tissue and lifelong medication to stop the immune system rejecting the new cells. What's promising is the new anti-rejection antibody, which may make cell-replacement therapy safer and more durable — an important step, not a finished cure."
        },
        {
          "q": "Who can get an islet transplant?",
          "a": "For now it's reserved for a small group — usually people with type 1 diabetes and severe, dangerous low-blood-sugar episodes that can't be controlled another way — and it's mostly done within clinical trials. The trade-off is swapping insulin for immune-suppressing drugs, which is why it isn't offered widely."
        }
      ]
    },
    "ua": {
      "cat": "Діабет",
      "title": "Усі учасники невеликого дослідження діабету 1 типу відмовилися від інсуліну",
      "seoTitle": "Дослідження: усі пацієнти без інсуліну",
      "metaDesc": "У ранньому дослідженні UChicago всі 12 людей із давнім діабетом 1 типу досягли незалежності від інсуліну після трансплантації острівцевих клітин.",
      "excerpt": "У ранньому дослідженні в Чиказькому університеті всі 12 людей із тривалим діабетом 1 типу відмовилися від інсуліну після трансплантації донорських острівцевих клітин у поєднанні з новим антитілом проти відторгнення.",
      "meta": "10 липня 2026 · 3 хв читання",
      "lead": "Це той результат, від якого перечитуєш речення двічі: у невеликому пілотному дослідженні кожен учасник із діабетом 1 типу перестав потребувати інсуліну.",
      "blocks": [
        {
          "t": "p",
          "text": "У медичному центрі Чиказького університету 12 людей із тривалим діабетом 1 типу — у середньому 33 роки з цим діагнозом — отримали трансплантацію інсулінопродукуючих острівцевих клітин із донорської підшлункової залози. Усі 12 досягли незалежності від інсуліну: їм більше не потрібні ін’єкції чи помпа, щоб керувати рівнем цукру."
        },
        {
          "t": "p",
          "text": "Результати вийшли за межі простого припинення інсуліну. Кожен учасник досяг HbA1c нижче 6,5% (у середньому близько 5,4%, у недіабетичному діапазоні), і ні в кого не було тяжкого епізоду низького цукру після трансплантації — разюча зміна для групи, яка раніше вся потерпала від небезпечних гіпоглікемій."
        },
        {
          "t": "p",
          "text": "Трансплантація острівцевих клітин не нова; перешкодою завжди були потужні препарати проти відторгнення, потрібні, щоб захистити трансплантат, і які самі можуть шкодити ниркам та пересадженим клітинам. Особливістю цього дослідження стало нове антитіло тегопрубарт, яке блокує імунний сигнал (CD40L), щоб запобігти відторгненню без звичних токсичних інгібіторів кальциневрину."
        },
        {
          "t": "p",
          "text": "Чесні застереження тут важливі. Це крихітне, раннє дослідження, ініційоване дослідниками, зі спостереженням поки що в місяцях, а не роках — у середньому вісім. Трансплантація острівцевих клітин усе ще потребує донорської тканини та довічних імуносупресивних ліків, тож це не ліки, які можна попросити в клініці. Але як доказ того, що кращі засоби проти відторгнення можуть зробити клітинну замісну терапію реальною, це справді захопливо — і вказує на роботу зі стовбуровими острівцевими клітинами, що рухається в дослідженнях слідом."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Усі 12 пацієнтів досягли незалежності від інсуліну після трансплантації острівцевих клітин із тегопрубартом.",
              "detail": "У пілотному дослідженні, ініційованому дослідниками, в медичному центрі Чиказького університету 12 людей із діабетом 1 типу (медіана тривалості 33 роки) отримали трансплантацію донорських острівцевих клітин з антитілом проти CD40L тегопрубартом замість стандартної імуносупресії інгібіторами кальциневрину. Усі 12 досягли незалежності від інсуліну та HbA1c нижче 6,5% (у середньому близько 5,4%), без тяжких епізодів гіпоглікемії після трансплантації, за медіани спостереження 8 місяців (максимум 22).",
              "cite": "Breakthrough T1D / Eledon Pharmaceuticals · Оновлення пілотного дослідження, 2026",
              "url": "https://www.breakthrought1d.org/for-the-media/press-releases/eledon-announces-updated-data-from-investigator-initiated-islet-transplant-trial-of-tegoprubart-in-patients-with-type-1-diabetes-t1d-at-uchicago-medicine/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Це означає, що діабет 1 типу вилікували?",
          "a": "Ще ні. Це було невелике, раннє дослідження, і трансплантація острівцевих клітин усе ще потребує донорської тканини та довічних ліків, щоб імунна система не відторгала нові клітини. Обнадійливим є нове антитіло проти відторгнення, яке може зробити клітинну замісну терапію безпечнішою та тривкішою — важливий крок, а не завершені ліки."
        },
        {
          "q": "Хто може отримати трансплантацію острівцевих клітин?",
          "a": "Наразі вона призначена для невеликої групи — зазвичай людей із діабетом 1 типу та тяжкими, небезпечними епізодами низького цукру, які неможливо контролювати інакше, — і переважно проводиться в межах клінічних досліджень. Компроміс — замінити інсулін на імуносупресивні ліки, тому її не пропонують широко."
        }
      ]
    }
  },
  {
    "slug": "carb-quality-healthy-aging",
    "date": "2026-07-10",
    "image": "/images/carb-quality-healthy-aging.jpg",
    "cats": [
      "nutrition"
    ],
    "en": {
      "cat": "Nutrition",
      "title": "The carbs you choose in midlife shape how you age, a 32-year study finds",
      "seoTitle": "Carb Quality in Midlife Shapes How You Age",
      "metaDesc": "A 32-year study of 47,000 women found those eating more high-quality carbs in midlife were up to a third more likely to age healthily. Which carbs count.",
      "excerpt": "Harvard and Tufts researchers followed 47,000 women for 32 years: those eating more high-quality carbs in midlife were up to a third more likely to age healthily.",
      "meta": "10 July 2026 · 3 min read",
      "lead": "Not all carbohydrates age you the same way. A large, long-running study suggests the type you lean on in your 40s and 50s quietly shapes how well you will be in your 70s.",
      "blocks": [
        {
          "t": "p",
          "text": "Researchers at Harvard's T.H. Chan School and Tufts University drew on the Nurses' Health Study, following 47,513 women from midlife (average age 48) for 32 years. They asked a simple question: who reached older age in good shape?"
        },
        {
          "t": "p",
          "text": "'Healthy ageing' was defined strictly — reaching 70 free of 11 major chronic diseases, with no meaningful loss of memory or physical function, and good mental health. Only a minority managed it, which makes what separated them interesting."
        },
        {
          "t": "p",
          "text": "Women who ate more high-quality carbohydrates in midlife — from whole grains, fruits, vegetables and legumes — had up to about 31% higher odds of healthy ageing, and higher fibre intake helped too. Carbohydrates from refined grains, added sugar and potatoes went the other way, tied to lower odds."
        },
        {
          "t": "p",
          "text": "This is observational, so it shows a strong association rather than proof, and diet was self-reported. But it lines up with everything else we know, and the practical message is refreshingly ordinary: it isn't about cutting carbs, it's about upgrading them. Swap white bread for whole grains, reach for beans and lentils, and keep fruit and vegetables central — small midlife choices with a long tail. Buckwheat is a good example of the upgrade: my [buckwheat cookies, no sugar](/recipes/buckwheat-cookies/) use it as both the grain and the flour."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Higher-quality carbs in midlife were linked to healthier ageing in women.",
              "detail": "A prospective cohort study of 47,513 women in the Nurses' Health Study, followed from 1984 to 2016, found that higher intake of high-quality (unrefined) carbohydrates and dietary fibre in midlife was associated with greater odds of 'healthy ageing' — defined as reaching age 70+ free of 11 chronic diseases, without cognitive or physical impairment, and with good mental health. High-quality carbohydrate intake was associated with roughly 31% higher odds (up to 37% across measures), while refined carbohydrates were associated with about 13% lower odds.",
              "cite": "JAMA Network Open · Cohort study, 16 May 2025",
              "url": "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2834202"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Does this mean carbs are good or bad for ageing?",
          "a": "It's the quality that matters, not carbs as a category. High-quality carbohydrates — whole grains, fruit, vegetables and legumes — were linked to healthier ageing, while refined grains, added sugar and potatoes were linked to the opposite. The takeaway isn't 'eat fewer carbs,' it's 'choose better ones.'"
        },
        {
          "q": "Does this apply to people with diabetes?",
          "a": "The study was in women without a focus on diabetes, so it doesn't set targets for blood-sugar management. But the direction — favour fibre-rich whole foods over refined starch and sugar — is exactly what helps glucose control too, so it fits well alongside diabetes-focused advice rather than replacing it."
        }
      ]
    },
    "ua": {
      "cat": "Харчування",
      "title": "Вуглеводи, які ви обираєте в середньому віці, впливають на старіння — 32-річне дослідження",
      "seoTitle": "Якість вуглеводів у середині життя і старіння",
      "metaDesc": "32-річне дослідження 47 000 жінок: ті, хто в середньому віці їв якісніші вуглеводи, на третину частіше старіли здорово. Які саме вуглеводи обирати.",
      "excerpt": "Дослідники з Гарварду й Тафтса спостерігали за 47 000 жінок упродовж 32 років: ті, хто в середньому віці їв більше якісних вуглеводів, мали до третини вищі шанси старіти здоровими.",
      "meta": "10 липня 2026 · 3 хв читання",
      "lead": "Не всі вуглеводи старять однаково. Велике, багаторічне дослідження свідчить, що тип, на який ви спираєтеся у свої 40–50, тихо формує те, наскільки добре вам буде у 70.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідники з Гарвардської школи ім. Т. Г. Чана та Університету Тафтса скористалися даними Nurses’ Health Study, спостерігаючи за 47 513 жінками від середнього віку (у середньому 48 років) упродовж 32 років. Вони поставили просте запитання: хто досяг старшого віку в доброму стані?"
        },
        {
          "t": "p",
          "text": "«Здорове старіння» визначили суворо — дожити до 70 без 11 основних хронічних хвороб, без відчутної втрати пам’яті чи фізичної функції та з добрим психічним здоров’ям. Це вдалося лише меншості, тому те, що їх відрізняло, і є цікавим."
        },
        {
          "t": "p",
          "text": "Жінки, які в середньому віці їли більше якісних вуглеводів — із цільних злаків, фруктів, овочів і бобових, — мали приблизно до 31% вищі шанси здорового старіння, і вища кількість клітковини теж допомагала. Вуглеводи з рафінованих злаків, доданого цукру та картоплі діяли навпаки — були пов’язані з нижчими шансами."
        },
        {
          "t": "p",
          "text": "Це спостережне дослідження, тож воно показує сильний зв’язок, а не доказ, і харчування оцінювали за самозвітами. Але воно збігається з усім, що ми знаємо, і практичний висновок приємно буденний: ідеться не про те, щоб урізати вуглеводи, а про те, щоб їх покращити. Замініть білий хліб на цільнозерновий, тягніться до квасолі та сочевиці й тримайте фрукти та овочі в центрі — маленькі рішення в середньому віці з довгим наслідком. Гречка — хороший приклад такого покращення: у [гречаному печиві без цукру](/ua/recipes/buckwheat-cookies/) вона і крупа, і борошно, а ягоди легко тримати під рукою як [чорничний джем: рецепт без цукру](/ua/recipes/blueberry-jam/)."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Якісніші вуглеводи в середньому віці пов’язані зі здоровішим старінням у жінок.",
              "detail": "Проспективне когортне дослідження 47 513 жінок у межах Nurses’ Health Study, за якими спостерігали з 1984 до 2016 року, показало, що вище споживання якісних (нерафінованих) вуглеводів і харчової клітковини в середньому віці пов’язане з вищими шансами «здорового старіння» — визначеного як дожити до 70+ без 11 хронічних хвороб, без когнітивних чи фізичних порушень і з добрим психічним здоров’ям. Споживання якісних вуглеводів було пов’язане приблизно з 31% вищими шансами (до 37% за різними показниками), тоді як рафіновані вуглеводи — приблизно з 13% нижчими.",
              "cite": "JAMA Network Open · Когортне дослідження, 16 травня 2025",
              "url": "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2834202"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "То вуглеводи корисні чи шкідливі для старіння?",
          "a": "Важлива якість, а не вуглеводи як категорія. Якісні вуглеводи — цільні злаки, фрукти, овочі та бобові — пов’язані зі здоровішим старінням, а рафіновані злаки, доданий цукор і картопля — з протилежним. Висновок не «їжте менше вуглеводів», а «обирайте кращі»."
        },
        {
          "q": "Чи стосується це людей із діабетом?",
          "a": "Дослідження проводили серед жінок без окремого фокусу на діабеті, тож воно не встановлює цілей для контролю цукру. Але напрям — надавати перевагу багатим на клітковину цільним продуктам замість рафінованого крохмалю та цукру — саме те, що допомагає й контролю глюкози, тож воно добре доповнює поради щодо діабету, а не замінює їх."
        }
      ]
    }
  },
  {
    "slug": "menopause-skin-oestrogen",
    "date": "2026-07-10",
    "image": "/images/menopause-skin-oestrogen.jpg",
    "cats": [
      "skin"
    ],
    "en": {
      "cat": "Skin & beauty",
      "title": "Why skin changes so fast at menopause — and what hormone therapy can and can't do",
      "seoTitle": "Menopause Skin & Oestrogen: What HRT Can Do",
      "metaDesc": "Falling oestrogen drives menopausal skin ageing. See what the latest reviews say HRT can — and can't — do to reverse dryness, thinning and lost collagen.",
      "excerpt": "Recent reviews confirm falling oestrogen drives much of menopausal skin ageing — thinner, drier, less elastic skin — and that HRT can partly reverse it, within limits.",
      "meta": "10 July 2026 · 3 min read",
      "lead": "If your skin seemed to change almost overnight around menopause, you weren't imagining it. Recent research lays out just how much of that shift is driven by falling oestrogen — and how much hormone therapy can undo.",
      "blocks": [
        {
          "t": "p",
          "text": "Oestrogen does a lot of quiet work in skin: it supports collagen, keeps skin thick and elastic, and helps it hold water. When oestrogen drops at menopause, all of that unwinds — and faster than ordinary ageing alone would explain."
        },
        {
          "t": "p",
          "text": "The numbers are sobering. Skin collagen falls by roughly 2% for every year after menopause, with much of the loss concentrated in the early years; skin also thins and loses elasticity at around 1–1.5% a year, and oil (sebum) production drops sharply. The result is the familiar cluster of thinner, drier, more crêpey, less bouncy skin."
        },
        {
          "t": "p",
          "text": "Here is the more hopeful part. Reviews of the trial evidence find that hormone therapy can partly reverse these changes. In studies, systemic HRT raised dermis thickness (one trial reported a 33% increase over a year), lifted skin collagen and improved elasticity and hydration — measurable, not just cosmetic-marketing, improvements."
        },
        {
          "t": "p",
          "text": "But the honest bottom line is the one the reviewers themselves reach: skin benefit alone is not a reason to take HRT. Guidelines don't endorse it purely for skin, the strongest gains show up when it's started early in menopause, and starting hormones late — more than 10 years after menopause or after 60 — carries real risks. If you're considering HRT for menopausal symptoms, better skin may be a welcome bonus, but the decision belongs in a broader conversation about your symptoms and risks. Meanwhile, the everyday basics still earn their place: daily sunscreen, a retinoid, and topical vitamin C do real, evidence-based work for menopausal skin."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Falling oestrogen accelerates skin ageing; HRT can partly reverse it.",
              "detail": "A 2025 narrative review synthesising the trial evidence reported that skin collagen declines by about 2.1% per postmenopausal year, with elasticity and thickness also falling, driven largely by oestrogen loss. It found that systemic hormone therapy can partially restore skin — one randomised trial showed a 33% increase in dermis thickness and an 11.5% increase in skin thickness over 12 months, with reported collagen gains of about 3–6.5% and improved elasticity and hydration. The authors stress HRT is not indicated for skin alone, and that starting it more than 10 years after menopause or after age 60 raises cardiovascular and other risks.",
              "cite": "Journal of Cosmetic Dermatology · Narrative review (Viscomi et al.), 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12374573/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Can HRT really improve ageing skin?",
          "a": "Yes, partly. Studies show hormone therapy can increase skin and dermis thickness, boost collagen and improve elasticity and hydration in menopausal women. But the effect is a bonus, not a licence — guidelines don't recommend HRT for skin alone, and it works best when started early in menopause."
        },
        {
          "q": "If I'm not on HRT, what helps menopausal skin most?",
          "a": "The evidence-based basics do real work: daily broad-spectrum sunscreen to prevent further collagen breakdown, a retinoid (retinol or tretinoin) to support collagen, and topical vitamin C as an antioxidant. Gentle cleansing and a good moisturiser help with the dryness that oestrogen loss brings."
        }
      ]
    },
    "ua": {
      "cat": "Краса та шкіра",
      "title": "Чому шкіра так швидко змінюється в менопаузі — і що може (і не може) гормональна терапія",
      "seoTitle": "Шкіра в менопаузі й естроген: що може ЗГТ",
      "metaDesc": "Падіння естрогену прискорює старіння шкіри в менопаузі. Огляди показують, що ЗГТ частково це відновлює — але з межами. Розбираємо, що вона може і чого ні.",
      "excerpt": "Сучасні огляди підтверджують: падіння естрогену спричиняє значну частину старіння шкіри в менопаузі — тоншу, сухішу, менш пружну шкіру — і що ЗГТ здатна частково це повернути, у певних межах.",
      "meta": "10 липня 2026 · 3 хв читання",
      "lead": "Якщо ваша шкіра ніби змінилася майже за одну ніч у менопаузі, це вам не здалося. Сучасні дослідження показують, наскільки ця зміна зумовлена падінням естрогену — і наскільки гормональна терапія здатна її повернути.",
      "blocks": [
        {
          "t": "p",
          "text": "Естроген виконує багато тихої роботи в шкірі: підтримує колаген, зберігає шкіру товстою та пружною й допомагає їй утримувати воду. Коли естроген падає в менопаузі, усе це розкручується назад — і швидше, ніж пояснило б саме лише звичайне старіння."
        },
        {
          "t": "p",
          "text": "Цифри протверезні. Колаген шкіри зменшується приблизно на 2% за кожен рік після менопаузи, і більша частина втрати припадає на перші роки; шкіра також тоншає та втрачає пружність приблизно на 1–1,5% на рік, а вироблення шкірного сала різко падає. Результат — знайомий набір: тонша, сухіша, більш зморшкувата, менш пружна шкіра."
        },
        {
          "t": "p",
          "text": "А ось обнадійливіша частина. Огляди даних клінічних досліджень показують, що гормональна терапія може частково повернути ці зміни. У дослідженнях системна ЗГТ збільшувала товщину дерми (в одному дослідженні повідомили про зростання на 33% за рік), підвищувала колаген шкіри та покращувала пружність і зволоженість — вимірювані покращення, а не лише косметичний маркетинг."
        },
        {
          "t": "p",
          "text": "Але чесний підсумок такий самий, до якого доходять і самі автори оглядів: сама лише користь для шкіри — не привід приймати ЗГТ. Настанови не схвалюють її суто заради шкіри, найбільший ефект з’являється, коли її починають рано в менопаузі, а пізній початок — понад 10 років після менопаузи або після 60 — несе реальні ризики. Якщо ви розглядаєте ЗГТ через симптоми менопаузи, краща шкіра може бути приємним бонусом, але рішення належить ширшій розмові про ваші симптоми та ризики. А тим часом щоденні базові речі не втрачають ваги: сонцезахист щодня, ретиноїд і місцевий вітамін C роблять реальну, доказову роботу для шкіри в менопаузі."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Падіння естрогену прискорює старіння шкіри; ЗГТ здатна частково це повернути.",
              "detail": "Наративний огляд 2025 року, що узагальнює дані клінічних досліджень, повідомив, що колаген шкіри зменшується приблизно на 2,1% за кожен постменопаузальний рік, а пружність і товщина також падають, значною мірою через втрату естрогену. Автори виявили, що системна гормональна терапія може частково відновити шкіру — одне рандомізоване дослідження показало зростання товщини дерми на 33% і товщини шкіри на 11,5% за 12 місяців, зі зростанням колагену приблизно на 3–6,5% та покращенням пружності й зволоженості. Автори наголошують, що ЗГТ не показана суто заради шкіри і що її початок понад 10 років після менопаузи або після 60 років підвищує серцево-судинні та інші ризики.",
              "cite": "Journal of Cosmetic Dermatology · Наративний огляд (Viscomi та ін.), 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12374573/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи справді ЗГТ може покращити старіння шкіри?",
          "a": "Так, частково. Дослідження показують, що гормональна терапія може збільшити товщину шкіри та дерми, підвищити колаген і покращити пружність та зволоженість у жінок у менопаузі. Але ефект — це бонус, а не дозвіл: настанови не рекомендують ЗГТ суто заради шкіри, і вона працює найкраще, коли її починають рано в менопаузі."
        },
        {
          "q": "Якщо я не на ЗГТ, що найбільше допомагає шкірі в менопаузі?",
          "a": "Доказові базові речі роблять реальну роботу: щоденний сонцезахист широкого спектра, щоб запобігти подальшому руйнуванню колагену, ретиноїд (ретинол або третиноїн) для підтримки колагену та місцевий вітамін C як антиоксидант. М’яке очищення й хороший зволожувач допомагають із сухістю, яку приносить втрата естрогену."
        }
      ]
    }
  },
  {
    "slug": "glp1-drugs-less-movement",
    "date": "2026-07-10",
    "image": "/images/glp1-drugs-less-movement.jpg",
    "cats": [
      "weight"
    ],
    "en": {
      "cat": "Weight loss",
      "title": "People on GLP-1 weight-loss drugs moved less, not more, a Fitbit study finds",
      "seoTitle": "GLP-1 Users Moved Less, Not More: Fitbit Study",
      "metaDesc": "A Fitbit study of 753 adults found daily steps and exercise fell after starting Ozempic-style GLP-1 drugs. Why movement matters for holding on to muscle.",
      "excerpt": "Tracking 753 adults' wearable data, researchers found daily steps and exercise fell after starting Ozempic-style drugs — a concern for muscle, especially in women over 40.",
      "meta": "10 July 2026 · 3 min read",
      "lead": "Weight-loss injections like Ozempic and Wegovy are reshaping bodies fast — but new data suggest they may also, quietly, be making people move less.",
      "blocks": [
        {
          "t": "p",
          "text": "Researchers used wearable-tracker data from 753 adults with obesity in the NIH's All of Us programme, comparing their activity before and after they started a GLP-1 medication (the class that includes semaglutide and tirzepatide — Ozempic, Wegovy and Mounjaro)."
        },
        {
          "t": "p",
          "text": "After starting the drug, average daily steps fell from about 5,047 to 4,487 — a drop of 560 steps a day. Time spent in moderate-to-vigorous exercise also fell, from roughly 28 to 22 minutes a day. The declines were steepest in men and in people with musculoskeletal pain."
        },
        {
          "t": "p",
          "text": "Why it matters: GLP-1 drugs cause weight loss that includes muscle as well as fat. If activity — especially the movement that protects muscle — falls at the same time, you can end up lighter but weaker. For women over 40, who are already losing muscle to age and the menopause transition, that's a combination worth taking seriously."
        },
        {
          "t": "p",
          "text": "None of this is a reason to avoid these medicines, which can be genuinely transformative for the right person. It's an argument for pairing them with deliberate movement — particularly resistance training two or three times a week and [enough protein](/blog/protein-for-women-over-40/) — so the weight you lose is fat, and the muscle stays. The drug lowers appetite; it doesn't build strength. That part is still on us."
        },
        {
          "t": "p",
          "text": "As ever, the caveats: this was a conference presentation, not yet peer-reviewed, and it shows what happened on average, not why for any one person. Some people feel more able to move as weight comes off. But the signal is a useful nudge to build activity in on purpose rather than assume it will follow."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Physical activity fell after starting a GLP-1 drug.",
              "detail": "A study presented at ENDO 2026 (the Endocrine Society’s annual meeting) analysed wearable-device data from 753 adults with obesity in the NIH All of Us Research Program. After starting a GLP-1 receptor agonist, mean daily steps fell from 5,047 to 4,487 (−560 steps/day) and moderate-to-vigorous activity fell from 27.9 to 22.2 minutes/day (−5.7 min/day); both changes were statistically significant. Declines were largest in men and those with musculoskeletal pain. The work was a conference presentation and not yet peer-reviewed.",
              "cite": "Endocrine Society (ENDO 2026) · Conference presentation",
              "url": "https://www.healio.com/news/endocrinology/20260613/exercise-declined-in-patients-with-obesity-after-starting-a-glp1"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Do GLP-1 drugs make you exercise less?",
          "a": "On average, in this study, yes — daily steps and exercise time both dropped modestly after people started. It's an association, not proof the drug directly reduces motivation, and individuals varied. But it's a reason to plan movement deliberately rather than assume it follows weight loss."
        },
        {
          "q": "How do I protect muscle on a weight-loss drug?",
          "a": "Two levers matter most: resistance (strength) training two to three times a week, and eating enough protein. Because GLP-1 drugs reduce appetite, hitting protein targets takes intention. This is especially important for women over 40, who are already losing muscle with age."
        }
      ]
    },
    "ua": {
      "cat": "Схуднення",
      "title": "Люди на препаратах GLP-1 для схуднення почали рухатися менше — дослідження з Fitbit",
      "seoTitle": "На GLP-1 люди рухались менше: дані Fitbit",
      "metaDesc": "Дані Fitbit по 753 дорослих: після початку GLP-1 (типу Ozempic) кроки й активність знизились. Чому рух критично важливий для збереження м'язів.",
      "excerpt": "Проаналізувавши дані трекерів 753 дорослих, дослідники виявили, що після початку препаратів на кшталт Ozempic кількість кроків і тренувань падала — це загроза для м’язів, особливо в жінок після 40.",
      "meta": "10 липня 2026 · 3 хв читання",
      "lead": "Ін’єкції для схуднення на кшталт Ozempic і Wegovy швидко змінюють тіла — але нові дані свідчать, що вони можуть також тихо змушувати людей рухатися менше.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідники скористалися даними носимих трекерів 753 дорослих з ожирінням у програмі All of Us Національних інститутів здоров’я США, порівнявши їхню активність до та після початку препарату GLP-1 (клас, що охоплює семаглутид і тирзепатид — Ozempic, Wegovy та Mounjaro)."
        },
        {
          "t": "p",
          "text": "Після початку препарату середня кількість кроків на день впала приблизно з 5047 до 4487 — на 560 кроків. Час помірних-до-інтенсивних тренувань також зменшився — приблизно з 28 до 22 хвилин на день. Найбільше падіння було в чоловіків і в людей із болем опорно-рухового апарату."
        },
        {
          "t": "p",
          "text": "Чому це важливо: препарати GLP-1 спричиняють схуднення, яке включає не лише жир, а й м’язи. Якщо активність — особливо рух, що захищає м’язи, — падає водночас, можна стати легшим, але слабшим. Для жінок після 40, які вже втрачають м’язи через вік і перехід до менопаузи, це поєднання варто сприймати серйозно."
        },
        {
          "t": "p",
          "text": "Ніщо з цього не є приводом уникати цих ліків, які для правильної людини можуть бути справді трансформаційними. Це аргумент на користь того, щоб поєднувати їх зі свідомим рухом — зокрема силовими тренуваннями двічі-тричі на тиждень і [достатньою кількістю білка](/ua/blog/protein-for-women-over-40/), — щоб вага, яку ви втрачаєте, була жиром, а м’язи лишалися. Препарат знижує апетит; він не будує силу. Ця частина досі на нас."
        },
        {
          "t": "p",
          "text": "Як завжди, застереження: це була доповідь на конференції, ще не рецензована, і вона показує, що сталося в середньому, а не чому в конкретної людини. Дехто почувається здатнішим рухатися, коли вага йде. Але цей сигнал — корисний поштовх свідомо вбудовувати активність, а не припускати, що вона з’явиться сама."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Фізична активність упала після початку препарату GLP-1.",
              "detail": "Дослідження, представлене на ENDO 2026 (щорічній зустрічі Ендокринного товариства), проаналізувало дані носимих пристроїв 753 дорослих з ожирінням у програмі NIH All of Us. Після початку агоніста рецепторів GLP-1 середня кількість кроків на день впала з 5047 до 4487 (−560 кроків/день), а помірна-до-інтенсивної активність — з 27,9 до 22,2 хвилини/день (−5,7 хв/день); обидві зміни були статистично значущими. Найбільше падіння спостерігали в чоловіків і людей із болем опорно-рухового апарату. Робота була доповіддю на конференції та ще не рецензована.",
              "cite": "Ендокринне товариство (ENDO 2026) · Доповідь на конференції",
              "url": "https://www.healio.com/news/endocrinology/20260613/exercise-declined-in-patients-with-obesity-after-starting-a-glp1"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи змушують препарати GLP-1 менше тренуватися?",
          "a": "У середньому в цьому дослідженні — так: і кількість кроків, і час тренувань після початку помірно впали. Це зв’язок, а не доказ того, що препарат безпосередньо знижує мотивацію, і люди різнилися. Але це привід планувати рух свідомо, а не припускати, що він іде слідом за схудненням."
        },
        {
          "q": "Як зберегти м’язи на препараті для схуднення?",
          "a": "Найбільше важать два важелі: силові тренування двічі-тричі на тиждень і достатньо білка. Оскільки препарати GLP-1 знижують апетит, досягати цілей за білком доводиться свідомо. Це особливо важливо для жінок після 40, які вже втрачають м’язи з віком."
        }
      ]
    }
  },
  {
    "slug": "natural-sweeteners",
    "date": "2026-07-09",
    "image": "/images/natural-sweeteners-stevia-monk-fruit-allulose.jpg",
    "cats": [
      "nutrition"
    ],
    "en": {
      "cat": "Nutrition",
      "title": "What to replace sugar with: the evidence on sweeteners",
      "seoTitle": "Sugar Swaps: The Evidence on Natural Sweeteners",
      "metaDesc": "What the research really says about stevia, monk fruit, allulose, erythritol, xylitol, sucralose, aspartame, honey and agave for blood sugar and health.",
      "excerpt": "Stevia, monk fruit, allulose, erythritol, xylitol, sucralose, aspartame, honey and agave — what current research actually shows about sweeteners for blood sugar and health.",
      "meta": "9 July 2026 · 7 min read",
      "lead": "When I first wrote about natural sweeteners, the story felt settled: stevia and the sugar alcohols were the \"safe\" choices, and the main thing to get right was taste. The research has moved on since then — in places, dramatically.",
      "blocks": [
        {
          "t": "p",
          "text": "A couple of the sweeteners I once recommended most warmly now come with genuine caution flags. The World Health Organization has weighed in. And a new generation of sweeteners has arrived. So this is a proper rewrite, not a touch-up."
        },
        {
          "t": "p",
          "text": "The headline hasn't changed: sugar is worth cutting back on, and no substitute tastes exactly like it. But which substitute, and how much, matters more than \"natural versus artificial.\" Some of the least helpful options are entirely natural — honey and agave among them — and \"natural\" was never the same thing as \"harmless.\" Let me walk through them the way I'd talk it through with a client."
        },
        {
          "t": "h",
          "text": "First, what \"safe\" actually means here"
        },
        {
          "t": "p",
          "text": "Almost all of these are safe in the narrow sense that regulators such as the FDA and EFSA permit them and they won't poison you. What we actually care about is subtler: does it spike your blood sugar, does it help or harm weight and metabolic health over years rather than days, and does it carry any newer signal we should respect? That last question is where the picture has changed most."
        },
        {
          "t": "p",
          "text": "One honest caveat before we start. Much of the human evidence is still short-term, and some of the worrying new findings are associations plus a plausible mechanism — not proof that the sweetener caused harm. I'll flag where that's the case rather than overstate it."
        },
        {
          "t": "h",
          "text": "Stevia — still my everyday recommendation"
        },
        {
          "t": "p",
          "text": "Stevia, from the leaves of Stevia rebaudiana, remains the one I reach for first. It's calorie-free and [doesn't raise blood glucose or insulin](https://pmc.ncbi.nlm.nih.gov/articles/PMC6770957/). Earlier worries that it disturbs the gut microbiome have not translated into clear harm in humans — [a review of the evidence on stevia and gut bacteria](https://pmc.ncbi.nlm.nih.gov/articles/PMC9028423/) found the human data reassuring rather than alarming, which matters given how much noise there was on this a few years ago."
        },
        {
          "t": "p",
          "text": "Its taste has two quirks worth knowing. First, the sweetness comes on slowly — it arrives a moment later than you'd expect — but then lingers pleasantly for a long time. Second, and separately, stevia turns bitter if you use too much: it's intensely sweet, so a heavy hand tips it into a liquorice-like, faintly metallic aftertaste, though used lightly that bitterness simply never appears. That slow-but-lasting sweetness is exactly why stevia pairs so well with erythritol, whose sweetness does the opposite (more on that below). The leaf brewed as tea is the gentlest form; powders, tablets and syrups vary a lot by brand. My practical tip is unchanged — use far less than you think you need, and blend it with something that rounds out the flavour, such as erythritol, monk fruit or a little allulose. If you want to see that in practice, my [buckwheat cookies, no sugar](/recipes/buckwheat-cookies/) and [sugar-free blueberry jam](/recipes/blueberry-jam/) are sweetened with stevia alone."
        },
        {
          "t": "h",
          "text": "Monk fruit — a genuinely good newer option"
        },
        {
          "t": "p",
          "text": "Monk fruit (luo han guo) extract wasn't on most people's radar when I first wrote this, and it deserves to be now. It's zero-calorie with a glycaemic index of essentially zero. [A 2025 systematic review of randomised trials](https://pmc.ncbi.nlm.nih.gov/articles/PMC12073669/) found that monk fruit extract doesn't raise blood glucose or insulin, and several trials showed reduced post-meal glucose responses. The evidence on the gut is limited but so far reassuring — no signal of harm. Long-term human data are still thin, so I hold it loosely, but for now it's one of the better choices, especially blended with stevia to soften each one's aftertaste."
        },
        {
          "t": "h",
          "text": "Allulose — the newcomer worth knowing"
        },
        {
          "t": "p",
          "text": "Allulose is the most interesting arrival since the original article. It's a \"rare sugar\" [found naturally in small amounts in figs, raisins and wheat](https://www.mcgill.ca/oss/article/health-and-nutrition/allure-allulose), and it tastes remarkably like sugar — because chemically it nearly is one. The trick is that the body absorbs it but barely metabolises it, so it contributes only [about 0.4 calories per gram, against 4 for sugar](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-declaration-allulose-and-calories-allulose-nutrition-and-supplement-facts-labels), with minimal effect on blood glucose."
        },
        {
          "t": "p",
          "text": "The evidence is encouraging. [A 2024 meta-analysis of randomised trials](https://pmc.ncbi.nlm.nih.gov/articles/PMC11585728/) found that allulose actually blunted post-meal glucose spikes in people with type 2 diabetes, with little effect on fasting glucose or HbA1c. It holds FDA \"generally recognised as safe\" status. The practical downsides are cost, patchy availability — allulose [is not yet authorised as a novel food in the EU](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2025.9468), and the UK's own approval is still pending — and, like all of these, digestive upset if you overdo it. But if you can get it, it's a strong candidate for baking, where stevia and monk fruit struggle."
        },
        {
          "t": "h",
          "text": "Erythritol — where I've changed my advice"
        },
        {
          "t": "p",
          "text": "I used to put erythritol alongside stevia as one of the safest choices. I'd now soften that considerably."
        },
        {
          "t": "p",
          "text": "In 2023, [a study in Nature Medicine](https://www.nature.com/articles/s41591-023-02223-9) linked higher blood levels of erythritol to a raised risk of heart attack, stroke and death, and showed a plausible mechanism: erythritol made platelets more prone to clotting. [A 2024 follow-up in healthy volunteers](https://www.ahajournals.org/doi/10.1161/ATVBAHA.124.321019) found that a single typical serving increased platelet reactivity even in young, healthy people. This is the same research group that then reported a very similar signal for xylitol."
        },
        {
          "t": "p",
          "text": "Two things keep me from panicking, and I'd want you to hold both. First, this is largely observational plus mechanistic; it isn't yet proof that eating erythritol causes heart attacks. Second, the body also [makes erythritol from glucose](https://www.pnas.org/doi/10.1073/pnas.1620079114), so high blood levels may partly reflect underlying metabolic problems rather than diet alone. But when a signal appears across multiple study types and points at clotting, the sensible response — especially if you already have diabetes or cardiovascular risk — is to stop treating erythritol as a \"use freely\" sweetener. Small, occasional use still seems reasonable to me; I no longer suggest it as a daily staple."
        },
        {
          "t": "p",
          "text": "On taste, erythritol is stevia's mirror image: its sweetness hits straight away but is \"truncated\" — it fades almost as fast as it arrives, leaving a slightly cooling, empty finish. That's exactly why the two are so often blended. Erythritol delivers the instant hit of sweetness that stevia lacks; stevia's slow, lingering sweetness carries on after the erythritol has dropped away; and each covers the other's weak spot, with the erythritol masking stevia's bitterness. If you do reach for erythritol, that pairing is where it earns its place."
        },
        {
          "t": "h",
          "text": "Xylitol and sorbitol — the same caution, plus the old caveats"
        },
        {
          "t": "p",
          "text": "Xylitol now carries a twin message. It does have a dental reputation — it's why it's in so much sugar-free gum — though the [trial evidence for preventing cavities is weaker than commonly assumed](https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD010743.pub2/full). But [a 2024 study in the European Heart Journal](https://academic.oup.com/eurheartj/article-abstract/45/27/2439/7683453) from the same Cleveland Clinic group tied higher blood xylitol to increased cardiovascular events, with the same clotting mechanism seen after ingestion. The caveats above apply here too, but the direction of travel is clear enough that I'd use it sparingly rather than as a table-sugar replacement."
        },
        {
          "t": "p",
          "text": "Sorbitol shares xylitol's family and its most reliable feature: in more than modest amounts, both are [strongly laxative](https://pmc.ncbi.nlm.nih.gov/articles/PMC5508768/). That \"sugar-free sweets gave me stomach cramps\" experience is usually one of these."
        },
        {
          "t": "p",
          "text": "One urgent, unrelated warning: [xylitol is severely toxic to dogs, even in tiny amounts](https://www.fda.gov/consumers/consumer-updates/paws-xylitol-its-dangerous-dogs). If you keep xylitol products at home and have a dog, store them well out of reach."
        },
        {
          "t": "h",
          "text": "Isomalt — mostly a confectioner's tool"
        },
        {
          "t": "p",
          "text": "Isomalt hasn't changed much in the story. It's prized for making clear, hard, decorative caramel that resists melting, so it's a pastry-kitchen material more than an everyday sweetener. Like its sugar-alcohol relatives, it ramps up gut motility and causes bloating and cramping in larger doses. Fine for the occasional showpiece; not something to sweeten your coffee with."
        },
        {
          "t": "h",
          "text": "Fructose and the \"natural syrups\" — natural, but not the win they seem"
        },
        {
          "t": "p",
          "text": "This is the section I'd underline hardest, because the marketing is so persuasive and the biology so unforgiving."
        },
        {
          "t": "p",
          "text": "Fructose isn't really a sugar substitute — it's a sugar. Its low glycaemic index made it fashionable, but the liver handles fructose in a way that, in excess, drives fat production, fatty liver, insulin resistance and raised triglycerides. [A 2024 review of the evidence on dietary fructose](https://pmc.ncbi.nlm.nih.gov/articles/PMC11663027/) has only firmed this up. A little fructose from whole fruit, wrapped in fibre and water, is not the problem; concentrated fructose is."
        },
        {
          "t": "p",
          "text": "And that's exactly what the \"natural syrups\" are. Agave nectar is often held up as a healthy choice, yet it's [around 85% fructose](https://pmc.ncbi.nlm.nih.gov/articles/PMC9222424/) — higher than table sugar — which makes it one of the worse options for metabolic health, not a better one. Honey, maple syrup, date syrup and coconut sugar are all essentially glucose and fructose in prettier packaging. They carry trace minerals and, in honey's case, some antioxidants, so they're not nutritionally identical to white sugar — but for blood-sugar and weight purposes your body treats them much the same. If you're managing diabetes or weight, they don't get a pass for being natural."
        },
        {
          "t": "h",
          "text": "The artificial sweeteners — sucralose, aspartame, acesulfame K and saccharin"
        },
        {
          "t": "p",
          "text": "These four are synthetic rather than plant-derived, and they're what most \"diet\" and \"zero\" products actually contain — so they belong in any honest answer to what you'd replace sugar with. The short version: regulators still consider them safe within normal intakes, but the evidence has grown more mixed, and none of them is a reason to relax about sweetness."
        },
        {
          "t": "p",
          "text": "Aspartame is the most scrutinised. In 2023 the WHO's cancer agency (IARC) [classified aspartame as \"possibly carcinogenic to humans\"](https://www.who.int/news/item/14-07-2023-aspartame-hazard-and-risk-assessment-results-released) — its weakest hazard category, based on limited evidence — while the WHO's food-safety committee left the acceptable daily intake unchanged at 40 mg per kg of body weight. That gap matters: \"possibly carcinogenic\" describes how confident we are that something could cause cancer, not how much risk it poses at real doses. In practice a 70 kg adult would need to drink well over a dozen cans of diet soft drink a day to exceed the limit. People with the rare genetic condition [PKU must avoid aspartame](https://www.fda.gov/food/food-additives-petitions/aspartame-and-other-sweeteners-food); for everyone else, the honest summary is \"probably fine in moderation, but not something to drink by the litre.\" It also loses its sweetness when heated, so it's poor for baking."
        },
        {
          "t": "p",
          "text": "Sucralose was long treated as inert, but a 2023 study complicated that. Researchers found that [sucralose-6-acetate — an impurity in commercial sucralose, and a compound the gut also forms from it — damaged DNA in laboratory cells](https://www.tandfonline.com/doi/full/10.1080/10937404.2023.2213903), and that a single sucralose-sweetened drink could exceed the safety threshold for genotoxic substances. This is lab work, not proof of harm in people, and regulators haven't changed their stance — but it's a reason not to treat sucralose as consequence-free. [Heating sucralose can also generate potentially harmful compounds](https://www.bfr.bund.de/en/notification/sucralose-heating-above-120c-can-produce-substances-that-are-harmful-to-health/), so it's best kept out of the oven."
        },
        {
          "t": "p",
          "text": "Acesulfame K (often labelled Ace-K) almost always appears blended with aspartame or sucralose to round out the taste. It has been approved for decades and passes through the body largely unchanged. The main open question is the gut: [a 2022 trial in Cell found that some non-sugar sweeteners altered the gut microbiome and glucose responses](https://www.cell.com/cell/fulltext/S0092-8674(22)00919-9) in some people, with effects that varied from person to person. Acesulfame K itself is less studied here, which is its own argument for modest use rather than confidence."
        },
        {
          "t": "p",
          "text": "Saccharin is the oldest of the group. Its 1970s link to bladder cancer in rats was [later found not to apply to humans, and it was removed from cancer-warning lists](https://www.cancer.gov/about-cancer/causes-prevention/risk/diet/artificial-sweeteners-fact-sheet) — so on the classic cancer question it has largely been cleared. The newer question is again the microbiome, where saccharin was one of the sweeteners that shifted gut bacteria and glucose tolerance in the 2022 trial above. It's intensely sweet with a metallic edge, which is why it's usually blended rather than used alone."
        },
        {
          "t": "p",
          "text": "My overall take on this group is the same as for the sugar alcohols: not alarming, not a free pass. If you use them, use them as an occasional bridge away from sugar rather than a licence to keep everything sweet."
        },
        {
          "t": "h",
          "text": "Where you'll find each one"
        },
        {
          "t": "p",
          "text": "Sweeteners rarely announce themselves on the front of a pack — they hide in the ingredients list, often two or three blended together. Here's a quick guide to what's typically where, so you can read a label and know what you're looking at."
        },
        {
          "t": "table",
          "head": [
            "Sweetener",
            "Type",
            "Safety",
            "Commonly found in"
          ],
          "rows": [
            [
              "Stevia",
              "Natural (plant)",
              "High",
              "Tabletop packets and drops, \"naturally sweetened\" drinks and flavoured waters, some protein bars and yoghurts"
            ],
            [
              "Monk fruit",
              "Natural (plant)",
              "High",
              "Tabletop blends (usually with erythritol), keto and low-carb products, some sugar-free drinks"
            ],
            [
              "Allulose",
              "Natural (rare sugar)",
              "High",
              "Specialist low-carb baking sweeteners, some \"keto\" syrups and ice creams; still niche in the UK and EU"
            ],
            [
              "Erythritol",
              "Sugar alcohol",
              "Moderate",
              "The bulk of most \"stevia\" and \"monk fruit\" tabletop blends, keto baking sweeteners, sugar-free chocolate and sweets"
            ],
            [
              "Xylitol",
              "Sugar alcohol",
              "Moderate",
              "Sugar-free chewing gum and mints, toothpaste and mouthwash, \"tooth-friendly\" sweets (toxic to dogs)"
            ],
            [
              "Sorbitol",
              "Sugar alcohol",
              "Moderate",
              "Sugar-free gum and sweets, cough syrups and other liquid medicines, toothpaste"
            ],
            [
              "Isomalt",
              "Sugar alcohol",
              "Moderate",
              "Sugar-free hard-boiled sweets and lollipops, decorative cake and pastry work"
            ],
            [
              "Sucralose",
              "Artificial",
              "Moderate",
              "Diet and \"zero\" soft drinks, no-added-sugar squash, protein powders and bars, sugar-free desserts (brand: Splenda)"
            ],
            [
              "Aspartame",
              "Artificial",
              "Moderate",
              "Diet fizzy drinks, sugar-free gum, \"light\" and \"diet\" yoghurts and desserts, tabletop sweeteners (Canderel, NutraSweet)"
            ],
            [
              "Acesulfame K",
              "Artificial",
              "Moderate",
              "Diet drinks (almost always blended with aspartame or sucralose), protein bars, many sugar-free products"
            ],
            [
              "Saccharin",
              "Artificial",
              "Moderate",
              "Tabletop sweeteners (Sweet'N Low, Hermesetas), some diet drinks and medicines"
            ],
            [
              "Honey, agave, maple & syrups",
              "Sugars (natural)",
              "Low",
              "\"Refined-sugar-free\" and health-food snacks, granola and bars, drizzles and home baking — metabolically still sugar"
            ]
          ]
        },
        {
          "t": "h",
          "text": "What the big guidelines now say"
        },
        {
          "t": "p",
          "text": "Two shifts are worth knowing about. In 2023, [the WHO advised against using non-sugar sweeteners for weight control](https://www.who.int/news/item/15-05-2023-who-advises-not-to-use-non-sugar-sweeteners-for-weight-control-in-newly-released-guideline), having concluded they don't help with long-term body fat and may be associated with type 2 diabetes and cardiovascular disease over time. Crucially, that guidance explicitly excludes people who already have diabetes, and it's been debated among scientists — but the direction is a nudge away from treating sweeteners as a free lunch for weight loss."
        },
        {
          "t": "p",
          "text": "The [American Diabetes Association's 2025 Standards of Care](https://diabetesjournals.org/care/article/48/Supplement_1/S86/157563/) strike a more pragmatic note for people with diabetes: sweeteners can be a reasonable swap for sugar, in moderation and short term, to cut calories and carbs — as long as you don't compensate by eating more elsewhere. That \"don't compensate\" clause is the whole game."
        },
        {
          "t": "h",
          "text": "So how should you actually choose?"
        },
        {
          "t": "p",
          "text": "Distilled into practical advice:"
        },
        {
          "t": "p",
          "text": "Best everyday choices: stevia, monk fruit or allulose — ideally blended, since each covers the others' weak spots. Allulose is the standout for baking if you can find it."
        },
        {
          "t": "p",
          "text": "Use sparingly, not daily: erythritol and xylitol. The convenience is real; so is the new caution. Small and occasional, especially with cardiovascular risk or diabetes."
        },
        {
          "t": "p",
          "text": "Treat as sugar, because they are: honey, agave, maple, date and coconut syrups, and fructose. Natural, lovely, and metabolically about the same as sugar."
        },
        {
          "t": "p",
          "text": "The bigger lever: the goal isn't to sweeten everything with a \"safe\" powder — it's to become gradually less dependent on sweetness overall. Sweeteners work best as a bridge, not a destination."
        },
        {
          "t": "p",
          "text": "And the single most important line, unchanged since I first wrote this: pay attention to your own response. People differ genuinely in taste, tolerance and blood-sugar reaction. Try one thing at a time and let your own body — ideally with a glucose meter or CGM if you have diabetes — cast the deciding vote."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "WHO advises against non-sugar sweeteners for weight control.",
              "detail": "In 2023 the World Health Organization issued a guideline recommending against the use of non-sugar sweeteners to control body weight, after a systematic review found no long-term benefit for body fat and possible associations with type 2 diabetes, cardiovascular disease and mortality. The recommendation explicitly excludes people who already have diabetes.",
              "cite": "World Health Organization · Guideline, 2023",
              "url": "https://www.who.int/news/item/15-05-2023-who-advises-not-to-use-non-sugar-sweeteners-for-weight-control-in-newly-released-guideline"
            },
            {
              "claim": "Higher blood erythritol is linked to cardiovascular events.",
              "detail": "A 2023 study in Nature Medicine analysed over 4,000 patients and found those with the highest blood erythritol had roughly double the risk of major adverse cardiovascular events. Laboratory and animal work showed erythritol enhanced platelet clotting — a plausible mechanism, though an association is not proof of cause, and the body also produces erythritol endogenously.",
              "cite": "Nature Medicine · Cohort & mechanistic study, 2023",
              "url": "https://www.nature.com/articles/s41591-023-02223-9"
            },
            {
              "claim": "Erythritol raised platelet reactivity even in healthy volunteers.",
              "detail": "A 2024 interventional study gave 20 healthy adults a typical 30g serving of erythritol. It produced a more than 1,000-fold rise in blood erythritol and an acute increase in platelet aggregation in every participant — while an equivalent glucose serving did not. The authors concluded erythritol may enhance thrombosis potential and warrants safety re-evaluation.",
              "cite": "Arteriosclerosis, Thrombosis & Vascular Biology · Interventional study, 2024",
              "url": "https://www.ahajournals.org/doi/10.1161/ATVBAHA.124.321019"
            },
            {
              "claim": "Xylitol shows the same signal as erythritol.",
              "detail": "A 2024 study in the European Heart Journal from the same research group linked higher blood xylitol to increased three-year cardiovascular risk across more than 3,000 patients, and found every measure of clotting ability rose immediately after ingestion in a human intervention study. The same caveats — association plus endogenous production — apply.",
              "cite": "European Heart Journal · Cohort & interventional study, 2024",
              "url": "https://academic.oup.com/eurheartj/article-abstract/45/27/2439/7683453"
            },
            {
              "claim": "Allulose blunts post-meal glucose in type 2 diabetes.",
              "detail": "A 2024 meta-analysis of randomised controlled trials found that allulose significantly reduced post-meal glucose area-under-the-curve and time above range in people with type 2 diabetes, with minimal effect on fasting glucose or HbA1c — supporting its role as a low-calorie sweetener for glycaemic control.",
              "cite": "Meta-analysis of RCTs · 2024",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11585728/"
            },
            {
              "claim": "Monk fruit does not raise glucose or insulin.",
              "detail": "A 2025 PRISMA-guided systematic review of randomised controlled trials found monk fruit extract had no adverse effect on blood glucose or insulin, with several trials showing reduced post-meal glucose and insulin responses. Long-term human data remain limited, but the short-term safety and glycaemic profile are favourable.",
              "cite": "Nutrients · Systematic review of RCTs, 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12073669/"
            },
            {
              "claim": "Concentrated fructose drives metabolic harm.",
              "detail": "A 2024 literature review summarised evidence that dietary fructose, in excess, is a potent driver of hepatic fat production, fatty liver, insulin resistance and raised triglycerides — the reason concentrated fructose sources such as agave nectar and syrups are not a metabolic improvement over sugar, even though fructose from whole fruit is not a concern.",
              "cite": "Nutrients · Literature review, 2024",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11663027/"
            },
            {
              "claim": "Aspartame: \"possibly carcinogenic,\" but intake limits unchanged.",
              "detail": "In 2023 the WHO's cancer agency (IARC) classified aspartame as \"possibly carcinogenic to humans\" (Group 2B) on limited evidence, while its food-safety committee (JECFA) reaffirmed the acceptable daily intake of 40 mg/kg body weight. Group 2B is a low-confidence hazard flag, not a measure of real-world risk — an adult would need well over a dozen cans of diet drink a day to exceed the limit.",
              "cite": "World Health Organization · IARC & JECFA assessment, 2023",
              "url": "https://www.who.int/news/item/14-07-2023-aspartame-hazard-and-risk-assessment-results-released"
            },
            {
              "claim": "A sucralose impurity damaged DNA in the lab.",
              "detail": "A 2023 study reported that sucralose-6-acetate — a manufacturing impurity in commercial sucralose, and a compound the gut also forms from it — was genotoxic (it broke DNA) in laboratory cell tests, and that a single sucralose-sweetened drink could exceed the safety threshold for genotoxic substances. This is in-vitro work rather than proof of harm in people, but it argues against treating sucralose as entirely inert.",
              "cite": "Journal of Toxicology and Environmental Health, Part B · In-vitro study, 2023",
              "url": "https://www.tandfonline.com/doi/full/10.1080/10937404.2023.2213903"
            },
            {
              "claim": "Some sweeteners alter the gut microbiome and glucose response.",
              "detail": "A 2022 randomised trial in Cell found that saccharin and sucralose measurably changed the gut microbiome and impaired glucose tolerance in some healthy adults, with aspartame and stevia showing microbiome shifts too. The effects were personalised — they varied markedly from person to person — which is part of why blanket claims about these sweeteners are hard to make.",
              "cite": "Cell · Randomised controlled trial, 2022",
              "url": "https://www.cell.com/cell/fulltext/S0092-8674(22)00919-9"
            },
            {
              "claim": "The ADA allows sweeteners as a short-term swap.",
              "detail": "The American Diabetes Association's 2025 Standards of Care state that non-nutritive sweeteners can be an acceptable substitute for sugar in moderation and short term to reduce calorie and carbohydrate intake — provided people do not compensate with additional calories elsewhere. Water is still preferred over sweetened drinks.",
              "cite": "American Diabetes Association · Standards of Care, 2025",
              "url": "https://diabetesjournals.org/care/article/48/Supplement_1/S86/157563/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Which natural sweetener is best for blood sugar?",
          "a": "Stevia, monk fruit and allulose are the strongest choices — none of them meaningfully raises blood glucose or insulin, and allulose may even blunt post-meal spikes. Stevia and monk fruit work well blended together to soften each one's aftertaste. Allulose is the closest to sugar in taste and behaves best in baking, though it is pricier and not yet approved for sale in the UK or EU."
        },
        {
          "q": "Is erythritol safe?",
          "a": "Erythritol does not raise blood sugar, but its safety picture has changed. Since 2023, studies have linked higher blood erythritol to increased blood-clotting activity and cardiovascular events, and a 2024 trial found platelet reactivity rose even in healthy volunteers after a single serving. This is an association plus a plausible mechanism, not proof of harm, and the body also makes erythritol itself. Small, occasional use is reasonable, but it is no longer a sweetener I suggest using freely every day — especially with existing diabetes or heart risk."
        },
        {
          "q": "Is honey or agave healthier than sugar?",
          "a": "Not in any way that matters for blood sugar or weight. Honey, maple syrup, date syrup and coconut sugar are essentially glucose and fructose with trace minerals. Agave is around 85% fructose — higher than table sugar — which makes it one of the worse options for metabolic and liver health, not a better one. If you are managing diabetes or weight, treat all of these like sugar."
        },
        {
          "q": "Does stevia raise blood sugar?",
          "a": "No. Stevia is calorie-free and does not raise blood glucose or insulin, which is why it remains a first-choice sweetener for people managing diabetes or weight. Earlier concerns that it disrupts the gut microbiome have not translated into clear harm in human research. Its main drawback is taste — it can turn bitter if you use too much, though not if you dose it lightly."
        },
        {
          "q": "Is all stevia bitter?",
          "a": "No — the bitterness comes from over-dosing, not from stevia itself. Because stevia is hundreds of times sweeter than sugar, a tiny amount is enough; the liquorice-like or metallic aftertaste only shows up when you use more than you need. Start with far less than feels natural — a pinch of powder, or a drop or two of liquid — and build up slowly until it is just sweet enough. Form and brand matter too: purified steviol-glycoside extracts (especially those standardised to rebaudioside A, often labelled \"Reb A\") are much less bitter than whole-leaf green powder, and blends with erythritol or monk fruit round out the taste further. If a product still tastes bitter at a low dose, switch brands rather than adding more — more stevia only makes bitterness worse."
        },
        {
          "q": "Are artificial sweeteners like aspartame and sucralose safe?",
          "a": "Within normal amounts, regulators still consider them safe — but the evidence has grown more mixed. Aspartame was classified as possibly carcinogenic by the WHO's cancer agency in 2023, though its intake limit was left unchanged and you'd need well over a dozen diet drinks a day to reach it (people with the condition PKU must avoid it). A 2023 lab study found a sucralose impurity can damage DNA, and some sweeteners — including saccharin and sucralose — shift the gut microbiome in certain people. None of this is proof of everyday harm, but it's reason to treat them as an occasional bridge away from sugar rather than a free pass. Aspartame and sucralose also break down when heated, so they're poor for baking."
        }
      ]
    },
    "ua": {
      "cat": "Харчування",
      "title": "Чим замінити цукор: що каже наука про підсолоджувачі",
      "seoTitle": "Чим замінити цукор: докази про підсолоджувачі",
      "metaDesc": "Що насправді каже наука про стевію, монк-фрут, алюлозу, еритрит, ксиліт, сукралозу, аспартам, мед і агаву для рівня цукру в крові та здоров'я.",
      "excerpt": "Стевія, монк-фрут, алюлоза, еритрит, ксиліт, сукралоза, аспартам, мед і агава — що насправді показують сучасні дослідження про підсолоджувачі для рівня цукру та здоров'я.",
      "meta": "9 липня 2026 · 7 хв читання",
      "lead": "Коли я вперше писала про натуральні підсолоджувачі, картина здавалася усталеною: стевія та цукрові спирти вважалися «безпечним» вибором, і головним було вгадати зі смаком. Відтоді наука пішла далі — місцями суттєво.",
      "blocks": [
        {
          "t": "p",
          "text": "Кілька підсолоджувачів, які я колись рекомендувала найтепліше, тепер мають цілком реальні застереження. До теми долучилася Всесвітня організація охорони здоров'я. І з'явилося нове покоління замінників. Тож це повноцінне переписування, а не косметична правка."
        },
        {
          "t": "p",
          "text": "Головна теза не змінилася: цукор варто обмежувати, і жоден замінник не має точно такого ж смаку. Але який саме замінник і в якій кількості — важливіше, ніж «натуральне проти штучного». Деякі з найменш корисних варіантів цілком натуральні — серед них мед і агава, — а «натуральне» ніколи не означало «нешкідливе». Пройдімося по них так, як я б це обговорювала з клієнткою."
        },
        {
          "t": "h",
          "text": "Спершу — що тут означає «безпечно»"
        },
        {
          "t": "p",
          "text": "Майже все з цього переліку безпечне у вузькому сенсі: регулятори на кшталт FDA та EFSA це дозволяють, і ви не отруїтеся. Насправді ж нас цікавить тонше: чи підіймає це цукор у крові, допомагає чи шкодить вазі та метаболічному здоров'ю впродовж років, а не днів, і чи є новіші сигнали, які варто поважати. Саме в останньому пункті картина змінилася найбільше."
        },
        {
          "t": "p",
          "text": "Одне чесне застереження на старті. Значна частина даних щодо людей досі короткострокова, а деякі тривожні нові знахідки — це асоціації плюс правдоподібний механізм, а не доказ, що підсолоджувач спричинив шкоду. Я вказуватиму, де це саме так, а не перебільшуватиму."
        },
        {
          "t": "h",
          "text": "Стевія — досі мій вибір на щодень"
        },
        {
          "t": "p",
          "text": "Стевія, з листя Stevia rebaudiana, залишається тим, до чого я тягнуся першим. Вона без калорій і [не підіймає глюкозу чи інсулін](https://pmc.ncbi.nlm.nih.gov/articles/PMC6770957/). Ранні побоювання, що вона порушує мікробіом кишківника, не переросли в чітку шкоду в людей — [огляд даних про стевію та кишкові бактерії](https://pmc.ncbi.nlm.nih.gov/articles/PMC9028423/) визнав докази щодо людей радше заспокійливими, ніж тривожними, а це важливо, зважаючи на те, скільки галасу було навколо цього кілька років тому."
        },
        {
          "t": "p",
          "text": "У смаку стевії є дві особливості, про які варто знати. По-перше, солодкість наростає повільно — приходить трохи пізніше, ніж очікуєш, — зате потім приємно тримається довго. По-друге, окремо від цього, стевія гіркне від надлишку: вона дуже солодка, тож надмір робить смак лакричним, ледь металевим, хоча якщо класти потроху, гіркота просто не з'являється. Саме ця повільна, але тривала солодкість і робить стевію ідеальною в парі з еритритом, чия солодкість поводиться навпаки (докладніше нижче). Найм'якша форма — заварене листя як чай; порошки, таблетки та сиропи сильно різняться за брендами. Моя практична порада та сама — беріть значно менше, ніж здається потрібним, і поєднуйте з чимось, що заокруглює смак, наприклад із еритритом, монк-фрутом чи дрібкою алюлози. Якщо хочете побачити це на практиці — [чорничний джем: рецепт без цукру](/ua/recipes/blueberry-jam/) та [гречане печиво без цукру](/ua/recipes/buckwheat-cookies/) підсолоджені самою лише стевією."
        },
        {
          "t": "h",
          "text": "Монк-фрут — справді вдалий новіший варіант"
        },
        {
          "t": "p",
          "text": "Екстракт монк-фрута (луо хань ґуо) у 2017-му мало хто мав на радарі, а тепер він на це заслуговує. Він без калорій, глікемічний індекс практично нульовий. [Систематичний огляд рандомізованих досліджень 2025 року](https://pmc.ncbi.nlm.nih.gov/articles/PMC12073669/) виявив, що екстракт монк-фрута не підіймає глюкозу чи інсулін, а кілька досліджень показали зниження післяобідньої глюкозної відповіді. Дані щодо кишківника обмежені, але поки що заспокійливі: жодного сигналу про шкоду. Довгострокових даних щодо людей досі мало, тож я ставлюся до нього обережно, але наразі це один із кращих виборів, особливо в поєднанні зі стевією, щоб пом'якшити присмак кожного."
        },
        {
          "t": "h",
          "text": "Алюлоза — новачок, про якого варто знати"
        },
        {
          "t": "p",
          "text": "Алюлоза — найцікавіша поява після оригінальної статті. Це «рідкісний цукор», що [природно міститься в невеликих кількостях в інжирі, родзинках і пшениці](https://www.mcgill.ca/oss/article/health-and-nutrition/allure-allulose), і на смак вона напрочуд схожа на цукор — бо хімічно ним майже і є. Хитрість у тому, що організм її всмоктує, але майже не метаболізує, тож вона дає лише [близько 0,4 ккал на грам проти 4 у цукру](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-declaration-allulose-and-calories-allulose-nutrition-and-supplement-facts-labels), мінімально впливаючи на глюкозу."
        },
        {
          "t": "p",
          "text": "Дані обнадійливі. [Метааналіз рандомізованих досліджень 2024 року](https://pmc.ncbi.nlm.nih.gov/articles/PMC11585728/) показав, що алюлоза навіть згладжувала післяобідні стрибки глюкози в людей із діабетом 2 типу, майже не впливаючи на глюкозу натще чи HbA1c. Вона має статус FDA «загальновизнано безпечною» (GRAS). Практичні мінуси — ціна, нерівномірна доступність (алюлоза [ще не дозволена як новий харчовий продукт (novel food) у ЄС](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2025.9468), а власне британське схвалення досі на розгляді) і, як з усіма ними, розлад травлення, якщо перебрати. Але якщо її вдається дістати — це сильний кандидат для випічки, де стевія та монк-фрут пасують гірше."
        },
        {
          "t": "h",
          "text": "Еритрит — тут я змінила пораду"
        },
        {
          "t": "p",
          "text": "Я звикла ставити еритрит поруч зі стевією як один із найбезпечніших варіантів. Тепер я істотно це пом'якшу."
        },
        {
          "t": "p",
          "text": "У 2023 році [дослідження в Nature Medicine](https://www.nature.com/articles/s41591-023-02223-9) пов'язало вищий рівень еритриту в крові з підвищеним ризиком інфаркту, інсульту та смерті й показало правдоподібний механізм: еритрит робив тромбоцити схильнішими до утворення тромбів. [Подальше дослідження 2024 року на здорових добровольцях](https://www.ahajournals.org/doi/10.1161/ATVBAHA.124.321019) виявило, що одна звична порція підвищувала реактивність тромбоцитів навіть у молодих здорових людей. Це та сама наукова група, яка згодом повідомила про дуже схожий сигнал і щодо ксиліту."
        },
        {
          "t": "p",
          "text": "Дві речі втримують мене від паніки, і я б хотіла, щоб ви трималися обох. По-перше, це переважно спостережні плюс механістичні дані; це ще не доказ, що вживання еритриту спричиняє інфаркти. По-друге, організм [сам виробляє еритрит із глюкози](https://www.pnas.org/doi/10.1073/pnas.1620079114), тож високий рівень у крові може частково відображати наявні метаболічні проблеми, а не лише раціон. Але коли сигнал з'являється в дослідженнях різного типу й указує на тромбоутворення, розумна реакція — особливо якщо у вас уже є діабет чи серцево-судинний ризик — перестати сприймати еритрит як підсолоджувач «на всю котушку». Невелике, епізодичне вживання досі здається мені прийнятним; але я вже не раджу його як щоденну основу."
        },
        {
          "t": "p",
          "text": "А ось смак у еритриту — дзеркальне відображення стевії: солодкість з'являється одразу, але вона «обрізана» — згасає майже так само швидко, як і приходить, лишаючи трохи охолодний, «порожній» післясмак. Саме тому їх так часто змішують. Еритрит дає миттєвий сплеск солодкості, якого бракує стевії; повільна, тривала солодкість стевії триває далі, коли еритрит уже зник; і кожен прикриває слабке місце іншого — еритрит маскує гіркоту стевії. Якщо ви все ж берете еритрит, саме в цій парі він найкорисніший."
        },
        {
          "t": "h",
          "text": "Ксиліт і сорбіт — те саме застереження плюс давні нюанси"
        },
        {
          "t": "p",
          "text": "Ксиліт тепер несе подвійне повідомлення. Він справді має репутацію корисного для зубів — саме тому його багато в жувальній гумці без цукру, — хоча [докази з клінічних досліджень слабші, ніж припускає маркетинг](https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD010743.pub2/full). Але [дослідження 2024 року в European Heart Journal](https://academic.oup.com/eurheartj/article-abstract/45/27/2439/7683453) від тієї ж групи з Cleveland Clinic пов'язало вищий рівень ксиліту в крові зі збільшенням серцево-судинних подій, із тим самим механізмом тромбоутворення після вживання. Застереження вище стосуються і його, але напрямок достатньо чіткий, щоб я радила вживати його ощадливо, а не як заміну столового цукру."
        },
        {
          "t": "p",
          "text": "Сорбіт належить до тієї ж родини, що й ксиліт, і має найнадійнішу її рису: у більш ніж помірних кількостях обидва [сильно послаблюють](https://pmc.ncbi.nlm.nih.gov/articles/PMC5508768/). Те саме відчуття «від цукерок без цукру схопило живіт» — зазвичай саме через них."
        },
        {
          "t": "p",
          "text": "Одне термінове, не пов'язане з темою попередження: [ксиліт вкрай токсичний для собак навіть у крихітних дозах](https://www.fda.gov/consumers/consumer-updates/paws-xylitol-its-dangerous-dogs). Якщо вдома є продукти з ксилітом і собака, зберігайте їх подалі від тварини."
        },
        {
          "t": "h",
          "text": "Ізомальт — здебільшого інструмент кондитера"
        },
        {
          "t": "p",
          "text": "Щодо ізомальту в цій історії мало що змінилося. Його цінують за прозору, тверду декоративну карамель, стійку до плавлення, тож це радше матеріал кондитерського цеху, ніж щоденний підсолоджувач. Як і його родичі — цукрові спирти — він підсилює моторику кишківника й у більших дозах спричиняє здуття та спазми. Годиться для святкового декору; але не для того, щоб підсолодити каву."
        },
        {
          "t": "h",
          "text": "Фруктоза та «натуральні сиропи» — натуральні, але не така перемога, як здається"
        },
        {
          "t": "p",
          "text": "Цей розділ я б підкреслила найжирніше, бо маркетинг тут дуже переконливий, а біологія — невблаганна."
        },
        {
          "t": "p",
          "text": "Фруктоза — це насправді не замінник цукру, а цукор. Низький глікемічний індекс зробив її модною, але печінка переробляє фруктозу так, що в надлишку це запускає утворення жиру, жирову хворобу печінки, інсулінорезистентність і підвищені тригліцериди. [Огляд даних про харчову фруктозу 2024 року](https://pmc.ncbi.nlm.nih.gov/articles/PMC11663027/) лише зміцнив цей висновок. Трохи фруктози з цілого фрукта, «загорнутої» у клітковину й воду, — не проблема; концентрована фруктоза — проблема."
        },
        {
          "t": "p",
          "text": "А «натуральні сиропи» — це саме вона. Сироп агави часто подають як здоровий вибір, хоча він містить [близько 85% фруктози](https://pmc.ncbi.nlm.nih.gov/articles/PMC9222424/) — більше, ніж столовий цукор, — що робить його одним із гірших, а не кращих варіантів для метаболічного здоров'я. Мед, кленовий сироп, фініковий сироп і кокосовий цукор — усе це по суті глюкоза з фруктозою в гарнішій обгортці. Вони містять сліди мінералів, а мед — ще й певні антиоксиданти, тож із білим цукром вони не тотожні нутриційно, — але для рівня цукру в крові й ваги організм ставиться до них приблизно так само. Якщо ви контролюєте діабет або вагу, «натуральність» їм поблажки не дає."
        },
        {
          "t": "h",
          "text": "Штучні підсолоджувачі — сукралоза, аспартам, ацесульфам К і сахарин"
        },
        {
          "t": "p",
          "text": "Ці чотири — синтетичні, а не рослинного походження, і саме вони містяться в більшості продуктів «дієт» і «зеро» — тож вони належать до будь-якої чесної відповіді на питання, чим замінити цукор. Коротко: регулятори досі вважають їх безпечними в межах звичайного споживання, але докази стали неоднозначнішими, і жоден із них не є приводом розслабитися щодо солодкого."
        },
        {
          "t": "p",
          "text": "Аспартам — найбільш досліджуваний. У 2023 році агенція ВООЗ із раку (IARC) [класифікувала аспартам як «можливо канцерогенний для людини»](https://www.who.int/news/item/14-07-2023-aspartame-hazard-and-risk-assessment-results-released) — це її найслабша категорія небезпеки, на основі обмежених доказів, — тоді як комітет ВООЗ із безпеки харчових продуктів залишив допустиме добове споживання незмінним: 40 мг на кг маси тіла. Ця різниця важлива: «можливо канцерогенний» описує, наскільки ми впевнені, що щось могло б спричиняти рак, а не який ризик воно несе за реальних доз. На практиці дорослому вагою 70 кг довелося б випивати значно більше десятка бляшанок дієтичного напою на день, щоб перевищити межу. Людям із рідкісним генетичним станом [ФКУ (фенілкетонурія) аспартаму слід уникати](https://www.fda.gov/food/food-additives-petitions/aspartame-and-other-sweeteners-food); для решти чесний підсумок такий: «мабуть, нормально в помірних кількостях, але не те, що варто пити літрами». Він також втрачає солодкість при нагріванні, тож для випічки не годиться."
        },
        {
          "t": "p",
          "text": "Сукралоза довго вважалася інертною, але дослідження 2023 року це ускладнило. Науковці виявили, що [сукралоза-6-ацетат — домішка в комерційній сукралозі, а також сполука, яку кишківник із неї утворює, — пошкоджувала ДНК у лабораторних клітинах](https://www.tandfonline.com/doi/full/10.1080/10937404.2023.2213903), і що один солодкий сукралозою напій може перевищити поріг безпеки для генотоксичних речовин. Це лабораторна робота, а не доказ шкоди в людей, і регулятори свою позицію не змінили — але це привід не вважати сукралозу цілком безпечною. [Нагрівання сукралози теж може утворювати потенційно шкідливі сполуки](https://www.bfr.bund.de/en/notification/sucralose-heating-above-120c-can-produce-substances-that-are-harmful-to-health/), тож її краще не класти в духовку."
        },
        {
          "t": "p",
          "text": "Ацесульфам К (часто позначений Ace-K) майже завжди йде в суміші з аспартамом чи сукралозою, щоб заокруглити смак. Він схвалений уже десятиліттями й проходить через організм здебільшого незмінним. Головне відкрите питання — кишківник: [дослідження 2022 року в Cell виявило, що деякі нецукрові підсолоджувачі змінювали мікробіом кишківника та глюкозну відповідь](https://www.cell.com/cell/fulltext/S0092-8674(22)00919-9) у частини людей, причому ефекти різнилися від людини до людини. Сам ацесульфам К тут вивчений менше, що є власним аргументом на користь помірного вживання, а не впевненості."
        },
        {
          "t": "p",
          "text": "Сахарин — найстаріший у групі. Його зв'язок із раком сечового міхура у щурів у 1970-х [пізніше визнали таким, що не стосується людей, і його прибрали зі списків із попередженнями про рак](https://www.cancer.gov/about-cancer/causes-prevention/risk/diet/artificial-sweeteners-fact-sheet) — тож щодо класичного питання про рак його здебільшого виправдали. Новіше питання — знову мікробіом, де сахарин був одним із підсолоджувачів, що зсували кишкові бактерії та толерантність до глюкози в дослідженні 2022 року вище. Він дуже солодкий із металевим відтінком, тому його зазвичай використовують у суміші, а не окремо."
        },
        {
          "t": "p",
          "text": "Моє загальне ставлення до цієї групи таке саме, як і до цукрових спиртів: не тривожно, але й не «повна свобода». Якщо вживаєте їх — нехай це буде епізодичний місток геть від цукру, а не дозвіл лишати все солодким."
        },
        {
          "t": "h",
          "text": "Де знайти кожен із них"
        },
        {
          "t": "p",
          "text": "Підсолоджувачі рідко заявляють про себе на лицьовому боці упаковки — вони ховаються у списку інгредієнтів, часто по два-три в суміші. Ось короткий довідник, що де зазвичай трапляється, щоб ви могли прочитати етикетку й розуміти, що перед вами."
        },
        {
          "t": "table",
          "head": [
            "Підсолоджувач",
            "Тип",
            "Безпека",
            "Де зазвичай трапляється"
          ],
          "rows": [
            [
              "Стевія",
              "Натуральний (рослина)",
              "Висока",
              "Таблетки, саше й краплі для чаю та кави, «натурально підсолоджені» напої та ароматизовані води, деякі протеїнові батончики й йогурти"
            ],
            [
              "Монк-фрут",
              "Натуральний (рослина)",
              "Висока",
              "Суміші в таблетках і саше (зазвичай з еритритом), кето- та низьковуглеводні продукти, деякі напої без цукру"
            ],
            [
              "Алюлоза",
              "Натуральний (рідкісний цукор)",
              "Висока",
              "Спеціальні низьковуглеводні підсолоджувачі для випічки, деякі «кето» сиропи та морозиво; у Великій Британії та ЄС досі нішева"
            ],
            [
              "Еритрит",
              "Цукровий спирт",
              "Помірна",
              "Основа більшості цукрозамінників у саше «стевія» та «монк-фрут», кето-підсолоджувачі для випічки, шоколад і цукерки без цукру"
            ],
            [
              "Ксиліт",
              "Цукровий спирт",
              "Помірна",
              "Жувальна гумка й льодяники без цукру, зубна паста й ополіскувачі, «безпечні для зубів» цукерки (токсичний для собак)"
            ],
            [
              "Сорбіт",
              "Цукровий спирт",
              "Помірна",
              "Гумка й цукерки без цукру, сиропи від кашлю та інші рідкі ліки, зубна паста"
            ],
            [
              "Ізомальт",
              "Цукровий спирт",
              "Помірна",
              "Тверді льодяники без цукру, декоративні роботи з тортами й випічкою"
            ],
            [
              "Сукралоза",
              "Штучний",
              "Помірна",
              "Дієтичні напої та «зеро», напої «без доданого цукру», протеїнові порошки й батончики, десерти без цукру (бренд: Splenda)"
            ],
            [
              "Аспартам",
              "Штучний",
              "Помірна",
              "Дієтичні газовані напої, гумка без цукру, «легкі» та «дієтичні» йогурти й десерти, цукрозамінники в таблетках (Canderel, NutraSweet)"
            ],
            [
              "Ацесульфам К",
              "Штучний",
              "Помірна",
              "Дієтичні напої (майже завжди в суміші з аспартамом чи сукралозою), протеїнові батончики, багато продуктів без цукру"
            ],
            [
              "Сахарин",
              "Штучний",
              "Помірна",
              "Цукрозамінники в таблетках (Sweet'N Low, Hermesetas), деякі дієтичні напої та ліки"
            ],
            [
              "Мед, агава, кленовий та сиропи",
              "Цукри (натуральні)",
              "Низька",
              "Снеки «без рафінованого цукру» та зі здорового харчування, гранола й батончики, поливки й домашня випічка — метаболічно це все одно цукор"
            ]
          ]
        },
        {
          "t": "h",
          "text": "Що тепер кажуть великі настанови"
        },
        {
          "t": "p",
          "text": "Варто знати про два зрушення. У 2023 році [ВООЗ порадила не використовувати нецукрові підсолоджувачі для контролю ваги](https://www.who.int/news/item/15-05-2023-who-advises-not-to-use-non-sugar-sweeteners-for-weight-control-in-newly-released-guideline), дійшовши висновку, що вони не допомагають зменшити жир у тілі в довгостроковій перспективі й можуть бути пов'язані з діабетом 2 типу та серцево-судинними хворобами з часом. Важливо: ця настанова прямо не поширюється на людей, які вже мають діабет, і серед науковців вона викликала дискусії — але загальний вектор відводить від думки, що підсолоджувачі — це «безкоштовний обід» для схуднення."
        },
        {
          "t": "p",
          "text": "[Стандарти допомоги Американської діабетичної асоціації 2025 року](https://diabetesjournals.org/care/article/48/Supplement_1/S86/157563/) звучать прагматичніше для людей із діабетом: підсолоджувачі можуть бути розумною заміною цукру, у помірних кількостях і на короткий строк, щоб скоротити калорії та вуглеводи — за умови, що ви не компенсуєте це, з'їдаючи більше деінде. Уся суть — саме в цьому «не компенсуйте»."
        },
        {
          "t": "h",
          "text": "То як же обирати на практиці?"
        },
        {
          "t": "p",
          "text": "Якщо стиснути все це до практичної поради:"
        },
        {
          "t": "p",
          "text": "Найкращий вибір на щодень: стевія, монк-фрут або алюлоза — найкраще в суміші, бо кожен перекриває слабкі місця інших. Алюлоза — фаворит для випічки, якщо вдасться її знайти."
        },
        {
          "t": "p",
          "text": "Ощадливо, не щодня: еритрит і ксиліт. Зручність реальна; але й нова обережність теж. Потроху й зрідка, особливо за серцево-судинного ризику чи діабету."
        },
        {
          "t": "p",
          "text": "Ставтеся як до цукру, бо це він і є: мед, агава, кленовий, фініковий і кокосовий сиропи, фруктоза. Натуральні, смачні й метаболічно — приблизно як цукор."
        },
        {
          "t": "p",
          "text": "Більший важіль: мета не в тому, щоб підсолоджувати все «безпечним» порошком, а в тому, щоб поступово менше залежати від солодкого загалом. Підсолоджувачі найкраще працюють як місток, а не як пункт призначення."
        },
        {
          "t": "p",
          "text": "І найважливіший рядок, незмінний відтоді, як я вперше це написала: звертайте увагу на власну реакцію. Люди справді різняться за смаком, переносимістю й відповіддю рівня цукру. Пробуйте щось одне за раз і дайте власному тілу — найкраще з глюкометром чи CGM, якщо у вас діабет — зробити вирішальний голос."
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "ВООЗ радить не використовувати нецукрові підсолоджувачі для контролю ваги.",
              "detail": "У 2023 році Всесвітня організація охорони здоров'я випустила настанову проти використання нецукрових підсолоджувачів для контролю маси тіла, після того як систематичний огляд не виявив довгострокової користі для жиру в тілі й показав можливі асоціації з діабетом 2 типу, серцево-судинними хворобами та смертністю. Рекомендація прямо не поширюється на людей, які вже мають діабет.",
              "cite": "Всесвітня організація охорони здоров'я · Настанова, 2023",
              "url": "https://www.who.int/news/item/15-05-2023-who-advises-not-to-use-non-sugar-sweeteners-for-weight-control-in-newly-released-guideline"
            },
            {
              "claim": "Вищий рівень еритриту в крові пов'язаний із серцево-судинними подіями.",
              "detail": "Дослідження 2023 року в Nature Medicine проаналізувало понад 4000 пацієнтів і виявило, що ті, у кого рівень еритриту в крові був найвищим, мали приблизно вдвічі більший ризик серйозних серцево-судинних подій. Лабораторні досліди й досліди на тваринах показали, що еритрит посилює тромбоутворення — правдоподібний механізм, хоча асоціація не є доказом причини, а організм ще й виробляє еритрит сам.",
              "cite": "Nature Medicine · Когортне та механістичне дослідження, 2023",
              "url": "https://www.nature.com/articles/s41591-023-02223-9"
            },
            {
              "claim": "Еритрит підвищував реактивність тромбоцитів навіть у здорових добровольців.",
              "detail": "Інтервенційне дослідження 2024 року дало 20 здоровим дорослим звичну порцію 30 г еритриту. Вона спричинила понад тисячократне зростання рівня еритриту в крові та гостре посилення агрегації тромбоцитів у кожного учасника — тоді як еквівалентна порція глюкози цього не зробила. Автори дійшли висновку, що еритрит може посилювати потенціал тромбоутворення й потребує повторної оцінки безпеки.",
              "cite": "Arteriosclerosis, Thrombosis & Vascular Biology · Інтервенційне дослідження, 2024",
              "url": "https://www.ahajournals.org/doi/10.1161/ATVBAHA.124.321019"
            },
            {
              "claim": "Ксиліт показує той самий сигнал, що й еритрит.",
              "detail": "Дослідження 2024 року в European Heart Journal від тієї ж наукової групи пов'язало вищий рівень ксиліту в крові зі збільшенням трирічного серцево-судинного ризику серед понад 3000 пацієнтів і виявило, що кожен показник здатності до згортання зростав одразу після вживання в дослідженні на людях. Ті самі застереження — асоціація плюс власне вироблення організмом — стосуються і його.",
              "cite": "European Heart Journal · Когортне та інтервенційне дослідження, 2024",
              "url": "https://academic.oup.com/eurheartj/article-abstract/45/27/2439/7683453"
            },
            {
              "claim": "Алюлоза згладжує післяобідню глюкозу за діабету 2 типу.",
              "detail": "Метааналіз рандомізованих контрольованих досліджень 2024 року виявив, що алюлоза суттєво зменшувала площу під кривою глюкози після їжі та час у зоні підвищених значень у людей із діабетом 2 типу, майже не впливаючи на глюкозу натще чи HbA1c — що підтримує її роль як низькокалорійного підсолоджувача для контролю глікемії.",
              "cite": "Метааналіз РКД · 2024",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11585728/"
            },
            {
              "claim": "Монк-фрут не підіймає глюкозу чи інсулін.",
              "detail": "Систематичний огляд рандомізованих контрольованих досліджень 2025 року за методологією PRISMA виявив, що екстракт монк-фрута не мав несприятливого впливу на глюкозу чи інсулін, а кілька досліджень показали знижену післяобідню глюкозну та інсулінову відповідь. Довгострокових даних щодо людей досі мало, але короткостроковий профіль безпеки та глікемії сприятливий.",
              "cite": "Nutrients · Систематичний огляд РКД, 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12073669/"
            },
            {
              "claim": "Концентрована фруктоза шкодить метаболізму.",
              "detail": "Огляд літератури 2024 року узагальнив докази, що харчова фруктоза в надлишку є потужним двигуном утворення жиру в печінці, жирової хвороби печінки, інсулінорезистентності та підвищених тригліцеридів — саме тому концентровані джерела фруктози, як-от сироп агави та інші сиропи, не є метаболічним покращенням порівняно з цукром, хоча фруктоза з цілих фруктів не викликає занепокоєння.",
              "cite": "Nutrients · Огляд літератури, 2024",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11663027/"
            },
            {
              "claim": "Аспартам: «можливо канцерогенний», але межі споживання незмінні.",
              "detail": "У 2023 році агенція ВООЗ із раку (IARC) класифікувала аспартам як «можливо канцерогенний для людини» (група 2B) на основі обмежених доказів, тоді як комітет із безпеки харчових продуктів (JECFA) підтвердив допустиме добове споживання 40 мг/кг маси тіла. Група 2B — це слабкий за впевненістю сигнал небезпеки, а не міра реального ризику: дорослому довелося б випивати значно більше десятка бляшанок дієтичного напою на день, щоб перевищити межу.",
              "cite": "Всесвітня організація охорони здоров'я · Оцінка IARC і JECFA, 2023",
              "url": "https://www.who.int/news/item/14-07-2023-aspartame-hazard-and-risk-assessment-results-released"
            },
            {
              "claim": "Домішка сукралози пошкоджувала ДНК у лабораторії.",
              "detail": "Дослідження 2023 року повідомило, що сукралоза-6-ацетат — виробнича домішка в комерційній сукралозі, а також сполука, яку кишківник із неї утворює, — була генотоксичною (руйнувала ДНК) у лабораторних клітинних тестах, і що один солодкий сукралозою напій може перевищити поріг безпеки для генотоксичних речовин. Це робота in vitro, а не доказ шкоди в людей, але вона свідчить проти уявлення про сукралозу як цілком інертну.",
              "cite": "Journal of Toxicology and Environmental Health, Part B · Дослідження in vitro, 2023",
              "url": "https://www.tandfonline.com/doi/full/10.1080/10937404.2023.2213903"
            },
            {
              "claim": "Деякі підсолоджувачі змінюють мікробіом і глюкозну відповідь.",
              "detail": "Рандомізоване дослідження 2022 року в Cell виявило, що сахарин і сукралоза відчутно змінювали мікробіом кишківника та погіршували толерантність до глюкози в частини здорових дорослих, а аспартам і стевія теж показали зсуви мікробіому. Ефекти були персоналізованими — суттєво різнилися від людини до людини, — і це почасти пояснює, чому загальні твердження про ці підсолоджувачі робити важко.",
              "cite": "Cell · Рандомізоване контрольоване дослідження, 2022",
              "url": "https://www.cell.com/cell/fulltext/S0092-8674(22)00919-9"
            },
            {
              "claim": "АДА дозволяє підсолоджувачі як короткострокову заміну.",
              "detail": "Стандарти допомоги Американської діабетичної асоціації 2025 року зазначають, що нехарчові підсолоджувачі можуть бути прийнятною заміною цукру в помірних кількостях і на короткий строк, щоб зменшити споживання калорій і вуглеводів — за умови, що люди не компенсують це додатковими калоріями деінде. Воду й далі надають перевагу над солодкими напоями.",
              "cite": "Американська діабетична асоціація · Стандарти допомоги, 2025",
              "url": "https://diabetesjournals.org/care/article/48/Supplement_1/S86/157563/"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Який натуральний підсолоджувач найкращий для рівня цукру?",
          "a": "Стевія, монк-фрут і алюлоза — найкращі варіанти: жоден із них суттєво не підіймає глюкозу чи інсулін, а алюлоза навіть може згладжувати післяобідні стрибки. Стевія й монк-фрут добре працюють у суміші, пом'якшуючи присмак одне одного. Алюлоза найближча до цукру за смаком і найкраще поводиться у випічці, хоча вона дорожча й поки не дозволена для продажу у Великій Британії та ЄС."
        },
        {
          "q": "Чи безпечний еритрит?",
          "a": "Еритрит не підіймає рівень цукру, але картина його безпеки змінилася. Від 2023 року дослідження пов'язують вищий рівень еритриту в крові з посиленням тромбоутворення та серцево-судинними подіями, а дослідження 2024 року виявило зростання реактивності тромбоцитів навіть у здорових добровольців після однієї порції. Це асоціація плюс правдоподібний механізм, а не доказ шкоди, до того ж організм сам виробляє еритрит. Невелике, епізодичне вживання прийнятне, але це вже не той підсолоджувач, який я раджу вживати вільно щодня — особливо за наявного діабету чи серцевого ризику."
        },
        {
          "q": "Чи корисніші мед або агава за цукор?",
          "a": "Ні, у жодному сенсі, що важить для рівня цукру чи ваги. Мед, кленовий сироп, фініковий сироп і кокосовий цукор — це по суті глюкоза й фруктоза зі слідами мінералів. Агава містить близько 85% фруктози — більше, ніж столовий цукор, — що робить її одним із гірших, а не кращих варіантів для метаболічного здоров'я та печінки. Якщо ви контролюєте діабет або вагу, ставтеся до всіх них як до цукру."
        },
        {
          "q": "Чи підіймає стевія рівень цукру?",
          "a": "Ні. Стевія без калорій і не підіймає глюкозу чи інсулін, тому вона залишається підсолоджувачем першого вибору для людей, які контролюють діабет або вагу. Ранні побоювання, що вона порушує мікробіом кишківника, не переросли в чітку шкоду в дослідженнях на людях. Її головний мінус — смак: вона може гіркнути, якщо покласти забагато, але не тоді, коли дозувати потроху."
        },
        {
          "q": "Чи вся стевія гірка?",
          "a": "Ні — гіркота виникає від передозування, а не від самої стевії. Оскільки стевія у сотні разів солодша за цукор, достатньо крихітної кількості; лакричний чи металевий присмак з'являється лише тоді, коли ви кладете більше, ніж потрібно. Починайте зі значно меншого, ніж здається природним, — дрібка порошку або крапля-дві рідини — і поступово додавайте, доки не стане достатньо солодко. Форма й бренд теж важать: очищені екстракти стевіол-глікозидів (особливо стандартизовані за ребаудіозидом А, часто позначені «Reb A») набагато менш гіркі, ніж цільнолистовий зелений порошок, а суміші з еритритом чи монк-фрутом ще краще заокруглюють смак. Якщо продукт усе одно гіркий навіть у малій дозі, змініть бренд, а не додавайте більше — від надлишку стевії гіркота лише посилюється."
        },
        {
          "q": "Чи безпечні штучні підсолоджувачі, як-от аспартам і сукралоза?",
          "a": "У межах звичайних кількостей регулятори досі вважають їх безпечними — але докази стали неоднозначнішими. У 2023 році агенція ВООЗ із раку класифікувала аспартам як можливо канцерогенний, хоча межу споживання залишили незмінною, і щоб її досягти, треба випити значно більше десятка дієтичних напоїв на день (людям із ФКУ його слід уникати). Лабораторне дослідження 2023 року виявило, що домішка сукралози може пошкоджувати ДНК, а деякі підсолоджувачі — зокрема сахарин і сукралоза — зсувають мікробіом кишківника в частини людей. Ніщо з цього не є доказом щоденної шкоди, але це привід сприймати їх як епізодичний місток геть від цукру, а не як повну свободу. Аспартам і сукралоза також розкладаються при нагріванні, тож для випічки не годяться."
        }
      ]
    }
  },
  {
    "slug": "protein-for-women-over-40",
    "date": "2026-07-04",
    "image": "/images/protein-for-women-over-40.jpg",
    "cats": [
      "nutrition"
    ],
    "en": {
      "cat": "Nutrition",
      "title": "Protein for women over 40: how much do you actually need?",
      "excerpt": "Why the official 0.8g/kg guideline falls short after 40 — and the protein targets that actually protect muscle, energy and blood sugar.",
      "meta": "4 July 2026 · 8 min read",
      "lead": "Getting enough protein after 40 is one of the most consistent things I hear women struggle with — and one of the things that made the biggest difference to my own energy and blood sugar stability. Here's what the evidence says, and what works in practice.",
      "seoTitle": "Protein for Women Over 40: How Much Do You Actually Need?",
      "metaDesc": "How much protein do women over 40 really need? Evidence-based targets, why needs rise in perimenopause, and how to hit them if you're managing blood sugar.",
      "blocks": [
        {
          "t": "p",
          "text": "Please always consult your healthcare professional before changing your diet."
        },
        {
          "t": "p",
          "text": "A few years ago, I started noticing I was losing muscle and feeling tired more easily, even though I was still training consistently. My blood sugar had already become harder to manage as my hormones shifted — [that battle I've written about before](/blog/perimenopause-diabetes-blood-sugar/) — but I also started wondering whether I was simply not eating enough protein."
        },
        {
          "t": "p",
          "text": "The honest answer was: no, I wasn't. I'd look at my plate and think it looked balanced, but when I actually tracked my intake I was hitting maybe 60–70g on a good day. For a woman my size, in my 40s, that's not enough."
        },
        {
          "t": "p",
          "text": "The thing that helped me understand this wasn't another generic article about eating more chicken. It was realising that my body, at this stage of life, handles protein differently — and needs considerably more of it than the official guidelines suggest."
        },
        {
          "t": "p",
          "text": "As a busy mum, getting whole-food protein into every meal — especially breakfast — isn't always realistic. I used to travel regularly for work, and the choice of food on a work trip can be genuinely limited. I've learned to keep a good protein powder mixed with flaxseeds in my bag, and add a scoop to water or a smoothie when I need something quick that won't send my blood sugar in the wrong direction."
        },
        {
          "t": "p",
          "text": "One thing I figured out the hard way: I try not to mix protein powder with regular dairy milk — it raises my blood sugar faster than I'd like. I use unsweetened almond, coconut or soya milk instead, and the difference is noticeable. If you're managing blood sugar alongside your nutrition, this kind of detail matters."
        },
        {
          "t": "h",
          "text": "Why your protein needs change after 40"
        },
        {
          "t": "p",
          "text": "Something changes biologically in your 40s — particularly if you're in perimenopause — that affects how your muscles respond to the protein you eat."
        },
        {
          "t": "p",
          "text": "As oestrogen declines, your body becomes less efficient at using dietary protein to build and repair muscle. [A 2018 review in Current Opinion in Clinical Nutrition and Metabolic Care](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4997405/) described this as anabolic resistance: the blunted muscle protein synthesis response that older adults experience after eating protein. Older women may see up to a 40% smaller increase in muscle protein synthesis than younger women, even eating identical amounts of protein. I felt it directly — my muscles had become less responsive, even though I was eating and training the same."
        },
        {
          "t": "p",
          "text": "Alongside this, age-related muscle loss — known as sarcopenia — accelerates from around 40 onwards and compounds further at menopause. [A 2023 systematic review in BMC Women's Health](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/) confirmed that menopausal women are at significantly elevated risk of sarcopenia, and found that increased dietary protein combined with resistance exercise was among the most effective interventions for preventing it. Muscle isn't just about strength or aesthetics — it plays a direct role in how your body handles blood glucose, your metabolic rate and your bone density."
        },
        {
          "t": "p",
          "text": "The good news is that protein intake is one of the most powerful levers you have to slow this process — and it's something you can act on today."
        },
        {
          "t": "h",
          "text": "So how much protein do women over 40 actually need?"
        },
        {
          "t": "p",
          "text": "The UK and US official recommendation — 0.8g of protein per kg of body weight per day — was set to prevent deficiency in the general adult population. It was never designed as a target for women navigating perimenopause, maintaining muscle, or managing blood sugar."
        },
        {
          "t": "p",
          "text": "[A 2025 study in Frontiers in Nutrition](https://pmc.ncbi.nlm.nih.gov/articles/PMC12104658/) found that women in the highest quintile of protein intake lost approximately 40% less lean muscle mass over three years than those in the lowest. Taken alongside the broader evidence, most nutrition researchers now place the practical target for women over 40 at 1.2–1.6g per kg of body weight per day as a baseline, rising to 1.6–2.0g/kg if you're strength training regularly."
        },
        {
          "t": "p",
          "text": "[Dr Stacy Sims](https://www.drstacysims.com/newsletters/articles/posts/optimal-protein-intake-for-women) goes further, recommending 2.0–2.3g/kg for women in perimenopause and menopause, specifically to counteract anabolic resistance:"
        },
        {
          "t": "quote",
          "text": "As we age, our bodies become more resistant to the muscle-building effects of protein and exercise, requiring higher doses of both."
        },
        {
          "t": "p",
          "text": "In practice, that looks like this:"
        },
        {
          "t": "table",
          "head": [
            "Your weight",
            "Minimum (1.2g/kg)",
            "Active (1.6g/kg)",
            "Perimenopause (2.0g/kg)"
          ],
          "rows": [
            [
              "55 kg",
              "66 g/day",
              "88 g/day",
              "110 g/day"
            ],
            [
              "65 kg",
              "78 g/day",
              "104 g/day",
              "130 g/day"
            ],
            [
              "75 kg",
              "90 g/day",
              "120 g/day",
              "150 g/day"
            ],
            [
              "85 kg",
              "102 g/day",
              "136 g/day",
              "170 g/day"
            ]
          ]
        },
        {
          "t": "p",
          "text": "If these numbers feel daunting compared to what you currently eat, start with the minimum for your weight and build from there. Even a modest increase tends to make a noticeable difference to energy, appetite regulation and body composition over a few weeks. And do check with your doctor first — a sudden jump in protein isn't right for everyone."
        },
        {
          "t": "h",
          "text": "How to actually eat more protein"
        },
        {
          "t": "p",
          "text": "The most useful shift is to plan meals around protein first, then add everything else around it. Most of us were taught to think of a meal with protein as one component; reversing that habit makes a real difference."
        },
        {
          "t": "p",
          "text": "Distribution matters as much as the total. [A study on postmenopausal women](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4042233/) found that consistent protein intake across meals was the primary driver of muscle protein anabolism — more than precise timing around workouts. Research consistently shows the body stimulates muscle protein synthesis most effectively when each meal provides roughly 25–40g of protein. Eating 120g at dinner is far less effective than spreading it across three meals. Front-loading protein at breakfast, where most women eat the least, is one of the most practical changes you can make."
        },
        {
          "t": "p",
          "text": "Some simple swaps that help: Greek yoghurt instead of regular yoghurt (nearly double the protein), eggs or smoked salmon at breakfast instead of cereal, cottage cheese as a snack, lentils or edamame added to salads, tinned fish in a wrap at lunch. None of these require cooking from scratch or meal-prepping at the weekend."
        },
        {
          "t": "p",
          "text": "A day that hits roughly 130g might look like this:"
        },
        {
          "t": "table",
          "head": [
            "Meal",
            "Example",
            "Protein"
          ],
          "rows": [
            [
              "Breakfast",
              "2 scrambled eggs + 150g Greek yoghurt with berries + protein hot chocolate",
              "~30g"
            ],
            [
              "Lunch",
              "Chicken salad — 150g chicken breast, mixed leaves, avocado, olive oil",
              "~45g"
            ],
            [
              "Snack",
              "Protein shake (whey isolate) with unsweetened almond milk + chia seeds",
              "~25g"
            ],
            [
              "Dinner",
              "Baked salmon fillet (140g) with roasted veg and a small portion of quinoa",
              "~35g"
            ],
            [
              "Total",
              "",
              "~135g"
            ]
          ]
        },
        {
          "t": "h",
          "text": "A note on protein shakes"
        },
        {
          "t": "p",
          "text": "Whole food first, always. But protein powder is a practical tool, not a shortcut. When travel, time or limited food options make hitting your protein target through food alone unrealistic, a good-quality shake is a genuinely useful bridge."
        },
        {
          "t": "p",
          "text": "If you're managing blood sugar, the type of shake and what you mix it with matters. Research on leucine — the branched-chain amino acid most responsible for triggering muscle protein synthesis — shows it's the key variable in how effectively a protein source supports muscle."
        },
        {
          "t": "p",
          "text": "[A guide published by Healthline](https://www.healthline.com/nutrition/10-high-leucine-foods) lists whey isolate among the highest leucine sources available, at roughly 2.7g per scoop. It's also low in lactose and carbohydrate, which is relevant if you're watching your glucose response. For a dairy-free alternative, a pea and rice protein blend provides the most complete amino acid profile of the plant-based options."
        },
        {
          "t": "p",
          "text": "From my own experience: mixing protein powder with regular dairy milk causes a faster blood sugar rise than mixing with water or unsweetened plant milk (apart from oat and rice milk, of course). The lactose and carbohydrate add up. If your glucose goes higher than expected after a shake, that's a simple variable worth checking. Adding a tablespoon of nut butter, ground flaxseed or chia seeds also slows absorption and keeps you full considerably longer."
        },
        {
          "t": "p",
          "text": "One thing to watch: collagen is often marketed alongside protein powders, but — as [Diatribe's guide on protein for blood sugar management](https://diatribe.org/diet-and-nutrition/best-proteins-blood-sugar-management) and the broader sports-nutrition literature note — collagen is not a complete protein. It's missing tryptophan and low in leucine. It has other potential uses, but it can't replace a proper protein supplement for muscle support."
        },
        {
          "t": "h",
          "text": "Signs you may not be getting enough"
        },
        {
          "t": "p",
          "text": "Loss of muscle tone even with your weight unchanged. Slower recovery after exercise. Persistent fatigue that sleep doesn't fix. Stronger cravings for sugar or carbohydrates. Thinning hair or brittle nails. These can all be signs that protein intake is too low."
        },
        {
          "t": "p",
          "text": "Protein is also one of the most satiating macronutrients, as described in [the American Diabetes Association's guidance on protein](https://diabetesfoodhub.org/blog/lets-talk-about-protein-people-diabetes). If you find it hard to feel satisfied after meals, or you're reaching for sweet things an hour later, increasing protein is often more effective than trying to manage those cravings through willpower alone."
        },
        {
          "t": "h",
          "text": "Trusted resources worth knowing about"
        },
        {
          "t": "p",
          "text": "If you want to go deeper, these are the sources I'd recommend:"
        },
        {
          "t": "links",
          "title": "Evidence-based places to start",
          "items": [
            {
              "name": "British Nutrition Foundation — Nutrition and Menopause",
              "url": "https://www.nutrition.org.uk/nutrition-for/women/menopause/",
              "desc": "One of the most credible UK nutrition bodies. Their menopause page covers protein alongside other key nutrients — solid official backing for UK readers."
            },
            {
              "name": "British Dietetic Association — Addressing Sarcopenia",
              "url": "https://www.bda.uk.com/resource/addressing-sarcopenia.html",
              "desc": "The UK professional body for registered dietitians, on protein's role in preventing and managing age-related muscle loss."
            },
            {
              "name": "Dr Stacy Sims — Optimal Protein Intake for Women",
              "url": "https://www.drstacysims.com/newsletters/articles/posts/optimal-protein-intake-for-women",
              "desc": "The most thorough, female-specific breakdown of protein needs across the lifespan, from an exercise physiologist focused on female physiology."
            },
            {
              "name": "Stanford Lifestyle Medicine — Protein Needs for Adults 50+",
              "url": "https://lifestylemedicine.stanford.edu/protein-needs-for-adults-50/",
              "desc": "A concise, evidence-based overview of why protein needs increase with age — useful to share with a sceptical GP."
            },
            {
              "name": "Momentous — Protein After 40: How Much Women Really Need",
              "url": "https://www.livemomentous.com/blogs/all/protein-for-women-over-40",
              "desc": "A detailed, well-referenced guide by registered dietitian Tyler Roof, with practical meal examples."
            },
            {
              "name": "Diatribe — Best Proteins for Blood Sugar Management",
              "url": "https://diatribe.org/diet-and-nutrition/best-proteins-blood-sugar-management",
              "desc": "Focused on people managing blood sugar — which protein sources and combinations work best."
            },
            {
              "name": "American Diabetes Association — Let's Talk About Protein",
              "url": "https://diabetesfoodhub.org/blog/lets-talk-about-protein-people-diabetes",
              "desc": "How protein affects blood glucose for people with diabetes, including what to watch for."
            }
          ]
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Women in the highest quintile of protein intake lost 40% less lean muscle mass over three years.",
              "detail": "A 2025 study in Frontiers in Nutrition examined protein intake and muscle composition in older women with sarcopenia. Those eating the most protein retained significantly more lean mass than those eating the least — one of the clearest recent demonstrations of how much protein intake matters for muscle preservation.",
              "cite": "Frontiers in Nutrition · Prospective study, 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12104658/"
            },
            {
              "claim": "Older women can build up to 40% less muscle from the same protein dose — a phenomenon called anabolic resistance.",
              "detail": "A 2018 review in Current Opinion in Clinical Nutrition and Metabolic Care established this finding. It explains why eating the same amount of protein as you did in your 30s is no longer enough: your muscles have become less responsive, so a higher dose is needed to achieve the same protective effect — and the difference compounds with age.",
              "cite": "Current Opinion in Clinical Nutrition and Metabolic Care · Review, 2018",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4997405/"
            },
            {
              "claim": "Increased protein intake, combined with resistance exercise, is among the most effective ways to prevent sarcopenia in menopausal women.",
              "detail": "A systematic review and meta-analysis of randomised controlled trials in BMC Women's Health (2023) examined non-pharmacological approaches to preventing sarcopenia in menopausal women. Dietary protein interventions were consistently among the most effective — particularly when paired with strength training.",
              "cite": "BMC Women's Health · Systematic review and meta-analysis, 2023",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/"
            },
            {
              "claim": "Adequate protein is associated with significantly better physical performance in post-menopausal women aged 60–90.",
              "detail": "An analysis of post-menopausal women found that those with adequate dietary protein intake had substantially better grip strength, walking speed and overall physical performance scores. The association held after adjusting for age, BMI and physical activity levels.",
              "cite": "PMC · Observational analysis",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4433492/"
            },
            {
              "claim": "Consistent daily protein across meals drives muscle anabolism more than precise timing around workouts.",
              "detail": "A randomised controlled trial in postmenopausal women on a weight-loss programme found that while some trends around post-exercise timing appeared, total daily protein distributed across meals was the most important variable for muscle protein synthesis rates.",
              "cite": "PMC · Randomised controlled trial",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4042233/"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, women's health writer living with type 1 diabetes",
          "text": "Lena Filatova has lived with type 1 diabetes for 23 years. She writes about women's health, perimenopause, nutrition and diabetes management at lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Can I get enough protein on a plant-based diet?",
          "a": "Yes — but it takes more intention. Plant proteins tend to be lower in leucine and some are incomplete. Eating a wide variety of legumes, grains, nuts and seeds across the day covers the gaps, and a pea and rice protein blend is the most complete plant-based supplement option."
        },
        {
          "q": "Does eating more protein make women bulky?",
          "a": "No. Building visible muscle requires very specific resistance training and usually a calorie surplus. Adequate protein helps you preserve the muscle you already have — which generally results in a leaner, more defined look over time, not bulk."
        },
        {
          "q": "Is a higher protein intake safe?",
          "a": "For healthy adults with normal kidney function, intakes up to 2–2.5g/kg/day are well tolerated and not associated with kidney damage. The concern applies specifically to people with pre-existing kidney disease — if that's you, speak with your doctor before significantly increasing your intake. Drinking plenty of water alongside a higher-protein diet is always sensible."
        },
        {
          "q": "Does protein affect blood sugar?",
          "a": "Protein has a much smaller effect on blood glucose than carbohydrates, and it helps slow digestion — which can actually improve blood sugar stability. For people with type 1 diabetes, large amounts of protein without fat can cause a gradual, delayed glucose rise, so monitoring your individual response is sensible."
        },
        {
          "q": "What should I look for in a protein powder?",
          "a": "Third-party testing (NSF Certified for Sport or Informed Sport are reliable markers), minimal added sugar (under 3g per serving), and whey isolate or a pea/rice blend as the primary ingredient. Avoid anything labelled primarily as collagen protein — it isn't a complete protein and won't support muscle synthesis the way a proper protein supplement does."
        }
      ]
    },
    "ua": {
      "cat": "Харчування",
      "title": "Білок для жінок після 40: скільки насправді потрібно?",
      "excerpt": "Чому офіційна норма 0,8 г/кг замала після 40 — і які орієнтири білка справді захищають м'язи, енергію та цукор у крові.",
      "meta": "4 липня 2026 · 8 хв читання",
      "lead": "Отримати достатньо білка після 40 — одне з найчастіших питань, з якими стикаються жінки, і одна з тих речей, що найбільше вплинули на мою енергію та стабільність цукру в крові. Ось що каже наука і що працює на практиці.",
      "seoTitle": "Білок для жінок після 40: скільки насправді потрібно?",
      "metaDesc": "Скільки білка потрібно жінкам після 40? Науково обґрунтовані орієнтири, чому потреба зростає в перименопаузі та як їх досягти, якщо ви контролюєте цукор.",
      "blocks": [
        {
          "t": "p",
          "text": "Будь ласка, завжди консультуйтеся зі своїм лікарем, перш ніж змінювати раціон."
        },
        {
          "t": "p",
          "text": "Кілька років тому я почала помічати, що втрачаю м'язи і швидше втомлююся, хоча тренувалася так само регулярно. Мій цукор у крові вже став важче контролювати через гормональні зміни — [про цю боротьбу я вже писала](/ua/blog/perimenopause-diabetes-blood-sugar/) — але я також почала замислюватися, чи не їм я просто замало білка."
        },
        {
          "t": "p",
          "text": "Чесна відповідь: так, замало. Я дивилася на свою тарілку й думала, що вона збалансована, але коли справді порахувала, виходило щонайбільше 60–70 г у вдалий день. Для жінки мого розміру, за сорок, цього недостатньо."
        },
        {
          "t": "p",
          "text": "Те, що допомогло мені це зрозуміти, — не чергова загальна стаття про «їжте більше курки». Це усвідомлення, що моє тіло на цьому етапі життя інакше поводиться з білком — і потребує його значно більше, ніж радять офіційні норми."
        },
        {
          "t": "p",
          "text": "Як зайнята мама, я не завжди можу покласти цільне джерело білка в кожен прийом їжі — особливо на сніданок. Раніше я регулярно їздила у робочі відрядження, а вибір їжі в дорозі буває справді обмеженим. Я навчилася тримати в сумці якісний протеїновий порошок, змішаний із насінням льону, і додаю ложку у воду чи смузі, коли треба щось швидке, що не підніме цукор."
        },
        {
          "t": "p",
          "text": "Одне, що я зрозуміла на власному досвіді: я намагаюся не змішувати протеїновий порошок зі звичайним коров'ячим молоком — воно піднімає мій цукор швидше, ніж хотілося б. Замість нього використовую несолодке мигдалеве, кокосове чи соєве молоко, і різниця помітна. Якщо ви контролюєте цукор разом із харчуванням, така деталь має значення."
        },
        {
          "t": "h",
          "text": "Чому потреба в білку змінюється після 40"
        },
        {
          "t": "p",
          "text": "Щось змінюється біологічно у ваші сорок — особливо під час перименопаузи — і це впливає на те, як м'язи реагують на з'їдений білок."
        },
        {
          "t": "p",
          "text": "Зі зниженням естрогену тіло гірше використовує харчовий білок для побудови та відновлення м'язів. [Огляд 2018 року в Current Opinion in Clinical Nutrition and Metabolic Care](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4997405/) назвав це анаболічною резистентністю: приглушеною реакцією синтезу м'язового білка, яку люди старшого віку мають після вживання білка. Жінки старшого віку можуть мати до 40% меншого приросту синтезу м'язового білка, ніж молодші, навіть з'їдаючи однакову кількість білка. Я відчула це напряму — мої м'язи стали менш чутливими, хоча я їла й тренувалася так само."
        },
        {
          "t": "p",
          "text": "Поряд із цим вікова втрата м'язів — саркопенія — прискорюється приблизно з 40 років і ще більше посилюється в менопаузі. [Систематичний огляд 2023 року в BMC Women's Health](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/) підтвердив, що жінки в менопаузі мають значно підвищений ризик саркопенії, і що збільшення білка в раціоні разом із силовими вправами — один із найефективніших способів її запобігти. М'язи — це не лише про силу чи естетику: вони напряму впливають на те, як тіло керує глюкозою, на метаболізм і щільність кісток."
        },
        {
          "t": "p",
          "text": "Хороша новина в тому, що споживання білка — один із найпотужніших важелів, щоб уповільнити цей процес. І діяти можна вже сьогодні."
        },
        {
          "t": "h",
          "text": "То скільки білка насправді потрібно жінкам після 40?"
        },
        {
          "t": "p",
          "text": "Офіційна норма у Великій Британії та США — 0,8 г білка на кг ваги на добу — була встановлена, щоб запобігти дефіциту в загальної дорослої популяції. Її ніколи не задумували як орієнтир для жінок у перименопаузі, для збереження м'язів чи контролю цукру."
        },
        {
          "t": "p",
          "text": "[Дослідження 2025 року в Frontiers in Nutrition](https://pmc.ncbi.nlm.nih.gov/articles/PMC12104658/) виявило, що жінки з найвищого квінтиля споживання білка втратили приблизно на 40% менше м'язової маси за три роки, ніж ті, хто їв найменше. З огляду на ширшу доказову базу більшість дослідників харчування нині ставлять практичний орієнтир для жінок після 40 на рівні 1,2–1,6 г на кг ваги на добу як базовий, зростаючи до 1,6–2,0 г/кг, якщо ви регулярно тренуєтеся силовими."
        },
        {
          "t": "p",
          "text": "[Д-р Стейсі Сімс](https://www.drstacysims.com/newsletters/articles/posts/optimal-protein-intake-for-women) йде далі, рекомендуючи 2,0–2,3 г/кг для жінок у перименопаузі та менопаузі, саме щоб протидіяти анаболічній резистентності:"
        },
        {
          "t": "quote",
          "text": "З віком наше тіло стає більш стійким до м'язобудівного ефекту білка й вправ, тож потрібні вищі дози обох."
        },
        {
          "t": "p",
          "text": "На практиці це виглядає так:"
        },
        {
          "t": "table",
          "head": [
            "Ваша вага",
            "Мінімум (1,2 г/кг)",
            "Активним (1,6 г/кг)",
            "Перименопауза (2,0 г/кг)"
          ],
          "rows": [
            [
              "55 кг",
              "66 г/день",
              "88 г/день",
              "110 г/день"
            ],
            [
              "65 кг",
              "78 г/день",
              "104 г/день",
              "130 г/день"
            ],
            [
              "75 кг",
              "90 г/день",
              "120 г/день",
              "150 г/день"
            ],
            [
              "85 кг",
              "102 г/день",
              "136 г/день",
              "170 г/день"
            ]
          ]
        },
        {
          "t": "p",
          "text": "Якщо ці цифри здаються лякаючими порівняно з тим, що ви їсте зараз, почніть із мінімуму для своєї ваги й нарощуйте поступово. Навіть помірне збільшення зазвичай дає помітну різницю в енергії, регуляції апетиту та композиції тіла за кілька тижнів. І спершу порадьтеся з лікарем — різке збільшення білка підходить не всім."
        },
        {
          "t": "h",
          "text": "Як насправді їсти більше білка"
        },
        {
          "t": "p",
          "text": "Найкорисніша зміна — планувати страви навколо білка, а вже потім додавати решту. Більшість із нас звикли думати про страву, де білок — лише один складник. Змінити цю звичку — справді помічно."
        },
        {
          "t": "p",
          "text": "Розподіл важливий не менше за загальну кількість. [Дослідження за участю жінок у постменопаузі](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4042233/) показало, що саме рівномірне споживання білка протягом дня було головним драйвером анаболізму м'язового білка — важливішим за точний час навколо тренувань. Дослідження стабільно показують, що тіло найкраще стимулює синтез м'язового білка, коли кожен прийом їжі дає приблизно 25–40 г білка. З'їсти 120 г за вечерею значно менш ефективно, ніж розподілити на три прийоми. Додати білок на сніданок, де жінки зазвичай їдять його найменше, — одна з найпрактичніших змін."
        },
        {
          "t": "p",
          "text": "Кілька простих замін, що допомагають: грецький йогурт замість звичайного (майже вдвічі більше білка), яйця чи слабосолений лосось на сніданок замість пластівців, кисломолочний сир (cottage cheese) як перекус, сочевиця чи едамаме в салати, консервована риба у рапі на обід. Жодне з цього не потребує готування з нуля чи заготовок на вихідних."
        },
        {
          "t": "p",
          "text": "День, що дає приблизно 130 г, може виглядати так:"
        },
        {
          "t": "table",
          "head": [
            "Прийом їжі",
            "Приклад",
            "Білок"
          ],
          "rows": [
            [
              "Сніданок",
              "2 яйця-бовтанки + 150 г грецького йогурту з ягодами + протеїновий гарячий шоколад",
              "~30 г"
            ],
            [
              "Обід",
              "Салат з куркою — 150 г курячої грудки, мікс салату, авокадо, оливкова олія",
              "~45 г"
            ],
            [
              "Перекус",
              "Протеїновий шейк (ізолят сироватки) на несолодкому мигдалевому молоці + чіа",
              "~25 г"
            ],
            [
              "Вечеря",
              "Запечене філе лосося (140 г) з печеними овочами та невеликою порцією кіноа",
              "~35 г"
            ],
            [
              "Разом",
              "",
              "~135 г"
            ]
          ]
        },
        {
          "t": "h",
          "text": "Кілька слів про протеїнові шейки"
        },
        {
          "t": "p",
          "text": "Цільна їжа — завжди на першому місці. Але протеїновий порошок — це практичний інструмент, а не скорочення шляху. Коли відрядження, брак часу чи обмежений вибір їжі роблять досягнення норми білка лише з їжі нереалістичним, якісний шейк — справді корисний місток."
        },
        {
          "t": "p",
          "text": "Якщо ви контролюєте цукор, тип шейка і те, з чим ви його змішуєте, має значення. Дослідження лейцину — амінокислоти з розгалуженим ланцюгом, що найбільше запускає синтез м'язового білка, — показують, що саме він є ключовою змінною в тому, наскільки ефективно джерело білка підтримує м'язи."
        },
        {
          "t": "p",
          "text": "[Гайд від Healthline](https://www.healthline.com/nutrition/10-high-leucine-foods) називає ізолят сироватки одним із найбагатших джерел лейцину — приблизно 2,7 г на порцію. Він також низький за лактозою й вуглеводами, що важливо, якщо ви стежите за глюкозною реакцією. Для безмолочної альтернативи суміш горохового й рисового білка дає найповніший амінокислотний профіль серед рослинних варіантів."
        },
        {
          "t": "p",
          "text": "З власного досвіду: змішування протеїнового порошку зі звичайним коров'ячим молоком дає швидший підйом цукру, ніж із водою чи несолодким рослинним молоком (крім вівсяного та рисового, звісно). Лактоза й вуглеводи додаються. Якщо ваша глюкоза після шейка вища за очікувану, це проста змінна, яку варто перевірити. Додавання ложки горіхової пасти, меленого льону чи чіа також уповільнює всмоктування й довше тримає ситість."
        },
        {
          "t": "p",
          "text": "На що звернути увагу: колаген часто продають поряд із протеїновими порошками, але — як зазначають [гайд Diatribe про білок для контролю цукру](https://diatribe.org/diet-and-nutrition/best-proteins-blood-sugar-management) і ширша спортивно-нутриціологічна література — колаген не є повноцінним білком. Йому бракує триптофану, і він низький за лейцином. Він має інше застосування, але не може замінити повноцінну білкову добавку для підтримки м'язів."
        },
        {
          "t": "h",
          "text": "Ознаки, що вам може бракувати білка"
        },
        {
          "t": "p",
          "text": "Втрата м'язового тонусу навіть за незмінної ваги. Повільніше відновлення після навантажень. Стійка втома, яку не знімає сон. Сильніша тяга до солодкого чи вуглеводів. Тонше волосся або ламкі нігті. Усе це може бути ознаками, що білка замало."
        },
        {
          "t": "p",
          "text": "Білок також один із найситніших макронутрієнтів, як описано в [настанові Американської діабетичної асоціації про білок](https://diabetesfoodhub.org/blog/lets-talk-about-protein-people-diabetes). Якщо вам важко почуватися ситою після їжі або ви тягнетеся до солодкого за годину, збільшення білка часто ефективніше, ніж боротьба з тягою лише силою волі."
        },
        {
          "t": "h",
          "text": "Надійні ресурси, які варто знати"
        },
        {
          "t": "p",
          "text": "Якщо хочете заглибитися, ось джерела, які я б порадила:"
        },
        {
          "t": "links",
          "title": "Науково обґрунтовані джерела, з яких варто почати",
          "items": [
            {
              "name": "British Nutrition Foundation — харчування та менопауза",
              "url": "https://www.nutrition.org.uk/nutrition-for/women/menopause/",
              "desc": "Один із найавторитетніших нутриціологічних органів Великої Британії. Сторінка про менопаузу охоплює білок поряд з іншими ключовими нутрієнтами — надійна офіційна опора для читачок із Великої Британії."
            },
            {
              "name": "British Dietetic Association — про саркопенію",
              "url": "https://www.bda.uk.com/resource/addressing-sarcopenia.html",
              "desc": "Британський професійний орган дієтологів — про роль білка в запобіганні та керуванні віковою втратою м'язів."
            },
            {
              "name": "Д-р Стейсі Сімс — Optimal Protein Intake for Women",
              "url": "https://www.drstacysims.com/newsletters/articles/posts/optimal-protein-intake-for-women",
              "desc": "Найдетальніший, специфічний для жінок розбір потреби в білку впродовж життя від фізіологині, яка присвятила кар'єру жіночій фізіології."
            },
            {
              "name": "Stanford Lifestyle Medicine — Protein Needs for Adults 50+",
              "url": "https://lifestylemedicine.stanford.edu/protein-needs-for-adults-50/",
              "desc": "Стислий, науково обґрунтований огляд, чому потреба в білку зростає з віком — зручно показати скептичному лікарю."
            },
            {
              "name": "Momentous — Protein After 40: How Much Women Really Need",
              "url": "https://www.livemomentous.com/blogs/all/protein-for-women-over-40",
              "desc": "Детальний гайд із посиланнями від дієтологині Тайлер Руф, із практичними прикладами страв."
            },
            {
              "name": "Diatribe — Best Proteins for Blood Sugar Management",
              "url": "https://diatribe.org/diet-and-nutrition/best-proteins-blood-sugar-management",
              "desc": "Орієнтований на тих, хто контролює цукор — які джерела білка й поєднання працюють найкраще."
            },
            {
              "name": "American Diabetes Association — Let's Talk About Protein",
              "url": "https://diabetesfoodhub.org/blog/lets-talk-about-protein-people-diabetes",
              "desc": "Як білок впливає на глюкозу в людей з діабетом і на що звертати увагу."
            }
          ]
        },
        {
          "t": "h",
          "text": "Що каже дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Жінки з найвищого квінтиля споживання білка втратили на 40% менше м'язової маси за три роки.",
              "detail": "Дослідження 2025 року в Frontiers in Nutrition вивчало споживання білка й композицію м'язів у жінок старшого віку із саркопенією. Ті, хто їв найбільше білка, зберегли значно більше м'язової маси, ніж ті, хто їв найменше, — одна з найяскравіших нещодавніх демонстрацій того, наскільки білок важливий для збереження м'язів.",
              "cite": "Frontiers in Nutrition · Проспективне дослідження, 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12104658/"
            },
            {
              "claim": "Жінки старшого віку можуть будувати до 40% менше м'язів із тієї ж дози білка — це явище називають анаболічною резистентністю.",
              "detail": "Огляд 2018 року в Current Opinion in Clinical Nutrition and Metabolic Care обґрунтував цей висновок. Він пояснює, чому їсти стільки ж білка, скільки у свої тридцять, уже недостатньо: м'язи стали менш чутливими, тож потрібна вища доза для того самого захисного ефекту — і різниця зростає з віком.",
              "cite": "Current Opinion in Clinical Nutrition and Metabolic Care · Огляд, 2018",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4997405/"
            },
            {
              "claim": "Збільшення білка в раціоні разом із силовими вправами — один із найефективніших способів запобігти саркопенії в жінок у менопаузі.",
              "detail": "Систематичний огляд і метааналіз рандомізованих контрольованих досліджень у BMC Women's Health (2023) розглянув нефармакологічні підходи до запобігання саркопенії в жінок у менопаузі. Білкові втручання стабільно були серед найефективніших — особливо в поєднанні із силовими тренуваннями.",
              "cite": "BMC Women's Health · Систематичний огляд і метааналіз, 2023",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/"
            },
            {
              "claim": "Достатній білок пов'язаний зі значно кращою фізичною працездатністю в жінок у постменопаузі 60–90 років.",
              "detail": "Аналіз жінок у постменопаузі показав, що ті, хто споживав достатньо білка, мали суттєво кращу силу хвату, швидкість ходьби та загальні показники фізичної працездатності. Зв'язок зберігався після поправки на вік, ІМТ і рівень фізичної активності.",
              "cite": "PMC · Обсерваційний аналіз",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4433492/"
            },
            {
              "claim": "Стабільне щоденне споживання білка протягом дня керує анаболізмом м'язів більше, ніж точний час навколо тренувань.",
              "detail": "Рандомізоване контрольоване дослідження жінок у постменопаузі на програмі схуднення показало, що хоча деякі тенденції щодо часу після вправ і спостерігалися, саме загальний добовий білок, розподілений по прийомах їжі, був найважливішою змінною для швидкості синтезу м'язового білка.",
              "cite": "PMC · Рандомізоване контрольоване дослідження",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4042233/"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, авторка про жіноче здоров'я, що живе з діабетом 1 типу",
          "text": "Lena Filatova живе з діабетом 1 типу вже 23 роки. Вона пише про жіноче здоров'я, перименопаузу, харчування та контроль діабету на lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Чи можна отримати достатньо білка на рослинній дієті?",
          "a": "Так — але це потребує більше уваги. Рослинні білки зазвичай нижчі за лейцином, а деякі неповноцінні. Різноманіття бобових, злаків, горіхів і насіння протягом дня закриває прогалини, а суміш горохового й рисового білка — найповніший рослинний варіант добавки."
        },
        {
          "q": "Чи роблять жінок «масивними» більше білка?",
          "a": "Ні. Побудова помітних м'язів потребує дуже специфічних силових тренувань і зазвичай надлишку калорій. Достатній білок допомагає зберегти вже наявні м'язи — що з часом дає радше стрункіший, підтягнутіший вигляд, а не масивність."
        },
        {
          "q": "Чи безпечно споживати більше білка?",
          "a": "Для здорових дорослих із нормальною функцією нирок споживання до 2–2,5 г/кг на добу добре переноситься й не пов'язане з ушкодженням нирок. Застереження стосується саме людей із наявними захворюваннями нирок — якщо це ваш випадок, порадьтеся з лікарем, перш ніж суттєво збільшувати білок. Пити достатньо води разом із високобілковим раціоном завжди розумно."
        },
        {
          "q": "Чи впливає білок на цукор у крові?",
          "a": "Білок значно менше впливає на глюкозу, ніж вуглеводи, і допомагає сповільнити травлення — що насправді може покращити стабільність цукру. У людей із діабетом 1 типу велика кількість білка без жиру може спричинити поступовий відтермінований підйом глюкози, тож відстежувати власну реакцію розумно."
        },
        {
          "q": "На що звертати увагу в протеїновому порошку?",
          "a": "Тестування третьою стороною (NSF Certified for Sport або Informed Sport — надійні маркери), мінімум доданого цукру (менше 3 г на порцію) та ізолят сироватки або суміш гороху/рису як основний інгредієнт. Уникайте всього, що позначене насамперед як колагеновий білок — це не повноцінний білок і він не підтримає синтез м'язів так, як належна білкова добавка."
        }
      ]
    }
  },
  {
    "slug": "type-2-diabetes-research",
    "date": "2026-06-26",
    "image": "/images/type-2-diabetes-research-meal-order.jpg",
    "cats": [
      "diabetes"
    ],
    "en": {
      "cat": "Diabetes",
      "title": "What new research says about type 2 diabetes",
      "seoTitle": "What New Research Says About Type 2 Diabetes",
      "metaDesc": "The latest on type 2 diabetes remission, meal order, time-restricted eating and sleep — and which evidence-based changes are actually worth trying.",
      "excerpt": "Recent findings on remission, meal order, time-restricted eating and sleep — and what's actually worth trying.",
      "meta": "26 June 2026 · 8 min read",
      "lead": "The science of type 2 diabetes is moving faster than the headlines suggest — and some of the most important findings are ones you're unlikely to hear in a ten-minute GP appointment. Here's what recent research actually says, and what's genuinely worth trying.",
      "blocks": [
        {
          "t": "p",
          "text": "The story told about type 2 diabetes for the past few decades has been fairly consistent: it develops gradually, usually from lifestyle factors, it is progressive, and once you have it, you manage it forever. The conversation tends to centre on what you did to get there, and what medication you will need over time."
        },
        {
          "t": "p",
          "text": "That story is being substantially rewritten."
        },
        {
          "t": "p",
          "text": "Researchers are now questioning whether type 2 diabetes is even a single condition. Remission data from rigorous clinical trials is challenging the idea that it is permanent. And a growing body of evidence is pointing to tools — some surprisingly simple — that make a meaningful difference to blood glucose, independently of medication."
        },
        {
          "t": "p",
          "text": "None of this is a miracle narrative. But it is worth knowing."
        },
        {
          "t": "h",
          "text": "Remission is real — and it can last"
        },
        {
          "t": "p",
          "text": "[The DiRECT trial](https://www.thelancet.com/journals/landia/article/PIIS2213-8587%2823%2900385-6/fulltext), which ran in GP practices across the UK and Scotland, set out to test whether type 2 diabetes could go into remission through a structured dietary intervention. The results, now at five years, are striking."
        },
        {
          "t": "p",
          "text": "Almost half of participants — 46% — achieved remission within the first year. By year two, that figure was 36%. And critically, 26% of those who had reached remission at two years were still in remission at five years, with no diabetes medication."
        },
        {
          "t": "p",
          "text": "There was also a halving of serious medical events requiring hospitalisation in the diet intervention group compared to those receiving standard care."
        },
        {
          "t": "p",
          "text": "The intervention itself was demanding: an 830-calorie formula diet for twelve weeks to produce significant weight loss, followed by supported reintroduction of ordinary food and ongoing help with weight maintenance. For those who lost more than 10 kg, three-quarters achieved remission at both one and two years."
        },
        {
          "t": "p",
          "text": "This does not mean remission is achievable or appropriate for everyone. But it firmly dismantles the assumption that type 2 diabetes is irreversible — and that assumption has, for a long time, quietly removed hope from the conversation."
        },
        {
          "t": "h",
          "text": "It may not be one disease"
        },
        {
          "t": "p",
          "text": "One of the more significant shifts happening in diabetes research right now is the move away from treating type 2 diabetes as a single condition."
        },
        {
          "t": "p",
          "text": "[A 2025 paper in The Lancet Diabetes & Endocrinology](https://www.thelancet.com/journals/landia/article/PIIS2213-8587%2825%2900256-6/abstract) put it plainly: for decades, type 2 diabetes has been managed as a monolithic condition treated via uniform, stepwise algorithms — an approach that increasingly fails to account for its biological heterogeneity."
        },
        {
          "t": "p",
          "text": "Four broad subtypes have now been identified: mild age-related diabetes (more common in older adults, with relatively low complication risk); mild obesity-related diabetes (linked to excess weight, with a generally milder metabolic profile); severe insulin-resistant diabetes (a higher risk of kidney disease); and severe insulin-deficient diabetes (closer in some ways to type 1, with a higher risk of eye disease)."
        },
        {
          "t": "p",
          "text": "Why does this matter practically? Because it means what works well for one person with a type 2 diagnosis may do very little for another — and it makes the habit of attributing the condition to personal choices even less defensible than it already was."
        },
        {
          "t": "p",
          "text": "The direction of travel in research is towards precision medicine: matching treatment and lifestyle strategies to individual biology, rather than everyone following the same protocol."
        },
        {
          "t": "h",
          "text": "When you eat may matter as much as what you eat"
        },
        {
          "t": "p",
          "text": "Two findings here are worth knowing about."
        },
        {
          "t": "p",
          "text": "Meal order. Research from Weill Cornell Medical College and others has consistently found that eating vegetables and protein before carbohydrates significantly reduces the blood sugar spike after a meal. In people with type 2 diabetes, starting with vegetables and protein before carbohydrates reduced post-meal blood sugar peaks by around 54% compared with eating carbohydrates first. One researcher described the magnitude of effect as comparable to what you might expect from a blood glucose medication."
        },
        {
          "t": "p",
          "text": "[A longer-term retrospective study following patients for five years](https://pmc.ncbi.nlm.nih.gov/articles/PMC9322906/) found that those using a food-order approach — vegetables and protein first, carbohydrates last — saw their HbA1c improve from 8.5% to 7.6%, while the control group saw no meaningful change."
        },
        {
          "t": "p",
          "text": "This costs nothing, requires no prescription, and can be applied at any meal."
        },
        {
          "t": "p",
          "text": "Time-restricted eating. [A 2025 meta-analysis of eight randomised controlled trials](https://www.mdpi.com/1422-0067/26/15/7310) found that time-restricted eating — eating within a defined window each day, typically eight to ten hours — significantly reduced fasting glucose and HbA1c, and increased time in range for blood glucose. The improvements were modest but consistent across studies. A separate 2024 randomised controlled trial found HbA1c improved comparably in participants following time-restricted eating and those receiving individualised dietetic guidance."
        },
        {
          "t": "p",
          "text": "Neither approach is a replacement for medication, and anyone adjusting their eating pattern significantly should speak with their healthcare team first. But both have meaningful evidence behind them and are worth discussing."
        },
        {
          "t": "h",
          "text": "Sleep and blood sugar — especially for women"
        },
        {
          "t": "p",
          "text": "This is an area that receives far less attention than it deserves."
        },
        {
          "t": "p",
          "text": "[Research from the National Heart, Lung, and Blood Institute](https://www.nhlbi.nih.gov/news/2023/chronic-sleep-deficiency-increases-insulin-resistance-women-especially-postmenopausal) found that chronic insufficient sleep significantly increases insulin resistance in otherwise healthy women — with more pronounced effects in postmenopausal women. The effect was independent of body weight, meaning poor sleep acts on blood sugar through its own pathways, not simply by making people less active or more likely to eat poorly."
        },
        {
          "t": "p",
          "text": "Insulin resistance is central to type 2 diabetes risk. And yet sleep quality is rarely addressed in a standard diabetes review."
        },
        {
          "t": "p",
          "text": "For women in their forties and fifties — where [perimenopause is already disrupting sleep](/blog/perimenopause-diabetes-blood-sugar/), and oestrogen is affecting insulin sensitivity — this compounds quickly. It is one more reason to treat sleep as a non-negotiable pillar of metabolic health, not something to sort out later — I go through the trial behind this in [what 90 minutes less sleep did to women’s insulin sensitivity](/blog/sleep-insulin-resistance-women/)."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Remission from type 2 diabetes through diet and weight loss is achievable and can persist for years.",
              "detail": "The five-year DiRECT Extension Study, involving GP practices across the UK, found that 26% of participants who had achieved remission at two years were still in remission at five years without diabetes medication. The longer participants maintained weight loss, the lower their risk of diabetes-related complications.",
              "cite": "The Lancet Diabetes & Endocrinology · Extension study, 2024",
              "url": "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(23)00385-6/fulltext"
            },
            {
              "claim": "Type 2 diabetes is not a single disease, and treatment should reflect that.",
              "detail": "A 2025 analysis argued that the field needs to move away from treating type 2 diabetes as one uniform condition, identifying at least four distinct subtypes with different risk profiles, complications and likely responses to treatment.",
              "cite": "The Lancet Diabetes & Endocrinology · Analysis, 2025",
              "url": "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(25)00256-6/abstract"
            },
            {
              "claim": "Eating vegetables and protein before carbohydrates substantially reduces post-meal blood sugar.",
              "detail": "Multiple studies, including a five-year retrospective cohort study, have found that consistently starting meals with vegetables and protein rather than carbohydrates leads to significantly lower post-meal glucose peaks and meaningful improvements in HbA1c over time.",
              "cite": "PMC / NCBI · Retrospective cohort study, 2022",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9322906/"
            },
            {
              "claim": "Time-restricted eating improves glycaemic control in type 2 diabetes.",
              "detail": "A 2025 systematic review and meta-analysis of eight randomised controlled trials found that time-restricted eating significantly reduced fasting glucose and HbA1c and increased time in range — with consistent results across study populations.",
              "cite": "International Journal of Molecular Sciences (MDPI) · Meta-analysis, 2025",
              "url": "https://www.mdpi.com/1422-0067/26/15/7310"
            },
            {
              "claim": "Chronic sleep deficiency increases insulin resistance in women, particularly after menopause.",
              "detail": "An NHLBI-funded study found that insufficient sleep independently impairs insulin sensitivity in women, with stronger effects in postmenopausal women — separate from any changes in body weight.",
              "cite": "NHLBI / NIH · Clinical study",
              "url": "https://www.nhlbi.nih.gov/news/2023/chronic-sleep-deficiency-increases-insulin-resistance-women-especially-postmenopausal"
            }
          ]
        },
        {
          "t": "links",
          "title": "UK resources worth knowing about",
          "items": [
            {
              "name": "Diabetes UK — Type 2 diabetes",
              "url": "https://www.diabetes.org.uk/about-diabetes/type-2-diabetes",
              "desc": "Comprehensive, evidence-based information on type 2 diabetes management, remission and lifestyle approaches. They also run a helpline on 0345 123 2399."
            },
            {
              "name": "NHS — Type 2 diabetes",
              "url": "https://www.nhs.uk/conditions/type-2-diabetes/",
              "desc": "Covers diagnosis, treatment and the NHS Diabetes Prevention Programme, which offers free structured support for people at high risk."
            }
          ]
        },
        {
          "t": "h",
          "text": "What to take from this"
        },
        {
          "t": "p",
          "text": "Type 2 diabetes research in 2024 and 2025 points in a consistent direction: the condition is more varied, more responsive to change, and less fixed than we were led to believe."
        },
        {
          "t": "p",
          "text": "Remission is not guaranteed — but it is possible for some people, and that possibility is grounded in rigorous trial data, not wishful thinking. The biology is more complex than a single narrative about lifestyle, and the tools available — including some very simple ones like meal order — are broader than most people realise."
        },
        {
          "t": "p",
          "text": "If you have a type 2 diagnosis, or are managing elevated blood sugar, the research increasingly supports bringing sleep, meal timing and eating sequence into the conversation alongside medication and diet — not as replacements, but as pieces of the same picture."
        },
        {
          "t": "p",
          "text": "Every decision about your management should be made with your healthcare team. The goal here is to make sure you walk into those appointments knowing what to ask about."
        }
      ],
      "faq": [
        {
          "q": "Can type 2 diabetes go into remission?",
          "a": "Yes, for some people. The five-year DiRECT trial found 46% of participants reached remission in the first year, and 26% of those in remission at two years were still medication-free at five years. It's most likely with substantial, sustained weight loss — especially soon after diagnosis — and support from your diabetes team, though it isn't achievable or right for everyone."
        },
        {
          "q": "Does eating order really affect blood sugar?",
          "a": "Yes. Eating vegetables and protein before carbohydrates has been shown to cut the post-meal blood sugar spike by around 54% versus eating carbs first, and one five-year study saw HbA1c fall from 8.5% to 7.6% in people using this order. It costs nothing, needs no prescription, and works at any meal."
        },
        {
          "q": "Is time-restricted eating safe for people with type 2 diabetes?",
          "a": "For many people it can help — a 2025 meta-analysis of eight trials found that eating within a set daily window (typically 8–10 hours) modestly lowered fasting glucose and HbA1c and improved time in range. It isn't a replacement for medication, and if you take glucose-lowering drugs, speak to your healthcare team before big changes to when you eat, to avoid hypos."
        },
        {
          "q": "Why does sleep affect blood sugar?",
          "a": "Chronic poor sleep raises insulin resistance — the core driver of type 2 diabetes — through its own pathways, independent of body weight. NHLBI research found the effect is stronger in women, and stronger still after menopause, which is why sleep deserves to be treated as a real pillar of blood-sugar management, not an afterthought."
        },
        {
          "q": "What does it mean that type 2 diabetes has subtypes?",
          "a": "Researchers increasingly see type 2 diabetes as several conditions rather than one. At least four subtypes have been described — mild age-related, mild obesity-related, severe insulin-resistant and severe insulin-deficient — each with different risks and likely treatment responses. In practice, what works well for one person may do little for another, and care is moving toward matching strategies to individual biology."
        }
      ]
    },
    "ua": {
      "cat": "Діабет",
      "title": "Що каже нове дослідження про діабет 2 типу",
      "seoTitle": "Що нові дослідження кажуть про діабет 2 типу",
      "metaDesc": "Найновіше про ремісію діабету 2 типу, порядок страв, обмежене в часі харчування та сон — і які зміни з доказовою базою справді варті спроби.",
      "excerpt": "Нові дані про ремісію, порядок їжі, обмежене в часі харчування та сон — і що справді варто спробувати.",
      "meta": "26 червня 2026 · 8 хв читання",
      "lead": "Наука про діабет 2 типу рухається швидше, ніж підказують заголовки — і деякі з найважливіших відкриттів навряд чи почуєш на десятихвилинному прийомі в лікаря. Ось що насправді каже сучасне дослідження і що справді варто спробувати.",
      "blocks": [
        {
          "t": "p",
          "text": "Історія, яку розповідали про діабет 2 типу останні кілька десятиліть, була досить сталою: він розвивається поступово, зазвичай через спосіб життя, він прогресує, і щойно він у вас з'явився — ви керуєте ним усе життя. Розмова зазвичай зводиться до того, що ви зробили, щоб до цього дійти, і які ліки вам знадобляться з часом."
        },
        {
          "t": "p",
          "text": "Цю історію суттєво переписують."
        },
        {
          "t": "p",
          "text": "Дослідники нині ставлять під сумнів, чи діабет 2 типу взагалі є єдиним захворюванням. Дані про ремісію з ретельних клінічних досліджень спростовують уявлення, що він незворотний. А дедалі більше доказів вказують на інструменти — деякі напрочуд прості — які суттєво впливають на рівень глюкози незалежно від ліків."
        },
        {
          "t": "p",
          "text": "Це не історія про диво. Але це варто знати."
        },
        {
          "t": "h",
          "text": "Ремісія реальна — і вона може тривати"
        },
        {
          "t": "p",
          "text": "[Дослідження DiRECT](https://www.thelancet.com/journals/landia/article/PIIS2213-8587%2823%2900385-6/fulltext), яке проводилося в сімейних практиках по всій Великій Британії та Шотландії, мало на меті перевірити, чи може діабет 2 типу увійти в ремісію завдяки структурованому дієтичному втручанню. Результати, тепер уже за п'ять років, вражають."
        },
        {
          "t": "p",
          "text": "Майже половина учасників — 46% — досягли ремісії протягом першого року. До другого року ця цифра становила 36%. І що критично важливо, 26% тих, хто досяг ремісії на другому році, усе ще були в ремісії через п'ять років без жодних ліків від діабету."
        },
        {
          "t": "p",
          "text": "Також удвічі зменшилася кількість серйозних медичних подій, що потребували госпіталізації, у групі дієтичного втручання порівняно з тими, хто отримував стандартну допомогу."
        },
        {
          "t": "p",
          "text": "Саме втручання було непростим: формульна дієта на 830 калорій протягом дванадцяти тижнів для суттєвого зниження ваги, після чого — поступове повернення до звичайної їжі під супроводом і подальша допомога в утриманні ваги. Серед тих, хто втратив понад 10 кг, три чверті досягли ремісії і на першому, і на другому році."
        },
        {
          "t": "p",
          "text": "Це не означає, що ремісія досяжна чи доречна для кожного. Але це остаточно руйнує припущення, що діабет 2 типу незворотний — а це припущення довгий час тихо забирало надію з розмови."
        },
        {
          "t": "h",
          "text": "Можливо, це не одна хвороба"
        },
        {
          "t": "p",
          "text": "Один із найпомітніших зрушень у дослідженнях діабету саме зараз — це відхід від ставлення до діабету 2 типу як до єдиного захворювання."
        },
        {
          "t": "p",
          "text": "[Стаття 2025 року в The Lancet Diabetes & Endocrinology](https://www.thelancet.com/journals/landia/article/PIIS2213-8587%2825%2900256-6/abstract) сформулювала це прямо: десятиліттями діабет 2 типу лікували як монолітне захворювання за єдиними покроковими алгоритмами — підхід, який дедалі гірше враховує його біологічну неоднорідність."
        },
        {
          "t": "p",
          "text": "Наразі виділено чотири широкі підтипи: м'який віковий діабет (частіший у старших людей, з відносно низьким ризиком ускладнень); м'який діабет, пов'язаний з ожирінням (пов'язаний із надмірною вагою, з загалом м'якшим метаболічним профілем); тяжкий інсулінорезистентний діабет (вищий ризик захворювання нирок); і тяжкий інсулінодефіцитний діабет (у дечому ближчий до 1 типу, з вищим ризиком захворювань очей)."
        },
        {
          "t": "p",
          "text": "Чому це важливо на практиці? Тому що це означає: те, що добре працює для однієї людини з діагнозом 2 типу, може майже нічого не дати іншій — і це робить звичку пояснювати хворобу особистим вибором ще менш виправданою, ніж вона вже була."
        },
        {
          "t": "p",
          "text": "Напрям розвитку досліджень — до персоналізованої медицини: узгодження лікування та способу життя з індивідуальною біологією, а не єдиний протокол для всіх."
        },
        {
          "t": "h",
          "text": "Коли ви їсте, може важити не менше, ніж що ви їсте"
        },
        {
          "t": "p",
          "text": "Тут варто знати про дві знахідки."
        },
        {
          "t": "p",
          "text": "Порядок їжі. Дослідження з Weill Cornell Medical College та інших послідовно виявляли, що вживання овочів і білка перед вуглеводами суттєво зменшує стрибок цукру після їжі. У людей із діабетом 2 типу початок їжі з овочів і білка перед вуглеводами знижував пікові значення цукру після їжі приблизно на 54% порівняно з вживанням вуглеводів першими. Один із дослідників описав величину ефекту як зіставну з тим, чого можна очікувати від ліків для зниження глюкози."
        },
        {
          "t": "p",
          "text": "[Довше ретроспективне дослідження, що спостерігало за пацієнтами протягом п'яти років](https://pmc.ncbi.nlm.nih.gov/articles/PMC9322906/), виявило: у тих, хто застосовував підхід із порядком їжі — спершу овочі та білок, вуглеводи наостанок — HbA1c покращився з 8,5% до 7,6%, тоді як у контрольній групі суттєвих змін не було."
        },
        {
          "t": "p",
          "text": "Це нічого не коштує, не потребує рецепта і працює за будь-якого прийому їжі."
        },
        {
          "t": "p",
          "text": "Обмежене в часі харчування. [Метааналіз 2025 року з восьми рандомізованих контрольованих досліджень](https://www.mdpi.com/1422-0067/26/15/7310) виявив, що обмежене в часі харчування — коли їдять у визначеному вікні щодня, зазвичай від восьми до десяти годин — суттєво знижувало глюкозу натще та HbA1c і збільшувало час у цільовому діапазоні глюкози. Покращення були помірними, але послідовними в усіх дослідженнях. Окреме рандомізоване контрольоване дослідження 2024 року виявило, що HbA1c покращувався зіставно в учасників, які дотримувалися обмеженого в часі харчування, і тих, хто отримував індивідуальні рекомендації дієтолога."
        },
        {
          "t": "p",
          "text": "Жоден із підходів не замінює ліки, і кожен, хто суттєво змінює режим харчування, спершу має порадитися зі своєю медичною командою. Але обидва мають вагомі докази й варті обговорення."
        },
        {
          "t": "h",
          "text": "Сон і цукор у крові — особливо для жінок"
        },
        {
          "t": "p",
          "text": "Це сфера, якій приділяють значно менше уваги, ніж вона заслуговує."
        },
        {
          "t": "p",
          "text": "[Дослідження Національного інституту серця, легень і крові (NHLBI)](https://www.nhlbi.nih.gov/news/2023/chronic-sleep-deficiency-increases-insulin-resistance-women-especially-postmenopausal) виявило, що хронічний брак сну суттєво підвищує інсулінорезистентність у загалом здорових жінок — з помітнішим ефектом у жінок у постменопаузі. Ефект не залежав від маси тіла, тобто поганий сон впливає на цукор власними шляхами, а не просто через меншу активність чи гірше харчування."
        },
        {
          "t": "p",
          "text": "Інсулінорезистентність є центральною для ризику діабету 2 типу. І все ж якість сну рідко розглядають на звичайному огляді з приводу діабету."
        },
        {
          "t": "p",
          "text": "Для жінок за сорок і п'ятдесят — коли [перименопауза вже порушує сон](/ua/blog/perimenopause-diabetes-blood-sugar/), а естроген впливає на чутливість до інсуліну — це швидко накопичується. Це ще одна причина ставитися до сну як до незамінної опори метаболічного здоров'я, а не чогось, що можна залагодити згодом — докладніше про саме це дослідження я пишу в тексті про те, [що зробили з чутливістю до інсуліну мінус півтори години сну](/ua/blog/sleep-insulin-resistance-women/)."
        },
        {
          "t": "h",
          "text": "Що каже дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Ремісія діабету 2 типу через дієту та зниження ваги досяжна і може тривати роками.",
              "detail": "П'ятирічне продовження дослідження DiRECT за участю сімейних практик у Великій Британії виявило, що 26% учасників, які досягли ремісії на другому році, усе ще були в ремісії через п'ять років без ліків від діабету. Що довше учасники утримували знижену вагу, то нижчим був їхній ризик ускладнень, пов'язаних із діабетом.",
              "cite": "The Lancet Diabetes & Endocrinology · Продовження дослідження, 2024",
              "url": "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(23)00385-6/fulltext"
            },
            {
              "claim": "Діабет 2 типу — не єдина хвороба, і лікування має це враховувати.",
              "detail": "Аналіз 2025 року стверджує, що галузі потрібно відійти від ставлення до діабету 2 типу як до однієї однорідної хвороби, виділяючи щонайменше чотири окремі підтипи з різними профілями ризику, ускладненнями та ймовірними реакціями на лікування.",
              "cite": "The Lancet Diabetes & Endocrinology · Аналіз, 2025",
              "url": "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(25)00256-6/abstract"
            },
            {
              "claim": "Вживання овочів і білка перед вуглеводами суттєво знижує цукор після їжі.",
              "detail": "Кілька досліджень, зокрема п'ятирічне ретроспективне когортне, виявили, що послідовний початок їжі з овочів і білка замість вуглеводів веде до суттєво нижчих піків глюкози після їжі та відчутного покращення HbA1c з часом.",
              "cite": "PMC / NCBI · Ретроспективне когортне дослідження, 2022",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9322906/"
            },
            {
              "claim": "Обмежене в часі харчування покращує контроль глікемії при діабеті 2 типу.",
              "detail": "Систематичний огляд і метааналіз 2025 року з восьми рандомізованих контрольованих досліджень виявив, що обмежене в часі харчування суттєво знижувало глюкозу натще та HbA1c і збільшувало час у цільовому діапазоні — з послідовними результатами в різних групах.",
              "cite": "International Journal of Molecular Sciences (MDPI) · Метааналіз, 2025",
              "url": "https://www.mdpi.com/1422-0067/26/15/7310"
            },
            {
              "claim": "Хронічний брак сну підвищує інсулінорезистентність у жінок, особливо після менопаузи.",
              "detail": "Дослідження за підтримки NHLBI виявило, що недостатній сон самостійно погіршує чутливість до інсуліну в жінок, із сильнішим ефектом у жінок у постменопаузі — окремо від будь-яких змін маси тіла.",
              "cite": "NHLBI / NIH · Клінічне дослідження",
              "url": "https://www.nhlbi.nih.gov/news/2023/chronic-sleep-deficiency-increases-insulin-resistance-women-especially-postmenopausal"
            }
          ]
        },
        {
          "t": "links",
          "title": "Британські ресурси, які варто знати",
          "items": [
            {
              "name": "Diabetes UK — Діабет 2 типу",
              "url": "https://www.diabetes.org.uk/about-diabetes/type-2-diabetes",
              "desc": "Ґрунтовна, науково обґрунтована інформація про ведення діабету 2 типу, ремісію та підходи способу життя. Також працює гаряча лінія 0345 123 2399."
            },
            {
              "name": "NHS — Діабет 2 типу",
              "url": "https://www.nhs.uk/conditions/type-2-diabetes/",
              "desc": "Охоплює діагностику, лікування та Програму запобігання діабету NHS, яка пропонує безкоштовну структуровану підтримку людям із високим ризиком."
            }
          ]
        },
        {
          "t": "h",
          "text": "Що з цього взяти"
        },
        {
          "t": "p",
          "text": "Дослідження діабету 2 типу у 2024 та 2025 роках вказують у послідовному напрямі: ця хвороба різноманітніша, чутливіша до змін і менш незмінна, ніж нас переконували."
        },
        {
          "t": "p",
          "text": "Ремісія не гарантована — але вона можлива для деяких людей, і ця можливість спирається на суворі дані досліджень, а не на бажане. Біологія складніша за єдину розповідь про спосіб життя, а доступні інструменти — зокрема деякі дуже прості, як-от порядок їжі — ширші, ніж більшість людей уявляє."
        },
        {
          "t": "p",
          "text": "Якщо у вас діагноз 2 типу або ви керуєте підвищеним цукром, дослідження дедалі більше підтримують те, щоб включати сон, час прийому їжі та послідовність їжі в розмову поряд із ліками та дієтою — не як заміну, а як частини однієї картини."
        },
        {
          "t": "p",
          "text": "Кожне рішення щодо вашого ведення слід ухвалювати разом із вашою медичною командою. Мета тут — щоб ви заходили на ці прийоми, знаючи, про що запитати."
        }
      ],
      "faq": [
        {
          "q": "Чи може діабет 2 типу увійти в ремісію?",
          "a": "Так, для деяких людей. П'ятирічне дослідження DiRECT виявило, що 46% учасників досягли ремісії в перший рік, а 26% тих, хто був у ремісії на другому році, усе ще обходилися без ліків через п'ять років. Найімовірніше це за суттєвого стабільного зниження ваги — особливо невдовзі після діагнозу — і за підтримки вашої команди лікарів, хоча це досяжно й доречно не для кожного."
        },
        {
          "q": "Чи справді порядок їжі впливає на цукор у крові?",
          "a": "Так. Показано, що вживання овочів і білка перед вуглеводами зменшує стрибок цукру після їжі приблизно на 54% порівняно з вуглеводами першими, а в одному п'ятирічному дослідженні HbA1c знизився з 8,5% до 7,6% у тих, хто дотримувався такого порядку. Це нічого не коштує, не потребує рецепта й працює за будь-якого прийому їжі."
        },
        {
          "q": "Чи безпечне обмежене в часі харчування для людей із діабетом 2 типу?",
          "a": "Багатьом воно може допомогти — метааналіз 2025 року з восьми досліджень виявив, що харчування у визначеному щоденному вікні (зазвичай 8–10 годин) помірно знижувало глюкозу натще та HbA1c і покращувало час у діапазоні. Це не заміна лікам, і якщо ви приймаєте засоби для зниження глюкози, порадьтеся з медичною командою перед суттєвими змінами у часі харчування, щоб уникнути гіпоглікемії."
        },
        {
          "q": "Чому сон впливає на цукор у крові?",
          "a": "Хронічний поганий сон підвищує інсулінорезистентність — головний чинник діабету 2 типу — власними шляхами, незалежно від маси тіла. Дослідження NHLBI виявило, що ефект сильніший у жінок і ще сильніший після менопаузи, тому сон заслуговує ставлення як до справжньої опори контролю цукру, а не другорядної деталі."
        },
        {
          "q": "Що означає, що діабет 2 типу має підтипи?",
          "a": "Дослідники дедалі більше бачать діабет 2 типу як кілька станів, а не один. Описано щонайменше чотири підтипи — м'який віковий, м'який пов'язаний з ожирінням, тяжкий інсулінорезистентний і тяжкий інсулінодефіцитний — кожен із різними ризиками та ймовірними реакціями на лікування. На практиці те, що добре працює для однієї людини, може мало допомогти іншій, а допомога рухається до узгодження стратегій з індивідуальною біологією."
        }
      ]
    }
  },
  {
    "slug": "perimenopause-diabetes-blood-sugar",
    "date": "2026-06-20",
    "featured": true,
    "image": "/images/blood-sugar-perimenopause-metabolism.jpg",
    "cats": [
      "perimenopause",
      "diabetes"
    ],
    "en": {
      "cat": "Perimenopause & Type 1 Diabetes",
      "title": "Perimenopause & diabetes: what's really happening to your blood sugar",
      "excerpt": "Living with T1D for 23 years, I noticed everything changing in my early 40s — and no one warned me. Here's what perimenopause really does to your blood sugar, and what actually helped.",
      "meta": "20 June 2026 · 8 min read",
      "lead": "Blood sugar can get harder to manage in perimenopause — and almost no one warns you. Here's what's really happening, and what genuinely helped me.",
      "seoTitle": "Perimenopause & Diabetes: Your Blood Sugar",
      "metaDesc": "What perimenopause really does to blood sugar in type 1 diabetes — the patterns, the hormones and the fixes, drawn from 23 years of lived experience.",
      "blocks": [
        {
          "t": "p",
          "text": "I've been living with type 1 diabetes for 23 years. Around 39–40, I started noticing I was getting more insulin resistant — it was harder to manage my normal food. I usually make a cup of coffee in the morning with soya milk, about 4g of carbs per cup. My blood sugar started climbing to 18 mmol/l — ridiculously high for such a tiny amount of carbs."
        },
        {
          "t": "p",
          "text": "At the gym I noticed the same pattern: my sugar stayed high throughout training and climbed even more afterwards — partly explained by the nature of resistance training, which can raise blood glucose. But getting it back into range became a real challenge. My body simply wasn't reacting the way it used to."
        },
        {
          "t": "img",
          "src": "/images/strength-training-cgm-type-1-diabetes.jpg",
          "alt": "Lena Filatova doing a barbell squat with a continuous glucose monitor on her arm",
          "cap": "At the gym, CGM on — where I first noticed resistance training pushing my blood sugar in ways it never used to."
        },
        {
          "t": "p",
          "text": "I asked my diabetes team at St Barts in London what was happening. Of course I knew I was getting older, but nobody was talking about what that actually looks like in practice. They looked at my readings and said: all good, you're being too hard on yourself. But I knew exactly what it took to reach that “good” — so much more effort than before."
        },
        {
          "t": "h",
          "text": "The medical gap nobody talks about"
        },
        {
          "t": "p",
          "text": "On work trips I had to skip meals because I couldn't risk eating something that would push me into very high blood sugars in the middle of a conference. I was starving to stay in range — constantly exhausted and hungry. Any emotion, good or bad, would send my blood sugar shooting up to 17–18 mmol/l, and I'd struggle to bring it back down."
        },
        {
          "t": "p",
          "text": "At my next appointment I tried to raise this with my endocrinologist, but he said they don't have any training on women's health in this period of life. Because I still had regular periods, he told me I wasn't in perimenopause and didn't need anything fixing. When I brought up [gaining belly fat](/blog/perimenopause-weight-myths/), he said my weight was the same as last year — nothing to worry about."
        },
        {
          "t": "quote",
          "text": "I was left fighting alone."
        },
        {
          "t": "p",
          "text": "Getting HRT prescribed was its own battle. My GP wasn't convinced that hormones affect insulin sensitivity — something so fundamental I assumed any provider would know it, given that all hormones affect each other. I'm grateful for the specialists who listened and prescribed HRT even though I still had regular cycles and no hot flushes. It changed everything. I got back a few years in my management — things were still a little harder and less predictable than before, but nowhere near as hard."
        },
        {
          "t": "p",
          "text": "I have experience reading research papers and writing health and fitness news, so I decided to start an open conversation for women who are looking for answers, just like me."
        },
        {
          "t": "h",
          "text": "Why blood sugar gets harder to manage in perimenopause"
        },
        {
          "t": "p",
          "text": "I recently changed my diabetes team and felt understood immediately — but even they pointed to the lack of research and information on women's health over 40 for those living with diabetes."
        },
        {
          "t": "graph",
          "src": "/images/blood-sugar-graph-perimenopause.jpg",
          "alt": "Insulin pump screen showing blood sugar rising to 17.7 mmol/l overnight with 7.9 units of insulin on board",
          "cap": "A night from my own pump — blood sugar swinging up to 17.7 mmol/l with 7.9u of insulin still on board. The kind of overnight pattern that got much harder to control in perimenopause."
        },
        {
          "t": "p",
          "text": "As oestrogen fluctuates and falls, insulin sensitivity drops. The same meals that used to keep your blood sugar steady can push it much higher, and it tends to climb more easily overall. I also noticed a pattern within my own cycles — one month would feel relatively normal and predictable, and the next my body simply wasn't producing as many hormones and I'd be far less sensitive to insulin."
        },
        {
          "t": "quote",
          "text": "This isn't a failure of your management. It's biology that the medical world is only beginning to take seriously."
        },
        {
          "t": "h",
          "text": "What can actually help"
        },
        {
          "t": "p",
          "text": "HRT was the single biggest lever for me. If you're approaching 40 and finding your control inexplicably harder, it's worth having the conversation with a specialist who understands both hormonal health and diabetes — even if you still have regular periods and no hot flushes."
        },
        {
          "t": "p",
          "text": "Resistance training is one of the most reliable tools for blood glucose management: building muscle improves how your body handles glucose, protects your bones, and steadies energy far better than any single supplement. That said, with sleep disruption, joint pain and blood sugar swings, even training becomes harder during perimenopause. I noticed this too. It doesn't mean stop — it means adjust."
        },
        {
          "t": "p",
          "text": "Every decision about your management should be made together with your doctor. My goal here is to make sure you know what you might face, and what can help, so you walk into those appointments informed."
        },
        {
          "t": "h",
          "text": "UK resources worth knowing about"
        },
        {
          "t": "p",
          "text": "If you're looking for somewhere to start, these two UK organisations have the most relevant information specifically for women with diabetes going through perimenopause."
        },
        {
          "t": "links",
          "title": "Two trustworthy places to start",
          "items": [
            {
              "name": "Diabetes UK — Menopause and diabetes",
              "url": "https://www.diabetes.org.uk/",
              "desc": "How falling oestrogen affects insulin sensitivity, when to monitor more frequently, and how to approach the HRT conversation with your GP. They also run a helpline on 0345 123 2399."
            },
            {
              "name": "Breakthrough T1D UK — Menopause and type 1 diabetes",
              "url": "https://breakthrought1d.org.uk/",
              "desc": "Written specifically for women with T1D: how insulin-to-carb ratios may need to change, telling hot flushes from hypos, and using CGM to make sense of your glucose. Last reviewed June 2024."
            }
          ]
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "p",
          "text": "The medical gap is real — and only recently starting to be acknowledged in the literature. Here's where the evidence currently stands."
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "The menstrual cycle affects insulin sensitivity in T1D — and perimenopause amplifies it.",
              "detail": "A 2023 systematic review in Frontiers in Endocrinology examined how the menstrual cycle affects glycaemic outcomes and insulin sensitivity in women with type 1 diabetes. It confirmed that hormonal fluctuations across the cycle do affect blood glucose, while noting major gaps in the evidence — particularly around perimenopause.",
              "cite": "Frontiers in Endocrinology · Systematic review, 2023",
              "url": "https://pubmed.ncbi.nlm.nih.gov/?term=menstrual+cycle+glucose+control+insulin+sensitivity+type+1+diabetes+systematic+review"
            },
            {
              "claim": "There is almost no dedicated research on menopause management for women with T1D.",
              "detail": "A 2025 narrative review in Therapeutic Advances in Endocrinology and Metabolism examined the current evidence on menopause management in women with type 1 diabetes and concluded that the research gaps are substantial — calling for targeted studies to address them.",
              "cite": "Therapeutic Advances in Endocrinology and Metabolism · Narrative review, 2025",
              "url": "https://pubmed.ncbi.nlm.nih.gov/?term=menopause+management+type+1+diabetes+narrative+review"
            },
            {
              "claim": "HRT does reduce insulin resistance — and the evidence is growing.",
              "detail": "A 2024 meta-analysis of 17 randomised controlled trials covering more than 29,000 participants (1998–2024), presented at The Menopause Society Annual Meeting, found that hormone therapy significantly reduced insulin resistance in postmenopausal women.",
              "cite": "The Menopause Society Annual Meeting, 2024",
              "url": "https://menopause.org/"
            },
            {
              "claim": "The field is finally catching up.",
              "detail": "A clinical trial called TIMES (Trajectories in Insulin Sensitivity Across MEnstrual cycleS in Women With Type 1 Diabetes) began recruiting in late 2025. It aims to map exactly how insulin sensitivity changes across the cycle in women with T1D — which will help build the evidence base for perimenopause management too.",
              "cite": "ClinicalTrials.gov — TIMES study",
              "url": "https://clinicaltrials.gov/search?term=TIMES%20insulin%20sensitivity%20menstrual%20type%201%20diabetes"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, women's health writer living with type 1 diabetes",
          "text": "Lena Filatova has lived with type 1 diabetes for 23 years. She writes about women's health, perimenopause and diabetes management at lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Does perimenopause affect blood sugar in type 1 diabetes?",
          "a": "Yes. As oestrogen levels fluctuate and decline during perimenopause, insulin sensitivity drops. The same meals and insulin doses that worked before may no longer produce the same results. Women with type 1 diabetes often experience higher blood sugar, more variability between cycles, and greater difficulty recovering from spikes — all without any obvious change in routine."
        },
        {
          "q": "Can you be in perimenopause if you still have regular periods?",
          "a": "Yes. Perimenopause can begin years before periods become irregular. Hormonal fluctuations — and their effect on insulin sensitivity — can start in your late 30s or early 40s while cycles remain perfectly regular. This is one of the most misunderstood points in women's health, and a main reason so many women with diabetes go unheard for years."
        },
        {
          "q": "Does HRT help with blood sugar control during perimenopause?",
          "a": "For many women with diabetes, HRT can improve insulin sensitivity as oestrogen levels stabilise, consistent with what we know about how hormones affect glucose metabolism. It isn't right for everyone, and the decision should be made with a provider who understands both your hormonal and metabolic health."
        },
        {
          "q": "Why do I gain belly fat in perimenopause even if my weight hasn't changed?",
          "a": "Shifting oestrogen levels change where the body stores fat, often redistributing it towards the abdomen. This can happen even when total weight stays the same — which is why “your weight hasn't changed” isn't a satisfying or complete answer."
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза та діабет 1 типу",
      "title": "Перименопауза та діабет: що насправді відбувається з вашим цукром у крові",
      "excerpt": "23 роки живу з діабетом 1 типу, і на початку своїх 40 я помітила, що все змінюється — а мене ніхто не попередив. Ось що перименопауза насправді робить із цукром у крові й що мені справді допомогло.",
      "meta": "20 червня 2026 · 8 хв читання",
      "lead": "Під час перименопаузи цукор у крові може стати важче контролювати — і майже ніхто про це не попереджає. Ось що відбувається насправді і що справді допомогло мені.",
      "seoTitle": "Перименопауза й діабет: ваш рівень цукру",
      "metaDesc": "Що перименопауза насправді робить із рівнем цукру при діабеті 1 типу — патерни, гормони й рішення, на основі 23 років життя з діабетом та досвіду.",
      "blocks": [
        {
          "t": "p",
          "text": "Я живу з діабетом 1 типу вже 23 роки. Приблизно у 39–40 я почала помічати, що стаю більш інсулінорезистентною — звичну їжу стало важче контролювати. Зазвичай зранку я роблю каву на соєвому молоці, це близько 4 г вуглеводів на чашку. Мій цукор почав підніматися до 18 ммоль/л — абсурдно високо для такої крихітної кількості вуглеводів."
        },
        {
          "t": "p",
          "text": "У залі я помічала той самий патерн: цукор тримався високо протягом тренування й піднімався ще більше після — частково це пояснюється природою силових тренувань, які можуть підвищувати глюкозу. Але повернути його в норму стало справжнім викликом. Моє тіло просто не реагувало так, як раніше."
        },
        {
          "t": "img",
          "src": "/images/strength-training-cgm-type-1-diabetes.jpg",
          "alt": "Lena Filatova виконує присідання зі штангою, на руці — сенсор безперервного моніторингу глюкози",
          "cap": "У залі, із CGM на руці — саме тут я вперше помітила, що силові тренування піднімають мій цукор так, як ніколи раніше."
        },
        {
          "t": "p",
          "text": "Я запитала свою діабетичну команду в St Barts у Лондоні, що відбувається. Звісно, я знала, що старішаю, але ніхто не говорив, як це виглядає на практиці. Вони подивилися на мої показники й сказали: усе добре, ви занадто суворі до себе. Але я точно знала, чого мені коштувало це «добре» — набагато більше зусиль, ніж раніше."
        },
        {
          "t": "h",
          "text": "Медична прогалина, про яку ніхто не говорить"
        },
        {
          "t": "p",
          "text": "У робочих поїздках я мусила пропускати прийоми їжі, бо не могла ризикнути з'їсти щось, що підняло б цукор дуже високо посеред конференції. Я голодувала, щоб триматися в межах — постійно виснажена й голодна. Будь-яка емоція, добра чи погана, підкидала мій цукор до 17–18 ммоль/л, і мені було важко його знизити."
        },
        {
          "t": "p",
          "text": "На наступному прийомі я спробувала підняти це питання з ендокринологом, але він сказав, що вони не мають підготовки з жіночого здоров'я у цей період життя. Оскільки в мене ще були регулярні цикли, він сказав, що я не в перименопаузі й нічого лікувати не треба. Коли я згадала про [набір жиру на животі](/ua/blog/perimenopause-weight-myths/), він відповів, що моя вага така сама, як торік — нема про що хвилюватися."
        },
        {
          "t": "quote",
          "text": "Я залишилася сам на сам зі своєю боротьбою."
        },
        {
          "t": "p",
          "text": "Отримати призначення ЗГТ було окремою битвою. Мій сімейний лікар не був переконаний, що гормони впливають на чутливість до інсуліну — щось настільки фундаментальне, що я вважала, це знає будь-який медик, адже всі гормони впливають одне на одного. Я вдячна спеціалістам, які прислухалися і призначили ЗГТ, попри регулярні цикли й відсутність приливів. Це змінило все. Я повернулась на кілька років назад — було все ще менш передбачувано, ніж раніше, але й близько не так важко."
        },
        {
          "t": "p",
          "text": "Я маю досвід читання наукових статей і написання новин про здоров'я та фітнес, тож вирішила почати відкриту розмову для жінок, які шукають відповіді, як і я."
        },
        {
          "t": "h",
          "text": "Чому цукор у крові стає важче контролювати під час перименопаузи"
        },
        {
          "t": "p",
          "text": "Нещодавно я змінила діабетичну команду й одразу відчула, що мене розуміють — але навіть вони вказали на брак досліджень та інформації про жіноче здоров'я після 40 для тих, хто живе з діабетом."
        },
        {
          "t": "graph",
          "src": "/images/blood-sugar-graph-perimenopause.jpg",
          "alt": "Екран інсулінової помпи показує, як цукор у крові піднімається до 17,7 ммоль/л уночі з 7,9 одиницями інсуліну в дії",
          "cap": "Ніч із моєї власної помпи — цукор злітає до 17,7 ммоль/л, коли ще діють 7,9 од. інсуліну. Саме такий нічний патерн став набагато важче контролювати під час перименопаузи."
        },
        {
          "t": "p",
          "text": "Коли естроген коливається та падає, чутливість до інсуліну знижується. Ті самі страви, що раніше тримали цукор стабільним, тепер можуть піднімати його значно вище, і він загалом росте легше. Я також помітила закономірність у власних менструальних циклах — один місяць був відносно нормальним і передбачуваним, а наступного моє тіло просто виробляло менше гормонів, і я була значно менш чутлива до інсуліну."
        },
        {
          "t": "quote",
          "text": "Це не провал вашої компенсації. Це біологія, яку медичний світ лише починає сприймати серйозно."
        },
        {
          "t": "h",
          "text": "Що справді може допомогти"
        },
        {
          "t": "p",
          "text": "ЗГТ була для мене найбільшим важелем. Якщо ви наближаєтесь до 40 і бачите, що контроль незрозуміло погіршується, варто поговорити зі спеціалістом, який розуміє і гормональне здоров'я, і діабет — навіть якщо у вас ще регулярні цикли й немає приливів."
        },
        {
          "t": "p",
          "text": "Силові тренування — один із найнадійніших інструментів для компенсації глюкози: м'язи покращують те, як тіло працює з глюкозою, захищають кістки та стабілізують енергію краще за будь-яку окрему добавку. Водночас із порушеннями сну, болем у суглобах і коливаннями цукру навіть тренуватися стає важче під час перименопаузи. Я теж це помітила. Це не означає «припинити» — це означає «підлаштуватися»."
        },
        {
          "t": "p",
          "text": "Кожне рішення щодо вашої компенсації слід приймати разом із лікарем. Моя мета тут — щоб ви знали, з чим можете зіткнутися і що може допомогти, аби ви приходили на прийом поінформованими."
        },
        {
          "t": "h",
          "text": "Британські ресурси, які варто знати"
        },
        {
          "t": "p",
          "text": "Якщо ви шукаєте, з чого почати, ці дві британські організації мають найрелевантнішу інформацію саме для жінок із діабетом, які проходять перименопаузу."
        },
        {
          "t": "links",
          "title": "Два надійні місця, з яких варто почати",
          "items": [
            {
              "name": "Diabetes UK — Менопауза та діабет",
              "url": "https://www.diabetes.org.uk/",
              "desc": "Як зниження естрогену впливає на чутливість до інсуліну, коли варто моніторити частіше і як розпочати розмову про ЗГТ із сімейним лікарем. Також працює гаряча лінія 0345 123 2399."
            },
            {
              "name": "Breakthrough T1D UK — Менопауза та діабет 1 типу",
              "url": "https://breakthrought1d.org.uk/",
              "desc": "Написано саме для жінок із T1D: як може змінюватися співвідношення інсуліну до вуглеводів, як відрізнити припливи від гіпо і як за допомогою CGM зрозуміти свою глюкозу. Востаннє переглянуто в червні 2024 року."
            }
          ]
        },
        {
          "t": "h",
          "text": "Що каже дослідження"
        },
        {
          "t": "p",
          "text": "Медична прогалина реальна — і лише нещодавно її почали визнавати в науковій літературі. Ось про що зараз кажуть докази."
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Менструальний цикл впливає на чутливість до інсуліну при T1D — а перименопауза це посилює.",
              "detail": "Систематичний огляд 2023 року у Frontiers in Endocrinology дослідив, як менструальний цикл впливає на глікемічні показники та чутливість до інсуліну в жінок із діабетом 1 типу. Він підтвердив, що гормональні коливання протягом циклу впливають на глюкозу, водночас відзначивши суттєві прогалини в доказах — особливо щодо перименопаузи.",
              "cite": "Frontiers in Endocrinology · Систематичний огляд, 2023",
              "url": "https://pubmed.ncbi.nlm.nih.gov/?term=menstrual+cycle+glucose+control+insulin+sensitivity+type+1+diabetes+systematic+review"
            },
            {
              "claim": "Практично немає окремих досліджень про ведення менопаузи в жінок із T1D.",
              "detail": "Наративний огляд 2025 року у Therapeutic Advances in Endocrinology and Metabolism розглянув наявні докази щодо ведення менопаузи в жінок із діабетом 1 типу й дійшов висновку, що прогалини в дослідженнях суттєві — закликаючи до цілеспрямованих досліджень.",
              "cite": "Therapeutic Advances in Endocrinology and Metabolism · Наративний огляд, 2025",
              "url": "https://pubmed.ncbi.nlm.nih.gov/?term=menopause+management+type+1+diabetes+narrative+review"
            },
            {
              "claim": "ЗГТ справді знижує інсулінорезистентність — і доказів більшає.",
              "detail": "Метааналіз 2024 року з 17 рандомізованих контрольованих досліджень за участю понад 29 000 осіб (1998–2024), представлений на щорічній зустрічі The Menopause Society, показав, що гормональна терапія суттєво знижує інсулінорезистентність у жінок у постменопаузі.",
              "cite": "Щорічна зустріч The Menopause Society, 2024",
              "url": "https://menopause.org/"
            },
            {
              "claim": "Галузь нарешті надолужує.",
              "detail": "Клінічне дослідження під назвою TIMES (Trajectories in Insulin Sensitivity Across MEnstrual cycleS in Women With Type 1 Diabetes) розпочало набір наприкінці 2025 року. Воно має на меті точно окреслити, як змінюється чутливість до інсуліну протягом циклу в жінок із T1D — що також допоможе побудувати доказову базу для ведення перименопаузи.",
              "cite": "ClinicalTrials.gov — дослідження TIMES",
              "url": "https://clinicaltrials.gov/search?term=TIMES%20insulin%20sensitivity%20menstrual%20type%201%20diabetes"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, авторка про жіноче здоров'я, що живе з діабетом 1 типу",
          "text": "Lena Filatova живе з діабетом 1 типу вже 23 роки. Вона пише про жіноче здоров'я, перименопаузу та ведення діабету на lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Чи впливає перименопауза на цукор у крові при діабеті 1 типу?",
          "a": "Так. Коли рівень естрогену коливається та знижується під час перименопаузи, чутливість до інсуліну падає. Ті самі страви й дози інсуліну, що працювали раніше, можуть більше не давати того самого результату. Жінки з діабетом 1 типу часто помічають вищий цукор, більшу мінливість між циклами й важче відновлення після стрибків — без жодної очевидної зміни в режимі."
        },
        {
          "q": "Чи можна бути в перименопаузі, якщо цикли ще регулярні?",
          "a": "Так. Перименопауза може початися за роки до того, як цикли стануть нерегулярними. Гормональні коливання — і їхній вплив на чутливість до інсуліну — можуть початися наприкінці 30-х чи на початку 40-х, поки цикли лишаються цілком регулярними. Це один із моментів жіночого здоров'я, які неправильно розуміють, і головна причина, чому багатьох жінок із діабетом роками не чують."
        },
        {
          "q": "Чи допомагає ЗГТ контролювати цукор під час перименопаузи?",
          "a": "Для багатьох жінок із діабетом ЗГТ може покращити чутливість до інсуліну, коли рівень естрогену стабілізується, що узгоджується з тим, що ми знаємо про вплив гормонів на метаболізм глюкози. Вона підходить не всім, і рішення варто приймати з лікарем, який розуміє і ваше гормональне, і метаболічне здоров'я."
        },
        {
          "q": "Чому я набираю жир на животі під час перименопаузи, навіть якщо вага не змінилася?",
          "a": "Зміни рівня естрогену змінюють те, де тіло зберігає жир, часто перерозподіляючи його до живота. Це може відбуватися навіть коли загальна вага лишається тією самою — тому «ваша вага не змінилася» не є вичерпною відповіддю."
        }
      ]
    }
  },
  {
    "slug": "collagen-and-skin",
    "date": "2026-06-14",
    "image": "/images/collagen-supplements-skin-women-over-40.jpg",
    "cats": [
      "skin"
    ],
    "en": {
      "cat": "Skin & beauty",
      "title": "Do collagen products actually improve your skin?",
      "seoTitle": "Collagen and Skin: What the Evidence Actually Shows",
      "metaDesc": "Does collagen actually improve skin? We look at the evidence on supplements, creams and the nutrients your body needs to make its own.",
      "excerpt": "What the evidence really shows about collagen supplements, creams and the nutrients that support your own.",
      "meta": "14 June 2026 · 5 min read",
      "lead": "Collagen is the scaffold that keeps skin firm and elastic — and from your mid-twenties you make a little less of it each year. Here's what the evidence actually supports, and what's mostly marketing.",
      "blocks": [
        {
          "t": "p",
          "text": "Collagen is the most abundant protein in the body. It forms the structural scaffold that gives skin its firmness, elasticity and plumpness. From the mid-twenties, the body produces roughly 1% less each year. In perimenopause and beyond, that decline accelerates — falling oestrogen removes one of collagen's key production signals, which is why skin often changes noticeably around that time."
        },
        {
          "t": "p",
          "text": "The skincare industry has built a large market around this biology. Whether any specific product can meaningfully slow or reverse that decline depends on how it works — and not all of them do."
        },
        {
          "t": "h",
          "text": "Why collagen creams can't rebuild skin"
        },
        {
          "t": "p",
          "text": "The collagen molecule is large — around 300,000 daltons. Research into skin permeability has established that [the skin's outer barrier only allows molecules smaller than 500 daltons](https://onlinelibrary.wiley.com/doi/epdf/10.1034/j.1600-0625.2000.009003165.x) to pass through. A collagen cream or serum cannot deliver collagen into the dermis; the physics don't allow it."
        },
        {
          "t": "p",
          "text": "What a collagen cream can do is function as a moisturiser. It reduces water loss from the skin's surface, which temporarily plumps fine lines and improves texture. That's useful — but it's the same mechanism as any good humectant or barrier cream. Nothing wrong with them; they are just not doing what the marketing often implies."
        },
        {
          "t": "p",
          "text": "If you want to support collagen synthesis in the dermis, the topical ingredients with the strongest evidence are retinoids (derivatives of vitamin A) and vitamin C. [A 2025 systematic review and meta-analysis of clinical trials on tretinoin](https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/) confirmed that retinoids measurably increase collagen production and improve photodamaged skin — they remain the most evidence-backed topical ingredient for skin ageing. Vitamin C supports the hydroxylase enzymes that form and stabilise collagen — it is a cofactor, not a source, but without enough of it the process stalls."
        },
        {
          "t": "h",
          "text": "What the evidence says about collagen supplements"
        },
        {
          "t": "p",
          "text": "Oral supplements are a more interesting — and more complicated — story. Hydrolysed collagen peptides, the form found in most powders and capsules, are broken into fragments small enough to be absorbed in the gut. There is reasonable evidence that some of those fragments reach the skin and stimulate fibroblasts, the cells responsible for producing collagen and elastin."
        },
        {
          "t": "p",
          "text": "[A 2024 meta-analysis covering 26 randomised controlled trials and 1,721 participants](https://pmc.ncbi.nlm.nih.gov/articles/PMC10773595/) found consistent improvements in skin hydration and elasticity with hydrolysed collagen supplementation. The original landmark trial by [Proksch et al.](https://karger.com/spp/article/27/1/47/295741/Oral-Supplementation-of-Specific-Collagen-Peptides) — 69 women, 8 weeks, 2.5–5g daily — showed statistically significant improvements in skin elasticity, and its findings have held up across subsequent research."
        },
        {
          "t": "p",
          "text": "There is, however, an important caveat. [A 2025 meta-analysis in the American Journal of Medicine](https://www.amjmed.com/article/S0002-9343%2825%2900283-9/abstract) examined 23 trials and found that when studies were separated by funding source, industry-funded trials consistently showed significant benefits — while independently-funded trials showed no effect. This doesn't mean the supplements don't work, but it does mean the evidence base deserves more scrutiny than the marketing suggests."
        },
        {
          "t": "p",
          "text": "The most honest summary: the effects are plausible, the supplements appear safe, and some trials show real improvements. But the evidence is not as solid as it is often presented, and the question of who funded the research matters more here than in most areas."
        },
        {
          "t": "h",
          "text": "The foundations that matter more"
        },
        {
          "t": "p",
          "text": "Before spending on supplements, it is worth checking whether the building blocks are in place. Collagen synthesis depends on specific nutrients, and a shortfall in any of them limits what the body can produce."
        },
        {
          "t": "p",
          "text": "[Vitamin C](https://www.mdpi.com/2072-6643/9/8/866) is the most critical. The enzymes that form and stabilise collagen cannot work without it — made vivid by the fact that scurvy causes skin breakdown and wound-healing failure. You don't need megadoses; the UK Reference Nutrient Intake is 40mg per day. Good sources include bell peppers, kiwi, citrus fruit and broccoli. [A 2024 randomised trial found that combining collagen with vitamin C](https://pmc.ncbi.nlm.nih.gov/articles/PMC11206740/) improved dermis density and skin texture more than placebo — suggesting the two work better together than either alone."
        },
        {
          "t": "p",
          "text": "Zinc supports collagen-producing enzymes and wound repair. Mild deficiency is common, particularly in women eating a predominantly plant-based diet. Rich sources include meat, pumpkin seeds, legumes and wholegrains."
        },
        {
          "t": "p",
          "text": "Copper is required for lysyl oxidase, the enzyme that cross-links collagen fibres to give skin its structural strength. Nuts, seeds, shellfish and liver are the richest sources."
        },
        {
          "t": "p",
          "text": "Protein is what collagen is made from. The body cannot build it without adequate amino acids — and women in midlife often eat less protein than they need, particularly when reducing overall calories."
        },
        {
          "t": "h",
          "text": "A note for perimenopause"
        },
        {
          "t": "p",
          "text": "Oestrogen plays a direct role in collagen production. [A 2025 narrative review in the Journal of Cosmetic Dermatology](https://onlinelibrary.wiley.com/doi/10.1111/jocd.70393) — drawing on five decades of research — confirmed that skin collagen content falls at roughly 1–2% per year in the early postmenopausal period, that skin thickness and barrier function decline alongside it, and that this is driven by falling oestrogen rather than age alone. The same review found evidence that HRT can partially restore collagen content, elasticity and hydration in postmenopausal women."
        },
        {
          "t": "p",
          "text": "The evidence for HRT's skin benefits is growing, but it remains secondary to the better-established benefits for vasomotor symptoms and bone protection. If you are in or approaching perimenopause and noticing significant changes in skin firmness or texture, it is worth raising the question of hormonal health with your GP or a menopause specialist alongside any conversation about skincare."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Collagen supplements improve skin measures — but funding source matters.",
              "detail": "A 2025 meta-analysis in the American Journal of Medicine reviewed 23 randomised controlled trials with 1,474 participants. Industry-funded studies consistently showed significant improvements in hydration, elasticity and wrinkles. When only independently-funded trials were analysed, no significant effect was found. The authors called for more independent research before firm conclusions can be drawn.",
              "cite": "American Journal of Medicine · Systematic review & meta-analysis, 2025",
              "url": "https://www.amjmed.com/article/S0002-9343(25)00283-9/abstract"
            },
            {
              "claim": "The breadth of evidence for oral collagen is growing.",
              "detail": "A 2024 meta-analysis covered 26 randomised controlled trials involving 1,721 participants and found that supplementation with hydrolysed collagen improved skin elasticity and hydration across studies. Effect sizes were modest and trial durations short — but the consistency of direction across such a large evidence base is meaningful.",
              "cite": "PMC · Systematic review & meta-analysis, 2024",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10773595/"
            },
            {
              "claim": "The original landmark RCT still holds.",
              "detail": "Proksch et al. (2014) randomised 69 women aged 35–55 to take 2.5g or 5g of collagen peptides daily for eight weeks. Both doses led to statistically significant improvements in skin elasticity compared to placebo. It remains one of the most frequently cited trials in the field, and its findings have been replicated.",
              "cite": "Skin Pharmacology and Physiology · Randomised controlled trial, 2014",
              "url": "https://karger.com/spp/article/27/1/47/295741/Oral-Supplementation-of-Specific-Collagen-Peptides"
            },
            {
              "claim": "Collagen molecules are too large to penetrate the skin barrier.",
              "detail": "The \"500 Dalton rule\", established in a foundational pharmacology paper, holds that molecules above approximately 500 daltons cannot pass through the skin's outer barrier. Collagen weighs around 300,000 daltons. This is why topical collagen cannot act as a structural repair agent for the dermis — whatever the packaging suggests.",
              "cite": "Experimental Dermatology · Review, 2000",
              "url": "https://onlinelibrary.wiley.com/doi/epdf/10.1034/j.1600-0625.2000.009003165.x"
            },
            {
              "claim": "Retinoids remain the most evidence-backed topical for skin ageing.",
              "detail": "A 2025 systematic review and meta-analysis of randomised controlled trials on tretinoin for photodamaged facial skin confirmed measurable improvements in collagen production, skin texture and fine lines. The mechanism — suppressing collagen-degrading enzymes while stimulating fibroblast activity — is well understood and has been replicated across decades of research.",
              "cite": "PMC · Systematic review & meta-analysis, 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/"
            },
            {
              "claim": "Vitamin C is not optional for collagen synthesis.",
              "detail": "A 2017 review in Nutrients described the established biochemistry: vitamin C acts as a cofactor for the hydroxylase enzymes that stabilise collagen's triple-helix structure, and its absence results in defective, unstable collagen. A 2024 RCT found that collagen combined with vitamin C produced greater improvements in dermis density and texture than collagen alone — reinforcing the importance of combining these nutrients.",
              "cite": "Nutrients · Review, 2017",
              "url": "https://www.mdpi.com/2072-6643/9/8/866"
            },
            {
              "claim": "Oestrogen loss accelerates skin collagen decline — and HRT can help.",
              "detail": "A 2025 narrative review in the Journal of Cosmetic Dermatology reviewed five decades of research on menopausal skin changes and HRT. It confirmed that collagen falls at 1–2% per year in the early postmenopausal period, that skin barrier function and elasticity decline alongside it, and that hormone replacement therapy can partially restore these measures in postmenopausal women.",
              "cite": "Journal of Cosmetic Dermatology · Narrative review, 2025",
              "url": "https://onlinelibrary.wiley.com/doi/10.1111/jocd.70393"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Do collagen supplements actually work?",
          "a": "Possibly — but less clearly than the marketing suggests. Multiple trials show improvements in skin hydration and elasticity, but a 2025 meta-analysis found that independently-funded studies showed no significant effect, while industry-funded ones did. If you want to try them, 2.5–10g of hydrolysed collagen daily is the dose used in most trials. Make sure vitamin C intake is adequate alongside them."
        },
        {
          "q": "Can a collagen cream rebuild skin?",
          "a": "No — collagen molecules are far too large to penetrate the skin barrier. Collagen creams work as moisturisers, which is useful, but that is where the mechanism ends. Retinoids and vitamin C serums are the topical ingredients with evidence for actually stimulating collagen production in the dermis."
        },
        {
          "q": "What is the most important nutrient for skin collagen?",
          "a": "Vitamin C. Without it, the enzymes that form and cross-link collagen cannot function. Getting enough through food — bell peppers, kiwi, citrus, broccoli — matters more than any supplement. Zinc, copper and adequate protein also play essential roles."
        },
        {
          "q": "Does menopause affect collagen?",
          "a": "Yes, significantly. Oestrogen supports collagen synthesis in the skin, and its decline during perimenopause and menopause accelerates collagen loss at roughly 1–2% per year — beyond what age alone would explain. HRT has evidence for partially restoring skin collagen and elasticity. Talk to your GP or a menopause specialist if this is a concern."
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Why skin changes so fast at menopause — and what HRT can and can't do",
              "url": "/blog/menopause-skin-oestrogen/",
              "desc": "Oestrogen supports collagen production and skin hydration. Here's what the evidence says."
            },
            {
              "name": "Protein for women over 40: how much do you actually need?",
              "url": "/blog/protein-for-women-over-40/",
              "desc": "Collagen is a protein. Getting enough protein in midlife supports skin structure as well as muscle."
            },
            {
              "name": "HRT prescriptions have doubled — patches are now running short",
              "url": "/blog/hrt-prescriptions-doubling/",
              "desc": "Oestrogen affects skin and collagen. New data on the HRT surge and what patch shortages mean."
            }
          ]
        }
      ]
    },
    "ua": {
      "cat": "Краса та шкіра",
      "title": "Чи справді колагенові засоби покращують шкіру?",
      "seoTitle": "Колаген і шкіра: що насправді показують дослідження",
      "metaDesc": "Чи справді колаген покращує шкіру? Розглядаємо докази щодо добавок, кремів і поживних речовин для підтримки власного колагену.",
      "excerpt": "Що насправді показують дослідження про колагенові добавки, креми та поживні речовини для вашого колагену.",
      "meta": "14 червня 2026 · 5 хв читання",
      "lead": "Колаген — це каркас, що робить шкіру пружною й еластичною, і з середини двадцятих років ви щороку виробляєте його трохи менше. Ось що насправді підтверджують докази, а що переважно маркетинг.",
      "blocks": [
        {
          "t": "p",
          "text": "Колаген — найпоширеніший білок в організмі. Він утворює структурний каркас, що надає шкірі пружності, еластичності та наповненості. Із середини двадцятих років тіло виробляє приблизно на 1% менше щороку. Під час перименопаузи й після неї цей спад пришвидшується — падіння естрогену прибирає один із ключових сигналів для вироблення колагену, тому шкіра часто помітно змінюється саме в цей період."
        },
        {
          "t": "p",
          "text": "Індустрія догляду за шкірою побудувала великий ринок навколо цієї біології. Чи може конкретний засіб суттєво сповільнити або повернути цей спад, залежить від того, як він працює — а працюють не всі."
        },
        {
          "t": "h",
          "text": "Чому колагенові креми не можуть відновити шкіру"
        },
        {
          "t": "p",
          "text": "Молекула колагену велика — близько 300 000 дальтонів. Дослідження проникності шкіри встановили, що [зовнішній бар'єр шкіри пропускає лише молекули менші за 500 дальтонів](https://onlinelibrary.wiley.com/doi/epdf/10.1034/j.1600-0625.2000.009003165.x). Колагеновий крем чи сироватка не можуть доставити колаген у дерму; фізика цього не дозволяє."
        },
        {
          "t": "p",
          "text": "Що колагеновий крем справді може — це працювати як зволожувач. Він зменшує втрату води з поверхні шкіри, що тимчасово розгладжує дрібні зморшки й покращує текстуру. Це корисно — але це той самий механізм, що й у будь-якого хорошого зволожувача чи бар'єрного крему. З ними все гаразд; вони просто не роблять того, що часто обіцяє маркетинг."
        },
        {
          "t": "p",
          "text": "Якщо ви хочете підтримати синтез колагену в дермі, топічні інгредієнти з найсильнішими доказами — це ретиноїди (похідні вітаміну A) та вітамін C. [Систематичний огляд і метааналіз клінічних досліджень третиноїну 2025 року](https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/) підтвердив, що ретиноїди вимірно збільшують вироблення колагену й покращують фотопошкоджену шкіру — вони залишаються найдоказовішим топічним інгредієнтом проти старіння шкіри. Вітамін C підтримує ферменти-гідроксилази, що формують і стабілізують колаген — це кофактор, а не джерело, але без достатньої його кількості процес зупиняється."
        },
        {
          "t": "h",
          "text": "Що кажуть докази про колагенові добавки"
        },
        {
          "t": "p",
          "text": "Пероральні добавки — цікавіша й складніша історія. Гідролізовані пептиди колагену, форма, що міститься в більшості порошків і капсул, розщеплюються на фрагменти, достатньо малі для всмоктування в кишечнику. Є розумні докази, що деякі з цих фрагментів досягають шкіри й стимулюють фібробласти — клітини, відповідальні за вироблення колагену та еластину."
        },
        {
          "t": "p",
          "text": "[Метааналіз 2024 року, що охопив 26 рандомізованих контрольованих досліджень і 1721 учасника](https://pmc.ncbi.nlm.nih.gov/articles/PMC10773595/), виявив послідовне покращення зволоження та еластичності шкіри від приймання гідролізованого колагену. Оригінальне знакове дослідження [Proksch та колег](https://karger.com/spp/article/27/1/47/295741/Oral-Supplementation-of-Specific-Collagen-Peptides) — 69 жінок, 8 тижнів, 2,5–5 г щодня — показало статистично значуще покращення еластичності шкіри, і його висновки підтвердилися в наступних дослідженнях."
        },
        {
          "t": "p",
          "text": "Проте є важливе застереження. [Метааналіз 2025 року в American Journal of Medicine](https://www.amjmed.com/article/S0002-9343%2825%2900283-9/abstract) вивчив 23 дослідження й виявив, що коли роботи розділили за джерелом фінансування, дослідження, профінансовані індустрією, послідовно показували значущу користь — тоді як незалежно профінансовані не показали ефекту. Це не означає, що добавки не працюють, але означає, що доказова база заслуговує більшої критичності, ніж підказує маркетинг."
        },
        {
          "t": "p",
          "text": "Найчесніший підсумок: ефекти правдоподібні, добавки видаються безпечними, і деякі дослідження показують справжнє покращення. Але докази не такі надійні, як їх часто подають, а питання про те, хто фінансував дослідження, тут важливіше, ніж у більшості сфер."
        },
        {
          "t": "h",
          "text": "Основи, що важать більше"
        },
        {
          "t": "p",
          "text": "Перш ніж витрачатися на добавки, варто перевірити, чи на місці будівельні блоки. Синтез колагену залежить від певних поживних речовин, і нестача будь-якої з них обмежує те, що тіло здатне виробити."
        },
        {
          "t": "p",
          "text": "[Вітамін C](https://www.mdpi.com/2072-6643/9/8/866) — найкритичніший. Ферменти, що формують і стабілізують колаген, не можуть працювати без нього — це яскраво ілюструє те, що цинга спричиняє руйнування шкіри та порушення загоєння ран. Мегадози не потрібні; британська референсна норма споживання — 40 мг на день. Хороші джерела — солодкий перець, ківі, цитрусові та броколі. [Рандомізоване дослідження 2024 року виявило, що поєднання колагену з вітаміном C](https://pmc.ncbi.nlm.nih.gov/articles/PMC11206740/) покращувало щільність дерми й текстуру шкіри краще за плацебо — тобто разом вони працюють краще, ніж кожен окремо."
        },
        {
          "t": "p",
          "text": "Цинк підтримує ферменти, що виробляють колаген, і загоєння ран. Легка нестача поширена, особливо в жінок із переважно рослинним харчуванням. Багаті джерела — м'ясо, гарбузове насіння, бобові та цільні злаки."
        },
        {
          "t": "p",
          "text": "Мідь потрібна для лізилоксидази — ферменту, що зшиває волокна колагену, надаючи шкірі структурної міцності. Найбагатші джерела — горіхи, насіння, молюски та печінка."
        },
        {
          "t": "p",
          "text": "Білок — це те, з чого зроблений колаген. Тіло не може будувати його без достатньої кількості амінокислот — а жінки в середньому віці часто їдять менше білка, ніж потребують, особливо коли скорочують загальну калорійність."
        },
        {
          "t": "h",
          "text": "Кілька слів про перименопаузу"
        },
        {
          "t": "p",
          "text": "Естроген відіграє пряму роль у виробленні колагену. [Оглядова стаття 2025 року в Journal of Cosmetic Dermatology](https://onlinelibrary.wiley.com/doi/10.1111/jocd.70393) — на основі п'яти десятиліть досліджень — підтвердила, що вміст колагену в шкірі падає приблизно на 1–2% на рік у ранній постменопаузі, що товщина шкіри та бар'єрна функція знижуються разом із ним, і що це спричинено падінням естрогену, а не лише віком. Той самий огляд знайшов докази, що ЗГТ може частково відновити вміст колагену, еластичність і зволоження в жінок у постменопаузі."
        },
        {
          "t": "p",
          "text": "Докази користі ЗГТ для шкіри зростають, але вона залишається вторинною щодо краще доведених переваг для вазомоторних симптомів і захисту кісток. Якщо ви в перименопаузі або наближаєтеся до неї й помічаєте суттєві зміни пружності чи текстури шкіри, варто підняти питання гормонального здоров'я з вашим лікарем або фахівцем із менопаузи паралельно з розмовою про догляд за шкірою."
        },
        {
          "t": "h",
          "text": "Що каже дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Колагенові добавки покращують показники шкіри — але джерело фінансування має значення.",
              "detail": "Метааналіз 2025 року в American Journal of Medicine розглянув 23 рандомізовані контрольовані дослідження з 1474 учасниками. Профінансовані індустрією роботи послідовно показували значуще покращення зволоження, еластичності та зморшок. Коли аналізували лише незалежно профінансовані дослідження, значущого ефекту не виявили. Автори закликали до більшої кількості незалежних досліджень, перш ніж робити тверді висновки.",
              "cite": "American Journal of Medicine · Систематичний огляд і метааналіз, 2025",
              "url": "https://www.amjmed.com/article/S0002-9343(25)00283-9/abstract"
            },
            {
              "claim": "Обсяг доказів для перорального колагену зростає.",
              "detail": "Метааналіз 2024 року охопив 26 рандомізованих контрольованих досліджень із 1721 учасником і виявив, що приймання гідролізованого колагену покращувало еластичність і зволоження шкіри. Розміри ефекту були помірними, а тривалість досліджень короткою — але послідовність напряму в такій великій доказовій базі має значення.",
              "cite": "PMC · Систематичний огляд і метааналіз, 2024",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10773595/"
            },
            {
              "claim": "Оригінальне знакове РКД усе ще актуальне.",
              "detail": "Proksch та колеги (2014) рандомізували 69 жінок віком 35–55 приймати 2,5 г або 5 г пептидів колагену щодня протягом восьми тижнів. Обидві дози привели до статистично значущого покращення еластичності шкіри порівняно з плацебо. Це одне з найчастіше цитованих досліджень у цій галузі, і його висновки відтворювали.",
              "cite": "Skin Pharmacology and Physiology · Рандомізоване контрольоване дослідження, 2014",
              "url": "https://karger.com/spp/article/27/1/47/295741/Oral-Supplementation-of-Specific-Collagen-Peptides"
            },
            {
              "claim": "Молекули колагену завеликі, щоб проникнути крізь бар'єр шкіри.",
              "detail": "«Правило 500 дальтонів», встановлене у фундаментальній фармакологічній праці, стверджує, що молекули понад приблизно 500 дальтонів не можуть пройти крізь зовнішній бар'єр шкіри. Колаген важить близько 300 000 дальтонів. Саме тому топічний колаген не може бути засобом структурного відновлення дерми — хоч би що обіцяла упаковка.",
              "cite": "Experimental Dermatology · Огляд, 2000",
              "url": "https://onlinelibrary.wiley.com/doi/epdf/10.1034/j.1600-0625.2000.009003165.x"
            },
            {
              "claim": "Ретиноїди залишаються найдоказовішим топічним засобом проти старіння шкіри.",
              "detail": "Систематичний огляд і метааналіз рандомізованих контрольованих досліджень третиноїну для фотопошкодженої шкіри обличчя 2025 року підтвердив вимірне покращення вироблення колагену, текстури шкіри та дрібних зморшок. Механізм — пригнічення ферментів, що руйнують колаген, і водночас стимуляція активності фібробластів — добре вивчений і відтворений протягом десятиліть досліджень.",
              "cite": "PMC · Систематичний огляд і метааналіз, 2025",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/"
            },
            {
              "claim": "Вітамін C не є необов'язковим для синтезу колагену.",
              "detail": "Огляд 2017 року в Nutrients описав усталену біохімію: вітамін C діє як кофактор для ферментів-гідроксилаз, що стабілізують потрійну спіраль колагену, а його відсутність призводить до дефектного, нестабільного колагену. РКД 2024 року виявило, що колаген у поєднанні з вітаміном C давав більше покращення щільності дерми й текстури, ніж колаген окремо — що підкреслює важливість поєднання цих речовин.",
              "cite": "Nutrients · Огляд, 2017",
              "url": "https://www.mdpi.com/2072-6643/9/8/866"
            },
            {
              "claim": "Втрата естрогену пришвидшує спад колагену шкіри — і ЗГТ може допомогти.",
              "detail": "Оглядова стаття 2025 року в Journal of Cosmetic Dermatology розглянула п'ять десятиліть досліджень змін шкіри в менопаузі та ЗГТ. Вона підтвердила, що колаген падає на 1–2% на рік у ранній постменопаузі, що бар'єрна функція та еластичність шкіри знижуються разом із ним, і що замісна гормональна терапія може частково відновити ці показники в жінок у постменопаузі.",
              "cite": "Journal of Cosmetic Dermatology · Оглядова стаття, 2025",
              "url": "https://onlinelibrary.wiley.com/doi/10.1111/jocd.70393"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи справді працюють колагенові добавки?",
          "a": "Можливо — але менш однозначно, ніж підказує маркетинг. Багато досліджень показують покращення зволоження та еластичності шкіри, але метааналіз 2025 року виявив, що незалежно профінансовані дослідження не показали значущого ефекту, тоді як профінансовані індустрією — показали. Якщо хочете спробувати, 2,5–10 г гідролізованого колагену на день — це доза, що використовувалася в більшості досліджень. Подбайте про достатнє споживання вітаміну C разом із ними."
        },
        {
          "q": "Чи може колагеновий крем відновити шкіру?",
          "a": "Ні — молекули колагену надто великі, щоб проникнути крізь бар'єр шкіри. Колагенові креми працюють як зволожувачі, що корисно, але на цьому механізм закінчується. Ретиноїди та сироватки з вітаміном C — це топічні інгредієнти з доказами реальної стимуляції вироблення колагену в дермі."
        },
        {
          "q": "Яка поживна речовина найважливіша для колагену шкіри?",
          "a": "Вітамін C. Без нього ферменти, що формують і зшивають колаген, не можуть працювати. Отримувати його достатньо з їжею — солодкий перець, ківі, цитрусові, броколі — важливіше за будь-яку добавку. Цинк, мідь і достатній білок також відіграють важливу роль."
        },
        {
          "q": "Чи впливає менопауза на колаген?",
          "a": "Так, суттєво. Естроген підтримує синтез колагену в шкірі, а його зниження під час перименопаузи та менопаузи пришвидшує втрату колагену приблизно на 1–2% на рік — більше, ніж пояснив би лише вік. ЗГТ має докази часткового відновлення колагену й еластичності шкіри. Поговоріть із лікарем або фахівцем із менопаузи, якщо це вас турбує."
        }
      ]
    }
  },
  {
    "slug": "perimenopause-weight-myths",
    "date": "2026-06-12",
    "image": "/images/perimenopause-weight-gain-myths.jpg",
    "cats": [
      "perimenopause"
    ],
    "en": {
      "cat": "Perimenopause",
      "title": "5 myths about perimenopause and weight",
      "excerpt": "Why the scale isn't the whole story — and what actually helps.",
      "meta": "12 June 2026 · 8 min read",
      "lead": "The scale isn't the whole story. Here's what actually changes in perimenopause — and what genuinely helps.",
      "seoTitle": "5 Myths About Perimenopause and Weight — What Changes",
      "metaDesc": "The scale isn't the whole story in perimenopause. Five myths about weight — from visceral fat and cortisol to muscle loss — and what actually helps.",
      "blocks": [
        {
          "t": "p",
          "text": "When my endocrinologist told me my weight was the same as last year and it was perfectly fine, he meant it as reassurance, but I found it frustrating."
        },
        {
          "t": "p",
          "text": "My dresses still fit, just differently. The belly fat I had never carried in my life, even after childbirth, was suddenly there, and nothing I tried was shifting it: not the under-desk treadmill I bought so I could keep moving through the working day, not the regular strength training sessions, not the months of being stricter with myself than I had ever been. If anything, the fat kept growing. I was exhausted and hungry and my body was quietly doing its own thing regardless."
        },
        {
          "t": "p",
          "text": "Nobody connected this to perimenopause. My endocrinologist pointed to the scale. My GP didn't mention hormones. I was told I was fine, which left me to figure out on my own that the rules I had been following — eat less, move more, be disciplined enough — had stopped applying. Something more fundamental had shifted underneath them, and I was the last to know."
        },
        {
          "t": "p",
          "text": "Here are five myths I wish I'd seen through much earlier."
        },
        {
          "t": "h",
          "text": "Myth 1: “If my weight hasn't changed, I'm fine”"
        },
        {
          "t": "p",
          "text": "My endocrinologist was quite certain of this one, and he wasn't being careless so much as working from a framework that simply doesn't account for what actually happens to women's bodies during perimenopause."
        },
        {
          "t": "p",
          "text": "Total weight and body composition are not the same thing. During the menopause transition, fat redistributes, often significantly, without the overall number on the scale changing at all. The fat that oestrogen had been directing to the hips, thighs and buttocks for decades starts migrating inward instead, accumulating around the organs rather than under the skin. Visceral fat, the kind that wraps around the liver, pancreas and intestines, increases from around 5–8% of total body fat before the transition to 15–20% after it."
        },
        {
          "t": "p",
          "text": "This matters metabolically. Visceral fat isn't the same as the soft subcutaneous fat you can pinch; it's biologically active in ways that drive insulin resistance and low-grade inflammation, and none of that registers on a scale."
        },
        {
          "t": "p",
          "text": "If your clothes are fitting differently around the middle while your weight looks fine on paper, you are not imagining it and you are not being irrational about a number. Your body is redistributing, and the scale is simply the wrong tool for measuring it."
        },
        {
          "t": "h",
          "text": "Myth 2: “I just need to eat less”"
        },
        {
          "t": "p",
          "text": "I spent a long time believing this one, and it sent me in completely the wrong direction."
        },
        {
          "t": "p",
          "text": "Calories still matter, but reducing them doesn't address where your body chooses to store or release fat, and in perimenopause that's being directed increasingly by hormones rather than by what you ate for dinner. Oestrogen has a direct role in fat distribution through receptor signalling in adipose tissue, and while it's present in meaningful amounts it keeps fat in the subcutaneous compartment: hips, thighs, buttocks. As it declines, that signal weakens and fat begins accumulating abdominally instead, and reducing calories doesn't change that mechanism."
        },
        {
          "t": "p",
          "text": "Sleep makes all of this considerably harder. Progesterone, which falls alongside oestrogen during perimenopause, has natural calming effects and supports sleep. When it drops, sleep disruption becomes very common, and poor sleep shifts ghrelin and leptin (the hormones that regulate hunger and fullness) in exactly the wrong directions. You're hungrier than you used to be, you feel full less reliably, and you're trying to sustain restriction through all of it."
        },
        {
          "t": "p",
          "text": "There were many nights when I couldn't fall asleep because of intense hunger. I would fight myself until 4am because I didn't want to add blood sugar issues on top of [everything with my diabetes](/blog/perimenopause-diabetes-blood-sugar/), but eventually, to get at least a couple of hours of sleep, I had to go and eat something."
        },
        {
          "t": "p",
          "text": "This nighttime hunger softened significantly after I started HRT, which confirmed for me personally that it wasn't something I could simply control through willpower."
        },
        {
          "t": "h",
          "text": "Myth 3: “More exercise will fix it”"
        },
        {
          "t": "p",
          "text": "I have real personal investment in correcting this one, because I made exactly this mistake and it cost me months."
        },
        {
          "t": "p",
          "text": "My instinct when nothing was working was to add more: more walking, more time on the treadmill, more cardio and dancing in addition to my strength training. What I didn't understand then is that sustained exercise without adequate recovery raises cortisol, which in a body already managing perimenopausal hormonal shifts and disrupted sleep specifically promotes abdominal fat storage. Your body interprets chronic overexertion as a signal to hold on to energy reserves, and adding more exhausting exercise to an already stressed system doesn't compensate for the hormonal picture; it adds to it."
        },
        {
          "t": "p",
          "text": "The shift that made a real difference was moving away from more cardio and towards strength training. Building and preserving muscle improves glucose handling, raises resting metabolic rate and protects bone density, all of which matter considerably more as oestrogen declines. Moving differently and recovering properly makes far more difference than simply moving more."
        },
        {
          "t": "h",
          "text": "Myth 4: “It's just ageing — there's nothing to do about it”"
        },
        {
          "t": "p",
          "text": "Age is part of this picture, but it's not the whole picture, and the distinction matters because hormonal factors are addressable in ways that ageing in isolation isn't."
        },
        {
          "t": "p",
          "text": "The specific changes of perimenopause, including visceral fat accumulation, muscle loss and declining insulin sensitivity, are driven meaningfully by falling oestrogen and progesterone, not simply by the passing of years."
        },
        {
          "t": "p",
          "text": "That means there are levers, and it's worth knowing what they are. HRT is one of them: research shows [it can partially reverse visceral fat accumulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC9258798/) and improve metabolic markers, and if you're noticing fat redistribution or finding it increasingly difficult to manage your weight despite consistent habits, it's a conversation worth having with a specialist who understands hormonal health properly. This is a decision for you and your doctor, not a recommendation from me, but the option exists and is too often not raised until much later than it could be."
        },
        {
          "t": "h",
          "text": "Myth 5: “Being strict enough will eventually work”"
        },
        {
          "t": "p",
          "text": "This one cost me the most, because the more it didn't work, the harder I pushed, and the harder I pushed, the worse things got, and I had no framework to understand why."
        },
        {
          "t": "p",
          "text": "Chronic caloric restriction is a physiological stressor, and so is exhausting exercise without adequate recovery. Research shows both can raise cortisol, and cortisol in a body already navigating perimenopausal hormonal changes specifically promotes abdominal fat storage — visceral fat tissue has a higher density of cortisol receptors than subcutaneous fat, which is part of why chronic stress tends to settle precisely where you least want it. The harder you restrict, the more you train through exhaustion, the more your body interprets this as a threat and holds on to the very fat you're trying to lose. I was doing everything I could, things were getting worse, and at the time I genuinely didn't know that was possible."
        },
        {
          "t": "p",
          "text": "What actually moved things was getting enough sleep, managing stress rather than pushing through it, shifting from more cardio to strength training, and [eating enough protein](/blog/protein-for-women-over-40/) at every meal to protect what muscle I had. None of these felt like doing more (the sleep and stress work in particular felt like doing considerably less), but they addressed what was actually driving the changes in my body, rather than fighting against it while the real cause went unaddressed."
        },
        {
          "t": "p",
          "text": "Adequate protein, resistance training, sleep quality and stress reduction are all available regardless of HRT, and each targets specific mechanisms rather than functioning as general lifestyle advice. That said, it's worth working through any significant dietary changes with your doctor rather than adopting something restrictive on your own — strict ketogenic diets, for instance, are increasingly popular, but very low carbohydrate intake can affect thyroid function and amplify cortisol responses, both of which are already under pressure during perimenopause, and the evidence for [keto specifically outperforming a balanced, protein-forward diet](https://www.medicalnewstoday.com/articles/keto-and-menopause) in this context simply isn't there."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Visceral fat increases significantly during perimenopause — even when overall weight is unchanged.",
              "detail": "A 2026 study in the Journal of Clinical Medicine found that across all BMI categories, postmenopausal women had significantly higher visceral fat and lower skeletal muscle mass than premenopausal women — even where total body weight was similar. The shift toward central adiposity is consistent and measurable regardless of calorie intake.",
              "cite": "Journal of Clinical Medicine · Cross-sectional study, 2026",
              "url": "https://www.mdpi.com/2077-0383/15/2/740"
            },
            {
              "claim": "Oestrogen controls fat distribution through direct receptor signalling in adipose tissue.",
              "detail": "A review in Frontiers in Endocrinology (2022) mapped how oestrogen and its receptors in fat tissue regulate fat metabolism and storage — favouring subcutaneous over visceral fat. As oestrogen falls, the mechanism directing fat to hips and thighs is lost, and visceral accumulation increases. This is a direct biological mechanism, not a consequence of eating more.",
              "cite": "Frontiers in Endocrinology · Review, 2022",
              "url": "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.921504/full"
            },
            {
              "claim": "Muscle loss in perimenopause is real — and resistance training is the most evidence-supported response.",
              "detail": "A 2026 review in the Journal of Cachexia, Sarcopenia and Muscle documented reductions of around −2.5% in skeletal muscle mass in perimenopausal women and −5.7% in postmenopausal women versus premenopausal women, with the transition years marking the steepest decline. Resistance training and adequate protein intake are the two most evidence-supported interventions.",
              "cite": "Journal of Cachexia, Sarcopenia and Muscle · Review, 2026",
              "url": "https://onlinelibrary.wiley.com/doi/10.1002/jcsm.70232"
            },
            {
              "claim": "Low-calorie dieting is a physiological stressor that raises cortisol.",
              "detail": "A 2010 study in Psychosomatic Medicine found that low-calorie dieting increases cortisol output — a stress response that, sustained over time, works against the very fat loss it is meant to achieve.",
              "cite": "Psychosomatic Medicine · 2010",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20368473/"
            },
            {
              "claim": "Cortisol acts preferentially on visceral fat — which is why chronic stress settles at the middle.",
              "detail": "Reviews of glucocorticoid action show that cortisol acts preferentially on visceral adipose tissue, which carries a higher density of cortisol receptors than subcutaneous fat, driving central fat accumulation under chronic physiological stress.",
              "cite": "Glucocorticoids & visceral adiposity · Review",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11907100/"
            },
            {
              "claim": "Resistance training leads non-pharmacological approaches for preserving muscle in menopausal women.",
              "detail": "A 2023 systematic review and meta-analysis of 27 randomised controlled trials in BMC Women's Health found that exercise — and resistance training in particular — was the most effective non-pharmacological approach for preserving muscle mass and strength through the menopausal transition.",
              "cite": "BMC Women's Health · Systematic review & meta-analysis, 2023",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, women's health writer living with type 1 diabetes",
          "text": "Lena Filatova has lived with type 1 diabetes for 23 years. She writes about women's health, perimenopause and long-term wellbeing at lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Why am I gaining weight in perimenopause?",
          "a": "For many women the bigger shift isn't weight gain but fat redistribution: fat moving from the hips and thighs toward the abdomen as oestrogen declines, with visceral fat increasing even when the scale hasn't moved. Sleep disruption, muscle loss and elevated cortisol from chronic stress or restriction all compound this. It's a hormonal picture more than a calorie one, and it's worth treating it as such."
        },
        {
          "q": "How do I lose weight during perimenopause?",
          "a": "Calories still matter, but they work better alongside the things that address the hormonal environment: enough protein to protect muscle, resistance training two to three times a week, better sleep and genuinely managing stress. For some women, HRT makes a meaningful difference to fat redistribution, which is worth discussing with a specialist who understands both hormonal health and your broader health picture."
        },
        {
          "q": "Does muscle really matter for perimenopause weight?",
          "a": "More than almost anything else. Muscle is metabolically active, raising resting metabolic rate and improving how your body handles glucose, and perimenopause accelerates its loss if you're not actively working against that with resistance training and enough protein. Building and preserving muscle is one of the most consequential things you can do for your body composition, energy and long-term metabolic health through this transition and beyond."
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза",
      "title": "5 міфів про перименопаузу та вагу",
      "excerpt": "Чому вага на терезах — не вся історія, і що справді допомагає.",
      "meta": "12 червня 2026 · 8 хв читання",
      "lead": "Вага на терезах — не вся історія. Ось що справді змінюється при перименопаузі і що дійсно допомагає.",
      "seoTitle": "5 міфів про перименопаузу та вагу — що насправді змінюється",
      "metaDesc": "Вага на терезах — не вся історія при перименопаузі. П'ять міфів про вагу — від вісцерального жиру до втрати м'язів — і що каже наука про те, що допомагає.",
      "blocks": [
        {
          "t": "p",
          "text": "Коли мій ендокринолог сказав, що моя вага така сама, як торік, і це цілком нормально, він мав на увазі заспокоєння, але мене це радше дратувало."
        },
        {
          "t": "p",
          "text": "Мої сукні все ще сідали, просто інакше. Жир на животі, якого я не мала ніколи в житті, навіть після пологів, раптом зʼявився, і ніщо з того, що я пробувала, його не зрушувало: ні бігова доріжка під столом, яку я купила, щоб рухатися протягом робочого дня, ні регулярні силові тренування, ні місяці, коли я була суворішою до себе, ніж будь-коли. Якщо вже на те, жир лише зростав. Я була виснажена й голодна, а моє тіло тихо робило своє, попри все."
        },
        {
          "t": "p",
          "text": "Ніхто не повʼязав це з перименопаузою. Мій ендокринолог указував на терези. Мій сімейний лікар не згадав про гормони. Мені казали, що я в нормі, і це залишило мене самій зʼясовувати, що правила, яких я дотримувалася — їж менше, рухайся більше, будь достатньо дисциплінованою — перестали працювати. Щось фундаментальніше змістилося під ними, а я дізналася про це остання."
        },
        {
          "t": "p",
          "text": "Ось пʼять міфів, які я хотіла б розвіяти набагато раніше."
        },
        {
          "t": "h",
          "text": "Міф 1: «Якщо моя вага не змінилася, я в нормі»"
        },
        {
          "t": "p",
          "text": "Мій ендокринолог був цілком певний цього, і він не був недбалим — просто працював у межах підходу, який просто не враховує того, що насправді відбувається з тілом жінки під час перименопаузи."
        },
        {
          "t": "p",
          "text": "Загальна вага та склад тіла — це не одне й те саме. Під час менопаузального переходу жир перерозподіляється, часто суттєво, при цьому загальна цифра на терезах може взагалі не змінитися. Жир, який естроген десятиліттями спрямовував на стегна, сідниці й задню поверхню ніг, починає мігрувати всередину, накопичуючись навколо органів, а не під шкірою. Вісцеральний жир, той, що огортає печінку, підшлункову й кишечник, зростає приблизно з 5–8% загального жиру тіла до переходу до 15–20% після нього."
        },
        {
          "t": "p",
          "text": "Це має метаболічне значення. Вісцеральний жир — не те саме, що мʼякий підшкірний жир, який можна вщипнути; він біологічно активний у спосіб, що спричиняє інсулінорезистентність і хронічне запалення низького ступеня, і нічого з цього терези не показують."
        },
        {
          "t": "p",
          "text": "Якщо ваш одяг інакше сідає в талії, тоді як вага на папері виглядає нормальною, ви цього не вигадуєте й не поводитеся ірраціонально через цифру. Ваше тіло перерозподіляється, а терези — просто хибний інструмент для його вимірювання."
        },
        {
          "t": "h",
          "text": "Міф 2: «Мені просто треба їсти менше»"
        },
        {
          "t": "p",
          "text": "Я довго вірила в це, і це повело мене зовсім у хибному напрямі."
        },
        {
          "t": "p",
          "text": "Калорії досі мають значення, але їх скорочення не впливає на те, де тіло вирішує зберігати чи вивільняти жир, а в перименопаузі це дедалі більше визначають гормони, а не те, що ви зʼїли на вечерю. Естроген має пряму роль у розподілі жиру через рецепторну сигналізацію в жировій тканині, і поки його достатньо, він утримує жир у підшкірному відділі: стегна, сідниці. Коли він знижується, цей сигнал слабшає, і жир починає накопичуватися в ділянці живота, а скорочення калорій цього механізму не змінює."
        },
        {
          "t": "p",
          "text": "Сон робить усе це значно важчим. Прогестерон, що падає разом з естрогеном під час перименопаузи, має природний заспокійливий ефект і підтримує сон. Коли він знижується, порушення сну стають дуже поширеними, а поганий сон зсуває грелін і лептин (гормони, що регулюють голод і насичення) саме в хибному напрямі. Ви голодніші, ніж раніше, насичення відчуваєте менш надійно, і водночас намагаєтеся утримувати обмеження."
        },
        {
          "t": "p",
          "text": "Було багато ночей, коли я не могла заснути через сильний голод. Я боролася із собою до 4-ї ранку, бо не хотіла додавати проблеми з цукром у крові до [всього, що вже було з моїм діабетом](/ua/blog/perimenopause-diabetes-blood-sugar/), але зрештою, щоб поспати бодай кілька годин, мусила встати й щось зʼїсти."
        },
        {
          "t": "p",
          "text": "Цей нічний голод значно послабшав після того, як я почала ЗГТ, і це особисто підтвердило мені, що це не те, що можна просто контролювати силою волі."
        },
        {
          "t": "h",
          "text": "Міф 3: «Більше вправ це виправить»"
        },
        {
          "t": "p",
          "text": "Я маю особисту причину виправити цей міф, бо зробила саме цю помилку, і вона коштувала мені місяців."
        },
        {
          "t": "p",
          "text": "Моїм інстинктом, коли ніщо не працювало, було додати більше: більше ходьби, більше часу на доріжці, більше кардіо й танців на додачу до силових. Чого я тоді не розуміла — це що тривалі навантаження без належного відновлення підвищують кортизол, який у тілі, що вже справляється з гормональними зрушеннями перименопаузи й порушеним сном, саме сприяє накопиченню жиру на животі. Тіло тлумачить хронічне перенапруження як сигнал утримувати запаси енергії, і додавання ще більше виснажливих вправ до й так перевантаженої системи не компенсує гормональної картини; воно її доповнює."
        },
        {
          "t": "p",
          "text": "Зміна, що дала справжню різницю, — це відхід від більшого кардіо до силових тренувань. Побудова й збереження мʼязів покращують оброблення глюкози, підвищують метаболізм спокою й захищають щільність кісток — усе це важить значно більше в міру зниження естрогену. Рухатися інакше й відновлюватися належно дає набагато більше, ніж просто рухатися більше."
        },
        {
          "t": "h",
          "text": "Міф 4: «Це просто вік — з цим нічого не вдієш»"
        },
        {
          "t": "p",
          "text": "Вік — частина цієї картини, але не вся картина, і ця відмінність важлива, бо гормональні чинники піддаються корекції в спосіб, у який вік сам по собі — ні."
        },
        {
          "t": "p",
          "text": "Специфічні зміни перименопаузи, зокрема накопичення вісцерального жиру, втрата мʼязів і зниження чутливості до інсуліну, суттєво зумовлені падінням естрогену й прогестерону, а не просто плином років."
        },
        {
          "t": "p",
          "text": "Це означає, що важелі є, і варто знати, які саме. ЗГТ — один із них: дослідження показують, що вона може [частково повернути назад накопичення вісцерального жиру](https://pmc.ncbi.nlm.nih.gov/articles/PMC9258798/) й покращити метаболічні показники, і якщо ви помічаєте перерозподіл жиру або дедалі важче керуєте вагою попри послідовні звички, це розмова, яку варто мати з фахівцем, що добре розуміється на гормональному здоровʼї. Це рішення для вас і вашого лікаря, а не порада від мене, але цей варіант існує й надто часто не порушується аж до значно пізнішого часу, ніж міг би."
        },
        {
          "t": "h",
          "text": "Міф 5: «Достатня суворість зрештою спрацює»"
        },
        {
          "t": "p",
          "text": "Цей міф коштував мені найдорожче, бо що більше це не працювало, то сильніше я тиснула, а що сильніше тиснула, то гіршало, і я не мала жодних рамок, щоб зрозуміти чому."
        },
        {
          "t": "p",
          "text": "Хронічне обмеження калорій — це фізіологічний стресор, як і виснажливі вправи без належного відновлення. Дослідження показують, що обидва можуть підвищувати кортизол, а кортизол у тілі, що вже проходить гормональні зміни перименопаузи, саме сприяє накопиченню жиру на животі — вісцеральна жирова тканина має вищу щільність кортизолових рецепторів, ніж підшкірна, і це частково пояснює, чому хронічний стрес осідає саме там, де ви найменше цього хочете. Що суворіше ви обмежуєте, що більше тренуєтеся через виснаження, то більше тіло сприймає це як загрозу й утримує саме той жир, який ви намагаєтеся втратити. Я робила все, що могла, ставало дедалі гірше, і тоді я справді не знала, що таке можливо."
        },
        {
          "t": "p",
          "text": "Що справді зрушило справу — це достатній сон, керування стресом замість продавлювання крізь нього, перехід від більшого кардіо до силових і [достатньо білка](/ua/blog/protein-for-women-over-40/) на кожен прийом їжі, щоб зберегти мʼязи, які я мала. Ніщо з цього не відчувалося як «робити більше» (сон і робота зі стресом, зокрема, відчувалися радше як робити значно менше), але воно впливало на те, що насправді керувало змінами в моєму тілі, а не боролося з ним, поки справжня причина лишалася непочутою."
        },
        {
          "t": "p",
          "text": "Достатній білок, силові тренування, якість сну й зниження стресу доступні незалежно від ЗГТ, і кожне з них націлене на конкретні механізми, а не є загальною порадою щодо способу життя. При цьому будь-які суттєві зміни в харчуванні варто проходити разом із лікарем, а не братися за щось обмежувальне самотужки — суворі кетогенні дієти, наприклад, дедалі популярніші, але дуже низьке споживання вуглеводів може впливати на функцію щитоподібної залози й посилювати кортизолову відповідь, а обидва й так під тиском під час перименопаузи, і доказів того, що саме [кето перевершує збалансоване харчування з достатнім білком](https://www.medicalnewstoday.com/articles/keto-and-menopause) у цьому контексті, просто немає."
        },
        {
          "t": "h",
          "text": "Що каже дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Вісцеральний жир суттєво зростає під час перименопаузи — навіть коли загальна вага не змінюється.",
              "detail": "Дослідження 2026 року в Journal of Clinical Medicine виявило, що в усіх категоріях ІМТ жінки в постменопаузі мали суттєво більше вісцерального жиру й менше скелетної мʼязової маси, ніж у пременопаузі — навіть за схожої загальної ваги. Зсув до центрального ожиріння послідовний і вимірний незалежно від споживання калорій.",
              "cite": "Journal of Clinical Medicine · Крос-секційне дослідження, 2026",
              "url": "https://www.mdpi.com/2077-0383/15/2/740"
            },
            {
              "claim": "Естроген контролює розподіл жиру через пряму рецепторну сигналізацію в жировій тканині.",
              "detail": "Огляд у Frontiers in Endocrinology (2022) описав, як естроген і його рецептори в жировій тканині регулюють метаболізм і зберігання жиру — на користь підшкірного, а не вісцерального. Коли естроген падає, механізм, що спрямовує жир на стегна, втрачається, і вісцеральне накопичення зростає. Це прямий біологічний механізм, а не наслідок того, що ви більше їсте.",
              "cite": "Frontiers in Endocrinology · Огляд, 2022",
              "url": "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.921504/full"
            },
            {
              "claim": "Втрата мʼязів у перименопаузі реальна — а силові тренування мають найбільше доказів.",
              "detail": "Огляд 2026 року в Journal of Cachexia, Sarcopenia and Muscle задокументував зниження скелетної мʼязової маси приблизно на −2,5% у жінок у перименопаузі та −5,7% у постменопаузі порівняно з пременопаузою, при цьому роки переходу — період найкрутішого спаду. Силові тренування й достатнє споживання білка — дві інтервенції з найбільшою доказовою базою.",
              "cite": "Journal of Cachexia, Sarcopenia and Muscle · Огляд, 2026",
              "url": "https://onlinelibrary.wiley.com/doi/10.1002/jcsm.70232"
            },
            {
              "claim": "Низькокалорійні дієти — це фізіологічний стресор, який підвищує кортизол.",
              "detail": "Дослідження 2010 року в Psychosomatic Medicine виявило, що низькокалорійні дієти підвищують вихід кортизолу — стресову відповідь, яка з часом працює проти тієї самої втрати жиру, заради якої її запускають.",
              "cite": "Psychosomatic Medicine · 2010",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20368473/"
            },
            {
              "claim": "Кортизол діє переважно на вісцеральний жир — тому хронічний стрес осідає саме на талії.",
              "detail": "Огляди дії глюкокортикоїдів показують, що кортизол діє переважно на вісцеральну жирову тканину, яка має вищу щільність кортизолових рецепторів, ніж підшкірна, сприяючи центральному накопиченню жиру за хронічного фізіологічного стресу.",
              "cite": "Глюкокортикоїди та вісцеральне ожиріння · Огляд",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11907100/"
            },
            {
              "claim": "Силові тренування очолюють нефармакологічні підходи до збереження мʼязів у жінок у менопаузі.",
              "detail": "Систематичний огляд і метааналіз 27 рандомізованих контрольованих досліджень 2023 року в BMC Women's Health виявив, що вправи — і силові зокрема — були найефективнішим нефармакологічним підходом до збереження мʼязової маси й сили під час менопаузального переходу.",
              "cite": "BMC Women's Health · Систематичний огляд і метааналіз, 2023",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, авторка про жіноче здоров'я, що живе з діабетом 1 типу",
          "text": "Lena Filatova живе з діабетом 1 типу вже 23 роки. Вона пише про жіноче здоров'я, перименопаузу та довгострокове благополуччя на lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Чому я набираю вагу під час перименопаузи?",
          "a": "Для багатьох жінок більший зсув — це не набір ваги, а перерозподіл жиру: жир переходить зі стегон до живота в міру зниження естрогену, і вісцеральний жир зростає, навіть коли терези не рухаються. Порушення сну, втрата мʼязів і підвищений кортизол через хронічний стрес чи обмеження — усе це посилює процес. Це радше гормональна картина, ніж калорійна, і варто ставитися до неї саме так."
        },
        {
          "q": "Як схуднути під час перименопаузи?",
          "a": "Калорії досі мають значення, але вони краще працюють поряд із тим, що впливає на гормональне середовище: достатньо білка, щоб зберегти мʼязи, силові тренування двічі-тричі на тиждень, кращий сон і справжнє керування стресом. Для деяких жінок ЗГТ помітно впливає на перерозподіл жиру, що варто обговорити з фахівцем, який розуміється і на гормональному здоровʼї, і на вашій ширшій картині здоровʼя."
        },
        {
          "q": "Чи справді мʼязи важливі для ваги при перименопаузі?",
          "a": "Більше, ніж майже будь-що інше. Мʼязи метаболічно активні: вони підвищують метаболізм спокою й покращують те, як тіло справляється з глюкозою, а перименопауза пришвидшує їх втрату, якщо ви активно не протидієте цьому силовими й достатнім білком. Побудова й збереження мʼязів — одна з найважливіших речей, які ви можете зробити для складу тіла, енергії та довгострокового метаболічного здоровʼя протягом цього переходу й після нього."
        }
      ]
    }
  },
  {
    "slug": "reading-glucose-patterns",
    "date": "2026-06-03",
    "image": "/images/how-to-read-glucose-patterns-diabetes.jpg",
    "cats": [
      "diabetes"
    ],
    "comingSoon": true,
    "en": {
      "cat": "Diabetes",
      "title": "How to read your glucose patterns",
      "seoTitle": "How to Read Your Glucose Patterns: A Simple Guide",
      "metaDesc": "A simple framework for making sense of your daily glucose numbers — spot the patterns behind your highs and lows and know exactly what to change.",
      "excerpt": "A simple framework for making sense of your daily numbers.",
      "meta": "3 June 2026 · 5 min read",
      "lead": "A simple framework for making sense of your daily numbers — without obsessing over every reading.",
      "body": [
        "Your glucose responds to food, movement, sleep and stress. Looking at patterns over several days tells you far more than any single number.",
        "Notice how you react to specific meals. Pairing carbohydrates with protein, fat and fibre usually flattens the spike that follows.",
        "A short walk after eating is one of the most reliable ways to steady your levels. Start there before changing anything else in your routine."
      ],
      "faq": [
        {
          "q": "How do I read my glucose patterns?",
          "a": "Look at patterns over several days rather than any single reading. Your glucose responds to food, movement, sleep and stress, so trends tell you far more than one number ever could."
        },
        {
          "q": "How do I lower a glucose spike after meals?",
          "a": "Pair carbohydrates with protein, fat and fibre to flatten the spike, and take a short walk after eating — one of the most reliable ways to steady your levels."
        },
        {
          "q": "Should I change my routine over one high reading?",
          "a": "No. A single high number rarely means much on its own. Watch how you react to specific meals across several days before adjusting anything."
        }
      ]
    },
    "ua": {
      "cat": "Діабет",
      "title": "Як читати свої рівні глюкози",
      "seoTitle": "Як читати свої патерни глюкози: простий гід",
      "metaDesc": "Проста система, щоб розібратися в щоденних показниках глюкози: побачити патерни за піками й падіннями та зрозуміти, що саме змінити в харчуванні.",
      "excerpt": "Проста система, щоб зрозуміти свої щоденні показники.",
      "meta": "3 червня 2026 · 5 хв читання",
      "lead": "Проста система, щоб зрозуміти свої щоденні показники — без одержимості кожним значенням.",
      "body": [
        "Глюкоза реагує на їжу, рух, сон і стрес. Патерни за кілька днів кажуть значно більше, ніж будь-яке окреме значення.",
        "Помічайте реакцію на конкретні страви. Поєднання вуглеводів із білком, жиром і клітковиною зазвичай згладжує стрибок.",
        "Коротка прогулянка після їжі — один із найнадійніших способів стабілізувати рівень. Почніть саме з цього."
      ],
      "faq": [
        {
          "q": "Як читати свої патерни глюкози?",
          "a": "Дивіться на патерни за кілька днів, а не на окреме значення. Глюкоза реагує на їжу, рух, сон і стрес, тож тенденції кажуть значно більше, ніж одне число."
        },
        {
          "q": "Як зменшити стрибок глюкози після їжі?",
          "a": "Поєднуйте вуглеводи з білком, жиром і клітковиною, щоб згладити стрибок, і йдіть на коротку прогулянку після їжі — один із найнадійніших способів стабілізувати рівень."
        },
        {
          "q": "Чи варто змінювати режим через одне високе значення?",
          "a": "Ні. Окреме високе число саме по собі рідко щось означає. Спостерігайте за реакцією на конкретні страви кілька днів, перш ніж щось змінювати."
        }
      ]
    }
  },
  {
    "slug": "cortisol-belly-perimenopause",
    "date": "2026-07-15",
    "image": "/images/cortisol-belly-perimenopause.jpg",
    "cats": [
      "perimenopause",
      "weight"
    ],
    "en": {
      "cat": "Perimenopause",
      "title": "Cortisol belly in perimenopause: what's actually true",
      "excerpt": "“Cortisol belly” is everywhere — and mostly misunderstood. What's really true about cortisol, stress and abdominal fat in perimenopause.",
      "meta": "15 July 2026 · 8 min read",
      "lead": "“Cortisol belly” is all over social media right now — blamed for the weight that won't shift, with a supplement or “cortisol cocktail” ready to fix it. Here's what's real, what isn't, and what actually changes in perimenopause.",
      "seoTitle": "Cortisol Belly in Perimenopause: What's Actually True",
      "metaDesc": "“Cortisol belly” is everywhere and mostly misunderstood. What's actually true about cortisol, stress and belly fat in perimenopause — and what genuinely helps.",
      "blocks": [
        {
          "t": "p",
          "text": "A few years into perimenopause, I had belly fat I had never carried before — not after childbirth, not at any point in my life — and nothing I did was shifting it. So when I first saw people online talking about “cortisol belly,” it landed. Finally, a name for it, and apparently a reason: stress hormones. The relief lasted right up until the next post tried to sell me a supplement to “flush” my cortisol."
        },
        {
          "t": "p",
          "text": "The truth sits somewhere in the middle, and I think it's worth being honest about both halves of it. Cortisol and where your body stores fat really are connected. But “cortisol belly” as it's usually sold — a single villain, fixable with a powder — isn't how any of this works, and in perimenopause the picture is more layered still."
        },
        {
          "t": "h",
          "text": "First, what “cortisol belly” is not"
        },
        {
          "t": "p",
          "text": "“Cortisol belly” is not a medical diagnosis. You won't find it in your GP's notes, because it isn't a condition — it's a popular label for abdominal fat that someone has decided to attribute to stress. Cortisol itself is not a toxin or a villain; it's an essential hormone that gets you out of bed in the morning, helps manage inflammation and helps regulate blood sugar. You are not meant to “flush” it, and you can't detox it with a drink."
        },
        {
          "t": "p",
          "text": "There is a real condition of genuinely, persistently high cortisol — Cushing's syndrome — and it does cause fat to build around the tummy, upper back and face. But it is rare, it's usually caused by long-term steroid medication or a small growth on a gland, and crucially it's diagnosed with an actual [cortisol test in blood, urine or saliva](https://www.nhs.uk/conditions/cushings-syndrome/), not by looking at your waistline. Everyday stress is not Cushing's, and feeling frazzled does not mean your cortisol is clinically high. If you genuinely suspect it, that's a GP conversation and a test, not a supplement."
        },
        {
          "t": "h",
          "text": "The part that is true: cortisol really does prefer your middle"
        },
        {
          "t": "p",
          "text": "Here's the half worth taking seriously. When cortisol does drive fat storage, it acts preferentially on the fat deep inside your abdomen — the visceral fat around your organs — rather than the softer fat under your skin. That's not a marketing claim; it's mechanism. Visceral fat carries [two to four times the density of cortisol receptors](https://pmc.ncbi.nlm.nih.gov/articles/PMC3959161/) that subcutaneous fat does, and it makes more of the enzyme (11β-HSD1) that reactivates cortisol locally inside the tissue. So when cortisol is elevated over long periods, the belly is exactly where it tends to settle."
        },
        {
          "t": "p",
          "text": "There's also a striking piece of research showing the relationship runs both ways. In a study of premenopausal women, those who [carried more fat around the middle secreted more cortisol under stress](https://pubmed.ncbi.nlm.nih.gov/11020091/) — and kept secreting it even once the stressful task became familiar, rather than adapting the way the other women did. Stress and central fat feed each other. So the instinct behind “cortisol belly” isn't mad. It's the powder-that-fixes-it part that is."
        },
        {
          "t": "h",
          "text": "Why perimenopause changes the picture"
        },
        {
          "t": "p",
          "text": "This is where it gets specific to us, and where the simple “stress hormone” story stops being enough. Two things are happening at once in perimenopause, and they compound."
        },
        {
          "t": "p",
          "text": "The first is oestrogen. For decades it directs fat towards your hips and thighs; as it declines, that signal weakens and fat migrates inward to the abdomen instead. The [British Menopause Society](https://thebms.org.uk/wp-content/uploads/2023/06/19-BMS-TfC-Menopause-Nutrition-and-Weight-Gain-JUNE2023-A.pdf) puts numbers on it: visceral fat rises from around 5–8% of body weight before the transition to 10–15% after it, and most of the weight women gain in these years — roughly 1.5kg a year on average — settles around the middle. That happens partly independently of stress. I wrote more about this in [five myths about perimenopause and weight](/blog/perimenopause-weight-myths/)."
        },
        {
          "t": "p",
          "text": "The second is that cortisol itself appears to rise across the menopause transition. In the Seattle Midlife Women's Health Study, [overnight cortisol climbed through the transition and peaked in its late stage](https://pmc.ncbi.nlm.nih.gov/articles/PMC2749064/) — and, interestingly, this was best predicted by the hormonal shifts of menopause rather than by how stressed the women reported feeling. In other words, some of the cortisol rise in these years is being driven by your changing hormones, not only by your to-do list."
        },
        {
          "t": "p",
          "text": "Sleep sits on top of both. Progesterone, which also falls in perimenopause, helps you sleep; when it drops, broken nights become common — and losing sleep [can nudge cortisol upward](https://pubmed.ncbi.nlm.nih.gov/38777757/), which is exactly the direction you don't want. It becomes a loop: poorer sleep, higher cortisol, more central fat, and a body that feels increasingly unlike the one you knew."
        },
        {
          "t": "h",
          "text": "The trap I fell into"
        },
        {
          "t": "p",
          "text": "Knowing all this, here's the mistake I made anyway, and the one I most want to warn other women off. When nothing was working, I did what I'd always been taught to do: ate less, and moved more. Much less, and much more."
        },
        {
          "t": "p",
          "text": "The problem is that both of those, taken to an extreme, are physiological stressors in their own right. Sustained under-eating [raises cortisol](https://pubmed.ncbi.nlm.nih.gov/20368473/) — one study found low-calorie dieting measurably increased it. Hard exercise without adequate recovery does the same. So there I was, adding two more sources of cortisol to a system where cortisol was already part of the problem, and wondering why the belly fat was getting worse rather than better. I wasn't failing at discipline. I was, without knowing it, pouring petrol on the exact fire I was trying to put out."
        },
        {
          "t": "h",
          "text": "What actually helps (and what to skip)"
        },
        {
          "t": "p",
          "text": "The genuinely useful news is that the things that help are unglamorous, mostly free, and not sold in a jar. None of them “target” cortisol the way the supplements promise — they lower the load on a stressed system so your body stops behaving as though it's under threat."
        },
        {
          "t": "p",
          "text": "Protect your sleep as if it were a medical intervention, because functionally it is. Manage stress rather than pushing through it — in one trial, the [women who most reduced their stress and cortisol also lost the most abdominal fat](https://pmc.ncbi.nlm.nih.gov/articles/PMC3184496/), even though the programme on its own wasn't a magic bullet. Move in a way that builds rather than drains: [resistance training is the single most evidence-backed](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/) thing you can do to hold on to muscle through menopause, and it doesn't spike cortisol the way relentless cardio can. Eat [enough protein](/blog/protein-for-women-over-40/) to protect that muscle. Both the [NHS](https://www.nhs.uk/conditions/menopause-and-perimenopause/things-you-can-do/) and the British Menopause Society land in the same place: strength work, protein, decent sleep, sensible drinking."
        },
        {
          "t": "p",
          "text": "And the supplements, the “cortisol cocktails,” the adrenal detoxes? Skip them. There's no good evidence they lower cortisol or shift abdominal fat, and some are little more than sugar and salt with good marketing. If your symptoms are significant, the conversation worth having is with a doctor who understands hormonal health — about whether HRT has a role for you, since restoring oestrogen can help with fat redistribution. That's a decision for you and your clinician, not a recommendation from me, and certainly not something to replace with a powder."
        },
        {
          "t": "p",
          "text": "“Cortisol belly” gets one thing right: your body in perimenopause is not misbehaving out of laziness, and the old rules genuinely have stopped applying. It gets one big thing wrong in suggesting you can buy your way out of it. The real levers are quieter than that — and, unlike the supplements, they actually work."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Genuinely high cortisol is a rare, measurable medical condition — not the same as everyday stress.",
              "detail": "Cushing's syndrome, the condition of persistently excess cortisol, does cause fat to build around the tummy, upper back and face — but it is rare, usually caused by long-term steroid medication or a small glandular growth, and diagnosed with a blood, urine or saliva cortisol test rather than by appearance. Feeling stressed does not mean cortisol is clinically high.",
              "cite": "NHS · Cushing's syndrome",
              "url": "https://www.nhs.uk/conditions/cushings-syndrome/"
            },
            {
              "claim": "When cortisol drives fat storage, it acts preferentially on visceral belly fat.",
              "detail": "Visceral (intra-abdominal) fat carries two-to-four times the density of glucocorticoid receptors found in subcutaneous fat, and shows greater local activity of 11β-HSD1, the enzyme that regenerates active cortisol within the tissue. This is the biological reason chronically elevated cortisol tends to accumulate centrally rather than under the skin.",
              "cite": "Molecular & Cellular Endocrinology · Review, 2014",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3959161/"
            },
            {
              "claim": "Stress and central fat reinforce each other.",
              "detail": "In a study of 59 premenopausal women, those with more fat around the middle secreted significantly more cortisol in response to stress — and, unlike the others, kept over-secreting it even once the challenge became familiar, showing less adaptation to repeated stress.",
              "cite": "Epel et al., Psychosomatic Medicine · 2000",
              "url": "https://pubmed.ncbi.nlm.nih.gov/11020091/"
            },
            {
              "claim": "Cortisol rises across the menopausal transition — driven largely by hormonal change.",
              "detail": "The Seattle Midlife Women's Health Study found overnight urinary cortisol increased across the menopausal transition and peaked in its late stage, and that this was best predicted by reproductive hormone changes (oestrogen, testosterone, FSH) rather than by perceived stress or social factors.",
              "cite": "Woods et al., Seattle Midlife Women's Health Study · 2009",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2749064/"
            },
            {
              "claim": "Falling oestrogen shifts fat to the abdomen in perimenopause.",
              "detail": "The British Menopause Society reports that as oestrogen declines, visceral fat rises from around 5–8% of body weight to 10–15%, with most menopausal weight gain — roughly 1.5kg a year on average — accumulating around the abdomen and upper body. It recommends resistance training, adequate protein and moderated alcohol.",
              "cite": "British Menopause Society · Menopause: Nutrition and Weight Gain, 2023",
              "url": "https://thebms.org.uk/wp-content/uploads/2023/06/19-BMS-TfC-Menopause-Nutrition-and-Weight-Gain-JUNE2023-A.pdf"
            },
            {
              "claim": "Losing sleep can push cortisol up — and perimenopause disrupts sleep.",
              "detail": "A 2024 systematic review and meta-analysis found acute sleep deprivation raised blood cortisol levels, though the overall effect across all measures was small and mixed. As progesterone falls in perimenopause, disrupted sleep becomes common, feeding into the same cortisol pathway.",
              "cite": "Systematic review & meta-analysis · 2024",
              "url": "https://pubmed.ncbi.nlm.nih.gov/38777757/"
            },
            {
              "claim": "Severe calorie restriction is itself a stressor that raises cortisol.",
              "detail": "A controlled study found that low-calorie dieting increased cortisol output — meaning that eating far too little, sustained over time, can work against the very fat loss it is meant to achieve.",
              "cite": "Tomiyama et al., Psychosomatic Medicine · 2010",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20368473/"
            },
            {
              "claim": "Resistance training is the most evidence-backed way to protect muscle through menopause.",
              "detail": "A 2023 systematic review and meta-analysis of 27 randomised controlled trials found exercise — resistance training in particular — was the most effective non-pharmacological approach for preserving muscle mass and strength across the menopausal transition, without the cortisol load of excessive cardio.",
              "cite": "BMC Women's Health · Systematic review & meta-analysis, 2023",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, women's health writer living with type 1 diabetes",
          "text": "Lena Filatova has lived with type 1 diabetes for 23 years. She writes about women's health, perimenopause and long-term wellbeing at lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Is “cortisol belly” real?",
          "a": "Partly. “Cortisol belly” isn't a medical diagnosis, and everyday stress doesn't make your cortisol clinically high. But the underlying link is real: when cortisol is elevated over long periods it does tend to drive fat to the visceral store deep in the abdomen, because that fat carries far more cortisol receptors than fat under the skin. In perimenopause, falling oestrogen and rising cortisol push in the same direction, so the middle is exactly where fat tends to settle."
        },
        {
          "q": "How do I get rid of cortisol belly in perimenopause?",
          "a": "By lowering the load on a stressed system rather than attacking it. That means protecting sleep, genuinely managing stress instead of pushing through it, strength training two to three times a week, and enough protein to hold on to muscle. Paradoxically, crash dieting and relentless cardio can make it worse, because both raise cortisol themselves. For some women HRT helps with fat redistribution — a conversation worth having with a doctor who understands hormonal health."
        },
        {
          "q": "Do cortisol supplements or “cortisol cocktails” work?",
          "a": "There's no good evidence that cortisol supplements, “adrenal detoxes” or viral “cortisol cocktails” lower cortisol or shift abdominal fat — many are simply sugar and salt with clever marketing. Cortisol is an essential hormone, not a toxin to flush. If you genuinely suspect abnormally high cortisol, that's a matter for a GP and a proper test, not a supplement."
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза",
      "title": "Кортизоловий живіт при перименопаузі: що насправді правда",
      "excerpt": "«Кортизоловий живіт» — скрізь і переважно неправильно зрозумілий. Що справді правда про кортизол, стрес і жир на животі при перименопаузі.",
      "meta": "15 липня 2026 · 8 хв читання",
      "lead": "«Кортизоловий живіт» зараз скрізь у соцмережах — його звинувачують у вазі, яка не зрушується, і пропонують добавку чи «кортизоловий коктейль», щоб це виправити. Ось що справді правда, що ні, і що насправді змінюється при перименопаузі.",
      "seoTitle": "Кортизоловий живіт при перименопаузі: що правда",
      "metaDesc": "«Кортизоловий живіт» — скрізь і переважно неправильно зрозумілий. Що насправді правда про кортизол, стрес і жир на животі при перименопаузі — і що справді допомагає.",
      "blocks": [
        {
          "t": "p",
          "text": "Через кілька років перименопаузи в мене з’явився жир на животі, якого я ніколи не мала — ні після пологів, ні в будь-який інший момент життя — і ніщо з того, що я робила, його не зрушувало. Тож коли я вперше побачила, як люди в мережі говорять про «кортизоловий живіт», це влучило. Нарешті назва для цього і, схоже, причина: гормони стресу. Облегшення тривало рівно до того моменту, як наступний допис намагався продати мені добавку, щоб «вимити» мій кортизол."
        },
        {
          "t": "p",
          "text": "Правда лежить десь посередині, і варто бути чесними щодо обох її половин. Кортизол і те, де тіло зберігає жир, справді пов’язані. Але «кортизоловий живіт» у тому вигляді, як його зазвичай продають — єдиний лиходій, якого можна подолати порошком — це не те, як це працює, а при перименопаузі картина ще багатошаровіша."
        },
        {
          "t": "h",
          "text": "Спершу — чим «кортизоловий живіт» не є"
        },
        {
          "t": "p",
          "text": "«Кортизоловий живіт» — це не медичний діагноз. Ви не знайдете його в записах лікаря, бо це не стан — це популярна назва для жиру на животі, який хтось вирішив приписати стресу. Сам кортизол не є токсином чи лиходієм; це життєво важливий гормон, який підіймає вас з ліжка вранці, допомагає керувати запаленням і регулювати цукор у крові. Його не треба «вимивати», і ви не можете детоксувати його напоєм."
        },
        {
          "t": "p",
          "text": "Існує реальний стан справді стійко високого кортизолу — синдром Кушинга — і він справді спричиняє накопичення жиру навколо живота, верхньої частини спини та обличчя. Але він рідкісний, зазвичай спричинений тривалим прийомом стероїдів або невеликим утворенням на залозі, і — головне — діагностується [аналізом кортизолу в крові, сечі або слині](https://www.nhs.uk/conditions/cushings-syndrome/), а не поглядом на талію. Повсякденний стрес — це не синдром Кушинга, і відчуття виснаженості не означає, що ваш кортизол клінічно високий. Якщо ви справді підозрюєте це, це розмова з лікарем і аналіз, а не добавка."
        },
        {
          "t": "h",
          "text": "Що правда: кортизол справді надає перевагу вашій талії"
        },
        {
          "t": "p",
          "text": "Ось половина, яку варто сприймати серйозно. Коли кортизол справді стимулює накопичення жиру, він діє переважно на жир глибоко всередині живота — вісцеральний жир навколо органів — а не на м’який підшкірний жир. Це не маркетингове твердження, а механізм. Вісцеральний жир має [у два–чотири рази вищу щільність рецепторів кортизолу](https://pmc.ncbi.nlm.nih.gov/articles/PMC3959161/), ніж підшкірний, і виробляє більше ферменту (11β-HSD1), який реактивує кортизол місцево всередині тканини. Тож коли кортизол підвищений тривалий час, живіт — саме те місце, де він схильний осідати."
        },
        {
          "t": "p",
          "text": "Є й вражаюче дослідження, яке показує, що зв’язок працює в обидва боки. У дослідженні жінок у пременопаузі ті, хто [мав більше жиру навколо талії, виділяли більше кортизолу під час стресу](https://pubmed.ncbi.nlm.nih.gov/11020091/) — і продовжували виділяти його навіть коли завдання ставало знайомим, а не адаптувалися, як інші жінки. Стрес і центральний жир живлять одне одного. Тож інтуїція за «кортизоловим животом» не божевільна. Божевільна частина — це порошок, що начебто все виправляє."
        },
        {
          "t": "h",
          "text": "Чому перименопауза змінює картину"
        },
        {
          "t": "p",
          "text": "Ось де це стає специфічним саме для нас і де проста історія про «гормон стресу» перестає бути достатньою. У перименопаузі водночас відбуваються дві речі, і вони посилюють одна одну."
        },
        {
          "t": "p",
          "text": "Перше — це естроген. Десятиліттями він спрямовує жир до стегон і сідниць; коли він знижується, цей сигнал слабшає, і жир натомість мігрує всередину, до живота. [Британське товариство менопаузи](https://thebms.org.uk/wp-content/uploads/2023/06/19-BMS-TfC-Menopause-Nutrition-and-Weight-Gain-JUNE2023-A.pdf) наводить цифри: вісцеральний жир зростає з приблизно 5–8% ваги тіла до переходу до 10–15% після нього, а більша частина ваги, яку жінки набирають у ці роки — у середньому близько 1,5 кг на рік — осідає навколо талії. Це відбувається частково незалежно від стресу. Більше про це я писала в [п’ятьох міфах про перименопаузу та вагу](/ua/blog/perimenopause-weight-myths/)."
        },
        {
          "t": "p",
          "text": "Друге — це те, що сам кортизол, схоже, зростає протягом менопаузального переходу. У Seattle Midlife Women's Health Study [нічний кортизол зростав протягом переходу й досягав піку на його пізній стадії](https://pmc.ncbi.nlm.nih.gov/articles/PMC2749064/) — і, цікаво, це найкраще прогнозувалося гормональними зрушеннями менопаузи, а не тим, наскільки стресованими почувалися жінки. Інакше кажучи, частина зростання кортизолу в ці роки зумовлена вашими гормонами, що змінюються, а не лише списком ваших справ."
        },
        {
          "t": "p",
          "text": "Сон накладається на обидва. Прогестерон, який також падає в перименопаузі, допомагає спати; коли він знижується, перервані ночі стають звичними — а втрата сну [може підштовхувати кортизол угору](https://pubmed.ncbi.nlm.nih.gov/38777757/), а це саме той напрям, якого ви не хочете. Це стає циклом: гірший сон, вищий кортизол, більше центрального жиру і тіло, яке дедалі менше схоже на те, яке ви знали."
        },
        {
          "t": "h",
          "text": "Пастка, у яку я потрапила"
        },
        {
          "t": "p",
          "text": "Знаючи все це, ось помилка, яку я все одно зробила і від якої найбільше хочу застерегти інших жінок. Коли ніщо не працювало, я зробила те, чого мене завжди вчили: їла менше й рухалася більше. Набагато менше й набагато більше."
        },
        {
          "t": "p",
          "text": "Проблема в тому, що обидва ці підходи, доведені до крайнощів, самі по собі є фізіологічними стресорами. Тривале недоїдання [підвищує кортизол](https://pubmed.ncbi.nlm.nih.gov/20368473/) — одне дослідження виявило, що низькокалорійна дієта вимірно його підвищувала. Важкі вправи без належного відновлення роблять те саме. Тож от я, додаючи ще два джерела кортизолу до системи, де кортизол уже був частиною проблеми, дивувалася, чому жир на животі ставав гіршим, а не кращим. Я не зазнавала поразки в дисципліні. Я, сама того не знаючи, підливала бензин у той самий вогонь, який намагалася загасити."
        },
        {
          "t": "h",
          "text": "Що справді допомагає (і що пропустити)"
        },
        {
          "t": "p",
          "text": "Справді корисна новина в тому, що те, що допомагає, — неефектне, переважно безкоштовне й не продається в баночці. Ніщо з цього не «цілиться» у кортизол так, як обіцяють добавки — вони знижують навантаження на стресовану систему, щоб тіло перестало поводитися так, ніби йому щось загрожує."
        },
        {
          "t": "p",
          "text": "Захищайте свій сон так, ніби це медичне втручання, бо функціонально це так і є. Керуйте стресом, а не продавлюйтеся крізь нього — в одному дослідженні [жінки, які найбільше знизили стрес і кортизол, також найбільше втратили жиру на животі](https://pmc.ncbi.nlm.nih.gov/articles/PMC3184496/), хоча сама програма не була чарівною паличкою. Рухайтеся так, щоб це будувало, а не виснажувало: [силові тренування — найбільш обґрунтоване доказами](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/), що ви можете зробити, щоб зберегти м’язи під час менопаузи, і вони не підвищують кортизол так, як безкінечне кардіо. Їжте [достатньо білка](/ua/blog/protein-for-women-over-40/), щоб захистити ці м’язи. І [NHS](https://www.nhs.uk/conditions/menopause-and-perimenopause/things-you-can-do/), і Британське товариство менопаузи сходяться в одному: силові вправи, білок, гідний сон, помірність у алкоголі."
        },
        {
          "t": "p",
          "text": "А добавки, «кортизолові коктейлі», адреналові детокси? Пропустіть. Немає вагомих доказів, що вони знижують кортизол або зрушують жир на животі, а деякі — це лише цукор і сіль із гарним маркетингом. Якщо ваші симптоми суттєві, варто поговорити з лікарем, який розуміється на гормональному здоров’ї — про те, чи є для вас роль у ЗГТ, оскільки відновлення естрогену може допомогти з перерозподілом жиру. Це рішення для вас і вашого лікаря, а не порада від мене, і вже точно не те, що можна замінити порошком."
        },
        {
          "t": "p",
          "text": "«Кортизоловий живіт» має рацію в одному: ваше тіло в перименопаузі не поводиться погано через лінощі, і старі правила справді перестали діяти. Але воно глибоко помиляється, коли припускає, що ви можете купити собі вихід із цього. Справжні важелі тихіші — і, на відміну від добавок, вони справді працюють."
        },
        {
          "t": "h",
          "text": "Що каже дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Справді високий кортизол — це рідкісний, вимірний медичний стан, а не те саме, що повсякденний стрес.",
              "detail": "Синдром Кушинга, стан стійко надлишкового кортизолу, справді спричиняє накопичення жиру навколо живота, верхньої частини спини та обличчя — але він рідкісний, зазвичай спричинений тривалим прийомом стероїдів або невеликим утворенням на залозі, і діагностується аналізом кортизолу в крові, сечі або слині, а не за зовнішнім виглядом.",
              "cite": "NHS · Синдром Кушинга",
              "url": "https://www.nhs.uk/conditions/cushings-syndrome/"
            },
            {
              "claim": "Коли кортизол стимулює накопичення жиру, він діє переважно на вісцеральний жир живота.",
              "detail": "Вісцеральний (внутрішньочеревний) жир має у два–чотири рази вищу щільність глюкокортикоїдних рецепторів, ніж підшкірний, і вищу місцеву активність 11β-HSD1 — ферменту, який відновлює активний кортизол усередині тканини. Це біологічна причина, чому хронічно підвищений кортизол схильний накопичуватися центрально, а не під шкірою.",
              "cite": "Molecular & Cellular Endocrinology · Огляд, 2014",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3959161/"
            },
            {
              "claim": "Стрес і центральний жир посилюють одне одного.",
              "detail": "У дослідженні 59 жінок у пременопаузі ті, хто мав більше жиру навколо талії, виділяли суттєво більше кортизолу у відповідь на стрес — і, на відміну від інших, продовжували надмірно виділяти його навіть коли завдання ставало знайомим, показуючи меншу адаптацію до повторного стресу.",
              "cite": "Epel та ін., Psychosomatic Medicine · 2000",
              "url": "https://pubmed.ncbi.nlm.nih.gov/11020091/"
            },
            {
              "claim": "Кортизол зростає протягом менопаузального переходу — значною мірою через гормональні зміни.",
              "detail": "Seattle Midlife Women's Health Study виявило, що нічний кортизол у сечі зростав протягом менопаузального переходу й досягав піку на його пізній стадії, і що це найкраще прогнозувалося змінами репродуктивних гормонів (естроген, тестостерон, ФСГ), а не суб’єктивним стресом чи соціальними чинниками.",
              "cite": "Woods та ін., Seattle Midlife Women's Health Study · 2009",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2749064/"
            },
            {
              "claim": "Падіння естрогену зміщує жир до живота в перименопаузі.",
              "detail": "Британське товариство менопаузи повідомляє, що зі зниженням естрогену вісцеральний жир зростає з приблизно 5–8% ваги тіла до 10–15%, при цьому більша частина менопаузального набору ваги — у середньому близько 1,5 кг на рік — накопичується навколо живота та верхньої частини тіла. Воно рекомендує силові тренування, достатньо білка та помірність у алкоголі.",
              "cite": "British Menopause Society · Menopause: Nutrition and Weight Gain, 2023",
              "url": "https://thebms.org.uk/wp-content/uploads/2023/06/19-BMS-TfC-Menopause-Nutrition-and-Weight-Gain-JUNE2023-A.pdf"
            },
            {
              "claim": "Втрата сну може підвищувати кортизол — а перименопауза порушує сон.",
              "detail": "Систематичний огляд і метааналіз 2024 року виявив, що гостре недосипання підвищувало рівень кортизолу в крові, хоча загальний ефект за всіма показниками був невеликим і неоднозначним. Оскільки прогестерон падає в перименопаузі, порушення сну стає звичним, живлячи той самий кортизоловий шлях.",
              "cite": "Систематичний огляд і метааналіз · 2024",
              "url": "https://pubmed.ncbi.nlm.nih.gov/38777757/"
            },
            {
              "claim": "Жорстке обмеження калорій саме по собі є стресором, що підвищує кортизол.",
              "detail": "Контрольоване дослідження виявило, що низькокалорійна дієта підвищувала вихід кортизолу — тобто надто мале харчування, продовжене в часі, може працювати проти тієї самої втрати жиру, заради якої його запускають.",
              "cite": "Tomiyama та ін., Psychosomatic Medicine · 2010",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20368473/"
            },
            {
              "claim": "Силові тренування — найобґрунтованіший доказами спосіб зберегти м’язи під час менопаузи.",
              "detail": "Систематичний огляд і метааналіз 2023 року з 27 рандомізованих контрольованих досліджень виявив, що вправи — зокрема силові — були найефективнішим нефармакологічним підходом до збереження м’язової маси та сили під час менопаузального переходу, без кортизолового навантаження надмірного кардіо.",
              "cite": "BMC Women's Health · Систематичний огляд і метааналіз, 2023",
              "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10647115/"
            }
          ]
        },
        {
          "t": "bio",
          "name": "Lena Filatova",
          "img": "/images/lena-filatova-author.jpg",
          "alt": "Lena Filatova, авторка про жіноче здоров’я, яка живе з діабетом 1 типу",
          "text": "Lena Filatova живе з діабетом 1 типу вже 23 роки. Вона пише про жіноче здоров’я, перименопаузу та довготривале благополуччя на lenafilatova.co.uk."
        }
      ],
      "faq": [
        {
          "q": "Чи реальний «кортизоловий живіт»?",
          "a": "Частково. «Кортизоловий живіт» — це не медичний діагноз, і повсякденний стрес не робить ваш кортизол клінічно високим. Але глибинний зв’язок реальний: коли кортизол підвищений тривалий час, він справді схильний спрямовувати жир до вісцерального депо глибоко в животі, бо цей жир має набагато більше рецепторів кортизолу, ніж підшкірний. У перименопаузі падіння естрогену й зростання кортизолу діють в одному напрямі, тож талія — саме те місце, де жир схильний осідати."
        },
        {
          "q": "Як позбутися кортизолового живота в перименопаузі?",
          "a": "Знижуючи навантаження на стресовану систему, а не атакуючи її. Це означає захищати сон, справді керувати стресом замість продавлювання крізь нього, силові тренування два–три рази на тиждень і достатньо білка, щоб зберегти м’язи. Парадоксально, голодні дієти й безкінечне кардіо можуть погіршити ситуацію, бо обидва самі підвищують кортизол. Деяким жінкам ЗГТ допомагає з перерозподілом жиру — це розмова, яку варто мати з лікарем, який розуміється на гормональному здоров’ї."
        },
        {
          "q": "Чи працюють кортизолові добавки чи «кортизолові коктейлі»?",
          "a": "Немає вагомих доказів, що кортизолові добавки, «адреналові детокси» або вірусні «кортизолові коктейлі» знижують кортизол або зрушують жир на животі — багато з них просто цукор і сіль із хитрим маркетингом. Кортизол — це життєво важливий гормон, а не токсин, який треба вимивати. Якщо ви справді підозрюєте аномально високий кортизол, це питання до лікаря й належного аналізу, а не добавки."
        }
      ]
    }
  },
  {
    "slug": "anxiety-brain-fog-top-menopause-symptom",
    "date": "2026-07-17",
    "image": "/images/anxiety-brain-fog-top-menopause-symptom.jpg",
    "cats": [
      "perimenopause"
    ],
    "en": {
      "cat": "Perimenopause",
      "title": "Anxiety and brain fog, not hot flashes, are now women's top menopause complaint",
      "seoTitle": "Anxiety & Brain Fog Now Top Menopause Symptom",
      "metaDesc": "A survey of over 2,000 women finds anxiety and brain fog have overtaken hot flashes as the leading menopause symptom. What's driving the shift.",
      "excerpt": "Bonafide Health's sixth annual survey of over 2,000 women finds anxiety, brain fog and declining motivation have overtaken hot flashes as the leading menopause symptom — and nearly half say it's hit their income.",
      "meta": "17 July 2026 · 3 min read",
      "lead": "For years, menopause conversations have centred on hot flashes. New survey data suggests that's no longer the symptom women say is hardest to live with.",
      "blocks": [
        {
          "t": "p",
          "text": "Bonafide Health's sixth annual State of Menopause survey, covering more than 2,000 US women aged 40–64, found that anxiety, brain fog and declining motivation now top the list of menopause complaints — overtaking hot flashes for the first time since the survey began."
        },
        {
          "t": "p",
          "text": "The shift matters because it's rarely what women expect, or what they're told to expect. Hot flashes are visible and easy to name; feeling anxious, scattered or unmotivated is easier to write off as stress, burnout or \"just a bad patch\" — especially in your 40s, when work and family pressures are already high."
        },
        {
          "t": "p",
          "text": "The survey also points to a real financial cost. 56% of respondents said declining motivation was the symptom most affecting their work, and 48% said their symptoms had negatively impacted their income — with 23% reporting losses of $10,000 or more."
        },
        {
          "t": "p",
          "text": "None of this means every low mood or foggy week is menopausal. But if you're 40 or older and notice a cluster of anxiety, mental fatigue and flagging drive that doesn't match your usual patterns, it's worth raising perimenopause specifically with your doctor — rather than defaulting to a stress or mental-health diagnosis alone."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Anxiety, brain fog and declining motivation have overtaken hot flashes as the top menopause symptom.",
              "detail": "Bonafide Health's sixth annual State of Menopause survey of over 2,000 US women aged 40–64 found mental and cognitive symptoms now rank above hot flashes for the first time. 56% said declining motivation most affected their work performance; 48% said menopause symptoms had negatively impacted their income, and 23% reported losing $10,000 or more as a result.",
              "cite": "Bonafide Health · Sixth Annual State of Menopause Survey, 2026",
              "url": "https://www.globenewswire.com/news-release/2026/07/15/3327741/0/en/bonafide-health-releases-sixth-annual-state-of-menopause-results.html"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Is anxiety really a menopause symptom, or is it just stress?",
          "a": "Both can be true at once, which is what makes it hard to spot. Hormonal shifts in perimenopause directly affect mood-regulating brain chemistry, and a 2026 survey of over 2,000 women found anxiety and brain fog now rank as the top menopause complaint, ahead of hot flashes. If new anxiety or fog appears alongside other perimenopause signs — irregular cycles, sleep changes, mood swings — it's worth mentioning to your doctor as a possible hormonal factor, not only a stress issue."
        },
        {
          "q": "Why don't more women realise brain fog can be a menopause symptom?",
          "a": "Because public awareness and clinical guidance have historically centred on hot flashes as the defining symptom. Newer, larger surveys are showing that cognitive and mood symptoms are actually more common complaints for many women, but that message hasn't caught up with general expectations yet — which is part of why so many women attribute these changes to burnout instead."
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза",
      "title": "Тривожність і туман у голові, а не припливи — тепер головна скарга жінок у менопаузі",
      "seoTitle": "Тривога й туман у голові — головний симптом",
      "metaDesc": "Опитування понад 2000 жінок: тривога й туман у голові випередили припливи як головний симптом менопаузи. Що стоїть за цією зміною і що допомагає.",
      "excerpt": "Шосте щорічне опитування Bonafide Health, у якому взяли участь понад 2000 жінок, показало: тривожність, туман у голові та зниження мотивації обійшли припливи як головний симптом менопаузи — і майже половина жінок каже, що це вдарило по їхньому доходу.",
      "meta": "17 липня 2026 · 3 хв читання",
      "lead": "Роками розмови про менопаузу оберталися навколо припливів. Нові дані опитування свідчать, що це вже не той симптом, з яким жінкам найважче жити.",
      "blocks": [
        {
          "t": "p",
          "text": "Шосте щорічне опитування Bonafide Health про стан менопаузи, у якому взяли участь понад 2000 жінок у США віком 40–64 роки, показало: тривожність, туман у голові та зниження мотивації тепер очолюють список скарг на менопаузу — уперше обійшовши припливи відтоді, як опитування почали проводити."
        },
        {
          "t": "p",
          "text": "Ця зміна важлива, бо рідко відповідає тому, чого жінки очікують або що їм казали очікувати. Припливи помітні й легко назвати; тривожність, розсіяність чи брак мотивації легше списати на стрес, вигорання чи «просто складний період» — особливо у 40+, коли тиск роботи й родини й так високий."
        },
        {
          "t": "p",
          "text": "Опитування також вказує на реальну фінансову ціну. 56% респонденток заявили, що зниження мотивації найбільше впливало на їхню роботу, а 48% сказали, що симптоми негативно позначилися на їхньому доході — 23% повідомили про втрату 10 000 доларів або більше."
        },
        {
          "t": "p",
          "text": "Це не означає, що будь-який поганий настрій чи туманний тиждень — обов’язково менопаузальний. Але якщо вам 40 або більше і ви помічаєте поєднання тривожності, розумової втоми та падіння драйву, яке не схоже на ваш звичний стан, варто окремо обговорити з лікарем саме перименопаузу — а не одразу зупинятися лише на діагнозі стресу чи ментального здоров’я."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Тривожність, туман у голові та зниження мотивації обійшли припливи як головний симптом менопаузи.",
              "detail": "Шосте щорічне опитування Bonafide Health про стан менопаузи серед понад 2000 жінок у США віком 40–64 роки показало, що ментальні та когнітивні симптоми вперше випередили припливи. 56% сказали, що зниження мотивації найбільше впливало на їхню роботу; 48% заявили, що симптоми менопаузи негативно позначилися на доході, а 23% повідомили про втрату 10 000 доларів або більше.",
              "cite": "Bonafide Health · Шосте щорічне опитування про стан менопаузи, 2026",
              "url": "https://www.globenewswire.com/news-release/2026/07/15/3327741/0/en/bonafide-health-releases-sixth-annual-state-of-menopause-results.html"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи справді тривожність — це симптом менопаузи, чи це просто стрес?",
          "a": "Може бути правдою і те, і те одночасно — саме тому це важко розпізнати. Гормональні зміни в перименопаузі напряму впливають на мозкову хімію, що регулює настрій, і опитування 2026 року серед понад 2000 жінок показало, що тривожність і туман у голові тепер головна скарга на менопаузу, випереджаючи припливи. Якщо нова тривожність чи туман з’являються поряд з іншими ознаками перименопаузи — нерегулярний цикл, зміни сну, перепади настрою — варто згадати про це лікарю як про можливий гормональний чинник, а не лише проблему стресу."
        },
        {
          "q": "Чому не всі жінки знають, що туман у голові може бути симптомом менопаузи?",
          "a": "Тому що суспільна обізнаність і клінічні рекомендації історично зосереджувалися на припливах як визначальному симптомі. Нові, масштабніші опитування показують, що когнітивні симптоми та зміни настрою насправді є частішою скаргою для багатьох жінок, але ця інформація ще не наздогнала загальні очікування — саме тому багато жінок пояснюють ці зміни вигоранням."
        }
      ]
    }
  },
  {
    "slug": "type2-diabetes-women-under-40-sex-bias",
    "date": "2026-07-17",
    "image": "/images/type2-diabetes-women-under-40-sex-bias.jpg",
    "cats": [
      "diabetes"
    ],
    "en": {
      "cat": "Diabetes",
      "title": "Type 2 diabetes is rising twice as fast in women under 40 — and care hasn't caught up",
      "seoTitle": "Type 2 Diabetes Rising Fast in Women Under 40",
      "metaDesc": "A 2026 review argues diabetes care treats women as if hormones don't matter — even as type 2 rises twice as fast in women under 40. Why the gap persists.",
      "excerpt": "A major 2026 Medscape clinical review argues diabetes care still treats women as if hormones don't matter, even as type 2 diabetes rises twice as fast in women under 40 than in men.",
      "meta": "17 July 2026 · 3 min read",
      "lead": "Diabetes guidelines are largely written as if one protocol fits everyone. A major 2026 clinical review argues that's a problem — and that it's costing younger women in particular.",
      "blocks": [
        {
          "t": "p",
          "text": "A 2026 Medscape clinical review makes a case that's overdue: diabetes is not a gender-neutral disease, yet diabetes care is still largely built as if it were. The review highlights that type 2 diabetes is now rising twice as fast in women under 40 compared with men in the same age group."
        },
        {
          "t": "p",
          "text": "Part of the gap is biological. Hormonal shifts across a woman's life — the menstrual cycle, pregnancy, perimenopause and menopause — measurably change insulin sensitivity and glucose metabolism. The review notes insulin requirements can shift by as much as 15% across the luteal phase of the cycle alone, yet most diabetes management protocols make no allowance for it."
        },
        {
          "t": "p",
          "text": "Part of the gap is also structural. Women remain underrepresented in the clinical trials that shape treatment guidelines, so sex-specific patterns in how glucose control behaves are often invisible in the data used to write those guidelines in the first place."
        },
        {
          "t": "p",
          "text": "If your blood sugar feels harder to predict at certain points in your cycle or life stage than standard advice suggests it should be, that's not necessarily you doing something wrong. It's a reasonable prompt to track your own patterns across the month and bring that data to your diabetes team, rather than assuming a one-size protocol should already account for it."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Type 2 diabetes is rising twice as fast in women under 40 than in men, and diabetes care underaccounts for hormonal sex differences.",
              "detail": "A 2026 Medscape clinical review reports that hormonal changes across a woman's life — including the menstrual cycle, pregnancy, perimenopause and menopause — significantly affect glucose metabolism and insulin needs, with insulin requirements shifting by up to 15% across the luteal phase alone. The review notes women remain underrepresented in the clinical trials underpinning diabetes guidelines, and that type 2 diabetes is now increasing twice as fast in women under 40 compared with men.",
              "cite": "Medscape · Clinical Review, 13 July 2026",
              "url": "https://www.medscape.com/viewarticle/women-and-diabetes-care-keeping-pace-biology-2026a1000nip"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Why is type 2 diabetes rising faster in younger women?",
          "a": "A 2026 Medscape clinical review points to a combination of factors: hormonal changes across a woman's life that affect insulin sensitivity, and diabetes care protocols that were largely developed from trials where women were underrepresented. The result is that sex-specific patterns in glucose control are often not built into standard guidance, which may leave younger women's diabetes risk and management less well addressed."
        },
        {
          "q": "Can my insulin needs really change across my menstrual cycle?",
          "a": "Yes — the same 2026 review notes insulin requirements can shift by up to 15% during the luteal phase of the cycle. If you notice your glucose control varying in a pattern that tracks with your cycle, it's worth logging it and discussing with your diabetes team, since standard protocols don't automatically factor this in."
        }
      ]
    },
    "ua": {
      "cat": "Діабет",
      "title": "Діабет 2 типу зростає вдвічі швидше серед жінок до 40 — а система догляду цього ще не наздогнала",
      "seoTitle": "Діабет 2 типу швидко зростає у жінок до 40",
      "metaDesc": "Огляд 2026 року: медицина лікує діабет так, ніби гормони не мають значення — попри вдвічі швидше зростання в жінок до 40. Чому розрив зберігається.",
      "excerpt": "Великий клінічний огляд Medscape 2026 року стверджує: система догляду за діабетом досі влаштована так, ніби гормони не мають значення, попри те що діабет 2 типу зростає вдвічі швидше серед жінок до 40, ніж серед чоловіків.",
      "meta": "17 липня 2026 · 3 хв читання",
      "lead": "Рекомендації щодо діабету здебільшого написані так, ніби один протокол підходить усім. Великий клінічний огляд 2026 року стверджує, що це проблема — і що вона особливо дорого коштує молодшим жінкам.",
      "blocks": [
        {
          "t": "p",
          "text": "Клінічний огляд Medscape 2026 року порушує давно назрілу тему: діабет не є гендерно нейтральною хворобою, але система догляду за діабетом досі здебільшого влаштована так, ніби це так. Огляд підкреслює, що діабет 2 типу тепер зростає вдвічі швидше серед жінок до 40 років порівняно з чоловіками того ж віку."
        },
        {
          "t": "p",
          "text": "Частина розриву — біологічна. Гормональні зміни протягом життя жінки — менструальний цикл, вагітність, перименопауза та менопауза — вимірно змінюють чутливість до інсуліну та метаболізм глюкози. Огляд зазначає, що потреба в інсуліні може змінюватися до 15% лише протягом лютеїнової фази циклу, але більшість протоколів лікування діабету цього не враховують."
        },
        {
          "t": "p",
          "text": "Частина розриву — структурна. Жінки досі недостатньо представлені в клінічних дослідженнях, які формують рекомендації з лікування, тож специфічні для статі патерни контролю глюкози часто залишаються невидимими в даних, на основі яких ці рекомендації взагалі писалися."
        },
        {
          "t": "p",
          "text": "Якщо ваш рівень цукру в певні моменти циклу чи етапу життя важче передбачити, ніж це передбачає стандартна порада, це не обов’язково означає, що ви робите щось не так. Це достатня підстава відстежувати власні патерни протягом місяця й приносити ці дані своїй команді з діабету, а не припускати, що універсальний протокол уже це враховує."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Діабет 2 типу зростає вдвічі швидше серед жінок до 40, ніж серед чоловіків, а система догляду за діабетом недостатньо враховує гормональні відмінності між статями.",
              "detail": "Клінічний огляд Medscape 2026 року повідомляє, що гормональні зміни протягом життя жінки — зокрема менструальний цикл, вагітність, перименопауза та менопауза — суттєво впливають на метаболізм глюкози й потребу в інсуліні, причому потреба в інсуліні змінюється до 15% лише протягом лютеїнової фази. Огляд зазначає, що жінки досі недостатньо представлені в клінічних дослідженнях, на яких ґрунтуються рекомендації з діабету, і що діабет 2 типу тепер зростає вдвічі швидше серед жінок до 40 порівняно з чоловіками.",
              "cite": "Medscape · Клінічний огляд, 13 липня 2026",
              "url": "https://www.medscape.com/viewarticle/women-and-diabetes-care-keeping-pace-biology-2026a1000nip"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чому діабет 2 типу зростає швидше серед молодших жінок?",
          "a": "Клінічний огляд Medscape 2026 року вказує на поєднання чинників: гормональні зміни протягом життя жінки, що впливають на чутливість до інсуліну, і протоколи лікування діабету, здебільшого розроблені на основі досліджень, де жінки були недостатньо представлені. У результаті специфічні для статі патерни контролю глюкози часто не закладені у стандартні рекомендації, що може означати гірше врахування ризику діабету та його ведення в молодших жінок."
        },
        {
          "q": "Чи справді потреба в інсуліні може змінюватися протягом менструального циклу?",
          "a": "Так — той самий огляд 2026 року зазначає, що потреба в інсуліні може змінюватися до 15% протягом лютеїнової фази циклу. Якщо ви помічаєте, що контроль глюкози змінюється за патерном, пов’язаним із циклом, варто це фіксувати й обговорювати з командою з діабету, адже стандартні протоколи автоматично цього не враховують."
        }
      ]
    }
  },
  {
    "slug": "higher-protein-postmenopausal-bone-muscle",
    "date": "2026-07-17",
    "image": "/images/higher-protein-postmenopausal-bone-muscle.jpg",
    "cats": [
      "nutrition"
    ],
    "en": {
      "cat": "Nutrition",
      "title": "Eating more protein than the official guideline supports better muscle and bone after menopause",
      "seoTitle": "Protein After Menopause: More Than the Guideline",
      "excerpt": "A Women's Health Initiative analysis of 3,789 postmenopausal women finds those hitting higher protein targets than the standard RDA had better body composition and bone outcomes over 3 years.",
      "meta": "17 July 2026 · 3 min read",
      "lead": "The official protein guideline — 0.8g per kilogram of body weight a day — was set decades ago from studies that barely included older women. A new analysis suggests it may be too low for the postmenopausal years.",
      "blocks": [
        {
          "t": "p",
          "text": "Researchers used data from 3,789 postmenopausal women aged 50–79 in the Women's Health Initiative to model what would happen over 3 years at different protein intakes: the current RDA of 0.8g/kg/day, and higher targets of 1.0, 1.2 and 1.5g/kg/day. Body composition was tracked with DXA scans, the same imaging used to measure bone density and lean versus fat mass."
        },
        {
          "t": "p",
          "text": "Women who sustained protein intake above the RDA — particularly at or above 1.2g/kg/day — showed more favourable changes in lean mass and bone measures than those who stuck close to the minimum guideline. For a 65kg woman, that's roughly 78g of protein a day rather than 52g, spread across meals rather than loaded into one."
        },
        {
          "t": "p",
          "text": "This matters because postmenopausal women lose muscle and bone density faster once oestrogen drops, and both are strongly linked to frailty, fracture risk and metabolic health later in life. The RDA was never designed as a target for healthy ageing — it's the minimum to avoid deficiency, calculated mostly from younger adults."
        },
        {
          "t": "p",
          "text": "This was an observational emulated-trial analysis, not a randomised controlled trial, so it shows association rather than definitive proof of cause. But it adds to a growing body of evidence that [higher protein](/blog/protein-for-women-over-40/) — alongside resistance exercise — is one of the more actionable levers for preserving muscle and bone through the menopause transition."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Postmenopausal women sustaining protein intake above 1.2g/kg/day showed more favourable 3-year body composition and bone changes than those near the 0.8g/kg/day RDA.",
              "detail": "An emulated target-trial analysis of 3,789 postmenopausal women aged 50–79 in the Women's Health Initiative study used DXA-measured body composition to compare hypothetical adherence to four protein intake levels (≥0.8, ≥1.0, ≥1.2 and ≥1.5g/kg/day) over 3 years. Higher sustained intake was associated with more favourable lean mass and bone outcomes than intake at the current RDA.",
              "cite": "International Journal of Obesity (Nature) · Women's Health Initiative analysis, 2026",
              "url": "https://www.nature.com/articles/s41366-025-01978-0"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "How much protein should I actually eat after menopause?",
          "a": "The official RDA of 0.8g per kg of body weight a day is a minimum, not an optimum. A 2026 Women's Health Initiative analysis found postmenopausal women sustaining around 1.2g/kg/day or more had better bone and lean-mass outcomes over 3 years. For a 65kg woman, that's roughly 78g of protein daily, spread across meals."
        },
        {
          "q": "Is it too late to start eating more protein if I'm already postmenopausal?",
          "a": "No — the analysis followed women already postmenopausal, aged 50–79, and still found benefit from higher intake over just 3 years. Combining higher protein with resistance exercise is the combination most consistently linked to preserving muscle and bone at this life stage."
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Why protein matters more after 40",
              "url": "/blog/protein-for-women-over-40/",
              "desc": "How protein needs shift with age and hormones, and practical ways to hit your target."
            },
            {
              "name": "Carb quality and healthy ageing",
              "url": "/blog/carb-quality-healthy-aging/",
              "desc": "Why the type of carbohydrate matters as much as the amount as you get older."
            }
          ]
        }
      ]
    },
    "ua": {
      "cat": "Харчування",
      "title": "Білка більше за офіційну норму — краще для м'язів і кісток після менопаузи",
      "seoTitle": "Білок після менопаузи: більше за норму — краще",
      "excerpt": "Аналіз даних Women's Health Initiative серед 3789 жінок у постменопаузі показує: ті, хто вживав більше білка, ніж стандартна норма, мали кращий склад тіла та стан кісток протягом 3 років.",
      "meta": "17 липня 2026 · 3 хв читання",
      "lead": "Офіційна норма білка — 0,8 г на кілограм ваги на день — була встановлена десятиліття тому за дослідженнями, де майже не було літніх жінок. Новий аналіз свідчить, що для періоду після менопаузи вона може бути занизькою.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідники використали дані 3789 жінок у постменопаузі віком 50–79 років з Women's Health Initiative, щоб змоделювати, що станеться за 3 роки при різному споживанні білка: чинній нормі 0,8 г/кг/день і вищих цілях — 1,0, 1,2 та 1,5 г/кг/день. Склад тіла відстежували за допомогою DXA-сканування — того ж методу візуалізації, яким вимірюють щільність кісток та співвідношення м'язової і жирової маси."
        },
        {
          "t": "p",
          "text": "У жінок, які підтримували споживання білка вище норми — особливо на рівні 1,2 г/кг/день і вище — спостерігалися сприятливіші зміни м'язової маси та показників кісток, ніж у тих, хто тримався мінімальної норми. Для жінки вагою 65 кг це приблизно 78 г білка на день замість 52 г, розподілених по прийомах їжі, а не з’їдених за один раз."
        },
        {
          "t": "p",
          "text": "Це важливо, бо жінки в постменопаузі втрачають м'язи та щільність кісток швидше після зниження естрогену, а обидва показники тісно пов’язані з крихкістю, ризиком переломів та метаболічним здоров’ям у майбутньому. Норма RDA ніколи не була розрахована як ціль для здорового старіння — це лише мінімум для уникнення дефіциту, здебільшого визначений за дослідженнями молодших дорослих."
        },
        {
          "t": "p",
          "text": "Це був спостережний аналіз за методом емульованого дослідження, а не рандомізоване контрольоване дослідження, тож він показує зв’язок, а не остаточний доказ причини. Але він додається до дедалі більшої кількості доказів того, що [вищий білок](/ua/blog/protein-for-women-over-40/) разом із силовими тренуваннями — один із найбільш практичних важелів для збереження м'язів і кісток під час переходу через менопаузу."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "У жінок у постменопаузі, які підтримували споживання білка понад 1,2 г/кг/день, спостерігалися сприятливіші зміни складу тіла та кісток за 3 роки, ніж у тих, хто тримався норми 0,8 г/кг/день.",
              "detail": "Аналіз за методом емульованого дослідження серед 3789 жінок у постменопаузі віком 50–79 років з Women's Health Initiative використав DXA-виміряний склад тіла, щоб порівняти гіпотетичне дотримання чотирьох рівнів споживання білка (≥0,8, ≥1,0, ≥1,2 та ≥1,5 г/кг/день) протягом 3 років. Вище стале споживання пов’язувалося зі сприятливішими показниками м'язової маси та кісток порівняно зі споживанням на рівні чинної норми.",
              "cite": "International Journal of Obesity (Nature) · Аналіз Women's Health Initiative, 2026",
              "url": "https://www.nature.com/articles/s41366-025-01978-0"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Скільки білка насправді варто їсти після менопаузи?",
          "a": "Офіційна норма 0,8 г на кг ваги на день — це мінімум, а не оптимум. Аналіз Women's Health Initiative 2026 року показав, що жінки в постменопаузі, які підтримували приблизно 1,2 г/кг/день або більше, мали кращі показники кісток і м'язової маси протягом 3 років. Для жінки вагою 65 кг це приблизно 78 г білка на день, розподілених по прийомах їжі."
        },
        {
          "q": "Чи пізно починати їсти більше білка, якщо я вже в постменопаузі?",
          "a": "Ні — дослідження стежило за жінками, які вже були в постменопаузі, віком 50–79 років, і все одно виявило користь від вищого споживання лише за 3 роки. Поєднання більшого білка із силовими тренуваннями — комбінація, яка найпослідовніше пов’язана зі збереженням м'язів і кісток на цьому етапі життя."
        }
      ]
    }
  },
  {
    "slug": "hrt-restores-skin-collagen-2026-review",
    "date": "2026-07-17",
    "image": "/images/hrt-restores-skin-collagen-2026-review.jpg",
    "cats": [
      "skin",
      "perimenopause"
    ],
    "en": {
      "cat": "Skin & beauty",
      "title": "2026 review confirms HRT restores skin collagen, elasticity and hydration",
      "seoTitle": "HRT and Skin: Collagen, Elasticity & Hydration (2026)",
      "excerpt": "A 2026 review in the journal Life pulls together the evidence on menopause, oestrogen and skin — confirming HRT measurably improves collagen content, elasticity and hydration.",
      "meta": "17 July 2026 · 3 min read",
      "lead": "Skin is often left out of the menopause conversation entirely. A 2026 review makes the case that it shouldn't be — and that hormone therapy has real, measurable effects on it.",
      "blocks": [
        {
          "t": "p",
          "text": "Published in the journal Life, the review draws together research on how falling oestrogen changes skin after menopause: collagen content declines by around 2% a year, elasticity drops, and moisture retention weakens — together producing thinner, drier, more wrinkle-prone skin."
        },
        {
          "t": "p",
          "text": "Oestrogen isn't cosmetic background noise here — it directly drives collagen production and the skin's ability to hold water. The review confirms hormone replacement therapy measurably improves collagen content, elasticity, thickness and hydration when started, partially reversing changes that accelerate once oestrogen drops."
        },
        {
          "t": "p",
          "text": "The effect isn't limited to systemic HRT. The review also notes topical oestrogen and non-hormonal alternatives show promise for people who want localised skin benefit without systemic hormone therapy — useful for those who can't or don't want to take HRT for other reasons."
        },
        {
          "t": "p",
          "text": "None of this makes HRT a skincare product, and the decision to start it should rest on your full symptom picture and personal risk profile, not skin alone. But if skin changes are part of what's bothering you at perimenopause or menopause, it's a legitimate factor to raise with your doctor — not a vanity concern to set aside."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "HRT measurably improves skin collagen content, elasticity and hydration after menopause.",
              "detail": "A 2026 review in the journal Life synthesises evidence that oestrogen decline after menopause reduces skin collagen by roughly 2% per year alongside losses in elasticity and hydration, and that hormone replacement therapy partially restores collagen content, elasticity, thickness and hydration. Topical oestrogen and non-hormonal agents were also noted as showing potential for targeted skin benefit.",
              "cite": "Life (MDPI) · Review, 2026",
              "url": "https://www.mdpi.com/2075-1729/16/3/401"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Can HRT actually reverse skin ageing from menopause?",
          "a": "It can partially reverse some of it. A 2026 review found HRT measurably improves skin collagen content, elasticity, thickness and hydration compared with untreated menopause, where collagen declines by around 2% a year. It's not a full reversal or a substitute for skincare, but the effect on skin structure is real and measurable."
        },
        {
          "q": "Should I start HRT just for my skin?",
          "a": "No — skin benefit is a real effect of HRT but not a standalone reason to start it. The decision should weigh your full symptom picture (hot flushes, sleep, mood, bone health) and personal risk factors with your doctor. If skin changes are contributing to how you feel, it's fine to mention them as part of that wider conversation."
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Why skin changes so fast at menopause — and what hormone therapy can and can't do",
              "url": "/blog/menopause-skin-oestrogen/",
              "desc": "Oestrogen affects far more than hot flushes — the full picture on HRT and skin changes."
            },
            {
              "name": "Do collagen products actually improve your skin?",
              "url": "/blog/collagen-and-skin/",
              "desc": "Declining oestrogen accelerates collagen loss. What the evidence says about supplementing."
            }
          ]
        }
      ]
    },
    "ua": {
      "cat": "Краса та шкіра",
      "title": "Огляд 2026 року підтверджує: ЗГТ відновлює колаген, еластичність і зволоженість шкіри",
      "seoTitle": "ЗГТ і шкіра: колаген, еластичність, зволоженість (2026)",
      "excerpt": "Огляд 2026 року в журналі Life зібрав докази про менопаузу, естроген і шкіру — підтверджуючи, що ЗГТ вимірно покращує вміст колагену, еластичність і зволоженість.",
      "meta": "17 липня 2026 · 3 хв читання",
      "lead": "Шкіру часто повністю випускають з розмови про менопаузу. Огляд 2026 року доводить, що це неправильно — і що гормональна терапія має реальний, вимірний вплив на неї.",
      "blocks": [
        {
          "t": "p",
          "text": "Опублікований у журналі Life огляд зібрав дослідження того, як зниження естрогену змінює шкіру після менопаузи: вміст колагену знижується приблизно на 2% на рік, еластичність падає, а здатність утримувати вологу слабшає — разом це дає тоншу, сухішу шкіру, схильнішу до зморшок."
        },
        {
          "t": "p",
          "text": "Естроген тут — не косметичний фон: він напряму керує виробленням колагену та здатністю шкіри утримувати воду. Огляд підтверджує, що замісна гормональна терапія вимірно покращує вміст колагену, еластичність, товщину та зволоженість шкіри після початку прийому, частково повертаючи зміни, які прискорюються після зниження естрогену."
        },
        {
          "t": "p",
          "text": "Ефект не обмежується системною ЗГТ. Огляд також зазначає, що місцевий естроген і негормональні альтернативи показують перспективність для тих, хто хоче локальну користь для шкіри без системної гормональної терапії — це корисно для тих, хто не може або не хоче приймати ЗГТ з інших причин."
        },
        {
          "t": "p",
          "text": "Це не робить ЗГТ засобом для догляду за шкірою, і рішення почати її має спиратися на повну картину симптомів і особистий профіль ризику, а не лише на шкіру. Але якщо зміни шкіри — частина того, що турбує вас у перименопаузі чи менопаузі, це законний привід обговорити з лікарем, а не питання марнославства, яке варто відкласти."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "ЗГТ вимірно покращує вміст колагену, еластичність і зволоженість шкіри після менопаузи.",
              "detail": "Огляд 2026 року в журналі Life узагальнює докази того, що зниження естрогену після менопаузи зменшує колаген шкіри приблизно на 2% на рік поряд із втратою еластичності та зволоженості, а замісна гормональна терапія частково відновлює вміст колагену, еластичність, товщину та зволоженість. Місцевий естроген і негормональні засоби також зазначені як перспективні для локальної користі для шкіри.",
              "cite": "Life (MDPI) · Огляд, 2026",
              "url": "https://www.mdpi.com/2075-1729/16/3/401"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи може ЗГТ справді повернути старіння шкіри через менопаузу?",
          "a": "Частково — так. Огляд 2026 року показав, що ЗГТ вимірно покращує вміст колагену, еластичність, товщину та зволоженість шкіри порівняно з нелікованою менопаузою, коли колаген знижується приблизно на 2% на рік. Це не повне повернення й не заміна догляду за шкірою, але вплив на структуру шкіри реальний і вимірний."
        },
        {
          "q": "Чи варто починати ЗГТ лише заради шкіри?",
          "a": "Ні — користь для шкіри реальна, але не є самостійною причиною починати ЗГТ. Рішення має враховувати повну картину симптомів (припливи, сон, настрій, здоров'я кісток) та особисті фактори ризику разом із лікарем. Якщо зміни шкіри впливають на ваше самопочуття, цілком доречно згадати про них у цій ширшій розмові."
        }
      ]
    }
  },
  {
    "slug": "glp1-weight-loss-drugs-fat-not-muscle",
    "date": "2026-07-17",
    "image": "/images/glp1-weight-loss-drugs-fat-not-muscle.jpg",
    "cats": [
      "weight",
      "nutrition"
    ],
    "en": {
      "cat": "Weight loss",
      "title": "GLP-1 weight-loss drugs mainly burn fat, not muscle, an International Journal of Obesity meta-analysis finds",
      "seoTitle": "GLP-1 Weight Loss Is Mostly Fat, Not Muscle (IJO)",
      "excerpt": "A 2026 meta-analysis of GLP-1 trials finds the large majority of weight lost on Ozempic-style drugs is fat rather than muscle, and that women lose proportionally more than men.",
      "meta": "17 July 2026 · 3 min read",
      "lead": "The loudest worry about Ozempic-style weight-loss drugs has been that people lose muscle along with fat. A 2026 meta-analysis suggests that fear is largely overstated — most of what comes off is fat.",
      "blocks": [
        {
          "t": "p",
          "text": "Researchers pooled body-composition data from randomised trials of GLP-1 receptor agonists — the drug class that includes semaglutide (Ozempic, Wegovy) and tirzepatide. Crucially, they looked at the fat-versus-lean-mass breakdown, not just the number on the scale, which is what actually tells you whether weight loss is coming from fat or from muscle."
        },
        {
          "t": "p",
          "text": "Across the pooled trials, the large majority of the weight lost came from fat mass, with lean (muscle) tissue making up a smaller share than the alarming early headlines had implied. Some lean mass is still lost — that happens with almost any weight loss, including plain dieting — but the fat-to-muscle ratio was more favourable than the \"these drugs waste your muscle\" narrative suggested."
        },
        {
          "t": "p",
          "text": "One finding stands out for women: on the same drugs, women lost proportionally more weight than men. That fits what's known about sex differences in body composition and how these medicines act, and it's a useful reminder that trial averages — often weighted toward male physiology — don't always map onto a woman's experience."
        },
        {
          "t": "p",
          "text": "None of this means muscle looks after itself. Losing weight quickly at any age thins muscle and bone unless you actively defend them — which is exactly where [enough protein](/blog/protein-for-women-over-40/) and resistance training earn their place, and it matters even more through perimenopause and beyond, when muscle and bone are already under pressure. The drugs tilt the fat-to-muscle ratio in your favour; they don't remove the need to train and eat well while the weight comes off."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Most of the weight lost on GLP-1 drugs is fat, not muscle, and women lose proportionally more than men.",
              "detail": "A 2026 meta-analysis in the International Journal of Obesity (Nature) pooled body-composition data from randomised trials of GLP-1 receptor agonists and found that the large majority of weight lost was fat mass rather than lean (muscle) tissue, with women losing proportionally more weight than men. Some lean mass loss still occurs, as it does with most weight loss, underscoring the role of adequate protein and resistance exercise in preserving muscle.",
              "cite": "International Journal of Obesity (Nature) · Meta-analysis, 2026",
              "url": "https://www.nature.com/articles/s41366-026-02088-1"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Do GLP-1 weight-loss drugs make you lose muscle?",
          "a": "Some muscle loss happens with almost any weight loss, including on these drugs — but a 2026 meta-analysis found the large majority of the weight lost on GLP-1 drugs is fat, not muscle, and the muscle share is smaller than earlier single studies suggested. You can protect muscle further by eating enough protein and doing resistance exercise while you lose weight."
        },
        {
          "q": "Why do women lose more weight than men on these drugs?",
          "a": "The 2026 meta-analysis found women lost proportionally more weight than men on the same GLP-1 medicines. Differences in body composition, hormones and how the drugs act between the sexes all play a part. It's also a reminder that averages from mixed or male-skewed trials don't always reflect what an individual woman will experience."
        }
      ]
    },
    "ua": {
      "cat": "Схуднення",
      "title": "Препарати для схуднення GLP-1 спалюють переважно жир, а не м'язи — метааналіз International Journal of Obesity",
      "seoTitle": "GLP-1: втрата ваги — переважно жир, а не м’язи (IJO)",
      "excerpt": "Метааналіз 2026 року показує: більшість ваги, втраченої на препаратах на кшталт Ozempic, — це жир, а не м'язи, і жінки втрачають пропорційно більше, ніж чоловіки.",
      "meta": "17 липня 2026 · 3 хв читання",
      "lead": "Найгучніше побоювання щодо препаратів для схуднення на кшталт Ozempic — що разом із жиром люди втрачають м'язи. Метааналіз 2026 року свідчить, що цей страх здебільшого перебільшений: більшість втраченого — це жир.",
      "blocks": [
        {
          "t": "p",
          "text": "Дослідники об'єднали дані про склад тіла з рандомізованих досліджень агоністів рецепторів GLP-1 — класу препаратів, до якого належать семаглутид (Ozempic, Wegovy) і тирзепатид. Важливо, що вони дивилися на співвідношення жирової та м'язової маси, а не лише на цифру на вагах — саме це показує, звідки береться втрата ваги: з жиру чи з м'язів."
        },
        {
          "t": "p",
          "text": "У всіх об'єднаних дослідженнях переважна більшість втраченої ваги припадала на жирову масу, а на м'язову тканину — менша частка, ніж припускали тривожні ранні заголовки. Певна втрата м'язової маси все одно відбувається — це трапляється майже за будь-якого схуднення, зокрема й простого дотримання дієти, — але співвідношення жиру до м'язів було сприятливішим, ніж навіювала розповідь про те, що «ці препарати руйнують м'язи»."
        },
        {
          "t": "p",
          "text": "Один результат особливо важливий для жінок: на тих самих препаратах жінки втрачали пропорційно більше ваги, ніж чоловіки. Це узгоджується з відомими статевими відмінностями у складі тіла та в тому, як діють ці ліки, і нагадує, що середні показники досліджень — часто зміщені у бік чоловічої фізіології — не завжди відповідають досвіду жінки."
        },
        {
          "t": "p",
          "text": "Ніщо з цього не означає, що м'язи подбають про себе самі. Швидка втрата ваги в будь-якому віці витончує м'язи й кістки, якщо їх активно не захищати — і саме тут стають у пригоді [достатній білок](/ua/blog/protein-for-women-over-40/) і силові тренування. Це особливо важливо під час перименопаузи та після неї, коли м'язи й кістки й так під тиском. Препарати схиляють співвідношення жиру до м'язів на вашу користь, але не скасовують потреби тренуватися й добре харчуватися, поки вага йде."
        },
        {
          "t": "h",
          "text": "Що каже наука"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Більшість ваги, втраченої на препаратах GLP-1, — це жир, а не м'язи, і жінки втрачають пропорційно більше, ніж чоловіки.",
              "detail": "Метааналіз 2026 року в International Journal of Obesity (Nature) об'єднав дані про склад тіла з рандомізованих досліджень агоністів рецепторів GLP-1 і виявив, що переважна більшість втраченої ваги припадала на жирову масу, а не на м'язову тканину, при цьому жінки втрачали пропорційно більше ваги, ніж чоловіки. Певна втрата м'язової маси все одно відбувається, як і за більшості схуднення, що підкреслює роль достатнього білка й силових тренувань у збереженні м'язів.",
              "cite": "International Journal of Obesity (Nature) · Метааналіз, 2026",
              "url": "https://www.nature.com/articles/s41366-026-02088-1"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Чи призводять препарати GLP-1 для схуднення до втрати м'язів?",
          "a": "Певна втрата м'язів відбувається майже за будь-якого схуднення, зокрема й на цих препаратах, — але метааналіз 2026 року виявив, що переважна більшість ваги, втраченої на препаратах GLP-1, — це жир, а не м'язи, і частка м'язів менша, ніж припускали ранні окремі дослідження. Захистити м'язи ще більше можна, вживаючи достатньо білка й виконуючи силові вправи, поки ви худнете."
        },
        {
          "q": "Чому жінки втрачають більше ваги, ніж чоловіки, на цих препаратах?",
          "a": "Метааналіз 2026 року виявив, що жінки втрачали пропорційно більше ваги, ніж чоловіки, на тих самих препаратах GLP-1. Відмінності у складі тіла, гормонах і в тому, як діють ці ліки в чоловіків і жінок, — усе це має значення. Це також нагадування, що середні показники змішаних або зміщених до чоловіків досліджень не завжди відображають те, що відчує конкретна жінка."
        }
      ]
    }
  },
  {
    "slug": "menopause-brain-fog-not-dementia",
    "date": "2026-08-15",
    "image": "/images/menopause-brain-fog-not-dementia.jpg",
    "cats": [
      "perimenopause"
    ],
    "en": {
      "cat": "Perimenopause",
      "title": "Menopause brain fog isn’t early dementia — and it finally has a definition",
      "seoTitle": "Menopause Brain Fog Isn’t Early Dementia",
      "metaDesc": "A 2026 Lancet review defines menopause brain fog as a drop in mental efficiency, not capacity — reported by two-thirds of women, and not a dementia sign.",
      "excerpt": "A 2026 Lancet review proposes the first clinical definition of menopausal brain fog: self-reported trouble with memory, attention or word-finding, without measurable cognitive decline — and no link to dementia risk.",
      "meta": "15 August 2026 · 4 min read",
      "lead": "More than two-thirds of women report memory or concentration trouble across the menopause transition. Until now there has been no agreed definition of what that is — which is part of why so little has been done about it.",
      "blocks": [
        {
          "t": "p",
          "text": "A review published in April 2026 in The Lancet Obstetrics, Gynaecology & Women’s Health sets out to fix that. Led by Associate Professor Caroline Gurvich at Monash University, with colleagues at UCL and the University of Melbourne, it pulls together what the evidence currently supports and proposes a clinical definition of menopausal brain fog so that trials can finally be designed around it."
        },
        {
          "t": "p",
          "text": "The definition they propose is narrower and more precise than the everyday use of the phrase: self-reported difficulty in one or more cognitive areas — memory, attention, organisation, problem-solving or word retrieval — in the absence of notable objective cognitive decline. In Gurvich’s words, this is “a decrease in cognitive or learning efficiency, not functionality or capacity.” The typical experience is forgetfulness, losing a word mid-sentence, being pulled off task more easily — not losing the ability to do the task."
        },
        {
          "t": "p",
          "text": "That last clause carries the reassurance most women are actually looking for. The review reports that these cognitive symptoms are not associated with an increased risk of dementia, and that on formal testing, overall performance usually sits within the expected range. Fear of early Alzheimer’s is one of the most common reasons women bring brain fog to a GP, and on the current evidence it is not what this is."
        },
        {
          "t": "p",
          "text": "But “doesn’t show up on a test” has been read for years as “isn’t real”, and that is the problem the authors are pushing back on. There is pressure to prove a treatment works using objective memory tests, when the defining symptom is subjective — so studies keep measuring the wrong thing and finding nothing. Their argument is that self-report should be accepted here, as it already is for depression and anxiety, both of which are diagnosed and treated on what the patient describes."
        },
        {
          "t": "p",
          "text": "The honest position on causes and treatment is that neither is settled. Hormonal change, disrupted sleep and psychological or psychosocial stress all appear to contribute, and they overlap heavily — broken sleep alone will produce most of the symptom list. There are no treatments specific to menopausal brain fog. Sleep quality, regular aerobic exercise and a decent diet have general support, cognitive behavioural therapy has early promising results, and the evidence on hormone therapy for cognitive symptoms specifically is mixed."
        },
        {
          "t": "p",
          "text": "The most-quoted figures on how common this is come from a different kind of study, and it is worth knowing which. A 2024 service evaluation of 978 new patients at a UK specialist menopause clinic found memory problems in 93% and difficulty concentrating in 91%, with symptom scores improving across the board three months after starting hormone therapy. Those are women who had already sought specialist help, so the percentages run far above the general population, and it was a before-and-after audit with no control group — encouraging, but not proof that the treatment caused the improvement."
        },
        {
          "t": "p",
          "text": "One practical note for anyone here for the diabetes side: glucose running high, running low, or swinging does exactly this to concentration and word-finding, and so do thyroid problems, low ferritin and low B12. All of those are testable, and worth testing, before the fog is filed under hormones alone. I’ve written more about that overlap in [perimenopause and blood sugar](/blog/perimenopause-diabetes-blood-sugar/)."
        },
        {
          "t": "h",
          "text": "What the research says"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Menopausal brain fog now has a proposed clinical definition — and no established link to dementia risk.",
              "detail": "A 2026 review in The Lancet Obstetrics, Gynaecology & Women’s Health, led by Associate Professor Caroline Gurvich (Monash University) with Professor Aimee Spector (UCL) and Professor Martha Hickey (University of Melbourne and the Royal Women’s Hospital), proposes defining menopausal brain fog as self-reported impairment in one or more cognitive domains — memory, attention, organisation, problem-solving or word retrieval — in the absence of notable objective cognitive decline. More than two-thirds of women report difficulties with memory or concentration over the menopause transition. The authors report that these symptoms are not linked to an increased risk of dementia and that overall cognitive performance typically remains within expected ranges, and they identify hormonal change, sleep disturbance and psychological or psychosocial stress as contributing factors. This is a review and position paper synthesising existing evidence, not a new trial.",
              "cite": "The Lancet Obstetrics, Gynaecology & Women’s Health · 13 April 2026",
              "url": "https://www.thelancet.com/journals/lanogw/article/PIIS3050-5038(26)00043-9/fulltext"
            },
            {
              "claim": "In a UK menopause clinic, more than nine in ten patients reported memory and concentration problems.",
              "detail": "A service evaluation published in BJPsych Open (Reisel et al., 1 August 2024) gave a modified Greene Climacteric Symptom Questionnaire to 978 new patients at a specialist menopause clinic between November 2022 and June 2023. The five most prevalent symptoms were feeling tired or lacking in energy (96%), memory problems (93%), difficulty in concentrating (91%), irritability (90%) and feeling tense or nervous (90%). At three-month follow-up all symptoms had improved on hormone therapy, with or without transdermal testosterone — most of all profound low mood (69% improvement in symptom scores) and attacks of anxiety and panic (61%). Two limits matter when reading those numbers: the sample is women who actively sought specialist menopause care, so prevalence runs well above the general population, and the design is an uncontrolled before-and-after audit with no placebo group.",
              "cite": "BJPsych Open · Reisel et al., 1 August 2024",
              "url": "https://www.cambridge.org/core/journals/bjpsych-open/article/prevalence-of-cognitive-and-moodrelated-symptoms-in-a-large-cohort-of-perimenopausal-and-menopausal-women/9478EDCFCB94629C1C02657229EC4A2F"
            },
            {
              "claim": "The researchers argue trials should measure what women report, not only what tests detect.",
              "detail": "Summarising the review, Associate Professor Gurvich notes there is pressure to use objective measures such as memory tests in clinical trials, “but the key symptom of brain fog is a subjective experience” — and argues self-report measures should be accepted, as they are for depression and anxiety. Professor Martha Hickey states that the analysis of the best available research shows many women experience some degree of cognitive symptoms during the menopause transition. The team notes there are currently no specific treatments, with sleep, aerobic exercise, diet and cognitive behavioural therapy among the approaches under investigation.",
              "cite": "UCL News · 13 April 2026",
              "url": "https://www.ucl.ac.uk/news/2026/apr/brain-fog-affects-two-thirds-going-through-menopause-yet-poorly-understood"
            }
          ]
        },
        {
          "t": "links",
          "title": "Related reading",
          "items": [
            {
              "name": "Anxiety and brain fog, not hot flashes, are now women’s top menopause complaint",
              "url": "/blog/anxiety-brain-fog-top-menopause-symptom/",
              "desc": "The survey that pushed cognitive symptoms above hot flushes — and what it cost women at work."
            },
            {
              "name": "Ninety minutes less sleep raised insulin resistance by 15% in women",
              "url": "/blog/sleep-insulin-resistance-women/",
              "desc": "Disrupted sleep is one of the named contributors to brain fog — and it does more than that."
            },
            {
              "name": "Perimenopause and diabetes: what’s really happening to your blood sugar",
              "url": "/blog/perimenopause-diabetes-blood-sugar/",
              "desc": "When glucose, not hormones, is the simpler explanation for a foggy afternoon."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Is menopause brain fog a sign of early dementia?",
          "a": "On the current evidence, no. The 2026 Lancet review reports that cognitive symptoms during the menopause transition are not linked to an increased risk of dementia, and that overall performance on formal cognitive testing usually stays within the expected range. The proposed definition specifically describes impairment that is self-reported and happens without notable objective decline. That said, if symptoms are severe, getting worse, or affecting your ability to do familiar tasks rather than just doing them more slowly, that is worth raising with your doctor rather than assuming it is menopause."
        },
        {
          "q": "If my memory tests come back normal, does that mean the fog isn’t real?",
          "a": "No — and that mismatch is exactly what the new definition is trying to capture. What changes is efficiency rather than capacity: the word arrives, but slower; the task gets done, but with more effort and more distraction. Standard cognitive tests are built to detect loss of capacity, so they can miss a real and disruptive drop in efficiency entirely. The researchers argue this is why treatment trials keep coming up empty, and why what you report should count as evidence in its own right."
        }
      ]
    },
    "ua": {
      "cat": "Перименопауза",
      "title": "Туман у голові в менопаузі — це не рання деменція, і тепер у нього є визначення",
      "seoTitle": "Туман у голові в менопаузі — це не деменція",
      "metaDesc": "Огляд Lancet 2026: туман у голові в менопаузі — це падіння ефективності мислення, а не втрата здатностей. Дві третини жінок, і жодного зв’язку з деменцією.",
      "excerpt": "Огляд у The Lancet за 2026 рік пропонує перше клінічне визначення туману в голові при менопаузі: суб’єктивні труднощі з пам’яттю, увагою чи добором слів без вимірюваного зниження когнітивних функцій — і без зв’язку з ризиком деменції.",
      "meta": "15 серпня 2026 · 4 хв читання",
      "lead": "Понад дві третини жінок повідомляють про проблеми з пам’яттю чи концентрацією під час менопаузального переходу. Досі не було узгодженого визначення, що це таке, — і саме тому з цим так мало що робили.",
      "blocks": [
        {
          "t": "p",
          "text": "Огляд, опублікований у квітні 2026 року в The Lancet Obstetrics, Gynaecology & Women’s Health, має це виправити. Його очолила доцентка Керолайн Ґурвіч з Університету Монаша разом із колегами з UCL та Мельбурнського університету. Автори зібрали те, що сьогодні підтверджують дані, і запропонували клінічне визначення менопаузального туману в голові — щоб дослідження нарешті мали що вимірювати."
        },
        {
          "t": "p",
          "text": "Запропоноване визначення вужче й точніше за побутове вживання цього виразу: суб’єктивні труднощі в одній або кількох когнітивних сферах — пам’ять, увага, організація, розв’язання задач або добір слів — за відсутності помітного об’єктивного зниження когнітивних функцій. За словами Ґурвіч, ідеться про «зниження ефективності мислення й навчання, а не функціональності чи здатності». Типовий досвід — забудькуватість, слово, що зникає посеред речення, легше відволікання. Але не втрата здатності виконати саму справу."
        },
        {
          "t": "p",
          "text": "Саме остання частина визначення дає ту відповідь, по яку більшість жінок і приходить. В огляді зазначено, що ці когнітивні симптоми не пов’язані з підвищеним ризиком деменції, а при формальному тестуванні загальні результати зазвичай залишаються в межах очікуваного. Страх ранньої хвороби Альцгеймера — одна з найчастіших причин, чому жінки взагалі згадують про туман у голові на прийомі; за наявними даними, це не він."
        },
        {
          "t": "p",
          "text": "Але фразу «на тестах нічого не видно» роками читали як «цього не існує» — і саме проти цього виступають автори. Від дослідників вимагають доводити ефективність лікування об’єктивними тестами пам’яті, тоді як ключовий симптом є суб’єктивним. Тож дослідження раз за разом вимірюють не те й нічого не знаходять. Автори наполягають: самозвіт тут має бути прийнятним доказом — так само, як для депресії й тривоги, які діагностують і лікують за тим, що описує сама людина."
        },
        {
          "t": "p",
          "text": "Чесна позиція щодо причин і лікування — що ані те, ані інше остаточно не з’ясоване. Гормональні зміни, порушення сну та психологічний і психосоціальний стрес, схоже, роблять свій внесок і сильно перетинаються: самого лише розірваного сну достатньо, щоб дати майже весь перелік симптомів. Специфічного лікування менопаузального туману в голові немає. Якість сну, регулярні аеробні навантаження й нормальне харчування мають загальну підтримку, когнітивно-поведінкова терапія показує перші обнадійливі результати, а дані щодо гормональної терапії саме для когнітивних симптомів — суперечливі."
        },
        {
          "t": "p",
          "text": "Найчастіше цитовані цифри про поширеність походять із дослідження іншого типу, і це варто знати. Оцінка послуги 2024 року за участю 978 нових пацієнток спеціалізованої менопаузальної клініки у Великій Британії виявила проблеми з пам’яттю в 93% і труднощі з концентрацією в 91%, а через три місяці після початку гормональної терапії показники симптомів покращилися за всіма пунктами. Але це жінки, які вже самі звернулися по спеціалізовану допомогу, тому відсотки значно вищі, ніж у загальній популяції; до того ж це аудит «до і після» без контрольної групи — обнадійливо, але не доказ, що поліпшення спричинило саме лікування."
        },
        {
          "t": "p",
          "text": "Одне практичне зауваження для тих, хто читає тут про діабет: високий цукор, низький цукор і різкі коливання дають рівно ту саму картину з концентрацією й добором слів — так само як проблеми зі щитоподібною залозою, низький феритин і низький B12. Усе це можна перевірити аналізами, і варто перевірити, перш ніж списувати туман лише на гормони. Докладніше про це перетинання — у тексті про [перименопаузу і цукор крові](/ua/blog/perimenopause-diabetes-blood-sugar/)."
        },
        {
          "t": "h",
          "text": "Що кажуть дослідження"
        },
        {
          "t": "refs",
          "items": [
            {
              "claim": "Менопаузальний туман у голові отримав запропоноване клінічне визначення — і не має підтвердженого зв’язку з ризиком деменції.",
              "detail": "Огляд 2026 року в The Lancet Obstetrics, Gynaecology & Women’s Health під керівництвом доцентки Керолайн Ґурвіч (Університет Монаша) разом із професоркою Еймі Спектор (UCL) і професоркою Мартою Гікі (Мельбурнський університет і Royal Women’s Hospital) пропонує визначати менопаузальний туман у голові як суб’єктивне порушення в одній чи кількох когнітивних сферах — пам’ять, увага, організація, розв’язання задач або добір слів — за відсутності помітного об’єктивного зниження когнітивних функцій. Понад дві третини жінок повідомляють про труднощі з пам’яттю або концентрацією протягом менопаузального переходу. Автори зазначають, що ці симптоми не пов’язані з підвищеним ризиком деменції, а загальні когнітивні показники зазвичай залишаються в межах очікуваного; серед чинників вони називають гормональні зміни, порушення сну та психологічний і психосоціальний стрес. Це оглядова й позиційна стаття, яка узагальнює наявні дані, а не нове дослідження.",
              "cite": "The Lancet Obstetrics, Gynaecology & Women’s Health · 13 квітня 2026",
              "url": "https://www.thelancet.com/journals/lanogw/article/PIIS3050-5038(26)00043-9/fulltext"
            },
            {
              "claim": "У британській менопаузальній клініці понад дев’ять із десяти пацієнток повідомили про проблеми з пам’яттю та концентрацією.",
              "detail": "Оцінка послуги, опублікована в BJPsych Open (Reisel та ін., 1 серпня 2024), охопила 978 нових пацієнток спеціалізованої менопаузальної клініки в період з листопада 2022 до червня 2023 року за модифікованим опитувальником Greene. П’ять найпоширеніших симптомів: втома або брак енергії (96%), проблеми з пам’яттю (93%), труднощі з концентрацією (91%), дратівливість (90%) і напруження чи нервозність (90%). Через три місяці на тлі гормональної терапії — із трансдермальним тестостероном або без нього — покращилися всі симптоми, найбільше глибоко знижений настрій (на 69% за шкалою симптомів) і напади тривоги й паніки (на 61%). Два обмеження важливі: вибірка — жінки, які самі звернулися по спеціалізовану допомогу, тож поширеність значно вища за загальнопопуляційну, а дизайн — неконтрольований аудит «до і після» без плацебо-групи.",
              "cite": "BJPsych Open · Reisel та ін., 1 серпня 2024",
              "url": "https://www.cambridge.org/core/journals/bjpsych-open/article/prevalence-of-cognitive-and-moodrelated-symptoms-in-a-large-cohort-of-perimenopausal-and-menopausal-women/9478EDCFCB94629C1C02657229EC4A2F"
            },
            {
              "claim": "Дослідники наполягають: випробування мають вимірювати те, про що повідомляють жінки, а не лише те, що видно тестам.",
              "detail": "Коментуючи огляд, доцентка Ґурвіч зазначає, що від дослідників вимагають об’єктивних вимірювань на кшталт тестів пам’яті, «але ключовий симптом туману в голові — це суб’єктивний досвід», і що самозвітні шкали мають бути прийнятними так само, як для депресії й тривоги. Професорка Марта Гікі зазначає, що аналіз найкращих наявних досліджень показує: багато жінок переживають той чи інший ступінь когнітивних симптомів під час менопаузального переходу. Команда наголошує, що специфічного лікування наразі немає, а серед підходів, які вивчають, — сон, аеробні навантаження, харчування та когнітивно-поведінкова терапія.",
              "cite": "UCL News · 13 квітня 2026",
              "url": "https://www.ucl.ac.uk/news/2026/apr/brain-fog-affects-two-thirds-going-through-menopause-yet-poorly-understood"
            }
          ]
        },
        {
          "t": "links",
          "title": "Дотичне читання",
          "items": [
            {
              "name": "Тривога й туман у голові, а не припливи, — тепер головна скарга жінок у менопаузі",
              "url": "/ua/blog/anxiety-brain-fog-top-menopause-symptom/",
              "desc": "Опитування, яке поставило когнітивні симптоми вище за припливи — і в що це обійшлося жінкам на роботі."
            },
            {
              "name": "На 90 хвилин менше сну — і інсулінорезистентність у жінок зросла на 15%",
              "url": "/ua/blog/sleep-insulin-resistance-women/",
              "desc": "Порушений сон — один із названих чинників туману в голові. І не лише його."
            },
            {
              "name": "Перименопауза і діабет: що насправді відбувається з цукром крові",
              "url": "/ua/blog/perimenopause-diabetes-blood-sugar/",
              "desc": "Коли простіше пояснення туманного дня — не гормони, а глюкоза."
            }
          ]
        }
      ],
      "faq": [
        {
          "q": "Туман у голові в менопаузі — це ознака ранньої деменції?",
          "a": "За наявними даними — ні. Огляд The Lancet 2026 року зазначає, що когнітивні симптоми під час менопаузального переходу не пов’язані з підвищеним ризиком деменції, а загальні результати формального когнітивного тестування зазвичай залишаються в межах очікуваного. Запропоноване визначення прямо описує порушення, про яке повідомляє сама людина й яке відбувається без помітного об’єктивного зниження. Водночас, якщо симптоми важкі, посилюються або заважають виконувати звичні справи, а не просто сповільнюють вас, це варто обговорити з лікарем, а не списувати на менопаузу."
        },
        {
          "q": "Якщо тести на пам’ять у нормі, чи означає це, що туману насправді немає?",
          "a": "Ні — і саме цю невідповідність намагається охопити нове визначення. Змінюється ефективність, а не здатність: слово таки знаходиться, але повільніше; справа таки робиться, але з більшим зусиллям і більшим відволіканням. Стандартні когнітивні тести створені, щоб виявляти втрату здатності, тому вони можуть повністю пропустити реальне й виснажливе падіння ефективності. Дослідники вважають, що саме тому випробування лікування раз за разом нічого не показують — і що те, про що ви розповідаєте, має рахуватися як доказ саме по собі."
        }
      ]
    }
  }
];
