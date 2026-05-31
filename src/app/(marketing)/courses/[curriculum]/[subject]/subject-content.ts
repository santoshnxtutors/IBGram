// Per-(curriculum, subject) long-form SEO content for the courses dropdown.
// 10 pages: IB Mathematics / Sciences / Individuals / English / Language
//        + IGCSE Mathematics / Sciences / Individuals / English / Language
// Humanized, parent-facing copy — no fake claims, no invented partnerships,
// no guaranteed scores or admissions promises.

export type CourseFaq = { question: string; answer: string };
export type CourseSyllabusTrack = { name: string; body: string; items: string[] };
export type CourseStudyApproach = { title: string; body: string };
export type CourseCityNote = { city: string; body: string };
export type CourseReview = { quote: string; label: string; location: string };
export type CourseBlogTeaser = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
};

export type CourseSubjectContent = {
  curriculumLabel: string; // "IB Diploma Programme" / "Cambridge IGCSE"
  subjectLabel: string; // "Mathematics" / "Sciences" / ...
  pageTitle: string; // displayed H1
  heroEyebrow: string;
  heroSummary: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  introParagraphs: string[];
  syllabusTracks: CourseSyllabusTrack[];
  studyApproach: CourseStudyApproach[];
  cityNotes: CourseCityNote[];
  reviews: CourseReview[];
  blogs: CourseBlogTeaser[];
  faqs: CourseFaq[];
  ctaCopy: string;
};

const CITY_NOTES_IB: CourseCityNote[] = [
  {
    city: "Gurugram",
    body: "Strongest IB tutor density along Golf Course Road, DLF Phases 1–5, Sushant Lok, Sector 43, Sector 50 and the South City clusters. Dwarka Expressway and newer New Gurugram families usually combine home sessions with online weekday support.",
  },
  {
    city: "Delhi",
    body: "Vasant Vihar, Vasant Kunj, Saket, Greater Kailash, Defence Colony, Hauz Khas and the Diplomatic Enclave see steady IB demand. Central and East Delhi families lean toward online-led plans for weekday reliability.",
  },
  {
    city: "Noida",
    body: "Sector 44, Sector 50, Sector 62 and the Noida Expressway corridor cover most IB matching. Greater Noida families pair online weekday sessions with occasional weekend home visits for subject depth.",
  },
  {
    city: "Mumbai & Bangalore",
    body: "Bandra, Khar, Juhu, BKC and South Mumbai dominate Mumbai IB tutoring; Indiranagar, Koramangala, HSR Layout, Whitefield and Sarjapur Road dominate Bangalore. Hybrid mode is the practical default in both cities.",
  },
];

const CITY_NOTES_IGCSE: CourseCityNote[] = [
  {
    city: "Gurugram",
    body: "IGCSE tutor inventory is strongest along Golf Course Road, DLF Phase 1–5, Sushant Lok, Sector 43, Sector 50 and Sector 56. Online matching covers Dwarka Expressway and newer sectors without compromising subject depth.",
  },
  {
    city: "Delhi",
    body: "Vasant Vihar, Vasant Kunj, Saket, Greater Kailash, Defence Colony and the Diplomatic Enclave see most active IGCSE demand. East and Central Delhi families default to online for weekday reliability.",
  },
  {
    city: "Noida",
    body: "Sector 44, Sector 50, Sector 62, Sector 93 and the Noida Expressway corridor anchor IGCSE matching. Greater Noida families combine online weekday sessions with short weekend home visits.",
  },
  {
    city: "Mumbai, Bangalore & beyond",
    body: "Mumbai (Bandra, Khar, Juhu, BKC) and Bangalore (Indiranagar, Koramangala, HSR, Whitefield, Sarjapur) host the strongest in-person IGCSE density. Pune, Hyderabad and Chennai families usually go online-led for the best subject fit.",
  },
];

const COMMON_DISCLAIMER_FAQ: CourseFaq = {
  question: "Is IB Gram officially affiliated with the IB Organization, Cambridge or Pearson Edexcel?",
  answer:
    "No. IB Gram is an independent tutoring platform. Programme and board names are used only to describe context, never to imply official affiliation or endorsement.",
};

const COMMON_PRICING_FAQ: CourseFaq = {
  question: "How is tutor pricing decided for this subject?",
  answer:
    "Fees are shared per tutor profile after a short discovery conversation. Pricing reflects programme stage (PYP, MYP, DP or IGCSE), subject level (HL/SL or Core/Extended/Foundation/Higher), lesson mode (home, online or hybrid) and the tutor's documented examiner, marker or teaching background. There is no fixed contract length.",
};

const COMMON_MATCHING_FAQ: CourseFaq = {
  question: "How do I get a tutor shortlist for this subject?",
  answer:
    "Share city, programme stage or board, current concerns, target window (mocks, finals or steady weekly support) and preferred lesson mode through the contact form or WhatsApp. The advisor team replies with two or three tutor profiles for the family to review — no aggressive follow-ups, no long contracts.",
};

// -----------------------------------------------------------------------------
// IB MATHEMATICS
// -----------------------------------------------------------------------------
const ibMathematics: CourseSubjectContent = {
  curriculumLabel: "IB Diploma Programme",
  subjectLabel: "Mathematics",
  pageTitle: "IB Mathematics Tutor — AA & AI at HL and SL",
  heroEyebrow: "IB DP Mathematics",
  heroSummary:
    "Verified IB Mathematics tutors for Analysis and Approaches (AA) and Applications and Interpretation (AI) at Higher and Standard Level. Subject mastery, paper-style practice, calculator strategy and Internal Assessment planning — without score guarantees.",
  metaTitle: "IB Mathematics Tutor (AA & AI, HL/SL) — Verified DP Maths Specialists | IB Gram",
  metaDescription:
    "Find IB Mathematics tutors for AA and AI at HL and SL. Concept clarity, paper practice, IA support and calculator strategy. Verified IB DP Maths specialists across Gurugram, Delhi, Noida, Mumbai, Bangalore and online.",
  metaKeywords: [
    "IB Mathematics tutor",
    "IB Maths tutor",
    "IB Maths AA tutor",
    "IB Maths AI tutor",
    "IB HL Maths tutor",
    "IB SL Maths tutor",
    "IB Maths Analysis and Approaches",
    "IB Maths Applications and Interpretation",
    "IB Maths Internal Assessment",
    "IB Maths IA tutor",
    "IB Maths past paper",
    "IB Maths AA HL",
    "IB Maths AA SL",
    "IB Maths AI HL",
    "IB Maths AI SL",
    "IB Mathematics tutor Gurugram",
    "IB Mathematics tutor Delhi",
    "IB Mathematics tutor Noida",
    "IB Mathematics tutor Mumbai",
    "IB Mathematics tutor Bangalore",
    "best IB Maths tutor India",
    "IB Maths home tutor",
    "IB Maths online tutor",
  ],
  introParagraphs: [
    "IB Mathematics is the subject most DP families ask for tutoring in first — usually because the gap between school pace and exam expectations becomes visible quickly. The course splits into two tracks: Analysis and Approaches (AA) and Applications and Interpretation (AI), each offered at Higher Level and Standard Level. They are not interchangeable. AA is more abstract and theoretical, leaning into calculus and proof; AI is more applied, with stronger emphasis on statistics, modelling and real-world data work. Choosing the right track at the start of DP1 is one of the highest-leverage decisions in the Diploma — and one tutoring can quietly help clarify.",
    "Strong IB Mathematics tutoring rarely looks like a textbook race. It looks like steady weekly sessions that fix concept gaps from MYP, build calculator fluency on the GDC, develop paper-style timing and translate vague school feedback into a specific weekly plan. The Internal Assessment is the second big lever — a well-scoped IA topic chosen in DP1 saves enormous time in DP2 and protects the final grade. Tutors help with topic scoping, structure, mathematical exploration and the assessment criteria, while the student keeps full authorship of the mathematics, calculations and write-up.",
    "We match families with IB Mathematics tutors based on track (AA or AI), level (HL or SL), current performance, target grade window, the school's pace, and whether home, online or hybrid sessions will actually be sustainable through the term. Subject specialists in HL AA or HL AI are sometimes only available online — when that gives the family access to a stronger fit, we say so honestly instead of forcing a local match.",
  ],
  syllabusTracks: [
    {
      name: "Mathematics AA (Analysis and Approaches)",
      body: "Algebra, functions, trigonometry, calculus, vectors, statistics and probability — taught with attention to proof, abstract reasoning and exam structure. HL adds further calculus, complex numbers and deeper proof work.",
      items: ["Calculus depth", "Algebraic fluency", "Paper 1 and Paper 2", "GDC strategy on Paper 2"],
    },
    {
      name: "Mathematics AI (Applications and Interpretation)",
      body: "Statistics, modelling, financial mathematics, geometry and trigonometry in applied contexts. HL adds matrices, graph theory and advanced statistics, with stronger emphasis on real-world data interpretation.",
      items: ["Statistical modelling", "Financial maths", "Real-world data", "GDC across all papers"],
    },
    {
      name: "Internal Assessment (IA)",
      body: "A 12–20 page mathematical exploration on a topic of the student's choice. Tutors help with topic scoping, structure planning, criterion-based review and draft feedback. The student remains the author of the mathematics and write-up.",
      items: ["Topic scoping", "Criterion review", "Structure planning", "Draft feedback cycles"],
    },
    {
      name: "Mock and final exam revision",
      body: "Past-paper-led practice with mark-scheme reading, command-term coaching and short error logs. Calm cadence across DP2 usually beats a panic block in the final weeks.",
      items: ["Timed Paper 1", "Timed Paper 2", "Paper 3 for HL", "Error-log review"],
    },
  ],
  studyApproach: [
    {
      title: "Diagnostic first, plan second",
      body: "The first one or two sessions check current understanding, recent school work and previous test attempts. Only then does the weekly plan get written — never the other way around.",
    },
    {
      title: "Concept repair, then practice",
      body: "Topic gaps from MYP or DP1 are addressed before paper-style practice begins. Skipping this stage is the most common reason scores plateau in DP2.",
    },
    {
      title: "GDC and calculator strategy",
      body: "Time spent on the Graphic Display Calculator (GDC) is treated as a teachable skill, not assumed. Calculator-paper accuracy is often where the biggest avoidable mark losses live.",
    },
    {
      title: "Evidence-led feedback",
      body: "Marks lost are logged by topic and question type. Parents get specific updates instead of vague confidence claims — and the next week's plan responds to the data.",
    },
  ],
  cityNotes: CITY_NOTES_IB,
  reviews: [
    {
      quote: "We switched to a tutor who understood the AA HL paper style rather than just the textbook content. The IA conversations finally got specific.",
      label: "Parent of a DP1 student",
      location: "Gurugram",
    },
    {
      quote: "The first three sessions just diagnosed where the marks were leaking. After that, the weekly plan felt like it was actually solving something.",
      label: "Parent of a DP2 student",
      location: "Noida",
    },
    {
      quote: "Online sessions worked better than I expected. The tutor was a real Maths AI specialist — we wouldn't have found that locally.",
      label: "Parent of a DP1 student",
      location: "Mumbai",
    },
  ],
  blogs: [
    {
      title: "Maths AA or Maths AI: a parent's first-comparison checklist",
      excerpt: "Track choice, HL vs SL, GDC usage, IA expectations and how the decision should map to intended university pathways.",
      category: "Track Choice",
      readTime: "6 min read",
      date: "May 2026",
    },
    {
      title: "Internal Assessment topics that actually work",
      excerpt: "Why some IA topics are easier to write to top criteria than others — and the questions to ask before committing to a topic in DP1.",
      category: "IA Planning",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "Calculator strategy for IB Maths Paper 2",
      excerpt: "Common GDC mistakes that cost marks even when the underlying maths is right, and how to build calculator fluency steadily through DP1.",
      category: "Exam Skills",
      readTime: "4 min read",
      date: "May 2026",
    },
  ],
  faqs: [
    {
      question: "What is the difference between IB Maths AA and Maths AI?",
      answer:
        "Analysis and Approaches (AA) is more abstract and theoretical, with stronger emphasis on calculus and proof. Applications and Interpretation (AI) is more applied, with stronger emphasis on statistics, modelling and real-world data work. Both are offered at HL and SL. The right choice depends on the intended degree pathway and the student's mathematical comfort.",
    },
    {
      question: "Should we choose HL or SL for IB Mathematics?",
      answer:
        "HL is typically required for quantitative degrees — engineering, computer science, economics at most competitive universities, physics and many research-oriented pathways. SL suits students whose university plans do not require deep mathematics. Tutors can review current performance and discuss the trade-off; the final decision should be confirmed with the school.",
    },
    {
      question: "Can a tutor help with the IB Maths Internal Assessment?",
      answer:
        "Yes. Tutors help with topic scoping, criterion-led structure, mathematical exploration, draft review and the reflection on validity, limitations and extensions. The student remains the author of the IA — we do not write or substantially rewrite assessed text.",
    },
    {
      question: "How many sessions per week does IB Maths usually need?",
      answer:
        "Most DP1 and DP2 students do well with one to two weekly sessions for Higher Level Mathematics and a shorter weekly slot for Standard Level. Closer to mocks and finals, sessions often condense into paper-style timed practice plus targeted review.",
    },
    {
      question: "Are online IB Maths tutors effective?",
      answer:
        "Yes — online IB Maths tutoring is often the best fit when a family needs a specialist in AA HL or AI HL and travel would otherwise reduce session quality. Whiteboard tools, screen-sharing and shared annotation make Maths particularly well-suited to online delivery.",
    },
    {
      question: "Do IB Maths tutors cover IB Mathematics from May and November exam sessions?",
      answer:
        "Yes. Tutoring planning takes into account whether the final exam window is the May/June or October/November series, since mock cadence and final revision blocks need to line up with the school calendar.",
    },
    COMMON_PRICING_FAQ,
    COMMON_MATCHING_FAQ,
    COMMON_DISCLAIMER_FAQ,
  ],
  ctaCopy:
    "Share the IB Maths track (AA or AI), level (HL or SL), current concerns and your preferred lesson mode. The advisor team replies with a small, honest shortlist — no long forms, no contracts, no aggressive follow-ups.",
};

// -----------------------------------------------------------------------------
// IB SCIENCES
// -----------------------------------------------------------------------------
const ibSciences: CourseSubjectContent = {
  curriculumLabel: "IB Diploma Programme",
  subjectLabel: "Sciences",
  pageTitle: "IB Sciences Tutor — Physics, Chemistry & Biology (HL/SL)",
  heroEyebrow: "IB DP Sciences",
  heroSummary:
    "Verified IB Sciences tutors for Physics, Chemistry and Biology at Higher and Standard Level. Concept clarity, command-term coaching, data-response practice, IA experimental design and exam-cycle revision.",
  metaTitle: "IB Sciences Tutor — Physics, Chemistry & Biology HL/SL | IB Gram",
  metaDescription:
    "IB DP Sciences tutoring for HL and SL Physics, Chemistry and Biology. Theory clarity, mathematical handling, command words, IA design and paper-style practice. Verified specialists across Gurugram, Delhi, Noida, Mumbai, Bangalore and online.",
  metaKeywords: [
    "IB Sciences tutor",
    "IB Physics tutor",
    "IB Chemistry tutor",
    "IB Biology tutor",
    "IB Physics HL tutor",
    "IB Chemistry HL tutor",
    "IB Biology HL tutor",
    "IB Physics SL tutor",
    "IB Chemistry SL tutor",
    "IB Biology SL tutor",
    "IB Sciences Internal Assessment",
    "IB Sciences IA",
    "IB Physics past paper",
    "IB Chemistry past paper",
    "IB Biology past paper",
    "IB Sciences command terms",
    "IB Physics tutor Gurugram",
    "IB Chemistry tutor Delhi",
    "IB Biology tutor Noida",
    "IB Sciences tutor Mumbai",
    "IB Sciences tutor Bangalore",
    "IB Sciences home tutor",
    "IB Sciences online tutor",
  ],
  introParagraphs: [
    "IB Sciences — Physics, Chemistry and Biology — sit alongside Mathematics as the heaviest tutoring requests in the Diploma Programme. Each subject is offered at Higher and Standard Level, and each rewards a slightly different teaching rhythm. Physics asks for clean problem-setup, algebraic confidence and a steady habit of drawing diagrams before reaching for equations. Chemistry rewards careful command-term reading, accurate use of definitions and a calm grasp of organic mechanisms. Biology asks for structured note-taking, command-term precision and the ability to translate complex diagrams into exam-ready written answers. A tutor who treats all three the same way usually leaves marks on the table.",
    "Internal Assessments are the second major lever in IB Sciences. Each subject has a single Scientific Investigation (around 20 per cent of the final grade) involving a research question, methodology design, data analysis, evaluation of validity and extension thinking. Strong IA planning in DP1 protects the final grade and frees up DP2 for exam-cycle work. Tutors help with research question scoping, methodology critique, statistical handling and criterion-led review, while the student keeps authorship of the experiment, data and write-up.",
    "Most families ask for one to two weekly sessions per Higher Level Science and a shorter weekly slot for Standard Level subjects. Sessions cover concept clarity, paper-style practice across Papers 1, 2 and (for HL) Paper 3, command-term coaching, data-response and short error-log review. Online matching often unlocks stronger subject specialists in HL Physics or HL Chemistry than a strict in-person constraint would, particularly outside the Gurugram, Delhi and Noida corridor.",
  ],
  syllabusTracks: [
    {
      name: "IB Physics (HL/SL)",
      body: "Mechanics, thermal physics, waves, electricity and magnetism, atomic and nuclear physics, plus HL options. Strong attention to diagrammatic reasoning, unit handling and Paper 1 multiple-choice timing.",
      items: ["Mechanics depth", "Algebraic problem-setup", "Paper 1 timing", "HL options coaching"],
    },
    {
      name: "IB Chemistry (HL/SL)",
      body: "Stoichiometry, atomic structure, bonding, thermochemistry, kinetics, equilibria, acids and bases, redox, organic chemistry and options. Command-term precision and definition accuracy are weekly themes.",
      items: ["Organic mechanisms", "Stoichiometry practice", "Definitions and command terms", "Paper 2 written response"],
    },
    {
      name: "IB Biology (HL/SL)",
      body: "Cell biology, molecular biology, genetics, ecology, evolution, human physiology and HL options. Structured note-taking, command-term coaching and diagram-to-answer translation drive most sessions.",
      items: ["Structured notes", "Command-term coaching", "Diagram interpretation", "Paper 2 extended response"],
    },
    {
      name: "IB Sciences IA",
      body: "Scientific Investigation across Physics, Chemistry or Biology. Tutors help with research question scoping, methodology critique, statistical handling, evaluation of validity and criterion-led review.",
      items: ["RQ scoping", "Methodology critique", "Statistical handling", "Evaluation and extension"],
    },
  ],
  studyApproach: [
    {
      title: "Concept clarity before paper drills",
      body: "Topic gaps from MYP or DP1 are addressed before timed practice begins. Drilling papers on top of a shaky foundation usually flatters short-term scores and hides the real issue.",
    },
    {
      title: "Command-term coaching",
      body: "‘State’, ‘describe’, ‘explain’, ‘analyse’ and ‘evaluate’ each demand a different answer structure. Sessions train the switch deliberately, especially for Biology and Chemistry written papers.",
    },
    {
      title: "Mathematical handling in Physics",
      body: "Algebra, unit conversion and graph reading are recurring weakness points. Tutors keep these as a steady background drill alongside topic work.",
    },
    {
      title: "Mark-scheme literacy",
      body: "Students learn to read mark schemes critically — not to memorise model answers, but to see how examiners award marks and to spot the small phrases that pay.",
    },
  ],
  cityNotes: CITY_NOTES_IB,
  reviews: [
    {
      quote:
        "The HL Chemistry tutor read three past-paper attempts before designing the plan. The diagnostic was the difference — earlier tutors had skipped that step.",
      label: "Parent of a DP1 student",
      location: "Gurugram",
    },
    {
      quote:
        "Biology felt like memorising forever. The tutor reorganised the notes around command words and the answers started getting marks.",
      label: "Parent of a DP2 student",
      location: "Bangalore",
    },
    {
      quote:
        "The IA conversations made the most difference — topic scoping in DP1 saved us a panic in DP2.",
      label: "Parent of a DP1 Physics student",
      location: "Delhi",
    },
  ],
  blogs: [
    {
      title: "Choosing the right Higher Level Science",
      excerpt: "Why HL Physics, HL Chemistry and HL Biology are not interchangeable — and how the choice should map to weekly workload and university plans.",
      category: "Subject Choice",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "IB Sciences IA: scoping the research question without panic",
      excerpt: "A short framework for choosing an IA research question that can be answered cleanly within the time, equipment and statistics available.",
      category: "IA Planning",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "Command terms decoded: a one-page reference",
      excerpt: "The IB command terms that show up most often in Sciences written papers and the answer shape each one expects.",
      category: "Exam Skills",
      readTime: "4 min read",
      date: "May 2026",
    },
  ],
  faqs: [
    {
      question: "Which IB Sciences do IB Gram tutors cover?",
      answer:
        "Physics, Chemistry and Biology at Higher and Standard Level, plus the Sciences Internal Assessment. Environmental Systems and Societies and Sports, Exercise and Health Science are available subject to current tutor inventory.",
    },
    {
      question: "Should my child take Sciences at HL or SL?",
      answer:
        "HL is typically required for medicine, engineering, dentistry, pharmacy and research-oriented science degrees. SL suits students whose university plans do not require deep science. Tutors can review current performance and the school's pace before the family finalises the choice with the school.",
    },
    {
      question: "Can a tutor help with the IB Sciences Internal Assessment?",
      answer:
        "Yes. Tutors help with research question scoping, methodology critique, statistical handling, evaluation of validity and criterion-led review. The student remains the author of the experiment, data and write-up.",
    },
    {
      question: "How does tutoring differ between Physics, Chemistry and Biology?",
      answer:
        "Physics tutoring emphasises algebraic problem-setup, diagrammatic reasoning and unit handling. Chemistry tutoring centres on command-term precision, definitions and organic mechanisms. Biology tutoring focuses on structured notes, command-term coaching and translating diagrams into exam-ready written answers.",
    },
    {
      question: "Are online IB Sciences tutors effective?",
      answer:
        "Yes — particularly for Higher Level Physics and Chemistry where the strongest subject specialists may not be locally available. Whiteboard tools, screen-sharing, shared diagrams and digital annotation work well for Sciences.",
    },
    {
      question: "Will my child still need school lab time if they have a Sciences tutor?",
      answer:
        "Yes — the IA experiment and practical components must be carried out in the school environment under the teacher's supervision. Tutors complement school lab work; they do not replace it.",
    },
    COMMON_PRICING_FAQ,
    COMMON_MATCHING_FAQ,
    COMMON_DISCLAIMER_FAQ,
  ],
  ctaCopy:
    "Share the Sciences (Physics, Chemistry and / or Biology), level (HL or SL), current concerns and your preferred lesson mode. The advisor team replies with a small, honest shortlist — no long forms and no pressure.",
};

// -----------------------------------------------------------------------------
// IB INDIVIDUALS & SOCIETIES
// -----------------------------------------------------------------------------
const ibIndividuals: CourseSubjectContent = {
  curriculumLabel: "IB Diploma Programme",
  subjectLabel: "Individuals & Societies",
  pageTitle: "IB Individuals & Societies Tutor — Economics, Business, History, Psychology",
  heroEyebrow: "IB DP Group 3",
  heroSummary:
    "Verified tutors for IB Economics, Business Management, Global Politics, History, Psychology and Geography at HL and SL. Case practice, structured essay writing and Internal Assessment planning across the Group 3 catalogue.",
  metaTitle: "IB Individuals & Societies Tutor — Economics, Business, History, Psychology | IB Gram",
  metaDescription:
    "IB Group 3 tutoring across Economics, Business Management, Global Politics, History, Psychology and Geography at HL and SL. Case practice, essay structure, IA planning and exam coaching. Verified specialists across India and online.",
  metaKeywords: [
    "IB Individuals and Societies tutor",
    "IB Economics tutor",
    "IB Business Management tutor",
    "IB History tutor",
    "IB Psychology tutor",
    "IB Geography tutor",
    "IB Global Politics tutor",
    "IB Economics HL tutor",
    "IB Economics SL tutor",
    "IB Business IA tutor",
    "IB History IA tutor",
    "IB Psychology IA tutor",
    "IB Group 3 tutor",
    "IB Economics past paper",
    "IB History essay structure",
    "IB Economics tutor Gurugram",
    "IB Business tutor Delhi",
    "IB History tutor Noida",
    "IB Psychology tutor Mumbai",
    "IB Economics tutor Bangalore",
    "IB Humanities tutor",
    "IB social sciences tutor",
  ],
  introParagraphs: [
    "Group 3 — Individuals and Societies — covers the IB's humanities and social sciences pathway. Most families ask for Economics, Business Management, History or Psychology tutoring, with steady demand also for Global Politics and Geography. Each subject has its own paper structure, command-term vocabulary and assessment rhythm: Economics rewards diagrammatic reasoning and structured definitions, History asks for source skills and balanced essay argument, Business demands case-study fluency, Psychology requires precise study citation, Global Politics expects current-affairs awareness and Geography balances data interpretation with case examples.",
    "What unites the Group 3 catalogue is the centrality of written structure. Whether the student is writing a Paper 1 Economics short response, a Paper 2 History essay, a Business case-study analysis or a Psychology approaches-to-research response, marks are earned by the shape of the answer almost as much as by the underlying knowledge. Strong tutoring spends real time on essay planning, paragraph structure and the small command-word phrases examiners reward — alongside the subject content itself.",
    "Internal Assessments matter heavily in this group. Economics IA commentaries, History IAs, Business IAs, Psychology IAs and Geography fieldwork reports each have their own criteria. Tutors help with research question scoping, source selection, structure planning and criterion-led review. The student remains the author of every assessed piece — we are explicit about that boundary in every engagement.",
  ],
  syllabusTracks: [
    {
      name: "Economics (HL/SL)",
      body: "Microeconomics, macroeconomics, the global economy and HL extension. Sessions focus on diagrammatic reasoning, definition accuracy, real-world examples and structured Paper 1, 2 and 3 responses.",
      items: ["Diagram precision", "Real-world examples", "Paper 1 short response", "HL Paper 3 problem-solving"],
    },
    {
      name: "Business Management (HL/SL)",
      body: "Business organisation, human resource management, finance, marketing and operations. Strong attention to case-study fluency, integrated planning answers and IA commercial focus.",
      items: ["Case study fluency", "Integrated planning", "AO3 evaluation marks", "IA commercial focus"],
    },
    {
      name: "History (HL/SL)",
      body: "Source analysis, comparative essays and prescribed-subject depth. Sessions train balanced argument, source provenance critique and the discipline of using historians' interpretations precisely.",
      items: ["Source analysis", "Balanced essay argument", "Historiography use", "HL regional depth"],
    },
    {
      name: "Psychology, Global Politics & Geography",
      body: "Psychology IA design and approaches-to-research; Global Politics current-affairs essay and engagement; Geography fieldwork report and synthesis of human and physical themes.",
      items: ["Psych IA design", "Global Politics essays", "Geography fieldwork", "Comparative case-study practice"],
    },
  ],
  studyApproach: [
    {
      title: "Essay shape, not just content",
      body: "Group 3 marks are won by argument structure as much as by knowledge. Tutors teach paragraph templates that students can adapt under timed conditions.",
    },
    {
      title: "Definitions and command terms",
      body: "Economics definitions, History command terms, Business AO descriptors and Psychology research terminology are practiced as a steady weekly drill, not just before exams.",
    },
    {
      title: "Internal Assessment scoping",
      body: "IAs are scoped early in DP1 so students avoid the classic trap of a topic that cannot be evidenced within the available word count.",
    },
    {
      title: "Source and case-example library",
      body: "Tutors help students build a small, well-organised set of cases, examples and source references — usable across multiple essay questions without scrambling under exam pressure.",
    },
  ],
  cityNotes: CITY_NOTES_IB,
  reviews: [
    {
      quote:
        "The Economics tutor rewrote the way our daughter structured Paper 1 short responses. Marks improved without the content load changing.",
      label: "Parent of a DP1 Economics student",
      location: "Gurugram",
    },
    {
      quote:
        "History IA scoping was the most useful conversation we had. The question became answerable instead of overwhelming.",
      label: "Parent of a DP1 History student",
      location: "Delhi",
    },
    {
      quote:
        "Business case studies finally clicked when we started practicing integrated answers instead of single-section drills.",
      label: "Parent of a DP2 Business student",
      location: "Bangalore",
    },
  ],
  blogs: [
    {
      title: "Choosing your IB Group 3 subject in DP1",
      excerpt: "When Economics suits the student more than Business, why History HL is heavier than students expect, and what Psychology actually involves.",
      category: "Subject Choice",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "IB Economics IA commentaries that score",
      excerpt: "Article choice, diagram use, definition accuracy and evaluation depth — a short checklist for parents and students reviewing first drafts.",
      category: "IA Planning",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "Writing balanced IB History essays under timed pressure",
      excerpt: "How to plan a Paper 2 essay in five minutes, build a thesis-counter-thesis structure, and use historiography without over-name-dropping.",
      category: "Exam Skills",
      readTime: "6 min read",
      date: "May 2026",
    },
  ],
  faqs: [
    {
      question: "Which IB Group 3 subjects do tutors support?",
      answer:
        "Economics, Business Management, History, Psychology, Global Politics and Geography at Higher and Standard Level. Philosophy and World Religions are available subject to current tutor inventory.",
    },
    {
      question: "How is Economics different at HL versus SL?",
      answer:
        "HL Economics adds Paper 3 (a quantitative problem-solving paper) and deeper microeconomic and macroeconomic theory. SL focuses on Papers 1 and 2 and a similar IA. HL is often chosen by students considering economics, business or quantitative degrees at university.",
    },
    {
      question: "Can a tutor help with the IB Economics IA commentary?",
      answer:
        "Yes. Tutors help with article selection, definitions, diagrammatic accuracy, evaluation depth and criterion-led review. The student remains the author of the commentary itself.",
    },
    {
      question: "How does IB History tutoring work?",
      answer:
        "Sessions cover source analysis, balanced essay argument, command-term precision and use of historians' interpretations. HL students also focus on the regional depth study and historical investigation IA. Tutors help structure preparation across the chosen prescribed subjects.",
    },
    {
      question: "Are Business Management and Economics interchangeable?",
      answer:
        "No. Business Management is more applied and case-study-driven, with strong emphasis on the commercial integration of human resources, marketing, operations and finance. Economics is more theoretical and diagrammatic. Tutors familiar with one are not always equally effective on the other.",
    },
    {
      question: "Do tutors prepare students for IB Psychology examined components?",
      answer:
        "Yes — Paper 1 approaches to research, Paper 2 options, HL Paper 3 qualitative methods and the Internal Assessment. Sessions focus on precise study citation, ethical considerations and clear evaluation of methodology.",
    },
    COMMON_PRICING_FAQ,
    COMMON_MATCHING_FAQ,
    COMMON_DISCLAIMER_FAQ,
  ],
  ctaCopy:
    "Share which Group 3 subject the family needs help with, current school feedback and preferred lesson mode. The advisor team replies with two or three tutor profiles that fit the subject and the rhythm the student can actually sustain.",
};

// -----------------------------------------------------------------------------
// IB ENGLISH
// -----------------------------------------------------------------------------
const ibEnglish: CourseSubjectContent = {
  curriculumLabel: "IB Diploma Programme",
  subjectLabel: "English",
  pageTitle: "IB English Tutor — Language & Literature, Language A and B",
  heroEyebrow: "IB DP English",
  heroSummary:
    "Verified tutors for IB English A: Language and Literature, English A: Literature, and English B at Higher and Standard Level. Close reading, comparative essays, individual oral planning and unseen analysis — taught with calm cadence.",
  metaTitle: "IB English Tutor — Language and Literature, Literature & English B (HL/SL) | IB Gram",
  metaDescription:
    "IB DP English tutoring across Language and Literature, Literature and English B at HL and SL. Close reading, comparative essays, individual oral preparation and HL essay coaching. Verified specialists across India and online.",
  metaKeywords: [
    "IB English tutor",
    "IB English Language and Literature tutor",
    "IB English Literature tutor",
    "IB English A tutor",
    "IB English B tutor",
    "IB English HL tutor",
    "IB English SL tutor",
    "IB English individual oral",
    "IB English HL essay",
    "IB English Paper 1",
    "IB English Paper 2",
    "IB English tutor Gurugram",
    "IB English tutor Delhi",
    "IB English tutor Noida",
    "IB English tutor Mumbai",
    "IB English tutor Bangalore",
    "IB English unseen analysis",
    "IB English comparative essay",
    "IB English online tutor",
    "IB English home tutor",
    "IB English IA",
  ],
  introParagraphs: [
    "IB English support sits across three courses: English A Language and Literature, English A Literature and English B. The first two are first-language Group 1 courses; English B is a Group 2 language-acquisition course. Each rewards a different skill set. Language and Literature asks for skilled reading of media texts and literary works side by side; Literature is the more text-immersive option; English B builds reading, writing, listening and speaking competence in English as a second language. The right tutor match is rarely just ‘an English tutor’ — it is a tutor familiar with the exact course the student is enrolled in.",
    "Most weekly sessions split between close reading, structured comparative writing, individual oral preparation and unseen text analysis. The HL essay (1,200–1,500 words on a literary work or body of work the student has studied) is the second major lever in DP1 and early DP2. Strong HL essay coaching is criterion-led — not a creative writing class — and helps students choose a manageable focus that can actually be answered in the word count.",
    "Examined components vary by course but typically include Paper 1 (guided literary or non-literary analysis) and Paper 2 (comparative essay on works studied), alongside the Individual Oral. Tutors help students build a small, well-rehearsed set of works and global issues so that the Individual Oral becomes a conversation they have actually had several times — not a high-stakes improvisation.",
  ],
  syllabusTracks: [
    {
      name: "English A: Language and Literature",
      body: "Study of literary and non-literary texts side by side. Sessions focus on close reading, contextual analysis, comparative writing and the Individual Oral on a global issue.",
      items: ["Close reading", "Comparative writing", "Global issue planning", "HL essay coaching"],
    },
    {
      name: "English A: Literature",
      body: "Deeper text immersion in literary works across forms and contexts. Sessions support thematic analysis, comparative essays, the Individual Oral and HL essay planning.",
      items: ["Thematic depth", "Comparative essays", "IO planning", "Critical vocabulary"],
    },
    {
      name: "English B (HL/SL)",
      body: "Reading, writing, listening and speaking in English as a language-acquisition course. Sessions cover written production tasks, reading comprehension, oral preparation and HL literature work.",
      items: ["Written production", "Reading comprehension", "Oral preparation", "HL literature element"],
    },
    {
      name: "Individual Oral & HL essay",
      body: "Two of the highest-leverage components in IB English. Tutors help students build a small, well-rehearsed body of work and choose HL essay focuses that can be answered within the word count.",
      items: ["IO rehearsal", "Global issue framing", "HL essay focus", "Criterion-led review"],
    },
  ],
  studyApproach: [
    {
      title: "Argument shape over content load",
      body: "Strong IB English answers depend on argument structure and use of evidence — not on covering every theme. Tutors train the shape, then layer texture.",
    },
    {
      title: "A small, well-rehearsed text set",
      body: "Students who can speak fluently about three or four well-chosen texts almost always outperform those who can speak vaguely about ten. Tutors help pick the depth-versus-breadth balance honestly.",
    },
    {
      title: "Unseen analysis as a weekly habit",
      body: "Paper 1 rewards calm, structured reading of unseen passages. A short weekly unseen practice across DP1 builds the muscle that timed pressure usually breaks.",
    },
    {
      title: "Author authorship, always",
      body: "Tutors review drafts, point out structural and evidential gaps and teach the skills needed to revise. The student remains the writer — drafts are not rewritten by anyone else.",
    },
  ],
  cityNotes: CITY_NOTES_IB,
  reviews: [
    {
      quote:
        "Choosing only four texts to rehearse properly was the unlock. Earlier we were trying to remember everything and nothing was actually exam-ready.",
      label: "Parent of a DP2 English A student",
      location: "Mumbai",
    },
    {
      quote:
        "Weekly unseen practice meant Paper 1 stopped feeling like a guessing game. The tutor's structure stuck.",
      label: "Parent of a DP1 Language and Literature student",
      location: "Gurugram",
    },
    {
      quote:
        "English B felt much calmer once the written production tasks were practiced steadily instead of crammed near deadlines.",
      label: "Parent of an English B HL student",
      location: "Bangalore",
    },
  ],
  blogs: [
    {
      title: "Choosing between IB English Language and Literature, Literature and English B",
      excerpt: "How the three IB English courses differ in skill demand, written load and Individual Oral expectation.",
      category: "Subject Choice",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "Picking a global issue for the Individual Oral",
      excerpt: "How to choose a global issue that gives the student something genuine to say across both a literary and a non-literary extract.",
      category: "IO Planning",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "HL essay focuses that survive 1,500 words",
      excerpt: "Why narrow focuses score higher than ambitious ones, and how to spot when an HL essay topic is going to outgrow the word count.",
      category: "HL Essay",
      readTime: "6 min read",
      date: "May 2026",
    },
  ],
  faqs: [
    {
      question: "Which IB English courses do IB Gram tutors cover?",
      answer:
        "English A: Language and Literature, English A: Literature, and English B — at Higher and Standard Level. Sessions cover Paper 1, Paper 2, the Individual Oral and the HL essay where applicable.",
    },
    {
      question: "Can a tutor help with the IB English HL essay?",
      answer:
        "Yes — HL essay tutoring focuses on choosing a manageable focus, planning the argument, reviewing drafts against the criteria and refining critical vocabulary. The student remains the author of the essay.",
    },
    {
      question: "How does IB English B differ from English A?",
      answer:
        "English B is a Group 2 language-acquisition course for students whose first language is not English. It focuses on reading, writing, listening and speaking competence, with an HL literature component. English A is a first-language course studying literary and non-literary texts at depth.",
    },
    {
      question: "How is the Individual Oral assessed in IB English?",
      answer:
        "The Individual Oral is a 10-minute spoken assessment in which the student analyses a global issue across one literary and one non-literary extract. It is internally assessed by the school and externally moderated by the IB. Tutors help with global issue selection, extract pairing, planning and rehearsal.",
    },
    {
      question: "How many sessions per week does IB English need?",
      answer:
        "Most DP1 and DP2 English students do well with one weekly session for steady support, increasing to twice a week in the run-up to mocks and the HL essay deadline.",
    },
    {
      question: "Are online IB English tutors effective?",
      answer:
        "Yes. Close reading, comparative writing and Individual Oral rehearsal all translate well to online sessions with shared documents and screen-sharing. Many strong IB English specialists are available online for families outside the main metros.",
    },
    COMMON_PRICING_FAQ,
    COMMON_MATCHING_FAQ,
    COMMON_DISCLAIMER_FAQ,
  ],
  ctaCopy:
    "Share the IB English course (Language and Literature, Literature, or English B), level, current concerns and your preferred lesson mode. The advisor team replies with two or three tutor profiles for the family to compare calmly.",
};

// -----------------------------------------------------------------------------
// IB LANGUAGE
// -----------------------------------------------------------------------------
const ibLanguage: CourseSubjectContent = {
  curriculumLabel: "IB Diploma Programme",
  subjectLabel: "Language Acquisition",
  pageTitle: "IB Language Tutor — Language B and ab initio (HL/SL)",
  heroEyebrow: "IB DP Group 2",
  heroSummary:
    "Verified tutors for IB Language B (Spanish, French, Mandarin, Hindi, German and other school-supported languages) and ab initio beginner courses. Grammar repair, written production, listening and oral fluency at HL and SL.",
  metaTitle: "IB Language Tutor — Spanish, French, Mandarin, Hindi B & ab initio | IB Gram",
  metaDescription:
    "IB DP Group 2 tutoring for Language B and ab initio courses in Spanish, French, Mandarin, Hindi, German and other school-supported languages. Grammar, written production, listening and oral coaching at HL and SL.",
  metaKeywords: [
    "IB Language tutor",
    "IB Language B tutor",
    "IB Spanish B tutor",
    "IB French B tutor",
    "IB Mandarin B tutor",
    "IB Hindi B tutor",
    "IB German B tutor",
    "IB ab initio tutor",
    "IB Spanish ab initio",
    "IB French ab initio",
    "IB Language acquisition tutor",
    "IB Language B HL",
    "IB Language B SL",
    "IB Language tutor Gurugram",
    "IB Language tutor Delhi",
    "IB Language tutor Mumbai",
    "IB Language tutor Bangalore",
    "IB Language oral exam",
    "IB Language written production",
    "IB Spanish written task",
    "IB French oral exam",
  ],
  introParagraphs: [
    "Group 2 — Language Acquisition — covers the IB's second-language pathway. The two routes are Language B (for students with some prior background in the language) and ab initio (for true beginners), with Spanish, French, Mandarin, Hindi and German being the most commonly requested options. Each course is built around four skills: reading, writing, listening and speaking, and each is examined through a combination of written papers and an Individual Oral. The HL course also includes a literature component, which is often the part students underestimate.",
    "Strong IB Language tutoring usually combines grammar repair, structured written production tasks, regular listening practice and weekly oral conversation. Students who treat language acquisition as memorisation tend to plateau; students who treat it as steady weekly use almost always grow. Tutors plan around the school calendar and the upcoming written tasks rather than running a parallel course that exhausts the student.",
    "Most families ask for one to two sessions per week, increasing in the lead-up to oral exam windows and HL written deadlines. Online matching is often the best fit for less commonly taught languages — the strongest tutor in the country for a particular Language B course may not live in the same city, and forcing a local match usually means accepting weaker subject fit.",
  ],
  syllabusTracks: [
    {
      name: "Language B (HL/SL)",
      body: "Reading, writing, listening and speaking in the target language across themes (identities, experiences, human ingenuity, social organisation, sharing the planet). HL adds literature work and a longer written production.",
      items: ["Grammar repair", "Written production", "Listening practice", "Oral rehearsal"],
    },
    {
      name: "Language ab initio (SL only)",
      body: "Beginner-level course for students with little or no prior exposure to the language. Sessions build core vocabulary, grammar structures and confident production across short written and spoken tasks.",
      items: ["Core grammar", "Vocabulary building", "Short written tasks", "Confident speaking"],
    },
    {
      name: "Individual Oral assessment",
      body: "Sessions cover topic preparation, photo or stimulus response, follow-up question handling and recovery strategies when memory blanks under exam pressure.",
      items: ["Stimulus response", "Question handling", "Recovery strategies", "Topic rehearsal"],
    },
    {
      name: "Common language pathways",
      body: "Most demand sits in Spanish B, French B, Mandarin B and Hindi B, with ab initio frequently requested for Spanish, French and Mandarin. German, Italian, Japanese, Arabic and others are supported subject to current tutor inventory.",
      items: ["Spanish B and ab initio", "French B and ab initio", "Mandarin B and ab initio", "Hindi B"],
    },
  ],
  studyApproach: [
    {
      title: "Steady weekly use beats cramming",
      body: "Language acquisition rewards consistent low-intensity weekly contact. Tutors plan small written or speaking tasks between sessions to keep the language active.",
    },
    {
      title: "Grammar repair before drilling",
      body: "Topic gaps from earlier years are addressed before paper-style practice begins. Skipping this usually leaves the same errors recurring through DP1 and DP2.",
    },
    {
      title: "Oral rehearsal as routine",
      body: "Speaking sessions are scheduled regularly, not just in the run-up to exams. The Individual Oral becomes a familiar conversation rather than a high-stakes performance.",
    },
    {
      title: "Listening practice on real materials",
      body: "Beyond textbook recordings, tutors use podcasts, short videos and authentic news clips so listening skills cope with real-world speech speed.",
    },
  ],
  cityNotes: CITY_NOTES_IB,
  reviews: [
    {
      quote:
        "Spanish B finally felt like learning a language instead of preparing for a test. Weekly conversations made the oral exam much less scary.",
      label: "Parent of a DP1 Spanish B student",
      location: "Delhi",
    },
    {
      quote:
        "Online Mandarin B sessions worked far better than we expected. The tutor was a real specialist — we wouldn't have found that locally.",
      label: "Parent of a DP2 Mandarin B student",
      location: "Bangalore",
    },
    {
      quote:
        "Hindi B grammar repair in DP1 made the written production feel achievable. We had been doing it in the wrong order before.",
      label: "Parent of a DP1 Hindi B student",
      location: "Gurugram",
    },
  ],
  blogs: [
    {
      title: "Choosing IB Language B or ab initio",
      excerpt: "How to honestly assess prior exposure to a language before committing to Language B in DP1 — and when ab initio is the calmer choice.",
      category: "Course Choice",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "Building IB Language oral confidence without panic",
      excerpt: "Why steady weekly speaking practice from DP1 outperforms intensive oral coaching in the final weeks.",
      category: "Oral Prep",
      readTime: "4 min read",
      date: "May 2026",
    },
    {
      title: "Written production tasks: planning before writing",
      excerpt: "How to plan an IB Language B written task in five minutes so the student can spend the remaining time actually writing accurately.",
      category: "Exam Skills",
      readTime: "4 min read",
      date: "May 2026",
    },
  ],
  faqs: [
    {
      question: "Which IB languages does IB Gram support?",
      answer:
        "Strongest availability sits in Spanish B, French B, Mandarin B, Hindi B and German B, plus Spanish, French and Mandarin ab initio. Italian, Japanese, Arabic, Portuguese and other languages are matched subject to current tutor inventory.",
    },
    {
      question: "What is the difference between IB Language B and ab initio?",
      answer:
        "Language B is for students with some prior background in the target language; ab initio is for true beginners. Language B is available at HL or SL with an HL literature component; ab initio is offered only at SL. Course selection is confirmed with the school.",
    },
    {
      question: "How is the IB Language Individual Oral assessed?",
      answer:
        "The Individual Oral is internally assessed by the school and externally moderated by the IB. For Language B it includes a stimulus response and follow-up conversation; for ab initio it includes a description of a visual stimulus plus a conversation on a related theme.",
    },
    {
      question: "How many sessions per week does IB Language need?",
      answer:
        "Most students do well with one to two sessions per week through DP1 and DP2. Closer to the oral exam window and final written deadlines, sessions often increase or shift toward speaking-only practice.",
    },
    {
      question: "Can a tutor help with the HL Language B written task?",
      answer:
        "Yes — tutors help with task planning, grammar accuracy, register choice and structure. The student remains the author of the written production; tutors do not write or substantially rewrite assessed text.",
    },
    {
      question: "Are online IB Language tutors effective?",
      answer:
        "Yes — particularly for less commonly taught languages where the strongest subject specialists may not live in the family's city. Video calls support speaking and listening practice well, and shared documents keep written work accessible across sessions.",
    },
    COMMON_PRICING_FAQ,
    COMMON_MATCHING_FAQ,
    COMMON_DISCLAIMER_FAQ,
  ],
  ctaCopy:
    "Share the IB Language (Spanish B, French B, Mandarin B, Hindi B or any other), course level (B HL/SL or ab initio SL) and current concerns. The advisor team replies with a small shortlist that fits the language, the rhythm and the timing window.",
};

// -----------------------------------------------------------------------------
// IGCSE MATHEMATICS
// -----------------------------------------------------------------------------
const igcseMathematics: CourseSubjectContent = {
  curriculumLabel: "Cambridge IGCSE / Pearson Edexcel International GCSE",
  subjectLabel: "Mathematics",
  pageTitle: "IGCSE Mathematics Tutor — Cambridge 0580/0606 & Edexcel 4MA1",
  heroEyebrow: "IGCSE Mathematics",
  heroSummary:
    "Verified IGCSE Mathematics tutors for Cambridge (0580 Mathematics, 0606 Additional Mathematics) and Pearson Edexcel International GCSE (4MA1). Core / Extended and Foundation / Higher tier support, paper-led practice and calculator strategy.",
  metaTitle: "IGCSE Mathematics Tutor — Cambridge 0580/0606 & Edexcel 4MA1 | IB Gram",
  metaDescription:
    "IGCSE Mathematics tutoring for Cambridge 0580, 0606 Additional Mathematics and Edexcel International GCSE 4MA1. Core, Extended, Foundation and Higher tier coaching across India and online.",
  metaKeywords: [
    "IGCSE Mathematics tutor",
    "IGCSE Maths tutor",
    "Cambridge IGCSE Maths tutor",
    "Edexcel International GCSE Maths tutor",
    "IGCSE 0580 tutor",
    "IGCSE 0606 tutor",
    "Edexcel 4MA1 tutor",
    "IGCSE Additional Mathematics tutor",
    "IGCSE Maths Core",
    "IGCSE Maths Extended",
    "IGCSE Maths Foundation",
    "IGCSE Maths Higher",
    "IGCSE Maths past paper",
    "IGCSE Maths tier choice",
    "IGCSE Mathematics tutor Gurugram",
    "IGCSE Mathematics tutor Delhi",
    "IGCSE Mathematics tutor Noida",
    "IGCSE Mathematics tutor Mumbai",
    "IGCSE Mathematics tutor Bangalore",
    "IGCSE Maths home tutor",
    "IGCSE Maths online tutor",
    "IGCSE Maths Year 10",
    "IGCSE Maths Year 11",
  ],
  introParagraphs: [
    "IGCSE Mathematics is the most-requested IGCSE subject by some distance. The two main routes are Cambridge IGCSE (0580 Mathematics and the optional 0606 Additional Mathematics for stronger students) and Pearson Edexcel International GCSE (4MA1 Mathematics). All three courses share a similar topic backbone — algebra, coordinate geometry, trigonometry, vectors, statistics and probability — but the syllabus codes, paper structure, command terms and grading thresholds differ enough that tutor familiarity with the exact specification matters. A Maths tutor used to Cambridge 0580 will not automatically pick up Edexcel 4MA1 nuances, and the reverse is just as true.",
    "Tier choice is the second decision families face. Cambridge IGCSE 0580 splits into Core and Extended; Edexcel 4MA1 splits into Foundation and Higher. Choosing the right tier matters because the grading scales and paper combinations are different, and switching tier late in the course is rarely calm. Tutors can review current performance, school guidance and the target grade window and discuss the trade-off, but final tier entry stays a school decision.",
    "Most IGCSE Maths families ask for one to two weekly sessions in Year 10 and a tighter cadence in Year 11. Sessions focus on topic repair from earlier years, calculator-paper fluency (paper structure varies by syllabus), non-calculator confidence, timed practice and short error logs. Stronger students who are aiming for 0606 Additional Mathematics often pick up tutoring specifically for the heavier algebra, calculus and matrices content the standard course does not cover.",
  ],
  syllabusTracks: [
    {
      name: "Cambridge IGCSE Mathematics (0580)",
      body: "Number, algebra, coordinate geometry, trigonometry, vectors, statistics and probability. Core and Extended tiers with different paper combinations and grade ceilings.",
      items: ["Algebra and equations", "Trigonometry", "Statistics", "Calculator and non-calculator papers"],
    },
    {
      name: "Cambridge IGCSE Additional Mathematics (0606)",
      body: "A second, heavier Cambridge course alongside 0580 — algebra, functions, calculus, vectors, matrices and circular measure. Often taken by stronger students aiming for science or engineering pathways.",
      items: ["Functions and graphs", "Differentiation and integration", "Vectors and matrices", "Circular measure"],
    },
    {
      name: "Pearson Edexcel International GCSE (4MA1)",
      body: "Algebra, geometry, trigonometry, probability and statistics across Foundation and Higher tiers. Different paper structure and grading boundaries from Cambridge — tutor familiarity with the spec matters.",
      items: ["Algebra fluency", "Geometry and trigonometry", "Probability", "Higher tier paper structure"],
    },
    {
      name: "Mock and final exam revision",
      body: "Mixed-topic past-paper sets, mark-scheme reading, command-term coaching and short error logs. Typically planned across the 12 weeks before mocks and again before the final exam window.",
      items: ["Timed practice", "Mark-scheme literacy", "Error logs", "Topic-target revision"],
    },
  ],
  studyApproach: [
    {
      title: "Diagnostic first, plan second",
      body: "The first one or two sessions check current understanding and recent school work. The weekly plan is written only after the gaps are visible.",
    },
    {
      title: "Calculator-paper strategy",
      body: "Different IGCSE syllabuses use calculator papers differently. Tutors teach the strategy explicitly instead of assuming the student will pick it up by osmosis.",
    },
    {
      title: "Non-calculator confidence",
      body: "Where the syllabus includes a non-calculator paper, mental arithmetic and clean algebra steps are practiced as a steady weekly habit through Year 10 and Year 11.",
    },
    {
      title: "Error logs over endless drills",
      body: "Students log marks lost by topic and question type. Each week's plan responds to the data — instead of running the same paper drills regardless of where the marks are actually leaking.",
    },
  ],
  cityNotes: CITY_NOTES_IGCSE,
  reviews: [
    {
      quote:
        "The calculator-paper strategy alone added clean marks. We had been drilling content without ever practicing the strategy itself.",
      label: "Parent of an IGCSE Maths Extended student",
      location: "Gurugram",
    },
    {
      quote:
        "Switching to an Edexcel-aware tutor changed the way Higher tier questions were being read. Earlier sessions were generic.",
      label: "Parent of an Edexcel 4MA1 student",
      location: "Bangalore",
    },
    {
      quote:
        "Additional Mathematics needed a different tutor — the heavier calculus and matrices content didn't suit our 0580 specialist.",
      label: "Parent of a 0606 Additional Maths student",
      location: "Mumbai",
    },
  ],
  blogs: [
    {
      title: "Cambridge 0580 or Edexcel 4MA1: what families should compare first",
      excerpt: "Syllabus codes, tiering, paper structure, calendars and the kind of tutor support that matches each board.",
      category: "Board Guide",
      readTime: "6 min read",
      date: "May 2026",
    },
    {
      title: "Choosing Core or Extended (Foundation or Higher)",
      excerpt: "How to think about IGCSE Maths tier choice based on current performance, target grade and downstream A-Level plans.",
      category: "Tier Choice",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "IGCSE Additional Mathematics — who should take it",
      excerpt: "Why 0606 Additional Mathematics is heavier than students expect, and how to decide whether the second IGCSE Maths course is worth the load.",
      category: "Course Choice",
      readTime: "4 min read",
      date: "May 2026",
    },
  ],
  faqs: [
    {
      question: "Which IGCSE Maths specifications do tutors cover?",
      answer:
        "Cambridge IGCSE 0580 Mathematics, Cambridge 0606 Additional Mathematics and Pearson Edexcel International GCSE 4MA1 Mathematics. The tutor match takes specification into account — different boards use different paper structures and grading boundaries.",
    },
    {
      question: "How do we choose between Core and Extended (or Foundation and Higher)?",
      answer:
        "A tutor can review current performance, school guidance and target grade window. The trade-off is usually about the grade ceiling and confidence under timed pressure. Final tier entry is confirmed with the school.",
    },
    {
      question: "Is IGCSE Additional Mathematics (0606) the same as IGCSE Mathematics (0580)?",
      answer:
        "No. 0606 is a heavier Cambridge course that includes algebra, functions, calculus, vectors and matrices — often taken alongside 0580 by stronger students aiming for STEM pathways. Tutor matching for 0606 is typically separate from the standard 0580 tutor pool.",
    },
    {
      question: "When should we start IGCSE Maths tutoring — Year 10 or Year 11?",
      answer:
        "Two common entry points: late Year 9 / early Year 10 (to consolidate foundations and build steady habits) and start of Year 11 (to map the year against mocks and the final exam window). Short-cycle mock revision in the four to six weeks before each mock is also common.",
    },
    {
      question: "Can a tutor prepare students for both Cambridge and Edexcel calculator papers?",
      answer:
        "Yes, where the tutor has documented experience with the relevant specification. Calculator-paper strategy is taught explicitly — different paper structures reward different timing approaches.",
    },
    {
      question: "Are online IGCSE Maths tutors effective?",
      answer:
        "Yes. Whiteboard tools, screen-sharing and shared annotation make IGCSE Maths well-suited to online delivery. Online matching often unlocks stronger subject specialists than insisting on a local home tutor would.",
    },
    COMMON_PRICING_FAQ,
    COMMON_MATCHING_FAQ,
    COMMON_DISCLAIMER_FAQ,
  ],
  ctaCopy:
    "Share the IGCSE Maths board (Cambridge 0580, 0606 or Edexcel 4MA1), tier, current concerns and your preferred lesson mode. The advisor team replies with two or three tutor profiles to compare honestly.",
};

// -----------------------------------------------------------------------------
// IGCSE SCIENCES
// -----------------------------------------------------------------------------
const igcseSciences: CourseSubjectContent = {
  curriculumLabel: "Cambridge IGCSE / Pearson Edexcel International GCSE",
  subjectLabel: "Sciences",
  pageTitle: "IGCSE Sciences Tutor — Physics, Chemistry & Biology",
  heroEyebrow: "IGCSE Sciences",
  heroSummary:
    "Verified IGCSE Sciences tutors for Cambridge (0625 Physics, 0620 Chemistry, 0610 Biology) and Pearson Edexcel International GCSE (4PH1, 4CH1, 4BI1). Topic clarity, practical-skill questions, command-term coaching and structured revision.",
  metaTitle: "IGCSE Sciences Tutor — Cambridge & Edexcel Physics, Chemistry, Biology | IB Gram",
  metaDescription:
    "IGCSE Physics, Chemistry and Biology tutoring for Cambridge 0625/0620/0610 and Edexcel 4PH1/4CH1/4BI1. Theory clarity, command words, data response and practical-skill coaching. Verified specialists across India and online.",
  metaKeywords: [
    "IGCSE Sciences tutor",
    "IGCSE Physics tutor",
    "IGCSE Chemistry tutor",
    "IGCSE Biology tutor",
    "Cambridge IGCSE Physics tutor",
    "Cambridge IGCSE Chemistry tutor",
    "Cambridge IGCSE Biology tutor",
    "Edexcel IGCSE Physics tutor",
    "Edexcel IGCSE Chemistry tutor",
    "Edexcel IGCSE Biology tutor",
    "IGCSE 0625 tutor",
    "IGCSE 0620 tutor",
    "IGCSE 0610 tutor",
    "Edexcel 4PH1 tutor",
    "Edexcel 4CH1 tutor",
    "Edexcel 4BI1 tutor",
    "IGCSE Sciences past paper",
    "IGCSE Sciences home tutor",
    "IGCSE Sciences online tutor",
    "IGCSE Sciences command terms",
    "IGCSE Sciences tutor Gurugram",
    "IGCSE Sciences tutor Delhi",
  ],
  introParagraphs: [
    "IGCSE Sciences — Physics, Chemistry and Biology — sit alongside Mathematics as the heaviest tutoring requests at IGCSE level. Cambridge IGCSE uses 0625 (Physics), 0620 (Chemistry) and 0610 (Biology); Pearson Edexcel International GCSE uses 4PH1, 4CH1 and 4BI1. The boards share most topic content but differ in paper structure, command-term phrasing and the way practical-skill questions are framed. Tutor familiarity with the exact specification matters here more than in many other subjects.",
    "Strong IGCSE Sciences tutoring usually balances theory clarity with command-term precision and mathematical handling. Physics rewards clean problem-setup and unit handling; Chemistry rewards careful definitions, equation accuracy and organic-mechanism confidence; Biology rewards structured notes and the ability to translate diagrams into exam-ready written answers. Each subject benefits from a steady weekly rhythm in Year 10 followed by a tighter mock-cycle plan in Year 11.",
    "Most families ask for one to two weekly sessions per Science in Year 11, with a lighter cadence in Year 10. Tutors plan around the school calendar — not against it — and help students build short error logs so the weekly plan responds to where marks are actually leaking. Online matching often unlocks stronger subject specialists than insisting on a local home tutor would, particularly for Physics and Chemistry in cities outside the main metros.",
  ],
  syllabusTracks: [
    {
      name: "IGCSE Physics",
      body: "Cambridge 0625 and Edexcel 4PH1 — mechanics, thermal physics, waves, electricity and magnetism, atomic and nuclear physics. Clean problem-setup, algebraic confidence and unit handling drive most sessions.",
      items: ["Mechanics", "Electricity and magnetism", "Waves", "Atomic physics"],
    },
    {
      name: "IGCSE Chemistry",
      body: "Cambridge 0620 and Edexcel 4CH1 — atomic structure, bonding, stoichiometry, acids and bases, redox, organic chemistry. Command-term precision and definition accuracy are weekly themes.",
      items: ["Stoichiometry", "Organic mechanisms", "Definitions and command terms", "Practical-skill questions"],
    },
    {
      name: "IGCSE Biology",
      body: "Cambridge 0610 and Edexcel 4BI1 — cell biology, transport in organisms, ecology, genetics, human physiology. Structured note-taking and diagram-to-answer translation drive most weekly work.",
      items: ["Structured notes", "Diagram interpretation", "Human physiology", "Genetics and evolution"],
    },
    {
      name: "Mock and final exam revision",
      body: "Mixed-topic past-paper sets, mark-scheme reading, command-term coaching and short error logs. Planned across the 12 weeks before mocks and again before the final exam window.",
      items: ["Timed practice", "Mark-scheme literacy", "Command-term drills", "Error logs"],
    },
  ],
  studyApproach: [
    {
      title: "Theory clarity before paper drills",
      body: "Topic gaps from Year 9 or early Year 10 are addressed before timed practice begins. Drilling papers on top of a shaky foundation usually flatters short-term scores.",
    },
    {
      title: "Command-term coaching",
      body: "‘State’, ‘describe’, ‘explain’ and ‘calculate’ each demand a specific answer structure. Sessions train the switch deliberately, especially for Biology and Chemistry written papers.",
    },
    {
      title: "Practical-skill question practice",
      body: "Practical-skill questions are a known mark-loser even when the underlying lab work is solid. Tutors spend dedicated time on the question type rather than assuming familiarity with the lab transfers automatically.",
    },
    {
      title: "Error logs over endless papers",
      body: "Marks lost are logged by topic and question type. Each week's plan responds to the data rather than running the same paper drill regardless of where the marks are actually leaking.",
    },
  ],
  cityNotes: CITY_NOTES_IGCSE,
  reviews: [
    {
      quote:
        "The Chemistry tutor started with command-term coaching before any past papers. The marks improved because the answers finally matched what the mark scheme wanted.",
      label: "Parent of an IGCSE Chemistry student",
      location: "Noida",
    },
    {
      quote:
        "Online Physics sessions worked because the tutor was a real specialist — we wouldn't have found that depth locally.",
      label: "Parent of an Edexcel Physics student",
      location: "Mumbai",
    },
    {
      quote:
        "Biology felt overwhelming until the notes got reorganised around command words. After that, the weekly plan made sense.",
      label: "Parent of a Cambridge Biology student",
      location: "Gurugram",
    },
  ],
  blogs: [
    {
      title: "How IGCSE Sciences differ between Cambridge and Edexcel",
      excerpt: "Paper structure, command-term phrasing and practical-skill question style differences between the two boards.",
      category: "Board Guide",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "Combined Science or Separate Sciences at IGCSE?",
      excerpt: "When the integrated Combined Science route fits better than three separate Sciences, and how the decision affects A-Level pathways.",
      category: "Course Choice",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "Command terms in IGCSE Sciences — a one-page reference",
      excerpt: "The command terms that show up most often and the answer shape each one expects.",
      category: "Exam Skills",
      readTime: "4 min read",
      date: "May 2026",
    },
  ],
  faqs: [
    {
      question: "Which IGCSE Sciences specifications do tutors cover?",
      answer:
        "Cambridge IGCSE 0625 Physics, 0620 Chemistry and 0610 Biology, plus Pearson Edexcel International GCSE 4PH1 Physics, 4CH1 Chemistry and 4BI1 Biology. Cambridge IGCSE Combined Science and Co-ordinated Sciences are available subject to current tutor inventory.",
    },
    {
      question: "Should my child take Combined Science or three separate Sciences?",
      answer:
        "Separate Sciences (three IGCSE qualifications — Physics, Chemistry, Biology) are typically chosen by students aiming for STEM A-Levels. Combined Science is a single double-award course that covers all three but with less depth. The right choice depends on workload and downstream A-Level plans; final decisions are confirmed with the school.",
    },
    {
      question: "How does IGCSE Sciences tutoring differ between Physics, Chemistry and Biology?",
      answer:
        "Physics tutoring emphasises algebraic problem-setup, unit handling and diagrammatic reasoning. Chemistry tutoring centres on definitions, equation accuracy and command-term precision. Biology tutoring focuses on structured notes, diagram interpretation and command-term coaching.",
    },
    {
      question: "Can a tutor help with IGCSE practical-skill questions?",
      answer:
        "Yes. Practical-skill questions are a recognised mark-loser even when the underlying lab work is solid. Tutors spend dedicated time on the question type rather than assuming familiarity from school lab work transfers automatically.",
    },
    {
      question: "Are online IGCSE Sciences tutors effective?",
      answer:
        "Yes — particularly for Physics and Chemistry where the strongest subject specialists may not be locally available. Whiteboard tools, screen-sharing, shared diagrams and digital annotation work well for Sciences delivery.",
    },
    {
      question: "When should we start IGCSE Sciences tutoring?",
      answer:
        "Most families start in late Year 9 or early Year 10 to build steady habits before the Year 11 mock cycle. Short-cycle mock preparation in the four to six weeks before each mock window is also common, especially in Physics and Chemistry.",
    },
    COMMON_PRICING_FAQ,
    COMMON_MATCHING_FAQ,
    COMMON_DISCLAIMER_FAQ,
  ],
  ctaCopy:
    "Share which IGCSE Science (Physics, Chemistry, Biology — or all three), the board, current concerns and your preferred lesson mode. The advisor team replies with two or three tutor profiles to compare without pressure.",
};

// -----------------------------------------------------------------------------
// IGCSE INDIVIDUALS & SOCIETIES
// -----------------------------------------------------------------------------
const igcseIndividuals: CourseSubjectContent = {
  curriculumLabel: "Cambridge IGCSE / Pearson Edexcel International GCSE",
  subjectLabel: "Individuals & Societies",
  pageTitle: "IGCSE Humanities Tutor — Economics, Business, History, Geography",
  heroEyebrow: "IGCSE Humanities",
  heroSummary:
    "Verified IGCSE Humanities tutors for Economics, Business Studies, History and Geography across Cambridge and Pearson Edexcel. Case practice, source skills, definitions and structured essay coaching for Higher / Extended students.",
  metaTitle: "IGCSE Humanities Tutor — Economics, Business, History & Geography | IB Gram",
  metaDescription:
    "IGCSE Economics, Business Studies, History and Geography tutoring for Cambridge and Pearson Edexcel students. Case practice, source skills, definitions and structured essay coaching. Verified specialists across India and online.",
  metaKeywords: [
    "IGCSE Humanities tutor",
    "IGCSE Economics tutor",
    "IGCSE Business Studies tutor",
    "IGCSE History tutor",
    "IGCSE Geography tutor",
    "IGCSE Sociology tutor",
    "Cambridge IGCSE Economics tutor",
    "Edexcel International GCSE Economics tutor",
    "IGCSE Economics 0455",
    "Edexcel Economics 4EC1",
    "IGCSE Business 0450",
    "IGCSE History 0470",
    "IGCSE Geography 0460",
    "IGCSE History past paper",
    "IGCSE Economics past paper",
    "IGCSE Humanities tutor Gurugram",
    "IGCSE Humanities tutor Delhi",
    "IGCSE Humanities tutor Mumbai",
    "IGCSE Humanities online tutor",
    "IGCSE Humanities home tutor",
    "IGCSE Business case study",
    "IGCSE History source skills",
  ],
  introParagraphs: [
    "IGCSE Humanities covers the social sciences and history pathway — Economics, Business Studies, History and Geography being the most-requested options at IB Gram. Cambridge IGCSE syllabus codes commonly come up as 0455 (Economics), 0450 (Business), 0470 (History) and 0460 (Geography); Pearson Edexcel International GCSE equivalents include 4EC1 (Economics), 4BS1 (Business), 4HI1 (History) and 4GE1 (Geography). Each subject has its own command-term vocabulary, definition accuracy expectation and paper structure. A tutor familiar with one board is not always equally effective on the other.",
    "Strong IGCSE Humanities tutoring usually balances content clarity with structured written practice. Economics rewards diagrammatic reasoning and definition accuracy; Business rewards case-study fluency and integrated planning; History rewards source skills and balanced argument; Geography balances data interpretation with case-example use. Most weekly sessions spend real time on the small command words examiners reward — alongside the underlying subject content.",
    "Most IGCSE Humanities families ask for one weekly session per subject across Year 10, increasing to one or two sessions per week in Year 11 mock and final exam windows. Online matching often gives families access to a stronger subject specialist than insisting on local home tuition would, particularly outside the main metros. Tutors plan around the school calendar and the upcoming written tasks so the support feels additive rather than parallel.",
  ],
  syllabusTracks: [
    {
      name: "IGCSE Economics",
      body: "Cambridge 0455 and Edexcel 4EC1 — microeconomics, macroeconomics, the global economy, international trade and economic development. Diagrammatic reasoning and definition accuracy are weekly themes.",
      items: ["Diagram precision", "Definition accuracy", "Case examples", "Paper structure"],
    },
    {
      name: "IGCSE Business Studies",
      body: "Cambridge 0450 and Edexcel 4BS1 — business organisation, human resource management, marketing, operations and finance. Case-study fluency and integrated planning drive most sessions.",
      items: ["Case study fluency", "Integrated planning", "AO3 evaluation marks", "Written paper structure"],
    },
    {
      name: "IGCSE History",
      body: "Cambridge 0470 and Edexcel 4HI1 — source analysis, balanced essay argument, prescribed depth studies and (where applicable) coursework. Sessions train source-handling discipline and argument shape.",
      items: ["Source analysis", "Balanced argument", "Depth study revision", "Coursework planning"],
    },
    {
      name: "IGCSE Geography",
      body: "Cambridge 0460 and Edexcel 4GE1 — physical and human geography, data interpretation, fieldwork and case-example use across themes. Strong attention to map skills and structured answer planning.",
      items: ["Physical and human balance", "Data interpretation", "Case examples", "Map and fieldwork skills"],
    },
  ],
  studyApproach: [
    {
      title: "Essay shape, not just content",
      body: "Humanities marks are won by argument structure as much as by knowledge. Tutors teach paragraph templates that students can adapt under timed conditions.",
    },
    {
      title: "Definitions and command terms",
      body: "Economics definitions, History command terms, Business AO descriptors and Geography case-example vocabulary are practiced as a steady weekly drill, not just before exams.",
    },
    {
      title: "Case-study and source library",
      body: "Tutors help students build a small, well-organised set of cases, sources and examples — usable across multiple essay questions without scrambling under exam pressure.",
    },
    {
      title: "Mark-scheme literacy",
      body: "Students learn to read mark schemes critically — not to memorise model answers, but to see how examiners award marks and where the small phrases that pay actually live.",
    },
  ],
  cityNotes: CITY_NOTES_IGCSE,
  reviews: [
    {
      quote:
        "Economics finally clicked when the diagrams got cleaner and the definitions stopped drifting between answers. Earlier sessions were content-heavy without that focus.",
      label: "Parent of an IGCSE Economics student",
      location: "Delhi",
    },
    {
      quote:
        "Business case studies improved once we practiced integrated answers instead of single-section drills. The tutor's structure stuck.",
      label: "Parent of an IGCSE Business student",
      location: "Bangalore",
    },
    {
      quote:
        "History source skills work was the biggest unlock. Earlier essays read like a list of facts — they now actually answer the question.",
      label: "Parent of an IGCSE History student",
      location: "Gurugram",
    },
  ],
  blogs: [
    {
      title: "Choosing between IGCSE Economics and IGCSE Business",
      excerpt: "Skill demand, written load and downstream A-Level mapping for the two most-requested IGCSE Humanities subjects.",
      category: "Subject Choice",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "How to build a small, exam-ready IGCSE History case library",
      excerpt: "Why ten well-rehearsed cases beat thirty half-remembered ones — and how to choose the right ones early in Year 10.",
      category: "Revision",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "Geography case examples that survive Paper 2",
      excerpt: "Choosing case examples that work across multiple themes — and writing them in a way that earns the higher-mark questions.",
      category: "Exam Skills",
      readTime: "4 min read",
      date: "May 2026",
    },
  ],
  faqs: [
    {
      question: "Which IGCSE Humanities subjects do tutors cover?",
      answer:
        "Economics, Business Studies, History and Geography across Cambridge and Pearson Edexcel. Sociology, Global Perspectives and Religious Studies are available subject to current tutor inventory.",
    },
    {
      question: "How are IGCSE Economics and Business different?",
      answer:
        "Economics is more theoretical and diagrammatic, with stronger emphasis on microeconomic and macroeconomic reasoning. Business Studies is more applied and case-study-driven, with strong emphasis on the commercial integration of HR, marketing, operations and finance. Tutors familiar with one are not always equally effective on the other.",
    },
    {
      question: "Can a tutor help with IGCSE History coursework?",
      answer:
        "Where the specification includes coursework, tutors can help with topic scoping, source analysis, structure planning and criterion-led review. The student remains the author of the coursework itself.",
    },
    {
      question: "How does IGCSE Geography differ between Cambridge and Edexcel?",
      answer:
        "Topic content is broadly similar but paper structure, fieldwork expectations and case-example weighting differ. A tutor familiar with the relevant specification keeps the support board-specific instead of generic.",
    },
    {
      question: "When should we start IGCSE Humanities tutoring?",
      answer:
        "Most families start in late Year 9 or early Year 10 to consolidate foundations and build a case library. Year 11 then tightens into past-paper practice, mark-scheme conversations and a short error-log review each week.",
    },
    {
      question: "Are online IGCSE Humanities tutors effective?",
      answer:
        "Yes. Essay structure, source analysis and case-study practice translate well to online sessions with shared documents and screen-sharing. Online matching often gives families access to specialists not available locally.",
    },
    COMMON_PRICING_FAQ,
    COMMON_MATCHING_FAQ,
    COMMON_DISCLAIMER_FAQ,
  ],
  ctaCopy:
    "Share which IGCSE Humanities subject the family needs help with, the board, current school feedback and preferred lesson mode. The advisor team replies with two or three tutor profiles to compare calmly.",
};

// -----------------------------------------------------------------------------
// IGCSE ENGLISH
// -----------------------------------------------------------------------------
const igcseEnglish: CourseSubjectContent = {
  curriculumLabel: "Cambridge IGCSE / Pearson Edexcel International GCSE",
  subjectLabel: "English",
  pageTitle: "IGCSE English Tutor — Cambridge First Language English & Edexcel English",
  heroEyebrow: "IGCSE English",
  heroSummary:
    "Verified IGCSE English tutors for Cambridge First Language English (0500, 0524), Cambridge English Literature (0475) and Pearson Edexcel English Language (4EA1) / Literature (4ET1). Reading response, writing accuracy and unseen text analysis.",
  metaTitle: "IGCSE English Tutor — Cambridge 0500 & Edexcel English Language / Literature | IB Gram",
  metaDescription:
    "IGCSE English tutoring for Cambridge First Language English (0500/0524), Cambridge Literature (0475) and Pearson Edexcel 4EA1 / 4ET1. Reading response, writing accuracy, unseen analysis and structured essay coaching.",
  metaKeywords: [
    "IGCSE English tutor",
    "Cambridge IGCSE English tutor",
    "Edexcel International GCSE English tutor",
    "IGCSE English Language tutor",
    "IGCSE English Literature tutor",
    "IGCSE First Language English",
    "IGCSE 0500 tutor",
    "IGCSE 0524 tutor",
    "IGCSE 0475 tutor",
    "Edexcel 4EA1 tutor",
    "Edexcel 4ET1 tutor",
    "IGCSE English past paper",
    "IGCSE English writing accuracy",
    "IGCSE English unseen analysis",
    "IGCSE English tutor Gurugram",
    "IGCSE English tutor Delhi",
    "IGCSE English tutor Noida",
    "IGCSE English tutor Mumbai",
    "IGCSE English tutor Bangalore",
    "IGCSE English online tutor",
    "IGCSE English home tutor",
    "IGCSE English coursework",
  ],
  introParagraphs: [
    "IGCSE English support sits across a handful of related qualifications. Cambridge IGCSE families most commonly take First Language English (0500, with the 0524 variant for the speaking endorsement) and English Literature (0475). Edexcel International GCSE families typically take English Language (4EA1) and English Literature (4ET1). The four qualifications share a similar skill backbone — reading response, writing accuracy, unseen text analysis and structured essay writing — but their paper structures and assessment objectives differ. A tutor familiar with the exact specification matters more than ‘any English tutor’.",
    "Strong IGCSE English tutoring usually combines close reading practice with structured writing improvement, weekly unseen analysis and (where the course includes literature) a careful approach to text comparison and quotation use. The Cambridge speaking endorsement (0524) adds an internally assessed and externally moderated oral component; tutors help with planning and rehearsal but the actual assessed performance stays inside the school.",
    "Most IGCSE English families ask for one weekly session across Year 10, with cadence tightening into Year 11. Sessions focus on writing accuracy (grammar, punctuation, sentence variety), reading-response structure, command-term coaching and unseen-passage practice. Online matching works particularly well for IGCSE English — shared documents and screen-sharing keep the writing review process visible and ongoing.",
  ],
  syllabusTracks: [
    {
      name: "Cambridge First Language English (0500 / 0524)",
      body: "Reading and writing skills across directed writing, composition and reading response. The 0524 variant adds the speaking endorsement, internally assessed and externally moderated.",
      items: ["Reading response", "Composition", "Directed writing", "Speaking endorsement (0524)"],
    },
    {
      name: "Cambridge English Literature (0475)",
      body: "Poetry, prose and drama study with attention to thematic analysis, quotation use, structured essay writing and (where chosen) the coursework option.",
      items: ["Poetry analysis", "Prose and drama", "Quotation discipline", "Essay structure"],
    },
    {
      name: "Edexcel English Language (4EA1)",
      body: "Reading and writing skills across non-fiction and fiction sources, including the Anthology and the transactional writing requirement.",
      items: ["Anthology preparation", "Transactional writing", "Unseen analysis", "Writing accuracy"],
    },
    {
      name: "Edexcel English Literature (4ET1)",
      body: "Poetry, prose and drama study across set texts and (depending on route) coursework or examined paper combinations.",
      items: ["Set text preparation", "Comparative essay", "Quotation use", "Coursework planning"],
    },
  ],
  studyApproach: [
    {
      title: "Writing accuracy as a weekly habit",
      body: "Grammar, punctuation and sentence variety are practiced steadily across Year 10 rather than fixed in a panic block before exams.",
    },
    {
      title: "Unseen analysis as routine practice",
      body: "Reading-response and unseen text questions reward calm, structured reading. A short weekly unseen practice builds the muscle that timed pressure usually breaks.",
    },
    {
      title: "Quotation discipline in Literature",
      body: "Students who learn short, well-chosen quotations almost always outperform those who memorise long ones. Tutors help build a workable text-specific quotation set.",
    },
    {
      title: "Author authorship, always",
      body: "Tutors review drafts, point out structural and evidential gaps and teach the skills needed to revise. The student remains the writer — drafts are not rewritten by anyone else.",
    },
  ],
  cityNotes: CITY_NOTES_IGCSE,
  reviews: [
    {
      quote:
        "Weekly unseen analysis felt like the unlock. Earlier Reading Paper attempts had been guessing — the answers now have a shape.",
      label: "Parent of a Cambridge First Language English student",
      location: "Mumbai",
    },
    {
      quote:
        "Literature finally felt manageable when we narrowed to a small set of well-chosen quotations and rehearsed using them across questions.",
      label: "Parent of an IGCSE Literature student",
      location: "Bangalore",
    },
    {
      quote:
        "Writing accuracy work in Year 10 saved us from a panicked Year 11. Steady weekly practice changed how the writing actually sounded.",
      label: "Parent of an Edexcel English Language student",
      location: "Gurugram",
    },
  ],
  blogs: [
    {
      title: "Cambridge First Language English vs Edexcel English Language",
      excerpt: "How the two main IGCSE English qualifications differ in paper structure, writing requirements and assessment objectives.",
      category: "Course Guide",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "Building writing accuracy without losing student voice",
      excerpt: "Grammar drills can drain the writing of personality. A short framework for steady accuracy work that keeps the writing alive.",
      category: "Writing",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "IGCSE Literature: choosing quotations that survive the exam",
      excerpt: "How to pick short, flexible quotations that can be used across multiple essay questions instead of memorising long set passages.",
      category: "Exam Skills",
      readTime: "4 min read",
      date: "May 2026",
    },
  ],
  faqs: [
    {
      question: "Which IGCSE English qualifications do tutors cover?",
      answer:
        "Cambridge First Language English (0500 and 0524), Cambridge English Literature (0475), Pearson Edexcel International GCSE English Language (4EA1) and English Literature (4ET1). Cambridge IGCSE English as a Second Language (0510 / 0511 / 0991) is supported subject to current tutor inventory.",
    },
    {
      question: "How are Cambridge First Language English and Edexcel English Language different?",
      answer:
        "Both qualifications assess reading and writing skills at first-language English level, but paper structure, the Anthology requirement (Edexcel), the speaking endorsement (Cambridge 0524) and the question style differ. A tutor familiar with the relevant specification keeps the support board-specific.",
    },
    {
      question: "Can a tutor help with IGCSE English Literature coursework?",
      answer:
        "Yes — where the route includes coursework, tutors help with text choice, planning, structure and criterion-led review. The student remains the author of the coursework itself.",
    },
    {
      question: "Does IB Gram prepare students for the Cambridge English speaking endorsement?",
      answer:
        "Yes — tutors help with topic planning and rehearsal for the 0524 speaking component. The actual assessed performance is internally assessed by the school and externally moderated by Cambridge.",
    },
    {
      question: "When should we start IGCSE English tutoring?",
      answer:
        "Most families start in early Year 10 to build writing accuracy and unseen-analysis routines steadily. Year 11 typically tightens into past-paper practice, structured essay drafting and short error-log review each week.",
    },
    {
      question: "Are online IGCSE English tutors effective?",
      answer:
        "Yes — IGCSE English is one of the subjects best suited to online delivery. Shared documents and screen-sharing make the writing review process visible and ongoing in a way that paper-based home sessions cannot match.",
    },
    COMMON_PRICING_FAQ,
    COMMON_MATCHING_FAQ,
    COMMON_DISCLAIMER_FAQ,
  ],
  ctaCopy:
    "Share which IGCSE English qualification the family is taking, the board, current concerns and your preferred lesson mode. The advisor team replies with two or three tutor profiles to compare without pressure.",
};

// -----------------------------------------------------------------------------
// IGCSE LANGUAGE
// -----------------------------------------------------------------------------
const igcseLanguage: CourseSubjectContent = {
  curriculumLabel: "Cambridge IGCSE / Pearson Edexcel International GCSE",
  subjectLabel: "Language",
  pageTitle: "IGCSE Language Tutor — Foreign Language & Hindi / Indian Languages",
  heroEyebrow: "IGCSE Languages",
  heroSummary:
    "Verified IGCSE Language tutors for Cambridge Foreign Languages (Spanish, French, German, Mandarin), Cambridge Hindi as a Second Language (0549) and Pearson Edexcel International GCSE language options. Grammar repair, written task practice and oral confidence.",
  metaTitle: "IGCSE Language Tutor — Spanish, French, Mandarin, Hindi & ESL | IB Gram",
  metaDescription:
    "IGCSE Language tutoring for Cambridge IGCSE Foreign Languages (Spanish, French, German, Mandarin), Hindi as a Second Language (0549) and Pearson Edexcel equivalents. Grammar, written tasks and oral coaching.",
  metaKeywords: [
    "IGCSE Language tutor",
    "Cambridge IGCSE Spanish tutor",
    "Cambridge IGCSE French tutor",
    "Cambridge IGCSE German tutor",
    "Cambridge IGCSE Mandarin tutor",
    "IGCSE Hindi tutor",
    "IGCSE Hindi as Second Language",
    "IGCSE 0549 Hindi",
    "Edexcel IGCSE Spanish tutor",
    "Edexcel IGCSE French tutor",
    "IGCSE ESL tutor",
    "IGCSE English as a Second Language",
    "IGCSE 0510 tutor",
    "IGCSE 0511 tutor",
    "IGCSE 0991 tutor",
    "IGCSE Language tutor Gurugram",
    "IGCSE Language tutor Delhi",
    "IGCSE Language tutor Mumbai",
    "IGCSE Language tutor Bangalore",
    "IGCSE Language oral exam",
    "IGCSE Language written task",
    "IGCSE Language home tutor",
  ],
  introParagraphs: [
    "IGCSE Language support covers two overlapping families. The first is foreign languages — Cambridge IGCSE and Pearson Edexcel International GCSE both offer Spanish, French, German and Mandarin, with paper structures focused on reading, writing, listening and speaking. The second is second-language English (Cambridge 0510, 0511 and the recently introduced 0991), which IGCSE families often take alongside their other subjects when the home language is not English. Hindi as a Second Language (Cambridge 0549) is requested heavily by NCR families.",
    "Strong IGCSE Language tutoring usually combines grammar repair, structured written task practice, listening exposure on authentic materials and weekly oral conversation. Students who treat language acquisition as memorisation tend to plateau; students who treat it as steady weekly use almost always grow. Tutors plan around the school's calendar and upcoming written tasks rather than running a parallel course that exhausts the student.",
    "Most families ask for one to two sessions per week through Year 10, with cadence increasing in the lead-up to oral exam windows and final written deadlines in Year 11. Online matching is often the best fit for less commonly taught language combinations — the strongest tutor in the country for a particular IGCSE language may not live in the family's city, and forcing a local match usually means accepting weaker subject fit.",
  ],
  syllabusTracks: [
    {
      name: "IGCSE Foreign Languages",
      body: "Cambridge IGCSE and Edexcel International GCSE Spanish, French, German and Mandarin — reading, writing, listening and speaking skills across themed topics. Strong attention to grammar repair and written task structure.",
      items: ["Grammar repair", "Written tasks", "Listening practice", "Oral rehearsal"],
    },
    {
      name: "IGCSE Hindi as a Second Language (0549)",
      body: "Cambridge Hindi as a Second Language — vocabulary, grammar, comprehension and production across reading, writing, listening and oral components.",
      items: ["Vocabulary depth", "Grammar accuracy", "Comprehension practice", "Oral component"],
    },
    {
      name: "IGCSE English as a Second Language",
      body: "Cambridge 0510 / 0511 / 0991 ESL — reading, writing, listening and speaking components for students whose first language is not English.",
      items: ["Reading comprehension", "Writing tasks", "Listening practice", "Speaking component"],
    },
    {
      name: "Oral and listening components",
      body: "Sessions cover topic preparation, response to stimuli, follow-up question handling and recovery strategies when memory blanks under exam pressure. Listening practice uses authentic materials beyond the textbook.",
      items: ["Topic rehearsal", "Stimulus response", "Recovery strategies", "Authentic listening"],
    },
  ],
  studyApproach: [
    {
      title: "Steady weekly use beats cramming",
      body: "Language acquisition rewards consistent low-intensity contact. Tutors plan small written or speaking tasks between sessions to keep the language active.",
    },
    {
      title: "Grammar repair before drilling",
      body: "Topic gaps from earlier years are addressed before paper-style practice begins. Skipping this usually leaves the same errors recurring through Year 10 and Year 11.",
    },
    {
      title: "Oral rehearsal as routine",
      body: "Speaking sessions are scheduled regularly, not just in the run-up to exams. The oral exam becomes a familiar conversation rather than a high-stakes performance.",
    },
    {
      title: "Listening on real materials",
      body: "Beyond textbook recordings, tutors use podcasts, short videos and authentic news clips so listening skills cope with real-world speech speed.",
    },
  ],
  cityNotes: CITY_NOTES_IGCSE,
  reviews: [
    {
      quote:
        "Hindi as a Second Language finally clicked when grammar repair came before writing drills. The Year 10 cadence felt steady instead of overwhelming.",
      label: "Parent of an IGCSE Hindi student",
      location: "Gurugram",
    },
    {
      quote:
        "Online Mandarin tutoring worked because the tutor was a real specialist. Locally we couldn't have matched that depth.",
      label: "Parent of a Cambridge IGCSE Mandarin student",
      location: "Bangalore",
    },
    {
      quote:
        "ESL writing tasks improved once we practiced planning in five minutes before writing. Earlier attempts had been all writing, no planning.",
      label: "Parent of a Cambridge ESL student",
      location: "Noida",
    },
  ],
  blogs: [
    {
      title: "Choosing the right IGCSE Language combination",
      excerpt: "How to balance Foreign Language and ESL choices alongside the other IGCSE subjects without overloading the timetable.",
      category: "Subject Choice",
      readTime: "5 min read",
      date: "May 2026",
    },
    {
      title: "Building IGCSE oral confidence from Year 10",
      excerpt: "Why steady weekly speaking practice outperforms intensive oral coaching in the final weeks before the exam.",
      category: "Oral Prep",
      readTime: "4 min read",
      date: "May 2026",
    },
    {
      title: "Written tasks: planning before writing",
      excerpt: "How to plan an IGCSE Language written task in five minutes so the student spends the rest of the time writing accurately.",
      category: "Exam Skills",
      readTime: "4 min read",
      date: "May 2026",
    },
  ],
  faqs: [
    {
      question: "Which IGCSE Languages do tutors cover?",
      answer:
        "Cambridge IGCSE and Pearson Edexcel International GCSE Spanish, French, German and Mandarin, plus Cambridge Hindi as a Second Language (0549) and Cambridge English as a Second Language (0510 / 0511 / 0991). Other languages are matched subject to current tutor inventory.",
    },
    {
      question: "What is the difference between IGCSE First Language English and English as a Second Language?",
      answer:
        "First Language English (Cambridge 0500 / 0524) assesses reading and writing at first-language level. English as a Second Language (Cambridge 0510 / 0511 / 0991) is for students whose first language is not English, with reading, writing, listening and speaking components calibrated to L2 learners.",
    },
    {
      question: "Is IGCSE Hindi as a Second Language tutoring available?",
      answer:
        "Yes — IB Gram regularly supports IGCSE Hindi (0549) families. Sessions cover vocabulary, grammar accuracy, comprehension practice and the oral component, with tutor matching tuned to the student's existing exposure to Hindi.",
    },
    {
      question: "How are IGCSE Language oral exams assessed?",
      answer:
        "Oral assessments are internally administered by the school and externally moderated by the board. Tutors help with topic preparation, stimulus response, follow-up question handling and recovery strategies — the actual exam itself stays inside the school.",
    },
    {
      question: "How many sessions per week does IGCSE Language need?",
      answer:
        "Most students do well with one to two sessions per week through Year 10 and Year 11. Closer to oral exam windows and final written deadlines, sessions often increase or shift toward speaking-only practice.",
    },
    {
      question: "Are online IGCSE Language tutors effective?",
      answer:
        "Yes — particularly for less commonly taught languages where the strongest subject specialists may not live in the family's city. Video calls support speaking and listening practice well, and shared documents keep written work accessible across sessions.",
    },
    COMMON_PRICING_FAQ,
    COMMON_MATCHING_FAQ,
    COMMON_DISCLAIMER_FAQ,
  ],
  ctaCopy:
    "Share which IGCSE Language the family needs help with, the board, current concerns and your preferred lesson mode. The advisor team replies with a small shortlist that fits the language, the rhythm and the timing window.",
};

// -----------------------------------------------------------------------------
// LOOKUP TABLE
// -----------------------------------------------------------------------------

const SUBJECT_CONTENT: Record<string, Record<string, CourseSubjectContent>> = {
  ib: {
    mathematics: ibMathematics,
    sciences: ibSciences,
    individuals: ibIndividuals,
    "individuals-and-societies": ibIndividuals,
    english: ibEnglish,
    language: ibLanguage,
  },
  igcse: {
    mathematics: igcseMathematics,
    sciences: igcseSciences,
    individuals: igcseIndividuals,
    "individuals-and-societies": igcseIndividuals,
    english: igcseEnglish,
    language: igcseLanguage,
  },
};

export function getCourseSubjectContent(curriculum: string, subject: string): CourseSubjectContent | null {
  const c = curriculum?.toLowerCase();
  const s = subject?.toLowerCase();
  return SUBJECT_CONTENT[c]?.[s] ?? null;
}
