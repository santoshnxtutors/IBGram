import type { CitySeoPage } from "../types";

/**
 * Shamsabad in Agra district, Uttar Pradesh, not the Shamsabad in Farrukhabad district. No IB or
 * Cambridge school was confirmed in the town, so stripSchools is empty; clusters use Agra and Noida
 * names already checked on the Agra, Mathura and Noida pages. Shared FAQ and section text is
 * filled from a variant pool, so the placeholders below are replaced before the gate runs.
 */
export const shamsabadcAgra: CitySeoPage = {
  slug: "shamsabadc-agra",
  countryName: "Shamsabad",
  countryNameLong: "Shamsabad, Agra district, Uttar Pradesh",
  demonym: "Shamsabad",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings after the Agra-bound buses thin out, plus Sunday mornings for full-length practice papers",
  lastUpdated: "2026-09-21",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  geo: { latitude: 27.0328, longitude: 78.1317 },
  wikipedia: "https://en.wikipedia.org/wiki/Shamsabad,_Agra",
  alternateNames: ["Shamsabad Agra", "Shamsabad UP", "Shamsabad Agra district", "Shamsabad Fatehabad"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Shamsabad (Agra) | Online Tuition",
  metaDescription:
    "Live one-to-one IB and IGCSE tuition for Shamsabad, Agra students, taught online from home by subject-matched tutors, with a free trial class to begin.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Shamsabad, Agra",
  heroEyebrow: "IB & IGCSE HOME TUITION FOR SHAMSABAD, AGRA DISTRICT",
  heroSubtitle:
    "Private tuition from home for IB and IGCSE students in Shamsabad, taught as live one-to-one video lessons. The town lies in the potato-and-wheat country south-east of Agra, near enough to the Taj city to feel its influence yet without an international school of its own. Families with a link to Agra's schools, Delhi or overseas can book a matched tutor and a free trial class by message.",
  primaryKeyword: "IB and IGCSE tutors in Shamsabad",
  imageAltText: "Shamsabad student in Agra district taking a live online IB Mathematics lesson at home",
  secondaryKeywords: [
    "IB tutor in Shamsabad",
    "IGCSE tutor in Shamsabad",
    "IB home tuition Shamsabad Agra",
    "IGCSE home tuition Shamsabad Agra",
    "IB private tuition Shamsabad",
    "IB Maths tutor Shamsabad",
    "IGCSE Maths tutor Shamsabad",
    "IB Physics tutor Shamsabad",
    "IB Chemistry tutor Shamsabad",
    "IB Biology tutor Shamsabad",
    "IB DP tutor Agra district",
    "IB MYP tutor Shamsabad",
    "IB PYP tutor Shamsabad",
    "IGCSE online tuition Shamsabad Agra",
    "IB tutor Agra",
    "IGCSE tutor Fatehabad Agra",
    "IB online classes Braj region",
    "online home tuition Shamsabad UP",
  ],

  heroTrustPoints: [
    "Lessons are live and private, with one tutor teaching one student",
    "Tutors experienced in IB DP, MYP and PYP and in both IGCSE boards",
    "Evening slots that work around Agra-bound buses, fog and power cuts",
    "A free trial class and a short written note after each lesson",
    "A different tutor at no cost if the first match is wrong",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before any commitment" },
    { value: "Online", label: "Home tuition, live by video" },
  ],

  intro: {
    heading: "Online IB and IGCSE tuition for Shamsabad, near Agra",
    paragraphs: [
      "Shamsabad is a small town in Agra district, set among the potato fields and wheat plots that spread out along the Yamuna plain from the Taj city. Its families farm, trade, drive, teach and work in Agra's hotels, leather workshops and government offices, and their children go to UP Board and CBSE schools, many of them travelling by bus or shared vehicle. Agra itself is close enough to dominate conversation and far enough to make a daily commute impractical.",
      "An international qualification is rarely on the table here, but it appears for specific reasons. A parent may work in tourism or hospitality and see the value of a syllabus recognised by overseas employers. A relative may have emigrated and be offering to help a child study abroad. An older sibling may already attend an international school in Noida or Gurugram. When any of that happens, the family discovers that the nearest tutor who has taught IB Paper 2 is not in Shamsabad.",
      "We supply that tutor online. A teacher in India works live with your child, one-to-one, on Indian Standard Time, using the actual syllabus and past papers, and the child stays at home. This page explains how it works from Shamsabad: the schools within reach, how boards differ, how fees are shaped, how Braj's seasons meet exam dates, where students go next and how subjects are taught. IB Gram is independent of the IB, Cambridge, Pearson and any school, and tutors do not write a student's assessed work.",
    ],
  },

  programmesIntro:
    "Four IB programmes and two IGCSE boards exist, and a Shamsabad family usually meets one of them through an older sibling, a posting or a plan to study abroad.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Inquiry-led primary learning that ends with a student Exhibition. Tutors work in short, friendly sessions on reading, number sense and explaining ideas aloud.",
      countryNote:
        "No PYP classroom exists in Shamsabad, so a child following it is usually preparing for a school in Agra or Noida. A weekly lesson builds comfort with the style.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked against published criteria, with a Personal Project in the final year. Tutors help students read a task and shape an answer to fit it.",
      countryNote:
        "Pupils moving from a UP Board classroom tend to be strong on recall and new to criterion-based writing. Online practice supplies that without disrupting the school day.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, Theory of Knowledge, the Extended Essay and CAS. Tutoring covers examined content, paper technique and how internal assessments are marked.",
      countryNote:
        "Diploma students who board in Agra or Noida come home to Shamsabad for breaks, which is when concentrated online lessons repair the gaps left in term.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pairing of DP courses with career-related study and a reflective project, built for applied routes.",
      countryNote:
        "CP is almost unknown in the district. On request we match tutors to the particular DP courses involved.",
    },
  ],

  subjectsIntro:
    "Tutors are chosen for the exact course and level, and for experience with students who learned science in Hindi and now meet English-medium international papers.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Algebra, differentiation, integration and proof, practised under timed paper conditions." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Data handling, distributions and real-world models, with technology skills for Paper 2." },
    { name: "Physics", levels: "SL / HL", description: "Forces, waves, circuits and modern physics, with data questions and practical reasoning." },
    { name: "Chemistry", levels: "SL / HL", description: "Quantitative chemistry, kinetics, equilibrium and reaction pathways in organic chemistry." },
    { name: "Biology", levels: "SL / HL", description: "Genetics, physiology and ecology, with training in command terms and structured explanation." },
    { name: "Economics", levels: "SL / HL", description: "Markets, trade, inflation and growth, with real-world examples to support evaluation." },
    { name: "Business Management", levels: "SL / HL", description: "Operations, marketing and finance tools applied to unseen organisations." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming logic, data structures and computational thinking for the written papers." },
    { name: "Psychology", levels: "SL / HL", description: "Biological, cognitive and sociocultural approaches, with essay technique." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Analysis of language and literature, with oral commentary practice." },
    { name: "Theory of Knowledge", levels: "Core", description: "Conversation practice for knowledge questions, with the exhibition and essay left to the student." },
    { name: "Hospitality-linked Business and Geography", levels: "SL / HL", description: "Case studies built on tourism, heritage and services, which suit students whose families work around Agra's visitor economy." },
    { name: "Hindi B", levels: "SL / HL", description: "Reading, writing and speaking practice for students who use Hindi or Braj at home." },
  ],

  igcseSubjectsIntro:
    "Cambridge IGCSE and Pearson Edexcel International GCSE share many subject names but not paper codes, so tutors are matched first by board and then by subject.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Core arithmetic, algebra and geometry, with Extended topics such as functions and vectors where required." },
    { name: "Physics", levels: "Core / Extended", description: "Physical principles, from forces to radioactivity, with practice on data and calculations." },
    { name: "Chemistry", levels: "Core / Extended", description: "Chemical bonding, stoichiometry and organic chemistry, with plenty of numeric practice." },
    { name: "Biology", levels: "Core / Extended", description: "Plant and animal biology, genetics and ecology, with exam-style data questions." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "Co-ordinated sciences taught as a single course for double-award candidates." },
    { name: "English as a Second Language", levels: "Core / Extended", description: "Language skills for study and work: reading, summarising and speaking." },
    { name: "Computer Science", levels: "Single tier", description: "Algorithms, pseudocode and the structure of computer systems." },
    { name: "Economics", levels: "Single tier", description: "Economic ideas, from scarcity to trade, with data-based questions." },
    { name: "Travel and Tourism-style Business Studies", levels: "Single tier", description: "Enterprise, finance and marketing with examples from hotels, guides and handicraft sellers." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Written and oral practice for the Hindi option." },
  ],

  regionsTitle: "Shamsabad and the villages along the Yamuna plain",
  regionsIntro:
    "Students come from the town and from farming settlements within the Fatehabad tehsil area, so school timing, power and connectivity differ from lane to lane.",
  regions: [
    { name: "Shamsabad town centre", note: "The bazaar and bus stop at the heart of the town, busiest in the morning and at school closing; lessons start once the evening rush thins." },
    { name: "Agra road colonies", note: "Newer houses along the road toward Agra, with easy bus links and families who often have jobs in the city." },
    { name: "Old town lanes", note: "Tightly packed older neighbourhoods with joint families, where a quiet study corner needs arranging in advance." },
    { name: "Fatehabad side", note: "The direction of the neighbouring tehsil town, home to colleges and traders, and a common reference point for school buses." },
    { name: "Yamuna khadar villages", note: "Settlements near the river whose potato and wheat calendar sets the family's year, and where monsoon floods can cut roads." },
    { name: "Etmadpur and Kiraoli direction", note: "Other Agra-district towns whose students also look for online tutors because specialist teachers are scarce." },
    { name: "Tourism and hotel families", note: "Households with members working in Agra's hotels, shops and guiding trade, whose shift patterns decide when a lesson is possible." },
    { name: "Leather and footwear workshop families", note: "Families linked to Agra's footwear industry, often with long working days and strong ambitions for the next generation." },
    { name: "Firozabad border side", note: "Settlements toward Firozabad, the glass-bangle city, with a business-minded mix of households." },
  ],

  schoolClusters: [
    {
      city: "Shamsabad and Agra district outskirts",
      note: "Our search of the IB World School directory and Cambridge and Edexcel centre lists found nothing in Shamsabad. Its schools teach the UP Board, CBSE or ICSE, so there is no local classroom for IB or IGCSE.",
      schools: [],
    },
    {
      city: "Nearby: Agra",
      note: "Agra has at least one school we could confirm with an IB offer. It lies a good bus ride from Shamsabad, so it suits boarding or a move into the city more than a daily trip.",
      schools: ["Sharda World School"],
    },
    {
      city: "Nearby: Noida and Delhi NCR",
      note: "Noida, reachable by expressway in a few hours, holds the nearest large group of confirmed IB and Cambridge schools. Some Agra-region families board a child there for the Diploma years.",
      schools: ["Pathways School Noida", "Genesis Global School", "Shiv Nadar School, Noida"],
    },
  ],
  schoolDisclaimer:
    "Schools are named only to mark where IB and Cambridge classrooms exist for Shamsabad households. IB Gram is an independent tutoring business with no link to any school, the IB, Cambridge or Pearson, and each school decides its own admissions.",

  modesIntro:
    "Tutors do not visit homes in Shamsabad, so each format below is online. All are live and private and can be moved around a hotel shift, a harvest week or a power cut.",
  modes: [
    {
      title: "Regular weekly class",
      description: "A fixed slot each week with a tutor who has taught your child's board, subject and level.",
      bullets: ["Shared whiteboard and annotated papers", "Brief written summary for parents", "Easy rescheduling"],
    },
    {
      title: "Holiday intensives",
      description: "Daily lessons during school breaks for boarders and for students who joined a syllabus late.",
      bullets: ["Gap check on the first day", "Past papers every session", "Final timed paper with review"],
    },
    {
      title: "Exam-month push",
      description: "Close practice in the weeks before mocks and the May or November sittings.",
      bullets: ["Papers marked line by line", "Command-term drills", "Spare slots for outages"],
    },
  ],

  tutorsIntro:
    "Our tutors teach from several Indian cities on Indian Standard Time. For Shamsabad, the dependable window is the evening after school, tuition and the Agra buses have settled.",

  sections: [
    {
      heading: "Can a Shamsabad student attend an IB or Cambridge school in Agra?",
      paragraphs: [
        "In theory yes, in practice rarely. Agra has at least one school we could confirm as offering the IB, and others have introduced Cambridge pathways, but Shamsabad itself has none. The ride into Agra is a long one by local bus, and most international schools expect admission at specific class levels, with entrance tests and fees that suit city families better than village ones.",
        "That leaves a choice among boarding, a move, or staying put. Some families rent a flat in Agra for the Diploma years. Others look to Noida, a few hours away by expressway, where a larger group of confirmed IB and Cambridge schools exists. And many keep the child in a local school and add an international syllabus through private study, which is where online tutoring helps.",
        "Who are the families? Often they are hotel and tourism professionals, doctors, teachers and officials with Agra connections, business families in leather and footwear, and households with relatives abroad. They are scattered across the town and surrounding villages, so there is no local class that fits them.",
        "If a school in Shamsabad is ever authorised for the IB or approved for Cambridge, tell us the subject list and sitting, and we will teach to that syllabus.",
      ],
    },
    {
      heading: "UP Board, CBSE, IGCSE and the IB: what changes for a student in Shamsabad?",
      paragraphs: [
        "Uttar Pradesh's board sets papers in February and March for Classes 10 and 12, with answers expected in long form and marks given for careful recall. CBSE follows the NCERT books and a similar calendar. In Agra, both boards support a large tuition economy aimed at JEE, NEET and CUET-UG.",
        "IGCSE shifts the weight from recall to application. Papers come in tiers, objectives are public, and questions often put a familiar idea into an unfamiliar setting. The IB Diploma goes further, adding coursework assessments, a 4,000-word essay, a knowledge course and service, and rewarding reasoning and clarity as much as the final answer.",
        "The table lines up the systems for a Shamsabad household.",
      ],
      table: {
        caption: "School systems seen from Shamsabad",
        columns: ["System", "Main assessment", "Language", "Usual next step", "Specialist help nearby"],
        rows: [
          ["UP Board", "State papers in February and March", "Hindi or English", "State colleges, CUET-UG, JEE, NEET", "Plenty of tutors in Agra"],
          ["CBSE", "NCERT-based national papers", "English or Hindi", "CUET-UG, JEE, NEET", "Strong coaching in Agra"],
          ["ICSE and ISC", "Wider syllabus, heavy on English", "English", "Indian universities, CUET-UG", "A few tutors in Agra"],
          ["Cambridge or Edexcel IGCSE", "Tiered papers in three windows a year", "English", "IB, A Level or Indian Class 11", "Very few in the region"],
          ["IB Diploma", "Exams, essay, coursework, service", "English", "Indian and overseas universities", "None in Shamsabad"],
        ],
      },
    },
    {
      heading: "What shapes the cost of IB or IGCSE tuition in Shamsabad?",
      paragraphs: [
        "A fixed tariff would be misleading, so we quote case by case. The proposal, sent in writing ahead of the free trial, names the rate, the lessons per week and the intended length, leaving no room for misunderstanding.", "The main drivers are the difficulty of the course, the supply of tutors who can teach it and the number of hours the student needs. A Higher Level Diploma science tutor is a specialist and is priced accordingly; a Core IGCSE English tutor is priced differently.", "We suggest starting with a modest block and extending it after you have seen the results. Never feel obliged to book a long series before the trial.",
        "For Shamsabad families the other costs are worth counting too: a flat in Agra, daily bus fares, a boarding place in Noida and the time a parent spends travelling. When only two or three subjects need strengthening, a targeted online plan at home is often the lighter choice.",
      ],
      bullets: [
        "Course level and tier",
        "Number of qualified tutors in the subject",
        "Lessons per week",
        "Short push or year-long support",
      ],
    },
    {
      heading: "Online tutor, Agra coaching, Noida boarding or self-study: which fits Shamsabad?",
      paragraphs: [
        "Four routes are open, and many families combine two. The right mix depends on what is missing: content, exam technique or steady practice.",
        "Noida boarding provides a full international school at the price of separation. Coaching in Agra is strong for JEE, NEET and board syllabuses and weak on international papers. Past-paper self-study rewards the disciplined. A live online tutor brings board-level expertise to the family table without a move.",
      ],
      table: {
        caption: "Four ways to get IB or IGCSE help from Shamsabad",
        columns: ["Route", "Syllabus depth", "Family impact", "Timing", "Suits"],
        rows: [
          ["Live online tutor", "High, matched to board and subject", "Minimal", "Evenings, Sundays, holidays", "Most IB and IGCSE learners"],
          ["Boarding in Noida", "Whole-school teaching", "Child leaves home", "Fixed by school", "Families ready to relocate"],
          ["Agra coaching", "Strong on UP Board and entrance exams", "Daily bus travel", "Fixed batches", "Shared basics in maths and science"],
          ["Self-study with past papers", "Depends on the learner", "None", "Total freedom", "Strongly self-directed students"],
        ],
      },
    },
    {
      heading: "How do fog, harvest, Holi and the Taj season shape the exam year around Agra?",
      paragraphs: [
        "Winter fog from December to January slows buses and shortens school days across the Agra region, while April to June brings fierce heat and power cuts at peak load. The monsoon can flood low lanes near the Yamuna, and potato digging in February and March keeps farming households busy. Evenings are the steadiest slot for a live lesson in every season.",
        "Three examining bodies matter here, and each has its own calendar. The IB examines in May and November and publishes results in July and January. Cambridge and Pearson Edexcel each offer IGCSE papers in three windows across the year. The student's centre picks the window, and our lesson plan works backwards from it.",
        "Local life adds its own pauses. Holi in March is lively across the Braj country, the Taj Mahotsav arrives in February, the Kailash fair draws crowds toward Sikandra in the monsoon months, and Dussehra and Diwali land close to the November sittings.",
      ],
      table: {
        caption: "Calendar pressure points around Shamsabad",
        columns: ["Months", "Local conditions", "Effect on study", "Lesson response"],
        rows: [
          ["Dec to Jan", "Dense fog, cold, Makar Sankranti", "Late buses, short days", "Late-afternoon slots, mock papers at home"],
          ["Feb to Mar", "Potato harvest, Taj Mahotsav, Holi, IGCSE series", "Busy households, festival gaps", "Timed practice with rest days"],
          ["Apr to Jun", "Wheat harvest, heat, IB May session", "Power cuts, tiredness", "Evening lessons with buffer time"],
          ["Jul to Sep", "Monsoon, Yamuna floods, IB results, Kailash fair", "Cut roads, new term", "Back-up connection, flexible times"],
          ["Oct to Nov", "Dussehra, Diwali, November sittings", "Short weeks near exams", "Compressed revision with reschedule room"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Shamsabad go next?",
      paragraphs: ["The standard Indian route after the Diploma runs through the Association of Indian Universities equivalence certificate and then CUET-UG for central universities, or direct application to private universities that accept Diploma scores. IGCSE leads to Class 11 in an Indian board, to A Level or to the IB.","The choice of subjects governs professional courses. For engineering and medicine, Mathematics, Physics and Chemistry or Biology are generally needed, and JEE, NEET and counselling rules should be checked each year. International destinations, led by the UK, Canada, Australia and the US, are a further route.","Staying close to home is possible too. Agra offers Dr. B. R. Ambedkar University and the Dayalbagh Educational Institute, and Delhi NCR is within reach by expressway. Hospitality and tourism management is a natural interest for students from Agra-linked families, and both the Diploma and IGCSE business subjects provide a base for that route."],
    },
    {
      heading: "How is IB Mathematics and science taught live to a Shamsabad student?",
      paragraphs: [
        "Choose Analysis and Approaches for the algebra-and-calculus route to engineering or science, and Applications and Interpretation for the data-and-modelling route to business, social science or design. That is the short answer, and a conversation with the tutor can refine it once the student's strengths are clearer.", "The lesson format is practical. The tutor revisits the previous topic, solves a new example on the shared board while explaining each choice, then watches the student attempt a similar question. Past-paper work is marked line by line, with a short note on how a mark scheme would treat each step.", "For Physics, Chemistry and Biology the same method applies, supplemented by habit-building: correct units, balanced equations, exact terminology. Internal assessments are conducted and written by the student; tutors teach the criteria and the planning approach and nothing more.",
        "Shamsabad students from UP Board schools are usually quick at calculation and sometimes unused to explaining a step in words. The tutor builds that habit early, because the Diploma awards communication marks alongside method and accuracy.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: how should a Shamsabad family choose IGCSE tiers?",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended papers in most subjects, while Pearson Edexcel offers Foundation and Higher. The lower tier caps the best grade available, so a student who wants to continue to sciences, engineering or IB Higher Level should normally be entered for the upper tier.", "To choose, look at recent test marks, ask the subject teacher and let the tutor set a diagnostic paper. A student who is careful but slow may thrive at the lower tier, and a quick but inconsistent student may reach the higher tier with drilling.", "A sensible IGCSE set combines languages, mathematics, sciences and one humanities or business subject. Because boards differ in practicals, syllabus codes and grade boundaries, the board is confirmed before a tutor is chosen.",
        "For students from Hindi-medium backgrounds, long English answers and scientific vocabulary are the most common hurdles, and both respond to steady weekly practice across two or three terms.",
      ],
    },
    {
      heading: "What can a family working in Agra's hospitality or leather trade expect from an international syllabus?",
      paragraphs: [
        "Agra's economy runs on visitors, handicrafts and footwear, and many Shamsabad households are tied to it. A child from such a family often grows up multilingual in practice, switching between Hindi, a little English and the Braj of home, and meeting foreign visitors early. That is a quiet advantage in IB language and humanities courses, where oral confidence counts.",
        "Parents in these trades also tend to value flexibility. A hotel shift ends late, a festival season brings long days, and a lesson plan must bend around both. We schedule the weekly slot with the parent's rota in mind and move it when the Taj season peaks, instead of asking the family to fit the tutor.",
        "Business Management and Economics, with examples taken from tourism, exports and small enterprises, give these students case material they already understand. A tutor can use the glass, leather and handicraft trades of the region as live examples in extended responses, which makes revision more concrete than a textbook case from another country.",
      ],
    },
  ],

  process: [{ title: "Message the basics", description: "What is being studied, at which level and for which sitting." }, { title: "Review a shortlist of one", description: "We send a tutor profile that matches the course closely." }, { title: "Try the first class free", description: "See how your child responds to the tutor and the format." }, { title: "Agree terms in writing", description: "Rate and schedule are on paper before any lessons are booked." }, { title: "Follow the plan", description: "Weekly lessons, a short report afterwards and a no-cost tutor change." }],

  whyPoints: [{ title: "Syllabus-level knowledge", description: "Tutors are selected for the board and level, not just the subject." }, { title: "Realistic scheduling", description: "We plan around exams, power cuts and festivals." }, { title: "Honest local picture", description: "We name what we could verify nearby and what we could not." }, { title: "Clear notes", description: "After every lesson, a short summary for parents." }, { title: "Student-owned work", description: "Assessments and essays are never written by tutors." }, { title: "Risk-free trial", description: "Free first lesson, written quote, free tutor change." }],

  faqs: [
    { question: "Is there an IB or IGCSE school in Shamsabad?", answer: "None showed up in the IB World School directory or in the Cambridge and Edexcel centre lists for Shamsabad. Its schools teach the UP Board, CBSE or ICSE. Agra has at least one confirmed IB school, and Noida has more, but for most families the practical route is a private online tutor at home." },
    { question: "Will a tutor visit our house in Shamsabad?", answer: "The answer is no for Shamsabad. Visiting a student's house is something we do only in Gurugram and parts of Delhi NCR. Shamsabad students learn through live video lessons from home, which means one tutor, one learner, a shared digital whiteboard and no commuting at all." },
    { question: "How do I find an IB Mathematics or IGCSE Physics tutor in Shamsabad?", answer: "Just tell us the course and the date of the exam. We find a tutor who has taught it, give you a quick introduction and arrange a lesson without charge. Choosing differently afterwards is fine; we will bring in another tutor." },
    { question: "What does IB tuition cost for a Shamsabad student?", answer: "The rate depends on the programme, the level, how scarce the subject is among tutors and how many lessons a week you want. We do not publish a price list. A written quote reaches you before the trial is booked, so you can compare it calmly." },
    { question: "Can a UP Board student in Shamsabad move to IGCSE?", answer: "Yes, if there is a runway. The UP Board and IGCSE overlap in maths and science content, but IGCSE asks for application and explanation more often. We begin with the way papers are structured, then repair topic gaps. Aim for Class 8 or 9 for IGCSE, and Class 10 or 11 for the Diploma." },
    { question: "Is online tuition as effective as coaching or school in Agra?", answer: "For learning the content and exam technique, yes. For the social side of a school, no. Online lessons give the specialist, the one-to-one attention and the flexibility; classes in Agra give company and routine, at the cost of distance." },
    { question: "Will tutors write my child's Extended Essay or internal assessment?", answer: "That would be ghost-writing, and we refuse it. Our tutors explain how an assessment is marked, ask questions that sharpen the student's thinking and comment on drafts the student has made. The writing itself has to be the student's." },
    { question: "How does the free trial lesson work?", answer: "Expect a full live class, taught by the tutor we put forward, on a topic from your child's own syllabus. No charge, no pressure. After it, a short written note arrives, and a rate and plan follow only if you want them." },
    { question: "Which exam sessions can you prepare my child for?", answer: "The entry date drives everything. IB students are examined in May or November, with results in July or January; IGCSE students sit in the series their school or centre has booked. We take that date and plan the lessons in reverse from it." },
    { question: "Do you teach Cambridge as well as Pearson Edexcel IGCSE?", answer: "Both Cambridge and Pearson Edexcel are covered. Because the details differ, we match on exact specification. A message with the board, tier and paper codes lets us confirm that the tutor has taught the same course." },
    { question: "Will an IB Diploma be accepted by Indian universities?", answer: "Largely yes. With the equivalence certificate from the Association of Indian Universities, a Diploma graduate can apply across India; CUET-UG serves central universities. Subject rules for JEE, NEET and state seats differ, so check them early." },
    { question: "Can students from Fatehabad, Etmadpur or Agra city join?", answer: "Yes. Because the tutoring is remote, it reaches the surrounding area as easily as Shamsabad. Share the student's class, board and subject, and we will arrange the trial and a regular weekly time." },
    { question: "What happens when fog or a power cut interrupts a lesson?", answer: "The lost time is rebooked, not charged. From December to January, fog tends to hit travel more than the internet, but outages are common in summer, so we suggest a phone hotspot and a charged power bank beside the laptop. A class that ends early is repeated within the same week where the tutor's diary allows." },
    { question: "At what times are lessons held for Shamsabad students?", answer: "Most families choose weekday evenings and Sunday mornings, in Indian Standard Time. Parents with hotel or shop rotas often prefer later slots. Around Holi, Dussehra, Diwali and the potato-harvest weeks we pause or shift sessions and place a catch-up class afterwards." },
    { question: "My family works in tourism. Does an international syllabus help?", answer: "It can. The Diploma and IGCSE give students recognised English-medium qualifications that overseas universities and hospitality schools understand, and business and language courses can draw on tourism examples. Whether it suits your child depends on their strengths, and we discuss options honestly in the trial lesson." },
    { question: "How do we get started?", answer: "Email support@ibgram.com or send a WhatsApp message to +91 7439 368 115 with the class, board, subject and sitting. A tutor suggestion and a possible trial time normally come back within a day or two." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "See where else the online model is available." },
    { label: "IB tutoring overview", href: "/ib-tutors/", description: "How our IB teaching is organised by programme." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects with board-matched tutors." },
    { label: "Middle Years Programme help", href: "/programmes/myp/", description: "Criterion-based assessment support for Classes 6 to 10." },
    { label: "Diploma Programme help", href: "/programmes/dp/", description: "Subject tutoring for the last two school years." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI at Standard and Higher Level." },
    { label: "Tutor profiles", href: "/tutors/", description: "The people who teach IB and IGCSE." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book the trial." },
    { label: "IB and IGCSE tutors in Agra", href: "/agra/", description: "Our page for the Taj city, the nearest large centre." },
    { label: "IB and IGCSE tutors in Firozabad", href: "/firozabad/", description: "The glass-bangle city to the east, served online." },
    { label: "IB and IGCSE tutors in Fatehpur Sikri", href: "/fatehpur-sikri/", description: "Another Agra-district town served online." },
  ],

  closingHeading: "Start with a free class from home in Shamsabad",
  closingBody:
    "Shamsabad is close to Agra but far from any IB or Cambridge classroom, and a live tutor at home closes that gap. Tell us the board, subject and sitting, and the first class costs nothing. Email support@ibgram.com or WhatsApp +91 7439 368 115.",
};
