import type { CitySeoPage } from "../types";

/**
 * /sihor/ - IB and IGCSE tutoring page for Sihor, Bhavnagar district, Gujarat. A small railway and
 * brassware town about 20 km from Bhavnagar; no IB or Cambridge/Edexcel school is confirmed in Sihor or
 * Bhavnagar, so nearby-city clusters (Rajkot, Ahmedabad, Vadodara) are used and labelled. Online-only
 * delivery: tutors do not visit homes here, in-person home tuition runs only in Gurugram and parts of
 * Delhi NCR.
 */
export const sihor: CitySeoPage = {
  slug: "sihor",
  countryName: "Sihor",
  countryNameLong: "Sihor, Gujarat",
  demonym: "Sihor",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around Uttarayan in January, the long Diwali vacation, Navratri nights and the Shravan month, plus the sharp Saurashtra summer afternoons",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.7092, longitude: 71.9757 },
  wikipedia: "https://en.wikipedia.org/wiki/Sihor",
  alternateNames: ["Sinhor", "Sihore", "Sinhpur", "Chhota Kashi"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sihor | Private Tuition at Home, Online",
  metaDescription:
    "IB and IGCSE tuition for Sihor families near Bhavnagar: one-to-one lessons taught online at home, Cambridge and Edexcel covered, with a free first lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Sihor",
  heroEyebrow: "ONLINE IB & IGCSE HOME TUITION FOR SIHOR STUDENTS",
  heroSubtitle:
    "Sihor is a small town of brassware workshops, temples and a busy railway junction, twenty minutes from Bhavnagar, and a family here hunting for private home tuition in an IB or IGCSE subject will rarely find a teacher who has handled the syllabus. We close that gap with one-to-one tuition at home, taught online by specialists who have run the exact course before. There is a free first lesson, and no tutor turns up at the door.",
  primaryKeyword: "IB and IGCSE tutors in Sihor",
  imageAltText: "Sihor student solving an IGCSE Physics question on paper while a tutor explains it over a video call",
  secondaryKeywords: [
    "IB tutor Sihor",
    "IGCSE tutor Sihor",
    "IB home tuition Sihor",
    "IGCSE home tuition Sihor",
    "IB private tuition Sihor",
    "IB Maths tutor Sihor",
    "IGCSE Maths tutor Sihor",
    "IB Physics tutor Sihor",
    "IB Chemistry tutor Sihor",
    "IB Biology tutor Sihor",
    "IB DP tutor Sihor",
    "IB MYP tutor Sihor",
    "IB PYP tutor Sihor",
    "IGCSE online tuition Sihor",
    "IB tutor Bhavnagar district",
    "Sinhor IB tuition",
    "IGCSE tutor Saurashtra",
    "Cambridge IGCSE private candidate Gujarat",
    "online IB tutor Gujarat",
  ],

  heroTrustPoints: [
    "Every lesson is one-to-one and matched to the syllabus code, level and sitting, not to a generic board label",
    "Tutors teach online from elsewhere in India; no tutor visits homes in Sihor, because in-person tuition runs only in Gurugram and parts of Delhi NCR",
    "A free trial lesson and a rate in writing come before any commitment",
    "IB Gram is independent of every school, the IB, Cambridge and Pearson",
  ],
  heroStats: [
    { value: "Sihor to Bhavnagar", label: "About twenty kilometres, same online service" },
    { value: "PYP to DP", label: "Plus Cambridge and Edexcel IGCSE" },
    { value: "Free trial", label: "A whole lesson before any fee" },
    { value: "Gujarati-friendly", label: "Support for students moving from Gujarati-medium" },
  ],

  intro: {
    heading: "Private IB and IGCSE help for a family in Sihor",
    paragraphs: [
      "Sihor has been a town of some consequence for centuries. It was once a seat of the Gohil Rajputs, it is called Chhota Kashi for its temples and the Gautameshwar Mahadev lake, and today it is better known for copper and brassware, pottery and rolling mills. About 54,000 people live here, about twenty kilometres from Bhavnagar by road. Nothing in that picture suggests an international curriculum, and we could not confirm any school in Sihor or Bhavnagar that teaches the IB or a Cambridge or Edexcel IGCSE.",
      "Yet questions arrive. A business family with relatives in the United Kingdom or East Africa wonders how a child might slot into a school there. A parent who works in Surat or Ahmedabad considers relocating and wants to know what an IB class demands. A student in Class 9 has heard that IGCSE Mathematics goes beyond the Gujarat Board and wants a head start. None can turn to a neighbour who has taught the syllabus, because in Sihor nobody has.",
      "So we work online. A tutor who has already taught IB Economics or Cambridge Biology joins a live video lesson with your child at home, writes on a shared whiteboard, and marks the answer while it is fresh. That is private tuition at home in every sense that matters except one: the tutor is on a screen, not at your door. Home visits are limited to Gurugram and parts of Delhi NCR, and we do not offer them in Sihor.",
      "IB Gram is independent. We have no tie with any Sihor or Bhavnagar school, the IB, Cambridge or Pearson Edexcel. Tutors teach and mark, but they will never write an Internal Assessment, Extended Essay, TOK essay or coursework for submission.",
    ],
    bullets: [
      "IB PYP, MYP and Diploma subjects, plus Cambridge and Edexcel IGCSE",
      "Suits business families, returning NRIs and students planning a move to a bigger city",
      "Gujarat Board and CBSE students can add IB or IGCSE subjects",
      "Free first lesson, then a written note after each session",
      "Online only in Sihor; in-person lessons are a Delhi NCR service",
    ],
  },

  programmesIntro:
    "No school in Sihor is confirmed to run any IB programme, so each one is usually approached as preparation for something else: a school in another city, an online school, or a private exam route.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "A primary programme that teaches through big questions rather than separate textbooks, building language, number sense and research habits. Children finish with a public Exhibition, but no external examination.",
      countryNote:
        "In Sihor, PYP interest is almost always from a family expecting to move to Rajkot, Ahmedabad or abroad and wanting a child who will settle quickly.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Five years of criterion-based assessment across eight subject groups, finishing with a Personal Project. Students learn to plan, reflect and justify, not only to recall.",
      countryNote:
        "Sihor families ask about MYP when a Class 8 or 9 child is about to board elsewhere, often in Rajkot, and needs help with writing and inquiry tasks during holidays.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, plus TOK, the Extended Essay and CAS. Assessment combines May exams with internal assessments, and the Diploma carries a maximum of 45 points.",
      countryNote:
        "With no confirmed Diploma school in Sihor or Bhavnagar, DP students are private candidates, online-school learners or students planning to enter a school elsewhere in Gujarat.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three Diploma courses combined with a career-related study, a reflective project and skills development for applied pathways.",
      countryNote:
        "CP enquiries from Sihor are uncommon, though a trading or manufacturing family may find its applied focus attractive.",
    },
  ],

  subjectsIntro:
    "A tutor in Sihor is frequently the only teacher a student has for the subject, so courses are taught in sequence from the first topic. The match begins with the syllabus code, the level and the examination date.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus, vectors and proof, with Gujarat Board students learning to write full reasoning and HL students meeting unfamiliar problems early." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology use, good for students headed into commerce, economics or life sciences." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and thermal physics with careful practice in estimating uncertainty and reading data booklets." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, energetics, kinetics and organic reactions, using industrial examples such as metal casting and ceramics where they illuminate a concept." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, physiology and ecology, with emphasis on precise command-term answers and statistics for the investigation." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets, trade and development, with a natural fit for students from trading and workshop families who see supply, demand and pricing daily." },
    { name: "IB Business Management", levels: "HL / SL", description: "Finance, operations and strategy applied to cases, where a family business can sometimes supply a realistic research project." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water, soils and sustainability, relevant in semi-arid Saurashtra where monsoon variability shapes farming and town life." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, algorithms and systems, with live coding in lessons so the internal assessment project actually works." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis, comparative essays and the Individual Oral, with spoken practice for students used to Gujarati-medium classrooms." },
    { name: "IB Geography", levels: "HL / SL", description: "Population, resources and change, with Saurashtra coastline, water supply and small-town industry offering case material." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and extended essays on twentieth-century topics, taught with attention to structure and argument." },
    { name: "IB Gujarati B", levels: "SL / HL", description: "Language acquisition support for students who speak Gujarati at home and want a familiar-script second-language subject, subject to tutor availability." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, writing and speaking for students with working Hindi who prefer it as a language subject." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion-led preparation for the exhibition and essay, with ideas and wording left to the student." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel IGCSE papers look alike on the surface and differ in detail. We settle board, code and tier before the first real lesson, then work towards the series your child has chosen.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with Extended students trained to show every step because working earns marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, logarithms, vectors and trigonometry, a steep but useful bridge towards IB Maths AA." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel conventions and question wording, practised on past papers so the layout is familiar." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy, waves and electricity, with equation rearrangement and alternative to practical questions drilled separately." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atoms, the mole, acids, electrolysis and organic chemistry, with qualitative analysis tables for the practical paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, nutrition, inheritance and ecology, with extended answers built around precise terms." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, government and international trade, with diagrams and evaluation practised step by step." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Data, networks, algorithms and programming in balanced sessions." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and composition, taught as technique with timed practice." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, financial statements and ratios, a natural subject for students from trading and business families." },
  ],

  regionsTitle: "Sihor areas and nearby places our online tutors work with",
  regionsIntro:
    "All lessons are online, so these notes describe context: what sort of household lives where, which schools families there use and how the small-town day is structured.",
  regions: [
    { name: "Gautameshwar Lake area", note: "Around the temple and lake that give Sihor its Chhota Kashi name, a long-settled part of town with Gujarat Board and CBSE families." },
    { name: "Brahmakund area", note: "Another religious landmark locality, where households are often small traders and prefer evening lessons after the shop closes." },
    { name: "Sihor Junction station side", note: "The railway junction connects to Bhavnagar, Rajkot and Ahmedabad, and families with daily commuters often have relatives in bigger cities." },
    { name: "Brassware bazaar lanes", note: "The market streets of copper and brass workshops, where business families value practical, employable skills and overseas links." },
    { name: "Bhavnagar road", note: "The road towards Bhavnagar, about twenty kilometres away, where some households send children to city schools and welcome lessons that avoid a second commute." },
    { name: "Palitana road", note: "The approach towards Palitana, with families who have links to the Jain pilgrimage economy and the diamond and trading sector." },
    { name: "Songadh side", note: "Households on the road towards Songadh, often agricultural or small-business in character, for whom online lessons remove a long trip." },
    { name: "Rajkot highway side", note: "Families on the western side who look to Rajkot for colleges and the nearest confirmed international school." },
  ],

  schoolDisclaimer:
    "Schools mentioned on this page appear only to describe the real curriculum options around Sihor. IB Gram is an independent tutoring service with no partnership with or endorsement from any school, the International Baccalaureate, Cambridge International or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Sihor and Bhavnagar",
      note: "We could not confirm an IB or Cambridge or Edexcel IGCSE school in Sihor or in Bhavnagar, about twenty kilometres away. Local options are limited, so families learn privately, use an online school or plan a move.",
      schools: [],
    },
    {
      city: "Nearby: Rajkot",
      note: "Roughly three hours by road, Rajkot has the Saurashtra region's confirmed campus for both curricula, often the first school a Sihor family considers for boarding or relocation.",
      schools: ["The Galaxy School"],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "Further east, Ahmedabad has several confirmed international curriculum schools and is where families planning a larger move usually look.",
      schools: ["Ahmedabad International School", "Calorx Olive International School"],
    },
    {
      city: "Nearby: Vadodara",
      note: "Vadodara has a confirmed IB school, relevant to families willing to consider a boarding or relocation option further from Saurashtra.",
      schools: ["Navrachana International School"],
    },
  ],

  modesIntro:
    "All three formats use a live one-to-one lesson at home over video. They differ in how the course is scheduled for the family's situation, and none involves a tutor travelling to Sihor.",
  modes: [
    {
      title: "Whole-course tuition for a private candidate",
      description:
        "A tutor teaches the full syllabus in sequence, with marked papers at the end of each unit, for a student with no class to attend.",
      bullets: [
        "IB Diploma, Cambridge and Edexcel courses",
        "Unit tests and past papers built in",
        "One tutor where possible",
        "Plan set backwards from the exam date",
      ],
    },
    {
      title: "Move-readiness lessons",
      description:
        "Short blocks for a child about to join a school in Rajkot, Ahmedabad or abroad, closing the gap in English writing, mathematics and inquiry skills.",
      bullets: [
        "Matched to the entrance test of the target school",
        "Booked around the admission date",
        "Focus on writing, maths fluency and reading",
        "Stops when the child is ready",
      ],
    },
    {
      title: "One weekly lesson beside Gujarat Board or CBSE",
      description:
        "A steady weekly session for a student adding an IB or IGCSE subject to an existing school timetable, lightened in school-exam months.",
      bullets: [
        "Fits around school tests",
        "A brief note after every lesson",
        "Reviewed every few weeks",
        "Extra sessions before a series",
      ],
    },
  ],

  sections: [
    {
      heading: "Why do some Sihor families look at IB and IGCSE at all?",
      paragraphs: [
        "The short answer is that Gujarat is a state of movers. Families from Saurashtra have settled in the United Kingdom, the United States, Kenya and Uganda for generations, and a grandparent in Leicester or a cousin in New Jersey is a real presence in many Sihor households. When a child's future might include a school abroad, an internationally recognised qualification stops looking exotic.",
        "The second reason is business. Sihor's brass and copper workshops, rolling mills and small trading houses are often family-run. Those families value skills that travel, such as English fluency, accounting, data analysis and commerce, and they are willing to invest early in a child who may take the business in a new direction or leave it altogether. IB Economics, Business Management and Mathematics fit that mindset.",
        "The third reason is simple dissatisfaction or curiosity. A parent hears that IGCSE Mathematics is more application-focused, or that the Diploma builds independent writing, and wants to test it. Because there is no local classroom for this, the test has to happen at home.",
        "That is exactly where online private tuition helps, and it is why we are open about what is and is not nearby. The table sets out the confirmed picture.",
      ],
      table: {
        caption: "Confirmed IB and IGCSE schooling near Sihor",
        columns: ["Place", "Approximate position", "What we could confirm"],
        rows: [
          ["Sihor", "Home town", "No IB or Cambridge/Edexcel IGCSE school confirmed"],
          ["Bhavnagar", "About 20 km", "No confirmed IB or IGCSE school; see the Bhavnagar page"],
          ["Rajkot", "Around three hours by road", "The Galaxy School confirmed for both curricula"],
          ["Ahmedabad and Vadodara", "Further east", "Several confirmed schools, including Ahmedabad International School, Calorx Olive and Navrachana"],
        ],
      },
    },
    {
      heading: "Gujarat Board, CBSE, IGCSE or IB: how to think about the choice from Sihor",
      paragraphs: [
        "Most children in Sihor attend Gujarat State Board schools, with a growing number in CBSE schools, and teaching is commonly in Gujarati or English. The Gujarat Board pathway leads to state engineering and medical entrance processes and to the many commerce colleges of Saurashtra. CBSE leads to JEE, NEET and CUET. These are well-mapped routes with plenty of local coaching.",
        "IGCSE and the IB are aimed at a different kind of learner and a different kind of future. IGCSE is subject-based with a mix of written papers and, in some subjects, practical or coursework components. The Diploma is broader and more demanding, with six subjects, an essay and TOK. Both reward written explanation and applied reasoning more than memorisation.",
        "A student moving from a Gujarati-medium school has one more hurdle, which is academic English. Command words, essay structure and the vocabulary of exam questions need attention before the syllabus can be taught fully. A tutor spends time on this early, because a child who understands the subject but misreads a question will lose marks anyway.",
        "The table compares the four routes on the points Sihor parents raise most often.",
      ],
      table: {
        caption: "The four main routes as they appear to a family in Sihor",
        columns: ["Point", "Gujarat Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Usually available in Sihor", "Yes, widely", "A few schools nearby", "Not confirmed", "Not confirmed"],
          ["What the exam rewards", "Recall and steady numerical practice", "Balanced recall and application", "Application and structured explanation", "Application, independent writing and research"],
          ["Language", "Gujarati or English", "English or Hindi", "English", "English plus a second language"],
          ["Common next step", "State colleges and entrance exams", "National entrance exams and central universities", "IB, A-Level or Class 11", "Indian and overseas universities"],
          ["What a tutor does", "Not the focus of this page", "Practice and revision", "Teach the whole syllabus", "Deepen subjects and guide internal assessments"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost for a Sihor student?",
      paragraphs: [
        "Cost depends on the student and the plan, and we confirm the figure in writing before you book rather than publishing a rate card. That is because two students of the same age can need completely different amounts of teaching. One may need a whole IGCSE course built up from the first topic, and another may need six weeks of work on a single weak area.",
        "The largest factor is the tutor's specialism. A teacher who has taught IB Chemistry HL, marked internal assessments and knows where Paper 2 candidates slip will charge differently from a general science teacher. The second factor is hours. A plan with two lessons a week for a full year costs more than a short revision block, and a plan that adds extra sessions near an exam costs more again.",
        "Online delivery helps because it removes the hidden cost of travel and waiting. In a town like Sihor the nearest specialist tutor could be in Bhavnagar or Rajkot, and travel would add both time and expense. On screen, all the hour goes on teaching.",
        "When weighing a quote, ask about the free trial, how tutor changes work and whether notes are provided after lessons. A tutor who tells you honestly when a student is not progressing is worth more than a cheap rate without feedback.",
      ],
      bullets: [
        "Programme and level, from PYP to DP Higher Level",
        "Tutor specialism and experience with the exact course",
        "Weekly hours and exam-season extras",
        "Whether the tutor must teach the whole course",
        "A free trial, then the rate in writing before booking",
      ],
    },
    {
      heading: "Online tutor, coaching class, local home tutor or self-study: a fair comparison for Sihor",
      paragraphs: [
        "In Sihor and nearby Bhavnagar, a family's practical options are coaching classes, local home tutors and self-study, in addition to online private tuition. Coaching classes are built for Gujarat Board, CBSE, JEE and NEET preparation and do that job well, but they do not usually teach IB or IGCSE, where the syllabus, command terms and mark schemes are different.",
        "A local home tutor is an honest choice for school maths and science, and some are very good. What is hard to find is one who has sat with an IB internal assessment or who knows how Cambridge awards marks on an alternative to practical paper. Self-study remains possible with past papers, and it works best as a supplement, since nobody marks the answers.",
        "Online one-to-one tuition brings in a specialist who has done exactly this before. It is not perfect. It relies on electricity and a stable connection, and Saurashtra summers and monsoon weeks can test both. Tutors reschedule rather than push through a broken call. It also cannot provide a school's peer group or laboratory.",
        "Many families combine routes: a specialist for the hardest two subjects, past papers for the rest, and school classes for what school already teaches.",
      ],
      table: {
        caption: "How the routes compare for a Sihor student",
        columns: ["Route", "Strength", "Limit", "Best use"],
        rows: [
          ["Online one-to-one tuition", "A subject specialist with marked feedback", "Needs steady power and internet", "Core IB or IGCSE subjects"],
          ["Coaching class", "Structure and peer competition", "Not built for IB or IGCSE", "Gujarat Board, CBSE and entrance exams"],
          ["Local home tutor", "Convenience and familiarity", "Limited international syllabus knowledge", "Class 9 and 10 school subjects"],
          ["Self-study", "Free and flexible", "No marking or feedback", "Past papers and revision"],
        ],
      },
    },
    {
      heading: "How does Sihor's festival and weather calendar affect exam preparation?",
      paragraphs: [
        "Gujarat's year has its own pulse, and a good study plan respects it. Uttarayan on 14 January fills rooftops and closes schools for a day or two, and the weeks around it are hard to fill with serious study. Navratri brings late nights in autumn, and Diwali is followed by a long vacation, often more than two weeks, that is a real opportunity for intensive work. The Shravan month adds temple activity in a town as devout as Sihor.",
        "Weather matters too. Saurashtra summers are hot and dry, with afternoon temperatures that make midday study unappealing, so evening or early-morning lessons suit. The monsoon between June and September is sometimes uneven, and heavy spells can disrupt power and roads.",
        "Exams follow their own timetable. IB Diploma exams are mainly in May. Cambridge IGCSE runs in May and June and again in October and November, with a limited February and March series in India for some syllabuses. Edexcel offers January, May and June, and October and November windows. A student aiming at May needs a finished syllabus by January or February, with the following months for papers.",
        "The table turns this into a rough planning guide. Always confirm current dates with the exam board and your centre.",
      ],
      table: {
        caption: "A Sihor study year at a glance",
        columns: ["Period", "Local rhythm", "What to do"],
        rows: [
          ["January", "Uttarayan and cool weather", "Finish syllabus coverage; short lessons around the festival"],
          ["February to April", "Rising heat, school exams", "Timed papers and evening lessons"],
          ["May to June", "IB and IGCSE summer sessions; peak heat", "Exam weeks, then rest"],
          ["July to September", "Monsoon; Shravan month", "New units and first drafts of internal assessments"],
          ["October to November", "Navratri and the long Diwali vacation", "Intensive blocks and the autumn series"],
        ],
      },
    },
    {
      heading: "University pathways from Sihor for IB and IGCSE students",
      paragraphs: [
        "A Sihor student who completes the IB Diploma or IGCSE has more than one route. Within India, the Association of Indian Universities recognises the Diploma as equivalent to Class 12, and CUET-UG opens the door to many central universities. Families interested in engineering or medicine should read current JEE Main and NEET eligibility rules for IB and IGCSE students directly, since they depend on subject combinations and board equivalence.",
        "Gujarat itself offers well-known options in Ahmedabad, Vadodara and Bhavnagar, including engineering, pharmacy and commerce colleges. State admission processes have their own rules, which may differ for students outside the state board system, so check them with the admitting body rather than trusting a summary.",
        "Overseas, the Diploma is widely recognised in the UK, North America, Australia and Europe, and IGCSE results are commonly used as evidence of ability before A-Level or Diploma study. Families with relatives abroad often have a country in mind from the start, and a tutor can help a student plan subject choices accordingly.",
        "Our part is to help a student understand, practise and perform. We do not promise admission, grades or scholarships, and we advise families to confirm every requirement with the institution themselves.",
      ],
    },
    {
      heading: "IB Economics, Business and Mathematics for trading-family students in Sihor",
      paragraphs: [
        "Many Sihor students come from families that run workshops, shops or trading businesses, and IB Economics, Business Management and Mathematics suit them well. They often arrive with a practical sense of prices, margins and customers, which makes the subject concrete. The work lies in turning that instinct into the formal vocabulary and diagrams examiners expect.",
        "For Economics, the plan covers microeconomics, macroeconomics and the global economy, with each topic ending in a short essay. A student learns to draw a clean diagram, define terms precisely and write an evaluation that weighs both sides. Real-world examples matter, and India-linked ones are easy to find.",
        "For Business Management, the skill is applying tools such as SWOT or break-even analysis to the case given, not reciting them. A family business can occasionally serve as the focus of the internal research project, provided the student collects the evidence honestly and the tutor coaches the method rather than the wording.",
        "For Mathematics, Applications and Interpretation usually suits commerce students, and Analysis and Approaches suits those aiming at engineering or pure mathematics. We help the student choose by working through sample questions from each course before committing.",
      ],
      bullets: [
        "Economics: diagrams, definitions and evaluation",
        "Business Management: applying tools to the case",
        "Maths AI: statistics, modelling and calculators",
        "Maths AA: algebra, calculus and proof-style reasoning",
        "Internal assessments: method coaching only, never writing",
      ],
    },
    {
      heading: "IGCSE subjects and tiers for students in Sihor",
      paragraphs: [
        "IGCSE gives a choice of tier in most subjects, Core or Extended in Cambridge and Foundation or Higher in Edexcel. The higher tier opens the top grades, so it is the usual choice for a student who might take IB, A-Level or a science route. The lower tier suits a student building confidence, and it is a perfectly respectable choice.",
        "Subjects should follow the next step. For a future Diploma student, Mathematics, Additional Mathematics, the sciences and English form a strong core. A commerce-minded student might add Economics, Accounting or Business Studies. A student who will continue into an Indian Class 11 may prefer a narrower list that sits alongside board preparation.",
        "Cambridge and Edexcel cover similar material but phrase it differently, and not every exam centre offers both. We recommend confirming which board your centre accepts before teaching begins, so that practice papers match the actual exam.",
        "For a Sihor private candidate, the route is to find an approved centre, register for a series and plan backwards from the date. We help with teaching and planning, and the family handles registration.",
      ],
    },
  ],

  tutorsIntro:
    "Below are tutors teaching IB PYP, MYP and Diploma subjects and Cambridge or Edexcel IGCSE to Sihor students. Every lesson is live over video from elsewhere in India, because tutors do not visit homes here.",

  process: [
    { title: "Describe the student", description: "Subject, level, current board, school plans and the exam session or admission date you have in mind." },
    { title: "Get a shortlist", description: "We offer tutors with recent experience in that exact course, with their background explained." },
    { title: "Try a free lesson", description: "Your child works through a real topic online before any fee is discussed." },
    { title: "Agree the plan", description: "Hours, pace and rate are settled in writing, with slots chosen to suit your household." },
    { title: "Review as you go", description: "A short written note follows each lesson, and a new tutor is easy to arrange." },
  ],

  whyPoints: [
    { title: "A specialist for the syllabus", description: "Tutors are chosen for the exact IB or IGCSE course, wherever in India they teach from." },
    { title: "Honest about how it works", description: "Sihor lessons are online; home visits exist only in Gurugram and parts of Delhi NCR." },
    { title: "Sensitive to Gujarati-medium students", description: "Early sessions can focus on exam English and command words before content." },
    { title: "Firm on assessed work", description: "Tutors coach method but never write an IA, essay or coursework." },
    { title: "A note after every lesson", description: "Parents get a short written record of what was covered and what comes next." },
    { title: "Easy to change tutor", description: "If the fit is poor, we reassign without argument." },
  ],

  faqs: [
    { question: "How do I find IB and IGCSE tutors in Sihor?", answer: "Send us the subject, level, board and exam session, and we shortlist tutors who have taught that exact course. Lessons run live online at times that suit your household, and the first one is a free trial. The rate is confirmed in writing before booking. Write to support@ibgram.com or WhatsApp +91 7439 368 115 to begin." },
    { question: "Will a tutor visit my home in Sihor?", answer: "No. Tutors do not visit homes in Sihor, because in-person home tuition runs only in Gurugram and parts of Delhi NCR. In Sihor we offer one-to-one home tuition online: your child studies at home on a laptop while the tutor teaches live, shares a whiteboard and marks work as it is written." },
    { question: "Is there an IB or IGCSE school in Sihor or Bhavnagar?", answer: "We could not confirm one in either place. Confirmed options sit further away, including The Galaxy School in Rajkot and Ahmedabad International School, Calorx Olive International School and Navrachana International School in Ahmedabad and Vadodara. Please check each school directly for current curricula and admissions." },
    { question: "How much does IB or IGCSE tuition cost in Sihor?", answer: "It depends on the subject, level, weekly hours and how much of the course must be taught from scratch, and we confirm the rate in writing before you book. A private candidate needs more hours than a student fixing one topic. A free trial lets you judge the teaching before committing." },
    { question: "Is the first lesson free?", answer: "Yes. The trial is a full lesson on a real topic from your child's syllabus with a matched tutor, and you can sit in. After it you decide whether to continue, ask for a different tutor or stop. There is no obligation, and no rate is agreed until you have it in writing." },
    { question: "Can a tutor write my child's IB Internal Assessment?", answer: "No. A tutor can coach the process by helping choose a workable question, explaining criteria, checking a method and commenting on drafts the student wrote. Writing or editing an IA, Extended Essay, TOK essay or coursework is something our tutors refuse, because the work must be the student's own." },
    { question: "Which IB Diploma subjects can you cover for Sihor students?", answer: "We cover both Mathematics courses, Physics, Chemistry, Biology, Economics, Business Management, Environmental Systems, Computer Science, English A, Geography and History, plus TOK. Gujarati B and Hindi B are offered on request, subject to tutor availability. Tell us the subject and HL or SL level and we confirm who is free." },
    { question: "Do you teach MYP and PYP too?", answer: "Yes, across the full IB continuum. PYP support centres on reading, number sense and inquiry, MYP on criterion-based writing, mathematics and sciences, and the Diploma on subject depth and exam technique. From Sihor, younger-programme enquiries usually come from families planning a move to Rajkot or Ahmedabad." },
    { question: "Which IGCSE boards do you teach?", answer: "Cambridge and Pearson Edexcel. The boards use different codes and phrase questions differently, so we confirm your child's exact syllabus, such as Cambridge 0580 or Edexcel 4MA1, and the tier before teaching begins. Practising on the wrong board's papers wastes time." },
    { question: "My child studies in Gujarati medium. Can an IB or IGCSE tutor still help?", answer: "Yes. Early lessons can focus on exam English, command words and answer structure before the content grows heavy. A child who understands the subject but misreads the question still loses marks, so we teach reading the question as a skill. Progress is usually gradual and steady, and we adjust the pace to your child." },
    { question: "Can my child add an IB or IGCSE subject beside Gujarat Board or CBSE?", answer: "Yes. A weekly lesson can run beside school, with lighter weeks near board exams and a short note after each session so that nothing clashes. We review the load every few weeks to make sure your child is not stretched too thin." },
    { question: "Can my child sit Cambridge or Edexcel as a private candidate from Sihor?", answer: "In principle, yes, through an approved exam centre that accepts private candidates. The family handles registration, fees and deadlines and should confirm details with the centre and the board. We provide teaching and past-paper practice and plan backwards from the series chosen." },
    { question: "Which times work for lessons, given heat and festivals?", answer: "Evenings and early mornings are most popular, since Saurashtra afternoons in summer are hard for study. Weekends also work. We plan around Uttarayan, Navratri and the long Diwali vacation, and we use that Diwali break for intensive blocks if the family wishes." },
    { question: "How do you choose tutors for Sihor students?", answer: "We check qualifications, recent experience with the exact syllabus and how a tutor approaches marking and assessed work. Because no local school provides context, we also ask how they would structure a whole course for a private candidate. The free trial is the final check of fit." },
    { question: "What if we are not happy with the tutor?", answer: "Tell us and we find another. Short notes after each lesson and periodic reviews catch a poor fit early, and changing tutor carries no penalty. The aim is that your child keeps learning rather than sitting through lessons that are not working." },
    { question: "Is IB Gram linked to any school or exam board?", answer: "No. IB Gram is an independent tutoring service with no tie to any school in Sihor, Bhavnagar or elsewhere, to the International Baccalaureate, Cambridge International or Pearson Edexcel. Schools named on this page are included only to describe the curriculum picture and do not endorse us." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How online IB and IGCSE tuition works in towns and cities across the country." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only place where tutors visit the house, alongside online lessons." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tuition sorted by programme and subject." },
    { label: "IGCSE tuition", href: "/igcse/", description: "Cambridge and Edexcel boards, tiers and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the six subjects and the core fit together." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criterion-based learning and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry learning leading to the PYP Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "A career study paired with Diploma courses." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Comparing Analysis and Approaches with Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your child's details to arrange a free trial." },
    { label: "Tutoring in Bhavnagar", href: "/bhavnagar/", description: "The nearest city, about twenty kilometres away." },
    { label: "Tutoring in Rajkot", href: "/rajkot/", description: "The Saurashtra city with the nearest confirmed international school." },
    { label: "Tutoring in Palitana", href: "/palitana/", description: "A neighbouring town on the road south-west." },
    { label: "Tutoring in Amreli", href: "/amreli/", description: "Another Saurashtra town with a similar school picture." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor for your Sihor student",
  closingBody:
    "Write with your child's subject, level and the exam or admission date you are working towards, and we will reply with a tutor profile and trial times that fit your evenings. The first lesson is free, the rate is given in writing before you book, and every lesson runs online. Email support@ibgram.com or WhatsApp +91 7439 368 115.",
};
