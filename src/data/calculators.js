// The three embedded calculators (separate app: repo olena-filatova/helsico,
// served at calculator.lenafilatova.co.uk). Each loads a widget script that
// mounts into its data-attribute div in a Shadow DOM. Strings carried over
// verbatim from the Divhunt SPA's resourcesPage copy.
export const CALC_ORIGIN = 'https://calculator.lenafilatova.co.uk';

export const CALCULATORS = [
  {
    slug: 'food-calculator',
    script: `${CALC_ORIGIN}/widget.js`,
    mountAttr: 'data-metabolic-calculator',
    openUrl: CALC_ORIGIN,
    en: {
      seoTitle: 'Metabolic food calculator — blood sugar impact',
      seoDesc: "A free food calculator that estimates how meals affect your blood sugar and metabolism — practical guidance for women's health after 40.",
      title: 'Metabolic food calculator',
      sub: 'See how any food is likely to affect your blood sugar — glycaemic load, carbs, protein and more. Built for Type 1 diabetes, insulin resistance and PMOS (previously PCOS). Search a food and calculate; no sign-up needed.',
      openNew: 'Not loading? Open the calculator in a new tab',
      disclaimer: 'This calculator is for general information only — it is not a medical tool and does not give medical advice. Please consult your doctor or diabetes care team with any questions about your health.',
    },
    ua: {
      seoTitle: 'Калькулятор впливу їжі на метаболізм і цукор у крові',
      seoDesc: 'Безкоштовний калькулятор, який оцінює, як страви впливають на рівень цукру в крові та метаболізм, — практичний помічник для здоров’я жінок після 40.',
      title: 'Калькулятор впливу їжі на метаболізм',
      sub: 'Дізнайтеся, як будь-який продукт, імовірно, вплине на рівень цукру в крові: глікемічне навантаження, вуглеводи, білок тощо. Створено для людей із цукровим діабетом 1 типу, інсулінорезистентністю та ПМОС (раніше — СПКЯ). Знайдіть продукт і зробіть розрахунок — реєстрація не потрібна.',
      openNew: 'Не завантажується? Відкрийте калькулятор у новій вкладці',
      disclaimer: 'Цей калькулятор має лише загальноінформаційний характер: це не медичний інструмент, і він не дає медичних порад. З будь-якими запитаннями щодо здоров’я звертайтеся до свого лікаря або фахівців, які ведуть ваш діабет.',
    },
  },
  {
    slug: 'exercise-calculator',
    script: `${CALC_ORIGIN}/exercise-widget.js`,
    mountAttr: 'data-exercise-calculator',
    openUrl: CALC_ORIGIN,
    en: {
      seoTitle: 'Exercise & blood sugar calculator',
      seoDesc: "A free calculator that estimates how different types of exercise are likely to affect your blood sugar — practical guidance for women's health after 40.",
      title: 'Exercise & blood sugar calculator',
      sub: 'See how different types of movement are likely to affect your blood sugar — cardio, strength, walking and more. Built for Type 1 diabetes, insulin resistance and PMOS (previously PCOS). No sign-up needed.',
      openNew: 'Not loading? Open the calculator in a new tab',
      disclaimer: 'This calculator is for general information only — it is not a medical tool and does not give medical advice. Please consult your doctor or diabetes care team with any questions about your health.',
    },
    ua: {
      seoTitle: 'Калькулятор впливу фізичних навантажень на цукор',
      seoDesc: 'Безкоштовний калькулятор, який оцінює, як різні види фізичної активності, імовірно, вплинуть на рівень цукру в крові, — практичний помічник для здоров’я жінок після 40.',
      title: 'Калькулятор впливу фізичних навантажень на цукор',
      sub: 'Дізнайтеся, як різні види руху, імовірно, вплинуть на рівень цукру в крові: кардіо, силові тренування, ходьба тощо. Створено для людей із цукровим діабетом 1 типу, інсулінорезистентністю та ПМОС (раніше — СПКЯ). Реєстрація не потрібна.',
      openNew: 'Не завантажується? Відкрийте калькулятор у новій вкладці',
      disclaimer: 'Цей калькулятор має лише загальноінформаційний характер: це не медичний інструмент, і він не дає медичних порад. З будь-якими запитаннями щодо здоров’я звертайтеся до свого лікаря або фахівців, які ведуть ваш діабет.',
    },
  },
  {
    slug: 'insulin-pump-doses',
    script: `${CALC_ORIGIN}/pump-widget.js`,
    mountAttr: 'data-pump-calculator',
    openUrl: `${CALC_ORIGIN}/pump-calculator`,
    en: {
      seoTitle: 'Insulin pump starting-dose calculator',
      seoDesc: 'Estimate starting insulin pump settings — basal rate, carb ratio and correction factor — when switching from pens or starting a pump. Free, no sign-up.',
      title: 'Insulin pump starting-dose calculator',
      sub: 'Estimate starting pump settings — basal rate, carb ratio and correction factor — when switching from pens or starting a pump for the first time. Adjusts for age and activity level. Built for Type 1 diabetes. No sign-up needed.',
      openNew: 'Not loading? Open the calculator in a new tab',
      disclaimer: 'These are approximate starting estimates only — not medical advice. Never start or change insulin pump settings without your doctor or diabetes care team.',
    },
    ua: {
      seoTitle: 'Калькулятор стартових доз інсулінової помпи',
      seoDesc: 'Розрахуйте орієнтовні стартові налаштування інсулінової помпи — базальну швидкість, вуглеводний коефіцієнт і фактор корекції — під час переходу зі шприц-ручок або на початку помпової терапії. Безкоштовно, без реєстрації.',
      title: 'Калькулятор стартових доз інсулінової помпи',
      sub: 'Розрахуйте орієнтовні стартові налаштування помпи — базальну швидкість, вуглеводний коефіцієнт і фактор корекції, — якщо ви переходите зі шприц-ручок на помпу або вперше починаєте нею користуватися. Враховує вік і рівень активності. Створено для людей із цукровим діабетом 1 типу. Реєстрація не потрібна.',
      openNew: 'Не завантажується? Відкрийте калькулятор у новій вкладці',
      disclaimer: 'Це лише приблизні стартові значення, а не медична порада. Ніколи не встановлюйте й не змінюйте налаштування інсулінової помпи без свого лікаря або фахівців, які ведуть ваш діабет.',
    },
  },
];

export const CALC_UI = {
  en: { back: 'All resources' },
  ua: { back: 'Усі ресурси' },
};
