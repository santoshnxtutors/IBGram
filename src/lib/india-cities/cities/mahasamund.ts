import type { CitySeoPage } from "../types";

/**
 * Mahasamund, Chhattisgarh. No IB or Cambridge school is confirmed in the district, so stripSchools is
 * empty and the clusters point honestly to Raipur (about 56 km away), reusing school names already
 * verified on the published Raipur and Bhilai pages. Online only: in-person home tuition runs only in
 * Gurugram and parts of Delhi NCR.
 */
export const mahasamund: CitySeoPage = {
  slug: "mahasamund",
  countryName: "Mahasamund",
  countryNameLong: "Mahasamund, Chhattisgarh",
  demonym: "Mahasamund",
  flagCode: "in",
  countryCode: "IN",
  state: "Chhattisgarh",
  stateCode: "IN-CT",
  region: "Chhattisgarh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early evenings and Sunday mornings, kept clear of the hottest afternoon hours and of Hareli, Pola and Khallari fair days",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.1077, longitude: 82.0983 },
  wikipedia: "https://en.wikipedia.org/wiki/Mahasamund",
  alternateNames: ["Mahasamund town", "Mahasamund district headquarters"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mahasamund | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Mahasamund students: DP, MYP, PYP, Cambridge and Edexcel subjects taught one to one from home, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Mahasamund",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION IN MAHASAMUND",
  heroSubtitle:
    "Private tuition from home is the only way IB and IGCSE reaches most families in Mahasamund: a subject specialist teaches one to one over a video link while your child sits at the family desk, since the nearest school running either syllabus is in Raipur, about an hour down the highway. Tell us the programme, subject and level, and we shortlist a tutor who has taught that exact course.",
  primaryKeyword: "IB and IGCSE tutors in Mahasamund",
  imageAltText: "IB tutor explaining a Higher Level mathematics problem live online to a student in Mahasamund",
  secondaryKeywords: [
    "IB tutor Mahasamund",
    "IGCSE tutor Mahasamund",
    "IB home tuition Mahasamund",
    "IGCSE home tuition Mahasamund",
    "IB private tuition Mahasamund",
    "IB Maths tutor Mahasamund",
    "IGCSE Maths tutor Mahasamund",
    "IB Physics tutor Mahasamund",
    "IB Chemistry tutor Mahasamund",
    "IB Biology tutor Mahasamund",
    "IB DP tutor Mahasamund",
    "IB MYP tutor Mahasamund",
    "IB PYP tutor Mahasamund",
    "IGCSE online tuition Mahasamund",
    "online IB tutor Chhattisgarh",
    "Cambridge IGCSE private candidate Mahasamund",
    "Edexcel IGCSE tutor Mahasamund",
    "IB tutor Station Road Mahasamund",
    "IGCSE tuition Pithora",
    "IB tutor Raipur Road Mahasamund",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact syllabus, not a general subject label",
    "Lessons live on video, so there is no two-hour round trip to Raipur",
    "Free first lesson, a written note after every session, a swap if the fit is wrong",
    "An independent service with no tie to any school or exam board",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB continuum" },
    { value: "Cambridge + Edexcel", label: "Both IGCSE boards" },
    { value: "Online", label: "No tutor visits in Mahasamund" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition looks like for a Mahasamund family",
    paragraphs: [
      "Mahasamund sits on the Mahanadi plain, a district headquarters built around rice, stone-cutting and government offices, with Raipur close enough to visit for a day and far enough that nobody commutes to school there. We could not confirm any school in Mahasamund itself that teaches the International Baccalaureate or a Cambridge or Pearson Edexcel IGCSE syllabus. So the families who search for IB and IGCSE tutors in Mahasamund are usually doing one of three things: preparing a child for a move to a Raipur campus, studying an international syllabus through a distance route, or preparing to sit Cambridge papers as a private candidate.",
      "Each of those needs a slightly different kind of tutor. A child about to join a Raipur school needs the gaps between a Hindi-medium or CBSE base and an English-heavy IB classroom closed early. A private candidate needs someone who teaches the whole syllabus in order, because nobody else in the house is doing it. A student already inside an international programme elsewhere needs continuity during long stretches at home.",
      "Nobody from IB Gram arrives at a front door in Mahasamund. Lessons are live, private and online: the tutor shares a screen, works through problems with your child, and the session ends with a short written note. Tutors are based in India and teach on Indian Standard Time, so the lesson you book for six in the evening starts at six. In-person home visits exist only in Gurugram and parts of Delhi NCR, and we say so plainly rather than imply otherwise.",
      "IB Gram is independent. We are not affiliated with the IB, Cambridge, Pearson or any school named on this page. Our tutors coach, explain and review; Internal Assessments, Extended Essays, Theory of Knowledge essays and coursework remain the student's own work in every case.",
    ],
    bullets: [
      "Full-syllabus teaching for private candidates, not only revision",
      "Cambridge and Pearson Edexcel, Core and Extended tiers",
      "Every lesson one to one on video with notes afterwards",
      "A free trial lesson before you decide anything",
    ],
  },

  programmesIntro:
    "Which programme matters depends on where your child is headed. In a district without a local IB school, the useful first question is whether the syllabus will be studied at a school elsewhere, through a distance provider, or alone with a tutor.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Primary-age IB learning is organised around units of inquiry that blend languages, maths, science and social studies, ending in a student-led Exhibition. There are no external exams, which is why tutoring at this age is light and steady rather than intense.",
      countryNote:
        "For Mahasamund children the usual request is reading fluency in English and confident number sense before a move to a Raipur school that teaches PYP.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP grades each subject against four criteria rather than one total, so a student can understand a topic and still drop marks by answering the wrong criterion. The final year adds a Personal Project that the student runs from question to product.",
      countryNote:
        "Families moving a child from a CBSE or Chhattisgarh Board school into MYP mostly want help rewriting memorised answers as reasoned ones, particularly in science and individuals and societies.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher and three at Standard Level, sit beside Theory of Knowledge, the Extended Essay and a creativity, activity and service requirement. Exams run in May, with November reserved for retakes at schools that offer it.",
      countryNote:
        "Diploma enquiries from Mahasamund tend to come from students who left for a Raipur or out-of-state campus and want a subject held steady during holidays, or from families planning a late switch at Class 11.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme pairs two or more Diploma courses with vocational study and a reflective project. The academic subjects inside it are the same DP courses, taught to the same standard.",
      countryNote:
        "We have not found a Chhattisgarh school offering CP, so where it comes up here the help is usually with the DP subject component.",
    },
  ],

  subjectsIntro:
    "Choosing a tutor by subject label alone causes most mismatches. Maths Analysis and Approaches and Maths Applications and Interpretation are different courses with different demands, and Higher and Standard Level differ in depth. We confirm course, level and exam session first, then search for someone who has taught exactly that.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and algebraic proof dominate, and HL students usually lose marks less on a single topic than on long questions that chain three ideas together." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator fluency carry the course, and a strong exploration starts from data a student genuinely wanted to look at." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves and fields are the backbone, while the experimental investigation needs planning early when no school laboratory is available to borrow." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, organic reaction pathways and using the data booklet quickly account for most dropped marks." },
    { name: "IB Biology", levels: "HL / SL", description: "Questions reward applying a principle to an unfamiliar organism or data set, and the investigation depends on sensible statistics rather than large samples." },
    { name: "IB Economics", levels: "HL / SL", description: "Clean diagrams and real-world examples matter as much as definitions, and HL adds a policy paper that needs its own practice time." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers punish generic theory, and the internal assessment needs an organisation the student can really get information from." },
    { name: "IB Computer Science", levels: "HL / SL", description: "The product and its documentation carry the internal assessment, so a program that merely runs is not enough; reasoning must be written down." },
    { name: "IB Psychology", levels: "HL / SL", description: "Extended answers need precise study citations and an honest evaluation of method, a habit that takes several months to build." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis and the individual oral improve fastest when a student practises speaking from notes, not from a script." },
    { name: "IB Hindi A and Hindi B", levels: "HL / SL", description: "A natural option in Mahasamund, where Hindi is the everyday language; the written tasks still need the structure IB examiners expect." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Case studies from river basins, agriculture and mining communities make strong examples, provided they are argued rather than listed." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "The exhibition and essay both reward a student who can weigh two competing claims instead of defending one." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Narrowing a topic to a question answerable in 4,000 words is the hard part, and a tutor can coach that process without touching the writing." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel cover similar ground in different wording, so the syllabus code matters before any practice begins. Cambridge runs its main series in May-June and October-November, while Edexcel also sits in January; a private candidate must enter through an approved centre, which we can explain but do not operate.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended-tier marks depend on accurate algebra and careful reading of command words, with and without a calculator." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Class 10", description: "An early look at calculus and trigonometric identities that eases a later move to IB Maths Analysis and Approaches." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Similar content to Cambridge but phrased differently, so practising on the wrong board's papers wastes time." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Practical-skills questions reward careful reading of experimental set-ups as much as theory recall." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations and organic chemistry carry a large share of marks, and they benefit from spaced repetition." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Data interpretation and genetics extended answers are where marks most often leak." },
    { name: "IGCSE Combined & Co-ordinated Sciences", levels: "0653 / 0654", description: "A sensible route for a student who wants science grounding without three separate full subjects." },
    { name: "IGCSE Economics 0455", levels: "Class 9-10", description: "Longer evaluation answers matter more than definitions, which surprises students raised on short-answer papers." },
    { name: "IGCSE English First Language 0500", levels: "Class 9-10", description: "Directed writing and summary tasks are taught as distinct skills, since fluent speakers still lose marks on structure." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Class 9-10", description: "A comfortable subject for Mahasamund students that still requires exam-style written and oral preparation." },
  ],

  regionsTitle: "Mahasamund areas and nearby towns our online tutors already work with",
  regionsIntro:
    "Every lesson runs over video, so your locality only affects timing: power cuts in summer, evening routines, and whether the family has to plan around a market day or a fair.",
  regions: [
    { name: "Station Road", note: "The railway side of town on the Raipur-Visakhapatnam line, busy with small businesses; evening lessons here sidestep the peak of market traffic." },
    { name: "Gandhi Chowk and the old market", note: "A dense trading quarter where many families run shops, so weekday lessons tend to start after the shutters come down." },
    { name: "Collectorate and civil lines", note: "The administrative belt, home to officials on transfer who have often lived in Raipur or another state and know IB or IGCSE by name." },
    { name: "Raipur Road stretch", note: "The highway side used by anyone travelling toward Raipur; families here are the likeliest to weigh a move to a campus there." },
    { name: "Medical college and college area", note: "Students here grow up around NEET-minded households, so biology and chemistry tutoring is requested earlier than elsewhere." },
    { name: "Pithora", note: "A smaller town in the district with a mostly state board schooling pattern; online tuition removes a long bus ride for any extra subject." },
    { name: "Basna", note: "Another district town where IB and IGCSE interest is rare but real, usually traced to a relative working in a metro." },
    { name: "Saraipali", note: "A town toward the Odisha side of the district, where reliable evening bandwidth is worth checking before booking a lesson." },
    { name: "Bagbahara", note: "A rural-facing town where parents sometimes start online tutoring to prepare a child for a hostel school in Raipur." },
    { name: "Sirpur and the Mahanadi villages", note: "Heritage-site villages where schooling is mostly state board; one-to-one online lessons are the only international-syllabus option within reach." },
  ],

  schoolDisclaimer:
    "We could not confirm an IB World School or a Cambridge or Edexcel centre inside Mahasamund, so the lists below are nearby clusters, not local ones. IB Gram is an independent tutoring service and is not affiliated with, endorsed by or paid by any school named here; always check a school's current authorisation with the school itself, the IB or Cambridge.",
  schoolClusters: [
    {
      city: "Nearby: Raipur",
      note: "About 56 km away, Raipur is the closest city with schools that advertise an international curriculum. Some families enrol a child there as a boarder or move house; day travel from Mahasamund is impractical.",
      schools: ["Rungta International School", "N.H. Goel World School"],
    },
    {
      city: "Mahasamund: the private candidate route",
      note: "Cambridge allows students to sit IGCSE papers through an approved exam centre without being enrolled at a Cambridge school, which is how some families here reach the qualification without relocating.",
      schools: [],
    },
    {
      city: "Local CBSE and Chhattisgarh Board schools",
      note: "Most children in Mahasamund study at a CBSE or state board school. Many families keep the child there and add an international subject through online tutoring instead of switching.",
      schools: [],
    },
  ],

  modesIntro:
    "Because no tutor travels to Mahasamund, the question is not home versus centre but how intensively to schedule the online lessons.",
  modes: [
    {
      title: "Weekly one-to-one video lesson",
      description: "A fixed slot each week with the same tutor, used to keep a subject moving alongside school.",
      bullets: [
        "One subject, one level, one tutor",
        "A short written note after each session",
        "Easy to pause around fairs and festivals",
      ],
    },
    {
      title: "Exam-season intensive",
      description: "Several lessons a week in the eight to ten weeks before a May or November series, built on timed past papers.",
      bullets: [
        "Paper-by-paper planning",
        "Marking with examiner-style feedback",
        "Gentler pace once the last paper is sat",
      ],
    },
    {
      title: "Full-syllabus teaching for a private candidate",
      description: "The tutor teaches the course from the first topic, because there is no class at school covering it.",
      bullets: [
        "A term-by-term teaching plan",
        "Practice sets between sessions",
        "Regular progress reviews shared with parents",
      ],
    },
  ],

  sections: [
    {
      heading: "Who studies IB and IGCSE around Mahasamund, and where do the schools sit?",
      paragraphs: [
        "The short answer is that the schools are not here. Mahasamund has government colleges, a medical college, a polytechnic and a long list of CBSE and state board schools, but we have not been able to confirm a single school in the district authorised for the IB or offering a Cambridge or Edexcel IGCSE syllabus. The nearest cluster is in Raipur, about an hour away by road and a little more by bus.",
        "That shapes who asks. A typical family is a government officer, a doctor, an engineer or a business owner who has lived elsewhere and wants a portable qualification for a child who may study abroad. Another is a family whose relatives overseas suggested IGCSE as a stepping stone. A third is a family planning a move to Raipur for Class 9 or 11.",
        "For the first group, tuition is preparation: building English academic writing and maths fluency before the switch. For the second, it is the syllabus itself, taught end to end. For the third, it is continuity, so a child boarding in another city does not fall behind during the long summer and Diwali breaks spent at home in Mahasamund.",
        "Whichever route applies, the tutor's job is the same: know the exact specification, teach to it, and keep a clear written record of what was covered. We do not ghost-write coursework, and we do not suggest that a tutor replaces a school. We suggest that, where a school is an hour away, a good tutor is the nearest source of the syllabus.",
      ],
    },
    {
      heading: "Chhattisgarh Board, CBSE, IB or IGCSE: how do the options compare for Mahasamund students?",
      paragraphs: [
        "Most Mahasamund students study under the Chhattisgarh Board or CBSE, and both lead straight into the Indian entrance-exam system. IB and IGCSE are different in kind, not simply harder: they reward written reasoning, extended coursework and unfamiliar-problem solving more than recall of a fixed textbook.",
        "The table below sets out the five options a family is realistically weighing, and what each asks of a child. None is better in the abstract; the right choice follows the child's intended path after school.",
        "A student aiming for NEET or JEE through the CBSE route has a clear structure already. A student aiming for a university abroad, or for a liberal-arts style course in India, often finds IB or IGCSE a closer fit. A student who is undecided sometimes begins IGCSE subjects online at Class 9 precisely to keep both doors open.",
        "Hindi is the everyday language and Chhattisgarhi is widely spoken at home, which is an advantage for language subjects but means English academic writing needs deliberate practice. That is the single most common thing we are asked to build from scratch in Mahasamund.",
      ],
      table: {
        caption: "Boards a Mahasamund family can realistically weigh",
        columns: ["Board", "How it is assessed", "Presence near Mahasamund", "Suits a family that"],
        rows: [
          ["Chhattisgarh Board (CGBSE)", "Annual state exam on a set syllabus", "Default in most government and many private schools", "Plans to stay within the state system and state-level entrance routes"],
          ["CBSE", "Board exams plus internal marks", "Widespread across the district", "Wants a nationally recognised board and NEET or JEE preparation"],
          ["ICSE / ISC", "Board exam with heavy English and internal weighting", "Very few schools", "Values English and humanities depth"],
          ["IB (PYP, MYP, DP)", "Criteria-based marking, coursework, exams", "Not confirmed locally; Raipur is nearest", "Expects to study abroad or wants inquiry-led learning"],
          ["IGCSE (Cambridge / Edexcel)", "Two-year syllabus, tiered external papers", "Reached through private candidacy or a school elsewhere", "Wants an international Class 10 result before choosing a path"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Mahasamund, and what drives the rate?",
      paragraphs: [
        "IB Gram does not publish fixed prices, and we quote the rate in writing before any booking. A single number would mislead, because the rate moves with things specific to each child, not with where you live in Mahasamund.",
        "The biggest driver is the course. A Higher Level Diploma subject taught by someone who has examined or taught it for years is a different commitment from IGCSE Core Mathematics at Class 9. The second driver is frequency: one lesson a week costs a different monthly figure than an exam-season block of four.",
        "Third is the job itself. A private candidate whose tutor carries the whole syllabus needs more preparation per session than a student who simply needs a weak topic fixed. Fourth is timing: lessons in the final weeks before papers are the most in demand.",
        "Online delivery removes one expense families in a district town often overlook: travel. There is no bus ticket, no hostel rent for a tuition month, and no lost evening. The trial lesson is free, so you can judge the fit before any money is discussed, and if the tutor is wrong we change them without penalty.",
      ],
      bullets: [
        "Subject and level (HL, SL, Core, Extended)",
        "Lessons per week and length of the plan",
        "Whether the tutor teaches the full syllabus or supports a school class",
        "Distance from the exam date",
        "Number of subjects taught by the same tutor",
      ],
    },
    {
      heading: "Online home tuition, local coaching, private tutors or self-study: which works in Mahasamund?",
      paragraphs: [
        "For IB and IGCSE specifically, online one-to-one tuition is the only option that reliably brings a specialist to the child. Local coaching in Mahasamund is oriented to Class 10 and 12 board exams and to NEET or JEE, which use different question styles. A neighbourhood tutor may be excellent at CBSE maths and still never have opened an IB Maths paper.",
        "Self-study works for disciplined students with good materials, especially in IGCSE, where past papers are widely available. It struggles in subjects with marked coursework and in languages, where feedback on speaking and writing is the point.",
        "Online tuition asks two things of the family: a reasonably stable connection and a quiet hour. Power interruptions in the summer months are the main practical risk, which is why we plan lessons outside the hottest afternoon and agree in advance how to reschedule if the supply drops.",
        "We use the word home tuition carefully. Lessons happen at home, on a laptop, with a private tutor. A tutor does not come to your house in Mahasamund.",
      ],
      table: {
        caption: "Study options weighed for Mahasamund students",
        columns: ["Option", "Works well for", "Real advantage", "Where it falls short here"],
        rows: [
          ["Online one-to-one tuition", "Any IB or IGCSE subject and level", "A specialist trained on the exact syllabus", "Needs a steady connection and a quiet hour"],
          ["Local CBSE or state board coaching", "Class 10 and 12 board exams, NEET and JEE drills", "Familiar with local schools and timings", "Different question style from IB and IGCSE"],
          ["Private neighbourhood tutor", "Fixing a weak topic in a school subject", "Convenient and inexpensive", "Rarely trained on an international syllabus"],
          ["Relocating to a Raipur school", "Full-time classroom teaching", "Daily access to teachers and labs", "Cost, distance from family, gaps in holidays"],
          ["Self-study with past papers", "Self-driven IGCSE students", "Flexible and low cost", "No feedback on writing, orals or coursework"],
        ],
      },
    },
    {
      heading: "Mahasamund's school year, festivals, heat and exam sessions",
      paragraphs: [
        "The academic year across Chhattisgarh begins around April or June depending on the board, and Mahasamund's weather sets the rhythm more than any timetable. April and May are severe, with afternoons often too hot to concentrate, so we avoid midday and use early evening instead. The monsoon arrives in June and brings the Mahanadi up, which matters for road travel but not for an online lesson.",
        "Festivals are the second constraint. Hareli in the monsoon month of Shravan, Pola, Teeja, Dussehra, Diwali and the Khallari fair each pull families out of routine. We build a calendar around them at the start rather than discover them a day before a lesson.",
        "IB Diploma examinations run in May, with November for schools that offer retakes. Cambridge IGCSE has May-June and October-November series, and Edexcel adds January. Private candidates must register through an approved centre well in advance, and entry deadlines are earlier than most families expect.",
        "The practical advice is to start teaching at least two terms before the exam, use the hot months for lighter consolidation rather than new topics, and keep the festival weeks for review instead of cancellation.",
      ],
      table: {
        caption: "A Mahasamund study year at a glance",
        columns: ["Window", "Academic activity", "Local conditions", "Tutoring focus"],
        rows: [
          ["January to March", "Edexcel January series; school annual exams", "Cool mornings turning warm", "Timed past papers and error logs"],
          ["April to June", "IB May exams; Cambridge May-June series", "Extreme heat, then monsoon onset", "Final revision, then a lighter break"],
          ["July to September", "New term; coursework and investigations begin", "Monsoon, Hareli and Pola", "Rebuilding foundations and planning coursework"],
          ["October to December", "Cambridge and Edexcel autumn series; retakes", "Dry and pleasant; Diwali", "Steady gap-closing and mock papers"],
        ],
      },
    },
    {
      heading: "Where can a Mahasamund student go after IB or IGCSE?",
      paragraphs: [
        "Indian universities accept IB and IGCSE students, but the route is worth understanding early. The Association of Indian Universities issues equivalence for the IB Diploma and for IGCSE plus a qualifying post-Class 10 stage, and many universities ask for it at admission.",
        "CUET-UG is open to IB Diploma students, and several central and state universities accept it for admission; a student should check each university's published eligibility before choosing subjects. For engineering and medicine, JEE and NEET have their own subject and mark requirements, so IB students aiming there typically take Physics, Chemistry and Mathematics or Biology at Higher or Standard Level with that in mind.",
        "Study abroad is where IB and IGCSE are most directly useful: universities in the UK, Canada, Singapore and elsewhere read IB scores and IGCSE grades without translation. A Mahasamund student planning that path benefits from choosing Diploma subjects that match the intended degree.",
        "Closer to home, the local medical and agriculture colleges, and the wider Chhattisgarh state universities, remain options for students who return to the Indian system after IGCSE. The tutor's role is to keep both paths open until the child is ready to choose.",
      ],
      bullets: [
        "AIU equivalence for IB Diploma and IGCSE-based profiles",
        "CUET-UG eligibility checked university by university",
        "JEE and NEET subject requirements decided before DP choices",
        "Study-abroad applications built on predicted IB or IGCSE grades",
      ],
    },
    {
      heading: "How are IB Maths and the sciences taught online for a Mahasamund student?",
      paragraphs: [
        "Maths is the subject where online tuition translates best, because the screen becomes a shared whiteboard. The tutor and student both write, the student explains each step aloud, and the notes are sent afterwards. For Analysis and Approaches HL, sessions centre on calculus, series, complex numbers and proof; for Applications and Interpretation, on statistics, modelling and careful calculator use.",
        "The sciences need more thought. Physics, Chemistry and Biology each carry an internal investigation, and a student without a school laboratory has to plan experiments that can be done at home or with data from public sources. A tutor helps frame a workable question and explains what the criteria reward, without designing or writing the work.",
        "Data questions are taught with real examples: titration results, motion graphs, population data. Each week the student brings one problem they could not finish, and we use it as the starting point.",
        "For a student from a CBSE background, the most valuable early skill is showing reasoning in words as well as numbers, because IB markers give credit for method even when the final answer is wrong.",
      ],
    },
    {
      heading: "How do Core and Extended IGCSE papers and subject choices work for a Mahasamund student?",
      paragraphs: [
        "IGCSE subjects are usually offered in a Core tier, capped at a lower top grade, and an Extended tier that opens the highest grades. Mathematics, the sciences and a few others have both. A student aiming for IB Diploma Higher Level Maths or Physics should sit Extended.",
        "Most students take five to eight subjects. A sensible Mahasamund combination is Mathematics, two or three sciences, English and a language such as Hindi, with Economics or Business added if the student leans toward commerce. Additional Mathematics is optional but valuable for anyone heading toward Maths Analysis and Approaches.",
        "Cambridge and Edexcel differ in paper structure and command words. A private candidate should choose one board and stay with it, because practising on the wrong papers is a real waste of preparation time.",
        "Entry for private candidates goes through an approved centre, and practical components need particular attention: the alternative-to-practical papers in the sciences are common for private candidates and can be taught very effectively online.",
      ],
    },
  ],

  process: [
    { title: "Tell us the situation", description: "Share the programme or board, subject, level, exam session and whether your child is a private candidate or studying elsewhere." },
    { title: "Receive a shortlist", description: "We suggest tutors who have taught that exact course, with notes on why each one fits." },
    { title: "Take the free lesson", description: "A real topic taught live online, at no cost and with no obligation afterwards." },
    { title: "Agree the plan and rate in writing", description: "The tutor sets out the first month and the rate is confirmed before any booking." },
    { title: "Review and adjust", description: "A written note follows each lesson, regular progress reviews are shared, and a tutor change is easy if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched by syllabus, not label", description: "Course, level and exam board are fixed before any tutor is proposed." },
    { title: "Built for places without a local school", description: "Tutors comfortable teaching a whole subject from scratch when nobody nearby does." },
    { title: "A lesson first, a decision later", description: "The free trial lets you judge the teaching, not the profile." },
    { title: "Coaching, never ghost-writing", description: "Support with understanding and planning, while IAs, essays and coursework stay the student's own." },
    { title: "Parents stay informed", description: "A written note after every lesson and periodic reviews so nothing is a surprise." },
    { title: "Independent and flexible", description: "No tie to any school or exam board, and a tutor swap whenever the fit is wrong." },
  ],

  tutorsIntro:
    "Every tutor profile lists the boards, subjects and levels they have actually taught. For Mahasamund students we lean toward tutors comfortable teaching a full syllabus remotely and explaining it in clear English and, where helpful, Hindi.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Mahasamund?",
      answer:
        "We could not confirm one. No school inside Mahasamund is listed to us as an IB World School or a Cambridge or Edexcel centre, and the nearest cluster is in Raipur, about 56 km away. Because school listings change, check any school directly with the school, the IB or Cambridge. Online tutoring fills the gap for families who stay in Mahasamund.",
    },
    {
      question: "Do your tutors visit homes in Mahasamund?",
      answer:
        "No. Tutors do not visit homes in Mahasamund. Home visits run only in Gurugram and parts of Delhi NCR. In Mahasamund, home tuition means a private, one-to-one lesson that your child takes at home over video, with a tutor based elsewhere in India on Indian Standard Time.",
    },
    {
      question: "What does IB or IGCSE tuition cost for a Mahasamund student?",
      answer:
        "The rate depends on the subject, level, number of lessons and how much preparation the tutor must do. We do not publish prices; the rate is quoted to you in writing before you book. The first lesson is free, and there is no travel or hostel cost because everything is online.",
    },
    {
      question: "Can a student in Mahasamund sit IGCSE as a private candidate?",
      answer:
        "Yes, in principle. Cambridge and Edexcel allow private candidates to enter through an approved exam centre, often in a larger city, and entry deadlines fall months before the papers. IB Gram does not run exams or register candidates, but a tutor can teach the full syllabus and help you plan around the entry dates.",
    },
    {
      question: "My child may move to a Raipur school next year. Can tutoring prepare for that?",
      answer:
        "Yes, and it is one of the most common reasons families here contact us. A tutor can work on English academic writing, maths fluency and the style of IB or IGCSE questions well before the move, so the first term in Raipur is spent learning content instead of adjusting to the format.",
    },
    {
      question: "Will a tutor write my child's Internal Assessment or Extended Essay?",
      answer:
        "No. Tutors coach; they never write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework. They can help a student choose a workable question, understand the criteria and give feedback on the student's own drafts, and the submitted work must be entirely the student's.",
    },
    {
      question: "How do lessons work when power cuts happen in summer?",
      answer:
        "We plan for it. Lessons avoid the hottest afternoon hours, and the tutor agrees in advance how to handle an outage: a short wait, a phone hotspot, or a rescheduled slot at no extra charge. A charged laptop and a backup data connection make a real difference in April and May.",
    },
    {
      question: "Are lessons held in Hindi or English?",
      answer:
        "Mostly English, because IB and IGCSE exams are written in English, but tutors can explain a hard concept in Hindi first when that helps. For Hindi A, Hindi B or Hindi as a second language, the tutor teaches in Hindi. We confirm the language mix in the trial lesson.",
    },
    {
      question: "What is the difference between Cambridge and Edexcel IGCSE?",
      answer:
        "Both are international Class 9-10 qualifications, but their syllabus codes, paper structures and command words differ. Cambridge has its main series in May-June and October-November; Edexcel adds January. A student should choose one board and practise on its papers only, and a tutor can help compare them before entry.",
    },
    {
      question: "Which IB subjects do you teach for Mahasamund students?",
      answer:
        "We cover the main Diploma subjects, including both Maths courses, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, Psychology, English and Hindi, plus TOK and Extended Essay coaching. Availability varies by level and season, so tell us the exact course and we confirm a match before the trial.",
    },
    {
      question: "When should a private candidate start preparing?",
      answer:
        "At least two school terms before the exam, and earlier for a full-syllabus subject like Physics or Chemistry. Entry deadlines for private candidates also come early. Starting in July for a May session gives time to teach, practise papers and keep the hot months light.",
    },
    {
      question: "Can one tutor handle both IB and IGCSE subjects?",
      answer:
        "Sometimes, particularly in Maths or the sciences where the content overlaps, but we usually prefer a specialist for each syllabus. If your child studies IGCSE now and plans IB later, a single tutor can carry continuity. We discuss this in the matching step.",
    },
    {
      question: "Do you teach young children following PYP?",
      answer:
        "Yes, on a lighter basis. PYP has no external exams, so tutoring is usually short, regular sessions in reading, number sense and English expression. For a child from Mahasamund preparing for a Raipur PYP school, we focus on confidence with English before the transition.",
    },
    {
      question: "What if my child does not get along with the tutor?",
      answer:
        "We change the tutor. Tell us what felt wrong and we suggest a replacement, with no penalty and no need to justify it at length. A good fit matters more for a private candidate, who depends on the tutor for the whole syllabus.",
    },
    {
      question: "Is IB Gram connected to any school or exam board?",
      answer:
        "No. IB Gram is an independent tutoring service. We are not affiliated with the International Baccalaureate, Cambridge, Pearson or any school named on this page, and school names appear only to help families understand where international curricula are taught.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp at +91 7439 368 115 or write to support@ibgram.com with the programme, subject, level and exam session. We reply with a tutor shortlist and arrange a free trial lesson at a time that suits your evening routine in Mahasamund.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "Every Indian city IB Gram currently covers." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where tutors visit students at home." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How IB Gram matches tutors across the Diploma, MYP and PYP." },
    { label: "IGCSE tuition guide", href: "/igcse/", description: "Cambridge and Edexcel subjects, tiers and choosing between them." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects and the Core, explained step by step." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and what they mean for grades." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition in plain words." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject, board and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us and book a free lesson." },
    { label: "IB and IGCSE tutoring in Raipur", href: "/raipur/", description: "The closest city with IB and Cambridge schools." },
    { label: "IB and IGCSE tutoring in Bhilai", href: "/bhilai/", description: "Another Chhattisgarh city served fully online." },
    { label: "IB and IGCSE tutoring in Korba", href: "/korba/", description: "A Chhattisgarh industrial city covered the same way." },
  ],

  closingHeading: "Book a free trial lesson with an IB or IGCSE tutor for Mahasamund",
  closingBody:
    "Send us the subject, the level and the exam date you are working toward. We will find a tutor who has taught it, schedule a free lesson for an evening that suits your household, and tell you honestly whether online tuition is the right fit. There is nothing to pay for that first session and nothing to sign.",
};
