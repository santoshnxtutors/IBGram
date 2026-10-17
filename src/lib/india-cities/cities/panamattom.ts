import type { CitySeoPage } from "../types";

/**
 * /panamattom/ - IB and IGCSE tutoring page for Panamattom, Kottayam district, Kerala. No IB or
 * Cambridge school is confirmed locally, so schools are left unnamed apart from the Kochi cluster
 * that other Kerala pages also use. Online-only delivery: tutors do not visit homes in Panamattom,
 * since in-person home tuition exists only in Gurugram and parts of Delhi NCR. Written around
 * rubber-smallholder and health-worker-migration households and the church and Onam calendar, to
 * stay distinct from /kottayam/. Coordinates are approximate for the district.
 */
export const panamattom: CitySeoPage = {
  slug: "panamattom",
  countryName: "Panamattom",
  countryNameLong: "Panamattom, Kottayam district, Kerala",
  demonym: "Panamattom",
  state: "Kerala",
  stateCode: "IN-KL",
  flagCode: "in",
  countryCode: "IN",
  region: "Kerala, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson times take account of Lent, Easter and Christmas church schedules, Onam week, the long monsoon months, and the shift patterns of parents who work in hospitals or overseas",
  lastUpdated: "2026-09-21",
  geo: { latitude: 9.6, longitude: 76.55 },
  alternateNames: ["Panamattam", "Panamattom Kottayam"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Panamattom | Private Tuition at Home",
  metaDescription: "Private online IB and IGCSE tuition for Panamattom, Kottayam: one-to-one lessons around church-season and monsoon weeks, nurse-shift timings, free trial.",
  h1: "IB and IGCSE Tutors and Private Tuition from Home in Panamattom",
  heroEyebrow: "IB & IGCSE TUTORING FOR PANAMATTOM FAMILIES",
  heroSubtitle:
    "Want private tuition from home in Panamattom for an international syllabus? Our IB and IGCSE tutors teach live, one-to-one, over video, so your child learns at the family desk in Kottayam district while the tutor works from elsewhere in India. Tutors do not visit homes here.",
  primaryKeyword: "IB and IGCSE tutors in Panamattom",
  secondaryKeywords: [
    "IB tutor Panamattom",
    "IGCSE tutor Panamattom",
    "IB home tuition Panamattom",
    "IGCSE home tuition Panamattom",
    "IB private tuition Panamattom",
    "IB Maths tutor Panamattom",
    "IGCSE Maths tutor Panamattom",
    "IB Physics tutor Panamattom",
    "IB Chemistry tutor Panamattom",
    "IB Biology tutor Panamattom",
    "IB DP tutor Panamattom",
    "IB MYP tutor Panamattom",
    "IB PYP tutor Panamattom",
    "IGCSE online tuition Panamattom",
    "IB tutor Kottayam district",
    "IB tutor Pala",
    "IB tutor Changanassery",
    "IB tutor Ettumanoor",
    "online IGCSE tuition Kottayam",
    "Cambridge IGCSE tutor Kerala",
  ],
  imageAltText: "A Panamattom student at home in Kottayam district during a live one-to-one IGCSE lesson on a laptop",

  heroTrustPoints: [
    "Free trial lesson with no payment details asked",
    "Written note after each class, easy to share with a parent working abroad",
    "Tutor swap if the first match does not click",
    "Rates in writing before you book",
    "Coaching only: no IAs, Extended Essays or TOK essays written by tutors",
  ],
  heroStats: [
    { value: "IST", label: "Local time, no conversion" },
    { value: "PYP to DP", label: "Programmes supported" },
    { value: "Free trial", label: "Before you pay" },
    { value: "May & Nov", label: "Exam windows covered" },
  ],

  intro: {
    heading: "International-syllabus tuition for a Kottayam-district household",
    paragraphs: [
      "Panamattom sits in Kottayam district, a part of Kerala known for rubber smallholdings, high literacy, a strong church-going tradition and a long habit of sending daughters and sons into nursing, medicine and overseas work. Families here comparing IB and IGCSE tutors in Panamattom are rarely chasing status. They are usually planning for a child who may study, train or work in the UK, Ireland, Canada, Australia or the Gulf, and want a school-leaving record that those systems read easily.",
      "The honest position on delivery is simple. IB Gram runs in-person home tuition only in Gurugram and parts of Delhi NCR, so no tutor visits a house in Panamattom. What we offer instead is online home tuition: a live private lesson at your own desk on a laptop, with a specialist matched to your child's exact syllabus. In a district where a subject specialist may be an hour away, this is the more reliable choice.",
      "Households here often run on shift patterns. A mother on night duty at a hospital, a father abroad, a grandparent at home in the evening: lesson times have to bend. Our tutors keep a flexible weekly slot and write a short note after each class, so a parent who cannot attend can still follow what happened.",
      "Tutors here explain, question and give feedback. They do not write internal assessments, Extended Essays, TOK essays or any coursework. IB Gram is independent and not affiliated with the IB, Cambridge, Pearson or any school.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description: "Concept-driven primary learning in which children investigate big ideas. Tutoring is playful and brief, strengthening reading, number sense and the confidence to explain a thought aloud.",
      countryNote: "Panamattom children on the PYP are usually returnees whose parents spent time abroad. Tutors help them keep pace with inquiry units while settling into a Kerala routine.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description: "Eight subject groups marked against criteria, plus a personal project. Tutoring builds the habit of showing reasoning and structuring a written response.",
      countryNote: "A child moving from a Malayalam-medium or State syllabus school into MYP usually needs English support first. Sessions begin with writing and move into Mathematics and Science.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description: "Six subjects, Theory of Knowledge, an Extended Essay and CAS. Tutors teach content and paper technique, and the essay and internal assessments remain the student's own.",
      countryNote: "Most Diploma students linked to Panamattom study in Kochi, elsewhere in India or abroad, and take online lessons during visits home or on school evenings.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description: "A blend of DP courses and career-related study, with a reflective project. Tutoring supports the academic courses and the writing around them.",
      countryNote: "Less common in the district, but relevant to students aiming at health, hospitality or business pathways who still want university options open.",
    },
  ],
  programmesIntro: "The support a child needs depends on their stage. A Class 7 student learning to write a structured paragraph needs a different plan from a Class 12 student working through Higher Level Biology past papers.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Algebra, functions, calculus and proof, suited to students leaning towards engineering, economics or pure sciences." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Data, modelling and statistics with technology, a common fit for nursing, biology and business applicants." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology, genetics, ecology and human physiology, popular among students targeting nursing, medicine and allied health courses." },
    { name: "Chemistry", levels: "SL / HL", description: "Quantitative chemistry, energetics, equilibrium and organic reactions, with steady problem practice." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, waves, fields and modern physics, with unit discipline and the data-analysis questions that examiners prize." },
    { name: "Economics", levels: "SL / HL", description: "Markets, growth and trade, illustrated with examples from rubber prices, remittances and tourism." },
    { name: "Business Management", levels: "SL / HL", description: "Finance, marketing, operations and human resources, fitting students from family-business backgrounds." },
    { name: "Psychology", levels: "SL / HL", description: "Biological, cognitive and sociocultural approaches, with the study-based extended-response format." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Analysis of texts, comparative writing and the oral, built from the student's own reading." },
    { name: "English B", levels: "SL / HL", description: "For students who learned English as an additional language, covering reading, listening, speaking and writing." },
    { name: "Hindi B", levels: "SL / HL", description: "Language acquisition for students who studied Hindi as a third language in Kerala." },
    { name: "Malayalam A or B (school-supported)", levels: "SL / HL", description: "Where a school offers it, we discuss how tutoring can support reading and writing practice, subject to tutor availability." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "An interdisciplinary option that links neatly to local concerns such as flooding, backwaters and rubber-plantation land use." },
  ],
  subjectsIntro: "Pick subjects from what the school offers and what the intended course demands. Unusual combinations are fine: describe them at the trial lesson and we match around them.",
  igcseSubjectsIntro: "IGCSE availability depends on the board and the examination centre. These are the subjects Kerala families ask us about most.",
  igcseSubjects: [
    { name: "Mathematics (Core / Extended)", levels: "Core, Extended", description: "Algebra, geometry, trigonometry and statistics, with a diagnostic to settle the tier." },
    { name: "Biology", levels: "Core, Extended", description: "Organisms, transport, reproduction and ecosystems, written the compact way mark schemes expect." },
    { name: "Chemistry", levels: "Core, Extended", description: "Atoms, bonding, reactions and organic basics, with confident mole calculations." },
    { name: "Physics", levels: "Core, Extended", description: "Motion, energy, electricity and waves, plus the written alternative to the practical." },
    { name: "English as a Second Language", levels: "Core, Extended", description: "Reading, writing, listening and speaking, with oral practice built into every few sessions." },
    { name: "English First Language", levels: "Extended", description: "Directed writing, summary and composition, for students whose English is already strong." },
    { name: "Malayalam / Hindi (Second Language)", levels: "Core, Extended", description: "Where the examination centre lists them, structured reading and writing support." },
    { name: "Computer Science", levels: "Extended", description: "Algorithms, data representation and pseudocode, practised on past papers." },
    { name: "Accounting", levels: "Extended", description: "Double-entry, financial statements and ratio analysis, relevant to trading and business families." },
    { name: "Business Studies", levels: "Extended", description: "Business structures, marketing and finance, with case-study answering practised under time." },
  ],

  regionsTitle: "Panamattom and Kottayam-district areas students connect to",
  tutorsIntro: "Each tutor below teaches Panamattom students online from elsewhere in India. Profiles list subjects, levels and experience, and every match begins with a free trial lesson before any payment.",
  regionsIntro: "All tuition is online. These places are listed to help you plan school travel, timing and the choice of nearby cities, not because a tutor will travel to any of them.",
  regions: [
    { name: "Panamattom village area", note: "A quieter residential and plantation-edge setting. A stable broadband connection or a dependable mobile signal matters more than the exact address, so check before the trial lesson." },
    { name: "Kottayam town", note: "The district headquarters, home to Mahatma Gandhi University and a long-established school and college scene. The main reference point for families in the district." },
    { name: "Ettumanoor", note: "A busy temple town on the main central Kerala corridor, with easy road and rail links to Kottayam and Kochi." },
    { name: "Changanassery", note: "A town to the south with several colleges and a strong educational tradition, often compared by families choosing senior-secondary options." },
    { name: "Pala", note: "A well-known education town in the district. Families here often weigh local coaching against online options for competitive subjects." },
    { name: "Kumarakom", note: "A backwater tourism area on Vembanad Lake. Hospitality families here often value subjects such as Business Management and English." },
    { name: "Pampady and Puthuppally", note: "Residential areas east of Kottayam town where students commonly commute to school by bus; evening slots work best." },
    { name: "Kanjirappally", note: "A hill-side town to the east of the district with rubber and spice trade, where school travel can be slow in the rains." },
    { name: "Vaikom", note: "A temple town on the coast side of the district; families here often have links to the Gulf and tourism." },
    { name: "Thalayolaparambu and Kaduthuruthy", note: "Smaller towns north-west of Kottayam on the Kochi side, closer to Ernakulam district schools." },
  ],

  schoolClusters: [
    {
      city: "Panamattom and nearby villages",
      note: "We could not confirm any school in Panamattom running the IB or Cambridge IGCSE. Local schooling is largely Kerala State and CBSE, so international-curriculum learners are private candidates, returnees, or students enrolled elsewhere.",
      schools: [],
    },
    {
      city: "Kottayam town",
      note: "The district's main urban area has a deep school culture, but we could not confirm IB or IGCSE at a specific school for this page. Check any listing directly with the school.",
      schools: [],
    },
    {
      city: "Nearby: Kochi",
      note: "Roughly an hour and a half by road, Kochi has the closest confirmed concentration of IB and Cambridge campuses and is where many Kottayam-district families look when a child needs a full international programme.",
      schools: ["The Choice School, Ambalamugal", "TIPS Kochi"],
    },
    {
      city: "Overseas schools",
      note: "Families with relatives in the UK, Ireland, Canada or the Gulf often have a child who studied the IB or IGCSE abroad. We do not name those schools; the syllabus is the same wherever it is taught.",
      schools: [],
    },
  ],
  schoolDisclaimer: "IB Gram is an independent tutoring service with no affiliation to the IB, Cambridge, Pearson or any school. A school mentioned here is not a recommendation; verify curriculum and admissions directly.",

  modesIntro: "Panamattom students learn online. Here are three common ways families use that.",
  modes: [
    {
      title: "Weekly one-to-one lessons",
      description: "A fixed live slot with a single tutor, a shared whiteboard and a short written note after each class.",
      bullets: [
        "Evening, weekend and early-morning options in IST",
        "No tutor visits Panamattom; home visits run only in Gurugram and parts of Delhi NCR",
        "Flexible rescheduling for rain and power cuts",
      ],
    },
    {
      title: "Exam-season blocks",
      description: "A concentrated run of paper practice in the weeks before May or November sessions, ideal for private candidates.",
      bullets: [
        "Topic-by-topic past papers",
        "Mark-scheme training",
        "Pause without penalty around festivals",
      ],
    },
    {
      title: "Support for families abroad",
      description: "A format for homes where a parent works overseas or in shifts: notes are written to be forwarded and discussed on a call.",
      bullets: [
        "Plain-English summaries",
        "Slots shifted around hospital and Gulf time zones",
        "Rates agreed in writing",
      ],
    },
  ],

  sections: [
    {
      heading: "Who looks for IB and IGCSE support around Panamattom?",
      paragraphs: [
        "Kottayam district has an unusually international outlook for its size, and that shapes who searches for IB and IGCSE tutors in Panamattom. Many households have a relative nursing in the UK or Ireland, a cousin in Canada, or a parent who spent years in the Gulf. The family has seen first-hand how an international qualification can ease a move, and it plans accordingly.",
        "A second group is made up of returnees. A child who attended an IB or IGCSE school abroad and came home to Kerala is dropped into a classroom that does things differently, and tutoring keeps the old syllabus alive while the family decides whether to stay with it. This is a practical need, not a luxury.",
        "A third group is students from local State or CBSE schools who are aiming at health-care courses, and who add an IGCSE science or Mathematics to strengthen their application. The final, smaller group is families in rubber, spice, tourism or trade who want a flexible qualification that does not close doors at sixteen.",
        "Each family has a different reason for the same search. A short first conversation with us clarifies the board, the subjects and the timeline, so that the tutor match is built around the child, not around a standard package.",
      ],
      bullets: [
        "Families with relatives in nursing or health work abroad",
        "Returnees from IB or IGCSE schools overseas",
        "State or CBSE students adding an IGCSE science",
        "Trade and plantation families wanting subject flexibility",
      ],
    },
    {
      heading: "Kerala State, CBSE, ICSE, IB or IGCSE: what does a Panamattom family need to weigh?",
      paragraphs: [
        "The Kerala State syllabus and Higher Secondary stream remain the most common choice in the district, closely linked to KEAM and State quotas. CBSE schools are widespread and valued for national exams. The IB and IGCSE appear far less often, and a family choosing them is almost always making a decision about mobility, not convenience.",
        "The assessments feel different. State and CBSE reward careful recall from set textbooks. The IB asks for argument and application across six subjects, with a reflective essay and service hours. IGCSE tiers each subject into Core and Extended, and each paper has its own style. A student moving between systems usually finds extended writing the hardest part.",
        "Language needs thought. Malayalam is part of many State school days, while the IB and IGCSE are assessed mainly in English, so children moving across must strengthen written English. At the same time, parents who want Malayalam kept alive should ask the school or centre how it is accommodated.",
        "No board is universally better. What matters is the child, the target course, and whether the family expects to remain in Kerala. The table below sets out the main differences.",
      ],
      table: {
        caption: "Boards compared for a Panamattom student",
        columns: ["Board", "How it is assessed", "Entrance route in India", "Malayalam", "Moving abroad"],
        rows: [
          ["Kerala State (SCERT)", "Written textbook papers, State Higher Secondary", "KEAM and State quotas", "Usually compulsory", "Needs extra evaluation abroad"],
          ["CBSE", "NCERT-based papers in Class 10 and 12", "JEE Main, NEET-UG, CUET-UG", "Optional language", "Widely known"],
          ["ICSE / ISC", "Broader written syllabus with strong English", "Same national exams as CBSE", "Third-language option", "Accepted by many universities"],
          ["IB Diploma", "Six subjects, essays, internal assessments, final exams", "AIU equivalence, CUET-UG", "Language B or A, school-dependent", "Strongly recognised"],
          ["Cambridge / Edexcel IGCSE", "Exam-led, tiered by subject", "Then A Level or IB for Indian admissions", "Only where the centre lists it", "Familiar to UK and Gulf schools"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Panamattom?",
      paragraphs: [
        "We do not publish a price list. Rates vary with the tutor, the subject, the level and the number of weekly lessons, and a single figure would mislead many families. You receive the rate in writing before booking, and the first trial lesson is free and carries no obligation.",
        "Level is the biggest driver. A Higher Level Biology or Chemistry specialist is a different resource from a tutor helping with MYP English writing. Frequency comes next: one lesson a week suits maintenance, while an exam run-up often calls for three. Scarcity also counts, as a rare language or an unusual subject pairing takes longer to match.",
        "The costs you avoid are real. There is no travel to Kottayam or Kochi for classes, no hostel or lodging, and no time lost on the road. Compared with a coaching centre where a batch is tuned to the average student, a one-to-one lesson spends every minute on what your child actually needs.",
        "For budgeting, ask for a seasonal plan. Many families choose a steady weekly lesson, then a heavier block before May or November, and a pause during travel or festival weeks. A written plan with an end date is easier to manage than an open-ended arrangement.",
      ],
    },
    {
      heading: "Online tuition, Kottayam coaching centres, local tutors or self-study?",
      paragraphs: [
        "Kottayam and Pala have long tuition traditions, and for State and CBSE entrance work they remain useful. For an international syllabus, though, such centres usually teach neither the IB subject guides nor the IGCSE specifications, so a student may spend months on the wrong material.",
        "Online one-to-one tuition puts the right specialist at your child's desk. The cost is that it needs a quiet room, a steady connection and a child who can concentrate through forty-five to sixty minutes. Most students aged twelve and above adapt within two lessons.",
        "A local retired teacher or senior student can be a gentle support for younger children, and many families rely on that. The limitation is syllabus knowledge: IB command terms, criterion marking and IGCSE tiers need familiarity that a general teacher may lack.",
        "Self-study with past papers suits a disciplined senior student, but without feedback errors repeat unnoticed. The table below sets out the trade-offs.",
      ],
      table: {
        caption: "Study routes compared for Panamattom households",
        columns: ["Route", "Format", "Strength", "Limitation", "Best matched to"],
        rows: [
          ["Online one-to-one with IB Gram", "Live video at home", "Syllabus-matched specialist, flexible timing", "Needs connection and a quiet room", "IB and IGCSE students of any level"],
          ["Kottayam or Pala coaching centre", "In-person batch classes", "Strong for State, CBSE and entrance exams", "Rarely IB or IGCSE; fixed pace", "State and CBSE students"],
          ["Local tutor or retired teacher", "Informal, nearby", "Trust and convenience", "May not know IB or IGCSE papers", "Younger children"],
          ["Self-study with past papers", "Independent", "Low cost, full control", "No marking or feedback", "Very disciplined seniors"],
        ],
      },
    },
    {
      heading: "How do church seasons, Onam and the monsoon shape the school year?",
      paragraphs: [
        "A Panamattom student studies inside a calendar of strong community rhythms. Lent and Easter are observed widely, Christmas brings school holidays and family gatherings, and Onam week empties classrooms across the State. These are lovely parts of life and not obstacles, but they should be written into the study plan from the start.",
        "The southwest monsoon from June to September, followed by the northeast rains, brings power cuts, slow roads and weak signals. The 2018 floods left many Kottayam-district families wary of heavy rain, and we plan with that in mind: a charged backup device, a hotspot, and a lesson that can be moved at short notice without penalty.",
        "Kerala schools run from June, with a strong exam cycle in February and March. International schools follow their own terms, so a student attending two systems needs a single calendar that shows every deadline. We ask for it at the trial lesson and build the lesson plan around it.",
        "IB exams sit in May and November, while Cambridge and Edexcel IGCSE sessions run in May and June and October and November. The table sets out a typical year.",
      ],
      table: {
        caption: "A typical year for a Panamattom IB or IGCSE student",
        columns: ["Months", "Local pattern", "Academic focus", "How lessons adapt"],
        rows: [
          ["June to August", "School reopens; heavy monsoon", "New content, first assessment planning", "Backup connection; shorter evening lessons"],
          ["September to October", "Onam holidays; pre-exam period", "Syllabus completion for November", "Light week around Onam, then intensive"],
          ["November to December", "Exam window; Christmas", "Final papers, then rest", "Lessons pause around Christmas week"],
          ["January to March", "Lent begins; State exam season", "Mocks and revision for May", "Evenings only; avoid exam-day clashes"],
          ["April to May", "Easter and summer heat", "Timed papers and technique", "Early morning or late evening slots"],
        ],
      },
    },
    {
      heading: "Which university pathways open up from Panamattom?",
      paragraphs: [
        "A student who finishes the IB Diploma, or IGCSE followed by A Levels or the IB, has several routes. For Indian admissions, the Association of Indian Universities issues an equivalence for the IB Diploma that most universities require. CUET-UG is open to IB students who meet each university's eligibility, and many central and State universities admit through it.",
        "For nursing, medicine and allied health, the subject mix matters. NEET-UG sets its own eligibility, and the IB or IGCSE combination must include the right sciences. Read the official information bulletin each year before choosing subjects, as rules can change and a tutor cannot confirm them on the agency's behalf.",
        "Within Kerala, students often look at Mahatma Gandhi University at Kottayam, Kerala University, Calicut University and the colleges around Changanassery and Pala. Outside the State, institutions in Bengaluru, Chennai and Pune are common choices for engineering, design and management.",
        "Study abroad is a natural option here. The UK, Ireland, Canada, Australia and the Gulf all read the IB Diploma, and offers are stated in IB points with subject requirements. Tutors can explain how predicted scores relate to typical offers, though each university decides its own admissions.",
      ],
      bullets: [
        "AIU equivalence is usually required for Indian admissions",
        "NEET-UG, JEE and CUET-UG each have their own rules",
        "Offers abroad depend on IB points and subject requirements",
        "Always read the current official notice before choosing subjects",
      ],
    },
    {
      heading: "How are IB Biology, Chemistry and Mathematics taught online?",
      paragraphs: [
        "Many Panamattom students lean towards health-care courses, so Biology and Chemistry at Higher Level are in steady demand. Tutors teach with diagrams on a shared whiteboard, then ask the student to draw, label and explain, because the exam rewards a precise written answer more than a vague understanding.",
        "Mathematics: Analysis and Approaches is the stronger choice for engineering and economics; Applications and Interpretation suits biology, nursing and social science students who need statistics. Choose with the university course in mind and ask the school for advice before the subject-choice deadline.",
        "Practical work cannot be run through a screen, but the thinking behind it can: experiment design, data processing, uncertainty and conclusions. These skills appear in the written papers as well as in the internal assessment, which remains the student's own work.",
        "A good weekly rhythm is one concept lesson, one exam-technique lesson and a short written task between. Tutors log recurring errors by topic, so that revision targets real weaknesses, and send a note after each class so a busy or distant parent can follow.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and what should a Panamattom student choose?",
      paragraphs: [
        "Most Cambridge IGCSE subjects offer two tiers. Core is shorter and caps the highest grades, which suits breadth subjects or students who find the subject hard. Extended covers the full grade range and is the usual route for anyone continuing to A Level or the IB in Mathematics and the sciences.",
        "Decide with evidence, not guesswork. A tutor can set an Extended paper in the first week, mark it with you, and show where the student stands. Moving down late is possible in some cases but works best when planned, not forced six weeks before the exam.",
        "A typical subject set for a Kerala student includes English, Mathematics, Biology, Chemistry, Physics and one or two others such as Accounting, Business Studies or Computer Science. Malayalam is not available from every board, whereas Hindi and English as a Second Language are more common.",
        "Many students sit IGCSE as private candidates, so ask the registered centre early about entry deadlines, fees and practical-paper arrangements. Late entry costs more, and some centres close registration weeks before the session. Working backwards from those dates keeps the plan realistic.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Send the class, board and subjects on WhatsApp. A few lines are enough to begin." },
    { title: "Trial lesson", description: "A tutor chosen for your syllabus teaches one live class on us, so the fit is judged first." },
    { title: "Plan and rate in writing", description: "A weekly plan and a written rate arrive together, and nobody rushes your decision." },
    { title: "Weekly online lessons", description: "Live classes in IST, moved when rain, church schedules or shifts require it." },
    { title: "Notes and review", description: "Every class ends with a short summary, and a poor match means a new tutor." },
  ],
  whyPoints: [
    { title: "A specialist within reach", description: "Higher Level Biology or IGCSE Extended Mathematics, without a long journey to a city." },
    { title: "Flexible around real lives", description: "Timings bend around shifts, church weeks, Onam and the monsoon." },
    { title: "Clear about format", description: "Online only in Panamattom. No tutor visits homes here, and we say so up front." },
    { title: "Notes parents can forward", description: "Short plain-English summaries, easy to share with a parent abroad." },
    { title: "Coaching with limits", description: "Explanation and feedback only; assessed work stays the student's." },
    { title: "Simple exits", description: "A free trial, written rates and a replacement tutor when needed." },
  ],

  faqs: [
    {
      question: "Are there IB and IGCSE tutors in Panamattom?",
      answer: "Online, yes. Our tutors work from other parts of India and teach Panamattom students over live video in IST. We did not find specialists teaching these syllabi locally, which is why remote matching is the practical option. A shared whiteboard and a written note after each class come as standard.",
    },
    {
      question: "Will a tutor come to my home in Panamattom?",
      answer: "No. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. In Panamattom your child takes a live one-to-one lesson at home on a laptop, which we call online home tuition. You need a quiet room, a steady connection and a charged backup device for rainy weeks.",
    },
    {
      question: "Is there an IB or IGCSE school in Panamattom?",
      answer: "We could not confirm one. Local schooling is mostly Kerala State and CBSE. Families wanting a full international programme usually look at Kochi, where several schools are confirmed, or at schools abroad. Please verify any school's curriculum directly, and tell us if you know of a local option.",
    },
    {
      question: "How much does tuition cost?",
      answer: "The honest answer is that it varies, and we put the exact figure on paper before anything is booked. Level, subject, lessons per week and how scarce the specialist is all move it. A Higher Level science costs more than primary reading support. The trial class itself costs nothing.",
    },
    {
      question: "Can my child sit IGCSE exams from Panamattom?",
      answer: "Most candidates here enter privately through an approved centre, though some centres decline private entries. Ask about closing dates, fees and how the practical paper is handled well before the session. Registration sits with the centre and the board; our part is preparing your child for the papers.",
    },
    {
      question: "My child studied abroad and returned. Can you help?",
      answer: "Yes. Returnees often need continuity in the syllabus they already know, and a tutor can keep that going while the family decides on the next school. We run a short diagnostic, fix the gaps and keep lessons going online, whatever school your child ends up attending.",
    },
    {
      question: "Which subjects are most requested around here?",
      answer: "Biology, Chemistry and Mathematics lead, reflecting interest in health-care courses, followed by Physics, English and Economics. English writing support is also common for students moving from a Malayalam-medium school. Subject choice should start from the target course, not from what seems easiest.",
    },
    {
      question: "Can tutors write or edit my child's IA or Extended Essay?",
      answer: "Never. A tutor may talk through what a marking criterion is asking, or react to a draft the student produced alone, but wording, data and conclusions come from the student. Any provider who offers to write assessed work is putting your child's diploma at risk, and we do not work that way.",
    },
    {
      question: "Is the IB Diploma accepted in Kerala and India?",
      answer: "For most Indian courses it is, once the Association of Indian Universities has certified equivalence. Central universities largely use CUET-UG, where IB candidates can apply under the published conditions. Each university and year publishes its own rules, so read the notice for the specific course before assuming anything.",
    },
    {
      question: "Can an IB or IGCSE student take NEET?",
      answer: "It can be done, though it hinges on exactly which subjects were studied. The testing agency publishes eligibility in its yearly bulletin, and Physics, Chemistry and Biology are the usual core. Check that document before locking in subjects, since neither the school nor IB Gram can overrule it.",
    },
    {
      question: "What if our evening is disrupted by a power cut or heavy rain?",
      answer: "We reschedule. If a lesson fails because of a genuine outage, it is moved without penalty. Keep the laptop charged and a mobile hotspot ready during the monsoon, and message the tutor early if conditions look bad, so the slot can be changed before it starts.",
    },
    {
      question: "How does tuition fit with Kerala school exams in February and March?",
      answer: "We plan around them. If a student faces State or school exams and an IGCSE or IB session in the same year, preparation is sequenced, lighter in exam weeks and heavier afterwards. Share your school's calendar at the trial lesson and the plan avoids clashes.",
    },
    {
      question: "How quickly can we start?",
      answer: "Commonly inside a week. Popular subjects such as Mathematics or Biology find a match fastest; an unusual pairing needs more time. Because exam months fill up, writing to us in July or January rather than the month before gives a wider choice of tutors and slots.",
    },
    {
      question: "What if the tutor is not a good fit?",
      answer: "Say so and we replace them at no charge. Pace, personality or timing can each be the issue, and naming it helps us choose better next time. Your child's comfort with the person on screen drives results more than speed of starting.",
    },
    {
      question: "Can you help a child moving from a Malayalam-medium school to IB?",
      answer: "Yes, as long as the first weeks go to English. Reading comprehension and paragraph writing come before content speed. After a diagnostic, the tutor sets a gentle ramp over a term, so the child meets IB-style questions only once the language is secure enough to carry them.",
    },
    {
      question: "How do I contact IB Gram?",
      answer: "WhatsApp or call +91 7439 368 115, or email support@ibgram.com. Tell us the school year, board, subjects and any exam month. A tutor suggestion and a free trial time usually come back to you quickly.",
    },
  ],

  internalLinks: [
    { label: "IB tutors across India", href: "/india/", description: "The national page for families outside the big metros." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse IB subjects and see how a tutor is chosen." },
    { label: "IGCSE tuition", href: "/igcse/", description: "IGCSE subject help for Cambridge and Edexcel candidates." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, core components and where a tutor fits." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, personal project and Class 6 to 10 support." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Analysis and Approaches against Applications and Interpretation." },
    { label: "Our tutors", href: "/tutors/", description: "Read about the people who would teach your child." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask for a trial class and a quote on paper." },
    { label: "Kottayam", href: "/kottayam/", description: "The district town and its own mix of boards and colleges." },
    { label: "Kochi", href: "/kochi/", description: "The nearest city with confirmed IB and Cambridge campuses." },
    { label: "Thrissur", href: "/thrissur/", description: "Another central Kerala city served by online tutoring." },
  ],

  closingHeading: "Start with a free trial lesson at your own desk in Panamattom",
  closingBody: "Whether your child is a returnee, a nursing aspirant adding an IGCSE science, or a student preparing for a move abroad, one trial lesson shows what the right tutor feels like. Reach us on WhatsApp at +91 7439 368 115 or by email at support@ibgram.com, and the plan will be fitted the plan around your family's shifts, church calendar and the monsoon.",
};
