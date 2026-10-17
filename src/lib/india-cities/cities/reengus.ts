import type { CitySeoPage } from "../types";

/**
 * /reengus/ - IB and IGCSE tutoring for Reengus, Sikar district, Rajasthan (Wikipedia: 27.37 N, 75.57 E,
 * 26,139 people in 2011; Khatu Shyam temple belt). No IB or Cambridge/Edexcel school in Reengus could be
 * confirmed, so stripSchools is empty and clusters reuse names from verified Sikar and Jaipur pages.
 * All lessons online.
 */
export const reengus: CitySeoPage = {
  slug: "reengus",
  countryName: "Reengus",
  countryNameLong: "Reengus, Sikar, Rajasthan",
  demonym: "Reengus",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots that avoid the Khatu Shyam fair crowds, the summer loo, Holi and Diwali, and the Rajasthan Board exam weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 27.37, longitude: 75.57 },
  wikipedia: "https://en.wikipedia.org/wiki/Reengus",
  alternateNames: ["Ringas", "Reengus Sikar", "Reengus Rajasthan", "Renigus"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Reengus, Sikar | Online Tuition",
  metaDescription:
    "Reengus students in Sikar district can study IB and IGCSE with live one-to-one online tutors, planned around Khatu Shyam fair weeks and loo. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Reengus",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR REENGUS, SIKAR",
  heroSubtitle:
    "Home tuition in Reengus for an IB or IGCSE student means a live private lesson at your own desk, over video, with a subject specialist teaching from another Indian city. Reengus lies in the Shekhawati part of Sikar district, within reach of the Khatu Shyam temple and the Jaipur road, but no school here is confirmed for these boards.",
  primaryKeyword: "IB and IGCSE tutors in Reengus",
  imageAltText: "A Reengus student in Sikar district in a live online IB Physics lesson with a tutor, laptop on a study table at home",
  secondaryKeywords: [
    "IB tutor Reengus",
    "IGCSE tutor Reengus",
    "IB home tuition Reengus",
    "IGCSE home tuition Reengus",
    "IB private tuition Reengus",
    "IB Maths tutor Reengus",
    "IGCSE Maths tutor Reengus",
    "IB Physics tutor Reengus",
    "IB Chemistry tutor Reengus",
    "IB Biology tutor Reengus",
    "IB DP tutor Reengus",
    "IB MYP tutor Reengus",
    "IB PYP tutor Reengus",
    "IGCSE online tuition Reengus",
    "IB tutor Sikar district",
    "IGCSE tutor Khatu Shyam Reengus",
    "online IB tutor Shekhawati",
    "Cambridge IGCSE tutor Reengus Rajasthan",
    "IB tutor Ringas",
  ],

  heroTrustPoints: [
    "Specialists who have already taught the same IB subject or IGCSE code",
    "Teaching for Reengus is by video, as in-person tuition is only in Gurugram and parts of Delhi NCR",
    "A written summary after each class, and a replacement tutor if the match is wrong",
    "A free trial class first, then a rate on paper",
  ],
  heroStats: [
    { value: "Sikar district", label: "Reengus, Rajasthan" },
    { value: "PYP to DP", label: "Four IB programmes" },
    { value: "Cambridge + Edexcel", label: "IGCSE boards" },
    { value: "Free trial", label: "A real lesson first" },
  ],

  intro: {
    heading: "Reengus in Shekhawati: IB and IGCSE learning from a pilgrim and trading town",
    paragraphs: [
      "Reengus is a town of about twenty-six thousand people in Sikar district, a place where trade, farming and pilgrim traffic blend. The Khatu Shyam temple belt, a short drive away, brings vast crowds to the Phalgun fair each spring, and the town has its own Bheru ji temple and a railway junction that ties it to Jaipur and the Shekhawati towns. Literacy here is around seventy-two per cent, above the national average.",
      "Sikar district's fame rests on its coaching industry, aimed mainly at JEE and NEET, and Reengus households understand that world well. International boards lead somewhere else. Local schools follow the Rajasthan Board or CBSE, and we could not confirm any school in Reengus that runs the IB or a Cambridge or Pearson Edexcel IGCSE, so we name none as local.",
      "That leaves online lessons as the working route. IB Gram connects a Reengus student with a tutor who lives elsewhere in India and has taught the syllabus before. The child sits at home with a laptop and notebook, the tutor follows each line on a shared screen, and no one has to board a bus. Tutors do not visit Reengus, as in-person tuition is limited to Gurugram and parts of Delhi NCR.",
      "IB Gram has no ties to the IB, Cambridge, Pearson or the schools named further down. Tutors teach, correct and advise. They refuse to author a student's Internal Assessment, Extended Essay, TOK essay or coursework.",
    ],
    bullets: [
      "All four IB programmes plus Cambridge and Pearson Edexcel IGCSE, taught for Reengus students",
      "Live private lessons in English, with Hindi explanation if it helps",
      "Free trial class, with fees raised only afterwards",
      "Nobody visits the house in Reengus; doorstep tuition is a Gurugram and Delhi NCR service",
    ],
  },

  programmesIntro:
    "A Reengus family rarely meets the IB on its own street. It comes through a boarding place, a move to Jaipur or Delhi, or a plan to study abroad. The notes below describe each stage and where a tutor fits in.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Pupils explore a theme for weeks, ask their own questions and present what they found in a final Exhibition. Nobody sits an external exam. A tutor strengthens the foundations: confident reading aloud, easy number work and describing an idea in a few clear sentences.",
      countryNote:
        "A young child from Reengus heading for a school in Jaipur usually needs only short, cheerful sessions to settle into inquiry-led classes.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is marked against criteria, and tasks, projects and tests all count. Students from Rajasthan Board classrooms are usually accurate and fast, and the extra step is explaining their reasoning in written English.",
      countryNote:
        "Students from Reengus who join MYP late typically need first help with lab reports, source work and the personal project.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three or four of them at Higher Level, with the Extended Essay, Theory of Knowledge and CAS. The top score is 45, the exams run in May or November, and internal assessments are due long before.",
      countryNote:
        "A Diploma student with a Reengus address usually boards in Jaipur or further afield and uses online lessons at home on holidays and in the vacations.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP mixes Diploma courses with a career-related study and a reflective core. Hardly any Indian schools run it, and the Diploma courses inside it are taught to the same level as in the full programme.",
      countryNote:
        "We rarely get CP questions from Sikar district; when we do, the Diploma subjects are taught exactly as for DP.",
    },
  ],

  subjectsIntro:
    "Give us the subject, level and exam session and we search for someone who has taught that course. IB Maths shows why: it has two courses, each at two levels, and a tutor who excels at one may not be right for another.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, algebra, functions and proof. Rajasthan's JEE-minded students have the technique; lessons teach them to show every logical step." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling on a graphing calculator, using local data such as mustard yields and pilgrim footfall." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics, with extra time on uncertainty and graph analysis." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Mole calculations, energetics, kinetics and organic chemistry, with the data booklet used from lesson one." },
    { name: "IB Biology", levels: "HL / SL", description: "A big syllabus handled through retrieval practice; desert ecology and groundwater depletion supply good local cases." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and evaluation, with examples drawn from Marwari trading networks, pilgrimage economies and groundwater pricing." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study analysis and the internal research project, ideal for families in Shekhawati's long trading tradition." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen texts and the oral commentary, for students whose first languages are Hindi or Shekhawati." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, writing and speaking for fluent Hindi speakers, a dependable score for many students." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithmic thinking, with the project built in stages." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems models and case studies on falling water tables, desertification and solar power in Rajasthan." },
    { name: "IB Geography", levels: "HL / SL", description: "Resources, hazards and development, with arid-zone farming as an anchor." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and essay planning, with the region's haveli-era merchant history as context." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, methods and structured essays." },
  ],

  igcseSubjectsIntro:
    "Two boards run IGCSE, Cambridge and Pearson Edexcel, and they differ in paper design, tier names and question phrasing. Naming the board matters for tutor choice. Here are the subjects Reengus parents enquire about most.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths with calculator and non-calculator papers; Extended candidates spend most time on algebra, graphs and geometry." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "A bridge to IB Maths HL, with early calculus and functions." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Two papers of equal weight, with marks for method." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Motion, energy, circuits and waves, plus practice for the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, reaction rates, the periodic table and organic chains." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, human biology, plants and ecosystems." },
    { name: "IGCSE ESL (Cambridge 0510)", levels: "Core / Extended", description: "All four language skills for pupils who speak Hindi or Shekhawati at home." },
    { name: "IGCSE First Language English (0500)", levels: "Grade 9-10", description: "Composition for varied readers and aims." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, networks and data." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Bookkeeping and statements, suited to families in trade." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "A comfortable subject for students from Rajasthan who want Hindi in the certificate." },
  ],

  regionsTitle: "Reengus and the Sikar district towns we teach online",
  regionsIntro:
    "A video lesson looks the same from the main bazaar or from a village farm. What differs is the household day: the shop shutters, the bus to Sikar or Jaipur, the summer power cut. The notes below show how families nearby plan study.",
  regions: [
    { name: "Reengus town centre", note: "The market area near the Bheru ji temple; many households are in trade, so lessons start after shops close." },
    { name: "Reengus Junction area", note: "Around the railway junction on the Jaipur-Sikar line; handy for boarders who travel home on weekends." },
    { name: "Khatu Shyam road", note: "The road towards Khatu Shyamji, busy with pilgrims during the spring fair; family and traffic pressure make that fortnight a poor time for new topics." },
    { name: "Reengus villages", note: "Farming hamlets with mustard, bajra and wheat fields where mobile data is the main connection." },
    { name: "Sikar city", note: "The district headquarters, a coaching capital, with larger schools, hospitals and a lively tuition market." },
    { name: "Khatu Shyamji", note: "The temple town a short drive away, whose fair shapes the whole region's calendar." },
    { name: "Shri Madhopur and Neem ka Thana", note: "Neighbouring tehsil towns, whose students would otherwise travel far for any specialised class." },
    { name: "Laxmangarh", note: "A Shekhawati town to the north, home to a school we list on our Sikar page." },
    { name: "Chomu and Shahpura side", note: "Towns on the way to Jaipur where many Reengus families have relatives." },
    { name: "Jaipur", note: "The state capital about 70 km away, with the main group of IB and Cambridge schools in Rajasthan." },
  ],

  schoolDisclaimer:
    "Schools appear below purely as pointers to the places Reengus families consider. No agreement exists between IB Gram and any of them, or between IB Gram and the IB, Cambridge or Pearson. Because offerings and admission rules shift, check each school directly.",
  schoolClusters: [
    {
      city: "Local: Reengus and Sikar district",
      note: "We could not confirm any school in Reengus that offers the IB or an IGCSE. One school in the district, at Laxmangarh, appears on our Sikar page and is listed below as the nearest district option.",
      schools: ["Mody School, Laxmangarh"],
    },
    {
      city: "Nearby: Jaipur",
      note: "Jaipur has the widest choice of IB and Cambridge schools in Rajasthan, reached by the Sikar-Jaipur highway. These names also appear on our Jaipur page.",
      schools: ["Sanskar School, Sirsi Road", "Jayshree Periwal International School", "Mayoor School Jaipur"],
    },
    {
      city: "Nearby: Delhi NCR (boarding)",
      note: "Delhi NCR schools take boarders and relocating families from across Rajasthan, and it is the one region where IB Gram offers in-person tuition.",
      schools: ["Vasant Valley School, Delhi", "The British School, New Delhi"],
    },
  ],

  modesIntro:
    "Every Reengus lesson runs online. Families then choose the rhythm that fits home life, and three patterns are common.",
  modes: [
    {
      title: "A standing weekly class",
      description:
        "A single tutor meets the student at a fixed time. Problems are brought along, the next topic is taught and mistakes are corrected on the spot.",
      bullets: [
        "Tutor picked for your exact syllabus",
        "About an hour, one or two evenings a week",
        "Handwriting visible on a phone camera or pen tablet",
        "A fit for IGCSE, MYP and DP students",
      ],
    },
    {
      title: "A term plan with updates",
      description:
        "A plan for the term, a plain-language note after each class and a call every few weeks to reorder topics when needed.",
      bullets: [
        "Notes written for parents new to the IB",
        "Short calls that prevent nasty surprises",
        "Sits alongside school hours or coaching",
        "Added revision ahead of unit tests",
      ],
    },
    {
      title: "Pre-exam intensives",
      description:
        "As mocks and the May or November series draw close, the sessions turn into timed past papers with thorough correction.",
      bullets: [
        "Scripts marked as the examiner would mark them",
        "Up to four sessions a week if the house allows",
        "Scheduled around fair week and Diwali",
        "Ideal start: three weeks before paper one",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Reengus?",
      paragraphs: [
        "None that we can confirm. Reengus schools teach to the Rajasthan Board or CBSE, with English-medium sections in several private schools. Anyone advertising the IB or IGCSE locally should be asked for written authorisation and the subject list for the current year before any fee is paid.",
        "Parents who want an international board generally look to Jaipur, about 70 km away, where several campuses offer the IB or Cambridge programmes, or to boarding schools in the hills and in Delhi NCR. A school at Laxmangarh in Sikar district is the nearest listed option within the district, and our Sikar page covers it.",
        "Admission is school by school. Age cut-offs, entrance tests and fee schedules differ, and places at Class 9 and Class 11 are the hardest to get. Families that start planning a year ahead have more choice than those who start in spring.",
        "That is why online tutoring helps. A Reengus student can begin writing in IGCSE or MYP style while still at the local school, so the first term in a new classroom is spent on content rather than on catching up.",
      ],
    },
    {
      heading: "How do the Rajasthan Board, CBSE, IGCSE and IB compare for a Reengus student?",
      paragraphs: [
        "Rajasthan's own board, the RBSE, tests Classes 10 and 12 in March in Hindi or English, and CBSE tests in February and March on a national syllabus. IGCSE and IB papers arrive mainly in May and November and give as many marks for explaining and applying as for remembering.",
        "Students from Sikar district are often strong at speed and accuracy because the culture of JEE and NEET coaching trains them hard. International papers add something different: marks for units, definitions, stated reasoning and full sentences. The first weeks of tutoring concentrate on that shift.",
        "Home language deserves attention: Reengus households speak Hindi or Shekhawati while exams are set in English. Scientific and numerical answers adapt fast; extended writing takes longer.",
        "The right board depends on the destination. A JEE or NEET seat suggests CBSE or the state board. The IB Diploma, a private university or study abroad suggests IGCSE first and the Diploma afterwards.",
      ],
      table: {
        caption: "Board options for a Reengus family",
        columns: ["Board", "Where it is taught", "Feel of the paper", "Main exam months"],
        rows: [
          ["Rajasthan Board", "Most government and private schools", "Textbook recall, Hindi or English medium", "Mar"],
          ["CBSE", "Many private schools in Sikar district", "National syllabus with application questions", "Feb-Mar"],
          ["Cambridge or Edexcel IGCSE", "Jaipur, Delhi NCR and boarding schools", "Tiered papers and command words", "May-Jun, Oct-Nov"],
          ["IB Diploma", "Jaipur, Delhi NCR and boarding schools", "Six subjects, core components and coursework", "May, Nov"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Reengus family?",
      paragraphs: [
        "There is no fee table on our site because each student is different. The quote comes in writing after the free trial lesson, and it depends on four things: how advanced the course is, the subject, how long the tutor has taught that exact syllabus and how many hours a week you want.",
        "A Higher Level IB Chemistry specialist is not the same resource as a tutor of IGCSE Foundation Maths. Experienced tutors command higher rates, but they often reach the goal in fewer sessions, so the hourly figure is only half the picture.",
        "Online lessons reduce other costs. There is no bus fare to Sikar or Jaipur, no half-day lost on the highway, and no deposit on a room near a coaching centre. For a family that already budgets for school and coaching fees, these savings matter.",
        "The sensible step is to take the trial, read the quote and compare it with your present monthly spend on tuition. You can stop or change tutor whenever you like.",
      ],
      bullets: [
        "Level of the course, from IB Higher to IGCSE Foundation",
        "Subject, and how long the tutor has taught that very syllabus",
        "Lessons per week and minutes per lesson",
        "A standing plan, or a burst before the exams",
      ],
    },
    {
      heading: "Online tutor, Sikar coaching, Jaipur classes or self-study?",
      paragraphs: [
        "Coaching in Sikar is a giant industry whose purpose is JEE, NEET and board success. A child on the IB or IGCSE could sit among peers on other courses, with teachers who have never graded an IB Internal Assessment or Cambridge practical.",
        "Classes in Jaipur include some IB and IGCSE specialists, but a weekly trip of 70 km each way is too much for a school-age child. Video puts a similar specialist at your own table without the journey.",
        "A local private tutor is easy to arrange and may be a fine teacher of school subjects. The gap is syllabus-specific knowledge, which is thin in smaller towns.",
        "Working alone through past papers can succeed in IGCSE Maths and the sciences for a child with discipline. Written work is where it breaks down, since someone familiar with the mark scheme must explain what was lost.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Reengus",
        columns: ["Route", "Strength", "Limit"],
        rows: [
          ["Online one-to-one", "Exact syllabus, personal feedback", "Needs a stable internet connection"],
          ["Sikar coaching centre", "Peers and exam discipline", "Built for JEE, NEET and other boards"],
          ["Classes in Jaipur", "In-person, some IB specialists", "Long travel each week"],
          ["Local private tutor", "Easy and familiar", "Little IB or IGCSE experience"],
          ["Self-study", "Free and flexible", "No marking of essays or open answers"],
        ],
      },
    },
    {
      heading: "How do the Khatu Shyam fair, the summer loo and festivals shape the study year?",
      paragraphs: [
        "Reengus follows the calendar of its region. The Phalgun fair at Khatu Shyamji, in February or March, sends enormous numbers of pilgrims along the roads for days, and families host guests, offer food and join the walk. It also falls near board exams and the IB May preparation window, so lessons are kept short that fortnight.",
        "Summer in Shekhawati is fierce. From April to June, daytime temperatures climb very high, the hot loo wind blows and power cuts become more likely. We schedule lessons for the cooler evenings and ask families to share the hours when electricity is steadiest.",
        "Rain is light by Indian standards, arriving between July and September. Teej and Gangaur bring fairs and visits, and Diwali, in October or November, lands close to the IB November session and Cambridge's October-November series, which makes early revision wise.",
        "Winters are cold and dry, with clear evenings that suit study. December and January are the best months for long consolidation sessions.",
      ],
      table: {
        caption: "A study calendar for an IB or IGCSE student in Reengus",
        columns: ["Months", "What is happening", "Planning note"],
        rows: [
          ["Jan-Feb", "Cold, dry, Khatu Shyam fair approaches, board season", "Long evening lessons; shorter in fair week"],
          ["Mar-May", "Holi, rising heat, IB May and IGCSE summer sessions", "Timed papers after sunset; plan for power cuts"],
          ["Jun-Sep", "Loo, then modest monsoon; school restart; Teej", "Keep IA work steady"],
          ["Oct-Nov", "Dussehra, Diwali, November sessions", "Finish revision before the festivals"],
          ["Dec", "Cold, school break", "Longer consolidation sessions"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Reengus go next?",
      paragraphs: [
        "In India, students from Sikar district commonly aim for Jaipur, Delhi, Kota or Pilani for technical study. BITS Pilani, a short distance away in Jhunjhunu district, is a name familiar to many households. Each institution sets its own admission rules, which change from year to year.",
        "Most Indian universities expect an equivalence certificate from the Association of Indian Universities before treating IB or IGCSE results as Class 12 marks, and Diploma holders can also try CUET-UG for central universities. Both requirements change, so read the current notice.",
        "Think early if the goal is engineering or medicine. JEE and NEET state which subjects they require, and a Diploma package without Physics, Chemistry or Biology may rule a route out. The eligibility pages are best read before the subjects are chosen.",
        "Abroad, IB and IGCSE grades are read routinely in the UK, Canada, Australia, Singapore and Europe, and American colleges weigh them with tests and essays. Tutors support academic subjects only.",
      ],
    },
    {
      heading: "Where do students lose marks in IB Maths and the sciences?",
      paragraphs: [
        "Formulae are rarely what holds a Rajasthan student back. IB Maths gives credit for the reasoning around an answer, so a bare correct number can score little. Analysis and Approaches rewards proof and algebra; Applications and Interpretation asks students to judge a model and read its output.",
        "Each Maths course includes an Exploration, a personal mathematical project worth a fifth of the grade. Tutors help narrow a topic and check the mathematics. Planning and writing remain the student's work.",
        "A Physics examiner takes marks away for absent units, careless graph work and loose wording. Chemistry rewards calculations laid out step by step. Biology turns on the verb: to outline is to summarise, to explain is to give a cause, and to evaluate is to weigh and conclude.",
        "Students trained in Sikar's competitive culture can solve fast. A tutor adds the habit of writing the reasoning down, using timed papers marked against the real mark scheme.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: choosing the IGCSE tier",
      paragraphs: [
        "Choosing Core with Cambridge puts a ceiling of C on the result, whereas Extended allows A*. With Pearson the equivalent split is Foundation, ending at 5, and Higher, ending at 9. Anyone eyeing IB Maths HL or science subjects at Diploma level should plan to enter the upper tier.",
        "A school or exam centre normally fixes the tier. Families who choose it, private candidates among them, should sit a timed diagnostic paper and read the mark honestly. A score near the boundary deserves a conversation with the centre before entries close.",
        "Let the intended career steer the list. Aspiring engineers take Maths with Physics, Chemistry and Computer Science; business families often add Accounting or Economics, and Hindi as a second language takes some pressure off.",
        "Before lesson one, confirm the board, syllabus code and exam series, because preparation differs paper by paper.",
      ],
    },
  ],

  tutorsIntro:
    "The pairing for Reengus follows four facts: programme, subject, level and examining board. Teachers work from India on IST hours, and each arrives with a brief line about the students they have taught who resemble yours.",

  process: [
    { title: "Send your child's details", description: "Board or programme, subject, level, school and the evening hours that suit your Reengus home." },
    { title: "Receive a tutor name", description: "A named tutor is put forward, along with the courses they have previously taught that match your child's." },
    { title: "Try a free lesson", description: "One real online lesson without payment or obligation." },
    { title: "Settle terms on paper", description: "Fee, weekly hours and the topics for month one are put on paper, and you pay only after reading them." },
    { title: "Keep going with updates", description: "Classes go on weekly with brief updates; ask, and a different tutor takes over." },
  ],

  whyPoints: [
    { title: "Chosen for the syllabus", description: "Each tutor is selected for the subject, level and exam board your child faces." },
    { title: "Honest about local schools", description: "We say clearly that Reengus has no school we can confirm for these boards." },
    { title: "A trial before fees", description: "The first lesson is free, so you judge the teaching yourself." },
    { title: "Clear limits", description: "Tutors never write IAs, essays or coursework." },
    { title: "Parents stay informed", description: "A short written update follows each lesson." },
    { title: "Easy to switch", description: "A poor match is replaced without argument." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Reengus?", answer: "None we can confirm. Schools in Reengus follow the Rajasthan Board or CBSE, and the nearest international-board campuses are in Jaipur and in boarding schools elsewhere. If a school claims otherwise, ask for its authorisation and subject list before paying any fee." },
    { question: "Can I get IB home tuition in Reengus?", answer: "Our service in Reengus is tuition at home by video. Your child learns at the family desk, one to one and live, from a specialist in another Indian city who never makes the trip. Doorstep visits are a feature of Gurugram and parts of Delhi NCR alone, and that is explained before any booking." },
    { question: "Do you have IGCSE tutors for Cambridge and Edexcel in Sikar district?", answer: "Yes, for both boards, taught on video in IST. We pair by paper code and tier, for example Cambridge 0625 Physics or Edexcel 4MA1. Name the board, subject and sitting, and the tutor we put forward will have taught that paper." },
    { question: "Will a tutor come to our house in Reengus?", answer: "No. Home visits are confined to Gurugram and parts of Delhi NCR. In Reengus the lesson is a live video call with a laptop or tablet, steady internet and a quiet corner, and the tutor reads the working on a shared digital page." },
    { question: "How much does IB or IGCSE tuition cost in Reengus?", answer: "We quote each family separately, since the number depends on course difficulty, subject, how well the tutor knows that syllabus and how many hours you choose. The written quote follows the free trial and sits easily beside whatever you spend on coaching or on journeys to Sikar and Jaipur." },
    { question: "Is the first lesson free?", answer: "It is free. The tutor we suggest teaches your child one proper session by video, you owe nothing afterwards, and no booking is made until you have seen the rate in writing and said yes." },
    { question: "My child is in a Sikar coaching programme for JEE. Can IB or IGCSE lessons fit?", answer: "Yes, if the timetable is planned honestly. Evenings are often free after coaching, and a single weekly lesson is easier to sustain than several. We follow your child's coaching calendar, avoid test weeks and keep lessons short when mock exams are close." },
    { question: "How does the Khatu Shyam fair affect lessons?", answer: "The fair fills roads and homes for several days in February or March, and families take part. We simply move lessons that week, keep any online class short and arrange extra sessions either side of it. Nothing is lost if the plan is agreed in advance." },
    { question: "Can a tutor help with the Internal Assessment or Extended Essay?", answer: "Reading and reacting are fine; ghost-writing is not. Our tutors will question a draft topic, test whether the planned method answers it and mark any criteria that still look thin. Producing sentences or data for the student is something they refuse, because examiners must be able to trust that the Internal Assessment and Extended Essay are the candidate's own." },
    { question: "How do you cope with summer power cuts?", answer: "Please tell us when power is most reliable and keep a phone hotspot and a charged laptop to hand. Should a class stop halfway, the tutor writes up what was done and the remainder is taught on another evening." },
    { question: "Our daughter learns in a Hindi-medium school. Can she cope with IB or IGCSE?", answer: "Yes, if the early weeks are spent on language. Numbers and experiments travel across mediums easily; words like deduce, justify and compare need teaching. Tutors begin with subject vocabulary and paragraph building, then introduce complete papers, and families generally see a difference within a month." },
    { question: "Which IB Maths course should my child take?", answer: "Match the course to the degree. Analysis and Approaches, heavy on calculus and proof, serves engineers, physicists and mathematicians. Applications and Interpretation, built on data and technology, serves students of business, economics, psychology and design. The school confirms the choice and we teach it." },
    { question: "How do we choose between IGCSE and CBSE for Class 9?", answer: "The answer lies in what follows Class 12. For a JEE or NEET attempt, CBSE tends to be the easier fit. For the Diploma, a private university or a foreign degree, IGCSE builds the right habits. A tutor can discuss this with you during the trial." },
    { question: "What internet speed do we need?", answer: "Fixed broadband or dependable 4G is plenty for video and an online board, and a rehearsal call a day ahead removes surprises. If the signal drops often, the class can be shortened and a fuller written summary sent afterwards." },
    { question: "How do we begin?", answer: "Use WhatsApp on +91 7439 368 115 or email support@ibgram.com and mention the class, board, subject and school. A suggested tutor and a trial time follow, and the rest depends on whether your child found the trial worthwhile." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "The main site, for an overview of the service." },
    { label: "Online tuition across India", href: "/india/", description: "Every other town and city on our India list." },
    { label: "IB and IGCSE tutors in Sikar", href: "/sikar/", description: "Sikar city, the district seat, with its own school notes." },
    { label: "IB and IGCSE tutors in Jaipur", href: "/jaipur/", description: "The Rajasthan capital and its group of IB and Cambridge campuses." },
    { label: "IB and IGCSE tutors in Alwar", href: "/alwar/", description: "A second Rajasthan city taught online, east of the Shekhawati belt." },
    { label: "IB and IGCSE tutors in Nokha, Rajasthan", href: "/nokha/", description: "A Bikaner district town taught online as well." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB subjects and the tutors who teach them." },
    { label: "IGCSE tuition", href: "/igcse/", description: "How Cambridge and Edexcel IGCSE courses differ." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure of the Diploma: subjects, core and exam sessions." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us or book the free trial." },
  ],

  closingHeading: "Plan IB or IGCSE lessons from Reengus",
  closingBody:
    "Reengus parents can start by messaging three facts: the class, the board and the troublesome subject. We name a teacher who has taught that course, arrange a free first session and mention fees only if you want to carry on. Because the teacher is elsewhere in India and the classroom is a laptop screen, nobody needs to take the Jaipur highway. Our email is support@ibgram.com and our WhatsApp is +91 7439 368 115.",
};
