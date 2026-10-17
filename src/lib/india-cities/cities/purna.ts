import type { CitySeoPage } from "../types";

/**
 * /purna/ - IB and IGCSE tutoring page for Purna, Parbhani district, Maharashtra. Online-only delivery:
 * tutors do not visit homes in Purna, since in-person home tuition is offered only in Gurugram and
 * parts of Delhi NCR. No IB or Cambridge/Edexcel school is confirmed in Purna or Parbhani, so
 * stripSchools is empty and the clusters point at Hyderabad and Pune, labelled as nearby cities.
 */
export const purna: CitySeoPage = {
  slug: "purna",
  countryName: "Purna",
  countryNameLong: "Purna, Maharashtra",
  demonym: "Purna",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekly slots are planned around the school day, the Ganeshotsav and Navratri weeks, and the sharp summer heat that comes before the Marathwada monsoon",
  lastUpdated: "2026-09-21",
  geo: { latitude: 19.18, longitude: 77.03 },
  wikipedia: "https://en.wikipedia.org/wiki/Purna,_Maharashtra",
  alternateNames: ["Purna Junction", "Purna Parbhani"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Purna | One-to-One Online Tuition",
  metaDescription:
    "Purna students get private IB and IGCSE lessons over live video: PYP, MYP, DP and Cambridge or Edexcel, Marathwada-aware scheduling, and a free trial class.",
  h1: "IB and IGCSE Tutors and Private Tuition from Home in Purna",
  heroEyebrow: "IB & IGCSE ONLINE TUITION IN PURNA, PARBHANI DISTRICT",
  heroSubtitle:
    "Private tuition from home in Purna for IB and IGCSE students works one way: your child learns from a specialist tutor over live video, at their own desk, and nothing needs to be travelled. We choose the tutor by subject and syllabus, begin with a free trial, and fix a weekly slot that leaves room for school, the railway-town routine and the long Marathwada summer.",
  primaryKeyword: "IB and IGCSE tutors in Purna",
  imageAltText: "A Purna student following a tutor's IGCSE Physics explanation on a laptop during a live evening lesson",
  secondaryKeywords: [
    "IB tutor Purna",
    "IGCSE tutor Purna",
    "IB home tuition Purna",
    "IGCSE home tuition Purna",
    "IB private tuition Purna",
    "IB Maths tutor Purna",
    "IGCSE Maths tutor Purna",
    "IB Physics tutor Purna",
    "IB Chemistry tutor Purna",
    "IB Biology tutor Purna",
    "IB DP tutor Purna",
    "IB MYP tutor Purna",
    "IB PYP tutor Purna",
    "IGCSE online tuition Purna",
    "Cambridge IGCSE tutor Purna",
    "IB tutor Parbhani district",
    "IGCSE tutor Purna Junction",
    "online IB tuition Marathwada",
    "IB tutor Nanded Purna",
    "IGCSE tuition Parbhani",
  ],

  heroTrustPoints: [
    "A tutor is selected for your child's exact IB subject and level or IGCSE specification code",
    "Tuition is online only in Purna; tutors do not come to the house, and home visits are limited to Gurugram and parts of Delhi NCR",
    "A free trial class, a short written note after each lesson, and a tutor swap if the pairing is wrong",
    "No affiliation with the IB, Cambridge, Pearson or any school or coaching class around Parbhani and Nanded",
  ],
  heroStats: [
    { value: "Marathwada", label: "Scheduled around local seasons" },
    { value: "PYP to DP", label: "All four IB stages covered" },
    { value: "Free trial", label: "One class before any decision" },
    { value: "May & Nov", label: "The two big exam windows" },
  ],

  intro: {
    heading: "Private IB and IGCSE tuition for a family in Purna",
    paragraphs: [
      "Purna is a railway-junction town on the river of the same name in Parbhani district, in the Marathwada region of Maharashtra. Its schools run the Maharashtra State Board and CBSE, and the region has a long tradition of cotton, soybean and jowar farming alongside a hardworking coaching culture that looks toward Latur, Nanded and Aurangabad for JEE and NEET preparation. An IB or Cambridge classroom is not part of that picture, so a student here who is on either programme is the exception, and usually there is a story behind it.",
      "The stories we hear are fairly consistent: a parent posted to the railway or a bank who moved the family from a Pune or Hyderabad school, a child returning from the Gulf, or a family planning a degree abroad that wants to begin IGCSE early. For all of them, IB and IGCSE tutors in Purna have to be found outside Purna, which is exactly what online tuition solves.",
      "A tutor in Delhi, Chennai or Pune can teach a Purna student as easily as one in the next lane, provided the subject expertise is right. So we start with the syllabus, not the location. If your child is in Class 11 doing IB Chemistry at Higher Level, the shortlist contains people who teach that course weekly, rather than a general science teacher willing to try.",
      "To be clear on one point that families often assume: no tutor will come to your home in Purna. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. Home tuition for Purna students means the lesson happens live on a laptop, one-to-one, with the student at home.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Children explore six transdisciplinary themes through units of inquiry, culminating in the Exhibition. Tutors strengthen reading, writing, number sense and the habit of asking good questions.",
      countryNote:
        "In a Marathi- and Hindi-speaking town, English fluency is the usual stumbling block for PYP children, so tutors lean on spoken English and reading aloud.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups, assessed by criteria and linked through global contexts, ending with the Personal Project or eAssessment options. Tutors explain the criteria and rehearse the written tasks.",
      countryNote:
        "A student arriving from a Maharashtra State Board school may find MYP tasks open-ended compared with the textbook-bound questions they know.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects with Theory of Knowledge, the Extended Essay and CAS. Tutors coach content and technique, and the student writes all submitted work.",
      countryNote:
        "Purna DP students tend to need help with Higher Level science and Mathematics, subjects that rarely have a local teacher with IB experience.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A flexible pathway combining Diploma courses with career-related study. Tutors support the academic courses.",
      countryNote:
        "Rare in Marathwada. Most families who ask are comparing it with the full Diploma or with Maharashtra HSC.",
    },
  ],
  programmesIntro:
    "Here is how each IB stage looks when taught one-to-one online, and where a student from the Purna area usually needs extra support.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, sequences, vectors and rigorous algebra, tested through timed past-paper drills." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, modelling and calculator-based work, suited to students who prefer applied problems." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, waves, electricity and modern physics, with extra attention to the extended-response papers." },
    { name: "Chemistry", levels: "SL and HL", description: "Quantitative chemistry, kinetics, organic reaction pathways and clear written explanation." },
    { name: "Biology", levels: "SL and HL", description: "Molecular and cell biology through ecology, with diagram and data-analysis practice." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, programming constructs and databases for students with no school teacher for the subject." },
    { name: "Economics", levels: "SL and HL", description: "Market structures, macroeconomic policy and diagram-led exam answers." },
    { name: "Business Management", levels: "SL and HL", description: "Business strategy tools, financial analysis and case study technique." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Paper 1 analysis, Paper 2 essays and the individual oral." },
    { name: "English B", levels: "SL and HL", description: "Language acquisition focused on written tasks, listening and speaking." },
    { name: "Marathi B", levels: "SL and HL", description: "A natural second language for local families, through texts, writing and the oral." },
    { name: "Hindi B", levels: "SL and HL", description: "Reading, written tasks and speaking for students from Hindi-speaking homes." },
    { name: "Geography", levels: "SL and HL", description: "Population, resources and the fieldwork-linked internal assessment skills." },
    { name: "Psychology", levels: "SL and HL", description: "Approaches to research, key studies and essay writing under timed conditions." },
  ],
  subjectsIntro:
    "Most requests from the Parbhani and Nanded belt are for the sciences, Mathematics and Economics. The subjects below are those tutors teach most often.",

  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core and Extended", description: "Number, algebra, geometry and statistics, with tier advice based on how the student performs on a past paper." },
    { name: "Additional Mathematics", levels: "Extended", description: "Differentiation, integration and functions, a strong bridge to IB Maths AA." },
    { name: "Physics", levels: "Core and Extended", description: "Motion, thermal physics, circuits and radioactivity, with Paper 4 style written answers." },
    { name: "Chemistry", levels: "Core and Extended", description: "Atomic structure, acids and bases, metals and organic chemistry." },
    { name: "Biology", levels: "Core and Extended", description: "Cell structure, nutrition, transport, inheritance and ecology." },
    { name: "Computer Science", levels: "Single tier", description: "Pseudocode, logic and a structured approach to the programming paper." },
    { name: "English as a Second Language", levels: "Single tier", description: "Reading, writing and speaking for students from Marathi- and Hindi-speaking homes." },
    { name: "English Language", levels: "Single tier", description: "Comprehension and directed writing for first-language English papers." },
    { name: "Economics", levels: "Single tier", description: "Basic economic problem, markets and government policy." },
    { name: "Accounting", levels: "Single tier", description: "Ledgers, financial statements and ratio analysis, useful for students heading toward commerce." },
    { name: "Marathi and Hindi as foreign or second languages", levels: "Single tier", description: "Where the school or board offers them, tutors support reading and writing." },
    { name: "Geography", levels: "Single tier", description: "Physical processes, settlement and the alternative-to-coursework paper." },
  ],
  igcseSubjectsIntro:
    "A Purna student can sit Cambridge or Edexcel IGCSE through an authorised centre elsewhere, and tutors work from the specification code to keep practice aligned with the board.",

  regionsTitle: "Purna and the villages and towns around it",
  regionsIntro:
    "Online lessons need only a laptop and a connection, so students from the whole of the Purna area can join. These notes describe each pocket of the catchment and what matters for timetabling.",
  regions: [
    { name: "Purna town centre", note: "The core of the town, where most CBSE and private schools sit. Evening slots after school are the easiest." },
    { name: "Purna Junction area", note: "Railway staff households live around the junction, and shift work sometimes makes weekend lessons more practical." },
    { name: "Parbhani city", note: "The district headquarters and the main education centre of the district, with the agricultural university and a larger number of private schools." },
    { name: "Nanded", note: "A bigger city, reached by train, with more coaching classes and some CBSE schools; many Purna families compare options there." },
    { name: "Hingoli side", note: "Turmeric-growing country to the south; families here often balance farm seasons with study timings." },
    { name: "Basmat and Kalamnuri belt", note: "Smaller towns where local tutors for international boards are almost non-existent, so tuition is online." },
    { name: "Gangakhed and Palam", note: "Towns on the Godavari side of Parbhani district, with longer roads to major cities." },
    { name: "Purna riverside villages", note: "Villages along the Purna river. Mobile coverage is generally good, and a hotspot can be a backup." },
    { name: "Latur and Aurangabad routes", note: "Cities that Purna students visit for coaching and school fairs; online tuition spares the weekly journey." },
  ],

  schoolClusters: [
    {
      city: "Purna and Parbhani district",
      note: "We could not confirm an IB World School or a Cambridge or Edexcel IGCSE school in Purna or Parbhani, so none is named. Local education follows the Maharashtra State Board and CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Hyderabad",
      note: "A direct rail connection makes Hyderabad the closest large city with confirmed international schools, and it is where many Marathwada families look first.",
      schools: ["Oakridge International School, Hyderabad"],
    },
    {
      city: "Nearby: Pune",
      note: "Pune has the strongest cluster of IB and IGCSE schools in Maharashtra; a few Marathwada families relocate or board there.",
      schools: ["Mahindra International School", "Symbiosis International School", "Indus International School, Pune"],
    },
    {
      city: "Nearby: Mumbai",
      note: "Mumbai's international schools are far from Purna, and families usually consider them only for a full move.",
      schools: ["Dhirubhai Ambani International School", "Oberoi International School"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is independent. It has no affiliation, sponsorship or partnership with the IB Organization, Cambridge, Pearson Edexcel, or any school listed here. The schools are named only as geographic context for families in and around Purna.",

  modes: [
    {
      title: "Private online lessons from home",
      description:
        "One student, one tutor, live video, from your own study table.",
      bullets: [
        "Shared whiteboard and annotated past papers",
        "Fixed weekly slot, adjustable around school events",
        "Written note after each lesson",
      ],
    },
    {
      title: "Sibling or classmate pair",
      description:
        "Two students at the same level share a tutor, which suits families with brothers and sisters in the same programme.",
      bullets: [
        "Same syllabus and pace",
        "Costs quoted in writing",
        "Easy to return to one-to-one",
      ],
    },
    {
      title: "Exam-window crash courses",
      description:
        "A few weeks of dense, paper-driven revision before an IGCSE or IB session.",
      bullets: [
        "Diagnostic paper in the first lesson",
        "Targeted topics and timing practice",
        "Mark scheme review after every attempt",
      ],
    },
  ],
  modesIntro:
    "Tutors do not visit homes in Purna; in-person home tuition runs only in Gurugram and parts of Delhi NCR. All three formats below are online.",

  sections: [
    {
      heading: "What IB or IGCSE is like for a student in Purna, Parbhani district",
      paragraphs: [
        "Education in Purna is organised around the Maharashtra State Board, CBSE and the strong pull of competitive entrance exams. The classes that dominate conversation among parents are 10 and 12, followed closely by JEE and NEET plans. An international curriculum seldom features, which has two consequences for any family who has chosen it: the child cannot lean on classmates or neighbouring teachers for help, and the family often has to explain to relatives what IGCSE even is.",
        "Even so, there are reasons to take the route. A parent who works for the railways or a bank is moved every few years, and an IB or IGCSE school allows a child to continue the same syllabus in whichever city the family lands. Others think of study abroad and view the IGCSE as a first step. A smaller group simply wants a broader, writing-heavy education than a recall-based board provides.",
        "What the student actually experiences is a curriculum with fewer fixed questions and more demand for explanation. An IGCSE Biology answer must use the right terms and fit the mark allocation; an IB Economics paper rewards diagrams that are labelled and applied to a given case. Students from a state-board background pick this up quickly with feedback, and that is where one-to-one tuition earns its place.",
        "Whether your child attends an international school elsewhere or studies through an online provider, a weekly lesson with a tutor trained in the syllabus gives the structure that Purna's school landscape cannot.",
      ],
    },
    {
      heading: "Maharashtra State Board, CBSE, IGCSE and IB: what changes for a Purna student?",
      paragraphs: [
        "The headline difference is assessment. Maharashtra State Board and CBSE ask for correct answers to defined questions, mostly in end-of-year papers. IGCSE adds tiers and a mix of papers, and the IB asks for sustained coursework alongside exams. Memory alone carries a student a long way in the first two; the second two reward the ability to apply a rule to a new situation.",
        "Language matters in Purna in a way it does not in big cities. Many students think in Marathi or Hindi and write in English, which is perfectly workable but means the writing papers, especially English Language and the humanities, need deliberate practice. A tutor can read a draft answer and point out where an idea is clear but the phrasing is not.",
        "Pace also differs. The IB and Cambridge syllabuses are covered steadily across two years, with internal assessments and mock exams, instead of the long dash toward a single board exam. Students used to that dash sometimes under-prepare early and panic late.",
        "Use the table as a rough orientation only, then talk to us about your child's own situation.",
      ],
      table: {
        caption: "Maharashtra State Board, CBSE, IGCSE and IB at a glance for Purna",
        columns: ["Feature", "Maharashtra State Board", "CBSE", "Cambridge or Edexcel IGCSE", "IB Diploma"],
        rows: [
          ["Medium available locally", "Marathi, English", "English, Hindi", "English", "English"],
          ["Main assessment", "Year-end board exams", "Board exams plus internal marks", "Subject papers, some coursework", "Exams plus IA, EE, TOK"],
          ["Local schools in Purna", "Many", "Some", "Not confirmed", "Not confirmed"],
          ["Entrance route in India", "MHT-CET, JEE, NEET", "JEE, NEET, CUET", "Needs Class 12 level qualification", "AIU equivalence, CUET, JEE and NEET eligibility checks"],
          ["Tutor route for Purna", "Local classes", "Local classes", "Online one-to-one", "Online one-to-one"],
        ],
      },
    },
    {
      heading: "How much will IB and IGCSE tuition cost in Purna?",
      paragraphs: [
        "Our rates are given in writing after the trial lesson, never as a public list, because they genuinely vary. The programme and level set the first part: PYP and MYP lessons price differently from DP Higher Level science. The second part is the tutor's profile, including years of teaching and examining experience. The third is how many hours you want each week.",
        "For a Purna family the comparison with local options is useful. A coaching class in Nanded or Latur might look cheaper per month, but it leaves out the bus or train fare, the lost hours, and the fact that the class teaches a different syllabus. The online route removes the travel and brings in a tutor who teaches the right course.",
        "There is also the matter of exam seasons. A student sitting a May session may take extra weekly hours in March and April, then reduce afterward. We arrange that flexibly, with the new rate confirmed in writing each time.",
        "If you prefer to try before committing, the trial lesson is free. A tutor change is also free, which is something no single local teacher can offer.",
      ],
      bullets: [
        "Programme and level: PYP, MYP, IGCSE, DP SL or HL",
        "Tutor experience and subject scarcity",
        "Weekly hours and exam-season intensity",
        "One-to-one or a shared sibling lesson",
      ],
    },
    {
      heading: "Is online tuition better than a Nanded coaching class or a local private tutor for IB and IGCSE?",
      paragraphs: [
        "It depends what the student needs. For Maharashtra State Board or CBSE subjects, local classes and teachers are a natural choice. For IB or IGCSE, the problem is not teaching quality but syllabus knowledge: someone has to know that IB Physics Paper 2 has a particular structure, or that IGCSE Chemistry practical papers are assessed in a specific way.",
        "Online one-to-one tuition puts a tutor with that knowledge in front of the student weekly. It is flexible about timing, which matters in a junction town where parents' shift hours and school buses vary. It also gives a written record of progress.",
        "Local coaching has real advantages for exam culture, peer motivation and routine, and some Purna students will want both: a coaching class for JEE or NEET alongside online IB tuition. The two can coexist if the timetable is realistic.",
        "Self-study with past papers works best as an add-on rather than a stand-alone plan. The table lays out the options.",
      ],
      table: {
        caption: "Tuition options compared for a Purna family",
        columns: ["Option", "Knows IB or IGCSE syllabus", "Travel", "Flexibility", "Typical use"],
        rows: [
          ["Online one-to-one", "Yes, matched to subject and board", "None", "High", "Core subject support for IB and IGCSE"],
          ["Coaching class in Nanded or Latur", "Rarely", "Regular train or bus travel", "Low, fixed batches", "JEE and NEET preparation"],
          ["Local private tutor", "Sometimes, for IGCSE Maths only", "Tutor comes to the house", "Medium", "State-board subjects and homework help"],
          ["Self-study", "Depends on the student", "None", "Complete", "Past-paper practice and revision"],
        ],
      },
    },
    {
      heading: "Exam calendar and the Marathwada school year: what should Purna families plan for?",
      paragraphs: [
        "The Indian academic year usually starts in June, and IB Diploma candidates in the northern-hemisphere calendar sit exams in May of their second year. Cambridge and Edexcel IGCSE offer May/June and October/November series, and Edexcel also has a January series in some subjects. A Purna student in Class 10 doing IGCSE therefore has a very different rhythm from a classmate on the State Board, whose exams fall in February and March.",
        "Marathwada's seasons add to the picture. The summer from April to June is severe, and the region is prone to water stress in dry years, so electricity and water routines can affect study hours. The monsoon arrives in June and brings cooler evenings that are, conveniently, good study time. October and November are festival-heavy, with Dussehra and Diwali often falling in the weeks that matter for the November session.",
        "Ganeshotsav, in late summer, is a major household event, and Navratri keeps evenings busy. Pola, Makar Sankranti and Gudi Padwa each take a day or two. We note family commitments during the trial and plan the weekly slot around them, with extra lessons placed before the busiest festival weeks.",
        "Always check exact examination dates on the official IB, Cambridge or Pearson timetable for your session.",
      ],
      table: {
        caption: "A planning calendar for Purna students",
        columns: ["Months", "Exam or school milestone", "Local rhythm", "What to do"],
        rows: [
          ["January to March", "Mocks, State Board exams for neighbours, Edexcel January series", "Pleasant weather, Makar Sankranti", "Use the cool months for full past papers"],
          ["April to June", "IB May session, IGCSE May/June", "Intense heat, water stress", "Move lessons to early morning or late evening"],
          ["June to August", "New school year begins", "Monsoon arrives", "Settle the weekly routine and set a baseline test"],
          ["August to September", "First-term assessments, MYP and DP internal tasks", "Ganeshotsav", "Front-load work before the festival days"],
          ["October to November", "IGCSE October/November series, IB November session", "Navratri, Dussehra, Diwali", "Finish heavy revision before the festival fortnight"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Purna study after school?",
      paragraphs: [
        "Within India, the Association of Indian Universities recognises the IB Diploma as equivalent to Class 12 for university admission, and many universities accept it directly or through CUET-UG. Some institutions look at specific subject combinations, so a Purna student should check the target course's requirements early. IGCSE alone is a Class 10 level qualification, so students move on to the IB Diploma, A Levels or an Indian Class 12.",
        "For engineering, IB students with Mathematics and Physics can pursue JEE Main and Advanced if they meet the eligibility conditions in the current information brochure; for medicine, NEET-UG expects Physics, Chemistry and Biology. Neither is automatic, and families should read the official criteria each year.",
        "Regional options include the university and engineering colleges of Aurangabad, Nanded and Pune, and many students look at Pune and Mumbai institutions with strong liberal-arts or commerce programmes. A smaller number plan study in the UK, USA, Canada, Australia or Europe, where IB scores and IGCSE results both appear on applications.",
        "A tutor will not pick a path, but can tell you how a subject mix at Higher Level lines up with the entrance route you have in mind.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG for Indian universities",
        "JEE Main, JEE Advanced and NEET-UG eligibility checks",
        "UK UCAS, US, Canadian and Australian routes built on IB or A Level scores",
      ],
    },
    {
      heading: "What does a typical online IB Maths or Science lesson look like?",
      paragraphs: [
        "A good lesson has a rhythm. It opens with a check on the last week's homework, then moves to a new idea explained on the whiteboard, followed by a problem the student solves while the tutor watches. The student says the reasoning aloud, which is the fastest way for a tutor to catch a misconception.",
        "In Mathematics, tutors write on a digital pen tablet so that the student sees each line appear. For Analysis and Approaches this might be a calculus question: differentiate, locate the stationary point, justify it. In Applications and Interpretation the focus often shifts to a graphic display calculator and a statistics context.",
        "Science lessons mix concept and paper. In Chemistry, for example, a tutor might unpack a rate-of-reaction graph, then ask the student to write a four-mark explanation and compare it to the mark scheme. In Physics, the same loop applies to a circuit or wave question.",
        "After the lesson, the tutor sends a short note listing what was covered and a few practice questions. Internal assessment work stays with the student; tutors teach the skills behind it.",
      ],
    },
    {
      heading: "Choosing IGCSE subjects and tiers: guidance for Purna students",
      paragraphs: [
        "Students normally take five to eight IGCSE subjects. A typical combination for a student heading toward IB Diploma science includes Mathematics, Physics, Chemistry, Biology, English and a language, with Additional Mathematics added for those who want a head start. The decision should rest on strengths and the IB subjects planned for Class 11.",
        "Tier choice is where most mistakes happen. Core caps the grade, while Extended opens higher ones, and a student who sits Extended but is not secure in the basics may do worse than on Core. A trial lesson with a past paper from each tier tells us far more than a teacher's guess.",
        "Board choice is the other half. Cambridge and Edexcel IGCSE share names but not papers, and the school you join will specify one. If you are choosing before enrolling, look at which board the candidate schools use and which has more tutors available in your subjects.",
        "Starting early helps. Beginning IGCSE support in the first term of Class 9, even for one hour a week, is easier than catching up in Class 10.",
      ],
    },
  ],

  process: [
    { title: "Share the brief", description: "Send the programme, subject, level, board and any recent marks on WhatsApp or by email." },
    { title: "Receive a match", description: "We propose one or two tutors from our national pool who teach exactly that course." },
    { title: "Attend a free trial", description: "The student has a live class with the proposed tutor, and a parent is welcome to watch." },
    { title: "Get rates in writing", description: "After the trial we send the weekly rate and schedule for your approval." },
    { title: "Begin weekly lessons", description: "Lessons start, notes follow every class, and we review progress periodically." },
  ],
  whyPoints: [
    { title: "Syllabus-level matching", description: "Tutors are chosen for the exact IB subject and level or IGCSE code, not a generic subject." },
    { title: "Straight talk on delivery", description: "Purna lessons are online. We never imply a home visit, which exists only in Gurugram and parts of Delhi NCR." },
    { title: "Try before paying", description: "The first lesson is free, with no obligation to continue." },
    { title: "Parent-friendly notes", description: "A written summary after each session shows what was taught and what comes next." },
    { title: "Ethical coaching", description: "We teach skills and review practice work but never write coursework, IAs, EEs or TOK essays." },
    { title: "Easy tutor swaps", description: "If the pairing does not click, we replace the tutor." },
  ],

  tutorsIntro:
    "These tutors teach IB and IGCSE online in IST, and many already work with students in small towns across Maharashtra. Look through a few profiles, then send your brief.",

  faqs: [
    {
      question: "Can I find IB and IGCSE tutors in Purna?",
      answer:
        "Yes, through online tuition. Our tutors are based in different Indian cities and teach live over video, so a Purna student can work with someone who teaches the exact course. No tutor visits homes in Purna; in-person home tuition is limited to Gurugram and parts of Delhi NCR. A free trial lesson comes first.",
    },
    {
      question: "Is IB home tuition available in Purna?",
      answer:
        "Online home tuition is. Your child studies at home, on a laptop, with a tutor teaching live and one-to-one. A tutor will not come to your house in Purna, because home visits exist only in Gurugram and parts of Delhi NCR. For IB, this is often the better option, since the right specialist may live in another city entirely.",
    },
    {
      question: "Are there IB or IGCSE schools in Purna?",
      answer:
        "We could not confirm any IB World School or Cambridge or Edexcel school in Purna or in Parbhani, so we name none. Local schools follow the Maharashtra State Board and CBSE. Families who want an international school typically look at Hyderabad or Pune, and some use online schooling with tutor support in the meantime.",
    },
    {
      question: "What does IB tuition cost in Purna?",
      answer:
        "Rates depend on the programme, the subject, the level and the tutor's experience, and we give them in writing after the free trial. There is no public price list. You do not pay for travel, since lessons are online. Higher Level DP subjects generally cost more than primary or middle-years support.",
    },
    {
      question: "Do you teach both Cambridge and Pearson Edexcel IGCSE?",
      answer:
        "Yes. The two boards cover similar topics but set different papers, so we ask for your syllabus code and match a tutor who works with it. Examples are 0580 for Cambridge Mathematics and 4MA1 for Edexcel Mathematics A. Practice is drawn from the correct board's past papers and mark schemes.",
    },
    {
      question: "My child studies on the Maharashtra State Board. Can they switch to IGCSE?",
      answer:
        "Yes, and the earlier the better. Class 8 or 9 is a natural switching point. A tutor compares what the student knows with the IGCSE specification, then fills gaps and teaches exam style, especially written explanation. The school you choose elsewhere will handle registration; the tutor supports learning in the weeks around it.",
    },
    {
      question: "Can tutors help with the Extended Essay or IA?",
      answer:
        "They can teach the skills but not write or edit the work. Tutors explain the criteria, help plan a method, and talk through how to structure an argument. The submitted essay or report must be entirely the student's own, as the IB requires, and our tutors follow that rule strictly.",
    },
    {
      question: "How are lessons scheduled around the Purna school day?",
      answer:
        "Slots are fixed with the family. Most Purna students prefer weekday evenings or weekend mornings, and in the hot months an early-morning slot is common. We avoid school hours, plan around Ganeshotsav and Navratri, and try to keep the same slot weekly so the routine sticks.",
    },
    {
      question: "What internet speed do we need?",
      answer:
        "A stable broadband or 4G connection that supports video calls is enough. In Purna town this is generally fine, and villages around may need a trial test. Keep a mobile hotspot as a backup during the monsoon, when power and connectivity can be unpredictable.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes. The first lesson with a proposed tutor is free and carries no obligation. We ask for the subject, level and a recent past paper in advance so that the trial is useful. If you like the tutor, we send rates in writing; if not, we suggest another tutor.",
    },
    {
      question: "Can my younger child get PYP support?",
      answer:
        "Yes. PYP tuition is lighter and more interactive: reading practice, number games, and writing short pieces tied to the unit of inquiry. Sessions are shorter than for older students. It suits a child who has joined an IB school from a State Board background and needs to catch up in English.",
    },
    {
      question: "Do tutors teach in Marathi or Hindi?",
      answer:
        "Lessons are mostly in English because exams are in English. Tutors can explain a concept in Hindi, and sometimes in Marathi, when it helps a young or struggling student. Tell us your preference while writing in, and we will try to shortlist tutors who can switch languages comfortably.",
    },
    {
      question: "Can my child prepare for JEE or NEET and IB at the same time?",
      answer:
        "Many students try. It is demanding but possible with a realistic timetable. An IB Higher Level science course overlaps with parts of the JEE or NEET syllabus, though not entirely. Tell your tutor about the entrance plan, and ask early whether your subject mix meets the eligibility rules in the current brochures.",
    },
    {
      question: "Is IB Gram connected to any school or coaching class near Purna?",
      answer:
        "No. We are an independent tutoring service with no affiliation to the IB Organization, Cambridge, Pearson, or any school or coaching class in Parbhani, Nanded, Latur or elsewhere. Schools named on this page appear only as regional context. Our matching depends on subject, level and fit.",
    },
    {
      question: "What if my child does not get along with the tutor?",
      answer:
        "Let us know and we will change the tutor. A mismatch in style or pace is normal and not anyone's fault. You can ask for a change after the trial or any time later, and we will find another tutor with the right subject expertise.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with your child's programme, subject, level and board. We reply with a suggested tutor and a trial time. You will see the rate in writing before you commit to anything.",
    },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "A look at how online matching works for smaller towns across the country." },
    { label: "In-person home tuition in Gurugram", href: "/gurgaon/", description: "The only region where tutors visit homes." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subjects explained simply." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, core elements and assessment for Class 11 and 12." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, units and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led learning for younger students." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Comparing AA and AI at HL and SL." },
    { label: "Find a tutor", href: "/tutors/", description: "See tutor profiles by subject and programme." },
    { label: "Get in touch", href: "/contact-us/", description: "Send a brief and book your trial class." },
    { label: "IB and IGCSE tutoring in Parbhani", href: "/parbhani/", description: "The district headquarters, a short rail journey away." },
    { label: "IB and IGCSE tutoring in Nanded", href: "/nanded-waghala/", description: "The larger Marathwada city south-east of Purna." },
    { label: "IB and IGCSE tutoring in Latur", href: "/latur/", description: "Marathwada's best-known coaching city." },
  ],

  closingHeading: "Book a free IB or IGCSE trial class from Purna",
  closingBody:
    "Write to us on WhatsApp at +91 7439 368 115 or at support@ibgram.com with your child's course and board. A tutor suggestion and a free trial slot will follow, with rates in writing before any commitment.",
};
