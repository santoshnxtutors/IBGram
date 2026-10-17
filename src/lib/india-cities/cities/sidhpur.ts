import type { CitySeoPage } from "../types";

/**
 * /sidhpur/ - IB and IGCSE tutoring page for Sidhpur, Patan district, Gujarat (Bindu Sarovar, Rudra
 * Mahalaya, Bohra havelis). Online-only delivery. No IB or Cambridge/Edexcel school is confirmed in
 * Sidhpur, so stripSchools is empty and clusters point honestly to Ahmedabad, Kalol and Vadodara using
 * names already verified on neighbouring published pages.
 */
export const sidhpur: CitySeoPage = {
  slug: "sidhpur",
  countryName: "Sidhpur",
  countryNameLong: "Sidhpur, Gujarat",
  demonym: "Sidhpur",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We work around Kartik Purnima fair week, GSEB March papers and the Bohra community's own calendar before confirming a recurring evening slot",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.9167, longitude: 72.3833 },
  wikipedia: "https://en.wikipedia.org/wiki/Siddhpur",
  alternateNames: ["Siddhpur", "Siddhapur", "Sidhpur Patan"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sidhpur | Private Tuition Online",
  metaDescription:
    "Private IB and IGCSE tuition for Sidhpur, Patan district: live online one-to-one lessons with subject-matched tutors, written notes and a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Sidhpur",
  heroEyebrow: "ONLINE IB & IGCSE PRIVATE TUITION FOR SIDHPUR",
  heroSubtitle:
    "Looking for IB or IGCSE home tuition in Sidhpur? Tutors here do not come to the house; the lesson comes to your child's desk instead, live and one-to-one over video. A family on the Saraswati's banks gets a tutor picked for the course code, the level and the exam session, with nothing to pay until the free trial is over.",
  primaryKeyword: "IB and IGCSE tutors in Sidhpur",
  imageAltText: "Sidhpur student revising IGCSE Chemistry notes during a live one-to-one online lesson",
  secondaryKeywords: [
    "IB tutor Sidhpur",
    "IGCSE tutor Sidhpur",
    "IB home tuition Sidhpur",
    "IGCSE home tuition Sidhpur",
    "IB private tuition Sidhpur",
    "IB Maths tutor Sidhpur",
    "IGCSE Maths tutor Sidhpur",
    "IB Physics tutor Sidhpur",
    "IB Chemistry tutor Sidhpur",
    "IB Biology tutor Sidhpur",
    "IB DP tutor Sidhpur",
    "IB MYP tutor Sidhpur",
    "IB PYP tutor Sidhpur",
    "IGCSE online tuition Sidhpur",
    "online IB tutor Siddhpur Patan",
    "IGCSE tutor Siddhpur Gujarat",
    "IB tutor Bindu Sarovar Sidhpur",
    "IB tutor Bohrawad Sidhpur",
    "IB tuition Patan district",
  ],

  heroTrustPoints: [
    "Each tutor is matched to a named syllabus, level and exam board",
    "Lessons are live and private online; no tutor visits homes in Sidhpur",
    "First lesson is a free trial, with rates in writing afterwards",
    "Written summary after each session and a tutor change if needed",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB coverage" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "IST", label: "Evening-friendly" },
    { value: "Free trial", label: "Try first" },
  ],

  intro: {
    heading: "A heritage town with international ambitions and no IB classroom",
    paragraphs: [
      "Sidhpur sits on the old Saraswati in Patan district, known for the ruined Rudra Mahalaya, the Bindu Sarovar where families come to perform rites for a mother, and the carved wooden mansions of the Dawoodi Bohra quarter. It is a town of traders and professionals with relatives across Mumbai, East Africa, the UK and the Gulf. An IB or IGCSE timetable has never been part of the local school picture, and nobody should pretend otherwise.",
      "Still, enquiries for IB and IGCSE tutoring from Sidhpur come for reasons that are easy to name. A child may be enrolled with an online school, or boarding in Ahmedabad and needing weekend help. A teenager may plan Sixth Form in England. A family may prefer to prepare a child for Cambridge IGCSE papers as a private candidate while staying in town. In every case the tutor is online, teaching live and one-to-one.",
      "The phrase private tuition from home describes the experience correctly here: your child sits at their own desk, opens a laptop, and meets a tutor for an hour. It does not describe a tutor arriving at the door. Tutors teach from elsewhere in India on Indian Standard Time, and in-person home tuition is offered only in Gurugram and parts of Delhi NCR.",
      "IB Gram is independent. It has no tie to the IB, Cambridge, Pearson or any school named here. Tutors explain and coach, and they never write an Internal Assessment, Extended Essay or any coursework that is submitted for marks.",
    ],
    bullets: [
      "Subject-matched tutors for PYP, MYP, DP and CP content",
      "Cambridge IGCSE Core and Extended, Edexcel Foundation and Higher",
      "Live lessons from home, one student at a time",
      "Free trial, then rates in writing",
      "No in-person visits to Sidhpur; those exist only in Delhi NCR",
    ],
  },

  programmesIntro:
    "Sidhpur has no IB-authorised school that we could confirm, so the programmes below are described through the needs families here bring, not through a local classroom.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "A transdisciplinary primary curriculum, where a child investigates themes such as how we organise ourselves and finishes with a group exhibition. There is no exam, so tutoring is gentle and focused on language and number confidence.",
      countryNote:
        "Sidhpur parents of PYP-age children usually ask for English conversation and reading practice in the evening, since Gujarati is the language of the street and of most local schools.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Students learn across eight subject groups and are assessed against criteria, not a single mark. Interdisciplinary units and the Personal Project at the end of Year 5 ask for planning, reflection and clear writing.",
      countryNote:
        "A child who joins MYP from a GSEB classroom has to learn to justify an answer in full sentences, so early lessons go into criterion language and structured paragraph writing.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students choose six subjects, three at Higher Level, and complete TOK, an Extended Essay and a service requirement. Final exams fall in May or November, with Internal Assessments counted in.",
      countryNote:
        "Students connected to Sidhpur typically study the Diploma elsewhere, in Ahmedabad or online, and call on us for Maths, sciences, Economics or English when one subject falls behind.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP mixes two or more Diploma courses with a career-related study and a reflective project. It suits students aiming at vocational or applied routes.",
      countryNote:
        "We rarely see CP requests from the Sidhpur area; where they appear, the tutoring focuses on the academic Diploma courses and on managing the reflective project over several terms.",
    },
  ],

  subjectsIntro:
    "Subject codes and levels matter more than a general label like IB Maths. Because Sidhpur has no school to cross-check the combination, we confirm the exact course and level in writing before recommending a tutor.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus, vectors and proof. HL students practise the unfamiliar, multi-step reasoning that Paper 3 is designed to test." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling real data, statistics and financial maths with a calculator used fluently and the Exploration planned early." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through to quantum and nuclear physics, with lab write-ups that need honest uncertainty analysis." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, equilibrium and organic mechanisms, where consistent practice with the data booklet saves time in every paper." },
    { name: "IB Biology", levels: "HL / SL", description: "From molecular biology to ecology, with command-term precision and data-analysis questions practised under time." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram-led answers with real examples, such as tourism and trade in a pilgrimage town, earn credit from examiners." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based application of theory, useful for students from trading families who grew up around shops, warehouses and accounts." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen texts, comparative essays and a recorded oral that rewards rehearsed, relaxed delivery." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming logic, databases and networking, along with a working solution for the IA and its documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "Research methods, studies and approaches, with evaluation and accurate terminology as the usual gap." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Water, climate and land-use systems, where a semi-arid region like North Gujarat gives students vivid examples of water stress." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis, essay structure and the internal investigation, with practice on paragraph-level argument." },
    { name: "IB Visual Arts", levels: "HL / SL", description: "A studio-style course that supports students interested in architecture, where Sidhpur's carved facades make an appealing theme." },
    { name: "IB Gujarati and Hindi B", levels: "HL / SL", description: "Language and literature practice that uses home fluency as a base for exam-ready writing and speaking." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation about how we know what we claim to know, rehearsed before the exhibition and the prescribed-title essay." },
  ],

  igcseSubjectsIntro:
    "IGCSE is offered by Cambridge and by Pearson Edexcel, and their syllabi are not interchangeable. A Sidhpur student should first ask which board a school or approved centre will register them for, then build the lesson plan from that board's specification.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Algebra, trigonometry, probability and graphs, taught so that every step of working can be followed by a marker." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Energy, motion, electricity and waves, with formula manipulation and experimental questions in focus." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Periodic table, reactions, organic chemistry and quantitative work with the alternative-to-practical skills." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Living organisms, transport and inheritance, with diagrams and data interpretation practised regularly." },
    { name: "IGCSE English First Language", levels: "Cambridge / Edexcel", description: "Reading for meaning, directed writing and composition with accurate, varied sentences." },
    { name: "IGCSE English Second Language", levels: "Cambridge", description: "Listening, speaking, reading and writing for students who think in Gujarati first." },
    { name: "IGCSE Economics", levels: "Cambridge / Edexcel", description: "Markets, government policy and development, with data response and concise definitions." },
    { name: "IGCSE Accounting", levels: "Cambridge / Edexcel", description: "Double-entry, final accounts and ratios, a natural fit for students who have watched a family ledger being kept." },
    { name: "IGCSE Computer Science", levels: "Cambridge / Edexcel", description: "Algorithms, data representation and programming, practised on past-paper problems." },
    { name: "IGCSE Gujarati and Hindi", levels: "Cambridge / Edexcel", description: "Second-language papers where home speech supports reading, writing and oral work." },
  ],

  regionsTitle: "Sidhpur neighbourhoods and surrounding villages",
  regionsIntro:
    "Lessons are online, yet the rhythm of a family's day still depends on the street it lives on. These are the parts of Sidhpur and its surroundings we are asked about most.",
  regions: [
    { name: "Bindu Sarovar area", note: "Busy during the Kartik Purnima fair and on shraddha days. Families here often move lessons to late evening in the festival week." },
    { name: "Bohrawad (Bohra quarter)", note: "Carved heritage houses with narrow lanes and many families with overseas links. Lessons are usually scheduled to suit the community's own calendar." },
    { name: "Rudra Mahalaya side", note: "Close to the ruined Solanki temple on the Saraswati. Quiet by evening, so a good time for Class 9 and 10 sessions." },
    { name: "Station Road and the market", note: "The commercial spine with shops and traders. Students often start after the shutters come down around 8 pm." },
    { name: "Patan Road", note: "The road toward Patan city carries buses and trucks. Morning school traffic means afternoon lessons work better." },
    { name: "Mehsana Road", note: "Residential pockets on the route to Mehsana. A few students here travel for coaching and look for online alternatives." },
    { name: "Palanpur Road", note: "Newer housing along the highway to Palanpur, with families who compare Palanpur and Sidhpur options." },
    { name: "Saraswati riverbank colonies", note: "Low-lying areas that can be disrupted by heavy monsoon days, so a backup slot is wise." },
    { name: "Kakosi and surrounding villages", note: "Villages within a short ride where families rely on private tuition and online options for anything international." },
    { name: "Unjha and Kheralu direction", note: "Students from the east who come to Sidhpur for shopping and services and learn online from home." },
  ],

  schoolClusters: [
    {
      city: "Sidhpur itself",
      note: "We found no IB or Cambridge/Edexcel IGCSE school we could confirm in Sidhpur, so no local name is given. Local options are GSEB and CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "The main hub for international schooling in Gujarat, reached in roughly two hours by road. Names are drawn from neighbouring pages of this site.",
      schools: ["Mahatma Gandhi International School, Ahmedabad", "Ahmedabad International School", "Calorx Olive International School"],
    },
    {
      city: "Nearby: Kalol, Gandhinagar district",
      note: "A smaller option on the Mehsana to Ahmedabad corridor.",
      schools: ["Swayam Cambridge International School, Kalol"],
    },
    {
      city: "Nearby: Vadodara",
      note: "Further away, usually a boarding or family-link choice.",
      schools: ["Navrachana International School, Vadodara"],
    },
  ],
  schoolDisclaimer:
    "These schools are listed only to show where IB or Cambridge options exist in the region, taken from our other Gujarat pages. IB Gram is an independent tutoring service and has no affiliation, partnership or endorsement arrangement with the IB, Cambridge, Pearson or any school. Please confirm admissions and affiliation directly.",

  modesIntro:
    "In Sidhpur, tutoring is online, so the choice is really about intensity, timing and what the student needs at this stage of the year.",
  modes: [
    {
      title: "Weekly one-to-one lessons",
      description: "A steady weekly lesson of an hour or ninety minutes, delivered live at a student's desk, with a whiteboard and past papers on screen.",
      bullets: [
        "The same tutor each week for continuity",
        "Homework reviewed at the start of each session",
        "A written note summarising topics and next steps",
      ],
    },
    {
      title: "Pre-exam intensives",
      description: "Two to four weeks of shorter daily or alternate-day sessions before IGCSE or IB papers.",
      bullets: [
        "Timed papers marked against the official scheme",
        "Weak topics re-taught from scratch",
        "A last-week checklist of formulae and command terms",
      ],
    },
    {
      title: "Bridge and foundation lessons",
      description: "For a student moving from GSEB or CBSE into IB or IGCSE, or returning from abroad and adjusting to Indian pace.",
      bullets: [
        "English writing in criterion style",
        "Maths and Science gap-filling",
        "Gentle onboarding for younger MYP students",
      ],
    },
  ],

  sections: [
    {
      heading: "Who in Sidhpur chooses IB or IGCSE, and why now?",
      paragraphs: [
        "A handful of Sidhpur families look at international qualifications each year, and their reasons rarely overlap. One is a doctor's family planning a move to Ahmedabad. Another runs a trading business with a brother in London. A third simply wants a child who can write confidently in English at seventeen.",
        "The Bohra community in town is worth a mention. Many families have long-standing links with Mumbai, East Africa and the UK, and for them an IGCSE or IB certificate is a recognised passport. Non-Bohra families with Patidar, Brahmin or Jain backgrounds often have the same overseas ties in different cities.",
        "What families share is a realisation that Gujarat board marks alone may not open every door abroad. IGCSE results and an IB Diploma are read easily by UK, Canadian and European admissions offices. That makes the qualification itself a selling point, even when the school route is online or in another city.",
        "Since Sidhpur offers no local classroom for either, the tutor's role is to be the person who knows the course. That means confirming the specification, setting realistic goals and giving honest feedback, not cheerleading.",
      ],
    },
    {
      heading: "Gujarat board, CBSE, IB or IGCSE: which fits which Sidhpur child?",
      paragraphs: [
        "A sensible board choice starts from the next destination, not the prestige of the name. A child who will stay in Gujarat for engineering through JEE or a state medical pathway may do best on GSEB or CBSE. A child likely to study in the UK, Canada or Europe can gain from IGCSE and IB.",
        "The table below compares the four boards on timing and style. Two points deserve emphasis: IGCSE is a two-year course ending at Class 10 level, not a substitute for Class 12, and the IB Diploma is a Class 11 and 12 programme with its own set of requirements.",
        "GSEB students who shift to international boards find the largest change is in how answers are written. Marks reward reasoning and clear structure, not memorised lines. Tutors can make that change feel gradual.",
        "If you are unsure, start with a diagnostic lesson. A tutor can look at your child's current work and tell you honestly how far the gap is.",
      ],
      table: {
        caption: "Board comparison for a Sidhpur student",
        columns: ["Board", "Level", "Main exam months", "Notes for Sidhpur families"],
        rows: [
          ["GSEB", "Class 10 and 12", "March", "Gujarati-medium option, widely available locally"],
          ["CBSE", "Class 10 and 12", "February-March", "English-medium, good for competitive exam routes"],
          ["Cambridge IGCSE", "Class 9-10 equivalent", "May-June, October-November", "Private candidacy possible through approved centres"],
          ["Edexcel IGCSE", "Class 9-10 equivalent", "May-June, January", "Foundation and Higher tiers"],
          ["IB Diploma", "Class 11-12", "May, November", "Needs an IB school or online IB provider"],
        ],
      },
    },
    {
      heading: "What drives the cost of IB tuition for a Sidhpur student?",
      paragraphs: [
        "Nothing on this page is a price; IB Gram quotes rates in writing before you book. Knowing what shapes the quote helps you judge whether an offer is fair, from any provider.",
        "Course level leads. Higher Level sciences and Mathematics HL tutors are harder to find than tutors for IGCSE Core subjects, and the rate follows. A tutor with years of examining or moderating experience in a niche subject also commands more.",
        "Hours matter. A weekly 60-minute lesson is a modest commitment; a pre-exam block with daily sessions is larger but short. Since lessons are one-to-one, there is no batch discount and no batch compromise.",
        "Online delivery takes away several costs that a Sidhpur family would otherwise face: daily travel to Patan or Mehsana for a class, fuel, a parent waiting outside, and fees for a fixed batch. The free trial lets you judge the fit before committing.",
      ],
      bullets: [
        "Core or Extended, SL or HL",
        "How rare the subject and level is",
        "Weekly hours and session length",
        "Timing close to exams",
        "Always confirmed in writing before you book",
      ],
    },
    {
      heading: "Is online tuition better than a coaching class or a neighbourhood tutor?",
      paragraphs: [
        "It depends on what you need. Coaching classes in Patan, Mehsana or Ahmedabad are built around GSEB, JEE and NEET, and rarely teach IB or IGCSE syllabi. A neighbourhood tutor is convenient, but may not know a mark scheme for the Diploma.",
        "Online one-to-one lessons are chosen for the syllabus and personalised to a student's weaknesses. They remove commuting, and they let a student keep a long-term tutor even when the family moves.",
        "The downsides are real too. A student must be self-disciplined enough to learn on a screen, and someone at home must make sure the internet and a quiet corner are available. Weak connectivity in a monsoon week is a nuisance.",
        "Self-study can fill gaps between lessons, yet a tutor's marking is the piece that teaches a student to write the way examiners expect. Many Sidhpur families combine online lessons with self-study on weekends.",
      ],
      table: {
        caption: "Support options from Sidhpur compared",
        columns: ["Option", "Strength", "Weakness", "IB or IGCSE suitability"],
        rows: [
          ["Online one-to-one", "Syllabus-specific feedback on the student's own work", "Requires internet and focus", "High"],
          ["Coaching class in Patan or Mehsana", "Routine and peer energy", "Travel, batch pace and little IB content", "Low"],
          ["Local private tutor", "Nearby and familiar", "Often unfamiliar with IB and IGCSE schemes", "Low to medium"],
          ["Self-study", "Flexible and cheap", "No marking or correction", "Medium"],
        ],
      },
    },
    {
      heading: "How do Sidhpur's fairs, festivals and weather shape the study year?",
      paragraphs: [
        "The Kartik Purnima fair at Bindu Sarovar draws visitors from across Gujarat in October or November, and homes fill with guests. Lessons that week should be short or moved, and the family should tell the tutor early.",
        "Navratri, Diwali and the new-year celebrations shape the last quarter of the year. The long Diwali vacation is the best time to finish a unit, tackle a past paper or start an internal assessment plan, without the pull of school timetables.",
        "Summers in Patan district are severe. Afternoons above 40 degrees make concentration poor, so morning or evening lessons work better. The monsoon gives welcome relief but can cut power and internet for a few hours on heavy days.",
        "A yearly plan that respects these rhythms is far more likely to hold than one that ignores them. Fix the weekly slot in July, reserve exam months, and pause deliberately for festivals.",
      ],
      table: {
        caption: "A year of study in Sidhpur",
        columns: ["Months", "Academic focus", "Local event", "Planning note"],
        rows: [
          ["July-September", "New syllabus begins", "Monsoon, Janmashtami", "Set the weekly lesson slot"],
          ["October-November", "IGCSE and IB November exams", "Navratri, Kartik Purnima fair, Diwali", "Use vacation days for past papers"],
          ["December-January", "Mock papers", "Uttarayan in mid-January", "Mark mocks and build a revision map"],
          ["February-March", "GSEB boards, IGCSE coursework", "Pre-summer weather", "Keep lessons light for board candidates"],
          ["April-June", "IGCSE May papers, IB May exams", "Heat and summer break", "Early morning or evening lessons"],
        ],
      },
    },
    {
      heading: "What can a Sidhpur student do after IB or IGCSE?",
      paragraphs: [
        "IB Diploma holders and students with Class 12 equivalence can apply to Indian universities, and the Association of Indian Universities recognises IB and certain IGCSE-plus-A Level combinations. For central universities, CUET-UG is the usual route, with subject requirements varying by course.",
        "Closer to home, students consider Gujarat University, Nirma, PDEU and the IITRAM or NID route for design. Students should check eligibility for JEE Main and NEET before dropping any science subject.",
        "Abroad, the Diploma is well understood across the UK, Canada, the US, Australia and Europe. Families with relatives in Leicester, Toronto or Nairobi often have a built-in support network and a clear destination.",
        "Tutors help with the academic side: subject mastery and exam technique. They do not write personal statements or applications, and they do not promise admission or grades.",
      ],
    },
    {
      heading: "Which IB science and maths courses do Sidhpur students ask about most?",
      paragraphs: [
        "Mathematics tops the list, both Analysis and Approaches and Applications and Interpretation. Students from trading and accounting families often lean toward AI because it is applied, while those with engineering ambitions pick AA.",
        "In the sciences, Physics and Chemistry follow. Students struggle less with theory than with setting out numerical answers clearly and with analysing experimental data. Weekly timed questions and careful marking address both.",
        "Biology students need to be fluent in vocabulary and in reading graphs. A tutor can test them with short-answer questions until the language feels natural, then move to essays and data-based questions.",
        "For each of these, the Internal Assessment is a project of several weeks. The tutor helps a student understand the criteria, plan time and discuss ideas, while the student does all of the writing and analysis.",
      ],
    },
    {
      heading: "How should a Sidhpur student choose IGCSE subjects?",
      paragraphs: [
        "Choose subjects by direction, strength and exam board availability. A student aiming for the IB Diploma in science needs Mathematics Extended, two sciences and English. A commerce-minded student might add Economics, Accounting or Business Studies.",
        "Tier choice matters too. Extended or Higher keeps every grade open. Core or Foundation caps the top grade, which may be acceptable for a subject a student only needs to pass.",
        "Language options deserve early attention. Gujarati or Hindi as a second language can be a steady grade, and English must be taken seriously whichever route follows.",
        "Plan registration at an approved centre early, and book tutoring after the centre confirms subjects and dates. Good tutors will work backwards from your exam date and give a realistic timeline.",
      ],
    },
  ],

  process: [
    { title: "Send the brief", description: "Message class, subjects, board and target exam session on WhatsApp or email." },
    { title: "We suggest a tutor", description: "You receive a tutor matched to the exact syllabus and level." },
    { title: "Free trial lesson", description: "Try a live lesson on a real topic before any commitment." },
    { title: "Rates in writing", description: "Confirm weekly timing, length and rate in writing before booking." },
    { title: "Lessons and notes", description: "Weekly lessons with a written note each time and a tutor change if needed." },
  ],

  whyPoints: [
    { title: "Right tutor for the right code", description: "We match to the syllabus code, level and board, not a general subject." },
    { title: "Private attention", description: "Every minute is for one student and their questions." },
    { title: "Transparent notes", description: "A short note after every session tells parents what happened." },
    { title: "Timing that respects Sidhpur", description: "Schedules avoid fair weeks, board exams and community events." },
    { title: "Clear boundaries", description: "Tutors coach; they do not write coursework or IAs." },
    { title: "Try before paying", description: "A free trial and the option to change tutor keep risk low." },
  ],

  tutorsIntro:
    "Tutors are based in India and teach on Indian Standard Time, so a Sidhpur student never has to adjust to a different time zone. A sample of tutors who teach IB and IGCSE subjects online appears below.",

  faqs: [
    { question: "Can I find an IB tutor in Sidhpur?", answer: "Yes, online. IB Gram connects Sidhpur students with IB tutors who teach live one-to-one by video. No tutor travels to Sidhpur, since in-person tuition exists only in Gurugram and parts of Delhi NCR. You describe the course and level, we propose a tutor, and a free trial lesson follows before any payment or commitment." },
    { question: "Is IB home tuition available in Sidhpur?", answer: "Online home tuition is, but visits are not. The student learns from home on a laptop with a live tutor, and nobody arrives at the door. We state this plainly so the expectation is correct from the start. Lessons are private, use a shared whiteboard and end with a written summary sent to the family." },
    { question: "Are there IB or IGCSE schools in Sidhpur?", answer: "We could not confirm any. Schools in Sidhpur follow GSEB or CBSE. Families who want an international route look to Ahmedabad, Kalol or online schools. Our Patan and Palanpur pages list options in the wider region, but please verify admissions and affiliation with any school directly before relying on this page." },
    { question: "Is IGCSE tuition in Sidhpur only for school students?", answer: "No. A private candidate can also prepare for Cambridge or Edexcel IGCSE papers through an approved exam centre, though not every centre accepts private entries. Tutoring can begin once the centre, subjects and session are confirmed, and the tutor will set a plan backwards from the exam date." },
    { question: "What does tuition cost in Sidhpur?", answer: "IB Gram does not publish prices; rates come in writing before you book. The quote depends on the course level, the rarity of the subject, weekly hours and how near the exam is. Because the lessons are online, you pay no travel or batch fees, and the free trial lesson lets you decide before agreeing a rate." },
    { question: "Which subjects do Sidhpur students ask for most?", answer: "Mathematics, Physics, Chemistry, Economics and Business Management are the regulars, along with English. Some families also ask for Gujarati or Hindi support and for art, since the town's architecture inspires design-minded students. Each request is matched to a tutor who has taught that exact course and level." },
    { question: "Will a tutor write my child's IA, EE or essay?", answer: "No. Tutors coach only. They can explain the criteria, discuss topic ideas, review a plan and give feedback on the student's own draft, but they never write, rewrite or ghost-write an Internal Assessment, Extended Essay, TOK essay or coursework. Examiners expect original student work and so do we." },
    { question: "How is Cambridge IGCSE different from Edexcel IGCSE?", answer: "They are separate qualifications with different specifications, papers and tiers. Cambridge offers Core and Extended for many subjects; Edexcel offers Foundation and Higher. Mathematics codes are 0580 and 4MA1 respectively. Always prepare for the board that your school or exam centre registers you with." },
    { question: "Can a GSEB student switch to IB or IGCSE?", answer: "Yes, and the smoothest times are the start of Class 9 or Class 11. The main adjustment is writing style and command terms. Short bridging lessons in English and Science help, and our tutors can design a four to six week unit before the new course begins." },
    { question: "How do fairs and festivals affect lessons?", answer: "We plan around them. The Kartik Purnima fair, Navratri and Diwali can disrupt a week, so lessons are shortened or moved by agreement. Uttarayan in January is left free. The weekly slot is fixed early and any changes are recorded in writing, so nothing is left to memory." },
    { question: "Do you teach primary children?", answer: "Yes. PYP-age students get shorter lessons of around 45 minutes, focusing on English, number sense and inquiry projects. Activities are interactive, and parents receive a short note after each session. For MYP students, the focus shifts to criterion-based writing and Personal Project planning." },
    { question: "What equipment is needed for online lessons?", answer: "A laptop or tablet, stable broadband, headphones and a quiet desk, plus paper, pens and whatever calculator the course allows. A stylus helps for the whiteboard, but is not required. If the connection fails mid-lesson, the tutor reschedules the remaining time at no extra charge." },
    { question: "What if my child does not get along with the tutor?", answer: "Tell us and we will suggest another tutor. There is no awkwardness and no penalty. The written notes from earlier lessons carry over so the new tutor continues from where the last one stopped. Fit matters more than loyalty, and we treat a change as a normal part of the process." },
    { question: "Can IB or IGCSE lead to JEE, NEET or CUET?", answer: "Partly. The IB Diploma can lead to CUET-UG and, if subject and percentage rules are met, to JEE Main or NEET. IGCSE alone does not provide Class 12 equivalence. Check the target institution's rules before choosing subjects. Our tutors teach IB and IGCSE syllabi and do not run JEE or NEET coaching." },
    { question: "How do I get started with IB Gram from Sidhpur?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the student's class, subjects, board and exam session. We reply with a tutor suggestion and set up a free trial lesson. Rates are confirmed in writing after the trial, and you can stop without obligation at that point." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "City pages and national overview of online IB tuition." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Find tutors by IB subject." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects." },
    { label: "Diploma Programme", href: "/programmes/dp/", description: "Subjects, core and assessment for DP." },
    { label: "Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and Personal Project support." },
    { label: "Primary Years Programme", href: "/programmes/pyp/", description: "PYP inquiry and English support." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI overview for SL and HL." },
    { label: "Tutor profiles", href: "/tutors/", description: "Meet IB and IGCSE tutors." },
    { label: "Contact", href: "/contact-us/", description: "Book a free trial lesson." },
    { label: "IB and IGCSE tutors in Patan", href: "/patan/", description: "The district headquarters nearby." },
    { label: "IB and IGCSE tutors in Palanpur", href: "/palanpur/", description: "Another North Gujarat city page." },
    { label: "IB and IGCSE tutors in Mehsana", href: "/mahesana/", description: "The next district town to the south." },
  ],

  closingHeading: "One free lesson, from your own desk in Sidhpur",
  closingBody:
    "Share your child's class, subjects and exam plans, and we will line up a tutor for a no-cost trial. After that, rates come in writing and you choose whether to continue. Reach us on WhatsApp at +91 7439 368 115 or at support@ibgram.com.",
};
