import type { CitySeoPage } from "../types";

/**
 * /magadi/ - IB and IGCSE tutoring page for Magadi, west of Bengaluru, Karnataka. No school in the
 * town could be confirmed as teaching the IB or Cambridge/Edexcel IGCSE, so stripSchools is empty
 * and school clusters point honestly to Bengaluru. Online-only delivery: home visits run only in
 * Gurugram and parts of Delhi NCR. Rendered with the shared CountryLanding layout.
 */
export const magadi: CitySeoPage = {
  slug: "magadi",
  countryName: "Magadi",
  countryNameLong: "Magadi, Karnataka",
  demonym: "Magadi",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Timed to avoid the Magadi Road evening crawl, Dasara and Ugadi breaks, and the weeks when your child's school is mid-examination",
  lastUpdated: "2026-09-21",
  geo: { latitude: 12.9591, longitude: 77.2288 },
  wikipedia: "https://en.wikipedia.org/wiki/Magadi",
  alternateNames: ["Magadi Bangalore", "Magadi Ramanagara", "Magadi Bengaluru South", "Magadi Taluk"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Magadi | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Magadi, west of Bengaluru: PYP, MYP, DP and Cambridge or Edexcel IGCSE, private live lessons at home, with a free first class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Magadi",
  heroEyebrow: "LIVE ONE-TO-ONE IB AND IGCSE LESSONS FOR MAGADI HOMES",
  heroSubtitle:
    "Magadi sits on the western edge of the Bengaluru region, yet an IB or IGCSE student here can still lose two hours a day to Magadi Road traffic, so home tuition in Magadi works best as a live video lesson at your own desk. IB Gram tutors do not visit homes in Magadi; that service exists only in Gurugram and parts of Delhi NCR. No school in the town is confirmed for the IB or Cambridge, and the tutor fills that gap from wherever in India they teach.",
  primaryKeyword: "IB and IGCSE tutors in Magadi",
  imageAltText: "A Magadi student at a desk in a family home reading an IB Physics question while a tutor explains on a laptop screen",
  secondaryKeywords: [
    "IB tutor Magadi",
    "IGCSE tutor Magadi",
    "IB home tuition Magadi",
    "IGCSE home tuition Magadi",
    "IB private tuition Magadi",
    "IB Maths tutor Magadi",
    "IGCSE Maths tutor Magadi",
    "IB Physics tutor Magadi",
    "IB Chemistry tutor Magadi",
    "IB Biology tutor Magadi",
    "IB DP tutor Magadi",
    "IB MYP tutor Magadi",
    "IB PYP tutor Magadi",
    "IGCSE online tuition Magadi",
    "Cambridge IGCSE tutor Magadi",
    "IB tutor Magadi Road",
    "online IB tutor Savandurga",
    "IGCSE tutor Kudur",
    "IB tutor Magadi Bengaluru South",
  ],

  heroTrustPoints: [
    "Each shortlist begins with your child's syllabus code, level and board, not with a loose IB or IGCSE label",
    "Everything runs on a screen; tutors coming to the door is a Gurugram and Delhi NCR arrangement",
    "A complete first class costs nothing and commits you to nothing",
    "IB Gram is independent of every school and exam body mentioned here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "All IB stages" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "IST", label: "No time difference" },
    { value: "First class free", label: "Try it, then decide" },
  ],

  intro: {
    heading: "Magadi families and the IB and IGCSE question",
    paragraphs: [
      "Magadi is an old town with new neighbours. Legend credits a Chola king with founding it in 1139, the Hoysalas and Vijayanagara rulers held it, and Kempe Gowda's family made it a seat of power in the shadow of Savandurga. Today it is a taluk headquarters of roughly twenty-eight thousand people, a short drive west of Bengaluru, and its streets increasingly carry families whose working lives are tied to the city.",
      "That closeness creates an odd situation. Bengaluru has the state's densest cluster of IB and Cambridge schools, yet they lie on the far side of a long, slow road, and a daily commute from Magadi is rarely sensible for a young child. Locally, schools follow the Karnataka state board or CBSE, and we could not confirm any in Magadi that teaches the IB or an international IGCSE.",
      "Parents who write to us come from a mixed set of backgrounds. Some work in Bengaluru's software, garment or manufacturing sectors and bought a home in Magadi for the price, while their child attends or hopes to attend an IB school in the city. Others have returned from abroad and want continuity. A few are local families aiming a child at a foreign degree.",
      "In every case the tutor takes on more than extra practice. Where the school is far or absent, the tutor often sets the order of topics, chooses the questions and marks them honestly. IB Gram has no tie to any school, board or examining body named here, and tutors never write assessed work such as an Internal Assessment or Extended Essay.",
    ],
    bullets: [
      "IB tutoring from the primary years through the Diploma, for a taluk without an IB school",
      "Cambridge and Pearson Edexcel IGCSE by paper code and tier",
      "Private video lessons in Indian Standard Time",
      "Notes after each class and a plan once the trial is done",
      "No tutor visits in Magadi; visits happen only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "As far as we can confirm, Magadi teaches none of the four IB programmes. They arrive by other routes: a Bengaluru school a long drive away, a boarding or relocation decision, or a plan to start IGCSE at Grade 9. Here is what each stage tends to look like from a Magadi doorstep.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Young pupils follow transdisciplinary themes through units of inquiry, with a pupil-led Exhibition in the final year. Because there are no external marks, valuable tutoring is gentle: reading practice, easy arithmetic and learning to turn a hunch into a question worth investigating.",
      countryNote:
        "A Magadi parent asking about PYP is commonly weighing a Bengaluru school and wants the child comfortable with inquiry-style work before admission.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Four criteria, each marked in bands, govern every MYP subject, and the Personal Project closes Year 5. A pupil can understand the content perfectly and still lose marks by answering a neighbouring question, so tutoring begins by decoding the criteria.",
      countryNote:
        "Children from Magadi who attend an MYP school in Bengaluru often need extra help on days when travel eats into homework time.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma student takes six subjects, three at Higher Level, alongside Theory of Knowledge, an Extended Essay and a service strand. Internal assessments feed most subject grades and the main papers are written in May.",
      countryNote:
        "Diploma students from Magadi either board in Bengaluru or travel daily, and in both cases weekend and late-evening online classes protect the study time that traffic would take.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses join a career-related study, a project and a skills strand. Few Indian schools run it, though the Diploma courses within are taught fully.",
      countryNote:
        "CP enquiries from Magadi are rare; when they come, tutoring goes to the Diploma subjects inside the chosen pathway.",
    },
  ],

  subjectsIntro:
    "Students coming from Karnataka's SSLC or PUC streams are usually well prepared in content. The sharper change is linguistic: IB and IGCSE questions begin with verbs such as evaluate, discuss or deduce, and a correct list of facts does not answer them. So each class is built against a named subject, level and paper, and the first week or two goes on reading questions properly.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof dominate, and HL Paper 3 poses problems with no model solution, so students rehearse beginning from a blank page." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data handling, probability and technology carry the marks. The exploration is easiest when real figures are collected a term before the deadline." },
    { name: "IB Physics", levels: "HL / SL", description: "A PUC physics base helps with mechanics and waves; uncertainty, graph interpretation and experiment design are the new skills the Investigation rewards." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Calculations seldom cause trouble. Marks vanish in organic mechanisms and in explanations that stop before the reason is stated." },
    { name: "IB Biology", levels: "HL / SL", description: "Students know the terminology; the gap is shaping each answer to its command word and defending conclusions with proper statistics." },
    { name: "IB Economics", levels: "HL / SL", description: "A cleanly labelled diagram tied to a real event outscores long theory, and HL adds a data-based policy paper." },
    { name: "IB Business Management", levels: "HL / SL", description: "Bengaluru's startup and manufacturing scene supplies live examples; answers score by engaging with the firm named in the case." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Kannada-speaking students often read with great sensitivity but need rehearsal writing a timed commentary on an unseen English text." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Paper algorithms and the working software behind the internal assessment need separate drills." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies must be recalled accurately and then used as evidence in an argument that holds for a whole essay." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water stress around the Arkavathi, quarrying and urban growth on Bengaluru's fringe give vivid case studies to evaluate." },
    { name: "IB Geography", levels: "HL / SL", description: "Named places and measured data lift answers above generalisation, and fieldwork must follow a method someone else could repeat." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and sustained argument sit in different papers and are trained separately." },
    { name: "IB Kannada A / Hindi B", levels: "HL / SL", description: "Kannada as a first language is a real strength in Karnataka; Hindi B centres on unseen reading and spoken confidence." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation beats note-taking in this subject. Arguing a prescribed title from the side you would not choose is the best rehearsal for the essay." },
  ],

  igcseSubjectsIntro:
    "Tiers matter in IGCSE: Cambridge sets Core and Extended papers, Edexcel sets Foundation and Higher, and the paper entered limits the best grade. We therefore agree the board, code and sitting first, whether Cambridge in May to June or October to November, or Edexcel in January or summer.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended papers punish missing working; a tidy layout earns method marks even when an arithmetic slip creeps in." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Vectors, calculus and trigonometric identities come a year early, which smooths the later step into IB Analysis and Approaches." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Content overlaps with Cambridge but question wording differs, so real Edexcel papers are used for practice." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Speedy rearrangement of formulae and the alternative-to-practical paper each deserve their own regular practice." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, rates and organic families are taught alongside the practical-skills paper throughout the year." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and body systems recur in long answers, where how you build a response counts nearly as much as recall." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams are the early win; evaluation in the longer answers is where grades separate." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Once a student has typed and run real Python, trace tables stop being abstract, so coding runs through every topic." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Regular timed work on unseen passages builds summary and directed-writing skills faster than memorised phrases." },
    { name: "IGCSE Kannada and Hindi as a second language", levels: "Grade 9-10", description: "A weekly slot of reading and speaking practice, one to one, fits the language papers well." },
  ],

  regionsTitle: "Magadi and the places around it that our online lessons reach",
  regionsIntro:
    "A class needs a laptop and a steady connection, so this list is background and not a service map: where families live, what stands nearby and how they get to Bengaluru. Some entries are neighbouring villages and hills, not parts of Magadi town.",
  regions: [
    { name: "Magadi town centre", note: "The bazaar and bus-stand area around the old town, where long-settled trading and farming families live." },
    { name: "Ranganatha Swamy temple area", note: "The historic temple at the heart of the town, whose festival days set the rhythm of evening life nearby." },
    { name: "Magadi Road approach", note: "The corridor towards Bengaluru where newer housing has grown up and parents plan every trip around traffic." },
    { name: "Kempe Gowda fort surroundings", note: "The old fort area, a reminder of the local rulers whose family shaped the region before Bengaluru grew." },
    { name: "Savandurga", note: "The giant monolith hill nearby, a weekend trekking destination and a landmark for villages around it." },
    { name: "Manchanabele reservoir side", note: "The Arkavathi reservoir area, where weekend visitors and small farms share the landscape." },
    { name: "Kudur and nearby villages", note: "Rural households on the Tumakuru side of the taluk, who rely on buses and increasingly on a home laptop for study." },
    { name: "West Bengaluru", note: "Rajajinagar, Nagarbhavi and Kengeri, where many Magadi parents work and where the nearest big tuition market operates." },
  ],

  schoolDisclaimer:
    "No school in Magadi could be confirmed as an IB or Cambridge or Edexcel IGCSE school, so none appears as local. Bengaluru names below only show where families look. IB Gram stands apart from every school, from the International Baccalaureate, from Cambridge and from Pearson; no contract, referral fee or endorsement exists.",
  schoolClusters: [
    {
      city: "Magadi town and taluk",
      note: "Local schooling follows the Karnataka board or CBSE; we found no IB or IGCSE teaching, so the specialist syllabus comes via online tutoring.",
      schools: [],
    },
    {
      city: "Nearby: Bengaluru, north and east",
      note: "Bengaluru holds the largest cluster of IB and Cambridge schools in the state, but the confirmed campuses below lie on the far side of the city from Magadi, so daily travel needs a careful look before a family commits.",
      schools: ["Stonehill International School", "Canadian International School, Bengaluru", "Trio World Academy"],
    },
    {
      city: "Nearby: Bengaluru, central and east",
      note: "Further schools sit toward the city centre and the eastern suburbs. Families considering boarding or a move generally compare several campuses before choosing.",
      schools: ["The International School Bangalore", "Inventure Academy", "Indus International School, Bengaluru"],
    },
  ],

  modesIntro:
    "Whichever format a family picks, the class is private, live and taught in Indian Standard Time by someone selected for the paper code. They differ only in pace. No tutor travels to Magadi; in-person home tuition exists solely in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Weekly live class by video",
      description:
        "One fixed hour weekly, a shared digital board, the child's notes and a set of past papers. This is the usual format and the steadiest foundation for a school year.",
      bullets: [
        "Tutors drawn from across India",
        "Fits DP, MYP and both IGCSE boards",
        "Working shown live on screen",
        "One tutor for the full term",
      ],
    },
    {
      title: "Lighter plan with written reviews",
      description:
        "A shorter weekly class, a few written lines after it and a fuller review every month. Younger children and parents who value clear reports without a crowded timetable choose this one.",
      bullets: [
        "A short note after every class",
        "Goals reviewed regularly",
        "Well suited to PYP and early MYP",
        "Extra classes before tests",
      ],
    },
    {
      title: "Pre-exam intensive",
      description:
        "Several classes a week across a few weeks before mocks or written papers, built on timed questions and fast marking.",
      bullets: [
        "Papers marked to current schemes",
        "Feedback within two days",
        "Start about a month ahead",
        "Planned around Dasara and school exams",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Magadi, or only in Bengaluru?",
      paragraphs: [
        "Only in Bengaluru, so far as we can confirm. Magadi's schools teach the Karnataka state syllabus or CBSE, and none of the directories we consulted shows an IB World School or Cambridge or Edexcel centre inside the taluk. Bengaluru has well over a dozen. We name no school as local, since pointing to one we cannot vouch for would mislead you.",
        "That proximity is both a help and a trap. A family in Magadi can see Bengaluru's IB campuses on a map and imagine a commute, but the journey along Magadi Road in morning and evening traffic is long, and a young child who spends two hours a day on a bus has little energy left for homework. Many families therefore weigh boarding, a move or online learning instead.",
        "Online tutoring helps in each scenario. A child enrolled in a Bengaluru school gains protected study time on weekends and late evenings. A child waiting for admission can prepare in Mathematics and English. And a child who stays in Magadi's own school can still follow an IGCSE or IB syllabus privately.",
        "With no Magadi school as a reference, tutors are chosen on syllabus alone. A student who needs IB Chemistry HL has no neighbourhood specialist to call, but an online tutor in Chennai or Pune who taught it last year can begin in a week.",
      ],
      table: {
        caption: "Where Magadi families look for IB and IGCSE schooling",
        columns: ["Option", "Where", "What to know"],
        rows: [
          ["State board and CBSE schools", "Magadi and the taluk", "No IB or IGCSE teaching confirmed"],
          ["Day school in Bengaluru", "Bengaluru, the far side of the city", "Many IB and Cambridge schools, but long daily travel"],
          ["Boarding or relocation", "Bengaluru and beyond", "Needs admission planning a year ahead"],
          ["Online tutor beside any school", "At home in Magadi", "Works for IGCSE subjects and for IB students enrolled elsewhere"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed inside Magadi",
        "Bengaluru has the schools, but the commute is long",
        "Weekend and late-evening classes protect study time",
        "Matching follows the syllabus, not the pin code",
      ],
    },
    {
      heading: "SSLC, PUC and CBSE versus IB and IGCSE: what changes for a Magadi student?",
      paragraphs: [
        "Karnataka's SSLC and second PUC papers reward neat, complete answers from a fixed syllabus, and Magadi's teachers are good at preparing students for them. IB and IGCSE examiners are likelier to set an unfamiliar problem and ask which method suits and why. The jump is from reproducing to selecting.",
        "Assessment also differs in timing. A board practical file records what was done; an IB Internal Assessment or IGCSE coursework task is an independent investigation scored against published descriptors, sometimes carrying up to a third of the grade. Planning and redrafting a long task is a skill that has to be taught.",
        "How far the material goes depends on the level. Higher Level IB mathematics and sciences run past PUC in places, IGCSE Extended is a notch above SSLC and Core is gentler. Children changing board in Grade 9 or Class 11 gain more from a list of what is new than from blanket revision.",
        "Language needs its own attention. A child at ease in Kannada may understand an idea completely yet write it slowly in exam English, so sentence frames, word lists and timed answers become part of the class.",
      ],
      table: {
        caption: "Karnataka boards compared with IB and IGCSE",
        columns: ["Feature", "SSLC / PUC / CBSE", "IB / IGCSE"],
        rows: [
          ["Typical question", "Reproduce a textbook answer in set form", "Select a method and justify it in a new setting"],
          ["Coursework", "Practical records and internal marks", "Investigations and portfolios marked to criteria"],
          ["Language of study", "Kannada or English", "English, with Kannada and Hindi as language courses"],
          ["Recognition", "Strong in Karnataka and across India", "Recognised by universities in many countries"],
        ],
      },
      bullets: [
        "Selecting a method matters more than reciting one",
        "Coursework unfolds over months",
        "Map new content before revising old",
        "Practise exam English as its own skill",
      ],
    },
    {
      heading: "How is the fee for an IB or IGCSE tutor from Magadi worked out?",
      paragraphs: [
        "Four things move the price: the programme and its level, the subject taught, how long and how often the classes run, and whether the tutor has taught this exact course lately. Higher Level Diploma science costs more than Grade 7 mathematics. You will see the figure in writing before booking a trial.",
        "Travel costs nothing here. Classes are online, so a tutor in Hyderabad and one in Mumbai charge a Magadi family alike, and nobody pays for fuel or the slow ride along Magadi Road.",
        "Think about what happens inside an hour. A tutor who understands how Cambridge phrases a practical question, or how an IB moderator marks an exploration, can save months of guesswork. Ask about each class plan and how you will hear of progress.",
        "No lengthy contract applies. Classes can pause for Dasara, an exam fortnight or a family trip, and a tutor can be replaced if the fit is poor.",
      ],
      bullets: [
        "Level, subject, class length and tutor experience set the rate",
        "No travel cost for Magadi students",
        "A written figure arrives before the trial",
        "Pause or change tutor whenever needed",
      ],
    },
    {
      heading: "Tuition in Bengaluru, a local tutor, self-study or online: which suits IB and IGCSE from Magadi?",
      paragraphs: [
        "Bengaluru has a large IB and IGCSE tuition market, and some Magadi families look at centres in Rajajinagar, Kengeri or Banashankari. The difficulty is the journey. A one-hour class that costs another two hours on the road leaves a child exhausted, and centre timetables are fixed.",
        "Magadi's own private tutors deal capably with everyday school subjects. Hardly any have taught a live IB or IGCSE specification, and with so few pupils none can afford to specialise. Reassurance is on offer; the last mark in an examiner's scheme is not.",
        "A determined student can self-teach a well-documented subject; IGCSE Mathematics papers are everywhere. Trouble begins when a second reader is essential, as with a lab plan, an essay outline or a six-mark explanation, and unflagged errors turn into habits.",
        "Online one-to-one tuition brings the Bengaluru level of specialism to a Magadi desk with no travel. The family provides a laptop, headphones and a connection that holds for an hour.",
      ],
      table: {
        caption: "Support routes compared for Magadi",
        columns: ["Route", "Knows the syllabus?", "Personal attention", "Limit for Magadi"],
        rows: [
          ["Centre in Bengaluru", "Often yes", "Shared with a batch", "Long travel, fixed timetables"],
          ["Local home tutor", "Varies", "Full", "Few have taught current papers"],
          ["Self-study", "From books and papers only", "None", "No feedback on coursework or essays"],
          ["Online specialist", "Chosen for the course", "Full", "Needs a steady connection"],
        ],
      },
      bullets: [
        "Bengaluru centres are strong but far",
        "Local tutors with current IB or IGCSE experience are rare",
        "Self-study lacks feedback on writing",
        "Online specialists remove the travel",
      ],
    },
    {
      heading: "How do Ugadi, Dasara and Karnataka's weather shape a study plan?",
      paragraphs: [
        "Karnataka's school year bends around its festivals. Ugadi in spring, the long Dasara break in autumn and Deepavali shortly after all take family time, and many households travel. A plan that ignores them ends with missed classes. Mark them in advance, with light revision before and a catch-up class afterwards.",
        "The climate near Bengaluru is gentler than most of the Deccan, thanks to altitude, but the monsoon and the pre-monsoon storms of April and May can interrupt power and internet. A mobile hotspot is a sensible backup, and morning slots on weekends tend to be the most reliable.",
        "The Diploma's main exams are in May, with results in July and November retakes. Cambridge runs IGCSE twice a year, around May to June and October to November, and Edexcel adds a January window to its summer one. Because SSLC and PUC papers fall in March and April, mock revision for anyone sitting both needs mapping out early.",
        "Pupils at a Bengaluru school work to its calendar. For an IGCSE candidate studying privately at home, a weekly class through Grade 9, extra sessions across the autumn of Grade 10 and a tight two-month block before the papers form a workable pattern.",
      ],
      table: {
        caption: "The year for an IB or IGCSE student in Magadi",
        columns: ["Period", "What happens", "Tutoring focus"],
        rows: [
          ["June to August", "New school year, monsoon", "Foundations and gap-filling"],
          ["October to November", "Dasara, Deepavali; Cambridge November series", "Light revision, then a sprint for sitters"],
          ["January to March", "Mocks, Edexcel January series, state exams", "Timed papers and feedback"],
          ["April to June", "Ugadi, storms; Diploma and IGCSE papers", "Short sessions and past papers"],
        ],
      },
      bullets: [
        "Treat Dasara and Deepavali as planned breaks",
        "Keep a hotspot ready for stormy evenings",
        "Diploma papers fall in May; retakes in November",
        "State exam weeks can squeeze mocks",
      ],
    },
    {
      heading: "Where can IB or IGCSE take a student from Magadi?",
      paragraphs: [
        "In Karnataka the first reference is Bengaluru itself, with the Indian Institute of Science, many engineering and medical colleges and a large private university sector. A Magadi student can live at home and study in the city, which is an advantage few small-town students enjoy. Each institution sets its own rules for IB and IGCSE applicants, so ask directly.",
        "Admission inside India frequently requires an equivalence certificate from the Association of Indian Universities for a foreign-board qualification. CUET-UG takes candidates from many boards but checks subject combinations, and KCET, JEE and NEET issue their own eligibility rules. They change, so verify before settling subjects.",
        "Abroad, IB points and IGCSE grades count toward admission in Britain, Canada, Australia and the United States. British offers typically name a points total plus Higher Level minimums and rest on predicted grades issued in the final year, so Class 11 performance carries real weight.",
        "Students outside the big city often have the planning talk too late; discarding Higher Level Mathematics at fourteen can end an engineering route at seventeen. We handle the academic support, and for applications the institution itself is the authority.",
      ],
      bullets: [
        "Bengaluru offers technical, medical and private options within reach of home",
        "AIU equivalence is often needed for Indian universities",
        "Check KCET, JEE, NEET and CUET rules directly",
        "Predicted grades drive overseas offers",
      ],
    },
    {
      heading: "What do Maths AA and AI and the sciences ask of a Magadi student?",
      paragraphs: [
        "The two Maths routes feel quite unlike each other. Analysis and Approaches is built from algebra, functions, calculus and proof, which suits future engineers and physicists, and its Higher Level third paper sets problems with no template. Applications and Interpretation is built from statistics, modelling and the graphic calculator, a better fit for economists, biologists and business students.",
        "Physics students from PUC wield formulae with confidence but seldom face questions about uncertainty, graph analysis or experiment design, exactly what the Investigation values. A tutor who has studied the mark scheme redirects a plan before a draft goes astray.",
        "Chemistry candidates tend to be quick with moles and equilibria, then meet unfamiliar ground in reaction mechanisms and energy cycles. In Biology the terminology is known; the missing habit is building an answer in the shape the command word demands.",
        "Without an IB school in town, the online tutor is closer to a main teacher than a helper. Before the trial we ask for the textbook, any notes and one recent marked piece, so the first class starts from evidence.",
      ],
      bullets: [
        "AA suits calculus, proof and engineering routes",
        "AI suits data, statistics and modelling",
        "Experimental design is the usual physics gap",
        "Bring marked work to the trial",
      ],
    },
    {
      heading: "Core or Extended: choosing IGCSE tiers from Magadi",
      paragraphs: [
        "Core papers cap the available grade, whereas Extended papers go all the way up. The choice seems trivial at fourteen yet it follows the student, since Diploma teachers assume Extended-level groundwork before Higher Level Mathematics and sciences begin.",
        "A simple experiment helps: set four or five Extended-level questions from an old paper and watch how the child copes without marking yet. Choosing a fair method and then slipping on a sign says Extended. Having no idea where to start says that a safe Core result in that subject may be wiser.",
        "The mix of subjects needs thought as well. English, Mathematics, a pair of sciences and one language or humanity form a typical set, with Additional Mathematics for engineers in the making. A child with no school timetable behind them can easily be overloaded.",
        "No one near Magadi has run a Cambridge classroom, so one diagnostic class with a tutor who has coached both tiers is the cleanest way to choose. Listening to a child reason aloud says more than a score.",
      ],
      bullets: [
        "Core caps the grade; Extended opens it",
        "Try a few Extended questions first",
        "Add Additional Mathematics for engineering",
        "A diagnostic class often settles it",
      ],
    },
    {
      heading: "How does IB Gram choose a tutor for a Magadi family?",
      paragraphs: [
        "We open with a chat instead of a form. What board is the school on, which subject and level, where do marks stand, when is the next paper, and what keeps the family awake: a topic, the IA, mocks or a looming change of board?",
        "Candidates are then checked for qualifications, recency on the exact course and the way they respond to coursework drafts. With no Magadi school to anchor the choice, we shortlist by syllabus fit and who is free in IST.",
        "Everything hinges on the trial. Within one class you learn whether the tutor explains well, whether the questions put to your child are sensible and whether she or he dares to say that something was unclear. If it feels right, a short plan for month one gets written; if it does not, nothing follows.",
        "If child and tutor simply do not click, a different tutor is arranged without penalty or lengthy explanations.",
      ],
      bullets: [
        "A conversation covering board, subject, level and worries",
        "Shortlist by syllabus experience",
        "Trial class before any commitment",
        "Tutor change if the fit is poor",
      ],
    },
  ],

  tutorsIntro:
    "Below are examples of tutors we introduce to Magadi students, covering PYP, MYP, the Diploma and the two IGCSE boards, each picked for the course on the student's own timetable. Every one teaches through video, the single format used in Magadi.",

  process: [
    { title: "Describe where things stand", description: "Board or programme, subject, level, recent marks and the evening hours when your Magadi child can sit at a laptop." },
    { title: "Review a few names", description: "With no IB school in the taluk, names come from across India, chosen for recent teaching of your child's paper." },
    { title: "Join a trial class", description: "One real topic taught live, free, with nothing to sign." },
    { title: "Map out month one", description: "Which topics come first, which weekday suits and how progress reports will reach you, set out on paper." },
    { title: "Carry on and check in", description: "Classes go on weekly, the plan is reviewed every few weeks, and a new tutor can step in whenever that would serve the child better." },
  ],

  whyPoints: [
    { title: "Syllabus before surname", description: "No name is put forward until we know the HL or SL subject, or the Cambridge or Edexcel syllabus code and tier." },
    { title: "Built for places the schools skip", description: "Magadi has no confirmed international classroom, so the search for a specialist covers the whole country." },
    { title: "You watch before you pay", description: "A trial class lets you see the tutor teach before any talk of fees." },
    { title: "Plain limits on help", description: "Tutors give feedback on drafts; the assessed writing remains the student's own." },
    { title: "Progress on paper", description: "Short written notes follow every class, with a fuller assessment every few weeks." },
    { title: "Free to leave", description: "Pause, stop or change tutor whenever you like. No school, exam board or university stands behind us." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Magadi?", answer: "Write down the subject, level and exam sitting in view, then send them to IB Gram. We shortlist tutors who recently taught that course and book a free trial class. As no Magadi school is confirmed for the IB, tutors come from across India and teach by video." },
    { question: "Can Magadi students get IGCSE help on both Cambridge and Edexcel?", answer: "Both boards, both online. Before naming anyone we fix the board, the paper code and the tier, such as Cambridge 0580 Extended or Edexcel 4MA1 Higher, so practice uses the correct papers for the actual sitting." },
    { question: "Does a tutor come to the house in Magadi?", answer: "Tutors do not call at houses in Magadi; that service belongs to Gurugram and parts of Delhi NCR alone. Tuition at home here is a private live class on your child's laptop, with tutor and student sharing one digital whiteboard." },
    { question: "What does tuition cost for a student in Magadi?", answer: "No tariff is printed. What you pay depends on the level and subject, how long classes run and how recently the tutor handled this course, and the figure arrives in writing before the trial. Continuing afterwards creates no long-term commitment." },
    { question: "Which Magadi schools teach IB or IGCSE?", answer: "None that we could confirm. Schools in the taluk follow the Karnataka board or CBSE. Families who want an IB or Cambridge classroom look to Bengaluru, which has many campuses but a long drive, and use online tutoring to prepare, to protect study time or to support a student at home." },
    { question: "Is the first class really free?", answer: "Yes. A tutor takes a real topic from your child's syllabus and teaches it, and you decide afterwards. Saying yes leads to a short month-one plan; saying no leads to nothing, with no follow-up calls." },
    { question: "How far can a tutor go with an IB Internal Assessment?", answer: "Tutors will happily unpack a marking criterion, help your child settle on a research question that is narrow enough to test, glance over a method and read a draft the student produced alone. They will not draft, rewrite or polish the assessed text, because the IB regards that as academic misconduct." },
    { question: "Which Diploma subjects do your tutors teach?", answer: "For the Diploma we have tutors in Maths AA and AI at either level, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, Geography, History, Kannada and Hindi, as well as Theory of Knowledge and Extended Essay coaching. Unusual subjects mean a smaller pool." },
    { question: "Can younger children on MYP or PYP join?", answer: "Certainly. MYP teenagers typically need practice in answering to the published criteria and in choosing a realistic Personal Project. PYP children have brief, frequent classes on reading aloud, number patterns and learning to ask a good question." },
    { question: "Is a laptop class as good as a tutor in the room?", answer: "In Magadi's case it can be the stronger option, because the best specialist might live in another state while a local tutor would face a long journey. Live working on a shared board and a recording of each class replace most of what a tutor in the room offers, if the connection holds." },
    { question: "How do you vet tutors?", answer: "We begin with degrees and certificates. Then comes the question that matters more: when did this person last teach the very paper your child sits, and what would they do with a feeble coursework draft? Fresh experience of the current specification beats an older, broader résumé, and the trial lets you see the teaching for yourself." },
    { question: "When is the right time to start?", answer: "The ideal moment is the first week of the course, so Grade 9 for IGCSE and Class 11 for the Diploma. A late arrival is still worth it, because a plan aimed at the heaviest-scoring topics can sharpen exam technique even across the last eight weeks." },
    { question: "My child studies in a Kannada-medium school. Is the move to IGCSE or IB realistic?", answer: "Lots of children manage it. Maths and science are seldom the stumbling blocks; the trouble lies in decoding exam English, grasping what a command word asks and keeping a long piece of coursework alive over months. A holiday bridging course before Grade 9 or Class 11 removes most of that shock." },
    { question: "Which class times suit Magadi families?", answer: "Most students prefer weekday evenings or weekend mornings. Dasara, Deepavali and Ugadi stay free, state exam dates are respected where they apply, and classes shift when a storm threatens the connection. A second weekly slot is easy to add before mocks." },
    { question: "What if the tutor and my child do not click?", answer: "If it is not working, say so and we arrange someone else. Reviews exist to expose a mismatch early, you are not tied in, and quitting altogether costs nothing." },
    { question: "Is IB Gram linked to a school or an exam body?", answer: "None. IB Gram works alone, with no arrangement involving a Magadi or Bengaluru school or any of the IB, Cambridge or Pearson. Where a school is named here, it is only to say what that school teaches, and your tutor works from the syllabus your child's school or exam centre has chosen." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring in Bengaluru", href: "/bengaluru/", description: "The city with the state's largest cluster of IB and Cambridge schools." },
    { label: "IB and IGCSE tutoring in Tumkur", href: "/tumkur/", description: "The district city on the Tumakuru side of the taluk." },
    { label: "IB and IGCSE tutoring in Mysuru", href: "/mysuru/", description: "Another Karnataka city served online." },
    { label: "IB tutoring across India", href: "/india/", description: "How matching works from city to city." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The only place where tutors visit homes." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, levels, TOK, IAs and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and arrange a trial class." },
  ],

  closingHeading: "Arrange a no-cost IB or IGCSE trial class for your Magadi child",
  closingBody:
    "Send us your child's board or programme, the subject, the level and a line on recent results, plus the days Magadi's evening traffic leaves room for study. We answer with one proposed tutor, a paragraph about their teaching background and a handful of free trial times, all conducted privately over video. There is nothing to sign. Email support@ibgram.com or use WhatsApp on +91 7439 368 115.",
};
