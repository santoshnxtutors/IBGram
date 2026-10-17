import type { CitySeoPage } from "../types";

/**
 * /rath/ - IB and IGCSE tutoring page for Rath, Hamirpur district (Bundelkhand), Uttar Pradesh. No school in Rath is
 * confirmed to teach IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and clusters reuse Kanpur, Lucknow,
 * Bhopal and Delhi NCR names from existing pages. All lessons online.
 */
export const rath: CitySeoPage = {
  slug: "rath",
  countryName: "Rath",
  countryNameLong: "Rath, Uttar Pradesh",
  demonym: "Rath",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early mornings and cooler evenings that work around Bundelkhand summer heat, winter fog, power cuts and the UP Board exam weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.5903, longitude: 79.5725 },
  wikipedia: "https://en.wikipedia.org/wiki/Rath,_Uttar_Pradesh",
  alternateNames: ["Rath Hamirpur", "Rath UP", "Rath Bundelkhand"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Rath, Hamirpur | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Rath, Hamirpur (Bundelkhand): live one-to-one lessons planned around summer heat, winter fog and UP Board weeks. Free trial.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Rath",
  heroEyebrow: "IB & IGCSE LESSONS FOR RATH AND BUNDELKHAND STUDENTS",
  heroSubtitle:
    "Private tuition from home for students in Rath, Hamirpur district, who follow or are preparing for the IB or IGCSE: a live one-to-one lesson over video with a tutor who has taught the course before. Kanpur, Lucknow and Jhansi are all a long road away, so the tutor comes to the screen and nobody has to board a bus.",
  primaryKeyword: "IB and IGCSE tutors in Rath",
  imageAltText: "A student in Rath, Uttar Pradesh, in a live online IGCSE Physics lesson at a home desk with a ceiling fan overhead",
  secondaryKeywords: [
    "IB tutor Rath",
    "IGCSE tutor Rath",
    "IB home tuition Rath",
    "IGCSE home tuition Rath",
    "IB private tuition Rath",
    "IB Maths tutor Rath",
    "IGCSE Maths tutor Rath",
    "IB Physics tutor Rath",
    "IB Chemistry tutor Rath",
    "IB Biology tutor Rath",
    "IB DP tutor Rath",
    "IB MYP tutor Rath",
    "IB PYP tutor Rath",
    "IGCSE online tuition Rath",
    "IB tutor Rath Hamirpur",
    "IGCSE tutor Mahoba Orai Jhansi",
    "online IB tutor Bundelkhand",
    "Cambridge IGCSE tutor Rath Uttar Pradesh",
  ],

  heroTrustPoints: [
    "Tutors who have handled the specific IB subject or IGCSE syllabus code before",
    "All teaching is online in Rath; tutors visit homes only in Gurugram and parts of Delhi NCR",
    "A short written recap after each class and a painless way to swap tutor",
    "One free trial lesson, then a written rate before you commit",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The IB end to end" },
    { value: "Two boards", label: "Cambridge and Edexcel IGCSE" },
    { value: "Fan-and-fog proof", label: "Slots chosen around heat and mist" },
    { value: "Free trial", label: "Sample a lesson first" },
  ],

  intro: {
    heading: "What an international board looks like from a Bundelkhand town",
    paragraphs: [
      "Rath is one of the larger towns of Hamirpur district in the Bundelkhand region of Uttar Pradesh, in country of granite outcrops, dry-land farming and rivers such as the Betwa and Dhasan that swell only in the rains. Households here include traders, farmers, contractors, bank and government employees, and a fair number of families with sons and daughters working in Delhi, Noida, Bengaluru or the Gulf. Their questions about the IB or IGCSE usually begin with one of those relatives.",
      "Nothing we can verify puts an IB or Cambridge or Pearson Edexcel IGCSE school inside Rath, so this page lists none as local. Schools in the town run the Uttar Pradesh Board, CBSE or in a few cases ICSE. The international-board schools we can confirm are in Kanpur and Lucknow, a long day trip each way, and in Bhopal and the Delhi NCR boarding belt.",
      "For these families the practical format is a screen. A child stays in Rath, in a room with a fan and a reliable table, and meets a specialist who may be in Pune, Delhi or Hyderabad. The tutor is chosen for how often they have taught that exact syllabus, which is a luxury a small town seldom gets locally.",
      "We work independently, with no link to the IB, Cambridge, Pearson or any school mentioned here. Coaching and feedback are what tutors give; they do not write a student's IA, Extended Essay, TOK essay or any assessed coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE",
      "Live one-to-one teaching in English from tutors across India",
      "A free trial class before any fee is discussed",
      "No tutor visits in Rath; home visits exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Rath families normally meet a programme through a plan with a date on it: a Kanpur or Lucknow admission test, a hostel place in another state, or a university goal abroad. Here is what each stage demands and where a tutor adds value.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "Young learners move through themed inquiry units and finish with a pupil-led Exhibition. No board paper is set. A tutor works on fluent reading, clean writing, number sense and the simple habit of asking a good question, in sessions short enough for a small child.",
      countryNote:
        "A child from Rath moving to a PYP classroom in a big city benefits from a term of relaxed English conversation before the first day.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Every subject is graded on published criteria, and assessment includes projects and investigations. The Personal Project asks a student to plan, research and reflect. Children brought up on Hindi-medium textbooks are often capable but lack practice in writing justified English answers.",
      countryNote:
        "Students from UP Board schools preparing for an MYP seat tend to need English writing stamina, then science reports and open-ended Maths.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma student takes six subjects, three or four at Higher Level, plus TOK, the Extended Essay and CAS. The best total is 45 points and papers fall in May or November. Internal assessments run over both years and adjust each subject grade.",
      countryNote:
        "DP students tied to Rath almost always study at a school in another city, often in a hostel, and use online lessons on weekends and in the long summer and winter breaks.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP mixes at least two Diploma courses with career-related study and a reflective project. It is offered by very few Indian schools, though the Diploma courses within it are marked to the full-Diploma standard.",
      countryNote:
        "We rarely hear from Rath about the CP; if a request arrives, the Diploma courses are taught as they would be for a DP candidate.",
    },
  ],

  subjectsIntro:
    "Students from Bundelkhand often aim at engineering, medicine, civil services or commerce, and the subjects below are the ones they request. Tell us the course, the level and the exam session, and we will look for a tutor who has taught it, including combinations that a hostel school's timetable can impose.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof. UP Board students usually have good arithmetic and need practice giving reasons for every step." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator technology, using data such as monsoon rainfall and crop yields." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and energy, with disciplined treatment of units, uncertainty and graph work." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, bonding, kinetics and organic reactions, with data-booklet use from the first lesson." },
    { name: "IB Biology", levels: "HL / SL", description: "A wide course turned into recall, application and command-word practice, including ecology of dry, river-fed regions." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram skills and evaluation, illustrated with farm incomes, water stress, mining and rural credit." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies, business tools and the internal research project, good for children of trading families." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen texts and comparative essays, for students whose first language is Hindi or Bundeli." },
    { name: "IB Hindi A Literature", levels: "HL / SL", description: "Literary analysis in the student's strongest language, often a confidence-building choice." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language skills and oral practice at the required level." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming logic and a staged internal project." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking with local cases: drought cycles, groundwater, river sand extraction and solar power." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and essay argument, with South Asian and world history options." },
    { name: "IB Global Politics", levels: "HL / SL", description: "Concepts and case studies for students interested in governance and civil services." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, research methods and essay structure." },
  ],

  igcseSubjectsIntro:
    "IGCSE is awarded by Cambridge and by Pearson Edexcel, and their papers are built differently, so the board comes first in any conversation. The subjects below are what Rath families ask about, with Hindi included for students who want to keep a home language.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths across two papers; Extended candidates are drilled in algebra, geometry and graphs." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus, functions and vectors for strong students heading for Diploma Maths." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson's Maths, two equally weighted papers with marks for method." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, forces, circuits and waves, with practical-skills questions rehearsed." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, reaction rates, electrolysis and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, human biology, plants and ecosystems." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing, listening and speaking for students from Hindi-speaking homes." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, final accounts and ratios through worked examples, useful for trading families." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business activity, marketing and finance." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Basic economic problems, markets and policy with data questions." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming logic, data and networks." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "Language skills for students who want Hindi included, subject to the board's current offering." },
  ],

  regionsTitle: "Rath and the surrounding Bundelkhand towns our tutors teach online",
  regionsIntro:
    "A live lesson is the same from any street in Rath. What differs is the day around it, so the notes below describe how households in the town and its neighbours tend to organise study, with practical points on heat, fog and supply of power.",
  regions: [
    { name: "Rath town centre and main market", note: "A busy trading core where shops close late, so lessons usually begin once the family has eaten or early in the morning." },
    { name: "Bus stand area", note: "Noisy with buses and auto traffic; a headset with a microphone that filters noise helps during evening lessons." },
    { name: "Railway station side", note: "Families with relatives in Jhansi, Kanpur or Delhi who travel often; a tutor who stays constant across trips suits them." },
    { name: "Hamirpur road side", note: "Newer housing along the route to the district headquarters, where broadband quality varies street to street." },
    { name: "Mahoba road side", note: "Residential streets where families look towards Mahoba, Orai and Kanpur for schooling and coaching." },
    { name: "Government quarters and civil area", note: "Employees whose postings change, who value a tutor they can keep after a transfer." },
    { name: "Hamirpur city", note: "The district headquarters at the Yamuna and Betwa confluence, where parents compare Kanpur and Lucknow schools." },
    { name: "Mahoba and Charkhari", note: "Neighbouring towns known for the Kajari fair and a rich Bundelkhand heritage; families there use the same online model." },
    { name: "Orai and Jalaun side", note: "A regional centre to the north-west, described on our Orai page, with similar school choices." },
    { name: "Mauranipur and Jhansi side", note: "Towns towards Jhansi, where Bundelkhand University and engineering colleges are familiar destinations." },
  ],

  schoolDisclaimer:
    "The schools listed here appear only to show where IB and IGCSE classrooms exist within reach of Rath. IB Gram has no arrangement with any of them, or with the IB, Cambridge or Pearson, and families should check programmes, fees and admission rules directly with each school.",
  schoolClusters: [
    {
      city: "Local: Rath town",
      note: "We could not confirm any school in Rath that offers IB or Cambridge or Edexcel IGCSE, so none is listed. Local schools follow the UP Board, CBSE or ICSE.",
      schools: [],
    },
    {
      city: "Nearby: Kanpur",
      note: "Roughly a three-hour drive, Kanpur is the closest large city with verified international-board options; both names are on our Kanpur page.",
      schools: ["Billabong High International School", "Allenhouse Public School"],
    },
    {
      city: "Nearby: Lucknow",
      note: "The state capital, several hours away, where a Cambridge school is listed on our Jhansi page.",
      schools: ["City Montessori School, Cambridge Campus (Cambridge IGCSE and A Level)"],
    },
    {
      city: "Nearby: Bhopal",
      note: "A Madhya Pradesh option that some Bundelkhand families consider, taken from our Jhansi page.",
      schools: ["Eastern Public School, Bhopal (IB PYP, MYP and Diploma Programme, plus Cambridge IGCSE at Class 9-10)"],
    },
    {
      city: "Boarding option: Gurugram and Delhi NCR",
      note: "Some families choose residential campuses near Gurugram for the senior years; these two appear on several of our pages.",
      schools: ["Pathways World School, Aravali", "GD Goenka World School"],
    },
  ],

  modesIntro:
    "Every student in Rath learns over video. Families then choose the rhythm that suits the house: a weekly class, a term plan with written recaps, or a short intense run before the papers.",
  modes: [
    {
      title: "One regular class a week",
      description:
        "A fixed hour with one tutor. The student brings unfinished problems and questions, the tutor teaches the next idea, and errors are corrected as the working appears.",
      bullets: [
        "Tutor matched on subject, level and board",
        "Usually one hour a week",
        "Working shared on a digital board",
        "Suits IGCSE, MYP and early DP",
      ],
    },
    {
      title: "Term map with written recaps",
      description:
        "A plan for the term, a short recap after each class and a check-in every few weeks. Parents who do not know these boards can still follow the progress.",
      bullets: [
        "Recaps in straightforward English",
        "Check-ins that reorder topics if needed",
        "Fits beside school or hostel schedules",
        "Extra sessions before class tests",
      ],
    },
    {
      title: "Break-time and pre-paper push",
      description:
        "During the summer and winter breaks, and in the run-up to mocks and the May or November papers, classes are more frequent and centre on timed practice and careful marking.",
      bullets: [
        "Papers marked in the board's own style",
        "Two to four sessions a week if the timetable allows",
        "Kept clear of Diwali and UP Board weeks",
        "Best started about three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there any IB or IGCSE school in Rath, and where do families look?",
      paragraphs: [
        "We have no confirmation of an IB or Cambridge or Edexcel IGCSE school in Rath, and we do not name one without evidence. The town's schools follow the Uttar Pradesh Board or CBSE, with a few affiliated to ICSE. If a school advertises an international board, ask to see its authorisation letter and its current list of examined subjects.",
        "The nearest verified schools lie in Kanpur, such as Billabong High International School and Allenhouse Public School, and in Lucknow, where City Montessori School's Cambridge Campus offers IGCSE and A Level. Bhopal's Eastern Public School is another verified option, and some families look at residential campuses near Gurugram.",
        "Each of those choices involves a move, a hostel or a relative's house, because the drive from Rath is too long for a school day. Every school also has its own admission calendar, entrance test and fee structure, none of which can be guessed from outside.",
        "Tutoring cannot provide a seat. It can prepare a child for an entrance round, bridge the gap after a move, and support an enrolled student with a specialist on holidays, when the hostel is closed and the school library is far away.",
      ],
    },
    {
      heading: "UP Board, CBSE, ICSE, IGCSE or IB: how do they compare for a student in Rath?",
      paragraphs: [
        "The Uttar Pradesh Board holds High School at Class 10 and Intermediate at Class 12, with papers usually in February and March, largely in Hindi or English. CBSE and ICSE follow national syllabi. IGCSE and IB are international programmes examined in May and November sessions, so a move between boards also changes the exam year.",
        "A student from a UP Board school is often very strong at memory, numerical work and steady revision. IGCSE and IB examiners reward something extra: reasons, assumptions, labelled diagrams and judgement written out in full sentences. The early weeks of tutoring usually go into that writing habit.",
        "For later entrance tests, JEE Main, NEET and CUET-UG dominate planning in Uttar Pradesh. IB and IGCSE candidates can take these exams if they meet subject and eligibility rules, but the rules differ, so they should read the current notification before choosing subjects.",
        "A good starting question is where Class 12 will end. If it is a UP or national entrance route, staying with the UP Board or CBSE may be smoother. If it is a university abroad or a liberal-arts degree, an international board might give a better fit.",
      ],
      table: {
        caption: "Boards a Rath family might compare",
        columns: ["Board", "Typical setting near Rath", "What the papers reward", "Main exam months"],
        rows: [
          ["UP Board (High School, Intermediate)", "Most schools in the district", "Accurate recall in Hindi or English", "February-March"],
          ["CBSE", "Private schools in town and in Jhansi, Kanpur", "National syllabus, applied questions", "February-March"],
          ["ICSE / ISC", "A handful of schools in larger cities", "English-rich, wide syllabus", "February-March"],
          ["IGCSE", "Kanpur, Lucknow, Bhopal and boarding campuses", "Applied, tiered papers", "May-June and October-November"],
          ["IB Diploma", "Kanpur, Bhopal and boarding campuses", "Six subjects plus core, criteria based", "May and November"],
        ],
      },
    },
    {
      heading: "What should a family in Rath budget for IB or IGCSE tuition?",
      paragraphs: [
        "We do not list a fixed price. After the free trial class you receive a written figure that reflects the level and subject, how closely the tutor's past teaching matches your syllabus and how many hours a week you want.",
        "Higher Level IB Physics needs a tutor with deep and recent subject knowledge, and the rate reflects that. A steady weekly arrangement usually costs less per hour than a hurried block just before a paper, so early booking tends to be the economical choice.",
        "Compare sensibly with the alternatives. Weekly coaching in Kanpur or Lucknow would mean a long bus or train ride, an overnight stay and lost school days, and these costs never appear on an invoice. A lesson delivered to your room removes the journey entirely.",
        "You can attend the trial, take the written quote home, discuss it with relatives and decide without pressure. Lessons can be paused or stopped at any time.",
      ],
      bullets: [
        "Level: IB HL or SL, IGCSE Core, Extended, Foundation or Higher",
        "Subject and the tutor's record on that exact syllabus",
        "Hours per week and length of each class",
        "Steady plan or short exam-season push",
      ],
    },
    {
      heading: "Online tutor, big-city coaching, a neighbourhood teacher or self-study: what works from Rath?",
      paragraphs: [
        "Coaching in Kanpur, Lucknow or Jhansi provides a classroom and peers, but the journey from Rath takes most of a day and cannot be repeated weekly by a school-age child. A video lesson puts the same specialist in front of the student without that journey.",
        "Teachers in Rath are plentiful for UP Board and CBSE subjects, and many are skilled at building the basics. Few have marked IB internal assessments or IGCSE papers, so they serve general support better than syllabus-specific coaching.",
        "Self-study can carry a motivated student through IGCSE Maths and the sciences with past papers and mark schemes. It runs out of road when written feedback is needed, such as IB essays, Exploration drafts or language orals.",
        "Online one-to-one lessons offer a reader who knows the criteria and a slot that fits the family. The limit is infrastructure: power cuts and uneven broadband are real in parts of Bundelkhand, so each tutor agrees a voice-call backup at the start.",
      ],
      table: {
        caption: "Study routes compared for Rath students",
        columns: ["Route", "What it offers", "What limits it"],
        rows: [
          ["Online one-to-one", "Exact syllabus, private pace, no travel", "Needs stable power and data"],
          ["Coaching in Kanpur or Lucknow", "Classroom and peer group", "Long journey, cost and lost school days"],
          ["Neighbourhood teacher", "Close and familiar", "Few with IB or IGCSE marking experience"],
          ["Self-study", "Free and flexible", "No feedback on essays or internal work"],
        ],
      },
    },
    {
      heading: "How do Bundelkhand heat, winter fog and festivals affect the study year?",
      paragraphs: [
        "Summer in Bundelkhand is severe. From April to June, daytime temperatures in Rath regularly pass 40 degrees and often go well beyond, with hot winds and frequent power cuts. Sensible families move study to early morning and the hour after sunset, and lessons here are scheduled accordingly.",
        "The monsoon arrives around July and is uneven, sometimes thin, sometimes heavy, and can disturb data networks. Winter brings the opposite problem: cold nights and dense fog in December and January that slow travel and sometimes delay school openings, though lessons on screen are unaffected.",
        "Festivals shape the household calendar. Raksha Bandhan coincides with the Kajari fair at nearby Mahoba, Dussehra and Diwali draw whole families together, and Holi in March overlaps with UP Board papers. IGCSE and IB November sessions fall near Diwali, so revision must finish early.",
        "Board calendars complete the picture. UP Board papers fall in February and March, IGCSE in May-June and October-November, and IB in May and November. A student with siblings in board years should plan for a quiet house in those weeks.",
      ],
      table: {
        caption: "A year of study around Rath",
        columns: ["Months", "Weather and events", "Planning advice"],
        rows: [
          ["December-January", "Cold nights, dense fog, winter break", "Long sessions and internal-assessment drafting"],
          ["February-March", "UP Board papers, Holi, mock exams", "Light lessons if siblings sit board papers"],
          ["April-June", "Extreme heat, IB May and IGCSE May-June", "Early-morning or late-evening slots; power backup"],
          ["July-September", "Monsoon, Raksha Bandhan, Kajari fair", "Flexible scheduling and a voice-call fallback"],
          ["October-November", "Dussehra, Diwali, IGCSE and IB November sessions", "Complete revision before festivals"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Rath go after school?",
      paragraphs: [
        "Within India, nearby options include Bundelkhand University and the Bundelkhand Institute of Engineering and Technology in Jhansi, and, further afield, IIT Kanpur, Chhatrapati Shahu Ji Maharaj University in Kanpur, the University of Lucknow and Banaras Hindu University. Delhi University and colleges in Noida and Gurugram attract many Bundelkhand students too.",
        "An Association of Indian Universities equivalence certificate lets IB and IGCSE-based qualifications be read beside an Indian Class 12. IB Diploma holders may apply to central universities through CUET-UG, although the mapping of IB subjects changes and must be checked each year.",
        "Engineering and medicine depend on subject choice. JEE Main expects Physics, Chemistry and Maths, and NEET expects Biology with Physics and Chemistry. Students should verify the eligibility rule for their board before fixing an IB package or an IGCSE set.",
        "Abroad, the IB Diploma and IGCSE-plus-A-Level results are read in the UK, Canada, Australia, Singapore and much of Europe, and American colleges consider them with tests and essays. Tutors support the subject side and do not write application essays.",
      ],
    },
    {
      heading: "What makes IB Maths and the sciences tough, and how does a tutor help?",
      paragraphs: [
        "IB Maths asks for reasoning and not just results. Analysis and Approaches rewards tidy algebra, calculus and proof, and Applications and Interpretation rewards sound modelling and careful reading of calculator output. Both courses include an Exploration, an independent investigation worth a fifth of the grade.",
        "Physics marks are usually lost to units, sloppy graphs and vague explanations. Chemistry demands speed in calculation and ease with the data booklet. Biology is content-rich, and command words such as state, outline and evaluate decide the depth an answer needs.",
        "For internal assessments, a tutor can explain the criteria, test a research question and read a draft to say which descriptor is unmet. The experiment, the data and the writing must be the student's own.",
        "Students from UP Board schools have a useful head start in discipline and speed. A tutor who has taught them before knows how to keep those strengths while adding explanation and evaluation.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: choosing an IGCSE tier",
      paragraphs: [
        "On Cambridge papers, Core caps the top grade at C, while Extended goes up to A*. On Edexcel, Foundation stops at grade 5 and Higher reaches 9. A student who intends to take IB Maths HL or Diploma sciences should plan for the upper tier from the beginning.",
        "The school normally chooses. A private candidate or a family comparing schools can decide with a diagnostic paper; if a score lands close to the boundary, talk to the school or exam centre before entries close.",
        "Subject choice follows direction. Future engineers and doctors take Maths, Physics, Chemistry and Biology or Computer Science. Students aiming at commerce or civil services might add Economics, Business Studies, Accounting and English, with Hindi where offered.",
        "Fix the board, code and exam session before tutoring starts, so the right papers are practised.",
      ],
    },
  ],

  tutorsIntro:
    "Students in Rath are matched on programme, subject, level and exam board. Each tutor teaches from within India on IST and is introduced with a brief note explaining why they fit your child's course.",

  process: [
    { title: "Tell us about the student", description: "Board or programme, subject, level, present school and the early-morning or evening slots available in your Rath home." },
    { title: "Read our tutor proposal", description: "We name one person and explain the syllabus and level they have taught." },
    { title: "Join a free trial class", description: "A real online lesson, with no fee and no obligation." },
    { title: "Fix terms in writing", description: "Weekly hours, rate and opening topics are recorded before you pay." },
    { title: "Keep going, with reviews", description: "Regular classes, short recaps and a different tutor whenever you ask." },
  ],

  whyPoints: [
    { title: "Matched to the syllabus", description: "Tutors are picked for your child's exact subject, tier and board." },
    { title: "Direct about local schools", description: "We say openly that no Rath school is confirmed for IB or IGCSE." },
    { title: "Heat and fog planned in", description: "Slots are chosen around power cuts, summer afternoons and winter mist." },
    { title: "Trial before fees", description: "You judge the teaching first." },
    { title: "Fixed boundaries", description: "Nobody writes a student's assessed work or essays." },
    { title: "Easy to switch", description: "A poor fit is replaced without awkwardness." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Rath?", answer: "None that we can verify. Schools in Rath follow the UP Board, CBSE or ICSE. The nearest verified international-board schools are in Kanpur, Lucknow and Bhopal, with residential campuses near Gurugram. Ask any school claiming IB or IGCSE status for its authorisation and subject list." },
    { question: "Can I get IB home tuition in Rath?", answer: "In the online sense, yes: a private live class in your own room, taught by a specialist based elsewhere in India. Nobody comes to Rath in person, because tutors visit homes only in Gurugram and parts of Delhi NCR, which we state up front." },
    { question: "Do you have IGCSE tutors for Rath students on Cambridge and Edexcel?", answer: "Both boards are covered. The matching key is the syllabus code plus the tier, for example Cambridge 0625 Physics or Edexcel 4MA1 Mathematics A. Teaching happens online, in Indian Standard Time. Tell us which board and which sitting before we put a name forward." },
    { question: "Do tutors visit homes in Rath?", answer: "No. Tutors visit homes only in Gurugram and parts of Delhi NCR. In Rath, every class is live, private and online. A child needs a laptop or tablet, a steady connection and a quiet table, and the tutor follows the working on a shared board." },
    { question: "How much does IB or IGCSE tuition cost in Rath?", answer: "No price is printed on this site because the figure moves with the course level, the subject, the tutor's background and the weekly hours. Once the free class is over you receive a quote in writing, and it is worth setting beside what a weekly trip to Kanpur or Lucknow would cost." },
    { question: "Which schools near Rath offer IB or IGCSE?", answer: "None inside Rath that we can confirm. Billabong High International School and Allenhouse Public School appear on our Kanpur page, City Montessori School's Cambridge Campus and Eastern Public School in Bhopal on our Jhansi page. Check admissions directly." },
    { question: "Is the first lesson really free?", answer: "It is. Before anything is discussed about fees, your child takes one complete class with the tutor we have in mind. Afterwards you are free to walk away or carry on, and if you carry on, the rate is put in writing first." },
    { question: "Can a tutor write my child's IA or Extended Essay?", answer: "Never. What a tutor can do is talk through the marking criteria, test whether a research question is workable, read a plan and point out where a draft falls short. Data, analysis and sentences all have to come from your child, and any request for finished assessed work is refused." },
    { question: "Which IB Diploma subjects do you cover for students in Rath?", answer: "Requests we see often include Maths AA and AI, the three sciences, Economics, Business Management, English A, Hindi A and B, Computer Science, ESS, History, Global Politics and Psychology, each at Higher or Standard Level. If your timetable throws up something odd, tell us, and we will say frankly whether a tutor exists." },
    { question: "Do you teach IB MYP and PYP to children in Rath?", answer: "We do, and the two stages feel quite different. A PYP child gets a short, playful session built around reading aloud and number games. An MYP student works on the criteria: lab write-ups, source-based answers and planning the Personal Project. A few lines on what was covered reach you after every class." },
    { question: "What if a power cut or a fog delay interrupts a lesson?", answer: "Nothing is lost permanently. The class shrinks or shifts to another day, and before starting, your tutor agrees a backup such as a phone call plus photos of the written working. Key sessions are not booked into the hours when cuts are common. A charged laptop and a hotspot help more than anything else." },
    { question: "How are tutors chosen for Rath students?", answer: "We review qualifications, recent teaching of the exact syllabus and how the person explains. A name is put forward only after we understand your child's level and goal, and the trial class tests the match." },
    { question: "When should my child start tuition?", answer: "The best point is the start of a course: Grade 9 for IGCSE, Class 11 for the Diploma. For a Kanpur or Lucknow admission test, starting one term earlier and focusing on English and Maths is sensible." },
    { question: "My child is on the UP Board. Can we switch to IB or IGCSE?", answer: "Only if a school admits your child, since tutoring cannot create a seat. Until then a tutor can ease the shift by teaching applied questions, filling content gaps and improving written English." },
    { question: "Can lessons fit around the heat, Diwali and UP Board weeks?", answer: "Yes. Most Rath families choose early mornings or evenings, and we plan around board exam weeks, Holi, Diwali and peak summer heat. A clashing slot simply moves to another day." },
    { question: "What if my child does not get on with the tutor?", answer: "Say so, and another tutor is lined up. A short check-in after the first few lessons normally surfaces a mismatch early, and the written plan makes it easy to see what was promised." },
    { question: "Is IB Gram connected to any school or exam board?", answer: "No link exists. IB Gram is independent of the IB, Cambridge, Pearson and every school in Rath, Kanpur or beyond, and the schools named on this page are there purely for context." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The online service in other Indian towns." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where home visits run." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "Programmes, subjects and matching." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel compared." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, core and scoring." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry for younger children." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI compared." },
    { label: "Browse tutors", href: "/tutors/", description: "Backgrounds and subjects of the team." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a message to start." },
    { label: "IB and IGCSE tutoring in Jhansi", href: "/jhansi/", description: "A Bundelkhand city with the same school options." },
    { label: "IB and IGCSE tutoring in Orai", href: "/orai/", description: "A neighbouring Bundelkhand town." },
    { label: "IB and IGCSE tutoring in Kanpur", href: "/kanpur/", description: "The nearest big city with verified international schools." },
    { label: "IB and IGCSE tutoring in Lalitpur", href: "/lalitpur/", description: "Another Bundelkhand district town served online." },
  ],

  closingHeading: "Book a free trial lesson for your Rath student",
  closingBody:
    "Send the programme or board, the subject, the level, and the early-morning or evening hours that suit your home in Rath. We will suggest a tutor, say why, and arrange a free trial class on video. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
