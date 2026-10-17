import type { CitySeoPage } from "../types";

/**
 * /warud/ - IB and IGCSE tutoring page for Warud, the orange-belt town of Amravati district, Maharashtra.
 * No school in Warud is confirmed to teach IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and the
 * clusters reuse the Amravati and Nagpur names verified on the Amravati page. All lessons online.
 */
export const warud: CitySeoPage = {
  slug: "warud",
  countryName: "Warud",
  countryNameLong: "Warud, Amravati district, Maharashtra",
  demonym: "Warud",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-evening and weekend slots that avoid the harsh Vidarbha summer afternoons, the orange trading rush and the Pola and Diwali weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.4667, longitude: 78.2667 },
  wikipedia: "https://en.wikipedia.org/wiki/Warud",
  alternateNames: ["Warud Amravati", "Warud Orange City", "Warud Maharashtra", "Varud"],
  stripSchools: [],

  title: "Warud IB & IGCSE Tutors | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Warud, Amravati district: Diploma, MYP, PYP and Cambridge subjects live on screen, one to one from home, plus a free first lesson.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Warud",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR ORANGE CITY WARUD",
  heroSubtitle:
    "Home tuition for an IB or IGCSE subject in Warud is a live, private video lesson at your own desk, with a teacher who has handled the same syllabus before. The orange town has no school we can confirm for these boards, and Amravati and Nagpur are a long way down the road, so online tutoring from home is the sensible start.",
  primaryKeyword: "IB and IGCSE tutors in Warud",
  imageAltText: "A Warud student from the Vidarbha orange belt studying IB Chemistry with an online tutor at a home desk",
  secondaryKeywords: [
    "IB tutor Warud",
    "IGCSE tutor Warud",
    "IB home tuition Warud",
    "IGCSE home tuition Warud",
    "IB private tuition Warud",
    "IB Maths tutor Warud",
    "IGCSE Maths tutor Warud",
    "IB Physics tutor Warud",
    "IB Chemistry tutor Warud",
    "IB Biology tutor Warud",
    "IB DP tutor Warud",
    "IB MYP tutor Warud",
    "IB PYP tutor Warud",
    "IGCSE online tuition Warud",
    "IB tutor Warud Amravati district",
    "IGCSE tutor Morshi Pandhurna",
    "online IB tutor Warud Maharashtra",
    "Cambridge IGCSE tutor Warud",
    "IB tutor Orange City Vidarbha",
  ],

  heroTrustPoints: [
    "Every tutor has already taught the course your child is following",
    "Warud lessons happen on screen; tutors visit homes only in Gurugram and parts of Delhi NCR",
    "You get a short written summary after each lesson, and can ask for a different tutor",
    "The first lesson costs nothing, and the fee is sent in writing",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The full IB sequence" },
    { value: "Cambridge + Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "Lessons on local time" },
    { value: "Free trial", label: "Try a real class first" },
  ],

  intro: {
    heading: "Warud, the orange town, and IB and IGCSE tuition at home",
    paragraphs: [
      "Warud is a municipal council town in the east of Amravati district, in Vidarbha, with a 2011 population of about 45,500 that made it the largest town in the district by that count. It is known as Orange City and sometimes called the California of Vidharbha, because the taluka around it is one of Maharashtra's main orange-growing areas; villages such as Shendurjana Ghat, Loni and Jamgaon send fruit to distant markets. The Wardha and Chudaman rivers, with the Zunj waterfall and Nagthana Dam, shape the landscape.",
      "Schools in Warud follow the Maharashtra State Board or CBSE, and as far as we can confirm none teaches the IB or a Cambridge or Pearson Edexcel IGCSE. Families who do ask about these boards usually belong to a few groups: orchard and trading families planning a future abroad, doctors and engineers whose children studied elsewhere, and parents who have decided to send a child to a boarding school in Nagpur or beyond.",
      "IB and IGCSE tutors in Warud therefore teach online. The tutor is in another Indian city, works on Indian Standard Time and shares a whiteboard with the student in real time. Nobody turns up at a Warud door, because in-person tuition at home is something IB Gram runs only in Gurugram and parts of Delhi NCR. A Warud family can still have private tuition at home, through a laptop, with a teacher who knows the exact paper.",
      "IB Gram is independent of the IB, Cambridge, Pearson and every school named on this page. A tutor explains, corrects and encourages. The assessed pieces, namely Internal Assessments, Extended Essays, TOK essays and coursework, are written by the student alone.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Live private lessons in English from tutors based in India",
      "A free first lesson, with any fee discussed only afterwards",
      "Home visits exist only in Gurugram and parts of Delhi NCR, so Warud lessons are all online",
    ],
  },

  programmesIntro:
    "A Warud family rarely meets these programmes by accident. The usual trigger is a plan: a boarding seat in Nagpur, a place at a school in Amravati, or a degree abroad. The notes below say what each stage asks of a student, so lessons can be aimed at one clear task.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Children learn through units built on questions and finish primary school with the Exhibition, a project they plan and present themselves. No external paper is sat. Tutors strengthen what inquiry rests on: fluent reading, clear sentences, number confidence and curiosity.",
      countryNote:
        "In Warud, PYP tuition mostly prepares a young child for an admission conversation at a school in Amravati or Nagpur, so sessions stay short and friendly.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is assessed against published criteria, and investigations, reports and the Personal Project count as much as tests. Pupils from Maharashtra State Board classrooms are often strong on facts and need practice in explaining, comparing and reflecting in writing.",
      countryNote:
        "MYP learners from Warud typically ask for help with lab write-ups, English essays that use evidence and Maths set in an everyday situation.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Diploma has six subjects, three at Higher Level, with TOK, the Extended Essay and CAS beside them. The total is out of 45, and papers are sat in May or November. Internal assessments feed the final mark, so the work has to be paced over two years.",
      countryNote:
        "A Diploma student connected to Warud is normally enrolled at a school in another city, and online lessons fill weekends, holidays and the weeks spent at home.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP combines at least two Diploma courses with a career-related qualification and a reflective core. Very few Indian schools run it. The Diploma courses in a CP are examined to the standard of the full Diploma.",
      countryNote:
        "We rarely see CP requests from the orange belt; when one arrives, the Diploma subjects are tutored as for any DP student.",
    },
  ],

  subjectsIntro:
    "Give us the subject, level and exam session and we look for a tutor who has taught that very combination. Mathematics shows why: the two Diploma courses, Analysis and Approaches and Applications and Interpretation, each come at Higher and Standard Level, so the right teacher depends on all three choices.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus, vectors and proof. State Board students usually own the content and need practice setting out full reasoning." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling and statistics with a graphing calculator, practised on messy real-world data." },
    { name: "IB Physics", levels: "HL / SL", description: "From mechanics to fields and the atom, with repeated attention to units, graphs and uncertainty." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Mole calculations, enthalpy, kinetics, equilibrium and organic pathways, with the data booklet open from lesson one." },
    { name: "IB Biology", levels: "HL / SL", description: "A big syllabus where exact vocabulary and command-term answers decide the grade." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram-plus-evaluation answers drawing on the orange trade, cotton and pulses in Vidarbha, and price swings between farm and market." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies and business tools, with the internal commentary built in stages; fruit trading and agri-processing supply natural examples." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen texts and comparative arguments for students from Marathi or Hindi homes." },
    { name: "IB Marathi B", levels: "HL / SL", description: "Comprehension, writing and speaking for students who already speak Marathi, including the Varhadi flavour of Vidarbha." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Written and spoken Hindi, tested through reading, writing and an oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Problem decomposition, coding and a project assembled over several months." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Orchards, irrigation, river basins and reservoir water offer local material for every topic." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study writing and fieldwork method." },
    { name: "IB Psychology", levels: "HL / SL", description: "Landmark studies, research design and structured essays." },
  ],

  igcseSubjectsIntro:
    "IGCSE comes from two boards, Cambridge and Pearson Edexcel, with different papers, tiers and command words. A tutor must know which one your child's school or exam centre uses. These are the subjects Warud families raise most often.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Two papers for the Cambridge course; Extended entrants need sturdy algebra and geometry." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Stretch material for fluent mathematicians, starting calculus early." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson's route, with two equally weighted papers and credit for method." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy, circuits and waves, with alternative-to-practical questions." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atoms, bonding, rates of reaction and a first look at organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, human body systems, plants and ecosystems." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing and speaking aimed at Marathi and Hindi speakers." },
    { name: "IGCSE First Language English 0500", levels: "Grade 9-10", description: "Directed writing and descriptive composition for fluent users." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, data representation and networks." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Opening economics with data-response practice." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business activity, finance and marketing through short cases." },
  ],

  regionsTitle: "Warud, the orange belt and nearby towns our tutors reach online",
  regionsIntro:
    "A video lesson is the same from a flat in town as from a farmhouse among the orchards. These notes describe how households in each part of the Warud area tend to arrange their evenings around school, the heat and the harvest.",
  regions: [
    { name: "Warud town centre", note: "The market core, where trading families keep late hours, so lessons usually begin after the shops shut." },
    { name: "Orange mandi area", note: "Neighbourhoods near the fruit market, which turns very busy in the picking season; weekend evenings are more reliable than weekdays then." },
    { name: "Railway station side", note: "About three kilometres from the centre, on the line towards Morshi and Amravati; useful when a student travels to relatives by train." },
    { name: "Shendurjana Ghat", note: "A well-known orange village in the taluka, where orchard families may find the signal changes from lane to lane." },
    { name: "Loni and Jamgaon", note: "Orange-growing villages in Warud taluka, where lessons help when school is a long bus ride away." },
    { name: "Morshi", note: "The next town towards Amravati, with its own schools; families compare it with Warud when choosing senior school." },
    { name: "Pandhurna and Multai", note: "Towns across the Madhya Pradesh border that share the orange economy and often look to Nagpur for international schooling." },
    { name: "Paratwada and Chandur Bazar", note: "Towns on the Amravati side with established private schools and coaching." },
    { name: "Katol, Narkhed and Arvi", note: "Orange and cotton towns toward Nagpur and Wardha, whose families make the same Nagpur-or-Amravati decision." },
    { name: "Amravati city", note: "The district headquarters, whose own page covers the schools there; many Warud families have relatives there." },
  ],

  schoolDisclaimer:
    "School names appear only to show where IB and Cambridge classrooms exist within reach of Warud. IB Gram has no deal with any of them, or with the IB, Cambridge or Pearson. Programmes and admission rules change, so confirm everything with the school before acting.",
  schoolClusters: [
    {
      city: "Local: Warud and the orange belt",
      note: "We could not confirm any school in Warud or its neighbouring towns for the IB or a Cambridge or Edexcel IGCSE, so none is named. Schools here follow the Maharashtra State Board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Amravati",
      note: "The Amravati page names the district headquarters' one confirmed Cambridge-curriculum option. It is a long road journey from Warud, which makes it a boarding or relocation choice.",
      schools: ["KK Cambridge International School, Indala"],
    },
    {
      city: "Nearby: Nagpur",
      note: "Nagpur is where Vidarbha families most often look for IB and Cambridge seats. Several of its schools are confirmed on our Nagpur and Amravati pages.",
      schools: ["D Y Patil International School, MIHAN", "Centre Point School International", "VIBGYOR World Academy"],
    },
  ],

  modesIntro:
    "Every Warud student studies online. Families then choose a pattern for the term: one lesson a week, a planned course with written recaps, or a concentrated burst of practice before the papers.",
  modes: [
    {
      title: "Hour-a-week tuition",
      description:
        "One tutor, one regular hour. Your child carries questions from the week at school, learns the next chunk of the syllabus and sees mistakes corrected as they are written.",
      bullets: [
        "Tutor chosen by subject, level and board",
        "Typically sixty minutes",
        "A shared whiteboard holds the working",
        "Well suited to IGCSE, MYP and Diploma Year 1",
      ],
    },
    {
      title: "Term roadmap and written summaries",
      description:
        "Lessons follow a term map, each one ends with a brief summary for parents, and every few weeks a call decides what to speed up or slow down.",
      bullets: [
        "Summaries a non-specialist parent can read",
        "Planned check-ins",
        "Sits alongside school or boarding timetables",
        "Extra lessons ahead of class tests",
      ],
    },
    {
      title: "Pre-paper intensive",
      description:
        "Before mocks and the May or November sessions, sessions become frequent and turn into timed papers, marked in detail the same day.",
      bullets: [
        "Marking in the examiner's style",
        "Two to four lessons a week when school allows",
        "Planned clear of Pola, Dussehra and Diwali",
        "Ideally begins three weeks before paper one",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Warud, and where do families go instead?",
      paragraphs: [
        "We could not confirm one. Warud's schools are affiliated to the Maharashtra State Board or CBSE, and the town's reputation rests on fruit, trade and the loyalty of families who have farmed the same land for generations, not on international education. That is a fact to plan around, not a flaw.",
        "For an international board, Vidarbha families turn to Nagpur and, less often, Amravati. The Amravati page records one confirmed Cambridge-curriculum school at Indala, and the Nagpur pages name D Y Patil International School at MIHAN, Centre Point School International and VIBGYOR World Academy. Each means a boarding place, a move or a long weekly journey, and the right decision depends on the child's age and the family's work.",
        "Some families stay and aim at something else. A Warud student in Class 9 or 11 under the State Board may wish to study IGCSE subjects as a private candidate before applying overseas, which needs an exam centre that accepts private entries. Others pause at Class 10 and move for the Diploma.",
        "Whichever route a family takes, online tuition fills the gap: it prepares a child for the move, supports a boarder at home during breaks and coaches a private candidate who has no school lab or teacher for the paper.",
      ],
    },
    {
      heading: "How do the Maharashtra State Board, CBSE, IGCSE and IB compare for Warud?",
      paragraphs: [
        "The Maharashtra State Board runs SSC at Class 10 and HSC at Class 12, usually in February and March, in Marathi, English or Hindi medium. CBSE has a similar window. IGCSE and the IB follow the international calendar, with sittings in May and June and again in October and November, so switching in the middle of a year is rarely smooth.",
        "A State Board student is often well drilled in definitions and numerical routines. The international papers add interpretation, comparison, evaluation and long answers, and the first months of tutoring usually go into learning what a command word like assess or to what extent demands on the page.",
        "For entrance routes, Maharashtra's MHT-CET, JEE Main and NEET all matter. IB and IGCSE students should read the current eligibility and equivalence notices well before the subject package is locked, because state counselling can add domicile and board conditions.",
        "For a Warud household, the central question is where the child will finish school and what comes after. If a state engineering or medical seat is the aim, the home board is simpler. If the target is a university abroad, design, liberal arts or management, an international board becomes attractive.",
      ],
      table: {
        caption: "Boards a Warud family may compare",
        columns: ["Board", "Where it is taught", "Style of paper", "Main exam months"],
        rows: [
          ["Maharashtra State Board", "Most schools in town and the taluka", "Fact-based, Marathi, English or Hindi", "Feb-Mar"],
          ["CBSE", "Private schools in the area", "Central syllabus with some application", "Feb-Mar"],
          ["ICSE / ISC", "Very few schools nearby", "Heavy on English, broad syllabus", "Feb-Mar"],
          ["Cambridge or Edexcel IGCSE", "Nagpur and Amravati campuses", "Applied questions, set by tier", "May-Jun, Oct-Nov"],
          ["IB Diploma", "Nagpur campuses and further afield", "Six subjects plus core", "May, November"],
        ],
      },
    },
    {
      heading: "What do IB or IGCSE lessons cost a Warud family?",
      paragraphs: [
        "There is no tariff on this page, because the right figure depends on the child. When the free first lesson is over, the rate arrives in writing next to the session length and weekly rhythm it assumes, and you owe nothing until you agree.",
        "Four things move the rate. Course level counts, as Higher Level Physics asks more of a teacher than Core English. Familiarity with the exact code counts, because someone who has marked many scripts for it sees patterns quickly. Weekly frequency changes the monthly total. And a steady plan is priced differently from a three-week sprint before the papers.",
        "Online lessons avoid costs that never show on a quote. A Warud family does not pay for fuel or bus fares to Amravati or Nagpur, does not lose a school day to travel and does not need a city flat for a tutor's visits. For a town this far from a metro, that saving can be larger than the gap between two tutors' rates.",
        "A pricier specialist can still cost less in total if the gap closes in fewer hours. Watch how soon the trial tutor finds the actual weakness.",
      ],
      bullets: [
        "Course level: IB HL or SL, IGCSE Core, Extended, Foundation or Higher",
        "How familiar the tutor is with the exact syllabus and board",
        "Lessons per week and minutes per lesson",
        "A steady term plan or an exam-season intensive",
      ],
    },
    {
      heading: "Online tutor, Amravati or Nagpur classes, local private tutor or self-study?",
      paragraphs: [
        "Coaching in Amravati and Nagpur is plentiful but mostly aimed at State Board results, MHT-CET, JEE and NEET. A centre that can place a teacher in front of an IB Physics HL student is rare, and getting to one from Warud means a long road trip that a school-age child cannot repeat weekly.",
        "Private tutors in Warud are available for SSC, HSC and CBSE subjects, and some are excellent. Few have taught IB or IGCSE content, so they help most with general homework and exam technique, less with a given syllabus code or an internal assessment criterion.",
        "Working alone from past papers is realistic for a motivated student, especially in IGCSE Maths and sciences. It stalls on subjects marked by judgement, because nobody shows the student how a stronger English or TOK answer reads.",
        "Live one-to-one video lessons bring the specialist to the desk. What they need is a steady connection, which can wobble during storms and in the dense orchard villages, so run a test call beforehand and keep a phone hotspot nearby.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Warud",
        columns: ["Route", "Strength", "Limit"],
        rows: [
          ["Live one-to-one video", "Matched syllabus, own pace", "Depends on a reliable connection"],
          ["Classes in Amravati or Nagpur", "Face-to-face teaching", "A long journey each way from Warud"],
          ["Local private tutor", "Simple to arrange", "Rarely trained on IB or IGCSE"],
          ["Working alone", "Costs nothing", "No marking of essays or internal work"],
        ],
      },
    },
    {
      heading: "How do the Vidarbha summer, the orange season and local festivals shape the study year?",
      paragraphs: [
        "Warud lies in eastern Vidarbha, where summers are among the hottest in India, and May and June temperatures regularly pass 43 or 44 degrees. That coincides with the IB May session and the IGCSE May-June papers, so a student may be writing in the worst heat of the year. Practice should be placed early in the morning or late in the evening, with cooling tested beforehand.",
        "The orange season shapes the household. The main picking and trading weeks fall in the cooler months, roughly the winter, when orchard families are busy from dawn and relatives arrive to help. Tutor timings are best agreed at the start of the season, and a parent can protect a fixed evening for the student even in the busiest week.",
        "The monsoon, from mid-June to September, fills the Wardha and Chudaman and can disturb mobile data. Pola, the bullock festival that is especially prominent in Vidarbha, falls in August or September, Ganeshotsav arrives soon after, and Navratri, Dussehra and Diwali follow. Diwali sits close to the November papers, so revision has to be done early.",
        "February and March are SSC and HSC months for local peers, and a quiet December gives a good run for longer consolidation lessons.",
      ],
      table: {
        caption: "Study calendar for a Warud IB or IGCSE student",
        columns: ["Months", "Conditions and events", "Planning notes"],
        rows: [
          ["Nov-Feb", "Cool season, orange picking and trading, Mahashivratri", "Protect one fixed evening; use December for long lessons"],
          ["Feb-Mar", "SSC and HSC season for local peers; Holi", "Mock papers and steady revision"],
          ["Apr-Jun", "Severe heat; IB May and IGCSE May-June papers", "Early-morning or late-evening practice"],
          ["Jul-Sep", "Monsoon, Pola, Ganeshotsav", "Backup connection; keep IA work moving"],
          ["Oct", "Navratri and Dussehra, post-monsoon", "Short, frequent lessons"],
          ["Oct-Nov", "Diwali and the November sessions", "Finish revision before the festival weeks"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Warud go next?",
      paragraphs: [
        "Within Vidarbha the familiar destinations are in Nagpur and Amravati: VNIT and AIIMS Nagpur, IIM Nagpur, the Laxminarayan Institute of Technology, Rashtrasant Tukadoji Maharaj Nagpur University and Sant Gadge Baba Amravati University. Pune and Mumbai draw many senior students, too. Every institution sets its own admission rules, so read the prospectus for your application year.",
        "Paperwork starts with equivalence. The Association of Indian Universities recognises IB and IGCSE-based results as standing beside Indian Class 12, and Diploma graduates can go for central university places via CUET-UG whenever that year's notice permits. Because the wording keeps changing, read the latest version yourself.",
        "Engineering and medicine hinge on the subject package. Physics, Chemistry and Maths open the JEE Main and MHT-CET engineering doors, while NEET asks for Biology alongside Physics and Chemistry. Counselling in Maharashtra can add domicile conditions, so raise the question in Class 11 before choices harden.",
        "Overseas, the UK, Europe, Canada, Australia and Singapore read IB and IGCSE results readily, and American colleges look at them next to test scores and essays. Agricultural and food-technology degrees are a natural interest for orange-belt families. Tutors teach the subjects; the student writes the applications.",
      ],
    },
    {
      heading: "Where do IB Maths and the sciences trip Warud students, and how do tutors help?",
      paragraphs: [
        "IB Maths wants reasoning beside every answer. One course rewards tidy algebra, calculus and proof; the other asks whether a model suits the situation and what a statistic truly means. Each includes an Exploration, a piece of independent mathematics where a tutor can talk through scope and structure without writing a line of it.",
        "Physics marks tend to vanish into missing units, graphs without labels and vague explanations. Chemistry piles on calculations, and its data booklet must be searched at speed. Biology is bulky, and a middle grade becomes a top grade largely through terminology and answering the command term exactly.",
        "For internal assessments, the tutor's role is to question the choice of topic, test the method, discuss uncertainty and show where an evaluation is thin after reading a draft. The experiment, the numbers and the report remain the student's.",
        "A State Board pupil usually meets criterion-marked lab reports for the first time in Class 9 or 11. Someone who has taught that format many times sets the habits early and takes away the surprise before it costs marks.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: selecting an IGCSE tier from Warud",
      paragraphs: [
        "Cambridge sets a ceiling of grade C on its Core papers, while Extended reaches A*. Edexcel's Foundation papers stop at grade 5 and Higher runs to 9. Anyone planning IB Maths HL, Physics HL or a science-led Diploma should aim for the upper tier from the first term.",
        "The school or exam centre normally decides. For a private candidate, or a family still comparing options, a timed diagnostic paper is better evidence than instinct. If the result lies close to a boundary, discuss it with the centre, and remember that a safe Core grade may beat a shaky Extended one.",
        "Subject choice follows direction of travel. Future engineers and doctors usually take Maths with the sciences, and perhaps Computer Science. Commerce-minded students prefer Economics or Business Studies. Marathi or Hindi slots neatly into the set as a language.",
        "Confirm the board and the exact syllabus code before lessons begin, so that preparation targets the paper your child will actually sit.",
      ],
    },
  ],

  tutorsIntro:
    "Each Warud request is paired by programme, subject, level and exam board. The tutors work from other Indian cities on the same clock as you, and each arrives with a few lines explaining why they suit your child's course.",

  process: [
    { title: "Describe the course", description: "Tell us the programme or board, subject, level, school and the quiet evening hours at home in Warud." },
    { title: "Meet the proposed tutor", description: "One name, with the reason their earlier classes resemble the syllabus your child follows." },
    { title: "Take a trial lesson", description: "A real session online with that tutor, free of charge and free of strings." },
    { title: "Fix the terms on paper", description: "The weekly rhythm, the fee and the opening topics are written before any payment." },
    { title: "Keep going, or change", description: "Lessons continue with short summaries, and another tutor is available whenever the first one is not working." },
  ],

  whyPoints: [
    { title: "Someone who knows your paper", description: "The tutor has prepared candidates for the same subject, level and board before." },
    { title: "No pretence about schools", description: "We say plainly that Warud has no confirmed IB or IGCSE school, so plans stay realistic." },
    { title: "See it before you pay", description: "The free first lesson shows how the tutor explains before any rupee changes hands." },
    { title: "Clear boundaries", description: "Feedback and coaching only; assessed pieces stay the student's own writing." },
    { title: "Progress on paper", description: "A short summary after each lesson tells parents what was covered and what comes next." },
    { title: "A simple exit", description: "If the match is wrong, another tutor is found without awkwardness." },
  ],

  faqs: [
    {
      question: "Does any school in Warud teach the IB or IGCSE?",
      answer:
        "None that we can verify in Warud or the nearby taluka towns, where schools follow the Maharashtra State Board or CBSE. The closest named options are in Amravati and Nagpur and are covered on our pages for those cities. Always check a school's present programmes and admissions directly, as we are not connected to any of them.",
    },
    {
      question: "Is IB home tuition possible in Warud?",
      answer:
        "Online home tuition is. Your child sits at the family desk with a laptop while a specialist teaches live from another Indian city, and nobody visits the house. IB Gram sends tutors to homes only in Gurugram and parts of Delhi NCR, which means all Warud tuition happens through the screen.",
    },
    {
      question: "Can you provide IGCSE tutors in Warud for both Cambridge and Edexcel?",
      answer:
        "Yes, for both boards, always over video. Pairing uses the board, the tier and the syllabus code, such as Cambridge 0620 Chemistry or Edexcel 4MA1 Mathematics A. Lessons follow Indian Standard Time, which is Warud's own. Share the code from your child's subject list and we put forward someone who has coached that paper.",
    },
    {
      question: "Does a tutor ever come to my house in Warud?",
      answer:
        "No. Visits to homes are limited to Gurugram and parts of Delhi NCR, so no tutor travels to Warud. What you need is a laptop or tablet, a dependable connection and a quiet corner. The tutor writes on a shared board and sends a brief summary afterwards, so you can follow along even if you were at the orchard or the shop.",
    },
    {
      question: "What will IB or IGCSE tuition cost in Warud?",
      answer:
        "The fee depends on course level, subject, how well the tutor knows that syllabus and how many lessons you want each week, so we print no price. After the free first lesson a written quote follows, and you can compare it freely. Online sessions also remove fuel, bus fares and hours lost on the road to Amravati or Nagpur.",
    },
    {
      question: "Which schools near Warud run the IB or IGCSE?",
      answer:
        "Nothing confirmed in Warud itself. KK Cambridge International School at Indala, Amravati, appears on our Amravati page, and D Y Patil International School at MIHAN, Centre Point School International and VIBGYOR World Academy appear for Nagpur. They are mentioned for orientation only, and each family should verify programmes with the school.",
    },
    {
      question: "Is the first lesson genuinely free?",
      answer:
        "Yes. Your child joins one real lesson with the suggested tutor over video, with no charge and no form to sign. You then decide whether to continue, and if so we give you the rate in writing before booking anything. Many trials use a topic from the current school week, which makes the teaching style easy to judge.",
    },
    {
      question: "Will the tutor write my child's IA or Extended Essay?",
      answer:
        "No. Tutors coach: they explain the marking criteria, help sharpen a topic, test a plan and react to a draft. The investigation, the data and every sentence have to come from the student, and the same holds for TOK essays and coursework. Ghost-written work can erase a candidate's result, which is why we turn such requests down.",
    },
    {
      question: "Which IB Diploma subjects can you cover for Warud students?",
      answer:
        "Common requests include both Maths courses, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, ESS, Geography, Marathi B and Hindi B, at either level. For an unusual subject, send its details and we will tell you frankly whether we have a tutor with real classroom experience in it.",
    },
    {
      question: "Do you coach MYP and PYP children from Warud?",
      answer:
        "Yes. Younger PYP pupils get brief, playful sessions around reading and number sense. MYP pupils work on writing to criteria, investigations, problem solving and the Personal Project. Each lesson ends with a note for parents, written in plain language for someone who has never opened an IB guide.",
    },
    {
      question: "Does online tuition match classes in Amravati or Nagpur?",
      answer:
        "For most subjects, yes, as long as the signal holds. Student and tutor write on one board and mistakes are caught as they appear. For a town this far from a big city the real gain is skipping a long road trip. Practical laboratory work, of course, still takes place at the school.",
    },
    {
      question: "How is a tutor chosen for my child?",
      answer:
        "First we look at qualifications, then at recent teaching on the same syllabus, then at how clearly the person explains. We compare that with your child's level, board and ambitions. A name is proposed only once the need is clear, and we share our reasoning so that you can weigh it before the trial.",
    },
    {
      question: "When is the right time to start?",
      answer:
        "Ideally when the course begins: Class 9 for IGCSE, Class 11 for the Diploma, Class 6 for MYP. A child facing an admission test or a boarding move can start a term sooner, concentrating on English and Maths. Starting later still helps, though with fewer weeks the plan sets topic priorities more tightly.",
    },
    {
      question: "My child studies in a State Board school. Can we switch to IB or IGCSE?",
      answer:
        "A school place comes first, since lessons cannot admit a child to an international course. Once a place exists, a tutor can prepare the student for applied questions, fill content gaps and build writing habits beforehand. Ask the school about the entry class and any test, and start a term early if you can.",
    },
    {
      question: "Can lessons work around the orange season, summer heat and festivals?",
      answer:
        "Yes. Most families here prefer late evenings and Sundays. We avoid the hottest hours of May and June, protect one fixed evening during the picking weeks, plan around Pola, Ganeshotsav, Dussehra and Diwali, and bring revision forward ahead of the November papers. A storm outage gets a fallback such as voice only with photographed working.",
    },
    {
      question: "What if my child and the tutor do not get along?",
      answer:
        "Tell us and we will line up another tutor. A weak fit usually shows within the first few weeks, and the written plan keeps everyone clear about what was promised. A couple of lines to support@ibgram.com or a WhatsApp message is all it takes to restart the search.",
    },
    {
      question: "Is IB Gram tied to any school or exam board?",
      answer:
        "No. IB Gram is an independent tutoring service, separate from the IB, Cambridge, Pearson and every school in Warud, Amravati, Nagpur or elsewhere. School names appear on this page for orientation alone. Admission, marks and grades are beyond our control and we promise none; what we control is the quality of the teaching.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "Where else the online lessons are available." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one region with tutors who come to the door." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "The four IB programmes in outline." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge against Edexcel, tier by tier." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the core and the points total." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria-based marking and the final project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "How inquiry units work for young children." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "Diploma courses beside vocational study." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Which of the two Maths courses suits your child." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles and subject lists of our tutors." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "The quickest way to ask a question or book." },
    { label: "IB and IGCSE tutoring in Amravati", href: "/amravati/", description: "The district headquarters, covered on the same online model." },
    { label: "IB and IGCSE tutoring in Nagpur", href: "/nagpur/", description: "The Vidarbha city with the widest choice of IB schools." },
    { label: "IB and IGCSE tutoring in Akola", href: "/akola/", description: "Another Vidarbha city served online." },
  ],

  closingHeading: "Book a free first lesson for your Warud student",
  closingBody:
    "Write with the course your child follows, the subject, the level and the evenings that stay calm at home. We reply with a proposed tutor and the reasons, and the first lesson is on us. Contact support@ibgram.com or WhatsApp +91 7439 368 115.",
};
