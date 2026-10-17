import type { CitySeoPage } from "../types";

/**
 * Vyara, Tapi district, Gujarat. Facts from Wikipedia (Vyara, Tapi district, Kakrapar Atomic Power Station).
 * Edustoke (Surat listing) shows one school in Vyara, the Seventh Day Adventist High School at Tichakpura,
 * as ICSE/ISC day-cum-boarding; it has no IB or Cambridge school for Vyara or Tapi district, so stripSchools
 * is empty. Clusters name Surat (Fountainhead School: IB; P. P. Savani Cambridge International School:
 * IGCSE, both confirmed on Edustoke; Aarth Universal School reused from surat.ts) and Vadodara and Ahmedabad
 * (names reused from those pages). Online only: home visits run only in Gurugram and parts of Delhi NCR.
 */
export const vyara: CitySeoPage = {
  slug: "vyara",
  countryName: "Vyara",
  countryNameLong: "Vyara, Gujarat",
  demonym: "Vyara",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weeknight slots after school and tuition, lighter weeks for Navratri, Diwali and Uttarayan, and spare sessions for heavy monsoon days",
  lastUpdated: "2026-09-21",
  state: "Gujarat",
  stateCode: "IN-GJ",
  geo: { latitude: 21.1167, longitude: 73.4 },
  alternateNames: ["Vyara Tapi", "Vyara Gujarat", "Tapi district", "Vyara taluka"],
  wikipedia: "https://en.wikipedia.org/wiki/Vyara",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Vyara | Online Tuition at Home",
  metaDescription:
    "Online IB and IGCSE tutors for Vyara, Tapi district: private live lessons across PYP, MYP, DP and IGCSE, no drive to Surat needed, plus a free trial lesson.",
  h1: "IB and IGCSE Tutors in Vyara: Private Tuition at Home, Delivered Online",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR VYARA AND TAPI DISTRICT",
  heroSubtitle:
    "For Vyara families, home tuition in IB and IGCSE means a scheduled private lesson on a screen at home, with a subject specialist who has taught the exact syllabus, and without the 65-kilometre run to Surat that an in-person class would demand. The lesson starts on time whether the highway is jammed or the Tapi is in spate.",
  primaryKeyword: "IB and IGCSE tutors in Vyara",
  imageAltText: "A Vyara student in Tapi district, Gujarat, revising IB Physics at a home desk during a live video lesson with a tutor",
  secondaryKeywords: [
    "IB tutor Vyara",
    "IGCSE tutor Vyara",
    "IB home tuition Vyara",
    "IGCSE home tuition Vyara",
    "IB private tuition Vyara",
    "IB Maths tutor Vyara",
    "IGCSE Maths tutor Vyara",
    "IB Physics tutor Vyara",
    "IB Chemistry tutor Vyara",
    "IB Biology tutor Vyara",
    "IB DP tutor Vyara",
    "IB MYP tutor Vyara",
    "IB PYP tutor Vyara",
    "IGCSE online tuition Vyara",
    "IB tutor Tapi district",
    "IGCSE tutor Tapi Gujarat",
    "Cambridge IGCSE tutor Vyara",
    "Edexcel IGCSE tutor Vyara",
    "online IB tuition South Gujarat",
    "IB tutor Songadh",
    "IB tutor Nizar",
    "IGCSE tutor Valod",
    "IB Economics tutor Vyara",
    "IB Geography tutor Vyara",
    "IB Gujarati A tutor Vyara",
  ],

  heroTrustPoints: [
    "Lessons are live on video, so the road to Surat plays no part in your child's timetable",
    "Matching starts from your child's paper code and tier, which is what an examiner actually marks",
    "Your first lesson is free, and the rate is written down before you commit to anything",
    "IB Gram is a separate, independent service, unconnected to any school, board or examining body mentioned here",
  ],
  heroStats: [
    { value: "Live", label: "Private video lessons" },
    { value: "PYP to DP", label: "IB coverage" },
    { value: "2 boards", label: "Cambridge and Edexcel IGCSE" },
    { value: "Free trial", label: "No fee to begin" },
  ],

  intro: {
    heading: "Learning an international syllabus at the district headquarters beside the Tapi",
    paragraphs: [
      "Vyara is the headquarters of Tapi district, created in 2007 from talukas that once belonged to Surat district. The town stands 69 metres above sea level on the national highway, about 65 kilometres from Surat, with roughly 50,800 people at the 2011 census and a literacy rate of 74 per cent. Around it lie the district's seven talukas, Vyara, Songadh, Nizar, Valod, Uchhal, Dolvan and Kukarmunda, largely forest and farming country where Scheduled Tribe communities such as the Gamit, Chaudhari and Vasava form most of the population.",
      "Schools in and around Vyara follow the Gujarat board or CBSE, and directories also list a Seventh Day Adventist day-and-boarding school at Tichakpura that teaches ICSE and ISC. We found no IB or Cambridge school in the town or the district. The closest confirmed campuses are in Surat, which makes IB and IGCSE tutors in Vyara a practical alternative to boarding or relocating, especially for a child whose school career is already under way.",
      "Home tuition needs an honest definition here. Our tutors do not travel to Vyara, because in-person sessions are available solely in Gurugram and parts of Delhi NCR. Each lesson is therefore live and online, at a weekly time the family picks. What stays is the part parents value: one teacher, one student, continuity from week to week, and a written note after every session.",
      "Tutors coach; they never write. An IA, Extended Essay, TOK essay or coursework piece has to come from the student's own hand, and a tutor's job is to explain the marking criteria and respond to drafts. IB Gram is an independent service and is separate from the IB, Cambridge, Pearson and every school named here.",
    ],
    bullets: [
      "Tutoring across every IB stage, from PYP to CP",
      "Cambridge IGCSE at Core and Extended, Edexcel at Foundation and Higher",
      "One regular tutor teaching privately to your home, online",
      "A free opening lesson, then a written plan with the rate stated",
    ],
  },

  programmesIntro:
    "Vyara students reach the IB through a move, a transfer or a cousin's school in Surat. These are the four programmes, described through what a student here usually needs first.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, 3 to 11 years",
      description:
        "Inquiry replaces rote: pupils explore themes through units that mix subjects, then present an Exhibition at the end of the primary years.",
      countryNote:
        "Many Vyara children grow up with Gujarati at home and, in tribal families, Gamit, Chodri or Vasavi as well, so PYP tutoring spends time on spoken English, reading aloud and building questions from curiosity.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Classes 6 to 10, 11 to 16 years",
      description:
        "Learning is organised into eight subject groups and assessed on criteria, with a Personal Project at the end where each student researches and produces something of their own choosing.",
      countryNote:
        "Students from GSEB classrooms know the textbook well, while MYP asks them to justify, compare and reflect, so early sessions go to sample answers at different criterion levels.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Classes 11 and 12, 16 to 19 years",
      description:
        "Six courses, three of them usually taken at Higher Level, are completed alongside the core of Extended Essay, TOK and CAS. Grades come out after the May or November session as a total out of 45.",
      countryNote:
        "With no Diploma school in the district, students arrive at the Diploma by boarding in Surat or further away, and tutoring before the move helps with subject levels and the Extended Essay plan.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Classes 11 and 12, 16 to 19 years",
      description:
        "Two or three Diploma courses are taught with a career pathway that the school selects, plus a reflective project and language work.",
      countryNote:
        "We have not come across a school near Vyara that runs CP, which is itself unusual in India, and it is mentioned so that a family meeting it elsewhere can ask us about the academic courses.",
    },
  ],

  subjectsIntro:
    "These IB courses come up most often with Vyara families. Tutors are chosen for mastery of the subject and for having taught students in smaller towns.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions and calculus, vectors and proof, with neat written working and a search for an Exploration topic that can be researched without a university library." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data, probability, modelling and money maths with technology, a natural fit for students drawn towards commerce, Surat's trading world or social science." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, electricity and the nuclear and energy topics, with the Kakrapar power plant nearby as a concrete talking point." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Moles, bonding, energetics, equilibrium and organic chemistry, with practical method explained on video for students without a laboratory." },
    { name: "IB Biology", levels: "HL / SL", description: "Life processes from molecules to ecosystems, with the forests of the Purna sanctuary belt as a source of ecological questions." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Water, energy and land use, studied through the Tapi basin, its dams and the people who depend on them." },
    { name: "IB Geography", levels: "HL / SL", description: "River basins, resources and change, with Ukai and Kakrapar as regional case material and practice on extended responses." },
    { name: "IB Economics", levels: "HL / SL", description: "Market models, trade and development, using textile, diamond and farm-produce markets for commentaries." },
    { name: "IB Business Management", levels: "HL / SL", description: "Exam questions built on business cases, plus a research project on a real firm, which for many students means a family shop, workshop or dairy." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysis of unseen texts, comparative essays and oral practice for students whose strongest language is Gujarati." },
    { name: "IB Gujarati A Literature", levels: "SL", description: "Reading novels, stories and poems in Gujarati and writing literary commentary, for students whose school arranges the course." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Language acquisition in Hindi, with regular listening, reading, writing and speaking practice." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Problem solving with algorithms, data structures and a documented program aimed at a real everyday task." },
    { name: "IB Psychology", levels: "HL / SL", description: "Brain, mind and culture, with careful handling of studies in timed essays." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Reading the prescribed titles closely, preparing the exhibition and structuring an essay that only the student writes." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Shrinking a broad interest into one researchable question, with comments on plan and structure while the essay stays the student's own." },
  ],

  igcseSubjectsIntro:
    "IGCSE in Vyara is usually taken beside a Gujarat board or CBSE course, so the weekly plan has to leave room for school tests and the March board exams. Every tutor is chosen for the syllabus code and tier in use.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with calculator and non-calculator papers practised as separate skills." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Class 9 to 10", description: "Functions, differentiation, logarithms and trigonometry, a strong runway to Higher Level IB Maths." },
    { name: "Edexcel International GCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel phrasing and mark schemes taught on their own, so nothing is mixed up with Cambridge habits." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, forces, electricity and waves, with questions on experimental method rehearsed alongside theory." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atoms, equations, acids, rates and organic compounds, with identification tests learned in a fixed sequence." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, nutrition, inheritance and ecology, with interpretation of graphs and tables built up steadily." },
    { name: "IGCSE Combined Science 0653", levels: "Class 9 to 10", description: "Three sciences in one qualification, for students who need to balance the timetable." },
    { name: "IGCSE Economics 0455", levels: "Class 9 to 10", description: "Basic economic problems, markets and policy, illustrated with textiles, farm produce and small-town trade." },
    { name: "IGCSE Business Studies 0450", levels: "Class 9 to 10", description: "Business activity, finance and marketing, applied to case firms of the kind found in a trading district." },
    { name: "IGCSE Geography 0460", levels: "Class 9 to 10", description: "Rivers, settlement and development, with the Tapi basin offering examples for the enquiry-style questions." },
    { name: "IGCSE English as a Second Language 0510", levels: "Class 9 to 10", description: "Listening, speaking, reading and writing for students who use Gujarati or a tribal language at home." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Class 9 to 10", description: "Reading and writing tasks in Hindi, suited to students who want an additional language on the certificate." },
    { name: "IGCSE Computer Science 0478", levels: "Class 9 to 10", description: "Logic, algorithms and Python, with written-paper practice on tracing and pseudocode." },
  ],

  regionsTitle: "Vyara town, Tapi district talukas and nearby places we support online",
  regionsIntro:
    "Online lessons make geography a matter of timing and signal: the distance a student would otherwise cover, the hours lost to buses or rain, and the places where the connection is weakest. Families write to us from these places.",
  regions: [
    { name: "Vyara town centre and Station Road", note: "The busy core where the old and new bus stands sit, home to shopkeepers, teachers and officials, and the easiest area for planning evening slots." },
    { name: "Tichakpura", note: "The locality where directories place the town's Seventh Day Adventist day-and-boarding school, a handy reference point for after-school timing." },
    { name: "The Tapi river front", note: "A public space beside the river, opened in 2018, where families walk in the cooler evenings and study is fitted around sunset." },
    { name: "Old fort area", note: "The historic part of Vyara, with the fort that recalls the Gaekwad era, where older families live close to the market." },
    { name: "Songadh", note: "A taluka town on the road towards Maharashtra, in the same part of the district as the Ukai dam, where a bus to Vyara eats into the day." },
    { name: "Nizar", note: "Another of the district's seven talukas, where online lessons spare students a long trip to reach a specialist." },
    { name: "Valod", note: "A taluka town on the side of the district that faces Bardoli and Surat, where families already look towards Surat for schools." },
    { name: "Uchhal", note: "A taluka where distance from Vyara makes video lessons the practical choice for anything beyond the local school." },
    { name: "Kukarmunda and Dolvan", note: "Forest-side talukas, where a power or signal cut can end a lesson, so a back-up slot is written into every plan." },
    { name: "Ukai dam area", note: "The dam township on the Tapi, a landmark that IB Geography and ESS students can use for water-management case studies." },
    { name: "Kakrapar and Mandvi", note: "The area around the atomic power station and the Tapi weir, where families linked to the plant are used to postings elsewhere." },
  ],

  schoolDisclaimer:
    "IB Gram operates independently of the IB, Cambridge, Pearson and every school on this page. Surat and other campuses are named only to show where these syllabuses are taught in the region, a mention is not a recommendation, and no school in Vyara is presented as offering the IB or IGCSE.",
  schoolClusters: [
    {
      city: "Vyara and Tapi district",
      note: "Directories list a Seventh Day Adventist day-and-boarding school at Tichakpura teaching ICSE and ISC, alongside Gujarat board and CBSE schools. We found no IB or Cambridge school in the district.",
      schools: [],
    },
    {
      city: "Nearby: Surat",
      note: "About 65 kilometres away, Surat has the closest confirmed campuses: an IB school on the Rander-Dandi Road, an IGCSE school with day and boarding places at Mota Varachha, and a third option. At this distance a place means boarding.",
      schools: ["Fountainhead School", "P. P. Savani Cambridge International School", "Aarth Universal School"],
    },
    {
      city: "Nearby: Vadodara and Ahmedabad (boarding or relocation)",
      note: "Gujarat's larger cities have established IB and IGCSE schools for families willing to move or board further afield. IB Gram does not arrange admissions, and each school sets its own terms.",
      schools: ["Navrachana International School", "Ahmedabad International School"],
    },
  ],

  modesIntro:
    "No tutor visits homes in Vyara, since in-person teaching is restricted to Gurugram and parts of Delhi NCR, so every mode is online. They differ in what a family needs: a steady weekly plan, a sprint towards an exam, or a bridge to a school in another city.",
  modes: [
    {
      title: "Weekly private lessons",
      description:
        "A set weekday evening, a single tutor and a running record of topics covered, shared with parents in a brief note.",
      bullets: [
        "The same tutor in the same slot every week",
        "Works around school and tuition timings",
        "Spare slots kept for heavy-rain days",
        "A written note after each session",
      ],
    },
    {
      title: "Exam-season sprint",
      description:
        "Concentrated sessions before the May or November IB papers or a Cambridge or Edexcel series, with timed papers and mark-scheme review.",
      bullets: [
        "A paper-by-paper countdown",
        "Timed questions in exam conditions",
        "Line-by-line review of lost marks",
        "A gentler week around Navratri or Diwali",
      ],
    },
    {
      title: "Bridge to Surat or another IB school",
      description:
        "For students about to board or move, and for those adding IGCSE subjects alongside a GSEB or CBSE course.",
      bullets: [
        "A diagnostic lesson before any plan",
        "Confidence in English and Maths first",
        "A decision on which subjects move across first",
        "Notes that the incoming school can read",
      ],
    },
  ],

  sections: [
    {
      heading: "Do Vyara or Tapi district schools offer the IB or Cambridge IGCSE?",
      paragraphs: [
        "None that we could find. Directories list Gujarat board and CBSE schools across Tapi district, plus a Seventh Day Adventist day-and-boarding school at Tichakpura in Vyara that teaches ICSE and ISC. None is shown as an IB or Cambridge school, and the nearest confirmed campuses are in Surat, about 65 kilometres away.",
        "In Surat, directories list Fountainhead School, on the Rander-Dandi Road in Olpad taluka, as an IB school, and P. P. Savani Cambridge International School, at Mota Varachha, as a Cambridge IGCSE school with day and boarding places. Aarth Universal School is a third name on our Surat page. All three sit well beyond a daily commute from Vyara.",
        "A 65-kilometre road journey each way is not a school run, so a family here has three honest choices: board in Surat or further afield, move house, or stay and build the international syllabus around the child's current school with a tutor. The third is the cheapest to try and the easiest to reverse, which is why it appeals to families who are unsure about the IB.",
        "Whatever you decide, ask any school in writing which programme it teaches on which campus and from which class. A boarding school in Vyara and a Surat IB campus will each answer differently, and the tutoring plan should follow the school's actual timetable, not a brochure.",
      ],
    },
    {
      heading: "Which Vyara families look into international-curriculum tuition?",
      paragraphs: [
        "A mixture of public-service, professional and business households. As the district headquarters since 2007, Vyara has officials, teachers, doctors and engineers who arrive on postings and leave on transfers, and their children need a syllabus that can travel with them. That portability is the strongest argument for the IB and IGCSE here.",
        "A second group is connected to the Kakrapar Atomic Power Station on the Tapi near Mandvi. Families of engineers and technical staff at a plant like this tend to be used to postings in other states, and the Diploma's international structure and IGCSE's widely recognised certificates suit households that expect another move.",
        "A third group has business ties to Surat, whose textile and diamond trades draw many South Gujarat families into commerce. Parents who run shops, workshops or offices there often want a child who can study management or engineering outside Gujarat, and they compare the IB with GSEB and CBSE before choosing.",
        "Finally, the district is home to families from many communities, Gamit, Chaudhari, Vasava, Dhodia, Christian, Muslim, Jain and Parsi among them, and curiosity about an international qualification is not limited to any one of them. Some begin with IGCSE English or Maths to find out whether the style suits their child.",
      ],
    },
    {
      heading: "Which board suits a Vyara student: GSEB, CBSE, ICSE, IGCSE or the IB?",
      paragraphs: [
        "They ask for different things. GSEB rewards the textbook and careful written answers, CBSE adds application questions on the NCERT books, and ICSE leans on broad English, while IGCSE and the IB reward reasoning applied to new material, with the IB adding essays, internal assessments and a core.",
        "In Gujarat, Class 10 and Class 12 end in March board exams, and Class 12 science students also sit GUJCET for state engineering and pharmacy admissions, while medicine runs through NEET. Timed recall and entrance-test habits are useful, but they are not what IGCSE or IB papers measure.",
        "A student moving across needs a bridge rather than a leap: improve the written explanation, practise command terms and learn to use the syllabus document as a checklist. A few months of targeted lessons in Maths, Science and English are usually enough to show whether the student is comfortable.",
      ],
      table: {
        caption: "Boards a Vyara student may meet",
        columns: ["Board", "Around Vyara", "Usual exam peak", "Where it leads"],
        rows: [
          ["GSEB (Gujarat board)", "Government, aided and private schools across the district", "SSC and HSC in March; GUJCET for science admissions", "State colleges, ACPC counselling, NEET and JEE routes"],
          ["CBSE", "Private and residential schools", "Board exams between February and April", "CUET-UG, JEE, NEET"],
          ["ICSE and ISC", "An Adventist day-and-boarding school listed at Tichakpura", "Exams in February and March", "Indian universities and many overseas"],
          ["Cambridge or Edexcel IGCSE", "Not confirmed locally; Surat is nearest", "Series in February-March, May-June and October-November", "Class 11, A Level or the IB Diploma"],
          ["IB Diploma", "Not confirmed locally; Surat is nearest", "Papers in May and in November", "Applications abroad; AIU equivalence and CUET-UG at home"],
        ],
      },
    },
    {
      heading: "What decides the cost of IB and IGCSE tuition for a Vyara family?",
      paragraphs: [
        "Four things: subject and level, sessions per week, how much of the syllabus is new, and how far ahead of an exam you begin. We publish no fixed rates because the mix differs for every child, and the quote reaches you in writing before the free trial.",
        "The subject matters because a course like HL Physics in the IB or Additional Mathematics at IGCSE needs tutors with rare depth, while others are easier to staff. Weekly sessions multiply the monthly figure, and a long lead time before papers allows gentler pacing where a short run-up may call for extra sessions.",
        "Distance plays no part. A student in Nizar or Kukarmunda is taught exactly like one in Vyara town, and nobody pays for a tutor to drive 65 kilometres to Surat, because nobody does. The one cost we plan for is interruption: a heavy monsoon day or a long power cut moves a lesson to another slot in the same week.",
        "Compare the total, not just the hourly figure. A cheap group batch in Surat, plus the bus fare and the lost afternoon, is not always cheaper than a focused one-to-one hour at home, and the free trial shows which suits your child.",
      ],
      bullets: [
        "Rare specialisms and Higher Level courses are dearer to staff",
        "Sessions per week scale the monthly total",
        "New topics need more teaching hours than revision",
        "Distance and travel are never part of the price",
      ],
    },
    {
      heading: "Online tutor, Surat coaching, boarding or self-study: which fits a Vyara family?",
      paragraphs: [
        "It depends on what you need. Surat coaching suits GSEB, NEET and JEE subjects, boarding suits a full IB or IGCSE classroom, self-study suits a driven student who only needs practice, and an online tutor suits a student who wants the exact syllabus while living at home.",
        "Surat has large coaching institutes for entrance exams, but few teachers with experience of IGCSE Extended papers or IB Higher Level courses. The journey also consumes hours of a school week, and the ride home in the evening can be long.",
        "Online tutoring puts a specialist on a screen at home, and the match can be made from anywhere in India. It needs a steady connection and steady effort between lessons, so the free trial includes a connection check and a frank talk about how the student studies.",
      ],
      table: {
        caption: "Ways a Vyara student can follow an international syllabus",
        columns: ["Option", "Good for", "Trade-off"],
        rows: [
          ["Online private tutor", "The exact IB or IGCSE syllabus while living at home", "Depends on the connection and self-discipline"],
          ["Coaching in Surat", "GSEB, NEET, JEE and board subjects", "Travel time, and few IB or Cambridge specialists"],
          ["Boarding at an IB or IGCSE school", "A full classroom with classmates", "Family separation and the highest cost"],
          ["Self-study from past papers", "A driven student who needs practice", "No explanation of where marks were lost"],
        ],
      },
    },
    {
      heading: "How do the monsoon, the summer heat, Navratri and Uttarayan shape the Vyara study year?",
      paragraphs: [
        "They set the pace of each term. South Gujarat's heavy monsoon runs from mid-June to September, summer heat peaks before it, Uttarayan arrives on 14 January, and Navratri and Diwali interrupt the autumn. The plan leaves spare slots for rain, lighter weeks for festivals and heavier weeks for exam preparation.",
        "The monsoon brings swollen roads and river caution, since dam releases on the Tapi matter to a district that sits below Ukai and beside Kakrapar. Power and data can drop in a storm, so every plan keeps a back-up slot and a phone hotspot as a fallback.",
        "Festivals are big here. Navratri means nine nights of garba, when families are out late and evening lessons are best moved to afternoons or skipped, Diwali and the Gujarati New Year follow within a fortnight, and Uttarayan fills the rooftops with kites. Holi carries special weight for tribal communities in South Gujarat, alongside Christmas and Eid for others, and the written plan marks each date.",
        "March boards for Classes 10 and 12, then IB papers in May and the Cambridge and Edexcel June series, crowd the hottest months into the hardest stretch of the year, so heavy revision weeks come ahead of them and afternoon sessions stay short.",
      ],
      table: {
        caption: "A study year in Vyara",
        columns: ["Part of the year", "What is happening around Vyara", "How lessons adapt"],
        rows: [
          ["January to March", "Uttarayan, Holi, GSEB board exams and rising heat", "Mock papers, pre-board revision and evening slots"],
          ["April to June", "Summer heat, IB papers in May, the Cambridge and Edexcel June series, school holidays", "Dawn or late-evening lessons and timed papers"],
          ["July to September", "Heavy monsoon, a new school term, Ganesh Chaturthi", "Steady teaching and spare slots for storms and power cuts"],
          ["October to December", "Navratri, Diwali and the Gujarati New Year, the November IB session", "Light festival weeks, results review and resits"],
        ],
      },
    },
    {
      heading: "Where can a Vyara student go after IB or IGCSE?",
      paragraphs: [
        "Across Gujarat, India and abroad. An IB Diploma stands in for Class 12 at Indian universities and CUET-UG is open to its holders, whereas IGCSE is a Class 10 level qualification that needs Class 11, A Level or the Diploma next.",
        "Nearby options include Veer Narmad South Gujarat University and SVNIT in Surat, Uka Tarsadia University in Bardoli, Navsari Agricultural University and the Government Medical College in Surat. Further afield lie IIT Gandhinagar, NID and CEPT University in Ahmedabad, and institutions in Mumbai and Pune.",
        "Before Class 11 subjects are locked, check the latest JEE, NEET-UG and Gujarat ACPC notes for international boards, because document requirements and eligibility conditions for IB and Cambridge students are updated from time to time.",
        "For study abroad, admissions officers in the UK, Canada, Australia and the USA know the IB and A Level well, and Higher Level Maths and the sciences remain the most flexible choices. Students drawn to Surat's business world often pair Economics or Business Management with Maths.",
      ],
      bullets: [
        "Indian universities take the IB Diploma in place of Class 12, and CUET-UG is open to it",
        "IGCSE on its own stops at Class 10 and needs a next step",
        "Re-read JEE, NEET and ACPC conditions every admission year",
        "Choose Higher Level subjects to match the degree you want",
      ],
    },
    {
      heading: "How are IB Maths and the sciences taught online to a Vyara student?",
      paragraphs: [
        "Maths starts with the choice of course, AA for engineering and pure science and AI for business, geography and psychology, and the sciences start with the habits IB papers reward: data reading, command terms and written explanation. Practicals are adapted to what a student can do at home, including simulations and open datasets.",
        "Physics has a neighbour with real relevance. The Kakrapar Atomic Power Station makes the nuclear and energy topics concrete, although we teach the syllabus and not plant details. Mechanics and electricity get the same care as nuclear physics, since marks come from method as much as from knowledge.",
        "Chemistry and Biology lean on practical skills. Without a school lab, an Internal Assessment can rest on a simulation, a public dataset, a household experiment or an observation such as water quality from a nearby source. The tutor explains design and evaluation, and the student does the work and the writing.",
        "In Maths, we train the written working. IB marking rewards notation, reasoning and stated assumptions, and the Exploration is a piece of personal mathematical writing that only the student can produce. Past-paper questions and self-marking make the standard visible.",
      ],
    },
    {
      heading: "How do we choose IGCSE tiers and subjects for a Vyara student?",
      paragraphs: [
        "We set a short Extended or Higher-level diagnostic and let the result decide. Students who might take Maths or the sciences further should usually aim for Extended (Cambridge) or Higher (Edexcel), because the lower tiers limit the top grade and the courses that follow are built for students who have met the harder content.",
        "Subjects follow the student's direction. A future doctor should keep Physics, Chemistry and Biology separate, a student heading for Surat's trading world might pair Mathematics with Business Studies and Economics, and a student who likes maps and rivers can add Geography, where the Tapi basin offers good examples.",
        "English matters in every case. Students from Gujarati-medium classes are often stronger at reading than at writing long answers, so English practice, in either the Second Language or First Language paper, sits beside the content subjects from the start.",
      ],
    },
  ],

  tutorsIntro:
    "These tutors teach IB and IGCSE online to students across Tapi district, from Vyara town to the Songadh, Nizar and Valod talukas, and they are used to students who change schools or boards.",

  process: [
    { title: "Share the student's details", description: "Tell us the board, subject, level, school and any deadline, such as an exam series or a planned move to Surat." },
    { title: "Look over the shortlist", description: "We suggest tutors with the right syllabus experience and explain each choice in a line." },
    { title: "Try the free lesson", description: "A real topic is taught live, and you decide afterwards, with no charge and no obligation." },
    { title: "Sign off on the plan", description: "Weekly slots, back-up slots for monsoon days, topics and the rate are agreed in writing before regular lessons start." },
    { title: "Review as you go", description: "Every few weeks we look at progress together, and a tutor can be replaced if the fit is poor." },
  ],

  whyPoints: [
    { title: "Clear about local schools", description: "We say plainly that no IB or Cambridge school was found in Tapi district, and show where the nearest ones are." },
    { title: "Planned around South Gujarat", description: "Monsoon back-up slots, festival weeks and GSEB exam months are built into the plan." },
    { title: "Matched to your paper", description: "Board, syllabus code and tier decide the match, not a broad subject label." },
    { title: "Free before paid", description: "The first lesson costs nothing, so the judgement rests on real teaching." },
    { title: "Integrity first", description: "Tutors explain and review, while the student writes every assessed word." },
    { title: "No lock-in", description: "Change the tutor or stop whenever the fit is wrong." },
  ],

  faqs: [
    {
      question: "Will a tutor come to our house in Vyara?",
      answer:
        "No. Tutors teach online from elsewhere in India, because in-person teaching is confined to the Gurugram area and some parts of Delhi NCR. The lesson is still home tuition in every way that matters to a family: one teacher, a fixed weekly slot and private attention at your own desk, without a 65-kilometre drive to Surat.",
    },
    {
      question: "Is there an IB school in Vyara?",
      answer:
        "We could not find one in Vyara or anywhere in Tapi district. Directories list a Seventh Day Adventist school at Tichakpura that teaches ICSE and ISC, and Surat has the nearest IB and IGCSE campuses. Before relying on any claim, ask a school for its listing on the IB or Cambridge website.",
    },
    {
      question: "Can a child boarding in Surat also use IB Gram?",
      answer:
        "Yes. Some students board in Surat and use an online tutor for a difficult subject or for exam preparation, at the hours the boarding house permits. Rules on devices differ by school, so ask first, and we fit the lesson timing to whatever is allowed.",
    },
    {
      question: "How much does tuition cost?",
      answer:
        "We quote a rate in writing before the free trial, based on subject, level, weekly sessions and the amount of unfamiliar material. Distance never changes it, so a student in Uchhal pays no more than one on Station Road, and a lesson lost to a storm is moved to another slot.",
    },
    {
      question: "What if the power or internet fails in the monsoon?",
      answer:
        "We plan for it. A phone hotspot is the first fallback and a spare slot in the same week is the second, so a dropped lesson is rescheduled rather than lost. The free trial doubles as a connection test, and the written plan records the back-up arrangement.",
    },
    {
      question: "My child studies in Gujarati medium. Can they take IGCSE?",
      answer:
        "Yes. The first task is academic English, not the language of earlier schooling. A diagnostic lesson shows the gaps, vocabulary is built subject by subject, and writing in full sentences is practised from the start. IGCSE English as a Second Language can be used to build confidence first.",
    },
    {
      question: "Can a GSEB student move to the IB Diploma?",
      answer:
        "Yes, by joining a school that offers it, usually in Surat or further away, and that school sets its own admission terms. A year of bridging tuition in English, Maths and the sciences makes the first term easier. IB Gram does not handle admissions.",
    },
    {
      question: "Which IB subjects do Vyara students request?",
      answer:
        "Maths, the three sciences and English come first, then Economics, Business Management, Geography and Computer Science. Gujarati and Hindi are asked for by students who want a home language examined, and we look for a specialist whenever the subject is unusual.",
    },
    {
      question: "Do IB or IGCSE students qualify for Gujarat's engineering admissions?",
      answer:
        "Possibly, through equivalence certificates and the conditions set by the state admission authority, which change from year to year. IB Gram does not control admissions, so check the current ACPC and GUJCET notices early. A tutor can plan revision around the dates.",
    },
    {
      question: "Can a tutor check the Extended Essay?",
      answer:
        "A tutor can discuss the research question, explain the criteria and react to drafts the student has written, but cannot write or rewrite any part of it. Whatever is handed in must have been written by the student, and ghost-writing can cost a candidate their results.",
    },
    {
      question: "Do you teach PYP and MYP students?",
      answer:
        "Yes, for both. PYP lessons are short, playful and built around reading, while MYP lessons cover Maths, sciences and languages and keep the Personal Project on course. Sessions are shorter and more frequent than for the Diploma.",
    },
    {
      question: "When should tutoring begin?",
      answer:
        "Early in a course if possible: Class 9 suits IGCSE, Class 11 suits the Diploma, and a GSEB student planning a move gains from a bridging term in Class 10. With exams near, the plan shifts towards past papers and technique.",
    },
    {
      question: "Do festivals like Navratri and Uttarayan affect lessons?",
      answer:
        "They shape the timetable, not the plan. On Navratri evenings the tutor and family agree on afternoon slots or skip the week, Diwali and the New Year get a light week, and Uttarayan is treated as a holiday. Every date is written into the plan at the start.",
    },
    {
      question: "What happens in the free lesson?",
      answer:
        "It is a real, live lesson on a topic from your child's own syllabus, with no bill at the end. A brief note follows on what worked, what did not and what a plan might be, and you then continue, swap tutors or stop, owing nothing.",
    },
    {
      question: "Are the tutors based in Gujarat?",
      answer:
        "Tutors are based in India and teach in Indian Standard Time, so there is no time-zone problem. We match on syllabus and subject knowledge rather than on city, and we can look for a Gujarati-speaking tutor if a student would be more comfortable that way.",
    },
    {
      question: "What is the simplest way to begin with IB and IGCSE tutors in Vyara?",
      answer:
        "The simplest step is a message to +91 7439 368 115 on WhatsApp, or an email to support@ibgram.com, naming the board, subject, level and school. A shortlist and trial times follow, and no fee is taken before you have met the tutor and signed off the plan.",
    },
  ],

  internalLinks: [
    { label: "Surat", href: "/surat/", description: "School clusters and tutoring for the nearest big city, 65 kilometres down the highway." },
    { label: "Navsari", href: "/navsari/", description: "Online IB and IGCSE support for families in the neighbouring South Gujarat district." },
    { label: "Valsad", href: "/valsad/", description: "Tutoring for students along the Gujarat coast towards Mumbai." },
    { label: "Bharuch", href: "/bharuch/", description: "Help for IB and IGCSE students north of Surat across the Narmada." },
    { label: "All India cities", href: "/india/", description: "Every Indian town and city where lessons are given online." },
    { label: "Gurgaon and Delhi NCR", href: "/gurgaon/", description: "The only place where IB Gram tutors also teach face to face." },
    { label: "IB tutors", href: "/ib-tutors/", description: "A guide to IB tutoring across all four programmes." },
    { label: "IGCSE overview", href: "/igcse/", description: "How IGCSE boards, tiers and subjects fit together." },
    { label: "Career-related Programme", href: "/programmes/cp/", description: "What CP combines and who it suits." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "AA and AI explained for students choosing a route." },
    { label: "Blog", href: "/blog/", description: "Short reads on revising, past papers and picking subjects." },
    { label: "Contact us", href: "/contact-us/", description: "Describe your child and request a free trial slot." },
  ],

  closingHeading: "See a free IB or IGCSE lesson at your own desk in Vyara",
  closingBody:
    "Give us the board, subject and level, your child's school, and the date of any exam series or move to Surat. A tutor shortlist and a few trial slots come back to you, and no payment is requested until a lesson has been watched. Email support@ibgram.com or message us on WhatsApp at +91 7439 368 115.",
};
