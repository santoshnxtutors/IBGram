import type { CitySeoPage } from "../types";

/**
 * /santipur/ - IB and IGCSE tutoring page for Santipur (Shantipur), Nadia, West Bengal. Online only: no
 * tutor comes to a house in Santipur, as in-person visits run only in Gurugram and parts of Delhi NCR.
 * No school in Santipur is confirmed to offer the IB or Cambridge/Edexcel IGCSE, so stripSchools is empty
 * and the clusters point to Kolkata, the city Nadia families actually travel to.
 */
export const santipur: CitySeoPage = {
  slug: "santipur",
  countryName: "Santipur",
  countryNameLong: "Santipur, Nadia, West Bengal",
  demonym: "Santipur",
  state: "West Bengal",
  stateCode: "IN-WB",
  flagCode: "in",
  countryCode: "IN",
  region: "West Bengal, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons bend around Durga Puja, Rash Utsav in November and the school's own timetable, with a spare slot kept for monsoon disruption",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.25, longitude: 88.4333 },
  wikipedia: "https://en.wikipedia.org/wiki/Shantipur",
  alternateNames: ["Shantipur", "Shantipore", "Santipore"],
  stripSchools: [],

  title: "Santipur IB & IGCSE Tutors | Private Tuition From Home",
  metaDescription:
    "IB and IGCSE tutors for Santipur, Nadia: live one-to-one lessons at home on a laptop, subject specialists, rates in writing and a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition at Home in Santipur",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR SANTIPUR FAMILIES",
  heroSubtitle:
    "If you are searching for IB or IGCSE home tuition in Santipur, here is how it really works: a specialist teaches your child live, one-to-one, over video, while the student sits at home. No tutor turns up at the door. For a Nadia family whose nearest international classrooms are in Kolkata, this is the practical way to get a subject expert for Maths, the sciences, English or a language.",
  primaryKeyword: "IB and IGCSE tutors in Santipur",
  imageAltText: "Santipur student revising IGCSE Chemistry with a tutor over a live video lesson at home",
  secondaryKeywords: [
    "IB tutor Santipur",
    "IGCSE tutor Santipur",
    "IB home tuition Santipur",
    "IGCSE home tuition Santipur",
    "IB private tuition Santipur",
    "IB Maths tutor Santipur",
    "IGCSE Maths tutor Santipur",
    "IB Physics tutor Santipur",
    "IB Chemistry tutor Santipur",
    "IB Biology tutor Santipur",
    "IB DP tutor Santipur",
    "IB MYP tutor Santipur",
    "IB PYP tutor Santipur",
    "IGCSE online tuition Santipur",
    "Cambridge IGCSE tutor Santipur",
    "IB tutor Nadia",
    "IB tutor Ranaghat",
    "IB tutor Krishnanagar",
    "IB tutor Shantipur West Bengal",
    "IB and IGCSE tutor Santipur Nadia",
  ],

  heroTrustPoints: [
    "Each tutor is chosen for the exact IB subject and level, or the Cambridge or Edexcel paper code, your child will sit",
    "All lessons are live and online; tutors do not visit homes in Santipur, since house visits exist only in Gurugram and parts of Delhi NCR",
    "A free trial lesson comes first, with rates sent in writing afterwards",
    "Parents receive a written note after every session",
    "Independent of the IB, Cambridge, Pearson and all schools mentioned here",
  ],
  heroStats: [
    { value: "IST", label: "Same time zone for tutor and student" },
    { value: "PYP to DP", label: "All IB stages, plus CP" },
    { value: "Free trial", label: "See the teaching before deciding" },
    { value: "Bengali-friendly", label: "Support for Bengali as a school language" },
  ],

  intro: {
    heading: "What IB and IGCSE study looks like from a Nadia riverside town",
    paragraphs: [
      "Santipur is known across Bengal for its tant sarees, its Rash Utsav and a long scholarly tradition built around Adwaita Acharya and the old town's colleges. Schooling here follows the West Bengal boards, with some CBSE and ICSE options nearby. Interest in IB and IGCSE tends to come from a small set of households: families with a member working abroad, parents in Kolkata jobs who commute or plan to relocate, and students who intend to study overseas.",
      "We were unable to confirm any school in Santipur that runs an IB programme or is a registered Cambridge or Edexcel IGCSE centre, so this page names none. The nearest confirmed campuses are in Kolkata, about a hundred kilometres away by rail or road. Families in Santipur therefore use tutoring in one of three ways: preparing for entry into a Kolkata school, studying an international syllabus privately, or supporting a child who boards away.",
      "About the phrase home tuition: tutors from IB Gram do not visit homes in Santipur. In-person lessons run only in Gurugram and parts of Delhi NCR. What a Santipur family receives is private tuition from home, online, meaning a live one-to-one lesson where the student already studies, without the train to Ranaghat or Sealdah and back.",
      "Tutors are based in India and work on Indian Standard Time. They coach and mark, and they explain mark schemes, but they do not write Internal Assessments, Extended Essays, TOK essays or coursework. That line protects the student's own work and their result.",
    ],
    bullets: [
      "IB and IGCSE tutors in Santipur, matched by subject, level and board",
      "Private lessons at home on a laptop or tablet",
      "Free trial lesson, rate in writing, change of tutor on request",
      "Message on WhatsApp at +91 7439 368 115 or email ibgram24@gmail.com",
    ],
  },

  programmesIntro:
    "With no confirmed local school for any of the four IB programmes, a Santipur family usually meets them at one step removed: through a Kolkata admission, a planned relocation or a child studying the syllabus privately. This is what each stage covers and where a tutor is most useful.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Classroom learning is organised around big themes rather than isolated subjects, and pupils finish with a personal Exhibition. Nothing is examined. Tutors mainly strengthen reading, early mathematics and the habit of asking good questions.",
      countryNote:
        "Parents in Santipur who ask about PYP are usually preparing a young child for a school in Kolkata and want the switch from a Bengali-medium or CBSE start to feel gentle.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are marked against published criteria on a scale of 1 to 8, with a Personal Project at the end of the programme. Students who know the material can still lose marks by not addressing the exact verb in the criterion.",
      countryNote:
        "A Santipur child moving to an MYP school after Class 6 or 7 often needs help writing in extended English and working to criteria, both easy to practise one-to-one online.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students choose six subjects, three at Higher Level, and add Theory of Knowledge, an Extended Essay and CAS. Grades come from a mix of internal assessment and final papers, with up to 45 points available and exam sessions in May and November.",
      countryNote:
        "Because the Diploma is taught in schools away from Santipur, sessions are placed around the student's hostel, boarding or city-flat routine.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP combines at least two Diploma courses with a career-related study, reflective project and personal-skills modules. It is rare in India, and tutoring concentrates on the Diploma-level courses inside it.",
      countryNote:
        "Requests for CP from Nadia are uncommon; if you are considering it, we can discuss the academic strand.",
    },
  ],

  subjectsIntro:
    "Every request begins with the syllabus. A Santipur student weak in Physics HL circuits needs a very different tutor from another who wants Standard Level English, so we match on subject, level and exam session first, then agree a weekly slot that works around school and the household.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "The route for future engineers, scientists and economists. Sessions build algebraic fluency, calculus technique and comfort with unfamiliar questions, with the Exploration planned in good time." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator work take centre stage. A tutor helps the student pick a suitable model and explain why it fits real data." },
    { name: "IB Physics", levels: "HL / SL", description: "Students practise laying out solutions cleanly, using the data booklet efficiently and linking a concept to a numerical answer. The Investigation is planned so the method can be defended." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry is drilled early, organic and energetics topics later. Practical reports are rehearsed against the wording examiners reward." },
    { name: "IB Biology", levels: "HL / SL", description: "Content is broad, so tutors help students organise it and answer data-based questions with precise vocabulary." },
    { name: "IB Economics", levels: "HL / SL", description: "Accurate diagrams, current examples and balanced evaluation are practised through timed essays." },
    { name: "IB Business Management", levels: "HL / SL", description: "Paper practice uses case studies, and students learn to quote figures and apply frameworks to the specific business." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysis of unseen texts, comparative essays and the Individual Oral are treated as distinct skills, each practised on its own." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory and programming are taught side by side, and the internal solution is discussed at each stage without being written for the student." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies are memorised accurately but the focus is on extended writing that argues a case within the time limit." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis for Paper 1 and sustained argument for Paper 2 are trained separately, using events students know from Indian and world history." },
    { name: "IB Bengali A / B", levels: "HL / SL", description: "For students from Bengali-medium schooling who wish to keep their mother tongue in the Diploma, with support for literary analysis and oral tasks." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Interactive oral practice and structured writing for a widely chosen second language." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Lessons resemble guided debate, helping the student test claims and shape the exhibition without any writing being done for them." },
  ],

  igcseSubjectsIntro:
    "Cambridge IGCSE and Pearson Edexcel International GCSE are common for Class 9-10 in international schools, and Bengal students sometimes take them as private candidates. Tutors work to the paper code, tier and session, and mark practice with the board's own mark schemes.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Core / Extended", description: "Extended tier demands quick algebra and clear working. Practice includes non-calculator papers and understanding how method marks are given." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "A step towards calculus and functions that smooths the path to IB Maths AA or A Level." },
    { name: "IGCSE Physics 0625 / 4PH1", levels: "Core / Extended", description: "Equation handling, units and practical-skills papers are covered together across the course." },
    { name: "IGCSE Chemistry 0620 / 4CH1", levels: "Core / Extended", description: "Mole calculations, reactivity, bonding and organic basics, with planning-a-method questions rehearsed." },
    { name: "IGCSE Biology 0610 / 4BI1", levels: "Core / Extended", description: "Genetics, ecology and physiology, plus long-answer technique to reduce loose wording." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming and pseudocode tasks practised until tracing logic feels routine." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, diagrams and short evaluations, using examples from the Indian economy." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and narrative tasks trained under timed conditions, helpful for Bengali-medium students." },
    { name: "IGCSE Bengali and Hindi as a second language", levels: "Grade 9-10", description: "Reading and writing tasks in the student's own language, kept apart from English practice." },
  ],

  regionsTitle: "Santipur neighbourhoods and Nadia towns we teach online",
  tutorsIntro:
    "Every tutor below teaches live and online from within India, so a Santipur student needs only a laptop and a steady connection. Browse the profiles for subjects and experience; the final match is made once you tell us the syllabus and after the free trial.",
  regionsIntro:
    "Lessons are online, so a locality matters only for scheduling: when schools finish, when trains and roads are busy, and how the household's day is arranged. Below are the areas around Santipur that we hear from most.",
  regions: [
    { name: "Santipur town centre", note: "The old market and college area, where families with a tradition of higher education first ask about international curricula." },
    { name: "Phulia", note: "Neighbouring weaving township with handloom families, mostly Bengali-medium schooling." },
    { name: "Ranaghat", note: "A junction town about 15 kilometres away and a hub for Nadia commuters heading to Kolkata by train." },
    { name: "Krishnanagar", note: "The district headquarters, with a wider set of English-medium schools and a bigger coaching market." },
    { name: "Nabadwip", note: "A pilgrimage and scholarly town by the Bhagirathi, where a few families plan study abroad." },
    { name: "Chakdaha", note: "A railway town on the Kolkata line, useful for families who consider a move nearer the city." },
    { name: "Kalyani", note: "Home to a university and IISER Kolkata's neighbourhood, with professional families who know the international school options." },
    { name: "Birnagar", note: "A quieter town near Ranaghat with families weighing a change from state board to CBSE or IB." },
    { name: "Habra and Barasat side", note: "North 24 Parganas towns on the way to Kolkata where some families rent flats for schooling." },
    { name: "Kolkata suburbs", note: "The destination for many Nadia families choosing a school, and the place where boarding and day options are compared." },
  ],

  schoolDisclaimer:
    "The schools named below are in Kolkata and are mentioned only because families from Nadia look there. IB Gram is an independent tutoring service and is not affiliated with, sponsored by or endorsed by the International Baccalaureate, Cambridge, Pearson or any school. Please confirm each school's current authorisation, fees and admission rules with the school.",
  schoolClusters: [
    {
      city: "Santipur and Nadia district",
      note: "No school here could be confirmed as an IB World School or a Cambridge or Edexcel centre. Families study privately or prepare for a school elsewhere, and this page lists none locally.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata (EM Bypass and Anandapur)",
      note: "The most common destination for Nadia families looking for an IB or Cambridge classroom; about 100 kilometres away, reachable by the Sealdah line and by road.",
      schools: ["Calcutta International School", "The Heritage School"],
    },
    {
      city: "Nearby: Kolkata (Alipore and the south)",
      note: "Another cluster that Nadia families consider when they compare day schooling with boarding or relocation.",
      schools: ["RP Goenka International School"],
    },
  ],

  modesIntro:
    "In-person home visits are limited to Gurugram and parts of Delhi NCR, so a Santipur family chooses between three online formats. Each uses live video, a whiteboard and one dedicated tutor, changeable if the fit is wrong.",
  modes: [
    {
      title: "Regular weekly lessons",
      description:
        "One tutor, one subject, one fixed weekly hour. The syllabus is followed in order, with homework reviewed at the next session.",
      bullets: [
        "Evening and weekend slots",
        "Homework and past-paper marking",
        "Short written note after each lesson",
      ],
    },
    {
      title: "Multi-subject term plan",
      description:
        "Two or three subjects planned together so the child's week at home is realistic, especially for HL and SL combinations.",
      bullets: [
        "One progress summary for parents",
        "Balanced load across subjects",
        "Rates for the plan confirmed in writing",
      ],
    },
    {
      title: "Exam revision sprint",
      description:
        "A compact run of sessions before a May or November IB exam or an IGCSE series, built on timed papers and error review.",
      bullets: [
        "Weak topics found in the trial lesson",
        "Full-length timed practice",
        "Length adjusted to the date of the exam",
      ],
    },
  ],

  sections: [
    {
      heading: "Do Santipur students have any IB or IGCSE schools nearby?",
      paragraphs: [
        "Not that we can confirm. Around Santipur, in Ranaghat and Krishnanagar, schools follow the West Bengal board, CBSE or ICSE. Some are excellent, but none of them appears in the IB World School list or as a Cambridge or Edexcel centre, so we do not name any as an IB or IGCSE option.",
        "Kolkata is where the choice widens. The eastern side of the city has several schools that teach the IB, Cambridge or both, and families from Nadia tend to look there. A boarding option, a rented flat near the school or a daily train journey are the three arrangements we hear about, and each has costs a family should weigh openly.",
        "For students who stay in Santipur, private study is realistic. A child can follow IGCSE as a private candidate or prepare for an IB entry test, using online tutors who know the papers. The trade-off is that private candidates need to arrange an exam centre themselves and check the deadlines each series.",
        "No named school here has any link with IB Gram, and we cannot promise admission anywhere. The table is a plain map of the position.",
      ],
      table: {
        caption: "Where a Santipur family can look for IB and IGCSE classrooms",
        columns: ["Place", "Rough distance", "What is confirmed"],
        rows: [
          ["Santipur, Ranaghat, Krishnanagar", "Local", "No IB or Cambridge school confirmed"],
          ["Kolkata", "About 100 km", "Several IB and IGCSE schools, day and boarding"],
          ["Siliguri", "About 550 km", "Options limited; families usually look to Kolkata"],
        ],
      },
      bullets: [
        "Ask each school for written confirmation of its authorisation",
        "Check whether entry needs a test or interview",
        "Do not rely on a school's claim of boarding without confirming it",
      ],
    },
    {
      heading: "West Bengal board, CBSE and ICSE compared with IB and IGCSE",
      paragraphs: [
        "A student from a Bengal board or CBSE school will find the content of IB and IGCSE familiar in places, and the exam questions less so. Rather than asking for a remembered explanation, an IB or Cambridge paper hands over a new situation and asks the student to apply, compare or justify. That change is the main adjustment.",
        "Language is the second. Bengali-medium students often understand a concept well but need practice in expressing it in structured English within a time limit. Tutors work on this early, with short paragraphs, command words and reading of unseen passages.",
        "Assessment weight differs too. IB awards part of each grade from internal work, while IGCSE is mostly final-paper based. Neither is easier than local boards; each rewards understanding over rote learning.",
        "The table shows the main contrasts that families ask about.",
      ],
      table: {
        caption: "Board comparison for Santipur families",
        columns: ["Feature", "WBBSE / WBCHSE", "CBSE", "ICSE / ISC", "IB / IGCSE"],
        rows: [
          ["Question style", "Recall and structured answers", "Mix of recall and application", "Detailed, descriptive", "Applied and evaluative"],
          ["Internal work", "Limited", "Practicals and projects", "Projects and practicals", "Large share in IB; optional in IGCSE"],
          ["Language of study", "Bengali or English", "English", "English", "English"],
          ["Recognition abroad", "Limited", "Moderate", "Moderate", "Wide"],
        ],
      },
      bullets: [
        "Start with English writing if the child is Bengali-medium",
        "Learn command words and how marks are awarded",
        "Get used to the data booklet or formula sheet",
      ],
    },
    {
      heading: "How much is IB or IGCSE home tuition in Santipur likely to cost?",
      paragraphs: [
        "There is no published price list on this site, because the rate depends on the person teaching and the course, not on where the family lives. After your free trial we send the rate in writing so you can compare it with any local alternative.",
        "Higher Level Diploma subjects usually cost more than IGCSE Core, since fewer teachers can handle them well. Tutor experience counts as well: someone who has marked papers or taught in an IB school brings insight into mark schemes that a general teacher lacks.",
        "The number of lessons changes the picture. Two lessons a week before an exam are different from a weekly hour across the year, and a plan covering three subjects can be arranged as one package. Since lessons are online, a Santipur family does not pay for travel, and the tutor's location does not raise the rate.",
        "Before committing, ask how many trial lessons are free, whether the rate can change, and how to replace a tutor. Clear answers in writing protect both sides.",
      ],
      bullets: [
        "Level and subject decide the base rate",
        "Tutor experience and examiner background matter",
        "Frequency and length of the term change the total",
        "Packages across subjects are agreed in writing",
      ],
    },
    {
      heading: "Online tutor, Kolkata coaching, local tutor or self-study: which suits Santipur?",
      paragraphs: [
        "Santipur and Ranaghat have plenty of coaching for board exams and for JEE and NEET, and they do that job well. Very few teach IB or IGCSE, so a student who needs help with an IB Exploration or a Cambridge Extended paper often finds nobody locally who has seen one.",
        "Travelling to Kolkata for coaching is possible, but the journey adds hours to a school day. Trains on the Sealdah line are busy in the peak hours, and a student who spends three or four hours a day commuting has less energy for study. Online lessons remove that cost.",
        "Self-study with past papers is realistic for disciplined students, though errors persist without a marker. Recorded courses cover content but not the particular gaps in one student's understanding.",
        "One-to-one live lessons offer a middle path, with the caveat that a stable connection matters. Please test the home connection at the lesson hour before booking.",
      ],
      table: {
        caption: "Support options for IB and IGCSE from Santipur",
        columns: ["Option", "Knows the syllabus", "Attention per student", "Limit for Santipur"],
        rows: [
          ["Online one-to-one", "Specialist per course", "Full", "Needs steady internet"],
          ["Kolkata coaching centre", "Some IB and IGCSE centres", "Shared with a batch", "Long commute by train"],
          ["Local private tutor", "Rarely for IB or IGCSE", "High", "Hard to find with right expertise"],
          ["Self-study", "Depends on resources", "None without a marker", "No correction of habits"],
        ],
      },
      bullets: [
        "Use a laptop or tablet and headphones",
        "Choose a quiet, fixed corner and time",
        "Keep a mobile hotspot for outages",
      ],
    },
    {
      heading: "What does the Santipur year look like, from Durga Puja to the IB exams?",
      paragraphs: [
        "Bengal's calendar shapes study more than most families admit. Durga Puja in autumn brings a long break and heavy travel, Kali Puja and Bhai Phota follow, and Santipur's own Rash Utsav in November draws visitors and crowds. Saraswati Puja in January is a day for books and a natural moment to plan the term.",
        "Weather matters as well. The monsoon between June and September can bring waterlogging and power cuts, and the humid summer wears down evening concentration. A spare slot each week helps, and lessons in cooler hours are more productive.",
        "Exams follow international dates. IB Diploma papers run in May, with results in July, and in November, with results in January. Cambridge IGCSE has February-March, May-June and October-November series, and Pearson Edexcel International GCSE runs in January, May-June and October-November.",
        "The table below places these against the local year.",
      ],
      table: {
        caption: "Santipur calendar against IB and IGCSE sessions",
        columns: ["Period", "Local rhythm", "How lessons adapt"],
        rows: [
          ["January-February", "Saraswati Puja; Edexcel January series; Cambridge Feb-March papers begin", "Revision for those sitting; steady weekly work for others"],
          ["April-May", "Poila Boishakh, heat; IB May exams", "Short, focused lessons in cooler hours"],
          ["June-September", "Monsoon; new academic year", "Flexible slots; new syllabus starts"],
          ["October", "Durga Puja and Kali Puja breaks", "Pause planned in advance, then a revision block"],
          ["November", "Rash Utsav; IB November exams; IGCSE Oct-Nov series", "Timed papers and error analysis"],
        ],
      },
      bullets: [
        "Book exam-season lessons six weeks ahead",
        "Set IA deadlines before the school's final date",
        "Plan travel around the Puja holidays early",
      ],
    },
    {
      heading: "Maths AA or AI, and how to handle the IB sciences from Santipur",
      paragraphs: [
        "Analysis and Approaches is for students who like algebra, functions and calculus, and who might follow engineering, physics or economics. Applications and Interpretation leans on data and technology and suits business, design and social science. Let the intended university course decide, not the subject a friend has picked.",
        "In Physics, a habit of solving one unfamiliar problem a day, showing every step, does more than long weekend sessions. In Chemistry, organic reaction pathways and energetics benefit from a slow, consistent build. In Biology, exact terminology and experimental design language carry many of the marks.",
        "Students from Bengal's boards typically have strong content and good discipline. What they may lack is practice with data-response questions and investigation write-ups, which tutors provide through marked past papers and clear explanation of command terms.",
        "Whatever the combination, plan the Internal Assessment early. A tutor may talk through method and structure but will never write any part of the work.",
      ],
      bullets: [
        "AA HL for engineering and pure science",
        "AI for business, social science and design",
        "Physics with Chemistry HL is a heavy weekly load",
        "Biology HL fits medicine and life sciences",
      ],
    },
    {
      heading: "Core or Extended: choosing IGCSE tiers and subjects",
      paragraphs: [
        "Many IGCSE subjects offer Core, capped at grade C, and Extended, reaching A*. A student who hopes to continue into IB Diploma or A Level science should sit Extended in Maths, Physics, Chemistry and Biology, since later courses assume that depth.",
        "Most candidates take between five and eight subjects. English, Mathematics and two sciences form a solid base. A second language, Computer Science, Economics or Business fill the rest. Bengal families frequently add Bengali or Hindi to keep the mother tongue active.",
        "Cambridge and Edexcel papers differ in layout and phrasing. Tutors confirm the board and session before the first lesson, then choose past papers to match.",
        "Additional Mathematics is optional, yet it eases the move to IB Maths AA or A Level Mathematics by introducing calculus a year early.",
      ],
      bullets: [
        "Extended tier for future science students",
        "Consider Additional Mathematics",
        "Keep a first-language subject",
        "Confirm exam centre arrangements if studying privately",
      ],
    },
    {
      heading: "Where can a Santipur IB or IGCSE student go for university?",
      paragraphs: [
        "A completed IB Diploma is recognised worldwide, and in India the Association of Indian Universities treats it as equivalent to Class 12. Many universities accept it directly, and CUET-UG is used by central universities for some courses. Rules change, so a family should read each institution's current prospectus.",
        "For engineering and medicine the rules are narrower. JEE Main and NEET ask for particular subject combinations at Class 12 level, and IB students should check that their choices qualify. IGCSE alone counts as a Class 10 qualification, so the student proceeds to A Level, IB Diploma or an Indian Class 11-12 course.",
        "Bengal students often look at Kolkata's universities, at institutes near Kalyani and Kharagpur, and at study abroad in the UK, Canada, Australia or the United States. Each abroad destination converts IB and A Level grades differently, and the university confirms the numbers.",
        "The table summarises the main pathways.",
      ],
      table: {
        caption: "University pathways for Santipur students",
        columns: ["Route", "Requirement", "Check"],
        rows: [
          ["Central and private universities via CUET-UG", "Class 12 equivalent such as IB Diploma", "Course-wise subject rules"],
          ["Engineering (JEE Main)", "Maths, Physics, Chemistry", "Current eligibility notice"],
          ["Medicine (NEET-UG)", "Physics, Chemistry, Biology, English", "Current eligibility notice"],
          ["Study abroad", "IB Diploma or A Level grades", "University's published offer levels"],
        ],
      },
      bullets: [
        "Confirm AIU equivalence for your board and year",
        "Keep certificates scanned and safe",
        "Research universities in the year before Class 12",
      ],
    },
  ],

  process: [
    { title: "Write to us", description: "Send the class, subjects, board and exam session by WhatsApp to +91 7439 368 115 or by email to ibgram24@gmail.com." },
    { title: "Meet a tutor at a free trial", description: "A complete online lesson at a time that suits your household in Santipur." },
    { title: "Read the written note", description: "The tutor's summary of what was covered and what to do next arrives after the trial." },
    { title: "Agree the plan in writing", description: "Tutor, weekly schedule and rate are confirmed by message before any payment." },
    { title: "Begin regular lessons", description: "Weekly video lessons start, with notes each time and a change of tutor available if needed." },
  ],

  whyPoints: [
    { title: "Syllabus-matched tutors", description: "Your child's tutor knows the exact course, level and exam session, not just the subject name." },
    { title: "Plain about delivery", description: "No tutor visits homes in Santipur; every lesson is online, live and one-to-one." },
    { title: "Try before you decide", description: "The first lesson is free and carries no obligation." },
    { title: "Parent-readable progress", description: "A short written note follows every session." },
    { title: "Coaching with integrity", description: "Tutors teach and mark but never write IAs, Extended Essays, TOK essays or coursework." },
    { title: "Fits a Bengal calendar", description: "Timings move around Puja weeks, monsoon disruption and school examinations." },
  ],

  faqs: [
    { question: "Are there IB and IGCSE tutors in Santipur?", answer: "Yes, online: IB Gram tutors teach Santipur students live, one-to-one, from elsewhere in India. We could not confirm a local centre specialising in these syllabi. Each tutor is matched to your child's subject, level and exam session, and the first lesson is free so you can judge the teaching before deciding anything." },
    { question: "Will a tutor come to my house in Santipur?", answer: "No. Tutors do not visit homes in Santipur, because in-person tuition runs only in Gurugram and parts of Delhi NCR. Santipur students receive private tuition from home online: the lesson happens at their own desk on a laptop, live, with a specialist teacher and a shared whiteboard." },
    { question: "Is there an IB school in Santipur?", answer: "We could not confirm one, so we name none. The nearest confirmed IB and IGCSE schools are in Kolkata, roughly a hundred kilometres away. Please check any school's authorisation with the International Baccalaureate, Cambridge or Pearson, and ask the school about admission rules." },
    { question: "What does IB or IGCSE tuition cost for Santipur students?", answer: "We do not list prices. The rate depends on the tutor's experience, the subject and the level, and it is sent in writing after the free trial. Diploma Higher Level generally costs more than IGCSE Core. Online lessons carry no travel cost, so location does not add to the rate." },
    { question: "Can my child take IB Maths online from Santipur?", answer: "Yes, both Analysis and Approaches and Applications and Interpretation are taught online at SL and HL. Tutors work through past papers and calculator technique, and talk through the Exploration plan. They do not write it, since the Exploration must be the student's own work." },
    { question: "Should a Santipur student choose IB or IGCSE?", answer: "It depends on age, target school and university plan. IGCSE is a two-year programme for Class 9-10, while the IB Diploma is a two-year pre-university programme for Class 11-12. Many students do IGCSE first and then choose IB or A Level. A short conversation with us can clarify the fit." },
    { question: "Do tutors help with the Internal Assessment or Extended Essay?", answer: "They coach the skills, but they do not write, edit or ghost-write these tasks. A tutor can explain the criteria, discuss how to structure a method and give feedback on the student's own ideas. Writing any part of an IA, EE or TOK essay would break the IB's academic honesty rules." },
    { question: "What timings are available for lessons?", answer: "Lessons run on Indian Standard Time, mostly in the evening or at weekends. Families can choose mornings on holidays, and slots can be moved around school exams, Durga Puja and other festivals. A fixed weekly time helps the routine stay stable, and we ask for notice when a session must shift." },
    { question: "Do we need fast internet for online lessons?", answer: "A stable broadband or 4G connection is enough for live video and a whiteboard. A laptop or tablet is better than a phone for diagrams. Test the connection at lesson time before the trial, and keep a mobile hotspot as a backup, especially in monsoon weather when outages are more likely." },
    { question: "Can you prepare a Santipur child for entry to a Kolkata school?", answer: "Yes, a tutor can prepare a child for Maths, English and Science entrance tests and for the unfamiliar style of IB or Cambridge questions. We cannot promise admission, since each school sets its own process. Preparation usually spans several weeks of weekly lessons." },
    { question: "Which IGCSE boards do you cover?", answer: "Both Cambridge IGCSE and Pearson Edexcel International GCSE, in Mathematics, the sciences, Computer Science, Economics, Business, English and second languages such as Bengali and Hindi. The tutor confirms the board, tier and session before the first class so practice papers match the exam." },
    { question: "My child studies in a Bengali-medium school. Can they move to IB or IGCSE?", answer: "Yes, though English expression needs early work. Tutors practise reading unseen passages, writing structured paragraphs and understanding command words alongside subject content. Most students settle within one or two terms of regular lessons, and Bengali can remain a Diploma or IGCSE subject." },
    { question: "Is the IB Diploma accepted by Indian universities?", answer: "The Association of Indian Universities treats a completed IB Diploma as equivalent to Class 12, and many universities accept it directly. JEE, NEET and CUET-UG have specific subject rules, so read the current notices. Tutors can outline the general picture, but each university confirms its own requirements." },
    { question: "What if my child does not get on with the tutor?", answer: "You can ask for a different tutor and we will arrange one without penalty. A one-to-one arrangement depends on fit, and the free trial is there to test it. Tell us what did not work, such as pace, style or timing, so the next match is better informed." },
    { question: "How do I begin from Santipur?", answer: "Send a WhatsApp message to +91 7439 368 115 or write to ibgram24@gmail.com with your child's class, subjects, board and exam session. We reply with a tutor suggestion and a time for the free trial. Payment is only discussed after you have seen the teaching and agreed the rate in writing." },
    { question: "Do you offer PYP and MYP tutoring for younger children?", answer: "Yes, PYP and MYP tutoring is available online, focused on reading, mathematics, writing and inquiry skills. For MYP, tutors also explain the criteria used to grade each subject and support the Personal Project process without doing the work for the student." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "How online IB and IGCSE tutoring works." },
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The national page for students in every state." },
    { label: "Home tuition in Gurugram", href: "/gurgaon/", description: "The only place with in-person visits at present." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Overview of IB subjects and tutors." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects, tiers and sessions." },
    { label: "IB Diploma Programme tutoring", href: "/programmes/dp/", description: "Subjects, Core and exams for the Diploma." },
    { label: "IB Maths tutoring", href: "/courses/ib/mathematics/", description: "AA and AI, HL and SL." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse tutor profiles." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Book a free trial or ask a question." },
    { label: "IB and IGCSE tutors in Kolkata", href: "/kolkata/", description: "The nearest large city with IB and IGCSE schools." },
    { label: "IB and IGCSE tutors in Baharampur", href: "/baharampur/", description: "A West Bengal page with a similar online format." },
    { label: "IB and IGCSE tutors in Siliguri", href: "/siliguri/", description: "North Bengal's main city, covered online." },
  ],

  closingHeading: "One free lesson, then you decide",
  closingBody:
    "Share your child's class, subjects and exam session, and we will propose a tutor and a trial slot that fits your evenings in Santipur. You watch the teaching first, receive a written note, and see the rate in writing before anything else. WhatsApp +91 7439 368 115 or email ibgram24@gmail.com.",
};
