import type { CitySeoPage } from "../types";

/**
 * /wara-seoni/ - IB and IGCSE tutoring for Waraseoni ("Rice City"), Balaghat district, Madhya Pradesh,
 * about 16 km from Balaghat (Wikipedia). No IB or Cambridge/Edexcel school in Waraseoni could be
 * confirmed, so stripSchools is empty and clusters reuse names from verified Jabalpur and Nagpur pages.
 * All lessons online.
 */
export const waraSeoni: CitySeoPage = {
  slug: "wara-seoni",
  countryName: "Waraseoni",
  countryNameLong: "Waraseoni, Balaghat, Madhya Pradesh",
  demonym: "Waraseoni",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and weekend slots that make way for the paddy harvest, monsoon storms, Diwali and the MP Board exam weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.7664, longitude: 80.0494 },
  wikipedia: "https://en.wikipedia.org/wiki/Waraseoni",
  alternateNames: ["Wara Seoni", "Warasivni", "Waraseoni Balaghat", "Varaseoni"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Waraseoni | Online Home Tuition",
  metaDescription:
    "Waraseoni (Balaghat, MP) students can take IB and IGCSE lessons online with private tutors, planned around paddy harvest and monsoon. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Waraseoni",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR WARASEONI, BALAGHAT",
  heroSubtitle:
    "Looking for home tuition in Waraseoni for an IB or IGCSE student? The workable answer is a live private lesson at your own desk, over video, with a specialist who teaches from another Indian city. Waraseoni, the rice-mill town of Balaghat district, is about 16 km from the district headquarters and a long way from any international-board classroom.",
  primaryKeyword: "IB and IGCSE tutors in Waraseoni",
  imageAltText: "A Waraseoni student in Balaghat district in a live online IB Biology lesson with a tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Waraseoni",
    "IGCSE tutor Waraseoni",
    "IB home tuition Waraseoni",
    "IGCSE home tuition Waraseoni",
    "IB private tuition Waraseoni",
    "IB Maths tutor Waraseoni",
    "IGCSE Maths tutor Waraseoni",
    "IB Physics tutor Waraseoni",
    "IB Chemistry tutor Waraseoni",
    "IB Biology tutor Waraseoni",
    "IB DP tutor Waraseoni",
    "IB MYP tutor Waraseoni",
    "IB PYP tutor Waraseoni",
    "IGCSE online tuition Waraseoni",
    "IB tutor Wara Seoni",
    "IB tutor Balaghat district",
    "IGCSE tutor Katangi Lalbarra",
    "online IB tutor Madhya Pradesh",
    "Cambridge IGCSE tutor Waraseoni",
  ],

  heroTrustPoints: [
    "Tutors who have already taught the very IB subject or IGCSE paper code",
    "Lessons in Waraseoni are online; in-person tuition exists only in Gurugram and parts of Delhi NCR",
    "A written recap after every class, and a new tutor if the fit is not right",
    "A free trial lesson, and a rate in writing before you decide",
  ],
  heroStats: [
    { value: "Balaghat district", label: "Waraseoni, Madhya Pradesh" },
    { value: "PYP to DP", label: "The IB end to end" },
    { value: "Cambridge + Edexcel", label: "IGCSE boards" },
    { value: "Free trial", label: "One real lesson first" },
  ],

  intro: {
    heading: "Waraseoni, the rice town of Balaghat, and international-board tuition at home",
    paragraphs: [
      "Waraseoni is the second-largest town in Balaghat district, on the Balaghat-Katangi railway line and within an easy road run of Gondia across the Maharashtra border. Rice dominates the economy: the local panchayat calls it the Rice City, mills stand along the approach roads, and an industrial area by the Wainganga river adds to the working life. The town also takes pride in its freedom-fighter history, an old Jain temple, a Shiv temple and the picnic spot at Ramrama.",
      "The town's schools teach to the Madhya Pradesh Board or CBSE, and none that we checked is confirmed for the IB or for Cambridge or Pearson Edexcel IGCSE. Questions about these boards nevertheless arrive, and they tend to come from three kinds of household: families with a child at an international school in Nagpur or Jabalpur, parents planning a move to a bigger city, and those who want their children ready for university abroad.",
      "For them, IB Gram runs private classes over video. Your child works at home with a laptop and notebook, while a teacher in another part of India, someone who has handled this syllabus before, follows each line on a shared screen. We do not send anyone to Waraseoni, because teaching at the doorstep is available only in Gurugram and parts of Delhi NCR.",
      "IB Gram stands apart from the IB, Cambridge, Pearson and every school mentioned on this page. Tutors explain, mark and advise. They do not write Internal Assessments, Extended Essays, TOK essays or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, with Cambridge and Pearson Edexcel IGCSE",
      "Live private lessons in English, with Hindi or Marathi explanation when it helps",
      "A free trial lesson before any fee is discussed",
      "No visits to the home in Waraseoni, because home visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "For Waraseoni families the IB is reached by planning rather than proximity, so the notes below describe each stage the way a tutor meets it: what the child must show, and what usually needs work first.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Children work through themed units, asking questions and presenting findings, and finish with a group Exhibition. No board paper exists at this level. Tutors build reading fluency, comfortable arithmetic and the ability to describe in a few sentences what they noticed.",
      countryNote:
        "A young child from Waraseoni usually meets PYP lessons before a school change or a family move, so sessions are short and conversational.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers assess against published criteria across eight subject groups, and the personal project at the end asks for months of independent planning. For a child used to MP Board textbooks, the new demand is giving reasons and evaluating evidence.",
      countryNote:
        "MYP candidates from the Balaghat area need early help with science investigations, essay-style answers and managing a long project.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three or four of them at Higher Level, plus the Extended Essay, Theory of Knowledge and CAS. The total is out of 45, exams run in May or November, and coursework deadlines come early in the second year.",
      countryNote:
        "Diploma students tied to Waraseoni mostly board at a school in another city and use online lessons on holidays at home.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP combines Diploma courses with a career-related qualification and a core of service and reflection. Hardly any Indian schools run it, and the Diploma courses it contains are taught to the full Diploma standard.",
      countryNote:
        "CP requests from Balaghat district are rare; when they come, the Diploma subjects are taught exactly as for DP.",
    },
  ],

  subjectsIntro:
    "Give us the subject, the level and the exam session, and the hunt is for a person who has taught precisely that. Take Maths: IB runs two courses, Analysis and Approaches and Applications and Interpretation, each at HL and SL, so a superb tutor for one pairing may be a poor fit for another.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus, algebra and proof. MP Board students bring fast technique, and lessons add a fully written chain of reasoning." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling with a graphing calculator, practised on data such as paddy yields and monsoon rainfall." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, circuits and fields, with attention to units, uncertainty and well-labelled graphs." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Moles, bonding, energetics, equilibrium and organic chemistry, using the data booklet from lesson one." },
    { name: "IB Biology", levels: "HL / SL", description: "A wide syllabus turned into routine recall and application; the forests and wetlands of Balaghat district provide natural ecology examples." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and evaluation, with rice milling, minimum support prices and mining employment as local material." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies, operations and finance tools and the internal research project, valuable for mill-owning families." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Reading unseen texts closely and building comparative arguments, for students who speak Hindi or Marathi at home." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, writing and speaking for fluent Hindi speakers." },
    { name: "IB Marathi B", levels: "HL / SL", description: "Language skills for students with Marathi at home, a real group given Balaghat's border with Maharashtra." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and the project, built step by step." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems models and case studies on the Wainganga basin, forest cover and mining impacts." },
    { name: "IB Geography", levels: "HL / SL", description: "Resources, hazards and development, with river flooding and mineral extraction as cases." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and essay structure, with the independence movement an accessible starting point." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, methods and structured essays." },
  ],

  igcseSubjectsIntro:
    "IGCSE is run by two boards, Cambridge and Pearson Edexcel, which differ in paper layout, tiers and wording of questions. A tutor has to know which board your child will sit. The list below shows what Waraseoni families ask for most.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths with calculator and non-calculator papers; Extended pupils spend most time on algebra and geometry." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "A bridge to IB HL Maths, with early calculus." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Two equally weighted papers, with method marks throughout." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy, electricity and waves, with alternative-to-practical practice." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atoms, reactions, rates and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, transport, inheritance and ecosystems." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing, listening and speaking for students from Hindi-speaking homes." },
    { name: "IGCSE First Language English 0500", levels: "Grade 9-10", description: "Writing for different audiences and purposes." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, networks and data." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Physical and human geography with fieldwork-style questions." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "An approachable subject for Hindi-speaking students." },
  ],

  regionsTitle: "Waraseoni and the Balaghat district towns we teach online",
  regionsIntro:
    "The lesson looks identical wherever the student sits. What differs is the household day: the mill shift, the bus to Balaghat, the evening power supply. The notes below describe how families in each part of the district tend to plan study.",
  regions: [
    { name: "Waraseoni town centre", note: "The market and administrative area; many households are in trade or the rice business, so evening lessons follow shop closing." },
    { name: "Rice-mill belt", note: "Mills along the approach roads employ many families and run hardest after the paddy harvest, so exam revision is better done before it." },
    { name: "Garra industrial area", note: "An industrial stretch beside the Wainganga river, where shift patterns shape the evening routine." },
    { name: "Ramrama", note: "The local picnic spot, a weekend landmark; Sundays here are often family days, so lessons start later." },
    { name: "Railway station area", note: "On the Balaghat-Katangi line, with trains towards Gondia; useful for students who travel to a bigger city school." },
    { name: "Balaghat city", note: "The district headquarters, about 16 km away, with the larger schools, coaching centres and hospitals." },
    { name: "Katangi", note: "A town on the line to the south, whose students would otherwise travel far for any specialised class." },
    { name: "Lalbarra", note: "A town in the district with a similar mix of farming and trading families." },
    { name: "Gondia", note: "The Maharashtra railway junction across the border, where some Waraseoni families have work or relatives." },
    { name: "Nagpur", note: "The big city roughly 145 km away by road, with the nearest cluster of international-board schools." },
  ],

  schoolDisclaimer:
    "The schools below are mentioned purely as signposts to bigger cities that Waraseoni families consider. IB Gram holds no agreement with them, and no link to the IB, Cambridge or Pearson. Programmes and admission terms change, so always check with the school itself.",
  schoolClusters: [
    {
      city: "Local: Waraseoni and Balaghat district",
      note: "We could not confirm any school in Waraseoni or the district that runs the IB or an IGCSE. Local schools follow the MP Board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Nagpur",
      note: "Nagpur, across the Maharashtra border, has the nearest group of international-board campuses. These names also appear on our Nagpur page.",
      schools: ["D Y Patil International School, MIHAN", "Centre Point School International", "VIBGYOR World Academy"],
    },
    {
      city: "Nearby: Jabalpur",
      note: "Jabalpur is the divisional city and appears on our Balaghat page with schools of this kind.",
      schools: ["Little World School", "The Sanskaar Valley School, Chandanpura"],
    },
  ],

  modesIntro:
    "Everything for Waraseoni runs online. What differs is the rhythm, and three patterns are common.",
  modes: [
    {
      title: "A standing weekly class",
      description:
        "One tutor, one fixed hour. The student brings the week's difficulties, the tutor teaches the next topic and marks the working while it is written.",
      bullets: [
        "A tutor picked for your subject, level and board",
        "Often an hour, once or twice a week",
        "Handwriting shared by camera or tablet",
        "Suits IGCSE, MYP and DP",
      ],
    },
    {
      title: "A planned term with recaps",
      description:
        "A map of the term, a recap after every class in plain language and a short review call every few weeks to reorder topics.",
      bullets: [
        "Recaps a parent can follow without IB knowledge",
        "Review calls rather than surprises",
        "Combines with school and tuition",
        "Extra revision before unit tests",
      ],
    },
    {
      title: "Pre-exam sprints",
      description:
        "Ahead of mocks and the May or November sessions, lessons become timed past papers with careful, detailed marking.",
      bullets: [
        "Marking in the examining board's own style",
        "Two to four classes a week when the household can manage",
        "Arranged away from Diwali and harvest peaks",
        "Best started three weeks before paper one",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Waraseoni or Balaghat district?",
      paragraphs: [
        "None that we could confirm. Waraseoni's schools are affiliated to the Madhya Pradesh Board or to CBSE, and our Balaghat page found the same across the district. Anyone offered an IB or IGCSE seat locally should ask for the authorisation and the current subject list in writing.",
        "A family that wants an international board therefore looks outward. Nagpur is the closest large city with such campuses, roughly 145 km by road, and Jabalpur is the divisional centre with a few more. Some households move a parent and child to the new city, others use boarding, and a few wait until Class 9 or 11.",
        "Entry tests, age cut-offs and fees are set school by school, and seats in the key transition years fill early. A family that starts planning a year ahead has real choices; one that starts in spring often does not.",
        "That planning gap is where online tuition helps. A student can start writing in IGCSE or MYP style at the local school, so the first term in the new classroom is spent learning content, not catching up on technique.",
      ],
    },
    {
      heading: "How do MP Board, CBSE, IGCSE and IB compare for Waraseoni students?",
      paragraphs: [
        "The Madhya Pradesh Board examines Class 10 and 12 in February and March, in Hindi or English. CBSE follows a national syllabus in the same months. IGCSE and IB are assessed internationally, mainly in May and November, and their papers pay for reasoning, units and clear writing rather than recall alone.",
        "Pupils from MP Board schools usually bring hard work and a reliable memory. Under an international board the extra marks are earned by showing steps, defining terms and writing in full sentences, and that is where early tutoring concentrates.",
        "Language deserves thought. Balaghat district is Hindi-speaking with a notable Marathi presence on the Vidarbha side, and the papers are in English. Maths and science cross the gap quickly once command words are known; essay subjects take longer.",
        "The right board follows the destination. A seat through JEE or NEET points towards CBSE or the MP Board, while the Diploma, a private university or a foreign degree points towards IGCSE first and IB afterwards.",
      ],
      table: {
        caption: "Board options for a Waraseoni family",
        columns: ["Board", "Where it is taught", "Feel of the exam", "Main exam months"],
        rows: [
          ["MP Board", "Most schools in the district", "Textbook recall, Hindi or English medium", "Feb-Mar"],
          ["CBSE", "A handful of private schools", "National syllabus with application questions", "Feb-Mar"],
          ["Cambridge or Edexcel IGCSE", "Nagpur, Jabalpur and boarding schools", "Tiered papers and command words", "May-Jun, Oct-Nov"],
          ["IB Diploma", "Nagpur, Jabalpur and boarding schools", "Six subjects plus core and internal assessment", "May, Nov"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Waraseoni family?",
      paragraphs: [
        "No two children need the same package, which is why the website lists no fees. The quote is sent in writing after the trial lesson and rests on four factors: the difficulty of the course, the subject, the tutor's years on that particular syllabus, and the weekly hours you ask for.",
        "Teaching Higher Level IB Chemistry is not the same job as coaching IGCSE Foundation Maths, and experienced tutors charge for it. They also tend to need fewer hours to bring a student to standard, so a higher hourly rate can mean a lower total.",
        "Online learning saves in other ways. There is no fare on the Waraseoni-Balaghat-Nagpur road, no day lost to travel, and no rent for a room in a city only to attend classes. For a family already paying fees, those savings add up.",
        "Our advice is to take the trial lesson, read the quote and compare it with what coaching costs now. You can stop or switch tutor whenever you wish.",
      ],
      bullets: [
        "Course level: IB Higher or Standard, IGCSE Core, Extended, Foundation or Higher",
        "Subject, and the tutor's experience with that syllabus",
        "Hours per week and length of each class",
        "Steady plan or exam sprint",
      ],
    },
    {
      heading: "Online tutor, classes in Nagpur, a local tutor or self-study?",
      paragraphs: [
        "Nagpur has a rich pool of teachers for international boards, but commuting 145 km each way from Waraseoni is out of the question for a school student. Online lessons put the same kind of specialist at the family desk.",
        "Coaching centres in Balaghat concentrate on board exams, JEE and NEET. An IB or IGCSE student may find the class built for other syllabi, with teachers who have not marked an IB Internal Assessment or a Cambridge practical paper.",
        "A local private tutor is easy to arrange and often skilled in school subjects. The shortfall is syllabus-specific knowledge, which is thin in smaller towns.",
        "Self-study with past papers is realistic for a disciplined student in IGCSE Maths and sciences. Essays and coursework are harder, because a reader who knows the criteria is needed to point out lost marks.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Waraseoni",
        columns: ["Route", "Strength", "Limit"],
        rows: [
          ["Online one-to-one", "Exact syllabus, personal feedback", "Needs a stable internet connection"],
          ["Classes in Nagpur", "In-person, many options", "145 km each way, not practical"],
          ["Local coaching in Balaghat", "Peers and exam discipline", "Built for other boards"],
          ["Local private tutor", "Convenient and familiar", "Little IB or IGCSE experience"],
          ["Self-study", "Free and flexible", "No marking of essays or open answers"],
        ],
      },
    },
    {
      heading: "How do monsoon, paddy harvest and festivals shape the study year in Waraseoni?",
      paragraphs: [
        "Balaghat district is humid and green, with a strong monsoon from June to September. Storms bring power cuts and weak mobile signal, and rivers like the Wainganga rise. Lessons in those months need a fallback, such as a shorter call, recorded notes or a swap to another evening.",
        "The kharif paddy comes in during October and November, and the mills hum for weeks afterwards. Parents and older children may be busy, so a fixed slot that does not depend on an adult at home works better than ad hoc timing.",
        "Diwali falls in October or November, close to the Cambridge October-November session and the IB November session, so revision should be wound up before the festival. Maha Shivratri in February or March draws many to the Shiv temple, and the same weeks carry board exams.",
        "Summers are hot, especially in April and May. Afternoon power cuts are common, so we prefer evening lessons and ask families to share the hours when electricity is dependable.",
      ],
      table: {
        caption: "A study calendar for an IB or IGCSE student in Waraseoni",
        columns: ["Months", "What is happening", "Planning note"],
        rows: [
          ["Jan-Feb", "Cool and dry, board season starts, Maha Shivratri", "Steady evening lessons; lighter in board weeks"],
          ["Mar-May", "Heat builds, IB May and IGCSE summer sessions", "Timed papers after sunset; plan for power cuts"],
          ["Jun-Sep", "Monsoon, school restart", "Backup plan for storms; keep IA work moving"],
          ["Oct-Nov", "Paddy harvest, Diwali, November sessions", "Finish revision before festivals"],
          ["Dec", "Cool, school break", "Longer consolidation sessions"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Waraseoni go after school?",
      paragraphs: [
        "Within India, students from Balaghat look to Nagpur, Jabalpur, Bhopal and Indore. VNIT Nagpur, Rani Durgavati University in Jabalpur, the Jabalpur engineering college and the private universities of Bhopal and Indore are familiar names. Each institution sets its own admission rules, which can change every year.",
        "Most Indian universities ask for an Association of Indian Universities equivalence letter when a candidate presents IB or IGCSE results instead of Class 12 marks, and Diploma holders may also enter central universities via CUET-UG. Both rules are revised from time to time, so read the latest notice.",
        "Engineering and medicine call for early thought, since JEE Main and NEET name the subjects they expect. An IB package that leaves out Physics, Chemistry or Biology can shut one of those doors, so read the eligibility rules before choosing.",
        "Abroad, British, Canadian, Australian, Singaporean and European universities read IB and IGCSE transcripts routinely, and American colleges weigh them with tests and essays. Tutors help with the academic subjects; personal statements stay with the applicant.",
      ],
    },
    {
      heading: "Where do students lose marks in IB Maths and the sciences?",
      paragraphs: [
        "IB Maths pays for the reasoning that surrounds an answer, and a bare result with no working can score badly. The Analysis and Approaches course leans on proof and algebraic control; Applications and Interpretation wants students to judge a model and say what its output means.",
        "Both courses include an Exploration, a personal investigation that carries a fifth of the grade. Tutors help narrow a topic and verify the mathematics. Thinking and writing remain the student's work.",
        "Physics papers punish missing units, loose graphs and woolly explanations. Chemistry rewards neat, ordered calculations. Biology hinges on command words: outline, explain and evaluate each demand a different depth of answer.",
        "Students in this region often practise hard. A tutor turns that effort into precision by setting timed papers and marking them against the true mark scheme, so each slip is traced to a cause.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: choosing an IGCSE tier",
      paragraphs: [
        "Cambridge places candidates in Core, where C is the highest grade, or Extended, which reaches A*. Edexcel uses Foundation, capped at grade 5, and Higher, which goes to 9. A student hoping for IB Maths HL or a science Diploma needs the upper tier.",
        "A school or exam centre usually decides. Private candidates and families comparing schools can sit a timed diagnostic paper and read the result honestly. A mark near the boundary is worth discussing with the centre before entries close.",
        "Pick subjects to match the goal. Engineers stack Maths, Physics, Chemistry and Computer Science. Those aiming at business add Economics or Business Studies. Hindi as a second language steadies the timetable.",
        "Confirm the board, syllabus code and exam series before the first class so that the tutor prepares the right paper.",
      ],
    },
  ],

  tutorsIntro:
    "Matching for Waraseoni starts with the programme, subject, level and examining board. Tutors teach from India during IST hours, and each arrives with a short explanation of why their past students resemble yours.",

  process: [
    { title: "Send your child's details", description: "Board or programme, subject, level, school and the evening hours that suit your Waraseoni home." },
    { title: "Receive a tutor name", description: "We propose a tutor and describe the classes of theirs that resemble your child's syllabus." },
    { title: "Try a free lesson", description: "One genuine online lesson without payment or obligation." },
    { title: "Agree terms on paper", description: "Rate, weekly hours and first-month topics are written down before you pay." },
    { title: "Keep going with recaps", description: "Regular lessons with short recaps, and a different tutor if you ask." },
  ],

  whyPoints: [
    { title: "Syllabus-level matching", description: "Tutors are chosen for the subject, level and board your child will actually sit." },
    { title: "Candid on schools", description: "We say plainly that Waraseoni has no school we can confirm for these boards." },
    { title: "Trial before fees", description: "The first lesson is free so you judge the teaching yourself." },
    { title: "Firm limits", description: "Tutors never write IAs, essays or coursework." },
    { title: "Parents kept informed", description: "A short written recap follows each lesson." },
    { title: "Simple to change", description: "A poor match is replaced without argument." },
  ],

  faqs: [
    { question: "Is Waraseoni the same as Wara Seoni?", answer: "Yes. Waraseoni, also written Wara Seoni, is the town in Balaghat district, Madhya Pradesh, about 16 km from Balaghat city. This page covers it under both spellings. Lessons are online, so what matters is that we know your board, subject and timetable." },
    { question: "Is there an IB or IGCSE school in Waraseoni?", answer: "None we can confirm. Schools in Waraseoni follow the Madhya Pradesh Board or CBSE. The nearest international-board campuses are in Nagpur and Jabalpur. If a school claims otherwise, ask for its authorisation letter and current subject list before paying any fee." },
    { question: "Can I get IB home tuition in Waraseoni?", answer: "What we run in Waraseoni is online home tuition: your child studies alone with a live teacher, from the home desk, while the teacher is in another Indian city. Tutors never travel here. Tuition at the doorstep belongs to Gurugram and parts of Delhi NCR only, a fact we state before any booking." },
    { question: "Do you have IGCSE tutors for Cambridge and Edexcel in Balaghat district?", answer: "Both are covered, with every lesson held on video in IST. We pair by paper code and tier, for example Cambridge 0610 Biology or Edexcel 4MA1 Mathematics A. Once you name the board, subject and exam sitting, the tutor we put forward will have taught that very paper." },
    { question: "Will a tutor come to our house in Waraseoni?", answer: "No. Home visits are limited to Gurugram and parts of Delhi NCR. In Waraseoni, the lesson is a video call with a laptop or tablet, a steady connection and a quiet corner at home, and the tutor reads the working on a shared digital page." },
    { question: "How much does IB or IGCSE tuition cost in Waraseoni?", answer: "It depends on the course level, subject, tutor experience and weekly hours, so we publish no figure. After the free trial you receive the rate in writing, which you can compare with present coaching fees and with the cost of travelling to Balaghat or Nagpur." },
    { question: "Is the first lesson free?", answer: "It is. The suggested tutor teaches one whole session on screen, and you pay nothing and promise nothing. Only if you ask to continue does the written rate follow, and a booking is confirmed after you have read it." },
    { question: "How do you cope with monsoon power cuts?", answer: "We ask families to tell us when electricity and mobile data are steadiest and to keep a phone hotspot ready. If a lesson breaks off, the tutor sends a recap of what was covered and the remainder moves to another evening, so the learning is not lost." },
    { question: "Can a tutor help with the Internal Assessment or Extended Essay?", answer: "Our tutors act as sounding boards and readers. They will listen to a proposed question, ask whether the method can really answer it, read what has been drafted and say which criteria are weak. They stop short of composing sentences for the student, as examiners expect these pieces to be the candidate's unaided work." },
    { question: "My child studies in a Hindi-medium school. Will IB or IGCSE be too hard?", answer: "It is manageable with groundwork. Maths and science cross over quickly once English command words are understood. Essay subjects take longer. A tutor starts with vocabulary and paragraph structure, then moves to full papers, and progress is usually visible within a few weeks." },
    { question: "Which IB Maths course should my child take?", answer: "Choose by degree. Students who see themselves in engineering, physics or pure maths usually take Analysis and Approaches, with its calculus and proof. Students leaning towards business, economics, psychology or design generally take Applications and Interpretation, with its data and modelling. The school has the last word, and we teach whichever course is assigned." },
    { question: "Is Marathi available as a language subject?", answer: "We can coach IB Marathi B for students whose school offers it, which suits households near the Maharashtra border. IGCSE language lists vary by board and year, so quote the exact course code and we will tell you frankly whether a tutor is available." },
    { question: "How do we choose between IGCSE and CBSE for Class 9?", answer: "Think about the next step. If your child aims at JEE or NEET, CBSE or the MP Board is usually simpler. If the plan is the IB Diploma, a private university or study abroad, IGCSE prepares better. We talk it through during the trial lesson." },
    { question: "What internet speed do we need?", answer: "Home broadband or a steady 4G signal is plenty for a video call plus a digital board. A practice call the day before avoids surprises. Where reception is patchy, we can shorten the class and make up the difference with a longer written recap." },
    { question: "How do we begin?", answer: "Message +91 7439 368 115 on WhatsApp, or write to support@ibgram.com, listing the class, board, subject and school. A tutor and a trial slot are offered in return, and the next step depends only on what you think of the trial." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Start from the main site to see how tuition works." },
    { label: "Online tuition across India", href: "/india/", description: "Indian cities and towns we teach online." },
    { label: "IB and IGCSE tutors in Balaghat", href: "/balaghat/", description: "The district headquarters near Waraseoni." },
    { label: "IB and IGCSE tutors in Nagpur", href: "/nagpur/", description: "The nearest big city with international-board schools." },
    { label: "IB and IGCSE tutors in Jabalpur", href: "/jabalpur/", description: "The divisional city for Balaghat district." },
    { label: "IB and IGCSE tutors in Seoni", href: "/seoni/", description: "A neighbouring Madhya Pradesh district town." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Profiles and subjects for IB tuition." },
    { label: "IGCSE tuition", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the Diploma, its core and exams work." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or request a free trial lesson." },
  ],

  closingHeading: "Start IB or IGCSE lessons from Waraseoni",
  closingBody:
    "Waraseoni families can begin with one message naming the child's class, board and weakest subject. A teacher who has taught that course is suggested, the first lesson is free, and the fee is written down only if you want to go on. Since the teacher is in another Indian city and the classroom is a laptop screen, no one needs a train or a bus. Our WhatsApp is +91 7439 368 115 and our email is support@ibgram.com.",
};
