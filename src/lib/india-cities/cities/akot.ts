import type { CitySeoPage } from "../types";

/**
 * /akot/ - IB and IGCSE tutoring page for Akot, Akola district, Maharashtra (Vidarbha). Online-only:
 * tutors do not visit homes in Akot (in-person home tuition runs only in Gurugram and parts of Delhi NCR).
 * No IB or IGCSE school is confirmed in Akot, so the clusters are labelled nearby-city clusters.
 */
export const akot: CitySeoPage = {
  slug: "akot",
  countryName: "Akot",
  countryNameLong: "Akot, Akola, Maharashtra",
  demonym: "Akot",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Shaped by Vidarbha's 44-degree summers, the cotton-picking months, Ganeshotsav, Ramzan and Eid, and the state board's February exam block",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.0960, longitude: 77.0620 },
  wikipedia: "https://en.wikipedia.org/wiki/Akot",
  alternateNames: ["Akot Akola", "Akot Maharashtra", "Akot Vidarbha"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Akot | Online Home Tuition, Vidarbha",
  metaDescription:
    "IB and IGCSE tutors in Akot, Akola district: private one-to-one online tuition at home for DP, MYP, PYP and Cambridge subjects. Try a free lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Akot, Maharashtra",
  heroEyebrow: "IB & IGCSE HOME TUITION, ONLINE, IN AKOT",
  heroSubtitle:
    "Home tuition is what Akot parents type into search, and for IB or Cambridge IGCSE the honest form of it is a private lesson beamed to your house: one child, one specialist, live on a laptop. No tutor will arrive at your door in Akot, and nobody here pretends otherwise. What you gain is a teacher who has actually handled your child's IB course or IGCSE paper, teaching at hours that leave room for Vidarbha's summer.",
  primaryKeyword: "IB and IGCSE tutors in Akot",
  imageAltText: "An Akot student having a one-to-one online IB Chemistry class at a desk at home",
  secondaryKeywords: [
    "IB tutor Akot",
    "IGCSE tutor Akot",
    "IB home tuition Akot",
    "IGCSE home tuition Akot",
    "IB private tuition Akot",
    "IB Maths tutor Akot",
    "IGCSE Maths tutor Akot",
    "IB Physics tutor Akot",
    "IB Chemistry tutor Akot",
    "IB Biology tutor Akot",
    "IB DP tutor Akot",
    "IB MYP tutor Akot",
    "IB PYP tutor Akot",
    "IGCSE online tuition Akot",
    "IB tutor Akot Maharashtra",
    "IB tutor Akola district",
    "IGCSE tutor Telhara",
    "IB tutor Shegaon",
    "online IB tutor Vidarbha",
    "Cambridge IGCSE tuition Akot Akola",
  ],

  heroTrustPoints: [
    "Tutors are selected for the exact IB course and level or IGCSE syllabus code and tier",
    "All lessons happen online; sending a tutor to a house is possible only in Gurugram and parts of Delhi NCR",
    "You attend one lesson free before committing to anything",
    "Each class ends with a brief written summary for parents",
    "Nothing here is connected to any school, university or exam board named",
  ],
  heroStats: [
    { value: "PYP, MYP, DP, CP", label: "All four IB stages" },
    { value: "IGCSE, both boards", label: "Cambridge and Pearson Edexcel" },
    { value: "IST", label: "One clock, no conversion" },
    { value: "Trial lesson", label: "Free of charge" },
  ],

  intro: {
    heading: "What an international curriculum means for a family in Akot",
    paragraphs: [
      "Akot is a cotton-belt city in the Vidarbha region of Maharashtra, in Akola district, with a population of a little over ninety thousand. It lies between Akola and the Amravati district border, close to Telhara and Shegaon. Schools here teach the Maharashtra State Board syllabus or CBSE, mostly in Marathi, Hindi, Urdu or English medium. We could not confirm an IB or Cambridge IGCSE school in Akot, so IB and IGCSE tutors in Akot can only teach online.",
      "The households that ask are a varied group. Doctors and professionals whose children might study medicine or engineering abroad. Cotton traders, ginning-mill owners and commission agents with relatives in Mumbai, Pune or the Gulf. Families who have returned to Vidarbha from a big city and want the child's syllabus to stay unbroken. And bright children whose parents sense that state board papers under-use them.",
      "What holds them back is supply, not interest. A teacher who has coached IB Higher Level Physics or an IGCSE Extended Maths paper is very rare in Akola district, and the few who exist are in Nagpur, Pune or Mumbai. Solving that means finding the person elsewhere and meeting through a screen.",
      "Two points, stated once and clearly. IB Gram tutors do not visit homes in Akot; home visits belong to Gurugram and parts of Delhi NCR only. And IB Gram is its own service, with no link to the IB, Cambridge, Pearson or any institution mentioned on this page.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Live private classes, one student at a time, on Indian time",
      "Guidance and marked feedback only; assessed work is always the student's own",
      "Free first lesson and a written quote before any booking",
      "A different tutor whenever you ask for one",
    ],
  },

  programmesIntro:
    "Since no IB school is confirmed in Akot itself, the four stages are described for a child who studies in another city, has just moved to Akola district, or is preparing on their own.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Learning unfolds through big-idea inquiries instead of subject timetables, and ends with a pupil-led Exhibition. As nothing is examined externally, tutoring is about reading, expression and number sense.",
      countryNote:
        "Marathi, Hindi and Urdu dominate at home in Akot, so PYP tutoring frequently begins with English speaking and phonics before anything else.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Marks are awarded against criteria in every subject, and a Personal Project caps the final year. Showing method and reasoning earns as much as the answer.",
      countryNote:
        "A student arriving from a Maharashtra board class often needs practice shifting from short recall answers to structured written explanations.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects sit beside Theory of Knowledge, an Extended Essay and Creativity, Activity, Service. Internal assessments feed into most subject grades, while exams test precise, command-term-aware answers.",
      countryNote:
        "Akot enquiries concentrate on Biology, Chemistry, Physics and Maths at Higher Level, matching the region's medical and engineering ambitions, with Business and Economics for trading households.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pair of Diploma courses combine with a career-related study, a reflective project and skills work, giving an applied route with an international qualification.",
      countryNote:
        "Very few Vidarbha-region schools run CP, so tutoring here revolves around its Diploma courses; the reflective project is discussed but never written by the tutor.",
    },
  ],

  subjectsIntro:
    "The first job is naming the course exactly. Analysis and Approaches versus Applications and Interpretation, and Higher versus Standard, change the teaching plan completely.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof, with unseen-problem practice at Higher Level and a realistic exploration topic." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, probability and technology, and writing conclusions in plain words." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics to quantum ideas, with attention to units, uncertainty and worded reasoning." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, energetics, equilibrium and organic mechanisms, with data-booklet fluency." },
    { name: "IB Biology", levels: "HL / SL", description: "A popular choice for aspiring doctors, taught with exact definitions and data-based questions." },
    { name: "IB Environmental Systems and Societies", levels: "HL / SL", description: "Water, soil and agriculture case material suits Vidarbha's cotton and drought concerns." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram-led micro and macro, with commodity-market examples students can relate to." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case reading, finance and the internal report, suited to trading families." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, algorithms and systems, with structured answers." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Text analysis and orals for students who think first in Marathi, Hindi or Urdu." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Speaking and writing tasks for Hindi as a second language." },
    { name: "IB Marathi B", levels: "HL / SL", description: "Where a school offers it, language-acquisition support in Marathi for students who need structured writing practice." },
    { name: "IB Theory of Knowledge", levels: "Core", description: "Knowledge questions and the exhibition are discussed with the student; the essay is never drafted for them." },
  ],
  igcseSubjectsIntro:
    "IGCSE spans Grades 9 and 10, entered by syllabus number and tier. Read the code and tier off your child's entry paper before picking a tutor.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra, shape and data, with Extended students pushed on functions and trigonometry." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, forces, electricity, waves and atoms, with practical-paper technique." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Particles, reactions, organic basics and planning experiments." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, body systems, plants and ecology, with data questions." },
    { name: "IGCSE Agriculture 0600", levels: "Grade 9-10", description: "Crop, soil and livestock topics that connect to a cotton-belt student's surroundings, where a school offers the paper." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Algorithms, programming and systems." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, government and trade." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case-based questions and calculations." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing, listening and speaking for students starting from Marathi, Hindi or Urdu." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension and composition." },
  ],

  regionsTitle: "Akot and nearby Vidarbha places where our online tutors teach",
  regionsIntro:
    "Where a family lives changes the shape of the day, not the quality of a video lesson. These are the places we hear from and the routine each tends to have.",
  regions: [
    { name: "Akot town centre", note: "The commercial core, with the cotton market and trading houses; business families here plan around the buying season." },
    { name: "Akot bus stand area", note: "A busy transport point, with tuition batches and coaching notices nearby aimed at state board students." },
    { name: "Akola road side", note: "The approach towards Akola city, about 45 km away, where many families do school runs or travel for larger markets." },
    { name: "Amravati road side", note: "The northern approach, used by families who look towards Amravati for schools and university." },
    { name: "Telhara", note: "A town to the south of Akot with an agricultural economy and few specialist teachers." },
    { name: "Shegaon", note: "Known for its major Gajanan Maharaj temple; a busier town on the rail line with families who look at Akola and Nagpur." },
    { name: "Narnala side", note: "The hill-fort area near Akot, a landmark for the northern part of the taluka." },
    { name: "Hiwarkhed", note: "A village settlement in the same belt where reliable connectivity matters when choosing a lesson time." },
    { name: "Akola city", note: "The district headquarters, home to an agricultural university and the region's main coaching market." },
    { name: "Amravati city", note: "The divisional city with a university, another destination for families weighing schools." },
  ],

  schoolDisclaimer:
    "No IB or Cambridge IGCSE school in Akot has been confirmed, so none is claimed as local. The campuses listed are in Nagpur, Vidarbha's nearest large city with international schools; Akola and Amravati are shown without names because nothing there is verified. They appear for geography only, IB Gram has no tie with any of them, and inclusion is not an endorsement.",
  schoolClusters: [
    {
      city: "Nearby: Nagpur (MIHAN and Wardha Road)",
      note: "A few hours by road or rail from Akot, Nagpur is the Vidarbha city with the clearest cluster of international campuses, and the usual choice for boarding or relocation.",
      schools: ["D Y Patil International School, MIHAN"],
    },
    {
      city: "Nearby: Nagpur (central and Wanadongri)",
      note: "A second group of campuses within the same city, spread between the central belt and the western outskirts.",
      schools: ["Centre Point School International", "VIBGYOR World Academy", "International School of Scholars"],
    },
    {
      city: "Nearby: Akola and Amravati",
      note: "The closest cities to Akot, where we have not verified a specific IB or Cambridge campus and so name none; families still use them for coaching and university access.",
      schools: [],
    },
  ],

  modesIntro:
    "Every class is a live private video lesson. What varies is the rhythm a family chooses, and most fall into one of three.",
  modes: [
    {
      title: "A fixed weekly hour",
      description:
        "One recurring slot with one tutor through the school year, aimed at a student who wants sustained depth in one or two subjects.",
      bullets: [
        "Same tutor all year, so understanding builds",
        "A shared whiteboard and photographed written work",
        "Evening slots that respect school and tuition timetables",
        "A concise recap after each session",
      ],
    },
    {
      title: "Bridge lessons from the state board",
      description:
        "A short run for a student moving from Maharashtra board or CBSE into IB or IGCSE material, focused on vocabulary, notation and answer style.",
      bullets: [
        "First class used to find gaps",
        "Command terms taught deliberately",
        "A topic-by-topic catch-up list",
        "Review when the block ends",
      ],
    },
    {
      title: "Weeks before the exam",
      description:
        "Denser tutoring before a May, June or November series, built on timed papers, marking and correction.",
      bullets: [
        "Marked to the board's own scheme",
        "Feedback returned within two days",
        "Only the costly topics get revisited",
        "Ideal to begin about three weeks before paper one",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Akot have an IB or IGCSE school?",
      paragraphs: [
        "We could not confirm an IB or Cambridge IGCSE school in Akot, and we will not guess. The town's schools follow the Maharashtra State Board or CBSE, with instruction in Marathi, Hindi, Urdu or English. If a local school announces an international programme, ask for its affiliation details and check them with the awarding body.",
        "Where do families go instead? Nagpur is the Vidarbha city where the clearest group of international campuses sits, several hours from Akot. Akola and Amravati are closer, but we have not verified a specific campus in either, so this page names none. Pune and Mumbai have far more choice and are where relatives often live.",
        "The distance makes daily travel impossible. Realistically a family can board a child in Nagpur, relocate one parent, or keep the child at home and prepare privately. Each has costs. Boarding at fourteen is a large step. Relocation disrupts a business or job. Private preparation demands discipline, and works best for IGCSE, whose papers are published by subject code.",
        "The table lays out the options plainly. Always confirm current programmes and admission rules with a school directly.",
      ],
      table: {
        caption: "Where an Akot family can look for IB or IGCSE schooling",
        columns: ["Place", "What is confirmed", "What to weigh"],
        rows: [
          ["Akot", "No IB or IGCSE school confirmed", "Local state board and CBSE schools; online tutoring bridges the gap"],
          ["Akola and Amravati", "No specific campus verified, so none named", "Closer, but check any school directly"],
          ["Nagpur", "D Y Patil International School, Centre Point School International, VIBGYOR World Academy, International School of Scholars", "Boarding or relocation; several hours away"],
          ["Private preparation", "Feasible for IGCSE and for IB courses studied ahead of a move", "Needs a reliable tutor and a steady routine"],
        ],
      },
      bullets: [
        "No confirmed IB or IGCSE school inside Akot",
        "Nagpur is the main confirmed cluster in Vidarbha",
        "Boarding, relocating or preparing privately are the real choices",
        "Ask any school for current affiliation before deciding",
      ],
    },
    {
      heading: "What does language mean for an Akot student choosing an English-medium international syllabus?",
      paragraphs: [
        "Language decides more in Akot than in a metro. Many students learn in Marathi, Hindi or Urdu medium, with English as a subject rather than a working language. Switching to IGCSE or IB asks for long, precise answers in English across Maths, Sciences and humanities, and that is the first hurdle, ahead of any topic.",
        "A tutor can help in practical ways. By teaching command terms such as state, explain, justify and evaluate. By practising the short paragraph that answers a six-mark question. And by getting the student to explain a solution aloud in English before writing it down.",
        "The reverse also matters. A student who thinks in Marathi or Urdu is not weaker for it. Vocabulary can be learned in a term, and bilingual students often do well in the language subjects because they already understand how languages differ.",
        "Where schools offer a home language as a course, such as Hindi or Marathi at IB level, it can be a sensible scoring subject. Ask the school what is on offer before choosing.",
      ],
      bullets: [
        "English writing is the usual first gap, not ability",
        "Command terms can be taught directly",
        "Explain aloud first, then write",
        "Home-language courses can support the total score",
      ],
    },
    {
      heading: "How do the Maharashtra board, CBSE and ICSE compare with IGCSE and IB?",
      paragraphs: [
        "Maharashtra State Board papers, set through the Amravati divisional board for this region, reward textbook coverage and correct standard answers, and the board exams fall in February and March. CBSE follows NCERT books with some application. ICSE adds content detail and English writing. Cambridge IGCSE and the IB expect students to apply ideas to unfamiliar scenarios and justify conclusions.",
        "A physics example shows the difference. A state board question may ask for a definition and a numerical. An IGCSE question builds a scenario around it. An IB question adds a critique of the method. None is easier, and each rewards different habits.",
        "For an Akot family the practical questions are about direction. Study in Maharashtra through MHT-CET, NEET or JEE points one way. Study abroad or at a private university that values international grades points another. Many students keep options open by choosing a syllabus that leaves both routes possible, and the table summarises the differences.",
        "Use it to frame questions, and check university requirements before switching boards.",
      ],
      table: {
        caption: "Boards compared for an Akot student",
        columns: ["Board", "Exam style", "Common direction"],
        rows: [
          ["Maharashtra State Board", "Textbook-based; February to March exams", "MHT-CET, state colleges, NEET and JEE with coaching"],
          ["CBSE", "NCERT content with application", "JEE, NEET and CUET"],
          ["ICSE and ISC", "Detailed content and written English", "Wide range of Indian degrees"],
          ["Cambridge and Edexcel IGCSE", "Applied questions by tier", "A Level, IB and overseas school routes"],
          ["IB Diploma", "Six subjects, essays and internal assessments", "Indian and overseas universities"],
        ],
      },
      bullets: [
        "State board exams in February and March can clash with IB mocks",
        "Direction should decide the board, not the reverse",
        "Read past papers from each board side by side",
        "Check every university's rules before switching",
      ],
    },
    {
      heading: "How much does IB or IGCSE tuition cost for an Akot family?",
      paragraphs: [
        "Prices are not printed here because a number that fits one child misleads another. Once the free lesson is done, a written quote is sent that reflects your requirement and nothing more.",
        "Expect the quote to respond to four things. How demanding the paper is, since Higher Level IB Chemistry needs a scarcer specialist than a Core IGCSE recap. How much the tutor has taught that exact syllabus. The weekly hours you choose. And the distance to the exam, as the last weeks book up first.",
        "Set that beside the alternatives. Travelling to Nagpur for a class takes a day and a fare. A local coaching class costs less per hour but prepares for a different exam. A visiting teacher with real IB or Cambridge background is very hard to find in Akola district. Online lessons cut the travel and pay for expertise.",
        "If funds are limited, book a short block on one trouble spot and decide afterwards. Many families do exactly that.",
      ],
      bullets: [
        "Free lesson first, then a written quote",
        "Difficulty, tutor record, weekly hours and timing move the rate",
        "A short block is a low-risk start",
        "Compare with travel-based options honestly",
      ],
    },
    {
      heading: "Vidarbha heat, cotton season and festivals: when does the Akot calendar squeeze study time?",
      paragraphs: [
        "IB exams run in May and November, Cambridge IGCSE in June and November, with a March series in some years. Vidarbha adds its own pressures. April to June is severe, with daytime temperatures often around 44 degrees, hot winds and interrupted power. Lessons in this stretch work best early in the morning or after sunset.",
        "The cotton season shapes family life between October and February, when picking and marketing keep trading households busy. Children of traders and farmers may be pulled into family work, and evenings are unpredictable.",
        "Festivals add layers. Ganeshotsav in August or September, Navratri, Dussehra and Diwali cluster before the November exams. Ramzan and Eid matter for a large share of the town's families, with changed daily rhythms and school closures. Muharram and Gudi Padwa also change schedules.",
        "The monsoon from June brings relief, but heavy rain can disrupt power and roads. A lesson on a laptop is less affected by roads, though a backup for electricity and data is wise. The table gives a rough calendar.",
      ],
      table: {
        caption: "The Akot year and study planning",
        columns: ["Period", "Local factor", "Planning note"],
        rows: [
          ["October to February", "Cotton picking and marketing; Diwali, Christmas break", "Keep lessons short and regular; expect some disruption"],
          ["February to March", "State board exam block", "Avoid clashing IB or IGCSE mocks with local exam weeks"],
          ["April to June", "Severe heat, IB May session and IGCSE June session", "Early-morning slots; backup power"],
          ["July to September", "Monsoon, Ganeshotsav, possible Ramzan or Muharram depending on the year", "New content; flexible timing"],
          ["October to November", "Navratri, Dussehra, Diwali, November exams", "Finish content by early September"],
        ],
      },
      bullets: [
        "IB May and November; IGCSE June and November",
        "Plan around the cotton season and festivals",
        "Keep a power and data backup",
        "Confirm exam dates with the school each year",
      ],
    },
    {
      heading: "Where do Akot students go after an IB or IGCSE course?",
      paragraphs: [
        "In India, the AIU treats the IB Diploma as equivalent to Class 12 for admissions, CUET-UG is open to recognised-board students, and private universities across Maharashtra, in Pune, Mumbai and Nagpur especially, work with international qualifications. Check each course's own subject rules.",
        "Vidarbha families often think of medicine. NEET-UG requires Physics, Chemistry, Biology or Biotechnology and English, and eligibility rules for international boards should be checked against the latest notification. Engineering routes depend on JEE and state tests, whose rules for IB and IGCSE students also change.",
        "Overseas, the UK, Canada, Australia, Germany and Ireland are common. Universities there read IB and Cambridge results easily, so choosing Higher Level subjects to match a degree helps. Agricultural science is worth a mention: with a major agricultural university in Akola, some students consider bioscience or agribusiness degrees.",
        "Our advice is to start from the destination. Read what the degree asks, choose subjects to match, and treat tutoring as the way to reach the grade.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG for Indian routes",
        "Check NEET and JEE rules for your board",
        "UK, Canada, Australia and Europe accept IB and Cambridge",
        "Agricultural and bioscience degrees are a regional option",
      ],
    },
    {
      heading: "How are IB Biology, Chemistry and Maths taught to Akot students?",
      paragraphs: [
        "Biology and Chemistry draw the most interest from Akot. In Biology, tutors work on definitions that are exact, on describing versus explaining, and on reading graphs and data. Students who know the content but write loosely can lose marks without noticing, so marked practice is central.",
        "IB Chemistry lessons follow the syllabus units, from structure and bonding to energetics, kinetics, equilibrium and organic mechanisms. Higher Level adds depth. The Scientific Investigation is discussed for design and analysis, but the data collection and the write-up belong to the student.",
        "Maths starts with the choice between Analysis and Approaches and Applications and Interpretation at Higher or Standard Level. Approaches leans on calculus and proof, Interpretation on data and modelling. Teaching moves from a worked example to guided practice to timed questions, with unseen-problem practice for Higher Level.",
        "In all three subjects, the most valuable thing is feedback: where a mark was lost, why, and what to do next time.",
      ],
      bullets: [
        "Exact definitions and command terms in the sciences",
        "Choose the Maths course and level first",
        "Marked papers drive improvement",
        "Investigations and explorations remain the student's own",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should an Akot student choose?",
      paragraphs: [
        "Most Cambridge IGCSE subjects have Core and Extended papers. Core caps the highest grade, while Extended opens the full range with harder questions. For a subject that will continue at IB or A Level, Extended is the safer choice. For one that will not, Core may do.",
        "Students from Maharashtra board or CBSE schools should lay their present topics beside the IGCSE syllabus. Maths and the sciences overlap in places, but the question style and written English requirement are new. A tutor closes the gap topic by topic.",
        "A sensible package is Maths, English, two sciences and one of Computer Science, Economics or Business Studies. Students from farming or trading families sometimes add Agriculture or Business where the school offers them.",
        "Since each subject has a published code, a tutor can start from the specification and specimen papers on day one, which is why IGCSE suits private preparation.",
      ],
      bullets: [
        "Extended keeps every grade open",
        "Compare state board topics with IGCSE ones",
        "Choose a package for the next stage",
        "Use official papers from the start",
      ],
    },
    {
      heading: "Which suits an Akot student: online tutor, coaching class, visiting teacher or self-study?",
      paragraphs: [
        "For an international syllabus, an online one-to-one tutor gives access to specialists that Akot cannot supply. Coaching classes in Akot and Akola are geared to state board, NEET, JEE and MHT-CET, and there is no cohort for Higher Level IB or Extended IGCSE.",
        "A teacher who visits the house is what many parents picture. Finding one in Akola district with real IB or Cambridge experience is very difficult, and bringing one from Nagpur is not realistic.",
        "Self-study helps disciplined students with plenty of past papers. It falls short for internal assessments and for misunderstandings that only a second person will notice.",
        "In IB Gram's model, home tuition in Akot means an online class while the tutor stays elsewhere and the student stays home. The table compares the four options.",
      ],
      table: {
        caption: "Support options for IB or IGCSE in Akot",
        columns: ["Option", "Advantage", "Limit"],
        rows: [
          ["Online one-to-one tutor", "Specialist in the exact course; no travel", "Needs stable power and connection"],
          ["Coaching class in Akot or Akola", "Peers and routine", "Built for state board and entrance exams"],
          ["Visiting private teacher", "Personal and familiar", "Very few with IB or Cambridge experience"],
          ["Self-study", "Cheap and flexible", "Hard to spot errors; weak on assessed work"],
        ],
      },
      bullets: [
        "Choose first on subject expertise",
        "Keep coaching for entrance exams",
        "Use official past papers throughout",
        "Review the arrangement after a month",
      ],
    },
  ],

  tutorsIntro:
    "These tutors teach the IB from PYP to Diploma and both IGCSE boards, and each is suggested to an Akot family only after their subject, level and board are compared with what the child studies. The first lesson costs nothing.",

  process: [
    { title: "Describe the course", description: "Board or IB stage, subject, level, recent marks and a weekly slot that fits the household." },
    { title: "Receive a tutor suggestion", description: "Someone whose recent teaching matches the syllabus, with their background explained." },
    { title: "Sit a free class", description: "A real topic taught live, with no charge and nothing to sign." },
    { title: "Approve the plan", description: "Topics, pace and price set out in writing before any payment." },
    { title: "Carry on and review", description: "Weekly classes, short notes and a review every few weeks, with a swap available." },
  ],

  whyPoints: [
    { title: "A tutor for the actual paper", description: "The match is made on your child's IB course and level or IGCSE code and tier." },
    { title: "Reaches past the district", description: "With no confirmed local IB or IGCSE school, the specialist must come from elsewhere." },
    { title: "Judge before paying", description: "The free lesson shows the real teaching." },
    { title: "Work stays the student's", description: "Tutors coach and give feedback; graded pieces are never written for a student." },
    { title: "Short written recaps", description: "Parents get a note after each class." },
    { title: "Simple to leave or switch", description: "No long contract, and a new tutor on request." },
  ],

  faqs: [
    { question: "Is there any IB or IGCSE school in Akot?", answer: "None that we could confirm, so none is named. Akot's schools follow the Maharashtra State Board or CBSE. The nearest confirmed international campuses are in Nagpur. If you hear of a local school offering these programmes, ask it for affiliation details and verify them with the awarding body." },
    { question: "How can I get an IB tutor in Akot?", answer: "Tell us the programme, subject, level and target exam session. Akot has almost no local IB specialists, so we look across India for someone who has taught that very course and arrange a free video lesson. If your child does not click with the tutor, we offer another name before anything is booked." },
    { question: "Are Cambridge and Edexcel IGCSE both available for Akot students?", answer: "Yes. The tutor teaches from the code and tier on your child's entry and practises with that board's own papers, privately and live. Nobody in Akot needs to travel to Akola or Nagpur for it." },
    { question: "Will a tutor come to our house in Akot?", answer: "No. Tutors visiting homes is a Gurugram and Delhi NCR arrangement only. Akot families get online home tuition: private classes taught to your child at home through a screen, with a shared whiteboard and marked work returned digitally." },
    { question: "What is the fee for IB or IGCSE tuition in Akot?", answer: "We do not publish a rate card. The fee depends on how advanced the paper is, the tutor's experience with that syllabus, the hours you choose and how close the exam is. A written quote follows the free lesson, before any payment." },
    { question: "Is the first class really free?", answer: "Yes. Each family starts with a complimentary class on a genuine syllabus topic, and a parent may watch. Nothing is owed afterwards, and if the tutor is not a fit we can propose another first." },
    { question: "Can a tutor write or fix my child's IB IA or Extended Essay?", answer: "A tutor can explain the criteria, discuss whether a topic is workable, question the method and react to drafts the student wrote. A tutor will not write or rewrite an IA, Extended Essay or TOK piece, because the IB requires the student's own work." },
    { question: "Which IB Diploma subjects can you cover in Akot?", answer: "Maths in both courses, Physics, Chemistry, Biology, Environmental Systems and Societies, Economics, Business Management, Computer Science, English, Hindi, Marathi where offered and Theory of Knowledge guidance. Biology and Chemistry are the most requested. For an unusual subject, ask before booking." },
    { question: "Can my younger child in Akot take IB MYP or PYP help?", answer: "Yes, both are covered. PYP lessons are short and playful, building reading, phonics and number sense in English. MYP lessons train criteria-based writing and Personal Project planning. Younger students do best with brief, frequent sessions." },
    { question: "Is online tutoring reliable in Akot's heat and monsoon?", answer: "Mostly, with planning. Lessons are best placed early or late in summer, and a phone hotspot with a charged laptop protects against power cuts. A class lost to an outage can be moved without penalty." },
    { question: "How do you vet tutors?", answer: "We check degrees and recent classroom results on the named syllabus before any introduction. Your view from the trial class is a second check, and a review a few weeks in is a third." },
    { question: "When should my child in Akot start?", answer: "Ideally when the course begins, which is Class 11 for the Diploma and Grade 9 for IGCSE. Many begin later after a poor term or ahead of an assessment. A diagnostic first class helps put the remaining time where marks are being lost." },
    { question: "My child studies the Maharashtra board. Can we move to IGCSE or IB?", answer: "Often yes, best done at a natural break such as after Class 10. A tutor compares your child's current topics with the new syllabus, lists the gaps and teaches them. English writing and answer style usually need as much work as content." },
    { question: "Can lessons work around Ganeshotsav, Eid, Diwali and the state board exams?", answer: "Yes. Classes can move or pause for festivals and family travel, and can be planned to avoid clashing with local exam weeks. Share your school calendar and religious observances in the first week." },
    { question: "What if my child and the tutor do not get along?", answer: "Tell us and we will arrange another tutor. Progress is reviewed after a few weeks so a poor match is caught early. There is no lock-in and no penalty." },
    { question: "Is IB Gram linked to any Akot school, Akola university, the IB, Cambridge or Pearson?", answer: "No. IB Gram is an independent tutoring service with no partnership or endorsement arrangement with any school, university or examining body. Institutions named on this page appear for context only." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How online IB and IGCSE tuition works outside the big cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person home visits are available." },
    { label: "IB tutors", href: "/ib-tutors/", description: "The IB tutoring overview by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject choices." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, HL and SL, and the core." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between the two Maths courses." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor backgrounds by subject." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your requirement and book a free trial." },
    { label: "IB and IGCSE tutoring in Akola", href: "/akola/", description: "The district headquarters, about 45 km from Akot." },
    { label: "IB and IGCSE tutoring in Amravati", href: "/amravati/", description: "The divisional city to the north of Akot." },
    { label: "IB and IGCSE tutoring in Nagpur", href: "/nagpur/", description: "The Vidarbha city with the nearest confirmed international campuses." },
  ],

  closingHeading: "Try a free class for your child in Akot",
  closingBody:
    "Tell us the board or IB stage, the subject and level, how recent tests went and when the house is free. A tutor who has taught that syllabus replies with their history, and your child attends the first lesson at no cost. To start with IB and IGCSE tutors in Akot, email support@ibgram.com or send a WhatsApp message to +91 7439 368 115.",
};
