import type { CitySeoPage } from "../types";

/**
 * Narwana (Jind district, Haryana). No IB or Cambridge/Edexcel school confirmed in the town, so stripSchools
 * is empty and clusters point to Jind and Hisar (no confirmed school), Chandigarh tricity and Gurugram using
 * names recorded on neighbouring pages. Online-only delivery.
 */
export const narwana: CitySeoPage = {
  slug: "narwana",
  countryName: "Narwana",
  countryNameLong: "Narwana, Haryana",
  demonym: "Narwana",
  flagCode: "in",
  countryCode: "IN",
  region: "Haryana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-afternoon and evening sessions, with lighter weeks during the paddy and cotton seasons and on foggy winter mornings",
  lastUpdated: "2026-09-21",
  state: "Haryana",
  stateCode: "IN-HR",
  geo: { latitude: 29.5984, longitude: 76.1187 },
  alternateNames: ["Narwana Jind", "Narwana Haryana"],
  wikipedia: "https://en.wikipedia.org/wiki/Narwana",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Narwana | Private Online Tuition",
  metaDescription:
    "Online private IB and IGCSE tutors for Narwana, Jind district: DP, MYP, PYP, Cambridge and Edexcel taught live one to one, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Private Online Tuition in Narwana",
  heroEyebrow: "IB & IGCSE TUITION FOR NARWANA FAMILIES, LIVE AND ONLINE",
  heroSubtitle:
    "Narwana is a railway and grain-market town in Jind district, and nothing we could verify there teaches the IB or an IGCSE. Families who want home tuition for an international syllabus therefore get private one-to-one lessons over video, since our tutors are based elsewhere in India and do not come to Narwana houses. The student stays in their own room; the specialist comes through the screen.",
  primaryKeyword: "IB and IGCSE tutors in Narwana",
  imageAltText: "Narwana student reviewing an IGCSE Chemistry worksheet on a laptop during a live private online lesson",
  secondaryKeywords: [
    "IB tutor Narwana",
    "IGCSE tutor Narwana",
    "IB home tuition Narwana",
    "IGCSE home tuition Narwana",
    "IB private tuition Narwana",
    "IB Maths tutor Narwana",
    "IGCSE Maths tutor Narwana",
    "IB Physics tutor Narwana",
    "IB Chemistry tutor Narwana",
    "IB Biology tutor Narwana",
    "IB DP tutor Narwana",
    "IB MYP tutor Narwana",
    "IB PYP tutor Narwana",
    "IGCSE online tuition Narwana",
    "online IB tutor Jind district",
    "IB tutor Jind Haryana",
    "Cambridge IGCSE tutor Narwana",
    "Edexcel IGCSE tutor Narwana",
    "IB Economics tutor Narwana",
    "IB tutor near Hisar",
    "online IGCSE tutor Haryana",
  ],

  heroTrustPoints: [
    "Each tutor is matched to the specific IB programme or IGCSE specification the student follows",
    "Every Narwana lesson is live and online; in-person visits exist only in Gurugram and parts of Delhi NCR",
    "No charge for the first lesson, and the rate arrives in writing afterwards",
    "No connection with any school, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "PYP, MYP, DP, CP", label: "IB programmes" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards" },
    { value: "Online, one to one", label: "Format for Narwana" },
    { value: "IST", label: "Indian time zone tutors" },
  ],

  intro: {
    heading: "Narwana and the question of international schooling",
    paragraphs: [
      "Narwana grew around its railway junction and its grain and cotton trade, in a part of Haryana where the Narwana Branch canal feeds paddy and wheat. Education here leans on Haryana Board and CBSE schools, with many students heading to Jind, Hisar or Kaithal for coaching once they reach Class 11. We checked for an IB World School or an approved Cambridge or Edexcel centre in the town and could confirm none.",
      "Even so, searches for IB tutors in Narwana come from somewhere. Sometimes a parent works in the Gulf or Canada and has enrolled a child with an online school that follows IGCSE. Sometimes a family is planning a move to Chandigarh or Gurugram. Sometimes a teenager boards at a school in Dehradun and needs support during vacations. A tutor who teaches the exact syllabus over video suits all three.",
      "To be precise about home tuition: IB Gram tutors do not visit homes in Narwana. Our in-person service exists only in Gurugram and some parts of Delhi NCR. What we run for Narwana is online one-to-one tuition, which a student attends at home with a laptop, a notebook and a stable connection, at a fixed weekly slot.",
      "We are independent of the IB organisation, Cambridge, Pearson and every school named on this page. Tutors coach and explain; they do not write Internal Assessments, Extended Essays, Theory of Knowledge essays or any coursework a student must submit.",
    ],
    bullets: [
      "Coverage of IB PYP, MYP, DP and CP, with Cambridge and Edexcel IGCSE",
      "Lessons in IST, with no journey to Jind or Hisar",
      "Free first lesson and a written rate afterwards",
      "Session notes sent after each class",
      "No in-person visits in Narwana, only live online lessons",
    ],
  },

  programmesIntro:
    "The IB offers four programmes and a Narwana student may meet any of them through an online school or after a move. Here is what each asks of a student and how a tutor fits.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Teaching follows six transdisciplinary themes, and children build understanding through questions, projects and reflection. The culminating Exhibition is a collaborative inquiry without a formal test.",
      countryNote:
        "A primary child in Narwana often studies in Hindi and Haryanvi at home, so tutors spend time building spoken English through stories, counting games and short reading.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Students meet eight subject groups, each marked against criteria such as knowing, investigating, communicating and reflecting. The final-year Personal Project is self-directed.",
      countryNote:
        "Students arriving from a Haryana Board syllabus find open-ended tasks unfamiliar. We practise unpacking a task question and showing reasoning, step by step.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A two-year course of six subjects with three core elements, examined mainly in May and in some cases in November. Internal assessments sit alongside written papers.",
      countryNote:
        "A Diploma candidate from Narwana usually studies through a centre elsewhere, so the weekly online specialist becomes the dependable teacher for Maths, Physics and Economics.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Combines a small number of DP subjects with a career-related qualification, a reflective project and service learning.",
      countryNote:
        "It is uncommon in this part of Haryana. We support the academic courses where a student is enrolled and will say if another route fits better.",
    },
  ],

  subjectsIntro:
    "Haryana families ask about these IB Diploma courses most often. We confirm the syllabus year and level with the student's registering centre before teaching begins.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, algebra and proof for students considering engineering, physics or pure mathematics." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, financial maths and modelling with a graphing calculator." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, thermal physics, waves and fields with guided practice on the internal investigation." },
    { name: "Chemistry", levels: "SL and HL", description: "Structure, energetics, equilibrium and organic chemistry, with clear working for calculations." },
    { name: "Biology", levels: "SL and HL", description: "Molecular biology, genetics, ecology and human physiology." },
    { name: "Economics", levels: "SL and HL", description: "Market failure, macro policy and development, with diagram discipline." },
    { name: "Business Management", levels: "SL and HL", description: "Organisations, marketing and finance using case-study practice." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Agriculture, water use and land management, relevant to a canal-irrigated district." },
    { name: "Computer Science", levels: "SL and HL", description: "Computational thinking, programming and networks." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Critical reading of mixed texts and oral commentary practice." },
    { name: "Hindi B", levels: "SL and HL", description: "Structured second-language practice across reading, writing and speaking." },
    { name: "History", levels: "SL and HL", description: "Source analysis and essay structure across prescribed topics." },
    { name: "Psychology", levels: "SL and HL", description: "Biological, cognitive and sociocultural approaches." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion of ways of knowing, with exhibition planning; the essay is the student's own." },
  ],
  igcseSubjectsIntro:
    "Cambridge IGCSE sits mainly in the May-June and October-November series, and Edexcel adds January for some subjects. These courses come up most for Narwana students.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core and Extended", description: "Algebra, geometry, graphs and probability, with paper-by-paper exam practice." },
    { name: "Additional Mathematics", levels: "Extended route", description: "Stronger algebra and introductory calculus before IB Maths AA." },
    { name: "Physics", levels: "Core and Extended", description: "Forces, energy, electricity and waves with data-handling skills." },
    { name: "Chemistry", levels: "Core and Extended", description: "Atomic structure, reactions, rates and organic chemistry." },
    { name: "Biology", levels: "Core and Extended", description: "Cell biology, inheritance, plant nutrition and ecology." },
    { name: "Agriculture", levels: "Single tier", description: "Where a board offers it, crop and soil science that suits a farming district." },
    { name: "Economics", levels: "Single tier", description: "Supply, demand and government policy with local examples." },
    { name: "Accounting", levels: "Single tier", description: "Double-entry bookkeeping and financial statements for trading-family students." },
    { name: "English as a First Language", levels: "Single tier", description: "Writing for purpose and audience, and summary skills." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Reading, writing, listening and speaking." },
    { name: "Hindi as a Second Language", levels: "Single tier", description: "Offered by some boards and series, with the code checked first." },
    { name: "Computer Science", levels: "Single tier", description: "Algorithms, programming and data." },
  ],

  regionsTitle: "Narwana localities and nearby villages we teach online",
  tutorsIntro:
    "Narwana sessions are delivered by India-based tutors over live video, each listed with the IB programme or IGCSE specification they have taught. The first lesson lets a family meet one before deciding.",
  regionsIntro:
    "Lessons can reach any address in and around Narwana with a dependable connection. The notes below reflect town geography and travel patterns that affect when a student is free.",
  regions: [
    { name: "Railway junction area", note: "Households of railway employees and traders live close to the junction, and train timings shape evening routines. Lessons avoid the busiest commuter hours." },
    { name: "Anaj mandi and grain market", note: "Grain traders' families here work long days in the procurement seasons, so evening lessons shift later at peak times." },
    { name: "Jind Road", note: "The main road towards Jind, which is about 50 kilometres away and where many students go for coaching. Online lessons spare them that run." },
    { name: "Hisar Road", note: "The route to Hisar and its university and agricultural institutions, which families look to for higher study." },
    { name: "Kaithal Road", note: "The direction of Kaithal and onwards to Kurukshetra and Chandigarh, used by parents who travel for work." },
    { name: "Old town and bazaars", note: "Crowded lanes and noise make a quiet online lesson at home a practical choice for students here." },
    { name: "Narwana Branch canal belt", note: "Farming families along the canal live with seasonal water schedules and the paddy calendar." },
    { name: "Villages towards Uchana and Safidon", note: "Outlying villages where mobile data is uneven; we agree a backup connection before starting." },
    { name: "Residential colonies on the town edge", note: "Newer houses suited to families who have returned from abroad or work in distant cities." },
  ],
  schoolClusters: [
    {
      city: "Narwana itself",
      note: "No school in the town could be confirmed as an IB World School or an approved Cambridge or Edexcel centre. Schools we found follow Haryana Board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Jind and Hisar",
      note: "The larger towns of the region are useful for coaching and university, yet we could not confirm an IB or IGCSE school in either, so local options for an international syllabus remain limited.",
      schools: [],
    },
    {
      city: "Nearby: Chandigarh tricity",
      note: "Around 200 kilometres away, this is the closest place where we have recorded confirmed IB or Cambridge schools. Families sometimes relocate or board a child here.",
      schools: ["Strawberry Fields High School, Sector 26", "Firststeps School, Sector 26", "Oakridge International School, Mohali"],
    },
    {
      city: "Nearby: Gurugram",
      note: "Further by road but well connected through Delhi, with a wide choice of IB and Cambridge schools that some Narwana families consider for senior years.",
      schools: ["Pathways World School", "Heritage Xperiential Learning School"],
    },
  ],
  schoolDisclaimer:
    "The schools above are named only to show where confirmed international programmes exist outside Narwana, using public information. IB Gram works independently and is not affiliated with these schools, the IB, Cambridge or Pearson.",

  modesIntro:
    "Narwana does not receive in-person tutors, so the options below describe different ways of running an online lesson.",
  modes: [
    {
      title: "Weekly online private lessons",
      description: "A steady one-to-one slot with a single tutor, joined from a laptop at home.",
      bullets: [
        "One fixed hour each week, or two for Higher Level subjects",
        "Live whiteboard and worked examples",
        "Written notes after every lesson",
      ],
    },
    {
      title: "Paper-practice blocks",
      description: "Focused weeks before IB or IGCSE papers, built around past questions and mark schemes.",
      bullets: [
        "Timed attempts followed by careful review",
        "Error logs to track repeated mistakes",
        "Blocks scheduled away from harvest weeks",
      ],
    },
    {
      title: "Shared slots for two students",
      description: "Two students on the same course can split one session and its rate.",
      bullets: [
        "Only for identical course and level",
        "Good for revision and past-paper review",
        "Switch to private at any time",
      ],
    },
  ],

  sections: [
    {
      heading: "What kind of help do Narwana students actually need for the IB?",
      paragraphs: [
        "Students in Narwana who study an international syllabus face a different problem from students in a big city. There is no neighbouring classmate doing the same course, no school bulletin board, and no IB teacher down the road. The help needed is often as basic as someone who knows what an examiner wants in a six-mark question.",
        "For Mathematics and the sciences, the gap is usually conceptual sequencing. A student may have read every chapter of a textbook yet not know how topics connect, so a tutor maps the syllabus, marks the hard parts and sets weekly goals. For subjects such as Economics, Business and English, the gap is writing structure.",
        "Timing also matters. A student who lives in a town with power cuts and farm-season disruption benefits from a predictable weekly slot rather than an open schedule. We fix the day and hour with the family, then protect it.",
        "We do not replace the school or centre. We work beside it, reinforcing what is taught and prepping for what comes next, and we tell a family honestly when a topic is better handled by the student's own teacher.",
      ],
      bullets: [
        "Syllabus mapping and weekly goals",
        "Command-term and mark-scheme coaching",
        "Practice with timed papers",
        "Support with IA planning, never authorship",
      ],
    },
    {
      heading: "How do Haryana Board, CBSE, IB and IGCSE differ for Narwana families?",
      paragraphs: [
        "Most Narwana students follow Haryana Board or CBSE, and both lead to strong outcomes when taught well. The IB and IGCSE differ in what they ask of the learner: more explanation, more application and, in the IB, more independent research through the Extended Essay and Internal Assessments.",
        "Haryana Board papers draw heavily on the state textbook. CBSE leans on application within a national framework. IGCSE tiers papers into Core and Extended and usually has one final examination per subject. The IB Diploma spreads across six subjects and three core requirements, with marks from papers and internal work.",
        "Families often ask whether a move is wise. A student strong in memory and steady routine can do well in any of these. A student who enjoys discussion and cross-subject connections often finds IB rewarding. The table below sets out the contrast.",
        "The IB Diploma is recognised by the Association of Indian Universities as equivalent to Class 12, and IGCSE results are accepted at Class 10 level. Where a particular university or course has its own rules, we advise checking the notice itself.",
      ],
      table: {
        caption: "Boards compared for a Narwana student",
        columns: ["Point of comparison", "Haryana Board", "CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["Assessment style", "State textbook written papers", "National written papers with application", "Papers plus internal assessments and essay", "Tiered written papers with practical components"],
          ["Language of instruction", "Hindi or English", "Hindi or English", "English, with a second language", "English, with language options"],
          ["Exam timing", "February to March", "February to March", "May, sometimes November", "May or June, October or November"],
          ["Access in Narwana", "Widely available", "Available", "Online tuition only", "Online tuition only"],
          ["Main tutoring need", "Extra practice", "Application questions", "Internal assessment and HL depth", "Tier decisions and paper technique"],
        ],
      },
    },
    {
      heading: "Why does the Narwana calendar matter for IB and IGCSE study?",
      paragraphs: [
        "A student in Narwana lives inside a farm-and-market calendar that affects attention and time. In April, wheat harvest brings extra work at home. From late September to early November the paddy harvest, stubble burning and Diwali arrive together, with haze, noise and visitors.",
        "Summer heat from May through June can stretch above 40 degrees, and electricity supply sometimes falters. Winter fog between December and January slows roads and railways, which suits indoor study but can disrupt mock exam travel. July to September monsoon rains can waterlog low-lying lanes.",
        "We build a timetable from these facts. A student sitting the IB May session needs a steady February to April, exactly the months when harvest preparation begins. An IGCSE autumn candidate needs September and October, which collide with paddy. So we front-load revision and leave buffer weeks.",
        "The table below links local conditions to academic milestones so a family can see the pinch points months ahead.",
      ],
      table: {
        caption: "Narwana year mapped against IB and IGCSE milestones",
        columns: ["Months", "What is happening locally", "Academic milestone", "Suggested approach"],
        rows: [
          ["December to January", "Dense fog and cold spells", "Mock papers for May candidates", "Indoor early-evening slots, protect mock days"],
          ["February to April", "Wheat harvest builds", "IB internal assessment deadlines", "Front-load coursework planning before April"],
          ["May to June", "Extreme heat, power dips", "IB May and IGCSE summer papers", "Devices charged, hotspot backup, short sessions"],
          ["July to September", "Monsoon, waterlogging", "New syllabus content begins", "Establish the weekly rhythm"],
          ["October to November", "Paddy harvest, haze, Diwali", "IGCSE autumn and IB November papers", "Revision done early, buffer weeks left"],
        ],
      },
    },
    {
      heading: "What are the options for private tuition from a small town like Narwana?",
      paragraphs: [
        "A family in Narwana has four realistic choices, and none is wrong. Local coaching centres in the town and in Jind run batches for Class 10, Class 12 and entrance tests. Private tutors in the town teach board syllabi. Online platforms offer a wide choice but sometimes rotate tutors. Specialist one-to-one tuition matches a tutor to a single syllabus.",
        "The real test is fit. Ask whether the tutor has taught your exact programme, for instance IB Chemistry HL or Edexcel 4MA1, and whether they can show sample notes or a trial lesson. A tutor who answers with general reassurance rather than specifics may not know the course.",
        "We offer the trial lesson so that families can test fit before any money changes hands. Afterwards we send the rate in writing. If the first match does not click, we arrange another tutor without asking the student to justify the change.",
        "The following table sets out the trade-offs for Narwana households.",
      ],
      table: {
        caption: "Tuition options for Narwana students, compared",
        columns: ["Option", "Matches IB or IGCSE syllabus?", "Travel", "Watch out for"],
        rows: [
          ["Specialist online one-to-one", "Yes, matched by course code", "None", "Needs a steady connection"],
          ["Coaching centre in Narwana or Jind", "Rarely", "Daily or weekly trips", "Batches built around board exams and entrance tests"],
          ["Private board tutor in town", "Rarely", "Tutor or student travels", "Limited IB or IGCSE experience"],
          ["Large online marketplaces", "Sometimes", "None", "Tutor rotation and unclear qualifications"],
        ],
      },
    },
    {
      heading: "How much does IB or IGCSE tuition cost in Narwana?",
      paragraphs: [
        "There is no fixed price list on this page because responsible pricing depends on the student. Our rate is sent in writing after the free trial lesson, before any commitment. That avoids a situation where a family agrees on a call and later discovers add-ons.",
        "The main cost drivers are subject and level, the number of weekly hours, tutor seniority and whether the lesson is private or shared. Higher Level Physics or Mathematics usually costs more than a language at Standard Level because the pool of suitable tutors is smaller. A two-student shared slot reduces each family's share.",
        "Narwana families save in a less obvious way. There are no fuel costs to Jind or Hisar, no lost evening on the road, and no need to pay a tutor's travel. The money goes into teaching hours instead. A missed lesson can also be moved without losing a trip.",
        "We encourage families to start with a modest plan, perhaps one lesson a week, and review after a month. Increasing hours before a paper is easy; committing to a large block on day one rarely helps.",
      ],
    },
    {
      heading: "Which university pathways lead from Narwana with an IB or IGCSE background?",
      paragraphs: [
        "A student from Narwana with IB Diploma results has several doors. The Association of Indian Universities treats the Diploma as equivalent to Class 12. Many private universities, including those in Sonipat and Delhi NCR, accept IB scores. Central universities may ask for CUET-UG results, so the subject mix in the Diploma should be checked against the course.",
        "For engineering, JEE Main eligibility depends on having studied Physics, Chemistry and Mathematics. For medicine, NEET-UG eligibility asks for Physics, Chemistry, Biology and English. Both have detailed notices that change, so we urge families to read the current bulletin rather than depend on advice from a neighbour.",
        "In Haryana, Guru Jambheshwar University of Science and Technology and the agricultural university in Hisar, plus Kurukshetra University, are local destinations. A number of students look further, to Delhi, Chandigarh or overseas, where the IB Diploma and A Levels are familiar to admissions offices.",
        "IGCSE students usually continue to A Levels, the IB Diploma or a Class 11 board programme. Choosing which, and in which city, is easier with an early conversation about subjects and goals.",
      ],
      bullets: [
        "IB Diploma is accepted by AIU as a Class 12 equivalent",
        "CUET-UG, JEE Main and NEET-UG rules change yearly",
        "Keep Maths and two sciences together for engineering routes",
        "Ask each university about IB score acceptance in writing",
      ],
    },
    {
      heading: "How do IB Mathematics AA and AI differ, and which science should a student choose?",
      paragraphs: [
        "Analysis and Approaches is the algebra-and-calculus course. It asks for fluency with functions, differentiation, integration and proof-like reasoning. Applications and Interpretation is built around data, modelling and technology. Students who plan engineering or pure science are usually better served by Analysis and Approaches, while students aiming at business, psychology or design often thrive in Applications.",
        "Among the sciences, Physics suits students who like applying a few laws to many situations. Chemistry rewards tidy calculation and memory for reaction patterns. Biology asks for a great deal of precise vocabulary and diagram interpretation. The Internal Assessment in each is a student-designed investigation, so early planning matters.",
        "Online teaching suits these subjects well when done carefully. The tutor works on a shared tablet screen, the student writes in a notebook and photographs the page, and the tutor comments on method marks line by line. Practical skills, such as reading a graph or planning a method, are taught through data from past papers.",
        "At IGCSE the important choice is Core or Extended. Extended covers more and allows top grades, but it demands more algebra, so we test a student before recommending it.",
      ],
    },
    {
      heading: "How can a Narwana family begin?",
      paragraphs: [
        "Start with a short message. Send the programme, subject, level, exam session and school or online centre to support@ibgram.com or to +91 7439 368 115 on WhatsApp. We respond with a tutor recommendation and a few trial times.",
        "The first lesson is free and genuine. The tutor teaches a real topic, answers questions and leaves time for the parent to ask about experience and approach. No payment details are requested.",
        "If you want to continue, the written rate and weekly schedule follow. After each class the tutor writes a short note, which lets a parent who cannot sit beside the student see what happened.",
        "If the tutor and student do not suit each other, tell us. We change the match and the free-trial promise applies again.",
      ],
    },
  ],

  process: [
    { title: "Send the course details", description: "Share programme, subject, level, exam session and school or centre by WhatsApp or email." },
    { title: "Meet a matched tutor", description: "We propose a tutor with experience of that exact course and offer trial slots in IST." },
    { title: "Try a free lesson", description: "Join online from home and work through a real topic together." },
    { title: "Get the rate in writing", description: "A written rate and proposed schedule arrive before anything is booked." },
    { title: "Follow progress through notes", description: "A note after each session records topics, difficulties and practice tasks." },
  ],
  whyPoints: [
    { title: "Tutor matched to the syllabus", description: "We choose by course code and level, because a subject label alone hides real differences." },
    { title: "Plain statement on delivery", description: "Nobody comes to Narwana; lessons run live online and we say so openly." },
    { title: "Rates in writing", description: "You see the rate after the trial and before you commit, with no hidden add-ons." },
    { title: "Guidance without ghost-writing", description: "Tutors explain and review but never author IAs, essays or coursework." },
    { title: "Easy tutor change", description: "If the fit is poor we arrange a new tutor without a fuss." },
    { title: "Notes parents can read", description: "A short written summary follows every session so progress is visible." },
  ],

  faqs: [
    {
      question: "Can I find an IB tutor in Narwana?",
      answer:
        "Yes, through live online lessons rather than a local visit. IB Gram pairs a Narwana student with a tutor who has taught the specific IB course, working one to one over video on Indian time. We could not confirm any local IB school or centre, so a specialist online tutor is often the only way to get syllabus-level help from within the town.",
    },
    {
      question: "Is IGCSE home tuition available in Narwana?",
      answer:
        "It is available online, not in person. Our tutors do not come to houses in Narwana, because in-person teaching runs only in Gurugram and parts of Delhi NCR. A student joins from home, the tutor teaches live with a whiteboard, and a note follows. Families searching for home tuition usually find this gives the same comfort without travel on either side.",
    },
    {
      question: "Which schools near Narwana teach IB or IGCSE?",
      answer:
        "We could not confirm any in the town or in Jind or Hisar. The nearest places where we have recorded confirmed programmes are the Chandigarh tricity and Gurugram. Always check a school's status with the IB organisation or the exam board before enrolling. Our page lists schools only for geographic context and claims no link with them.",
    },
    {
      question: "How much do IB and IGCSE tutors cost in Narwana?",
      answer:
        "The rate is quoted in writing after a free trial lesson and depends on subject, level, weekly hours and tutor experience. We publish no price list. A shared slot for two students lowers each family's cost, and because lessons are online there is no fuel or travel cost to Jind or Hisar. Nothing is booked until you have seen the written terms.",
    },
    {
      question: "Can a student switch from CBSE or Haryana Board to an international syllabus?",
      answer:
        "Yes, and the best entry points are Class 9 for IGCSE and Class 11 for the IB Diploma. A switch needs a school or online centre willing to register the student, which is outside our control. We can prepare a student with bridge lessons in criterion-based writing, command terms and the content gaps between syllabi before the move happens.",
    },
    {
      question: "Do tutors write the IA or Extended Essay?",
      answer:
        "No. A tutor coaches, which means explaining the assessment criteria, helping with choosing a question and giving feedback on plans and drafts. The student does the research, writing and submission. This applies to Theory of Knowledge essays and all coursework too. Academic honesty is part of the IB's rules, and we protect it.",
    },
    {
      question: "What if the internet is unreliable in our village?",
      answer:
        "Agree a backup first. Villages around Narwana can have patchy mobile data, and summer power cuts are common. We suggest a charged laptop, a phone hotspot on a different network and a quiet room. If a call drops, the tutor reconnects or continues by audio, and any missed minutes are made up in another slot at no extra charge.",
    },
    {
      question: "Cambridge or Edexcel IGCSE: which should we choose?",
      answer:
        "The school or online centre decides, because a student sits the board that centre registers. Cambridge has a wide subject list and two main sessions, while Edexcel offers a January session for some subjects. Syllabus codes differ, such as 0580 for Cambridge Mathematics and 4MA1 for Edexcel. Tell us the code and we match a tutor who has taught it.",
    },
    {
      question: "When are the IB and IGCSE examinations held?",
      answer:
        "IB Diploma papers are held mainly in May, with a November session for some schools. IGCSE sessions fall in May or June and October or November, plus January for some Edexcel subjects. Your school or centre publishes the exact dates. For Narwana students we plan revision backwards from those dates, allowing for harvest, Diwali and winter fog.",
    },
    {
      question: "Will universities in India accept IB results?",
      answer:
        "Generally yes. The Association of Indian Universities treats the IB Diploma as equal to Class 12, and many universities accept scores directly. Central university seats may require CUET-UG, and JEE Main and NEET-UG carry their own eligibility rules that change each year. Check the current official notice for any course you are targeting.",
    },
    {
      question: "Can two students from Narwana share a lesson?",
      answer:
        "Yes, if they follow the same course and level. A shared online slot lowers the cost for each family and suits revision and past-paper practice. We do not combine different syllabi because it weakens the lesson for both. Siblings at different stages are better served by separate sessions with the same tutor where possible.",
    },
    {
      question: "What results can a tutor promise?",
      answer:
        "None, because grades depend on the student, the school and the examiner. What we offer is a match on the exact syllabus, a free first lesson, regular written notes and the option to change tutors. That lets a family judge progress from evidence, not from a promise. Be wary of anyone who guarantees marks.",
    },
    {
      question: "Do you teach younger children in PYP or MYP?",
      answer:
        "Yes, in shorter sessions suited to age. PYP support centres on spoken English, early reading and number sense through games and stories. MYP support centres on criterion-based writing, research skills and project planning. The Personal Project remains the student's own, and tutors advise on planning and reflection without contributing content.",
    },
    {
      question: "How do I arrange a free trial from Narwana?",
      answer:
        "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with the course, level, exam session and school. We propose a tutor and trial times, often within a day. The trial is a real lesson with no obligation and no payment details needed. A written rate follows only if you decide to continue.",
    },
    {
      question: "Is IB Gram linked to any school or exam board?",
      answer:
        "No. We are an independent tutoring service with no affiliation to the IB, Cambridge, Pearson or any school. School names on this page appear only as public geographic context. Please confirm any school's authorisation directly with the relevant body before making decisions about enrolment or transfer.",
    },
    {
      question: "Will the tutor understand Haryanvi or Hindi if my child struggles in English?",
      answer:
        "Lessons run in English, since the IB and IGCSE are assessed in English, but many of our India-based tutors speak Hindi and will clarify a concept briefly in it when a child is stuck. The aim is to build English confidence steadily, not to teach in Hindi. Tell us at the start and we match accordingly.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Our online model and city pages for students anywhere in India." },
    { label: "Gurugram home tuition", href: "/gurgaon/", description: "Where in-person IB and IGCSE home visits are available." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Matching tutors to IB programmes and subjects." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject packages." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, core and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and projects." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "How CP combines DP courses and career study." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI side by side." },
    { label: "Admissions test preparation", href: "/admissions/test-prep/", description: "Support for entrance and admissions tests." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to arrange a tutor match and free trial." },
    { label: "IB and IGCSE tutors in Jind", href: "/jind/", description: "The district headquarters, about 50 kilometres from Narwana." },
    { label: "IB and IGCSE tutors in Hisar", href: "/hisar/", description: "A nearby university city in Haryana." },
    { label: "IB and IGCSE tutors in Kaithal", href: "/kaithal/", description: "A neighbouring Haryana town on the route to Kurukshetra." },
  ],

  closingHeading: "Start with a free IB or IGCSE lesson at home in Narwana",
  closingBody:
    "Give us the course, the level and the exam session, and we will propose a tutor who has taught exactly that. The first lesson is free, the written rate comes after, and your child never needs to travel to Jind. Write on WhatsApp to +91 7439 368 115 or email support@ibgram.com.",
};
