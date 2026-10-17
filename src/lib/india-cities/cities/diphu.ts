import type { CitySeoPage } from "../types";

/**
 * /diphu/ - IB and IGCSE tutoring page for Diphu, Karbi Anglong, Assam. Online-only delivery: tutors do not
 * visit homes in Diphu (in-person home tuition runs only in Gurugram and parts of Delhi NCR). No school in
 * Diphu could be confirmed for IB or Cambridge/Edexcel IGCSE; stripSchools is empty and the clusters point
 * honestly to Guwahati and Kolkata, reusing names already confirmed on existing pages. Kept strictly
 * non-political.
 */
export const diphu: CitySeoPage = {
  slug: "diphu",
  countryName: "Diphu",
  countryNameLong: "Diphu, Karbi Anglong, Assam",
  demonym: "Diphu",
  state: "Assam",
  stateCode: "IN-AS",
  flagCode: "in",
  countryCode: "IN",
  region: "Assam, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We set Diphu lessons around early Northeast sunsets, the heavy summer rains, Bohag Bihu and Rongker in spring, and your child's own school day",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.8438, longitude: 93.4319 },
  wikipedia: "https://en.wikipedia.org/wiki/Diphu",
  alternateNames: ["Diphu Karbi Anglong"],
  stripSchools: [],

  title: "Diphu IB & IGCSE Tutors | Live One-to-One Online Tuition",
  metaDescription:
    "Diphu families can book live online IB and IGCSE tutors, matched to the exact course and set around Karbi Anglong's hill rains, with a free trial.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Diphu",
  heroEyebrow: "LIVE IB & IGCSE LESSONS FOR DIPHU STUDENTS",
  heroSubtitle:
    "Looking for IB home tuition or IGCSE private tuition in Diphu turns up very little close by, because the hill town has no school we could confirm for either programme. Online home tuition fills the gap: a private tutor, a live lesson and a laptop at your own table, with Indian tutors teaching on the same time zone as Karbi Anglong.",
  primaryKeyword: "IB and IGCSE tutors in Diphu",
  imageAltText: "A Diphu student wearing headphones in a home study corner, talking through an IGCSE Chemistry diagram with a tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Diphu",
    "IGCSE tutor Diphu",
    "IB home tuition Diphu",
    "IGCSE home tuition Diphu",
    "IB private tuition Diphu",
    "IB Maths tutor Diphu",
    "IGCSE Maths tutor Diphu",
    "IB Physics tutor Diphu",
    "IB Chemistry tutor Diphu",
    "IB Biology tutor Diphu",
    "IB DP tutor Diphu",
    "IB MYP tutor Diphu",
    "IB PYP tutor Diphu",
    "IGCSE online tuition Diphu",
    "Cambridge IGCSE tutor Diphu",
    "IB tutor Karbi Anglong",
    "online IB tutor Assam hills",
    "IGCSE tutor Diphu Assam",
    "IB tuition near Diphu",
    "Edexcel IGCSE tutor Diphu",
  ],

  heroTrustPoints: [
    "Each lesson is live and online; a tutor does not turn up at a Diphu house, since home visits are limited to Gurugram and parts of Delhi NCR",
    "Tutors are chosen for the precise IB subject and level or the Cambridge and Edexcel code your child sits",
    "A free trial comes first, and any rate is written down before you agree to it",
    "IB Gram works independently of every school, the IB Organization, Cambridge and Pearson",
  ],
  heroStats: [
    { value: "Online", label: "One-to-one, live, from your own home" },
    { value: "DP, MYP, PYP", label: "Plus Cambridge and Edexcel IGCSE" },
    { value: "Same time zone", label: "Tutors teach in IST" },
    { value: "Trial lesson", label: "Free, before any booking" },
  ],

  intro: {
    heading: "Finding IB and IGCSE help from a hill town like Diphu",
    paragraphs: [
      "Diphu sits on a plateau in Karbi Anglong, roughly 270 km by road from Guwahati, and it has long been a centre for education in the hills: a government college, a medical college and a university campus all sit in or near town. What it does not have, as far as we could confirm, is a school teaching the IB or Cambridge or Edexcel IGCSE. Families here are therefore rarely choosing between local tutors; they are choosing how to reach a specialist at all.",
      "Who asks us? Often a household with a child at a boarding or international school in Guwahati, Kolkata or further away, who comes home for Bihu and the long break and wants to stay on track. Sometimes parents who work for a bank, a railway or a government service posting and know the family may move, so an internationally portable syllabus appeals. And sometimes a student at a CBSE or SEBA school who wants stronger preparation for study abroad.",
      "All teaching is live and online, one student with one tutor. Tutors do not travel to Diphu, because in-person home lessons are run only in Gurugram and parts of Delhi NCR. A weekly video class, a shared digital board and a marked past paper can do most of the job of a visiting tutor, and the lesson is arranged around your child's timetable, not a tutor's commute.",
      "This page describes how the school picture looks around Diphu, how an IB or IGCSE course differs from the boards taught locally, what drives tuition costs, when exams fall against Assam's calendar, and where graduates go next. IB Gram is an independent service and is not linked to any school or exam body mentioned here.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, and Cambridge and Pearson Edexcel IGCSE",
      "Lessons take place on a laptop, so no journey down the hill to Guwahati",
      "Help for boarders on holiday and for families weighing a change of syllabus",
      "A written summary after every lesson, and a new tutor if the first is wrong",
      "We coach: no tutor writes an IA, Extended Essay, TOK essay or coursework for a student",
    ],
  },

  programmesIntro:
    "No school inside Diphu that we could confirm runs an IB stage, so these programmes reach local families through a child who studies elsewhere or a move being planned. The tutor follows the student's actual course.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Young children learn through inquiry units tied to big ideas, then present an Exhibition of their own. Because nothing is marked externally, tutoring leans on reading, number work and the habit of explaining thinking, in short, friendly sessions.",
      countryNote:
        "A parent in Diphu asking about PYP is usually preparing for a transfer to a city school, so early lessons focus on English reading and number fluency to smooth that step.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are assessed against criteria, units are built around global contexts, and a Personal Project comes near the end. The shift from marks to criteria trips up students used to single-paper boards, so practice with task-specific clarifications is a core part of a tutor's work.",
      countryNote:
        "MYP help in Diphu tends to go to a student who has just left a SEBA or CBSE school for an international one, where written reasoning and project work are new.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects across three at Higher and three at Standard level, plus Theory of Knowledge, the Extended Essay and a service component. Internal assessments and final papers both matter, and time management across them is half the battle.",
      countryNote:
        "DP tutoring connected with Diphu usually supports a boarder away at school, worked hard in the Bihu and winter breaks, or a student retaking a subject after a May or November session.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme combines a few Diploma courses with a career-related qualification and a reflective project. Very few Indian schools offer it, but the Diploma-level courses inside it are taught in the normal way.",
      countryNote:
        "We seldom hear about CP from Diphu; if a family does ask, tutoring stays on the Diploma courses chosen and leaves the career element to the school.",
    },
  ],

  subjectsIntro:
    "Start by telling us the subjects, the level and whether Maths is AA or AI. A boarder in Guwahati revising Biology HL needs a different plan from a Diphu child with a first IGCSE mock, and tutors are matched to each.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof, with method marks laid out clearly and a steady habit of checking each step by hand." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data handling, modelling and calculator fluency, with results interpreted in words the examiner expects." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through quantum ideas, with data-booklet fluency and an investigation written to the criteria." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Amount of substance, bonding, kinetics and organic chemistry, with calculations practised under time." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology, including questions built from graphs and experimental data." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy, real-world examples and structured evaluation for the longer essays." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading and applied answers, so that theory is tied to the facts the paper provides." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen text analysis, comparative writing and oral practice, with essay structure tightened." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory together with real coding, since the internal assessment must be a working, documented program." },
    { name: "IB Psychology", levels: "HL / SL", description: "Key studies recalled accurately and extended answers that argue a position using evidence." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems models applied to forests, water and climate, with hill and plateau landscapes as natural examples." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies with real data, and fieldwork methods explained so they survive a close look." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation-based coaching on the exhibition and prescribed titles, never writing it for the student." },
    { name: "Hindi B", levels: "HL / SL", description: "Text types, register and spoken confidence, relevant to students who use Assamese, Karbi or Bengali at home." },
    { name: "Assamese (where a school offers it)", levels: "Ab initio / B", description: "Support depends on the school's own language offer; we check what is available before matching." },
  ],

  igcseSubjectsIntro:
    "SEBA and CBSE schools in Assam do not use Cambridge or Edexcel codes, so a Diphu student meets IGCSE through a school elsewhere or a family choice. Lessons follow the code and tier the student is entered for.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with non-calculator skills built early so method marks hold." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and vectors, valuable groundwork before IB Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, circuits, waves and thermal physics, with practical-skills questions taught as a separate paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactions, organic topics and analysis, worked through past-paper sets." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, transport, ecology and body systems, with extended answers trained against mark schemes." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Summary, directed writing and composition, for students whose home language is Assamese, Karbi or Bengali." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python practice beside written theory, reinforcing each algorithm by running it." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, trade and policy, starting with diagrams and moving on to evaluation." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Scenario-based answers that use the firm described, not a generic example." },
  ],

  regionsTitle: "Diphu and Karbi Anglong areas we support with online IB and IGCSE tuition",
  regionsIntro:
    "Because lessons are online, a locality helps us understand context, such as school hours, evening routines and connectivity, more than travel. These are the parts of Diphu and its surroundings where our families live.",
  regions: [
    { name: "Diphu town centre", note: "The main commercial and school area, where SEBA, CBSE and private schools draw students from across the district." },
    { name: "Diphu railway station area", note: "Families here use the rail link to Guwahati and Dibrugarh, which matters for boarders travelling at term ends." },
    { name: "Diphu Government College area", note: "An academic neighbourhood where college staff and students live, and where families are comfortable with study-focused routines." },
    { name: "Medical college and university side", note: "Households linked to the medical college and the Assam University campus often have a strong interest in NEET and overseas study." },
    { name: "Dokmoka", note: "A nearby town on the highway, where families commute to Diphu for higher classes or look online for specialist teaching." },
    { name: "Manja", note: "A smaller settlement in the district where school choice is limited and internet reliability varies by season." },
    { name: "Bokajan", note: "A town towards the Nagaland border side of the district, with its own school mix and industrial households." },
    { name: "Howraghat", note: "A semi-rural area where a fixed indoor study slot and a stable connection matter most." },
    { name: "Lumbajong", note: "A village area close to Diphu where families travel into town for schooling and often prefer afternoon lessons." },
  ],

  schoolDisclaimer:
    "The schools named on this page are included only to explain the curriculum picture for Diphu families and the nearest places where international programmes exist. IB Gram has no partnership with, or endorsement from, any of them, nor from the IB Organization, Cambridge International or Pearson Edexcel. Please confirm a school's current status and fees directly with it.",
  schoolClusters: [
    {
      city: "Diphu town",
      note: "We could not confirm any school in Diphu offering the IB or Cambridge or Edexcel IGCSE. Schools here follow SEBA and AHSEC or CBSE, with a few ICSE options, so IB and IGCSE lessons run online in parallel with the school.",
      schools: [],
    },
    {
      city: "Nearby: Guwahati",
      note: "The closest large city for international options, reached by a long road or rail journey, which is why it comes up mostly for boarding or relocation.",
      schools: ["International School Guwahati"],
    },
    {
      city: "Nearby: Kolkata",
      note: "A long-standing destination for Northeast families wanting a full IB or IGCSE campus, reachable by train or a short flight from Guwahati.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
  ],

  modesIntro:
    "Since every lesson is on screen, the useful choice is how you want the lessons shaped: a steady weekly class, a class with a written trail, or a burst of work before an exam.",
  modes: [
    {
      title: "One steady weekly class",
      description:
        "A single hour each week at the same time with the same tutor, using a shared board and a past-paper routine. Many Diphu households start here.",
      bullets: [
        "One tutor stays with the student all term",
        "Works for IB DP and MYP and for IGCSE",
        "Papers are marked together, in the lesson",
        "The slot can shift around a boarder's school calendar",
      ],
    },
    {
      title: "Weekly class with a written record",
      description:
        "The weekly class carries on, but each one ends with a brief note, and a longer review happens every few weeks with parents.",
      bullets: [
        "A short note after every lesson",
        "Regular reviews to adjust the plan",
        "Suits parents who work long or irregular hours",
        "An extra slot can be added before mocks",
      ],
    },
    {
      title: "Break-time and pre-exam push",
      description:
        "During the winter holiday, around Bihu or in the weeks before a session, lessons become more frequent and centre on timed papers.",
      bullets: [
        "Timed papers with mark-scheme marking",
        "Fast feedback, usually within a few days",
        "Built around rail travel home for boarders",
        "Best booked two weeks before a break starts",
      ],
    },
  ],

  sections: [
    {
      heading: "Schools, boards and families around Diphu",
      paragraphs: [
        "Diphu's schools are a mix of government institutions under SEBA and AHSEC, private CBSE schools and a few ICSE-affiliated ones, serving a varied population that includes Karbi, Bengali, Assamese, Hindi-speaking and other communities. We found no school in town confirmed for the IB or Cambridge or Edexcel IGCSE.",
        "That does not mean there is no demand. Families connected to the medical college, the university campus, the railways, banks and the district's business community often have wider horizons, and some have children in boarding schools in Guwahati, Shillong, Kolkata or farther. These students come home for Bihu and winter and need focused help.",
        "Others are weighing a move. They might be thinking about moving to an international school in Guwahati in Class 9, or about applying abroad after Class 12, and want to know whether the IB or IGCSE suits their child. A tutor can give a realistic view of the workload, and an honest view of how hard the school move is from a hill town.",
        "An online tutor removes the geographic problem. You do not need a specialist to live nearby when one can teach your child live every week, with a shared screen and marked papers. Examinations and IB moderation are the same for a student in Diphu as in any metropolitan city.",
      ],
      table: {
        caption: "The curriculum picture in and around Diphu",
        columns: ["Board or programme", "Where it appears", "What it means for tutoring"],
        rows: [
          ["SEBA and AHSEC (Assam)", "Government and many private schools", "Tutoring adds English fluency and exam skills"],
          ["CBSE", "Private schools in Diphu and larger towns", "NCERT-paced support; IB or IGCSE is additional"],
          ["ICSE and ISC", "A few private schools", "Detailed syllabus; IGCSE is a nearby style"],
          ["IB or Cambridge / Edexcel IGCSE", "No confirmed school in Diphu; options in Guwahati and Kolkata", "Online lessons alongside a school elsewhere, or self-directed study"],
        ],
      },
      bullets: [
        "No Diphu school confirmed for IB or IGCSE",
        "Students are usually boarding away or planning a move",
        "Online access replaces the missing local specialists",
        "Exam standards are identical to those in larger cities",
      ],
    },
    {
      heading: "How does IB or IGCSE compare with SEBA and CBSE?",
      paragraphs: [
        "SEBA, AHSEC and CBSE examine how well a student has learnt a fixed syllabus in a single final paper. The IB and IGCSE examine whether a student can use what they learnt on new problems and explain their thinking. Content often overlaps, but the skill being tested is different.",
        "Coursework and practicals carry more weight in the international courses. An IB Physics investigation or a Maths exploration runs over weeks and is marked against published criteria; some IGCSE subjects test practical skills in a separate paper. Students used to a single exam find this slower and more personal, and often more interesting.",
        "Language is a real hurdle for a student whose home language is Karbi, Assamese or Bengali. The student may understand the concept and still lose marks because a command term such as compare or assess was not read carefully. Much of early tutoring trains the student to decode the question and write a clear English answer.",
        "No board is better in every respect. Families who want NEET or JEE often stay on CBSE or the state board and use IGCSE subjects as enrichment. Families heading abroad may move to the Diploma. We help a parent weigh the trade-offs without pushing a particular answer.",
      ],
      table: {
        caption: "SEBA and CBSE set beside IB and IGCSE",
        columns: ["Feature", "SEBA / CBSE", "IB / IGCSE"],
        rows: [
          ["Assessment", "Board paper at the end of the course", "Papers plus internal tasks or practical components"],
          ["Question style", "Textbook-linked, predictable", "Application, data and explanation"],
          ["Medium", "Assamese, English or Hindi", "English"],
          ["Indian entrance exams", "NEET, JEE, CUET-UG directly", "AIU equivalence, CUET-UG, NEET with checks"],
          ["Abroad", "Accepted, sometimes with bridging", "Widely understood by admissions offices"],
        ],
      },
    },
    {
      heading: "What does online IB and IGCSE tuition cost in Diphu?",
      paragraphs: [
        "The price depends on subject, level, tutor experience with that exact syllabus and the number of lessons each week, and IB Gram does not publish a rate card. After the free trial we send a written quote, so a family can decide on a real figure.",
        "Complexity matters. An IB Chemistry HL tutor with years of examining-style marking costs differently from someone helping a Class 7 child through MYP Science. A single hour per week differs from two before mocks. We explain the quote in plain terms, and change it if the plan changes.",
        "Because nothing involves travel, a Diphu family saves a great deal that never appears on an invoice: the hours and fuel for a trip to Guwahati, the cost of a city stay during holidays, the time a hill road can add in heavy rain. Online lessons spend your money on teaching alone.",
        "We avoid practices that raise cost without helping: a long lock-in, a block of hours that cannot be used, a tutor chosen by reputation rather than fit. You pay for lessons taken and can stop or swap tutors at any point.",
      ],
      bullets: [
        "Subject and level, such as Maths HL or MYP Science",
        "Tutor experience with the specific exam series",
        "Length and frequency of lessons",
        "Extra marked papers before an exam",
        "Rates are written and agreed before booking",
      ],
    },
    {
      heading: "Online tuition, coaching centres, local tutors or self-study for Diphu students?",
      paragraphs: [
        "Four options exist for a student in Diphu. Online one-to-one tuition is the nearest thing to private home tuition available for IB and IGCSE here, with a tutor who teaches the course regularly, a fixed slot and a shared board.",
        "Coaching centres in Guwahati and other large cities largely teach in batches and focus on NEET, JEE or board exams. They are not geared to an IB internal assessment or an IGCSE practical paper, and a student cannot attend regularly from Diphu.",
        "A local private tutor is useful for foundations, especially Maths and English. Finding one who has taught an IB or Cambridge mark scheme in a hill town is hard, so many families combine a local tutor for basics with an online specialist for the syllabus.",
        "Self-study with past papers is possible for a disciplined student, but without feedback a wrong method can be repeated for months. A tutor who marks and diagnoses can keep independent work on track without a full weekly programme.",
      ],
      table: {
        caption: "Support routes for an IB or IGCSE student in Diphu",
        columns: ["Route", "Benefit", "Drawback", "Best for"],
        rows: [
          ["Online one-to-one", "Specialist, personal, scheduled", "Needs a laptop and connection", "DP, MYP and IGCSE depth"],
          ["City coaching centre", "Batch energy, structured plan", "Distance, exam-board focus", "Students living in a large city"],
          ["Local private tutor", "Close, familiar with the school", "Rarely knows international mark schemes", "Foundation Maths and English"],
          ["Self-study", "Cheap and flexible", "No feedback on method errors", "Self-driven students with an occasional check"],
        ],
      },
    },
    {
      heading: "The exam calendar and how Diphu's year affects study",
      paragraphs: [
        "The IB Diploma has May and November sessions, Cambridge IGCSE has May and June and October and November series, and Edexcel IGCSE runs in May and June and in November. Schools set mock dates, so the first step is always to ask for the real timetable.",
        "Northeast India runs on Indian Standard Time, so the sun rises early and sets early. In midwinter it can be dark by half past four, and evening lessons feel late for younger students. We often move lessons earlier in the day during December and January, particularly for primary-age children.",
        "The summer rains are heavy in Karbi Anglong and can cause power cuts and slow internet. A fixed plan B, such as a shift to an afternoon slot or a phone hotspot, prevents lost lessons. Hill roads may be disrupted too, which affects boarders returning from Guwahati.",
        "Festivals punctuate the calendar. Bohag Bihu in April, Rongker in spring, Durga Puja in autumn, Christmas and Eid each bring family gatherings and breaks. We mark those dates at the start and aim intensive lessons at quiet weeks, not at festival weekends.",
      ],
      table: {
        caption: "A year of study for a Diphu student",
        columns: ["Period", "What is happening", "Tutoring focus"],
        rows: [
          ["March to May", "IB May session, IGCSE May and June, Bohag Bihu and Rongker", "Timed papers and lighter weeks around festivals"],
          ["June to September", "Monsoon rains, new session begins", "Foundations, IA topic planning, backup slots for outages"],
          ["October to November", "Durga Puja, IB November session, IGCSE autumn series", "Holiday intensives and last mocks"],
          ["December to February", "Early sunsets, Christmas, mocks", "Earlier lessons, marked past papers"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Diphu study next?",
      paragraphs: [
        "IB Diploma and IGCSE-plus-A-Level students are accepted by universities in the United Kingdom, Canada, Australia, Singapore, the United States and Europe. A strong Diploma carries weight in these systems and shows a student can handle independent work, which is useful for any course.",
        "Within India, the Association of Indian Universities provides equivalence certificates for IB and Cambridge qualifications, which many universities require. CUET-UG is used by central and several other universities, and a student should check each course's subject rules. Some state-level admissions have conditions for students from overseas boards.",
        "Medicine deserves early thought. NEET-UG requires specific science subjects, and a Diphu family hoping for the medical college or another Indian college should check eligibility for IB or IGCSE students before choosing Diploma subjects. JEE Main has its own rules, and many IB students explore universities abroad or private institutions.",
        "Plan conversations around Class 9 or 10, since subject choices made at sixteen shape options at eighteen. IB Gram does not provide admissions advice or promise outcomes; tutors who have seen many pathways can help a student ask better questions of the school and universities.",
      ],
    },
    {
      heading: "IB Maths and sciences in detail: what the syllabus demands",
      paragraphs: [
        "IB Mathematics comes as Analysis and Approaches or Applications and Interpretation, at Higher or Standard level. AA suits students who like algebra and calculus and may study engineering or pure science. AI suits those who prefer data, modelling and software, for example for economics or social science.",
        "The Maths exploration is an internal assessment of the student's own choosing. A tutor can help pick a question that is neither too easy nor too large, and can explain what the criteria reward, but the writing, calculation and reflection must be the student's own.",
        "Physics, Chemistry and Biology share a format: written papers, a practical investigation and a data booklet. Unit errors, long calculations, organic pathways and data-response questions are the usual places marks go missing. Timed practice exposes these quickly, and a tutor marks in the way an examiner would.",
        "A student from SEBA or CBSE may find the content familiar but the framing new. A question on rates of reaction might come with a graph, a table and an experiment description, and the answer must combine all three. We start with guided questions and move towards unseen ones.",
      ],
    },
    {
      heading: "IGCSE subject choice and Core versus Extended",
      paragraphs: [
        "Most IGCSE sciences and Mathematics are offered in Core and Extended tiers. Core limits the top grade, while Extended opens the whole range. A student aiming at IB Higher Level or A Level Maths should usually sit Extended and build pace for it.",
        "Choosing subjects at Grade 9 shapes later options. A student aiming at engineering will want Mathematics, Physics and Chemistry at Extended, maybe with Additional Mathematics. One aiming at business may prefer Economics and Business Studies with a strong English result.",
        "English needs a separate decision for students whose first language is not English. Whether to take First Language or English as a Second Language affects confidence across every subject, and a tutor can assess writing and suggest the better fit.",
        "Cambridge and Edexcel have different structures and mark schemes, so a tutor who knows one is not automatically ready for the other. We check the exact code a student will sit, and match accordingly.",
      ],
    },
    {
      heading: "How does IB Gram match a tutor for a family in Diphu?",
      paragraphs: [
        "Send us the programme or board, subject, level, exam session and the student's current standard. We suggest tutors who have taught that course, with a reason for each, and then arrange a free trial lesson. No payment or promise is needed before a trial.",
        "Tutors teach from within India on Indian Standard Time. We review qualifications, recent teaching of the exact syllabus and clarity with teenagers. We look at how a tutor asks questions, because good questions reveal more than a polished explanation.",
        "You receive a short note after each lesson, and every few weeks the plan is reviewed. If the fit is poor, we find another tutor, and nobody asks the student to adapt to a bad match.",
        "The limits are clear. Tutors explain, set practice and mark, but they do not write IAs, Extended Essays, TOK essays or coursework, and they do not visit homes in Diphu, because in-person lessons run only in Gurugram and parts of Delhi NCR.",
      ],
      bullets: [
        "A free trial lesson first",
        "A short note after every class",
        "A new tutor whenever the fit is wrong",
        "Rates written down before you book",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects as well as Cambridge and Edexcel IGCSE to students connecting from Diphu. Matching starts from the exact syllabus and level, and a free trial lesson comes before any decision.",

  process: [
    { title: "Share the details", description: "Give us the programme or board, subject, level, exam session and the times that suit your family." },
    { title: "Review suggested tutors", description: "You receive a short list of tutors who have taught that course, each with a reason for the match." },
    { title: "Take a trial class", description: "An online lesson on a real topic, free of charge and with no obligation." },
    { title: "Confirm the plan", description: "The tutor sets out the first weeks and the reporting routine, and you approve or change it." },
    { title: "Keep a weekly pattern", description: "A fixed online slot, periodic reviews and a swap of tutor whenever you feel it is needed." },
  ],

  whyPoints: [
    { title: "Subject knowledge over location", description: "With no local IB specialist, we search across India for a tutor who knows your child's exact course." },
    { title: "Private, yet from home", description: "A one-to-one lesson at your own table, without the long trip down from the hills." },
    { title: "See it before you pay", description: "A full free lesson lets your child and you judge the tutor first." },
    { title: "Your child writes the work", description: "Coaching and marking, but never drafting of internal assessments or essays." },
    { title: "Progress you can read", description: "A written note after each class and longer reviews every few weeks." },
    { title: "Free to change", description: "No lock-in and no fixed bundle; ask for another tutor any time." },
  ],

  faqs: [
    { question: "How can I find an IB tutor in Diphu?", answer: "Send us the programme, subject, level and exam session, and we will propose tutors who teach that exact course online. Because no Diphu school runs the IB that we could confirm, the match is based on syllabus knowledge, not location. A free trial lesson comes first, and you can change tutors afterwards." },
    { question: "Are IGCSE tutors available in Diphu?", answer: "Yes, for Cambridge and Pearson Edexcel IGCSE, taught live online. We match by subject code and tier, for example 0580 Core Mathematics, and use recent past papers with mark schemes. The tutor also takes account of the student's own school timetable, wherever that school is." },
    { question: "Do tutors visit homes in Diphu?", answer: "No. Tutors do not visit homes in Diphu, because in-person home lessons run only in Gurugram and parts of Delhi NCR. In Diphu the lessons are one-to-one and live online, so your child studies at home with a private tutor on a laptop." },
    { question: "What is the cost of IB or IGCSE tuition in Diphu?", answer: "It depends on subject, level, the tutor's experience with that syllabus and the number of weekly lessons. We give a written quote before booking and publish no fixed list. Online lessons avoid travel costs to Guwahati or elsewhere, which often makes a real difference to a Diphu family." },
    { question: "Is there an IB or IGCSE school in Diphu?", answer: "We could not confirm one. Schools in the town follow SEBA and AHSEC, CBSE or ICSE, and the nearest confirmed international options are in Guwahati and Kolkata. Always check a school's authorisation and fees with the school itself." },
    { question: "My child boards in Guwahati or Kolkata. Can a tutor help at Bihu and winter break?", answer: "Yes, and these breaks are the most common time we are asked. A tutor plans a block of lessons using the student's own school materials and recent papers, then moves to a lighter weekly slot once term restarts. Timing follows the train or road journey home." },
    { question: "Can a tutor help with my child's IA?", answer: "A tutor can guide but not write. They help the student choose a workable question, read the criteria and respond to drafts in general terms. The content, data and conclusions must remain the student's own, and we decline requests that go beyond guidance." },
    { question: "Do you teach MYP and PYP as well as the Diploma?", answer: "Yes, we teach all IB stages. MYP help is often on criteria-based writing and Maths, and PYP help on reading and number sense. Younger pupils get shorter lessons and a simple note for parents afterwards." },
    { question: "Is online tutoring as effective as a tutor in the room?", answer: "For specialist subjects it can be more effective, because the tutor is chosen for the syllabus and not for living nearby. A shared board, live marking and written notes cover much of what a classroom visit offers. You need a laptop, steady internet and a quiet place to study." },
    { question: "How do you check tutors?", answer: "We review qualifications, recent teaching of the exact course and ability to explain clearly. The trial lesson adds a live test in front of the family. If a tutor is not right for your child, we replace them and pass on the plan and notes so nothing is lost." },
    { question: "When should my child start IB or IGCSE tutoring?", answer: "Ideally at the start of the course, Class 11 for the Diploma or Grade 9 for IGCSE. Early habits are easier to build than to fix. Many students start before a mock or retake, and a short focused block can still help." },
    { question: "Can my child switch from SEBA or CBSE to IB or IGCSE?", answer: "Yes, and a tutor can ease the move by building written English and explaining command terms. The harder step is finding a school with the programme. We can discuss timing, but admission rules and availability are for the school to confirm." },
    { question: "What if we do not like the tutor?", answer: "Tell us and we will arrange someone else at no penalty. Families hear from us every few weeks on progress, and changing tutor is just another trial lesson. No student has to adapt to a tutor who is not working." },
    { question: "What about Karbi, Assamese or Bengali?", answer: "These are not examined in the standard IGCSE choices from Cambridge or Edexcel, and IB language offers depend on the school. We concentrate on English, Hindi and the core subjects, and advise on options if a family asks." },
    { question: "Will weather or power cuts disrupt lessons?", answer: "Sometimes, during heavy rain. We agree a backup plan at the start, such as a move to a different slot or a mobile hotspot, and missed lessons are rescheduled. A stable router and a charged laptop are the practical safeguards." },
    { question: "How do I begin with IB Gram from Diphu?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the subject, level and any timing constraints. We reply with tutor suggestions and trial slots, so the first lesson can be arranged within a few days at no charge." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Start here for all IB and IGCSE tutoring." },
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "City-by-city view of our online service." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person home lessons are offered." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB teaching across programmes." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects explained." },
    { label: "IB PYP", href: "/programmes/pyp/", description: "Primary Years support." },
    { label: "IB MYP", href: "/programmes/myp/", description: "Middle Years support." },
    { label: "IB Diploma", href: "/programmes/dp/", description: "Diploma structure and subjects." },
    { label: "IB CP", href: "/programmes/cp/", description: "Career-related stage overview." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI courses at HL and SL." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject." },
    { label: "Admissions test preparation", href: "/admissions/test-prep/", description: "Entrance test coaching." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book a trial." },
    { label: "Blog", href: "/blog/", description: "Study guides and exam advice." },
    { label: "IB and IGCSE tutoring in Guwahati", href: "/guwahati/", description: "The Northeast's largest city, with a confirmed school." },
    { label: "IB and IGCSE tutoring in Dibrugarh", href: "/dibrugarh/", description: "Another Assam city served online." },
    { label: "IB and IGCSE tutoring in Dimapur", href: "/dimapur/", description: "Nearby in Nagaland, also served online." },
    { label: "IB and IGCSE tutoring in Jorhat", href: "/jorhat/", description: "Upper Assam families, online." },
  ],

  closingHeading: "Start with a free trial lesson for your Diphu student",
  closingBody:
    "Share the programme, subject, level and the hours that work for your household, noting that Northeast evenings get dark early. You will receive tutor suggestions with reasons, trial times, and a first lesson that costs nothing. Email support@ibgram.com or message +91 7439 368 115 on WhatsApp to begin.",
};
