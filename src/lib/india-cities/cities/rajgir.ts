import type { CitySeoPage } from "../types";

/**
 * Rajgir: no school in the town or Nalanda district could be confirmed as an IB World School or a
 * Cambridge or Edexcel centre, so stripSchools is empty. Clusters name Kolkata, Delhi NCR and Mussoorie,
 * reusing school names from the published Patna and Gaya pages, and say plainly that local choice is
 * very limited. Local facts come from the Wikipedia articles on Rajgir and Nalanda University.
 */
export const rajgir: CitySeoPage = {
  slug: "rajgir",
  countryName: "Rajgir",
  countryNameLong: "Rajgir, Nalanda district, Bihar",
  demonym: "Rajgir",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late afternoons and evenings after school and any coaching class, with weekend mornings kept free for longer sessions",
  lastUpdated: "2026-09-21",
  state: "Bihar",
  stateCode: "IN-BR",
  geo: { latitude: 25.03, longitude: 85.42 },
  wikipedia: "https://en.wikipedia.org/wiki/Rajgir",
  alternateNames: ["Rajagriha", "Rajgriha", "Rajgir Nalanda", "Rajgir Bihar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Rajgir | Online Private Tuition at Home",
  metaDescription:
    "One-to-one IB and IGCSE lessons for Rajgir students, taught live online by India-based tutors, with written notes after each class and a free trial first.",
  h1: "Private Home Tuition for IB and IGCSE Students in Rajgir",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION FOR RAJGIR AND NALANDA",
  heroSubtitle:
    "Home tuition for IB and IGCSE students in Rajgir, given as live private lessons on a laptop at the family table. Patna is about 110 km away and the nearest IB schools are further still, so a tutor who already teaches your child's syllabus matters more here than in a big city. Share the programme, the subject and the exam session, and we arrange a matched tutor and a free first lesson.",
  primaryKeyword: "IB and IGCSE tutors in Rajgir",
  imageAltText: "A Rajgir student in Bihar following an IGCSE Physics lesson on a laptop with a live online tutor",
  secondaryKeywords: [
    "IB tutor in Rajgir",
    "IGCSE tutor in Rajgir",
    "IB home tuition Rajgir",
    "IGCSE home tuition Rajgir",
    "IB private tuition Rajgir",
    "IB Maths tutor Rajgir",
    "IGCSE Maths tutor Rajgir",
    "IB Physics tutor Rajgir",
    "IB Chemistry tutor Rajgir",
    "IB Biology tutor Rajgir",
    "IB DP tutor Rajgir",
    "IB MYP tutor Rajgir",
    "IB PYP tutor Rajgir",
    "IGCSE online tuition Rajgir",
    "IB tutor Nalanda",
    "IGCSE tutor Bihar Sharif",
    "IB home tuition Nalanda district",
    "online IB classes Rajgir Bihar",
    "IB tuition near Rajagriha",
  ],

  heroTrustPoints: [
    "Live private lessons with a tutor who has taught your exact syllabus",
    "Lessons kept online, because home visits exist only in Gurugram and parts of Delhi NCR",
    "Timings built around Bihar school hours, summer heat and the Chhath break",
    "A free first lesson and a written summary after every class",
    "Rates sent in writing before you commit, and a new tutor if the match is poor",
  ],
  heroStats: [
    { value: "IST", label: "Same clock as Rajgir" },
    { value: "PYP to DP", label: "All IB stages covered" },
    { value: "Free trial", label: "First lesson on us" },
    { value: "May & Nov", label: "IB exam windows planned for" },
  ],

  intro: {
    heading: "A tourism and university town with no international school of its own",
    paragraphs: [
      "Rajgir is the old Rajagriha, the first capital of Magadha, ringed by hills that Buddhists and Jains both hold sacred. About 41,600 people lived in the town at the 2011 census, and the local economy leans on pilgrims and visitors, with farming around it. What Rajgir does not have, as far as we could confirm, is a school offering the IB or a Cambridge or Pearson Edexcel IGCSE. Most children here study for the Bihar Board matriculation and intermediate examinations or for CBSE, then look to Patna or to the coaching hubs for JEE and NEET. A smaller group of families wants something different: the IB Diploma, the MYP, or an IGCSE route that keeps universities abroad within reach.",
      "These families are easy to picture. Some work at the Bihar Police Academy, the CRPF recruit training centre or the ordnance factory, where postings change. Some teach or study at Nalanda University, whose large new campus opened beside the town in 2024 and which draws students and academics from several countries. Others run hotels and travel businesses on the Buddhist and Jain circuits and meet overseas guests every day. Others still have a sister in Delhi or a cousin in Toronto and quietly plan a foreign degree. For each of them, private tuition from a specialist is worth more than a general class twenty minutes away.",
      "That is the gap our IB and IGCSE tutors in Rajgir are meant to close, without anyone leaving town. Lessons are live and one-to-one. The tutor teaches from elsewhere in India on Indian time, and the student works from home with a laptop, a notebook and a connection that holds. The page below explains the schools within reach, the boards, the rate, the calendar, the university routes and the subject teaching. IB Gram is independent of the IB, Cambridge, Pearson and every school named here, and our tutors never write an internal assessment, Extended Essay or piece of coursework for a student.",
    ],
  },

  programmesIntro:
    "In Rajgir the IB tends to arrive through a transfer, a move to Delhi or Kolkata, or a plan for study abroad. The programme notes below describe what a tutor does at each stage when the school itself is far away.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Inquiry units that build towards a final Exhibition. Tutoring is short and gentle: reading, number fluency, writing in sentences and the habit of explaining why an answer is right.",
      countryNote:
        "We know of no PYP classroom in Rajgir, so a child on this programme has usually moved here or is preparing to leave. Short lessons keep the inquiry style familiar through the change.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups assessed against criteria, ending in the Personal Project. A tutor teaches students to decode a criterion and build an answer that earns each mark band.",
      countryNote:
        "A child coming from a Hindi-medium or Bihar Board background meets criterion-based writing for the first time. Lessons go slowly through model answers and the student's own class work.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects at Standard or Higher Level, with Theory of Knowledge, the Extended Essay and CAS. Tutors work on examined papers and on assessment method, and leave the writing to the student.",
      countryNote:
        "A Diploma student linked to Rajgir is usually boarding elsewhere or living with relatives, so lessons fit hostel hours, train journeys and holiday weeks at home.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller set of Diploma courses combined with career-related study and a reflective project. Tutors support the academic courses and the English that goes with them.",
      countryNote:
        "CP is almost unknown in Bihar. We take it on request and pair the student with a tutor for the specific courses chosen.",
    },
  ],

  subjectsIntro:
    "Each subject tutor is picked for the exact course and level, and for the patience to teach a student who has not yet met an IB command term.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Functions, calculus, sequences and proof-style reasoning, with Paper 1 done without a calculator and HL extensions worked through slowly." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Modelling, statistics and technology-assisted problem solving, including graphing-calculator routines for Paper 2." },
    { name: "Physics", levels: "SL / HL", description: "From mechanics to fields and nuclear topics, with practice on units, uncertainty and data-based questions." },
    { name: "Chemistry", levels: "SL / HL", description: "Quantitative chemistry, energetics, kinetics and organic routes, taught through the calculations that lose students marks." },
    { name: "Biology", levels: "SL / HL", description: "Cells, genetics, physiology and ecology, with weight on precise terminology and reading experimental data." },
    { name: "Economics", levels: "SL / HL", description: "Markets, macroeconomic policy and trade, using tourism, farm prices and Bihar's growth story for worked examples." },
    { name: "Business Management", levels: "SL / HL", description: "Case-based analysis of strategy, finance and operations, including how to build the research project on a real local business." },
    { name: "Geography", levels: "SL / HL", description: "Rivers, climate hazards, urban change and development, with fieldwork-style data questions." },
    { name: "Computer Science", levels: "SL / HL", description: "Computational thinking, algorithms, data structures and the pseudocode style used in the papers." },
    { name: "History", levels: "SL / HL", description: "Source analysis and essay planning, useful for students who grow up beside Magadha's ancient sites." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis, Paper 1 commentary and the structure of a comparative essay." },
    { name: "Hindi B", levels: "SL / HL", description: "Speaking, reading and writing work for students who study Hindi as an additional language." },
    { name: "Theory of Knowledge", levels: "Core", description: "Talking through knowledge questions and the exhibition, with the essay left to the student alone." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE are separate syllabuses, so a tutor is matched by board as well as by subject, and by the tier the student has been entered for.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, shape, trigonometry and data handling, with timed past papers from the start." },
    { name: "Physics", levels: "Core / Extended", description: "Motion, energy, waves, electricity and atoms, along with the practical or alternative-to-practical paper." },
    { name: "Chemistry", levels: "Core / Extended", description: "Atoms and bonding, the mole, rates, electrolysis and the basics of organic chemistry." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, nutrition, transport, inheritance and ecosystems, with data and diagram questions." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For students taking the double-award science route in one combined syllabus." },
    { name: "English as a Second Language", levels: "Core / Extended", description: "Reading, directed writing and speaking practice for students who use Hindi or Magahi at home." },
    { name: "English First Language", levels: "Single tier", description: "Argument, descriptive and narrative writing, and analysis of unseen passages." },
    { name: "Computer Science", levels: "Single tier", description: "Algorithms, programming constructs, data storage and networks." },
    { name: "Economics", levels: "Single tier", description: "Basic economic problems, the market system, government policy and international trade." },
    { name: "Business Studies", levels: "Single tier", description: "Enterprise, marketing, finance and the case-study paper." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Comprehension, composition and conversation practice." },
  ],

  regionsTitle: "Rajgir town, the pilgrim hills and the villages of the Nalanda belt",
  regionsIntro:
    "Students live in a small town and the villages around it, between the hills and the Nalanda road. Tourist seasons, government campuses and the long drive to Patna all shape when an evening lesson is practical.",
  regions: [
    { name: "Rajgir town and the Brahmakund springs", note: "The compact old town around the hot springs, where hotels, shops and guesthouses keep irregular hours. Households here often prefer a fixed late-evening slot after the day's visitors have gone." },
    { name: "Venu Vana and the Ghora Katora road", note: "The wooded park with a Japanese temple beside it, and the road toward Ghora Katora Lake. Weekend and holiday visitors crowd this stretch, so lessons for nearby families sit on weekday evenings." },
    { name: "Ratnagiri and the Vishwa Shanti Stupa", note: "The hill that carries the peace pagoda built in 1969. Pilgrim groups arrive in the cooler months, so lessons here avoid festival days and the hours when tour buses come and go." },
    { name: "Griddhakuta and the Jain hill temples", note: "The Vulture Peak side and the temples spread across five hills. Mornings are busy with visitors and evenings are quiet, which is when a lesson is easiest to hold." },
    { name: "The Nalanda University campus side", note: "The campus opened in June 2024 on the edge of Rajgir. The university teaches postgraduates only, but staff families who arrive from other states are among those likeliest to ask about an international syllabus." },
    { name: "Bihar Police Academy and CRPF training centre", note: "Two government training campuses located in Rajgir. Families on postings that change every few years value a tutor whose lessons move with them, which online tuition allows." },
    { name: "Rajgir Sports Complex and Film City", note: "Newer developments, with a cricket stadium under construction and a 20-acre film city the state has been building since 2017. Site traffic can slow local roads, so we avoid tight handovers between school and lesson." },
    { name: "Pawapuri, 19 km away", note: "The Jain pilgrimage village linked with Mahavira's nirvana. Children travel to Rajgir or Bihar Sharif for school, so lessons start after the bus ride home." },
    { name: "Nalanda ruins, 12 km away", note: "The ruins of the ancient monastic university and the villages around them. Families here depend on the Rajgir road for schooling, and weekday evenings are the dependable slot." },
    { name: "Bihar Sharif, 25 km away", note: "The district headquarters, with a wider run of schools and coaching classes than Rajgir. A family that divides its week between the two towns can book lessons from whichever house it is in." },
    { name: "Giriyak, Islampur and the State Highway 71 towns", note: "Towns on the road toward Jehanabad. Bus timetables decide the school day, and a spare mobile connection is useful when the home broadband drops." },
  ],

  schoolClusters: [
    {
      city: "Local: Rajgir and Nalanda district",
      note: "We could not confirm any school in Rajgir or the wider Nalanda district as an authorised IB World School or a listed Cambridge or Edexcel centre. Local schools follow the Bihar Board or CBSE, so the honest position is that choice here is very limited.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The usual eastern pointer for families who want a confirmed IB or Cambridge school, reachable by overnight train. Some Bihar families board a child there, and our tutors keep teaching the same syllabus online during holidays.",
      schools: ["Calcutta International School", "The Heritage School, Kolkata"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Rajgir has a direct express train to New Delhi, which is why the capital region is a frequent second home. A family that relocates to Gurugram or parts of Delhi NCR can also use our in-person home tuition there.",
      schools: ["The British School, New Delhi", "Pathways World School, Gurugram"],
    },
    {
      city: "Nearby: Mussoorie",
      note: "A hill boarding school with a long record of taking students from eastern India, and an authorised IB World School for the MYP and the Diploma.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],
  schoolDisclaimer:
    "School names appear only to show where the nearest IB and Cambridge options are for a Rajgir family. We run an independent tutoring service with no connection to those schools, the IB, Cambridge or Pearson, and admissions are decided by each school alone.",

  modesIntro:
    "Tutors do not come to a house in Rajgir, since home visits run only in Gurugram and parts of Delhi NCR. All three formats are therefore live, private and online, and each is scheduled around a Bihar school day.",
  modes: [
    {
      title: "Steady weekly lessons",
      description: "One regular slot with one tutor who knows your child's board and level, taught over video at the family's own table.",
      bullets: ["Shared screen for worked problems", "Past papers reviewed line by line", "A written summary after every session"],
    },
    {
      title: "Exam-season sprints",
      description: "Concentrated lessons in the weeks before school terminals, mock papers and the May or November sessions.",
      bullets: ["Timed papers marked against board criteria", "Command-term and mark-scheme practice", "A reserve slot if heat or a power cut interrupts"],
    },
    {
      title: "Bridging a change of board",
      description: "A planned run of lessons for a child moving from Bihar Board or CBSE into an IB or IGCSE classroom elsewhere.",
      bullets: ["An early check on gaps in each subject", "Plain explanations of new paper styles", "A move to ordinary weekly lessons once settled"],
    },
  ],

  tutorsIntro:
    "Tutors teach from different cities on Indian Standard Time, so afternoon and evening lessons in Rajgir suit their working day as well. You see a short profile before the first lesson.",

  sections: [
    {
      heading: "Which international schools can a Rajgir family realistically reach?",
      paragraphs: [
        "Fewer than you might hope. In the sources we checked, no school in Rajgir or the Nalanda district appears as an authorised IB World School or as a Cambridge or Pearson Edexcel centre, and the schools we could identify follow the Bihar Board or CBSE. Patna lies about 110 km away by road and Gaya about 78 km, and we could not confirm an IB or Cambridge school in either. A family wanting an international syllabus has to look well beyond Bihar.",
        "The nearest confirmed options sit in Kolkata, which suits families comfortable with an overnight rail journey, and in Delhi NCR, which Rajgir reaches by a direct express train. Calcutta International School and The Heritage School in Kolkata, and The British School in New Delhi and Pathways World School in Gurugram, are the kind of campuses parents ask about. Woodstock School in Mussoorie, an authorised IB World School, is the long-standing hill boarding choice.",
        "Distance changes how the programme works. A child boarding in Kolkata or Mussoorie goes home for Durga Puja, Diwali or Chhath and for the summer, and those weeks are the natural windows for catch-up lessons. A child who stays in Rajgir while preparing for a move needs a tutor who can teach the new syllabus before the first day, not after it.",
        "The families who think about all this are a varied lot: instructors and officers at the training campuses, university staff from other states, hotel and tourism owners with foreign guests, and relatives of professionals working in Delhi, the Gulf or the West. None forms a crowd in any classroom, which is why a tutor who knows your child's exact board matters more than a group class built around someone else's.",
        "If a Rajgir school announces IB candidacy or a Cambridge licence, tell us the subject list and we will start teaching to that syllabus within a week.",
      ],
    },
    {
      heading: "Bihar Board, CBSE, ICSE, IB and IGCSE side by side for a student in Rajgir",
      paragraphs: [
        "The Bihar School Examination Board runs the matriculation at the end of Class 10 and the intermediate at the end of Class 12, with written papers in February and results in the spring. Hindi-medium teaching is the norm, and many households speak Magahi or Hindi at home. Bihar's engineering and medical seats are filled through state counselling alongside the national entrance tests, and coaching for those tests is a big local industry.",
        "CBSE is more common in the private schools of Patna, Gaya and Bihar Sharif. It teaches in English or Hindi and follows the JEE and NEET syllabuses closely. ICSE and ISC schools are fewer, with a broader reading list and longer written answers, which is useful preparation for the extended writing the IB demands.",
        "The IB is built differently. Marks go to command terms, reasoning from unfamiliar data and structured arguments, with an essay, a knowledge course and a service strand added on top. IGCSE sits between the Indian boards and the IB: a stated syllabus, tiered papers and a deep archive of past questions. A student leaving the Bihar Board for IGCSE usually finds the content familiar but the paper style strange.",
        "The table below shows how each board looks from a Rajgir household, with the last column showing how much specialist teaching you can find nearby.",
      ],
      table: {
        caption: "The main boards seen from Rajgir",
        columns: ["Board", "How it is assessed", "Usual language of teaching", "Common exit routes", "Specialist tutors near Rajgir"],
        rows: [
          ["Bihar Board matric and intermediate", "Written annual papers each February", "Hindi, sometimes English", "State counselling, JEE, NEET, local colleges", "Plentiful, mostly in groups"],
          ["CBSE", "Class 10 and 12 board papers", "English or Hindi", "JEE Main, NEET-UG, CUET-UG", "Strong coaching in Patna and Gaya"],
          ["ICSE and ISC", "Broad syllabus, essay-leaning papers", "English", "CUET-UG and colleges across India", "A few in Patna"],
          ["Cambridge or Edexcel IGCSE", "Tiered subject papers in fixed series", "English", "IB, A Level or an Indian Class 11", "Almost none nearby"],
          ["IB Diploma", "Final exams, internal assessments, essay and CAS", "English", "AIU equivalence, CUET-UG, study abroad", "Almost none in Bihar"],
        ],
      },
    },
    {
      heading: "What shapes the cost of IB and IGCSE tuition in Rajgir?",
      paragraphs: [
        "Several things set the rate and none of them is a flat tariff, so we publish no prices. What we do is write the rate down for you before the first lesson is booked, which means nothing is decided in a rushed phone call.",
        "Level and subject come first. Higher Level Diploma Physics or Mathematics asks for a tutor with real depth and long marking experience, and costs more than helping a Class 6 student with MYP science. A tutor for Computer Science HL, Further Mathematics or a language is harder to find than one for IGCSE English, and the rate reflects scarcity.",
        "Time on the calendar matters too. Three lessons a week for a month before the November session is a different commitment from one lesson a week across a school year. Two siblings, a pause for Chhath or Durga Puja, or a switch of subject mid-year can all be built into the plan.",
        "A family in Rajgir should also count the alternative honestly. A weekly class in Patna means roughly 110 km each way by road, fuel or fares and most of a day, repeated every week through a school term. A lesson at home removes that cost, so the tutor's rate is only one part of the comparison.",
      ],
      bullets: [
        "Programme and level, from MYP to Diploma Higher Level",
        "How few qualified tutors teach the subject",
        "Lessons per week and the length of the plan",
        "A steady term or a short exam-season block",
      ],
    },
    {
      heading: "Tuition online, in Patna, with a local tutor or alone: how do they compare?",
      paragraphs: [
        "A family seeking IB and IGCSE tutors in Rajgir can choose from four routes, and many mix two. Online lessons give specialist teaching without the road. A centre in Patna gives a classroom but costs a day. A local tutor in Rajgir or Bihar Sharif is close and trusted yet seldom trained on international papers. Self-study is free and flexible, but only a few students manage it alone.",
        "The right mix depends on the subject. Mathematics and the sciences reward a tutor who can mark working line by line, and that is hard to find locally. Languages and humanities can lean more on reading and practice at home, with a tutor checking essays and speaking. Whatever the mix, the student's own practice does the real work.",
        "Heat and monsoon rain make the road to Patna less appealing for part of the year, and that counts when a plan has to survive a whole term.",
      ],
      table: {
        caption: "Ways to get IB or IGCSE help from Rajgir",
        columns: ["Route", "Subject depth", "Travel", "Timetable", "Suits"],
        rows: [
          ["Live private lessons online", "Specialist, matched to the syllabus", "None", "Evenings and weekends, easy to shift", "Any IB or IGCSE subject"],
          ["Centre or class in Patna", "Good, but paced for a group", "About 110 km each way", "Fixed batch hours", "Families already based in Patna"],
          ["Local tutor in Rajgir or Bihar Sharif", "Mostly Bihar Board and CBSE", "Short", "Flexible", "Revision of familiar content"],
          ["Self-study with past papers", "Depends on the student", "None", "Complete freedom", "Disciplined, self-driven learners"],
          ["Boarding school tutoring in Kolkata or Mussoorie", "Varies by school", "Hostel life", "Set by the school", "Students already boarding"],
        ],
      },
    },
    {
      heading: "A Rajgir school year: heat, monsoon, Chhath and the exam sessions",
      paragraphs: [
        "Bihar's school session begins in April and runs to March, and the summer break falls in June, when the heat is at its worst. Rajgir can touch 44 degrees in summer and drop near 6 degrees on winter nights, so both extremes affect when a child can concentrate. Monsoon rain from mid-June to mid-September adds humidity and the occasional power cut.",
        "The IB Diploma is examined in May and November, with results in early July and early January. Cambridge arranges IGCSE papers in a February and March series, a May and June series and an October and November series, while Pearson Edexcel International GCSE has a January sitting, a summer sitting and an autumn one. The school or exam centre decides which series a student sits, and lessons are planned backwards from that date.",
        "Festivals shape the rest. Durga Puja and Diwali fall close together in autumn, and Chhath Puja, observed over several days with fasting and river or pond worship, empties many Bihari households of routine for a week. Makar Sankranti brings a fair to Rajgir in mid-January, and the Rajgir Mahotsav draws crowds in the cooler season. Every few years the extra Hindu month brings the Purushottam Maas Mela and a large pilgrim influx.",
        "None of this stops study. It changes the best hours, which is why we ask families for their calendar before fixing a weekly slot.",
      ],
      table: {
        caption: "Calendar pressure points for a Rajgir student",
        columns: ["Period", "What is happening", "Effect on study", "How tutoring adapts"],
        rows: [
          ["April to May", "New Bihar session starts, IB May exams, heat builds toward 44 degrees", "Fatigue and long afternoons", "Early-evening lessons, shorter and sharper"],
          ["June to July", "Summer break, monsoon begins, IB results in July", "Disrupted routine", "Foundation lessons and a plan for the new year"],
          ["August to September", "Humid monsoon weeks, terminal exams in many schools", "Power cuts and fatigue", "Backup connection and flexible slots"],
          ["October to November", "Durga Puja, Diwali, Chhath, IB and IGCSE November series", "Festival gaps beside exam pressure", "Compressed revision with spare slots"],
          ["December to January", "Cold and fog, Makar Sankranti fair, IB January results", "Late starts and cold mornings", "Afternoon sessions and longer weekend blocks"],
          ["February to March", "Bihar Board and CBSE papers, IGCSE February and March series", "Heavy exam load", "Mock papers and focused topic fixes"],
        ],
      },
    },
    {
      heading: "After school: where do IB and IGCSE students from Rajgir go?",
      paragraphs: [
        "Rajgir's best-known university cannot take school-leavers. Nalanda University offers only Master's and PhD degrees, so it is a destination after a first degree, not at eighteen. For undergraduate study, IB Diploma holders look to Indian universities, to colleges abroad, or to professional courses reached through entrance tests.",
        "In India, the Association of Indian Universities issues an equivalence certificate for the IB Diploma that most universities ask for, and CUET-UG is the common gateway to central universities, including those in Delhi. In Bihar, students know Patna University, IIT Patna, NIT Patna, AIIMS Patna and Chanakya National Law University, while IIM Bodh Gaya runs an integrated management programme after Class 12 whose entrance route should be checked each year.",
        "Eligibility for JEE Main, NEET-UG and state counselling depends on subject combinations and on the rules published each year by the National Testing Agency and the Bihar authorities. Parents should read the current brochure before Class 11 subjects are fixed. IGCSE students go on to the Diploma, A Levels or Class 11 of an Indian board, and some schools ask for an equivalence certificate for the Class 10 result.",
        "Abroad, families usually look at the UK, Canada, the United States, Australia and the Gulf, where predicted grades and school reports count. A tutor can help a student choose subjects that keep several doors open, and we encourage that decision to be made with a school counsellor.",
      ],
    },
    {
      heading: "Mathematics AA or AI, and the three sciences, taught step by step",
      paragraphs: [
        "Every Diploma student chooses between Analysis and Approaches and Applications and Interpretation, and the choice sticks for two years. Analysis suits those who like algebra, calculus and proof, the usual base for engineering and pure science. Applications suits those who prefer data, modelling and technology, the usual base for business, social science and design. Higher Level adds a third paper on extended problems.",
        "A tutor is most useful where school teaching leaves gaps: a calculus unit left half finished, a graphing calculator never properly learned, or answers written without reasoning. We plan around Paper 1, which bans the calculator, and Paper 2, which expects it, and use past questions to show what each command term demands.",
        "The sciences each have a pattern. Physics rewards fluency with units and a sense of scale. Chemistry penalises weak stoichiometry. Biology gives marks for exact terms. Tutors take each unit through past-paper questions and correct the slips that move a grade boundary, and they teach the practical method behind the internal assessment.",
        "The assessment itself stays the student's work. A tutor can check whether a question is measurable and whether the method is sound. Rajgir offers odd and interesting material for that: hot-spring water that can be tested, a tourism economy that can be analysed in Economics, and a family guesthouse that can anchor a Business Management project. The best investigations start from something the student can actually observe.",
      ],
    },
    {
      heading: "IGCSE in practice: tiers, practicals and language choices",
      paragraphs: [
        "Most Cambridge IGCSE subjects offer a Core route and an Extended route. Core papers cap the grade a candidate can reach, while Extended papers open the whole scale, which is why students heading for Higher Level science or A Level usually sit Extended. Pearson Edexcel International GCSE draws the same line with Foundation and Higher tiers.",
        "Choosing a tier is a judgement about the next two years. A student who finds the material heavy often gains more from a secure grade at the lower tier than from a struggle at the upper one. A student who wants engineering or medicine should not be placed on a ceiling by accident. A handful of timed papers, plus the school's advice, makes the decision easier.",
        "Practical science needs its own decision. Cambridge sciences carry either a practical test or an alternative-to-practical paper, and schools short of laboratory time often choose the second. A tutor prepares the student for the paper actually being sat, including how to plan, observe and evaluate.",
        "Language choices matter in Bihar. A child who speaks Magahi or Hindi at home and studies in English at school may find English as a Second Language the realistic entry, with First Language as a later goal. Hindi as a Second Language is available too. Whichever route is chosen, extended writing is the skill that needs the most steady practice.",
      ],
    },
  ],

  process: [
    { title: "Message us the basics", description: "Send the board, subject, level and exam session, with a recent test paper or report if you have one." },
    { title: "Look over your tutor", description: "We propose someone who has taught the course and send a short profile before any lesson is fixed." },
    { title: "Attend the free lesson", description: "A genuine class on a genuine topic, so your child can judge the teaching style first-hand." },
    { title: "Receive the rate in writing", description: "After a good trial we put the rate and a proposed plan on paper. Nothing starts until you say yes." },
    { title: "Build a weekly routine", description: "Regular live lessons, a written note after each, and a replacement tutor if the pairing is not working." },
  ],

  whyPoints: [
    { title: "Right tutor, right paper", description: "A Diploma Economics student gets someone who has taught Paper 3 questions, not a generalist who also covers Bihar Board commerce." },
    { title: "Built around a Bihar year", description: "Lesson times take account of summer heat, the monsoon, Chhath and the long road to Patna." },
    { title: "Plain about local choice", description: "We tell you directly that Rajgir has no confirmed IB or IGCSE school and explain what that means for your plans." },
    { title: "Written progress", description: "After each class a short note records topics covered, mistakes noticed and what comes next." },
    { title: "Teaching, not writing", description: "Tutors explain, correct and set practice. They never produce assessed work on a student's behalf." },
    { title: "A fair start", description: "The first lesson is free, the rate comes to you in writing first, and a different tutor can be arranged if the fit is poor." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Rajgir?", answer: "We could not confirm one. No school in Rajgir or Nalanda district appears, in the sources we checked, as an IB World School or a Cambridge or Edexcel centre, and local schools teach the Bihar Board or CBSE. The nearest confirmed IB and Cambridge options are in Kolkata, Delhi NCR and Mussoorie. If a Rajgir school begins an international programme, tutoring can start against that syllabus quickly." },
    { question: "Can a tutor visit our home in Rajgir?", answer: "No. Tutors do not visit homes in Rajgir; home visits run only in Gurugram and parts of Delhi NCR. Rajgir students have online home tuition instead: a live private lesson over video while the child sits at home with a laptop. If your family later moves to Gurugram or parts of Delhi NCR, in-person tuition becomes possible there." },
    { question: "How do I book IB or IGCSE home tuition in Rajgir?", answer: "Write to us with the board, subject, level and exam session. We suggest a tutor who has taught the course, send a short profile and offer a free first lesson. Rates arrive in writing after that lesson. A recent school report or test paper helps us judge where your child stands, and booking usually takes a day or two." },
    { question: "How much does IB tuition cost for a student in Rajgir?", answer: "There is no single price. The rate depends on the programme and level, how scarce the subject is among tutors, the number of lessons a week and the length of the plan. We do not publish prices and instead send the rate in writing before you commit. Siblings and exam-season plans are quoted separately from steady weekly lessons." },
    { question: "Will the heat or a power cut ruin online lessons in Rajgir?", answer: "Not if you plan for it. Summer afternoons can be punishing, so most families choose early-evening slots, and a charged phone with a data plan makes a good backup when the broadband drops. If a session is lost, it is moved to another day, and the tutor shares the whiteboard notes afterwards." },
    { question: "Can children from Bihar Sharif, Nalanda or Giriyak join as well?", answer: "Yes. Because lessons are online, any address in the Nalanda belt works provided the connection is stable. We schedule around bus timings, school hours and any coaching class, and we suggest testing the connection during the free first lesson, particularly in villages where the signal can wander." },
    { question: "We may move to Delhi or Kolkata. Can the same tutor continue?", answer: "Usually yes. Online lessons travel with the family, so a tutor can carry on after a move, which is a relief in the middle of a Diploma. If you relocate to Gurugram or parts of Delhi NCR you can also choose in-person lessons there. A change of exam board can be handled by switching to a tutor matched to the new syllabus." },
    { question: "Can you help a child moving from the Bihar Board or CBSE into IB or IGCSE?", answer: "Yes. Much of the subject content will look familiar, while the way marks are earned will not. A tutor starts with command terms, paper layout and the assessment method, then fills content gaps subject by subject. Beginning two or three months before the new school year makes the first term far less stressful." },
    { question: "Which IB exam sessions do you plan for?", answer: "Both the May and November sessions. The school decides when a student sits, and we work backwards from that date. Results come in early July and early January. For IGCSE we plan around the Cambridge or Pearson Edexcel series the student is entered for." },
    { question: "Will a tutor write my child's IA, Extended Essay or coursework?", answer: "No. Tutors explain the criteria, teach the method and comment on ideas the student has produced, but they never write or edit assessed work for anyone. The internal assessment, the Extended Essay, the TOK essay and any coursework must be entirely the student's own." },
    { question: "What happens in the free first lesson?", answer: "Your child works through a real topic from the current syllabus with a tutor matched to the subject. It is a full live class, with no payment and no obligation. Afterwards you receive a short written note, and if you want to continue, the rate and plan follow in writing." },
    { question: "Do you teach both Cambridge and Pearson Edexcel IGCSE?", answer: "Yes. The two boards set different papers, tiers and practical components, so we match tutors by syllabus code and not only by subject name. Tell us which board your child's school or exam centre uses and which papers are next." },
    { question: "Should my child choose Mathematics AA or AI?", answer: "It depends on strengths and on the course planned for university. Analysis and Approaches suits students who enjoy algebra and calculus and may study engineering or pure science. Applications and Interpretation suits those headed for business, social science, design or health. A tutor can review your child's work before the choice is fixed in Class 11." },
    { question: "Does the IB Diploma count for admission in India, including Bihar?", answer: "Generally yes, once the Association of Indian Universities issues an equivalence certificate, and CUET-UG is the usual route for central universities. For JEE Main, NEET-UG and state counselling, eligibility depends on subject combinations and on each year's published rules, so check the current brochure before Class 11 subjects are chosen." },
    { question: "What do we need at home for online lessons?", answer: "A laptop or tablet with a working camera, a stable internet connection, a notebook and the school's books or past papers. IB Mathematics and some IGCSE papers need an approved graphing calculator, and the tutor will tell you which models are allowed. A phone hotspot is a sensible backup in Rajgir." },
    { question: "How do I start?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board, subject and level. A tutor suggestion and a free-lesson time usually come back within a day or two." },
  ],

  internalLinks: [
    { label: "IB and IGCSE help across India", href: "/india/", description: "How the same online service supports students in towns and cities everywhere." },
    { label: "IB tutors by programme", href: "/ib-tutors/", description: "A short guide to PYP, MYP, DP and CP tutoring." },
    { label: "IGCSE tutors by board", href: "/igcse/", description: "Cambridge and Pearson Edexcel subject specialists." },
    { label: "Diploma Programme tutoring", href: "/programmes/dp/", description: "Higher and Standard Level teaching for Classes 11 and 12." },
    { label: "MYP tutoring", href: "/programmes/myp/", description: "Criterion-based assessment help for Classes 6 to 10." },
    { label: "IB Mathematics lessons", href: "/courses/ib/mathematics/", description: "Both Mathematics courses at both levels." },
    { label: "Tutor profiles", href: "/tutors/", description: "See who teaches IB and IGCSE with IB Gram." },
    { label: "Talk to IB Gram", href: "/contact-us/", description: "Ask a question or request your free first lesson." },
    { label: "IB and IGCSE tutors in Patna", href: "/patna/", description: "The state capital, about 110 km from Rajgir." },
    { label: "IB and IGCSE tutors in Gaya", href: "/gaya/", description: "The Bodh Gaya side, about 78 km from Rajgir." },
    { label: "IB and IGCSE tutors in Nawada", href: "/nawada/", description: "A neighbouring Magadh district served by the same online model." },
  ],

  closingHeading: "Book a free first lesson from home in Rajgir",
  closingBody:
    "Send us your child's programme, subject and exam session. A matched tutor will teach one free lesson, and the rate follows in writing so you can decide calmly. Contact support@ibgram.com or WhatsApp +91 7439 368 115.",
};
