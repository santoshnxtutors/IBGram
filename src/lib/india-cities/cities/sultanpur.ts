import type { CitySeoPage } from "../types";

/**
 * Sultanpur (Uttar Pradesh, Ayodhya division). No school in Sultanpur could be confirmed as teaching
 * the IB or Cambridge/Edexcel IGCSE, so stripSchools is empty. Clusters point to Lucknow and
 * Prayagraj, reusing school names already verified on the published Lucknow page.
 */
export const sultanpur: CitySeoPage = {
  slug: "sultanpur",
  countryName: "Sultanpur",
  countryNameLong: "Sultanpur, Uttar Pradesh",
  demonym: "Sultanpur",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-evening and early-morning slots that avoid the pre-monsoon heat, with quieter weeks around Ram Navami, Kartik Purnima and Diwali",
  lastUpdated: "2026-09-21",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  geo: { latitude: 26.2648, longitude: 82.0727 },
  alternateNames: ["Sultanpur UP", "Sultanpur Awadh", "Sultanpur Ayodhya division", "Sultanpur city"],
  wikipedia: "https://en.wikipedia.org/wiki/Sultanpur,_Uttar_Pradesh",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sultanpur UP | Private Online Tuition",
  metaDescription:
    "Private online tutors for IB and IGCSE students in Sultanpur, Uttar Pradesh: PYP, MYP, DP and Cambridge or Edexcel IGCSE, one to one, with a free first lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition Online in Sultanpur",
  heroEyebrow: "IB & IGCSE TUITION FROM HOME FOR SULTANPUR STUDENTS",
  heroSubtitle:
    "Home tuition in Sultanpur for a child on the IB or IGCSE route runs through a screen, not a doorbell. One tutor, one student, one fixed slot each week, live on video, with the tutor chosen for the subject and syllabus code instead of for the length of the journey from Lucknow, Prayagraj or Ayodhya.",
  primaryKeyword: "IB and IGCSE tutors in Sultanpur",
  imageAltText: "A Sultanpur student working through IGCSE Physics questions with an online tutor on a shared whiteboard",
  secondaryKeywords: [
    "IB tutor Sultanpur",
    "IGCSE tutor Sultanpur",
    "IB home tuition Sultanpur",
    "IGCSE home tuition Sultanpur",
    "IB private tuition Sultanpur",
    "IB Maths tutor Sultanpur",
    "IGCSE Maths tutor Sultanpur",
    "IB Physics tutor Sultanpur",
    "IB Chemistry tutor Sultanpur",
    "IB Biology tutor Sultanpur",
    "IB DP tutor Sultanpur",
    "IB MYP tutor Sultanpur",
    "IB PYP tutor Sultanpur",
    "IGCSE online tuition Sultanpur",
    "online IB tutor Sultanpur Uttar Pradesh",
    "Cambridge IGCSE tutor Sultanpur",
    "Edexcel IGCSE tutor Sultanpur",
    "IB tutor Civil Lines Sultanpur",
    "IGCSE tutor Kadipur",
    "IB tutor Lambhua",
    "IB tutor Jaisinghpur",
    "IB Economics tutor Sultanpur",
    "IGCSE Additional Maths tutor Sultanpur",
    "online home tuition Sultanpur IB board",
  ],

  heroTrustPoints: [
    "Every lesson is live and private, matched to the syllabus code being studied",
    "Tutors do not travel to homes in Sultanpur; teaching happens on video",
    "The first lesson costs nothing and commits you to nothing",
    "IB Gram is independent of every board, school and exam body named",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB coverage" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards" },
    { value: "Private, online", label: "One-to-one format" },
    { value: "Free trial", label: "Try before paying" },
  ],

  intro: {
    heading: "An IB or IGCSE route for a Gomti-side district town",
    paragraphs: [
      "Sultanpur lies on the Gomti, about 135 kilometres east of Lucknow, and belongs to the Ayodhya division of Uttar Pradesh. It is a district headquarters with a college culture, an engineering institute of its own in the Kamla Nehru Institute of Technology, and a long-standing habit of sending ambitious children to Lucknow, Prayagraj or Delhi. Schools in town teach UP Board, CBSE or ICSE. Choosing the IB or Cambridge or Edexcel IGCSE here means going against the local grain.",
      "We looked for an IB World School or an approved IGCSE centre in Sultanpur and found nothing we could stand behind, so no school is named on this page. That does not close the door. The realistic pattern is a child who stays in an existing school and takes the international course on the side, with a specialist explaining each topic live, marking practice papers and preparing the student for private entry to the exams.",
      "People here often ask for home tuition by that name. In Gurugram and parts of Delhi NCR we do send tutors to houses, but not to Sultanpur. What arrives instead is the same weekly rhythm as a home tutor, one to one and predictable, over video. You lose the knock at the door and gain a wider pool: a Higher Level Chemistry student can be taught by a chemist rather than by whoever teaches science nearby.",
      "Everything a tutor does is teaching, questioning and feedback. IAs, Extended Essays, TOK essays and coursework remain the student's own writing, always. IB Gram has no affiliation with the IB, Cambridge, Pearson Edexcel or any school mentioned here.",
    ],
    bullets: [
      "All four IB programmes supported, from PYP to the Diploma and CP",
      "Cambridge and Pearson Edexcel IGCSE in core academic subjects and languages",
      "Private lessons from home, delivered online instead of by visits",
      "A free first lesson, then a plan in writing that you can accept or alter",
    ],
  },

  programmesIntro:
    "For a Sultanpur child, each IB stage arrives without a local classroom to model it. The notes below say what tutors tend to concentrate on at every level.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Young learners investigate six themes through open questions, then act on what they discover, and Class 5 ends with a pupil-led Exhibition that the whole school attends.",
      countryNote:
        "Awadhi and Hindi carry most conversation at home in this district, so PYP sessions here give extra time to spoken English and to describing what a child has noticed in a full sentence.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are graded against four criteria each, on a scale of one to eight, and the Personal Project in the final year makes the student plan, produce and evaluate something original.",
      countryNote:
        "A student raised on UP Board papers usually knows the content but has never seen criterion descriptors, so tutoring turns them into checklists and shows a strong and a weak response side by side.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six courses are studied, three at Higher and three at Standard Level, alongside a 4,000-word research essay, the Theory of Knowledge course and creativity, activity and service. Written papers fall in May.",
      countryNote:
        "A Diploma candidate in Sultanpur is nearly always registered elsewhere or entering privately, which makes the weekly tutor the main voice explaining each course.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two Diploma courses are taken with a career-related qualification, a personal and professional skills strand and a reflective project, suited to students who prefer applied study.",
      countryNote:
        "Almost no one in this part of Uttar Pradesh takes CP. Where a family holds a place elsewhere, we treat its Diploma courses with the same rigour as a full Diploma load.",
    },
  ],

  subjectsIntro:
    "Sultanpur families most often request the courses below. In each we look for a tutor who has taught it recently and who is at ease with a student learning it away from a school classroom.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, algebraic proof, vectors and series, with timed HL Paper 3 questions and an Exploration idea drawn from something the student cares about." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and finance with confident calculator use, aimed at students moving towards commerce, social science or biology." },
    { name: "IB Physics", levels: "HL / SL", description: "Kinematics through to nuclear physics, with derivations practised on paper and an investigation that needs only household equipment." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, thermochemistry, rates and organic mechanisms, with practical technique explained through video demonstration." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, physiology and ecology, with investigation ideas from the Gomti's riverbank and surrounding farmland." },
    { name: "IB Economics", levels: "HL / SL", description: "Market failure, macro policy and development, with Uttar Pradesh farm and rail-freight examples for the commentary portfolio." },
    { name: "IB Business Management", levels: "HL / SL", description: "Unseen-case analysis and a research project on a local shop, mill or service firm." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Comparative essay planning, close reading of unseen texts and oral rehearsal." },
    { name: "IB Hindi A Literature", levels: "HL / SL", description: "Guided analysis of set texts in the language many students think in." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, networks and databases, with a working solution and documentation for the IA." },
    { name: "IB Psychology", levels: "HL / SL", description: "Biological, cognitive and sociocultural approaches, with methods knowledge and essay structure." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and essay writing, using twentieth-century topics that suit a student with a strong sense of regional heritage." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Water use, river systems and land management, with Gomti-basin questions as concrete cases." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Knowledge questions, exhibition objects and a prescribed-title essay planned in stages." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Framing a researchable question and structuring the argument; every word submitted is the student's." },
  ],

  igcseSubjectsIntro:
    "In Sultanpur, IGCSE preparation usually runs beside a UP Board or CBSE school year, with private entry through an approved centre. Tutors are matched by board, code and tier, and we favour those who have prepared independent candidates before.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, geometry, statistics and number, with separate practice for calculator and non-calculator papers." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Class 9-10", description: "Calculus, trigonometry and functions, a strong preparation for IB Maths or engineering entrance study." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel's own phrasing and layout, drilled on genuine Edexcel past papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Motion, electricity, waves and thermal physics, with equation rearrangement and graph reading." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Stoichiometry, periodic trends, electrolysis and organic chemistry, with the practical paper rehearsed." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, inheritance, human biology and ecology, with data-handling drills." },
    { name: "IGCSE Combined and Coordinated Sciences", levels: "0653 / 0654", description: "Three sciences balanced within one manageable weekly plan." },
    { name: "IGCSE Economics 0455", levels: "Class 9-10", description: "Definitions, diagrams and evaluative paragraphs, with local market examples." },
    { name: "IGCSE English as a Second Language 0510", levels: "Class 9-10", description: "Reading, writing, listening and speaking for students who use Hindi or Awadhi outside the classroom." },
    { name: "IGCSE Business Studies 0450", levels: "Class 9-10", description: "Applying terms to the business case printed on each paper." },
    { name: "IGCSE Computer Science 0478", levels: "Class 9-10", description: "Pseudocode, logic and Python for the problem-solving paper." },
    { name: "IGCSE History 0470", levels: "Class 9-10", description: "Source questions and structured essays across the twentieth-century syllabus." },
  ],

  regionsTitle: "Sultanpur city and district areas we support online",
  regionsIntro:
    "Lessons are on video, so these places are listed to help a tutor understand a student's timing, connection and school context, not to plan a journey.",
  regions: [
    { name: "Sultanpur Junction station area", note: "A busy central belt where railway-linked and trading households live in older lanes with dependable broadband." },
    { name: "Civil Lines and Collectorate area", note: "Quiet lanes near the district administration, home to officers, lawyers and teachers who often compare boards carefully." },
    { name: "Lucknow Road side (NH731)", note: "The western approach, with newer housing and many families who travel to Lucknow for work and shopping." },
    { name: "Ayodhya Road side (NH330)", note: "The route east towards Ayodhya, whose new airport and temple traffic are changing the local economy." },
    { name: "Prayagraj Road side", note: "The south-eastern direction, used by families with ties to Prayagraj universities and courts." },
    { name: "Sitakund Ghat and the Gomti riverfront", note: "The old riverside quarter, where temple-linked families live and festival weeks reshape the routine." },
    { name: "Kadipur", note: "A town in the district with its own market and school scene, and steady evening study hours." },
    { name: "Lambhua", note: "A tehsil town where reliable connectivity is the main scheduling question." },
    { name: "Jaisinghpur", note: "A district town with agricultural and trading families who study after farm and shop work ends." },
    { name: "Kurebhar, Dostpur and Akhandnagar", note: "Smaller towns across the district, where mobile data often serves as a backup for lessons." },
  ],

  schoolDisclaimer:
    "We are an independent tutoring service. Schools listed below are simply the closest ones we could check, they have not approved this page, and nothing ties IB Gram to them, the IBO, Cambridge or Pearson Edexcel. We found no IB or IGCSE school in Sultanpur we could verify, and we name none.",
  schoolClusters: [
    {
      city: "Sultanpur district",
      note: "Our checks turned up no IB World School and no approved Cambridge or Edexcel centre in Sultanpur district, so the list is empty. Classrooms teach UP Board, CBSE or ICSE, and an international course arrives through a tutor plus private exam entry.",
      schools: [],
    },
    {
      city: "Nearby: Lucknow",
      note: "About 135 kilometres west, Lucknow is the closest city with confirmed IB and Cambridge options. It has one IB primary school and several IGCSE campuses, and some Sultanpur families consider boarding there from Class 9 or 11.",
      schools: ["Modern School, Lucknow", "City Montessori School, Cambridge Campus", "GD Goenka Public School, Lucknow"],
    },
    {
      city: "Nearby: Prayagraj",
      note: "Roughly 99 kilometres south-east, Prayagraj is a university and court city with a large school market. We could not confirm an IB or Cambridge campus there, so it matters mainly for exam access and travel by rail.",
      schools: [],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "The largest cluster of IB and IGCSE campuses in northern India, and the only region where IB Gram also arranges tutor visits to homes.",
      schools: ["Pathways World School, Aravali", "The Shri Ram School, Aravali"],
    },
  ],

  modesIntro:
    "Three working patterns suit Sultanpur families. Which one fits depends on the child's current school, the exam plan and how settled the family's thinking is.",
  modes: [
    {
      title: "A standing weekly slot with one tutor",
      description:
        "The same tutor and student meet on video at a fixed hour, using a whiteboard, worked questions and a brief written note that lands after each lesson.",
      bullets: [
        "Slots set for late evening or weekend mornings",
        "One tutor who builds a picture of the student's habits",
        "A second weekly hour before mock exams",
        "Notes written so parents can follow the progress",
      ],
    },
    {
      title: "Study alongside the present school",
      description:
        "The child remains at a UP Board, CBSE or ICSE school and the tutor teaches the IGCSE or IB material as a separate strand.",
      bullets: [
        "No change to school friends or routine",
        "A cheap way to sample IGCSE Maths or Sciences",
        "Helpful for Class 8 to 10 students planning a later switch",
        "Prepares the ground for any eventual move to an IB campus",
      ],
    },
    {
      title: "Independent-candidate exam plan",
      description:
        "For students entering papers privately, the timetable is counted back from exam day and built from timed papers, mark schemes and honest advice on entry.",
      bullets: [
        "Paper-by-paper schedule from the first fortnight",
        "Regular timed practice, marked with comments",
        "Advice on centres reachable from Sultanpur, Lucknow or Prayagraj",
        "Plain progress notes for parents",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Sultanpur have any IB or Cambridge school?",
      paragraphs: [
        "Not one we could verify. Sultanpur's schools teach UP Board, CBSE and ICSE, and none that we checked shows up as an authorised IB World School or as a Cambridge or Edexcel centre. When we cannot confirm a school, we leave it out, even if a signboard or a brochure implies otherwise.",
        "The gap is typical for district towns in eastern Awadh. Larger cities nearby fare better but not dramatically: Lucknow has a verified IB primary campus and a few IGCSE schools, while Prayagraj, the other big neighbour, gave us nothing we could confirm. A commute from Sultanpur to either is not workable every day, so the decision is between boarding, relocating or staying.",
        "Staying is the cheapest and least disruptive option, and it is the one most families try first. The child continues at the school they know, and a tutor covers one or two IGCSE or IB subjects live. If it suits the child, the family can widen the plan. If not, little has been lost.",
        "For that reason, we suggest beginning with one free lesson in the subject the child finds hardest. It shows within an hour whether reasoning-based papers appeal to the child, well before anyone weighs a costly move.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Sultanpur district",
        "Lucknow, about 135 km away, has the nearest verified options",
        "Boarding, relocating or staying with a tutor are the realistic choices",
        "One free lesson tests the fit before large decisions",
      ],
    },
    {
      heading: "Which Sultanpur families ask about IB and IGCSE tuition?",
      paragraphs: [
        "A few groups account for most enquiries. Engineering-minded families come first, drawn by the presence of KNIT and by a long tradition of sending children into technical careers. They notice that IB Maths and Physics, or IGCSE Additional Maths, build habits that suit JEE-style thinking and also open doors abroad.",
        "Second are families with relatives in Mumbai, the Gulf, the United Kingdom or North America. Sultanpur, like much of eastern Uttar Pradesh, has a strong migration story, and parents want a syllabus the child can carry to a new country without losing years.",
        "Third are officials, lawyers and teachers at the district headquarters, some transferred in from bigger cities with a child midway through an international course. Fourth are small-business and agricultural-trade families, many with children interested in commerce or design, who see IGCSE Business or IB Economics as a modern route.",
        "The Ayodhya corridor is adding a new group. Growth in hospitality, construction and services along the highway is bringing professionals into the region, and some arrive with children who already follow an international syllabus.",
      ],
    },
    {
      heading: "UP Board, CBSE, ICSE, IGCSE and IB: what would change for a Sultanpur pupil?",
      paragraphs: [
        "Most Sultanpur pupils sit UP Board or CBSE papers, with a smaller ICSE group. Those papers reward accurate reproduction of textbook content in a familiar format, and marks are lost mainly through slips in recall. The results feed into state and national entrance routes without complication.",
        "IGCSE and IB Diploma papers ask something different. A question may present an unfamiliar situation and ask a student to justify a choice, evaluate a method or predict an outcome, and full credit needs reasoning shown in steps. A student with strong recall can find the first past paper unsettling.",
        "Language matters as well. Papers are set in English, and many Sultanpur students have studied in Hindi medium. Tutors therefore spend time on subject vocabulary and on building paragraphs that answer the exact command word, because a correct idea poorly expressed can lose marks.",
        "The endpoints differ. Board results in India open the JEE, NEET and CUET routes directly. IGCSE is a Class 10 qualification that leads on to A Level or the Diploma, and the Diploma allows applications abroad and, with an equivalence process, to many Indian universities.",
      ],
      table: {
        caption: "Board options for a Sultanpur family",
        columns: ["Board", "Presence in Sultanpur", "What the papers reward", "What comes next"],
        rows: [
          ["UP Board", "Widespread", "Recall of textbook content in set formats", "State universities and entrance exams"],
          ["CBSE", "Common in private schools", "NCERT-based accuracy and stepwise answers", "JEE, NEET and CUET"],
          ["ICSE and ISC", "A few schools", "Broad content and written English", "Indian universities, many overseas"],
          ["Cambridge or Edexcel IGCSE", "Not confirmed locally", "Application, method marks and tiered papers", "A Level, IB Diploma or a Class 11 course"],
          ["IB Diploma", "Not confirmed locally", "Inquiry, coursework and final examinations", "Overseas applications; equivalence and CUET in India"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Sultanpur, and why do quotes vary?",
      paragraphs: [
        "Publishing a fixed rate would mislead you, because the sensible figure depends on the child. After we hear the brief, we put a number in writing before the free lesson, so you can compare it calmly with other options.",
        "The largest influence is what is being taught. A Higher Level Physics or Chemistry course, or IGCSE Additional Maths, needs a specialist who is scarcer than a generalist for junior classes. Next come the number of lessons a week and how long each runs, plus how much of the syllabus the tutor must teach from nothing.",
        "Distance plays no part. A family in Kadipur or Lambhua is charged the same as one beside the railway station, because the lesson travels over broadband. Local tuition for state-board subjects is often cheaper, and we do not pretend otherwise, but few teachers nearby have handled IB or Cambridge papers.",
        "Timing matters too. Beginning eighteen months before an exam lets the weekly load stay light. Beginning in the last term forces more lessons into fewer weeks, and the plan spells that out. There is no lock-in, so a family can stop if circumstances change.",
      ],
      bullets: [
        "Course and level set the starting rate",
        "Weekly hours and lesson length adjust the monthly total",
        "A late start compresses the syllabus and needs more lessons",
        "No travel charge anywhere in the district",
      ],
    },
    {
      heading: "Online tutor, local coaching, home teacher or self-study: which route suits Sultanpur?",
      paragraphs: [
        "Sultanpur has plenty of coaching and private teaching, and for board subjects and engineering entrance preparation it can serve well. Proximity is a real advantage for younger children, and this page does not suggest abandoning a good local teacher.",
        "The shortfall is in international syllabi. Coaching centres in the city work around UP Board, CBSE, JEE and NEET, using textbooks and question banks that follow those exams. A student trying to learn IB Chemistry HL or IGCSE Extended Physics in a batch would spend hours on material the papers never ask.",
        "A private teacher visiting the house can help a child gain confidence in a single subject, but few have taught IB or Cambridge, and no one can cover every subject. Self-study with past papers works for some older students, though without feedback the same slips repeat until results day.",
        "A syllabus-matched online tutor closes the gap. The family needs a stable connection and a student who works between lessons, and in return gets a specialist who has taught the exact paper. For the two or three subjects that matter most, that trade is usually worth making.",
      ],
      table: {
        caption: "Routes to an IB or IGCSE course from Sultanpur",
        columns: ["Route", "Strength", "Weakness for IB or IGCSE"],
        rows: [
          ["Online one-to-one tutor", "Syllabus-matched, private, adjustable hours", "Needs dependable internet and independent effort"],
          ["Local coaching centre", "Nearby, structured, well known to parents", "Aimed at board, JEE and NEET syllabi"],
          ["Home teacher in town", "Personal attention without a screen", "Few know IB or Cambridge; rarely covers all subjects"],
          ["Self-study with past papers", "Cheapest and most flexible", "No feedback on lost marks"],
          ["Boarding in Lucknow or elsewhere", "A full school and classmates", "Distance from family and much higher cost"],
        ],
      },
    },
    {
      heading: "How do summer heat, monsoon and festivals shape the Sultanpur study year?",
      paragraphs: [
        "Sultanpur's summers are severe, with recorded highs around 47 degrees Celsius, and rainfall of about a metre a year arrives mostly in the monsoon. The hottest weeks fall just as IB and Cambridge papers are sat, so we move lessons to late evening or early morning and shorten sessions when the heat is worst.",
        "The town's position on the Gomti and near Ayodhya gives its festivals extra weight. Ram Navami in spring, Kartik Purnima in November and Diwali all bring travel, guests and disrupted routines. Families with pilgrim traffic through their neighbourhood or shop often have crowded weeks that a tutor should know about in advance.",
        "Monsoon storms can interrupt power and mobile data, especially in outlying towns such as Jaisinghpur. We agree a spare slot in the plan so that a bad evening does not become a missed week, and we rearrange any lesson lost to a power cut.",
        "Working backwards from the papers gives structure. An IGCSE candidate aiming for May should finish content by January. A Diploma student should complete most content by the winter of the final year, with mocks in December and January and IA deadlines mapped ahead.",
      ],
      table: {
        caption: "A study calendar for Sultanpur",
        columns: ["Period", "Local conditions", "Study emphasis"],
        rows: [
          ["March to April", "Ram Navami, rising heat, board exams end", "Past-paper practice and technique"],
          ["May to June", "Peak heat, Cambridge and IB papers", "Late-evening or early lessons, light revision"],
          ["July to September", "Monsoon, new school year", "Foundation building, spare slots for power cuts"],
          ["October to November", "Dussehra, Diwali, Kartik Purnima", "Lighter weeks and resit preparation"],
          ["December to February", "Fog, cold, mocks and IA deadlines", "Mock papers and draft feedback"],
        ],
      },
    },
    {
      heading: "Where can Sultanpur students go after an international course?",
      paragraphs: [
        "Students who take IGCSE or the Diploma from Sultanpur usually plan to leave the district for college. Common destinations are Lucknow, Prayagraj, Delhi and Pune for degrees, and the UK, Canada or Australia for study abroad.",
        "In India, the Association of Indian Universities treats the Diploma as a Class 12 equivalent, and Diploma students can register for CUET-UG. IGCSE alone stops at Class 10 level, so a further stage is needed, whether A Level, the Diploma or a board Class 11. Rules for JEE and NEET applicants from international boards get updated, so check every year.",
        "Locally, KNIT offers engineering study through state routes, and Lucknow and Prayagraj provide a wider set of universities and private institutes. Students with strong IB or Cambridge results can also look at private universities that recognise those boards.",
        "For applications abroad, a Diploma with strong Higher Level Maths and Physics supports engineering and computing, while HL Biology and Chemistry support medicine and life sciences. Choosing subjects with the degree in mind at Class 11 avoids painful changes later.",
      ],
      bullets: [
        "The Diploma is a Class 12 equivalent for Indian admissions",
        "IGCSE alone needs A Level, the Diploma or Class 11 to follow",
        "JEE and NEET conditions for international boards need yearly checking",
        "Higher Level choices should follow the intended degree",
      ],
    },
    {
      heading: "IB Maths AA or AI and the sciences: what does a Sultanpur tutor do?",
      paragraphs: [
        "The first Maths choice is between Analysis and Approaches and Applications and Interpretation. Engineering and physics candidates lean to the first, while future economists, biologists and business students often prefer the second, with its focus on data and technology.",
        "A student coming from UP Board or CBSE Maths usually has strong procedure. The adjustment is to explain each step, handle problems with no obvious template and use a graphing calculator fluently. The Exploration needs an early topic and steady drafting, and a tutor helps plan without writing.",
        "In Physics, Chemistry and Biology, the shift is from remembering to explaining. Command terms such as suggest, deduce and evaluate carry precise meanings, and tutors coach students to answer what is asked. Data questions are practised until reading graphs feels routine.",
        "Practical work is planned for a home setting. The Scientific Investigation can use simple materials, a public dataset or a simulation, and the tutor explains how good design works so that the student produces original, honest work.",
      ],
    },
    {
      heading: "Should a Sultanpur IGCSE student sit Core or Extended?",
      paragraphs: [
        "A student who might move on to the Diploma or A Level sciences is generally better off with Extended. Core papers cap the top grade and skip topics that later courses assume.",
        "We suggest testing rather than guessing. A short diagnostic in the first weeks shows whether marks slip through method, arithmetic or misreading, and the tier decision follows from that pattern.",
        "Edexcel's Foundation and Higher tiers work on the same principle, with Higher reaching grade 9 and Foundation ending at 5, which shapes later options.",
        "Tiers may differ by subject. A student may sit Extended in Maths and Physics and Core in a subject they will drop, and we explain the trade-off plainly to parents.",
      ],
    },
  ],

  tutorsIntro:
    "These tutors teach the IB and IGCSE live to Sultanpur students, and they are comfortable with Hindi-medium backgrounds and independent exam candidates.",

  process: [
    { title: "Send your details", description: "Share the board, subject, level, current school and any exam date, along with where the child struggles." },
    { title: "Read the shortlist", description: "We propose tutors whose syllabus experience fits and explain the reasoning." },
    { title: "Attend a free lesson", description: "Your child works a genuine topic on video, with no charge and no promise to continue." },
    { title: "Sign off on a plan", description: "Weekly slots, topics, pace and the fee are set out in writing before you commit." },
    { title: "Review together", description: "Every few weeks we check progress with you and swap the tutor if the fit is poor." },
  ],

  whyPoints: [
    { title: "Candid about Sultanpur", description: "No local IB or IGCSE school is confirmed, and we say so instead of hinting otherwise." },
    { title: "Syllabus before convenience", description: "Tutors are picked for the exact board, code and tier, not for living nearby." },
    { title: "Planned around the calendar", description: "Heat, monsoon power cuts and festival weeks are built into the schedule." },
    { title: "Judge before you pay", description: "A real lesson comes first, so the tutor is assessed on teaching." },
    { title: "The student's own work", description: "Tutors coach and never write assessed pieces for a student." },
    { title: "Free to change", description: "No lock-in, and a fresh tutor whenever the pairing is not working." },
  ],

  faqs: [
    {
      question: "Will an IB or IGCSE tutor come to my house in Sultanpur?",
      answer:
        "No. IB Gram sends tutors to homes only in Gurugram and parts of Delhi NCR, so nobody will arrive at a Sultanpur address. Your child instead joins a live, private video lesson at a fixed weekly hour. That keeps the focus of home tuition while letting us choose a subject specialist from anywhere in India.",
    },
    {
      question: "Is there any IB school in Sultanpur?",
      answer:
        "We found none we could verify. Sultanpur schools teach UP Board, CBSE or ICSE. The nearest confirmed IB and Cambridge options are in Lucknow, about 135 kilometres away, where Modern School runs the IB primary programme. Most families keep the child in a local school and add the international subjects through a tutor.",
    },
    {
      question: "How much does an IB or IGCSE tutor cost in Sultanpur?",
      answer:
        "It depends on the subject, the level, lessons per week and how much of the course must be taught from the start. There is no travel charge. We give you the rate in writing before the free lesson, so you can compare it with local tuition and decide when you are ready.",
    },
    {
      question: "Can my child take IGCSE exams while living in Sultanpur?",
      answer:
        "Usually yes, by entering as a private candidate through an approved centre, which may be in Lucknow or Prayagraj. Ask about centres and closing dates early. We prepare the student and help plan the timetable, while the family handles the registration itself.",
    },
    {
      question: "My child studies in Hindi medium. Is IGCSE realistic?",
      answer:
        "For many students it is, with preparation. The hurdle is written English, so tutors teach subject vocabulary and paragraph structure alongside content. IGCSE English as a Second Language can run in parallel, and Diploma students may choose Hindi A to be examined in a strong language.",
    },
    {
      question: "Which IB subjects do Sultanpur students request most?",
      answer:
        "Maths tops the list, followed by Physics, Chemistry, Biology and Economics, then Business Management, English and Computer Science. Some students ask for Hindi A or History. If your subject is rarer, tell us and we will look for a suitable specialist.",
    },
    {
      question: "Will the tutor write the IA or the Extended Essay?",
      answer:
        "No, and a good tutor would refuse. Tutors explain what the criteria reward, help the student pick a workable topic, talk through data planning and give frank comments on drafts the student has written. Submitted work must be the student's own, or the exam body may penalise it.",
    },
    {
      question: "Do you support MYP and PYP as well as the Diploma?",
      answer:
        "Yes. PYP lessons centre on English reading, speaking and number sense. MYP lessons unpack the assessment criteria and keep the Personal Project on schedule. Younger children have shorter and more frequent sessions than Diploma students.",
    },
    {
      question: "How do Cambridge and Edexcel IGCSE differ?",
      answer:
        "They are separate awarding bodies with different syllabus codes and paper formats. Cambridge often offers Core and Extended tiers, and Edexcel offers Foundation and Higher. Both lead on to A Level or the IB. We choose the tutor by the board your child will actually sit.",
    },
    {
      question: "Is broadband in Sultanpur good enough for video lessons?",
      answer:
        "In most of the city it is, and mobile data acts as a backup. Towns like Jaisinghpur and Lambhua can be weaker, and monsoon storms or summer cuts sometimes interrupt service. We test the connection in the trial lesson and agree a spare slot in the plan.",
    },
    {
      question: "How do heat and festivals affect the lesson timetable?",
      answer:
        "In April to June we move lessons to late evening or early morning and shorten them. Ram Navami, Diwali and Kartik Purnima weeks are kept light, and monsoon power cuts are covered by a spare slot. The written plan lists these dates so nothing is a surprise.",
    },
    {
      question: "When is the right time to start tutoring?",
      answer:
        "Best at the beginning of a course, meaning Class 9 for IGCSE and Class 11 for the Diploma. Class 8 is good for laying English and Maths foundations. Starting within six months of exams is possible, but the plan then focuses on exam technique rather than full teaching.",
    },
    {
      question: "Would moving to Lucknow for an IB school be better?",
      answer:
        "That depends on your household. Lucknow offers a full school and classmates, but at about 135 kilometres it means boarding or relocating, and costs rise sharply. Many families first try a term of online lessons to see whether the child enjoys the reasoning style.",
    },
    {
      question: "Can IB students from Sultanpur apply to Indian universities?",
      answer:
        "Yes. The Diploma is treated as a Class 12 equivalent and CUET-UG is open to IB students. IGCSE alone ends at Class 10 and needs a further stage. Conditions for JEE and NEET for international-board students are revised from time to time, so check them each year.",
    },
    {
      question: "What happens in the free first lesson?",
      answer:
        "A shortlisted tutor takes your child through a real topic from their syllabus on video, free and with no obligation. Afterwards you receive a short note on strengths, gaps and a suggested plan, and you decide whether to continue or ask for a different tutor.",
    },
    {
      question: "What if we do not get on with the tutor?",
      answer:
        "Tell us and we will suggest another. We review progress with parents every few weeks and change tutors when pace, style or subject depth is not right. Switching costs nothing.",
    },
    {
      question: "How do I begin?",
      answer:
        "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board, subject, level and school. We reply with a shortlist and evening trial times, and nothing is charged until you have met the tutor and seen the plan.",
    },
  ],

  internalLinks: [
    { label: "Lucknow", href: "/lucknow/", description: "IB and IGCSE tutoring for the state capital, the nearest city with verified schools." },
    { label: "Rae Bareli", href: "/rae-bareli/", description: "Online tutoring for the neighbouring district of Rae Bareli." },
    { label: "Prayagraj", href: "/prayagraj/", description: "IB and IGCSE support for families around Prayagraj." },
    { label: "Varanasi", href: "/varanasi/", description: "Tutoring for families in Varanasi and eastern Uttar Pradesh." },
    { label: "All India cities", href: "/india/", description: "Every Indian city we tutor online." },
    { label: "Gurgaon and Delhi NCR", href: "/gurgaon/", description: "The only region where IB Gram tutors also visit homes." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How IB tutoring works across the programmes." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subjects explained." },
    { label: "Diploma Programme", href: "/programmes/dp/", description: "HL and SL choices and the Diploma Core." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and programme." },
    { label: "Contact us", href: "/contact-us/", description: "Send your requirements and book a free first lesson." },
  ],

  closingHeading: "Begin with a free IB or IGCSE lesson in Sultanpur",
  closingBody:
    "Give us the board, subject, level and school, plus any exam date that is coming up. We will return with a tutor shortlist and trial slots, and nothing is payable until you have watched a lesson. Contact support@ibgram.com or WhatsApp +91 7439 368 115.",
};
