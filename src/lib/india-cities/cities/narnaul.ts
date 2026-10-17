import type { CitySeoPage } from "../types";

/**
 * Narnaul, Mahendragarh district, Haryana. No IB or Cambridge school is confirmed in the city, so
 * stripSchools is empty; clusters point to the Gurugram belt and Jaipur, reusing school names already
 * verified on the published Rewari and Jaipur pages. Online only: Narnaul is not a home-tuition city.
 */
export const narnaul: CitySeoPage = {
  slug: "narnaul",
  countryName: "Narnaul",
  countryNameLong: "Narnaul, Haryana",
  demonym: "Narnaul",
  flagCode: "in",
  countryCode: "IN",
  state: "Haryana",
  stateCode: "IN-HR",
  region: "Haryana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings after school and coaching hours, and Sunday mornings, with dense-fog winter mornings and peak-heat afternoons left free",
  lastUpdated: "2026-09-21",
  geo: { latitude: 28.0444, longitude: 76.1083 },
  wikipedia: "https://en.wikipedia.org/wiki/Narnaul",
  alternateNames: ["Narnaul Haryana", "Narnaund", "Mahendragarh district headquarters"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Narnaul | Private Tuition, Online",
  metaDescription:
    "Private IB and IGCSE tuition for Narnaul students, taught live online one to one: Diploma, MYP, PYP, Cambridge and Edexcel, with a free trial class first.",
  h1: "IB and IGCSE Tutors and Private Tuition in Narnaul, Online",
  heroEyebrow: "PRIVATE IB & IGCSE TUITION FOR NARNAUL STUDENTS",
  heroSubtitle:
    "Searching for private tuition from home in Narnaul usually ends at a coaching board or a Class 12 physics teacher. For IB or IGCSE it needs something rarer: a tutor who has taught the exact specification, reached by video at your own desk. We match each Narnaul student to one, because the Ahirwal belt has no school we could confirm that teaches either syllabus and the nearest campuses are well over a hundred kilometres away.",
  primaryKeyword: "IB and IGCSE tutors in Narnaul",
  imageAltText: "Online IB Mathematics tutor teaching a Narnaul student over a video call with a shared whiteboard",
  secondaryKeywords: [
    "IB tutor Narnaul",
    "IGCSE tutor Narnaul",
    "IB home tuition Narnaul",
    "IGCSE home tuition Narnaul",
    "IB private tuition Narnaul",
    "IB Maths tutor Narnaul",
    "IGCSE Maths tutor Narnaul",
    "IB Physics tutor Narnaul",
    "IB Chemistry tutor Narnaul",
    "IB Biology tutor Narnaul",
    "IB DP tutor Narnaul",
    "IB MYP tutor Narnaul",
    "IB PYP tutor Narnaul",
    "IGCSE online tuition Narnaul",
    "online IB tutor Mahendragarh",
    "IB tutor Haryana",
    "Cambridge IGCSE private candidate Haryana",
    "Edexcel IGCSE tutor Narnaul",
    "IB tutor Narnaul Haryana",
    "IB tutor Kanina",
  ],

  heroTrustPoints: [
    "A tutor who has taught your child's exact course and level",
    "Live one-to-one lessons at home, no drive to Gurugram or Jaipur",
    "Free trial, written notes after every session, tutor swap if needed",
    "No link to any school, board or awarding body",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB continuum covered" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "Online only", label: "No home visits in Narnaul" },
    { value: "Free trial", label: "Before you commit" },
  ],

  intro: {
    heading: "Private IB and IGCSE tuition in Narnaul: what to expect",
    paragraphs: [
      "Narnaul is the headquarters of Mahendragarh district, a town of old Afghan-era monuments, a lake palace called Jal Mahal, and a hill at Dhosi that people have visited for centuries. It is also part of a region where army service, government jobs and competitive exams define a household's ambitions. Against that background, IB and IGCSE are unusual, and a family asking about them has normally a specific reason: a relative abroad, a posting that may move the family, or a child who wants to study overseas.",
      "We could not confirm an IB World School or a Cambridge or Edexcel centre in Narnaul. The closest established campuses are around Gurugram to the north and in Jaipur to the south-west, both a long journey away. That leaves tutoring as the practical way to meet the syllabus, for a student enrolled elsewhere who comes home for breaks, or for a private candidate who stays in Narnaul throughout.",
      "Tutoring here is online. Nobody from IB Gram visits homes in Narnaul; in-person sessions happen only in Gurugram and parts of Delhi NCR. A lesson is a live, private video class with a tutor based in India, teaching on Indian Standard Time, with a short written note at the end of each session.",
      "IB Gram is an independent service and has no affiliation with the IB, Cambridge, Pearson or any school named on this page. Tutors coach and explain; the Internal Assessment, Extended Essay, TOK essay and coursework are always the student's own work.",
    ],
    bullets: [
      "Tutors who teach a full syllabus for private candidates",
      "Cambridge and Pearson Edexcel IGCSE, both tiers",
      "Hindi and English language support where helpful",
      "A free first lesson and a written plan before any commitment",
    ],
  },

  programmesIntro:
    "Army and government families in this district often move, so the programme a child follows can change. Here is how each IB stage looks from a Narnaul household.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "PYP blends subjects into themed units of inquiry and concludes with a pupil-led Exhibition in the final year. Since nothing is externally examined, the value of tutoring lies in steady reading, number confidence and the habit of asking questions.",
      countryNote:
        "For Narnaul children, tutoring at this age is usually a bridge, whether toward a school elsewhere or in case of a posting that takes the family to a PYP school.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP marks subjects on four criteria rather than one total, and a student can understand a topic yet lose marks by answering the wrong criterion. The Personal Project asks a student to manage a long task with a written reflection.",
      countryNote:
        "Students arriving from Haryana Board or CBSE classes need the most help writing out reasoning in full sentences and reading a task criterion before answering.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma candidate takes six subjects, three at Higher Level, plus TOK, the Extended Essay and a service component. Final exams sit in May, with coursework submitted months earlier.",
      countryNote:
        "Diploma requests from Narnaul typically come from students boarding in Gurugram or Jaipur who want continuity in a hard subject during holidays spent at home.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP pairs a pair of Diploma subjects with a career-related study and a reflective project. The academic courses are identical to their DP equivalents.",
      countryNote:
        "CP is rare in the region; a family met with it would usually need help only with the academic subject portion.",
    },
  ],

  subjectsIntro:
    "Narnaul's culture of competitive exams makes students quick with numbers, which helps in IB Maths and sciences but sometimes hides weak written English. We ask about both, then pick a tutor whose strengths match the gap.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "A strong fit for students trained in JEE-style algebra, though the Diploma rewards explained steps and mathematical communication over speed." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling dominate; a technology-heavy course that suits commerce and social science pathways." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, circuits and fields are familiar to Indian students, but IB adds data analysis questions and an experimental investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Organic routes and equilibrium calculations need care; the data booklet replaces memorised tables and must be used fluently." },
    { name: "IB Biology", levels: "HL / SL", description: "Ecology and evolution questions ask for application to new cases, and the investigation needs a well-controlled design." },
    { name: "IB Economics", levels: "HL / SL", description: "Theory meets current events; students draw on India's own policy examples, including agriculture and fiscal measures." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies and a research project; families with local trading or manufacturing businesses have useful real-world material to use." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and a documented product; online teaching suits this subject well." },
    { name: "IB Psychology", levels: "HL / SL", description: "Understanding methods and ethics in studies matters as much as remembering results." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and essay structure, a good fit for students who like the region's long past, from Sher Shah's era onward." },
    { name: "IB Hindi A and Hindi B", levels: "HL / SL", description: "Hindi is the local language and an advantage, though IB orals and written tasks have specific formats." },
    { name: "IB English B and English A", levels: "HL / SL", description: "For students educated mainly in Hindi-medium schools, structured practice in academic English is the most common need." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Comparing ways of knowing through real examples, assessed by an exhibition and an essay." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "A self-directed study of up to 4,000 words; tutors advise on method and structure but the writing is the student's own." },
  ],

  igcseSubjectsIntro:
    "For a private candidate, the exam board choice is the first real decision. Cambridge and Edexcel cover the same topics in different styles, and a student who switches halfway loses time. Sessions run May-June and October-November for Cambridge, with Edexcel adding January.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tier demands clean algebra and geometry and careful reading of what each question really asks for." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Class 10", description: "Calculus and trigonometry a year early, especially helpful for students aiming at engineering pathways." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Comparable content with a different question style; choose one board and use its papers only." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Motion, energy and electricity, plus a paper on planning experiments that rewards close reading." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atoms, bonding and reactions with a steady flow of calculation practice." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Human biology, inheritance and ecosystems with attention to interpreting experimental data." },
    { name: "IGCSE Economics 0455", levels: "Class 9-10", description: "Markets, government and trade, where longer evaluation answers carry most of the marks." },
    { name: "IGCSE Business Studies 0450", levels: "Class 9-10", description: "Case questions on small firms and finance, useful for families with their own businesses." },
    { name: "IGCSE English First Language 0500", levels: "Class 9-10", description: "Writing for effect and summarising, taught to students who think in Hindi." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Class 9-10", description: "An accessible subject for Narnaul students, prepared for examination-style tasks." },
  ],

  regionsTitle: "Narnaul localities and nearby towns our online tutors already support",
  regionsIntro:
    "No tutor comes to your door in Narnaul, so this list is about timing and family routine across the district, not journey distances.",
  regions: [
    { name: "Old city near Jal Mahal", note: "A historic quarter with crowded lanes, where families often prefer a fixed evening slot after the main market closes." },
    { name: "Dhosi Hill road", note: "The road toward the Dhosi hill on the Rajasthan border, home to households with strong ties to both Haryana and Rajasthan schooling." },
    { name: "Civil lines and the administrative area", note: "Officials and their families, many on transfer, who are the most likely to have met IB or IGCSE elsewhere." },
    { name: "Mahendragarh Road side", note: "The newer residential stretch toward the district's namesake town, popular with families who commute to offices and colleges." },
    { name: "Rewari Road side", note: "The north-facing edge where students sometimes board in Rewari or Gurugram and return home for holidays." },
    { name: "Bus stand and market area", note: "A busy commercial belt; trading families here value flexible Sunday sessions." },
    { name: "Mahendragarh", note: "The district's namesake town, with its own colleges and a fort on a hill, and a steady demand for online subject support." },
    { name: "Kanina", note: "A town on the Rewari side known for its historic buildings and for families with relatives in the army and police." },
    { name: "Nangal Chaudhry", note: "A smaller town in the district where online tuition is often the only way to reach a specialist tutor." },
    { name: "Ateli", note: "A district town toward Rewari, part of the same ecosystem of CBSE and Haryana Board schools and online learners." },
  ],

  schoolDisclaimer:
    "We could not confirm an IB World School or a Cambridge or Edexcel centre in Narnaul. The schools below are in nearby cities, listed only as regional context. IB Gram is an independent tutoring service, not affiliated with, endorsed by or paid by any of them; please confirm authorisation and admissions directly with each school.",
  schoolClusters: [
    {
      city: "Nearby: Gurugram belt",
      note: "To the north, the Gurugram area holds a dense cluster of international-curriculum campuses. The journey from Narnaul is long enough that most families consider boarding or relocating.",
      schools: ["Pathways World School", "Lancers International School", "Scottish High International School", "GD Goenka World School"],
    },
    {
      city: "Nearby: Jaipur",
      note: "South-west of Narnaul, Jaipur has schools advertising IB or Cambridge syllabuses, and is an option for families seeking a move within a region they know.",
      schools: ["Sanskar School, Sirsi Road", "Jayshree Periwal International School", "Mayoor School Jaipur"],
    },
    {
      city: "Narnaul and Mahendragarh district",
      note: "Schools here follow the Haryana Board or CBSE. Families who want an international syllabus usually add it through online tuition or a private-candidate entry.",
      schools: [],
    },
  ],

  modesIntro:
    "There are three practical ways families in Narnaul use an online tutor, each suited to a different situation.",
  modes: [
    {
      title: "Weekly online lesson",
      description: "A fixed slot with one tutor who follows the student's school or self-study plan.",
      bullets: [
        "Same tutor each week",
        "Questions collected between lessons",
        "Short written note after each class",
      ],
    },
    {
      title: "Mock-and-exam intensive",
      description: "More frequent lessons in the run-up to mocks or a May or November series, using timed papers and feedback.",
      bullets: [
        "Timed papers under exam conditions",
        "Mark scheme walk-throughs",
        "A quieter pace once papers begin",
      ],
    },
    {
      title: "Whole-syllabus teaching",
      description: "For private candidates, where the tutor builds and delivers the complete course.",
      bullets: [
        "A written scheme of work",
        "Regular short quizzes",
        "Help understanding exam-centre entry dates",
      ],
    },
  ],

  sections: [
    {
      heading: "Why would a Narnaul family look at IB or IGCSE at all?",
      paragraphs: [
        "It is a fair question. Narnaul's school system is strong in CBSE and Haryana Board, and its students do well in JEE, NEET, defence and civil service exams. A family that looks beyond that system usually has a clear reason, and understanding it helps us choose the right tutor.",
        "Some families have a posting that may move them, and want a curriculum that travels. Some have relatives abroad and expect a child to study there. Some want a less exam-centric learning style, with extended projects and written reasoning. Others want an international result at Class 10 before deciding on a stream.",
        "None of these needs a school in Narnaul, but all need the syllabus taught properly by someone who knows it. Because we could not confirm any IB or Cambridge school in the city, private tutoring fills that gap, whether alongside a local school or as the main route for a private candidate.",
        "This page is written for those families, and equally for parents still simply curious about what IB and IGCSE involve and whether they suit a child raised in the Ahirwal region.",
      ],
    },
    {
      heading: "Haryana Board, CBSE, IB or IGCSE: how do they compare for Narnaul students?",
      paragraphs: [
        "Haryana Board and CBSE are the norm in Narnaul, both with clear syllabuses, board exams at Classes 10 and 12 and close alignment with entrance tests. IB and IGCSE differ in style: they reward reasoning shown in writing, application to unfamiliar situations and, for IB, long independent projects.",
        "A JEE-trained student often finds IB Maths quicker in content but tougher in communication, because marks are given for clarity of method. A NEET-trained student finds IB Biology more conceptual than memory-based.",
        "Hindi is the working language at home across the region, and Haryanvi and Ahirwati are widely spoken too. English academic writing is the skill most students need to build, whichever board they choose.",
        "The table lays out the five options a family will weigh.",
      ],
      table: {
        caption: "Board choices for a Narnaul family",
        columns: ["Board", "Assessment", "Presence near Narnaul", "Fits a family that"],
        rows: [
          ["Haryana Board (HBSE)", "Annual board exams on state syllabus", "Common in government and many private schools", "Plans to stay within the state system"],
          ["CBSE", "Board exams plus internal marks", "Widespread in private schools", "Targets JEE, NEET or CUET with a national syllabus"],
          ["ICSE / ISC", "English-heavy with internal assessment", "Few schools", "Prefers broad English and humanities"],
          ["IB (PYP, MYP, DP)", "Criteria-based with coursework", "Not confirmed in Narnaul; nearest in Gurugram and Jaipur", "Expects overseas study or inquiry learning"],
          ["IGCSE (Cambridge / Edexcel)", "Tiered external exams over two years", "Private entry or a school elsewhere", "Wants an international Class 10 qualification"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Narnaul, and what affects the rate?",
      paragraphs: [
        "IB Gram does not publish prices. We give the rate in writing before you book, because one figure for every child would be wrong.",
        "What moves the rate is the course and level first, then how many lessons a week, then how much work the tutor does between them. A full syllabus for a private candidate takes more preparation than occasional help with one topic.",
        "The approach of the exam also matters; slots before May and November fill early. Teaching several subjects with one tutor can change the arrangement as well.",
        "There is a saving specific to a town like Narnaul. Reaching a specialist in person would mean a journey of several hours to Gurugram or Jaipur. Online, there is no fare, no overnight stay and no missed school day. The free trial lets you see the teaching before discussing money.",
      ],
      bullets: [
        "Course, level and exam board",
        "Lessons per week and length of the plan",
        "Whether the tutor supports a class or teaches everything",
        "Distance to the exam date",
      ],
    },
    {
      heading: "Online tuition, coaching institutes, local tutors or self-study: which suits Narnaul?",
      paragraphs: [
        "Narnaul has a busy coaching scene for JEE, NEET and government exams, and some students spend time in Kota, Sikar or Jaipur for it. That infrastructure is excellent for its purpose, but it does not teach IB or IGCSE.",
        "Online one-to-one tuition puts a specialist on the screen. For a disciplined student it is the cleanest way to learn a syllabus that no local class covers. For a student already stretched by coaching, it can be scheduled around it, on weekdays after institute hours or on Sunday mornings.",
        "Self-study works best in IGCSE, where past papers are plentiful. It is weaker for coursework-heavy IB subjects and for languages, where feedback matters.",
        "To be clear: home tuition here means lessons taken at home, online. No tutor visits a home in Narnaul.",
      ],
      table: {
        caption: "Study routes weighed for Narnaul students",
        columns: ["Route", "Best for", "Advantage", "Limit in Narnaul"],
        rows: [
          ["Online one-to-one tutor", "IB and IGCSE subjects of any level", "Specialist on the exact syllabus", "Needs a reliable connection"],
          ["JEE and NEET coaching institute", "Entrance exam preparation", "Intensive and structured", "Different from IB and IGCSE assessment"],
          ["Local private tutor", "CBSE or Haryana Board subjects", "Near and familiar", "Rarely experienced in international syllabuses"],
          ["Boarding in Gurugram or Jaipur", "Full-time classroom teaching", "Teachers and labs every day", "Cost and time away from family"],
          ["Self-study", "IGCSE students with discipline", "Flexible and low cost", "No feedback on writing or orals"],
        ],
      },
    },
    {
      heading: "The Narnaul year: school terms, fog, heat, festivals and exam series",
      paragraphs: [
        "Haryana's school year starts in April, earlier than most of India, and runs to March. The weather at Narnaul swings widely: summers average near 38 degrees and often exceed it in May and June, winters fall to around 4 degrees with fog on many mornings, and the region gets relatively little rain, about 570 mm a year.",
        "That climate shapes lesson times. Afternoons in May and June are too hot for concentration, winter mornings are foggy, and evenings are the reliable window across most of the year.",
        "Festivals matter too: Holi, Teej, Raksha Bandhan, Dussehra, Diwali and Gugga Navami are family occasions when lessons move. Many households also travel to Rajasthan temples during Navratri.",
        "IB Diploma exams fall in May and, for some schools, November. Cambridge runs May-June and October-November; Edexcel adds January. Private candidates register through an approved centre well ahead.",
      ],
      table: {
        caption: "A year in Narnaul for an IB or IGCSE student",
        columns: ["Window", "School and exams", "Local conditions", "Tutoring focus"],
        rows: [
          ["January to March", "Edexcel January series; annual exams", "Cold, foggy mornings", "Timed papers and revision logs"],
          ["April to June", "New school year; IB May exams; Cambridge May-June", "Severe heat; Gangaur and summer break", "Final revision, then reduced load"],
          ["July to September", "Coursework and investigations begin", "Monsoon showers; Teej and Raksha Bandhan", "Rebuilding and planning"],
          ["October to December", "Autumn series and retakes", "Clear, cool weather; Dussehra and Diwali", "Mock papers and gap-closing"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Narnaul go next?",
      paragraphs: [
        "Universities in India accept IB and IGCSE students through equivalence certificates issued by the Association of Indian Universities, and families should request it early. A Narnaul student is also within reach of Central University of Haryana in the district and of the many institutions in Delhi NCR and Jaipur.",
        "CUET-UG is an entry route to many central and participating universities, and IB Diploma students are eligible; subject combinations should be checked against each university's published requirements. JEE and NEET have their own subject conditions for IB and IGCSE students aiming at engineering or medicine, which affect Higher Level choices.",
        "For study abroad, IB and IGCSE results are directly recognised in the UK, Canada, Singapore, Australia and elsewhere. A Narnaul student with this plan should pick Diploma subjects that match the degree and build coursework early.",
        "For families planning defence or civil service paths, IGCSE or IB followed by an Indian degree remains possible, though the route needs more paperwork. A tutor can explain the subject requirements in general terms and point to official sources.",
      ],
      bullets: [
        "AIU equivalence certificate requested early",
        "CUET-UG eligibility and subject rules checked per university",
        "JEE and NEET subject conditions planned before DP choices",
        "Overseas applications based on predicted and final results",
      ],
    },
    {
      heading: "How is IB Maths and science taught online to a student in Narnaul?",
      paragraphs: [
        "A digital whiteboard carries most of the teaching. The tutor poses a problem, the student writes the solution, and the two compare. Analysis and Approaches sessions lean on calculus and proof; Applications and Interpretation sessions on statistics and modelling.",
        "Science lessons mix concept, worked example and exam question. Students used to JEE-style problems often need to slow down and write explanations in words, since IB marks reasoning.",
        "The internal assessment in each science requires an investigation. We coach a student toward a question they can test with materials available at home or data from public sources, explaining what the criteria reward without doing the work.",
        "A written note after each lesson records topics covered and homework set, which keeps parents informed without adding to their workload.",
      ],
    },
    {
      heading: "How do Core and Extended IGCSE tiers and subject choices work for a student in Narnaul?",
      paragraphs: [
        "Most IGCSE subjects offer a Core tier with a lower top grade and an Extended tier opening the full range. A student aiming for Higher Level IB Maths or sciences, or for a competitive pathway, should sit Extended.",
        "A typical Narnaul combination is Mathematics, two or three sciences, English, Hindi and perhaps Economics or Business Studies. Additional Mathematics is valuable for those heading into engineering.",
        "The choice between Cambridge and Edexcel should be made early. The papers differ in structure and wording, and mixing them wastes time. A tutor can compare both specifications.",
        "A private candidate enters through an approved centre, and the science practical component is usually taken as an alternative-to-practical paper, which can be taught effectively online.",
      ],
    },
  ],

  process: [
    { title: "Share the details", description: "Board, subject, level, exam session, and whether the student studies at a school or alone." },
    { title: "Get a tutor shortlist", description: "Tutors with experience on that exact syllabus, with a note on why each fits." },
    { title: "Sit a free lesson", description: "A real topic, taught live, with no cost and no obligation." },
    { title: "Fix the plan and rate", description: "The first month's schedule and the rate are written down before you agree." },
    { title: "Review as you go", description: "Notes after each class, reviews every few weeks, and a swap if it is not working." },
  ],

  whyPoints: [
    { title: "Syllabus-first matching", description: "Board, course and level are pinned down before a tutor is named." },
    { title: "Suited to districts without an IB school", description: "Tutors who can teach a complete subject where no local class exists." },
    { title: "Try before committing", description: "The free lesson shows you the teaching first." },
    { title: "Clear limits on help", description: "Explanation and feedback, never writing the student's coursework." },
    { title: "Informed parents", description: "Written notes and regular reviews, so you know what is happening." },
    { title: "Freedom to change", description: "No ties to schools or boards, and an easy tutor swap." },
  ],

  tutorsIntro:
    "Each tutor profile lists the boards, levels and subjects actually taught. For Narnaul we favour tutors who can explain well in Hindi and English and who are used to students balancing international syllabuses with coaching or school.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Narnaul?",
      answer:
        "We could not confirm one. No school in Narnaul is known to us as an IB World School or a Cambridge or Edexcel centre. The nearest established campuses are around Gurugram and in Jaipur. Please confirm any school's current status with the school itself, and use online tutoring to bridge the distance.",
    },
    {
      question: "Do tutors visit homes in Narnaul?",
      answer:
        "No. Home visits run only in Gurugram and parts of Delhi NCR, and Narnaul is not part of that service. Here, private tuition from home means a one-to-one lesson your child takes at home over video, with a tutor based elsewhere in India and teaching on Indian Standard Time.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Narnaul?",
      answer:
        "The rate depends on subject, level, lessons per week and preparation needed. We do not publish prices and instead quote the rate in writing before you book. The first lesson is free, and because it is online you pay no travel to Gurugram or Jaipur.",
    },
    {
      question: "Can a Narnaul student take IGCSE exams as a private candidate?",
      answer:
        "Generally yes, through an approved exam centre, often in a larger city, with entry deadlines months ahead. IB Gram does not register candidates or run exams, but a tutor can teach the syllabus and help you understand the timeline for Cambridge or Edexcel entry.",
    },
    {
      question: "My child boards in Gurugram. Can you help during holidays?",
      answer:
        "Yes, and it is a common request. A tutor can keep a subject moving during breaks at home, working from the boarding school's syllabus and pace. Holiday lessons are often a denser schedule than term-time ones, and we can pause them around festivals and family travel.",
    },
    {
      question: "Will a tutor write the Internal Assessment or Extended Essay?",
      answer:
        "No. Tutors coach and never write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework. They can help a student choose a workable question, explain the criteria and react to the student's own drafts. The submitted work must be the student's alone.",
    },
    {
      question: "How do lessons fit around JEE or NEET coaching?",
      answer:
        "We schedule them around it. Lessons usually run on weekday evenings after institute hours or on Sunday mornings, and the tutor adjusts workload near coaching tests. If the load becomes too heavy, we reduce frequency rather than let quality slip.",
    },
    {
      question: "Are lessons in Hindi or English?",
      answer:
        "Mostly English, because IB and IGCSE exams are in English, but a tutor can explain a difficult idea in Hindi first if that helps. Hindi language subjects are taught in Hindi. We confirm the mix in the trial lesson.",
    },
    {
      question: "How do Cambridge and Edexcel IGCSE differ?",
      answer:
        "Both are two-year international qualifications, but their codes, paper formats and command words differ. Cambridge has May-June and October-November sessions; Edexcel adds January. Pick one board and practise only its papers. A tutor can compare both specifications before you register.",
    },
    {
      question: "Which IB subjects do your tutors teach?",
      answer:
        "Most Diploma subjects, including both Maths courses, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, Psychology, History, English and Hindi, plus TOK and Extended Essay coaching. Tell us the exact course and level and we confirm availability before the trial.",
    },
    {
      question: "How early should we start before an exam?",
      answer:
        "At least two terms before the exam, and sooner for a private candidate teaching a subject from scratch. Registration deadlines also come early. Starting in July for a May session leaves room to cover the content, practise papers and avoid the hottest months.",
    },
    {
      question: "Can one tutor teach both IB and IGCSE?",
      answer:
        "Sometimes, especially in Maths and sciences where the content overlaps, but a specialist per syllabus is usually better. If your child is on IGCSE now and expects to join IB later, one tutor can give continuity. We discuss this during matching.",
    },
    {
      question: "Do you teach younger children on PYP?",
      answer:
        "Yes, in short regular sessions on reading, number sense and expressing ideas in English. PYP has no external exams, so the goal is confidence. For a child whose family may be posted to a city with a PYP school, we focus on the skills the first term demands.",
    },
    {
      question: "What if the tutor does not suit my child?",
      answer:
        "We change the tutor with no penalty. Tell us what was not working, whether pace, style or depth, and we propose a replacement. A good fit matters most for a private candidate who depends on one person for the whole syllabus.",
    },
    {
      question: "Is IB Gram linked to any school or exam board?",
      answer:
        "No. IB Gram is an independent tutoring service, not affiliated with the IB, Cambridge, Pearson or any school named on this page. School names appear only so families can see where international curricula are taught near Narnaul.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com with the board, subject, level and exam session. We reply with a shortlist and arrange a free trial lesson at a time that suits your household in Narnaul.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "All the cities IB Gram covers online." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only place tutors visit students at home." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How tutors are matched to IB subjects." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects and tiers." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, core and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "DP subjects paired with career study." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "AA versus AI explained." },
    { label: "Admissions and test preparation", href: "/admissions/test-prep/", description: "Support for entrance and admission tests." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and board." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Book a free lesson." },
    { label: "IB and IGCSE tutoring in Rewari", href: "/rewari/", description: "A neighbouring Haryana city covered online." },
    { label: "IB and IGCSE tutoring in Sikar", href: "/sikar/", description: "A nearby Rajasthan coaching city served online." },
    { label: "IB and IGCSE tutoring in Bhiwani", href: "/bhiwani/", description: "Another Haryana city covered the same way." },
  ],

  closingHeading: "Arrange a free trial lesson for your Narnaul student",
  closingBody:
    "Tell us the board, subject, level and the exam you are heading for. We will suggest a tutor who has taught the course, set up a free trial for an evening or Sunday morning, and be honest about whether online lessons suit your child alongside school and coaching. You pay nothing and sign nothing for that first class.",
};
