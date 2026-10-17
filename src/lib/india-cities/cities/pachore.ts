import type { CitySeoPage } from "../types";

/**
 * /pachore/ - IB and IGCSE tutoring page for Pachore, a nagar panchayat in Rajgarh district, Madhya
 * Pradesh (NH 52, Nevaj river, grain mandi town of about 35,000). No IB or Cambridge/Edexcel school
 * could be confirmed locally (matching the published Rajgarh page), so stripSchools is empty and the
 * clusters use Bhopal and Indore schools already verified on the published Bhopal, Indore and Rajgarh
 * pages. Online delivery only.
 */
export const pachore: CitySeoPage = {
  slug: "pachore",
  countryName: "Pachore",
  countryNameLong: "Pachore, Rajgarh district, Madhya Pradesh",
  demonym: "Pachore",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are placed away from the wheat and soya mandi rush, the Holi and Diwali weeks and the hottest part of the pre-monsoon afternoon",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.7167, longitude: 76.7167 },
  wikipedia: "https://en.wikipedia.org/wiki/Pachore",
  alternateNames: ["Pachor", "Pachore Rajgarh", "Pachore Biaora"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Pachore | Online Home Tuition",
  metaDescription: "Online home tuition for IB and IGCSE students in Pachore, Rajgarh district, MP: DP, MYP, PYP, Cambridge and Edexcel, one to one, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Pachore",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION FOR PACHORE, RAJGARH DISTRICT",
  heroSubtitle:
    "Parents in Pachore who ask for IB or IGCSE home tuition are looking for a teacher who knows a syllabus that no one in the town has taught. IB Gram provides private one-to-one tuition at home, delivered online: your child studies at their own desk in Pachore, a tutor who currently teaches that exact Diploma, Middle Years or Cambridge course joins by video, and the first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Pachore",
  imageAltText: "A Pachore student in Rajgarh district studying IGCSE Mathematics with an online tutor in a live home lesson",
  secondaryKeywords: [
    "IB tutor Pachore",
    "IGCSE tutor Pachore",
    "IB home tuition Pachore",
    "IGCSE home tuition Pachore",
    "IB private tuition Pachore",
    "IB Maths tutor Pachore",
    "IGCSE Maths tutor Pachore",
    "IB Physics tutor Pachore",
    "IB Chemistry tutor Pachore",
    "IB Biology tutor Pachore",
    "IB DP tutor Pachore",
    "IB MYP tutor Pachore",
    "IB PYP tutor Pachore",
    "IGCSE online tuition Pachore",
    "IB tutor Pachore Rajgarh",
    "Cambridge IGCSE tutor Rajgarh district",
    "online IB tutor Biaora Pachore",
    "IGCSE tutor Madhya Pradesh online",
    "IB tutor Pachor",
  ],

  heroTrustPoints: [
    "Every tutor teaches the same course your child sits, wherever in India they live",
    "Lessons are online only; tutors do not call at homes in Pachore, as home visits run only in Gurugram and parts of Delhi NCR",
    "A free trial and a written fee come before you commit",
    "No link exists between IB Gram and the IB, Cambridge, Pearson Edexcel or any school this page names",
  ],
  heroStats: [
    { value: "NH 52 town", label: "Pachore, Rajgarh district" },
    { value: "IB + IGCSE", label: "Both families covered" },
    { value: "IST", label: "One shared clock" },
    { value: "Free trial", label: "First lesson at no cost" },
  ],

  intro: {
    heading: "Teaching an international course in a mandi town",
    paragraphs: [
      "Pachore lies on the Agra-Bombay highway, NH 52, beside the Nevaj river in Rajgarh district. It has about thirty-five thousand people, a railway halt at Pachor Road on the Indore-Gwalior line, a polytechnic, government colleges and a grain mandi that is among the busiest in the district. Wheat, soya and gram decide the town's year, and many households are connected to the mandi as farmers, commission agents, transporters or shopkeepers.",
      "Education here is MP Board and CBSE, taught in Hindi and English, with Jawahar Navodaya Vidyalaya a few kilometres away for the students who win a seat. So why would a Pachore family ask about IB and IGCSE tutors in Pachore? The reasons we hear are practical. A child has been admitted to a school in Bhopal or Indore that follows an international curriculum. A family with a member abroad wants to keep that option open. A parent running a trading firm wants the child to learn in a way that suits business and finance abroad as well as at home.",
      "No one in Pachore has taught these syllabuses, so the realistic answer is an online specialist. Your child sits at home, the tutor appears on screen from elsewhere in India, and the two work through the child's own past papers on a shared whiteboard. We describe it as home tuition delivered online, because the child studies in their own room with undivided attention. A tutor does not come to your house in Pachore; in-person home tuition exists only in Gurugram and parts of Delhi NCR.",
      "IB Gram stands apart from the International Baccalaureate, Cambridge, Pearson Edexcel and the schools mentioned here. Tutors teach, mark and advise. Writing a student's Internal Assessment, Extended Essay, TOK essay or coursework is something they do not do.",
    ],
    bullets: [
      "IB PYP, MYP and DP, with CP subjects on request, and Cambridge or Edexcel IGCSE",
      "Tutors matched on the syllabus code and level",
      "Live lessons in Indian Standard Time",
      "A written note after each lesson",
      "No home visits in Pachore; all teaching is online",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is taught in Pachore itself. A family meets them through a school in Bhopal or Indore, an online school, or a plan to study abroad. This is how each stage tends to look from here.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Young children investigate themes that cross subject boundaries, such as where we live or how things change, and present an Exhibition at the end. There is no external exam, so tutoring is about fluent reading, comfort with numbers and learning to ask better questions.",
      countryNote: "PYP enquiries from Pachore come mostly from parents whose young child will join an international school in Bhopal or Indore.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Work is graded against criteria subject by subject, and the Personal Project closes the programme. The big shift is from giving the right answer to showing and justifying how it was reached.",
      countryNote: "A child from a Hindi-medium school finds MYP's English writing demanding at first, so tutors pay attention to sentence structure from the start.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three subjects at Higher Level and three at Standard Level, with Theory of Knowledge, a 4,000-word Extended Essay and CAS. The final grade is out of 45, based on May exams and internal assessments.",
      countryNote: "No Diploma school exists in Pachore, so students are either boarding in Bhopal or Indore or following the course online.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Pairs a few Diploma courses with a vocational strand and a reflective project. Indian schools running it are scarce, yet the Diploma courses inside it call for exactly the same groundwork.",
      countryNote: "CP queries from Pachore are rare and usually become requests for help with one or two Diploma subjects.",
    },
  ],

  subjectsIntro:
    "The subjects below are the ones Pachore families ask about most. Because no neighbour will have studied the course, the tutor we choose is the first person your child meets who has.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Builds on the algebra and calculus of MP Board and CBSE with proof, unfamiliar problems and written justification." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator technique, with an exploration drawn from something real, such as mandi price movements." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics to fields, practised with data questions and a carefully designed investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, energetics and organic reactions, with practical write-ups that meet the criteria." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics and ecology, with training in reading the command term." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets, elasticity and policy, with examples from agricultural pricing and the mandi system." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study technique and an internal assessment built around a real organisation, often a family trade." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis and the oral, useful for students who speak Hindi or Malvi at home." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, algorithms and a documented solution for the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Research methods, key studies and structured extended responses." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Soil, water and land use in an agricultural district, which gives students real material for case studies." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study recall with named places and a fieldwork write-up." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis, essay planning and a focused historical investigation." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Oral confidence and the written formats of the exam for students who want a dependable language grade." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Coaching through discussion for the exhibition and essay, with the student's voice intact." },
  ],

  igcseSubjectsIntro:
    "IGCSE is where most Pachore enquiries begin, since a student can sit the papers as a private candidate through an exam centre. We fix the board, code and tier first and then plan backwards from the exam month.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tier practice with plenty of non-calculator work and clear shown method." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Functions, calculus and vectors, a bridge to IB Maths or A level." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Concepts, calculations and a separate rehearsal of the alternative to practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, rates, organic chemistry basics and qualitative analysis." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Body systems, inheritance and ecology, with data-based questions." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, final accounts and ratios, a natural fit for a trading family's child." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Answers tied to the case supplied, not generic definitions." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagram accuracy first, then evaluation." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension, formal writing and speaking for a recognised Hindi grade." },
  ],

  regionsTitle: "Pachore and the Rajgarh district towns around it",
  regionsIntro:
    "These are the places a Pachore family travels to and compares schools across. They give context for how a study week fits the district, not delivery points.",
  regions: [
    { name: "Pachore town", note: "A nagar panchayat on NH 52 and the Nevaj river, with the grain mandi at its heart and most households within a short ride of one another." },
    { name: "Bilapura", note: "A ward of the nagar panchayat, a typical residential area of the town." },
    { name: "Bhojpuriya", note: "Another ward of Pachore, where homes sit close to the town's roads and market." },
    { name: "Pachor Road", note: "The railway station on the Indore-Gwalior line that families use for rail travel towards Indore or Gwalior." },
    { name: "Biaora", note: "A neighbouring town in Rajgarh district whose families share many schooling choices with Pachore." },
    { name: "Rajgarh", note: "The district headquarters, used for government work and larger private schools." },
    { name: "Khilchipur", note: "A town in the district, relevant to families comparing schools and coaching on the Rajgarh side." },
    { name: "Sarangpur", note: "A town in the Malwa part of the district with a mix of MP Board and CBSE schools." },
    { name: "Bhopal and Indore", note: "The two big cities that Pachore families look to for international schools, hospitals and higher education." },
  ],

  schoolDisclaimer:
    "Schools appear below only to map where international teaching exists around Pachore, a town where we found none. Nothing connects IB Gram to Shrewsbury, Choithram, Daly College, Emerald Heights, the International Baccalaureate, Cambridge or Pearson Edexcel: no contract, no referral fee, no endorsement either way.",
  schoolClusters: [
    {
      city: "Pachore and Rajgarh district",
      note: "Our checks turned up no IB or Cambridge/Edexcel IGCSE school in Pachore or the rest of Rajgarh district, so choice here is limited and the town's schools run the MP Board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Bhopal",
      note: "The state capital, within reach by road or rail, with at least one international school on its western edge.",
      schools: ["Shrewsbury International School India"],
    },
    {
      city: "Nearby: Indore",
      note: "The largest city in the region, with the most international school choice for Malwa families.",
      schools: ["Choithram International School", "Daly College", "The Emerald Heights International School"],
    },
  ],

  modesIntro:
    "The format never changes: a live video call, a shared whiteboard, one tutor, one student. The rhythm does, and in a town built around a mandi calendar we set it with the family.",
  modes: [
    {
      title: "Weekly lesson at home",
      description: "A single standing appointment each week, typically after dinner, always with the same teacher.",
      bullets: [
        "Matched to a named subject and level",
        "Past papers marked as you work",
        "A short parent note afterwards",
        "Moves easily around mandi season",
      ],
    },
    {
      title: "Holiday-block lessons",
      description: "A denser run over Diwali or the summer break, helpful for boarders who return home.",
      bullets: [
        "Several sessions a week",
        "Planned around the school's next topics",
        "Useful before mocks and tests",
        "Pauses when school resumes",
      ],
    },
    {
      title: "Exam-series preparation",
      description: "Six to eight weeks of timed papers and quick feedback before the IGCSE or IB session.",
      bullets: [
        "Marking against current schemes",
        "Specific feedback within days",
        "Weak areas reprioritised weekly",
        "Best started two months before the exam",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there any IB or IGCSE school in Pachore or Rajgarh district?",
      paragraphs: [
        "None that we could confirm. Our published page for Rajgarh reached the same conclusion for the district headquarters, and nothing suggests Pachore is different. The schools here follow the MP Board or CBSE, and some are well established, with a polytechnic and government colleges adding to the town's educational base. Jawahar Navodaya Vidyalaya, a few kilometres away, serves talented students from the district.",
        "When a family wants an international curriculum, it looks to the two large cities. Bhopal has Shrewsbury International School India on its western edge. Indore has Choithram International School, Daly College and The Emerald Heights International School, among others. Both are reachable by NH 52 and the rail line, but they are a real distance for daily travel, so many families consider boarding.",
        "For those who stay in Pachore, the alternatives are an online school, private IGCSE study or preparation for the admissions test of a school elsewhere. Each of these needs a teacher who knows the syllabus, and no such teacher lives in the town.",
        "The papers are the same everywhere. Cambridge and Edexcel set one exam for the world, and the IB marks to one global standard, so a Pachore student with the right tutor competes on equal terms.",
      ],
      table: {
        caption: "Where Pachore families find which curriculum",
        columns: ["Place", "Curriculum available", "Notes"],
        rows: [
          ["Pachore and Rajgarh district", "MP Board, CBSE", "No IB or IGCSE school confirmed"],
          ["Bhopal", "Shrewsbury International School India and others", "Day or boarding option"],
          ["Indore", "Choithram International School, Daly College, The Emerald Heights International School", "The largest regional choice"],
          ["Online", "Private IGCSE or IB study with a tutor", "For students who stay in Pachore"],
        ],
      },
      bullets: [
        "No IB or IGCSE school was confirmed in Pachore or Rajgarh district",
        "Bhopal and Indore are the nearest international school cities",
        "Online tutoring suits students who stay at home",
        "Exam papers and standards are the same everywhere",
      ],
    },
    {
      heading: "What changes when an MP Board or CBSE student moves to IB or IGCSE?",
      paragraphs: [
        "A Pachore student who has learned the board syllabus well knows facts, formulas and standard methods. The IB and IGCSE ask what you can do with them. A Class 10 Chemistry question may ask for the definition of an acid; an IGCSE paper may give a titration table and ask what a student should change in the method.",
        "Writing is the second shift. Students who think in Hindi or Malvi and write in English need precise, short, correct sentences. The commonest lost marks are for vague wording, not wrong ideas, so tutors mark line by line.",
        "Long-term work is the third. IB Diploma students complete internal assessments over months and an Extended Essay of 4,000 words. IGCSE sciences include practical skills. A student who has known only a single March board exam must learn to pace work.",
        "None of this makes a student from a smaller town less able. Strong board mathematics, in particular, is an asset for IB Maths and IGCSE Extended Mathematics, and we build on it.",
      ],
      table: {
        caption: "MP Board and CBSE compared with IGCSE and IB",
        columns: ["Point", "MP Board / CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Medium", "Hindi or English", "English", "English with a second language"],
          ["Typical question", "Recall and standard problems", "Application and explanation", "Application, analysis, evaluation"],
          ["Internal work", "Small", "Practicals, some coursework", "Internal assessment, Extended Essay, TOK"],
          ["Exam months", "February-March", "May-June, October-November", "May"],
        ],
      },
      bullets: [
        "Facts carry over; application is the new demand",
        "Clear English sentences are taught deliberately",
        "Long projects need pacing across months",
        "Strong board mathematics is a head start",
      ],
    },
    {
      heading: "How is the cost of IB or IGCSE tuition decided for a Pachore family?",
      paragraphs: [
        "There is no price list, because the rate depends on the match. The factors are the level, the subject, the length and frequency of sessions and how recently the tutor has taught that syllabus. Higher Level Diploma subjects usually cost more than IGCSE Core, for the plain reason that fewer tutors can teach them well. The number is written down before the free trial.",
        "Where the tutor lives changes nothing. A lesson to Pachore costs the same as one to Bhopal, since nobody travels, and there is no charge for materials, as tutors use public past papers and specimen papers with their own worked answers.",
        "A comparison helps. Commuting to Indore or Bhopal for coaching means fares, a lost day and a group class. One weekly lesson from home with a specialist can cost less than the travel alone.",
        "No contract applies. If a tutor is not right, a replacement is arranged free, and pausing for a wedding, a harvest or a festival costs nothing.",
      ],
      bullets: [
        "Level and subject decide the fee",
        "The fee is written down before the trial",
        "No travel costs for online lessons",
        "Pausing and changing tutor are free",
      ],
    },
    {
      heading: "Online tutor, Bhopal or Indore coaching, local tutor or self-study: which works from Pachore?",
      paragraphs: [
        "Coaching in Bhopal and Indore is built for board exams and for JEE and NEET, and some of it is very good. It does not run an IB Higher Level Physics class or a Cambridge Chemistry 0620 class, and a daily commute from Pachore is not realistic anyway.",
        "A local tutor is a familiar and trusted arrangement and suits school subjects. For an international course the problem is knowledge of the current syllabus, which few people in a district without such schools have.",
        "Self-study is possible, and many students do a lot on their own with free past papers. What is missing is marked feedback on an internal assessment draft or a long answer.",
        "A matched online tutor gives personal attention and the right syllabus, provided there is a quiet corner and a steady connection. For most IB and IGCSE needs in Pachore, nothing else gives both.",
      ],
      table: {
        caption: "Study routes from Pachore",
        columns: ["Route", "Syllabus fit", "Attention", "Limit"],
        rows: [
          ["Coaching in Bhopal or Indore", "Board and entrance exams", "Group batch", "No IB or IGCSE batch; long commute"],
          ["Local private tutor", "School subjects", "One to one", "Rarely current in IB or Cambridge"],
          ["Self-study", "Depends on the student", "None", "No feedback on written work"],
          ["Matched online tutor", "Chosen for the course", "One to one", "Needs a stable connection"],
        ],
      },
      bullets: [
        "Coaching serves board and entrance exams",
        "Local tutors rarely have IB or Cambridge experience",
        "Written work needs an informed reader",
        "An online tutor supplies both syllabus and attention",
      ],
    },
    {
      heading: "How do mandi season, festivals and the monsoon affect the study calendar in Pachore?",
      paragraphs: [
        "A mandi town runs on the harvest. The wheat and gram arrive in March and April, and soya in October and November, and in those weeks the market yard is busy from early morning. Many students help at a family shop or stall or travel with produce, and the evenings can be tired ones. Lessons are better placed late in the evening, or on a weekend morning, in those weeks.",
        "Festivals set the second rhythm. Holi in March, Navratri and Dussehra in autumn and Diwali soon afterwards each bring a week or so of reduced study. Teej, Ganesh Chaturthi and Eid are also observed across the district. We build these into the calendar and do not schedule over the main festival days.",
        "The monsoon runs from June to September and cools the afternoons. April and May are very hot on the Malwa plateau, and power cuts and voltage drops are more frequent. A charged laptop and a phone hotspot protect lessons.",
        "On the exam side, IGCSE papers run in May-June and October-November, and IB Diploma exams in May. The heavy preparation therefore falls in March and April, right when the mandi is busiest and board exams run, so we plan those months carefully.",
      ],
      table: {
        caption: "Pachore's year and the lesson plan",
        columns: ["Period", "What is happening", "How we plan"],
        rows: [
          ["March-April", "Wheat and gram mandi rush, board exams, IB and IGCSE preparation", "Late-evening slots, board fortnight first"],
          ["May-June", "Exam papers and peak heat", "Early morning or evening, light revision"],
          ["July-September", "Monsoon, new school year", "Build routine and fix weak topics"],
          ["October-November", "Soya mandi, Navratri, Diwali, November IGCSE series", "Festival pauses, then a push to the series"],
        ],
      },
      bullets: [
        "Mandi weeks get late-evening or weekend slots",
        "Festival days are never scheduled over",
        "A hotspot backup protects against summer power cuts",
        "March and April need joint planning with board exams",
      ],
    },
    {
      heading: "Where do IB and IGCSE students from the Pachore side go next?",
      paragraphs: [
        "Students from this part of Malwa commonly think of Indore, Bhopal and Ujjain, with Devi Ahilya Vishwavidyalaya, IIT Indore, IIM Indore, MANIT and AIIMS Bhopal as well-known targets. Further afield, Delhi, Pune and Bengaluru follow, and abroad appears when results are strong.",
        "Applying inside India, an IB or IGCSE result generally travels with an Association of Indian Universities equivalence certificate. CUET-UG does not mind the board. JEE Main and NEET set their own subject and mark conditions, so test the exact subject mix against them in Class 10, long before forms open.",
        "Overseas, predicted grades arrive before final results and drive offers. UK universities quote points and named Higher Level subjects, Canada and Australia use grade conversions, and US colleges treat IB scores as part of a wider file.",
        "Tutors do not do admissions counselling. They raise the subject marks that make an application credible, such as lifting a predicted IB Chemistry 5 to a 6, or securing the IGCSE Extended Mathematics grade that keeps Higher Level Maths open.",
      ],
      bullets: [
        "Indore, Bhopal and Ujjain are the familiar regional destinations",
        "AIU equivalence and subject rules need an early check",
        "Predicted grades drive offers abroad",
        "Tutors build subject strength, not applications",
      ],
    },
    {
      heading: "IB Maths, Economics and the sciences: a view from a Pachore desk",
      paragraphs: [
        "Students from mandi families often have an instinct for numbers, and that serves IB Maths well. Applications & Interpretation suits those who like data and business, with an exploration topic that could be, for example, how the price of soya changes with the arrival of the crop. Analysis & Approaches suits those aiming for engineering and asks for reasoning on unfamiliar problems.",
        "Economics comes alive for these students. Supply, demand, elasticity and price controls are things they have seen in the market yard. The task is to draw the diagram correctly and then evaluate, which a tutor trains through weekly short commentary tasks.",
        "In Physics, Chemistry and Biology, the shift is from solving a given problem to explaining a result, and from following a practical to designing one. A student with limited lab access can still plan an investigation with ordinary equipment, and tutors coach the design, data and evaluation.",
        "In every subject, a weekly timed paper marked against the real scheme beats rereading notes, and that is where most lesson time goes.",
      ],
      bullets: [
        "Numerical instinct from market life serves IB Maths well",
        "Economics concepts are familiar; the diagram and evaluation need training",
        "Investigations can be designed with ordinary equipment",
        "Weekly timed papers show progress",
      ],
    },
    {
      heading: "Core or Extended, Cambridge or Edexcel: a Pachore guide to IGCSE choices",
      paragraphs: [
        "Cambridge and Edexcel IGCSE are both accepted widely. Cambridge has the broader subject list, includes Accounting and Hindi, and is more familiar to Indian tutors. Edexcel structures Mathematics into Foundation and Higher tiers. A private candidate usually follows the board that a nearby exam centre registers.",
        "Tiers matter. Cambridge Core caps the top grade at C, while Extended allows the full range, so a student who might take IB Higher Level or an A level should choose Extended. If a child needs confidence first, Core in Biology or a language can be a sensible start.",
        "Finding a registered exam centre is the real practical hurdle for a private candidate from a district town: registration closes months early and some centres refuse outsiders. We work through this with families before a series is booked.",
        "Subjects follow the path: Mathematics, Additional Mathematics, Physics, Chemistry and Computer Science for engineering; Biology and Chemistry for medicine; Accounting, Business Studies and Economics for commerce.",
      ],
      bullets: [
        "Cambridge is the more common choice for private candidates",
        "Extended tier keeps later options open",
        "Check exam-centre deadlines months ahead",
        "Subjects follow the intended degree",
      ],
    },
  ],

  tutorsIntro:
    "Tutors put forward for Pachore cover the IB from primary to Diploma and both IGCSE boards. Each name carries a reason for being chosen, and all teaching happens on screen, never at your front door.",

  process: [
    { title: "Describe the need", description: "Share the programme or board, the subject and level, the exam month and the hours your household keeps free." },
    { title: "Compare two or three names", description: "Each suggested tutor arrives with a sentence on why the syllabus fits." },
    { title: "Attend a trial hour", description: "Your child works on a live topic from their course; there is no bill." },
    { title: "Approve the first month", description: "The tutor lays out topics, pace and the fee in writing for you to adjust." },
    { title: "Keep going, or switch", description: "Notes follow every lesson, and a different tutor is a message away." },
  ],

  whyPoints: [
    { title: "The course decides the tutor", description: "A teacher who has run your child's exact syllabus matters more than one who lives close by." },
    { title: "Candour about Pachore", description: "We state that no IB or IGCSE school turned up locally, then plan around that fact." },
    { title: "Judge before paying", description: "One lesson comes free so your child can feel the teaching style." },
    { title: "Authorship stays put", description: "IAs, essays and coursework remain the student's writing from first word to last." },
    { title: "Two-minute reports", description: "A brief note after each session tells a parent what was done and what comes next." },
    { title: "Plans that respect the town", description: "Mandi weeks, festivals and board exams are worked into the timetable." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Pachore?", answer: "Start by writing down three things: the programme your child follows, the subject with its level, and the month of the exam. Send them over and a short list of teachers comes back, each of whom has run that very course lately. Pachore has no IB classroom, so the search covers all of India and distance never enters into it." },
    { question: "Is IGCSE home tuition available in Pachore?", answer: "It is, in the form of a live one-to-one video lesson that your child attends from their own desk at home. The teacher knows either the Cambridge or the Edexcel version of the subject. Nobody travels to Pachore, since face-to-face visits belong to Gurugram and a few pockets of Delhi NCR only." },
    { question: "Will a tutor come to our house in Pachore?", answer: "No tutor will knock on your door in Pachore. Visits of that kind are confined to Gurugram and parts of Delhi NCR. What you get instead is a private hour on screen with a whiteboard, where your child's written working is marked as it is produced and discussed straight away." },
    { question: "Are there IB or IGCSE schools in Pachore or Rajgarh district?", answer: "We found none to name, and prefer to say so than to guess. Schools around Pachore teach MP Board or CBSE courses. Parents who want an international school generally weigh Bhopal against Indore, and some consider boarding. Students who stay home use online lessons instead." },
    { question: "What does tuition cost in Pachore?", answer: "Prices are quoted per match, not published, because four things move them: the level, the subject, how long and how often your child meets the tutor, and how recent the tutor's experience of the syllabus is. Diploma Higher Level usually sits above IGCSE Core. The quote arrives in writing before the trial, and no travel is ever added." },
    { question: "Can lessons avoid the mandi rush and festival weeks?", answer: "They can. When wheat, gram or soya is being sold, we aim for late evening or weekend slots; around Holi, Navratri and Diwali we simply leave the festival days empty. Taking a break at such times never costs anything, and the first session back starts with a recap." },
    { question: "How does the free trial work?", answer: "The trial is an ordinary lesson on a real topic from your child's own course, taught by the tutor we propose, with no charge. Within a day you get a written plan covering the first four weeks. Accept it, request a different tutor, or walk away; whichever you choose, you owe nothing." },
    { question: "Will a tutor write my child's IA or Extended Essay?", answer: "Never. Writing assessed work for a student would break IB integrity rules and harm the child's record. Tutors explain what each criterion rewards, question a draft the way an examiner would, and show how to tighten a research question, while every sentence submitted stays the student's own." },
    { question: "Which IB subjects are available?", answer: "Both mathematics courses, the three sciences, Economics, Business Management, English A, Computer Science, Psychology, Geography, History, Environmental Systems and Societies, Hindi B, and coaching for Theory of Knowledge and the Extended Essay. A subject missing here is still worth asking about, because the tutor pool is wider than this list." },
    { question: "Is there help for MYP and PYP students?", answer: "There is. With MYP students the work centres on criterion-based writing, subject skills and the stages of the Personal Project. With PYP children, sessions are brief and playful, building reading, number sense and the habit of questioning that the Exhibition later draws on." },
    { question: "Is the internet in Pachore good enough?", answer: "Ordinary broadband or a steady 4G signal carries a video lesson and a whiteboard without trouble. Voltage dips and power cuts are the usual interruption in summer and storms, so keep a hotspot and a charged laptop ready. A session cut short is made up at no cost." },
    { question: "How are tutors checked?", answer: "Before a name goes forward we look at the person's degree, the syllabus they have taught in the last year or two, and how they handle coursework guidance. In a district with no local specialists that last-year check carries most weight, and the trial lesson hands the decision to your family." },
    { question: "When should tutoring begin?", answer: "Earliest is best: Class 9 for IGCSE and Class 11 for the Diploma leave room to mend gaps before marks count. Joining in the final months is still useful, though the work then narrows to the few topics most likely to lift the grade before the exam." },
    { question: "How do lessons fit around MP Board or CBSE exams?", answer: "In the weeks around the board papers, international lessons shrink or stop so revision gets full attention. They restart afterwards, pointed at the next IGCSE or IB session. We agree those dates at the start, not when the pressure arrives." },
    { question: "Can the tutor explain in Hindi?", answer: "The main language of teaching is English because papers are written in it. Where a concept refuses to settle, many tutors will unpack it briefly in Hindi and then restate it in the exam wording. Mention your preference in the first message and we will look for it." },
    { question: "Is IB Gram linked to any school or board?", answer: "It is not. IB Gram is a separate service with no tie to the International Baccalaureate, Cambridge, Pearson Edexcel or any school on this page. Bhopal and Indore schools appear purely to show what exists within reach of Pachore." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "An overview of the online model we use for towns and cities nationwide." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where face-to-face lessons at home are actually available." },
    { label: "IGCSE guide", href: "/igcse/", description: "Which board, which tier and which sitting, explained simply." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How six subjects, the core and the exams fit together." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "What the criteria and the Personal Project ask of a student." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "A parent's guide to inquiry units and the final Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "A way to decide between the two Diploma maths routes." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles filtered by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us and request the free first lesson." },
    { label: "IB and IGCSE tutoring in Ujjain", href: "/ujjain/", description: "A Malwa city whose families also look to Indore for international schooling." },
    { label: "IB and IGCSE tutoring in Bhopal", href: "/bhopal/", description: "The state capital, whose western edge has an international school." },
    { label: "IB and IGCSE tutoring in Indore", href: "/indore/", description: "The Malwa city where most of the region's international schools sit." },
  ],

  closingHeading: "Book a free trial lesson for your Pachore student",
  closingBody:
    "Send the programme or board, the subject and level, and the exam month. We reply with a tutor who has taught that course and a trial slot that suits your evenings, with nothing to pay until you have seen a lesson. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
