import type { CitySeoPage } from "../types";

/**
 * Sedam (Kalaburagi district, Karnataka). No IB or Cambridge/Edexcel school could be confirmed in the town,
 * so stripSchools is empty. The nearby-city clusters reuse school names already published on the Raichur and
 * Bengaluru-linked pages and are labelled as nearby.
 */
export const sedam: CitySeoPage = {
  slug: "sedam",
  countryName: "Sedam",
  countryNameLong: "Sedam, Karnataka",
  demonym: "Sedam",
  flagCode: "in",
  countryCode: "IN",
  state: "Karnataka",
  stateCode: "IN-KA",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early evenings and weekend mornings, kept clear of the Kalyana Karnataka summer heat, Dasara week and Muharram processions",
  lastUpdated: "2026-09-21",
  geo: { latitude: 17.18, longitude: 77.28 },
  alternateNames: ["Sedam town", "Sedam Kalaburagi", "Sedam Gulbarga", "Sedam taluk", "Seram"],
  wikipedia: "https://en.wikipedia.org/wiki/Sedam",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sedam | Online Home Tuition",
  metaDescription:
    "Sedam families can book live one-to-one IB and IGCSE tutors online for Maths, sciences and languages, planned around cement-belt shifts. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sedam",
  heroEyebrow: "LIVE ONE-TO-ONE IB & IGCSE TUITION FOR SEDAM FAMILIES",
  heroSubtitle:
    "If you are searching for home tuition in Sedam for an IB or IGCSE subject, here is the honest picture. Teachers who know these syllabuses are not sitting in a taluk town of the Kagna valley, so the lesson travels to your child instead. A private tutor teaches live on video while your son or daughter works from the study table at home, and the first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Sedam",
  imageAltText: "Sedam student with a laptop and notebook in a live online lesson with an IB Chemistry tutor",
  secondaryKeywords: [
    "IB tutor Sedam",
    "IGCSE tutor Sedam",
    "IB home tuition Sedam",
    "IGCSE home tuition Sedam",
    "IB private tuition Sedam",
    "IB Maths tutor Sedam",
    "IGCSE Maths tutor Sedam",
    "IB Physics tutor Sedam",
    "IB Chemistry tutor Sedam",
    "IB Biology tutor Sedam",
    "IB DP tutor Sedam",
    "IB MYP tutor Sedam",
    "IB PYP tutor Sedam",
    "IGCSE online tuition Sedam",
    "online IB tutor Sedam",
    "IB tutor Kalaburagi district",
    "IGCSE tutor Chittapur",
    "online tutor Malkhed Road",
    "IGCSE Physics tutor Sedam",
    "IB tutor Gulbarga district",
  ],

  heroTrustPoints: [
    "Tutors who have already taught the IB or IGCSE course your child follows",
    "Live video lessons, one student at a time",
    "A trial lesson at no cost and a written quote afterwards",
    "Independent of the IB, Cambridge, Pearson and every school",
  ],
  heroStats: [
    { value: "Online", label: "All lessons for Sedam" },
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "May & Nov", label: "Main exam windows" },
    { value: "Free trial", label: "First lesson on us" },
  ],

  intro: {
    heading: "What IB and IGCSE study looks like for a family in Sedam",
    paragraphs: [
      "Sedam sits on the Kagna river in the south of Kalaburagi district, a limestone belt where cement plants share the horizon with jowar and toor fields. Children here attend Karnataka State Board or CBSE schools, and after Class 10 most move into the two-year pre-university stream. Anyone choosing the IB or IGCSE is stepping off the usual road, almost always for a concrete reason.",
      "So this page begins with how the service works. Home tuition in Sedam means online home tuition: a one-to-one private lesson that your child attends from home on a laptop or tablet. No tutor visits houses in Sedam, because in-person visits are limited to Gurugram and parts of Delhi NCR. What you gain is access to a teacher who has handled the exact paper, which a taluk town rarely offers.",
      "Hyderabad is the metro most Sedam families think of first, with Tandur just across the Telangana line, and Kalaburagi city is the district hub with its universities. A tutor on screen removes the bus ride to either, and an evening that would have gone to travel goes to study.",
      "IB Gram is independent of the International Baccalaureate, Cambridge, Pearson Edexcel and any school mentioned here. Our tutors teach, explain and coach. The Internal Assessments, Extended Essay, Theory of Knowledge work and IGCSE coursework remain the student's own, written in the student's own words.",
    ],
    bullets: [
      "PYP, MYP, Diploma and Career-related programme help",
      "Cambridge and Pearson Edexcel IGCSE",
      "One learner per session at a regular weekly hour",
      "A short written note for parents after each lesson",
      "Plans that work around PUC exams and local festivals",
    ],
  },

  programmesIntro:
    "We could not confirm an IB or IGCSE school in Sedam itself. Children usually follow these programmes through an online school, a relocation or private candidacy, so the notes below describe each IB stage and what a Sedam student tends to need.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Teaching is arranged around themes and questions, and pupils gradually learn to plan, inquire and reflect. A closing Exhibition invites each child to explore an issue of their own choosing.",
      countryNote:
        "Sedam pupils usually need relaxed English conversation and number play in the early years, and Exhibition ideas often come from the cement works, the Kagna floodplain or the weekly market.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is marked against published criteria, so a student must show reasoning, not only the answer. The programme ends with a Personal Project that the learner designs and delivers alone.",
      countryNote:
        "Children arriving from SSLC-style preparation need time to get used to criterion-based grading, so early sessions cover how to structure explanations and lab write-ups.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects across two years, three at Higher Level, with an Extended Essay, Theory of Knowledge and CAS alongside. Final papers are sat in May or November and course-work marks count towards the result.",
      countryNote:
        "Sedam Diploma students lean towards Maths, Physics, Chemistry and Biology. Some also keep Karnataka CET or NEET in view, which makes a firm weekly plan from Class 11 worthwhile.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller set of Diploma courses is combined with a career-related study and a reflective project.",
      countryNote:
        "Rare in this part of Karnataka. Where a family does pursue it, we teach the academic courses and help the student fit project deadlines around them.",
    },
  ],

  subjectsIntro:
    "Matching in Sedam begins with the course code and level. An HL Physics student and a Class 8 MYP Sciences beginner need very different teachers, so we confirm syllabus and level before we put a name forward.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus, vectors and proof, with extra practice at writing clean working for students used to short-answer papers." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology-assisted problems; the exploration can use real data such as cement output or local rainfall." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, electricity and fields, with an investigation that rewards honest handling of uncertainty." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, energetics, kinetics and organic reactions, taught through worked questions and data analysis." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and human physiology, with exact terminology and data-based questions." },
    { name: "IB Economics", levels: "HL / SL", description: "Market theory, national income and development, using industry and farming examples from Kalyana Karnataka." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers and the internal commentary, with limestone and cement as a ready source of examples." },
    { name: "IB Geography", levels: "HL / SL", description: "Freshwater, extreme environments and development, plus the fieldwork write-up." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Resource use, pollution and sustainability, which sit close to an area of quarrying and kilns." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading, comparative essays and the oral, for students whose daily languages are Kannada, Telugu or Urdu." },
    { name: "IB Kannada B", levels: "SL / HL", description: "Language acquisition for students who speak Kannada at home but have not studied it for written analysis." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Structured speaking, reading and writing practice for those who choose Hindi as their second language." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, networks and databases; the internal project is marked on planning and documentation as much as on code." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation-led sessions on knowledge claims, with the student writing all assessed work." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Help with choosing a researchable question and a plan; the 4,000-word essay is written by the student." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Criteria-based investigation, analysis and reflection tasks." },
  ],

  igcseSubjectsIntro:
    "Most IGCSE students from the Sedam area study on their own as private candidates or through an online school. We start with the syllabus code and the tier, because Core, Extended, Foundation and Higher papers require different preparation.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Cambridge Core or Extended, Edexcel Foundation or Higher", description: "A wide syllabus where careless marks go missing; we work on method, units and command words." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus and trigonometry, a sensible bridge to IB Maths AA or to entrance preparation." },
    { name: "IGCSE Physics", levels: "Core and Extended", description: "Forces, thermal physics and circuits, with the alternative-to-practical paper taught as a reasoning exercise." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Stoichiometry, the periodic table and qualitative analysis, which must be learnt as routines." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Wide content with questions on experimental design and graphs." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Algorithms, pseudocode and a programming language of the student's choice." },
    { name: "IGCSE English First or Second Language", levels: "Grade 9-10", description: "Directed writing, summary and comprehension for multilingual students moving between Kannada, Telugu, Urdu and English." },
    { name: "IGCSE Economics and Business Studies", levels: "Grade 9-10", description: "Precise definitions, data response and short structured answers." },
    { name: "IGCSE Geography", levels: "Grade 9-10", description: "Physical and human topics with case-study writing." },
  ],

  regionsTitle: "Sedam town and surrounding areas our online tutors serve",
  regionsIntro:
    "Every lesson runs on screen, so what matters is timing and connection quality. These notes describe how the day tends to run in each part of the taluk so lessons can be fixed at sensible hours. We do not send tutors to any of these places.",
  regions: [
    { name: "Sedam town centre", note: "Around the bus stand and the main market, where fixed broadband is common and evenings are busy with traffic." },
    { name: "Station area", note: "Households near the railway halt on the Kalaburagi line, used by families who commute to Kalaburagi or Hyderabad." },
    { name: "Malkhed Road", note: "The stretch towards the cement plants, with working families on shift patterns that shape the lesson hour." },
    { name: "Kodla", note: "A cement-industry settlement close by, where company households often have steady power and internet." },
    { name: "Nalwar", note: "A village-and-town mix to the west, where mobile data is the main connection for many homes." },
    { name: "Mudhol and Madana Hipparga side", note: "Smaller villages reached by rural roads, where farm seasons and electricity timing set the study day." },
    { name: "Chittapur", note: "A neighbouring taluk town toward Kalaburagi, with its own private schools and a comparable school-year rhythm." },
    { name: "Malkhed", note: "A historic site on the Kagna with a fort and a Rashtrakuta past, a short drive away, and a handful of families who study with us." },
    { name: "Kalaburagi road corridor", note: "Families who live along the highway and may take lessons from either Sedam or Kalaburagi depending on the week." },
  ],

  schoolDisclaimer:
    "IB Gram teaches independently and has no tie to the IB, Cambridge, Pearson or any school. We could not confirm an IB or IGCSE school in Sedam, so the groups below name schools in cities our families look towards, already listed on neighbouring pages. Please check programmes and admissions with the school.",
  schoolClusters: [
    {
      city: "Sedam town: few local options",
      note: "Local schools follow the Karnataka State Board or CBSE. We found nothing in the taluk confirmed as IB or IGCSE, which is why international study from here happens privately or by video.",
      schools: [],
    },
    {
      city: "Nearby: Hyderabad",
      note: "The big city beyond the state line, reached by road or rail through Tandur, and the usual choice for relocation.",
      schools: ["International School of Hyderabad", "The Gaudium"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "Far away, but Karnataka's centre for international and boarding schools.",
      schools: ["Stonehill International School", "Canadian International School, Yelahanka"],
    },
  ],

  modesIntro:
    "Teaching for Sedam is delivered online. Three arrangements cover almost every request we receive.",
  modes: [
    {
      title: "Weekly private lessons on video",
      description:
        "A fixed one-to-one slot every week, with a shared whiteboard and the same tutor throughout, who knows the syllabus well.",
      bullets: [
        "No tutor visits homes in Sedam; lessons run online",
        "Same tutor from week to week",
        "A written note after each lesson",
        "Home visits operate only in Gurugram and parts of Delhi NCR",
      ],
    },
    {
      title: "Pre-exam intensives",
      description:
        "A packed run of sessions before May or November papers, built around past questions and mark schemes.",
      bullets: [
        "Timed papers and marking walk-throughs",
        "Gap-finding across the syllabus",
        "Command-word practice",
        "Dates arranged around festivals and power cuts",
      ],
    },
    {
      title: "Bridge sessions",
      description:
        "For a child moving from a Karnataka State Board or CBSE school into IGCSE or IB, a short series that fills in vocabulary, method and lab skills.",
      bullets: [
        "A diagnostic first meeting",
        "Written-answer technique",
        "Practical-skills coaching",
        "Slow, steady progress",
      ],
    },
  ],

  sections: [
    {
      heading: "Why do some Sedam families look beyond state board and CBSE?",
      paragraphs: [
        "Sedam belongs to the Kalyana Karnataka region, which has its own constitutional provisions for development under Article 371(J), and the taluk's economy leans on cement, limestone and agriculture. Most households are rooted here for generations. The families who ask us about the IB or IGCSE are a small group with particular circumstances.",
        "A common story is a parent employed by one of the cement companies or the railways, who expects a transfer and wants a curriculum that moves between cities. Another is a family with a brother or an uncle in Hyderabad, Dubai or Doha who imagines the child studying there. A third group is simply tired of the exam-guide approach and wants questions that ask students to reason.",
        "Language is part of the picture. Kannada is the school language, Telugu is heard daily close to the border, and Urdu and Hindi are common at home. IB and IGCSE both allow language study alongside the main subjects, so a child can keep Kannada or Hindi at an academic level.",
        "None of this needs a move at age fifteen. A student can stay in Sedam, finish school with friends, and still meet a specialist teacher every week.",
      ],
      bullets: [
        "Transferable jobs in cement, railways or banking",
        "Relatives in Hyderabad or the Gulf",
        "A search for reasoning-based learning",
        "A wish to keep Kannada, Telugu or Hindi going academically",
      ],
    },
    {
      heading: "How do Karnataka State Board, CBSE, IGCSE and IB compare for a Sedam student?",
      paragraphs: [
        "The Karnataka State Board sets SSLC at Class 10 and the second PUC at Class 12, and most Sedam schools prepare for them. A few private schools follow CBSE and NCERT. Both pathways reward recall and steady revision, with a heavy weight on the final board examination.",
        "Cambridge and Pearson Edexcel IGCSE run over two years and test application and explanation through externally marked papers. The IB Diploma is broader, with six subjects, an Extended Essay, Theory of Knowledge and CAS.",
        "The main adjustment is in what earns marks. A neat textbook paragraph can score well in an SSLC paper but may collect few marks in an IGCSE question asking for a judgement based on data the student has not seen before.",
        "The table gathers the main points in one place.",
      ],
      table: {
        caption: "Karnataka State Board, CBSE, IGCSE and IB Diploma, as they apply in Sedam",
        columns: ["Feature", "State Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Qualifications", "SSLC and second PUC", "AISSE and AISSCE", "Two-year IGCSE at Class 9-10", "Two-year Diploma at Class 11-12"],
          ["Emphasis", "Textbook recall", "NCERT with some application", "Application and data response", "Inquiry, research and reflection"],
          ["Local availability", "Almost every school", "A few private schools", "None confirmed locally", "None confirmed locally"],
          ["Entry to Karnataka colleges", "Direct, with CET where needed", "Direct", "Equivalence step often required", "Equivalence step often required"],
          ["Language", "Kannada as a language paper", "Hindi or English options", "English, other languages optional", "Language A and Language B"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Sedam, and what shapes the rate?",
      paragraphs: [
        "There is no price list on this page, and that is deliberate. A figure that suits a Class 9 IGCSE learner would misrepresent a Higher Level Diploma candidate. After the free trial, you receive a written quote covering the course, the number of lessons per week and the tutor.",
        "Four things set the rate. Level comes first: HL Diploma courses cost more than entry-stage IGCSE. The tutor's track record with that precise syllabus comes next. Frequency follows, because two lessons a week for a year differ from six weeks of revision. Finally, the duration of the engagement matters.",
        "Online delivery spares a Sedam household some hidden costs. There is no bus fare to Kalaburagi, no overnight stay near a coaching hub, and no evening spent on the road.",
        "A coaching batch charges less per hour, yet the time is shared among many students. Private sessions concentrate on your child's errors. The first lesson is free so that you can judge that difference before paying anything.",
      ],
    },
    {
      heading: "Online home tuition, coaching batches, a local teacher or self-study: which suits Sedam?",
      paragraphs: [
        "In and around Sedam, most tuition is aimed at state board subjects, CET and NEET. These are useful for the exams they target, and a student sitting those can reasonably keep them going.",
        "The gap lies in specialist IB and IGCSE knowledge: internal assessment criteria, the wording of command terms, and how Cambridge or Edexcel papers are marked. A teacher who has that experience is rare in a taluk town.",
        "A motivated senior student can work through past papers alone, though without feedback the same mistakes can repeat for months.",
        "Online private lessons give a fixed weekly slot with a subject specialist. The table below sets the options side by side.",
      ],
      table: {
        caption: "Study routes for an IB or IGCSE student in Sedam",
        columns: ["Route", "Fit with IB or IGCSE", "Attention", "Timing", "Main drawback"],
        rows: [
          ["Online home tuition", "Close, chosen by course", "Entirely on one student", "Evenings and weekends", "Needs steady power and data"],
          ["CET or NEET coaching batch", "Limited", "Shared with a class", "Set batch hours", "Not designed for international papers"],
          ["Local teacher giving tuition", "Partial at best", "High", "Flexible", "Seldom knows IB or IGCSE"],
          ["Self-study with past papers", "Depends on discipline", "None", "Fully self-set", "No one to correct errors"],
        ],
      },
    },
    {
      heading: "How do heat, Dasara, Muharram and cement-shift timings shape the study year in Sedam?",
      paragraphs: [
        "Summer in this part of the Deccan is hard. From March to early June afternoons are very hot, power can be uneven, and concentration drops. Winters between November and January are mild and ideal for long sessions. The monsoon is modest, though the Kagna can swell in a wet spell.",
        "The calendar is dense with festivals. Ugadi, Dasara, Deepavali and Sankranti are widely marked, Muharram is observed in many neighbourhoods with processions, and Ramzan and Eid shape evening routines for a large part of the town. We schedule around them and avoid dates when the household is busy.",
        "Shift work adds another variable. Parents employed in the cement plants may rotate between morning, afternoon and night, so a fixed lesson hour has to suit the whole house, not only the child.",
        "A workable year for a Sedam student looks like this.",
      ],
      table: {
        caption: "A year for an IB or IGCSE student in Sedam",
        columns: ["Months", "Academic milestone", "Local factor", "Plan"],
        rows: [
          ["June to August", "New school year, topic and IA planning", "Monsoon sowing season", "Weekly lessons, early research for projects"],
          ["September to November", "IGCSE October-November series, IB mocks", "Dasara and Deepavali", "Finish mocks before the holidays"],
          ["December to February", "Internal assessment drafts, mock reviews", "Cool, comfortable weather", "Longer weekend sessions"],
          ["March to April", "IB final revision, IGCSE practical papers", "Ugadi, rising heat", "Short early-evening sessions"],
          ["May to June", "IB Diploma and IGCSE main series", "Peak heat, patchy power", "Morning or late slots, hotspot backup"],
        ],
      },
    },
    {
      heading: "Where can a Sedam student go after the IB or IGCSE?",
      paragraphs: [
        "Within reach, Kalaburagi has Gulbarga University, the Karnataka state-run medical and engineering colleges, and the Central University of Karnataka nearby. Hyderabad, with the University of Hyderabad, Osmania University and IIT Hyderabad, pulls many students from this corner, and Bengaluru offers the widest range of programmes of all.",
        "For Indian colleges, students with IB or IGCSE qualifications usually depend on entrance routes such as CUET-UG, JEE Main, NEET or Karnataka CET where they are eligible, and an Association of Indian Universities equivalence certificate is often needed. These rules shift between years, so please read the current notices. Our tutors teach the subject and do not handle admissions.",
        "Study abroad is the other main path. The UK, Canada, Australia, Singapore and the US are the usual targets, and an IB Diploma is a familiar document to admissions offices.",
        "Choosing subjects with a destination in mind, from the start of Class 11, saves effort later.",
      ],
    },
    {
      heading: "How are IB Maths AA and AI, and the sciences, taught to Sedam students?",
      paragraphs: [
        "Maths Analysis and Approaches suits students who enjoy algebra, calculus and proof and who may head to engineering, physical sciences or economics. Applications and Interpretation leans on statistics, modelling and calculator work, a good match for biology, business or social science paths.",
        "Sedam students coming from the Karnataka board are often quick and accurate on routine calculation. Where marks slip, it is in explanation: setting out reasoning in full sentences, using the correct notation, and showing method on multi-step problems. We spend time on that.",
        "In Physics, Chemistry and Biology, lessons follow the specification topic by topic, then move to timed questions. The investigation is treated as a skill, covering how to design a fair test, record uncertainty and evaluate honestly. The student writes the report.",
        "Every term begins with a diagnostic, and the tutor then adjusts the pace so that strong topics move quickly and weaker ones receive attention.",
      ],
      bullets: [
        "Notation and presentation of working",
        "Graphing and uncertainty in practical work",
        "Past-paper timing practice",
        "Terminology drills for Biology and Chemistry",
      ],
    },
    {
      heading: "Core or Extended, Cambridge or Edexcel: how should a Sedam family choose IGCSE options?",
      paragraphs: [
        "Cambridge offers Core and Extended tiers, while Pearson Edexcel uses Foundation and Higher. The lower tier caps the highest grade a student can earn, so a child aiming at A Level or IB should generally sit the upper tier in Maths and the sciences.",
        "Subject choice follows the intended route. A student thinking of IB HL Maths benefits from Additional Mathematics, and a future biologist should combine Biology with Chemistry. Languages and Humanities can balance the load.",
        "Private candidates should check early which centre will host the exams, because registration and practical arrangements are made through an approved centre. Sedam has none that we could confirm, so families often use a centre in Kalaburagi or Hyderabad.",
        "A tutor can explain the specification and the past-paper style once you have a syllabus code, and the trial lesson is a good moment to ask about tiers.",
      ],
    },
  ],

  process: [
    { title: "Message us on WhatsApp or email", description: "Send the board, grade, subject and a convenient evening to +91 7439 368 115 or support@ibgram.com." },
    { title: "We shortlist a tutor", description: "A tutor experienced in the exact syllabus is proposed, with a note on how they teach." },
    { title: "Free trial lesson", description: "A live session on video where the tutor finds out where your child stands." },
    { title: "Written quote and weekly slot", description: "The rate is confirmed in writing before any booking, and a regular time is agreed." },
    { title: "Lessons, notes and changes", description: "A short written note follows every lesson, and a different tutor is arranged if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Syllabus-trained tutors", description: "Teachers are matched on the specific IB course or IGCSE code, not just the subject name." },
    { title: "Built for a small town", description: "Online lessons mean Sedam students get the same teaching quality a metro student would." },
    { title: "Honest about home visits", description: "In-person home tuition runs only in Gurugram and parts of Delhi NCR; everywhere else, including Sedam, it is online." },
    { title: "Notes parents can read", description: "A written summary after each session shows what was covered and what comes next." },
    { title: "Independent academic ethics", description: "Tutors coach but never write IAs, Extended Essays, TOK essays or coursework." },
    { title: "Easy to change", description: "If the tutor is not right, we arrange another one without argument." },
  ],

  faqs: [
    { question: "Can I get IB or IGCSE home tuition in Sedam?", answer: "Yes, as online home tuition, which means a private lesson your child takes from home on a laptop. Tutors do not visit homes in Sedam, since in-person lessons run only in Gurugram and parts of Delhi NCR. Your child gets a specialist teacher on video at a fixed weekly time, and the first lesson is free so you can judge the format." },
    { question: "Are there IB or IGCSE schools in Sedam?", answer: "We could not confirm any IB or IGCSE school in Sedam. Local schools follow the Karnataka State Board or CBSE. Families who want these programmes usually look to Hyderabad or Bengaluru, or study privately or through an online school. Please check with schools directly, as offerings change." },
    { question: "How much do IB tutors charge in Sedam?", answer: "We do not publish fixed prices because the rate depends on the course, the level, the tutor's experience and how many lessons you want each week. After a free trial you receive a written quote before you commit. Online delivery avoids travel costs that a Sedam family would otherwise carry to reach a city." },
    { question: "Which IB subjects do you cover for Sedam students?", answer: "We cover Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, Geography, ESS, English, Kannada B, Hindi B and Computer Science, along with TOK and Extended Essay guidance at HL and SL. If your subject is not listed, send us the code and we will say honestly whether we can staff it." },
    { question: "Do you offer IGCSE tuition for Cambridge and Edexcel?", answer: "Yes, for both boards. We teach Mathematics, Additional Mathematics, the three sciences, Computer Science, English, Economics, Business Studies and Geography. We check whether your child follows Core, Extended, Foundation or Higher before choosing a tutor, because preparation differs by tier." },
    { question: "My child studies in a Karnataka State Board school. Can they still take IGCSE tuition?", answer: "Yes, many students take IGCSE or IB lessons alongside a state board schedule or while preparing to switch. We usually begin with a short bridge course on answer technique and vocabulary. A parent should confirm how the child will sit the final exams, since that needs an approved centre." },
    { question: "Will the tutor write my child's Internal Assessment or Extended Essay?", answer: "No. Tutors explain the criteria, discuss ideas and give feedback on drafts the student has written, but they never write IAs, Extended Essays, TOK essays or coursework. This protects the student from malpractice and keeps the work genuinely theirs." },
    { question: "Is online tuition reliable given power cuts and weak signal near Sedam?", answer: "It can be, with a little planning. We pick lesson hours when electricity is steadier, ask families to keep a phone hotspot as a backup, and shift the session if the line fails. Lessons are recorded in the note, so a missed ten minutes is easy to recover." },
    { question: "What are the IB exam sessions and when are results released?", answer: "IB Diploma exams run in May and November, with results in July and January respectively. Most Indian schools use the May session. Your school or the IB coordinator will confirm dates, and we shape the lesson plan backwards from them." },
    { question: "When are IGCSE exams held?", answer: "Cambridge sits its main series in February to March, May to June and October to November, while Pearson Edexcel runs January, May to June and October to November. Not every subject is offered in every series, and private candidates must register through a centre well ahead of the deadline." },
    { question: "Can IB or IGCSE students from Sedam appear for NEET or JEE?", answer: "Eligibility depends on the examining body's rules for the year, and recognised qualifications, subject combinations and equivalence certificates matter. Read the current NTA information carefully. Our tutors teach Physics, Chemistry, Biology and Maths to the IB or IGCSE syllabus and do not offer entrance coaching." },
    { question: "Do you need an equivalence certificate to join an Indian university?", answer: "Many universities ask for an Association of Indian Universities equivalence certificate for foreign or international boards. Rules vary by institution and year, so check the university's current notice. We teach the subjects and cannot arrange admission or certificates." },
    { question: "What is the right age to start IB or IGCSE support?", answer: "Children can begin at any stage, from PYP in primary years to the Diploma at Class 11. Most Sedam families first come to us in Class 8 to 10, when IGCSE or the MYP gets serious, or in Class 11 when the Diploma begins. Earlier help builds English reading and problem-solving habits." },
    { question: "How do I know the tutor is suitable?", answer: "You see the tutor's background before booking, you attend a free trial lesson, and you receive a written note after each class. If the fit is wrong, we replace the tutor. We also never promise grades, because results depend on the student's work." },
    { question: "What equipment does my child need?", answer: "A laptop or tablet, a headset, a notebook, and a steady connection are enough for most subjects. For Maths and the sciences, a scientific or graphing calculator permitted by the exam board is needed, and a phone camera helps to share handwritten work with the tutor." },
    { question: "How do I start?", answer: "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with your child's grade, board, subject and preferred evening. We reply with a suggested tutor and a trial lesson slot. There is no obligation after the trial." },
  ],

  internalLinks: [
    { label: "IB tutors across India", href: "/india/", description: "See how our online IB and IGCSE service runs in other Indian towns." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse IB subjects, levels and tutor profiles." },
    { label: "IGCSE tuition", href: "/igcse/", description: "Cambridge and Pearson Edexcel IGCSE subjects and support." },
    { label: "Diploma Programme", href: "/programmes/dp/", description: "What the two-year Diploma involves and how we help." },
    { label: "Middle Years Programme", href: "/programmes/myp/", description: "Criteria-based learning for Class 6 to 10." },
    { label: "IB Maths", href: "/courses/ib/mathematics/", description: "Analysis and Approaches or Applications and Interpretation support." },
    { label: "Our tutors", href: "/tutors/", description: "Meet the tutors and see their subjects." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book your free trial lesson." },
    { label: "Yadgir", href: "/yadgir/", description: "Our page for neighbouring Yadgir district in the same region." },
    { label: "Raichur", href: "/raichur/", description: "Online IB and IGCSE tuition for students in Raichur." },
    { label: "Shahabad", href: "/shahabad/", description: "The page for Shahabad, another town of Kalaburagi district." },
  ],

  tutorsIntro:
    "These tutors teach IB and IGCSE courses online, and a Sedam family can meet any of them in a free trial lesson. We shortlist by syllabus and level for your child.",
  closingHeading: "Ready to try a lesson from Sedam?",
  closingBody:
    "Tell us the grade, board and subject, and we will suggest a tutor with a free trial slot. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com.",
};
