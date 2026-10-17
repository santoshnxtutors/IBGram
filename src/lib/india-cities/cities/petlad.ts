import type { CitySeoPage } from "../types";

/**
 * /petlad/ - IB and IGCSE tutoring page for Petlad, Anand district, Gujarat. No IB or Cambridge/Edexcel
 * IGCSE school could be confirmed in the taluka, so stripSchools is empty and the school clusters point
 * honestly to Anand, Vadodara and Ahmedabad. Online delivery only: no tutor visits a home in Petlad.
 */
export const petlad: CitySeoPage = {
  slug: "petlad",
  countryName: "Petlad",
  countryNameLong: "Petlad, Gujarat",
  demonym: "Petlad",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots suit most Petlad households once shops and offices close, with lighter weeks planned around the long Diwali vacation and the wedding season that fills the Charotar calendar",
  lastUpdated: "2026-09-21",
  geo: { latitude: 22.4714, longitude: 72.8 },
  wikipedia: "https://en.wikipedia.org/wiki/Petlad",
  alternateNames: ["Petlad taluka", "Petlad Anand"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Petlad | Online Home Tuition, Gujarat",
  metaDescription:
    "IB and IGCSE tutors for Petlad and Charotar families: DP, MYP, PYP and Cambridge or Edexcel IGCSE, one-to-one online at home, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition in Petlad",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION FOR PETLAD FAMILIES",
  heroSubtitle:
    "Private tuition from home is what most Petlad families want, and for IB and IGCSE it works through live one-to-one online lessons rather than a visiting tutor. Charotar is full of households with cousins in London, Toronto or New Jersey, and their children often follow a British or international syllabus that no school in the taluka teaches. A matched tutor fills that gap from wherever in India they live.",
  primaryKeyword: "IB and IGCSE tutors in Petlad",
  imageAltText: "A Petlad student revising IGCSE Chemistry with a tutor on a live one-to-one online lesson at home",
  secondaryKeywords: [
    "IB tutor Petlad",
    "IGCSE tutor Petlad",
    "IB home tuition Petlad",
    "IGCSE home tuition Petlad",
    "IB private tuition Petlad",
    "IB Maths tutor Petlad",
    "IGCSE Maths tutor Petlad",
    "IB Physics tutor Petlad",
    "IB Chemistry tutor Petlad",
    "IB Biology tutor Petlad",
    "IB DP tutor Petlad",
    "IB MYP tutor Petlad",
    "IB PYP tutor Petlad",
    "IGCSE online tuition Petlad",
    "online IB tutor Anand district",
    "IB tutor Changa Petlad",
    "IGCSE tutor Dharmaj",
    "IB tutor Sojitra",
    "Cambridge IGCSE tutor Charotar",
  ],

  heroTrustPoints: [
    "Tutors are chosen for the exact IB subject and level or the Cambridge or Edexcel code a child sits",
    "Every lesson is online; tutors do not come to a Petlad house, since visits run only in Gurugram and parts of Delhi NCR",
    "A free trial lesson is taught live before any fee is agreed",
    "A written note follows each session and the rate is quoted in writing before booking",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB continuum" },
    { value: "Two IGCSE boards", label: "Cambridge and Pearson Edexcel" },
    { value: "IST", label: "Tutor and student share a clock" },
    { value: "Free trial", label: "Watch a lesson first" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition at home looks like in Petlad",
    paragraphs: [
      "Anyone searching for home tuition in Petlad should know the arrangement at the outset: lessons happen on a laptop, live and one to one, with the tutor in another Indian city and the student at the family's own dining table or study desk. Tutors do not travel to Petlad. In-person visits exist only in Gurugram and parts of Delhi NCR, so everywhere else the private lesson comes to the student through the screen.",
      "The taluka sits in the heart of Charotar, the fertile belt between the Mahi and Sabarmati rivers that feeds Anand's dairy economy and sends so many families abroad. A fair number of homes here have a brother in Leicester or an uncle in Nairobi, and a child who may spend Class 11 in one country and Class 12 in another. The curriculum in such a household is often decided by the relative abroad, which is where IGCSE and the IB Diploma enter the conversation.",
      "Locally, Petlad schools follow the Gujarat State Board with a few CBSE options, and nothing we can confirm teaches the IB or Cambridge IGCSE. Families therefore pick one of three roads: board a child in Vadodara or Ahmedabad, sit IGCSE as a private candidate, or study through an online school and add a specialist tutor. The last road is the one this page is about.",
      "IB Gram is an independent tutoring service with no link to any Petlad school, the International Baccalaureate Organization, Cambridge or Pearson. Tutors coach technique, explain ideas and mark practice papers. They never write an Internal Assessment, Extended Essay, TOK essay or piece of coursework for a student.",
    ],
    bullets: [
      "Live one-to-one online lessons for IB PYP, MYP, DP and CP students in Petlad",
      "Cambridge and Pearson Edexcel IGCSE matched by subject code and tier",
      "Timed to Indian Standard Time and to the family's evenings",
      "Free trial lesson, written note after each session, tutor change if the fit is wrong",
      "No tutor visits a Petlad home; in-person tuition is for Gurugram and parts of Delhi NCR only",
    ],
  },

  programmesIntro:
    "No school in Petlad runs any of the four IB programmes, so a Petlad family meets them through a move, a boarding seat or an online school. The notes below say what a tutor actually does at each stage for a child who studies from Charotar.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "The PYP builds learning around shared inquiries, not chapter tests, and ends with a student-led Exhibition. A tutor working with a Class 3 or Class 4 child spends the hour on fluent reading, number fluency and the habit of explaining a thought aloud, since those are what units of inquiry quietly demand.",
      countryNote:
        "For Petlad the usual PYP request arrives from a family whose child began primary school abroad and needs continuity on a return to Gujarat.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each MYP subject is graded against four criteria, so two students with the same knowledge can earn very different levels. Sessions therefore practise reading a task the way the criterion does, then write and rewrite, which matters most in Sciences, Language and Literature and Individuals and Societies.",
      countryNote:
        "Petlad MYP students are commonly Gujarati-speaking children learning in English as an additional language, so Language Acquisition and academic writing get early attention.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Diploma asks for six subjects, three at Higher Level, plus Theory of Knowledge, the Extended Essay and a service strand called CAS. The work is spread over two years and the final papers are sat in the May or November session, so pacing matters as much as any single topic.",
      countryNote:
        "A Petlad DP student usually studies elsewhere or online, which leaves a tutor to hold the weekly rhythm together from the taluka side.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP pairs two or more Diploma courses with a career-related study and a reflective project. It is rare in India, so tutoring mostly concentrates on the Diploma courses inside the pathway and on the language requirement.",
      countryNote:
        "Petlad enquiries for the CP are few, and they are treated like any other Diploma subject request.",
    },
  ],

  subjectsIntro:
    "An IB subject name means little until the course and level are fixed. Matching starts with the code, the Higher or Standard choice and the session a student is entered for, and only then turns to which evenings a Petlad household can keep free.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof dominate, and Paper 3 at HL rewards students who have met unfamiliar problems before, so tutors set unseen questions early in the course." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and calculator fluency matter more than symbolic manipulation, and the exploration needs a dataset the student genuinely cares about." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics each appear on the papers, so revision cannot lean on one favourite theme; the practical investigation needs an honest uncertainty analysis." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Organic reaction pathways, equilibrium and energetics decide most marks, and an investigation write-up has to show method, data handling and evaluation in the order moderators expect." },
    { name: "IB Biology", levels: "HL / SL", description: "Command terms such as outline, discuss and evaluate signal how much to write; students who ignore them lose marks on topics they actually know." },
    { name: "IB Economics", levels: "HL / SL", description: "Paper 1 wants labelled diagrams plus real examples, and Indian examples from agriculture, dairy cooperatives and trade can be strong evidence when used precisely." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers reward applying a tool to the firm in front of the student, and the internal research project needs a real organisation to study." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Paper 1 textual analysis, Paper 2 comparative essay and the Individual Oral are separate skills, each rehearsed on its own." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory is paired with a programming solution for the internal assessment, so a student needs steady coding practice in addition to revision of networks and databases." },
    { name: "IB Psychology", levels: "HL / SL", description: "Essays are marked on structured argument and accurate research evidence, so each session drills both together." },
    { name: "IB Geography", levels: "HL / SL", description: "A few case studies studied in depth beat many studied thinly, and fieldwork needs a method that another student could repeat." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Hindi B students often speak the language at home but need practice with formal writing types and the structure of the oral." },
    { name: "IB Gujarati A", levels: "HL / SL", description: "Where Gujarati is offered as a school-supported or self-taught language, tutoring concentrates on literary analysis and comparative essay structure." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions rehearse argument, not recall: testing a claim, offering a counterclaim and tying knowledge questions to real situations." },
  ],

  igcseSubjectsIntro:
    "Since no Petlad school teaches Cambridge or Edexcel, most local candidates sit IGCSE through an online school or as private candidates at an approved centre. That makes it important to confirm the board, code and tier before any preparation begins. Cambridge runs its main series in May-June and October-November, and Edexcel adds a January window.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended candidates lose marks through skipped working, so the tutor builds the habit of showing each step before speed is added." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Functions, calculus and trigonometry arrive early and bridge neatly into IB Maths Analysis and Approaches or a later A Level." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Content overlaps with Cambridge, but question wording and mark-scheme habits differ, so Edexcel past papers are used throughout." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging equations and unit handling trip up more students than the physics itself, and the alternative to practical paper needs its own practice." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, electrolysis and organic chemistry are built in parallel with qualitative analysis for the practical paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, transport and enzymes carry heavy weight, and longer written answers get dedicated timed practice." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Students learn to move from definition to application to evaluation within a single answer." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case-based questions reward applying ideas to the named business, which suits children from trading and dairy families." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables and pseudocode are reinforced by writing Python, so logic is tested instead of memorised." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and summary skills improve faster with timed practice on unseen passages than with vocabulary lists." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Useful for Gujarati-medium students who need confident listening, speaking and formal writing." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension and writing tasks are taught with attention to the Devanagari script and to register." },
  ],

  regionsTitle: "Petlad and Charotar localities our online IB and IGCSE tutors work with",
  regionsIntro:
    "Every lesson is online, so these places matter for timing and context, not distance. The notes describe how each area's school routine, travel habits and family background shape the hour a student can study.",
  regions: [
    { name: "Petlad town and the old bazaar", note: "The commercial centre of the taluka, where many families run shops and trading businesses, so evenings after the shutters close are the natural tutoring window." },
    { name: "Changa", note: "Home to CHARUSAT, the university campus that brings faculty and engineering-minded families to the area and makes STEM tutoring a frequent request." },
    { name: "Dharmaj", note: "A well known Charotar village with strong links to relatives overseas, where curriculum questions often follow the family abroad." },
    { name: "Sojitra", note: "A neighbouring town in Anand district whose families look to Anand and Vadodara for schools and coaching." },
    { name: "Vallabh Vidyanagar", note: "The university town beside Anand, with a long tradition of serious study and households of academics." },
    { name: "Anand", note: "The district headquarters and dairy city, about twenty kilometres away, where most schooling choices for Petlad families are compared." },
    { name: "Nadiad", note: "A larger town in Kheda district to the north, frequently a reference point for coaching and medical-entrance preparation." },
    { name: "Borsad", note: "An agricultural and trading town on the road toward Vadodara, with families who commute for work across the Charotar belt." },
    { name: "Khambhat", note: "The old port town to the south-west, where families often trade and where travel to bigger cities for schooling is a real consideration." },
    { name: "Karamsad", note: "A village known for its medical college and hospital, which shapes a health-careers mindset among nearby students." },
  ],

  schoolDisclaimer:
    "Schools and places mentioned here only describe the real education map around Petlad. IB Gram is an independent tutoring service with no agreement with any school named, and it is not affiliated with the IB, Cambridge or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Petlad taluka",
      note: "We could not confirm any school in Petlad offering the IB or a Cambridge or Edexcel IGCSE. Schooling follows the Gujarat State Board, with a smaller CBSE presence, so local options for an international curriculum are limited.",
      schools: [],
    },
    {
      city: "Nearby: Anand and Vallabh Vidyanagar",
      note: "The nearest city, about twenty kilometres away, is a place to compare local options, but it also has no confirmed IB or IGCSE school at present.",
      schools: [],
    },
    {
      city: "Nearby: Vadodara",
      note: "Roughly an hour away by road, Vadodara has a small number of confirmed IB and Cambridge schools, which some Charotar families consider for day or boarding places.",
      schools: ["Navrachana International School", "VIBGYOR High School, Padra Road"],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "A longer trip of around eighty kilometres, with a wider choice of IB and Cambridge schools for families willing to relocate or board a child.",
      schools: ["Ahmedabad International School", "Calorx Olive International School"],
    },
  ],

  modesIntro:
    "Whatever the rhythm, the format in Petlad is the same: a tutor and a student on a live video call with a shared screen. What changes is how often lessons happen and how closely the written record is followed. In-person home visits are not part of the service outside Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "A weekly online lesson at home",
      description:
        "One fixed slot a week, same tutor, taught live from the student's own room. It is how most Petlad families begin, because the tutor pool is national and not limited to the taluka.",
      bullets: [
        "The tutor can live anywhere in India",
        "Covers IB DP, MYP and PYP as well as IGCSE",
        "Past papers are marked live on the shared screen",
        "The same tutor continues across the term",
      ],
    },
    {
      title: "A weekly lesson with written progress notes",
      description:
        "The same weekly rhythm with a short written note after every lesson and a fuller review every few weeks, so a busy family running a shop or a farm business can follow progress without attending every call.",
      bullets: [
        "A note after each session",
        "A review conversation every few weeks",
        "Suited to younger PYP and MYP students",
        "A second slot can be added before mocks",
      ],
    },
    {
      title: "An intensive block before an exam series",
      description:
        "Several lessons a week in the run-up to the May-June or October-November series, built around timed papers and quick marking, and scheduled around the Diwali vacation rather than through it.",
      bullets: [
        "Papers marked against the live mark scheme",
        "Feedback within a couple of days",
        "Best booked a few weeks before the window",
        "Fitted around school holidays and family events",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families in Petlad",
      paragraphs: [
        "Petlad has a long educational tradition in Charotar. Its classrooms follow the Gujarat State Board, and a few private schools offer CBSE. We could not verify any school in the taluka that teaches the International Baccalaureate or a Cambridge or Edexcel IGCSE course, and we would rather say so than name a school that does not qualify.",
        "That does not mean the demand is small. Charotar families are unusually well connected abroad, and a household in Dharmaj or Petlad town may have three generations living between Gujarat and the UK, East Africa or North America. A child returning for a few years, or preparing to join a parent overseas, needs a syllabus that travels, and IGCSE and the IB are exactly that.",
        "A second group comes from business and farming families who simply want their children to hold a qualification accepted by any university in the world. They have read about IGCSE Mathematics or the IB Diploma, and they are weighing it against GSEB, which prepares students well for state entrance tests but was not designed for study abroad.",
        "Practical choices follow. Some families board a child in Vadodara or Ahmedabad. Others enrol in an online school and sit exams at an approved centre. A third route is private candidacy. In every one of these, weekly subject help from a tutor who has taught the exact course is what fills the gap left by having no local specialist.",
      ],
      table: {
        caption: "Where Petlad families can actually study IB or IGCSE",
        columns: ["Route", "Where", "What it involves"],
        rows: [
          ["Local schools in Petlad taluka", "Petlad, Changa, Dharmaj", "Gujarat State Board and some CBSE; no confirmed IB or IGCSE"],
          ["Vadodara campuses", "About an hour away", "Confirmed IB and Cambridge schools, day or boarding"],
          ["Ahmedabad campuses", "About eighty kilometres away", "More choice, usually a relocation or boarding decision"],
          ["Online school or private candidate", "From home", "Exam entries through an approved centre, tutoring added at home online"],
        ],
      },
      bullets: [
        "No IB or IGCSE school in Petlad taluka could be confirmed",
        "NRI-linked Charotar households drive much of the interest",
        "Tutors teach online, so the pool is national",
        "Marking standards are identical to any other Indian city",
        "A written first-month plan and a tutor change if the fit is wrong",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Petlad family?",
      paragraphs: [
        "The cost of IB or IGCSE tuition in Petlad depends on the tutor's experience with the exact syllabus, the programme and level, the length of each session and how many lessons a week a student takes. IB Gram does not publish a price list. The rate is quoted in writing after the trial lesson and before anything is booked.",
        "Level is the biggest driver. A Diploma Higher Level Physics tutor who has marked past papers for several years sits at a different rate from a tutor helping a Class 7 student with MYP Sciences. Similarly, IGCSE Extended Mathematics is priced differently from Core English, because the pool of people who teach each well is different.",
        "Being online removes several costs a Petlad household would otherwise meet. There is no fuel for a tutor, no travel time to Anand or Vadodara for a coaching centre, and no evening lost on the road. Families who once considered a school move for the sake of one subject often find a tutor more economical than relocating.",
        "Two practical things keep spending sensible. First, start with the subjects that carry the heaviest weight, usually Mathematics and one science. Second, use the written notes after each lesson to check that the hours are changing the work. If they are not, the tutor is changed and the family owes nothing for the change.",
      ],
      bullets: [
        "Rate depends on syllabus, level, session length and frequency",
        "Quoted in writing before booking, never published",
        "No travel cost for tutor or student",
        "Free trial lesson before any commitment",
      ],
    },
    {
      heading: "How do GSEB and CBSE differ from IB and IGCSE for Petlad students?",
      paragraphs: [
        "GSEB, CBSE, IB and IGCSE differ mainly in how they test. The Gujarat State Board and CBSE reward accurate recall inside a fixed textbook, whereas IGCSE and the IB reward applying ideas to unfamiliar situations, showing working and writing extended answers. A student who has scored well on GSEB can find the first IGCSE paper surprising.",
        "Coursework is the second gap. Most GSEB and CBSE subjects carry modest internal marks, while IB subjects usually include an internal assessment worth a fifth to a third of the grade, and IGCSE Sciences include a practical or alternative to practical paper. Planning independent work across months is a skill that has to be built.",
        "Recognition is the third difference. A GSEB certificate is well understood in India, but an overseas admissions office will look for IGCSE, IB or A Level results. The Association of Indian Universities treats IB and IGCSE-based qualifications as equivalent for Indian admission as well, which keeps both doors open.",
        "Language matters in Petlad. Many students learn Gujarati at home and English at school, so the move to English-medium assessment needs specific work on command words and formal writing. Tutors address that with short timed answers long before the first mock exam arrives.",
      ],
      table: {
        caption: "GSEB, CBSE, IGCSE and IB at a glance for Petlad families",
        columns: ["Feature", "GSEB", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Where it runs near Petlad", "Most local schools", "A few private schools", "No confirmed local school", "No confirmed local school"],
          ["Style of assessment", "Textbook recall", "Structured, application in parts", "Application and extended response", "Criteria-based, essays and internal assessments"],
          ["Coursework", "Limited", "Projects and practicals", "Practicals in sciences", "Internal assessment in every subject"],
          ["Recognition abroad", "Limited", "Accepted in many cases", "Widely recognised", "Widely recognised"],
        ],
      },
      bullets: [
        "IGCSE and IB reward method and explanation, not recall alone",
        "Independent project planning is the biggest shift",
        "English command words are taught directly",
        "AIU equivalence keeps Indian admission routes open",
      ],
    },
    {
      heading: "Online home tuition, coaching centres, local tutors and self-study: what suits Petlad?",
      paragraphs: [
        "For students of Petlad, private tuition from home takes one of four forms. Coaching centres in Anand and Nadiad run batches aimed at GSEB, JEE and NEET, which is useful for those exams but not for IB or Cambridge papers. Local private tutors can be excellent for GSEB, yet few have taught a current IGCSE or IB syllabus.",
        "Self-study is the third option, and it works for motivated students with good materials. The weakness is feedback. Nobody corrects an internal assessment plan or marks an essay against the IB criteria unless a knowledgeable person does, and unmarked practice rarely closes the gap.",
        "An online tutor matched to the syllabus is the fourth option. The lesson is live, the tutor watches the working on a shared screen, and every paper is marked with the real mark scheme. Because the tutor need not live in Gujarat, it is possible to choose someone who has taught the exact course for years.",
        "None of these options excludes another. Many students keep their school or coaching schedule and add one or two online lessons a week in the subjects where they need precision, typically Mathematics, Chemistry or English.",
      ],
      table: {
        caption: "Ways to get IB and IGCSE help in Petlad, compared",
        columns: ["Route", "Syllabus fit", "Attention", "Main limit near Petlad"],
        rows: [
          ["Coaching centres in Anand or Nadiad", "Built for GSEB, JEE and NEET", "Group batches", "No IB or Cambridge batch"],
          ["Local private tutors", "Varies by tutor", "One to one", "Few have taught the current syllabus"],
          ["Self-study", "Whatever the student finds", "None", "No marking or feedback"],
          ["Matched online tutor", "Chosen for the exact code and level", "One to one, live", "Needs a stable internet connection"],
        ],
      },
      bullets: [
        "Coaching centres are strong for entrance tests, weak for IB papers",
        "Feedback on extended writing is the thing self-study lacks",
        "A live tutor can be selected from across India",
        "Most students combine school with one or two online lessons",
      ],
    },
    {
      heading: "What does the exam calendar look like for a Petlad student?",
      paragraphs: [
        "Gujarat schools run a June to April year with a long break at Diwali, and the IB and Cambridge calendars sit across it. IB Diploma exams are held in May for the main session and November for the second, Cambridge IGCSE runs in May-June and October-November, and Pearson Edexcel adds January.",
        "Diwali is the most important planning point. Gujarat's Diwali vacation is long, and families travel, host relatives or attend weddings. Rather than skip study for three weeks, most students use the break for one or two lighter sessions and a longer block on either side.",
        "The wedding season, which falls mostly between November and February and again in spring, takes evenings away from households across the Charotar belt. Tutors can move a session by a day, and since nothing depends on travel, rescheduling usually costs no more than a message.",
        "The monsoon from mid-June to September brings heavy rain to Charotar. Power cuts and weak mobile data are rare in town but possible in villages, so students in outlying areas keep a wired connection or a mobile hotspot ready, and lessons are recorded for revision when a class is interrupted.",
      ],
      table: {
        caption: "A year of study for a Petlad student",
        columns: ["Period", "What happens", "Effect on tutoring"],
        rows: [
          ["June to September", "New school year and southwest monsoon", "Good months for building foundations; keep a backup connection"],
          ["October to November", "Navratri, Diwali vacation and the second exam series", "Lighter weeks around festivals, focused blocks for resits"],
          ["January to February", "Uttarayan and wedding season", "Short sessions; Edexcel January window for candidates"],
          ["March to June", "Final preparation, May-June IB and IGCSE series", "Heaviest revision, timed papers weekly"],
        ],
      },
      bullets: [
        "IB exams in May and November; IGCSE in May-June and October-November",
        "Plan around the Diwali vacation instead of losing it",
        "Wedding season is handled by flexible scheduling",
        "Keep a backup connection during the monsoon",
      ],
    },
    {
      heading: "Which universities do Petlad students aim for after IB or IGCSE?",
      paragraphs: [
        "Petlad students with IB or IGCSE results can target India and abroad. For Indian universities, the Association of Indian Universities recognises IB Diploma and Class 10 and 12 equivalent qualifications, so an IB student can apply to most central and state universities, and many private ones in Gujarat.",
        "CUET-UG is the main gateway to central universities, and IB and IGCSE students can sit it with subjects they studied. For engineering, JEE Main and Advanced require the usual Class 12 subjects, and medical entrance through NEET-UG has its own eligibility rules, so IB students planning either should check the current NTA and NMC notices early.",
        "Close to home, families look at Charusat at Changa, Sardar Patel University at Vallabh Vidyanagar, Anand Agricultural University and the institutes around Anand, and further afield at Ahmedabad and Vadodara. Charotar has a strong culture of agri-business and rural management, which suits students considering those fields.",
        "Abroad, a Petlad student with relatives in the UK, Canada or the US often targets universities near them. IB and IGCSE are well understood by admissions offices there, and a tutor can help with subject choices so the profile matches the courses a student wants later.",
      ],
      bullets: [
        "AIU equivalence for IB and IGCSE-based Indian admission",
        "CUET-UG open to IB and IGCSE students with relevant subjects",
        "Check JEE and NEET eligibility before choosing subjects",
        "Study abroad is common among Charotar families",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the sciences, for Petlad students",
      paragraphs: [
        "IB Mathematics Analysis and Approaches suits students who enjoy algebra, calculus and proof and who may study engineering, economics or pure science. Applications and Interpretation suits those who prefer statistics and modelling, for example in business, psychology or medicine. The choice should come from the intended degree, not from a sense of which is easier.",
        "Higher Level students face Paper 3, where an unfamiliar problem has to be unpicked using tools they already know. Tutors bring unseen problems into the course early, because confidence on unfamiliar material takes months to build. The exploration, the internal assessment, needs a topic chosen by the student and a clear personal engagement.",
        "IB Physics, Chemistry and Biology share a structure: a core, options or additional material at HL, and an investigation assessed internally. Students from GSEB are often strong on content but less used to data analysis and evaluation, so tutors turn practical data into questions a moderator would ask.",
        "For Petlad students aiming at medicine, Chemistry and Biology at Higher Level are common, with Mathematics at Standard Level. For engineering, Physics and Mathematics AA at Higher Level, with Chemistry at either level, is a familiar pairing. Tutors advise on subject mixes without writing any assessed work.",
      ],
      bullets: [
        "Choose AA or AI from the intended degree",
        "Paper 3 practice starts early for HL Mathematics",
        "Investigations are coached, never written for the student",
        "Subject combinations are matched to later study plans",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects to choose?",
      paragraphs: [
        "Cambridge IGCSE Mathematics, Physics, Chemistry and Biology are offered at Core or Extended tier. Core limits the top grade and suits students who need to build confidence, whereas Extended opens the full grade range and is the route to IB Maths AA or A Level Mathematics. Most students aiming at science later should be prepared for Extended.",
        "Subject choice at IGCSE is wider than at GSEB. A typical programme includes English, Mathematics, two or three sciences, a humanities or business subject and a second language. Petlad students often choose Hindi or Gujarati-related options alongside English, which keeps the home language on record and adds an accessible grade.",
        "Edexcel offers a similar list with its own specification codes, and the exams can be taken in January as well as summer. It is worth deciding the board before the course begins, because past papers, mark schemes and command words differ between the two.",
        "Because there is no local school, most Petlad candidates register through an approved centre. A tutor helps check the entry codes, the tier and the practical arrangements, but the registration itself is between the family and the centre or school they choose.",
      ],
      bullets: [
        "Extended tier is the usual route toward science and IB Maths AA",
        "Decide the board and code before starting",
        "Home-language subjects can add strong grades",
        "Exam entry is arranged through an approved centre",
      ],
    },
    {
      heading: "How does IB Gram match a tutor for a Petlad family?",
      paragraphs: [
        "The family shares the programme or board, subject, level, current grade and the hours the household can keep. We then shortlist tutors by syllabus fit. A tutor who has taught IB Chemistry HL for several years is preferred over a general science tutor, even when the latter has a shorter wait.",
        "A free trial lesson follows, taught live on a real topic. Parents are welcome to sit in. The trial shows how the tutor explains, whether the student asks questions and whether the pace suits the child, and nothing is owed if the family decides not to go ahead.",
        "After the trial the tutor shares a plan for the first month, with topics, a weekly rhythm and how updates will reach you. A written note follows each session, and a review every few weeks checks whether marks on practice papers are moving.",
        "If the fit is wrong, the family says so and a different tutor is arranged. Rates are given in writing beforehand. Tutors coach and explain, but never write an IA, Extended Essay, TOK essay or coursework, which keeps the work the student's own and protects the student's result.",
      ],
      bullets: [
        "Shortlist by syllabus and level, not by location",
        "Free live trial lesson, parents welcome",
        "First-month plan in writing",
        "Tutor change without penalty",
      ],
    },
  ],

  tutorsIntro:
    "The tutors teach IB PYP, MYP and Diploma courses and Cambridge and Edexcel IGCSE, matched to Petlad students by syllabus, level and exam series. Every lesson is online, since tutors do not visit homes outside Gurugram and parts of Delhi NCR.",

  process: [
    { title: "Share your brief", description: "Tell us the programme or board, subject, level, current grade and the evenings your Petlad household can keep." },
    { title: "Receive a shortlist", description: "We suggest tutors who have taught that exact syllabus, with a line on why each suits your child." },
    { title: "Attend a free trial lesson", description: "A real topic is taught live online, at no cost and with no obligation afterwards." },
    { title: "Agree the first month", description: "The tutor writes out topics, frequency and how progress notes will reach you, and the rate is confirmed in writing." },
    { title: "Keep a steady rhythm", description: "Weekly online lessons follow, with a review every few weeks and a change of tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched to the syllabus", description: "A tutor is chosen for the exact IB course and level or the Cambridge or Edexcel code, not a general label." },
    { title: "Made for places with no local school", description: "Petlad has no confirmed IB or IGCSE school, so the tutor pool draws on teachers across India." },
    { title: "Watch before you decide", description: "The free trial lesson lets the family see the teaching before anything is agreed." },
    { title: "Student's own work", description: "Tutors coach technique, but the IA, Extended Essay, TOK essay and coursework stay in the student's words." },
    { title: "Clear reporting", description: "A written note follows every lesson and a fuller review comes every few weeks." },
    { title: "No lock-in", description: "Rates come in writing, there is no long contract, and a tutor can be changed at any point." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Petlad?", answer: "Send IB Gram the programme, subject, level and exam session and we will shortlist tutors who have taught that course. Location does not decide the match because no school in Petlad teaches the IB, so syllabus fit comes first. A free trial lesson is arranged online before any commitment, and another tutor is proposed if the first is not right." },
    { question: "Do tutors visit homes in Petlad?", answer: "No, tutors do not visit homes in Petlad. In-person home tuition runs only in Gurugram and parts of Delhi NCR. Petlad students have live one-to-one lessons online from their own home, using a laptop and a shared whiteboard, which still gives the attention of private tuition without the tutor travelling anywhere." },
    { question: "Is there any IB or IGCSE school in Petlad?", answer: "We could not confirm one. Schools in Petlad taluka follow the Gujarat State Board and some CBSE. The nearest confirmed IB and Cambridge options are in Vadodara, around an hour away, and in Ahmedabad. Please check any school directly before making decisions, because offerings change." },
    { question: "What does IB or IGCSE tuition cost in Petlad?", answer: "The fee depends on the programme and level, the subject, session length and the tutor's experience with that syllabus. IB Gram quotes the rate in writing after the trial lesson and before booking, and does not publish prices. Being online removes travel costs, and there is no long contract to sign." },
    { question: "Can my child study Cambridge IGCSE from Petlad without a school?", answer: "Yes, in two ways. Some students join an online school that prepares them for Cambridge or Edexcel, and others enter as private candidates through an approved exam centre. Either way a tutor can teach the syllabus weekly online. The exam registration is arranged separately with the school or centre." },
    { question: "We have relatives abroad. Will an IGCSE or IB result help a move?", answer: "It often does, because universities and schools in the UK, Canada, the US and East Africa recognise both qualifications. Students who expect to join relatives abroad usually aim for IGCSE at Class 10 and the IB or A Level after. A tutor can help match subjects to the country the family has in mind." },
    { question: "Is online tutoring enough for a Petlad student?", answer: "For most students yes, because a live tutor, a shared screen and marked past papers cover what a visiting tutor would do. A stable internet connection is the only practical need. Students in villages around Petlad are encouraged to keep a mobile hotspot as a backup during the monsoon." },
    { question: "Is there a free trial?", answer: "Yes, every family gets a free trial lesson taught live online on a real topic from the student's syllabus. There is no obligation afterwards. Following the trial the tutor sets out a plan for the first month, and the family can continue, change the plan or ask for a different tutor." },
    { question: "Will the tutor write my child's Internal Assessment?", answer: "No. Tutors do not write IAs, Extended Essays, TOK essays or coursework. They help a student pick a workable question, read what the criteria ask for, plan data collection and give honest feedback on drafts. The assessed work remains the student's own, as IB rules require." },
    { question: "Which IB Diploma subjects can you cover for Petlad students?", answer: "Both Mathematics routes at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English, Computer Science, Psychology, Geography and Hindi, along with Theory of Knowledge and Extended Essay guidance. If a subject is not listed, send the request and we will say honestly whether a suitable tutor is available." },
    { question: "Do you teach MYP and PYP as well?", answer: "Yes. MYP sessions focus on criteria-based writing in Sciences, Mathematics and Language, and on keeping a Personal Project on track. PYP sessions build reading, writing and number confidence, and support the research habits that the Exhibition later needs. Both are taught live and one to one online." },
    { question: "When should tutoring begin?", answer: "The start of the course works best, Class 9 for IGCSE or Class 11 for the Diploma, so foundations are solid before internal exams and IA deadlines crowd the calendar. A later start can still help if sessions stay focused on high-value topics and timed past papers." },
    { question: "Can lessons be held in the evening or at weekends?", answer: "Yes. Most Petlad families choose weekday evenings or weekend mornings. Because the lessons are online, a slot can be moved by a day around a wedding, a festival or the Diwali vacation, and an extra session can be added before mocks without any travel." },
    { question: "What if my child moves from GSEB or CBSE to IGCSE?", answer: "The main work is exam technique and independent working, not content. Command words such as explain, evaluate and justify need direct teaching, and habits such as showing every step and planning coursework take practice. A school holiday spent on this before the switch helps noticeably." },
    { question: "What if we are not happy with the tutor?", answer: "Tell us, and a different tutor is arranged. Reviews every few weeks are meant to catch a mismatch early. There is no long-term contract, so changing or stopping carries no penalty, and the rate for any new tutor is confirmed in writing first." },
    { question: "Is IB Gram linked to any school in Petlad or to the IB or Cambridge?", answer: "No. IB Gram is an independent service with no agreement with any school named on this page and no affiliation with the International Baccalaureate Organization, Cambridge or Pearson Edexcel. School names appear only to describe the education map around Petlad." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How IB and IGCSE tutoring works in Indian cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where in-person home visits are available." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB Gram's Diploma, MYP and PYP tutors." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI compared." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial." },
    { label: "IB and IGCSE tutoring in Anand", href: "/anand/", description: "The district headquarters, about twenty kilometres from Petlad." },
    { label: "IB and IGCSE tutoring in Vadodara", href: "/vadodara/", description: "Nearest city with confirmed IB and Cambridge schools." },
    { label: "IB and IGCSE tutoring in Ahmedabad", href: "/ahmedabad/", description: "Gujarat's largest school market for international curricula." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor in Petlad",
  closingBody:
    "Tell us the programme or board, subject and level, the current grade and the evenings your household can keep. A tutor with the right syllabus experience will come back with open trial slots, taught online and one to one at no cost. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
