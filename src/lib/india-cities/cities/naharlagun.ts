import type { CitySeoPage } from "../types";

/**
 * Naharlagun: no school in Naharlagun or neighbouring Itanagar could be confirmed as an IB World
 * School or a Cambridge / Edexcel centre (the local schools found are CBSE-affiliated), so
 * stripSchools is empty. The clusters name Guwahati, Kolkata and Delhi NCR schools already checked on
 * the neighbouring Guwahati, Tezpur, North Lakhimpur, Patna and Jhansi pages, and say plainly that
 * local choice is limited. The copy is deliberately non-political: geography, weather, schools,
 * transport and festivals only.
 */
export const naharlagun: CitySeoPage = {
  slug: "naharlagun",
  countryName: "Naharlagun",
  countryNameLong: "Naharlagun, Arunachal Pradesh",
  demonym: "Naharlagun",
  flagCode: "in",
  countryCode: "IN",
  region: "Arunachal Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late afternoons and evenings after school, plus weekend mornings while the early sun keeps students fresh, with gaps for heavy rain and festival weeks",
  lastUpdated: "2026-09-21",
  state: "Arunachal Pradesh",
  stateCode: "IN-AR",
  geo: { latitude: 27.1031, longitude: 93.7008 },
  wikipedia: "https://en.wikipedia.org/wiki/Naharlagun",
  alternateNames: ["Naharlagun Itanagar", "Naharlagun Arunachal Pradesh", "Nahar Lagun", "Itanagar twin town", "Papum Pare Naharlagun"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Naharlagun | Online Home Tuition, Itanagar",
  metaDescription:
    "IB and IGCSE tutors for Naharlagun and Itanagar students: live one-to-one lessons from home over video, early-sunrise-friendly timings, notes and a free trial.",
  h1: "Online Home Tuition for IB and IGCSE Students in Naharlagun, Arunachal Pradesh",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR NAHARLAGUN AND ITANAGAR FAMILIES",
  heroSubtitle:
    "Online home tuition for IB and IGCSE students in Naharlagun, the railhead town beside Itanagar: a live private lesson on a laptop at home, a tutor matched to your child's board, and nothing recorded. The nearest confirmed international schools are in Guwahati, about 380 km away by road, or further off in Kolkata and Delhi NCR, so help with an international syllabus has to travel by screen. Tell us the board and subject, and a tutor is chosen for you, with the first lesson free.",
  primaryKeyword: "IB and IGCSE tutors in Naharlagun",
  imageAltText: "Naharlagun student in Arunachal Pradesh working through an IB Physics problem on a live video call with a tutor",
  secondaryKeywords: [
    "IB tutor in Naharlagun",
    "IGCSE tutor in Naharlagun",
    "IB home tuition Naharlagun",
    "IGCSE home tuition Naharlagun",
    "IB private tuition Naharlagun",
    "IB Maths tutor Naharlagun",
    "IGCSE Maths tutor Naharlagun",
    "IB Physics tutor Naharlagun",
    "IB Chemistry tutor Naharlagun",
    "IB Biology tutor Naharlagun",
    "IB DP tutor Naharlagun",
    "IB MYP tutor Naharlagun",
    "IB PYP tutor Naharlagun",
    "IGCSE online tuition Naharlagun",
    "IB tutor Itanagar",
    "IGCSE tutor Itanagar",
    "IB tuition Nirjuli",
    "IB tuition Doimukh",
    "IB online classes Arunachal Pradesh",
  ],

  heroTrustPoints: [
    "One tutor and one student per lesson, live on video and never recorded",
    "Tutors with classroom experience of the PYP, MYP and Diploma, and of Cambridge and Edexcel IGCSE syllabuses",
    "Lesson times that respect an early-sunrise day, heavy monsoon rain and festival weeks",
    "First lesson free, then a short written note after each class",
    "English explanations first, with Hindi available for a town where many home languages meet",
  ],
  heroStats: [
    { value: "IST", label: "Same clock as your tutor" },
    { value: "Class 1-12", label: "Primary years to Diploma" },
    { value: "Trial lesson", label: "Free, before any fee" },
    { value: "Two boards", label: "IB and IGCSE side by side" },
  ],

  intro: {
    heading: "Online IB and IGCSE tuition for Naharlagun, the railhead beside Itanagar",
    paragraphs: [
      "Naharlagun is the railhead twin of Itanagar, about 15 km away, and the first major rail station in Arunachal Pradesh. It had about 36,000 residents at the 2011 census, and the languages recorded there show how many communities share it: Nyishi is the largest mother tongue, followed by Bengali, Adi, Hindi, Apatani, Assamese, Nepali and Bhojpuri. Many children here attend CBSE schools, among them Kendriya Vidyalayas, mission schools and private schools, and the college road leads to NERIST at Nirjuli, Rajiv Gandhi University at Rono Hills, the medical institute in town, or universities in Guwahati and beyond. A few families want an international syllabus instead, for a child who may study abroad or move with a parent's posting.",
      "IB and IGCSE tutors in Naharlagun have no local base, and we could not confirm an IB or Cambridge school in either twin town. The nearest confirmed options are in Guwahati, reachable by train from Naharlagun itself, and in Kolkata and Delhi NCR for boarders. Our answer is to bring the teacher to the screen: a private, live lesson with a specialist based in another part of India, week after week, followed by a written note on what was covered.",
      "This page covers the schools within reach, how the boards compare, how a fair quote is built, how the monsoon, the early sunrise and the festival calendar shape the year, where students go next and how the subject lessons work. IB Gram works independently of the IB, of Cambridge, of Pearson and of every school mentioned. Our tutors teach and coach; internal assessments, Extended Essays, TOK essays and coursework are always the student's own writing.",
    ],
  },

  programmesIntro:
    "Few Naharlagun families meet the IB at home, so most begin tutoring when a move or a boarding place is already planned. The notes below show what help looks like at each stage.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, around 6 to 11 years",
      description:
        "Children learn through shared questions and finish with a group Exhibition in the last year. Tutoring is gentle: short reading and number sessions, plus practice in saying what you think and why.",
      countryNote:
        "No PYP school is known in either twin town, so most children meet it after a move to Guwahati, Kolkata or Delhi NCR. A tutor can ease the step from a CBSE classroom's routines to open-ended projects.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, around 11 to 16 years",
      description:
        "Five years of units built on key concepts, marked by criteria and finishing with a Personal Project. Lessons turn each criterion into a checklist a child can run against their own work.",
      countryNote:
        "CBSE students are used to textbook chapters and board-style questions. The MYP rewards planning your own answer, and one-to-one video lessons give space to practise that without rushing.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, around 16 to 19 years",
      description:
        "The Diploma combines six subjects with an essay of up to 4,000 words, a course on how we know what we know, and a record of creative, active and service work. Tutors coach for the exam papers and explain how internal assessments are graded; the writing and the reflections are the student's own.",
      countryNote:
        "A Naharlagun student on the Diploma is usually boarding in Guwahati or further away, or studying online. Holidays at home, when school support stops, are when the tutor matters most.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, around 16 to 19 years",
      description:
        "Two or three Diploma courses run alongside a career-related study and a reflective project. We cover the academic courses within it.",
      countryNote:
        "CP is rare in the north-east. Where a student is on it, the school's course list tells us what is needed, and we look for a tutor with those exact papers behind them.",
    },
  ],

  subjectsIntro:
    "Each tutor is chosen for one course at one level. Students here grow up among several languages, so we also look for teachers who can explain the same idea two or three ways.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "Higher or Standard", description: "Calculus, sequences and proof for students who like to know why a method works, with exam time pressure introduced gradually." },
    { name: "Mathematics: Applications and Interpretation", levels: "Higher or Standard", description: "Real-data statistics, probability and modelling for students bound for commerce, design or the social sciences." },
    { name: "Physics", levels: "Higher or Standard", description: "Mechanics, thermal ideas and waves before fields and quantum physics, taught with the practical skills the internal assessment draws on." },
    { name: "Chemistry", levels: "Higher or Standard", description: "Particle ideas, bonding and energy changes, then organic routes and equilibrium, with calculation practice every week." },
    { name: "Biology", levels: "Higher or Standard", description: "Cells, genetics, physiology and ecology, where the forests of the Eastern Himalayas offer lively examples for the ecology unit." },
    { name: "Environmental Systems and Societies", levels: "Standard only", description: "Systems thinking applied to rainfall, forests and rivers, with case studies from a high-rainfall hill region." },
    { name: "Economics", levels: "Higher or Standard", description: "Demand and supply, growth and trade, with hill-economy cases such as horticulture and tourism to hang the theory on." },
    { name: "Business Management", levels: "Higher or Standard", description: "Reading a case closely, using the right ratio or strategy tool, and tying every point to the firm in the question." },
    { name: "Computer Science", levels: "Higher or Standard", description: "Algorithms and data structures worked by hand, then programmed, using the pseudocode the papers expect." },
    { name: "Geography", levels: "Higher or Standard", description: "Rivers, hazards and population, where monsoon landslides and river behaviour give real material for the hazards unit." },
    { name: "English A: Language and Literature", levels: "Higher or Standard", description: "Close reading of unseen texts, comparing works in an essay, and preparing for the oral, each as its own skill." },
    { name: "Hindi B", levels: "Higher or Standard", description: "Reading, writing and speaking in a language that many communities in town already share." },
    { name: "Psychology", levels: "Higher or Standard", description: "Landmark studies and how to evaluate them, plus the shape of a timed essay." },
    { name: "Theory of Knowledge", levels: "Core", description: "Talk-based practice with knowledge questions and the exhibition; the essay itself is left to the student." },
  ],

  igcseSubjectsIntro:
    "We assign Cambridge and Pearson Edexcel tutors separately, because paper layout, tiers and command words differ between the boards.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Two tiers", description: "Arithmetic through trigonometry and statistics, with timed papers from your child's own board showing which tier fits." },
    { name: "Physics", levels: "Two tiers", description: "Motion, electricity, heat and waves, plus questions that test practical skills." },
    { name: "Chemistry", levels: "Two tiers", description: "Atoms, reactions, rates and organic basics, with a little calculation practice at every lesson." },
    { name: "Biology", levels: "Two tiers", description: "Life processes, genetics and ecosystems, and how to build a full-mark long answer." },
    { name: "Combined and Co-ordinated Sciences", levels: "Two tiers", description: "For schools on the double-award route." },
    { name: "Environmental Management", levels: "Single tier", description: "Water, land, forests and hazards, a close fit for a hill region with heavy rain." },
    { name: "English as a Second Language", levels: "Two tiers", description: "Reading, directed writing, listening and speaking for students whose first language may be Nyishi, Adi, Bengali, Hindi or another of the town's languages." },
    { name: "Hindi as a Second Language", levels: "Two tiers", description: "Reading a passage, writing a composition and speaking with confidence." },
    { name: "Computer Science", levels: "Single tier", description: "Flowcharts, pseudocode and programming in the language the school chooses, checked line by line on paper." },
    { name: "Geography", levels: "Single tier", description: "Hazards, rivers, settlement and development, answered through fieldwork-style questions." },
    { name: "Economics and Business Studies", levels: "Single tier", description: "The key ideas of both subjects, practised through data response and brief evaluation." },
  ],

  regionsTitle: "Naharlagun, Nirjuli, Doimukh and the road to Itanagar",
  regionsIntro:
    "Naharlagun sits on the plain at the foot of the hills, with Itanagar a short drive away and the Assam plains a little further. The notes below describe how a study day tends to run in each pocket.",
  regions: [
    { name: "Naharlagun town centre and bazaar", note: "The commercial heart, close to the railway station. Traffic and noise build up in the evening, so a headset and a quiet corner help a student concentrate." },
    { name: "Railway station and Helipad Road side", note: "Sector names such as A Sector appear in school addresses along Helipad Road. The station links the town to Guwahati by the Shatabdi and Donyi Polo Express, and to Delhi by a twice-weekly service." },
    { name: "Pachim Colony", note: "A long-settled residential colony where school runs are short and evenings are quiet, which suits regular weekday lessons." },
    { name: "Nirjuli and the NERIST side", note: "Home to NERIST, whose 513-acre residential campus houses faculty and staff families and about two thousand students. Households here are used to engineering and science talk at the dinner table." },
    { name: "Doimukh and Rono Hills", note: "Rajiv Gandhi University stands on a tableland at Rono Hills, a central university reached through CUET. Academic households live in the area." },
    { name: "Banderdewa side", note: "The approach road from the Assam plains, used by buses and trucks heading to Guwahati. Heavy rain can slow this stretch." },
    { name: "Itanagar", note: "About 15 km away, with Ganga Lake, Ita Fort, larger markets and hospitals, and colleges including Don Bosco College." },
    { name: "Hollongi and the Donyi Polo Airport", note: "About 14 km south of Itanagar's centre, the airport opened in November 2022 with flights to several metros, which shortens the trip to boarding schools." },
    { name: "Hill villages above the road", note: "Settlements in the surrounding hills, where mobile coverage can be uneven and a backup connection is worth arranging before exams." },
  ],

  schoolClusters: [
    {
      city: "Naharlagun and Itanagar themselves",
      note: "Neither town appeared as an IB World School or as a listed Cambridge or Edexcel centre in the lists we checked. The local schools we found are CBSE-affiliated, among them Kendriya Vidyalayas, a mission school and several private schools, so an international curriculum means looking beyond the twin towns.",
      schools: [],
    },
    {
      city: "Nearby: Guwahati",
      note: "About 380 km away by road and on the train line from Naharlagun, Guwahati holds the closest confirmed international school. Most families would treat it as a boarding or relocation choice.",
      schools: ["International School Guwahati"],
    },
    {
      city: "Further afield: Kolkata",
      note: "Flights from the Donyi Polo Airport have linked Kolkata to Arunachal Pradesh, which makes its long-established international schools a realistic, if distant, option for boarders.",
      schools: ["The Heritage School", "Calcutta International School"],
    },
    {
      city: "Further afield: Delhi NCR",
      note: "Delhi NCR has confirmed IB campuses that take boarders, and both the Arunachal AC Superfast Express and direct flights connect Naharlagun's side of the state with Delhi.",
      schools: ["Pathways World School, Aravali", "The British School, New Delhi"],
    },
  ],
  schoolDisclaimer:
    "The schools above are named to show where international options are found relative to Naharlagun, not to recommend one. IB Gram works independently of every school listed, of the IB, of Cambridge and of Pearson, and admission rests with each school.",

  modesIntro:
    "Our tutors do not teach at students' houses in Naharlagun. Gurugram and parts of Delhi NCR are the only places where that happens, which is why every format below is delivered live over video.",
  modes: [
    {
      title: "Weekly live lessons after school",
      description: "A regular weekday slot with one tutor, timed after the school run and before the evening meal.",
      bullets: ["The same tutor each week", "A shared whiteboard and scanned past papers", "A short written note after each lesson"],
    },
    {
      title: "Weekend-morning deep dives",
      description: "Longer lessons on Saturday or Sunday morning, when an early-rising student is at their sharpest.",
      bullets: ["Double-length sessions for Higher Level topics", "Practice papers under real timing", "Breaks built in so concentration holds"],
    },
    {
      title: "Exam-window and monsoon-proof blocks",
      description: "Dense lessons before mocks and before the IB or IGCSE series, with extra slots held back for storms and outages.",
      bullets: ["Error logs that set the next lesson", "Slots held back for storms and outages", "A short recap call the day before a paper"],
    },
  ],

  tutorsIntro:
    "Tutors are based in different Indian cities but work to Indian Standard Time, the clock Naharlagun uses too. The sun rises far earlier here than in most of the country, so students are often alert well before a tutor's day begins, and weekend-morning lessons fit naturally.",

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Naharlagun or Itanagar, and where is the nearest?",
      paragraphs: [
        "Not that we could confirm. The schools we could identify in the twin towns are CBSE-affiliated, including Kendriya Vidyalayas and mission and private schools, and no IB World School or Cambridge or Edexcel centre appeared in the listings we checked. The nearest confirmed international school is in Guwahati, roughly 380 km away by road.",
        "Getting there is easier than it once was. Naharlagun is the first major railhead in Arunachal Pradesh, with the Shatabdi and Donyi Polo Express running to Guwahati and a twice-weekly Arunachal AC Superfast Express to Delhi. The Donyi Polo Airport at Hollongi, opened in November 2022, adds flights to several metros. A boarding place in Guwahati, Kolkata or Delhi NCR is therefore practical, although it remains a big decision for a family.",
        "Families who look at the IB or IGCSE from here are likely to include professionals posted to the area from other parts of India, local business households, and families with members studying or working in the metros or abroad. Their reasons differ, but the question is shared: who can teach this syllabus to my child without a move?",
        "Whatever route you take, the tutor should be chosen for the syllabus your child will sit, not for proximity. Share the board, subject and level with us and we take it from there.",
      ],
    },
    {
      heading: "CBSE, ICSE, IGCSE and the IB: how the boards compare for a Naharlagun student",
      paragraphs: [
        "CBSE dominates the schools we know of in the twin towns. A national school listing shows about 290 CBSE-affiliated schools across Arunachal Pradesh, including Kendriya Vidyalayas and mission and private schools in and around Naharlagun. ICSE and ISC schools are rare in the region.",
        "The route from CBSE runs through JEE Main, NEET-UG and CUET-UG, with NERIST and Rajiv Gandhi University on the doorstep. Teaching is mostly in English, although students come from homes where many languages are spoken.",
        "IGCSE and the IB ask for a different habit: explaining an answer in writing and choosing your own method. A student used to NCERT chapters and board-style questions often needs a few months to adjust. The table lines up the boards.",
      ],
      table: {
        caption: "The boards as a Naharlagun family meets them",
        columns: ["Board", "What the exam rewards", "Where students go next", "Tutoring near Naharlagun"],
        rows: [
          ["CBSE", "Accurate recall and syllabus coverage in board papers", "JEE Main, NEET-UG, CUET-UG, NERIST, Rajiv Gandhi University", "Plenty for board subjects"],
          ["ICSE and ISC", "A wider syllabus and more written answers", "CUET-UG and colleges elsewhere in India", "Few tutors"],
          ["Cambridge IGCSE", "Tiered papers with clear command words", "Class 11 in India, A Level or the IB", "Very few"],
          ["Pearson Edexcel IGCSE", "Tiered papers in a different layout", "Class 11 in India, A Level or the IB", "Very few"],
          ["IB Diploma", "Exams, internal assessments and a three-part core", "Degree study at home with AIU recognition, or universities overseas", "No local provision"],
        ],
      },
    },
    {
      heading: "What goes into an IB or IGCSE tutoring quote, and what should a Naharlagun parent check?",
      paragraphs: [
        "Before agreeing a quote from IB and IGCSE tutors in Naharlagun, check that it names the tutor's experience with your exact course, the lessons per week, how long the plan lasts and the rate per lesson. IB Gram publishes no price list. Every rate comes to you in writing ahead of the trial lesson, so you can weigh it calmly.",
        "Rates climb with level and scarcity. Someone who can teach Higher Level Diploma chemistry needs far more than school-textbook depth, and a rarely taught option such as Computer Science HL has few qualified teachers, so both cost more than a common IGCSE subject.",
        "Ask, too, about what is not in the rate. How are missed lessons rebooked, what does the written note after each class contain, and what happens if the tutor is not the right fit? Clear answers to those questions matter more than a small difference in price.",
        "Count the alternatives honestly. A class in Guwahati means 380 km of road or a train journey each way, and a boarding place adds fees and distance from home. Lessons at your own table carry neither, though they support a school rather than replace it.",
      ],
      bullets: [
        "Has the tutor taught your exact course and level?",
        "How many lessons a week, and for how many weeks?",
        "Is the rate in writing before the trial?",
        "How are missed lessons rebooked?",
        "What happens if the fit is wrong?",
      ],
    },
    {
      heading: "Online lessons, Guwahati classes, local tutors and self-study: a fair comparison",
      paragraphs: [
        "Four routes are realistic from Naharlagun, and they differ most in subject depth and in how far a student must travel. Distance is the deciding factor more often than fees.",
        "Guwahati is about 380 km away, so a class there is a weekend expedition, not a commute. Local tutors in Naharlagun and Itanagar are plentiful for CBSE subjects and for JEE and NEET, though few have taught IB or IGCSE papers. Self-study with past papers can work for a motivated student who already likes the subject.",
        "Plenty of families split the work: a local tutor handles school homework, and IB and IGCSE tutors in Naharlagun who teach online handle the international papers.",
      ],
      table: {
        caption: "Four routes to IB or IGCSE help from Naharlagun",
        columns: ["Route", "IB or IGCSE depth", "Travel", "Timing", "A sensible choice when"],
        rows: [
          ["Live private lessons online", "Deep, matched to board and level", "None", "After school or at weekends", "Your child follows any IB or IGCSE course"],
          ["Classes in Guwahati", "Deep, but paced for a group", "About 380 km each way", "Fixed batches", "The family is moving there"],
          ["Local tutors in Naharlagun or Itanagar", "Strong on CBSE, thin on IB", "Short", "Flexible", "Daily homework help and CBSE chapters"],
          ["Self-study with past papers", "Depends on the student", "None", "Entirely self-set", "A motivated student in a favourite subject"],
        ],
      },
    },
    {
      heading: "Monsoon rain, early sunrise, festivals and exam dates: the Naharlagun study year",
      paragraphs: [
        "A Naharlagun student follows two calendars. School sessions run on their own rhythm, while IB and IGCSE papers arrive on fixed international dates that pay no attention to local weather or festivals.",
        "IB Diploma papers are sat in May and November only, with results following in early July and early January. Cambridge IGCSE offers February-March, May-June and October-November series, while Pearson Edexcel runs January, May-June and October-November. Whichever series the school picks becomes the target date, and lessons are planned backwards from it.",
        "Rain is the defining feature. Arunachal Pradesh receives between 2,000 and 5,000 mm a year, with 70 to 80 percent of it falling between May and October, and June is the wettest month in Itanagar with more than 600 mm. Heavy rain can interrupt power and mobile signals, and landslides can slow the roads.",
        "The clock is unusual too. Indian Standard Time is set far to the west, so around midsummer the sun is up before half past four in the morning, and in midwinter it sets at about half past four in the afternoon. Festivals come from several communities: Nyokum Yullo and Losar around February and March, Bihu in April, Durga Puja and Diwali in October or November, and Christmas in December.",
      ],
      table: {
        caption: "A year of study in Naharlagun",
        columns: ["Months", "What shapes the week", "Exam or school milestone", "How lessons adjust"],
        rows: [
          ["January to March", "Cool dry weeks, Nyokum Yullo and Losar", "IGCSE February-March series, IB mocks", "Timed papers, weekend-morning deep dives"],
          ["April to May", "Bihu, early heat, first heavy showers", "IB May session", "Early slots, buffer minutes"],
          ["June to September", "The wettest months, with landslide risk on roads", "IB results in early July", "Spare slots, backup power and data"],
          ["October to November", "Durga Puja and Diwali, rain easing", "IB and IGCSE November series", "Compressed revision with rebooking room"],
          ["December", "Dry and cool, with sunset near half past four", "IB January results, then a review", "A lighter plan and next-term targets"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Naharlagun go after school?",
      paragraphs: [
        "Students head to universities in Arunachal Pradesh, in Guwahati and across India, or abroad. For Indian admission, IB Diploma holders are generally asked for an equivalence certificate from the Association of Indian Universities; CUET-UG is the usual test for central universities.",
        "Locally, NERIST at Nirjuli offers engineering and science degrees and takes students through its own entrance test and, for direct degree entry, JEE Main. Rajiv Gandhi University at Rono Hills uses CUET. The Tomo Riba Institute of Health and Medical Sciences in Naharlagun opened in 2017 with 100 MBBS seats, and medical admission anywhere in India runs through NEET-UG.",
        "Farther afield, IIT Guwahati takes JEE Advanced candidates, and Guwahati, Tezpur and Shillong have long-established universities. NIT Arunachal Pradesh adds an engineering option through JoSAA counselling. Seat rules depend on subject choices and residence, so check the current brochures before settling Class 11 subjects.",
        "Abroad, the UK, Canada, Australia and Germany are the usual destinations, and predicted grades and school references count. A tutor can help keep options open by teaching the subjects that unlock them, and we suggest deciding the final list with a school counsellor.",
      ],
      bullets: [
        "AIU equivalence for Indian degree courses",
        "CUET-UG for central and participating universities",
        "NERIST's own test, or JEE Main, for engineering",
        "NEET-UG for MBBS, including the Naharlagun medical institute",
        "UK, Canada, Australia and Germany via predicted grades",
      ],
    },
    {
      heading: "IB Mathematics and the sciences: lessons shaped for students coming from CBSE",
      paragraphs: [
        "A CBSE student arrives well prepared on content, often with strong NCERT habits and plenty of numerical practice. The IB adds something new: open questions, written justification and a graphical calculator. The first months of tutoring concentrate on that shift rather than on the syllabus itself.",
        "The two mathematics courses answer different futures. Analysis and Approaches is for the child who enjoys algebra and calculus and is drawn to engineering or pure science; Applications and Interpretation is for the one heading to commerce, design, social science or the life sciences. A tutor studies the student's work before the Class 11 choice is made.",
        "Each science has a signature skill. Physics needs units and a feel for size, Chemistry needs the mole and cleanly drawn mechanisms, and Biology needs exact definitions and careful reading of data. We train the skill for a few minutes each lesson because small habits decide grade boundaries.",
        "The internal assessment stays with the student, from picking the question to writing the final report. A tutor can explain the criteria and demonstrate the method, then steps back.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, Cambridge or Edexcel: choices to make early",
      paragraphs: [
        "Three decisions shape an IGCSE path: the board, the tier and the subject mix. The school normally chooses the board; a family can influence the tier and, sometimes, the subjects.",
        "At Cambridge, Extended papers open the whole grade range while Core papers cap the top grades, so a child who might study Mathematics or a science further should usually sit Extended. Pearson Edexcel divides Mathematics A into Foundation and Higher for a similar purpose. A student who is struggling can do better, and feel steadier, at the lower tier.",
        "The subject mix determines which doors stay open after Class 10. A balanced set pairs languages, Mathematics, the sciences and a humanities or business option, and strong mathematicians sometimes add Additional Mathematics as a bridge towards the Diploma.",
        "For Naharlagun students the commonest hurdle is extended English writing, especially for children who speak another language at home. A tutor begins with directed writing and summaries, and within a term most students notice the difference.",
      ],
    },
    {
      heading: "Can online lessons work when it rains for days or the signal drops in the hills?",
      paragraphs: [
        "Yes, with some planning. A charged laptop, a phone hotspot and a lesson slot outside the heaviest rain deal with most interruptions, and each plan keeps a few spare sessions for days when they do not.",
        "In the wettest months roads and power can fail for a day or more. The plan then pauses, restarts from the same topic, and any missed hours are rebooked within the month; lighter weeks are suggested when the forecast is poor. Wired broadband and mobile data tend to fail at different moments, so having both is ideal.",
        "Written work travels easily. The student photographs a page and sends it, and the tutor marks it on screen. A tablet or laptop is kinder to the eyes than a phone for the shared whiteboard, though a phone keeps a lesson alive when nothing else will.",
        "The early sunrise is an advantage. Students are up with the light, so a weekend-morning lesson can be sharper than a late-evening one. The written note after each class tells parents the topic, the errors and the next task.",
      ],
    },
  ],

  process: [
    { title: "Write to us", description: "Send your child's board, subject, level and exam series by WhatsApp or email; attaching the school's syllabus list speeds things up." },
    { title: "Hear back with one name", description: "You hear from us with one suggested tutor and a short profile." },
    { title: "Sit the trial", description: "A live lesson on an actual topic from the syllabus, free of charge and with nothing promised." },
    { title: "Agree the terms", description: "The rate and lesson plan arrive in writing, and you decide in your own time." },
    { title: "Settle into the week", description: "One regular slot, a note after each lesson, and an easy swap of tutor if the match is not right." },
  ],

  whyPoints: [
    { title: "Your board, your paper", description: "Tutors are assigned by board code and level, so the one teaching Higher Level Physics has taught that paper." },
    { title: "Timed for an early-sunrise day", description: "Weekend mornings and after-school slots are on offer, not only late evenings." },
    { title: "Candid about distance", description: "We say openly that no IB or Cambridge school could be confirmed nearby and show the real options." },
    { title: "Several languages welcome", description: "English comes first, and Hindi explanations are available when an idea needs another angle." },
    { title: "Hands off the writing", description: "Tutors explain and train, and the student writes every assessment, essay and report." },
    { title: "Room to say no", description: "A free trial lesson, a written rate and a tutor change at no cost if it is not working." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Naharlagun or Itanagar?", answer: "We could not confirm one. The schools we found in the twin towns are CBSE-affiliated, and neither town showed up as an IB World School or a listed Cambridge or Edexcel centre in our checks. The nearest confirmed international school is in Guwahati, around 380 km away. If your child is already enrolled in an IB or IGCSE course elsewhere, lessons can begin straight away." },
    { question: "Will a tutor come to the house in Naharlagun?", answer: "No. Tutors do not visit homes in Naharlagun, because home visits exist only in Gurugram and parts of Delhi NCR. What Naharlagun families receive is online home tuition: a private live lesson on video, with your child at home and the tutor on screen. It spares the long road to Guwahati and keeps one tutor for the whole year." },
    { question: "How do I find an IB Physics or IGCSE Biology tutor for a Naharlagun student?", answer: "To find IB and IGCSE tutors in Naharlagun for one subject, message us the board, subject, level and exam series. We come back with one tutor who has taught that exact course and offer a free trial lesson. Should the fit disappoint, we assign someone else without any charge for the change." },
    { question: "What shapes the price of IB or IGCSE tuition here?", answer: "Level and subject matter most, followed by how few tutors teach the course, the lessons per week and the length of the plan. No fixed prices are published; each quote reaches you in writing before the trial lesson is booked." },
    { question: "Why not rely on local home tutors in Naharlagun?", answer: "Local tutors are a sound choice for CBSE subjects, JEE and NEET, and many families use them for daily homework. Few have taught IB or IGCSE papers, which is where an online specialist helps. The two kinds of support sit comfortably together." },
    { question: "Can a CBSE student switch to IGCSE or the IB?", answer: "Yes, and many do it successfully. The subject matter often overlaps, but the question style, command words and internal assessments are new. A tutor introduces those first and then fills content gaps, ideally two or three months ahead of the switch." },
    { question: "We may move away from Arunachal Pradesh. Can the lessons follow us?", answer: "They can. Because lessons are online, the same tutor carries on from any city with a stable connection, so notes and syllabus stay continuous. Share the target school and moving date, and we plan around them." },
    { question: "Which exam sessions can you prepare us for?", answer: "We prepare students for the IB May and November sessions and for the Cambridge or Edexcel series their school selects. The school fixes the window, and we plan lessons back from it. IB results are released in early July and early January." },
    { question: "Will a tutor write the IA, Extended Essay or TOK essay?", answer: "No. Every internal assessment, Extended Essay, TOK essay and piece of coursework is the student's own writing. A tutor explains the criteria, demonstrates the method and comments on the ideas the student produces, then steps back." },
    { question: "What happens in the free trial lesson?", answer: "It is a live lesson on a genuine syllabus topic, taught by a tutor who knows the course. Nothing is charged and nothing is promised. Afterwards you receive a short note, and a written rate follows only if you would like to continue." },
    { question: "Do you teach Cambridge and Pearson Edexcel both?", answer: "We do. Since the two boards set different papers and tiers, each tutor is matched by board code as well as by subject. Let us know the board your child's school uses and the papers coming up." },
    { question: "Which IB Maths course should my child take?", answer: "Analysis and Approaches usually suits a child who likes algebra and calculus and may study engineering or pure science, while Applications and Interpretation usually suits commerce, design, social science or life-science routes. A tutor can look at your child's work and offer a view before the Class 11 choice is final." },
    { question: "Can students from Itanagar, Nirjuli, Doimukh or Banderdewa join as well?", answer: "Yes; any household with a steady connection can. Lessons are online, so nobody travels. We plan around school timings, rain spells and festival weeks, and suggest a backup mobile network for the storm season." },
    { question: "What if heavy rain or a landslide cuts the power or network?", answer: "The lesson pauses and restarts from the same point, or the hour is rebooked within the month from the spare slots every plan holds. A charged laptop and a hotspot bridge short outages, and in the wettest weeks a lighter plan is sensible." },
    { question: "Will an IB Diploma count for NERIST, Rajiv Gandhi University and national entrance tests?", answer: "Generally yes, once an equivalence certificate has been issued by the Association of Indian Universities. Rajiv Gandhi University admits through CUET, NERIST accepts JEE Main for direct degree entry, and NEET-UG governs medicine. Each sets its own rules for students from other boards, so check current brochures." },
    { question: "Does the early sunrise affect lesson timing?", answer: "Yes, and usually for the better. Many students are alert early, so weekend-morning lessons work well. In midwinter the sun sets around half past four, so weekday slots work better soon after school, while the day still feels young." },
    { question: "How do we get started?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp, saying which board, subject and level your child studies. A suggested tutor and a trial time normally come back within a day or two." },
  ],

  internalLinks: [
    { label: "Our online tutoring across India", href: "/india/", description: "A wider look at the cities and towns we teach in." },
    { label: "All IB tutoring", href: "/ib-tutors/", description: "How we approach the IB from PYP to the Diploma." },
    { label: "IGCSE help", href: "/igcse/", description: "Cambridge and Edexcel support with tutors assigned by board." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "Support for both Diploma years, subject by subject." },
    { label: "IB MYP tutoring", href: "/programmes/myp/", description: "Guidance on criteria and the Personal Project." },
    { label: "IB PYP tutoring", href: "/programmes/pyp/", description: "Short, friendly sessions for primary learners." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Analysis and Approaches or Applications and Interpretation, at either level." },
    { label: "Our tutors", href: "/tutors/", description: "A look at the teachers behind the lessons." },
    { label: "Get in touch", href: "/contact-us/", description: "Ask a question or book your free trial." },
    { label: "IB and IGCSE tutors in Guwahati", href: "/guwahati/", description: "The nearest major city, home to a confirmed international school." },
    { label: "IB and IGCSE tutors in North Lakhimpur", href: "/north-lakhimpur/", description: "The closest Assam town across the plains." },
    { label: "IB and IGCSE tutors in Tezpur", href: "/tezpur/", description: "A university town on the Brahmaputra." },
    { label: "IB and IGCSE tutors in Dibrugarh", href: "/dibrugarh/", description: "The upper Assam city linked to Naharlagun by helicopter and road." },
  ],

  closingHeading: "Begin with a free trial lesson, live from your own home in Naharlagun",
  closingBody:
    "To start with IB and IGCSE tutors in Naharlagun, send your child's board, subject and exam series to support@ibgram.com, or message +91 7439 368 115 on WhatsApp. A matched tutor and a free first lesson follow, with the rate set out in writing before you are asked to decide anything.",
};
