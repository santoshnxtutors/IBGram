import type { CitySeoPage } from "../types";

/**
 * /chaibasa/ - IB and IGCSE tutoring page for Chaibasa, headquarters of West Singhbhum district,
 * Jharkhand. Online one-to-one only (homeTuition false). No IB or Cambridge/Edexcel school in
 * Chaibasa could be confirmed, so stripSchools is empty; clusters use the Kolkata and Delhi NCR
 * boarding names verified on neighbouring city pages, plus an honest note on Jamshedpur.
 */
export const chaibasa: CitySeoPage = {
  slug: "chaibasa",
  countryName: "Chaibasa",
  countryNameLong: "Chaibasa, Jharkhand",
  demonym: "Chaibasa",
  state: "Jharkhand",
  stateCode: "IN-JH",
  flagCode: "in",
  countryCode: "IN",
  region: "Jharkhand, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We set lessons around the May and June furnace heat, the Sarhul and Mage Parab festival weeks, Durga Puja and the school hours your child actually has",
  lastUpdated: "2026-09-21",
  geo: { latitude: 22.5564, longitude: 85.8027 },
  wikipedia: "https://en.wikipedia.org/wiki/Chaibasa",
  alternateNames: ["Chaibasa West Singhbhum", "Chaibassa", "Chaibasa Kolhan"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Chaibasa | Private Online Tuition",
  metaDescription:
    "IB and IGCSE tuition for Chaibasa students in West Singhbhum: one-to-one online lessons from home, Diploma, MYP, PYP and Cambridge, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Chaibasa",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR WEST SINGHBHUM FAMILIES",
  heroSubtitle:
    "Private home tuition in Chaibasa for an international syllabus means online lessons: a live, one-to-one session on a laptop with a tutor who has taught your child's exact subject, since tutors do not come to homes here. Chaibasa is the Kolhan division headquarters in iron-ore country, sixty kilometres from Jamshedpur, and an IB or IGCSE student in West Singhbhum usually has a mining, steel, government or teaching family behind them.",
  primaryKeyword: "IB and IGCSE tutors in Chaibasa",
  imageAltText: "A Chaibasa student working through an IB Mathematics AA problem on a laptop with an online tutor, a red-soil courtyard visible outside",
  secondaryKeywords: [
    "IB tutor Chaibasa",
    "IGCSE tutor Chaibasa",
    "IB home tuition Chaibasa",
    "IGCSE home tuition Chaibasa",
    "IB private tuition Chaibasa",
    "IB Maths tutor Chaibasa",
    "IGCSE Maths tutor Chaibasa",
    "IB Physics tutor Chaibasa",
    "IB Chemistry tutor Chaibasa",
    "IB Biology tutor Chaibasa",
    "IB DP tutor Chaibasa",
    "IB MYP tutor Chaibasa",
    "IB PYP tutor Chaibasa",
    "IGCSE online tuition Chaibasa",
    "IB tutor West Singhbhum",
    "IB tutor Chakradharpur",
    "IGCSE tutor Noamundi",
    "online IB tutor Jharkhand",
    "IB and IGCSE tutors in Chaibasa",
  ],

  heroTrustPoints: [
    "Lessons are online; no tutor visits a home in Chaibasa or West Singhbhum",
    "Tutor picked for the subject, level and exam session your child follows",
    "Written note after every lesson for parents to read",
    "Free first lesson and a written rate before booking",
    "A different tutor is free of charge if the first is not right",
  ],
  heroStats: [
    { value: "Online", label: "Private, one-to-one, from home" },
    { value: "IB + IGCSE", label: "DP, MYP, PYP, Cambridge, Edexcel" },
    { value: "Free trial", label: "Try a lesson first" },
    { value: "IST", label: "Evening and weekend slots" },
  ],

  intro: {
    heading: "An international syllabus in the heart of Kolhan",
    paragraphs: [
      "Chaibasa lies on the plateau of West Singhbhum, in a region the Ho, Munda and Bhumij communities have held for centuries and where the old Manki-Munda system once governed villages. Today it is the headquarters of the district and of the Kolhan division, home to Kolhan University and Tata College, with iron-ore mines at Noamundi and the wider Saranda forest belt not far away. Hindi, Urdu and Ho are all heard on its streets.",
      "Education here runs mostly through the Jharkhand board, CBSE and a few ICSE schools, with a strong sense that a government or corporate job, or a place in a Jamshedpur or Ranchi college, is the goal. The IB and IGCSE are unusual, and the families that choose them tend to have a particular reason: a parent with a mining or steel company posting that may move, relatives abroad, or an ambition for a university outside India.",
      "We could not confirm an IB or Cambridge school in Chaibasa, so the student follows the course elsewhere or online. IB Gram provides the missing subject specialist: a tutor who has taught the same course, live on video in Indian time, with a short written note after each session and a free first lesson.",
    ],
  },

  programmesIntro:
    "Each IB programme has its own demands. Here is what we do for each one when the student lives in Chaibasa or elsewhere in West Singhbhum.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5 (ages 6 to 11)",
      description:
        "Learning built around units of inquiry. Tutors give young students brief, hands-on tasks in reading, number and explanation, avoiding worksheets that simply repeat school.",
      countryNote:
        "A PYP child in Chaibasa is uncommon and usually has come from a posting elsewhere. Online lessons give that child a consistent adult helper as the family settles into a district town.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10 (ages 11 to 16)",
      description:
        "Criteria A to D across eight subject groups, with global contexts and the Year 5 personal project. Tutors decode descriptors and show what stronger work looks like.",
      countryNote:
        "MYP students connected to Chaibasa often move between boards. Tutors spend the first weeks helping a child who is used to Jharkhand board or CBSE marks adjust to criterion-based grading.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12 (ages 16 to 19)",
      description:
        "Six subjects, TOK, the Extended Essay and CAS. Tutoring covers content and exam technique, and leaves the assessed components to the student.",
      countryNote:
        "A DP student from Chaibasa typically studies through a school in Kolkata, Ranchi or elsewhere, or through an online provider. A subject tutor on video fills gaps that distance creates.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12 (ages 16 to 19)",
      description:
        "A handful of DP courses plus a career-related study and a reflective project. Tutors support the academic courses and planning skills.",
      countryNote:
        "The CP is almost unheard of in this district, so the requests we receive concern individual DP courses within it, such as Mathematics or Business Management.",
    },
  ],

  subjectsIntro:
    "The subjects below come up most in Chaibasa enquiries. A course not listed may still be possible: write with its name and level and we will see who is free.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "Standard and Higher Level", description: "Calculus, functions and proof, the usual pairing for engineering and mining-technology ambitions." },
    { name: "Mathematics: Applications and Interpretation", levels: "Standard and Higher Level", description: "Statistics, modelling and technology, suited to commerce and life-science students." },
    { name: "Physics", levels: "Standard and Higher Level", description: "Mechanics through fields and nuclear physics, with data handling and uncertainty built in." },
    { name: "Chemistry", levels: "Standard and Higher Level", description: "Quantitative work, energetics and organic chemistry, with examples from metal extraction and steelmaking." },
    { name: "Biology", levels: "Standard and Higher Level", description: "From cell biology to ecology, using forest and river ecosystems as reference points." },
    { name: "Geography", levels: "Standard and Higher Level", description: "Resources, hazards and population, with mining regions and tribal land use as case studies." },
    { name: "Economics", levels: "Standard and Higher Level", description: "Markets, development and trade, with diagram skills and evaluation." },
    { name: "Business Management", levels: "Standard and Higher Level", description: "Operations, finance and case studies, relevant to industrial and trading families." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Forests, mining impact and water, with local examples where they help." },
    { name: "Computer Science", levels: "Standard and Higher Level", description: "Programming, systems and algorithms for the two papers." },
    { name: "History", levels: "Standard and Higher Level", description: "Source analysis and essay structure for the prescribed topics." },
    { name: "English A: Language and Literature", levels: "Standard and Higher Level", description: "Close reading, written tasks and the individual oral." },
    { name: "English B", levels: "Standard and Higher Level", description: "Language acquisition for students who use Hindi or Ho at home." },
    { name: "Hindi A and Hindi B", levels: "Standard and Higher Level", description: "Literature and language support in Hindi for students who take it as a subject." },
    { name: "Theory of Knowledge", levels: "Core", description: "Coaching on knowledge questions and the exhibition, never the essay itself." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel write their IGCSE papers differently. Lesson one starts by pinning down the syllabus code so that every practice paper matches it.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core or Extended tier", description: "Number, algebra, geometry and statistics, with extra practice on Extended problem-solving." },
    { name: "Additional Mathematics", levels: "Cambridge", description: "Calculus and functions for students heading towards the IB or A Level in mathematics." },
    { name: "Physics", levels: "Core or Extended tier", description: "Forces, energy, electricity and waves, plus practical-skills and graph questions." },
    { name: "Chemistry", levels: "Core or Extended tier", description: "Structure, reactions, rates and organic basics, with balanced equations and calculations." },
    { name: "Biology", levels: "Core or Extended tier", description: "Organisms, inheritance and ecosystems, with diagrams and long answers." },
    { name: "Geography", levels: "Both boards", description: "Physical and human themes, including resources and industry, with case studies." },
    { name: "English First Language", levels: "Both boards", description: "Composition, directed writing and summary work." },
    { name: "English as a Second Language", levels: "Cambridge", description: "Reading, writing, listening and speaking for students from Hindi-speaking or Ho-speaking homes." },
    { name: "Computer Science", levels: "Cambridge", description: "Pseudocode, logic and programming for both papers." },
    { name: "Economics", levels: "Both boards", description: "Definitions, data response and structured answers." },
    { name: "Business Studies", levels: "Cambridge", description: "Case-based questions with finance calculations." },
    { name: "Hindi as a Second Language", levels: "Cambridge", description: "Comprehension and writing support." },
  ],

  regionsTitle: "Chaibasa and West Singhbhum areas we teach",
  regionsIntro:
    "Lessons happen on a laptop, so the tutor never needs directions. Knowing the layout of the district still helps us choose slots around buses, shifts and the long summer heat.",
  regions: [
    { name: "Chaibasa town centre", note: "The main market and administrative core around the district offices. School runs finish by mid-afternoon, so weekday sessions usually start after 5 pm." },
    { name: "Tata College area", note: "The long-established college neighbourhood, home to teachers and lecturers, where quiet evening study is the norm." },
    { name: "Kolhan University area", note: "Around the university campus, with academic families and students who often look to Ranchi and Jamshedpur for further study." },
    { name: "Chaliyama", note: "The industrial area by the river, where shift-working parents prefer flexible weekend slots." },
    { name: "Jhinkpani", note: "The cement-works settlement about eighteen kilometres away, where company families have moved from other states." },
    { name: "Chakradharpur", note: "A railway town around twenty-five kilometres north, with its own school scene and families who compare options with Chaibasa." },
    { name: "Noamundi", note: "The iron-ore mining town, where company postings shape family plans and transfers are common." },
    { name: "Jagannathpur", note: "A nearby block town where school choices are narrower and internet can be uneven." },
    { name: "Manoharpur", note: "A forest-edge town with a mining connection and students who travel to Chaibasa for college." },
    { name: "Tatanagar, Jamshedpur", note: "Sixty kilometres east, where many Chaibasa families shop, work or plan boarding." },
  ],

  schoolClusters: [
    {
      city: "Chaibasa and West Singhbhum",
      note: "Our checks turned up no IB World School and no Cambridge or Edexcel centre in Chaibasa, so the list stays empty. Local schools follow the Jharkhand board, CBSE or ICSE.",
      schools: [],
    },
    {
      city: "Nearby: Jamshedpur",
      note: "The nearest large city, sixty kilometres away, is covered on our Jamshedpur page. We could not confirm an IB or Cambridge school there either, so none is listed.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The closest confirmed cluster of IB and Cambridge schools for eastern India, relevant for families considering boarding or relocation.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR boarding routes",
      note: "A farther option: boarding schools near Delhi that some Jharkhand families consider for the Diploma.",
      schools: ["Pathways World School", "GD Goenka World School"],
    },
  ],
  schoolDisclaimer:
    "IB Gram works independently and is not affiliated with the IBO, Cambridge, Pearson or any school named here, and schools are mentioned only to show the regional picture. Please check programmes and admissions with the school directly.",

  modesIntro:
    "Nobody from IB Gram visits a house in Chaibasa; in-person tuition is limited to Gurugram and parts of Delhi NCR. Families in West Singhbhum choose among three online formats.",
  modes: [
    {
      title: "Weekly one-to-one",
      description:
        "A fixed slot each week with the same tutor, for one subject, through the school year.",
      bullets: [
        "Agreed day and time, set around your child's school",
        "Shared whiteboard and screen-shared past papers",
        "A written summary after every session",
        "Pauses during Sarhul, Durga Puja or family travel",
      ],
    },
    {
      title: "Exam-season intensive",
      description:
        "Extra lessons in the weeks before mocks and the May or November exam series.",
      bullets: [
        "Timed past papers with marked feedback",
        "Mark-scheme and command-term work",
        "Weekly topic checklists",
        "Reduced again once exams end",
      ],
    },
    {
      title: "Board-switch bridge",
      description:
        "A short block for a student moving from the Jharkhand board or CBSE into an IB or IGCSE course.",
      bullets: [
        "First lesson to locate gaps",
        "Writing and vocabulary practice in English",
        "Criterion-based marking explained",
        "Smooth move to weekly lessons",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Chaibasa, and where do families look instead?",
      paragraphs: [
        "We could not confirm any IB World School or Cambridge or Edexcel centre in Chaibasa, and the same is true of the neighbouring Jamshedpur in the sources we checked. Schools in West Singhbhum follow the Jharkhand board, CBSE or ICSE, with a growing number of private English-medium options.",
        "The nearest verified cluster is in Kolkata, where The Heritage School and Calcutta International School are among the confirmed names, and some families look further to boarding near Delhi, where Pathways World School and GD Goenka World School appear on our other pages. These are big decisions, and most Chaibasa families do not make them lightly.",
        "A more common pattern is studying online from home, or attending a school that arranges part of the course remotely. The student then needs a subject specialist for the hours when no teacher is in the room.",
        "If you know of a Chaibasa school that teaches either curriculum, write to us and we will verify it before adding. Until then only confirmed names appear here.",
      ],
    },
    {
      heading: "Who chooses the IB or IGCSE in West Singhbhum, and why?",
      paragraphs: [
        "It is a small group, but a distinctive one. Some are families whose work is tied to the mines and plants of the region, with employers that move people between postings in India and sometimes abroad. A qualification that travels is worth having when a child may change school at fourteen.",
        "Others are professional families: doctors, engineers, lecturers at Kolhan University or Tata College, and government officers posted to the district headquarters. They see an international route as a way to keep doors open, especially for universities outside India.",
        "A third group are students who have already started the course elsewhere and returned, or who are following it online while staying with grandparents in Chaibasa. For them, consistency matters more than anything.",
        "We do not assume which group you belong to, and we do not make claims about any employer. Whatever the reason, the need is the same: a tutor who knows the syllabus and can meet the student at a time that works.",
      ],
      table: {
        caption: "Who asks about IB and IGCSE tuition around Chaibasa",
        columns: ["Family profile", "Typical situation", "Main need", "What we offer"],
        rows: [
          ["Mining or plant postings", "Parent may be transferred within a few years", "Continuity across schools", "A stable tutor on video whichever town the family is in"],
          ["Academic and professional households", "Children aim at universities abroad", "Strong subject grades and exam technique", "Weekly HL and SL support with past papers"],
          ["Returning or online students", "Course begun elsewhere, now studied from home", "A subject specialist and a routine", "Regular lessons and written progress notes"],
          ["Families exploring options", "Weighing boards before Class 9 or 11", "Clear information on what the switch involves", "A free trial and an honest conversation"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Chaibasa, and what sets the price?",
      paragraphs: [
        "No price is printed on this page, and a family always receives a rate in writing before booking. Two students in the same town can be quoted differently because the work behind each plan differs.",
        "The biggest factor is the level and subject. A tutor for IB Physics HL or Mathematics AA HL prepares more heavily than one for IGCSE Core English. Rare combinations, such as a language at HL, draw from a small tutor pool and are priced to match.",
        "Next is volume. An hour a week through the year suits some students, while others want three short sessions a week for the two months before an exam. The second pattern costs more in the short run but may end up costing less across the year.",
        "Last is experience with the syllabus. There is no travel cost for online lessons, and the free trial lets you judge before paying. A tutor who has guided many students through the same course will be priced differently from someone newer to it.",
      ],
      bullets: [
        "Programme, level and subject",
        "Lessons per week and length of each",
        "Tutor experience with the exact syllabus",
        "Year-long support or exam sprint",
        "How unusual the subject combination is",
      ],
    },
    {
      heading: "Is online tuition better than Jamshedpur coaching or a local tutor for a Chaibasa student?",
      paragraphs: [
        "Jamshedpur is the natural place to look for coaching, and its institutes are good at board and entrance preparation. The trouble is the route: sixty kilometres each way by road, which costs hours and is hard to combine with school.",
        "Online one-to-one lessons remove that travel and keep the subject specialist. A Chaibasa student learns at home, where a parent can be nearby, and the tutor sees their work directly on the shared screen. The constraint is connectivity and power, which we discuss in advance.",
        "A local private tutor is useful for younger children and for foundations, but may not know IB command terms or IGCSE mark schemes. Self-study suits disciplined older students who have good notes and papers, though nobody marks their written answers.",
        "The table lays out the choices. Many families combine two of them, for instance online lessons for the hardest subject and self-study for the rest.",
      ],
      table: {
        caption: "Support options for a Chaibasa IB or IGCSE student",
        columns: ["Option", "Good for", "Limitation", "Fit for IB and IGCSE"],
        rows: [
          ["Online one-to-one", "Specialist tutor, no travel, written notes", "Needs stable power and internet", "Strong for HL, SL and IGCSE depth"],
          ["Jamshedpur coaching centre", "Structure and peer group", "Long commute, syllabus may not match", "Weak unless it teaches the exact course"],
          ["Local private tutor", "Close, personal and affordable", "May not know international assessment", "Moderate for foundations"],
          ["Self-study", "Flexible and cheap", "No feedback on writing", "Good as a supplement"],
        ],
      },
    },
    {
      heading: "How do heat, Sarhul, Mage Parab and Durga Puja shape the school year in Chaibasa?",
      paragraphs: [
        "West Singhbhum has a hard summer. Temperatures climb steeply from April, and May and June can be punishing, with power cuts that make afternoon study impractical. The monsoon arrives in June or July and can cut roads for a few days, while winters are mild and pleasant.",
        "The festival calendar is distinctive. Sarhul marks the spring new year for many tribal communities, Mage Parab in January is an important Ho festival, and Karma, Diwali and Durga Puja all shape the autumn. Families travel to villages, and school days are lost.",
        "Exams sit awkwardly across this. The IB May session falls in the hottest weeks, and the November session follows Durga Puja and Diwali, so revision time is often shorter than planned. IGCSE sessions follow a similar pattern.",
        "We protect revision by planning backwards from the exam: early mocks, morning or late evening slots in the heat, and flexible make-up lessons after festivals. The table shows a sample year.",
      ],
      table: {
        caption: "A sample Chaibasa study year",
        columns: ["Months", "Academic focus", "Local factor", "What we do"],
        rows: [
          ["June to September", "New units and gap diagnosis", "Monsoon and Karma festival", "Weekly slots, reserve make-up lesson"],
          ["October to November", "Mocks and the November series", "Durga Puja and Diwali holidays", "Plan lessons before the break, short recap after"],
          ["December to January", "Internal Assessment drafts and mocks", "Mage Parab and winter holidays", "Steady weekly pace, protected study days"],
          ["February to March", "Revision and practicals", "Sarhul and mild weather", "Timed papers, topic checklists"],
          ["April to May", "Final revision and the May series", "Heat and power cuts", "Early morning or late evening sessions"],
        ],
      },
    },
    {
      heading: "Where do Chaibasa students go after the IB or IGCSE?",
      paragraphs: [
        "The IB Diploma is treated by the Association of Indian Universities as equivalent to Class 12, so Indian universities remain open. CUET-UG accepts students from all boards and is the gateway to many central universities, including those in Ranchi and beyond.",
        "For engineering and medicine, IB and IGCSE students should read the current JEE Main and NEET brochures closely. Subject combinations, equivalence certificates and marks rules can change, and a student should confirm early.",
        "Many families also look abroad. The United Kingdom, Canada, Australia, the United States and Singapore are common destinations, and IB points and IGCSE grades feed into applications alongside the school's predictions. Mining engineering and geology draw some students towards Australia and Canada.",
        "Within India, students think of Jamshedpur's institutes, Ranchi, Kolkata, Bengaluru and Delhi. Tutors do not choose a university for a student, and they do not promise a place. Their work is to raise the subject grades that keep each option open.",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences taught online to a Chaibasa student?",
      paragraphs: [
        "IB Mathematics has two courses. Analysis and Approaches concentrates on algebra, calculus and proof, and Applications and Interpretation on statistics and modelling. Each exists at SL and HL, and the choice narrows or widens later options.",
        "Students from Jharkhand board or CBSE backgrounds are usually solid at calculation. What they need is the IB habit of showing reasoning, using technology where allowed and managing time across papers. Tutors focus early lessons on method marks and on the wording of command terms.",
        "In the sciences, lessons alternate between content and exam practice. A session may work through an equilibrium problem, then a timed data question marked live. Chemistry students in a region built around ore and metal often find real-life examples helpful.",
        "Practical work is a worry at distance. Tutors coach planning, recording and evaluating using the student's own records, and they do not carry out or write the assessed Internal Assessment.",
      ],
      bullets: [
        "Mathematics AA: calculus, vectors, sequences and proof",
        "Mathematics AI: statistics, finance and modelling",
        "Physics: mechanics, waves, fields and nuclear physics",
        "Chemistry: energetics, kinetics, redox and organic chemistry",
        "Biology: genetics, physiology, ecology and data analysis",
      ],
    },
    {
      heading: "Which IGCSE tier and subjects suit a Chaibasa student?",
      paragraphs: [
        "Core papers limit the highest grade available, while Extended papers open the whole scale. A student who wants the IB Diploma or A Level later should choose Extended in Mathematics and the sciences, because those courses assume that depth.",
        "Subject choice follows the plan. A student aiming at engineering takes Mathematics, Physics and Chemistry, and Additional Mathematics if offered. One aiming at medicine adds Biology, and one interested in commerce takes Economics, Business Studies and Accounting. Geography can suit students interested in resources and environment.",
        "Cambridge and Edexcel cover similar topics in different layouts. We check the code at the first lesson and practise on that board's past papers only.",
        "A standard IGCSE course runs two years, and one weekly lesson in each of two or three subjects is typical, with extra sessions before the exams. A student who starts late can use the board-switch bridge block.",
      ],
    },
  ],

  process: [
    { title: "Share your child's course", description: "Send the class, board, programme, subject, level and exam session on WhatsApp or by email." },
    { title: "Look at a matched tutor", description: "We send the profile of a tutor who has taught that course, with slots that fit your school's timing." },
    { title: "Take a free lesson", description: "A live video session on a genuine topic from your child's syllabus, free of charge." },
    { title: "Get the rate in writing", description: "Price, length and schedule arrive in writing before any paid lesson." },
    { title: "Start weekly lessons", description: "A short note follows each session, and you can switch tutor whenever you wish." },
  ],

  whyPoints: [
    { title: "Matched to the exact course", description: "Your child meets a tutor who has taught that subject and level, rather than a general maths or science teacher." },
    { title: "Lessons on Indian time", description: "Tutors are in India and teach in IST, so sessions sit comfortably after school." },
    { title: "Honest about the format", description: "We say clearly that no tutor visits homes in Chaibasa, and that in-person sessions exist only in Gurugram and parts of Delhi NCR." },
    { title: "Coaching, not authorship", description: "Tutors teach and give feedback, but never write an IA, Extended Essay, TOK essay or coursework." },
    { title: "Updates for busy parents", description: "A short written note after each lesson suits parents on shifts or posted elsewhere." },
    { title: "Easy to begin", description: "A free first lesson, a written rate and a tutor swap on request keep the risk small." },
  ],

  tutorsIntro:
    "These tutors teach online from elsewhere in India, on IST. Each profile lists the subjects and levels taught, so a Chaibasa family can see who fits the course.",

  faqs: [
    {
      question: "Can we get IB and IGCSE home tuition in Chaibasa?",
      answer: "Yes, delivered online. A Chaibasa student sits at home with a laptop while an IB Gram tutor teaches live, one to one. No tutor travels to Chaibasa, because visits exist only in Gurugram and parts of Delhi NCR. We pair the student with someone who has taught the specific subject and level, and the opening lesson is free. With no confirmed international school in the district, this is the workable option.",
    },
    {
      question: "Is there an IB or Cambridge school in Chaibasa or West Singhbhum?",
      answer: "We could not confirm one. Directories show no IB World School or Cambridge or Edexcel centre in Chaibasa, and we could not confirm one in Jamshedpur either. The nearest verified schools on this page are in Kolkata, with Delhi NCR boarding routes beyond. If you know a local school that teaches either curriculum, send us its name and we will check it.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Chaibasa?",
      answer: "We quote in writing rather than publish a price list. Four things set the figure: the programme and level, the subject, the number of lessons each week, and how experienced the tutor is with your syllabus. No travel cost enters it, since everything is online. Send the subject and level on WhatsApp for a written quote; the first lesson is free, so you can judge value first.",
    },
    {
      question: "Do you have tutors who can work around a parent's mining or plant shifts?",
      answer: "Yes, within reason. Tutors teach in Indian Standard Time, mostly on evenings and weekends, and we can set slots to suit a parent's shift pattern so they can sit in. Tell us which days are difficult and we will propose fixed times. If a posting or transfer moves the family, the same tutor can continue over video from the new town.",
    },
    {
      question: "My child studies the Jharkhand board. Can they move to the IB or IGCSE?",
      answer: "Yes, with a bridge. A student from the state board is usually strong at calculation and recall but less used to structured explanations and data questions. A tutor builds that over the first month, focusing on command terms, diagrams and written answers. The board-switch block is designed for exactly this kind of move.",
    },
    {
      question: "Do tutors write the IA, Extended Essay or TOK essay?",
      answer: "Never. Our role stops at coaching, so a Chaibasa student keeps authorship of every assessed piece. A tutor may unpack a criterion, question a weak research question or point out where an argument thins out, but the wording, the data and the conclusions remain the student's. Writing or reworking an IA, EE, TOK essay or coursework would risk a misconduct finding, which is why we refuse it even when a family asks politely.",
    },
    {
      question: "Which IGCSE boards do you teach?",
      answer: "Cambridge International and Pearson Edexcel, treated as separate courses. A Chaibasa student might sit Cambridge 0580 Mathematics or Edexcel 4MA1 and the preparation differs for each. We therefore start by asking for the syllabus code printed on the entry confirmation or the textbook, and only then choose practice papers. Not sure which board applies? Ask the school or provider, or simply photograph the book cover.",
    },
    {
      question: "How do summer heat and power cuts affect lessons?",
      answer: "We plan around them. In May and June we move sessions to early morning or late evening, and we suggest a charged laptop and a phone hotspot as backup. If a power cut ends a lesson, we reschedule without a penalty and share the notes so the student does not lose the thread. In exam months we can add a short catch-up session.",
    },
    {
      question: "Can my child take Hindi or Ho as a language subject?",
      answer: "Hindi A and Hindi B are available at some schools, and we can often find a tutor who has taught them. Ho is not a standard IB subject, though some students arrange a school-supported self-taught option, where we cannot usually help. Send us the course and level, and we will tell you honestly whether we can match a tutor.",
    },
    {
      question: "How do JEE, NEET and CUET-UG work for IB and IGCSE students?",
      answer: "Entry rules turn on subject combinations and equivalence certificates, and they are revised from year to year, so the official brochure is always the final word. As a general picture, the AIU treats the IB Diploma as a Class 12 equivalent and CUET-UG is open to candidates from every board. JEE Main and NEET have their own subject and percentage conditions. We teach content and technique, without forecasting ranks.",
    },
    {
      question: "Do you teach IB PYP and MYP in Chaibasa?",
      answer: "Yes, for both. Younger PYP pupils get short, concrete sessions on reading, number and asking good questions, while MYP students from Class 6 to 10 work on subjects such as sciences, language and mathematics against criteria. Because neither programme runs locally that we know of, these pupils are often children of transferred employees or students in an online school, and a tutor fluent in programme language helps them settle.",
    },
    {
      question: "What if the first tutor is not right?",
      answer: "Say so and we will arrange another one, free of charge. Chemistry between student and tutor matters more than a polished profile, and some children want a slower, gentler pace while others want drill. One or two sentences about what felt off are enough; nobody will ask you to defend the decision. The free first lesson is the best protection, yet the option never expires.",
    },
    {
      question: "Will a tutor come to our house in Chaibasa or Jamshedpur?",
      answer: "No visit will happen. We do not send anyone to a house in Chaibasa, Jamshedpur or anywhere else in Jharkhand, because visits are offered only in Gurugram and parts of Delhi NCR. What a Chaibasa family gets is private tuition from home through a screen, with a live tutor and a shared whiteboard. Saying this up front spares parents an unnecessary wait.",
    },
    {
      question: "What happens in the free trial?",
      answer: "A tutor meets your child on video for roughly half an hour to three-quarters of an hour and works on a genuine topic from the current syllabus. Expect a few questions about where the student struggles, one idea explained properly, and a short task to try. You may sit beside your child. Nothing is charged, nothing is promised, and a written summary arrives afterwards, with a written rate only if you ask for it.",
    },
    {
      question: "How do we get started?",
      answer: "Send a WhatsApp message to +91 7439 368 115 or email support@ibgram.com with your child's class, programme, subject and exam session. We reply with a tutor profile and a trial time, usually within a day. After the trial you receive a written rate and can start weekly lessons only if you are happy. The first step is free.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "See where IB Gram teaches and how online tuition works." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse IB subject tutors and programme guides." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject guides." },
    { label: "IB Diploma programme", href: "/programmes/dp/", description: "How DP subjects and the core work together." },
    { label: "IB MYP programme", href: "/programmes/myp/", description: "MYP criteria and the personal project." },
    { label: "IB PYP programme", href: "/programmes/pyp/", description: "Inquiry learning for primary years." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI at SL and HL." },
    { label: "Tutor profiles", href: "/tutors/", description: "Tutors by subject, level and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write or WhatsApp to arrange a free trial." },
    { label: "IB and IGCSE tutors in Jamshedpur", href: "/jamshedpur/", description: "The page for the steel city sixty kilometres east." },
    { label: "IB and IGCSE tutors in Ranchi", href: "/ranchi/", description: "For families looking towards the state capital." },
    { label: "IB and IGCSE tutors in Adityapur", href: "/adityapur/", description: "Our page for the industrial town near Jamshedpur." },
    { label: "IB and IGCSE tutors in Bokaro Steel City", href: "/bokaro-steel-city/", description: "For steel-town families elsewhere in Jharkhand." },
  ],

  closingHeading: "Start with a free online lesson in Chaibasa",
  closingBody:
    "A student in West Singhbhum should have the same quality of subject help as one in a metro, and online lessons make that possible from home. Send us the subject, level and exam session, and we will propose a tutor and a trial in Indian time. The first lesson is free, the rate arrives in writing, and a different tutor is always possible. WhatsApp +91 7439 368 115 or email support@ibgram.com.",
};
