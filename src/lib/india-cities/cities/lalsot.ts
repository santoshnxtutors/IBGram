import type { CitySeoPage } from "../types";

/**
 * Lalsot (Dausa district, Rajasthan). Wikipedia and a web search show no IB or Cambridge/Edexcel school in the town
 * (RBSE and CBSE only), so stripSchools is empty and the clusters point to Jaipur and the Sohna Road belt of Gurugram,
 * reusing school names already on the jaipur, alwar and bharatpur pages and the Pathways site. Online only.
 */
export const lalsot: CitySeoPage = {
  slug: "lalsot",
  countryName: "Lalsot",
  countryNameLong: "Lalsot, Rajasthan",
  demonym: "Lalsot",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings and Sunday mornings, kept clear of May and June afternoon heat and the March board-exam weeks",
  lastUpdated: "2026-09-21",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  geo: { latitude: 26.5667, longitude: 76.3333 },
  alternateNames: ["Lalsot Dausa", "Lalsot Rajasthan", "लालसोट"],
  wikipedia: "https://en.wikipedia.org/wiki/Lalsot",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Lalsot | Online Home Tuition",
  metaDescription:
    "Private IB and IGCSE tutors for Lalsot families, live online and one to one: DP, MYP, PYP, Cambridge and Edexcel, with a free first lesson before any payment.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Lalsot",
  heroEyebrow: "IB & IGCSE TUITION FOR LALSOT, TAUGHT LIVE ONLINE",
  heroSubtitle:
    "Lalsot is a grain-market town in Dausa district, and no IB or Cambridge school there could be confirmed. Private tuition at home therefore means a live one-to-one video lesson from your own room, because our tutors do not travel to Lalsot. We teach IB DP, MYP and PYP and Cambridge or Edexcel IGCSE, timed around your family's evenings.",
  primaryKeyword: "IB and IGCSE tutors in Lalsot",
  imageAltText: "Lalsot student following a live IB Mathematics lesson on a laptop at a study table at home",
  secondaryKeywords: [
    "IB tutor Lalsot",
    "IGCSE tutor Lalsot",
    "IB home tuition Lalsot",
    "IGCSE home tuition Lalsot",
    "IB private tuition Lalsot",
    "IB Maths tutor Lalsot",
    "IGCSE Maths tutor Lalsot",
    "IB Physics tutor Lalsot",
    "IB Chemistry tutor Lalsot",
    "IB Biology tutor Lalsot",
    "IB DP tutor Lalsot",
    "IB MYP tutor Lalsot",
    "IB PYP tutor Lalsot",
    "IGCSE online tuition Lalsot",
    "online IB tutor Dausa",
    "online IGCSE tutor Rajasthan",
    "IB tutor near Jaipur",
    "Cambridge IGCSE tutor Lalsot",
    "Edexcel IGCSE tutor Lalsot",
    "IB Economics tutor Lalsot",
    "IB tutor Lalsot Dausa district",
  ],

  heroTrustPoints: [
    "Every Lalsot lesson runs live online, because tutors visit homes only in Gurugram and parts of Delhi NCR",
    "Tutors are matched to the exact IB programme or IGCSE specification code before you commit to anything",
    "First lesson free, a written note after each session and a quoted rate in writing",
    "Independent of every school, board and examining body named on this page",
    "Timetables built around Rajasthan's April session, March boards and the summer heat",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "Core & Extended", label: "IGCSE tiers prepared" },
    { value: "Free trial", label: "First lesson, no charge" },
    { value: "IST", label: "Tutors on Indian time" },
  ],

  intro: {
    heading: "IB and IGCSE study from Lalsot: what exists nearby and what does not",
    paragraphs: [
      "Lalsot is a municipal town in Dausa district, in eastern Rajasthan. The 2011 census counted 34,363 residents and a literacy rate of about 77 per cent, and the grain mandi still anchors local trade. Schools here prepare pupils for Rajasthan Board (RBSE) or CBSE papers. On the sources we could reach, we found no IB World School and no Cambridge or Edexcel IGCSE centre inside Lalsot, so this page names none.",
      "That does not mean nobody in Lalsot wants an international curriculum. Searches for IB and IGCSE tutors in Lalsot tend to come from a few situations: a child boarding at an international school elsewhere and home for the holidays, parents whose work may take them to Delhi NCR or abroad, a family planning an overseas degree that wants to begin the IGCSE route early, or a student preparing papers as a private candidate who needs a subject specialist on call in the evenings.",
      "The words home tuition deserve a straight answer. IB Gram tutors do not visit houses in Lalsot; in-person lessons run only in Gurugram and parts of Delhi NCR. What we offer here is private tuition from home in the online sense: one student, one subject specialist, a live video call, a shared digital board and a written note afterwards, all booked in Indian Standard Time.",
      "IB Gram is an independent service. We are not connected with the IB, Cambridge, Pearson or any school named on this page, and our tutors never write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework for a student. They teach, question and give feedback, and the work that is submitted stays the student's own.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Live one-to-one video lessons, with no 180 km return trip to Jaipur",
      "A free first lesson, then a written rate and weekly timetable",
      "A short written summary after every session",
      "No tutor visits in Lalsot; home visits exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "A tutor can join an IB student at any stage of the continuum. The cards below describe each programme and what shifts for a child with a Lalsot address, whether that child attends a local board school, an online school or a boarding campus elsewhere.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Learning is organised around six transdisciplinary themes and units of inquiry instead of separate textbooks. In the final year pupils carry out the PYP Exhibition, a group inquiry shared with the school community, with no external examination.",
      countryNote:
        "For a primary-age child in Lalsot, a tutor mainly builds reading in English and number sense through short, playful calls, especially if the school week follows a textbook-and-recall pattern that differs from inquiry units.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are marked against published criteria by the child's own teachers across the year. In the last year students complete a Personal Project, a self-chosen piece of independent work, and some schools add external eAssessment for the MYP certificate.",
      countryNote:
        "Students arriving from RBSE or CBSE classrooms often meet criterion-based marking for the first time. Online sessions walk through each descriptor using the student's own draft work, while the project itself is never touched by the tutor.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three or four at Higher Level, are studied beside Theory of Knowledge, a 4,000-word Extended Essay and CAS. Papers are sat in May or November, and internal assessments feed into each subject grade.",
      countryNote:
        "Because no IB school in Lalsot could be confirmed, Diploma candidates linked to the town are likely registered elsewhere. A weekly specialist for Mathematics, Physics or Chemistry gives them continuity during holidays and weeks spent at home.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three Diploma courses are paired with a career-related study, personal and professional skills, service learning, a reflective project and language development. It suits students who want a practical bridge towards work or applied degrees.",
      countryNote:
        "Very few Indian schools run the CP, and we could confirm none near Lalsot. We tutor the academic courses and the language element for a registered CP student, and we say openly when another route would suit the family better.",
    },
  ],

  subjectsIntro:
    "These IB Diploma subjects come up most when Lalsot families contact us. Before the first lesson we check the syllabus year and the level, Standard or Higher, with the school where the student is registered.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Functions, calculus, vectors and proof-style reasoning, the usual route for future engineers, physicists and economists." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Data, probability, modelling and calculator technique, suited to commerce, biology, psychology and design pathways." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics through fields and nuclear topics, with fluency in the data booklet and guidance on the internal investigation." },
    { name: "Chemistry", levels: "SL and HL", description: "Structure, energetics, kinetics and organic reasoning, with drilled habits for setting out multi-step calculations." },
    { name: "Biology", levels: "SL and HL", description: "Cells, genetics, ecology and physiology, written in the command-term language that examiners reward." },
    { name: "Economics", levels: "SL and HL", description: "Supply and demand, national income and development, with accurate diagrams and Indian examples to hand." },
    { name: "Business Management", levels: "SL and HL", description: "Marketing, operations and finance, plus reading the case material for the externally set paper." },
    { name: "Geography", levels: "SL and HL", description: "Population, resource and hazard themes, with fieldwork planning for the internal assessment." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Water, soils and land use, a natural fit for students who know a semi-arid landscape first-hand." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, data structures and programming logic, with trace tables and pseudocode practice." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Close analysis of literary and non-literary texts, and rehearsal for the individual oral." },
    { name: "Hindi B", levels: "SL and HL", description: "Reading, writing and speaking for a second-language course, useful for students who think in Hindi but must write in English elsewhere." },
    { name: "Psychology", levels: "SL and HL", description: "Biological, cognitive and sociocultural approaches, research methods and evaluative essay writing." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion of knowledge questions and planning for the exhibition, while the essay remains the student's own." },
  ],
  igcseSubjectsIntro:
    "Cambridge sets its papers in the May-June and October-November series, some subjects also have a March series for Indian centres, and Pearson Edexcel adds a January window for selected subjects. These are the courses Lalsot families ask about; we confirm the board and specification code before planning a single lesson.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core and Extended", description: "Number, algebra, geometry and statistics, with separate drilling for calculator and non-calculator papers." },
    { name: "Additional Mathematics (0606)", levels: "Single tier", description: "Extra calculus and algebra that prepares able students for IB Mathematics AA or a science stream." },
    { name: "Physics (0625 / 4PH1)", levels: "Core and Extended", description: "Motion, energy, waves, circuits and nuclear physics, with practical-skills questions." },
    { name: "Chemistry (0620 / 4CH1)", levels: "Core and Extended", description: "Particles, reactions, periodicity, quantitative work and the basics of organic chemistry." },
    { name: "Biology (0610 / 4BI1)", levels: "Core and Extended", description: "Cells, nutrition, transport, inheritance and ecology, plus reading data and graphs." },
    { name: "Economics (0455 / 4EC1)", levels: "Single tier", description: "Markets, firms, trade and government policy, taught through examples a student can recognise." },
    { name: "Business Studies (0450 / 4BS1)", levels: "Single tier", description: "Enterprise, marketing, operations and finance, with case-study reading." },
    { name: "Computer Science (0478 / 4CP0)", levels: "Single tier", description: "Computational thinking, pseudocode, databases and programming." },
    { name: "English as a First Language (0500)", levels: "Single tier", description: "Directed writing, summary and composition, where a Hindi-medium student gains most." },
    { name: "Hindi as a Second Language (0549)", levels: "Single tier", description: "Reading, writing and speaking for the Cambridge specification, with the series confirmed first." },
    { name: "Geography (0460 / 4GE1)", levels: "Single tier", description: "Physical and human themes with map skills and fieldwork-style questions." },
  ],

  regionsTitle: "Lalsot neighbourhoods and nearby places we teach online",
  tutorsIntro:
    "The tutors below teach Lalsot students over live video from elsewhere in India, on Indian time. Browse the profiles, note the programme or specification each one teaches, and use the free first lesson to see whether the style suits your child.",
  regionsIntro:
    "Any address with steady broadband or 4G can take a lesson. The places below are real points in and around Lalsot, each with a note on how the day tends to run and how we would place a session there.",
  regions: [
    { name: "Old grain market (anaj mandi) quarter", note: "The commercial heart of Lalsot and the stage for the Gangaur music contest. Trading fills the working day, so we usually place lessons after 5 pm when homes are quieter." },
    { name: "Tehsil office and Sun temple lanes", note: "An older, compact part of town with narrow streets. An online slot spares a student the walk to an evening class and fits a 6 to 8 pm timing well." },
    { name: "Bhomiya ji hill side", note: "Streets that rise towards the Shree Bhomiya ji temple on its hill inside the town. We only need Wi-Fi to reach the study room, so tell us if an upstairs room gets the stronger signal." },
    { name: "NH-11A and Ghata Ka Balaji", note: "The highway side near the Ghata Ka Balaji and Bhairon Ji Maharaj temple at the Didwana boundary. Truck noise can intrude on audio, so a headset with a microphone helps." },
    { name: "Expressway interchanges at Dungarpur and Chimanpura", note: "Settlements beside the Delhi-Mumbai Expressway interchanges near Lalsot, open since 2023. The road shortens journeys towards Sohna and Gurugram, which matters to families weighing a move to a school there." },
    { name: "Mandawari", note: "A large settlement in Lalsot tehsil, known for the Bhrammani Mata temple, a historic Shakti shrine. Festival days change household routines, and we rebuild the timetable around them." },
    { name: "Paplaj", note: "Home of the Shri Paplaj Mata temple in the Lalsot sub-district. Pilgrim days bring crowds and road delays, so a lesson held online avoids losing an evening to traffic." },
    { name: "Suratpura Dam and Binori", note: "Villages near the Suratpura Dam and the Binori Balaji temple. If your home is out here, tell us which mobile network works best at the house and the free lesson doubles as a connection test." },
    { name: "Didwana and Ramsala", note: "Villages on the Lalsot side of NH-11A, where the Balkhandi Balaji temple stands in Ramsala. In harvest weeks a family may need a lighter schedule, and we agree one in advance." },
    { name: "Khatwa and Dhelal", note: "Villages on the Aravalli fringe, one near the Jind Baba shrine and one below the hill temple of Aed Jeed Hanuman Ji. Hilly ground can mean patchy signal, so a Wi-Fi extender or spare data plan is worth having." },
  ],

  schoolClusters: [
    {
      city: "Nearby: Jaipur",
      note: "About 90 km away by way of Dausa, Jaipur is the closest city with schools that families link to IB or Cambridge programmes. At close to two hours each way a daily commute is unrealistic, so these suit boarding, relocation or a parent's move. Local options inside Lalsot are limited.",
      schools: [
        "Jayshree Periwal International School",
        "Sanskar School, Sirsi Road",
        "Mayoor School Jaipur",
        "Seedling Modern International Academy, Durgapura",
        "India International School, Mansarovar",
      ],
    },
    {
      city: "Nearby: Gurugram (Sohna Road belt)",
      note: "The Delhi-Mumbai Expressway links the Lalsot area with Sohna, the doorstep of this belt. These campuses lie far from Lalsot, so they come into play for boarding or a family move, never for a daily journey.",
      schools: ["Pathways World School, Aravali", "GD Goenka World School"],
    },
    {
      city: "In Lalsot itself: RBSE and CBSE",
      note: "We found no IB or Cambridge school named in Lalsot on the sources we could reach, and we list none. Local schools prepare pupils for the Rajasthan Board or CBSE.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "IB Gram works independently and has no tie to the IB, Cambridge, Pearson or any school on this page. Schools appear only to show where international curricula can be found near Lalsot, drawn from listings on our other city pages, and families should confirm each school's current authorisation, intake and board directly.",

  modesIntro:
    "Since no tutor visits homes in Lalsot, every format below is delivered on screen. They differ in pace and in who shares the lesson.",
  modes: [
    {
      title: "Live private lessons from your own room",
      description:
        "One student and one subject specialist on a video call, with a shared digital board and worksheets. This is the Lalsot form of home tuition: tutors do not visit homes here, and in-person visits are limited to Gurugram and parts of Delhi NCR.",
      bullets: ["Same tutor and same weekly slot in IST", "Handwritten work shared through a phone camera", "Written summary after each session"],
    },
    {
      title: "Exam-window revision blocks",
      description:
        "Short, concentrated runs of sessions placed ahead of the May and November papers or before school mocks. They suit the weeks before the heat peaks and the quieter stretch after Diwali.",
      bullets: ["Timed past-paper practice with marking", "An error log shared with parents", "Daily or alternate-day pacing agreed in writing"],
    },
    {
      title: "Paired lessons for siblings or classmates",
      description:
        "Two students on the same course and level share a tutor and a rate. It works for a brother and sister in adjacent classes or two friends preparing the same IGCSE subject.",
      bullets: ["Same programme and level required", "Each student works on their own problems", "Switch back to one-to-one whenever you wish"],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Lalsot, and where do families look instead?",
      paragraphs: [
        "No IB World School and no Cambridge or Edexcel IGCSE centre in Lalsot could be confirmed from the sources we reached. Wikipedia's entry for the town describes its grain market, temples and festivals but names no international school, and a web search for IB or IGCSE tutoring in Lalsot and Dausa returned only Delhi NCR and national listings. Until a school shows you its IB authorisation or its Cambridge or Pearson centre number, treat any claim to the contrary with caution.",
        "Jaipur is the practical reference point. Our Jaipur page lists several schools that families link with IB or Cambridge teaching, including Jayshree Periwal International School, Sanskar School on Sirsi Road and Mayoor School, and the city lies about 90 km from Lalsot by way of Dausa, close to two hours each way by road. Such a journey rules out a daily commute, so a Lalsot child who joins one of those schools boards, rents near campus or moves with a parent.",
        "The second pull is Delhi NCR. The Delhi-Mumbai Expressway has a stretch of roughly 246 km between Sohna and Lalsot that opened in 2023, with interchanges at Dungarpur and Chimanpura near the town. It makes the schools of Gurugram's Sohna Road belt, such as Pathways World School off the Gurugram-Sohna road, easier to reach for boarding or a family relocation. Each school sets its own admission rules, so ask early rather than assume.",
        "Most children who study in Lalsot itself follow RBSE or CBSE, and for them an IGCSE or IB course is a second programme laid over school life. It is studied online and, for IGCSE, examined as a private candidate through an authorised centre. That path demands steady weekly hours and honest planning, so we spell out the workload during the free trial, including the cases where a second curriculum would be unwise.",
        "Whichever route a family chooses, preparation can begin at home. A tutor who knows the specification can compare what a child has already learned with what the papers ask, and the resulting gap list is useful long before any school or exam centre is chosen.",
      ],
      bullets: [
        "No IB or Cambridge school in Lalsot could be confirmed on the sources we reached",
        "Jaipur is about 90 km away, and Gurugram's Sohna Road belt sits at the other end of the expressway",
        "Ask any school for its IB authorisation or its Cambridge or Pearson centre number",
        "Online preparation can start before the school or centre decision is made",
      ],
    },
    {
      heading: "How do RBSE, CBSE, IGCSE and the IB Diploma compare for a Lalsot student?",
      paragraphs: [
        "The boards differ most in how a question is set. RBSE papers, prepared by the Board of Secondary Education, Rajasthan at Ajmer, stay close to the prescribed textbooks. CBSE adds more application and case-based items. IGCSE and IB papers ask students to explain, evaluate and apply an idea in an unfamiliar setting, in English, with marks tied to published command terms such as describe, justify and evaluate.",
        "A Class 10 student moving from an RBSE or CBSE classroom towards IGCSE meets three changes at once. Science papers carry structured data questions and a practical-skills component. Mathematics splits into Core and Extended tiers. And written answers are marked for precision, so a right idea stated loosely can lose marks. All three are trainable, and they are the first things an online tutor maps with a new student.",
        "At Class 11 the distance grows. The Diploma asks for six subjects, a 4,000-word Extended Essay, Theory of Knowledge and CAS, with internal assessments marked at school and then moderated. Compared with a CBSE science stream it offers wider choice and less repetition, but it does not follow the JEE or NEET syllabus, so a student who wants both needs a deliberate plan rather than hope.",
        "Language adds a layer. Dhundhari is the most widely spoken local language in Lalsot, Hindi is the language of most schooling, and IB or IGCSE assessment is in English. Careful English reading practice is the bridge, so we often begin with vocabulary, summary and written-answer habits before turning to the technical subjects.",
      ],
      table: {
        caption: "Boards a Lalsot family is likely to compare",
        columns: ["Board", "Who sets it", "What the papers reward", "Common next step"],
        rows: [
          ["RBSE, Class 10 and 12", "Board of Secondary Education, Rajasthan, Ajmer", "Clear recall of textbook material in Hindi or English", "Rajasthan colleges and state or national entrance routes"],
          ["CBSE, Class 10 and 12", "Central Board of Secondary Education", "Concept plus application, with case-based items", "CUET-UG, JEE Main, NEET-UG"],
          ["Cambridge IGCSE", "Cambridge University Press & Assessment", "Structured and data-based questions, Core or Extended tier", "A Levels, IB Diploma or CBSE Class 11"],
          ["Pearson Edexcel International GCSE", "Pearson", "Papers with Foundation or Higher tiers and selected coursework options", "A Levels, IB Diploma or Class 11"],
          ["IB Diploma", "International Baccalaureate", "Analysis, extended writing and internal assessments", "Global universities, and Indian ones through AIU equivalence"],
        ],
      },
    },
    {
      heading: "What decides the cost of IB and IGCSE tutoring for a family in Lalsot?",
      paragraphs: [
        "Cost follows the tutor's experience with that exact course, the number of hours per week and the time of year, not the pin code. We publish no prices. A figure reaches you in writing before anything is booked, and the first lesson carries no charge, so you can judge the teaching before money changes hands.",
        "A tutor for IB Physics HL or Mathematics AA HL spends more time preparing than one for Class 7 Mathematics and comes from a smaller pool, so the rate differs. Rarer subjects such as Psychology, Environmental Systems or Computer Science sit differently from heavily requested ones. Weekly hours matter most: two sessions a week cost more than one, but they build a momentum that a single slot seldom does.",
        "Compare with the alternatives honestly. A monthly batch at a local coaching centre costs less per hour because many students share one teacher, yet it is built for board exams, JEE or NEET rather than IB or Cambridge mark schemes. A specialist travelling from Jaipur would add roughly 180 km of return road for each lesson, which is a cost in fuel, time and the child's energy before a page is opened.",
        "To keep spending predictable, ask for a short fixed block, perhaps six sessions aimed at one weak topic, or share a tutor with a classmate in a paired lesson. Both are quoted in writing at the start, and stopping after the trial costs nothing.",
      ],
      bullets: [
        "The rate follows the course, level and tutor's experience",
        "Hours per week and closeness to the exam change the total",
        "A written quote comes before any booking",
        "No travel cost arises, since lessons are live online",
      ],
    },
    {
      heading: "Which works better for IB or IGCSE: online home tuition, a coaching class, a local tutor or self-study?",
      paragraphs: [
        "For a student in Lalsot, a live online tutor who has taught the specific IB or IGCSE course is usually the most reachable form of expert help. Coaching centres in the region concentrate on board examinations, JEE and NEET, and local private tutors rarely work with international mark schemes, so neither is built around command terms, internal assessments or tiered papers.",
        "Kota, the Rajasthan city best known for JEE and NEET coaching, lies to the south-west and shapes local expectations: many families equate serious study with a coaching batch. That model suits entrance exams. For the IB Diploma or IGCSE it fits poorly, because assessment rewards explained reasoning and written structure rather than speed on objective questions. A student can attempt both, but one should not be expected to stand in for the other.",
        "Self-study has a real place. A disciplined Class 9 student can work through IGCSE Mathematics past papers alone and improve. What goes missing is feedback, someone to say why an answer lost two marks. Our tutors supply that loop without taking over the work.",
        "Practical issues favour online delivery in Lalsot. Hot afternoons in May and June, winter fog on the highways and the distance to Jaipur make a weekly class in another city hard to sustain. A laptop in a quiet room, a charged phone for backup data and a fixed slot solve most of it.",
      ],
      table: {
        caption: "Study options for an IB or IGCSE student in Lalsot",
        columns: ["Option", "Strength", "Limit", "Best suited to"],
        rows: [
          ["Live online one-to-one", "Course-specific tutor, timetable in IST, written notes", "Needs steady internet and a quiet room", "DP, MYP and IGCSE students at any level"],
          ["Coaching class for JEE or NEET", "Peer energy, test series, firm routine", "Not designed around IB or IGCSE assessment", "CBSE or RBSE subjects running in parallel"],
          ["Local private tutor", "A familiar face and flexible hours", "Seldom trained in international marking", "Younger pupils needing homework support"],
          ["Self-study with past papers", "Free, flexible and good for independence", "No expert correction of errors", "Confident Class 9 and 10 candidates"],
        ],
      },
    },
    {
      heading: "How do the April session, Gangaur and the summer heat shape a Lalsot study year?",
      paragraphs: [
        "A Lalsot student lives by two clocks: the local April-to-March school session with its March board exams, and the international calendar of May and November IB sessions and IGCSE series. Sensible plans put heavy IB or IGCSE work in the gaps between local peaks and respect the heat of May and June.",
        "Gangaur falls in the spring month of Chaitra, usually March or April, and in Lalsot it comes with the Hella Khyal Sangit Dangal, a competition of folk songs held over 48 continuous hours in the old grain market. For a student with March mocks, that weekend is best treated as a rest day, and we move the lesson instead of fighting the festival.",
        "Summer is the harder season. Daytime temperatures across eastern Rajasthan regularly pass 40 degrees from April to June, load-shedding or voltage dips can follow, and a study room without cooling is a poor place for a 60-minute lesson. We book mid-morning or early-evening slots rather than mid-afternoon ones, and ask families to keep a phone hotspot or inverter ready on paper days.",
        "The monsoon from July to September is gentler in this part of Rajasthan than on the coast, but heavy bursts can still disturb roads and signals. Winter brings cold mornings and fog on the highways between December and January, a good reason to hold revision weekends from home. The stretch after the March boards and before the new session is the most useful window for IGCSE and IB foundations.",
      ],
      table: {
        caption: "A Lalsot year for an IB or IGCSE student",
        columns: ["Period", "Local conditions", "Study focus"],
        rows: [
          ["April to June", "New session begins, heat builds, May IB and May-June IGCSE papers", "Final revision for sitting candidates, early starts for new Class 9 and 11 students"],
          ["July to September", "Monsoon, Teej, Raksha Bandhan, school routine settles", "Topic coverage and internal assessment planning"],
          ["October to November", "Cooler weather, Diwali, November IB and IGCSE papers", "Mock papers, error logs and short intensive blocks"],
          ["December to January", "Cold mornings, fog, winter break dates vary by school", "Weak-topic repair, tier decisions, Edexcel January window where relevant"],
          ["February to March", "Class 10 and 12 board exams, Gangaur around Chaitra", "Lighter international load while school boards take priority"],
        ],
      },
    },
    {
      heading: "Where can a Lalsot student go after IB or IGCSE: Rajasthan, the rest of India or abroad?",
      paragraphs: [
        "The Association of Indian Universities treats the IB Diploma as equal to the Class 12 certificate, which keeps Indian options open, while IGCSE is normally followed by A Levels, the IB or Class 11 before university entry. Within Rajasthan, students commonly look at the University of Rajasthan, MNIT Jaipur, IIT Jodhpur, BITS Pilani, Banasthali Vidyapith and AIIMS Jodhpur, along with private universities around Jaipur.",
        "Entrance rules need reading every year. CUET-UG accepts students from international boards under its registration terms, JEE Main and Advanced ask for particular subject combinations and equivalence, and NEET-UG sets its own requirements for Physics, Chemistry, Biology and English. We explain the logic, but the current brochure of each exam always governs, and it can change between cycles.",
        "Study abroad is the other major road. UK universities ask for predicted IB points or A Level grades, Canadian and Australian ones apply their own conversions, and US universities weigh IB or AP courses alongside SAT or ACT scores and essays. Tutors handle the subject side; counselling and applications sit with the school or an independent adviser.",
        "Lalsot's place on the expressway helps with practical planning, since visits to Jaipur or Delhi for counselling meetings and campus tours become manageable day trips. A student who prepares early, at home, arrives at those meetings with predicted grades that already look credible.",
      ],
      table: {
        caption: "Routes open to a Lalsot student after IGCSE or IB",
        columns: ["Route", "What it usually needs", "Where it leads"],
        rows: [
          ["IGCSE then A Levels", "Extended-tier results in the subjects to be continued", "UK, Canada, Australia and Indian universities that recognise A Levels"],
          ["IGCSE then IB Diploma", "A school offering the Diploma and a six-subject plan", "Global universities and AIU-recognised Indian entry"],
          ["IGCSE then CBSE Class 11", "Admission by the receiving school, often with a bridging plan", "CUET-UG, JEE Main, NEET-UG"],
          ["IB Diploma", "Predicted and final points, subject prerequisites", "Rajasthan and national universities, and study abroad"],
        ],
      },
    },
    {
      heading: "How are IB Mathematics AA and AI, Physics, Chemistry and Biology taught on a video call?",
      paragraphs: [
        "The tutor writes and draws on a shared digital board while the student solves problems aloud, and the student then receives a marked set to redo before the next session. Mathematics AA suits students heading for engineering, physical science or economics; AI suits those aiming at business, biology, psychology or design, where statistics and modelling matter more.",
        "Both Mathematics courses have a calculator paper and a non-calculator paper, and Higher Level adds a third paper with extended problems. The internal assessment is the Mathematical Exploration, a written investigation of a topic the student chooses. The tutor can talk through how to find a workable topic and how the criteria are applied, but the exploration is written by the student alone.",
        "In Physics we spend sessions on units, uncertainty and the data booklet; in Chemistry on stoichiometry layout and organic pathways; in Biology on precise vocabulary and labelled diagrams. For the internal investigation, tutors discuss research-question design, variables and error treatment. The experiment, the data and the write-up remain entirely the student's own.",
        "Students far from a good laboratory often worry about practicals. Simulations and video demonstrations can fill gaps for practice, but the registering school remains responsible for the laboratory work that counts towards the internal assessment, and we say so plainly. What helps most is routine: the same tutor, the same two weekly slots and one error log that travels from lesson to lesson.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a Lalsot student choose tiers and subjects?",
      paragraphs: [
        "Core papers cap the grade at C, while Extended papers reach A*, so Extended is the sensible choice for any student who may later study IB Mathematics, the sciences or economics. Core suits a student who needs confidence and a firm pass in a subject that is not central to future plans.",
        "A typical package holds English, Mathematics, two or three sciences, a language such as Hindi and one or two electives like Economics, Business Studies, Computer Science or Geography. Cambridge's Environmental Management also suits students interested in the semi-arid landscape around them, with water use and land degradation close to daily life.",
        "Cambridge and Pearson Edexcel are not interchangeable. Papers, coursework options and tier structures differ, so we confirm the specification code before drafting a revision plan. Edexcel Mathematics A, for example, is tiered as Foundation and Higher, while Cambridge uses Core and Extended.",
        "Private candidates need an authorised exam centre to enter them, which in practice usually means a centre in Jaipur or Delhi NCR. We teach and test the content but never register candidates. Ask the centre about practical papers, deadlines and fees well before the series, because early closing dates catch many families out.",
      ],
    },
  ],

  process: [
    { title: "Share the course", description: "Send the programme, subject, level, school and exam series by WhatsApp or email, with the topics that feel hardest." },
    { title: "Meet the proposed tutor", description: "We suggest a tutor who has taught that course and share a short profile with weekly slots in IST." },
    { title: "Take the free lesson", description: "The first session uses your child's own homework or a past paper, so pace and style are visible at once." },
    { title: "Confirm terms in writing", description: "If you wish to carry on, the rate, weekly hours and cancellation terms are written down before any payment." },
    { title: "Review the notes", description: "A summary follows every lesson, and a change of tutor is easy to request if the fit is not right." },
  ],
  whyPoints: [
    { title: "Matched on the course, not the label", description: "A tutor is chosen for the exact programme and level, such as IB Chemistry SL or Cambridge IGCSE Extended Mathematics, and introduced before you commit." },
    { title: "Plain talk about format", description: "Lalsot lessons are online. Home visits exist only in Gurugram and parts of Delhi NCR, and we do not pretend otherwise." },
    { title: "Coaching that respects the rules", description: "Tutors teach, question and review drafts, yet never write an IA, Extended Essay, TOK essay or coursework." },
    { title: "A timetable for eastern Rajasthan", description: "Slots avoid the afternoon heat and board-exam weeks, and move when a festival or a power cut gets in the way." },
    { title: "No 180 km return trip", description: "A lesson with a specialist costs an hour of attention, not a day on the road to Jaipur." },
    { title: "Notes parents can use", description: "After each session a short written summary lists what was covered and what to practise next." },
  ],

  faqs: [
    { question: "Can I find an IB tutor in Lalsot?", answer: "Yes, as a live online tutor, though not as someone who comes to your door. IB Gram tutors teach from elsewhere in India over video and are matched to your child's programme, subject and level. Send the course, school and exam session on WhatsApp and we suggest a tutor and a free trial time in Indian Standard Time, usually within a few days." },
    { question: "Will a tutor visit our house in Lalsot?", answer: "No, tutors do not visit homes in Lalsot. In-person home tuition runs only in Gurugram and parts of Delhi NCR. For a Lalsot family, home tuition means an online lesson taken from your own room, with one tutor, a shared whiteboard and a short written note afterwards. Many parents find this practical given the distance to Jaipur and the summer heat." },
    { question: "Is there an IB or Cambridge school in Lalsot?", answer: "We could not confirm one. Wikipedia's account of Lalsot lists temples, festivals and a grain market but no international school, and web searches for IB or IGCSE providers here returned nothing local. The nearest confirmed options are in Jaipur and the Sohna Road belt of Gurugram. Ask any school for its IB authorisation or Cambridge centre number before relying on a prospectus." },
    { question: "How much do IB or IGCSE tutors charge for Lalsot students?", answer: "We do not publish prices, because the rate follows the course and the tutor rather than the town. You receive a figure in writing before booking. The main drivers are subject and level, weekly hours and how close the exam is. Lessons run online, so there is no travel charge, and the first lesson is free so you can judge the teaching before paying." },
    { question: "What happens if the power fails or the signal drops during a lesson?", answer: "We reschedule without penalty and suggest simple backups. A phone hotspot, a charged laptop and a router on an inverter handle most outages, and summer load-shedding and monsoon storms are the usual causes in eastern Rajasthan. Tell us about weak spots in your area in advance, and we place important sessions, such as mock-paper reviews, when your connection is steadiest." },
    { question: "Can my child take IGCSE or IB lessons while studying at an RBSE or CBSE school in Lalsot?", answer: "Yes, though it is a heavy second workload and needs a plan. Many students keep the local timetable and add two online lessons a week, sitting IGCSE papers as private candidates. The risk is overload around the March boards. We map weekly hours with parents, keep international work light in board weeks and tell you honestly if the combination looks too much." },
    { question: "Does the IB Diploma work for Rajasthan universities and entrance exams?", answer: "In most cases yes. The Association of Indian Universities treats the IB Diploma as equal to Class 12, so Rajasthan and national universities generally accept it. Entrance exams such as CUET-UG, JEE Main and NEET-UG each carry their own subject and equivalence rules, which change by year. Read the current information bulletin for every exam and every university before choosing subjects." },
    { question: "Will a tutor write my child's Internal Assessment or Extended Essay?", answer: "No. Our tutors never write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework. They explain the criteria, ask questions, review drafts for clarity and teach the subject. The submitted work must be the student's own, which protects both the student and the school, and that is the safe kind of help a tutor can give." },
    { question: "What is the difference between IGCSE and the IB Diploma?", answer: "IGCSE is usually taken at the end of Class 10 and the IB Diploma over Classes 11 and 12. IGCSE gives subject-by-subject certificates, while the Diploma is a six-subject programme with Theory of Knowledge, an Extended Essay and CAS. Many students sit IGCSE first and then choose the Diploma, A Levels or CBSE Class 11. Both ask for explained, English-medium answers." },
    { question: "Should my child take IGCSE Core or Extended Mathematics?", answer: "Extended, if the student may study IB Mathematics, sciences or economics later. Core papers can only reach grade C, while Extended papers reach A*. A student who finds Class 9 algebra shaky can begin Extended preparation and move to Core after an honest mid-year mock. Edexcel uses Foundation and Higher tiers in the same spirit, so we confirm the board first." },
    { question: "Can a private candidate from Lalsot sit IGCSE papers?", answer: "Often yes, through an authorised exam centre that accepts private entries. We prepare the student for the content, and we do not register candidates. Centres set early deadlines and their own fees, and the nearest are likely to be in Jaipur or Delhi NCR. Ask about practical papers or coursework before lessons begin, because some subjects are harder to arrange than others." },
    { question: "Which exam sessions should a Lalsot student plan for?", answer: "IB Diploma papers are sat in May or November, depending on the registering school. Cambridge IGCSE runs in May-June and October-November, with some subjects offering a March series for Indian centres, and Pearson Edexcel adds January for selected subjects. We ask for the exact series when we first speak and then plan backwards in six-week blocks." },
    { question: "Do you teach younger children in the IB Primary and Middle Years?", answer: "Yes. PYP lessons are short, playful and mostly about reading in English and number fluency, while MYP lessons follow the school's criteria and unit plans. A parent usually sits nearby for the first few sessions. These stages have no external exams for the PYP, so the aim is confidence and steady habits rather than marks." },
    { question: "How quickly can you match a tutor?", answer: "Usually within a few days. Once we know the course, level, school and your free hours, we propose a tutor who has taught that course. Mathematics and Physics match fastest, while rarer subjects such as Psychology or Computer Science HL can take longer. If no suitable tutor is free, we say so instead of assigning someone unsuitable." },
    { question: "Is the first lesson really free?", answer: "Yes. The first lesson is free and uses your child's own material, not a sales script. Afterwards we send the weekly timetable and a rate in writing, and nothing is charged until you agree. If the fit is wrong you can ask for a different tutor, and you owe nothing for stopping after the trial." },
    { question: "What internet and equipment do we need?", answer: "A laptop or tablet, a headset and a steady broadband or 4G connection are enough. A phone camera pointed at handwritten work lets the tutor see each step. We test audio and video in the trial, and we advise a backup hotspot on exam-paper days. Tell us if your area has patchy signal so we can plan around it." },
    { question: "How do I start from Lalsot?", answer: "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with your child's class, programme or board, subjects and exam session. We reply with a suggested tutor and a trial time in IST, and you decide after the lesson whether to continue. Asking costs nothing, and there is no obligation to book." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online lessons work for families in towns and cities that have no IB school." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The area where in-person home visits run alongside online lessons." },
    { label: "IB and IGCSE tutors in Jaipur", href: "/jaipur/", description: "The nearest large city, with schools linked to IB and Cambridge teaching." },
    { label: "IB and IGCSE tutors in Alwar", href: "/alwar/", description: "A neighbouring Rajasthan town on the Delhi side, also taught online." },
    { label: "IB and IGCSE tutors in Sawai Madhopur", href: "/sawai-madhopur/", description: "A town to the south of Dausa district with the same online service." },
    { label: "IB and IGCSE tutors in Bharatpur", href: "/bharatpur/", description: "Eastern Rajasthan's gateway towards Agra, covered by live lessons." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "How tutors are chosen and matched to each programme." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject packages for Class 9 and 10." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, core requirements and assessment explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, projects and where tutoring helps." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led learning for younger children." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI compared, paper by paper." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject, programme and availability." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "A short message gets you a tutor match and a free trial slot." },
  ],

  closingHeading: "Start a free IB or IGCSE lesson from home in Lalsot",
  closingBody:
    "Tell us the programme, subject and exam series, and we will propose a tutor who has taught that course. The first lesson is free, terms follow in writing, and nobody needs to drive to Jaipur. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com.",
};
