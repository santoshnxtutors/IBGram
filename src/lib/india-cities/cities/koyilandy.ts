import type { CitySeoPage } from "../types";

/**
 * Koyilandy (Quilandy), Kozhikode district, Kerala. No IB or Cambridge school is confirmed in the town,
 * so stripSchools is empty; clusters point to Kozhikode, Kochi and Bengaluru, reusing school names
 * already verified on the published Kochi and Bengaluru pages. Online only.
 */
export const koyilandy: CitySeoPage = {
  slug: "koyilandy",
  countryName: "Koyilandy",
  countryNameLong: "Koyilandy, Kerala",
  demonym: "Koyilandy",
  flagCode: "in",
  countryCode: "IN",
  state: "Kerala",
  stateCode: "IN-KL",
  region: "Kerala, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings after school and madrasa or tuition hours, with Friday prayers, Onam week and heavy monsoon days planned around",
  lastUpdated: "2026-09-21",
  geo: { latitude: 11.4381, longitude: 75.6951 },
  wikipedia: "https://en.wikipedia.org/wiki/Koyilandy",
  alternateNames: ["Quilandy", "Koyilandi", "Quilon Kozhikode", "Kolam Koyilandy"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Koyilandy | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Koyilandy families on the Malabar coast: DP, MYP, PYP, Cambridge and Edexcel, taught one to one with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Koyilandy",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR KOYILANDY FAMILIES",
  heroSubtitle:
    "On the coast road between Kozhikode and Vadakara, Koyilandy has many households with a Gulf connection and a habit of investing in education, and private tuition from home is part of everyday life. What the town lacks, as far as we could confirm, is a school teaching the IB or Cambridge IGCSE, so we match each student to an online tutor who has taught that exact syllabus, one to one, on your own laptop.",
  primaryKeyword: "IB and IGCSE tutors in Koyilandy",
  imageAltText: "Tutor teaching IB Biology live online to a Koyilandy student during the monsoon",
  secondaryKeywords: [
    "IB tutor Koyilandy",
    "IGCSE tutor Koyilandy",
    "IB home tuition Koyilandy",
    "IGCSE home tuition Koyilandy",
    "IB private tuition Koyilandy",
    "IB Maths tutor Koyilandy",
    "IGCSE Maths tutor Koyilandy",
    "IB Physics tutor Koyilandy",
    "IB Chemistry tutor Koyilandy",
    "IB Biology tutor Koyilandy",
    "IB DP tutor Koyilandy",
    "IB MYP tutor Koyilandy",
    "IB PYP tutor Koyilandy",
    "IGCSE online tuition Koyilandy",
    "IB tutor Quilandy",
    "online IB tutor Kozhikode district",
    "Cambridge IGCSE private candidate Kerala",
    "Edexcel IGCSE tutor Koyilandy",
    "IB tutor Payyoli",
    "IB tutor Kappad",
  ],

  heroTrustPoints: [
    "Tutors matched to your child's exact IB course or IGCSE specification",
    "Live lessons at home: no dash into Kozhikode traffic",
    "A free first class, written notes and a simple tutor change",
    "No affiliation with any school, board or awarding body",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The IB continuum" },
    { value: "IGCSE both boards", label: "Cambridge and Edexcel" },
    { value: "Online only", label: "No visits to Koyilandy homes" },
    { value: "Malayalam + English", label: "Language subjects available" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition means for a Koyilandy family",
    paragraphs: [
      "Koyilandy is one of the oldest ports on the Malabar coast, now a busy taluk headquarters on the national highway with a harbour, fishing families, traders and a large number of households supported by relatives working in the Gulf. Literacy is high and parents are accustomed to investing in tuition. So when a family hears about IB or IGCSE, the question is not whether extra teaching is acceptable, but who can teach it.",
      "As far as we can verify, no IB World School or Cambridge or Edexcel centre operates within Koyilandy. Schools with international curricula lie in Kozhikode, down the coast at Kochi and, for boarding, in Bengaluru. So the usual reasons to contact a tutor are practical: a child who will move to a Kozhikode campus, a student learning an international syllabus through an online school, a returning Gulf family whose child studied IGCSE abroad, or a private candidate.",
      "All teaching happens online. Koyilandy gets no home visits, which are confined to Gurugram and parts of Delhi NCR. Expect a live private lesson with an India-based tutor on Indian Standard Time, followed by a short written summary.",
      "IB Gram has no affiliation with the IB, Cambridge, Pearson or any school on this page. Tutors teach and give feedback, while every Internal Assessment, Extended Essay, TOK essay and piece of coursework is written by the student.",
    ],
    bullets: [
      "Support for returning Gulf families continuing IGCSE or IB",
      "Private-candidate teaching for Cambridge and Edexcel",
      "Malayalam, Hindi and English language subjects",
      "A free trial lesson before any decision",
    ],
  },

  programmesIntro:
    "Families in Koyilandy often arrive at an IB stage through a move, whether from the Gulf, from another Kerala city, or toward a Kozhikode school. The descriptions below reflect those starting points.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Children explore transdisciplinary themes through units of inquiry, and in the final year prepare an Exhibition they largely lead themselves. With no external examination, tutoring is about reading, curiosity and comfortable English.",
      countryNote:
        "For a Koyilandy child, PYP tutoring most often supports a family returning from an international school in the Gulf, where the programme was already familiar.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are assessed on separate criteria, and the year-five Personal Project requires a student to plan, create and reflect. Marks reward clear reasoning as much as correct answers.",
      countryNote:
        "Students moving from Kerala State syllabus classes often need to shift from recalling textbook points to applying them, particularly in science and humanities.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, together with TOK, the Extended Essay and creativity, activity and service. Examinations are in May, with coursework due earlier in the year.",
      countryNote:
        "Diploma requests from Koyilandy typically come from students who completed Class 10 in Kerala or the Gulf and want help in one or two demanding subjects.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP students combine DP courses with a career-related study and a reflective project. The Diploma courses are taught exactly as in DP.",
      countryNote:
        "We have not come across CP demand in the town, but the academic subjects can be tutored like any DP course.",
    },
  ],

  subjectsIntro:
    "Kerala students tend to be strong on written recall and steady on maths, and the IB asks for more argument and application. We choose tutors by course and level, then by how well they can build the written-reasoning habit.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof; at HL the extended problem-solving paper separates students who understand the methods from those who merely know them." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and technology, with explorations often built on local data such as fishing yields or monsoon rainfall." },
    { name: "IB Physics", levels: "HL / SL", description: "Wave behaviour, circuits and thermal physics are heavy on quantitative reasoning, and the investigation needs an early plan." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Reaction kinetics, equilibrium and organic mechanisms; accuracy with units and the data booklet decides many marks." },
    { name: "IB Biology", levels: "HL / SL", description: "Coastal ecology offers excellent local case studies, and the investigation rewards a carefully controlled experiment." },
    { name: "IB Economics", levels: "HL / SL", description: "Remittance economies, fishing and trade offer vivid real-world material for policy and development questions." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers and a research project, with family businesses in trade and seafood supplying accessible examples." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms plus a documented product, a subject that suits screen-sharing for code review." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies must be described accurately and evaluated; approaches and ethics questions need a disciplined structure." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Coastlines, monsoon variability and fisheries give natural case studies, which must be argued rather than listed." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysis of unseen non-literary texts and an oral; students bilingual in Malayalam often write well but need structure." },
    { name: "IB Malayalam A and Malayalam B", levels: "HL / SL", description: "A natural option in Koyilandy, with IB-specific assessment formats that differ from Kerala State expectations." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Asking how claims are justified in different fields, assessed through an exhibition and a short essay." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "An independent study of up to 4,000 words; a tutor guides the choice of question and the shape of the argument, not the prose." },
  ],

  igcseSubjectsIntro:
    "Returning Gulf families often know one IGCSE board from school abroad and assume it applies everywhere. The two boards, Cambridge and Edexcel, differ in papers and wording, so we confirm which one the student has used or will sit. Cambridge offers May-June and October-November sessions, and Edexcel adds January.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "The top tier pays for tidy working and careful reading, across both calculator and non-calculator papers." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Class 10", description: "Calculus, trigonometry and functions a year early, a head start for anyone eyeing Diploma Maths at Higher Level." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Question wording differs from Cambridge, so one board's past papers should be used throughout." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy and electricity, plus questions on planning an experiment that reward rehearsal." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, reacting masses and introductory organic chemistry, best learned through short daily calculation." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, inheritance and ecology, with graph and table questions in nearly every paper." },
    { name: "IGCSE Economics 0455", levels: "Class 9-10", description: "Markets and policy, where a structured evaluation earns the top marks." },
    { name: "IGCSE Accounting 0452", levels: "Class 9-10", description: "A sensible subject for trading families, focusing on ledgers, statements and ratios." },
    { name: "IGCSE English First Language 0500", levels: "Class 9-10", description: "Persuasive and descriptive writing alongside summary tasks, each practised separately." },
    { name: "IGCSE Malayalam and Hindi as second languages", levels: "Class 9-10", description: "Language options with written and oral components prepared to the specification in use." },
  ],

  regionsTitle: "Koyilandy localities and nearby towns our online tutors already teach",
  regionsIntro:
    "Since every lesson is online, these places matter for routine: school timings, when the highway is jammed, and how monsoon weeks or festival days affect the household.",
  regions: [
    { name: "Koyilandy town and the national highway", note: "The commercial core along NH 66, with shops and offices; families here mostly study Kerala State or CBSE syllabi." },
    { name: "Koyilandy harbour and the beach side", note: "The fishing and harbour community, where monsoon weather can disrupt routines and evening lessons work best." },
    { name: "Kollam and the Kollam Chira area", note: "The pond and temple area known across Malabar, with long-settled families and many returning Gulf workers." },
    { name: "Pisharikavu", note: "The temple neighbourhood famous for its annual festival, when the town becomes very busy and lessons are planned around it." },
    { name: "Muchukunnu", note: "The area associated with the independence leader K. Kelappan, with a tradition of valuing schooling." },
    { name: "Thikkoti", note: "A coastal locality to the south, near a lighthouse and the railway, linked to Kozhikode by frequent trains." },
    { name: "Payyoli", note: "A coastal town to the north, known for its athletics tradition, with families who often commute toward Vadakara or Koyilandy." },
    { name: "Kappad", note: "The beach to the south where Vasco da Gama is said to have landed, closer to Kozhikode and its schools." },
    { name: "Moodadi and Chemancheri", note: "Inland localities with mixed state board and CBSE schools, and households that commute toward the town or Kozhikode." },
    { name: "Melur and Arikkulam", note: "Semi-rural areas where online tuition saves long bus trips for subjects not taught locally." },
  ],

  schoolDisclaimer:
    "Inside Koyilandy itself we found no confirmed IB World School or Cambridge or Edexcel centre. Schools listed below sit in other cities and appear only as regional context. IB Gram works independently of all of them and receives nothing from any; authorisation and admissions should be checked with the school.",
  schoolClusters: [
    {
      city: "Nearby: Kozhikode",
      note: "About an hour south by road or rail, Kozhikode is the closest city and the usual first comparison for Koyilandy families; we could not confirm an IB or Cambridge school there either, so families often look further afield.",
      schools: [],
    },
    {
      city: "Nearby: Kochi",
      note: "Kochi, a long day's travel down the coast, holds Kerala's largest group of schools teaching international curricula, and some families consider boarding or relocating there.",
      schools: ["The Choice School, Ambalamugal", "TIPS Kochi", "Cochin International School", "Global Public School, Thiruvankulam"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "Bengaluru is the main choice for families wanting a boarding campus in the region, reached by a long road or rail journey.",
      schools: ["Stonehill International School", "Canadian International School, Bengaluru", "Trio World Academy"],
    },
  ],

  modesIntro:
    "Online lessons for a Koyilandy student take three common shapes, depending on whether the student is at a school, preparing for one or studying alone.",
  modes: [
    {
      title: "One lesson a week, all year",
      description: "A steady weekly class that runs alongside school and deepens one subject.",
      bullets: [
        "A fixed evening slot",
        "Homework reviewed each week",
        "Notes sent after every class",
      ],
    },
    {
      title: "Focused run before mocks or finals",
      description: "A denser period of lessons built around timed papers and mark schemes.",
      bullets: [
        "Paper-by-paper plan",
        "Examiner-style feedback",
        "A calmer pace once exams start",
      ],
    },
    {
      title: "Teaching the syllabus for a private candidate",
      description: "The tutor delivers an entire course for a student not enrolled at a school that teaches it.",
      bullets: [
        "A term-by-term scheme of work",
        "Short tests between sessions",
        "Advice on centre entry and dates",
      ],
    },
  ],

  sections: [
    {
      heading: "Who are the IB and IGCSE families around Koyilandy, and where is the schooling?",
      paragraphs: [
        "They are a varied group. Many have a parent or sibling working in the Gulf, where IGCSE and IB schools are common and where a child may already have studied. Others are doctors, teachers, engineers and traders who hear about international curricula through relatives or colleagues.",
        "The schooling itself is mostly elsewhere. Koyilandy has Kerala State and CBSE schools and colleges, and we could not confirm an IB or Cambridge school in the town. The nearest established options are in Kozhikode, further south in Kochi, and in Bengaluru.",
        "Because of that, tutoring plays different roles. For a returning family, it is continuity, matching the syllabus the child already knows. For a family planning a move, it is preparation. For a private candidate, it is the course itself.",
        "We take each case individually and do not assume that one model fits all. The first step is always to establish which board, which level and which exam session is involved, and then to find a tutor who has taught it.",
      ],
    },
    {
      heading: "Kerala State Board, CBSE, IB or IGCSE: how do they compare in Koyilandy?",
      paragraphs: [
        "Kerala's state syllabus is widely followed and leads to the Higher Secondary stage, with strong emphasis on language and factual knowledge. CBSE is offered by many private schools and leads into national entrance tests. IB and IGCSE ask for reasoning, application and, in the IB, independent research.",
        "Malayalam is the everyday language, and many students are comfortable in Arabic or Urdu scripts through religious study, which makes them adaptable learners. English academic writing still needs deliberate work, particularly for students educated in Malayalam-medium schools.",
        "Gulf experience also matters: a child who studied CBSE, IGCSE or a British-curriculum school in the Gulf has a different baseline from one who has studied only in Kerala, and a tutor should start from what the child already knows.",
        "The table below sets the five options side by side.",
      ],
      table: {
        caption: "Board options for Koyilandy students",
        columns: ["Board", "Assessment", "Presence near Koyilandy", "Suits a family that"],
        rows: [
          ["Kerala State syllabus", "Annual state exams, Class 10 and Higher Secondary", "Most schools", "Plans to stay in Kerala with state entrance routes"],
          ["CBSE", "Board exams plus internal marks", "Many private schools", "May move between states or the Gulf"],
          ["ICSE / ISC", "English-focused with internal assessment", "A small number of schools", "Values English and humanities"],
          ["IB (PYP, MYP, DP)", "Criteria-based with coursework", "Not confirmed in Koyilandy; nearest in Kochi or Bengaluru", "Expects overseas study or inquiry learning"],
          ["IGCSE (Cambridge / Edexcel)", "Two-year tiered external exams", "Private entry or school elsewhere", "Wants a portable Class 10 result"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Koyilandy, and what shapes the rate?",
      paragraphs: [
        "We do not publish prices. The rate is confirmed to you in writing before you book, since a single figure would not suit every student.",
        "The main factors are the course and level, the frequency of lessons, and the preparation required. A tutor teaching a whole syllabus to a private candidate does more than one who supports a class.",
        "Timing also affects it: the weeks before the May and November exams are the busiest. The number of subjects taught by one tutor can also change the arrangement.",
        "Families in Koyilandy avoid costs that would otherwise arise. No fare to Kozhikode, no lost school evening, and no hostel rent during a tuition period. The free trial lesson lets you judge the teaching first.",
      ],
      bullets: [
        "Subject, level and board",
        "Weekly lessons and plan length",
        "Support role versus full teaching",
        "Time left before the exam",
      ],
    },
    {
      heading: "Online tuition, Kozhikode centres, local tutors or boarding: what works for Koyilandy students?",
      paragraphs: [
        "Kozhikode has many tuition centres, and some advertise IB and IGCSE support. Reaching them from Koyilandy means a commute of around an hour each way on a busy highway or by train, and monsoon weeks make it worse.",
        "An online one-to-one tutor removes travel and lets a family choose for expertise instead of distance. Local Koyilandy tutors are excellent for state board and CBSE subjects but rarely have experience of international papers.",
        "Boarding in Kochi or Bengaluru gives classroom teaching but carries cost and distance from family, and many boarders want extra help when home for the holidays.",
        "To be clear, home tuition in Koyilandy means lessons taken at home, online. Tutors do not visit homes here.",
      ],
      table: {
        caption: "Study routes compared for Koyilandy students",
        columns: ["Route", "Good for", "Advantage", "Limitation from Koyilandy"],
        rows: [
          ["Online one-to-one", "Any IB or IGCSE subject", "Specialist, no travel", "Requires a stable connection"],
          ["Kozhikode tuition centre", "Group classes in main subjects", "Peer environment", "Long commute, especially in monsoon"],
          ["Local private tutor", "Kerala State or CBSE subjects", "Near and familiar", "Little international syllabus experience"],
          ["Boarding in Kochi or Bengaluru", "Full-time international curriculum", "Daily classroom teaching", "Cost and distance"],
          ["Self-study", "Disciplined IGCSE students", "Flexible and cheap", "No feedback on writing and orals"],
        ],
      },
    },
    {
      heading: "The Koyilandy year: monsoon, Onam, Ramadan and exam sessions",
      paragraphs: [
        "Kerala's school year begins in June with the southwest monsoon, which brings heavy rain through September and sometimes cuts power or disrupts roads in coastal towns. The northeast monsoon arrives in October and November. Summer is hot and humid from March to May.",
        "Festivals punctuate the calendar: Vishu in April, Onam in late summer, Navaratri and Vijayadashami in autumn, Christmas, and in a town with a large Muslim community, Ramadan and the two Eids. Pisharikavu's annual festival is a local landmark. Lessons shift around these and resume more lightly afterwards.",
        "IB Diploma examinations fall in May, with November for some schools. Cambridge runs May-June and October-November, and Edexcel adds January. Private candidates register through an approved centre well ahead.",
        "We plan from the exam date backward, keeping monsoon and festival weeks for consolidation instead of new material.",
      ],
      table: {
        caption: "A Koyilandy year for an IB or IGCSE student",
        columns: ["Window", "School and exams", "Local conditions", "Tutoring focus"],
        rows: [
          ["January to March", "Edexcel January series; annual exams", "Dry and warm", "Timed papers and revision"],
          ["April to June", "IB May exams; Cambridge May-June; school begins in June", "Heat, Vishu, then monsoon onset", "Final revision, then a gentle restart"],
          ["July to September", "Coursework starts; Onam holidays", "Heavy monsoon; Onam", "Rebuilding and planning"],
          ["October to December", "Autumn series and retakes", "Northeast monsoon; Christmas", "Mock papers and gap-closing"],
        ],
      },
    },
    {
      heading: "Where can a Koyilandy student go after IB or IGCSE?",
      paragraphs: [
        "Within reach are Calicut University, NIT Calicut and IIM Kozhikode, along with colleges across Kerala. Admission to Indian institutions after IB or IGCSE generally requires AIU equivalence, which families should request early.",
        "CUET-UG is an entry route to many central and participating universities, open to IB Diploma students who should check each university's subject rules. JEE and NEET have their own subject conditions, which should shape Higher Level choices for IB science students.",
        "Gulf and overseas study is a natural path for many Koyilandy families, and IB and IGCSE are read directly by universities in the UK, Canada, Australia and the Gulf. Students should choose subjects that match the intended degree and begin building their record early.",
        "A student who returns to the Kerala system after IGCSE can join a Higher Secondary course, so the choice remains open.",
      ],
      bullets: [
        "AIU equivalence requested early",
        "CUET-UG and subject rules checked per university",
        "JEE and NEET subject conditions planned before DP choices",
        "Overseas applications based on predicted and final results",
      ],
    },
    {
      heading: "How are IB Maths and sciences taught online to a Koyilandy student?",
      paragraphs: [
        "The shared whiteboard is the core of maths teaching: the student writes, the tutor follows, and errors are corrected in real time. Analysis and Approaches sessions emphasise calculus and proof; Applications and Interpretation sessions emphasise statistics and modelling.",
        "Science lessons combine concept, worked example and past-paper question. Internal investigations can draw on the coast, such as salinity, tides or local plant studies, where these are safe and feasible, with the tutor explaining the criteria without designing the study.",
        "Kerala students are often strong at remembering, so the emphasis shifts to explaining why: command words such as explain, compare and evaluate each demand a different depth.",
        "A written note after each class lists topics covered and homework, and a short review after the first month keeps parents informed.",
      ],
    },
    {
      heading: "How should a Koyilandy student choose IGCSE subjects and tiers?",
      paragraphs: [
        "Choose by destination. A science-bound student should take Mathematics, Physics, Chemistry and Biology or Combined Sciences at Extended tier. A commerce-bound student can add Accounting, Economics or Business Studies.",
        "Additional Mathematics is optional but strongly recommended for anyone heading for Higher Level IB Maths. A language such as Malayalam or Hindi adds breadth and is usually a comfortable subject.",
        "The Cambridge versus Edexcel choice should be made early. A tutor can compare specifications, though entry is arranged through an approved centre.",
        "Keep the load realistic: five to seven subjects over two years is sensible, and more rarely improves a student's profile.",
      ],
    },
  ],

  process: [
    { title: "Tell us your situation", description: "The syllabus, the exam series, and whether your child has a school class behind them." },
    { title: "See a tutor shortlist", description: "Tutors with experience of that exact syllabus, with notes on why each fits." },
    { title: "Take a free trial", description: "A genuine class on a real topic, at no cost or obligation." },
    { title: "Agree the plan in writing", description: "The first month and the rate are set out before you commit." },
    { title: "Review and adjust", description: "A note follows every class, progress is reviewed regularly, and you can change tutor freely." },
  ],

  whyPoints: [
    { title: "Matched on the syllabus", description: "Course, level and board are settled before we suggest a tutor." },
    { title: "Made for coastal and small-town families", description: "Tutors able to teach a full subject where no local class exists." },
    { title: "Judge the teaching first", description: "The free lesson lets you see the tutor at work." },
    { title: "Firm on integrity", description: "Coaching and feedback, never writing coursework." },
    { title: "Clear reporting", description: "Notes and reviews that keep parents informed." },
    { title: "No lock-in", description: "Independent of any school or board, with an easy tutor change." },
  ],

  tutorsIntro:
    "Every profile names the boards, levels and subjects that tutor has really taught. For Koyilandy we favour tutors who can work with students moving from Malayalam-medium or Kerala State classes and with returning Gulf students used to a different school culture.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Koyilandy?",
      answer:
        "Not one that we could verify. Nothing in Koyilandy is listed to us as an IB World School or a Cambridge or Edexcel centre, and the nearest campuses are in Kochi and Bengaluru. Online tutoring fills the gap for families who stay put; do check any school's status with the school.",
    },
    {
      question: "Do tutors visit homes in Koyilandy?",
      answer:
        "No. Tutors do not come to Koyilandy homes, because visits are limited to Gurugram and parts of Delhi NCR. Here, home tuition is a private online lesson that your child attends from the family desk, taught by an India-based tutor on Indian Standard Time.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Koyilandy?",
      answer:
        "The figure is set per student, because it follows the course, the level, how often you meet and the work a tutor puts in between lessons. Nothing is printed as a standard price; you get the rate in writing first. Your trial class is free, and no train or bus fare to Kozhikode is involved.",
    },
    {
      question: "My child studied IGCSE in the Gulf. Can tutoring continue that?",
      answer:
        "Yes. Returning families often want continuity. Tell us the board, subjects and tier the child used abroad, and we match a tutor who has taught the same specification, so the child does not lose ground after the move.",
    },
    {
      question: "Can a Koyilandy student sit IGCSE as a private candidate?",
      answer:
        "Usually, yes. Entry goes through an approved exam centre, and for a Koyilandy family that often means registering in Kozhikode or Kochi well before the papers. We do not handle registration or exams ourselves; a tutor teaches the whole course and explains the dates you will need to meet.",
    },
    {
      question: "Will the tutor write an Internal Assessment or Extended Essay?",
      answer:
        "No, never. Our tutors teach, question and comment, and the Internal Assessment, Extended Essay, TOK essay and coursework are written by the student alone. What a tutor can do is help a student settle on a manageable question, read the marking criteria properly and react honestly to a draft.",
    },
    {
      question: "What happens to lessons during heavy monsoon days?",
      answer:
        "We plan for interruptions. If power or internet fails, the lesson is rescheduled at no extra charge, and a phone hotspot can cover short outages. Extra revision slots are often added in drier weeks to make up the time.",
    },
    {
      question: "Are lessons in Malayalam or English?",
      answer:
        "Mostly English, since exams are in English, though a tutor can explain a hard idea briefly in Malayalam or Hindi if it helps. Malayalam and Hindi language subjects are taught in those languages. We confirm the mix in the trial lesson.",
    },
    {
      question: "How do Cambridge and Edexcel IGCSE differ?",
      answer:
        "Each board runs its own two-year course with separate codes, paper layouts and wording of command terms. Cambridge sits in May-June and October-November, while Edexcel also has a January series. Pick one board early and stay with its past papers; a tutor can set the two side by side for you.",
    },
    {
      question: "Which IB subjects can your tutors teach?",
      answer:
        "The range covers both Maths courses, the three sciences, Economics, Business, Computer Science, Psychology, English, Malayalam and Hindi, with TOK and Extended Essay coaching on top. Availability shifts with level and season, so send the exact course and we will say whether we have a fit.",
    },
    {
      question: "How soon before exams should we begin?",
      answer:
        "Give yourself about two terms, and more if the subject is being learned from nothing. A July start for the following May suits most students, since entry dates arrive early and the monsoon months suit steady indoor study.",
    },
    {
      question: "Can one tutor teach both IB and IGCSE?",
      answer:
        "In some cases, mainly maths and the sciences where topics overlap. We normally prefer a specialist for each syllabus, but a child moving from IGCSE into the Diploma can keep one tutor for continuity if the match allows it. This is decided when we shortlist.",
    },
    {
      question: "Do you teach younger children on PYP?",
      answer:
        "Yes, through brief weekly sessions on reading, number work and speaking in English. With no external exam at PYP, the target is confidence. Children back from a Gulf school that ran the programme usually need only light support to keep the inquiry habit going.",
    },
    {
      question: "What if the tutor is not a good fit?",
      answer:
        "We arrange a different tutor at no charge. A short message about what felt wrong, such as speed, manner or depth of subject knowledge, is enough for us to suggest someone else. The fit matters most when one tutor carries the whole course.",
    },
    {
      question: "Is IB Gram tied to any school or board?",
      answer:
        "IB Gram stands alone. It has no partnership with the International Baccalaureate, Cambridge, Pearson or any school mentioned here, and schools are named only so a family can see where these syllabuses are taught around Koyilandy.",
    },
    {
      question: "How do I begin?",
      answer:
        "Write to us on WhatsApp at +91 7439 368 115 or at support@ibgram.com, naming the board, subject, level and exam series. A shortlist comes back, and we fix a free trial at an hour that fits the evening routine in your Koyilandy home.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "Every Indian city where IB Gram tutors teach online." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Our one in-person home tuition city." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How we choose IB tutors." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "IGCSE boards, subjects and tiers." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The six subjects, the core and the exams." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the project year." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Primary-years inquiry units." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "DP courses plus career study." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles sorted by subject." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Arrange a trial class." },
    { label: "IB and IGCSE tutoring in Kozhikode", href: "/kozhikode/", description: "The nearest city, served fully online." },
    { label: "IB and IGCSE tutoring in Kochi", href: "/kochi/", description: "Kerala's main cluster of international schools." },
    { label: "IB and IGCSE tutoring in Malappuram", href: "/malappuram/", description: "A neighbouring Malabar district, covered online." },
  ],

  closingHeading: "Book a free IB or IGCSE trial lesson in Koyilandy",
  closingBody:
    "Share the board, subject, level and exam session, and tell us whether your child has studied abroad, at a Kerala school or alone. We will pick a tutor who has taught that course, arrange a free class for an evening that avoids the school rush and the rain, and tell you candidly whether online tuition suits your child. Nothing to pay, nothing to sign.",
};
