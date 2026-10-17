import type { CitySeoPage } from "../types";

/**
 * /talikota/ - IB and IGCSE tutoring page for Talikota (Talikoti), Vijayapura district, Karnataka.
 * No IB or Cambridge/Edexcel school is confirmed in the town, so stripSchools is empty and the
 * clusters point honestly to Bengaluru and Pune using names already verified on sibling pages.
 * Online only: in-person home tuition runs just in Gurugram and parts of Delhi NCR.
 */
export const talikota: CitySeoPage = {
  slug: "talikota",
  countryName: "Talikota",
  countryNameLong: "Talikota, Karnataka",
  demonym: "Talikota",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots avoid the dry April and May heat, Ugadi, Dasara and Diwali breaks, and the weeks when the Krishna basin harvest keeps households busy",
  lastUpdated: "2026-09-21",
  geo: { latitude: 16.4747, longitude: 76.31 },
  wikipedia: "https://en.wikipedia.org/wiki/Talikota",
  alternateNames: ["Talikoti", "Talikota Vijayapura"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Talikota | Online Private Tuition",
  metaDescription:
    "Live online IB and IGCSE tuition for Talikota students in Vijayapura district: DP, MYP, Cambridge and Edexcel subjects, one to one, with a free first lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition in Talikota",
  heroEyebrow: "ONLINE IB & IGCSE PRIVATE TUITION IN TALIKOTA",
  heroSubtitle:
    "Private tuition at home in Talikota for the IB or IGCSE means a laptop, a quiet desk and a tutor on screen who has taught your child's exact syllabus. The town in Vijayapura district teaches almost wholly through the Karnataka State Board, so we match a specialist from elsewhere in India for live one-to-one lessons. Tutors do not visit homes in Talikota; that exists only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Talikota",
  imageAltText: "A Talikota student checking an IB Mathematics solution with an online tutor on a shared screen at home",
  secondaryKeywords: [
    "IB tutor Talikota",
    "IGCSE tutor Talikota",
    "IB home tuition Talikota",
    "IGCSE home tuition Talikota",
    "IB private tuition Talikota",
    "IB Maths tutor Talikota",
    "IGCSE Maths tutor Talikota",
    "IB Physics tutor Talikota",
    "IB Chemistry tutor Talikota",
    "IB Biology tutor Talikota",
    "IB DP tutor Talikota",
    "IB MYP tutor Talikota",
    "IB PYP tutor Talikota",
    "IGCSE online tuition Talikota",
    "IB tutor Talikoti",
    "online IB tuition Vijayapura district",
    "IGCSE tutor Bijapur district Karnataka",
    "IB tutor Muddebihal Talikota",
  ],

  heroTrustPoints: [
    "A tutor selected for your child's IB subject and level, or IGCSE board, code and tier",
    "Online lessons only; home visits are offered solely in Gurugram and parts of Delhi NCR",
    "A free trial lesson before any decision, and a rate quoted in writing",
    "Independent of the IB, Cambridge, Pearson and every school named here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The full IB range" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards" },
    { value: "IST", label: "One time zone" },
    { value: "Free trial", label: "No payment first" },
  ],

  intro: {
    heading: "Finding an IB or IGCSE tutor from Talikota, where the 1565 battlefield town runs on state board schools",
    paragraphs: [
      "Talikota is a taluk town in Vijayapura district, better known to history readers for the 1565 battle that ended the Vijayanagara empire's dominance than for any modern international school. Its classrooms follow the Karnataka State Board and, in a few cases, CBSE, with instruction mainly in Kannada and English. As far as we can confirm, nobody in Talikota teaches the IB or a Cambridge or Edexcel IGCSE course at school.",
      "A family here asking about these curricula therefore starts from a different place than a family in Bengaluru. Often a child has been enrolled in a boarding school in another city and returns home for holidays, or a parent working in the Gulf or in a metro intends the child to follow an international route. The common problem is the same: no tutor in the neighbourhood has ever taught IB Chemistry or IGCSE Additional Mathematics.",
      "Online lessons solve that problem directly. A tutor is chosen for the course, wherever in India that tutor lives, and meets your child on a shared whiteboard at the hour you agree. The lesson is private, marked against the board's own scheme, and followed by a short written note. Tutors coach and mark; they never write an Internal Assessment, Extended Essay or coursework.",
    ],
    bullets: [
      "Support for IB PYP, MYP, DP and CP subjects",
      "Cambridge and Pearson Edexcel IGCSE at Core, Extended, Foundation and Higher",
      "Live one-to-one lessons online in Indian Standard Time",
      "A free first lesson and a plan in writing",
      "No tutor visits in Talikota; in-person lessons exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "No school in Talikota delivers an IB stage, so the stage a child follows is tied to a school or plan outside the town. The notes below describe the situations families actually raise with us, so that the support fits the real starting point.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-12",
      description:
        "Learning is built around inquiry units across transdisciplinary themes, and the final-year Exhibition is a group investigation. There is no formal exam, so tutoring concentrates on reading fluency, confidence with number and the questioning habit the programme prizes.",
      countryNote:
        "Talikota families asking about the PYP are normally keeping a child in the programme after a move, or preparing a younger child for a campus elsewhere.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP subjects are marked against four criteria, and a Personal Project sits at the end. The challenge for most students is moving from describing what happened to explaining why, and a tutor helps by showing what each band of the rubric rewards.",
      countryNote:
        "Support here is usually for a student who joined an MYP school in Bengaluru or Pune, boarding away from Talikota, and needs steady help during term and vacations.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, with Theory of Knowledge, a 4,000-word Extended Essay and CAS. Most exam papers fall in May, with a November session in some schools.",
      countryNote:
        "In Vijayapura district the Diploma requests mostly cover Mathematics, the sciences and English A, usually for a student who switched from Karnataka State Board Class 10.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pair of Diploma courses is combined with a career-related study, a reflective project and a core of personal and professional skills. Few schools in India offer it.",
      countryNote:
        "Talikota enquiries about the CP are rare; the practical help is almost always teaching of the Diploma courses within the pathway.",
    },
  ],

  subjectsIntro:
    "A Higher Level science student and a Standard Level humanities student need very different tutors, so a match begins with subject, level and the sitting your child is aiming for. Predicted grade comes second, then the tutor's available evenings.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof for students heading to engineering, with a Paper 3 at HL that tests unfamiliar problem solving." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling with calculator fluency; the Exploration needs an early topic choice to avoid a late scramble." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through to fields and quantum physics, with an investigation graded on method, analysis and evaluation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Mole calculations, bonding, energetics and organic routes, with the data booklet used quickly and without hesitation." },
    { name: "IB Biology", levels: "HL / SL", description: "Questions test command terms first and content second, so students are drilled on describe, explain and evaluate." },
    { name: "IB Economics", levels: "HL / SL", description: "Precise diagrams tied to real events, and HL data-response practice for Paper 3." },
    { name: "IB Business Management", levels: "HL / SL", description: "Theory applied to the case study, with a research project centred on a single real organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis, comparative essays and the Individual Oral, each rehearsed on its own." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode, object-oriented thinking and a coherent internal solution with matching documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches and studies recalled accurately, then deployed in well-structured extended answers." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking applied to water, soil and climate cases, which suits Krishna basin students." },
    { name: "IB Geography", levels: "HL / SL", description: "Case study depth, defensible fieldwork and evaluative writing." },
    { name: "IB Kannada B", levels: "HL / SL", description: "A natural language choice for Talikota students; work covers text types, register and a confident oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "No content to memorise; the aim is arguing both sides of a knowledge question with examples." },
  ],

  igcseSubjectsIntro:
    "Cambridge 0580 Extended and Edexcel 4MA1 Higher both carry the name IGCSE but are prepared for differently, so we start from board, code and tier. For Talikota students we also confirm whether the entry is the February-March, May-June or October-November Cambridge series, or an Edexcel January or summer window.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended candidates need fast algebra and clearly shown working; many lost marks are missing lines, not missing knowledge." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Early calculus and trigonometry, a good bridge for those planning IB Maths at Higher Level." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Question phrasing differs from Cambridge, so practice must come from Pearson papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging equations, reading graphs and the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, electrolysis and organic chemistry, plus planning experiments on paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and ecosystems, with answers that follow mark-scheme vocabulary." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions and diagrams first, then evaluation, the stage where grades diverge." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Hand-tracing algorithms and writing pseudocode alongside real programming." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summaries and descriptive pieces trained under timed conditions." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, comprehension and writing for students whose home language is Kannada or Urdu." },
  ],

  regionsTitle: "Talikota localities and nearby towns our online tutors serve",
  regionsIntro:
    "Everything is online, so a locality matters for rhythm rather than travel: when school and any tuition class end, when the heat eases and how many in the household share a connection. Some places below are neighbouring towns that feed the same families.",
  regions: [
    { name: "Talikota town centre and bazaar", note: "The older commercial core, where most families keep a child in a Kannada or English medium state board school." },
    { name: "Bus stand side", note: "Busy through the day with road traffic to Vijayapura and Muddebihal, so evening lessons are quieter." },
    { name: "Vijayapura road", note: "The direction of the district city, which many families visit for hospitals, shopping and better coaching options." },
    { name: "Muddebihal road (nearby)", note: "Links to the neighbouring taluk town about twenty kilometres away, often the other half of a family's weekly travel." },
    { name: "Krishna river villages (nearby)", note: "Farming households around the river; students join online on a home broadband or mobile connection." },
    { name: "Basavana Bagewadi (nearby)", note: "A taluk town to the west, known for its temple, with its own mix of state board and CBSE schools." },
    { name: "Almatti reservoir area (nearby)", note: "Irrigation and engineering families linked to the Krishna dam project, some from outside the region." },
    { name: "Vijayapura city (nearby)", note: "The district headquarters, home to BLDE University and a larger school and coaching scene, the reference point for most Talikota students." },
  ],

  schoolDisclaimer:
    "No school in Talikota is confirmed to teach the IB or a Cambridge or Edexcel IGCSE course, and the schools listed below are in other cities. IB Gram is an independent tutoring service and is not affiliated with those schools, the International Baccalaureate, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Nearby: Bengaluru",
      note: "Karnataka's main cluster of IB and IGCSE schools, about ten to twelve hours by road or bus. Boarding or relocation is the usual way a Talikota family would use these schools.",
      schools: ["Stonehill International School", "Canadian International School, Bengaluru", "The International School Bangalore"],
    },
    {
      city: "Nearby: Pune",
      note: "Reachable by rail through Solapur or by road, Pune offers several established international campuses and attracts families in Maharashtra and North Karnataka.",
      schools: ["Mahindra International School", "Indus International School, Pune"],
    },
    {
      city: "Talikota and Vijayapura district: state board and CBSE",
      note: "Local schools follow the state board or CBSE. Families who want international subjects usually add tuition alongside school or sit Cambridge exams as private candidates.",
      schools: [],
    },
  ],

  modesIntro:
    "Whatever your child's course, the lesson itself is the same in Talikota: one tutor, one student, live video. What changes is the rhythm, a standing weekly slot, a longer plan with written reviews, or a short push before an exam. No tutor travels to your home.",
  modes: [
    {
      title: "Standing weekly lesson",
      description:
        "The same tutor on the same evening, working on a shared board with papers on screen. It suits a student whose school covers the syllabus and who needs a second explanation.",
      bullets: [
        "Specialists from across India",
        "Covers MYP, DP and all IGCSE subjects",
        "Past papers shared on screen",
        "One consistent tutor",
      ],
    },
    {
      title: "Planned term with check-ins",
      description:
        "Regular lessons through a term with a note after each class and a longer review every few weeks, helpful for a child studying through a boarding school's holidays or as a private candidate.",
      bullets: [
        "Written summary after each class",
        "Progress review against mark schemes",
        "Good for new arrivals to the IB",
        "Extra sessions before mocks",
      ],
    },
    {
      title: "Short intensive before exams",
      description:
        "Two or three lessons a week for a few weeks, mostly timed papers and fast correction, scheduled away from the hottest weeks and the festival breaks.",
      bullets: [
        "Papers under real time limits",
        "Quick feedback on errors",
        "Built around Dasara and Diwali",
        "Book three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "What kind of family in Talikota looks for IB or IGCSE tutors?",
      paragraphs: [
        "Talikota is a small agricultural and trading town on the plains of Vijayapura district, where sugarcane, jowar and horticulture shape the local economy and families are spread across farming, small business, government service and teaching. Its schools use the Karnataka State Board and a small number of CBSE affiliations. Because no school here is confirmed to run the IB or an IGCSE syllabus, the families who ask for IB or IGCSE tutors are an unusual minority.",
        "One group has a parent working abroad or in a large city, who wants the child to keep a path to overseas study open. Another has a child already boarding in Bengaluru, Pune or Dehradun on an international programme and wants support during holidays at home. A third plans a move after Class 10 and wants Class 9 and 10 to lead cleanly into the Diploma.",
        "There are also private candidates, where a student sits Cambridge IGCSE papers at an approved exam centre while studying at a regular local school. For all of these, the missing piece is a tutor who knows the course and can teach it live from afar.",
        "The same facts explain why we describe lessons honestly as online. There is no benefit to promising a visit that is not offered, and a good tutor on screen beats a weak one in the room.",
      ],
      table: {
        caption: "Why Talikota families ask about IB or IGCSE",
        columns: ["Situation", "Where the child studies", "What tuition covers"],
        rows: [
          ["Boarding on an international programme", "Bengaluru, Pune or another city", "Holiday catch-up and weekly top-ups during term"],
          ["Plan to move after Class 10", "State board in Talikota or Vijayapura", "Bridging Maths, sciences and English before the DP"],
          ["Private IGCSE candidate", "Local school plus exam centre", "Full syllabus teaching and paper practice"],
          ["Parent working abroad", "Local, with an overseas plan", "Core subjects that support a foreign application"],
        ],
      },
      bullets: [
        "No IB or IGCSE school is confirmed in Talikota",
        "Demand is a small, specific set of households",
        "Online matching reaches specialists unavailable nearby",
        "Marking and content are identical to any other city",
      ],
    },
    {
      heading: "How is the Karnataka State Board different from IB and IGCSE?",
      paragraphs: [
        "The Karnataka State Board rewards reproducing a defined textbook syllabus in a single annual examination, while IB and IGCSE reward applying knowledge to new contexts and justifying a method. A Talikota student who scores comfortably in state board Science may still lose marks on an IGCSE Physics question that frames a familiar idea in an unfamiliar setting.",
        "Assessment structure differs. IB subjects carry an internal component, usually twenty to thirty per cent of the grade, and IGCSE offers coursework or an alternative-to-practical paper. Neither exists in the same form in a typical state board school, so planning, drafting and acting on feedback must be taught directly.",
        "Language is an extra factor in a Kannada-medium household. IB and IGCSE papers are in English, so the first weeks usually include building the subject vocabulary and the habit of writing a full structured sentence rather than a short phrase. Tutors who understand this make the shift gentler.",
        "None of this makes the new system harder in total. It simply asks different things, and a tutor who knows what a mark scheme wants can show a student where the marks are.",
      ],
      table: {
        caption: "Karnataka State Board against IB and IGCSE",
        columns: ["Feature", "Karnataka State Board", "IB / IGCSE"],
        rows: [
          ["Medium of instruction", "Kannada or English", "English"],
          ["What earns marks", "Recall of the syllabus", "Application, reasoning and evaluation"],
          ["Internal assessment", "Limited", "Substantial, criteria-marked"],
          ["Local availability", "Every school", "None confirmed in Talikota"],
          ["Recognition", "Strong in Karnataka and India", "Global"],
        ],
      },
      bullets: [
        "Reasoned answers beat recalled ones",
        "Coursework needs project skills",
        "English subject vocabulary needs early building",
        "A switch is practical with focused teaching",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost for a student in Talikota?",
      paragraphs: [
        "We publish no price list. The rate depends on the course, the level, the tutor's experience and how often your child studies, and it is quoted in writing after the free trial so nothing is a surprise. Because lessons are online, no travel or home-visit surcharge enters the figure.",
        "Higher Level courses in Mathematics and the sciences tend to cost more than Standard Level humanities because fewer tutors can teach them at depth. Tutors who have marked papers or taught the syllabus for many years charge more than newer ones. A student who needs two lessons a week naturally pays more than one with a single weekly slot.",
        "For Talikota families a useful comparison is the cost of reaching a larger city for tuition. The bus to Vijayapura takes the better part of two hours each way, and a family weighing that trip against a lesson at the home desk usually finds the online route more practical.",
        "Say plainly what you can afford at the trial. A focused four-week plan on one weak topic often costs less and helps more than a long general course.",
      ],
      bullets: [
        "Rates arrive in writing before booking",
        "Level, experience and weekly hours set the figure",
        "No travel cost with online lessons",
        "Focused plans can offer better value",
      ],
    },
    {
      heading: "Is online tuition better than coaching in Vijayapura or self-study?",
      paragraphs: [
        "For IB and IGCSE, online one-to-one tuition is more reliable than coaching in the district headquarters, because coaching there concentrates on state board, JEE and NEET and few teachers have handled an IB paper. Online lets you choose a tutor on the strength of the syllabus they have taught.",
        "Self-study can work for a disciplined student with textbooks and past papers, but without marking a student repeats the same error for months. Private tutors in the town can be strong for Kannada or general Mathematics, though a specialist in IB Physics HL or Edexcel Higher Mathematics is unlikely to be found within an hour of Talikota.",
        "Online lessons also save time. A student studies at home after school, uses a shared whiteboard for graphs and circuits, and has a written note afterwards. The tutor remains the same through the year, which matters in subjects where each topic builds on the last.",
        "Many families blend approaches, using school for the base, online tuition for the hardest subject and self-study for revision.",
      ],
      table: {
        caption: "Study options compared for a Talikota student",
        columns: ["Option", "IB or IGCSE knowledge", "Travel", "Feedback"],
        rows: [
          ["Online one-to-one tuition", "Matched to the exact course", "None", "Marked to scheme with a written note"],
          ["Coaching in Vijayapura", "Mostly state board, JEE, NEET", "Long bus journey", "Group level"],
          ["Private tutor in town", "Varies, seldom IB trained", "At home if found", "Depends on the tutor"],
          ["Self-study", "Whatever books you gather", "None", "Little without a marker"],
        ],
      },
      bullets: [
        "Online choice is by syllabus experience, not postcode",
        "Local coaching seldom covers IB or Cambridge",
        "Self-study needs a marker",
        "A blend of methods is common",
      ],
    },
    {
      heading: "When are exams, and how do heat and festivals shape study in Talikota?",
      paragraphs: [
        "The IB Diploma has May and November sessions, and Indian schools usually use May. Cambridge IGCSE runs in February-March, May-June and October-November, and Edexcel runs in January and May-June. Mocks typically sit in December and January, so the first term of the academic year is the time to build content.",
        "Vijayapura district is among the drier and hotter parts of Karnataka. April and May regularly cross forty degrees, which makes afternoon study draining, and lessons work better in the morning or after sunset. Rainfall is modest and mostly falls from June to September, with the northeast monsoon contributing in October.",
        "The festival calendar has its own weight. Ugadi falls in March or April, Ganesh Chaturthi in the late monsoon, Dasara and Diwali in October and November, and Sankranti in January. Muharram observances are also widely marked in the region. Mocks and IA drafts should be planned around these breaks.",
        "A student on the November IB session should treat the summer break as an intensive window; one aiming at May should use October to February.",
      ],
      table: {
        caption: "Exam sessions and local calendar",
        columns: ["Period", "Exam or school event", "Local effect in Talikota"],
        rows: [
          ["January-February", "IB mocks, Edexcel January series, state board practicals", "Cool, steady study weeks; Sankranti break"],
          ["March-April", "Cambridge Feb-March results, Ugadi", "Heat builds quickly"],
          ["May-June", "IB May exams, Cambridge and Edexcel summer", "Heat peaks; evening or early lessons"],
          ["July-September", "IB November preparation, IA drafts", "Monsoon rain; Ganesh Chaturthi"],
          ["October-November", "Cambridge Oct-Nov, IB November", "Dasara and Diwali interruptions"],
        ],
      },
      bullets: [
        "IB sits in May and November; IGCSE in three series",
        "April and May heat limits afternoon study",
        "Plan mocks around Dasara and Diwali",
        "Begin intensives two to three months before",
      ],
    },
    {
      heading: "Where can IB and IGCSE students from Talikota study afterwards?",
      paragraphs: [
        "The Association of Indian Universities issues equivalence for the IB Diploma, which most Indian colleges accept, and central universities use CUET-UG scores that IB students sit alongside everyone else. In Karnataka, state engineering and medical seats are reached through KCET and NEET, whose rules for IB and IGCSE students should be checked each year with the relevant authority.",
        "Nearby institutions include BLDE University and the Karnataka State Akkamahadevi Women's University in Vijayapura, and KLE institutions in Belagavi and Hubballi. For engineering through JEE Main, the qualifying subjects are Mathematics, Physics and Chemistry. Medical aspirants must hold Biology, Chemistry and Physics with English.",
        "Abroad, the IB Diploma is read by universities in the UK, US, Canada, Australia and Europe, and IGCSE results form part of an application that continues through A Levels or the IB. A tutor can help a student choose subjects that fit both Indian and overseas goals.",
        "For a Talikota family a plan made in Class 8 or 9 avoids a scramble at the end of Class 10.",
      ],
      table: {
        caption: "Pathways from IB or IGCSE for Talikota students",
        columns: ["Goal", "What is needed", "How a tutor helps"],
        rows: [
          ["Indian universities", "AIU equivalence and CUET-UG for central universities", "Exam performance and CUET subject preparation"],
          ["Engineering via JEE Main", "Mathematics, Physics, Chemistry", "HL Maths and Physics with JEE overlap planned"],
          ["Medicine via NEET", "Biology, Chemistry, Physics, English", "Depth in HL Biology and Chemistry"],
          ["Study abroad", "Predicted IB points or IGCSE then A Level grades", "Targeted preparation for threshold grades"],
        ],
      },
      bullets: [
        "AIU equivalence is the standard route",
        "Check KCET, JEE and NEET rules yearly",
        "Overseas universities read IB points and IGCSE grades",
        "Plan subject choices early",
      ],
    },
    {
      heading: "How are IB Maths and the sciences taught online to a Talikota student?",
      paragraphs: [
        "IB Mathematics comes as Analysis and Approaches or Applications and Interpretation, each at Higher or Standard Level. The first suits students who enjoy algebra and proof; the second suits those who prefer data and modelling. We ask about the intended degree before the first lesson, because it shapes which course is wise.",
        "In the sciences the tutor and student work paper by paper. Paper 1 is multiple choice, Paper 2 structured questions, and the internal investigation is an independent piece of work. The tutor marks each practice paper to the scheme and explains why a half mark was lost.",
        "On the investigation, a tutor can help a student pick a question that can be measured, plan a repeatable method and understand uncertainty. The tutor does not write the report or supply data.",
        "IGCSE sciences use the same logic, with extra attention to the alternative-to-practical paper, which suits a student who has little lab access at home.",
      ],
      bullets: [
        "Choose Analysis or Applications after discussing career aims",
        "Practice papers marked line by line",
        "Investigation advice only, never writing",
        "Alternative-to-practical skills drilled in IGCSE",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: choosing IGCSE tiers",
      paragraphs: [
        "In Cambridge IGCSE, Core papers cap the grade at C and Extended opens grades up to A*. Pearson Edexcel uses Foundation and Higher with similar limits. A student planning IB Maths Analysis and Approaches or A Level Mathematics should sit Extended or Higher.",
        "The tier is chosen per subject, so a child may sit Extended Mathematics and Core Biology. Families with no school to advise them often choose Core to avoid risk and later regret the ceiling; a diagnostic paper in the trial lesson gives a clearer basis.",
        "Subject choice matters too. Most students take five to eight subjects, and a balanced set includes English, Mathematics, a science and a language such as Kannada, Hindi or Urdu where offered.",
        "We suggest a diagnostic before any tier decision and a review at the end of Class 9 if the board allows changes.",
      ],
      table: {
        caption: "IGCSE tiers at a glance",
        columns: ["Board", "Lower tier", "Higher tier", "Best for"],
        rows: [
          ["Cambridge", "Core, grades C to G", "Extended, grades A* to E", "Extended for maths and science heading to IB or A Level"],
          ["Pearson Edexcel", "Foundation, grades 1 to 5", "Higher, grades 4 to 9", "Higher for advanced study"],
          ["Both boards", "Lower ceiling", "Full range", "Mix tiers by subject after a diagnostic"],
        ],
      },
      bullets: [
        "Core limits the top grade",
        "Mix tiers across subjects",
        "Diagnostic first",
        "Keep a language and a science in the set",
      ],
    },
  ],

  process: [
    { title: "Share the course", description: "Send the programme, subject, level, board and school year on WhatsApp at +91 7439 368 115 or to support@ibgram.com." },
    { title: "Get a shortlist", description: "We name tutors who have taught that course, with their background and free evening slots." },
    { title: "Try a free lesson", description: "Your child attends a real lesson online, with no payment and no obligation." },
    { title: "Receive the plan in writing", description: "If it suits, the weekly plan and rate are sent before anything is booked." },
    { title: "Review and adjust", description: "A short note follows each class, and the tutor can be changed if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Syllabus-matched tutors", description: "Chosen for the exact IB subject and level or the IGCSE board and tier." },
    { title: "Plain about format", description: "Online only in Talikota; no promise of a visit." },
    { title: "Heat-aware scheduling", description: "Slots avoid the hottest hours and the festival weeks." },
    { title: "Written notes", description: "Every lesson ends with what was covered and what to practise." },
    { title: "Tutor change on request", description: "A mismatch is fixed without argument." },
    { title: "Coaching, not ghostwriting", description: "Tutors guide understanding and never write coursework." },
  ],

  faqs: [
    {
      question: "Can I find an IB tutor in Talikota?",
      answer:
        "Yes, but online. We know of no IB specialist working from Talikota itself, so a tutor elsewhere in India meets your child live on video. The tutor is picked for the subject, level and exam session, and the first lesson is free. Nobody visits homes in Talikota.",
    },
    {
      question: "Do you offer IGCSE home tuition in Talikota?",
      answer:
        "We offer IGCSE tuition at home in the sense that your child learns from a home desk, but the lesson is online. Tutors do not travel to Talikota; in-person home tuition runs only in Gurugram and parts of Delhi NCR. Lessons are one to one and cover Cambridge and Edexcel subjects.",
    },
    {
      question: "Is there an IB or IGCSE school in Talikota?",
      answer:
        "Not one that we can confirm. Local schools follow the Karnataka State Board or CBSE. The nearest international campuses we know of are in Bengaluru and Pune, which is why families consider boarding or relocation. Please check any school directly before relying on a curriculum claim.",
    },
    {
      question: "Can my child take IGCSE exams while studying in Talikota?",
      answer:
        "Yes, as a private candidate through an approved Cambridge or Pearson exam centre. The family arranges the centre and entry, usually in a larger city, and a tutor prepares the student. Entry deadlines are firm, and centre availability for private candidates changes from year to year, so enquire early.",
    },
    {
      question: "How much does a tutor cost for a Talikota student?",
      answer:
        "We do not publish prices. The rate depends on the course, level, tutor experience and weekly hours, and it is given in writing after the free trial. Online lessons carry no travel cost, and a short focused plan can cost less than a long general one.",
    },
    {
      question: "Which subjects are asked for most from North Karnataka?",
      answer:
        "Mathematics, Physics, Chemistry and Biology lead, followed by Economics and English A. That reflects the engineering and medical interests common in the region. Kannada B is also asked for by students who want a language where they already have strong skills.",
    },
    {
      question: "Will a tutor write my child's Internal Assessment?",
      answer:
        "No. A tutor explains the criteria, helps choose a feasible topic and reviews drafts against the rubric. Writing or rewriting an IA, Extended Essay, TOK essay or coursework is not part of our service, because the work must be the student's own and schools can penalise anything else.",
    },
    {
      question: "My child studies in Kannada medium. Can they cope with IB or IGCSE?",
      answer:
        "Yes, with support on English subject vocabulary and writing. The first few weeks focus on terms, command words and constructing full answers. Many students from regional-language backgrounds do well once they have this scaffold. Kannada B is also available as an IB language choice.",
    },
    {
      question: "How should I choose between Cambridge and Edexcel IGCSE?",
      answer:
        "The school or exam centre normally decides, since a candidate must follow the board they are entered for. If there is a choice, Cambridge has more centres and an October-November series, while Edexcel offers a January series. We tailor practice papers to the board.",
    },
    {
      question: "When should tutoring begin?",
      answer:
        "The ideal point is the start of Class 11 for the Diploma, or a year earlier for Mathematics if the Class 10 base is weak. MYP students can start any time. Exam-year students can join for a final intensive, though earlier is gentler on both child and family.",
    },
    {
      question: "How long are lessons and how often?",
      answer:
        "A typical lesson lasts sixty to ninety minutes, once or twice a week, in the evening. Pre-exam intensives may add a third session. Students also need two to four hours a week of practice per subject. We help fit the schedule around school and any coaching class.",
    },
    {
      question: "What if my internet is unreliable?",
      answer:
        "A broadband or mobile connection of a few Mbps is enough for video and a shared board. If the line drops, we reschedule or move to audio plus a shared document. A charged laptop and a phone hotspot as backup are sensible in the hot months when power can fluctuate.",
    },
    {
      question: "Can IB subjects be combined with JEE or NEET preparation?",
      answer:
        "Yes, with a heavy workload. IB Mathematics Analysis and Approaches HL and Physics HL overlap with JEE topics, and Biology HL with NEET. Eligibility rules change, so check the current ones with the National Testing Agency. A tutor can plan which topics serve both goals.",
    },
    {
      question: "How do I begin?",
      answer:
        "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the programme, subject, level, board and school year. We reply with a shortlist and trial slot. The trial costs nothing and you decide afterwards.",
    },
    {
      question: "Can we change the tutor?",
      answer:
        "Yes, at any point. Tell us after the trial or any later class, and we propose a tutor with a similar profile. Earlier notes are passed on so your child does not have to start again from the beginning.",
    },
    {
      question: "Is IB Gram linked to the IB, Cambridge or Pearson?",
      answer:
        "No. IB Gram is an independent tutoring service with no affiliation to the International Baccalaureate, Cambridge, Pearson or any school on this page. School names appear for orientation only, and a school's own communication is the final word on its programmes.",
    },
  ],

  tutorsIntro:
    "These tutors are based in India and teach IB and IGCSE live online, so a Talikota lesson runs on the same clock as your child's school day. Matching is by course rather than by postcode, and no tutor travels to homes in this town.",

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "How online lessons work for families in towns and cities nationwide." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Find a specialist for a Diploma, MYP or PYP subject." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel subjects and tiers." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects, the core and the exam sessions." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria assessment and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry learning for younger children." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches or Applications and Interpretation." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse profiles and subject strengths." },
    { label: "Home tuition in Gurugram", href: "/gurgaon/", description: "The one area where tutors also teach in person." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book your free trial." },
    { label: "Tutors in Belagavi", href: "/belagavi/", description: "Another North Karnataka page with similar board context." },
    { label: "Tutors in Bengaluru", href: "/bengaluru/", description: "The state's largest cluster of international schools." },
  ],

  closingHeading: "Book a free IB or IGCSE trial lesson in Talikota",
  closingBody:
    "Tell us the course, the level and the school year, and we will find a tutor who has taught that syllabus and an evening slot that works with your household. The trial costs nothing, the plan and rate come in writing, and the lessons run online from home. Reach us on +91 7439 368 115 on WhatsApp or at support@ibgram.com.",
};
