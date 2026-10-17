import type { CitySeoPage } from "../types";

/**
 * Seoni (Madhya Pradesh). No IB or Cambridge/Edexcel school could be confirmed in Seoni town or
 * district, so stripSchools stays empty. School clusters point honestly at Nagpur and Bhopal, whose
 * school names are already verified on those city pages. Online only; no home visits.
 */
export const seoni: CitySeoPage = {
  slug: "seoni",
  countryName: "Seoni",
  countryNameLong: "Seoni, Madhya Pradesh",
  demonym: "Seoni",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings after the school day and Sunday mornings, kept clear of Diwali week, wedding-season power cuts and the July to September rains",
  lastUpdated: "2026-09-21",

  title: "IB & IGCSE Tutors in Seoni | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Seoni students: DP, MYP, PYP and IGCSE taught one to one on video from home, scheduled around Seoni school hours. Free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Seoni",
  heroEyebrow: "IB & IGCSE TUTORING FOR SEONI FAMILIES, ONLINE",
  heroSubtitle:
    "Searching for private tuition at home in Seoni for an IB or IGCSE student? Lessons here are live, one to one, on a laptop from your own living room, taught by a specialist in that exact subject. Nobody travels to your house; the distance between Seoni and the nearest IB classroom is what online tuition removes, and the first class is a free trial.",
  primaryKeyword: "IB and IGCSE tutors in Seoni",
  imageAltText: "A Seoni student working through an IB Chemistry problem set with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Seoni",
    "IGCSE tutor Seoni",
    "IB home tuition Seoni",
    "IGCSE home tuition Seoni",
    "IB private tuition Seoni",
    "IB Maths tutor Seoni",
    "IGCSE Maths tutor Seoni",
    "IB Physics tutor Seoni",
    "IB Chemistry tutor Seoni",
    "IB Biology tutor Seoni",
    "IB DP tutor Seoni",
    "IB MYP tutor Seoni",
    "IB PYP tutor Seoni",
    "IGCSE online tuition Seoni",
    "online IB tutor Seoni Madhya Pradesh",
    "IB tutor Seoni Madhya Pradesh",
    "IGCSE tutor Seoni Madhya Pradesh",
    "IB tutor Civil Lines Seoni",
    "IB tutor Barghat Road Seoni",
    "IB tutor Seoni Nagpur highway",
    "Cambridge IGCSE tutor Seoni",
    "IB tutor Seoni Mahakoshal",
  ],

  heroTrustPoints: [
    "Tutors matched to your child's exact IB course and level or Cambridge IGCSE syllabus code",
    "Live one-to-one lessons taken at home in Seoni, no tutor visit and no travel to another city",
    "Free trial lesson and a written note after every session",
    "Independent of any school, board or examining body",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
    { value: "IST", label: "Indian-hours scheduling" },
    { value: "Free trial", label: "Before you commit" },
  ],

  intro: {
    heading: "How IB and IGCSE tuition works for a family in Seoni",
    paragraphs: [
      "For a Seoni family, IB and IGCSE private tuition means a live video lesson, one student and one tutor, taught from a specialist's desk somewhere in India to your child's laptop in the living room. Think of it as online home tuition: the tutoring is private and personal, the student stays in their own house, and no tutor takes a bus from Nagpur or Jabalpur to reach you. What changes is who is available. Instead of whoever happens to live in Seoni, you choose from tutors who have taught that precise subject, such as IB Chemistry HL or IGCSE Mathematics Extended, to students in the same syllabus.",
      "Seoni is a district headquarters on the Nagpur to Jabalpur highway, better known to outsiders for the Pench forests and the Mowgli stories than for schools. Education here runs mostly through the Madhya Pradesh Board and CBSE. We could not confirm an IB or Cambridge school inside the town, so this page does not pretend to list one. Families who meet these boards tend to be those planning a move to Nagpur, Bhopal or abroad, or those whose child is enrolled in a school elsewhere and boards or studies by distance.",
      "To be plain about format: IB Gram tutors do not visit homes in Seoni. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. Seoni students learn online, and because the lesson is one to one rather than a recorded course, the tutor watches the working, corrects it on the shared screen and asks the next question while the mistake is fresh.",
      "IB Gram is an independent tutoring service. We are not affiliated with or endorsed by the International Baccalaureate, Cambridge University Press and Assessment, Pearson Edexcel or any school mentioned on this page. Tutors coach and explain; they never write an Internal Assessment, Extended Essay, TOK essay or any piece of coursework for a student.",
    ],
    bullets: [
      "IB PYP, MYP and Diploma tutors across the main subject groups",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended tiers",
      "Online only in Seoni; home visits exist just in Gurugram and parts of Delhi NCR",
      "Free trial lesson, then rates confirmed in writing before you book",
    ],
  },

  programmesIntro:
    "Very few Seoni students meet the IB or IGCSE through a local classroom, so the reason a family asks about each stage differs from a big-city school. Some children are preparing for a move, some are in a correspondence or boarding arrangement, and a few are simply ahead of the local syllabus. What each stage demands of a tutor is set out below.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Learning in the PYP is built around units of inquiry and a final Exhibition rather than a written exam. A tutor here builds reading stamina, number confidence and the habit of asking a real question about a topic.",
      countryNote:
        "A Seoni child who has studied in Hindi medium and is about to join an English-medium PYP class elsewhere usually needs vocabulary and spoken confidence before anything else.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Every MYP subject is marked against four criteria, and the Personal Project closes the programme in MYP 5. Students used to a single right answer must learn to justify, compare and reflect in writing.",
      countryNote:
        "For a Seoni student coming from an MP Board school, criterion B and C tasks in sciences and Individuals and Societies are the usual first obstacle, more than the content itself.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects across three Higher and three Standard Level courses, with TOK, the Extended Essay and CAS alongside. Internal Assessments count for a fifth to a third of most subject grades, and exams are sat in May or November.",
      countryNote:
        "Seoni DP requests come mostly from students aiming at universities abroad, who want Maths AA or AI, Physics and Chemistry handled at the right level from the first term of Class 11.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more DP courses are combined with a career-related study, a reflective project and personal and professional skills. It is uncommon in central India, so tutoring attaches to the DP courses inside it.",
      countryNote:
        "A Seoni student on a CP pathway through an online or distant school gets help with the academic DP subjects and with shaping the reflective project around a problem the student really knows.",
    },
  ],

  subjectsIntro:
    "Tutors for a Seoni student are chosen by course, not by the loose label 'IB teacher'. Analysis and Approaches HL calls for proof and calculus fluency that Applications and Interpretation SL never asks for, and Chemistry HL has organic and kinetics depth Chemistry SL skips. We shortlist on that fit first, then on whether an evening slot works in a town where the school day and power supply set the rhythm.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, complex numbers, proof and the open-ended Paper 3 problems, plus choosing an exploration topic a student can really carry." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling, probability distributions and graphing-calculator technique, with a data-led exploration that needs a dataset chosen early." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics to fields, thermal physics and quantum topics, with the practical and data-analysis skills the new syllabus leans on." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics, organic pathways and equilibrium, with the data booklet used as the exam expects." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells and genetics through to ecology, with data-based questions and the structure of a long answer." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy, real-world examples and the three commentaries, with HL quantitative work on top." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study application, financial ratios and the extended written piece for Paper 2." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis, the comparative essay and the individual oral, with a focus on clear argument in English as a second language." },
    { name: "IB Hindi A and B", levels: "HL / SL", description: "Literary analysis for Hindi A and language-acquisition technique for Hindi B, a natural strength for Seoni students." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, object-oriented design and the documented solution required for the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches to behaviour, key studies and the short-response and essay formats that separate the top bands." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Systems thinking applied to forests, water and land use, a good fit for students from a district with a large tiger reserve." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study depth, fieldwork method and evaluative paragraphs that earn the higher mark bands." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis, essay planning under time pressure and the historical investigation." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Testing arguments against counterclaims and shaping the exhibition so it stays about knowledge, not about objects." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Narrowing a research question, planning reflection sessions and referencing properly. Coaching only; the essay remains the student's own." },
    { name: "IB MYP Sciences & Maths", levels: "MYP 1-5", description: "Designing and evaluating investigations against criteria B and C, and building the algebra that DP Maths later assumes." },
    { name: "IB MYP Language & Literature", levels: "MYP 1-5", description: "Analysis in English for students who think in Hindi, and the process journal for the Personal Project." },
  ],

  igcseSubjectsIntro:
    "Cambridge syllabus codes drive how IGCSE tuition is planned, because 0580 Extended, 0606 Additional Mathematics and 0620 Extended Chemistry each need different preparation. Seoni students usually sit IGCSE as private candidates or through a school elsewhere, so we also check which exam centre and series the family is aiming for before fixing a study plan.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Paper 2 and 4 technique, exact-value answers and the working that earns method marks when an answer is wrong." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Differentiation, trigonometric identities and functions, a strong runway into IB Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, circuits and waves with equation rearrangement, plus the planning question in the practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, the periodic table, rates and organic chemistry, with data-sheet confidence." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Enzymes, inheritance and ecosystems, with practical-paper data questions." },
    { name: "IGCSE Combined & Coordinated Sciences", levels: "0653 / 0654", description: "Three sciences in one qualification, where the plan is to balance weak and strong topics across papers." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative composition and summary skills for Hindi-first students." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Listening, reading and speaking preparation with spoken fluency drills." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension, letter and essay tasks, a scoring subject for native Hindi speakers." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, data response and the evaluation step that many students skip." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case-study application and accounting calculations without decorative theory." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, trace tables and the programming paper for students without a school lab." },
  ],

  regionsTitle: "Seoni localities our online IB and IGCSE tutors serve",
  regionsIntro:
    "A tutor's location does not limit the match, so a student near the bus stand gets the same choice as one on the Nagpur road. What changes from one part of Seoni to another is ordinary life: mains electricity and broadband reliability, school timings, and whether the family also sends the child to a coaching class. We use those details to fix a lesson time that actually holds.",
  regions: [
    { name: "Civil Lines", note: "The administrative and residential part of town near the collectorate, where government officers and their transfer-prone families often ask about curriculum continuity." },
    { name: "Barghat Road", note: "A long commercial and residential stretch, with families who commute for work; evening slots after shops close fit best." },
    { name: "Bhairoganj", note: "An older market neighbourhood where business households ask about commerce subjects like Economics and Business Management." },
    { name: "Nagpur Naka area", note: "Lies along the highway towards Nagpur, so families here are the most likely to be planning a school move to that city." },
    { name: "Kanha Road and Dhuma side", note: "Outer areas on the forest side of town, where a fixed broadband connection is worth checking before a trial." },
    { name: "Shukrawari", note: "A central locality with compact homes and steady evening demand, often combining school tuition with online specialist help." },
    { name: "Lakhnadon road", note: "Connects to the Jabalpur direction, home to families with relatives in Jabalpur and some history of study there." },
    { name: "Ganesh Ganj", note: "A dense, central residential area where students commonly share a household laptop, so session times are agreed early." },
    { name: "Kurai and Chhapara side", note: "Semi-rural belts of the district, where students travel into town for school and need late-afternoon or Sunday lessons." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service. Schools are named only to explain where Seoni students might go for an IB or IGCSE classroom. We have no affiliation with, endorsement from or partnership with any school named here, the International Baccalaureate, Cambridge or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Nearby: Nagpur (about 125 km)",
      note: "Nagpur is where Seoni families most often look when a child needs an international school, and the city has several IB and IGCSE campuses. Options inside Seoni itself are limited, which is why much of this page is about tutoring rather than schools.",
      schools: ["D Y Patil International School, MIHAN", "Centre Point School International", "VIBGYOR World Academy", "International School of Scholars"],
    },
    {
      city: "Nearby: Bhopal",
      note: "The state capital has one confirmed Cambridge campus on its outskirts, reachable by rail or road for families who want a residential option in Madhya Pradesh.",
      schools: ["Shrewsbury International School India"],
    },
    {
      city: "Nearby: Jabalpur",
      note: "Jabalpur is the closest big city to the east, but we could not confirm an IB or Cambridge school there, so we do not name one. Seoni students tutored online can keep studying in Seoni while deciding.",
      schools: [],
    },
  ],

  modesIntro:
    "Tutors do not visit homes in Seoni; in-person tuition at IB Gram exists only in Gurugram and parts of Delhi NCR. Every Seoni lesson is a live private class on video, taken at home. Families pick one of three formats depending on the subject, the school calendar and how close an exam is.",
  modes: [
    {
      title: "Online home tuition, weekly and one-to-one",
      description:
        "One fixed weekly slot with the same tutor, taught live on video with a shared whiteboard, and followed by a short written note. It is the usual choice for a subject being learned from scratch.",
      bullets: [
        "Same tutor and same hour every week",
        "Worked problems written out live on screen",
        "A note on what was covered and what to revise",
        "Works on a laptop or a tablet with a stylus",
      ],
    },
    {
      title: "Focused exam push",
      description:
        "Additional sessions for the weeks before mock exams, internal assessment deadlines or the May and November sittings, usually built around timed past-paper questions.",
      bullets: [
        "Past-paper blocks sorted by topic",
        "Extra sessions added only where marks are being lost",
        "Useful ahead of predicted-grade deadlines",
        "Reduced again once the exam has passed",
      ],
    },
    {
      title: "Light-touch guided practice",
      description:
        "A shorter live session each week plus a set of practice questions the tutor marks between lessons. It suits families in Seoni who want steady help but cannot guarantee long evening slots every week.",
      bullets: [
        "One live check-in per week",
        "Written feedback on independent work",
        "Helpful during festival and wedding-season weeks",
        "Easy to step up to two live sessions later",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schooling around Seoni: what is actually available?",
      paragraphs: [
        "The short answer is that Seoni town has no IB or Cambridge IGCSE school we could verify, and it would be misleading to list one. Schooling in the district follows the Madhya Pradesh Board and CBSE, with government and private schools serving the headquarters and surrounding blocks. The nearest places where an international curriculum is taught are Nagpur, roughly 125 kilometres south-west along the highway, and Bhopal to the north-west, which has a single confirmed Cambridge campus.",
        "Who, then, asks about IB and IGCSE in Seoni? Mostly families who are thinking a few years ahead. A government officer expecting a posting to Nagpur or further away. A doctor or engineer who has lived in a metro and wants the child to keep a syllabus that universities abroad recognise. A business family with relatives overseas. A parent whose child will move to a boarding school for Class 9 or 11 and wants the student not to start behind.",
        "For those families, tutoring fills a gap a school cannot. A student from a Hindi-medium MP Board school can spend the months before joining an IB class building English fluency and the habit of writing an argued paragraph. A student who has already joined an international school elsewhere and boards there can get a subject specialist back home during the long holidays, without losing weeks to travel.",
        "Because the nearest verified options sit in other cities, this page is honest about its limits. We name schools only where we have confirmed them, and we describe Seoni's own landscape as what it is: a district town with strong state-board schooling and a small number of families who look beyond it.",
      ],
      bullets: [
        "No IB or Cambridge school in Seoni could be confirmed",
        "Nagpur is the main international-school option, about 125 km away",
        "Online tutoring prepares students before a move or supports them afterwards",
        "Families asking are mostly planning moves, transfers or study abroad",
      ],
    },
    {
      heading: "MP Board, CBSE, IB or IGCSE: what changes for a Seoni student?",
      paragraphs: [
        "A student moving from the MP Board to IB or IGCSE is usually surprised less by the difficulty than by the style. Board papers in Madhya Pradesh lean on textbook recall, with questions that reward reproducing a definition or a worked example from the prescribed book. IB and Cambridge papers hand the student a situation they have not seen and ask what the knowledge says about it.",
        "CBSE sits somewhere between. Its recent papers carry more application and case-based questions than the state board, and the NCERT books explain ideas in a way that transfers well to IGCSE sciences and mathematics. A CBSE student crossing to IGCSE in Class 9 generally needs help with command words and extended answers, while an MP Board student crossing at the same point needs that plus some time on English used for scientific writing.",
        "Assessment weight differs too. In the IB Diploma, internal assessments in most subjects contribute roughly a fifth to a third of the final grade, and they are judged on process as well as outcome. IGCSE rests mainly on end-of-course papers, with coursework only in some subjects. The board exam in Class 10 or 12 does not work that way, which is why a tutor who has taught both systems can name exactly where old habits help and where they hurt.",
        "The table compares the four systems on the points Seoni parents ask about most.",
      ],
      table: {
        caption: "MP Board, CBSE and IB / IGCSE compared for Seoni families",
        columns: ["Point of comparison", "MP Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Language of instruction", "Hindi or English, mostly Hindi in district schools", "English or Hindi", "English, with Hindi available as a language subject"],
          ["What exams reward", "Recall of prescribed textbook content", "Recall plus growing application", "Application, evaluation and argued explanation"],
          ["Coursework weight", "Low, mostly practical records", "Low to moderate", "Significant in the IB, limited in IGCSE"],
          ["Usual route after school", "State colleges, JEE and NEET coaching", "JEE, NEET and CUET-UG", "CUET-UG, study abroad, and JEE or NEET eligibility checks"],
          ["Nearest school offering it", "In Seoni district", "In Seoni and nearby towns", "Nagpur, Bhopal or boarding elsewhere"],
        ],
      },
    },
    {
      heading: "What shapes the cost of IB and IGCSE tuition for a Seoni family?",
      paragraphs: [
        "The fee is set by the tutor's experience with your exact course, the level, the length and number of weekly sessions, and whether the work is steady support or a short exam push. A Higher Level Physics or Mathematics tutor with examiner-style marking experience will usually cost more per hour than a tutor supporting MYP subjects, because fewer people can teach HL content at that depth. We quote the rate in writing for your specific match before the trial, and we do not publish a price list.",
        "Online delivery matters for budgeting in a town like Seoni. Families are not paying to bring a tutor from Nagpur, and they are not spending on repeated trips to a coaching centre in a bigger city just to find someone who knows the syllabus. The tutor can be anywhere in India, and the money goes into the hour, not into travel.",
        "Value comes from pointing the lesson at the right gap. An hour on the structure of an IB Economics evaluation paragraph or on how to avoid losing method marks in IGCSE 0580 is worth more than an hour revising a chapter the student already knows. Ask any tutor what they will cover in the first four weeks and how progress will be measured.",
        "There are no long contracts. Plans are reviewed every few weeks, and a family can pause during a wedding-heavy fortnight or around Diwali and resume afterwards. If a tutor is not the right fit, we change the match without starting the conversation again from zero.",
      ],
      bullets: [
        "Rate depends on level, subject, session length and tutor experience",
        "No travel cost, since lessons are taught over video",
        "Rate confirmed in writing before the trial",
        "Tutor changes and pauses are simple and free",
      ],
    },
    {
      heading: "Online tutor, local coaching class, private home tutor or self-study: which suits a Seoni student?",
      paragraphs: [
        "Most Seoni households already know the local options: a coaching class in town, a teacher who comes to the house after school, or a mix of both with self-study from the prescribed book. Those work well for state-board and CBSE content. For IB and IGCSE the problem is narrower: the number of people in or near Seoni who have actually taught these syllabuses recently is very small.",
        "An online one-to-one tutor is chosen for exactly that experience. A private teacher in town might be excellent at Class 12 physics and still never have seen a Paper 3 option question or a Cambridge alternative-to-practical paper. Self-study with past papers works for disciplined students, but without feedback a student can repeat a flawed method for months.",
        "Online tuition does have conditions. It needs a steady connection and a quiet corner, and it works best when the student opens the session with a question rather than waiting to be taught. Where broadband is unreliable, a mobile hotspot as a backup and a slightly shorter session usually solves it.",
        "The table sets the four routes side by side so a family can judge on the features that matter for IB and IGCSE specifically.",
      ],
      table: {
        caption: "Four ways a Seoni student can get IB or IGCSE help",
        columns: ["Route", "Syllabus knowledge", "Personal attention", "Practical notes for Seoni"],
        rows: [
          ["Online one-to-one tutor", "Matched to exact course and level", "Full, one student at a time", "Needs stable broadband; no travel"],
          ["Local coaching class", "Usually state board, CBSE or JEE and NEET", "Shared across a batch", "Fixed timings, limited IB or IGCSE expertise"],
          ["Private tutor at home", "Depends on the individual teacher", "High", "Hard to find someone who has taught IB or Cambridge papers"],
          ["Self-study", "Whatever the student sources", "None unless a mentor reviews work", "Cheap, but feedback on extended answers is missing"],
        ],
      },
    },
    {
      heading: "The Seoni school year: exams, festivals, weather and power cuts",
      paragraphs: [
        "Seoni's calendar is set by the Indian academic year and by the monsoon. Schools reopen in April or June, the rains arrive in July and run through September, and winters from December to January are cold enough that early-morning lessons are uncomfortable. IB exams are held in May and November; Cambridge IGCSE runs in February to March for some subjects and centres, May to June and October to November for the main series.",
        "Local festivals shape study time more than most parents admit. Navratri and Durga Puja bring late nights, Diwali takes most of a week, Holi is a short break, and wedding season in winter fills many evenings. A tutor who knows this will plan the heaviest topics outside those weeks and use them for lighter revision.",
        "Electricity and connectivity need honest planning too. Storms in the rainy months and summer demand peaks can interrupt supply, and a student on a laptop with limited battery can lose a session. A charged device, a mobile hotspot and an agreed plan to reschedule keeps the loss small.",
        "The table below is a planning sketch, not an official timetable. Exact dates come from your school or exam centre.",
      ],
      table: {
        caption: "A Seoni year for an IB or IGCSE student",
        columns: ["Period", "What is happening", "Study focus"],
        rows: [
          ["April to June", "New term, IGCSE May-June series, IB May exams, peak summer heat", "Exam sittings, then a lighter, rested start to the next grade"],
          ["July to September", "Monsoon, long classroom weeks, mid-year tests", "Steady new content and IA drafts"],
          ["October to November", "Navratri, Dussehra, Diwali, IB and IGCSE November series", "Past papers before festivals, revision around them"],
          ["December to February", "Cold weather, wedding season, pre-boards and mocks", "Mock exams, predicted-grade work, university applications"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Seoni study after school?",
      paragraphs: [
        "An IB Diploma is accepted by universities in the UK, the US, Canada, Australia and across Europe, and the Association of Indian Universities recognises it as equivalent to the Indian Class 12 for admission to Indian universities. A student from Seoni can therefore apply to Indian and overseas institutions with the same set of results, subject to each university's own subject requirements.",
        "For Indian admissions, CUET-UG is the route into central universities and many others, and IB students register for it like any other Class 12 candidate. JEE Main and NEET-UG eligibility for IB students depends on the subjects taken and on the year's published rules, so the family should read the current notices rather than rely on hearsay. Students who want medicine or engineering should choose Biology or Physics, Chemistry and Mathematics at Higher Level with this in mind.",
        "Within the region, students look to Nagpur and Bhopal for colleges and entrance coaching, and to Jabalpur for state universities. Nagpur has institutions such as VNIT and AIIMS Nagpur, and Bhopal has IISER, AIIMS and MANIT. Overseas, most applicants look at UK and US programmes, with deadlines that fall well before the final IB results.",
        "IGCSE students normally continue into A Levels, the IB Diploma, or CBSE Class 11 at a school that accepts transfers. Online tutors can help a Seoni student line up the subject choices so that the IGCSE results actually support the next step.",
      ],
      bullets: [
        "IB recognised for Indian admission through AIU equivalence",
        "CUET-UG route open to IB and IGCSE-to-Class-12 students",
        "JEE and NEET eligibility must be checked against current rules",
        "Predicted grades and deadlines for overseas applications come early in Class 12",
      ],
    },
    {
      heading: "IB Maths AA and AI and the sciences: what a Seoni student should plan for",
      paragraphs: [
        "Choosing between Mathematics Analysis and Approaches and Applications and Interpretation is the first big decision of the Diploma. AA suits students who enjoy algebra, proof and calculus and who may study engineering, physical sciences or economics at university. AI suits students who prefer statistics, modelling and technology, such as those heading for social sciences, business or psychology. HL in either is demanding, and a Seoni student taking it should plan steady weekly practice, not last-minute cramming.",
        "Physics HL assumes the calculus from Maths, which is why students taking it without AA often struggle in the second year. Chemistry HL adds organic pathways and equilibrium calculations that reward careful, repeated practice. Biology HL is content-heavy but turns on reading graphs and experimental data accurately. A tutor can rank the topics by marks at risk instead of letting a student spend equal time on all of them.",
        "The internal assessment is a big part of the work. Students must pick a question, collect data, analyse it honestly and write it up in a fixed format. A tutor can explain what a good investigation looks like, challenge a weak research question and check that the student understands the method, but the work, the data and the writing must be the student's own.",
        "Practical work is where a student in a town without an international school can fall behind. Online tutors use simulations, data sets and video demonstrations to teach method, and they help the student plan a home-safe investigation that the school or supervising teacher can approve.",
      ],
      bullets: [
        "AA for algebra and calculus-minded students, AI for modelling and statistics",
        "Physics HL needs calculus fluency from the start",
        "Chemistry HL rewards steady practice of organic and equilibrium problems",
        "Internal assessments are guided, never written, by the tutor",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects should a Seoni student pick?",
      paragraphs: [
        "Most Cambridge IGCSE subjects offer a Core and an Extended tier. Core limits the top grade to a C and Extended opens grades A* to E, so a student aiming at A Levels or the IB Diploma in sciences or mathematics should generally prepare for Extended. Core can be the right choice where confidence is low and the aim is a solid pass, though switching later is hard once papers are entered.",
        "Subject choice at this stage affects what comes next. Students who want to take IB Maths AA or A Level Mathematics benefit from Additional Mathematics 0606 alongside 0580. Students aiming at medicine or engineering should keep all three sciences rather than the combined award. For a student with a strong home language, Hindi as a Second Language is often an efficient, high-scoring subject.",
        "Seoni students who sit IGCSE privately need to sort out an exam centre, which usually means a Cambridge-registered centre in a bigger city, and registration deadlines that come months before the series. A tutor can help plan revision around the eventual centre's dates, and help practise the practical alternatives used in place of lab work.",
        "Finally, plan the gap between IGCSE and the next stage. A student heading to Class 11 in an IB or A Level school elsewhere will benefit from a summer of bridging in the main subject, which is easy to arrange online.",
      ],
      bullets: [
        "Extended tier for students aiming at A Levels or IB Diploma sciences",
        "Additional Mathematics 0606 is a useful bridge to IB Maths AA",
        "Keep separate sciences rather than combined if medicine or engineering is the aim",
        "Private candidates need an exam centre and early registration",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge and Edexcel IGCSE to students in Seoni. Every match starts with the exact syllabus, level and exam session, and then with an evening slot that suits a family in Seoni, since every lesson runs online.",

  process: [
    { title: "Tell us the brief", description: "Share the programme or board, subject, level, current grade and the evenings that are realistic in Seoni." },
    { title: "Review a shortlist", description: "We suggest tutors who have taught that exact course, with a line on why each fits." },
    { title: "Try a free lesson", description: "Your child works a real topic with the tutor on video, with no fee and no obligation." },
    { title: "Approve a first-month plan", description: "The tutor sets out topics, session rhythm and how progress will be reported, and you agree or amend it." },
    { title: "Settle into a weekly slot", description: "Regular live lessons at a fixed time, shifted around exams, festivals and the rainy season when needed." },
  ],

  whyPoints: [
    { title: "Matched on the exact course", description: "We look for a tutor who has taught your child's subject and level, not a general IB or IGCSE teacher." },
    { title: "Straight about format", description: "Seoni lessons are online and live. Nobody promises a visit to your house, and we say so before you book." },
    { title: "Trial before any commitment", description: "Your child meets the tutor and works a real problem first, so you judge on the lesson itself." },
    { title: "Academic honesty", description: "Tutors coach IAs, the EE and TOK but never write them, which protects your child's diploma." },
    { title: "Regular written updates", description: "A short note follows every session and a wider review comes every few weeks." },
    { title: "Independent and flexible", description: "No school ties, no lock-in contract and an easy change of tutor if the fit is wrong." },
  ],

  faqs: [
    {
      question: "Is there home tuition for IB and IGCSE in Seoni?",
      answer:
        "Tutors do not visit homes in Seoni. Home visits run only in Gurugram and parts of Delhi NCR. What Seoni families get is online home tuition: a live one-to-one lesson that your child takes at home on a laptop, with the tutor on video and a shared whiteboard, which is what most parents searching for private tuition at home are really after.",
    },
    {
      question: "How do I find an IB tutor in Seoni?",
      answer:
        "Send us the programme, subject, level and your child's school, and we suggest tutors who have taught that course. Because Seoni has very few local IB teachers, the tutor will be elsewhere in India and join by video. You see a short profile, try a free lesson, and only then agree a weekly slot and a rate confirmed in writing.",
    },
    {
      question: "Are there IB or IGCSE schools in Seoni?",
      answer:
        "We could not confirm an IB or Cambridge IGCSE school in Seoni, so we do not name one. The nearest verified campuses are in Nagpur, about 125 km away, and Bhopal. Many Seoni students who follow these syllabuses study through a school elsewhere, a boarding arrangement or private candidacy, and use online tutors for the specialist subjects.",
    },
    {
      question: "What does IB or IGCSE tuition cost for a Seoni student?",
      answer:
        "The rate depends on the programme, subject and level, the tutor's experience and how often lessons run, and we quote it in writing before your trial. We publish no price list because HL Physics and MYP English are not priced alike. Online tuition removes travel costs, so the fee pays for teaching time rather than a commute.",
    },
    {
      question: "Can my child switch from the MP Board to IGCSE or IB?",
      answer:
        "Yes, and earlier is easier than later. A switch is smoothest at Class 8 or 9, before IGCSE papers or MYP 4 begin. The content overlap with the MP Board is large; the real gap is English for argued writing and command-word technique, which a tutor can close in a few months with regular sessions and past-paper practice.",
    },
    {
      question: "Which IB subjects are most in demand from Seoni students?",
      answer:
        "Requests cluster around Mathematics (AA or AI), Physics, Chemistry and Biology, followed by Economics and Business Management. That mirrors the goals of families looking at engineering, medicine, commerce or overseas degrees. English and Hindi support is also common for students moving from a Hindi-medium school into an English-medium IB classroom.",
    },
    {
      question: "Do tutors write the IA, Extended Essay or TOK essay?",
      answer:
        "No. Tutors never write or rewrite assessed work. They explain what the criteria reward, help choose a workable research question, review drafts for clarity and structure and teach the method. The data, argument, writing and references must be the student's own, because schools and the IB check authenticity and the penalty can reach the whole diploma.",
    },
    {
      question: "How does a free trial lesson work?",
      answer:
        "The trial is a real lesson on a topic your child chooses, taught live on video by the tutor we propose, with no payment taken and no obligation. Afterwards you receive a short written note on what was covered and what we suggest next. If the fit is not right, we offer another tutor before any plan begins.",
    },
    {
      question: "What internet and equipment does my child need in Seoni?",
      answer:
        "A laptop or tablet, a headset if the house is noisy, and a broadband or mobile connection that can hold a video call. A phone hotspot is a sensible backup during rains or outages. For maths and sciences, a stylus tablet or a sheet of paper held to the camera lets the tutor see handwritten working.",
    },
    {
      question: "Can IGCSE be taken privately from Seoni?",
      answer:
        "Yes, through a Cambridge-registered centre that accepts private candidates, which will usually be in a larger city. You register months before the series, and practical components may be replaced by written alternatives. A tutor can build a revision plan around the centre's dates, though choosing and booking the centre is the family's responsibility.",
    },
    {
      question: "How is IB recognised for admission in India?",
      answer:
        "The Association of Indian Universities treats the IB Diploma as equivalent to Class 12 for Indian university admission, and IB students sit CUET-UG like other applicants. Subject requirements vary by course and university, and eligibility for JEE or NEET depends on the subjects taken, so check each exam's current information bulletin.",
    },
    {
      question: "Is IGCSE useful for a student who will return to CBSE or MP Board?",
      answer:
        "It can be, but it is not designed as a bridge. The IGCSE stresses application and extended answers, which helps in later CBSE and state-board science and mathematics, but the content sequence differs. Parents planning a return should keep Hindi and social-science coverage up so the student is not behind in Class 11.",
    },
    {
      question: "When should a Seoni student start tuition for the IB Diploma?",
      answer:
        "Start in the first term of Class 11 for the subjects that build on each other, especially Mathematics, Physics and Chemistry. Content is continuous across two years, and the internal assessment begins early. A late start in Class 12 leaves little room for practice papers before predicted grades are sent to universities.",
    },
    {
      question: "What do tutors do about festival weeks and exam clashes?",
      answer:
        "Lessons are planned around them. Diwali week, Navratri evenings and wedding-heavy weekends are flagged at the start of each term, and heavy new content is scheduled outside them. A missed session is rescheduled rather than lost, and lighter revision or question practice fills the gap when a family is busy.",
    },
    {
      question: "Can one tutor cover both Maths and Physics?",
      answer:
        "Sometimes, particularly at IGCSE or MYP level, though IB Diploma Higher Level subjects are usually better taught by a specialist for each. We will say candidly if one tutor is a weaker fit for a second subject, and suggest pairing two tutors on different days rather than stretching one person across both courses.",
    },
    {
      question: "How do I get started with IB Gram from Seoni?",
      answer:
        "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board, subject, level, current grade and preferred evenings. You receive a shortlisted tutor, the trial slot and the written rate, and nothing is charged until you have seen the first lesson and chosen to continue.",
    },
  ],

  internalLinks: [
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB tutoring by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "How Cambridge and Edexcel IGCSE subjects, tiers and exams fit together." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, board and teaching background." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL choices, the core, internal assessments and exam sessions." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria-based assessment and the Personal Project explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition for parents of younger children." },
    { label: "IB Maths guidance", href: "/courses/ib/mathematics/", description: "Choosing and preparing for Analysis and Approaches or Applications and Interpretation." },
    { label: "Admissions and test prep", href: "/admissions/test-prep/", description: "Support for CUET, JEE, NEET and overseas admission tests alongside school boards." },
    { label: "IB and IGCSE tutoring in Nagpur", href: "/nagpur/", description: "The nearest big-city hub for international schools, with its own school clusters." },
    { label: "IB and IGCSE tutoring in Jabalpur", href: "/jabalpur/", description: "Online matching for families in Jabalpur, east of Seoni on the same highway." },
    { label: "IB and IGCSE tutoring in Bhopal", href: "/bhopal/", description: "Tutors for the state capital, which has a Cambridge residential campus." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and arrange a free trial lesson." },
  ],

  closingHeading: "Arrange a free trial with an IB or IGCSE tutor for your child in Seoni",
  closingBody:
    "Send the board, the subject and level, the school your child attends and the evenings that genuinely work at home. We reply with a tutor who has taught that course, a trial slot on video and a written rate, and you pay nothing until the first lesson has been seen. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",

  geo: { latitude: 22.0857, longitude: 79.5499 },
  alternateNames: ["Seoni Madhya Pradesh", "Seone"],
  wikipedia: "https://en.wikipedia.org/wiki/Seoni,_Madhya_Pradesh",
  stripSchools: [],
};
