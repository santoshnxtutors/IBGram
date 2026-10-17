import type { CitySeoPage } from "../types";

/**
 * /dumka/ - IB and IGCSE tutoring page for Dumka, Santhal Pargana, Jharkhand. No school in Dumka is confirmed
 * to teach IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and clusters reuse names from the Deoghar
 * and Ranchi pages. All lessons online.
 */
export const dumka: CitySeoPage = {
  slug: "dumka",
  countryName: "Dumka",
  countryNameLong: "Dumka, Jharkhand",
  demonym: "Dumka",
  state: "Jharkhand",
  stateCode: "IN-JH",
  flagCode: "in",
  countryCode: "IN",
  region: "Jharkhand, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings after school and Sunday mornings, avoiding Durga Puja, Sohrai and the semester weeks at the university",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.2676, longitude: 87.2499 },
  wikipedia: "https://en.wikipedia.org/wiki/Dumka",
  alternateNames: ["Dumka Jharkhand", "Dumka Santhal Pargana", "Dumka town"],
  stripSchools: [],

  title: "Dumka IB & IGCSE Tutors | Online Private Tuition at Home",
  metaDescription:
    "Online IB and IGCSE tutors for Dumka, Santhal Pargana: one-to-one private tuition at home in IST, planned around Durga Puja and exams. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Dumka",
  heroEyebrow: "DUMKA IB & IGCSE TUITION, LIVE AND ONLINE",
  heroSubtitle:
    "Private tuition at home for Dumka students on IB or IGCSE tracks: a one-to-one video lesson, a tutor chosen for your exact syllabus and a written note afterwards. Dumka is the headquarters of the Santhal Pargana, yet we cannot point to a local school for these boards, so families here use online home tuition.",
  primaryKeyword: "IB and IGCSE tutors in Dumka",
  imageAltText: "A Dumka student at a study table at home taking a live one-to-one online IB Chemistry lesson",
  secondaryKeywords: [
    "IB tutor Dumka",
    "IGCSE tutor Dumka",
    "IB home tuition Dumka",
    "IGCSE home tuition Dumka",
    "IB private tuition Dumka",
    "IB Maths tutor Dumka",
    "IGCSE Maths tutor Dumka",
    "IB Physics tutor Dumka",
    "IB Chemistry tutor Dumka",
    "IB Biology tutor Dumka",
    "IB DP tutor Dumka",
    "IB MYP tutor Dumka",
    "IB PYP tutor Dumka",
    "IGCSE online tuition Dumka",
    "IB tutor Santhal Pargana",
    "IGCSE tutor Dumka Jharkhand",
    "online IB tutor Jharkhand",
    "Cambridge IGCSE tutor Dumka",
    "Edexcel IGCSE tutor Dumka",
  ],

  heroTrustPoints: [
    "Tutors matched to the IB subject or IGCSE code, with the board confirmed before the first lesson",
    "Online only in Dumka: tutors do not visit your house, and in-person tuition is limited to Gurugram and parts of Delhi NCR",
    "A short written summary after each session",
    "A free trial lesson, then a rate in writing before you commit",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB span" },
    { value: "Cambridge + Edexcel", label: "IGCSE boards" },
    { value: "IST", label: "Evening-friendly timing" },
    { value: "Free trial", label: "See the teaching first" },
  ],

  intro: {
    heading: "What a Dumka family should know before choosing IB or IGCSE tuition",
    paragraphs: [
      "Dumka is the sub-capital of Jharkhand, the seat of Sido Kanhu Murmu University, a medical college, an engineering college and the courts and offices of the Santhal Pargana. It is a town of civil servants, teachers, doctors, traders and farming families, and a place where Hindi, Khortha, Bengali and Santhali are all heard in the same street. Families who search for IB or IGCSE tuition here are few but purposeful.",
      "We could not confirm a school in Dumka offering the IB or Cambridge or Pearson Edexcel IGCSE. Schools follow the Jharkhand Academic Council, CBSE or ICSE. Because nothing local exists, our lessons in Dumka are online and private, taken from home. Tutors do not travel here; in-person tuition runs only in Gurugram and parts of Delhi NCR.",
      "The value of the online route is reach. Someone who has spent a decade teaching IB Biology in Pune or Mumbai can sit on the other side of a screen and watch a Dumka student draw a diagram in real time. The student needs a laptop, a pen and paper and a spot where the family can keep the noise down for an hour.",
      "IB Gram is an independent service with no link to the International Baccalaureate, Cambridge, Pearson or any named school. Our tutors coach and correct. They do not write Internal Assessments, Extended Essays, TOK essays or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, and Cambridge and Pearson Edexcel IGCSE",
      "Live lessons in English, with Hindi clarification where it helps",
      "A free trial lesson before any fee",
      "No tutor visits in Dumka; home tuition here is online and taken at home",
    ],
  },

  programmesIntro:
    "In Dumka an international programme tends to come into view because of a planned move, a scholarship test or an interest in study abroad. The notes below describe what each stage asks of a student, so the tutoring can be aimed where it matters.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "Young learners work through themed units, research their own questions and finish with an Exhibition that they present themselves. There is no external test. Tutors shore up what inquiry depends on: steady reading in English, tidy handwriting, number confidence and a willingness to explain thinking aloud.",
      countryNote:
        "In Dumka, PYP tutoring generally prepares a child for a school elsewhere and focuses on spoken and written English alongside core number work.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each MYP subject is graded against criteria, so a lab report, an essay or a project counts as much as a test. Students who have learnt for board papers often know the material but rarely write an extended reflection or compare two approaches, and that is where tutoring gives the quickest gains.",
      countryNote:
        "Dumka children heading for an MYP place usually work on English composition, science investigations and Maths word problems before an entrance assessment.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, are studied alongside Theory of Knowledge, an Extended Essay and CAS activities. The score is out of 45, with written papers in May or November and coursework marked inside or outside the school. The demand is steady over two years.",
      countryNote:
        "Diploma students from Dumka are usually at boarding schools in Kolkata or Delhi NCR and use online lessons to reinforce subjects at weekends and in the holidays.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP pairs at least two Diploma courses with a career-linked study and a core of reflection, service and language learning. Very few Indian schools offer it. The Diploma courses inside CP are taught to the same standard as in the full programme.",
      countryNote:
        "Requests for CP from Dumka are uncommon; we treat the Diploma subjects as we would for any DP student.",
    },
  ],

  subjectsIntro:
    "Give us the subject, the level and the exam session, and we look for a tutor who has taught that exact course. The same principle applies throughout: a person who is strong at IB Maths Analysis and Approaches Standard Level is not automatically the right choice for Applications and Interpretation Higher Level.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus, algebra and proof for students aiming at engineering, science or economics with a strong mathematical base." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling with a graphing calculator, suited to life sciences, business and social sciences." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves, electricity and modern physics, with regular practice in estimating uncertainty." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, bonding, energetics, rates and organic reactions, with data booklet fluency built early." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology, organised around how command terms shape a full answer." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, data response and evaluation, using cases such as mining, forest produce and handloom trade in the Santhal Pargana." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study analysis and the internal research project, often built on a local enterprise." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis and comparative writing for students whose first language may be Hindi, Bengali or Santhali." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, writing and oral practice." },
    { name: "IB Bengali A and B", levels: "HL / SL", description: "Literature or language study for the town's Bengali-speaking families, subject to tutor availability." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, coding practice and a staged internal project." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking with a plateau region of forests, reservoirs and mining as the case study." },
    { name: "IB Geography", levels: "HL / SL", description: "Resource use, tectonic and river processes, and fieldwork technique." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and essay writing, including the nineteenth-century Santhal rebellion as a local anchor." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, research methods and essay structure." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel both award IGCSEs, and their paper formats, tier names and question styles are not identical. We therefore confirm the board and the syllabus code before proposing a tutor. The subjects below are those that families in Jharkhand ask for.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths across two papers, with careful drills in algebra and shape for Extended candidates." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "A bridge to Diploma Maths for students who find the main course comfortable." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Two papers, each worth half, with marks for method." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, forces, electricity and waves, plus questions on planning experiments." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, stoichiometry, electrolysis and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, nutrition, reproduction and ecology." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing and speaking for students from Hindi, Bengali and Santhali-speaking homes." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming, data and networks." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Physical and human geography with an emphasis on case-study evidence." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Introductory economics and data questions." },
  ],

  regionsTitle: "Dumka neighbourhoods and Santhal Pargana towns we reach online",
  regionsIntro:
    "A video lesson is the same from any address. The local detail that matters is the household routine, the connection and the power supply, so each note below speaks to that.",
  regions: [
    { name: "Dumka town centre", note: "The busy market and government quarter; many parents work in offices, so lessons after six suit them." },
    { name: "Sidhu Kanhu area near the university", note: "Close to the campus, where university staff and students make up many households; term and exam weeks shape the timetable." },
    { name: "Bhagalpur Road side", note: "A long commercial and residential stretch on the road to Bhagalpur; traffic noise is worth planning around." },
    { name: "Dumka Court and Collectorate area", note: "An administrative neighbourhood of government housing, home to officers who may be transferred, which prompts many enquiries about portable boards." },
    { name: "Medical college area", note: "Doctors and staff families, often with clear ambitions for international study, live here." },
    { name: "Basukinath Road and Deoghar side", note: "The road towards the pilgrimage town of Basukinath; the Shravani Mela in July and August brings heavy traffic." },
    { name: "Jarmundi and Jama", note: "Nearby blocks where students come into town for school; afternoons are short and evening power can be uneven." },
    { name: "Shikaripara and Maluti", note: "Villages in the terracotta temple belt, with limited broadband; a mobile hotspot is a sensible back-up." },
    { name: "Masanjore and Mayurakshi side", note: "South of Dumka near the dam on the Mayurakshi river; monsoon travel can be difficult." },
    { name: "Deoghar and Jamtara", note: "Neighbouring district towns whose students sometimes link in for subjects a nearby tutor cannot cover." },
  ],

  schoolDisclaimer:
    "The schools named here show where IB and IGCSE classrooms exist within the wider region. IB Gram has no agreement with any of them, nor with the IB, Cambridge or Pearson. Please confirm each school's programmes, fees and seat availability yourself before making a decision.",
  schoolClusters: [
    {
      city: "Local: Dumka",
      note: "We could not confirm any school in Dumka that teaches the IB or a Cambridge or Edexcel IGCSE, so none is listed. Local choice is between Jharkhand board, CBSE and ICSE schools.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The nearest major city with established IB campuses, reached by train from the Santhal Pargana, and a common boarding or relocation choice.",
      schools: ["Calcutta International School", "The Heritage School", "Oaktree International School"],
    },
    {
      city: "Nearby: Delhi NCR boarding routes",
      note: "Families with the means to board a child sometimes choose established IB schools in the Delhi NCR region for the range of options available.",
      schools: ["Pathways World School", "GD Goenka World School"],
    },
    {
      city: "Nearby: Mussoorie",
      note: "A boarding school in the Himalayan foothills with the IB Diploma, considered by a handful of families from eastern India.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],

  modesIntro:
    "Every Dumka student studies online. Families then pick a rhythm: a single weekly lesson, a planned term with reviews, or a short push before papers.",
  modes: [
    {
      title: "A lesson at the same hour each week",
      description:
        "One tutor, one slot. The student arrives with questions, the tutor teaches the next topic and corrects working as it is written on screen.",
      bullets: [
        "A tutor matched to subject, level and board",
        "Generally an hour a week",
        "Live writing on a shared whiteboard",
        "Good for IGCSE and MYP students",
      ],
    },
    {
      title: "A term plan with notes and reviews",
      description:
        "A roadmap for the term, a written note after every class and a review every few weeks, so the order of topics can change if school runs ahead or behind.",
      bullets: [
        "Notes a parent can read without specialist knowledge",
        "Review calls or messages",
        "Works beside a school timetable",
        "Extra sessions before class tests",
      ],
    },
    {
      title: "An intensive before papers",
      description:
        "Ahead of mocks and the May or November sessions, lessons come more often and revolve around timed questions with careful marking.",
      bullets: [
        "Marked against the board's own scheme",
        "Two to four sessions a week if feasible",
        "Avoids Durga Puja and Sohrai",
        "Best begun three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Dumka have an IB or IGCSE school, and where do families go instead?",
      paragraphs: [
        "We could not confirm an IB or IGCSE school in Dumka. The town has well-known government and private schools, a central school and several CBSE and ICSE campuses, but none that we can verify for an international board. If an institution says otherwise, ask to see its authorisation and the list of subjects it teaches.",
        "For families who want an international board, the nearest verified options are in other states. Kolkata is reachable by train and has Calcutta International School, The Heritage School and Oaktree International School. Delhi NCR has campuses such as Pathways World School and GD Goenka World School, and Woodstock School in Mussoorie offers the IB Diploma for boarders.",
        "Each of these routes means a large decision: moving house, boarding a teenager or placing a younger child far from home. Many Dumka families decide to keep their child on a local board and to add an international-level subject or two with online help, at least until a move becomes possible.",
        "An honest word about tutoring belongs here. We cannot place a child in an IB school, and a tutor cannot issue an IGCSE certificate. We can prepare a child for an admission test, support a boarder at weekends or coach a private candidate who has found an exam centre.",
      ],
    },
    {
      heading: "How do Jharkhand board, CBSE, ICSE, IGCSE and IB compare for a Dumka student?",
      paragraphs: [
        "The Jharkhand Academic Council conducts matriculation and intermediate exams, usually from February to March. CBSE and ICSE follow national syllabi on a similar timetable. IGCSE and IB are international, with written sessions in May and November, and the language of instruction is English.",
        "Students from state-board classrooms often excel at recall and calculation. International papers ask them to interpret an unfamiliar case, decide on a method and explain the reasoning in a paragraph. Early tutoring therefore concentrates on English writing, command words and the habit of showing every step.",
        "For Indian university entry, international certificates need equivalence from the Association of Indian Universities in many cases, and national tests such as JEE, NEET and CUET-UG have their own rules. Jharkhand's state quotas may depend on the school of final examination, so check before you switch boards.",
        "For a Dumka household the decisive question is where the child will finish school and what follows. If the answer is Kolkata, Delhi or a university abroad, an international board is a reasonable choice. If it is a Jharkhand state seat, a local or national board usually gives a smoother path.",
      ],
      table: {
        caption: "Board choices for Dumka at a glance",
        columns: ["Board", "Who takes it", "What the examiner values", "Main exam months"],
        rows: [
          ["Jharkhand Academic Council", "Most government and many private schools", "Accuracy and recall, Hindi or English medium", "February to March"],
          ["CBSE", "Central and private schools", "Concepts and application", "February to March"],
          ["ICSE / ISC", "A few English-medium schools", "Breadth and written English", "February to March"],
          ["Cambridge or Edexcel IGCSE", "Schools in larger cities", "Applied problems and tier choice", "May to June, October to November"],
          ["IB Diploma", "Schools in larger cities", "Six subjects, essays, internal assessment", "May and November"],
        ],
      },
    },
    {
      heading: "How is the cost of IB or IGCSE tutoring decided in Dumka?",
      paragraphs: [
        "We do not list a price because the rate depends on the student. After the free trial lesson you receive it in writing, and no payment is taken until you accept. The figure reflects the course level, the subject, how long the tutor has taught the syllabus and how many lessons a week you want.",
        "IB Physics at Higher Level calls for deeper preparation than IGCSE Core English, and rates follow. A tutor who has seen a syllabus through many cohorts can often save a student weeks of confusion, so a higher hourly rate can turn out cheaper across a term.",
        "What a Dumka family can compare it with is the price of the alternative. Sending a child to Kolkata or Ranchi for specialist classes means train tickets, lodging and days away from school. A lesson at home leaves those costs out.",
        "Take the trial first, review the written rate and decide. Changing tutor, altering the plan or stopping is always allowed.",
      ],
      bullets: [
        "Course level: IB HL or SL, IGCSE Core, Extended, Foundation or Higher",
        "Subject and the tutor's experience with that syllabus",
        "Number and length of weekly lessons",
        "A steady plan or a short intensive",
      ],
    },
    {
      heading: "Should a Dumka student choose online tuition, coaching elsewhere, a local tutor or self-study?",
      paragraphs: [
        "Coaching in Ranchi, Kolkata and Bhagalpur is oriented towards JEE, NEET and board exams, and few centres run IB or IGCSE classes. A family would also pay for lodging or daily travel. An online lesson gives access to a specialist without either.",
        "Local tutors in Dumka are plentiful for state-board and CBSE subjects, and many are dedicated teachers. They are a good fit when the goal is general subject support, but few have worked with IB criteria or IGCSE mark schemes.",
        "Self-study with past papers can carry a determined IGCSE student through Maths and the sciences. It is weak where a student needs a reader to judge an essay, a lab report or the structure of a long answer.",
        "One-to-one online teaching pairs syllabus knowledge with personal attention, provided the connection is reliable. Tutors and families agree a fallback in advance, such as a mobile hotspot and photographed working.",
      ],
      table: {
        caption: "Ways to prepare for IB or IGCSE from Dumka",
        columns: ["Route", "Advantage", "Drawback"],
        rows: [
          ["Online one-to-one", "Exact syllabus, attention to one child", "Needs a dependable connection"],
          ["Coaching in another city", "Large peer group and structure", "Rarely IB or IGCSE; travel and lodging"],
          ["Local private tutor", "Easy, familiar, flexible", "Limited IB and IGCSE experience"],
          ["Self-study", "Cheap and self-paced", "No feedback on written work"],
        ],
      },
    },
    {
      heading: "What do Durga Puja, Sohrai and the monsoon mean for a Dumka study year?",
      paragraphs: [
        "Durga Puja in October is a major event for the town's Bengali community and for many others, with pandals, late evenings and several days of closure. Diwali follows soon after, and Sohrai, the harvest festival of the Santhal and other communities, falls in the same season. These weeks are hard to study in, and they sit next to the IGCSE October and November sessions and the IB November papers.",
        "Dumka records about 1,400 mm of rain a year, most of it from late June to September. Roads turn slippery, rivers such as the Mayurakshi rise and mobile data can be patchy. A plan should include a fallback for a missed lesson.",
        "Hul Diwas on 30 June remembers the Santhal rebellion and is marked locally, and the Shravani Mela in Basukinath and Deoghar in July and August brings heavy traffic on the main road. Families living along that corridor often prefer to keep lessons short and close to home.",
        "From December to January, winters are mild and dry, which is a good time for longer sessions and for catching up before the March exam season.",
      ],
      table: {
        caption: "A Dumka study calendar",
        columns: ["Months", "What is happening", "What it means for lessons"],
        rows: [
          ["Dec to Feb", "Mild winter, Hijla fair, board exams begin", "Longer sessions, then lighter during boards"],
          ["Mar to May", "Heat builds, IB May session, IGCSE May to June", "Timed papers after sunset"],
          ["Jun to Sep", "Monsoon, Hul Diwas, Shravani Mela", "Plan for outages; keep topics moving"],
          ["Oct to Nov", "Durga Puja, Sohrai, Diwali, November sessions", "Finish revision before the festival weeks"],
        ],
      },
    },
    {
      heading: "What can an IB or IGCSE student from Dumka study next?",
      paragraphs: [
        "Within India, students from Jharkhand often look to Kolkata, Delhi, Bengaluru and Pune. Presidency University, Jadavpur University, Ashoka University, Flame University and Christ University are common names, and each has its own eligibility and admission test. Read the current prospectus for the exact rules.",
        "IB Diploma holders may apply to central universities through CUET-UG, and IB and IGCSE certificates are compared with Class 12 through equivalence from the Association of Indian Universities. The guidance changes from year to year, so always read the most recent notice.",
        "For engineering, Physics, Chemistry and Maths prepare a student for JEE Main and Advanced. For medicine, Biology with Physics and Chemistry prepares for NEET-UG. Decide on the subject package before the course begins, since changing later is difficult.",
        "Overseas, IB and IGCSE results are accepted across the UK, Canada, Australia and Europe, and US colleges read them with tests and essays. Tutors help with subject content and do not write application essays.",
      ],
    },
    {
      heading: "Why do IB Maths and the sciences feel hard, and how does tutoring help?",
      paragraphs: [
        "IB Maths is about reasoning. Analysis and Approaches expects each algebraic step to be defensible, while Applications and Interpretation expects the student to judge a model and its limits. Both courses include an Exploration, an independent piece worth a fifth of the grade.",
        "In Physics, marks go missing through absent units and poorly drawn graphs. Chemistry involves long calculations, and speed with the data booklet saves minutes. Biology is broad, and what earns full marks often depends on reading the command term accurately.",
        "With internal assessment, a tutor explains the criteria, helps a student select a question that can be investigated, reads a draft and notes where a criterion is unmet. The student's own data and writing remain the student's.",
        "A Dumka student who has come through state-board Maths has a strong calculation base, and a tutor builds on that while training the habit of writing out explanations.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: choosing an IGCSE tier",
      paragraphs: [
        "In Cambridge IGCSE, the Core tier caps at grade C and the Extended tier reaches A*. In Pearson Edexcel, Foundation caps at grade 5 and Higher reaches 9. A student aiming at Higher Level Maths or sciences in the Diploma should plan for the upper tier.",
        "The school usually chooses the tier. A private candidate, or a family comparing two schools, should sit a diagnostic paper and talk to the school or exam centre if the result is close to a boundary.",
        "Subject choice follows ambition. Future engineers and doctors take Maths, the three sciences and possibly Computer Science. Those drawn to commerce add Economics and Business Studies. A language paper rounds out the set.",
        "Always confirm the board and code before starting, so that the tutor prepares for the right paper.",
      ],
    },
  ],

  tutorsIntro:
    "Dumka students are matched by programme, subject, level and board. Each tutor teaches from India in IST and comes with a short note on the syllabus they have taught and why they suit your child.",

  process: [
    { title: "Share the details", description: "Board or programme, subject, level, present school and the evenings that work for your Dumka household." },
    { title: "Get a tutor suggestion", description: "We name a tutor and describe the syllabus they have already taught." },
    { title: "Take the free trial", description: "A genuine online lesson, free and with no strings." },
    { title: "Agree in writing", description: "Lesson frequency, rate and first-month topics are recorded before any payment." },
    { title: "Review as you go", description: "Regular lessons with notes, periodic reviews and an easy switch of tutor." },
  ],

  whyPoints: [
    { title: "Right tutor, right paper", description: "We match on the subject, level and exam board your child faces." },
    { title: "Honest about local schools", description: "We tell you plainly that no Dumka school is confirmed for IB or IGCSE." },
    { title: "Judge before you pay", description: "The free trial lets you see the teaching first." },
    { title: "Firm limits", description: "Tutors will not write assessed work." },
    { title: "Parents in the loop", description: "A note after every lesson and regular reviews." },
    { title: "Simple to switch", description: "If the match is wrong, we find another tutor quickly." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Dumka?", answer: "Not one we can confirm. Dumka schools follow the Jharkhand board, CBSE or ICSE. The nearest IB campuses we can verify are in Kolkata, Delhi NCR and Mussoorie. Ask any school that advertises an international curriculum for its official authorisation." },
    { question: "Can I arrange IB home tuition in Dumka?", answer: "You can arrange online home tuition: a live private lesson at home with a specialist tutor elsewhere in India. The tutor does not come to Dumka. In-person tuition exists only in Gurugram and parts of Delhi NCR, and we say so before you book." },
    { question: "Do you have IGCSE tutors for Dumka students?", answer: "Yes, for Cambridge and Pearson Edexcel. We match on syllabus code and tier, for instance Cambridge 0610 Biology or Edexcel 4MA1 Mathematics A. Lessons are online in IST, and we ask about the board before suggesting anyone." },
    { question: "Will a tutor visit my house in Dumka?", answer: "No. Tutors do not visit homes in Dumka. Lessons are online, live and one to one. Your child needs a laptop or tablet, a stable connection and a quiet table, and the tutor reads the working on a shared whiteboard." },
    { question: "What is the cost of IB or IGCSE tuition in Dumka?", answer: "It depends on level, subject, tutor experience and weekly hours, so we publish no figure. After the free trial you get a written rate that you can compare with the cost of lodging or travel to another city." },
    { question: "Which schools near Dumka offer the IB or IGCSE?", answer: "None in Dumka that we can confirm. Kolkata has Calcutta International School, The Heritage School and Oaktree International School on our pages, and Delhi NCR has Pathways World School and GD Goenka World School. Check each school's current offer and admissions yourself." },
    { question: "Is the first lesson free?", answer: "Yes. Your child takes a real online lesson with the proposed tutor, free and without obligation. After it you decide whether to continue, and the rate is put in writing before any booking." },
    { question: "Can a tutor write my child's IA or Extended Essay?", answer: "No. A tutor can explain criteria, help narrow a topic, review a plan and comment on drafts. The research, data and writing must be the student's, and we decline requests to produce assessed work." },
    { question: "Which IB Diploma subjects can you cover?", answer: "Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Hindi, Bengali, Computer Science, ESS, Geography, History and Psychology, at Higher or Standard Level. If your mix is unusual, ask and we will say whether we can staff it." },
    { question: "Do you teach MYP and PYP to Dumka children?", answer: "Yes. PYP lessons are short and activity-led, built around reading and number sense. MYP lessons address criterion-based writing, science investigations and the Personal Project. A written note follows each class." },
    { question: "Is online tutoring as good as classes in a big city?", answer: "For most subjects, yes, with a stable connection. Tutor and student share a whiteboard and solve problems together. For Dumka the gain is that the tutor is chosen for syllabus experience, and the child does not travel or pay for lodging." },
    { question: "How do you choose tutors for Dumka students?", answer: "We check qualifications, recent teaching of the exact syllabus and clarity of explanation, then match to your child's level and target. The trial lesson tests the match before you commit." },
    { question: "When should tutoring begin?", answer: "At the start of the course if possible, Grade 9 for IGCSE and Class 11 for the Diploma. A child preparing for an admission test can begin a term earlier and focus on English writing and Maths." },
    { question: "My child is in a Jharkhand board school. Can we switch to IB or IGCSE?", answer: "A switch needs a school seat, which tutoring cannot provide. A tutor can prepare your child for the applied style, repair gaps and strengthen English writing before the first term." },
    { question: "Can lessons fit around Durga Puja and the monsoon?", answer: "Yes. Most Dumka families choose evenings after school and Sunday mornings, and we avoid Durga Puja, Sohrai and board weeks. In heavy rain, tutors agree a fallback such as audio and photographed working." },
    { question: "What if my child and the tutor do not get on?", answer: "Tell us and we will arrange another tutor. Early check-ins catch a poor fit, and the written plan keeps expectations clear." },
    { question: "Is IB Gram linked to any school or exam board?", answer: "No. IB Gram is independent and has no tie to the IB, Cambridge, Pearson or any school in Dumka, Kolkata, Delhi NCR or elsewhere. Schools named on this page are there for context only." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "Online tuition in cities nationwide." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person visits are available." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "IB programmes and subjects." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Core, subjects and scoring." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry learning for early years." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA versus AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Backgrounds and subjects." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write or WhatsApp to begin." },
    { label: "IB and IGCSE tutoring in Deoghar", href: "/deoghar/", description: "The neighbouring Santhal Pargana city." },
    { label: "IB and IGCSE tutoring in Ranchi", href: "/ranchi/", description: "Jharkhand's capital." },
    { label: "IB and IGCSE tutoring in Bhagalpur", href: "/bhagalpur/", description: "The nearest large Bihar city." },
    { label: "IB and IGCSE tutoring in Kolkata", href: "/kolkata/", description: "The nearest major IB hub." },
  ],

  closingHeading: "Book a free trial lesson for your Dumka student",
  closingBody:
    "Send us the programme or board, the subject, the level and the evenings that work in your Dumka home. We will propose a tutor, explain the match and arrange a free online trial. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
