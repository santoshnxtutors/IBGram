import type { CitySeoPage } from "../types";

/**
 * Sivagiri here is the Western Ghats foothill town in Tenkasi district, Tamil Nadu (not Sivagiri in
 * Erode district and not Sivagiri in Kerala). No IB or Cambridge school there could be confirmed,
 * so stripSchools is empty and the clusters point to Madurai and Thiruvananthapuram using names
 * already checked on the Madurai and Thiruvananthapuram pages.
 */
export const sivagiri: CitySeoPage = {
  slug: "sivagiri",
  countryName: "Sivagiri",
  countryNameLong: "Sivagiri, Tenkasi, Tamil Nadu",
  demonym: "Sivagiri",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings once the sugar mill shift changes and school buses are home, plus calm Sunday mornings when the hills are quiet",
  lastUpdated: "2026-09-21",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  geo: { latitude: 9.33, longitude: 77.43 },
  wikipedia: "https://en.wikipedia.org/wiki/Sivagiri,_Tenkasi",
  alternateNames: ["Sivagiri Tenkasi", "Sivagiri Tirunelveli", "Sivagiri Tamil Nadu", "Sivagiri taluk"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sivagiri | Online Tuition, Tenkasi",
  metaDescription:
    "IB and IGCSE tutors for Sivagiri in Tenkasi district: live one-to-one online lessons from home, matched to your papers, with a free first lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sivagiri",
  heroEyebrow: "IB & IGCSE TUITION FOR SIVAGIRI, TENKASI DISTRICT",
  heroSubtitle:
    "Covering Sivagiri in Tenkasi district only; the Sivagiri near Erode and the one in Kerala are different places. Home tuition for an IB or IGCSE student here is online, one to one; IB Gram tutors make house visits only in Gurugram and parts of Delhi NCR. Sivagiri lies on the leeward foothills of the Western Ghats, about ninety-five kilometres from Madurai's international campuses, so a tutor who already knows your child's papers saves a great deal of travel. Ask for the free first lesson.",
  primaryKeyword: "IB and IGCSE tutors in Sivagiri",
  imageAltText: "Sivagiri student at a desk at home taking a live one-to-one online IB Mathematics lesson, Western Ghats hills beyond the window",
  secondaryKeywords: [
    "IB tutor in Sivagiri",
    "IGCSE tutor in Sivagiri",
    "IB home tuition Sivagiri",
    "IGCSE home tuition Sivagiri",
    "IB private tuition Sivagiri",
    "IB Maths tutor Sivagiri",
    "IGCSE Maths tutor Sivagiri",
    "IB Physics tutor Sivagiri",
    "IB Chemistry tutor Sivagiri",
    "IB Biology tutor Sivagiri",
    "IB DP tutor Sivagiri",
    "IB MYP tutor Sivagiri",
    "IB PYP tutor Sivagiri",
    "IGCSE online tuition Sivagiri",
    "IB tutor Sivagiri Tenkasi",
    "IGCSE tutor Rajapalayam",
    "IB online classes Tenkasi district",
    "IB tuition southern Tamil Nadu",
  ],

  heroTrustPoints: [
    "Live teaching for one student at a time, never a recording",
    "Teachers with experience of IB DP, MYP and PYP and of Cambridge or Edexcel IGCSE",
    "Evening slots that respect mill shifts, school buses and monsoon rain",
    "A free first lesson and a written summary after every class",
    "A different tutor at no cost if the first is not a match",
  ],
  heroStats: [
    { value: "IST", label: "Timed to Indian hours" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before any payment" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "A Ghats-foothill zamindari town and an international syllabus",
    paragraphs: [
      "Sivagiri is a small town in Sivagiri taluk of Tenkasi district, formerly a zamindari seat, standing about 165 metres above sea level on the slopes of the Western Ghats. The Kombai river and several seasonal streams come down from the hills nearby, the Sastha Kovil waterfalls lie some six kilometres off, and Dharani Sugars runs a mill at Dharani Nagar. Rajapalayam is only sixteen to twenty kilometres away, Tenkasi fifty, Madurai and Tirunelveli about ninety-five. Most children here study under the Tamil Nadu State Board, Matriculation or CBSE, and think of Madurai, Tirunelveli, Coimbatore or Thiruvananthapuram for college.",
      "Some families look at the IB or at Cambridge and Edexcel IGCSE all the same. A sugar-mill engineer with a transfer behind him, a doctor from the Rajapalayam side, parents with relatives in Singapore or the Gulf, and Kerala-border households who move easily between Tamil and Malayalam are all plausible examples. We found no school in Sivagiri that teaches those syllabuses. Madurai has a handful, Thiruvananthapuram one more, but each is a long road away.",
      "What works is a tutor on a screen, a person who has taught the precise papers, lives elsewhere in India, keeps Indian hours and meets the student at a set time in the evening. No IB Gram tutor visits homes in Sivagiri. We are independent of the IB, Cambridge, Pearson and every school, and our tutors coach and explain without ever writing a student's assessments, essays or coursework.",
    ],
  },

  programmesIntro:
    "In a foothill town the IB programmes tend to reach a family through relocation, an online school or study-abroad plans. A tutor's role shifts with the child's stage.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Themed inquiry units rounded off by a pupil-led Exhibition. For the youngest, tutoring means shared reading, number games and room to explain a thought aloud.",
      countryNote:
        "A child here may move between Tamil, English and, near the border, Malayalam. Short, playful English sessions give the second language a daily home.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subjects judged on written criteria, finishing with the Personal Project. A tutor shows how to dissect a task and aim at the right band.",
      countryNote:
        "Pupils from Samacheer Kalvi textbooks have to learn that MYP credits reasoning. Weekly lessons in the first two terms smooth the change.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects with Theory of Knowledge, the Extended Essay and CAS. The tutor prepares for the papers and explains how coursework is marked, while the student writes it alone.",
      countryNote:
        "A Diploma student near the Ghats will not find a Higher Level specialist down the road, so an online teacher does what a school department normally would.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Diploma courses paired with a vocational strand and a reflective project; support covers those courses and academic English.",
      countryNote:
        "CP is rare this far south; one Madurai school was authorised for it only recently. Requests are handled individually.",
    },
  ],

  subjectsIntro:
    "We pick by course and level, with a preference for tutors who know students arriving from Samacheer Kalvi or Matriculation classrooms.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, vectors, series and reasoning for the algebra-minded, with a short unaided warm-up at the start of every class." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, probability and modelling, using rainfall, sugar-cane yields and waterfall flow data as practice material." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics through to fields and quantum ideas; water flow down the Ghats makes fluid and energy topics easy to picture." },
    { name: "Chemistry", levels: "SL / HL", description: "Mole calculations, energetics, rates and organic routes; sugar fermentation and ethanol give familiar organic examples." },
    { name: "Biology", levels: "SL / HL", description: "Cells, genetics, physiology and ecology, with Western Ghats biodiversity ready for the ecology units." },
    { name: "Economics", levels: "SL / HL", description: "Markets, policy, trade and development, with sugar-cane pricing, mill economics and fireworks and match industries nearby as cases." },
    { name: "Business Management", levels: "SL / HL", description: "Reading cases, finance ratios and choosing a tool for an unseen firm, easy to ground in a small-industry family's experience." },
    { name: "Computer Science", levels: "SL / HL", description: "Problem decomposition, data structures and pseudocode in the form papers use." },
    { name: "Psychology", levels: "SL / HL", description: "Famous studies, how to challenge them and how to assemble a top-band essay." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Detailed reading of unseen passages, comparison essays and rehearsal of the individual oral." },
    { name: "Tamil A / Hindi B", levels: "SL / HL", description: "Tamil literature for first-language speakers, or guided writing and speaking in Hindi B." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Water, forests and land use, with the Ghats, the Kombai river and the leeward rain shadow as real examples." },
    { name: "Theory of Knowledge", levels: "Core", description: "Practising knowledge arguments and shaping the exhibition in the student's own voice." },
  ],
  igcseSubjectsIntro:
    "We teach Cambridge and Pearson Edexcel IGCSE. Choose between Core and Extended in Class 9; it determines the best grade a pupil can reach.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with an honest talk about which tier fits." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "Preliminary calculus and functions for anyone expecting IB Mathematics AA or A Level." },
    { name: "Physics (0625 / 4PH1)", levels: "Core / Extended", description: "Mechanics, circuits, waves and heat, along with the experiment-planning questions of the practical paper." },
    { name: "Chemistry (0620 / 4CH1)", levels: "Core / Extended", description: "Atoms, bonding, reactivity and organic families, with ion tests learned properly." },
    { name: "Biology (0610 / 4BI1)", levels: "Core / Extended", description: "Cells, enzymes, heredity and ecosystems, plus rehearsal in writing up an experiment the way examiners want." },
    { name: "Computer Science (0478)", levels: "Single tier", description: "Algorithm design, hand tracing, binary and database basics." },
    { name: "English as a Second Language", levels: "Single tier", description: "Comprehension, directed writing and speaking for pupils whose home language is Tamil or Malayalam." },
    { name: "Hindi as a Second Language (0549)", levels: "Single tier", description: "Reading passages, letters and short essays set out as the syllabus requires." },
    { name: "Economics (0455) and Business Studies (0450)", levels: "Single tier", description: "Core terms, calculations and short case questions." },
  ],

  regionsTitle: "Sivagiri and the Tenkasi-side places we teach",
  regionsIntro:
    "Since every class is online, signal, rain, power cuts and school-day length are what count. This is how we read each place.",
  regions: [
    { name: "Sivagiri town", note: "The taluk centre, a former zamindari seat with its temples, schools and tuition shops; mobile data is usually enough for video." },
    { name: "Dharani Nagar", note: "The sugar-mill neighbourhood where mill staff families live, with shift hours that favour weekend lessons." },
    { name: "Sastha Kovil falls side", note: "Forest-fringe settlements near the waterfalls about six kilometres away, where signal dips and a backup SIM helps." },
    { name: "Rajapalayam", note: "The larger town sixteen to twenty kilometres away, known for its dogs, cotton and textile mills, and a bigger school scene." },
    { name: "Srivilliputhur", note: "A temple town on the Virudhunagar side, with the famous Andal temple and nearby Kalasalingam university." },
    { name: "Sankarankovil", note: "A temple and market town to the east, with similar farming and trading households." },
    { name: "Tenkasi", note: "The district headquarters about fifty kilometres away, close to the Courtallam waterfalls." },
    { name: "Tirunelveli", note: "The city about ninety-five kilometres off, with Manonmaniam Sundaranar University and a medical college." },
    { name: "Madurai", note: "Also about ninety-five kilometres away, the nearest city with confirmed international campuses." },
    { name: "Border villages towards Kerala", note: "Households that move easily between Tamil and Malayalam and often look to Thiruvananthapuram for study." },
  ],

  schoolClusters: [
    {
      city: "Sivagiri and Tenkasi district",
      note: "We could not confirm an IB or Cambridge school in Sivagiri or elsewhere in Tenkasi district, so local choice is limited. Students study online, privately or after relocating.",
      schools: [],
    },
    {
      city: "Nearby: Madurai",
      note: "About ninety-five kilometres away, Madurai has the closest confirmed international campuses: one running the IB continuum, several teaching Cambridge IGCSE, and a school authorised for the IB Career-related Programme.",
      schools: ["Velammal Global School", "Vikaasa World School", "TIPS Globeducate Madurai", "Kalvi Intercontinental School", "Jain Vidyalaya, Madurai", "Mahatma Global Gateway School, Madurai"],
    },
    {
      city: "Nearby: Thiruvananthapuram",
      note: "Roughly 150 kilometres away, Thiruvananthapuram has one confirmed school teaching the IB alongside Cambridge, which runs mainly as a boarding school.",
      schools: ["Trivandrum International School"],
    },
  ],
  schoolDisclaimer:
    "IB Gram has no tie to the schools mentioned here. Madurai's and Thiruvananthapuram's campuses are named because they are the closest known providers of an international programme, nothing more, and this is not advice to apply. Admissions go through the schools.",

  tutorsIntro:
    "Our tutors teach from all over India on Indian time, so a Sivagiri student is matched for subject depth and clear explanation, whatever the tutor's postcode.",

  modesIntro:
    "Every lesson in Sivagiri is online. Families usually choose one of three arrangements.",
  modes: [
    {
      title: "One-to-one class over video",
      description: "You, the tutor and a screen you can both write on, set up in a corner of the house.",
      bullets: [
        "Our teachers do not travel to Sivagiri; visits at home are a Gurugram and Delhi NCR service",
        "A laptop, an exercise book and headphones are the entire kit",
        "Work done on paper is held up to the lens and marked as it is explained",
        "Parents are emailed or messaged a brief summary at the close",
      ],
    },
    {
      title: "Revision surge",
      description: "A denser timetable during the last month before a May or November sitting.",
      bullets: [
        "Four weeks of classes, three or four a week",
        "Actual past papers, marked against the board's own scheme",
        "The topics that went badly in the mock come first",
        "A rest day sits just before the opening paper",
      ],
    },
    {
      title: "Steady weekly routine",
      description: "A single subject on a fixed evening, with one tutor, throughout the year.",
      bullets: [
        "Prevents the course from outrunning the pupil",
        "Fits the MYP years and the first year of the Diploma",
        "Shifts easily for Pongal, Deepavali, Karthigai Deepam and school tests",
        "Starts with a trial class for which nothing is charged",
      ],
    },
  ],

  sections: [
    {
      heading: "What paths lead from Sivagiri to an IB or IGCSE qualification?",
      paragraphs: [
        "Four paths are on the table for Sivagiri families. One is an online international school with classes streamed home. Another is a place in Madurai or Thiruvananthapuram as a day pupil or boarder. A third is a relocation, perhaps tied to a mill posting or a profession. The last is private IGCSE entry at an approved centre. The tutor's role changes with each.",
        "Online-school pupils sit through lessons with nobody asking whether it has sunk in. Boarders back for the holidays want a stubborn unit repaired. Families about to move want the next school's speed matched. Private candidates lack a classroom pace-setter, and their tutor ends up as the syllabus calendar.",
        "No single path is our favourite. Age, ease with English and university plans settle the matter, and we can tell you plainly what each would require of a tutor.",
        "Undecided? Try a single lesson in the subject your child fears. An hour is enough for an experienced teacher to show how near or far the student stands from the course standard, which brochures cannot.",
      ],
    },
    {
      heading: "Samacheer Kalvi, Matriculation, CBSE, IB or IGCSE in southern Tamil Nadu?",
      paragraphs: [
        "Samacheer Kalvi, Matriculation and CBSE account for nearly all schooling in Sivagiri, with engineering and medicine reached through TNEA, NEET-UG, JEE Main or CUET-UG. Those exams reward preparation and memory. IB and IGCSE papers reward reasoning, data skills and extended answers in English.",
        "Changing board seldom exposes missing knowledge. It exposes missing familiarity with command words and mark schemes, and a few concentrated weeks of lessons fill that.",
      ],
      table: {
        caption: "Five systems as a Tenkasi household meets them",
        columns: ["System", "How the final result is formed", "Language", "Where students usually head"],
        rows: [
          ["Tamil Nadu State Board (Samacheer Kalvi)", "Papers set annually by the state at Class 10 and 12", "Tamil or English", "TNEA counselling, NEET-UG, JEE Main"],
          ["Matriculation", "State board papers in English medium", "English", "TNEA, NEET-UG, CUET-UG"],
          ["CBSE", "Board exams plus school-awarded marks", "English or Hindi", "JEE Main, NEET-UG and CUET-UG"],
          ["IB Diploma", "Six subjects, assessed by coursework and final exams", "English", "Study overseas, private universities in India, or CUET-UG after equivalence is granted"],
          ["Cambridge or Edexcel IGCSE", "Entered at the Core or Extended tier", "English", "IB Diploma or A Level, then university"],
        ],
      },
    },
    {
      heading: "What decides the cost of IB and IGCSE tuition for a Sivagiri student?",
      paragraphs: [
        "Pricing for IB and IGCSE tuition in Sivagiri rests on the subject, the level, how experienced the tutor is and how many lessons run each week. You are given a written quote at the outset. A common tariff would be nonsense given how unlike a Class 7 language class and Higher Level Chemistry are.",
        "Nobody pays for travel and tutors come from across India, so a Sivagiri family can pick on subject strength alone; otherwise the nearest equal specialist could be in Madurai or Chennai.",
        "Timing outweighs volume. Routines are built in the first term of a programme, weak spots show up after mock papers, and the closing two weeks are for polish. A lot of families start with Mathematics only and bring in a science a month on.",
      ],
      bullets: [
        "Specialists in Higher Level science or mathematics usually charge above junior-language tutors",
        "Tutors for PYP, MYP, the Diploma and IGCSE are mostly different people",
        "Regular lessons through the year tend to cost less than a last-minute rush",
        "Booking late leaves fewer tutors to pick from",
        "Committing for longer makes timetables easier",
      ],
    },
    {
      heading: "Tuition centre, online tutor or self-study near Sivagiri?",
      paragraphs: [
        "Three options dominate local thinking. Tuition centres at Rajapalayam, Tenkasi or Madurai specialise in State Board, NEET and JEE and seldom see IB or IGCSE papers. Free online videos teach but never grade what the pupil writes. A private tutor online has handled the papers and marks the pupil's work, asking only for a quiet room and a steady connection.",
        "The last column notes that a screen cannot put apparatus in a pupil's hands.",
      ],
      table: {
        caption: "Study routes open to a Sivagiri student",
        columns: ["Option", "Upside", "Downside", "Fits"],
        rows: [
          ["Online private tutor", "Teaching tied to the syllabus, with marked practice", "Needs signal; no hands-on lab", "Most IB and IGCSE students"],
          ["Tuition centre in a nearby town", "Classmates and a fixed timetable", "Built for board and entrance exams, and needs travel", "Pupils also sitting State Board or CBSE papers"],
          ["Self-study with videos", "Cheap and available at any hour", "Nobody marks the work", "Revising topics already understood"],
          ["Campus in Madurai or Thiruvananthapuram", "Labs, teachers and classmates on one campus", "Cost and living apart from family", "Families who want the full school experience"],
        ],
      },
    },
    {
      heading: "Monsoons, Pongal and mill seasons: a Sivagiri year",
      paragraphs: [
        "Sivagiri lies on the leeward side of the Western Ghats, so it catches less south-west monsoon than the windward slopes but still receives the north-east monsoon from October to December. Streams that are dry in summer can run brisk in the rains, and storms sometimes interrupt power and mobile signals. Summers are hot, and the May IB and IGCSE session is sat in that heat.",
        "The sugar season shapes household life. Cane is harvested and crushed through the cooler months, roughly from December into spring, and mill-linked families keep irregular hours. We keep lesson times flexible for such weeks.",
        "Festivals fill the Tamil year: Pongal in January above all, the Tamil New Year in April, Aadi events in July and August, Navaratri and Deepavali in October or November, Karthigai Deepam in late autumn. As Deepavali and the north-east monsoon sit near the November sessions, heavy revision is moved forward and festival weeks stay light.",
      ],
      table: {
        caption: "A study year in Sivagiri",
        columns: ["Months", "Local pattern", "Tutoring plan"],
        rows: [
          ["January to March", "Pongal, cane crushing, cool weather, school exams", "Steady topic work, mock papers"],
          ["April to June", "Tamil New Year, heat, May sessions", "Dawn or late classes, timed past papers"],
          ["July to September", "Aadi festivals, light rain, new term", "Flexible slots, assessment planning"],
          ["October to December", "North-east monsoon, Deepavali, Karthigai Deepam, November sessions", "Mocks early, backup connection, light festival weeks"],
        ],
      },
    },
    {
      heading: "Where do Sivagiri students go after an international syllabus?",
      paragraphs: [
        "After school, Sivagiri students tend to head for universities abroad, private universities in India, or central and state institutions through national tests.",
        "Entry to Indian degree courses usually needs the Association of Indian Universities' equivalence certificate, available to Diploma graduates and IGCSE-plus-A-Level students, and central universities also want a CUET-UG score. NEET and JEE amend eligibility from time to time, so read the current notice before any science or mathematics subject is dropped.",
        "Within reach are Manonmaniam Sundaranar University and Tirunelveli's medical college, Kalasalingam near Srivilliputhur, Madurai Kamaraj University, the Thiagarajar and Velammal institutions of Madurai, and Thiruvananthapuram's colleges over the border. Overseas, applicants look mainly at the UK, Canada, the US, Australia and Singapore, with admissions-test coaching offered separately.",
        "Let the intended degree fix the subjects. A short talk before the school's subject deadline usually settles it.",
      ],
    },
    {
      heading: "How are IB Mathematics and science taught on screen?",
      paragraphs: [
        "The Diploma gives a choice of mathematics course. Algebra and calculus enthusiasts, mostly future engineers, tend to take Analysis and Approaches, while those who prefer data, probability and models, often bound for commerce or social science, take Applications and Interpretation. Advice from us is about suitability, never prestige.",
        "Because the board is shared, the tutor reads every line as it lands and can correct it instantly. Each class opens with a few calculator-free questions; calculator work concentrates on clear layout, which preserves method marks, and on mastery of the permitted model.",
        "Science papers turn on minor habits. Examiners look for the right scale read from an axis, a unit attached to every number and an explanation that follows cause all the way to effect. Each lesson picks one habit and trains it with real past questions. A call can illustrate an experiment well enough, but handling glassware and circuits is something a laboratory must provide.",
        "We begin with single topics, then use mixed sets, then finish with full timed papers; speed follows understanding.",
      ],
    },
    {
      heading: "Two languages at the kitchen table: Tamil, Malayalam and English",
      paragraphs: [
        "Sivagiri sits where southern Tamil Nadu meets the Ghats and the Kerala border, and many households move comfortably between Tamil and Malayalam, with English as a third language at school. That multilingual start is an asset. Children who switch between scripts and sounds tend to notice grammar, and the IB's Language A and B courses, and IGCSE English as a Second Language, reward exactly that attention.",
        "The difficulty is usually written English at length. A student fluent in speech may still lose marks in Paper 1 textual analysis or a directed-writing task because the structure of the answer is unfamiliar. Tutors work on short, regular paragraphs: a claim, a quotation, an explanation, a link back to the question. After a few weeks the pattern becomes automatic, and the same skill carries into Business Management, Economics and Psychology essays.",
        "Families sometimes ask whether Tamil or Malayalam can count towards the Diploma. A school can offer a student's first language as Language A, and some others are available through self-taught arrangements, but this depends on the school and the IB's list, so it is a question for the school coordinator. Where a tutor in the language is not available, we say so, and we never pretend otherwise.",
        "A practical routine helps: read one English article a day on a topic the student already likes, write three sentences summarising it, and send them before the weekly lesson. It takes ten minutes, costs nothing and does more for Paper 1 than an extra hour of grammar drill.",
      ],
    },
    {
      heading: "Core, Extended and picking IGCSE subjects",
      paragraphs: [
        "Certain IGCSE subjects are examined at two tiers, Core and Extended. The Core tier cannot yield the top grades and the Extended tier can. A student with IB Mathematics AA or A Level sciences in mind should take the Extended tier.",
        "Each IGCSE course has a catalogue number: 0620 for Cambridge Chemistry, 4CH1 for Edexcel. Quote it in your first message so that the specification is known before the first class.",
        "Stay flexible: pick a science the child likes, a mathematics tier that challenges without overwhelming, and the home language. English is expected, with Tamil or Hindi as the usual addition.",
      ],
    },
  ],

  process: [
    { title: "Write to us", description: "Send the board, programme, subject and exam sitting by WhatsApp to +91 7439 368 115 and name Sivagiri as your town." },
    { title: "See who we propose", description: "A tutor who has taught that very syllabus and has evenings open is put forward." },
    { title: "Sit the opening class", description: "Class one is free and tackles whatever topic the student is finding hardest." },
    { title: "Agree the terms", description: "Subject, weekly timings and fee are set down in writing before any payment." },
    { title: "Keep checking", description: "Notes follow every class, and asking for another tutor or a new time is easy." },
  ],

  whyPoints: [
    { title: "No false promises on format", description: "Sivagiri lessons are online; nobody will claim a tutor can call at the house." },
    { title: "Tutors chosen for your papers", description: "Course, level and exam board drive the match, ahead of a general subject label." },
    { title: "Parents stay informed", description: "A summary after each class shows what was taught and what is next." },
    { title: "Fits a Ghats-foothill week", description: "Plans give way to storms, mill shifts, power cuts and festival days." },
    { title: "Guidance without ghost-writing", description: "Assessments, essays and coursework are always the student's own work." },
    { title: "A fresh start is free", description: "When the pairing is wrong we change the tutor without charge." },
  ],

  faqs: [
    { question: "Can a tutor come round to our house in Sivagiri?", answer: "No. IB Gram sends tutors to houses only in Gurugram and some parts of Delhi NCR. Here you get a live class by video, with your child and the tutor writing on one shared screen, and a short summary sent once the hour ends. Rain in the Ghats foothills cannot cancel it." },
    { question: "What should a Sivagiri family budget for tutoring?", answer: "We do not publish rates. They follow the subject, the level, the tutor's seniority and the weekly number of classes, and you receive the exact amount in writing before you decide. As the opening class is free, you hear the teaching first." },
    { question: "Is there an international school in Tenkasi district?", answer: "We found none we could confirm. Madurai, some ninety-five kilometres off, has the closest verified campuses and Thiruvananthapuram has another, around 150 kilometres away. Those distances make daily travel unrealistic, so local students often follow online schools or study privately. Always ask a school itself." },
    { question: "Is private entry for IGCSE realistic from here?", answer: "Frequently. It depends on finding an approved Cambridge or Edexcel centre willing to enter the candidate, sorting out the practical side of the sciences, and meeting a fixed deadline. Madurai may have the nearest centre. Our role is the teaching, not the examination." },
    { question: "What time of day suits students in Sivagiri?", answer: "Evenings, once the school buses are back and mill shifts have turned over, plus Sunday mornings for long papers. Summer afternoons are best skipped. Pongal, Deepavali and the north-east monsoon each rearrange the week, so we plan around them." },
    { question: "Will a tutor write any of the internal assessment or Extended Essay?", answer: "Never any of it. A tutor may go through the marking criteria, outline what a strong investigation contains and flag a weak argument, but anything beyond that breaks the IB's rules and puts the diploma at risk. Your child must write the words and produce the data." },
    { question: "How much internet is needed for a lesson?", answer: "Only a modest amount. A few megabits per second handle video and a whiteboard over ordinary broadband or a mobile hotspot. When monsoon storms may knock out power, charge the laptop in advance and hold a spare SIM from another network." },
    { question: "What does the free class involve?", answer: "A real lesson in a topic your child finds tricky, followed by a written note. There is no commitment afterwards. If student and tutor do not click, we introduce another tutor before talking about fees." },
    { question: "Do you coach primary and middle-years pupils too?", answer: "We do. Primary pupils get reading and number work, MYP pupils get help with the criteria, and Diploma students get subject depth. One tutor who suits can often stay with a child through every stage." },
    { question: "Which is better for my child, Mathematics AA or AI?", answer: "It depends on the degree. A calculus-led course such as engineering points to Analysis and Approaches; a statistics-led course such as economics or psychology points to Applications and Interpretation. Both are available at Standard and Higher Level, and a taster lesson in each makes the choice clearer." },
    { question: "Can an IB student still apply through NEET or TNEA?", answer: "Possibly, but the rules decide. Eligibility rests on the subjects taken and on conditions the testing agency or the state issues each year, including how the IB or IGCSE with A Level is treated. The official bulletin is the authority. We supply the teaching in the science and mathematics subjects." },
    { question: "Do you teach both Cambridge and Pearson Edexcel?", answer: "Yes. Courses are identified by code, for instance 0625 for Cambridge Physics and 4PH1 for Edexcel Physics. Send the code from your child's subject list and we will pair you with someone who has taught that specification." },
    { question: "When should we start preparing for the November sitting?", answer: "By early August if possible. The north-east monsoon, Navaratri and Deepavali squeeze the weeks before November, so we lighten those weeks and bring the hardest papers forward into September." },
    { question: "Can cousins in Rajapalayam or Tenkasi join similar lessons?", answer: "Yes, provided they have a laptop and a stable link. Families in Rajapalayam, Srivilliputhur, Tenkasi or over the Kerala border receive the same private live class, scheduled around their own school day." },
    { question: "What is the first step?", answer: "Write to +91 7439 368 115 on WhatsApp or to support@ibgram.com with the class, the subject that worries your child, the school or online school, and the word Sivagiri. Expect a tutor suggestion and a trial time within about a day." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Tenkasi", href: "/tenkasi/", description: "The district headquarters about fifty kilometres away." },
    { label: "IB and IGCSE tutors in Rajapalayam", href: "/rajapalayam/", description: "The larger town only a short distance from Sivagiri." },
    { label: "IB and IGCSE tutors in Madurai", href: "/madurai/", description: "The nearest city with confirmed international campuses." },
    { label: "IB and IGCSE tutors in Tirunelveli", href: "/tirunelveli/", description: "The southern city with Manonmaniam Sundaranar University." },
    { label: "IB and IGCSE tutors in Thiruvananthapuram", href: "/thiruvananthapuram/", description: "The Kerala capital across the Ghats." },
    { label: "IB tutors across India", href: "/india/", description: "The all-India page for our live IB and IGCSE lessons." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Help with IGCSE arranged by subject and board." },
    { label: "IB Diploma coaching", href: "/programmes/dp/", description: "Diploma support subject by subject, with TOK." },
    { label: "Meet the tutors", href: "/tutors/", description: "Our tutors, listed by subject and programme." },
    { label: "Contact us", href: "/contact-us/", description: "Send a question or arrange your free first lesson." },
  ],

  closingHeading: "Book a free lesson from Sivagiri",
  closingBody:
    "Send the class, subject and sitting and we will find a tutor and book a first class without charge. Our contact details are WhatsApp +91 7439 368 115 and support@ibgram.com.",
};
