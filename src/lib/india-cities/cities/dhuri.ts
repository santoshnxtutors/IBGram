import type { CitySeoPage } from "../types";

/**
 * /dhuri/ - IB and IGCSE tutoring page for Dhuri, Sangrur district, Punjab. Online only.
 * No IB or Cambridge/Edexcel school in Dhuri is confirmed, so stripSchools is empty and the
 * clusters are labelled Ludhiana and Mohali-Chandigarh options reused from neighbouring pages.
 */
export const dhuri: CitySeoPage = {
  slug: "dhuri",
  countryName: "Dhuri",
  countryNameLong: "Dhuri, Sangrur district, Punjab",
  demonym: "Dhuri",
  state: "Punjab",
  stateCode: "IN-PB",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions that step aside for paddy transplanting and wheat harvest, post-harvest smog in late autumn, December fog and Lohri",
  lastUpdated: "2026-09-21",
  geo: { latitude: 30.3686, longitude: 75.8689 },
  wikipedia: "https://en.wikipedia.org/wiki/Dhuri",
  alternateNames: ["Dhuri Mandi", "Dhuri Junction", "Dhuri Sangrur"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Dhuri | Online Home Tuition, Punjab",
  metaDescription:
    "Live one-to-one IB and IGCSE tutors for Dhuri, Sangrur: Maths, Science and English from home, planned around fog and harvest weeks. First lesson free.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Dhuri, Punjab",
  heroEyebrow: "IB & IGCSE TUITION FOR DHURI AND MALWA PUNJAB, ONLINE",
  heroSubtitle:
    "Searching for home tuition in Dhuri for an IB or IGCSE student usually ends in one of two places: a forty-minute drive towards Ludhiana or a live lesson at the family table. IB Gram provides the second. A tutor who has taught the exact syllabus teaches your child one to one over video, in the evening, after school and after the bus home from the junction side of town.",
  primaryKeyword: "IB and IGCSE tutors in Dhuri",
  imageAltText: "A Dhuri student beside a window on a foggy December evening taking a live IGCSE Physics lesson on a laptop",
  secondaryKeywords: [
    "IB tutor Dhuri",
    "IGCSE tutor Dhuri",
    "IB home tuition Dhuri",
    "IGCSE home tuition Dhuri",
    "IB private tuition Dhuri",
    "IB Maths tutor Dhuri",
    "IGCSE Maths tutor Dhuri",
    "IB Physics tutor Dhuri",
    "IB Chemistry tutor Dhuri",
    "IB Biology tutor Dhuri",
    "IB DP tutor Dhuri",
    "IB MYP tutor Dhuri",
    "IB PYP tutor Dhuri",
    "IGCSE online tuition Dhuri",
    "online IB tutor Sangrur district",
    "IB tutor Dhuri Mandi",
    "IGCSE tutor near Malerkotla and Sangrur",
    "Cambridge IGCSE online tutor Malwa",
    "tuition for students aiming at Canada Australia UK from Dhuri",
  ],

  heroTrustPoints: [
    "A tutor who has taught the precise IB subject and level or IGCSE paper code",
    "Live video teaching, one student at a time, at an hour that suits the household",
    "No fee for the opening session, and a written quote ahead of it",
    "A separate company from every board, school and examination body",
  ],
  heroStats: [
    { value: "IST", label: "No time difference" },
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards covered" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "A railway junction town in the Malwa belt, where families plan further ahead than the map suggests",
    paragraphs: [
      "Dhuri sits between Sangrur and Malerkotla on the Malwa plain, and its identity is bound up with the railway. The junction connects lines running towards Ludhiana, Jakhal, Sangrur and Bathinda, and the town's grain market serves a countryside of wheat, paddy and sugarcane. Railway staff, commission agents, schoolteachers and farming families make up much of the population, and in a great many homes somebody has a cousin studying in Canada, Australia or the United Kingdom.",
      "That overseas thread explains why IB and Cambridge IGCSE come up in conversation here. Parents have watched the IELTS route and want to know whether an internationally recognised school qualification would serve a child better. Dhuri itself has no international school that we can confirm, so the honest arrangement is learning at home on a screen: a live, private lesson with a tutor based elsewhere in India, taken on a laptop at the family table. Tutors do not come to Dhuri. In-person visits are offered in Gurugram and parts of Delhi NCR and nowhere else.",
      "Who uses this? Children in Punjabi-medium or CBSE schools preparing for a move to a Mohali or Ludhiana international school, boarders back for a holiday, and families whose plans include study abroad after Class 12 and who want a syllabus foreign universities read easily.",
      "IB Gram stands apart from the IB, Cambridge, Pearson Edexcel and all schools. Our tutors teach and give feedback, yet never author a student's Internal Assessment, Extended Essay or coursework. The opening lesson carries no charge.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE",
      "Video lessons only; nobody visits homes in Dhuri",
      "Suited to Punjabi-medium and CBSE students planning an international course",
      "Free opening lesson with a short written recap each week",
    ],
  },

  programmesIntro:
    "An IB programme can look abstract from a Malwa town. Each entry below says what the stage involves and what a tutor realistically adds for a child in Dhuri.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Six transdisciplinary themes replace the single textbook, and pupils wind up the stage with a self-directed Exhibition. For this age group, tutoring means reading together in English, keeping arithmetic light and confident, and answering the why questions children keep asking.",
      countryNote:
        "A Dhuri child who hears Punjabi at home and Hindi on the street may meet little English outside school. A short weekly talk-and-read session helps ahead of any move to a PYP classroom.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers mark against published criteria, units run on concepts and real-world contexts, and each student carries out a Personal Project. Explaining how an answer was reached matters as much as getting it.",
      countryNote:
        "Students coming from PSEB or CBSE classrooms tend to be strong on content but new to writing out reasoning. Weekly practice narrows that before a change of school.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, an Extended Essay, Theory of Knowledge and CAS, all inside two years. Internal assessments and predicted grades count towards offers.",
      countryNote:
        "Diploma students with Dhuri roots usually board in Mohali, Chandigarh or further off, so lessons at home in vacation weeks keep Mathematics and the sciences from slipping.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Diploma courses are combined with a career-related qualification and a reflective project. Very few Indian schools offer this route.",
      countryNote:
        "We are aware of no CP school in or near Dhuri. Support would cover the Diploma-level subjects of a student enrolled somewhere else.",
    },
  ],

  subjectsIntro:
    "Malwa families favour Mathematics, Physics and commerce. We ask which course and level your child is on, then look for a tutor who has handled that exact combination.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof for aspiring engineers, with steady time on problems that look unfamiliar." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and calculator-led methods, with the exploration topic chosen well ahead." },
    { name: "IB Physics", levels: "HL / SL", description: "Motion, circuits, waves and fields, with attention to uncertainty and reading graphs." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, energetics, equilibria and organic routes, using the data booklet confidently." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, physiology and ecology, stated in exact examiner language." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram habits and evaluation, with minimum support prices, mandi trade and remittances as live examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, costing and strategy, relevant to arhtiya and agri-business households." },
    { name: "IB Geography", levels: "HL / SL", description: "Water, agriculture and change, with Punjab's groundwater and crop-cycle debates as close cases." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Soil, water and air, where stubble burning and aquifer decline supply real material." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis and comparative writing for students who think first in Punjabi." },
    { name: "IB Punjabi A", levels: "HL / SL", description: "Punjabi literature and language study for students wanting their mother tongue recognised." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Hindi as an acquired language: speaking, reading, writing." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and the programming project." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion of how claims become knowledge, leading to an exhibition and essay." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Shaping a question that fits the word limit and outlining the method. Advice only." },
    { name: "IB MYP Mathematics and Sciences", levels: "MYP 1-5", description: "Investigation skills and written reasoning, with groundwork for Diploma study." },
  ],

  igcseSubjectsIntro:
    "Punjab's international schools mainly use Cambridge IGCSE, and a few work with Pearson Edexcel. We settle the board and syllabus code first, so that lessons follow the papers your child will really sit.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with a clear view on which tier to enter." },
    { name: "IGCSE Additional Mathematics", levels: "Grade 10", description: "Calculus and functions, the natural bridge to IB or A Level Mathematics." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Mechanics, thermal physics, electricity and waves, with the practical paper." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, reaction rates, electrolysis and the first organic chemistry." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, transport, reproduction and ecology, with data handling." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Grade 9-10", description: "A three-science qualification revised on one shared plan." },
    { name: "IGCSE Accounting", levels: "Grade 9-10", description: "Ledgers, final accounts and ratios, familiar to commission-agent households." },
    { name: "IGCSE Economics and Business Studies", levels: "Grade 9-10", description: "Definitions, diagrams and short case answers." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Programming logic and pseudocode, practised weekly." },
    { name: "IGCSE English First and Second Language", levels: "Grade 9-10", description: "Comprehension, directed writing and spoken tasks, for Punjabi speakers." },
    { name: "IGCSE Punjabi and Hindi as second languages", levels: "Grade 9-10", description: "Reading and composition in a home language, if the school enters candidates." },
  ],

  regionsTitle: "Dhuri and the nearby places we teach online",
  regionsIntro:
    "A screen-based lesson is the same in a railway colony and on a farm off the Sangrur road. The notes below list what differs in practice: timings, travel and the season.",
  regions: [
    { name: "Dhuri Junction and railway colony", note: "Families of railway staff who know transfers well and value a tutor who can follow a posting." },
    { name: "Grain market and Mandi area", note: "Commission-agent and trading households whose working year follows the wheat and paddy procurement seasons." },
    { name: "Sangrur Road side", note: "The highway towards Sangrur, about 14 km away, used by families who also look at schools and coaching there." },
    { name: "Malerkotla Road side", note: "The road towards Malerkotla, with mixed communities and several small private schools." },
    { name: "Model Town and newer colonies", note: "Newer housing where salaried, teaching and banking families live and evenings are the natural study slot." },
    { name: "Old city and bazaars", note: "Dense, long-settled quarters with joint families and close attention to school results." },
    { name: "Bugra and Kanjhla side villages", note: "Farm villages around Dhuri where field work decides who is free and when." },
    { name: "Sherpur and Kakrala side", note: "Villages beyond the ring of the town, where broadband is improving and online lessons are becoming practical." },
    { name: "Dhuri sugar mill and outskirts", note: "Semi-industrial fringe where mill and farm workers' families plan for a child's schooling at a distance." },
  ],

  schoolClusters: [
    {
      city: "Dhuri and its district",
      note: "We have not confirmed an IB or Cambridge / Edexcel IGCSE school in Dhuri or nearby Sangrur. Local schools follow PSEB, CBSE or ICSE.",
      schools: [],
    },
    {
      city: "Nearby: Ludhiana",
      note: "About 70 km away, with the closest established international options for Malwa families, often through boarding.",
      schools: ["Britannica International School", "Harvest International School"],
    },
    {
      city: "Nearby: Mohali and Chandigarh",
      note: "The tricity area has more IB and IGCSE choice, and is a typical destination for Dhuri families planning a long-term move.",
      schools: ["Oakridge International School, Mohali", "Strawberry Fields High School, Sector 26", "Firststeps School, Sector 26"],
    },
  ],
  schoolDisclaimer:
    "These schools are mentioned only as places Malwa families sometimes consider. IB Gram is an independent tutoring firm; we have no relationship with them, with the IB, Cambridge or Pearson, and we have verified no IB or IGCSE school inside Dhuri. Please put admission and curriculum questions to each school directly.",

  modesIntro:
    "All teaching for Dhuri is live and on screen. The three formats below reflect what a Malwa household typically asks for.",
  modes: [
    {
      title: "Weekly online home tuition",
      description:
        "One hour or more on a fixed evening, one tutor, one student. It is tutoring from home in the literal sense: nobody commutes, and the tutor is chosen for the course and not for the postcode.",
      bullets: [
        "A tutor chosen for the subject and level",
        "Live writing on a shared board, plus a short recap afterwards",
        "Evenings adjusted for fog, smog and harvest",
        "No tutor travels to Dhuri",
      ],
    },
    {
      title: "Preparing for an international school move",
      description:
        "Before a Class 9 or 11 entry into an IB or IGCSE school, lessons work on written English, scientific vocabulary and the style of reasoning the new teachers will expect.",
      bullets: [
        "Opening session to locate strengths and gaps",
        "English phrasing for Maths and Science answers",
        "Practice questions in the target syllabus",
        "Follow-up during the first months at the new school",
      ],
    },
    {
      title: "Break-time and pre-exam intensives",
      description:
        "Boarders home for Diwali, winter break or summer can take several lessons a week, and extra hours appear in the run-up to mocks and the exam sessions.",
      bullets: [
        "Alternate-day lessons in the break",
        "Timed papers reviewed against the mark scheme",
        "A revision calendar for parents",
        "Back to one weekly lesson afterwards",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Dhuri have an IB or IGCSE school, and where do families look?",
      paragraphs: [
        "Our checks of school directories, the IB's school finder and Cambridge's centre lists turned up no authorised IB or Cambridge / Edexcel IGCSE school in Dhuri, and none in Sangrur or Malerkotla either. The schools here teach to the Punjab School Education Board, CBSE or ICSE. We will not put a name on this page that we cannot confirm.",
        "Families who want an international curriculum look outward. Ludhiana, around 70 km off, has Britannica International School and Harvest International School, both confirmed on our Ludhiana page. The Mohali and Chandigarh belt offers Oakridge International School in Mohali and Strawberry Fields High School and Firststeps School in Sector 26. These are long daily journeys from Dhuri, so the usual patterns are boarding, a move to the tricity or a later switch at Class 11.",
        "People who contact us from Dhuri are often railway or government employees, teachers, agri-traders or returnees with overseas experience. Some want to learn whether their child could cope with a Cambridge or IB classroom before paying a fee deposit. A trial lesson answers that cheaply.",
        "Tutoring underpins the school route. It is not a substitute for being enrolled at an authorised school.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Dhuri, Sangrur or Malerkotla",
        "Ludhiana and the Mohali-Chandigarh belt hold the closest options",
        "Enquiries come from railway, teaching, trading and returnee families",
        "A trial lesson tests the fit before any deposit",
      ],
    },
    {
      heading: "What changes for a student moving from PSEB or CBSE to IB or IGCSE?",
      paragraphs: [
        "Dhuri students overwhelmingly follow the Punjab board, with Punjabi as a compulsory language and English taught as a subject, or CBSE in the private sector. Both reward reliable recall and methodical practice, and both lead to familiar Indian routes: state engineering and medical entrances, JEE, NEET and CUET-UG.",
        "IB and IGCSE keep the rigour but redirect it. English is the medium, questions are framed in new contexts, and the marks go to candidates who lay out an argument. A student who can reproduce a Chemistry definition may lose marks because the reason is missing, or in Mathematics because the working is not shown line by line.",
        "Punjabi can travel with the student. IB Punjabi A and IGCSE Punjabi as a second language exist, and a home-language strength lifts an overall score.",
        "The table below lines the options up for a Dhuri family.",
      ],
      table: {
        caption: "PSEB, CBSE and IB or IGCSE as a Dhuri family meets them",
        columns: ["Feature", "PSEB", "CBSE", "IB / IGCSE"],
        rows: [
          ["Teaching medium", "Punjabi or English, depending on school", "English, sometimes Hindi", "English, with Punjabi or Hindi as language choices"],
          ["Marks go to", "Recall and steady practice", "Recall plus application", "Reasoning set out in writing"],
          ["Choice in Dhuri", "Plentiful", "A few private schools", "None confirmed; Ludhiana and Mohali nearest"],
          ["Entrance to Indian universities", "Direct, including state tests", "Direct", "Equivalence certificate and eligibility checks"],
          ["Portability", "Strongest inside Punjab", "Strong across India", "Strong among authorised schools abroad"],
        ],
      },
    },
    {
      heading: "What shapes the fee for IB or IGCSE tuition in Dhuri?",
      paragraphs: [
        "Five factors move the quote: programme and level, subject, lesson length, weekly frequency and the tutor's experience with your syllabus. An IB Physics HL specialist with many years in the course is priced differently from a tutor for Class 6 MYP reading and number work. A public list would mislead half the people who read it, so we do not print one.",
        "Some costs simply do not arise. There is no diesel for the drive to Ludhiana, no bus fare and no evening lost to the road. Since the tutor can be in any Indian city, you are also not limited to whoever lives near Dhuri Junction.",
        "Once we know your child's class, board and goal, through a short WhatsApp exchange, a written rate follows before you book the opening lesson. If it does not suit, nothing is owed. You can scale hours down, pause for a wedding or Lohri, or move to another tutor without a fee.",
        "A common pattern is one weekly lesson in the subject causing most worry, a month's review and extra hours only for mocks.",
      ],
      bullets: [
        "Programme, level, subject, lesson length and frequency set the quote",
        "No diesel, bus fare or lost evenings",
        "Rate in writing before the opening lesson",
        "Scale down, pause or change tutor whenever needed",
      ],
    },
    {
      heading: "Online tutor, local teacher or Sangrur coaching: which suits an IB student from Dhuri?",
      paragraphs: [
        "Dhuri and Sangrur have experienced teachers and coaching classes for board exams, JEE, NEET and competitive tests, and for those targets they do their job. IB and IGCSE papers are framed differently, and teachers who have not prepared candidates for them can only guess at what the mark scheme pays for.",
        "An IB Gram tutor comes with time spent on the specific course. Each lesson draws on past papers of the right board, explains the marking logic and ends with a written recap. One-to-one teaching lets the tutor stay on a hard idea for as long as it takes, which a class of thirty cannot.",
        "Videos and self-study are fine for revision but give no feedback. They will not catch that an essay wanders or a graph lacks units.",
        "The table compares the routes.",
      ],
      table: {
        caption: "Study routes open to an IB or IGCSE student in Dhuri",
        columns: ["Route", "Knows the IB or IGCSE course", "Feedback", "Fit for a Dhuri household"],
        rows: [
          ["Online one-to-one tutor", "Yes, picked for the syllabus", "Personal, every lesson", "Needs a home connection; nothing to commute"],
          ["Local private teacher", "Seldom beyond PSEB or CBSE", "Personal", "Near at hand but thin on international papers"],
          ["Coaching in Sangrur or Ludhiana", "No, tuned to other exams", "Shared by a batch", "Journeys plus fixed batch hours"],
          ["Self-study with videos", "Depends on the source", "None unless someone reviews", "Flexible but unsupported"],
        ],
      },
    },
    {
      heading: "How do paddy season, smog, fog and Lohri affect study in Dhuri?",
      paragraphs: [
        "Malwa's year has sharp edges. Wheat is harvested in April and paddy transplanting follows in June, and in both windows households are stretched and older children are sometimes drafted to help. Lessons then work better at fixed evening hours, and we flex them when a family asks.",
        "October and early November bring paddy harvest and, in many years, hazy air after residue burning. Schools occasionally shut or shorten on the worst days. Because lessons are indoors and on screen, they usually carry on, and tutors can shift time if a student is unwell.",
        "December and January bring dense fog and cold. Fog delays trains at the junction and buses on the highways, and most families prefer not to send children out for evening classes. Online lessons avoid that risk. Lohri, Maghi and Baisakhi fall inside the same arc, and Diwali sits in the autumn exam window.",
        "The table ties this calendar to international exam dates.",
      ],
      table: {
        caption: "Dhuri's farming, weather and festival year against IB and IGCSE dates",
        columns: ["Months", "Local pattern", "Academic point"],
        rows: [
          ["January to March", "Fog, Lohri and Maghi, wheat growing", "Mock papers; Cambridge February-March series"],
          ["April to June", "Wheat harvest, Baisakhi, paddy transplanting, heat", "IB May and Cambridge May-June sessions"],
          ["July to September", "Monsoon, schools reopen", "New school year; IB results in July"],
          ["October to December", "Paddy harvest, post-harvest smog, Diwali, first fog", "IB November session; Cambridge and Edexcel autumn papers"],
        ],
      },
    },
    {
      heading: "Where does an IB or IGCSE qualification lead a Dhuri student?",
      paragraphs: [
        "IGCSE followed by the IB Diploma or A Levels keeps several routes open. In India, the Association of Indian Universities issues equivalence certificates for these qualifications, and CUET-UG lets international-board students apply to central universities. NEET, JEE and professional courses publish separate eligibility notes for international boards, which a family must read in each year's official notification.",
        "Punjab's own options are well known. Thapar Institute of Technology in Patiala, Punjabi University, Panjab University in Chandigarh, Lovely Professional University near Jalandhar and Chitkara University are common names, and each has its own rules for international-board applicants. Delhi, Pune and Bengaluru pull students further afield.",
        "Overseas study is the route most Dhuri families think about, particularly Canada, Australia and the United Kingdom. A strong IB Diploma or IGCSE to A Level record is read easily by admissions offices there, and students used to writing extended answers have less to learn on arrival. English scores for visas are a separate test, and tutoring in an English-medium syllabus builds the same skills.",
        "Our tutors help with grades and technique, and they never write applications or personal statements.",
      ],
      bullets: [
        "Equivalence certificates and CUET-UG for Indian universities",
        "Thapar, Punjabi University, Panjab University and LPU are common local names",
        "NEET and JEE eligibility for international boards must be checked yearly",
        "Canada, Australia and the UK are the usual overseas targets",
      ],
    },
    {
      heading: "How do IB Maths, Physics and Economics work for a Malwa student?",
      paragraphs: [
        "IB Mathematics offers Analysis and Approaches, which leans on algebra and calculus and suits future engineers, and Applications and Interpretation, which uses data and technology and suits commerce and social science. Punjab students are often strong at arithmetic and algebra, and the adjustment lies in a graphic display calculator and in writing each step.",
        "IB Physics moves from measurement and mechanics through waves and circuits to fields, and tests whether a student can apply a known law to a new setting. Students trained on numerical problems from a state textbook benefit from extra work on explaining in sentences, including the open-ended questions that carry many marks.",
        "IB Economics rewards clean diagrams and short evaluation, and Punjab offers exceptional examples: procurement prices, mandi trade, groundwater and power subsidies, remittances. Used well, local examples make essays stand out.",
        "For each Internal Assessment, tutors discuss method, data and structure, and the student writes the work.",
      ],
      bullets: [
        "Choose AA or AI with future study in mind",
        "Explain in words, not only symbols",
        "Use Punjab examples in Economics and Geography essays",
        "Take feedback on assessments, never authorship",
      ],
    },
    {
      heading: "Which IGCSE tier and subject mix suits a student from Dhuri?",
      paragraphs: [
        "Cambridge IGCSE subjects are commonly entered at Core or Extended. A Core candidate studies the essentials and cannot score above a middling grade in most subjects, whereas an Extended candidate covers more ground and can reach A*. A student who expects to move on to IB Mathematics, A Level sciences or engineering should usually enter Extended.",
        "A typical spread has English, Mathematics, two sciences or the Combined option, a second language and one or two electives such as Computer Science, Accounting or Economics. For Dhuri students, Punjabi as a second language is often a dependable high-scoring paper, and Hindi is an alternative.",
        "English as a Second Language deserves steady, unhurried practice. Children who read widely and write short paragraphs daily do better in Science and Humanities papers as well.",
        "Edexcel specifications are organised slightly differently from Cambridge, so the tutor confirms the board before choosing resources.",
      ],
    },
  ],

  process: [
    { title: "Drop us a message", description: "WhatsApp the class, board, subject and any Mohali or Ludhiana school on your shortlist." },
    { title: "Review the suggestion", description: "A tutor who has taught the course is proposed, with a written rate attached." },
    { title: "Attend the opening lesson", description: "Meet the tutor on video and check that your connection copes, at no cost." },
    { title: "Lock in a weekly evening", description: "Pick a slot that respects school, fog, harvest and family routine." },
    { title: "Reassess each month", description: "Read the recaps, alter the hours and swap tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Right syllabus, right tutor", description: "Matching follows syllabus code and level and not just the subject name." },
    { title: "Written reasoning built up", description: "Tutors train students to set out working that Punjab-board habits sometimes leave out." },
    { title: "No foggy commutes", description: "Lessons run indoors, so winter travel risk disappears." },
    { title: "Short recaps for parents", description: "A written note follows each session." },
    { title: "Planned around Malwa's calendar", description: "Harvest, smog, fog and Lohri are built into the timetable." },
    { title: "Plain limits", description: "We coach and explain; we never write assessed work or promise grades." },
  ],

  tutorsIntro:
    "Our tutors teach from cities across India and keep Indian Standard Time, the same clock as Dhuri. Each has taught the syllabus they offer, and we assign by course and level.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Dhuri?",
      answer:
        "None that we could confirm. Dhuri's schools follow PSEB, CBSE or ICSE, and the IB and Cambridge school lists show no authorised school in Dhuri, Sangrur or Malerkotla. The nearest established options are around Ludhiana and in the Mohali-Chandigarh area. Live lessons let a student prepare for such a move or carry on from home. Please check any school's status directly.",
    },
    {
      question: "Does a tutor come to my house in Dhuri?",
      answer:
        "No. Tutors do not visit homes in Dhuri, and in-person home tuition is run only in Gurugram and parts of Delhi NCR. You get online home tuition instead: a private live lesson at your own table, led by a specialist in another city. That keeps one-to-one attention while widening the choice of tutor well past Sangrur district.",
    },
    {
      question: "My child studies in a Punjab board school. Can they switch to IGCSE?",
      answer:
        "Yes, with lead time. The gap is usually writing out reasoning in English, not the content. We begin by finding strengths and weaknesses, build subject vocabulary and rehearse short structured answers. Many families start six to twelve months before a move. Students aiming at A Level or IB should target Extended tier in IGCSE subjects that have one.",
    },
    {
      question: "What does IB or IGCSE tuition cost for a family in Dhuri?",
      answer:
        "No fixed list exists. The figure depends on programme and level, subject, lesson length, weekly frequency and tutor experience, and online delivery means no travel cost. A written rate reaches you before the free trial, and later you can reduce, pause or end lessons without penalty. That way the commitment stays in your hands.",
    },
    {
      question: "Would IB or IGCSE help with studying in Canada or Australia?",
      answer:
        "It can help, because the IB Diploma and IGCSE with A Levels are recognised by admissions offices in those countries, and because students learn to write extended answers in English. Visa English tests such as IELTS are separate exams, and admission rules vary by institution and year. Check each university's published requirements before choosing a pathway.",
    },
    {
      question: "Can a tutor write my child's IA or Extended Essay?",
      answer:
        "No. A tutor may advise on choosing a question, planning method, analysing data and structuring an argument, but every sentence must be the student's own. IB Gram tutors do not produce IAs, Extended Essays, TOK essays or coursework, and a request to do so would end the arrangement.",
    },
    {
      question: "Can my child be taught partly in Punjabi or Hindi?",
      answer:
        "To a degree. Most papers are set in English, so teaching is mainly in English, but some tutors can explain a hard idea in Hindi first and then rebuild it in English. Punjabi explanation depends on the tutor. Punjabi itself can be studied as IB Punjabi A or as an IGCSE second language where the school enters candidates.",
    },
    {
      question: "Which exam series apply, and when should revision start?",
      answer:
        "IB Diploma exams are held in May and November. Cambridge IGCSE runs February and March, May and June, and October and November, and Edexcel has January, May and June, and November. Start content revision six months ahead and switch to timed papers for the last two months. The school confirms dates for your child.",
    },
    {
      question: "Do fog and smog affect online lessons?",
      answer:
        "Much less than they affect travel. Fog that halts trains and buses has no effect on a lesson at home, and smog mainly matters if a student is unwell. Power and mobile signal can still wobble in winter storms, so keep a charged laptop and a phone hotspot ready and tell the tutor early about any trouble.",
    },
    {
      question: "Can lessons pause at harvest or for Lohri?",
      answer:
        "Yes. Many Dhuri households are stretched at wheat harvest and paddy transplanting, and we can move lessons, cut hours or pause for a few weeks. Tutors leave notes so nothing is lost. Keep any long pause away from mock and exam months.",
    },
    {
      question: "What is the difference between IGCSE Core and Extended?",
      answer:
        "Core covers the essentials and limits the highest grade available, while Extended adds content and opens the full range up to A*. Students aiming at IB Mathematics, A Level sciences or engineering should normally enter Extended. A look at current marks in the first lesson helps us recommend the right tier.",
    },
    {
      question: "Do you teach both IB Mathematics courses?",
      answer:
        "Yes, at HL and SL. Analysis and Approaches suits students heading to engineering, physics or economics, while Applications and Interpretation suits business, design and social science. Ask the school what it offers. A trial lesson on a typical problem shows which style your child prefers.",
    },
    {
      question: "If we move to Mohali or Ludhiana, does the tutor continue?",
      answer:
        "Yes. The tutor, weekly slot and notes carry over after a move, since lessons follow the student. If the new school uses a different board, the tutor adjusts the plan in a session or two, and you can ask for a new match. Families value that continuity at a stressful moment.",
    },
    {
      question: "How do I start, and is the first lesson free?",
      answer:
        "The first lesson is free. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the class, board and subject. You receive a tutor profile and a written rate, then a trial at a time that suits your household. If the fit is poor, another tutor is found.",
    },
    {
      question: "Is IB Gram connected with any school, board or examiner?",
      answer:
        "No. IB Gram is independent and is not affiliated with or endorsed by the International Baccalaureate, Cambridge, Pearson Edexcel or any school on this page. School names appear only to show where Malwa families sometimes look. Please confirm admissions, fees and curricula with the school directly.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The national overview for students in every state." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB support from primary years to Diploma." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE, subject by subject." },
    { label: "IB Diploma Programme tuition", href: "/programmes/dp/", description: "How Diploma tutoring covers six subjects and the core." },
    { label: "IB Middle Years Programme tuition", href: "/programmes/myp/", description: "Criteria, units and the Personal Project." },
    { label: "IB Mathematics tuition", href: "/courses/ib/mathematics/", description: "The two Mathematics courses explained." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles showing syllabus experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us to book the free trial." },
    { label: "IB and IGCSE tutors in Sangrur", href: "/sangrur/", description: "The district headquarters a few kilometres away." },
    { label: "IB and IGCSE tutors in Malerkotla", href: "/malerkotla/", description: "The neighbouring town on the Ludhiana side." },
    { label: "IB and IGCSE tutors in Ludhiana", href: "/ludhiana/", description: "Punjab's largest city and the nearest with international schools." },
  ],

  closingHeading: "Book one free lesson from your own table in Dhuri",
  closingBody:
    "Tell us the class, the board and the subject that keeps coming up at dinner. We will suggest a matched tutor, put the rate in writing and arrange a trial at an hour that suits your family. WhatsApp +91 7439 368 115 or email support@ibgram.com, and keep the highway out of it.",
};
