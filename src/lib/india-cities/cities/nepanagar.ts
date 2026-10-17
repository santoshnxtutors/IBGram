import type { CitySeoPage } from "../types";

/**
 * Nepanagar, Burhanpur district, Madhya Pradesh: the newsprint-mill township on the Nimar-Khandesh
 * edge. No IB or Cambridge school was confirmed locally, so stripSchools is empty; clusters use
 * Indore, Bhopal and Nagpur names already checked on those city pages.
 */
export const nepanagar: CitySeoPage = {
  slug: "nepanagar",
  countryName: "Nepanagar",
  countryNameLong: "Nepanagar, Burhanpur district, Madhya Pradesh",
  demonym: "Nepanagar",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "After the evening shift change and school return, with a lighter schedule in the fiercest weeks of the Nimar summer",
  lastUpdated: "2026-09-21",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  geo: { latitude: 21.4167, longitude: 76.0833 },
  wikipedia: "https://en.wikipedia.org/wiki/Nepanagar",
  alternateNames: ["NEPA Nagar", "Nepa Nagar", "Nepanagar Burhanpur", "Nepanagar newsprint town"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Nepanagar | Online Private Tuition",
  metaDescription:
    "Online one-to-one IB and IGCSE private tuition for Nepanagar students, with tutors matched by board and subject, written notes and a free first lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Nepanagar",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR NEPANAGAR FAMILIES",
  heroSubtitle:
    "Private tuition from home for IB and IGCSE students in Nepanagar, taught as live one-to-one lessons over video. This mill township in Burhanpur district draws families on transfer from across the country, and a child arriving from an IB or Cambridge school elsewhere finds no matching classroom here. A tutor who knows the syllabus can bridge that gap. Tell us the programme, subject and exam session, and we book a free trial.",
  primaryKeyword: "IB and IGCSE tutors in Nepanagar",
  imageAltText: "Nepanagar student in Burhanpur district taking a live online IB Economics lesson from home",
  secondaryKeywords: [
    "IB tutor in Nepanagar",
    "IGCSE tutor in Nepanagar",
    "IB home tuition Nepanagar",
    "IGCSE home tuition Nepanagar",
    "IB private tuition Nepanagar",
    "IB Maths tutor Nepanagar",
    "IGCSE Maths tutor Nepanagar",
    "IB Physics tutor Nepanagar",
    "IB Chemistry tutor Nepanagar",
    "IB Biology tutor Nepanagar",
    "IB DP tutor Burhanpur district",
    "IB MYP tutor Nepanagar",
    "IB PYP tutor Nepanagar",
    "IGCSE online tuition Nepanagar",
    "IB tutor Burhanpur",
    "IGCSE tutor Nimar region",
    "IB online classes Madhya Pradesh township",
    "online home tuition Nepanagar",
  ],

  heroTrustPoints: [
    "Every lesson live and one-to-one, with no recorded shortcuts",
    "Teachers with classroom or tutoring history in IB DP, MYP, PYP and the two IGCSE boards",
    "Timetables that respect shift patterns and Nimar summer heat",
    "A free trial class, then a written note after each lesson",
    "A free tutor change if the match is not working",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on Indian time" },
    { value: "PYP to DP", label: "Programmes supported" },
    { value: "Free trial", label: "Before any commitment" },
    { value: "Online", label: "Home tuition by live video" },
  ],

  intro: {
    heading: "IB and IGCSE tuition at home for families in Nepanagar",
    paragraphs: [
      "Nepanagar grew around a newsprint mill in the Tapti valley, on the Madhya Pradesh side of the border with Maharashtra's Khandesh country. A township of this kind has an unusual mix of households: long-serving mill staff, managers and engineers posted from other states, contract workers, shopkeepers and farm families from the Nimar belt. Schools in and around the town follow the MP Board or CBSE, and the culture of steady, shift-based work shapes the way evenings are used.",
      "Postings bring change. A family that has just arrived from Pune, Hyderabad or Kolkata may have a child in the middle of an IB programme or an IGCSE course, and a transfer in Class 10 or Class 11 can be harsh when the new town has no school that teaches the same syllabus. Others plan for the future: a cousin overseas, a medical or engineering career abroad, or a wish to keep options open for a degree outside India.",
      "For those families we supply private IB and IGCSE lessons that need no specialist in town. The teacher is somewhere in India, the student is at home, and the two meet on video during Indian Standard Time for a live session built on the actual syllabus and its past papers. The pages below cover the schools within reach, how boards differ, what shapes the rate, how the Nimar calendar meets exam dates, university routes and the way subjects are taught. IB Gram is independent of the IB, Cambridge, Pearson and every school, and our tutors never write a student's assessed work.",
    ],
  },

  programmesIntro:
    "Four IB programmes and two IGCSE boards exist. In Nepanagar a family usually meets one of them because of a posting, so the starting point is often the middle of a course.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "A primary programme organised around inquiry units and a final Exhibition. Tutors keep lessons short and cheerful, working on reading, number sense and speaking.",
      countryNote:
        "No PYP classroom exists in the township, so a transferred child needs a gentle bridge. A weekly lesson keeps inquiry habits alive until the next move.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups assessed on criteria, with a Personal Project. Tutors show students how to read a task, plan a response and use subject language.",
      countryNote:
        "Transferred students often arrive in the middle of a unit. Online lessons help them catch up on the missing weeks without waiting for the school year to turn.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A six-subject course plus Theory of Knowledge, the Extended Essay and CAS. Lessons target what is examined, how to handle each paper, and how internal marking criteria work.",
      countryNote:
        "A Diploma student who must finish the course from a township like Nepanagar relies on private tutors for Higher Level content that the local classroom cannot offer.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "DP courses combined with a career-related study and a reflective project, intended for applied and vocational paths.",
      countryNote:
        "Hardly anyone here follows CP. If your child does, tell us the chosen DP courses and a matching tutor will be found.",
    },
  ],

  subjectsIntro:
    "Tutors are matched to the exact IB course and level, and to the point at which the student joined it, so no topic is left half-covered after a move.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, sequences and proof, with timed Paper 1 and Paper 2 practice." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Probability, statistics and modelling, using calculator methods that examiners accept." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, waves, electricity and fields, with graph work and uncertainty handled carefully." },
    { name: "Chemistry", levels: "SL / HL", description: "Quantitative chemistry, bonding, equilibrium and organic mechanisms, with worked calculations." },
    { name: "Biology", levels: "SL / HL", description: "Cells, genetics and ecology, with attention to the terms mark schemes require." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Cross-disciplinary study that links well to a region with forest, river and industry questions." },
    { name: "Economics", levels: "SL / HL", description: "Micro and macro principles applied to industry, agriculture and trade for extended responses." },
    { name: "Business Management", levels: "SL / HL", description: "Operations, finance and strategy tools with case-study practice, relevant to a manufacturing town." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and exam-style pseudocode." },
    { name: "Design Technology", levels: "SL / HL", description: "Design cycle, materials and the written reasoning examiners expect." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Text analysis, commentary and comparative essay technique." },
    { name: "Hindi B", levels: "SL / HL", description: "Reading, writing and speaking for students who study Hindi as an additional language." },
    { name: "Marathi support", levels: "School-based", description: "Help where Marathi is a school option, useful near the border with Maharashtra." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion coaching on knowledge questions; the essay and exhibition stay the student's work." },
  ],

  igcseSubjectsIntro:
    "IGCSE subjects are matched by exam board, as Cambridge and Pearson Edexcel differ in tiers, paper numbers and practical formats.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Algebra, geometry, trigonometry and statistics, practised at the right tier." },
    { name: "Physics", levels: "Core / Extended", description: "Energy, forces, waves, electricity and atomic physics." },
    { name: "Chemistry", levels: "Core / Extended", description: "The periodic table, reactions, electrolysis and organic basics." },
    { name: "Biology", levels: "Core / Extended", description: "Cell biology, nutrition, inheritance and ecosystems." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For schools that run the double-award science route." },
    { name: "English as a Second Language", levels: "Core / Extended", description: "Reading, summary and directed writing, with speaking practice." },
    { name: "Computer Science", levels: "Single tier", description: "Programming, logic and data representation." },
    { name: "Business Studies", levels: "Single tier", description: "Enterprise, finance and marketing with small-business examples." },
    { name: "Economics", levels: "Single tier", description: "Core concepts, calculations and structured answers." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Written and spoken practice for the Hindi option." },
  ],

  regionsTitle: "Nepanagar township and the Tapti valley around it",
  regionsIntro:
    "Learners are spread between the mill colony, the older market town and nearby villages. The notes below describe how each area's routine affects the school and lesson day.",
  regions: [
    { name: "The mill colony and staff quarters", note: "Planned residential blocks for employees, where shift timings and the school bus set the household clock and quiet study rooms are easy to arrange." },
    { name: "Nepanagar market and bus stand", note: "The commercial centre on the highway side, where truck and bus traffic builds in the afternoon; households here study best later in the evening." },
    { name: "Highway-side colonies", note: "Newer layouts along the Agra-Mumbai road corridor with good road links to Burhanpur and Khandwa but heavy vehicle noise at times." },
    { name: "Shahpur direction", note: "The road toward the nearby town of Shahpur in Burhanpur district, used by commuting families and shared by students from smaller settlements." },
    { name: "Burhanpur side", note: "The district headquarters to the south-west, a historic city on the Tapti whose schools and coaching classes draw some Nepanagar students." },
    { name: "Khandwa side", note: "The direction of Khandwa, a larger Nimar city, which families use for shopping, medical care and some schooling." },
    { name: "Asirgarh and Dedtalai approach", note: "Villages and hill-edge settlements in the district where power and connectivity can be patchy and lessons need back-up plans." },
    { name: "Farming villages", note: "Cotton, banana and sugarcane villages around the township, whose families plan around harvest and sowing weeks." },
    { name: "Bhusawal and Jalgaon approach", note: "Households with relatives or business in Maharashtra across the border, who sometimes shift between the two states for work." },
  ],

  schoolClusters: [
    {
      city: "Nepanagar and Burhanpur district",
      note: "Our search of the IB directory and the Cambridge and Edexcel centre lists found no school in Nepanagar or Burhanpur district. What operates locally is MP Board and CBSE teaching, which leaves no real local route into IB or IGCSE.",
      schools: [],
    },
    {
      city: "Nearby: Indore",
      note: "Indore is the largest nearby city with confirmed international schools, and the one most Nimar families consider for boarding or a move. It is a long road journey from Nepanagar.",
      schools: ["Choithram International School", "Daly College", "The Emerald Heights International School"],
    },
    {
      city: "Nearby: Bhopal and Nagpur",
      note: "Bhopal and Nagpur each have a confirmed school with an international programme. Both are far from Nepanagar and relevant mainly for families relocating.",
      schools: ["Shrewsbury International School India", "D Y Patil International School, MIHAN"],
    },
  ],
  schoolDisclaimer:
    "The names above only mark where international teaching actually exists for Nepanagar households. IB Gram works on its own as a tutoring service, belongs to no school and has no agreement with the IB, Cambridge or Pearson, and any admission is for the school to decide.",

  modesIntro:
    "Tutors do not visit homes in Nepanagar, so every format below is online. Each is live and private and can be moved around shifts, heat and transfers.",
  modes: [
    {
      title: "One-to-one live lessons",
      description: "A private video lesson with a tutor who knows your child's exact board, subject and level.",
      bullets: ["Shared whiteboard and past papers", "Written note for parents", "Rescheduling for power cuts"],
    },
    {
      title: "Transfer catch-up plan",
      description: "A short run of lessons for a student who has just joined a new syllabus mid-year.",
      bullets: ["Missing topics mapped in the first lesson", "Daily or alternate-day sessions", "Review after two weeks"],
    },
    {
      title: "Exam-season coaching",
      description: "Focused practice before mock papers and the May or November sessions.",
      bullets: ["Timed papers in exam format", "Mark-scheme drilling", "Spare slots held for outages"],
    },
  ],

  tutorsIntro:
    "Our tutors teach from across India, all on Indian Standard Time. In Nepanagar, evening lessons after the shift change and school return tend to work best.",

  sections: [
    {
      heading: "Does Nepanagar or Burhanpur district have an IB or Cambridge school?",
      paragraphs: [
        "As far as we could confirm, it does not. The township and Burhanpur district have schools affiliated with the MP Board and CBSE, some with a long history and strong reputations, but none appeared in the IB World School directory or in the lists of approved Cambridge and Edexcel centres. We would rather say that than name a school we cannot vouch for.",
        "The nearest confirmed options sit in Indore, Bhopal and Nagpur, each many hours away by road. Some families in the Nimar belt send a child to board in Indore, where there are several international schools. Others relocate part of the household for the Diploma years, and a few rely on relatives. Because the journey is long, the child usually returns home only for holidays.",
        "For transferred families, the situation is different. A parent posted to the mill may bring a child already halfway through a programme. The local school cannot continue it, and the family must choose between changing board or adding private tuition so that the child can sit the same exams. Online tutoring suits the second route.",
        "Should a school nearby be authorised for IB or Cambridge later, tell us the subject list and sitting, and the teaching can follow that syllabus straight away.",
      ],
    },
    {
      heading: "MP Board, CBSE, IGCSE and the IB: how do they compare for a Nepanagar student?",
      paragraphs: [
        "The MP Board runs its Class 10 and Class 12 examinations in February and March, with a syllabus built on textbooks and a strong emphasis on memory and presentation. CBSE schools in the township follow NCERT books and a similar calendar. Both lead to entrance routes such as JEE, NEET, CUET-UG and state counselling.",
        "IGCSE changes the shape of the exam. Papers are tiered, learning objectives are printed in the syllabus and questions test application. The IB Diploma adds internal assessments, a long essay, a knowledge course and service hours, and answers are marked for argument and explanation as well as accuracy.",
        "A transferred student needs to know not only what is different but when the differences bite. The table shows the main contrasts.",
      ],
      table: {
        caption: "Board differences for a Nepanagar family",
        columns: ["Board", "Assessment", "Language", "Usual next step", "Local specialist help"],
        rows: [
          ["MP Board", "Written state papers, February to March", "Hindi or English", "State colleges, CUET-UG, JEE, NEET", "Many local teachers"],
          ["CBSE", "National board exams on NCERT content", "English or Hindi", "CUET-UG, JEE, NEET", "Some coaching in Burhanpur and Khandwa"],
          ["IGCSE (Cambridge or Edexcel)", "Tiered papers, several sessions a year", "English", "IB, A Level or Indian Class 11", "Practically none"],
          ["IB Diploma", "Exams, essay, internal assessments, service", "English", "Indian and overseas universities", "None locally"],
          ["A Level", "Linear subject exams after IGCSE", "English", "UK and other universities", "None locally"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Nepanagar, and how is the rate set?",
      paragraphs: [
        "There is no published rate card. Before a trial lesson is booked, we send the proposed rate in writing, so that the figure is clear and can be weighed against other choices without pressure.",
        "The course level is the first driver. Higher Level Diploma Chemistry or Mathematics needs a tutor with strong subject knowledge and marking experience, and this costs more than IGCSE Business Studies or MYP humanities. Scarcity is the second: Computer Science HL, Design Technology and Further Mathematics have fewer qualified tutors.",
        "The shape of the plan is the third. A weekly lesson for a year, a two-week transfer catch-up and a final-month exam burst are quite different commitments. Many Nepanagar families start with a short block and extend only if it works.",
        "The comparison that matters locally is with the alternatives, such as paying for lodging in Indore, travelling to bigger cities for coaching or losing a school year after a transfer. Seen that way, targeted online tuition at home is often the lighter cost.",
      ],
      bullets: [
        "Level of the course and tier",
        "How rare the subject is among tutors",
        "Lessons per week and length of commitment",
        "Short catch-up, steady support or exam burst",
      ],
    },
    {
      heading: "Online tutor, Indore boarding, local teacher or self-study: how do they compare from Nepanagar?",
      paragraphs: [
        "A student here has four realistic routes. The right one depends on whether the gap is missing content, weak exam technique or lack of regular practice.",
        "Boarding in Indore brings a school with the syllabus but removes the child from home. Local teachers are excellent for MP Board and CBSE content and some basics of maths and science. Self-study with past papers needs discipline. A live online tutor provides the specialist knowledge without relocation.",
      ],
      table: {
        caption: "Routes to IB or IGCSE help from Nepanagar",
        columns: ["Route", "Syllabus knowledge", "Disruption", "Flexibility", "Good for"],
        rows: [
          ["Live online tutor", "High, matched by board and subject", "Minimal", "Evenings, weekends, holidays", "Any programme, any subject"],
          ["Boarding in Indore", "Whole-school curriculum", "Child leaves home", "Fixed by school", "Families committed to a move"],
          ["Local teacher", "MP Board and CBSE strengths", "Little", "Reasonable", "Shared basics"],
          ["Self-study with past papers", "Depends on the learner", "None", "Total", "Strong self-directed students"],
        ],
      },
    },
    {
      heading: "How do the Nimar summer, monsoon and festivals shape the study year in Nepanagar?",
      paragraphs: [
        "Nimar is among the hottest parts of Madhya Pradesh, with April to June temperatures often in the mid-forties. Afternoon lessons are tiring in those months, and power can fail under load. Evenings after seven usually work, and a fan, inverter or power bank earns its place. The monsoon from late June brings relief and the occasional flood in low-lying places.",
        "Exam dates come from the school and not from us. IB Diploma papers are sat in May or November, and results follow in July or January. Cambridge IGCSE has three windows through the year, and Pearson's International GCSE has its own three. Once the entry is known, the tutor counts back from that day.",
        "The local calendar includes Holi, Gangaur, which is celebrated widely across Nimar, Ganesh Chaturthi in the Maharashtra-influenced west, Navratri and Diwali. A township also moves with its factory calendar, including shutdowns and shift changes.",
      ],
      table: {
        caption: "Calendar pressures in Nepanagar",
        columns: ["Months", "What is happening", "Effect on study", "How lessons adapt"],
        rows: [
          ["Jan to Feb", "Cool season, pre-board tests", "Good study weather", "Mock papers and long revision"],
          ["Mar to Apr", "Holi, Gangaur, MP Board and IGCSE exams", "Festival gaps, rising heat", "Timed practice with rest days"],
          ["May to Jun", "IB May session, peak heat", "Fatigue, power cuts", "Evening slots, power back-up"],
          ["Jul to Sep", "Monsoon, IB results, Ganesh Chaturthi", "New term, wet roads", "Foundation lessons, flexible times"],
          ["Oct to Nov", "Navratri, Diwali, November sessions", "Festival gaps near exams", "Compressed revision with reschedule room"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Nepanagar go after school?",
      paragraphs: [
        "After the Diploma, Indian applications usually carry an equivalence certificate from the Association of Indian Universities. Central universities admit through CUET-UG, while private ones in Indore, Bhopal, Pune, Nagpur and Delhi NCR often take Diploma scores directly. Indore, the education hub of western Madhya Pradesh, is the natural choice for anyone wishing to stay near home.",
        "Engineering and medicine hinge on which subjects were taken. Mathematics, Physics and Chemistry or Biology within the Diploma may satisfy JEE or NEET conditions, yet the current National Testing Agency notice and the Madhya Pradesh counselling rules should be read before any Class 11 subject is locked in.",
        "Overseas study, chiefly in the UK, Canada, Australia, the US and the Gulf, is a third path. After IGCSE a student can go into Class 11 of an Indian board, A Level or the IB, and the maths and science grades decide how many of those remain available.",
        "Tutors can show how each subject choice affects later options; the last word on admission belongs with a counsellor or the university concerned.",
      ],
    },
    {
      heading: "How are IB Mathematics, Physics, Chemistry and Biology taught in a live online lesson?",
      paragraphs: [
        "The Analysis and Approaches course is built for those who enjoy algebra, calculus and proof, often on the way to engineering or science. Applications and Interpretation leans on data, modelling and technology and fits commerce, social science or design. After a school change, first check which of the two is expected.",
        "Lessons open with a couple of quick questions on last time's topic. Next comes a worked example drawn on the shared whiteboard, and then the student tackles a past-paper question solo. The tutor goes through it line by line, pointing out where method, answer and communication marks were won or lost.",
        "Physics sessions practise graph work and unit analysis. Chemistry sessions spend time on the mole and balanced equations, because slips there spoil whole answers. Biology sessions focus on exact definitions and structured explanations.",
        "Each internal assessment is the student's investigation. Explaining the criteria is allowed; drafting or editing the report is not.",
      ],
    },
    {
      heading: "IGCSE tiers and boards: what should a transferred Nepanagar student check?",
      paragraphs: [
        "Core and Extended belong to Cambridge IGCSE, whereas Pearson Edexcel splits its papers into Foundation and Higher. A student who has just transferred ought to find out which board and tier the old school used, since a switch halfway through a course can upset the order of topics and the practical work.",
        "Choosing a tier means looking at recent marks, asking the subject teacher and running a diagnostic lesson. Anyone eyeing IB Higher Level or A Level sciences generally needs the upper tier; a child who is still gaining confidence may score better by sitting the lower one.",
        "A balanced IGCSE set normally combines languages, mathematics, sciences and one humanities or business subject. For Nepanagar students, extended English writing and science vocabulary are common priorities, and both respond to regular weekly practice.",
        "We always confirm the board code and the paper numbers before matching a tutor.",
      ],
    },
  ],

  process: [
    { title: "Tell us what your child studies", description: "Send the board, subject, level and exam sitting by message." },
    { title: "Meet your tutor profile", description: "We choose a tutor who has taught the same course and share a short profile." },
    { title: "Try one free lesson", description: "A real session on a real topic, free of charge." },
    { title: "Approve the written rate", description: "A plan and fee arrive in writing. Nothing starts until you agree." },
    { title: "Build a weekly rhythm", description: "Live lessons, a note after each, and a tutor change if you want one." },
  ],

  whyPoints: [
    { title: "Course-specific tutors", description: "A Diploma Economics student is taught by someone who has taught that paper." },
    { title: "Made for transfers", description: "We map missing topics at the start so a mid-year move does not leave holes." },
    { title: "Honest about local options", description: "Where no confirmed IB or Cambridge school exists nearby, we state it plainly and build the plan around that fact." },
    { title: "Readable progress notes", description: "Parents see what was covered, what went wrong and what is next." },
    { title: "Teaching, not ghost-writing", description: "Tutors explain and give feedback but never write assessed work." },
    { title: "Low-risk start", description: "The first class is free, the rate comes in writing, and a new tutor costs nothing extra." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Nepanagar?", answer: "Not that our checks turned up. The township and Burhanpur district run on MP Board and CBSE schools, and the IB directory and the Cambridge and Edexcel centre lists show nothing there. Parents wanting an international syllabus look at Indore, Bhopal or Nagpur, or keep the child at home and add a private online tutor." },
    { question: "Do tutors come to my home in Nepanagar?", answer: "No visits happen here. Teaching at the family's front door is limited to Gurugram and some parts of Delhi NCR. For Nepanagar the offer is online home tuition: your child sits at a table in your own house, a tutor appears on the laptop screen, and the lesson is private from the first minute to the last." },
    { question: "How do I find a tutor for IB Economics or IGCSE Physics in Nepanagar?", answer: "Write to us with the board, the subject, the level and the sitting your child is entered for. A tutor who has already taught that paper is proposed, along with a brief profile and a time for a trial class. Should the pairing feel wrong, ask for another tutor and we will find one without a fee." },
    { question: "What does IB tuition cost in Nepanagar?", answer: "No single figure applies, because the price follows the course, the scarcity of tutors in that subject and the number of weekly lessons. We keep no public rate list. What you receive is a quotation on paper ahead of the trial, so there is time to weigh it against alternatives at home." },
    { question: "My child was in an IB school before our transfer. How can we continue?", answer: "Tell us the programme, the subjects, the year and the last unit covered. We map the missing topics in the first lesson and set a plan so the student reaches the same exams on schedule. Where the new town has no matching school, online lessons can carry the whole course." },
    { question: "Is online tuition as good as classes in Indore?", answer: "For most students it is at least as effective and far less disruptive. The lesson is one-to-one, the tutor works on your child's weak topics and nothing is lost to travel. Group classes in Indore suit those who thrive in a classroom, but they need relocation or long trips." },
    { question: "Can my child move from the MP Board to IGCSE?", answer: "Yes. Much of the maths and science content carries across; what changes is how questions are worded and marked. A tutor begins with command words and the shape of each paper, then patches any content holes. Class 8 or 9 suits an IGCSE start, and Class 10 or 11 the Diploma." },
    { question: "Will tutors write the Extended Essay or an Internal Assessment?", answer: "Never. Our tutors teach the method, clarify the marking criteria and react to ideas that the student brings, but they do not draft, rewrite or polish an Extended Essay, an internal assessment, a TOK essay or any coursework. What gets submitted has to be the student's own effort, start to finish." },
    { question: "How does the free trial lesson work?", answer: "You get one real class at no charge. The proposed tutor teaches a live topic taken from your child's actual syllabus, and afterwards sends a short note on what happened. If it felt right, a plan and rate follow on paper. If it did not, you walk away owing nothing." },
    { question: "Which exam sessions do you prepare for?", answer: "Two IB windows, May and November, are covered, along with whichever Cambridge or Edexcel series the student's school has chosen. Entry is the school's decision, so we simply count back from the exam date and shape the lessons accordingly. IB results come out in July and January." },
    { question: "Do you cover both Cambridge and Pearson Edexcel IGCSE?", answer: "We do. Since the two boards set their papers, tiers and practical elements differently, the tutor is picked by board code and not just by subject title. Pass on the board's name and the paper codes from the exam timetable, and we confirm the tutor has taught that specification." },
    { question: "What if there is a power cut during a lesson?", answer: "We rebook the lost time. Nimar summers stress the grid, so families usually keep a phone hotspot and an inverter or power bank ready, especially during exam season. If a session is cut short, we reschedule it within the same week where possible." },
    { question: "When are lessons held?", answer: "Most Nepanagar students prefer weekday evenings after school and the shift change, and weekend slots, in Indian Standard Time. In the hottest weeks we move to later hours, and festival weeks such as Holi, Gangaur and Diwali are paused with catch-up arranged beforehand." },
    { question: "Does the IB Diploma count for Indian university admission?", answer: "Mostly it does. Indian universities usually want the Association of Indian Universities equivalence certificate, and CUET-UG opens the door to central universities. JEE, NEET and state quotas set their own subject rules, so read each year's official notice before deciding what to take in Class 11." },
    { question: "Can students from Burhanpur, Shahpur or Khandwa also join?", answer: "Yes, because lessons travel by internet and not by road. Any home in the Nimar region with a steady connection can take part. We choose a slot that fits school hours and the parents' work pattern, then keep it fixed each week so that the habit sticks." },
    { question: "How do we get started?", answer: "Drop a line to support@ibgram.com, or send a WhatsApp message to +91 7439 368 115, stating the class, board, subject and the exam sitting. A tutor suggestion and a possible trial time normally come back within a day or two." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "See where else the online model is available." },
    { label: "IB tutoring overview", href: "/ib-tutors/", description: "How our IB teaching is organised by programme." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects with board-matched tutors." },
    { label: "Middle Years Programme help", href: "/programmes/myp/", description: "Criterion-based assessment support for Classes 6 to 10." },
    { label: "Diploma Programme help", href: "/programmes/dp/", description: "Subject tutoring for the last two school years." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI at Standard and Higher Level." },
    { label: "Tutor profiles", href: "/tutors/", description: "The people who teach IB and IGCSE." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book the trial." },
    { label: "IB and IGCSE tutors in Indore", href: "/indore/", description: "The nearest large city with confirmed international schools." },
    { label: "IB and IGCSE tutors in Bhopal", href: "/bhopal/", description: "Our page for the state capital." },
    { label: "IB and IGCSE tutors in Sendhwa", href: "/sendhwa/", description: "Another Nimar-belt town served online." },
  ],

  closingHeading: "Book a free trial lesson from home in Nepanagar",
  closingBody:
    "Tell us the board, the subject and the sitting. A tutor is matched, a free class is arranged, and the rate reaches you on paper before any decision is needed. Contact support@ibgram.com, or WhatsApp +91 7439 368 115.",
};
