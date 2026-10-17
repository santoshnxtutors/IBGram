import type { CitySeoPage } from "../types";

/**
 * /aurangabad-bihar/ - IB and IGCSE tutoring page for Aurangabad, Bihar (not the Maharashtra city,
 * now Chhatrapati Sambhajinagar). No IB or Cambridge/Edexcel school could be confirmed in Aurangabad
 * district, so stripSchools is empty and clusters point at Gaya, Patna, Kolkata and Delhi NCR, reusing
 * names verified on the Gaya, Patna and Sasaram pages. Online only.
 */
export const aurangabadBihar: CitySeoPage = {
  slug: "aurangabad-bihar",
  countryName: "Aurangabad",
  countryNameLong: "Aurangabad, Bihar",
  demonym: "Aurangabad",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Chhath week, the summer loo and winter fog decide which weeks a household can protect for lessons",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.7521, longitude: 84.3742 },
  wikipedia: "https://en.wikipedia.org/wiki/Aurangabad,_Bihar",
  alternateNames: ["Aurangabad Bihar", "Aurangabad Deo"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Aurangabad, Bihar | Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Aurangabad in Bihar (not Maharashtra): private one-to-one tuition from home over video, Cambridge and Edexcel covered, free trial first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Aurangabad, Bihar",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR AURANGABAD, BIHAR",
  heroSubtitle:
    "This page is for Aurangabad in Bihar, not the Maharashtra city now called Chhatrapati Sambhajinagar. Looking for home tuition here for an IB or IGCSE student? It is taught online, live and one to one, from a specialist, while your child stays at home. We do not send tutors to Aurangabad, and the first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Aurangabad",
  imageAltText: "An Aurangabad, Bihar student at home working on IGCSE Mathematics with a tutor over a video call",
  secondaryKeywords: [
    "IB tutor Aurangabad Bihar",
    "IGCSE tutor Aurangabad Bihar",
    "IB home tuition Aurangabad Bihar",
    "IGCSE home tuition Aurangabad Bihar",
    "IB private tuition Aurangabad Bihar",
    "IB online tuition Aurangabad Bihar",
    "IGCSE online tuition Aurangabad Bihar",
    "IB Maths tutor Aurangabad Bihar",
    "IGCSE Maths tutor Aurangabad Bihar",
    "IB Physics tutor Aurangabad Bihar",
    "IB Chemistry tutor Aurangabad Bihar",
    "IB Biology tutor Aurangabad Bihar",
    "IB DP tutor Aurangabad Bihar",
    "IB MYP tutor Aurangabad Bihar",
    "IB PYP tutor Aurangabad Bihar",
    "IB tutor Deo Bihar",
    "IGCSE tutor Daudnagar",
    "IB tutor Aurangabad Magadh",
    "IB and IGCSE tutors in Aurangabad Bihar",
  ],

  heroTrustPoints: [
    "Tutors are chosen for recent teaching of the exact course your child follows",
    "Lessons are live and online; home visits exist only in Gurugram and parts of Delhi NCR",
    "A short written note follows each lesson",
    "No tie to any school, exam board or organisation named here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Whole IB continuum" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "IST", label: "No time-zone gap" },
    { value: "Free trial", label: "Try before deciding" },
  ],

  intro: {
    heading: "Which Aurangabad is this, and why do families here ask about the IB?",
    paragraphs: [
      "There are two Aurangabads in India. This one is the district town in central Bihar, close to the Jharkhand border and the Sone river, known for the Deo Sun temple and the Chhath festival that draws crowds each year. The other is in Maharashtra and was renamed Chhatrapati Sambhajinagar. Our tutoring page for this Aurangabad is written for Bihar families only, so nobody should confuse the two when looking for tuition.",
      "Local schools follow the Bihar School Examination Board and CBSE, with a few on ICSE. We could not confirm a single school in Aurangabad, Bihar, as running the IB or an IGCSE, and we will not name one we cannot verify. That is why enquiries for IB and IGCSE tutors in Aurangabad come from unusual cases: a child at a boarding school in Kolkata, Delhi or the hills, a family relocating for a posting, or a student registered with an online provider.",
      "Every lesson is delivered on video, in Indian Standard Time. IB Gram tutors are located across India, and in-person home visits are limited to Gurugram and parts of Delhi NCR. So an Aurangabad student sits at home with a laptop and works one to one with a tutor who has taught the specification recently.",
      "Tutors coach and explain. Internal Assessments, Extended Essays, TOK essays and coursework remain the student's own work.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Boarders home on leave, online-school students and families planning a move",
      "Private lessons at home over video, not visits to your door",
      "A free trial lesson before fees are discussed",
    ],
  },

  programmesIntro:
    "Most Aurangabad parents have not seen an IB classroom, because none is close. This is a plain description of each programme and how it typically appears for a family in this part of Magadh.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Learning is arranged into units of inquiry around big themes, with students asking questions, researching and reflecting, and finishing with an Exhibition in the last primary year.",
      countryNote:
        "In Aurangabad it usually means a young boarder returning for the long break, when a tutor keeps reading, writing and number thinking active.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers assess each subject against clear criteria, with global contexts and key concepts connecting topics, and a Personal Project at the end.",
      countryNote:
        "For students from Bihar Board or CBSE classes, MYP asks for explained reasoning in full sentences, which is the skill the tutor concentrates on.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects, three at Higher Level, and complete the Extended Essay, Theory of Knowledge and CAS. Final grades come mainly from May examinations plus internal assessment.",
      countryNote:
        "Aurangabad Diploma students are typically at a boarding school elsewhere or an online school, so Higher Level Maths and the sciences often need full teaching.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma subjects are combined with a career-related study, a reflective project and skills development for applied pathways.",
      countryNote:
        "Almost no school in Bihar offers it; an Aurangabad student meets it only through an online provider, and we support the academic courses in it.",
    },
  ],

  subjectsIntro:
    "We start from the course code and the next assessed task, not a subject label. Where no school in the district teaches the specification, the first question is what has been covered and what comes next.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof, with Paper 3 problems that reward thinking beyond the coaching-class pattern." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling done with a graphic calculator, useful for economics, social science and design routes." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern topics, with an investigation that needs a clear, measurable variable." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, bonding, kinetics and organic reactions, learned best through short daily sets." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology, with command terms deciding how each answer is scored." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams built correctly and applied to real cases, with Higher Level adding calculation papers." },
    { name: "IB Business Management", levels: "HL / SL", description: "Theory applied to cases, useful to students from trading and contracting families." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and a programmed solution requiring real coding hours." },
    { name: "IB Psychology", levels: "HL / SL", description: "Research methods and the main approaches to behaviour, with a first experiment designed for the IA." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Commentary on unseen texts, comparative essays and the recorded oral." },
    { name: "IB Hindi A", levels: "HL / SL", description: "Hindi is the first language locally, so lessons go to literary analysis and essay writing to IB criteria." },
    { name: "IB Hindi B", levels: "SL / HL", description: "A language-acquisition course for students who meet Hindi mainly at school, covering oral and written tasks." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "The Sone basin, groundwater use and Gangetic-plain agriculture provide close-to-home case studies." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Knowledge questions challenged with real examples, the tutor acting as the questioning classmate." },
  ],

  igcseSubjectsIntro:
    "Same subject names, different papers: Cambridge and Edexcel each set their own tiers and dates, and a Cambridge May-June or October-November candidate prepares differently from an Edexcel one who may also sit in January. So the board is settled before any topic is opened.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended needs working shown on each line; answers alone leave marks behind." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus and trigonometry that make IB Maths AA less of a jump." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Similar topics in different wording, worked on board papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation handling, units and the practical-skills paper, practised weekly." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, electrolysis and organic chemistry carry most marks." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Enzymes, inheritance and transport, with extended answers structured on purpose." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions turned into reasoning chains, with evaluation at Extended tier." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, trace tables and logic gates through writing small programs." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Summary, directed writing and composition, each timed separately." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading and writing practice for students whose exam centre registers Hindi." },
  ],

  regionsTitle: "Aurangabad town and the Magadh region around it",
  regionsIntro:
    "Everything is online, so these areas are context: where schools and coaching cluster, and how the Grand Trunk Road, the Sone and the festival calendar shape the week.",
  regions: [
    { name: "Aurangabad town centre", note: "The market and administrative core, with the majority of private schools and tuition classes within a short ride." },
    { name: "Deo", note: "Home to the Sun temple and the largest Chhath gathering in the area, when the whole district slows down." },
    { name: "Ramesh Chowk and the bus stand", note: "A busy commercial junction in the town, where families of shopkeepers and transport workers live nearby." },
    { name: "Sinha College area", note: "An older institutional quarter around the town's long-established degree college." },
    { name: "Anugrah Narayan Road", note: "The railway station on the Grand Chord line serving the district, useful for travel towards Gaya, Patna and Delhi." },
    { name: "Daudnagar", note: "A sizeable town near the Sone with its own schools and coaching classes and a trading community." },
    { name: "Rafiganj", note: "A small town on the railway with a mix of farming and service households." },
    { name: "Obra and Nabinagar", note: "Areas with power-generation connections, where some families come from other states." },
    { name: "Umga", note: "Known for its hilltop temple complex, with quiet surrounding villages and variable evening power." },
  ],

  schoolDisclaimer:
    "No school in Aurangabad, Bihar, has been verified by us for the IB, Cambridge or Edexcel, which is why there is no school strip on this page. Schools listed below are in other cities and appear purely to show what exists; ask each one for its current curriculum. We are unconnected to them and to the IB, Cambridge and Pearson.",
  schoolClusters: [
    {
      city: "Aurangabad district, Bihar",
      note: "Schooling here follows the Bihar Board and CBSE, with a few ICSE schools. We found no IB or IGCSE school locally, so international syllabi are studied elsewhere or online.",
      schools: [],
    },
    {
      city: "Nearby: Gaya and Patna",
      note: "Gaya is around 85 kilometres and Patna about 140 kilometres away. We could not confirm IB or IGCSE schools in Gaya, and Patna has few, so most families here look at Kolkata or Delhi NCR.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "Reachable by rail, Kolkata has long-established IB schools that some Bihar families consider for boarding.",
      schools: ["Calcutta International School", "The Heritage School, Kolkata", "The Cambridge School, Calcutta"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Delhi and its neighbours hold the largest set of IB and IGCSE campuses reachable by rail from this part of Bihar.",
      schools: ["Vasant Valley School, Delhi", "Sanskriti School, Delhi", "The British School, New Delhi"],
    },
    {
      city: "Nearby: Mussoorie",
      note: "Woodstock School in Mussoorie is an authorised IB World School with boarding, a long-standing choice for Bihar families.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],

  modesIntro:
    "All Aurangabad lessons are online and one to one. What differs is the pattern: a weekly slot, a block during a boarding school's break, or a run of papers before the exam.",
  modes: [
    {
      title: "Regular weekly lessons",
      description:
        "A fixed weekly slot with the same tutor, working through the syllabus with past papers and marked homework.",
      bullets: [
        "One tutor throughout",
        "Past papers worked on a shared screen",
        "Any IB programme or IGCSE board",
        "Shifted around Chhath or fog days",
      ],
    },
    {
      title: "Boarders' break blocks",
      description:
        "Frequent sessions across a boarding school's holiday, closing gaps and previewing the next term.",
      bullets: [
        "Set to the school's actual dates",
        "More sessions in a shorter span",
        "Summary notes for teachers",
        "Light check-ins in term",
      ],
    },
    {
      title: "Pre-exam preparation",
      description:
        "Timed papers with detailed feedback in the weeks before May, October-November or January.",
      bullets: [
        "Marked against current schemes",
        "Recurring errors listed and fixed",
        "Booked a few weeks in advance",
        "Adjusted for local holidays",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Aurangabad, Bihar?",
      paragraphs: [
        "We could not confirm one. The district's schools follow the Bihar School Examination Board and CBSE, and the closest confirmed international schools are in cities several hours away. That is true for Gaya as well, which is the nearest major town, and Patna has only a small number.",
        "So families with international ambitions tend to look at three destinations. Kolkata has long-established IB schools such as Calcutta International School, The Heritage School and The Cambridge School. Delhi NCR has Vasant Valley, Sanskriti and The British School, among many others. Woodstock School in Mussoorie is an authorised IB World School with boarding.",
        "None is a daily commute, so each is a boarding or relocation decision. Families who prefer to keep the child at home lean on online provision, and a private tutor covers the subjects that are hardest to self-teach.",
        "This page is about the Bihar city, so if you are searching for tutors in the Maharashtra Aurangabad, now Chhatrapati Sambhajinagar, look for that city separately.",
      ],
      table: {
        caption: "Confirmed IB and IGCSE options reachable from Aurangabad, Bihar",
        columns: ["School", "City", "Curriculum recorded", "Route"],
        rows: [
          ["Woodstock School", "Mussoorie", "IB World School", "Boarding"],
          ["Calcutta International School", "Kolkata", "IB", "Boarding or relocation"],
          ["Vasant Valley School", "Delhi", "IB", "Relocation"],
          ["The British School", "New Delhi", "IB", "Relocation"],
        ],
      },
      bullets: [
        "Nothing confirmed inside Aurangabad district",
        "Kolkata, Delhi NCR and Mussoorie are the usual directions",
        "Each option means boarding or relocating",
        "Online tutoring supports students who stay",
      ],
    },
    {
      heading: "How does Bihar Board or CBSE study compare with the IB and IGCSE?",
      paragraphs: [
        "A student from a Bihar Board or CBSE school arrives with real strengths: discipline, comfort with long study hours and a solid grasp of content. The IB and IGCSE keep the workload but change the target. Marks go to explanation and application, and there is often more than one acceptable line of reasoning.",
        "The difference shows first in Mathematics and the sciences. In IB Analysis and Approaches or IGCSE Extended, questions can be unfamiliar in setup, and multi-step reasoning replaces pattern-matching. In Biology and Chemistry, the exact command term determines what an answer must contain.",
        "Coursework changes the rhythm too. IB students complete Internal Assessments and an Extended Essay over two years, and IGCSE science tests practical skills on paper. Where laboratory access is limited, tutors help students design investigations from data and simulations.",
        "English is the working language of the papers, so students used to Hindi-medium schooling often need a period of writing practice.",
      ],
      table: {
        caption: "Bihar Board, CBSE, IGCSE and IB compared",
        columns: ["Point", "Bihar Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["What scores well", "Textbook accuracy", "Accuracy with application", "Structured reasoning", "Evaluation and argument"],
          ["Practical work", "Practical exam, limited", "Practical file", "Practical-skills paper", "Internal Assessment investigation"],
          ["Language of paper", "Hindi or English", "English or Hindi", "English", "English for most subjects"],
          ["Usual exam months", "February", "February-April", "May-June, Oct-Nov, Jan (Edexcel)", "May"],
        ],
      },
      bullets: [
        "Reasoning and application earn the marks",
        "Maths problems are less pattern-based",
        "Practical skills are tested differently",
        "Hindi-medium students need English writing practice",
      ],
    },
    {
      heading: "What are the costs of IB and IGCSE tuition for an Aurangabad family?",
      paragraphs: [
        "We do not print prices, since the figure follows from the lesson, not from Aurangabad. Level is the biggest driver: IB Higher Level Chemistry with a tutor who has taught it recently is a different service from IGCSE Core Mathematics. Session length and weekly frequency follow.",
        "A tutor's match to your specification also counts. Someone who knows the exact Cambridge or Edexcel code, or the IB subject and level, needs less time explaining the format and more on your child's weak points.",
        "Because there is no travel, an Aurangabad family pays nothing extra for being outside a metro and receives no discount for it either. Online delivery carries no premium.",
        "Quotes come in writing after the free trial and before any booking, and lessons can be paused around exams, weddings or Chhath without penalty.",
      ],
      bullets: [
        "Level, length and frequency set the rate",
        "Match to your exact specification matters",
        "No travel or metro premium",
        "Written quote after the free trial",
      ],
    },
    {
      heading: "Local coaching, a private tutor at home or an online IB tutor: which fits Aurangabad?",
      paragraphs: [
        "Aurangabad and Daudnagar have coaching classes for the Bihar Board, CBSE and competitive exams, and many families send older students to Patna or Kota for JEE and NEET. These classes serve their syllabus well, but none can teach a Diploma Higher Level course.",
        "Local private tutors are useful for school subjects. Someone who has recently taught the international specification, and can mark to examiner standards, is rare at district level.",
        "An online tutor from a national pool can be matched to your course and works one to one, at times that fit a school day and household routines. It requires only a steady connection.",
        "The table compares the routes.",
      ],
      table: {
        caption: "Support routes for an international-syllabus student in Aurangabad",
        columns: ["Route", "Right syllabus?", "Personal attention", "Practical catch"],
        rows: [
          ["Bihar Board or CBSE coaching class", "No", "Group", "Built for other exams"],
          ["JEE or NEET coaching in Patna or Kota", "No", "Large batches", "Relocation"],
          ["Local private tutor", "Rarely", "One to one", "Little experience of mark schemes"],
          ["Online one-to-one tutor", "Yes, matched to the course", "One to one", "Needs a stable connection"],
        ],
      },
      bullets: [
        "Local coaching serves other exams",
        "Few private tutors know the specification",
        "Online tutoring matches the course",
        "A stable connection is the main requirement",
      ],
    },
    {
      heading: "How do Chhath, the summer loo and winter fog shape study in Aurangabad?",
      paragraphs: [
        "Aurangabad has a continental climate. Summers from April to June are severe, with the hot loo wind keeping people indoors in the afternoon, so lessons are set for morning or evening and power cuts are anticipated. The monsoon from late June brings relief and humidity. December and January bring cold and dense fog.",
        "Chhath is the festival that matters most here. In late autumn, the whole district turns towards Deo, and families prepare for days beforehand. Lessons pause for the main days, and students often want a lighter schedule the week before. Diwali, Dussehra and Holi add breaks.",
        "Wedding season, especially in winter and early summer, affects many households, and long train journeys to boarding schools take days off the calendar.",
        "The exam calendar stays fixed: IB in May, Cambridge in May-June and October-November, and Edexcel adding January. We plan backwards from those dates.",
      ],
      table: {
        caption: "The study year in Aurangabad, Bihar",
        columns: ["Period", "Local conditions", "How lessons adapt"],
        rows: [
          ["December to February", "Cold, fog; Edexcel January series", "Afternoon slots, mock papers"],
          ["March to June", "Hot, loo winds; IB and Cambridge May papers", "Early or late slots, timed papers"],
          ["July to September", "Monsoon humidity", "Regular weekly lessons, buffer slots"],
          ["October to November", "Dussehra, Diwali, Chhath; Cambridge Oct-Nov papers", "Planned pause, then focused revision"],
        ],
      },
      bullets: [
        "Summer afternoons are avoided",
        "Chhath needs a planned break",
        "Fog affects winter mornings",
        "Board exam dates never move",
      ],
    },
    {
      heading: "What are the next steps for Aurangabad students on the IB or IGCSE?",
      paragraphs: [
        "In Bihar, the nearby options include Magadh University at Bodh Gaya, the Central University of South Bihar in Gaya, IIM Bodh Gaya, and in Patna, IIT Patna, NIT Patna and AIIMS Patna. Locally, Sinha College is a long-established degree college. Many students look further to Delhi, Kolkata or abroad.",
        "Indian admission depends on equivalence. The Association of Indian Universities recognises the IB Diploma and, with documentation, IGCSE plus a qualifying Class 12. CUET-UG offers a route into many central universities. JEE and NEET have their own eligibility rules, which should be read from the current official notices before subjects are locked.",
        "For overseas study, predicted grades issued in autumn of the final year are the first thing universities see, so steady work counts from the start.",
        "Tutors work on subject learning that supports each of these routes and leave counselling and applications to the school or a qualified counsellor.",
      ],
      bullets: [
        "Regional options include Magadh University, IIT Patna, NIT Patna and AIIMS Patna",
        "AIU equivalence and CUET-UG matter for Indian degrees",
        "JEE and NEET eligibility must be checked for subjects",
        "Predicted grades count for overseas applications",
      ],
    },
    {
      heading: "How do online IB Maths and Science lessons work for an Aurangabad student?",
      paragraphs: [
        "A Maths session opens with feedback on the last set, then a new topic on a shared whiteboard, with the student trying each step. Analysis and Approaches emphasises algebra, calculus and proof; Applications and Interpretation emphasises statistics, models and calculator technique.",
        "In the sciences, the tutor works through the specification with past-paper questions and immediate marking. For the Internal Assessment, the tutor helps the student choose a workable research question, a method and an analysis plan, without writing any of it.",
        "Home laboratories are rare, so investigations are built on simulations, open datasets, phone measurements or simple safe experiments. Examiners reward sound design, not expensive equipment.",
        "A short written note follows each lesson, listing topics covered, mistakes and the next task.",
      ],
      bullets: [
        "Shared whiteboard and past papers",
        "Sciences taught in specification order",
        "IA investigations designed around home resources",
        "A note after every lesson",
      ],
    },
  ],

  tutorsIntro:
    "Our tutors sit in other Indian cities and teach over video, so nobody has to live in Magadh. The test we apply is narrower: has this person taught your child's course, at this level, in the last year or two?",

  process: [
    { title: "Send your details", description: "Programme or board, subject, level, current school or provider and target exam session." },
    { title: "Get a shortlist", description: "Tutors chosen for recent teaching of that exact course, with reasons." },
    { title: "Take the free lesson", description: "A live session on a real topic before any rate is agreed." },
    { title: "Read the plan", description: "A brief written outline of topics, pace and progress reports." },
    { title: "Continue weekly", description: "A fixed slot, adjusted for exams, Chhath and school terms." },
  ],

  whyPoints: [
    { title: "Matched by syllabus", description: "Tutors are chosen for your course code and level, not a broad label." },
    { title: "Fit for a district with no local option", description: "Tutors are prepared to teach a whole subject where no classroom does." },
    { title: "See before paying", description: "A free live lesson lets you judge the teaching first." },
    { title: "Coaching, not writing", description: "Feedback on IAs and essays, with the writing left to the student." },
    { title: "Progress you can read", description: "A note after each session and a review every few weeks." },
    { title: "Free to change", description: "No long contract and a simple switch of tutor if required." },
  ],

  faqs: [
    { question: "Is this page for Aurangabad in Bihar or in Maharashtra?", answer: "It covers Aurangabad in Bihar, the Magadh district town near Deo and the Sone. The Maharashtra city, officially Chhatrapati Sambhajinagar, has a different school scene and calendar. Online tuition is possible for either, but the schools, festivals and boards described on this page fit Bihar only." },
    { question: "Does Aurangabad, Bihar have an IB or IGCSE school?", answer: "None that we could verify. Schools in the district follow the Bihar Board or CBSE, with a few on ICSE. The international schools we could confirm are in Kolkata, Delhi NCR and Mussoorie, which is why families here mostly follow an IB or IGCSE course through boarding or an online school, using a tutor for the difficult subjects." },
    { question: "Will a tutor come to our house in Aurangabad?", answer: "No, and we would rather say so plainly. Tutors do not travel to Aurangabad; house calls exist only in Gurugram and parts of Delhi NCR. Private tuition at home here is a live video lesson, one to one, with your child at their own desk and the tutor on a laptop screen, in Indian Standard Time." },
    { question: "What will IB or IGCSE tuition cost us in Aurangabad?", answer: "Nothing is priced until you have had the free lesson. After it, we write down a rate that reflects the level taught, the length and number of weekly sessions, and the tutor's track record on that exact specification. Living outside a metro does not change it, and a pause for exams or a wedding does not incur a charge." },
    { question: "Which schools might a Bihar family consider for the full IB?", answer: "Ones we could verify include Woodstock School in Mussoorie, Calcutta International School and The Heritage School in Kolkata, and Vasant Valley and Sanskriti in Delhi. Every one of them would mean boarding or moving house. We list them as context, not advice, and IB Gram has no relationship with any of them." },
    { question: "My daughter is in a Hindi-medium class. Is IGCSE realistic?", answer: "It is, particularly if she starts in Class 8 or 9. Expect the first term to be about English written answers, command words and showing every line of working in Mathematics. A tutor begins with a diagnostic lesson, then paces the transition so confidence grows before the workload does." },
    { question: "Which IB Diploma subjects are available through IB Gram tutors?", answer: "Maths in both forms, the three sciences, Economics, Business Management, Computer Science, Psychology, English A, Hindi A and B, Environmental Systems and Societies and TOK, at HL and SL where the subject allows it. If yours is not on the list, ask us first; we will tell you plainly if nobody suitable is available." },
    { question: "Can a tutor help with the Extended Essay or an Internal Assessment?", answer: "Only as a coach. A tutor can talk through what a criterion rewards, sharpen a research question, comment on a plan and read a draft critically. Writing it, collecting the data and drawing the conclusions belong to the student. The IB expects this, and we will not cross it, even close to a deadline." },
    { question: "How can a student in Aurangabad actually sit the exam?", answer: "Through an approved centre, since the IB, Cambridge and Edexcel register candidates only via schools or authorised centres, and we could not confirm one in the district. Most families register through a school elsewhere or a private-candidate centre in a bigger city, and the closing dates arrive well before the exam series." },
    { question: "Is support available for younger students on MYP or PYP?", answer: "Yes. For MYP the work is criterion-based writing, science reports and the Personal Project, coaching only. For PYP it is lighter: reading, number sense and preparing for the Exhibition. A child boarding elsewhere often takes a concentrated run of sessions in the school holidays instead of a weekly slot." },
    { question: "How does Chhath week fit with lessons?", answer: "We plan around it. The main days are a pause, and many households prefer a lighter week before as well, with travel to Deo or to villages. Lessons that fall in that window are moved, not dropped, and the study plan is re-cut so the exam timeline does not slip." },
    { question: "What do we do when the summer loo or a power cut interrupts a class?", answer: "Choose morning or evening slots in summer and keep a charged laptop plus a phone hotspot at hand. If a lesson is lost, it is rebooked within the same week. Foggy winter mornings are handled in the same way, with later slots when visibility or connectivity is poor." },
    { question: "At what point in the course should tutoring start?", answer: "Earlier is easier: the start of Class 11 for the Diploma and Class 9 for IGCSE. That gives time to build habits without a rush. Starting later is still workable; the tutor narrows the plan after a diagnostic lesson and puts the topics carrying the most marks first." },
    { question: "If the match is wrong, what happens?", answer: "You tell us, and a different tutor is introduced. Reviews every few weeks exist to spot a poor fit early, nothing is signed for the long term, and the note after each session gives you something concrete to judge by instead of a feeling." },
    { question: "What is the quickest way to start?", answer: "WhatsApp +91 7439 368 115 or write to support@ibgram.com with the subject, level, board and a few times that suit you. A shortlist and a trial slot come back. The trial is real teaching, and you choose whether to continue only after watching it." },
    { question: "Are you connected with any school or examination body?", answer: "No. IB Gram is independent of the International Baccalaureate, Cambridge, Pearson Edexcel and every school on this page. Schools are mentioned so that families can see the map of options, and nothing here should be read as an endorsement or a partnership." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online tuition works from city to city." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person home visits are offered." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers and subjects." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The DP structure and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP inquiry units and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA versus AI explained." },
    { label: "Browse tutors", href: "/tutors/", description: "Search by subject and level." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and book a trial." },
    { label: "IB and IGCSE tutors in Gaya", href: "/gaya/", description: "The nearest large Bihar city to the south." },
    { label: "IB and IGCSE tutors in Patna", href: "/patna/", description: "The state capital, with a few international options." },
    { label: "IB and IGCSE tutors in Sasaram", href: "/sasaram/", description: "A neighbouring Bihar town served online." },
    { label: "IB and IGCSE tutors in Dehri-on-Sone", href: "/dehri-on-sone/", description: "The Sone river town in Rohtas district." },
  ],

  closingHeading: "Book a free IB or IGCSE trial lesson in Aurangabad, Bihar",
  closingBody:
    "Write to us with what your child studies, at which level, and which evenings are free at home. A tutor and a trial slot come back to you, and the lesson happens on screen. Keep going only if it was useful. Reach support@ibgram.com or WhatsApp +91 7439 368 115.",
};
