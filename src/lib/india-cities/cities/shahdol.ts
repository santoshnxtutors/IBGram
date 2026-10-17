import type { CitySeoPage } from "../types";

/**
 * ibgram.com/shahdol/ - IB and IGCSE tutoring for Shahdol, eastern Madhya Pradesh.
 * No IB or Cambridge/Edexcel school inside Shahdol could be confirmed, so stripSchools is empty and
 * schoolClusters use labelled nearby clusters (Jabalpur, Bhopal) drawn from existing city pages.
 */
export const shahdol: CitySeoPage = {
  slug: "shahdol",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  countryName: "Shahdol",
  countryNameLong: "Shahdol, Madhya Pradesh",
  demonym: "Shahdol",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early-evening and Sunday online slots, arranged around MP Board timetables, coalfield shift patterns and summer power cuts",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.2967, longitude: 81.3561 },
  wikipedia: "https://en.wikipedia.org/wiki/Shahdol",
  alternateNames: ["Shahdol MP", "Shahdol Vindhya"],
  stripSchools: [],

  title: "Shahdol IB & IGCSE Tutors | One-to-One Online Tuition",
  metaDescription:
    "Online one-to-one IB and IGCSE tuition in Shahdol from India-based tutors, for DP, MYP, PYP and IGCSE students at home around MP Board hours. Free trial",
  h1: "IB and IGCSE Tutors and Tuition at Home in Shahdol",
  heroEyebrow: "IB & IGCSE ONE-TO-ONE TUITION FOR SHAHDOL STUDENTS",
  heroSubtitle:
    "Families asking for home tuition in Shahdol for an international board will find it taught online, live and one-to-one, with the student at their own desk and the tutor on screen. Nobody visits a Shahdol home. Send your child's current board, subject and level, and we pair you with a tutor who already teaches that precise IB, Cambridge or Edexcel course.",
  primaryKeyword: "IB and IGCSE tutors in Shahdol",
  imageAltText: "Shahdol student and an online tutor discussing an IB Economics diagram on a shared screen during an evening home lesson",
  secondaryKeywords: [
    "IB tutor Shahdol",
    "IGCSE tutor Shahdol",
    "IB home tuition Shahdol",
    "IGCSE home tuition Shahdol",
    "IB private tuition Shahdol",
    "IB Maths tutor Shahdol",
    "IGCSE Maths tutor Shahdol",
    "IB Physics tutor Shahdol",
    "IB Chemistry tutor Shahdol",
    "IB Biology tutor Shahdol",
    "IB DP tutor Shahdol",
    "IB MYP tutor Shahdol",
    "IB PYP tutor Shahdol",
    "IGCSE online tuition Shahdol",
    "online IB tutor Shahdol division",
    "Cambridge IGCSE tutor Shahdol",
    "Edexcel IGCSE tutor Shahdol",
    "IB tutor Sohagpur",
    "IGCSE tutor Burhar",
    "IB tutor Anuppur",
  ],

  heroTrustPoints: [
    "Matched on the exact IB, Cambridge or Edexcel course, not a vague subject tag",
    "Teaching is fully online; home visits run only in Gurugram and parts of Delhi NCR",
    "A free first lesson and the freedom to switch tutors",
    "No affiliation with any school or exam body named here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The full IB range" },
    { value: "Cambridge + Edexcel", label: "IGCSE boards" },
    { value: "IST", label: "Indian-time lessons" },
    { value: "Free trial", label: "First lesson on us" },
  ],

  intro: {
    heading: "International boards, Vindhya country: a realistic picture for Shahdol",
    paragraphs: [
      "Shahdol is the headquarters of a tribal and forested division in eastern Madhya Pradesh, closer to Chhattisgarh than to Bhopal. The Sone river rises not far away near Amarkantak, coal seams feed the SECL mines around Sohagpur, Dhanpuri and Anuppur, and the ancient Virateshwar temple at Sohagpur draws visitors. Schools in town are MP Board and CBSE, and we could not confirm a school in Shahdol that teaches the IB or Cambridge or Edexcel IGCSE.",
      "That is why the honest route to an international syllabus in Shahdol is tutoring. The households most likely to ask are mining and power-sector officers, government and health-service families facing transfers, and professionals with a child who is clearly ahead of the local curriculum. They want a qualification a university in Pune, London or Toronto will recognise, or they want a stepping stone towards a boarding school.",
      "Our lessons are live, one-to-one and online. The student sits at home on a laptop, and a tutor in another Indian city teaches in Indian Standard Time. We say it directly: no tutor travels to Shahdol, and in-person tuition exists only in Gurugram and parts of Delhi NCR. What families get instead is a teacher chosen for the syllabus, not just for the city.",
      "IB Gram is independent. It has no link to the International Baccalaureate, Cambridge International, Pearson Edexcel or any school named below, and names appear only as context. Tutors coach, explain, set practice and mark it the way an examiner would, and they do not write assessed work.",
    ],
    bullets: [
      "IB tutoring across PYP, MYP and DP at HL and SL",
      "Cambridge and Pearson Edexcel IGCSE, at every tier",
      "Slots set around MP Board and CBSE hours and coalfield shifts",
      "A written summary after each lesson",
    ],
  },

  programmesIntro:
    "Almost every Shahdol family begins from MP Board or CBSE, so the useful question is what each IB stage asks of a child and where it helps. The notes below are written for that starting point.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 3-12",
      description:
        "A no-exam primary course built around inquiry units and a final-year Exhibition researched by the child.",
      countryNote:
        "In Shahdol this is mostly a parent asking how to build reading, speaking and questioning skills early, before school choices narrow.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects assessed on four criteria each, joined by interdisciplinary units and the Personal Project.",
      countryNote:
        "Families aiming at a boarding school in Jabalpur, Bhopal or further use MYP tutoring to practise criteria-style answers.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects over two years, three at HL, plus TOK, an Extended Essay and CAS, with internal assessments in most subjects.",
      countryNote:
        "A Shahdol DP student is usually preparing before a transfer or studying a subject or two in advance.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A small selection of Diploma subjects combined with a career-related study and a reflective project.",
      countryNote:
        "Rare here; the Diploma-subject tutoring is the same as for a full DP student.",
    },
  ],

  subjectsIntro:
    "A tutor is chosen for the course and level, such as IB Biology HL or IGCSE Physics 0625 Extended. In Shahdol this often means building a bridge from an MP Board or CBSE foundation to international depth.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof, for students who want to reason through a result instead of memorising steps." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Real data, statistics and calculator use for students whose strengths are practical and numerical." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics and waves with clear unit discipline, and a practical investigation planned ahead." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, energetics and organic mechanisms, connected to how lab reports are graded." },
    { name: "IB Biology", levels: "HL / SL", description: "Written answers built on named examples, and IA statistics explained plainly." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, policy evaluation and, at HL, quantitative questions on markets and trade." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading and a research-based IA on a real organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading and comparative essays for students who have studied mostly in Hindi." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Logic, programming and data structures, building towards the IA solution." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking with coal, forest and river examples that feel local." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies and data skills, with fieldwork ideas that work with limited resources." },
    { name: "IB Hindi A and Hindi B", levels: "HL / SL", description: "Literary analysis or spoken fluency with oral practice on video." },
    { name: "IB Political Science / Global Politics", levels: "HL / SL", description: "Concepts of power and sovereignty with case material students can debate." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Rehearsing arguments about how knowledge is formed before the exhibition and essay." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Choosing and scoping a question, and methods guidance without drafting." },
    { name: "IB MYP Sciences & Maths", levels: "MYP 1-5", description: "Criterion-by-criterion work on investigations and problem solving." },
    { name: "IB MYP Language & Literature and Personal Project", levels: "MYP 1-5", description: "Regular writing practice and a manageable project timetable." },
  ],

  igcseSubjectsIntro:
    "Since Cambridge and Edexcel set different papers, tutors start by confirming the board and the syllabus code. Teaching then uses that board's own questions and mark schemes.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended algebra, trigonometry and statistics, with method marks stressed." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Differentiation, functions and identities that ease the step into Class 11 maths." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Higher-tier practice on Edexcel papers, whose question ordering differs from Cambridge." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Mechanics, thermal physics and circuits, plus the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactions and organic chemistry, with practical skills drilled on paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, ecology and data response, with careful reading of each question." },
    { name: "IGCSE Combined & Coordinated Sciences", levels: "0653 / 0654", description: "Three sciences kept in step within one plan." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Basic concepts, diagrams and evaluative paragraphs." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming tasks and trace tables for the problem-solving paper." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and summary tasks marked to the board's scheme." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and speaking for an externally assessed language credit." },
    { name: "IGCSE Geography, History & Literature", levels: "0460 / 0470 / 0475", description: "Case studies, sources and essay timing tailored to each paper." },
  ],

  regionsTitle: "How Shahdol's neighbourhoods and nearby coalfield towns affect lessons",
  regionsIntro:
    "Online lessons do not depend on where in the division a student lives, but connectivity, shift timings and school hours do shape the best slot. Here is what the main areas usually mean for a study plan.",
  regions: [
    { name: "Shahdol city centre", note: "The division headquarters with most private schools, coaching classes and offices, busiest around the market at school closing time." },
    { name: "Civil Lines and collectorate area", note: "Quieter streets of officers and professionals, who are the likeliest to ask about board changes after a posting." },
    { name: "Burhar", note: "A town south of Shahdol with its own school cluster and industrial links, whose students often share tutors with the city." },
    { name: "Sohagpur", note: "A coalfield and temple town, home to SECL staff families and the Virateshwar temple, with steady demand for strong Science and Maths teaching." },
    { name: "Dhanpuri", note: "A township near Shahdol built around the coalfield, with company housing and regular shift patterns that affect lesson timing." },
    { name: "Jaisinghnagar", note: "A colliery and farming town where school options narrow and online tuition covers more ground." },
    { name: "Beohari", note: "A town along the road towards Umaria and Jabalpur, with families who look to Jabalpur for further study." },
    { name: "Kotma", note: "A coal-mining town towards Anuppur, where SECL families plan for postings and transfers." },
    { name: "Anuppur and Amlai", note: "A district headquarters and paper-mill township near Amarkantak, sharing Shahdol's school landscape and its need for online options." },
    { name: "Pushprajgarh", note: "A forested tribal-belt block where broadband is patchy, so offline practice sheets matter as much as the live call." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service. It has no partnership with any school listed on this page, nor with the IB, Cambridge International or Pearson Edexcel. Names appear for context only, and since curricula and admissions change, families should confirm current details with each school directly.",
  schoolClusters: [
    {
      city: "Shahdol division",
      note: "We could not confirm any school in Shahdol, Anuppur or Umaria that teaches the IB or Cambridge or Edexcel IGCSE. Schools here are MP Board and CBSE, so international subjects are studied through a tutor.",
      schools: [],
    },
    {
      city: "Nearby: Jabalpur",
      note: "Jabalpur, several hours by road and rail, is the nearest major city in the state. A few schools there offer international programmes, and some Shahdol families look at them for Class 9 or 11.",
      schools: ["Little World School", "The Sanskaar Valley School, Chandanpura"],
    },
    {
      city: "Nearby: Bhopal and Indore",
      note: "Bhopal and Indore hold the state's largest pool of international schools. Families heading there benefit from several months of tutoring beforehand.",
      schools: ["Shrewsbury International School India", "Daly College Indore"],
    },
  ],

  tutorsIntro:
    "Tutors are based across India and teach in Indian Standard Time. Every profile states the boards, programmes and subjects that tutor has taught, so a family in Shahdol picks on syllabus fit and not on a general label.",

  modesIntro:
    "Shahdol families settle into one of three online patterns, depending on how close an exam or a move is, and not on which township they live in.",
  modes: [
    {
      title: "Weekly online one-to-one",
      description:
        "A steady slot with one tutor, scheduled around school, coaching for board subjects and any shift work in the household.",
      bullets: [
        "The same tutor each week",
        "A short note after every session",
        "Works for PYP, MYP, DP and IGCSE",
        "Extra slots added before mocks",
      ],
    },
    {
      title: "Exam-window push",
      description:
        "A compressed run of lessons against a real IB, Cambridge or Edexcel date, used when weekly pace will not finish the syllabus.",
      bullets: [
        "Built backwards from the exam date",
        "Heavy on past papers and mark schemes",
        "Often placed in Diwali or summer breaks",
        "Returns to weekly pacing afterwards",
      ],
    },
    {
      title: "Coursework feedback check-ins",
      description:
        "Occasional sessions on research questions, criteria and a student's own draft, kept apart from subject teaching.",
      bullets: [
        "Timed to school deadlines",
        "Comments only, never a written piece",
        "Covers IA, EE and the Personal Project",
        "Alongside, not instead of, weekly lessons",
      ],
    },
  ],

  sections: [
    {
      heading: "Why do families in Shahdol ask about IB and IGCSE?",
      paragraphs: [
        "The demand for IB and IGCSE tutors in Shahdol comes from three directions, and each explains a different kind of lesson request. The first is coalfield and power-sector employment. SECL officers and engineers at Sohagpur, Dhanpuri, Kotma and Anuppur know that promotions bring transfers to Nagpur, Bilaspur or Kolkata, and they want the child's grades to travel.",
        "The second is state service. Officers posted at the collectorate, doctors at the medical college and district hospital and teachers with transferable jobs face similar uncertainty. Choosing a syllabus that is widely recognised gives them flexibility and avoids repeated board changes.",
        "The third is ambition. Some students in Shahdol outperform their classroom and want challenge. IGCSE Extended Mathematics or IB Physics offers that, and an application abroad is easier when the subject content and style match what admissions offices expect.",
        "None of these families needs a tutor at the door. They need a good specialist online, and the lesson takes place on a screen with nobody travelling to Shahdol.",
      ],
      bullets: [
        "Coalfield and power-sector families expecting transfers",
        "Doctors, officers and teachers in state service",
        "Students who have outgrown the local syllabus",
        "Every lesson online, with no tutor visits to Shahdol",
      ],
    },
    {
      heading: "MP Board, CBSE, IGCSE or IB: which should a Shahdol student choose?",
      paragraphs: [
        "For most Shahdol students MP Board or CBSE remains the core, and IGCSE or IB is best added deliberately. MP Board is the most common and leans on recall and textbook reproduction. CBSE is based on NCERT and adds application questions, but both differ from the reasoning-heavy international papers.",
        "IGCSE tests the same content in a different way. Marks reward working, explanation and use of command words such as explain, justify and evaluate, and a student can practise this privately. The content overlaps more than parents expect, and the main new skill is written precision.",
        "IB is deeper and broader. Six subjects, an essay, TOK and CAS stretch over two years, and only an authorised school can offer the full Diploma. For Shahdol that means tutoring is preparation for a move.",
        "The table compares what matters for a family in the division.",
      ],
      bullets: [
        "MP Board and CBSE cover nearly all local schools",
        "IGCSE can be studied subject by subject",
        "IB Diploma needs an authorised school",
        "Command-word practice helps whichever route is chosen",
      ],
      table: {
        caption: "MP Board, CBSE, IGCSE and IB compared for Shahdol households",
        columns: ["Point", "MP Board", "CBSE", "IGCSE / IB"],
        rows: [
          ["Exam focus", "Recall and textbook content", "NCERT with application", "Reasoning and extended writing"],
          ["Local supply", "Nearly every school", "A few private schools", "Not confirmed locally; via tutors"],
          ["Language", "Hindi or English", "Hindi or English", "English"],
          ["Next step", "State colleges and exams", "CUET-UG, JEE, NEET", "CUET-UG eligibility and overseas study"],
        ],
      },
    },
    {
      heading: "How is the cost of IB and IGCSE tuition set for a Shahdol family?",
      paragraphs: [
        "IB Gram quotes the rate in writing before you commit. It depends on the subject, level, lesson length and the tutor's experience. No price appears on this page because needs differ: a young PYP reader and an HL Physics candidate are very different jobs.",
        "Complexity raises the rate. HL Maths, HL sciences, Additional Mathematics and help with coursework method need more specialised tutors. Core IGCSE and MYP subjects tend to cost less, and a longer session costs more than a short one.",
        "Shahdol families pay nothing for travel. Tutors teach online, so you pay for teaching only, and can choose from across India instead of relying on whoever lives nearby. In a division with few specialists, that is the main advantage.",
        "There is no contract. Plans are reviewed every few weeks and can be paused during exams or festivals, and the first lesson is free.",
      ],
      bullets: [
        "Subject, level, length and tutor experience set the rate",
        "HL and Additional Maths sit higher",
        "No travel cost",
        "Written quote, regular reviews",
      ],
    },
    {
      heading: "Should Shahdol students use a coaching class, an online tutor or self-study?",
      paragraphs: [
        "For an international syllabus, a one-to-one online tutor is usually a better choice than a coaching class in Shahdol, because local classes are geared towards MP Board, NEET and JEE. A specialist tutor changes the plan to the board, tier and past papers your child will sit.",
        "Coaching classes have strengths: discipline, peers and test series. Those tools do not map onto IGCSE Chemistry or IB Economics, and a student can spend months on a class that does not touch the required skills.",
        "A private teacher in town may teach school subjects well, but very few have handled Cambridge, Edexcel or IB content. Self-study works for revision when a student is organised, but stalls when a new kind of question appears.",
        "The table shows the trade-offs at a glance.",
      ],
      table: {
        caption: "Study options for IB and IGCSE students in Shahdol",
        columns: ["Option", "Syllabus fit", "Notes for Shahdol"],
        rows: [
          ["Online one-to-one tutor", "Selected for board, subject and level", "Works from home in any part of the division"],
          ["Local coaching class", "Aimed at MP Board, JEE and NEET", "Good discipline, poor fit for IB and IGCSE"],
          ["Tutor visiting the house", "Varies", "Not offered; in-person visits exist only in Gurugram and parts of Delhi NCR"],
          ["Self-study", "Depends on the student", "Useful for revision; weak on unfamiliar tasks"],
        ],
      },
    },
    {
      heading: "What does the Shahdol calendar mean for IB and IGCSE exam planning?",
      paragraphs: [
        "MP Board and CBSE schools run from April or June to March with finals in February and March, while Cambridge and Edexcel IGCSE papers are held mainly in May and June. Cambridge repeats in October and November, and Edexcel in January, and IB Diploma exams fall in May and November. Planning starts by lining those dates against the school year.",
        "Shahdol gets strong monsoon rain, and storms in forest areas can interrupt power and broadband for hours. Summers are hot, with afternoon temperatures well above 40 degrees, so late-afternoon or evening lessons are more sensible than midday slots.",
        "Festivals matter. Navratri, Dussehra, Diwali, Holi and local tribal and harvest celebrations affect family schedules, and coalfield households also follow shift patterns that shift evening availability. A tutor will move a lesson rather than lose it.",
        "The table sets out the most useful dates.",
      ],
      bullets: [
        "IGCSE main sitting in May and June",
        "Cambridge second window in October and November",
        "Edexcel second window in January",
        "Monsoon and heat shape lesson times",
      ],
      table: {
        caption: "Exam and local calendar for Shahdol students",
        columns: ["Milestone", "Timing", "Note for Shahdol families"],
        rows: [
          ["MP Board and CBSE finals", "February to March", "The priority for the school year"],
          ["Cambridge and Edexcel IGCSE main sitting", "May to June", "Falls in peak summer heat"],
          ["Monsoon storms", "June to September", "Expect occasional power and data failures"],
          ["Cambridge second sitting", "October to November", "Overlaps Dussehra and Diwali"],
          ["Edexcel second sitting", "January", "Mid-term for local schools, cold mornings"],
        ],
      },
    },
    {
      heading: "What are the university routes for IB and IGCSE students from Shahdol?",
      paragraphs: [
        "A student who completes IB or IGCSE can aim at Indian universities, professional exams or universities abroad, and the aim should guide subject choice early. Indian universities accept IB and Cambridge or Edexcel results through equivalence from the Association of Indian Universities, and CUET-UG allows students from any board to compete.",
        "Within reach of Shahdol are Jabalpur, with IIITDM and a long-established medical college, Bhopal with AIIMS and several universities, and Bilaspur in Chhattisgarh. Students with an international background often handle project work and written assessment with confidence.",
        "Engineering and medicine need extra care. JEE and NEET have eligibility rules that change each year and expect Physics, Chemistry and Mathematics or Biology, so check them before choosing IGCSE or IB subjects.",
        "For study abroad, UK universities look at IB points and HL subjects, while Canadian and Australian ones look at final grades, and US applications add essays and test scores. A tutor helps a student build the profile those applications expect.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG open Indian routes",
        "Jabalpur and Bhopal are the closest major campuses",
        "JEE and NEET eligibility changes yearly",
        "IB points and HL subjects matter for UK offers",
      ],
    },
    {
      heading: "How do tutors teach IB Maths and the sciences to a Shahdol student?",
      paragraphs: [
        "Tutors begin with a diagnostic, because MP Board and CBSE students arrive with very different gaps. IB Maths Analysis and Approaches suits students who enjoy algebra and calculus, and Applications and Interpretation suits those who prefer statistics and calculators. Choosing correctly before Class 11 saves a painful switch.",
        "In Physics and Chemistry, the early lessons address units, significant figures and the use of the data booklet. Students often know the theory, but less often have practice in writing short structured explanations or analysing data, and the tutor builds those habits.",
        "Biology rewards clear diagrams, correct terms and named examples. The Internal Assessment is an original investigation, and tutors coach planning and analysis while leaving the work to the student. Where lab access is limited, guidance on feasible experiments is part of the job.",
        "Lessons are run on shared whiteboards with annotated papers. A student in Shahdol needs a reliable connection, headphones and a quiet corner, plus a spare power source for outages.",
      ],
      bullets: [
        "Choose Maths AA or AI before Class 11",
        "Practise units and data handling from the start",
        "Plan IA ideas to fit real resources",
        "Keep a power and internet back-up",
      ],
    },
    {
      heading: "Which IGCSE board, tier and subjects suit a Shahdol student?",
      paragraphs: [
        "Cambridge and Edexcel are separate boards, so a Shahdol student picks one first. Cambridge uses codes such as 0580 and 0625 and sits in May-June and October-November. Edexcel uses codes such as 4MA1 and sits in May-June and January. Whichever board is chosen, materials and past papers come from that board alone.",
        "Tiers matter. Cambridge offers Core and Extended, and Edexcel offers Foundation and Higher. Students aiming for Maths, Physics or Economics at Class 11 should choose Extended or Higher to avoid a grade ceiling.",
        "A private candidate also needs an exam centre that will accept them. In smaller cities this is often the practical constraint, so ask early and choose the board around it.",
        "A sensible science set is Mathematics, Additional Mathematics, Physics, Chemistry, Biology or Computer Science, and English. A commerce-minded student might add Economics or Business Studies, with tutors helping to balance the load against school work.",
      ],
      bullets: [
        "Pick the board before the subjects",
        "Choose Extended or Higher where later study needs it",
        "Confirm a private-candidate exam centre early",
        "Balance IGCSE work with school hours",
      ],
    },
  ],

  process: [
    { title: "Tell us about your child", description: "Current board, class, the subject and level wanted, and the hours that fit the household." },
    { title: "Look at matched tutors", description: "A shortlist based on the syllabus, with a short background for each tutor." },
    { title: "Sit a free lesson", description: "A genuine topic taught online, with no payment or paperwork." },
    { title: "Fix the opening plan", description: "First topics, session length and how updates reach you." },
    { title: "Review every few weeks", description: "A short check-in, adjusted for exams and festival weeks." },
  ],

  whyPoints: [
    { title: "Syllabus before location", description: "Tutors are chosen for the exact course and level your child needs." },
    { title: "Plain about what is local", description: "No IB or IGCSE school in Shahdol is confirmed, and the plan is built around that." },
    { title: "Trial, then decide", description: "The first lesson is free and continuing is your choice." },
    { title: "Coursework stays the student's", description: "Tutors coach but never write IAs, EE or TOK essays." },
    { title: "Progress you can see", description: "A note after each lesson and a review every few weeks." },
    { title: "Easy to change", description: "Swap tutors whenever the fit is wrong, with no contract." },
  ],

  faqs: [
    {
      question: "Can my child learn IB subjects in Shahdol without changing school?",
      answer:
        "Yes, through online tutoring alongside the current school, though the full IB Diploma needs an authorised school. Many Shahdol students learn IB Maths, sciences or Economics this way, either to prepare for a move or to stretch their learning. Lessons are live, one-to-one and arranged around MP Board or CBSE hours, with a free trial first.",
    },
    {
      question: "Is home tuition in Shahdol available for IB or IGCSE?",
      answer:
        "Only in the online form. Tutors do not visit homes in Shahdol, and in-person home visits exist only in Gurugram and parts of Delhi NCR. The student studies at home on a laptop while the tutor teaches live, which many families find is the nearest equivalent to private home tuition, with the added benefit of access to specialists from across India.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Shahdol?",
      answer:
        "The rate depends on the subject, level, session length and the tutor's experience, and we quote it in writing before you book. HL sciences and Additional Mathematics cost more than Core IGCSE subjects. There is no travel charge and no fixed contract, and the free trial lets you judge the lesson first. We do not publish a price list.",
    },
    {
      question: "Can an MP Board or CBSE student take IGCSE subjects?",
      answer:
        "Yes, and many do so subject by subject in Mathematics, Physics, Chemistry or English. The content overlaps with Class 9 and 10, so the new skills are command words, structured answers and past-paper technique. A tutor checks your child's school syllabus first to avoid repetition and builds a plan around the gaps.",
    },
    {
      question: "Which IB and IGCSE subjects can tutors teach?",
      answer:
        "IB tutors cover Maths, Physics, Chemistry, Biology, Economics, Business Management, English, Computer Science, ESS, Geography, Global Politics, Hindi, TOK and EE guidance. IGCSE tutors cover Mathematics, Additional Mathematics, the sciences, Economics, Computer Science, English and Hindi. MYP and PYP students are also supported.",
    },
    {
      question: "Should a Shahdol student choose Cambridge or Edexcel?",
      answer:
        "The right board is the one your child can actually sit. Cambridge offers May-June and October-November sessions, Edexcel May-June and January. A private candidate needs an exam centre that accepts them, so find that first. Tutors then teach from the chosen board's own syllabus and past papers.",
    },
    {
      question: "Will tutors help with an IA or Extended Essay?",
      answer:
        "They coach on question choice, planning, structure and criteria, but do not write or edit the work itself. IB rules require the IA and Extended Essay to be the student's own. A session works like a supervision meeting: the student shares a draft and the tutor asks questions and points to the assessment criteria.",
    },
    {
      question: "Is there an IB school in Shahdol?",
      answer:
        "We could not confirm any school in Shahdol or the surrounding division teaching the IB or Cambridge or Edexcel IGCSE. The closer options are in Jabalpur, such as Little World School, and in Bhopal and Indore. We name them for context only, have no affiliation with them, and suggest asking each school directly.",
    },
    {
      question: "How do exam dates fit the Shahdol school calendar?",
      answer:
        "Local finals fall in February and March, while IGCSE main sittings come in May and June, with Cambridge repeating in October-November and Edexcel in January. A tutor plans backwards from the exam date and puts intensive work into quieter weeks, such as the summer break, and keeps spare slots around festivals.",
    },
    {
      question: "What if our first tutor does not suit my child?",
      answer:
        "We arrange a different tutor, and you need not give a long explanation. The free trial exists to reveal the fit early, and the notes after each lesson help us notice a mismatch. There is no contract, so no one is locked in.",
    },
    {
      question: "Does online tuition work with patchy connectivity in the division?",
      answer:
        "It works with preparation. Forest-belt and coalfield areas can see outages, so a charged laptop, a power bank and a phone hotspot are sensible. Tutors share written notes and practice sheets, so a missed connection does not cost a full lesson, and sessions can be rescheduled quickly.",
    },
    {
      question: "Can one tutor cover IB and IGCSE while we decide?",
      answer:
        "Often yes, because many tutors teach both and the subject content overlaps, especially in Mathematics and the sciences. A single tutor can run a diagnostic and suggest a route. If the two paths need different specialists, we will say so and propose separate tutors.",
    },
    {
      question: "How do IB and IGCSE results count for Indian university entry?",
      answer:
        "The Association of Indian Universities issues equivalence for IB and for Cambridge or Edexcel qualifications, and CUET-UG is open to students from any board. Courses such as engineering and medicine have their own eligibility rules that change every year, so verify them each time. A tutor can advise on useful subject combinations.",
    },
    {
      question: "How do we get started?",
      answer:
        "Email support@ibgram.com or WhatsApp +91 7439 368 115 with your child's board, class, subject and the times that suit you. We reply with a matched tutor and a trial slot. A recent marksheet or past paper lets the tutor see where your child stands.",
    },
    {
      question: "Do you serve Sohagpur, Burhar, Anuppur and the nearby towns?",
      answer:
        "Yes, because every lesson is online, families across the Shahdol division use the same service. You need a laptop or tablet, a steady connection and a quiet space. Tutors teach in Indian Standard Time, and slots can shift around shift timings and storms.",
    },
    {
      question: "Is IB Gram affiliated with any school or exam board?",
      answer:
        "No. IB Gram is an independent tutoring service with no link to any school, the IB, Cambridge or Pearson Edexcel. School names on this page are context only. Tutors coach but never write assessed work, and all decisions about schools and boards remain with the family.",
    },
  ],

  internalLinks: [
    { label: "India hub", href: "/india/", description: "The national page on IB and IGCSE online tutoring across India." },
    { label: "Gurgaon home tuition", href: "/gurgaon/", description: "The only place where a tutor visits homes in person." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutors matched by programme, subject and level." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, codes and tiers explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL, SL, the core and Internal Assessments." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Weighing AA against AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Start a free trial lesson enquiry." },
    { label: "IB and IGCSE tutors in Rewa", href: "/rewa/", description: "The nearby Vindhya city with a larger school landscape." },
    { label: "IB and IGCSE tutors in Satna", href: "/satna/", description: "A neighbouring Madhya Pradesh city on the same rail corridor." },
    { label: "IB and IGCSE tutors in Jabalpur", href: "/jabalpur/", description: "The closest large city for schools and universities." },
  ],

  closingHeading: "Book a free trial lesson for your Shahdol student",
  closingBody:
    "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board, subject, level and the times that suit you. A matched tutor and a free online trial slot come back to you, and you decide after the lesson.",
};
