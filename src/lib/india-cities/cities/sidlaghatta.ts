import type { CitySeoPage } from "../types";

/**
 * /sidlaghatta/ - IB and IGCSE tutoring page for Sidlaghatta, Chikkaballapur district, Karnataka
 * (the Silk City, roughly 70 km from Bengaluru). No IB or Cambridge/Edexcel school could be confirmed
 * in Sidlaghatta, Chikkaballapur or Kolar, so stripSchools is empty and the clusters reuse names
 * already verified on the published Bengaluru and Kolar pages. Town facts from Wikipedia (Sidlaghatta,
 * Chikkaballapur, Chikkaballapur district, UAS Bangalore). Online-only delivery.
 */
export const sidlaghatta: CitySeoPage = {
  slug: "sidlaghatta",
  countryName: "Sidlaghatta",
  countryNameLong: "Sidlaghatta, Chikkaballapur district, Karnataka",
  demonym: "Sidlaghatta",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions are placed after school and around family commitments, with slack left for Dasara, Ugadi, exam weeks and the monsoon rain",
  lastUpdated: "2026-09-21",
  geo: { latitude: 13.3833, longitude: 77.8667 },
  wikipedia: "https://en.wikipedia.org/wiki/Sidlaghatta",
  alternateNames: ["Shidlaghatta", "Sidlagatta", "Sidlaghatta Silk City"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sidlaghatta | Private Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Sidlaghatta, the silk town near Bengaluru: live one-to-one lessons at home with no commute, timed around Dasara and exams. Free trial.",
  h1: "IB and IGCSE Tutors and Home Tuition in Sidlaghatta",
  heroEyebrow: "SIDLAGHATTA: ONLINE IB & IGCSE TUITION FOR THE SILK TOWN",
  heroSubtitle:
    "Home tuition in Sidlaghatta, the silk town well outside Bengaluru's international-school belt: a private tutor teaches your child live, one to one, on a laptop at home, so nobody faces the long drive to the city. No tutor comes to a Sidlaghatta door either; the only places with home visits are Gurugram and parts of Delhi NCR. Lessons are online, on Indian Standard Time, at an hour that fits around school and family.",
  primaryKeyword: "IB and IGCSE tutors in Sidlaghatta",
  imageAltText: "A Sidlaghatta student working through an IB Physics problem set with a tutor on a video call at a home desk",
  secondaryKeywords: [
    "IB tutor Sidlaghatta",
    "IGCSE tutor Sidlaghatta",
    "IB home tuition Sidlaghatta",
    "IGCSE home tuition Sidlaghatta",
    "IB private tuition Sidlaghatta",
    "IB Maths tutor Sidlaghatta",
    "IGCSE Maths tutor Sidlaghatta",
    "IB Physics tutor Sidlaghatta",
    "IB Chemistry tutor Sidlaghatta",
    "IB Biology tutor Sidlaghatta",
    "IB DP tutor Sidlaghatta",
    "IB MYP tutor Sidlaghatta",
    "IB PYP tutor Sidlaghatta",
    "IGCSE online tuition Sidlaghatta",
    "IB tutor Chikkaballapur",
    "IGCSE tutor Devanahalli",
    "IB tutor Kolar",
    "Shidlaghatta IB IGCSE tutor",
    "Cambridge IGCSE tuition near Bengaluru",
    "online IB tuition Karnataka Sidlaghatta",
  ],

  heroTrustPoints: [
    "Tutors keep Indian Standard Time, so after-school and weekend hours are simple to arrange",
    "No long drive to Bengaluru: the lesson arrives on your child's laptop",
    "A trial lesson without charge, then rates written down",
    "A written recap after every class, and a new tutor if the match is wrong",
    "Coaching only: the IA, essays and coursework are always the student's own",
  ],
  heroStats: [
    { value: "Online", label: "One student, one tutor, live" },
    { value: "PYP to DP", label: "All IB stages, plus IGCSE" },
    { value: "Free trial", label: "Judge a lesson before paying" },
    { value: "May & Nov", label: "IB sessions we prepare for" },
  ],

  intro: {
    heading: "IB and IGCSE tutors in Sidlaghatta, the silk town in Chikkaballapur district",
    paragraphs: [
      "Sidlaghatta, also spelled Shidlaghatta, is a taluk town in Chikkaballapur district with 51,159 residents at the 2011 census, standing about 878 metres above sea level. It is called the Silk City and is known for raw silk, and it is the home town of Infosys co-founder N. R. Narayana Murthy. Bengaluru lies roughly 70 kilometres away by road, close enough that many households have a foot in the city and far enough that a daily drive to an international school is unrealistic. Families asking for IB and IGCSE tutors in Sidlaghatta are usually weighing that gap.",
      "Schools around the town follow the Karnataka state syllabus, CBSE or ICSE, and we could not confirm a single IB, Cambridge or Edexcel school in Sidlaghatta, Chikkaballapur or Kolar. The nearest confirmed campuses are in Bengaluru, a long commute for a day student and a boarding or relocation decision for most. A child already enrolled at an IB or IGCSE school in the city, or moving there for the senior years, tends to need help at home rather than in the classroom.",
      "IB Gram's tutors are based across India and teach to the Indian clock, live and one to one, using a shared whiteboard and the student's own written pages. In-person lessons exist only in Gurugram and parts of Delhi NCR, so no tutor visits Sidlaghatta; instead the private lesson reaches your child's desk over the internet. Begin with a free trial class, see the rates in writing after it, and get a short summary at the end of every session.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description: "Early learning through shared themes and questions, with language and number skills practised inside each unit.",
      countryNote: "Sidlaghatta has no PYP school we could confirm, so the approach mostly reaches a child through a move to Bengaluru; a tutor can carry reading and inquiry habits into home study.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description: "Five years of connected subjects for ages eleven to sixteen, assessed on criteria, with a personal project at the end.",
      countryNote: "A child who joins a Bengaluru MYP school from Sidlaghatta often needs English writing and mathematics support during the first term.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description: "A two-year course of six subjects with a long essay, a knowledge course and community service, sat mostly in May.",
      countryNote: "The Diploma can only be taken through an authorised school, so local students either relocate to Bengaluru for Class 11 and 12 or join an online IB school, and use tutoring to steady weaker subjects.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description: "A compact pre-university pathway that sets a few academic courses beside career-related study.",
      countryNote: "Hardly known around Sidlaghatta; we explain it on request, including how it compares with the Karnataka PUC.",
    },
  ],
  programmesIntro:
    "Stage matters less than the starting point: the first lesson compares your child's real work with the syllabus and only then is a weekly plan drawn up.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions and proof for future engineers and scientists, with clear written reasoning." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and calculator-led analysis, suited to commerce, economics and life-science degrees." },
    { name: "Physics", levels: "SL / HL", description: "Motion, fields, waves and quantum ideas, with data handling and investigation planning." },
    { name: "Chemistry", levels: "SL / HL", description: "Atomic structure, energy changes, reaction rates and organic synthesis, with marked-answer practice." },
    { name: "Biology", levels: "SL / HL", description: "From cells to ecosystems, with data analysis and experiment design; relevant to agriculture and medicine alike." },
    { name: "Economics", levels: "SL / HL", description: "Markets, trade and development, using farm prices and commodity markets as worked examples." },
    { name: "Business Management", levels: "SL / HL", description: "Finance, operations and marketing through case studies, close to the world of traders and small manufacturers." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, networks and databases, with the Bengaluru software industry as natural context." },
    { name: "Geography", levels: "SL / HL", description: "Population, resources and climate change, with fieldwork-style analysis." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Close reading across many text types, for students who move between Kannada, Telugu, Urdu and English." },
    { name: "Kannada A: Literature", levels: "SL / HL", description: "Poetry, drama and prose in the student's own language, with a written commentary." },
    { name: "Hindi B", levels: "SL / HL", description: "A language acquisition course for students who studied Hindi at school." },
    { name: "Theory of Knowledge", levels: "Core", description: "Structured thinking about how knowledge is built; the essay and exhibition are the student's alone." },
  ],
  subjectsIntro:
    "The right mix depends on the degree in view and on whichever Bengaluru or online school the student joins, so the first conversation is about targets, not syllabus.",

  igcseSubjects: [
    { name: "Mathematics, Core and Extended tiers", levels: "Cambridge 0580 / Edexcel 4MA1", description: "Arithmetic, algebra, shape and statistics, with the right tier chosen early." },
    { name: "Additional Mathematics", levels: "Cambridge 0606", description: "A bridge to A Level and IB mathematics through functions and calculus." },
    { name: "Physics", levels: "Cambridge 0625 / Edexcel 4PH1", description: "Forces, heat, light and electricity, with unfamiliar-context questions." },
    { name: "Chemistry", levels: "Cambridge 0620 / Edexcel 4CH1", description: "Particles, reactions, the mole and organic basics, plus practical analysis." },
    { name: "Biology", levels: "Cambridge 0610 / Edexcel 4BI1", description: "Life processes, genetics and the environment, with graph work." },
    { name: "English as a First Language", levels: "Cambridge 0500", description: "Composition for different audiences, with attention to accuracy and register." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Algorithms, programming and how computers communicate." },
    { name: "Business Studies", levels: "Cambridge 0450", description: "Starting, running and financing a business, through case material." },
    { name: "Economics", levels: "Cambridge 0455", description: "Prices, production and policy, with short data questions." },
    { name: "Geography", levels: "Cambridge 0460", description: "Physical and human themes, with fieldwork-style enquiry." },
    { name: "Accounting", levels: "Cambridge 0452", description: "Bookkeeping and financial statements for future business owners." },
    { name: "Hindi as a Second Language", levels: "Cambridge 0549", description: "An option that sits beside English and Kannada in a language package." },
  ],
  igcseSubjectsIntro:
    "Every plan begins with the board, code and tier, because Cambridge and Edexcel use different papers even under the same subject title.",

  regionsTitle: "Towns and hills around Sidlaghatta that our students study from",
  regionsIntro:
    "Online lessons reach every corner of the taluk and its neighbours, so the notes below describe the setting and the likely rhythm of a school day rather than any journey.",
  regions: [
    { name: "Sidlaghatta town", note: "The Silk City itself, compact and busy with trade in raw silk; after-school slots suit students who have family commitments to fit around." },
    { name: "Chikkaballapur", note: "The district headquarters, about 65 kilometres from Bengaluru and 915 metres above sea level, a regional transport and education hub for the surrounding taluks." },
    { name: "Nandi Hills", note: "Part of the Panchagiri range, with the Bhoganandishwara Temple at its foot; hill-top and hillside homes may have patchy mobile data, so check the signal first." },
    { name: "Muddenahalli", note: "The village where Sir M. Visvesvaraya was born, within about three kilometres of Chikkaballapur; science and engineering careers have a famous local role model." },
    { name: "Devanahalli", note: "The northern gateway to Bengaluru, near Kempegowda International Airport, the closest major airport for families who travel abroad." },
    { name: "Chintamani", note: "A taluk town that houses the College of Sericulture of the University of Agricultural Sciences, Bengaluru, relevant to silk-linked careers." },
    { name: "Srinivaspur and Kolar", note: "The Kolar side of the plateau, linked to Chikkaballapur and Bengaluru by rail, with students who also look to Bengaluru for senior schooling." },
    { name: "Gauribidanur and Bagepalli", note: "The district's northern taluks, closer to the Andhra Pradesh border, where Telugu is widely spoken alongside Kannada." },
    { name: "North Bengaluru", note: "Yelahanka, Hebbal and the airport road: the corridor families would look at if they relocated for Class 11 and 12." },
  ],

  schoolClusters: [
    {
      city: "Sidlaghatta and Chikkaballapur district",
      note: "We could not confirm any IB, Cambridge or Edexcel school in Sidlaghatta or elsewhere in the district, so none is named. Local schools follow the Karnataka state syllabus, CBSE or ICSE.",
      schools: [],
    },
    {
      city: "Nearby: Bengaluru",
      note: "Roughly 70 kilometres by road, Bengaluru holds the nearest IB and Cambridge schools we could verify. A day place means a long daily commute, so most families think of boarding or relocation.",
      schools: ["Canadian International School, Bengaluru", "Trio World Academy", "Stonehill International School", "The International School Bangalore", "Candor International School"],
    },
    {
      city: "Nearby: Kolar",
      note: "The neighbouring district headquarters has no IB or Cambridge school we could confirm, which is why families in this part of Karnataka look to Bengaluru or study online.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "These schools are named because they are the nearest ones our checks could confirm, and each family should contact a school directly for its current programmes and admission rules. IB Gram operates independently of the IB, Cambridge, Pearson and every school named, so a listing signals proximity only, never approval.",

  modesIntro:
    "Nobody drives out to a Sidlaghatta house for lessons, because only Gurugram and parts of Delhi NCR have tutor home visits. Online, three formats cover most needs.",
  modes: [
    {
      title: "Weekly lessons after school",
      description: "A regular slot with one tutor on one subject: pages marked on screen, a short task set, and the next week planned before the call ends.",
      bullets: ["One fixed hour a week", "Marking done on a shared screen", "A recap for parents"],
    },
    {
      title: "Support for a new school or board",
      description: "For a child starting at a Bengaluru school or changing boards, a term-long plan that finds gaps in the first week and closes them in order of importance.",
      bullets: ["Diagnostic first lesson", "Gaps ranked by marks", "Pace set by the student"],
    },
    {
      title: "Mock-to-exam sprint",
      description: "A tight block of timed papers and corrections in the weeks before the May-June or October-November series.",
      bullets: ["Timed full papers", "Corrections reviewed", "Final fortnight for error review"],
    },
  ],

  sections: [
    {
      heading: "Where do IB and IGCSE students from a town like Sidlaghatta actually study?",
      paragraphs: [
        "Most study in Bengaluru or online. No IB, Cambridge or Edexcel school could be confirmed in Sidlaghatta, Chikkaballapur or Kolar, so a student who wants one of these syllabuses has three realistic options: enrol in a Bengaluru school and commute or board, relocate the family for Class 11 and 12, or join an online school while living at home. Each leaves a need for subject-level help at the family desk.",
        "Bengaluru is about 70 kilometres away by road, and traffic on the approach roads decides whether a daily commute is workable at all. Most families judge that it is not, which is why boarding and relocation come up so often. The names in this page's school section come from our verified Bengaluru page. Confirm a school's authorisation and admission rules with the school itself before acting on any list, ours included.",
        "Local households are varied: silk and grape growers, traders, teachers, bank and government staff, people who commute to jobs in Bengaluru, and families with relatives abroad. What they share is an interest in a qualification that travels, whether to a Bengaluru college, a national university or overseas study. The decision usually arrives around Class 8 or 9, well before the final exams.",
        "Our role is narrow and practical. IB and IGCSE tutors in Sidlaghatta from IB Gram teach the syllabus your child already follows or intends to sit, live and one to one, at a time that works around the school day. That may mean weekly support for a Bengaluru-enrolled student, IGCSE preparation for a private candidate, or a bridge for a child switching from the state board.",
      ],
    },
    {
      heading: "How do the Karnataka state syllabus, CBSE and ICSE compare with IGCSE and the IB for a Sidlaghatta student?",
      paragraphs: [
        "Karnataka's own route ends Class 10 with the SSLC examination, then moves into the two-year pre-university course, the PUC, whose science combinations feed KCET and NEET. CBSE and ICSE schools follow national syllabuses with board exams at Class 10 and Class 12. IGCSE is a two-year course finishing at around sixteen, while the IB Diploma is pre-university study in six subjects; the table sets all four side by side.",
        "Kannada runs through everything. It is a state requirement in most Karnataka schools, so check language rules with any school a child might join. Telugu and Urdu are also spoken widely in the district, which means many students grow up with two or three languages and handle the language parts of IB and IGCSE with confidence.",
        "Question style differs too. SSLC and PUC papers reward remembered textbook material laid out in the expected order; IGCSE and IB papers present unfamiliar data, graphs or scenarios and ask the student to reason in writing. A student who is strong on the Karnataka syllabus usually has the content and needs practice at explaining it. KCET and NEET preparation helps with speed and content, which Higher Level sciences also demand.",
        "Switching boards is easiest early. Moving from the state board to CBSE around Class 8 is manageable, a move into IGCSE at Class 9 needs a plan, and the Diploma in Class 11 needs a seat in an authorised school. Tutors help close subject gaps, but the receiving school decides admission, language rules and equivalence.",
      ],
      table: {
        caption: "Routes a Sidlaghatta family may weigh up",
        columns: ["Route", "Where students meet it", "Class 10 milestone", "Senior years and next step"],
        rows: [
          ["Karnataka state syllabus", "Most schools in and around the town", "SSLC examination", "PUC science, commerce or arts, then KCET, NEET or CUET-UG"],
          ["CBSE or ICSE", "A smaller set of private schools", "Board examination at Class 10", "Class 11 and 12 in the same system, then national entrance tests"],
          ["Cambridge or Edexcel IGCSE", "Bengaluru schools, or privately through a centre", "Two exam series a year, mid-year and autumn", "AS and A Level, the Diploma or an Indian senior course"],
          ["IB MYP then Diploma", "Bengaluru or online schools only", "MYP personal project", "Diploma in an authorised school, then AIU equivalence or study abroad"],
        ],
      },
    },
    {
      heading: "What do IB and IGCSE tutors charge for a student in Sidlaghatta, and what moves the price?",
      paragraphs: [
        "We quote no fixed fee on this page, because the price follows the plan. A single weekly hour of IGCSE English is priced differently from two lessons a week of IB Chemistry Higher Level in the run-up to May. Rates are written down after the free trial lesson, and only then do you decide whether to book. That order matters: you judge the teaching before any money is discussed.",
        "Four things move the rate. The tutor's experience with your exact syllabus comes first; specialists in Higher Level sciences, Additional Mathematics and other scarce subjects cost more than general teachers. The number of lessons each week is second, and the length of each session third. Timing is fourth, because the weeks before mocks and final papers are busy and popular hours go early.",
        "Online delivery changes the sums. A family in Sidlaghatta saves the fuel, the hours on the road to Bengaluru and any centre fee, and a student keeps the evening for practice instead of travelling. Put those savings beside the rate when comparing with a city coaching class. A crowded batch and a private tutor who reads one student's work are not the same purchase.",
        "To keep spending sensible, tell the tutor early about your budget and fixed commitments, including tuition classes, farm or shop duties and festival travel. A tutor can then propose a plan that targets the topics with the most marks rather than filling hours. If a plan stops being affordable, say so; a lighter schedule is better discussed than allowed to lapse.",
      ],
    },
    {
      heading: "Is online tuition better than a Bengaluru coaching class for an IB or IGCSE student from Sidlaghatta?",
      paragraphs: [
        "For international syllabuses, yes for most students, because the drive to Bengaluru eats the same hours that the lesson would use, and IB and IGCSE tutors in Sidlaghatta who teach online spare that journey. A live one-to-one tutor reaches the home directly, teaches the exact specification and reads the student's own pages. City coaching classes are mainly built for PUC, KCET, JEE and NEET. The table compares five options on what matters to a family a long way from the city.",
        "Bengaluru's coaching culture is deep, and its strengths are real: competition, resources and peers. The weakness, for this purpose, is fit. A batch preparing for CET or JEE does not teach Internal Assessment planning, Cambridge practical papers or how IB examiners split marks in an extended answer, and a student travelling from Sidlaghatta loses the evenings the subject needs.",
        "Local tuition and a teacher who comes to the house are valuable for basics and discipline. They rarely know how IB Mathematics awards method marks, how an IGCSE tier is chosen or how command words such as evaluate and discuss are rewarded. A well-meaning teacher who drills the wrong exam style can quietly cost marks over a year, which is why specification knowledge matters more than hours.",
        "Studying alone works for a few students who are disciplined and own past papers and mark schemes. The missing piece is a second reader, someone who spots a recurring slip or a vague sentence before an examiner does. Online tutoring adds that reader without the long road, and sessions can be short and frequent rather than long and rare.",
      ],
      table: {
        caption: "Comparing five ways to prepare for IB or IGCSE from Sidlaghatta",
        columns: ["Approach", "Specification knowledge", "Individual attention", "Burden on the family"],
        rows: [
          ["Online one-to-one lessons", "High, matched to subject and level", "Complete", "A laptop, a steady connection and a set hour"],
          ["Coaching class in Bengaluru", "Usually low", "Shared across a batch", "Long daily travel or a relocation"],
          ["Local tuition in town", "Usually low", "Small batch", "Convenient, but built around the state syllabus"],
          ["A visiting teacher at home", "Varies", "Complete", "Helpful for basics, less for exam technique"],
          ["Independent study with past papers", "Only what the papers show", "None", "Needs discipline and feedback from someone"],
        ],
      },
    },
    {
      heading: "When are the exams, and how do Ugadi, Dasara and the monsoons shape study time in Sidlaghatta?",
      paragraphs: [
        "IGCSE papers come in May-June and October-November, and IB written exams fall mainly in May. Karnataka's school year starts around late May or June, and Dasara, Deepavali and the year-end holidays break it into terms. SSLC and second-PUC exams arrive in March, with KCET and NEET following in spring. A plan for an international syllabus has to fit between all of these.",
        "Weather is gentle at this height. Sidlaghatta stands at 878 metres, so the climate is close to Bengaluru's, with rain arriving mostly in the southwest monsoon and again in October and November. Heavy storms still bring power cuts, so keep a phone charged enough to share its data connection, and settle a spare weekly slot with the tutor.",
        "Festivals shape the calendar more than weather does. Ugadi in March or April, Dasara in September or October, Deepavali and Sankranti each bring family travel and school breaks. Planning around them beats fighting them: tutors front-load revision before a festival, then resume with timed papers afterwards. Families in silk and farming work also have seasons of their own, worth mentioning at the start.",
        "Candidates for the IGCSE summer series feel the pressure from March, and those aiming at the autumn series from August. IB students build towards May. Mocks tend to fall in January or February, which puts weight on the weeks around Sankranti and before the PUC and SSLC exams. The heaviest papers go into quiet weeks, and the last fortnight is for checking errors rather than learning new topics.",
      ],
      table: {
        caption: "A school year in Sidlaghatta and what it means for lessons",
        columns: ["Season", "Local backdrop", "Exam or school milestone", "Lesson focus"],
        rows: [
          ["June to August", "Schools reopen; southwest monsoon showers", "New term and first unit tests", "Foundations and gap-closing"],
          ["September to October", "Dasara break, then northeast monsoon rain", "Term exams; IGCSE autumn series", "Short, targeted sessions for candidates"],
          ["November to December", "Deepavali and cooler weather", "Mid-year exams", "Catch-up and first full mock papers"],
          ["January to February", "Sankranti and pleasant dry weather", "Mocks and pre-boards", "Timed papers and method coaching"],
          ["March to April", "Ugadi and warming days", "SSLC, second PUC, KCET", "Lighter load around board exams; IGCSE entry deadlines"],
          ["May to June", "A hot dry spell before the rains", "IGCSE summer series, IB May papers, NEET", "Tight revision and timed practice"],
        ],
      },
    },
    {
      heading: "IB Mathematics AA or AI, and how do the sciences suit a student from a farming and silk district?",
      paragraphs: [
        "Analysis and Approaches fits students heading for engineering, computing or pure science; Applications and Interpretation fits economics, agriculture-linked degrees, health sciences and the social sciences. A student near Bengaluru's software industry may assume the first, yet the choice should follow the written entry requirements of the courses aimed at. Many universities accept either and some state a preference, so read them before deciding.",
        "Students from the Karnataka syllabus often have good algebra and calculus from PUC preparation. The IB asks for more written explanation: clear steps, correct notation and sensible use of a graphing calculator, with marks for method even when an answer is wrong. Both courses include an Internal Assessment, an exploration the student chooses; tutors can test whether a topic is workable, but the writing stays the student's.",
        "Biology suits students curious about agriculture, sericulture or medicine, with its data questions and experiment design. Chemistry asks for calculation fluency and organic pathways. Physics rewards mathematical modelling. Tutors work through past papers topic by topic, teach how six-mark answers are built and train students to read unfamiliar graphs. Where a school lacks a laboratory, the practical element needs early planning with its coordinator.",
        "Workload deserves candour. A student attempting Higher Level sciences while also preparing for KCET or NEET carries two habits of study at once; some manage it, while others are better choosing Standard Level in a subject. Enrolment and exam entry belong to an authorised school; a home tutor backs the course up but never stands in for it.",
      ],
    },
    {
      heading: "Should a Sidlaghatta student take IGCSE at Core or Extended level, and in which subjects?",
      paragraphs: [
        "At Cambridge, the same subject is sold in two tiers. Core tops out at grade C, while Extended goes up to A*, and Edexcel's Foundation and Higher papers follow a similar logic. If a child coped well with Class 8 and 9 mathematics, Extended or Higher is normally realistic, and a first-week diagnostic settles it. Starting on the harder tier is the safer gamble: a student can step down before entry, but cannot easily step up.",
        "Most IGCSE students take between five and eight subjects. Typical packages pair English and mathematics with two or three sciences, another language and an elective. Those eyeing engineering keep Mathematics, Additional Mathematics and Physics; health-science aspirants keep Biology and Chemistry. Families linked to agriculture, trade or manufacturing often add Business Studies, Economics or Geography, which suit the farming and commercial economy of the district.",
        "Cambridge and Pearson Edexcel are different systems. Their syllabus codes, paper layouts, question wording and practical arrangements do not match, so a tutor starts by asking which board and tier a child will actually sit. Practising on the wrong board's papers is a quiet way to lose weeks. Practical skills are assessed through a laboratory paper or a written alternative; the centre can say which applies.",
        "A student with no school entry for IGCSE must be registered through an accepting centre as a private candidate, with practical work arranged where needed. Bengaluru is the likeliest place to find one, so ask early; closing dates fall months ahead and fees vary. Families aiming for a Karnataka PUC seat afterwards should ask the receiving college which equivalence documents it wants. Tutors teach the syllabus; they cannot arrange the entry.",
      ],
    },
    {
      heading: "Where can an IB or IGCSE student from Sidlaghatta go next: Bengaluru, India or abroad?",
      paragraphs: [
        "Most routes are open. The AIU treats the IB Diploma as equal to Class 12, CUET-UG opens central universities, and KCET, JEE Main and NEET-UG publish their own eligibility rules every year. Universities in the UK, Canada, Australia, Ireland and the USA evaluate IB and Cambridge results as they stand. Decide the target course first and work backwards to subjects, because the right question is fit, not recognition.",
        "Bengaluru is the obvious local choice for higher study: the Indian Institute of Science, Bangalore University, many private universities, and the University of Agricultural Sciences, whose College of Sericulture sits at Chintamani in this same district. Each sets its own admission rules, and some accept KCET or COMEDK scores instead of board marks. Read the current prospectus before assuming any equivalence.",
        "Engineering aspirants will weigh KCET, JEE Main and COMEDK, plus private universities with their own tests; IB Mathematics with Physics and Chemistry keeps those doors open. Medical aspirants need NEET-UG, which asks for Physics, Chemistry, Biology or Biotechnology and English, and IB students should check the equivalence rule in the latest NTA bulletin before assuming eligibility. Bengaluru's software industry also draws computer science and data-science aspirants.",
        "Overseas study motivates many families to consider these syllabuses at all. A student who has practised extended writing, source analysis and data interpretation arrives better prepared, and relatives abroad sometimes help with visas and living costs. Tutors do not manage applications or write essays, but they will say plainly which subject mix keeps a destination open, and whether an extra test such as IELTS may be required.",
      ],
      table: {
        caption: "Next steps open to a Sidlaghatta student with IB or IGCSE",
        columns: ["Aim", "Entrance route", "With the IB Diploma", "With IGCSE"],
        rows: [
          ["Engineering in Karnataka or India", "KCET, COMEDK, JEE Main", "Mathematics, Physics and Chemistry choices matter", "Needs a Class 11-12 course first"],
          ["Medicine or dentistry", "NEET-UG counselling", "Equivalence and science subjects must match", "A senior-stage qualification comes first"],
          ["Agriculture, sericulture or life sciences", "KCET or university entrance tests", "AIU equivalence usually enough", "A Class 12 equivalent is needed"],
          ["Arts, commerce or law", "CUET-UG or university tests", "Usually accepted with equivalence", "A Class 12 equivalent is needed"],
          ["Study abroad", "Direct applications", "Scores read directly", "IGCSE, then A Level or the Diploma"],
        ],
      },
    },
  ],

  process: [
    { title: "Share the basics", description: "Tell us your child's class, the school or board now followed and the subject that needs work, by WhatsApp or email." },
    { title: "Pin down the syllabus", description: "We confirm board, code, tier and exam series, and whether the student is enrolled in a school or studying privately." },
    { title: "Watch a trial lesson", description: "A tutor suited to the subject gives a real lesson at a time that fits your evening." },
    { title: "Get the rates in writing", description: "After the trial comes a written quote and a proposed weekly schedule; nothing is paid beforehand." },
    { title: "Start the routine", description: "Lessons begin, each ends with a short recap, and another tutor can be requested whenever needed." },
  ],

  whyPoints: [
    { title: "Right syllabus, right level", description: "Tutors are matched to the IB guide or the IGCSE code and tier your child actually follows." },
    { title: "No commute, no pretence", description: "Lessons are live and online; tutor visits exist only in Gurugram and a few Delhi NCR neighbourhoods." },
    { title: "Fits a small-town week", description: "Sessions are set around school, tuition, family work and festivals, with slack for the rains." },
    { title: "Rates you can read first", description: "A written quote arrives after the trial and before any commitment." },
    { title: "Guidance, not authorship", description: "Tutors explain criteria and react to drafts; the IA, essay or coursework remains the student's own." },
    { title: "Recaps after class", description: "Each session ends with a brief note on what was done and what to practise." },
  ],

  tutorsIntro:
    "Every tutor teaches live from elsewhere in India and is matched to your child by subject and programme; the trial lesson is the moment to test that match.",

  faqs: [
    {
      question: "Do tutors come to homes in Sidlaghatta?",
      answer: "No. Tutors do not travel to Sidlaghatta, and every session is live, private and online; home visits happen only in Gurugram and parts of Delhi NCR. The student works at a desk with a laptop while the tutor, on video, writes on a shared screen and marks written work as it is produced. You get private tuition without the long road to Bengaluru.",
    },
    {
      question: "Is there an IB or IGCSE school in Sidlaghatta or Chikkaballapur?",
      answer: "Our checks found no IB, Cambridge or Edexcel school in Sidlaghatta, Chikkaballapur or Kolar. The nearest confirmed schools are in Bengaluru, about 70 kilometres away by road. Programmes come and go, so confirm any school's present status with the IB or Cambridge itself before relying on a list such as this one.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Sidlaghatta?",
      answer: "There is no fixed rate, because the price follows the subject and level, the tutor's experience and how many sessions you take each week. After the free trial you receive a written quote, never before. If money is tight, say so early, and the tutor can spend the hours on the topics worth most marks instead of spreading them thinly.",
    },
    {
      question: "How far is Bengaluru, and can my child commute to an IB school from Sidlaghatta?",
      answer: "Bengaluru is roughly 70 kilometres by road, and the approach roads can be slow at peak hours. A daily round trip is tiring at any age, so most families consider boarding or relocation for Class 11 and 12. Whichever you choose, check the school's admission rules and IB or Cambridge authorisation directly, and use tutoring at home for subjects needing extra time.",
    },
    {
      question: "Can my child take the IB Diploma while living in Sidlaghatta?",
      answer: "The Diploma can be taken only when an authorised IB World School registers the student, online schools included; nobody can sign up as a private candidate. From Sidlaghatta that means boarding in Bengaluru, relocating, or enrolling online while studying at home. A tutor can then strengthen mathematics, sciences or languages, but enrolment and exam entry always run through the school.",
    },
    {
      question: "Can my child sit IGCSE as a private candidate?",
      answer: "Often, if a registered centre is willing to accept an outside candidate and set practical papers. Bengaluru is the likeliest place to look. Entry deadlines fall months before each series and fees vary, so begin early. Tutors teach the content, timed papers and practical technique but cannot enter a child, so ask the centre and quote the exact syllabus code.",
    },
    {
      question: "Is the IB Diploma accepted for KCET, NEET and Karnataka colleges?",
      answer: "The AIU generally treats the IB Diploma as a Class 12 equivalent, and CUET-UG covers many central universities. KCET, COMEDK and NEET-UG have separate eligibility rules covering subjects, marks and equivalence, and they change. Read each year's official notice before choosing subjects. A tutor can explain what a rule means for subject choice, but only the notice is authoritative.",
    },
    {
      question: "How do Kannada and other languages work alongside IB or IGCSE?",
      answer: "Many students already use Kannada, Telugu, Urdu and English at home, which helps the language parts of both courses. The IB offers Kannada A: Literature and Hindi B, while IGCSE offers Hindi as a Second Language. Karnataka schools usually expect Kannada, so check the language rules with any school you consider, and ask us early if language tutoring is needed.",
    },
    {
      question: "How do Dasara and Ugadi affect the study plan?",
      answer: "Both bring travel, guests and school breaks, so we plan around them. Tutors usually front-load revision before a festival and restart with timed papers afterwards. Give the tutor your family's festival dates at the start of term, Deepavali and Sankranti included, so the plan steers around the days that are truly unavailable.",
    },
    {
      question: "What if a storm or power cut interrupts a lesson?",
      answer: "If the lights or the broadband go out, the lesson restarts when they return or moves to the spare slot fixed for that week. A charged laptop and a phone that can share its data connection make the difference. Mention it if storms regularly cut your supply, so that stormy-day sessions can be earlier or shorter.",
    },
    {
      question: "Will a tutor write my child's IA, Extended Essay or coursework?",
      answer: "No; authorship always stays with your child. A tutor can explain marking criteria, judge whether a research question is workable, comment on an outline and respond to a draft. Writing sentences, running analyses or altering data is not allowed, and the same holds for TOK essays and coursework. Staying inside that line keeps your child clear of any malpractice finding.",
    },
    {
      question: "Which IGCSE boards do tutors cover?",
      answer: "Both Cambridge International and Pearson Edexcel, with AS and A Level as background. Every plan begins with the exact syllabus code and tier, since practice from the other board's papers wastes weeks. When the school cannot say which board examines Class 10, ask for the entry details, and we will look for a tutor with that specification behind them.",
    },
    {
      question: "Can a tutor help my child move from the Karnataka state syllabus to IGCSE?",
      answer: "Yes, and the earlier the better. A tutor compares the two syllabuses, finds what the child already knows, and builds the missing habits: writing full explanations, handling units and command words, and answering unfamiliar data questions. Class 8 or 9 is an ideal time, because a year of preparation before IGCSE content begins makes the switch far less stressful.",
    },
    {
      question: "When should tutoring begin?",
      answer: "There is no fixed age, but the turning points are predictable. Primary children gain from reading and number confidence; MYP and IGCSE students benefit from support starting a year before the exam stakes rise; Diploma students usually start in the first months of Class 11. Earlier help tends to be calmer, because there is time to repair gaps without panic.",
    },
    {
      question: "How do we start, and how does the free trial work?",
      answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the class, the school or board and the subject. We propose a tutor and arrange a genuine lesson at a convenient hour. A short recap follows, and written rates are sent only if you want to continue. Should the tutor not suit, another can be proposed.",
    },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "An overview of tutors, subjects and trial lessons." },
    { label: "Indian city pages", href: "/india/", description: "Every city where lessons run online." },
    { label: "Gurugram", href: "/gurgaon/", description: "Where tutors also attend homes." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Tutors sorted by IB subject and level." },
    { label: "IGCSE", href: "/igcse/", description: "Cambridge and Edexcel subjects explained." },
    { label: "IB PYP", href: "/programmes/pyp/", description: "How the primary years work." },
    { label: "IB DP", href: "/programmes/dp/", description: "The Diploma's six subjects and core." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI side by side." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or request a trial." },
    { label: "Bengaluru", href: "/bengaluru/", description: "The nearest big city and its international schools." },
    { label: "Kolar", href: "/kolar/", description: "The neighbouring district to the east." },
    { label: "Tumkur", href: "/tumkur/", description: "Another Karnataka town at a similar distance from Bengaluru." },
    { label: "Ramanagaram", href: "/ramanagaram/", description: "The silk town on Bengaluru's other side." },
  ],

  closingHeading: "Try a free lesson at home in Sidlaghatta before you decide anything",
  closingBody:
    "Searching for IB and IGCSE tutors in Sidlaghatta can end with a short message: your child's class, the school or board, and the subject that needs help. We then name a tutor and a trial hour, and written rates follow the lesson. Reach support@ibgram.com or WhatsApp +91 7439 368 115.",
};
