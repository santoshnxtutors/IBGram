import type { CitySeoPage } from "../types";

/**
 * /nuzvid/ - IB and IGCSE tutoring page for Nuzvid (Eluru district, Andhra Pradesh). No IB or Cambridge/Edexcel
 * school is confirmed in Nuzvid; clusters point to Vijayawada, Hyderabad and Visakhapatnam, reusing names already
 * on neighbouring pages. No in-person home tuition outside Gurugram / Delhi NCR.
 */
export const nuzvid: CitySeoPage = {
  slug: "nuzvid",
  countryName: "Nuzvid",
  countryNameLong: "Nuzvid, Andhra Pradesh",
  demonym: "Nuzvid",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  flagCode: "in",
  countryCode: "IN",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Timings bend around mango season on family orchards, summer heat, the Dasara and Sankranti breaks and whatever rhythm a university campus household keeps",
  lastUpdated: "2026-09-21",
  geo: { latitude: 16.7883, longitude: 80.8463 },
  wikipedia: "https://en.wikipedia.org/wiki/Nuzvid",
  alternateNames: ["Nuziveedu", "Nuzividu"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Nuzvid | Online One-to-One Tuition",
  metaDescription:
    "IB and IGCSE tutors for Nuzvid families, taught live online one-to-one: DP, MYP, Cambridge and Edexcel IGCSE, tuned to mango season, plus a free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition in Nuzvid",
  heroEyebrow: "IB & IGCSE TUITION FROM HOME FOR NUZVID STUDENTS",
  heroSubtitle:
    "Want private IB or IGCSE tuition at home in Nuzvid? Tutors do not call at the door, but a specialist can teach your child live, one-to-one, through a laptop in your own house. Nuzvid's schools follow the Andhra Pradesh state syllabus or CBSE, so anyone aiming at an IB or Cambridge qualification builds it online, often next to a school in Vijayawada or ahead of a move.",
  primaryKeyword: "IB and IGCSE tutors in Nuzvid",
  imageAltText: "A Nuzvid teenager revising IB Economics diagrams on a laptop while an online tutor explains a point",
  secondaryKeywords: [
    "IB tutor Nuzvid",
    "IGCSE tutor Nuzvid",
    "IB home tuition Nuzvid",
    "IGCSE home tuition Nuzvid",
    "IB private tuition Nuzvid",
    "IB Maths tutor Nuzvid",
    "IGCSE Maths tutor Nuzvid",
    "IB Physics tutor Nuzvid",
    "IB Chemistry tutor Nuzvid",
    "IB Biology tutor Nuzvid",
    "IB DP tutor Nuzvid",
    "IB MYP tutor Nuzvid",
    "IB PYP tutor Nuzvid",
    "IGCSE online tuition Nuzvid",
    "online home tuition Nuzvid Eluru district",
    "IB tutor Nuziveedu",
    "IGCSE tutor Nuzvid Vijayawada",
    "Cambridge IGCSE private candidate Nuzvid",
    "IB tutor Mylavaram Nuzvid",
  ],

  heroTrustPoints: [
    "Tutors assigned by exact course code, level and exam session rather than a loose subject label",
    "Every class is live on screen; nobody visits a Nuzvid home, since home visits are limited to Gurugram and parts of Delhi NCR",
    "A full first lesson with no fee attached",
    "No ties to the IB, Cambridge, Pearson Edexcel or any school named here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Primary to Diploma support" },
    { value: "Cambridge + Edexcel", label: "Two IGCSE boards taught" },
    { value: "IST", label: "One time zone for everyone" },
    { value: "Free trial", label: "The first class costs nothing" },
  ],

  intro: {
    heading: "IB and IGCSE help for families in and around Nuzvid",
    paragraphs: [
      "Nuzvid is best known for its mangoes and for the university campus that draws students from across the state, yet its schools teach the Andhra Pradesh syllabus and CBSE. Anyone who wants IB or IGCSE credentials for a child has to work around that, and in practice the workaround is a tutor who teaches the exact syllabus online while the child continues at home or at a school elsewhere.",
      "The families who write to us are varied. Orchard owners and traders who export fruit and think in terms of international markets. Lecturers and staff at the nearby university whose children might one day study overseas. Parents with relatives in the Gulf, the US or Australia. And households in Vijayawada's catchment who are simply comparing options and want to see whether the IB suits a child before committing to a move.",
      "What happens in a session is plain: video, a shared writing space, a timed past paper and feedback on each answer. The tutor is India-based and teaches in IST, and because nobody is travelling, the choice is made on subject expertise alone. A small town is no handicap when the tutor could be in any city.",
      "IB Gram is independent. It is not connected to the IB, Cambridge, Pearson Edexcel or any school, and its tutors never write a student's IA, Extended Essay, TOK essay or coursework. They teach, question, correct and mark.",
    ],
    bullets: [
      "IB PYP, MYP and DP plus Cambridge and Edexcel IGCSE",
      "Useful for private candidates, boarders and families about to move",
      "Live one-to-one video lessons in IST",
      "Free trial class and a written note after each session",
      "Online only in Nuzvid; in-person tuition exists only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "No school in Nuzvid teaches these four programmes that we can confirm, so they reach a child by a different road: boarding in a bigger city, a family relocation or private study. A tutor's job varies from stage to stage.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Primary-age IB learners work through themed units of inquiry and a final group Exhibition, rather than a run of isolated subjects. A tutor supports reading, number confidence and the habit of explaining why an answer makes sense.",
      countryNote:
        "PYP requests linked to Nuzvid typically come from families expecting a move to Vijayawada, Hyderabad or abroad, who want their child comfortable with inquiry-based learning first.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP grades use four criteria per subject, and students finish with a Personal Project. The hard part is seldom content; it is writing answers that visibly meet each criterion, and that is what practice with a tutor builds.",
      countryNote:
        "For a Nuzvid student, MYP help usually means moving from textbook-based state syllabus habits to explanation, investigation and self-assessment, often in a second language of study.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects across Higher and Standard Level, complete TOK, the Extended Essay and CAS, and sit final papers mainly in May. Internal Assessments contribute a real share of each subject's grade.",
      countryNote:
        "Nuzvid DP students are mostly boarding or relocated to Vijayawada, Hyderabad or further, and use tutoring for the subjects that demand the most: Maths, Physics, Chemistry and Economics.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP pairs at least two DP courses with a career-related study, a reflective project and skills for work. It is offered in few Indian schools, but its DP subjects need the same depth of teaching as in the full Diploma.",
      countryNote:
        "CP enquiries from Nuzvid are very uncommon and are treated as requests for help with individual Diploma courses.",
    },
  ],

  subjectsIntro:
    "Start with the exact course, level and session. Then we look for a tutor with that precise background, and find a weekly slot that works around a Nuzvid school day, university-campus timetable or orchard season.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof at pace; HL students must practise problems with no familiar pattern." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology; the exploration benefits from real data, such as orchard yields or local rainfall." },
    { name: "IB Physics", levels: "HL / SL", description: "Quantitative problem-solving from mechanics to fields, with an investigation designed around measurements a student can make." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Moles, equilibria, bonding and organic mechanisms, with data-booklet fluency built in the first term." },
    { name: "IB Biology", levels: "HL / SL", description: "A big syllabus held together by command terms, data questions and careful experimental design." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams with real examples; Nuzvid's mango trade and export logistics give genuine material for market and trade questions." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study analysis, financial tools and an internal research project built on a real business." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis, comparative essays and a spoken oral, each rehearsed on its own." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory on paper, plus a substantial software project built and documented by the student." },
    { name: "IB Psychology", levels: "HL / SL", description: "Named studies used as evidence, with structured and balanced evaluation." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems and sustainability, using Krishna river and delta examples where the syllabus allows." },
    { name: "IB Hindi B and Telugu", levels: "HL / SL", description: "Language courses in which speaking confidence and text-type writing are built gradually over the two years." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Coaching on examining claims and constructing arguments, never on writing the essay for the student." },
  ],

  igcseSubjectsIntro:
    "For most Nuzvid students the IGCSE is the practical entry point, because Cambridge takes private candidates through approved centres and an India-based tutor can teach the whole course. Edexcel goes through its own centres, so we confirm the board, then the tutor.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Method marks reward full working, so writing every line is the simplest upgrade." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "An early start on calculus and trigonometry, a good bridge to IB Maths Analysis or A Level." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Content close to Cambridge, but phrased differently, so Edexcel papers are the right practice." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equations, graphs and the alternative-to-practical paper, practised from data sets." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Quantitative chemistry, rates and organic basics, with balanced equations written accurately." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Processes explained in sequence and data interpreted carefully." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, diagrams and judgement, with evaluation questions rehearsed under time." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, networks and number systems, with programming built from short exercises." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Writing tasks practised under time and revised from feedback." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, trial balances and final accounts, which suit students from trading and business families." },
  ],

  regionsTitle: "Nuzvid areas and neighbours our online tutors work with",
  regionsIntro:
    "Because each lesson is online, where a family lives in the Nuzvid area affects the schedule, not a tutor's travel. What matters is school distance, mango season, campus routines and the strength of the home connection.",
  regions: [
    { name: "Nuzvid town centre", note: "The market, bus stand and older homes; families here tend to be business owners and long-standing residents." },
    { name: "RGUKT campus surroundings", note: "Households linked to the Rajiv Gandhi University of Knowledge Technologies, with academic parents and more exposure to international study routes." },
    { name: "Sugar factory side", note: "An older working neighbourhood with a mix of employees and agricultural families." },
    { name: "Hanuman Junction side", note: "Families who travel by train, since the railway junction is around 20 km away, and who plan sessions after the return journey." },
    { name: "Chatrai", note: "A nearby mandal with agricultural households, where mango and other orchard seasons set the routine." },
    { name: "Musunuru", note: "A rural mandal where home internet may be patchy; a mobile backup is advisable." },
    { name: "Agiripalli", note: "An adjoining mandal on the road to Vijayawada, popular with families who shuttle to the larger city." },
    { name: "Vissannapeta", note: "A mandal town to the north-west, where families think of Khammam and Vijayawada equally." },
    { name: "Mylavaram", note: "A larger neighbouring town with its own school cluster and an overlap of families in the same catchment." },
    { name: "Gannavaram", note: "The area around Vijayawada's airport, with relocating professionals and a stronger awareness of international schools." },
  ],

  schoolDisclaimer:
    "The schools named below are given only as geographical context for families near Nuzvid. IB Gram is independent and has no partnership with, endorsement from or payment arrangement with any school, the International Baccalaureate, Cambridge or Pearson Edexcel, and a name here is not a recommendation.",
  schoolClusters: [
    {
      city: "Nuzvid itself",
      note: "We could not confirm an IB or Cambridge/Edexcel IGCSE school in Nuzvid; schools in town teach the state syllabus and CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Vijayawada",
      note: "The closest large city, about 50 km away, with limited international-curriculum options; the one we could confirm is a primary IB school, so older students look elsewhere.",
      schools: ["Bloomingdale International School, Penamaluru (IB Primary Years Programme)"],
    },
    {
      city: "Nearby: Hyderabad (boarding)",
      note: "A much wider choice of IB and Cambridge schools, mostly considered as boarding or relocation.",
      schools: ["Chirec International School", "Oakridge International School, Hyderabad"],
    },
    {
      city: "Nearby: Visakhapatnam",
      note: "Another option on the coast for families considering a move within Andhra Pradesh.",
      schools: ["Oakridge International School, Visakhapatnam", "Ameya World School"],
    },
  ],

  modesIntro:
    "All Nuzvid lessons are online and one-to-one. The difference between families is the plan: a steady weekly rhythm, a full private-candidate course or an exam-season push.",
  modes: [
    {
      title: "Steady weekly sessions",
      description:
        "One tutor, a fixed weekly slot, one subject at a time. This is right for a child keeping up with a school elsewhere or building skills before a move.",
      bullets: [
        "Same tutor from start to finish",
        "Past papers used early",
        "A written note after every lesson",
        "A second weekly slot is easy to add",
      ],
    },
    {
      title: "A full course taught to a private candidate",
      description:
        "For a student preparing Cambridge IGCSE without a school class, the tutor teaches the whole syllabus code, sets milestones and runs mock papers.",
      bullets: [
        "Syllabus mapped topic by topic",
        "Alternative-to-practical preparation for sciences",
        "Advice on what an approved exam centre asks for",
        "Mocks marked to the published scheme",
      ],
    },
    {
      title: "Focused pre-exam weeks",
      description:
        "In the last month, sessions rise to three or four a week with timed papers and immediate review, planned to avoid clashes with mango season and power cuts.",
      bullets: [
        "One timed paper per session",
        "Every error reviewed",
        "Flexible around orchard and heat",
        "Book a few weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "What IB or IGCSE options exist near Nuzvid?",
      paragraphs: [
        "In Nuzvid itself we have not confirmed any school teaching the IB or a Cambridge or Edexcel IGCSE syllabus. The town's education strength lies elsewhere: a university campus that is a magnet for students across Andhra Pradesh, and state and CBSE schools that prepare children well for Indian exams. International curricula are therefore an outside route.",
        "Vijayawada, around 50 km away, is the nearest big city. Its international-curriculum offer is limited, and the only school we could verify is an IB primary school in Penamaluru. Older students considering IB Diploma or IGCSE look to Hyderabad or Visakhapatnam, and either normally means boarding or relocation.",
        "A second route keeps the child in Nuzvid. Cambridge accepts private candidates through registered centres, so a tutor can teach the IGCSE syllabus online while the child lives at home. For the IB Diploma, a student usually joins an IB World School first and uses a tutor to go deeper.",
        "Please verify admissions, fees and current programmes with each school directly. Schools change, and we are not in a position to speak for any of them.",
      ],
      table: {
        caption: "Where Nuzvid students find an international curriculum",
        columns: ["Route", "Place", "What to expect"],
        rows: [
          ["Local schools", "Nuzvid and Mylavaram", "State syllabus and CBSE; no confirmed IB or IGCSE"],
          ["Vijayawada", "About 50 km away", "An IB primary school confirmed; few options for older students"],
          ["Hyderabad or Visakhapatnam", "Larger cities", "More IB and Cambridge schools; boarding or relocation"],
          ["Private candidate", "Online study and an approved exam centre", "Cambridge IGCSE taught from home"],
        ],
      },
      bullets: [
        "No confirmed IB or IGCSE school in Nuzvid",
        "Vijayawada has an IB primary school but little for older children",
        "Hyderabad and Visakhapatnam offer wider choice with boarding",
        "IGCSE private candidacy avoids relocation",
      ],
    },
    {
      heading: "How does the state syllabus or CBSE differ from IB and IGCSE?",
      paragraphs: [
        "Andhra Pradesh state papers and CBSE both lean on recall and set-piece problems. IB and IGCSE examiners prefer questions that put a familiar idea in an unfamiliar setting, and they award marks for explaining why, not just what. A student who has memorised a chapter can still stumble over a single twist in wording.",
        "Structure of assessment differs as well. State and CBSE results rest largely on one end-of-year paper. The IB also counts Internal Assessments, the Extended Essay and CAS, while Cambridge IGCSE includes coursework or practical components in some subjects. Steady work across many months replaces a last-minute surge.",
        "Medium of study matters too. Many students in Nuzvid have learned science and maths through Telugu; IB and IGCSE are taught and examined in English, with precise scientific vocabulary that has to be learned as deliberately as any formula.",
        "Neither path is simply harder. Indian entrance examinations such as EAMCET-style tests and JEE are built around Indian syllabuses, whereas IB and IGCSE shine for study abroad. The destination should choose the syllabus.",
      ],
      table: {
        caption: "State syllabus, CBSE, IB and IGCSE compared",
        columns: ["Feature", "AP state syllabus", "CBSE", "IB or IGCSE"],
        rows: [
          ["Exam focus", "Recall and standard problems", "Mixed recall and application", "Application, analysis and justification"],
          ["Coursework", "Limited", "Internal assessment and projects", "Central in the IB, present in some IGCSE subjects"],
          ["Language", "Telugu or English medium", "English or Hindi", "English, with a language course"],
          ["Path from Nuzvid", "Local school", "Local CBSE school", "Private study, boarding or relocation"],
        ],
      },
      bullets: [
        "IB and IGCSE ask why, not only what",
        "Assessment spreads across many months",
        "Pick the syllabus by intended destination",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Nuzvid family?",
      paragraphs: [
        "Each rate is agreed in writing before you book, and a few concrete factors determine it. We do not publish figures, because a single price would mislead: an IB Higher Level Physics tutor and an IGCSE Core English tutor are simply not the same service.",
        "Programme and level set the baseline. Specialists with years of Diploma teaching or marking cost more than general tutors, and rare combinations are scarcer, which raises the rate.",
        "Frequency changes the picture. Two sessions a week cost more overall but produce steadier progress, which can work out cheaper per mark gained. Timing also matters, since tutors fill up ahead of exam sessions.",
        "Online delivery adds no travel charge, so a Nuzvid student gets the same terms as a student anywhere in India. Take the free trial lesson, compare the quote to local coaching, and remember that one-to-one teaching gives undivided attention.",
      ],
      bullets: [
        "Programme, subject and level",
        "Tutor experience and subject scarcity",
        "Session length and number per week",
        "Closeness to an exam session",
        "A written quote before any booking",
      ],
    },
    {
      heading: "Is an online tutor better than coaching centres or self-study in Nuzvid?",
      paragraphs: [
        "For IB and IGCSE, a live online tutor fits best because Nuzvid's own coaching is aimed at other goals. Institutes in the area prepare students for state board exams, EAMCET, JEE and NEET, which is good work but not the same as coaching to Cambridge mark schemes or IB assessment criteria.",
        "Self-study is an honest option for disciplined students who work steadily through past papers. The catch is correction: without an expert marking written answers, recurring mistakes can go unnoticed right up to the exam.",
        "Travelling to Vijayawada for classes would take hours from the week, and the road and rail are busy at peak times. With online lessons, the evening stays free for learning.",
        "What online needs is a dependable connection and a quiet space. A second connection, such as a phone hotspot, and a charged laptop will cover most problems, and outages are rescheduled, not lost.",
      ],
      table: {
        caption: "Comparing ways to study IB or IGCSE in Nuzvid",
        columns: ["Option", "IB or IGCSE expertise", "Travel", "Written-work feedback"],
        rows: [
          ["Online one-to-one", "Specialists matched to syllabus", "None", "Detailed and criteria-based"],
          ["Coaching centre", "Geared to Indian exams", "Daily or weekly", "General and group-based"],
          ["Local private tutor", "IB or IGCSE knowledge is rare", "Varies", "Depends on the person"],
          ["Self-study", "Open resources only", "None", "None without a marker"],
        ],
      },
      bullets: [
        "Local coaching targets other exams",
        "Online saves travel to Vijayawada",
        "Keep a backup connection handy",
      ],
    },
    {
      heading: "How do mango season, heat and Dasara shape the Nuzvid school year?",
      paragraphs: [
        "IB Diploma papers run mainly in May, with November for some schools; Cambridge IGCSE sits in May-June and October-November; Edexcel adds a January window. Dates and deadlines are published by the boards each year, and your exam centre will confirm them for your session.",
        "Nuzvid's own calendar collides with this. Mango harvesting and dispatch peak from April to June, when orchard families are at their busiest and homes are full of activity. Sessions can be planned early in the morning or late evening to keep study steady.",
        "Summer temperatures are high, so afternoon lessons are best avoided. Monsoon rain from June to September and cyclone-related weather in October and November can disrupt power. We add a spare session around those months.",
        "Festivals add breaks: Sankranti in January, Ugadi in spring, and Dasara in autumn, the last celebrated enthusiastically across the Vijayawada region. Families often travel, so we plan the work in front of each holiday.",
      ],
      table: {
        caption: "The Nuzvid year and study planning",
        columns: ["Period", "Local conditions", "Planning advice"],
        rows: [
          ["January", "Sankranti holiday; mocks begin", "Start timed papers after the break"],
          ["March-April", "State board exams; mango season begins", "Protect lesson slots; choose early or late hours"],
          ["May-June", "Peak heat and mango dispatch; IB and IGCSE papers", "Morning or evening lessons"],
          ["July-September", "Monsoon and a steady term", "Cover new content and keep a spare session"],
          ["October-November", "Dasara and cyclone-season weather; November series", "Finish heavy topics before festival travel"],
        ],
      },
      bullets: [
        "Mango season overlaps with May exams",
        "Heat favours morning or late sessions",
        "Plan ahead of Sankranti and Dasara",
      ],
    },
    {
      heading: "Where can an IB or IGCSE student from Nuzvid go next?",
      paragraphs: [
        "In India, the Association of Indian Universities issues equivalence for the IB Diploma and Cambridge qualifications under its own rules, which a student should check for the course and university in question. Nuzvid students often aim at institutions in Vijayawada, Hyderabad, Chennai and Bengaluru.",
        "For engineering, JEE Main and JEE Advanced accept IB and IGCSE-based students who meet the published eligibility conditions. Students in this area also consider the Rajiv Gandhi University of Knowledge Technologies on their doorstep, where admission follows its own state-run process.",
        "For medicine, NEET-UG sets its own eligibility and subject requirements, which IB and Cambridge students must confirm early. CUET-UG covers many central universities with its own subject-code rules, so read the test list carefully before Class 12.",
        "For study abroad, IB and Cambridge results are widely recognised across the UK, US, Canada, Australia and Europe. A tutor can help a student reach stronger grades, but no tutor can promise entry.",
      ],
      table: {
        caption: "Next steps for Nuzvid students",
        columns: ["Goal", "What to confirm", "Tutor contribution"],
        rows: [
          ["Engineering", "JEE eligibility for IB or IGCSE", "Maths and Physics depth"],
          ["Medicine", "NEET-UG eligibility and subjects", "Biology and Chemistry practice"],
          ["Central universities", "CUET-UG subject list", "Timed practice and subject fluency"],
          ["Study abroad", "Entry grades and subject rules", "Stronger results in chosen subjects"],
        ],
      },
      bullets: [
        "Check AIU equivalence for each course",
        "Exam bodies publish their own eligibility rules",
        "No tutor can guarantee admission",
      ],
    },
    {
      heading: "How are IB Maths, Physics, Chemistry and Biology taught to a Nuzvid student?",
      paragraphs: [
        "Start with Maths: Analysis and Approaches or Applications and Interpretation. We help a family choose before Class 11, because the course shapes what follows. The tutor then covers each topic with worked examples, timed practice and marking in the same week.",
        "Physics lessons use a digital whiteboard for derivations and diagrams, and the tutor watches the student write. The internal investigation is planned early and around equipment the student can use at home or at school.",
        "Chemistry needs calculation and mechanisms: moles, equilibrium and organic pathways, with the data booklet open. Biology needs command terms and data interpretation, with written answers read and improved sentence by sentence.",
        "A short written note follows every class, listing topics covered and practice set. Parents see progress without sitting through each lesson.",
      ],
      bullets: [
        "Maths: choose the course before Class 11",
        "Physics: derivations plus early investigation planning",
        "Chemistry: moles and mechanisms with the data booklet",
        "Biology: command terms and data interpretation",
      ],
    },
    {
      heading: "IGCSE Core or Extended: what should a Nuzvid student pick?",
      paragraphs: [
        "Core tier papers are designed for students needing a supported route, and the top grade available is a C in most Cambridge subjects. Extended covers A* to G and is usually the right choice for students aiming at IB or A Level later.",
        "A few diagnostic papers clarify the decision. If a student can handle Extended questions with guidance after a month, stay with it. Exam centres need a tier decision before entry, so ask about the deadline early.",
        "Subject combinations should reflect goals. Engineering or medicine often means Maths, Physics, Chemistry or Biology, English and a language; business paths add Economics, Accounting or Business Studies.",
        "Whichever tier is chosen, real past papers with careful marking move grades most, and that is what the tutor provides.",
      ],
      bullets: [
        "Extended keeps the full grade range open",
        "Diagnostic papers make the choice clearer",
        "Subjects should follow the intended career",
      ],
    },
  ],

  process: [
    { title: "Send your details", description: "Class, board, subjects, exam session and the evening hours that suit your family." },
    { title: "Meet your suggested tutor", description: "We propose a tutor whose syllabus experience matches and explain why." },
    { title: "Try a free lesson", description: "A real class online, with no payment and no obligation." },
    { title: "Fix the plan in writing", description: "The rate and the first month's topics are confirmed before booking." },
    { title: "Keep learning and reviewing", description: "A weekly slot, notes each time and a change of tutor whenever needed." },
  ],

  whyPoints: [
    { title: "Right syllabus, right tutor", description: "Matched by course code, level and session, not by general subject skill." },
    { title: "Clear about home visits", description: "Everything in Nuzvid is online; in-person tuition exists only in Gurugram and parts of Delhi NCR." },
    { title: "Written notes", description: "Every session ends with a note on what was covered and what to do next." },
    { title: "A free first class", description: "You see the teaching before committing." },
    { title: "Change tutor freely", description: "If the fit is wrong, we find another." },
    { title: "Coaching only", description: "Tutors never write IAs, Extended Essays or coursework." },
  ],

  faqs: [
    {
      question: "Can I find an IB or IGCSE tutor in Nuzvid?",
      answer:
        "Yes, through live online lessons. IB Gram pairs Nuzvid students with India-based tutors for IB PYP, MYP and DP and for Cambridge and Edexcel IGCSE. Because tutors do not travel, your choice is not limited to people in town. We match by course and level, and you may take one trial lesson free before deciding whether to continue.",
    },
    {
      question: "Is IB or IGCSE home tuition available in Nuzvid?",
      answer:
        "Only online. Tutors do not visit homes in Nuzvid; in-person home tuition is limited to Gurugram and parts of Delhi NCR. Your child takes a live private lesson from home using a laptop, with the same one-to-one attention. Families often prefer this, because the choice of tutor is wider and there is no travel in summer heat or monsoon rain.",
    },
    {
      question: "Which schools near Nuzvid teach IB or IGCSE?",
      answer:
        "We could not confirm any in Nuzvid itself. Vijayawada, about 50 km away, has an IB primary school, and Hyderabad and Visakhapatnam have more choice for older students, usually with boarding. Please ask each school directly about current admissions, fees and programmes, since we are independent and not affiliated with any of them.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Nuzvid?",
      answer:
        "The rate depends on programme, subject, level, tutor experience and sessions per week, and we give it in writing before you book. We do not publish prices because different subjects and levels are priced differently. There is no surcharge for distance, since lessons are online, and the free trial lesson lets you judge quality before paying anything.",
    },
    {
      question: "Can my child take Cambridge IGCSE as a private candidate from Nuzvid?",
      answer:
        "Often yes. Cambridge allows private candidates at registered exam centres, though availability, fees, dates and subjects depend on the centre and the series. Science practicals are usually replaced by an alternative-to-practical paper. A tutor can teach the syllabus and prepare your child for each paper, but you must register directly with the centre.",
    },
    {
      question: "Will a tutor do my child's IA or Extended Essay?",
      answer:
        "No. Tutors coach only; they do not write or rewrite an IA, Extended Essay, TOK essay or coursework that counts towards a grade. They can explain the criteria, help plan an investigation, comment on a draft the student wrote and suggest improvements. The student's own ideas and words must fill the pages.",
    },
    {
      question: "How is IGCSE different from Class 10 state board exams?",
      answer:
        "IGCSE questions usually reward explanation and application, while state papers often reward accurate recall. There are also Core and Extended tiers, more data-handling and longer written answers in English. Content overlaps in maths and science, but answer technique must be retrained, and regular marked practice with a tutor is the fastest way to do that.",
    },
    {
      question: "Which exam session should we prepare for?",
      answer:
        "IB Diploma papers mostly run in May, Cambridge IGCSE in May-June and October-November, and Edexcel in January, May-June and November. Boards and exam centres publish dates and deadlines each year. We suggest starting preparation at least two terms in advance and checking dates with the centre early.",
    },
    {
      question: "What happens if there is a power cut or storm during a lesson?",
      answer:
        "We plan for it. Keep the laptop charged and a phone hotspot ready, and tell the tutor if a storm is forecast. A session lost to a real outage is rescheduled, not charged twice. For students close to exams, we add spare sessions in advance during the monsoon and cyclone months.",
    },
    {
      question: "Does online teaching work for IB Maths?",
      answer:
        "Yes. A shared whiteboard lets the tutor see each step as it is written and set the next problem at once. Timed papers are done at home and reviewed line by line in the lesson. The student uses the calculator or software the syllabus requires, and the tutor checks that the method, not just the answer, is sound.",
    },
    {
      question: "How are science practicals handled from home?",
      answer:
        "For IGCSE private candidates, practical skills are tested in an alternative-to-practical paper, so the tutor teaches how to read setups, tables and graphs. For IB sciences, the internal investigation should be designed around equipment available at school or home, and the tutor helps discuss the method. The student carries out the work and writes it up.",
    },
    {
      question: "Can my child continue studying Telugu with an international course?",
      answer:
        "Yes. Many Nuzvid students keep Telugu at school while following IB or IGCSE privately. IB and IGCSE offer language courses, and Hindi is widely supported; Telugu support depends on the syllabus and the tutor, so please ask at the start. A strong home language tends to help English writing, too.",
    },
    {
      question: "Can lessons fit around a family orchard business?",
      answer:
        "Yes, within reason. Lessons can be set early morning or late evening in mango season, and moved when a dispatch schedule changes, subject to tutor availability. A fixed weekly slot gives the best progress, so we suggest choosing one that holds for a term. A parent may sit in on the trial and read the note after each class.",
    },
    {
      question: "What if we do not like the tutor?",
      answer:
        "Tell us and we will arrange another. The free trial lesson lets you judge teaching style first, and a tutor change is always possible. There is no penalty for asking. We prefer finding the right fit over keeping a mismatch going, and your feedback helps us choose better.",
    },
    {
      question: "Can we begin close to an exam date?",
      answer:
        "Often yes. If an exam is six to eight weeks away, send the subject, board, paper codes and recent marks, and we will propose a tutor and a plan of timed papers and revision. With very little time the plan will be narrower, and we will say so honestly rather than promise a result.",
    },
    {
      question: "How do I start from Nuzvid?",
      answer:
        "Send a WhatsApp message to +91 7439 368 115 or email support@ibgram.com with your child's class, board, subjects and free evenings. We will reply with a matched tutor, a time for the free trial lesson and a written rate. You decide after the trial, and there is no obligation to continue.",
    },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How online IB and IGCSE tuition works for Indian cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only place where in-person home tuition is offered." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB programmes and subjects explained." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The Diploma's subjects and core elements." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and book the free trial." },
    { label: "IB and IGCSE tutoring in Vijayawada", href: "/vijayawada/", description: "The nearest large city to Nuzvid." },
    { label: "IB and IGCSE tutoring in Eluru", href: "/eluru/", description: "Online tuition for the district headquarters." },
    { label: "IB and IGCSE tutoring in Gudivada", href: "/gudivada/", description: "A neighbouring town in the Krishna delta belt." },
  ],

  closingHeading: "Start IB or IGCSE learning from your Nuzvid home",
  closingBody:
    "Tell us the course, the level and the evenings that are free. We will suggest a tutor who has taught it, arrange a free first class and send a written rate. Everything happens live and online, in Indian Standard Time.",
  tutorsIntro:
    "Nuzvid students learn with India-based IB and IGCSE specialists over live video. Each profile lists subjects, levels and boards, and a free trial lesson comes first so the fit can be judged.",
};
