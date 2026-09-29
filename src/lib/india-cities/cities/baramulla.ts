import type { CitySeoPage } from "../types";

/**
 * /baramulla/ - IB and IGCSE tutoring page for Baramulla, Jammu and Kashmir. Online-only delivery:
 * tutors do not visit homes in Baramulla (in-person home tuition runs only in Gurugram and parts of
 * Delhi NCR). No IB or Cambridge / Edexcel school could be confirmed in the town, so stripSchools is
 * empty and the clusters point to Srinagar, Chandigarh and Gurugram. Geography, climate and boards only.
 */
export const baramulla: CitySeoPage = {
  slug: "baramulla",
  countryName: "Baramulla",
  countryNameLong: "Baramulla, Jammu and Kashmir",
  demonym: "Baramulla",
  flagCode: "in",
  countryCode: "IN",
  state: "Jammu and Kashmir",
  stateCode: "IN-JK",
  region: "Jammu and Kashmir, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings and weekends, with the schedule reshuffled around snowfall weeks and the winter school closure",
  lastUpdated: "2026-09-21",
  geo: { latitude: 34.209, longitude: 74.3429 },
  wikipedia: "https://en.wikipedia.org/wiki/Baramulla",
  alternateNames: ["Varmul", "Baramula", "Varahamula"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Baramulla | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE private tuition for Baramulla students, planned around Kashmir's winter break and connectivity, with subject specialists and a free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Baramulla",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION IN BARAMULLA",
  heroSubtitle:
    "Looking for home tuition in Baramulla for the IB or the Cambridge and Edexcel IGCSE? Lessons here run as private, one-to-one classes that your child attends from home over video, with an India-based subject tutor who works to the exact syllabus code. That suits a town on the Jhelum where no school we could confirm teaches either qualification, and where a snowed-in road should never mean a missed lesson.",
  primaryKeyword: "IB and IGCSE tutors in Baramulla",
  imageAltText: "Student in Baramulla working through an IB Chemistry problem with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Baramulla",
    "IGCSE tutor Baramulla",
    "IB home tuition Baramulla",
    "IGCSE home tuition Baramulla",
    "IB private tuition Baramulla",
    "IB online tuition Baramulla",
    "IGCSE online tuition Baramulla",
    "IB Maths tutor Baramulla",
    "IGCSE Maths tutor Baramulla",
    "IB Physics tutor Baramulla",
    "IB Chemistry tutor Baramulla",
    "IB Biology tutor Baramulla",
    "IB DP tutor Baramulla",
    "IB MYP tutor Baramulla",
    "IB PYP tutor Baramulla",
    "Cambridge IGCSE tutor Baramulla",
    "Edexcel IGCSE tutor Baramulla",
    "IB tutor Khanpora",
    "IB tutor Delina",
    "IGCSE tutor Kanispora",
    "IB tutor Varmul",
    "online IB tutor Kashmir Valley",
  ],

  heroTrustPoints: [
    "One tutor per subject, matched to the exact IB level or IGCSE syllabus code",
    "Live video classes that keep running when snow closes the roads",
    "A free first lesson and a written note after every session",
    "An independent service with no link to any school or examining body",
  ],
  heroStats: [
    { value: "IST", label: "Indian Standard Time, no time-zone gap" },
    { value: "PYP to DP", label: "IB stages covered, plus CP" },
    { value: "Free trial", label: "First lesson at no cost" },
    { value: "May & Nov", label: "Main IB and IGCSE exam windows" },
  ],

  intro: {
    heading: "Home tuition for the IB and IGCSE in a Kashmir Valley town",
    paragraphs: [
      "Baramulla sits at roughly 1,590 metres on the Jhelum, on the road and rail line that run west out of Srinagar. Its schools follow the state board, JKBOSE, or CBSE, and the town's private schools are the ones most families know by name. Neither the International Baccalaureate nor the Cambridge or Pearson Edexcel IGCSE is taught in a school here that we have been able to confirm, so a student who needs either syllabus has to look beyond the classroom down the road. That gap is what IB and IGCSE tutors in Baramulla are set up to fill.",
      "The families who ask usually fall into a small number of groups. A child may be boarding at an IB school in Dehradun, Chandigarh or the Delhi region and studying at home over the long winter holidays. A parent may work in the Gulf, or in a metro city, and expect the family to move within a couple of years. Others are enrolled in an accredited online international school and want a live teacher beside the recorded lessons. For each of them, private tuition from home, taught over video, is the only route that fits.",
      "We say plainly what the service is. Tutors do not travel to Baramulla or knock on your door; in-person home visits exist only in Gurugram and some parts of Delhi NCR. Every lesson is a live one-to-one class on a laptop, with a shared whiteboard, past papers on screen and a short written note afterwards. The tutor explains, questions and marks. The student writes their own Internal Assessment, Extended Essay, TOK essay and IGCSE coursework, without exception.",
      "IB Gram is independent. It is not part of the IB, Cambridge, Pearson or any school, and mentioning a school on this page is never a claim that the school teaches either programme.",
    ],
    bullets: [
      "Online private tuition for IB PYP, MYP, DP and CP",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended",
      "Timetables built around snowfall and the winter closure",
      "Suitable for boarders home on holiday and for full-time online learners",
      "Free trial lesson, then a written plan",
    ],
  },

  programmesIntro:
    "Since the town has no IB or IGCSE campus we could verify, most of the enquiries arriving from Baramulla come from students whose school sits elsewhere or online. Below is what each stage asks of a student and where a tutor typically earns their place for a family based in the Valley.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery-Class 5, ages 3-12",
      description:
        "Learning is organised around six transdisciplinary themes and finishes with a group Exhibition, so there are no formal papers to drill. Tutoring at this age is about fluent reading, comfortable number sense and the confidence to ask why something works.",
      countryNote:
        "PYP tutoring in Baramulla tends to prepare a younger child for entry to an IB school outside the Valley, or steadies a sibling who follows an online PYP timetable while an elder brother or sister boards.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is judged against four criteria, marked A to D, and the final year brings the Personal Project. The hardest habit to build is explaining a result rather than only stating it, which is where weekly feedback from a tutor pays back.",
      countryNote:
        "A Baramulla MYP student is very often studying at a school far from the Valley, so the tutor works to that school's pacing and picks up extra volume in the December to February holiday.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, plus TOK, the 4,000-word Extended Essay and CAS. Internal Assessments count for a sizeable slice of most subject grades, and final papers arrive in the May session, with a November session for some candidates.",
      countryNote:
        "DP learners linked to Baramulla are nearly always enrolled elsewhere; a steady weekly tutor for HL Maths, Chemistry or Physics keeps the thread unbroken across long travel gaps between home and campus.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three DP courses are paired with a career-related study, a reflective project and a personal and professional skills strand. It suits a student who wants an applied route without abandoning academic subjects.",
      countryNote:
        "Uncommon among families in the Valley and studied through a school elsewhere; tutoring supports the DP course components inside it.",
    },
  ],

  subjectsIntro:
    "Matching is done on the course and level, never on the word 'IB' alone. A Baramulla student following a school calendar set in another state needs a tutor who works to that school's internal deadlines and mock dates.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof for students aiming at engineering or pure science, with HL adding depth in Paper 3 investigations and a tutor guiding topic choice for the exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and technology-based problem solving for students headed to economics, psychology, business or life sciences, with regular graphing-calculator practice." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics, with the practical investigation planned early so the data-handling marks are not left to the last month." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, bonding, energetics, kinetics and organic reaction pathways, with stoichiometry drilled until calculations become automatic." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and human physiology, where precise command-term language decides many marks on the long answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Micro, macro and the global economy, with diagram accuracy and real-world examples trained together." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study analysis, finance calculations and the internal commercial-report style of the Internal Assessment." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming logic, data structures, networks and databases, with Java or Python practice on screen." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Textual analysis of literary and non-literary material, oral commentary technique and structured comparative writing." },
    { name: "IB Hindi A and Hindi B", levels: "HL / SL", description: "Literary analysis for Hindi A and language acquisition for Hindi B, useful for Kashmir families choosing a home-language route." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches to research, cognitive and sociocultural topics and the design of an ethical class experiment for the Internal Assessment." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation, essay planning across twentieth-century world history topics and a well-argued historical investigation." },
    { name: "Theory of Knowledge", levels: "Core", description: "Coaching for the exhibition and essay thinking, questioning knowledge claims; the tutor never writes any part of the assessed work." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE tutoring in Baramulla follows the syllabus code the student is registered for, since papers, command words and mark schemes differ between the boards even for subjects that share a name.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics, with tier selection reviewed early so a student is not stretched or held back." },
    { name: "IGCSE Additional Mathematics", levels: "Extended", description: "Calculus, functions and coordinate geometry as a bridge to A Level or IB Maths HL." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, electricity, thermal physics and waves, with structured practice on the alternative-to-practical paper." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Atomic structure, reactivity, the mole concept and organic chemistry, backed by planning-and-analysis questions." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, transport, inheritance and ecosystems, with diagram labelling and experimental design practised." },
    { name: "IGCSE English First Language", levels: "Extended", description: "Directed writing, narrative and descriptive composition and summary skills for confident readers." },
    { name: "IGCSE English as a Second Language", levels: "Core / Extended", description: "Reading, writing, listening and speaking components, well matched to students from Urdu, Kashmiri or Hindi-speaking homes." },
    { name: "IGCSE Computer Science", levels: "Extended", description: "Algorithms, pseudocode, data representation and a programming paper, with Python practised on screen." },
    { name: "IGCSE Economics", levels: "Extended", description: "Basic economic problems, markets, government policy and international trade, using short data-response answers." },
    { name: "IGCSE Hindi as a Second Language", levels: "Core / Extended", description: "Reading comprehension, letter and essay writing and grammar accuracy for students who use Hindi as an additional language." },
  ],

  regionsTitle: "Baramulla neighbourhoods we teach students from",
  regionsIntro:
    "Lessons never depend on where a family lives, since everything is online. Neighbourhood names help us plan the hour: school runs, evening prayer times and the way winter light and power cuts shape a household's day.",
  regions: [
    { name: "Khanpora", note: "A residential and market area on the town's edge; families here mostly rely on a CBSE or JKBOSE school run, so lessons fit best after evening return from school." },
    { name: "Delina", note: "Along the Srinagar-Baramulla road, popular with families who commute or have relatives in Srinagar; evening slots avoid the return traffic." },
    { name: "Kanispora", note: "A mixed neighbourhood close to the town centre, where students often attend nearby private schools and want afternoon flexibility." },
    { name: "Khawja Bagh", note: "An older settled locality near the river; households here often plan study around school hours and winter heating routines." },
    { name: "Azad Gunj", note: "Close to the main bazaar; a good spot for students to attend lessons quietly in the early evening, before shops and roads get busy." },
    { name: "Sheeri", note: "On the road towards Tangmarg and Gulmarg, where snow can close side lanes in winter; sessions stay online regardless of weather." },
    { name: "Bagh-e-Islam", note: "A residential belt where families increasingly ask for board-agnostic tutoring alongside the regular school day." },
    { name: "Old Town Baramulla", note: "The historic core beside the Jhelum bridges; connectivity can vary, so a wired backup and written session notes help." },
    { name: "Palhallan and the Pattan side", note: "Villages and small towns along the highway towards Srinagar; families here weigh a boarding place elsewhere and start with online tuition." },
  ],

  schoolClusters: [
    {
      city: "Baramulla itself",
      note: "Schools in the town follow JKBOSE or CBSE, and we have not been able to confirm a school teaching the IB or Cambridge / Edexcel IGCSE. Local options are limited, so students who want either qualification study online or elsewhere.",
      schools: [],
    },
    {
      city: "Nearby: Srinagar",
      note: "About 55 kilometres away and the natural first place a Baramulla family looks. We have not been able to confirm an IB or IGCSE school there either, so enquirers should check the current school lists on ibo.org and cambridgeinternational.org before travelling.",
      schools: [],
    },
    {
      city: "Nearby: Chandigarh region",
      note: "The closest large city with confirmed IB and Cambridge schools, reached by road, rail or a short flight from Srinagar. Some Kashmir families consider boarding here for Class 11 and 12.",
      schools: ["Strawberry Fields High School, Chandigarh (IB)", "Oakridge International School, Mohali (IB and Cambridge IGCSE)"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "A flight from Srinagar and home to a wide range of IB World Schools; the only place where IB Gram itself teaches at students' homes, in Gurugram and some parts of Delhi NCR.",
      schools: ["Pathways World School, Aravali (IB)"],
    },
  ],
  schoolDisclaimer:
    "Any school named on this page is mentioned only to show the wider landscape families weigh, never as an endorsement or a partnership. IB Gram is an independent tutoring service with no affiliation to the International Baccalaureate Organization, Cambridge University Press and Assessment, Pearson Edexcel or any school, and school lists should always be checked with the official bodies.",

  tutorsIntro:
    "Tutors are based across India, teach on IST and are chosen for a specific subject and level. Baramulla families are matched to a teacher who has taught that exact syllabus, and a first trial lesson shows whether the fit is right.",

  modesIntro:
    "Three online formats cover almost every Baramulla household. None involves a tutor arriving at the door; home visits run only in Gurugram and parts of Delhi NCR, so the choice here is about pace, weather and how the family's week is arranged.",
  modes: [
    {
      title: "Weekly online private lessons",
      description:
        "One student, one tutor, one hour on video with a shared whiteboard and past papers on screen. This is the default and it carries most families through term time.",
      bullets: [
        "Fixed weekly slot the student can plan around",
        "Notes sent after each lesson covering topics and homework",
        "Works with any school or online provider",
        "Tutor can be changed if the fit is wrong",
      ],
    },
    {
      title: "Winter-closure intensive blocks",
      description:
        "When schools in the Valley are shut for the cold months, a boarder home on holiday or a full-time online learner can take a compact run of lessons on the hardest topics.",
      bullets: [
        "Two to four sessions a week during the closure",
        "Focused on mock-exam gaps and unfinished topics",
        "Recap plan for the return to campus",
        "Extra sessions before the spring internal exams",
      ],
    },
    {
      title: "Exam-season revision lessons",
      description:
        "Timed past-paper work and mark-scheme reading in the weeks before the May and November series, with each paper reviewed line by line in the following session.",
      bullets: [
        "Papers set at the right tier and level",
        "Command-word practice and answer structure",
        "Weak-topic tracker updated weekly",
        "Calm, low-pressure rehearsal routine",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE families live in and around Baramulla?",
      paragraphs: [
        "The families asking about IB and IGCSE tuition in Baramulla are few in number and varied in circumstance. Many run orchards or wholesale fruit businesses, some are doctors or engineers posted at the medical college or in government service, and others have relatives who work in the Gulf, Delhi or overseas. What they share is a plan for a child that may not end inside the Valley.",
        "None of them can walk to an IB or Cambridge classroom, so the qualification is reached in other ways: a boarding school in another city, an online international school, or a private-candidate route where a student sits the external papers with tuition as the main teaching. The tutor's job is different in each case, and a good first conversation works out which of the three applies before choosing a syllabus or a weekly slot.",
        "Some parents are simply preparing. A child in Class 6 or 7 may be moved to an IB school in another city for Class 9 or 11, and a year of tuition beforehand smooths the change in teaching style, from the note-based methods common in state and CBSE classrooms to the inquiry and explanation-heavy expectations of the IB.",
        "If you belong to a Baramulla family in any of these positions, the practical next step is a short conversation about the child's current school, the target programme and the calendar, followed by a free trial lesson.",
      ],
      bullets: [
        "Boarders at IB schools elsewhere, home for the long winter break",
        "Online international school students wanting a live teacher",
        "Families planning a move and preparing a child in advance",
        "Private candidates sitting IGCSE papers through an exam centre",
      ],
    },
    {
      heading: "JKBOSE, CBSE, IB or IGCSE: which board fits a Baramulla student?",
      paragraphs: [
        "For most of the town's children, JKBOSE or CBSE is the simplest route: both are widely recognised in India, both lead directly to national entrance tests, and both are taught in schools within reach of home. The IB and IGCSE become worth considering when a family expects to leave the region, wants internationally portable results, or prefers coursework and discussion over heavy memorisation.",
        "The table below summarises the differences that matter to a family living here, not a national comparison of syllabi. It assumes no local IB or IGCSE campus, so the practical question is whether the extra step of moving to another city or studying online is worth what the qualification offers.",
        "There is no single right answer, and switching boards midway is harder than it looks. A student moving from JKBOSE or CBSE into IB DP in Class 11 usually needs a bridge year of tuition to cope with English-language essays, internal assessments and the shift to conceptual questions.",
      ],
      table: {
        caption: "Boards compared for a Baramulla family",
        columns: ["Board", "Available locally", "Assessment style", "Best matched to"],
        rows: [
          ["JKBOSE", "Yes, in most schools", "Board exams with a state-set calendar", "Students staying in Jammu and Kashmir for higher study"],
          ["CBSE", "Yes, in private and central schools", "Class 10 and 12 board exams; national entrance alignment", "Families aiming at JEE, NEET or CUET-UG from the town"],
          ["IB Diploma", "Not confirmed locally", "Six subjects, internal assessments, core components, May session", "Students planning study abroad or a move to a metro city"],
          ["Cambridge / Edexcel IGCSE", "Not confirmed locally", "Externally marked papers, Core or Extended tier", "Students preparing for A Level, IB DP or an international school"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a family in Baramulla?",
      paragraphs: [
        "Nothing about the rate is fixed by the town you live in. We do not publish price lists because the fee depends on the tutor's experience, the programme and level, how many lessons a week you book and how close the exam session is. The quote is given in writing before you commit, and the first trial lesson is free.",
        "The biggest driver is subject depth. An HL Physics or IB Maths AA tutor with examiner-level knowledge costs more than a tutor supporting MYP Humanities, and Extended IGCSE Additional Mathematics sits above Core English. Frequency matters as well: two lessons a week in the run-up to May costs more than one weekly lesson through winter.",
        "Families should weigh the total cost against the alternatives they are actually comparing. A boarding change, relocation or an online school's fee is usually much higher than a year of weekly tuition, and tuition is the part a family can adjust week by week when circumstances change.",
        "A practical way to keep spending sensible is to book a small block first, review the tutor's notes after four or five lessons and only then extend. There is no lock-in, and a mismatch can be fixed by changing tutor.",
      ],
      bullets: [
        "Tutor experience and examiner background",
        "Programme, level and syllabus tier",
        "Lessons per week and length of the block",
        "Proximity to exam sessions and internal deadlines",
      ],
    },
    {
      heading: "Online home tuition, coaching centre, private tutor or self-study?",
      paragraphs: [
        "A family in Baramulla has four realistic ways to get help with an IB or IGCSE syllabus. Local coaching centres are strong for JEE, NEET and board exams, but rarely staff a teacher who has taught the IB Diploma's Internal Assessment or the IGCSE's alternative-to-practical paper. A private tutor from the town may be excellent in maths but seldom covers Chemistry, Economics and English in one household.",
        "Self-study with past papers is possible for a disciplined student, though it leaves gaps that only feedback exposes, particularly in extended writing and in criterion-based marking. Online one-to-one tuition puts a specialist on the screen at a fixed hour and does not depend on the road being open.",
        "The comparison below is deliberately practical and assumes the constraints of a Valley town: weather, a smaller pool of teachers and limited evening travel.",
      ],
      table: {
        caption: "Four ways to study IB or IGCSE from Baramulla",
        columns: ["Option", "Subject range", "Weather-proof", "Syllabus-specific feedback"],
        rows: [
          ["Online one-to-one tuition", "Every IB and IGCSE subject", "Yes, needs only a connection", "Yes, marked to the exact mark scheme"],
          ["Local coaching centre", "Mostly maths and sciences for board and entrance exams", "Partly, classes may be cancelled in heavy snow", "Limited for IB and IGCSE"],
          ["Private tutor in town", "Depends on the individual", "Partly, travel is the weak point", "Varies widely"],
          ["Self-study with past papers", "Any, if the student is disciplined", "Yes", "None without a teacher to mark"],
        ],
      },
    },
    {
      heading: "How do Kashmir's seasons and the exam calendar shape study?",
      paragraphs: [
        "Baramulla's calendar has a rhythm of its own. Winters are cold, with snow on higher ground and occasional heavy falls in town, and schools in the Valley have historically taken a long winter break. JKBOSE has adjusted its session dates in recent years, so families should always confirm the current circular rather than rely on last year's pattern.",
        "IB and IGCSE calendars are set elsewhere. The IB Diploma written papers run in May, with a November session for some students, and IGCSE papers fall in the May-June and October-November series. A boarder home in December therefore has a chance to catch up before the spring rush.",
        "Practical planning matters here. Sessions are booked for the same time each week, notes are written after every class so a lost connection costs little, and a final term is built around what the school's mocks reveal.",
      ],
      table: {
        caption: "An outline year for an IB or IGCSE student linked to Baramulla",
        columns: ["Period", "What is happening", "Tuition focus"],
        rows: [
          ["March to June", "Spring and early summer, the orchard season begins", "Steady weekly lessons; May written papers for sitting candidates"],
          ["July to September", "Pleasant weather, school terms under way", "Internal assessment drafts, topic consolidation"],
          ["October to November", "Autumn, apple harvest, November exam series", "Past-paper practice, resit preparation"],
          ["December to February", "Cold months, possible snow, winter school closure", "Intensive blocks, catch-up and mock preparation"],
        ],
      },
    },
    {
      heading: "Where can a Baramulla student go after IB or IGCSE?",
      paragraphs: [
        "Students who finish the IB Diploma or the IGCSE followed by A Level have options in three directions. Within India, the IB Diploma is recognised through equivalence by the Association of Indian Universities, and many universities accept it for admission directly. Central-university applicants sit CUET-UG, and IB students who want medicine or engineering must check the eligibility rules of NEET and JEE separately, since those exams have their own subject and age criteria.",
        "Within Jammu and Kashmir, the University of Kashmir, NIT Srinagar and the medical and agricultural institutions in Srinagar draw students from Baramulla. Admissions to those institutions run through their own tests and quotas, and an IB or IGCSE candidate should confirm how the equivalent qualification is treated before choosing subjects.",
        "Abroad, the IB Diploma travels well. Universities in the UK, the United States, Canada, Australia and Europe read it directly, and IGCSE with A Level is equally familiar. Predicted grades, subject combinations and entrance tests such as the SAT or UCAT matter, and the tutor's role is subject depth and exam technique, never writing personal statements or coursework.",
      ],
      bullets: [
        "Indian universities via AIU equivalence and CUET-UG",
        "NEET and JEE eligibility checked separately for each student",
        "Srinagar institutions with their own admission routes",
        "Study abroad with IB Diploma or IGCSE plus A Level",
      ],
    },
    {
      heading: "How are IB Maths and the sciences taught online?",
      paragraphs: [
        "IB Maths AA is a proof-driven course, and AI is applied and technology-heavy. The choice between them should follow the student's intended degree, not the school's habit. A student aiming for engineering, physics or mathematics needs AA, and one headed for social sciences or business is usually better off with AI.",
        "Tutors teach with a shared digital whiteboard, so a student sees each step written out and can write back. Past-paper questions are set at the right level, calculator technique is shown on screen, and the exploration for the Internal Assessment is planned from the first month so the student, not the tutor, does the work.",
        "In the sciences, Physics, Chemistry and Biology each carry a practical investigation. Tutors coach experiment design, data handling and evaluation, and explain how the criteria are marked. Students without a fully equipped school lab often use simulations and data sets, which are accepted for many investigations if the school approves.",
        "Time is the scarce resource in DP. A weekly lesson for each Higher Level subject, plus a fortnightly session on the Extended Essay process, is a sensible balance.",
      ],
    },
    {
      heading: "Should a Baramulla IGCSE student pick Core or Extended?",
      paragraphs: [
        "Core and Extended tiers exist for most IGCSE subjects, and the choice decides both the grades available and the doors that stay open. Core papers cap the top grade at a C, while Extended papers reach A star. A student expecting to move into A Level Maths, Physics or Chemistry, or IB HL in those subjects, should almost always take Extended.",
        "Subject selection deserves as much attention as tier. A typical portfolio combines Mathematics, one or two sciences, English, a language and one humanities or business subject. Additional Mathematics is worth adding for those headed towards Maths or Physics, though it is demanding and should be timed with the student's workload.",
        "Edexcel and Cambridge differ in paper layout and mark-scheme language, so the tutor works to the exact syllabus code from the first week. Where the student is a private candidate, we also help them work out which exam centre, dates and registration deadlines apply.",
      ],
      table: {
        caption: "Core or Extended for common IGCSE subjects",
        columns: ["Subject", "Choose Extended if", "Core can suit if"],
        rows: [
          ["Mathematics", "A Level Maths, Physics or engineering is planned", "Confidence is low and the aim is a solid pass"],
          ["Physics / Chemistry / Biology", "The subject will continue to A Level or IB HL", "The student is dropping the science after IGCSE"],
          ["English as a Second Language", "Study or work abroad is planned", "A pass grade meets the target"],
          ["Economics / Computer Science", "A related degree is planned", "Curiosity, not a career, drives the choice"],
        ],
      },
    },
  ],

  process: [
    { title: "Share a few details", description: "Message us on WhatsApp or email with the child's class, school or online provider, board and the subjects that need help." },
    { title: "Free trial lesson", description: "A tutor with the right syllabus experience teaches a short trial class so the student can judge the fit before any commitment." },
    { title: "Written plan and quote", description: "After the trial, we send a short plan covering topics, frequency and the rate in writing, so the cost is clear in advance." },
    { title: "Weekly lessons and notes", description: "Lessons run at a fixed time, and a brief written note follows each one covering what was taught and what to practise." },
    { title: "Review and adjust", description: "Every few weeks the plan is reviewed, and the tutor can be changed if the match is not working." },
  ],

  whyPoints: [
    { title: "Right tutor, right syllabus", description: "Every tutor is matched on the exact programme, subject and level, not on a general claim to teach international curricula." },
    { title: "Built around the Valley's year", description: "Slots move around snowfall weeks, exam dates and the winter closure, and written notes cover any lesson a poor connection interrupts." },
    { title: "Honest about the format", description: "Tutors do not visit Baramulla, and we say so up front; the service is live online tuition from home, with tutors based in India." },
    { title: "Coaching, not shortcuts", description: "Tutors explain, question and mark. They never write an Internal Assessment, Extended Essay, TOK essay or coursework." },
    { title: "A free start", description: "The first lesson costs nothing, and a rate quote in writing follows before you decide to continue." },
    { title: "Independent and transparent", description: "No affiliation with any school or exam board, so advice on tiers, subjects and routes stays unbiased." },
  ],

  faqs: [
    { question: "Is there IB or IGCSE home tuition in Baramulla?", answer: "Yes, as online home tuition, though not as in-person visits. Your child attends live one-to-one lessons from home on a laptop with an India-based tutor. Tutors do not travel to Baramulla; in-person home tuition runs only in Gurugram and parts of Delhi NCR. Lessons cover IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE." },
    { question: "Are there IB or IGCSE schools in Baramulla?", answer: "We have not been able to confirm any. The schools in the town follow JKBOSE or CBSE, and our checks of school directories found no IB or IGCSE campus there. Local options are limited, so families usually study online or choose a school in another city. Please verify the latest lists on ibo.org and cambridgeinternational.org before making any decision." },
    { question: "Can my child study IB or IGCSE while living in Baramulla?", answer: "It is possible, though the route needs planning. A student can enrol with an accredited online international school, sit IGCSE papers as a private candidate through an exam centre, or board elsewhere and study at home in the holidays. Tuition supports each route by teaching the syllabus at the pace the student needs." },
    { question: "How does online tuition work when the internet is unreliable?", answer: "We plan for interruptions rather than hoping they will not happen. Lessons run on a fixed weekly slot, the tutor sends a written note after each class, and a missed segment is covered at the start of the next session. A wired connection or a mobile hotspot as backup helps, and short slots are easier to hold than long ones." },
    { question: "How much does IB or IGCSE tuition cost in Baramulla?", answer: "There is no published price because the rate depends on the tutor, subject, level and lessons per week. Higher Level sciences and Maths cost more than MYP humanities, for example. You receive the rate in writing before booking, and the first trial lesson is free, so you can compare before committing to a block." },
    { question: "What about Kashmir's winter break?", answer: "Winter closure is when many families intensify tuition. Because sessions are online, snow does not cancel them, and a boarder home for the break can take several lessons a week. The exact dates of school closure change, so confirm the current circular with your school and share it so we can time the lessons around it." },
    { question: "Which subjects can you cover for IB DP?", answer: "We cover most DP subjects, including Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English, Hindi, Psychology, History and Theory of Knowledge coaching. Tell us the subject and level, and we match a tutor who has taught that course rather than a generalist." },
    { question: "Will a tutor help me write my IA or Extended Essay?", answer: "No, and any service that offers to is placing your diploma at risk. Tutors coach: they explain the criteria, question your ideas, give feedback on drafts you have written and help you plan your time. The Internal Assessment, Extended Essay, TOK essay and coursework must be the student's own work." },
    { question: "How do I choose between IGCSE Core and Extended?", answer: "Choose Extended if the student may continue to A Level or IB HL in that subject, because Core caps the top grade at C. Core suits students who are unsure or will drop the subject. A short diagnostic lesson and a talk with the school help decide, and the tier can often be changed early in the course." },
    { question: "Can Cambridge and Edexcel IGCSE both be taught?", answer: "Yes. The two boards cover similar content but differ in paper structure and mark-scheme wording, so tutors work from the syllabus code the student is registered for. Please tell us the exact code, such as the Cambridge or Edexcel number, so practice papers and feedback match the exam." },
    { question: "Do tutors teach in English, Hindi or Urdu?", answer: "Teaching is in English, since the exams are in English, though a tutor will happily explain a hard idea in Hindi or Urdu when that helps a younger student. Language subjects such as IB Hindi and IGCSE Hindi as a Second Language are taught by tutors comfortable with them, and the student gets past papers in the right script." },
    { question: "What are the lesson timings for students in Baramulla?", answer: "Weekday evenings and weekends are the most common, all in Indian Standard Time, so there is no time-zone gap. We avoid slots that clash with school return, evening prayers or the hours when the household's power supply is least reliable, and slots move if weather closes the schools." },
    { question: "Can you help a student prepare for an IB school interview or assessment?", answer: "Yes, for subject readiness. A tutor can identify gaps in English, Maths and Science, practise the reasoning and explanation style IB schools look for, and build confidence before a school's entrance assessment. We do not coach interviews to guarantee admission, and we have no influence on any school's decisions." },
    { question: "How can a Baramulla student prepare for NEET or JEE with the IB or IGCSE?", answer: "Start by checking each exam's eligibility rules for the qualification, then align the subject choices. Students taking IB Biology, Chemistry, Physics and Maths HL cover much of the ground, but NEET and JEE syllabi differ from IB, and many students add separate entrance coaching. Our tutors teach IB and IGCSE content, not entrance-exam packages." },
    { question: "How do I start with a free trial?", answer: "Message us on WhatsApp at +91 7439 368 115 or email ibgram24@gmail.com with your child's class, board and subject. We suggest a tutor, agree a trial time in IST and send a joining link. After the lesson you get a written plan and a rate in writing; there is no obligation to continue." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The full list of cities we teach in, all delivered online apart from Gurugram." },
    { label: "Srinagar page", href: "/srinagar/", description: "The nearest large city with its own board and school context for Valley families." },
    { label: "Jammu page", href: "/jammu/", description: "Tuition information for families connected to the Jammu division." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject specialists for every IB programme and level." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE tutors by subject." },
    { label: "IB Diploma coaching", href: "/programmes/dp/", description: "How DP tutoring is structured, from HL subjects to the core." },
    { label: "IB MYP support", href: "/programmes/myp/", description: "Criterion-based help for Class 6 to 10 students." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "AA and AI content, HL and SL, with exploration planning." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of the teachers you might be matched with." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a free trial lesson." },
  ],

  closingHeading: "Book a free trial lesson from Baramulla",
  closingBody:
    "Tell us your child's class, board and the subject that feels hardest. We will suggest a tutor who has taught that syllabus, arrange a free trial over video in IST and send a written plan with the rate after the class. Reach us on WhatsApp at +91 7439 368 115 or write to ibgram24@gmail.com.",
};
