import type { CitySeoPage } from "../types";

/**
 * /pacode/ - IB and IGCSE tutoring page for Pacode, Kanniyakumari district, Tamil Nadu (panchayat town
 * near Marthandam and Thuckalay, close to the Kerala border). No local school confirmed for IB or
 * Cambridge/Edexcel IGCSE. Nearby clusters: Thiruvananthapuram (Trivandrum International School) and
 * Madurai, as already used on /nagercoil/. Online-only delivery.
 */
export const pacode: CitySeoPage = {
  slug: "pacode",
  countryName: "Pacode",
  countryNameLong: "Pacode, Kanniyakumari district, Tamil Nadu",
  demonym: "Pacode",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots are set around the two monsoons, the March public exams, Onam, Pongal and Christmas, and the hours a Gulf-based parent can join a call",
  lastUpdated: "2026-09-21",
  geo: { latitude: 8.3325, longitude: 77.2317 },
  wikipedia: "https://en.wikipedia.org/wiki/Pacode",
  alternateNames: ["Pacode Kanyakumari", "Pacode Kanniyakumari", "Pakode"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Pacode | Online Tuition at Home",
  metaDescription:
    "Online IB and IGCSE tutors for Pacode in Kanniyakumari district: DP, MYP, Cambridge and Edexcel, taught live one-to-one at home, with a free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Pacode",
  heroEyebrow: "IB & IGCSE TUITION FOR PACODE, KANNIYAKUMARI DISTRICT",
  heroSubtitle:
    "Parents in Pacode asking about IB or IGCSE home tuition should know how it works here: a private tutor teaches your child alone, by video, while they sit at your own table. Nobody travels from Nagercoil or Thiruvananthapuram to teach in a Pacode house; in-person visits run only in Gurugram and parts of Delhi NCR. Choose a subject and an evening, and the first class is free.",
  primaryKeyword: "IB and IGCSE tutors in Pacode",
  imageAltText: "A Pacode student from Kanniyakumari district discussing an IGCSE Mathematics problem with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Pacode",
    "IGCSE tutor Pacode",
    "IB home tuition Pacode",
    "IGCSE home tuition Pacode",
    "IB private tuition Pacode",
    "IB Maths tutor Pacode",
    "IGCSE Maths tutor Pacode",
    "IB Physics tutor Pacode",
    "IB Chemistry tutor Pacode",
    "IB Biology tutor Pacode",
    "IB DP tutor Pacode",
    "IB MYP tutor Pacode",
    "IB PYP tutor Pacode",
    "IGCSE online tuition Pacode",
    "IB tutor Kanniyakumari district",
    "IGCSE tutor Marthandam",
    "IB tutor Pacode Tamil Nadu",
    "online IB classes Kanyakumari",
  ],

  heroTrustPoints: [
    "A tutor chosen for the exact IB paper or IGCSE code, rather than a general maths or science teacher",
    "All lessons are on screen in Pacode; face-to-face tutoring is available only in Gurugram and parts of Delhi NCR",
    "A free trial lesson before you decide whether to continue",
    "Short plain-language notes that a parent working abroad can read from anywhere",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB range" },
    { value: "CAIE + Edexcel", label: "Two IGCSE boards" },
    { value: "IST", label: "Indian-hours tutors" },
    { value: "Free trial", label: "No cost to start" },
  ],

  intro: {
    heading: "IB and IGCSE tuition for Pacode, a Kanniyakumari town between two states' schooling habits",
    paragraphs: [
      "Pacode is a panchayat town in Kanniyakumari district, recorded at 24,050 residents in the 2011 census, and sits among rubber, coconut and banana country close to Marthandam and the Kerala border. Nearby are Gnaramvilai, Thickurichy, Alauvilai and Melpuram, and the 9th-century Chitharal Jain Monuments lie not far away. Families here live between two cultures, with Tamil as the main language and Malayalam heard widely across the district.",
      "Local schools include Sacred Heart Higher Secondary School and, at Gnaramvilai, Abraham James Memorial Matriculation School, both within the Tamil Nadu system. We found no school in Pacode teaching the IB or a Cambridge or Edexcel IGCSE; the nearest confirmed campuses are in Thiruvananthapuram and Madurai. Families who ask tend to have a Gulf-based parent, a relative in the UK or Canada, or an academically ahead child likely to study overseas.",
      "That pattern makes the classroom question secondary. What these households lack is a teacher who has actually taught an IB Physics or IGCSE Mathematics paper. Video tuition solves exactly that, because the tutor can live anywhere in India, and a parent in Dubai or Doha can follow the written notes after each lesson.",
      "IB Gram works independently of the IB, Cambridge, Pearson and any school named here. Tutors explain, set practice and mark; they never write or reword an Internal Assessment, Extended Essay, TOK essay or coursework.",
    ],
    bullets: [
      "Lessons for IB PYP, MYP and Diploma courses at HL and SL",
      "Cambridge and Pearson Edexcel IGCSE at every tier",
      "Live one-to-one video on Indian Standard Time",
      "A free first lesson, with rates in writing before booking",
      "No home visits in Pacode; in-person tuition is limited to Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is taught at a Pacode school as far as we can establish. They reach households here through a Gulf posting, a relative's advice, a move across the Kerala border or a plan for university abroad, and the notes below follow those routes.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Inquiry units run across subjects and finish with a pupil-led Exhibition in Grade 5. No exam is set, so tutoring centres on reading fluency, early numeracy and learning to frame questions.",
      countryNote:
        "A Pacode parent working overseas often asks about the PYP so a young child can move smoothly to an international primary school later.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Work is graded against criteria in eight subject groups and a Personal Project completes the course. Coaching helps move students from recalling to explaining and judging.",
      countryNote:
        "A student leaving a Tamil-medium or matriculation Class 8 for an MYP class elsewhere gains most from English writing practice beforehand.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, the Extended Essay, TOK and CAS across two years. Written papers sit mostly in May and internal assessments contribute to the subject grade.",
      countryNote:
        "Diploma students linked to Pacode typically study in Thiruvananthapuram, Chennai or abroad, and need a subject specialist in the holidays.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Links DP courses with career-related study and a reflective project. Very few Indian schools offer it, so most help goes into the DP courses.",
      countryNote:
        "CP is almost never requested from Pacode, and the real need is DP subject teaching.",
    },
  ],

  subjectsIntro:
    "Board teaching in Tamil Nadu builds quick recall and accurate calculation. The IB and IGCSE keep that base and ask for it to be argued and applied, so matching begins with course and level and then checks written English. Give us the paper and we find tutors who have taught it.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions, vectors and proof for students aiming at engineering or the physical sciences, with HL Paper 3 testing stamina on unseen problems." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, probability and modelling with technology, where explaining a result earns as much as computing it." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through to nuclear physics plus a student-designed investigation. Those trained on board numericals add reasoning in words." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, kinetics, equilibrium and organic reactions, with data-booklet fluency and exact definitions." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology to ecology, marked by command terms. The Western Ghats foothills nearby offer rich ecology examples." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets, policy and development, drawing on local material such as rubber prices, Gulf remittances and coastal trade." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying theory to cases, a good fit for families with plantation, trading or overseas business ties." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis, comparison and an oral. Tamil and Malayalam speakers sharpen formal written English." },
    { name: "IB Tamil A or B", levels: "HL / SL", description: "Tamil is spoken at home, so the course rewards formal reading, analysis of literature and a steady individual oral." },
    { name: "IB Malayalam B", levels: "SL / HL", description: "For students with Malayalam at home or among neighbours, building examined reading, writing and speaking." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Coding, algorithms and databases, plus a solution project that rewards regular weekly work." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking about water, forest and land use, with plantation and monsoon ecology close by." },
    { name: "IB Psychology", levels: "HL / SL", description: "Behaviour studied through biological, cognitive and sociocultural approaches, written as extended responses." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and essays across the prescribed topics." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation-led sessions on how knowledge is made, shaping the exhibition and essay." },
  ],

  igcseSubjectsIntro:
    "Cambridge (CAIE) and Pearson Edexcel are the two IGCSE boards, with different codes and papers. We fix board and exam window first: Cambridge sits in March, May-June and October-November in India, Edexcel in January, May-June and October.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra, geometry, trigonometry and statistics, with Extended leading on to further maths and the sciences." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and further algebra, a stepping stone towards IB Maths AA." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Set out differently from Cambridge, so only Edexcel past papers are used." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Motion, heat, waves, electricity and the atom, with the practical-skills paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, bonding, rates and organic reactions, plus experiment planning on paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, inheritance, ecosystems and the human body, answered in the structure examiners expect." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Core ideas, then data response and evaluation." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Computational thinking and short programs." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "A recognised English certificate for Tamil-medium students planning A Level or the IB." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business ideas applied to case material." },
  ],

  regionsTitle: "Pacode neighbourhoods and nearby places we teach online",
  regionsIntro:
    "Lessons are on screen, so places matter as context: which side of the Tamil-Kerala line a household leans, how far the school run stretches, and where the monsoons make evenings unreliable. Pacode and its neighbours share a handful of patterns.",
  regions: [
    { name: "Pacode town centre", note: "The panchayat town core with its market, temples and churches, where most students attend Tamil Nadu board or matriculation schools." },
    { name: "Near Sacred Heart Higher Secondary School", note: "A school-centred neighbourhood where evening tuition is part of the regular routine." },
    { name: "Gnaramvilai", note: "A nearby locality that hosts Abraham James Memorial Matriculation School, with a strong matriculation habit." },
    { name: "Thickurichy", note: "A neighbouring settlement in the same belt, with rubber and small-farm households." },
    { name: "Alauvilai", note: "A rural locality where internet reliability varies and a data backup is wise." },
    { name: "Melpuram", note: "A village area near Pacode, typical of the plantation-and-school rhythm of the district." },
    { name: "Chitharal and Thiruvattar side", note: "Families near the Jain monuments and the temple belt, with a quieter, more rural pattern." },
    { name: "Marthandam and Thuckalay", note: "The larger market towns close by, where many families shop and send children to senior classes." },
    { name: "Nagercoil", note: "The district headquarters, with the widest range of coaching and the nearest city colleges." },
    { name: "Thiruvananthapuram direction", note: "The Kerala capital across the border, often the practical choice for an IB campus." },
  ],

  schoolDisclaimer:
    "No IB or Cambridge or Edexcel IGCSE school turned up inside Pacode, so the strip is empty. Listed below are campuses in Thiruvananthapuram and Madurai, the nearest confirmed choices for Kanniyakumari families; please ask each school about its current programme. IB Gram has no link to any of them, nor to the IB, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Nearby: Thiruvananthapuram",
      note: "The Kerala capital lies across the border and is the usual first thought for a Kanniyakumari family wanting an international campus.",
      schools: ["Trivandrum International School"],
    },
    {
      city: "Nearby: Madurai",
      note: "Madurai is the larger Tamil Nadu choice, reached by rail or road from the south.",
      schools: ["Velammal Global School", "Jain Vidyalaya"],
    },
    {
      city: "Pacode: staying with the home school",
      note: "Most students remain in a Tamil Nadu State Board, matriculation or CBSE school and add online IB or IGCSE subject lessons, often while a move is planned.",
      schools: [],
    },
  ],

  modesIntro:
    "In Pacode there is a single teaching method, a live video class with one tutor at three tempos. Visits to a house are not offered; they exist only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "A steady weekly hour",
      description:
        "The same tutor in the same slot each week, on a shared digital board with past-paper pages open.",
      bullets: [
        "One tutor throughout",
        "Any IB subject or IGCSE code",
        "Evening or weekend slots",
        "A short note after each class",
      ],
    },
    {
      title: "A term plan with reviews",
      description:
        "Two classes a week with written notes and a monthly review, handy for parents who follow from abroad.",
      bullets: [
        "Notes readable from any country",
        "Monthly summary of strengths and gaps",
        "Slots that suit a Gulf time difference",
        "Extra classes before mocks",
      ],
    },
    {
      title: "A pre-exam sprint",
      description:
        "A short, intense run of timed papers with fast marking, set just ahead of an IB, Cambridge or Edexcel exam.",
      bullets: [
        "Past papers under time",
        "Corrections against mark schemes",
        "Planned around monsoon weeks and Onam",
        "Begin two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Gulf salaries, Kerala links and the IB: who asks in Pacode?",
      paragraphs: [
        "Kanniyakumari district has a long tradition of overseas work, with many households supported by a parent or sibling in the Gulf, Singapore or the West. That experience shapes ambition. Parents know how an international qualification is read abroad, and they want their children to have the same options without leaving school halfway.",
        "Add the Kerala border, only a short bus ride away, and the picture widens. Families here move easily between Tamil Nadu and Kerala for work, worship and weddings. Trivandrum International School and other campuses across the border are well known, even if admission is not always practical.",
        "With no Pacode school running either, the family's options are moving, boarding elsewhere or private study. The last means following an IGCSE syllabus with a tutor and entering exams as an outside candidate, or preparing IB subjects ahead of a transfer.",
        "A limit has to be stated. The IB Diploma requires a registered school, and a tutor cannot supply a laboratory or classmates. Subject depth and exam skill are what lessons deliver.",
      ],
      bullets: [
        "Households with a parent working in the Gulf or abroad",
        "Families planning a move to Thiruvananthapuram or Chennai",
        "Students aiming for UK, Canadian or Australian universities",
        "Children who need stronger English-medium academic habits",
      ],
    },
    {
      heading: "Tamil Nadu board, CBSE, IGCSE or IB: which suits a Pacode student?",
      paragraphs: [
        "Tamil Nadu's State Board holds public exams in Classes 10 to 12, usually in March and April, with TNEA and NEET following for professional courses. Matriculation schools use similar papers with more English. CBSE has a national syllabus tied to JEE and NEET. IGCSE and IB are international and put weight on written reasoning, practical work and subject choice.",
        "IGCSE lasts two years, Classes 9 and 10, and is sat subject by subject with tiered papers. The IB Diploma is six subjects over two years with the Extended Essay and TOK on top. A lot of students do IGCSE first and then move on to the IB, A Level or Class 11.",
        "Where the child goes next decides. Staying in Tamil Nadu or Kerala makes the state boards or CBSE the shortest path to entrance exams. Moving abroad makes an international qualification worth the effort.",
        "A tutor allows a child to try an international subject without leaving the current school, giving the family evidence before a major decision.",
      ],
      table: {
        caption: "Routes a Pacode family might compare",
        columns: ["Route", "Medium", "Main exam", "Typical next step"],
        rows: [
          ["Tamil Nadu State Board / Matriculation", "Tamil or English", "Public exams, Classes 10 to 12", "TNEA, NEET, state colleges"],
          ["CBSE", "English", "Class 10 and 12 boards", "JEE, NEET, CUET-UG"],
          ["IGCSE", "English", "Subject papers, several series", "A Level, IB, Class 11"],
          ["IB Diploma", "English mainly", "Six subjects with EE and TOK", "Indian and overseas universities"],
        ],
      },
    },
    {
      heading: "What makes up the fee for IB or IGCSE tuition in Pacode?",
      paragraphs: [
        "No rate card appears on this page. After the free trial a written quote follows, tailored to your child, so the figure you weigh is a real one.",
        "Four things shape the quote: subject and level, hours per week, how long the tutor has taught that syllabus and the number of months left. A Higher Level science with a veteran tutor costs more than IGCSE Business at Core.",
        "Because lessons are online, a Pacode family avoids the cost of travelling to Nagercoil or Thiruvananthapuram: bus or train fares, lost afternoons and, for exams, perhaps a night away. It also opens a national choice of teachers.",
        "Let the trial lesson be your yardstick: notice whether the tutor spots what your child actually finds hard, explains it simply and chooses sensible practice. If it feels off, we offer someone else.",
      ],
      bullets: [
        "Subject and level",
        "Hours each week",
        "Tutor experience with the syllabus",
        "Months before the exam",
      ],
    },
    {
      heading: "Would a Nagercoil coaching class do the same job as online tuition?",
      paragraphs: [
        "Nagercoil and Thiruvananthapuram have coaching classes, chiefly for board exams, NEET, JEE and KEAM. We know of none built around IB or IGCSE marking, so a class there gives content but not the way examiners award marks.",
        "A tutor on your street may teach school subjects excellently and still be unsure how IB examiners split method marks or how Extended IGCSE questions are phrased.",
        "Video lessons with a syllabus-experienced tutor remove the journey. They rely on power and broadband, which monsoon storms can disturb, so a hotspot and flexible rescheduling are part of the plan.",
        "Most families mix methods: school and coaching for the state papers, one video class a week for the international subject, and timed practice in between.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Pacode",
        columns: ["Option", "Syllabus knowledge", "Travel", "Paper feedback"],
        rows: [
          ["Online one-to-one", "Matched to the exact course", "None", "Against real mark schemes"],
          ["Nagercoil coaching class", "Board and entrance focus", "Regular bus trip", "General"],
          ["Local private tutor", "Varies", "Short trip", "Depends on tutor"],
          ["Self-study", "Own reading", "None", "None without review"],
        ],
      },
    },
    {
      heading: "How do exam dates sit with two monsoons and a festival-heavy year?",
      paragraphs: [
        "IB Diploma written exams run mainly in May, with results in July. Cambridge IGCSE sits in March, May-June and October-November in India, and Edexcel in January, May-June and October. The school or exam centre decides the window.",
        "Kanniyakumari gets both monsoons. The southwest rains arrive in June and continue through the summer, and the northeast monsoon brings more from October to December. Power cuts and weak signal follow heavy storms, especially in rural pockets.",
        "Festivals fill the calendar. Pongal in January, Onam in late summer, Deepavali in autumn and Christmas in December all bring family time and travel. We avoid hard revision on those days.",
        "Our planning starts at the exam and works backwards: a diagnostic, a teaching phase, papers under time and a final review. Storm-hit classes are rescheduled.",
      ],
      table: {
        caption: "Study calendar for a Pacode student",
        columns: ["Months", "Local pattern", "Study planning"],
        rows: [
          ["Jan", "Pongal; Edexcel January series", "Short week, plan around the festival"],
          ["Mar-Apr", "State public exams; Cambridge March series", "Light lessons only"],
          ["May-Jun", "IB May exams; southwest monsoon starts", "Early or late slots, data backup"],
          ["Aug-Sep", "Onam; steady school term", "Good window for content building"],
          ["Oct-Dec", "Northeast monsoon, Deepavali, Christmas; Cambridge October-November", "Plan around holidays and storms"],
        ],
      },
    },
    {
      heading: "Where can a Pacode IB or IGCSE student study afterwards?",
      paragraphs: [
        "To enter a degree in India, an IB Diploma usually needs AIU equivalence, and plenty of universities admit through CUET-UG, so the subject combination has to match the course. Engineering rules (JEE Main and counselling) are revised frequently; always work from the latest brochure.",
        "For medicine through NEET-UG the qualifying subjects are Physics, Chemistry, Biology and English. Tamil Nadu and Kerala quotas may hinge on domicile, and IB or A Level applicants have to provide equivalence certificates.",
        "Close by, students consider Thiruvananthapuram, Nagercoil, Chennai, Coimbatore and Bengaluru. Further out lie the UK, USA, Canada, Australia, Singapore and the Gulf, familiar to many Pacode families.",
        "When IGCSE ends, a student can go to A Level, the IB Diploma or Class 11, and whatever is kept at Class 10 shapes later choices. Tutors lay out the links without promising a seat.",
      ],
    },
    {
      heading: "IB Maths and the sciences: what strong preparation involves",
      paragraphs: [
        "There are two IB Maths courses, each at HL or SL: Analysis and Approaches for algebra, calculus and proof, and Applications and Interpretation for data and modelling. A single diagnostic class shows which suits.",
        "Tamil Nadu board students tend to be fast and neat. What the IB adds is justification and interpretation, so lessons include fully written reasoning and a timed paper every second week.",
        "In each science the Internal Assessment is a solo investigation. Tutors help with the question, the data and the evaluation, and write nothing in the report. With scarce lab access, simulations and public datasets stand in, and error analysis gets proper time.",
        "In Chemistry and Biology the correct term earns the mark, so tutors rehearse the wording mark schemes expect.",
      ],
    },
    {
      heading: "Choosing IGCSE tiers and subjects in Pacode",
      paragraphs: [
        "Cambridge offers many subjects at Core and Extended level, and Edexcel at Foundation and Higher. The lower tier caps the grade; the upper keeps every grade open and prepares for A Level or IB Higher Level.",
        "An early diagnostic settles the tier. Extended Mathematics beside Core English is a perfectly ordinary mix.",
        "Subjects follow the destination. Future engineers take Mathematics, Physics and Chemistry, often with Additional Mathematics. Commerce-minded students add Economics and Business Studies. Computer Science points to technical careers.",
        "Private candidates register through an approved centre, often in Thiruvananthapuram, Chennai or Bengaluru, so confirm the centre and series early and fit lessons to the entry date.",
      ],
      bullets: [
        "Diagnose before choosing a tier",
        "Match subjects to the later stream",
        "Confirm the exam centre early",
        "Plan tutoring around the series",
      ],
    },
  ],

  process: [
    { title: "Send the details", description: "Tell us class, board, subject, level and exam date." },
    { title: "Meet a proposed tutor", description: "One or two suitable tutors are suggested, each with a brief profile." },
    { title: "Attend the trial class", description: "A live trial class on a genuine topic, free." },
    { title: "Review the rate", description: "To go ahead, you first see a written rate and plan." },
    { title: "Study and track", description: "Lessons begin, each followed by a note. A change of tutor is open if the fit is off." },
  ],

  whyPoints: [
    { title: "Syllabus-matched tutors", description: "Each tutor has taught the specific IB course or IGCSE code you need." },
    { title: "Plain about format", description: "Pacode teaching is entirely online; home visits are limited to Gurugram and parts of Delhi NCR." },
    { title: "Indian time zone", description: "Tutors teach on IST, which also helps a parent following from the Gulf." },
    { title: "Readable notes", description: "A short note after each class lists what was covered and what to practise." },
    { title: "Swap if needed", description: "A poor match is fixed by moving to another tutor." },
    { title: "Coaching, not ghostwriting", description: "Writing IAs, Extended Essays, TOK essays and coursework is never a tutor's job." },
  ],

  faqs: [
    { question: "Can Pacode students get IB or IGCSE help locally?", answer: "Locally there is nobody we could name, hence the online format. Pacode's schools run on the Tamil Nadu system and no IB or IGCSE campus is known here. We find a specialist elsewhere in India who has taught the very syllabus your child follows, and the class takes place over video with a shared whiteboard." },
    { question: "Does a tutor come to a house in Pacode?", answer: "No. Nobody will knock on a Pacode door, because teaching in person is something we do only in Gurugram and parts of Delhi NCR. Here the lesson is online home tuition: a camera on the child's desk, a tutor on the other end and a shared board between them. Decent broadband and a laptop are the entry ticket. What you get back is a tutor chosen from the whole country, and no bus ride to Nagercoil." },
    { question: "What does IB home tuition cost in Pacode?", answer: "We hold no price list. When the trial is over you receive a written quote that depends on the subject and level, the hours per week, the tutor's depth in that syllabus and the exam date. Because teaching is online there is no fare to Nagercoil or Thiruvananthapuram." },
    { question: "Can a parent in the Gulf follow the lessons?", answer: "Yes. Every class ends with a short written note listing what was covered and what to practise, so a parent abroad can read it the same day. Lessons run on Indian Standard Time, and an evening slot in Pacode usually suits a late-afternoon or evening check-in from the Gulf. A parent can also join a review call." },
    { question: "Does Malayalam or Tamil count as an IB subject?", answer: "Yes, where the school or route offers it. IB lists Tamil and Malayalam among its language courses. Daily use of either gives a Pacode student a head start, and sessions turn that into exam skill through text types, literary analysis and the oral. A specialist for the language is confirmed during matching." },
    { question: "Is Thiruvananthapuram a practical base for an IB campus?", answer: "For many Kanniyakumari families, yes, since it lies across the border. We list Trivandrum International School as a nearby option, but admission, fees and the current programme are for the school to confirm. We are not affiliated with it. Online tuition can bridge the months before a move." },
    { question: "Will IGCSE count for admission in Tamil Nadu?", answer: "IGCSE is pitched at Class 10. Afterwards students usually enter Class 11, A Level or the IB before a degree application, with each university setting its own admission and equivalence rules. A tutor can show how subject choices keep doors open but cannot guarantee a place." },
    { question: "Can an IB student sit NEET or TNEA?", answer: "It depends on subjects and on rules that change yearly, so rely on the current notification. NEET-UG requires Physics, Chemistry, Biology and English; some state seats are tied to domicile; TNEA publishes its own equivalence terms. Write to the authority about your child's IB subject mix before registering." },
    { question: "Can tutors work on my IA or Extended Essay?", answer: "Our tutors are coaches. They help a student understand a marking criterion, tighten a research question and respond to drafts the student has written. They do not draft, correct or reword any part of an IA, Extended Essay, TOK essay or coursework, since authorship rules forbid it and the student would be the one penalised." },
    { question: "Which IGCSE board is right for us?", answer: "The two boards are alike in subject names but different in the papers they set. Often your school or exam centre has already picked one. If not, spend an hour with a tutor trying a past paper from each; the one your child finds more natural is usually the better choice." },
    { question: "Can a Pacode student sit IGCSE as a private candidate?", answer: "Quite often, yes. Cambridge and Edexcel both accept outside candidates through approved exam centres, and the nearest to Pacode are generally in Thiruvananthapuram or Chennai. Coursework and practical rules vary by subject, so read the syllabus first. Our tutors cover the written papers and the alternative-to-practical paper by video; the entry paperwork is for the family to sort with the centre." },
    { question: "How do monsoon storms affect online lessons?", answer: "Heavy rain can knock out power or mobile data, particularly in the rural pockets around Pacode. A charged laptop, a second data source and one free weekly slot cover most trouble; lost lessons move to another day and practice questions follow." },
    { question: "Do you teach PYP and MYP from Pacode?", answer: "Yes, though not often asked for. In the primary years we build reading confidence, comfort with number and the habit of framing researchable questions for the Exhibition. In middle years we rehearse criterion-based writing, set out mathematical reasoning and plan the Personal Project. Pacode has no PYP or MYP school, so the plan follows a family's move or online enrolment." },
    { question: "What equipment does my child need?", answer: "Bring a laptop or tablet, not a phone, a connection that lasts an hour of video and a corner of the house with a door that shuts. Sciences need a scientific calculator, and any graphic calculator allowed on an IB paper will be named by your tutor." },
    { question: "How do I get started?", answer: "Send a WhatsApp message to +91 7439 368 115 or an email to support@ibgram.com stating the class, board or programme, subject, level and exam date. A tutor proposal follows soon after, and the trial is fixed for an evening that works." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "National page for online IB and IGCSE tuition." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject-wise IB tutoring." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE support." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure and assessment of the Diploma." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP units and the Exhibition." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI at HL and SL." },
    { label: "Our tutors", href: "/tutors/", description: "Profiles of IB and IGCSE tutors." },
    { label: "Contact", href: "/contact-us/", description: "Ask a question or book a trial." },
    { label: "Nagercoil", href: "/nagercoil/", description: "Online IB and IGCSE tuition for Nagercoil." },
    { label: "Thiruvananthapuram", href: "/thiruvananthapuram/", description: "IB and IGCSE schools and tutoring in Thiruvananthapuram." },
    { label: "Tirunelveli", href: "/tirunelveli/", description: "Online IB and IGCSE tuition for Tirunelveli." },
  ],

  closingHeading: "Book a free first class from home in Pacode",
  closingBody:
    "Tell us the subject, level and exam month and a tutor who has taught that syllabus will be lined up. WhatsApp +91 7439 368 115 or email support@ibgram.com, and take the first class before you decide.",
  tutorsIntro:
    "Every tutor here gives live video lessons to Pacode students and has genuine IB or IGCSE teaching behind them. The one we suggest is matched to the course, level and board your child follows.",
};
