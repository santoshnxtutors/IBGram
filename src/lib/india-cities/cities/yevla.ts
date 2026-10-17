import type { CitySeoPage } from "../types";

/**
 * /yevla/ - IB and IGCSE tutoring page for Yevla (Yeola), Nashik district, Maharashtra. No school in
 * Yevla is confirmed to run the IB or a Cambridge/Edexcel IGCSE, so stripSchools is empty and the
 * clusters point honestly to Nashik, Pune and Mumbai. Delivery is online one-to-one; in-person home
 * tuition runs only in Gurugram and parts of Delhi NCR.
 */
export const yevla: CitySeoPage = {
  slug: "yevla",
  countryName: "Yevla",
  countryNameLong: "Yevla, Maharashtra",
  demonym: "Yevla",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson times are fixed around the Yevla school day, the Paithani wedding-season rush, Ganeshotsav and Diwali, and the dry summer months when afternoons are best left alone",
  lastUpdated: "2026-09-21",
  geo: { latitude: 20.042, longitude: 74.489 },
  wikipedia: "https://en.wikipedia.org/wiki/Yeola",
  alternateNames: ["Yeola", "Yevla Nashik", "Yeola Maharashtra"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Yevla | Online Private Tuition",
  metaDescription:
    "One-to-one online IB and IGCSE tutors for Yevla (Yeola) students, on IST with Paithani-town schedules in mind. DP, MYP, PYP and IGCSE, free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition for Yevla Students",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR YEVLA (YEOLA) FAMILIES",
  heroSubtitle:
    "Looking for private tuition at home in Yevla for an international syllabus? Nobody in town teaches the IB or IGCSE in a classroom, so the practical answer is a live one-to-one lesson that your child takes from the family's own study table on a laptop. Each tutor is picked for the exact IB subject or Cambridge and Edexcel IGCSE code being studied, and every lesson follows IST.",
  primaryKeyword: "IB and IGCSE tutors in Yevla",
  imageAltText: "A Yevla student at a study desk with a laptop, working through an IGCSE Physics past paper with an online tutor",
  secondaryKeywords: [
    "IB tutor Yevla",
    "IGCSE tutor Yevla",
    "IB home tuition Yevla",
    "IGCSE home tuition Yevla",
    "IB private tuition Yevla",
    "IB Maths tutor Yevla",
    "IGCSE Maths tutor Yevla",
    "IB Physics tutor Yevla",
    "IB Chemistry tutor Yevla",
    "IB Biology tutor Yevla",
    "IB DP tutor Yevla",
    "IB MYP tutor Yevla",
    "IB PYP tutor Yevla",
    "IGCSE online tuition Yevla",
    "IB tutor Yeola",
    "IGCSE tutor Yeola Nashik",
    "IB online tuition Yeola taluka",
    "Cambridge IGCSE private candidate Yeola",
    "IB tutor Yevla Nashik district",
  ],

  heroTrustPoints: [
    "Tutors are chosen by syllabus code and level, not by postcode, so a Yevla student is taught by someone who has recently covered that exact course",
    "Every lesson is live and online; tutors do not visit homes in Yevla, since visits run only in Gurugram and parts of Delhi NCR",
    "A complete trial lesson on your child's own topic comes before anything is agreed",
    "A short written note after each session and a fee quoted in writing before you book",
  ],
  heroStats: [
    { value: "PYP to DP", label: "All four IB programmes covered" },
    { value: "Cambridge and Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "Tutors teach on Indian time" },
    { value: "Trial lesson", label: "Free, before any commitment" },
  ],

  intro: {
    heading: "What private tuition for an international syllabus looks like in Yevla",
    paragraphs: [
      "Yevla is a taluka town of roughly fifty thousand people on the Nashik to Aurangabad highway, known across Maharashtra for its Paithani sarees, and its classrooms are built around the state board. Families who ask us about IB and IGCSE tutors in Yevla usually have a specific reason: a child heading to a boarding school in Pune, a relative abroad, or a plan to sit Cambridge exams as a private candidate. For all of them, private tuition at home means a live online lesson with a tutor who has taught the syllabus.",
      "That arrangement has one real advantage here. A town this size will never have a specialist for Higher Level Chemistry or Additional Mathematics within walking distance, but an online tutor anywhere in India can sit at the same virtual whiteboard at seven in the evening. Your child gets a person who marks to the current IB or Cambridge scheme and tells them, in plain words, why a mark was lost.",
      "To be clear about what we do not do: tutors do not come to a house in Yevla. In-person home tuition is limited to Gurugram and some parts of Delhi NCR. In Yevla every lesson is one-to-one on screen, with the same tutor each week, a short written note afterwards and a change of tutor whenever the fit is wrong.",
      "IB Gram is an independent tutoring service. We are not connected with the IB, Cambridge, Pearson or any school mentioned on this page, and our tutors coach rather than author: no Internal Assessment, Extended Essay, TOK essay or coursework piece is ever written for a student.",
    ],
    bullets: [
      "IB PYP, MYP and DP support, plus Cambridge and Pearson Edexcel IGCSE",
      "Live one-to-one lessons taken from home on a laptop, timed to IST",
      "Tutors matched to the exact subject code, tier and exam session",
      "A free trial lesson and a fee agreed in writing first",
      "No tutor visits in Yevla; home visits exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Yevla does not have an IB school, so each of the four programmes reaches a family here by a different road: a planned move, a boarding place, or a Cambridge private-candidate plan. What a tutor should do is not the same at each stage, which is why the notes below are kept separate.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Learning is arranged around transdisciplinary themes rather than a timetable of separate subjects, and the final year ends with a student-led Exhibition. Good support at this age means steady reading, comfort with number, and practice at asking a question that can actually be investigated.",
      countryNote:
        "With no PYP school near Yevla, parents of primary-age children usually ask in advance of a relocation to Pune or Mumbai, so early sessions smooth the move from Marathi or semi-English medium to inquiry-style English work.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each MYP subject is marked against four published criteria, and the programme closes with the Personal Project in the last year. Students rarely struggle with content alone; they struggle to phrase an answer so that it visibly meets a criterion band.",
      countryNote:
        "MYP enquiries from Yevla are few and nearly always tied to a school place elsewhere, so a tutor starts with criterion-style writing in science and humanities, where a state-board habit of short factual answers costs the most marks.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three subjects at Higher Level and three at Standard Level sit alongside Theory of Knowledge, the Extended Essay and CAS, and Internal Assessments contribute a meaningful share of each subject grade. Final papers fall in the May session for most Indian candidates.",
      countryNote:
        "The Diploma cannot be studied privately, so a DP tutor for a Yevla family is working alongside a boarding school in Pune, Mumbai or further afield, most often in Mathematics, Physics, Chemistry and Economics at Higher Level.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP pairs at least two Diploma courses with a career-related study, a reflective project and a personal and professional skills strand. Take-up in India is small, yet the Diploma courses inside it are taught and examined to full Diploma standard.",
      countryNote:
        "Almost nobody in Yevla asks about the CP. When someone does, they are following the same boarding-school route as Diploma families and want help only with the two academic courses.",
    },
  ],

  subjectsIntro:
    "Two students who both say they need IB Maths may need different courses, so the first conversation fixes the course name, Higher or Standard Level and the exam session. Only then does anyone choose a tutor, and only after that does a weekly slot get agreed that can survive a Yevla evening.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Built for students who like algebra, calculus and proof, and the Higher Level Paper 3 tests whether they can handle a problem they have not met, which only timed practice on new questions builds." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and fluent calculator work carry this course, and a student who learns the calculator's distribution and regression functions early gains time on every paper." },
    { name: "IB Physics", levels: "HL / SL", description: "Quick, accurate use of the data booklet and a habit of writing units and reasoning on each line matter more here than memorising extra formulae, and the investigation needs a method that could be repeated." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, equilibrium and organic mechanisms take more of the marks than students expect, and stoichiometry errors cost points on every paper unless the arithmetic is drilled early." },
    { name: "IB Biology", levels: "HL / SL", description: "Students from the Maharashtra board usually know the content already; the work is learning what 'outline', 'discuss' and 'evaluate' actually ask for in a mark scheme." },
    { name: "IB Economics", levels: "HL / SL", description: "Labelled diagrams plus a current, specific example outscore long definitions, and HL Paper 3 rewards numerical fluency with elasticity, multipliers and exchange-rate questions." },
    { name: "IB Business Management", levels: "HL / SL", description: "The marks go to applying a tool to the named business in the case study, and the internal assessment works best when the company is one a student can really question." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis, the individual oral and the comparative essay each need their own practice, and a student who reads widely still has to learn to write to a timer." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Written papers reward pseudocode, data-structure reasoning and trace tables, which are skills that can lag behind a student's practical coding ability." },
    { name: "IB Psychology", levels: "HL / SL", description: "Every claim has to be tied to a named study with its method and finding, and essay marks reward a clear line of argument over a list of remembered research." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "A strong answer weighs competing viewpoints on a real case, such as groundwater use in a drought-prone district, rather than repeating a textbook summary." },
    { name: "IB Geography", levels: "HL / SL", description: "Named case studies with real detail, sound fieldwork design and careful use of data in Paper 2 earn more than general statements." },
    { name: "IB History", levels: "HL / SL", description: "Source papers ask for judgement on origin, purpose and limitation, and the essay papers need a thesis held for the full length of the answer." },
    { name: "IB Marathi B and Hindi B", levels: "SL / HL", description: "For a student whose home language is Marathi, the oral and the written text types still need structured practice, and Hindi B suits those who studied it as a third language in school." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions push a student to test a first argument against a counter-claim and a concrete real-life situation, without anyone writing the essay or exhibition commentary for them." },
  ],

  igcseSubjectsIntro:
    "Yevla students who take IGCSE do so either as private candidates or as a stepping stone before joining a school elsewhere. Sessions therefore cover the syllabus and also the practical side: exam-board choice, tier choice, and how the alternative-to-practical papers work when there is no school laboratory to rely on.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tier rewards clearly laid-out working, since method marks are awarded even when a final answer slips, and calculator-paper fluency matters as much as algebra." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, trigonometric identities and functions appear a year before most Indian boards teach them, which makes this a natural bridge to IB Maths Analysis and Approaches." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Question wording and mark allocation differ from Cambridge, so Edexcel past papers have to be practised on their own terms." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Without a school laboratory, the alternative-to-practical paper needs deliberate rehearsal with real tables, graphs and sources of error." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations and balancing equations are where most marks leak, and they improve only through short, frequent repetition." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Six-mark answers are marked point by point, so students learn to state a fact, link it to a reason and close the loop in order." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Shifts of demand and supply curves are easy; the extended-answer questions that ask for a reasoned judgement are what need coaching." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Flowcharts, pseudocode and trace tables are practised on unfamiliar problems so that the written paper does not depend on one programming language." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and summary marks depend on close reading of a new passage under time pressure, which is a different habit from board-exam essay writing." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading comprehension and structured writing in Hindi are covered for students who want a language credit alongside the sciences." },
  ],

  regionsTitle: "Parts of Yevla and the taluka our online tutors work with",
  regionsIntro:
    "Lessons are online wherever a family lives, so the local detail that matters is the shape of the day: where the school run goes, which roads are busy at dismissal, and how far the nearest IB or Cambridge school is from each side of town.",
  regions: [
    { name: "The old town around the Shinde-era lanes", note: "The oldest part of Yevla, where Paithani weaving households and family businesses sit close together; evening lessons work best after the shops wind down and the lanes quieten." },
    { name: "The Paithani weaving quarter", note: "Home to the handloom workshops that made the town's name; many children here grow up around a family trade, and homework is often done in the gap between work and dinner." },
    { name: "Station Road and the railway station area", note: "Yevla's station sits on the Manmad to Ahmednagar line, so families heading to Nashik, Pune or Shirdi often start from here, and parents of a boarding-bound child plan their journeys around it." },
    { name: "The Nashik to Aurangabad highway belt", note: "Newer housing and roadside commerce line the highway that connects Yevla with Nashik, about 83 km away, and with Chhatrapati Sambhajinagar; traffic thickens at school dismissal and market hours." },
    { name: "The Manmad road side", note: "The road north toward Manmad, about 26 km away, carries families who change trains there for Mumbai or Nashik; tutoring slots here are usually set after the evening return from Manmad classes." },
    { name: "The Shirdi road side", note: "Shirdi lies about 33 km from Yevla and its airport is the closest to town for many families; parents who fly a child to a boarding school often use it." },
    { name: "Areas near the market yard and APMC", note: "Farming and trading families gather around the agricultural produce market, where the day starts early and lesson times tend to sit in the evening after the market closes." },
    { name: "Villages across Yevla taluka", note: "Families from surrounding villages who send children to town schools; power cuts and patchy mobile data are the practical concerns, so a wired or backup connection is worth arranging before exam season." },
  ],

  schoolDisclaimer:
    "The schools named below are listed only to show where families from Yevla actually look when they want an IB or Cambridge school. We are not partnered with any of them, and we are separate from the International Baccalaureate Organization, Cambridge and Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Yevla itself",
      note: "We could not confirm any school in Yevla teaching the IB or a Cambridge or Edexcel IGCSE syllabus; local schools follow the Maharashtra State Board, with some CBSE and ICSE options in larger towns of the district.",
      schools: [],
    },
    {
      city: "Nearby: Nashik",
      note: "Nashik, about 83 km away, is the district headquarters and the first place many Yevla families look, but we have not confirmed an IB World School there, so many families treat it as a base for exam registration and look further for a school.",
      schools: [],
    },
    {
      city: "Nearby: Pune",
      note: "Pune has the closest established IB and Cambridge schools that Yevla families consider for boarding or relocation.",
      schools: ["Symbiosis International School", "Mercedes-Benz International School"],
    },
    {
      city: "Nearby: Mumbai",
      note: "Mumbai hosts several long-running IB schools, reached by a longer journey of around 260 km, which is why families there usually plan a full move rather than a daily commute.",
      schools: ["Dhirubhai Ambani International School", "Oberoi International School"],
    },
  ],

  modesIntro:
    "In Yevla there is one delivery format, live online lessons, and what varies is the rhythm. Some families want one steady weekly slot through the year; others want a short, dense block before an exam sitting. Tutor visits are a Gurugram and Delhi NCR arrangement and are not offered here.",
  modes: [
    {
      title: "Weekly one-to-one lessons on video",
      description:
        "A fixed hour each week with the same tutor, a shared whiteboard and past papers on screen, scheduled around the Yevla school day and the hours your household is quietest.",
      bullets: [
        "Same tutor every week, so they learn how your child thinks",
        "Whiteboard and papers shared live, no printing needed",
        "Works for IB DP, MYP, PYP and IGCSE alike",
        "A second weekly slot is easy to add before mock exams",
      ],
    },
    {
      title: "Term plan with written progress notes",
      description:
        "A plan drawn up at the start of each term, a short note after every lesson and a fuller review every few weeks, so a parent who works long hours still sees what is changing.",
      bullets: [
        "A note after each session listing topics and next steps",
        "A review conversation every few weeks",
        "Useful for parents who are busy with family trade or farm work",
        "Plans are re-cut when the school syllabus moves on",
      ],
    },
    {
      title: "Exam-window revision block",
      description:
        "Two to four lessons a week across the weeks before a May or October sitting, using timed papers marked against the current mark scheme and quick feedback.",
      bullets: [
        "Timed papers under exam conditions, then a line-by-line review",
        "Feedback returned within days",
        "Planned around Yevla's festival weeks and power-cut season",
        "Best started three to four weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schooling for families in and around Yevla",
      paragraphs: [
        "Yevla, the headquarters of a taluka in Nashik district, is a trading and weaving town where schooling is overwhelmingly Maharashtra State Board, taught in Marathi with a growing number of English-medium sections. Its best-known export is the Paithani saree, woven on handlooms in the old town, and the families who run those businesses think about education the way many business families do: practical, local, but increasingly open to an international route for a child who may study abroad.",
        "We could not confirm an IB or Cambridge or Edexcel IGCSE school inside Yevla, and the nearest places that run these syllabuses are in Pune and Mumbai, a half-day journey or more. That means the enquiries we see are of three kinds. Some families have a child who will move to a boarding school. Some are planning a Cambridge IGCSE as a private candidate. And a few have a parent working in the Gulf or in Europe who wants the child's schooling to match a later move.",
        "It helps to be honest about how each route works. Cambridge permits private candidates to register through an authorised exam centre, so a student can study the syllabus with a tutor and then sit the papers without attending a Cambridge school. The IB Diploma has no private route at all, because coursework and supervision are tied to a registered IB World School. Families aiming at the Diploma therefore plan a school place first.",
        "Online tuition fills the long gap between now and that place, or carries a private-candidate plan end to end. A Yevla student with a good tutor is not at a disadvantage on paper, because the syllabus and the mark scheme are identical in every town that sits them.",
      ],
      table: {
        caption: "How a Yevla student can reach IB or IGCSE learning",
        columns: ["Route", "Where the learning happens", "What the family actually does"],
        rows: [
          ["Cambridge IGCSE as a private candidate", "At home in Yevla, online, with an exam sat at an authorised centre", "Register early, study with a tutor, travel only for exam papers"],
          ["IB Diploma at an IB World School", "A school in Pune, Mumbai or further away", "Secure a school place, then add tutoring during term and holidays"],
          ["IB PYP or MYP before a move", "A future school; early preparation at home", "Use online lessons to build English reading and inquiry habits"],
          ["Staying on the State Board with extra IB-style skills", "A local school plus online tutoring", "Improve writing and reasoning while keeping the school timetable"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed in Yevla; nearest options are in Pune and Mumbai",
        "Cambridge IGCSE can be sat privately; the IB Diploma cannot",
        "Typical families: boarding-bound students, private-candidate plans and relocation planners",
        "The syllabus and marking are identical to every other Indian city",
      ],
    },
    {
      heading: "How is IB or IGCSE different from the Maharashtra State Board, CBSE and ICSE?",
      paragraphs: [
        "The Maharashtra State Board rewards accurate, compact recall of what the textbook says, and in Yevla that habit is built from Class 5 onward. IB and IGCSE instead reward reasoned explanation, use of evidence and the ability to apply an idea to a situation the student has not seen. A child who scores highly on the state board can therefore lose marks early on an IGCSE Extended paper, simply because the question asks 'why' where the board paper asked 'what'.",
        "Assessment weight also shifts. State board scores depend almost entirely on the final paper. The IB spreads marks across final exams and Internal Assessments that run through the year, and IGCSE adds coursework or practical components in some subjects. Planning the year, collecting data, redrafting and referencing become skills in their own right, and a Yevla student rarely meets them before Class 9.",
        "Content depth differs as well. IB Higher Level Mathematics, Physics and Chemistry cover more than the state board does in Class 11 and 12, while IGCSE Core runs close to the board level and Extended a little above it. The tier chosen in Grade 9 therefore decides how steep a later Diploma would feel.",
        "None of this makes the international route impossible for a Yevla student. The gap is about method rather than intelligence, and a tutor who explains the rules of the marking early closes most of it within a few months.",
      ],
      table: {
        caption: "Board comparison for a Yevla student",
        columns: ["Feature", "Maharashtra State Board", "CBSE / ICSE", "IB / IGCSE"],
        rows: [
          ["Main skill tested", "Recall of textbook content", "Recall plus application in set patterns", "Explanation, evidence and judgement"],
          ["Language of instruction in Yevla", "Mostly Marathi, some English", "English, where offered nearby", "English throughout"],
          ["Coursework share", "Small", "Small to moderate", "Substantial in IB; part of some IGCSE subjects"],
          ["Entrance route in India", "MHT-CET, NEET, JEE", "JEE, NEET, CUET", "CUET-UG, JEE and NEET with conditions, plus study abroad"],
        ],
      },
      bullets: [
        "State board marks recall; IB and IGCSE mark reasoning and evidence",
        "Internal Assessments and coursework ask for planning across months",
        "IGCSE tier choice in Grade 9 shapes how hard a later Diploma feels",
        "The difference is method, and method can be taught",
      ],
    },
    {
      heading: "What do IB and IGCSE tutors cost for a Yevla family, and what sets the fee?",
      paragraphs: [
        "A Yevla family asking what a tutor charges gets a written quote, not a published rate card. The figure depends on the programme, how advanced the subject is, how long each session runs and how many a week are needed. Higher Level Diploma subjects cost more than IGCSE Core because far fewer tutors have taught them recently.",
        "Because nothing is delivered in a home here, there is no travel element. Whether the tutor lives in Pune, Chennai or Delhi makes no difference to the price, which matters in a town where a local specialist does not exist. A family effectively pays for subject knowledge and marking skill and nothing else.",
        "Cheapest per hour is not always cheapest overall. An hour with someone who has taught this exact paper structure can replace three hours of re-explaining material a student half-understands. Before comparing two quotes, ask what a session will actually cover and whether the tutor marks work against the official scheme.",
        "There is no long contract. Families review progress every few weeks, can pause during Diwali or a wedding-season rush, and can change tutor without penalty if the fit is poor. The fee is confirmed before the trial and does not change afterwards.",
      ],
      bullets: [
        "Programme, subject level, session length and weekly frequency set the fee",
        "No travel cost, because every Yevla lesson is online",
        "The rate is agreed in writing before booking",
        "No lock-in; pause or stop whenever the family needs to",
      ],
    },
    {
      heading: "Online tuition, local coaching, private tutors and self-study for Yevla students",
      paragraphs: [
        "Yevla has a healthy tuition market, but it is built around the state board and entrance tests: Class 10 and 12 batches, science coaching and preparation for MHT-CET and NEET, often with students travelling to Nashik or Manmad for the larger institutes. None of these batches teaches Cambridge Additional Mathematics or IB Chemistry, and a child on either syllabus gains little from a room set up for a different exam.",
        "Private home tutors in town are reliable for homework and confidence, and they are often excellent with younger children. Very few, though, have marked an IB Internal Assessment or know how the IGCSE alternative-to-practical paper is scored. A generalist can support a child's routine, but a specialist is needed to mark to the real criteria.",
        "Self-study works for content. IGCSE and IB past papers are widely available and a disciplined student can learn a lot alone. Where it falls short is feedback: a student cannot easily see that a six-mark answer would have earned four, or that an IA question is too broad to finish. Those errors repeat until somebody points them out.",
        "Live one-to-one tuition online puts a specialist next to the student at the moment the error is made. It costs more than a group batch but wastes far less time, since every minute is spent on that student's own gaps.",
      ],
      table: {
        caption: "Support options compared for Yevla",
        columns: ["Option", "Knows IB or IGCSE marking?", "Personal attention", "Main limit in Yevla"],
        rows: [
          ["Local coaching batches", "No, built for state board and entrance tests", "Shared with a large group", "No batch teaches an international syllabus"],
          ["Private home tutors in town", "Rarely", "One to one", "Few have taught these courses or marked IAs"],
          ["Self-study with past papers", "Only as far as the student can judge", "None", "Weak feedback on IAs and long answers"],
          ["Online one-to-one specialist", "Yes, matched by syllabus", "One to one", "Needs a steady connection and a quiet hour"],
        ],
      },
      bullets: [
        "Local coaching serves the state board and entrance tests, not international syllabuses",
        "Town tutors help routine and confidence but rarely know IB marking",
        "Self-study fills content gaps and leaves feedback gaps",
        "An online specialist gives marking-level feedback without travel",
      ],
    },
    {
      heading: "How do Yevla's seasons, festivals and exam dates shape an IB or IGCSE year?",
      paragraphs: [
        "Yevla sits in a drier part of Nashik district and summers are hot, with dry spells that have stressed the taluka's farming in weak monsoon years. April and May are the months when schools hold annual exams and power interruptions can be frequent, so a backup plan for connectivity is part of preparing a student who has a lesson at that time.",
        "The festival calendar matters more than most parents expect. Ganeshotsav in late summer, Navratri, Dasara and Diwali each take a week or more of family attention, and in Yevla the Paithani trade is busiest around the wedding seasons, when many households are at full stretch. Good schedules mark these weeks in advance and move lessons rather than cancelling them.",
        "The IB Diploma's final exams sit in May for most Indian students and results come out in early July, with a smaller session in November. Cambridge IGCSE runs in May and June and in October and November, with a February and March series in India, while Edexcel IGCSE runs in January and May and June. Registration deadlines come months before each sitting.",
        "For a private candidate, the realistic milestone is registering with an exam centre. A student who starts in January for a May sitting is tight but possible; starting the previous autumn is far kinder and leaves room for one full set of mock papers.",
      ],
      table: {
        caption: "A year in Yevla, read against the IB and IGCSE calendar",
        columns: ["Period", "What is happening", "How lessons should adapt"],
        rows: [
          ["January to March", "State board exams, Edexcel January series, Cambridge Feb-March series", "Shift to exam practice and keep gaps short"],
          ["April to June", "Heat, local school exams, May IB and Cambridge papers", "Shorter mornings, evening lessons and a backup internet plan"],
          ["July to September", "Monsoon, IB results, Ganeshotsav", "Good window for building foundations and starting new courses"],
          ["October to December", "Dasara, Diwali, Cambridge October-November series", "Plan around the festival weeks and run mock exams before the break"],
        ],
      },
      bullets: [
        "Dry-season heat and power interruptions coincide with school exams",
        "Ganeshotsav, Navratri, Dasara and Diwali should be planned into the term",
        "IB DP sits in May with a November retake session",
        "Cambridge and Edexcel use different series, so confirm which board before planning",
      ],
    },
    {
      heading: "Where can an IB or IGCSE student from Yevla go after school?",
      paragraphs: [
        "Yevla graduates of the state board usually look at Savitribai Phule Pune University colleges, at Nashik's engineering, pharmacy and health-science institutions, or at Pune and Mumbai for professional courses. An IB or IGCSE student has those options and a few more, but must check each course's rules on international qualifications.",
        "For Indian admissions, the Association of Indian Universities issues equivalence for international qualifications, and many courses expect it. Engineering and medicine still run through entrance tests such as JEE, NEET and Maharashtra's CET, so students who want those courses usually add test preparation to their subject tutoring rather than choosing between them. CUET-UG opens a separate route into central universities.",
        "Study abroad relies on predicted grades, which go to universities long before real results. A UK offer is normally stated as a total IB points score with specific Higher Level subjects required, while other countries use their own conversion tables. Families should check each university's published requirements directly.",
        "Our role is academic. We work on subject depth, exam technique and raising a predicted grade, and we are glad to explain which subjects a course expects. We do not run admissions consulting or application services.",
      ],
      bullets: [
        "Local routes run through Savitribai Phule Pune University and Nashik institutions",
        "AIU equivalence and the right subject levels matter for Indian admissions",
        "JEE, NEET and CET still apply to IB and IGCSE students for engineering and medicine",
        "Predicted grades carry real weight for study abroad",
      ],
    },
    {
      heading: "IB Maths AA versus AI, and the sciences, for a Yevla student",
      paragraphs: [
        "A Yevla student who enjoys algebra, functions and calculus, and who may aim at engineering or pure science, usually fits Analysis and Approaches best. The Higher Level course finishes with a Paper 3 of extended problem-solving that rewards patience with unfamiliar questions. Applications and Interpretation suits a student who prefers data, probability and modelling and will likely study economics, business, psychology or life sciences.",
        "Physics at Higher Level depends on three habits: quick, accurate work with the data booklet, clear written reasoning and an investigation whose method stands up to questioning. Chemistry rewards those who are comfortable with mole arithmetic and then with organic pathways, equilibrium and energetics. Both subjects are marked with very specific point-by-point schemes.",
        "Biology students from the state board usually know more facts than the IB asks for. They lose marks on command terms and on quantitative reasoning in the Internal Assessment, where a graph with error bars and an honest conclusion beats a long narrative. Short, repeated practice with mark schemes changes this quickly.",
        "Because few teachers anywhere near Yevla have taught these courses at Higher Level recently, a tutor found online on the basis of exact syllabus fit tends to close the gap faster than a capable generalist working from older textbooks.",
      ],
      bullets: [
        "AA suits calculus and proof routes; AI suits data, modelling and social-science routes",
        "Physics and Chemistry HL reward point-by-point answers and unit discipline",
        "Biology needs command-term precision and honest data handling",
        "Match the tutor to the exact course code, not just the subject name",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and the private-candidate route, for Yevla families",
      paragraphs: [
        "Core and Extended tiers set different ceilings on the grades a student can reach, and with no IGCSE teacher in town the choice is often made at the kitchen table. A tutor can help by checking where the student currently stands against past papers of each tier, then recommending a tier before registration closes.",
        "Extended Mathematics, paired with Additional Mathematics where it is taken, builds the strongest bridge into IB Maths Analysis and Approaches at Higher Level. Extended Physics and Chemistry prepare students for Diploma science in the same way, reducing the jump in content a student would otherwise face.",
        "Private candidates register through an authorised centre, pay the fees set for that centre and sit the papers on its dates. Practical sciences use the alternative-to-practical paper, which needs rehearsal with data tables and planning questions. The details change between series, so the most reliable step is to ask the centre for its current candidate guide.",
        "The Diploma has no equivalent: it needs an IB World School. A Yevla family set on it is planning a boarding or relocation route, and an online tutor works beside whichever school the student eventually joins.",
      ],
      bullets: [
        "Test both tiers on past papers before choosing one",
        "Additional Mathematics 0606 is the clearest bridge to IB Maths AA HL",
        "Private candidates should confirm registration dates and practical arrangements early",
        "The Diploma needs a school place; IGCSE does not",
      ],
    },
    {
      heading: "How does IB Gram choose a tutor for a student in Yevla?",
      paragraphs: [
        "We begin with a short brief: board and programme, subject and level, current grade, the exam session being aimed at, and what is worrying the family most. The worry matters as much as the subject, because a student stuck on an Internal Assessment needs a different tutor from one weak at algebra.",
        "Shortlists are drawn on syllabus fit first. Since nothing local exists to fall back on, the best match is probably a tutor based elsewhere in India, checked for qualifications, recent teaching of that precise course and how they handle assessed work. They teach in IST, so timing is never a problem.",
        "The free trial lesson is the real test. Parents and students see whether concepts are explained clearly, whether questions expose gaps and whether the child feels able to say 'I do not follow'. A short first-month plan follows, for the family to accept or amend.",
        "If the match is wrong, we change the tutor. A student should not have to adapt to the wrong teacher, and nothing in our arrangement locks a Yevla family into one.",
      ],
      bullets: [
        "A brief covering board, subject, level, grade and the main worry",
        "Syllabus fit leads the shortlist, since no local specialist exists",
        "A trial lesson comes before any decision",
        "Tutors can be changed at any point",
      ],
    },
  ],

  tutorsIntro:
    "These are tutors who currently teach IB PYP, MYP and Diploma content and Cambridge or Edexcel IGCSE, paired with students connected to Yevla. Each pairing is judged on the exact syllabus, level and exam session, and every lesson is delivered live and online.",

  process: [
    { title: "Send a short brief", description: "Board or programme, subject and level, current grade, and which evenings suit your household." },
    { title: "Look at the shortlist", description: "Tutors are chosen for how closely they match your child's syllabus, since there is no local specialist to compare them with." },
    { title: "Try a free lesson", description: "Your child works through a real topic with a tutor, online, at no charge and with no obligation." },
    { title: "Agree the first month", description: "The tutor proposes topics and a weekly rhythm, and you approve or change it before anything is booked." },
    { title: "Continue with regular lessons", description: "A fixed weekly online slot, reviewed every few weeks, with a different tutor offered whenever it is needed." },
  ],

  whyPoints: [
    { title: "Matched by course, not by postcode", description: "A Yevla student is paired with a tutor who has taught that subject code and level, wherever in India the tutor lives." },
    { title: "Made for a town without local options", description: "When no school or specialist is near, a live lesson is the practical way to get expert marking." },
    { title: "See a lesson first", description: "A free trial lets you judge the teaching before any fee is agreed." },
    { title: "Coaching, never ghost-writing", description: "Tutors guide Internal Assessments, essays and coursework, but never write any assessed piece." },
    { title: "Progress you can read", description: "A note after every session and a regular review keep parents informed, even when they are busy with a family trade." },
    { title: "Independent and flexible", description: "No tie to a school or board, no long contract, and a change of tutor available on request." },
  ],

  faqs: [
    { question: "How do I find IB and IGCSE tutors in Yevla?", answer: "Send IB Gram your child's programme, subject, level and target exam session, and we shortlist tutors who have taught that exact course. Because nothing is delivered in Yevla itself, the shortlist is drawn from across India on syllabus fit alone. You then take a free trial lesson online and decide whether to continue. The whole process can start from a short WhatsApp message." },
    { question: "Do you offer IGCSE home tuition in Yevla for Cambridge and Edexcel?", answer: "Yes, as online home tuition: a live private lesson that your child takes at home on a laptop. Both Cambridge and Pearson Edexcel are covered, and tutors are matched by syllabus code and tier, for example Cambridge 0580 Extended or Edexcel 4MA1 Higher. A tutor does not visit your house in Yevla, since visits run only in Gurugram and parts of Delhi NCR." },
    { question: "Will a tutor come to my house in Yevla?", answer: "No, tutors do not visit homes in Yevla. In-person home tuition exists only in Gurugram and parts of Delhi NCR. In Yevla every lesson is a one-to-one video session with a shared whiteboard, which also lets us choose a specialist from anywhere in India instead of whoever lives within reach. Your child needs only a laptop, headphones and a steady connection." },
    { question: "Is there an IB or IGCSE school in Yevla?", answer: "We could not confirm one. Schools in Yevla follow the Maharashtra State Board, with Marathi and English medium options, and the closest places offering international syllabuses are in Pune and Mumbai. We name only schools whose curriculum we have been able to verify, so this page points to those cities honestly. Check any school's current offer with the school directly." },
    { question: "Can my child take IGCSE exams from Yevla without joining a Cambridge school?", answer: "Yes, Cambridge allows private candidates to register through an authorised exam centre and sit the papers without attending a Cambridge school. Your child studies with an online tutor and travels only for the exam. Practical sciences use the alternative-to-practical paper. Ask the centre early about registration dates, fees and the current candidate guide." },
    { question: "Can my child study the IB Diploma from Yevla in the same way?", answer: "No, because the IB Diploma has no private-candidate route. It needs enrolment at an authorised IB World School, which means a school place in a city such as Pune or Mumbai. Once a place is secured, an online tutor can support your child during term time and holidays. Before that, tutoring can build the subject and writing skills the Diploma expects." },
    { question: "What does an IB or IGCSE tutor cost in Yevla?", answer: "The fee depends on the programme, subject level, session length and how often lessons run, and it is quoted in writing before booking. Higher Level Diploma subjects typically cost more than IGCSE Core because fewer tutors have taught them recently. There is no travel cost, since every lesson is online, and there is no long contract. We do not publish a price list." },
    { question: "Is there a free trial lesson?", answer: "Yes, every new student receives one. Your child works through a real topic from their own syllabus with the tutor, online and free of charge. A short plan for the first month follows, and you then decide whether to continue, ask for a different tutor or stop. Nothing is expected of you after the trial." },
    { question: "Can a tutor help with my child's IB Internal Assessment?", answer: "Tutors can guide the process but cannot write any part of it. That means helping choose a workable question, explaining what each criterion asks for, planning data collection and giving feedback on a draft the student wrote. The same rule covers the Extended Essay, TOK essay and IGCSE coursework. The work must remain the student's own." },
    { question: "Which IB Diploma subjects can you cover for a Yevla student?", answer: "We cover both Maths strands at Higher and Standard Level, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, Geography, History and language courses including Marathi B and Hindi B. TOK support is also available. Tell us the exact course name and level, and we will confirm a tutor before the trial." },
    { question: "Do you teach IB MYP and PYP students, or only the Diploma?", answer: "We teach the whole IB continuum. MYP sessions focus on criterion-based writing in science and humanities, maths reasoning and the Personal Project process. PYP sessions build reading, number sense and the habit of asking investigable questions. For families planning a move to a school in Pune or Mumbai, starting at this stage makes the transition noticeably smoother." },
    { question: "Does online tuition really work for a student in a town like Yevla?", answer: "Yes, provided the connection is stable and the student has a quiet hour. A shared whiteboard, screen-shared past papers and a written note after each lesson reproduce what a good classroom tutor does, with more attention per minute. Families in the taluka's villages should arrange a backup connection before exam season, since outages can occur." },
    { question: "How are tutors vetted?", answer: "Before we introduce a tutor, we check qualifications, how recently they taught the exact subject and level, and how they approach assessed work. We also watch how they explain an idea during the trial. Tutors coach and never write coursework. If you feel the fit is wrong after the trial, we find another tutor rather than asking your child to adapt." },
    { question: "When should a Yevla student begin IB or IGCSE tutoring?", answer: "The cleanest start is at the beginning of the course: Grade 9 for IGCSE and Class 11 for the Diploma. That leaves time to close gaps before internal exams, Internal Assessment deadlines and predicted grades. A later start is still useful; a focused block of four to eight weeks before an exam series can make a clear difference to technique." },
    { question: "My child studies on the Maharashtra State Board. Can they switch to IB or IGCSE?", answer: "Yes, and a tutor helps most with exam style rather than content. State board students often know the facts but have not practised explaining, evaluating or justifying an answer in the way IB and IGCSE mark schemes reward. We begin by comparing a few past-paper answers with the mark scheme so the student can see the gap and close it step by step." },
    { question: "What times can lessons be booked for a Yevla family?", answer: "Weekday evenings after school and weekend mornings suit most families. We also plan around Paithani wedding-season weeks, Ganeshotsav, Dasara and Diwali, and avoid the hottest afternoons in summer. Every tutor teaches on Indian Standard Time, so there is never a time-zone problem, and we can move a lesson if a power cut or family event gets in the way." },
    { question: "What happens if we are not happy with the tutor?", answer: "Tell us and we will find a different tutor. We review progress with families every few weeks so that a poor fit is caught early, and no student is asked to continue with someone who is not helping. Nothing in our arrangement is tied to a long contract, so changing or stopping carries no penalty." },
    { question: "Is IB Gram connected to any school, to the IB, or to Cambridge?", answer: "No, IB Gram is an independent tutoring service with no affiliation to any school, the International Baccalaureate Organization, Cambridge University Press and Assessment or Pearson Edexcel. Schools named on this page are included only to show where Yevla families look. Always confirm a school's current curriculum and admissions directly with the school itself." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tuition across India", href: "/india/", description: "How our online tutoring works for families in cities and towns across the country." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where in-person home visits are offered, with parts of Delhi NCR." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Programme and subject tutoring explained for the IB." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Boards, tiers, subject codes and exam series for IGCSE." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, Internal Assessments, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and how MYP is assessed." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition in the final year." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and arrange a free trial lesson." },
    { label: "IB and IGCSE tutors in Manmad", href: "/manmad/", description: "The rail junction about 26 km north of Yevla, with a similar online setup." },
    { label: "IB and IGCSE tutors in Nashik", href: "/nashik/", description: "The district headquarters, where many Yevla families register for exams." },
    { label: "IB and IGCSE tutors in Malegaon", href: "/malegaon/", description: "Another Nashik district town served through online lessons." },
  ],

  closingHeading: "Book a free trial lesson for your Yevla student",
  closingBody:
    "Tell us the programme or board, the subject and level, your child's current grade and the evenings that work at home. A tutor who has taught that course will reply with their background and trial times, all online, one to one and free of charge. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
