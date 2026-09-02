// Same date as 1 earlier post; seq keeps the hub order stable.
export const seq = 1;

export default {
  "slug": "alcohol-and-blood-sugar",
  "date": "2026-08-20",
  "image": "/images/alcohol-and-blood-sugar.jpg",
  "cats": [
    "diabetes",
    "perimenopause"
  ],
  "en": {
    "cat": "Diabetes & Perimenopause",
    "title": "A drink tonight, and your glucose does something strange ten hours later",
    "seoTitle": "Alcohol and Blood Sugar: The 10-Hour Delay Explained",
    "imageAlt": "Two tall cocktails garnished with cucumber and orange being set down on a restaurant table between two people",
    "metaDesc": "Alcohol can drop your glucose 10–12 hours later, not while you drink. The mechanism, what it really means for glucagon, and what changes after 40.",
    "excerpt": "Almost everyone assumes alcohol affects blood sugar because of the sugar in the drink. It doesn’t, and that misunderstanding is why the effect catches people out. The thing worth knowing happens hours after the glass is empty — usually overnight, usually while you are asleep.",
    "meta": "20 August 2026 · 10 min read",
    "lead": "In a controlled study, six men with type 1 diabetes drank dry white wine at nine in the evening. Their glucose overnight was no different from the nights they drank water. Then, from ten the next morning, five of the six needed treating for hypoglycaemia. The alcohol had been undetectable in their blood since eight. That gap — between the drink and the consequence — is the whole story, and it is almost never explained to the people it happens to.",
    "blocks": [
      {
        "t": "quote",
        "text": "Read this first. This article is education and lived experience, not medical advice, and it contains no dosing advice of any kind. I am not going to suggest you change an insulin dose, or reduce a basal rate, or name a number of units, because I cannot know your regimen, your numbers or your history — and a wrong guess there does its damage at four in the morning, when you are least able to correct it. If you use insulin, or any medication that can cause hypoglycaemia, the plan for drinking is one to make with your own diabetes team, in advance, in daylight, while everyone involved is sober. This post is not an argument for drinking and it is not an argument against it. It is an explanation of a mechanism that is badly explained everywhere else."
      },
      {
        "t": "h",
        "text": "The pattern that doesn’t add up"
      },
      {
        "t": "p",
        "text": "You had two glasses of wine with dinner on Friday. Not a heavy night, nothing you would describe as drinking. You went to bed, the numbers overnight were unremarkable, and you thought no more about it. Then Saturday happened: a low mid-morning that made no sense, or a whole day where you seemed to need less of everything, or an alarm at four in the morning you couldn’t account for from the plate you’d eaten."
      },
      {
        "t": "p",
        "text": "So you go looking, and you find a wall of advice about carbohydrate counts in drinks. Which cocktails are sugary, which wines are dry, whether tonic has more sugar than you thought. All perfectly true, all about a completely different problem, and none of it explaining why the trouble arrived on Saturday morning rather than Friday night. You are looking at the wrong variable. It isn’t the sugar. It is the ethanol — and its effect is not on the glucose going into you but on the glucose your own body makes."
      },
      {
        "t": "h",
        "text": "It isn’t the sugar in the drink"
      },
      {
        "t": "p",
        "text": "This is the single most useful thing to understand, and it inverts most of what gets said about drinking with diabetes. A dry white wine has very little carbohydrate in it. That does not make it safe; in the study I opened with, dry white wine was the intervention. A sweet mixer has a lot of carbohydrate in it, which can push glucose up in the short term — and then leave the ethanol underneath to do its own, slower thing hours later, when the sugar is long gone."
      },
      {
        "t": "p",
        "text": "Carbohydrate in a drink behaves like carbohydrate in anything else: it goes up, and it comes back down, and you can see it happening. Ethanol does something structurally different. It doesn’t add glucose or remove glucose. It interferes with your liver’s ability to manufacture glucose — which is a capacity you only notice when you need it, and you need it when you have not eaten for a while. Which is to say: at night."
      },
      {
        "t": "table",
        "head": [
          "What usually gets blamed",
          "What the mechanism actually is"
        ],
        "rows": [
          [
            "The sugar in the drink",
            "Real, but short-lived and visible — and it can run the opposite way to everything else on this page. Measured against a matched glucose drink, alcohol raised the two-hour glucose response by 18%, and beer’s measured glycaemic index came out at 119 against 80 for the non-alcoholic version, apparently through reduced insulin sensitivity. So the early rise is genuine. It is simply not what causes the delayed fall: in the controlled study of evening drinking, the drink was dry white wine, with almost no carbohydrate at all."
          ],
          [
            "“I must have got the meal wrong”",
            "The commonest self-diagnosis, and the reason the pattern goes unrecognised for years. The meal is a plausible culprit because it is recent; the drink is not, because it was ten hours ago and its effect had not appeared yet."
          ],
          [
            "Drinking on an empty stomach makes you drunk faster",
            "True, and separately relevant. Skipping food also means less stored glycogen in the liver, which removes the buffer that would otherwise carry you through the hours when new glucose production is suppressed."
          ],
          [
            "The alcohol is still in your system",
            "Usually not. In the evening-drinking study, blood ethanol was undetectable by eight the next morning — two hours before the hypoglycaemia started. The alcohol leaves; the effect on the liver outlasts it."
          ]
        ]
      },
      {
        "t": "h",
        "text": "What your liver is actually doing"
      },
      {
        "t": "p",
        "text": "Your liver keeps your glucose up overnight in two ways. The first is glycogenolysis: breaking down stored glycogen and releasing the glucose. Think of it as the tank. The second is gluconeogenesis: building new glucose from scratch out of lactate, glycerol and amino acids. Think of it as the refinery. In a normal night, the tank covers the early hours and the refinery takes over as the tank empties."
      },
      {
        "t": "p",
        "text": "Metabolising ethanol takes priority over almost everything else the liver does, and changes its internal chemistry while it happens: ethanol becomes acetaldehyde and then acetate, and each step consumes NAD+ and produces NADH. That shifted NADH-to-NAD+ ratio starves the gluconeogenic pathway of something it requires. The refinery slows down — by up to around 45%, on the figure most commonly quoted in the diabetes literature, though treat that as an order of magnitude rather than a measurement, for reasons I come to below."
      },
      {
        "t": "p",
        "text": "The tank is untouched. That is exactly why nothing happens at first. You drink, the refinery quietly goes offline, and the tank carries you for hours without anyone noticing anything is wrong. The problem arrives at the moment the tank runs low — which, if you drank in the evening, is the middle of the night or the following morning, and there is nothing behind it."
      },
      {
        "t": "h",
        "text": "Why the effect is delayed"
      },
      {
        "t": "p",
        "text": "The best data comes from a small controlled study at Bournemouth, published in Diabetes Care in 2001. Six men with type 1 diabetes were admitted twice, from five in the evening until noon the next day, on standardised meals and a fixed overnight basal insulin infusion. At nine they drank either dry white wine or mineral water. Overnight the two conditions were indistinguishable — no significant difference in glucose at all. In the morning, fasting and post-breakfast glucose were significantly lower after the wine, with a post-meal peak of 8.9 mmol/L against 15 mmol/L on the water nights. From ten, five of the six needed treatment for hypoglycaemia, bottoming out between 1.9 and 2.9 mmol/L. On the water nights, none of them had a hypo at all."
      },
      {
        "t": "p",
        "text": "One number in that study deserves stating plainly, because almost nobody quoting it does. The dose was 0.75 g of alcohol per kilogram of body weight — for a 70 kg man, about 52 g, or roughly six and a half UK units. That is not a glass of wine. It is closer to two-thirds of a bottle, drunk inside ninety minutes. The delayed morning low is convincingly demonstrated at that amount. Where it begins — whether one glass does anything of the kind — has not really been studied, and I would rather tell you that than let a headline imply a precision the research does not have."
      },
      {
        "t": "p",
        "text": "Units are worth being able to picture, because almost every figure in this post is expressed in them and “a drink” is not a fixed quantity. One UK unit is 8 g of pure alcohol. The study dose is in the table so you can see where it sits — between a large glass and a bottle, not at the top of the list."
      },
      {
        "t": "table",
        "head": [
          "Drink",
          "Typical serve",
          "Alcohol",
          "UK units"
        ],
        "rows": [
          [
            "Single spirit measure",
            "25 ml at 40%",
            "7.9 g",
            "1.0"
          ],
          [
            "Small glass of wine",
            "125 ml at 12%",
            "11.8 g",
            "1.5"
          ],
          [
            "Double spirit measure",
            "50 ml at 40%",
            "15.8 g",
            "2.0"
          ],
          [
            "Medium glass of wine",
            "175 ml at 13%",
            "17.9 g",
            "2.2"
          ],
          [
            "Pint of lager",
            "568 ml at 4%",
            "17.9 g",
            "2.2"
          ],
          [
            "Large glass of wine",
            "250 ml at 13%",
            "25.6 g",
            "3.2"
          ],
          [
            "The dose used in the study above",
            "0.75 g/kg, 70 kg adult",
            "52.5 g",
            "6.6"
          ],
          [
            "Bottle of wine",
            "750 ml at 13%",
            "76.9 g",
            "9.6"
          ]
        ]
      },
      {
        "t": "p",
        "text": "A modelling paper by the same group put the window at roughly 10 to 12 hours after a nine o’clock drink, and that is the number worth carrying around — it places the vulnerable period somewhere between seven and nine the next morning, with Turner’s participants still dropping at ten. Other work describes raised risk extending across the following 24 hours: a wider claim on weaker evidence, pointing the same way. The risk period is the next day, not the night out."
      },
      {
        "t": "p",
        "text": "There is a wrinkle worth knowing, because it changes what you would look for. Suppressed gluconeogenesis is not the only thing going on. In the same study, growth hormone secretion was significantly reduced between midnight and four in the morning after the wine — and growth hormone is one of the things that normally helps pull glucose back up. The modelling work adds another layer: once the alcohol is cleared, hepatic insulin sensitivity appears to increase while the liver restocks its glycogen, pulling glucose down further at precisely the point everyone assumes the episode is over. So it is not one clean mechanism with one clean timer. It is several overlapping effects with different half-lives — which is exactly why the pattern is so hard to recognise from the inside."
      },
      {
        "t": "h",
        "text": "Why an empty tank makes it worse"
      },
      {
        "t": "p",
        "text": "Everything above depends on how full the tank was when the refinery went offline. Drink with a proper meal and there is glycogen to draw on. Drink after skipping dinner, or after a long gap, or after a hard training session that has already drawn stores down, and the buffer that was supposed to carry you through the night is not there."
      },
      {
        "t": "p",
        "text": "The exercise interaction is the one that catches people out most, because both effects are delayed and they stack. A long ride or a heavy session depletes glycogen and raises insulin sensitivity for many hours afterwards; alcohol then removes the mechanism that would normally compensate. Saturday’s session followed by Saturday evening’s drinks puts both peaks in the same part of Sunday morning. I have written separately about [what happens to blood sugar around training](/blog/eating-around-training-blood-sugar/), and the timing principles there are the ones that matter here too."
      },
      {
        "t": "h",
        "text": "The evidence is less tidy than the headline"
      },
      {
        "t": "p",
        "text": "The confident version of this story gets repeated far more often than the evidence supports, so you should know where the soft ground is. The Bournemouth study is six people. Six men, beautifully controlled, dramatic result, never repeated at scale. A companion short report from the same group, using continuous monitoring, is described as finding average glucose 1.2 mmol/L lower after an evening drink — consistent, but it is a research letter rather than a full paper, and I am reporting it as the later systematic review summarised it. And in a 1993 clamp study, intravenous ethanol given to nine overnight-fasted people with type 1 diabetes caused no hypoglycaemia whatsoever."
      },
      {
        "t": "p",
        "text": "One study is often cited as contradicting all this, and it is worth looking at properly rather than listing it as a disagreement. Fourteen adolescents with type 1 diabetes wore sensors through a real night out — a mean of nine standard drinks for the young men and six for the young women, which is well beyond moderate. It found more glycaemic variability and, if anything, fewer low readings than on their control nights. But it measured from 6pm to 6am, and stopped. Turner’s participants were still normal at 6am; their lows came four hours later. So it is not really a contradiction — it is a study whose window closed before the effect this post is about would have shown up. That is worth knowing, because it is the same mistake the rest of us make: judging the night by the night."
      },
      {
        "t": "p",
        "text": "That last one looks like a contradiction and isn’t quite. Ethanol in the bloodstream is not directly glucose-lowering in someone held steady by an infusion; the delayed effect needs the other conditions — a depleted tank, a night’s fast, insulin still working. So the honest summary is not “alcohol lowers your blood sugar”. It is: alcohol removes one of your defences against a low, and whether that matters depends on whether you end up needing that defence."
      },
      {
        "t": "p",
        "text": "The 45% figure has a similar problem — in the review where most people meet it, it is a secondary citation to work from 1997 and 2004, expressed as “up to”: a ceiling, not an average. And that systematic review is itself from 2008, worth saying plainly given how often it is described as recent. The most current picture comes from surveys instead. An international study published in 2025, covering 216 people with type 1 diabetes across 23 countries, found only 53.2% felt safe drinking, only 45.8% had ever had it covered in their diabetes education, and 48.2% had experienced effects they could not predict. Severe hypos were around four times more likely in those routinely drinking two or more per occasion (odds ratio 4.20, 95% CI 1.52–11.61). Self-reported and cross-sectional, so not causal — but the shape is right: unpredictable, under-taught, worse at volume."
      },
      {
        "t": "h",
        "text": "Every study behind this post, side by side"
      },
      {
        "t": "p",
        "text": "Here is the whole evidence base in one place, with the doses converted so they can be compared. Two things stand out when it is laid out like this. The first is how small it all is — six people, nine, ten, fourteen, fifteen, seventeen. The second is that the results only look contradictory until you read the fourth column: what glucose did depends almost entirely on when it was measured and whether there was food involved."
      },
      {
        "t": "table",
        "wide": true,
        "head": [
          "Study",
          "What they drank",
          "Alcohol",
          "What happened to glucose, and when"
        ],
        "rows": [
          [
            "Turner 2001 — 6 men, type 1",
            "Dry white wine at 9pm, over 90 minutes",
            "~52 g · 6.6 units",
            "Nothing all evening and nothing overnight. Next morning significantly lower: post-breakfast peak 8.9 against 15 mmol/L. From 10am five of the six needed treating for hypoglycaemia, bottoming out at 1.9–2.9 mmol/L. Alcohol undetectable in blood from 8am."
          ],
          [
            "Plougmann 2003 — computer model of the study above",
            "The same 9pm dose, simulated",
            "~52 g · 6.6 units",
            "A significant fall 10 to 12 hours after the drink. Modelled as suppressed glucose production, then glycogen depletion, then a rebound in insulin sensitivity as stores refill."
          ],
          [
            "Moriarty 1993 — 9 people, type 1, fasted overnight",
            "Ethanol by drip: 0.5 g/kg, then 0.25 g/kg an hour",
            "~35 g first dose · 4.4 units",
            "No hypoglycaemia at all, and no change in the glucose needed to hold them steady (1.22 against 1.23). Alcohol in the blood is not, by itself, glucose-lowering."
          ],
          [
            "Cheyne 2004 — 17 people, type 1",
            "Alcohol to 43 mg/dl, below the UK driving limit",
            "~28 g · 3.5 units",
            "Glucose was held steady by design, so there is no glucose result. Reaction time slowed 35 ms by alcohol alone, 39 ms by a mild low alone, and 74 ms by the two together."
          ],
          [
            "Kerr 2007 — 17 people, type 1",
            "0.4 g/kg",
            "~28 g · 3.5 units",
            "Growth hormone response to a low was blunted, 14.3 against 25.9. Insulin sensitivity fell too — and the authors note the two effects partly cancel each other out."
          ],
          [
            "Glucagon trial (NCT02516150) — 15 people, type 1",
            "Ethanol by drip to 0.1% blood alcohol, then a small glucagon dose",
            "0.1% blood alcohol",
            "Glucagon still worked: 1996 against 1981 on the main measure, with a somewhat smaller peak (83.0 against 101.7). This is what qualifies the widespread claim that glucagon fails after drinking."
          ],
          [
            "Hätönen 2012 — 10 healthy people",
            "Beer at 4.5% with 25 g of carbohydrate, against alcohol-free beer",
            "21 g · 2.6 units",
            "Glucose went up, not down. A glucose drink with alcohol produced 18% more rise than the same drink without it, and beer’s measured glycaemic index came out at 119 against 80 for the alcohol-free version. Measured over two hours only."
          ],
          [
            "Ismail 2006 — 14 adolescents, type 1",
            "A real night out: a mean of 9 drinks for the young men, 6 for the young women",
            "~90 g / ~63 g · 11 / 8 units",
            "More swing through the night, and fewer lows than on their own control nights. But it measured from 6pm to 6am and stopped. Turner’s lows began at 10am — four hours after this study switched off."
          ],
          [
            "T1Drink 2025 — 216 people, type 1, survey",
            "Habitual drinking, self-reported",
            "Two or more per occasion",
            "Severe hypoglycaemia around four times more likely at two or more drinks per occasion (4.20, 1.52–11.61) and at frequent heavy drinking (4.19, 1.37–12.75). Nearly half reported effects they could not predict."
          ],
          [
            "SWAN 2024 — 2,578 women aged 42–52, no diabetes",
            "Highest third of daily intake",
            "By tertile",
            "Fasting glucose went the other way: moderate intake was linked to lower odds of a high-glucose pattern (0.23, 0.10–0.52). Observational, and the group of interest is only 111 women."
          ],
          [
            "Kwon 2022 — premenopausal women",
            "Under 10, 10–19, 20–39, or 40+ g a day",
            "1.3 to 5+ units a day",
            "Not a glucose result, included because it is the midlife trade-off. Odds of bothersome hot flushes rose stepwise with intake: 1.42, then 1.99, then 2.06, then 3.52 against women who never drank."
          ]
        ]
      },
      {
        "t": "p",
        "text": "The gap in that table is the one worth noticing. The delayed low is demonstrated at about 6.6 units and surveyed at two or more drinks. Between one glass and two-thirds of a bottle, nobody has looked."
      },
      {
        "t": "h",
        "text": "A hypo and being drunk look the same from outside"
      },
      {
        "t": "p",
        "text": "This is the part I would want anyone who lives with me, drinks with me or works with me to know. Slurred speech, unsteadiness, confusion, poor coordination, saying things that don’t quite make sense, being oddly emotional or oddly stubborn — that list describes hypoglycaemia and it describes being drunk, and from outside there is no reliable way to tell which you are looking at. So the person having a serious low gets read as having had one too many, and the response is a glass of water and an early night rather than glucose and, if needed, an ambulance."
      },
      {
        "t": "p",
        "text": "It is worse than a coincidence of appearances, because the two impair you together. A clamp study of 17 people with type 1 diabetes tested cognition at a mild low of 2.8 mmol/L, with and without a blood alcohol level below the UK driving limit. Alcohol alone slowed four-choice reaction time by 35 milliseconds; mild hypoglycaemia alone by 39; the two together by 74, with deterioration across every test in the battery rather than one. The authors’ conclusion was blunt and I will simply pass it on: people with type 1 diabetes should avoid alcohol completely if they are planning to drive."
      },
      {
        "t": "p",
        "text": "And you may not wake up. In a study where nocturnal hypoglycaemia was induced under sleep-lab monitoring, only one of 16 people with type 1 diabetes woke as glucose fell to 2.2 mmol/L, against ten of 16 people without diabetes. The awakening response most people quietly rely on is substantially blunted in type 1 — before you add alcohol, which fragments sleep on its own. Which is why the people around you knowing what to look for is not a nicety, and why medical identification is worth having on you rather than in a drawer."
      },
      {
        "t": "h",
        "text": "The glucagon question, and why I am not repeating what you will read elsewhere"
      },
      {
        "t": "p",
        "text": "You will find it stated confidently, in a great many places, that glucagon does not work for alcohol-related hypoglycaemia. I was expecting to write that section. I went to check it and I do not think the claim survives, so I am going to explain what I found instead of quietly leaving it out — because if I just dropped it you would reasonably assume I was being squeamish and go and believe the confident version anyway."
      },
      {
        "t": "p",
        "text": "The reasoning behind the claim is sound as far as it goes. Glucagon raises glucose mainly by telling the liver to break down stored glycogen — it works on the tank, and alcohol’s problem is the refinery. So in the classic scenario the claim was built on, someone fasting or malnourished with essentially no glycogen left, glucagon has very little to mobilise and does very little. That is real, and it is why the teaching exists."
      },
      {
        "t": "p",
        "text": "But the trial cited for it here tested something narrower and found the opposite of what the claim implies. Fifteen people with type 1 diabetes were given a micro-dose of glucagon under a glucose clamp, once with blood alcohol held at 0.1% and once sober. The response was effectively identical: an area over the curve for glucose infusion rate of 1996 with alcohol against 1981 without. The peak effect was somewhat smaller with alcohol — 83.0 against 101.7 ml/hour — but glucagon plainly still worked. So the accurate statement is narrower than the popular one: glucagon is less reliable in exactly the circumstances where these lows turn severe, because those are the circumstances where glycogen is low. Less reliable is not the same as useless."
      },
      {
        "t": "p",
        "text": "The practical difference runs the opposite way to the popular version, and it matters enormously. “Glucagon doesn’t work” is a sentence that could persuade a frightened person not to use it in an emergency. Nobody should take that from this page. If someone has emergency glucagon and needs it, it should be used — and emergency help called as well rather than instead, because here you cannot count on it holding. What glucagon is not, in this situation, is a reason to feel covered. When and how to use it belongs in a plan agreed with your own diabetes team before you need it."
      },
      {
        "t": "h",
        "text": "What people actually do about it"
      },
      {
        "t": "p",
        "text": "What follows is a description of what is generally advised and what people discuss with their teams. It is not a set of instructions, and every one of these points has a version that is right for you and a version that isn’t — which is precisely the thing an article cannot know."
      },
      {
        "t": "table",
        "head": [
          "What is generally discussed",
          "Why, and what to take to your team"
        ],
        "rows": [
          [
            "Eating carbohydrate alongside drinking, rather than drinking on an empty stomach",
            "This is standard advice from diabetes organisations and follows directly from the mechanism: food leaves you with glycogen to draw on when new glucose production is suppressed. Worth noting that the evidence supporting it is more mechanistic than trial-based. What and how much is a conversation for your team."
          ],
          [
            "Checking glucose before bed and again through the following day",
            "The window of concern is the next 10 to 12 hours and possibly beyond, so the check that matters most is not the one at the end of the night. A single bedtime reading tells you where you are, not where you are going."
          ],
          [
            "Setting overnight alarms differently after drinking",
            "Sensor alarms are the practical answer to a risk that arrives while you are asleep, and the reason they matter more here is that the natural awakening response cannot be relied on. How to set them is a team conversation — an alarm threshold is effectively a clinical decision."
          ],
          [
            "Telling at least one person you are with",
            "Because the failure mode is other people misreading a low as intoxication. Someone who knows what is happening, and knows that emergency help should be called if you cannot be roused, changes the outcome more than anything on this list."
          ],
          [
            "Not relying on waking up, and not relying on symptoms",
            "Only one in 16 people with type 1 diabetes woke during induced nocturnal hypoglycaemia in the sleep-lab study, and alcohol both fragments sleep and impairs the judgement you would use to recognise a low."
          ],
          [
            "Anything involving insulin",
            "This is the one point with no nuance attached. Any change to insulin — timing, dose, basal, anything — is a conversation with your diabetes team, agreed in advance. This post does not tell you what to do with your doses and no article should."
          ]
        ]
      },
      {
        "t": "p",
        "text": "If you have had an overnight low you cannot account for, the [blood sugar investigator](/blood-sugar-investigator/) is the tool on this site built for exactly that — working backwards through what happened rather than guessing. And if the answer turns out to be that you want the overnight picture rather than isolated readings, [night sweats or a hypo?](/blog/night-sweats-or-hypo/) covers how to read a fortnight of traces, which is a genuinely different skill from reading a number."
      },
      {
        "t": "h",
        "text": "And if you don’t have diabetes: what changes after 40"
      },
      {
        "t": "p",
        "text": "None of the above applies if you are not on insulin or a medication that can cause hypoglycaemia: your liver does the same thing chemically, but your pancreas adjusts around it. Something else is going on though, and it is why a lot of women arrive here in their forties — the same glass affects you differently than it used to, and you are not imagining it."
      },
      {
        "t": "p",
        "text": "The most direct evidence is SWAN, which followed 2,578 women aged 42 to 52 and modelled their fasting glucose trajectories. I will report what it found rather than what it is usually said to have found, because they differ. Moderate alcohol intake was associated with lower odds of the high-decreasing glucose trajectory, most strongly at the highest intakes (odds ratio 0.23, 95% CI 0.10–0.52); the authors’ own framing is that moderate consumption may protect. I am not going to pretend that says more than it does — it is observational, the group of interest is 111 women, and the relationship has not held up in Mendelian randomisation work. What it does establish is that fasting glucose is not where alcohol’s midlife problem shows up. If you have noticed a change, that is not the measurement that will explain it."
      },
      {
        "t": "p",
        "text": "What you have noticed is more likely about sleep and symptoms. Alcohol reliably fragments the second half of the night — the half perimenopause is already disrupting — and broken sleep worsens insulin sensitivity the next day quite independently of anything alcohol did to your liver. That loop is the actual midlife story, and [what broken nights do to insulin resistance](/blog/sleep-insulin-resistance-women/) is doing more work here than the drink."
      },
      {
        "t": "p",
        "text": "Alcohol is also a vasomotor trigger with a dose-response behind it. In a cohort of premenopausal women, the odds of bothersome hot flushes rose steadily with intake against lifetime abstainers — 1.42 (95% CI 1.02–1.99) under 10 g a day, up to 3.52 (95% CI 1.72–7.20) at 40 g or more. A large glass of wine is roughly 20 to 25 g. So the wine that helps you fall asleep is statistically implicated in the thing waking you up. Whether that trade is worth it is your business and I have no opinion about it; it is worth knowing it exists, because most people making it don’t know they are. The wider picture is in [the pillar post on perimenopause and blood sugar](/blog/perimenopause-diabetes-blood-sugar/), and if mixers are what brought you here, [what to replace sugar with](/blog/natural-sweeteners/) covers the sweetener side — though it is the least important variable on this page."
      },
      {
        "t": "h",
        "text": "What I do"
      },
      {
        "t": "p",
        "text": "Twenty-three years with type 1, so I have had a long time to get this wrong in most of the available ways. What I have settled on is not a rule and I am not recommending it; it is one person’s arrangement with one person’s body."
      },
      {
        "t": "p",
        "text": "I drink rarely, with food, and not the night before anything I care about being sharp for. I stopped treating the end of the evening as the end of the event — the part I pay attention to now is the following morning, which took me an embarrassing number of years to work out, because everything I had ever read pointed at the wrong end of the timeline. My alarms are set to be irritating on those nights and I let them be. And whoever I am with knows what a low looks like, and knows it can look exactly like too much wine."
      },
      {
        "t": "p",
        "text": "But the thing I would actually pass on is the reframe. The drink is not the event. The event is ten hours later, and if you spend your attention on the glass you will miss it entirely."
      },
      {
        "t": "h",
        "text": "The line that matters"
      },
      {
        "t": "p",
        "text": "This is general information and one person’s experience. It is not medical advice, it contains no dosing guidance, and it is not an encouragement to drink or a lecture about not drinking. If you take insulin or anything else that can cause hypoglycaemia, the useful version of everything above is a plan you make with your own diabetes team — before the occasion, not during it, and written down while you are clear-headed enough to be honest about what you actually do rather than what you think you should say."
      },
      {
        "t": "refs",
        "items": [
          {
            "claim": "Evening alcohol lowered next-morning glucose and caused hypoglycaemia in five of six people with type 1 diabetes.",
            "detail": "Six men with type 1 diabetes (aged 19–51, HbA1c 7.0–10.3%) were admitted on two occasions from 5pm to noon the following day, on standardised meals with regular insulin at 6pm and 8am and a fixed basal infusion from 11pm. At 9pm they drank either dry white wine (0.75 g/kg alcohol) or mineral water over 90 minutes. Blood ethanol peaked at 19.1 mmol/L and was undetectable by 8am. There were no significant differences in evening or overnight glucose. In the morning, fasting and postprandial glucose were significantly lower after wine (postprandial peak 8.9 vs 15 mmol/L, p < 0.01) and from 10am five of the six required treatment for hypoglycaemia (nadir 1.9–2.9 mmol/L); none did after water. Growth hormone secretion was significantly reduced between midnight and 4am after wine (p = 0.04). Six participants, all male — the cleanest demonstration of the delayed effect that exists, and much too small to generalise from confidently.",
            "cite": "Diabetes Care · Turner BC, Jenkins E, Kerr D, Sherwin RS, Cavan DA, 2001;24(11):1888–93",
            "url": "https://pubmed.ncbi.nlm.nih.gov/11679452/"
          },
          {
            "claim": "The glucose-lowering effect appears roughly 10–12 hours after an evening drink.",
            "detail": "A metabolic modelling paper from the same research group states that alcohol taken at 21:00 significantly reduced blood glucose values after 10–12 hours compared with no-alcohol control studies, and models the mechanism as a combination of raised NADH reducing hepatic gluconeogenesis, glycogen depletion, and increased hepatic insulin sensitivity after the alcohol is metabolised as glycogen stores are restored. This is a simulation study validating a model against the earlier clinical data rather than independent clinical evidence — its value is in describing the shape of the mechanism, not in confirming the numbers.",
            "cite": "International Journal of Medical Informatics · Plougmann S, Hejlesen O, Turner B, Kerr D, Cavan D, 2003;70(2–3):337–44",
            "url": "https://pubmed.ncbi.nlm.nih.gov/12909186/"
          },
          {
            "claim": "Alcohol is thought to suppress hepatic gluconeogenesis by up to around 45%.",
            "detail": "A systematic review of randomised controlled trials on alcohol and glycaemic control in type 1 diabetes describes the mechanism — ethanol metabolised via alcohol dehydrogenase and aldehyde dehydrogenase, depleting hepatic NAD+ which is critical to the gluconeogenic pathway — and reports that hepatic gluconeogenesis is thought to be decreased by up to 45% following alcohol consumption. Two important caveats: the 45% figure is a secondary citation within this review to work from 1997 and 2004 and is expressed as an upper bound, not an average; and the review itself was published in 2008, so it is a well-conducted summary of an evidence base that has not moved much rather than a current one. The review also documents genuinely conflicting findings between its included trials.",
            "cite": "Journal of Diabetes Nursing · Adams G, Jeyes L, Evans E, 2008;12(8):289",
            "url": "https://diabetesonthenet.com/journal-diabetes-nursing/effects-of-alcohol-on-blood-glucose-levels-in-people-with-type-1-diabetes-a-systematic-review/"
          },
          {
            "claim": "The study most often cited as contradicting the delayed effect stopped measuring at 6am.",
            "detail": "Fourteen adolescents with type 1 diabetes aged over 16 wore continuous glucose monitors across a weekend in which drinking was planned for one night only, each acting as their own control against the equivalent period 24 hours before or after. Consumption was heavy rather than moderate: a mean of 9.0 standard drinks for the male participants and 6.3 for the female ones. The drinking night showed increased glycaemic variability, no difference in time at normal or high glucose, and a significantly higher percentage of time at low glucose during the control period — more, not fewer — that is, fewer lows after drinking. Widely quoted as evidence that alcohol does not cause hypoglycaemia. The decisive limitation is the observation window: 18:00 to 06:00. In the Bournemouth study the overnight period was also normal and the hypoglycaemia began at 10:00, four hours after this study stopped recording. It is not a contradictory result so much as one that could not have detected the effect in question.",
            "cite": "Diabetic Medicine · Ismail D, Gebert R, Vuillermin PJ, Fraser L, McDonnell CM, Donath SM, Cameron FJ, 2006;23(8):830–3",
            "url": "https://pubmed.ncbi.nlm.nih.gov/16911618/"
          },
          {
            "claim": "With carbohydrate, alcohol can raise the short-term glucose response rather than lower it.",
            "detail": "In a crossover study, 10 healthy volunteers were served beer at 4.5% alcohol by volume, non-alcoholic beer, a glucose solution with alcohol, and a reference glucose solution twice. Each portion contained 25 g available carbohydrate, and the alcoholic portions 21 g of alcohol. The glucose solution with alcohol produced an 18% higher postprandial glucose incremental area under the curve than the reference (p = 0.03), with no significant effect on insulin. Measured glycaemic index was 119 for beer against 80 for non-alcoholic beer, and insulinaemic index 130 against 88. The authors attribute the rise to impaired insulin sensitivity and conclude that published glycaemic index values for alcoholic beers have underestimated their true glycaemic effect. Ten healthy volunteers over a two-hour window, so it speaks only to the immediate response — but it is the clearest demonstration that alcohol’s short-term and delayed effects on glucose run in opposite directions.",
            "cite": "American Journal of Clinical Nutrition · Hätönen KA, Virtamo J, Eriksson JG, Perälä MM, Sinkko HK, Leiviskä J, Valsta LM, 2012;96(1):44–9",
            "url": "https://pubmed.ncbi.nlm.nih.gov/22648716/"
          },
          {
            "claim": "Ethanol given intravenously to fasted people with type 1 diabetes did not itself cause hypoglycaemia.",
            "detail": "Nine people with type 1 diabetes fasted overnight and then received, single-blind, either intravenous ethanol (0.5 g/kg bolus then 0.25 g/kg/h) or matched saline during a hypoinsulinaemic euglycaemic clamp. A 60-minute ethanol infusion reaching a steady-state blood concentration of 26.2 mmol/L did not alter the glucose infusion rate needed to maintain euglycaemia (1.22 vs 1.23 mg/kg/min), the initial rate of fall of blood glucose, the lowest glucose reached, or the rate of recovery. Included deliberately because it complicates the simple story: ethanol in the blood is not directly glucose-lowering under clamp conditions. The delayed real-world effect appears to require the other ingredients — depleted glycogen, an overnight fast, and insulin still acting.",
            "cite": "Diabetic Medicine · Moriarty KT, Maggs DG, Macdonald IA, Tattersall RB, 1993;10(1):61–5",
            "url": "https://pubmed.ncbi.nlm.nih.gov/8435990/"
          },
          {
            "claim": "Alcohol and mild hypoglycaemia impair cognition additively.",
            "detail": "Seventeen adults with type 1 diabetes underwent four hyperinsulinaemic clamps: euglycaemia with placebo, euglycaemia with alcohol, hypoglycaemia (2.8 mmol/L) with placebo, and hypoglycaemia with alcohol. Average blood alcohol in the alcohol arms was 43 mg/dl — below the UK driving limit. Four-choice reaction time slowed by 35 ms with alcohol alone (95% CI 20–50) and by 39 ms with hypoglycaemia alone (95% CI 5–73), but by 74 ms with both (95% CI 35–113), with deterioration across trail making, digit symbol substitution and visual change detection as well. Hazard perception was unaffected. Notably, hypoglycaemia did not reduce participants’ willingness to drive, though alcohol did. The authors conclude that people with type 1 diabetes should avoid alcohol completely if planning to drive.",
            "cite": "Diabetic Medicine · Cheyne EH, Sherwin RS, Lunt MJ, Cavan DA, Thomas PW, Kerr D, 2004;21(3):230–7",
            "url": "https://pubmed.ncbi.nlm.nih.gov/15008832/"
          },
          {
            "claim": "Alcohol at a blood level of 0.1% did not abolish glucagon’s glucose-raising effect in type 1 diabetes.",
            "detail": "A randomised crossover trial in 15 adults with type 1 diabetes gave a 50 microgram subcutaneous dose of glucagon under a hyperinsulinaemic normoglycaemic clamp, once with blood alcohol content held at 0.1% by intravenous infusion and once without. The posted results show an area over the curve for glucose infusion rate of 1996 (SD 1259) with ethanol against 1981 (SD 938) without — essentially identical — and a maximum change in glucose infusion rate from baseline of 83.0 (SD 35.2) with ethanol against 101.7 (SD 38.8) ml/hour without. The registered hypothesis was that alcohol would not significantly alter glucagon’s anti-hypoglycaemic effect, and that is what the results show. This directly qualifies the widely repeated claim that glucagon does not work in alcohol-related hypoglycaemia: that claim derives from the glycogen-depleted fasting scenario, where glucagon has little to mobilise, rather than from the presence of alcohol as such. Small, and a clamp study rather than a real emergency — but it is the relevant direct evidence, and it points away from treating glucagon as useless.",
            "cite": "ClinicalTrials.gov · NCT02516150, Effect of Ethanol Intoxication on the Anti-hypoglycemic Action of Glucagon (completed, results posted)",
            "url": "https://clinicaltrials.gov/study/NCT02516150"
          },
          {
            "claim": "Most people with type 1 diabetes do not wake up during a nocturnal low.",
            "detail": "Sixteen people with type 1 diabetes and 16 matched healthy controls were studied under polysomnography. On one night, insulin was infused to produce a linear fall in plasma glucose to a nadir of 2.2 mmol/L; on a control night euglycaemia was maintained. Only one of the 16 participants with type 1 diabetes awakened, compared with ten of the 16 controls (p = 0.001). Nobody woke in the control nights. Adrenaline rose on average 7.5 minutes before waking in those who woke, suggesting arousal is part of the counter-regulatory response rather than separate from it. A small laboratory study of induced hypoglycaemia, but the size of the difference is difficult to explain away.",
            "cite": "PLoS Medicine · Schultes B et al., 2007;4(2):e69",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC1808097/"
          },
          {
            "claim": "Alcohol is under-taught in diabetes education, and severe hypos are more frequent at higher intakes.",
            "detail": "An international survey of 216 people with type 1 diabetes across 23 countries (63.4% female, 54.2% aged 16–21) found that only 53.2% felt safe consuming alcohol, 37% rated their alcohol-related knowledge as average or lower, and only 45.8% reported that safe alcohol consumption had been covered in their diabetes education. Nearly half — 48.2% — had experienced unpredictable effects of alcoholic drinks on their glucose. Alcohol-related severe hypoglycaemia was significantly more frequent in those reporting frequent excessive drinking (odds ratio 4.19, 95% CI 1.37–12.75) and in those routinely consuming two or more drinks per occasion (odds ratio 4.20, 95% CI 1.52–11.61). Self-reported, cross-sectional and skewed young, so it establishes association rather than cause — but it is the most recent picture available.",
            "cite": "Hormone Research in Paediatrics · Michalak A et al., T1Drink, 2025",
            "url": "https://pubmed.ncbi.nlm.nih.gov/41248109/"
          },
          {
            "claim": "In midlife women without diabetes, moderate alcohol was associated with lower — not higher — fasting glucose trajectories.",
            "detail": "An analysis of 2,578 women aged 42–52 from the Study of Women’s Health Across the Nation, each with at least three fasting glucose measurements between 1996 and 2005, used group-based trajectory modelling to identify a low-stable trajectory (n = 2,467) and a high-decreasing one (n = 111). Compared with the low-stable group, alcohol intake was inversely associated with the high-decreasing trajectory in the fully adjusted model, most strongly in the highest tertile of daily servings (odds ratio 0.23, 95% CI 0.10–0.52, p < 0.001). The authors conclude that moderate consumption may protect against high fasting glucose trajectories in a dose-response manner. Included because it is the study usually invoked for the midlife angle and its actual direction is the opposite of what that framing implies. It is observational, the trajectory group of interest is small, moderate drinkers differ systematically from non-drinkers in ways adjustment cannot fully address, and Mendelian randomisation work cited within the paper found no causal relationship between an alcohol-related gene variant and glucose concentrations.",
            "cite": "Wang et al. · Frontiers in Public Health · SWAN analysis, 2024",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10847307/"
          },
          {
            "claim": "Alcohol intake shows a dose-response relationship with bothersome hot flushes.",
            "detail": "A cohort study of premenopausal women assessed moderately-to-severely bothersome vasomotor symptoms using the Menopause-Specific Quality of Life questionnaire. Compared with lifetime abstainers, multivariable-adjusted odds ratios for prevalent symptoms were 1.42 (95% CI 1.02–1.99) at under 10 g of alcohol a day, 1.99 (1.27–3.12) at 10–19 g, 2.06 (1.19–3.57) at 20–39 g and 3.52 (1.72–7.20) at 40 g or more (p for trend < 0.01). Hazard ratios for newly developing bothersome symptoms followed the same gradient, reaching 2.22 (1.16–4.23) at 40 g or more (p for trend = 0.02). Observational, in a single national cohort, and self-reported symptom measures — but the dose-response gradient is consistent across both prevalent and incident outcomes.",
            "cite": "Nutrients · Kwon R, Chang Y, Kim Y et al., 2022;14(11):2276",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9182895/"
          }
        ]
      },
      {
        "t": "links",
        "title": "Keep reading",
        "items": [
          {
            "name": "Night sweats or a hypo? How to tell them apart",
            "url": "/blog/night-sweats-or-hypo/",
            "desc": "Alcohol triggers both. How to read a fortnight of overnight traces instead of guessing."
          },
          {
            "name": "Sleep and insulin resistance in women",
            "url": "/blog/sleep-insulin-resistance-women/",
            "desc": "The loop that does most of the work in the midlife half of this post."
          },
          {
            "name": "Perimenopause & diabetes: what’s really happening to your blood sugar",
            "url": "/blog/perimenopause-diabetes-blood-sugar/",
            "desc": "The pillar piece — how glucose behaves as oestrogen falls."
          },
          {
            "name": "Eating around training with diabetes",
            "url": "/blog/eating-around-training-blood-sugar/",
            "desc": "Exercise and alcohol stack their delayed effects. The timing principles are the same."
          },
          {
            "name": "Blood sugar investigator",
            "url": "/blood-sugar-investigator/",
            "desc": "For working backwards through an overnight low that doesn’t add up."
          },
          {
            "name": "What to replace sugar with",
            "url": "/blog/natural-sweeteners/",
            "desc": "If the mixer question is what brought you here — though it is the least important variable."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "Why does alcohol lower blood sugar the next day rather than while you are drinking?",
        "a": "Because the effect is on glucose production, not glucose intake. Your liver keeps glucose up overnight in two ways: releasing stored glycogen, and manufacturing new glucose through gluconeogenesis. Metabolising ethanol shifts the liver’s NADH-to-NAD+ balance and suppresses gluconeogenesis — reportedly by up to around 45%, though that figure is an upper bound rather than an average. Stored glycogen is unaffected, so nothing happens at first; the problem appears when those stores run low and there is no replacement being made. In a controlled study, people with type 1 diabetes who drank dry white wine at 9pm had entirely normal glucose overnight, and then five of six needed treating for hypoglycaemia from 10am the following morning — by which point the alcohol had been undetectable in their blood for two hours."
      },
      {
        "q": "How long does the risk last after drinking?",
        "a": "The best-characterised window is roughly 10 to 12 hours after an evening drink, which for a nine o’clock drink puts it in the early-to-mid morning. Some accounts describe raised risk extending across the following 24 hours; that is a wider claim resting on weaker evidence, but it points the same way. The important practical point is that the risk period is largely after you have stopped drinking and, in most cases, after you have woken up — so a single check at bedtime tells you where you are rather than where you are going. It also varies substantially between people and between occasions, which is part of why it is difficult to plan around and why the plan should be one your diabetes team has helped you make."
      },
      {
        "q": "Does glucagon work for alcohol-related hypoglycaemia?",
        "a": "It is very widely stated that it does not, and that claim needs qualifying rather than repeating. Glucagon raises glucose mainly by prompting the liver to release stored glycogen, so where glycogen is genuinely depleted — prolonged fasting, malnutrition — it has little to mobilise and does little. That is where the teaching comes from and it is legitimate. But the trial that examined this directly in type 1 diabetes found that holding blood alcohol at 0.1% did not abolish glucagon’s effect: the glucose response was essentially the same with and without alcohol, with a somewhat smaller peak effect. So the accurate version is that glucagon is less reliable in exactly the circumstances where alcohol-related lows become severe — a long night, no food, hard exercise beforehand — rather than that it does not work. Nobody should read this as a reason to withhold glucagon in an emergency. If it is needed it should be used, and emergency help should be called as well rather than instead. How and when to use it belongs in a plan agreed with your own diabetes team."
      },
      {
        "q": "Is a dry wine safer than a sweet drink if you have diabetes?",
        "a": "Not for the reason people assume, and not in the way the question implies. The carbohydrate content of the drink is a real but short-lived and visible effect — it behaves like carbohydrate in anything else. The delayed effect that catches people out comes from the ethanol, and a dry wine has just as much of that. The controlled study that demonstrated next-morning hypoglycaemia most clearly used dry white wine specifically. A sweet mixer can push glucose up first and then leave the ethanol effect underneath it hours later, which arguably makes the pattern harder to read rather than easier. Choosing a drink on its sugar content alone is optimising the variable that matters least here."
      },
      {
        "q": "Why do people mistake a hypo for being drunk?",
        "a": "Because from the outside they look the same. Slurred speech, unsteadiness, confusion, poor coordination and out-of-character behaviour describe both, and there is no reliable way for an onlooker to distinguish them. That matters because the response differs completely: someone who appears drunk gets left to sleep it off, while someone having a severe low needs glucose and possibly an ambulance. The two also compound each other — in a clamp study, alcohol alone and mild hypoglycaemia alone each slowed reaction time by around 35–39 milliseconds, but together they slowed it by 74, with impairment across every cognitive test used. The practical implications are that at least one person you are with should know, that medical identification is worth carrying rather than leaving at home, and that the same study’s authors concluded people with type 1 diabetes should avoid alcohol completely if planning to drive."
      },
      {
        "q": "I don’t have diabetes — why does wine affect me differently at 46 than it did at 36?",
        "a": "Probably not through fasting glucose. The main study on alcohol and glucose trajectories in midlife women, following 2,578 women aged 42–52, actually found moderate intake associated with lower odds of a high fasting glucose trajectory, not higher — an observational finding that is worth reporting accurately rather than reversing to fit a narrative. What is better supported is the effect on sleep and on symptoms. Alcohol fragments the second half of the night, which is the half perimenopause is already disturbing, and poor sleep worsens insulin sensitivity the next day on its own. Alcohol is also a vasomotor trigger with a dose-response behind it: compared with lifetime abstainers, the odds of bothersome hot flushes rose from 1.42 at under 10 g a day to 3.52 at 40 g or more in one cohort study. A large glass of wine is roughly 20–25 g. So the drink that helps you fall asleep is statistically implicated in the thing waking you up — which is worth knowing, whatever you decide to do with it."
      }
    ]
  },
  "ua": {
    "cat": "Діабет і перименопауза",
    "title": "Напій увечері — і за десять годин ваша глюкоза робить щось дивне",
    "seoTitle": "Алкоголь і цукор у крові: 10-годинна затримка",
    "imageAlt": "Два високі келихи з коктейлями, прикрашені огірком і апельсином, які ставлять на столик у ресторані між двома людьми",
    "metaDesc": "Алкоголь може знизити глюкозу через 10–12 годин, а не під час пиття. Механізм, що це насправді означає для глюкагону, і що змінюється після 40.",
    "excerpt": "Майже всі вважають, що алкоголь впливає на цукор через цукор у самому напої. Це не так — і саме через це непорозуміння ефект застає людей зненацька. Найважливіше стається за кілька годин після того, як келих спорожнів: зазвичай уночі, зазвичай уві сні.",
    "meta": "20 серпня 2026 · 10 хв читання",
    "lead": "У контрольованому дослідженні шестеро чоловіків із діабетом 1 типу випили сухого білого вина о дев’ятій вечора. Уночі їхня глюкоза нічим не відрізнялася від ночей, коли вони пили воду. А потім, із десятої ранку наступного дня, п’ятьом із шести знадобилося лікування гіпоглікемії. Алкоголь у крові не визначався вже з восьмої. Саме цей розрив — між напоєм і наслідком — і є вся суть, і саме його майже ніколи не пояснюють тим, з ким це стається.",
    "blocks": [
      {
        "t": "quote",
        "text": "Прочитайте це першим. Ця стаття — освітній матеріал і особистий досвід, а не медична порада, і в ній немає жодних рекомендацій щодо доз. Я не збираюся радити вам змінити дозу інсуліну, зменшити базал чи називати кількість одиниць, бо я не можу знати вашої схеми, ваших цифр і вашої історії — а помилка тут дає наслідки о четвертій ранку, коли ви найменше здатні її виправити. Якщо ви на інсуліні або на будь-яких ліках, що можуть спричинити гіпоглікемію, план щодо алкоголю — це те, що узгоджують зі своєю діабетичною командою заздалегідь, удень, коли всі тверезі. Цей текст не агітує пити і не агітує не пити. Це пояснення механізму, який усюди пояснюють погано."
      },
      {
        "t": "h",
        "text": "Картина, яка не сходиться"
      },
      {
        "t": "p",
        "text": "У п’ятницю ви випили два келихи вина за вечерею. Нічого надзвичайного, нічого такого, що ви назвали б випивкою. Ви лягли спати, цифри вночі були звичайними, і ви більше про це не думали. А потім настала субота: незрозуміла гіпоглікемія посеред ранку, або цілий день, коли вам ніби всього потрібно менше, або тривога о четвертій ранку, яку ніяк не пояснити тарілкою, що ви з’їли."
      },
      {
        "t": "p",
        "text": "Ви йдете шукати відповідь — і натрапляєте на стіну порад про вуглеводи в напоях. Які коктейлі солодкі, які вина сухі, чи більше цукру в тоніку, ніж вам здавалося. Усе це правда, усе це про зовсім іншу проблему, і ніщо з цього не пояснює, чому неприємності прийшли в суботу вранці, а не в п’ятницю ввечері. Ви дивитеся не на ту змінну. Річ не в цукрі. Річ в етанолі — і його вплив спрямований не на глюкозу, яка надходить у вас, а на глюкозу, яку виробляє ваше власне тіло."
      },
      {
        "t": "h",
        "text": "Річ не в цукрі в напої"
      },
      {
        "t": "p",
        "text": "Це найкорисніша річ для розуміння, і вона перевертає більшість того, що кажуть про алкоголь при діабеті. У сухому білому вині дуже мало вуглеводів. Це не робить його безпечним: у дослідженні, з якого я почала, саме сухе біле вино й було втручанням. У солодкому міксері вуглеводів багато — вони можуть підняти глюкозу в короткій перспективі, а потім залишити під собою етанол, який через кілька годин зробить свою повільнішу справу, коли від цукру вже не лишиться сліду."
      },
      {
        "t": "p",
        "text": "Вуглеводи в напої поводяться як вуглеводи в будь-чому іншому: підіймають, потім відпускають, і ви це бачите. Етанол робить принципово інше. Він не додає глюкози і не забирає її. Він заважає печінці виробляти глюкозу — а це та здатність, яку помічаєш лише тоді, коли вона потрібна, і потрібна вона тоді, коли ви давно не їли. Тобто вночі."
      },
      {
        "t": "table",
        "head": [
          "Кого зазвичай звинувачують",
          "Що відбувається насправді"
        ],
        "rows": [
          [
            "Цукор у напої",
            "Ефект реальний, короткий і помітний — і він може працювати в протилежний бік до всього іншого на цій сторінці. Порівняно з еквівалентним глюкозним напоєм алкоголь підвищив двогодинну глюкозну відповідь на 18%, а виміряний глікемічний індекс пива склав 119 проти 80 у безалкогольної версії — вочевидь через знижену чутливість до інсуліну. Тож раннє підвищення справжнє. Просто не воно спричиняє відстрочене падіння: у контрольованому дослідженні вечірнього пиття напоєм було сухе біле вино, у якому вуглеводів майже немає."
          ],
          [
            "«Мабуть, я щось не так порахувала з їжею»",
            "Найпоширеніший самодіагноз і причина, чому цю закономірність роками не помічають. Їжа здається винною, бо вона щойно була; напій — ні, бо він був десять годин тому і на той момент ще нічого не встиг зробити."
          ],
          [
            "Пити натщесерце — швидше сп’янієш",
            "Правда, і це важливо окремо. Пропущена їжа означає ще й менше запасів глікогену в печінці — тобто зникає той буфер, який мав би провести вас через години, коли вироблення нової глюкози пригнічене."
          ],
          [
            "«Алкоголь ще в організмі»",
            "Зазвичай ні. У дослідженні вечірнього пиття етанол у крові не визначався вже о восьмій ранку — за дві години до початку гіпоглікемій. Алкоголь виходить; його вплив на печінку триває довше."
          ]
        ]
      },
      {
        "t": "h",
        "text": "Що насправді робить ваша печінка"
      },
      {
        "t": "p",
        "text": "Уночі печінка тримає вашу глюкозу двома способами. Перший — глікогеноліз: розщеплення запасеного глікогену і вивільнення глюкози. Уявіть це як бак. Другий — глюконеогенез: побудова нової глюкози з нуля з лактату, гліцеролу й амінокислот. Уявіть це як завод. У звичайну ніч бак закриває перші години, а завод перебирає естафету, коли бак порожніє."
      },
      {
        "t": "p",
        "text": "Метаболізм етанолу має пріоритет майже над усім іншим, що робить печінка, і змінює її внутрішню хімію, поки триває: етанол стає ацетальдегідом, а той — ацетатом, і кожен крок споживає NAD+ і виробляє NADH. Зміщене співвідношення NADH до NAD+ позбавляє шлях глюконеогенезу того, що йому необхідне. Завод сповільнюється — приблизно до 45% за цифрою, яку найчастіше наводять у діабетичній літературі, хоча ставтеся до неї як до порядку величини, а не як до вимірювання, з причин, які поясню нижче."
      },
      {
        "t": "p",
        "text": "Бак при цьому не зачеплений. Саме тому спочатку нічого не відбувається. Ви п’єте, завод тихо вимикається, а бак кілька годин везе вас далі, і ніхто нічого не помічає. Проблема приходить у момент, коли бак майже порожній — а якщо ви пили ввечері, це середина ночі або наступний ранок. І позаду вже нічого немає."
      },
      {
        "t": "h",
        "text": "Чому ефект відстрочений"
      },
      {
        "t": "p",
        "text": "Найкращі дані дало невелике контрольоване дослідження в Борнмуті, опубліковане в Diabetes Care у 2001 році. Шістьох чоловіків із діабетом 1 типу госпіталізували двічі, з п’ятої вечора до полудня наступного дня, на стандартизованому харчуванні й фіксованій нічній інфузії базального інсуліну. О дев’ятій вони випивали або сухе біле вино, або мінеральну воду. Уночі два стани були нерозрізненні — жодної значущої різниці в глюкозі. Уранці глюкоза натще і після сніданку була значно нижчою після вина: пік після їжі 8,9 ммоль/л проти 15 ммоль/л у ночі з водою. З десятої п’ятьом із шести знадобилося лікування гіпоглікемії з мінімумом від 1,9 до 2,9 ммоль/л. У ночі з водою гіпоглікемії не було в жодного."
      },
      {
        "t": "p",
        "text": "Одну цифру з того дослідження варто назвати прямо, бо майже ніхто з тих, хто його цитує, цього не робить. Доза становила 0,75 г алкоголю на кілограм ваги тіла — для чоловіка вагою 70 кг це близько 52 г, тобто приблизно шість з половиною британських одиниць. Це не келих вина. Це ближче до двох третин пляшки, випитих за півтори години. Відстрочена ранкова гіпоглікемія переконливо показана саме на такій кількості. А от де вона починається — чи робить щось подібне один келих — по суті не досліджено, і я краще скажу вам про це, ніж дозволю заголовку натякати на точність, якої в дослідженнях немає."
      },
      {
        "t": "p",
        "text": "Одиниці варто вміти уявляти, бо майже кожна цифра в цьому тексті виражена в них, а «напій» — величина нефіксована. Одна британська одиниця — це 8 г чистого алкоголю. Доза з дослідження є в таблиці, щоб ви бачили, де вона стоїть: між великим келихом і пляшкою, а не на початку списку."
      },
      {
        "t": "table",
        "head": [
          "Напій",
          "Звична порція",
          "Алкоголь",
          "Британські одиниці"
        ],
        "rows": [
          [
            "Одна порція міцного",
            "25 мл, 40%",
            "7,9 г",
            "1,0"
          ],
          [
            "Малий келих вина",
            "125 мл, 12%",
            "11,8 г",
            "1,5"
          ],
          [
            "Подвійна порція міцного",
            "50 мл, 40%",
            "15,8 г",
            "2,0"
          ],
          [
            "Середній келих вина",
            "175 мл, 13%",
            "17,9 г",
            "2,2"
          ],
          [
            "Пінта лагера",
            "568 мл, 4%",
            "17,9 г",
            "2,2"
          ],
          [
            "Великий келих вина",
            "250 мл, 13%",
            "25,6 г",
            "3,2"
          ],
          [
            "Доза з дослідження вище",
            "0,75 г/кг, доросла людина 70 кг",
            "52,5 г",
            "6,6"
          ],
          [
            "Пляшка вина",
            "750 мл, 13%",
            "76,9 г",
            "9,6"
          ]
        ]
      },
      {
        "t": "p",
        "text": "Моделювальна робота тієї ж групи визначила вікно приблизно в 10–12 годин після дев’ятигодинного напою, і саме цю цифру варто носити з собою: вона розміщує вразливий період десь між сьомою і дев’ятою наступного ранку, а учасники Тернера ще падали о десятій. Інші роботи описують підвищений ризик протягом наступних 24 годин — ширше твердження на слабших доказах, що вказує в той самий бік. Період ризику — це наступний день, а не сам вечір."
      },
      {
        "t": "p",
        "text": "Є нюанс, який варто знати, бо він змінює те, що саме шукати. Пригнічений глюконеогенез — не єдине, що відбувається. У тому самому дослідженні секреція гормону росту була значно знижена з півночі до четвертої ранку після вина, а гормон росту — одна з речей, які зазвичай допомагають підтягнути глюкозу вгору. Моделювальна робота додає ще один шар: після виведення алкоголю чутливість печінки до інсуліну, схоже, зростає, поки вона поповнює запаси глікогену, тягнучи глюкозу вниз саме тоді, коли всі вважають, що епізод уже позаду. Тож це не один чистий механізм з одним чистим таймером, а кілька накладених ефектів із різними періодами дії — і саме тому цю закономірність так важко впізнати зсередини."
      },
      {
        "t": "h",
        "text": "Чому порожній бак усе погіршує"
      },
      {
        "t": "p",
        "text": "Усе описане вище залежить від того, наскільки повним був бак, коли завод вимкнувся. Якщо пити з нормальною їжею — глікоген є, і його є з чого брати. Якщо пити, пропустивши вечерю, або після довгої перерви, або після важкого тренування, яке вже витягло запаси, — того буфера, який мав провести вас крізь ніч, просто немає."
      },
      {
        "t": "p",
        "text": "Взаємодія з тренуванням підводить найчастіше, бо обидва ефекти відстрочені й накладаються. Довга поїздка чи важке заняття виснажують глікоген і підвищують чутливість до інсуліну на багато годин; алкоголь потім прибирає механізм, який мав би це компенсувати. Суботнє тренування плюс суботній вечір із напоями зводять обидва піки в одну частину недільного ранку. Я писала окремо про [те, що відбувається з цукром навколо тренувань](/ua/blog/eating-around-training-blood-sugar/), і принципи таймінгу звідти працюють і тут."
      },
      {
        "t": "h",
        "text": "Докази менш охайні, ніж заголовок"
      },
      {
        "t": "p",
        "text": "Упевнена версія цієї історії повторюється значно частіше, ніж це витримують докази, тож вам варто знати, де тут м’який ґрунт. Борнмутське дослідження — це шестеро людей. Шестеро чоловіків, чудово контрольовано, драматичний результат, ніколи не повторений на великій вибірці. Супутній короткий звіт тієї ж групи з безперервним моніторингом описують як такий, що показав середню глюкозу на 1,2 ммоль/л нижчу після вечірнього напою — узгоджено, але це лист до редакції, а не повноцінна стаття, і я переказую його так, як його підсумував пізніший систематичний огляд. А в клемп-дослідженні 1993 року внутрішньовенний етанол, уведений дев’ятьом людям із діабетом 1 типу після нічного голодування, не спричинив жодної гіпоглікемії."
      },
      {
        "t": "p",
        "text": "Одне дослідження часто наводять як таке, що все це спростовує, і на нього варто подивитися уважно, а не просто вписати до списку розбіжностей. Чотирнадцятеро підлітків із діабетом 1 типу носили сенсори протягом справжньої вечірки — у середньому дев’ять стандартних порцій у хлопців і шість у дівчат, що далеко за межами помірного. Воно виявило більшу варіабельність глюкози і, якщо вже на те, менше низьких значень, ніж у їхні контрольні ночі. Але воно вимірювало з 18:00 до 6:00 — і на цьому зупинилося. Учасники Тернера о шостій ранку ще були в нормі; їхні гіпоглікемії прийшли через чотири години. Тож це насправді не спростування — це дослідження, чиє вікно закрилося раніше, ніж мав би проявитися ефект, про який ця стаття. І це варто знати, бо це та сама помилка, яку робимо ми всі: судити про ніч за ніччю."
      },
      {
        "t": "p",
        "text": "Останнє виглядає як суперечність, але нею не є. Етанол у крові не знижує глюкозу напряму в людини, яку інфузією утримують на стабільному рівні; відстроченому ефекту потрібні інші умови — порожній бак, нічне голодування, інсулін, що продовжує діяти. Тобто чесне резюме — не «алкоголь знижує цукор». Воно таке: алкоголь прибирає один із ваших захистів від гіпоглікемії, а чи має це значення — залежить від того, чи знадобиться вам цей захист."
      },
      {
        "t": "p",
        "text": "З цифрою 45% схожа проблема: в огляді, де більшість із нею й зустрічається, це вторинне цитування робіт 1997 і 2004 років, сформульоване як «до» — стеля, а не середнє. А сам систематичний огляд датований 2008 роком, і це варто сказати прямо, зважаючи на те, як часто його називають свіжим. Найновіша картина походить радше з опитувань. Міжнародне дослідження, опубліковане у 2025 році, охопило 216 людей із діабетом 1 типу з 23 країн і виявило, що лише 53,2% почувалися безпечно, вживаючи алкоголь, лише 45,8% узагалі коли-небудь мали цю тему в межах діабетичного навчання, а 48,2% стикалися з непередбачуваним впливом на глюкозу. Тяжкі гіпоглікемії були приблизно вчетверо частішими в тих, хто регулярно випивав дві та більше порції за раз (відношення шансів 4,20, 95% ДІ 1,52–11,61). Самозвіт і поперечний зріз, тож не причинність, — але форма правильна: непередбачувано, недонавчено, гірше при обсязі."
      },
      {
        "t": "h",
        "text": "Усі дослідження цього тексту поруч"
      },
      {
        "t": "p",
        "text": "Ось уся доказова база в одному місці, з дозами, переведеними в порівнянні одиниці. Коли розкласти це так, впадають у вічі дві речі. Перша — наскільки все це мале: шестеро людей, дев’ятеро, десятеро, чотирнадцятеро, п’ятнадцятеро, сімнадцятеро. Друга — результати виглядають суперечливими лише доти, доки ви не прочитаєте четверту колонку: те, що сталося з глюкозою, майже цілком залежить від того, коли її вимірювали і чи була при цьому їжа."
      },
      {
        "t": "table",
        "wide": true,
        "head": [
          "Дослідження",
          "Що пили",
          "Алкоголь",
          "Що сталося з глюкозою і коли"
        ],
        "rows": [
          [
            "Turner 2001 — 6 чоловіків, діабет 1 типу",
            "Сухе біле вино о 21:00, протягом 90 хвилин",
            "~52 г · 6,6 одиниці",
            "Нічого весь вечір і нічого вночі. Наступного ранку значно нижче: пік після сніданку 8,9 проти 15 ммоль/л. З 10:00 п’ятьом із шести знадобилося лікування гіпоглікемії з мінімумом 1,9–2,9 ммоль/л. Алкоголь у крові не визначався вже з 8:00."
          ],
          [
            "Plougmann 2003 — комп’ютерна модель дослідження вище",
            "Та сама доза о 21:00, змодельована",
            "~52 г · 6,6 одиниці",
            "Значуще падіння через 10–12 годин після напою. Змодельовано як пригнічене вироблення глюкози, потім виснаження глікогену, потім зростання чутливості до інсуліну, поки запаси поповнюються."
          ],
          [
            "Moriarty 1993 — 9 людей, діабет 1 типу, натщесерце",
            "Етанол крапельно: 0,5 г/кг, далі 0,25 г/кг на годину",
            "~35 г перша доза · 4,4 одиниці",
            "Жодної гіпоглікемії і жодної зміни в кількості глюкози, потрібної, щоб утримати їх стабільними (1,22 проти 1,23). Алкоголь у крові сам собою не знижує глюкозу."
          ],
          [
            "Cheyne 2004 — 17 людей, діабет 1 типу",
            "Алкоголь до 43 мг/дл — нижче за британську норму для водіння",
            "~28 г · 3,5 одиниці",
            "Глюкозу навмисно утримували стабільною, тож результату щодо неї немає. Час реакції сповільнився на 35 мс від самого алкоголю, на 39 мс від самої м’якої гіпоглікемії і на 74 мс від обох разом."
          ],
          [
            "Kerr 2007 — 17 людей, діабет 1 типу",
            "0,4 г/кг",
            "~28 г · 3,5 одиниці",
            "Реакція гормону росту на гіпоглікемію притуплена: 14,3 проти 25,9. Чутливість до інсуліну теж знизилася — і автори зазначають, що ці два ефекти частково гасять один одного."
          ],
          [
            "Дослідження глюкагону (NCT02516150) — 15 людей, діабет 1 типу",
            "Етанол крапельно до 0,1% алкоголю в крові, потім мала доза глюкагону",
            "0,1% алкоголю в крові",
            "Глюкагон усе одно спрацював: 1996 проти 1981 за основним показником, з дещо меншим піком (83,0 проти 101,7). Саме це уточнює поширене твердження, що глюкагон не працює після алкоголю."
          ],
          [
            "Hätönen 2012 — 10 здорових людей",
            "Пиво 4,5% із 25 г вуглеводів проти безалкогольного пива",
            "21 г · 2,6 одиниці",
            "Глюкоза пішла вгору, а не вниз. Глюкозний напій з алкоголем дав на 18% більше зростання, ніж той самий напій без нього, а виміряний глікемічний індекс пива склав 119 проти 80 у безалкогольного. Вимірювали лише дві години."
          ],
          [
            "Ismail 2006 — 14 підлітків, діабет 1 типу",
            "Справжня вечірка: у середньому 9 порцій у хлопців, 6 у дівчат",
            "~90 г / ~63 г · 11 / 8 одиниць",
            "Більший розмах протягом ночі й менше гіпоглікемій, ніж у їхні власні контрольні ночі. Але вимірювали з 18:00 до 6:00 — і зупинилися. Гіпоглікемії в Тернера почалися о 10:00, через чотири години після того, як це дослідження вимкнулося."
          ],
          [
            "T1Drink 2025 — 216 людей, діабет 1 типу, опитування",
            "Звичне вживання, за самозвітом",
            "Дві та більше порції за раз",
            "Тяжка гіпоглікемія приблизно вчетверо ймовірніша при двох і більше порціях за раз (4,20, 1,52–11,61) і при частому надмірному вживанні (4,19, 1,37–12,75). Майже половина повідомила про непередбачувані ефекти."
          ],
          [
            "SWAN 2024 — 2 578 жінок віком 42–52, без діабету",
            "Верхня третина денного споживання",
            "За терцилями",
            "Глюкоза натще пішла в інший бік: помірне вживання пов’язане з меншими шансами високого рівня глюкози (0,23, 0,10–0,52). Обсерваційне, і група інтересу — лише 111 жінок."
          ],
          [
            "Kwon 2022 — жінки в пременопаузі",
            "Менше 10, 10–19, 20–39 або 40+ г на добу",
            "1,3 до 5+ одиниць на добу",
            "Не результат щодо глюкози — включено, бо це той самий компроміс середнього віку. Шанси на дошкульні припливи зростали сходинками: 1,42, потім 1,99, потім 2,06, потім 3,52 проти жінок, які ніколи не пили."
          ]
        ]
      },
      {
        "t": "p",
        "text": "Прогалина в цій таблиці — саме те, що варто помітити. Відстрочена гіпоглікемія показана приблизно на 6,6 одиниці й опитана на двох і більше порціях. А між одним келихом і двома третинами пляшки не дивився ніхто."
      },
      {
        "t": "h",
        "text": "Гіпоглікемія і сп’яніння виглядають однаково збоку"
      },
      {
        "t": "p",
        "text": "Це та частина, яку я хотіла б, щоб знали всі, хто живе зі мною, п’є зі мною чи працює зі мною. Невиразна мова, хитка хода, сплутаність, погана координація, слова, що не зовсім складаються, дивна емоційність чи дивна впертість — цей перелік описує гіпоглікемію і описує сп’яніння, і збоку надійно розрізнити їх неможливо. Тому людину з серйозною гіпоглікемією читають як таку, що перебрала, і реакція — склянка води й «іди спати», а не глюкоза і, за потреби, швидка."
      },
      {
        "t": "p",
        "text": "Це гірше за простий збіг вигляду, бо ці дві речі порушують ваш стан разом. Клемп-дослідження за участю 17 людей із діабетом 1 типу перевіряло когнітивні функції при м’якій гіпоглікемії 2,8 ммоль/л, з рівнем алкоголю в крові нижчим за британську норму для водіння і без нього. Сам лише алкоголь уповільнив час реакції на 35 мілісекунд, сама лише м’яка гіпоглікемія — на 39, обидва разом — на 74, причому погіршення було в усіх тестах батареї, а не в одному. Висновок авторів був різкий, і я просто передам його: людям із діабетом 1 типу слід повністю уникати алкоголю, якщо вони планують сідати за кермо."
      },
      {
        "t": "p",
        "text": "І ви можете не прокинутися. У дослідженні, де нічну гіпоглікемію викликали під контролем сомнологічної лабораторії, лише один із 16 людей із діабетом 1 типу прокинувся, коли глюкоза впала до 2,2 ммоль/л, — проти десяти з 16 людей без діабету. Реакція пробудження, на яку більшість тихо покладається, при діабеті 1 типу суттєво притуплена — і це ще до алкоголю, який сам собою розриває сон. Саме тому знання оточення — не дрібниця, і саме тому медичний ідентифікатор варто носити з собою, а не тримати в шухляді."
      },
      {
        "t": "h",
        "text": "Питання глюкагону — і чому я не повторюю те, що ви прочитаєте деінде"
      },
      {
        "t": "p",
        "text": "Ви знайдете впевнене твердження в дуже багатьох місцях: глюкагон не працює при гіпоглікемії, пов’язаній з алкоголем. Я збиралася написати цей розділ саме так. Я пішла перевіряти — і, на мою думку, це твердження перевірки не витримує. Тому я поясню, що знайшла, замість того щоб тихо це пропустити: бо якби я просто випустила цей шматок, ви резонно вирішили б, що я соромлюся теми, і пішли б повірити впевненій версії."
      },
      {
        "t": "p",
        "text": "Міркування, що стоїть за цим твердженням, слушне, наскільки воно сягає. Глюкагон піднімає глюкозу переважно тим, що каже печінці розщепити запасений глікоген, — він працює з баком, а проблема алкоголю — це завод. Тож у класичному сценарії, на якому це твердження побудоване (голодна або виснажена людина, у якої глікогену практично не лишилося), глюкагону майже нічого мобілізувати, і він робить мало. Це реально, і саме звідси походить це вчення."
      },
      {
        "t": "p",
        "text": "Але дослідження, на яке тут посилаються, перевіряло вужче питання й отримало результат, протилежний до того, що з нього роблять. П’ятнадцятьом людям із діабетом 1 типу вводили мікродозу глюкагону під час глюкозного клемпу: один раз при рівні алкоголю в крові 0,1%, другий — тверезими. Відповідь була фактично однаковою: площа над кривою швидкості інфузії глюкози 1996 з алкоголем проти 1981 без нього. Піковий ефект з алкоголем був дещо меншим — 83,0 проти 101,7 мл/год, — але глюкагон вочевидь працював. Тож точне формулювання вужче за популярне: глюкагон менш надійний саме за тих обставин, за яких ці гіпоглікемії стають тяжкими, бо це і є обставини, коли глікогену мало. Менш надійний — це не те саме, що марний."
      },
      {
        "t": "p",
        "text": "Практична різниця працює в протилежний бік від популярної версії, і вона величезна. «Глюкагон не працює» — це фраза, яка може переконати перелякану людину не застосувати його в екстреній ситуації. Ніхто не повинен винести це з цієї сторінки. Якщо в людини є екстрений глюкагон і він потрібен — його треба застосувати, і водночас викликати екстрену допомогу, а не замість, бо саме тут покладатися на нього не можна. Чим глюкагон у цій ситуації не є — так це приводом почуватися прикритим. Коли і як його застосовувати, належить до плану, узгодженого зі своєю діабетичною командою до того, як він знадобиться."
      },
      {
        "t": "h",
        "text": "Що люди справді з цим роблять"
      },
      {
        "t": "p",
        "text": "Далі — опис того, що зазвичай радять і що люди обговорюють зі своїми командами. Це не інструкція, і кожен із цих пунктів має версію, яка підходить саме вам, і версію, яка не підходить, — а це саме те, чого стаття знати не може."
      },
      {
        "t": "table",
        "head": [
          "Що зазвичай обговорюють",
          "Чому — і що взяти до своєї команди"
        ],
        "rows": [
          [
            "Їсти вуглеводи разом з алкоголем, а не пити натщесерце",
            "Це стандартна порада діабетичних організацій, і вона прямо випливає з механізму: їжа лишає вам глікоген, з якого можна брати, коли вироблення нової глюкози пригнічене. Варто зазначити, що докази тут радше механістичні, ніж з клінічних випробувань. Що саме і скільки — питання до вашої команди."
          ],
          [
            "Перевіряти глюкозу перед сном і далі протягом наступного дня",
            "Вікно занепокоєння — наступні 10–12 годин і, можливо, більше, тож найважливіша перевірка — не та, що наприкінці вечора. Одне вимірювання перед сном показує, де ви є, а не куди ви рухаєтеся."
          ],
          [
            "Інакше налаштовувати нічні тривоги після алкоголю",
            "Тривоги сенсора — практична відповідь на ризик, який настає, поки ви спите, і тут вони важливіші саме тому, що на природне пробудження покладатися не можна. Як їх налаштувати — питання до команди: поріг тривоги фактично є клінічним рішенням."
          ],
          [
            "Сказати хоча б одній людині поруч",
            "Бо сценарій відмови — це коли інші читають гіпоглікемію як сп’яніння. Людина, яка розуміє, що відбувається, і знає, що треба викликати допомогу, якщо вас не вдається розбудити, змінює результат більше, ніж будь-що інше в цьому списку."
          ],
          [
            "Не покладатися на пробудження і не покладатися на симптоми",
            "У сомнологічному дослідженні під час викликаної нічної гіпоглікемії прокинувся лише один із 16 людей із діабетом 1 типу, а алкоголь і розриває сон, і псує ту саму здатність судити, якою ви розпізнавали б гіпоглікемію."
          ],
          [
            "Будь-що, що стосується інсуліну",
            "Це єдиний пункт без жодних нюансів. Будь-яка зміна інсуліну — час, доза, базал, що завгодно — це розмова з вашою діабетичною командою, узгоджена заздалегідь. Цей текст не каже вам, що робити з дозами, і жодна стаття не повинна."
          ]
        ]
      },
      {
        "t": "p",
        "text": "Якщо у вас була нічна гіпоглікемія, яку ви не можете пояснити, [дослідник цукру в крові](/blood-sugar-investigator-ua/) — це саме той інструмент на цьому сайті, що створений для такого: пройти назад через те, що сталося, замість гадати. А якщо виявиться, що вам потрібна нічна картина, а не окремі виміри, [нічна пітливість чи гіпоглікемія?](/ua/blog/night-sweats-or-hypo/) пояснює, як читати два тижні кривих, — а це справді інша навичка, ніж читання однієї цифри."
      },
      {
        "t": "h",
        "text": "А якщо у вас немає діабету: що змінюється після 40"
      },
      {
        "t": "p",
        "text": "Ніщо з написаного вище не стосується вас, якщо ви не на інсуліні й не на ліках, здатних викликати гіпоглікемію: хімічно ваша печінка робить те саме, але підшлункова підлаштовується. Проте інша проблема є, і саме через неї багато жінок приходять сюди у свої сорок — той самий келих діє на вас інакше, ніж раніше, і вам це не здається."
      },
      {
        "t": "p",
        "text": "Найпряміші дані — це SWAN, дослідження, що спостерігало 2 578 жінок віком 42–52 роки й моделювало траєкторії їхньої глюкози натще. Я передам те, що воно знайшло, а не те, що йому зазвичай приписують, бо це різні речі. Помірне вживання алкоголю було пов’язане з меншими шансами високо-спадної траєкторії глюкози, найсильніше при найбільшому споживанні (відношення шансів 0,23, 95% ДІ 0,10–0,52); власне формулювання авторів — що помірне вживання може захищати. Я не вдаватиму, що це говорить більше, ніж говорить: воно обсерваційне, цікава група — 111 жінок, а зв’язок не підтвердився в роботах з менделівської рандомізації. Що це справді встановлює — глюкоза натще не є тим місцем, де проявляється проблема алкоголю в середньому віці. Якщо ви помітили зміну, це не той показник, який її пояснить."
      },
      {
        "t": "p",
        "text": "Те, що ви помітили, найімовірніше стосується сну й симптомів. Алкоголь надійно розриває другу половину ночі — ту саму, яку перименопауза вже й так порушує, — а розірваний сон погіршує чутливість до інсуліну наступного дня цілком незалежно від того, що алкоголь зробив із печінкою. Саме ця петля і є справжньою історією середнього віку, і [те, що розірвані ночі роблять з інсулінорезистентністю](/ua/blog/sleep-insulin-resistance-women/), важить тут більше, ніж сам напій."
      },
      {
        "t": "p",
        "text": "Алкоголь також є вазомоторним тригером із дозозалежністю. У когорті жінок у пременопаузі шанси на дошкульні припливи зростали зі споживанням порівняно з тими, хто ніколи не пив: 1,42 (95% ДІ 1,02–1,99) при менш ніж 10 г на добу і до 3,52 (95% ДІ 1,72–7,20) при 40 г і більше. Великий келих вина — це приблизно 20–25 г. Тобто вино, яке допомагає вам заснути, статистично причетне до того, що вас будить. Чи вартий цей обмін того — ваша справа, і я не маю щодо цього думки; варто знати, що він існує, бо більшість тих, хто його робить, про це не здогадується. Ширша картина — у [базовому тексті про перименопаузу й цукор у крові](/ua/blog/perimenopause-diabetes-blood-sugar/), а якщо вас привели сюди міксери, [чим замінити цукор](/ua/blog/natural-sweeteners/) розбирає бік підсолоджувачів — хоча це найменш важлива змінна на цій сторінці."
      },
      {
        "t": "h",
        "text": "Що роблю я"
      },
      {
        "t": "p",
        "text": "Двадцять три роки з діабетом 1 типу — тож у мене був чималий час помилитися тут майже всіма доступними способами. Те, на чому я зупинилася, — не правило, і я його не рекомендую; це домовленість однієї людини з тілом однієї людини."
      },
      {
        "t": "p",
        "text": "Я п’ю рідко, з їжею, і не напередодні того, для чого мені треба бути ясною. Я перестала вважати кінець вечора кінцем події: тепер я звертаю увагу на наступний ранок, і мені знадобилася ганебна кількість років, щоб до цього дійти, бо все, що я коли-небудь читала, вказувало не на той кінець часової шкали. Мої тривоги в такі ночі налаштовані так, щоб дратувати, і я їм це дозволяю. І той, хто поруч, знає, як виглядає гіпоглікемія, і знає, що вона може виглядати точнісінько як зайвий келих вина."
      },
      {
        "t": "p",
        "text": "Але передати я хотіла б переосмислення. Напій — це не подія. Подія — за десять годин, і якщо витрачати всю увагу на келих, ви її просто пропустите."
      },
      {
        "t": "h",
        "text": "Рядок, який має значення"
      },
      {
        "t": "p",
        "text": "Це загальна інформація і досвід однієї людини. Це не медична порада, тут немає жодних вказівок щодо доз, і це не заохочення пити й не лекція про те, щоб не пити. Якщо ви на інсуліні або на будь-чому іншому, що може спричинити гіпоглікемію, корисна версія всього вищенаписаного — це план, який ви складаєте зі своєю діабетичною командою: до події, а не під час неї, і записаний, поки ви достатньо ясно мислите, щоб чесно сказати, що ви робите насправді, а не те, що, як вам здається, слід сказати."
      },
      {
        "t": "refs",
        "items": [
          {
            "claim": "Вечірній алкоголь знизив ранкову глюкозу і спричинив гіпоглікемію у п’ятьох із шести людей із діабетом 1 типу.",
            "detail": "Шістьох чоловіків із діабетом 1 типу (19–51 рік, HbA1c 7,0–10,3%) госпіталізували двічі з 17:00 до полудня наступного дня на стандартизованому харчуванні з коротким інсуліном о 18:00 і 8:00 та фіксованою базальною інфузією з 23:00. О 21:00 вони випивали або сухе біле вино (0,75 г/кг алкоголю), або мінеральну воду протягом 90 хвилин. Етанол у крові досягав піку 19,1 ммоль/л і не визначався вже о 8:00. Значущих відмінностей у вечірній чи нічній глюкозі не було. Уранці глюкоза натще і після їжі була значно нижчою після вина (пік після їжі 8,9 проти 15 ммоль/л, p < 0,01), і з 10:00 п’ятьом із шести знадобилося лікування гіпоглікемії (мінімум 1,9–2,9 ммоль/л); після води — жодному. Секреція гормону росту була значно знижена з півночі до 4:00 після вина (p = 0,04). Шестеро учасників, усі чоловіки — найчистіша демонстрація відстроченого ефекту, яка існує, і надто мала, щоб упевнено узагальнювати.",
            "cite": "Diabetes Care · Turner BC, Jenkins E, Kerr D, Sherwin RS, Cavan DA, 2001;24(11):1888–93",
            "url": "https://pubmed.ncbi.nlm.nih.gov/11679452/"
          },
          {
            "claim": "Ефект зниження глюкози проявляється приблизно через 10–12 годин після вечірнього напою.",
            "detail": "Робота з метаболічного моделювання тієї ж дослідницької групи зазначає, що алкоголь, прийнятий о 21:00, значно знижував рівень глюкози в крові через 10–12 годин порівняно з контрольними дослідженнями без алкоголю, і моделює механізм як поєднання підвищеного NADH, що зменшує печінковий глюконеогенез, виснаження глікогену та зростання чутливості печінки до інсуліну після метаболізму алкоголю, поки відновлюються запаси глікогену. Це симуляційне дослідження, що валідує модель на раніших клінічних даних, а не незалежний клінічний доказ: його цінність у описі форми механізму, а не в підтвердженні цифр.",
            "cite": "International Journal of Medical Informatics · Plougmann S, Hejlesen O, Turner B, Kerr D, Cavan D, 2003;70(2–3):337–44",
            "url": "https://pubmed.ncbi.nlm.nih.gov/12909186/"
          },
          {
            "claim": "Вважається, що алкоголь пригнічує печінковий глюконеогенез приблизно до 45%.",
            "detail": "Систематичний огляд рандомізованих контрольованих досліджень про алкоголь і глікемічний контроль при діабеті 1 типу описує механізм — етанол метаболізується через алкогольдегідрогеназу та альдегіддегідрогеназу, виснажуючи печінковий NAD+, критично важливий для шляху глюконеогенезу, — і повідомляє, що печінковий глюконеогенез, як вважають, знижується до 45% після вживання алкоголю. Два важливі застереження: цифра 45% є вторинним цитуванням у цьому огляді робіт 1997 і 2004 років і сформульована як верхня межа, а не середнє значення; сам огляд опубліковано у 2008 році, тож це якісне узагальнення доказової бази, яка відтоді мало змінилася, а не сучасний огляд. Огляд також документує справді суперечливі результати між включеними дослідженнями.",
            "cite": "Journal of Diabetes Nursing · Adams G, Jeyes L, Evans E, 2008;12(8):289",
            "url": "https://diabetesonthenet.com/journal-diabetes-nursing/effects-of-alcohol-on-blood-glucose-levels-in-people-with-type-1-diabetes-a-systematic-review/"
          },
          {
            "claim": "Дослідження, яке найчастіше наводять як спростування відстроченого ефекту, припинило вимірювання о 6:00.",
            "detail": "Чотирнадцятеро підлітків із діабетом 1 типу віком понад 16 років носили безперервні монітори глюкози протягом вихідних, коли вживання алкоголю планувалося лише на одну ніч, і кожен був сам собі контролем щодо відповідного періоду за 24 години до або після. Вживання було радше значним, ніж помірним: у середньому 9,0 стандартних порцій у юнаків і 6,3 у дівчат. Ніч з алкоголем показала більшу варіабельність глюкози, жодної різниці в часі при нормальних і високих значеннях і значуще вищий відсоток часу при низьких значеннях у контрольний період — більше, а не менше — тобто після алкоголю гіпоглікемій було менше. Це широко цитують як доказ, що алкоголь не спричиняє гіпоглікемії. Вирішальне обмеження — вікно спостереження: з 18:00 до 06:00. У борнмутському дослідженні нічний період теж був нормальним, а гіпоглікемія почалася о 10:00 — через чотири години після того, як це дослідження припинило запис. Це не стільки суперечливий результат, скільки такий, що не міг виявити ефект, про який ідеться.",
            "cite": "Diabetic Medicine · Ismail D, Gebert R, Vuillermin PJ, Fraser L, McDonnell CM, Donath SM, Cameron FJ, 2006;23(8):830–3",
            "url": "https://pubmed.ncbi.nlm.nih.gov/16911618/"
          },
          {
            "claim": "Разом з вуглеводами алкоголь може підвищувати короткострокову глюкозну відповідь, а не знижувати її.",
            "detail": "У перехресному дослідженні 10 здоровим добровольцям давали пиво міцністю 4,5% об., безалкогольне пиво, розчин глюкози з алкоголем і двічі — контрольний розчин глюкози. Кожна порція містила 25 г доступних вуглеводів, а алкогольні порції — 21 г алкоголю. Розчин глюкози з алкоголем дав на 18% вищу приростову площу під кривою глюкози після їди порівняно з контролем (p = 0,03) без значущого впливу на інсулін. Виміряний глікемічний індекс становив 119 для пива проти 80 для безалкогольного, а інсулінемічний індекс — 130 проти 88. Автори пояснюють це зростання погіршенням чутливості до інсуліну й роблять висновок, що опубліковані значення глікемічного індексу для алкогольного пива занижували його справжній глікемічний ефект. Десятеро здорових добровольців і двогодинне вікно, тож це стосується лише негайної відповіді, — але це найчіткіша демонстрація того, що короткостроковий і відстрочений ефекти алкоголю на глюкозу спрямовані в протилежні боки.",
            "cite": "American Journal of Clinical Nutrition · Hätönen KA, Virtamo J, Eriksson JG, Perälä MM, Sinkko HK, Leiviskä J, Valsta LM, 2012;96(1):44–9",
            "url": "https://pubmed.ncbi.nlm.nih.gov/22648716/"
          },
          {
            "claim": "Етанол, уведений внутрішньовенно людям із діабетом 1 типу після голодування, сам собою не спричинив гіпоглікемії.",
            "detail": "Дев’ятеро людей із діабетом 1 типу голодували вночі, а потім отримували, у сліпому режимі, або внутрішньовенний етанол (болюс 0,5 г/кг, далі 0,25 г/кг/год), або відповідний обсяг фізіологічного розчину під час гіпоінсулінемічного еуглікемічного клемпу. 60-хвилинна інфузія етанолу до стабільної концентрації 26,2 ммоль/л не змінила ані швидкості інфузії глюкози, потрібної для підтримання еуглікемії (1,22 проти 1,23 мг/кг/хв), ані початкової швидкості падіння глюкози, ані найнижчого досягнутого рівня, ані швидкості відновлення. Включено свідомо, бо воно ускладнює просту історію: етанол у крові не знижує глюкозу напряму в умовах клемпу. Відстрочений ефект у реальному житті, схоже, потребує решти складників — виснаженого глікогену, нічного голодування та інсуліну, що продовжує діяти.",
            "cite": "Diabetic Medicine · Moriarty KT, Maggs DG, Macdonald IA, Tattersall RB, 1993;10(1):61–5",
            "url": "https://pubmed.ncbi.nlm.nih.gov/8435990/"
          },
          {
            "claim": "Алкоголь і м’яка гіпоглікемія погіршують когнітивні функції адитивно.",
            "detail": "Сімнадцятеро дорослих із діабетом 1 типу пройшли чотири гіперінсулінемічні клемпи: еуглікемія з плацебо, еуглікемія з алкоголем, гіпоглікемія (2,8 ммоль/л) з плацебо та гіпоглікемія з алкоголем. Середній рівень алкоголю в крові в алкогольних групах становив 43 мг/дл — нижче за британську норму для водіння. Час реакції з чотирма варіантами вибору сповільнився на 35 мс лише від алкоголю (95% ДІ 20–50) і на 39 мс лише від гіпоглікемії (95% ДІ 5–73), але на 74 мс від обох разом (95% ДІ 35–113), з погіршенням також у тестах trail making, digit symbol substitution і visual change detection. Сприйняття небезпеки не постраждало. Показово, що гіпоглікемія не зменшувала готовності учасників сідати за кермо, а алкоголь — зменшував. Автори роблять висновок, що людям із діабетом 1 типу слід повністю уникати алкоголю, якщо вони планують керувати автомобілем.",
            "cite": "Diabetic Medicine · Cheyne EH, Sherwin RS, Lunt MJ, Cavan DA, Thomas PW, Kerr D, 2004;21(3):230–7",
            "url": "https://pubmed.ncbi.nlm.nih.gov/15008832/"
          },
          {
            "claim": "Алкоголь на рівні 0,1% у крові не скасував здатності глюкагону піднімати глюкозу при діабеті 1 типу.",
            "detail": "Рандомізоване перехресне дослідження за участю 15 дорослих із діабетом 1 типу вводило підшкірну мікродозу глюкагону 50 мкг під час гіперінсулінемічного нормоглікемічного клемпу — один раз із рівнем алкоголю в крові 0,1%, утримуваним внутрішньовенною інфузією, і один раз без нього. Опубліковані результати показують площу над кривою швидкості інфузії глюкози 1996 (SD 1259) з етанолом проти 1981 (SD 938) без нього — фактично однаково — і максимальну зміну швидкості інфузії глюкози від початкового рівня 83,0 (SD 35,2) з етанолом проти 101,7 (SD 38,8) мл/год без нього. Зареєстрована гіпотеза полягала в тому, що алкоголь суттєво не змінить антигіпоглікемічної дії глюкагону, і саме це показали результати. Це прямо уточнює широко повторюване твердження, що глюкагон не працює при пов’язаній з алкоголем гіпоглікемії: воно походить зі сценарію виснаженого глікогену під час голодування, де глюкагону мало що мобілізувати, а не з наявності алкоголю як такого. Дослідження мале й клемпове, а не в реальній екстреній ситуації, — але це релевантний прямий доказ, і він вказує проти того, щоб вважати глюкагон марним.",
            "cite": "ClinicalTrials.gov · NCT02516150, Effect of Ethanol Intoxication on the Anti-hypoglycemic Action of Glucagon (завершено, результати опубліковано)",
            "url": "https://clinicaltrials.gov/study/NCT02516150"
          },
          {
            "claim": "Більшість людей із діабетом 1 типу не прокидаються під час нічної гіпоглікемії.",
            "detail": "Шістнадцятьох людей із діабетом 1 типу і 16 підібраних здорових учасників контролю дослідили під полісомнографією. Однієї ночі інсулін вводили так, щоб отримати лінійне падіння глюкози плазми до мінімуму 2,2 ммоль/л; контрольної ночі підтримували еуглікемію. Прокинувся лише один із 16 учасників із діабетом 1 типу — проти десяти з 16 у контролі (p = 0,001). Контрольними ночами не прокинувся ніхто. У тих, хто прокидався, адреналін зростав у середньому за 7,5 хвилини до пробудження, що свідчить: пробудження є частиною контррегуляторної відповіді, а не чимось окремим від неї. Мале лабораторне дослідження викликаної гіпоглікемії, але масштаб різниці важко пояснити випадковістю.",
            "cite": "PLoS Medicine · Schultes B et al., 2007;4(2):e69",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC1808097/"
          },
          {
            "claim": "Тему алкоголю недостатньо висвітлюють у діабетичному навчанні, а тяжкі гіпоглікемії частішають при більших обсягах.",
            "detail": "Міжнародне опитування 216 людей із діабетом 1 типу з 23 країн (63,4% жінки, 54,2% віком 16–21 рік) виявило, що лише 53,2% почувалися безпечно, вживаючи алкоголь, 37% оцінили свої знання про алкоголь як середні або нижчі, і лише 45,8% повідомили, що тема безпечного вживання алкоголю розглядалася в межах їхнього діабетичного навчання. Майже половина — 48,2% — стикалася з непередбачуваним впливом алкогольних напоїв на глюкозу. Пов’язана з алкоголем тяжка гіпоглікемія була значно частішою в тих, хто повідомляв про часте надмірне вживання (відношення шансів 4,19, 95% ДІ 1,37–12,75), і в тих, хто регулярно вживав дві та більше порції за раз (відношення шансів 4,20, 95% ДІ 1,52–11,61). Самозвіт, поперечний зріз і зміщення у бік молодшого віку, тож встановлює зв’язок, а не причину, — але це найновіша доступна картина.",
            "cite": "Hormone Research in Paediatrics · Michalak A et al., T1Drink, 2025",
            "url": "https://pubmed.ncbi.nlm.nih.gov/41248109/"
          },
          {
            "claim": "У жінок середнього віку без діабету помірний алкоголь був пов’язаний з нижчими, а не вищими траєкторіями глюкози натще.",
            "detail": "Аналіз 2 578 жінок віком 42–52 роки зі Study of Women’s Health Across the Nation, кожна щонайменше з трьома вимірюваннями глюкози натще між 1996 і 2005 роками, використав групове моделювання траєкторій і виділив низько-стабільну траєкторію (n = 2 467) та високо-спадну (n = 111). Порівняно з низько-стабільною групою, споживання алкоголю було обернено пов’язане з високо-спадною траєкторією в повністю скоригованій моделі, найсильніше у верхньому терцилі денних порцій (відношення шансів 0,23, 95% ДІ 0,10–0,52, p < 0,001). Автори роблять висновок, що помірне вживання може захищати від високих траєкторій глюкози натще дозозалежним чином. Включено тому, що саме на це дослідження зазвичай посилаються щодо середнього віку, а його справжній напрямок протилежний до того, що з цього роблять. Воно обсерваційне, цікава траєкторна група мала, помірні питці системно відрізняються від непитущих способами, які поправки повністю не усувають, а робота з менделівської рандомізації, цитована в самій статті, не знайшла причинного зв’язку між пов’язаним з алкоголем варіантом гена та концентрацією глюкози.",
            "cite": "Wang et al. · Frontiers in Public Health · аналіз SWAN, 2024",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10847307/"
          },
          {
            "claim": "Споживання алкоголю має дозозалежний зв’язок із дошкульними припливами.",
            "detail": "Когортне дослідження жінок у пременопаузі оцінювало помірно та сильно дошкульні вазомоторні симптоми за опитувальником Menopause-Specific Quality of Life. Порівняно з тими, хто ніколи не вживав алкоголю, скориговані за багатьма факторами відношення шансів для наявних симптомів становили 1,42 (95% ДІ 1,02–1,99) при менш ніж 10 г алкоголю на добу, 1,99 (1,27–3,12) при 10–19 г, 2,06 (1,19–3,57) при 20–39 г і 3,52 (1,72–7,20) при 40 г і більше (p для тренду < 0,01). Відношення ризиків для нововиниклих дошкульних симптомів мали той самий градієнт, досягаючи 2,22 (1,16–4,23) при 40 г і більше (p для тренду = 0,02). Обсерваційне, в одній національній когорті, із самозвітними вимірюваннями симптомів — але градієнт дозозалежності узгоджений і для наявних, і для нововиниклих результатів.",
            "cite": "Nutrients · Kwon R, Chang Y, Kim Y та ін., 2022;14(11):2276",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9182895/"
          }
        ]
      },
      {
        "t": "links",
        "title": "Дотичне читання",
        "items": [
          {
            "name": "Нічна пітливість чи гіпоглікемія? Як їх розрізнити",
            "url": "/ua/blog/night-sweats-or-hypo/",
            "desc": "Алкоголь запускає і те, і те. Як читати два тижні нічних кривих замість того, щоб гадати."
          },
          {
            "name": "Сон та інсулінорезистентність у жінок",
            "url": "/ua/blog/sleep-insulin-resistance-women/",
            "desc": "Петля, яка робить найбільше роботи в «після 40» частині цього тексту."
          },
          {
            "name": "Перименопауза та діабет: що насправді відбувається з вашим цукром у крові",
            "url": "/ua/blog/perimenopause-diabetes-blood-sugar/",
            "desc": "Базовий текст: як поводиться глюкоза, коли падає естроген."
          },
          {
            "name": "Харчування навколо тренувань при діабеті",
            "url": "/ua/blog/eating-around-training-blood-sugar/",
            "desc": "Тренування й алкоголь накладають свої відстрочені ефекти. Принципи таймінгу ті самі."
          },
          {
            "name": "Дослідник цукру в крові",
            "url": "/blood-sugar-investigator-ua/",
            "desc": "Щоб пройти назад через нічну гіпоглікемію, яка не сходиться."
          },
          {
            "name": "Чим замінити цукор",
            "url": "/ua/blog/natural-sweeteners/",
            "desc": "Якщо вас привело сюди питання міксерів — хоча це найменш важлива змінна."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "Чому алкоголь знижує цукор наступного дня, а не поки ви п’єте?",
        "a": "Бо ефект спрямований на вироблення глюкози, а не на її надходження. Уночі печінка тримає глюкозу двома способами: вивільняє запасений глікоген і виробляє нову глюкозу через глюконеогенез. Метаболізм етанолу зміщує співвідношення NADH до NAD+ у печінці й пригнічує глюконеогенез — за повідомленнями, приблизно до 45%, хоча ця цифра є верхньою межею, а не середнім значенням. Запасений глікоген при цьому не зачеплений, тож спочатку нічого не відбувається; проблема з’являється, коли ці запаси вичерпуються, а заміни не виробляється. У контрольованому дослідженні люди з діабетом 1 типу, які випили сухе біле вино о 21:00, мали цілком нормальну глюкозу вночі, а потім п’ятьом із шести знадобилося лікування гіпоглікемії з 10:00 наступного ранку — коли алкоголь у крові вже дві години як не визначався."
      },
      {
        "q": "Скільки триває ризик після вживання алкоголю?",
        "a": "Найкраще охарактеризоване вікно — приблизно 10–12 годин після вечірнього напою, що для напою о дев’ятій вечора припадає на ранній і середній ранок. Деякі джерела описують підвищений ризик протягом наступних 24 годин; це ширше твердження на слабших доказах, але воно вказує в той самий бік. Практично важливо, що період ризику здебільшого настає після того, як ви припинили пити, і в більшості випадків після того, як ви прокинулися, — тож одна перевірка перед сном показує, де ви є, а не куди ви рухаєтеся. Ризик також суттєво різниться між людьми і між випадками, і це частина причини, чому його важко планувати і чому план має бути тим, який допомогла скласти ваша діабетична команда."
      },
      {
        "q": "Чи працює глюкагон при гіпоглікемії, пов’язаній з алкоголем?",
        "a": "Дуже широко стверджують, що ні, — і це твердження радше потребує уточнення, ніж повторення. Глюкагон піднімає глюкозу переважно тим, що спонукає печінку вивільнити запасений глікоген, тож там, де глікоген справді виснажений (тривале голодування, виснаження), йому мало що мобілізувати, і робить він мало. Звідси й походить це вчення, і воно легітимне. Але дослідження, яке перевіряло це напряму при діабеті 1 типу, виявило, що утримання рівня алкоголю в крові на 0,1% не скасовує дії глюкагону: глюкозна відповідь була фактично однаковою з алкоголем і без нього, з дещо меншим піковим ефектом. Тож точна версія така: глюкагон менш надійний саме за тих обставин, за яких пов’язані з алкоголем гіпоглікемії стають тяжкими — довга ніч, без їжі, важке тренування перед тим, — а не те, що він не працює. Ніхто не повинен прочитати це як привід не застосувати глюкагон в екстреній ситуації. Якщо він потрібен — його треба застосувати, і водночас викликати екстрену допомогу, а не замість. Коли і як його застосовувати — питання плану, узгодженого з вашою діабетичною командою."
      },
      {
        "q": "Чи безпечніше сухе вино за солодкий напій, якщо у вас діабет?",
        "a": "Не з тієї причини, яку припускають, і не в тому сенсі, який містить запитання. Вміст вуглеводів у напої — реальний, але короткий і помітний ефект: він поводиться як вуглеводи в будь-чому іншому. Відстрочений ефект, який застає людей зненацька, походить від етанолу, а сухого вина це стосується так само. У контрольованому дослідженні, яке найчіткіше показало ранкову гіпоглікемію, використовували саме сухе біле вино. Солодкий міксер може спершу підняти глюкозу, а потім залишити під собою ефект етанолу на кілька годин, що радше ускладнює читання картини, ніж полегшує. Обирати напій лише за вмістом цукру — це оптимізувати змінну, яка тут важить найменше."
      },
      {
        "q": "Чому гіпоглікемію плутають зі сп’янінням?",
        "a": "Бо збоку вони виглядають однаково. Невиразна мова, хиткість, сплутаність, погана координація й нехарактерна поведінка описують і те, і те, і надійного способу розрізнити їх для стороннього немає. Це важливо, бо реакція має бути зовсім різною: людину, яка здається п’яною, залишають проспатися, тоді як людині з тяжкою гіпоглікемією потрібна глюкоза і, можливо, швидка. Ці два стани ще й підсилюють одне одного: у клемп-дослідженні сам алкоголь і сама м’яка гіпоглікемія сповільнювали час реакції приблизно на 35–39 мілісекунд кожен, а разом — на 74, з погіршенням в усіх використаних когнітивних тестах. Практичні висновки: хоча б одна людина поруч має знати; медичний ідентифікатор варто носити з собою, а не залишати вдома; і автори того ж дослідження зробили висновок, що людям із діабетом 1 типу слід повністю уникати алкоголю, якщо вони планують сідати за кермо."
      },
      {
        "q": "У мене немає діабету — чому вино діє на мене інакше в 46, ніж у 36?",
        "a": "Найімовірніше, не через глюкозу натще. Основне дослідження про алкоголь і траєкторії глюкози в жінок середнього віку, що спостерігало 2 578 жінок віком 42–52 роки, насправді виявило зв’язок помірного вживання з меншими, а не більшими шансами високої траєкторії глюкози натще — обсерваційний результат, який варто передати точно, а не перевертати під зручну розповідь. Краще підтверджений вплив — на сон і на симптоми. Алкоголь розриває другу половину ночі, тобто ту саму половину, яку вже порушує перименопауза, а поганий сон сам собою погіршує чутливість до інсуліну наступного дня. Алкоголь також є вазомоторним тригером із дозозалежністю: порівняно з тими, хто ніколи не пив, шанси на дошкульні припливи зростали від 1,42 при менш ніж 10 г на добу до 3,52 при 40 г і більше в одному когортному дослідженні. Великий келих вина — це приблизно 20–25 г. Тобто напій, який допомагає вам заснути, статистично причетний до того, що вас будить, — і це варто знати, хай що ви з цим вирішите робити."
      }
    ]
  }
};
