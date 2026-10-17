import type { CitySeoPage } from "../types";

/**
 * /unjha/ - IB and IGCSE tutoring page for Unjha, Mehsana district, North Gujarat. Online only.
 * No IB or Cambridge/Edexcel school in Unjha is confirmed, so stripSchools is empty and the
 * clusters are labelled Ahmedabad and Vadodara options reused from neighbouring pages.
 */
export const unjha: CitySeoPage = {
  slug: "unjha",
  countryName: "Unjha",
  countryNameLong: "Unjha, Mehsana district, North Gujarat",
  demonym: "Unjha",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Timetables that flex around the cumin and fennel arrival rush at the market yard, Navratri, Labh Pancham and the dry North Gujarat summer",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.8033, longitude: 72.3903 },
  wikipedia: "https://en.wikipedia.org/wiki/Unjha",
  alternateNames: ["Unja", "Unjha Mehsana", "Unjha spice market"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Unjha | Private Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Unjha, Gujarat's spice-trading town: private one-to-one online lessons for business families in Maths, Science, Accounts. Free trial.",
  h1: "IB and IGCSE Tutors and Private Tuition from Home in Unjha",
  heroEyebrow: "IB & IGCSE TUITION FOR UNJHA AND NORTH GUJARAT, ONLINE",
  heroSubtitle:
    "Unjha parents asking about private home tuition for an IB or IGCSE student are in practice choosing between a long road trip to Ahmedabad and a live lesson on a laptop. IB Gram offers the second: one-to-one online home tuition with a tutor who has taught the exact course, fitted around a household whose year follows the cumin and fennel market.",
  primaryKeyword: "IB and IGCSE tutors in Unjha",
  imageAltText: "A student from a trading family in Unjha studying IGCSE Accounting at home with an online tutor on screen",
  secondaryKeywords: [
    "IB tutor Unjha",
    "IGCSE tutor Unjha",
    "IB home tuition Unjha",
    "IGCSE home tuition Unjha",
    "IB private tuition Unjha",
    "IB Maths tutor Unjha",
    "IGCSE Maths tutor Unjha",
    "IB Physics tutor Unjha",
    "IB Chemistry tutor Unjha",
    "IB Biology tutor Unjha",
    "IB DP tutor Unjha",
    "IB MYP tutor Unjha",
    "IB PYP tutor Unjha",
    "IGCSE online tuition Unjha",
    "IB Business Management tutor Unjha",
    "IGCSE Accounting tutor Unjha",
    "online IB tutor North Gujarat",
    "IB tutor Mehsana Unjha",
    "Cambridge IGCSE tutor near Visnagar Sidhpur",
  ],

  heroTrustPoints: [
    "Tutors picked for the IB course and level, or IGCSE code, your child actually sits",
    "Lessons that begin once the market day has ended and homework is done",
    "An opening lesson without a fee, and a rate put in writing beforehand",
    "A business of its own, with no tie to any examining body or school",
  ],
  heroStats: [
    { value: "IST", label: "The same clock as Unjha" },
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards covered" },
    { value: "Free trial", label: "Try before you book" },
  ],

  intro: {
    heading: "In a town that prices spices for half the country, parents expect a clear account of what they are buying",
    paragraphs: [
      "Unjha, in the Mehsana district of North Gujarat, is best known for its agricultural produce market, widely described as one of the largest for cumin and fennel in India, and for its trade in isabgol and other spices. It is also the seat of the Umiya Mata temple, central to the Kadva Patidar community. Business here is commodity-minded, numerate and outward-looking, and many families have relatives in the United States, the United Kingdom or East Africa.",
      "That outlook shapes the questions we hear. Parents want to know what an international syllabus costs to prepare for, how it compares with GSEB and CBSE, and whether a child in Unjha can start now or must wait for a move. What we offer is a screen-based lesson: live, private and one to one, taken at home on a laptop while the tutor sits in another Indian city. Nobody travels to Unjha, because in-person home visits are run only in Gurugram and parts of Delhi NCR.",
      "Students tend to sort into three groups. One is a child in a Gujarati-medium or CBSE school who will enter an international school in Ahmedabad at Class 9 or 11. Another is a boarder or weekday commuter who is back in town for holidays. A third is a business family lining up study abroad, for whom IGCSE followed by A Level or the IB Diploma is the usual road.",
      "We are a separate business from the IB, Cambridge, Pearson Edexcel and every school. Tutors teach, coach and review work, and they never produce an Internal Assessment, Extended Essay or coursework on a student's behalf. The opening lesson costs nothing.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE",
      "Online lessons only; no tutor visits Unjha",
      "A strong match for accounts, economics and business subjects",
      "A free opening session and a written summary after each lesson",
    ],
  },

  programmesIntro:
    "Families in a commercial town like Unjha tend to read an IB programme as an investment with a timeline. The summaries below show what each stage asks of a student and where private lessons help most.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Pupils explore shared themes through questions they help frame, and close the stage with an Exhibition they organise themselves. A tutor at this age works on reading English aloud, comfortable number sense and keeping curiosity alive.",
      countryNote:
        "A child in Unjha who may later join a PYP school in Ahmedabad gains from a short weekly session in English, because the language at home is Gujarati and the classroom will not be.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Units link subjects through big concepts, marks follow published criteria, and each student completes a Personal Project. What counts is setting out reasoning in full sentences.",
      countryNote:
        "Students from GSEB schools are frequently quick at arithmetic yet unused to justifying each step in writing, a habit MYP practice builds before any change of school.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two years, six subjects, Theory of Knowledge, an Extended Essay and CAS, with predicted grades shaping university applications.",
      countryNote:
        "Diploma students linked to Unjha are nearly always boarders or city commuters, and lessons at home in the holidays keep the hardest courses moving.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses sit beside a career-focused study and a reflective project. Only a handful of schools in India deliver it.",
      countryNote:
        "No CP school near Unjha is known to us. Any support would be for Diploma-level subjects a student studies at a school elsewhere.",
    },
  ],

  subjectsIntro:
    "Accounts, economics and Mathematics are what Unjha families ask about first. IB and IGCSE offer all three, and we look for a tutor who has taught your child's exact course and level.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Calculus, algebra and proof, with regular time on questions that do not resemble the textbook example." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Statistics, models and finance with a calculator, a sensible fit for future commerce and business students." },
    { name: "IB Physics", levels: "HL / SL", description: "From kinematics to fields, with care over units, uncertainty and reading graphs." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, energetics and organic routes, with the data booklet treated as an everyday tool." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, inheritance, ecology and physiology, written in the wording a marker looks for." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and evaluation, with commodity prices, export trade and weather-driven harvests as natural examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies, costing and strategy, useful for students who grew up around a family enterprise." },
    { name: "IB Geography", levels: "HL / SL", description: "Resources, trade and change, using semi-arid North Gujarat farming as a worked case." },
    { name: "IB Chemistry for pharmaceutical and Ayurveda careers", levels: "HL", description: "A chemistry route for students curious about the pharmaceutical and herbal-products units around Unjha." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysis and essay technique for students who think first in Gujarati." },
    { name: "IB Gujarati A", levels: "HL / SL", description: "Gujarati literature, wherever the school offers the course." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Hindi as an acquired language: speaking, reading, writing." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and the programming project." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Questions about how claims become knowledge, building to an exhibition and a short essay." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Settling on a question that fits the word limit and sketching a method. Comment only." },
    { name: "IB MYP Mathematics and Sciences", levels: "MYP 1-5", description: "Investigations, reasoning set down in words and groundwork for the Diploma." },
  ],

  igcseSubjectsIntro:
    "Gujarat's international schools mostly teach Cambridge IGCSE, with a few on Edexcel. We ask which board and syllabus code applies before drawing up any plan.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics, with a view on which tier to enter." },
    { name: "IGCSE Additional Mathematics", levels: "Grade 10", description: "Calculus and functions as a runway into IB or A Level Mathematics." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Energy, forces, circuits and waves, alongside the practical-skills paper." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, reaction types, electrolysis and the start of organic work." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, human biology, inheritance and ecology." },
    { name: "IGCSE Accounting", levels: "Grade 9-10", description: "Ledgers, trial balances, final accounts and ratios, familiar ground for trading households." },
    { name: "IGCSE Business Studies", levels: "Grade 9-10", description: "Enterprise, finance and marketing, with case-style questions." },
    { name: "IGCSE Economics", levels: "Grade 9-10", description: "Markets, prices and policy, with data-response practice." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Computational logic, algorithms and pseudocode." },
    { name: "IGCSE English First and Second Language", levels: "Grade 9-10", description: "Directed writing, comprehension and speaking for students whose first language is Gujarati." },
    { name: "IGCSE Gujarati and Hindi as second languages", levels: "Grade 9-10", description: "Reading and composition in a home language, if the school enters candidates." },
  ],

  regionsTitle: "Unjha and the nearby places we teach online",
  regionsIntro:
    "A family near the market yard and a family on a farm reach the same tutors. The notes below describe how daily life in each area shapes lesson timing.",
  regions: [
    { name: "APMC market yard area", note: "The heart of the town's commodity trade, where brokerage, warehousing and export families keep long working days in season." },
    { name: "Umiya Mata temple area", note: "A well-known pilgrimage and community centre with its own crowds during festivals and fairs." },
    { name: "Station Road", note: "The main commercial corridor, with shops and small offices whose households plan study around closing time." },
    { name: "Ayurvedic and spice-processing belt", note: "A patch of processing units, where managers' and owners' families value a flexible evening slot." },
    { name: "Residential societies towards Mehsana", note: "Newer housing with service and business families who often ask about Ahmedabad schools." },
    { name: "Kahoda and surrounding villages", note: "Farming villages that supply the market, where parents are busiest at harvest and sowing." },
    { name: "Dasaj", note: "A nearby village that feeds the Unjha market, whose households come into town for school and coaching." },
    { name: "Visnagar side", note: "The road towards Visnagar, used by families who also consider schools and coaching there." },
    { name: "Sidhpur and Mehsana corridor", note: "The highway towards Sidhpur and Mehsana, a common route for families planning a move or boarding." },
  ],

  schoolClusters: [
    {
      city: "Unjha and its neighbourhood",
      note: "No IB or Cambridge / Edexcel IGCSE school is confirmed for Unjha, Visnagar or Sidhpur. Schools nearby follow GSEB, CBSE or ICSE.",
      schools: [],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "Roughly 100 km south and the usual destination for North Gujarat families wanting an international school, often through boarding or a weekday stay.",
      schools: ["Calorx Olive International School", "Ahmedabad International School", "Mahatma Gandhi International School", "The Riverside School"],
    },
    {
      city: "Nearby: Vadodara",
      note: "A longer trip, but with established international options that some families with central Gujarat ties prefer.",
      schools: ["Navrachana International School", "VIBGYOR High School, Padra Road"],
    },
  ],
  schoolDisclaimer:
    "The schools above are listed solely because North Gujarat parents sometimes consider them. IB Gram trades independently, answers to none of these schools and to no examining body, and has not verified an IB or IGCSE school inside Unjha. Take admissions and syllabus questions to the school itself.",

  modesIntro:
    "Every lesson in Unjha is online and live. The three formats below cover what local families usually need.",
  modes: [
    {
      title: "Steady evening tuition at home",
      description:
        "A fixed hour each week with one tutor chosen for the syllabus. It is private teaching from your own table: no drive to Ahmedabad, and no reliance on local teachers who have never opened the course guide.",
      bullets: [
        "One tutor for each subject and level",
        "Shared whiteboard and a summary after the lesson",
        "Hours planned around yard rush and festivals",
        "No tutor visits homes in Unjha",
      ],
    },
    {
      title: "Getting ready for an international school",
      description:
        "For a student about to start at an IB or IGCSE school, a run of weekly lessons builds the English writing, subject terms and reasoning habits that the new classroom assumes.",
      bullets: [
        "A first session that maps strengths and gaps",
        "English for Maths, Science and Accounts answers",
        "Specimen questions in the target syllabus",
        "Check-ins during the first term",
      ],
    },
    {
      title: "Intensive blocks in breaks and before exams",
      description:
        "Boarders home for Diwali or the summer can fit several lessons a week into the break, and mocks or the May and November series call for extra hours.",
      bullets: [
        "Alternate-day sessions through vacations",
        "Timed papers with marking-scheme walk-throughs",
        "A revision planner parents can follow",
        "Back to one weekly slot when the rush passes",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Unjha, or do students travel?",
      paragraphs: [
        "We found no IB or Cambridge / Edexcel IGCSE school in Unjha, nor in nearby Visnagar or Sidhpur. Teaching here follows the Gujarat board, CBSE or ICSE. Searches of school directories, the IB finder and Cambridge's lists brought up no authorised international school in the area, and we would prefer to say so than print a name that sends a parent down the highway for nothing.",
        "The nearest established options are in Ahmedabad, about 100 km away. Calorx Olive International School, Ahmedabad International School, Mahatma Gandhi International School and The Riverside School appear on our Ahmedabad page. Vadodara lies further, with Navrachana International School and VIBGYOR High School on Padra Road. For most Unjha households the working answers are boarding, a weekday flat in the city or relocating altogether.",
        "People who write to us sit in one of three positions. Some run brokerage or processing firms and want a child ready for study overseas. Some are doctors, teachers or officials posted to the region. Others already have a child in an Ahmedabad classroom who needs help in the holidays. A trial lesson gives each of them a concrete sense of what the syllabus demands.",
        "A tutor backs up the school route, and does not stand in for attending an authorised school.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Unjha, Visnagar or Sidhpur",
        "Ahmedabad, about 100 km off, holds the nearest options",
        "Enquiries come from business owners, posted professionals and boarders",
        "A trial lesson tests suitability before any move",
      ],
    },
    {
      heading: "How do GSEB, CBSE and IB or IGCSE differ for an Unjha student?",
      paragraphs: [
        "Most Unjha children know the Gujarat board. Its teaching leans on Gujarati, its papers reward accurate recall, and its road to state-level professional entrances is well mapped. CBSE, offered by some private schools, follows NCERT books and suits the national entrance tests. Either gives a clear local route.",
        "IB and IGCSE operate on different principles. English is the language of instruction, and marks flow to students who explain, apply and weigh evidence. Someone who is quick with numbers can still drop marks on an IGCSE Mathematics paper because the steps are missing, or on IB Economics because a diagram has unlabelled axes. The adjustment is one of habit, and entirely achievable.",
        "Depth differs too. The state syllabus sweeps across many topics briskly, whereas an IB course picks fewer and pushes further into application. Students arriving from GSEB commonly find the first weeks easier than expected and the middle of the course tougher.",
        "The table below sets the three side by side for an Unjha household.",
      ],
      table: {
        caption: "GSEB, CBSE and IB or IGCSE from an Unjha family's viewpoint",
        columns: ["Feature", "GSEB", "CBSE", "IB / IGCSE"],
        rows: [
          ["Language of instruction", "Mainly Gujarati, English taught as a subject", "English or Hindi", "English, with Gujarati or Hindi as a language option"],
          ["What the paper rewards", "Accurate recall and application", "Recall and application", "Argument, evidence and evaluation"],
          ["Presence near Unjha", "Everywhere", "A few private schools", "None confirmed; Ahmedabad is the nearest"],
          ["Path into Indian universities", "Direct, state entrances included", "Direct", "Equivalence certificate and eligibility checks needed"],
          ["Moving between schools", "Smooth inside Gujarat", "Smooth across India", "Smooth between authorised schools worldwide"],
        ],
      },
    },
    {
      heading: "How much should a family budget for IB or IGCSE tuition in Unjha?",
      paragraphs: [
        "A single honest figure does not exist, since the rate moves with the programme and level, the subject, how long each lesson runs, how often you want it and how much experience the tutor has with your syllabus. A senior IB Mathematics HL specialist is priced differently from a tutor for Class 7 MYP Science. That is why we keep no public price list.",
        "What can be said is where costs fall away. Teaching happens on screen, so there is no fuel, no bus fare and no hours lost on the road south. For a household that weighs every rupee carefully, that is often the deciding point. Choice also widens, because a tutor in any Indian city can take the class.",
        "After a brief WhatsApp exchange we send a written rate before you book the opening lesson. If it does not suit, nothing is owed. Later, hours can be cut, paused for the cumin arrival weeks or a wedding, or moved to a different tutor without charge.",
        "Many families begin with a single weekly lesson in the hardest subject, review after a month, and add hours only ahead of mocks. Spending then tracks need and not worry.",
      ],
      bullets: [
        "Programme, level, subject, lesson length and frequency set the rate",
        "No fuel, bus fare or highway hours",
        "A rate in writing before the free trial",
        "Cut, pause or swap tutor whenever you wish",
      ],
    },
    {
      heading: "Should an Unjha student pick online tuition, a local tutor or coaching in Mehsana?",
      paragraphs: [
        "Unjha and Mehsana have capable teachers and coaching classes for GSEB, CBSE, JEE, NEET and commerce papers, and for those exams they make sense. For IB or IGCSE they fit less well, since question styles and mark schemes are strange to teachers who have not prepared candidates for them.",
        "An IB Gram tutor is chosen for time spent on the exact course. Sessions draw on past papers from the right board, show what examiners reward and close with a written summary. Because it is one to one, the tutor can stop for a student still absorbing academic English, something a full batch cannot do.",
        "Self-study from videos suits revision but supplies no feedback. It will not say that an accounts layout is costing marks or that an essay lacks a line of argument.",
        "The table lays out each route.",
      ],
      table: {
        caption: "Ways an IB or IGCSE student in Unjha can study",
        columns: ["Route", "Knows the IB or IGCSE course", "Feedback", "Practical fit for Unjha"],
        rows: [
          ["Online one-to-one tutor", "Yes, chosen for the syllabus", "Personal, each lesson", "Requires a home connection; no travelling"],
          ["Local private teacher", "Seldom, mostly GSEB or CBSE", "Personal", "Close at hand but thin on international papers"],
          ["Coaching in Mehsana or Ahmedabad", "No, designed for other exams", "Shared across a batch", "Travel plus fixed batch timings"],
          ["Self-study with videos", "Depends on the source", "None unless someone reviews", "Flexible but unsupported"],
        ],
      },
    },
    {
      heading: "How do the cumin season, Navratri and the dry summer shape study in Unjha?",
      paragraphs: [
        "The market sets Unjha's year. Cumin and fennel are harvested early in the calendar year, and the yard fills with arrivals from roughly February into April. Brokerage and warehouse families work long days then, and some children help out or go unsupervised. Lessons in those weeks work better early in the evening, and we plan for that.",
        "Festivals are equally firm. Navratri brings nine nights of garba, Uttarayan in mid-January fills the sky with kites, and Labh Pancham, when traders reopen after Diwali, is a fixed marker in the business year. Students are not at their sharpest on such days, so lessons are lighter or moved.",
        "Climate matters as well. Summers in North Gujarat are hot and dry, which makes late-evening study kinder than afternoons, and winters are cool enough for long sittings. Monsoon rain is milder than in Saurashtra but can still slow roads.",
        "The table ties the local year to the international exam calendar.",
      ],
      table: {
        caption: "Unjha's market, festival and weather year set against IB and IGCSE dates",
        columns: ["Months", "What is happening locally", "What it means for study"],
        rows: [
          ["January to March", "Uttarayan, then cumin and fennel harvest and first arrivals", "Mock papers in many schools; Cambridge February-March series"],
          ["April to June", "Yard rush eases, heat builds, weddings", "IB May and Cambridge May-June sessions"],
          ["July to September", "Rain, schools reopen", "New school year; IB results come in July"],
          ["October to December", "Navratri, Diwali, Labh Pancham, cooler days", "IB November session; Cambridge and Edexcel autumn papers"],
        ],
      },
    },
    {
      heading: "What can an Unjha student do after IB or IGCSE?",
      paragraphs: [
        "After IGCSE and then the IB Diploma or A Levels, doors open in India and abroad. The Association of Indian Universities issues equivalence certificates for overseas-style qualifications, and CUET-UG allows international-board students to apply to central universities. Chartered accountancy, law, architecture and medicine publish their own eligibility notes for these boards, which should be read afresh each year.",
        "Inside Gujarat, North Gujarat students often consider CEPT University, Nirma University and Ahmedabad University, or IIT Gandhinagar, Gujarat University and Hemchandracharya North Gujarat University in Patan. Each sets its own terms for international-board applicants.",
        "Study abroad comes naturally to many Unjha households with cousins in the United States, the United Kingdom or East Africa. The IB Diploma and strong IGCSE results feed straight into those applications, and students used to independent research settle in faster.",
        "Some young people go on to join family trading or processing firms after a commerce or food-technology degree. Solid Mathematics, accounts and English help there too. Our tutors help with grades and technique, and never write an application.",
      ],
      bullets: [
        "Equivalence certificates and CUET-UG open central universities",
        "CEPT, Nirma, Ahmedabad University and IIT Gandhinagar are common targets",
        "Professional courses have separate rules for international boards",
        "Overseas study is a familiar second route",
      ],
    },
    {
      heading: "How do IB Business, Economics and Accounts-style subjects work?",
      paragraphs: [
        "Commerce is a natural strength for Unjha students. IB Business Management covers organisations, people, finance, marketing and operations, and is examined through case studies and numeric tools such as break-even, cash flow and investment appraisal. The internal assessment is a research project on a real organisation, and a student with family-business experience usually has useful material.",
        "IB Economics splits into microeconomics, macroeconomics and the global economy. Diagrams are central: supply and demand, elasticity, exchange rates, trade. A student should learn to draw clean, labelled diagrams and to evaluate them in prose, not merely reproduce them. Commodity price swings, export duties and monsoon effects on harvests make good local examples for essays.",
        "IGCSE Accounting stands on its own with ledgers, trial balances, final accounts, depreciation and ratios, and layout matters because examiners reward every line. IGCSE Business Studies and Economics offer a lighter route for students wanting commerce without the full accounting load.",
        "For any internal assessment, a tutor can talk through method and structure, and the student writes the submission.",
      ],
      bullets: [
        "Practise reading cases and using numeric tools",
        "Draw and label diagrams cleanly, then evaluate in writing",
        "Keep accounts layouts exact",
        "Take feedback on assessments without handing over authorship",
      ],
    },
    {
      heading: "What do IB Maths and the sciences ask, and which IGCSE tier fits?",
      paragraphs: [
        "IB Mathematics comes as Analysis and Approaches for students who enjoy algebra and calculus, and Applications and Interpretation for those who prefer data and modelling. Both want explanation along with answers, and both expect a graphic display calculator. Students from GSEB are usually confident with calculation and need work on written reasoning and on technology.",
        "IB Physics, Chemistry and Biology pair core content with an Internal Assessment. Physics often puts a familiar law in an unfamiliar scene, Chemistry asks for exact terms and calculation layout, and Biology rewards exact vocabulary. Learning the English phrase for an idea a student already holds in Gujarati is one of the quickest gains.",
        "At IGCSE, most subjects are entered at Core or Extended. The Core paper keeps to the basics and stops at a lower top grade, whereas Extended reaches further and can earn A*. A student heading for IB Mathematics, A Level science or engineering should usually sit Extended.",
        "Edexcel specifications differ in layout from Cambridge ones, so the tutor checks the board before choosing materials.",
      ],
    },
  ],

  process: [
    { title: "Write to us", description: "Send the class, board, subject and any Ahmedabad school you are weighing through WhatsApp." },
    { title: "See who we suggest", description: "You get the profile of a tutor who has taught your exact syllabus, with a rate in writing." },
    { title: "Sit the opening lesson", description: "Meet the tutor on screen and check the home connection, all without paying." },
    { title: "Set the weekly beat", description: "Choose an evening that respects market rush, festivals and school tests." },
    { title: "Look back monthly", description: "Read the lesson summaries, tune the hours and swap tutor if the fit is poor." },
  ],

  whyPoints: [
    { title: "Course-specific tutors", description: "Matching is by syllabus code and level, beyond the bare subject name." },
    { title: "Numbers and words together", description: "Tutors add the written reasoning that commerce-minded students sometimes skip." },
    { title: "No highway hours", description: "Lessons happen at your own table, saving the trip to Ahmedabad." },
    { title: "Progress you can read", description: "A brief summary lands after every session." },
    { title: "Planned around the market year", description: "Arrival rush, Navratri and Labh Pancham are built into the timetable." },
    { title: "Plain limits", description: "Teaching and feedback only; no assessed work written for a student, and no promised grades." },
  ],

  tutorsIntro:
    "Tutors teach from several Indian cities on Indian Standard Time, the same clock as Unjha. Each has worked with the syllabus on offer, and assignment follows course and level.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Unjha?",
      answer:
        "Not one we could confirm. Unjha, Visnagar and Sidhpur schools follow GSEB, CBSE or ICSE, and the IB and Cambridge school lists showed no authorised international school there. The nearest real options sit in Ahmedabad, around 100 km off. Online lessons let a student get ready for that step, or stay on course from home. Please check any school's status yourself.",
    },
    {
      question: "Will a tutor visit my home in Unjha?",
      answer:
        "No, tutors never travel to Unjha, and our in-person home lessons exist only in Gurugram and parts of Delhi NCR. The substitute is online home tuition: a private lesson at your own desk, live on a laptop, led by a specialist in another city. You keep one-to-one attention and gain tutors far beyond North Gujarat.",
    },
    {
      question: "Can a GSEB student switch to IGCSE or IB?",
      answer:
        "Yes, given preparation time. The real gap is usually reasoning in English, not the content itself. We map strengths in the first session, build subject vocabulary and rehearse short structured answers. Many families begin six to twelve months before a change of school. Those eyeing A Level or IB should aim for the Extended tier where a subject offers one.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Unjha?",
      answer:
        "No price list is published. The rate turns on programme and level, subject, lesson length, weekly frequency and tutor experience, and because the classroom is a screen there is no travel element. A written figure reaches you before the free trial, and you may cut back, pause or stop later without any penalty.",
    },
    {
      question: "Do you teach IGCSE Accounting and IB Business Management?",
      answer:
        "Yes. IGCSE Accounting covers ledgers, trial balances, final accounts and ratios, while IB Business Management and Economics cover costing, strategy, markets and policy. Students who watch a family business at work usually take to the numeric side fast. Tutors concentrate on exam layout and on the analysis that earns the remaining marks.",
    },
    {
      question: "Will a tutor help with the IB Internal Assessment or Extended Essay?",
      answer:
        "A tutor can advise, but cannot write a word. Help covers picking a question, planning method, talking through analysis and commenting on structure. The student authors every sentence. IB Gram tutors do not produce IAs, Extended Essays, TOK essays or coursework, and a request to do so ends the arrangement.",
    },
    {
      question: "Can explanations include some Gujarati or Hindi?",
      answer:
        "Sometimes. Papers are set in English for most subjects, so teaching is mainly in English, although many tutors can unpack a hard idea in Hindi before rebuilding it in English. Gujarati explanation depends on the tutor. The language itself can be studied as IB Gujarati A or as an IGCSE second language where the school enters candidates.",
    },
    {
      question: "Which exam sessions apply, and when should we begin?",
      answer:
        "IB Diploma exams fall in May and November. Cambridge IGCSE runs February and March, May and June, and October and November, and Edexcel offers January, May and June, and November. Begin content revision six months out and turn to timed papers for the last two months. Your school confirms the dates for your child.",
    },
    {
      question: "Can lessons pause while cumin and fennel arrive at the yard?",
      answer:
        "Yes. Plenty of Unjha households are at their busiest then, so we can move lessons earlier, cut hours or pause for a few weeks. Tutors leave notes so nothing is lost. The exam calendar still counts, so keep any pause clear of mock and exam months.",
    },
    {
      question: "What separates IGCSE Core from Extended?",
      answer:
        "Core keeps to the essentials and limits the highest grade available, whereas Extended adds content and opens the full range up to A*. Students aiming at IB Mathematics, A Level science or engineering should normally enter Extended. An early look at current marks lets us recommend the right tier for the goal.",
    },
    {
      question: "Do you teach both Mathematics AA and AI?",
      answer:
        "Yes, at HL and SL. Analysis and Approaches leans towards engineering, physics and economics, while Applications and Interpretation leans towards business, design and social science. Ask the school what it offers. One trial lesson on a typical problem shows which style your child takes to.",
    },
    {
      question: "If we move to Ahmedabad, can the same tutor continue?",
      answer:
        "Yes. The tutor, slot and notes all carry over, since lessons follow the student. If the new school uses a different board, the tutor reshapes the plan in a session or two, and you may request a fresh match. Families value that continuity through a big change.",
    },
    {
      question: "Will power cuts or monsoon storms disrupt online lessons?",
      answer:
        "Now and then. Summer afternoons and storms can knock out power or mobile signal. Keep a charged laptop and a phone hotspot close, and tell the tutor early when a storm is forecast. A missed lesson is rebooked inside the week, and notes can follow afterwards.",
    },
    {
      question: "How do I start, and is the opening lesson free?",
      answer:
        "The opening lesson is free. Send a WhatsApp message to +91 7439 368 115, or write to support@ibgram.com, with the class, board and subject. You receive a tutor profile and a written rate, then a trial at a time that suits your household. If the fit is wrong, another tutor is found.",
    },
    {
      question: "Is IB Gram tied to any school or board?",
      answer:
        "No. IB Gram is independent and is not affiliated with or endorsed by the International Baccalaureate, Cambridge, Pearson Edexcel or any school on this page. School names appear only to show where North Gujarat families sometimes look. Confirm admissions, fees and curricula with the school directly.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The national overview for students in every state." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB support from the primary years to the Diploma." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE, subject by subject." },
    { label: "IB Diploma Programme tuition", href: "/programmes/dp/", description: "How Diploma tutoring covers six subjects and the core." },
    { label: "IB Primary Years Programme tuition", href: "/programmes/pyp/", description: "English and number support for PYP children." },
    { label: "IB Mathematics tuition", href: "/courses/ib/mathematics/", description: "The two Mathematics courses explained." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles showing syllabus experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us to book the free trial." },
    { label: "IB and IGCSE tutors in Mahesana", href: "/mahesana/", description: "The district headquarters, not far from Unjha." },
    { label: "IB and IGCSE tutors in Visnagar", href: "/visnagar/", description: "A neighbouring North Gujarat town." },
    { label: "IB and IGCSE tutors in Ahmedabad", href: "/ahmedabad/", description: "The closest major city with IB and IGCSE schools." },
  ],

  closingHeading: "Try one free lesson from your own table in Unjha",
  closingBody:
    "Give us the class, the board and the subject that nags at you. A matched tutor, a written rate and a trial slot after the market day will follow. WhatsApp +91 7439 368 115 or email support@ibgram.com, and leave the Ahmedabad highway out of it.",
};
