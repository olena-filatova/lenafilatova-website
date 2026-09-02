export default {
  "slug": "smartwatch-insulin-resistance-prediction",
  "tags": [
    "insulin-resistance",
    "type-2-diabetes"
  ],
  "date": "2026-08-30",
  "image": "/images/smartwatch-insulin-resistance-prediction.jpg",
  "cats": [
    "diabetes"
  ],
  "en": {
    "cat": "Diabetes",
    "imageAlt": "A wrist wearing a fitness smartwatch, a fingertip resting on its screen.",
    "title": "Your smartwatch can help spot insulin resistance — but it still can’t do it alone",
    "seoTitle": "Can a Smartwatch Spot Insulin Resistance? What Nature Found",
    "metaDesc": "Google’s WEAR-ME study in Nature trained a model on smartwatch data to flag insulin resistance. What it actually achieved — and what the headlines left out.",
    "excerpt": "A study of 1,165 people in Nature trained a model on Fitbit data and routine bloods to flag insulin resistance. It works — but the watch on its own is the weakest part of it.",
    "meta": "30 August 2026 · 6 min read",
    "lead": "“Smartwatches can now predict diabetes before it starts” has been doing the rounds since March. The study underneath it is real, careful and genuinely interesting — and it does not say that.",
    "blocks": [
      {
        "t": "p",
        "text": "The study is called WEAR-ME, it was run remotely by Google across the United States, and it was published in Nature on 16 March 2026. Researchers took 1,165 adults who already owned a Fitbit or a Pixel Watch, collected their device data, sent them to a lab for a fasting blood draw, and trained neural networks to work out who was insulin resistant. The people involved were mostly not ill: the median age was 45, the median BMI 28, and the median HbA1c 5.4% — comfortably below the diabetes line."
      },
      {
        "t": "p",
        "text": "The best model reached an AUROC of 0.80, correctly identifying 76% of the people who were insulin resistant and 84% of those who were not. That is a decent result for something built out of a wrist device and an ordinary blood panel. But read the ingredient list before you read the headline, because the model that scored 0.80 used the watch, the person’s age and demographics, and their routine bloods — fasting glucose and a lipid panel. Take the blood test away and leave the watch and demographics on their own, and performance drops to 0.70."
      },
      {
        "t": "h",
        "text": "What the watch was actually noticing"
      },
      {
        "t": "p",
        "text": "The individual signals are worth sitting with, because they are much weaker than a headline implies. Against a lab measure of insulin resistance, resting heart rate correlated at r = 0.27 and daily step count at r = −0.25 — real, statistically significant, and small. Heart rate variability was weaker still at r = −0.14. Sleep duration, which nearly every write-up of this study mentions, does not appear among the significant correlations the paper reports at all. The strongest single things in the whole dataset were not from the watch: fasting glucose (r = 0.57), HbA1c (r = 0.45), BMI (r = 0.43) and triglycerides (r = 0.40)."
      },
      {
        "t": "p",
        "text": "What made the watch worth including was not any one number but the shape of the whole recording. The team fine-tuned what they call a wearable foundation model — a network pre-trained on 40 million hours of sensor data — and fed it the raw time series rather than weekly averages. That version extracted considerably more: in the model built on it, wearable data carried 82% of the predictive weight, against 43% when the same data were reduced to simple averages. In a separate validation group of 72 people, adding the watch to demographics, fasting glucose and a lipid panel lifted performance from 0.76 to 0.88."
      },
      {
        "t": "h",
        "text": "What it does not do"
      },
      {
        "t": "p",
        "text": "It does not predict the future. Everyone in WEAR-ME had their device data and their blood drawn in the same window, so the model estimates whether you are insulin resistant now — not whether you will develop type 2 diabetes later. The authors say so themselves and call for longitudinal studies to test whether wearables can pick up the change when someone improves. “Before diabetes starts” describes who was in the study, not what the model forecasts."
      },
      {
        "t": "p",
        "text": "Nor is it a finished product. This is research, not a feature you can switch on: there is no approved device or app that does this, and the paper is explicit that the yardstick it trained against is itself imperfect. The gold standard for measuring insulin resistance is a hyperinsulinaemic euglycaemic clamp, which happens in research facilities. WEAR-ME used HOMA-IR instead — a calculation from fasting insulin and glucose that is far more practical and can vary by around 23% between two measurements in the same person. And 76% sensitivity means that at the threshold they chose, roughly one insulin-resistant person in four was still missed."
      },
      {
        "t": "p",
        "text": "There is one more caveat I want to be straight about, because this study is being reported everywhere as women’s health news. It is not analysed that way. The paper reports no results split by sex, and menopause is not mentioned in it. Insulin resistance does rise across the menopause transition, and I have written about [the prediabetes signs that get mistaken for hormones](/blog/prediabetes-signs-perimenopause/) — but nothing in WEAR-ME tells us the model performs equally well in a woman of 48 whose sleep, resting heart rate and cycle are all in flux. Whether it does is an open question, and a good one for someone to fund."
      },
      {
        "t": "p",
        "text": "The cohort has its own edges too. Everyone was a US adult who already owned a Fitbit or Pixel Watch and had worn it on at least three-quarters of days for three months, and only a quarter of the 4,416 people who enrolled produced a complete dataset. The authors note this may have overrepresented people who are health-aware or already have cardiometabolic disease, and that ownership of these devices still skews white."
      },
      {
        "t": "h",
        "text": "So what is useful here today"
      },
      {
        "t": "p",
        "text": "Two things, I think. The first is that the signals the model leaned on are ones you can already see on your own wrist, and they point the way you would expect: a higher resting heart rate and fewer daily steps travelled with worse insulin sensitivity. Weakly, on their own — nobody should read a resting heart rate as a diagnosis. But if your resting heart rate has been drifting up over a year while your step count drifts down, that is a reasonable prompt to ask for a blood test, and [the evidence on sleep and insulin resistance in women](/blog/sleep-insulin-resistance-women/) is worth reading alongside it."
      },
      {
        "t": "p",
        "text": "The second is that the practical route to knowing your own insulin resistance has not changed. HOMA-IR needs a fasting insulin alongside a fasting glucose, and fasting insulin is not part of a standard panel — you generally have to ask for it. That request is a great deal more informative today than any wearable, and it is the same test this whole study was trying to approximate. And whatever the number comes back as, the lever the study points to is the ordinary one — activity and what you eat around it. My [metabolic food calculator](/resources/food-calculator/) is built for exactly this: it estimates the glycaemic load of a meal for someone managing insulin resistance."
      },
      {
        "t": "h",
        "text": "What the research says"
      },
      {
        "t": "refs",
        "items": [
          {
            "claim": "A model using smartwatch data plus routine bloods identified insulin resistance with an AUROC of 0.80.",
            "detail": "The WEAR-ME study enrolled 4,416 US adults aged 21–80 who already used a Fitbit or Pixel Watch; 1,165 (25%) had complete data and were analysed (median age 45, median BMI 28 kg/m², median HbA1c 5.4%). Insulin resistance was defined as HOMA-IR ≥ 2.9. The multimodal model — wearable data, demographics and routine blood biomarkers — reached AUROC 0.80, sensitivity 76%, specificity 84%, R² = 0.50. Wearable data plus demographics alone reached AUROC 0.70. In an independent validation cohort of 72 people, a wearable-foundation-model plus demographics beat demographics alone (0.75 vs 0.66), and adding wearable data to demographics, fasting glucose and a lipid panel raised AUROC from 0.76 to 0.88.",
            "cite": "Metwally AA et al. · Nature, 16 March 2026 · PMC13061641",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13061641/"
          },
          {
            "claim": "Individual wearable signals correlate only weakly with insulin resistance.",
            "detail": "Pearson correlations with HOMA-IR in the WEAR-ME cohort: fasting glucose r = 0.57, HbA1c r = 0.45, BMI r = 0.43, triglycerides r = 0.40, HDL cholesterol r = −0.30, resting heart rate r = 0.27, daily step count r = −0.25, HRV r = −0.14 (all P < 0.001). Sleep duration was among the lifestyle factors analysed but is not reported among the significant correlations. Using a foundation model on raw sensor time series rather than simple averages raised the share of predictive weight carried by wearable data from 43% to 82%.",
            "cite": "Metwally AA et al. · Nature 652, 451–461 (2026)",
            "url": "https://pubmed.ncbi.nlm.nih.gov/41840032/"
          },
          {
            "claim": "The study measures current insulin resistance, not future diabetes risk, and HOMA-IR is itself a proxy.",
            "detail": "Wearable data and blood draws were collected in the same window, so the model classifies present insulin-resistance status rather than forecasting progression; the authors call for future longitudinal studies to test whether wearables can detect improvement after weight loss or exercise. They also note that HOMA-IR was used in place of the gold-standard hyperinsulinaemic euglycaemic clamp, with a reported coefficient of variation of 23.5% between two measurements, and that the analysed cohort may overrepresent people with cardiometabolic disease or health awareness, with wearable adoption skewed towards white participants. No results are reported by sex, and menopause is not discussed.",
            "cite": "Metwally AA et al. · Nature, discussion and limitations",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13061641/"
          }
        ]
      },
      {
        "t": "links",
        "title": "Related reading",
        "items": [
          {
            "name": "Prediabetes signs in perimenopause that get mistaken for “just hormones”",
            "url": "/blog/prediabetes-signs-perimenopause/",
            "desc": "The symptoms that look hormonal and are actually blood sugar — and the tests to ask for."
          },
          {
            "name": "Ninety minutes less sleep raised insulin resistance by 15% in women",
            "url": "/blog/sleep-insulin-resistance-women/",
            "desc": "What a controlled sleep-restriction trial found, and why sleep is more than a wearable metric."
          },
          {
            "name": "A normal BMI told these women nothing — the direction it was moving told them everything",
            "url": "/blog/bmi-trajectory-prediabetes-women/",
            "desc": "Why the trend in a number beats any single reading of it."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "Can my smartwatch tell me if I have insulin resistance?",
        "a": "Not today. No consumer watch or app offers this — WEAR-ME is a research study, not a released feature, and its best model needed a fasting blood test alongside the watch data. On its own, the watch and basic demographics reached an AUROC of 0.70, which is well short of anything you would act on. If you want to know where you stand, ask about a fasting insulin alongside a fasting glucose so a HOMA-IR can be calculated."
      },
      {
        "q": "Does a higher resting heart rate mean I'm becoming insulin resistant?",
        "a": "On its own, no. In this study a higher resting heart rate did travel with higher insulin resistance, but only weakly (r = 0.27), and the same was true in reverse for daily steps (r = −0.25). Resting heart rate moves with fitness, illness, alcohol, stress, caffeine and poor sleep too. A slow upward drift over months alongside falling activity is worth mentioning to your GP; a higher reading this week is not."
      },
      {
        "q": "Does this study apply to women in perimenopause?",
        "a": "Nobody knows yet, and that is the honest answer. The median participant was 45, so many of the women in it will have been in the transition — but the paper reports no analysis by sex and does not discuss menopause at all. Since resting heart rate, heart rate variability and sleep all shift during perimenopause, and those are three of the model's inputs, it is a genuinely open question whether it performs as well in this group."
      }
    ]
  },
  "ua": {
    "cat": "Діабет",
    "imageAlt": "Зап'ястя з фітнес-годинником, кінчик пальця торкається екрана.",
    "title": "Смартгодинник може допомогти виявити інсулінорезистентність — але не самотужки",
    "seoTitle": "Чи виявить смартгодинник інсулінорезистентність?",
    "metaDesc": "Дослідження WEAR-ME від Google у Nature навчило модель визначати інсулінорезистентність за даними смартгодинника. Що воно справді показало — і чого не кажуть заголовки.",
    "excerpt": "Дослідження за участю 1165 людей, опубліковане в Nature, навчило модель визначати інсулінорезистентність за даними Fitbit і звичайних аналізів. Воно працює — але сам годинник тут найслабша ланка.",
    "meta": "30 серпня 2026 · 6 хв читання",
    "lead": "«Смартгодинники тепер передбачають діабет ще до його початку» — цей заголовок гуляє мережею з березня. Дослідження під ним справжнє, ретельне й справді цікаве. І воно каже не це.",
    "blocks": [
      {
        "t": "p",
        "text": "Дослідження називається WEAR-ME, його провела компанія Google дистанційно по всій території США, а опублікували його в журналі Nature 16 березня 2026 року. Науковці взяли 1165 дорослих, які вже мали Fitbit або Pixel Watch, зібрали дані з їхніх пристроїв, відправили їх до лабораторії здати кров натще — і навчили нейромережі визначати, у кого є інсулінорезистентність. Учасники здебільшого не були хворими: медіанний вік — 45 років, медіанний ІМТ — 28, медіанний HbA1c — 5,4%, тобто помітно нижче за діабетичний поріг."
      },
      {
        "t": "p",
        "text": "Найкраща модель досягла AUROC 0,80: вона правильно розпізнала 76% людей з інсулінорезистентністю і 84% тих, у кого її не було. Для інструмента, зібраного з наручного пристрою та звичайної панелі аналізів, це непоганий результат. Але подивіться на склад, перш ніж читати заголовок: модель, яка дала 0,80, використовувала годинник, вік і демографічні дані людини — і звичайні аналізи крові: глюкозу натще та ліпідограму. Заберіть аналіз крові, залиште самі годинник і демографію — і результат падає до 0,70."
      },
      {
        "t": "h",
        "text": "Що саме помічав годинник"
      },
      {
        "t": "p",
        "text": "На окремі сигнали варто подивитися уважно, бо вони значно слабші, ніж підказує заголовок. Порівняно з лабораторним показником інсулінорезистентності пульс у спокої мав кореляцію r = 0,27, а кількість кроків за день — r = −0,25. Це реальні й статистично значущі, але малі величини. Варіабельність серцевого ритму виявилася ще слабшою — r = −0,14. А тривалість сну, яку згадує майже кожен переказ цього дослідження, взагалі не потрапила до переліку значущих кореляцій у самій статті. Найсильніші показники в усьому наборі даних були не з годинника: глюкоза натще (r = 0,57), HbA1c (r = 0,45), ІМТ (r = 0,43) і тригліцериди (r = 0,40)."
      },
      {
        "t": "p",
        "text": "Годинник виявився корисним не через якесь одне число, а через форму всього запису. Команда донавчила так звану базову модель для носимих пристроїв — мережу, попередньо натреновану на 40 мільйонах годин сенсорних даних, — і подала їй сирі часові ряди замість тижневих середніх. Такий варіант витягнув значно більше: у побудованій на ньому моделі дані з пристрою давали 82% прогностичної ваги проти 43%, коли ті самі дані зводили до простих середніх. В окремій валідаційній групі з 72 осіб додавання годинника до демографії, глюкози натще та ліпідограми підняло результат з 0,76 до 0,88."
      },
      {
        "t": "h",
        "text": "Чого воно не робить"
      },
      {
        "t": "p",
        "text": "Воно не передбачає майбутнє. Усі учасники WEAR-ME здавали кров і давали дані пристрою в одному й тому ж проміжку часу, тож модель оцінює, чи є у вас інсулінорезистентність зараз, а не чи розвинеться у вас діабет 2 типу згодом. Автори пишуть про це прямо й закликають до довготривалих досліджень, які перевірять, чи здатні носимі пристрої вловити зміни, коли людині стає краще. «До початку діабету» описує тих, хто був у дослідженні, а не те, що модель прогнозує."
      },
      {
        "t": "p",
        "text": "Це також не готовий продукт. Це наука, а не функція, яку можна ввімкнути: жоден схвалений пристрій чи застосунок так не вміє. І сама стаття чесно каже, що еталон, за яким модель навчали, теж неідеальний. Золотий стандарт вимірювання інсулінорезистентності — гіперінсулінемічний еуглікемічний клемп, який роблять лише в наукових центрах. WEAR-ME натомість використало HOMA-IR — розрахунок за інсуліном і глюкозою натще, значно практичніший, але такий, що може відрізнятися приблизно на 23% між двома вимірюваннями в однієї людини. А чутливість 76% означає, що при обраному порозі приблизно кожну четверту людину з інсулінорезистентністю модель усе одно пропускала."
      },
      {
        "t": "p",
        "text": "І ще одне застереження, про яке хочу сказати прямо, бо це дослідження всюди подають як новину жіночого здоров’я. Його так не аналізували. У статті немає жодних результатів окремо за статтю, а менопаузу в ній не згадують взагалі. Інсулінорезистентність справді зростає під час менопаузального переходу, і я писала про [ознаки предіабету, які приймають за гормони](/ua/blog/prediabetes-signs-perimenopause/). Але ніщо в WEAR-ME не каже нам, чи працює модель так само добре для 48-річної жінки, у якої і сон, і пульс у спокої, і цикл — усе в русі. Це відкрите питання, і дуже хороше."
      },
      {
        "t": "p",
        "text": "Сама вибірка теж має свої межі. Усі учасники — дорослі зі США, які вже мали Fitbit або Pixel Watch і носили його щонайменше три чверті днів протягом трьох місяців; повний набір даних дала лише чверть із 4416 людей, які зареєструвалися. Автори зазначають, що це могло дати перевагу тим, хто уважніший до свого здоров’я або вже має кардіометаболічні захворювання, і що власники таких пристроїв досі переважно білі."
      },
      {
        "t": "h",
        "text": "То що з цього корисне вже сьогодні"
      },
      {
        "t": "p",
        "text": "Дві речі. Перша: сигнали, на які спиралася модель, ви й так бачите на власному зап’ясті, і вони вказують у передбачуваний бік — вищий пульс у спокої й менше кроків ішли поруч із гіршою чутливістю до інсуліну. Слабко й поодинці: ніхто не має читати пульс у спокої як діагноз. Але якщо ваш пульс у спокої повільно повзе вгору протягом року, а кількість кроків — вниз, це розумний привід попросити аналіз. Поряд варто прочитати й [що відомо про сон та інсулінорезистентність у жінок](/ua/blog/sleep-insulin-resistance-women/)."
      },
      {
        "t": "p",
        "text": "Друга: практичний шлях дізнатися свою інсулінорезистентність не змінився. Для HOMA-IR потрібен інсулін натще разом із глюкозою натще, а інсулін натще не входить до стандартної панелі — його зазвичай треба попросити окремо. Сьогодні це запитання дасть вам значно більше, ніж будь-який носимий пристрій, і це той самий аналіз, який усе це дослідження й намагалося замінити. І хай яким буде результат, важіль, на який вказує дослідження, — звичайний: рух і те, що ви їсте навколо нього. Мій [калькулятор впливу їжі на метаболізм](/ua/resources/food-calculator/) створений саме для цього: він оцінює глікемічне навантаження страви для тих, хто має інсулінорезистентність."
      },
      {
        "t": "h",
        "text": "Що кажуть дослідження"
      },
      {
        "t": "refs",
        "items": [
          {
            "claim": "Модель на даних смартгодинника та звичайних аналізах визначала інсулінорезистентність з AUROC 0,80.",
            "detail": "У дослідження WEAR-ME зареєструвалися 4416 дорослих зі США віком 21–80 років, які вже користувалися Fitbit або Pixel Watch; повні дані мали 1165 осіб (25%), їх і аналізували (медіанний вік 45 років, медіанний ІМТ 28 кг/м², медіанний HbA1c 5,4%). Інсулінорезистентність визначали як HOMA-IR ≥ 2,9. Мультимодальна модель — дані пристрою, демографія та звичайні біомаркери крові — дала AUROC 0,80, чутливість 76%, специфічність 84%, R² = 0,50. Дані пристрою разом із демографією без аналізів давали AUROC 0,70. В незалежній валідаційній когорті з 72 осіб базова модель для носимих пристроїв разом із демографією перевершила саму демографію (0,75 проти 0,66), а додавання даних пристрою до демографії, глюкози натще та ліпідограми підняло AUROC з 0,76 до 0,88.",
            "cite": "Metwally AA та ін. · Nature, 16 березня 2026 · PMC13061641",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13061641/"
          },
          {
            "claim": "Окремі сигнали з носимого пристрою корелюють з інсулінорезистентністю лише слабко.",
            "detail": "Кореляції Пірсона з HOMA-IR у когорті WEAR-ME: глюкоза натще r = 0,57, HbA1c r = 0,45, ІМТ r = 0,43, тригліцериди r = 0,40, ЛПВЩ-холестерин r = −0,30, пульс у спокої r = 0,27, кроки за день r = −0,25, варіабельність серцевого ритму r = −0,14 (усі P < 0,001). Тривалість сну була серед проаналізованих факторів способу життя, але не потрапила до переліку значущих кореляцій. Використання базової моделі на сирих часових рядах замість простих середніх підняло частку прогностичної ваги, яку несуть дані пристрою, з 43% до 82%.",
            "cite": "Metwally AA та ін. · Nature 652, 451–461 (2026)",
            "url": "https://pubmed.ncbi.nlm.nih.gov/41840032/"
          },
          {
            "claim": "Дослідження вимірює наявну інсулінорезистентність, а не майбутній ризик діабету, і сам HOMA-IR є непрямим показником.",
            "detail": "Дані пристрою й забір крові збирали в одному проміжку часу, тож модель класифікує поточний стан, а не прогнозує прогресування; автори закликають до довготривалих досліджень, які перевірять, чи вловлюють носимі пристрої покращення після схуднення або фізичних навантажень. Вони також зазначають, що замість золотого стандарту — гіперінсулінемічного еуглікемічного клемпа — використовували HOMA-IR із заявленим коефіцієнтом варіації 23,5% між двома вимірюваннями, і що проаналізована когорта могла мати надлишок людей із кардіометаболічними захворюваннями або підвищеною увагою до здоров’я, а серед власників пристроїв переважають білі учасники. Результатів за статтю не наводять, менопаузу не обговорюють.",
            "cite": "Metwally AA та ін. · Nature, обговорення та обмеження",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13061641/"
          }
        ]
      },
      {
        "t": "links",
        "title": "Читайте також",
        "items": [
          {
            "name": "Ознаки предіабету в перименопаузі, які приймають за «просто гормони»",
            "url": "/ua/blog/prediabetes-signs-perimenopause/",
            "desc": "Симптоми, які виглядають гормональними, а насправді стосуються цукру — і які аналізи просити."
          },
          {
            "name": "Дев’яносто хвилин недосипу підвищили інсулінорезистентність у жінок на 15%",
            "url": "/ua/blog/sleep-insulin-resistance-women/",
            "desc": "Що показало контрольоване дослідження обмеження сну — і чому сон більший за показник у застосунку."
          },
          {
            "name": "Нормальний ІМТ не сказав цим жінкам нічого — а напрямок його руху сказав усе",
            "url": "/ua/blog/bmi-trajectory-prediabetes-women/",
            "desc": "Чому тенденція показника важливіша за будь-яке окреме вимірювання."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "Чи може мій смартгодинник сказати, що в мене інсулінорезистентність?",
        "a": "Сьогодні — ні. Жоден споживчий годинник чи застосунок цього не пропонує: WEAR-ME — це наукове дослідження, а не випущена функція, і його найкраща модель потребувала аналізу крові натще поряд із даними пристрою. Сам годинник разом із базовою демографією дав AUROC 0,70, а це надто мало, щоб щось на цьому будувати. Якщо хочете знати свій стан, попросіть інсулін натще разом із глюкозою натще, щоб можна було порахувати HOMA-IR."
      },
      {
        "q": "Чи означає вищий пульс у спокої, що в мене розвивається інсулінорезистентність?",
        "a": "Сам по собі — ні. У цьому дослідженні вищий пульс у спокої справді йшов поруч із вищою інсулінорезистентністю, але слабко (r = 0,27); те саме у зворотний бік стосувалося кроків (r = −0,25). Пульс у спокої змінюється також від тренованості, хвороби, алкоголю, стресу, кави й поганого сну. Повільне зростання протягом місяців разом зі зниженням активності варто згадати лікарю; вищий показник цього тижня — ні."
      },
      {
        "q": "Чи стосується це дослідження жінок у перименопаузі?",
        "a": "Поки що ніхто не знає, і це чесна відповідь. Медіанний вік учасників — 45 років, тож багато жінок у вибірці були в переході. Але стаття не наводить аналізу за статтю й узагалі не згадує менопаузу. Оскільки пульс у спокої, варіабельність серцевого ритму та сон під час перименопаузи змінюються, а це три з вхідних даних моделі, питання справді відкрите."
      }
    ]
  }
};
