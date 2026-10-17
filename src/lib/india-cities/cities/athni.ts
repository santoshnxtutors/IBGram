import type { CitySeoPage } from "../types";

/**
 * Athni (Athani), Belagavi district, Karnataka. Facts from Wikipedia (Athani, Belgavi and Athani taluk).
 * Edustoke lists no Athni school and no IB or Cambridge school for Belagavi district's taluk towns, so
 * stripSchools is empty. Clusters name the campuses confirmed in Kolhapur (Sanjay Ghodawat International
 * School: its own site lists CBSE, IGCSE and the IB Diploma), Belagavi and Bengaluru, names reused from
 * sangli.ts and belagavi.ts. Online only: home visits run only in Gurugram and parts of Delhi NCR.
 */
export const athni: CitySeoPage = {
  slug: "athni",
  countryName: "Athni",
  countryNameLong: "Athni, Karnataka",
  demonym: "Athni",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots after school or PU college, shorter sessions through the May heat, and a lighter plan around Dasara and Deepavali",
  lastUpdated: "2026-09-21",
  state: "Karnataka",
  stateCode: "IN-KA",
  geo: { latitude: 16.7333, longitude: 75.0667 },
  alternateNames: ["Athani", "Athani Belagavi", "Athni Belgaum", "Athani taluk"],
  wikipedia: "https://en.wikipedia.org/wiki/Athani,_Belgavi",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Athni | Online Tuition from Home",
  metaDescription:
    "Online IB and IGCSE tutors for Athni, Belagavi district: live one-to-one lessons, no trip to Miraj or Kolhapur needed, and a free trial lesson before any fee.",
  h1: "IB and IGCSE Tutors for Online Home Tuition in Athni",
  heroEyebrow: "IB & IGCSE ONLINE TUITION IN ATHNI, KARNATAKA",
  heroSubtitle:
    "Home tuition in Athni for IB and IGCSE students is a live, private lesson at your own study table, with a specialist in Maths, the sciences, Economics or English on the other side of the screen. Nobody has to catch a bus to Miraj or Kolhapur, and no lesson has to wait for a school timetable to allow it.",
  primaryKeyword: "IB and IGCSE tutors in Athni",
  imageAltText: "A student at a laptop in an Athni home, Karnataka, in a live one-to-one IGCSE Mathematics class with an online tutor",
  secondaryKeywords: [
    "IB tutor Athni",
    "IGCSE tutor Athni",
    "IB home tuition Athni",
    "IGCSE home tuition Athni",
    "IB private tuition Athni",
    "IB Maths tutor Athni",
    "IGCSE Maths tutor Athni",
    "IB Physics tutor Athni",
    "IB Chemistry tutor Athni",
    "IB Biology tutor Athni",
    "IB DP tutor Athni",
    "IB MYP tutor Athni",
    "IB PYP tutor Athni",
    "IGCSE online tuition Athni",
    "IB tutor Athani",
    "IGCSE tutor Athani Belagavi",
    "Cambridge IGCSE tutor Athni",
    "Edexcel IGCSE tutor Athni",
    "online IB tuition Belagavi district",
    "IB tutor Ainapur",
    "IGCSE tutor Ugar",
    "IB tutor Shedbal",
    "IB Economics tutor Athni",
    "IGCSE Additional Maths tutor Athni",
    "IGCSE Agriculture tutor Athni",
    "IB tutor Athni Karnataka",
  ],

  heroTrustPoints: [
    "Live lessons at your own desk, so a long bus ride to Miraj or Kolhapur is never part of the plan",
    "Each tutor is chosen for the exact board, subject code and level your child is sitting",
    "A free trial lesson comes first, and nothing is charged until you have seen the teaching",
    "IB Gram works independently of every school, board and exam body mentioned on this page",
  ],
  heroStats: [
    { value: "Online", label: "Live and private" },
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "May & Nov", label: "IB exam sessions" },
    { value: "Free trial", label: "Before any fee" },
  ],

  intro: {
    heading: "Studying for an international qualification from the north-west corner of Karnataka",
    paragraphs: [
      "Athni lies where Karnataka meets Maharashtra. Miraj is 55 kilometres away, Vijayapura 70, Kolhapur about 100, and Belagavi, the district headquarters, around 140. The town is the centre of the largest taluk in Belagavi district, a spread of four towns and 115 inhabited villages where sugarcane, grapes, jowar and groundnuts set the rhythm of the year, and where Kannada and Marathi are both heard in the market.",
      "Schooling here has traditionally meant the Karnataka State Board in Kannada, Urdu or Marathi medium, with CBSE as the main alternative, followed by a pre-university college. That background makes the IB or IGCSE feel far away, and we could not confirm an IB World School or a Cambridge or Edexcel centre anywhere in the town. A family that wants either qualification has three roads: board in Kolhapur, Belagavi or further afield, relocate, or follow the syllabus from home with a specialist teacher. This page is about the third road, with IB and IGCSE tutors in Athni who teach live and one to one.",
      "Home tuition needs an honest definition in Athni. Our tutors do not come to your house, because in-person visits are offered only in Gurugram and parts of Delhi NCR. What we offer is the same private, scheduled and personal arrangement, taught online to a student at the family's own study table. With the nearest large school city a long bus or road journey away, a lesson that arrives by screen saves a student the best part of an afternoon.",
      "A tutor's job is to explain, question and correct. No Internal Assessment, Extended Essay, Theory of Knowledge essay or piece of coursework is ever drafted by a tutor, and every submitted word stays the student's own. IB Gram is an independent tutoring business, unconnected to the IB, Cambridge, Pearson Edexcel or any school named below, and school names appear here as context and nothing more.",
    ],
    bullets: [
      "Live IB PYP, MYP, DP and CP coaching, matched to the student's stage and school",
      "Cambridge IGCSE at Core or Extended, Edexcel International GCSE at Foundation or Higher",
      "Private lessons at home, online, with one regular tutor and a written note each time",
      "A free trial lesson first, then a rate confirmed in writing before any booking",
    ],
  },

  programmesIntro:
    "Athni has no IB campus of its own, so each programme below is described through the student most likely to be asking: someone finishing a state-board class, switching from CBSE, or preparing to join a school in another city.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5 (ages 3 to 11)",
      description:
        "A primary approach built on six transdisciplinary themes, where pupils investigate questions through units of inquiry and close the stage with a self-chosen Exhibition project in the final year.",
      countryNote:
        "A child who began in a Kannada or Marathi medium primary class often meets PYP through a move to a city school, so early tutoring works on spoken English, curious questions and reading stamina rather than on worksheets.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Classes 6 to 10 (ages 11 to 16)",
      description:
        "Eight subject groups are taught through concepts and global contexts and marked against criteria, not a single exam score, and the stage ends with a Personal Project that the student plans and reflects on alone.",
      countryNote:
        "Students arriving from state-board classes are used to memorised answers, while MYP wants reasons and explanations, so a tutor sits beside the first few criterion-based tasks until the new habits settle.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Classes 11 and 12 (ages 16 to 19)",
      description:
        "Two years, six courses with three at Higher Level, and a core made of the Extended Essay, Theory of Knowledge and service work. Examinations fall in May or November and the maximum score is 45 points.",
      countryNote:
        "With no Diploma school in Athni, students who want it are usually about to board or move, and a tutor helps settle subject levels early and keeps the Extended Essay on a calendar.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Classes 11 and 12, ages 16 to 19",
      description:
        "A smaller set of Diploma courses is combined with career-related study, language development and a reflective project, for students who lean towards an applied or vocational path.",
      countryNote:
        "Very few Indian schools run CP and we have not found one near Athni, so we mention it for families who meet it in Pune or Bengaluru and want help with the Diploma-course side.",
    },
  ],

  subjectsIntro:
    "These are the IB courses Athni families ask about most. Each comes with a tutor chosen for depth in the subject and for experience with students who do not sit in a dedicated IB classroom.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus, vectors and proof, practised until the working is as tidy as the answer, with Paper 3 problem solving and Exploration scoping for HL students." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data, statistics, modelling and finance with a calculator used on purpose, a sound fit for commerce, agri-business or social science degrees." },
    { name: "IB Physics", levels: "HL / SL", description: "Motion, circuits, waves, fields and the nucleus, with the data booklet used quickly and uncertainty bars treated as ordinary working, not a worry." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Mole calculations, bonding, energetics, equilibrium and organic pathways, plus lab technique shown on video for students without a school laboratory." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, physiology and ecology, with canal-irrigated fields, soil and farm-pond water offered as ready ideas for the investigation." },
    { name: "IB Economics", levels: "HL / SL", description: "Supply and demand diagrams, inflation, trade and growth, with real-world commentaries that can draw on cane pricing, cooperative mills and the grape and raisin markets." },
    { name: "IB Business Management", levels: "HL / SL", description: "Reading a case study quickly, plus a research project on a real firm nearby, for instance a dairy, a cold store or an agro-processing unit." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Water, soil, energy and land use, studied through river-basin irrigation and monsoon variability instead of examples from far away." },
    { name: "IB Geography", levels: "HL / SL", description: "Population, resources and change, with the Krishna basin and semi-arid farming as local case material for extended answers." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysing unseen texts, writing comparative essays and rehearsing the oral, for students whose first thoughts arrive in Kannada, Marathi or Urdu." },
    { name: "IB Hindi A Literature", levels: "SL", description: "Close reading, literary essays and an individual oral for students who want Hindi examined at a serious level." },
    { name: "IB Kannada or Marathi A (school-supported)", levels: "SL", description: "For a student whose school arranges a self-taught Language A, a tutor reads the set works alongside them and trains the written commentary." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithmic thinking, data structures and a documented software project whose problem can come from a family shop or a set of farm records." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches to behaviour, key studies, and the discipline of using evidence inside a short, controlled essay." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Reading the prescribed titles, choosing objects for the exhibition and planning an essay the student then writes alone." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Narrowing a topic to a question that can really be answered, with feedback on structure; the essay itself remains the student's own." },
  ],

  igcseSubjectsIntro:
    "IGCSE in Athni is normally studied beside a Karnataka State Board or CBSE timetable, so the plan has to fit a student who already has a full school week. We match on board, syllabus code and tier.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra fluency, geometry and non-calculator accuracy, with Extended-tier stretch for students heading to Additional Maths or the IB." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Classes 9 and 10", description: "Differentiation, logarithms, trigonometric identities and proof: the steepest but most useful climb before IB Maths at Higher Level or A Level." },
    { name: "Edexcel International GCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson-style wording and mark schemes, kept apart from Cambridge practice so the two boards never blur." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, circuits, waves and thermal energy, with the written practical-skills paper given its own practice sessions." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, bonding, rates of reaction and carbon compounds, with test-tube analysis learned from demonstration and notes." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cell structure, inheritance, human and plant physiology and ecosystems, with graph reading and longer written answers practised early." },
    { name: "IGCSE Coordinated Sciences 0654", levels: "Classes 9 and 10", description: "Three sciences balanced within one plan for a student who shares the timetable with state-board subjects." },
    { name: "IGCSE Agriculture 0600", levels: "Classes 9 and 10", description: "Crop and livestock production, soil and water, a natural option for students from farming families around the taluk." },
    { name: "IGCSE Economics 0455", levels: "Classes 9 and 10", description: "Key terms, demand and supply diagrams and written evaluation, with sugar, grapes and cooperative marketing as everyday examples." },
    { name: "IGCSE English as a Second Language 0510", levels: "Classes 9 and 10", description: "Reading, writing, listening and speaking for students whose home languages are Kannada, Marathi or Urdu." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Classes 9 and 10", description: "Reading and writing tasks in Hindi at the level the paper expects, useful for students who want a third language." },
    { name: "IGCSE Computer Science 0478", levels: "Classes 9 and 10", description: "Flowcharts, pseudocode and Python, with dry-run tables practised for the paper on algorithms and programming." },
  ],

  regionsTitle: "Athni town and taluk areas we support online",
  regionsIntro:
    "Lessons are online, so the map is about timing and connection: how far a home sits from the highway, when the school bus has finished and where mobile data holds up. These are the parts of Athni and the taluk that families write to us from.",
  regions: [
    { name: "Athni town centre", note: "The old municipal core around the main market and bus stand, where traders, teachers and medical families live close together and evening slots are easiest to plan." },
    { name: "Miraj road side", note: "Homes towards the Maharashtra border, where relatives, doctors and shops often sit in Miraj or Sangli and families compare schools on both sides of the state line." },
    { name: "Vijayapura highway belt", note: "Residential stretches along the road to Vijayapura, 70 kilometres east, handy for after-school slots once the bus run is over." },
    { name: "Ugar", note: "A taluk town 25 kilometres away that holds the nearest railway station, where farm and sugar-belt families plan study around trains and buses." },
    { name: "Ainapur", note: "One of the taluk's four largest towns, with its own schools and a farm-led calendar, where an online lesson spares students the trip into Athni." },
    { name: "Shedbal", note: "Another of the four largest towns in the taluk, where video lessons mean a student does not depend on bus timings to reach a tutor." },
    { name: "Aigali", note: "A village known across the region for its animal husbandry fair, a reminder that many households combine farming, dairy and trade with schooling." },
    { name: "Krishna riverside villages", note: "Settlements along the 85 kilometres of river that curve around the southern taluk, where a heavy monsoon can cut roads or power for a day and a spare slot protects the plan." },
    { name: "Canal-irrigated farm belt", note: "Villages that draw on the Upper Krishna canals for cane and grapes, busy at harvest and pruning, where lessons are timed around work in the fields." },
    { name: "Belagavi-facing side", note: "Families on the southern and western edge who look to Belagavi for hospitals, colleges and any future boarding school." },
  ],

  schoolDisclaimer:
    "IB Gram is independent and is not affiliated with the IB, Cambridge, Pearson or any school on this page. Campuses are named only to show where international curricula are taught around the region, and a mention is neither an endorsement nor a partnership. No IB or Cambridge school inside Athni could be confirmed, so none is named as local.",
  schoolClusters: [
    {
      city: "Athni and Athani taluk",
      note: "Local schools teach in Kannada, Urdu, Marathi and English under the state board, with a few CBSE options. We could not confirm an IB World School or a Cambridge or Edexcel centre here, so we name none.",
      schools: [],
    },
    {
      city: "Nearby: Kolhapur",
      note: "About 100 kilometres away, this is the closest place where we could confirm a school teaching both the IB Diploma and IGCSE. Most families treat it as a boarding decision, not a daily commute.",
      schools: ["Sanjay Ghodawat International School"],
    },
    {
      city: "Nearby: Belagavi",
      note: "The district headquarters, about 140 kilometres by road, has a day-and-boarding school reported to teach Cambridge IGCSE. Ask any school which programme runs on which campus before planning around it.",
      schools: ["Indus Altum International School, Belagavi"],
    },
    {
      city: "Nearby: Bengaluru (boarding or relocation)",
      note: "Karnataka's widest IB choice sits in the capital, 624 kilometres away, and it is where families look when a full Diploma classroom matters more than staying near home.",
      schools: ["Canadian International School", "Stonehill International School"],
    },
  ],

  modesIntro:
    "Tutors do not visit homes in Athni, since home visits run only in Gurugram and parts of Delhi NCR, so all three formats below are online. They differ in rhythm: a weekly private slot, a focused block before an exam series, or a bridge for a student changing school.",
  modes: [
    {
      title: "Weekly private lessons at your own desk",
      description:
        "One tutor, one fixed slot each week, a shared whiteboard and worked questions, then a short written note so parents can read what was covered.",
      bullets: [
        "The same tutor every week",
        "Slots after school and before dinner",
        "An extra session added before mocks",
        "Notes in plain language for parents",
      ],
    },
    {
      title: "Short blocks before an exam series",
      description:
        "A focused run of sessions ahead of the IB May session or a Cambridge or Edexcel series, built around past papers and the mark scheme.",
      bullets: [
        "Paper-by-paper plan agreed in week one",
        "Timed practice, then a review of every lost mark",
        "Command-term and mark-scheme training",
        "Gaps left for festivals and village fairs",
      ],
    },
    {
      title: "Bridging from State Board or CBSE",
      description:
        "A transition plan for a student who is changing school or adding IGCSE subjects, starting from the gaps that a diagnostic lesson shows.",
      bullets: [
        "Diagnostic first, syllabus second",
        "Academic English and Maths fluency before anything else",
        "Honest advice on which subjects to move first",
        "Notes the new school's teachers can read",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Athni, and where do families look instead?",
      paragraphs: [
        "Not that we could confirm. Schools in and around Athni follow the Karnataka State Board or CBSE, and none of the school directories we checked lists an IB World School or a Cambridge or Edexcel centre in the town. The nearest confirmed campuses are in Kolhapur and Belagavi.",
        "Kolhapur, roughly 100 kilometres away, has Sanjay Ghodawat International School, whose own website lists CBSE, IGCSE and the IB Diploma and describes day and boarding campuses in Kolhapur, Belagavi and Pune. Belagavi, about 140 kilometres away, also has Indus Altum International School, a day-and-boarding school reported to teach Cambridge IGCSE. Bengaluru, 624 kilometres away, offers the widest IB choice in Karnataka.",
        "Distance decides most of these conversations. A 100-kilometre journey cannot be a daily commute, so every confirmed route means boarding or moving house, and families are cautious about doing that at thirteen or fifteen. Many keep the child in a local school, layer IGCSE or IB-style subject lessons over the local timetable, and revisit the move at the Class 10 to Class 11 boundary, when the Diploma or A Level becomes the natural next step.",
        "Whichever way you lean, ask a school in writing which programme runs on which campus and for which years, because a group with several campuses seldom teaches every curriculum on every site. Our part is narrower and easier to describe: matching a tutor to the exact syllabus and giving the student a steady weekly lesson wherever they study.",
      ],
    },
    {
      heading: "Which Athni families ask about IB and IGCSE tuition?",
      paragraphs: [
        "Mostly families whose livelihoods run through sugarcane, grapes, trade, medicine and teaching, plus a smaller group with relatives in Pune, Bengaluru, the Gulf or overseas. What they share is a wish for strong English, for a qualification that universities outside Karnataka read easily, and for a child who is not sent away from home at fourteen.",
        "The largest group is tied to the land and to what the land feeds. Cane growers, sugar-mill staff, grape and raisin traders, and owners of cold stores or small processing units run businesses that sell well beyond the taluk, and some of their children will join the family firm after a degree in management, agriculture or engineering. Trade in Athni is not only cane either, since the town is also known for leather chappals made by traditional craftspeople.",
        "A second group works in healthcare and education. Many doctors, teachers and government officers in Athni trained in Miraj, Belagavi or Pune and know how different exam cultures feel, so they ask careful questions about boards before choosing one. Transfers add to the mix, because a posting to another taluk can break a child's schooling, and a tutor who holds the syllabus steady can bridge the gap.",
        "The third group is returning families, parents who came back to Athni after working elsewhere and want an older child to stay on the IB or IGCSE path while they settle. Theirs is the most urgent need, because the syllabus they left behind keeps moving, and an online tutor is the quickest way to catch up with it.",
      ],
    },
    {
      heading: "Karnataka State Board, CBSE, IGCSE and IB: how do they compare for an Athni student?",
      paragraphs: [
        "They test different habits. The state board and CBSE reward accuracy and recall of a fixed textbook, while IGCSE and the IB reward applying an idea to an unfamiliar situation and explaining it in full sentences. None is easier, and a student can move from one to another with a short bridging plan.",
        "Most Athni students meet the Karnataka State Board first. Class 10 ends with the SSLC, and Classes 11 and 12 are taken at a pre-university college, where the second-year result feeds into the CET and NEET routes. CBSE is the usual alternative in larger private schools, and it leans on the NCERT books. Both systems are comfortable with Kannada, Marathi and Urdu as languages of instruction.",
        "IGCSE and IB papers ask a student to apply a method to a fresh context, explain a result, or weigh two options, and the IB Diploma adds extended writing, internal assessments and a required essay. A student who has mastered the state syllabus is not behind. The gap lies in style, and style can be taught in a few months of targeted lessons.",
      ],
      table: {
        caption: "Board routes for an Athni student",
        columns: ["Route", "Where a student meets it", "What the papers reward", "What it leads to"],
        rows: [
          ["Karnataka State Board (SSLC, then PUC)", "Government, aided and private schools in Athni and across the taluk", "Textbook accuracy, memory and stepwise answers", "CET, NEET and JEE routes through the PU course"],
          ["CBSE", "Selected private and larger town schools", "NCERT recall plus application questions", "JEE, NEET and CUET-UG on familiar terms"],
          ["Cambridge or Edexcel IGCSE", "Not confirmed in Athni; nearest in Kolhapur and Belagavi", "Method marks, applied questions, tiered papers", "A Level, the IB Diploma or a move into Class 11"],
          ["IB Diploma", "Not confirmed in Athni; nearest in Kolhapur, then Bengaluru", "Inquiry, essays, internal assessment, conceptual depth", "Applications abroad directly; in India, AIU equivalence then CUET-UG"],
        ],
      },
    },
    {
      heading: "What will IB and IGCSE tuition cost an Athni family, and what moves the rate?",
      paragraphs: [
        "That depends on the subject, the level, the number of weekly sessions and how much of the syllabus is new to the student, so we print no price list. A written quote reaches you before the free trial, and since everything happens online there is no travel surcharge for a home in Ugar, Ainapur or a village.",
        "Four things move the figure most. Subject and level come first, since IB Higher Level Physics or IGCSE Additional Mathematics needs a more specialised tutor than a general English lesson. Weekly hours and session length come next. The third is how much has to be taught from the beginning and how much is revision, and the fourth is timing: a student who starts months before an exam needs fewer sessions a week than one who starts in the final term.",
        "What never enters the quote is distance. Nobody drives 55 kilometres to Miraj or takes a bus to Kolhapur for an online lesson, and a home in Shedbal is priced exactly like one on the main road in Athni. Families who have paid for coaching elsewhere often find that the travel and time saved, plus a tutor matched to the syllabus, is the real saving.",
      ],
      bullets: [
        "Subject and level decide where the rate starts",
        "Sessions per week and their length shift the monthly total",
        "Starting close to an exam usually means more sessions",
        "Distance never adds to the quote, whichever village a student lives in",
      ],
    },
    {
      heading: "Online tutor, coaching centre, town tuition or self-study: which suits an Athni family?",
      paragraphs: [
        "It depends on the subject. For state-board and CBSE subjects, a local batch is usually the simplest choice; for IGCSE Extended or IB Higher Level courses, an online one-to-one tutor is the only realistic way to reach a specialist without leaving Athni. Self-study helps a disciplined student but gives no feedback on why marks were lost.",
        "Athni has tuition classes for state-board and CBSE subjects, mostly run in batches, and they do that job well for the syllabus they know. Trouble starts when a student needs Extended Maths or Higher Level Chemistry, because batches for those do not exist locally and the nearest specialists work in Kolhapur, Belagavi or Pune. Matching IB and IGCSE tutors in Athni to an exact code and level is what an online tutor adds.",
        "The format works when there is a quiet corner, a reasonably steady connection and regular practice between lessons. It fails when lessons become a substitute for doing the questions. Self-study with past papers is cheap and sensible in subjects with a clear syllabus, but the usual result of studying alone is the same mistake repeated across twenty papers.",
      ],
      table: {
        caption: "Ways of studying an international syllabus from Athni",
        columns: ["Option", "Works well when", "Watch for"],
        rows: [
          ["Online one-to-one tutor", "The syllabus is IB or IGCSE and no local specialist exists", "Needs a quiet spot, steady data and regular practice"],
          ["Local coaching batch", "The subject is state-board or CBSE and the timing suits", "Batch pace and content rarely match IB or IGCSE papers"],
          ["Tutor in Kolhapur or Belagavi", "A family can travel or relocate for some weeks", "Long journeys, higher cost and a tutor who may be booked up"],
          ["Self-study with past papers", "A disciplined student needs only practice and mark schemes", "No feedback on reasoning, and errors are easy to repeat"],
        ],
      },
    },
    {
      heading: "How do the crushing season, May heat, the monsoon and local festivals shape the Athni study year?",
      paragraphs: [
        "Three things shape it: a harvest and crushing calendar that keeps parents busy, a May heat that peaks near 40 degrees just as exams begin, and a festival round from Ugadi to Deepavali. We place lessons around all three and keep a spare slot in every week.",
        "The taluk's five sugar industries run their crushing seasons from the post-monsoon months into spring, and families connected to cane, transport or the mills can be away at odd hours. We agree slots that a student can keep without a parent beside them and send notes that can be read later in the evening.",
        "May is the hardest stretch. Temperatures reach about 40 degrees, and the IB May session and the Cambridge and Edexcel summer series are under way. Lessons move to early morning or late evening in those weeks and sessions run shorter instead of being cancelled. The monsoon is lighter here than on the coast, but heavy rain upstream can mean floods along the southern edge of the taluk, and power or data may drop for a day.",
        "Festivals punctuate the year: Ugadi in spring, Basava Jayanti, Ganesh Chaturthi and the Dasara holidays in early autumn, Deepavali, plus Muharram and Eid by the lunar calendar, and village jatras and the Aigali fair. Good planning puts light weeks around them and heavy revision in the gaps.",
      ],
      table: {
        caption: "A study year in and around Athni",
        columns: ["Period", "What is happening around Athni", "How the plan adapts"],
        rows: [
          ["January to March", "Makar Sankranti, SSLC and PU exam season, cane crushing in full swing", "Mocks for IB and IGCSE, calm evening slots, notes for busy parents"],
          ["April to June", "Heat peaking near 40 degrees in May; IB May session and Cambridge or Edexcel summer series", "Early or late lessons, timed papers, shorter sessions"],
          ["July to September", "Monsoon, new school term, Ganesh Chaturthi and Dasara", "Steady syllabus teaching, spare slots for power or data failures"],
          ["October to December", "Deepavali, IB November session and Cambridge or Edexcel autumn series, pleasant weather", "Results review, resits, internal assessment feedback"],
        ],
      },
    },
    {
      heading: "Where can an Athni student go after IB or IGCSE?",
      paragraphs: [
        "Anywhere an IB Diploma or A Level result is accepted: Indian universities through AIU equivalence and CUET-UG, and colleges abroad on direct application. IGCSE, by contrast, marks the end of Class 10, so a Class 11 course, A Level or the Diploma has to follow before most degree applications.",
        "For students who want to stay close, Belagavi has Visvesvaraya Technological University, Rani Channamma University and KLE's medical and engineering campuses. Kolhapur has Shivaji University, Sangli has Walchand College of Engineering and Miraj has a government medical college and a long-established hospital belt, and Vijayapura has the BLDE medical institutions.",
        "For engineering and medicine in India, IB and Cambridge students should read the current eligibility notes of JEE Main, JEE Advanced, NEET-UG and the state counselling authority every year, because the rules for international boards change and subject combinations matter. Karnataka's own CET admissions also have document requirements, so confirm them early.",
        "Overseas, IB and A Level results are read easily by universities in the UK, Canada, Australia and the United States. Higher Level Maths and the sciences keep the most doors open, while HL Economics or Business suits management. Choose subjects from the degree backwards, not from the syllabus that feels most comfortable.",
      ],
      bullets: [
        "An IB Diploma is treated as a Class 12 equivalent for Indian admissions",
        "IGCSE alone is not enough for degree entry and needs a next stage",
        "JEE, NEET and Karnataka CET rules should be rechecked every year",
        "Higher Level subjects should follow the intended degree",
      ],
    },
    {
      heading: "IB Maths AA or AI and the three sciences: what does an Athni tutor actually do?",
      paragraphs: [
        "By settling the Maths route from the intended degree, then training the same habits in every subject: show the reasoning, use the command term, handle the data. AA suits engineering and pure science, while AI suits commerce, agri-business and social science. The tutor then works on the gaps a diagnostic lesson reveals.",
        "In early lessons we concentrate on reasoning on the page. State-board solutions can be short and answer-focused, while IB papers award marks for method and for communicating it, and the Exploration asks for a personal investigation in the student's own voice. We use real past-paper questions and let the student mark their own work against the scheme.",
        "In Physics, Chemistry and Biology the weak spots are data questions and extended responses, not content. A student who knows the chapter may still lose marks by ignoring a command term such as discuss or evaluate. The tutor trains those words with past questions and teaches the data booklet as a tool to be used quickly.",
        "Experimental work is the practical challenge. Without a school laboratory, the Internal Assessment can still rest on simple equipment, a simulation, a secondary dataset or a farm-based observation such as plant growth under two watering methods or the pH of well water. Design, honest evaluation and the write-up are coached, while the experiments and the writing belong to the student.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, Foundation or Higher: how do we choose?",
      paragraphs: [
        "Choose the higher tier whenever the student might study Maths or the sciences further, because Core and Foundation tiers cap the grade and later courses assume the harder content. A diagnostic lesson, not a guess, settles whether the student is ready for it.",
        "We test with a short set of Extended-level questions in the first two weeks. Whether marks leak through method, slips in arithmetic or misread questions tells us which tier to enter. Edexcel works the same way: Higher can reach grade 9 while Foundation tops out at 5, which affects what a student may study next.",
        "Subject choice is the other half. A student from a farming family may find IGCSE Agriculture a natural fit, a future doctor needs the three separate sciences rather than a combined course, and a student aiming at business benefits from Mathematics with Economics and Business Studies. Tiers are chosen subject by subject, so it is sensible to enter Extended for Maths and Physics and Core for a subject the student will not continue.",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB and IGCSE online to students in Athni and across the taluk, at ease with learners moving in from Kannada, Marathi or Urdu medium classrooms.",

  process: [
    { title: "Describe the student", description: "Give us the board, subject and level, the current school, and any exam series or school move already on the calendar." },
    { title: "Meet a shortlist", description: "We suggest tutors who have taught that exact syllabus and say in a line why each one fits." },
    { title: "Take a free trial", description: "A tutor teaches one real topic from your child's syllabus over video, free of charge and with nothing to sign." },
    { title: "Approve the written plan", description: "Topics, weekly slots, the fee and a spare slot for bad-connection days are set out before you agree to anything." },
    { title: "Review and adjust", description: "Progress is checked every few weeks, and the tutor can be changed if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Plain about local schools", description: "We tell you that no IB or Cambridge school could be confirmed in Athni and leave the decision with you." },
    { title: "Fitted to a taluk timetable", description: "Lessons are planned around harvest-season evenings, May heat and festival weeks." },
    { title: "Matched on the exact syllabus", description: "Tutors are picked for the board, syllabus code and tier on your child's paper, not for a general CV." },
    { title: "Nothing to pay before the trial", description: "A single real lesson tells you more than a brochure, so that comes before any fee." },
    { title: "Tutors coach, students write", description: "IAs, essays and coursework stay the student's own, and the tutor never drafts them." },
    { title: "Easy to change", description: "No long commitment, and a change of tutor on request when the match is not right." },
  ],

  faqs: [
    {
      question: "Will an IB or IGCSE tutor come to our home in Athni?",
      answer:
        "No, tutors do not visit homes in Athni, because in-person home tuition is available only in Gurugram and parts of Delhi NCR. Every lesson is live, private and online at a fixed weekly time, so your child gets the regular one-to-one attention of home tuition without anyone travelling. All that is needed is a laptop or tablet, a quiet corner and a steady connection.",
    },
    {
      question: "Is there an IB school in Athni?",
      answer:
        "We could not confirm one. Local schools follow the Karnataka State Board or CBSE, and the closest schools we could verify teaching the IB or IGCSE are in Kolhapur and Belagavi, with a wider choice in Bengaluru. If you hear of a local IB school, ask it for its IB World School authorisation before planning around it.",
    },
    {
      question: "What will an IB or IGCSE tutor cost us in Athni?",
      answer:
        "The rate is set by the subject, the level, the weekly hours and the amount of syllabus still to be taught, and it is quoted in writing before the free trial lesson. Nothing is added for travel, so teaching a student in Ainapur costs the same as one in the town centre, and a lesson lost to a power cut is moved, not charged.",
    },
    {
      question: "Does the internet in Athni support video lessons?",
      answer:
        "A video lesson needs a steady connection, not a fast one, and a normal broadband line or decent mobile data is enough for most homes in town. Villages at the edge of the taluk and stormy evenings can be patchier. The trial lesson doubles as a connection test, and we agree a phone hotspot as the fallback.",
    },
    {
      question: "My child studies in Kannada medium. Can they still take IGCSE?",
      answer:
        "Yes, many students do. The hurdle is academic English, not the language of schooling. A tutor starts with a diagnostic lesson, builds subject vocabulary term by term and practises writing full sentences in answers. IGCSE English as a Second Language is also an option for a student who wants to strengthen the language first.",
    },
    {
      question: "Which IB subjects do Athni students ask for most?",
      answer:
        "Maths and the three sciences are requested most, with Economics and English close behind, then Business Management, Computer Science and Environmental Systems and Societies. Students from farming and trading families often pick Economics or Business, and a few want Hindi, Kannada or Marathi help. A rarer subject is not a problem, because we search for a specialist.",
    },
    {
      question: "Can a student aiming for medicine choose IB or IGCSE?",
      answer:
        "It can work, but the rules need checking each year. NEET-UG conditions for international boards, AIU equivalence and the Karnataka counselling authority's document requirements all change, and Biology, Chemistry and Physics with English are central. Plan the subjects at Class 10 or 11 and confirm eligibility with the official bodies before you commit.",
    },
    {
      question: "Do Cambridge and Edexcel IGCSE differ much?",
      answer:
        "Yes, in the details: each board has its own syllabus codes, paper layouts and tier names. Cambridge usually splits papers into Core and Extended, Edexcel into Foundation and Higher, and both open the way to A Level or the IB Diploma. Your child's tutor is chosen for the board actually being sat, because wording and mark schemes differ.",
    },
    {
      question: "Can a tutor help with the Internal Assessment or Extended Essay?",
      answer:
        "Yes, within limits. A tutor explains the criteria, helps a student settle on a workable question, suggests how to gather data and comments honestly on drafts the student has written. A tutor never writes any part of it, because submitted work must be the student's own and ghost-writing can bring serious penalties from the examining body.",
    },
    {
      question: "Do you teach PYP and MYP as well as the Diploma?",
      answer:
        "Yes, both. For PYP the tutor concentrates on reading in English, number sense and asking good questions, and for MYP the focus is Maths, sciences, languages and keeping the Personal Project on schedule. Younger pupils get shorter and more frequent sessions than Diploma students, with parent notes to match.",
    },
    {
      question: "When is the right time to begin?",
      answer:
        "At the start of a course if possible, which means starting IGCSE in Class 9 and the Diploma in Class 11, with a bridging term in Class 10 for a state-board student who plans to move. A later start still works; the plan then shifts towards past papers and exam technique rather than full teaching.",
    },
    {
      question: "How do sugar-season evenings and festival weeks affect lessons?",
      answer:
        "We plan around them. During heavy harvest and crushing weeks we choose slots a student can keep without a parent nearby, and around Dasara, Deepavali, Ganesh Chaturthi or a village fair we keep the week light. Those dates go into the written plan on day one, so no one is caught out halfway through a term.",
    },
    {
      question: "Can a Class 10 student from the state board join an IB school later?",
      answer:
        "Usually yes, provided a school offers a place. The IB Diploma is taught by IB World Schools, so the student needs an admission first, and each school sets its own entry terms. IB Gram does not arrange admissions, but a bridging plan in Maths, sciences and English can make the first term far smoother.",
    },
    {
      question: "Where can an Athni student sit Cambridge or Edexcel exams?",
      answer:
        "Papers are sat at approved exam centres, which are usually in larger cities such as Belagavi, Kolhapur or Bengaluru. A private candidate registers through a centre and pays its fees, and dates differ by series. IB Gram does not run exams or register candidates, but tutors prepare students paper by paper for whichever centre they use.",
    },
    {
      question: "What does the free trial lesson involve?",
      answer:
        "A shortlisted tutor teaches a genuine topic from your child's own course over video, and it costs nothing and binds you to nothing. Afterwards the tutor sends a brief note on what went well, what needs work and what a plan could look like. You then continue, ask for someone different or stop.",
    },
    {
      question: "How do I get started with IB and IGCSE tutors in Athni?",
      answer:
        "Write to support@ibgram.com or send a WhatsApp message to +91 7439 368 115 giving the board, subject, level and school. A shortlist and trial times come back to you, and no fee is taken until you have met the tutor and read the plan. Replies follow Indian Standard Time and normally arrive within a working day.",
    },
  ],

  internalLinks: [
    { label: "Belagavi", href: "/belagavi/", description: "Online IB and IGCSE tutoring for the district headquarters, 140 kilometres south-west." },
    { label: "Sangli", href: "/sangli/", description: "Tutoring and school context for Sangli and Miraj, the Maharashtra hub nearest to Athni." },
    { label: "Hubballi-Dharwad", href: "/hubli-dharwad/", description: "Support for students in north Karnataka's twin-city education hub." },
    { label: "Gokak", href: "/gokak/", description: "Another Belagavi district town that studies the IB and IGCSE online." },
    { label: "All India cities", href: "/india/", description: "Every Indian city where IB Gram teaches online." },
    { label: "Gurgaon and Delhi NCR", href: "/gurgaon/", description: "Delhi NCR's home-visit service, which does not extend to Karnataka." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How IB tutoring runs from PYP to the Diploma." },
    { label: "IGCSE overview", href: "/igcse/", description: "What IGCSE covers, how tiers work and which subjects suit which students." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the core and the May and November sessions." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "AA and AI, SL and HL, and what each one demands." },
    { label: "Blog", href: "/blog/", description: "Articles on revision, exam technique and choosing subjects." },
    { label: "Contact us", href: "/contact-us/", description: "Write to us with the student's details and request a trial slot." },
  ],

  closingHeading: "Book a free IB or IGCSE trial lesson from your Athni home",
  closingBody:
    "Send the board, the subject and level, the school your child attends and the date of any exam series or move. A shortlist of matched tutors and some trial slots will come back by email or WhatsApp, and no fee is asked for until you have seen a real lesson. Reach us at support@ibgram.com or on +91 7439 368 115.",
};
