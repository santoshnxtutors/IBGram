import type { CitySeoPage } from "../types";

/**
 * /sivaganga/ - IB and IGCSE tutoring page for Sivaganga (Sivagangai), Tamil Nadu.
 * No school in Sivaganga or Karaikudi is confirmed for the IB or Cambridge/Edexcel IGCSE, so the page names
 * none locally, points to Madurai (about 48 km) as the nearest hub and leans on private online lessons.
 * Online only: tutors do not visit homes here, since in-person home tuition is offered only in Gurugram and
 * parts of Delhi NCR.
 */
export const sivaganga: CitySeoPage = {
  slug: "sivaganga",
  countryName: "Sivaganga",
  countryNameLong: "Sivaganga, Tamil Nadu",
  demonym: "Sivaganga",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around the October to December northeast monsoon, Pongal, Deepavali and Karthigai Deepam, the April and May heat, and your child's school day",
  lastUpdated: "2026-09-21",
  geo: { latitude: 9.8433, longitude: 78.4809 },
  wikipedia: "https://en.wikipedia.org/wiki/Sivaganga",
  alternateNames: ["Sivagangai", "Sivagangai Tamil Nadu", "Sivaganga district", "Shivaganga"],
  stripSchools: [],

  title: "IB & IGCSE Home Tuition in Sivaganga | Live Online Tutors",
  metaDescription:
    "Live one-to-one IB and IGCSE tutors for Sivaganga students, 48 km from Madurai: DP, MYP, PYP, Cambridge and Edexcel, taught online on IST, free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition in Sivaganga",
  heroEyebrow: "IB & IGCSE TUTORING FOR SIVAGANGA AND CHETTINAD FAMILIES",
  heroSubtitle:
    "Home tuition in Sivaganga for an IB or IGCSE student takes the form of a live private lesson on a laptop at home, because IB Gram tutors do not visit houses here and in-person teaching exists only in Gurugram and parts of Delhi NCR. IB and IGCSE tutors in Sivaganga teach on Indian Standard Time and are chosen for the exact syllabus, so the 48 km to the nearest IB and Cambridge schools in Madurai never has to be travelled for a lesson.",
  primaryKeyword: "IB and IGCSE tutors in Sivaganga",
  imageAltText: "Sivaganga student following a live online IGCSE Physics lesson on a laptop while a tutor explains on a shared whiteboard",
  secondaryKeywords: [
    "IB tutor Sivaganga",
    "IGCSE tutor Sivaganga",
    "IB home tuition Sivaganga",
    "IGCSE home tuition Sivaganga",
    "IB private tuition Sivaganga",
    "IB Maths tutor Sivaganga",
    "IGCSE Maths tutor Sivaganga",
    "IB Physics tutor Sivaganga",
    "IB Chemistry tutor Sivaganga",
    "IB Biology tutor Sivaganga",
    "IB DP tutor Sivaganga",
    "IB MYP tutor Sivaganga",
    "IB PYP tutor Sivaganga",
    "IGCSE online tuition Sivaganga",
    "IB tutor Sivagangai",
    "IGCSE tutor Karaikudi",
    "online IB tutor Chettinad",
    "IB tuition near Madurai",
    "IB tutor Sivaganga Tamil Nadu",
  ],

  heroTrustPoints: [
    "Lessons are live and private over video; no tutor visits homes in Sivaganga, because in-person home tuition exists only in Gurugram and parts of Delhi NCR",
    "Tutors are picked for your syllabus code, level and exam series, not for where they live",
    "A free first lesson, a written note after each session and a rate in writing before you book",
    "No link to the IB, Cambridge, Pearson or any school mentioned here",
  ],
  heroStats: [
    { value: "48 km", label: "To Madurai's IB schools" },
    { value: "PYP to DP", label: "Every IB stage" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
    { value: "Free trial", label: "Try before you pay" },
  ],

  intro: {
    heading: "IB and IGCSE study from Velu Nachiyar's town in the Chettinad country",
    paragraphs: [
      "Sivaganga, 48 km by road from Madurai, has been the headquarters of its own district since 1984 and carries real history. Velu Nachiyar, who led resistance against the British in the eighteenth century, and the Maruthu brothers who stood beside her belong to its story, and a sixteenth-century fort still stands in town. The 2011 census counted 40,403 residents and a literacy rate of 83.86 per cent. Schools teach on the Tamil Nadu State Board, Matriculation or CBSE, and none in Sivaganga has come up as an IB or Cambridge school.",
      "Education is part of daily life here. The town has a government medical college, a government arts and science college, a women's arts college and several engineering colleges, and Alagappa University at Karaikudi is close. Yet for international curricula the nearest campuses are in Madurai, with Tiruchirappalli and Chennai further off. IB and IGCSE tutors in Sivaganga step in where a family wants an international syllabus without changing address.",
      "Lessons are live and one to one over video, taught on Indian Standard Time by tutors elsewhere in India. Nobody visits Sivaganga homes, since in-person tuition exists only in Gurugram and parts of Delhi NCR, so home tuition here means private lessons taken at home, online.",
      "IB Gram is independent of the International Baccalaureate, Cambridge, Pearson and every school named on this page. Tutors teach and mark practice work but do not write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework for students.",
    ],
    bullets: [
      "IB PYP, MYP, Diploma and CP, plus Cambridge and Edexcel IGCSE",
      "Live private lessons on Indian Standard Time",
      "A free first lesson and a written rate before any commitment",
      "Short written notes after every session",
      "No home visits in Sivaganga; those run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "A Sivaganga family usually meets the IB or IGCSE through a Madurai school, an online school or a wish to keep options open for Class 9 or Class 11. This is what each stage asks of a student, with the local angle for each.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 6, ages 3-12",
      description:
        "Children aged 3 to 12 work through units of inquiry under six themes, and the last year ends with the PYP Exhibition, a self-directed project presented to the school community.",
      countryNote:
        "In Sivaganga a PYP child is often moving from Tamil-medium or Matriculation classes, so English reading stamina and the habit of asking questions come first.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subject groups from Sciences to Design are marked against stated criteria, and the programme finishes with the Personal Project. Writing to the criterion matters more than writing at length.",
      countryNote:
        "A family weighing a Madurai MYP school can use tutoring in Class 6 to 8 to see how a child copes with criteria-based work before committing to a move.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects across two years, with Theory of Knowledge, the Extended Essay and CAS alongside; most written papers arrive together in May.",
      countryNote:
        "Velammal Global School in Madurai runs the IB and Jain Vidyalaya there offers the Diploma beside CBSE, so a Sivaganga student would board or relocate for the full programme.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller pathway that pairs Diploma courses with a career-related qualification, a reflective project and service learning.",
      countryNote:
        "Uncommon in this region, so any CP plan is built around the particular school a family has chosen.",
    },
  ],

  subjectsIntro:
    "Tutor matching starts from the course code and level, then adds the exam series and your evenings. Distinct papers sit behind familiar names: Mathematics Analysis and Approaches is not Applications and Interpretation, and Higher Level Chemistry moves at another pace from Standard Level. Sivaganga's own landscape supplies useful examples for many subjects.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof for students who expect to study engineering or science. Higher Level needs patient practice on multi-step problems that do not reveal which method to use." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Statistics, probability and modelling with technology. Its exploration can be built on local data, such as rainfall records or crop prices, which keeps the topic concrete." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and energy. A solar photovoltaic project in the district gives tangible context for efficiency and energy-transfer questions, while tutors keep the maths and data-booklet skills sharp." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, stoichiometry, energetics and organic chemistry. Graphite deposits in the district make structure and properties easy to picture: why layered carbon conducts and lubricates." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology, marked against command terms. Paddy, sugarcane and groundnut fields nearby offer simple, real ecological questions for an investigation." },
    { name: "IB Economics", levels: "HL / SL", description: "Supply, demand, elasticity and policy. Sugar, rice and graphite markets supply real-world examples, and students learn to pick ones they can explain precisely." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based papers and an internal assessment built on a real organisation. Chettinad family firms, shops and mills are natural candidates if the owner agrees to help." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen commentary, comparative writing and a recorded oral. Tamil-medium students usually gain most from drilling structure and precise vocabulary." },
    { name: "IB Tamil A", levels: "HL / SL", description: "Where a school offers it, Tamil literature study rewards close reading and comparison; tutor availability for this subject should be confirmed during matching." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and object-oriented design on paper, plus a working program for the internal assessment. Lessons alternate theory with code written and debugged together." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Rainfall that falls mostly in the northeast monsoon, water storage and farming give a local basis for systems thinking, with answers kept balanced and evidence-led." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and extended essays. The Sivaganga estate, Velu Nachiyar and the nearby Keezhadi excavations can inspire questions, though sources must always be checked rigorously." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, data response and a fieldwork investigation; monsoon variability and small-town growth provide a real place for the fieldwork question." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Practice arguing a prescribed title and testing each example. The essay and exhibition remain the student's own work." },
  ],

  igcseSubjectsIntro:
    "An IGCSE match begins with board and tier, since Cambridge and Edexcel set and mark mathematics in different ways. Then comes timing: Cambridge offers February-March in India and May-June and October-November worldwide, Edexcel adds January, and the next stage may be A Level or the IB Diploma.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended covers algebra, geometry, trigonometry and statistics in depth. Clear working earns method marks even when a final slip occurs." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Same topics as Cambridge but different phrasing and sequencing, so practice should come from Edexcel papers and mark schemes." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus, logarithms and vectors ahead of the Diploma; a helpful bridge for students aiming at Higher Level Mathematics." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, electricity, waves and thermal physics with practical-skills papers; fluent equation handling saves time under pressure." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactions, the periodic table and organic basics, with practical technique taught alongside the theory." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, inheritance, ecology and human biology with long-answer technique practised from the first term." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, logic, data representation and a programming language, practised on fresh problems." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams, definitions and short evaluation answers, with current examples that connect theory to daily life." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying theory to a described firm earns marks, so sessions rehearse case answers for family-business settings too." },
    { name: "IGCSE History 0470", levels: "Grade 9-10", description: "Source questions and structured essays across a twentieth-century course, practised under timed conditions." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing, listening and speaking, suited to students moving from Tamil-medium classes to English-medium study." },
  ],

  regionsTitle: "Sivaganga town and district places our online tutors teach students from",
  regionsIntro:
    "Every lesson runs online, so these are places for context rather than travel. They show how schooling, work and connectivity differ across the district and help us plan a timetable that holds together.",
  regions: [
    { name: "Sivaganga fort and town centre", note: "The sixteenth-century fort and the Rajarajeshwari Amman temple sit inside town; central households combine State Board, Matriculation and CBSE schools with after-school tuition." },
    { name: "Alangara Annai Cathedral side", note: "The seat of the diocese and a landmark for its fish-shaped design; Christmas and Lent shape the calendar for many families nearby." },
    { name: "Karaikudi", note: "The district's most populous city and the heart of Chettinad, known for its mansions and for Alagappa University close by." },
    { name: "Devakottai", note: "A municipality in the Chettinad belt, where families with business links abroad may already think in terms of international qualifications." },
    { name: "Manamadurai", note: "A railway junction town whose trains link Sivaganga to Madurai and beyond, handy when a family visits schools in other cities." },
    { name: "Ilayangudi", note: "A municipality in the southern part of the district, where fixed broadband can vary and a mobile backup is wise." },
    { name: "Kalayarkoil", note: "Home to an ancient Pandiyan-style Eswar temple; students here reach town schools by road, and evening online lessons avoid a second trip." },
    { name: "Padamathur", note: "The location of a large sugar factory near the town; households tied to agriculture plan study around crushing season and harvest weeks." },
    { name: "Idaikattur and Siravayal", note: "Villages with a well-known church and a famous Pongal-season bull-taming event; festival weeks here are livelier than anywhere else in the district." },
    { name: "Madurai", note: "About 48 km away, with the nearest confirmed IB and IGCSE schools; a useful benchmark when weighing a move." },
  ],

  schoolDisclaimer:
    "Nothing here is a recommendation, only a record of what could be confirmed. IB Gram is an independent tutoring service with no connection to the International Baccalaureate, Cambridge, Pearson or any school, so always check a school's current authorisation and intake with the school directly.",
  schoolClusters: [
    {
      city: "Sivaganga and Karaikudi",
      note: "Schools here follow the Tamil Nadu State Board, Matriculation or CBSE. None has been confirmed for the IB or Cambridge or Edexcel IGCSE.",
      schools: [],
    },
    {
      city: "Nearby: Madurai (about 48 km)",
      note: "Velammal Global School (IB, day-cum-boarding), Jain Vidyalaya (CBSE and IB Diploma), Vikaasa World School (IGCSE, ICSE and ISC) and Triveni School (ICSE and IGCSE to Class 9) are the confirmed options; the distance usually means boarding or a move.",
      schools: ["Velammal Global School", "Jain Vidyalaya", "Vikaasa World School", "Triveni School"],
    },
    {
      city: "Nearby: Tiruchirappalli (about 130 km)",
      note: "Reachable on the branch line via Karaikudi, with one Cambridge IGCSE school named on our Trichy page.",
      schools: ["Alpha Cambridge International School"],
    },
    {
      city: "Further: Chennai (about 449 km)",
      note: "Tamil Nadu's widest choice of IB and IGCSE campuses, several with boarding, relevant mainly to families considering a full move.",
      schools: ["Gateway International School", "APL Global School"],
    },
  ],

  modesIntro:
    "The format is the same for every Sivaganga family: one student, one tutor, live on video, with the tutor based elsewhere in India on the same clock. Families differ in how much they need and when. Nobody visits Sivaganga homes; home visits run only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "One student, one tutor, live on screen",
      description:
        "A fixed weekly time, a video call and a shared digital whiteboard, with the tutor working through your child's own syllabus and past papers. It is private tuition at home without anyone at the door.",
      bullets: [
        "Tutor chosen for the exact board, code and level",
        "Worked examples and marked questions in every lesson",
        "Slots after school or at weekends",
        "One tutor throughout unless you ask for a swap",
      ],
    },
    {
      title: "Term-long support with a written record",
      description:
        "Lessons run through the school term, each followed by a brief note on what was covered, what went wrong and what is next, plus a fuller check-in every few weeks.",
      bullets: [
        "Notes parents can read in a minute",
        "Targets tied to syllabus topics",
        "Good for MYP and steady Diploma subjects",
        "A second weekly slot can be added before mocks",
      ],
    },
    {
      title: "Exam-window sprints",
      description:
        "Short, intense runs of lessons before a mock or an exam series, working timed papers that are marked against the current scheme and planned around Pongal or Deepavali.",
      bullets: [
        "Timed papers with quick feedback",
        "Weak topics ranked by marks at stake",
        "Planned around festival weeks and monsoon days",
        "Best started two to three weeks before the series",
      ],
    },
  ],

  sections: [
    {
      heading: "What does schooling look like around Sivaganga, and where are the nearest IB and IGCSE schools?",
      paragraphs: [
        "Around Sivaganga almost every school follows the Tamil Nadu State Board, Matriculation or CBSE, and none in town or in Karaikudi has been confirmed for the IB or Cambridge IGCSE. The nearest confirmed campuses are in Madurai, about 48 km away: Velammal Global School (IB), Jain Vidyalaya (CBSE and IB Diploma), Vikaasa World School (IGCSE, ICSE and ISC) and Triveni School (ICSE and IGCSE to Class 9).",
        "A daily commute of that length is realistic only for the very determined, so a Madurai campus usually means boarding or a family move. Velammal Global School is listed as day-cum-boarding, which suits families who want a hostel option; the others are day schools, so a move or a long road journey would be needed.",
        "Tiruchirappalli, about 130 km away by rail, and Chennai at 449 km offer more choice, but those are relocation-scale decisions. Most families weigh them only after a child has shown that they enjoy and cope with criteria-based, project-heavy study.",
        "That is why online tutoring from home is a practical first step: it lets a family test how a child responds to IB or IGCSE teaching, command terms and internal assessment, without changing address or paying boarding fees for an unproven fit.",
      ],
      table: {
        caption: "Sivaganga and its nearest IB and IGCSE options",
        columns: ["Place", "Distance from Sivaganga", "Confirmed IB or IGCSE schools", "What it means"],
        rows: [
          ["Sivaganga and Karaikudi", "Local", "None confirmed", "Online tuition beside a State Board, Matriculation or CBSE school"],
          ["Madurai", "About 48 km by road", "Velammal Global School, Jain Vidyalaya, Vikaasa World School, Triveni School", "Boarding or a move; the nearest real classroom option"],
          ["Tiruchirappalli", "About 130 km by rail", "One Cambridge IGCSE school reported", "Longer journey; a relocation decision"],
          ["Chennai", "About 449 km", "Several IB and IGCSE campuses", "Full move or boarding for senior years"],
        ],
      },
      bullets: [
        "No IB or IGCSE school is confirmed in Sivaganga or Karaikudi",
        "Madurai, about 48 km away, has four confirmed international-board schools",
        "Velammal Global School is listed as day-cum-boarding",
        "Online lessons let a family test the fit before moving",
      ],
    },
    {
      heading: "Tamil Nadu State Board, Matriculation, CBSE, IGCSE or IB: which route fits a Sivaganga family?",
      paragraphs: [
        "It depends on the destination. The State Board and CBSE are built for Indian entrance routes such as TNEA and NEET, IGCSE is a two-year Grade 10 qualification that leads on to A Level or the IB, and the IB Diploma suits students who want breadth and a document recognised abroad.",
        "In Tamil Nadu, Class 10 and Class 12 end with public examinations, and Class 12 marks in Physics, Chemistry and Mathematics feed the TNEA rank list for engineering. The old Matriculation stream now follows the same Samacheer Kalvi syllabus as the State Board, so the real choice for most families is between that common syllabus, CBSE and the international boards.",
        "IGCSE papers are set and marked externally, with Core and Extended tiers in most Cambridge subjects and a practical or alternative-to-practical element in the sciences. Because it stops at Grade 10, it works best as a foundation for the Diploma or A Level, or as an enrichment route alongside an Indian board.",
        "The IB Diploma asks for six subjects, an Extended Essay, TOK and CAS, with internal assessments as well as May papers. It rewards steady work through two years and gives a student more control over subject mix than a Plus Two stream does.",
      ],
      table: {
        caption: "Routes compared for a Sivaganga student",
        columns: ["Feature", "State Board and Matriculation", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["What it leads to", "TNEA, NEET and state colleges", "JEE, NEET and CUET", "A Level, IB or an Indian board", "Universities in India and abroad"],
          ["How marks are earned", "Public exams at Class 10 and 12", "Board exams at Class 10 and 12", "External papers at Grade 10", "Papers plus internal assessments"],
          ["Language of study", "Tamil or English medium", "Mostly English medium", "English", "English, with home-language options"],
          ["Around Sivaganga", "Widely available", "Check nearby schools directly", "Private candidates and online tutors", "Online, or boarding in Madurai"],
        ],
      },
      bullets: [
        "The Matriculation stream now follows the Samacheer Kalvi syllabus",
        "Class 12 marks drive TNEA ranks for engineering",
        "IGCSE is a stepping stone, not an end point",
        "The IB gives breadth and recognition abroad",
      ],
    },
    {
      heading: "Who looks for IB and IGCSE tutors around Chettinad and Sivaganga?",
      paragraphs: [
        "Mainly families with a reason to think beyond a single state or exam: Chettinad business households, doctors and lecturers on government postings, returnees from abroad, and parents aiming at a Madurai IB campus. The district has no IB or Cambridge school of its own, so each of them ends up meeting tutors on screen.",
        "Chettinad is the homeland of the Nattukottai Chettiars, whose family firms built banking and trading networks across Sri Lanka, Burma and Malaya. Some district families still have relatives in Singapore, Malaysia or the Gulf, and an IB or IGCSE qualification, read easily in those countries, can feel natural to them.",
        "The medical college, the arts colleges and the engineering colleges bring doctors, lecturers and their families, who move on government or institutional postings. For them, a syllabus that is taught much the same way in many cities is attractive, and a tutor who stays constant between postings adds stability.",
        "A further group is simply ambitious: parents who want a child ready for a Madurai or Chennai IB campus from Class 9 or Class 11, or who want an IGCSE subject to broaden a State Board profile. For them, early groundwork in Mathematics, sciences and English makes every later step easier.",
      ],
      table: {
        caption: "Who asks about IB and IGCSE tutoring around Sivaganga",
        columns: ["Household", "Background", "What they ask first"],
        rows: [
          ["Chettinad business families", "Trading or banking roots, some with relatives in Southeast Asia or the Gulf", "Economics, Business Management or Mathematics"],
          ["Doctors and lecturers on postings", "Posted to the medical college or local colleges", "Continuity in subjects a child already studies"],
          ["Returnees from abroad", "Children who studied a British or international curriculum elsewhere", "Matching the old syllabus and level"],
          ["Families aiming at Madurai", "Preparing for Class 9 or Class 11 entry", "Foundations in Mathematics, sciences and English"],
        ],
      },
      bullets: [
        "Chettinad's overseas trading history shapes many family outlooks",
        "College staff families move on postings and value portability",
        "Returnees need continuity with a previous syllabus",
        "Madurai-bound students use tutoring to prepare early",
      ],
    },
    {
      heading: "How is the fee for IB or IGCSE tuition decided for Sivaganga students?",
      paragraphs: [
        "Four levers set the quote: the programme and level, the subject, how long and how often lessons run, and the tutor's recent experience with your exact specification. There is no published rate card; after a free trial you receive a written figure, so you know the cost before committing.",
        "Level matters because a Higher Level Diploma course or an Extended IGCSE tier calls for a tutor who has recently taught that material, and such tutors are fewer than those who can help with an earlier-year class. Subject matters for the same reason: a rare combination, such as Computer Science HL or Tamil A, has a thinner pool.",
        "Frequency changes the picture too. One lesson a week suits steady support, while a short intensive run before a mock suits revision, and each is priced for what it asks of the tutor. A longer plan usually lets the tutor spot patterns in mistakes, which is where much of the value lies.",
        "Travel is not part of the cost, because lessons happen on screen. The quote does not depend on whether a student lives in Sivaganga or another town, and families can compare it against the real alternatives: boarding fees in Madurai, or the cost of moving for a school year.",
      ],
      bullets: [
        "Programme, level, subject and tutor experience set the quote",
        "Rare subject combinations have smaller tutor pools",
        "Weekly support and exam sprints are priced differently",
        "No travel charge, and the rate comes in writing first",
      ],
    },
    {
      heading: "Online lessons, Madurai classes, Karaikudi teachers or self-study: which suits IB and IGCSE?",
      paragraphs: [
        "For these syllabuses, private online lessons usually fit best, since the scarce thing is knowledge of the specification, not a room to sit in. Madurai's coaching and tuition scene, like Karaikudi's, is built around the Tamil Nadu State Board, CBSE, TNEA and NEET, which is a different target from an IB or Cambridge paper.",
        "Distance adds up. Forty-eight kilometres each way to Madurai makes a weekly class a long day, and a hostel move for extra tuition is a large commitment. An online lesson at home puts every minute into the subject and is easy to reschedule around monsoon weather.",
        "Local teachers are valuable for confidence, discipline and exam habits at school level. Few have marked IB Internal Assessments or know how Cambridge and Edexcel allocate marks, which is where an international syllabus is won or lost.",
        "Self-study works best for IGCSE, where past papers are plentiful. The weak spots are honest marking of extended answers, guidance on internal assessment and a check on whether Core or Extended is the right tier.",
      ],
      table: {
        caption: "Support options for IB and IGCSE around Sivaganga",
        columns: ["Option", "Fit with IB or IGCSE", "Travel", "Strength", "Gap"],
        rows: [
          ["Online private tutor", "Matched to the exact syllabus", "None", "Depth, marked practice, exam technique", "Needs reliable internet"],
          ["Madurai or Karaikudi coaching", "Built for State Board, TNEA and NEET", "About 48 km to Madurai", "Entrance-test preparation", "No IB or IGCSE batches"],
          ["Local school teacher", "Usually State Board or CBSE", "Short", "Habits and confidence", "Little IB or Cambridge marking experience"],
          ["Self-study", "Depends on the student", "None", "Past-paper practice", "No marking of essays or drafts"],
        ],
      },
      bullets: [
        "Madurai coaching targets state entrance routes, not IB papers",
        "Forty-eight kilometres each way makes weekly classes a long day",
        "Local teachers build habits but rarely know IB criteria",
        "Self-study needs outside marking for long answers",
      ],
    },
    {
      heading: "Northeast monsoon, Pongal and Deepavali: how the Sivaganga year shapes IB and IGCSE study",
      paragraphs: [
        "IB Diploma papers are written in May, with results in July, plus a November session with results in January. Cambridge IGCSE runs February-March in India, May-June and October-November, and Edexcel adds January. Exact dates and entry deadlines come from the school or exam centre.",
        "Sivaganga's rain arrives mostly with the northeast monsoon from October to December, and the town averages about 931 mm a year. That lands squarely on the autumn exam series and the IB November session, so storms and power cuts are a real planning factor, not an exception. Summers are hot, with April and May the hardest months.",
        "The festival year is full. Pongal in January brings several days of holiday and, around Siravayal, bull-taming events; Tamil New Year and the Chithirai festival in Madurai fall in April and May, Vinayagar Chaturthi draws crowds to Pillaiyarpatti in August or September, and Deepavali and Karthigai Deepam follow in autumn. Christmas and Ramzan matter to many neighbours.",
        "A workable plan front-loads practice before storm season, keeps lessons light around Deepavali and Pongal, and finishes mocks ahead of the autumn series. Diploma students also need slots for Class 11 internal exams, IA deadlines in Class 12 and predicted grades in autumn.",
      ],
      table: {
        caption: "A year of study in Sivaganga",
        columns: ["Period", "Local conditions and exams", "Study plan"],
        rows: [
          ["January", "Pongal holidays and Siravayal events; Edexcel January series", "Short sprints before the series; keep holiday days free"],
          ["February to March", "Board exams; Cambridge India series", "Past-paper blocks and exam-technique drills"],
          ["April to May", "Heat, Tamil New Year and Chithirai; IB May papers; Cambridge May-June series", "Early-morning or evening lessons; expect busy roads around festivals"],
          ["June to August", "Southwest winds and dry spells; IB results in early July", "Post-result review; bridge lessons for Class 11 starters"],
          ["September to November", "Vinayagar Chaturthi, Deepavali, Karthigai Deepam and the northeast monsoon; autumn series and IB November session", "Finish mocks early; keep a backup slot for storm days"],
          ["December", "Final monsoon weeks, Christmas, winter holidays", "A compact revision block and a fresh plan for January"],
        ],
      },
      bullets: [
        "IB papers in May and November; results in July and January",
        "Rain arrives mostly from October to December, close to the autumn exams",
        "Pongal, Deepavali and Karthigai Deepam are real breaks",
        "A backup slot for storm days keeps a plan steady",
      ],
    },
    {
      heading: "Where can Sivaganga students go after IB or IGCSE?",
      paragraphs: [
        "Closer to home, the options include the Government Sivagangai Medical College through NEET-UG counselling, engineering colleges in and around the district through TNEA, and universities such as Alagappa University in Karaikudi and Madurai Kamaraj University. Further afield, NIT Tiruchirappalli, Anna University and IIT Madras draw engineers.",
        "For Indian routes an IB or IGCSE-based record usually needs an equivalence certificate from the Association of Indian Universities, and TNEA, NEET and CUET-UG each publish their own subject and eligibility rules. Read the current notification, and keep Physics, Chemistry, Mathematics or Biology and English on the Class 12 record where the goal demands it.",
        "Overseas, the links are old. Chettinad's trading families have long ties with Sri Lanka, Malaysia and Singapore, and Singapore, the UK, Canada and Australia all read IB Diploma results well. UK offers rest on predicted grades sent in autumn of Class 12; North American universities may add SAT or ACT scores.",
        "Tutoring supports the subject side: depth, technique, predicted grades. It does not replace counselling on applications, and we say plainly what a particular course generally asks for so lesson time goes where it counts.",
      ],
      table: {
        caption: "Next steps after IB or IGCSE, seen from Sivaganga",
        columns: ["Goal", "Main route", "Check before Class 11"],
        rows: [
          ["Medicine", "NEET-UG and Tamil Nadu or national counselling", "Physics, Chemistry, Biology and English on the record; state rules"],
          ["Engineering in Tamil Nadu", "TNEA, JEE Main for NITs, JEE Advanced for IITs", "Eligibility for IB or IGCSE-based records; subject requirements"],
          ["Arts, science or commerce degrees", "CUET-UG or a university's own process, with AIU equivalence", "Each university's current subject rules"],
          ["A degree abroad", "Predicted IB grades or IGCSE results, plus any tests required", "Deadlines, language tests and country rules"],
        ],
      },
      bullets: [
        "A medical college in town, and engineering colleges nearby",
        "Alagappa and Madurai Kamaraj universities serve the region",
        "AIU equivalence and subject mix matter for Indian routes",
        "Singapore, the UK and North America all read the IB well",
      ],
    },
    {
      heading: "IB Maths, sciences and IGCSE tiers: how tutors plan them for Sivaganga students",
      paragraphs: [
        "Engineering and science aspirants usually lean toward Mathematics Analysis and Approaches, while students heading to economics, business or psychology may prefer Applications and Interpretation. The decision is best made early in Class 11, because the two courses drift apart quickly and a late switch costs months.",
        "In the sciences, tutors help a student turn the district's real features into workable investigations: graphite structure, the output of a solar installation, or rainfall and crop data. A good question can be answered with equipment and data within reach, and the student does all the planning, analysis and writing.",
        "For IGCSE, tier sets the ceiling. At Cambridge, Core papers cap grades at C and Extended opens A* and A, so a student who may take the subject at IB Higher Level or A Level should sit Extended. Edexcel's Foundation and Higher tiers follow a similar logic.",
        "Private candidates should book an exam centre early, since the nearest approved ones may be in Madurai or Chennai, and confirm entry deadlines ahead of each series. Tutors prepare the student; the centre handles registration.",
      ],
      bullets: [
        "Choose between Analysis and Approaches and Applications and Interpretation early",
        "Local features can inspire investigations, but the student does the work",
        "Extended tier keeps later Higher Level options open",
        "Private candidates should secure an exam centre well ahead",
      ],
    },
  ],

  tutorsIntro:
    "Meet the tutors for Sivaganga students: matched on board, course code and exam series from across India, with a free first lesson before any commitment.",

  process: [
    { title: "Share the brief", description: "Board or programme, subject, level, recent grades and the hours your family can offer." },
    { title: "Review the shortlist", description: "Tutors who have taught that exact course, each with a short note on why they suit." },
    { title: "Take a free lesson", description: "A live session on a real syllabus topic, with nothing to pay and nothing to sign." },
    { title: "Settle the plan in writing", description: "Topics, weekly slot and rate are put on paper before lessons begin." },
    { title: "Review as you go", description: "Notes after each lesson, a longer review every few weeks, and a swap if it is not working." },
  ],

  whyPoints: [
    { title: "Specialists without the 48 km", description: "Madurai's schools stay a benchmark, but your child's tutor needs no journey." },
    { title: "Matched on the syllabus", description: "Board, code and level decide the shortlist, not the city." },
    { title: "Trial before trust", description: "A free lesson shows the teaching style before any commitment." },
    { title: "Your child's work stays theirs", description: "Coaching on coursework never turns into writing it." },
    { title: "Readable progress notes", description: "A short note after each session tells parents what happened." },
    { title: "Flexible by design", description: "No school tie, no long contract and a simple tutor change." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Sivaganga?", answer: "None has been confirmed in Sivaganga or Karaikudi. Local schools teach the Tamil Nadu State Board, Matriculation or CBSE. The nearest confirmed IB and IGCSE schools are in Madurai, about 48 km away, so families usually study these syllabuses through an online school or private tuition." },
    { question: "Which IB and IGCSE schools are nearest to Sivaganga?", answer: "In Madurai: Velammal Global School (IB, day-cum-boarding), Jain Vidyalaya (CBSE and IB Diploma), Vikaasa World School (IGCSE, ICSE and ISC) and Triveni School (ICSE and IGCSE to Class 9). Check each school's current programmes, intake and boarding with the school itself before making plans." },
    { question: "Will a tutor come to my house in Sivaganga?", answer: "No. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. In Sivaganga, every lesson is online, live and one to one, so it is private tuition at home on your own laptop, with a shared whiteboard standing in for the tutor's desk." },
    { question: "Can a Sivaganga student commute to Madurai for school?", answer: "It is possible only for the most determined, since Madurai is about 48 km away. Most families consider boarding, and Velammal Global School is listed as day-cum-boarding, or a move. Start online first if you want to test whether the IB or IGCSE suits your child." },
    { question: "How much does IB or IGCSE tuition cost in Sivaganga?", answer: "It depends on programme, level, subject, session length and the tutor's recent experience with the syllabus. IB Gram publishes no price list; after the free lesson you get a written rate, and distance makes no difference. Nothing is added for travel, since lessons happen on screen." },
    { question: "Can my child keep the State Board and add IGCSE subjects?", answer: "Yes. Many students take one or two IGCSE subjects, often Mathematics or a science, privately beside their regular school timetable. Register with an approved exam centre early, and let the tutor prepare your child for the papers while the school routine continues." },
    { question: "What about TNEA and NEET if my child studies IB or IGCSE?", answer: "Both have published eligibility rules, and they can change, so read the current notifications. IB and IGCSE-based records usually need equivalence, and NEET expects Physics, Chemistry, Biology and English. A tutor teaches the subjects; counselling rules come from the official notices." },
    { question: "Will a tutor write the Internal Assessment or Extended Essay?", answer: "No. Tutors coach and explain, but the assessed work is always the student's own. They can help narrow a question, unpack a criterion, check a method and give candid feedback on a draft, including an investigation inspired by something local such as graphite or rainfall." },
    { question: "How do lessons cope with monsoon power cuts?", answer: "The slot simply moves to another time that week. Keep a charged phone as a hotspot, and tell us which weeks in October to December are worst so regular lessons can sit in steadier hours and a backup slot can be agreed in advance." },
    { question: "Can tutors help with Tamil as a language option?", answer: "Most tutoring is in English-medium subjects. Support for Tamil A depends on tutor availability and should be raised at the start, so it can be checked while the shortlist is prepared. English, Mathematics and the sciences are always covered." },
    { question: "Which programmes and boards can tutors cover?", answer: "IB PYP, MYP, Diploma and CP, and Cambridge and Pearson Edexcel IGCSE. Tutors are matched to the exact subject and level, for example IB Chemistry HL for May or IGCSE Mathematics 0580 Extended for the October-November series." },
    { question: "When should we start?", answer: "At the start of the course if possible, Class 9 for IGCSE and Class 11 for the Diploma, since early months are the easiest place to close gaps. A later start still works when lessons focus narrowly on past papers and topics that carry the most marks." },
    { question: "Does IB or IGCSE help with study in Singapore, Malaysia or the UK?", answer: "Yes, both are widely recognised, and IB Diploma results are read easily across Singapore and the UK. Offers rest on predicted grades and on each country's own rules. Tutors strengthen subject grades and exam technique; application and testing strategy sit outside our lessons." },
    { question: "How do sessions fit around Pongal, Deepavali and the northeast monsoon?", answer: "Lesson times are set with your family. Pongal and Deepavali count as real breaks, storm-prone weeks get a backup slot, and heavy practice is placed before them. April and May lessons move away from the afternoon heat, and extra slots before exams are simple to add." },
    { question: "What happens in the free first lesson?", answer: "Your child tackles a real topic from their syllabus with the proposed tutor, live on video, at no cost. Afterwards you see a short plan and a written rate, with no obligation. If the style does not suit, you can ask for a different tutor." },
    { question: "What if the tutor is not the right fit?", answer: "Tell us and we arrange a replacement without penalty. The short notes after each lesson and the reviews every few weeks make it easy to see whether the pace and style are working before problems build up." },
    { question: "How do I get started from Sivaganga?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board or programme, subject, level and the hours that suit you. We reply with tutor profiles and a time for the free lesson." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "An overview of private online matching for families in cities and towns everywhere." },
    { label: "Gurgaon home tuition", href: "/gurgaon/", description: "Where home visits are still offered, in parts of Delhi NCR." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, the core components and how internal assessments are marked." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, approaches to learning and the Personal Project." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject choices from Grade 9." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "How to choose between the two Mathematics routes." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles sorted by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and arrange a free first lesson." },
    { label: "IB and IGCSE tutoring in Madurai", href: "/madurai/", description: "The nearest city with confirmed IB and IGCSE schools, about 48 km away." },
    { label: "IB and IGCSE tutoring in Pudukkottai", href: "/pudukkottai/", description: "A neighbouring district town, served through the same online approach." },
    { label: "IB and IGCSE tutoring in Paramakudi", href: "/paramakudi/", description: "South of Sivaganga, with the same syllabus-first matching." },
    { label: "IB and IGCSE tutoring in Tiruchirappalli", href: "/tiruchirappalli/", description: "The larger city to the north, reachable on the branch line." },
  ],

  closingHeading: "Book a free first lesson with an IB or IGCSE tutor for your Sivaganga student",
  closingBody:
    "Share the board or programme, subject and level, the latest grade and the hours your family can offer. We send back tutor profiles and trial slots that allow for monsoon weeks, Pongal and Deepavali, all live, private and online, free of charge and with nothing to sign. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
