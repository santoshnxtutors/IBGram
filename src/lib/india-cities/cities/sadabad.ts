import type { CitySeoPage } from "../types";

/**
 * Sadabad, Hathras district, Uttar Pradesh (Braj region). No IB or Cambridge school was confirmed
 * locally, so stripSchools is empty; clusters use Agra, Noida and Delhi NCR names already checked
 * on the Agra, Mathura and Aligarh pages.
 */
export const sadabad: CitySeoPage = {
  slug: "sadabad",
  countryName: "Sadabad",
  countryNameLong: "Sadabad, Hathras district, Uttar Pradesh",
  demonym: "Sadabad",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early evenings after tuition-free school hours, with Sunday forenoons kept for longer practice papers",
  lastUpdated: "2026-09-21",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  geo: { latitude: 27.4379, longitude: 78.0372 },
  wikipedia: "https://en.wikipedia.org/wiki/Sadabad",
  alternateNames: ["Sadabad Hathras", "Sadabad UP", "Sadabad Mathura road", "Sadabad Braj"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sadabad | Private Online Tuition",
  metaDescription:
    "Private IB and IGCSE tuition for Sadabad students, taught live and one-to-one online from home by subject specialists, with a free trial lesson to start.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sadabad",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION IN SADABAD",
  heroSubtitle:
    "Home tuition for IB and IGCSE students in Sadabad, given as live one-to-one video lessons while your child studies at their own table. The town sits in the Braj plain of Hathras district, between Mathura, Hathras and Agra, in a belt where international school syllabuses are rare but families with a Delhi, Gulf or overseas link do ask for them. Share the programme, subject and exam session, and we arrange a matched tutor and a free trial lesson.",
  primaryKeyword: "IB and IGCSE tutors in Sadabad",
  imageAltText: "Sadabad student in Hathras district on a live online IB Mathematics lesson with a tutor",
  secondaryKeywords: [
    "IB tutor in Sadabad",
    "IGCSE tutor in Sadabad",
    "IB home tuition Sadabad",
    "IGCSE home tuition Sadabad",
    "IB private tuition Sadabad",
    "IB Maths tutor Sadabad",
    "IGCSE Maths tutor Sadabad",
    "IB Physics tutor Sadabad",
    "IB Chemistry tutor Sadabad",
    "IB Biology tutor Sadabad",
    "IB DP tutor Sadabad Hathras",
    "IB MYP tutor Sadabad",
    "IB PYP tutor Sadabad",
    "IGCSE online tuition Sadabad",
    "IB tutor Hathras district",
    "IGCSE tutor Mathura Agra belt",
    "IB online classes Braj region",
    "online home tuition Sadabad UP",
  ],

  heroTrustPoints: [
    "Every lesson live, with one tutor teaching one student",
    "Tutors experienced in IB DP, MYP and PYP as well as Cambridge and Edexcel IGCSE",
    "Timetables built around school hours, the loo and winter fog",
    "A free trial lesson, then a short written note after each class",
    "No-cost tutor change if the first match is not right",
  ],
  heroStats: [
    { value: "IST", label: "All lessons on Indian time" },
    { value: "PYP to DP", label: "Programmes supported" },
    { value: "Free trial", label: "Try before deciding" },
    { value: "Online", label: "Tuition delivered at home by video" },
  ],

  intro: {
    heading: "Private IB and IGCSE tuition for families in Sadabad",
    paragraphs: [
      "Sadabad lies in the western part of Uttar Pradesh where the Braj country meets the Yamuna plain, close enough to Mathura and Agra to feel their pull and far enough from both that daily commuting to a school is rarely sensible. Households here work in agriculture and potato trade, small manufacturing, transport, teaching and government jobs. Children study in UP Board and CBSE schools and the evening tuition class is a normal part of life. IB and IGCSE are not.",
      "Yet a handful of families do ask. A father returns from a posting abroad, a cousin in Dubai or Toronto suggests an international qualification, or a child has been moved into a boarding school in Delhi NCR and needs a tutor back home during the holidays. For them we provide private IB and IGCSE tuition that does not depend on a local specialist: a tutor in India teaches live, one-to-one, by video, and the student stays at home.",
      "The sections below explain how that works from a Sadabad address. They cover the schools you can realistically reach, the way boards differ, what shapes the rate, the exam calendar against local festivals and weather, university routes, and how maths and science are taught. IB Gram is independent of the IB, Cambridge, Pearson and every school. Tutors teach and give feedback; they do not author a student's internal assessment, Extended Essay or coursework.",
    ],
  },

  programmesIntro:
    "The IB offers four programmes and Cambridge and Pearson offer IGCSE. Families in Sadabad usually arrive at one of them through a move, so the tutor's role depends on the stage the child has reached.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "A transdisciplinary primary curriculum organised in units of inquiry. Tutoring keeps to short sessions on reading, number work and explaining thinking aloud.",
      countryNote:
        "Hardly any PYP classrooms exist near Sadabad, so a PYP child here is typically newly arrived from another city and benefits from a patient bridging tutor.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups assessed on criteria, culminating in a Personal Project. Tutors show how to read a task and write to a criterion.",
      countryNote:
        "Students arriving from a Hindi-medium school need time to shift into English-medium criterion writing. Weekly lessons and short feedback loops make that shift easier.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects with Theory of Knowledge, an Extended Essay and CAS. Tutoring covers examined content, paper technique and the logic of internal assessment criteria.",
      countryNote:
        "Diploma students who board in Delhi NCR often rely on holiday blocks at home in Sadabad, when concentrated online lessons fill the gaps left in term.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Selected DP courses combined with a career-related study and a reflective project, aimed at students leaning toward vocational pathways.",
      countryNote:
        "CP is very unusual in the area. We accept it on request and match tutors to the specific DP courses chosen.",
    },
  ],

  subjectsIntro:
    "Tutors are matched to the exact IB course and level, and to the student's earlier schooling, so a Hindi-medium background is treated as a starting point and not a handicap.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Algebra, calculus and reasoning, with Paper 1 and Paper 2 time management drilled in practice sets." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, probability and modelling with graphing-calculator fluency." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, thermal physics, waves and fields, including data-handling and practical write-ups." },
    { name: "Chemistry", levels: "SL / HL", description: "Stoichiometry, kinetics, energetics and organic reaction routes with step-by-step calculation drill." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology, genetics and ecology, with training in command terms and definitions." },
    { name: "Economics", levels: "SL / HL", description: "Micro and macro theory applied to agriculture, trade and the Indian economy for essay questions." },
    { name: "Business Management", levels: "SL / HL", description: "Case-study analysis, finance tools and the structure of Paper 2 responses." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and the pseudocode style used in the papers." },
    { name: "Psychology", levels: "SL / HL", description: "Studies, theories and evaluation, shaped into essay answers." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Analysis of unseen texts, commentary writing and comparative essays." },
    { name: "Hindi B", levels: "SL / HL", description: "Exam technique for a language many Sadabad students speak at home but have not written under IB criteria." },
    { name: "Sanskrit and Urdu support", levels: "School-based", description: "Help where a school offers a classical or regional language option." },
    { name: "Theory of Knowledge", levels: "Core", description: "Conversation practice for the knowledge questions; the essay and exhibition stay the student's own." },
  ],

  igcseSubjectsIntro:
    "IGCSE subjects are matched by exam board, because Cambridge and Pearson Edexcel differ in tiers, paper numbers and practical components even where subject names match.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Algebra, geometry, trigonometry and statistics, practised under timed conditions." },
    { name: "Physics", levels: "Core / Extended", description: "Motion, energy, electricity and radioactivity, with alternative-to-practical questions." },
    { name: "Chemistry", levels: "Core / Extended", description: "Atoms, reactions, acids and salts, and basic organic chemistry." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, nutrition, inheritance and ecology, including graph and data questions." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For students on the double-award science route." },
    { name: "English as a Second Language", levels: "Core / Extended", description: "Reading comprehension, summary and directed writing for students who speak Hindi or Braj at home." },
    { name: "Computer Science", levels: "Single tier", description: "Computational thinking, programming and data representation." },
    { name: "Economics", levels: "Single tier", description: "Basic economic problems, markets and government, with calculation practice." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Reading, writing and speaking for the Hindi option." },
    { name: "Accounting", levels: "Single tier", description: "Book-keeping, ledgers and statements, which suit students from trading families." },
  ],

  regionsTitle: "Sadabad town and the villages around it",
  regionsIntro:
    "Learners live in the town and in farming settlements along the roads that link Sadabad to Hathras, Mathura and Agra. School timing, power and connectivity differ by lane, and the notes below reflect that.",
  regions: [
    { name: "Sadabad main market", note: "The crowded commercial centre, where afternoon traffic builds around school closing; households here study best after the shops quiet down." },
    { name: "Tehsil and court area", note: "A government-service neighbourhood with steady power and a high share of salaried parents who prefer fixed weekday slots." },
    { name: "Hathras road side", note: "Homes toward Hathras, a city known for hing and gulal production; families here have relatives in business and often travel to the district headquarters." },
    { name: "Mathura road side", note: "The direction of Mathura and Vrindavan, whose pilgrim traffic swells on Janmashtami and Holi and can slow evening movement." },
    { name: "Agra road side", note: "The route toward Agra, used by those who work or have relatives in the city; Dayalbagh and Sikandra are common reference points." },
    { name: "Railway and bus-stand lanes", note: "Neighbourhoods near transport links with many commuters, so lessons are planned around return times." },
    { name: "Potato and wheat villages", note: "Farming settlements whose calendars follow the potato harvest and wheat cutting; weekday evenings outside those peaks suit best." },
    { name: "Mahavan and Raya direction", note: "Nearby Braj towns whose students often search for tutors online because specialist teachers are scarce." },
    { name: "Hasayan and Mursan side", note: "Smaller towns of Hathras district where families face long trips to any international school." },
  ],

  schoolClusters: [
    {
      city: "Hathras district",
      note: "We could not confirm an authorised IB World School or approved Cambridge or Edexcel centre in Sadabad or elsewhere in Hathras district. Local schools run UP Board, CBSE or ICSE programmes, so options for IB and IGCSE close to home are extremely limited.",
      schools: [],
    },
    {
      city: "Nearby: Agra",
      note: "Agra is the nearest big city and has at least one school we could confirm with an IB offer. It is a substantial road journey from Sadabad, which suits boarding or a move more than a daily run.",
      schools: ["Sharda World School"],
    },
    {
      city: "Nearby: Noida and Delhi NCR",
      note: "The Noida and Gurugram belts hold the largest set of confirmed IB and Cambridge schools within a day's travel. Some Braj families send a child to board there for Classes 9 to 12.",
      schools: ["Pathways School Noida", "Genesis Global School", "Pathways World School, Aravali", "GD Goenka World School"],
    },
  ],
  schoolDisclaimer:
    "School names appear only to show where IB and Cambridge options for Sadabad families really are. IB Gram is an independent tutoring service, unconnected with any school, the IB, Cambridge or Pearson, and each school makes its own admission decisions.",

  modesIntro:
    "Because tutors do not travel to homes in Sadabad, all formats below are online. Each is live and private, and each can be moved around local disruptions.",
  modes: [
    {
      title: "Weekly one-to-one video lessons",
      description: "A regular slot with one tutor who knows your child's course, level and exam board.",
      bullets: ["Shared screen and virtual whiteboard", "Past-paper marking with explanations", "Short written note for parents"],
    },
    {
      title: "Holiday catch-up blocks",
      description: "Condensed sessions during school breaks, ideal for boarders returning home or students who missed term time.",
      bullets: ["Daily sessions for a fixed week or two", "Topic gaps mapped at the start", "Progress check on the last day"],
    },
    {
      title: "Exam-run revision",
      description: "Dense practice in the final weeks before mock papers and the May or November sessions.",
      bullets: ["Timed papers in exam format", "Common-error review", "Spare slots held for outages"],
    },
  ],

  tutorsIntro:
    "Our tutors work from across India and teach on Indian Standard Time. For Sadabad, the best slots are usually five to eight in the evening, when school and farm or shop work are over.",

  sections: [
    {
      heading: "Is there an IB or Cambridge school near Sadabad?",
      paragraphs: [
        "Not that we could confirm. Sadabad, Hathras, Mursan and Hasayan are served by UP Board, CBSE and ICSE schools, some of them long established, but none of them appeared in the IB World School directory or in the lists of approved Cambridge and Edexcel centres at the time we checked. We prefer to say that plainly instead of naming institutions we cannot stand behind.",
        "The nearest confirmed options are in Agra, which has a school with an IB offer, and in the Noida and Gurugram belts of Delhi NCR. For a family in Sadabad, those are not commuting distances. Most who choose them either board the child, rent a flat in the city for the Diploma years, or send the child to live with relatives.",
        "That leaves a gap during every holiday and, for some students, during term too. A boarding student who has missed a unit of Chemistry, or a student catching up after joining mid-year, cannot easily find a teacher at home who knows the paper. This is the situation private online tuition addresses best, since the lesson can be set for the exact weakness and fits into the days at home.",
        "If a local school announces a candidacy or licence, we will teach to that syllabus from the start. The subject list and exam session are enough for us to begin.",
      ],
    },
    {
      heading: "How do UP Board and CBSE compare with IGCSE and the IB Diploma?",
      paragraphs: [
        "A Sadabad child usually knows the UP Board or CBSE routine: textbook chapters, unit tests, pre-board papers and a final examination in February or March. Success depends on memory, neat presentation and speed. The syllabus is clear and well supported by local coaching.",
        "IGCSE changes the emphasis. It publishes a syllabus with explicit learning objectives, divides papers into tiers and rewards application of ideas to unfamiliar contexts. The IB Diploma goes one step further, adding internal assessments, an essay, a knowledge course and service, and marking for explanation and judgment. Content knowledge is the foundation, not the finish.",
        "The comparison below shows how the pieces differ in practice for families in this belt.",
      ],
      table: {
        caption: "What changes between boards for a student in Sadabad",
        columns: ["Board", "Main assessment", "Language", "Usual next step", "Help available locally"],
        rows: [
          ["UP Board", "Annual written papers in Class 10 and 12", "Hindi or English", "State colleges, CUET-UG, JEE, NEET", "Many local teachers"],
          ["CBSE", "Board exams on NCERT content", "Hindi or English", "CUET-UG, JEE, NEET", "Coaching centres in Hathras and Agra"],
          ["ICSE and ISC", "Wide syllabus, extended English writing", "English", "Indian universities, CUET-UG", "A few tutors in Agra"],
          ["IGCSE (Cambridge or Edexcel)", "Tiered subject papers, sessions in several months", "English", "IB, A Level or Indian Class 11", "Very few in the region"],
          ["IB Diploma", "Exams, essay, internal assessments, service", "English", "Indian and overseas universities", "Practically none in the region"],
        ],
      },
    },
    {
      heading: "What decides the price of IB or IGCSE tuition in Sadabad?",
      paragraphs: [
        "No fixed rate list exists, because the real cost of a tutor depends on the course. We give the figure in writing before the trial lesson is confirmed, so that nothing is promised by phone and argued about later.",
        "Level is the biggest factor. Higher Level Diploma Mathematics or Physics demands a tutor with deep subject knowledge and exam marking experience. An IGCSE English or MYP humanities tutor sits at a different point on the scale. Scarcity matters too, since Computer Science HL or Further Mathematics have few qualified teachers in India.",
        "How you buy lessons also changes the arithmetic: weekly support through the year, a two-week holiday block for a boarder, and a revision burst before a mock are three separate shapes. Families sometimes find the holiday block gives the best return, because it fills the exact gaps that matter.",
        "Sadabad parents should also weigh what they would otherwise spend: bus fares or fuel to Agra, rented lodging for a student in the city, and the lost time. When those are added up, a tutor at home may cost less overall.",
      ],
      bullets: [
        "SL or HL, Core or Extended",
        "How few qualified tutors teach the subject",
        "Lessons per week and for how many months",
        "Weekly support, holiday block or exam burst",
      ],
    },
    {
      heading: "Online tutor, Agra coaching, Delhi boarding or self-study: which suits Sadabad?",
      paragraphs: [
        "Each route has a purpose, and a family often combines two. What matters is the actual weakness: missing content, weak paper technique, or lack of regular practice.",
        "Coaching in Agra gives group classes but needs regular travel. Boarding in Delhi NCR gives a school environment but shifts the child away from home. Local tutors are handy for general subjects. Self-study with past papers needs discipline. A live online private tutor gives specialised teaching while the student remains at home.",
      ],
      table: {
        caption: "Support routes compared for a Sadabad student",
        columns: ["Route", "Subject expertise", "Travel", "Timing", "Good for"],
        rows: [
          ["Private live online tutor", "Matched by board, subject and level", "None", "Evenings, weekends, holidays", "Any IB or IGCSE student"],
          ["Agra group coaching", "Good, but pitched at a class", "Regular road trips", "Fixed batch times", "Students already commuting to Agra"],
          ["Boarding in Delhi NCR", "Full school experience", "Relocation", "Fixed by school", "Families ready to move the child"],
          ["Self-study from past papers", "Depends on the learner", "None", "Fully flexible", "Self-driven students with strong basics"],
        ],
      },
    },
    {
      heading: "How do Holi, potato harvest and the loo affect the exam year in Sadabad?",
      paragraphs: [
        "Braj has a festival calendar that few other regions match. Holi in March draws crowds across Mathura and Vrindavan and lasts days in practice, Janmashtami and Radhashtami fill August and September, and Diwali arrives close to the November exam sessions. Plan lessons around these rather than fighting them.",
        "The IB Diploma has May and November sessions, with results in July and January. Cambridge IGCSE sits in February to March, May to June and October to November, and Pearson International GCSE in January, May to June and October to November. A student's school or exam centre sets which window applies, and the tutor plans backwards from that date.",
        "Weather and farming add pressure. Potato digging in February and March can occupy farming households for weeks, May and June bring the dry loo and power cuts, and winter fog from December slows morning travel. Evening lessons stay the most dependable slot throughout.",
      ],
      table: {
        caption: "A year in Sadabad as a study calendar",
        columns: ["Period", "Local events", "Effect on study", "Adjustment"],
        rows: [
          ["Dec to Jan", "Dense fog, cold, Makar Sankranti", "Delayed school buses", "Evening slots, mock papers"],
          ["Feb to Mar", "Potato harvest, Holi, IGCSE series", "Family busy, festival days", "Fixed weekly time plus rest week"],
          ["Apr to Jun", "Wheat cutting, heat, IB May session", "Power cuts, tiredness", "Early-evening lessons with buffers"],
          ["Jul to Sep", "Monsoon, IB results, Janmashtami", "Flooded lanes, new term", "Foundation lessons, back-up connection"],
          ["Oct to Nov", "Dussehra, Diwali, exam sessions", "Shortened weeks", "Compressed revision plan"],
        ],
      },
    },
    {
      heading: "Where can a Sadabad IB or IGCSE student study afterwards?",
      paragraphs: [
        "IB Diploma holders typically apply to Indian universities with an Association of Indian Universities equivalence certificate, to central universities through CUET-UG, or abroad. Many universities in Delhi NCR, including private ones in Noida, accept Diploma results directly, and Agra offers Dr. B. R. Ambedkar University and the Dayalbagh Educational Institute for those who want to stay closer to home. Aligarh Muslim University is also within reach of the region.",
        "For engineering and medical entrance, eligibility rules are specific. A Diploma that includes Mathematics, Physics and Chemistry or Biology can fit JEE or NEET requirements, but each year's National Testing Agency notice should be read before choosing Class 11 subjects.",
        "IGCSE students move on to Class 11 in an Indian board, to A Level, or to the IB. The IGCSE grades in mathematics and sciences affect which of these routes remain open, which is why tier choice matters.",
        "Abroad, the UK, Canada, the US, Australia and the Gulf are the common destinations. A tutor can guide subject strategy, but admissions advice belongs to a school or university counsellor.",
      ],
    },
    {
      heading: "How are IB Mathematics, Physics, Chemistry and Biology taught in a live lesson?",
      paragraphs: [
        "Mathematics Analysis and Approaches suits students who like abstract reasoning, calculus and algebra and may head to engineering or pure science. Applications and Interpretation emphasises statistics, modelling and technology, which suits future economists, social scientists and designers. Students switching from the UP Board should choose with care, since the two courses ask different things.",
        "A live lesson usually starts with a short diagnostic question on the previous topic, followed by a worked example on the shared whiteboard, then a past-paper question the student attempts alone and the tutor marks line by line. The aim is to spot where the marks drop: a missing unit, an unjustified step, a diagram without labels.",
        "Physics sessions train students to link equations to pictures. Chemistry tutors focus on the mole and balanced equations because errors there carry through whole answers. Biology tutors teach the vocabulary and the habit of writing exactly what a mark scheme looks for.",
        "The internal assessment for each subject is the student's own investigation. Tutors explain the criteria and discuss method, but never write or edit the work.",
      ],
    },
    {
      heading: "IGCSE Core, Extended, Foundation or Higher: how should Sadabad families pick tiers?",
      paragraphs: [
        "Cambridge offers Core and Extended in subjects such as Mathematics, Physics and Chemistry, and Pearson Edexcel offers Foundation and Higher. The lower tier caps the highest grade, so a student aiming at science, engineering or IB Higher Level courses should be entered for the upper tier unless the school advises otherwise.",
        "A tier decision is best made with evidence: recent test results, a conversation with the subject teacher and a diagnostic from the tutor. A child who is slow but accurate may gain from a stable lower tier, whereas one who is quick but careless may do better with the higher one and more practice.",
        "Subject mix matters. Strong IGCSE sets usually combine languages, mathematics, sciences and a humanities or business option. Students from Hindi-medium schools often need most support in extended English writing and in physics vocabulary, and both respond to steady weekly practice.",
        "Because the two boards set different papers and practical routes, we confirm the board code before assigning a tutor.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Send the board, subject, level and exam session on WhatsApp or email." },
    { title: "Get a tutor suggestion", description: "We shortlist someone who has taught the same course and send a brief profile." },
    { title: "Take the trial", description: "A real lesson on a real topic, free, so your child can judge the style." },
    { title: "Review the written rate", description: "A plan and rate are sent on paper. Nothing is booked until you say yes." },
    { title: "Start the weekly rhythm", description: "Live lessons with a note after each, and a tutor change if the fit needs adjusting." },
  ],

  whyPoints: [
    { title: "Right tutor for the right paper", description: "Subject and board are matched, so a Diploma Biology student is not taught by a generalist." },
    { title: "Planned around Braj life", description: "Festival weeks, harvest peaks, fog and the loo are built into the timetable." },
    { title: "Frank about local options", description: "We say that no IB or Cambridge school is confirmed nearby, and help you plan from there." },
    { title: "Parents stay informed", description: "A short note follows every class with topics covered, errors seen and next steps." },
    { title: "Teaching, not ghost-writing", description: "Tutors explain and give feedback. Assessments and essays remain the student's own." },
    { title: "Easy to leave", description: "Free trial, rate in writing first, and a no-cost tutor change." },
  ],

  faqs: [
    { question: "Is there any IB or IGCSE school in Sadabad?", answer: "We could not confirm one. Schools in Sadabad and the rest of Hathras district follow the UP Board, CBSE or ICSE, and none appeared in the IB directory or in Cambridge and Edexcel centre lists. The nearest confirmed options are in Agra and Delhi NCR, which is why online tuition from home is the practical route." },
    { question: "Do tutors visit homes in Sadabad?", answer: "No. In-person home visits happen only in Gurugram and parts of Delhi NCR. In Sadabad the service is online home tuition: a private live lesson over video, with your child at a desk in your own house. You still get one-to-one attention and the freedom to avoid long journeys." },
    { question: "How can I find a tutor in Sadabad for IB Physics or IGCSE Maths?", answer: "Send us the board, subject, level and exam session by WhatsApp or email. We choose a tutor who has taught that specific course, send you a short profile and book a free trial. If the style does not suit your child, we replace the tutor without charge." },
    { question: "How much does IB tuition cost for a Sadabad student?", answer: "The rate depends on the course level, how rare the subject is among tutors and how many lessons you take each week. We do not print a price list. You receive the figure in writing before the trial is confirmed, which lets you compare calmly and decide with no pressure." },
    { question: "Can my child in a Hindi-medium school move to IGCSE?", answer: "Yes, with preparation. The main hurdle is English-medium exam writing, not the science or maths itself. Starting around Class 8 or 9 gives enough time. A tutor works on vocabulary, command words and paper structure first, then closes content gaps, usually over two or three terms." },
    { question: "Is online tuition really better than coaching in Agra?", answer: "For most IB and IGCSE students it is. The lesson is one-to-one, the tutor targets your child's weakest topics, and no time is lost on the road. Group coaching helps students who need a classroom atmosphere, but the travel from Sadabad is long and rarely sustainable through a school term." },
    { question: "What can a boarding student do during holidays at Sadabad?", answer: "A holiday block is ideal. Daily or alternate-day lessons over one or two weeks can revisit units that were rushed in term, work through past papers and prepare for the next test. We map gaps at the first lesson and hold a progress check at the end." },
    { question: "Will tutors help with the Extended Essay or IA?", answer: "Tutors explain the criteria and discuss the student's own plan, but they do not write, rewrite or edit an Extended Essay, internal assessment, TOK essay or coursework. All submitted work must remain the student's. We are strict about this, and it protects the student's grades and integrity." },
    { question: "How does the free trial lesson work?", answer: "It is a live session on a topic from your child's syllabus with the tutor we propose. You pay nothing and commit to nothing. After the lesson you get a short written note, and if you want to continue, the rate and weekly plan are sent in writing for approval." },
    { question: "Which exam sessions can you prepare for?", answer: "We prepare students for both IB sessions, May and November, and for the Cambridge and Edexcel series that their school enters them for. The school or exam centre decides the window, so we plan the lessons backwards from that date. IB results appear in July and January." },
    { question: "Can you teach Cambridge and Pearson Edexcel IGCSE?", answer: "Yes. The two boards differ in paper numbers, tiers and practical exams, so tutors are matched by board code. Tell us which board your child's school uses and the papers on the timetable, and we will check that the tutor has taught that specification." },
    { question: "What happens if there is a power cut during a lesson?", answer: "Lessons are rebooked, not lost. Sadabad families usually keep a phone hotspot and, during exam season, an inverter or power bank. If a session is cut short for these reasons, we reschedule the lost time within the same week wherever the tutor's calendar allows." },
    { question: "When are lessons scheduled?", answer: "Most students study on weekday evenings between five and eight and on Sunday forenoons, in Indian Standard Time. During Holi, Janmashtami, Diwali and the potato-harvest weeks, we pause or shift lessons and add catch-up slots near the end of the term." },
    { question: "Will the IB Diploma be accepted by Indian universities?", answer: "Generally yes. Most Indian universities ask for an equivalence certificate from the Association of Indian Universities, and CUET-UG is the main route into central universities. JEE, NEET and state quotas have specific subject rules, so read the latest official notices before finalising Class 11 subjects." },
    { question: "Can students from Hathras, Mathura or Mahavan join as well?", answer: "Yes. Lessons are online, so any address in Hathras district or the nearby Braj towns works with a stable connection. We fit slots around the school and work routines of the family and keep the weekly time fixed so it becomes a habit." },
    { question: "How do we begin?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the class, board, subject and exam session. We normally respond within a day or two with a tutor suggestion and a proposed time for the free trial." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "See how the online model works in other cities and towns." },
    { label: "IB tutoring overview", href: "/ib-tutors/", description: "How our IB tutoring is arranged, programme by programme." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects with board-matched tutors." },
    { label: "Primary Years Programme help", href: "/programmes/pyp/", description: "Gentle support for younger students on the IB path." },
    { label: "Diploma Programme help", href: "/programmes/dp/", description: "Subject tutoring for Classes 11 and 12." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI at Standard and Higher Level." },
    { label: "Our tutors", href: "/tutors/", description: "Profiles of tutors who teach IB and IGCSE." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or arrange the free trial." },
    { label: "IB and IGCSE tutors in Agra", href: "/agra/", description: "Our page for the nearest large city to Sadabad." },
    { label: "IB and IGCSE tutors in Mathura", href: "/mathura/", description: "Covering the Braj pilgrimage city on the other side of the Yamuna plain." },
    { label: "IB and IGCSE tutors in Firozabad", href: "/firozabad/", description: "Another Agra-region town served through online lessons." },
  ],

  closingHeading: "Arrange a free trial lesson in Sadabad",
  closingBody:
    "Tell us the programme, subject and exam session. We will find a tutor, hold a free trial and send the rate in writing before you decide. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
