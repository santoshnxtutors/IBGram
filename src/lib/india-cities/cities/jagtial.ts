import type { CitySeoPage } from "../types";

/**
 * /jagtial/ - IB and IGCSE tutoring page for Jagtial, Telangana. No IB or Cambridge/Edexcel IGCSE
 * school inside Jagtial could be confirmed, so stripSchools is empty and the clusters use schools
 * already verified on the Karimnagar and Hyderabad pages. Rendered with the shared CountryLanding layout.
 */
export const jagtial: CitySeoPage = {
  slug: "jagtial",
  countryName: "Jagtial",
  countryNameLong: "Jagtial, Telangana",
  demonym: "Jagtial",
  state: "Telangana",
  stateCode: "IN-TG",
  flagCode: "in",
  countryCode: "IN",
  region: "Telangana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Set around Jagtial's school hours, the harvest and marriage seasons and the Bathukamma, Dasara and Sankranti holidays",
  lastUpdated: "2026-09-21",
  geo: { latitude: 18.7947, longitude: 78.9137 },
  wikipedia: "https://en.wikipedia.org/wiki/Jagtial",
  alternateNames: ["Jagityal", "Jagtial Telangana"],
  stripSchools: [],

  title: "Jagtial IB & IGCSE Tutors | One-to-One Online Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Jagtial, Telangana: DP, MYP, PYP, Cambridge and Edexcel subjects, taught one to one from home, starting with a free lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition from Home in Jagtial",
  heroEyebrow: "PRIVATE IB & IGCSE TUITION FOR JAGTIAL STUDENTS",
  heroSubtitle:
    "Jagtial parents who want private tuition at home for an IB or IGCSE course quickly find that the teacher they need is not in the district. So the lesson comes to the child on a screen: a specialist who has taught that exact syllabus, working one to one, in Telugu-country time zones that are simply Indian Standard Time, at an hour that fits the household.",
  primaryKeyword: "IB and IGCSE tutors in Jagtial",
  imageAltText: "A Jagtial student solving an IB Physics problem beside a laptop showing a live tutor",
  secondaryKeywords: [
    "IB tutor Jagtial",
    "IGCSE tutor Jagtial",
    "IB home tuition Jagtial",
    "IGCSE home tuition Jagtial",
    "IB private tuition Jagtial",
    "IB Maths tutor Jagtial",
    "IGCSE Maths tutor Jagtial",
    "IB Physics tutor Jagtial",
    "IB Chemistry tutor Jagtial",
    "IB Biology tutor Jagtial",
    "IB DP tutor Jagtial",
    "IB MYP tutor Jagtial",
    "IB PYP tutor Jagtial",
    "IGCSE online tuition Jagtial",
    "IB tutor Jagityal",
    "IB tutor Jagtial Telangana",
    "IGCSE tutor Dharmapuri Jagtial",
    "online IB tutor Metpally Jagtial",
  ],

  heroTrustPoints: [
    "A tutor who already teaches the specific course your child sits",
    "Everything runs over video, since tutors do not visit homes in Jagtial",
    "One free lesson first, then a quotation in writing",
    "Independent from every school, board and university mentioned",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB from primary to Diploma" },
    { value: "IGCSE x2", label: "Cambridge and Edexcel" },
    { value: "IST", label: "Same clock as the tutor" },
    { value: "Free first class", label: "See it before you pay" },
  ],

  intro: {
    heading: "Where an international syllabus fits in a Godavari-belt district like Jagtial",
    paragraphs: [
      "Jagtial is a district of paddy, maize, turmeric and mango orchards, of the old fort at the heart of the town, of the Lakshmi Narasimha temple at Dharmapuri on the Godavari and the Anjaneya shrine at Kondagattu. It is also a district with a strong Gulf connection, since many families have a father, brother or uncle working in the Middle East. Education is largely Telangana state board and CBSE. We could not confirm a school in Jagtial that teaches the IB or a Cambridge or Edexcel IGCSE syllabus.",
      "That leaves a gap which private online tuition is well placed to fill. Tutors do not visit homes in Jagtial. In-home teaching is offered only in Gurugram and parts of Delhi NCR, and for a Telugu-belt town that is simply how it is. The Jagtial version is a live, one-to-one lesson over video, with the student at a desk at home and the tutor somewhere else in India who has taught that very paper before.",
      "The households we hear from are quite specific. Some are Gulf-linked families whose children studied IB or Cambridge in Dubai, Sharjah or Muscat and now live with relatives in Jagtial. Some are professionals at the engineering college or the new medical college. Others are ambitious local families who want to test whether a Cambridge or IB route will suit a Class 8 or 9 child.",
      "IB Gram is an independent service, unaffiliated with the IB, Cambridge, Pearson or any school named here. Tutors coach students and never write internal assessments, Extended Essays, Theory of Knowledge essays or coursework.",
    ],
    bullets: [
      "IB PYP, MYP and DP, along with Cambridge and Edexcel IGCSE",
      "Online in Jagtial; visits to a family's house exist only in Gurugram and parts of Delhi NCR",
      "A short written report after each session",
      "A different tutor on request",
      "Charges confirmed in writing before you start",
    ],
  },

  programmesIntro:
    "Jagtial is not a place where families sign up to an IB programme at the school gate. They arrive at it from elsewhere, and the tutor's job depends on how they arrived.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3 to 12, Pre-primary to Class 5",
      description:
        "Learning is organised into transdisciplinary units and finishes with the Exhibition in the last year. Tutors give steady help with reading, number sense and the habit of asking why.",
      countryNote:
        "In Jagtial the child is usually returning from a PYP school in the Gulf or Hyderabad, and the family wants the approach kept alive while they settle.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11 to 16, Class 6 to 10",
      description:
        "Teachers assess against four criteria in each subject, with a Personal Project in the last year. The main task is learning to justify an answer, not merely to state it.",
      countryNote:
        "With no MYP school nearby, a Jagtial student needs the criteria decoded and illustrated with sample answers of different quality.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Ages 16 to 19, Class 11 and 12",
      description:
        "Students take three Higher and three Standard Level subjects, alongside TOK, the Extended Essay and CAS. Final grades draw on written exams and internal assessment.",
      countryNote:
        "Diploma questions from the Jagtial area concentrate on Mathematics, Physics, Chemistry and Biology, mirroring the district's medical and engineering hopes.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Ages 16 to 19, Class 11 and 12",
      description:
        "Two Diploma-level courses are paired with a career-related study, service learning and a reflective project. Only a small number of Indian schools run it.",
      countryNote:
        "We know of no CP school within reach of Jagtial, so tutoring would support the academic subjects within it.",
    },
  ],

  subjectsIntro:
    "Send the exact list your child follows. Maths AA HL and Maths AI SL, or Biology HL and Biology SL, are different teaching tasks, and we pair a student with a tutor who teaches that combination.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Limits, derivatives, integrals and proof are built up carefully, and the exploration topic is chosen before the final year gets busy." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Regression, distributions and tests get most of the time, with training on describing what an output actually means." },
    { name: "IB Physics", levels: "HL / SL", description: "Circular motion, gravitation, electromagnetism and atomic physics are practised through problem sets, and students learn to write a clear practical method." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Thermochemistry, equilibria and reaction pathways take repeated drilling, using the data booklet as students would in the exam." },
    { name: "IB Biology", levels: "HL / SL", description: "Definitions must be exact, so tutors rehearse core vocabulary and show how each command term shapes a good answer." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams are drawn and explained quickly, with examples drawn from farm support prices, remittances and Indian public finance." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, decision tools and financial analysis are practised on unseen scenarios." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading, comparative writing and the oral are trained separately and then combined under timed conditions." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Computational thinking, data structures and networks are covered along with the pseudocode style the papers expect." },
    { name: "IB Psychology", levels: "HL / SL", description: "Key studies are learned with their design and limitations, then used in balanced extended responses." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies and data-response skills are practised, using river basin, irrigation and migration examples where the syllabus allows." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water use, soil and energy questions suit an irrigated Godavari-belt district and are handled as evidence-based arguments." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Telugu-speaking students bring a useful second-language mindset, and lessons develop formal writing and confident speaking." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Tutors talk through knowledge questions with the student, who then writes the essay and prepares the exhibition alone." },
  ],

  igcseSubjectsIntro:
    "IGCSE is usually studied at home in Jagtial, alongside a state board or CBSE school or during the months before a move. Board and tier are settled first, then the subject list.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended candidates practise algebra, trigonometry and statistics daily so working is quick and clear." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus and functions prepare stronger students for IB or A Level Mathematics." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Practice follows Edexcel's own layout, with attention to how method marks are given." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Motion, electricity, waves and thermal physics are reviewed with graded calculations and the alternative practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactivity, electrolysis and organic families are repeated until balanced equations come naturally." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Nutrition, transport and inheritance are revised with diagrams that the student redraws from memory." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Price, wages and trade are illustrated with examples from turmeric, maize and Gulf remittances." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Students apply theory to the business named in the paper, not to a generic company." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Number systems, flowcharts and simple programs are drilled before longer problems." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Students practise several writing purposes under time limits and receive detailed comments on tone and structure." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading and writing practice gives students a dependable language grade." },
  ],

  regionsTitle: "Jagtial town and district areas we teach online",
  regionsIntro:
    "Because lessons happen online, the list below records context: what schooling looks like nearby and how the local routine affects lesson timing.",
  regions: [
    { name: "Jagtial town centre", note: "The area around the old fort and main market, where most tuition centres and coaching classes are concentrated." },
    { name: "Dharmapuri", note: "A temple town on the Godavari where families look to Jagtial or Karimnagar for schools and to online tuition for specialist subjects." },
    { name: "Metpally", note: "A trading town northwest of Jagtial with many Gulf-linked households and a long history of overseas employment." },
    { name: "Koratla", note: "A sizeable town near Metpally whose families often send older children to Jagtial or Nizamabad for schooling." },
    { name: "Raikal", note: "A rural block where students rely heavily on self-study, making structured online lessons especially useful." },
    { name: "Korutla", note: "A commercial centre in the district with a busy market, where evening slots suit working parents." },
    { name: "Kondagattu", note: "Home to the Anjaneya temple; pilgrim traffic peaks around festival days, which shapes weekend planning." },
    { name: "Nachupally", note: "The area around the JNTUH engineering college, where faculty households sometimes seek international-syllabus support." },
    { name: "Sarangapur", note: "A block near Jagtial with agricultural households where children often study by themselves after school." },
    { name: "Mallial", note: "A block where families combine farm work with education, and flexible weekend lessons help." },
  ],

  schoolDisclaimer:
    "No school in Jagtial is presented as an IB or Cambridge/Edexcel IGCSE school because none could be confirmed. The schools below are in other cities, appear only as context, and are not connected with IB Gram.",
  schoolClusters: [
    {
      city: "Jagtial itself",
      note: "Schools here follow the Telangana board and CBSE. We could not verify an IB or IGCSE campus in the district, so students on those syllabuses study at home with an online tutor.",
      schools: [],
    },
    {
      city: "Nearby: Karimnagar",
      note: "Karimnagar is about an hour and a half away and holds the closest option we could confirm.",
      schools: ["Kencrest International School, Jyothinagar"],
    },
    {
      city: "Nearby: Warangal",
      note: "Warangal is a longer journey, with one confirmed international school on its outskirts.",
      schools: ["Skill Stork International School, Bheemaram"],
    },
    {
      city: "Nearby: Hyderabad",
      note: "Hyderabad, roughly four hours away, has the deepest choice of IB and Cambridge schools in Telangana, and some families consider boarding or relocation there.",
      schools: ["Oakridge International School", "CHIREC International School, Serilingampally", "International School of Hyderabad"],
    },
  ],

  modesIntro:
    "Three patterns cover most Jagtial households. Each is a live video class with a single tutor, and each answers a different need.",
  modes: [
    {
      title: "A standing weekly class",
      description:
        "One tutor, one slot and a syllabus followed in order, with homework returned between sessions.",
      bullets: [
        "Suitable for DP, MYP and IGCSE",
        "Shared whiteboard in every class",
        "Photographs of written work for marking",
        "Continuity from month to month",
      ],
    },
    {
      title: "Alongside a Telangana board or CBSE school",
      description:
        "For children who attend a local school and study an international course separately in the evening or at weekends.",
      bullets: [
        "Content follows the international syllabus",
        "Sessions avoid the busiest school weeks",
        "Summary for parents each month",
        "Prepares for a later school change",
      ],
    },
    {
      title: "A short push before exams",
      description:
        "A dense run of sessions using timed papers, marking and retesting of weak topics.",
      bullets: [
        "Marked to official schemes",
        "Recurring errors listed and retested",
        "Best begun about a month early",
        "Planned around festival and marriage seasons",
      ],
    },
  ],

  sections: [
    {
      heading: "How does the Gulf connection shape demand for IB and IGCSE in Jagtial?",
      paragraphs: [
        "The Middle East has been an employer of people from Jagtial, Metpally, Koratla and neighbouring districts for decades. Many families here have a member working in Dubai, Sharjah, Muscat or Riyadh, and international schools in those cities largely teach Indian CBSE, but also the IB, British and American curricula. A child who spent early years there may arrive in Jagtial with an IGCSE textbook or an IB report card.",
        "Other families think ahead. A parent who has seen how graduates from Cambridge or IB backgrounds are received abroad sometimes decides that a child should follow the same path from Class 8 or 9. That is a reasonable ambition, and one that needs careful, exam-focused teaching.",
        "Add the professional households at the engineering campus and the new government medical college, and the picture becomes a small but real demand for international syllabuses in a district with no local school for them. We could not confirm one, and we say so plainly.",
        "Online tutoring meets all these cases. It supports the returning child, the forward-planning family and the transferred professional in the same way: by matching them with a teacher who knows the syllabus and can mark the papers.",
      ],
      bullets: [
        "Gulf-linked families are a leading source of interest",
        "Faculty and medical college households add more",
        "No IB or IGCSE school confirmed in the district",
        "Online tutoring serves each of these groups equally",
      ],
    },
    {
      heading: "Telangana board, CBSE, IB or IGCSE: what does a Jagtial parent gain and give up?",
      paragraphs: [
        "A Jagtial family choosing between boards is really choosing between two study styles. The Telangana board and CBSE reward a thorough command of a defined textbook, and they connect smoothly to TG EAPCET, NEET and JEE, the exams that dominate local ambitions.",
        "IB and IGCSE reward explanation, interpretation and the ability to tackle a problem unlike any seen before. They suit curious, articulate students and demand a lot of writing. They also place a student on an international footing, which is useful if the plan involves the Gulf, the UK, Canada or Australia.",
        "The table lays the differences out in short form. Individual schools vary, so treat it as a conversation starter rather than a rulebook.",
        "Some families hedge, keeping a child in the local board for the main exam while studying one international subject privately. That is sensible, and cheap to try.",
      ],
      table: {
        caption: "Boards seen from a Jagtial family's side of the table",
        columns: ["Consideration", "Telangana board", "CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["Where to study it near Jagtial", "Widely available", "Several schools", "No school confirmed", "No school confirmed"],
          ["Style of question", "Textbook-based", "Textbook plus application", "Open, analytical, essay-led", "Structured, applied, tiered"],
          ["Entrance route in India", "TG EAPCET, NEET, JEE directly", "NEET, JEE, CUET directly", "Equivalence usually needed", "Class 11 in another board first"],
          ["Helps overseas plans", "Depends on the university", "Widely understood", "Very widely understood", "Widely understood"],
        ],
      },
    },
    {
      heading: "What drives the fee for IB or IGCSE tuition in Jagtial?",
      paragraphs: [
        "We do not print prices, because the same hour can cost different amounts depending on who teaches it and what is taught. After hearing about the course, level and timetable, we send a written quotation so the figure is clear before anything starts.",
        "The course and level matter most. IB Chemistry HL, IB Maths HL or IGCSE Additional Mathematics require senior specialists whose time is in demand. Language, humanities and early MYP support draw on a wider pool. The tutor's track record with the exact board and paper also counts.",
        "Frequency changes the total. A weekly class across a school year and a compressed run of lessons before an exam suit different budgets, and families can move between the two as the calendar demands.",
        "Since lessons are online, Jagtial families avoid the hours and fuel of a trip to Karimnagar or Hyderabad for a tuition class. The first lesson is free, and a change of tutor is available if the fit is poor.",
      ],
      bullets: [
        "Level, subject and tutor experience decide the rate",
        "Lesson frequency changes the total",
        "Quotation in writing before you commit",
        "No travel cost; first lesson free",
      ],
    },
    {
      heading: "Which is better for an IB student in Jagtial: online tutor, coaching class, local teacher or self-study?",
      paragraphs: [
        "Telangana's coaching culture is powerful, and Karimnagar and Hyderabad have busy tuition markets. Those classes are usually built for EAPCET, NEET, JEE and state board exams, which is a different target from IB or Cambridge papers.",
        "A local teacher may be excellent at core Physics or Mathematics but may not know the IB Paper 3 format or a Cambridge mark scheme. Self-study with past papers works for disciplined students, but mistakes stay hidden without a marker.",
        "An online tutor who teaches the exact course is the closest substitute for a classroom that does not exist locally. The table compares the four options on the points parents most often raise.",
      ],
      table: {
        caption: "Four ways to prepare for an international syllabus from Jagtial",
        columns: ["Option", "Knows the paper", "Marks to the scheme", "What to watch"],
        rows: [
          ["Online one-to-one tutor", "Yes, matched by course", "Yes", "Steady internet needed"],
          ["Coaching class in a bigger city", "Built for local exams", "Not for IB or IGCSE", "Travel and fixed batches"],
          ["Local private teacher", "Depends on background", "Rarely", "Small pool"],
          ["Self-study", "Own reading of the syllabus", "No", "Errors go unnoticed"],
        ],
      },
    },
    {
      heading: "How do harvest, marriage season and festivals fit into an exam year in Jagtial?",
      paragraphs: [
        "The IB Diploma has May and November exam sessions, and IGCSE exams run in February to March, May to June and October to November. A student aiming at May needs a plan that starts in the previous June.",
        "Local rhythms shape that plan. Bathukamma and Dasara fall in the autumn and bring some of the longest breaks of the year, Sankranti arrives in January, and Ugadi in spring. Paddy and maize harvests pull many families into farm work, and marriage seasons take days out of a household's routine.",
        "Heat is the last factor. May in Telangana is fierce, and power interruptions are not unknown, so timed papers should be rehearsed in April, with a charged laptop and hotspot ready.",
        "The table shows a sample calendar. We adjust it with each family whenever school dates or family plans change.",
      ],
      table: {
        caption: "A sample year for a Jagtial student sitting the May session",
        columns: ["Stretch of the year", "Study focus", "Local rhythm"],
        rows: [
          ["June to August", "Start the course, set routines", "Monsoon sowing; Bonalu in some areas"],
          ["September to October", "Core teaching, first checks", "Bathukamma and Dasara holidays"],
          ["November to January", "Practice papers, IA drafts", "Harvest, marriages, Sankranti"],
          ["February to March", "Mocks and correction", "Ugadi; comfortable weather"],
          ["April to May", "Timed papers, then exams", "Peak heat; plan backup power"],
        ],
      },
    },
    {
      heading: "Where can IB and IGCSE grades take a student from Jagtial?",
      paragraphs: [
        "The choice sits between Indian universities, professional entrance exams and universities abroad. Each has its own paperwork, and it is worth learning the rules in Class 11, not Class 12.",
        "For Indian universities, IB Diploma holders usually need an equivalence certificate from the Association of Indian Universities when applying to public institutions, while many private universities take IB scores directly. CUET-UG has provisions for students from foreign boards. IGCSE students commonly move to Class 11 in CBSE, ICSE, IB or A Level.",
        "For Telangana's engineering and medical routes, TG EAPCET, NEET-UG and JEE Main each set subject conditions, and international-board students may need equivalence. A student who wants medicine needs Biology, Chemistry and Physics in the Diploma, and one who wants engineering needs Mathematics.",
        "Overseas, UCAS handles the UK, the Common Application covers many US universities, and Canada, Australia and the Gulf have direct routes. Predicted IB grades and IGCSE results count in different ways. Tutors focus on the classroom learning behind those results.",
      ],
      bullets: [
        "AIU equivalence for public Indian universities",
        "TG EAPCET, NEET-UG, JEE Main and CUET-UG each have rules",
        "UCAS, Common App and direct applications abroad",
        "Confirm current notices before locking in subjects",
      ],
    },
    {
      heading: "What does an online IB Maths or Science lesson look like in practice?",
      paragraphs: [
        "Picture a desk in a Jagtial living room with a laptop and a sheet of paper. The tutor writes on a shared board, sets a question and waits while the student works it by hand. Afterwards the student photographs the page, and the tutor comments on each line.",
        "Mathematics students must choose between Analysis and Approaches and Applications and Interpretation. The first leans on algebra, calculus and proof, and is the usual choice for engineering and pure science. The second concentrates on statistics and modelling with technology, and fits business, social science and design. We give advice at the start.",
        "In Physics, Chemistry and Biology, each course splits into ideas to understand, facts and equations to recall, and an internal investigation. Tutors help with the first two and coach the third by asking questions, leaving the writing to the student.",
        "Sessions run an hour, close with a small task and rely on a charged laptop and a decent connection.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how do Jagtial students pick a tier and subjects?",
      paragraphs: [
        "Core and Extended are separate papers. Core tops out at grade C, and Extended reaches A star, so the tier controls what comes next.",
        "Students aiming for the IB Diploma, A Level or a demanding degree should usually sit Extended in Mathematics and the sciences. Core suits those who find a subject hard or take it for breadth. After a term, the tutor can advise whether to move.",
        "A typical subject list has English, Mathematics and two or three sciences, plus one of Economics, Business or Computer Science. Hindi as a second language is a common extra for Telugu-speaking students.",
        "Cambridge and Edexcel differ in style and tier names, with Edexcel using Foundation and Higher. Tell us which you are entered for and we choose a tutor with that experience.",
      ],
    },
  ],

  process: [
    { title: "Tell us about the student", description: "Class, board, subjects and exam month, by WhatsApp or email." },
    { title: "Meet a proposed tutor", description: "We name one or two teachers who already handle that syllabus." },
    { title: "Sit a free lesson", description: "A full class, with no charge and no obligation." },
    { title: "Receive the terms", description: "Fee, timetable and a first-month plan arrive in writing." },
    { title: "Study and check in", description: "Regular sessions, written summaries and a swap if the fit slips." },
  ],

  whyPoints: [
    { title: "Course-specific teachers", description: "An HL Physics student is taught by someone who teaches HL Physics." },
    { title: "No trip to Karimnagar or Hyderabad", description: "The lesson arrives at the family's own desk." },
    { title: "Plain speaking", description: "We do not claim any IB or IGCSE school in Jagtial." },
    { title: "Reports parents can use", description: "Each class ends with a short written summary." },
    { title: "Free first lesson", description: "Judge the tutor before spending a rupee." },
    { title: "Coaching that stays honest", description: "Tutors never write a student's assessed work." },
  ],

  tutorsIntro:
    "Every tutor teaches from within India on Indian Standard Time, so timing is simple for a Jagtial family. We pick tutors by syllabus, level and teaching style and send a short profile before the first lesson.",

  faqs: [
    { question: "Can an IB Gram tutor come to my house in Jagtial?", answer: "No. Tutors do not travel to homes in Jagtial, because in-home lessons run only in Gurugram and parts of Delhi NCR. Jagtial students learn through live online one-to-one lessons at home, which means the tutor can be a true specialist from any part of India instead of whoever is available nearby." },
    { question: "Is there any IB or Cambridge school in Jagtial?", answer: "We could not verify one. Schools in the district follow the Telangana board or CBSE. The closest confirmed option we know of is in Karimnagar, with more choice in Warangal and Hyderabad. Because approvals change, the official IB and Cambridge school directories are the best place to check." },
    { question: "How do I begin?", answer: "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with your child's class, board, subjects and exam session. We propose a tutor who already teaches that syllabus and arrange a free lesson. The tutor need not live in Telangana, because everything happens over video." },
    { question: "What will IGCSE tuition cost for a Jagtial family?", answer: "The rate depends on the tutor's experience, the subject and level and how many lessons a week your child takes, so we confirm it in writing before you commit. Extended Mathematics and the sciences usually sit higher than language or early-level support. There is no travel cost, and the first lesson is free." },
    { question: "Can my child take IGCSE papers as a private candidate from Jagtial?", answer: "Usually yes, if an exam centre accepts private entries. Such centres tend to be in cities like Hyderabad, Karimnagar or Warangal, and each sets its own fees and closing dates. Cambridge and Pearson publish lists of centres. Practical assessment for the sciences needs special attention. Registration is your responsibility; tutors prepare the student." },
    { question: "Which IB subjects do Jagtial families ask for?", answer: "Mathematics, Physics, Chemistry and Biology come first, then Economics, Business Management and English. Families planning to send a child abroad often ask about Theory of Knowledge and the Extended Essay, where tutors discuss ideas and structure but never write any text the student submits." },
    { question: "Will an IB Diploma allow NEET or JEE entry?", answer: "Possibly, depending on the year's rules. The agencies set conditions on subject combinations and certificate recognition, and both change. A student who wants medicine needs Biology, Chemistry and Physics; one who wants engineering needs Mathematics. Confirm the latest notice in writing before choosing Diploma subjects." },
    { question: "How do harvest and marriage seasons affect lessons?", answer: "They can shift timings but rarely stop teaching. Online sessions can be moved to evenings or weekends when a family travels or hosts guests. We advise planning revision blocks ahead of known travel, and any lost time is rescheduled without extra charge when a session is missed for a genuine reason." },
    { question: "Can tutors write an Internal Assessment for my child?", answer: "No. Tutors coach but never write. They can explain a criterion, test a research question or respond to an outline, but the words, data and conclusions must be the student's own. Breaking that rule can cost marks or the entire Diploma, so we keep a firm line." },
    { question: "Should a Class 8 child start IGCSE lessons?", answer: "Many families do, and it works well. A younger student has time to move from recalling answers to explaining them, with no exam pressure. We keep the first term light, teach command words and neat working, and bring in past papers later. A free trial shows quickly whether the format suits your child." },
    { question: "We speak Telugu at home. Will English-medium lessons be difficult?", answer: "Rarely for long. Lessons and exams are in English, though tutors can clarify a difficult idea in Hindi or simple English. Confidence in academic English usually grows within a term or two, and Hindi B or IGCSE Hindi can be added as a reliable extra subject." },
    { question: "Is a power cut a problem for online lessons?", answer: "It can be, particularly in summer. A charged laptop, a phone hotspot and, ideally, a power bank keep sessions going. If a lesson is cut short, the missing time is rescheduled without charge and the written summary notes where it stopped." },
    { question: "How many lessons should my child have each week?", answer: "For a settled syllabus, one hour a week plus homework is common. Before exams, families move to two, three or four sessions a week for about a month. Progress on past papers guides the decision, and you can change the pattern with a message at any time." },
    { question: "Do you cover both Cambridge and Pearson Edexcel?", answer: "Yes, and A Level and AS for background. Papers, tiers and question styles differ between the boards, so tell us which entry your child holds. We match a tutor who has taught that board and can rematch you if the plan changes." },
    { question: "What internet speed do we need?", answer: "Roughly 5 Mbps of stable connection handles video and a shared whiteboard. Broadband or good Wi-Fi is better than a mobile signal, and a second device gives you a fallback." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Every city where we teach online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How IB tutoring works for each programme." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects and tiers." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The Diploma's structure and where tutoring helps." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, projects and common difficulties." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Early-years inquiry support." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI compared." },
    { label: "Meet the tutors", href: "/tutors/", description: "How we match tutors to students." },
    { label: "Contact us", href: "/contact-us/", description: "Reach us by WhatsApp or email." },
    { label: "IB and IGCSE tutors in Karimnagar", href: "/karimnagar/", description: "Our page for the nearest large district town." },
    { label: "IB and IGCSE tutors in Nizamabad", href: "/nizamabad/", description: "Our page for the neighbouring district." },
    { label: "IB and IGCSE tutors in Hyderabad", href: "/hyderabad/", description: "Our page for the state capital." },
  ],

  closingHeading: "Start with a free IB or IGCSE lesson from Jagtial",
  closingBody:
    "Tell us the programme, subject and exam month, and we will introduce a tutor who teaches that syllabus. Message +91 7439 368 115 on WhatsApp or email support@ibgram.com; the first lesson is free.",
};
