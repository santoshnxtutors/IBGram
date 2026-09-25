import type { CitySeoPage } from "../types";

/**
 * Thane schools confirmed to run the IB and/or Cambridge/Edexcel IGCSE. Thane's school landscape
 * is overwhelmingly CBSE and ICSE; only add a name here once its IB or IGCSE stream is verified.
 */
export const thaneIbIgcseSchools = [
  "Smt. Sulochanadevi Singhania School (IBDP)",
  "C.P. Goenka International School, Thane",
  "Podar International School, Thane",
] as const;

export const thane: CitySeoPage = {
  slug: "thane",
  countryName: "Thane",
  countryNameLong: "Thane, Maharashtra",
  demonym: "Thane",
  flagCode: "in",
  countryCode: "IN",
  state: "Maharashtra",
  stateCode: "IN-MH",
  region: "Mumbai Metropolitan Region, Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evening slots after school and unhurried weekend sessions, planned around Thane's Ghodbunder Road and Eastern Express Highway traffic patterns",
  lastUpdated: "2026-09-21",
  geo: { latitude: 19.1972, longitude: 72.9722 },
  wikipedia: "https://en.wikipedia.org/wiki/Thane",
  alternateNames: ["Thana", "Thane City"],
  stripSchools: [...thaneIbIgcseSchools],

  title: "IB & IGCSE Tutors in Thane | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Thane students: DP, MYP, PYP and Cambridge or Edexcel subjects, matched by syllabus, with a free trial class before you commit.",
  h1: "IB and IGCSE Tutors and Online Tuition in Thane",
  heroEyebrow: "IB & IGCSE ONLINE TUTORING FOR THANE STUDENTS",
  heroSubtitle:
    "Thane's school map runs mostly CBSE and ICSE, so a family that has just picked an IB or Cambridge IGCSE syllabus is usually looking for private tuition from home, delivered live, from a tutor who has actually taught that exact course. We work by subject and level first, whether that is a Diploma Programme HL science or an IGCSE 0580 Extended paper, and set up online one-to-one lessons that fit around school hours on Ghodbunder Road or in central Thane.",
  primaryKeyword: "IB and IGCSE tutors in Thane",
  imageAltText: "Student in Thane taking a live online IB Diploma Programme chemistry lesson on a laptop",
  secondaryKeywords: [
    "IB tutor in Thane",
    "IGCSE tutor in Thane",
    "IB home tuition Thane",
    "IGCSE home tuition Thane",
    "IB private tuition Thane",
    "IB Maths tutor Thane",
    "IGCSE Maths tutor Thane",
    "IB Physics tutor Thane",
    "IB Chemistry tutor Thane",
    "IB Biology tutor Thane",
    "IB DP tutor Thane",
    "IB MYP tutor Thane",
    "IB PYP tutor Thane",
    "IGCSE online tuition Thane",
    "IB tutor Ghodbunder Road",
    "IGCSE tutor Manpada",
    "IB tutor Hiranandani Estate Thane",
    "online IB tutor Thane Maharashtra",
    "IB and IGCSE tutors Kalwa Mumbra",
    "Cambridge IGCSE tutor Thane",
  ],

  heroTrustPoints: [
    "Matched on the exact IB or IGCSE course and level, not a generic tag",
    "Live one-to-one online lessons, no travel through Ghodbunder Road traffic",
    "Free trial class before you decide anything",
    "Independent platform, unconnected to any Thane school or exam board",
  ],
  heroStats: [
    { value: "PYP · MYP · DP", label: "IB programmes covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards covered" },
    { value: "Fully online", label: "Live one-to-one from home" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "IB and IGCSE schools and families in Thane",
    paragraphs: [
      "Thane sits just north of Mumbai across the creek, and its school system reflects that: the city is dense with CBSE and ICSE schools built for a large, mostly Maharashtrian and Gujarati business and salaried population, and the IB and Cambridge IGCSE segment is smaller and newer. Smt. Sulochanadevi Singhania School runs an authorised IB Diploma Programme wing in Thane West, and C.P. Goenka International School near Kapurbawdi and Podar International School run Cambridge IGCSE streams alongside their Indian-board classes.",
      "Families arrive at IB or IGCSE in Thane for a mix of reasons. Some are Mumbai-facing corporate households in the Hiranandani Estate or Ghodbunder Road towers who want an international curriculum without the South Mumbai commute. Others are returning NRIs settling near relatives, or business families who have watched IGCSE become the entry route into the IB Diploma two years later. A smaller group simply moves a child out of an overcrowded CBSE classroom once a school opens an IGCSE section.",
      "What almost none of these families get locally is a tutor who has actually taught the exact syllabus their child sits. Thane has plenty of CBSE and JEE and NEET coaching capacity built up over decades, but IB Maths Analysis and Approaches HL or IGCSE Additional Mathematics 0606 needs someone who knows that specific mark scheme, not a general maths teacher repurposed for a new board.",
      "IB Gram works with families across Thane on exactly that basis: online one-to-one lessons with a tutor who has taught the programme, subject and level in question, working to the school's own calendar rather than a generic revision plan. We are an independent platform, not affiliated with the International Baccalaureate Organization, Cambridge Assessment International Education, Pearson Edexcel or any school named on this page.",
    ],
    bullets: [
      "IB DP, MYP and PYP tutors matched by subject and level",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended tiers",
      "Fully online one-to-one lessons, no travel needed",
      "Free trial class and a written note after every session",
    ],
  },

  programmesIntro:
    "Thane students move between boards at two common points: CBSE or ICSE into Cambridge IGCSE around Grade 9, and IGCSE or a state board straight into the IB Diploma at Grade 11. Each stage needs different support, and what a Thane school actually expects at each stage is set out below.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Inquiry units, transdisciplinary themes and a final-year Exhibition instead of graded exams, so early support is about reading fluency, number sense and the research habits the Exhibition demands.",
      countryNote:
        "Thane's few PYP-style early years cohorts are small, and parents most often ask for reading support in English and confidence with open-ended maths problems rather than extra worksheets.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to Class 10, ages 11-16",
      description:
        "Every subject is graded against criteria A-D, the Personal Project lands in MYP 5, and some schools finish with MYP eAssessment; the jump from descriptive answers to criterion-based analysis is where students stall.",
      countryNote:
        "Where Thane schools run an MYP-style pathway, requests cluster around criterion C and D command in sciences and structuring the Personal Project journal before the school's internal deadline.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects, plus Theory of Knowledge, the Extended Essay and Internal Assessments worth 20-30% of most grades, with final exams sitting in May and retakes in November.",
      countryNote:
        "Singhania School's IBDP wing in Thane West drives most local demand: Maths AA and AI, Physics, Chemistry, Economics and English A are the subjects families come to us for most often, usually from Grade 11.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "A blend of DP subjects, a career-related study, the reflective project and personal and professional skills, aimed at students who want an applied route alongside academic depth.",
      countryNote:
        "CP is rare in Thane at present; students on it generally need the same DP-subject tutoring as Diploma students, plus help structuring the reflective project rather than the career study itself.",
    },
  ],

  subjectsIntro:
    "IB tutoring in Thane has to be specific to the course and level, because Maths Analysis and Approaches HL and Applications and Interpretation SL are entirely different subjects to teach, and English A Language and Literature is not the same job as coaching the Individual Oral. We match a Thane student to a tutor who has taught that exact combination recently.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions, proof and the unfamiliar Paper 3 questions HL students find hardest, alongside the maths exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and GDC technique, with the data-driven exploration many AI students start too close to the deadline." },
    { name: "IB Physics", levels: "HL / SL", description: "The full course from mechanics through quantum and relativity options, paper technique and a defensible Scientific Investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, bonding, organic mechanisms and equilibrium, data-booklet fluency and the internal-assessment write-up." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell and molecular biology through ecology and evolution, extended-response command terms and IA statistics." },
    { name: "IB Economics", levels: "HL / SL", description: "Micro, macro, the global economy, accurate diagrams and the Paper 3 policy question that trips up HL students." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying theory to a real case study, quantitative tools for Paper 2 and a Business Management Toolkit-based Extended Essay." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen commentary for Paper 1, comparative essays for Paper 2 and the recorded Individual Oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming logic, data structures and networks, plus the case study and the IA product with its documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "Biological, cognitive and sociocultural approaches, accurately cited studies and structured extended-response answers." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Systems diagrams, sustainability case studies and evaluation-heavy answers that go beyond textbook description." },
    { name: "IB Geography", levels: "HL / SL", description: "Named case studies, fieldwork-based internal assessment and the evaluative writing that separates the top grades." },
    { name: "IB History", levels: "HL / SL", description: "Source-based Paper 1 questions, essay-argument Paper 2 and the historical investigation's research skills." },
    { name: "IB French, Spanish & Hindi B", levels: "HL / SL", description: "Text-type conventions for the written paper, receptive skills for listening and reading, and spontaneous speaking for the oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Building an exhibition commentary around three objects and a prescribed-title essay the student can argue on their own terms." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Narrowing a research question early, meeting subject-specific criteria and using reflection sessions well. Guidance only." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Criteria B and C investigation design, moving from descriptive to analytical answers ahead of Diploma-level demands." },
    { name: "IB MYP Language & Literature and Personal Project", levels: "MYP 1-5", description: "Criterion A textual analysis and a Personal Project process journal kept up through the year, not rebuilt in a rush." },
  ],

  igcseSubjectsIntro:
    "IGCSE tutoring in Thane starts with the board, the syllabus code and the tier: Cambridge 0580 Extended is a different preparation from Edexcel 4MA1 Higher, and 0606 Additional Mathematics is not interchangeable with either. We check the exam series a Thane student is entered for, Cambridge's May-June or October-November, or Edexcel's January or May-June, before matching a tutor.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Paper-specific technique for Extended, accuracy without a calculator, and command words that quietly cost method marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus basics, trigonometric identities and vectors, the strongest local bridge into IB Maths AA HL." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging formulae reliably, electricity and waves, and the alternative-to-practical paper's technique." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, bonding, organic chemistry and the alternative-to-practical paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, human biology and data-response questions, with extended-answer structure for the higher marks." },
    { name: "IGCSE Combined & Coordinated Sciences", levels: "0653 / 0654", description: "Keeping three sciences moving together on one timetable without any one of them slipping." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagram accuracy and the longer evaluative answers examiners specifically reward." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying theory to the set case study rather than writing generic textbook answers." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables, pseudocode and Python programming for the problem-solving paper." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and composition, built on close reading of unseen extracts." },
  ],

  regionsTitle: "Thane localities we serve with online IB and IGCSE tuition",
  regionsIntro:
    "Every session runs online, so a Thane family's locality mostly affects the school calendar and traffic-shaped scheduling we plan around, not whether a tutor can reach the door. For each area below we note the local school context and the practical timing that shapes when live lessons work best.",
  regions: [
    { name: "Ghodbunder Road (Kasarvadavali to Kavesar)", note: "The fastest-growing residential stretch, heavy on CBSE towers with a rising IGCSE and IB interest; evening traffic on this corridor makes online sessions genuinely easier than travel-based tutoring." },
    { name: "Majiwada", note: "A junction locality linking Ghodbunder Road to the Eastern Express Highway, home to several established CBSE and ICSE schools and a growing switch-to-IGCSE population." },
    { name: "Manpada and Balkum", note: "Mid-corridor residential pockets near C.P. Goenka International School's catchment, with families weighing CBSE against a Cambridge IGCSE move around Grade 9." },
    { name: "Hiranandani Estate, Patlipada", note: "A large planned township with an international-school-adjacent profile; families here are among the most likely in Thane to already be considering IB or IGCSE." },
    { name: "Naupada and Panchpakhadi", note: "Older, central Thane neighbourhoods near the railway station with dense ICSE and state-board schooling and Thane's traditional coaching-class belt." },
    { name: "Vartak Nagar and Charai", note: "Established residential areas close to Thane's civic core, with a strong CBSE base and steady demand for exam-board switch tutoring." },
    { name: "Wagle Estate", note: "A mixed industrial-residential zone bordering central Thane, where working professional families increasingly ask about IGCSE for a school move." },
    { name: "Kolshet Road", note: "A newer residential and IT-adjacent corridor that bypasses Ghodbunder Road; useful context when a family's evening schedule depends on a parent's commute time." },
    { name: "Kalwa, Mumbra and Diva", note: "Eastern Thane localities with limited IB or IGCSE school options locally; families here most often study the syllabus through an online tutor while attending a CBSE or state-board school." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring platform. Schools are named only to describe where Thane families actually study the IB or IGCSE syllabus. We are not affiliated with, endorsed by, partnered with or representing any school named here, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Ghodbunder Road and Kapurbawdi belt",
      note: "C.P. Goenka International School near Kapurbawdi and the fast-growing towers along Ghodbunder Road put IGCSE within reach of families who would otherwise default to CBSE.",
      schools: ["C.P. Goenka International School, Thane", "Podar International School, Thane"],
    },
    {
      city: "Central Thane and Thane West",
      note: "Smt. Sulochanadevi Singhania School's IBDP wing in JK Gram, Thane West, is the main reason local families reach Grade 11 already committed to the IB Diploma.",
      schools: ["Smt. Sulochanadevi Singhania School (IBDP)"],
    },
    {
      city: "Nearby: Mumbai and Navi Mumbai",
      note: "Eastern and outer Thane families with very limited local IB or IGCSE options sometimes look at schools across the creek in Mumbai or Navi Mumbai instead; where that is the plan, our tutors work to that school's calendar rather than a Thane one.",
      schools: [],
    },
  ],

  modesIntro:
    "Because home visits are not something we offer in Thane, every family here ends up choosing between two formats and a hybrid of study habits around them. The choice is less about location and more about how a student learns best and how much structure they need alongside the live lesson.",
  modes: [
    {
      title: "Online one-to-one tuition",
      description:
        "Live video lessons with a shared digital whiteboard, screen-shared past papers and saved notes after each class. This is the only lesson format IB Gram offers in Thane; there is no home-visit option here.",
      bullets: [
        "Access to HL and niche-subject specialists beyond Thane's local supply",
        "No dependence on Ghodbunder Road or Eastern Express Highway traffic",
        "Easy to add a second weekly slot before mocks or IA deadlines",
        "Sessions recorded on request for later review",
      ],
    },
    {
      title: "Online tuition paired with school or coaching-centre classes",
      description:
        "Many Thane students already attend a coaching centre for JEE or NEET preparation alongside their IB or IGCSE school; the online tutor focuses specifically on the syllabus and exam board the coaching centre does not cover.",
      bullets: [
        "Keeps IB or IGCSE subject depth separate from generic exam coaching",
        "Tutor works to the exact board's mark scheme and command words",
        "Scheduled around existing coaching-centre and school timetables",
        "Useful for switch years such as Grade 9 CBSE to IGCSE",
      ],
    },
    {
      title: "Intensive online sessions before exams",
      description:
        "Short, focused blocks in the weeks before Cambridge or Edexcel exam series, or before IB mocks and the May session, concentrating on past papers and the topics most likely to move a grade.",
      bullets: [
        "Built around Cambridge's May-June and October-November series",
        "Built around Edexcel's January and May-June series",
        "Targeted at IB mocks and the May Diploma session",
        "Can run daily in the final fortnight if needed",
      ],
    },
  ],

  sections: [
    {
      heading: "CBSE, ICSE or IB and IGCSE: which is right for a Thane family?",
      paragraphs: [
        "Most Thane schools run CBSE or ICSE, and both are respected, exam-focused boards with deep local coaching support for JEE and NEET. IB and IGCSE suit families who want continuous internal assessment, coursework-style thinking and a curriculum recognised the same way at universities abroad as it is in India, rather than a single high-stakes board exam at the end.",
        "The practical difference shows up in how a Thane student is assessed day to day. CBSE and ICSE lean on end-of-term and board exams; IGCSE splits marks between exam papers and, in some subjects, coursework; the IB Diploma puts 20 to 30 percent of most subject grades into Internal Assessments completed across two years, alongside Theory of Knowledge and the Extended Essay.",
        "Cost and convenience matter here too. CBSE and ICSE schools are everywhere in Thane, with established local tuition and coaching options. IB and Cambridge IGCSE schools are fewer, which is exactly why families on this page are looking for a tutor rather than a walk-in coaching class: the local supply of subject specialists for these boards is thin.",
        "There is no universally right answer. A student who thrives on repetition and structured practice for a single exam often does well on CBSE; a student who writes well, argues a point and manages long-term coursework tends to suit IGCSE or the IB. The switch decision should follow the child's working style, not just the school's brochure.",
      ],
      table: {
        caption: "CBSE, ICSE and IB/IGCSE compared for Thane families",
        columns: ["Aspect", "CBSE / State Board", "ICSE", "IB / IGCSE"],
        rows: [
          ["Assessment style", "Mostly end-of-year board exams", "Board exams with detailed internal marks", "IGCSE exams plus coursework; IB Internal Assessments and coursework"],
          ["Local availability in Thane", "Very wide", "Wide", "A handful of schools with an IGCSE or IBDP stream"],
          ["Coaching ecosystem", "Deep JEE/NEET coaching culture", "Deep JEE/NEET coaching culture", "Thin locally; needs a syllabus-specific tutor"],
          ["Best fit", "Structured practice, single high-stakes exam", "Detail-heavy, broad subject coverage", "Coursework, sustained research and international recognition"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Thane, and what actually drives the price?",
      paragraphs: [
        "The cost of an IB or IGCSE tutor for a Thane student depends mainly on the subject and level, the tutor's experience with that exact syllabus, session length and how close a student is to an exam series. IB Diploma HL sciences and maths typically cost more per hour than MYP or IGCSE Core support, because fewer tutors have taught that specific content at that depth.",
        "Because Thane has few local specialists in these boards, tutors are matched from across India and teach online, which keeps the fee tied to expertise rather than to travel. We confirm a fee for a specific match before any trial class, and we do not publish a fixed price list, because the right tutor and the right rate depend on the subject, level and how much support a student needs.",
        "Families sometimes compare an IB or IGCSE tutor's rate to a Thane JEE or NEET coaching-centre fee and find it higher per hour. The comparison misses the point: coaching centres teach groups a shared curriculum, while an IB or IGCSE tutor teaches one student that student's own school's exact syllabus, at their pace, working to the school's own deadlines.",
        "There are no long-term contracts. Engagements are reviewed every few weeks so a Thane family can pause over exam breaks or during festivals such as Ganeshotsav, or stop entirely if the arrangement is not working, without any penalty.",
      ],
      bullets: [
        "Rate depends on subject, level and tutor experience, not location",
        "Fee confirmed before the trial, nothing hidden afterwards",
        "Specialist one-to-one tuition, not a shared coaching-centre fee",
        "No long contracts; review or pause every few weeks",
      ],
    },
    {
      heading: "Online tuition, coaching classes or a private tutor: what actually works in Thane?",
      paragraphs: [
        "For IB and IGCSE subjects specifically, an online private tutor is usually the better starting point in Thane, because the city's coaching-class strength is built around CBSE, ICSE, JEE and NEET, not Cambridge or IB mark schemes. A coaching centre teaching thirty students a shared CBSE syllabus cannot pivot to one child's IGCSE 0620 Extended paper.",
        "Self-study works for a strong, self-directed student on a familiar subject, but IB Internal Assessments and IGCSE coursework components reward feedback on drafts long before the final version, something self-study alone rarely delivers well. A tutor who has marked or taught the same component before can flag a weak methodology in week one rather than after submission.",
        "Group online classes sit between the two: cheaper than one-to-one, but slower to address an individual gap, since the pace is set for the group rather than one student's specific weak topic. For a Thane student switching boards mid-year, that pace mismatch is often the reason group classes stop helping quickly.",
        "One-to-one online tuition costs more per hour than either alternative but concentrates every minute on that student's syllabus, current grade and the specific paper or IA giving them trouble, which is usually the deciding factor for families choosing between the options below.",
      ],
      table: {
        caption: "IB/IGCSE study options available to a Thane student",
        columns: ["Option", "Board-specific depth", "Personal pace", "Typical use in Thane"],
        rows: [
          ["Local coaching centre", "Low for IB/IGCSE (built for CBSE/JEE/NEET)", "Group pace", "Better for JEE/NEET-aligned subjects, not IB/IGCSE mark schemes"],
          ["Self-study", "Depends on the student", "Fully self-paced", "Works for a strong student revising a familiar topic"],
          ["Group online classes", "Moderate", "Set by the group", "Useful for broad revision, weaker for a specific gap"],
          ["One-to-one online tutor", "High, matched to the exact syllabus", "Fully individual", "The default for IB HL subjects and IGCSE Extended tiers"],
        ],
      },
    },
    {
      heading: "The Thane school year: exams, monsoon and festivals",
      paragraphs: [
        "Thane's international-curriculum schools broadly follow an April-to-March academic year, while external exams follow each board's own calendar. IB Diploma exams sit in May with results in early July and a November retake session; Cambridge IGCSE sits in May-June and October-November; Edexcel IGCSE sits in January and May-June.",
        "The monsoon, roughly June to September, is a genuine scheduling factor in Thane. Waterlogging on low-lying stretches near Kopri and parts of Ghodbunder Road, and delays on the Eastern Express Highway, regularly disrupt evening commutes, which is one practical reason online tuition holds up better through July and August than any travel-dependent arrangement.",
        "Thane's Ganeshotsav is one of the largest in the Mumbai region, with major public visarjan processions through late August or September depending on the year, and family commitments during Navratri and Diwali that follow soon after. Families often want a lighter tutoring schedule through the peak festival fortnight and a catch-up push once it ends.",
        "The most useful planning window is well before mocks: starting in April or May for a Grade 11 Diploma student, or at the start of Grade 9 or Grade 10 for an IGCSE student, leaves room to work around the monsoon and festival calendar instead of losing that time to it later.",
      ],
      table: {
        caption: "Thane's academic year against the exam and festival calendar",
        columns: ["Period", "School term", "Exam activity", "Local factor"],
        rows: [
          ["April-May", "New academic year begins", "IB Diploma May exams; results in July", "Good window to start tutoring before mocks"],
          ["June-September", "First term, monsoon", "Coursework and IA work in progress", "Waterlogging and traffic disruption on Ghodbunder Road corridor"],
          ["Late Aug-Oct", "Mid-year", "Cambridge Oct-Nov series preparation", "Ganeshotsav, Navratri; lighter schedules are common"],
          ["Nov-Jan", "Second term", "Cambridge Oct-Nov results; Edexcel Jan series", "Diwali break; exam-season sessions increase after"],
        ],
      },
    },
    {
      heading: "Which universities can a Thane IB or IGCSE student apply to?",
      paragraphs: [
        "IB and IGCSE students from Thane apply both within India and abroad. In India, the Association of Indian Universities issues equivalence certificates for the IB Diploma against the Class 12 standard, and the Common University Entrance Test (CUET-UG) is the entry route into most central and many state universities regardless of board. IGCSE students typically need an additional Class 12 qualification, such as IB or A Levels, before Indian university entry.",
        "Engineering and medical eligibility follow national rules rather than the school's board. JEE Main eligibility generally needs Physics, Chemistry and Mathematics among the best five Diploma subjects with the qualifying marks NTA sets each year; NEET eligibility needs Physics, Chemistry and Biology similarly. IB and IGCSE students from Thane who plan to sit these exams should confirm subject and grade requirements early, ideally by Grade 11.",
        "For students heading abroad, UK offers are usually framed around total IB points with named HL subject minimums; US applications weigh predicted grades within a fuller profile including essays and extracurriculars; universities in Canada, Singapore, Australia and continental Europe each apply their own IB or IGCSE-plus-A-Level entry rules. Mumbai's large NRI and returning-professional community in Thane means these pathways come up often.",
        "Predicted grades, generated during Grade 12, are what most universities abroad actually see when applications go in, which makes the Grade 11 and early Grade 12 internal assessments and mock exams the real target for tutoring, not only the final May session.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG for Indian university entry",
        "JEE/NEET eligibility depends on specific subject and grade thresholds, not board",
        "UK, US, Canadian and other overseas routes read IB/IGCSE results differently",
        "Predicted grades in Grade 12 usually matter more than the final May result for applications",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the sciences, for Thane's Diploma students",
      paragraphs: [
        "Thane's IB Diploma students, mostly through Singhania School's IBDP wing, most often need Maths Analysis and Approaches at Higher Level, because it carries proof, calculus depth and the unfamiliar Paper 3 investigation that a CBSE-trained student rarely meets before Grade 11. Applications and Interpretation, by contrast, rewards statistical modelling and confident GDC use over pure proof.",
        "Physics and Chemistry HL both demand fluency with the data booklet, careful uncertainty handling and a defensible Scientific Investigation, planned and analysed to the criteria rather than written up after the fact. Biology HL leans more on extended-response command terms and correctly interpreting experimental data, which is where many strong CBSE-background students initially lose marks despite knowing the content.",
        "A student switching from CBSE or a state board into DP sciences in Grade 11 usually finds the content overlap larger than expected but the question style unfamiliar: IB papers reward explanation and justification, not just a correct final answer. Tutoring in the first term should target that gap directly rather than re-teaching material the student already knows.",
        "Because so few Thane-based tutors have taught these specific IB courses, we match Thane families with tutors from wherever they are strongest on that exact subject and level, working entirely online, so the search is not limited to who happens to live nearby.",
      ],
      bullets: [
        "Maths AA HL: proof, calculus and Paper 3 problem-solving",
        "Maths AI HL/SL: statistics, modelling and GDC fluency",
        "Physics and Chemistry HL: data-booklet use and the Scientific Investigation",
        "CBSE and state-board switchers need command-word training, not content repetition",
      ],
    },
    {
      heading: "Core or Extended IGCSE: which tier fits a Thane student?",
      paragraphs: [
        "Core tier caps most Cambridge IGCSE subjects at a grade C equivalent (grade 5 on the 9-1 scale), while Extended tier opens the full grade range but is a harder paper. For a Thane student who may progress into the IB Diploma afterwards, the tier decision in Grade 9 has real consequences: Core-tier maths and sciences leave real gaps against DP HL demands two years later.",
        "The decision should be made subject by subject, not as a blanket policy. A student who is strong in maths but finds written English harder might reasonably sit Extended Mathematics and Core English First Language, provided the school's own tier policy allows that mix, which most Cambridge-affiliated Thane schools do.",
        "Edexcel's Foundation and Higher tiers work similarly but with different grade boundaries and question styles; a tutor moving a student between the two boards' materials, which happens when families switch schools mid-programme, needs to be explicit about where the styles diverge rather than assuming Cambridge practice transfers directly.",
        "For students planning the IB Diploma next, Additional Mathematics 0606 and Extended-tier Physics and Chemistry are the strongest local preparation, closing much of the gap that otherwise shows up in the first term of DP HL sciences.",
      ],
      bullets: [
        "Core tier caps grades; Extended opens the full range but is harder",
        "Tier choice can vary by subject within the same student",
        "Cambridge and Edexcel tier systems are not directly interchangeable",
        "0606 Additional Mathematics is the best local bridge to IB Maths AA HL",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects, and Cambridge or Edexcel IGCSE, entirely online for Thane students. Every match is checked against the exact syllabus, level and exam series before a trial class is offered.",

  process: [
    { title: "Share your brief", description: "Tell us the programme or board, subject and level, current or predicted grade and the times that suit your family in Thane." },
    { title: "Get a shortlist", description: "We match tutors on exact syllabus fit first, explaining why each suggested tutor suits your child's specific course." },
    { title: "Take a free trial class", description: "Your child works through a real topic online with the tutor, at no charge and with no obligation to continue." },
    { title: "Agree the first-month plan", description: "The tutor sets out topics, session frequency and how progress will be reported; you approve it or ask for changes." },
    { title: "Review every few weeks", description: "We check in on progress, adjust around mocks, exam series or festivals, and re-match if the fit isn't right." },
  ],

  whyPoints: [
    { title: "Syllabus-first matching", description: "Tutors are matched on the exact IB subject and HL or SL level, or the IGCSE board, code and tier, not a generic label." },
    { title: "No travel dependency", description: "All lessons run online, so Ghodbunder Road or Eastern Express Highway traffic never cancels a session." },
    { title: "Free trial before commitment", description: "A real topic, a real tutor, before you decide, so you judge the fit on evidence." },
    { title: "Academic integrity respected", description: "Tutors guide IAs, the EE and IGCSE coursework but never write assessed work." },
    { title: "Written notes after every session", description: "A short record of what was covered and what comes next, so progress stays visible." },
    { title: "Independent and flexible", description: "No school or board ties, no long contracts, and re-matching whenever the fit is wrong." },
  ],

  faqs: [
    {
      question: "Do you offer home tuition in Thane?",
      answer:
        "No, we do not send tutors to homes in Thane; in-person home visits currently run only in Gurugram and parts of Delhi NCR. For Thane, we offer online one-to-one tuition: live private lessons your child takes at home over video, with a shared whiteboard and saved notes. Many families find this works well precisely because it removes Ghodbunder Road and Eastern Express Highway traffic from the schedule entirely.",
    },
    {
      question: "How do I find an IB tutor for my child's specific subject in Thane?",
      answer:
        "Share the programme, subject, level and current grade with IB Gram, and we shortlist tutors who have taught that exact combination recently. Thane has few local IB specialists, so matches come from across India and teach entirely online. You take a free trial class before deciding, and if the fit is wrong we suggest another tutor rather than asking you to persist.",
    },
    {
      question: "Which schools in Thane offer the IB or IGCSE?",
      answer:
        "Smt. Sulochanadevi Singhania School runs an authorised IB Diploma Programme wing in Thane West, and C.P. Goenka International School near Kapurbawdi and Podar International School run Cambridge IGCSE streams. Most other Thane schools follow CBSE, ICSE or the Maharashtra State Board, so families choosing IB or IGCSE are still a minority locally.",
    },
    {
      question: "What does an IB or IGCSE tutor cost in Thane?",
      answer:
        "The fee depends on the subject, level, session length and tutor experience, confirmed for your specific match before the trial. IB Diploma HL subjects generally cost more than MYP or IGCSE Core support, because fewer tutors have taught that content at that depth. There are no long contracts, and you can pause or stop the arrangement at any time.",
    },
    {
      question: "Can a tutor help with IB Internal Assessments in Thane?",
      answer:
        "Yes, but only with guidance, never by writing any part of the work. A tutor can help choose a workable research question, explain what the assessment criteria reward and give critical feedback on drafts. Writing or rewriting an Internal Assessment breaches IB academic integrity rules and risks the Diploma, so IB Gram tutors decline any request to do that.",
    },
    {
      question: "Is IGCSE Core or Extended better for a Thane student planning the IB Diploma?",
      answer:
        "Extended tier gives access to the full grade range and covers more content, which matters if the student plans to take IB Diploma HL sciences or maths afterwards. Core tier caps the top grade and leaves real gaps against HL demands. The right choice depends on the subject and the student's current level, decided subject by subject rather than as a blanket rule.",
    },
    {
      question: "Do you cover Cambridge and Edexcel IGCSE for Thane students?",
      answer:
        "Yes, we match tutors for both boards. Cambridge students are matched by syllabus code and tier, such as Mathematics 0580 Extended, and Edexcel students by specification and Foundation or Higher tier. The two boards use different question styles and exam series, so tutors work from the specific board's past papers rather than treating them as interchangeable.",
    },
    {
      question: "Which IB Diploma subjects can you help with for Thane students?",
      answer:
        "We match tutors for all major IB Diploma subject groups: Maths Analysis and Approaches and Applications and Interpretation at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science and Psychology, plus Environmental Systems and Societies, Geography, History, language B subjects, Theory of Knowledge and the Extended Essay.",
    },
    {
      question: "My child studies CBSE and is switching to IGCSE. Can a tutor help with the transition?",
      answer:
        "Yes, this is one of the most common requests we get from Thane families. The content gap is usually smaller than expected; the real difference is question style, since IGCSE rewards explanation and application over recall. A tutor who knows both systems can build those habits quickly, ideally starting the summer before the switch or early in the first term after it.",
    },
    {
      question: "Is online tutoring as effective as in-person tutoring for IB and IGCSE students?",
      answer:
        "For subject-specific IB and IGCSE tutoring, online lessons work very well, especially for HL subjects and exam-board-specific preparation where the right specialist may not live in Thane at all. A shared digital whiteboard, screen-shared past papers and saved session notes replace most of what a face-to-face lesson gives a student, and only the physical presence of a tutor in the room is genuinely missing, which matters less for exam-focused subject tutoring than for younger children.",
    },
    {
      question: "How are IB Gram tutors for Thane students verified?",
      answer:
        "Tutors are checked on qualifications, teaching background and depth in the specific IB subject and level, or IGCSE board and tier, they will teach, before being introduced to any family. The free trial class then lets your child judge explanation style directly. If the fit is not right, we look for another tutor rather than asking your child to adjust.",
    },
    {
      question: "When should my child start IB or IGCSE tutoring in Thane?",
      answer:
        "The best time is the start of the course: Grade 9 for IGCSE and Grade 11 for the IB Diploma, before the monsoon term disrupts routines and well ahead of mocks. Starting later, including in the final year, can still help, but the focus shifts to the highest-value topics and past papers rather than building foundations from scratch.",
    },
    {
      question: "Can sessions work around Ganeshotsav, Diwali and other Thane festivals?",
      answer:
        "Yes, we plan around your family's calendar. Many Thane families want a lighter schedule during Ganeshotsav's peak days and Diwali week, with sessions resuming at the normal pace afterwards. Because everything runs online, rescheduling around a festival or family event is simple and does not affect any travel arrangement.",
    },
    {
      question: "What happens if the tutor is not the right fit for my child?",
      answer:
        "Tell us and we will find another tutor. We review progress every few weeks and re-match whenever the fit is wrong, rather than asking your child to continue with someone who is not working for them. There are no long contracts, so you can also pause or stop sessions at any point without penalty.",
    },
    {
      question: "Can one tutor cover both my children if they are on different boards?",
      answer:
        "Sometimes, but we match by course rather than assuming one tutor suits both. A tutor strong in IGCSE Mathematics may also teach IB Maths AA SL, but IB HL subjects usually need a Diploma specialist. For siblings on different programmes in Thane, we often match one tutor per child so each gets syllabus-specific support.",
    },
    {
      question: "Is IB Gram affiliated with any school in Thane or with the IB or Cambridge?",
      answer:
        "No. IB Gram is an independent tutoring platform, not affiliated with, endorsed by or representing any Thane school, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. School names on this page describe where families in Thane study these syllabuses, and tutors work to each school's own calendar.",
    },
    {
      question: "How do I get started with an IB or IGCSE tutor in Thane?",
      answer:
        "Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp with your child's programme or board, subject, level and current grade. We will shortlist a matched tutor, share their background and set up a free trial class online, with no charge and no obligation to continue afterwards.",
    },
  ],

  internalLinks: [
    { label: "IB tutors in Thane", href: "/ib-tutors/thane/", description: "Programme and subject pages for IB tutoring in Thane." },
    { label: "IGCSE tutors in Thane", href: "/igcse-tutors/thane/", description: "Cambridge and Edexcel IGCSE tutor matching for Thane students." },
    { label: "IGCSE in Thane", href: "/igcse-pages/thane/", description: "How IGCSE tutoring works for Thane families." },
    { label: "IB tutors in Mumbai", href: "/mumbai/", description: "IB and IGCSE tutoring across neighbouring Mumbai." },
    { label: "IGCSE and IB in Navi Mumbai's Kalyan-Dombivali", href: "/kalyan-dombivali/", description: "Tutoring for the Kalyan-Dombivali corridor near Thane." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP works: HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, the Personal Project and eAssessment explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP units of inquiry and the Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series explained." },
    { label: "IB Maths course", href: "/courses/ib/mathematics/", description: "IB Maths AA and AI syllabus content and tutoring approach." },
    { label: "Test prep and admissions support", href: "/admissions/test-prep/", description: "Support for JEE, NEET and university entrance alongside IB or IGCSE." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial class." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor for your Thane student",
  closingBody:
    "Tell us the programme or board, subject and level, your child's current grade and the times that work around your Thane school day. You'll get back a matched tutor, their teaching background and an online trial slot, with no charge and no commitment. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",
};
