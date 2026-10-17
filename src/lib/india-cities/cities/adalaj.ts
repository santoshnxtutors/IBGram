import type { CitySeoPage } from "../types";

/**
 * Adalaj (Gandhinagar district, Gujarat; the stepwell village-town on the Ahmedabad-Gandhinagar corridor).
 * No IB or IGCSE school in Adalaj itself could be confirmed (edustoke lists none for Gandhinagar), so
 * stripSchools is empty; clusters reuse names verified on the Ahmedabad page and are labelled as nearby.
 */
export const adalaj: CitySeoPage = {
  slug: "adalaj",
  countryName: "Adalaj",
  countryNameLong: "Adalaj, Gandhinagar district, Gujarat",
  demonym: "Adalaj",
  flagCode: "in",
  countryCode: "IN",
  state: "Gujarat",
  stateCode: "IN-GJ",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings and Sunday mornings, left clear for the nine nights of Navratri, Uttarayan and the pre-monsoon heat",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.1655, longitude: 72.5809 },
  alternateNames: ["Adalaj Gandhinagar", "Adalaj stepwell", "Adalaj Vav", "Rudabai Vav", "Adalaj Gujarat"],
  wikipedia: "https://en.wikipedia.org/wiki/Adalaj",
  stripSchools: [],

  title: "IB & IGCSE Tutors for Adalaj | Private Tuition at Home",
  metaDescription:
    "Adalaj families can learn IB and IGCSE Maths, sciences and Gujarati with a private video tutor, timed around Navratri. The first lesson is free.",
  h1: "IB and IGCSE Tutors in Adalaj for Private Tuition Taken at Home",
  heroEyebrow: "STEPWELL TOWN, GANDHINAGAR DISTRICT: IB & IGCSE TUITION ON VIDEO",
  heroSubtitle:
    "Adalaj sits on the busy road between Ahmedabad and Gandhinagar, close to some of Gujarat's most competitive schools and still short of teachers who actually know the IB and IGCSE. Our answer to a search for home tuition in Adalaj is private tuition at home on a live video call, since no tutor drives out from our side. Name the subject, the level and one free evening, and we shortlist someone who has taught that paper.",
  primaryKeyword: "IB and IGCSE tutors in Adalaj",
  imageAltText: "An Adalaj student studying for IB Economics with an online tutor on a laptop at a home desk",
  secondaryKeywords: [
    "IB tutor Adalaj",
    "IGCSE tutor Adalaj",
    "IB home tuition Adalaj",
    "IGCSE home tuition Adalaj",
    "IB private tuition Adalaj",
    "IB Maths tutor Adalaj",
    "IGCSE Maths tutor Adalaj",
    "IB Physics tutor Adalaj",
    "IB Chemistry tutor Adalaj",
    "IB Biology tutor Adalaj",
    "IB DP tutor Adalaj",
    "IB MYP tutor Adalaj",
    "IB PYP tutor Adalaj",
    "IGCSE online tuition Adalaj",
    "online IB tutor Gandhinagar district",
    "IGCSE tutor Adalaj Gandhinagar",
    "IB tutor Adalaj Ahmedabad highway",
    "IB tutor Uvarsad",
    "IGCSE Chemistry tutor Adalaj",
    "online tuition Adalaj Gujarat",
  ],

  heroTrustPoints: [
    "Teachers who have previously taught the very paper your child will sit",
    "Evening video classes held at one steady hour, no highway drive",
    "A free trial class, then a written quote",
    "Free of any link to the IB, Cambridge, Pearson or a school",
  ],
  heroStats: [
    { value: "Online", label: "Format of every lesson" },
    { value: "Gujarati", label: "Language support available" },
    { value: "PYP to DP", label: "IB programmes covered" },
    { value: "Free trial", label: "First class at no charge" },
  ],

  intro: {
    heading: "Studying the IB or IGCSE from Adalaj: the plain facts",
    paragraphs: [
      "Adalaj is best known for its five-storey stepwell, the Rudabai Vav, finished in the late fifteenth century and now a protected monument. Around it a fast-growing township has spread along the Ahmedabad to Gandhinagar corridor in Gandhinagar district, with housing societies, small industry and a large Trimandir temple. Many of its working residents commute to Ahmedabad or to the government offices of Gandhinagar. Schools in Adalaj itself follow the Gujarat Board or CBSE.",
      "This is a household type that asks about international curricula more than most: professionals in Gandhinagar's secretariat, in GIFT City and in Ahmedabad's technology, pharma and business sector, plus families with relatives in the UK, Canada, Australia or the US. The trouble is that the nearest known international schools are in Ahmedabad, and a daily trip into the city is a real burden for a child.",
      "So the lessons are delivered online. Nobody from IB Gram will ring your doorbell, and a visiting tutor is available in Gurugram and parts of Delhi NCR alone. What reaches an Adalaj home is a private video class, a single student with a teacher who has coached the specific course.",
      "IB Gram works on its own account, without any formal link to the IB Organization, Cambridge, Pearson Edexcel or the schools named in this page, and it neither secures seats nor guarantees grades. Tutors explain, correct and coach, and every Internal Assessment, Extended Essay, TOK essay and coursework task remains the student's own writing.",
    ],
    bullets: [
      "IB PYP, MYP, Diploma and Career-related programmes",
      "Cambridge and Pearson Edexcel IGCSE",
      "A single student per lesson, same slot weekly",
      "A written note for parents after class",
      "Plans that avoid Navratri, Uttarayan and exam clashes",
    ],
  },

  programmesIntro:
    "We were unable to verify an IB or IGCSE school in Adalaj itself, so most children follow the programme through a school in Ahmedabad, an online school or private study. This is what each IB stage involves for a family on the Gandhinagar side.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5 (age three to eleven)",
      description:
        "Pupils work on themes that cut across subjects and learn to ask questions, find answers and reflect on their own progress. The last year ends with the Exhibition, a group inquiry that the whole school sees.",
      countryNote:
        "A younger child in Adalaj moving between Gujarati at home and English in lessons enjoys stories, rhymes and number games. Exhibition questions can come from the stepwell, from water management in a dry state or from the Sabarmati.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to Class 10 (age eleven to sixteen)",
      description:
        "Published criteria are used to grade work, so reasoning and application pay off. In the final year the student plans and completes a Personal Project alone.",
      countryNote:
        "Children from Gujarat Board or CBSE classrooms find criteria marking unfamiliar, so early lessons practise structure, working shown in full and short reports.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and Class 12 (age sixteen to nineteen)",
      description:
        "Over two years a student takes six courses, some Higher and some Standard Level, and completes the Extended Essay, Theory of Knowledge and CAS as well. Exams are held in May or November, and coursework marked by teachers also feeds into the grade.",
      countryNote:
        "Adalaj students often choose Maths, sciences, Economics and Business, reflecting Gujarat's trading and technology strengths. Anyone weighing JEE or NEET alongside should plan the weekly load from the start of Class 11.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and Class 12 (age sixteen to nineteen)",
      description:
        "Selected Diploma courses go together with a career strand and a reflective project.",
      countryNote:
        "Not often met in Adalaj. If it comes up, the academic courses are ours to teach, and we help the student pace the project beside the exams.",
    },
  ],

  subjectsIntro:
    "Pairing is by course and level. Higher Level Economics asks for different experience from Class 9 IGCSE Physics, which is why we confirm the syllabus before suggesting anyone.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, algebra, vectors and proof. Gujarat students bring strong arithmetic and learn to explain why each step is valid." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling with technology; explorations can use textile prices, Sabarmati river levels or commuter traffic data." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, circuits and fields, plus an internal investigation where measurement quality counts." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, kinetics, equilibrium and organic chemistry, with pharmaceutical and chemical-industry examples close by." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology, where exact wording and data handling matter." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets, macro policy and development, with Gujarat's trade, GIFT City finance and industrial clusters as local cases." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers on strategy, finance and operations, using the family-firm culture of the region." },
    { name: "IB Geography", levels: "HL / SL", description: "Freshwater, cities and development, with the Sabarmati and a fast-growing corridor offering fieldwork." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water stress, land use and heat, which are live questions in semi-arid Gujarat." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading plus the individual oral, for students who speak Gujarati at home." },
    { name: "IB Gujarati A or B", levels: "SL / HL", description: "Literature and language to IB standard for students who read and speak Gujarati but have not studied it formally." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, systems and databases; the project is judged on design, testing and documentation." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "How we justify what we say we know, worked out in conversation." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "A 4,000-word independent study. Scope and method are discussed with the tutor, and the student writes every line." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Investigation, analysis and evaluation written to the criteria." },
  ],

  igcseSubjectsIntro:
    "IGCSE students in Adalaj mostly attend an Ahmedabad school or an online school, or sit as private candidates. The syllabus code and tier guide our matching, because Extended, Additional and Edexcel Higher Mathematics are prepared in different ways.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Core or Extended, Foundation or Higher", description: "A broad syllabus on which marks slip through thin working and unread command words." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and trigonometry a year early, a good bridge to IB Maths AA." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, energy, circuits and waves, with a paper on planning and evaluating experiments." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Reactivity, rates, electrolysis and organic basics, with tests for ions and gases." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Wide content and questions on how experiments are designed." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Algorithms, pseudocode and coding." },
    { name: "IGCSE English as a First or Second Language", levels: "Grade 9-10", description: "Directed writing, summaries and comprehension, for students whose first thoughts are in Gujarati." },
    { name: "IGCSE Gujarati as a Second Language", levels: "Grade 9-10", description: "Reading, writing and speaking tasks, where the exam centre offers the paper." },
    { name: "IGCSE Economics and Business Studies", levels: "Grade 9-10", description: "Sharp definitions, calculations and data-based answers." },
    { name: "IGCSE Accounting", levels: "Grade 9-10", description: "Ledgers, final accounts and ratios, popular with trading families." },
  ],

  regionsTitle: "Adalaj and the Gandhinagar-Ahmedabad corridor: where our online tutors reach",
  regionsIntro:
    "All teaching is on screen, so timing and connection are what matter. The notes below describe how the day tends to run in each area, so a slot can be picked sensibly. No tutor travels to any of them.",
  regions: [
    { name: "Adalaj village and stepwell area", note: "The old core around the Rudabai Vav, busy with visitors at weekends and quiet on weekday evenings." },
    { name: "Adalaj Circle and highway side", note: "Homes along the Ahmedabad-Gandhinagar road, where commuters return late and traffic is loud at peak hours." },
    { name: "Trimandir area", note: "A temple neighbourhood with steady footfall and many housing societies nearby." },
    { name: "Adalaj housing societies", note: "Newer gated societies with reliable power and fibre broadband, home to many professional families." },
    { name: "Uvarsad", note: "A neighbouring village along the Gandhinagar road, increasingly residential." },
    { name: "Vaishnodevi Circle", note: "A busy junction on the ring road between Ahmedabad and Gandhinagar, convenient for commuters." },
    { name: "Sargasan and GIFT City side", note: "Gandhinagar's business and finance district, home to the finance and technology workers whose families sometimes ask about the IB." },
    { name: "Gandhinagar sectors", note: "The planned government capital to the north, with schools and offices arranged by sector." },
    { name: "Bopal and Shela", note: "Ahmedabad's western suburbs, a short drive south, where several international schools are found." },
  ],

  schoolDisclaimer:
    "IB Gram teaches independently of the IB, Cambridge, Pearson and every school. No IB or IGCSE school in Adalaj itself passed our checks, so the groups below name schools in Ahmedabad already checked on our Ahmedabad page. Please confirm curriculum and admissions with each school directly.",
  schoolClusters: [
    {
      city: "Adalaj: no confirmed local option",
      note: "Schools in Adalaj follow the Gujarat Board or CBSE. We found no IB or Cambridge or Edexcel school in Adalaj itself, so international study usually means Ahmedabad, an online school or private tuition.",
      schools: [],
    },
    {
      city: "Nearby: western Ahmedabad",
      note: "The suburbs of Bopal, Shela and the SG Highway are a short drive away and host several international schools.",
      schools: ["Calorx Olive International School", "Ahmedabad International School", "Fountainhead School"],
    },
    {
      city: "Nearby: wider Ahmedabad",
      note: "Further into the city are more schools with international programmes, for families willing to commute or board.",
      schools: ["Eklavya School", "The Riverside School", "Mahatma Gandhi International School"],
    },
  ],

  modesIntro:
    "Tuition for Adalaj is online. Three arrangements cover what most families ask for.",
  modes: [
    {
      title: "Ongoing weekly classes",
      description:
        "A private hour on a fixed day with a shared whiteboard, taught by someone who knows the syllabus well.",
      bullets: [
        "Nobody visits Adalaj; teaching is by video",
        "The same teacher through the term",
        "Parents receive notes",
        "Visits to homes happen only in Gurugram and parts of Delhi NCR",
      ],
    },
    {
      title: "Final-stretch revision",
      description:
        "Concentrated lessons over the weeks preceding May or November, working from previous papers and mark schemes.",
      bullets: [
        "Timed papers at home",
        "Work on the weakest topics",
        "Command-word practice",
        "Dates chosen away from Navratri and Diwali",
      ],
    },
    {
      title: "Transition from the Gujarat Board or CBSE",
      description:
        "A compact course for a student heading toward IGCSE or IB work, repairing gaps in writing, vocabulary and practical reasoning.",
      bullets: [
        "A diagnostic first session",
        "Extended-writing practice",
        "Experiment write-up coaching",
        "A relaxed pace at the beginning",
      ],
    },
  ],

  sections: [
    {
      heading: "Who in Adalaj looks at the IB or IGCSE, and why?",
      paragraphs: [
        "Adalaj used to be a village with a famous monument. It is now a commuter township, and its population includes government officers from Gandhinagar, engineers and managers from Ahmedabad's industries, doctors, bankers and entrepreneurs. Many of them studied in good schools themselves and have clear ideas about what they want for their children.",
        "For some, the draw is portability. A family with a transferable job or a plan to move to Pune, Bengaluru or abroad prefers a curriculum that travels well. For others it is higher education overseas: Gujarat has one of India's biggest diasporas, and a cousin in Toronto or London is often the starting point of the conversation.",
        "A third group simply likes the teaching style. IGCSE and the IB ask pupils to explain, evaluate data and write extended answers, which appeals to parents who feel their own schooling was too focused on memorising.",
        "The sticking point is where to find a teacher. With online tutoring, a student in Adalaj can work weekly with a specialist without a daily trip into traffic.",
      ],
      bullets: [
        "Government and corporate families who may relocate",
        "Households with relatives abroad",
        "Professionals who want application-based learning",
        "Families avoiding a daily commute into Ahmedabad",
      ],
    },
    {
      heading: "How do the Gujarat Board, CBSE, IGCSE and IB Diploma differ?",
      paragraphs: [
        "Most Adalaj children sit the Gujarat Secondary and Higher Secondary Education Board exams at Class 10 and Class 12, or CBSE exams in the private schools. Both lean on careful written answers and recall, and both fit straight into Gujarat's entrance system.",
        "IGCSE from Cambridge or Pearson Edexcel takes two years and ends in papers marked outside the school, which test how well knowledge carries over to new problems. The IB Diploma is broader still: six subjects plus the Extended Essay, Theory of Knowledge and CAS.",
        "A student crossing over finds that the topics are familiar and the answer style is not. A tidy remembered paragraph can lose marks when the question asks to evaluate or justify.",
        "The table sets out the contrasts.",
      ],
      table: {
        caption: "Gujarat Board, CBSE, IGCSE and IB Diploma for Adalaj families",
        columns: ["Aspect", "Gujarat Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Milestone exams", "SSC and HSC", "AISSE and AISSCE", "Two-year IGCSE, then A Level or IB", "Two-year Diploma in Class 11-12"],
          ["What earns marks", "Recall and textbook accuracy", "NCERT content with some application", "Application, data and explanation", "Inquiry, essays and extended reasoning"],
          ["Near Adalaj", "Most local schools", "Several private schools", "No confirmed school in Adalaj; Ahmedabad options, online or private study", "No confirmed school in Adalaj; Ahmedabad options, online or private study"],
          ["Route into Indian colleges", "Direct, with GUJCET, JEE or NEET", "Direct, with JEE, NEET or CUET", "Equivalence certificate, then entrance tests", "Equivalence certificate, then entrance tests"],
          ["Languages", "Gujarati or English medium", "English or Hindi medium", "English, optional second language", "Language A plus Language B"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a student in Adalaj?",
      paragraphs: [
        "We quote rates privately and do not print them, since one figure would mislead. Teaching a Class 9 IGCSE beginner is not the same as preparing a Higher Level Chemistry candidate for May. Describe the course, tier and weekly hours, and a quote in writing reaches you before you book.",
        "Four things decide it. Course level is first, because Higher Level and Additional Mathematics need seasoned tutors. The tutor's history with that exact syllabus is second. Lessons per week come third and the length of the arrangement fourth.",
        "Online tuition saves a cost easily forgotten: the journey. Driving a child from Adalaj to Bopal or the SG Highway at five in the evening can take an hour each way, which eats the lesson's value.",
        "A shared class is cheaper per hour. In a private one every minute goes on your own child's gaps, and the free trial is there for you to judge.",
      ],
    },
    {
      heading: "Which suits an Adalaj student: online tutor, Ahmedabad coaching, school teacher or self-study?",
      paragraphs: [
        "Ahmedabad has a mature tuition market, with classes for Gujarat Board, CBSE, JEE, NEET and commerce subjects. They are worth keeping for exams your child will sit.",
        "Few explain how an international course is examined: the command terms, how an Internal Assessment is built and how Cambridge and Edexcel word questions. A teacher who has that knowledge is scarce even in a metro.",
        "A self-driven older student can work from past papers alone, although errors can sit uncorrected for months.",
        "A private video tutor offers a specialist and a fixed schedule, with no commute. See the four routes side by side below.",
      ],
      table: {
        caption: "Study routes for IB and IGCSE students in Adalaj",
        columns: ["Route", "Fit with IB or IGCSE content", "Individual attention", "Timing", "Drawback"],
        rows: [
          ["Online private tutor", "Close, chosen for the course and tier", "The whole lesson", "Evenings and weekends by agreement", "Needs steady power and a connection"],
          ["Ahmedabad coaching centre", "Limited, aimed at board and entrance exams", "Shared with a batch", "Fixed hours", "Commute through peak traffic"],
          ["School teacher giving tuition", "Sometimes partial", "High", "Flexible", "Rarely IB or IGCSE trained"],
          ["Self-study", "Depends on the student", "None", "Entirely your own", "No feedback on errors"],
        ],
      },
    },
    {
      heading: "How do Navratri, Uttarayan and the Gujarat summer shape the study year?",
      paragraphs: [
        "Gujarat's calendar is built around festivals, and Adalaj is no exception. Navratri is a nine-night event of garba that runs into the small hours, so students are tired the next day and parents prefer no evening lessons at all. Uttarayan in January fills rooftops with kites for a day or two, and Diwali and the New Year that follows it mean family visits.",
        "Weather has its own demands. Summers from April to June are severe, with temperatures above forty-two degrees and afternoons unworkable, so early or late slots help. The monsoon from late June to September brings heavy showers and waterlogging on the highway, and winters are mild and pleasant for long sessions.",
        "On the exam side, Gujarat Board exams fall in March, IB Diploma papers in May and November, Cambridge IGCSE in the February-March, May-June and October-November series, and Edexcel in January, summer and autumn windows.",
        "The table maps a workable year.",
      ],
      table: {
        caption: "A year plan for an IB or IGCSE student in Adalaj",
        columns: ["Months", "Academic task", "Local factor", "Our approach"],
        rows: [
          ["June to August", "New session, IA and EE topic choices", "Monsoon rain and traffic", "Weekly lessons, early planning"],
          ["September to November", "November exams, mocks", "Navratri, Dussehra and Diwali", "Mocks before the festival block, no lessons on garba nights"],
          ["December to February", "IA drafts, Extended Essay research", "Mild weather and Uttarayan", "Longer sessions, skipping kite days"],
          ["March to April", "Final revision, IGCSE practicals", "Gujarat Board exams and rising heat", "Short evening lessons"],
          ["May to June", "IB and IGCSE summer papers", "Peak heat", "Early or late slots with a hotspot ready"],
        ],
      },
    },
    {
      heading: "Where do Adalaj students go after the IB or IGCSE?",
      paragraphs: [
        "The Gandhinagar and Ahmedabad belt is rich in higher education. IIT Gandhinagar, DA-IICT, the Pandit Deendayal Energy University, Gujarat National Law University and the National Forensic Sciences University are in Gandhinagar, while Ahmedabad has IIM Ahmedabad, CEPT University, Nirma University, Ahmedabad University and the National Institute of Design.",
        "For Indian admission, a student with an IB or IGCSE record normally takes entrance exams such as JEE Main, NEET and CUET-UG where eligible, and often needs an Association of Indian Universities equivalence certificate. Notices change every year, so read the current ones. Tutors teach subjects and cannot rule on eligibility.",
        "For study abroad, the UK, Canada, Australia, Singapore, the UAE and the US read IB and IGCSE results readily, and Gujarati families often have strong ties to Canada, the UK and the US. Strong Maths and sciences keep engineering, finance and medical-adjacent courses open.",
        "Choosing subjects with a target in mind during Class 10 or 11 saves hard changes later.",
      ],
    },
    {
      heading: "What is difficult in IB Maths and the sciences for a Gujarat Board student?",
      paragraphs: [
        "Maths is usually the first request. Gujarat students are generally quick and accurate, and the IB then asks them to interpret a result in words, choose a model and use a graphical calculator purposefully. Analysis and Approaches suits those who like proof and calculus. Applications and Interpretation suits those who like data, where a local dataset can make a distinctive exploration.",
        "Physics punishes students who memorise formulae but skip graph reading and error analysis. Chemistry needs regular practice in moles, equilibrium and organic routes. Biology rewards precise terms and a careful look at the question.",
        "The opening lesson is diagnostic. It often reveals a smaller gap than the family expected, and from there practice shifts to genuine exam-style questions.",
        "Anyone also preparing for JEE, NEET or GUJCET requires an honest weekly timetable, because those syllabi only partly overlap with the IB.",
      ],
      bullets: [
        "Questions in unfamiliar settings",
        "Calculator routines for IB Maths",
        "Uncertainty and data handling in practicals",
        "Long answers built on command terms",
        "Early outlines for the internal assessment",
      ],
    },
    {
      heading: "How should an Adalaj student choose between Core and Extended IGCSE papers?",
      paragraphs: [
        "Many Cambridge subjects have Core and Extended papers, while Pearson Edexcel offers Foundation and Higher. The chosen tier fixes the best grade possible, and Core and Foundation end lower on the scale.",
        "Students planning A Levels, the IB Diploma or a science degree normally enter Extended or Higher for Maths and the sciences. A difficult subject with no later use can go to Core or Foundation for a steadier result. The first term is the moment to decide, with the teacher.",
        "Outside candidates look for a registered exam centre that takes private entries, probably in Ahmedabad, with dates and fees varying between boards. The tutor owns syllabus and paper technique, and the family owns registration.",
        "Pairings matter, too. For a would-be engineer, Mathematics, Additional Mathematics and Physics together make a strong block.",
      ],
    },
    {
      heading: "What does a typical week look like for an Adalaj family using online tuition?",
      paragraphs: [
        "A weekday in Adalaj tends to start early, with parents leaving for Gandhinagar offices or the SG Highway and a child heading to a school bus. By late afternoon the highway is clogged, and the family is rarely home together before seven. That is why we fix lessons at roughly seven or eight in the evening or on a Sunday morning, when someone can be around and the road noise has fallen.",
        "A realistic plan for a Class 10 IGCSE student is two lessons a week, one for Maths and one for a science, each about an hour, with twenty minutes of set practice between them. A Diploma student might run three or four weekly slots across Maths, a science and Economics, rising toward exams. A younger MYP pupil usually needs a single lesson and a reading routine.",
        "Gated societies in Adalaj often have good fibre links, which helps, but lift and generator tests, society events and festival decorations can interrupt a call. We suggest a quiet corner of the flat, a table with a lamp and a set of headphones, since a child on the sofa with a phone rarely learns well.",
        "Parents see the progress through the written note after each class and, if they wish, a short monthly summary of topics covered and next steps. If an upcoming school test or garba rehearsal clashes with a slot, a message the day before is enough, and the lesson moves.",
        "The aim is a rhythm that a household can keep through a full school year, because steady weekly work beats a panicked burst in April. A schedule that fits Adalaj's commuter pattern is the first thing we settle with each family.",
      ],
      bullets: [
        "Evening slots around 7 to 8 pm or Sunday mornings",
        "One or two lessons a week for IGCSE, more for the Diploma near exams",
        "A quiet corner, a lamp and headphones",
        "Written notes after class and a monthly summary on request",
      ],
    },
  ],

  tutorsIntro:
    "Everyone on the roster teaches through live video to households in many states. A profile shows subjects, levels and previous teaching, and Adalaj pupils are always taught at a distance.",

  process: [
    { title: "Write to us", description: "Message support@ibgram.com or +91 7439 368 115 on WhatsApp, naming the programme, subject, level and the evenings that are free." },
    { title: "Receive a shortlist", description: "Our reply lists matched tutors and their open weekly times, in IST." },
    { title: "Attend the free trial", description: "One video lesson that costs nothing and commits you to nothing." },
    { title: "Get the quote", description: "The rate and the timetable are sent in writing before you book." },
    { title: "Follow progress", description: "Every lesson ends with a note, and we can swap tutors if the pairing is off." },
  ],

  whyPoints: [
    { title: "Syllabus-first matching", description: "The exact course and tier decide who is proposed." },
    { title: "Plain about delivery", description: "No tutor comes to Adalaj; all lessons are online." },
    { title: "Exam technique built in", description: "Command words and mark schemes travel with the content." },
    { title: "Parents informed", description: "One brief note per session." },
    { title: "The student's own work", description: "Coaching yes, ghost-writing never." },
    { title: "Easy to change", description: "Changing tutor is easy when the fit is wrong." },
  ],

  faqs: [
    {
      question: "Will an IB or IGCSE tutor visit my home in Adalaj?",
      answer:
        "No. The lessons are private and live, but they take place on video with your child at home. Our tutors do not drive to Adalaj or Gandhinagar district, and in-person tuition at home is limited to Gurugram and parts of Delhi NCR. What video gives you is a teacher who knows the exact syllabus, without a trip through Ahmedabad traffic.",
    },
    {
      question: "Is there an IB or IGCSE school in Adalaj?",
      answer:
        "None that we could verify. Adalaj schools follow the Gujarat Board or CBSE. Parents who want an international programme usually weigh the western suburbs of Ahmedabad, an online school or private preparation. Check each school directly. Our tuition is independent, and can run next to your child's current schooling.",
    },
    {
      question: "How does online home tuition for IB work in Adalaj?",
      answer:
        "Your child studies at home on a laptop and the tutor teaches in real time, sharing a whiteboard and working through past questions. Each class has a stated topic, and brief homework follows. A short note reaches parents after every session, which lets you follow progress without sitting in.",
    },
    {
      question: "Which IB subjects can an Adalaj student study with you?",
      answer:
        "We cover Maths (AA and AI), Physics, Chemistry, Biology, Economics, Business Management, Geography, ESS, English, Gujarati and Computer Science, with TOK and Extended Essay guidance and MYP Maths and sciences besides. Say which programme and level, and we will propose a tutor who has taught exactly that course.",
    },
    {
      question: "Do you coach both Cambridge and Pearson Edexcel IGCSE?",
      answer:
        "We do. The boards structure papers differently, Cambridge with Core and Extended and Edexcel with Foundation and Higher, so preparation is not quite the same. Send the syllabus code, such as 0580 or 4MA1, and the tier. Coaching for the papers is our job, and entry through an exam centre is the family's.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Adalaj?",
      answer:
        "No rates are published, because cost follows course level, tutor experience, weekly hours and length of the arrangement. Once the free trial is over you get a quote in writing, and nothing is booked until you accept. Learning on video also saves the fuel and hours of driving to a class in Ahmedabad.",
    },
    {
      question: "Can lessons be scheduled around Navratri and Uttarayan?",
      answer:
        "Yes. We agree a timetable that leaves out the nine nights of Navratri, Uttarayan, Diwali and any family event, and we shift lessons earlier on days after late garba nights if needed. A lesson that has to be missed is moved to another slot in the same week where possible.",
    },
    {
      question: "Will the monsoon or summer heat disrupt online lessons?",
      answer:
        "Occasionally. In heavy monsoon weeks, power or broadband can fail, so families should keep a charged laptop and a mobile hotspot ready. In the hottest weeks we prefer early-morning or late-evening slots. A lesson cut short is rescheduled, so the syllabus does not drift.",
    },
    {
      question: "Where would a private IGCSE candidate from Adalaj take the exams?",
      answer:
        "They need a registered centre that accepts private entries, most likely in Ahmedabad. Seats, fees and deadlines shift with the board and session, so approach the centre early. Your tutor will prepare your child for the papers but cannot enter you for them.",
    },
    {
      question: "Can my child prepare for JEE, NEET or GUJCET while studying the IB or IGCSE?",
      answer:
        "Many students try both, but the load is heavy and needs a written weekly plan, since Maths, Physics, Chemistry and Biology overlap only in part. We can stay with the international course while a coaching class handles entrance topics, or help interleave the two. Confirm eligibility for any exam with the body that conducts it.",
    },
    {
      question: "Do tutors write the IA or Extended Essay?",
      answer:
        "Never. Writing Internal Assessments, Extended Essays, TOK essays or coursework is not part of what tutors do. They explain the criteria, help narrow a question and comment on drafts that the student has written. The ideas, research and wording stay the student's, as the IB and the exam boards require.",
    },
    {
      question: "Can tutors explain ideas in Gujarati?",
      answer:
        "Often, yes. A tutor who speaks Gujarati can unpack a hard idea first and then return to the English wording used in the exam. Gujarati as a subject, IB Gujarati A or B or an IGCSE second-language paper where offered, can be coached too. The aim is comfort in both languages.",
    },
    {
      question: "What equipment do online lessons need?",
      answer:
        "A laptop or tablet with a working camera and microphone, earphones and a connection that can carry a video call. A phone will do for the trial but is cramped for papers. Pen and paper suit Maths and sciences, IB Maths may need a graphical calculator, and a spare device is useful when the signal drops.",
    },
    {
      question: "What if our family moves to Ahmedabad or another city?",
      answer:
        "Your tutor can normally carry on as before, because classes are online. A move often breaks schooling in mid-course, and one steady teacher softens that. If you end up in Gurugram or parts of Delhi NCR, in-person lessons could become possible, subject to who is free locally.",
    },
    {
      question: "How do we start, and is the first lesson free?",
      answer:
        "Yes, free. Email support@ibgram.com or WhatsApp +91 7439 368 115 with programme, subject, level and your free hours. We propose a tutor, set a trial in IST and follow up with a written quote. If you stop after the trial, you owe nothing.",
    },
    {
      question: "Is IB Gram connected to the IB, Cambridge, Pearson or any school?",
      answer:
        "There is no connection. IB Gram does not run exams, award qualifications, find school places or speak for any school here. Schools are named only to show what exists in the wider region, so check syllabus and fees with the school itself.",
    },
    {
      question: "Is this page about the Adalaj near Gandhinagar?",
      answer:
        "Yes, it is about Adalaj in Gandhinagar district, the town with the famous stepwell on the Ahmedabad-Gandhinagar corridor. Lessons are online, so families in Gandhinagar, Uvarsad, Bopal or elsewhere in Gujarat can book the same service, though the school and calendar notes here refer to Adalaj.",
    },
  ],

  internalLinks: [
    { label: "IB tutoring at a glance", href: "/ib-tutors/", description: "How a specialist helps across the IB years." },
    { label: "IGCSE at a glance", href: "/igcse/", description: "Boards, tiers and exam sittings set out simply." },
    { label: "Cities we teach in", href: "/india/", description: "The towns and cities reached by video." },
    { label: "The DP explained", href: "/programmes/dp/", description: "Subject groups, three core parts and the grading logic." },
    { label: "The MYP explained", href: "/programmes/myp/", description: "Criteria marking and the Personal Project." },
    { label: "The PYP explained", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition." },
    { label: "The CP explained", href: "/programmes/cp/", description: "Academic courses with a career strand." },
    { label: "Which IB Maths?", href: "/courses/ib/mathematics/", description: "AA against AI, and who each suits." },
    { label: "Tutor directory", href: "/tutors/", description: "Search by subject, level and teaching record." },
    { label: "Admission test help", href: "/admissions/test-prep/", description: "Entrance tests alongside an international timetable." },
    { label: "Speak to us", href: "/contact-us/", description: "Ask a question or request the free trial." },
    { label: "Ahmedabad", href: "/ahmedabad/", description: "The neighbouring city with international schools." },
    { label: "Sanand", href: "/sanand/", description: "An industrial town in the same region." },
    { label: "Vadodara", href: "/vadodara/", description: "Another Gujarat city with international schools." },
  ],

  closingHeading: "Start a free IB or IGCSE lesson in Adalaj",
  closingBody:
    "Share the programme, the subject and the hours your Adalaj household can offer, and we will put forward a tutor who has taught the course. Nothing is charged for the first class, the rate arrives in writing, and as it is all online the highway is not involved.",
};
