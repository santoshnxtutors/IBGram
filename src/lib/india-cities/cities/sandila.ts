import type { CitySeoPage } from "../types";

/**
 * Sandila (Hardoi district, Uttar Pradesh), midway between Hardoi and Lucknow (about 50 km each per
 * Wikipedia). No IB or Cambridge/Edexcel school in Sandila was confirmed, so stripSchools is empty
 * and the clusters point honestly to Lucknow, reusing names already on the Lucknow and Hardoi pages.
 */
export const sandila: CitySeoPage = {
  slug: "sandila",
  countryName: "Sandila",
  countryNameLong: "Sandila, Uttar Pradesh",
  demonym: "Sandila",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early evening lessons in the loo-heavy months, fog-proof indoor slots in winter, and quiet weeks around Eid, Dussehra and Diwali",
  lastUpdated: "2026-09-21",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  geo: { latitude: 27.0769, longitude: 80.5225 },
  alternateNames: ["Sandeela", "Sandila Hardoi", "Sandila UP", "Sandila Lucknow road"],
  wikipedia: "https://en.wikipedia.org/wiki/Sandila",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sandila | Online Private Tuition, UP",
  metaDescription:
    "Online IB and IGCSE tutors for Sandila students in Hardoi district: private one-to-one lessons for PYP, MYP, DP and IGCSE from home, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Sandila, Uttar Pradesh",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FROM HOME IN SANDILA",
  heroSubtitle:
    "If you want home tuition in Sandila for an IB or IGCSE student, the practical answer is a live private lesson on a laptop at your own table. Tutors teach online and do not come to Sandila, which suits a family whose nearest international campus is an hour or more away in Lucknow.",
  primaryKeyword: "IB and IGCSE tutors in Sandila",
  imageAltText: "A Sandila student with a laptop at home joining a live one-to-one online IGCSE Physics lesson",
  secondaryKeywords: [
    "IB tutor Sandila",
    "IGCSE tutor Sandila",
    "IB home tuition Sandila",
    "IGCSE home tuition Sandila",
    "IB private tuition Sandila",
    "IB Maths tutor Sandila",
    "IGCSE Maths tutor Sandila",
    "IB Physics tutor Sandila",
    "IB Chemistry tutor Sandila",
    "IB Biology tutor Sandila",
    "IB DP tutor Sandila",
    "IB MYP tutor Sandila",
    "IB PYP tutor Sandila",
    "IGCSE online tuition Sandila",
    "IB tutor Hardoi district",
    "online IB tutor Uttar Pradesh",
    "Cambridge IGCSE tutor Sandila",
    "Edexcel IGCSE tutor Sandila",
    "IB tutor Sandila Lucknow road",
    "IGCSE tutor Sandila Hardoi",
    "IB Economics tutor Sandila",
    "IGCSE Additional Maths tutor Sandila",
  ],

  heroTrustPoints: [
    "Teaching is live and private, one tutor to one student, over video",
    "Tutors are picked for the board, subject code and level, not only the subject name",
    "The first lesson is a free trial and every session ends with a short written note",
    "IB Gram works independently of every school, board and exam body mentioned on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards" },
    { value: "Online, private", label: "Format for Sandila" },
    { value: "Free trial", label: "Before any fee" },
  ],

  intro: {
    heading: "A laddu town on the Lucknow line looks at international boards",
    paragraphs: [
      "Sandila is known across Uttar Pradesh for its laddus, but the town has another side that matters to parents reading this page. It is a tehsil headquarters in Hardoi district, roughly fifty kilometres from both Hardoi and Lucknow, with a broad-gauge railway line on its southern edge and National Highway 731 passing through. Its municipality dates to 1868, making it the oldest in the district. The Sandila Industrial Area has brought in food, paint and consumer-goods employers, and with them a small but real group of families who think about their children's schooling in wider terms.",
      "What Sandila does not have, as far as we could confirm, is a school teaching the IB or a Cambridge or Edexcel IGCSE course. Classrooms in town follow the Uttar Pradesh Board, CBSE or ICSE. For a family that wants an international qualification, the nearest real options are in Lucknow, and choosing one often means a daily commute, a hostel seat or a move. Online one-to-one tutoring is a way of keeping options open while that decision is made.",
      "We should be clear about what online means here. IB Gram sends tutors to homes only in Gurugram and parts of Delhi NCR. Nobody will arrive at a Sandila doorstep. What we offer is private home tuition delivered on a screen: a live lesson, a fixed weekly time, a tutor who knows the syllabus and marks the work. The tutor lives in India and works on Indian Standard Time.",
      "Tutors coach and explain. They never write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework on a student's behalf. IB Gram is an independent service and has no affiliation with the International Baccalaureate, Cambridge, Pearson Edexcel or any school named below.",
    ],
    bullets: [
      "Live IB PYP, MYP, DP and CP lessons taught by video",
      "Cambridge and Edexcel IGCSE at Core, Extended, Foundation and Higher tiers",
      "Private tuition at home, taken online, with no travel for tutor or student",
      "A free first lesson, then a written plan and quote before any booking",
    ],
  },

  programmesIntro:
    "A Sandila student rarely meets these programmes inside town, so each one below is described with the situation a family is usually in when they ask about it.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Young learners investigate a shared theme across subjects, keep a record of their thinking and finish with an Exhibition, a project they lead themselves.",
      countryNote:
        "Families here often speak Hindi or Urdu at home, so early PYP tutoring spends time on English reading aloud and on putting a spoken idea into a first written sentence.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are grouped into eight areas and marked against criteria, with service and a final Personal Project that shows planning, research and reflection.",
      countryNote:
        "A child coming from a UP Board classroom is used to a textbook answer key, so a tutor spends time showing how a criterion band differs from a model answer.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects and complete the Extended Essay, Theory of Knowledge and service activities, with written papers in May or November and moderated internal assessments.",
      countryNote:
        "With no Diploma school in Lucknow at all as far as we could confirm, Sandila students aiming for it usually board elsewhere, such as in Uttarakhand, and use tutoring between terms.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A few Diploma courses are taken with career-related study and a reflective project, suiting students who prefer applied, vocational learning.",
      countryNote:
        "CP is uncommon in north India, so tutoring here is mostly for students already enrolled elsewhere who need help with the academic courses inside it.",
    },
  ],

  subjectsIntro:
    "These are the IB subjects families from the Sandila and Hardoi belt ask about. A tutor is chosen for subject depth first and for comfort with students who study largely alone.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus, series and proof, with paper practice under time pressure and a plan for the Exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistical modelling, finance and technology, well matched to students heading toward commerce or social science." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics to fields and nuclear physics, with data questions and a simple, safe investigation for the internal assessment." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Atomic structure, energetics, equilibrium and organic chemistry, with regular calculation drills." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, physiology and ecology, often used as the route toward medicine after careful eligibility checks." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets, macroeconomic policy and development, using Indian examples from agriculture and small industry." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case analysis and the IA research project, with examples from food processing and trading families." },
    { name: "IB English A: Language & Literature", levels: "HL / SL", description: "Close reading, comparative essays and the individual oral commentary." },
    { name: "IB English B", levels: "HL / SL", description: "Language acquisition for students whose home languages are Hindi, Urdu or Awadhi." },
    { name: "IB Hindi A/B", levels: "SL", description: "Literature and language courses for students who want Hindi recognised in the Diploma." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, Python or Java programming, databases and networks." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and essay writing, with attention to command terms." },
    { name: "IB Psychology", levels: "HL / SL", description: "Biological, cognitive and sociocultural approaches and the experimental IA." },
    { name: "Theory of Knowledge", levels: "Core", description: "Knowledge questions and exhibition planning, coached without writing any of the student's work." },
  ],
  igcseSubjectsIntro:
    "IGCSE suits Sandila students who are heading to an international school in Lucknow or elsewhere, or who plan to sit papers as private candidates at an exam centre. Board, tier and subject code are fixed with the family before the first lesson.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Number, algebra, geometry and statistics with past-paper routines for the tier the student is entered for." },
    { name: "IGCSE Additional Mathematics", levels: "Extended", description: "Functions, calculus and trigonometry in depth, useful for future IB Maths Analysis." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, electricity, thermal and wave physics, with alternative-to-practical skills." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, bonding, reactivity and organic chemistry with worked calculations." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, nutrition, inheritance and ecology, with graph and data handling." },
    { name: "IGCSE English as a First Language", levels: "Extended", description: "Directed writing, narrative and argument with marked practice scripts." },
    { name: "IGCSE English as a Second Language", levels: "Core / Extended", description: "Reading, listening, writing and speaking for students who use Hindi or Urdu at home." },
    { name: "IGCSE Computer Science", levels: "Extended", description: "Computational thinking, pseudocode and regular Python practice." },
    { name: "IGCSE Business Studies", levels: "Core / Extended", description: "Business types, finance and marketing with case-study writing." },
    { name: "IGCSE Economics", levels: "Extended", description: "Microeconomic and macroeconomic ideas with data-response questions." },
    { name: "IGCSE Hindi as a Second Language", levels: "Core", description: "Reading and writing for a student who wants the home language on the certificate." },
  ],

  regionsTitle: "Around Sandila: corridors, colonies and commute patterns",
  tutorsIntro:
    "Every tutor below teaches Sandila students live over video, matched to the board and level before a trial lesson. None of them travels to homes in Sandila.",
  regionsIntro:
    "Since lessons are online, location only affects school timings, travel to Lucknow or Hardoi, and how dependable the power and data are. We use the notes below when fixing a weekly slot.",
  regions: [
    { name: "Sandila railway station area", note: "Families here use the broad-gauge line to Lucknow, so after-school timing and any exam-day travel are planned around train departures." },
    { name: "Lucknow road side", note: "Parents working in Lucknow or Malihabad often leave early and return late, making 7 pm or later slots common." },
    { name: "Hardoi road side", note: "Households with relatives in Hardoi town sometimes study there at weekends, and lessons can be joined from either address." },
    { name: "Old town (kasba) lanes", note: "Dense lanes with long-established families; broadband is steady in most pockets, and sweet-making households keep irregular hours." },
    { name: "Tehsil and court area", note: "Government and legal families who care about university routes, with many asking about AIU equivalence and CUET-UG." },
    { name: "Sandila Industrial Area", note: "Employee households connected to the food, paint and consumer-goods plants; shift work means Sunday morning slots are popular." },
    { name: "Bus stand and market belt", note: "Trading families live and work here, and festival weeks such as Diwali and Eid bring heavy shop hours, so lessons are planned early." },
    { name: "Residential colonies on the town edge", note: "Newer homes with fibre or strong mobile data, where students can often keep a dedicated study corner." },
    { name: "Surrounding villages", note: "Students travel into town for school and return by evening; power supply can vary, so a charged phone backup is advised." },
  ],

  schoolClusters: [
    {
      city: "In Sandila itself",
      note: "We could not confirm any school in Sandila that teaches the IB or a Cambridge or Edexcel IGCSE course. Local schools follow UP Board, CBSE or ICSE, which is why an online tutor is the usual way in.",
      schools: [],
    },
    {
      city: "Nearby: Lucknow (about 50 km)",
      note: "Lucknow is the closest city with international options. One school runs the IB Primary Years Programme and a few offer Cambridge IGCSE. Most Sandila families look at these for Class 9 or 11, sometimes with a hostel seat or a city address. Names are also on our Lucknow page.",
      schools: ["Modern School, Lucknow", "City Montessori School, Cambridge Campus", "GD Goenka Public School, Lucknow"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Delhi NCR holds the largest IB and IGCSE cluster in northern India and is the one region where IB Gram also arranges in-person home tuition. Families relocating by rail from Sandila often shortlist it.",
      schools: ["Pathways World School, Aravali", "The Shri Ram School, Aravali"],
    },
    {
      city: "Nearby: Hardoi",
      note: "The district headquarters is about 50 km the other way and has no school we can confirm for the IB or IGCSE, so we name none.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "School names appear only to show where international boards are taught within reach of Sandila. IB Gram is an independent tutoring business, unconnected to these schools, the IB, Cambridge or Pearson, and a school listed here has not endorsed us.",

  modesIntro:
    "Sandila households run on different rhythms, from shift work at the industrial area to sweet-shop hours. The three formats below are all live, scheduled and one to one.",
  modes: [
    {
      title: "Weekly private lesson online",
      description:
        "A steady evening or Sunday slot that feels like ordinary home tuition, except the tutor appears on a screen. The student works at home with a notebook and a laptop.",
      bullets: [
        "Fixed weekly time, agreed in advance",
        "Shared digital whiteboard for worked solutions",
        "Short written note for parents after every lesson",
      ],
    },
    {
      title: "Pre-exam intensive",
      description:
        "Several lessons a week across the last six to eight weeks before a sitting, built on timed papers and marked corrections.",
      bullets: [
        "Targeted at the May or November sessions",
        "Paper-by-paper planning for each component",
        "Scheduled to avoid festival and wedding-season clashes",
      ],
    },
    {
      title: "Board-switch bridge course",
      description:
        "A short course for a child moving from UP Board or CBSE into an IB or IGCSE school, typically in the summer break before the new term.",
      bullets: [
        "A diagnostic lesson to find the real gaps",
        "English writing and command-term drills",
        "Gentle pacing for a student adjusting to a new board",
      ],
    },
  ],

  sections: [
    {
      heading: "Why do Sandila families ask about IB and IGCSE at all?",
      paragraphs: [
        "It would be easy to assume that a town known for sweets has little interest in international curricula, but the reality is more varied. Families who look for IB and IGCSE tutors in Sandila are usually one of four kinds. The first includes parents who work in Lucknow, sometimes at a university, hospital or company, and who see that city's international schools as a realistic next step for their child.",
        "The second kind has relatives abroad. A cousin in Dubai, London or Toronto has studied Cambridge or IB, and the family wants their child to be able to join them or apply there later. Knowing the syllabus early, in Class 8 or 9, makes that path less rushed. The third kind works in the industrial area, where colleagues move between cities for work, and they want a child who can adapt to any school in India.",
        "The fourth kind is the curious parent who wants a stronger foundation in Maths, science and English than a textbook-led classroom gives. IGCSE in particular has a reputation for clear, structured papers, and some families use its syllabus as a yardstick even while the child stays in a UP Board or CBSE school.",
        "In every case the obstacle is distance from a classroom that teaches these boards. A well-matched online tutor closes that gap by teaching live, marking work and explaining mistakes, which is the same job a good home tutor does in a city. The difference is that the tutor may sit hundreds of kilometres away, and the lesson is shared on a screen.",
      ],
      bullets: [
        "Parents who work in Lucknow and are weighing its international schools",
        "Families with relatives or plans to study abroad",
        "Households connected to the industrial area with mobile careers",
        "Parents who want a structured benchmark alongside a local board",
      ],
    },
    {
      heading: "UP Board, CBSE, ICSE, IB or IGCSE: what actually changes for a student?",
      paragraphs: [
        "A Sandila student meets three national boards in practice: the Uttar Pradesh Board with its High School and Intermediate exams, CBSE, and ICSE. The IB and IGCSE are international and differ in character. The UP Board tends to reward reproduction of textbook content, often in Hindi medium, with a short year ending in February and March. CBSE shares the textbook focus but with a national question style and a stronger link to JEE and NEET.",
        "The IB asks a student to explain, compare and apply. A Biology paper might give an unfamiliar ecosystem and ask the student to predict what happens when one species is removed. IGCSE sits between, with fixed syllabus content but questions built on command words like describe, calculate and justify, and with tiers for ability.",
        "The jump that Sandila students report is usually the language of the exam, not the ideas. Answers must be written in fluent English, often in full paragraphs, within tight time. A tutor helps by practising paragraph construction and giving fast, specific feedback. In Maths the symbols are the same, but problems are worded more elaborately.",
        "The table below compares the boards in a neutral way. It describes general patterns and is not a judgement on any school.",
      ],
      table: {
        caption: "Boards a Sandila family is likely to compare",
        columns: ["Feature", "UP Board", "CBSE / ICSE", "IB", "IGCSE"],
        rows: [
          ["Usual medium in town", "Hindi or English", "English (Hindi as a subject)", "English, with Hindi or Urdu available", "English"],
          ["Question style", "Recall and short explanations", "Application on top of textbook content", "Analysis, evaluation and investigation", "Command-word papers with tiers"],
          ["Year and exams", "April start, exams in Feb-March", "April start, exams in Feb-March", "Diploma exams in May or November", "May-June or Oct-Nov series"],
          ["Entrance link", "State and national entrance exams", "JEE, NEET, CUET-UG", "AIU equivalence, CUET-UG, overseas", "Bridge to A Level, IB or overseas"],
          ["Availability near Sandila", "Widely available", "Available in and near town", "No confirmed school in town", "No confirmed school in town"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Sandila, and what shapes the rate?",
      paragraphs: [
        "Parents in Sandila are sensible about money, and so we do not hide how rates work. There are no published prices, and every rate is written out and shared before you book. The aim is that two quotes can be compared on the same footing.",
        "Level and subject are the first drivers. A tutor for IB Physics HL or IGCSE Additional Mathematics has specialist depth and a track record with that paper, which is a different thing from helping with Class 7 Science. The second driver is the tutor's familiarity with the exact board and code. The third is how often you meet: a single weekly lesson is a modest commitment, while a cluster of lessons before an exam is heavier.",
        "Format matters as well. A one-to-one lesson costs more per hour than a shared class, but a student who is behind or racing ahead gets attention tailored to their needs. A fair comparison in Sandila is not with a local batch class but with what the same specialist would charge in Lucknow, plus the time a child spends commuting.",
        "If cost is a concern, start narrow. Take the one subject that worries the student most, run it for a term, and read the tutor's notes. Then decide whether to add a second subject. A short intensive before a particular paper is a sensible alternative to a long contract.",
      ],
      bullets: [
        "Subject and level, with HL sciences and Maths at the upper end",
        "Tutor experience with the exact board and syllabus",
        "Number of lessons a week and length of the course",
        "Private lessons versus a small shared group",
      ],
    },
    {
      heading: "Online tuition, coaching centres, private tutors or self-study in Sandila?",
      paragraphs: [
        "Sandila has coaching classes and private tutors, mostly focused on board examinations and entrance tests. We could not find any that build their teaching around IB or IGCSE papers, which is not a criticism but a matter of demand: there are few students locally who need it, so a centre has no reason to specialise.",
        "An online one-to-one tutor changes the equation. The pool is national, so a student in Sandila can work with someone who has taught Cambridge 0580 Maths or IB Chemistry HL for years. The lesson is taken at home, which saves the commute to Lucknow and keeps evenings free for homework and rest.",
        "Self-study is worth using alongside any tutor. Past papers, mark schemes and examiner reports are freely available, and a motivated student can learn a lot from them. The weakness is feedback, since an essay or a multi-step calculation needs someone to say what earned marks and what did not.",
        "The table sets the four paths against each other on the points families raise most. It is a comparison of formats and does not rank any provider.",
      ],
      table: {
        caption: "Four preparation routes for a Sandila student",
        columns: ["Route", "Match to IB / IGCSE", "Commute", "Attention", "Main drawback"],
        rows: [
          ["Online one-to-one tutor", "Chosen for exact board and subject", "None, taught at home", "Whole lesson on one student", "Needs stable internet and a quiet corner"],
          ["Coaching centre in town", "Usually UP Board, CBSE and entrance prep", "Daily local trip", "Shared among a batch", "Rarely covers international syllabi"],
          ["Private tutor nearby", "Varies by person", "Local travel for one party", "Good if the tutor knows the board", "Few with IB or IGCSE background"],
          ["Self-study", "Free past papers and guides", "None", "None without review", "No marking of essays or methods"],
        ],
      },
    },
    {
      heading: "How do the seasons and festivals shape a Sandila study year?",
      paragraphs: [
        "The Uttar Pradesh climate pushes study into certain hours. From April to June, the loo and fierce afternoons make late evening the sensible time, while December and January bring fog and cold that make a warm indoor slot just as welcome. The monsoon, arriving around July, is usually a nuisance for power rather than for learning, yet a storm can knock out supply for hours.",
        "Festivals punctuate the calendar. Eid and Ramzan affect a large part of the town, with late nights and adjusted routines. Dussehra, Diwali and Holi bring family obligations, and wedding seasons in winter and spring can take whole weekends. A tutor who knows these dates in advance can shift a lesson rather than lose it.",
        "IB and IGCSE exam series have their own timeline, with Diploma exams in May and November and IGCSE in May-June and October-November. A Sandila student who is also in a UP Board or CBSE school faces a clash in February and March, when board exams end and international mock papers begin. A clear plan prevents exhaustion.",
        "The table shows a typical year and how tutoring adapts. Specific dates for a school or exam centre must be checked with that institution, since they change from year to year.",
      ],
      table: {
        caption: "A typical year for a Sandila student preparing for IB or IGCSE",
        columns: ["Months", "What is happening", "Local factor", "How lessons adapt"],
        rows: [
          ["April to June", "New class begins, summer heat peaks", "Loo and power pressure", "Late evening slots, shorter sessions"],
          ["July to September", "Monsoon, first assessments", "Storms and waterlogging", "Backup data plan and make-up slot"],
          ["October to November", "Dussehra, Diwali, November exam series", "Holiday travel", "Lessons moved ahead of festival weeks"],
          ["December to January", "Winter term, mock papers", "Fog, cold, wedding season", "Indoor daytime slots at weekends"],
          ["February to May", "Board exams end, international papers begin", "Rising heat", "Careful sequencing so board and IB or IGCSE revision do not collide"],
        ],
      },
    },
    {
      heading: "Where can a Sandila student go after IB or IGCSE?",
      paragraphs: [
        "Lucknow is the natural first stop for higher education, with the University of Lucknow, King George's Medical University, the IIM, AKTU-affiliated engineering colleges and a number of private universities all within reach of Sandila by rail. An IB Diploma holder applying to Indian universities needs an equivalence certificate from the Association of Indian Universities, and then applies through channels such as CUET-UG or direct admission.",
        "For engineering and medicine, JEE Main and NEET-UG have their own eligibility rules. IB and IGCSE students must confirm their subject combination and board recognition, with Physics, Chemistry and Mathematics or Biology being the usual requirement. Some families keep an Indian board subject list in mind while the child studies IB, simply to avoid closing doors.",
        "Abroad, the IB Diploma is widely understood. UK universities ask for specific HL subjects and grades, US colleges look at the whole profile, and Canada, Australia and Singapore use similar signals. IGCSE alone usually leads to A Level, IB Diploma or a foundation year rather than straight into a degree.",
        "Because entry rules change, families should verify every course with the university. A tutor can help a student choose subjects that keep several options open, but the requirements themselves belong to the institutions.",
      ],
      bullets: [
        "AIU equivalence for IB Diploma applications in India",
        "CUET-UG for central and many state universities",
        "JEE Main and NEET-UG subject eligibility checked early",
        "UK, US, Canada, Australia and Singapore using predicted and final grades",
      ],
    },
    {
      heading: "How are IB Maths, Physics, Chemistry and Biology taught online to a Sandila student?",
      paragraphs: [
        "IB Mathematics is offered as Analysis and Approaches or Applications and Interpretation, each at Standard and Higher Level. The first is algebra, calculus and proof heavy, often expected for engineering and pure science. The second focuses on statistics, modelling and technology, and fits economics, business, psychology and some biology routes. A short diagnostic helps a student see which is realistic.",
        "Online Maths lessons rely on a shared whiteboard. The tutor solves a problem step by step, then sets a similar one and watches the student work, correcting as they go. Timed Paper 1 and Paper 2 practice follows, and errors are recorded in a log so the same slip does not recur. Students without access to specialist textbooks receive worked examples and links to free material.",
        "In the sciences, the tutor connects concepts to data. A student learns how a graph from an experiment relates to a formula, or how a reaction mechanism explains a pattern in the data booklet. For internal assessments the tutor coaches planning and analysis, always leaving the writing to the student.",
        "One-to-one teaching shines on data-response questions. The student reads a table, proposes a hypothesis and defends it, while the tutor probes the reasoning. That back-and-forth is difficult in a large batch and is exactly what IB papers reward.",
        "A Sandila student often works alone with few peers taking the same course. Brief message contact between lessons, within agreed hours, helps a student clear a doubt before it grows. The written note after each lesson gives parents a view of progress without needing to follow the content.",
      ],
    },
    {
      heading: "Should a Sandila student choose IGCSE Core or Extended, and which subjects?",
      paragraphs: [
        "Cambridge IGCSE offers most subjects at Core and Extended, while Edexcel uses Foundation and Higher. The lower tier caps the highest grade available, so a student who could achieve more is held back if entered there. Extended or Higher needs more effort, but a student who is comfortable with Class 9 and 10 CBSE or ICSE maths is often capable of it with focused preparation.",
        "Subject choice deserves care. A typical candidate takes English, Mathematics, two sciences and one elective such as Computer Science, Business Studies or Economics. A home language such as Hindi is a sensible addition for a student who may later study in India. Additional Mathematics is a strong signal of readiness for IB Maths Analysis or engineering.",
        "Practical skills need early planning. Cambridge science papers allow either a practical exam or an alternative-to-practical paper, and a Sandila student without a laboratory should confirm the route with the exam centre. Tutors teach alternative-to-practical skills, such as plotting graphs from supplied data and suggesting improvements to a method, through screen sharing.",
        "Timing is a factor too. Starting in Class 8 or 9 leaves room to build English writing and cover content steadily. Starting in Class 10 with a few months left calls for a leaner plan that targets the heaviest-weighted topics and exam technique.",
      ],
      bullets: [
        "Tier choice made together with the school or exam centre",
        "Additional Mathematics as preparation for IB or A Level Maths",
        "Alternative-to-practical skills taught for each science",
        "A home language subject if study in India is planned",
      ],
    },
    {
      heading: "Can online lessons run smoothly from Sandila?",
      paragraphs: [
        "They can, with a little preparation. Most homes in and around Sandila have either a broadband line or reliable 4G, and a live lesson uses modest data. The usual risks are power cuts, a weak signal in outlying villages and a single shared device. We suggest checking these before the trial lesson so that a technical problem does not spoil a first impression.",
        "A quiet corner, a laptop or tablet with a camera, and a notebook and pen are enough. A phone can serve as a backup for the call. A student who has only a phone can still attend, although a larger screen makes it far easier to read a whiteboard or a diagram.",
        "Because power is unpredictable in the summer heat, a charged laptop and a small inverter are a wise investment. If a cut or a storm ruins a lesson, we reschedule within a reasonable window so a bad evening does not turn into a missed week.",
        "Parents are welcome to sit in on the first lesson and to read the note afterwards. A child who knows the parent is informed usually treats the routine seriously, and the tutor learns what to reinforce between sessions.",
      ],
    },
  ],

  process: [
    { title: "Send a WhatsApp message or email", description: "Share the board, class, subjects and what is worrying the student. We reply with a short list of suitable tutors." },
    { title: "Take a free trial lesson", description: "A tutor teaches a real topic so you can judge fit before committing to anything." },
    { title: "Get the plan and rate in writing", description: "You see weekly timings, topics and the rate before you decide." },
    { title: "Start weekly lessons", description: "Live lessons run from your home at a fixed time, each followed by a written note." },
    { title: "Review and adjust", description: "After a few weeks we look at progress together and change the plan or the tutor if needed." },
  ],

  whyPoints: [
    { title: "Right tutor for the exact course", description: "IB Maths AA differs from AI, and Cambridge differs from Edexcel. We match on the specific syllabus." },
    { title: "Lesson times that respect the town", description: "Slots are set around trains, shift work and festival weeks, not a big-city routine." },
    { title: "Try before you pay", description: "A free trial lesson shows how the tutor teaches, with no obligation afterwards." },
    { title: "Parents stay informed", description: "A short written note after each session records what was covered and what to practise." },
    { title: "Tutor changes are easy", description: "If the fit is not right, we find another tutor and pass on the notes." },
    { title: "Coaching only, never ghost-writing", description: "Tutors explain and guide. They do not write IAs, Extended Essays, TOK essays or coursework." },
  ],

  faqs: [
    { question: "Can I find IB and IGCSE tutors in Sandila?", answer: "Yes, as online tutors. We could not confirm an IB or IGCSE school in Sandila, so IB Gram tutors teach live one-to-one by video from elsewhere in India, matched to the exact syllabus and level. Lessons run at a fixed weekly time on Indian Standard Time, and your child attends from home without any trip to Lucknow." },
    { question: "Will an IB tutor come to my home in Sandila?", answer: "No. Tutors do not visit homes in Sandila, because in-person home tuition runs only in Gurugram and parts of Delhi NCR. Our Sandila service is online home tuition: a private live lesson taken at home on a laptop. It keeps the focus of a home tutor and draws on specialists who would never have been available locally." },
    { question: "Is IGCSE home tuition possible in Sandila?", answer: "It is, in an online form. Cambridge and Edexcel IGCSE tutors teach Mathematics, Additional Mathematics, the sciences, English, Computer Science, Business Studies and Economics by video. You receive a free trial lesson, a written note after each session and a rate in writing before you commit to a booking." },
    { question: "Which IB or IGCSE schools are closest to Sandila?", answer: "We could not confirm any in Sandila or Hardoi. The nearest options are in Lucknow, about 50 km away, where Modern School runs the IB Primary Years Programme and a few schools, such as City Montessori School Cambridge Campus, offer Cambridge IGCSE. Please check each school's current offering directly before relying on it." },
    { question: "How much does IB or IGCSE tuition cost in Sandila?", answer: "We do not publish prices, and every rate is sent in writing before you book. The rate reflects the subject and level, the tutor's experience with the exact board, how many lessons you want each week and whether the lesson is private or shared. A free trial lesson comes first, so you can judge the teaching before any payment." },
    { question: "My child studies in Hindi medium. Can they move to IGCSE?", answer: "Yes, with some extra support in English writing. Students from Hindi-medium schools often understand Maths and science well but need practice with extended English answers and command words. A tutor builds paragraph structure, vocabulary and timed writing step by step, and most students settle in within a term of consistent practice." },
    { question: "Can IB or IGCSE help with JEE, NEET or UPTAC?", answer: "It can strengthen the subject base, but entrance exams have their own eligibility rules. IB and IGCSE students should confirm the accepted subject combinations and board recognition for JEE Main, NEET-UG and state counselling. Our tutors teach IB Physics, Chemistry, Biology and Mathematics in depth. Dedicated entrance coaching is usually a separate programme, and we can advise on overlap." },
    { question: "Do tutors write IAs, Extended Essays or TOK essays?", answer: "No. Tutors coach, explain and give feedback, but they never write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework. They can help choose a workable question, plan an investigation, structure an argument and read the marking criteria. The submitted work must be the student's own, and we will not compromise that." },
    { question: "What happens in the free trial lesson?", answer: "It is a real lesson, not a sales pitch. The tutor picks a topic your child is working on, teaches it live and asks questions to see how the student thinks. Afterwards you get a short note on what was covered and a suggested plan. There is no payment or commitment, and you can ask for another tutor if the style does not suit." },
    { question: "What if the power or internet fails mid-lesson?", answer: "Switch to a phone hotspot if possible and message the tutor. If the lesson cannot continue, we reschedule within a reasonable window. Power cuts are common in summer, so a charged laptop or a small inverter helps. A session lost to a technical fault is treated as a rescheduling matter, not a lost fee." },
    { question: "Which exam sessions can a Sandila student sit?", answer: "IB Diploma exams run in May and November, and IGCSE has May-June and October-November series. Registration normally goes through a school or approved exam centre, and private candidates must book early. Centres are usually in larger cities such as Lucknow or Delhi. We plan study timelines but cannot register students for exams." },
    { question: "Should a Sandila student take IB Maths AA or AI?", answer: "It depends on strengths and goals. Analysis and Approaches suits engineering, pure science and mathematics, while Applications and Interpretation suits economics, business, psychology and some biology routes. A short diagnostic lesson shows how each feels. The decision should also reflect what the target university requires, so check that first." },
    { question: "When should my child start IGCSE preparation?", answer: "Class 8 or 9 is ideal because it leaves time to build English writing and to cover the syllabus at a steady pace. A student starting in Class 10 can still do well with a focused plan. The tutor assesses how much ground is left in the first lesson and proposes a realistic schedule." },
    { question: "How do you plan around Eid, Diwali and the wedding season?", answer: "We build festival dates into the weekly schedule and move lessons ahead of time rather than cancel them. During winter and spring wedding seasons, weekend slots can be shifted to weekday evenings. If a lesson is missed, it is rescheduled, and the tutor adjusts the plan so key topics are covered before exams." },
    { question: "Can we change tutors if the match is wrong?", answer: "Yes, and without awkwardness. Tell us what is not working, whether pace, style or subject depth, and we arrange a different tutor. The new tutor receives the written notes from earlier lessons so your child does not start over. Many families settle on the right tutor during the trial lesson or soon after." },
    { question: "How do I start from Sandila?", answer: "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com with your child's class, board, subjects and main concern. We suggest a tutor, arrange a free trial at a convenient time, and send the plan and rate in writing. You decide after the trial whether to continue." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "The main site, with an overview of how our tutoring works." },
    { label: "Tutoring across India", href: "/india/", description: "Browse the Indian cities and towns where online IB and IGCSE tuition is available." },
    { label: "Tutoring in Gurgaon", href: "/gurgaon/", description: "The city where in-person home visits also run, with its own school guide." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB tutoring across all programmes." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "How Cambridge and Edexcel IGCSE tutoring is arranged." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What Diploma students study across the two years." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "A guide to Analysis and Approaches versus Applications and Interpretation." },
    { label: "Meet the tutors", href: "/tutors/", description: "Tutor profiles, all teaching online." },
    { label: "Contact us", href: "/contact-us/", description: "WhatsApp or email to book a free trial lesson." },
    { label: "Lucknow", href: "/lucknow/", description: "The nearest city with IB and IGCSE options and its confirmed schools." },
    { label: "Hardoi", href: "/hardoi/", description: "Online IB and IGCSE tutoring for the district headquarters." },
    { label: "Unnao", href: "/unnao/", description: "A nearby town on the same rail corridor with a similar schooling picture." },
  ],

  closingHeading: "Book one free lesson and judge the teaching for yourself",
  closingBody:
    "Share your child's class, board and the subject that feels hardest. We will suggest a tutor, set a trial lesson at a time that fits school and home, and follow with a written plan and rate. Reach us on WhatsApp at +91 7439 368 115 or at support@ibgram.com.",
};
