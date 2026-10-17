import type { CitySeoPage } from "../types";

/**
 * Hardoi (Uttar Pradesh). No school in Hardoi could be confirmed as teaching the IB or
 * Cambridge/Edexcel IGCSE, so stripSchools is empty. School clusters lean on Lucknow (about 110 km)
 * and Kanpur, reusing school names already verified on the published Lucknow and Kanpur pages.
 */
export const hardoi: CitySeoPage = {
  slug: "hardoi",
  countryName: "Hardoi",
  countryNameLong: "Hardoi, Uttar Pradesh",
  demonym: "Hardoi",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons after the evening meal on weekdays, kept clear of the April wheat harvest weeks and the dense winter fog that delays trains",
  lastUpdated: "2026-09-21",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  geo: { latitude: 27.4, longitude: 80.1167 },
  alternateNames: ["Hardoi city", "Hardoi UP", "Prahlad Nagari", "Hardoi district"],
  wikipedia: "https://en.wikipedia.org/wiki/Hardoi",
  stripSchools: [],

  title: "IB and IGCSE Tutors in Hardoi | Private Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Hardoi students: private online lessons for PYP, MYP, DP and Cambridge or Edexcel IGCSE, planned around harvest and fog. Free trial.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Hardoi",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR HARDOI FAMILIES",
  heroSubtitle:
    "Private tuition at home in Hardoi for an IB or IGCSE student is possible, but it happens on screen. A tutor teaches one child at a time, live, at a fixed weekly hour, while the family stays put about 110 kilometres from Lucknow, and the tutor is picked for the syllabus rather than for who lives nearby.",
  primaryKeyword: "IB and IGCSE tutors in Hardoi",
  imageAltText: "Online IB Chemistry tutoring session for a student in Hardoi, Uttar Pradesh, with a worked equation on a shared whiteboard",
  secondaryKeywords: [
    "IB tutor Hardoi",
    "IGCSE tutor Hardoi",
    "IB home tuition Hardoi",
    "IGCSE home tuition Hardoi",
    "IB private tuition Hardoi",
    "IB Maths tutor Hardoi",
    "IGCSE Maths tutor Hardoi",
    "IB Physics tutor Hardoi",
    "IB Chemistry tutor Hardoi",
    "IB Biology tutor Hardoi",
    "IB DP tutor Hardoi",
    "IB MYP tutor Hardoi",
    "IB PYP tutor Hardoi",
    "IGCSE online tuition Hardoi",
    "online IB tutor Hardoi Uttar Pradesh",
    "Cambridge IGCSE tutor Hardoi",
    "Edexcel IGCSE tutor Hardoi",
    "IB tutor Sandila",
    "IGCSE tutor Shahabad Hardoi",
    "IB tutor Lucknow Road Hardoi",
    "IB Economics tutor Hardoi",
    "IGCSE Additional Maths tutor Hardoi",
    "online home tuition Hardoi IB board",
    "IB tutor Prahlad Nagari",
  ],

  heroTrustPoints: [
    "Online, one to one, at the same weekly hour, with a tutor chosen for your syllabus",
    "No tutor visits homes in Hardoi; the lesson comes to your laptop instead",
    "The first lesson is free and carries no obligation",
    "IB Gram is independent of every school and exam board mentioned",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "IB coverage" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "Live and private", label: "Online, not visits" },
    { value: "Free trial", label: "Before deciding" },
  ],

  intro: {
    heading: "What IB and IGCSE study looks like from Hardoi",
    paragraphs: [
      "Hardoi is a district headquarters on the plains of central Uttar Pradesh, a sugar-and-oilseed economy town with a long railway history, about 110 kilometres from Lucknow and roughly 385 from Delhi. Its schools follow UP Board, CBSE and ICSE. A family here that wants the International Baccalaureate or Cambridge and Edexcel IGCSE is choosing something unusual for the district, and it is normally because of a transfer, a relative abroad, or a plan for the child to study outside India.",
      "The practical difficulty is that Hardoi does not have a classroom for either curriculum that we could confirm. So the course has to be delivered around the school day, by a private teacher, and that is where a weekly online lesson does the work a home tutor would have done a generation ago. The child sits at a desk in the house, the tutor is on video, and the hour is protected in the family's week.",
      "Home tuition in the literal sense, with someone arriving at the door, is something IB Gram runs only in Gurugram and parts of Delhi NCR. Hardoi gets the online version. In exchange, the choice of tutor is not limited by the town's size, and a student who needs a Higher Level Chemistry specialist is not offered whichever science graduate happens to live nearby.",
      "Tutors coach and explain. They do not write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework, and the work handed in is always the student's own. IB Gram is an independent service and is not affiliated with the IB, Cambridge, Pearson Edexcel or any school named here.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP tutoring, all live",
      "Cambridge and Pearson Edexcel IGCSE across Maths, sciences, languages and business",
      "Private home-based study, delivered through video, not visits",
      "A free first lesson and a written plan before any commitment",
    ],
  },

  programmesIntro:
    "Hardoi children meet these programmes through a tutor, not a timetable. Each entry below notes what that usually means at each stage.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Children work through six themes with questions they help to shape, learning to reflect and take action, and the final year brings a self-directed Exhibition.",
      countryNote:
        "Hindi and Awadhi are the languages of most Hardoi homes, so PYP tutoring here spends real time on spoken English and on giving children the words to describe what they wonder about.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are assessed against criteria on a one-to-eight scale in each strand, and a Personal Project in the last year asks the student to set a goal, produce something and reflect on it.",
      countryNote:
        "Students from a UP Board background often know the content but not the criteria language, so a tutor rewrites tasks in plain terms and models what a strong answer looks like.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subject courses, split between Higher and Standard Level, sit alongside the Extended Essay, Theory of Knowledge and service. Exams come in May for most Indian candidates.",
      countryNote:
        "A Hardoi Diploma student, registered elsewhere or entering privately, depends on the tutor for weekly explanation and marking feedback, so subject strength decides everything in the match.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students combine at least two Diploma courses with a career-related study, a reflective project and skills in areas such as communication and ethics.",
      countryNote:
        "CP is rare anywhere in Uttar Pradesh's district towns. If a family arrives with a CP place elsewhere, we tutor the Diploma courses within it the same way as for a full DP student.",
    },
  ],

  subjectsIntro:
    "Hardoi students most often ask for the following IB courses. For each, we look for a tutor who has taught it recently and who is comfortable with a student learning it largely outside a classroom.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus, vectors and proof, with timed HL Paper 3 practice and an Exploration idea that can be tested with everyday data." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and financial mathematics, taught with heavy use of a graphing calculator." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through quantum ideas, with derivations practised on paper and an investigation that suits a home setup." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics, kinetics and organic reactions, with practical skills shown through video demonstration." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell and molecular biology to ecology, with data questions and a fieldwork idea drawn from farmland or the Ramganga plain." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, elasticity, trade and development, using sugar, wheat and groundnut markets for real commentary material." },
    { name: "IB Business Management", levels: "HL / SL", description: "Marketing, finance and operations through unseen cases, and a research project built on a local firm." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysis of unseen texts, written comparison and oral rehearsal for the Individual Oral." },
    { name: "IB Hindi A Literature", levels: "HL / SL", description: "Guided reading of set texts and analytic essays in the student's strongest language." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, networks and databases, with a working solution for the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches, methods and studies, with essay planning that keeps evidence at the centre." },
    { name: "IB Geography", levels: "HL / SL", description: "Population, resources and change, using Gangetic plain flooding and agriculture for case material." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Systems thinking applied to soil, water and sanctuary ecology such as Sandi's wetlands." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Questions about how we know what we know, with exhibition practice and essay planning." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Choosing a question, planning research and structuring an argument; writing is the student's task." },
  ],

  igcseSubjectsIntro:
    "Most Hardoi IGCSE candidates prepare privately while attending a local school, so the plan covers content and exam logistics. We match on board, code and tier and prefer tutors who have coached independent candidates.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended techniques, algebra and geometry, with attention to the calculator and non-calculator papers separately." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Class 9-10", description: "Calculus, functions and trigonometry, ahead of Diploma Maths or engineering pathways." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel's layout and command words, practised on their own past papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Motion, electricity, waves and thermal physics, with equation handling and graph reading." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, periodic trends, electrolysis and organic chemistry, with practical questions rehearsed." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, inheritance, human systems and ecology, with data analysis practice." },
    { name: "IGCSE Combined and Coordinated Sciences", levels: "0653 / 0654", description: "Three sciences in one balanced schedule for busy students." },
    { name: "IGCSE Economics 0455", levels: "Class 9-10", description: "Core definitions and diagram accuracy, with agricultural markets as examples." },
    { name: "IGCSE English as a Second Language 0510", levels: "Class 9-10", description: "Reading, writing, listening and speaking for students who use Hindi or Awadhi at home." },
    { name: "IGCSE Business Studies 0450", levels: "Class 9-10", description: "Applying business terms to the case on the paper rather than reciting notes." },
    { name: "IGCSE Computer Science 0478", levels: "Class 9-10", description: "Pseudocode, logic and Python for the practical-style paper." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Class 9-10", description: "A language grade to sit beside sciences and Maths." },
  ],

  regionsTitle: "Hardoi city and district areas we support online",
  regionsIntro:
    "Address does not decide who can be taught, since every lesson is on video. We list these places so a tutor understands each student's real journey, power supply and study hours.",
  regions: [
    { name: "Hardoi railway station area", note: "A busy central belt with railway-linked and trading households and a mix of older lanes where broadband is dependable." },
    { name: "Lucknow Road side", note: "The southern approach towards the state capital, with newer plots and families who travel to Lucknow often." },
    { name: "Shahabad road side", note: "The western direction towards Shahabad, used by families with links to Shahjahanpur and Bareilly." },
    { name: "Civil Lines and the Collectorate area", note: "Government-service and court families, many on transfers, and quiet lanes suited to evening study." },
    { name: "Main market and Chowk", note: "The commercial centre, with trading families who work late and prefer later lessons." },
    { name: "Sandila", note: "A major town in the district, known for its sweets and old lanes, with its own school and coaching market." },
    { name: "Shahabad", note: "A significant town in the district with a history of learning and a sizeable student population." },
    { name: "Bilgram and Sawayajpur", note: "Older towns in the district, where long-established families often hold both land and government jobs." },
    { name: "Pihani and Mallawan", note: "Smaller towns where connectivity is the main scheduling question and a test call in the trial lesson settles it." },
    { name: "Sandi and the bird sanctuary side", note: "Rural households near the wetlands, where lessons run after farm work ends and mobile data is often the backup." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service. Schools mentioned here are the nearest we could check and have not endorsed us, and there is no tie between IB Gram and them, the IBO, Cambridge or Pearson Edexcel. We have not confirmed any IB or IGCSE school in Hardoi and we name none.",
  schoolClusters: [
    {
      city: "Hardoi district",
      note: "We could not confirm any IB World School or Cambridge or Edexcel centre in Hardoi district, so we name none. Local schools follow UP Board, CBSE or ICSE, and international study is normally added through tutoring and a private exam entry.",
      schools: [],
    },
    {
      city: "Nearby: Lucknow",
      note: "About 110 kilometres away, Lucknow is the natural school-hunting city for Hardoi. It has one confirmed IB primary school and a few Cambridge IGCSE options, and some families board or relocate for Class 9 or 11.",
      schools: ["Modern School, Lucknow", "City Montessori School, Cambridge Campus", "GD Goenka Public School, Lucknow"],
    },
    {
      city: "Nearby: Kanpur",
      note: "Kanpur is a similar rail journey the other way and has a Cambridge IGCSE school that comes up when families talk about relocation.",
      schools: ["Billabong High International School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "The largest IB and IGCSE cluster in northern India, and the only area where IB Gram also sends tutors to homes.",
      schools: ["Pathways World School, Aravali", "The Shri Ram School, Aravali"],
    },
  ],

  modesIntro:
    "Hardoi families use three patterns. The right one depends on whether the child attends a school elsewhere, studies locally, or is preparing for a move.",
  modes: [
    {
      title: "Weekly one-to-one lessons at a fixed hour",
      description:
        "One tutor, one student, on video with a whiteboard and a written note after each lesson, at an hour the household protects each week.",
      bullets: [
        "Slots after dinner or on weekend mornings",
        "A tutor who tracks the student's mistakes over time",
        "Extra lessons added before mock exams",
        "Notes that let parents follow the plan",
      ],
    },
    {
      title: "Tutoring alongside a local school",
      description:
        "The child stays at a UP Board, CBSE or ICSE school and the tutor teaches IGCSE or IB material separately.",
      bullets: [
        "No change to school routine or friendships",
        "A low-risk way to test IGCSE Maths or Sciences",
        "Good for Class 8 to 10 students planning ahead",
        "Bridges the gap before any school move",
      ],
    },
    {
      title: "Exam-centred private candidate plan",
      description:
        "For students entering papers privately, the plan works backwards from the exam dates with paper practice, mark schemes and realistic entry logistics.",
      bullets: [
        "Paper timetable set from the first week",
        "Regular timed practice with feedback",
        "Guidance on centres reachable from Hardoi or Lucknow",
        "Clear written progress notes for parents",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Hardoi have an IB or Cambridge school?",
      paragraphs: [
        "We could not confirm one. Hardoi's schools follow the UP Board, CBSE and ICSE, and none that we checked appears as an authorised IB World School or as a Cambridge or Edexcel exam centre. Where we cannot verify a claim, we leave the school off this page.",
        "This is common across district towns in central Uttar Pradesh, and it shapes what a family can do. The cheapest and most flexible route is to keep the child at a school the family trusts and add an IGCSE or IB subject through a tutor. The most complete route is to enrol at a campus in Lucknow, Kanpur or Delhi NCR.",
        "Lucknow deserves a realistic description. It is about 110 kilometres away, roughly two and a half hours by road, and its schools include one IB primary campus and a handful of Cambridge options. A daily commute from Hardoi is not practical, so the choice becomes boarding or relocation.",
        "Because that decision is expensive and hard to reverse, a sensible first step is a trial online lesson in the subject the child finds hardest. It costs nothing and often clarifies whether a change of curriculum is worth the disruption.",
      ],
      bullets: [
        "No confirmed IB or IGCSE school in Hardoi district",
        "Lucknow, about 110 km away, is the closest hub with options",
        "Daily commuting is impractical; boarding or relocation is the choice",
        "A trial lesson tests the fit before major decisions",
      ],
    },
    {
      heading: "Who in Hardoi looks for IB and IGCSE tuition?",
      paragraphs: [
        "Demand is small but distinct. One group is families with a member working abroad, whose children may join them later and who want a syllabus that transfers. Hardoi, like much of Awadh, has a long tradition of sending people to the Gulf, the UK and North America, and parents often plan for that.",
        "Another group works in the sugar mills, cold storage, oilseed processing and trading that the district's economy supports. These are established business families with a strong interest in commerce, economics and a broader education for their children.",
        "Government officers, judges and teachers posted at the district headquarters form a third group. Their children may have started the IB or IGCSE in a larger city and need continuity through a transfer, or they may be considering it for the first time.",
        "The fourth group is simply families who have watched a child struggle with rote-heavy exams and want a syllabus that rewards reasoning. Their most common starting point is IGCSE Maths or Sciences at Class 9, taught alongside the existing school.",
      ],
    },
    {
      heading: "How do UP Board, CBSE, ICSE, IGCSE and IB compare for Hardoi students?",
      paragraphs: [
        "UP Board syllabi are the most widely taught in Hardoi, followed by CBSE and a smaller number of ICSE schools. All three end with board examinations that lean on prescribed textbooks and reward accurate recall in a set format. The board results are the gateway to most state and national entrance routes.",
        "IGCSE and IB reward a different set of skills. Papers ask students to interpret unfamiliar data, justify a choice, or explain why something happens, and marks are given for method as well as final answers. A student who has memorised solutions can find the first IGCSE past paper disorienting.",
        "The difference in language is real. IGCSE and IB are taught and examined in English, and many Hardoi students come from Hindi-medium schooling. Our tutors treat vocabulary and paragraph structure as part of the subject, because marks in Biology or Economics are lost on wording before they are lost on content.",
        "Where the courses lead also differs. UP Board and CBSE keep JEE, NEET and state entrance routes direct. IGCSE is a Class 10 qualification and leads to A Level or the IB. The IB Diploma is accepted for direct admission abroad and, through equivalence and CUET-UG, for many Indian universities.",
      ],
      table: {
        caption: "Boards a Hardoi family may weigh",
        columns: ["Board", "How common in Hardoi", "Assessment style", "Next step after school"],
        rows: [
          ["UP Board", "Most common", "Textbook-based written answers", "State and national entrance exams, state universities"],
          ["CBSE", "Common in private schools", "NCERT-based recall and steps", "JEE, NEET, CUET routes"],
          ["ICSE / ISC", "Fewer schools", "Broad syllabus, strong English", "Indian universities, many abroad"],
          ["Cambridge or Edexcel IGCSE", "Not confirmed locally", "Applied questions and tiers", "A Level, IB Diploma or Class 11 board course"],
          ["IB Diploma", "Not confirmed locally", "Inquiry, coursework and final papers", "Direct entry abroad; equivalence and CUET-UG in India"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Hardoi, and what sets the price?",
      paragraphs: [
        "We do not print a price list, because the figure depends on the student. After hearing the brief, we send the fee in writing before the free trial, so you have it in hand while deciding.",
        "Subject and level carry the most weight. Higher Level sciences, Additional Maths and Extended-tier Maths need specialists who are harder to find than tutors for younger children. The number of lessons per week and the length of each one follow, and so does how much of the syllabus has to be taught from the beginning.",
        "Compared with tuition in Lucknow, one thing is different: there is nothing for travel. A family in Sandila or Shahabad pays the same as one near the railway station, since the lesson comes by video. Some Hardoi families ask whether local tuition would be cheaper, and for school-board subjects it often is, though it rarely covers IB or IGCSE material.",
        "A last factor is timing. Beginning well before an exam gives room to teach steadily. Beginning in the final term means squeezing more into each week, and the written plan says so clearly, with no contract that binds a family if plans change.",
      ],
      bullets: [
        "Subject and level set the base rate",
        "Weekly hours and session length adjust the total",
        "Starting late needs more lessons per week",
        "No travel charge anywhere in the district",
      ],
    },
    {
      heading: "Online tutor, local coaching, private teacher or self-study: how do they compare in Hardoi?",
      paragraphs: [
        "Hardoi has many coaching classes and independent teachers, and for school-board subjects they can be excellent value. Being close matters to parents, and nothing on this page argues against a good local teacher for CBSE or UP Board work.",
        "The gap is the international syllabus. Coaching institutes here prepare students for board exams and competitive entrance tests, using NCERT-style material. They are not set up to teach IGCSE Extended Physics or IB Economics HL, and a student who joins a batch may spend hours on content that will not appear on the papers.",
        "A private teacher who visits the house can do very well with a single subject, but seldom across the whole syllabus. Self-study using past papers is possible for disciplined older students, though without feedback a student may repeat the same errors for months.",
        "An online tutor selected for the syllabus brings the missing expertise, at the cost of needing a working connection and a student who does the work between lessons. For most Hardoi families, that trade-off is worth making for the two or three subjects that matter most.",
      ],
      table: {
        caption: "Choosing how to study IB or IGCSE from Hardoi",
        columns: ["Route", "Strong point", "Weak point for IB or IGCSE"],
        rows: [
          ["Online one-to-one tutor", "Syllabus-matched, private, flexible hours", "Needs a steady connection and self-discipline"],
          ["Local coaching class", "Nearby, structured, familiar to parents", "Built around board and entrance exams, not IB or Cambridge"],
          ["Private teacher at home", "Personal attention and no screen", "Few have taught IB or Cambridge papers; rarely all subjects"],
          ["Self-study with past papers", "Low cost, fully flexible", "No feedback on lost marks"],
          ["Boarding or moving to Lucknow", "A complete school and peer group", "Family separation and higher overall cost"],
        ],
      },
    },
    {
      heading: "How do harvest, fog, heat and Holi affect the study year in Hardoi?",
      paragraphs: [
        "The agricultural calendar reaches into many households. April is the wheat harvest, and families with land are busy, sometimes for weeks. That coincides with the start of exam season for IB and Cambridge, so we plan lessons at a lighter pace and keep evening slots that fit around harvest work.",
        "Summers are severe. The district has recorded temperatures above 48 degrees Celsius in June, and afternoons are no place for concentrated study. We shift lessons to the cooler evening and to Sunday mornings, and we keep sessions shorter when the heat is at its worst.",
        "Winter brings dense fog that can delay trains and buses for hours, so some families use a fog-delayed morning to catch up on online study instead of missing it. Cold evenings favour indoor lessons and shorter breaks, and we keep January and February focused on mocks and internal assessment feedback.",
        "Holi has a special meaning here, since Hardoi is known as Prahlad Nagari, tied to the story of Prahlad and Holika. The festival week in March is protected from lessons. Diwali and Chhath in October and November are also planned around, and the monsoon between July and September may interrupt power and connectivity.",
      ],
      table: {
        caption: "A Hardoi study calendar",
        columns: ["Time of year", "What is happening locally", "Study approach"],
        rows: [
          ["March", "Holi, Prahlad Nagari celebrations, final preparation for summer papers", "Protect festival week, then focus on past papers"],
          ["April to June", "Wheat harvest, extreme heat, IB and Cambridge papers", "Evening lessons, shorter sessions, timed practice"],
          ["July to September", "Monsoon, new school year, Class 9 and 11 begin", "Build foundations, keep a backup slot for power cuts"],
          ["October to November", "Dussehra, Diwali, Chhath and the Cambridge autumn series", "Light weeks and resit preparation"],
          ["December to February", "Fog, cold and mocks", "Indoor lessons, mock papers and IA feedback"],
        ],
      },
    },
    {
      heading: "Where can Hardoi students go after IB or IGCSE?",
      paragraphs: [
        "Most Hardoi students who take an international course have a plan that involves leaving the district for college. The choices fall into Indian universities, private universities with an international outlook, and study overseas.",
        "For Indian universities, the IB Diploma is treated as equivalent to Class 12 by the Association of Indian Universities, and IB students can register for CUET-UG. IGCSE alone is a Class 10 qualification, so it must be followed by A Level, the IB Diploma or a board Class 11. Eligibility for JEE, NEET and similar exams for IB and Cambridge students changes, so we ask families to check each year.",
        "Nearby options include Lucknow University and the state's private universities in Lucknow, Delhi University colleges, and engineering and management institutions across the region. Families with a Gulf or UK connection often look at those countries first.",
        "Abroad, IB Diploma results are widely understood, with HL Maths and sciences helping applications to engineering, medicine and economics. Subject choice at Class 11 should follow the intended degree, so we suggest a conversation about the degree before subjects are locked in.",
      ],
      bullets: [
        "IB Diploma is treated as Class 12 equivalent for Indian admissions",
        "IGCSE needs a follow-on stage: A Level, IB or Class 11",
        "JEE and NEET conditions for international boards should be checked yearly",
        "HL subjects should follow the intended degree",
      ],
    },
    {
      heading: "IB Maths AA or AI and the sciences: what does a Hardoi tutor cover?",
      paragraphs: [
        "Choosing between Analysis and Approaches and Applications and Interpretation is the first Maths decision. AA leans towards calculus, algebra and proof and suits engineering or physics. AI leans towards statistics and modelling and suits economics, business, geography and the life sciences.",
        "A Hardoi student whose school taught from NCERT-style texts often has strong procedural fluency. The gap is in unfamiliar problem types and in writing out reasoning, both of which the tutor targets with timed questions, and in the Exploration, which needs an early idea and steady drafting.",
        "In Physics, Chemistry and Biology, the shift is from remembering to explaining. Command terms such as discuss, deduce and outline have specific meanings, and tutors spend time training students to answer the question actually asked rather than everything they know.",
        "Practical work is handled with care. Without a school lab, the Scientific Investigation is designed around simple materials, published datasets or simulations, and the tutor explains the reasoning behind good design rather than carrying out any of the work.",
      ],
    },
    {
      heading: "Should a Hardoi IGCSE student sit Core or Extended?",
      paragraphs: [
        "Extended is usually the better choice for students who might follow with the IB Diploma or A Level sciences. Core limits the highest grade and does not cover all the content the later courses assume, and a switch later can be painful.",
        "We do not rely on guesses. A short diagnostic in the first weeks shows whether a student loses marks on method, arithmetic or reading the question, and the tier decision follows from that evidence.",
        "Edexcel's Foundation and Higher tiers work on the same logic, with Higher reaching grade 9 and Foundation ending at 5. That ceiling matters for students who want to continue with sciences or Maths.",
        "It is fine to mix tiers. A student might sit Extended in Maths and Chemistry and Core in a subject that will not be carried forward, and a good tutor explains the trade-offs to parents in plain terms.",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB and IGCSE live to students in Hardoi, at ease with private candidates and with children whose schools are elsewhere.",

  process: [
    { title: "Send the details", description: "Tell us the board, subject, level, current school and any exam date, plus what the child finds hard." },
    { title: "Review the shortlist", description: "We suggest tutors with the right syllabus experience and say why they fit." },
    { title: "Try a free lesson", description: "Your child works a real topic live with the tutor, with no charge and no commitment." },
    { title: "Agree the plan", description: "Weekly slots, topics, pace and the fee are put in writing before you decide." },
    { title: "Keep checking", description: "We review progress every few weeks and change the tutor if the fit is not right." },
  ],

  whyPoints: [
    { title: "Honest about Hardoi", description: "We say plainly that no local IB or IGCSE school is confirmed and how families cope." },
    { title: "Syllabus-first matching", description: "Tutors are chosen for the exact board, code and tier your child sits." },
    { title: "Fits an Awadh year", description: "Plans respect harvest, fog, heat and festival weeks." },
    { title: "A trial before any fee", description: "You judge the teaching from a real lesson." },
    { title: "Work stays the student's", description: "Tutors coach; assessed pieces are never written for a student." },
    { title: "Easy to change", description: "No lock-in and a new tutor whenever the match is not working." },
  ],

  faqs: [
    {
      question: "Do IB or IGCSE tutors come to homes in Hardoi?",
      answer:
        "No, tutors do not come to homes in Hardoi. Our home visits are limited to Gurugram and parts of Delhi NCR. A Hardoi student learns through a live, one-to-one video lesson at a fixed weekly time, which keeps the personal attention of home tuition without needing anyone to travel.",
    },
    {
      question: "Is there any IB school in Hardoi?",
      answer:
        "We could not confirm one. Schools in Hardoi follow UP Board, CBSE or ICSE. The nearest place with confirmed IB and Cambridge options is Lucknow, about 110 kilometres away, where Modern School runs the IB primary programme. Most Hardoi families keep their child at a local school and add IB or IGCSE subjects through a tutor.",
    },
    {
      question: "How much do IB and IGCSE tutors charge in Hardoi?",
      answer:
        "The fee depends on subject, level, lessons per week and how much of the syllabus must be taught. There is no travel charge. We send the rate in writing before your child's free trial, so you can compare it with local options and decide calmly.",
    },
    {
      question: "Can my child sit IGCSE exams from Hardoi?",
      answer:
        "Yes, usually as a private candidate through an approved exam centre. The centre may be in Lucknow or another city, so confirm the location and entry deadlines early. We help with preparation and planning, though registration is the family's responsibility.",
    },
    {
      question: "Which IB subjects are most in demand here?",
      answer:
        "Maths, Physics, Chemistry, Biology and Economics lead, with English, Business Management and Computer Science next. Hindi A is popular among students who want their strongest language examined. If your subject is less common, ask and we will look for a specialist.",
    },
    {
      question: "Will the tutor write the IA or Extended Essay?",
      answer:
        "No. Tutors explain criteria, help narrow a workable topic, suggest how to plan data collection and give honest feedback on drafts. The submitted work must be the student's, and doing it for them risks penalties from the exam body.",
    },
    {
      question: "Do you teach MYP and PYP too?",
      answer:
        "Yes, the full continuum is covered. PYP support centres on English reading and number sense, while MYP support unpacks assessment criteria and helps keep the Personal Project on time. Sessions for younger children are shorter and more frequent.",
    },
    {
      question: "What is the difference between Cambridge and Edexcel IGCSE?",
      answer:
        "They are separate boards with different codes and paper styles. Cambridge commonly uses Core and Extended tiers, while Edexcel uses Foundation and Higher. Both lead on to A Level or the IB. We match the tutor to the board your child is sitting.",
    },
    {
      question: "Is internet in Hardoi good enough for online lessons?",
      answer:
        "In most parts of the city it is, and mobile data works as a backup. Smaller towns and rural areas can be patchier, and monsoon or summer power cuts occur. We test the line in the trial lesson and agree a spare slot, and missed lessons are rescheduled.",
    },
    {
      question: "How do wheat harvest and fog affect lessons?",
      answer:
        "April harvest weeks can be busy for farming families, so we keep evening slots and lighter loads then. Winter fog rarely affects an online lesson, but it can delay other travel, so mornings are sometimes used for catch-up. The written plan notes these seasons from the start.",
    },
    {
      question: "My child studies in Hindi medium. Can they manage IGCSE or IB?",
      answer:
        "Many do with preparation. Written English is the main challenge, so tutors build vocabulary and paragraph structure alongside content. IGCSE English as a Second Language can run in parallel, and IB students may take Hindi A for a strong result in their own language.",
    },
    {
      question: "When is the best time to begin tutoring?",
      answer:
        "The natural start is the beginning of a course: Class 9 for IGCSE and Class 11 for the Diploma. Beginning in Class 8 lets a student build English and Maths foundations. A start within six months of the exams is possible, but the plan then focuses on technique.",
    },
    {
      question: "Should we move to Lucknow for an IB school?",
      answer:
        "That depends on the family. A move gives a full classroom and peers, but Hardoi is about 110 kilometres away, so it means boarding or relocating, and costs rise sharply. Many families first try a term of online tutoring to see whether the child enjoys the style.",
    },
    {
      question: "Can IB students from Hardoi apply to Indian universities?",
      answer:
        "Yes. The IB Diploma is treated as equivalent to Class 12 and CUET-UG is open to IB students. IGCSE alone is a Class 10 qualification and needs a follow-on stage. JEE and NEET eligibility for international boards changes, so check the current rules each year.",
    },
    {
      question: "What happens in the free trial lesson?",
      answer:
        "Your child works through a real topic from their own syllabus with a shortlisted tutor on video. There is no fee and no obligation. Afterwards the tutor sends a short note on strengths and gaps with a proposed plan, and you decide whether to continue.",
    },
    {
      question: "What if the tutor is not a good match?",
      answer:
        "Tell us and we will suggest another one. We review progress with parents every few weeks and change tutors if pace, style or subject depth is wrong. There is no penalty for switching.",
    },
    {
      question: "How do I get started?",
      answer:
        "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board, subject, level and current school. We reply with a shortlist and trial times, usually in the evening, and nothing is charged until you have met the tutor.",
    },
  ],

  internalLinks: [
    { label: "Lucknow", href: "/lucknow/", description: "IB and IGCSE tutoring for the state capital and its confirmed schools." },
    { label: "Shahjahanpur", href: "/shahjahanpur/", description: "Online tutoring for the neighbouring Rohilkhand district." },
    { label: "Sitapur", href: "/sitapur/", description: "IB and IGCSE support for families in the adjoining district." },
    { label: "Kanpur", href: "/kanpur/", description: "Tutoring and school context for Kanpur." },
    { label: "All India cities", href: "/india/", description: "Every Indian city we tutor online." },
    { label: "Gurgaon and Delhi NCR", href: "/gurgaon/", description: "The only place where IB Gram tutors also visit homes." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How IB tutoring works across PYP, MYP and DP." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subjects explained." },
    { label: "Diploma Programme", href: "/programmes/dp/", description: "HL and SL choices and the Diploma Core." },
    { label: "Admissions test prep", href: "/admissions/test-prep/", description: "Preparation for school and university admission tests." },
    { label: "Contact us", href: "/contact-us/", description: "Send a brief and book a free trial lesson." },
  ],

  closingHeading: "Arrange a free IB or IGCSE lesson for your Hardoi student",
  closingBody:
    "Tell us the board, subject and level, the child's current school and any exam date ahead. We will send a tutor shortlist and trial times, and you pay nothing until you have watched the tutor teach. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
