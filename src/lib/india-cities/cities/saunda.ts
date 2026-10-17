import type { CitySeoPage } from "../types";

/**
 * Saunda (Patratu block, Ramgarh district, Jharkhand), a Central Coalfields census town in the Barka Sayal
 * Area. No IB or IGCSE school could be confirmed locally, so stripSchools is empty and the clusters reuse
 * Kolkata and Delhi NCR boarding names already verified on the Ramgarh, Ranchi and Bokaro pages.
 */
export const saunda: CitySeoPage = {
  slug: "saunda",
  countryName: "Saunda",
  countryNameLong: "Saunda, Ramgarh district, Jharkhand",
  demonym: "Saunda",
  flagCode: "in",
  countryCode: "IN",
  state: "Jharkhand",
  stateCode: "IN-JH",
  region: "Jharkhand, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-afternoon and evening lessons that sidestep colliery shift changes, Chhath week and the power dips of peak summer",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.66, longitude: 85.35 },
  alternateNames: ["Sounda", "Saunda colliery", "Saunda Ramgarh", "Saunda CCL", "Saunda Jharkhand"],
  wikipedia: "https://en.wikipedia.org/wiki/Saunda",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Saunda | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutoring for students in Saunda, Ramgarh: live online private lessons in Maths, sciences and more, timed around coalfield life. Free first lesson.",
  h1: "IB and IGCSE Tutors and Private Online Tuition in Saunda",
  heroEyebrow: "PRIVATE ONLINE IB & IGCSE TUITION IN SAUNDA, RAMGARH",
  heroSubtitle:
    "Private tuition from home in Saunda is a realistic idea for IB and IGCSE students, provided the word home means the student's own desk and the teacher arrives by video. A family in the coalfield township sends us the board, the subject and the level, and we return a short list of tutors who have taught that exact paper before. Nobody travels; nobody loses an hour on the Ramgarh road.",
  primaryKeyword: "IB and IGCSE tutors in Saunda",
  imageAltText: "Student in a Saunda colliery township home studying IGCSE Chemistry with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Saunda",
    "IGCSE tutor Saunda",
    "IB home tuition Saunda",
    "IGCSE home tuition Saunda",
    "IB private tuition Saunda",
    "IB Maths tutor Saunda",
    "IGCSE Maths tutor Saunda",
    "IB Physics tutor Saunda",
    "IB Chemistry tutor Saunda",
    "IB Biology tutor Saunda",
    "IB DP tutor Saunda",
    "IB MYP tutor Saunda",
    "IB PYP tutor Saunda",
    "IGCSE online tuition Saunda",
    "online IB tutor Saunda Ramgarh",
    "IB tutor Patratu",
    "IGCSE tutor Ramgarh Cantonment",
    "IB tutor Sounda Jharkhand",
    "online tutor Barka Sayal",
    "IGCSE Biology tutor Saunda",
  ],

  heroTrustPoints: [
    "Tutors who have taught the specific IB or IGCSE paper before",
    "Live lessons planned around shift timings and power supply",
    "Free first lesson, then a written quote, then your decision",
    "No connection to the IB, Cambridge, Pearson or any school",
  ],
  heroStats: [
    { value: "MYP and DP", label: "Most requested IB stages" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards taught" },
    { value: "Fully online", label: "Every Saunda lesson" },
    { value: "IST", label: "Indian working hours" },
  ],

  intro: {
    heading: "Who looks for IB and IGCSE tutors in Saunda, and why",
    paragraphs: [
      "Saunda is a coalfield township in the Patratu block of Ramgarh district, built around underground mines run by Central Coalfields Limited in its Barka Sayal Area. Its schools follow the Jharkhand Academic Council or CBSE syllabus, and a conversation about the IB or Cambridge and Edexcel IGCSE tends to start after a family receives a transfer order, or when a child's ambitions point beyond Jharkhand.",
      "Anyone searching for IB and IGCSE tutors in Saunda should know what to expect. Teaching is online. A tutor meets one student at a time through a video lesson, and there is no visit to the colony, because tutors do not travel to Saunda and in-person home tuition runs only in Gurugram and parts of Delhi NCR. The arrangement suits a township where outside specialists have always been hard to reach.",
      "Coal Indian families are accustomed to mobility. A parent posted at a mine today may be in Dhanbad, Nagpur or Singrauli in three years, and an international curriculum travels more easily than a state syllabus. Some households also include a relative working overseas, which adds another reason to choose a qualification recognised widely.",
      "IB Gram works on its own. It is not run by the International Baccalaureate, by Cambridge, by Pearson Edexcel or by any school we mention, and we cannot arrange admission anywhere. Tutors explain topics, rehearse exam technique and review drafts for clarity; they never write the student's Internal Assessment, Extended Essay, TOK essay or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP coaching across subjects",
      "Cambridge IGCSE and Pearson Edexcel IGCSE, Core, Extended, Foundation and Higher",
      "Classes arranged around shift patterns and the school day",
      "A short note after each lesson for the family",
      "A tutor swap if the first match is not right",
    ],
  },

  programmesIntro:
    "Since Saunda has no confirmed IB or IGCSE campus, students meet these programmes through transfers, online schools or private preparation. The descriptions below explain each IB stage briefly and say what we usually see from coalfield families.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Young children work through units built around a central idea, asking questions and recording what they find. Grade 5 concludes with the Exhibition, a long inquiry the child leads and explains to an audience.",
      countryNote:
        "For a primary child in a mining township, support usually means English reading stamina and number confidence, plus help finding an Exhibition question rooted in something visible nearby, such as the river, the mines or village markets.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are graded against four criteria each, so a correct answer can still lose credit if it is not justified or communicated well. A Personal Project in the final year asks the student to manage a goal from proposal to product.",
      countryNote:
        "Most Saunda requests here come from students arriving from a JAC or CBSE school who are unfamiliar with criteria-based marking, and from parents who want a steady guide through the Personal Project.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A student takes six subjects, three at Higher Level, along with the Extended Essay, TOK and CAS. Final papers are sat in May or November, while the internal assessments in each subject are completed during the two years.",
      countryNote:
        "Saunda DP students lean towards Maths, Physics and Chemistry, often with engineering entrance exams in mind, and some choose Geography or ESS given the mining landscape around them.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller set of Diploma courses is combined with a career-related qualification, a reflective project and language development.",
      countryNote:
        "We seldom see the CP from this part of Jharkhand. When it appears, we help with the academic courses and with a realistic plan for the reflective project.",
    },
  ],

  subjectsIntro:
    "Saunda students are placed by course and level rather than by subject name alone. The tutor who takes a Higher Level Chemistry student through organic mechanisms is not necessarily the right person for a Class 9 IGCSE Biology learner, so we check the syllabus code before suggesting anyone.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions, vectors and proof; JAC and CBSE students usually cope well with routine algebra and stumble when a question asks them to justify a method." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology; the exploration is stronger when the data comes from a setting the student knows, for instance coal output, rainfall or bus schedules." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves and fields, with an internal investigation where careful uncertainty work counts for more than a neat final graph." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, equilibrium, organic chemistry and the practical skills that support the investigation; coal chemistry can make combustion topics concrete." },
    { name: "IB Biology", levels: "HL / SL", description: "Genetics, physiology and ecology, where careful definitions and data interpretation matter as much as recall." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets, macro policy and development; state-owned enterprises and resource economics offer real examples for evaluation." },
    { name: "IB Business Management", levels: "HL / SL", description: "Organisational structure, finance and operations, tested through case studies that reward a justified recommendation." },
    { name: "IB Geography", levels: "HL / SL", description: "Resource use, urban change and fieldwork; mining landscapes and river basins supply strong local material." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Energy, land use and pollution, studied with attention to evidence and competing viewpoints." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysing texts, preparing the oral and writing formal comparative essays for students whose daily language is Hindi." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, networks and databases, with a project judged on documentation as much as on function." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Reading, writing and speaking to IB criteria for students who already speak Hindi and need to show it analytically." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches to behaviour and research methods, where named studies and clear argument earn the marks." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Questioning how we know what we claim to know, taught through discussion, not through supplied answers." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "A self-directed 4,000-word study; a tutor helps narrow the question and plan the argument, while the research and writing remain the student's." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Investigation planning, data analysis and reflection written to the criteria descriptors." },
  ],

  igcseSubjectsIntro:
    "IGCSE students in and around Saunda typically take Cambridge or Edexcel papers through an online school or as private candidates. A tutor is chosen after we know the syllabus code and whether the student is on the Core or Extended, Foundation or Higher tier.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Core / Extended, Foundation / Higher", description: "Wider topic coverage than the typical Class 10 course, with marks lost as often to presentation of working as to mistakes." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "A step up in calculus and trigonometry, useful for students heading into IB Maths AA or JEE-style preparation." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, electricity and waves, with a written practical paper that tests experimental design without a lab." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Reactions, bonding, the periodic table and organic basics, with qualitative analysis learnt as a routine." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Broad content and data-handling questions where reading the stem carefully saves marks." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Algorithms, pseudocode and programming, well suited to logical thinkers." },
    { name: "IGCSE English First or Second Language", levels: "Grade 9-10", description: "Writing for different audiences, summary tasks and listening, tailored to students who speak Hindi or Bhojpuri at home." },
    { name: "IGCSE Geography", levels: "Grade 9-10", description: "Physical and human themes with case studies, including resource extraction and river systems." },
    { name: "IGCSE Economics and Business Studies", levels: "Grade 9-10", description: "Short answers, data response and clear definitions." },
  ],

  regionsTitle: "Saunda and nearby areas where our IB and IGCSE tutors teach online",
  regionsIntro:
    "Lessons reach students through a screen, so these areas matter only for timing and connection. Notes describe what the day typically looks like in each, which helps us place slots. No tutor comes to any of these places.",
  regions: [
    { name: "Saunda colliery township", note: "Staff quarters and the market cluster around the mines. Shift changes affect when fathers and mothers are available to supervise younger children." },
    { name: "Barka Sayal Area colonies", note: "Quarters spread across the wider CCL area, often with reliable colony electricity but variable broadband. A phone hotspot is sensible backup." },
    { name: "Patratu", note: "The block headquarters and site of a major power station, with a mix of industrial and farming families and bus links toward Ramgarh and Ranchi." },
    { name: "Ramgarh Cantonment", note: "A larger town with defence and industrial families, and more access to coaching and CBSE schools." },
    { name: "Seota and Sanri", note: "Smaller census towns in the same block, where households often rely on mobile data for online classes." },
    { name: "Orla", note: "A coalfield settlement where many families work in the mines, so evening slots suit best." },
    { name: "Ranchi road corridor", note: "Families who commute to Ranchi for work or coaching. Lessons can be scheduled before or after the trip." },
    { name: "Barkakana and Gola", note: "Railway and mining communities toward the north and east who sometimes join Saunda timetables." },
    { name: "Rajrappa area", note: "A pilgrimage and river-confluence area where festival days can block roads, which is another reason to teach on screen." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service, not affiliated with the IB, Cambridge, Pearson or any school. We could not confirm an IB or IGCSE school in Saunda, so the groups below name schools in cities that Jharkhand families look to, whose programmes we have checked on our Ramgarh, Ranchi and Bokaro pages. Please verify admissions and curriculum with each school.",
  schoolClusters: [
    {
      city: "Saunda and Ramgarh district: limited local choice",
      note: "Schools here teach JAC or CBSE syllabi. We found no IB or IGCSE school confirmed in the district, so most international-curriculum study happens privately or online.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "Kolkata is the nearest major city with verified international schools, reached by train from Jharkhand.",
      schools: ["Calcutta International School", "The Heritage School, Kolkata"],
    },
    {
      city: "Nearby: Delhi NCR boarding routes",
      note: "Some families send older children to boarding schools in the Gurugram area.",
      schools: ["Pathways World School", "GD Goenka World School"],
    },
  ],

  modesIntro:
    "Online is the only format offered in Saunda. Families generally choose among three patterns, depending on where the student stands.",
  modes: [
    {
      title: "Weekly private online lessons",
      description:
        "One student and one tutor meet live once or twice a week at fixed times, with shared screens and a digital whiteboard for working.",
      bullets: [
        "Tutors not visiting Saunda; lessons are online",
        "Same tutor each week for continuity",
        "Notes sent after every lesson",
        "Home visits run only in Gurugram and parts of Delhi NCR",
      ],
    },
    {
      title: "Exam-window intensives",
      description:
        "A denser block of lessons in the six to eight weeks before papers, built around past papers and mark-scheme reading.",
      bullets: [
        "Timed practice under exam conditions",
        "Targeted review of weak topics",
        "Command-word and answer-structure drills",
        "Plans set around Chhath and Diwali",
      ],
    },
    {
      title: "Catch-up for transferring students",
      description:
        "For a student who has just moved into an IB or IGCSE course from a JAC or CBSE school, a series of lessons that closes vocabulary and method gaps quickly.",
      bullets: [
        "A diagnostic first lesson",
        "Academic English and lab-report practice",
        "Steady pace to rebuild confidence",
        "Parent updates every few weeks",
      ],
    },
  ],

  sections: [
    {
      heading: "Does a coalfield family need an international curriculum?",
      paragraphs: [
        "Not every family does, and we say so plainly. Plenty of Saunda students do well on the JAC or CBSE route and go on to Ranchi University, BIT Mesra or IIT (ISM) Dhanbad. The IB or IGCSE makes sense when there is a specific reason: a likely transfer, a plan for study abroad, or a student who would flourish with more inquiry and less memorisation.",
        "Central Coalfields employees know transfers well. A posting can move a household from the Ramgarh area to Hazaribagh, Dhanbad or a central-India coalfield, and every move can mean a new board and a disrupted Class 10 or 12. An international qualification is tied to the student, not the school, and can be continued online almost anywhere.",
        "Some Saunda families also have relatives in the Gulf, the UK or North America, and parents in this position often ask whether the IB or A Level route would make applications easier. It can, for certain countries, though it adds work and does not guarantee admission anywhere.",
        "Our advice is to decide first on the student's likely path, then on the curriculum. We will happily talk through trade-offs, but we do not push any family towards a board it does not need.",
      ],
      bullets: [
        "A coalfield transfer that may change schools again",
        "A relative abroad and a plan to study there",
        "A student who enjoys projects and discussion",
        "Interest in engineering, economics or environmental science",
      ],
    },
    {
      heading: "How do JAC, CBSE, IGCSE and the IB Diploma compare for Saunda students?",
      paragraphs: [
        "The Jharkhand Academic Council board runs Class 10 and 12 examinations that lean on recall from textbooks, with results scored out of a total for each paper. CBSE is broadly similar but more uniform, with NCERT texts setting the pace. Both are direct routes to Indian universities and to state and national entrance exams.",
        "IGCSE is a two-year course ending in papers that test application and explanation. Students choose Core or Extended (Cambridge) or Foundation or Higher (Edexcel) in subjects such as Mathematics and the sciences. The IB Diploma extends this into a six-subject programme with Theory of Knowledge and an Extended Essay.",
        "What changes for a Saunda student crossing over is not intelligence but habit. Questions are framed differently, marks reward reasoning rather than the final answer alone, and practical skills feature in written papers.",
        "The table lays out the main differences in a form that parents have found useful when weighing a move.",
      ],
      table: {
        caption: "JAC, CBSE, IGCSE and IB Diploma side by side for Saunda families",
        columns: ["Point of comparison", "JAC board", "CBSE", "IGCSE (Cambridge or Edexcel)", "IB Diploma"],
        rows: [
          ["Style of questions", "Textbook recall, short and long answers", "NCERT-based, some application", "Application and data response", "Extended reasoning and investigation"],
          ["Availability in the Saunda area", "Widespread", "Available in Ramgarh and nearby schools", "Private or online only", "Private or online only"],
          ["Route into Indian universities", "Direct", "Direct", "Equivalence certificate usually needed", "Equivalence certificate usually needed"],
          ["Coursework and projects", "Limited practical marks", "Limited practical marks", "Practical skills in some papers", "Internal assessments, Extended Essay, TOK"],
          ["Portability after a transfer", "Tied to state", "Good across India", "Global", "Global"],
        ],
      },
    },
    {
      heading: "What goes into the cost of IB or IGCSE tuition in Saunda?",
      paragraphs: [
        "A tutoring rate is never a single figure, and we avoid quoting one here because it would be misleading for some students and too high or low for others. We quote in writing before any lesson is booked, after hearing about the course, level and schedule.",
        "Four factors dominate. First, the course: Higher Level Diploma Physics is a different undertaking from Foundation IGCSE English. Second, the tutor's specialist experience with that syllabus. Third, frequency, since twice a week in an exam year adds up differently from once a fortnight. Fourth, the duration of the engagement and any added exam-season sessions.",
        "Since all lessons are online, no travel cost is built in. A family in Saunda does not pay for a tutor's trip from Ranchi or Jamshedpur, nor do they lose an evening to a road journey. That is a real saving compared with hiring a specialist from a city and paying for the journey.",
        "Compared with group coaching in Ramgarh or Ranchi, private lessons cost more per hour but give a student the whole of it. The trial lesson is free, so you can judge value before committing.",
      ],
    },
    {
      heading: "Online tutor, coaching class, local home tutor or self-study: which is right?",
      paragraphs: [
        "Families around Saunda often start by asking what is nearby. Coaching classes exist in Ramgarh and Ranchi, mostly aimed at JEE, NEET and board exams. They serve those aims well, but rarely teach IB or IGCSE content and command words.",
        "A local private tutor can be wonderful for school-level subjects, and in a township like this a neighbour teacher may be known to everyone. Finding one who has taught IB Physics HL or IGCSE Extended Mathematics is another matter, and we have seen that search go nowhere for weeks.",
        "Self-study is an option for highly disciplined older students. Without feedback, though, it is easy to rehearse a wrong method for months and to misread what an examiner wants.",
        "Online one-to-one tuition costs more than a coaching batch but fits the syllabus exactly. Here is a fair look at the options as they play out for a Saunda family.",
      ],
      table: {
        caption: "Tuition routes for IB and IGCSE students in and around Saunda",
        columns: ["Route", "Fit with the syllabus", "Attention", "Travel needed", "Watch out for"],
        rows: [
          ["Online one-to-one tutor", "Chosen for the exact course", "Whole lesson to one student", "None", "Reliable power and data"],
          ["Coaching class in Ramgarh or Ranchi", "Aimed at JEE, NEET and boards", "Shared in a batch", "Daily road trips", "Little IB or IGCSE teaching"],
          ["Neighbourhood private tutor", "Good for school-level basics", "High", "Short", "Hard to find an IB specialist"],
          ["Self-study with past papers", "Depends on discipline", "None", "None", "No feedback on technique"],
        ],
      },
    },
    {
      heading: "How do Jharkhand's seasons and festivals shape the study calendar?",
      paragraphs: [
        "Saunda's year has a distinct rhythm. Summers from April to June are hot and dusty, with power cuts common and afternoons too warm for concentrated study. Winters are cool enough that evening lessons are comfortable, although mornings can be misty. The monsoon arrives in June and brings welcome relief, but heavy spells can flood low roads and disrupt the network.",
        "Festivals take a serious share of the calendar. Chhath in October or November is observed with great devotion across the coalfield belt, and families often pause all routines for several days. Durga Puja and Diwali close to it bring shopping, guests and travel. Karma and Sarhul, celebrated by local communities, also shape family plans in their seasons.",
        "The academic year for international exams sits above all this. IGCSE runs in two main series and the IB Diploma has a May session, so the pressure peaks in spring, just as the heat rises. Good planning places mock exams before Diwali and leaves the hottest weeks for light consolidation.",
        "The table below sets out a practical calendar. It is a planning aid, and individual schools may differ.",
      ],
      table: {
        caption: "Planning calendar for Saunda IB and IGCSE students",
        columns: ["Months", "International exam activity", "Local rhythm", "How we plan lessons"],
        rows: [
          ["July to September", "New year starts, IA and Extended Essay topics chosen", "Monsoon, network dips after heavy rain", "Steady weekly lessons, early planning"],
          ["October to November", "IGCSE November series, mocks", "Durga Puja, Diwali, Chhath", "Lessons paused around festivals, mocks done earlier"],
          ["December to February", "IA drafts, JAC board preparation for local peers", "Cool weather, good study conditions", "Longer evening sessions"],
          ["March to April", "Final IB revision, IGCSE practicals and mocks", "Heat rising, fasting season for some households", "Shorter sessions, earlier evening slots"],
          ["May to June", "IB Diploma and IGCSE main series", "Peak heat, power cuts", "Hotspot backup, light revision"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Saunda study next?",
      paragraphs: [
        "Jharkhand offers more higher-education choice than newcomers expect. Ranchi has Ranchi University, the Rajendra Institute of Medical Sciences and the Central University of Jharkhand. BIT Mesra is a well-known engineering option, NIT Jamshedpur is nearer the steel belt, and IIT (ISM) Dhanbad has a long association with mining and earth sciences, a natural interest for students from a coalfield.",
        "For students who hold IB or IGCSE qualifications, the route into these institutions typically runs through entrance exams such as JEE Main, NEET and CUET-UG, along with equivalence documentation from the Association of Indian Universities where needed. Eligibility and subject requirements change, so always check the official notices each year. We coach the subject content; we do not make eligibility judgements.",
        "Abroad, students look at the UK, Canada, Australia and the US, and some consider Germany or Singapore. The IB Diploma and A Levels are widely understood in admissions offices, and strong Maths and sciences open engineering and mining-related courses.",
        "Whatever the destination, the earlier a student chooses subjects that match it, the easier the path. A Saunda student who wants mining engineering will do well with Maths, Physics and Chemistry at Higher Level.",
      ],
    },
    {
      heading: "What are the hard parts of IB Maths and the sciences, and how does a tutor help?",
      paragraphs: [
        "Maths is where most Saunda requests begin. Students from JAC or CBSE schools are often quick with algebra and calculus drills, but the IB asks them to justify, interpret and communicate. Analysis and Approaches suits students comfortable with abstraction; Applications and Interpretation suits those who would rather model real data.",
        "Physics and Chemistry bring their own traps. In Physics, uncertainty, graph interpretation and multi-step reasoning cost marks that formula knowledge cannot recover. In Chemistry, mole calculations and organic reaction pathways need regular practice rather than last-minute cramming.",
        "Biology rewards precision. A student who writes everything they know about a topic, rather than what the question asks, loses marks that a few sessions on command words can recover.",
        "A tutor helps by finding the real gap in the first lesson, often narrower than a family fears. After that, the work is practice with real questions and honest feedback, at a pace that can be kept up alongside school, coaching and home duties.",
      ],
      bullets: [
        "Diagnostic first lesson to find specific gaps",
        "Practice with genuine IB and IGCSE past-paper questions",
        "Mark-scheme reading and command-word training",
        "Graphical calculator routines for Maths",
        "Planning for practical and internal assessment work",
      ],
    },
    {
      heading: "Should a Saunda student take IGCSE Core or Extended?",
      paragraphs: [
        "Cambridge offers Core and Extended papers in many subjects, and Edexcel offers Foundation and Higher. The tier sets the top grade available. Core tops out at a lower grade, while Extended and Higher open the full range but demand more.",
        "If a student hopes to do Maths or sciences at A Level or in the IB Diploma, Extended or Higher is the usual choice. If a subject is a struggle and will not matter later, Core or Foundation can produce a stronger result with less stress. Teachers, parents and the student should decide together by the middle of the first IGCSE year.",
        "Private candidates in and around Saunda have an additional task: finding an exam centre that accepts private entries, most likely in Ranchi or another larger city. Fees, deadlines and practical arrangements vary by board and series, so ask the centre early. Our tutors can teach the content and past-paper style, but registration is handled by the family.",
        "Subject combinations matter too. Students aiming at engineering should keep Mathematics, Additional Mathematics and Physics together, while those leaning to commerce may prefer Economics and Business.",
      ],
    },
  ],

  tutorsIntro:
    "These tutors teach IB and IGCSE live online to students across Jharkhand. Every profile lists subjects, levels and background, and any lesson with a Saunda student is delivered on screen.",

  process: [
    { title: "Send us the details", description: "Email support@ibgram.com or WhatsApp +91 7439 368 115 with the board, programme, subject, level and preferred evening times." },
    { title: "Get a tutor shortlist", description: "We suggest tutors whose experience matches the course, with their open slots in IST." },
    { title: "Try a free lesson", description: "The first online lesson costs nothing and commits you to nothing." },
    { title: "Confirm the plan in writing", description: "If you continue, the weekly schedule and rate are agreed in writing ahead of booking." },
    { title: "Follow progress through notes", description: "A written summary follows each lesson, and a change of tutor is always possible." },
  ],

  whyPoints: [
    { title: "Match by course", description: "We look at the syllabus code and tier before naming a tutor." },
    { title: "Plain about the format", description: "Teaching happens online; no tutor visits Saunda." },
    { title: "Exam technique included", description: "Mark schemes and command words are taught alongside content." },
    { title: "Parents stay informed", description: "Short notes show what was covered and what comes next." },
    { title: "Coaching, not ghost-writing", description: "Assessed work stays the student's own." },
    { title: "Easy to change", description: "If the fit is wrong, we swap the tutor." },
  ],

  faqs: [
    {
      question: "Can an IB or IGCSE tutor visit my house in Saunda?",
      answer:
        "No, tutors do not come to Saunda. Lessons are one-to-one and live, but online, with the student at home on a laptop. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. For families in the coalfield belt, online teaching has a practical advantage: a specialist for the exact course can be found regardless of distance.",
    },
    {
      question: "Is there an IB or IGCSE school in Saunda or Ramgarh district?",
      answer:
        "We could not confirm any. Schools in Saunda and the surrounding area follow JAC or CBSE syllabi. Families wanting an international curriculum generally use an online school, plan a move, or prepare privately for external exams. Please check any school's claims yourself. Our service is independent and works alongside whichever school the student attends.",
    },
    {
      question: "How does online home tuition work for an IB student in Saunda?",
      answer:
        "The student logs in from home at a fixed weekly time, and the tutor teaches live by video, sharing a screen or digital whiteboard. Afterwards you receive a short written note. You need a laptop or tablet, headphones and a reasonably steady connection. Because power and broadband can be uneven in colony areas, a mobile hotspot is a useful backup.",
    },
    {
      question: "What does IGCSE or IB tuition cost for a family in Saunda?",
      answer:
        "It depends on the course level, the tutor's experience and lessons per week, so we quote in writing before any booking rather than publish prices. Higher Level Diploma subjects and exam-season intensives generally cost more than Core IGCSE support. There is no travel charge because lessons are online, and the first lesson is free, so you can judge the fit first.",
    },
    {
      question: "My child studies in a JAC board school. Can they still take IGCSE or IB?",
      answer:
        "Yes, with some planning. The IGCSE can be taken privately, and the IB Diploma generally needs a registered school or online school route. Students who switch from JAC usually need help with English academic writing, practical skills and command words. A bridge plan in the first few months often makes the change manageable. Tell us the current class and we will suggest a realistic path.",
    },
    {
      question: "Do your tutors help with Internal Assessments and Extended Essays?",
      answer:
        "They coach the method and never write the work. A tutor can help choose a question, structure an argument, read the criteria and comment on a draft, but the research, words and conclusions must be the student's. Ghost-writing is academic misconduct under IB and exam-board rules, and our tutors will not do it, however close a deadline is.",
    },
    {
      question: "Which IGCSE board should a Saunda student choose, Cambridge or Edexcel?",
      answer:
        "Neither is better overall. The right choice depends on what an online school or exam centre offers, the subjects wanted and the next step, such as A Levels or the IB Diploma. Cambridge uses Core and Extended tiers, while Edexcel uses Foundation and Higher. If a family has a choice, compare syllabus content, exam dates and the nearest centre, then decide.",
    },
    {
      question: "Where can a private candidate from Saunda sit IGCSE exams?",
      answer:
        "Usually at a registered centre in a larger city such as Ranchi, though availability varies by board and year. The centre handles entries, fees and practical papers, so contact one early. IB Gram teaches the syllabus and exam technique but does not register candidates or run exams, and we suggest confirming everything with the centre directly.",
    },
    {
      question: "How do the IB and IGCSE exam dates fit Saunda's festivals and weather?",
      answer:
        "IB Diploma exams are mainly in May and IGCSE runs in May to June and October to November. In Saunda, the May papers coincide with the hottest, most power-strained weeks, and the autumn series overlaps Durga Puja, Diwali and Chhath. We place mock exams before the festivals and plan light sessions in the heat, so study does not collapse at the worst moment.",
    },
    {
      question: "Can my child prepare for JEE or NEET and follow IGCSE or IB together?",
      answer:
        "It is possible but demanding, because the syllabi overlap without matching. Many students in Ramgarh and Ranchi attend a coaching class for entrance exams and use an online tutor for the international subject. We fit lesson times around coaching hours. Eligibility rules for JEE, NEET and CUET change, so check the current official notices each year.",
    },
    {
      question: "Which subjects can your tutors teach a student from Saunda?",
      answer:
        "IB Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, Geography, ESS, English, Computer Science, Psychology, Hindi B, TOK and Extended Essay guidance, along with IGCSE Mathematics, Additional Mathematics, sciences, Computer Science, English, Geography, Economics and Business. If you need something not listed, ask, because the tutor pool covers more than one page can list.",
    },
    {
      question: "We may be transferred soon. Can lessons continue after a move?",
      answer:
        "Yes. Because teaching is online and tutors work in IST, lessons can continue from Dhanbad, Nagpur or anywhere else in India with a stable connection, and even abroad with timing adjustments. This is one reason transfer-prone coalfield families often prefer a curriculum and tutor that move with the child. Tell us about a likely move, and we will plan for continuity.",
    },
    {
      question: "What equipment and internet do online lessons need?",
      answer:
        "A laptop or tablet with a camera, headphones, a quiet corner and a connection steady enough for video. Standard video uses moderate data. If broadband is unreliable in your colony, we can agree a lighter video setup and keep a mobile hotspot as backup. Mention power cuts in your first message so we can plan slots for the most stable hours.",
    },
    {
      question: "Can the tutor explain in Hindi?",
      answer:
        "Exams are in English, so lessons are mainly in English, but many tutors speak Hindi and can explain a tricky idea in it when it helps, especially with younger students. Hindi B tutoring follows IB or IGCSE criteria. Tell us the student's language preference in your first message, and we will try to match it.",
    },
    {
      question: "How do I begin, and is the trial really free?",
      answer:
        "Yes, the first lesson is free. Email support@ibgram.com or WhatsApp +91 7439 368 115 with the programme, subject, level and suitable evening slots. We send a tutor shortlist, arrange an online trial, and only then confirm a plan and rate in writing. If the fit is wrong, we change the tutor at no extra charge.",
    },
    {
      question: "Is IB Gram linked to the IB, Cambridge, Pearson or any school?",
      answer:
        "No. IB Gram is an independent tutoring service with no affiliation to the International Baccalaureate Organization, Cambridge, Pearson Edexcel or any school. Names on this page only describe what students study or where families look for schooling. We do not arrange admissions, and nothing here promises any grade or result.",
    },
  ],

  internalLinks: [
    { label: "How IB tutoring works", href: "/ib-tutors/", description: "What a tutor contributes to each IB programme." },
    { label: "IGCSE guide", href: "/igcse/", description: "Board options, tiers and exam series." },
    { label: "IB Gram in India", href: "/india/", description: "The full list of Indian cities we teach in." },
    { label: "Diploma Programme", href: "/programmes/dp/", description: "Structure, core elements and assessment." },
    { label: "Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition." },
    { label: "Career-related Programme", href: "/programmes/cp/", description: "How the CP combines subjects and career study." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "AA and AI compared at HL and SL." },
    { label: "Tutor directory", href: "/tutors/", description: "Browse tutors by subject and level." },
    { label: "Entrance test preparation", href: "/admissions/test-prep/", description: "Balancing entrance exams with an international course." },
    { label: "Contact us", href: "/contact-us/", description: "Write or WhatsApp to set up a free first lesson." },
    { label: "Ramgarh", href: "/ramgarh/", description: "Our page for the district town next door." },
    { label: "Ranchi", href: "/ranchi/", description: "The state capital, the larger city families commute to." },
    { label: "Bokaro Steel City", href: "/bokaro-steel-city/", description: "Another Jharkhand industrial city we serve online." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson in Saunda",
  closingBody:
    "Send the board, the subject and level, how the year is going so far and a few evenings that work. A shortlist of tutors comes back, along with a time for a free lesson on video. Write to support@ibgram.com or WhatsApp +91 7439 368 115, and we will do the rest.",
};
