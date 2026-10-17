import type { CitySeoPage } from "../types";

/**
 * /partur/ - IB and IGCSE tutoring page for Partur, a taluka town in Jalna district, Marathwada, Maharashtra.
 * Online-only: tutors do not visit homes in Partur. No IB or Cambridge/Edexcel school confirmed locally,
 * so stripSchools is empty and clusters are labelled nearby cities.
 */
export const partur: CitySeoPage = {
  slug: "partur",
  countryName: "Partur",
  countryNameLong: "Partur, Jalna district, Maharashtra",
  demonym: "Partur",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We fix a slot after the school bus and tuition rush, outside the fiercest April and May heat, and clear of Ganeshotsav, Navratri and Diwali family weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 19.5958, longitude: 76.2147 },
  wikipedia: "https://en.wikipedia.org/wiki/Partur",
  alternateNames: ["Partur Jalna", "Partur Marathwada"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Partur | Online Private Tuition",
  metaDescription:
    "Private online IB and IGCSE tuition for Partur students in Jalna district: PYP to DP, Cambridge and Edexcel IGCSE, live one-to-one, free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Partur",
  heroEyebrow: "IB & IGCSE TUITION FOR PARTUR AND MARATHWADA FAMILIES",
  heroSubtitle:
    "Searching for home tuition in Partur for an IB or IGCSE student? The lesson is private and one-to-one, your child sits at their own table, and the teacher appears on a laptop screen from another Indian city. Nobody turns up at the door; tutors do not visit homes in Partur, and physical home visits run only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Partur",
  imageAltText: "Student in Partur, Maharashtra, working with an online tutor on an IGCSE Mathematics worksheet",
  secondaryKeywords: [
    "IB tutor Partur",
    "IGCSE tutor Partur",
    "IB home tuition Partur",
    "IGCSE home tuition Partur",
    "IB private tuition Partur",
    "IB Maths tutor Partur",
    "IGCSE Maths tutor Partur",
    "IB Physics tutor Partur",
    "IB Chemistry tutor Partur",
    "IB Biology tutor Partur",
    "IB DP tutor Partur",
    "IB MYP tutor Partur",
    "IB PYP tutor Partur",
    "IGCSE online tuition Partur",
    "IB tutor Jalna district",
    "online IB tutor Marathwada",
    "IGCSE tutor Mantha",
    "IB tutor Ashti Partur",
    "Cambridge IGCSE tutor Partur Maharashtra",
    "IB tutor Partur Jalna",
  ],

  heroTrustPoints: [
    "Your child's IB subject and level, or IGCSE syllabus code, decides the tutor shortlist",
    "All lessons are online; in-person home tuition is restricted to Gurugram and parts of Delhi NCR",
    "The first lesson is free, and the rate is written down before you book",
    "IB Gram has no tie to any Partur school, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "Marathwada town", label: "Jalna district, Maharashtra" },
    { value: "PYP to DP", label: "All four IB programmes covered" },
    { value: "IST", label: "A single clock for tutor and student" },
    { value: "Free trial", label: "Try one lesson first" },
  ],

  intro: {
    heading: "What IB and IGCSE tutoring looks like when you live in Partur",
    paragraphs: [
      "Partur is a taluka town in Jalna district, in the dry heartland of Marathwada, where cotton, soybean, tur and the orchards that made Jalna a mosambi name set the rhythm of the year. The nearby steel re-rolling and seed industries in Jalna provide jobs, and many families run shops, farms or agricultural trade. Schools teach the Maharashtra State Board in Marathi and English, with a few CBSE options, and ambitions point toward MHT-CET, NEET and government services.",
      "IB and Cambridge IGCSE are not part of that picture. We have not found, and so do not name, any IB World School or Cambridge or Edexcel centre in Partur. When families here get in touch, the reason is usually specific: a parent posted by a company or the government to another state, a relative abroad who has suggested an international degree, or a child from Pune or Mumbai whose family has come home.",
      "Since a local specialist is simply not available, the sensible approach is to look nationwide. We match a tutor to the course, whether that is Physics HL or IGCSE Extended Maths, and the lessons run live over video at a time that suits your evening.",
      "One thing to be clear about: no tutor will ring your doorbell in Partur, since in-person tuition is available only in Gurugram and parts of Delhi NCR. Private tuition at home here means a live lesson on your own laptop. IB Gram is independent of schools and exam boards, and our tutors coach but never write assessed coursework.",
    ],
    bullets: [
      "IB help across PYP, MYP, DP and CP",
      "IGCSE tutoring for Cambridge and Pearson Edexcel codes",
      "Online one-to-one lessons from your own desk",
      "A short written note after every class",
      "A free trial, then rates in writing",
    ],
  },

  programmesIntro:
    "In Partur the IB tends to come into view through a transfer, a move to a bigger city or a private study plan, rarely through a local school. The sections below describe the actual tutoring work at each of the four stages.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Children in the PYP investigate big ideas through projects, and the programme ends with a student-led Exhibition. There is no marks-based exam. A tutor reinforces fluent reading, number sense and the courage to share an idea in full sentences.",
      countryNote:
        "A child from a Marathi-medium primary school in Partur often needs spoken English confidence built up before project talk feels natural.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers mark each MYP subject against criteria rather than a single score, and every student plans a Personal Project. The leap that stalls many learners is moving from describing a thing to judging it. Tutoring uses short, repeated writing tasks to close that gap.",
      countryNote:
        "A student coming from the Maharashtra State Board typically finds extended written answers the main change.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma candidate studies three subjects at Higher Level and three at Standard Level while also completing the Extended Essay, Theory of Knowledge and CAS. Final papers come in May or November and, together with internal work, produce a total of at most 45 points. The tutor's job is understanding and exam craft; the written pieces are the student's alone.",
      countryNote:
        "Diploma students from Partur study at schools in Chhatrapati Sambhajinagar, Pune, Mumbai or abroad, so lessons follow that school's term dates.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme (CP)",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP combines Diploma courses with a career-related study, a reflective project and service learning. It suits students who want a practical route into business, design or technical fields. Very few Indian schools run it.",
      countryNote:
        "Requests from Jalna district are uncommon and usually concern Maths or Business within a CP package.",
    },
  ],

  subjectsIntro:
    "A Partur parent seldom asks for 'IB' in general. The ask is more precise: Chemistry HL before a mock, or Economics essay practice before a deadline. Give us the subject, level and session and the shortlist follows.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof-style reasoning for future engineers and scientists, with practice on unfamiliar HL problems." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology for students heading to commerce, management or social science." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, electricity and fields, with data analysis practised under timed conditions." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, equilibrium and organic reactions, taught with the data booklet open." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, inheritance and ecosystems, turned into concise, command-word-aware answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets, government policy and development, using farm prices and rural credit as familiar examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies and business tools, illustrated with agro-processing and small manufacturing." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Reading unseen passages closely, shaping essays and rehearsing the oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms and data structures learned by writing and running code in the lesson." },
    { name: "IB Psychology", levels: "HL / SL", description: "Key studies, evaluation and long-answer structure." },
    { name: "IB Geography", levels: "HL / SL", description: "Water scarcity, drought and agriculture, with Marathwada as a living case." },
    { name: "IB Marathi B", levels: "HL / SL", description: "Formal written Marathi, text types and oral practice for home speakers." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Accurate grammar, register for each text type and conversation practice for the oral assessment." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Practice at interrogating knowledge claims and defending a position; both the essay and the exhibition remain the pupil's own." },
  ],

  igcseSubjectsIntro:
    "As far as we could establish, no school near Partur teaches Cambridge IGCSE. Requests therefore come from private candidates or children about to change schools, and we settle the board, code and tier before any practice begins.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended candidates must manipulate algebra quickly; Core candidates must show working that earns method marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "A head start on calculus and functions, so IB Maths later feels less steep." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equations, units and the alternative-to-practical paper, taught together." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, reaction types and salt tests, drilled with past-paper wording." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Inheritance, plant biology and ecosystems practised through long-answer questions." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Precise definitions, clean diagrams and brief judgements, each sized to the marks on offer." },
    { name: "IGCSE Computer Science 0478 (Cambridge)", levels: "Grade 9-10", description: "Pseudocode and Python alongside theory." },
    { name: "IGCSE English Second Language 0510", levels: "Grade 9-10", description: "All four skills for students from Marathi-medium schools." },
    { name: "IGCSE Business Studies 0450 (Cambridge)", levels: "Grade 9-10", description: "Case questions answered with scenario-specific writing." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Case studies, map skills and data response questions." },
  ],

  regionsTitle: "Partur and Jalna district places our online tutors already serve",
  regionsIntro:
    "Because lessons are online, the places below are background rather than delivery: where a child might commute, how bus timings run, and what heat, dry years and festivals do to an evening.",
  regions: [
    { name: "Partur town", note: "The taluka headquarters, with its market, bus stand and the daily school run that sets the household clock." },
    { name: "Mantha", note: "A neighbouring taluka town in Jalna district, on a road that many Partur families use for trade and relatives." },
    { name: "Ashti", note: "A town in the Partur taluka, typical of the farming catchment that sends students into town schools." },
    { name: "Vatur", note: "A village town in the area, known to families travelling the Jalna–Parbhani direction." },
    { name: "Jalna city", note: "The district headquarters, home to steel re-rolling, seed companies and the largest local choice of schools and coaching." },
    { name: "Parbhani", note: "A larger city to the east with an agricultural university and more private schools." },
    { name: "Ambad", note: "A town in Jalna district with its own market and school cluster." },
    { name: "Selu", note: "A town on the Parbhani side, familiar to Partur families through trade and travel." },
    { name: "Partur–Jalna road", note: "The main route to the district headquarters, shaping school and shopping trips." },
    { name: "Chhatrapati Sambhajinagar road", note: "The route toward the divisional city, the usual point for families looking beyond the district." },
  ],

  schoolDisclaimer:
    "We checked for an IB or Cambridge/Edexcel school inside Partur and came up empty, which is why the town section names none. Larger cities appear below only as places a Partur family might move to or send a child; they carry no commercial link to us. IB Gram works independently of all schools and of the IB, Cambridge and Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Partur itself: local options are limited",
      note: "Schools in and around Partur follow the Maharashtra State Board, with some CBSE. We found no confirmed IB or IGCSE campus, so online matching is the realistic route for these syllabuses.",
      schools: [],
    },
    {
      city: "Nearby: Jalna and Parbhani",
      note: "Jalna and Parbhani are the closest cities with more private schools and coaching. We do not name an IB or Cambridge school there without confirmation.",
      schools: [],
    },
    {
      city: "Nearby: Chhatrapati Sambhajinagar",
      note: "The divisional city, about two hours away by road, has the widest school choice in Marathwada and is where most families begin when looking beyond the district.",
      schools: [],
    },
    {
      city: "Nearby: Pune and Mumbai",
      note: "The two metros where most Maharashtra IB and Cambridge schools are concentrated, and where relocating Marathwada families usually settle.",
      schools: [],
    },
  ],

  modesIntro:
    "In Partur the delivery format is always live, one-to-one and online. What changes between families is tempo: a steady weekly class, a class with written notes, or a burst before an exam. Nobody visits the house, since that service exists only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "A steady weekly class",
      description:
        "A single tutor meets your child at the same weekly time, wherever the study table happens to be in the house. Families who value routine pick this, because the tutor soon learns how the student thinks.",
      bullets: [
        "One tutor, one fixed hour",
        "Works from PYP up to IGCSE and DP",
        "Past papers marked live",
        "No travel to Jalna or Sambhajinagar",
      ],
    },
    {
      title: "Weekly class with notes",
      description:
        "Lessons stay the same, but every session ends with a written line or two, and every few weeks a fuller review lands in your inbox. It helps most when one parent is working in Pune or the Gulf.",
      bullets: [
        "A summary after every class",
        "Regular plan reviews",
        "Good for younger students",
        "Extra slots easily added",
      ],
    },
    {
      title: "Exam-season booster",
      description:
        "Sessions bunch together in the weeks before a mock or a May or November series. Timed papers come back with comments quickly, and the plan avoids the hottest afternoons and the big festival weeks.",
      bullets: [
        "Scripts marked against the official scheme",
        "Feedback within days",
        "Book two to three weeks ahead",
        "Short, focused blocks",
      ],
    },
  ],

  sections: [
    {
      heading: "Which families around Partur ask about IB and IGCSE?",
      paragraphs: [
        "Partur is a market town for the Marathwada farm belt. Cotton, soybean, tur and citrus move through its yards, and many households combine farming with trade or a government job. Education is dominated by Maharashtra State Board schools, and a typical career plan runs through HSC, then MHT-CET or NEET, or a push for the civil services.",
        "That leaves little room for international syllabuses, and we found no IB or Cambridge school in the town. The families who contact us do so for particular reasons. A parent may have been posted to Pune, Hyderabad or the Gulf and wants the child to continue an international board. Another family may have a relative in the UK or Canada who suggested the Diploma as a route abroad.",
        "A third group is private candidates: students who want IGCSE qualifications without joining a Cambridge school, usually because they plan to move to one later.",
        "Whatever the route, the problem is the same. No local tutor has taught IB Physics HL or IGCSE Extended Chemistry this year. Matching across India solves that, and the lesson happens at home in Partur.",
      ],
      table: {
        caption: "How a Partur family typically reaches an international syllabus",
        columns: ["Route", "Situation", "What tutoring does"],
        rows: [
          ["Parent transfer", "Job moves the family to a metro", "Bridges gaps before and after the school change"],
          ["Return from abroad", "Pupil has already followed IB or IGCSE", "Preserves momentum and patches missing topics"],
          ["Private IGCSE candidate", "No Cambridge school nearby", "Provides structure, practice and marking"],
          ["State-board student exploring", "Curiosity about a global degree path", "Trains command-word reading and written answers"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed in Partur",
        "Enquiries are specific and few",
        "Tutors are matched across India",
        "Exam marking is identical wherever you sit",
      ],
    },
    {
      heading: "How do the Maharashtra State Board and MHT-CET differ from IB and IGCSE?",
      paragraphs: [
        "The Maharashtra State Board's SSC and HSC examinations are textbook-led, and MHT-CET and NEET then decide admission into engineering, pharmacy and medicine. IB and Cambridge IGCSE assess differently, using unfamiliar scenarios, written reasoning and, in IB, a sustained piece of independent work.",
        "For Marathi-medium students the language demand is the biggest jump. A Biology answer needs exact English terms and sentence structure, and an Economics essay needs a clear line of argument. The first months of switching are therefore spent on writing, not new content.",
        "Coursework changes the working habit. A state board practical is mostly a record; an IB Internal Assessment asks a student to plan, collect data and reflect, with a tutor questioning rather than doing.",
        "Nothing here is a verdict on the state board, whose strength is speed and memory. IB and IGCSE just test a second set of abilities.",
      ],
      table: {
        caption: "Boards a Partur family may compare",
        columns: ["Feature", "Maharashtra State Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Local presence", "Most schools", "A few", "None confirmed"],
          ["Final assessment", "SSC and HSC papers", "Class 10 and 12 boards", "Exams plus coursework"],
          ["Entrance route", "MHT-CET, NEET, JEE", "JEE, NEET, CUET", "AIU equivalence, CUET or overseas"],
          ["Language of study", "Marathi or English", "English or Hindi", "English plus language courses"],
        ],
      },
      bullets: [
        "English precision is the biggest change",
        "Independent coursework is unfamiliar",
        "Each board has its own entrance routes",
        "The state system builds strong recall",
      ],
    },
    {
      heading: "What makes up the cost of IB tuition for a Partur family?",
      paragraphs: [
        "A price list is not published because the answer depends on the course. A tutor for Physics HL with recent IB experience is harder to find than one for IGCSE Core Maths, and rates reflect that scarcity.",
        "Experience with the exact syllabus is the next factor. Someone who has taught or marked the course recently finds a student's weak points faster, which usually reduces total hours.",
        "Weekly hours also change the figure. A single lesson a week is modest, while three before a mock cost more per week, though a short intense block can need fewer weeks overall.",
        "You will see the rate in writing after the free trial. Declining at that point costs nothing, which is the simplest way to weigh price against quality.",
      ],
      table: {
        caption: "Why one quote differs from another",
        columns: ["Factor", "Effect", "Your control"],
        rows: [
          ["Subject and level", "Advanced sciences and Maths sit above IGCSE Core papers", "Spend where help is needed"],
          ["Tutor experience", "Recent IB or Cambridge work raises the rate", "Ask which courses were taught lately"],
          ["Weekly hours", "More sessions mean a higher weekly total", "Begin with one"],
          ["Season", "Demand peaks before exams", "Book early"],
        ],
      },
      bullets: [
        "We publish no price list",
        "Figure sent in writing once you have tried a lesson",
        "A good match can outweigh a cheaper hour",
        "Tutor change available",
      ],
    },
    {
      heading: "Online tutor, Jalna classes or self-study from Partur?",
      paragraphs: [
        "Jalna and Chhatrapati Sambhajinagar both have busy tuition markets, but those are built for MHT-CET, NEET and board preparation. The teachers there rarely handle IB command terms or IGCSE practical papers, and the journey eats hours from a school week.",
        "A local private tutor can be excellent for the state syllabus, yet few have ever taught IB or Cambridge material because few schools nearby offer it.",
        "Teaching over video puts a specialist at the desk. The tutor might be in Pune, Bengaluru or Hyderabad while the student never leaves Partur, and the pairing rests on expertise alone.",
        "Self-study with past papers works only if marked work comes back with explanations. That feedback loop is what a tutor provides.",
      ],
      table: {
        caption: "Ways to prepare for IB or IGCSE from Partur",
        columns: ["Option", "Strength", "Limit"],
        rows: [
          ["Online one-to-one", "Specialist, flexible time", "Needs reliable internet"],
          ["Jalna or Sambhajinagar classes", "In-person contact", "Aimed at MHT-CET and NEET; long journeys"],
          ["Neighbourhood state-board tutor", "Close to home", "Rarely has taught IB or IGCSE"],
          ["Self-study", "Low cost", "No expert marking"],
        ],
      },
      bullets: [
        "Pick for syllabus knowledge",
        "Entrance coaching is not IB preparation",
        "Feedback matters more than hours",
        "Use the trial to compare",
      ],
    },
    {
      heading: "How do Marathwada's seasons and festivals affect the exam year?",
      paragraphs: [
        "IB Diploma exams run mainly in May, with a November session for some schools, and Cambridge IGCSE runs in May-June and October-November. Results arrive in July and January. Always confirm exact dates with the student's centre.",
        "Marathwada has a hard summer. April and May bring temperatures above 40 degrees, and afternoon study becomes difficult. Evening and early morning slots work better, and fans or coolers need to keep running during lessons.",
        "The monsoon from June to September is erratic here, and some years bring drought. Power and connectivity can be patchy, so a hotspot is a sensible backup. Ganeshotsav, Navratri, Dussehra and Diwali each take days out of the autumn term.",
        "We plan from the exam date backwards: syllabus, practice papers, revision, with buffer days for heat, power cuts and festivals.",
      ],
      table: {
        caption: "A study year for a student in Partur",
        columns: ["Period", "Local context", "Focus"],
        rows: [
          ["January to March", "Cool, dry; school mocks", "Revision and weak-topic repair"],
          ["April to June", "Intense heat; May exams", "Timed papers, early or late slots"],
          ["July to September", "Monsoon, Ganeshotsav", "New content, coursework planning"],
          ["October to December", "Navratri, Diwali, November series", "Drafts, mocks, exam practice"],
        ],
      },
      bullets: [
        "Most Indian IB candidates sit in May",
        "Cambridge runs twice a year",
        "Plan for heat and power cuts",
        "Block festival days in advance",
      ],
    },
    {
      heading: "What comes after IB or IGCSE for a student from Partur?",
      paragraphs: [
        "In India the Association of Indian Universities issues equivalence for the Diploma and for Cambridge qualifications. CUET-UG is open to international board students, and universities in Maharashtra, Karnataka and elsewhere consider IB scores directly.",
        "Engineering and medicine come with conditions of their own. JEE Main, MHT-CET and NEET each specify which subjects a candidate needs, so read the current bulletins while choosing Class 11 subjects, not afterwards.",
        "Overseas, IB points are read directly in the UK, US, Canada, Australia and Europe. Students from agricultural families often look at agri-business, food technology or environmental science abroad.",
        "What we supply is teaching and practice for the exams. Admission forms, personal statements and portfolios stay in the student's own hands.",
      ],
      table: {
        caption: "Where the qualifications lead",
        columns: ["Destination", "Key point", "Check"],
        rows: [
          ["Indian universities", "AIU certificate; CUET-UG for some courses", "Institution's page"],
          ["Engineering", "Subject mix for JEE or MHT-CET", "Latest bulletins"],
          ["Medicine", "NEET subject rules", "NEET plus state counselling rules"],
          ["Overseas", "IB total or an A Level pathway", "University entry tables"],
        ],
      },
      bullets: [
        "Verify equivalence early",
        "Class 11 choices narrow or widen the road",
        "Overseas admissions offices read IB totals directly",
        "Applications remain the student's work",
      ],
    },
    {
      heading: "How is IB Maths and the sciences taught over video?",
      paragraphs: [
        "The Maths decision comes first. Analysis and Approaches is the algebra and calculus course; Applications and Interpretation is the data and modelling course. Either can be taken at Higher or Standard Level, and the intended degree should settle the question.",
        "A shared whiteboard lets the tutor solve alongside the student. Photos of handwritten working come back marked line by line, which is often clearer than margin comments on paper.",
        "Every science leaks marks in its own way: Physics through careless units, Chemistry through a half-remembered data booklet, Biology through loose wording. A session starts with whichever leak is widest for that student.",
        "Internal assessments are discussed at planning level. The investigation and report belong to the student.",
      ],
      bullets: [
        "Choose the Maths course by degree plans",
        "Shared whiteboard and photographed working",
        "Fix the habit that loses most marks",
        "Every assessed piece is the student's own",
      ],
    },
    {
      heading: "Core or Extended IGCSE, and which subjects to choose?",
      paragraphs: [
        "In Maths and the sciences, Cambridge lets a candidate enter either the Core tier, where the top grade is C, or the Extended tier, where A* is possible. A child who hopes to reach IB Diploma Physics or A Level Maths later should aim for Extended.",
        "How many subjects to sit is the other decision. Nine can swamp a student who also has Marathi homework; five can close doors later. Most Partur families settle on English, Maths, two sciences, one humanity and a language.",
        "Students who studied in Marathi medium often find English as a Second Language the safest language paper, while a few centres also allow Hindi or Marathi as a language option.",
        "A Pearson Edexcel candidate faces a comparable tier structure but different papers, so the first message to us should say which board the school or centre uses.",
      ],
      bullets: [
        "Extended tier leaves later routes open",
        "Keep the number of subjects manageable",
        "Consider the language option",
        "Confirm Cambridge or Edexcel early",
      ],
    },
  ],

  process: [
    { title: "Drop us a line", description: "Class, board, subject and level, sent by WhatsApp or email, are all we need at first." },
    { title: "Look at our suggestion", description: "A tutor who has recently taught or marked the very course you named." },
    { title: "Attend the free class", description: "One live lesson, no payment, so everyone can judge the fit." },
    { title: "Sign off on the terms", description: "Hours and fee are set out in writing before anything is booked." },
    { title: "Settle into a routine", description: "Weekly lessons, a short note after each, and a change of tutor if needed." },
  ],

  whyPoints: [
    { title: "Chosen for the syllabus", description: "Subject, level and board steer the shortlist." },
    { title: "Honest about location", description: "In Partur every lesson is on screen; in-person visits belong to Gurugram and parts of Delhi NCR alone." },
    { title: "Parents kept in the loop", description: "A note after each class means you are never guessing." },
    { title: "See before you pay", description: "The free trial shows the teaching first." },
    { title: "Firm academic limits", description: "Tutors never author a student's IA, Extended Essay, TOK essay or coursework." },
    { title: "No awkward switches", description: "A weak match is replaced promptly." },
  ],

  tutorsIntro:
    "These tutors teach from different Indian cities and join a Partur student over video, on Indian time. The deciding factor is experience with your course, never distance.",

  faqs: [
    { question: "Are IB and IGCSE tutors available in Partur?", answer: "Yes, online. They teach live from other Indian cities while your child studies at home in Partur on a laptop. We choose by subject, level and board and arrange a free trial. No one visits homes in Jalna district; in-person tuition is offered only in Gurugram and parts of Delhi NCR." },
    { question: "Do you provide home tuition in Partur?", answer: "Your child can have a private, one-to-one tutor while staying at home, but the tutor appears over video. Doorstep visits in Partur, Jalna or Sambhajinagar are not part of what we do; physical home tuition exists solely in Gurugram and parts of Delhi NCR." },
    { question: "Is there an IB school in Partur?", answer: "Not one we could verify. Schools here teach the Maharashtra State Board, plus some CBSE. Pune, Mumbai and Chhatrapati Sambhajinagar have more international options. Before relying on any school, ask it directly which IB or Cambridge programmes it is authorised to teach." },
    { question: "What will IB tuition cost?", answer: "There is no public price list. The rate follows the subject, the level, the tutor's experience with that syllabus and the hours per week, with HL sciences and Maths typically above IGCSE Core. You receive a written figure after the trial and book only if you agree." },
    { question: "How does the trial lesson work?", answer: "Your child attends a full-length live lesson with a tutor matched to the subject. You see how the tutor explains, at what pace, and whether your child is comfortable. No fee, no commitment, and if the fit is poor we suggest another tutor." },
    { question: "Can my child take IGCSE privately from Partur?", answer: "In many cases, via an approved exam centre; charges, subject lists and deadlines differ, so write to the centre well ahead. We prepare your child for the papers and the practical skills, but entering the exam is the family's responsibility. Chhatrapati Sambhajinagar, Pune and Mumbai are the likeliest centre cities." },
    { question: "Will a tutor complete my child's IA or Extended Essay?", answer: "Never. A tutor explains the criteria, discusses topic ideas and comments on structure, but the student does the research, writing and submission, as IB rules require. The same applies to TOK essays and any other graded coursework." },
    { question: "What IB subjects do your tutors teach?", answer: "The list runs from both Maths routes and the three sciences through Economics, Business, English, Computer Science, Psychology and Geography to Marathi B, Hindi B and TOK, at either level. Anything outside it, mention in your first message and we will say whether a tutor is available." },
    { question: "Is IGCSE easier than the Maharashtra HSC?", answer: "Not easier, just built differently. HSC rewards accurate recall of the textbook, whereas IGCSE rewards explanation and application in new settings. Marathi-medium students usually need practice with English phrasing and command words, and tutoring starts there." },
    { question: "Can students from Mantha, Ashti or Vatur join?", answer: "Certainly. A stable internet link is all that is needed, since every lesson is on video. Because tutors are picked for subject expertise, a pupil in Vatur or Ashti sees the same shortlist as one living in Partur town." },
    { question: "What time are lessons held?", answer: "Sessions follow Indian Standard Time and are usually in the early evening or at weekends. We fix a regular slot first, then adjust it around exams, festivals, harvest trips or a family visit with a short message." },
    { question: "What if heat or power cuts disrupt a lesson?", answer: "In April and May, evening or early-morning slots are better, and a hotspot plus a charged laptop help during outages. If a lesson is lost, tell the tutor early; many sessions can be moved within the same week, under the terms agreed in writing." },
    { question: "Can a state board student move to IB later?", answer: "It can be done at Class 6, 9 or 11, which are the natural join points. The first weeks usually go on English reasoning and exam vocabulary; your tutor will also suggest whether Standard Level or Core is the wiser first-year choice." },
    { question: "Do you teach MYP and PYP too?", answer: "Yes. MYP sessions revolve around rubric-marked assignments and the Personal Project, while PYP sessions build reading, number sense and curiosity. Neither stage carries the pressure of Diploma exams." },
    { question: "Will I hear back after each lesson?", answer: "You will. After each lesson a few lines record the topic covered, the sticking points and the next task, and a broader progress review follows every few weeks. Working parents based far from Partur rely on these notes." },
    { question: "Is IB Gram connected to any school or exam board?", answer: "No. IB Gram runs on its own. We hold no partnership with the IB, Cambridge, Pearson or any school, and the cities mentioned are simply geography. Tutors have classroom or examining backgrounds, yet we do not present ourselves as an official body." },
    { question: "How do we get going?", answer: "The quickest way is a WhatsApp message to +91 7439 368 115, or an email to support@ibgram.com, stating class, board, subject and latest marks. Back comes a tutor suggestion and a trial slot, with fees in writing before you commit." },
  ],

  internalLinks: [
    { label: "IB Gram city pages across India", href: "/india/", description: "Our pages for other places across the country." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subjects and programmes explained for IB students." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "What IGCSE tuition covers for Cambridge and Edexcel candidates." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the core and how scoring works." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project explained." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between the two Maths courses." },
    { label: "Our tutors", href: "/tutors/", description: "Who teaches, and in which subjects." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a free trial." },
    { label: "Tutors in Parbhani", href: "/parbhani/", description: "The nearby Marathwada city to the east." },
    { label: "Tutors in Chhatrapati Sambhajinagar (Aurangabad)", href: "/aurangabad/", description: "The divisional city of Marathwada." },
    { label: "Tutors in Latur", href: "/latur/", description: "Known across Maharashtra for its coaching culture." },
  ],

  closingHeading: "A free first lesson, from Partur",
  closingBody:
    "Tell us the subject, level and board on WhatsApp (+91 7439 368 115) or at support@ibgram.com. A suggested tutor, a cool-evening trial class and a written fee will come back to you before you decide anything.",
};
