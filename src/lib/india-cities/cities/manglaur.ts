import type { CitySeoPage } from "../types";

/**
 * /manglaur/ - IB and IGCSE tutoring page for Manglaur, Haridwar district, Uttarakhand. This is NOT Mangaluru
 * (Mangalore) in Karnataka, which has its own page; the copy says so plainly and links to /mangaluru/.
 * Online-only: tutors do not visit homes in Manglaur (home visits run only in Gurugram and parts of Delhi NCR).
 * No IB or Cambridge school could be confirmed in Manglaur or Roorkee, so stripSchools is empty and the clusters
 * point to Dehradun and Mussoorie. SelaQui is deliberately not named as IB (Wikipedia: left the IB for CBSE in 2013).
 * Facts: Wikipedia (Manglaur, Roorkee, Haridwar district, Doon School, Woodstock, Unison, SelaQui), edustoke lists.
 */
export const manglaur: CitySeoPage = {
  slug: "manglaur",
  countryName: "Manglaur",
  countryNameLong: "Manglaur, Haridwar district, Uttarakhand",
  demonym: "Manglaur",
  state: "Uttarakhand",
  stateCode: "IN-UT",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttarakhand, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We plan around school hours, Kanwar Yatra traffic on the Delhi-Haridwar highway, the July to September monsoon and winter fog",
  lastUpdated: "2026-09-21",
  geo: { latitude: 29.8, longitude: 77.87 },
  wikipedia: "https://en.wikipedia.org/wiki/Manglaur",
  alternateNames: ["Mangalaur", "Manglaur Uttarakhand"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Manglaur | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Manglaur (Haridwar district): PYP to Diploma and Cambridge or Edexcel IGCSE, live one-to-one at home, free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Manglaur",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION AT HOME, ONLINE, FOR MANGLAUR STUDENTS",
  heroSubtitle:
    "Manglaur here means the town in Haridwar district, Uttarakhand, on the Delhi-Haridwar highway, not Mangaluru in Karnataka. If you want private tuition at home in Manglaur for the IB or Cambridge IGCSE, no school nearby teaches either, so a specialist tutor teaches your child live online, one-to-one, matched to the exact subject and level, and timed around Roorkee commutes, Kanwar Yatra traffic and winter fog.",
  primaryKeyword: "IB and IGCSE tutors in Manglaur",
  imageAltText: "Manglaur student revising IB Physics with an online tutor during a live one-to-one lesson at home",
  secondaryKeywords: [
    "IB tutor Manglaur",
    "IGCSE tutor Manglaur",
    "IB home tuition Manglaur",
    "IGCSE home tuition Manglaur",
    "IB private tuition Manglaur",
    "IB Maths tutor Manglaur",
    "IGCSE Maths tutor Manglaur",
    "IB Physics tutor Manglaur",
    "IB Chemistry tutor Manglaur",
    "IB Biology tutor Manglaur",
    "IB DP tutor Manglaur",
    "IB MYP tutor Manglaur",
    "IB PYP tutor Manglaur",
    "IGCSE online tuition Manglaur",
    "Cambridge IGCSE tutor Manglaur",
    "IB tutor Manglaur Haridwar",
    "IGCSE tuition near Roorkee",
    "online IB tutor Roorkee Manglaur",
    "IB tutor Mangalaur Uttarakhand",
  ],

  heroTrustPoints: [
    "Each tutor is picked for one thing: your child's exact IB course and level, or the Cambridge or Edexcel syllabus code and tier",
    "Nobody turns up at the door in Manglaur; classes are live video calls, since home visits are limited to Gurugram and parts of Delhi NCR",
    "The first lesson is free, so you judge the tutor before spending anything",
    "IB Gram has no tie to the IB, Cambridge, Pearson or any school on this page, and its tutors teach but never write coursework",
  ],
  heroStats: [
    { value: "Nursery to Class 12", label: "PYP, MYP, DP, CP and IGCSE" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards covered" },
    { value: "IST", label: "The same clock as your school day" },
    { value: "Free trial", label: "Before you commit to anything" },
  ],

  intro: {
    heading: "Manglaur is not Mangaluru: what IB and IGCSE families here should know",
    paragraphs: [
      "Manglaur is a town of 52,971 people (2011 census) in Haridwar district, Uttarakhand, on the Delhi-Haridwar highway about 10 km before Roorkee and roughly 175 km from Delhi. It is not Mangaluru, the Karnataka port city many people spell Mangalore; if that is the place you want, our Mangaluru page covers it. Here the local speech is Khariboli, the official language is Hindi, and most schools work to the Uttarakhand Board, CBSE or ICSE.",
      "We could not confirm an IB or Cambridge IGCSE school in Manglaur or in nearby Roorkee. The schools that publish one are in Dehradun, roughly 80 km away, and in Mussoorie beyond it. Families most likely to want an international route are those tied to IIT Roorkee, the research institutes or the cantonment at Roorkee, are weighing a boarding school in the hills, or already have a child at one and need subject help in the holidays.",
      "Here is how lessons work. You open a laptop at home and join a video call with a tutor who may be in Pune, Chennai or Kolkata. Nobody from IB Gram turns up at the door in Manglaur, because we teach in homes only in Gurugram and parts of Delhi NCR. For IB and IGCSE tutors in Manglaur that means online private tuition on Indian Standard Time, with the tutor chosen for your child's syllabus and not for the tutor's postcode.",
      "A tutor's job is to teach, question and mark. Writing or rewriting an Internal Assessment, Extended Essay, TOK essay or any other coursework sits outside that job, here and everywhere else. IB Gram is also a service in its own right, with no partnership with the IB Organization, Cambridge, Pearson or any school named on this page.",
    ],
    bullets: [
      "Coverage from the PYP to the Diploma and CP, and Cambridge and Pearson Edexcel IGCSE",
      "Tutors chosen by course code and level, wherever in India they live",
      "A free first lesson, then a short written summary after every session",
      "Home visits are a Gurugram and Delhi NCR service only",
    ],
  },

  programmesIntro:
    "Manglaur families ask about the IB at different moments: before a boarding admission, in the middle of a programme, or when a child comes home for the holidays. The four programmes are described below with a note on how each looks from here.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12, nursery to Class 5",
      description:
        "Six transdisciplinary themes carry the learning, a child's own questions steer each unit, and progress shows up in portfolios, teacher observation and a final-year Exhibition. Extra help means steady reading, writing and number practice that does not flatten the inquiry.",
      countryNote:
        "We could confirm no PYP school in or near Manglaur, so a PYP learner here is either about to move or has arrived from a city school, and tutoring protects reading and number habits across that gap.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16, Class 6-10",
      description:
        "Four criteria apply in every subject, each marked out of 8, and the final grade from 1 to 7 follows from the total. Interdisciplinary units and the Personal Project sit alongside the subjects.",
      countryNote:
        "With no MYP campus near Manglaur, the learners we can help are boarders in Dehradun or Mussoorie, or families preparing for that step, and most lessons land in school holidays.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Ages 16-19, Class 11-12",
      description:
        "A two-year course of six subjects, Theory of Knowledge, a 4,000-word Extended Essay and a CAS record. Each subject is graded 1 to 7, and the total tops out at 45 points including up to 3 bonus points from TOK and the Extended Essay.",
      countryNote:
        "For Manglaur families the Diploma usually means The Doon School, for boys, or Woodstock School at Mussoorie, so tutoring follows that school's calendar and internal deadlines.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Ages 16-19, Class 11-12",
      description:
        "Built for a student with a practical or vocational direction: two or more Diploma courses, a career-related study, and a core that includes a reflective project and language development.",
      countryNote:
        "We know of no CP school near Manglaur. We teach only the Diploma courses inside it, not the career-related study.",
    },
  ],

  subjectsIntro:
    "Below are the subjects Manglaur students ask about most. Before proposing a tutor we check the level, the exam session and which components are assessed, since a tutor strong at SL Chemistry may not be the right fit for HL.",
  subjects: [
    { name: "IB Mathematics: Analysis and Approaches", levels: "HL / SL", description: "JEE-style drilling gives speed, but IB Paper 3 and the Exploration reward explaining why, so lessons balance fast problem-solving with written reasoning." },
    { name: "IB Mathematics: Applications and Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology, a good fit for economics, psychology or business pathways. Students practise interpreting output in plain sentences." },
    { name: "IB Physics", levels: "HL / SL", description: "Students fluent in mechanics from entrance preparation still need the data booklet, uncertainties and a Scientific Investigation built around a question they can defend." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Content knowledge is often strong. The gaps are usually in practical reports, equilibrium explained in words and organic mechanisms drawn with arrow precision." },
    { name: "IB Biology", levels: "HL / SL", description: "NEET-minded students know NCERT Biology in detail. IB asks for something else: command terms, data analysis and an investigation with a sound statistical test." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams need correct labelling and a live example, such as a crop price or a fuel tax, and HL Paper 3 adds quantitative policy questions." },
    { name: "IB Business Management", levels: "HL / SL", description: "Marks come from using a concept on the firm in the case, not from reciting it. The research project needs an organisation willing to share real figures, so start looking early." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode, data structures and theory count as much as coding. The IA is software plus its documentation, which rewards a weekly habit of writing and testing code." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "For students moving from Hindi-medium schooling, the work is extended English writing and unseen-text analysis, practised with timed Paper 1 and Paper 2 tasks." },
    { name: "IB Hindi A / B", levels: "HL / SL", description: "Hindi A suits strong readers who want to study literature closely; Hindi B suits students who speak Khariboli at home but need the written register and oral practice." },
    { name: "IB Geography", levels: "HL / SL", description: "River and flood management case studies fit the Ganga plains well, but the paper wants named places and figures, and fieldwork with a method that would survive questioning." },
    { name: "Theory of Knowledge (TOK)", levels: "DP core", description: "A conversation more than a lecture: the student defends a position under questioning and uses real examples to test an exhibition commentary." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel both feature here. Manglaur students most often meet IGCSE through a Dehradun school or while preparing for one, so each entry starts from the syllabus code.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended rewards speed and accuracy under time pressure, especially on the non-calculator paper, where setting out the method clearly protects marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and further algebra a year early, a natural bridge to IB Mathematics Analysis and Approaches for those who continue." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Similar mathematics to Cambridge but a different question style, so practice should come from Edexcel papers and not Cambridge ones." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Handling the alternative-to-practical paper and moving equations around quickly are the usual weak points." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations first, then organic chemistry, then a precise way of describing experiments in words." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Inheritance and ecology questions carry weight, and long structured answers need a practised stepwise style." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Case-study detail and a confident reading of maps, graphs and photographs matter more than general statements." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python practice alongside algorithm theory, since tracing logic sticks once it has been run on a machine." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading comprehension, directed writing and a conversation component, useful for students who meet formal Hindi late." },
  ],

  regionsTitle: "Manglaur and the towns around it, all reached online",
  regionsIntro:
    "Your child's lesson is the same wherever in the area you live. What varies is the commute to Roorkee or Dehradun and the school context nearby, which matters if you are weighing a move.",
  regions: [
    { name: "Manglaur town and its main bazaar", note: "The Nagar Palika area on the Delhi-Haridwar highway, with schools on Indian boards and no confirmed IB or Cambridge programme." },
    { name: "The highway towards Roorkee", note: "About 10 km of road to Roorkee, used by students going to coaching and colleges there, and diverted or slowed on Kanwar Yatra days." },
    { name: "Roorkee: IIT Roorkee, CBRI and the cantonment", note: "IIT Roorkee, the Central Building Research Institute and the Bengal Engineer Group and Centre make it a major engineering and defence community." },
    { name: "The highway towards Deoband and Delhi", note: "Delhi is about 175 km away along this road, which is also the route university-bound students take for admissions and campus visits." },
    { name: "Bhagwanpur", note: "One of the four tehsils of Haridwar district, on the Roorkee to Dehradun road." },
    { name: "Laksar", note: "Another of the four tehsils of Haridwar district." },
    { name: "Haridwar", note: "The district headquarters, with the Kanwar (Kavad) Mela and Kumbh crowds and institutions such as Gurukul Kangri University and Dev Sanskriti Vishwavidyalaya." },
    { name: "Saharanpur, across the district line", note: "The Uttar Pradesh city across the district line, a larger rail and market centre with its own page on this site." },
    { name: "Dehradun and the Doon valley", note: "Roughly 80 km away, the nearest place with schools that publish IGCSE, IB or both." },
  ],

  schoolDisclaimer:
    "The schools below are mentioned so you can see where an IB or Cambridge programme is on offer within reach of Manglaur, going by Wikipedia, public school directories and the schools' own descriptions. IB Gram stands apart from all of them: there is no partnership or arrangement with The Doon School, Unison World School, Cambrian Hall School, Woodstock School, the International Baccalaureate, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Manglaur and Roorkee",
      note: "We could confirm no IB or Cambridge IGCSE school in either town, so none is named. Local schools work to the Uttarakhand Board, CBSE and ICSE.",
      schools: [],
    },
    {
      city: "Nearby: Dehradun, roughly 80 km away",
      note: "The Doon School, a boys' boarding school, sits IGCSE at Class 10 and then offers the IB Diploma or ISC. Directory listings add IGCSE at the other schools named here.",
      schools: ["The Doon School, Dehradun", "Unison World School, Dehradun", "Cambrian Hall School, Dehradun"],
    },
    {
      city: "Nearby: Mussoorie, beyond Dehradun",
      note: "Woodstock School at Landour is an IB World School for the MYP and Diploma, co-educational, with boarding from Grade 6.",
      schools: ["Woodstock School, Landour"],
    },
  ],

  modesIntro:
    "The lesson is always a live one-to-one video call, on IST, from your own table; nothing about it involves a tutor travelling to Manglaur. What changes is when the lessons happen and how many there are.",
  modes: [
    {
      title: "Term-time weekly lesson",
      description:
        "One fixed hour a week, placed after school and any coaching, so the tutor can follow the same student through the whole term.",
      bullets: [
        "Fits around Roorkee coaching or school transport",
        "A single tutor builds up a picture of the gaps",
        "Practice papers are marked between lessons",
        "Moves easily around a festival or exam week",
      ],
    },
    {
      title: "Holiday catch-up for boarders",
      description:
        "Several lessons a week while a Dehradun or Mussoorie boarder is home, used to close the gaps the term exposed and to start the next unit ahead of time.",
      bullets: [
        "Planned with the school's term dates",
        "Covers the next unit before the new term starts",
        "Room for IA or Personal Project planning",
        "Carries on at weekends if the school allows",
      ],
    },
    {
      title: "Mock-to-exam push",
      description:
        "A compressed stretch before mocks or the May and October sessions, with timed papers marked against the published scheme and corrections gone through together.",
      bullets: [
        "A timed past paper every week",
        "Marked work gone through in the next lesson",
        "Kept clear of Kanwar Yatra diversions",
        "Fixed two or three weeks in advance",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools are within reach of Manglaur?",
      paragraphs: [
        "None inside Manglaur or Roorkee that we could confirm. The nearest schools publishing an IB or Cambridge programme are in Dehradun, roughly 80 km away, and in Mussoorie beyond it. Local schools work to the Uttarakhand Board, CBSE and ICSE, so a family here should treat IB or IGCSE as a decision about boarding or relocating, and treat any directory entry as a reason to phone the school, not as a promise.",
        "In Dehradun, The Doon School, a boys' boarding school, takes students through IGCSE at Class 10 and then the IB Diploma or ISC. Unison World School lists ICSE, ISC, IGCSE and A and AS Levels, and Cambrian Hall School lists ICSE and IGCSE. Woodstock School at Landour, Mussoorie, became an IB World School in 2019 with the MYP and Diploma, is co-educational and has boarding from Grade 6.",
        "One assumption is out of date. SelaQui International School near Dehradun was north India's first IB school when it opened in 2000, but it moved to CBSE in 2013 and now offers CBSE and Cambridge, so we do not list it as an IB option. We also found no IB campus on the Manglaur to Roorkee stretch, despite IIT Roorkee and the cantonment there.",
        "Distance matters less for the syllabus than it does for the commute. Cambridge sets one paper worldwide, and the IB moderates to a single global standard, so what a student needs is someone who has recently taught or marked that exact course. Where the tutor lives, and whether a school down the road teaches the course, has no bearing on that.",
      ],
      table: {
        caption: "Where the IB and Cambridge IGCSE are taught near Manglaur",
        columns: ["School", "Place", "Curriculum named by the school or its listing"],
        rows: [
          ["The Doon School", "Dehradun", "IGCSE at Class 10, then IB Diploma or ISC; boys only"],
          ["Unison World School", "Dehradun", "ICSE, ISC, IGCSE and A and AS Levels"],
          ["Cambrian Hall School", "Dehradun", "ICSE and IGCSE"],
          ["Woodstock School", "Landour, Mussoorie", "IB MYP and Diploma; co-educational, boarding from Grade 6"],
        ],
      },
      bullets: [
        "Neither Manglaur nor Roorkee has a confirmed IB or Cambridge school",
        "Dehradun, roughly 80 km away, has the nearest IGCSE and IB Diploma options",
        "SelaQui left the IB in 2013, so it is not listed as an IB school",
      ],
    },
    {
      heading: "Uttarakhand Board, CBSE, ICSE, IB or IGCSE: which fits a student from Manglaur?",
      paragraphs: [
        "It depends on where the student is heading, not on which board sounds grander. The Uttarakhand Board and CBSE suit a student aiming at Indian entrance exams from a local school, ICSE suits one who enjoys English and written work, and the IB or IGCSE suit a student who expects to study abroad or who has a place at a school that teaches them. The real differences lie in marking, language and coursework.",
        "Marking comes first. Class 10 and 12 board papers reward a tidy, expected answer, while IB and Cambridge papers reward the student who can use an idea in a new setting and show the reasoning. A Manglaur student who has practised JEE-type problems is fast, but speed alone scores poorly on a six-mark question that asks for a justification in words.",
        "Medium is the second difference. Many students in the district study in Hindi or switch between Hindi and English, whereas IB and Cambridge papers are in English throughout, command words included. Early help with paragraph structure and scientific vocabulary in English often matters more than extra content.",
        "Coursework is the third. The IB's internal assessments and some IGCSE coursework are planned, drafted and marked against published criteria, a new rhythm for students used to one annual exam. A few months of preparation before a move at Class 9 or Class 11 makes the first term far easier.",
      ],
      table: {
        caption: "What differs between the boards Manglaur families choose from",
        columns: ["What differs", "Uttarakhand Board and CBSE", "ICSE", "IB and IGCSE"],
        rows: [
          ["Medium of study", "Hindi or English", "English throughout", "English, with Hindi as a separate language course"],
          ["What earns marks", "Annual board exams, rewarding recall and method", "Board exams with long written answers", "Applying ideas in new settings; IB adds internal assessment"],
          ["Share of coursework", "Small", "Practicals and projects", "Roughly a fifth to a third in most IB subjects; some IGCSE subjects"],
          ["Route onward in India", "NEET, JEE, CUET-UG", "NEET, JEE, CUET-UG", "An AIU equivalence certificate, then the same entrance exams"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a student in Manglaur?",
      paragraphs: [
        "It depends on four things, and the town you live in is not one of them. Those four are the programme, the subject and level, the length of each lesson, and how hard that tutor's exact experience is to find. IB Gram publishes no price list; you are given the figure in writing before booking, and for IB and IGCSE tutors in Manglaur there is no travel charge, because nobody travels.",
        "Two tutors in the same subject can differ in price because of what they have taught recently: someone who taught IB Physics HL this year is harder to find than someone covering IGCSE Core Mathematics. A 90-minute session that includes live marking of a full past paper is also a different product from a 45-minute concept lesson, so compare what a quote covers.",
        "Set the quote against the realistic alternatives. Daily travel to Roorkee for coaching costs hours each week, and boarding in Dehradun or Mussoorie is a large annual commitment. Online tuition often works well as a supplement to a school place or as preparation before a move, not as a substitute for either.",
        "Budget for the basics: a reliable connection, a headset and a phone or tablet to show handwritten working. Power cuts and heavy rain can interrupt lessons, so a charged phone with a data plan is a useful backup. Lessons can be timed around school exams or a family trip.",
      ],
    },
    {
      heading: "Is an online IB or IGCSE tutor better than Roorkee coaching, a local teacher or studying alone?",
      paragraphs: [
        "For these syllabuses, yes, because only an online tutor matched to the syllabus is built around IB or IGCSE content. Coaching around Roorkee is organised around JEE, NEET and board exams, neighbourhood teachers mostly teach the Uttarakhand Board and CBSE, and self-study works for practice but not for marked coursework. The table sets the four side by side.",
        "Roorkee is home to IIT Roorkee, and coaching for JEE and NEET is easy to find around it, some of it excellent. None of it is arranged around IB Physics HL or IGCSE 0625, and a large class cannot mark a Scientific Investigation line by line. Coaching can still build the general base, provided the timetable leaves room for IB or IGCSE lessons as well.",
        "A local teacher who is excellent with Class 10 Science may never have taught the IGCSE 0620 syllabus, where the practical paper and the wording of command words matter as much as the chemistry. One question settles most doubts about any tutor: has this person taught my child's exact course this year? An online search lets you ask it of tutors across India.",
        "Free past papers and mark schemes exist for both systems, and diligent students use them well. The missing piece is an experienced reader for the Exploration, the investigation or the oral, someone to say where the argument is weak. That is what a tutor supplies, without writing the work.",
      ],
      table: {
        caption: "Choosing between four kinds of help near Manglaur",
        columns: ["Choice", "Matches the syllabus?", "How it runs", "Where it falls short"],
        rows: [
          ["Online tutor matched by syllabus", "Yes, chosen for the exact course and level", "Live one-to-one video lesson at home", "Needs a steady connection and a fixed weekly hour"],
          ["Coaching around Roorkee", "No; built for JEE, NEET and board exams", "Batches, often large", "Nothing for IB Higher Level or IGCSE papers"],
          ["A neighbourhood teacher", "Sometimes, often not", "One student, taught locally", "Recent experience of the current syllabus is rare"],
          ["Self-study with past papers", "Only as far as published papers go", "Alone, at your own pace", "Coursework and long answers go unchecked"],
        ],
      },
    },
    {
      heading: "When do exams, the Kanwar Yatra and the monsoon collide with study time around Manglaur?",
      paragraphs: [
        "More often than a timetable suggests. In Sawan, from July into August, the Kanwar (Kavad) Mela sends pilgrims along the Delhi-Haridwar highway that runs through Manglaur and Roorkee, the southwest monsoon arrives in mid-June and runs to September, and winter brings cold mornings and fog. IB and Cambridge exams sit across all of this, so good planning moves lessons to the quiet weeks.",
        "The Kavad Mela is among Haridwar district's major festivals, and its pilgrims carry Ganga water home along the same highway. Expect diversions and slow traffic, and in some years altered school timings. Online lessons avoid the roads altogether, but we keep slots flexible and use those weeks for lighter revision, not new topics.",
        "Roorkee, 10 km away, receives about 770 mm of rain a year, most of it in the southwest monsoon from mid-June to September, so the first term after the summer break is often a wet one. Heavy rain can interrupt power and mobile data, and a charged phone hotspot is a sensible backup. Summers on the Haridwar plains are hot, and early-morning blocks suit that season.",
        "On the exam calendar, IB Diploma candidates sit in May and hear in early July. Cambridge IGCSE has a main May-June session and a second in October and November, plus a limited February-March series for some syllabuses in India, while Edexcel offers a January window for some subjects. Uttarakhand Board exams run in March and CBSE in February and March, so siblings on different boards need different weeks.",
      ],
      table: {
        caption: "A year around Manglaur, and how we plan lessons within it",
        columns: ["Window", "What is going on", "How we plan"],
        rows: [
          ["December to January", "Cold mornings and fog; winter break; IB and IGCSE mocks", "Afternoon or evening slots; timed mock papers"],
          ["February to March", "CBSE and Uttarakhand Board exams; Cambridge's limited February-March series", "Siblings' exam weeks protected; final-revision plans"],
          ["May", "IB Diploma exams and the Cambridge and Edexcel summer series; heat", "Early-morning blocks; timed past papers"],
          ["Mid-June to September", "Southwest monsoon; Kanwar Yatra in Sawan; IB results in early July", "Flexible slots; lighter weeks during Kanwar diversions"],
          ["October to November", "Cambridge autumn series; festival season", "Focused revision planned around holidays"],
        ],
      },
    },
    {
      heading: "Which exams and universities follow school for IB and IGCSE students from Manglaur?",
      paragraphs: [
        "In India the first step is an equivalence certificate from the Association of Indian Universities for the IB or IGCSE-based qualification, after which CUET-UG opens central and many other universities, JEE Main and Advanced lead to engineering, and NEET to medicine. Overseas applications rest on predicted grades in the right subjects and levels. Decide which matters at Class 10 or 11, because subject choices follow from it.",
        "IIT Roorkee is about 10 km away and shapes how families here think about engineering. AIIMS Rishikesh and Uttarakhand's medical colleges sit under NEET. Delhi, 175 km away, is the usual destination for university study, admitting through CUET-UG, while Haridwar district has Gurukul Kangri University and Dev Sanskriti Vishwavidyalaya, and Dehradun has private and state universities.",
        "Eligibility for JEE and NEET depends on the subjects studied and the marks earned, and the conditions change by year. A student aiming at engineering generally needs Physics, Chemistry and Mathematics, and one aiming at medicine needs Physics, Chemistry and Biology. Both should read the current information bulletin a year ahead and check how the counselling body treats IB and Cambridge results.",
        "Abroad, British universities make offers against predicted IB points with named Higher Level subjects, American colleges weigh predicted grades with essays and, at some, SAT or ACT results, and Canadian and Australian ones turn IB points into their own scales. A tutor here works on subject depth and exam technique; admissions counselling is a separate job we do not do.",
      ],
    },
    {
      heading: "Subject choices that matter most: IB Maths, the sciences and IGCSE tiers",
      paragraphs: [
        "Students from JEE-minded households usually pick Analysis and Approaches, and HL if engineering is the aim, because it fits the calculus and algebra they already drill. Applications and Interpretation suits economics, psychology, business or medicine pathways that lean on statistics and modelling. A fast JEE-style problem-solver still needs practice on Paper 3's open questions and on showing each line of reasoning.",
        "The Exploration is a short independent study, and a topic with a local root is easier to sustain: the geometry of the canal works at Roorkee, monsoon rainfall records, or the pattern of daily traffic on the highway. A tutor can talk through ideas and comment on drafts, but the student has to write the piece.",
        "Entrance preparation gives a strong content base in Physics and Chemistry, but it trains recognition of question types. The IB Scientific Investigation and its data questions ask the student to design, justify and evaluate, which is a different muscle. Choose a variable that school or home equipment can measure, and run a pilot before committing.",
        "NEET-minded students know NCERT Biology closely, yet IB Biology rewards command-term precision and data analysis more than recall. A student aiming at medicine should keep Physics, Chemistry and Biology all in the subject choice and check the level each course expects.",
        "On the IGCSE side, Extended tiers in Mathematics and the sciences keep every later door ajar, because Core limits the top grade available. Additional Mathematics (0606) rewards solid algebra. Edexcel's Mathematics A (4MA1) phrases questions differently from Cambridge, which is why its own past papers matter, and tier entries are settled with the school before its deadline.",
      ],
      bullets: [
        "Analysis and Approaches for calculus and proof, Applications and Interpretation for data and modelling",
        "Begin the Exploration early, around a question the student actually finds interesting",
        "Keep Physics, Chemistry and Biology in the choice if NEET is on the horizon",
        "Extended tiers whenever a STEM route is even possible",
      ],
    },
  ],

  tutorsIntro:
    "The tutors proposed to Manglaur families are based across India, and every class happens live on screen. A name reaches you only after we have checked that the person has taught your child's precise course, level and exam series in the recent past; that record counts for more than a short commute ever could.",

  process: [
    { title: "Send a short note", description: "Share the programme or board, subject, level, current grade and the hours your household can protect." },
    { title: "Get matched", description: "You hear back with one or two tutors and a line on why each suits that exact course." },
    { title: "Sit a trial lesson", description: "A live online session on a real topic from the syllabus, free and without obligation." },
    { title: "Agree a plan", description: "The tutor lays out month one and how progress will be shared; you approve it or change it." },
    { title: "Keep a steady rhythm", description: "A weekly slot with a written note each time, progress shared with you and a fresh tutor if it is not working." },
  ],

  whyPoints: [
    { title: "Syllabus first", description: "A tutor is chosen for the exact IB subject and level or the Cambridge or Edexcel code, not for a broad claim to cover international boards." },
    { title: "Straight about what is local", description: "We say plainly that no IB or IGCSE school is confirmed in Manglaur, that Manglaur is not Mangaluru, and that tutors do not visit homes here." },
    { title: "See before you pay", description: "A free trial on real course content lets your child judge the tutor, and lets you judge the result." },
    { title: "Coaching, not ghost-writing", description: "Feedback on Internal Assessments, coursework and the Extended Essay is welcome; writing any of it is not offered." },
    { title: "Notes you can read", description: "Every session ends with a short written summary, and progress is shared with you along the way." },
    { title: "Room to change", description: "No tie to any school or board, and a straightforward switch if the match is not working." },
  ],

  faqs: [
    { question: "Is Manglaur the same as Mangalore or Mangaluru?", answer: "No. This page covers Manglaur in Haridwar district, Uttarakhand, on the Delhi-Haridwar highway. Mangaluru, also spelled Mangalore, is a coastal city in Karnataka and has a separate page of its own. The two names look alike and nothing else matches, so make sure you are reading the page for the place where your child actually lives." },
    { question: "How do I find an IB or IGCSE tutor in Manglaur?", answer: "Book one online, since neither syllabus is taught by any school or coaching class in Manglaur. Message us the programme or board, subject, level, current grade and preferred hours, and we suggest tutors who have recently taught precisely that course. A free first lesson follows. With IB and IGCSE tutors in Manglaur, course and level decide the match and distance plays no part." },
    { question: "Will a tutor come to our home in Manglaur?", answer: "No. Nobody from IB Gram visits homes in Manglaur; in-person home tuition is offered only in Gurugram and parts of Delhi NCR. Your child gets live online private tuition at home instead: a one-to-one video lesson with a shared whiteboard, taught by a tutor picked from across India." },
    { question: "Is there an IB or IGCSE school in Manglaur or Roorkee?", answer: "We could not confirm one in either town. The closest confirmed schools are in Dehradun, roughly 80 km away, where The Doon School, Unison World School and Cambrian Hall School are listed for IGCSE or the IB, and in Mussoorie, where Woodstock School teaches the IB. Phone a school before trusting any directory entry, because programmes change." },
    { question: "How much does IB or IGCSE tuition cost in Manglaur?", answer: "The amount varies with programme, subject, level and lesson length, and you are quoted it in writing before any booking. Higher Level sciences and HL Mathematics cost more than IGCSE Core subjects because fewer tutors have taught them lately. An address in Manglaur adds nothing, since no one travels, and there is no published price list." },
    { question: "Can IB or IGCSE lessons run alongside JEE or NEET coaching?", answer: "Yes, if the week is planned realistically. Many students around Roorkee juggle coaching and school, so we settle on a modest fixed load and keep lessons off coaching-heavy days. The Physics, Chemistry, Biology and Mathematics overlap helps, although command-word technique differs, and the tutor keeps the two styles of preparation apart." },
    { question: "Will the tutor write my child's IA, Extended Essay or coursework?", answer: "No, writing or rewriting assessed work is something tutors do not do. They can help a student settle on a workable research question, explain what a criterion rewards, plan data collection and react to drafts the student wrote. Both the IB and Cambridge treat work that is not the candidate's own as malpractice, so this line protects your child." },
    { question: "My child boards in Dehradun or Mussoorie. Can lessons fit the holidays?", answer: "Yes. Lessons can fill the school holidays or, where the boarding school permits, a fixed weekend or evening slot in term. The tutor is matched to the course that school teaches, and the session notes smooth the return to school. Send the term dates and internal exam weeks, and we build the plan around them." },
    { question: "Which IB and IGCSE subjects can my child study with you?", answer: "Most of the usual choices. For the IB that includes Mathematics AA and AI, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English A, Geography, Hindi and TOK; for IGCSE it includes Mathematics, Additional Mathematics, the sciences, Geography, Computer Science and Hindi. Name the exact course and level and we confirm a suitable tutor before the trial." },
    { question: "My child studied in Hindi medium. Is that a problem for an English curriculum?", answer: "It is a bridge rather than a barrier. Lessons run in English, because IB and Cambridge papers and command words are in English, but the tutor can slow down, rephrase and build subject vocabulary step by step. A term of extended writing practice usually closes most of the gap, and Hindi can stay on the timetable as a language course." },
    { question: "What happens if the monsoon or a Kanwar diversion disrupts a lesson?", answer: "Tell your tutor as early as you can, and the lesson can normally be moved. An online lesson is unaffected by highway diversions, but heavy rain can cut power or data, so keep a phone hotspot charged. Written notes and shared documents from earlier sessions let a student carry on studying meanwhile." },
    { question: "Can tutoring promise a particular IB or IGCSE grade?", answer: "No, and a tutor who promises one is overreaching. Grades depend on the student's own work, the school's teaching, the paper and the marking. What a tutor can do is find gaps, teach exam technique, mark practice against the published scheme and give honest feedback, which improves the odds. IB Gram promises no result and no admission." },
    { question: "When should a Manglaur student begin IB or IGCSE tuition?", answer: "As close to the start of the course as possible: Grade 9 for IGCSE and Class 11 for the Diploma, so weak foundations are mended before internal exams and predicted grades count. For a move to a Dehradun or Mussoorie school, begin two to three terms earlier. Starting late still helps, but the plan narrows to the highest-mark topics." },
    { question: "How does the free trial lesson work, and what if the fit is wrong?", answer: "The trial is an actual lesson on an actual topic from your child's course, taken live online with the tutor we propose, at no charge. The tutor then shares a short written note and you decide whether to go on. If the fit is wrong, say so and we introduce someone else." },
    { question: "Is IB Gram linked to any school, exam board or the IB itself?", answer: "No. IB Gram is an independent tutoring service, unconnected with the International Baccalaureate, Cambridge, Pearson or any school on this page. Schools are named only to show where these syllabuses are taught near Manglaur. Tutors teach and coach; they never represent a school or a board." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How IB Gram serves families in Indian cities and towns." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The one place home visits are offered: Gurugram and parts of Delhi NCR." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel subjects, tiers and exam series at a glance." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, internal assessments, TOK and the Extended Essay explained." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches set beside Applications and Interpretation." },
    { label: "Test preparation", href: "/admissions/test-prep/", description: "Help with the entrance and admissions tests that follow school." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and book a free trial lesson." },
    { label: "IB and IGCSE tutoring in Roorkee", href: "/roorkee/", description: "The city 10 km away, home to IIT Roorkee." },
    { label: "IB and IGCSE tutoring in Haridwar", href: "/haridwar/", description: "The district headquarters, with its own festival calendar." },
    { label: "IB and IGCSE tutoring in Dehradun", href: "/dehradun/", description: "The nearest city with IGCSE and IB schools." },
    { label: "IB and IGCSE tutoring in Mangaluru", href: "/mangaluru/", description: "For families looking for Mangalore in Karnataka, not Manglaur in Uttarakhand." },
  ],

  closingHeading: "Arrange a free first lesson for your Manglaur student",
  closingBody:
    "Tell us the programme or board, the subject and level, where your child stands today and which hours suit your household. A matched tutor and a free online trial slot come back from us. Reach out at support@ibgram.com or on WhatsApp at +91 7439 368 115, and mention IB and IGCSE tutors in Manglaur, Uttarakhand, so we know which town you mean.",
};
