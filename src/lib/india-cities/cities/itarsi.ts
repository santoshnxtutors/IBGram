import type { CitySeoPage } from "../types";

/**
 * /itarsi/ - IB and IGCSE tutoring page for Itarsi, Narmadapuram district, Madhya Pradesh. Online-only.
 * No IB or Cambridge school is confirmed in Itarsi; stripSchools is empty and clusters point honestly to
 * Bhopal, Indore and Nagpur (names already verified on those pages). Local hook: the railway junction,
 * transfer-prone railway and defence-supply households, Narmada valley wheat and soybean belt.
 */
export const itarsi: CitySeoPage = {
  slug: "itarsi",
  countryName: "Itarsi",
  countryNameLong: "Itarsi, Madhya Pradesh",
  demonym: "Itarsi",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions are scheduled around the Navratri and Diwali stretch, the 43-degree afternoons of May and June, the monsoon weeks and any transfer order that lands on a railway household",
  lastUpdated: "2026-09-21",
  geo: { latitude: 22.6142, longitude: 77.7625 },
  wikipedia: "https://en.wikipedia.org/wiki/Itarsi",
  alternateNames: ["Itarsi Junction", "Itarsi Narmadapuram", "Itarsi MP"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Itarsi | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Itarsi, Madhya Pradesh: private one-to-one online tuition for railway and transfer-prone families, IB DP, MYP, Cambridge, free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Itarsi",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION IN ITARSI",
  heroSubtitle:
    "Home tuition for IB and IGCSE in Itarsi is delivered as private one-to-one online lessons, because our tutors do not travel to Madhya Pradesh. Itarsi is a railway junction town, and much of who asks are railway employees on transfer cycles, families running grain and soybean businesses, and parents thinking about Bhopal for a child's schooling, all wanting a tutor who understands an international syllabus.",
  primaryKeyword: "IB and IGCSE tutors in Itarsi",
  imageAltText: "Itarsi student with a laptop and IB Chemistry notes in a one-to-one online lesson with a tutor",
  secondaryKeywords: [
    "IB tutor Itarsi",
    "IGCSE tutor Itarsi",
    "IB home tuition Itarsi",
    "IGCSE home tuition Itarsi",
    "IB private tuition Itarsi",
    "IB Maths tutor Itarsi",
    "IGCSE Maths tutor Itarsi",
    "IB Physics tutor Itarsi",
    "IB Chemistry tutor Itarsi",
    "IB Biology tutor Itarsi",
    "IB DP tutor Itarsi",
    "IB MYP tutor Itarsi",
    "IB PYP tutor Itarsi",
    "IGCSE online tuition Itarsi",
    "Cambridge IGCSE tutor Itarsi",
    "IB tutor Narmadapuram",
    "IB tutor Hoshangabad",
    "IGCSE tutor Itarsi Madhya Pradesh",
    "online IB tuition Itarsi",
  ],

  heroTrustPoints: [
    "Live one-to-one video lessons on Indian Standard Time, from a laptop at your own table",
    "Tutors matched to the IB course and level or the Cambridge and Edexcel code your child sits",
    "First lesson free, a written note after each session, rate given in writing before booking",
    "No link with any school, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "Junction town", label: "Built for families who get transferred" },
    { value: "PYP to DP", label: "All IB stages, online" },
    { value: "MP board to IB", label: "Bridging support for a switch" },
    { value: "Free trial", label: "See a real lesson first" },
  ],

  intro: {
    heading: "Private online tuition for an Itarsi child who may soon meet the IB or IGCSE",
    paragraphs: [
      "Few Indian towns are as tied to the map as Itarsi. Trains between Delhi and Chennai, Mumbai and Howrah, and Bhopal and Nagpur meet at its junction, and a large part of the town works around that fact. Railway staff, station and yard workers, loco pilots and their families form a community that moves: a transfer order can shift a household to Jabalpur, Bhopal, Nagpur or farther in weeks.",
      "That habit of moving is the reason an international syllabus comes up in conversation. A railway officer's child may be posted to a city where the nearest good school teaches the IB or Cambridge, and a child who has studied the MP Board or CBSE at Itarsi then has to catch up quickly. We help with that catch-up before, during and after the move.",
      "IB and IGCSE tutors in Itarsi do not exist as a local trade, and pretending otherwise would waste your time. What you get is a live lesson on video: the tutor, teaching from elsewhere in India, and your child, at the family table. A shared whiteboard, marked past papers and a written summary after each session take the place of a classroom.",
      "IB Gram is independent of every school and board. Tutors coach subject knowledge and exam technique. They never write, redraft or polish an Internal Assessment, Extended Essay, TOK essay or coursework. The first lesson is free, and we agree the rate in writing before anything else.",
    ],
    bullets: [
      "IB tuition from PYP to DP, plus Cambridge and Edexcel IGCSE",
      "One tutor, one student, live video, no group batches",
      "Bridge lessons for children moving from MP Board or CBSE",
      "Tutors do not visit Itarsi homes; in-person lessons run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is confirmed as taught in Itarsi. What follows shows how each tends to reach a household here: through a railway transfer, a hostel in Bhopal or Indore, or a family coming home from abroad.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Learning moves around themes, so a single unit might bring together reading, number work and science. Children ask questions, do small projects and finish the stage with an Exhibition of their own.",
      countryNote:
        "PYP lessons for Itarsi children are usually preparation ahead of a transfer, building confidence in speaking, reading aloud and explaining an idea in a few sentences.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers assess each subject on criteria instead of a single mark, and the student completes a Personal Project at the end. The change students notice most is having to justify and evaluate.",
      countryNote:
        "An MYP learner connected with Itarsi is usually a railway child now in a metro school, or one boarding in Bhopal, so lessons follow that school's timetable.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, sit beside TOK, an Extended Essay and a service strand. Internal assessments and May or November papers are combined into a grade for each subject.",
      countryNote:
        "Diploma support for Itarsi families follows a school elsewhere, and holiday blocks matter because a child may come home only at Diwali and in summer.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students combine Diploma courses with a career-related qualification, a project and professional skills. Few schools in India offer it.",
      countryNote:
        "Requests from Itarsi are uncommon. If one arrives, we tutor the academic Diploma courses inside the programme.",
    },
  ],

  subjectsIntro:
    "Itarsi requests are typically for a single subject that a new school will test quickly. We start with the subject and level, then choose the tutor whose timetable fits a railway family's shift pattern.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Suited to future engineers, including those eyeing MANIT Bhopal or IIT Indore. Worked examples emphasise reasoning in words, not just answers." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Students practise using data and technology to model real situations, which pays off in business or social science routes." },
    { name: "IB Physics", levels: "HL / SL", description: "Lessons alternate between quick data-booklet questions and slower explanations, with the investigation designed early enough to be improved." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Calculations tend to be fine. Mechanisms, rates and the language of explanation take extra passes." },
    { name: "IB Biology", levels: "HL / SL", description: "Marks depend on matching detail to the command word, so students rehearse short exact answers and interpret graphs." },
    { name: "IB Economics", levels: "HL / SL", description: "Railway pricing, grain procurement and the Narmada belt's agriculture make handy local examples for evaluation." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies reward application. Students from trading families often have good instincts to turn into syllabus language." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Hindi-speaking students practise unseen commentary and comparative essays, with the oral rehearsed aloud." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory and programming are taught side by side, and the internal product is checked for clear planning and documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "Key studies are learned in detail and turned into structured evaluation paragraphs." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "The Satpura forests, the Tawa reservoir and river-valley farming supply grounded examples for systems questions." },
    { name: "IB Hindi A / B", levels: "HL / SL", description: "Text types, register and written accuracy come first, followed by conversation practice for the oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion-based sessions help students examine knowledge claims and shape the exhibition, without writing anything for them." },
  ],

  igcseSubjectsIntro:
    "Cambridge IGCSE is the international syllabus an Itarsi family is most likely to meet, often through a school in Bhopal or after a transfer. Tutors are matched to your child's code and tier, or to Edexcel where the school follows Pearson.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Students from MP Board or CBSE often solve quickly but write too little working, so practice focuses on showing method." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Functions, trigonometry and an early look at calculus make a later move into IB Maths AA less abrupt." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Timed calculations, unit checks and graph questions are practised, with the alternative-to-practical paper included early." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, reaction types and simple organic chemistry are built up in order, with practical questions used as revision." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Short structured answers on cells, enzymes and inheritance are drilled until each line earns a mark." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams are settled quickly, leaving time for evaluative answers." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python is run in lessons so that pseudocode and trace tables are understood, not memorised." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and summary tasks are timed, which helps students who speak well but write slowly." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Each answer is tied to the case given, avoiding stock replies that lose marks." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension and formal writing are practised for students who want a firm grade in a language they speak daily." },
  ],

  regionsTitle: "Itarsi and Narmadapuram district areas we tutor into",
  regionsIntro:
    "Because every lesson is online, the areas below are background. They show who lives where, which schools operate nearby and how trains, heat or festivals change an evening.",
  regions: [
    { name: "Itarsi Junction and railway colony", note: "The heart of the town, where railway staff households cluster and transfer orders decide how long a child stays at one school." },
    { name: "Civil Lines and the old town", note: "Older residential areas with established schools and long-standing private tutors." },
    { name: "Ganj and the main market", note: "The trading centre, with grain and general merchants whose children look at business and commerce routes." },
    { name: "Bhopal Road side", note: "Housing along the road to Bhopal, useful for families who plan to move towards the capital." },
    { name: "Narmadapuram", note: "The district headquarters about 20 km away, with government offices and professional households." },
    { name: "Sohagpur and Pipariya", note: "Nearby towns along the rail lines, with families who compare schools in Bhopal and Jabalpur." },
    { name: "Tawa reservoir side", note: "The area near the Tawa dam, popular for weekends and useful to know when planning travel." },
    { name: "Pachmarhi road", note: "The route towards the Satpura hill station, relevant to tourism-linked households." },
    { name: "Harda", note: "A neighbouring district town with an agricultural economy and its own school scene." },
    { name: "Bhopal outskirts", note: "Families relocating for schooling often begin lessons here and continue after the move." },
  ],

  schoolDisclaimer:
    "We could not confirm an IB or Cambridge school inside Itarsi, so the campuses below are in other cities and named only to show where families realistically look. IB Gram is independent of every school listed, of the International Baccalaureate, of Cambridge Assessment International Education and of Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Nearby: Bhopal",
      note: "The state capital, roughly 90 km away, and the natural first stop for Itarsi families. International-curriculum choice is still limited, with one residential campus near Ratibad.",
      schools: ["Shrewsbury International School India"],
    },
    {
      city: "Nearby: Indore",
      note: "A longer journey west, but home to several established international and boarding campuses often considered by Madhya Pradesh families.",
      schools: ["Choithram International", "Daly College Indore", "Emerald Heights International School"],
    },
    {
      city: "Nearby: Nagpur",
      note: "Reachable along the same rail corridor, with a smaller set of international schools that suit families with Vidarbha ties.",
      schools: ["D Y Patil International School, MIHAN", "Centre Point School International"],
    },
  ],

  modesIntro:
    "The format for every Itarsi family is fixed: one tutor and one child, live on video, on Indian time. The rhythm is what changes, whether steady weekly sessions or a burst before a move. Tutors never turn up at your door here; that model exists only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "A regular weekly lesson",
      description:
        "One fixed slot on a laptop, using a shared whiteboard and marked papers. It suits families staying in Itarsi for now.",
      bullets: [
        "Tutor can be anywhere in India",
        "Works for IB DP, MYP and IGCSE",
        "Past papers reviewed together on screen",
        "The same tutor throughout the term",
      ],
    },
    {
      title: "Lessons that follow the transfer",
      description:
        "For railway and public-sector households, sessions continue with the same tutor when a posting moves the family, so the change of city does not break the study plan.",
      bullets: [
        "Same tutor before and after the move",
        "Timetable adjusted to the new school",
        "Notes carry the plan from one city to the next",
        "Pausing during the move costs nothing",
      ],
    },
    {
      title: "Holiday revision blocks",
      description:
        "Intensive lessons over Diwali or summer for a child studying in another city and home for a short break.",
      bullets: [
        "Timed papers with fast marking",
        "Built around the child's own school syllabus",
        "Kept clear of Diwali and Holi days",
        "Booked two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Why do railway and transfer-prone families in Itarsi look at the IB and IGCSE?",
      paragraphs: [
        "A transfer changes everything at short notice. When a railway employee is posted from Itarsi to Bhopal, Nagpur or a metro, the child needs a school within weeks, and the best-known school in the new city may follow the IB or Cambridge. The question then becomes how quickly the child can adapt to a different style of assessment.",
        "The same pattern appears among families in government service, defence-supply chains and banking, all of which move staff across states. The child who has done well in MP Board or CBSE often discovers that explanation and independent work count for more than recall.",
        "That is why tutoring makes sense before the move as well as after. A few months of practice with command words, structured answers and past papers lets the child arrive prepared rather than surprised.",
        "IB and IGCSE tutors in Itarsi are therefore tutors who travel with the family in the only way possible: they teach online, and the lessons continue when the address changes.",
      ],
      table: {
        caption: "Household types in Itarsi that ask about IB and IGCSE",
        columns: ["Household", "Typical trigger", "What the tutor works on"],
        rows: [
          ["Railway employees", "Transfer to a city with an international school", "Question style, written answers, subject gaps"],
          ["Grain and soybean traders", "Plans for a degree abroad", "HL subject depth, predicted grades"],
          ["Government and bank staff", "Posting to a metro", "Bridge lessons before the move"],
          ["Families back from the Gulf", "Mid-course entry to a local school", "Continuity with the previous syllabus"],
        ],
      },
      bullets: [
        "Transfers are the main trigger for enquiries",
        "MP Board and CBSE students meet a new assessment style",
        "Preparation is most effective before the move",
        "Online lessons follow the family across cities",
      ],
    },
    {
      heading: "Which IB or IGCSE schools are near Itarsi?",
      paragraphs: [
        "No school inside Itarsi could be confirmed as offering the IB or Cambridge IGCSE. The nearest confirmed options lie in Bhopal, Indore and Nagpur, each a substantial journey by rail or road.",
        "Bhopal has Shrewsbury International School India, a residential campus near Ratibad. Indore has Choithram International, Daly College and Emerald Heights International School. Nagpur has D Y Patil International School at MIHAN and Centre Point School International.",
        "For most families, that means a choice between boarding a child, relocating with a transfer or staying and building the skills at home. The last option is the one our service supports.",
        "It also explains why local specialist tutors are rare. Without a school on the doorstep, few teachers around Itarsi have taught the current IB Physics HL or IGCSE 0606 syllabus recently.",
      ],
      table: {
        caption: "Nearest confirmed international-curriculum schools from Itarsi",
        columns: ["School", "City", "Relevance for an Itarsi family"],
        rows: [
          ["Shrewsbury International School India", "Bhopal (Ratibad)", "Closest campus, residential option"],
          ["Choithram International", "Indore", "Established option for day or boarding families"],
          ["Daly College Indore", "Indore", "Well-known boarding school"],
          ["D Y Patil International School", "Nagpur (MIHAN)", "Option along the rail corridor"],
        ],
      },
      bullets: [
        "No IB or Cambridge school is confirmed in Itarsi",
        "Bhopal, Indore and Nagpur are the nearest options",
        "Families choose between boarding, relocation and tutoring at home",
        "Local specialist tutors are hard to find",
      ],
    },
    {
      heading: "MP Board and CBSE against IB and IGCSE: what changes for an Itarsi student?",
      paragraphs: [
        "The Madhya Pradesh Board and CBSE dominate Itarsi's classrooms, and both prepare students well for JEE Main, NEET and state entrance exams. Their strength is syllabus coverage and exam practice on fixed patterns.",
        "IB and IGCSE assess differently. Papers often want a paragraph of reasoning, and the marking scheme rewards the quality of an argument. A coursework component, from a lab report to an extended essay, is a real part of the grade.",
        "Students moving across usually find the content familiar and the format new. It is common for a strong CBSE student to lose marks in the first term simply because the answer was correct but not explained.",
        "That gap closes with practice. We aim for the first weeks to feel like rehearsal rather than a shock.",
      ],
      table: {
        caption: "Boards compared from Itarsi",
        columns: ["Feature", "MP Board / CBSE", "IB / IGCSE"],
        rows: [
          ["Presence in Itarsi", "Most schools", "None confirmed"],
          ["Assessment", "Fixed board papers", "Papers plus coursework or internal assessment"],
          ["Route to Indian entrance exams", "Direct", "AIU equivalence and subject rules"],
          ["Answer style", "Recall and standard application", "Reasoning shown and evaluated"],
        ],
      },
      bullets: [
        "MP Board and CBSE fit Indian entrance exams directly",
        "IB and IGCSE ask for reasoning and independent work",
        "Content is familiar; format is the change",
        "Practising before the switch removes most of the shock",
      ],
    },
    {
      heading: "How is the fee for IB or IGCSE tuition decided for an Itarsi family?",
      paragraphs: [
        "There is no single price, since each match is different. We look at the level, the subject, session length, how many sessions per week and how recently the tutor has taught your exact syllabus. Those five factors set the figure.",
        "A Higher Level Diploma science needs a rarer specialist than IGCSE Core English, which is why the two are not priced alike. The same holds in every city in India.",
        "No travel cost appears in the fee. A tutor in another state charges an Itarsi student what they charge anyone else, and the family saves the hours a class in Bhopal would take.",
        "The rate is confirmed in writing before the free trial, and there is no lock-in. You may pause during a transfer, review after a few weeks and change tutors if needed.",
      ],
      bullets: [
        "Level, subject, session length, frequency and tutor experience set the rate",
        "No travel cost, since lessons are online",
        "Written quote before the free trial",
        "Pause during a transfer without penalty",
      ],
    },
    {
      heading: "Online, coaching classes or local tutors: what works for Itarsi?",
      paragraphs: [
        "Itarsi has coaching for JEE, NEET, railway and other competitive exams, and it serves those goals well. What it does not have is a batch for IB Business Management or IGCSE Additional Mathematics, since too few students take those courses.",
        "Local private tutors are excellent for MP Board and CBSE subjects. For international syllabuses the difficulty is currency: recent mark schemes, command terms and criteria are unfamiliar to most.",
        "Self-study can work for a disciplined IGCSE student with free past papers. It fails at coursework and long answers, where a second, experienced reader is needed.",
        "Online tutoring fills the gap. Lessons stay one to one, the tutor is chosen for the course and the family sets the timetable around shift patterns.",
      ],
      table: {
        caption: "Options for IB and IGCSE help in Itarsi",
        columns: ["Option", "Syllabus fit", "Attention", "Limit"],
        rows: [
          ["Local coaching", "Built for JEE, NEET and railway exams", "Group", "No IB or Cambridge batches"],
          ["Local private tutor", "MP Board and CBSE", "One to one", "Little current IB or Cambridge marking"],
          ["Self-study", "Student-chosen", "None", "No feedback on written work"],
          ["Online specialist", "Matched to course and level", "One to one", "Needs steady internet"],
        ],
      },
      bullets: [
        "Local coaching focuses on entrance and railway exams",
        "Few local tutors know current IB or Cambridge schemes",
        "Self-study leaves written work unchecked",
        "Online matching supplies the missing specialist",
      ],
    },
    {
      heading: "How do Navratri, Diwali, summer heat and monsoon shape the study year in Itarsi?",
      paragraphs: [
        "Itarsi's calendar has several strong pulses. Navratri and Dussehra in autumn, followed closely by Diwali, break up the first term. Holi and Rang Panchami in spring do the same. Because the railway community comes from across the country, Chhath and Durga Puja are also widely observed, and staff households often travel home.",
        "Summer is severe. May and June regularly pass 42 degrees, and afternoon lessons become unrealistic. Early-morning or late-evening slots work better, and a power backup is a sensible precaution.",
        "The monsoon from late June brings heavy rain across the Narmada valley. Connectivity can dip during storms, so a hotspot is worth keeping ready.",
        "For examinations, Cambridge IGCSE runs sessions in May-June and October-November. The IB Diploma sits in May, with results in July and a November session for a smaller cohort. The school's calendar decides what a student needs, wherever the school stands.",
      ],
      table: {
        caption: "Local calendar and its effect on tutoring in Itarsi",
        columns: ["Period", "Local factor", "Adjustment"],
        rows: [
          ["September-November", "Navratri, Dussehra, Diwali, Chhath", "Move or skip lessons on peak days"],
          ["March", "Holi and Rang Panchami", "Skip one or two days"],
          ["May-June", "Heat above 42 degrees, exam series", "Early or late slots, power backup"],
          ["July-September", "Monsoon", "Keep a hotspot ready"],
        ],
      },
      bullets: [
        "Autumn festivals interrupt the first term",
        "Summer heat favours early or late lessons",
        "Monsoon can affect connectivity",
        "Exam timing follows the child's school",
      ],
    },
    {
      heading: "What do Itarsi students aim for after IB or IGCSE?",
      paragraphs: [
        "Within reach lie MANIT Bhopal, AIIMS Bhopal, IISER Bhopal and Barkatullah University, along with IIT Indore and universities across India. Many railway and defence-linked families also think of NDA and other service routes.",
        "For IB and IGCSE students, Indian admission requires Association of Indian Universities equivalence and the correct subject mix for JEE or NEET. CUET-UG is the main entry to central universities.",
        "Study abroad appears in conversations with relatives in the UK, the US, Canada or the Gulf. Predicted grades in Class 12 matter, and each university sets its own requirements.",
        "Our tutors focus on the academic side: subject depth, technique and grade improvement. We describe what a target course typically expects, without offering admissions consulting.",
      ],
      bullets: [
        "MANIT, AIIMS and IISER in Bhopal are nearby destinations",
        "AIU equivalence and subject rules are essential for Indian admission",
        "Predicted grades matter for overseas applications",
        "Tutoring supports subjects and technique",
      ],
    },
    {
      heading: "IB Maths and the sciences: what an Itarsi student should expect",
      paragraphs: [
        "IB Mathematics has two courses. Analysis and Approaches covers algebra, calculus and proof and suits engineers. Applications and Interpretation stresses statistics, modelling and technology and suits future economists and social scientists.",
        "Physics and Chemistry at Higher Level demand accuracy and speed. Physics students need confident use of the data booklet, and Chemistry students must master mechanisms and equilibrium. Both include an internal investigation.",
        "Biology marks depend on precise answers to command terms and careful reading of data. Many students know more than they show.",
        "A tutor with recent syllabus experience can identify those habits within a few lessons and direct practice where it matters.",
      ],
      bullets: [
        "AA for algebra and calculus, AI for data and modelling",
        "HL sciences reward speed and accuracy",
        "Biology depends on command-term precision",
        "Recent syllabus experience helps a tutor find gaps quickly",
      ],
    },
    {
      heading: "Should an Itarsi child prepare for IGCSE Core or Extended?",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended papers in maths and sciences. Core caps the grade lower, while Extended opens the full range and is the usual choice for students who may go on to the Diploma or A Levels.",
        "After a transfer, the new school normally decides the tier. Tutoring then works within that decision, closing the gap between the child's current level and what the paper asks.",
        "Additional Mathematics 0606, where offered, helps prepare for IB Maths AA. Extended sciences ease the step to Diploma Physics and Chemistry.",
        "Children arriving from an Edexcel school should work with a tutor who knows that board's papers, since wording and mark schemes differ.",
      ],
      bullets: [
        "Core caps the grade; Extended does not",
        "The new school usually sets the tier",
        "Additional Mathematics prepares for Maths AA",
        "Edexcel needs its own preparation",
      ],
    },
  ],

  tutorsIntro:
    "Browse tutors across the IB continuum and Cambridge IGCSE. Every lesson for an Itarsi student is live, online and one to one, and each match is made on your child's exact syllabus, level and exam session.",

  process: [
    { title: "Send the details", description: "Tell us the board or programme, subject and level, current marks and the hours your Itarsi household can spare." },
    { title: "Review the tutors we propose", description: "Each comes with a reason for the match, based on recent teaching of your exact course." },
    { title: "Attend the free trial", description: "Your child works through a real topic with the tutor, at no cost and with no obligation." },
    { title: "Approve the first month", description: "The tutor sets out topics and a weekly plan, and you accept it or ask for changes." },
    { title: "Continue each week", description: "Regular lessons follow, reviewed every few weeks, with a new tutor arranged if the fit slips." },
  ],

  whyPoints: [
    { title: "Fits a town that moves", description: "Lessons and the study plan follow a railway family from one posting to the next." },
    { title: "Matched by syllabus", description: "The tutor is chosen for your child's IB course or Cambridge code, not for a general name." },
    { title: "Trial before trust", description: "A free lesson shows you exactly how the tutor teaches." },
    { title: "Original work only", description: "Tutors coach and explain but never write or edit assessed work." },
    { title: "Clear written records", description: "A short note follows each lesson and a fuller review comes every few weeks." },
    { title: "No strings attached", description: "No school tie, no long contract and a change of tutor on request." },
  ],

  faqs: [
    { question: "Can I find IB tutors in Itarsi?", answer: "Yes, online. IB Gram pairs Itarsi students with tutors elsewhere in India who teach the exact IB subject and level, in live one-to-one video lessons. No IB school is confirmed in Itarsi, so we match on syllabus fit. A free trial lesson comes first, and we change the tutor if the fit is wrong." },
    { question: "Is IGCSE tuition available in Itarsi?", answer: "Yes. IGCSE tuition for Itarsi students is delivered online, matched to your child's Cambridge code and tier or Edexcel specification. Common requests include Mathematics 0580, Additional Mathematics 0606 and the sciences, and lessons rely on official past papers and mark schemes." },
    { question: "Do tutors visit homes in Itarsi?", answer: "No. Tutors do not visit homes in Itarsi. In-person home tuition exists only in Gurugram and parts of Delhi NCR. In Itarsi, home tuition means private online lessons: your child studies at home on a laptop, and the tutor teaches live and one to one over video." },
    { question: "What is the cost of IB or IGCSE tuition in Itarsi?", answer: "The rate depends on programme, level, subject, session length, weekly frequency and the tutor's recent experience with your syllabus. We give it in writing before the free trial. Diploma Higher Level subjects generally cost more than IGCSE Core help, and no travel cost is included." },
    { question: "Which IB or IGCSE schools are close to Itarsi?", answer: "None inside Itarsi could be confirmed. The nearest confirmed campuses are Shrewsbury International School India near Bhopal, Choithram International, Daly College and Emerald Heights International School in Indore, and D Y Patil International School at MIHAN in Nagpur. All involve considerable travel." },
    { question: "My spouse is a railway employee facing a transfer. Can tutoring continue after we move?", answer: "Yes. Lessons are online, so the same tutor can carry on after a move to Bhopal, Nagpur or anywhere else, adapting the timetable to the new school. A written note after every session lets the plan travel with you, and pausing during the move costs nothing." },
    { question: "Is the first lesson free?", answer: "Yes. The first lesson is free and uses a real topic from your child's syllabus. You may then continue, ask for changes or request a different tutor. No payment is taken in advance." },
    { question: "Will a tutor write my child's Internal Assessment or Extended Essay?", answer: "No. Tutors explain criteria, help refine a research question and comment on drafts, but do not write or rework the assessed text. That would breach IB academic integrity rules, and our tutors decline such requests." },
    { question: "Which IB Diploma subjects can you support?", answer: "We support Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology and Hindi, plus Theory of Knowledge and Extended Essay guidance. Tell us the level and exam session and we will confirm availability." },
    { question: "Do you tutor IB MYP and PYP as well?", answer: "Yes. MYP lessons focus on criterion-based writing in sciences and languages and on the Personal Project. PYP lessons focus on reading, writing, number sense and inquiry skills. Itarsi families usually ask because a child is about to change school." },
    { question: "Does online tuition work as well as a class in person?", answer: "For these syllabuses it does, especially where no local specialist exists. A shared whiteboard, screen-shared papers and written notes reproduce what a tutor at the desk would do, and the choice of teacher opens across India. A dependable connection and a quiet space are the essentials." },
    { question: "How are tutors checked?", answer: "Each tutor is reviewed for qualifications, recent teaching of the exact subject and level, and their approach to assessment criteria before an introduction. The trial lesson then tests the fit, and we change the tutor when it is not right." },
    { question: "When should we start?", answer: "At the beginning of a course, Class 11 for the Diploma or Grade 9 for IGCSE, if possible. If a transfer is likely, start a term or two before it. Later starts still help through focused revision and timed papers." },
    { question: "My child studies on the MP Board. How hard is the switch?", answer: "Usually the content is familiar and the format is new. The change is in how answers are judged: reasoning, evaluation and independent work count for more than recall. A tutor can introduce that style gradually, using past papers, before the new school expects it." },
    { question: "Can lessons avoid festival days and the hottest afternoons?", answer: "Yes. We plan around Navratri, Diwali, Holi and Chhath, and use early or late slots in May and June. An extra weekly lesson before mocks is easy to add because everything runs online." },
    { question: "Is IB Gram affiliated with any school, the IB, Cambridge or Pearson?", answer: "No. IB Gram is an independent tutoring service, not affiliated with, endorsed by or acting for any school named here, the International Baccalaureate, Cambridge Assessment International Education or Pearson Edexcel. Schools are mentioned only so families can see where the nearest campuses are." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "All the cities where we teach online." },
    { label: "IB and IGCSE tuition in Gurgaon", href: "/gurgaon/", description: "The single place with in-person home lessons." },
    { label: "IGCSE guide", href: "/igcse/", description: "Tiers, subjects, boards and exam sessions in one place." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The six subjects, the core and how grades are built." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and marking in MYP." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between the two IB Maths courses." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and request a free trial." },
    { label: "IB and IGCSE tutoring in Bhopal", href: "/bhopal/", description: "The state capital and the first stop for many Itarsi families." },
    { label: "IB and IGCSE tutoring in Jabalpur", href: "/jabalpur/", description: "A rail-linked city to the east with similar online tuition." },
    { label: "IB and IGCSE tutoring in Nagpur", href: "/nagpur/", description: "Along the same rail corridor, with a few international schools." },
    { label: "IB and IGCSE tutoring in Sehore", href: "/sehore/", description: "A Madhya Pradesh town near Bhopal with the same online setup." },
  ],

  closingHeading: "Book a free lesson for your Itarsi student",
  closingBody:
    "Send the board or programme, subject and level, your child's present marks and the hours your household keeps. A tutor shortlist, a note on each person's teaching and a few trial times come back, all online, one to one, free and without commitment. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp, and let IB and IGCSE tutors in Itarsi begin from your child's syllabus.",
};
