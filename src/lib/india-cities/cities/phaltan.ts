import type { CitySeoPage } from "../types";

/**
 * /phaltan/ - IB and IGCSE tutoring page for Phaltan, Satara district, Maharashtra. No school in Phaltan is
 * confirmed to teach IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and clusters reuse Pune and Atigre
 * names from verified neighbouring pages. All lessons online.
 */
export const phaltan: CitySeoPage = {
  slug: "phaltan",
  countryName: "Phaltan",
  countryNameLong: "Phaltan, Maharashtra",
  demonym: "Phaltan",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings and Sunday mornings, kept clear of the Ganeshotsav fortnight, the April to May heat and the SSC and HSC weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 17.9910, longitude: 74.4340 },
  wikipedia: "https://en.wikipedia.org/wiki/Phaltan",
  alternateNames: ["Phaltan city", "Phaltan Satara", "Phaltan Maharashtra"],
  stripSchools: [],

  title: "Phaltan IB & IGCSE Tutors | Private Home Tuition Online",
  metaDescription:
    "Phaltan families can book IB and IGCSE private tuition online, one to one from home, with tutors timed around the heat and Ganeshotsav. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Phaltan",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR PHALTAN STUDENTS",
  heroSubtitle:
    "Private tuition from home for students in Phaltan who are studying IB or IGCSE, or preparing for it: a live, one-to-one lesson on a laptop with a tutor who has already taught your exact syllabus. The town is a long road trip from Pune and Baramati, so the lesson comes to the desk at home instead of the child going to the lesson.",
  primaryKeyword: "IB and IGCSE tutors in Phaltan",
  imageAltText: "A Phaltan student at a home desk in a live one-to-one online IB Mathematics lesson with a tutor",
  secondaryKeywords: [
    "IB tutor Phaltan",
    "IGCSE tutor Phaltan",
    "IB home tuition Phaltan",
    "IGCSE home tuition Phaltan",
    "IB private tuition Phaltan",
    "IB Maths tutor Phaltan",
    "IGCSE Maths tutor Phaltan",
    "IB Physics tutor Phaltan",
    "IB Chemistry tutor Phaltan",
    "IB Biology tutor Phaltan",
    "IB DP tutor Phaltan",
    "IB MYP tutor Phaltan",
    "IB PYP tutor Phaltan",
    "IGCSE online tuition Phaltan",
    "IB tutor Mangalwar Peth Phaltan",
    "IGCSE tutor Sakharwadi Phaltan",
    "online IB tutor Phaltan Satara district",
    "Cambridge IGCSE tutor Phaltan",
    "Edexcel IGCSE tutor Phaltan",
  ],

  heroTrustPoints: [
    "Tutors matched on the exact IB subject or IGCSE syllabus code, not just the subject name",
    "Every lesson is online; tutors do not visit homes in Phaltan, and in-person tuition exists only in Gurugram and parts of Delhi NCR",
    "A short written note after each lesson that a parent can read in two minutes",
    "A free trial lesson first, and a rate put in writing before you book",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Every IB stage covered" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "IST", label: "Evening and Sunday slots" },
    { value: "Free trial", label: "Watch a real lesson first" },
  ],

  intro: {
    heading: "Online IB and IGCSE tuition for a town on the Nira river",
    paragraphs: [
      "Phaltan is a compact town in the north-east corner of Satara district, with sugar factories in the tehsil, a large engine plant on its outskirts and a long history as a small princely state. A family here who searches for IB or IGCSE home tuition usually has a specific reason: an engineer posted to the industrial site, a child who will join a Pune school next year, or parents planning university abroad and wanting an international transcript.",
      "We could not confirm a school inside Phaltan that teaches the IB Diploma, the Middle Years or Primary Years Programme, or a Cambridge or Pearson Edexcel IGCSE. Local schools run the Maharashtra State Board, CBSE or ICSE. For that reason the tutoring we offer here is online, live and private. A tutor does not come to your house in Phaltan; home visits run only in Gurugram and parts of Delhi NCR.",
      "The arrangement has one real advantage. Teachers with years of IB and IGCSE classroom experience are concentrated in cities such as Pune, Bengaluru and Delhi, and an online lesson lets a Phaltan student reach them without the 110 km journey to Pune. The child sits at home with a laptop, a notebook and a shared digital whiteboard, and the tutor marks the working as it appears.",
      "IB Gram is an independent service. It has no connection with the International Baccalaureate, Cambridge, Pearson or any school named on this page. Tutors coach and give feedback; they never write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Live one-to-one lessons in English, taught from India in IST",
      "A free trial lesson before any fee is discussed",
      "No tutor visits in Phaltan: home tuition here means online lessons taken at home",
    ],
  },

  programmesIntro:
    "Phaltan students usually meet an international programme at a turning point rather than from the first day of school, so tutoring here tends to be aimed at something concrete, such as an admission interview, a change of term or a run of mock papers. This is what each stage asks of the child.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "Children explore units built around big ideas, such as how communities work or how materials change, and they present what they found in a final Exhibition. Nothing is sat as an external paper. A tutor's work is to strengthen the tools that make inquiry possible: fluent reading, neat writing, comfortable number sense and the confidence to ask why.",
      countryNote:
        "For a Phaltan family, PYP tutoring usually supports a child who is about to join a Pune school, and lessons are short, playful and held in a quiet evening hour.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are marked against published criteria instead of a single total, and projects, lab reports and reflective writing carry real weight. A child from a state-board classroom may know the textbook thoroughly yet find it unfamiliar to justify a choice or evaluate a method on paper. Tutoring focuses on exactly that translation.",
      countryNote:
        "Phaltan students preparing for an MYP seat elsewhere usually need help with extended English writing, scientific investigation and Maths problems set in context.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard Level, are studied beside the core: Theory of Knowledge, the Extended Essay and CAS. The maximum score is 45, and the written papers are held in the May or November session. Internal assessments add coursework marks, so the workload is spread across both years.",
      countryNote:
        "A Phaltan Diploma student is most often boarding or living in Pune and uses online lessons on weekends and holidays, or is preparing to enrol after Class 10.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP combines at least two Diploma courses with a career-related study and a reflective core of service learning and language development. Few Indian schools run it. The Diploma courses inside a CP are taught and examined to the same standard as in the full Diploma.",
      countryNote:
        "We rarely receive CP enquiries from Phaltan; when one arrives, the Diploma subjects are handled exactly as they would be for any DP student.",
    },
  ],

  subjectsIntro:
    "Tell us the subject, the level and the exam session and we look for someone who has taught precisely that. IB Maths alone splits into two courses with two levels each, and a tutor who is excellent at Applications and Interpretation Standard Level may not be the right person for Analysis and Approaches Higher Level.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof. Students who come from the Maharashtra syllabus usually find the content familiar and the written justification new." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology, practised on real data sets with a graphing calculator in hand." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves, fields and modern physics, with steady practice in uncertainties and data analysis." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics, kinetics, equilibrium and organic chemistry, using the data booklet from the very first class." },
    { name: "IB Biology", levels: "HL / SL", description: "A wide syllabus turned into a routine of recall, application and command-term answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and evaluation, with examples that can draw on sugar cooperatives, drought and water use in the Nira basin." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, strategy tools and the internal research project, using family-firm and cooperative examples." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen texts and comparative essays, useful for students who have studied in Marathi medium." },
    { name: "IB Marathi B", levels: "HL / SL", description: "Comprehension, writing and oral practice for students who already speak the language at home." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Reading, written tasks and the individual oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming logic and a staged internal project." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking with a home-grown case: a drought-prone rain-shadow district that depends on a river dam." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, resource management and fieldwork method." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, research methods and structured essay answers." },
  ],

  igcseSubjectsIntro:
    "IGCSE is offered by Cambridge and by Pearson Edexcel, and the two boards differ in paper structure, tiers and the wording of questions. Before any lesson begins we ask which board and which code the child will sit. The subjects below are the ones Phaltan families ask about most.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths with a calculator and a non-calculator paper; Extended candidates spend long hours on algebra, trigonometry and graphs." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "For confident mathematicians, bringing in calculus and functions ahead of the Diploma." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Two equally weighted papers with method marks throughout." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy, electricity and waves, including the alternative to practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, reaction rates, the periodic table and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, human biology, plants and ecosystems." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing and speaking for students whose first language is Marathi or Hindi." },
    { name: "IGCSE First Language English 0500", levels: "Grade 9-10", description: "Directed writing, composition and close reading." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming logic, data representation and networks." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business activity, marketing, finance and case-based questions." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Introductory economics with data-response questions." },
  ],

  regionsTitle: "Phaltan localities and neighbouring towns our tutors reach online",
  regionsIntro:
    "An online lesson looks identical from a lane in the old town or a farmhouse on the Baramati road. What differs is the routine of the household, so the notes below describe how families in each part of Phaltan usually arrange a study evening.",
  regions: [
    { name: "Mangalwar Peth", note: "A dense, older part of the town near the main market; many families run shops, so lessons often start after the shutters come down." },
    { name: "Budhwar Peth and Ravivar Peth", note: "Traditional peth neighbourhoods of narrow lanes and close-set homes; a headset helps keep a lesson quiet when several generations share a house." },
    { name: "Sakharwadi", note: "Built around the sugar industry, with staff housing; the crushing season from about November to March shapes parents' shift hours and therefore the lesson slot." },
    { name: "Laxmi Nagar", note: "A residential extension popular with newer families and salaried households, where a fixed weekday evening is easy to keep." },
    { name: "Vidyanagar", note: "A neighbourhood close to several schools and colleges; children here often do school, a state-board class and homework before a late lesson." },
    { name: "Jinti Naka", note: "A junction area on the road out towards Pandharpur and Satara; traffic noise is worth planning around when choosing the room for a call." },
    { name: "Ganesh Nagar and Shivaji Nagar", note: "Growing residential areas on the edge of town, where broadband quality varies street by street and a mobile hotspot makes a useful fallback." },
    { name: "Lonand", note: "A railway junction town to the west; families there usually look to Pune for schooling, so online tutoring saves a long commute." },
    { name: "Baramati and Malshiras", note: "Larger towns across the district border with their own education culture; some students link up from there for subjects a local tutor cannot cover." },
    { name: "Jinti and Tirakwadi", note: "Village belts around the town where students travel in for school; afternoons are short, so lessons lean towards the evening." },
  ],

  schoolDisclaimer:
    "Names appear here only to show where an international-board classroom exists within reach of Phaltan. IB Gram has no agreement with any of these schools, nor with the IB, Cambridge or Pearson, and cannot vouch for admissions. Please check current programmes, fees and seats with each school directly.",
  schoolClusters: [
    {
      city: "Local: Phaltan",
      note: "We could not confirm any school in Phaltan that teaches the IB or a Cambridge or Edexcel IGCSE, so none is listed. Options here are the Maharashtra State Board, CBSE and ICSE, and local choice for an international board is limited.",
      schools: [],
    },
    {
      city: "Nearby: Pune",
      note: "About 110 km away by road, Pune holds the nearest real concentration of IB and IGCSE schools and is where most Phaltan families who switch boards end up.",
      schools: ["Mahindra International School", "Symbiosis International School", "Indus International School, Pune"],
    },
    {
      city: "Nearby: Pune, Wagholi side",
      note: "On the eastern edge of Pune, a cluster of newer campuses sits along the Nagar road, which some families prefer for boarding or easy highway access.",
      schools: ["CP Goenka International School, Wagholi", "Victorious Kidss Educares"],
    },
    {
      city: "Nearby: Atigre, Kolhapur district",
      note: "A campus south on the Kolhapur side, reached by the Pune-Bengaluru highway; it appears on our Sangli page as an international-board option.",
      schools: ["Sanjay Ghodawat International School, Atigre"],
    },
  ],

  modesIntro:
    "Every Phaltan student learns online. What the family chooses is the tempo: one steady weekly lesson, a fuller plan with written notes and reviews, or a tight run of sessions before a paper.",
  modes: [
    {
      title: "One steady weekly lesson",
      description:
        "A fixed slot with one tutor. The student arrives with questions and finished exercises, the tutor teaches the next idea and corrects mistakes as they appear.",
      bullets: [
        "A tutor chosen for your subject, level and board",
        "Typically one hour a week",
        "Working written live on a shared board",
        "Suits IGCSE, MYP and the first year of DP",
      ],
    },
    {
      title: "Term plan with notes and reviews",
      description:
        "The tutor maps the term, writes a summary after every class and meets you every few weeks to reshuffle the topic order if school has moved faster or slower than planned.",
      bullets: [
        "Notes a non-specialist parent can follow",
        "Periodic review calls or messages",
        "Fits children who also attend school-based coaching",
        "Extra sessions around class tests",
      ],
    },
    {
      title: "Exam-season sprint",
      description:
        "Before mocks and the May or November papers, lessons become more frequent and are built around timed papers marked in the board's own style.",
      bullets: [
        "Past papers marked against mark schemes",
        "Two to four sessions a week where the timetable allows",
        "Scheduled around SSC and HSC weeks and festivals",
        "Ideal start: about three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Phaltan, and where do families look?",
      paragraphs: [
        "We could not confirm a school inside Phaltan that teaches the IB Diploma, the Middle Years or Primary Years Programme, or a Cambridge or Pearson Edexcel IGCSE. The town's schools, from long-established institutions with royal patronage to newer private campuses, are affiliated to the Maharashtra State Board, CBSE or ICSE. If a school claims otherwise, ask to see its authorisation and its current list of subjects.",
        "When parents want an international board, they look to Pune. The Pune page on this site lists Mahindra International School, Symbiosis International School and Indus International School, and eastern campuses such as CP Goenka International School in Wagholi are reachable along the Nagar road. Each school has its own admission test, age cut-offs and intake calendar, so the first step is to write to them directly.",
        "A smaller number of families look south, towards Atigre in Kolhapur district, where Sanjay Ghodawat International School is listed on our Sangli page. Few Phaltan families choose this route, as it is a longer journey, but boarding options make it worth a look for some.",
        "What this means in practice is that an international classroom is not available near Phaltan, and a daily commute to Pune is unrealistic. Families therefore decide between relocating, boarding, or staying on a local board and adding specialist online tuition. This page exists for families in the third group, and for the first two while they wait for a seat.",
        "It is worth being honest about the limits. Tutoring cannot enrol a child in an IB school or issue an IGCSE certificate. What it can do is prepare a student for a transfer, keep a boarder steady at weekends or support a private candidate who has found an exam centre.",
      ],
    },
    {
      heading: "How do Maharashtra board, CBSE, ICSE, IGCSE and IB compare for a Phaltan child?",
      paragraphs: [
        "The Maharashtra State Board sets SSC at Class 10 and HSC at Class 12, normally in February and March. CBSE and ICSE run on national syllabi on a similar calendar. IGCSE and IB are international and sat in two sessions, May to June and October to November. The difference between them is less about difficulty than about what the examiner rewards.",
        "State-board papers in Maharashtra reward accurate recall and neat presentation, and students arrive at Class 10 with a solid grounding in facts. IB and IGCSE questions often start from an unfamiliar situation and ask the student to explain, compare or evaluate. A child used to a textbook example may freeze on a question that has no textbook twin, which is why early tutoring focuses on command words and structure.",
        "For engineering and medicine inside Maharashtra, the state's CET routes and the national JEE and NEET tests are the main gateways. IB and IGCSE students must check equivalence and domicile rules well ahead of application, because eligibility for state quotas can depend on where the final school exam was taken.",
        "The deciding question for a Phaltan family is where the child will finish school and what comes after. If the answer is Pune, Bengaluru or an overseas university, an international board fits. If the answer is a state engineering or medical seat, the state board or CBSE usually offers the smoother route.",
      ],
      table: {
        caption: "Board options for a Phaltan student",
        columns: ["Board", "Where it is found", "What the paper rewards", "Main exam months"],
        rows: [
          ["Maharashtra State Board", "Most schools in and around Phaltan", "Accurate recall, tidy answers, Marathi or English medium", "February to March"],
          ["CBSE", "Several private campuses", "National syllabus, application-style questions", "February to March"],
          ["ICSE / ISC", "A few English-medium schools", "Wide syllabus, strong written English", "February to March"],
          ["Cambridge or Edexcel IGCSE", "Pune and larger cities, not Phaltan", "Applied problems, two tiers, command words", "May to June, October to November"],
          ["IB Diploma", "Pune and larger cities, not Phaltan", "Six subjects plus core, internal assessment", "May and November"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Phaltan?",
      paragraphs: [
        "We do not publish a price list, because the rate depends on who is being taught. After the free trial lesson you receive the rate in writing, and nothing is charged before you agree. The figure is shaped by the course level, the subject, the tutor's track record with the exact syllabus and how many lessons a week you want.",
        "Higher Level IB Chemistry asks more of a teacher than IGCSE Core English, and rates reflect that. An experienced tutor who has taught a syllabus for several years can often take a student to competence in fewer hours, so a higher hourly rate does not always mean a larger total bill. The useful comparison is cost per topic mastered, not cost per hour.",
        "For a Phaltan family the honest comparison is with the alternatives on the map. A weekly trip to Pune means fuel, tolls and most of a Saturday, and renting a room there purely for classes is costly. Online lessons remove all of that, and you can put the saving towards a longer lesson plan.",
        "Some families use a few months of online tuition as a bridge while they decide whether to move to Pune. That is a sensible use of the trial: you learn how your child responds before committing to a school or city.",
      ],
      bullets: [
        "Course level: IB HL or SL, IGCSE Core, Extended, Foundation or Higher",
        "Subject and the tutor's depth in that exact syllabus",
        "Lessons per week and the length of each",
        "A steady term plan versus an exam-season sprint",
      ],
    },
    {
      heading: "Online tutor, Pune classes, a local home tutor or self-study?",
      paragraphs: [
        "Pune has the widest choice of IB and IGCSE classes, but from Phaltan the journey is over 100 km each way. A child cannot do that weekly for two years and keep up a school timetable, so Pune classes rarely survive past the first term for families outside the city.",
        "Local home tutors in Phaltan are plentiful for state-board and CBSE subjects, and many are skilful. Few have taught IB or IGCSE, so they serve best when a student needs general subject reinforcement instead of syllabus-specific coaching on criteria, tiers and paper styles.",
        "Self-study works for a motivated IGCSE student with past papers and mark schemes, especially in Maths and the sciences. It falters on written subjects, on IB internal assessment and on anything where the student needs a reader who knows the criteria.",
        "Online one-to-one tuition gives syllabus-specific help with personal attention, and the tutor can be chosen for experience rather than for being nearby. The price is a reliable connection, which is not always a given in outlying streets, so tutors agree a fallback, such as audio with photographed working.",
      ],
      table: {
        caption: "Routes to IB or IGCSE preparation from Phaltan",
        columns: ["Route", "Where it helps", "Where it falls short"],
        rows: [
          ["Online one-to-one", "Exact syllabus and personal feedback", "Needs stable broadband or a hotspot"],
          ["Weekly Pune classes", "In-person and a large peer group", "A 220 km round trip each time"],
          ["Local home tutor", "Easy to arrange, low fuss", "Few have taught IB or IGCSE"],
          ["Self-study with past papers", "Flexible and inexpensive", "No feedback on essays or internal work"],
        ],
      },
    },
    {
      heading: "How do heat, sugar season and festivals shape a Phaltan study year?",
      paragraphs: [
        "Phaltan lies in a rain-shadow belt, so the monsoon is lighter here than in the Western Ghats, and the hot season from March to May is the real stress on the calendar. Afternoon temperatures climb past 40 degrees, power cuts are more likely and children tire early. Lessons in these months work best after sunset, with a short break in the middle.",
        "The sugar crushing season runs roughly from November to March and sets the rhythm for many households. Parents who work shifts at factories or on farms may only be free late, and some families move between village and town. Flexible weekend slots therefore suit a large number of Phaltan students.",
        "Ganeshotsav in August or September is the big family event, with processions and guests for up to ten days. Diwali follows in October or November, close to the IGCSE October session and the IB November examinations. Revision that has not been finished by then tends to be pushed out, so plan it earlier.",
        "February and March carry SSC and HSC, and the town goes quiet. A child at a local school who also takes online IB or IGCSE lessons should drop to a lighter load in these weeks, then resume at full pace once papers end.",
      ],
      table: {
        caption: "A Phaltan study calendar at a glance",
        columns: ["Months", "What is happening", "How lessons adapt"],
        rows: [
          ["Jan to Feb", "Cool and dry, sugar season continues, SSC and HSC begin", "Catch-up lessons; lighter around board papers"],
          ["Mar to May", "Heat above 40 degrees, IB May session, IGCSE May to June", "Timed papers after sunset; short breaks"],
          ["Jun to Sep", "Patchy monsoon, Ganeshotsav", "Steady plan; avoid festival week"],
          ["Oct to Nov", "Diwali, IGCSE October session, IB November exams", "Finish revision before festivals"],
          ["Dec", "Mild winter and school holidays", "Longer consolidation sessions"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Phaltan go after school?",
      paragraphs: [
        "Within India, Pune is the natural next step. Symbiosis, Fergusson College, Flame University, MIT World Peace University and the College of Engineering Pune are names families recognise, and Baramati and Satara also have established colleges. Each institution publishes its own eligibility and seat rules in a prospectus, so use the current one.",
        "The Association of Indian Universities issues equivalence for IB and IGCSE qualifications, and IB Diploma holders can apply to central universities through CUET-UG, subject to the year's notification. The rules shift from year to year, so read the latest text before choosing subjects.",
        "For engineering, Physics, Chemistry and Maths are needed for JEE Main and the Maharashtra CET routes, while NEET requires Biology with Physics and Chemistry. Confirm eligibility against your likely subject package before Class 11 starts, not after.",
        "Overseas, IB Diploma and IGCSE results are read widely across the UK, Europe, Canada and Australia, and US colleges consider them alongside test scores and essays. Tutors help with subject mastery; they do not write application essays or personal statements.",
      ],
    },
    {
      heading: "Why are IB Maths and the sciences difficult, and how does a tutor help?",
      paragraphs: [
        "IB Maths asks for explanation as well as calculation. Analysis and Approaches leans on algebraic reasoning and proof, and Applications and Interpretation asks whether a model fits the situation and what its limits are. Both include an Exploration, a piece of independent work worth a fifth of the grade.",
        "Physics students lose marks on units, unlabelled graphs and loose wording. Chemistry brings heavy calculations, so fluency with the data booklet saves minutes in the exam. Biology is broad and command terms such as describe, explain and evaluate decide how much detail earns the mark.",
        "For internal assessments, a tutor explains the criteria, helps a student narrow a question, reads a draft and says where a criterion has been missed. The design, data and writing remain the student's work, and we decline requests to produce assessed pieces.",
        "A Phaltan student who has moved from a fact-led paper to an applied one benefits most from a tutor who has seen that jump before, because the pattern of errors is familiar and the fixes are practical.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: how to choose IGCSE tiers",
      paragraphs: [
        "Cambridge's Core tier tops out at grade C, while Extended reaches A*. Pearson Edexcel's Foundation tier caps at grade 5 and Higher reaches 9. A student planning IB Maths HL or a science Diploma should aim for the upper tier in the relevant subjects.",
        "The school normally decides tier entry. For a private candidate, or a family weighing two schools, a diagnostic paper is the clearest guide. If the score sits on the boundary, discuss it with the school or the exam centre before the entry deadline.",
        "Subject choice follows direction. A child heading for engineering or medicine takes Maths, Physics, Chemistry and Biology or Computer Science, and one leaning towards business adds Economics, Business Studies and Accounting. A language, such as Hindi or Marathi where the board offers it, completes the set.",
        "Before any tutoring starts, confirm the board and the code, so the tutor prepares for the paper your child will actually sit.",
      ],
    },
  ],

  tutorsIntro:
    "Phaltan students are matched on programme, subject, level and exam board. Each tutor teaches from India in IST and is introduced with a short note about the syllabus they have taught and why they suit your child.",

  process: [
    { title: "Send your child's details", description: "Board or programme, subject, level, current school and the evening slots that suit your Phaltan household." },
    { title: "Receive a tutor proposal", description: "We name a tutor and explain which syllabus they have taught that matches your child's." },
    { title: "Attend a free trial lesson", description: "A real lesson online, at no cost and with no obligation to continue." },
    { title: "Agree terms in writing", description: "Lesson frequency, the rate and the first month's topics are written down before you pay." },
    { title: "Continue with reviews", description: "Regular lessons with notes, a periodic review, and a change of tutor whenever you ask." },
  ],

  whyPoints: [
    { title: "Syllabus-level matching", description: "We choose tutors for the precise subject, level and board your child will face." },
    { title: "Plain talk about schools", description: "We say openly that Phaltan has no confirmed IB or IGCSE school, so your plan starts from facts." },
    { title: "Evidence before commitment", description: "The free trial lets you judge a real lesson before any money is discussed." },
    { title: "Clear limits", description: "Tutors coach; they do not write internal assessments, essays or coursework." },
    { title: "Visible progress", description: "A written note after each lesson and periodic reviews keep parents informed." },
    { title: "Easy to change", description: "If the fit is wrong, we arrange another tutor without awkwardness." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Phaltan?", answer: "Not one we can confirm. Schools in Phaltan follow the Maharashtra State Board, CBSE or ICSE. The nearest international-board schools we can verify are in Pune, about 110 km away. If a school says it offers these boards, ask for its current affiliation details before relying on that." },
    { question: "Can I get IB home tuition in Phaltan?", answer: "You can get online home tuition: a live, private lesson taken at home on a laptop with a tutor elsewhere in India. The tutor does not travel to Phaltan. In-person home visits run only in Gurugram and parts of Delhi NCR, and we state that clearly before you book." },
    { question: "Do you offer IGCSE tutors in Phaltan for Cambridge and Edexcel?", answer: "Yes, for both boards. We match by syllabus code and tier, for example Cambridge 0580 Mathematics or Edexcel 4MA1. Lessons are held online in IST. Please tell us the board and the exam session first, because the two boards set papers differently." },
    { question: "Will a tutor come to my house in Phaltan?", answer: "No. Tutors do not visit homes in Phaltan, and in-person tuition exists only in Gurugram and parts of Delhi NCR. Here the lesson is online, live and one to one. Your child needs a laptop or tablet, a steady connection and a quiet table." },
    { question: "How much does IB or IGCSE tuition cost in Phaltan?", answer: "It depends on the level, subject, tutor experience and how often you want lessons, so there is no published figure. After the free trial you receive a written rate, which you can compare with the cost of weekly Pune travel or a move." },
    { question: "Which schools near Phaltan teach IB or IGCSE?", answer: "None in Phaltan that we can confirm. In Pune, Mahindra International School, Symbiosis International School and Indus International School appear on our Pune page, and Sanjay Ghodawat International School at Atigre appears on our Sangli page. Check each school's current offer yourself." },
    { question: "Is the first lesson really free?", answer: "Yes. Your child attends a full lesson with the proposed tutor online, without payment or obligation. Afterwards you decide whether to go on, and we send the rate in writing before any booking is confirmed." },
    { question: "Can a tutor write my child's IA or Extended Essay?", answer: "No. A tutor can explain the criteria, help narrow a topic, review a plan and comment on drafts. The research, data and text must be the student's own work, and we decline any request to produce assessed material." },
    { question: "Which IB Diploma subjects are available for a Phaltan student?", answer: "Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, ESS, Geography, and Marathi or Hindi B are common, at Higher or Standard Level. If your combination is unusual, ask and we will say honestly whether we can staff it." },
    { question: "Do you teach IB MYP and PYP to Phaltan children?", answer: "Yes. PYP lessons are short, playful and built on reading and number sense. MYP lessons deal with criterion-based writing, science investigations and the Personal Project. A parent gets a written note after each class." },
    { question: "Is online tuition as effective as classes in Pune?", answer: "For most subjects, yes, provided the connection is steady. Tutor and student share a whiteboard and solve problems together. For Phaltan the gain is that you avoid a round trip of over 200 km and can choose a tutor for syllabus experience, not proximity." },
    { question: "How are tutors chosen for Phaltan students?", answer: "We look at qualifications, recent teaching of the exact syllabus and how clearly the person explains, then match against your child's level and goal. A tutor is proposed only after we understand your needs, and the trial lesson tests the match." },
    { question: "When should my child start tutoring?", answer: "Ideally at the start of the course, in Grade 9 for IGCSE and Class 11 for the Diploma. A child preparing for a school transfer can start a term earlier and concentrate on English writing and Maths." },
    { question: "My child studies in the Maharashtra board. Can we switch to IB or IGCSE?", answer: "A switch needs a school seat, which tutoring cannot provide. A tutor can prepare the child for the applied style, close content gaps and strengthen written English ahead of the first term in the new school." },
    { question: "Do lessons work around the summer heat and Ganeshotsav?", answer: "Yes. Most Phaltan families use weekday evenings after sunset and Sunday mornings, and we avoid SSC and HSC weeks, Ganeshotsav and Diwali. In power-cut weeks, tutors agree a fallback such as audio with photographed working." },
    { question: "What if my child does not get along with the tutor?", answer: "Tell us and we will arrange someone else. Early check-ins catch problems quickly, and the written plan keeps expectations clear for everyone." },
    { question: "Is IB Gram connected to any school or exam board?", answer: "No. IB Gram is independent and has no tie to the IB, Cambridge, Pearson or any school in Phaltan, Pune or elsewhere. Schools named on this page are there only to give context." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The same online model in other Indian cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where in-person visits are available." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "Programmes and subjects at a glance." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure, core and grading." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry learning for younger children." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA versus AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Backgrounds and subjects." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write or WhatsApp to begin." },
    { label: "IB and IGCSE tutoring in Pune", href: "/pune/", description: "The nearest big city with international schools." },
    { label: "IB and IGCSE tutoring in Satara", href: "/satara/", description: "The district headquarters, about 59 km away." },
    { label: "IB and IGCSE tutoring in Sangli", href: "/sangli/", description: "A neighbouring western Maharashtra city." },
    { label: "IB and IGCSE tutoring in Pandharpur", href: "/pandharpur/", description: "The pilgrim town down the same road." },
  ],

  closingHeading: "Start with a free trial lesson for your Phaltan child",
  closingBody:
    "Send us the programme or board, the subject, the level and the hours that work in your Phaltan home. We will propose a tutor, explain the match and set up a free online trial lesson. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
