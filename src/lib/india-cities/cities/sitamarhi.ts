import type { CitySeoPage } from "../types";

/**
 * /sitamarhi/ - IB and IGCSE tutoring page for Sitamarhi, Bihar. No IB or Cambridge/Edexcel IGCSE school
 * is confirmed in Sitamarhi, so stripSchools is empty and the clusters point to the Patna, Kolkata and
 * Delhi NCR schools already verified on neighbouring city pages. Online-only delivery: in-person home
 * tuition runs only in Gurugram and parts of Delhi NCR.
 */
export const sitamarhi: CitySeoPage = {
  slug: "sitamarhi",
  countryName: "Sitamarhi",
  countryNameLong: "Sitamarhi, Bihar",
  demonym: "Sitamarhi",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around Bagmati flood weeks, the Janaki Navami fair, Chhath and your child's own school day",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.5960, longitude: 85.4900 },
  wikipedia: "https://en.wikipedia.org/wiki/Sitamarhi",
  alternateNames: ["Sitamadhi", "Sitamarhi Bihar", "Sitamarhi town"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sitamarhi | Online Home Tuition",
  metaDescription:
    "Live one-to-one IB and IGCSE tutors for Sitamarhi, Bihar: DP, MYP, PYP, Cambridge and Edexcel, planned around flood season and Chhath, free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sitamarhi",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION IN SITAMARHI, BIHAR",
  heroSubtitle:
    "Private tuition from home for Sitamarhi students: a live one-to-one lesson on a laptop with a tutor who has taught your exact IB subject or IGCSE syllabus. The town has no IB or IGCSE school of its own, so a tutor is matched from across India and reached by video, never by a visit to your door.",
  primaryKeyword: "IB and IGCSE tutors in Sitamarhi",
  imageAltText: "A Sitamarhi student at a desk at home working through an IB Mathematics problem with a tutor on a video call",
  secondaryKeywords: [
    "IB tutor Sitamarhi",
    "IGCSE tutor Sitamarhi",
    "IB home tuition Sitamarhi",
    "IGCSE home tuition Sitamarhi",
    "IB private tuition Sitamarhi",
    "IB Maths tutor Sitamarhi",
    "IGCSE Maths tutor Sitamarhi",
    "IB Physics tutor Sitamarhi",
    "IB Chemistry tutor Sitamarhi",
    "IB Biology tutor Sitamarhi",
    "IB DP tutor Sitamarhi",
    "IB MYP tutor Sitamarhi",
    "IB PYP tutor Sitamarhi",
    "IGCSE online tuition Sitamarhi",
    "IB tutor Dumra Sitamarhi",
    "IGCSE tutor Janaki Sthan Sitamarhi",
    "online IB tutor Sitamarhi Bihar",
    "IB tutor Sitamadhi",
  ],

  heroTrustPoints: [
    "Tutors matched to the IB subject and level, or the IGCSE board, code and tier, that your child actually sits",
    "Every lesson is live online; home visits exist only in Gurugram and parts of Delhi NCR, not in Sitamarhi",
    "A free trial lesson on a real topic before you commit to anything",
    "Independent of every school and exam body mentioned on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Full IB continuum covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards taught" },
    { value: "IST", label: "Tutor and student on one clock" },
    { value: "Free trial", label: "One lesson, no obligation" },
  ],

  intro: {
    heading: "Online IB and IGCSE help for a Mithila town with no international school",
    paragraphs: [
      "Sitamarhi sits in north Bihar, in the Mithila country close to the Nepal border, and it is best known as the town tied to the birth of Sita, with the Punaura Dham temple and Janaki Sthan drawing pilgrims each year. Families looking for private tuition from home here are a small, specific group, and for them this page explains how one-to-one online lessons in the IB or IGCSE actually work.",
      "Nobody in Sitamarhi teaches the International Baccalaureate or Cambridge and Pearson Edexcel IGCSE inside a local school, as far as we could confirm. Town classrooms follow the Bihar School Examination Board or CBSE, with a handful of ICSE names. The families who come to us are usually continuing a programme started elsewhere, following an online international school, or preparing for a planned move to a school in Patna, Kolkata or Delhi NCR.",
      "That means the tutor cannot be found down the lane. A tutor is matched by syllabus, then taught live over video with a shared whiteboard and marked past papers on screen. Tutors are based in India and teach on IST, so a Sitamarhi evening works for both sides.",
      "IB Gram is an independent service with no link to any school, to the IB, to Cambridge or to Pearson. Tutors coach and explain; they never write an Internal Assessment, Extended Essay, TOK essay or any coursework that a student submits.",
    ],
    bullets: [
      "IB PYP, MYP and Diploma subjects taught one to one",
      "Cambridge and Pearson Edexcel IGCSE, Core or Extended, Foundation or Higher",
      "Online home tuition on a laptop, live, with a written note after each session",
      "A free trial lesson and a tutor change if the fit is wrong",
      "No tutor visits in Sitamarhi; in-person tuition runs only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Since no school in town runs these programmes, each one reaches a Sitamarhi family from a different direction: a transfer, a distance enrolment, or a deliberate plan to switch at a natural break in schooling. The notes below describe those routes instead of assuming a campus down the road.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Learning is organised around units of inquiry that cut across subjects and end in a pupil-led Exhibition. Nothing is externally examined, so tutoring for a young learner is mostly patient reading aloud, number fluency and the habit of asking a good question and finding out the answer.",
      countryNote:
        "A PYP child in Sitamarhi is almost always on a transfer from a school in another city or a programme followed at a distance, so the tutor's first job is to keep reading and number work level with what the class elsewhere is doing.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is judged on four criteria rather than one final paper, and the course closes with a Personal Project. Students who did well on memorised Bihar Board answers often need to be shown what analysis and evaluation look like when a rubric asks for them.",
      countryNote:
        "With no MYP campus in Sitamarhi, families using it tend to be tracking deadlines set by a school far away, so tutoring includes keeping a simple calendar of criterion tasks, not only explaining chapters.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard, plus Theory of Knowledge, the Extended Essay and Internal Assessments. The Diploma's written papers fall in May and the coursework pieces are due well before that, so pacing across two years decides most outcomes.",
      countryNote:
        "A Sitamarhi student on the Diploma is normally boarding in another city or studying with a distance provider, and tends to ask for Maths, Physics, Chemistry or Economics support at the level a far-away classroom has already moved past.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP combines at least two Diploma courses with a career-related study, a reflective project and personal and professional skills. Only a few Indian schools run it, but the Diploma courses inside it carry the same exam standards as in the full Diploma.",
      countryNote:
        "Enquiries from Sitamarhi for the CP are uncommon. Where they arise, the tutoring goes to the Diploma courses and the written reflections, leaving the framework to the school that offers it.",
    },
  ],

  subjectsIntro:
    "Saying 'IB Maths' tells a tutor very little: Analysis and Approaches at Higher Level is a different course from Applications and Interpretation at Standard. For Sitamarhi students the match starts with the subject, the level and the exam session, then with the evening hours that survive a power cut, a flooded road or a festival week.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Proof, calculus and function work for students aiming at engineering or pure science. Paper 3 at Higher Level rewards patient exposure to strange multi-step problems, which a late crash course cannot replace." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and confident graphing-calculator use. The exploration is where students lose time, so a topic and data source are fixed early with a tutor's feedback." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through to fields and quantum topics, with a Scientific Investigation that has to stand on sound method. Fast, accurate use of the data booklet saves minutes on every paper." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry and bonding first, then energetics, kinetics and organic mechanisms. Many students from Bihar Board backgrounds know the facts and need practice writing reasoned, mark-scheme style answers." },
    { name: "IB Biology", levels: "HL / SL", description: "Command terms decide marks: 'outline' and 'evaluate' are not the same answer. A sound Investigation also needs simple statistics to back its conclusion." },
    { name: "IB Economics", levels: "HL / SL", description: "Labelled diagrams with a live example carry most marks. Higher Level adds data-response questions and quantitative practice on top of the theory." },
    { name: "IB Business Management", levels: "HL / SL", description: "Theories must be applied to the named case, and the internal research work needs one real organisation examined closely, which can be a local business." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis, a comparative essay and a spoken oral each need separate rehearsal, and students schooled in Hindi or Maithili at home often gain most from reading aloud in English." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, object-oriented ideas and data structures, with a coded solution and its written documentation both assessed." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies must be remembered with their findings and evaluated, and long responses need a clear argument rather than a list of facts." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "A systems view of land, water and climate. Sitamarhi's own river floods make a real case study for discussion and evaluation." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies with real detail, fieldwork planning and evaluative writing, with flood management and river basins an easy fit for practice." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis for Paper 1 and sustained essay argument for Paper 2, practised under time." },
    { name: "IB Hindi A or B", levels: "HL / SL", description: "Text types, written tasks and the individual oral. Students who speak Hindi, Maithili or Bajjika at home start with a real advantage in the oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Coaching through conversation: testing an exhibition commentary and arguing a prescribed title from more than one side, without writing any of it." },
  ],

  igcseSubjectsIntro:
    "IGCSE is a label, not a syllabus. Cambridge 0580 Extended and Edexcel 4MA1 Higher are prepared differently, so a Sitamarhi student's plan begins with the board, the subject code and the tier, and then the exam series the child is entered for.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended needs quick non-calculator arithmetic and full working. Lost marks are usually from misread command words or skipped steps, not gaps in topics." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus, trigonometric identities and vectors arrive early, which makes it a strong bridge into IB Maths Analysis and Approaches for students planning that route." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Content overlaps Cambridge, but the wording and ordering of Higher questions differs, so the exam style needs its own practice." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation rearrangement under time pressure, plus careful preparation for the alternative-to-practical paper where lab access at home is limited." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, bonding and then organic chemistry, with planning and analysis questions for practical skills built in from early in the course." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, transport and ecology, where full-mark answers follow the structure examiners expect rather than simply being longer." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Accurate diagrams early, then extended evaluation written with reasons on both sides of a question." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables, pseudocode and logic gates, practised on unfamiliar problems with real coding alongside." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and narrative tasks taught explicitly, with timed reading of unseen passages." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and speaking for learners who already use Hindi daily, with attention to the formal registers the paper asks for." },
  ],

  regionsTitle: "Sitamarhi localities our online IB and IGCSE tutors support",
  regionsIntro:
    "Lessons happen on screen, so a locality matters for context: what schools its families use, how far it sits from the railway and bus stand, and how monsoon roads and power supply shape a realistic evening slot.",
  regions: [
    { name: "Janaki Sthan", note: "The temple neighbourhood in the heart of town; a busy, older area where families are mostly Bihar Board or CBSE and ask about IB or IGCSE only after a relative's relocation." },
    { name: "Dumra", note: "A large administrative and residential pocket on the main road; many government and professional families, who sometimes have lived in Patna or Delhi." },
    { name: "Malviya Nagar", note: "A residential colony where small tuition centres and home tutors are common, so the contrast with a specialist online tutor is easy to see." },
    { name: "Basusree Chowk", note: "A well-known central crossing with shops and classes nearby; evenings run late here, so slots after 8 pm are often comfortable." },
    { name: "Station Road", note: "The approach to the railway station, convenient for families whose children travel to Muzaffarpur or Patna for school or coaching." },
    { name: "Mehsaul Chowk", note: "An access point on the highway side; a mixed trading and residential area with some business families who think about study abroad." },
    { name: "Punaura", note: "The pilgrimage area a few kilometres from town. During the Janaki Navami and Ram Navami crowds the roads fill, and online lessons spare students the journey." },
    { name: "Bairgania", note: "A border-side town towards Nepal; families here often have links across the border and sometimes ask about international curricula." },
    { name: "Sonbarsa", note: "A rural block on the flood-prone side of the district; connectivity can dip in the monsoon, so a fixed backup plan for lessons matters." },
    { name: "Runnisaidpur", note: "A smaller town outside the main urban core, where a student may live at home while studying for exams set by a school elsewhere." },
  ],

  schoolDisclaimer:
    "No school inside Sitamarhi is confirmed to teach the IB or a Cambridge or Edexcel IGCSE syllabus, which is why the school strip above is empty and the schools below are in other cities. IB Gram is an independent tutoring service; it has no affiliation with, and is not endorsed by, any school named here, the IB Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Nearby: Patna",
      note: "The state capital is the usual gateway for Sitamarhi families. Patna's own international options are limited, and families often move on from it to Kolkata or Delhi NCR.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "A long rail journey east; its longer-established international schools are where some Bihar families board or relocate.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "The capital region is a magnet for Bihar families with work or relatives there, and several of its schools run the IB or IGCSE.",
      schools: ["Pathways World School", "GD Goenka World School", "The British School, New Delhi"],
    },
  ],

  modesIntro:
    "In Sitamarhi there is one format in practice, a live video lesson between one tutor and one student. The three options below differ in rhythm, not venue. No tutor travels to a home in this city; that service runs only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Weekly one-to-one online lessons",
      description:
        "A fixed slot each week, the tutor and your child working through a shared screen and whiteboard. It suits most subjects, all IB programmes and both IGCSE boards, and gives a steady rhythm that survives a busy school term.",
      bullets: [
        "One regular tutor who learns your child's habits",
        "Past papers and worked solutions shared on screen",
        "Works for PYP, MYP, DP and IGCSE alike",
        "A written note after every session",
      ],
    },
    {
      title: "Structured term plan with reviews",
      description:
        "A planned block of lessons with stated goals, and a review every few weeks to decide whether the plan still fits. Helpful where a family is managing a distance enrolment or a coming transfer.",
      bullets: [
        "Goals set after the trial lesson",
        "A review conversation every few weeks",
        "Good for MYP, PYP and subjects with coursework",
        "Room to add a second weekly slot before mocks",
      ],
    },
    {
      title: "Focused revision block before exams",
      description:
        "Two or three lessons a week over a short stretch, nearly all of it timed past papers with fast feedback. It is worth booking a few weeks before the exam window so there is room to act on what the papers reveal.",
      bullets: [
        "Timed papers with prompt, specific feedback",
        "Planned around flood weeks, Chhath and fairs",
        "Best started three to four weeks ahead",
        "Can pause and resume between sessions",
      ],
    },
  ],

  sections: [
    {
      heading: "Who looks for IB and IGCSE tutors in Sitamarhi, and why?",
      paragraphs: [
        "Sitamarhi is a district headquarters of a few lakh people on the Mithila plain, where most students study under the Bihar School Examination Board or CBSE and then head to Patna, Delhi or Kota-style coaching hubs. IB and IGCSE are rare here. When a family asks about them, there is almost always a specific reason behind it.",
        "One group is relocating: a parent posted to Sitamarhi as a government officer, bank manager or engineer for a few years, with a child already partway through an IB or IGCSE course. Another group is Bihar families who have worked in the Gulf, Delhi or Bengaluru and returned home with children in an international curriculum. A third is families planning to place a child in a school elsewhere and wanting preparation before the move.",
        "The common problem is that nobody in town has taught the syllabus lately. Bihar Board teachers are skilled at what they do, but the marking scheme, the command words and the coursework are different. A tutor who has taught the exact course can explain in an evening what might take weeks to work out alone.",
        "The search phrase that brings families here is often 'home tuition', and the honest version is online home tuition: the child sits at home, the tutor appears on screen. IB and IGCSE tutors in Sitamarhi, reached this way, are chosen from across India by syllabus rather than by distance.",
      ],
      table: {
        caption: "Why Sitamarhi families ask about IB or IGCSE",
        columns: ["Situation", "What usually happens", "What tutoring adds"],
        rows: [
          ["Transfer posting to Sitamarhi", "Child keeps an IB or IGCSE course from a previous city", "A tutor who knows that course, so continuity holds"],
          ["Return from the Gulf or a metro", "Child re-enters after an international curriculum", "Bridging of gaps and consistent exam technique"],
          ["Planned move to another city", "Family prepares for an IGCSE or DP school elsewhere", "Early exposure to command words and coursework habits"],
          ["Distance enrolment", "Child follows an online international school from home", "A live, human teacher to go with recorded content"],
        ],
      },
      bullets: [
        "No school inside Sitamarhi is confirmed to teach the IB or IGCSE",
        "Most families are continuing a course, not starting cold",
        "Tutors are matched by syllabus, not by neighbourhood",
        "Home tuition here means live online lessons from home",
      ],
    },
    {
      heading: "How do Bihar Board and CBSE differ from the IB and IGCSE?",
      paragraphs: [
        "Bihar Board and CBSE papers reward knowing the prescribed textbook well and reproducing it in the expected form. The IB and IGCSE reward reasoning: explain why, evaluate a claim, apply a method to a new situation. A student who scores well by learning the book can be surprised when a question changes the context.",
        "Coursework is the largest difference. Board exams in Bihar have a small internal component; the IB's Internal Assessments and the Extended Essay, and IGCSE practical and coursework elements, are marked against published criteria and need independent planning over months. Students have to be shown how to choose a question, gather evidence, draft and revise.",
        "Depth differs as well. IB Higher Level Maths, Physics and Chemistry go past what most Class 12 papers demand. IGCSE Core is near CBSE difficulty and Extended sits above it. A family in Sitamarhi with no local counsellor to advise needs a tutor's judgement even to pick the right tier.",
        "None of this makes one system harder in every respect. Some students who freeze before a single three-hour board paper do better with assessment spread over two years. The aim of tutoring is to teach what the new marking expects, so a good student is not held back by unfamiliar format.",
      ],
      table: {
        caption: "Bihar Board and CBSE against IB and IGCSE",
        columns: ["Feature", "Bihar Board / CBSE", "IB", "IGCSE"],
        rows: [
          ["What earns marks", "Accurate recall of the syllabus", "Reasoning, application and evaluation", "Application with clear working"],
          ["Coursework", "Small internal component", "IAs, Extended Essay, TOK", "Practical and coursework depending on subject"],
          ["Recognition", "Indian boards and universities", "Worldwide university entry", "Worldwide, often as a step to A Level or IB"],
          ["In Sitamarhi", "The default in town", "No local school", "No local school"],
        ],
      },
      bullets: [
        "IB and IGCSE questions change context; books alone do not prepare for them",
        "Coursework needs months of independent planning",
        "Choosing Core or Extended needs advice early",
        "Moving across boards is manageable with command-word practice",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost in Sitamarhi, and what shapes the fee?",
      paragraphs: [
        "There is no published rate on this page and none is fixed. The fee for a Sitamarhi student depends on the programme, the level (Higher Level or Standard, Core or Extended), the subject, the length of each lesson, and how specialised the tutor's experience is. You receive the rate in writing before you book.",
        "Rare combinations cost more because fewer people teach them: IB Physics HL, IGCSE Additional Mathematics and Computer Science are examples. Primary and middle years tuition is usually lighter in content, though a very young child may need shorter, more frequent sessions, which changes the plan rather than the principle.",
        "Since everything is online, travel and local overheads do not appear in the price. A tutor logging in from another state charges the same to a student in Sitamarhi as to one in any other town. Compared with a coaching-centre fee in Muzaffarpur or Patna, the total often also avoids travel and lodging for a child who would otherwise commute.",
        "Commitment stays light. There is a free trial lesson first, and families can pause between terms or ask for a different tutor if the fit is wrong. A sensible way to judge value is what one lesson changes in the student's next paper, not the hourly number alone.",
      ],
      bullets: [
        "Rate depends on programme, level, subject and lesson length",
        "No travel or accommodation cost is added",
        "You see the rate in writing before booking",
        "Free trial first, then pause or change tutor freely",
      ],
    },
    {
      heading: "Is online tuition better than coaching centres, local tutors or self-study in Sitamarhi?",
      paragraphs: [
        "Online one-to-one tuition is the better fit for IB and IGCSE in Sitamarhi because it solves a problem the other options cannot: nobody locally has taught these syllabuses. Coaching centres in town are built for NEET, JEE and board preparation, and there is no commercial reason to run a batch for IGCSE Chemistry or IB Economics.",
        "Private tutors in Dumra and Malviya Nagar are skilled with Bihar Board and CBSE, and many are dedicated teachers. For an IB or IGCSE student the gap is specific: the mark schemes, the command words and the format of the internal assessment. A general tutor can build confidence, but an examiner's expectations are hard to guess.",
        "Self-study works for disciplined students, especially in IGCSE Mathematics where past papers are plentiful. It falters on coursework planning, extended writing and on knowing whether an answer would earn full marks. There is no one to ask when the mark scheme is unclear.",
        "The one real limit of online lessons is the home setup: a steady connection and a quiet corner. Power cuts and monsoon weeks can interrupt a session, so a tutor and family agree in advance what happens if a lesson drops, usually a rescheduled slot within the week.",
      ],
      table: {
        caption: "Support options for an IB or IGCSE student in Sitamarhi",
        columns: ["Option", "Syllabus fit", "Attention", "Main limit in Sitamarhi"],
        rows: [
          ["Local coaching centre", "Built for NEET, JEE and board exams", "Group", "No IB or IGCSE batches"],
          ["Private home tutor in town", "Strong on Bihar Board and CBSE", "One to one", "Has not taught IB or IGCSE marking"],
          ["Self-study", "Whatever the student finds", "None", "No feedback on coursework or extended answers"],
          ["Online specialist tutor", "Matched to the exact syllabus", "One to one", "Needs reliable internet and a quiet space"],
        ],
      },
      bullets: [
        "Coaching in town is built around other exams",
        "Local tutors are good but rarely IB or IGCSE specialists",
        "Self-study misses feedback on coursework",
        "Online lessons need a backup plan for connectivity",
      ],
    },
    {
      heading: "How do floods, Chhath and fairs shape the Sitamarhi study year?",
      paragraphs: [
        "The Sitamarhi year is shaped by water and festival. From July to September the Bagmati and its neighbouring streams can flood parts of the district, closing roads, cutting power and sometimes displacing families. Lessons in those weeks need a plan for interruptions, and homework often matters more than live time.",
        "November brings Chhath, the largest occasion in the Bihar calendar, when many families travel home from other cities, and households are busy for several days. Janaki Navami in spring and Ram Navami draw large crowds to Punaura Dham and Janaki Sthan. Winter mornings are cold and foggy, so evening slots are comfortable, and summers are hot and humid.",
        "International exam dates sit on top of this. The IB Diploma exams are held in May with results in early July; Cambridge IGCSE runs in May-June and October-November, and Edexcel adds a January window. A revision block for May should start in February or March, before the spring fairs and summer heat.",
        "Because your child's own school timetable comes first, the plan works backwards from the exam session, then fits lessons around the flood season and festival weeks, rather than the other way round.",
      ],
      table: {
        caption: "Sitamarhi calendar and exam pressure points",
        columns: ["Period", "What happens", "Effect on tutoring"],
        rows: [
          ["July-September", "Monsoon and possible river flooding", "Plan for dropped sessions and use recorded worked solutions"],
          ["October-November", "Chhath, Diwali, Cambridge November series", "Short breaks, then focused catch-up"],
          ["December-January", "Cold and fog; Edexcel January window", "Evening slots; mock exams"],
          ["March-June", "Janaki Navami fair, heat, DP and IGCSE May exams", "Final timed papers and lighter loads in peak heat"],
        ],
      },
      bullets: [
        "Floods can interrupt lessons between July and September",
        "Chhath pulls families home for several days",
        "Winter fog makes evenings the natural slot",
        "Start May revision in February or March",
      ],
    },
    {
      heading: "What university pathways open from Sitamarhi with IB or IGCSE?",
      paragraphs: [
        "Most students who finish an IB or IGCSE course from Sitamarhi look at three destinations: Indian universities, professional courses in medicine or engineering, and degrees abroad. Nearby options include Lalit Narayan Mithila University in Darbhanga, Patna University and the colleges in Muzaffarpur, which mostly serve Bihar Board and CBSE cohorts.",
        "For Indian admission, an IB Diploma or IGCSE-based qualification needs an equivalence certificate from the Association of Indian Universities. CUET-UG is open to such students, and NEET and JEE eligibility depends on having studied the required subjects at the right level. Checking this before choosing subjects saves much pain later.",
        "For study abroad, predicted grades issued by the school in the autumn of the final year carry heavy weight. UK offers usually ask for a total IB score with minimum Higher Level grades, while US applications weigh grades as one part of a wider file. Canada, Australia and parts of Europe have their own equivalence systems.",
        "Tutors do not run admissions counselling; their part is subject depth and exam technique. They are happy to describe what levels a course typically expects so that study time goes where it matters.",
      ],
      bullets: [
        "Equivalence from the AIU is needed for most Indian courses",
        "CUET-UG accepts IB and IGCSE-based qualifications",
        "NEET and JEE need the right subjects at the right level",
        "Predicted grades matter for applications abroad",
      ],
    },
    {
      heading: "How are IB Maths AA and AI and the sciences taught to a Sitamarhi student?",
      paragraphs: [
        "Maths Analysis and Approaches is for students headed toward engineering, pure science or economics with a heavy quantitative side. A student from Bihar Board Class 10 usually has solid algebra and calculus drills, and the stretch is proof and unfamiliar problems. Applications and Interpretation is about data, probability distributions and modelling with a calculator used fluently.",
        "Physics at Higher Level is taught with a mix of derivation and estimation, since both written papers reward speed and clarity. Chemistry spends time on moles and equilibrium early, then moves to organic pathways. Biology is taught with model answers and command-word drills so a student can see what a full-mark response looks like.",
        "For each science, the Internal Assessment is coached but never written. A tutor helps a student find a workable question, explains what each criterion rewards, and comments on drafts. A Sitamarhi student may struggle to find lab equipment, so tutors suggest investigations that can be done safely with household materials or simulations.",
        "Lessons tend to combine a short theory recap, a problem set attempted aloud, and a marked past-paper question. Recordings of the whiteboard stay available for revision, which matters when a lesson is cut short by a flooded road or a power cut.",
      ],
      bullets: [
        "AA suits proof-heavy routes and AI suits data and modelling",
        "Physics and Chemistry HL reward speed and clear method",
        "Biology needs command-word precision",
        "IA coaching gives feedback on drafts, never text",
      ],
    },
    {
      heading: "How do IGCSE Core and Extended tiers and subject choices work when studying from Sitamarhi?",
      paragraphs: [
        "Core and Extended tiers cap the grades available, so the choice decides what a student can reach. Core tops out lower; Extended opens the highest grades but asks for more. For a family without a school counsellor nearby, a tutor's diagnostic in the first weeks helps decide whether Extended is realistic.",
        "A student planning the IB Diploma later is usually better served by Extended Mathematics and Additional Mathematics. Extended sciences prepare for HL Physics and Chemistry. A student heading to A Levels may choose a different mix, and tutoring follows that choice.",
        "Edexcel and Cambridge approach the same ideas with different questions and wording. A student enrolled through an online school may be on either board, and the tutor matches to that one. Exam series differ too: Cambridge May-June and October-November, Edexcel January, May-June and sometimes November.",
        "Since distance learners are not tied to one school's timetable, subject lists can be broader. A Sitamarhi student can add Hindi, Economics or Computer Science without waiting for a local school to offer them.",
      ],
      bullets: [
        "The tier decision needs advice early",
        "Extended plus Additional Maths leads into IB Maths AA",
        "Board and tier determine the preparation",
        "Distance study can widen the subject list",
      ],
    },
    {
      heading: "How does IB Gram match a tutor for a Sitamarhi family?",
      paragraphs: [
        "It begins with a short brief: programme or board, subject and level, current or predicted grade, exam session and what worries you most, whether a topic, an assessment or a coming move. That brief matters more than a photograph or a long biography.",
        "Syllabus fit comes first, because a wrong match in a town with no local alternative is costly. Tutors are checked for qualifications, recent teaching of the exact subject and level, and how they handle assessments.",
        "The free trial lesson is where the decision is made. Your child works through a real topic, you see whether the tutor explains clearly and asks diagnostic questions, and afterwards receives a short written plan for the first month.",
        "If the fit is wrong at any point, the tutor is changed. Rates are quoted in writing before booking, and there is no long contract to get out of.",
      ],
      bullets: [
        "A short brief shapes the shortlist",
        "Syllabus fit is checked first",
        "Free trial lesson and written plan",
        "Tutor change at any point",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge or Edexcel IGCSE to students in Sitamarhi. Each match weighs the exact syllabus, level and exam session, and every lesson runs live online because no local school offers these courses.",

  process: [
    { title: "Send your brief", description: "Tell us the programme or board, subject, level, current grade and the evenings that work in Sitamarhi." },
    { title: "Get a shortlist", description: "We match on syllabus fit first and explain why each tutor suits your child." },
    { title: "Try a free lesson", description: "Your child works through a real topic on video with the tutor, with no obligation afterwards." },
    { title: "Approve a first-month plan", description: "The tutor writes up topics, rhythm and how progress will be reported; you agree or ask for changes." },
    { title: "Start regular sessions", description: "Weekly online lessons with a note after each one and a review every few weeks." },
  ],

  whyPoints: [
    { title: "Matched to the exact syllabus", description: "A tutor is chosen for the subject, level, board and tier your child sits, not a general label." },
    { title: "A specialist where none is local", description: "Sitamarhi has no IB or IGCSE school, so the choice comes from tutors across India instead of none nearby." },
    { title: "A free trial lesson first", description: "You judge the tutor on a real topic before any commitment." },
    { title: "Integrity protected", description: "Tutors coach assessed work closely but never write any part of it." },
    { title: "Progress you can read", description: "A short written note after each lesson and a fuller review every few weeks." },
    { title: "Flexible and independent", description: "No school or board ties, no long contract, and a tutor change if needed." },
  ],

  faqs: [
    { question: "Are there any IB schools in Sitamarhi?", answer: "No school in Sitamarhi is confirmed to offer the IB Diploma, MYP or PYP. Town schools follow the Bihar Board, CBSE and a few ICSE programmes. Families interested in the IB usually continue a course begun elsewhere, follow an online provider, or plan a move to Patna, Kolkata or Delhi NCR. Tutors here are matched online to whichever route your child is on." },
    { question: "Is there a Cambridge or Edexcel IGCSE school in Sitamarhi?", answer: "Not that we could confirm. Sitamarhi has no known Cambridge or Pearson Edexcel IGCSE centre, so students who sit these exams study through an online school, a previous school elsewhere or a private candidacy arrangement. A tutor is matched to the board, code and tier your child's exam entry names." },
    { question: "Do IB Gram tutors visit homes in Sitamarhi?", answer: "No, tutors do not visit homes in Sitamarhi. In-person home tuition runs only in Gurugram and parts of Delhi NCR. In Sitamarhi your child gets online home tuition: a live one-to-one lesson over video on a laptop, from the comfort of home, with a shared whiteboard and marked past papers on screen." },
    { question: "How much do IB or IGCSE tutors cost in Sitamarhi?", answer: "There is no single rate; the fee depends on the programme, level, subject, lesson length and the tutor's experience with that syllabus. Less common courses such as IB Physics HL cost more because fewer tutors teach them. You receive the rate in writing before the free trial ends, and there is no travel cost added because lessons are online." },
    { question: "Can a tutor keep my child's IB or IGCSE course going after we moved to Sitamarhi?", answer: "Yes, this is a typical reason for contacting us. Since no local school teaches either syllabus, continuity depends on a tutor who knows the exact course. We start from the subject, level and exam session your child was following, so the move feels like a continuation rather than a restart." },
    { question: "Is the trial lesson really free?", answer: "Yes. The first lesson is free and carries no obligation. Your child works on a real topic from their syllabus, and afterwards the tutor shares a short plan. You then decide whether to continue, adjust the plan or ask for a different tutor, with no charge for the trial." },
    { question: "Will a tutor write my child's Internal Assessment or Extended Essay?", answer: "No. Tutors coach and never write assessed work. They can help choose a workable research question, explain what each criterion rewards, plan data collection and give feedback on drafts. Every word submitted must be the student's own, which also protects the student under IB academic-integrity rules." },
    { question: "Which IB Diploma subjects can you cover for a Sitamarhi student?", answer: "We cover the main subject groups, with Maths Analysis and Approaches and Applications and Interpretation, Physics, Chemistry, Biology, Economics, Business Management, English A and Computer Science most requested, plus Theory of Knowledge and Extended Essay guidance. Hindi A or B support is also available for students who want it." },
    { question: "Do you teach IB MYP and PYP as well as the Diploma?", answer: "Yes, the whole continuum is covered. MYP lessons for Sitamarhi students focus on criterion-based writing, science analysis and the Personal Project's planning. PYP lessons are shorter and cover reading, number work and research habits for the Exhibition, often in brief online sessions." },
    { question: "Does online tuition work as well as a tutor sitting next to my child?", answer: "For most IB and IGCSE work, yes. A shared whiteboard, screen-shared past papers and recorded solutions reproduce nearly everything that a tutor seated beside your child would do. In Sitamarhi it also opens a wider choice of specialists. The real limit is connectivity, so we agree in advance what happens if a lesson drops." },
    { question: "What if the internet or power fails during a lesson in Sitamarhi?", answer: "The tutor and family agree a fallback when the lessons begin. Usually the lesson is rescheduled within the same week, and any worked solutions or notes from the session are shared in writing. During monsoon weeks we suggest a slightly looser schedule and more written work between lessons." },
    { question: "When should my child start IB or IGCSE tutoring?", answer: "Ideally at the start of the course: Class 11 for the Diploma, Class 9 for IGCSE. That leaves time to fix foundations before internal exams, coursework deadlines and predicted grades. Starting later is still useful, with a plan focused on the highest-value topics and past papers." },
    { question: "My child is moving from Bihar Board or CBSE to IB or IGCSE. Can you help?", answer: "Yes. The biggest gap is usually question style: words like 'explain', 'evaluate' and 'justify' need teaching directly, along with habits for planning coursework. Content is often familiar from board study, and a few weeks of targeted practice makes the new format feel ordinary." },
    { question: "Can lessons be in the evenings or at weekends?", answer: "Yes. Most Sitamarhi families choose weekday evenings after school or weekend mornings. We plan around Chhath, the Janaki Navami fair, winter fog and monsoon flood weeks. A second weekly slot before mock exams or an exam series is easy to add online." },
    { question: "What happens if we are not happy with the tutor?", answer: "Tell us and we will arrange a different tutor. Progress is reviewed every few weeks, and a pairing that is not working is changed instead of endured. Nothing is locked in, so lessons can also be paused or stopped without penalty." },
    { question: "Is IB Gram affiliated with any school in Sitamarhi, or with the IB, Cambridge or Pearson?", answer: "No. IB Gram is independent of every school, and of the International Baccalaureate, Cambridge Assessment International Education and Pearson Edexcel. Schools named on this page only describe where students in the wider region study. Tutors plan around each student's own school calendar and published syllabus." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How matching works in other Indian cities and towns." },
    { label: "Home tuition in Gurugram", href: "/gurgaon/", description: "The one area where tutors attend a student's home in person." },
    { label: "The IB Diploma explained", href: "/programmes/dp/", description: "Subjects, levels, TOK, the Extended Essay and internal assessment weighting." },
    { label: "The IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, assessment and the Personal Project in plain terms." },
    { label: "The IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and what the Exhibition involves." },
    { label: "IGCSE explained", href: "/igcse/", description: "Cambridge and Edexcel boards, tiers and exam series compared." },
    { label: "IB Maths, AA or AI", href: "/courses/ib/mathematics/", description: "Which Maths course suits which student." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles by subject, programme and teaching experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and get a shortlist." },
    { label: "Tutoring for Muzaffarpur families", href: "/muzaffarpur/", description: "The nearest large Bihar city with a longer coaching culture." },
    { label: "Tutoring for Darbhanga families", href: "/darbhanga/", description: "Another Mithila city, home to a university many local students consider." },
    { label: "Tutoring for Patna families", href: "/patna/", description: "The state capital, a common stepping stone for Bihar students." },
  ],

  closingHeading: "Start with a free trial lesson for your Sitamarhi student",
  closingBody:
    "Send the programme or board, the subject and level, and the evenings when the house is quietest. A tutor whose experience fits will reply with trial times, at no charge. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
