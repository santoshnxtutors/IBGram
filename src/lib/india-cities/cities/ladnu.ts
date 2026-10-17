import type { CitySeoPage } from "../types";

/**
 * /ladnu/ - IB and IGCSE tutoring page for Ladnu, Rajasthan. No school in Ladnu is confirmed to teach IB or
 * Cambridge/Edexcel IGCSE, so stripSchools is empty and clusters reuse Jaipur, Laxmangarh and NCR boarding
 * names from neighbouring pages. All lessons online.
 */
export const ladnu: CitySeoPage = {
  slug: "ladnu",
  countryName: "Ladnu",
  countryNameLong: "Ladnu, Rajasthan",
  demonym: "Ladnu",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early-morning and late-evening slots that dodge the May and June afternoon heat, Paryushan fasting days and the RBSE exam weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 27.65, longitude: 74.3833 },
  wikipedia: "https://en.wikipedia.org/wiki/Ladnu",
  alternateNames: ["Ladnun", "Ladnu Nagaur", "Ladnu Rajasthan"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Ladnu | Online Home Tuition, Rajasthan",
  metaDescription:
    "Learn IB and IGCSE with a one-to-one online tutor from Ladnu, Nagaur. Lessons avoid desert-summer afternoons and festival weeks. Free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Ladnu",
  heroEyebrow: "ONE-TO-ONE IB & IGCSE LESSONS FOR LADNU STUDENTS",
  heroSubtitle:
    "Home tuition for Ladnu students on the IB or IGCSE, delivered online: a live private lesson at your own study table with a tutor who has already taught the subject. Ladnu has no school we can verify for these boards, and the nearest big-city classrooms are a long road journey away, so the laptop does the travelling.",
  primaryKeyword: "IB and IGCSE tutors in Ladnu",
  imageAltText: "A Ladnu student at a home desk in a live online IB Physics lesson, notebook beside a laptop",
  secondaryKeywords: [
    "IB tutor Ladnu",
    "IGCSE tutor Ladnu",
    "IB home tuition Ladnu",
    "IGCSE home tuition Ladnu",
    "IB private tuition Ladnu",
    "IB Maths tutor Ladnu",
    "IGCSE Maths tutor Ladnu",
    "IB Physics tutor Ladnu",
    "IB Chemistry tutor Ladnu",
    "IB Biology tutor Ladnu",
    "IB DP tutor Ladnu",
    "IB MYP tutor Ladnu",
    "IB PYP tutor Ladnu",
    "IGCSE online tuition Ladnu",
    "IB tutor Ladnun",
    "online IB tutor Nagaur district",
    "IGCSE tutor Didwana Sujangarh",
    "Cambridge IGCSE tutor Ladnu Rajasthan",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact IB subject, level or IGCSE syllabus code",
    "Lessons are online in Ladnu; in-person tuition exists only in Gurugram and parts of Delhi NCR",
    "A short written note after every lesson and a no-fuss change of tutor",
    "A free trial lesson, then a rate in writing before you book",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Every IB stage" },
    { value: "Cambridge + Edexcel", label: "Both IGCSE boards" },
    { value: "Dawn and dusk", label: "Slots that beat the heat" },
    { value: "Free trial", label: "Sample before you commit" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition looks like for a family in Ladnu",
    paragraphs: [
      "Ladnu, in Nagaur district on the old road between Sujangarh and Didwana, is best known as a centre of Terapanth Jain life and home to the Jain Vishva Bharati Institute. Families here have long sent sons and daughters far away for study, often to Jaipur, Kolkata, Mumbai or abroad. When IB or IGCSE tuition enters the conversation, it is nearly always because a child is about to move to a school that runs those boards, or because a relative overseas has suggested the route.",
      "We could not confirm any school in Ladnu that teaches the International Baccalaureate or a Cambridge or Pearson Edexcel IGCSE, so this page does not name one. Local classrooms follow the Rajasthan board, CBSE or, in a few cases, ICSE. International-board schools sit in Jaipur, in the Shekhawati belt and in the boarding towns of Delhi NCR, which is why a home-based online lesson is the practical format.",
      "An online lesson means the student stays in Ladnu, at a table in their own house, and meets a tutor through a laptop with a shared writing board. The tutor may be in Bengaluru, Pune or Delhi; what matters is that they have taught the same syllabus before. Dust storms and a 45 degree afternoon are no reason to cancel, because nobody is on the road.",
      "IB Gram is an independent tutoring service and is not connected to the IB, Cambridge, Pearson or any school mentioned here. Tutors coach and give feedback on practice work. They do not write Internal Assessments, Extended Essays, TOK essays or coursework for any student.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE",
      "Live private lessons in English, taught from elsewhere in India",
      "A free trial lesson before any fee is discussed",
      "No tutor visits in Ladnu; home visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "A Ladnu family usually meets an IB stage because of a specific plan, such as a boarding admission or a change of school next April. The four notes below say what each stage asks of a student and how tutoring fits.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "Learning is organised around units of inquiry, and children finish with a small exhibition project. There are no external papers. A tutor spends the time on fluent reading, neat handwriting, number facts and the confidence to explain a thought aloud.",
      countryNote:
        "For Ladnu children the most common PYP request is a bridge before joining a Jaipur or boarding school, so sessions are short and playful.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are marked against published criteria rather than a single exam total, and students complete a Personal Project near the end. Children who have learned mostly by recitation need practice at writing reasons, comparing ideas and reporting experiments in their own words.",
      countryNote:
        "A student from a Hindi-medium Rajasthan classroom often needs English writing stamina first, then criterion-style answers in science and humanities.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects, three or four at Higher Level, alongside TOK, the Extended Essay and CAS. The final score is out of 45 plus up to three bonus points, and papers are sat in May or November. Internal assessments contribute across the two years.",
      countryNote:
        "DP students linked to Ladnu are usually enrolled at a school elsewhere, often as boarders, and use online lessons for weekends, vacations and the pre-exam weeks.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP combines at least two Diploma courses with a career-related study and a reflective project. Few Indian schools run it, but the Diploma courses inside it are examined to the same standard as in the full DP.",
      countryNote:
        "Requests from Ladnu for CP are rare. When one arrives, we treat the Diploma subjects exactly as we would for a DP candidate.",
    },
  ],

  subjectsIntro:
    "Tell us the subject, the level and the exam session, and we look for a tutor who has taught that exact course. Family businesses in this part of Rajasthan often point their children towards commerce and mathematics, so Economics, Business Management and Maths come up often, but the sciences and languages are equally well covered.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof. Students strong in Rajasthan board arithmetic often need help moving from answers to written justification." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator technology, taught through data from markets, weather and trade." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics, with steady practice at graphs, uncertainties and unit discipline." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics, equilibrium and organic reactions, using the data booklet from the first week." },
    { name: "IB Biology", levels: "HL / SL", description: "A wide syllabus turned into recall, application and command-term practice." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram drawing and evaluation, with examples from textile trade, agricultural markets and the wider Marwari business world." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, business tools and the internal research project, useful for students who will join a family firm." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen texts and comparative essays, for students whose first language is Hindi or Marwari." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, writing and oral practice at the level the course requires." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming logic and a staged internal project." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking applied to desert ecology, groundwater and solar energy." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, fieldwork skills and extended responses." },
    { name: "IB Psychology", levels: "HL / SL", description: "Key studies, research methods and structured essay writing." },
    { name: "IB Global Politics", levels: "HL / SL", description: "Concepts, case studies and argument building for students who like current affairs." },
  ],

  igcseSubjectsIntro:
    "IGCSE comes from two boards, Cambridge and Pearson Edexcel, and a tutor must know which one your child will sit. The subjects below are those Ladnu families ask about most, with Hindi included because many students prefer to keep a home language in their set.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths with a calculator and a non-calculator paper; Extended students practise algebra, geometry and graph work." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus, vectors and functions for strong Maths students who plan to continue to Diploma level." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Two equally weighted papers with marks for method on every question." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, forces, circuits and waves, with practical-skills questions rehearsed." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, rates, electrolysis and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, transport, human biology and ecosystems." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing, listening and speaking for students from Hindi-speaking homes." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business activity, finance and marketing, a natural fit for trading families." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, final accounts and ratios, practised through worked examples." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Basic economic problems, markets and government policy, with data questions." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming logic, data representation and networks." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "Language skills for students who wish to include Hindi, subject to the board's current syllabus." },
  ],

  regionsTitle: "Ladnu neighbourhoods and nearby towns our tutors teach online",
  regionsIntro:
    "A live lesson looks the same whether the student lives near the bus stand or out on the Didwana side. What differs is the household rhythm, so the notes below describe how families in and around Ladnu tend to arrange the day, including heat and power-cut realities.",
  regions: [
    { name: "Jain Vishva Bharati campus area", note: "Home to a deemed university and a community of teachers and students; families here are comfortable with academic English and often ask about pathways abroad." },
    { name: "Main bazaar and Ghantaghar side", note: "A trading neighbourhood where shops close late, so lessons usually start after the family's evening meal or early in the morning." },
    { name: "Bus stand and Sujangarh road", note: "Busy with road traffic and transport, so a headset with a microphone that cancels noise helps during evening lessons." },
    { name: "Nagaur road side", note: "Residential streets where many households have relatives in Jaipur, Kolkata or Mumbai who influence board choice." },
    { name: "Didwana road side", note: "Newer housing towards the salt-lake town of Didwana; broadband quality varies street to street, so a mobile hotspot is a sensible backup." },
    { name: "Railway station area", note: "Close to the tracks and to coaching shops for competitive exams; students here often juggle tuition timetables and prefer one fixed weekly slot." },
    { name: "Sikar road side", note: "Families looking towards Sikar and Jaipur for school and coaching, who may use online lessons to prepare before a move." },
    { name: "Didwana", note: "A nearby salt-lake town where some families also seek international-board tuition without a daily journey." },
    { name: "Sujangarh and Ratangarh", note: "Neighbouring towns in Churu district with a strong trading culture; lessons suit students who want to keep the same tutor if the family moves." },
    { name: "Nagaur and Kuchaman City", note: "Larger district towns where parents compare Jaipur and Jodhpur schools before choosing a board." },
  ],

  schoolDisclaimer:
    "Schools listed here are shown only to explain where IB and IGCSE classrooms exist within reach of Ladnu. IB Gram has no agreement with any of them, nor with the IB, Cambridge or Pearson. Please check programmes, fees and admission rules with each school directly.",
  schoolClusters: [
    {
      city: "Local: Ladnu town",
      note: "We could not confirm any school in Ladnu that offers IB or Cambridge or Edexcel IGCSE, so none is listed. Local schools follow the Rajasthan board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Jaipur",
      note: "The state capital, roughly five hours away by road, has the closest choice of international-board classrooms and is where most Ladnu families look first.",
      schools: ["Sanskar School, Sirsi Road", "Jayshree Periwal International School", "Mayoor School Jaipur"],
    },
    {
      city: "Nearby: Sikar district",
      note: "A boarding-style school in Laxmangarh, already described on our Sikar page, for families who want to stay within Shekhawati.",
      schools: ["Mody School, Laxmangarh"],
    },
    {
      city: "Boarding option: Delhi NCR",
      note: "Some business families choose a residential campus near Gurugram for senior years. These two appear on several of our pages as international-board boarding options.",
      schools: ["Pathways World School, Aravali", "GD Goenka World School"],
    },
  ],

  modesIntro:
    "Every Ladnu student studies online. Within that, you can choose a steady weekly rhythm, a planned term with written reviews, or a compact burst before papers, and you can switch between them as the year moves on.",
  modes: [
    {
      title: "Standing weekly lesson",
      description:
        "One tutor, one fixed slot. The student arrives with questions and unfinished problems, the tutor teaches the next idea, and errors are corrected while the pen is still moving.",
      bullets: [
        "Tutor chosen for the subject, level and board",
        "Usually sixty minutes",
        "Working written on a shared board",
        "A good fit for IGCSE, MYP and early DP",
      ],
    },
    {
      title: "Term plan with written notes",
      description:
        "A roadmap for the term, a summary note after each class and a review every few weeks. Parents who are not specialists can follow the progress from the notes alone.",
      bullets: [
        "Notes written in plain language",
        "Reviews that reorder topics if needed",
        "Suitable alongside school or coaching timetables",
        "Extra sessions before class tests",
      ],
    },
    {
      title: "Exam-window intensive",
      description:
        "In the weeks before mocks and the May or November papers, lessons become more frequent and centre on timed questions and line-by-line marking.",
      bullets: [
        "Past papers marked in the board's style",
        "Two to four sessions a week where the timetable allows",
        "Scheduled around Paryushan, Diwali and RBSE weeks",
        "Best begun about three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Ladnu, and where do families go instead?",
      paragraphs: [
        "We have not been able to confirm a school in Ladnu itself that teaches the IB or the Cambridge or Edexcel IGCSE. The town's schools are Hindi- and English-medium institutions affiliated to the Rajasthan board or CBSE, and some are attached to Jain educational trusts. Anyone who tells you otherwise should be asked for the school's affiliation letter and its current list of examined subjects.",
        "Families who want an international board usually weigh three options. The first is Jaipur, where schools such as Sanskar School, Jayshree Periwal International School and Mayoor School operate and where relatives or a hostel can provide a base. The second is a boarding campus in the Delhi NCR belt. The third is a move by the whole family to a city where a parent already has a business.",
        "A smaller number look to Shekhawati, where Mody School in Laxmangarh gives a residential option without leaving the region. Each school sets its own entry test, age cut-offs and fees, and none of that can be guessed from outside.",
        "Online tutoring does not replace a school seat. What it does is prepare a child for an admission round, cover gaps after a mid-year move, and support a student who is already enrolled far from home and wants a specialist during long vacations.",
      ],
    },
    {
      heading: "How do Rajasthan board, CBSE, IGCSE and IB compare for a Ladnu student?",
      paragraphs: [
        "Rajasthan Board of Secondary Education papers are taken in March at Class 10 and Class 12, with a strong emphasis on textbook recall in Hindi or English. CBSE follows a national syllabus with more application questions. IGCSE papers are set in May-June and October-November sessions, and the IB Diploma is examined in May or November. These calendars do not line up, which matters for a child switching between systems.",
        "The typical Ladnu learner is diligent and quick with arithmetic. The jump to IB or IGCSE is usually less about difficulty and more about style. Examiners reward stated assumptions, labelled diagrams, units and explanations in full sentences, so the first month of tutoring often goes into rewriting familiar answers in that shape.",
        "For college entry inside India, Rajasthan has a lively coaching culture for JEE and NEET, centred on Kota and Sikar. IB and IGCSE students can still appear for these exams if they meet subject and eligibility rules, but they should read the current notification before choosing subjects, not after.",
        "A practical rule is to decide where Class 12 will be completed. If the plan is a Rajasthan or national entrance route, staying on the local board or CBSE may be smoother. If the plan is a university abroad or a liberal-arts degree, IB or IGCSE to A Level may offer a better fit.",
      ],
      table: {
        caption: "Boards a Ladnu family is likely to compare",
        columns: ["Board", "Usual setting near Ladnu", "How answers are judged", "Main exam months"],
        rows: [
          ["Rajasthan Board (RBSE)", "Most local schools", "Textbook recall, Hindi or English", "March"],
          ["CBSE", "Private and trust schools", "National syllabus, applied questions", "February-March"],
          ["IGCSE (Cambridge or Edexcel)", "Jaipur and boarding campuses", "Applied, tiered papers", "May-June and October-November"],
          ["IB Diploma", "Jaipur and boarding campuses", "Six subjects plus core, criteria based", "May and November"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a family in Ladnu?",
      paragraphs: [
        "We do not publish a rate card, because the honest answer is that the figure depends on the student. After a free trial lesson we send a written quote, and it reflects the course and level, how specialised the tutor's experience is, and how many lessons a week you want.",
        "Four things move the number. A Higher Level IB Chemistry tutor who has taught the course for several years costs more than a tutor for IGCSE Core English, because the depth of knowledge differs. Weekly lessons over a long stretch usually work out cheaper per hour than a last-minute cluster before a paper.",
        "Families in Ladnu tend to be careful with money and quick to compare. The right comparison is not only the hourly figure. A weekly coaching trip to Jaipur costs bus fares, a day of school or rest, and often a night's stay, and these costs do not appear in a tuition invoice. An online lesson has none of them.",
        "Because nothing is fixed before the trial, you can ask for the written rate, discuss it with the family, and decide without pressure. Lessons can be paused or stopped whenever you want.",
      ],
      bullets: [
        "Level: IB HL or SL, IGCSE Core, Extended, Foundation or Higher",
        "Subject and the tutor's record on that exact syllabus",
        "Lessons per week and length of each lesson",
        "Steady term plan or short exam-season burst",
      ],
    },
    {
      heading: "Online home tuition, Jaipur classes, a local tutor or self-study: which suits Ladnu?",
      paragraphs: [
        "Weekly classes in Jaipur give a student access to specialist teachers, but the journey takes most of a day each way by road or train connection, which is unrealistic for a school-going child. A tutor who joins by video lets the student keep the same specialist without the travel.",
        "Local private teachers in Ladnu are plentiful for Rajasthan board and CBSE subjects and many are excellent at building fundamentals. Fewer have marked IB or IGCSE scripts, so they are most useful for general support in Maths or Hindi rather than syllabus-specific coaching.",
        "Self-study can carry a disciplined student a long way in IGCSE Maths and the sciences if they work through past papers. It is harder in IB internal assessments and in essay subjects, where a student needs a reader who knows the published criteria and can say exactly where a mark was lost.",
        "Online one-to-one lessons offer that reader, together with a flexible slot. The constraint is connectivity, so every tutor agrees a fallback, such as a voice call plus photographs of the working, for days when the network drops.",
      ],
      table: {
        caption: "Study routes compared for Ladnu students",
        columns: ["Route", "What it gives", "What limits it"],
        rows: [
          ["Online one-to-one", "Exact syllabus knowledge, personal pace", "Needs a steady connection and power"],
          ["Weekly Jaipur classes", "Classroom energy, wide choice", "Long journey, cost and lost school time"],
          ["Local private teacher", "Easy to arrange, familiar", "Few with IB or IGCSE marking experience"],
          ["Self-study with past papers", "Free and flexible", "No feedback on essays or internal work"],
        ],
      },
    },
    {
      heading: "How do desert heat, Jain festivals and the school year shape study in Ladnu?",
      paragraphs: [
        "Ladnu sits at the edge of the Thar, so afternoons from April to June regularly pass 40 degrees and can climb higher, with dust-laden winds and occasional power cuts. Sensible families move study to the early morning and the hour after sunset, and tutors here plan lessons for those windows rather than the middle of the day.",
        "The monsoon arrives late and lightly compared with coastal India, but a sudden storm can still disturb the network. Winters are dry and cold at night, which makes December and January good months for long, focused sessions and for finishing internal-assessment drafts.",
        "Paryushan and the Jain festival season matter to many Ladnu households. During fasting days and family observances, students are often tired or unavailable, and a considerate tutor will move a lesson without fuss. Diwali, Holi, Teej and Gangaur also pull families together, so those weeks need realistic targets.",
        "Board calendars complete the picture. RBSE examinations fall in March, IGCSE sessions in May-June and October-November, and IB exams in May and November. A student with relatives preparing for RBSE should plan around that household stress.",
      ],
      table: {
        caption: "A year of study around Ladnu",
        columns: ["Months", "What is happening", "Planning advice"],
        rows: [
          ["January-February", "Cold nights, dry days, mock exams", "Long sessions and mock-paper marking"],
          ["March", "RBSE and CBSE papers, rising heat", "Keep lessons light if siblings are sitting boards"],
          ["April-June", "Extreme daytime heat, IB May papers, IGCSE May-June", "Dawn and late-evening lessons only"],
          ["July-September", "Late monsoon, Paryushan, Teej", "Flexible slots and a connection backup"],
          ["October-November", "Diwali, IGCSE and IB November sessions", "Finish revision before festival weeks"],
          ["December", "Cold and dry, school break", "Consolidation and internal-assessment planning"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Ladnu go after school?",
      paragraphs: [
        "Within India, Jaipur is the main regional destination, with universities and colleges such as Manipal University Jaipur, the Malaviya National Institute of Technology and several private institutions. Delhi, Pune and Mumbai draw business-minded students, and many Terapanth families also keep strong ties with Kolkata and Chennai.",
        "An Association of Indian Universities equivalence certificate allows IB and IGCSE-based qualifications to be treated alongside an Indian Class 12 for admission. IB Diploma holders can apply for central university seats through CUET-UG, although subject mapping changes from year to year, so check the current notice.",
        "Engineering and medicine need planning. JEE Main and state engineering entrances expect Physics, Chemistry and Mathematics, and NEET expects Biology with Physics and Chemistry. Students should confirm the eligibility rule for their board before they finalise an IB subject package or an IGCSE set.",
        "Abroad, the IB Diploma and IGCSE-plus-A-Level results are read widely in the UK, Europe, Canada, Australia and Singapore, and American colleges consider them with their own tests and essays. Tutors support the subject side only and do not write application essays or personal statements.",
      ],
    },
    {
      heading: "What makes IB Maths and the sciences hard, and how do tutors help?",
      paragraphs: [
        "IB Maths asks students to reason in writing. Analysis and Approaches rewards clean algebra, limits and formal argument; Applications and Interpretation rewards modelling choices and the sensible reading of output from a graphing calculator. Both include an Exploration, a personal investigation that accounts for a fifth of the final grade.",
        "Physics marks are usually lost to units, unlabelled axes and loose explanations. Chemistry puts heavy pressure on calculation fluency and on fluency with the data booklet. Biology is content-heavy, and command words such as outline, discuss or evaluate decide how much detail earns a mark.",
        "Internal assessments need a particular kind of help. Tutors can explain the criteria, challenge a research question, and read a draft to say where a descriptor is not yet met. The experiment, analysis and writing remain the student's work.",
        "For Ladnu students, the larger shift is often from memorising to justifying. A tutor who has worked with Rajasthan board students knows how to keep the speed and accuracy they already have while adding explanation.",
      ],
    },
    {
      heading: "How should a Ladnu student choose between Core and Extended, or Foundation and Higher, in IGCSE?",
      paragraphs: [
        "Cambridge Core papers cap the top grade at C, while Extended allows grades up to A*. Edexcel Foundation limits the top grade to 5 and Higher reaches 9. A student who wants to take IB Maths HL or a Diploma in the sciences should aim for the higher tier from the start.",
        "The school normally chooses the tier, but a private candidate or a family comparing schools can decide with a diagnostic paper. If a student scores near the boundary, talk to the school or exam centre, because a wrong tier cannot be corrected after entries close.",
        "Subject selection should follow direction. A future engineer needs Maths, Physics and Chemistry, with Computer Science or Additional Mathematics as support. Business-minded students might combine Business Studies, Accounting and Economics, with English and Hindi filling the language requirement.",
        "Confirm the board, the syllabus code and the exam session before lessons begin so the tutor can prepare the right papers.",
      ],
    },
  ],

  tutorsIntro:
    "Ladnu students are matched by programme, subject, level and exam board. Every tutor teaches from within India in IST and is introduced with a brief note explaining why they suit your child's course.",

  process: [
    { title: "Share your child's details", description: "Board or programme, subject, level, present school and the dawn or evening slots that work in your Ladnu home." },
    { title: "Hear our tutor proposal", description: "We name a tutor and explain which syllabus and level they have taught before." },
    { title: "Attend a free trial lesson", description: "A real lesson online with no fee and no obligation." },
    { title: "Confirm terms in writing", description: "Frequency, rate and first-month topics are written down before payment." },
    { title: "Continue with reviews", description: "Weekly lessons, short notes and a change of tutor on request." },
  ],

  whyPoints: [
    { title: "Syllabus-level matching", description: "Tutors are chosen for your child's exact subject, level and board." },
    { title: "Honest about Ladnu", description: "We tell you plainly that no local IB or IGCSE school is confirmed, so the plan stays realistic." },
    { title: "A trial before any fee", description: "You see the teaching first and decide afterwards." },
    { title: "Clear limits", description: "Tutors never write assessed work, Extended Essays or coursework." },
    { title: "Visible progress", description: "Short written notes show what was covered." },
    { title: "Easy to change", description: "If the fit is wrong, we find another tutor without awkwardness." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Ladnu?", answer: "None that we can confirm. Schools in Ladnu follow the Rajasthan board or CBSE. The nearest confirmed international-board classrooms are in Jaipur and in boarding campuses around Delhi NCR. Ask any school claiming IB or IGCSE status to show its authorisation and current subject list." },
    { question: "Can I get IB home tuition in Ladnu?", answer: "You can get online home tuition: a live one-to-one lesson at your own table with a specialist elsewhere in India. Tutors do not travel to Ladnu. In-person visits run only in Gurugram and parts of Delhi NCR, and we say so before you book anything." },
    { question: "Do you have IGCSE tutors for Ladnu students on both Cambridge and Edexcel?", answer: "Yes, for both boards. We match on the syllabus code and the tier, for example Cambridge 0580 Mathematics or Edexcel 4MA1. Lessons are online and in IST. Please tell us the board and the exam session before we propose a tutor." },
    { question: "Do tutors come to our house in Ladnu?", answer: "No. Home visits run only in Gurugram and parts of Delhi NCR. In Ladnu, lessons are online, live and private. Your child needs a laptop or tablet, a working connection and a quiet table, and the tutor follows the working on a shared whiteboard." },
    { question: "How much does tuition cost in Ladnu?", answer: "It depends on the course level, the subject, the tutor's experience and lessons per week, so we publish no figure. After a free trial lesson you receive a written rate and can compare it with the cost of travelling to Jaipur for classes." },
    { question: "Which schools near Ladnu teach IB or IGCSE?", answer: "Nothing in Ladnu that we can confirm. In Jaipur, Sanskar School, Jayshree Periwal International School and Mayoor School appear on our Nagaur page, and Mody School at Laxmangarh appears on our Sikar page. Always confirm current programmes and admissions with the school." },
    { question: "Is the first lesson really free?", answer: "Yes. Your child attends one genuine lesson with the proposed tutor online at no charge and with no obligation. Afterwards you decide whether to continue, and the rate is quoted in writing before any booking is made." },
    { question: "Can a tutor write my child's IA or Extended Essay?", answer: "No. A tutor can explain the criteria, help narrow a topic, review a plan and comment on drafts. The research, data and writing must be your child's own work, and we decline any request to produce assessed material." },
    { question: "Which IB Diploma subjects do you cover for Ladnu students?", answer: "Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, ESS, Geography, Psychology and Hindi B are common. Higher and Standard Level are both available. If your combination is unusual, ask and we will say honestly whether we can staff it." },
    { question: "Do you teach IB MYP and PYP to Ladnu children?", answer: "Yes. PYP lessons are short and activity-based, centred on reading and number sense. MYP lessons cover criterion-style writing, science reports and the Personal Project. A short note follows each lesson so parents can see what was done." },
    { question: "Does online tuition work when the heat or power cuts hit?", answer: "Usually yes, once a plan is in place. Lessons are booked for early morning or after sunset, when it is cooler, and every tutor agrees a fallback such as a phone call with photographed working if the connection fails. A charged laptop and a hotspot help." },
    { question: "How do you select tutors for Ladnu students?", answer: "We review qualifications, recent teaching of the exact syllabus and the way the person explains. We propose a tutor only after understanding the child's level and goal, and the trial lesson tests the match in practice." },
    { question: "When should my child begin IB or IGCSE tuition?", answer: "At the start of the course if possible: Grade 9 for IGCSE and Class 11 for the Diploma. A child preparing for a Jaipur or boarding admission can begin a term earlier and concentrate on English and Maths." },
    { question: "My child studies in a Rajasthan board school. Can we move to IB or IGCSE?", answer: "A move needs a school seat, because tutoring cannot enrol a child in an IB school. A tutor can help the student adapt to applied questions, close content gaps and improve English writing before the first term begins." },
    { question: "Can lessons fit around Paryushan, Diwali and RBSE weeks?", answer: "Yes. Most Ladnu families choose dawn or evening slots, and we plan around festival weeks and board exam periods. If a fast or family event clashes, a lesson is simply moved to another day." },
    { question: "What if my child does not get on with the tutor?", answer: "Tell us and we will arrange a different tutor. Early check-ins usually catch a poor fit, and the written plan keeps expectations clear for everyone." },
    { question: "Is IB Gram connected to any school or board?", answer: "No. IB Gram is independent and has no link with the IB, Cambridge, Pearson or any school in Ladnu, Jaipur or elsewhere. Schools named here are for context only." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The online model in other Indian towns and cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where in-person visits run." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "Programmes, subjects and how matching works." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel side by side." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure, core and grading." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry learning for younger children." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Comparing AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Backgrounds and subjects of our tutors." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write or message to begin." },
    { label: "IB and IGCSE tutoring in Nagaur", href: "/nagaur/", description: "The district headquarters next door." },
    { label: "IB and IGCSE tutoring in Sikar", href: "/sikar/", description: "A Shekhawati city with a boarding-school option." },
    { label: "IB and IGCSE tutoring in Jaipur", href: "/jaipur/", description: "The nearest large city with international-board schools." },
    { label: "IB and IGCSE tutoring in Sujangarh", href: "/sujangarh/", description: "A neighbouring trading town." },
  ],

  closingHeading: "Book a free trial lesson for your Ladnu student",
  closingBody:
    "Send the programme or board, the subject, the level and the dawn or evening hours that suit your household in Ladnu. We will propose a tutor, say why, and set up a free trial lesson online. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
