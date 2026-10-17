import type { CitySeoPage } from "../types";

/**
 * Mhaswad (Man taluka, Satara district, Maharashtra). No IB or IGCSE school in the town could be confirmed,
 * so stripSchools is empty and the clusters reuse school names already published on the Pune and Sangli pages,
 * labelled as nearby cities. Home visits are not offered here (homeTuition: false in plan.ts).
 */
export const mhaswad: CitySeoPage = {
  slug: "mhaswad",
  countryName: "Mhaswad",
  countryNameLong: "Mhaswad, Maharashtra",
  demonym: "Mhaswad",
  flagCode: "in",
  countryCode: "IN",
  state: "Maharashtra",
  stateCode: "IN-MH",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early-evening and Sunday slots that avoid the market-day rush, the Siddhanath yatra weeks and the power cuts of peak summer",
  lastUpdated: "2026-09-21",
  geo: { latitude: 17.65, longitude: 74.79 },
  alternateNames: ["Mhasvad", "Mhaswad Satara", "Mhaswad Man taluka", "Mhaswad Maharashtra"],
  wikipedia: "https://en.wikipedia.org/wiki/Mhaswad",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mhaswad | Private Home Tuition Online",
  metaDescription:
    "Live one-to-one online IB and IGCSE tuition for Mhaswad students in Man taluka, planned around the dry season and HSC dates. Free first lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition in Mhaswad, Satara District",
  heroEyebrow: "PRIVATE ONLINE IB & IGCSE HOME TUITION IN MHASWAD",
  heroSubtitle:
    "Looking for home tuition in Mhaswad for an IB or IGCSE subject usually ends at a general science teacher who has never opened the syllabus. Our answer is private tuition from home, delivered online: your child sits at the family desk in Man taluka, and a tutor who has taught that exact paper joins live on video. Tell us the subject and level, and we handle the matching.",
  primaryKeyword: "IB and IGCSE tutors in Mhaswad",
  imageAltText: "A Mhaswad student working through an IB Chemistry problem set with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Mhaswad",
    "IGCSE tutor Mhaswad",
    "IB home tuition Mhaswad",
    "IGCSE home tuition Mhaswad",
    "IB private tuition Mhaswad",
    "IB Maths tutor Mhaswad",
    "IGCSE Maths tutor Mhaswad",
    "IB Physics tutor Mhaswad",
    "IB Chemistry tutor Mhaswad",
    "IB Biology tutor Mhaswad",
    "IB DP tutor Mhaswad",
    "IB MYP tutor Mhaswad",
    "IB PYP tutor Mhaswad",
    "IGCSE online tuition Mhaswad",
    "online IB tutor Mhaswad",
    "IB tutor Dahiwadi",
    "IGCSE tutor Man taluka",
    "IB tutor Satara district",
    "online tutor Mhasvad",
    "IGCSE Physics tutor Mhaswad",
  ],

  heroTrustPoints: [
    "Tutors who have already taught the exact IB or IGCSE course",
    "Live video lessons in a fixed weekly slot, IST",
    "A free first lesson, with rates sent in writing before any booking",
    "Independent of the IB, Cambridge, Pearson and every school",
  ],
  heroStats: [
    { value: "Online", label: "All teaching in Mhaswad" },
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
    { value: "Free trial", label: "First lesson at no cost" },
  ],

  intro: {
    heading: "IB and IGCSE study from Mhaswad: what to expect",
    paragraphs: [
      "Mhaswad sits on the Man river in the east of Satara district, in a taluka that receives far less monsoon than the Sahyadri side of the same district. Tanker summers, pomegranate and millet fields, a busy cattle and goat market and the women's cooperative bank that grew out of the town give it a character quite unlike Pune or Mumbai. Schools here follow the Maharashtra State Board or CBSE, and the town has no IB or IGCSE campus that we could verify.",
      "That does not leave a Mhaswad child without options. Online home tuition means a private lesson that the student takes at home, on a laptop, with a tutor who has taught the specific course before. For a family searching for IB and IGCSE tutors in Mhaswad, this is the realistic route, because the nearest specialist teachers work in Pune, a long drive away, and rarely travel into Man taluka.",
      "To be plain about it, tutors do not visit homes in Mhaswad. In-person home visits run only in Gurugram and parts of Delhi NCR. Everything for a student in Man taluka happens by live video, with a shared whiteboard and scanned past papers, and a short written note for parents after each session.",
      "IB Gram is an independent tutoring service with no link to the IB, Cambridge, Pearson or any school named here. Tutors explain, mark and coach. They never write an Internal Assessment, Extended Essay, TOK essay or piece of coursework for a student.",
    ],
    bullets: [
      "Support for PYP, MYP, Diploma and Career-related programmes",
      "IGCSE tutoring for Cambridge and Pearson Edexcel papers",
      "One student per lesson at a regular weekly time",
      "A written summary of each session for parents",
      "Timetables that avoid exam weeks, yatra days and peak summer power cuts",
    ],
  },

  programmesIntro:
    "Because no IB school in Mhaswad could be confirmed, a child on one of these programmes is usually enrolled elsewhere: at a boarding school in Pune, an online school, or through a family that is relocating. The notes below describe each stage and what a Man taluka family tends to need from it.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Units of inquiry replace chapter-by-chapter textbooks, and children learn to ask questions, record what they find and reflect. Class 5 closes with the Exhibition, a group inquiry shown to the whole community.",
      countryNote:
        "A child coming from a Marathi-medium primary class often needs steady English reading and talking practice. Exhibition ideas can grow from home surroundings such as farm ponds, the Man river bed or the weekly market.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to 10, ages 11-16",
      description:
        "Teachers grade work against published criteria in every subject, so a clear explanation counts for more than a memorised paragraph. The final year includes a Personal Project the student plans and carries out alone.",
      countryNote:
        "Pupils used to Maharashtra State Board questions, with one expected answer, find open criteria disorienting. Early lessons here practise structuring an argument and writing up an investigation in plain, exact English.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "Six subjects over two years, three at Higher Level, along with the Extended Essay, Theory of Knowledge and CAS. Written papers fall in May or November, and internal assessments are marked along the way.",
      countryNote:
        "Mhaswad students tend to lean towards Maths, the sciences and Economics, and many keep MHT-CET or NEET open as a fallback. A written weekly plan from the first term of Class 11 protects both paths.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "A smaller set of Diploma courses sits beside a career-related study and a reflective project.",
      countryNote:
        "Rare from this part of Satara. If a family does choose it, we teach the academic courses and help the student pace the project beside the exams.",
    },
  ],

  subjectsIntro:
    "Matching in Mhaswad starts from course and level. A student on IB Physics HL needs a different teacher from a Class 8 MYP beginner, and we confirm the syllabus code before proposing anyone.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof. Students from Marathi-medium schools are often fast at algebra and lose marks only in explaining steps, which is where lessons concentrate." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology. The Exploration works well with local numbers such as rainfall by year, pomegranate prices or tanker supply." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, electricity and fields, with an investigation where handling uncertainty earns the marks." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, energetics, equilibrium and organic reactions, plus a lab investigation judged on method and honest evaluation." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology; exact vocabulary and data-response reasoning separate the grades." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets, national income and development. Farm prices, cooperative credit and drought relief give vivid examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers reward application. Cooperative banks, dairy and livestock trading offer close-to-home illustrations." },
    { name: "IB Geography", levels: "HL / SL", description: "Freshwater, population change and resource use, with fieldwork where a clear method matters more than a dramatic topic." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water balance, soils and land use, studied in a rain-shadow basin where the course reads like local news." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, systems and algorithms, taught with plenty of running code on the student's own laptop." },
    { name: "IB English A and B", levels: "HL / SL", description: "Literary analysis and written commentary for students who think in Marathi first and need fluency in precise English prose." },
    { name: "IB Hindi and Marathi", levels: "SL / HL", description: "Language courses that suit a student already fluent at home, with attention to the analytical writing the examiners expect." },
    { name: "IB Theory of Knowledge", levels: "Core", description: "Coaching on how to build and test an argument. The essay and exhibition remain the student's own work." },
  ],

  igcseSubjectsIntro:
    "IGCSE learners in Mhaswad usually study through an online school or as private candidates. We begin with the syllabus code and tier, since Extended Mathematics, Additional Mathematics and Edexcel Higher each need a different preparation.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Cambridge Core or Extended, Edexcel Foundation or Higher", description: "Wide content in which marks leak through missing working and misread command words." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and trigonometry a year early, easing a later step to IB Maths or MHT-CET preparation." },
    { name: "IGCSE Physics", levels: "Core and Extended", description: "Forces, electricity and waves, with an alternative-to-practical paper that tests experimental thinking on paper." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Reaction types, the periodic table and qualitative analysis that has to be rehearsed as a routine." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Large content volume plus questions that ask how an experiment should be designed." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Pseudocode, logic and programming, practised on screen between lessons." },
    { name: "IGCSE English First or Second Language", levels: "Grade 9-10", description: "Directed writing, summary and comprehension for students who move between Marathi, Hindi and English." },
    { name: "IGCSE Economics and Business Studies", levels: "Grade 9-10", description: "Precise definitions, data questions and short structured answers." },
    { name: "IGCSE Geography", levels: "Grade 9-10", description: "Rivers, climate and settlement with case-study writing." },
  ],

  regionsTitle: "Mhaswad and Man taluka localities we teach online",
  regionsIntro:
    "Lessons are on screen, so place matters for connection quality and timing. The notes show how the day tends to run in each area so that a slot can be chosen sensibly. No tutor is sent to any of these places.",
  regions: [
    { name: "Mhaswad bus stand and market area", note: "The commercial centre, with the weekly market and livestock trading; good fibre in many homes and noisy evenings on market days." },
    { name: "Siddhanath temple surroundings", note: "A busy pilgrimage zone in the yatra season, when roads clog and families prefer lessons earlier in the evening." },
    { name: "Man river bank colonies", note: "Residential lanes by the river, where houses are close and a quiet room can be hard to find." },
    { name: "Market yard side", note: "Families linked to trading, transport and the agricultural market, often keeping late working hours." },
    { name: "Mhaswad bypass and highway edge", note: "Newer houses and shops along the road towards Satara and Pandharpur, with good mobile signal." },
    { name: "Dahiwadi", note: "The taluka headquarters nearby, with its own schools and offices; broadband varies between wards." },
    { name: "Gondavale and Pulkoti area", note: "Villages around Mhaswad where farming calendars and power supply decide study hours." },
    { name: "Mann Deshi and women's enterprise families", note: "Households connected to the cooperative bank and training centres, many with daughters aiming for professional courses." },
    { name: "Vaduj and Khatav side", note: "Students from the neighbouring taluka who join evening online slots." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service and has no tie to the IB, Cambridge, Pearson or any school. We could not confirm an IB or IGCSE school in Mhaswad, so the clusters below list schools from nearby cities that already appear on our published Pune and Sangli pages. Check programmes and admission rules with each school directly.",
  schoolClusters: [
    {
      city: "Mhaswad and Man taluka: limited local options",
      note: "Schools in town and in Dahiwadi follow the Maharashtra State Board or CBSE. We found no confirmed IB or IGCSE campus, which is why international study here happens by private tuition and online schooling.",
      schools: [],
    },
    {
      city: "Nearby: Pune",
      note: "Pune is the main destination for Satara district families who change boards, reached by highway in a few hours.",
      schools: ["Mahindra International School", "Symbiosis International School", "Indus International School, Pune", "The Riverside School, Pune"],
    },
    {
      city: "Nearby: Kolhapur district",
      note: "Atigre, near Kolhapur and Sangli, has an international campus that some south Maharashtra families consider for boarding.",
      schools: ["Sanjay Ghodawat International School, Atigre"],
    },
  ],

  modesIntro:
    "Online is how teaching runs in Mhaswad. Three patterns cover most requests from Man taluka families.",
  modes: [
    {
      title: "Weekly private lessons at home, online",
      description:
        "A one-to-one live session in a fixed weekly slot, with shared screen and whiteboard, led by a tutor who knows the syllabus.",
      bullets: [
        "No tutor visits homes in Mhaswad; every lesson is online",
        "The same tutor week after week",
        "A written note for parents after each lesson",
        "Home visits run only in Gurugram and parts of Delhi NCR",
      ],
    },
    {
      title: "Pre-exam intensive",
      description:
        "A closely spaced run of sessions before the May or November papers, built on past questions and mark schemes.",
      bullets: [
        "Papers timed under exam conditions",
        "Review of weak topics",
        "Command-word practice",
        "Dates kept clear of yatra and festival weeks",
      ],
    },
    {
      title: "Board-switch bridging",
      description:
        "For a student leaving the Maharashtra State Board or CBSE for IGCSE or IB work, a short block that fills gaps in method, vocabulary and practical skills.",
      bullets: [
        "A diagnostic first lesson",
        "Practice in academic writing",
        "Lab report coaching",
        "A patient pace",
      ],
    },
  ],

  sections: [
    {
      heading: "Why do Mhaswad families look at the IB or IGCSE?",
      paragraphs: [
        "Man taluka is a place where people have long made a living from limited rain: pomegranate orchards, millet, goats, and a dairy and trading economy built around the Mhaswad market. Education is taken seriously, and the town's women's cooperative movement has put a visible emphasis on daughters finishing school and moving on to college or business.",
        "Families who consider an international board here are few and their reasons are particular. Some have a relative in Pune, Mumbai or the Gulf and expect the child to follow. Some work in banks, cooperatives, the police or teaching, jobs that can transfer a household to a larger city. Others like the idea of a curriculum that asks children to investigate and explain.",
        "A common worry is that an international route will weaken Marathi or close the door to Maharashtra's own admissions. A sensible plan avoids that: Marathi or Hindi stays as a language course, and the student keeps a clear view of MHT-CET and NEET eligibility so that nothing is lost by switching.",
        "None of this requires a fifteen-year-old to leave for a hostel. With online tutoring, the student stays in the family home beside the Man and works with a specialist who would never have been reachable by road.",
      ],
      bullets: [
        "A relative or plan tied to Pune, Mumbai or overseas",
        "A parent whose job may transfer the family",
        "A preference for inquiry over rote learning",
        "Keeping Marathi or Hindi as a language course",
      ],
    },
    {
      heading: "Maharashtra State Board, CBSE, IGCSE and IB: how do they compare?",
      paragraphs: [
        "Most Mhaswad students follow the Maharashtra State Board, taking SSC at Class 10 and HSC at Class 12, with Marathi or English as the medium. CBSE schools in the area use NCERT books. Both reward accurate recall and neat, textbook-shaped answers.",
        "IGCSE, set by Cambridge or Pearson Edexcel, is a two-year course with externally marked papers that value application and explanation. The IB Diploma stretches across six subjects and adds the Extended Essay and Theory of Knowledge.",
        "Moving between systems is mostly a matter of learning what earns marks. An answer that repeats the textbook paragraph can score well in an SSC paper but collects little credit when an IB question gives unfamiliar data and asks the student to evaluate.",
        "The table lays out the main differences for a parent weighing options.",
      ],
      table: {
        caption: "Boards compared for a Mhaswad student",
        columns: ["Board", "Typical exams", "What the papers reward", "Fit for a Man taluka family"],
        rows: [
          ["Maharashtra State Board", "SSC Class 10, HSC Class 12", "Recall of textbook content and standard methods", "Common locally, direct route to MHT-CET and state colleges"],
          ["CBSE", "Class 10 and 12 board exams", "NCERT-based accuracy and speed", "Available in a few schools, aligned with JEE and NEET"],
          ["Cambridge or Edexcel IGCSE", "Grade 10 papers, May-June and Oct-Nov", "Application, explanation and working shown", "Studied privately or through an online school"],
          ["IB Diploma", "May or November, Class 12", "Breadth, writing, internal assessment and the core", "Suits a family planning for Pune, Mumbai or overseas study"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost for a family in Mhaswad?",
      paragraphs: [
        "There is no fixed price list on this page, and that is deliberate. After the free first lesson we send a rate in writing, and nothing is booked until you have read it. What decides the figure is worth understanding first.",
        "The biggest driver is the course and level. A tutor for IB Maths HL or Physics HL has more specialised experience than one for a Class 7 MYP Science learner, and rates follow. Lesson length and how many sessions a week you want change the monthly total in the obvious way.",
        "Timing matters as well. A weekly lesson across the year costs differently from a dense six-week run before the May papers. Families in Man taluka are often cost-aware, so we suggest starting with one subject, checking progress after a month, and adding more only if it helps.",
        "Because teaching is online, there is no travel fee, no hostel deposit and no tanker-season journey to a Satara or Pune class. Compared with a weekly trip to a coaching centre, the spending sits mainly in the lessons themselves.",
      ],
      bullets: [
        "Course and level: HL, SL, Extended or Core",
        "Length and frequency of sessions",
        "Steady weekly plan or short exam sprint",
        "Tutor experience with the exact syllabus",
      ],
    },
    {
      heading: "Online home tuition, Satara coaching, private tutors or self-study: which suits Mhaswad?",
      paragraphs: [
        "Local classes in Mhaswad and Dahiwadi are built for the Maharashtra State Board and for HSC, and some do it well. They are not designed around IB command terms or IGCSE tiers, so an international syllabus is hard to cover there.",
        "Larger coaching centres in Satara, Pune or Sangli may offer international tuition, but they involve long travel, and a student who is away for hours loses the quiet evening that Mhaswad homes can offer. Online one-to-one lessons keep that evening and add a tutor with the right paper experience.",
        "Self-study with past papers and mark schemes works for a disciplined student who already scores well. Without feedback, though, the same mistakes tend to repeat, particularly in IA write-ups and long-answer questions.",
        "The table compares the four options on points that matter to a Man taluka household.",
      ],
      table: {
        caption: "Study options compared for Mhaswad",
        columns: ["Option", "Syllabus match", "Travel or time cost", "Feedback on written work", "Flexibility"],
        rows: [
          ["Online one-to-one home tuition", "Tutor chosen for the exact IB or IGCSE course", "None, lesson is at the family desk", "Marked work returned with notes", "High, slot moved around yatra and exams"],
          ["Local Mhaswad or Dahiwadi class", "Built for State Board and HSC", "Short walk or ride", "Generic, rarely IB-style", "Fixed batch timings"],
          ["Coaching in Satara, Pune or Sangli", "Possible, depends on the centre", "Long road journey each week", "Varies by centre", "Low, batch schedule"],
          ["Self-study with past papers", "Whatever the student picks", "None", "None unless someone marks", "Complete, but needs discipline"],
        ],
      },
    },
    {
      heading: "How does the Man taluka year shape the IB and IGCSE exam calendar?",
      paragraphs: [
        "IB Diploma written exams run in May for the main session and in November for a smaller one, with results released in July and January. Cambridge and Edexcel IGCSE papers appear in the May-June window and again in October-November, and Edexcel also offers a January sitting. A student in Mhaswad should know which session the school or online provider has registered them for before building any plan.",
        "Maharashtra's own dates matter too. HSC practicals and written papers fall in February and March, and SSC follows. A student sitting both IGCSE and a state exam, or switching boards, has to avoid clashes with those weeks.",
        "The local calendar adds its own pressure. The Siddhanath yatra in the winter months brings crowds and closed lanes, Ganeshotsav and Diwali pull the family together for days, and the harvest and market seasons decide when a parent is free. Summer in Man taluka is hot and water is scarce, so afternoon study is hard before the pre-monsoon showers.",
        "We build revision around these dates, starting from the exam window and working backwards.",
      ],
      table: {
        caption: "A year of study in Mhaswad, month by month",
        columns: ["Period", "Academic focus", "Local factor", "Tutoring plan"],
        rows: [
          ["June to September", "New term, IA ideas, topic foundation", "Monsoon rain is thin, school resumes", "Weekly lessons, start IA planning"],
          ["October to November", "November IB and IGCSE sessions, mock papers", "Diwali week and festival visits", "Short paper practice before the holiday"],
          ["December to February", "Mock exams, IA drafts, HSC practicals for state students", "Siddhanath yatra and cold nights", "Early-evening slots, draft feedback"],
          ["March to May", "Final revision and May papers", "Rising heat and water shortage", "Morning or late-evening slots, timed papers"],
        ],
      },
    },
    {
      heading: "Which universities can a student from Mhaswad reach with the IB or IGCSE?",
      paragraphs: [
        "In India, the IB Diploma is recognised by the Association of Indian Universities as equivalent to Class 12, and the IGCSE alone is a Class 10 qualification. Students then take CUET-UG for many central universities or apply to private universities that accept IB scores directly. Always read each university's own admission page, since rules change from year to year.",
        "Many Maharashtra families have professional courses in mind. For engineering and pharmacy, MHT-CET is the state route, and JEE Main sits alongside it. For medicine, NEET-UG is required, and eligibility for an IB or A Level student depends on subject combination and equivalence rules. We advise checking the current NEET bulletin before committing to subjects, and we tutor the content but never promise entry.",
        "Closer to home, Shivaji University in Kolhapur and Savitribai Phule Pune University draw most state-board graduates, and Pune's private universities are the more common targets for IB students. For study abroad, the IB gives a direct route to UK, Canadian, Australian and American applications, with SAT or ACT where required.",
        "A student from Mhaswad who keeps an eye on both domestic and overseas deadlines from Class 11 rarely feels rushed in Class 12.",
      ],
      bullets: [
        "AIU equivalence for the IB Diploma",
        "CUET-UG for central universities",
        "MHT-CET and JEE Main for engineering and pharmacy",
        "NEET-UG rules to be read from the current bulletin",
        "UK, Canada, Australia and US applications",
      ],
    },
    {
      heading: "IB Maths AA or AI, and the sciences: how are they taught from Mhaswad?",
      paragraphs: [
        "IB Maths Analysis and Approaches suits a student heading for engineering, physics or pure mathematics; it demands fluent algebra, calculus and proof. Applications and Interpretation suits those going to economics, business, psychology or biology, with more statistics and technology. Choosing wrongly in Class 11 is expensive, so we often run a diagnostic before the family commits.",
        "Students from Marathi-medium backgrounds frequently have strong calculation habits. The loss comes later, when an examiner asks them to justify a step or interpret a model. We rehearse that habit of writing out reasoning, and we train calculator use for the paper that allows it.",
        "Physics, Chemistry and Biology share a pattern: a core of content, a data-based paper, and an investigation for the internal assessment. Online, the tutor annotates diagrams live, solves problems on a shared board, and reviews the student's own photographed lab notes. Practical work stays with the student; we coach the design, the uncertainty analysis and the evaluation.",
        "A rain-shadow district gives good material for the Environmental Systems course and for Geography fieldwork, including groundwater, watershed work and crop choice.",
      ],
      bullets: [
        "A diagnostic lesson before choosing AA or AI",
        "Weekly problem sets marked with comments",
        "Past-paper practice in the final term",
        "Guidance on investigation design without writing the IA",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a Mhaswad student choose subjects and tier?",
      paragraphs: [
        "Cambridge IGCSE lets a student sit Core or Extended papers in many subjects. Core caps the top grade at a C, while Extended opens the full range from A* downwards. A student who plans IB Maths, A Level science or MHT-CET Maths should almost always attempt Extended.",
        "Edexcel works through Foundation and Higher tiers in Mathematics. The Higher tier mirrors Extended in difficulty, so the same advice holds. Where a student is unsure, a diagnostic paper in the first lesson shows which tier is realistic.",
        "On subject choice, most students take English, Mathematics, two or three sciences and one or two humanities or business subjects. Marathi is not an IGCSE subject for most students, so Hindi or English as a second language is the usual language pick.",
        "The table below shows how a few common choices connect to later study.",
      ],
      table: {
        caption: "IGCSE choices and where they lead",
        columns: ["Subject choice", "Tier advice", "Later route it supports"],
        rows: [
          ["Mathematics with Additional Mathematics", "Extended or Higher", "IB Maths AA, A Level Maths, engineering entrance preparation"],
          ["Physics, Chemistry and Biology", "Extended", "IB sciences, A Level sciences, NEET-oriented study"],
          ["Economics and Business Studies", "Extended", "IB Economics and Business Management, commerce degrees"],
          ["English as a Second Language", "Standard", "University English requirements for overseas study"],
        ],
      },
    },
  ],

  tutorsIntro:
    "These tutors teach live over video to families across India, including Man taluka. Each profile lists subjects, levels and teaching history, and every lesson with a Mhaswad student is delivered online.",

  process: [
    { title: "Write to us", description: "Send the board, programme, subject, level and your free evenings to support@ibgram.com or on WhatsApp at +91 7439 368 115." },
    { title: "Receive a shortlist", description: "We reply with tutors whose teaching history fits the syllabus, with open weekly slots in IST." },
    { title: "Try a free lesson", description: "A first online session at no cost, with no obligation to continue." },
    { title: "Read the rate in writing", description: "The fee and timetable reach you in writing, and nothing is booked until you agree." },
    { title: "Follow the progress", description: "Short notes after each lesson, and a tutor change whenever the fit is wrong." },
  ],

  whyPoints: [
    { title: "Syllabus-matched tutors", description: "Selection is by exact course and tier, never by general subject knowledge." },
    { title: "Honest about online", description: "No tutor travels to Mhaswad; every session is live on screen." },
    { title: "Technique along with content", description: "Command words, mark schemes and timed answers are taught in each lesson." },
    { title: "Parents kept informed", description: "A brief written update follows every session." },
    { title: "The student's own work", description: "Tutors coach and mark but never write assessed work." },
    { title: "A change is easy", description: "If the fit feels off, we find a different tutor without fuss." },
  ],

  faqs: [
    {
      question: "Will an IB or IGCSE tutor come to my home in Mhaswad?",
      answer:
        "No, tutors do not visit homes in Mhaswad. Our in-person home tuition is limited to Gurugram and parts of Delhi NCR. Mhaswad students receive private one-to-one lessons online, taken at home on a laptop or tablet, with a shared whiteboard and written notes after each session. It is home tuition in the sense that your child studies in the family house, without a commute.",
    },
    {
      question: "Is there an IB or IGCSE school in Mhaswad?",
      answer:
        "We could not confirm any IB or IGCSE school in Mhaswad or Dahiwadi. Local schools follow the Maharashtra State Board or CBSE. Families who want an international board usually look at Pune, with boarding the common arrangement, or an online school. Please check each school's curriculum directly, and use our tutors to support the child alongside whichever route you choose.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Mhaswad?",
      answer:
        "We do not publish prices, because the rate depends on the course, level and number of sessions. After a free first lesson we send a written quote, and nothing is booked before you accept it. There is no travel charge since teaching is online. Starting with one subject for a month is a reasonable way to judge value.",
    },
    {
      question: "Can my child follow the Maharashtra State Board and have IB tuition together?",
      answer:
        "Yes, though it requires careful planning. The State Board and IB differ in assessment style, so a student doing both will need a weekly timetable that separates the two. Many families choose one board for the main path and use tuition for a specific gap, such as English writing or Maths reasoning. Tell us the plan and we will suggest a realistic load.",
    },
    {
      question: "Which IB subjects are most in demand from Man taluka?",
      answer:
        "Mathematics, Physics, Chemistry and Biology lead, followed by Economics and Business Management. Students with an eye on MHT-CET or NEET often choose the science group, while those drawn to cooperative or agri-business ideas tend towards Economics. Hindi or Marathi is common as a language choice. We match tutors to any of these courses at HL or SL.",
    },
    {
      question: "Do tutors write the Internal Assessment or Extended Essay?",
      answer:
        "No, tutors never write an IA, Extended Essay, TOK essay or any coursework. They explain the criteria, help a student choose and refine a question, and comment on drafts. The ideas, data and wording stay the student's own. This keeps the work honest and protects the student from a malpractice finding by the IB.",
    },
    {
      question: "Which IGCSE boards do you cover?",
      answer:
        "We cover Cambridge IGCSE and Pearson Edexcel International GCSE. The syllabus codes differ, for example 0580 for Cambridge Mathematics and 4MA1 for Edexcel, so we check which one the student is entered for before choosing a tutor. A Level and AS support exist as well, mainly for students continuing from IGCSE.",
    },
    {
      question: "What internet speed does a lesson need?",
      answer:
        "A steady connection of a few megabits is enough for video and a shared whiteboard. Many Mhaswad homes use fibre or good mobile data, and the bypass and market areas generally get the best signal. If a village connection is weak, we use audio with a screen share, and a short trial lesson shows whether the line holds.",
    },
    {
      question: "How should we plan lessons around power cuts and summer heat?",
      answer:
        "Pick the cooler hours and keep a phone hotspot or a power bank ready. Early evening and Sunday morning work for most families in Man taluka, while peak summer afternoons are best avoided. If a cut interrupts a session, the tutor reschedules the missed portion, and we plan extra buffer before major papers.",
    },
    {
      question: "When are the IB and IGCSE exams, and how early should preparation start?",
      answer:
        "IB main exams are in May, with a November session for some candidates. Cambridge and Edexcel IGCSE run in May-June and October-November. For a May paper, serious revision usually starts in November or December, and an intensive block fits the last eight to ten weeks. Your school or online provider tells you which session the student is entered for.",
    },
    {
      question: "Can a Class 8 or 9 student start before the IGCSE years?",
      answer:
        "Yes, and it often helps. Starting in Class 8 or 9 lets a student build English writing, algebra and lab reasoning before the two-year IGCSE course begins. Pupils from Marathi-medium primary classes especially benefit from steady English practice. Lessons at that stage are lighter and focus on habits, not exam pressure.",
    },
    {
      question: "Is the IB Diploma accepted by Indian universities?",
      answer:
        "Yes, the Association of Indian Universities treats the IB Diploma as equivalent to Class 12. Many universities accept it directly, central universities usually ask for CUET-UG, and professional courses have their own rules. Always read the current admission notice of the university or entrance exam before choosing subjects.",
    },
    {
      question: "What if my child does not get along with the tutor?",
      answer:
        "Tell us and we will arrange a different tutor at no extra fuss. The free first lesson is meant to test the fit, and a change later is simple. Good matches depend on teaching style as much as syllabus knowledge, so we ask about how your child learns before suggesting someone.",
    },
    {
      question: "Can we speak to a tutor in Marathi or Hindi?",
      answer:
        "Lessons are conducted in English, since the exams are written in English, but tutors can clarify a concept in Hindi, and a few can use some Marathi, where that helps a nervous learner. Tell us your preference when you write and we will look for a tutor who suits it. English fluency grows quickly with regular practice.",
    },
    {
      question: "How do I start with IB Gram from Mhaswad?",
      answer:
        "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board, subject, level and your free evenings. We reply with a shortlist and an open slot for a free first lesson. After that you get the fee and timetable in writing and decide at your own pace.",
    },
  ],

  internalLinks: [
    { label: "How IB tutoring works", href: "/ib-tutors/", description: "Where a tutor adds the most in each IB programme." },
    { label: "IGCSE overview", href: "/igcse/", description: "Cambridge and Edexcel tiers and exam sessions." },
    { label: "Cities across India", href: "/india/", description: "The full list of places we teach online." },
    { label: "Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the core and how grades add up." },
    { label: "Middle Years Programme", href: "/programmes/myp/", description: "Criteria-based assessment and the Personal Project." },
    { label: "Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "Career-related Programme", href: "/programmes/cp/", description: "How the CP combines courses with career study." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Tutor profiles", href: "/tutors/", description: "Filter by subject, level and teaching history." },
    { label: "Entrance test preparation", href: "/admissions/test-prep/", description: "Fitting entrance exams around an international course." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us and book the free first lesson." },
    { label: "Satara", href: "/satara/", description: "The district headquarters, also served online." },
    { label: "Pune", href: "/pune/", description: "The nearest large city with IB and IGCSE schools." },
    { label: "Sangli", href: "/sangli/", description: "A neighbouring south Maharashtra city we serve online." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson in Mhaswad",
  closingBody:
    "Send us the board, the subject, the level and the hours your household can spare. We return a short list of tutors with an open slot for a free lesson over video. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
