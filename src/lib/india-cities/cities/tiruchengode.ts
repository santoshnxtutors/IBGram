import type { CitySeoPage } from "../types";

/**
 * /tiruchengode/ - IB and IGCSE tutoring page for Tiruchengode, Namakkal district, Tamil Nadu. No IB or
 * Cambridge/Edexcel school inside the town could be confirmed, so stripSchools is empty and the clusters
 * point at Erode's neighbours, Coimbatore, Tiruppur/Palladam, Salem's Chennai and Kodaikanal options
 * (names verified on the Erode, Salem and Coimbatore pages). Online only.
 */
export const tiruchengode: CitySeoPage = {
  slug: "tiruchengode",
  countryName: "Tiruchengode",
  countryNameLong: "Tiruchengode, Tamil Nadu",
  demonym: "Tiruchengode",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Temple-car festival weeks, Pongal and the Namakkal-style board-year rush shape when a Tiruchengode student can take a lesson",
  lastUpdated: "2026-09-21",
  geo: { latitude: 11.3833, longitude: 77.8947 },
  wikipedia: "https://en.wikipedia.org/wiki/Tiruchengode",
  alternateNames: ["Tiruchengodu", "Tiruchengode Namakkal"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Tiruchengode | Online Tuition at Home",
  metaDescription:
    "Tiruchengode IB and IGCSE students can study with live one-to-one online tutors from home, Cambridge and Edexcel included. Book a free lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Tiruchengode",
  heroEyebrow: "IB & IGCSE TUTORS FOR TIRUCHENGODE STUDENTS",
  heroSubtitle:
    "Searching for home tuition in Tiruchengode for an IB or IGCSE course? The lesson is delivered online instead: a private, live class with a tutor who knows your child's syllabus, taken at a desk at home. Nobody rides out from Salem or Erode. Send us the subject, level and exam session, and you will watch a first lesson before paying anything.",
  primaryKeyword: "IB and IGCSE tutors in Tiruchengode",
  imageAltText: "A Tiruchengode student at a study desk following an IB Maths lesson with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Tiruchengode",
    "IGCSE tutor Tiruchengode",
    "IB home tuition Tiruchengode",
    "IGCSE home tuition Tiruchengode",
    "IB private tuition Tiruchengode",
    "IB online tuition Tiruchengode",
    "IGCSE online tuition Tiruchengode",
    "IB Maths tutor Tiruchengode",
    "IGCSE Maths tutor Tiruchengode",
    "IB Physics tutor Tiruchengode",
    "IB Chemistry tutor Tiruchengode",
    "IB Biology tutor Tiruchengode",
    "IB DP tutor Tiruchengode",
    "IB MYP tutor Tiruchengode",
    "IB PYP tutor Tiruchengode",
    "IB tutor Namakkal district",
    "IGCSE tutor Elayampalayam",
    "IB tutor Sankagiri",
    "IB tutor Tiruchengode Tamil Nadu",
  ],

  heroTrustPoints: [
    "The tutor is picked because they recently taught your child's own course, not because of a general reputation",
    "Everything runs on video; a tutor at your doorstep is possible only in Gurugram and parts of Delhi NCR",
    "You get a few written lines after each lesson describing what was done",
    "No link to any school, examining body or company named on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The IB from primary to Diploma" },
    { value: "Cambridge & Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "Same clock as school" },
    { value: "Free trial", label: "First lesson costs nothing" },
  ],

  intro: {
    heading: "A town of temples, lorry bodies and NEET batches, asking about the IB",
    paragraphs: [
      "Tiruchengode is known for the Ardhanareeswarar temple on its hill, a large road-transport and lorry-body industry, powerlooms and a wide belt of engineering colleges around Elayampalayam. Namakkal, next door, has become a byword for residential NEET and JEE schooling. Local schools follow the Tamil Nadu State Board, Matriculation and CBSE. We could not confirm any school inside Tiruchengode for the IB or for Cambridge or Edexcel IGCSE, and none is named here.",
      "Yet queries about IB and IGCSE tutors in Tiruchengode arrive steadily. Behind them are transport and engineering business families with relatives in Dubai or Singapore, parents of children at a boarding school in the Nilgiris or Kodaikanal who want term-break support, and households considering a shift to Coimbatore or Bengaluru who would like the child to arrive already comfortable with the syllabus.",
      "Because Salem and Erode are both within an hour or so and Coimbatore a little more, some people expect a tutor to turn up at the door. That does not happen. IB Gram tutors teach online from around India; visits to a house are restricted to Gurugram and parts of Delhi NCR. A Tiruchengode student instead gets live, private lessons on a laptop, on Indian Standard Time.",
      "The tutor teaches, questions and marks. Any Internal Assessment, Extended Essay, TOK essay or coursework is written by the student alone.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Families linked to the Gulf and Singapore, boarders on break, online-school students",
      "Live private lessons at home on a laptop, never a visit to your address",
      "A free first lesson before any figure is mentioned",
    ],
  },

  programmesIntro:
    "The nearest IB campuses are a long drive away, so many Tiruchengode families first meet these programmes on a relative's phone screen or a school brochure from Coimbatore. Below is how each stage works and where it usually shows up locally.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Six themes such as where we are in place and time guide units of inquiry, and pupils choose an issue to investigate for the closing Exhibition. Skills like questioning and reflecting are taught alongside reading and number.",
      countryNote:
        "Here it tends to be a younger child boarding elsewhere, with a light weekly lesson keeping reading and maths thinking warm through the break.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are graded on published criteria, linked by key concepts, and each student finishes with a Personal Project of their own choosing.",
      countryNote:
        "A Tiruchengode student from a Samacheer or Matriculation classroom usually needs to shift from learning answers by heart to explaining them in their own words.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects combine with the Extended Essay, TOK and CAS. Written papers in May carry most of the grade, and internally assessed work adds the rest.",
      countryNote:
        "Locally, a Diploma candidate is registered through a boarding school elsewhere or an online provider, so the tutor may take a whole Higher Level unit from first principles.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "At least two Diploma courses are paired with a career-related study, personal and professional skills and a reflective project, aimed at students heading into applied fields.",
      countryNote:
        "Almost unknown around Namakkal; where it appears it comes from an online provider, and we cover the Diploma courses inside it.",
    },
  ],

  subjectsIntro:
    "Give us a syllabus code and a level and we look for someone who has recently taught exactly that. We then ask what the student has covered, what the school or provider will set next, and which assessment is closest.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus, vectors and proof, with attention to the Paper 3 style that JEE drilling seldom trains." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, financial and geometric models and a graphic calculator used fluently, a fit for business and design paths." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through to fields and nuclear ideas, with an investigation planned around a variable the student can actually measure." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Amount of substance, bonding, rates, equilibrium and organic routes, where a few problems daily beats a long weekly session." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, inheritance, ecology and body systems, with each answer built around the exact command word." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams that are labelled correctly and matched to a live example, plus calculation papers at Higher Level." },
    { name: "IB Business Management", levels: "HL / SL", description: "Models applied to a case, well suited to students who grow up around family transport and textile firms." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and networks, with a solution project that needs many logged hours of coding." },
    { name: "IB Psychology", levels: "HL / SL", description: "Research methods and the approaches to behaviour, with a simple experiment designed for the internal assessment." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Reading unseen texts closely, comparing works in an essay and preparing the recorded oral." },
    { name: "IB Tamil A", levels: "HL / SL", description: "Tamil is the household language, so the work is literary analysis and essay writing to IB criteria, not fluency." },
    { name: "IB Hindi B", levels: "SL / HL", description: "A language-acquisition course for students who meet Hindi mainly in school, covering oral, reading and writing tasks." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Cauvery water, dry-zone agriculture and industrial effluent supply Kongu-region case studies." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Prescribed titles argued against real examples, with the tutor taking the sceptic's side." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel cover similar ground on different papers, tiers and calendars. Cambridge sits in May-June and October-November; Edexcel has a January series as well. We identify the board before touching a topic.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended reaches the top grades, and marks depend on the method shown as well as the answer." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early differentiation and trigonometric identities, a genuine bridge into IB Maths AA." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Near-identical topics presented in Edexcel's own wording, practised on board papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Units, equation handling and the practical-skills paper, which repays regular short drills." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, electrolysis and organic chemistry hold most of the marks, alongside experiment planning." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Enzymes, inheritance and transport, with long answers organised deliberately." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions extended into chains of reasoning, with evaluation as the Extended-tier separator." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, trace tables and Boolean logic learned by writing and running small programs." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Summary, directed writing and composition, each rehearsed against the clock." },
    { name: "IGCSE Tamil as a Second Language", levels: "Grade 9-10", description: "Structured reading and writing for students whose exam centre registers Tamil." },
  ],

  regionsTitle: "Tiruchengode and the towns around it",
  regionsIntro:
    "Lessons are online, so these places matter for context: where schools and coaching clusters are, and which routes and festivals reshape an evening.",
  regions: [
    { name: "Tiruchengode town centre", note: "The bazaar and temple-hill area, with most private schools and tuition classes a short ride away." },
    { name: "Elayampalayam", note: "The engineering-college belt, home to Vivekanandha institutions and many teaching families." },
    { name: "Sankagiri Road", note: "The route towards Sankagiri and Salem, lined with workshops, transport yards and lorry-body units." },
    { name: "Vaiyappamalai", note: "A hilltop temple village close by, whose families often come into town for schools." },
    { name: "Pallipalayam", note: "A powerloom and textile town on the Cauvery, across the river from Erode district." },
    { name: "Kumarapalayam", note: "A neighbouring textile town with a steady mix of mill and business households." },
    { name: "Namakkal", note: "The district capital, famous for residential NEET and JEE schools and for egg and transport businesses." },
    { name: "Sankagiri", note: "A historic fort town on the Salem side with its own schools and small industry." },
    { name: "Paramathi Velur and the Cauvery bank", note: "An agricultural stretch by the river where evening power supply can be uneven." },
  ],

  schoolDisclaimer:
    "None of the schools inside Tiruchengode could be confirmed by us for the IB or for Cambridge or Edexcel IGCSE, so this page carries no school strip. Schools named below are in other towns and are given as background; check each one's present curriculum with the school. IB Gram has no connection with them, the IB, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Tiruchengode and Namakkal district",
      note: "Schooling here is Tamil Nadu State Board, Matriculation and CBSE, with a strong residential NEET and JEE sector around Namakkal. We found no IB or IGCSE school in the district.",
      schools: [],
    },
    {
      city: "Nearby: Coimbatore",
      note: "About 130 kilometres away, Manchester International School offers the IB continuum and Cambridge IGCSE, and Chinmaya International Residential School teaches the IB Diploma to boarders.",
      schools: ["Manchester International School, Coimbatore", "Chinmaya International Residential School"],
    },
    {
      city: "Nearby: Tiruppur and Palladam",
      note: "To the south-west, TIPS Tiruppur and SCAD World School at Palladam teach Cambridge programmes, a shorter journey than Coimbatore for some Kongu families.",
      schools: ["TIPS Tiruppur (The Indian Public School)", "SCAD World School, Palladam"],
    },
    {
      city: "Nearby: Kodaikanal",
      note: "Kodaikanal International School is a long-established IB World School in the hills, a boarding choice for Tamil Nadu families, particularly for the Diploma.",
      schools: ["Kodaikanal International School"],
    },
    {
      city: "Nearby: Chennai and Bengaluru",
      note: "Both are many hours away. Chennai holds Tamil Nadu's largest cluster of IB and IGCSE schools and Bengaluru has a comparable tech-corridor cluster, so each means boarding or relocation.",
      schools: ["Gateway International School, Chennai", "Stonehill International School, Bengaluru"],
    },
  ],

  modesIntro:
    "Tiruchengode lessons are all online, one to one. The choice is the rhythm: a steady weekly slot, a block during a boarding school's break, or an exam-focused run.",
  modes: [
    {
      title: "Steady weekly class",
      description:
        "One fixed time each week with the same tutor, moving through the course with papers set and marked in between.",
      bullets: [
        "Same tutor the whole way",
        "Past papers on a shared screen",
        "Any IB programme or IGCSE board",
        "Moved when a temple festival or bandh closes roads",
      ],
    },
    {
      title: "Break-time blocks",
      description:
        "Several sessions a week across a boarding school's holiday, to revisit weak units and preview the next term.",
      bullets: [
        "Set to the real holiday dates",
        "More sessions in less time",
        "Notes you can pass to the school",
        "A light check-in during term",
      ],
    },
    {
      title: "Exam-run practice",
      description:
        "Timed papers and quick, itemised feedback in the weeks before May, October-November or January.",
      bullets: [
        "Marked to the current scheme",
        "Repeated errors logged",
        "Best begun three weeks early",
        "Planned around local holidays",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools can a Tiruchengode family actually reach?",
      paragraphs: [
        "Nothing in Tiruchengode itself, as far as we could verify. The town's schools follow the State Board, Matriculation or CBSE, and the neighbouring Namakkal district is better known for residential exam-preparation schools than for international curricula. That leaves the family looking at a map of options in surrounding cities.",
        "Coimbatore, about 130 kilometres away, offers Manchester International School, which runs the IB continuum and Cambridge IGCSE, and Chinmaya International Residential School, which teaches the IB Diploma to boarders. Closer to the south-west, TIPS Tiruppur and SCAD World School at Palladam teach Cambridge programmes. In the hills, Kodaikanal International School is an IB World School with boarding.",
        "Salem and Erode, the two big towns beside Tiruchengode, have not given us a confirmed school either. So each choice above is a boarding or relocation decision, not a school run.",
        "Here is the table of options we could confirm.",
      ],
      table: {
        caption: "Confirmed international-curriculum schools reachable from Tiruchengode",
        columns: ["School", "Place", "Curriculum recorded", "Route"],
        rows: [
          ["Manchester International School", "Coimbatore", "IB continuum and Cambridge IGCSE", "Boarding or relocation"],
          ["Chinmaya International Residential School", "Near Coimbatore", "IB Diploma", "Boarding"],
          ["SCAD World School", "Palladam", "Cambridge programmes", "Boarding or relocation"],
          ["Kodaikanal International School", "Kodaikanal", "IB World School", "Boarding"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed in Tiruchengode",
        "Coimbatore, Palladam and Kodaikanal are the nearest verified options",
        "Every option is a boarding or relocation choice",
        "Online tutoring serves the child who stays at home",
      ],
    },
    {
      heading: "What changes for a Namakkal-belt student moving from Samacheer or CBSE to the IB or IGCSE?",
      paragraphs: [
        "Students here are used to long hours and exact preparation, and many have been trained for entrance tests since Class 8. That discipline carries over. What shifts is the shape of a good answer. A full-mark response in the IB or IGCSE explains a reason, weighs one idea against another or applies a rule to a case that was not in the book.",
        "Mathematics shows the change soonest. Entrance-style preparation trains speed on recognisable patterns; IB Analysis and Approaches and IGCSE Extended set problems in unfamiliar clothing and ask for a line of reasoning, and HL Paper 3 expects an extended investigation. Some students need to slow down on purpose before they get faster again.",
        "Practical science also differs. There is no record notebook to fill in; instead an IA investigation the student designs, or, at IGCSE, a practical-skills paper about planning and analysing experiments.",
        "The medium matters, too. Tamil at home and English-medium in Matriculation classes is common, but IB and IGCSE papers need extended English writing in most subjects.",
      ],
      table: {
        caption: "State Board, CBSE, IGCSE and IB at a glance in Tiruchengode",
        columns: ["Feature", "TN State / Matriculation", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["What earns top marks", "Exact recall", "Recall plus application", "Structured reasoning", "Argument, evaluation, method"],
          ["Lab work", "Record and viva", "Practical file", "Practical-skills paper", "Investigation designed by the student"],
          ["Medium of paper", "Tamil or English", "English or Hindi", "English", "English for most subjects"],
          ["Main exam months", "March-April", "February-April", "May-June, Oct-Nov, Jan (Edexcel)", "May"],
        ],
      },
      bullets: [
        "Discipline carries over; the answer style changes",
        "Maths problems appear in unfamiliar clothing",
        "Practical science is assessed differently",
        "Extended English writing is needed in most subjects",
      ],
    },
    {
      heading: "What goes into the fee for IB or IGCSE lessons in Tiruchengode?",
      paragraphs: [
        "Fees are not listed here because they are settled per student. The starting point is the level: IB Higher Level Physics from someone who has recently taught it is a different proposition from IGCSE Core Biology. Then come the length of a session, how many times a week, and whether the tutor has taught precisely your specification.",
        "The size of the town does not enter into it. Someone teaching a Tiruchengode student from Chennai or Pune charges as they would for a student in Mumbai, and since nobody travels, there is no fare to add.",
        "Some families in the Kongu belt take a second weekly session in the last two months before the exam. That doubles the weekly cost for that period, so it helps to ask early for an outline of the planned lesson count.",
        "A written rate arrives after the free trial, before any booking. A pause for exam weeks, a wedding or a temple festival is free of charge.",
      ],
      bullets: [
        "Level, session length and frequency drive the figure",
        "Recent teaching of your exact specification matters",
        "No fare and no town-size premium",
        "Written rate after the free lesson",
      ],
    },
    {
      heading: "Is an online tutor better than a Namakkal coaching school, a local home tutor or self-study?",
      paragraphs: [
        "It depends on the exam. For NEET, JEE, Board results and Samacheer subjects, the Namakkal and Salem circuit is hard to beat, with structured timetables and large batches. For an IB Diploma Higher Level course or a Cambridge Extended paper, though, no such batch exists, because the numbers are too small to fill one.",
        "A local home tutor can be an excellent teacher of school-level content. The scarce item is a person who has recently taught the international specification and can mark a practice paper the way an examiner would.",
        "Self-study with past papers works for some IGCSE Mathematics students. It works badly for Internal Assessment planning, Extended Essay structure and extended-response technique, all of which improve fastest with a reader.",
        "An online one-to-one tutor is drawn from a national pool and matched to your course. The table lines up the routes.",
      ],
      table: {
        caption: "Ways to get IB and IGCSE help from Tiruchengode",
        columns: ["Route", "Knows the specification?", "Attention", "Limit"],
        rows: [
          ["Namakkal or Salem NEET and JEE batch", "No", "Large group", "Different exam and possible residence"],
          ["Local home tutor", "Sometimes at IGCSE level", "One to one", "Rarely IB-trained"],
          ["Self-study with past papers", "Partly", "None", "Weak on IAs and essays"],
          ["Online one-to-one tutor", "Yes, matched to the course", "One to one", "Needs steady broadband"],
        ],
      },
      bullets: [
        "Namakkal batches serve entrance exams superbly, not IB",
        "Few local tutors have taught the specification",
        "Self-study leaves IAs and essays unreviewed",
        "Online is the option that matches the course",
      ],
    },
    {
      heading: "How do temple festivals, Pongal and the hot dry months shape a Tiruchengode study year?",
      paragraphs: [
        "The hot season, roughly March to June, is dry and windy in this part of the Kongu region, and afternoons can be punishing. Lessons are placed in the morning or after sunset, and the laptop battery is kept charged for power cuts. The northeast monsoon from October adds cooler, wetter weeks.",
        "Temple festivals at the Ardhanareeswarar hill and in nearby villages bring processions, road closures and crowds, and families often travel. Pongal in January is the longest social break, followed by Tamil New Year in April and Aadi Perukku by the Cauvery in July or August. Deepavali brings another pause.",
        "Business calendars matter. Transport and powerloom households run on order cycles, and evenings can vanish in a rush. A weekend slot works well for many.",
        "Exams do not move: IB papers begin in May, Cambridge sits in May-June and October-November, and Edexcel adds January. We plan back from those dates.",
      ],
      table: {
        caption: "The study year around Tiruchengode",
        columns: ["Months", "Local conditions", "How lessons adjust"],
        rows: [
          ["January", "Pongal; Edexcel January series", "A planned pause, then paper practice"],
          ["March to June", "Hot, dry, windy; IB and Cambridge May papers", "Morning or late slots, timed papers"],
          ["July to September", "Aadi Perukku, warm, some showers", "Steady weekly lessons"],
          ["October to December", "Northeast monsoon, Deepavali; Cambridge Oct-Nov papers", "Deepavali pause, then revision"],
        ],
      },
      bullets: [
        "Afternoon lessons are avoided in the hot months",
        "Pongal is the longest planned pause",
        "Temple festivals can close roads and shift plans",
        "Exam dates stay fixed",
      ],
    },
    {
      heading: "Where do Tiruchengode IB and IGCSE students go after school?",
      paragraphs: [
        "Locally, the engineering colleges around Elayampalayam, among them K.S.R. institutions and Vivekanandha colleges, give many students a base close to home. Beyond that, Coimbatore, Salem and Chennai draw students to established colleges, and some head to Bengaluru or overseas.",
        "For Indian degrees, the route runs through equivalence. The Association of Indian Universities recognises the IB Diploma and, with documentation, IGCSE together with a qualifying Class 12. CUET-UG opens central universities to non-Indian-board students. JEE and NEET carry separate eligibility conditions, which should be read from the latest official notice before subjects are fixed.",
        "For study abroad, predicted grades issued in autumn of the last year are the first thing a university sees. They depend on internal exams and coursework across Class 11 and early Class 12, so steady effort counts.",
        "Tutors keep to subject learning and leave counselling and applications to the school or a qualified counsellor.",
      ],
      bullets: [
        "Local options include K.S.R. and Vivekanandha colleges near Elayampalayam",
        "AIU equivalence is required for Indian degrees",
        "CUET-UG is an open route for IB students",
        "Predicted grades matter for overseas applications",
      ],
    },
    {
      heading: "Which IB Maths route and IGCSE tier should a Tiruchengode student choose?",
      paragraphs: [
        "Analysis and Approaches suits a student heading towards engineering, physical science, computing or mathematics, because it leans on algebra, calculus and proof. Applications and Interpretation suits economics, psychology, business or design, with more statistics, modelling and technology.",
        "Higher Level in either goes deeper, and in Analysis and Approaches it is a heavy calculus course. Standard Level is a sensible choice when Mathematics supports another main subject. The deciding factor should be the entry requirements of the courses aimed at, not only current marks.",
        "In IGCSE, the same decision appears as Core against Extended, or Foundation against Higher at Edexcel. Extended prepares for IB Higher Level; Core suits a steadier route.",
        "A diagnostic lesson gives the family some evidence, so the choice is made calmly.",
      ],
      bullets: [
        "AA suits engineering and physical science plans",
        "AI suits economics, psychology and business plans",
        "Extended tier prepares for IB Higher Level",
        "Base the choice on course requirements",
      ],
    },
  ],

  tutorsIntro:
    "Our tutors live in other Indian cities and teach over video, so none need to be in Namakkal district. What we check is whether each has recently taught your child's syllabus at your child's level.",

  process: [
    { title: "Describe the course", description: "Programme or board, subject, level, the school or online provider and the exam sitting being aimed at." },
    { title: "Look at the shortlist", description: "Tutors picked for recent teaching of that precise course, with a line on why." },
    { title: "Watch a free lesson", description: "A live online session on a real topic before any rate is discussed." },
    { title: "Read the outline", description: "A short written plan of topics, pace and how progress will be reported." },
    { title: "Settle into a routine", description: "A fixed weekly slot, flexed around exams, festivals and term dates." },
  ],

  whyPoints: [
    { title: "Chosen for your course", description: "The tutor is matched to your syllabus code and level, not to a broad IB or IGCSE label." },
    { title: "Built for a town with no IB school", description: "Tutors expect to teach a whole subject where no local classroom does." },
    { title: "Judge it yourself", description: "The free live lesson lets you decide from what you saw." },
    { title: "Coaching only", description: "Feedback on IAs and essays, with the writing left to the student." },
    { title: "Progress you can read", description: "A note after every session and a review every few weeks." },
    { title: "Easy to change", description: "No long contract, and a new tutor if the first is not right." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Tiruchengode?", answer: "None that we could verify. Tiruchengode schools follow the Tamil Nadu State Board, Matriculation or CBSE. The nearest confirmed international schools are around Coimbatore, Palladam and Kodaikanal, so families here mostly follow an IB or IGCSE course through boarding or an online school, with a tutor for the harder subjects." },
    { question: "Can a tutor come to the house in Tiruchengode?", answer: "No. Tutors do not visit homes in Tiruchengode, even though Salem and Erode are nearby; in-person home tuition exists only in Gurugram and parts of Delhi NCR. Here, tuition at home is a live private video lesson at your child's own desk, one to one, in Indian Standard Time." },
    { question: "What does an IB or IGCSE lesson cost in Tiruchengode?", answer: "A rate is set after the free lesson, once level, session length, weekly frequency and the tutor's experience with your syllabus are known. The size of the town does not change it, and a pause for exams, a wedding or a temple festival is not charged." },
    { question: "Which schools near Tiruchengode teach the IB or IGCSE?", answer: "Manchester International School in Coimbatore runs the IB continuum and Cambridge IGCSE, Chinmaya International Residential School teaches the IB Diploma to boarders, SCAD World School in Palladam and TIPS Tiruppur teach Cambridge programmes, and Kodaikanal International School is an IB World School. We list them for context only; we are not affiliated with them." },
    { question: "How far is Coimbatore, and could we commute?", answer: "It is roughly 130 kilometres, so a daily commute is not realistic. Families who want a Coimbatore school usually arrange boarding or relocate, while those who prefer to stay in Tiruchengode study online, with a tutor teaching the subjects that are hardest to manage alone." },
    { question: "My son studies in a Namakkal residential school. Can he take up IGCSE?", answer: "Yes, but the timetables of a residential entrance-exam school leave little space, so we usually plan short weekend sessions and holiday blocks. Class 9 is the natural starting point, and the tutor begins with a diagnostic lesson to see how much room the routine allows." },
    { question: "Which IB Diploma subjects can your tutors cover?", answer: "Both Maths courses, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, Psychology, English A, Tamil A, Hindi B, Environmental Systems and Societies and TOK, at HL and SL where the subject allows. If yours is missing, ask first and we will say honestly whether a suitable tutor exists." },
    { question: "Will the tutor write my child's IA or Extended Essay?", answer: "No. A tutor clarifies criteria, helps narrow a question, checks a plan and gives honest comments on a draft. The writing, the data and the conclusions belong to the student, as the IB requires, and we keep to that even when a deadline is close." },
    { question: "Where would my child sit the exams?", answer: "At an authorised centre. The IB, Cambridge and Edexcel register candidates only through schools or approved centres, and we could not confirm one in Tiruchengode. Families often register through a school in Coimbatore or Chennai or through a private-candidate centre, and closing dates come months before the series." },
    { question: "Is MYP and PYP support available too?", answer: "Yes. MYP support covers criterion-based writing, science reports and the Personal Project, as coaching only. PYP support is lighter, aimed at reading, number sense and the Exhibition. A boarder often uses a concentrated block of sessions in the school holiday." },
    { question: "What happens around Pongal and temple festivals?", answer: "Lessons pause for the main days, and when festival crowds close roads or families travel, sessions are moved within the week. Pongal is usually the longest break, so we set the plan to make up ground before the exam months without cramming." },
    { question: "How do we cope with hot afternoons or power cuts?", answer: "Choose morning or evening slots in the hot months, keep the laptop charged and have a phone hotspot ready. If a lesson is lost, it is rebooked in the same week." },
    { question: "When is the best time to start?", answer: "As near the start of the course as possible: Class 11 for the Diploma and Class 9 for IGCSE. That leaves time to build habits calmly. A late start is still workable, with a shorter plan built on a diagnostic lesson and the highest-value topics first." },
    { question: "What if my child and the tutor do not click?", answer: "Say so and a different tutor is introduced. Reviews every few weeks are there to catch a poor fit early, nothing is signed for the long term, and the note after each session shows what is actually being achieved." },
    { question: "How do I get the free lesson booked?", answer: "Send the subject, level, board or programme and a few convenient times to support@ibgram.com or on WhatsApp to +91 7439 368 115. A shortlist and a trial slot follow. The trial is real teaching, and you decide whether to continue only afterwards." },
    { question: "Is IB Gram linked with any school or examining body?", answer: "No. IB Gram works independently of the International Baccalaureate, Cambridge, Pearson Edexcel and every school named here. Schools are named to help families see the options, and nothing on this page is an endorsement or a partnership." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online tuition works from town to town." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only place tutors visit a home in person." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers and subjects." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The DP structure and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP inquiry units and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA versus AI explained." },
    { label: "Browse tutors", href: "/tutors/", description: "Search by subject and level." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your details and book a trial." },
    { label: "IB and IGCSE tutors in Salem", href: "/salem/", description: "The large city about an hour to the east." },
    { label: "IB and IGCSE tutors in Erode", href: "/erode/", description: "The Cauvery-side city just across the river." },
    { label: "IB and IGCSE tutors in Coimbatore", href: "/coimbatore/", description: "The nearest city with confirmed IB and IGCSE schools." },
  ],

  closingHeading: "Start with a free IB or IGCSE lesson from Tiruchengode",
  closingBody:
    "Tell us what your child is studying, at which level, and which evenings or weekend hours are free. A matched tutor and a trial slot come back, and the lesson takes place on screen. Continue only if it helped. Contact support@ibgram.com or WhatsApp +91 7439 368 115.",
};
