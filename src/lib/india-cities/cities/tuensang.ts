import type { CitySeoPage } from "../types";

/**
 * Tuensang: no IB World School or Cambridge / Edexcel centre could be confirmed in the town, so
 * stripSchools is empty. Nearby clusters reuse school names already present on the Guwahati and
 * Kolkata-facing northeastern pages. Kept strictly non-political.
 */
export const tuensang: CitySeoPage = {
  slug: "tuensang",
  countryName: "Tuensang",
  countryNameLong: "Tuensang, Nagaland",
  demonym: "Tuensang",
  flagCode: "in",
  countryCode: "IN",
  region: "Nagaland, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late afternoons before the early Himalayan dusk, evenings once the household settles, and quiet Sunday afternoons after church",
  lastUpdated: "2026-09-21",
  state: "Nagaland",
  stateCode: "IN-NL",
  geo: { latitude: 26.2705, longitude: 94.8313 },
  wikipedia: "https://en.wikipedia.org/wiki/Tuensang",
  alternateNames: ["Tuensang town", "Tuensang district", "Tuensang Nagaland"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Tuensang | Online Private Tuition",
  metaDescription:
    "Live one-to-one IB and IGCSE tuition for Tuensang students, online from home, timed for early hill sunsets, with weekly written notes and a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Tuensang",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR TUENSANG STUDENTS",
  heroSubtitle:
    "Private tuition from home for IB and IGCSE students in Tuensang: live one-to-one lessons on a laptop, taught by tutors in India who have handled the exact paper your child will sit. At about 1,370 metres in eastern Nagaland, the town is a long road journey from the nearest international school, so the teacher has to come to the screen. Share the programme, the subject and the exam session, and we arrange a free trial lesson.",
  primaryKeyword: "IB and IGCSE tutors in Tuensang",
  imageAltText: "Tuensang student working through a live IGCSE Mathematics lesson with an online tutor at home",
  secondaryKeywords: [
    "IB tutor in Tuensang",
    "IGCSE tutor in Tuensang",
    "IB home tuition Tuensang",
    "IGCSE home tuition Tuensang",
    "IB private tuition Tuensang",
    "IB Maths tutor Tuensang",
    "IGCSE Maths tutor Tuensang",
    "IB Physics tutor Tuensang",
    "IB Chemistry tutor Tuensang",
    "IB Biology tutor Tuensang",
    "IB DP tutor Tuensang",
    "IB MYP tutor Tuensang",
    "IB PYP tutor Tuensang",
    "IGCSE online tuition Tuensang",
    "IB tutor Nagaland",
    "IGCSE tuition Nagaland",
    "online IB classes Tuensang district",
    "IB tuition Chang Sangtam Khiamniungan families",
  ],

  heroTrustPoints: [
    "Live one-to-one lessons with a named tutor, never recordings or crowded batches",
    "Tutors who have taught IB PYP, MYP and DP and Cambridge or Pearson Edexcel IGCSE papers",
    "Slots arranged around daylight, church days and the Nagaland school calendar",
    "A free trial lesson and a short written note after each session",
    "A free change of tutor if the first match is not working",
  ],
  heroStats: [
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before any commitment" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "Why a Tuensang family might choose an online IB or IGCSE tutor",
    paragraphs: [
      "Tuensang is the district headquarters of a hill region where the Chang, Sangtam, Yimkhiung and Khiamniungan communities live side by side, and where the town sits high on a ridge reached by long mountain roads. Most children here study the Nagaland Board course, with a smaller number in CBSE-affiliated schools, and the college path usually runs through Kohima, Dimapur, Guwahati or Delhi. A few households take another route: the International Baccalaureate, or Cambridge and Pearson Edexcel IGCSE. They are often government officers on posting, doctors and nurses at the district hospital, teachers, Assam Rifles families, or relatives who have lived in a metro and plan to return.",
      "For those households, searching for IB and IGCSE tutors in Tuensang turns up very little close to home, which is why private tuition from home, delivered online, is the practical answer. A tutor in India teaches live, one student at a time, using a shared whiteboard and the actual past papers of the board your child is entered for. Nobody has to spend a day on NH 155 to reach a classroom, and the same teacher can stay with a child from Class 8 to Class 12 if the family wants that.",
      "This page is a working guide rather than a brochure: which schools are realistically reachable, how the Nagaland Board compares with the international boards, what shapes the cost, how the monsoon and the festival calendar affect study, where graduates go, and how the maths and science teaching is organised. IB Gram is an independent tutoring service with no tie to the IB, Cambridge, Pearson or any named school. Our tutors teach and give feedback, and they never write a student's internal assessments, essays or coursework.",
    ],
  },

  programmesIntro:
    "The IB and IGCSE come in stages, and a Tuensang student can meet them at any age: a Class 4 child whose parents are relocating, a Class 9 student switching from the state board, or a Class 11 student who has been admitted to a Diploma school elsewhere. The tutor's role changes with the stage.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Units of inquiry that finish with a student-led Exhibition. Tutoring is light and conversational, with attention to reading aloud, simple number work and learning to explain a thought in a full sentence.",
      countryNote:
        "A Tuensang child may meet the PYP only after a family move. Short lessons that are mostly talk help a child who has grown up on textbook-and-recitation schooling settle into inquiry.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked against published criteria, with a Personal Project at the end. A tutor explains what each criterion asks for and trains students to organise an answer the way assessors want it.",
      countryNote:
        "Many Nagaland Board children are strong on memory and neat handwriting. MYP asks for reasoning in sentences, and a few weeks of guided practice usually closes that gap.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, Theory of Knowledge, an Extended Essay and CAS. We prepare students for the written papers and teach the method behind internal assessments, without ever writing them.",
      countryNote:
        "A student who leaves Tuensang for a Diploma school in a bigger city often arrives with strong English but unfamiliar paper styles, and Higher Level sciences are where the first-term shock lands.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pairing of two or three Diploma courses with a career-related study. Tutors cover the academic Diploma courses and the language skills behind them.",
      countryNote:
        "The CP is uncommon in this part of the northeast. We take requests and match a tutor to the specific DP courses chosen.",
    },
  ],

  subjectsIntro:
    "Every subject below is taught by someone who has handled that exact course at that exact level, and who knows what to do when a student has never seen an IB command term.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, sequences, functions and the reasoning habits needed for Paper 1 and Paper 2, with extra time on HL extension topics." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, probability and modelling with a graphical calculator, which suits students heading toward economics or the social sciences." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, waves, fields and the data-handling questions that carry marks, along with a clear route through the practical report." },
    { name: "Chemistry", levels: "SL / HL", description: "Moles and equilibrium, energetics, organic pathways, and the calculation discipline that separates a 5 from a 6." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology through ecology, with a focus on the precise vocabulary mark schemes expect." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and development topics, illustrated with hill-economy examples such as terrace farming and cross-border trade." },
    { name: "Business Management", levels: "SL / HL", description: "Case analysis, ratios and the structure of the extended response on Paper 2." },
    { name: "Geography", levels: "SL / HL", description: "Hydrology, hazards and development, which students from a monsoon hill region often find intuitive." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "An interdisciplinary course that draws on forests, shifting cultivation debates and watershed management." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis and comparative essays, useful for students who think in Nagamese, Chang or Sangtam at home." },
    { name: "Hindi B", levels: "SL / HL", description: "Reading, writing and speaking for students who take Hindi as a second language." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and the pseudocode style the papers use." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion coaching on the knowledge questions and the exhibition; the written essay remains the student's own." },
  ],

  igcseSubjectsIntro:
    "IGCSE subjects are matched by board, Cambridge or Pearson Edexcel, because paper layouts, tiering and mark schemes differ even when the subject name is shared.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Algebra, geometry, trigonometry and data handling, with timed practice on both papers." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, thermal physics, waves, electricity and atomic physics, plus the alternative-to-practical paper." },
    { name: "Chemistry", levels: "Core / Extended", description: "Atomic structure, the mole, reactivity and organic chemistry basics." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, nutrition, inheritance and ecosystems, with graph and data questions." },
    { name: "Co-ordinated Sciences", levels: "Core / Extended", description: "The double-award science route some schools prefer." },
    { name: "English as a Second Language", levels: "Core / Extended", description: "Reading, directed writing and speaking, where Nagamese and tribal-language households benefit from steady practice." },
    { name: "English Literature", levels: "Single tier", description: "Set texts, unseen poetry and the essay habits examiners reward." },
    { name: "Geography", levels: "Single tier", description: "Physical and human themes, fieldwork methods and case-study recall." },
    { name: "Computer Science", levels: "Single tier", description: "Programming logic, data representation and networks." },
    { name: "Economics and Business Studies", levels: "Single tier", description: "Core concepts, calculations and short case questions." },
  ],

  regionsTitle: "Tuensang town and the villages around it",
  regionsIntro:
    "Students live in the town wards and in villages strung along the ridge roads. Daylight, road conditions and the church calendar shape the study day more than a school bell does.",
  regions: [
    { name: "Tuensang Town centre", note: "The market area and administrative core around the district offices. Houses are close together and broadband is most reliable here, so evening lessons run smoothly." },
    { name: "Thangjem", note: "A well-known residential ward with a school of the same name nearby. Families here are a mix of government employees and traders, and many students walk to class." },
    { name: "Chare", note: "A settled ward toward the Mokokchung side, with older houses and a neighbourhood feel. Evening study slots are easy to protect after the day's chores." },
    { name: "Hospital area", note: "Home to health workers and their families on rotating shifts. Lessons are booked around a parent's duty roster, not around dinner time alone." },
    { name: "Mangkolemba road side", note: "Settlements along the road that connects Tuensang to the Mokokchung side. Weather and landslide closures on the highway can affect school attendance in the rains." },
    { name: "Shamator and Noklak side", note: "Villages toward the southeast of the district where distances are long and mobile data can be patchy. A fixed broadband line or a spare SIM is worth setting up before lessons begin." },
    { name: "Saksi and Yangli", note: "Villages that host theological colleges. Students here often grow up around English-medium worship and reading, which is a useful base for IB English." },
    { name: "Longleng side", note: "Households toward the northern boundary of the district who travel to Tuensang for work or schooling and keep weekend study to a short block." },
    { name: "Sangtam and Yimkhiung villages", note: "Villages whose families move between town and ancestral homes for festivals, so lesson plans include a pause and a catch-up week around those dates." },
  ],

  schoolClusters: [
    {
      city: "Tuensang town",
      note: "We could not confirm an IB World School or a Cambridge or Edexcel centre in Tuensang, so none is named. Schools in town follow the Nagaland Board or CBSE, and international syllabuses are usually studied through a tutor.",
      schools: [],
    },
    {
      city: "Nearby: Guwahati",
      note: "Guwahati is the main gateway city for the northeast and the usual place families consider for the senior school years or boarding. It is far from Tuensang, so a move needs careful planning.",
      schools: ["International School Guwahati"],
    },
    {
      city: "Nearby: Kolkata (boarding or relocation)",
      note: "Some northeastern families look to Kolkata for established international campuses. Whether to relocate or board is a family decision, and we do not arrange admissions.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
  ],
  schoolDisclaimer:
    "School names appear only to show where international options sit relative to Tuensang. IB Gram is an independent tutoring service, not connected to the IB, Cambridge, Pearson or any school, and a mention is not a recommendation or a statement about admission.",

  modesIntro:
    "Tutors do not visit homes in Tuensang. Every format below is live and online, planned around a hill-town day.",
  modes: [
    {
      title: "Online one-to-one at home",
      description: "The main format: a private live lesson on the family's laptop with a tutor who teaches your board and level.",
      bullets: ["One tutor for one student", "Shared whiteboard and past-paper walkthroughs", "A weekly written note for parents"],
    },
    {
      title: "Pre-exam intensive blocks",
      description: "A tight run of lessons before school mocks and the May or November sessions.",
      bullets: ["Timed papers with review afterwards", "Mark-scheme and command-term drills", "Spare slots in case of a power or network break"],
    },
    {
      title: "Steady weekly support",
      description: "One lesson a week in one subject, enough to keep a student level with the class.",
      bullets: ["Well suited to MYP and IGCSE years", "Paused over festival weeks", "Subject can be changed mid-year"],
    },
  ],

  tutorsIntro:
    "Tutors teach from different parts of India on Indian Standard Time. Because the sun sets early in the east, most Tuensang lessons begin in the late afternoon, which suits our tutors' working hours too.",

  sections: [
    {
      heading: "Are there IB or IGCSE schools near Tuensang?",
      paragraphs: [
        "Not that we could confirm, and we would rather say that than invent a list. Tuensang has government and private schools, among them a government higher secondary school, mission-run institutions and schools linked to the Assam Rifles, but none we could verify against the IB directory or the Cambridge and Edexcel listings. Nagaland's established international options, to the extent they exist, are in other cities, and the nearest gateway most families discuss is Guwahati.",
        "The distance matters. Tuensang is high in the hills, and the road to Mokokchung and on to Dimapur is a full day of travel in good weather. That makes daily commuting to a Diploma school impossible and turns the question into one of boarding, relocation or staying home and studying with support. Families who stay often do so because the child is young, because a parent is posted here for a few years, or because they want the child close until Class 10.",
        "Those who do enrol elsewhere tend to enter at the transition points: Class 6 for the MYP, Class 9 for IGCSE and Class 11 for the Diploma. Arriving at one of these points from the Nagaland Board is a real academic adjustment, and a tutor who teaches the receiving syllabus can smooth the first year considerably.",
        "If a local school here ever introduces an international programme, parents will hear before we do. Tell us the syllabus and the subject list, and lessons can begin against it within the week.",
      ],
    },
    {
      heading: "Nagaland Board, CBSE, IGCSE and IB: how do they compare for a Tuensang student?",
      paragraphs: [
        "The Nagaland Board of School Education runs the HSLC at Class 10 and the HSSLC at Class 12, with annual written examinations in the first quarter of the year. CBSE schools follow the national pattern, and both lead toward entrance routes such as CUET-UG, NEET and JEE. Language policy in the state means English is the medium of instruction and exams, which gives local students a head start on any international board.",
        "IGCSE is a two-year course whose Core and Extended papers reward clear working and exact vocabulary. The IB Diploma is a broader and heavier thing: six subjects, an essay, a knowledge course and a service component, with internal assessments marked inside the school. A Tuensang student who is comfortable in English and organised in homework is usually able to adapt to either, provided the new paper styles are taught early.",
        "The table lays out how the five look from a Tuensang kitchen table.",
      ],
      table: {
        caption: "Boards as seen from Tuensang",
        columns: ["Board", "How it is tested", "Language", "Typical next step", "Local tutor availability"],
        rows: [
          ["Nagaland Board (HSLC, HSSLC)", "Annual written papers", "English-medium", "Colleges in Kohima, Dimapur, Guwahati, Delhi", "Teachers and tutors in town"],
          ["CBSE", "Board papers at Class 10 and 12", "English or Hindi", "CUET-UG, NEET, JEE", "Some tutors; few for senior sciences"],
          ["Cambridge IGCSE", "Tiered papers in three yearly series", "English", "A Level, IB Diploma or Indian Class 11", "Hardly any"],
          ["Pearson Edexcel International GCSE", "Foundation and Higher tiers", "English", "Same routes as Cambridge", "Hardly any"],
          ["IB Diploma", "Exams plus internal assessment, essay, CAS", "English", "Indian universities via AIU, plus study abroad", "None locally"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Tuensang?",
      paragraphs: [
        "Because the lessons are online, a Tuensang family pays for the tutor's expertise rather than for a postcode, and the rate depends on the course more than on where the student lives. We do not publish a price list. After a free trial lesson we send the figure in writing, so the family can discuss it at home before anything begins.",
        "Level is the first driver. Teaching HL Physics to a Class 12 student, with its derivations and its uncertainty analysis, takes a different background from guiding a Class 7 child through MYP Sciences. Scarcity is the second: tutors with real experience in HL Chemistry, Further Mathematics or IB Computer Science are fewer, and that shows in the rate.",
        "Frequency and horizon are the third. One lesson a week all year is a different arrangement from three lessons a week in the six weeks before a mock. Parents often find the second plan easier to justify, and we are happy to sketch both.",
        "There is also a cost that never shows up on an invoice: the price of sending a child to another city before the family is ready. For some households in Tuensang, a year or two of online support is how they keep the child at home through Class 10 and make the later move with confidence.",
      ],
      bullets: [
        "Programme and level (SL, HL, Core, Extended)",
        "How hard the subject is to staff with a qualified tutor",
        "Lessons per week and how long the plan runs",
        "Whether the plan is a steady term or an exam-season block",
      ],
    },
    {
      heading: "Online home tuition, a local tutor, a centre in a bigger city and self-study: which suits Tuensang?",
      paragraphs: [
        "Tuensang families usually weigh four options. A local teacher is close and trusted, a centre in Dimapur or Guwahati means living there, self-study costs nothing but patience, and live online home tuition is the newest. Each fits a different child.",
        "A local tutor can be excellent at state-board content, yet the pool who have taught an IB paper or an IGCSE Extended paper is small in a district town. Centres in larger cities offer real specialists, but they assume the student lives in or near the city. Self-study with past papers is reasonable for a disciplined child in a subject they enjoy, though it leaves marking and feedback to chance.",
      ],
      table: {
        caption: "Four ways to get IB or IGCSE help from Tuensang",
        columns: ["Option", "Knows the international syllabus", "Travel needed", "Flexibility", "Most useful when"],
        rows: [
          ["Live online one-to-one at home", "Yes, matched by subject and board", "None", "High; easy to reschedule", "Any programme and any subject"],
          ["Teacher or tutor in Tuensang", "Rarely", "Short walk", "Moderate", "Nagaland Board and CBSE content"],
          ["Centre in Dimapur or Guwahati", "Often", "Relocation or long journeys", "Fixed batches", "A family already planning a move"],
          ["Self-study with past papers", "Depends on the student", "None", "Complete", "A confident, self-directed learner"],
        ],
      },
    },
    {
      heading: "How do the hill monsoon, church days and festivals shape the Tuensang study year?",
      paragraphs: [
        "A Tuensang student's year has a weather rhythm that a plain-country calendar misses. The rains arrive around May and run through September, and they can close sections of highway and interrupt both electricity and mobile data. Winters are cool and dry, with early dusk and a clear sky that makes November lessons pleasant.",
        "Community life adds its own structure. Sundays are kept for church and family, so we avoid booking lessons in the morning and keep Sunday sessions short and late. Christmas and New Year bring a long shutdown, and the Hornbill Festival in December draws many families toward Kohima. Chang households celebrate Naknyulem in July, and the other communities of the district have their own harvest and sowing festivals, when whole families travel to their villages.",
        "The IB Diploma has May and November sessions, with results in July and January. Cambridge IGCSE has windows in February and March, May and June, and October and November, while Pearson Edexcel runs January, May and June, and October and November series. The school or centre where the candidate is entered determines which applies, and we plan backwards from that date.",
      ],
      table: {
        caption: "The year in Tuensang and what it means for study",
        columns: ["Months", "What is happening", "Effect on study", "How lessons adapt"],
        rows: [
          ["Jan to Mar", "Nagaland Board exams, IGCSE Feb/Mar series, cold mornings", "Heavy exam load", "Timed papers and early-evening slots"],
          ["Apr to Jun", "IB May session, rain begins", "Network and power interruptions", "Buffer minutes and a backup hotspot"],
          ["Jul to Sep", "Heavy monsoon, Naknyulem, IB results in July", "Landslide delays, village visits", "Flexible days and catch-up weeks"],
          ["Oct to Nov", "November sessions, clear skies", "Productive weeks before exams", "Revision blocks with full mock papers"],
          ["Dec", "Hornbill Festival, Christmas and New Year", "Long break and travel", "Lessons paused, reading plan set"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Tuensang go next?",
      paragraphs: [
        "Most students head out of the district for higher study, and the IB or IGCSE path keeps several routes open. Nagaland University, with campuses around Kohima and Lumami, and NIT Nagaland near Chumukedima serve those who want to stay in the state. Delhi, Pune, Bengaluru and Guwahati draw many others, and some families look overseas.",
        "An IB Diploma holder normally needs an equivalence certificate from the Association of Indian Universities, and CUET-UG is the main gateway to central universities. For medicine and engineering, subject choices in Class 11 matter, so check the current rules of the National Testing Agency and of the state counselling authority before committing to a subject list.",
        "IGCSE students generally continue to an IB Diploma, an A Level course, or the Indian Class 11 and 12 of their choice. Students aiming at the UK, Canada, Australia or the US depend on predicted grades and school references, which is where steady tutor feedback becomes useful.",
        "Students from the northeast often mention that moving to a metro involves adjustments beyond academics, such as food, climate and unfamiliar crowds. A tutor who has taught many such students can talk about this honestly as the plan is made.",
      ],
    },
    {
      heading: "How are IB Mathematics AA and AI and the sciences taught in detail?",
      paragraphs: [
        "Analysis and Approaches is the demanding route, built around calculus, algebra and the habit of justifying each step. It suits students aiming at engineering, pure science or economics with a quantitative bent. Applications and Interpretation leans toward statistics, financial maths and modelling with technology, and it fits students planning business, social science or design courses. We usually sit with a student and look at a few past questions from each course before the choice is final.",
        "In practice the early weeks go on notation and habits: writing the setup of a problem, labelling units, and using the calculator properly on Paper 2. HL students then spend long stretches on proof, vectors and differential equations, with a tutor who can pause and rebuild a missing foundation from the Nagaland Board syllabus.",
        "The sciences follow the same pattern with different pressure points. Physics rewards a feel for orders of magnitude, Chemistry punishes loose arithmetic in moles, and Biology rewards exact wording drawn from the syllabus guide. Tutors work unit by unit with past questions, then switch to full papers before mocks. The internal assessment is the student's own investigation, and a tutor explains the criteria and gives feedback on a plan rather than producing any of the work.",
        "Long sessions help in the weeks before an exam, particularly at HL, while shorter and more frequent lessons help SL students who need steady rehearsal.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, Cambridge or Edexcel: how should a Tuensang student choose?",
      paragraphs: [
        "In Cambridge IGCSE the Core papers cap the highest grade, while Extended papers open the whole scale. Pearson Edexcel uses Foundation and Higher tiers with a similar logic. Students planning to continue to IB Diploma Mathematics, Physics or Chemistry should usually be entered for Extended or Higher.",
        "The decision is not purely about ambition. A student who is struggling with the content can often do better at the lower tier than at a stretched higher one, and it is best made in the term before entry, when mock results exist. A tutor can review the mocks with the family and talk through the likely outcomes.",
        "Subject mix matters too. A balanced IGCSE set typically has two languages, mathematics, one or more sciences and a humanities or business subject, and these choices influence what is open in Class 11. We help a family map the choices forward, always alongside the school counsellor.",
        "For Tuensang students the most common sticking point is extended writing in English, where oral fluency is strong but formal essay structure needs practice. It is a short, trainable gap with weekly lessons and reading.",
      ],
    },
  ],

  process: [
    { title: "Share the board and the subject", description: "Message us on WhatsApp or email with the programme, subject, level and exam session." },
    { title: "Meet a matched tutor", description: "We pick a tutor who has taught that course and send a short profile before the first lesson." },
    { title: "Take a free trial lesson", description: "A real lesson on a real topic, so your child can judge the style before any commitment." },
    { title: "Receive the rate in writing", description: "If the trial goes well, we write out the rate and the lesson plan. Nothing starts until you agree." },
    { title: "Settle into a weekly rhythm", description: "Regular live lessons, a short written note after each, and a free tutor change if the fit is off." },
  ],

  whyPoints: [
    { title: "Course-specific tutors", description: "Your child gets someone who has taught this exact syllabus, not a general teacher who also does a bit of IGCSE." },
    { title: "Planned for hill-town conditions", description: "Lessons allow for early dusk, rain-day outages and the pauses around festivals and travel." },
    { title: "Plain talk about local options", description: "We tell you directly when no school in Tuensang offers the programme, and what that means for the next two years." },
    { title: "Readable lesson notes", description: "A short note after each class records what was covered, what went wrong and what comes next." },
    { title: "Coaching with integrity", description: "Tutors teach method and content. They do not write internal assessments, essays or coursework." },
    { title: "Low-risk start", description: "A free trial lesson, rates in writing and a no-cost tutor change keep the first step small." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE schools in Tuensang?", answer: "We could not confirm any. Schools in Tuensang follow the Nagaland Board or CBSE, and none we found appears in the IB directory or in Cambridge and Edexcel listings. Families who want an international curriculum usually look at Guwahati or Kolkata, which are far away. If a local school launches an IB or IGCSE programme, we can start tutoring against that syllabus within a week of hearing from you." },
    { question: "Do tutors come to my house in Tuensang?", answer: "No. Tutors do not visit homes in Tuensang; home visits run only in Gurugram and parts of Delhi NCR. What we offer here is online home tuition, which means a live private lesson taught over video while your child sits at home with a laptop. You avoid the long hill roads and keep the same tutor week after week." },
    { question: "How do I find IB and IGCSE tutors in Tuensang for a particular subject?", answer: "Send the programme, subject, level and exam session on WhatsApp or by email. We shortlist a tutor who has taught that exact course, share a short profile and book a free trial lesson. If the fit is wrong, we find another tutor at no extra cost." },
    { question: "What does IB or IGCSE tuition cost in Tuensang?", answer: "The rate depends on the programme, the level, how scarce the subject is among tutors, and the number of lessons per week. We do not publish a price list. After the trial lesson we send the rate in writing, so you can talk it over at home before agreeing." },
    { question: "Will the mobile network or power cuts ruin online lessons?", answer: "They can interrupt a lesson, but they need not spoil the plan. We suggest a wired or good Wi-Fi line where possible, a charged laptop, and a second SIM or hotspot as backup. Tutors build a few spare minutes into each slot and move a lesson without penalty if the rain has taken out the connection." },
    { question: "Can a student from the Nagaland Board switch to IGCSE or IB?", answer: "Yes. The content is often familiar, but the paper styles, command terms and presentation of working are new. A tutor teaches those first and then fills in any content gaps. A few months of lead time before the move makes a visible difference." },
    { question: "Which IB exam sessions do you cover?", answer: "Both the May and November sessions. The school or centre decides which one a candidate sits, and we plan lessons backwards from that date. Results come in July and January." },
    { question: "Will a tutor write my child's IA, Extended Essay or coursework?", answer: "No. Tutors never write internal assessments, Extended Essays, TOK essays or coursework. They teach the method, explain the criteria and give feedback on the student's own ideas, but the work belongs to the student." },
    { question: "How does the free trial lesson work?", answer: "It is a live lesson on a topic from your child's own syllabus, taught by the tutor we propose. There is no payment and no obligation. Afterwards you receive a short written note, and we send the rate in writing if you wish to continue." },
    { question: "Do you teach both Cambridge and Pearson Edexcel IGCSE?", answer: "Yes. The boards differ in tiering, paper structure and mark schemes, so tutors are matched by board code as well as subject. Tell us which board your child's school or exam centre uses and which papers will be sat." },
    { question: "Should my child take Mathematics AA or AI?", answer: "Analysis and Approaches is the better fit for students who like algebra and calculus and may head toward engineering or pure science. Applications and Interpretation suits students leaning toward business, social science or design. A tutor can look at your child's strengths before the choice is final in Class 11." },
    { question: "Can students from villages outside the town join?", answer: "Yes, anywhere in the district where a stable internet connection exists. Villages toward Noklak, Shamator and Longleng may have patchy mobile data, so a fixed line or a spare SIM is a sensible precaution. We schedule around travel days and festival weeks." },
    { question: "What time are lessons usually held?", answer: "Most Tuensang students take lessons in the late afternoon or the evening on weekdays, and on Saturdays. Sunday sessions, if wanted, are short and late in the day out of respect for church time. Exam-season blocks may add extra slots, and festival weeks are paused." },
    { question: "Does the IB Diploma count for admission to Indian universities?", answer: "Generally yes, with an equivalence certificate from the Association of Indian Universities, and CUET-UG is the usual gateway to central universities. For NEET, JEE and state quotas, rules depend on your subject choices, so confirm them with the relevant authority before Class 11 subjects are fixed." },
    { question: "Is online tuition really as effective as a coaching centre?", answer: "For most students it is, and sometimes more so, because the teaching is one-to-one and aimed at your child's gaps. A centre can suit a child who likes a class setting, but it assumes the family lives in a city. For a Tuensang student, the choice is usually between live online lessons and no specialist help at all." },
    { question: "How do I get started?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's board, subject and level. We reply with a tutor suggestion and a trial time, usually within a day or two." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "How the same online service works in towns and cities nationwide." },
    { label: "IB tutors, all programmes", href: "/ib-tutors/", description: "An overview of how our IB tutoring is organised." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects with board-specific tutors." },
    { label: "Diploma Programme help", href: "/programmes/dp/", description: "Subject support for Classes 11 and 12." },
    { label: "Middle Years Programme help", href: "/programmes/myp/", description: "Criterion-based assessment support for Classes 6 to 10." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "AA and AI at Standard and Higher Level." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of the tutors who teach IB and IGCSE." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book a free trial lesson." },
    { label: "IB and IGCSE tutors in Kohima", href: "/kohima/", description: "Our page for Nagaland's state capital." },
    { label: "IB and IGCSE tutors in Dimapur", href: "/dimapur/", description: "The state's main commercial and rail gateway." },
    { label: "IB and IGCSE tutors in Guwahati", href: "/guwahati/", description: "The northeast's largest city, where many families consider senior schooling." },
  ],

  closingHeading: "Begin with a free trial lesson from home in Tuensang",
  closingBody:
    "Tell us your child's programme, subject and exam session. We match a tutor, arrange a free trial lesson and put the rate in writing before you decide. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
