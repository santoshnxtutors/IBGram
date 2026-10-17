import type { CitySeoPage } from "../types";

/**
 * /pandhurna/ - IB and IGCSE tutoring page for Pandhurna, Madhya Pradesh (now the headquarters of the
 * new Pandhurna district). No IB or Cambridge/Edexcel school could be confirmed in the town, so
 * stripSchools is empty and schoolClusters point to Nagpur and Bhopal using names already verified on
 * the nagpur and jabalpur pages. Online-only delivery: in-person home tuition is Gurugram / Delhi NCR only.
 */
export const pandhurna: CitySeoPage = {
  slug: "pandhurna",
  countryName: "Pandhurna",
  countryNameLong: "Pandhurna, Madhya Pradesh",
  demonym: "Pandhurna",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around school hours, the Gotmar fair week in the monsoon, harvest-season family commitments and the cold, dry December term",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.6, longitude: 78.5167 },
  wikipedia: "https://en.wikipedia.org/wiki/Pandhurna",
  alternateNames: ["Pandurna", "Pandhurna Chhindwara"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Pandhurna | Private Online Tuition",
  metaDescription:
    "Private IB and IGCSE tutors for Pandhurna students: live one-to-one online lessons for DP, MYP, PYP, Cambridge and Edexcel, with a free trial class first.",
  h1: "IB and IGCSE Tutors and Private Tuition in Pandhurna",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR PANDHURNA FAMILIES",
  heroSubtitle:
    "Looking for private tuition at home in Pandhurna for an IB or IGCSE course? The honest picture is that the town sits on the Jam river between Chhindwara and Nagpur with no IB or Cambridge classroom of its own, so the realistic route is a specialist tutor on a screen. Each lesson is live, one student and one tutor, scheduled around your child's school day. Tutors do not come to your house in Pandhurna; that service runs only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Pandhurna",
  imageAltText: "A Pandhurna student working through an IGCSE Physics paper with a tutor on a laptop video call",
  secondaryKeywords: [
    "IB tutor Pandhurna",
    "IGCSE tutor Pandhurna",
    "IB home tuition Pandhurna",
    "IGCSE home tuition Pandhurna",
    "IB private tuition Pandhurna",
    "IB Maths tutor Pandhurna",
    "IGCSE Maths tutor Pandhurna",
    "IB Physics tutor Pandhurna",
    "IB Chemistry tutor Pandhurna",
    "IB Biology tutor Pandhurna",
    "IB DP tutor Pandhurna",
    "IB MYP tutor Pandhurna",
    "IB PYP tutor Pandhurna",
    "IGCSE online tuition Pandhurna",
    "IB tutor Chhindwara district",
    "online IB tuition Madhya Pradesh",
    "Cambridge IGCSE tutor near Nagpur",
    "IB tutor Pandurna",
  ],

  heroTrustPoints: [
    "Tutors chosen for your child's exact IB subject and level, or the Cambridge or Edexcel code and tier they sit",
    "Fully online, so a Pandhurna family is not limited to whoever happens to live between Chhindwara and Nagpur",
    "A free trial class to judge the teaching before any commitment",
    "Independent of the IB, Cambridge, Pearson and every school mentioned here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Whole IB continuum" },
    { value: "Cambridge & Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "Tutors teach in your time zone" },
    { value: "Free trial", label: "Before you decide" },
  ],

  intro: {
    heading: "What IB and IGCSE study looks like from a town on the Jam river",
    paragraphs: [
      "Anyone searching for private tuition at home in Pandhurna for an international syllabus runs into a practical wall quickly. The town is the seat of its own district now, busy with cotton, grain and highway trade, yet the classroom options are CBSE, the Madhya Pradesh board and a few private English-medium schools. A family following the IB Diploma or a Cambridge IGCSE course is therefore studying with a tutor over a screen, and that is the model we have built our Pandhurna service around.",
      "In practice the families who contact us come from a handful of situations. Some have a child who started the IB or IGCSE in Nagpur, Pune or abroad and has come back to Pandhurna with a parent's transfer or a family business. Others plan a move to a Nagpur campus at Class 9 or Class 11 and want the child to arrive already comfortable with command words and criterion-based marking. A few register as private candidates for Cambridge papers through an approved centre and study mostly at home.",
      "Our tutors are specialists in the course, not generalists who also happen to know some Maths. For IB that means the subject, the level and the paper structure; for IGCSE it means the board, the syllabus code and Core or Extended. Lessons use a shared whiteboard and scanned past papers so that working is visible to both sides, much as it would be across a desk.",
      "We are an independent tutoring service, with no affiliation to the IB, Cambridge, Pearson or any school named on this page. Tutors explain, set practice and mark it with the student. They do not write or polish Internal Assessments, Extended Essays, TOK essays or any coursework that will be submitted for grading.",
    ],
    bullets: [
      "IB PYP, MYP and Diploma subject tutoring",
      "Cambridge and Pearson Edexcel IGCSE at Core, Extended, Foundation or Higher tier",
      "Live online lessons in IST, one student with one tutor",
      "Free trial class and a short written plan afterwards",
      "No visits to homes in Pandhurna; in-person lessons exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Pandhurna has no school running any stage of the IB, so each programme below is described by the kind of family that actually asks for it here, which is a different question from how the programme works on paper.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Learning is organised around transdisciplinary themes and teacher-guided inquiry, with no marks-driven exam, and the final year ends in a student-led Exhibition. Tutoring at this stage is light: reading aloud, number sense, and learning to ask a good research question.",
      countryNote:
        "Pandhurna parents asking about PYP are almost always continuing a programme begun in another city, and want reading and number work to stay on track at home.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Eight subject groups are assessed against published criteria, and a Personal Project sits at the end of the programme. Students who describe well but explain poorly lose most marks, so lessons practise stepping from what happened to why it mattered.",
      countryNote:
        "In Pandhurna the MYP request usually arrives as a Class 8 or 9 student preparing for a possible move to a Nagpur or Bhopal campus.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, plus the Extended Essay, Theory of Knowledge and CAS. Internal Assessments carry a fifth or more of many subject grades, and final papers fall in the May session, with a smaller November session for some schools.",
      countryNote:
        "Diploma students from the Pandhurna area usually need Higher Level Maths, Physics or Chemistry help while enrolled with a school in another city.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three Diploma courses are combined with a career-related study, a reflective project and a personal and professional skills course. Very few Indian schools offer it, but the Diploma subjects inside it still require ordinary subject teaching.",
      countryNote:
        "CP demand from Pandhurna is negligible, so any request normally comes down to a single Diploma subject inside the pathway.",
    },
  ],

  subjectsIntro:
    "Choosing a tutor starts with the precise course, not the word IB. A student on Maths Applications and Interpretation at Standard Level needs something quite different from a classmate on Analysis and Approaches at Higher Level, and Pandhurna students often take unusual combinations because they study alone.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof for engineering-bound students; Higher Level Paper 3 asks for long, unfamiliar reasoning chains that routine drilling does not build." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and technology use, with the Exploration needing a topic chosen early enough to collect real data." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through to fields and quantum ideas, with an Internal Assessment that rewards a sound, defensible method over an impressive-looking one." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, bonding, energetics and organic pathways, with speed using the data booklet making a visible difference under exam time." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology to ecology, where answering the command term exactly separates a good paper from a long one." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams that are labelled correctly and attached to a real, current example, plus a commentary portfolio built from news items." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study analysis where named theory is applied to the facts given, with a research project that needs one real organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen text analysis, comparative essays and a spoken Individual Oral, each needing a different kind of rehearsal." },
    { name: "IB Hindi A or B", levels: "HL / SL", description: "A natural strength for Pandhurna students; the work is learning formal text types, register and how an examiner rewards structure." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode, object-oriented thinking and a solution project whose code and documentation tell one consistent story." },
    { name: "IB Psychology", levels: "HL / SL", description: "Biological, cognitive and sociocultural approaches, with studies cited accurately and extended answers planned before writing." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking applied to water, soil and climate questions that a farming district makes easy to ground in examples." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study depth, fieldwork method and evaluation rather than description." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis for Paper 1 and a sustained, evidenced argument in the Paper 2 essay." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion-led sessions that test how a claim could be justified from different areas of knowledge, with exhibition and essay planning coached but never written for the student." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel both run an IGCSE with different paper structures, so we begin with the board, code and tier. Because there is no exam centre to lean on locally, we also confirm early which series your child is entered for and where the papers will actually be sat.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge's Extended tier rewards calculator discipline on one paper and full written working on the other." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, trigonometry and functions ahead of the IB or A Level, a useful bridge for students aiming at engineering." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Similar content to Cambridge but phrased in a recognisably different style, so practice has to come from the right board." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equations and graph reading, plus the alternative-to-practical paper that makes up for limited lab access at home." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactions and organic chemistry, with practical-skills questions practised on paper and from videos." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells to ecosystems, with data-handling questions that reward careful reading of graphs and tables." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For students taking the double-award route, where balancing three sciences in one grade needs a steady revision rhythm." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing and a speaking component suited to students whose home language is Hindi or Marathi." },
    { name: "IGCSE First Language English 0500", levels: "Grade 10", description: "Directed writing and narrative composition, where clear control of tone matters more than long vocabulary." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Core / Extended", description: "Comprehension, letter and essay writing in a language the student already speaks daily." },
    { name: "IGCSE Economics 0455", levels: "Grade 10", description: "Basic economic ideas, data response and clear explanation of cause and effect." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 10", description: "Business concepts applied to a case, a good fit for children from trading and farming families who see these ideas at home." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 10", description: "Algorithms, programming logic and Paper 2 problem solving practised on a laptop." },
  ],

  regionsTitle: "Corridors and neighbouring towns our Pandhurna students study from",
  regionsIntro:
    "Pandhurna is compact, and rather than invent ward names we describe where students actually sit when they join a lesson: along the town's main approaches, near the river and in the villages and small towns that feed into it. Lessons need only a stable connection and a quiet corner.",
  regions: [
    { name: "Around Pandhurna railway station", note: "Families near the Nagpur-Itarsi line often have a parent travelling for work; evening slots avoid the arrival of the late trains." },
    { name: "The Jam river banks", note: "Homes by the river share the same patchy evening power cuts as the rest of the town in the monsoon, so we agree a backup hotspot plan early." },
    { name: "The highway frontage", note: "The trading belt along the highway means shops close late; students from business families often start lessons after 7 pm." },
    { name: "Savargaon, across the river", note: "The village opposite Pandhurna on the Gotmar ground has its own school bus routes; lessons are timed after those return." },
    { name: "The Chhindwara side", note: "Students whose parents work in Chhindwara district offices often combine Class 11 with district-town coaching and need a Sunday-heavy schedule." },
    { name: "The Sausar road side", note: "Sausar is a neighbouring town in the same district; families on this side often split study between two settings." },
    { name: "The Nagpur-facing approach", note: "Pandhurna families with Nagpur relatives often plan a move there for Class 11, and use online lessons to bridge the gap." },
    { name: "Surrounding villages in the cotton and soybean belt", note: "Farming-family students may lose study days at sowing and harvest, so slots are planned in blocks around those weeks." },
    { name: "Government college and school clusters", note: "Students taking Class 11 and 12 here alongside private IB support usually study between 4 and 6 pm after classes." },
  ],

  tutorsIntro:
    "These are tutors who teach IB and IGCSE online across India. Pandhurna students are matched by subject, level and exam board, never by postcode, and every tutor below teaches live over video in IST.",

  schoolClusters: [
    {
      city: "Nearby: Nagpur",
      note: "Nagpur is the closest large city with confirmed international-curriculum schools, and the one Pandhurna families most often have in mind for a mid-school transfer or for boarding with relatives. We cannot place a child in these schools; they are listed for context only.",
      schools: ["D Y Patil International School, MIHAN", "Centre Point School International", "VIBGYOR World Academy", "International School of Scholars"],
    },
    {
      city: "Nearby: Bhopal",
      note: "Bhopal is the state capital and has the widest choice of international-curriculum schools in Madhya Pradesh, reached by train in several hours from the Itarsi side of the line.",
      schools: [],
    },
    {
      city: "Pandhurna and Chhindwara district",
      note: "We could not confirm any school in the town or in Chhindwara offering the IB or a Cambridge or Edexcel IGCSE. Local options are limited, so most families keep a child in their existing CBSE or state-board school and add subject tutoring.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "School names are listed only as a reference for where international-curriculum teaching exists near Pandhurna. IB Gram is an independent tutoring service and has no tie-up, partnership or endorsement arrangement with the IB, Cambridge, Pearson or any school mentioned.",

  modesIntro:
    "Every Pandhurna lesson happens over video. The three setups below differ in how the weeks are arranged rather than in format, and none of them involves a tutor travelling to your door, since in-person lessons are limited to Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "A steady weekly slot",
      description:
        "The same tutor, the same evening, week after week, working through a digital whiteboard with past papers sent beforehand. This is the usual choice for a Class 11 student building a subject from the start.",
      bullets: [
        "One regular tutor who learns how your child makes mistakes",
        "Papers and worked solutions kept in a shared folder",
        "Slots planned around school and the festival calendar",
        "Works for any IB subject or IGCSE code",
      ],
    },
    {
      title: "A planned term with check-ins",
      description:
        "A syllabus map, topic by topic, with a short mock at fixed points and a written summary for the family after each session. Suits parents who want to see progress without sitting in on lessons.",
      bullets: [
        "Topic-by-topic plan shared with the family",
        "Mocks timed to the May or October series",
        "Notes sent after every session",
        "Tutor can change if the fit is wrong",
      ],
    },
    {
      title: "A short push before exams",
      description:
        "Four to six weeks of intensive paper practice before an IB May session or a Cambridge or Edexcel series, aimed at timing, command words and mark-scheme habits rather than new content.",
      bullets: [
        "Timed papers with detailed marking",
        "Fast feedback on weak topics",
        "Flexible days during exam weeks",
        "Good for private candidates",
      ],
    },
  ],

  sections: [
    {
      heading: "Do schools near Pandhurna teach the IB or IGCSE, and who are the families asking?",
      paragraphs: [
        "No school inside Pandhurna is confirmed to offer the IB or a Cambridge or Edexcel IGCSE. Schools in the town and across Chhindwara district follow CBSE or the Madhya Pradesh Board, and a few private ones teach in English medium. The nearest confirmed international-curriculum campuses are in Nagpur, which is the practical reference point for a family weighing a move or boarding arrangement.",
        "Pandhurna's international-curriculum families are a small, specific group. Some are relatives of professionals working in Nagpur, Pune or the Gulf who keep a child at the family home for a year. Others return from a posting elsewhere, with a child already mid-way through MYP or the first year of the Diploma, and need a bridge until the next move. A third group are traders and farmers' children preparing for foreign university applications and choosing IGCSE or IB for that reason.",
        "Because no local teaching infrastructure exists, the shortage is of tutors, not of ambition. Looking within Pandhurna for someone who has taught IGCSE Chemistry or IB Economics will normally turn up nobody, which is why we match from a national pool instead of a postcode.",
        "A common worry is falling behind classmates. For a student who is enrolled elsewhere and studying alone, regular lessons, past papers marked against real mark schemes and a tutor who knows the specification fill most of that gap, and we say plainly when a topic needs more time than the calendar allows.",
      ],
    },
    {
      heading: "CBSE, MP Board, IB and IGCSE: how the routes differ for a Pandhurna student",
      paragraphs: [
        "Most Pandhurna families are choosing between the Madhya Pradesh Board, CBSE and, less often, an international route. The table below sets the four side by side on the points that decide the matter locally: what is taught nearby, how marks are given, and what each does for a child who might later study outside India.",
        "The MP Board and CBSE reward recall of a defined textbook, with a board examination at Class 10 and Class 12. IGCSE is assessed after Class 10 through written papers and, in some subjects, coursework or practical assessments, and the style leans toward applying knowledge to unfamiliar data. The IB Diploma goes further, bundling six subjects with an essay, TOK and service hours.",
        "Switching late is the hardest part. A student moving from MP Board Class 10 into the IB Diploma has to adjust to analytical writing, internal assessments and unfamiliar vocabulary at the same time as a heavier workload, and early tutoring in Class 9 or 10 makes that move gentler.",
        "None of the four is better in itself. A child aiming for NEET from Pandhurna may do well to stay in CBSE, while one eyeing a university abroad may gain from the IB or IGCSE route, and we are happy to talk through the trade-off before any lesson is booked.",
      ],
      table: {
        caption: "Comparing board routes for a student in Pandhurna",
        columns: ["Route", "Available in the town", "How it is assessed", "Typical aim"],
        rows: [
          ["MP Board", "Yes, widely", "Board exams in Class 10 and 12, textbook based", "State colleges, local competitive exams"],
          ["CBSE", "Yes, in several schools", "Class 10 and 12 board papers; NCERT based", "JEE, NEET, CUET-UG, Indian universities"],
          ["Cambridge or Edexcel IGCSE", "No school confirmed; study via tutor and an exam centre", "Written papers after Class 10, series in May-June and Oct-Nov", "Bridge to IB, A Level or Class 11 CBSE"],
          ["IB Diploma", "No school confirmed; nearest options in Nagpur", "Six subjects, internal assessments, May exams", "Universities in India and abroad, AIU-recognised"],
        ],
      },
    },
    {
      heading: "What do IB and IGCSE tutoring cost for a family in Pandhurna?",
      paragraphs: [
        "IB Gram does not publish fixed prices, and rates for Pandhurna students are quoted in writing before anything is booked. What matters is understanding what moves the figure, so a family can compare fairly with any alternative.",
        "The main drivers are the subject and level, since a specialist in IB Maths Higher Level or Physics HL is harder to find than a tutor for IGCSE English, and the tutor's experience with the specific syllabus. Frequency counts too: two lessons a week for a Diploma student cost more per month than one lesson plus paper marking, and exam-season intensives are priced for the short window they cover.",
        "Delivery is online, so none of the cost is travel or venue. Pandhurna parents who have paid for coaching in Nagpur or Chhindwara usually find that online hours are the saving, since a family no longer pays for the commute, a hostel bed or a parent's day off.",
        "The free trial lesson lets a family see a tutor teach before agreeing to anything, and a change of tutor is available if the first match is not working. Ask for the plan in writing, check how many sessions it covers, and compare it with what you now spend on ad hoc coaching rather than a headline figure.",
      ],
      bullets: [
        "Subject and level (HL, SL, Core, Extended) shape availability",
        "Tutor experience with the specific syllabus code",
        "Lessons per week and length of the plan",
        "Exam-season intensives priced separately",
        "No travel or venue cost because everything runs online",
      ],
    },
    {
      heading: "Online tuition, local coaching, a private tutor or self-study: which suits Pandhurna?",
      paragraphs: [
        "Pandhurna families have four realistic ways to prepare a child for IB or IGCSE, and each fits a different situation. Online one-to-one tuition is the only option where the tutor actually knows the syllabus, which is why it is our focus here.",
        "Local coaching centres in Pandhurna and Chhindwara concentrate on JEE, NEET and board exam preparation, which is excellent for those goals but rarely covers IB command terms or Cambridge mark schemes. A private tutor in town can help with school Maths or Science, but is unlikely to have taught the specific international specification.",
        "Self-study with past papers is possible for a disciplined Class 10 student and works better for Maths than for essay subjects. The risk is practising without anyone marking against the mark scheme, so errors repeat unnoticed.",
        "The table lays these out. For many families the sensible mix is the school the child already attends plus a weekly online lesson in the one or two subjects that are hardest.",
      ],
      table: {
        caption: "Four ways to prepare for IB or IGCSE from Pandhurna",
        columns: ["Option", "Knows IB / IGCSE syllabus", "Fits school hours", "Main limitation"],
        rows: [
          ["Online one-to-one tuition", "Yes, matched by subject and board", "Evenings and weekends, flexible", "Needs a steady internet connection"],
          ["Local coaching centre", "Rarely; built for JEE, NEET and boards", "Fixed batch timings", "Group pace, no international marking"],
          ["Private tutor in town", "Sometimes for Maths and Science only", "Easy to arrange", "Small pool, little exam-specific experience"],
          ["Self-study with past papers", "Depends on the student", "Fully flexible", "No one marks against the real mark scheme"],
        ],
      },
    },
    {
      heading: "When are the exams, and how do local seasons shape the year?",
      paragraphs: [
        "A Pandhurna student has two calendars to manage: the international exam series and the rhythm of the town itself. The IB Diploma has main sessions in May and November, with results in July and January. Cambridge runs in May-June and October-November, plus a February-March series in India, and Pearson Edexcel runs January, May-June and November windows.",
        "The local year bends around the monsoon and its festivals. The Gotmar fair on the Jam river in the monsoon month of Bhadrapad draws crowds and closes roads for a day or two, and school holidays stack up at Diwali. December in the Satpura foothills is cool and dry, a good term for steady revision, whereas May and June bring heat and occasional power cuts that make long afternoon lessons uncomfortable.",
        "Farming households add another layer. Sowing and harvest of cotton and soybean can pull older students into family work, so we plan blocks of intensive lessons ahead of those weeks rather than expecting steady attendance throughout.",
        "The table shows how these fit together, using months rather than exact dates, since boards publish new timetables each year. Always check the current schedule with your examination centre.",
      ],
      table: {
        caption: "Exam sessions and Pandhurna's local calendar",
        columns: ["Period", "International exams", "Local factor", "Study approach"],
        rows: [
          ["January-February", "Edexcel January series; IB November results out", "Cool dry weather, school terms steady", "Strong revision term"],
          ["March-April", "Cambridge February-March results; IB mocks", "Rising heat, board exams in the state system", "Past-paper practice, early mornings"],
          ["May-June", "IB May session; Cambridge and Edexcel main series", "Heat, occasional power cuts", "Short lessons, backup connection"],
          ["July-September", "IB results in July; coursework phases", "Monsoon, Gotmar fair week, Pola", "Catch-up lessons, flexible dates"],
          ["October-December", "Cambridge Oct-Nov series; IB November session", "Diwali break, clear weather after", "Intensive revision, mock exams"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Pandhurna go after school?",
      paragraphs: [
        "Pandhurna students who finish the IB Diploma have routes into Indian and overseas universities. The Association of Indian Universities issues an equivalence certificate for the IB Diploma, which most Indian institutions ask for, and CUET-UG accepts IB candidates who meet each university's stated eligibility.",
        "For engineering, JEE Main eligibility depends on having Physics, Chemistry and Mathematics in the qualifying exam, which the IB Diploma can satisfy when the subjects are chosen carefully; for medicine, NEET-UG expects Physics, Chemistry, Biology and English. Rules are updated by the National Testing Agency each year, so check the latest bulletin before choosing subjects at Class 11.",
        "IGCSE students normally continue to the IB Diploma, A Level or Class 11 of an Indian board. Moving into CBSE Class 11 usually needs an equivalence document and a school willing to admit, and we advise starting that conversation by Class 9.",
        "Abroad, IB and IGCSE are widely recognised. Pandhurna students often look first at Pune, Nagpur and Bengaluru for degrees, and then at the UK, Canada or Australia, and we coach for subject performance only, since placement and applications are not something a tutor can promise.",
      ],
    },
    {
      heading: "How do we teach IB Maths and the sciences in detail?",
      paragraphs: [
        "IB Maths comes in two courses: Analysis and Approaches, built around calculus, proof and algebra, and Applications and Interpretation, which leans on statistics, modelling and a graphic calculator. Choosing the wrong one at Class 11 is a common and expensive mistake, so a first session often reviews the student's strengths before locking in.",
        "The Mathematics Exploration is a written investigation worth about a fifth of the grade. Tutors help a student choose a manageable topic, discuss approach and give feedback on a draft, but the work itself must be the student's own. In Higher Level courses, Paper 3 questions introduce an unseen context and demand step-by-step reasoning.",
        "For the sciences, lessons run on a pattern: concept first, then a worked example, then timed questions, then correction. Physics students get comfortable rearranging equations and interpreting graphs, Chemistry students practise mole calculations and organic mechanisms with the data booklet open, and Biology students learn to answer to the command term.",
        "Practical skills are the particular challenge for a student studying alone. Without a school laboratory, the Internal Assessment is difficult to plan, so tutors help break the investigation into steps, discuss what can be done safely at home or at a local school's invitation, and keep a record of data and reasoning that will stand up in moderation.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: choosing IGCSE tiers and subjects",
      paragraphs: [
        "Cambridge splits many subjects into Core and Extended, while Pearson Edexcel uses Foundation and Higher. The tier caps the maximum grade: Core tops out at a C in Cambridge, whereas Extended can reach A* , so a student with real ambitions in Maths or Science generally needs the higher tier.",
        "A sound way to decide is to take a full past paper under timed conditions in each tier and look at the result. If a student scores comfortably above half on the Extended paper, that tier is usually right; if not, a few months of weekly lessons may change the picture before entry deadlines arrive.",
        "Subject choice at IGCSE affects later options. A student wanting IB Maths Analysis and Approaches Higher Level benefits from taking Additional Mathematics 0606 alongside Mathematics, while a would-be doctor needs all three sciences taken separately rather than as a combined award.",
        "Languages matter too. A Pandhurna student can offer Hindi as a second language without difficulty and may add English as a second language, and tutors help with structure, register and the speaking component. Entry for private candidates must go through an approved centre well before the series.",
      ],
    },
  ],

  process: [
    { title: "Tell us the course", description: "Share the IB subject and level or the IGCSE board, code and tier, along with the exam series and your child's current grade." },
    { title: "We shortlist tutors", description: "You receive a short list of specialists who have taught that syllabus, with experience and availability." },
    { title: "Take the free trial", description: "Your child attends a real lesson online and you judge the teaching style first-hand." },
    { title: "Agree a plan in writing", description: "Rate, frequency and duration are confirmed in writing before any commitment." },
    { title: "Learn, review, adjust", description: "A written note follows every session, and a tutor change is available if the match is not right." },
  ],

  whyPoints: [
    { title: "Syllabus-matched tutors", description: "Tutors are chosen for the exact IB subject or IGCSE code, not for general Maths or Science skill." },
    { title: "No commute, no hostel", description: "A Pandhurna student studies from home, with no travel to Nagpur or Chhindwara." },
    { title: "Visible working", description: "A shared whiteboard and annotated papers let a parent see exactly what was covered." },
    { title: "Written session notes", description: "After each lesson the family receives a short summary of what was done and what is next." },
    { title: "Honest scope", description: "Tutors coach and mark practice, but never write an IA, Extended Essay or any submitted coursework." },
    { title: "Fit before commitment", description: "A free trial lesson, rates in writing, and a tutor change if the first match is wrong." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE tutors in Pandhurna?", answer: "There are no tutors in Pandhurna that we can name for these syllabuses, so we teach online from across India. A Pandhurna student is matched with a specialist in the exact IB subject or IGCSE code, and lessons run live on video in IST with a shared whiteboard. Matching takes a day or two and starts with a free trial class, so the family can judge the fit first." },
    { question: "Do tutors visit homes in Pandhurna for IB or IGCSE tuition?", answer: "No, tutors do not visit homes in Pandhurna. In-person home tuition runs only in Gurugram and parts of Delhi NCR. In Pandhurna, private tuition from home means live one-to-one lessons online, taken from your own room on a laptop, with the same tutor each week and a written note afterwards." },
    { question: "Is there an IB school in Pandhurna?", answer: "We could not confirm any IB school in Pandhurna or in Chhindwara district. The nearest confirmed campuses are in Nagpur, such as D Y Patil International School at MIHAN and VIBGYOR World Academy. Many families therefore keep a child in a local CBSE or state school and add subject tutoring, or plan a move to Nagpur at Class 9 or 11." },
    { question: "Can a Pandhurna student take Cambridge IGCSE without joining a school?", answer: "Yes, as a private candidate, but only through an approved Cambridge exam centre that accepts external entries. Dates, fees and papers differ between centres and series, so contact the centre months before the deadline. We prepare the student for the papers; we cannot arrange the entry itself." },
    { question: "How much does IB or IGCSE tuition cost in Pandhurna?", answer: "We do not publish fixed prices; the rate is quoted in writing before booking. It depends on the subject and level, the tutor's experience with that syllabus, how many lessons a week you want, and whether you need an exam-season intensive. Because everything is online, nothing is added for travel." },
    { question: "Is IB Maths Analysis or Applications better for my child?", answer: "It depends on the child's goals and strengths, not on which is easier. Analysis and Approaches suits students heading toward engineering or pure sciences, with calculus and proof. Applications and Interpretation suits those who prefer statistics and modelling. Check the target university's requirements, then try a trial lesson in each if unsure." },
    { question: "What internet speed do we need?", answer: "A steady broadband or 4G connection is enough for video and a shared whiteboard. Evening power cuts can occur in the monsoon, so keep a phone hotspot or inverter ready. If a session drops, the tutor reschedules the lost time or extends it, as agreed in the written plan." },
    { question: "Will tutors write my child's IA or Extended Essay?", answer: "No. Tutors coach, explain, set practice and give feedback on drafts, but they never write, rewrite or complete an Internal Assessment, Extended Essay, TOK essay or other coursework. Academic honesty is a requirement of the IB, and submitting work that is not the student's own can put the diploma at risk." },
    { question: "Can my child study IB subjects while staying in a CBSE school?", answer: "A student can take extra IB-style tutoring alongside CBSE to prepare for a later switch, but the IB Diploma itself needs enrolment at an authorised IB school. For IGCSE, a private candidate route exists through approved centres. We help with the subject content; school admission is between the family and the institution." },
    { question: "How do I pick between IGCSE Core and Extended?", answer: "Take a timed Extended past paper and look at the score. Above roughly half marks suggests Extended is realistic, with a path to the highest grades; below suggests building basics first. Core caps the grade, so ambitious students prefer Extended. A tutor can review a paper in the trial class and advise." },
    { question: "Do you cover MYP and PYP, or only the Diploma?", answer: "We cover all four IB programmes: PYP, MYP, DP and CP. PYP tutoring is lighter and centres on reading, numeracy and inquiry skills, MYP tutoring works on criterion-based analysis and the Personal Project's planning, and DP support goes subject by subject. Tell us the stage when you get in touch." },
    { question: "What happens during the free trial lesson?", answer: "The tutor teaches a real piece of the syllabus, usually a topic the student is stuck on, and the student works problems on a shared whiteboard. Afterwards you get a short note of what was covered. There is no obligation to continue, and you can ask for a different tutor if the style is not right." },
    { question: "When should my child start preparing for IB exams?", answer: "For the Diploma, ideally from the start of Class 11, with a heavier push in the final six months. IGCSE students benefit from beginning Extended Maths and Science content in Class 9. Pandhurna's calendar, with the monsoon and Diwali breaks, means planning the intense blocks in advance rather than leaving everything for the last term." },
    { question: "Does an IB Diploma count for Indian universities?", answer: "Generally yes, with an equivalence certificate from the Association of Indian Universities, which most Indian institutions ask for. CUET-UG also accepts IB candidates under each university's stated eligibility. Requirements vary by course and change yearly, so check the specific institution before choosing subjects." },
    { question: "How do I contact IB Gram from Pandhurna?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the subject, level, board and exam series. We reply with a short list of tutors and a time for the trial lesson. Evening slots are the most common request from Pandhurna families." },
    { question: "Can students from nearby Sausar or Chhindwara use the same service?", answer: "Yes. The service is online, so a student in Sausar, Chhindwara or a village nearby is treated just like one in Pandhurna. All that is needed is a laptop, a stable connection and a quiet place to study for an hour at the agreed time." },
  ],

  internalLinks: [
    { label: "IB tutors across India", href: "/india/", description: "Our online IB and IGCSE service for cities and towns around the country." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How IB tutoring works across all programmes and subjects." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Pearson Edexcel IGCSE coaching by subject." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What the Diploma involves, from subject groups to the Core." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criterion-based assessment and the Personal Project explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led learning in the early years." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches and Applications and Interpretation compared." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of the tutors who teach online." },
    { label: "Contact us", href: "/contact-us/", description: "Request a free trial lesson." },
    { label: "Nagpur", href: "/nagpur/", description: "The nearest large city with international-curriculum schools." },
    { label: "Bhopal", href: "/bhopal/", description: "State capital with the widest choice of schools in Madhya Pradesh." },
    { label: "Jabalpur", href: "/jabalpur/", description: "Another Madhya Pradesh city served by the same online service." },
  ],

  closingHeading: "Start with one trial lesson from your Pandhurna home",
  closingBody:
    "Send us the subject, level and exam series your child is working toward, and we will line up a tutor for a free trial lesson online. No tutor will arrive at your door in Pandhurna, because that format is for Gurugram and Delhi NCR only, but the teaching you see on screen is the same one-to-one attention. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
