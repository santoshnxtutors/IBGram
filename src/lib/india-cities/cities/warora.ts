import type { CitySeoPage } from "../types";

/**
 * /warora/ - IB and IGCSE tutoring page for Warora, Chandrapur district, Maharashtra. No IB or IGCSE
 * school could be confirmed in Warora, so stripSchools is empty and the clusters are honestly labelled
 * nearby-city groups (Nagpur). Delivery is online one-to-one. Rendered with the shared CountryLanding
 * layout used by /gurgaon/.
 */
export const warora: CitySeoPage = {
  slug: "warora",
  countryName: "Warora",
  countryNameLong: "Warora, Maharashtra",
  demonym: "Warora",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Timetables avoid the fiercest Vidarbha afternoons, Ganeshotsav and Diwali weeks, and Dhamma Chakra Pravartan Day travel, and follow your child's school term",
  lastUpdated: "2026-09-21",
  geo: { latitude: 20.2282, longitude: 79.0019 },
  wikipedia: "https://en.wikipedia.org/wiki/Warora",
  alternateNames: ["Warora Chandrapur", "Warora Maharashtra"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Warora | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Warora, Chandrapur: live private lessons from home, scheduled around Vidarbha heat, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Home Tuition in Warora",
  heroEyebrow: "WARORA: IB & IGCSE TUITION FOR VIDARBHA FAMILIES",
  heroSubtitle:
    "Need home tuition in Warora for the IB or Cambridge IGCSE? Our tutors work live over video from other Indian cities, and your child simply sits down at the family table with a laptop. Nobody travels to Warora; home visits exist only for some Delhi NCR neighbourhoods and Gurugram. A free trial lesson comes first.",
  primaryKeyword: "IB and IGCSE tutors in Warora",
  imageAltText: "A Warora student revising IB Physics formulae with an online tutor on a video call in the evening",
  secondaryKeywords: [
    "IB tutor Warora",
    "IGCSE tutor Warora",
    "IB home tuition Warora",
    "IGCSE home tuition Warora",
    "IB private tuition Warora",
    "IB Maths tutor Warora",
    "IGCSE Maths tutor Warora",
    "IB Physics tutor Warora",
    "IB Chemistry tutor Warora",
    "IB Biology tutor Warora",
    "IB DP tutor Warora",
    "IB MYP tutor Warora",
    "IB PYP tutor Warora",
    "IGCSE online tuition Warora",
    "IB tutor Chandrapur district",
    "IB tutor Bhadravati",
    "online IB tuition Maharashtra Warora",
    "Cambridge IGCSE tuition Warora",
    "IB tuition near Nagpur for Warora students",
  ],

  heroTrustPoints: [
    "Tutors in India keep Indian time, so lessons sit inside an ordinary Warora evening",
    "A free trial lesson before any fee is mentioned",
    "A written summary for parents after each lesson",
    "Tutor change on request if the fit is not right",
    "Support with the student's own writing, never a tutor-written IA or essay",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on Indian time" },
    { value: "Four IB stages", label: "Primary years to Diploma, and IGCSE" },
    { value: "Free trial", label: "Watch before you pay" },
    { value: "Online", label: "Private, live, at home" },
  ],

  intro: {
    heading: "IB and IGCSE tutors in Warora, the coal and cotton town of north Chandrapur",
    paragraphs: [
      "Warora lies in the northern part of Chandrapur district, in the eastern Vidarbha region, and its economy rests on coal, power generation, cotton and trade. Many households have a parent in mining, engineering, the railways, health or teaching. The town is also known across Maharashtra for Anandwan, the community founded by Baba Amte for people affected by leprosy, which draws doctors, social workers and volunteers from all over the country.",
      "On international syllabuses the honest position is short: our checks turned up no school in Warora teaching the IB, Cambridge IGCSE or Edexcel IGCSE. Schools here follow the Maharashtra State Board or CBSE, in Marathi, Hindi or English medium. The nearest big city, Nagpur, is about a hundred kilometres away and has a cluster of international-curriculum schools. A parent searching for IB and IGCSE tutors in Warora is often a professional who has moved back from a metro, or one planning for a foreign degree.",
      "Every IB Gram tutor lives in India and works to IST. Because physical home tuition is limited to Gurugram and some Delhi NCR areas, lessons for Warora are delivered online through live video, a shared whiteboard and the student's own papers, with a short written note to follow. The trial lesson costs nothing, and a quote comes in writing once it is done.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Ages 3 to 11, nursery through Class 5",
      description:
        "Learning through inquiry units, where reading, number sense and questioning are practised inside a theme and not as separate drills.",
      countryNote:
        "A Warora child who has joined a PYP school in Nagpur or another city often benefits from a weekly session that keeps Marathi, Hindi and English reading in balance.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Ages 11 to 16, Classes 6 to 10",
      description:
        "A five-year course built on concepts and global contexts, assessed against published criteria, with a personal project at the end.",
      countryNote:
        "Families moving a child from a Maharashtra board class into MYP need help with criterion-based writing, command terms and the habit of explaining a method, all of which a tutor can build online.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Ages 16 to 19, Classes 11 and 12",
      description:
        "Two years, six subjects and a three-part core: a reflective Theory of Knowledge course, a 4,000-word research paper and a service-and-creativity strand.",
      countryNote:
        "A student from Warora aiming at Nagpur's universities, the IITs or a foreign degree must plan subjects and equivalence early, with tutor support for the Higher Level courses.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Ages 16 to 19, Classes 11 and 12",
      description:
        "A shorter international pathway that joins two or more DP courses to a career-related study and a reflective project.",
      countryNote:
        "Hardly known in Vidarbha, the CP can suit a student with an applied or technical direction; tutors support the DP course components within it.",
    },
  ],
  programmesIntro:
    "At every stage, the first lesson in Warora looks at what a student can already do and then plans what the syllabus asks next.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, vectors and proof, the usual choice for engineering and pure science." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics and modelling with technology, suited to business, medicine and social science." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, thermal physics, fields and quantum topics with data-based practical questions." },
    { name: "Chemistry", levels: "SL / HL", description: "Equilibrium, energetics and organic chemistry, with guidance on structuring long answers." },
    { name: "Biology", levels: "SL / HL", description: "Genetics, ecology and physiology, relying on graphs, diagrams and investigation design." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Resources, pollution and sustainability, a live topic in a coal and power district." },
    { name: "Economics", levels: "SL / HL", description: "Markets, trade and development, tied neatly to a mining and agricultural region." },
    { name: "Business Management", levels: "SL / HL", description: "Case-based analysis for children from trading and industrial families." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and networks, practised through timed written questions." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Close reading and comparative commentary, for students who think first in Marathi or Hindi." },
    { name: "Marathi A / Marathi B", levels: "SL / HL", description: "Either the literature course or the language course, chosen to match how Marathi is used at home." },
    { name: "Hindi A / Hindi B", levels: "SL / HL", description: "A familiar option in eastern Vidarbha, where Hindi is widely spoken." },
    { name: "Theory of Knowledge", levels: "Core", description: "Help framing knowledge questions; every word of the essay and the exhibition is the student's." },
  ],
  subjectsIntro:
    "Subject plans start from the degree in view and the student's current marks, not from which subject seems lightest.",

  igcseSubjects: [
    { name: "Mathematics (Core and Extended)", levels: "Cambridge 0580 / Edexcel", description: "Number, algebra, geometry and data at two tiers, with multi-step problem practice." },
    { name: "Additional Mathematics", levels: "Cambridge 0606", description: "Functions and calculus, for students bound for IB HL or A Level mathematics." },
    { name: "Physics", levels: "Cambridge 0625 / Edexcel", description: "Forces, energy, electricity and waves, with calculation and practical-skills work." },
    { name: "Chemistry", levels: "Cambridge 0620 / Edexcel", description: "Atoms, bonding, reactions and organic fundamentals." },
    { name: "Biology", levels: "Cambridge 0610 / Edexcel", description: "Living organisms, inheritance and the environment, with data questions." },
    { name: "English as a Second Language", levels: "Cambridge 0510", description: "All four skills for a child who speaks Marathi or Hindi at home and studies in English." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Pseudocode, logic and data representation." },
    { name: "Environmental Management", levels: "Cambridge 0680", description: "Resource use and human impact, relevant to a mining district." },
    { name: "Economics", levels: "Cambridge 0455", description: "Scarcity, markets and policy." },
    { name: "Hindi as a Second Language", levels: "Cambridge 0549", description: "A manageable language option beside heavier sciences." },
  ],
  igcseSubjectsIntro:
    "IGCSE typically covers Class 9 and 10. Extended tiers are meant for students who plan to continue with mathematics or sciences at a higher level.",

  regionsTitle: "Warora and nearby areas our online students study from",
  regionsIntro:
    "Since lessons take place on a screen, a student can be anywhere with a stable connection. These notes show how each area's pattern affects timing.",
  regions: [
    { name: "Warora town centre", note: "The market area and older wards, where trade and salaried families are close together and after-school lessons fit well from 5 pm." },
    { name: "Anandwan side", note: "The Anandwan campus and the roads around it, home to doctors, teachers and volunteers; calm evenings suit focused lessons." },
    { name: "Railway station area", note: "Households linked to the railway and the goods yard, where shift patterns may require flexible lesson times." },
    { name: "Majri colliery area", note: "A mining settlement east of the town, where coal-company families live and school buses follow fixed routes." },
    { name: "Warora Nagpur road side", note: "The northern edge towards Nagpur, popular with families who commute or who plan to move for schooling." },
    { name: "Chimur road side", note: "The eastern approach towards Chimur and the Tadoba region, with quieter roads and some variable mobile data." },
    { name: "Bhadravati", note: "An industrial town near Warora known for its ordnance factory and steel works, with many engineer and government-employee households." },
    { name: "Chandrapur city", note: "The district headquarters to the south, with a larger school choice and more tuition options than smaller towns." },
  ],

  schoolClusters: [
    {
      city: "Warora town",
      note: "Nothing in Warora itself came up as an IB, Cambridge or Edexcel school. Schools in town run the Maharashtra State Board or CBSE, so an international syllabus here means online tutoring.",
      schools: [],
    },
    {
      city: "Nearby: Nagpur",
      note: "Around a hundred kilometres to the north, Nagpur holds the region's main group of international-curriculum schools, and a few Warora families think of moving or boarding there for the senior years.",
      schools: ["D Y Patil International School, MIHAN", "Centre Point School International", "VIBGYOR World Academy", "International School of Scholars"],
    },
    {
      city: "Nearby: Chandrapur",
      note: "The district headquarters offers a wider school choice than Warora, but we could not confirm an IB or IGCSE school there either, so check any school directly.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "These schools are mentioned only because families around Warora sometimes consider them. IB Gram stands apart from the IB, Cambridge, Pearson and all the schools named, and listing one is no endorsement. Ask each school for its present curriculum and how admission works.",

  modesIntro:
    "Warora homes are not visited by tutors, as physical sessions are held only in Gurugram and some Delhi NCR areas. Families choose among three online formats.",
  modes: [
    {
      title: "Steady weekly online lessons",
      description: "One tutor, one subject and one fixed weekly slot, while the tutor marks the student's working as it is written.",
      bullets: ["Regular day and time", "Live written corrections", "Note after every lesson"],
    },
    {
      title: "Moving from Maharashtra board to IGCSE or IB",
      description: "A planned bridge for students changing syllabus, covering command terms, practical skills and written reasoning.",
      bullets: ["First-lesson gap check", "Command-term drills", "Gradual rise in difficulty"],
    },
    {
      title: "Exam-season revision block",
      description: "Two to four weeks of timed papers and mistake analysis ahead of an IB sitting or an IGCSE series.",
      bullets: ["Papers under exam conditions", "A running list of slips", "Weak topics ranked by marks lost"],
    },
  ],

  sections: [
    {
      heading: "Why do some Warora families look beyond the Maharashtra board?",
      paragraphs: [
        "Warora is a town of engineers, doctors, teachers, railway staff and colliery employees, and many of them have lived elsewhere. A parent who worked in Pune, Bengaluru or the Gulf may come home with a child who has studied under CBSE or an international board. A family that has built a business in coal transport or cotton trading may want to send a child abroad for engineering or management.",
        "A second reason is Anandwan. The campus draws volunteers and medical staff from across India and abroad, and some children of those households have grown up with a wider view of the world and a curiosity about international study. Their parents often ask about the IB Diploma for that reason.",
        "A third reason is practical: boards are not interchangeable. A child who has done two years of IGCSE in Nagpur and returns to Warora cannot simply enrol in a local class without losing time. Online tuition lets the student keep studying the same syllabus.",
        "None of these families is choosing international education because it is fashionable. Each has a particular goal, and the useful first step is a conversation about whether IGCSE or IB actually fits it.",
      ],
    },
    {
      heading: "How do the Maharashtra State Board and CBSE differ from IGCSE and the IB Diploma?",
      paragraphs: [
        "Under the Maharashtra State Board, pupils sit SSC after Class 10 and HSC after Class 12, and the Nagpur divisional board looks after Vidarbha. Instruction is in Marathi, Hindi, Urdu or English. CBSE follows NCERT textbooks and is the main alternative in towns like Warora.",
        "IGCSE covers Classes 9 and 10 and ends in separate papers in each subject, with questions that ask the student to explain, compare and evaluate. The IB Diploma covers six subjects and a core for ages sixteen to nineteen, with Extended Essay and Theory of Knowledge requirements.",
        "What differs most is the examiner's expectation. A student accustomed to a state-board style may write a correct answer with little working, and lose marks under an IGCSE mark scheme. Another may be comfortable with short answers and find IB extended responses tiring at first.",
        "The table puts the four routes side by side for parents.",
      ],
      table: {
        caption: "Warora families weighing four syllabuses",
        columns: ["Feature", "Maharashtra State Board", "CBSE", "Cambridge / Edexcel IGCSE", "IB Diploma"],
        rows: [
          ["Language of teaching", "Marathi, Hindi or English", "Mostly English, some Hindi", "English only", "English and a second language"],
          ["Terminal papers", "SSC then HSC", "Boards in Classes 10 and 12", "Series papers around age 16", "Two sittings a year, at 18"],
          ["How answers are judged", "Closeness to the textbook", "Use of NCERT ideas", "Structured parts with reasons", "Long arguments backed by evidence"],
          ["Offered locally", "Yes", "A few schools", "Not confirmed", "Not confirmed"],
          ["Path into Indian degrees", "Straight in", "Straight in", "Needs a Class 12 step", "AIU equivalence, then CUET-UG if asked"],
        ],
      },
    },
    {
      heading: "What influences the cost of IB and IGCSE tuition in Warora?",
      paragraphs: [
        "IB Gram does not post a price list because parents ask for very different things. One wants a single hour of IGCSE Chemistry each week; another wants three Diploma subjects at Higher Level. A written quote arrives after the free trial, so you can compare it with what you saw.",
        "Four things move the rate. The subject and level matter first, as Higher Level Physics takes more preparation than Core English. The tutor's experience with that particular syllabus counts next, then lesson frequency and duration, and finally any exam-season extras.",
        "What a Warora family does not pay for is a journey. Nagpur is a hundred kilometres away, which is a long bus or train ride for a school student. An online plan includes no fuel, no fare, no hostel and no hours lost on the road.",
        "When you ask for a rate, mention the class, the exam session you have in mind and any preferred days. That helps the tutor propose something realistic rather than a generic plan.",
      ],
    },
    {
      heading: "Does an online tutor beat Nagpur coaching, a local class or studying alone for a Warora student?",
      paragraphs: [
        "For most Warora students, yes, because every alternative has a built-in cost. Nagpur coaching means weekly or daily travel, a shared-room stay or a move. Local classes are good at board and entrance-test preparation but are not built around IB or Cambridge mark schemes.",
        "Self-study suits a motivated student. Past papers and examiner reports are freely available, and some teenagers use them well. The gap is feedback: nobody reads the student's working and explains why a mark was dropped, so the same error returns in the exam.",
        "An online private tutor keeps the student at home, reads the real page of work and corrects it on screen. A lesson that clashes with a power cut or a wedding can be moved without any journey being wasted.",
        "The table sets out the options plainly.",
      ],
      table: {
        caption: "Preparing in Warora for IB or IGCSE: the options",
        columns: ["Route", "Familiar with IB or IGCSE mark schemes", "How much one-to-one time", "What it demands of the family"],
        rows: [
          ["Online private tutor", "Yes, matched by subject and level", "The entire hour", "A laptop and a dependable connection"],
          ["Nagpur coaching centre", "Differs from centre to centre", "Divided across a batch", "A long commute or a change of address"],
          ["Local board or entrance class", "No, built for SSC, HSC, JEE or NEET", "Divided across a large room", "Easy, but the syllabus is different"],
          ["A private teacher in town", "Rarely", "Good if one can be found", "Hard to find for these syllabuses"],
          ["Studying alone", "Only what the student reads up", "None", "A great deal of self-discipline"],
        ],
      },
    },
    {
      heading: "How do Vidarbha heat, festivals and the monsoon shape a study year in Warora?",
      paragraphs: [
        "Eastern Vidarbha is one of the hottest parts of India in summer, with temperatures in the mid-forties from April through June. That lands squarely on IGCSE and IB May exam preparation. Lessons belong in early mornings or after dark, and a student should have a backup such as a phone hotspot, because electricity can dip under heavy summer load.",
        "The monsoon arrives in June and brings the rains that cotton and paddy depend on. Roads flood in places, and power can be unreliable for a day or two. It is also the time when the new school year starts, so it suits learning new topics in a steady rhythm.",
        "Festivals matter. Ganeshotsav in late summer and Diwali in autumn take up several days each. Dhamma Chakra Pravartan Day in October, observed by many Ambedkarite families in Vidarbha with travel to Nagpur, also removes a few days from the study calendar. Winter is mild and suits long revision sessions, while the IB November exams fall in this season.",
        "The table lays out the year.",
      ],
      table: {
        caption: "A study year in Warora",
        columns: ["Period", "What is happening", "How tuition adapts"],
        rows: [
          ["January to March", "Mild weather, mock exams, IGCSE February and March series", "Long revision sessions, timed mocks"],
          ["April to June", "Severe heat, IB May exams, IGCSE summer series", "Early morning or night lessons, backup connection"],
          ["July to September", "Monsoon, new school year, Ganeshotsav", "New topics, steady weekly routine"],
          ["October", "Dhamma Chakra Pravartan Day, Dasara, IGCSE Oct-Nov series starts", "Flexible dates, make-up slots"],
          ["November to December", "Diwali, IB November session, pleasant weather", "Timed papers before the session, then review"],
        ],
      },
    },
    {
      heading: "Which universities and careers can a Warora IB or IGCSE student aim for?",
      paragraphs: [
        "Locally, Nagpur is the natural destination, with its university, engineering colleges, medical colleges and management institutes, and the Visvesvaraya National Institute of Technology. Indian universities recognise the Diploma after an AIU equivalence certificate, and admission then follows each institution's own rules, frequently via national entrance tests.",
        "For engineering and medicine, JEE Main and NEET-UG ask for Physics, Chemistry and Mathematics or Biology at senior level. IB subjects can meet the conditions, but subjects must be picked at the start of Class 11 and checked against the rules of the day; a change in Class 12 is too late.",
        "Abroad, the IB Diploma and A Levels are recognised by universities in the UK, Canada, Australia and Europe, while colleges in the United States weigh IB results next to standardised tests. On its own, IGCSE leads towards those qualifications instead of opening university doors itself.",
        "Given Warora's mining and power background, some students think of mining engineering, environmental science or energy studies. IB Physics, Chemistry and Environmental Systems and Societies give a good base, and tutors help with depth and exam technique.",
      ],
    },
    {
      heading: "What do IB Mathematics and the sciences ask of a student from Warora?",
      paragraphs: [
        "IB Mathematics is taught as Analysis and Approaches or Applications and Interpretation. The first goes deeper into algebra, calculus and proof and is usually picked by future engineers and scientists. The second puts statistics, modelling and technology forward and suits medicine, economics and business.",
        "Students from the Maharashtra board tend to be fast and accurate with procedures. The adjustment is writing out reasoning, stating assumptions, and interpreting a result in the context of the question, because IB marks communication alongside the answer.",
        "In the sciences, internal assessments and practical skills matter. A student with limited laboratory experience is not disqualified, but needs help designing an investigation, identifying variables and handling uncertainty. The tutor works on the student's own data, not a model answer.",
        "The tutor explains command terms, shows how a mark scheme splits marks and checks units and significant figures. IAs and Extended Essays stay the student's own; tutors comment on drafts, but they do not write them.",
      ],
    },
    {
      heading: "How do IGCSE tiers work, and what should a Warora student pick?",
      paragraphs: [
        "Nearly every IGCSE subject is sat at Core or Extended level. Core tops out at a middle grade; Extended runs the full range. A student planning IB Higher Level or A Level sciences and mathematics should usually aim for Extended.",
        "At fourteen a sensible spread has English, Mathematics, two sciences, one business or humanities subject and a language. Hindi is an easy addition in Vidarbha, where it is widely spoken, and leaves more time for the harder subjects.",
        "Cambridge and Edexcel differ more in layout than in difficulty. Cambridge papers ask structured, multi-part questions; Edexcel papers look more like traditional school papers. Your child follows whichever the school or exam centre enters them for.",
        "A private candidate from Warora will need an approved exam centre, probably in Nagpur. Ask early, confirm deadlines and fees in writing and leave several months for registration.",
      ],
    },
  ],

  process: [
    { title: "Send us a message", description: "Write by WhatsApp or email with the class, the board your child follows and the subject that concerns you." },
    { title: "Check the syllabus", description: "We pin down the board, the tier and the series, and ask whether your child attends a school or will sit papers alone." },
    { title: "Try a free lesson", description: "A tutor chosen for the subject gives a real lesson at an hour that fits your household." },
    { title: "Get the quote on paper", description: "Once the trial is over, a written figure and a proposed weekly pattern reach you. Nothing has been booked up to that point." },
    { title: "Carry on with notes", description: "Lessons settle into a weekly pattern, each closed by a short written note, and a swap of tutor is one message away." },
  ],

  whyPoints: [
    { title: "Mark-scheme fluency", description: "Tutors teach from IB subject guides and Cambridge and Edexcel specifications." },
    { title: "Clear about online delivery", description: "No tutor visits Warora homes. Lessons are live, online and private." },
    { title: "Board-switch experience", description: "We help students move from the Maharashtra board or CBSE to IGCSE or IB expectations." },
    { title: "Rates after the trial", description: "A figure is sent only after you have sat through a real lesson." },
    { title: "Help without ghost-writing", description: "Coursework pieces come from the student; the tutor advises on drafts." },
    { title: "A Vidarbha-aware calendar", description: "Summer heat, Ganeshotsav, Diwali and Dhamma Chakra Pravartan Day are planned for." },
  ],

  tutorsIntro:
    "All teaching is live and comes from tutors in India who are chosen for the subject and syllabus. Use the trial hour to judge the teaching manner against your child's temperament.",

  faqs: [
    { question: "Do tutors visit homes in Warora?", answer: "No, nobody from IB Gram turns up at a Warora front door. Physical visits are a Gurugram and Delhi NCR service only. A Warora student sits at their own desk and meets the tutor on video, working through problems on a digital whiteboard while a notebook stays in view. Families often find the arrangement easier than expected, and the hundred-kilometre trip to Nagpur disappears altogether." },
    { question: "Is there an IB or IGCSE school in Warora?", answer: "Our checks found none in Warora or in Chandrapur city. Schools in this area follow the Maharashtra State Board or CBSE. Nagpur, roughly a hundred kilometres north, has the nearest international-curriculum schools. Because curricula and admission rules change, ask any school directly before you plan around it, since IB Gram cannot speak for what a school currently offers or whether a seat is open." },
    { question: "What does IB or IGCSE tuition cost in Warora?", answer: "The rate is not fixed, since it follows subject, level, tutor experience and weekly hours. After the trial lesson you get the figure in writing and can think it over. Higher Level sciences tend to sit above Core IGCSE subjects. An online plan also carries no fare or fuel, a real saving for a household so far from the nearest big-city centre." },
    { question: "Can a child move from the Maharashtra board to IGCSE or IB?", answer: "Yes, though timing matters. The tidiest moments are the beginning of Class 9 for IGCSE and the beginning of Class 11 for the Diploma. A switch partway through needs a catch-up plan. The first session is diagnostic: the tutor looks at recent work and lists what is missing, such as command words, practical technique or the length of written reasoning expected." },
    { question: "Can a student from Warora enter IGCSE papers as a private candidate?", answer: "Frequently, if a registered exam centre agrees to take private entries. Such centres cluster in bigger cities, Nagpur being the likeliest, and each sets its own fees and closing dates. Begin the search around six months before a series. Preparation for the papers is the tutor's part; registration, fees and the exam-day venue are the family's dealings with the centre." },
    { question: "How does the summer heat change the lesson schedule?", answer: "We shift the hours. Between April and June lessons move towards early morning or the hours after dark, and a student facing May exams should test a phone hotspot in advance. If power drops mid-session the tutor simply rebooks within the week. Shorter, more frequent lessons can also replace one long afternoon sitting when the temperature is punishing." },
    { question: "Will the tutor write my child's IA or Extended Essay?", answer: "No. Those pieces have to be the student's own work, and a tutor who wrote them would put your child at risk of a penalty. What the tutor does is explain the marking criteria, read what the student has drafted, pose questions that push the thinking further and comment on structure and clarity. The ideas and the wording stay with your child throughout." },
    { question: "Does Indian higher education accept the IB Diploma?", answer: "Broadly, yes. The Association of Indian Universities recognises it as matching Class 12, and CUET-UG is how most central universities admit. Some courses insist on particular subjects, so read the requirement before choosing Diploma options. Medicine and engineering entrance tests add their own subject rules, and these are best settled when Class 11 begins." },
    { question: "Are IB and IGCSE students eligible for JEE or NEET?", answer: "Often they are, though it hinges on subjects taken and marks earned. Both tests name the science and mathematics subjects they expect, and those rules get revised now and then. Before locking in subjects, confirm the present wording with the body that runs each exam. Advice passed along by relatives or neighbours may be out of date." },
    { question: "Which boards and programmes can your tutors handle?", answer: "Cambridge International and Pearson Edexcel at IGCSE, with AS and A Level as background reading, plus the IB at its primary, middle and diploma stages. Before any lesson the tutor asks for the exact syllabus code and the series your child will sit. Two children both doing IGCSE Mathematics can be on different specifications, so nothing is assumed." },
    { question: "How early should tuition begin?", answer: "There is no set age. Younger children can start with reading stamina and number sense. An MYP pupil often needs help once criterion-marked tasks appear, and an IGCSE or Diploma student gains most from beginning as the course does. Leaving it until six months before the papers rarely works for someone who has not yet practised the style." },
    { question: "What happens in the free trial lesson?", answer: "You send the class, present board and subject. We match a tutor and book an actual lesson at a convenient hour, commonly an evening or a weekend morning. Your child tackles a live problem and you can watch the explanation unfold. Only afterwards do you receive a written quote, and you are free to carry on or stop." },
    { question: "What if we want a different tutor?", answer: "Just say so, at any point. Fit depends on pace, tone and timetable as much as on subject knowledge, and a good teacher for one pupil can be wrong for the next. We suggest a replacement, normally within a few days, and the written lesson notes let the newcomer pick up exactly where the earlier tutor finished." },
    { question: "Can you support Marathi, Hindi and English work?", answer: "Yes. IB Marathi A and B, Hindi A and B and English A are covered, as are English and Hindi as second languages at IGCSE. Many Warora children speak Marathi or Hindi at home and learn in English, so tutors concentrate on textual analysis, timed essays and speaking practice in whichever language the paper asks for." },
    { question: "What is the simplest way to begin?", answer: "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com, giving the class, present board and the subject causing trouble. You will hear back with a tutor suggestion and a trial time. There is no form to complete and nothing to pay beforehand, so asking carries no obligation at all." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Tutors, subjects and programmes in one place." },
    { label: "All Indian cities", href: "/india/", description: "Every city where we teach online." },
    { label: "Gurugram", href: "/gurgaon/", description: "The area with in-person home visits, along with parts of Delhi NCR." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Find tutors by IB subject and level." },
    { label: "IGCSE", href: "/igcse/", description: "Cambridge and Edexcel subjects explained." },
    { label: "IB DP", href: "/programmes/dp/", description: "How the two-year Diploma is structured." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI courses in detail." },
    { label: "Contact us", href: "/contact-us/", description: "Write to us or book the free trial." },
    { label: "Nagpur", href: "/nagpur/", description: "The nearest big city with international schools." },
    { label: "Wardha", href: "/wardha/", description: "The neighbouring district city to the north-west." },
    { label: "Yavatmal", href: "/yavatmal/", description: "Another Vidarbha city served online." },
    { label: "Amravati", href: "/amravati/", description: "A larger Vidarbha centre to the west." },
  ],

  closingHeading: "Begin with a free online lesson at home in Warora",
  closingBody:
    "If you have been looking for someone who can handle an IB or IGCSE paper properly, a short message will do. Tell us the class, the board your child follows now and the subject that needs work. A tutor and a trial slot come back to you, and the rates are written down only after you have seen a lesson.",
};
