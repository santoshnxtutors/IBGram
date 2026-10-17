import type { CitySeoPage } from "../types";

/**
 * /madhepura/ - IB and IGCSE online tuition for Madhepura, Kosi region, Bihar. No IB or
 * Cambridge/Edexcel school is confirmed in the district, so clusters are labelled nearby cities
 * (Kolkata, Delhi NCR, Mussoorie) taken from neighbouring Bihar pages. Home visits not offered.
 */
export const madhepura: CitySeoPage = {
  slug: "madhepura",
  countryName: "Madhepura",
  countryNameLong: "Madhepura, Bihar",
  demonym: "Madhepura",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "After the school day and any coaching-class hour, in the evening when load-shedding is least likely, plus Sunday mornings and planned gaps around Chhath and the Kosi flood weeks",
  lastUpdated: "2026-09-21",
  state: "Bihar",
  stateCode: "IN-BR",
  geo: { latitude: 25.9231, longitude: 86.7923 },
  alternateNames: ["Madhepura Bihar", "Madhipura", "Electric Loco Capital Madhepura"],
  wikipedia: "https://en.wikipedia.org/wiki/Madhepura",
  stripSchools: [],

  title: "Madhepura IB & IGCSE Tutors | Private Online Tuition",
  metaDescription:
    "Online private IB and IGCSE tuition for Madhepura and Kosi-belt families, covering DP, MYP, PYP, Cambridge and Edexcel, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Madhepura",
  heroEyebrow: "PRIVATE ONLINE IB & IGCSE TUITION FOR MADHEPURA",
  heroSubtitle:
    "Private tuition from home in Madhepura, for students on or heading towards an IB or IGCSE course, is delivered online and one-to-one: the tutor never makes the trip, and nor does the student. With the nearest international-curriculum schools in Kolkata and Delhi NCR and a district economy built on the Kosi plain and a locomotive works, the practical route is a specialist on the screen.",
  primaryKeyword: "IB and IGCSE tutors in Madhepura",
  imageAltText: "A Madhepura student and an online tutor going through an IGCSE chemistry past paper during a live video lesson",
  secondaryKeywords: [
    "IB tutor in Madhepura",
    "IGCSE tutor in Madhepura",
    "IB home tuition Madhepura",
    "IGCSE home tuition Madhepura",
    "IB private tuition Madhepura",
    "IB Maths tutor Madhepura",
    "IGCSE Maths tutor Madhepura",
    "IB Physics tutor Madhepura",
    "IB Chemistry tutor Madhepura",
    "IB Biology tutor Madhepura",
    "IB DP tutor Madhepura",
    "IB MYP tutor Madhepura",
    "IB PYP tutor Madhepura",
    "IGCSE online tuition Madhepura",
    "online home tuition Madhepura",
    "Cambridge IGCSE tutor Madhepura",
    "Edexcel IGCSE tutor Madhepura",
    "IB tutor Singheshwar Murliganj",
    "IB tuition Kosi region Bihar",
    "IGCSE tutor Saharsa Madhepura Supaul",
  ],

  heroTrustPoints: [
    "Live one-to-one online lessons, with nothing to travel for",
    "A tutor picked for the exact syllabus code, tier and level",
    "Lesson times planned around Chhath, load-shedding and Kosi flood weeks",
    "A free trial, then a rate in writing before any booking",
    "An independent service, unconnected to any board or school",
  ],
  heroStats: [
    { value: "Online", label: "Every lesson is live on video" },
    { value: "DP, MYP, PYP, CP", label: "IB programmes handled" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards handled" },
    { value: "Free trial", label: "First lesson without charge" },
  ],

  intro: {
    heading: "Madhepura, the Kosi plain and the case for a specialist on screen",
    paragraphs: [
      "Madhepura lies at the centre of the Kosi plain in Mithila, a town where Maithili is spoken at home and where Indian Railways and Alstom built an electric locomotive works that has earned it the label of India's electric loco capital. It is also home to Bhupendra Narayan Mandal University and the Jannayak Karpuri Thakur Medical College. A family here sees engineering and medicine at close quarters, which is part of why science tuition is in demand.",
      "Since people search for home tuition first, it is worth stating the position early. IB Gram tutors do not visit Madhepura, and in-person home visits run only in Gurugram and parts of Delhi NCR. A Madhepura student receives online home tuition: a private live lesson at the family's own desk, on a laptop, with the tutor writing on a shared board and sending a short recap afterwards.",
      "Nobody has been able to show us an IB or Cambridge or Edexcel IGCSE school inside the district. The schools families name are in Kolkata, Delhi NCR and the Mussoorie and Dehradun boarding belt. That is why tuition here often supports a planned move, an online school enrolment, or a student preparing privately, not a child already seated in an international classroom down the road.",
      "IB Gram works independently of the International Baccalaureate, Cambridge, Pearson and all named schools. Our tutors teach and review; they do not write Internal Assessments, Extended Essays, TOK essays or coursework. The student does that work, and a good tutor makes sure they know how.",
    ],
    bullets: [
      "IB DP, MYP, PYP and CP subjects, one student at a time",
      "Cambridge and Pearson Edexcel IGCSE, all tiers",
      "Online tuition designed around Bihar's power and flood realities",
      "Maithili, Hindi and English explanation where useful",
      "A free first lesson and written rates before any commitment",
    ],
  },

  programmesIntro:
    "Few Madhepura children begin in an international classroom. They arrive from Bihar Board or CBSE schools, or through an online school, or as part of a family plan to study in Kolkata, Delhi or abroad. Each IB stage below is described with that starting point in mind, so a parent can see what a tutor would actually do in the first month.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12 (Nursery to Class 7)",
      description:
        "Learning is arranged around inquiry units across six themes, and the programme ends with a student-led Exhibition rather than a formal exam.",
      countryNote:
        "A Madhepura child on this route usually needs English reading stamina and confidence in asking questions aloud, since both Maithili and Hindi dominate the local school day.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16 (Class 6-10)",
      description:
        "Eight subject groups are assessed against four criteria each, and the Personal Project in the final year tests independent research and reflection.",
      countryNote:
        "Students crossing over from Bihar Board classes commonly find extended written explanation and showing method the biggest change, and they benefit from weekly writing practice.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Ages 16-19 (Class 11-12)",
      description:
        "Three subjects at Higher Level and three at Standard, with Theory of Knowledge, the Extended Essay and service hours forming the core of the qualification.",
      countryNote:
        "Diploma interest from Madhepura tends to be linked to a move to Kolkata or Delhi NCR or an overseas degree, so tutors prioritise maths and sciences that must be sound on day one.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Ages 16-19 (Class 11-12)",
      description:
        "A pair of Diploma courses is combined with career-related study and a reflective project, so it fits students with a clear vocational aim.",
      countryNote:
        "Engineering and rail manufacturing are visible locally, so technical pathways in CP hold appeal; tuition focuses on the two academic courses the student has chosen.",
    },
  ],

  subjectsIntro:
    "Science and mathematics draw most of the requests from Madhepura, reflecting the town's engineering and medical environment, but the match process stays the same for every subject: exact course, HL or SL, stage of the internal assessment and the next exam session. A trial lesson tests whether the style suits the student before any fee is discussed.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Suited to future engineers and scientists; we link algebra, functions and calculus so that each topic prepares the next." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "A statistics and modelling course that suits medicine, economics and social science; technology skills are practised from week one." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, electricity and the option topics, stressing units, uncertainty and clear written justification." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Mole calculations, structure and organic reactions, practised with the data booklet so students rely on it in exams." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics and ecology, with extended-answer practice; Kosi wetlands offer local examples for ecology questions." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets and development, illustrated with Bihar's flood-prone agriculture and migration patterns." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers and the internal commentary, with industrial and trading examples from the Kosi belt." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Text analysis and the oral, with extra speaking practice for students whose first language is Maithili or Hindi." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, networks and a scoped internal project that one student can complete." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Flooding, sedimentation and river management on the Kosi make a strong source of case studies." },
    { name: "IB Psychology", levels: "HL / SL", description: "Named studies and structured essays, with guidance on a manageable internal experiment." },
    { name: "IB Geography", levels: "HL / SL", description: "Hazards, rivers and population, using the Kosi floodplain as the running example." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and essay writing, taught as two separate skills." },
    { name: "IB Hindi A or Hindi B", levels: "HL / SL", description: "Literary analysis and oral practice in Hindi, useful for students strongest in a home language." },
    { name: "Theory of Knowledge and Extended Essay coaching", levels: "DP Core", description: "Question setting, planning and reading drafts for clarity; all writing remains the student's." },
  ],

  igcseSubjectsIntro:
    "An IGCSE candidate in Madhepura should start by sharing the syllabus code and tier, because Cambridge Extended and Edexcel Higher are prepared differently. We also ask whether the student is entered through a school, an online centre or as a private candidate, since that affects the session and the practical paper arrangements.",
  igcseSubjects: [
    { name: "IGCSE Mathematics (Cambridge 0580 / Edexcel 4MA1)", levels: "Core / Extended or Foundation / Higher", description: "Algebra, geometry, trigonometry and statistics with board-specific past-paper timing." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Motion, electricity, waves and thermal physics, with tidy calculation layouts and practical-skills questions." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, reactivity, rates and organic chemistry, taught in a steady sequence." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cell structure, enzymes, inheritance and ecosystems, with labelled-drawing and data practice." },
    { name: "IGCSE English First or Second Language", levels: "Cambridge / Edexcel", description: "Comprehension, summary, directed writing and speaking, suited to students learning in Hindi or Maithili." },
    { name: "IGCSE Economics and Business Studies", levels: "Cambridge / Edexcel", description: "Definitions, diagrams and case-based questions." },
    { name: "IGCSE Computer Science", levels: "Cambridge / Edexcel", description: "Pseudocode, logic and programming tasks." },
    { name: "IGCSE Hindi as a second language", levels: "Cambridge / Edexcel", description: "Reading, writing and speaking at exam standard." },
    { name: "IGCSE Geography and History", levels: "Cambridge / Edexcel", description: "Case studies, map work and source questions under time limits." },
  ],

  regionsTitle: "Across the Kosi belt: where Madhepura students live and study",
  regionsIntro:
    "Madhepura district is wide and low, and each block has a slightly different pattern of schooling, power supply and travel. Since every lesson runs online, the notes below are about connection, timing and the schools families look towards, not about where a tutor would sit.",
  regions: [
    { name: "Madhepura town and Dauram Madhepura station area", note: "The administrative and commercial centre, where most coaching institutes sit; evening online slots fit after the coaching hour." },
    { name: "Singheshwar", note: "Known for the Singheshwar Sthan temple, where Shivratri and Shravan crowds can affect travel and routine." },
    { name: "Murliganj", note: "A busy market town on the highway to Bhagalpur and Purnia; families here often look towards those cities for school." },
    { name: "Udakishunganj", note: "A block town where broadband is patchy, so a mobile data backup is arranged before lessons start." },
    { name: "Bihariganj", note: "Connected to Madhepura and Purnia by road; some families commute or send children to schools in neighbouring districts." },
    { name: "Kumarkhand and Gwalpara", note: "Rural blocks where monsoon flooding can close roads and disrupt power." },
    { name: "Alamnagar and Puraini", note: "Smaller settlements close to Madhepura town, with students who sometimes travel in for coaching." },
    { name: "Ghailarh and Chausa", note: "Blocks on the eastern side, nearer to Purnia, with their own patterns of school choice." },
  ],

  schoolClusters: [
    {
      city: "Nearby: Kolkata",
      note: "Kolkata is the most common reference point for Bihar families considering an international-curriculum boarding school. No such school is confirmed inside Madhepura itself, so please check every school's admissions office directly.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "The Cambridge School, Calcutta"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Some Madhepura families look at Delhi NCR for a Diploma move or a relocation of a parent.",
      schools: ["Vasant Valley School, Delhi", "Sanskriti School, Delhi", "The British School, New Delhi"],
    },
    {
      city: "Nearby: Mussoorie and Dehradun boarding belt",
      note: "A traditional destination for families in Bihar and eastern India who want boarding.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent tutoring service and is not affiliated with or endorsed by the IB, Cambridge, Pearson Edexcel or any school named here. Names appear only as reference points for where international-curriculum schools exist relative to Madhepura, and each school's current offering, fees and admissions process should be confirmed with the school.",

  tutorsIntro:
    "Our tutors teach from India on Indian Standard Time and meet Madhepura students only online, on a laptop at home. Each is matched to the IB or IGCSE course, level and exam series, and the first lesson is a free trial.",

  modesIntro:
    "Madhepura students can learn in three ways, all online. No tutor travels to the district, and home visits are limited to Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "One-to-one lessons at home",
      description: "A single student and tutor meet live at a fixed weekly time, with the student at the family's desk in Madhepura.",
      bullets: ["Undivided attention", "A recap note after every session", "Flexible when load-shedding or flood disruption hits"],
    },
    {
      title: "Bridge lessons for a school move",
      description: "A structured block for students heading to a Kolkata, Delhi or boarding school and needing English, maths and science at the new pace.",
      bullets: ["Diagnostic trial lesson first", "Weekly targets agreed in writing", "Ends with a mock paper"],
    },
    {
      title: "Exam-period coaching",
      description: "Intensive lessons in the weeks before IB, Cambridge or Edexcel papers.",
      bullets: ["Timed past papers", "Mistake log reviewed each session", "Plans around Chhath and Diwali"],
    },
  ],

  sections: [
    {
      heading: "Who in Madhepura asks about IB and IGCSE tuition?",
      paragraphs: [
        "Engineers and technical staff connected to the locomotive works form one visible group. Some have worked in other Indian cities or abroad and know the IB or Cambridge curriculum by reputation or from earlier postings, so they ask about keeping a child on that path while the family is stationed in the district.",
        "Doctors, teachers and university staff form another group, linked to the medical college and Bhupendra Narayan Mandal University. They tend to value science and want a student to reach a strong foundation in Biology, Chemistry and Mathematics, whether the destination is NEET, JEE or an overseas degree.",
        "A third group is landowning and trading families with relatives working in cities or abroad. Migration from Bihar is long-established, and parents with a brother in Delhi or a cousin in Canada often consider an international qualification a way to keep options open, asking first about English and mathematics.",
        "Lastly there are students in the wider Kosi division, including Saharsa and Supaul, who see Madhepura as the nearest town for tuition and want to add an international subject or two alongside a Bihar Board programme.",
      ],
      bullets: [
        "Technical staff linked to the locomotive works",
        "University and medical college families",
        "Trading and landowning families with relatives elsewhere",
        "Students from nearby Kosi division districts",
      ],
    },
    {
      heading: "Bihar Board, CBSE, IGCSE or IB: which differences matter most in Madhepura?",
      paragraphs: [
        "Most Madhepura schools teach the Bihar School Examination Board syllabus, often in Hindi medium, with a smaller number of CBSE schools. These systems emphasise recall, worked examples and stable textbook coverage. IGCSE and IB papers ask the same sort of content in less predictable forms, which can be jolting for a student who has always prepared from a fixed set of chapters.",
        "Language is a real factor. A student who thinks in Maithili or Hindi must learn to write scientific explanations in English, and that takes practice independent of subject knowledge. It is the most common reason a capable student under-performs in the first months of an international course.",
        "Assessment shape also differs, as the table shows. It is descriptive and not a ranking: a strong Bihar Board or CBSE result remains a sound route to Indian universities, and some Madhepura families will rightly stay with it.",
      ],
      table: {
        caption: "Bihar Board and CBSE compared with IGCSE and IB Diploma",
        columns: ["Point", "Bihar Board / CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Medium", "Hindi or English", "English, language electives", "English plus a second language"],
          ["Testing style", "Recall and worked examples", "Applied questions, practical or coursework in some subjects", "Exams plus internal assessments and Extended Essay"],
          ["Exam period", "February to March", "May-June, October-November, Edexcel January", "May or November"],
          ["Grades", "Marks or grade bands", "A* to G or 9 to 1", "1 to 7 per subject"],
          ["Indian college route", "Direct", "Mostly leads to Class 11 routes", "AIU equivalence plus CUET-UG or entrance exams"],
          ["Nearby schools", "Plenty", "None confirmed locally", "None confirmed locally"],
        ],
      },
    },
    {
      heading: "What shapes the cost of IB and IGCSE tuition in Madhepura?",
      paragraphs: [
        "We do not print prices because any figure would be wrong for someone. Instead, once we know the course, level and exam date, we send a written rate before booking, so families can compare it calmly against the alternatives they know.",
        "Level and subject set a base. A PYP reading tutor and a Higher Level Physics tutor bring different depth, and specialists in demanding Diploma courses are fewer. The second influence is experience with the exact specification: a tutor who has prepared several cohorts for the same paper brings shortcuts that a newcomer lacks.",
        "Weekly frequency is the lever families control. Two short lessons a week cost more than one but can shorten the total time needed, while one lesson on the weakest subject is a good start. We usually suggest starting lightly and adjusting after a month.",
        "Online delivery removes rent and travel, which matter in a region where roads flood. The rate is therefore about the tutor's time and preparation, and the free trial lets you judge it first.",
      ],
      bullets: [
        "Programme and level",
        "Tutor experience with the syllabus",
        "Number of weekly sessions",
        "Proximity to the exam series",
      ],
    },
    {
      heading: "Online tuition, a Patna or Bhagalpur institute, a local tutor or self-study: what works from Madhepura?",
      paragraphs: [
        "Madhepura has a busy coaching culture for JEE, NEET and Bihar Board, but very few institutes that teach IB or IGCSE, and those that exist in Bhagalpur, Patna or Kolkata require the student to live nearby. Moving a teenager to a hostel for coaching is a serious decision, and many families would prefer to keep the child at home until they have to move.",
        "Local tutors in Madhepura are often good on Bihar Board and basic mathematics, and they understand the student's environment. For a subject like IB Physics Higher Level or IGCSE Extended Chemistry, however, the tutor needs to have taught that exact syllabus, and this is rarely available locally.",
        "Self-study with past papers is achievable for a disciplined senior student, particularly in subjects like Computer Science, but it offers no corrective feedback on extended answers, which is where most marks are lost.",
        "Online one-to-one tuition offers a specialist without relocation. It does need a dependable connection, which can be a challenge in flood months, so we agree a backup plan before lessons start.",
      ],
      table: {
        caption: "Ways to get IB or IGCSE help from Madhepura",
        columns: ["Route", "IB or IGCSE specialism", "Relocation or travel", "Flexibility"],
        rows: [
          ["Online one-to-one", "Matched by course and level", "None", "Reschedule with notice"],
          ["Institute in Patna, Bhagalpur or Kolkata", "Varies, few specialise", "Hostel stay or long travel", "Fixed batches"],
          ["Local tutor in Madhepura", "Good for Bihar Board, limited for IB", "Local", "Depends on the tutor"],
          ["Self-study", "No feedback on written answers", "None", "Complete"],
        ],
      },
    },
    {
      heading: "How do Kosi floods, Chhath and the heat affect exam preparation in Madhepura?",
      paragraphs: [
        "Madhepura's calendar is shaped by the Kosi, known historically for shifting channels and severe flooding. The monsoon from July to September can cut roads and power in low blocks, and a student in a flood-affected village may lose several days of study. Online plans here need slack built in and a mobile data backup from the start.",
        "October and November bring Dussehra, Diwali and then Chhath, the great festival of Bihar. Families travel, routines stop, and the weeks fall directly before the IB November and Cambridge October-November sessions. Revision must therefore begin in August or September, with Chhath treated as a planned pause.",
        "Winter brings fog and cold from December to January, close to the Edexcel January series and mock exams. Shorter lessons help, and so does choosing an early evening slot before temperatures drop.",
        "Summer from April to June is hot, with load-shedding in many places. For students preparing for the May series, early morning lessons, before both heat and power cuts, are usually the most reliable.",
      ],
      table: {
        caption: "A planning calendar for a Madhepura IB or IGCSE student",
        columns: ["Period", "Exam or school event", "Local factor", "Approach"],
        rows: [
          ["December to January", "Mock exams, Edexcel January", "Fog and cold", "Short early-evening lessons"],
          ["April to June", "IB May, Cambridge and Edexcel summer", "Heat and power cuts", "Early morning lessons"],
          ["July to September", "New term, internal assessments", "Monsoon and Kosi floods", "Data backup and slack in the plan"],
          ["October to November", "IB November, Cambridge November", "Dussehra, Diwali, Chhath", "Revision started by September"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Madhepura study next?",
      paragraphs: [
        "Close to home, Bhupendra Narayan Mandal University and the Jannayak Karpuri Thakur Medical College are well-known local institutions, though admission to medicine runs through NEET and to engineering through JEE or state entrance routes. IB and IGCSE candidates should read each exam's official bulletin to confirm eligibility, subject requirements and board equivalence.",
        "Farther afield, Patna, Kolkata and Delhi offer many choices. For the IB Diploma, the Association of Indian Universities issues an equivalence certificate that many Indian universities require, and CUET-UG is the entrance route at many central universities. Each university publishes its own rules.",
        "Bihar families with relatives abroad also look to Canada, the United Kingdom, Australia and the Gulf. Universities there look at predicted or final grades, subject choices and English test scores, and the IB Diploma and Cambridge qualifications are widely understood.",
        "Tutors help with subject knowledge and with practice for admissions tests. They do not write application essays or personal statements, which must be the student's own words.",
      ],
    },
    {
      heading: "IB Maths AA or AI: how should a Madhepura student decide?",
      paragraphs: [
        "Analysis and Approaches is usually the right choice for students who like algebra, functions and calculus and plan to study engineering, physics or mathematics. Applications and Interpretation suits those who will follow medicine, economics, business or social science, because it leans more on statistics and modelling and allows greater use of technology.",
        "Higher Level in either course is heavy. Many students in a competitive coaching environment try to take everything at Higher Level, and then struggle to sustain the workload. We suggest a short diagnostic lesson first, and a frank conversation about how many Higher Level subjects the student can really handle.",
        "In the sciences, Physics is the most mathematical, Chemistry demands careful calculation and reaction reasoning, and Biology emphasises writing and data. Each needs an internal assessment built on a genuine investigation. A student in Madhepura may have limited lab access, so the tutor helps plan a feasible investigation using accessible materials or publicly available data.",
        "Medical aspirants should note that NEET has its own syllabus and eligibility rules, separate from the IB, and should plan accordingly with official information.",
      ],
      bullets: [
        "AA for engineering and physical science routes",
        "AI for medicine, economics and social science routes",
        "Limit Higher Level subjects to what is sustainable",
        "NEET and JEE have their own separate syllabi",
      ],
    },
    {
      heading: "How should a student from Madhepura choose IGCSE tiers and subjects?",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended papers in most subjects, while Edexcel offers Foundation and Higher tiers in mathematics. Since the top grade on a lower tier is capped, a student who wants to continue in IB or A Level sciences should aim for Extended or Higher where possible.",
        "Most IGCSE students take five to eight subjects. English, mathematics and the sciences are the common core, with a language and one or two subjects such as economics or geography added. A Madhepura student often includes Hindi as a second language, which is a familiar and high-scoring choice.",
        "Practical assessment varies. Cambridge sciences may use a practical paper or an alternative-to-practical written paper; Edexcel sciences are assessed in writing. A tutor can show which applies to the specific code and how to practise the skills with simple household items.",
        "Private candidates should confirm an exam centre early, since not every centre accepts external entries and deadlines are fixed. We can explain the process in general terms, but the centre's rules apply.",
      ],
      table: {
        caption: "IGCSE tiers explained",
        columns: ["Tier", "Board", "Top grade", "Usual fit"],
        rows: [
          ["Core", "Cambridge", "C", "Consolidation, fewer abstract topics"],
          ["Extended", "Cambridge", "A*", "Future IB or A Level science students"],
          ["Foundation", "Edexcel maths", "5", "Building basic fluency first"],
          ["Higher", "Edexcel maths", "9", "Students aiming for top grades"],
        ],
      },
    },
  ],

  process: [
    { title: "Send a message", description: "WhatsApp +91 7439 368 115 or email support@ibgram.com with class, subject and board." },
    { title: "Free matched trial", description: "A tutor who has taught the exact course runs a free online lesson." },
    { title: "Rate in writing", description: "If you want to continue, the plan and rate are sent in writing first." },
    { title: "Weekly live lessons", description: "Sessions run at the agreed time, each followed by a short recap note." },
    { title: "Review and adjust", description: "After a few weeks we review progress and change the plan or tutor if needed." },
  ],

  whyPoints: [
    { title: "A specialist, not a generalist", description: "The exact course and level decide which tutor you get." },
    { title: "No relocation needed", description: "A student can stay at home rather than moving to a hostel for coaching." },
    { title: "Built for Kosi-belt conditions", description: "Backup data and flexible slots are planned before floods or power cuts arrive." },
    { title: "Bilingual support", description: "Explanations can start in Hindi and move to English exam language." },
    { title: "Coaching within limits", description: "Tutors guide and correct, but assessed work is written by the student." },
    { title: "Clear written records", description: "A short note after each lesson keeps parents informed." },
  ],

  faqs: [
    { question: "Is IB tuition available in Madhepura?", answer: "Yes, online. IB tutors teach live one-to-one lessons from India to students in Madhepura across PYP, MYP, DP and CP subjects. Tutors do not travel to the district, so each lesson runs on the student's laptop with a shared whiteboard and a short recap note." },
    { question: "Do tutors visit homes in Madhepura?", answer: "No. In-person home visits run only in Gurugram and parts of Delhi NCR. Madhepura families receive online home tuition instead, which is a private live lesson at the family's own desk with a matched tutor and the same one-to-one attention." },
    { question: "Is there an IB or IGCSE school in Madhepura?", answer: "None that we can confirm. Families generally look at Kolkata, Delhi NCR or the Mussoorie and Dehradun boarding belt. Please check any school's own admissions office for current programmes and fees, and tell us what your child follows so a tutor can match it." },
    { question: "How much does IB or IGCSE tuition cost in Madhepura?", answer: "The rate depends on the programme and level, tutor experience, sessions per week and the nearness of the exam. We do not print a price list. You get the rate in writing before booking, and the first lesson is a free trial." },
    { question: "Can a Bihar Board student switch to the IB or IGCSE?", answer: "Yes, ideally before Class 9 or Class 11. The big adjustments are English written explanation and application questions. A diagnostic trial lesson shows where to begin and how long a bridge is likely to take." },
    { question: "Can a private candidate take IGCSE from Madhepura?", answer: "Sometimes. Some exam centres accept private candidates, but entry deadlines and rules vary and there may be no centre nearby. We can tutor a private candidate, but the student or family must confirm a centre and entry themselves." },
    { question: "Do you teach in Hindi or Maithili?", answer: "Explanations can start in Hindi, and in some cases Maithili, where that helps, before moving to English exam wording since papers are in English. Hindi A, Hindi B and IGCSE Hindi tutors are available." },
    { question: "Do tutors write the Internal Assessment or Extended Essay?", answer: "No. Tutors explain criteria, help narrow a topic, review drafts and give feedback, but the student writes all assessed work, in line with IB academic honesty rules." },
    { question: "Which IGCSE boards do you cover?", answer: "Cambridge International and Pearson Edexcel. Please share the syllabus code and tier, such as Cambridge 0580 Extended, so the tutor prepares for the right papers and series." },
    { question: "What timings suit Madhepura students?", answer: "All in Indian Standard Time. Early evenings and Sunday mornings are the most common choices, scheduled around load-shedding and coaching hours, and lessons can move with notice during Chhath or floods." },
    { question: "What if floods or power cuts interrupt a lesson?", answer: "We suggest a charged laptop, a mobile hotspot and a phone backup. Tutors can switch to audio, and missed material is recapped in the next lesson with the written note." },
    { question: "Will Indian universities accept IB or IGCSE from a Madhepura student?", answer: "Often yes, but check each one. The AIU equivalence certificate is commonly needed for the IB Diploma, and CUET-UG, JEE and NEET have their own eligibility rules, so read the current notifications." },
    { question: "Can you help with admission tests for Kolkata or Delhi schools?", answer: "We can prepare English and mathematics for typical admission tests with practice and feedback. The school decides admissions, so we cannot promise a seat, and each school publishes its own criteria." },
    { question: "Is PYP or MYP tuition available?", answer: "Yes. For PYP we focus on reading, writing and inquiry habits; for MYP on criterion-based subject work and planning for the Personal Project. Tutors do not do the project or Exhibition for the child." },
    { question: "Is the first lesson free?", answer: "Yes, the trial lesson is free and carries no obligation. If the fit is wrong, we change the tutor, and any rate is given in writing before you continue." },
    { question: "How do I start?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with class, programme, subject and exam date. We will suggest a tutor, arrange the free trial and send the plan in writing." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tuition across India", href: "/india/", description: "How online IB and IGCSE tuition works in other cities." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subjects, levels and matching for IB students." },
    { label: "IGCSE tuition", href: "/igcse/", description: "Cambridge and Edexcel subjects and sessions." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What the Diploma involves and how tuition supports it." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI structure and topics." },
    { label: "Our tutors", href: "/tutors/", description: "Profiles of the online subject specialists." },
    { label: "Admissions test preparation", href: "/admissions/test-prep/", description: "English and maths practice for school entry tests." },
    { label: "Contact", href: "/contact-us/", description: "Book a free trial lesson." },
    { label: "Saharsa IB and IGCSE tuition", href: "/saharsa/", description: "The neighbouring Kosi division city, a short distance away." },
    { label: "Purnia IB and IGCSE tuition", href: "/purnia/", description: "The larger town to the east with its own school picture." },
    { label: "Bhagalpur IB and IGCSE tuition", href: "/bhagalpur/", description: "A regional city to the south with universities and coaching." },
    { label: "Patna IB and IGCSE tuition", href: "/patna/", description: "Bihar's capital and the main hub for education in the state." },
  ],

  closingHeading: "Book one free online lesson from Madhepura",
  closingBody:
    "Give us the course, level and next exam date, and we will match a tutor for a free live lesson. It is all online, so no hostel move and no flooded road stands in the way, and any rate is sent in writing first. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
