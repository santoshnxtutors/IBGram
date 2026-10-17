import type { CitySeoPage } from "../types";

/**
 * /sanawad/ - IB and IGCSE tutoring page for Sanawad, Khargone district, Madhya Pradesh. Online only:
 * no IB or Cambridge/Edexcel school in Sanawad could be confirmed, so stripSchools is empty and the
 * clusters reuse the Indore names already verified on neighbouring pages. Tutors do not visit homes;
 * in-person home tuition runs only in Gurugram and parts of Delhi NCR.
 */
export const sanawad: CitySeoPage = {
  slug: "sanawad",
  countryName: "Sanawad",
  countryNameLong: "Sanawad, Madhya Pradesh",
  demonym: "Sanawad",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fixed around the cotton and chilli harvest weeks, the Navratri and Ganesh festival evenings and the long Nimar summer afternoons when the house is better kept quiet",
  lastUpdated: "2026-09-21",
  geo: { latitude: 22.1744, longitude: 76.0688 },
  wikipedia: "https://en.wikipedia.org/wiki/Sanawad",
  alternateNames: ["Sanawad Khargone", "Sanawad Nimar", "Sanawad MP"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sanawad | Private Tuition Online",
  metaDescription:
    "Private online tuition for Sanawad students: IB DP, MYP, PYP and Cambridge or Edexcel IGCSE, one-to-one at home on a laptop, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition Online in Sanawad",
  heroEyebrow: "PRIVATE IB & IGCSE TUITION FROM HOME IN SANAWAD",
  heroSubtitle:
    "A Sanawad family searching for home tuition for an international syllabus has a short list of options on the ground, so private tuition from home here means a live one-to-one video lesson with a tutor who knows the exact IB or IGCSE course. This page explains how that works in a Nimar town where school life follows CBSE and the MP Board, and where the nearest IB and Cambridge classrooms sit in Indore.",
  primaryKeyword: "IB and IGCSE tutors in Sanawad",
  imageAltText: "A student in Sanawad revising IB Mathematics on a laptop during a live one-to-one lesson with an online tutor",
  secondaryKeywords: [
    "IB tutor Sanawad",
    "IGCSE tutor Sanawad",
    "IB home tuition Sanawad",
    "IGCSE home tuition Sanawad",
    "IB private tuition Sanawad",
    "IB Maths tutor Sanawad",
    "IGCSE Maths tutor Sanawad",
    "IB Physics tutor Sanawad",
    "IB Chemistry tutor Sanawad",
    "IB Biology tutor Sanawad",
    "IB DP tutor Sanawad",
    "IB MYP tutor Sanawad",
    "IB PYP tutor Sanawad",
    "IGCSE online tuition Sanawad",
    "online home tuition Sanawad",
    "IB tutor Khargone district",
    "IB tutor Nimar region",
    "IB tuition Sanawad Madhya Pradesh",
    "Cambridge IGCSE tutor Sanawad",
    "Edexcel IGCSE tutor Sanawad",
  ],

  heroTrustPoints: [
    "Every tutor is chosen for the syllabus code and level your child sits, not for a general IB or IGCSE label",
    "Lessons are live and online; tutors do not come to houses in Sanawad, because home visits exist only in Gurugram and parts of Delhi NCR",
    "A free trial lesson comes first, and a written note follows each session",
    "Rates are agreed in writing before anything is booked",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Primary years through Diploma" },
    { value: "Two IGCSE boards", label: "Cambridge and Pearson Edexcel" },
    { value: "IST evenings", label: "Fits a Sanawad school day" },
    { value: "Free trial", label: "Before any payment" },
  ],

  intro: {
    heading: "Home tuition for an international syllabus, from Sanawad",
    paragraphs: [
      "Home tuition in Sanawad has always meant a teacher at the dining table, usually for Class 10 science or Class 12 accountancy. For an IB or IGCSE student the same idea survives, but the table is a laptop. Your child sits at home, in their own room, and a tutor who has taught that very paper joins on video with a digital whiteboard. That is what IB Gram offers to families searching for IB and IGCSE tutors in Sanawad, and it is a genuine form of private tuition at home, not a recorded course.",
      "Sanawad lies in the Nimar belt of Khargone district, a farming and trading town where cotton, chilli and soybean shape the calendar. Its schools follow the Madhya Pradesh Board and CBSE, and the families who ask about IB or IGCSE are a small group: parents who have worked in Indore, Pune or abroad and returned, business households thinking about foreign universities, and students already enrolled at an Indore school who want weekend support from home. Such a student cannot walk to a specialist; the specialist has to arrive through a screen.",
      "To be clear about the model: nobody from IB Gram will ring a doorbell in Sanawad. In-person home visits run only in Gurugram and parts of Delhi NCR. Here every lesson is online, in Indian Standard Time, with a tutor who is based in India. A free trial lesson lets you judge the fit, a short written note follows each session, and the tutor can be changed if the match is wrong. We are independent of the IB, Cambridge, Pearson and every school named on this page.",
    ],
  },

  programmesIntro:
    "Four IB programmes are covered. Because no school in Sanawad teaches them, most students arrive from an Indore classroom, from a family move, or from a plan to join one later, and each programme card says what that route looks like.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Inquiry units replace a rigid subject timetable, so tuition looks like reading, number sense and writing support built around the unit a child is currently studying. The PYP Exhibition in the final year is a presentation project, and tutors help a child plan questions and rehearse speaking, never produce the work.",
      countryNote:
        "In Sanawad, PYP tuition is mostly for families preparing a child to enter an Indore school or returning from overseas, where gaps in written English and mental maths show up first.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Criteria-based assessment rewards explaining a method, not only reaching an answer. Tutors work through command terms, interdisciplinary units and the Personal Project's process journal, while the student alone produces the project itself.",
      countryNote:
        "A student moving from an MP Board classroom into MYP often finds the criteria language harder than the content, which is where a patient weekly session pays for itself.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, plus TOK, the Extended Essay and CAS. Tuition targets paper technique, internal assessment method and time management across a two-year load that surprises students used to a single board exam in March.",
      countryNote:
        "Sanawad students on the Diploma are normally enrolled in Indore and travel or board there; online tuition covers the weekends and holidays they spend at home.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three Diploma courses are paired with a career-related study, a reflective project and the core. Tutors support the academic Diploma subjects and the reflective writing structure, without touching the career-related qualification's own provider.",
      countryNote:
        "CP is rare in central India, so a family considering it usually wants an early conversation about which Diploma courses give the most flexibility.",
    },
  ],

  subjectsIntro:
    "These are the IB subjects tutors in this network teach most often. HL and SL tutoring is separate because the depth of the syllabus differs.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, proof-style reasoning and the unfamiliar questions of Paper 3 at HL; tidy algebra and timing at SL." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator fluency for students heading towards economics, business or social science." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, fields, waves and quantum ideas, with practice reading the data booklet quickly and designing a sound investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry through organic mechanisms, with equilibrium and kinetics explained from graphs rather than rote rules." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics and ecology, plus the habit of writing precise, mark-scheme style definitions." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram discipline, evaluation language and fresh real-world examples for Paper 1 and the commentary portfolio." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, the finance calculations and the structure of extended responses." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and the problem-solving habits behind the Paper 1 and Paper 2 questions." },
    { name: "IB English A: Language & Literature", levels: "HL / SL", description: "Textual analysis, comparative writing and the oral commentary, with close reading practice." },
    { name: "IB English A: Literature", levels: "HL / SL", description: "Works in translation, essay planning and developing a personal voice that still meets the criteria." },
    { name: "IB Hindi A and B", levels: "HL / SL", description: "Prose and poetry analysis for Hindi A; vocabulary, grammar and written tasks for Hindi B." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, evaluation points and the short answer structure examiners reward." },
    { name: "IB Theory of Knowledge", levels: "Core", description: "Ways of knowing, knowledge questions and the oral exhibition, coached as thinking practice and never ghost-written." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis, essay argument and selecting examples under timed conditions." },
  ],

  igcseSubjectsIntro:
    "Both Cambridge (CAIE) and Pearson Edexcel IGCSE are taught. Core and Extended tiers, and the exact syllabus code, are confirmed before the first lesson.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Algebra, trigonometry and geometry, with Extended students pushed on graphs and functions." },
    { name: "IGCSE Additional Mathematics", levels: "Cambridge", description: "A step up for students planning A Level Maths, centred on calculus and coordinate geometry." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, electricity and thermal physics, with the alternative to practical paper handled carefully." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Bonding, reactions, the periodic table and calculations that depend on a steady method." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, transport, genetics and ecology, with practice on data-response questions." },
    { name: "IGCSE English as a Second Language", levels: "Cambridge", description: "Reading, writing and speaking tasks aimed at fluent, accurate output in an Indian-English context." },
    { name: "IGCSE English Language", levels: "Cambridge / Edexcel", description: "Directed writing, summaries and persuasive pieces under time limits." },
    { name: "IGCSE Economics and Business Studies", levels: "Cambridge / Edexcel", description: "Definitions, calculations and short-answer technique for the commerce subjects." },
    { name: "IGCSE Computer Science", levels: "Cambridge", description: "Pseudocode, programming logic and the theory paper vocabulary." },
    { name: "IGCSE Hindi as a Second Language", levels: "Cambridge", description: "Grammar, comprehension and writing, useful for a student who studied Hindi in a state-board classroom." },
  ],

  regionsTitle: "Sanawad areas and nearby places our online tutors work with",
  regionsIntro:
    "Lessons are video calls, so the places below matter for context: school catchments, daily timing and which families are likely to be on an Indore commute.",
  regions: [
    { name: "Station Road and the main bazaar", note: "The commercial spine where many trading households live; evenings are loud, so students often prefer lessons after the shops close or in a room at the back of the house." },
    { name: "Mandi area", note: "Close to the agricultural market, where cotton and chilli traders keep early hours; families here sometimes ask for early-morning slots before the day's business starts." },
    { name: "Khargone Road side", note: "A residential stretch towards the district headquarters, home to teachers and government employees who know the MP Board system well." },
    { name: "Indore Road side", note: "Families on this side often have relatives in Indore and are most likely to be weighing a move to a school there." },
    { name: "Narmada-facing villages", note: "The Narmada valley lies close by, and rural families who send children to town for school often have only evening hours for study." },
    { name: "Bhikangaon route", note: "Neighbouring town on the same corridor, whose students share the limited choice of local coaching." },
    { name: "Mandleshwar and Maheshwar belt", note: "Pilgrimage and handloom towns on the river, within easy reach; students here have similar school options and similar needs." },
    { name: "Omkareshwar side", note: "A temple town on the Narmada, where visitor traffic changes with the festival calendar and so does the best time for a quiet lesson." },
    { name: "Kasrawad and Barwaha direction", note: "Smaller towns in the wider Nimar region whose families often travel to Sanawad market on weekly days." },
    { name: "Government colony areas", note: "Staff quarters of local offices, where transfer postings make a portable online tutor more practical than a local one." },
  ],

  schoolDisclaimer:
    "School names here describe the wider region and are included only where they are known to offer IB or Cambridge or Edexcel programmes. We are an independent tutoring service with no tie to any school, examining board or the IB organisation, and no school endorses this page.",
  schoolClusters: [
    {
      city: "Sanawad itself",
      note: "No school inside Sanawad is confirmed to offer the IB or a Cambridge or Edexcel IGCSE, and we do not name any we cannot verify. Local schools run CBSE and MP Board syllabuses, so the realistic route is online tuition alongside, or ahead of, a move.",
      schools: [],
    },
    {
      city: "Nearby: Indore",
      note: "Indore is the nearest large school market, around two hours away by road, and the place most Sanawad families look at if they want an IB or Cambridge classroom.",
      schools: ["Choithram International School", "The Emerald Heights International School", "Daly College"],
    },
    {
      city: "Nearby: Bhopal",
      note: "Bhopal is farther, but families who want a boarding or relocation option sometimes shortlist it. Local options for these programmes remain limited there too.",
      schools: ["Shrewsbury International School India"],
    },
  ],

  modesIntro:
    "There is one working format here, a live online lesson. What changes from family to family is the reason for the lessons: catching up before a school move, supporting a weekend visitor home from Indore, or preparing privately for an exam.",
  modes: [
    {
      title: "Weekly one-to-one video lessons",
      description:
        "A fixed hour each week with the same tutor, on a shared whiteboard, using the student's own school notes and past papers. This is the format that most closely matches what a family would call home tuition, minus the travel.",
      bullets: [
        "Same tutor from week to week",
        "Written note after every session",
        "Past-paper and mark-scheme work built into each lesson",
        "Evening or weekend slots in IST",
      ],
    },
    {
      title: "Holiday and weekend intensives",
      description:
        "For a student whose Indore school is on a different calendar, a block of daily lessons in the Diwali, summer or winter break catches up on a unit or builds exam speed.",
      bullets: [
        "Daily sessions during a break",
        "Topic maps before each block",
        "Timed paper practice at the end",
        "Plan agreed in writing in advance",
      ],
    },
    {
      title: "Exam-season revision",
      description:
        "Before the May or November sessions, a focused programme works through the highest-yield topics, command terms and timing for each paper.",
      bullets: [
        "Paper-by-paper plans",
        "Mock exam marking by the tutor",
        "Feedback on weak units",
        "Flexible rescheduling around travel",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE families in Sanawad ask for tutors?",
      paragraphs: [
        "The families who contact us from Sanawad fall into a few clear groups, and none of them are enrolled in a Sanawad classroom for these syllabuses. The first is the Indore-schooled child. A parent here has decided that the nearest real IB or Cambridge classroom, in Indore, is worth a hostel place or a rented flat, and the student comes home on holidays with textbooks and homework that nobody in the town can explain.",
        "The second group is the returning household. Someone worked in Pune, Dubai or Singapore for a decade, the children followed IGCSE or IB there, and the family came back to look after a shop, a farm or elderly parents. The children are now in a CBSE or MP Board school and need either a bridge into it or help keeping the old syllabus alive for a planned move again.",
        "The third is the planner. Trading families in Nimar frequently think in terms of education abroad, and parents who have seen what a UK, Canadian or Australian degree costs begin early. They want to know what the exam is, whether the student can begin the IGCSE at home, and how university offers read results.",
        "Finally there are self-directed learners: a student who wants Cambridge IGCSE Mathematics or IB Computer Science for personal reasons, studying privately. A tutor who knows the specification can set the pace and flag when the student is ready for a registered sitting at an authorised centre.",
      ],
      bullets: [
        "Students enrolled in an Indore IB or Cambridge school who study from Sanawad on weekends",
        "Returning families whose children left an IGCSE or IB programme overseas",
        "Planners aiming at study abroad who want a head start",
        "Private candidates preparing for a registered sitting elsewhere",
      ],
    },
    {
      heading: "How do CBSE, the MP Board, IB and IGCSE compare for a Sanawad student?",
      paragraphs: [
        "In short, CBSE and the MP Board are content-heavy and examined at the end of Class 10 and Class 12 with fixed national or state papers, while the IB and IGCSE reward application, explanation and choice of subjects. For a Sanawad student the practical difference is felt in assessment: the IB spreads marks across internal work, papers and the core, and IGCSE is examined subject by subject in the May or November series.",
        "The MP Board is the more common local route and is delivered in Hindi or English in many schools. CBSE is present in a few private schools and is the one most families choose when they plan JEE or NEET. Neither prepares a child to write a Paper 2 data question with a full chain of reasoning, and that is where a tutor adds value.",
        "The table compares the four systems on points parents ask about. It describes the general design of each board rather than any one school.",
        "A child changing system midstream is common here. Moving from the MP Board to IGCSE in Class 9 is easier than moving into the IB Diploma in Class 11, because the Diploma assumes subject fluency in English and strong writing from the first week.",
      ],
      table: {
        caption: "MP Board, CBSE, IGCSE and IB at a glance",
        columns: ["Feature", "MP Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Usual age band", "Class 1-12", "Class 1-12", "Class 9-10 (ages 14-16)", "Class 11-12 (ages 16-19)"],
          ["Language of study", "Hindi or English", "English or Hindi", "English", "English"],
          ["Assessment style", "Year-end board papers", "Board papers plus internals", "Subject papers and some coursework or practicals", "Papers, internal assessments and core components"],
          ["Subject choice", "Fixed streams", "Broad stream choice", "Wide, usually 5-8 subjects", "Six subjects, three at HL"],
          ["Entrance exams in India", "Direct", "Direct", "Needs CBSE-equivalent pathway after Class 10", "AIU equivalence, CUET-UG accepted"],
          ["Local availability", "Everywhere", "A few schools", "No school confirmed in town", "No school confirmed in town"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Sanawad, and what decides the rate?",
      paragraphs: [
        "Rates are not published on this page, because a fair quote depends on the tutor, not the town. We agree the figure in writing before booking, and the free trial lesson means nothing is owed for the first session.",
        "What moves the rate is mostly the tutor's experience with the specific course. An IB Maths AA HL tutor who has coached many Paper 3 sittings costs more than a general IGCSE tutor for a Core science paper. Subject scarcity matters too: Further Mathematics or Computer Science HL tutors are fewer than Biology or English tutors.",
        "Frequency and length also decide the monthly outlay. One 60-minute lesson each week is the common pattern. Some students do two lessons during exam season, and short intensives before a mock exam cost differently from a full-term arrangement.",
        "Because Sanawad families do not pay a daily commute or rent a classroom, the total outlay can be lower than the equivalent Indore tuition, but the comparison is not exact. Ask for the quote in writing and read it against the number of lessons you actually need.",
      ],
      bullets: [
        "The tutor's depth in the exact paper or level",
        "How scarce that subject is at HL or in Extended tier",
        "Lessons per week and the length of each lesson",
        "Intensive blocks before mocks or May and November sessions",
      ],
    },
    {
      heading: "Is online home tuition better than coaching centres or a local private tutor?",
      paragraphs: [
        "It depends on what the student needs, and for these syllabuses a coaching centre in a town of Sanawad's size rarely teaches either programme. Centres here are built for board exams and entrance preparation, which is useful but not a match for IB Paper 2 or IGCSE Extended Mathematics.",
        "A local private tutor can still be valuable for a school subject like Hindi or social science, and a student does not need to give that up. What local tutors seldom offer is familiarity with the IB command terms, internal assessment criteria or the CAIE mark scheme language.",
        "Online home tuition removes the travel and the narrow choice, and it also lets a student try three tutors rather than one. The cost is that a student must be comfortable with a screen for an hour, and the home needs a steady connection, which matters in a town where power cuts and fluctuating broadband still occur.",
        "Self-study with textbooks and videos remains cheap and works for disciplined students, but it lacks feedback on written answers, which is where IB and IGCSE marks are often lost. A tutor reading actual answers is the strongest argument for private lessons.",
      ],
      table: {
        caption: "Options for IB and IGCSE support from Sanawad",
        columns: ["Option", "Syllabus knowledge", "Travel needed", "Written-answer feedback", "Flexibility"],
        rows: [
          ["Online one-to-one home tuition", "Matched to exact course", "None", "Detailed, per session", "High, IST evening or weekend slots"],
          ["Local coaching centre", "Mostly board and entrance exams", "Daily trip across town", "Limited", "Fixed batch times"],
          ["Local private home tutor", "Usually MP Board or CBSE", "None for you", "Depends on the individual", "Depends on the individual"],
          ["Self-study with videos", "Whatever the student finds", "None", "None unless paid for", "Total, but needs discipline"],
          ["Weekend travel to Indore", "Strong where a specialist exists", "About two hours each way", "Good", "Low, weekly strain"],
        ],
      },
    },
    {
      heading: "How does the Sanawad school year, harvest and weather affect study?",
      paragraphs: [
        "The school year in Madhya Pradesh runs from June or July, and the IB May session and the November session follow their own calendars. A family in Sanawad has to fit lessons into a year that also includes harvest, festivals and a long, hot summer.",
        "Kharif crops are sown with the first monsoon rains, and the cotton and chilli picking season in autumn pulls family labour in many households, including students who help at the mandi on weekends. A tutor can compress lessons into weekday evenings during those weeks.",
        "Summer in Nimar is severe. April and May daytime heat makes afternoon study unpleasant, and power cuts follow load. Students usually prefer early morning or after sunset, and the tutor schedules accordingly.",
        "Festivals matter more than people expect. Ganesh Chaturthi and the Navratri evenings of garba and puja take up a week each, Diwali stretches to ten days of holiday, and winter weddings in the Nimar region disrupt dates in December and February. We plan around these, not through them.",
      ],
      table: {
        caption: "A typical year for an IB or IGCSE student connected with Sanawad",
        columns: ["Period", "What is happening", "Study approach"],
        rows: [
          ["April-May", "IB May session; heat peaks", "Early morning or late evening lessons, final past papers"],
          ["June-July", "New school year; monsoon starts", "Settle a weekly slot, set learning goals"],
          ["August-September", "Ganesh festival; kharif growth", "Steady term work, internal assessment drafts"],
          ["October-November", "Navratri, Diwali; IB November session; harvest", "Intensive revision blocks before and after holidays"],
          ["December-February", "Winter weddings; cooler weather", "Mock exams and coursework progress, IGCSE entry decisions"],
          ["March", "Cambridge and Edexcel series begin", "Timed past papers and speaking-test preparation"],
        ],
      },
    },
    {
      heading: "Which universities and careers can follow from IB or IGCSE in Sanawad?",
      paragraphs: [
        "A student from Sanawad who completes the IB Diploma can apply to Indian universities through AIU equivalence, to CUET-UG for central university admission, and to universities abroad directly with their predicted and final grades. IGCSE leads to A Levels, an IB Diploma, or a CBSE-recognised Class 11 route, and the right choice depends on the family's destination.",
        "For engineering aspirants, JEE Main requires Physics, Chemistry and Mathematics with recognised qualifications, and IB or Cambridge students can generally appear subject to NTA and institute rules, which should be checked in the year of application. NEET-UG has its own eligibility on subjects and English, and parents should read the official bulletin rather than rely on hearsay.",
        "Local higher education nearby includes the colleges affiliated to Devi Ahilya Vishwavidyalaya in Indore, IIT Indore, IIM Indore, and the Mahatma Gandhi Memorial Medical College. These are realistic targets for IB students who prefer to remain in the state.",
        "A smaller number aim at the UK, Canada, Australia, Singapore or the US. IB Gram does not run admissions counselling, but tutors can explain what the Diploma score means to international offers and which subjects keep options open.",
      ],
      bullets: [
        "AIU equivalence for Indian university admission",
        "CUET-UG for central universities, with subject choice mapped to the course",
        "JEE and NEET eligibility checked against the current official bulletin",
        "IIT Indore, IIM Indore and Indore medical and law colleges as local targets",
        "Direct overseas applications using predicted and final IB or IGCSE results",
      ],
    },
    {
      heading: "What do IB Mathematics and the sciences demand of a Sanawad student?",
      paragraphs: [
        "IB Mathematics Analysis and Approaches HL is the most demanding of the maths courses, and students who did well in MP Board mathematics sometimes find Paper 3 humbling. It asks for extended reasoning on a problem that does not resemble last year's. Applications and Interpretation is less algebra-heavy, with statistics and modelling, and fits a student heading to business or social science.",
        "Physics HL demands comfort with the data booklet and the habit of drawing a free-body diagram or a circuit before calculating. Students used to a textbook's single-step numericals often lose marks on explanation and units. Chemistry has more content than any other science, and mechanisms, equilibrium and energetics reward steady revision, not cramming.",
        "Biology HL leans on definitions and diagrams, and each paper has a data-based question that rewards clear reading. The internal assessment in each science is a full investigation, and tutors coach method, variables and evaluation. A tutor does not carry out the investigation or write it.",
        "For IGCSE, Extended Mathematics is the route into A Level Maths, and Core is a respectable finish for a student not planning further maths. The sciences split into theory and practical or alternative papers, and the alternative to practical paper is a skill that has to be rehearsed.",
      ],
    },
    {
      heading: "How do IGCSE Core and Extended tiers and subject choices work?",
      paragraphs: [
        "Core and Extended are two tiers of the same Cambridge or Edexcel subject. Core caps the top grade at a C or lower, depending on the board, and Extended opens grades up to A* or 9. A student aiming for A Level Maths, Physics or Chemistry should be on Extended in those subjects.",
        "Most IGCSE students take between five and eight subjects. English, Mathematics and at least one science are standard, and then a language, a humanity and perhaps a creative or technical subject. For a Sanawad student who may later move into the Indian system, Hindi and a science combination are practical choices.",
        "The two boards differ in style. Cambridge papers are typically structured with a mark scheme that rewards specific phrases, while Edexcel gives a more modular feel with its own command words. A tutor must know which board the student is registered with before choosing past papers.",
        "Because there is no IGCSE centre in Sanawad that we can confirm, private candidates should check the nearest authorised exam centre and registration deadlines early, usually several months before the series.",
      ],
      bullets: [
        "Core suits a final qualification; Extended suits A Level or IB preparation",
        "Five to eight subjects is the typical load",
        "Cambridge and Edexcel mark schemes differ in style",
        "Private candidates register through an authorised exam centre",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects, and Cambridge or Edexcel IGCSE, to students in Sanawad and across Madhya Pradesh. Each match considers the syllabus code, the level and the exam session before a name is suggested.",

  process: [
    { title: "Send the brief", description: "Tell us the programme or board, subject and level, current grade and the evenings that work in your home." },
    { title: "Review the shortlist", description: "We suggest tutors by syllabus fit and explain why each suits your child." },
    { title: "Take the free trial", description: "Your child tries a real topic with the tutor online, with no payment." },
    { title: "Approve the plan", description: "The tutor outlines topics, weekly rhythm and how progress will be reported; you agree or ask for changes." },
    { title: "Start regular lessons", description: "A fixed weekly slot begins, with periodic reviews and a tutor change if it is not working." },
  ],

  whyPoints: [
    { title: "Syllabus-exact matching", description: "Tutors are picked for the IB subject and level, or the IGCSE board, code and tier, instead of a general label." },
    { title: "Fits a town with no local school", description: "Sanawad has no confirmed IB or IGCSE school, so the tutor pool is national rather than limited by the town." },
    { title: "A trial first", description: "A real lesson on a real topic comes before any commitment, so the decision rests on evidence." },
    { title: "Clear academic limits", description: "Tutors coach technique and understanding but never write IAs, Extended Essays, TOK essays or coursework." },
    { title: "Visible progress", description: "A short written note follows each session so parents can see what was covered and what comes next." },
    { title: "Independent and flexible", description: "No tie to any school or board, and a tutor change if the fit is wrong." },
  ],

  faqs: [
    {
      question: "Do IB and IGCSE tutors come to my home in Sanawad?",
      answer:
        "No, tutors do not visit homes in Sanawad. In-person home tuition runs only in Gurugram and parts of Delhi NCR. In Sanawad the equivalent is online home tuition: a live one-to-one video lesson that your child attends from their own room. You get the same private attention and the tutor is chosen for your child's exact syllabus, without any travel.",
    },
    {
      question: "Is there an IB or IGCSE school in Sanawad?",
      answer:
        "We could not confirm any school in Sanawad offering the IB or a Cambridge or Edexcel IGCSE, so we name none. Local schools follow CBSE and the MP Board. The nearest confirmed options are in Indore, around two hours by road. Families usually pair an Indore school, a move or private study with online tuition at home.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Sanawad?",
      answer:
        "The rate depends on the tutor, subject, level and number of lessons, so we quote in writing before you book. IB Maths HL or a scarce subject usually costs more than a common IGCSE Core paper. There is no travel cost for an online lesson, and the free trial means the first session costs nothing. We do not publish a fixed rate card.",
    },
    {
      question: "Can my child take IGCSE exams from Sanawad?",
      answer:
        "A private candidate can register for Cambridge or Pearson Edexcel IGCSE through an authorised exam centre, but we cannot confirm a centre in Sanawad. Check the nearest centre, usually in a larger city, and its deadlines several months before the May or November series. Tutors can prepare your child for the papers while you sort the registration.",
    },
    {
      question: "Will the tutor write my child's IA, Extended Essay or TOK essay?",
      answer:
        "No, tutors never write assessed work. They coach: explaining the criteria, helping plan an investigation, giving feedback on a draft's structure and clarity. The IA, Extended Essay and TOK essay must be the student's own, as the IB requires. A tutor who wrote them would risk the student's qualification, so we do not allow it.",
    },
    {
      question: "How long is each lesson and when are they held?",
      answer:
        "Most lessons last 60 minutes, with a longer slot for Maths HL or revision blocks. Times are in Indian Standard Time, usually evenings after school or weekend mornings. In Sanawad we plan around harvest weeks, festival evenings and hot afternoons, and we reschedule with notice if a power cut or family event gets in the way.",
    },
    {
      question: "What internet and equipment does my child need?",
      answer:
        "A laptop or tablet, a stable broadband or 4G connection and earphones are enough. A tablet with a stylus helps for Maths and Physics because the tutor and student can write together on a whiteboard. If power cuts are frequent, have a charged device and a mobile hotspot ready, and tell the tutor so a lesson can resume where it dropped.",
    },
    {
      question: "My child studies in Indore and comes home at weekends. Can tutoring fit that pattern?",
      answer:
        "Yes, that pattern suits online tuition well. Lessons can be held on Saturday or Sunday mornings from Sanawad, and during term in the hostel on a weeknight if the school allows. The tutor works from the school's own syllabus and notes, so there is no clash, and a written note after each session tells the parent what was done.",
    },
    {
      question: "Which IB subjects are hardest to find tutors for?",
      answer:
        "HL Maths, Physics, Chemistry and Computer Science have the smallest pools, and Further-level mathematics and Economics HL can need a little lead time. Language B subjects such as Hindi and Spanish are also fewer. Tell us early which subjects and levels your child has, and we will say honestly how soon a good match is possible.",
    },
    {
      question: "Can my child switch from the MP Board to IGCSE or IB?",
      answer:
        "Yes, but the timing matters. Moving into IGCSE at Class 9 is smoother than entering the IB Diploma at Class 11, which expects strong English writing from week one. A tutor can run a bridging term in English, Maths and Science before the switch. A school change in Indore or elsewhere must be arranged separately by the family.",
    },
    {
      question: "Do IB and IGCSE students qualify for JEE, NEET and CUET?",
      answer:
        "Generally yes, with conditions. IB and Cambridge students can usually apply for CUET-UG and, subject to current NTA rules, JEE Main and NEET-UG, but eligibility depends on subjects, equivalence certificates and the year's bulletin. Check the official notice of the exam you plan to sit. Tutors can help your child choose subjects that keep each door open.",
    },
    {
      question: "How is the first trial lesson run?",
      answer:
        "The tutor spends the first part asking what your child is studying, what is difficult and what the next exam looks like. Then they work through one real topic with the student on the whiteboard, and finish with a short plan. You do not pay for it and you do not have to continue, so it is a fair way to judge the fit.",
    },
    {
      question: "What if the tutor is not a good fit?",
      answer:
        "Say so, and we will find a replacement. A tutor change is part of the service, and the trial lesson is designed to reduce the chance of needing one. We ask for specifics, such as pace, explanations or personality, so that the next match is better. There is no penalty for changing, and notes from earlier lessons carry over.",
    },
    {
      question: "Can younger children in Class 3 to 8 get PYP or MYP help?",
      answer:
        "Yes. PYP tutors focus on reading, writing and number skills through the inquiry units, and MYP tutors work on criteria, command terms and subject content. A child in Sanawad who has not studied in English medium may start with language support. The tutor keeps sessions shorter, usually 45 minutes, and parents get a note after each one.",
    },
    {
      question: "How do I contact IB Gram from Sanawad?",
      answer:
        "Message us on WhatsApp at +91 7439 368 115 or write to support@ibgram.com. Share the student's programme or board, subject, level and preferred evening hours. We reply with a short list of suitable tutors and arrange the free trial. You can also use the contact page on this site, and nothing is charged before the trial.",
    },
    {
      question: "Are you connected to any school, the IB, Cambridge or Pearson?",
      answer:
        "No. IB Gram is an independent tutoring service. We are not affiliated with the International Baccalaureate, Cambridge, Pearson or any school mentioned on this page, and no school recommends us. Schools are named only to describe the region. Tutors are based in India and teach in IST, and the choice of school stays with your family.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Indore", href: "/indore/", description: "The nearest large city with confirmed IB and Cambridge schools." },
    { label: "IB and IGCSE tutors in Ujjain", href: "/ujjain/", description: "Online tuition for students connected to Ujjain." },
    { label: "IB and IGCSE tutors in Bhopal", href: "/bhopal/", description: "Tutoring for families linked to the state capital." },
    { label: "IB and IGCSE tutors in Ratlam", href: "/ratlam/", description: "Online IB and IGCSE tuition for Ratlam families." },
    { label: "IB tutoring across India", href: "/india/", description: "How IB Gram works in Indian cities and towns." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person home tuition is available." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, internal assessments, TOK, Extended Essay and CAS explained." },
    { label: "IB Maths guide", href: "/courses/ib/mathematics/", description: "Analysis and Approaches, and Applications and Interpretation compared." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects and tiers." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse IB and IGCSE tutor profiles." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Book a free trial or ask a question." },
  ],

  closingHeading: "Book a free trial lesson with an IB or IGCSE tutor for Sanawad",
  closingBody:
    "Send us the programme, subject and level your child is studying, and a suitable tutor will be proposed. The first lesson is free, delivered online at home, and you decide afterwards. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
