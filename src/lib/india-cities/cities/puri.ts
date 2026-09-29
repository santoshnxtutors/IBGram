import type { CitySeoPage } from "../types";

/**
 * /puri/ - IB and IGCSE tutoring page for Puri, Odisha. Online-only delivery: tutors do not visit
 * homes in Puri (in-person home tuition runs only in Gurugram and parts of Delhi NCR). No IB or
 * IGCSE school in Puri itself was confirmed, so the school clusters are honestly labelled
 * Bhubaneswar clusters.
 */
export const puri: CitySeoPage = {
  slug: "puri",
  countryName: "Puri",
  countryNameLong: "Puri, Odisha",
  demonym: "Puri",
  state: "Odisha",
  stateCode: "IN-OR",
  flagCode: "in",
  countryCode: "IN",
  region: "Odisha, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Planned around Rath Yatra crowds, the October to November cyclone watch and Puri's school hours",
  lastUpdated: "2026-09-21",
  geo: { latitude: 19.8135, longitude: 85.8312 },
  wikipedia: "https://en.wikipedia.org/wiki/Puri",
  alternateNames: ["Jagannath Puri", "Purushottam Kshetra"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Puri | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors in Puri, Odisha: private one-to-one tuition taught online from home, matched to your subject and level, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Puri",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR PURI STUDENTS",
  heroSubtitle:
    "Looking for home tuition in Puri for an IB or Cambridge IGCSE student? Tutors here teach live, one to one, over video, so your child studies from the living room instead of travelling sixty kilometres to Bhubaneswar for every class. Each tutor is picked for the exact subject, level and exam board on your school's timetable.",
  primaryKeyword: "IB and IGCSE tutors in Puri",
  imageAltText: "A Puri student revising IB Mathematics on a laptop with an online tutor while a ceiling fan turns overhead",
  secondaryKeywords: [
    "IB tutor Puri",
    "IGCSE tutor Puri",
    "IB home tuition Puri",
    "IGCSE home tuition Puri",
    "IB private tuition Puri",
    "IB Maths tutor Puri",
    "IGCSE Maths tutor Puri",
    "IB Physics tutor Puri",
    "IB Chemistry tutor Puri",
    "IB Biology tutor Puri",
    "IB DP tutor Puri",
    "IB MYP tutor Puri",
    "IB PYP tutor Puri",
    "IGCSE online tuition Puri",
    "IB tutor Baliapanda",
    "IGCSE tutor Grand Road Puri",
    "online IB tutor Puri Odisha",
    "IB tutor Jagannath Puri",
  ],

  heroTrustPoints: [
    "Tutors chosen by subject, level and exam session, not by who happens to live nearby",
    "All lessons are live video calls; in-person home visits exist only in Gurugram and parts of Delhi NCR",
    "A free trial lesson comes before any commitment",
    "Independent of the IB, Cambridge, Pearson and every school mentioned on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB continuum covered" },
    { value: "Cambridge and Edexcel", label: "IGCSE by code and tier" },
    { value: "IST", label: "Same clock as your school" },
    { value: "Free trial", label: "Sit one lesson first" },
  ],

  intro: {
    heading: "Home tuition for IB and IGCSE students in Puri, delivered online",
    paragraphs: [
      "Puri is a pilgrim town and a beach destination first, and an education city second. Its well-known schools follow the Odisha board, CBSE or ICSE, and a family that wants the International Baccalaureate or Cambridge IGCSE for a child usually ends up looking at Bhubaneswar, or at a school that teaches those courses by distance. That is the gap this page addresses. IB and IGCSE tutors in Puri are rare, so the sensible route is a specialist who teaches online.",
      "Each lesson is a private video call with one tutor and one student, using a shared digital whiteboard and past papers on screen. It works as private tuition from home: the student sits at their own desk in Grand Road, Baliapanda or Sipasarubali, the tutor is based elsewhere in India, and both stay on Indian Standard Time. Nobody drives anywhere, and a parent can sit in on any session.",
      "To be plain about it, tutors do not come to your house in Puri. Home visits run only in Gurugram and parts of Delhi NCR. Puri families get the same one-to-one attention through a screen, and most find the trade worth making because the alternative is a tutor pool of one or two people who may never have taught the Diploma.",
      "IB Gram is an independent tutoring service. It has no affiliation with the IB Organization, Cambridge University Press and Assessment, Pearson Edexcel, or any school named here. Tutors explain, question and mark practice work. They do not write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework, because those must remain the student's own.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Private tuition from home, taught online, one student at a time",
      "Free trial lesson, then a written note after every session",
      "Tutor changed at no charge if the fit is wrong",
      "In-person home visits offered only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "No school inside Puri town is confirmed to run an IB programme, so the continuum reaches Puri children in three ways: through boarding or day places in Bhubaneswar, through families who return to Odisha from a posting elsewhere mid-programme, and through learners who follow the courses privately. The four programmes below describe what each stage demands and where a tutor tends to help.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Learning is organised around units of inquiry rather than separate subjects, and it culminates in the Exhibition. No external exam exists, so tutoring here is about reading fluency, number sense and the confidence to explain a thought aloud.",
      countryNote:
        "A Puri child arriving from an Odia-medium or CBSE classroom often needs English reading stamina first, which a short daily-feeling weekly session builds steadily.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Work is marked against four criteria per subject and the Personal Project closes the programme. Students who memorise well but hesitate to justify an answer lose marks on criteria that reward reasoning.",
      countryNote:
        "In Puri, MYP requests usually concern science lab reports and the Personal Project journal, especially for children who moved between boards.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard, sit beside Theory of Knowledge, the Extended Essay and CAS. Internal assessments count towards each grade, and the main exams fall in May.",
      countryNote:
        "A Puri Diploma student is typically a boarder or a commuter to a Bhubaneswar campus, and weekend online sessions cover what a single subject teacher cannot repeat.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses combine with a career-related study, a reflective project and personal and professional skills. Only a handful of Indian schools run it.",
      countryNote:
        "SAI International in Bhubaneswar offers the CP, so the subject tuition Puri students request follows their chosen Diploma courses, not the career study.",
    },
  ],

  subjectsIntro:
    "Puri students who choose IB are often the only one in their neighbourhood studying a given course, so a tutor has to cover subject content and the way the IB asks its questions. Course, level and exam session are confirmed with the student before the first trial lesson.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebraic fluency, calculus, and the extended reasoning found on Paper 3 at HL, with the exploration drafted early rather than the week before submission." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling, probability and technology use, with practice in explaining what a calculator output actually means." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through fields and modern physics, with timed practice on multiple choice and a plan for a workable Scientific Investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, kinetics and organic pathways, plus confident use of the data booklet under exam pressure." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology to ecology, with attention to how command terms shape what a full-mark answer contains." },
    { name: "IB Economics", levels: "HL / SL", description: "Labelled diagrams, real-world examples and, at HL, numerical policy questions that reward careful working." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying tools such as SWOT and Ansoff to a case, and structuring the research project around a real organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen commentary, comparative essays and the oral, taught through frequent short written drafts." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and the programming that supports the internal assessment product." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies and evaluation, with practice at planning extended answers before writing them." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking, sustainability and evaluation of case studies, a good fit for coastal and cyclone-prone regions." },
    { name: "IB Geography", levels: "HL / SL", description: "Coastal, hazard and resource themes, with fieldwork design and case studies chosen for depth." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and sustained argument, with regional history options where the school offers them." },
    { name: "IB Hindi B and Odia support", levels: "HL / SL", description: "Hindi B text types and oral practice; Odia is supported as a home language for students who want structured reading and writing help." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion-led coaching for the exhibition and the essay argument; the essay itself stays the student's own work." },
  ],

  igcseSubjectsIntro:
    "IGCSE students in Puri are usually preparing privately or through a distance arrangement, so syllabus code, exam board and Core or Extended tier are settled before lesson one. Cambridge and Pearson Edexcel papers differ in structure, and the tutor works from the specification your candidate is actually entered for.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Non-calculator fluency and multi-step problems, with Extended candidates drilled on algebra, trigonometry and vectors." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus, functions and proof-style thinking, a useful bridge for anyone heading towards IB Maths AA HL." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, electricity and waves, with specific training on the alternative to practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, organic chemistry and qualitative analysis, practised through past-paper questions." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Precise terminology in genetics and human physiology, with data-response technique." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, diagram accuracy and short written evaluation." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python programming and pseudocode, both of which need regular hands-on writing." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and composition, useful for students shifting from Odia-medium or CBSE English." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case study reading and applying theory to the business named in the paper." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, final accounts and ratio work, where format earns marks." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading comprehension, writing tasks and speaking practice for the oral component." },
  ],

  regionsTitle: "Puri neighbourhoods our online IB and IGCSE tutors work with",
  regionsIntro:
    "Since lessons run online, this list is about context: which part of Puri a student lives in, what the school run looks like, and how the town's festival and weather calendar affects the study week.",
  regions: [
    { name: "Grand Road (Bada Danda)", note: "The wide processional avenue between the Jagannath Temple and Gundicha Temple; extremely busy during Rath Yatra, so evening lessons are planned with crowd movement in mind." },
    { name: "Baliapanda", note: "A residential area near the beach road with a mix of local families and hospitality households; a quieter place for a study desk." },
    { name: "Sipasarubali", note: "Located on the western side of the town, with many government-employee and teacher households who value structured homework routines." },
    { name: "Chakratirtha Road", note: "Runs along the sea-facing side, a hotel and guest-house belt where family schedules follow tourist seasons." },
    { name: "Penthakata", note: "A coastal locality with fishing communities and newer housing, where power cuts during storms can interrupt an evening class." },
    { name: "Swargadwar", note: "The area around the cremation ground and beach, close to the town centre and its long-established schools." },
    { name: "Matimandap", note: "A central residential pocket near the market and the temple, popular with families of temple-service households." },
    { name: "Mangala Square and Kumbharpada", note: "Old-town lanes near the temple where homes are compact, so a quiet corner and headphones matter for online lessons." },
    { name: "Konark Marine Drive belt", note: "The coastal road to Konark, with resorts and newer plots; internet reliability varies, so a stable connection is checked before the trial." },
    { name: "Bhubaneswar Road and Sakhigopal side", note: "Families along the NH316 corridor toward Bhubaneswar, who often have a parent commuting to the capital for work." },
  ],

  schoolClusters: [
    {
      city: "Nearby: Bhubaneswar (Patia and KIIT campus belt)",
      note: "About sixty kilometres north of Puri. KIIT International School teaches CBSE, Cambridge IGCSE and the IB Diploma, and is the usual first name families mention when they want an international curriculum within reach of Puri.",
      schools: ["KIIT International School"],
    },
    {
      city: "Nearby: Bhubaneswar (Infocity and Chandrasekharpur)",
      note: "SAI International School combines CBSE, Cambridge IGCSE and the IB Career-related Programme, with day and boarding places, which suits families who cannot commute daily from Puri.",
      schools: ["SAI International School"],
    },
    {
      city: "Puri itself: local options are limited",
      note: "We have not confirmed an IB or Cambridge school inside Puri town, and will not name one we cannot verify. Local schools follow the Odisha board, CBSE or ICSE, so private online tutoring fills the IB and IGCSE gap.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "Schools listed here are named only to show which international-curriculum options exist near Puri. IB Gram is an independent tutoring service and is not connected with, endorsed by, or acting for any of them, nor for the IB, Cambridge or Pearson. Check current programmes and admissions directly with each school.",

  modesIntro:
    "Every Puri family receives the same delivery: private, live and online. The differences below are about rhythm, whether a student wants a steady weekly slot, a heavier run before an exam session, or a mix that shifts across the school year.",
  modes: [
    {
      title: "Steady weekly online sessions",
      description:
        "One fixed weekly slot with the same tutor, on a video call with a shared whiteboard, so the subject moves forward at the student's pace.",
      bullets: [
        "Same tutor across the term for continuity",
        "Works for IB DP, MYP and IGCSE subjects",
        "Past papers and diagrams shared live on screen",
        "Slots chosen around school hours and evening power supply",
      ],
    },
    {
      title: "Exam-season intensive block",
      description:
        "Two or three sessions a week for the weeks before a May, June or November paper, focused on timing, command terms and mark schemes.",
      bullets: [
        "Timed papers followed by line-by-line review",
        "Mark scheme language taught explicitly",
        "Weak topics revisited between sessions",
        "Pause and resume around Rath Yatra or a cyclone alert",
      ],
    },
    {
      title: "Online home tuition with parent updates",
      description:
        "The usual online lesson, plus a written note after each session and a short review call, so parents can follow progress without guessing.",
      bullets: [
        "Tutors do not visit homes in Puri; in-person home visits run only in Gurugram and parts of Delhi NCR",
        "Note after every lesson, plain language",
        "Tutor swap available if the fit is off",
        "Rates confirmed in writing before booking",
      ],
    },
  ],

  sections: [
    {
      heading: "Who studies IB or IGCSE from Puri, and where do they enrol?",
      paragraphs: [
        "Most Puri students in an international curriculum belong to a small group: families who have lived elsewhere for a parent's career and returned to Odisha, hotel and business households who want an internationally portable qualification, and parents who plan overseas study and start early. The numbers are modest, and we do not quote any, but the need is real and the local supply of specialist teachers is thin.",
        "Physically, an IB or IGCSE classroom is usually a Bhubaneswar one. KIIT International School and SAI International School, both confirmed in public listings, draw students from across coastal Odisha, and boarding at SAI International makes the distance manageable. Puri to Bhubaneswar is roughly an hour and a half by road, which is why daily commuting is unusual and weekend returns are common.",
        "A second group never enrols locally at all. They prepare for IGCSE as private candidates, or follow an online school, and sit papers at an authorised centre. For them a good tutor is closer to a full teacher, so lessons cover syllabus content as well as exam technique, and a weekly plan is written at the start.",
        "A third group is the child who spent Class 5 to 8 abroad or in a metro and comes back to a Puri family home. These students are ahead in English but behind on Odia and, sometimes, on Indian board content, so the tutor negotiates both sides, keeping IB or IGCSE skills alive while the family decides on the next school.",
        "None of these routes depends on living beside a campus. That is why online tuition suits Puri better than most Indian towns: the tutor pool is national, the lesson happens where the student already lives, and the school decision can stay open a little longer.",
      ],
    },
    {
      heading: "Odisha board, CBSE, ICSE, IB or IGCSE: how do they compare for a Puri student?",
      paragraphs: [
        "Puri's schools mainly run the Board of Secondary Education, Odisha, CBSE or ICSE. Each is a sound path. The comparison below is not a ranking; it shows how the assessment style, language and university route differ so a family can decide which fits a particular child.",
        "The state board is taught largely in Odia or English and rewards accurate recall of the textbook. CBSE is nationally standardised, with strong alignment to JEE and NEET syllabi. ICSE is heavier in English and breadth. IB asks students to write, argue and research across six subjects. IGCSE sits between, with subject-by-subject choice and externally set papers.",
        "A student can move between these. Many Puri children study CBSE until Class 8 or 10 and then join IGCSE or the IB Diploma, and tutoring is most useful at the join, where writing style and command-term reading change first.",
        "For higher study, all of them lead somewhere. Indian universities accept IB and IGCSE-plus-A-Level results through the Association of Indian Universities equivalence process, and overseas admissions officers read IB and Cambridge grades without conversion.",
      ],
      table: {
        caption: "Boards a Puri family may weigh",
        columns: ["Board", "Typical assessment", "Language emphasis", "Common next step"],
        rows: [
          ["Odisha board (BSE / CHSE)", "Annual written exams on prescribed textbooks", "Odia or English", "CHSE Plus Two, then state entrance tests"],
          ["CBSE", "Board exams in Classes 10 and 12", "English or Hindi", "JEE, NEET, CUET-UG"],
          ["ICSE / ISC", "Board exams plus internal marks", "Strong English", "CUET-UG, professional courses"],
          ["IB Diploma", "Exams plus internal assessments and core components", "English, with a second language", "Indian and overseas universities"],
          ["Cambridge / Edexcel IGCSE", "Externally set subject papers, Core or Extended tier", "English", "AS and A Level, or the IB Diploma"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost for a Puri family, and what drives it?",
      paragraphs: [
        "There is no fixed rate card, and we do not publish prices. The fee for a Puri student is quoted in writing before a trial is booked, so a parent sees the number first and decides afterwards. What matters more than a headline figure is which factors move it, because they explain why two neighbours can be quoted differently.",
        "The first factor is the subject and level. IB Maths AA HL or IB Physics HL draws on a smaller pool of tutors than IGCSE Business or MYP Humanities, and rates follow that scarcity. The second is the tutor's own experience with the specific paper structure, including whether they have taught the current syllabus, which changed for IB Sciences and Maths in recent years.",
        "The third is frequency. One weekly slot, two slots a week and an exam-season block are priced differently, and a student can shift between them. Some Puri families start with a weekly lesson and add a second in the two months before May, then stop again after results.",
        "A fourth factor is the amount of preparation the tutor must do. A student rebuilding foundations after a board switch needs custom worksheets, which takes more planning than practising past papers with a confident candidate, and that planning is reflected in the quote.",
        "Online delivery removes travel cost and travel time from the equation. There is no petrol, no fare and no lost hour on the Bhubaneswar road, and for many Puri families that is the bigger saving. Ask for the written rate, compare it with what you would spend on travel and a local coaching centre together, and take the trial before committing.",
      ],
    },
    {
      heading: "Online home tuition, coaching centres, local tutors or self-study: which suits a Puri student?",
      paragraphs: [
        "Puri has coaching centres and independent teachers, mostly aimed at Odisha board, CBSE, JEE and NEET preparation. They are convenient and affordable for those goals. For IB and IGCSE, the trouble is subject coverage: one teacher rarely knows IB Physics HL and IGCSE Economics and MYP Individuals and Societies.",
        "Online private tuition reverses that. You choose the specialist, the specialist teaches your child alone, and scheduling is flexible because there is no commute. Its cost is that the tutor is not physically present, so lessons depend on a stable connection and a quiet corner.",
        "Self-study with past papers is realistic for a highly motivated IGCSE candidate, and it costs little. Most students discover, however, that without someone marking their answers against the mark scheme they cannot see why marks are missing.",
        "Many families combine methods: school or a centre for the core teaching, an online tutor for the one or two hardest subjects. The table sets them side by side.",
      ],
      table: {
        caption: "Ways to get IB or IGCSE help in Puri",
        columns: ["Option", "IB and IGCSE subject depth", "Travel needed", "Attention per student", "Main limit"],
        rows: [
          ["Online one-to-one tutor", "Chosen for the exact course", "None", "Full session for one student", "Needs a stable connection"],
          ["Local coaching centre", "Usually Odisha board, CBSE and entrance exams", "Daily, within town", "Shared with a batch", "Rarely covers IB Diploma content"],
          ["Independent local teacher", "Depends on the individual", "Usually to the teacher or at home", "Good, when subject fits", "Small pool; few IB or IGCSE specialists"],
          ["Self-study with past papers", "Whatever the student can teach themselves", "None", "None", "No marker to explain lost marks"],
          ["Boarding in Bhubaneswar", "Full school-taught programme", "Relocation", "Class-sized", "Cost and distance from family"],
        ],
      },
    },
    {
      heading: "Exam calendar and the Puri year: when does a student actually study?",
      paragraphs: [
        "IB Diploma exams run mainly in May, with a smaller November session used by some schools and by resitting candidates. Cambridge IGCSE has sessions in February and March, May and June, and October and November. Pearson Edexcel IGCSE follows its own May to June and November cycles. Your school or exam centre confirms the specific dates, and the tutor plans backwards from them.",
        "Puri's own calendar shapes those months. Rath Yatra, normally in late June or July, fills Grand Road with crowds, closes some roads for days and disrupts routines for families who live nearby or work in the temple economy. Students who have a June paper need their timetable fixed early. Durga Puja and Kali Puja, in October and November, add days off just as IGCSE November papers approach.",
        "Cyclones are the town's other planning factor. Odisha's coast is exposed in the pre-monsoon and post-monsoon weeks, and Cyclone Fani in 2019 showed how a storm can take out power and connectivity for days. We recommend keeping lesson notes offline, having a mobile hotspot ready, and moving a lesson forward when a storm alert is issued.",
        "Summer is hot and humid, and long afternoons can be slow. Many Puri families prefer early-morning or after-dinner slots in April to June, when study concentration holds up better.",
        "Tutors work back from the paper date. Twelve to sixteen weeks out is when a past-paper rhythm begins, six weeks out is when timed papers take over, and the final fortnight is for weak spots only.",
      ],
      table: {
        caption: "Study calendar in Puri, month by month",
        columns: ["Period", "Exam or school event", "Local factor in Puri", "Tutoring focus"],
        rows: [
          ["January to March", "IGCSE February and March series; Odisha board exams", "Pleasant weather, Magha Saptami and sea-side crowds", "Mock papers, revision blocks"],
          ["April to June", "IB Diploma May exams; IGCSE May and June papers", "Heat, humidity, tourist high season", "Timed papers, early-morning slots"],
          ["June to July", "IB results in July; new academic year begins", "Rath Yatra crowds and road closures", "Reset plan, choose subjects, plan IAs"],
          ["August to September", "Internal assessment drafts; first term tests", "Monsoon showers, Nuakhai in the western belt", "Investigations, exploration and Personal Project drafts"],
          ["October to November", "IGCSE and IB November series", "Cyclone watch, Durga Puja and Kali Puja", "Offline notes, backup power, compact revision"],
          ["December", "Mock exams and university applications", "Winter tourist season, beach festivals", "Personal statements, mock feedback"],
        ],
      },
    },
    {
      heading: "Which universities can a Puri student reach after IB or IGCSE?",
      paragraphs: [
        "A Puri IB graduate can apply to Indian universities, provided the qualification is recognised by the Association of Indian Universities, which issues equivalence for the IB Diploma. Central universities using CUET-UG ask for a valid CUET score in addition to Class 12 equivalence, and IB students register like everyone else.",
        "For engineering and medicine, eligibility needs checking. JEE Main and NEET-UG accept IB and Cambridge students who meet the required subject combination, which is usually Physics, Chemistry and Mathematics or Biology. The relevant point is that IB students should keep their preferred entrance in mind when picking Higher Level subjects, and a tutor can flag a subject clash early.",
        "Locally, students often look at Utkal University, Ravenshaw University in Cuttack, and the KIIT and SOA campuses in Bhubaneswar, along with medical colleges in Odisha through NEET counselling. Some choose Delhi, Pune or Bengaluru for bigger course choice.",
        "Overseas, the IB Diploma and Cambridge A Levels are read directly by universities in the UK, USA, Canada, Australia and Europe. IGCSE results matter mainly as a record of Grade 10 performance and as prerequisites for A Level or the IB.",
        "Tutors coach subjects. Choosing a country or a course is a conversation between the family, the school counsellor and the target university, and we simply make sure subject preparation does not close a door.",
      ],
    },
    {
      heading: "How is IB Mathematics AA or AI, and the IB sciences, taught to a Puri student?",
      paragraphs: [
        "The first job is choosing the right maths course. Analysis and Approaches suits students likely to study engineering, physics or maths, and it is algebra and calculus heavy. Applications and Interpretation suits future economists, biologists and social scientists, and it leans on statistics and technology. Switching after a term is possible but costly, so the choice is made with the school teacher early on.",
        "Lessons in Mathematics follow a pattern. A concept is worked on the whiteboard, the student attempts similar questions unaided, and mistakes are discussed step by step. At HL the Paper 3 problems, which ask for extended chains of reasoning, get regular practice from the second year onward.",
        "Physics, Chemistry and Biology share a pattern of concept, calculation and communication. In Physics the mark usually comes from setting out a clear method; in Chemistry from data-booklet fluency and mechanism drawing; in Biology from choosing precise terms and reading the command word properly.",
        "The Scientific Investigation is the science IA. Tutors talk through how to choose a researchable question, how to plan variables and how to evaluate uncertainty, and they leave the actual writing to the student. This boundary is firm.",
        "For coastal students there is a small advantage: Environmental Systems and Societies and Geography can draw on live examples such as erosion, storm surge and mangrove protection along Odisha's coast, and tutors help students turn familiar scenes into evidence-based evaluation.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects should a Puri student choose?",
      paragraphs: [
        "Core tier papers cap the highest grade at a C, while Extended tier allows up to A star. Students aiming for A Level or the IB Diploma in Science or Maths are normally entered for Extended. The decision is made by the school or exam centre, and a tutor can give an honest read on which tier a student is likely to handle.",
        "Subject choice at IGCSE is wider than in Indian boards. A typical candidate takes five to eight subjects, mixing a language, mathematics, one or more sciences and a humanities or business subject. Students who plan to move to IB Diploma often take Additional Mathematics, since it eases the step up to AA.",
        "Coursework and practicals differ by board. Cambridge sciences use a practical paper or an alternative-to-practical paper, while Pearson Edexcel has its own structure. Because a Puri private candidate may not have a laboratory, tutors show practical methods through diagrams, video and worked data sets so that the written paper feels familiar.",
        "Language subjects matter too. English First Language rewards writing style, and English as a Second Language rewards accuracy. Hindi and other Indian languages are offered by Cambridge as second-language options.",
        "For each subject the plan is the same: check the syllabus code, review a past paper, mark it against the scheme and repeat with harder material.",
      ],
      table: {
        caption: "IGCSE tiers at a glance",
        columns: ["Feature", "Core tier", "Extended tier", "Who it usually suits"],
        rows: [
          ["Top grade available", "Grade C", "Grade A star", "Extended for students heading to A Level or the IB"],
          ["Paper difficulty", "Foundational and applied", "Includes more abstract and multi-step items", "Core suits steady, foundation-building learners"],
          ["Typical subjects with tiers", "Mathematics, sciences, languages", "Mathematics, sciences, languages", "Confirmed by school or exam centre"],
          ["Tutor emphasis", "Accuracy and confidence", "Stretch problems and speed", "Tier chosen after a diagnostic paper"],
        ],
      },
    },
  ],

  process: [
    {
      title: "Send your child's course details",
      description: "Share the programme, subjects, level and exam session over WhatsApp on +91 7439 368 115 or by email at ibgram24@gmail.com.",
    },
    {
      title: "We shortlist a tutor",
      description: "A tutor who has taught that exact course is proposed, with a short profile and availability that fits your evening or weekend.",
    },
    {
      title: "Sit a free trial lesson",
      description: "The student and tutor meet over video for a real lesson, and the parent may sit in to judge the teaching style.",
    },
    {
      title: "Receive rates in writing",
      description: "If the trial goes well, the fee and lesson schedule are confirmed in writing before any payment is made.",
    },
    {
      title: "Study with a note after each session",
      description: "Every lesson ends with a written summary, and the tutor can be replaced without argument if progress stalls.",
    },
  ],

  whyPoints: [
    {
      title: "A tutor pool that is not limited to Puri",
      description: "Because lessons are online, your child works with a specialist from anywhere in India instead of whoever lives on Grand Road or Baliapanda.",
    },
    {
      title: "Honest about what is and is not offered",
      description: "Tutors do not visit homes in Puri. In-person lessons run only in Gurugram and parts of Delhi NCR, and we say so up front.",
    },
    {
      title: "Course-matched, not subject-generic",
      description: "IB Maths AA and AI, IGCSE 0580 and Edexcel 4MA1 are different courses, and tutors are matched to the specific one.",
    },
    {
      title: "A trial lesson before any fee",
      description: "You watch a real class first, and rates are given in writing only afterwards.",
    },
    {
      title: "Written progress notes",
      description: "Each session produces a short summary, so parents in Puri can follow what was covered without sitting in every class.",
    },
    {
      title: "Coaching, never ghost-writing",
      description: "Tutors guide thinking and correct practice work, and never write Internal Assessments, Extended Essays or TOK essays.",
    },
  ],

  tutorsIntro:
    "Every tutor below teaches IB or IGCSE online from within India, on Indian Standard Time. Puri students are matched by course and level, and a trial lesson lets you see the fit before committing.",

  faqs: [
    {
      question: "Are there IB or IGCSE tutors in Puri?",
      answer:
        "Yes, through online lessons. Very few local tutors in Puri specialise in the IB or IGCSE, so IB Gram matches Puri students with tutors elsewhere in India who teach live over video. Lessons are one to one, with a shared whiteboard, and follow your child's exact course, level and exam session. A free trial lesson comes first.",
    },
    {
      question: "Do tutors come to my home in Puri?",
      answer:
        "No. Tutors do not visit homes in Puri. In-person home tuition runs only in Gurugram and parts of Delhi NCR. Puri students study from home through live one-to-one video lessons, which gives the same private attention without travel. A parent can sit in on any session, and the tutor can share the screen for past papers.",
    },
    {
      question: "Is there an IB school in Puri?",
      answer:
        "We have not confirmed any IB school inside Puri town, so we do not name one. The nearest international-curriculum options we could verify are in Bhubaneswar, including KIIT International School and SAI International School. Check current programmes with each school directly, since offerings change from year to year.",
    },
    {
      question: "What does IB tuition cost in Puri?",
      answer:
        "Rates are not published, and are quoted in writing before you book. The price depends on subject and level, the tutor's experience with that course, how many lessons a week you want and how much preparation the tutor needs to do. Online delivery saves travel cost, which matters in Puri where the nearest campuses are sixty kilometres away.",
    },
    {
      question: "Can my child take IGCSE as a private candidate from Puri?",
      answer:
        "Often yes, but it depends on finding an authorised exam centre and registering before the deadline for the session. Ask a centre in Bhubaneswar about private entries, practical requirements and fees. A tutor can prepare your child for the papers, though the entry itself is arranged by the centre and family.",
    },
    {
      question: "Which IB subjects are most requested by Puri students?",
      answer:
        "Mathematics, Physics, Chemistry, Biology and Economics are the usual requests, followed by English A and Business Management. Maths tends to come first because Analysis and Approaches at HL is demanding and few local teachers have taught it. Tutors also help with Theory of Knowledge discussion and preparation for the orals.",
    },
    {
      question: "Will the tutor write my child's Internal Assessment or Extended Essay?",
      answer:
        "No. Tutors coach and never write Internal Assessments, Extended Essays, TOK essays or coursework. They can explain what a criterion asks, review structure, and question a weak argument. The work itself has to be the student's own, and schools and the IB treat anything else as academic misconduct.",
    },
    {
      question: "What times are lessons held in Puri?",
      answer:
        "Lessons run on Indian Standard Time, so there is no time-zone adjustment. Most Puri students choose weekday evenings after school or weekend mornings. Slots can shift around Rath Yatra week, festival days and cyclone alerts, and the tutor will reschedule instead of losing a session.",
    },
    {
      question: "What if our internet or power fails during a storm?",
      answer:
        "Lessons can be moved. Odisha's coast sees cyclone alerts before and after the monsoon, and power or connectivity can drop for days. Keep a mobile hotspot charged, download notes in advance, and tell the tutor early. A missed session is rescheduled, and the weekly plan is adjusted so that syllabus coverage is not lost.",
    },
    {
      question: "Can you help with Odia or Hindi as a language subject?",
      answer:
        "Hindi B is offered at IB and Hindi as a Second Language at Cambridge IGCSE, and tutors can teach both. Odia support is available as reading and writing help for students who want it at home, though not every board or school assesses it. Tell us your school's language requirement when you write in.",
    },
    {
      question: "How do I know a tutor is right for my child?",
      answer:
        "Book the free trial and watch it. The tutor should ask what your child already knows, give a short problem, and explain clearly when a mistake happens. If the fit is wrong afterwards, the tutor is changed without charge, and rates are always given in writing before booking.",
    },
    {
      question: "Is IB or IGCSE better for a child in Puri?",
      answer:
        "Neither is better in general; they suit different children. IGCSE gives subject-by-subject choice and externally set papers, and leads to A Level or the IB Diploma. The IB Diploma asks for six subjects plus core components and rewards writing and research. A good next step is a chat with the school counsellor and, if you like, a trial lesson in one subject.",
    },
    {
      question: "Will IB or IGCSE marks be accepted by Indian universities?",
      answer:
        "Generally yes. The Association of Indian Universities issues equivalence for the IB Diploma, and universities using CUET-UG expect a valid score as well. For JEE and NEET, eligibility depends on the subject combination. Check each institution's current rules, because they are updated regularly and differ by course.",
    },
    {
      question: "Can a Puri student start IB tuition mid-programme?",
      answer:
        "Yes. Students often join in Year 2 of the Diploma or in the middle of MYP after a move. The tutor starts with a diagnostic, identifies gaps against the syllabus, and builds a catch-up plan around upcoming assessments. Starting early in the internal assessment window helps, but late starters are common.",
    },
    {
      question: "How do I get started from Puri?",
      answer:
        "Message +91 7439 368 115 on WhatsApp or email ibgram24@gmail.com with your child's programme, subjects, level, school and exam session. We will propose a tutor, arrange a free trial lesson and send the rates in writing. There is no obligation after the trial.",
    },
    {
      question: "Do you offer PYP and MYP tuition for younger children in Puri?",
      answer:
        "Yes. PYP tutoring focuses on reading, writing and number fluency, while MYP tutoring covers subject content and the criteria-based assessments. Sessions for younger children are shorter and more interactive, and parents are encouraged to stay nearby. The same trial and tutor-change policy applies.",
    },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Start here for an overview of every programme and how tutoring works." },
    { label: "Tutoring across India", href: "/india/", description: "See how online IB and IGCSE tutoring is offered to families in other Indian cities." },
    { label: "Home tuition in Gurugram", href: "/gurgaon/", description: "The one place where in-person home lessons are available, alongside online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Meet the tutors who teach IB subjects at HL and SL." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects and tiers." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What the DP asks of a student, and how tuition fits around it." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and where tutors help." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation." },
    { label: "Bhubaneswar tutoring page", href: "/bhubaneswar/", description: "The nearest city with confirmed IB and IGCSE schools, about sixty kilometres north." },
    { label: "Cuttack tutoring page", href: "/cuttack/", description: "Another Odisha city with online IB and IGCSE tuition." },
    { label: "Contact us", href: "/contact-us/", description: "Write to us or message on WhatsApp to book a free trial lesson." },
  ],

  closingHeading: "Ask for a free trial lesson from Puri",
  closingBody:
    "Tell us the course, level and exam session, and we will propose a tutor and set a trial lesson for a slot that works around your household. Write to ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp. Rates come in writing before you commit, and the tutor can be changed if the fit is wrong.",
};
