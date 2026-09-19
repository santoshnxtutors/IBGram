import type { CountrySeoPage } from "../types";

/**
 * Gurugram schools shown in the /gurgaon/ sliding strip. Only schools known to offer the IB
 * and/or Cambridge or Pearson Edexcel IGCSE belong here: a CBSE-only school listed as an IB or
 * IGCSE school would be a factual error on the page. Add a name only once it is verified.
 */
export const gurgaonIbIgcseSchools = [
  "Pathways World School, Aravali",
  "Pathways School Gurgaon",
  "Lancers International School",
  "Scottish High International School",
  "GD Goenka World School",
  "Heritage Xperiential Learning School",
  "The Shri Ram School, Aravali",
  "DPS International Edge",
] as const;

/**
 * /gurgaon/ - the IB and IGCSE homepage for Gurugram (Gurgaon). Rendered with the country layout
 * (same spacing as /usa) but not registered in countrySeoPages: it has its own route, its own
 * Gurgaon-specific metadata and JSON-LD (buildGurgaonHubMetadata / buildGurgaonHubSchema), and a
 * directory of every /gurgaon/<slug>/ locality page.
 */
export const gurgaon: CountrySeoPage = {
  slug: "gurgaon",
  countryName: "Gurgaon",
  countryNameLong: "Gurugram (Gurgaon), Haryana",
  demonym: "Gurgaon",
  flagCode: "in",
  countryCode: "IN",
  region: "National Capital Region, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "After-school weekday slots and weekend mornings, planned around Gurgaon school timings and traffic",
  lastUpdated: "2026-09-13",

  title: "IB & IGCSE Home Tutors in Gurgaon | Home & Online Tuition",
  metaDescription:
    "Verified IB and IGCSE home tutors across Gurgaon: IB DP, MYP, PYP and Cambridge or Edexcel IGCSE subjects, at home, online or hybrid, with a free trial class.",
  h1: "IB and IGCSE Home Tuitions in Gurgaon",
  heroEyebrow: "IB & IGCSE HOME TUITION IN GURUGRAM",
  heroSubtitle:
    "Your child studies the International Baccalaureate or IGCSE at a Gurgaon school; we match them with a tutor who teaches that exact syllabus, at home in your sector or society, online, or a mix of both. Tell us the programme, the subject, the level and your area, from Golf Course Road to Sohna Road, and we shortlist tutors who have taught it and can realistically reach you on a school night.",
  primaryKeyword: "IB and IGCSE home tutors in Gurgaon",
  imageAltText: "IB tutor working through a Diploma Programme maths problem with a student at home in Gurgaon",
  secondaryKeywords: [
    "IB home tutor in Gurgaon",
    "IGCSE home tutor in Gurgaon",
    "IB home tuition Gurgaon",
    "IGCSE home tuition Gurugram",
    "IB tutor Gurugram",
    "IGCSE tutor Gurugram",
    "IB DP tutor Gurgaon",
    "IB MYP tutor Gurgaon",
    "IB PYP tutor Gurgaon",
    "IB Maths AA HL tutor Gurgaon",
    "IB Maths AI tutor Gurgaon",
    "IB Physics home tutor Gurgaon",
    "IB Chemistry tutor Gurgaon",
    "IB Biology tutor Gurgaon",
    "IB Economics tutor Gurgaon",
    "IB English tutor Gurgaon",
    "IGCSE Maths home tutor Gurgaon",
    "IGCSE Additional Maths tutor Gurgaon",
    "IGCSE Physics home tutor Gurgaon",
    "IGCSE Chemistry tutor Gurgaon",
    "IGCSE Biology tutor Gurgaon",
    "IGCSE Economics tutor Gurgaon",
    "Cambridge IGCSE tutor Gurgaon",
    "Edexcel IGCSE tutor Gurgaon",
    "IB tutor Golf Course Road",
    "IGCSE tutor Sohna Road",
    "IB tutor DLF Phase 5",
    "IB IA and Extended Essay help Gurgaon",
    "online IB tutor Gurgaon",
    "best IB and IGCSE tutors in Gurugram",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact IB or IGCSE syllabus and level",
    "Home visits across Gurgaon sectors, societies and corridors",
    "Free trial class before you commit to anything",
    "Independent platform, not tied to any school or exam board",
  ],
  heroStats: [
    { value: "PYP · MYP · DP", label: "IB programmes covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards covered" },
    { value: "Home · Online · Hybrid", label: "Lesson modes in Gurgaon" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "What IB and IGCSE home tuition in Gurgaon actually involves",
    paragraphs: [
      "IB and IGCSE home tuition in Gurgaon means a subject specialist who teaches your child's exact syllabus, one to one, at your home in Gurugram, online, or in a mix of both. For an IB student that is a named Diploma Programme, Middle Years Programme or Primary Years Programme subject at the right level; for an IGCSE student it is a Cambridge or Pearson Edexcel syllabus code and tier. The tutor works to the school's calendar, the internal assessment deadlines and the external exam session, not to a generic worksheet.",
      "Gurgaon has one of the densest clusters of international-curriculum schools in India, spread along Golf Course Road, Golf Course Extension Road, Sohna Road, the DLF phases and the newer sectors off the Dwarka Expressway. That density is useful for families and hard on students. Classes move quickly, assessment criteria are unforgiving, and a child who falls behind in October on IB Maths AA or IGCSE Chemistry 0620 rarely catches up on their own before mocks.",
      "The second reality is the city itself. A tutor who lives in Palam Vihar cannot reliably reach Nirvana Country at 6 pm on a Tuesday, and a 45-minute commute each way quietly cancels sessions by November. So we match on two things at once: syllabus fit and travel fit. Where a strong subject specialist cannot reach your society on school nights, we say so and offer online or hybrid sessions with the same tutor instead of a weaker local match.",
      "IB Gram is an independent tutoring platform registered in Gurugram, Haryana. We are not affiliated with, endorsed by or representing any school named on this page, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. Tutors teach, explain and review; they do not write Internal Assessments, Extended Essays, coursework or any assessed work for students.",
    ],
    bullets: [
      "IB DP, MYP and PYP tutors for every major subject group",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended tiers",
      "Home sessions matched to what a tutor can reach on school nights",
      "Online and hybrid options with the same tutor",
      "Free trial class and a written plan after it",
    ],
  },

  programmesIntro:
    "Gurgaon families move between boards more than almost anywhere else in India: CBSE to IGCSE in Grade 9, IGCSE to the IB Diploma in Grade 11, or straight into the IB continuum at a Golf Course Road school. Each stage asks for a different kind of help. Below is how each programme runs in Gurugram schools and what a home tutor should actually be doing at that stage.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "The PYP is inquiry-led: units of inquiry, transdisciplinary themes and, in the final year, the PYP Exhibition. There are no external exams, so tutoring is about reading, writing, number sense and the research habits the Exhibition needs.",
      countryNote:
        "In Gurgaon, PYP families usually want help with English reading fluency, maths foundations and Exhibition research rather than 'extra homework'. Sessions are short, after school, and most work well at home.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "The MYP assesses every subject against criteria A-D, runs the Personal Project in MYP 5 and, in some schools, ends with MYP eAssessment. The jump from descriptive answers to criterion-level analysis is where most students stall.",
      countryNote:
        "Gurgaon MYP students most often need criterion B and C help in sciences, analysis in Language and Literature, and structure for the Personal Project process journal before the Grade 10 deadline.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Ages 16-19",
      description:
        "Six subjects (three at Higher Level, three at Standard Level), plus Theory of Knowledge, the Extended Essay and the Internal Assessments that carry 20-30% of most subject grades. Final exams sit in the May session, with November as the retake window.",
      countryNote:
        "Most Gurgaon DP requests are for Maths AA or AI at HL, Physics, Chemistry, Economics and English A, usually from Grade 11 onwards, with a second weekly slot added before May mocks.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Ages 16-19",
      description:
        "Two or more DP courses, a career-related study, the reflective project and personal and professional skills. Fewer Gurgaon schools run it, but the DP subject support is the same.",
      countryNote:
        "CP students in Gurugram usually need help with the DP subjects inside the programme and with structuring the reflective project, not with the career study itself.",
    },
    {
      code: "IGCSE",
      name: "Cambridge and Pearson Edexcel IGCSE",
      ageRange: "Ages 14-16",
      description:
        "Two-year syllabuses in Grades 9 and 10, graded 9-1 or A*-G, with Core and Extended tiers in Cambridge and Foundation and Higher tiers in Edexcel. Cambridge sits May-June and October-November; Edexcel sits January and May-June.",
      countryNote:
        "In Gurgaon, IGCSE is often the bridge into the IB Diploma. Tutors here pay attention to Extended tier choices and to the maths and science depth that DP HL subjects will later assume.",
    },
  ],

  subjectsIntro:
    "IB tutoring in Gurgaon is subject- and level-specific. Maths Analysis and Approaches HL is a different job from Applications and Interpretation SL, and an English A Language and Literature tutor is not automatically the right person for the Individual Oral. We match on the exact course, the HL or SL level, the Internal Assessment stage and your child's exam session, then on whether the tutor can reach your part of Gurugram.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, proof, vectors and the Paper 3 problem-solving HL students find hardest, plus the Maths exploration IA." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and GDC fluency, with the data-heavy exploration IA that AI students often start too late." },
    { name: "IB Physics", levels: "HL / SL", description: "Themes A-E, Paper 1A/1B and Paper 2 technique, uncertainties, and a Scientific Investigation with a defensible method." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure and Reactivity, organic mechanisms, energetics, data booklet use and the Scientific Investigation write-up." },
    { name: "IB Biology", levels: "HL / SL", description: "Unity and diversity through continuity and change, extended-response command terms and IA statistics." },
    { name: "IB Economics", levels: "HL / SL", description: "Micro, macro and global economics, accurate diagrams, Paper 3 policy questions for HL and the three commentaries." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study application, quantitative tools for Paper 2 and a Business Research Project built on a real organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Paper 1 unseen analysis, Paper 2 comparative essays, the Individual Oral and the HL Essay." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode, OOP, networks and abstract data structures, plus the IA product and documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "Biological, cognitive and sociocultural approaches, accurate study citation and ERQ structure." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking, evaluation over description, and case studies that go beyond the textbook." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study depth, fieldwork IA methodology and the evaluation that separates a 5 from a 7." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 source analysis, Paper 2 essay argument and the historical investigation." },
    { name: "IB French, Spanish & Hindi B", levels: "HL / SL", description: "Text-type conventions for Paper 1, receptive skills for Paper 2 and spontaneous speaking for the individual oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "The TOK exhibition commentary and a prescribed-title essay the student can genuinely argue from both sides." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Narrowing a research question early, subject-specific criteria and the reflection sessions. Guidance only; the essay stays the student's own." },
    { name: "IB MYP Sciences & Maths", levels: "MYP 1-5", description: "Criteria A-D, investigation design for criteria B and C, and preparation for DP-level maths and sciences." },
    { name: "IB MYP English & Personal Project", levels: "MYP 1-5", description: "Criterion A analysis in Language and Literature and a Personal Project process journal that is kept up, not rebuilt at the end." },
  ],

  igcseSubjectsIntro:
    "IGCSE tutoring in Gurgaon starts with the syllabus code and the tier, because Cambridge 0580 Extended, 0606 Additional Mathematics and Edexcel 4MA1 Higher are three different preparations. We match tutors on board, code, tier and exam series (May-June or October-November for Cambridge, January or May-June for Edexcel), and on whether your child is heading into the IB Diploma afterwards, which changes how deep the maths and sciences need to go.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Paper-by-paper technique for Extended, non-calculator accuracy and the command words that cost method marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, trigonometric identities and vectors, the bridge into IB Maths AA HL." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Higher-tier problem solving and how Edexcel question styles differ from Cambridge." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging equations reliably, electricity and waves, and the practical alternative paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, bonding, electrochemistry, organic chemistry and alternative-to-practical skills." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Extended-response structure, genetics and inheritance, and data interpretation." },
    { name: "IGCSE Combined & Coordinated Sciences", levels: "0653 / 0654", description: "Three sciences on one timetable without any of them falling behind." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagram accuracy and the longer evaluation questions examiners reward." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying theory to the case-study business instead of generic answers." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Double entry, final accounts layout and ratio analysis, where presentation carries marks." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables, pseudocode and Python programming for the problem-solving paper." },
    { name: "IGCSE ICT 0417", levels: "Grade 9-10", description: "The practical papers, where marks are lost on formatting and file handling." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and composition, with close reading of unseen texts." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing, listening and the speaking component, drilled separately." },
    { name: "IGCSE Geography, History & Literature", levels: "0460 / 0470 / 0475", description: "Named case studies, source inference and essay structure under exam timing." },
  ],

  regionsTitle: "Gurgaon areas and corridors where our IB and IGCSE home tutors travel",
  regionsIntro:
    "Where you live in Gurgaon decides which tutors can realistically reach you on a school night. We plan home sessions around corridors, not pin codes: a tutor based on Sohna Road can cover Nirvana Country and South City 2 comfortably but should not be booked for Palam Vihar at 6 pm. For each area below, we look at the school catchment, the evening traffic pattern and whether online or hybrid sessions will serve your child better.",
  regions: [
    { name: "Golf Course Road", note: "DLF Phase 5, Sectors 42-54 and societies like The Aralias and The Magnolias. Heavy IB DP demand; evening traffic makes 5 pm slots easier than 7 pm." },
    { name: "Golf Course Extension Road", note: "Sectors 56-65 and newer towers like M3M Golf Estate and Ireo Grand Arch. Strong IB and IGCSE demand; gate and lift time matters when planning home slots." },
    { name: "DLF Phases 1-5", note: "Central DLF city with quick access to MG Road and Cyber City. Home visits are practical for most tutors on the central corridor." },
    { name: "Sushant Lok 1, 2 and 3", note: "Central residential blocks near Huda City Centre and Golf Course Road, convenient for tutors based across central Gurugram." },
    { name: "South City 1 and 2", note: "Central and Sohna Road-facing pockets with a mix of IGCSE and CBSE-to-IB switchers." },
    { name: "Sohna Road", note: "Sectors 47-50 and 65-68, Vatika City, Tata Primanti and Orchid Petals. A large school belt where hybrid schedules work well around traffic." },
    { name: "Nirvana Country", note: "Sectors 50 and 51, close to Sohna Road schools; home sessions are straightforward for tutors on the southern corridor." },
    { name: "MG Road and Sikanderpur", note: "Metro-connected corridor linking DLF Phases 1-2 with central Gurugram, useful for tutors who commute by metro." },
    { name: "Cyber City and Udyog Vihar", note: "Business districts beside DLF Phase 2 and 3 residences; weekday evening traffic pushes many families to online or weekend slots." },
    { name: "New Gurgaon", note: "Sectors 76-95 along NH-48. Newer societies, longer tutor travel; hybrid with one home and one online session is common." },
    { name: "Dwarka Expressway", note: "Sectors 99-113 and societies like Sobha City and Godrej Summit. Fast-growing IGCSE and IB demand with limited local tutor supply." },
    { name: "Palam Vihar", note: "Western Gurugram near Carterpuri and Sector 22-23; realistic mainly for tutors based on the west side." },
    { name: "Southern Peripheral Road", note: "SPR linking Golf Course Extension Road to Sohna Road; good access for tutors on the southern belt." },
    { name: "Ardee City and Wazirabad", note: "Sector 52 pockets beside Golf Course Road, convenient for tutors covering the Golf Course corridor." },
    { name: "Rosewood City and Uppal Southend", note: "Sector 49-50 residential townships on Sohna Road, close to several school campuses." },
    { name: "Palm Springs, Malibu Towne and Mayfield Garden", note: "Established residential pockets where families often want one fixed weekly home slot plus online revision." },
    { name: "Old Gurgaon and Civil Lines", note: "Older city centre around Sector 14 and Rajiv Chowk; tutors from the central corridor can usually reach it." },
    { name: "Manesar and Badshahpur", note: "Outer belts where home tutor supply is thinner; online sessions with an in-person start are often the better plan." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring platform. Schools are named only to describe the school catchments Gurgaon families study in. We are not affiliated with, endorsed by, partnered with or representing any school named here, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Golf Course Road and Aravali belt",
      note: "Families along Golf Course Road, DLF Phase 5 and the Aravali side often study at or near these campuses, and tutor requests follow their DP and IGCSE calendars.",
      schools: ["Pathways World School", "The Shri Ram School, Aravali", "Heritage Xperiential Learning School", "The Ardee School"],
    },
    {
      city: "Central Gurugram and DLF phases",
      note: "The central DLF and MG Road corridor draws students from several international and IGCSE-offering schools within a short drive.",
      schools: ["Lancers International School", "Scottish High International School", "Amity International School"],
    },
    {
      city: "Sohna Road and southern sectors",
      note: "Sohna Road, Nirvana Country and Sectors 45-50 sit inside a large school belt, with many CBSE-to-IGCSE and IGCSE-to-IB switchers.",
      schools: ["GD Goenka World School", "Delhi Public School Sector 45", "Suncity School", "Matrikiran High School", "Presidium School"],
    },
    {
      city: "New Gurgaon, Dwarka Expressway and NH-48",
      note: "Newer sectors along NH-48 and the Dwarka Expressway are growing fast, and families here often combine home and online tutoring.",
      schools: ["DPS International Edge", "Excelsior American School", "Kunskapsskolan School", "Salwan Public School"],
    },
  ],

  modesIntro:
    "Every Gurgaon family we work with ends up choosing between three formats, and the right answer depends on the subject, the level and how far the tutor has to travel. Home tuition suits handwritten maths, science practical write-ups and younger students. Online suits syllabus-specialist tutors who cannot reach your sector at 6 pm. Hybrid gives most families the best of both through the exam year. You can switch as the term changes.",
  modes: [
    {
      title: "Home tuition in your society",
      description:
        "A tutor comes to your home in Gurgaon at a fixed weekly slot. Best for younger students, handwritten maths and science working, and families who want to see the lesson happen.",
      bullets: [
        "Matched to tutors who can reach your corridor on school nights",
        "Works best for PYP, MYP and IGCSE maths and sciences",
        "Parents can sit in on the first sessions",
        "Travel reality checked before we confirm a slot",
      ],
    },
    {
      title: "Online IB and IGCSE tutoring",
      description:
        "Live one-to-one lessons over video with a shared whiteboard and saved notes. The widest choice of subject specialists, and no Gurgaon traffic on either side.",
      bullets: [
        "Access to HL and niche-subject specialists anywhere in Gurugram",
        "Easier to add a second weekly slot before mocks",
        "Screen-shared GDC and past-paper walkthroughs",
        "No cancellations for rain, traffic or late school buses",
      ],
    },
    {
      title: "Hybrid: home and online together",
      description:
        "One home session a week plus one online session, with the same tutor. The most common choice for IB DP and IGCSE students in their exam year.",
      bullets: [
        "In-person for handwritten problem solving and feedback",
        "Online for past papers, IA check-ins and doubt-solving",
        "Keeps continuity through exam season and school holidays",
        "Easy to shift the balance as deadlines change",
      ],
    },
  ],

  sections: [
    {
      heading: "How do you find a good IB home tutor in Gurgaon?",
      paragraphs: [
        "Start with the exact course, not the board. A good IB home tutor in Gurgaon is someone who has taught your child's subject at the right level (Maths AA HL, Physics SL, English A Language and Literature), knows the current assessment model and Internal Assessment criteria, and can reach your area at a time that fits the school day. A tutor who is excellent at IB Chemistry is not automatically right for MYP Sciences or IGCSE Chemistry 0620.",
        "Ask three questions before booking anyone. Which IB subjects and levels have you taught in the last two years? What does your first session with a new DP student cover? How do you handle the Internal Assessment without writing it? The answers separate subject specialists from general tutors quickly, and they tell you whether the tutor understands that IAs and the Extended Essay must stay the student's own work.",
        "Then check the practicalities that decide whether tutoring survives until May. Can the tutor reach Golf Course Extension Road or Sohna Road on a weekday evening, or will sessions start slipping by November? Is there an online fallback when traffic or a school event intervenes? Does the tutor send a short note after each session so you know what was covered and what comes next?",
        "IB Gram runs these checks for you. We look at a tutor's teaching background, subject depth and level, and the corridors they can realistically cover, then shortlist tutors for a free trial class. After the trial you decide, and if the fit is wrong we find another tutor rather than asking you to persist.",
      ],
      bullets: [
        "Match on subject and HL or SL level, not just 'IB'",
        "Ask how the tutor supports IAs without writing them",
        "Confirm travel to your corridor on school nights",
        "Use the free trial class to judge explanation style",
      ],
    },
    {
      heading: "IB Diploma subject choices, HL and SL, and what tutoring should target",
      paragraphs: [
        "The IB Diploma asks students to take six subjects, three at Higher Level and three at Standard Level, alongside Theory of Knowledge, the Extended Essay and the service element. In Gurgaon, the subject choices that most often lead families to a tutor are Maths Analysis and Approaches HL, Physics HL, Chemistry HL, Economics HL and English A. The HL versions add depth, Paper 3 in maths and sciences, and far less room for gaps in Grade 11.",
        "Tutoring should target the parts of each subject that cost marks, not re-teach the whole textbook. In Maths AA HL that is proof, calculus technique and unfamiliar Paper 3 problems. In Physics and Chemistry it is Paper 1 speed, extended responses and the Scientific Investigation. In Economics it is accurate diagrams and evaluation. In English A it is unseen textual analysis and the Individual Oral.",
        "Grade 11 is the best time to start. The first term of the Diploma sets habits for two years, and a student who is uncomfortable with HL maths notation in September is usually struggling by the first internal exam. Starting in Grade 12, a tutor can still help, but the work becomes triage: which topics will move the predicted grade before university applications, and which cannot be fixed in time.",
        "For families switching from CBSE or ICSE into the Diploma at a Gurgaon school, the gap is less about content and more about how questions are asked. IB papers reward explanation, application and command-term precision. A tutor who knows both systems can close that gap in weeks instead of letting it show up in the first set of predicted grades.",
      ],
      bullets: [
        "Three HL and three SL subjects, plus TOK and the EE",
        "HL adds Paper 3 in maths and sciences",
        "Grade 11 start avoids Grade 12 triage",
        "CBSE and ICSE switchers need command-term training",
      ],
    },
    {
      heading: "Internal Assessments, the Extended Essay and TOK: where tutoring helps and where it must stop",
      paragraphs: [
        "Internal Assessments carry around 20-30% of most IB Diploma subject grades, and they are marked against published criteria, which makes them one of the most controllable parts of the final result. A tutor can help a Gurgaon student choose a workable research question, understand what each criterion rewards, plan data collection, and read a draft critically. That support is legitimate and valuable.",
        "What a tutor must never do is write any part of an IA, the Extended Essay, the TOK essay or the TOK exhibition. The IB's academic integrity policy is explicit, and a student can lose the Diploma over it. IB Gram tutors decline requests to write or rewrite assessed work, and we tell families this at the start so there is no misunderstanding later.",
        "The Extended Essay is the component Gurgaon students most often leave too late. A 4,000-word essay needs a research question narrow enough to finish, sources the student can actually access, and time for the reflection sessions. A tutor's most useful contribution is usually in the first month: narrowing the question and setting a realistic timeline against the school's internal deadlines.",
        "Theory of Knowledge is different again. The exhibition asks students to connect three objects to a prompt, and the essay rewards genuine argument from more than one perspective. Tutoring here is conversation: testing whether an argument holds, finding counterclaims, and practising the precise language examiners reward, while every word submitted remains the student's own.",
      ],
      bullets: [
        "IAs are criteria-marked and highly controllable",
        "Tutors guide research questions and read drafts critically",
        "No tutor writes assessed work, ever",
        "EE and TOK support is strongest early in the process",
      ],
    },
    {
      heading: "What is the difference between Cambridge and Edexcel IGCSE, and does it matter for tutoring?",
      paragraphs: [
        "Yes, it matters. Cambridge Assessment International Education and Pearson Edexcel both award the IGCSE, but they use different syllabus codes, question styles, tiers and exam series. Cambridge uses Core and Extended tiers and sits exams in May-June and October-November; Edexcel uses Foundation and Higher tiers and sits in January and May-June. A tutor preparing a student for the wrong board wastes weeks.",
        "Most Gurgaon IGCSE schools follow Cambridge, so the most common requests are Mathematics 0580, Additional Mathematics 0606, Physics 0625, Chemistry 0620, Biology 0610, Economics 0455 and English First Language 0500. The tier decision is the one to get right early. A student entered for Core in Cambridge Maths cannot achieve the top grades, and that choice has consequences for IB Diploma entry afterwards.",
        "Edexcel students in Gurugram usually need a tutor who knows how Edexcel frames problem-solving questions, which differ in wording and mark allocation from Cambridge. The mathematics is similar; the exam technique is not. Past papers and mark schemes from the right board are the core of good IGCSE tutoring either way.",
        "For students who plan to take the IB Diploma after IGCSE, a good tutor looks ahead. Additional Mathematics 0606 is the strongest preparation for Maths AA HL, and Extended-tier sciences make DP Physics and Chemistry HL far less of a shock in Grade 11. We factor that plan into the match from the first conversation.",
      ],
      bullets: [
        "Cambridge: Core/Extended, May-June and October-November",
        "Edexcel: Foundation/Higher, January and May-June",
        "Tier choice affects grade ceiling and IB entry",
        "0606 Additional Maths is the best bridge to IB Maths AA HL",
      ],
    },
    {
      heading: "The Gurgaon IB and IGCSE calendar: when to start tutoring",
      paragraphs: [
        "Most Gurgaon international schools follow an April-to-March academic year, but the external exams follow the boards' calendars. IB Diploma exams sit in May, with results in early July; November is the retake session. Cambridge IGCSE sits May-June and October-November, and Edexcel IGCSE sits January and May-June. Tutoring works best when it is planned backwards from those dates.",
        "For IB Diploma students, the pressure points are the first internal exams in Grade 11, IA deadlines through Grade 12, predicted grades in the autumn of Grade 12 for university applications, and mock exams before the May session. Starting tutoring in April or July of Grade 11 gives time to fix foundations before any of those land.",
        "For IGCSE students, the key windows are the start of Grade 9, the tier decision and school mocks in Grade 10, and the six to eight weeks before the external series. Families who begin in January of Grade 10 for a May-June exam can still make real progress, but the plan shifts to past papers and targeted topics.",
        "Summer and winter breaks are underused in Gurgaon. A few focused sessions in June or December, when school pressure is lower and traffic is lighter, often do more for a struggling subject than the same number of sessions squeezed in during exam season.",
      ],
      bullets: [
        "IB DP: May exams, November retakes",
        "Cambridge IGCSE: May-June and October-November",
        "Edexcel IGCSE: January and May-June",
        "Grade 11 and Grade 9 starts give the most room",
      ],
    },
    {
      heading: "How much does an IB or IGCSE home tutor in Gurgaon cost?",
      paragraphs: [
        "The cost of an IB or IGCSE home tutor in Gurgaon depends on the programme and level, the subject, the session length, whether lessons are at home or online, and the tutor's experience. IB Diploma HL subjects generally cost more than MYP or IGCSE Core support, and home visits that involve long travel cost more than online sessions. We share the fee for your specific match before the trial, with no hidden charges.",
        "Value matters more than the hourly figure. An hour with a tutor who knows the Maths AA HL Paper 3 style or the IGCSE 0620 alternative-to-practical paper does more than two hours with a general tutor re-teaching the textbook. Ask what a session will actually cover, how progress is tracked, and how often you will get an update.",
        "Online and hybrid sessions are often the more economical choice in Gurgaon, because travel time is not part of the cost and specialists across Gurugram become available. Many families use one home session for hands-on work and one online session for past papers and doubt-solving.",
        "We do not ask for long contracts. Engagements are reviewed every few weeks, and you can pause or stop without penalty. If a tutor is not the right fit after the trial, we look for another one instead of locking you in.",
      ],
      bullets: [
        "Fee depends on programme, level, subject and mode",
        "Fee confirmed for your match before the trial",
        "Online and hybrid often cost less than long home visits",
        "No long contracts; pause or stop anytime",
      ],
    },
    {
      heading: "How IB Gram matches an IB or IGCSE tutor to a Gurgaon family",
      paragraphs: [
        "Matching starts with a short brief: programme and board, subject and level, current grade or predicted grade, the school's exam session, the specific worry (a topic, an IA, mocks, a board switch), your area in Gurgaon and the times that work. That brief matters more than any profile photo, because it is what separates a suitable tutor from a merely available one.",
        "We then shortlist tutors on syllabus fit first and travel fit second. A tutor who has taught IB Physics HL recently and can reach DLF Phase 5 after school ranks above a general science tutor who lives nearby. Where the best subject match cannot reach your society, we tell you and propose online or hybrid sessions with that tutor.",
        "Tutors are checked on qualifications, teaching background and subject depth before they are introduced. The free trial class is where you and your child judge the rest: how clearly the tutor explains, whether they ask the right diagnostic questions, and whether your child is comfortable asking for help.",
        "After the trial, the tutor sets out a short plan for the first month: topics, session rhythm and how progress will be reported. You approve it or ask for changes. If the fit is wrong at any point, we re-match rather than asking your child to adjust to the wrong tutor.",
      ],
      bullets: [
        "Brief covers board, subject, level, session and area",
        "Syllabus fit first, travel fit second",
        "Tutors checked before introduction",
        "Written first-month plan after the free trial",
      ],
    },
    {
      heading: "Home, online or hybrid: which works best for IB and IGCSE students in Gurgaon?",
      paragraphs: [
        "Home tuition works best in Gurgaon for younger students, for handwritten maths and science working, and for families who want to see the lesson happen. It works less well when the right subject specialist is 40 minutes away in evening traffic, because cancelled or late sessions quietly erode progress by the middle of the term.",
        "Online tutoring works best for IB Diploma HL subjects, niche subjects and exam-season revision. It widens the choice of tutor to all of Gurugram, removes travel from both sides, and makes it easy to add a second slot before mocks. It works less well for students who are easily distracted on screen or who need close supervision of written work.",
        "Hybrid is the most common choice among IB DP and IGCSE families in their exam year: one home session a week for hands-on problem solving and feedback, and one online session for past papers, IA check-ins and doubt-solving, with the same tutor. It keeps continuity through school holidays, travel and bad-traffic weeks.",
        "The practical rule we use is simple. If the best-matched tutor can reach you reliably on school nights, start at home. If not, start online with that tutor and add home sessions where they help most. Changing the mix later is easy; recovering from a wrong subject match is not.",
      ],
      bullets: [
        "Home: younger students and handwritten working",
        "Online: HL specialists, niche subjects, exam revision",
        "Hybrid: the usual choice in the exam year",
        "Pick the tutor first, then the mode",
      ],
    },
    {
      heading: "Switching from CBSE or ICSE to IB or IGCSE in Gurgaon",
      paragraphs: [
        "Gurgaon has more mid-school board switches than most Indian cities: CBSE or ICSE students moving into IGCSE in Grade 9, or into the IB Diploma in Grade 11. The content gap is usually smaller than families expect. The real gap is in how questions are asked, how answers are marked and how much independent work the new programme assumes.",
        "IGCSE and IB papers reward explanation and application over recall. A CBSE student who is strong at solving textbook problems can still lose marks on IGCSE Extended or IB Paper 2 questions that change the context or ask them to justify a method. Command words such as 'explain', 'evaluate', 'show that' and 'hence' carry specific expectations that need to be taught explicitly.",
        "Coursework and internal assessment are also new for many switchers. IB Internal Assessments and IGCSE coursework components need planning skills that board-exam preparation rarely builds. A tutor who has worked with switchers can introduce those habits in the first term, before they affect grades.",
        "The best time to get help is the summer before the switch or the first term after it. A few weeks of bridging work on maths notation, scientific writing and extended responses usually prevents the first-term dip that otherwise shows up in reports.",
      ],
      bullets: [
        "Content gaps are smaller than the question-style gap",
        "Command words need explicit teaching",
        "IAs and coursework need new planning habits",
        "Summer-before or first-term bridging works best",
      ],
    },
    {
      heading: "IB and IGCSE to university: planning from Gurgaon",
      paragraphs: [
        "Most Gurgaon IB Diploma students apply to universities in the UK, the US, Canada, Europe, Singapore or India, and each system reads IB and IGCSE results differently. UK offers are usually stated in total IB points with HL subject minimums; US admissions weigh predicted grades and the whole profile; Indian universities have their own equivalence rules. Subject choices in Grade 11 need to match those requirements.",
        "Predicted grades matter more than many families realise, because they are what universities see when applications go in during Grade 12. That makes the Grade 11 and early Grade 12 internal assessments and exams the real target for tutoring, not only the final May session.",
        "For IGCSE students, the subject and tier choices in Grades 9 and 10 set up the Diploma subjects that are possible in Grade 11. Additional Mathematics, Extended-tier sciences and strong English open doors to HL maths and sciences later.",
        "IB Gram tutors focus on the academic side of this plan: subject preparation, predicted-grade improvement and exam technique. We are happy to tell you which subjects and levels your target courses usually expect, so the tutoring effort lands where it counts.",
      ],
      bullets: [
        "UK offers state IB points and HL minimums",
        "Predicted grades drive Grade 12 applications",
        "IGCSE tier choices shape DP subject options",
        "Tutoring targets the grades universities actually see",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge or Edexcel IGCSE for Gurgaon families. Every match weighs the exact syllabus and level, the exam session, and whether the tutor can reach your part of Gurugram at home or should teach online.",

  process: [
    { title: "Share your brief", description: "Tell us the programme or board, subject and level, current or predicted grade, your Gurgaon area and the times that work." },
    { title: "Get a shortlist", description: "We match tutors on syllabus fit first and travel fit second, and explain why each one suits your child." },
    { title: "Take a free trial class", description: "Your child meets the tutor on a real topic at home or online, with no charge and no commitment." },
    { title: "Agree the first-month plan", description: "The tutor sets out topics, session rhythm and how progress will be reported; you approve or adjust it." },
    { title: "Start regular sessions", description: "Home, online or hybrid, at fixed weekly slots planned around school timings and exam dates." },
    { title: "Review every few weeks", description: "We check progress with you, adjust the plan before mocks and deadlines, and re-match if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Syllabus-specific matching", description: "Tutors are matched on the exact IB subject and HL or SL level, or IGCSE board, code and tier, not a general 'IB tutor' label." },
    { title: "Travel reality in Gurgaon", description: "We only promise home sessions a tutor can reliably reach on school nights, and offer online or hybrid when that is better." },
    { title: "Free trial before commitment", description: "Your child meets the tutor on a real topic first, so you decide on evidence rather than a profile." },
    { title: "Academic integrity built in", description: "Tutors guide IAs, coursework, the EE and TOK but never write assessed work, which protects the Diploma." },
    { title: "Clear progress updates", description: "Short notes after sessions and a review every few weeks, so you always know what was covered and what comes next." },
    { title: "Independent and flexible", description: "No school or exam-board ties, no long contracts, and re-matching whenever the fit is wrong." },
  ],

  faqs: [
    {
      question: "How do I find an IB home tutor in Gurgaon?",
      answer:
        "Share your child's IB programme, subject, level and area with IB Gram, and we shortlist tutors who teach that exact course and can reach you. We match on the specific subject and HL or SL level first, then on whether the tutor can travel to your sector or society on school nights. You then take a free trial class at home or online before deciding, and if the fit is wrong we suggest another tutor.",
    },
    {
      question: "Do you provide IGCSE home tutors in Gurgaon for Cambridge and Edexcel?",
      answer:
        "Yes, we match IGCSE home tutors in Gurgaon for both Cambridge and Pearson Edexcel. Cambridge students are matched by syllabus code and tier, such as Mathematics 0580 Extended or Chemistry 0620, and Edexcel students by specification and Foundation or Higher tier. Tutors work from the right board's past papers and mark schemes, because question styles and exam series differ between the two boards.",
    },
    {
      question: "What does an IB or IGCSE home tutor in Gurgaon cost?",
      answer:
        "The fee depends on the programme and level, the subject, session length, home or online mode, and the tutor's experience, and we share it for your specific match before the trial. IB Diploma HL subjects usually cost more than MYP or IGCSE Core support, and long home journeys cost more than online sessions. There are no long contracts, and you can pause or stop anytime.",
    },
    {
      question: "Which areas of Gurgaon do your home tutors cover?",
      answer:
        "Our tutors cover Gurugram's main residential corridors, including Golf Course Road, Golf Course Extension Road, DLF Phases 1-5, Sushant Lok, South City, Sohna Road, Nirvana Country, MG Road, New Gurgaon, the Dwarka Expressway sectors and Palam Vihar. For each family we check which tutors can realistically reach the area on school nights. Where travel is unreliable, we offer online or hybrid sessions with the same tutor.",
    },
    {
      question: "Is there a free trial class before I commit?",
      answer:
        "Yes, every match starts with a free trial class. Your child works through a real topic from their syllabus with the tutor, at home or online, and there is no charge and no obligation to continue. After the trial the tutor shares a short first-month plan, and you decide whether to go ahead, ask for changes or try a different tutor.",
    },
    {
      question: "Can a tutor help with IB Internal Assessments and the Extended Essay?",
      answer:
        "Yes, tutors can guide IAs and the Extended Essay, but they never write any part of them. Legitimate help includes choosing a workable research question, explaining the assessment criteria, planning data collection and giving critical feedback on drafts. Writing or rewriting assessed work breaches the IB's academic integrity rules and can cost a student the Diploma, so IB Gram tutors decline those requests.",
    },
    {
      question: "Which IB Diploma subjects can you help with in Gurgaon?",
      answer:
        "We match tutors for all major IB Diploma subject groups in Gurgaon. The most requested are Maths Analysis and Approaches and Applications and Interpretation at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science and Psychology. We also support ESS, Geography, History, French, Spanish and Hindi B, Theory of Knowledge and the Extended Essay.",
    },
    {
      question: "Do you tutor IB MYP and PYP students as well as the Diploma?",
      answer:
        "Yes, we tutor across the IB continuum, not only the Diploma. MYP support focuses on criteria A-D in sciences, maths and Language and Literature, and on the Personal Project process journal. PYP support covers reading, writing, number sense and research skills for units of inquiry and the Exhibition. Younger students usually do best with short, regular home sessions.",
    },
    {
      question: "Is online IB or IGCSE tutoring as effective as home tuition in Gurgaon?",
      answer:
        "Online tutoring can be just as effective for most IB and IGCSE students, especially for Diploma HL subjects and exam revision. It gives access to subject specialists anywhere in Gurugram and removes traffic from the equation. Home tuition is better for younger students and for handwritten maths and science working. Many Gurgaon families use hybrid: one home session and one online session a week with the same tutor.",
    },
    {
      question: "How are IB Gram tutors verified?",
      answer:
        "Tutors are checked on qualifications, teaching background and subject depth before they are introduced to any family. We look at which IB subjects and levels, or IGCSE boards and tiers, they have taught recently and how they approach assessment criteria. The free trial class then lets you judge explanation style and fit directly. If a tutor is not right for your child, we re-match.",
    },
    {
      question: "When should my child start IB or IGCSE tutoring?",
      answer:
        "The best time is the start of the course: Grade 11 for the IB Diploma and Grade 9 for IGCSE. Starting early leaves time to fix foundations before internal exams, IA deadlines and predicted grades. Families who start in the final year can still make real progress, but tutoring then focuses on the highest-value topics and past papers before the May or October-November session.",
    },
    {
      question: "My child is switching from CBSE to IB or IGCSE. Can a tutor help?",
      answer:
        "Yes, board switchers are one of the most common requests we get in Gurgaon. The biggest gap is usually question style, not content: IB and IGCSE papers reward explanation, application and precise command-word answers. A tutor who knows both systems builds those habits, introduces coursework and IA planning, and works on maths notation and scientific writing, ideally in the summer before the switch or the first term after it.",
    },
    {
      question: "Can sessions happen on weekends or after school hours?",
      answer:
        "Yes, most Gurgaon families book weekday slots after school and weekend mornings. We plan times around school timings, activities and evening traffic in your corridor, so a home session is only confirmed where the tutor can arrive reliably. Online sessions give more flexibility for late evenings and for a second weekly slot before mocks or deadlines.",
    },
    {
      question: "What happens if we are not happy with the tutor?",
      answer:
        "If the tutor is not the right fit, tell us and we will find another one. We review progress with families every few weeks and re-match whenever the fit is wrong, instead of asking your child to persist with a tutor who is not working. There are no long contracts, so you can also pause or stop sessions without penalty.",
    },
    {
      question: "Can one tutor teach both IB and IGCSE subjects?",
      answer:
        "Some tutors can teach both, but we match on the specific course rather than assuming it. A tutor strong in IGCSE Mathematics 0580 and 0606 may also teach IB Maths AA SL, but IB HL maths and sciences usually need a Diploma specialist. For siblings on different programmes, we often match one tutor per programme so each child gets syllabus-specific support.",
    },
    {
      question: "Is IB Gram affiliated with any Gurgaon school or with the IB or Cambridge?",
      answer:
        "No, IB Gram is an independent tutoring platform. We are not affiliated with, endorsed by or representing any Gurgaon school, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. School names on this page describe the catchments families study in, and tutors work to each school's calendar and the board's published syllabus.",
    },
  ],

  internalLinks: [
    { label: "IB tutors in Gurugram", href: "/ib-tutors/gurugram/", description: "Programme and subject pages for IB tutoring across Gurugram." },
    { label: "IGCSE tutors in Gurugram", href: "/igcse-tutors/gurugram/", description: "Cambridge and Edexcel IGCSE tutor matching across Gurugram sectors and societies." },
    { label: "IGCSE in Gurugram", href: "/igcse-pages/gurugram/", description: "How IGCSE tutoring works for Gurugram families." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP works: HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, the Personal Project and eAssessment explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP units of inquiry and the Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series." },
    { label: "IB and IGCSE blog", href: "/blog/", description: "Study guides and advice for IB and IGCSE families." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial class." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor in Gurgaon",
  closingBody:
    "Tell us the programme or board, the subject and level, your child's current grade and your area in Gurgaon. You'll get back a shortlisted tutor, their teaching background and trial slots that fit your school week, at home, online or both, with no charge and no commitment. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",
};
