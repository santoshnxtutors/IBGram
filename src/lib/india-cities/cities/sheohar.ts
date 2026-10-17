import type { CitySeoPage } from "../types";

/**
 * Sheohar, headquarters of Sheohar district, Bihar (Tirhut division). No IB or Cambridge/Edexcel
 * school could be confirmed in the town, so stripSchools is empty and clusters point honestly to
 * Kolkata, Delhi NCR and the Mussoorie boarding belt. Online-only delivery; no home visits.
 */
export const sheohar: CitySeoPage = {
  slug: "sheohar",
  countryName: "Sheohar",
  countryNameLong: "Sheohar, Bihar",
  demonym: "Sheohar",
  flagCode: "in",
  countryCode: "IN",
  state: "Bihar",
  stateCode: "IN-BR",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings after school and early mornings, kept clear of flood-season disruption, Chhath and Durga Puja weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.5142, longitude: 85.2972 },
  wikipedia: "https://en.wikipedia.org/wiki/Sheohar",
  alternateNames: ["Shivhar", "Sheohar district"],
  stripSchools: [],

  title: "Sheohar IB & IGCSE Tutors | Live Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Sheohar, Bihar: live one-to-one online tuition for DP, MYP, PYP and Cambridge or Edexcel IGCSE, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Home Tuition Online in Sheohar",
  heroEyebrow: "IB & IGCSE TUTORING FOR SHEOHAR, BIHAR",
  heroSubtitle:
    "Searching for IB home tuition or IGCSE private tuition in Sheohar usually means one of two things: you want a good teacher for a syllabus no nearby school teaches, or your child is already on an international course somewhere else. Either way the answer here is online. Sheohar, the smallest district headquarters in Bihar's Tirhut division, has no confirmed IB or IGCSE school, so IB Gram tutors teach live, one to one, over video, with a free trial lesson first.",
  primaryKeyword: "IB and IGCSE tutors in Sheohar",
  imageAltText: "Student in Sheohar, Bihar attending a live online IGCSE Chemistry lesson on a laptop with a tutor drawing on a shared whiteboard",
  secondaryKeywords: [
    "IB tutor Sheohar",
    "IGCSE tutor Sheohar",
    "IB home tuition Sheohar",
    "IGCSE home tuition Sheohar",
    "IB private tuition Sheohar",
    "IB Maths tutor Sheohar",
    "IGCSE Maths tutor Sheohar",
    "IB Physics tutor Sheohar",
    "IB Chemistry tutor Sheohar",
    "IB Biology tutor Sheohar",
    "IB DP tutor Sheohar",
    "IB MYP tutor Sheohar",
    "IB PYP tutor Sheohar",
    "IGCSE online tuition Sheohar",
    "online IB tutor Bihar",
    "IB tutor Mehsi",
    "IB tutor Motihari Muzaffarpur",
    "Edexcel IGCSE tutor Bihar",
    "Shivhar IB tuition",
  ],

  heroTrustPoints: [
    "Tutors matched to your child's exact IB subject and level or IGCSE board code",
    "Live one-to-one video lessons that run on ordinary home broadband or mobile data",
    "Free trial lesson, with rates stated in writing before you agree to anything",
    "Lesson notes sent after each session so parents in Sheohar can see what was taught",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "IB programmes covered" },
    { value: "Cambridge, Edexcel", label: "IGCSE boards taught" },
    { value: "100% online", label: "Tutors do not visit Sheohar homes" },
    { value: "Free trial", label: "Before you commit" },
  ],

  intro: {
    heading: "Studying an international syllabus from Sheohar",
    paragraphs: [
      "Sheohar is the headquarters of Bihar's smallest district by area, a compact town on the Tirhut plain north of Muzaffarpur and not far from the Nepal border. Its schools follow the Bihar School Examination Board and CBSE, and its coaching culture leans towards board results, government jobs and the engineering and medical entrances that Patna and Kota have made famous. International syllabuses are almost invisible here, which is why we are careful about what we promise.",
      "What we can offer is dependable and honest: specialist IB and IGCSE tutors teaching online. If you are a family in Sheohar whose child is joining an IB school in Patna, Kolkata or Delhi, or is already enrolled in a boarding school that teaches Cambridge or Edexcel IGCSE, a tutor can fill gaps that the school moves too quickly to fill. If you want to explore the international route from scratch, we can explain the options before any money changes hands.",
      "Every IB Gram tutor is based in India and teaches on Indian Standard Time. Lessons are live and one to one, run on a shared digital whiteboard, and close with a short written summary. The first lesson is a free trial, the rate is given in writing, and the tutor can be changed if the fit is wrong.",
      "A note on wording. People type home tuition into search engines, and so do we. Here it means private tuition received at home, not a teacher walking into your house. No IB Gram tutor visits homes in Sheohar; in-person visits exist only in Gurugram and parts of Delhi NCR. Your child sits at a desk in Sheohar and the teacher appears on the screen.",
    ],
    bullets: [
      "IB PYP, MYP and Diploma subjects, and Cambridge or Pearson Edexcel IGCSE",
      "Planning around Bihar's flood months, Chhath and Durga Puja holidays",
      "Straight advice on whether an international route suits your child's plans",
      "Tutors coach technique; they do not write assessed coursework",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "An inquiry-led primary course organised around themes rather than separate subjects. Help is gentle: spoken English, reading for meaning, and number reasoning.",
      countryNote:
        "A Sheohar child moving to a PYP school typically speaks Hindi, Bajjika or Maithili at home, so a few weeks of confident English conversation is the best preparation.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked against published criteria, with a personal project at the end. Tutors teach students to read a criterion and write an answer that meets it.",
      countryNote:
        "Students who arrive from Bihar Board classes need to move from learning answers to constructing them, and the MYP rewards that move.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, the Extended Essay, Theory of Knowledge and CAS. The IB's pre-university qualification, accepted by universities across the world.",
      countryNote:
        "Sheohar students on the DP are mostly at schools elsewhere and use our tutors in term evenings or during holidays back home.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A shorter IB pathway combining DP subjects with career-related study. Rare in India and supported on request.",
      countryNote:
        "We support the CP only when a school in your child's actual plans offers it.",
    },
  ],
  programmesIntro:
    "The IB has four programmes. For Sheohar families, the useful question is not which is most prestigious but which one the next school offers, and when to begin preparing for it.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Algebra, calculus and rigorous reasoning for students heading to engineering, science or economics." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, modelling and technology-supported problem solving for social science, business and design routes." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, thermal physics, waves, fields and atomic topics with data-handling and experimental design." },
    { name: "Chemistry", levels: "SL and HL", description: "Quantitative chemistry, energetics, equilibrium and organic mechanisms with practical-analysis questions." },
    { name: "Biology", levels: "SL and HL", description: "Molecules, genetics, ecology and human physiology, assessed with data-based short answers." },
    { name: "Economics", levels: "SL and HL", description: "Microeconomics, macroeconomics and global economy, using examples from India, Bihar's labour migration and trade." },
    { name: "Business Management", levels: "SL and HL", description: "Organisations, marketing and finance through case studies." },
    { name: "Computer Science", levels: "SL and HL", description: "Computational thinking, programming and system fundamentals." },
    { name: "Psychology", levels: "SL and HL", description: "Biological, cognitive and sociocultural approaches, with research-evaluation essays." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Analysis of non-fiction and literary texts for students from Hindi-medium backgrounds." },
    { name: "Hindi A: Literature", levels: "SL and HL", description: "Close reading of modern and classical Hindi writing, a natural strength in Bihar." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion and structure coaching for the exhibition and essay; the work submitted is the student's own." },
  ],
  subjectsIntro:
    "The IB subjects below are the ones our tutors teach most. Others, including Visual Arts, Geography and History, can be arranged after a short conversation.",

  igcseSubjects: [
    { name: "Mathematics (Cambridge 0580 / Edexcel 4MA1)", levels: "Core and Extended", description: "Algebra, geometry, mensuration and probability, with Extended adding sequences, vectors and functions." },
    { name: "Physics", levels: "Core and Extended", description: "Motion, energy, electricity and radioactivity, with graph skills and practical analysis." },
    { name: "Chemistry", levels: "Core and Extended", description: "Particle theory, reactions, organic basics and qualitative analysis." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, nutrition, genetics and ecosystems with experiment-based questions." },
    { name: "Combined Science", levels: "Core and Extended", description: "A single-course route through the three sciences." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Reading, writing and speaking tasks, key for students building fluency." },
    { name: "Hindi as a Second Language", levels: "Core and Extended", description: "Comprehension and composition for Hindi-speaking students." },
    { name: "Business Studies and Economics", levels: "Core and Extended", description: "Short-answer and data-response papers on firms, markets and policy." },
    { name: "Computer Science", levels: "Core and Extended", description: "Pseudocode, networks, data representation and programming problems." },
  ],
  igcseSubjectsIntro:
    "A student in Sheohar who takes IGCSE usually does so as a private candidate or at a boarding school. Tutors teach to whichever board specification applies and confirm the code in the first lesson.",

  regionsTitle: "Sheohar town and the towns families here travel to",
  regionsIntro:
    "Sheohar is small enough that the useful geography is the road network: where families live in town, and which larger towns they look to for schools, trains and exam centres. Notes below describe study conditions, not tutor visits.",
  regions: [
    { name: "Sheohar town centre", note: "Market, courts and district offices sit close together. Government-employee households here are the ones most likely to be posted elsewhere, which triggers many of our enquiries." },
    { name: "Residential wards around the district offices", note: "Teachers and officers' families; evening is the best lesson slot after school and tuition hours." },
    { name: "Villages along the Bagmati plain", note: "Agriculture and migrant-income households. Floods in the monsoon can cut roads and power, so lessons are paused and made up later." },
    { name: "Purnahiya and Dumri Katsari side", note: "Block areas of the district where mobile data is often the only connection; audio-first lessons work best." },
    { name: "Mehsi", note: "About 30 km away and the nearest railway station, known for its button industry. Families use it as their link to Muzaffarpur and Gorakhpur." },
    { name: "Motihari", note: "East Champaran's headquarters, with a larger set of private schools and a town college." },
    { name: "Sitamarhi side", note: "A neighbouring district town reachable by road; some Sheohar families have relatives and schools there." },
    { name: "Muzaffarpur", note: "The city most Sheohar families treat as the regional hub for hospitals, colleges, coaching and higher exams." },
  ],

  schoolClusters: [
    {
      city: "Sheohar and its district",
      note: "No IB or Cambridge/Edexcel school was confirmed in Sheohar, Mehsi or Muzaffarpur. Local options for these syllabuses are limited, so online tuition and private candidacy are the realistic routes.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The nearest large city with several established international schools; many Bihar families consider it for day or boarding places.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "The Cambridge School, Calcutta"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "The most popular destination for Bihar families seeking IB or IGCSE, either with relatives or in boarding.",
      schools: ["Vasant Valley School, Delhi", "The British School, New Delhi", "Step by Step School, Noida"],
    },
    {
      city: "Nearby: Mussoorie boarding belt",
      note: "A residential option for students from northern India who want a full IB Diploma away from home.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent online tutoring service and is not connected to the IB, Cambridge, Pearson or any school mentioned. The schools are named only to show where these syllabuses are taught in the wider region; always confirm admissions directly with the school.",

  tutorsIntro:
    "These tutors teach live online from India on IST. They do not travel to Sheohar; the lesson is a video call matched to your child's syllabus and level.",
  modesIntro:
    "Sheohar families get one format, online one-to-one, offered at three different tempos depending on the child's needs and the time of year.",
  modes: [
    {
      title: "Steady weekly lessons",
      description: "One or two fixed slots each week with the same tutor, scheduled around school and coaching.",
      bullets: [
        "Continuity with one teacher",
        "Shared whiteboard and annotated past papers",
        "Suitable for ordinary home broadband or mobile data",
        "Pause and resume around floods and festivals",
      ],
    },
    {
      title: "Pre-exam sprint",
      description: "A tight block of lessons before mocks or board sessions, concentrated on timed questions and exam technique.",
      bullets: [
        "Timed papers marked to the current scheme",
        "Priority list of weak topics after paper one",
        "Book three weeks before the exam block",
        "Avoids Chhath and Durga Puja weeks",
      ],
    },
    {
      title: "Move-ready preparation",
      description: "Short, focused help for a child about to join an IB or IGCSE school in another city.",
      bullets: [
        "English academic writing practice",
        "Maths and science vocabulary bridge",
        "Criterion-based marking introduced early",
        "Parents receive a plain-language summary",
      ],
    },
  ],

  sections: [
    {
      heading: "Do any schools near Sheohar teach the IB or IGCSE?",
      paragraphs: [
        "The short answer is that we could not confirm any. Sheohar district's schools follow the Bihar Board and CBSE, and the towns around it, such as Mehsi, Motihari and Sitamarhi, have similar profiles. We would rather say that than name a school that does not exist on paper, as some directory pages do.",
        "That does not mean the IB and IGCSE are irrelevant to Sheohar. The families who ask us fall into recognisable groups. Some have a child admitted to a school in Kolkata, Delhi or Dehradun and want a bridge before the first term. Some have relatives abroad and are weighing whether to move a child to an international syllabus for a better chance at overseas study. Some belong to Bihari households working in the Gulf, Mumbai or Delhi, where the child studies an international curriculum during the year and returns to Sheohar for holidays.",
        "For these families, the school may be elsewhere, but the study often happens in Sheohar, in a quiet room, in the evening. That is where an online tutor makes sense. The tutor works with whatever the child is learning, whether in a classroom in Kolkata or alone as a private candidate.",
        "If you are not yet sure which route to choose, begin with a free trial and a straightforward conversation. We will tell you what an IB or IGCSE course demands and whether it fits your plans.",
      ],
    },
    {
      heading: "Bihar Board, CBSE, IGCSE and IB: how do they differ?",
      paragraphs: [
        "A Sheohar student on the Bihar Board or CBSE learns a fixed syllabus and is examined on it at the end of Class 10 and Class 12. IGCSE offers more choice, fewer topics per subject, and papers that test application. The IB Diploma goes further, combining six subjects with an essay, a knowledge course and service activities.",
        "In practice the difference shows in how answers are marked. A Bihar Board paper often rewards the complete, textbook-style answer. An IB paper rewards a reasoned answer in your own words, supported by evidence. Students who understand this shift early do better.",
        "The table compares the four systems across the points families ask about most. It is a general guide; individual schools vary.",
        "Whichever route you consider, work backwards from the next school or university. A syllabus is a means, not an end.",
      ],
      table: {
        caption: "Boards compared for a Sheohar family",
        columns: ["Point", "Bihar Board / CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Where it is taught", "Nearly every school in Sheohar district", "Not confirmed in Sheohar; boarding or private candidacy", "Not confirmed in Sheohar; schools in other cities"],
          ["Language of study", "Hindi or English", "English", "English, with a second language required"],
          ["Assessment", "Annual board exams", "Subject exams in May-June or October-November", "Exams in May or November plus internal tasks"],
          ["Skills emphasised", "Recall and completeness", "Application and structured response", "Inquiry, essays, data and independent research"],
          ["Entrance exams in India", "JEE, NEET directly", "Via Class 12 board or A Level route", "Eligible for JEE, NEET with right subjects"],
          ["Overseas recognition", "Varies by country", "Well understood", "Widely recognised"],
        ],
      },
    },
    {
      heading: "What drives the cost of IB and IGCSE tuition for Sheohar students?",
      paragraphs: [
        "We do not post fixed prices, because the right number depends on what you are buying. After the free trial, you receive a written quote based on the subject, the level, the lesson length and how many sessions a week you want.",
        "Three factors matter most. First, the course: IB Higher Level Physics needs more preparation per lesson than IGCSE Core English, and the rate reflects it. Second, timing: students in an exam year usually need more lessons and more marked papers. Third, the tutor's experience with the specific syllabus.",
        "One saving is built in. Because tutoring is online, a Sheohar family does not pay for travel, for a tutor to commute from Muzaffarpur, or for a centre's rent. The rate covers the teaching and the preparation, and that is all.",
        "If budget is tight, start with a short block before a major exam, or alternate weekly lessons with self-practice on past papers. We will help you plan a sensible number of sessions, and we will say plainly if fewer would do.",
      ],
      bullets: [
        "Written rates after the trial lesson, never a surprise figure",
        "Higher Level and exam-year support costs more than foundation",
        "Short blocks are available for a tighter budget",
        "Notes, marking and parent updates are included in the lesson",
      ],
    },
    {
      heading: "Is online tuition better than coaching in Muzaffarpur or a local tutor?",
      paragraphs: [
        "For IB and IGCSE, online one-to-one tuition is generally the stronger choice, because the supply of teachers who know these syllabuses is thin in northern Bihar. Coaching institutes in Muzaffarpur and Patna are built around board exams, JEE, NEET and competitive recruitment. They are very good at that, but their batches do not teach IB criteria or Cambridge command words.",
        "A local private tutor can offer a familiar face and flexible timing, which is valuable for younger children. But finding one who has taught the IB or IGCSE is unlikely. Self-study with past papers is possible and cheap, though without feedback it is easy to practise the wrong habits.",
        "Online tuition reverses the problem. Distance disappears, and the child can work with a specialist in exactly the course they are studying. The costs are practical: a reliable connection, a quiet corner and a willingness to prepare questions before each lesson.",
        "The table below sets out how the options differ.",
      ],
      table: {
        caption: "Study options for IB and IGCSE from Sheohar",
        columns: ["Option", "Advantage", "Drawback", "Suits"],
        rows: [
          ["Online one-to-one with IB Gram", "Specialist tutor for the exact course and written feedback", "Needs internet and a quiet space", "Any IB or IGCSE student in Sheohar"],
          ["Coaching in Muzaffarpur or Patna", "Peer environment and routine", "Syllabus mismatch, travel, fixed batch timings", "Board exams and entrances in parallel"],
          ["Local private tutor", "Convenient and familiar", "Rarely knows IB or Cambridge marking", "Early primary support"],
          ["Self-study", "Free and flexible", "No marking, easy to lose direction", "Strong independent learners as a supplement"],
        ],
      },
    },
    {
      heading: "Exam calendar, floods and festivals in the Sheohar study year",
      paragraphs: [
        "International exams follow a fixed rhythm: IB Diploma in May and November, IGCSE in May-June and October-November, with a January series available for some boards. Plan the centre early; students from Sheohar often travel to Patna, Kolkata or Delhi for exams, and train tickets and rooms are scarce around Chhath.",
        "Local conditions shape the year. From July to September the rivers of north Bihar, including the Bagmati, can flood, interrupting roads and power. Chhath in autumn is the biggest family event of the year, and Durga Puja and Diwali fall close by. Summers are hot and humid before the rains, and winter fog can slow travel.",
        "We build lessons around these facts. Finish syllabus coverage before the monsoon where possible, schedule mocks away from the Chhath fortnight, and keep a fall-back connection ready. If a lesson is lost to a flood or power cut, we reschedule it.",
        "The table is a template, not a promise; your school or centre sets its own dates.",
      ],
      table: {
        caption: "A typical year for a Sheohar student on IB or IGCSE",
        columns: ["Months", "Local conditions", "Study focus"],
        rows: [
          ["April to June", "Heat and humidity; May exam sessions", "Final revision, morning or evening lessons"],
          ["July to September", "Monsoon and flood risk; new term", "Core syllabus coverage, drafts of internal work"],
          ["October to November", "Durga Puja, Diwali, Chhath; November exams", "Revision blocks and travel planning"],
          ["December to February", "Cool weather, fog, mocks", "Timed papers and feedback"],
          ["March", "Pre-exam consolidation", "Weak-topic repair, exam technique"],
        ],
      },
    },
    {
      heading: "Which universities can IB and IGCSE students from Sheohar target?",
      paragraphs: [
        "IB Diploma holders can seek admission in India through AIU equivalence, and central universities generally route applicants through CUET-UG. Bihar students often consider Patna University, Babasaheb Bhimrao Ambedkar Bihar University in Muzaffarpur, and institutions in Delhi, Kolkata and Pune. It is wise to verify the subject mapping early.",
        "For engineering and medicine, JEE Main and NEET-UG remain the gateways, and IB or IGCSE students are eligible if their subject combinations meet the stated requirements. Physics, Chemistry and Mathematics or Biology must be present at a suitable level. IIT and NIT counselling follows its own rules, so check the current brochure.",
        "Study abroad is where the IB shines. The Diploma is understood in the UK, Canada, Australia, Singapore and many US universities, and predicted grades play a role in offers. A student from Sheohar can compete, but should plan subject choices and standardised tests at least a year ahead.",
        "We are tutors, not admission agents. We help with subject strategy and exam preparation, and we never promise a seat or a score.",
      ],
      bullets: [
        "Request the AIU equivalence certificate early",
        "Check CUET-UG subject requirements for each university",
        "Keep Maths and the sciences solid if JEE or NEET is a goal",
        "Begin overseas planning a year before the diploma finals",
      ],
    },
    {
      heading: "How do IB Mathematics and the sciences feel to a student from Bihar?",
      paragraphs: [
        "Bihar's classrooms train strong calculation and memory, and those are real assets. IB Mathematics adds a second demand: explain why the method works. In Analysis and Approaches, students prove, justify and interpret; in Applications and Interpretation, they model and comment on data. A short sentence stating the conclusion earns marks that a bare number does not.",
        "The Mathematics internal assessment is a personal exploration. A tutor can describe the criteria, discuss how to find a topic, and suggest what a strong structure looks like, but the writing and the mathematics must be the student's.",
        "In the sciences, expect fewer pure recall questions and more data, graphs and experimental design. Physics asks for physical reasoning, Chemistry for careful quantitative work, and Biology for exact terms applied to unfamiliar contexts. Students from a heavy memorisation background benefit from practising explanation aloud.",
        "A usual pattern is a lesson on a topic, a short set of exam questions for the week, and a review at the next session. Six to eight weeks of this builds a student's timing and confidence.",
      ],
    },
    {
      heading: "Choosing IGCSE subjects and tiers",
      paragraphs: [
        "IGCSE offers a menu of subjects, most with Core and Extended tiers. Core limits the top grade, and Extended removes that limit, so any student planning to continue with Mathematics or sciences at A Level or the IB should usually take Extended.",
        "A balanced selection includes English, Mathematics, at least two sciences and a language or humanities subject. Hindi as a Second Language is a sensible choice for Hindi-speaking students in Bihar, where fluency makes it a high-scoring option.",
        "Private candidates should confirm that their centre can host practical or alternative-to-practical science papers and that it is registered for the right board. The Cambridge and Pearson Edexcel specifications differ in layout and mark schemes, so a tutor must start from the right one.",
        "We teach both. In the first lesson we confirm the exact subject code, then choose past papers from the matching series.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Email support@ibgram.com or WhatsApp +91 7439 368 115 with your child's class, subject and exam target." },
    { title: "Tell us the context", description: "A few questions about the child, the school plan and what is going wrong in the subject." },
    { title: "Try a lesson free", description: "A tutor who teaches that course runs a live online trial." },
    { title: "Agree terms in writing", description: "You receive the rate and plan on paper before any payment." },
    { title: "Review and adjust", description: "Lessons run weekly with notes; we switch tutors if the fit is not right." },
  ],

  whyPoints: [
    { title: "Course-specific tutors", description: "Every match is to the exact IB subject and level or IGCSE code." },
    { title: "Practical for northern Bihar", description: "Lessons tolerate modest connections, and we plan around floods and power cuts." },
    { title: "No-risk trial", description: "A free first lesson shows the teaching before you decide." },
    { title: "Clear written rates", description: "You see the cost before you commit." },
    { title: "Parent-friendly notes", description: "A short summary after each session keeps you in the picture." },
    { title: "Honest scope", description: "We guide thinking and technique, never write assessed work." },
  ],

  faqs: [
    { question: "Can I find an IB tutor in Sheohar?", answer: "Yes, online. IB Gram tutors teach live over video from India, so your child studies at home in Sheohar without anyone visiting. No tutor travels to homes here; visits run only in Gurugram and parts of Delhi NCR. A free trial lets you judge the teaching and the connection first." },
    { question: "Is there an IB or IGCSE school in Sheohar?", answer: "We could not confirm one in Sheohar, Mehsi or nearby Muzaffarpur. Local schools follow the Bihar Board or CBSE. Families looking for IB or IGCSE usually consider Kolkata, Delhi NCR or boarding in the hills. We name no local school we cannot verify." },
    { question: "Do you offer home tuition in Sheohar?", answer: "Only online. Home tuition here means private lessons your child takes at home on a laptop, not a visiting tutor. In-person tuition is limited to Gurugram and parts of Delhi NCR. Online widens the choice of tutors and removes travel from the cost." },
    { question: "What will IB or IGCSE tutoring cost?", answer: "Rates are quoted in writing after the free trial, based on the subject, level and number of lessons. Higher Level and exam-year tuition typically costs more than foundation help. No fixed price list is published, because it would not fit every child. Ask for a short block if you want to limit spending." },
    { question: "What happens if floods or power cuts interrupt a lesson?", answer: "We reschedule. North Bihar's monsoon can cut roads, electricity and mobile data for days. Tell the tutor early, switch to audio if the video fails, or move the slot. Lessons lost to such disruptions are made up at a time that suits your family." },
    { question: "Can my child sit IGCSE exams as a private candidate from Sheohar?", answer: "Usually yes, through an approved exam centre in another city such as Patna, Kolkata or Delhi. The centre handles registration, hosts the papers and arranges science practicals. We cannot register your child but can advise on boards, subjects and timing and teach the course online." },
    { question: "Which IB subjects do Sheohar students ask for?", answer: "Mathematics comes first, followed by Physics, Chemistry, Biology and Economics. English also features because many students come from Hindi-medium schooling. Hindi A is popular for the language requirement. Other subjects can be arranged after a short chat." },
    { question: "Will a tutor write my child's Internal Assessment or Extended Essay?", answer: "No. Tutors coach only. They can explain the criteria, discuss topic ideas and show what strong structure looks like, but the work must be the student's own. This is an IB rule and protects your child from penalties." },
    { question: "How do we book a trial lesson?", answer: "Send the class, subject and exam session to support@ibgram.com or WhatsApp +91 7439 368 115. We suggest a matched tutor and a time in IST, usually within a few days. The trial is free and ends with a short note and a plan." },
    { question: "Is IGCSE or IB accepted by Indian universities?", answer: "Generally yes, subject to AIU equivalence and the university's own rules. Central universities usually add CUET-UG. Engineering and medical entrances accept IB and IGCSE students with the right subjects. Confirm requirements with the institution before choosing subjects." },
    { question: "Can you prepare my child for a move to Kolkata or Delhi?", answer: "Yes. A bridge course covers science and Maths vocabulary, academic English writing and an introduction to criterion-based marking. Starting two to three months before the move works well, and we adapt it to the new school's syllabus once you know it." },
    { question: "What internet connection do we need?", answer: "A normal broadband line or steady 4G is enough for voice, video and a whiteboard. Use wired earphones and keep a hotspot as backup. If the picture drops, the tutor continues by audio and sends notes after the lesson." },
    { question: "When are the IB and IGCSE exams?", answer: "IB Diploma exams are held in May and November. IGCSE runs May-June and October-November series, with a January series for some boards. Dates are confirmed by your school or centre. Book travel early if the centre is outside Bihar." },
    { question: "Can young children get PYP or MYP help?", answer: "Yes. PYP help focuses on reading, speaking English and number reasoning in short sessions. MYP help works on criteria and the personal project. A parent is usually nearby for the first few lessons with younger students." },
    { question: "What if we do not like the tutor?", answer: "Tell us and we change the tutor at no charge. The new tutor is briefed on what has been covered so lessons continue smoothly. A trial lesson is the best moment to judge fit." },
    { question: "Which language do tutors use?", answer: "Lessons are in English, as the courses are, and tutors can explain tricky ideas briefly in Hindi when it helps a younger student. Exam answers must be in English, so we gradually shift the balance." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How our online tuition works in every Indian city." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse IB subjects and programmes." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE support." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure, assessment and core components." },
    { label: "IB Primary Years", href: "/programmes/pyp/", description: "What PYP looks like and how tutoring helps." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Guidance on AA and AI." },
    { label: "Our tutors", href: "/tutors/", description: "Meet the IB and IGCSE team." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a trial." },
    { label: "Patna IB and IGCSE tutoring", href: "/patna/", description: "The state capital, an exam and travel hub." },
    { label: "Muzaffarpur IB and IGCSE tutoring", href: "/muzaffarpur/", description: "The regional city for Tirhut families." },
    { label: "Motihari IB and IGCSE tutoring", href: "/motihari/", description: "East Champaran's headquarters, close to Sheohar." },
  ],

  closingHeading: "Book a free trial lesson for Sheohar",
  closingBody:
    "Tell us the class, the subject and the exam or school your child is working towards. We will match a tutor, arrange a free online trial and put the rates in writing. The lesson comes to your child in Sheohar through a screen; nobody needs to travel.",
};
