import type { CitySeoPage } from "../types";

/**
 * /kancheepuram/ - IB and IGCSE online tuition for Kancheepuram (Kanchipuram), Tamil Nadu. No IB or
 * Cambridge/Edexcel school inside the city could be confirmed, so stripSchools is empty and schoolClusters
 * point to Chennai, about 72 km away. Home visits are not offered here (homeTuition: false in plan.ts).
 */
export const kancheepuram: CitySeoPage = {
  slug: "kancheepuram",
  countryName: "Kancheepuram",
  countryNameLong: "Kancheepuram, Tamil Nadu",
  demonym: "Kancheepuram",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Post-school evening slots, kept clear of festival processions and northeast monsoon evenings where possible",
  lastUpdated: "2026-09-21",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  geo: { latitude: 12.8342, longitude: 79.7036 },
  alternateNames: ["Kanchipuram", "Kanchi", "Conjeevaram", "Kancheepuram Tamil Nadu"],
  wikipedia: "https://en.wikipedia.org/wiki/Kanchipuram",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Kancheepuram | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors in Kancheepuram (Kanchipuram): live one-to-one online tuition from home for DP, MYP, PYP and IGCSE, near Chennai. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Kancheepuram",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR KANCHEEPURAM AND KANCHIPURAM",
  heroSubtitle:
    "Private tuition at home for IB and IGCSE is available in Kancheepuram as live one-to-one video lessons, matched to your child's programme, subject and exam series. The Pallava capital and silk city sits roughly 72 km from Chennai, so families often weigh a Chennai school or an online one, and either way a subject specialist at the study table, on screen, closes the gap. Your first lesson is a free trial.",
  primaryKeyword: "IB and IGCSE tutors in Kancheepuram",
  imageAltText: "Kancheepuram student studying IB biology notes beside a laptop showing a live online tutor",
  secondaryKeywords: [
    "IB tutor in Kancheepuram",
    "IGCSE tutor in Kancheepuram",
    "IB home tuition Kancheepuram",
    "IGCSE home tuition Kancheepuram",
    "IB private tuition Kancheepuram",
    "IB Maths tutor Kancheepuram",
    "IGCSE Maths tutor Kancheepuram",
    "IB Physics tutor Kancheepuram",
    "IB Chemistry tutor Kancheepuram",
    "IB Biology tutor Kancheepuram",
    "IB DP tutor Kancheepuram",
    "IB MYP tutor Kancheepuram",
    "IB PYP tutor Kancheepuram",
    "IGCSE online tuition Kancheepuram",
    "Cambridge IGCSE tutor Kanchipuram",
    "Edexcel IGCSE tutor Kanchipuram",
    "IB tutor Kanchipuram",
    "online home tuition Kancheepuram",
    "IB tutor Gandhi Road Kancheepuram",
    "IGCSE tutor Sevilimedu",
    "IB tutor Conjeevaram",
  ],

  heroTrustPoints: [
    "A tutor who has taught your exact course, whether MYP Sciences or IGCSE Extended Mathematics",
    "Everything runs live online, since tutors do not visit homes in Kancheepuram",
    "Nothing is charged for the trial lesson",
    "No affiliation with any school, board or coaching brand",
    "A short written recap lands in your inbox after each session",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages taught" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards taught" },
    { value: "Live video", label: "How lessons run" },
    { value: "Free trial", label: "Always the first step" },
  ],

  intro: {
    heading: "How IB and IGCSE tuition works for families in Kancheepuram",
    paragraphs: [
      "In Kancheepuram, parents who ask about private tuition for an international syllabus quickly learn that the strong tutors for it tend to sit in Chennai or overseas. IB Gram closes that distance with one-to-one video lessons. Your child studies in a room at home, a tutor with direct experience of the exact syllabus teaches on a shared screen, and a written recap follows every session so nothing is left to memory.",
      "Kancheepuram, spelled Kanchipuram on many signboards and Conjeevaram in older records, is home to about 165,000 people. It was the Pallava capital, is counted among India's seven sacred cities, and gave its silk saris India's first Geographical Indication tag in 2005. Two deemed universities, SCSVMV and CARE, and an IIIT campus mean education is a familiar industry here, while the Sriperumbudur and Oragadam factory belts nearby draw engineers and managers into the district.",
      "We could not confirm an IB World School or a Cambridge or Edexcel IGCSE school within the town. Families usually consider Chennai's schools, boarding elsewhere, or online international schools. We therefore state the format clearly: tutoring for Kancheepuram is online only, and in-person home visits are limited to Gurugram and parts of Delhi NCR.",
      "IB Gram is an independent service and has no tie to the IB, Cambridge, Pearson or any school on this page. Tutors coach understanding, technique and exam writing. They never write a student's Internal Assessment, Extended Essay, Theory of Knowledge essay or coursework. Reach us on WhatsApp at +91 7439 368 115 or write to ibgram24@gmail.com for a free trial.",
    ],
  },

  programmesIntro:
    "The four IB programmes span a child's whole school life. Here is each one in plain terms, with a note on what it usually means for a family based in Kancheepuram.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Learning organised around big ideas and student questions rather than separate textbooks. Tutors reinforce reading, arithmetic and the confidence to explain thinking aloud or in writing.",
      countryNote:
        "PYP tuition here often supports a child preparing for a Chennai school or studying with an online primary provider while living in Kancheepuram.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "A criteria-based curriculum across eight subject groups, capped by a personal project. Tutors teach students to decode criteria and plan strong responses.",
      countryNote:
        "Students coming from Tamil Nadu State Board or Matriculation classrooms usually find applied, open-ended tasks the biggest shift, and steady weekly coaching smooths it.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects plus Theory of Knowledge, the Extended Essay and CAS over two years. Support is subject-specific, built on past papers and explanations for the hardest topics.",
      countryNote:
        "Diploma students connected to Kancheepuram are commonly commuting to Chennai or studying online, and evening tutoring at home fits around a demanding school day.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Diploma courses combined with a career-related study and reflective project. We support the academic components and study skills.",
      countryNote:
        "CP is uncommon in the district, so enquiries usually turn on comparing it with the full Diploma.",
    },
  ],

  subjectsIntro:
    "We teach the IB subjects below, at Standard and Higher Level where they exist. If you need something else, ask, and we will answer honestly about tutor availability.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, complex numbers and structured reasoning for engineering and science routes." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics and modelling with technology, aimed at business, social science and life science courses." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, waves, fields and modern physics, with data analysis practice." },
    { name: "Chemistry", levels: "SL and HL", description: "Structure, bonding, energetics and organic chemistry with worked calculations." },
    { name: "Biology", levels: "SL and HL", description: "Molecular biology to ecology, and how to build a full-mark long answer." },
    { name: "Economics", levels: "SL and HL", description: "Microeconomics, macroeconomics and development, with careful diagram work." },
    { name: "Business Management", levels: "SL and HL", description: "Case-study analysis, finance tools and extended-answer structure." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, programming and networks." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Textual analysis and comparative essay technique for Tamil-speaking students studying in English." },
    { name: "English B", levels: "SL and HL", description: "Language acquisition support for the four skills." },
    { name: "Tamil B", levels: "SL and HL", description: "Language study in Tamil, where a school offers it and a tutor is available." },
    { name: "Hindi B", levels: "SL and HL", description: "Second-language study in Hindi." },
    { name: "History", levels: "SL and HL", description: "Sources, argument and structured essays." },
    { name: "Visual Arts", levels: "SL and HL", description: "Process portfolio and comparative study guidance, a natural fit for students from a textile and craft city." },
  ],
  igcseSubjectsIntro:
    "IGCSE lessons follow the Cambridge or Pearson Edexcel specification your school has chosen. We confirm the syllabus code in the first session, because paper layouts differ.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core and Extended", description: "Algebra, geometry, trigonometry and statistics with timed practice." },
    { name: "IGCSE Additional Mathematics", levels: "Extended", description: "Calculus and functions to prepare for IB Mathematics HL or A Level." },
    { name: "IGCSE Physics", levels: "Core and Extended", description: "Forces, electricity, waves and thermal physics." },
    { name: "IGCSE Chemistry", levels: "Core and Extended", description: "Periodic table, reactions, calculations and organic basics." },
    { name: "IGCSE Biology", levels: "Core and Extended", description: "Cells, organs, inheritance and ecology." },
    { name: "IGCSE Combined Science", levels: "Core and Extended", description: "A single joint science course for students on a lighter pathway." },
    { name: "IGCSE English First Language", levels: "Extended", description: "Writing to argue, describe and narrate, plus summary." },
    { name: "IGCSE English as a Second Language", levels: "Core and Extended", description: "Reading, writing, listening and speaking for students whose home language is Tamil." },
    { name: "IGCSE Hindi as a Second Language", levels: "Core and Extended", description: "Hindi reading, composition and grammar." },
    { name: "IGCSE Economics", levels: "Extended", description: "Markets, firms and government policy." },
    { name: "IGCSE Business Studies", levels: "Extended", description: "Business decisions, marketing and finance." },
    { name: "IGCSE Computer Science", levels: "Extended", description: "Programming logic and system theory." },
  ],

  tutorsIntro:
    "These tutors teach Kancheepuram students online. Profiles show subjects, levels and syllabuses, so you can see who might teach your child before the free trial.",
  regionsTitle: "Kancheepuram areas and what they mean for lesson planning",
  regionsIntro:
    "Tutors join from a screen, so your address does not affect availability. It does affect internet quality, evening noise and the school run, so these notes are practical rather than promotional.",
  regions: [
    { name: "Periya Kancheepuram (Shiva Kanchi)", note: "The larger, older half of the town around the Ekambareswarar temple. Festival processions can close streets, so plan lessons around temple calendars." },
    { name: "Chinna Kancheepuram (Vishnu Kanchi)", note: "The area around the Varadaraja Perumal temple. Households of weavers and traders here often keep early evenings free for family work, so slots run later." },
    { name: "Gandhi Road", note: "The main commercial spine with silk showrooms. Family businesses keep long hours, so a tutor who fits around them helps." },
    { name: "Pillaiyarpalayam", note: "A residential area with older houses. Broadband speeds vary, so ask a provider about fibre." },
    { name: "Sevilimedu", note: "A locality on the town's edge where new housing is spreading. Mobile data is a useful backup." },
    { name: "Thiruparuthikundram", note: "The Jain Kanchi area to the west. Quiet by evening, which suits focused study." },
    { name: "Orikkai", note: "A residential neighbourhood where many parents work in government service or nearby industry, so evening slots work best." },
    { name: "Nathapettai", note: "A well-established part of the town with a mix of schoolchildren from state board and CBSE schools." },
    { name: "Enathur", note: "The area near the SCSVMV university campus. Families connected to the campus often have an academic outlook and an interest in study abroad." },
  ],

  schoolClusters: [
    {
      city: "Nearby: Chennai, west side (Porur and Ramapuram)",
      note: "This is the side of Chennai that faces Kancheepuram on the GST and Mount-Poonamallee routes, so it is the practical starting point for families weighing a commute. Our list of local options is limited, so check every school directly.",
      schools: ["CPS Global School", "HLC International"],
    },
    {
      city: "Nearby: Chennai, OMR corridor",
      note: "The IT corridor holds Chennai's densest belt of international schools, but it is a long journey from Kancheepuram, so many families consider boarding or weekday stays.",
      schools: ["Gateway International School", "KC High International School", "Akshar Arbol International School"],
    },
    {
      city: "Nearby: Chennai, Mylapore and central areas",
      note: "Older central schools with longer international traditions, mostly reached by rail and road from Kancheepuram in a sizeable journey.",
      schools: ["MCTM Chidambaram Chettyar International School", "APL Global School"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is not affiliated with the schools listed, the International Baccalaureate, Cambridge or Pearson. The schools are named as context for where Kancheepuram families may look, not as recommendations, and curricula and admissions change, so verify with each school.",

  modesIntro:
    "Every IB Gram lesson for Kancheepuram happens over video, so the choice you have is about pattern and timing, not location.",
  modes: [
    {
      title: "Regular weekly lessons",
      description:
        "A fixed hour each week, per subject, with the same tutor who tracks your child's strengths and gaps over months.",
      bullets: [
        "Day and time set around school and family routines",
        "Live whiteboard and shared past papers",
        "A written recap after each session",
        "Works for PYP, MYP, DP, CP and IGCSE",
      ],
    },
    {
      title: "Concentrated exam preparation",
      description:
        "A dense run of lessons before a chosen IB or IGCSE series, focused on timed practice and mark-scheme habits.",
      bullets: [
        "Planned backward from the exam date",
        "Full papers marked with feedback",
        "Can sit on top of weekly lessons",
        "Set outside peak northeast monsoon days where possible",
      ],
    },
    {
      title: "Switching to an international syllabus",
      description:
        "A short course for a student moving from the Tamil Nadu State Board or CBSE into IGCSE or the IB, covering how answers are written and marked.",
      bullets: [
        "Command words and criteria explained",
        "Filling earlier gaps",
        "Guidance for school entry tests",
        "Carries on if the family moves to Chennai",
      ],
    },
  ],

  sections: [
    {
      heading: "Which university and career routes open up for a Kancheepuram student with IB or IGCSE?",
      paragraphs: [
        "The Association of Indian Universities treats the IB Diploma as equivalent to Class 12, so Diploma graduates can apply to Indian universities, subject to each institution's own subject and score conditions. Local institutions such as SCSVMV and CARE set their own admission policies, so verify directly.",
        "For central universities, CUET-UG accepts IB students, with the acceptable subject combinations varying by programme. Engineering and medicine follow their own routes: JEE Main and NEET conditions come from the National Testing Agency, and Tamil Nadu counselling has its own rules, so read current notices before choosing subjects.",
        "Study abroad is a serious option for some Kancheepuram families, with the United Kingdom, Canada, the United States, Australia, Singapore and Germany often discussed. Predicted grades, subject fit and English proficiency all matter, and tutors help plan a subject mix that supports the target course.",
        "IGCSE is a two-year platform, after which students can continue with A Level, the IB Diploma or CBSE Class 11. Strong Extended Mathematics and separate sciences keep every option open, and good tutoring focuses on the student's destination.",
      ],
    },
    {
      heading: "What is the cost of IB or IGCSE tuition for a Kancheepuram student?",
      paragraphs: [
        "IB Gram does not print a price list. After the free trial, you receive a written quote based on your child's programme, subject, level, lesson frequency and the tutor assigned. You can take it home, compare it and decide without pressure.",
        "The level and scarcity of the subject count most. A tutor for Diploma Higher Level Chemistry is harder to find than one for IGCSE English, and rates differ accordingly. Age also matters, because PYP lessons are shorter and paced differently from Diploma sessions.",
        "How often you meet is the second lever. A lesson a week keeps a subject moving, while an exam-season sprint of several lessons a week costs more in a shorter window. Many families begin at one hour and increase as papers approach.",
        "When you compare with other options, count travel to Chennai, time lost from school and the value of session notes. Ask any provider what happens if the fit is wrong. Here, a tutor can be changed on request.",
      ],
      bullets: [
        "Subject and Higher Level scarcity",
        "Programme and student age",
        "Lessons per week and exam sprints",
        "Number of subjects taken together",
      ],
    },
    {
      heading: "Tamil Nadu boards, CBSE, IGCSE and IB: how do they differ?",
      paragraphs: [
        "Most Kancheepuram schoolchildren follow the Tamil Nadu State Board or Matriculation stream, with CBSE and a few other boards as alternatives. Those routes prepare students for the Class 12 board exams, NEET, JEE and the state engineering counselling, and coaching here is designed for that goal.",
        "IGCSE and the IB ask students to explain and apply as much as remember. They use internal assessment and coursework in ways that state schools do not, and their exams reward structured written argument.",
        "The table summarises the main contrasts. It is only a guide and each school's policies rule when it comes to admission and subject choice.",
        "A child's temperament matters. Some students flourish when asked to reason from unfamiliar data, while others are happier with a familiar textbook and a clear target rank. A free trial with a matched tutor is a low-risk way to test how a child responds to international-style questions.",
      ],
      table: {
        caption: "Board choices for a student in Kancheepuram",
        columns: ["Route", "Assessment approach", "Typical next step", "Suits"],
        rows: [
          ["Tamil Nadu State Board or Matriculation", "Textbook-linked written papers", "TNEA counselling, NEET, state universities", "Families wanting a local, familiar pathway"],
          ["CBSE", "National papers with competency questions", "CUET-UG, JEE Main, NEET", "Families likely to move within India"],
          ["Cambridge or Edexcel IGCSE", "Extended papers and some coursework", "A Level, IB Diploma or CBSE Class 11", "Students wanting an international foundation in Class 9"],
          ["IB Diploma", "Six subjects plus TOK, Extended Essay and CAS", "AIU-recognised Indian entry or overseas degrees", "Students aiming for a broad curriculum or study abroad"],
        ],
      },
    },
    {
      heading: "Online tuition, Chennai classes, local tutors or working alone: what suits an IB student here?",
      paragraphs: [
        "Kancheepuram has many teachers and coaching centres for the state board, NEET and engineering entrance exams, and they are effective at that. IB and IGCSE specialists are scarce, which is why many families look at Chennai or online.",
        "Travelling to Chennai for tuition costs hours a week and is hard to sustain through a school term. Local private tutors can be first-rate teachers but may not know the IB assessment criteria or the IGCSE mark schemes in detail.",
        "Working alone with past papers helps a motivated student, but there is no one to catch a mistaken idea before it hardens. Live one-to-one tuition adds that correction, plus a tutor who knows the specification from experience.",
        "The comparison table sets out these choices side by side. Many Kancheepuram students combine them, keeping a coaching batch for entrance subjects and adding IB Gram for international ones.",
      ],
      table: {
        caption: "Ways to study for IB or IGCSE from Kancheepuram",
        columns: ["Option", "Strength", "Weakness", "Verdict for IB or IGCSE"],
        rows: [
          ["Online one-to-one (IB Gram)", "Syllabus-specific tutor, no commute, written recaps", "Needs reliable internet", "Strong fit"],
          ["Weekly trips to Chennai", "In-person contact", "Long travel, tiring and costly", "Hard to sustain"],
          ["Local private tutor", "Convenient and flexible", "May lack IB or IGCSE experience", "Depends on the tutor"],
          ["Self-study", "Low cost, self-paced", "No feedback on misconceptions", "Only for disciplined students"],
        ],
      },
    },
    {
      heading: "How do festivals and the northeast monsoon shape the study year in Kancheepuram?",
      paragraphs: [
        "Kancheepuram's calendar is full of temple festivals. Panguni Uthiram in March or April, the Vaikasi Brahmotsavam in May or June, Navaratri, Deepavali and Pongal all change household routines, and processions can block streets. A quick note to your tutor lets lessons move ahead of a busy week.",
        "The northeast monsoon runs roughly from October to December and can bring heavy rain and flooding to the Chennai region, including Kancheepuram district. Power cuts and mobile network problems are possible, so keep a charged backup device and a hotspot ready.",
        "Summers from April to June are hot, with afternoon temperatures well into the thirties. Lessons in the early evening are more comfortable, and we avoid long midday sessions.",
        "The table lists sessions that matter most, though boards publish their own dates and you should always check current timetables on the official pages.",
      ],
      table: {
        caption: "Exam sessions and Kancheepuram planning notes",
        columns: ["Session", "Timing", "Local planning note"],
        rows: [
          ["IB May session", "May, results in July", "Fits into peak summer, so schedule revision early or late in the day"],
          ["IB November session", "November, results in January", "Overlaps northeast monsoon, so keep a backup connection"],
          ["Cambridge IGCSE May-June", "May to June", "Complete mocks by March to avoid the hottest weeks"],
          ["Cambridge IGCSE October-November", "October to November", "Plan around Navaratri and Deepavali"],
          ["Pearson Edexcel IGCSE", "January, May-June and October", "Confirm which series your school enters"],
        ],
      },
    },
    {
      heading: "Who chooses IB or IGCSE in Kancheepuram, and why?",
      paragraphs: [
        "Families making this choice from Kancheepuram fall into recognisable groups. Some are engineers, managers and technicians linked to the Sriperumbudur and Oragadam industrial belts, who may have lived overseas or expect to move, and who value a syllabus that travels.",
        "Others work at SCSVMV, CARE, the IIIT campus or the district's medical and engineering colleges, so they are familiar with international education. A third group runs silk and trading businesses whose children may study abroad or manage a global customer base.",
        "Parents in the district are also cost-conscious, and they ask hard questions. Is a commute to Chennai worth it? Can a child stay at home and still get good teaching? Online tuition answers by moving the teacher to the child.",
        "For each group, the practical steps are the same: identify the board and course code, ask about the tutor's experience with that syllabus, and take the trial. IB Gram handles scheduling, materials and recaps in writing.",
      ],
    },
    {
      heading: "How should a Kancheepuram student decide between IB Maths AA and AI, and prepare for the sciences?",
      paragraphs: [
        "Analysis and Approaches leans on algebra, functions, calculus and proof, and is the natural path to engineering, physics, computer science and maths degrees. Applications and Interpretation is built around statistics and modelling, and suits economics, business, psychology and many biology courses.",
        "Tamil Nadu board students tend to be strong in procedures and speed, which helps in AA. The adjustment is explaining why a step is valid, since answers without reasoning lose marks. A trial lesson quickly shows where a child stands.",
        "IB sciences require data interpretation, error analysis and clear explanations, along with an internal investigation. Tutors coach these skills and give feedback on drafts, but never write or edit the assessed report.",
        "Students taking two Higher Level sciences benefit from weekly consistency. Short quizzes, worked solutions and timed sections work better than a last-minute rush, and extra hours are best spent on the subject that is furthest behind.",
      ],
      bullets: [
        "AA for engineering, physics and mathematics degrees",
        "AI for business, economics and life sciences",
        "Explaining reasoning is the main change from state board maths",
        "The internal investigation always stays the student's own work",
      ],
    },
    {
      heading: "Is IGCSE Core or Extended the right choice for a Kancheepuram student?",
      paragraphs: [
        "Most IGCSE subjects have two tiers. Core is aimed at a solid pass and caps the grades available, while Extended covers more content and allows the highest grades. The school normally decides the tier, though families should ask early.",
        "If a student wants IB Diploma or A Level sciences and mathematics later, Extended is the better base. Core suits a student who wants a lighter load or who may return to the Tamil Nadu board or CBSE for Class 11.",
        "Choosing between separate sciences and Combined Science matters as well. Separate sciences build a stronger platform for later science study, while Combined Science works for students moving towards commerce or humanities.",
        "A short set of mixed-difficulty tasks in the trial lesson helps a tutor judge which tier feels natural, and gives your family evidence to bring to a conversation with the school.",
      ],
    },
  ],

  process: [
    { title: "Share your child's details", description: "Send class, board, subjects and the next exam date over WhatsApp or email." },
    { title: "Meet the proposed tutor", description: "We suggest a tutor who has taught that syllabus and send a short profile." },
    { title: "Try a free lesson online", description: "A live session working on real questions from your child's course." },
    { title: "Review the written rate", description: "You receive the price and lesson plan in writing before any booking." },
    { title: "Start and keep reviewing", description: "Lessons begin, recaps follow each one, and a different tutor is available if the fit is off." },
  ],
  whyPoints: [
    { title: "Right tutor for the syllabus", description: "Your child works with someone who has taught this exact course before." },
    { title: "Honest about location", description: "Lessons are online, and we do not suggest a tutor will visit a home in Kancheepuram." },
    { title: "Free trial first", description: "See the teaching before you spend anything." },
    { title: "Recaps for parents", description: "A written summary after each lesson keeps everyone informed." },
    { title: "Simple tutor change", description: "If the match is not working, we swap without awkwardness." },
    { title: "Independent advice", description: "We are tied to no school or board, so guidance follows the student's needs." },
  ],

  faqs: [
    { question: "Are there IB and IGCSE tutors for Kancheepuram students?", answer: "Yes, online. IB Gram tutors teach Kancheepuram students by live one-to-one video, in Indian Standard Time, matched to the programme, subject and level. Tutors do not visit homes in Kancheepuram. Your child studies at home on a laptop while the tutor teaches on screen with a shared whiteboard." },
    { question: "Is IB home tuition available in Kanchipuram?", answer: "We provide online home tuition, not in-person visits. The lessons are private, one-to-one and delivered to your home by video. In-person home tuition is available only in Gurugram and parts of Delhi NCR, so for Kanchipuram families the online route is the one we offer." },
    { question: "Is there an IB or IGCSE school in Kancheepuram?", answer: "We could not confirm one in the town. Families usually consider schools in Chennai, boarding options elsewhere, or online international schools. Curricula and admissions change, so please verify with each school directly rather than relying on directories or on the school names given on this page." },
    { question: "How much does IB or IGCSE tuition cost in Kancheepuram?", answer: "We do not publish prices. The rate depends on programme, subject, level, tutor experience and the number of weekly lessons. You receive a written quote after the free trial and before any booking. Message us on WhatsApp for a quote suited to your child's needs." },
    { question: "Can we try a lesson for free?", answer: "Yes, the first lesson is a free trial. It is a full live session with a matched tutor working on real questions from your child's course. After it, you decide whether to continue. There is no obligation, and the written recap is yours to keep either way." },
    { question: "Which IGCSE boards can you tutor for?", answer: "We tutor Cambridge IGCSE and Pearson Edexcel IGCSE. The tutor confirms your syllabus code in the first lesson because paper structure and mark schemes differ. Subjects include Mathematics, Additional Mathematics, Physics, Chemistry, Biology, English, Hindi, Economics, Business Studies and Computer Science." },
    { question: "Will tutors help write the IA, Extended Essay or coursework?", answer: "No. Tutors coach and do not write. They explain criteria, discuss structure and give feedback on drafts written by the student. They never write or rewrite Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework, which protects the student's integrity and the value of the grade." },
    { question: "What lesson times are available?", answer: "Lessons run in Indian Standard Time, mostly in the evening and at weekends. Summer afternoons are hot, so we avoid them from April to June. We fix a weekly slot around school and shift it around festivals, exams or travel if you let us know in advance." },
    { question: "My child is in a Tamil Nadu State Board school. Can they still take IB or IGCSE lessons?", answer: "Yes. Students preparing to move, or following an online IGCSE course, use bridge tuition to learn how international answers are written. The tutor starts by checking earlier gaps and then builds towards the target syllabus at a pace the child can manage." },
    { question: "What do we need for online lessons?", answer: "A laptop or tablet, a stable internet connection and a quiet place. A notebook or stylus helps the tutor see working. During the northeast monsoon, power and mobile data can drop, so keep a hotspot and a charged backup device close by." },
    { question: "What if my child does not click with the tutor?", answer: "Tell us, and we arrange a new tutor without extra charge. Teaching styles differ and a good match matters, especially for teenagers. Most families settle with the first match or the second, and we handle the change so you do not have to." },
    { question: "Do you teach the IB sciences?", answer: "Yes. IB Physics, Chemistry and Biology are taught at Standard and Higher Level by matched tutors. Lessons cover content, calculations, data-based questions and exam technique. Tutors guide investigation planning, but the internal assessment must be the student's own work." },
    { question: "Do Indian universities accept the IB Diploma?", answer: "Generally yes. The Association of Indian Universities recognises the IB Diploma as equivalent to Class 12, and CUET-UG accepts IB students, with subject rules set by each university. JEE Main and NEET eligibility follows the current NTA bulletin, so read it before choosing subjects." },
    { question: "Which subjects do Kancheepuram students ask for most?", answer: "We expect Mathematics, Physics, Chemistry, Biology and English to lead, reflecting engineering and medical interests across Tamil Nadu. Economics and Business Management interest families in trade and industry. If your subject is less common, message us and we will say whether a tutor is available." },
    { question: "How can I begin with IB Gram from Kancheepuram?", answer: "Send a WhatsApp message to +91 7439 368 115 or email ibgram24@gmail.com with your child's class, board, subjects and goals. We reply with a suggested tutor and a time for a free trial. A written quote follows, and lessons begin only when you are ready." },
    { question: "Do you teach younger children in PYP or MYP?", answer: "Yes, we teach PYP and MYP as well as the Diploma and IGCSE. Lessons for younger children are shorter and more visual, and parents can sit in early on. Tutors build reading, number work and reflection habits without completing any graded project for the child." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "The main page for IB and IGCSE tutoring." },
    { label: "Tutoring across India", href: "/india/", description: "How online tuition works in cities across the country." },
    { label: "Gurugram home tuition", href: "/gurgaon/", description: "The area with in-person home visits as well as online lessons." },
    { label: "IB tutors", href: "/ib-tutors/", description: "The IB subjects and levels we cover." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel subject support." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI in detail." },
    { label: "Meet the tutors", href: "/tutors/", description: "Tutor profiles and backgrounds." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book a free trial." },
    { label: "Chennai tuition", href: "/chennai/", description: "The nearest metro, with its larger cluster of international schools." },
    { label: "Vellore tuition", href: "/vellore/", description: "A Tamil Nadu city to the west, taught in the same way." },
    { label: "Madurai tuition", href: "/madurai/", description: "Another Tamil Nadu city we serve online." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson from home in Kancheepuram",
  closingBody:
    "Send your child's class, board and subjects to us on WhatsApp at +91 7439 368 115 or at ibgram24@gmail.com. We will match a tutor, arrange a free online trial and share the rate in writing before you decide.",
};
