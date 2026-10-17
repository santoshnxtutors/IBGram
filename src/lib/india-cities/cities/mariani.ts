import type { CitySeoPage } from "../types";

/**
 * /mariani/ - IB and IGCSE tutoring page for Mariani, Jorhat district, Assam. Online-only delivery:
 * tutors do not visit homes in Mariani, since in-person home tuition is offered only in Gurugram and
 * parts of Delhi NCR. Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const mariani: CitySeoPage = {
  slug: "mariani",
  countryName: "Mariani",
  countryNameLong: "Mariani, Jorhat district, Assam",
  demonym: "Mariani",
  state: "Assam",
  stateCode: "IN-AS",
  flagCode: "in",
  countryCode: "IN",
  region: "Assam, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We plan around the long monsoon, early Assam sunsets, Bohag Bihu in April and the Durga Puja fortnight",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.6603, longitude: 94.3303 },
  wikipedia: "https://en.wikipedia.org/wiki/Mariani,_India",
  alternateNames: ["Mariani Junction", "Mariani Jorhat"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mariani, Assam | Online Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Mariani, Jorhat district, Assam: one-to-one live lessons on IST, DP, MYP, Cambridge and Edexcel, with a free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Mariani",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR MARIANI, JORHAT DISTRICT",
  heroSubtitle:
    "Private tuition from home in Mariani for students of the IB or Cambridge and Edexcel IGCSE, taught live and one to one on a laptop. Nobody from IB Gram visits a house in Mariani or Jorhat; home visits exist only in Gurugram and parts of Delhi NCR. We match the tutor to the exact course, and the first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Mariani",
  imageAltText: "A student in Mariani, Assam studying IB Biology with an online tutor on video",
  secondaryKeywords: [
    "IB tutor Mariani",
    "IGCSE tutor Mariani",
    "IB home tuition Mariani",
    "IGCSE home tuition Mariani",
    "IB private tuition Mariani",
    "IB Maths tutor Mariani",
    "IGCSE Maths tutor Mariani",
    "IB Physics tutor Mariani",
    "IB Chemistry tutor Mariani",
    "IB Biology tutor Mariani",
    "IB DP tutor Mariani",
    "IB MYP tutor Mariani",
    "IB PYP tutor Mariani",
    "IGCSE online tuition Mariani",
    "IB tutor Jorhat district",
    "IGCSE tutor Mariani Assam",
    "online IB tuition Assam",
    "IB tutor Mariani Junction",
    "IB tuition Upper Assam",
  ],

  heroTrustPoints: [
    "The right tutor is picked for the course and level, wherever in India they live",
    "Mariani lessons are online only; no one travels to a house in the town",
    "A free first lesson before you decide anything",
    "No tie to any school, exam board or railway body mentioned",
  ],
  heroStats: [
    { value: "PYP to DP", label: "All the IB stages" },
    { value: "Cambridge & Edexcel", label: "IGCSE with either board" },
    { value: "IST", label: "No time-zone gap" },
    { value: "Free trial", label: "Lesson one costs nothing" },
  ],

  intro: {
    heading: "Studying the IB or IGCSE from Mariani: how it actually works",
    paragraphs: [
      "Mariani is a railway town in Jorhat district, Upper Assam, roughly 17 kilometres from Jorhat itself and close to the Nagaland border. It grew around Mariani Junction, a major railhead on the line serving Tinsukia division, and has Mariani College for higher studies. The countryside around it is tea, paddy and small farms.",
      "Nobody in Mariani will expect a school here to run the IB, and as far as we could confirm none does. Schooling is under the Assam boards, SEBA and AHSEC, with CBSE schools in the Jorhat area. The IB schools we could verify are far away, in Kolkata. That makes this page a straight account: a Mariani student on the IB or IGCSE is usually working at a distance, boarding elsewhere or following a syllabus on their own track.",
      "In that situation, IB and IGCSE tutors in Mariani must work online. A tutor with recent experience of IB Physics HL or IGCSE Additional Mathematics can sit with a student through video, share a screen and mark papers in real time. Lessons run on IST, which is the same clock as Assam, so no adjustment is needed.",
      "Two plain statements. No tutor visits a house in Mariani; in-person home tuition is limited to Gurugram and parts of Delhi NCR. And IB Gram is independent of the IB, Cambridge, Pearson and any school, with tutors coaching but never writing Internal Assessments, Extended Essays, TOK essays or coursework.",
    ],
    bullets: [
      "IB PYP, MYP and DP tutoring in the main subject groups",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended",
      "Live one-to-one online home tuition on IST",
      "Free trial lesson, then a written plan",
      "No visits to homes in Mariani; those exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Almost all schooling around Mariani is on the Assam boards or CBSE, so an IB or IGCSE route means a change of school or a long move. The IB stages need different things from a tutor, set out below.",
  programmes: [
    {
      code: "PYP",
      ageRange: "Ages 3-12",
      name: "IB Primary Years Programme",
      description:
        "Learning runs through six themes rather than isolated textbooks, ending in the PYP Exhibition. There is no external examination, so help centres on reading, early number sense and independent questions.",
      countryNote:
        "No PYP school sits near Mariani, so the typical enquiry comes from a family relocating, often to Kolkata or beyond, whose child must settle in an English-language inquiry classroom.",
    },
    {
      code: "MYP",
      ageRange: "Ages 11-16",
      name: "IB Middle Years Programme",
      description:
        "Each subject is assessed against criteria A to D, and the programme culminates in the Personal Project. Students learn to explain why their work meets a standard.",
      countryNote:
        "A Mariani child on the MYP is likely boarding away from Assam, so sessions help with long-distance project planning and with science and humanities write-ups.",
    },
    {
      code: "DP",
      ageRange: "Class 11-12, ages 16-19",
      name: "IB Diploma Programme",
      description:
        "Six subjects, three at Higher Level, plus TOK, the Extended Essay and CAS, with written exams in May.",
      countryNote:
        "Students from Upper Assam who reach the Diploma generally come after SEBA or CBSE Class 10, and need a bridge from textbook-led study to criteria-led study in Maths, the sciences and English.",
    },
    {
      code: "CP",
      ageRange: "Class 11-12, ages 16-19",
      name: "IB Career-related Programme",
      description:
        "A compact route combining some Diploma courses with a career-related study and reflective project. Very few Indian schools offer it.",
      countryNote:
        "We know of no CP school within reach of Mariani. Where a family meets one elsewhere, we support the Diploma courses and the reflective project.",
    },
  ],

  subjectsIntro:
    "Subject, level and the Maths route all change what a tutor teaches. Because a Mariani student usually studies far from home, we begin by asking for the school's exact registration and the exam session.",
  subjects: [
    { levels: "HL / SL", name: "IB Maths Analysis & Approaches", description: "Calculus, algebra and proof-led reasoning; unfamiliar-problem practice is what builds HL confidence." },
    { levels: "HL / SL", name: "IB Maths Applications & Interpretation", description: "Data, statistics and technology; students must interpret results, not just compute them." },
    { levels: "HL / SL", name: "IB Physics", description: "Mechanics, waves and fields, with a practical investigation marked on design and reasoning." },
    { levels: "HL / SL", name: "IB Chemistry", description: "Structure, kinetics and organic chemistry; the data booklet should be a familiar friend." },
    { levels: "HL / SL", name: "IB Biology", description: "Ecology links naturally to Assam's river and forest landscapes; command terms decide how marks are earned." },
    { levels: "HL / SL", name: "IB Economics", description: "Diagrams, definitions and evaluation, with HL calculations in the policy paper." },
    { levels: "HL / SL", name: "IB Business Management", description: "Case study questions reward applying a concept to the firm described, such as a tea estate or a rail contractor." },
    { levels: "HL / SL", name: "IB English A Language & Literature", description: "Close reading, comparative essays and a spoken Individual Oral." },
    { levels: "HL / SL", name: "IB Geography", description: "Rivers, floods and resource use in the Brahmaputra valley make good fieldwork and case-study material." },
    { levels: "HL / SL", name: "IB Computer Science", description: "Algorithms and structured problem solving, with a working project." },
    { levels: "HL / SL", name: "IB Psychology", description: "Studies and approaches, written up as structured essays." },
    { levels: "SL / HL", name: "IB Environmental Systems & Societies", description: "Systems, sustainability and evidence-based evaluation." },
    { levels: "HL / SL", name: "IB Hindi B", description: "A common second language for Assam students; the focus is text types and speaking." },
    { levels: "DP Core", name: "Theory of Knowledge (TOK)", description: "How we know what we claim to know; tutors help students rehearse, never draft." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel codes differ, so we start by confirming board, subject code and tier. From there we work backwards from the exam series: May-June or October-November for Cambridge, January or May-June for Edexcel.",
  igcseSubjects: [
    { levels: "Core / Extended", name: "IGCSE Mathematics 0580", description: "Written working earns method marks, and the non-calculator paper rewards quick, accurate arithmetic." },
    { levels: "Grade 10", name: "IGCSE Additional Mathematics 0606", description: "Calculus and trigonometry early; a strong springboard to Maths AA HL." },
    { levels: "Foundation / Higher", name: "Edexcel IGCSE Mathematics A 4MA1", description: "Similar to Cambridge in content, but practise on Edexcel papers for the wording." },
    { levels: "Core / Extended", name: "IGCSE Physics 0625", description: "Circuits, motion and waves, plus the alternative-to-practical paper." },
    { levels: "Core / Extended", name: "IGCSE Chemistry 0620", description: "Moles, bonding and organic chemistry in a calculation-heavy syllabus." },
    { levels: "Core / Extended", name: "IGCSE Biology 0610", description: "Genetics and ecology with structured written answers." },
    { levels: "Grade 9-10", name: "IGCSE Economics 0455", description: "Diagrams and written evaluation." },
    { levels: "Grade 9-10", name: "IGCSE Computer Science 0478", description: "Pseudocode, logic and Python." },
    { levels: "Grade 9-10", name: "IGCSE English as a Second Language 0511", description: "Reading, writing, listening and speaking, relevant for students moving from Assamese- or Hindi-medium schooling." },
    { levels: "Grade 9-10", name: "IGCSE Geography 0460", description: "Case studies and skills papers, with floods and rivers as natural examples." },
  ],

  regionsTitle: "Mariani and the towns around it where our online tutors reach students",
  regionsIntro:
    "Mariani is a small railway town, so we list its neighbourhood alongside the towns families actually travel to. Lessons are online, so these places matter for school choices, journeys and routines, not for tutor travel.",
  regions: [
    { name: "Mariani town", note: "A railway and market town in Jorhat district with a college and a steady stream of commuters along the line." },
    { name: "Mariani Junction area", note: "Around the railhead, where railway staff families may relocate with postings, making online tuition more portable." },
    { name: "Mariani College area", note: "The student precinct, useful for older siblings and for families thinking about higher education." },
    { name: "Tea garden belt", note: "Estates around Mariani employ many families; supervisors and managers sometimes choose English-medium schooling." },
    { name: "Jorhat town", note: "About 17 kilometres away, the district centre with CBSE schools, colleges and the main coaching market." },
    { name: "Titabor", note: "A neighbouring town on the Jorhat side, with state-board and CBSE schools." },
    { name: "Teok", note: "A town in Jorhat district on the route towards Golaghat." },
    { name: "Golaghat", note: "The next district to the south-west, a link for some families." },
    { name: "Nagaland border side", note: "Families near Mokokchung and Mariani sometimes study across the state line." },
    { name: "Dibrugarh", note: "Downstream along the railway and home to Dibrugarh University and a medical college." },
  ],

  schoolDisclaimer:
    "The schools named are examples of where Mariani families might study or relocate. IB Gram is independent, and has no partnership with, endorsement from or authority over any school, the International Baccalaureate, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Mariani and Jorhat district",
      note: "Honestly, we could not confirm any IB or IGCSE school in Mariani or around Jorhat. Local schooling is under SEBA, AHSEC and CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Guwahati and the wider Northeast",
      note: "Guwahati is the nearest large city, a long road or train journey away. We have not confirmed its international schools, so families should check directly.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata (boarding or relocation)",
      note: "Many Assam families look to Kolkata for full IB schooling. That choice belongs to the family and is not an IB Gram service.",
      schools: ["The Heritage School, Madurdaha, Kolkata", "Calcutta International School, Anandapur, Kolkata"],
    },
  ],

  modesIntro:
    "The shape of tuition is the same for every Mariani family: a private video lesson on IST between one student and one tutor. The differences are frequency and proximity to exams. No tutor comes to a house in Mariani; in-person tuition exists only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Regular live one-to-one lessons",
      description:
        "One hour or more each week on video, with a whiteboard and papers on screen, scheduled around school, daylight and the railway routines of the house.",
      bullets: [
        "A tutor matched to the course, not the district",
        "IB DP, MYP and IGCSE all supported",
        "Papers solved together live",
        "One tutor kept for the term",
      ],
    },
    {
      title: "Weekly sessions with written updates",
      description:
        "A fixed lesson, a note after each session, and a review of progress with parents every few weeks.",
      bullets: [
        "A short note after each lesson",
        "Reviews with parents",
        "Good for MYP and early IGCSE",
        "Second weekly lesson before mocks",
      ],
    },
    {
      title: "Intensive revision blocks",
      description:
        "A short, concentrated run of lessons before mocks or exam series, with timed papers marked to official criteria.",
      bullets: [
        "Marked against IB or Cambridge schemes",
        "Quick feedback",
        "Planned around Bihu and Durga Puja",
        "Best booked a few weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Where do Mariani families find IB or IGCSE schooling?",
      paragraphs: [
        "Mariani's schooling follows the Assam boards, SEBA for Class 10 and AHSEC for Class 12, and CBSE schools in the Jorhat area serve families who want an English-medium national curriculum. Jorhat is a historic education town in Upper Assam, with an agricultural university and an engineering college, but we found no IB or IGCSE school there.",
        "The IB schools we could verify are in Kolkata: The Heritage School in Madurdaha is listed with IB, CISCE and Cambridge, and Calcutta International School in Anandapur with IB and Cambridge. Guwahati is nearer, but we have not confirmed its international options. These are choices for families prepared to board or relocate, and they should confirm current offerings with the schools.",
        "The families asking about IB tutoring from Mariani usually include railway and tea-industry employees on transferable careers, professionals with ties abroad and parents who want a child to have an internationally portable qualification. Some already have a child at a distant school who needs help in one subject.",
        "Exam standards are national and international, not local, so the student in Mariani sits the same papers as a student in Kolkata. What differs is access to teachers, and online matching closes most of that gap.",
      ],
      table: {
        caption: "Schooling options relevant to Mariani families",
        columns: ["Place", "Distance from Mariani", "What we could confirm"],
        rows: [
          ["Mariani and Jorhat", "Local to about 17 km", "SEBA, AHSEC and CBSE; no IB or IGCSE confirmed"],
          ["Guwahati", "A long journey", "Not confirmed; check directly"],
          ["Kolkata", "A long train or air journey", "Two schools listed with IB and Cambridge"],
        ],
      },
      bullets: [
        "No confirmed IB or IGCSE school near Mariani",
        "Kolkata schools are options for boarding or relocation",
        "Railway, tea and overseas-linked families show most interest",
        "The exam papers are identical wherever they are sat",
      ],
    },
    {
      heading: "How do SEBA, AHSEC and CBSE compare with IB and IGCSE?",
      paragraphs: [
        "SEBA and AHSEC examinations lean on textbook knowledge and defined answers. CBSE adds more structure in questions and some practical or project marks. IB and IGCSE assess the same ideas through reasoning, data interpretation and extended writing. The jump is more in how marks are won than in how much is taught.",
        "Language needs thought. Many students in Upper Assam study in Assamese or Hindi at school and use English as a second language. IB and IGCSE are examined in English, so vocabulary for argument, such as evaluate, justify and compare, becomes part of the preparation for Science and Humanities.",
        "Coursework is the other contrast. IB Internal Assessments are sustained independent pieces and the Extended Essay can reach 4,000 words. IGCSE adds coursework or practical assessment in selected subjects. A student used to a single end-of-year paper must learn to plan over weeks.",
        "Content-wise, IGCSE Core is comparable to a solid Class 9 or 10, with Extended going further. IB HL Maths and sciences exceed Class 12 board work in several places.",
      ],
      table: {
        caption: "Boards compared for Mariani students",
        columns: ["Feature", "SEBA / AHSEC", "CBSE", "IB / IGCSE"],
        rows: [
          ["Marks come from", "Textbook-based answers", "Structured, syllabus-bound answers", "Reasoning and application"],
          ["Internal assessment", "Limited", "Practicals and projects", "IB IA; IGCSE coursework or practicals"],
          ["Medium", "Assamese, Hindi or English", "English or Hindi", "English"],
          ["Usual joining point", "Class 1", "Class 1", "Grade 9 or Class 11"],
        ],
      },
      bullets: [
        "Reasoning replaces recall",
        "English for argument needs deliberate practice",
        "Coursework demands weeks of planning",
        "Choose the IGCSE tier with the Diploma in mind",
      ],
    },
    {
      heading: "What goes into the price of an IB or IGCSE tutor?",
      paragraphs: [
        "Four things: the programme and level, the subject, the length and number of lessons, and how current the tutor's experience of that syllabus is. Place of residence is not on the list, because no one travels.",
        "A Higher Level Diploma science costs more than IGCSE English or a PYP reading session, mainly because fewer tutors can teach it with confidence. Within a subject, an exam-season block costs more than a weekly check-in because it takes more tutor time.",
        "We confirm the rate in writing before the trial lesson and it does not change afterwards. A price list would mislead, since two students in the same grade can need very different support. There is no contract and a pause costs nothing.",
        "Ask what a lesson will cover and how you will hear about progress. Value lies in specifics: a tutor who has marked many Physics papers will lift a mark faster than general revision.",
      ],
      bullets: [
        "Programme, subject, level and lesson length",
        "No distance charge",
        "Rate in writing before the trial",
        "No lock-in",
      ],
    },
    {
      heading: "Online, local classes, private teacher or self-study: which suits Mariani?",
      paragraphs: [
        "Mariani and Jorhat have tuition classes for SEBA, AHSEC and CBSE and teachers who give private lessons. Larger centres in Jorhat and Guwahati run coaching for JEE and NEET. None is built around IB or Cambridge syllabuses.",
        "A local teacher can provide discipline and spoken English practice. The IB's command terms, mark schemes and assessment rubrics are specific, however, and without direct experience a teacher cannot easily steer a student to what examiners reward.",
        "Self-study can work for IGCSE Mathematics. It breaks down on essays and Internal Assessments, which are improved most by someone reading drafts critically and asking awkward questions.",
        "An online tutor brings the missing syllabus knowledge and the one-to-one pace. In Upper Assam, where heavy rain can interrupt power and broadband, a backup such as a mobile hotspot makes lessons more reliable.",
      ],
      table: {
        caption: "Support choices for IB and IGCSE students from Mariani",
        columns: ["Choice", "IB / IGCSE knowledge", "Attention", "Drawback"],
        rows: [
          ["Tuition class in Mariani or Jorhat", "None", "Group", "Built for state boards and CBSE"],
          ["JEE or NEET coaching in Jorhat or Guwahati", "None", "Group", "Not about the school syllabus"],
          ["Private teacher", "Rare", "One to one", "Few have taught these courses"],
          ["Self-study", "Limited", "None", "Essays and assessments suffer"],
          ["Matched online tutor", "Exact course", "One to one", "Needs connectivity"],
        ],
      },
      bullets: [
        "Local classes serve state boards and entrance exams",
        "Self-study falls down on written work",
        "Online tutoring fills the syllabus gap",
        "Keep a backup for internet and power in the rains",
      ],
    },
    {
      heading: "Monsoon, Bihu and exams: the Mariani study calendar",
      paragraphs: [
        "Upper Assam has a long, heavy monsoon from roughly May to September, with a wet spring and humid summers. Floods on the Brahmaputra plain can disrupt travel and sometimes power. Winters are mild and dry, with sunsets as early as 4:30 pm, which affects evening study.",
        "Exam sessions follow national schedules: IB Diploma in May with results in July, Cambridge IGCSE in May-June and October-November, and Edexcel IGCSE in January and May-June. The SEBA and AHSEC calendar, with Class 10 and 12 exams in February and March, is different and should be considered for students shifting between systems.",
        "Festivals shape availability. Magh Bihu in mid-January, Bohag Bihu in mid-April, Kati Bihu in October and Durga Puja are the main breaks. Bohag Bihu falls close to the IB and IGCSE study-leave period, so a family should plan the revision schedule early.",
        "For Diploma students the pattern is Class 11 foundations, Class 12 assessments and mocks, then May papers. For IGCSE, the Core or Extended choice in Grade 9 sets the course for the final two months of timed practice.",
      ],
      table: {
        caption: "A year in Mariani for an IB or IGCSE student",
        columns: ["Months", "Weather and events", "Effect on lessons"],
        rows: [
          ["January", "Magh Bihu; Edexcel January series", "Plan for a few days off; mocks"],
          ["February-March", "SEBA and AHSEC exams", "Keep separate for those switching systems"],
          ["April", "Bohag Bihu; pre-monsoon rain", "Block revision time carefully"],
          ["May-June", "IB and IGCSE exams; heavy rain begins", "Papers, power and internet backup"],
          ["July-September", "Monsoon and floods; IB results", "Flexible timing"],
          ["October-November", "Kati Bihu, Durga Puja, Cambridge November series", "Retakes; plan for holidays"],
        ],
      },
      bullets: [
        "Long monsoon makes backup connectivity worthwhile",
        "Early winter sunsets favour afternoon lessons",
        "IB in May, Cambridge May-June and October-November, Edexcel January and May-June",
        "Bihu and Puja breaks are built into the plan",
      ],
    },
    {
      heading: "University routes from Mariani after IB or IGCSE",
      paragraphs: [
        "Within reach of Mariani are institutions in Jorhat, including the Assam Agricultural University and Jorhat Engineering College, and Dibrugarh University and Gauhati University further along. IIT Guwahati is the region's best-known technical institute.",
        "For most Indian admissions an IB or IGCSE-based qualification needs an equivalence certificate from the Association of Indian Universities. For engineering via JEE and medicine via NEET, subject and level choices matter, so a student who might want either should keep Physics, Chemistry and Maths or Biology in the plan from the start.",
        "CUET-UG is open to IB candidates on current rules, which should be checked each year. For study abroad, predicted grades are used in applications. UK offers are expressed in IB points, US universities weigh essays and activities, and other countries have their own conversion tables.",
        "Tutors help with academic work, improving predictions and technique. They do not provide admissions consulting.",
      ],
      bullets: [
        "Jorhat and Dibrugarh institutions are nearby options",
        "Equivalence certificates matter for Indian admissions",
        "JEE and NEET subject rules need early attention",
        "Predicted grades guide overseas offers",
      ],
    },
    {
      heading: "IB Maths and sciences for students far from an IB classroom",
      paragraphs: [
        "Analysis and Approaches suits students who enjoy algebra and may want engineering or pure science. Applications and Interpretation suits those drawn to data, economics or biology. The decision should follow the intended degree, not what seems easier.",
        "Physics and Chemistry at HL reward steady weekly practice more than late cramming. The investigation should be small and measurable. In Biology, careful reading of command terms and data tables decides marks.",
        "Students far from their teachers lose the casual chances to ask questions, so a tutor acts as a reliable second explanation. Typical requests include rebuilding one topic, checking an Internal Assessment plan or practising timed papers.",
        "Because the school may be a long way from Mariani, tutors also help students keep pace during breaks at home, when a gap of two weeks at a railway station or in the monsoon can feel much longer.",
      ],
      bullets: [
        "Pick the Maths route by intended degree",
        "Weekly practice beats cramming",
        "Keep the investigation measurable",
        "Use home breaks to keep momentum",
      ],
    },
    {
      heading: "IGCSE: choosing tier, board and subjects from Assam",
      paragraphs: [
        "Core caps grades lower than Extended, and the decision should reflect the student's future route. For those considering the Diploma or study abroad, Extended in Maths and sciences is usually wiser, with support through the harder content.",
        "Cambridge and Edexcel cover similar ground but ask questions differently, so use papers from the student's own board. Tutors who have taught both can show the differences.",
        "Additional Mathematics is a helpful bridge to HL Maths but is demanding, and needs steady practice. English language results often decide the overall profile for students whose first language is Assamese or Hindi.",
        "Subjects are limited by the school, so a family moving should check the subject list early.",
      ],
      bullets: [
        "Extended tier keeps options open",
        "Use the right board's papers",
        "Additional Mathematics needs steady practice",
        "Plan English early",
      ],
    },
    {
      heading: "How does matching work for a Mariani family?",
      paragraphs: [
        "A short written brief starts things: the programme or board, the subject and level, today's grade, the exam series and whatever is worrying the family most. That brief shapes the shortlist far more than a profile photo can.",
        "Since Mariani has no IB or IGCSE classroom to compare with, fit to the syllabus is checked first. Every tutor has been reviewed for qualifications and for recent teaching of the specific course before they are put forward.",
        "The trial lesson then becomes the family's own test of clarity, patience and rapport. If it goes well, a month-one plan follows in writing.",
        "Should the pairing feel wrong at any point, we arrange someone else. After each session there is a short note, and every few weeks parents get a proper update.",
      ],
      bullets: [
        "A written brief drives the shortlist",
        "Syllabus fit is the first test",
        "Trial lesson, then a written plan",
        "A new tutor whenever the fit slips",
      ],
    },
  ],

  tutorsIntro:
    "Our tutors cover the full IB range and both IGCSE boards, and each is chosen for a Mariani student by syllabus, level and exam series. The classroom is always a screen; a home in Mariani is never visited.",

  process: [
    { title: "Write to us", description: "Say which board and subject, the level, where the grade stands now and which hours are free at home." },
    { title: "Read the shortlist", description: "Each suggested tutor comes with a short reason, weighted heavily towards the exact course." },
    { title: "Sit a trial lesson", description: "One real topic taught live, without fee or obligation." },
    { title: "Agree the outline", description: "A month-one plan on paper, with a note on how you will hear about progress." },
    { title: "Keep going, check in", description: "Lessons continue weekly, with a review every few weeks and a swift change of tutor if needed." },
  ],

  whyPoints: [
    { title: "The course picks the tutor", description: "A named IB subject and level, or an IGCSE board with its code and tier, drives every match." },
    { title: "Not boxed in by geography", description: "Upper Assam has no IB classroom nearby, so the search spans the country." },
    { title: "See before you decide", description: "A complimentary first lesson replaces guesswork." },
    { title: "A fixed line on integrity", description: "Explaining and coaching are in scope; writing assessed work is not." },
    { title: "News on progress", description: "Short written notes and periodic reviews mean you are not left wondering." },
    { title: "Free to leave or switch", description: "No contract, no school ties, and a fast change if the pairing is wrong." },
  ],

  faqs: [
    { question: "How can I find an IB tutor in Mariani?", answer: "Share the programme, subject, level and exam session with us, and we will propose a tutor who has recently taught that very course. With no IB school in Mariani to draw on, the pool is national and every lesson happens on video. You try one lesson without paying, and a poor fit is simply replaced." },
    { question: "Do you provide IGCSE home tuition in Mariani?", answer: "Yes, as online home tuition, where the child studies from home on a laptop and nobody turns up at the door. Cambridge and Edexcel are both handled. Each student is placed by board, subject code and tier, and practises on that board's own papers and mark schemes." },
    { question: "Will a tutor come to my house in Mariani?", answer: "No tutor comes to Mariani. Visits to a family home are arranged only in Gurugram and some parts of Delhi NCR. A Mariani lesson is a live one-to-one video call with a shared whiteboard, run on the same Indian Standard Time as the rest of Assam." },
    { question: "What does IB or IGCSE tuition cost in Mariani?", answer: "Price follows the programme, level, subject, session length and how experienced the tutor is with that exact syllabus, and you receive the figure in writing before any trial. No list of rates is published. Nothing is added for travel, and no contract ties you in." },
    { question: "Is there an IB school near Mariani or Jorhat?", answer: "None that we could confirm. Local schools run SEBA, AHSEC or CBSE courses. The IB schools we did verify are in Kolkata, namely The Heritage School at Madurdaha and Calcutta International School at Anandapur. Ask any school directly what it currently teaches." },
    { question: "Is the first lesson really free?", answer: "It is. Your child works on a real topic from their own syllabus with the proposed tutor, at no charge and with no strings attached. Afterwards you get a brief plan for month one, and you decide whether to carry on, tweak the arrangement or meet someone else." },
    { question: "Can a tutor help with my Internal Assessment?", answer: "Within limits, yes. A tutor can talk through topic ideas, unpack what each criterion asks for, advise on gathering data and react honestly to a draft. Writing or rewriting any of the submitted piece is off limits under IB academic integrity, and that covers the Extended Essay, TOK essay and IGCSE coursework as well." },
    { question: "Which IB subjects can you teach to Mariani students?", answer: "Maths in both flavours, Physics, Chemistry, Biology, Economics, Business Management, English A, Geography, Computer Science, Psychology, ESS and Hindi B are all covered, as are TOK and Extended Essay guidance. Requests from this part of Assam lean towards Maths and the sciences." },
    { question: "Do you teach MYP and PYP students from Assam?", answer: "We do. A typical MYP request concerns criterion-based writing, lab reports and the Personal Project journal, while PYP help is a short, frequent session on reading, early number work and getting ready for the Exhibition." },
    { question: "Is online tuition effective for IB and IGCSE?", answer: "For these syllabuses it holds up well. What a student pays for is a tutor's command of the course and worked examples, and both come across clearly on a shared screen. Where no specialist lives nearby, going online is the realistic option, not a fallback." },
    { question: "How are tutors checked before they are introduced?", answer: "Each one is reviewed for qualifications, for recent teaching of the specific subject and level, and for how they approach Internal Assessment guidance. After that, the free lesson is your own test of whether they explain well to your child." },
    { question: "When is the right time to begin?", answer: "As close to day one of the course as possible: Class 11 for the Diploma, Grade 9 for IGCSE. A later start is far from wasted, provided the hours go on past papers and the topics that are weakest." },
    { question: "How does the monsoon affect online lessons in Mariani?", answer: "Heavy rain can knock out power and broadband across Upper Assam. Keeping a mobile hotspot and a charged laptop ready helps, and a lesson lost to an outage can be shifted to another day without any penalty." },
    { question: "Can lessons take place on weekends or late afternoons?", answer: "They can. Weekday evenings and weekend mornings are the usual choices, and since winter dusk arrives early, many Mariani families prefer afternoon slots from November to February. Adding a second session ahead of mocks takes one message." },
    { question: "What if we are not happy with the tutor?", answer: "Tell us, and another tutor is found quickly. We review progress with you every few weeks and act the moment the match looks doubtful. No contract needs breaking." },
    { question: "Is IB Gram linked to any school or to Indian Railways?", answer: "Not at all. It is an independent tutoring service without ties to a school, the International Baccalaureate, Cambridge, Pearson or Indian Railways, even though the railway shapes Mariani life." },
    { question: "Can students in Titabor or Teok use the same service?", answer: "Absolutely. Online lessons treat a student in any part of Jorhat district exactly as they treat one in Mariani. Place matters only when we agree on lesson times." },
    { question: "My child is moving from SEBA or CBSE to IB. How can a tutor help?", answer: "Usually the hard part is not content but the shape of the questions and writing in English that argues a point. Beginning before the move leaves time to learn command terms, rehearse longer answers and get used to marking by criteria." },
  ],

  internalLinks: [
    { label: "Home", href: "/", description: "How IB Gram works." },
    { label: "IB tutoring across India", href: "/india/", description: "Online IB and IGCSE tutoring across the country." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The only place where tutors visit homes in person." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse IB tutoring by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject choices." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL, SL, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA versus AI." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and book a free trial." },
    { label: "IB and IGCSE tutoring in Jorhat", href: "/jorhat/", description: "The district centre, 17 km away." },
    { label: "IB and IGCSE tutoring in Dibrugarh", href: "/dibrugarh/", description: "Another Upper Assam city." },
    { label: "IB and IGCSE tutoring in Guwahati", href: "/guwahati/", description: "Assam's largest city." },
  ],

  closingHeading: "Arrange a free trial lesson for your Mariani student",
  closingBody:
    "Write with the board, subject, level and current grade, plus the hours when the house is quiet and the connection holds. A tutor for that course comes back with a trial slot: live, one to one, free, and with no promise asked in return. Reach us at support@ibgram.com or +91 7439 368 115 on WhatsApp.",
};
