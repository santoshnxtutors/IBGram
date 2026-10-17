import type { CitySeoPage } from "../types";

/**
 * /sirsi/ - IB and IGCSE tutoring page for Sirsi in Uttara Kannada, Karnataka (not Sirsa in Haryana).
 * No IB or Cambridge / Edexcel school could be confirmed in the town, so stripSchools is empty and the
 * clusters are labelled nearby cities. Online one-to-one only; in-person home tuition runs only in
 * Gurugram and parts of Delhi NCR.
 */
export const sirsi: CitySeoPage = {
  slug: "sirsi",
  countryName: "Sirsi",
  countryNameLong: "Sirsi, Uttara Kannada, Karnataka",
  demonym: "Sirsi",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots are kept clear of the heavy monsoon weeks, the areca harvest rush and the Marikamba fair years, and follow the Karnataka school calendar",
  lastUpdated: "2026-09-21",
  geo: { latitude: 14.6197, longitude: 74.8353 },
  wikipedia: "https://en.wikipedia.org/wiki/Sirsi,_Karnataka",
  alternateNames: ["Sirsi Uttara Kannada", "Sirsi Karnataka", "Sirasi"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sirsi | Online Tuition, Uttara Kannada",
  metaDescription:
    "IB and IGCSE tutors for Sirsi, Uttara Kannada: live private tuition from home over video, DP, MYP, PYP and Cambridge or Edexcel subjects, free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sirsi",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR SIRSI, UTTARA KANNADA",
  heroSubtitle:
    "Private tuition from home for an IB or IGCSE student in Sirsi means a live video lesson with a teacher who has taught the exact course, taken at your own dining table in the Western Ghats foothills. Tutors do not travel to Uttara Kannada, because in-person home tuition is run only in Gurugram and parts of Delhi NCR. Hubballi is a couple of hours away by road and Bengaluru much further, so for most Sirsi families the sensible route to a specialist is the screen.",
  primaryKeyword: "IB and IGCSE tutors in Sirsi",
  imageAltText: "A Sirsi student at a study desk near a window looking onto areca palms, in a live online IB Mathematics lesson",
  secondaryKeywords: [
    "IB tutor Sirsi",
    "IGCSE tutor Sirsi",
    "IB home tuition Sirsi",
    "IGCSE home tuition Sirsi",
    "IB private tuition Sirsi",
    "IB Maths tutor Sirsi",
    "IGCSE Maths tutor Sirsi",
    "IB Physics tutor Sirsi",
    "IB Chemistry tutor Sirsi",
    "IB Biology tutor Sirsi",
    "IB DP tutor Sirsi",
    "IB MYP tutor Sirsi",
    "IB PYP tutor Sirsi",
    "IGCSE online tuition Sirsi",
    "online home tuition Sirsi Uttara Kannada",
    "IB tutor Siddapur",
    "IGCSE tutor Yellapur",
    "Cambridge IGCSE tutor Uttara Kannada",
    "IB tutor Banavasi Road Sirsi",
  ],

  heroTrustPoints: [
    "Tutor chosen by IB subject and level, or IGCSE code and tier, not by pin code",
    "Every lesson is online; in-person home visits exist only in Gurugram and parts of Delhi NCR",
    "A free trial lesson and a written note after each session",
    "The rate is stated in writing before anything is booked",
    "No link with any school, board or exam body",
  ],
  heroStats: [
    { value: "IST", label: "Same clock as the tutor" },
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "Kannada and Hindi", label: "Language options discussed" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "What international-syllabus tuition looks like from Sirsi",
    paragraphs: [
      "Sirsi sits at about 600 metres in the hills of Uttara Kannada, and the town is known well beyond the district for one crop. Areca nut, sold here as supari, carries a Geographical Indication tag under the name Sirsi Supari, and the market is also a recognised reference point for black pepper prices. Rain falls for most of the monsoon in sheets, the lanes smell of wet earth and betel, and the school calendar bends around it.",
      "What the town does not appear to have is a school running the IB Diploma or a Cambridge or Pearson Edexcel IGCSE. We could not confirm one, and this page will not pretend otherwise. Sirsi's schools follow the Karnataka state board and CBSE, with Kannada as the language most children think in. A family asking about IB or IGCSE here is usually planning something: a move to Bengaluru, a posting abroad for a parent, a boarding school in another city, or a foreign degree that the child has decided on early.",
      "That plan needs subject teaching long before any move happens, and this is where a tutor helps. The teacher might live in Pune, Kochi or Chennai. The lesson arrives through a laptop in a Sirsi home. Nobody from IB Gram comes to the house in Uttara Kannada, since visits at home are limited to Gurugram and parts of Delhi NCR.",
      "IB Gram is independent of the International Baccalaureate, Cambridge, Pearson and every school or city named on this page. A tutor teaches, checks and explains, but never writes an Internal Assessment, Extended Essay, TOK essay or piece of coursework on a student's behalf.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Live one-to-one lessons over video, all in IST",
      "No visits to homes in Sirsi; in-person tuition is only for Gurugram and parts of Delhi NCR",
      "Free trial lesson, short written notes, a new tutor if the fit is wrong",
    ],
  },

  programmesIntro:
    "Because Sirsi has no confirmed IB or IGCSE campus, each programme reaches a household through a particular door: a relocation, an online school, a boarding decision or a child who is going abroad. Here is what each stage asks a tutor to do for a student who studies it from the Ghats.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Learning is organised around six themes and a child's own questions, and the final year ends with a group Exhibition. Nothing is examined, so the tutor's job is fluency in reading, explaining and number work.",
      countryNote:
        "A PYP child linked to Sirsi is typically about to move, or has just returned from a city school, and needs English confidence built up without losing Kannada at home.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is graded against criteria rather than a single paper, and the Personal Project asks a student to manage a long task with a process journal. The change from right-or-wrong marking takes time to absorb.",
      countryNote:
        "Sirsi students coming from Karnataka board textbooks usually need help with open questions and reflective writing, where a memorised answer earns little.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three subjects at Higher Level and three at Standard Level are taken with Theory of Knowledge, the Extended Essay and CAS, and the marks come from Internal Assessments and the May session.",
      countryNote:
        "DP students tied to Sirsi are most often enrolled at a school in a bigger city, or studying online, and the tutor covers one or two subjects where school support is thin.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses are combined with a career-related study, a reflective project and personal and professional skills. It is uncommon in India, yet the Diploma courses inside it are as demanding as in the full Diploma.",
      countryNote:
        "We see very few CP enquiries from Uttara Kannada; they tend to come from families planning a vocational route overseas.",
    },
  ],

  subjectsIntro:
    "Start with level and exam session, then fit the subject into the school day and the hours when electricity and broadband hold steady in the hills. The list below shows what Sirsi students ask for most often.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof, with HL pushing towards long unfamiliar problems where a student must choose the method unaided." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling and statistics with a calculator, and an exploration whose topic should be settled early." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves and fields, and an investigation that has to be planned, run and reported with honest uncertainty." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry first, then energetics, equilibrium and organic reactions, the stretch where confidence often dips." },
    { name: "IB Biology", levels: "HL / SL", description: "A large syllabus marked on precise wording, with ecology questions that suit a student who lives beside a forest." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Rainforest, plantation and watershed case studies are close to hand in Uttara Kannada, which helps evaluation answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams tied to live examples; agricultural price swings make supply and demand easy to picture." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case analysis, and a research project that can follow a cooperative society, a trader or a plantation business." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text commentary, comparative essays and a spoken oral for a student who works mainly in Kannada at home." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Logic, data structures and a documented solution to a real problem for the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Named studies recalled accurately and arranged into extended responses." },
    { name: "IB Geography", levels: "HL / SL", description: "Western Ghats rainfall, landslide and land-use topics suit local fieldwork for the internal investigation." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation for Paper 1 and sustained argument for the essay papers." },
    { name: "IB Kannada B and Hindi B", levels: "HL / SL", description: "Language acquisition courses for students who need a second language; availability depends on the school they are registered with." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion practice for the exhibition and the prescribed-title essay, coaching only." },
  ],

  igcseSubjectsIntro:
    "Most IGCSE learners linked to Sirsi prepare as private candidates through an approved exam centre, or are enrolled with a school elsewhere. The first step is to fix board, subject code and tier, and then count back from the exam series.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Method marks, a calculator-free paper and the question of whether Extended is realistic." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus and trigonometry that smooth the later step into IB Maths AA or A Level." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging formulas, circuits and waves, and the written paper that replaces practical work." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, bonding, electrolysis and planning an experiment on paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cell biology, inheritance and ecosystems, answered in structured sentences." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and composition as skills that can be rehearsed." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Listening, reading, writing and speaking for learners who speak Kannada at home." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, diagrams and short evaluative answers." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying theory to the company in the case study, not to business in general." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, trace tables and binary logic before programming." },
    { name: "IGCSE Kannada as a Second Language 0532", levels: "Grade 9-10", description: "Reading, writing and speaking preparation for students who want a Kannada qualification alongside English-medium subjects." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Writing tasks and conversation practice for the language paper." },
  ],

  regionsTitle: "Sirsi and the taluks where our online students study",
  regionsIntro:
    "A video lesson runs the same from any address, so the places below describe school context and the daily rhythm, not journeys. Sirsi town and the smaller towns around it keep very different hours, and we plan slots with that in mind.",
  regions: [
    { name: "Sirsi town centre near the Marikamba temple", note: "The busiest part of town, with shops, schools and the market close together; evenings are loud, so a closed study room is useful." },
    { name: "Bus stand and market area", note: "Trading and transport households live around here, and lessons often follow the day's market closing time." },
    { name: "Hubballi Road side", note: "Families facing the highway towards Hubballi often have relatives there and compare it with Sirsi as a place for study." },
    { name: "Kumta Road side", note: "Towards the coast; households here often think of Kumta and Karwar, and of Mangaluru for education." },
    { name: "Banavasi Road side", note: "The road to Banavasi, the old Kadamba capital, passes farming settlements where a laptop lesson saves a long ride to town." },
    { name: "Yellapur Road side", note: "Connects to forest country and Yellapur; families here appreciate a slot that avoids heavy rain hours." },
    { name: "Siddapur", note: "A neighbouring taluk town in the same educational subdivision, where students commonly look to Sirsi or Hubballi for schooling." },
    { name: "Yellapur", note: "A forest-edge town in the subdivision; online tuition avoids a long journey for specialist subjects." },
    { name: "Mundgod", note: "A taluk with a large Tibetan settlement, so some students here already study in more than two languages." },
    { name: "Banavasi", note: "A heritage town with a long history, close enough for day-to-day links with Sirsi but thin on specialist teachers." },
  ],

  schoolDisclaimer:
    "No school in Sirsi could be confirmed as offering the IB or Cambridge or Edexcel IGCSE, so none is named as offering it. The nearby cities below are places some Karnataka families look at, not partners of IB Gram, which has no commercial tie with any school, board or city authority.",
  schoolClusters: [
    {
      city: "Sirsi and Uttara Kannada",
      note: "Schooling here is Karnataka state board, CBSE and a few others. We found no confirmed IB or IGCSE school, so international-syllabus study happens online or in another city.",
      schools: [],
    },
    {
      city: "Nearby: Hubballi-Dharwad",
      note: "The larger North Karnataka hub, a couple of hours away; we could not confirm an IB World School or Cambridge centre there either.",
      schools: [],
    },
    {
      city: "Nearby: Bengaluru (boarding or relocation)",
      note: "Bengaluru holds most of Karnataka's IB and Cambridge schools. Moving there is a family decision that IB Gram does not arrange, and lessons can carry on online afterwards.",
      schools: ["Stonehill International School", "Canadian International School, Yelahanka"],
    },
    {
      city: "Nearby: Mysuru",
      note: "Two schools in and around Mysuru have been confirmed for international curricula, which some families weigh against Bengaluru.",
      schools: ["I Can International School", "De Paul International Residential School"],
    },
  ],

  modesIntro:
    "Everything here is delivered online. What differs from one Sirsi family to the next is the reason: a steady weekly habit, a bridge between boards before a move, or a push before an exam series.",
  modes: [
    {
      title: "Steady weekly lessons over video",
      description:
        "The same tutor at the same hour each week, working from a shared whiteboard and past papers, with a written note once the session ends.",
      bullets: [
        "All IB stages and both IGCSE boards",
        "Evening and weekend slots",
        "Worked solutions recorded on request",
        "Progress reviewed every few weeks",
      ],
    },
    {
      title: "Bridging before a move",
      description:
        "A short block for a child about to shift from a Karnataka board or CBSE class into an IB or IGCSE classroom, working through the gaps in method and vocabulary.",
      bullets: [
        "Gap map in the first two lessons",
        "Useful two to six months before relocation",
        "Parents updated after each session",
        "Stops when the gaps close",
      ],
    },
    {
      title: "Revision before an exam series",
      description:
        "Timed papers and quick marking in the weeks before May or November, weak topics first and scripts reviewed line by line.",
      bullets: [
        "Two to four sessions a week near the exam",
        "Marks set against recent grade boundaries",
        "Best booked a month ahead",
        "Plans a spare slot for power cuts",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Sirsi?",
      paragraphs: [
        "We could not confirm one. Directories of IB World Schools and Cambridge schools, and the websites we checked, show no Diploma school and no IGCSE centre inside Sirsi, so we do not list any. The town has an education district of its own, which covers the Sirsi, Siddapur, Yellapur and Mundgod taluks, and its schools teach the Karnataka state syllabus or CBSE.",
        "The families who look for IB and IGCSE tutors in Sirsi are therefore not choosing between local campuses. Some have a parent working for a bank, the forest service or an agricultural firm who expects a transfer. Others run areca or spice businesses and want the next generation to study overseas. A few are returning from abroad with a child who is midway through a programme.",
        "The options are limited but real. A child can board at a school in Bengaluru or Mysuru, enrol with an online school, or sit IGCSE papers as a private candidate at an approved centre. Whichever is chosen, the student still needs someone who can explain the syllabus properly.",
        "That is the gap an online tutor fills. The teacher's own city does not matter to the lesson; what matters is whether they have taught the same syllabus and know how its papers are marked.",
      ],
      table: {
        caption: "What Sirsi offers locally and how families fill the rest",
        columns: ["Need", "Confirmed in Sirsi", "Usual answer"],
        rows: [
          ["IB Diploma classroom", "None found", "Board in another city, study online, or relocate"],
          ["Cambridge or Edexcel IGCSE school", "None found", "Private candidacy, online school or another city"],
          ["State board and CBSE teaching", "Well covered", "Keep for the school syllabus only"],
          ["Specialist IB or IGCSE subject teacher", "Very few", "Match a tutor online"],
        ],
      },
      bullets: [
        "No IB or IGCSE campus confirmed in Sirsi",
        "Transfers, returns and early study-abroad plans drive demand",
        "Boarding, online school and private candidacy are all possible",
        "Specialist teaching arrives by video",
      ],
    },
    {
      heading: "Karnataka state board, CBSE, IB and IGCSE: how do they differ?",
      paragraphs: [
        "Most Sirsi children sit the Karnataka state board, whose SSLC arrives in March or April of Class 10 and whose second PU examination comes a little before it in the pre-university years. Both have a long tradition of full-syllabus written papers, and students who do well in them have learned to recall accurately and write complete solutions.",
        "CBSE, present in a smaller number of schools, pushes the same pattern toward application, with competency-based questions and internal marks. The shape is still a large terminal examination.",
        "IB and IGCSE ask something different. Command words such as analyse, evaluate and justify carry their own marks, data is unfamiliar, and assessed work done during the course, such as practicals and investigations, counts towards the grade. A child who has never been asked to critique a method finds the first term disorienting even where the content is familiar.",
        "Skills do carry over. Careful working, clear handwriting and steady revision help in every system. What changes is how a student reads a question, and a tutor spends early sessions on exactly that.",
      ],
      table: {
        caption: "Boards a Sirsi family may meet, side by side",
        columns: ["Point", "Karnataka board", "CBSE", "IB and IGCSE"],
        rows: [
          ["Main exam months", "March-April", "February-March", "May-June and October-November"],
          ["Question style", "Recall and full solutions", "Recall with some application", "Reasoning, data and evaluation"],
          ["Coursework weight", "Small internal marks", "Internal assessment marks", "IAs, practicals and projects count"],
          ["Language on offer", "Kannada, English, Hindi, Sanskrit", "Hindi, English, electives", "Language A and B courses, Kannada through some schools"],
        ],
      },
      bullets: [
        "SSLC and second PU fall in spring",
        "IB and IGCSE reward reasoning over recall",
        "Command words are marked skills",
        "Working habits transfer between boards",
      ],
    },
    {
      heading: "What drives the cost of IB or IGCSE tuition for a Sirsi family?",
      paragraphs: [
        "There is no published price list, because the rate follows the teacher and the course, not the town. A tutor with years of Higher Level Chemistry teaching will be quoted differently from one who handles IGCSE Core English. Session length and weekly frequency also shape the total.",
        "Families in Sirsi often compare with local tuition, which is usually priced per subject each month and is much cheaper. That is a fair comparison for a Karnataka board subject. It is a poor one for an IB or IGCSE course, where the local teacher may never have seen a past paper or a mark scheme.",
        "You receive the figure in writing before the trial lesson. If you go ahead, it stays as agreed, and you may cut sessions or pause with short notice.",
        "One real saving is travel. A student in Sirsi does not need to go to Hubballi or Bengaluru for a weekly class, and the tutor does not price in a commute. Planning for a stable broadband line and a backup is the main extra cost.",
      ],
      bullets: [
        "Subject, level, experience and session length set the rate",
        "Compare against IB or IGCSE-specific help, not board tuition",
        "Quote in writing before the trial lesson",
        "No travel cost for either side",
      ],
    },
    {
      heading: "Online tutor, private teacher, coaching class or self-study in Sirsi?",
      paragraphs: [
        "Sirsi has capable school teachers and private tutors, and many children do well with them for the state syllabus. Coaching for CET, NEET and JEE is available in the region, but most serious aspirants travel to Hubballi, Dharwad or Bengaluru for the strongest batches. These classes are built for a different examination.",
        "A private teacher in town may be excellent and trusted for years. The limit is narrow: it is rare to find someone who has prepared a class for the IB or IGCSE and marked its papers against the published criteria.",
        "Self-study is possible for a disciplined student with full past-paper access, more so in Maths and Sciences. It struggles on feedback, since a student cannot easily see what an examiner would mark down in a long answer.",
        "Online tuition removes the supply problem and puts the right tutor in front of the student. It needs a working connection, which in a hill town means a spare plan for heavy rain and power cuts.",
      ],
      table: {
        caption: "Support routes for an IB or IGCSE student in Sirsi",
        columns: ["Route", "Fit for IB or IGCSE", "Format", "Watch for"],
        rows: [
          ["Board or CET coaching", "Low, built for other papers", "Group, in a classroom", "Pace and content differ"],
          ["Local private teacher", "Uncertain, depends on past classes", "One to one at a desk", "Few have marked IB or IGCSE work"],
          ["Self-study", "Good for practice, weak on feedback", "Solo", "Repeated errors go unseen"],
          ["Online specialist tutor", "High, picked by code and level", "One to one over video", "Needs steady broadband and power"],
        ],
      },
      bullets: [
        "Local coaching serves state board and entrance exams",
        "Few private teachers know IB or IGCSE marking",
        "Self-study needs outside feedback",
        "Online tuition needs a backup for rain and outages",
      ],
    },
    {
      heading: "How do the monsoon, the areca season and local fairs shape the Sirsi study year?",
      paragraphs: [
        "Sirsi receives well over two metres of rain a year, most of it between June and September, and July is the wettest month. Landslides and fallen trees can cut the roads around the town, and power may go out for hours. Lessons planned for those weeks need a hotspot and a spare slot.",
        "The areca calendar matters to many households. Harvest and drying keep farming families busy in the dry months, and the market yard runs at a peak then. A teenager who helps at home during that rush will not manage a late evening lesson, and we plan around it.",
        "The Marikamba fair, held in alternate years, draws large crowds to the town and disrupts normal life for days. Dasara, Deepavali and Ugadi bring the usual breaks, and the yakshagana season in the cooler months fills many evenings.",
        "Exams run on two clocks. The Karnataka board sits in spring, while IGCSE and IB sessions follow their own timetable in May-June and October-November. A sibling on the state board can make the same month doubly busy, and a tutor helps by planning ahead.",
      ],
      table: {
        caption: "The Sirsi year and what it means for lessons",
        columns: ["Period", "What is happening", "Tutoring note"],
        rows: [
          ["January-February", "Cool, dry; IB and IGCSE mocks", "Good weeks for steady lessons"],
          ["March-April", "SSLC and second PU exams; Ugadi", "Stagger lessons if a sibling sits a board paper"],
          ["May-June", "IGCSE main series and IB exams; monsoon arrives", "Confirm backup connection"],
          ["July-September", "Heaviest rain", "Keep a spare weekly slot"],
          ["October-November", "Dasara and Deepavali; IGCSE resits; IB November session", "Use as a catch-up window"],
          ["Marikamba fair years", "Crowds and closures in town", "Move or shorten lessons that week"],
        ],
      },
      bullets: [
        "July is the wettest month",
        "Areca harvest rush affects evening availability",
        "Alternate-year fair disrupts a full week",
        "IGCSE sessions fall in May-June and October-November",
      ],
    },
    {
      heading: "Where can a student go after IB or IGCSE from Sirsi?",
      paragraphs: [
        "Sirsi families often think first of Bengaluru, Mangaluru, Mysuru and Hubballi-Dharwad. Universities there accept IB students, and the Association of Indian Universities issues an equivalence certificate that most Indian institutions ask for. JEE Main, NEET-UG and CUET-UG state their own eligibility and subject rules, and these change, so check the current bulletins.",
        "The region has its own strengths. Forestry and agriculture are natural paths from a town like this, and the College of Forestry at Sirsi is part of the University of Agricultural Sciences, Dharwad. A student who took IB Biology or Environmental Systems and Societies has useful preparation for such courses.",
        "For study abroad, offers from the UK are written in IB points with named Higher Level subjects, American colleges read predicted grades within a wider file, and Canadian and Australian universities publish their own conversion tables.",
        "Tutors help with the subject side, which includes teaching, technique and realistic predicted-grade improvement. Counselling, applications and visas belong to the school, a counsellor or the university.",
      ],
      bullets: [
        "AIU equivalence and subject choice decide Indian eligibility",
        "JEE, NEET and CUET have separate rules",
        "Forestry and agriculture suit Biology and ESS students",
        "Predicted grades count most for UK and Canadian offers",
      ],
    },
    {
      heading: "Which IB Maths route and which science combination suit a Sirsi student?",
      paragraphs: [
        "Choosing between Analysis and Approaches and Applications and Interpretation is a Class 11 decision that many students make on habit. For engineering, physics or pure maths, AA is the natural home. For economics, psychology, geography or biology-led routes, AI is often kinder and equally respected.",
        "Physics is where a Karnataka board student notices the change first. The formulas are familiar, but IB questions ask for reasoning about an unfamiliar system, and the internal investigation is designed by the student. Chemistry asks for secure arithmetic with moles before anything else.",
        "Biology rewards precision. A student with a strong memory can still lose marks by describing when the question asks for an explanation, and a good tutor trains that habit from the first topic.",
        "In Sirsi there is no IB classroom to supply this, so the specialist is online and the student brings the questions.",
      ],
      bullets: [
        "AA for engineering and physical sciences; AI for social sciences and biology routes",
        "Physics and Chemistry depend on a well-planned investigation",
        "Biology marks depend on reading the command term",
        "A specialist tutor stands in for a missing classroom",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which board should a Sirsi candidate pick?",
      paragraphs: [
        "A private candidate settles board and tier before lessons start. Cambridge and Pearson Edexcel both offer the IGCSE, with different codes and paper structures, and an approved exam centre may offer only one. The centre's answer decides the syllabus.",
        "Tier follows. Core caps the grade in most subjects while Extended leaves every grade open. For a student aiming at A Level, the IB Diploma or a science degree, Extended in Mathematics and the sciences is the sensible default.",
        "Practical work matters too. Cambridge Sciences offer a written alternative to practical, which suits a student with no laboratory, but it still needs rehearsal of the reasoning it expects.",
        "Entry deadlines sit months before the exam. A Sirsi family should ask the centre for dates, fees and requirements early, because tutoring cannot replace a missed entry.",
      ],
      bullets: [
        "Confirm board with the exam centre first",
        "Extended keeps all grades open; Core caps most",
        "Alternative-to-practical papers need rehearsal",
        "Enter early",
      ],
    },
    {
      heading: "How is a tutor matched to a student in Sirsi?",
      paragraphs: [
        "We start with a conversation about the child, not a subject menu. Board or programme, subject, level, present grade, target, exam session and the specific trouble all shape the shortlist.",
        "Each tutor is checked for qualifications, recent teaching of the syllabus and their approach to assessed work. For Sirsi we also look for experience with students who study without a local specialist, since they need a tutor who plans independent work carefully.",
        "The trial lesson comes next. The child works through a real topic while a parent watches how the tutor listens. A short first-month plan follows, and it can be changed.",
        "If the fit is off, we swap the tutor. That is an ordinary step, not a failure.",
      ],
      bullets: [
        "Programme, subject, level and the real problem drive the match",
        "Tutors checked for recent teaching of the exact syllabus",
        "The free trial lesson decides",
        "Swapping tutors is normal",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors for IB PYP, MYP and Diploma subjects and Cambridge and Edexcel IGCSE, teaching live over video for Sirsi families. Matching starts from syllabus and level, since every lesson is online.",

  process: [
    { title: "Tell us about the student", description: "Board or programme, subject, level, where they stand now, where they want to get to, and which hours your Sirsi household keeps quiet." },
    { title: "Look at the shortlist", description: "You see one or two tutors whose recent teaching matches the syllabus, wherever in India they are based." },
    { title: "Sit a trial lesson", description: "A live session on a real topic, free, after which you can simply walk away." },
    { title: "Settle the plan", description: "A written rate, a list of topics to cover, a weekly slot and a note on how results will be reported back." },
    { title: "Carry on week by week", description: "The same tutor at the same hour, reviews every few weeks, and a swap whenever the chemistry is not right." },
  ],

  whyPoints: [
    { title: "Course-level matching", description: "We pick by exact IB subject and level, or by IGCSE board, code and tier, because a general tutor is rarely enough." },
    { title: "Built for a hill town", description: "Sirsi has no IB classroom, so video teaching is the route to specialists, with spare slots planned for rain." },
    { title: "A lesson before a decision", description: "Sitting one free session tells a parent more than a profile page can." },
    { title: "Honest about coursework", description: "Tutors explain criteria and review drafts, yet never write an IA, essay or project." },
    { title: "Notes you can read", description: "A short written summary follows every session, so parents see the work without sitting in." },
    { title: "No strings", description: "Not tied to a school, no lock-in period, and a new tutor is found on request." },
  ],

  faqs: [
    { question: "How do I find IB and IGCSE tutors in Sirsi?", answer: "Write to IB Gram with the programme or board, subject, level and the exam series your child is aiming for. We then propose tutors who teach that course online. Sirsi has no confirmed IB or IGCSE campus, so distance plays no part in the choice, and a trial lesson comes first." },
    { question: "Is there an IB or Cambridge school in Sirsi, Uttara Kannada?", answer: "We could not confirm one. Schools in Sirsi follow the Karnataka state board and CBSE, and the directories we checked list no IB World School or Cambridge centre in the town. Families who want these courses look at Bengaluru or Mysuru, use an online school or prepare as private candidates." },
    { question: "Will a tutor come to my home in Sirsi?", answer: "No. Visits to the home exist only in Gurugram and parts of Delhi NCR. For a Sirsi family, home tuition means online: a live private lesson, taken from the house on a laptop, with a shared whiteboard and past papers, so no teacher has to travel anywhere in Uttara Kannada." },
    { question: "How much does IB or IGCSE tuition cost in Sirsi?", answer: "It depends on programme, subject, level, tutor experience and session length. You get the rate in writing before the trial lesson. Higher Level Diploma sciences and Maths are usually priced above IGCSE Core subjects, and your address in Sirsi does not change the quote." },
    { question: "Is this page about Sirsi in Karnataka or Sirsa in Haryana?", answer: "It is about Sirsi in Uttara Kannada district, Karnataka, near the Western Ghats. Sirsa in Haryana is a different town. Lessons are identical for both, since they run online, but the school context, climate and exam calendars described here belong to Karnataka." },
    { question: "My child studies the Karnataka state board. Can they add an IGCSE subject?", answer: "Yes, as a private candidate through an approved exam centre, as long as the family handles entry. Tutoring covers the teaching and paper practice; the entry is a separate step, so ask the centre for dates, fees and practical arrangements well before the series opens." },
    { question: "We may move to Bengaluru next year. Can you prepare my child?", answer: "Yes. A bridging block maps the gaps between your child's present syllabus and the IB or IGCSE course at the new school, using a tutor who has recently taught the same subjects. The first lessons find weak points, and later ones work on them before the move." },
    { question: "Which IB Diploma subjects do you cover?", answer: "Maths AA and AI, Physics, Chemistry, Biology, ESS, Economics, Business Management, English A, Computer Science, Psychology, Geography, History and language courses, plus TOK coaching. Level matters, so an HL student and an SL student in one subject are matched to different tutors." },
    { question: "Do you teach MYP and PYP students in Sirsi?", answer: "Yes. For MYP we work on criterion-based writing and the Personal Project journal; for PYP we build reading, writing and number confidence through short, lively sessions. Parents get a written note after every lesson, whatever the child's age." },
    { question: "Which IGCSE boards do you support?", answer: "Cambridge and Pearson Edexcel. Cambridge codes such as 0580, 0625 and 0620 come up most often. The exam centre decides which board a private candidate may use, so confirm that first and pass the syllabus code on to us." },
    { question: "Is online tuition as good as a teacher in the room?", answer: "For most IB and IGCSE students it does the job well, particularly where specialists are scarce. A shared board, live paper practice and recorded worked solutions cover most of what a person sitting beside the child would offer. A steady connection is needed, and we suggest shorter sessions for very young children." },
    { question: "Can a tutor help with an IA or the Extended Essay?", answer: "A tutor can guide but never write. That includes narrowing a research question, explaining the marking criteria, planning data collection and giving candid feedback on drafts. Handing over finished assessed work would breach IB integrity rules, which is why tutors refuse it." },
    { question: "How do monsoon rain and power cuts affect lessons?", answer: "Heavy rain from June to September can bring outages and weak links in and around Sirsi. We keep a spare weekly slot and recommend a mobile hotspot as backup. If a lesson is lost to an outage, it is rescheduled at no extra charge." },
    { question: "When should my child begin?", answer: "Ideally at the start of a course: Grade 9 for IGCSE or Class 11 for the Diploma. Early help builds foundations ahead of mocks and IA deadlines. A later start still pays off when the plan targets the highest-value topics and past papers." },
    { question: "Can lessons fit around the areca harvest and the Marikamba fair?", answer: "Yes. We plan around the harvest rush, the alternate-year fair, Dasara and Deepavali, and will lighten or pause the schedule when the family calendar needs it. Adding a denser block before the May series is simple when the time comes." },
    { question: "What if we do not like the tutor?", answer: "Say so, and we will find another. Progress is reviewed every few weeks and a re-match follows whenever the fit is poor. No long contract binds you, so pausing or stopping carries no penalty." },
    { question: "Is IB Gram linked to any school or board named here?", answer: "No. IB Gram is independent and has no tie with any school, the International Baccalaureate, Cambridge or Pearson. Cities and schools mentioned are context only, and tutors work to each syllabus as published." },
    { question: "How do I get started?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the programme or board, subject, level and current grade. A tutor profile and trial slots come back to you, at no charge and with no obligation." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring in Hubballi-Dharwad", href: "/hubli-dharwad/", description: "The nearest large North Karnataka hub, served online." },
    { label: "IB and IGCSE tutoring in Belagavi", href: "/belagavi/", description: "Another North Karnataka city with its own school picture." },
    { label: "IB and IGCSE tutoring in Mysuru", href: "/mysuru/", description: "Where two international-curriculum schools were confirmed." },
    { label: "IB and IGCSE tutoring in Bengaluru", href: "/bengaluru/", description: "Karnataka's biggest cluster of IB and Cambridge schools." },
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How the online service works across Indian cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only place IB Gram offers in-person lessons." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL choices, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, command terms and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your details and book a free trial." },
  ],

  closingHeading: "Book a free trial lesson for your Sirsi student",
  closingBody:
    "Tell us the programme or board, the subject and level, the present grade and the evenings your household keeps free. We reply with a tutor, their teaching background and trial slots, all online and one to one, with no charge and no obligation. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
