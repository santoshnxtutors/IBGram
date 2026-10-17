import type { CitySeoPage } from "../types";

/**
 * /salur/ - IB and IGCSE tutoring page for Salur, Andhra Pradesh (Parvathipuram Manyam district).
 * No IB or IGCSE school could be confirmed in Salur, so stripSchools is empty and the clusters are
 * honestly labelled nearby-city groups (Visakhapatnam, Vizianagaram). Delivery is online one-to-one.
 * Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const salur: CitySeoPage = {
  slug: "salur",
  countryName: "Salur",
  countryNameLong: "Salur, Andhra Pradesh",
  demonym: "Salur",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  flagCode: "in",
  countryCode: "IN",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson plans leave room for Sankranti, Dasara, cyclone-season disruption in October and November, and the rhythm of your child's own school calendar",
  lastUpdated: "2026-09-21",
  geo: { latitude: 18.5174, longitude: 83.2073 },
  wikipedia: "https://en.wikipedia.org/wiki/Salur",
  alternateNames: ["Saluru", "Salur Vizianagaram", "Salur Parvathipuram"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Salur | Online Home Tuition, Free Trial",
  metaDescription:
    "Online IB and IGCSE tutors for Salur, Andhra Pradesh: live one-to-one lessons at home, timed around Sankranti and cyclone season, free trial first.",
  h1: "IB and IGCSE Tutors and Home Tuition in Salur",
  heroEyebrow: "SALUR: IB & IGCSE TUITION FOR NORTH ANDHRA FAMILIES",
  heroSubtitle:
    "Searching for home tuition in Salur that covers the IB or Cambridge IGCSE? Our tutors teach online, one to one, from elsewhere in India, so your child can study from the family home with a laptop and a notebook. Nobody travels to your door; in-person visits run only in Gurugram and parts of Delhi NCR. The first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Salur",
  imageAltText: "A Salur schoolgirl practising IGCSE Chemistry calculations with a tutor over a video call at a study table",
  secondaryKeywords: [
    "IB tutor Salur",
    "IGCSE tutor Salur",
    "IB home tuition Salur",
    "IGCSE home tuition Salur",
    "IB private tuition Salur",
    "IB Maths tutor Salur",
    "IGCSE Maths tutor Salur",
    "IB Physics tutor Salur",
    "IB Chemistry tutor Salur",
    "IB Biology tutor Salur",
    "IB DP tutor Salur",
    "IB MYP tutor Salur",
    "IB PYP tutor Salur",
    "IGCSE online tuition Salur",
    "IB tutor Parvathipuram",
    "IB tutor Bobbili",
    "IB tutor Makkuva",
    "Saluru IB tuition",
    "online IB tuition Andhra Pradesh Salur",
  ],

  heroTrustPoints: [
    "Tutors based in India and teaching in IST, with no overseas time difference to juggle",
    "A free trial lesson before any rate is discussed",
    "A written summary after each lesson for parents",
    "A tutor switch on request if the match is not working",
    "Coaching only: IAs, Extended Essays and TOK essays stay the student's own",
  ],
  heroStats: [
    { value: "IST", label: "One clock for family and tutor" },
    { value: "PYP to DP", label: "IB stages plus IGCSE" },
    { value: "Free trial", label: "Sample a real lesson" },
    { value: "Online", label: "Live, private, at home" },
  ],

  intro: {
    heading: "IB and IGCSE tutors in Salur, a railway town on the Andhra-Odisha edge",
    paragraphs: [
      "Salur sits in the hill-fringed northern part of Andhra Pradesh, in Parvathipuram Manyam district since the 2022 reorganisation, and it has long been a junction town: trains, trucks and traders move through it between Visakhapatnam, Odisha and Chhattisgarh. Telugu is the language of the street, with Odia heard at the edges. A family here who searches for IB and IGCSE tutors in Salur usually knows exactly what they want and has found no one locally who can supply it.",
      "No school in Salur itself could be confirmed as offering the IB or a Cambridge or Edexcel IGCSE course. The schools of the town follow the Andhra Pradesh state board or CBSE, in Telugu or English medium. Families who want an international route look towards Visakhapatnam, roughly a couple of hours away, or plan for a Diploma year elsewhere. Some are returning from jobs in the United States, the Gulf or Singapore, and arrive with a child in an unfamiliar syllabus.",
      "IB Gram tutors are based in India and teach on Indian Standard Time. Since in-person home tuition exists only in Gurugram and parts of Delhi NCR, Salur lessons are online: live video, a shared whiteboard, the student's own worked problems and a written note after each session. The first lesson is free, and rates are given in writing after it.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Primary learning built around inquiry units and transdisciplinary themes, in which a child reads, writes and counts in the service of a real question.",
      countryNote:
        "A Salur child coming back from an overseas PYP school often needs a steady weekly routine to keep English reading and mental arithmetic sharp while also building Telugu literacy.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Concept-led teaching in eight subject groups, marked against published criteria, with a personal project in the final year.",
      countryNote:
        "Students moving from an English-medium state or CBSE class to MYP rely on tutors to explain criteria, practise extended answers and build habits of written reasoning.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects across three levels of difficulty, plus Theory of Knowledge, an Extended Essay and creativity, activity and service.",
      countryNote:
        "A Salur student planning for Andhra University, IIM Visakhapatnam's ecosystem or a degree abroad needs subject combinations chosen with equivalence and entrance requirements in mind.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A flexible pathway combining at least two DP courses with a career-related study, a reflective project and language development.",
      countryNote:
        "Uncommon in north Andhra, the CP can suit a student with a practical or vocational aim who still wants an international credential; tutors support the DP components within it.",
    },
  ],
  programmesIntro:
    "From a nursery reader to a Diploma candidate, each lesson in Salur begins with what the student can already do and builds from there.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Functions, calculus, vectors and proof, demanded by engineering, physical science and economics courses." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology, a sensible fit for future doctors, business students and social scientists." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, fields, waves and modern physics, with data-based and experimental questions." },
    { name: "Chemistry", levels: "SL / HL", description: "Stoichiometry, equilibrium, organic reaction pathways and how to structure a multi-part answer." },
    { name: "Biology", levels: "SL / HL", description: "Cell function, genetics and ecology, taught through diagrams, graphs and experimental design." },
    { name: "Economics", levels: "SL / HL", description: "Trade, growth and policy, tied naturally to a railway, agricultural and mining region like north Andhra." },
    { name: "Business Management", levels: "SL / HL", description: "Case-study analysis that suits children from trading and rice-milling families." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming logic, databases and networks, popular with Andhra's software-minded households." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Ecosystems and sustainability, relevant to students who grow up near the Eastern Ghats and river basins." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Analysing texts and writing comparative commentary for students who switch between Telugu and English." },
    { name: "Telugu A / Telugu B", levels: "SL / HL", description: "Literature or language acquisition, for students for whom Telugu is the home language." },
    { name: "Theory of Knowledge", levels: "Core", description: "Conversation on how knowledge is built; the essay and exhibition remain the student's own." },
  ],
  subjectsIntro:
    "Subject plans come from the degree in mind and the current report card, not from which course seems easiest on paper.",

  igcseSubjects: [
    { name: "Mathematics (Core and Extended)", levels: "Cambridge 0580 / Edexcel", description: "Algebra, geometry, statistics and number work with practice at both tiers." },
    { name: "Additional Mathematics", levels: "Cambridge 0606", description: "Calculus and functions for a student with IB HL or A Level in sight." },
    { name: "Physics", levels: "Cambridge 0625 / Edexcel", description: "Motion, energy, circuits and waves, with calculation-heavy papers." },
    { name: "Chemistry", levels: "Cambridge 0620 / Edexcel", description: "Atomic structure, bonding, rates and organic basics." },
    { name: "Biology", levels: "Cambridge 0610 / Edexcel", description: "Organ systems, inheritance and environment, with lots of data-response practice." },
    { name: "English as a Second Language", levels: "Cambridge 0510", description: "Reading, writing and speaking for students whose first language is Telugu." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Algorithms, pseudocode and data storage." },
    { name: "Economics", levels: "Cambridge 0455", description: "Scarcity, market behaviour and macroeconomic policy." },
    { name: "Accounting", levels: "Cambridge 0452", description: "Bookkeeping and financial statements, handy for trading families." },
    { name: "First Language or Second Language options", levels: "Cambridge, subject to exam centre", description: "Language subjects beyond English depend on what the exam centre can enter; confirm availability early." },
  ],
  igcseSubjectsIntro:
    "IGCSE usually runs from Class 9 to Class 10. A student aiming at science or mathematics later should choose the Extended tier from the start.",

  regionsTitle: "Salur and nearby towns our online students study from",
  regionsIntro:
    "Lessons are online, wherever the family lives. The notes below describe how each area's daily life tends to shape lesson timing.",
  regions: [
    { name: "Salur town centre", note: "The market streets and older neighbourhoods, where families are closely tied to trade and government service and evening slots after 6 pm are popular." },
    { name: "Railway station area", note: "Households connected to the railway and its offices, who often prefer weekday evenings and fixed times that fit shift patterns." },
    { name: "Bobbili road side", note: "The approach towards Bobbili, home of the fort and the famous veena, with families who commute between both towns for school and work." },
    { name: "Parvathipuram road side", note: "The road towards the district headquarters, where government employees and their children are concentrated." },
    { name: "Pachipenta", note: "A neighbouring mandal on the way to the hills, with quieter roads and, in some seasons, patchy mobile data that affects the choice of lesson time." },
    { name: "Makkuva", note: "An agricultural mandal where harvest and sowing calendars matter more than school holidays for many households." },
    { name: "Bobbili", note: "The historic town known for its fort and its craft traditions, with more school choice and a steady tuition culture." },
    { name: "Parvathipuram", note: "The district headquarters to the north, with government offices and a growing set of schools." },
  ],

  schoolClusters: [
    {
      city: "Salur town",
      note: "We could not confirm any IB or Cambridge or Edexcel IGCSE school in Salur. Local schools follow the Andhra Pradesh state board or CBSE, so families wanting an international syllabus usually tutor online.",
      schools: [],
    },
    {
      city: "Nearby: Visakhapatnam",
      note: "Roughly 120 to 130 kilometres south-east, Visakhapatnam has the nearest cluster of IB and IGCSE schools, and some Salur families plan for boarding or a move there for the senior years.",
      schools: ["Silver Oaks International School, Rushikonda", "Oak Valley International School", "Oakridge International School, Visakhapatnam"],
    },
    {
      city: "Nearby: Vizianagaram",
      note: "About halfway to the coast, Vizianagaram is a practical stopover for families travelling to Visakhapatnam and has a few school options of its own; check each school directly for current curricula.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "The schools named are listed only because some families in the Salur area look at them. IB Gram is independent of the IB, Cambridge, Pearson and every school mentioned, and naming a school does not endorse it. Please verify curriculum and admission rules with each school.",

  modesIntro:
    "Tutors do not come to a Salur house, because in-person sessions run only in Gurugram and parts of Delhi NCR. Salur families choose from three online formats.",
  modes: [
    {
      title: "Regular weekly online lessons",
      description: "One tutor on one subject at a fixed slot, with live marking of the student's own working and a task for the week.",
      bullets: ["Fixed day and hour", "Live written feedback", "Note after each lesson"],
    },
    {
      title: "Returning-family transition plan",
      description: "For a child coming back from abroad or a metro school, a short plan that fills syllabus gaps and rebuilds confidence.",
      bullets: ["Early diagnostic lesson", "Telugu and English literacy support", "Paced catch-up"],
    },
    {
      title: "Pre-exam revision run",
      description: "A short intensive block of timed papers and error review before the May or November IB session or the IGCSE series.",
      bullets: ["Timed past papers", "Error log", "Topics ranked by marks"],
    },
  ],

  sections: [
    {
      heading: "What kind of family in Salur asks about IB and IGCSE tuition?",
      paragraphs: [
        "Three kinds of household keep appearing. The first is the returning family: one or both parents have worked in the United States, the Gulf, Singapore or Australia, as many Telugu professionals do, and are back in the north Andhra region for elderly parents or a family business. Their child has been taught in an international curriculum and cannot simply switch to a state-board textbook.",
        "The second is the ambitious local family. Their child may be good at mathematics and science, and the parents have read that an IGCSE or IB record opens overseas doors. They are not certain about fees or logistics and want an honest conversation before they commit to a school change.",
        "The third is the relocating family whose employment moves them along the Visakhapatnam corridor, where industry, ports and information technology keep growing. A child may join an IB school in the port city and need support at home to keep pace.",
        "In each case the answer begins with a diagnostic lesson. The tutor does not assume what the child knows; they look at a real piece of work and report on it in plain language to the parents.",
      ],
    },
    {
      heading: "How do Andhra Pradesh state board, CBSE, IGCSE and the IB Diploma differ?",
      paragraphs: [
        "The Andhra Pradesh state board conducts the SSC examination at Class 10 and the Intermediate examinations at Class 11 and 12, in Telugu or English medium, and those results feed into the AP EAPCET entrance tests for engineering, agriculture and pharmacy courses. CBSE is the nationwide alternative, based on NCERT books, with a lighter presence in smaller towns like Salur.",
        "IGCSE sits between Class 9 and 10 and is examined through subject papers in which the student must explain, compare or evaluate as well as calculate. The IB Diploma asks for six subjects and a core, including an Extended Essay and Theory of Knowledge, and places weight on independent work.",
        "Families often ask which is harder. The honest answer is that they are different. A student who scores high in state-board mathematics may lose marks in IGCSE by not showing reasoning, and a student who does well in IB Biology may find AP EAPCET questions more factual than he expects.",
        "The table lays out the main differences in one place.",
      ],
      table: {
        caption: "Boards a Salur family can compare",
        columns: ["Feature", "AP state board", "CBSE", "Cambridge / Edexcel IGCSE", "IB Diploma"],
        rows: [
          ["Medium", "Telugu or English", "English mainly", "English", "English plus another language"],
          ["Main exam", "SSC and Intermediate", "Class 10 and 12 board exams", "Series exams at about 16", "May or November at about 18"],
          ["Typical question", "Textbook-based", "Application of NCERT content", "Structured and explained", "Extended and evidence-based"],
          ["Seen in Salur", "Widely", "A few schools", "None confirmed", "None confirmed"],
          ["Route to AP EAPCET or NEET", "Direct", "Direct", "Needs a senior-level pathway", "Needs equivalence and subject check"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Salur, and what moves the rate?",
      paragraphs: [
        "IB Gram does not advertise fixed prices because the work varies too widely. A student needing one weekly IGCSE Physics hour is a different request from a Diploma student wanting three subjects. The rate arrives in writing after the free lesson, with a proposed plan, and you can say no at that point.",
        "The factors are consistent. Subject and level come first: Higher Level Chemistry involves more preparation than Core IGCSE English. Then comes the tutor's experience with a particular specification and the style of its examiners. The number of weekly lessons and their length come next, and finally whether an extra revision burst is wanted before an exam.",
        "One advantage of online lessons in Salur is that nothing needs adding for travel. A trip to Visakhapatnam for coaching means hours on the road, a bus or train fare and often a lodging cost. None of those are part of an online plan.",
        "When asking for a quote, tell us the student's class, the board and session they are aiming for and any weekend preference. That allows a realistic plan to be drawn up.",
      ],
    },
    {
      heading: "Is an online tutor better than a Visakhapatnam coaching centre, a town tutor or learning alone?",
      paragraphs: [
        "For most Salur students online private tuition is the most practical option, because the others carry heavy trade-offs. Coaching in Visakhapatnam is a daily journey of hours. Local tuition centres specialise in state-board and EAPCET content. A town tutor who knows IGCSE or IB is very hard to find.",
        "Learning alone can work for a disciplined student. Past papers, mark schemes and examiner reports are available online, and some students use them very well. The weakness is that no one else reads your working, so repeated errors go unseen until the exam marks them.",
        "An online tutor reads the student's own page and explains where marks were lost. The session can be recorded in notes that the parent reads later. If a lesson is missed because of rain, a power cut or a festival, it is moved without a journey wasted.",
        "The table below compares the choices plainly.",
      ],
      table: {
        caption: "Ways a Salur student can prepare for an international syllabus",
        columns: ["Option", "Knows IB or IGCSE marking", "Attention to the student", "Practical burden"],
        rows: [
          ["Online one-to-one tutor", "Yes, by subject and level", "Whole lesson on one child", "A laptop and steady internet"],
          ["Coaching centre in Visakhapatnam", "Varies by centre", "Shared with a batch", "Hours of travel or a move"],
          ["State-board tuition in Salur", "No, aimed at SSC and EAPCET", "Shared with a large class", "Low, but the syllabus differs"],
          ["A private teacher in town", "Seldom", "Good when available", "Hard to find for IB or IGCSE"],
          ["Self-study", "Only what the student reads", "None", "Demands strong discipline"],
        ],
      },
    },
    {
      heading: "How do Sankranti, Dasara and the cyclone season shape a study year in Salur?",
      paragraphs: [
        "Andhra life is punctuated by festivals that take families away from desks. Sankranti in January is the biggest, with three days of celebration, travel to ancestral villages and a school holiday of nearly a week. Since it falls between the IGCSE mock season and the final IB mocks, revision plans need a built-in pause.",
        "Dasara in October brings another spell of holidays, and in the wider Vizianagaram region the Sirimanu festival of Pydithalli Ammavari draws crowds and closes some roads. The Diwali period follows soon after. Students taking the November IB session or the October and November IGCSE series will be working through all of this.",
        "October and November are also the season when the Bay of Bengal throws up cyclones, and north Andhra has been hit before. Power may be off for days after a storm, so a plan should have a phone hotspot or a power bank ready, and lessons moved rather than lost.",
        "The table summarises the year.",
      ],
      table: {
        caption: "A study year in Salur",
        columns: ["Period", "What is happening", "How tuition adapts"],
        rows: [
          ["January to February", "Sankranti, IGCSE mock season, pleasant weather", "Plan a pause in festival week, concentrate on mocks"],
          ["March to May", "IGCSE series, IB May exams, strong heat", "Early morning or evening lessons, backup internet"],
          ["June to September", "Southwest monsoon, new school year", "Start topics anew, weekly rhythm"],
          ["October to November", "Dasara, Diwali, IB November session, cyclone risk", "Flexible dates, power bank and hotspot ready"],
          ["December", "Cooler days, results planning", "Reviewing mistakes and targets for next session"],
        ],
      },
    },
    {
      heading: "Where can a Salur IB or IGCSE student go after school?",
      paragraphs: [
        "Within Andhra Pradesh, the obvious destinations are Andhra University in Visakhapatnam, GITAM, and the professional colleges in the port city. An IB Diploma earns equivalence from the Association of Indian Universities, and students then apply to these institutions in line with each one's own admission rules, sometimes through entrance tests such as CUET-UG or AP EAPCET.",
        "Medical and engineering aspirants should note that NEET and JEE Main require Physics, Chemistry and Biology or Mathematics at senior-school level. IB Higher or Standard Level subjects can satisfy these conditions, but the combination has to be chosen at the start of Class 11 and checked against current rules.",
        "Abroad, the IB Diploma is read worldwide, and A Level results are the route into UK universities. Telugu families have long links to the United States, and American colleges read IB results alongside SAT or ACT scores. IGCSE on its own is a stepping stone, not a university qualification.",
        "Tutors help with subject depth and exam technique. They cannot promise admissions, and they do not claim to predict a result.",
      ],
    },
    {
      heading: "What do IB Mathematics and the sciences demand, and how do tutors prepare a Salur student?",
      paragraphs: [
        "IB Mathematics comes in two versions. Analysis and Approaches treats algebra, calculus and proof in depth, and is chosen by most students hoping for engineering or pure science. Applications and Interpretation brings statistics and technology to the front and suits medicine, economics and business.",
        "A typical Andhra student arriving from the state board has strong procedural skills and a habit of fast calculation. The adjustment is learning to write reasoning, to state an assumption and to interpret an answer in context, since the IB awards marks for method and communication.",
        "In the sciences, internal assessment and practical skills count. A student who has done few experiments should not feel behind. The tutor works through designing an investigation, identifying variables, handling uncertainty and writing an evaluation, always on the student's own data.",
        "Tutors teach how to read a command term, plan an answer and check units. They do not write an IA; they comment on what the student has drafted and explain what a marker wants to see.",
      ],
    },
    {
      heading: "How do IGCSE Core and Extended papers work, and what should a student in Salur choose?",
      paragraphs: [
        "Most IGCSE subjects have a Core and an Extended paper. Core limits the top grade available; Extended opens the entire scale. A student who wants to continue with sciences or mathematics at IB Higher Level or A Level should generally aim for Extended.",
        "A balanced set of subjects at this age might include English, Mathematics, two sciences, a business or economics subject and a language. Telugu-speaking students sometimes add a second language as a low-stress addition beside the heavier subjects.",
        "Cambridge and Edexcel differ in layout more than difficulty. Cambridge papers tend to ask multi-part structured questions, while Edexcel papers look more like conventional school papers. The board a student follows depends on the school or exam centre that enters them.",
        "A private candidate from Salur needs an approved exam centre, which may be in Visakhapatnam or further away. Enquire early, check deadlines and costs in writing, and treat it as a practical task that needs months, not weeks.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Send your child's class, current board and the subject that worries you by WhatsApp or email." },
    { title: "Confirm the syllabus", description: "We check the exam board, tier and session, and whether your child attends a school or enters as a private candidate." },
    { title: "Try a free lesson", description: "A tutor matched on subject and level teaches a real lesson at a time that suits your evening." },
    { title: "Read the rates in writing", description: "After the trial you receive a quote and a weekly plan, and nothing is booked beforehand." },
    { title: "Carry on with notes", description: "Lessons run weekly, a short note follows each one, and a different tutor is available if you ask." },
  ],

  whyPoints: [
    { title: "Specification-led teaching", description: "Tutors teach from IB subject guides and the Cambridge and Edexcel syllabuses." },
    { title: "Plain about online delivery", description: "No tutor visits Salur homes. All lessons are live, online and private." },
    { title: "Transition experience", description: "We help children who arrive from state boards, from abroad or from metro schools." },
    { title: "Rates after the trial", description: "You see a written quote only once you have watched a lesson." },
    { title: "Guidance, not ghost-writing", description: "Tutors coach the student's own IA, essays and coursework and never write them." },
    { title: "A calendar that fits Andhra", description: "Sankranti, Dasara and cyclone weeks are accounted for from the start." },
  ],

  tutorsIntro:
    "All tutors teach live from India and are matched by subject, level and exam board. The free lesson is the time to see whether the style suits your child.",

  faqs: [
    { question: "Do tutors come to our home in Salur?", answer: "No tutor comes to a home in Salur. In-person tuition exists only in Gurugram and parts of Delhi NCR. Your child studies online at home, with a live tutor, a shared whiteboard and a notebook in front of the camera. Many families in smaller towns prefer this, since the closest-matched teacher can be anywhere in India and no journey time is wasted." },
    { question: "Is there an IB or IGCSE school in Salur?", answer: "We could not confirm an IB or Cambridge or Edexcel IGCSE school in Salur. Schools here follow the state board or CBSE. The closest cluster of international-curriculum schools is in Visakhapatnam, a couple of hours away. Please verify a school's current curriculum and admissions with the school itself before making any plans based on it." },
    { question: "How much does IB or IGCSE tuition cost in Salur?", answer: "There is no fixed price; it depends on subject, level, the tutor's experience and lessons per week. After a free trial you receive a written quote and then decide. Higher Level sciences usually cost more than Core IGCSE subjects. Online lessons include no travel cost, which matters for a family 120 kilometres from the nearest big-city centre." },
    { question: "Can my child move from the AP state board to IGCSE or IB?", answer: "Yes, and the easiest windows are the start of Class 9 for IGCSE and the start of Class 11 for the Diploma. A later move needs a catch-up plan. In the first lesson the tutor reviews your child's work and lists gaps, such as command terms, practical skills and the depth of written explanation that the new course expects." },
    { question: "Can a Salur student take IGCSE as a private candidate?", answer: "Often yes, provided an approved exam centre accepts private entries. Such centres are in larger cities, possibly Visakhapatnam or Hyderabad, and each has its own deadlines and fees. Enquire about six months ahead. The tutor prepares the student for papers and mocks, while the family deals with the centre for registration." },
    { question: "How do cyclones and festivals affect the lesson plan?", answer: "We plan around them. For Sankranti and Dasara we agree a pause or lighter weeks in advance. During cyclone season in October and November, we avoid fixing critical dates on forecast storm days and keep spare slots. If the power fails, a phone hotspot or power bank usually keeps a lesson going, otherwise it is simply moved." },
    { question: "Will the tutor write my child's IA or Extended Essay?", answer: "No, and that rule protects your child. IAs, Extended Essays, TOK essays and coursework must be written by the student. A tutor explains criteria, reads a draft the student has produced, asks questions to sharpen the thinking and checks presentation, but does not supply content. A school can penalise work that is not the student's own." },
    { question: "Is an IB Diploma accepted in Indian universities?", answer: "In general yes. The Association of Indian Universities treats the Diploma as equivalent to Class 12, and CUET-UG is the main route to central universities. Each course can ask for particular subjects, so check the requirements before choosing. Medical and engineering entrance tests also need specific science and mathematics combinations, which must be chosen at the start of Class 11." },
    { question: "Can IB or IGCSE students sit NEET, JEE or AP EAPCET?", answer: "Sometimes, depending on the subjects studied and marks obtained. NEET and JEE Main each set subject conditions, and AP EAPCET has its own eligibility rules for students outside the state board. Confirm the current conditions with the conducting authority before finalising subjects, and never rely on second-hand advice alone." },
    { question: "Which exam boards do your tutors teach?", answer: "Cambridge International and Pearson Edexcel at IGCSE, with AS and A Level as background, plus IB PYP, MYP and DP. Before teaching, the tutor asks which specification code and which exam session your child is entered for. Two IGCSE Mathematics students can be on different syllabuses, so the tutor checks rather than assumes." },
    { question: "At what age should tuition start?", answer: "There is no fixed age. A primary child may begin with reading confidence and number sense, an MYP student when criterion-based tasks feel unfamiliar, and an IGCSE or Diploma student at the start of the course. Starting only six months before the exams is usually too late for a student who has not practised the paper style." },
    { question: "How does the free trial lesson work?", answer: "Tell us the class, the current board and the subject. We name a tutor and fix a real lesson at a suitable time, often an evening or a weekend. Your child works on a live problem while you watch how the tutor explains it. Afterwards you receive rates in writing and choose whether to continue or stop." },
    { question: "Can we change tutors if it is not working?", answer: "Yes, at any time and with no awkwardness. A tutor who suits one child may not suit another, because of pace, tone or timetable. Tell us what felt wrong and we propose someone else, usually within a few days. The written notes from each lesson help the new tutor carry on from where the last one stopped." },
    { question: "Can tutors help with Telugu or English as well?", answer: "Yes. Telugu A and B at IB, English A at IB and English as a Second Language at IGCSE are all supported. Students in Salur often read and speak Telugu at home and study in English, so a tutor helps with written analysis, exam-style essays and spoken presentation in whichever language the paper demands." },
    { question: "How do I get started from Salur?", answer: "Write on WhatsApp to +91 7439 368 115 or email support@ibgram.com with the class, present board and the troublesome subject. A short reply follows, with a tutor suggestion and a trial slot. There is no form and no advance payment, so the first step costs nothing and commits you to nothing." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Tutors, subjects and programmes in one place." },
    { label: "All Indian cities", href: "/india/", description: "The full list of cities where we teach online." },
    { label: "Gurugram", href: "/gurgaon/", description: "The area with in-person home visits, along with parts of Delhi NCR." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Find tutors by IB subject and level." },
    { label: "IGCSE", href: "/igcse/", description: "Cambridge and Edexcel subjects explained." },
    { label: "IB MYP", href: "/programmes/myp/", description: "How the five MYP years are organised." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI courses in detail." },
    { label: "Contact us", href: "/contact-us/", description: "Write to us or book the free trial." },
    { label: "Vizianagaram", href: "/vizianagaram/", description: "The city halfway towards the coast." },
    { label: "Visakhapatnam", href: "/visakhapatnam/", description: "The nearest big city with IB and IGCSE schools." },
    { label: "Bobbili", href: "/bobbili/", description: "The neighbouring historic town." },
    { label: "Srikakulam", href: "/srikakulam/", description: "The coastal district to the east." },
  ],

  closingHeading: "Try one free online lesson from your own home in Salur",
  closingBody:
    "If you have been trying to find a teacher who can handle the IB or an IGCSE paper, a few lines are enough to start. Tell us the class, the board your child studies under today and the subject that needs work. We reply with a tutor and a trial slot, and the rate is written down only after you have seen the lesson.",
};
