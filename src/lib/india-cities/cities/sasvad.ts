import type { CitySeoPage } from "../types";

/**
 * /sasvad/ - IB and IGCSE tutoring page for Saswad (Sasvad), Pune district, Maharashtra.
 * No Saswad school is confirmed to run the IB or IGCSE, so stripSchools is empty and the clusters
 * point to Pune schools that families on the Saswad road actually consider.
 */
export const sasvad: CitySeoPage = {
  slug: "sasvad",
  countryName: "Saswad",
  countryNameLong: "Saswad (Sasvad), Pune district, Maharashtra",
  demonym: "Saswad",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson slots are fitted around the Ashadhi Wari fortnight, the Diwali holidays and the school bus or Pune commute your child already keeps",
  lastUpdated: "2026-09-21",
  geo: { latitude: 18.3472, longitude: 74.0278 },
  wikipedia: "https://en.wikipedia.org/wiki/Saswad",
  alternateNames: ["Sasvad", "Saswad Pune", "Saswad Purandar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Saswad | Online Home Tuition, Pune Dist",
  metaDescription:
    "Online one-to-one IB and IGCSE tuition at home for Saswad (Sasvad) students near Pune, planned around the Wari fortnight, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Saswad",
  heroEyebrow: "SASWAD, PURANDAR TALUKA: IB & IGCSE TUITION, LIVE ONLINE",
  heroSubtitle:
    "Private tuition from home for Saswad families who are weighing the IB or Cambridge and Edexcel IGCSE. Your child studies one-to-one with a specialist on a laptop in your own living room, while the school itself may be in Pune, in a boarding campus, or on an online international timetable. Tutors do not travel to Saswad; home visits run only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Saswad",
  imageAltText: "A Saswad student at a desk reviewing an IB Physics graph with a tutor on a live video lesson",
  secondaryKeywords: [
    "IB tutor Saswad",
    "IGCSE tutor Saswad",
    "IB home tuition Saswad",
    "IGCSE home tuition Saswad",
    "IB private tuition Saswad",
    "IB Maths tutor Saswad",
    "IGCSE Maths tutor Saswad",
    "IB Physics tutor Saswad",
    "IB Chemistry tutor Saswad",
    "IB Biology tutor Saswad",
    "IB DP tutor Saswad",
    "IB MYP tutor Saswad",
    "IB PYP tutor Saswad",
    "IGCSE online tuition Saswad",
    "IB tutor Sasvad",
    "IB tutor Purandar taluka",
    "IGCSE tutor Jejuri road",
    "IB tutor Saswad Pune district",
    "online IB tuition near Pune Saswad road",
  ],

  heroTrustPoints: [
    "A tutor matched to the exact IB or IGCSE course, even though the school may sit 30 km away in Pune",
    "Lessons are online only; a tutor never visits a Saswad home, since visits run only in Gurugram and parts of Delhi NCR",
    "A free trial lesson to watch before any rate is agreed",
    "Independent of the IB, Cambridge, Pearson and every school mentioned on this page",
  ],
  heroStats: [
    { value: "Purandar taluka", label: "Students across Saswad and the Jejuri road" },
    { value: "PYP to DP", label: "The whole IB continuum covered" },
    { value: "May & Nov", label: "Both main exam sittings planned for" },
    { value: "Free trial", label: "Meet the tutor before committing" },
  ],

  intro: {
    heading: "IB and IGCSE tuition for families in Saswad",
    paragraphs: [
      "Saswad is the old Peshwa-era town on the Karha river, roughly 25 to 30 kilometres south-east of Pune, and for most of the day it runs on Marathi-medium, Maharashtra State Board and a handful of English-medium schools. Families here who ask about IB and IGCSE tutors in Saswad usually fall into three groups: parents whose child travels to an international school in Pune, parents who are still deciding whether to move the child out of the State Board, and households with a returning relative who wants a global qualification for the next generation.",
      "The honest position is that we have not been able to confirm any school inside Saswad that teaches the IB or a Cambridge or Edexcel IGCSE course. The schools that do sit on the Saswad family's radar are in Pune: along the Solapur road at Loni Kalbhor, out at Wagholi, in Hinjawadi and Balewadi. That is exactly where private tuition from home earns its place, because the tutor can be matched to the course rather than to the pin code.",
      "Tuition here means online home tuition: your child sits at home, in Saswad or the surrounding villages, and a specialist teaches live over video, one-to-one. Tutors do not travel to Saswad. In-person home visits exist only in Gurugram and parts of Delhi NCR, and we would rather say that on the first page than let anyone assume otherwise.",
      "Nothing here is connected to the IB, to Cambridge, to Pearson or to a school. Tutors explain, set practice and mark it; they never write an Internal Assessment, Extended Essay or any submitted coursework for a student.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP support, plus Cambridge and Pearson Edexcel IGCSE",
      "Live private lessons on a laptop at your own kitchen table",
      "Slots that respect the Pune school run and the Wari fortnight",
      "A free trial lesson and written feedback after each session",
    ],
  },

  programmesIntro:
    "Because the schools sit in Pune rather than in Saswad, the question for a local family is often not which programme exists nearby but which one the chosen campus will run. These notes describe what each IB stage asks of a student, and what changes when the child is commuting or boarding.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Inquiry units replace the textbook-and-test rhythm, so a child is asked to investigate a question over several weeks and then show what changed in their thinking. Tuition at this age is light: reading aloud, number talk and help turning a curious idea into a clear sentence.",
      countryNote:
        "A Saswad child in a Pune PYP classroom often travels an hour or more each way, so a short evening session at home protects energy better than a long weekend one.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers grade by four criteria per subject and the Personal Project closes the programme. Students who answered Marathi-medium or State Board style questions in primary often need help phrasing a justified argument rather than a memorised fact.",
      countryNote:
        "For a Saswad student who moved from a Marathi-medium primary, English academic vocabulary in MYP Sciences and Individuals and Societies is the usual first gap to close.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, plus TOK, the Extended Essay and CAS. Internal assessments contribute a fifth to a third of a subject's grade, so the habit of working steadily from the first term matters more than a cram before May.",
      countryNote:
        "Diploma requests from Saswad tend to cluster in Maths, Physics, Chemistry and English A, often from students who joined a Pune or boarding school at Class 11.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two Diploma courses are combined with a career-related study, a reflective project and personal and professional skills. It is rare in India, so tuition usually concentrates on the Diploma subjects inside the student's combination.",
      countryNote:
        "We see very little CP demand from the Saswad belt; where it appears, the request is simply for the Diploma courses within it.",
    },
  ],

  subjectsIntro:
    "A Maharashtra State Board classroom trains a student to write the textbook answer in full. IB examiners ask for something different: apply, evaluate, justify. That adjustment, not the content, is the real challenge for most students moving across from Saswad. The subject list below shows where we usually spend session time.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof-style reasoning, with Paper 3 problems at HL that reward patience with unfamiliar settings. Students from a State Board background are fast at routine calculus and slower at explaining why a method works." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology use dominate. Fluency with the graphic display calculator is worth marks, and the exploration needs a dataset chosen early enough to analyse properly." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and thermal physics, with a data booklet to learn to navigate fast. Marks often leak through units and significant figures rather than concepts." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry feels familiar from Class 11 CBSE or State Board, but equilibrium, kinetics and organic mechanisms are examined with more reasoning and less recall." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and human physiology, assessed through structured and extended answers. Command terms like 'outline' and 'evaluate' are tested separately and need drilling." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams drawn accurately and tied to a live example, with the commentary portfolio built from real news. Indian examples such as agricultural pricing and fuel taxes make good material." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based papers where application to the named firm earns the marks. A student whose family runs a farm input shop or a small mill has natural material for the internal assessment." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis, comparative essays and the individual oral. Students who think in Marathi often write fluently but need practice structuring an argument in English." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, object-oriented programming and the internal solution. Steady coding practice matters more than reading about it." },
    { name: "IB Psychology", levels: "HL / SL", description: "Biological, cognitive and sociocultural approaches, with studies recalled accurately and applied to a question. The short experimental study needs careful ethics handling." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "A natural fit for students who live close to farmland, watershed management and the dry-belt irrigation questions of Purandar. Systems diagrams and balanced evaluation score well." },
    { name: "IB Geography", levels: "HL / SL", description: "Fieldwork-based internal assessment, urban and rural change, and resource questions. The Pune-Saswad corridor itself makes a workable local case study." },
    { name: "IB Hindi B and Marathi B", levels: "HL / SL", description: "Language acquisition courses for students who need a school-language credit. Oral practice and text-type conventions are the focus, not literary summary." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Exhibition and essay coaching through questions and counter-examples. The tutor discusses the prescribed title; the student writes it." },
  ],

  igcseSubjectsIntro:
    "Cambridge IGCSE and Pearson Edexcel IGCSE share a name but not a mark scheme, so the first question is always the board and the tier. After that, the sitting matters: Cambridge runs February-March, May-June and October-November series, while Edexcel runs January, May-June and November. A Saswad student sitting in a Pune centre or as a private candidate should confirm the sitting with that centre before a plan is made.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended-tier students drop marks for missing working far more than for hard topics. Practice centres on method lines and non-calculator speed." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, logarithms and trigonometric identities early, which is a strong preparation for IB Maths AA at HL." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Same mathematics underneath, but Edexcel phrases and sequences questions differently, so board-specific past papers are used from the start." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation handling, graph reading and the alternative-to-practical paper. Students who have only done State Board practicals need the paper explained from scratch." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, reactivity and organic basics, with qualitative analysis tables that must be memorised and applied." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, plant and human physiology, and structured long answers that reward a trained response pattern." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Demand and supply, government policy and development. Data-response questions are best built on real Indian figures." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, trace tables and Python. Repeated practice on unseen problems is the only route to confidence." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and a narrative or descriptive piece. Students from a Marathi-medium background gain from a plain, correct register." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applied answers about named businesses, with a growing confidence in short calculations on profit and cash flow." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and speaking-style tasks in a language already spoken at home; the work is exam technique." },
  ],

  regionsTitle: "Neighbourhoods and routes around Saswad we teach students from",
  regionsIntro:
    "Every lesson is online, so the lanes below do not change the teaching. They matter for timing: how long a child spends on the Pune road, when school buses leave, and when the town closes for a festival or procession.",
  tutorsIntro:
    "These tutors teach IB and IGCSE live online from elsewhere in India, so a Saswad student gets the right specialist whatever the distance from Pune. The shortlist is matched on course and level before the free trial.",
  regions: [
    { name: "Sangameshwar temple area", note: "The old riverside core near the Karha and Chambli confluence, with narrow lanes, long-settled families and the most Marathi-medium schooling." },
    { name: "Purandare Wada and old town", note: "The heritage quarter of the Peshwa-era Purandare family; compact, walkable and busy on market days." },
    { name: "Sopandev Samadhi precinct", note: "The Sant Sopandev samadhi draws the largest crowds during the Wari, so evening lessons shift earlier." },
    { name: "Pune-Saswad road and Bhivari", note: "The corridor that carries students to Pune schools; bus timings here decide when a child gets home." },
    { name: "Dive Ghat approach", note: "The ghat section on the way to Hadapsar. Fog in winter and rain in monsoon make the commute longer." },
    { name: "Jejuri road", note: "Leads south-east towards the Khandoba temple town, about 20 km away, with its own pilgrim calendar." },
    { name: "Waghire College belt", note: "A college and higher-secondary stretch where older students and teaching staff live." },
    { name: "Purandar taluka villages", note: "Agricultural villages known for fig farming; families often keep a second household in Pune for schooling." },
    { name: "Narayanpur and the Purandar fort side", note: "Hill and pilgrimage settlements near the fort, with the longest daily travel to any city school." },
  ],

  schoolDisclaimer:
    "No school within Saswad is confirmed to run the IB or a Cambridge or Edexcel IGCSE. The Pune schools below are listed only because families from the Saswad road genuinely consider them. IB Gram is an independent tutoring service with no agreement, endorsement or affiliation with these schools, the IB, Cambridge or Pearson, and admissions are decided entirely by each school.",
  schoolClusters: [
    {
      city: "Saswad itself",
      note: "Local options are limited: the town's schools run the Maharashtra State Board and some CBSE or ICSE-style English-medium curricula. We have confirmed none that offers IB or IGCSE.",
      schools: [],
    },
    {
      city: "Nearby: Pune east and Solapur road",
      note: "The nearest international campuses for a family on the Saswad road, reached via Hadapsar and the Solapur highway.",
      schools: ["Vishwashanti Gurukul World School, Loni Kalbhor", "Wellington College International Pune, Wagholi"],
    },
    {
      city: "Nearby: Pune west and Hinjawadi",
      note: "A longer daily journey, so these are more often chosen with boarding or a Pune rental in mind.",
      schools: ["Mahindra International School, Hinjawadi", "BLiSS Edify International School, Hinjawadi", "Universal Wisdom School, Balewadi"],
    },
    {
      city: "Nearby: Pune north-east",
      note: "Viman Nagar and Kharadi suit families that already live near the airport side.",
      schools: ["Symbiosis International School, Viman Nagar"],
    },
  ],

  modesIntro:
    "Whatever the school and whichever the board, tuition for a Saswad student takes one shape: a private lesson, live over video, with a tutor who may be anywhere in India. No tutor visits Saswad. What changes from family to family is how often and how intensely sessions run.",
  modes: [
    {
      title: "Weekly one-to-one online home tuition",
      description:
        "One fixed evening slot, a shared digital whiteboard and past papers marked between lessons. It works well for a student who has just joined a Pune school and needs steady support without losing weekends.",
      bullets: [
        "The same tutor throughout the term",
        "Subject and level matched before the first lesson",
        "Works for IB and for Cambridge or Edexcel IGCSE",
        "Slots avoid the bus ride home",
      ],
    },
    {
      title: "Bridging block before a school switch",
      description:
        "A short, intensive run of lessons in the months before a move from the State Board into an international campus, covering command terms, English academic writing and the Class 9 or 11 Maths gap.",
      bullets: [
        "Usually four to eight weeks long",
        "Targets the specific entry assessment where known",
        "Builds vocabulary for Sciences and Humanities",
        "Ends with a written summary of next steps",
      ],
    },
    {
      title: "Exam-season revision block",
      description:
        "More frequent sessions in the weeks before mocks or the May or November sitting, centred on timed papers and mark-scheme reading. Booked early, it avoids the Diwali and Wari clashes.",
      bullets: [
        "Two to four sessions a week",
        "Timed papers marked to published criteria",
        "Short, specific feedback notes",
        "Booked two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families around Saswad",
      paragraphs: [
        "A family in Saswad who wants an international curriculum is choosing between staying local with the Maharashtra State Board, CBSE or an English-medium school, or sending the child to Pune. The town itself is best known for its history: the first Peshwa, Balaji Vishwanath, has a samadhi here, Sant Sopandev's samadhi anchors the Wari route, and the Purandare Wada and Mastani Wada recall a time when Saswad was a seat of influence. Education followed that pattern, with municipal and aided schools, a mission school tradition and colleges like Waghire and the Purandar engineering campus.",
        "What Saswad does not have, so far as we can confirm, is a school that offers the IB Diploma or a Cambridge or Edexcel IGCSE. Parents who want one therefore look east and north along the Solapur road, or to Hinjawadi and Balewadi. Vishwashanti Gurukul at Loni Kalbhor and Wellington College International at Wagholi are the closest to the Saswad side of Pune; Mahindra International School, BLiSS Edify and Universal Wisdom are further west and often paired with boarding or a rental flat.",
        "The families who choose these routes are varied. Some are engineers and managers from Kirloskar-linked or MIDC employers at Jejuri, Chakan and Ranjangaon. Some are farming families with fig, custard-apple or sugarcane income who want a global degree for a child. A few are returning NRIs who have inherited a house in the old town. Each ends up with the same practical question: how does a child learn to work to an international standard while living thirty kilometres from the school?",
        "A good local plan starts with the school the child will attend and works backwards: the board and tier, the subjects chosen, the sitting. Where the school is still undecided, we help the family read the options without recommending one. All teaching is online and one-to-one, and tutors teach IB Maths, the sciences, English and the IGCSE core subjects to students wherever they live in Purandar taluka.",
      ],
      bullets: [
        "No confirmed IB or IGCSE school inside Saswad itself",
        "Nearest international campuses lie along the Solapur road and in Pune's west and north-east",
        "Families are a mix of employed professionals, farming households and returning relatives",
        "Tuition is online only; tutors do not visit Saswad homes",
      ],
    },
    {
      heading: "How is IB or IGCSE different from the Maharashtra State Board, CBSE and ICSE?",
      paragraphs: [
        "In short, the State Board rewards a correct, complete reproduction of the syllabus, while IB and IGCSE reward applying knowledge to a new situation and justifying a conclusion. A student who scores very well on textbook-style questions may feel lost when a paper gives an unfamiliar data set and asks for evaluation, because the question is no longer 'what does the book say' but 'what do you conclude and why'.",
        "The second difference is assessment structure. Maharashtra SSC and HSC rely mainly on the final written paper, with small internal and practical components. IB Diploma subjects have internal assessments that count for roughly a fifth to a third of the grade, and IGCSE has coursework or practical papers in many subjects. That means the year before the exam matters, not only the last three months.",
        "Language is the third. Many Saswad students are fluent in Marathi and Hindi and cautious in English. Tutors help by teaching the formal register examiners reward: topic sentences, defined terms and the specific command verb in the question. This is about vocabulary and structure, not intelligence.",
        "None of this makes IB or IGCSE harder across the board. Many students find criteria-based marking more predictable once the criteria are understood, and the transition is smoother when the family hears the difference before the course begins.",
      ],
      table: {
        caption: "Maharashtra State Board, CBSE, ICSE and IB or IGCSE compared",
        columns: ["Feature", "Maharashtra State Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Typical question style", "Textbook recall and short written answers", "Recall with some application", "Application, evaluation, data analysis"],
          ["Internal assessment", "Small practical and oral component", "Moderate", "Significant: IA, coursework or practical papers"],
          ["Medium of instruction", "Marathi or English", "English or Hindi", "English (language courses aside)"],
          ["Entry point for Saswad families", "Class 1 in town", "A few CBSE-style schools nearby", "Usually via a Pune campus or online school"],
          ["Recognition abroad", "Recognised after equivalence checks", "Recognised after checks", "Widely recognised directly"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Saswad family?",
      paragraphs: [
        "The rate depends on the programme, the subject, the level and the tutor's experience, and we quote it in writing before any lesson is booked. We do not publish a price list, because a Class 9 IGCSE English lesson and an IB Physics HL revision block are different jobs. After the free trial, the proposal sets out the hourly rate, the number of sessions and the review dates.",
        "Four things move the figure. First, the level: Diploma Higher Level and IGCSE Extended Maths need more preparation time than Primary Years reading support. Second, the tutor: a former examiner or someone with years in an IB classroom charges more than a recent graduate. Third, frequency: one weekly lesson costs less in total than two plus a revision block. Fourth, timing: tutors fill up for May and November exams, so early bookings cost less stress.",
        "For a Saswad family there is one saving that is easy to miss. Because tuition is online, you do not pay for travel time or for the extra hour a tutor would otherwise spend getting from Pune to Purandar, and your child does not spend that hour on a bus. A fee set for a purely online lesson reflects only the teaching.",
        "Ask about the cancellation and tutor-change terms as well as the headline rate. A tutor change if the fit is wrong is part of the arrangement, and so is a written note after each session, so the money is visibly spent on something your child could show the school.",
      ],
    },
    {
      heading: "Online home tuition against Pune coaching, local tutors and self-study",
      paragraphs: [
        "Saswad students have more options than they sometimes realise. Pune is full of coaching classes, but most are built for JEE, NEET and State Board prep, not IB command terms or IGCSE mark schemes. Local private tutors in Saswad are usually excellent at the State Board syllabus but rarely hold IB or IGCSE experience. Self-study with past papers works for a disciplined student, though without feedback the same mistake gets repeated for months.",
        "Online home tuition sits between these. The tutor is matched on the exact course code, so the student does not share a batch with twenty others, and sessions happen at home without a ninety-minute round trip to Pune. The trade-off is that learning depends on a stable broadband or mobile connection, which is not guaranteed in every village along the Jejuri road. We advise a wired or hotspot backup for exam-season weeks.",
        "A Pune classroom for IB students does offer something online cannot: a peer group sitting the same course. Where a family can reach that group, it complements private tuition; where it cannot, a tutor who runs short group sessions for a few students is an alternative.",
        "The table below sets the choices side by side. Which suits a family depends on the child's school, the number of hours of free time after the school run and how much the family wants a single dedicated specialist.",
      ],
      table: {
        caption: "Online home tuition, Pune coaching, local tutors and self-study for IB or IGCSE",
        columns: ["Option", "IB / IGCSE expertise", "Travel for a Saswad student", "Personal attention"],
        rows: [
          ["Online one-to-one home tuition", "Matched to the exact course", "None; the lesson is at home", "Fully individual"],
          ["Pune coaching classes", "Often State Board, JEE or NEET focused", "Long daily trip on the Pune road", "Shared batch"],
          ["Local private tutors in Saswad", "Strong on State Board, rarely IB", "Short, within town", "Individual, but syllabus mismatch"],
          ["Self-study with past papers", "Depends on the student", "None", "No feedback unless added"],
        ],
      },
    },
    {
      heading: "Saswad's calendar: Wari, monsoon, Diwali and exam sittings",
      paragraphs: [
        "The Ashadhi Wari in June and July is the defining event of the Saswad year. Palkhis pass through the town on the way to Pandharpur and Sopandev's samadhi sees heavy crowds, so roads, schools and daily routines change for a week or so. We schedule lessons for those days earlier in the evening or move them, and we avoid placing a mock paper there.",
        "The monsoon matters in a different way. Saswad lies on the drier side of the Sahyadri, so rain is lighter than in Pune's western edge, but the Dive Ghat road still slows and school buses run late in July and August. Power cuts and weak signal can interrupt a video lesson, so we keep a note of each family's backup connection.",
        "Diwali is the other long break, and for IB and IGCSE students it falls awkwardly close to the November sitting for Edexcel and Cambridge. A student sitting in November should plan revision blocks in September and early October rather than leaving it to the holiday.",
        "Winter fog on the Hadapsar road, harvest weeks in fig-growing villages and wedding season can all disrupt timetables. The table shows the main dates; the tutor adjusts to your child's specific school calendar.",
      ],
      table: {
        caption: "Saswad school year and exam calendar",
        columns: ["Period", "What happens", "Effect on tuition"],
        rows: [
          ["June-July", "Ashadhi Wari, new academic year", "Evening slots move earlier; no mocks that week"],
          ["July-September", "Monsoon, Dive Ghat delays", "Keep a backup connection; lighter schedule"],
          ["Late October-November", "Diwali holidays, November sitting", "Block revision before the holiday"],
          ["December-February", "Winter fog, school mocks", "Timed papers weekly"],
          ["March-June", "May exam preparation, Cambridge May-June series", "Higher frequency from March"],
        ],
      },
    },
    {
      heading: "University pathways from Saswad after IB or IGCSE",
      paragraphs: [
        "An IB Diploma opens routes in India and abroad. For Indian universities, the Association of Indian Universities grants equivalence to the IB Diploma, so Saswad students can apply for most undergraduate courses. For the Common University Entrance Test, IB subjects map to the CUET domain subjects, and a student should check the specific university's eligibility each year.",
        "Engineering and medicine need extra care. JEE Main and NEET have their own subject and mark criteria for students from the IB and IGCSE boards, and those rules change. Students aiming for Pune institutions such as COEP, Symbiosis or Fergusson should read the current eligibility notices rather than rely on last year's.",
        "Abroad, IB and IGCSE are straightforward to present to universities in the UK, Canada, Australia, the US and Singapore. Predicted grades, an English-language qualification where asked and a personal statement carry the application. Tutors help with the subject marks that those predictions depend on; they do not write applications or essays.",
        "For students who stay in the Pune region, an international qualification can also help in applying to Symbiosis, MIT-WPU, FLAME or Ashoka-type programmes, which are familiar with IB. Families should ask each university directly about subject requirements before choosing HL subjects.",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the sciences, for Saswad students",
      paragraphs: [
        "IB Maths has two routes. Analysis and Approaches suits students who like algebra, functions and proof and who may study engineering, physics or maths at university. Applications and Interpretation suits students who prefer statistics, modelling and technology and may head into economics, business, social science or design. Many Saswad families choose without seeing the difference, and a short diagnostic lesson helps.",
        "At Higher Level, AA includes Paper 3 problems and more demanding calculus. Students from the Maharashtra State Board often have good calculus mechanics but less practice stating assumptions or proving a result. The tutor therefore spends time on communication, not only calculation.",
        "In the sciences, Physics, Chemistry and Biology are examined through three papers plus an internal investigation. The most common stumbling block is Paper 2 structured questions, where marks come from a precise sentence rather than a long paragraph. Tutors set short drills that build this precision.",
        "Biology and Environmental Systems have a clear local link in Purandar, where farm questions about irrigation, soil and pollination can supply real examples for investigations. Students who start early on their internal assessment, with a tutor asking questions but never writing the work, tend to avoid a last-term rush.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: choosing subjects and tiers",
      paragraphs: [
        "IGCSE is usually taken in Grades 9 and 10, and many Saswad students meet it when they transfer to a Pune international school or when a family decides on a Cambridge route before Class 9. The first decision is Core versus Extended in tiered subjects like Mathematics, Physics, Chemistry and Biology. Core caps the top grade, while Extended can reach A* and is the usual route for students who plan IB Diploma or A Level sciences afterwards.",
        "The second decision is board. Cambridge and Pearson Edexcel IGCSE differ in paper structure, question style and sitting dates, so we advise a family to confirm the board with the school before choosing a tutor. If a student is a private candidate, the exam centre decides the timetable.",
        "Subject choice at IGCSE typically combines Maths, English, three sciences or a science pair, a humanities or business subject and a language. Hindi and Marathi are available as second-language options with some boards. Computer Science and Economics are popular for students who think about careers in technology or finance.",
        "A good IGCSE plan is built backwards from the target Diploma or A Level. If a student wants IB HL Maths AA, Extended Maths and Additional Maths are advisable. If the student prefers humanities, strong English and a social science matter more than a third science.",
      ],
      bullets: [
        "Extended tier for any student planning IB HL or A Level sciences",
        "Check the board and sitting with the school before booking tuition",
        "Additional Mathematics is a strong bridge to IB Maths AA",
        "Hindi or Marathi second-language options count as a language credit",
      ],
    },
    {
      heading: "How does IB Gram match a tutor for a Saswad student?",
      paragraphs: [
        "We start with a brief: the school and board, the subject and level, the exam sitting and where the student currently stands. You can send this by WhatsApp or email, and we reply with one shortlisted tutor and their teaching background.",
        "The student then takes a free trial lesson. This is a genuine session, not a sales call: the tutor teaches a real topic, and the student and parent can see whether the pace and style suit. If not, we offer another tutor.",
        "After booking, the tutor sends a short written note after each session, covering what was taught, what remains weak and what practice is set. Every few weeks there is a review of progress against the criteria the student will be marked on.",
        "If at any stage the fit is wrong, we change the tutor without fuss. Our tutors teach from India on Indian Standard Time, so slots in the evening after the school run are normal.",
      ],
    },
  ],

  process: [
    { title: "Send the brief", description: "Share the school, board, subject, level and exam sitting by WhatsApp on +91 7439 368 115 or by email." },
    { title: "Receive a shortlisted tutor", description: "We reply with one matched tutor and their background, not a list of ten names to sort through." },
    { title: "Take the free trial", description: "A real lesson on a real topic, online, with the parent welcome to sit in." },
    { title: "Agree the plan in writing", description: "Rate, weekly slot, number of sessions and review dates are written down before anything is booked." },
    { title: "Learn, review, adjust", description: "A note after each session, a progress review every few weeks, and a different tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched to the exact course", description: "The tutor is chosen on programme, subject code and level, not just the word 'IB' on a profile." },
    { title: "Honest about distance", description: "We say plainly that the schools are in Pune and the teaching is online, instead of promising a visit that cannot happen." },
    { title: "Fits the Pune road routine", description: "Evening slots are planned around bus timings, Wari week and the commute your child already makes." },
    { title: "Coaching, not ghost-writing", description: "Tutors explain and mark; they never write an IA, Extended Essay or any submitted coursework." },
    { title: "Written notes each session", description: "Parents see what was covered and what to practise, without having to ask." },
    { title: "Tutor change on request", description: "If the fit is off after a few lessons, we replace the tutor without penalty." },
  ],

  faqs: [
    { question: "Are there IB tutors in Saswad?", answer: "Yes, online. Our IB tutors teach live, one-to-one over video, so a Saswad student gets a specialist in the exact subject without travelling to Pune. Tutors do not visit Saswad homes in person, since home visits run only in Gurugram and parts of Delhi NCR. Lessons are held in the evening on Indian Standard Time, and the tutor is matched on programme, subject and level before the first trial." },
    { question: "Is there an IB or IGCSE school in Saswad?", answer: "We have not been able to confirm one. Saswad's schools follow the Maharashtra State Board and some English-medium curricula. Families interested in IB or IGCSE usually look at Pune campuses such as Vishwashanti Gurukul at Loni Kalbhor or Wellington College International at Wagholi. Please check current offerings with each school directly, because programmes change." },
    { question: "Do tutors visit homes in Saswad?", answer: "No. In-person home tuition is available only in Gurugram and parts of Delhi NCR. For Saswad, every lesson is online: your child studies at home on a laptop while the tutor teaches live. This is what we mean by online home tuition. It avoids the travel time between Pune and Purandar and lets us choose a tutor by expertise rather than by distance." },
    { question: "What does IB or IGCSE tuition cost in Saswad?", answer: "The rate depends on the programme, subject, level, the tutor's experience and how often sessions run, and we quote it in writing before booking. We do not publish a fixed price list. A Primary Years reading session and an IB Physics HL revision block are different jobs, so the free trial comes first and the written proposal follows." },
    { question: "Can my child study IB while living in Saswad and attending a Pune school?", answer: "Yes, and it is common. The school handles classroom teaching; tutoring adds focused practice at home in the evenings, which saves the extra commute for coaching in Pune. We schedule around bus timings so lessons begin after your child has eaten and rested, not straight off the bus." },
    { question: "Which IB subjects do you cover for Saswad students?", answer: "Maths Analysis and Approaches and Applications and Interpretation, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, Environmental Systems, Geography, Hindi B and Marathi B, plus Theory of Knowledge coaching. If a subject is not listed, send the code and we will tell you honestly whether we have a suitable tutor." },
    { question: "Do you teach both Cambridge and Edexcel IGCSE?", answer: "Yes. We cover Cambridge IGCSE and Pearson Edexcel IGCSE in Maths, Additional Maths, the three sciences, Economics, Computer Science, English, Business Studies and Hindi. Because the two boards set different paper styles, we confirm the board first and use that board's past papers from the first lesson." },
    { question: "Is there a free trial lesson?", answer: "Always. The tutor teaches a real topic from your child's current course, online, and you decide afterwards whether the pace and style suit. Rates are discussed only after the trial, in writing, so there is no commitment attached to meeting a tutor." },
    { question: "Can a tutor help with my child's Internal Assessment?", answer: "A tutor can discuss method, point out gaps against the criteria and mark a draft for feedback, but never writes any part of the work. IB and Cambridge rules require that Internal Assessments, Extended Essays and coursework are the student's own, and we hold to that firmly." },
    { question: "How does the Wari affect lessons in Saswad?", answer: "The Ashadhi Wari in June and July brings palkhis through Saswad and heavy crowds around Sopandev's samadhi, so roads and routines change for several days. Tutors move sessions to earlier evening slots or skip a day, and we avoid scheduling mocks that week." },
    { question: "What if our internet connection drops?", answer: "Villages along the Jejuri road and the Dive Ghat approach can have patchy signal, especially in monsoon. We ask families for a backup, such as a mobile hotspot, and the tutor can switch to audio and a shared document if video fails. A missed lesson due to connection is rescheduled." },
    { question: "Can you help my child move from the Maharashtra State Board into IB?", answer: "Yes. A bridging block of four to eight weeks usually covers English academic writing, command terms, any Class 9 or 11 Maths gap and the science vocabulary used in the new school. We do this before the switch where possible, so the first term is not spent catching up." },
    { question: "Can you tutor IB MYP and PYP, or only the Diploma?", answer: "All stages. PYP sessions focus on reading, number sense and helping a child explain a thought. MYP sessions turn on criteria and the Personal Project. Many Saswad families start with primary or middle years because it makes the later Diploma easier." },
    { question: "Which universities can a Saswad IB student apply to?", answer: "Indian universities generally accept the IB Diploma after Association of Indian Universities equivalence, and CUET-UG applies where relevant. JEE and NEET have their own eligibility rules, which change, so check the current notice. Abroad, universities in the UK, Canada, Australia and the US accept the IB and IGCSE directly." },
    { question: "How are tutors chosen and checked?", answer: "We look at qualifications, recent classroom or tutoring experience in the specific programme and how a trial lesson goes. The tutor is based in India and teaches in Indian Standard Time. If the match is not right, we replace the tutor." },
    { question: "Are you affiliated with the IB, Cambridge or any Pune school?", answer: "No. IB Gram is an independent tutoring service. We have no agreement with any school, the IB, Cambridge or Pearson, and the schools named on this page are mentioned only as places Saswad families consider, not as partners." },
    { question: "How do I get started?", answer: "Send the school, board, subject, level and exam sitting to support@ibgram.com or message +91 7439 368 115 on WhatsApp. We reply with a shortlisted tutor and trial timings, usually within a working day." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "The main IB Gram site with tutors and programmes." },
    { label: "IB tutoring across India", href: "/india/", description: "How tuition works in other Indian cities and towns." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The area where in-person home visits are available." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse IB tutor profiles by subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subjects for IGCSE." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL subjects, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by programme and subject." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and book a trial lesson." },
    { label: "IB and IGCSE tutoring in Pune", href: "/pune/", description: "The nearby city where most international schools are." },
    { label: "IB and IGCSE tutoring in Satara", href: "/satara/", description: "Another western Maharashtra town in the Pune region." },
  ],

  closingHeading: "Start an IB or IGCSE tutor search for your child in Saswad",
  closingBody:
    "Tell us the school or board, the subject and level, and the exam sitting your child is working towards. We will reply with a shortlisted tutor and free trial times, all online, so the lesson happens at your own table in Saswad without anyone making the trip from Pune.",
};
