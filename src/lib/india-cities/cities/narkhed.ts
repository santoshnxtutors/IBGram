import type { CitySeoPage } from "../types";

/**
 * Narkhed, a municipal council and taluka headquarters in Nagpur district, Maharashtra, roughly 87 km
 * north-west of Nagpur in the orange belt. No IB or Cambridge/Edexcel school was confirmed in Narkhed,
 * so stripSchools is empty; clusters point honestly to Nagpur. Online-only delivery; no home visits.
 */
export const narkhed: CitySeoPage = {
  slug: "narkhed",
  countryName: "Narkhed",
  countryNameLong: "Narkhed, Nagpur district, Maharashtra",
  demonym: "Narkhed",
  flagCode: "in",
  countryCode: "IN",
  state: "Maharashtra",
  stateCode: "IN-MH",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings and weekend mornings, kept clear of the orange harvest rush, Pola and the Ganeshotsav week",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.4383, longitude: 78.5683 },
  wikipedia: "https://en.wikipedia.org/wiki/Narkhed",
  alternateNames: ["Narkhed taluka", "Narkhed Nagpur"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Narkhed | Online Private Tuition",
  metaDescription:
    "Narkhed families can get live online IB and IGCSE tutors: DP, MYP, PYP, Cambridge and Edexcel IGCSE, one-to-one lessons at home and a free trial.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Narkhed",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR NARKHED, NAGPUR DISTRICT",
  heroSubtitle:
    "Narkhed sits about 87 km north-west of Nagpur in the orange belt, and the nearest school teaching the IB or an IGCSE course that we could confirm is in Nagpur itself. For students who live in Narkhed, that gap is exactly what private tuition at home, delivered online, is meant to close: a specialist tutor, live and one to one, who knows the syllabus your child is actually studying, with a free trial lesson before anything else.",
  primaryKeyword: "IB and IGCSE tutors in Narkhed",
  imageAltText: "Tutor and student on a live online IB Biology lesson, the student working at a desk at home in Narkhed near Nagpur",
  secondaryKeywords: [
    "IB tutor Narkhed",
    "IGCSE tutor Narkhed",
    "IB home tuition Narkhed",
    "IGCSE home tuition Narkhed",
    "IB private tuition Narkhed",
    "IB Maths tutor Narkhed",
    "IGCSE Maths tutor Narkhed",
    "IB Physics tutor Narkhed",
    "IB Chemistry tutor Narkhed",
    "IB Biology tutor Narkhed",
    "IB DP tutor Narkhed",
    "IB MYP tutor Narkhed",
    "IB PYP tutor Narkhed",
    "IGCSE online tuition Narkhed",
    "online IB tutor Nagpur district",
    "IB tutor Nagpur Narkhed taluka",
    "Cambridge IGCSE tutor Vidarbha",
    "Edexcel IGCSE tutor Narkhed",
    "IB Economics tutor Narkhed",
  ],

  heroTrustPoints: [
    "Tutors who teach the exact IB subject and level or IGCSE board code",
    "Live one-to-one lessons that run on home broadband or a steady 4G signal",
    "Free trial lesson and rates in writing before you decide",
    "Short written notes after each lesson, easy for busy orchard and business families to follow",
  ],
  heroStats: [
    { value: "IB PYP to DP", label: "Programmes supported" },
    { value: "Cambridge or Edexcel", label: "IGCSE boards covered" },
    { value: "Online lessons", label: "Tutors do not visit homes in Narkhed" },
    { value: "Free trial", label: "Before any payment" },
  ],

  intro: {
    heading: "International curricula for a taluka town in the orange belt",
    paragraphs: [
      "Narkhed is known across Vidarbha for oranges. The town sits on the Wardha river valley in the north-west of Nagpur district, the Jam and other streams feed its farms, and the market gets busy each season when the fruit is packed for Nagpur and beyond. Its schools follow the Maharashtra State Board or CBSE. Nothing about the place suggests the IB, and yet it keeps turning up in our enquiries.",
      "The reason is simple. Narkhed families are not cut off. Many have members in Nagpur, Pune, Mumbai or the Gulf, and some run businesses whose children are expected to study abroad. A doctor's son may be preparing for a Nagpur international school. A returning family may need a child to catch up on an IGCSE course begun elsewhere. For them, a distance of 87 km is a real obstacle, because a school may be a long daily trip and a tutor may not be available locally at all.",
      "Our answer is online tuition. IB Gram tutors teach live from India, on Indian Standard Time, one to one, with a shared whiteboard and a short written note after every lesson. The first lesson is free, rates come in writing, and the tutor can be changed if the match is poor.",
      "We use the phrase home tuition because it is what people search for. It means lessons received at home. No tutor visits Narkhed; the only in-person home tuition we run is in Gurugram and parts of Delhi NCR. Your child studies in Narkhed, and the tutor teaches through the screen.",
    ],
    bullets: [
      "Support for IB PYP, MYP and Diploma subjects and for Cambridge and Pearson Edexcel IGCSE",
      "Planning around the orange season, Pola, Ganeshotsav, Dasara and Diwali",
      "Plain advice on whether an international syllabus fits your child's next step",
      "Coaching only: tutors do not write Internal Assessments, Extended Essays or coursework",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Learning built around big ideas and questions, assessed through projects and discussion. Tutoring supports reading, English speech and everyday mathematics.",
      countryNote:
        "A Narkhed child typically grows up speaking Marathi or Hindi at home, so conversation practice in English matters before a PYP admission interview.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups, assessed against criteria, ending with a personal project. Our tutors help students understand what the criteria really ask for.",
      countryNote:
        "Moving from a State Board classroom to an MYP school in Nagpur means learning to explain reasoning, not just to reproduce a textbook answer.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects plus Theory of Knowledge, an Extended Essay and CAS. A demanding two-year course recognised by universities worldwide.",
      countryNote:
        "Narkhed DP students are mostly in Nagpur or boarding elsewhere; they take our lessons in the evening or during visits home.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "An IB route that pairs academic courses with practical study and a reflective project. Very few Indian schools offer it.",
      countryNote:
        "We support it only if a school your child is attending provides it.",
    },
  ],
  programmesIntro:
    "The IB offers four programmes, but Narkhed families seldom choose one in the abstract. They meet whichever one the school in Nagpur or beyond offers, so we prepare for that.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Functions, calculus, vectors and reasoning, for students aiming at engineering and pure sciences." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Probability, statistics and modelling, suited to commerce, social science and design pathways." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, waves, electricity and modern physics, assessed with data and design questions." },
    { name: "Chemistry", levels: "SL and HL", description: "Stoichiometry, energetics, kinetics, equilibrium and organic reactions with practical analysis." },
    { name: "Biology", levels: "SL and HL", description: "Cells, genetics, ecology and physiology, a natural interest for agri-families." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Ecosystems, land use and sustainability, with local examples such as orchards and irrigation." },
    { name: "Economics", levels: "SL and HL", description: "Markets, macroeconomics and development, using Indian agricultural and trade data." },
    { name: "Business Management", levels: "SL and HL", description: "Operations, finance and marketing through case studies, popular among trading families." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming and computational thinking, tested through structured problems." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Analysing texts and writing structured essays for students from vernacular schooling." },
    { name: "Marathi A or Hindi A", levels: "SL and HL", description: "Language and literature in the home language, a comfortable strength for local students." },
    { name: "Theory of Knowledge", levels: "Core", description: "Argument structure and discussion; the exhibition and essay are always the student's own." },
  ],
  subjectsIntro:
    "These are the IB subjects we are asked for most. Tell us if yours is missing: a specialist can usually be found, and the free trial shows if the match works.",

  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core and Extended", description: "Algebra, trigonometry, mensuration, statistics and, at Extended, further functions and calculus ideas." },
    { name: "Physics", levels: "Core and Extended", description: "Forces, energy, electricity, waves and nuclear physics with practical skills." },
    { name: "Chemistry", levels: "Core and Extended", description: "Atoms, bonding, reactions and organic chemistry with analysis papers." },
    { name: "Biology", levels: "Core and Extended", description: "Living organisms, genetics and ecosystems with data-handling questions." },
    { name: "Combined Science", levels: "Core and Extended", description: "A joined route through physics, chemistry and biology." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Reading, writing and listening or speaking tasks for fluency building." },
    { name: "Hindi as a Second Language", levels: "Core and Extended", description: "Comprehension and composition tasks for Hindi speakers." },
    { name: "Marathi as a Second Language", levels: "Core and Extended", description: "Offered where the board and centre provide it; confirm availability with the exam centre first." },
    { name: "Business Studies and Economics", levels: "Core and Extended", description: "Data response and short-essay papers on enterprise and markets." },
  ],
  igcseSubjectsIntro:
    "Few Narkhed students take IGCSE in a full-time school here. Most are private candidates sitting papers through a centre in Nagpur, or students at boarding schools who need extra help at home.",

  regionsTitle: "Narkhed and the places families travel to",
  regionsIntro:
    "Narkhed is a compact town, so the more useful map shows the neighbourhood context in town and the larger places families lean on for schools, exam centres and trains.",
  regions: [
    { name: "Narkhed town centre and market", note: "Traders and orange merchants. Evenings are busy in season, so lessons are best placed after the market closes or on Sunday mornings." },
    { name: "Residential areas near the municipal council office", note: "Teachers, officials and doctors live here. They are the families most likely to know about Nagpur's international schools." },
    { name: "Orchard villages around the Wardha valley", note: "Farming households where children often study on mobile data. Audio-led lessons with light whiteboard use work well." },
    { name: "Roads towards Katol and Kalmeshwar", note: "Families here travel east to the towns on the Nagpur side and often keep relatives in each." },
    { name: "Warud and Morshi side in Amravati district", note: "Neighbouring orange towns to the west; some students cross the district line for schools or coaching." },
    { name: "Nagpur: Ramdaspeth and Dharampeth", note: "The city's central, school-dense neighbourhoods and the usual first choice for a family planning a move." },
    { name: "Nagpur: MIHAN and Wardha Road", note: "The business-park belt, where an international school is located; families relocating for work look here." },
    { name: "Nagpur: Hingna Road and Wanadongri", note: "The western growth belt with a school offering international curricula." },
  ],

  schoolClusters: [
    {
      city: "Narkhed taluka",
      note: "No IB or Cambridge/Edexcel school was confirmed in Narkhed. Options for these syllabuses are limited locally, so most students study online or move to Nagpur.",
      schools: [],
    },
    {
      city: "Nearby: Nagpur, MIHAN and Wardha Road",
      note: "About 87 km away; a real daily commute is unrealistic, so families usually relocate or board.",
      schools: ["D Y Patil International School, MIHAN"],
    },
    {
      city: "Nearby: Nagpur, central and west",
      note: "Established schools in the city's centre and its western corridor.",
      schools: ["Centre Point School International", "VIBGYOR World Academy", "International School of Scholars"],
    },
    {
      city: "Nearby: Pune and Mumbai",
      note: "Larger Maharashtra cities where families with business or relatives look for boarding or day places.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "IB Gram operates independently and has no link with the IB, Cambridge, Pearson or any school named above. Names are listed to show where these syllabuses can be studied in the region; please confirm admission and curriculum details with the school.",

  tutorsIntro:
    "Our tutors teach live online from India on IST. None of them visit Narkhed; each lesson is a video call matched to your child's syllabus.",
  modesIntro:
    "In Narkhed every lesson runs online. The three formats below differ in tempo and purpose, not in delivery.",
  modes: [
    {
      title: "Regular weekly lessons",
      description: "A standing slot with a single tutor, planned around school hours and the family's evening routine.",
      bullets: [
        "One teacher who knows your child's strengths",
        "Annotated past papers during every session",
        "Fits normal broadband or 4G",
        "Easy to shift during the orange season",
      ],
    },
    {
      title: "Concentrated exam preparation",
      description: "Lessons several times a week for a few weeks, built on timed papers, marking and revision of weak topics.",
      bullets: [
        "Papers marked to the current scheme",
        "A short list of priority topics after the first paper",
        "Book three weeks before mocks",
        "Avoids Ganeshotsav and Diwali weeks",
      ],
    },
    {
      title: "Transition support for a move to Nagpur",
      description: "Short, targeted help for a child about to enter an IB or IGCSE school in Nagpur or another city.",
      bullets: [
        "English academic writing",
        "Vocabulary reset for Maths and science",
        "Practice with criteria-based marking",
        "Parent summary after each session",
      ],
    },
  ],

  sections: [
    {
      heading: "Where do Narkhed students actually study the IB or IGCSE?",
      paragraphs: [
        "Nagpur is the honest answer. Narkhed is a taluka town with State Board and CBSE schools. For international syllabuses, the nearest confirmed schools are in Nagpur, about 87 km away along the Narkhed road. A daily commute at that distance is not practical, so students usually either relocate, board, or study online.",
        "Within Nagpur, the schools we could confirm are D Y Patil International School at MIHAN, Centre Point School International, VIBGYOR World Academy and the International School of Scholars. We list them for context, not as recommendations, and you should always check curriculum, grades offered and admission rules directly.",
        "Because of this geography, Narkhed families fall into several types. Some are moving to Nagpur for a few years and want a bridge. Some have a child already at a Nagpur school and live in Narkhed during holidays. Some are preparing a student to join a boarding school in Pune or the hills. And a few are simply investigating whether the international route is realistic.",
        "In each case, tutoring is a supplement. We do not replace a school, and we say so. Where the family is still deciding, we spend the free trial on questions, not sales.",
      ],
    },
    {
      heading: "Maharashtra State Board, CBSE, IGCSE or IB: which suits a Narkhed student?",
      paragraphs: [
        "The State Board course is content-rich and examined in Class 10 and Class 12 board papers, which then feed into MHT-CET and other entrance exams. CBSE is similar in structure but follows NCERT. IGCSE gives a two-year course with externally set papers, and the IB Diploma gives six subjects plus a core.",
        "The difference matters most in how learning is judged. State Board answers reward completeness. IGCSE answers reward correct use of command words such as describe, explain and evaluate. IB answers reward argument and evidence.",
        "For a Narkhed student, the sensible question is which route leads where you want to go. If the plan is a Maharashtra medical or engineering college through MHT-CET or NEET, the State Board or CBSE keeps things simple. If it is a degree abroad, the IB Diploma or A Level is better understood. IGCSE sits in between as a foundation.",
        "The table lays out the practical differences.",
      ],
      table: {
        caption: "Board comparison for a Narkhed family",
        columns: ["Feature", "State Board / CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Typical age", "Classes 9-12", "Ages 14-16", "Ages 16-19"],
          ["Examined by", "Maharashtra Board or CBSE", "Cambridge or Pearson Edexcel", "International Baccalaureate"],
          ["Style of questions", "Recall and complete answers", "Structured, command-word driven", "Essay, data and inquiry based"],
          ["Entrance route in Maharashtra", "MHT-CET, NEET, JEE directly", "Needs equivalence and eligibility checks", "AIU equivalence; check MHT-CET eligibility"],
          ["Available near Narkhed", "Yes", "Private candidate through a centre", "Not confirmed locally; Nagpur or boarding"],
          ["Overseas recognition", "Limited by country", "Well understood", "Widely recognised"],
        ],
      },
    },
    {
      heading: "What do IB and IGCSE lessons cost for Narkhed families?",
      paragraphs: [
        "There is no price list on this page. Rates are given in writing after the free trial, once we know the subject, level and frequency. A list price would mislead you, since a Class 8 English helper and an IB Physics HL tutor are not equivalent.",
        "The rate rises with the level of the course, the amount of preparation per lesson, and the tutor's experience with that exact syllabus. Exam-year lessons usually cost more than foundation work. Two lessons a week cost more than one but give faster progress.",
        "What you do not pay for is travel. An online tutor does not drive from Nagpur or charge for time on the road, and you do not pay institute rent. The cost is the teaching and its preparation.",
        "If you want to limit spending, a short block of four to six lessons before mocks, or one lesson a fortnight for revision, is a sensible start. We will say honestly if fewer lessons would be enough.",
      ],
      bullets: [
        "Written quote after the free trial",
        "Higher Level and exam-year support usually costs more",
        "Short blocks suit tighter budgets",
        "Lesson notes, marking and parent updates are included",
      ],
    },
    {
      heading: "Is an online tutor better than a Nagpur coaching class or self-study?",
      paragraphs: [
        "A Nagpur coaching class is excellent for MHT-CET, NEET or JEE, and a student at a Nagpur international school may attend one. But commuting 87 km from Narkhed is not realistic, and those batches do not teach IB criteria or Cambridge command words.",
        "A neighbourhood tutor is convenient, though finding one who knows these syllabuses in a taluka town is unlikely. Self-study with past papers is workable for a disciplined student, but it provides no feedback on why marks were lost.",
        "Online one-to-one tuition keeps the benefit of a specialist without the commute. It needs a steady connection and a quiet corner, and it works best when the student prepares questions beforehand.",
        "The table summarises the trade-offs.",
      ],
      table: {
        caption: "Study options from Narkhed",
        columns: ["Option", "What it offers", "Limit", "Best use"],
        rows: [
          ["Online with IB Gram", "A specialist in your exact course, flexible slots and written notes", "Needs internet and discipline", "IB or IGCSE subjects not taught nearby"],
          ["Nagpur coaching centre", "Peer group and exam routine", "Long commute; syllabus mismatch", "MHT-CET, NEET, JEE preparation"],
          ["Local private tutor", "Easy logistics", "Unlikely to know IB or IGCSE", "Early primary help"],
          ["Self-study", "Low cost", "No marking feedback", "Supplement to tutored lessons"],
        ],
      },
    },
    {
      heading: "The Narkhed study year: oranges, Pola and exam sessions",
      paragraphs: [
        "International exams run on a fixed calendar. IB Diploma sessions are in May and November. IGCSE has May-June and October-November series, plus a January series for some boards. Narkhed students sitting papers in Nagpur should confirm the centre early because rooms and transport tighten at exam time.",
        "Local life affects study more than parents expect. Orange harvest and packing keep many households busy for weeks, and children often help in the family business. Pola in the monsoon, Ganeshotsav, Navratri and Dasara bring fairs and visitors; Diwali follows. Summers in Vidarbha are among the hottest in India, with afternoon temperatures too high for concentrated work.",
        "We therefore choose early mornings or evenings in summer, finish the heaviest syllabus work before the festival run, and keep Diwali week free. If a lesson clashes with a family event, we reschedule it.",
        "The table is a template. Your school or exam centre sets actual dates.",
      ],
      table: {
        caption: "A year for a Narkhed IB or IGCSE student",
        columns: ["Months", "Local context", "Study emphasis"],
        rows: [
          ["April to June", "Severe heat; May exams", "Early-morning or evening lessons; final revision"],
          ["July to August", "Monsoon, Pola; new term", "Syllabus coverage and early drafts of internal work"],
          ["September to November", "Ganeshotsav, Navratri, Dasara, Diwali; November exams", "Revision between festivals"],
          ["December to February", "Orange season peak; cooler weather; mocks", "Timed papers and feedback"],
          ["March", "Pre-exam consolidation", "Weak-topic repair"],
        ],
      },
    },
    {
      heading: "University pathways from Narkhed with an IB or IGCSE background",
      paragraphs: [
        "Indian universities admit IB Diploma holders on the basis of AIU equivalence, and central universities generally ask for CUET-UG scores. For Maharashtra's state-run engineering and medical seats, eligibility through MHT-CET and NEET depends on subject combination and domicile rules, so check the current brochure rather than relying on hearsay.",
        "Closer to Narkhed, Nagpur offers Rashtrasant Tukadoji Maharaj Nagpur University, VNIT, AIIMS Nagpur and IIM Nagpur, among others. IB and IGCSE students are eligible for several of these routes with the correct subjects and equivalence documents.",
        "For study abroad, the Diploma is understood by universities in the UK, Canada, Australia and the US. Predicted grades and a strong core matter. A student from a taluka town can compete, but should plan subjects and tests a year or more ahead.",
        "We do not act as admission agents or promise results. We teach and coach, and can help you map subjects to the entrance route that fits.",
      ],
      bullets: [
        "Obtain AIU equivalence before applying in India",
        "Check CUET-UG subject mapping for each university",
        "Keep Physics, Chemistry and Maths or Biology strong for engineering or medicine",
        "Start overseas applications at least a year before final exams",
      ],
    },
    {
      heading: "IB Maths, Physics, Chemistry and Biology: where students lose marks",
      paragraphs: [
        "Most marks lost in IB Maths are not lost for lack of calculation. Students skip a justification, forget units, or fail to state a conclusion. Analysis and Approaches expects clear logic. Applications and Interpretation expects commentary on a model. Both reward written reasoning.",
        "The Mathematics internal assessment is an independent exploration. Tutors can explain the criteria and discuss how to select a topic, but the work must be the student's own.",
        "Physics and Chemistry bring data analysis and experimental design. Students from State Board schools are strong on formula work, which helps, but questions often ask them to evaluate a method or explain an anomaly. Biology demands exact terms and the ability to interpret graphs. A Narkhed student with agricultural exposure often has good intuition for ecology and plant biology.",
        "A good routine is a lesson on a topic, past-paper questions during the week, and a review at the start of the next session. After six to eight weeks, timing and confidence improve noticeably.",
      ],
    },
    {
      heading: "Core or Extended: how should a Narkhed student choose IGCSE subjects?",
      paragraphs: [
        "Most IGCSE subjects have Core and Extended tiers. Core limits the highest grade available, Extended removes that limit. Students who plan to continue to A Level or IB Mathematics and sciences should usually aim for Extended, if their current level supports it.",
        "A balanced set includes English, Mathematics, at least two sciences and one language or social science. For Marathi-speaking students, English as a Second Language and Hindi or Marathi provide sensible scoring subjects, with the exact language availability confirmed by the exam centre.",
        "Private candidates need to confirm that the centre can host science practicals or alternative-to-practical papers, and that it is registered with the right board. The Cambridge and Pearson Edexcel papers differ in layout and mark scheme.",
        "We teach both and begin every course by checking the subject code so that past papers match the exam.",
      ],
    },
    {
      heading: "What does a typical month of lessons look like from Narkhed?",
      paragraphs: [
        "In the first week the tutor reads the school scheme of work or the exam specification, then sets a short diagnostic task. The aim is not to grade the child but to see which ideas are secure and which collapse under a slightly unfamiliar question. The parent receives a few lines on what was found.",
        "In weeks two and three the lessons settle into a rhythm: about forty-five minutes to an hour, a topic explained on the whiteboard, worked examples, then the student attempts questions while the tutor watches. Homework is deliberately small, often three or four exam questions, so that a child who also helps at the family shop or orchard can finish it on a weekday night.",
        "In the fourth week the tutor sets a timed section from a past paper, marks it against the official scheme and shares the marks with comments. That single exercise usually shows whether the earlier lessons have worked. The month closes with a brief review call or message in which the tutor, student and parent agree what to repeat and what to move on from.",
        "If the child is preparing for a Nagpur admission test or a bridge year, the same month is organised around the entrance subjects. If it is exam year, the proportion of timed papers rises. Either way, the cycle is visible to you in writing, which matters when you are following your child's progress from a distance.",
      ],
    },
  ],

  process: [
    { title: "Write to us", description: "Email support@ibgram.com or WhatsApp +91 7439 368 115 with class, board, subject and target exam." },
    { title: "Describe the situation", description: "We ask about the child's school plan and the topics that cost marks." },
    { title: "Take a free trial", description: "A tutor for that exact course teaches a live online trial." },
    { title: "Confirm in writing", description: "The rate and plan are sent in writing before any payment." },
    { title: "Review as you go", description: "Weekly lessons, a note after each, and a tutor change if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Right tutor for the course", description: "Matched to your child's IB subject and level or IGCSE board code." },
    { title: "Built for taluka-town connections", description: "Lessons tolerate modest bandwidth and we plan around power cuts." },
    { title: "Free trial", description: "See the teaching first with no obligation." },
    { title: "Rates in writing", description: "No hidden charges." },
    { title: "Notes for busy parents", description: "A short summary after every lesson." },
    { title: "Coaching, not ghost-writing", description: "Tutors never write assessed work." },
  ],

  faqs: [
    { question: "Are there IB tutors in Narkhed?", answer: "Online, yes. IB Gram tutors teach live over video from India, and your child studies at home in Narkhed. Tutors do not visit homes here; in-person tuition exists only in Gurugram and parts of Delhi NCR. A free trial lets you check the teaching style and your connection." },
    { question: "Is there an IB or IGCSE school in Narkhed?", answer: "We could not confirm one. Narkhed's schools follow the Maharashtra State Board or CBSE. The nearest confirmed international schools are in Nagpur, about 87 km away. We do not list any school we cannot verify." },
    { question: "Do you offer home tuition in Narkhed?", answer: "Only online. Home tuition at Narkhed means private lessons your child takes at home on a laptop. Nobody travels to your house. The advantage is access to specialist IB and IGCSE tutors who do not live near you." },
    { question: "How much does tuition cost for Narkhed students?", answer: "Rates are quoted in writing after the free trial. They depend on the subject, level, tutor experience and number of lessons. Higher Level and exam-year support typically costs more. A short block of lessons is a practical way to start on a tighter budget." },
    { question: "Can my child study IGCSE as a private candidate from Narkhed?", answer: "Usually yes, through an approved exam centre, probably in Nagpur. The centre registers your child and hosts the papers and science practicals. We cannot register you, but we advise on board, subjects and timing and teach the course online." },
    { question: "Which IB subjects do Narkhed students ask for most?", answer: "Mathematics, Physics, Chemistry, Biology, Economics and English. Environmental Systems and Societies is popular with agricultural families. Marathi or Hindi A can also be arranged for the language requirement." },
    { question: "Will a tutor write the Internal Assessment or Extended Essay?", answer: "No. Tutors coach but never write or edit assessed work. They can explain the criteria and discuss how to structure an argument, but the work must be the student's own." },
    { question: "How do we start?", answer: "Send class, board, subject and exam session on WhatsApp or email. We suggest a matched tutor and a trial slot on IST, usually within a few days. The trial is free and ends with a short note." },
    { question: "Is IB or IGCSE accepted for admission in Maharashtra?", answer: "Generally yes, with AIU equivalence and, for some courses, CUET-UG or state entrance exams. Eligibility for MHT-CET and NEET depends on subjects and rules in force. Confirm with the institution before choosing a route." },
    { question: "Can you help a child moving to a Nagpur international school?", answer: "Yes. A transition course covers Maths and science vocabulary, academic English writing and criteria-based marking. Starting two or three months before the move is ideal, and we adapt it to the new school once you know the syllabus." },
    { question: "What if the orange season keeps us busy?", answer: "We schedule around it. Choose evenings or Sunday mornings, pause during the heaviest weeks, and resume later. Lessons you cannot attend with notice are rescheduled." },
    { question: "What connection do we need?", answer: "A steady broadband or 4G connection is enough. Use earphones to reduce echo and keep a hotspot as backup. If the picture drops, the tutor continues by audio and sends notes afterwards." },
    { question: "When are the IB and IGCSE exams?", answer: "IB Diploma exams are held in May and November. IGCSE has May-June and October-November series, with January for some boards. Your school or centre confirms dates. Book travel to Nagpur early." },
    { question: "Can younger children get PYP or MYP help?", answer: "Yes. PYP help builds reading, English speech and number sense in short sessions. MYP help focuses on criteria and the personal project. A parent is usually nearby for early lessons." },
    { question: "What if we do not like the tutor?", answer: "Tell us and we change the tutor at no cost. The new tutor is briefed on what has been covered so the course continues smoothly." },
    { question: "Do tutors speak Marathi or Hindi?", answer: "Lessons are in English because the exams are. Tutors can clarify a difficult idea briefly in Hindi, and some can in Marathi, when it helps a younger student. Over time the balance moves fully to English." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How our online service works in Indian cities." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subjects and programmes." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE support." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure and assessment." },
    { label: "IB MYP", href: "/programmes/myp/", description: "Criteria and the personal project." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI guidance." },
    { label: "Meet the tutors", href: "/tutors/", description: "IB and IGCSE tutor profiles." },
    { label: "Contact us", href: "/contact-us/", description: "Book a free trial." },
    { label: "Nagpur IB and IGCSE tutoring", href: "/nagpur/", description: "The nearest city with confirmed international schools." },
    { label: "Amravati IB and IGCSE tutoring", href: "/amravati/", description: "The neighbouring Vidarbha district city." },
    { label: "Akola IB and IGCSE tutoring", href: "/akola/", description: "Another Vidarbha city served online." },
  ],

  closingHeading: "A free trial lesson, wherever you are in Narkhed",
  closingBody:
    "Send the class, the subject and the exam or school you have in mind. We will match a tutor, run a free online trial and give you rates in writing. Nobody needs to make the long road to Nagpur; the lesson reaches your child at home in Narkhed.",
};
