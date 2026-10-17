import type { CitySeoPage } from "../types";

/**
 * Mirganj (Gopalganj district, Bihar, Saran division). No IB or Cambridge/Edexcel school could be
 * confirmed in the town, so stripSchools is empty and the clusters reuse names already verified on the
 * Gopalganj, Patna and Kolkata pages, labelled as nearby. Every lesson is online.
 */
export const mirganj: CitySeoPage = {
  slug: "mirganj",
  countryName: "Mirganj",
  countryNameLong: "Mirganj, Gopalganj district, Bihar",
  demonym: "Mirganj",
  flagCode: "in",
  countryCode: "IN",
  state: "Bihar",
  stateCode: "IN-BR",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late afternoons and evenings after school and tuition hours, with Chhath, the Gandak flood season and the Bihar board calendar kept clear",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.3, longitude: 84.45 },
  alternateNames: ["Mirganj Gopalganj", "Mirganj Bihar", "Mir Ganj", "Mirganj block"],
  wikipedia: "https://en.wikipedia.org/wiki/Mirganj",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mirganj | Online Private Tuition",
  metaDescription:
    "Private tuition for IB and IGCSE students in Mirganj, Gopalganj: live one-to-one lessons online, planned around Chhath and floods. Free trial lesson.",
  h1: "IB and IGCSE Tutors for Mirganj Families: Private Tuition Online",
  heroEyebrow: "PRIVATE IB & IGCSE TUITION FOR MIRGANJ, GOPALGANJ",
  heroSubtitle:
    "If you are searching for home tuition in an IB or IGCSE subject around Mirganj, the honest picture is short: nobody nearby has taught these syllabi, and our tutors do not knock on doors here. What we offer is private tuition from home, delivered online. A specialist who has taught the exact paper sits on video with your child, one to one, at an hour that suits the household.",
  primaryKeyword: "IB and IGCSE tutors in Mirganj",
  imageAltText: "A Mirganj student at a study table following an online IB Mathematics lesson with a tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Mirganj",
    "IGCSE tutor Mirganj",
    "IB home tuition Mirganj",
    "IGCSE home tuition Mirganj",
    "IB private tuition Mirganj",
    "IB Maths tutor Mirganj",
    "IGCSE Maths tutor Mirganj",
    "IB Physics tutor Mirganj",
    "IB Chemistry tutor Mirganj",
    "IB Biology tutor Mirganj",
    "IB DP tutor Mirganj",
    "IB MYP tutor Mirganj",
    "IB PYP tutor Mirganj",
    "IGCSE online tuition Mirganj",
    "online IB tutor Gopalganj district",
    "IB tutor Mirganj Gopalganj Bihar",
    "IGCSE Physics tutor Mirganj",
    "online tuition Mirganj Bihar",
  ],

  heroTrustPoints: [
    "Tutors picked for the exact syllabus and tier your child sits",
    "Live private lessons from home, taught online",
    "A free opening lesson and a written rate before any booking",
    "No link to the IB, Cambridge, Pearson or any school",
  ],
  heroStats: [
    { value: "Online", label: "All lessons for Mirganj" },
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "IST", label: "Indian timings" },
    { value: "Free trial", label: "Opening lesson at no cost" },
  ],

  intro: {
    heading: "Taking an international curriculum from Mirganj: a plain description",
    paragraphs: [
      "Mirganj sits in the plains of Gopalganj district, in the Saran division of north-western Bihar, a stretch of farmland, small markets and river-fed fields where Bhojpuri is the language of the street and Hindi the language of the classroom. Most children here study under the Bihar School Examination Board or at a CBSE school, and the district's families send a steady stream of young people to Patna, Delhi and Kota. An IB or IGCSE student is an unusual find, and the family usually has a very particular reason.",
      "So the first thing to say about IB and IGCSE tutors in Mirganj is how the lessons physically happen. They happen on a screen. A tutor does not arrive at the gate, because home visits are run only in Gurugram and parts of Delhi NCR. A Mirganj family searching for private tuition at home gets exactly that in spirit: a one-to-one lesson in the child's own room, with the teacher joining over live video from another part of India.",
      "This arrangement suits a town where the nearest city with a real choice of teachers is a long road journey away. Gopalganj is the district seat, Patna is the state capital and the place most families look to, and any specialist in an international syllabus is far more likely to be found in a metro. Video removes the road, and widens the pool of tutors to the entire country.",
      "IB Gram works independently. It is not connected to the International Baccalaureate Organization, Cambridge, Pearson or any school mentioned on this page, and it cannot offer admissions or promise a grade. Tutors explain, set practice and correct; the Internal Assessments, Extended Essay, Theory of Knowledge writing and coursework stay entirely the student's own.",
    ],
    bullets: [
      "IB PYP, MYP, Diploma and Career-related support",
      "Cambridge and Pearson Edexcel IGCSE",
      "A single student in each lesson, same weekly slot",
      "A written note for parents after every session",
      "Timetables that avoid Chhath and flood-season disruption",
    ],
  },

  programmesIntro:
    "We could not confirm any school in Mirganj that teaches an IB programme, so the stage a child follows is generally decided by a plan beyond the town: an online school, a relocation, or a boarding school in a bigger city. This is what each stage involves and what a Mirganj household tends to need from it.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3 to 11",
      description:
        "Teaching is organised around transdisciplinary themes, and children are encouraged to ask questions, record what they find and reflect on it. Fifth year ends with the PYP Exhibition, a collaborative inquiry shared with families.",
      countryNote:
        "A young learner from Mirganj generally benefits from relaxed English conversation and number play, while an Exhibition topic can grow from something close by such as the Gandak, mango orchards or a village market day.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to 10, ages 11 to 16",
      description:
        "Each subject is assessed against four published criteria rather than a single exam mark, which pushes students to explain, apply and evaluate. A Personal Project in the last year is planned and presented by the student alone.",
      countryNote:
        "Children coming from a Bihar Board or NCERT background are used to chapter-end questions, so the early weeks go into criterion-style writing, command terms and how to show reasoning in full sentences.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and 12, ages 16 to 19",
      description:
        "Six subjects over two years, three at Higher Level and three at Standard, together with the Extended Essay, Theory of Knowledge and CAS. Final examinations fall in May or November and are partly built on internal assessment.",
      countryNote:
        "Diploma students from this belt often keep one eye on engineering or medicine, so subject choice and the weekly timetable have to be settled together before Class 11 begins.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and 12, ages 16 to 19",
      description:
        "Two or more Diploma courses sit beside a career-related study and a reflective project, suiting students aiming for applied study or work.",
      countryNote:
        "We have rarely seen this requested from the Gopalganj area. If it is yours, we teach the academic components and help arrange them around the project deadlines.",
    },
  ],

  subjectsIntro:
    "A Mirganj student is paired with a tutor according to course, level and exam session, not just a subject label. Someone preparing HL Physics for the May papers needs a different teacher from a Class 8 beginner in MYP Sciences, and we check syllabus details before proposing anyone.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus, vectors and proof; Bihar Board students are often quick at manipulation but need practice defending each step in words." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology-led problem solving, where an exploration built on local data such as flood gauges or crop yields stands out." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves and fields, with an investigation in which handling uncertainty carries real marks." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, energetics, kinetics and organic reactions, needing steady problem practice and clean lab write-ups." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and human physiology, where precise terms and data analysis decide the paper." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets, national income and development; migration, remittances and agricultural pricing give vivid regional illustrations." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers on operations, marketing and finance, with local trading firms offering practical parallels." },
    { name: "IB Geography", levels: "HL / SL", description: "Freshwater systems, population and resource issues, with flood plains of the Gandak basin as a strong teaching case." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water, soils and climate change examined through a river-plain lens." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close textual work and the oral, for students who speak Bhojpuri or Hindi at home." },
    { name: "IB Hindi A or B", levels: "SL / HL", description: "Literature or language acquisition taught to IB criteria for students strong in everyday Hindi but new to formal analysis." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, networks and a documented programming project." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Ways of knowing and areas of knowledge, explored through discussion; the essay itself remains the student's own writing." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "A 4,000 word research paper; a tutor can help sharpen the question and plan, but never drafts any of it." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Criterion-based investigations and written reasoning from Class 6 to Class 10." },
  ],

  igcseSubjectsIntro:
    "Mirganj students taking IGCSE are almost always private candidates or enrolled with an online school. We start by confirming the board, syllabus code and tier, because Cambridge Extended, Edexcel Higher and Additional Mathematics each need a different style of preparation.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Cambridge Core or Extended, Edexcel Foundation or Higher", description: "Wide coverage in which most lost marks come from untidy working and misread command words." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus, logarithms and trigonometry that make the later step to IB Maths or JEE-style algebra gentler." },
    { name: "IGCSE Physics", levels: "Core and Extended", description: "Forces, electricity, waves and atomic physics, plus a written paper about experimental method." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Reactions, periodicity and qualitative analysis to be learnt as routines." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Broad content with experiment-design and data questions." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Pseudocode, logic and a programming paper." },
    { name: "IGCSE English First or Second Language", levels: "Grade 9-10", description: "Directed writing, summary and comprehension for children who move between Bhojpuri, Hindi and English." },
    { name: "IGCSE Economics and Business Studies", levels: "Grade 9-10", description: "Definitions, charts and short structured answers." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "Reading, writing and speaking tasks in a language many Mirganj learners already speak well." },
  ],

  regionsTitle: "Mirganj and the surrounding Gopalganj areas our online tutors reach",
  regionsIntro:
    "All teaching is on screen, so place matters only for timing, power and signal. These notes describe how an ordinary day runs in each area so a weekly slot can be chosen sensibly. No tutor travels to any of these places.",
  regions: [
    { name: "Mirganj town centre", note: "The market stretch near the main road, with the best mobile and broadband coverage and noisy evenings on market days." },
    { name: "Mirganj block villages", note: "Farm settlements around the town where paddy, wheat and sugarcane seasons set the family rhythm and mobile data is the usual link." },
    { name: "Gopalganj town", note: "The district seat a short road journey away, with more schools, coaching classes and steadier broadband." },
    { name: "Kuchaikote", note: "A neighbouring block town on the way to Gopalganj, home to families who commute for work and school." },
    { name: "Barauli", note: "A nearby block in the district with its own sugar-belt economy and a mix of government and private schools." },
    { name: "Hathua", note: "A town toward the western edge of the district, linked to Siwan and Chhapra by road and rail." },
    { name: "Baikunthpur", note: "A block close to the Gandak side, where flood-season disruption is part of the annual calendar." },
    { name: "Bhore and Sidhwalia", note: "Towns in the district's northern and eastern parts that sit on the rail and road routes toward Uttar Pradesh and Muzaffarpur." },
    { name: "Along the Gandak embankment", note: "Riverside hamlets where monsoon water can interrupt roads and power for days." },
  ],

  schoolDisclaimer:
    "IB Gram teaches independently and has no tie to the IB Organization, Cambridge, Pearson or any school. We could not verify an IB or IGCSE school inside Mirganj, so the clusters below borrow school names already checked on our Gopalganj, Patna and Kolkata pages and label them as nearby. Confirm curriculum and admissions directly with each school.",
  schoolClusters: [
    {
      city: "Mirganj and Gopalganj district: limited options",
      note: "Schools in town and across the district follow the Bihar Board or CBSE. We found no IB or IGCSE school, which is why international study from here is usually private or online.",
      schools: [],
    },
    {
      city: "Nearby: Patna",
      note: "The state capital is where most Gopalganj families look first when they want a school beyond the usual boards.",
      schools: ["Vidya Sanskar School"],
    },
    {
      city: "Further afield: Delhi NCR",
      note: "A long train or flight, but the region many Bihar families target for boarding and international curricula.",
      schools: ["The British School, New Delhi", "Pathways World School, Gurugram"],
    },
    {
      city: "Further afield: Kolkata",
      note: "Reached by rail and a common choice for eastern India families seeking international schools.",
      schools: ["Calcutta International School", "The Heritage School, Kolkata"],
    },
  ],

  modesIntro:
    "Every Mirganj lesson is delivered online. Three arrangements cover what families normally ask for.",
  modes: [
    {
      title: "Weekly private lessons",
      description:
        "One student, one tutor, one fixed weekly hour on live video with a shared whiteboard, working through the syllabus in order.",
      bullets: [
        "No tutor visits a home in Mirganj; teaching is online",
        "The same tutor each week",
        "A short written note for parents afterwards",
        "In-home visits exist only in Gurugram and parts of Delhi NCR",
      ],
    },
    {
      title: "Exam-season intensives",
      description:
        "Concentrated weeks before May or November papers, built around past questions, mark schemes and timed practice.",
      bullets: [
        "Timed papers under exam conditions",
        "Targeted revision of weak topics",
        "Command-term drills",
        "Dates arranged around festivals",
      ],
    },
    {
      title: "Board-switch bridging",
      description:
        "A compact run of lessons for a child moving from the Bihar Board or CBSE into IGCSE or IB work, filling gaps in method, vocabulary and practicals.",
      bullets: [
        "A diagnostic first session",
        "Extended-answer writing practice",
        "Lab-report technique",
        "Unhurried pacing",
      ],
    },
  ],

  sections: [
    {
      heading: "Who in Mirganj looks at the IB or IGCSE in the first place?",
      paragraphs: [
        "In a town like Mirganj the families who ask about international curricula are few, and their reasons are rarely about fashion. Gopalganj district has a long tradition of sending people outward: to Patna for government jobs and coaching, to Delhi and Mumbai for work, and to the Gulf for a generation of migrant labour. That outward habit shapes how parents think about their children's future.",
        "One kind of family has a parent already working in a large city or abroad, and expects the child to join them eventually. For that child an IB or IGCSE record travels more smoothly than a state-board certificate. Another kind has a relative who moved to Delhi NCR, Kolkata or the UK, and the cousins there are already on the international track.",
        "A third group is simply curious. They have seen a nephew write research-style essays and solve open problems and wonder whether the child at home would enjoy that approach more than rote revision. A few are teachers or doctors posted in the district who know they may be transferred.",
        "None of these families wants to send a fourteen-year-old away to an unfamiliar city. Online tutoring lets the child stay with the family in Mirganj while working with a teacher who understands the syllabus.",
      ],
      bullets: [
        "A parent working in Patna, Delhi NCR or the Gulf",
        "Cousins or relatives already on an international track",
        "Interest in project work over rote revision",
        "Transferable jobs in medicine, teaching or banking",
      ],
    },
    {
      heading: "Bihar Board, CBSE, IGCSE and IB: what really differs for a Mirganj student?",
      paragraphs: [
        "A child in Mirganj usually follows the Bihar School Examination Board, which holds matriculation at Class 10 and the intermediate exams at Class 12, or a CBSE school using NCERT books. Both reward accuracy of recall and neat reproduction, and the board marks decide a large share of what happens next.",
        "Cambridge and Pearson Edexcel IGCSE examinations in Class 9 and 10 are set externally and ask for application: unfamiliar data, short explanations and extended reasoning. The IB Diploma goes broader, requiring six subjects, a research essay, a philosophy-style course and a service element.",
        "The shift is less about syllabus size than about what earns credit. A Bihar Board answer that repeats the textbook paragraph might score full marks at home, while an IGCSE or IB marker wants the student to use that knowledge on a new situation and say why.",
        "The table lays the differences out the way families usually ask about them.",
      ],
      table: {
        caption: "Bihar Board, CBSE, IGCSE and IB Diploma as seen from Mirganj",
        columns: ["Feature", "Bihar Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Exam stages", "Matric (Class 10) and Intermediate (Class 12)", "Class 10 and Class 12 boards", "Two-year course, taken at Class 10 level", "Two-year course at Class 11-12"],
          ["Question style", "Textbook-centred, recall heavy", "NCERT-centred, some application", "Structured, data and explanation", "Essay, inquiry and internal assessment"],
          ["Availability near Mirganj", "Everywhere", "A few private schools in the district", "None confirmed; private or online study", "None confirmed; private or online study"],
          ["Entry to Bihar colleges and Patna University", "Direct", "Direct", "Usually needs an equivalence certificate", "Usually needs an equivalence certificate"],
          ["Language component", "Hindi compulsory, other languages optional", "Hindi or another language", "English with optional second language", "Language A plus Language B"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Mirganj family?",
      paragraphs: [
        "No rate list appears on this page, because any single number would be wrong for most readers. A Class 9 IGCSE Coordinated Science learner and a Higher Level Diploma Physics candidate are not the same job, so we send a quote in writing before any lesson is booked.",
        "Pricing moves with four things. Level comes first, since Higher Level and Extended courses call for deeper preparation. Tutor experience with that exact syllabus is second. The number of weekly lessons and the length of the commitment follow, so a full-year plan is a different arrangement from a six-week revision burst.",
        "Compared with studying in Patna, there is a real saving that rarely appears in the tuition figure itself. A Mirganj student does not pay for a rented room in the capital, daily bus fares or an evening lost to a long journey.",
        "A group coaching batch always costs less per head. What it cannot give is a tutor who watches one child's working and fixes it live, and the free opening lesson is meant to let you judge that difference for yourself.",
      ],
    },
    {
      heading: "Online tutor, coaching class, village teacher or self-study: which suits a Mirganj student?",
      paragraphs: [
        "The tuition market around Mirganj and Gopalganj is aimed squarely at Bihar Board results, entrance exams and, in the district town, a growing number of foundation courses for engineering and medicine. These serve their purpose and are worth keeping.",
        "What they seldom include is knowledge of an IB or IGCSE mark scheme, the structure of an Internal Assessment, or the way Cambridge and Edexcel word their questions. Few teachers anywhere in the district have taught them, and asking a local teacher to learn them as they go leaves the student exposed.",
        "Studying alone with past papers is workable for an older and well organised learner, though without feedback the same mistakes can repeat for months.",
        "Online private lessons place a syllabus specialist in front of one child on a regular timetable. The table compares the options.",
      ],
      table: {
        caption: "Study routes for an IB or IGCSE learner in Mirganj",
        columns: ["Route", "Fit with IB or IGCSE content", "Attention per child", "Timetable", "Main limitation"],
        rows: [
          ["Online private tutor", "High, matched by course", "Complete", "Agreed weekly slots", "Needs reliable power and data"],
          ["Gopalganj coaching batch", "Low", "Shared across a batch", "Fixed by the centre", "Built for state-board and entrance exams"],
          ["Local teacher giving home lessons", "Partial at best", "High", "Flexible", "Rarely trained in IB or Cambridge marking"],
          ["Self-study from past papers", "Depends on the student", "None", "Fully self-set", "No correction or feedback"],
        ],
      },
    },
    {
      heading: "How do Chhath, the Gandak floods and the Bihar school year shape study in Mirganj?",
      paragraphs: [
        "A good timetable here begins with the river. Monsoon rain between late June and September fills the Gandak and its channels, and in a wet year low-lying roads close, power fails and families around the embankments move belongings upstairs. Lessons are best front-loaded into the drier months and kept flexible in July and August.",
        "Chhath is the great fixed point. In the weeks around Diwali and Chhath in October and November, households fast, cook and travel, and migrant relatives return from Delhi and Mumbai. A student in Mirganj at that time will not be at a desk most evenings, so the November IGCSE series and IB mock exams need to be planned around it.",
        "Bihar's summer heat from April to June is severe and power supply can be uneven, so lessons are better in early morning or after dusk. Winter fog from December to January makes evenings cool and steady, which suits long sessions. Holi, Eid, Durga Puja and the wedding season each take a few days.",
        "The table suggests a working year.",
      ],
      table: {
        caption: "A study year for an IB or IGCSE student in Mirganj",
        columns: ["Months", "Academic milestone", "Local factor", "How to plan"],
        rows: [
          ["April to June", "IGCSE and IB May papers finish; new term begins", "Intense heat, wedding season", "Early-morning or late evening lessons"],
          ["July to September", "Foundations for the new year, topic choices", "Monsoon and Gandak flood risk", "Keep slots flexible; hotspot as backup"],
          ["October to November", "IGCSE November series, IB mocks", "Durga Puja, Diwali and Chhath", "Finish mock papers before the festival rush"],
          ["December to February", "Internal assessment drafts, extended essay research", "Cold weather and fog", "Longer weekend sessions"],
          ["March", "Final revision for May", "Holi, pleasant weather", "Past papers under timed conditions"],
        ],
      },
    },
    {
      heading: "Where could a Mirganj student go after the IB or IGCSE?",
      paragraphs: [
        "For many Bihar families the first image is still Patna, with its university, NIT Patna, AIIMS Patna and the capital's medical colleges. Further afield are Delhi University, JNU, the IITs and the central universities, while Kolkata, Pune and Bengaluru attract students who want a wider campus experience.",
        "Entering an Indian institution with an IB or IGCSE record usually involves national entrance examinations such as JEE Main, NEET-UG or CUET-UG, along with an equivalence certificate from the Association of Indian Universities where a university asks for it. Rules and eligibility lists change from one year to the next, so read the current notices and ask each university. Tutors teach subjects; they cannot confirm eligibility.",
        "Overseas options include the UK, Canada, Australia, Singapore and the United States. An IB Diploma is widely recognised there, and good grades in Mathematics and the sciences open engineering, computing and health-related degrees.",
        "Settling on a few target courses before choosing subjects keeps the plan sensible. A student headed for medicine needs Biology and Chemistry; one eyeing engineering needs Mathematics and Physics.",
      ],
    },
    {
      heading: "How hard are IB Maths and the sciences for students from the Gopalganj area?",
      paragraphs: [
        "Mathematics is the subject parents ask about most. Bihar students tend to be fast and neat at algebra, thanks to years of drilled practice, but the IB asks them to explain a method, interpret a result and judge whether an answer is sensible. Analysis and Approaches rewards algebra and proof. Applications and Interpretation rewards modelling, and a project on flood data or sugar-mill output can be memorable.",
        "In Physics the traps are units, uncertainty and long reasoning chains rather than formulae. Chemistry needs steady work on mole calculations, equilibria and organic pathways. Biology rewards careful vocabulary and answering exactly what is asked.",
        "The first lesson is a diagnostic. It frequently shows the distance to cover is smaller than parents feared, and the tutor then builds weekly practice from real examination questions.",
        "Students who also sit entrance coaching in Patna or Gopalganj must keep an honest weekly plan, since JEE and NEET syllabi overlap with IB content but do not match it.",
      ],
      bullets: [
        "Practice on unfamiliar Paper 3 style questions",
        "Graphing calculator routines for Maths",
        "Reading data and propagating uncertainty",
        "Command-term training across every subject",
        "Early scheduling of the internal assessment",
      ],
    },
    {
      heading: "How should a Mirganj student choose between IGCSE Core and Extended?",
      paragraphs: [
        "Cambridge sets Core and Extended papers, and Pearson Edexcel offers Foundation and Higher tiers. The tier controls the highest grade reachable, with Core and Foundation capped lower and Extended and Higher covering the whole scale.",
        "A student planning A Levels, the IB Diploma or a science degree should usually sit Extended or Higher in Mathematics and the sciences. For a subject that is a struggle and will not be needed later, Core or Foundation can bring a calmer result and protect time for other courses. The decision belongs early in the first year, with the tutor's view of the student's working.",
        "Private candidates must locate an exam centre that accepts outside entries, probably in Patna or another large city, and entry dates and fees vary by board. The tutor handles the syllabus and paper style; the family handles registration.",
        "Subject combinations matter too. A pupil heading for engineering gains from taking Mathematics, Additional Mathematics and Physics together.",
      ],
    },
  ],

  tutorsIntro:
    "Our tutors teach live over video to families across India, and each profile lists subjects, levels and teaching history. Any lesson with a Mirganj student takes place online.",

  process: [
    { title: "Send us the details", description: "Write the board, programme, subject, level and your free evenings to support@ibgram.com, or message +91 7439 368 115 on WhatsApp." },
    { title: "See a shortlist", description: "We reply with tutors whose teaching history fits, with open weekly slots in Indian time." },
    { title: "Attend the free trial", description: "A first online lesson that costs nothing and commits you to nothing." },
    { title: "Read the rate in writing", description: "The weekly timetable and charge arrive in writing, and nothing is booked until you agree." },
    { title: "Follow progress", description: "A written note after each session, and a change of tutor if the match is wrong." },
  ],

  whyPoints: [
    { title: "Syllabus-matched teachers", description: "Tutors are chosen for the course, tier and exam session, not the subject name alone." },
    { title: "Frank about online", description: "No tutor visits Mirganj, so every lesson runs on screen at the child's own desk." },
    { title: "Exam skills built in", description: "Command terms and mark schemes are taught together with content." },
    { title: "Parents kept informed", description: "A short summary follows each lesson." },
    { title: "Assessed work is the student's", description: "Tutors coach, and never write IAs, essays or coursework." },
    { title: "Change if it is not right", description: "A different tutor is offered when the first match does not fit." },
  ],

  faqs: [
    {
      question: "Will an IB or IGCSE tutor come to my house in Mirganj?",
      answer:
        "No, tutoring for Mirganj is online only. The child learns at home, but the tutor appears on live video, and home visits exist only in Gurugram and parts of Delhi NCR. For a town without any local IB specialist, the practical gain is that a teacher with the right syllabus experience can be reached at all.",
    },
    {
      question: "Is there an IB or IGCSE school in Mirganj?",
      answer:
        "We could not confirm one. Schools in Mirganj and across Gopalganj district follow the Bihar Board or CBSE. Families wanting an international school usually look to Patna, Delhi NCR or Kolkata, join an online school, or study privately. Please check each school yourself; our tutoring is independent and works alongside whatever the child attends.",
    },
    {
      question: "What does online home tuition for IGCSE look like in Mirganj?",
      answer:
        "It is a private lesson at a fixed weekly hour. The student sits at a table at home, the tutor joins by video and both use a shared screen and whiteboard. Parents receive a brief note afterwards. A laptop, headphones and stable internet are needed, with a phone hotspot or inverter as backup for power cuts and monsoon days.",
    },
    {
      question: "How much does IB or IGCSE private tuition cost in Mirganj?",
      answer:
        "The charge depends on the course level, the tutor's experience with the syllabus and how many weekly lessons you choose, so we give it in writing before booking and publish no list. Higher Level Diploma and exam-season blocks cost more than Core IGCSE help. There is no travel cost, and the first lesson is free.",
    },
    {
      question: "Can a Bihar Board or CBSE student switch to IGCSE or IB?",
      answer:
        "Yes, though the move is easier at some points than others. Joining before Class 9 for IGCSE or Class 11 for the Diploma is simplest. A bridging block of lessons can cover gaps in written method, practical skills and command terms. The school or exam centre decides what a switch requires, so confirm with them first.",
    },
    {
      question: "Which IB subjects do Mirganj students ask for most?",
      answer:
        "Mathematics, Physics, Chemistry and Biology lead, followed by Economics and Business Management. Many families have engineering or medical hopes, and these subjects keep both open. Students who speak Bhojpuri or Hindi at home also look for English Language and Literature help, because essay writing in English is the part that needs the most practice.",
    },
    {
      question: "Do tutors write the Internal Assessment or Extended Essay?",
      answer:
        "No. Tutors coach, and never write or edit assessed work on a student's behalf. They can explain what a criterion means, discuss how to narrow a research question, look at the structure of a plan and give general feedback. Authorship of the IA, Extended Essay, TOK essay and coursework stays entirely with the student, as the IB and the exam boards require.",
    },
    {
      question: "How are lessons scheduled around Chhath and the floods?",
      answer:
        "We plan the year with you. Weeks around Chhath and Diwali are normally left free, mock papers are moved earlier, and lessons in July and August stay flexible in case the Gandak floods disrupt roads or power. If a session is lost to an outage, the tutor and family agree a make-up slot.",
    },
    {
      question: "What equipment does a Mirganj student need?",
      answer:
        "A laptop or tablet with a camera, a headset and a steady connection are the basics. A phone hotspot from a second provider is a sensible backup, and a power backup helps in summer. A small whiteboard or paper pad lets the child work through steps visibly, and a scientific or graphing calculator is needed for IB Mathematics.",
    },
    {
      question: "Can my child take Cambridge or Edexcel IGCSE exams near Mirganj?",
      answer:
        "Exams are held at registered centres, and we have not confirmed one in Mirganj itself. Private candidates usually register through a centre in a larger city such as Patna, subject to that centre accepting external entries. Dates, fees and deadlines vary, so ask the centre early. Tutors prepare the student for the papers but cannot arrange entry.",
    },
    {
      question: "Is IGCSE a good bridge before the IB Diploma?",
      answer:
        "For many students it is, because it trains the habits the Diploma demands: explaining reasoning, using data and writing structured answers. A child who has done IGCSE Mathematics, sciences and English meets less of a shock in Class 11. It is not a requirement, and many IB schools admit students from CBSE and state boards directly.",
    },
    {
      question: "Can IB or IGCSE support run alongside JEE or NEET coaching?",
      answer:
        "Yes, with realistic planning. The syllabi overlap in Physics, Chemistry, Biology and Mathematics but do not match, and the exam styles differ. A tutor can set a weekly plan so entrance coaching in Gopalganj or Patna and IB work do not collide. Eligibility for JEE or NEET with an IB or IGCSE record should be checked in the official notice each year.",
    },
    {
      question: "What if the first tutor does not suit my child?",
      answer:
        "Tell us, and we arrange a different tutor at no extra charge for the change. A fit problem is common and nobody takes offence. It may be pace, teaching style or timing. The free first lesson exists partly so you can notice this early, and the written notes after sessions help you judge progress objectively.",
    },
    {
      question: "How do I begin?",
      answer:
        "Message support@ibgram.com or WhatsApp +91 7439 368 115 with the child's class, board, subject, level and preferred evenings. We reply with suitable tutors and open slots in Indian time. The first lesson is free, the rate comes in writing, and you decide afterwards whether to continue. The whole process can be handled by phone.",
    },
    {
      question: "Can younger children in Mirganj take PYP or MYP support?",
      answer:
        "Yes. Younger students are taught in shorter, more varied sessions, often forty minutes with a break. PYP support focuses on reading, number sense and inquiry skills, while MYP work covers criteria-based writing in sciences, Mathematics and languages. A parent usually sits nearby for the first few lessons, and tutors adjust the pace to the child.",
    },
    {
      question: "Are Hindi lessons available for IB or IGCSE students?",
      answer:
        "Yes. We can arrange tutors for IB Hindi A or B and IGCSE Hindi as a Second Language. For many Mirganj students this is a confidence subject, since they speak Hindi daily, but formal analysis and examination writing still need practice. Bhojpuri-speaking students often find the written register the harder part, and a tutor can work on that.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in India", href: "/india/", description: "The national page for online IB and IGCSE tuition across the country." },
    { label: "Tutors in Gopalganj", href: "/gopalganj/", description: "The district seat, a short journey from Mirganj, with its own page." },
    { label: "Tutors in Siwan", href: "/siwan/", description: "A neighbouring Saran division town with online IB and IGCSE tuition." },
    { label: "Tutors in Patna", href: "/patna/", description: "The state capital, where many Bihar families look for international schools." },
    { label: "Tutors in Chhapra", href: "/chhapra/", description: "Another Saran division city served by the same online tutors." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse tutors for all IB programmes and subjects." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Pearson Edexcel IGCSE subject support." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the Diploma works across six subjects and the core." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criterion-based learning for Class 6 to 10." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led learning for younger children." },
    { label: "IB Maths course", href: "/courses/ib/mathematics/", description: "Analysis and Approaches or Applications and Interpretation explained." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles with subjects, levels and teaching history." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or arrange a free first lesson." },
  ],

  closingHeading: "Start with one free online lesson from Mirganj",
  closingBody:
    "Tell us the programme, subject and level, and we will propose a tutor who has taught it, with a slot that fits around school, coaching and the family calendar. The first lesson is free, the rate is given in writing, and the lessons themselves happen at your own desk, online.",
};
