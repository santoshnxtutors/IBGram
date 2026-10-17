import type { CitySeoPage } from "../types";

/**
 * /bellampalle/ - IB and IGCSE tutoring page for Bellampalle (Bellampalli), Mancherial district,
 * Telangana, in the Singareni coalfield belt. Online-only delivery. No IB or Cambridge/Edexcel school
 * is confirmed in the town, so stripSchools is empty and clusters point honestly to Hyderabad,
 * Karimnagar and Nagpur, reusing names verified on the Mancherial, Adilabad and Karimnagar pages.
 */
export const bellampalle: CitySeoPage = {
  slug: "bellampalle",
  countryName: "Bellampalle",
  countryNameLong: "Bellampalle, Telangana",
  demonym: "Bellampalle",
  state: "Telangana",
  stateCode: "IN-TG",
  flagCode: "in",
  countryCode: "IN",
  region: "Telangana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots are arranged around colliery shift patterns, Telangana Intermediate exams, Bathukamma and Dasara, and the worst of the April and May heat",
  lastUpdated: "2026-09-21",
  geo: { latitude: 19.0592, longitude: 79.4906 },
  wikipedia: "https://en.wikipedia.org/wiki/Bellampalli",
  alternateNames: ["Bellampalli", "Bellampally", "Bellampalle Mancherial"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Bellampalle | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors in Bellampalle, Mancherial: live one-to-one online home tuition, arranged around Singareni shift families, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Bellampalle",
  heroEyebrow: "ONLINE IB & IGCSE HOME TUITION FOR BELLAMPALLE",
  heroSubtitle:
    "If you are searching for IB or IGCSE home tuition in Bellampalle, this is how it works: a private, live lesson delivered online to your child's desk, never a tutor knocking at the door. The coalfield shift, the school run and the heat all shape the timetable, so the slot is fixed to suit your household first.",
  primaryKeyword: "IB and IGCSE tutors in Bellampalle",
  imageAltText: "Bellampalle student preparing for an IB Chemistry paper with a tutor on a video lesson",
  secondaryKeywords: [
    "IB tutor Bellampalle",
    "IGCSE tutor Bellampalle",
    "IB home tuition Bellampalle",
    "IGCSE home tuition Bellampalle",
    "IB private tuition Bellampalle",
    "IB Maths tutor Bellampalle",
    "IGCSE Maths tutor Bellampalle",
    "IB Physics tutor Bellampalle",
    "IB Chemistry tutor Bellampalle",
    "IB Biology tutor Bellampalle",
    "IB DP tutor Bellampalle",
    "IB MYP tutor Bellampalle",
    "IB PYP tutor Bellampalle",
    "IGCSE online tuition Bellampalle",
    "online IB tutor Bellampalli",
    "IGCSE tutor Mancherial district",
    "IB tutor Bellampalle Telangana",
    "IB tutor Singareni colony",
    "IGCSE tutor Kasipet Bellampalle",
  ],

  heroTrustPoints: [
    "Tutors are chosen for the exact IB subject and level or IGCSE board and tier",
    "Private online lessons only; no tutor visits homes in Bellampalle",
    "A free trial lesson, then rates in writing",
    "A written note after every session and a new tutor if the match is wrong",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB range" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards" },
    { value: "IST", label: "Shift-friendly slots" },
    { value: "Free trial", label: "No upfront fee" },
  ],

  intro: {
    heading: "A coalfield town where international study needs a different kind of timetable",
    paragraphs: [
      "Bellampalle grew around the Singareni Collieries, and the rhythm of the town still follows the mines: shift changes in the early morning and late afternoon, company colonies, hospital and school campuses run by the employer, and a workforce of engineers, geologists and administrators who are transferred every few years. We could not confirm an IB or Cambridge or Edexcel IGCSE school in Bellampalle or the surrounding mandals.",
      "Families who do ask about IB and IGCSE here usually fit one of three patterns. A Singareni officer expecting a posting to Hyderabad, Kothagudem or Ramagundam wants a portable curriculum. A family with relatives in the Gulf or the US wants an international qualification on the child's record. Or a student boarding in Hyderabad or Nagpur wants help at home during the holidays.",
      "The nearest big-city hubs are far: Hyderabad is roughly 280 km away, Karimnagar about 130 km and Nagpur about 250 km. That is not a distance anyone commutes for a weekly lesson, and this is where online tutoring earns its place. A tutor teaches live, one-to-one, in Indian Standard Time, and lessons can be moved when a father's shift changes or when power is down.",
      "IB Gram is independent and is not linked to the IB, Cambridge, Pearson, Singareni or any school mentioned. Tutors explain, set work and give feedback, and they do not write Internal Assessments, Extended Essays, TOK essays or coursework that will be graded.",
    ],
    bullets: [
      "Tutors for IB PYP, MYP, DP and CP content",
      "Cambridge IGCSE (Core, Extended) and Edexcel IGCSE (Foundation, Higher)",
      "Private, live, one student at a time",
      "Free trial lesson and written notes after every session",
      "No in-person visits in Bellampalle; home visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "There is no IB-authorised school we could confirm in Bellampalle, so each programme below is described through the needs a colliery-town household actually brings.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Learning is arranged through inquiry units, such as how the world works or where we are in place and time, and closes with an exhibition. With no external exams, tutoring centres on reading, writing and confident mathematics.",
      countryNote:
        "Children of transferred officers often move between English-medium and Telugu-medium classrooms, and PYP-age tutoring keeps reading fluency and number work steady through a move.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups, assessed by criteria rather than one mark, and a Personal Project at the end. Students learn to reflect and to communicate what they have done.",
      countryNote:
        "A Bellampalle student arriving from state-board classes must learn what a criterion band asks for, so early lessons practise reading a rubric and writing a structured explanation.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects with three at Higher Level, plus TOK and an Extended Essay, examined in May or November.",
      countryNote:
        "Diploma students linked to Bellampalle are usually at a school elsewhere or online, and book a tutor to tighten Maths, Physics or Chemistry before the May session.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pathway combining Diploma courses with a career-related study and a reflective project, offered by few Indian schools.",
      countryNote:
        "CP is rarely asked about from Bellampalle; if it is, tutoring supports the academic courses inside the pathway and the reflective project plan.",
    },
  ],

  subjectsIntro:
    "An IB student taking Physics HL and another on Physics SL sit different papers, and IGCSE Chemistry under Cambridge differs from Edexcel's. With no local school to check, we settle the code and level first, then match a tutor.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, algebra, vectors and proof for future engineers, including the open-ended problem solving of HL Paper 3." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology, with Explorations that can use real data such as production or rainfall figures." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermodynamics, waves and fields, with a strong link to the engineering careers that mining and power families know well." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, equilibrium and organic chemistry, where coal, combustion and emissions supply vivid examples." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells to ecosystems, including the health and environmental effects of mining and heat stress." },
    { name: "IB Economics", levels: "HL / SL", description: "Energy markets, public-sector employment and regional development, with examples from a coal belt." },
    { name: "IB Business Management", levels: "HL / SL", description: "Operations, finance and human resources, with case studies on large public-sector employers." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen commentary, comparative essays and the oral, for students who speak Telugu and Hindi at home." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms and OOP with a working IA solution, suited to students aiming at software or data careers." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches, studies and evaluation, with a small experiment for the IA." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Energy, land use and water, where open-cast mining and reclamation give concrete cases to examine." },
    { name: "IB Geography", levels: "HL / SL", description: "Resource use, urban change and development, with fieldwork ideas drawn from industrial towns." },
    { name: "IB Design Technology", levels: "HL / SL", description: "Design projects and materials, suited to students with an interest in machines and engineering." },
    { name: "IB Telugu and Hindi B", levels: "HL / SL", description: "Language practice that builds on home fluency, with writing and speaking tasks." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion practice for the exhibition and essay, with no drafting done for the student." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel both offer IGCSE, and their specifications differ in tiers and papers. A Bellampalle student should first confirm the board of the school or exam centre and then build a plan from that specification.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Algebra, geometry and statistics, with full working and tier choice emphasised." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Energy, electricity, waves and atomic physics, with practical-skills questions." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Reactions, rates, organic chemistry and quantitative work." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Organisms, transport and ecology, with diagrams and data-response practice." },
    { name: "IGCSE Combined Science", levels: "Cambridge / Edexcel", description: "A double-award route suitable for students who prefer breadth to three separate sciences." },
    { name: "IGCSE English First Language", levels: "Cambridge / Edexcel", description: "Reading, directed writing and composition with accuracy and variety." },
    { name: "IGCSE English Second Language", levels: "Cambridge", description: "All four skills, for students who think first in Telugu." },
    { name: "IGCSE Geography", levels: "Cambridge / Edexcel", description: "Resources, industry and development, using local examples where suitable." },
    { name: "IGCSE Economics", levels: "Cambridge / Edexcel", description: "Markets, government and trade with data questions." },
    { name: "IGCSE Computer Science", levels: "Cambridge / Edexcel", description: "Logic, data and programming, practised on past papers." },
    { name: "IGCSE Telugu and Hindi", levels: "Cambridge / Edexcel", description: "Second-language papers that use home fluency to build exam-ready writing." },
  ],

  regionsTitle: "Bellampalle colonies and the towns around it",
  regionsIntro:
    "Lessons are online, yet a family's week depends on the colony it lives in, the shift a parent works and the road the school bus takes. These are the parts of Bellampalle and its neighbourhood we are asked about.",
  regions: [
    { name: "Bellampalle town centre", note: "The bazaar and bus stand area. Lessons after 6 pm suit students here, once the market traffic thins." },
    { name: "Singareni officers' colony", note: "Company housing with families of officers and engineers. Transfers every few years make a portable curriculum attractive." },
    { name: "Kasipet", note: "A neighbouring area with railway and colliery links, where families often mix private and company schooling." },
    { name: "Bellampalle railway station area", note: "On the Kazipet to Balharshah line, with trains that carry many commuters. Lessons are best placed after the evening arrivals." },
    { name: "Godavari riverside villages", note: "Villages towards the river, where harvest and monsoon affect the calendar and broadband can be patchy." },
    { name: "Mancherial road", note: "The route to the district headquarters, where some families also look at Mancherial options." },
    { name: "Naspur and Jaipur side", note: "Industrial and cement-belt areas where families of plant staff look for private tuition." },
    { name: "Tandur and Reebena direction", note: "Students further out who use Bellampalle as a service town for shopping and healthcare." },
    { name: "Goleti and Machapur colonies", note: "Mining-adjacent residential pockets where shift timing shapes study hours." },
    { name: "Asifabad and Kagaznagar side", note: "Neighbouring towns in Komaram Bheem district, with paper-mill and mining families who share similar needs." },
  ],

  schoolClusters: [
    {
      city: "Bellampalle itself",
      note: "We could not confirm an IB or Cambridge/Edexcel IGCSE school in Bellampalle, so none is named. Local schooling is Telangana state board, CBSE and company-run schools.",
      schools: [],
    },
    {
      city: "Nearby: Karimnagar",
      note: "About 130 km away, with one confirmed Cambridge IGCSE school, listed on our Karimnagar page.",
      schools: ["Kencrest International School, Jyothinagar"],
    },
    {
      city: "Nearby: Hyderabad",
      note: "Roughly 280 km away, the region's major IB and IGCSE hub, mainly relevant for boarding or a transfer.",
      schools: ["Oakridge International School", "CHIREC International School", "International School of Hyderabad"],
    },
    {
      city: "Nearby: Nagpur",
      note: "Roughly 250 km to the north, the other large city families in the Adilabad and Mancherial belt look to.",
      schools: ["D Y Patil International School, MIHAN", "Centre Point School International"],
    },
  ],
  schoolDisclaimer:
    "The schools above are listed only to show where IB or Cambridge options exist in the wider region, drawn from neighbouring pages of this site. IB Gram is an independent tutoring service and is not affiliated with, endorsed by or partnered with the IB, Cambridge, Pearson, Singareni or any school. Please confirm admissions, affiliation and fees directly.",

  modesIntro:
    "Everything in Bellampalle is online. The choice is how often to meet, for how long, and whether the goal is steady progress or a push before papers.",
  modes: [
    {
      title: "Weekly private lessons",
      description: "A live lesson of an hour or ninety minutes once or twice a week with the same tutor, at your child's desk.",
      bullets: [
        "Whiteboard and past papers shared on screen",
        "Homework reviewed at the start of the next lesson",
        "A short note to parents after each session",
      ],
    },
    {
      title: "Exam-month intensives",
      description: "Short, frequent sessions in the weeks before IGCSE or IB papers, built around timed practice.",
      bullets: [
        "Marked papers with line-by-line comments",
        "Weak topics re-taught from first principles",
        "A last-week checklist of formulae and command terms",
      ],
    },
    {
      title: "Transfer and bridge support",
      description: "For students moving between boards because of a parent's transfer or a return from abroad.",
      bullets: [
        "Syllabus gap mapping in the first lesson",
        "English writing in criterion style",
        "Steady pace for younger students",
      ],
    },
  ],

  sections: [
    {
      heading: "Who looks for IB or IGCSE help in Bellampalle, and why?",
      paragraphs: [
        "The town's largest employer shapes the pattern. Singareni Collieries moves officers, engineers and doctors between Bellampalle, Mandamarri, Srirampur, Ramagundam, Kothagudem and Hyderabad, and their children change schools with them. A curriculum that follows the student is appealing to these families.",
        "A second group is families with a relative overseas. The Telangana diaspora in the US, the Gulf and the UK is large, and a cousin's advice about IGCSE or the IB Diploma carries weight in a household deciding about Class 9 or 11.",
        "A third group is students already at a campus elsewhere, such as Hyderabad, who come home for holidays and want tutoring in their weak subject. This is usually a matter of continuity rather than a change of plan.",
        "What the three share is that none can rely on a local IB classroom. The tutor is then the person who knows the course, the criteria and the exam, which is why we match by syllabus code.",
      ],
    },
    {
      heading: "Telangana board, CBSE, IB or IGCSE: what suits a Bellampalle child?",
      paragraphs: [
        "Bellampalle's schools follow the Telangana state syllabus, with some CBSE and company-run schools. The choice between those and an international board turns on where the child will be in five years and how portable the qualification needs to be.",
        "Telangana's SSC and Intermediate exams are held in March and are heavily content-based. IGCSE is a two-year course with exams in May or June and October or November. The IB Diploma adds coursework, an essay and a service requirement.",
        "For a family with mobile postings, CBSE and IB are the most portable. For a family that will stay in the state and aim at EAMCET or NEET, the state board or CBSE may be simpler. For a family planning study abroad, IGCSE and IB carry advantages.",
        "If the answer is unclear, a diagnostic lesson can show where a child stands today, and what a switch would involve.",
      ],
      table: {
        caption: "Board comparison for Bellampalle households",
        columns: ["Board", "Exam months", "Style", "Who it suits"],
        rows: [
          ["Telangana SSC and Intermediate", "March", "Content-heavy, state textbooks", "Families staying in Telangana"],
          ["CBSE", "February-March", "NCERT-based, nationwide", "Transferable postings and JEE or NEET routes"],
          ["Cambridge IGCSE", "May-June, October-November", "Papers and some practicals", "A Level or IB Diploma entry, study abroad"],
          ["Edexcel IGCSE", "May-June, January", "Tiered linear papers", "A Level or IB Diploma entry"],
          ["IB Diploma", "May, November", "Exams, IAs, EE, TOK", "International university routes and CUET-UG"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Bellampalle, and what decides the rate?",
      paragraphs: [
        "IB Gram does not print prices. A rate is sent in writing before you book. Four things usually decide what you are quoted, and understanding them lets you compare offers fairly.",
        "The level of the course leads. A Higher Level Diploma subject or Extended IGCSE paper needs a more experienced tutor than a Core paper. Scarcity adds to this: tutors for Further Mathematics, Computer Science HL and some languages are harder to find.",
        "The schedule follows. One lesson a week costs far less than daily sessions in the exam month. Finally, tutor background matters, such as years of teaching the exact syllabus or experience with examiners' expectations.",
        "Online teaching also removes some costs: the long road to Karimnagar or Hyderabad, hostel visits, and batch fees. The free trial lesson lets you test the fit at no cost.",
      ],
      bullets: [
        "Core or Extended, Standard or Higher Level",
        "Scarcity of the subject",
        "Lessons per week and their length",
        "Tutor experience",
        "A written quote before any booking",
      ],
    },
    {
      heading: "Online lessons, Karimnagar coaching, a local tutor or self-study?",
      paragraphs: [
        "In the Mancherial belt, coaching means Intermediate, EAMCET and NEET batches, and most of the serious ones are in Karimnagar, Warangal or Hyderabad. Very few teach IB or IGCSE, and a local private tutor is unlikely to know IB marking or IGCSE tiers.",
        "Online one-to-one lessons match a tutor to the syllabus and give feedback on your own answers. The limit is the connection and the need for discipline, which a shift-working household must plan around.",
        "Self-study with past papers is realistic for motivated students, particularly in Maths and Physics. It pays off most when a tutor marks practice answers and points out patterns of error.",
        "Most families in Bellampalle end up with a blend of online lessons and self-study.",
      ],
      table: {
        caption: "Support routes compared from Bellampalle",
        columns: ["Route", "Helps with", "Limit", "Fit for IB or IGCSE"],
        rows: [
          ["Online one-to-one", "Syllabus match, marked feedback", "Needs stable broadband", "High"],
          ["Coaching in Karimnagar or Hyderabad", "Routine and peers", "Travel and few IB courses", "Low"],
          ["Local private tutor", "Convenient and familiar", "May not know IB or IGCSE marking", "Low to medium"],
          ["Self-study", "Flexible and cheap", "No feedback", "Medium"],
        ],
      },
    },
    {
      heading: "How do shifts, heat and festivals shape the study year here?",
      paragraphs: [
        "Bellampalle's heat is serious. April and May days regularly reach the mid-40s in the Mancherial belt, and afternoons are best left for rest. Lessons in these months work in the early morning or after dark.",
        "Colliery shift patterns also matter. A parent on a night shift sleeps in the morning, so a lesson that needs quiet in the house is better set for the afternoon or evening. Tell us in advance if the family's routine changes.",
        "Festivals add their own pattern. Bathukamma and Dasara in September and October bring a fortnight of travel and visitors, Sankranti in January is a shared holiday, and Singareni's own annual events can shape the calendar in colony areas.",
        "The monsoon can interrupt power and mobile networks for a day, so a hotspot and a charged laptop are sensible. A yearly plan built around these rhythms is far more likely to hold.",
      ],
      table: {
        caption: "A study year in Bellampalle",
        columns: ["Months", "Academic focus", "Local factor", "Planning note"],
        rows: [
          ["June-August", "New year and syllabus start", "Monsoon and Bonalu period", "Fix the weekly slot, keep a backup"],
          ["September-October", "November exams approach", "Bathukamma and Dasara", "Use holidays for past papers"],
          ["November-December", "Mock papers", "Cooler weather", "Best months for long sessions"],
          ["January-March", "Intermediate boards, IGCSE coursework", "Sankranti, exam season", "Lighter load for board candidates"],
          ["April-June", "IGCSE and IB May papers", "Extreme heat", "Early morning or evening lessons"],
        ],
      },
    },
    {
      heading: "What are the routes after IB or IGCSE from Bellampalle?",
      paragraphs: [
        "IB Diploma holders can apply to Indian universities through the Association of Indian Universities equivalence and to central universities via CUET-UG. Telangana and neighbouring options include Osmania University, JNTU Hyderabad, IIIT Hyderabad and the University of Hyderabad, and IIT Hyderabad through JEE.",
        "Students hoping for NEET or JEE Main should check subject and percentage rules before settling on subjects. IGCSE alone does not satisfy Class 12 equivalence, so the Diploma or A Levels are usually needed.",
        "Mining and energy families often lean towards engineering, geology or management. Indian Institutes of Technology and the Indian School of Mines route in Dhanbad are familiar names, and strong Mathematics, Physics and Chemistry choices keep them open.",
        "Overseas, the Diploma is widely understood in the UK, US, Canada and Australia. Tutors help with subject depth and exam technique; they do not write personal statements or promise admission.",
      ],
    },
    {
      heading: "What should students expect from IB Maths and the sciences?",
      paragraphs: [
        "Bellampalle students are often comfortable with Mathematics, and Analysis and Approaches is the usual choice for those aiming at engineering or mining-related degrees. HL students should expect a step up in proof and unfamiliar problem solving.",
        "Applications and Interpretation suits students who prefer statistics and technology, such as those aiming at business, health or social science. It needs fluent use of a graphing calculator.",
        "In Physics and Chemistry, students from the Intermediate system are strong on content but less used to the explanation and data analysis the IB demands. Weekly timed questions and careful marking close that gap.",
        "For the IA, students can draw on local material: combustion, water quality or temperature data. A tutor helps check feasibility and explains criteria, but the writing and analysis belong to the student.",
      ],
    },
    {
      heading: "How should a Bellampalle student choose IGCSE subjects?",
      paragraphs: [
        "Begin with the next step. For Diploma sciences, choose Mathematics at Extended or Higher, two sciences and English. For commerce, add Economics, Business or Accounting with Mathematics.",
        "Tier choice comes next. Extended or Higher keeps every grade open, while Core or Foundation limits the top grade. A diagnostic lesson helps a student who is unsure.",
        "Languages deserve early thought. Telugu or Hindi second-language papers are manageable and useful, while English is essential.",
        "Finally, confirm an approved exam centre that takes private candidates and plan backwards from the exam date. A tutor can turn the syllabus into a week-by-week plan.",
      ],
    },
  ],

  process: [
    { title: "Tell us about your child", description: "A WhatsApp message or email with class, subjects, board and the exam sitting you are aiming at is enough to begin." },
    { title: "Meet a proposed tutor", description: "You hear back with one tutor who has taught that very syllabus, and a few lines on why they fit." },
    { title: "Sit a trial lesson", description: "The first lesson is free and uses a real topic from your child's current unit, so you can judge the teaching and not a sales pitch." },
    { title: "See the terms on paper", description: "Days, timings, lesson length and the rate arrive in writing, and nothing starts until you agree." },
    { title: "Settle into a routine", description: "Lessons repeat weekly, each followed by a short summary, and you can ask for a different tutor at any point." },
  ],

  whyPoints: [
    { title: "Matched by course code", description: "We look at the specification your child is actually sitting before proposing a name." },
    { title: "Nobody else in the room", description: "The lesson is built around your child's mistakes, not around a batch average." },
    { title: "Summaries you can read", description: "After each session a few lines record topics covered, what went well and what to practise." },
    { title: "Fits a shift household", description: "Night-shift sleep, colony power cuts and festival weeks are discussed before a slot is fixed." },
    { title: "Coaching with honest limits", description: "Explaining, marking and feedback are on offer; drafting a student's assessed work is not." },
    { title: "Low-risk start", description: "A free first lesson and an open door to switch tutors keep the commitment small." },
  ],

  tutorsIntro:
    "Every tutor teaches from within India on Indian Standard Time, which means a colliery-town evening lines up with theirs. Below is a sample of the people who teach IB and IGCSE courses on the platform.",

  faqs: [
    { question: "Is it possible to hire an IB tutor while living in Bellampalle?", answer: "Yes, through live video lessons. A tutor with experience of your child's exact IB subject teaches privately from elsewhere in India, and no one travels to Bellampalle because home visits exist only in Gurugram and parts of Delhi NCR. Start with a free lesson; rates are sent in writing only afterwards, so the first hour carries no obligation." },
    { question: "I want home tuition for my child. What does that mean at IB Gram in Bellampalle?", answer: "It means online home tuition: your child studies in their own room, on a laptop, with a live private tutor. It does not mean a teacher arriving at the house. We spell this out because some parents searching for home tuition expect a visit. After each session a brief written summary reaches the family." },
    { question: "Does Bellampalle have any school that teaches IB or IGCSE?", answer: "We found none that we could verify. Schools in and around Bellampalle run the Telangana state syllabus, CBSE, or are managed by the colliery employer. Families wanting an international school generally look at Karimnagar, Hyderabad or Nagpur, all far away. Confirm any school's current affiliation yourself before acting, as programmes change." },
    { question: "Could my daughter sit Cambridge IGCSE papers without attending a Cambridge school?", answer: "Often yes, as a private candidate at an approved centre that accepts outside entries. Such centres are few, usually in larger cities like Hyderabad, and entry deadlines fall many months before the papers. Science practicals add complexity. Settle the centre and session first; the tutor then maps the syllabus against the time left." },
    { question: "What will IB or IGCSE lessons cost us?", answer: "No price list is published here. You receive a rate in writing before anything starts. Four things move it: how advanced the course is, how hard it is to find a tutor for that subject, how many lessons a week you want, and how near the exam is. Learning online saves the fares and fuel of trips to Karimnagar or Hyderabad." },
    { question: "Which IB subjects do students here ask about first?", answer: "Mathematics and Physics come up most, which fits a town of engineers and technicians, followed by Chemistry, Biology and Business Management. Some ask for English support or a Telugu or Hindi language course. Each enquiry is matched to a tutor who has taught that particular course and level before a trial is booked." },
    { question: "Can the tutor write or fix my Internal Assessment?", answer: "No, and this is a firm rule. Tutors will talk through the marking criteria, help you pick a topic that can realistically be investigated, look at your method and respond to drafts you wrote yourself. They will not compose, rewrite or ghost-write an IA, Extended Essay, TOK essay or IGCSE coursework. Schools and exam boards expect the student's own work." },
    { question: "Which is easier for a Class 9 student, Cambridge or Edexcel?", answer: "Neither is simply easier; they are built differently. Cambridge usually offers Core and Extended papers and leans on a practical or alternative paper in the sciences, while Edexcel offers Foundation and Higher with linear papers. Mathematics codes are 0580 and 4MA1. Follow whichever your school or exam centre registers, and the tutor will teach to that one." },
    { question: "We are moving from a Telangana state board school. How long does the switch take?", answer: "Most students settle within one term if they get help early. The content gap is usually small; the bigger change is writing longer explanations and reading command words such as evaluate or justify. A bridging block of four to six weeks in English and Science before the new course starts works well, and a tutor can plan it with you." },
    { question: "My husband works night shifts at the mine. Can lessons be kept quiet and flexible?", answer: "Yes. We ask about shift patterns at the start and avoid booking a lesson during the hours a parent needs to sleep. If a roster changes, the slot can be moved with notice, and the change is noted in writing. Headphones, a closed door and an afternoon or evening time usually solve it." },
    { question: "Is a five-year-old too young for online lessons?", answer: "Children in PYP years need short, lively sessions, typically about 45 minutes, built on stories, counting games and simple inquiry tasks, with a parent nearby. Older MYP students manage longer blocks and work on writing to criteria and planning a Personal Project. We will suggest what suits your child's age and attention." },
    { question: "What does my child need at home for the lessons?", answer: "A working laptop or tablet, steady broadband, headphones, a quiet table, plus paper, pens and the calculator your course permits. A stylus helps with the whiteboard but is optional. Keep a phone hotspot ready, because monsoon storms can knock out a fixed line, and a lost lesson is rescheduled." },
    { question: "What happens if my child and the tutor do not click?", answer: "Say so, and we will propose another tutor, with no fee or fuss. Notes from the first tutor go across so the next one picks up where things stopped, and your child is not made to repeat material. Changing tutors is a normal part of finding a good fit." },
    { question: "Will IB results open doors to EAMCET, NEET or CUET?", answer: "Partly. A completed IB Diploma can support CUET-UG applications, and if subject and percentage conditions are met, JEE Main or NEET too. IGCSE alone does not stand in for Class 12. Read each institution's eligibility page before choosing subjects. Our tutors teach IB and IGCSE courses only and do not offer entrance-exam coaching." },
    { question: "What is the simplest way to get going?", answer: "Send a WhatsApp message to +91 7439 368 115 or an email to support@ibgram.com saying the class, subjects, board and exam sitting. A tutor suggestion follows, then a free trial lesson. Terms are put in writing afterwards, and you can walk away after that first lesson at no cost." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in India", href: "/india/", description: "Every city page we have built, plus how the online service works." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Find a tutor by IB subject." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subject coverage." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "What the two Diploma years involve and how tutors help." },
    { label: "IB MYP tutoring", href: "/programmes/myp/", description: "Criteria-based support for Years 1 to 5." },
    { label: "IB PYP tutoring", href: "/programmes/pyp/", description: "Reading, number sense and inquiry for younger learners." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "How AA and AI differ at SL and HL." },
    { label: "Tutor profiles", href: "/tutors/", description: "Read about the people who teach." },
    { label: "Talk to IB Gram", href: "/contact-us/", description: "Ask a question or request a trial lesson." },
    { label: "IB and IGCSE tutors in Mancherial", href: "/mancherial/", description: "The district headquarters a short drive away." },
    { label: "IB and IGCSE tutors in Ramagundam", href: "/ramagundam/", description: "Another Singareni and power-plant town." },
    { label: "IB and IGCSE tutors in Karimnagar", href: "/karimnagar/", description: "Closest city with a confirmed Cambridge school." },
    { label: "IB and IGCSE tutors in Adilabad", href: "/adilabad/", description: "The district town to the north." },
  ],

  closingHeading: "A free trial lesson that fits around your household in Bellampalle",
  closingBody:
    "Tell us the class, subjects and exam session, and any shift or exam weeks we should avoid. We will suggest a tutor for a no-cost trial and send rates in writing. WhatsApp +91 7439 368 115 or email support@ibgram.com to begin.",
};
