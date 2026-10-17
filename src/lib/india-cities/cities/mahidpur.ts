import type { CitySeoPage } from "../types";

/**
 * Mahidpur, Ujjain district, Madhya Pradesh (Malwa, on the Shipra). No IB or Cambridge school was
 * confirmed locally, so stripSchools is empty; clusters use Indore and Ujjain names already checked
 * on those city pages.
 */
export const mahidpur: CitySeoPage = {
  slug: "mahidpur",
  countryName: "Mahidpur",
  countryNameLong: "Mahidpur, Ujjain district, Madhya Pradesh",
  demonym: "Mahidpur",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Seven to nine in the evening on school days, with a long Sunday-morning slot for papers once the market day crowds thin",
  lastUpdated: "2026-09-21",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  geo: { latitude: 23.4833, longitude: 75.6667 },
  wikipedia: "https://en.wikipedia.org/wiki/Mahidpur",
  alternateNames: ["Mahidpur Ujjain", "Mahidpur Malwa", "Mehidpur", "Mahidpur Shipra"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mahidpur | Home Tuition, Online",
  metaDescription:
    "Mahidpur families can book live one-to-one IB and IGCSE home tuition online, with specialist tutors, written feedback after every class and a free first lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Mahidpur",
  heroEyebrow: "IB & IGCSE HOME TUITION, LIVE ONLINE, FOR MAHIDPUR",
  heroSubtitle:
    "Home tuition for IB and IGCSE students in Mahidpur, arranged as private video lessons so the child learns at the family table beside the Shipra valley. The town is a Malwa farming and trading centre, with Indore reachable by road but not by a daily school run, and a student on an international syllabus therefore has to find teaching elsewhere. We pair a specialist tutor with your child and begin with a free trial class.",
  primaryKeyword: "IB and IGCSE tutors in Mahidpur",
  imageAltText: "Mahidpur student in Malwa taking a live online IGCSE Chemistry class from home",
  secondaryKeywords: [
    "IB tutor in Mahidpur",
    "IGCSE tutor in Mahidpur",
    "IB home tuition Mahidpur",
    "IGCSE home tuition Mahidpur",
    "IB private tuition Mahidpur",
    "IB Maths tutor Mahidpur",
    "IGCSE Maths tutor Mahidpur",
    "IB Physics tutor Mahidpur",
    "IB Chemistry tutor Mahidpur",
    "IB Biology tutor Mahidpur",
    "IB DP tutor Ujjain district",
    "IB MYP tutor Mahidpur",
    "IB PYP tutor Mahidpur",
    "IGCSE online tuition Mahidpur",
    "IB tutor Malwa",
    "IGCSE tutor Ujjain Indore belt",
    "IB online classes Mahidpur Madhya Pradesh",
    "online home tuition Mahidpur",
  ],

  heroTrustPoints: [
    "Live classes with a single tutor for a single learner",
    "Teachers who know IB DP, MYP and PYP as well as Cambridge and Edexcel IGCSE",
    "Evening timing that suits Malwa school hours and farm or shop routines",
    "A free first class and a brief written report after each lesson",
    "Swap the tutor at no charge if the chemistry is off",
  ],
  heroStats: [
    { value: "IST", label: "Sessions on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before paying anything" },
    { value: "Online", label: "Private tuition, taught by video" },
  ],

  intro: {
    heading: "Private IB and IGCSE tuition for Mahidpur students, taught at home",
    paragraphs: [
      "Mahidpur is remembered in history books for the battle of December 1817, when a British force under Sir John Malcolm and Thomas Hislop defeated the Holkar army on the banks of the Shipra. Today the town is quieter and more practical: a tehsil headquarters in Ujjain district where Malwa farmers sell soybean, wheat and garlic, where traders, teachers and government staff fill the lanes, and where children go to schools that follow the MP Board or CBSE.",
      "Few of those children study the IB or IGCSE, and the reasons are specific. One is a parent returning from a Gulf or European posting. Another is a family whose older child is at an international school in Indore and wants a younger sibling to follow the same curriculum. A third is simply planning ahead for university abroad. In each case the problem is the same: Mahidpur has nobody who has taught Paper 3 of IB Physics or Paper 4 of IGCSE Chemistry.",
      "Our solution is a private tutor who teaches live and one-to-one over video, on Indian time, using your child's exact syllabus. This page explains how that works from Mahidpur: schools within reach, how boards differ, what shapes the fee, how Malwa's seasons meet the exam calendar, where students go after school, and how maths and the sciences are taught. We are independent of the IB, Cambridge, Pearson and every school, and tutors do not produce a student's assessed work.",
    ],
  },

  programmesIntro:
    "The IB runs four programmes, and Cambridge and Pearson run IGCSE. Mahidpur students tend to meet them through a sibling, a posting or a plan to study abroad, so we begin by finding out where the child currently stands.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Inquiry units, collaborative projects and a final Exhibition. Tutors work in brief sessions on reading, number fluency and explaining answers aloud.",
      countryNote:
        "No PYP classroom operates in Mahidpur, so a child who needs it is usually following a sibling or a relocation. Short lessons keep the inquiry habit alive at home.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked on criteria, ending in the Personal Project. Tutors teach students to unpack a task, plan an answer and use subject vocabulary.",
      countryNote:
        "Children from Hindi-medium classrooms need time to write to criteria in English. Weekly lessons and quick feedback loops make that shift manageable.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects plus Theory of Knowledge, the Extended Essay and CAS. Lessons cover examined content, paper handling and the reading of internal assessment criteria.",
      countryNote:
        "A Diploma student who boards in Indore comes home to Mahidpur for festivals and holidays, which are ideal for dense revision blocks online.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A set of DP courses paired with career-related study and a reflective project, built for applied pathways.",
      countryNote:
        "CP is almost unheard of in Malwa's small towns. If your child follows it, we match tutors to the DP courses in the package.",
    },
  ],

  subjectsIntro:
    "A tutor is chosen for the specific course and level, and for experience with students who learned science in Hindi before switching to an English-medium examination.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Algebra, calculus and proof-based reasoning, with Paper 1 and Paper 2 pacing built through timed sets." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, probability and modelling with graphing-calculator methods that examiners accept." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics through electromagnetism, with uncertainty, units and graph interpretation treated carefully." },
    { name: "Chemistry", levels: "SL / HL", description: "Stoichiometry, energetics, equilibrium and organic mechanisms, with a lot of worked calculation." },
    { name: "Biology", levels: "SL / HL", description: "Cells, genetics, physiology and ecology, with definitions drilled to the wording mark schemes prefer." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Soil, water and land-use questions that connect naturally to the Malwa plateau." },
    { name: "Economics", levels: "SL / HL", description: "Markets, trade and development, with agricultural price and mandi examples for extended answers." },
    { name: "Business Management", levels: "SL / HL", description: "Case-study analysis and finance tools, useful for students from trading families." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and the pseudocode conventions used in papers." },
    { name: "Psychology", levels: "SL / HL", description: "Studies, theories and evaluation, shaped into essay answers." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Unseen text analysis and comparative writing." },
    { name: "Hindi B and Hindi A", levels: "SL / HL", description: "Language and literature practice for students who study Hindi in an IB framework." },
    { name: "Theory of Knowledge", levels: "Core", description: "Conversation practice for the knowledge questions; the essay and exhibition stay the student's own." },
  ],

  igcseSubjectsIntro:
    "Cambridge IGCSE and Pearson Edexcel International GCSE share subject names but not paper codes, so we match tutors to the board first and then to the subject.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, geometry and statistics, rehearsed under timed conditions." },
    { name: "Physics", levels: "Core / Extended", description: "Motion, energy, waves, electricity and radioactivity." },
    { name: "Chemistry", levels: "Core / Extended", description: "Atoms, bonding, acids, electrolysis and basic organic chemistry." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, human systems, inheritance and ecology." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For schools following the double-award route." },
    { name: "English as a Second Language", levels: "Core / Extended", description: "Reading, summary, directed writing and speaking." },
    { name: "Computer Science", levels: "Single tier", description: "Programming logic, networks and data." },
    { name: "Business Studies", levels: "Single tier", description: "Enterprise, finance and marketing, with small-town business examples." },
    { name: "Agriculture", levels: "Single tier", description: "Crop and soil systems, relevant in a farming region where the board offers the subject." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Written and spoken practice for the Hindi option." },
  ],

  regionsTitle: "Mahidpur town and the villages of the Shipra plain",
  regionsIntro:
    "Learners come from the town centre, the roadside colonies and the farming settlements spread across the plateau. These notes reflect how school hours, harvest and connectivity differ by area.",
  regions: [
    { name: "Mahidpur town centre", note: "The old market with its grain-trading lanes and shops, busiest on market days; study slots start after the commercial rush has settled." },
    { name: "Tehsil and government quarters", note: "Housing for officials and teachers near the administrative offices, with stable power and a preference for fixed weekday timings." },
    { name: "Shipra riverbank side", note: "Neighbourhoods near the river and the old battlefield, quiet in the evening and prone to dampness during heavy monsoon spells." },
    { name: "Bus stand and highway colonies", note: "Layouts along the main road toward Ujjain and Jhalawar, where traffic noise is high and families often travel for work." },
    { name: "Mahidpur Road side", note: "The railway-linked area with households whose members commute or travel to Ujjain, Ratlam and Indore." },
    { name: "Jharda and Khachrod direction", note: "Nearby Malwa towns whose students also look for online specialists because international-syllabus teaching is scarce." },
    { name: "Soybean and wheat villages", note: "Farming settlements whose calendars follow sowing in June and harvest in October and March." },
    { name: "Tarana and Badnagar approach", note: "Settlements toward other Ujjain district towns, relevant for families who split their week between places." },
    { name: "Ujjain and Indore commuter families", note: "Households with a parent working in the big cities who return on weekends, so Sunday sessions suit them." },
  ],

  schoolClusters: [
    {
      city: "Mahidpur and Ujjain district",
      note: "Our checks of the IB directory and Cambridge and Edexcel centre lists turned up no school in Mahidpur. Schools there teach the MP Board or CBSE, so a local classroom for IB or IGCSE does not exist.",
      schools: [],
    },
    {
      city: "Nearby: Indore",
      note: "Indore, roughly two hours away by road, is where the confirmed international schools are, and where most Malwa families look if they want a classroom for the Diploma. A daily commute from Mahidpur is unrealistic, so this suits boarding or a flat in the city.",
      schools: ["Choithram International School", "Daly College", "The Emerald Heights International School"],
    },
    {
      city: "Nearby: Bhopal",
      note: "Bhopal has a confirmed school with an international programme and is the state capital. It is a long trip from Mahidpur and is relevant mainly for families who plan to relocate.",
      schools: ["Shrewsbury International School India"],
    },
  ],
  schoolDisclaimer:
    "The schools above are listed only so Mahidpur parents can see where international teaching genuinely exists. IB Gram runs on its own, owes nothing to any school, the IB, Cambridge or Pearson, and every admission is the school's own call.",

  modesIntro:
    "Since we do not send tutors to homes in Mahidpur, all formats below run online. Each is live and private and can be moved when the power goes or the market day clashes.",
  modes: [
    {
      title: "Weekly private class at your table",
      description: "A recurring live session with a tutor who has taught your child's board, subject and level.",
      bullets: ["Digital whiteboard and past-paper walk-throughs", "Short report to parents", "Easy rescheduling"],
    },
    {
      title: "Sibling-aligned catch-up",
      description: "For a younger child following an older sibling's international school and needing to learn its style.",
      bullets: ["Diagnostic in the first class", "Alternate-day lessons for a fortnight", "Review with the parents"],
    },
    {
      title: "Final-weeks exam drive",
      description: "Close-up practice ahead of mocks and the May or November sittings.",
      bullets: ["Papers marked line by line", "Command-word and mark-scheme drills", "Spare time held for outages"],
    },
  ],

  tutorsIntro:
    "Tutors teach from different cities in India and all lessons run on Indian Standard Time. Mahidpur's best window is from about seven to nine on weekday evenings, and Sunday mornings for longer practice.",

  sections: [
    {
      heading: "Where would a Mahidpur child actually study the IB or IGCSE in class?",
      paragraphs: [
        "Not in Mahidpur. The town, the nearby Khachrod and Jharda areas and the rest of Ujjain district are covered by MP Board and CBSE schools, a number of them respected locally, but none turned up in the IB World School directory or in the Cambridge and Edexcel lists when we looked. We prefer to report that bluntly rather than name a school we cannot vouch for.",
        "The real options start at Indore, which is a long drive from Mahidpur but connected by good roads, and at Bhopal. Indore has a small group of schools with international programmes, and a few Malwa families board a child there from Class 9 onwards. Others take a flat for the child and one parent for the two Diploma years, while the other parent stays behind with the farm or shop.",
        "Not every family wants or can afford this. Some prefer to keep a child at home, finish school with the local board, and prepare for exams or applications abroad by private study. That works best when someone who knows the papers is teaching live, which is where a dedicated online tutor comes in.",
        "If a school in the area is authorised for IB or approved for Cambridge later, parents will notice before we do. Once you give us the subject list and sitting, we can start teaching that syllabus straight away.",
      ],
    },
    {
      heading: "MP Board and CBSE versus IGCSE and the IB: what feels different to a Mahidpur student?",
      paragraphs: [
        "A Mahidpur child on the MP Board or CBSE knows the rhythm: textbooks, periodic tests, a pre-board exam and finally the board papers in February and March. The system rewards memory, accuracy and clean presentation, and it is supported by tuition classes at every corner of the town.",
        "Cambridge and Edexcel IGCSE keep much of the content but change the questions. They set tiered papers, publish detailed objectives and ask students to apply ideas. The IB Diploma goes further, because beyond exams there are internal assessments, an essay, a knowledge course and service, and credit goes to explanation and reasoning as much as to the right answer.",
        "The grid below puts the five systems side by side as a Malwa parent might want to see them.",
      ],
      table: {
        caption: "Comparing school systems from Mahidpur",
        columns: ["System", "Main exam", "Language", "Common exit", "Specialists nearby"],
        rows: [
          ["MP Board", "State papers in February and March", "Hindi or English", "State colleges, CUET-UG, JEE, NEET", "Plenty of teachers"],
          ["CBSE", "NCERT-based board exams", "Hindi or English", "CUET-UG, JEE, NEET", "Coaching in Ujjain and Indore"],
          ["Cambridge or Edexcel IGCSE", "Tiered papers, three windows a year", "English", "IB, A Level or Indian Class 11", "Almost none"],
          ["IB Diploma", "Exams plus essay and internal assessments", "English", "Indian and overseas universities", "None in the town"],
          ["A Level", "Linear exams after IGCSE", "English", "UK and other universities", "None in the town"],
        ],
      },
    },
    {
      heading: "How much does IB or IGCSE tuition cost in Mahidpur?",
      paragraphs: [
        "There is no tariff to quote here, and that is deliberate. A written proposal goes to the parent before the trial class is confirmed, and the proposal names the rate, the weekly lesson count and the likely duration.",
        "Four things set the number. The level matters first: a Higher Level Diploma Physics tutor with years of examining experience is priced differently from a tutor for IGCSE Business Studies. Subject rarity matters second, as Computer Science HL, Design Technology and Further Mathematics have few qualified teachers. The third is frequency, and the fourth is the plan's length: a single exam burst costs less overall than a year of twice-weekly lessons.",
        "A Mahidpur family should set that proposal against what the alternative would cost. Putting a child in a rented room in Indore, paying for hostel fees, travelling back and forth on weekends and giving up family time are real expenses. For a student who only needs a few subjects strengthened, online tuition at home is frequently the cheaper path.",
        "Ask for details of what is included, and hold back from committing to a long block until the trial class has gone well.",
      ],
      bullets: [
        "Course level and tier",
        "Number of qualified tutors in the subject",
        "Classes per week",
        "One-off burst or year-long plan",
      ],
    },
    {
      heading: "Online tutor, Indore hostel, local teacher or self-study: which fits a Mahidpur child?",
      paragraphs: [
        "These are the four paths that families weigh, often in combination. Which to lean on depends on what is actually missing: content, technique or consistent practice.",
        "An Indore hostel gives a full international classroom, but at the price of separation. Local teachers know the MP Board and CBSE well. Self-study with past papers suits disciplined students. A live online tutor brings subject and exam-board expertise into the home without anyone relocating.",
      ],
      table: {
        caption: "Support routes for IB or IGCSE from Mahidpur",
        columns: ["Route", "Syllabus expertise", "Effect on the family", "Scheduling", "Suits"],
        rows: [
          ["Live online tutor", "High and board-specific", "Almost none", "Evenings, Sundays, holidays", "Nearly every IB or IGCSE learner"],
          ["Indore hostel or flat", "Whole-school teaching", "Child away from home", "Set by the school", "Families ready to relocate"],
          ["Local teacher", "Strong on MP Board and CBSE", "Slight", "Fairly flexible", "Shared fundamentals"],
          ["Self-study with past papers", "Depends on the student", "None", "Fully flexible", "Highly motivated students"],
        ],
      },
    },
    {
      heading: "What do the Malwa seasons and festivals do to the exam calendar?",
      paragraphs: [
        "Malwa has a pleasant climate by central Indian standards, with cooler nights even in summer, but the months between April and June still bring heat and power cuts, and July to September brings monsoon rain that can swamp low-lying lanes near the Shipra. Winter from December to February is the calmest and best season for steady revision.",
        "Exam calendars are fixed by the boards. The IB Diploma is examined in May or November, and its results appear in July or January. Cambridge IGCSE is offered in three windows across the year, as is Pearson's International GCSE. Your school or registered centre chooses the window, so a tutor simply works back from the date of entry.",
        "Local life adds its own interruptions. Farmers are busiest when soybean is sown in June and harvested in October, Holi and Rang Panchami fall in March, and Navratri and Diwali arrive just before the November sittings. Mahidpur's market days also fill the main street, and Simhastha years at Ujjain draw heavy road traffic across the district.",
      ],
      table: {
        caption: "A study calendar for Mahidpur",
        columns: ["Months", "On the ground", "Effect on study", "Lesson plan"],
        rows: [
          ["Dec to Feb", "Cool and dry, pre-board tests", "Best season for long revision", "Full mock papers and error logs"],
          ["Mar to Apr", "Holi, Rang Panchami, board exams, IGCSE series", "Festival gaps, rising heat", "Timed practice with spare days"],
          ["May to Jun", "IB May session, peak heat, soybean sowing", "Power cuts, family busy", "Evening classes with a back-up plan"],
          ["Jul to Sep", "Monsoon, IB results", "Wet lanes, new term", "Foundation lessons, flexible times"],
          ["Oct to Nov", "Soybean harvest, Navratri, Diwali, November sittings", "Short weeks near exams", "Compressed revision with reschedule room"],
        ],
      },
    },
    {
      heading: "Which universities and careers follow an IB or IGCSE from Mahidpur?",
      paragraphs: [
        "In India, Diploma graduates present an equivalence certificate from the Association of Indian Universities. They sit CUET-UG for central universities, or apply directly to private universities in Indore, Bhopal, Pune and Delhi NCR that accept Diploma scores. For students who prefer to stay near home, institutions in Indore and Ujjain, including Vikram University in Ujjain, are practical options subject to their own entry rules.",
        "Medicine and engineering depend on subject combinations. A Diploma with Mathematics, Physics and Chemistry or Biology can be aligned with JEE or NEET, but the National Testing Agency and Madhya Pradesh counselling bodies publish the rules each year, and those should be read before Class 11 subjects are chosen.",
        "Abroad, the UK, Canada, Australia, the US and Singapore draw most applicants. IGCSE students step on to Class 11 in an Indian board, to A Level or to the IB, and their grades in mathematics and sciences decide how many of those paths remain open.",
        "Tutors can describe how each subject choice shapes options. For the final decision, a school counsellor or the university's own admission team is the right source.",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences handled in a live lesson?",
      paragraphs: [
        "The Analysis and Approaches course is for students who enjoy algebra, calculus and proof, usually heading toward engineering or pure science. Applications and Interpretation is for those who prefer data, modelling and technology and may be aimed at commerce, social science or design. The choice should be made on interest and destination, not on the idea that one is easier.",
        "A session starts with a few retrieval questions from the previous class. Then the tutor demonstrates one fully worked problem on the shared board, and the student tries a past-paper question without help. The tutor reviews it line by line, highlighting where method marks were won and where a missing unit or unexplained step cost credit.",
        "Physics classes train graph reading and unit handling, Chemistry classes spend time on the mole and equation balancing, and Biology classes focus on definitions and structured explanations. In each case, the aim is to teach the student to read what a command term demands.",
        "Internal assessments are the student's own investigations. Tutors can discuss criteria and approach but never write or edit the work.",
      ],
    },
    {
      heading: "Core, Extended, Foundation or Higher: how should a Mahidpur family choose IGCSE tiers and boards?",
      paragraphs: [
        "Cambridge splits many papers into Core and Extended, and Pearson Edexcel splits them into Foundation and Higher. Entering the lower tier limits the best grade available, so a student with a science, engineering or IB Higher Level future normally needs the upper one.",
        "To decide, compare recent test results, ask the subject teacher, and have the tutor set a diagnostic paper. A student who is careful but slow may do well at the lower tier, while one who is quick but erratic may reach the higher tier with extra drilling.",
        "A balanced IGCSE package mixes languages, mathematics, sciences and one humanities or business option. For Mahidpur students with Hindi-medium backgrounds, the main hurdles are usually extended English writing and scientific vocabulary, both of which respond to weekly practice over a couple of terms.",
        "Because the two boards differ in practical papers, syllabus codes and grade boundaries, we confirm the board before choosing a tutor.",
      ],
    },
  ],

  process: [
    { title: "Message the basics", description: "Tell us the class, board, subject, level and the sitting your child will take." },
    { title: "See a tutor profile", description: "A teacher who has handled the same course is proposed, with a short biography." },
    { title: "Sit a trial class", description: "One free live lesson on a real topic, so your child can judge the fit." },
    { title: "Read the written plan", description: "Rate and schedule come on paper. Nothing is booked until you say yes." },
    { title: "Settle into the weekly beat", description: "Regular live lessons, a report after each, and a replacement tutor if you ask." },
  ],

  whyPoints: [
    { title: "Board-specific teachers", description: "A Diploma Biology student is taught by someone who has taught that paper, not a general science tutor." },
    { title: "Fits Malwa life", description: "Market days, harvest weeks, festivals and exams are all in the timetable." },
    { title: "Plain about local options", description: "We say there is no confirmed IB or Cambridge classroom nearby and plan from that fact." },
    { title: "Reports you can read", description: "Every class ends with a short note on topics, mistakes and the next step." },
    { title: "Teaching only", description: "Tutors explain and give feedback. They never produce assessed work." },
    { title: "Little risk to try", description: "The first class is free, the rate is written down, and changing tutor is free too." },
  ],

  faqs: [
    { question: "Does Mahidpur have an IB or Cambridge school?", answer: "No school there appeared in the IB World School directory or in the Cambridge and Edexcel centre lists when we checked. Mahidpur schools run MP Board or CBSE syllabuses. Parents wanting an international classroom look to Indore, while others keep the child at home and add a private online tutor for IB or IGCSE subjects." },
    { question: "Will a tutor come to our house in Mahidpur?", answer: "No. Teaching in the family's own home is available only in Gurugram and certain parts of Delhi NCR. In Mahidpur we offer online home tuition, which means the child studies at home and the tutor joins by video. The lesson is still private, interactive and entirely focused on your child." },
    { question: "How do I get a tutor for IB Chemistry or IGCSE Maths in Mahidpur?", answer: "Send the board, subject, level and exam sitting to our WhatsApp or email. A tutor who has taught that exact paper is shortlisted, a short profile is shared and a free trial class is booked. If the first pairing feels wrong, another tutor is offered without extra charge." },
    { question: "What is the fee for IB tuition in Mahidpur?", answer: "It varies with the course level, the scarcity of tutors in the subject and the number of classes each week, so we publish no fixed list. A written proposal is sent before the trial is confirmed, which gives you time to compare and ask questions before committing to anything." },
    { question: "My older child studies at an Indore international school. Can the younger one follow?", answer: "Yes, and the older child's experience helps. Tell us the school's programme and the younger child's class, and we match a tutor who has taught the same syllabus. A short run of alternate-day classes usually brings the younger child to the right level before the school year starts." },
    { question: "Is online tuition really equal to a classroom in Indore?", answer: "It gives something different but often more useful. The class is one-to-one, the tutor targets your child's actual weak points, and no time is lost on the road. A classroom offers peers and a daily routine, but it asks the child to leave home, which not every Mahidpur family wants." },
    { question: "Can a child from a Hindi-medium school move to IGCSE?", answer: "Yes, if there is some lead time. The sciences and maths content overlaps with the MP Board, but exam English and command words are new. Starting in Class 8 or 9 is comfortable, and two or three terms of weekly lessons usually build enough fluency for the first IGCSE papers." },
    { question: "Will the tutor write my child's Extended Essay or IA?", answer: "No. Tutors teach method, explain the marking criteria and respond to ideas the student brings, but they never write, edit or rewrite an Extended Essay, internal assessment, TOK essay or coursework. Anything submitted must be the student's own effort, which also protects the grade." },
    { question: "What happens in the free trial class?", answer: "Your child attends one live class on a real topic from their syllabus with the proposed tutor, at no cost and with no obligation. A short note follows. If you wish to continue, the weekly plan and rate arrive in writing, and if not, you simply say so." },
    { question: "Which IB and IGCSE sittings do you prepare students for?", answer: "Students are prepared for the May and November IB sessions and for whichever Cambridge or Edexcel window their school enters them in. The school or centre sets the date, so we plan backwards from it. IB results are released in July and January." },
    { question: "Do you teach both Cambridge and Pearson Edexcel IGCSE?", answer: "Yes. Because paper numbers, tiers and practical components differ, the tutor is chosen by board code and syllabus, not just by subject name. Please give us the board's name and the papers listed on your child's exam timetable." },
    { question: "How do we cope with power cuts or a weak signal?", answer: "Plan a back-up: a phone hotspot and an inverter or power bank. Mahidpur summers and monsoon storms can interrupt supply. When a class is cut short, we rebook the lost time within the same week where the tutor's diary allows, and exam-season families usually keep two spare slots." },
    { question: "When are lessons held?", answer: "Most Mahidpur students choose weekday evenings between seven and nine and Sunday mornings, always in Indian Standard Time. Around Holi, Navratri, Diwali and the harvest weeks we pause or shift sessions and add a catch-up slot afterwards." },
    { question: "Is the IB Diploma accepted by Indian universities?", answer: "In general, yes. An equivalence certificate from the Association of Indian Universities is usually required, and CUET-UG leads to central universities. JEE, NEET and Madhya Pradesh counselling have their own subject rules, so check the latest official notices before fixing Class 11 subjects." },
    { question: "Can students from Khachrod, Jharda or Ujjain join too?", answer: "Yes. Because teaching is online, any address in Malwa with a dependable connection will do. We choose a weekly time that fits the school day and the household's routine, and keep it fixed so lessons become an easy habit rather than a negotiation." },
    { question: "How do we start?", answer: "Write to support@ibgram.com or send a WhatsApp message to +91 7439 368 115 with your child's class, board, subject and sitting. A tutor suggestion and a proposed trial time usually return within a day or two." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "See where else the online model is available." },
    { label: "IB tutoring overview", href: "/ib-tutors/", description: "How our IB teaching is organised by programme." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects with board-matched tutors." },
    { label: "Primary Years Programme help", href: "/programmes/pyp/", description: "Light, friendly support for younger IB students." },
    { label: "Diploma Programme help", href: "/programmes/dp/", description: "Subject tutoring for the last two school years." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI at Standard and Higher Level." },
    { label: "Tutor profiles", href: "/tutors/", description: "The people who teach IB and IGCSE." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book the trial." },
    { label: "IB and IGCSE tutors in Ujjain", href: "/ujjain/", description: "The district city, the closest of our pages to Mahidpur." },
    { label: "IB and IGCSE tutors in Indore", href: "/indore/", description: "The nearest city with confirmed international schools." },
    { label: "IB and IGCSE tutors in Nagda", href: "/nagda/", description: "A neighbouring Malwa industrial town served online." },
  ],

  closingHeading: "Start with a free class at home in Mahidpur",
  closingBody:
    "Give us the board, the subject and the sitting your child is entered for. We will find a tutor, hold a free first class and put the rate on paper before you decide. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
