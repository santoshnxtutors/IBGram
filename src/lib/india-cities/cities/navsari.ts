import type { CitySeoPage } from "../types";

/**
 * /navsari/ - IB and IGCSE tutoring page for Navsari, Gujarat. No school inside Navsari is confirmed to
 * offer IB or Cambridge / Edexcel IGCSE (Edustoke could not be fetched), so stripSchools is empty and the
 * clusters point to Surat (about 35 km north) and Mumbai, whose schools were vetted on those city pages.
 * Online only: in-person home tuition runs only in Gurugram and parts of Delhi NCR.
 */
export const navsari: CitySeoPage = {
  slug: "navsari",
  countryName: "Navsari",
  countryNameLong: "Navsari, Gujarat",
  demonym: "Navsari",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote:
    "Slots dodge the July downpours, leave the Navratri and Uttarayan days free, and follow the school calendars of wherever the student is actually enrolled",
  lastUpdated: "2026-09-21",
  geo: { latitude: 20.9467, longitude: 72.952 },
  wikipedia: "https://en.wikipedia.org/wiki/Navsari",
  alternateNames: ["Nausari", "Navsari city"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Navsari | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Navsari students: Diploma, MYP, PYP and Cambridge or Edexcel IGCSE, private one-to-one tuition online from home, free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Navsari",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR NAVSARI",
  heroSubtitle:
    "For private tuition at home in Navsari on an IB or IGCSE course, the practical answer is a live online lesson: a subject specialist, matched to your child's exact syllabus, teaching one to one over video on Indian time while your family stays put in Dudhiya Talao, Lunsikui or Vijalpore.",
  primaryKeyword: "IB and IGCSE tutors in Navsari",
  imageAltText: "Navsari student reviewing IB Biology data-response answers with a tutor during a live one-to-one online lesson",
  secondaryKeywords: [
    "IB tutor Navsari",
    "IGCSE tutor Navsari",
    "IB home tuition Navsari",
    "IGCSE home tuition Navsari",
    "IB private tuition Navsari",
    "IB Maths tutor Navsari",
    "IGCSE Maths tutor Navsari",
    "IB Physics tutor Navsari",
    "IB Chemistry tutor Navsari",
    "IB Biology tutor Navsari",
    "IB DP tutor Navsari",
    "IB MYP tutor Navsari",
    "IB PYP tutor Navsari",
    "IGCSE online tuition Navsari",
    "IB tutor Lunsikui Navsari",
    "IGCSE tutor Dudhiya Talao Navsari",
    "online IB tutor Navsari Gujarat",
    "IB tutor Nausari",
  ],

  heroTrustPoints: [
    "Your child's tutor has taught the specific IB course or IGCSE code, not merely the subject in general",
    "Every session is live and online, since home visits exist only in Gurugram and parts of Delhi NCR",
    "The first lesson is free and any rate is confirmed in writing beforehand",
    "After each lesson a short written summary tells you what was covered and what comes next",
    "IB Gram is independent of the IB, Cambridge, Pearson and all schools mentioned",
  ],
  heroStats: [
    { value: "PYP to DP", label: "And the Career-related route" },
    { value: "Cambridge and Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "One clock for tutor and student" },
    { value: "Free trial", label: "See it before deciding" },
  ],

  intro: {
    heading: "Navsari students, Surat schools and a tutor on a screen",
    paragraphs: [
      "Navsari has an identity out of proportion to its size: the Parsi heritage that runs through the old town, the fact that the Tata family's roots lie here, Dandi and its salt-march memorial a short drive away, and Navsari Agricultural University turning out researchers and agronomists. It also sits about thirty-five kilometres south of Surat on the main rail corridor, which shapes almost everything about how its families think about schooling.",
      "For IB and IGCSE, that geography means the school is generally not in Navsari. We could not confirm any Navsari school teaching the IB or a Cambridge or Pearson Edexcel IGCSE syllabus. The families who ask us about these programmes are those with a child in a Surat school, a boarding campus elsewhere, or a plan to move to a metropolitan school, and those returning from abroad who want their children's education to stay compatible with overseas study.",
      "What such a family lacks is a teacher who has actually taught these papers, close to hand, at hours that suit. Online one-to-one tuition is built for that gap. A tutor in another city, teaching on IST, sits with your child over video with a shared screen and whiteboard, marks practice against the real scheme and explains exactly why a mark was dropped. The lesson happens at home. Tutors do not visit homes in Navsari, and in-person tuition is limited to Gurugram and parts of Delhi NCR.",
      "The sections that follow cover schools, boards, calendars, costs and university routes, all with Navsari in mind. Tutors coach only and never write coursework, Internal Assessments, Extended Essays or TOK essays, and nothing on this page promises a grade. IB Gram is an independent tutoring service with no affiliation to the IB, Cambridge, Pearson or any school.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP support for Navsari students",
      "Cambridge and Pearson Edexcel IGCSE at Core and Extended",
      "Private tuition from home, delivered live online",
      "Free trial, written lesson notes and a tutor change if needed",
      "No home visits in Navsari; those run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Since none of these programmes is taught in Navsari as far as we can confirm, we start every conversation by asking where the child is enrolled and which stage they are in. A Surat day student, a boarder and a child still preparing to enter an international school all need different help.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Children learn through units of inquiry that cut across subjects, guided by six broad themes, and finish primary school with an Exhibition project they plan and present themselves. The focus is on questions, reflection and communication as much as facts.",
      countryNote:
        "Navsari parents ask about PYP when a young child is heading for a Surat or Mumbai international school and needs English fluency and confidence in explaining ideas aloud.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16, Class 6-10",
      description:
        "Eight subject groups are assessed against published criteria at four levels of achievement, framed by key concepts and global contexts. The final year includes a Personal Project, and some schools add external e-assessments.",
      countryNote:
        "A student from a Gujarati-medium or CBSE background usually needs help with criterion-referenced writing in Sciences and Individuals and Societies, where the expected answer is an argument, not a recalled paragraph.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects from different groups, three at Higher Level and three at Standard, are studied alongside the Extended Essay, Theory of Knowledge and CAS. Each subject is marked 1 to 7 and the core adds up to three points, for a maximum of 45.",
      countryNote:
        "The DP requests we see from Navsari cover Mathematics, the three sciences, Business and English, often for a boarder in Surat wanting a familiar weekly session at home during holidays.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take Diploma courses together with a career-related study and a core of personal and professional skills, service learning and a reflective project. It is designed for students who prefer an applied route into higher education or employment.",
      countryNote:
        "Interest in CP from Navsari is limited and mostly from families with agricultural, textile or trading businesses considering applied pathways.",
    },
  ],

  subjectsIntro:
    "Tutors are recruited course by course. From Navsari the most frequent requests are Maths, the sciences and Business, though language and humanities support is equally available for students who need it.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, algebra, sequences and mathematical argument, for students planning engineering, science or finance." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistical modelling and calculator-based problem solving for commerce, design and social science routes." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, thermodynamics, waves, electricity and quantum ideas, with attention to units and derivations." },
    { name: "Chemistry", levels: "SL and HL", description: "Stoichiometry, energetics, organic chemistry and equilibrium, plus the experimental write-ups needed in the internal assessment." },
    { name: "Biology", levels: "SL and HL", description: "Cell processes, genetics, human physiology and ecology, with training in reading unfamiliar data." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "An interdisciplinary course that connects naturally with Navsari's agricultural and coastal setting." },
    { name: "Business Management", levels: "SL and HL", description: "Finance, marketing and operations through case-study questions that suit families in trade and manufacturing." },
    { name: "Economics", levels: "SL and HL", description: "Micro, macro and global economics, diagram accuracy and structured evaluation." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, programming, databases and the extended-response paper." },
    { name: "Psychology", levels: "SL and HL", description: "Studies, research methods and the experimental design behind the internal assessment." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Textual analysis, comparative writing and oral commentary." },
    { name: "English A: Literature", levels: "SL and HL", description: "Work on prescribed texts, essay technique and the individual oral." },
    { name: "Hindi B", levels: "SL and HL", description: "Language acquisition for students learning Hindi as an additional language." },
    { name: "Gujarati support", levels: "Ab initio and SL", description: "Help for students who wish to keep or build Gujarati alongside their Diploma, where the school arranges it." },
    { name: "Theory of Knowledge", levels: "Core", description: "Guidance on constructing arguments and reading prescribed titles; the essay and exhibition are the student's own." },
  ],
  igcseSubjectsIntro:
    "IGCSE has a clear syllabus and published past papers, which makes it a friendly starting point for Navsari students moving toward Surat or Mumbai schools. Both Cambridge and Pearson Edexcel codes are supported, at Core or Extended tier where relevant.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core and Extended", description: "Algebra, geometry, trigonometry, statistics and graphs, with timed paper work." },
    { name: "Additional Mathematics", levels: "Cambridge and Edexcel", description: "Calculus and functions as preparation for A Level or IB Maths." },
    { name: "Physics", levels: "Core and Extended", description: "Forces, energy, electricity, waves and radioactivity, plus practical-paper technique." },
    { name: "Chemistry", levels: "Core and Extended", description: "Atomic structure, reactions, organic chemistry and qualitative analysis." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, organisms, inheritance and ecosystems, with data and graph questions." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core and Extended", description: "For schools teaching sciences as a double award." },
    { name: "Computer Science", levels: "Cambridge and Edexcel", description: "Logic, pseudocode, hardware, networks and programming problems." },
    { name: "Business Studies", levels: "Cambridge and Edexcel", description: "Business structures, marketing and finance with case questions." },
    { name: "Economics", levels: "Cambridge and Edexcel", description: "Supply and demand, national economies and trade." },
    { name: "English as a First Language", levels: "Cambridge and Edexcel", description: "Composition, argument, narrative and summary." },
    { name: "English as a Second Language", levels: "Cambridge and Edexcel", description: "Skills across reading, writing, speaking and listening." },
    { name: "Hindi as a Second Language", levels: "Cambridge", description: "Comprehension, composition and speaking practice." },
    { name: "Gujarati", levels: "Cambridge", description: "Reading and writing preparation where the centre registers the paper." },
  ],

  regionsTitle: "Navsari neighbourhoods and lesson timing",
  regionsIntro:
    "Navsari is a compact city laid out around its old lakes, the railway station and the roads toward Surat, Vansda and Bilimora. The notes below concern how lessons fit family routines in each area, not about local IB schools, since none is confirmed here.",
  regions: [
    { name: "Dudhiya Talao", note: "The old-town lake area with heritage homes and long-established families. Afternoon and early evening lessons suit households with a regular routine." },
    { name: "Tower Road and Station Road", note: "The commercial spine near the railway station, popular with parents who commute to Surat for work. Weekend blocks help students of commuting parents." },
    { name: "Lunsikui", note: "A large residential locality with apartments and bungalows. Good home connectivity makes weekday evening lessons straightforward." },
    { name: "Vijalpore", note: "A newer, fast-growing area toward the highway. Families here often arrange lessons after a school pick-up run." },
    { name: "Eru Char Rasta", note: "A busy junction locality on the Surat side. Traffic can delay pick-ups, so slots after 6:30 pm suit best." },
    { name: "Jalalpore Road", note: "The corridor toward Jalalpore and the coast, used by families with links to farming and trading. Late-evening sessions are common." },
    { name: "Kabilpore", note: "A settled suburb with an active community life. Weekend morning sessions work well for longer past-paper practice." },
    { name: "Agricultural University campus area", note: "Home to many faculty and research staff whose children often follow national or international curricula. Steady weekly slots are the norm." },
    { name: "Bilimora and Gandevi side", note: "Towns to the south with chikoo orchards and mango growers. Families here join online with ease when a stable connection is available." },
    { name: "Dandi and the coastal villages", note: "Coastal stretch with monsoon interruptions. A hotspot backup is worth keeping during July and August." },
  ],

  schoolClusters: [
    {
      city: "Nearby: Surat",
      note: "The nearest large city, about thirty-five kilometres north on the rail line. Several schools there offer IB or Cambridge programmes, though some are boarding-led, so daily commuting from Navsari is not the usual arrangement.",
      schools: ["Aarth Universal School", "Fountainhead School", "P. P. Savani Cambridge International School"],
    },
    {
      city: "Nearby: Mumbai, Bandra Kurla Complex and the western suburbs",
      note: "A destination for families relocating for work or planning study abroad, reachable on the western rail corridor. Local options in Navsari are limited, so this is a move, not a commute.",
      schools: ["American School of Bombay", "JBCN International School", "Oberoi International School"],
    },
    {
      city: "Nearby: South Mumbai",
      note: "A smaller cluster of international schools serves South Mumbai. Admission decisions usually need to be made a year in advance.",
      schools: ["DSB International School"],
    },
  ],
  schoolDisclaimer:
    "No school inside Navsari could be confirmed as teaching the IB or a Cambridge or Edexcel IGCSE. The names above sit in Surat and Mumbai and appear only because families ask about them. IB Gram is an independent tutoring service and has no affiliation with, endorsement from or payment from these schools, the IB, Cambridge or Pearson. Please verify each school's current offering yourself.",

  modesIntro:
    "Because tutors do not visit homes in Navsari, all of the formats below run online. They differ in rhythm and intensity, and you can change from one to another as the school year moves.",
  modes: [
    {
      title: "Steady weekly online lessons",
      description:
        "A regular private slot with one tutor through a term, usually an hour, taken at home on a laptop. Tutors do not visit homes in Navsari.",
      bullets: [
        "One tutor throughout the term",
        "Past papers marked against the scheme",
        "A written summary after each lesson",
      ],
    },
    {
      title: "Holiday catch-up courses",
      description:
        "Concentrated blocks in the summer and Diwali breaks, helpful for boarders and transfers who are home for a stretch.",
      bullets: [
        "Alternate-day or daily lessons",
        "Focus on missed or weak units",
        "Timed around the school's break dates",
      ],
    },
    {
      title: "Final-stretch revision",
      description:
        "An intense programme in the last ten to twelve weeks before May or October papers, based on full mock papers and targeted fixes.",
      bullets: [
        "Priorities set from mock results",
        "Timed practice and error tracking",
        "Weekend slots available",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Navsari?",
      paragraphs: [
        "We have not been able to confirm one. Navsari has a good number of CBSE and Gujarat Board schools, some with long histories, and a few English-medium institutions with strong reputations locally. None that we could verify teaches the IB Diploma, MYP, PYP or a Cambridge or Edexcel IGCSE, so if you hear otherwise, please ask the school for its authorisation and share it with us.",
        "This does not leave Navsari families without choices. The obvious reference point is Surat, only about thirty-five kilometres away, where the IB and Cambridge landscape is broader. Some Surat schools run as day schools, some as day-boarding or boarding campuses, and their admissions, fees and eligibility change from year to year, so a call to the school is essential.",
        "Beyond Surat, families with a professional link to Mumbai or Ahmedabad sometimes plan a move, timed to a school-year change. Others send a child to a boarding school in a hill station or on the peninsula. Whichever route is chosen, the student ends up in Navsari for vacations, and those are the weeks when structured tuition is often most valuable.",
        "A less discussed option is to study for IGCSE alongside a local school, either through an online provider or as a private candidate. This can work, but it demands careful planning around exam centres and practical assessment, and the tutoring aspect is only one part of it.",
      ],
      bullets: [
        "Inside Navsari: no IB or IGCSE school confirmed",
        "Surat: the closest city with a broader set of options",
        "Mumbai and Ahmedabad: destinations for relocating families",
        "Online or private candidate routes for IGCSE, requiring an exam centre",
      ],
    },
    {
      heading: "How do the Gujarat Board, CBSE, IB and IGCSE differ for a Navsari family?",
      paragraphs: [
        "Most children in Navsari grow up on the Gujarat Board or CBSE, and both are firmly rooted in a fixed textbook and a final board paper. Moving from either to IGCSE or the IB changes how marks are earned more than it changes the raw difficulty, and it is best to understand that difference before a child commits.",
        "The Gujarat Board, in Gujarati or English medium, is the default for most local schools and connects directly to state entrance tests and state universities. CBSE is aligned with the national entrance exams, which is why families aiming at JEE or NEET often prefer it.",
        "IGCSE offers a defined syllabus, past papers in the public domain and a heavy use of command words like evaluate or justify. The IB Diploma extends this into six subjects, essays and orals, with internal assessments and a total out of 45. Both suit students who like to reason from principles.",
        "Where a family is headed decides the choice. A child staying in Gujarat and aiming for state engineering or medical seats has a shorter route through the state board or CBSE. A child likely to study overseas, or with a parent who may be transferred, has a good reason to consider IGCSE and the IB.",
      ],
      table: {
        caption: "Boards compared for a Navsari student",
        columns: ["Route", "Marking approach", "Language", "Common destination"],
        rows: [
          ["Gujarat Board", "State papers, textbook-based", "Gujarati or English medium", "State universities, GUJCET, state seats"],
          ["CBSE", "National papers tied to NCERT", "English or Hindi medium", "JEE, NEET, CUET-UG"],
          ["Cambridge or Edexcel IGCSE", "External papers with command words and practicals", "English medium plus a language option", "A Level, IB Diploma, CBSE Class 11"],
          ["IB Diploma", "Six subjects, internal and external marks", "English plus a second language", "Indian universities via equivalence, universities abroad"],
        ],
      },
    },
    {
      heading: "What determines the cost of IB or IGCSE tuition in Navsari?",
      paragraphs: [
        "The price of tuition depends on the programme, the subject, the level and the number of hours a family wants. Because a single hourly figure would not fit a Class 7 MYP student and a Diploma Higher Level candidate equally, we quote in writing before booking rather than publish one.",
        "Level is the first driver. Higher Level Physics, Chemistry or Maths and specialist subjects like Computer Science or Psychology are taught by fewer tutors, and experience marking or examining adds to the value. Frequency is the second driver: a fixed weekly slot through a term differs from an intensive fortnight before an exam.",
        "Navsari's proximity to Surat brings an alternative that families should cost honestly. Commuting for a specialist in Surat means fuel, time and an evening lost, often twice a week. An online lesson removes all three.",
        "A few habits keep spending sensible. Use the free trial, ask for a short diagnostic before a long block, and decide on frequency after the first month. If the tutor is not the right fit, we swap them without charge.",
      ],
      bullets: [
        "Programme and level: PYP, MYP, DP, IGCSE Core or Extended",
        "Scarcity of the subject and the tutor's marking experience",
        "Hours each week and length of commitment",
        "Season: exam months fill up faster than mid-term",
      ],
    },
    {
      heading: "Online tuition, Surat classes, local tutors or self-study: what suits a Navsari student?",
      paragraphs: [
        "Navsari families have four practical options, and the right one depends on the child. The table below compares them in terms that matter for an IB or IGCSE candidate.",
        "Travelling to Surat for classes gives access to a larger pool of teachers, some of whom know international syllabuses. It also costs time, and a student who is already spending hours on school work may find the commute takes away the energy to learn.",
        "Local tutors in Navsari are often first-rate at school-level Maths and Science. Very few have taught IB or IGCSE, and marking style is the sticking point, since an answer that earns full marks on a state board may lose half of them under IB criteria.",
        "Self-study is a big part of any strong student's preparation, but it lacks the feedback that finds recurring mistakes. A tutor who marks practice against the real scheme accelerates progress noticeably.",
        "Online one-to-one lessons offer specialist knowledge without the commute, provided the connection is stable and the student is disciplined about the slot.",
      ],
      table: {
        caption: "Options for IB or IGCSE support from Navsari",
        columns: ["Option", "Knows the international syllabus", "Travel needed", "Feedback on written work", "Main drawback"],
        rows: [
          ["Online one-to-one tutor", "Yes, chosen by course", "None", "Detailed, against the mark scheme", "Needs stable internet"],
          ["Classes in Surat", "Sometimes", "Regular commute of about an hour each way", "Batch-level", "Time and fuel cost"],
          ["Local private tutor", "Rarely", "Tutor or student travels locally", "Varies with the individual", "Limited IB or IGCSE experience"],
          ["Self-study", "Only through papers", "None", "None without a marker", "Repeated errors go unchecked"],
        ],
      },
    },
    {
      heading: "What should a Navsari student know about IB Maths and the sciences?",
      paragraphs: [
        "Mathematics comes in two IB courses, Analysis and Approaches and Applications and Interpretation. The first is heavier on algebra and calculus and suits students heading for engineering, physics or economics. The second uses statistics and modelling with a graphic display calculator and suits students in business, social sciences and design.",
        "Students moving from Gujarat Board or CBSE often calculate accurately but need practice interpreting a situation and explaining a decision in words. IB papers reward clear working and reasoning, so tutors teach students to lay out solutions the way an examiner wants to read them.",
        "The Internal Assessment in Maths is a written exploration of a topic the student chooses. A tutor can talk through what makes a good exploration and comment on the mathematics, but never writes any part of it. The same applies in every subject.",
        "In the sciences, Biology draws strongly on Navsari's agricultural and coastal setting, from crop physiology to marine ecology, and students often bring good intuition. They lose marks on terminology and on the design of experiments. Chemistry and Physics reward practice with quantitative reasoning and on interpreting graphs.",
        "A typical weekly session begins with last week's mistakes, then covers a new concept or a paper section, and ends with a small task. This pattern turns a mistake into a one-off event rather than a repeated one.",
      ],
      bullets: [
        "Maths AA: algebra, calculus and proof; AI: statistics and modelling",
        "Biology: terminology, experiment design and data analysis",
        "Chemistry: organic reaction routes, equilibrium and practical data",
        "Physics: derivations, units and extended responses",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and how should a Navsari student pick subjects?",
      paragraphs: [
        "In IGCSE Maths and the sciences, Core and Extended papers set a ceiling on the grade a student can earn. Core reaches grade C at most, while Extended opens the whole scale from A* down. A student who might study Maths in the IB or at A Level should sit Extended.",
        "Teachers typically decide on tier after mock exams in the second year, but a family need not wait. A tutor can give an honest view within a few sessions, and a student who starts on Core can move to Extended with a bridging block.",
        "Subject choice deserves as much care as tier. Students aiming for engineering usually keep three sciences and Additional Maths, whereas those leaning toward commerce may take Business Studies and Economics. A second language from Hindi or Gujarati, where offered, completes the mix.",
        "Practical skills matter too. A student studying outside a school laboratory can still prepare for the alternative-to-practical paper, and tutors work through the standard experiments with diagrams, tables and graphs.",
      ],
      table: {
        caption: "IGCSE choices for a Navsari student",
        columns: ["Choice", "Reasonable default", "Risk"],
        rows: [
          ["Maths tier", "Extended when A Level or IB Maths is possible", "Core limits the top grade to C"],
          ["Sciences", "Three separate sciences for engineering or medicine", "Combined Sciences is a different, smaller qualification"],
          ["Language", "Hindi where available, Gujarati if the centre allows", "Deadlines for language papers are early"],
          ["Electives", "Business, Economics or Computer Science by interest", "Too many subjects crowd the timetable"],
        ],
      },
    },
    {
      heading: "How do exams, monsoon and festivals shape a year in Navsari?",
      paragraphs: [
        "IB Diploma exams for most Indian schools are held in May, with results in early July, and a November session exists for a smaller group. Cambridge IGCSE has main series in May and June and in October and November, plus a February or March series for certain syllabuses. Pearson Edexcel has comparable summer and winter windows. Your school or exam centre confirms exact dates.",
        "Navsari's climate is humid and coastal, with a heavy monsoon from June to September. Low-lying areas can flood in July, power cuts are more frequent in storms, and school days are lost. Families do well to plan a backup connection and to put lessons on a calendar with a spare slot each month.",
        "The festival calendar shapes the year in a clear way. Ganesh Chaturthi arrives in late summer, Navratri fills nine evenings in autumn, and Diwali and the Gujarati new year bring leave. Uttarayan on 14 January fills the sky with kites and the roofs with people, so avoid setting a mock or a deadline on that day.",
        "The Parsi community adds Navroz and Khordad Sal to the local calendar, and families in the old town often observe them with gatherings. None of these need derail preparation if a tutor and family agree in advance which dates are off.",
        "Cooler months from November to February are the best window for sustained revision. Most Diploma students build a steady daily routine from March, which is when internal assessment deadlines have passed and the main task is practice papers.",
      ],
      table: {
        caption: "Navsari's calendar and study planning",
        columns: ["Period", "Exams and school", "Local conditions", "Planning advice"],
        rows: [
          ["Jan-Feb", "Mocks, IB internal deadlines", "Uttarayan on 14 January, mild weather", "Avoid setting work on kite day"],
          ["Mar-Apr", "IB orals, IGCSE practicals, revision", "Warm and dry, good study weather", "Full past papers weekly"],
          ["May-Jun", "IB and Cambridge summer papers, then monsoon starts", "Heat, then first rains", "Rest before papers, backup internet from June"],
          ["Jul-Aug", "Results, new term, heavy monsoon", "Flooding and power cuts possible", "Bridge courses, flexible slots"],
          ["Sep-Oct", "Ganesh Chaturthi, Navratri, October series", "Festive evenings", "Move lessons to afternoons in Navratri"],
          ["Nov-Dec", "Diwali, winter series, mocks", "Pleasant weather, leave weeks", "Steady revision after the holidays"],
        ],
      },
    },
    {
      heading: "Where do Navsari students go after IB or IGCSE?",
      paragraphs: [
        "In India, the Association of Indian Universities treats the IB Diploma as equivalent to Class 12, and CUET-UG is the entrance route to most central universities. IGCSE on its own is a Class 10 level qualification and leads to A Level, the IB Diploma or Class 11 and 12 of a board.",
        "Students aiming for engineering or medicine can sit JEE or NEET if subject and equivalence conditions are met. These rules are revised from time to time, so check the current information bulletin before choosing subjects, not after.",
        "Around Navsari, students look at Surat's engineering and science institutes, at institutions in Vadodara and Ahmedabad and at Mumbai for commerce, media and science. Navsari Agricultural University attracts those interested in agriculture, horticulture and food technology, and students from farming families often see it as a natural home.",
        "Abroad, the IB Diploma is widely recognised in the UK, US, Canada, Australia and Europe, and the same goes for A Level results after IGCSE. Applications are handled by the school's counsellor or an independent adviser, while tutors focus on the subject content.",
        "Whatever the plan, work backwards from a target course's requirements, since a wrong subject mix at Class 11 is hard to fix later.",
      ],
      bullets: [
        "Indian admission: AIU equivalence, CUET-UG and institutional rules",
        "JEE and NEET: verify subject and equivalence rules early",
        "Regional options: Surat, Vadodara, Ahmedabad, Mumbai and the agricultural university",
        "Study abroad: Diploma or A Level results, not IGCSE alone",
      ],
    },
    {
      heading: "How does a lesson run, and how do we begin from Navsari?",
      paragraphs: [
        "A session starts with a look at last week's errors, moves to new content or exam-style questions and ends with a brief plan for the coming week. The tutor shares a screen, writes on a digital whiteboard and can mark a photographed page live.",
        "All you need is a laptop or tablet, stable broadband, headphones and a quiet corner. In monsoon months, a phone hotspot and a small UPS for the router protect the lesson.",
        "Parents may sit in during the trial and receive a short written note after each session. Tutors teach on IST from across India, so an after-school or weekend slot is easy to find.",
        "To start, message us on WhatsApp with the school, the programme and the subject. We propose a tutor and a time, arrange the free trial and put the rate in writing before you book.",
      ],
    },
  ],

  process: [
    { title: "Share the details", description: "Send the school, programme, subject and recent scores on WhatsApp so we can find a tutor with matching experience." },
    { title: "Review the match", description: "You get a tutor profile and a suggested slot, and you can ask questions before agreeing." },
    { title: "Try a free lesson", description: "Your child works on a real problem with the tutor while a parent watches." },
    { title: "Approve the plan and rate", description: "The schedule and price are written down before a booking is made." },
    { title: "Follow progress each week", description: "A short note follows every session, and a tutor swap is available if the fit is not right." },
  ],

  whyPoints: [
    { title: "A tutor who knows the course", description: "IB Chemistry HL, MYP Science and IGCSE Chemistry are matched to different specialists." },
    { title: "No commute to Surat", description: "The lesson comes to your child's desk, saving fuel, time and evenings." },
    { title: "Honest about local supply", description: "We state clearly that no IB school is confirmed in Navsari and that home visits are not offered." },
    { title: "Coaching, never ghost-writing", description: "Tutors explain and comment but do not write IAs, Extended Essays, TOK essays or coursework." },
    { title: "Notes for busy parents", description: "A written summary after each lesson keeps commuting parents informed." },
    { title: "Free first lesson, fair exit", description: "See a session before paying and change tutor if the fit is wrong." },
  ],

  tutorsIntro:
    "The tutors below are based in India and teach on IST, so timing is simple for a Navsari household. Each profile lists syllabuses and levels, and you can ask for a match by subject code.",

  faqs: [
    {
      question: "Can I get an IB tutor in Navsari?",
      answer:
        "Yes, online. There are very few IB specialists based in Navsari itself, so IB Gram's tutors teach live over video from elsewhere in India, on IST. Your child takes lessons at home on a laptop. Tutors do not visit homes in Navsari, because in-person tuition runs only in Gurugram and parts of Delhi NCR. A free trial lesson shows how a session works.",
    },
    {
      question: "Is IGCSE home tuition available in Navsari?",
      answer:
        "Online home tuition is available, but tutors do not come to your house. Your child has a private one-to-one lesson from their own room over video, with a tutor who has taught the specific Cambridge or Pearson Edexcel subject. In-person home visits are offered only in Gurugram and parts of Delhi NCR, and Navsari is outside that area.",
    },
    {
      question: "Which schools near Navsari teach IB or IGCSE?",
      answer:
        "We could not confirm any inside Navsari. Families usually look toward Surat, where Aarth Universal School, Fountainhead School and P. P. Savani Cambridge International School are frequently asked about, or toward Mumbai. Policies, fees and eligibility change, so contact each school directly. IB Gram has no affiliation with any of them and does not handle admissions.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Navsari?",
      answer:
        "It depends on the programme, subject, level, tutor experience and hours per week, so we quote in writing before you book instead of listing a headline price. Higher Level Diploma subjects cost differently from MYP support. Online lessons also avoid the fuel and time of travelling to Surat for specialist classes. The free trial helps you judge value first.",
    },
    {
      question: "Can a Gujarat Board or CBSE student move to IGCSE?",
      answer:
        "Yes. The smoothest point is the start of Class 9. The main adjustments are written explanations, command words and practical questions. A short bridging course with a subject tutor closes most gaps, and a diagnostic lesson at the start shows where the student stands.",
    },
    {
      question: "Which IB Maths course suits a Navsari student?",
      answer:
        "Analysis and Approaches suits students aiming at engineering, physics or economics. Applications and Interpretation suits business, social science and design paths. Universities sometimes specify one, so check target courses first. If undecided, a tutor can show sample questions from each and help the student see which style feels natural.",
    },
    {
      question: "Will tutors write IAs or Extended Essays?",
      answer:
        "No. Tutors coach only. They explain criteria, discuss topic choice and method and comment on drafts the student has written, but never write an IA, Extended Essay, TOK essay or any coursework. This keeps the work the student's own and avoids academic integrity problems.",
    },
    {
      question: "Which IGCSE boards do you cover?",
      answer:
        "Both Cambridge International and Pearson Edexcel International GCSE, with A Level and AS as context for students who continue. Papers and command words differ by board, so tell us the board and code and we will match a tutor who has taught that exact syllabus.",
    },
    {
      question: "What do we need for online lessons?",
      answer:
        "A laptop or tablet, stable broadband, headphones and a quiet desk are enough. In the monsoon, keep a phone hotspot as a backup and consider a small UPS for the router. A phone camera lets the student show handwritten working when required.",
    },
    {
      question: "Are lessons affected by Navratri or monsoon weather?",
      answer:
        "They can be, but plans handle it. During Navratri most families prefer afternoon slots or a short pause, and in heavy monsoon weeks we agree a backup such as a hotspot or a reschedule with notice. Tutors teach on IST from across India, so moving a lesson by a few hours is usually simple.",
    },
    {
      question: "When should preparation for the May exams begin?",
      answer:
        "For a demanding Diploma subject, six to eight months ahead is comfortable, and ten to twelve weeks is a minimum for focused revision. Starting early lets tutors fix concept gaps calmly. If the exam is close, tell us and we will design a compressed plan around the highest-value topics.",
    },
    {
      question: "Can private candidates get help for IGCSE?",
      answer:
        "Yes, with subject preparation. Private candidates often need help with pacing, practical paper technique and mark-scheme language. The complication is the exam centre, since centres accepting private candidates are limited in south Gujarat and deadlines come early. Confirm registration first and the tutor can plan backwards from the exam date.",
    },
    {
      question: "Do IB and IGCSE allow JEE, NEET and CUET?",
      answer:
        "Generally yes if subject and equivalence conditions are met. The Association of Indian Universities treats the IB Diploma as equivalent to Class 12. Rules change, so read the current bulletin before choosing subjects. Students aiming at JEE or NEET should plan Physics, Chemistry and Maths or Biology from the start.",
    },
    {
      question: "What happens in the free trial?",
      answer:
        "Your child works on a real topic or past-paper question live with a matched tutor, with a parent welcome to watch. Afterwards we send a short note and, if you wish to continue, a written rate. There is no obligation, and another tutor is offered if the fit is not right.",
    },
    {
      question: "Are the tutors based in Navsari?",
      answer:
        "No. Tutors live in different parts of India and teach on IST over video. That lets a Navsari student learn from someone who has taught the exact course, even though nobody nearby has. Tutors do not travel to Navsari, and no in-person tuition is offered here.",
    },
    {
      question: "How do I start from Navsari?",
      answer:
        "Message +91 7439 368 115 on WhatsApp or write to ibgram24@gmail.com with the school, programme, subject and recent marks. We suggest a tutor, arrange a free trial and confirm the rate in writing. Lessons are online, so all you need is a laptop and a quiet hour.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The national page listing every city we serve online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Diploma, MYP and PYP subject specialists." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Pearson Edexcel IGCSE support." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The structure and grading of the Diploma explained." },
    { label: "IB MYP support", href: "/programmes/myp/", description: "Criteria, Personal Project and subject support." },
    { label: "IB Maths tutoring", href: "/courses/ib/mathematics/", description: "AA and AI at SL and HL." },
    { label: "Our tutors", href: "/tutors/", description: "See who teaches which syllabus." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Book a free trial lesson." },
    { label: "IB and IGCSE tutors in Surat", href: "/surat/", description: "The nearest large city, thirty-five kilometres north." },
    { label: "IB and IGCSE tutors in Vapi", href: "/vapi/", description: "Another south Gujarat town served online." },
    { label: "IB and IGCSE tutors in Vadodara", href: "/vadodara/", description: "A larger Gujarat city with a university-town culture." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The area where in-person visits are offered." },
  ],

  closingHeading: "Start with a free trial lesson from Navsari",
  closingBody:
    "Tell us where your child studies, the subject and the exam window, and we will suggest a tutor who has taught that course. The first lesson costs nothing, the rate comes in writing and every session happens online from your own home.",
};
