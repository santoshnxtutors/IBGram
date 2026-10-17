import type { CitySeoPage } from "../types";

/**
 * /guruvayoor/ - IB and IGCSE tutoring page for Guruvayoor, Thrissur district, Kerala. No IB or
 * Cambridge school is confirmed in the temple town itself, so schools are left unnamed and the
 * clusters are honest about that. Delivery is online only: tutors do not visit homes in Guruvayoor,
 * since in-person home tuition exists only in Gurugram and parts of Delhi NCR. Angles: pilgrim-season
 * rhythm, the Gulf-migration household pattern, Malayalam as a second language. Kept distinct from
 * /thrissur/. Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const guruvayoor: CitySeoPage = {
  slug: "guruvayoor",
  countryName: "Guruvayoor",
  countryNameLong: "Guruvayoor, Thrissur district, Kerala",
  demonym: "Guruvayoor",
  state: "Kerala",
  stateCode: "IN-KL",
  flagCode: "in",
  countryCode: "IN",
  region: "Kerala, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson slots are planned around Ekadashi and Utsavam crowds near the temple, the Vishu and Onam breaks, the heavy June to September rains, and the call timings of any parent who works in the Gulf",
  lastUpdated: "2026-09-21",
  geo: { latitude: 10.5944, longitude: 76.0408 },
  wikipedia: "https://en.wikipedia.org/wiki/Guruvayur",
  alternateNames: ["Guruvayur", "Guruvayoor Thrissur", "Guruvayur Temple town"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Guruvayoor | Online Home Tuition",
  metaDescription: "Online one-to-one IB and IGCSE tuition for Guruvayoor students, timed around temple festival weeks and Gulf-family schedules, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Guruvayoor",
  heroEyebrow: "IB & IGCSE TUTORING FOR GURUVAYOOR FAMILIES",
  heroSubtitle:
    "Looking for private tuition from home in Guruvayoor? Live one-to-one IB and IGCSE lessons reach your child over a laptop, so a festival week on the temple roads or a monsoon downpour never cancels a class. Tutors teach from elsewhere in India; none visits Guruvayoor homes.",
  primaryKeyword: "IB and IGCSE tutors in Guruvayoor",
  secondaryKeywords: [
    "IB tutor Guruvayoor",
    "IGCSE tutor Guruvayoor",
    "IB home tuition Guruvayoor",
    "IGCSE home tuition Guruvayoor",
    "IB private tuition Guruvayoor",
    "IB Maths tutor Guruvayoor",
    "IGCSE Maths tutor Guruvayoor",
    "IB Physics tutor Guruvayoor",
    "IB Chemistry tutor Guruvayoor",
    "IB Biology tutor Guruvayoor",
    "IB DP tutor Guruvayoor",
    "IB MYP tutor Guruvayoor",
    "IB PYP tutor Guruvayoor",
    "IGCSE online tuition Guruvayoor",
    "IB tutor Guruvayur",
    "IGCSE tuition Guruvayur Thrissur",
    "IB tutor Chavakkad",
    "IB tutor Kunnamkulam",
    "online IB tuition Thrissur district",
    "Cambridge IGCSE tutor Kerala",
  ],
  imageAltText: "A Guruvayoor student in a Kerala home attending a live one-to-one IB lesson on a laptop",

  heroTrustPoints: [
    "Free trial lesson before you commit to anything",
    "Written note after every session so parents abroad can follow along",
    "Tutor change if the fit is wrong, no questions asked",
    "Rates quoted in writing before the first paid class",
    "Coaching only: tutors never write IAs, Extended Essays or TOK essays",
  ],
  heroStats: [
    { value: "IST", label: "Same clock as Guruvayoor" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "First lesson on us" },
    { value: "May & Nov", label: "Exam sessions prepared for" },
  ],

  intro: {
    heading: "IB and IGCSE tutoring for families in the temple town",
    paragraphs: [
      "Guruvayoor is known across India for the Sree Krishna temple, and the town that grew around it has its own rhythm: crowded Ekadashi mornings, the long Utsavam fortnight with its elephant processions, and a steady stream of pilgrims all year. Families who live here, or in the villages along the Thrissur to Chavakkad corridor, are looking for IB and IGCSE tutors in Guruvayoor who can fit that rhythm instead of fighting it. This page explains how IB Gram does exactly that.",
      "The straightforward answer on delivery: lessons are online. IB Gram offers in-person home tuition only in Gurugram and parts of Delhi NCR, so nobody travels to a house in Guruvayoor. What you get is online home tuition, meaning a live private lesson that your child takes from their own desk at home, with a tutor who sees the same shared whiteboard and the same past-paper question. The route needs a laptop, a decent connection and a quiet room.",
      "Many local households have a parent working in the Gulf, or have returned from there, and carry a clear preference for an international curriculum that travels well between Kerala, the Emirates and the UK. Others are temple-economy and hospitality families who want a school-leaving route with more subject freedom than the Kerala Higher Secondary pattern allows. Both groups end up asking the same questions about syllabus, cost and timing, which the sections below answer one by one.",
      "Tutors coach understanding, exam technique and written answers. They do not write internal assessments, Extended Essays, TOK essays or any coursework, and a good tutor will tell you plainly when a request crosses that line. IB Gram is an independent service and is not affiliated with the IB, Cambridge, Pearson or any school.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description: "Inquiry-led primary learning built around units of inquiry. Tutoring here is light and confidence-focused: reading fluency, number sense, and helping a child explain what they found out in their own words.",
      countryNote: "Few Guruvayoor children meet the PYP at a local school, so most PYP learners are families who lived abroad and returned. A tutor bridges the vocabulary of inquiry units with Malayalam-medium or CBSE classmates' expectations.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description: "Eight subject groups assessed against criteria, a personal project, and interdisciplinary units. Tutoring targets criterion-based writing, mathematical reasoning and the habit of showing method.",
      countryNote: "Children returning from Gulf schools often arrive mid-MYP. Sessions focus on closing a gap in a single term, usually in Maths or Sciences, rather than restarting the course.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description: "Six subjects at Higher or Standard Level, plus Theory of Knowledge, the Extended Essay and CAS. Tutoring covers the subject content and paper technique; the essay and internal assessments remain the student's own work.",
      countryNote: "A Guruvayoor DP student usually studies at a school in Thrissur, Kochi or Kozhikode, or abroad, and logs on in the evening. Lessons avoid the hours when roads around the temple choke up during festival weeks.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description: "Two or three DP courses combined with a career-related study and a reflective project. Support centres on the DP subjects and on structuring written reflection.",
      countryNote: "Rare around Guruvayoor, but relevant to hospitality, tourism and business-minded families who want a practical pathway and still keep university options open.",
    },
  ],
  programmesIntro: "Whichever IB stage your child is at, the tutor is matched to the exact syllabus and the exact school calendar, not to a generic course. A child leaving a Kerala State school for MYP needs something quite different from a Diploma student with Higher Level Physics.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, proof-style reasoning and the paper without a calculator. Suits students heading for engineering, economics or pure sciences." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology-supported problem solving. A common choice for biology, business and social science applicants." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, fields, waves and quantum ideas, with the discipline of unit handling and uncertainty that examiners reward." },
    { name: "Chemistry", levels: "SL / HL", description: "Stoichiometry, energetics, organic pathways and equilibrium, plus fluent data-handling for the practical-based questions." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology, genetics, ecology and physiology, with attention to the command terms that decide long-answer marks." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and the global economy, taught with diagrams and real-world examples, including remittance-driven and tourism economies." },
    { name: "Business Management", levels: "SL / HL", description: "Organisations, marketing, finance and operations, suited to students from family trading or hospitality businesses." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis, paper structure and comparative writing, built on the student's own reading rather than memorised notes." },
    { name: "English A: Literature", levels: "SL / HL", description: "Close reading of poetry, prose and drama, and the oral commentary. Useful for students who think in Malayalam first." },
    { name: "Hindi B", levels: "SL / HL", description: "Language acquisition for students who learned Hindi as a third language in Kerala, with emphasis on speaking and the written tasks." },
    { name: "Psychology", levels: "SL / HL", description: "Biological, cognitive and sociocultural approaches, with the experimental studies and the extended-response structure." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming logic, data structures and the case-study style paper, in the language the school actually teaches." },
    { name: "Theory of Knowledge", levels: "Core", description: "Support for thinking through knowledge questions and exhibition ideas. The student writes the essay; the tutor never does." },
  ],
  subjectsIntro: "Pick the subjects your school offers and your target course needs. If a combination is unusual, say so in the trial lesson and the match is made accordingly.",
  igcseSubjectsIntro: "Cambridge and Pearson Edexcel IGCSE choices differ by school, and many Kerala students take only some subjects as private candidates. These are the ones we are asked about most.",
  igcseSubjects: [
    { name: "Mathematics (Core / Extended)", levels: "Core, Extended", description: "Algebra, geometry, trigonometry and statistics, with a clear decision on whether Core or Extended suits the student." },
    { name: "Physics", levels: "Core, Extended", description: "Forces, electricity, thermal physics and waves, with the Paper 6 alternative-to-practical style practised weekly." },
    { name: "Chemistry", levels: "Core, Extended", description: "Atomic structure, reactions, the periodic table and organic basics, plus qualitative analysis recall." },
    { name: "Biology", levels: "Core, Extended", description: "Cells, transport, inheritance and ecosystems, written in the concise way mark schemes expect." },
    { name: "English as a First Language", levels: "Extended", description: "Directed writing, composition and summary skill, useful for students who mostly speak Malayalam at home." },
    { name: "English as a Second Language", levels: "Core, Extended", description: "Reading, writing, listening and speaking, with practice built around the oral component." },
    { name: "Malayalam / Hindi (Foreign or Second Language)", levels: "Core, Extended", description: "Where a board offers it, structured support in the language families already use at home or study at school." },
    { name: "Computer Science", levels: "Extended", description: "Algorithms, data representation and pseudocode, with practice on the paper-based programming tasks." },
    { name: "Economics", levels: "Extended", description: "Basic economic problem, markets, government and trade, using local examples such as pilgrim tourism and remittances." },
    { name: "Business Studies", levels: "Extended", description: "Business activity, marketing and finance, with case-study answering practised under timed conditions." },
  ],

  regionsTitle: "Guruvayoor localities and nearby areas we teach into",
  tutorsIntro: "These tutors teach Guruvayoor students online from elsewhere in India. Each profile lists the IB or IGCSE subjects, levels and years of experience, and every match begins with a free trial lesson.",
  regionsIntro: "Tutoring is online everywhere in the Guruvayoor belt, so the locality matters mainly for school choice, commute and the time of day a child is actually free.",
  regions: [
    { name: "Temple precinct and East Nada", note: "The dense centre around the Sree Krishna temple. Streets fill on Ekadashi and during Utsavam, so lessons for students living here are best moved to evenings or early mornings in those weeks." },
    { name: "West Nada", note: "A quieter residential edge close to the temple. Families here usually send children to schools in Guruvayoor or by bus to Thrissur and Kunnamkulam; evening online slots avoid the school-bus return." },
    { name: "Mammiyur", note: "A well-known residential neighbourhood next to the temple, with a mix of long-settled households and families with Gulf links. A reliable broadband line matters more than anything else here." },
    { name: "Thiruvenkitam", note: "A neighbourhood on the Guruvayoor side of the Thrissur road. Students may travel to schools outside the town, so weekday tutoring is set after the evening return." },
    { name: "Chowallur", note: "A settled suburb towards the Thrissur road, popular with families who work in Thrissur and prefer a calmer street than the temple centre." },
    { name: "Punnayur and Punnayurkulam", note: "A coastal-leaning belt where Gulf migration is part of daily life. Lesson times are often arranged around a parent's evening call from abroad." },
    { name: "Chavakkad", note: "A busy coastal town a short drive from the temple, with its own market and school mix. Students here commonly combine tuition with a regular State or CBSE school day." },
    { name: "Kunnamkulam", note: "A trading town on the Thrissur to Kozhikode side, with a long tuition culture. Families here compare local centres with online tutoring for international syllabi." },
    { name: "Kandanassery and Pavaratty", note: "Villages and small towns on the road to Thrissur. Longer school commutes mean the best slot is often the late evening or the weekend morning." },
    { name: "Engandiyur and Vadakkekad", note: "Coastal Thrissur-district areas where power cuts and monsoon winds can interrupt a connection, so we plan for a backup device or mobile hotspot." },
  ],

  schoolClusters: [
    {
      city: "Guruvayoor town and the temple belt",
      note: "We have not been able to confirm any school in Guruvayoor town currently running the IB or Cambridge IGCSE. Local schooling is overwhelmingly Kerala State, CBSE and a few ICSE options, so IB and IGCSE learners here are mainly private candidates, returnees, or children enrolled elsewhere.",
      schools: [],
    },
    {
      city: "Nearby: Thrissur",
      note: "Thrissur is the nearest large city, about 25 km away, and the first place families look for an international school. We could not confirm a school there for IB or IGCSE, so please check each school's own site before relying on any listing.",
      schools: [],
    },
    {
      city: "Nearby: Kochi",
      note: "About 80 km south and the closest confirmed concentration of IB and Cambridge campuses in Kerala. Families who relocate, or board a Diploma student, tend to look here first.",
      schools: ["The Choice School, Ambalamugal", "TIPS Kochi"],
    },
    {
      city: "Gulf and overseas schools",
      note: "Many Guruvayoor families have a child who studied the IB or IGCSE abroad and returned. We do not name those schools; we only note that the syllabus a returnee follows is the same one the tutor teaches.",
      schools: [],
    },
  ],
  schoolDisclaimer: "IB Gram is an independent tutoring service and has no affiliation with the IB, Cambridge, Pearson or any school. Where a school is named it is only because we could confirm it runs the programme; always verify admissions and curriculum details with the school directly.",

  modesIntro: "There is one real way to learn with IB Gram in Guruvayoor, and it is online. Here is how that works in practice for three types of household.",
  modes: [
    {
      title: "Online one-to-one at home",
      description: "A live private lesson over video. The student stays at their own desk in Guruvayoor and the tutor teaches from elsewhere in India, using a shared whiteboard and screen sharing for past papers.",
      bullets: [
        "No tutor visits your home; home visits run only in Gurugram and parts of Delhi NCR",
        "Evening and weekend slots across IST",
        "A written note after each session",
      ],
    },
    {
      title: "Short exam-block sprints",
      description: "Three to six weeks of intense, paper-by-paper work before the May or November session, ideal when a student has been busy with Utsavam, travel or school events.",
      bullets: [
        "Targeted past-paper cycles",
        "Weak-topic diagnosis in the first lesson",
        "Pause and resume without penalty",
      ],
    },
    {
      title: "Parent-abroad coordination",
      description: "For families where one parent is in the Gulf, the weekly summary is written so it can be read and discussed over a phone call across time zones.",
      bullets: [
        "Notes in plain English, not jargon",
        "Option to share the trial recording with both parents",
        "Rates confirmed in writing before booking",
      ],
    },
  ],

  sections: [
    {
      heading: "Who chooses IB and IGCSE in and around Guruvayoor?",
      paragraphs: [
        "Most families around Guruvayoor who ask about IB and IGCSE tutors in Guruvayoor fall into a few recognisable groups. The first is the Gulf-linked household, where a parent works in the Emirates, Oman, Qatar or Saudi Arabia and the child has either studied abroad or may move there for senior school. For them, a syllabus that is recognised in both places is a practical decision, not a status choice.",
        "The second group is the returnee: a child whose family came back to Kerala after years abroad and is now sitting in a Class 8 or Class 11 that does not match the syllabus they know. Here the tutor's real work is continuity. A child halfway through MYP or in the first year of the Diploma cannot afford a gap, and a weekly Maths or Chemistry session can hold the line while the family decides whether to stay in the stream.",
        "A third group runs businesses in the temple economy, from lodges and catering to retail and transport. These parents often want a flexible, career-focused qualification, and they value the freedom the IB gives to combine Business, Economics and a language. They are rarely seeking elite-school admission; they are seeking a route that does not box a child in at 16.",
        "A smaller but real group is made of students already inside CBSE or Kerala State classes who add a Cambridge IGCSE subject privately to widen their record, usually Mathematics or English. It is a quiet, sensible approach: add one subject, learn how the papers are set, and decide later whether to extend. Whichever group you belong to, the first step is a free trial lesson where the tutor listens before they teach.",
      ],
      bullets: [
        "Gulf-linked families deciding between Kerala and abroad for senior school",
        "Returnees mid-way through MYP or the Diploma",
        "Business and hospitality families wanting subject freedom",
        "State or CBSE students adding a single IGCSE subject as a private candidate",
      ],
    },
    {
      heading: "Kerala State, CBSE, ICSE, IB or IGCSE: how do they compare from Guruvayoor?",
      paragraphs: [
        "The Kerala State syllabus, with the Higher Secondary stream after Class 10, is the board most local children follow, and it is closely tied to entrance exams such as KEAM. CBSE is the second most common choice, valued for its alignment with JEE and NEET. ICSE is less visible. The IB and Cambridge IGCSE are the least common here, which is exactly why families need a straight comparison before committing.",
        "The practical differences show up in how children are assessed. State and CBSE exams reward reliable recall of a defined textbook. The IB rewards explanation, application and written argument across six subjects, plus an essay, a reflective course and service hours. Cambridge IGCSE sits between the two: subject-based, exam-led, with a clear Core or Extended tier in most subjects.",
        "Language is another dividing line. Malayalam is compulsory in most State schools, while IB students choose a language group and may take Malayalam or Hindi at a different level than their classmates. A parent who wants a child fluent in Malayalam as well as English should ask the school how that is handled before enrolling.",
        "None of these routes is automatically better. What matters is the child's temperament, the target course, and whether the family expects to stay in Kerala or move. The table below puts the main differences side by side.",
      ],
      table: {
        caption: "How the main boards compare for a Guruvayoor student",
        columns: ["Board", "Assessment style", "Typical Kerala entrance route", "Malayalam handling", "Mobility abroad"],
        rows: [
          ["Kerala State (SCERT)", "Textbook-based written exams, State Higher Secondary", "KEAM and State quotas directly", "Compulsory in most schools", "Recognised in India; extra steps abroad"],
          ["CBSE", "Board exams in Class 10 and 12, NCERT-aligned", "JEE Main, NEET-UG and CUET-UG directly", "Optional second or third language", "Widely accepted; some friction in some countries"],
          ["ICSE / ISC", "Broader written syllabus with strong English", "Same as CBSE routes", "Third-language choice", "Accepted by many universities"],
          ["IB Diploma", "Six subjects, internal assessments, essay, final exams", "Needs AIU equivalence for Indian courses", "Language B or A at chosen level", "Strong recognition across countries"],
          ["Cambridge / Edexcel IGCSE", "Exam-led, tiered, subject by subject", "Followed by A Level or IB for Indian colleges", "Offered only where the centre lists it", "Familiar to Gulf and UK schools"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Guruvayoor?",
      paragraphs: [
        "IB Gram does not publish a price list, because the rate depends on who teaches and what is being taught, and a fixed number would mislead more families than it helps. What we do is quote the rate in writing before your child's first paid class, so you decide with the full figure in front of you. The free trial lesson comes first and costs nothing.",
        "Four things move the figure. Level matters most: Higher Level Physics or Mathematics: Analysis and Approaches calls for a tutor with a deep subject background, and that experience is priced differently from helping a Class 6 student with MYP number work. Frequency matters next, since two lessons a week is a different commitment from an exam-block sprint.",
        "The third factor is subject scarcity. A common combination such as Mathematics or Chemistry has many suitable tutors; a niche pairing, a specific IGCSE tier, or a language like Hindi B at Higher Level may take longer to match. The fourth is timing. Booking mid-October for a November paper leaves less room than booking in August, and a rushed schedule can be costlier for everyone.",
        "Compared with a Thrissur coaching centre, online one-to-one tuition has no travel cost, no lost time on the Guruvayoor to Thrissur road, and no batch sized for thirty. Compared with a private tutor who relocates for a few months, it is far more flexible. Ask for a written quote, compare it with what you currently spend on travel and fees, and ask the tutor to explain what each lesson covers.",
      ],
    },
    {
      heading: "Online home tuition, Thrissur coaching centres, local private tutors or self-study?",
      paragraphs: [
        "Families in Guruvayoor weigh four routes, and each fits a particular kind of student. Coaching centres in Thrissur and Kunnamkulam are strong on State and CBSE preparation and entrance coaching, but few teach the IB or IGCSE and none in a one-to-one way. A local private tutor may be excellent for Kerala syllabi and unfamiliar with command terms or the Internal Assessment format.",
        "Online home tuition places the IB or IGCSE specialist at your child's desk without the commute. The trade-off is that it needs a steady connection and a child who can concentrate on a screen for forty-five to sixty minutes. For most students aged twelve and above, that works well after a lesson or two.",
        "Self-study is the cheapest and suits a disciplined student who simply needs past papers and a marking scheme. It tends to fail on feedback: without someone to mark an essay or a Paper 2 answer, a child repeats the same error for months without noticing it.",
        "A sensible hybrid is common here. Keep the school or local tuition for the main syllabus, and add a weekly online IB or IGCSE session for the subject that worries the family most. The table below summarises how each route compares for a Guruvayoor household.",
      ],
      table: {
        caption: "Learning routes compared for Guruvayoor students",
        columns: ["Route", "Format", "Strength", "Limitation", "Suits"],
        rows: [
          ["Online one-to-one with IB Gram", "Live video lesson at home", "Specialist matched to the exact syllabus; no commute", "Needs a stable connection and a quiet room", "IB or IGCSE learners in any subject"],
          ["Thrissur or Kunnamkulam coaching centre", "Classroom batch, travel needed", "Strong for State, CBSE and entrance exams", "Rarely IB or IGCSE; batch pace", "State and CBSE students"],
          ["Local private tutor", "Visits or hosts, flexible", "Relationship and convenience", "May not know IB command terms or IGCSE tiers", "Primary and lower-secondary support"],
          ["Self-study with past papers", "Independent", "Low cost, full control", "No feedback or marking", "Highly disciplined senior students"],
        ],
      },
    },
    {
      heading: "How do temple festivals, monsoon and school terms shape the study year?",
      paragraphs: [
        "A student in Guruvayoor lives with a calendar that few other cities share. The Utsavam festival, usually held in February or March, brings crowds, processions and road diversions that can make an ordinary evening commute take hours. Ekadashi days through the year do the same on a smaller scale. A good plan accepts this: weeks with heavy temple traffic are scheduled lightly and remote, never packed.",
        "The southwest monsoon, from June into September, is the other constant. Heavy rain, power cuts and weak signals are routine on the coast, so students should have a charged backup device or a mobile hotspot near the desk. Tutors reschedule at no extra cost when the connection genuinely fails, and ask the family to flag it early rather than at the start of the hour.",
        "Onam and Vishu bring school holidays and family travel. These are good times for a short revision block if the student is staying home, and poor times for new content if relatives are visiting. International schools follow their own terms, so always check the calendar that applies to your child.",
        "The IB exams run in May and November, while Cambridge and Edexcel IGCSE sessions run in May and June and in October and November. The table sets out a typical year for a Guruvayoor student, bearing in mind that your school's dates control the final plan.",
      ],
      table: {
        caption: "A typical study year for a Guruvayoor IB or IGCSE student",
        columns: ["Period", "Local factor", "What to focus on", "How lessons adapt"],
        rows: [
          ["June to September", "Southwest monsoon, school terms begin", "Building new content, first Internal Assessment drafts", "Backup connection; steady weekly slots"],
          ["October to November", "November IB and IGCSE exam window; Onam/Dasara breaks", "Final papers and mock review", "Intensive blocks, flexible around holidays"],
          ["December to January", "Vrischikam Ekadashi season, winter break", "Gap filling and past papers", "Lighter weeks around festival crowds"],
          ["February to March", "Utsavam festival, school exams", "Mock exams and revision plans", "Remote-only, evening or early-morning slots"],
          ["April to May", "Summer heat before May exams", "Timed papers and technique", "Short, focused sessions in the cooler hours"],
        ],
      },
    },
    {
      heading: "What university pathways open up from Guruvayoor?",
      paragraphs: [
        "A student who completes the IB Diploma or a set of IGCSE subjects from Guruvayoor can aim in several directions. For Indian universities, the Association of Indian Universities issues an equivalence for the IB Diploma, which is needed for most State and central applications. CUET-UG admission is open to IB students who meet the stated eligibility, and many central and State universities now use CUET for admission.",
        "For engineering and medicine, the picture needs care. JEE Main and NEET-UG have their own eligibility and subject requirements, and the IB combination of Physics, Chemistry, Biology or Mathematics must match them. Always read the current rules in the official information bulletin, and do not assume a subject mix will qualify without checking.",
        "Within Kerala, students often consider Calicut University, Kerala University and Mahatma Gandhi University for arts, science and commerce, along with institutions around Thrissur such as the Government Engineering College and the Kerala Agricultural University campus at Mannuthy. Outside the State, NIT Calicut and the IITs and IIMs remain aspirations that depend on entrance results.",
        "Study abroad is a natural option for Gulf-linked families. UK universities make offers in IB points and in A Level grades, Canada and Australia accept the IB Diploma widely, and Gulf institutions often have IB-friendly routes. Your tutor will help you understand how a predicted score connects to a typical offer, though admissions are decided by the universities themselves.",
      ],
      bullets: [
        "AIU equivalence is usually required for Indian university admission",
        "CUET-UG, JEE Main and NEET-UG each set their own eligibility rules",
        "UK offers are usually stated in IB points with subject requirements",
        "Check each programme's current bulletin; rules change",
      ],
    },
    {
      heading: "How is IB Maths and the sciences taught online to a Guruvayoor student?",
      paragraphs: [
        "Mathematics: Analysis and Approaches suits students who enjoy algebraic manipulation and proof, and who may head for engineering, pure science or economics. Mathematics: Applications and Interpretation leans on modelling and statistics, with the graphic display calculator carrying more weight. Choose by what the university course needs, not by what seems easier, and ask the school before the subject-choice deadline.",
        "Online teaching works well for Maths. The tutor writes on a shared whiteboard, the student answers on paper held to the camera or on a tablet, and both can see each working step. Past-paper practice is split into calculator and non-calculator papers, and mistakes are logged by topic so that revision targets weak areas, not just random questions.",
        "For Physics, Chemistry and Biology, the Higher Level content is demanding, and the practical component remains the school's responsibility. Tutors cannot run a lab through a screen, but they can explain the experimental design, data processing and uncertainty treatment that the internal assessment and the written papers require. They coach; the investigation itself stays the student's own work.",
        "A weekly rhythm that works for most students is one concept lesson, one exam-technique lesson, and a short written task between sessions. Tutors send a note after each class listing what was covered and what to attempt next, so a busy parent can follow without needing to understand the syllabus.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects should a Guruvayoor student take?",
      paragraphs: [
        "Most Cambridge IGCSE subjects offer a Core tier and an Extended tier. Core caps the highest grade at a lower level and suits students who find the subject hard or are taking it for breadth. Extended opens every grade and is the usual choice for students who will go on to A Level or the IB in that subject, especially in Mathematics and the sciences.",
        "The decision should be made early, after a diagnostic, not by guesswork. A tutor can set an Extended-level paper in the first week and show you where the student sits. Moving from Extended to Core late is possible in some cases but should not become a panic response six weeks before the exam.",
        "On subject choice, a typical Guruvayoor student takes English, Mathematics, the three sciences or Combined Science, and one or two humanities or business subjects. Malayalam is not offered by every examination board in the IGCSE list, so check what the centre actually has. Hindi and English as a Second Language are more commonly available.",
        "Because many local students take IGCSE as private candidates, ask the registered examination centre about entry deadlines, practical-paper arrangements and fees well before the session. Late entries cost more, and some centres close registration weeks before the exam month. Your tutor can then work to the actual dates rather than to a guess.",
      ],
    },
  ],

  process: [
    { title: "Message us on WhatsApp", description: "Tell us the board, the year, the subjects and the school your child attends. A short note is enough." },
    { title: "Free trial lesson", description: "A tutor is matched on syllabus and personality. The first session is a real lesson, not a sales call." },
    { title: "Written plan and rate", description: "You receive the weekly plan and the rate in writing before you decide to continue." },
    { title: "Weekly lessons online", description: "Live sessions at agreed times across IST, adjusted when temple weeks or rain disrupt the evening." },
    { title: "Notes and review", description: "A written summary follows each class, and we change the tutor if the fit is not right." },
  ],
  whyPoints: [
    { title: "Matched to the syllabus", description: "Tutors who know the exact IB subject guide or IGCSE specification, not a general school syllabus." },
    { title: "Flexible around local life", description: "Timings bend around festival weeks, monsoon outages and a parent's calls from the Gulf." },
    { title: "Honest about delivery", description: "Everything in Guruvayoor is online. No tutor visits a home, and we say so before you book." },
    { title: "Clear notes for parents", description: "Every session ends with a written note that a parent abroad can read in two minutes." },
    { title: "Coaching, not ghost-writing", description: "Tutors explain and give feedback; they never write an IA, Extended Essay or TOK essay." },
    { title: "Easy to change", description: "A different tutor is offered if the first match does not work, and the rate is always agreed in writing." },
  ],

  faqs: [
    {
      question: "Are there IB and IGCSE tutors in Guruvayoor?",
      answer: "Yes, but they teach online. IB Gram's tutors are based elsewhere in India and teach Guruvayoor students by live video. We found no IB or IGCSE tutors operating locally from the temple town, so the realistic way to get a specialist is online. Lessons run in IST, on a shared whiteboard, with a note sent after every session.",
    },
    {
      question: "Do IB Gram tutors come to my home in Guruvayoor?",
      answer: "No, they do not. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. In Guruvayoor, your child takes a live one-to-one lesson at home on a laptop, which we call online home tuition. It needs a quiet space, a reliable connection and a charged backup device during the monsoon.",
    },
    {
      question: "Is there an IB or IGCSE school in Guruvayoor?",
      answer: "We could not confirm one. Local schooling is mostly Kerala State and CBSE, with a few ICSE options. Families interested in the IB or IGCSE usually look to Kochi, where several schools are confirmed, or to schools abroad. Please verify any school's curriculum directly, and tell us if you know of a local option so we can update this page.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Guruvayoor?",
      answer: "We do not publish a price list, and rates are quoted in writing before you book. The figure depends on the level, the subject, the number of lessons a week and how quickly a suitable tutor can be matched. Higher Level sciences cost more than primary support. The first trial lesson is free and carries no obligation.",
    },
    {
      question: "Can my child take IGCSE exams from Guruvayoor?",
      answer: "Yes, usually as a private candidate through an approved examination centre. Not every centre accepts private entries, so check deadlines, fees and the practical-paper arrangements early. We can help you prepare for the papers, but registration is handled by the centre and the exam board, not by IB Gram.",
    },
    {
      question: "My parent works in the Gulf. Can both parents follow progress?",
      answer: "Yes. Each session ends with a short written note in plain English, which can be shared with a parent abroad. You can also ask us to share the trial lesson recording if the platform allows it. Lesson times are set in IST, and we will try to fix slots that suit a call across the Gulf time zones.",
    },
    {
      question: "What happens during the Guruvayoor Utsavam and Ekadashi crowds?",
      answer: "We plan lighter weeks around them. Road diversions and crowds can make evenings unreliable, so students living near the temple often prefer early mornings or later evening slots. Because lessons are online, there is no travel to lose, but we still check the week's plan with you before the festival.",
    },
    {
      question: "Which IB subjects are most in demand here?",
      answer: "Mathematics, Physics, Chemistry and Biology lead the requests, followed by Economics and Business Management. English A and Hindi B also come up often. Demand follows what families need for university courses, so subject choice should start from the target degree, not from which subject sounds easier.",
    },
    {
      question: "Can a tutor help with my child's IA or Extended Essay?",
      answer: "Tutors can coach the thinking, but they never write the work. They may explain what an assessment criterion means, comment on a structure the student has drafted, or help plan research questions. The writing, data and conclusions must remain the student's own, and a tutor who offers otherwise is not one we work with.",
    },
    {
      question: "Is the IB Diploma accepted in Kerala universities?",
      answer: "Generally yes, with an Association of Indian Universities equivalence certificate. The AIU recognises the IB Diploma for admission to Indian universities, and CUET-UG is open to IB students who meet each university's eligibility. Always read the latest notice of the university you want, because rules and cut-offs vary between institutions and years.",
    },
    {
      question: "Can an IB or IGCSE student still appear for NEET or JEE?",
      answer: "Possibly, but eligibility depends on the subjects taken and on the rules published in the current information bulletin. Biology, Chemistry and Physics are usually essential for NEET, and Mathematics for JEE. Check the official bulletin before choosing subjects, since the rules are set by the testing agency, not by us or the school.",
    },
    {
      question: "Can my child study Malayalam alongside the IB or IGCSE?",
      answer: "That depends on the school or examination centre. The IB offers language options and sometimes allows a school-supported language, while IGCSE lists specific languages. Malayalam is not available at every centre, so ask in advance. Our tutors can support English, Hindi and the sciences, and we will tell you plainly if a language is outside our range.",
    },
    {
      question: "What internet speed is needed for online lessons?",
      answer: "A stable broadband or fibre connection is enough; a basic 10 Mbps line usually works well for video and a shared whiteboard. Mobile data is fine as a backup. During June to September storms, keep the laptop charged and a hotspot ready. If a lesson is lost because of a real outage, we reschedule it.",
    },
    {
      question: "How soon can my child start?",
      answer: "Often within a few days of your message. Matching depends on the subject and the level; a common Mathematics or Chemistry tutor can usually be arranged quickly, while a niche language or rare HL combination may take a little longer. Start early before the May or November exams, because last-minute matching has less room for flexibility.",
    },
    {
      question: "What if the tutor is not the right fit?",
      answer: "We change the tutor. Tell us what felt wrong, whether it was pace, teaching style or timing, and we will offer a different match without extra cost for the change. The aim is a tutor your child actually looks forward to working with, not one who simply ticks the subject box.",
    },
    {
      question: "Can you help a child moving from Kerala State to IB mid-year?",
      answer: "Yes, though it takes planning. Moving from the State syllabus to MYP or the Diploma means adjusting to criterion-based assessment and more extended writing. A tutor can run a diagnostic, point out the gap, and set a catch-up plan, usually concentrated on Mathematics, English and the chosen sciences, before the new term pressure builds.",
    },
    {
      question: "How do I contact IB Gram?",
      answer: "Message or call +91 7439 368 115 on WhatsApp, or write to support@ibgram.com. Include your child's school year, board, subjects and any exam date in the first message. We reply with a suggested tutor match and a time for the free trial lesson.",
    },
  ],

  internalLinks: [
    { label: "IB tutors across India", href: "/india/", description: "See how IB Gram works with students in cities across the country." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse subject-wise IB tutoring and how matching works." },
    { label: "IGCSE tuition", href: "/igcse/", description: "Cambridge and Pearson Edexcel IGCSE subjects and support." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What the Diploma involves and where tutoring fits." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, personal project and support for Class 6 to 10." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI explained, with typical topics and exam structure." },
    { label: "Our tutors", href: "/tutors/", description: "Meet the tutors and read about their subject backgrounds." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask for a free trial lesson and a written quote." },
    { label: "Thrissur", href: "/thrissur/", description: "The nearby district headquarters, with its own school and board landscape." },
    { label: "Kochi", href: "/kochi/", description: "The nearest city with confirmed IB and Cambridge campuses." },
    { label: "Palakkad", href: "/palakkad/", description: "Another Kerala inland district reached by online tutoring." },
  ],

  closingHeading: "Start with a free trial lesson from your own desk in Guruvayoor",
  closingBody: "Whether your child is a returnee adjusting to a new syllabus, a Gulf-linked student keeping options open, or a Kerala State learner adding one IGCSE subject, a single trial lesson will show what the right tutor feels like. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com, and we will plan around the temple calendar and your family's schedule.",
};
