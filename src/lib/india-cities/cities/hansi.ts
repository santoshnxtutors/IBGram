import type { CitySeoPage } from "../types";

/**
 * /hansi/ - IB and IGCSE tutoring page for Hansi, Haryana. No IB or Cambridge/Edexcel school is
 * confirmed in Hansi, so stripSchools is empty and the clusters point to Gurgaon, Delhi and
 * Chandigarh using names already verified on hisar.ts. In-person home tuition is offered only in
 * Gurugram and parts of Delhi NCR.
 */
export const hansi: CitySeoPage = {
  slug: "hansi",
  countryName: "Hansi",
  countryNameLong: "Hansi, Haryana",
  demonym: "Hansi",
  state: "Haryana",
  stateCode: "IN-HR",
  flagCode: "in",
  countryCode: "IN",
  region: "Haryana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions bend around the wheat harvest, the dense winter fog, the May and June heat and the Diwali and Holi weeks, then settle into the slot your child's school day actually leaves open",
  lastUpdated: "2026-09-21",
  geo: { latitude: 29.1023, longitude: 75.9646 },
  wikipedia: "https://en.wikipedia.org/wiki/Hansi",
  alternateNames: ["Hansi Haryana", "Asigarh"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Hansi | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Hansi students in Haryana: live one-to-one online lessons for DP, MYP, PYP, Cambridge and Edexcel IGCSE, with a free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Hansi",
  heroEyebrow: "IB & IGCSE ONE-TO-ONE TUITION FOR HANSI STUDENTS",
  heroSubtitle:
    "Families in Hansi who search for IB or IGCSE home tuition find that no local centre runs either curriculum, and our tutors do not visit homes here. What we offer instead is private tuition from home, taught online: a live one-to-one lesson on your child's laptop with a specialist in the exact subject, timed to suit a Haryana school day, farm season and Hisar commute included.",
  primaryKeyword: "IB and IGCSE tutors in Hansi",
  imageAltText: "A Hansi student at a study desk following an online IGCSE Mathematics lesson with a tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Hansi",
    "IGCSE tutor Hansi",
    "IB home tuition Hansi",
    "IGCSE home tuition Hansi",
    "IB private tuition Hansi",
    "IB Maths tutor Hansi",
    "IGCSE Maths tutor Hansi",
    "IB Physics tutor Hansi",
    "IB Chemistry tutor Hansi",
    "IB Biology tutor Hansi",
    "IB DP tutor Hansi",
    "IB MYP tutor Hansi",
    "IB PYP tutor Hansi",
    "IGCSE online tuition Hansi",
    "IB tutor Hansi Hisar",
    "IGCSE tutor Barwala",
    "IB tutor Uklana Narnaund",
    "online IB tuition Haryana",
    "Cambridge IGCSE private candidate Haryana",
  ],

  heroTrustPoints: [
    "Lessons taught by someone who has recently taught the exact IB or IGCSE subject and level",
    "Everything is live on screen; visiting tutors exist only in Gurugram and parts of Delhi NCR",
    "The first lesson is free and is a real lesson, not a pitch",
    "No link to any school, exam board or Haryana education office",
  ],
  heroStats: [
    { value: "Class 1 to 12", label: "PYP through DP and IGCSE" },
    { value: "Cambridge and Edexcel", label: "Both IGCSE boards taught" },
    { value: "IST", label: "Indian hours, Indian tutors" },
    { value: "Free trial", label: "Try one lesson first" },
  ],

  intro: {
    heading: "IB and IGCSE tuition from home for families in Hansi",
    paragraphs: [
      "Hansi is a town of old walls and new ambitions. It sits on the Delhi-Fazilka highway about 26 kilometres east of Hisar, its streets wrapped around the ruins of a fort that Prithviraj Chauhan once held and that the Irish adventurer George Thomas later made his capital. Its schools teach the Haryana Board syllabus and CBSE, and neither the IB nor Cambridge has a campus here. Families who want one of those curricula therefore study through a screen, with one of our IB and IGCSE tutors in Hansi on the other side.",
      "The parents who ask tend to share a few stories. A son or daughter is planning a degree in Canada, Australia or the UK and the family wants an internationally recognised qualification on the file. A relative in the Gulf or North America wants a child to keep pace with a British or Canadian syllabus. A defence or government family expects a transfer to Gurugram, Delhi or Chandigarh and wants the child ready for an IB or IGCSE classroom before the move. Each of these needs steady, structured teaching, not a crash course.",
      "To be clear about the format: a tutor does not come to a Hansi home. Home visits run only in Gurugram and parts of Delhi NCR, about 150 kilometres away, so everything here is online. A student sits at home, opens a link and works with a tutor chosen for the exact board, subject and level. The upside is range. Nobody in the Hisar and Hansi belt is teaching IB Chemistry HL, but plenty of specialists across India are, and they teach on Indian time.",
      "IB Gram is independent of the IB, Cambridge, Pearson and every school named on this page. Tutors explain, practise and mark. They do not write an Internal Assessment, an Extended Essay, a TOK essay or any coursework for a student, and they say so at the first meeting.",
    ],
    bullets: [
      "IB PYP, MYP and DP, plus Cambridge and Pearson Edexcel IGCSE",
      "Live private lessons on a shared whiteboard, with real past papers",
      "Built for families planning study abroad, a move to NCR, or a change of board",
      "A short note after each lesson and a free trial first",
      "No visits to homes in Hansi; in-person tutoring stays in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Hansi has no IB classroom of its own, so the four IB programmes reach local families indirectly: through a move, a boarding place, or a plan to study abroad. The job of a tutor changes a good deal from one stage to the next.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Young pupils learn through big questions rather than separate subject periods, then present a self-chosen inquiry at the PYP Exhibition in the final year. Tutoring at this age mixes story reading, confident speaking and playful number work, with the child leading as much as possible.",
      countryNote:
        "In Hansi, PYP tutoring is chosen mostly by families preparing a child for a school in Gurugram or Delhi, where English fluency and inquiry habits carry more weight than they do in a typical Haryana Board classroom.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Every MYP subject is graded on four criteria, and the last year brings a Personal Project of the student's own design. Most pupils know the content; what catches them is writing an answer that satisfies a criterion descriptor rather than a textbook.",
      countryNote:
        "A Hansi student arriving at an MYP school from a Haryana Board background usually needs help with extended writing in English and the sciences, which a tutor can begin months before the move.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects form the core of the Diploma, together with Theory of Knowledge, an Extended Essay and Creativity, Activity, Service. The internal assessments and the May written papers both matter, and tutors coach for each separately.",
      countryNote:
        "Because the Diploma needs enrolment at an authorised school, Hansi students on it are usually boarding or have relocated; tutors then support Maths, Physics, Chemistry and Economics at HL alongside school.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP combines at least two Diploma courses with a career-related qualification and a reflective project. Few Indian schools run it, so the demand is small, but the Diploma courses inside it are examined to full DP standard.",
      countryNote:
        "Nobody in Hansi meets CP locally; if a relocating family lands at a school offering it, the tutoring is ordinary Diploma-course coaching.",
    },
  ],

  subjectsIntro:
    "Choosing the right IB Maths course is the commonest first question from Hansi parents, since a child from a Haryana Board or CBSE background may suit one strand far better than the other. Course code, level and exam month come first; the tutor is then matched to them.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Suits students who like algebra and calculus; Paper 3 at HL asks for proof and modelling that board maths never rehearses." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Leans on statistics and technology, so graphic-calculator fluency earns as many marks as theory." },
    { name: "IB Physics", levels: "HL / SL", description: "Students from CBSE often know the formulas but need practice explaining why a result follows, which the IB papers reward." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry and organic reaction pathways drive many marks; fluent use of the data booklet saves minutes per paper." },
    { name: "IB Biology", levels: "HL / SL", description: "Command terms such as 'outline' and 'discuss' demand different answers, a distinction board students meet for the first time here." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams must be labelled and used, and real current examples from India or abroad lift the long answers." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers reward applying a concept to the named firm, and the internal assessment needs a real business willing to share data." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Learners coming from a Hindi-medium or bilingual home build fluency with unseen-text analysis and the individual oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and system design are examined in writing, apart from the project coded for the IA." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies must be named and evaluated accurately, and essays follow a tight structure that can be practised." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Haryana's water table, stubble burning and canal irrigation make ready local case studies for evaluation answers." },
    { name: "IB Geography", levels: "HL / SL", description: "Fieldwork for the internal assessment needs a question that can be tested with simple, repeatable data." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 source evaluation and Paper 2 essays use different skills and need separate rehearsal." },
    { name: "IB Hindi B", levels: "HL / SL", description: "For students who speak Haryanvi or Hindi at home, the written paper's text types and the oral are where marks are won." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion practice helps a student to argue a prescribed title from several positions rather than one." },
  ],

  igcseSubjectsIntro:
    "Most Hansi families who reach IGCSE do so either as a planned step before IB or A Level elsewhere, or as a private candidate. Tutors therefore cover both the syllabus and the practicalities: tiers, board choice and the alternative-to-practical paper.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tier covers more algebra and trigonometry than Class 10 CBSE, so it is worth starting early." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "A natural bridge to IB Maths AA and to JEE-style problem solving." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Papers reward the same topics as Cambridge but phrase questions differently, so practise on the right board." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Private candidates prepare for the alternative-to-practical paper through data handling and method questions." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Balancing equations and mole calculations need daily repetition, and identification of ions needs recall." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Precise vocabulary and sequenced explanations separate top grades from middling ones." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Good for students considering commerce, with frequent use of Indian examples to illustrate theory." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, logic gates and trace tables reward regular problem-solving." },
    { name: "IGCSE First Language English 0500", levels: "Grade 9-10", description: "Directed writing and summary tasks follow formats that improve with timed practice." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "A comfortable subject for Hansi students that protects their overall grade profile." },
  ],

  regionsTitle: "Hansi areas we teach students from, online",
  regionsIntro:
    "Lessons happen on a screen, so where a family lives in Hansi shapes the timetable, not the travel: harvest weeks, the Hisar school run, fog-bound winter mornings and a long power cut on a June afternoon all affect when a lesson is realistic.",
  regions: [
    { name: "Hisar Gate and Delhi Gate", note: "The old gates of the walled town, dense with shops and families of traders; evening slots usually begin after the bazaar winds down." },
    { name: "The old city around Char Qutub", note: "The historic quarter around the Char Qutub dargah complex, home to long-settled families, many with relatives working abroad." },
    { name: "The Hisar Road corridor", note: "The western side of town toward Hisar, where families who drive their children to schools in Hisar plan lessons around a return journey." },
    { name: "The Delhi Road and NH 9 side", note: "The eastern edge along the highway, popular with families who do business or work in Rohtak, Delhi and Gurugram." },
    { name: "Barwala", note: "A town in the same district, north of Hansi, with its own mix of CBSE and Haryana Board schools and a steady interest in study abroad." },
    { name: "Uklana", note: "A market town to the south-west; most children here attend Haryana Board or CBSE schools, and lessons often suit weekend mornings." },
    { name: "Narnaund", note: "A town in the Hansi-Hisar belt, where farming families dominate and the wheat harvest shapes the year." },
    { name: "Bass", note: "A large village close to Hansi, where families with modest farms often have a relative in the armed forces or abroad." },
    { name: "Rakhigarhi", note: "The village known for its Indus Valley archaeological site; families there are farmers for the most part, and connectivity can be patchy." },
    { name: "Hisar city", note: "About 26 kilometres west; the nearest big city, with Haryana Agricultural University and several universities, and the reference point for most Hansi school choices." },
  ],

  schoolDisclaimer:
    "IB Gram is independent. It has no partnership with any school named on this page, none with the International Baccalaureate Organization, and none with Cambridge Assessment International Education or Pearson Edexcel. School names come from public directories and school websites; programmes change, so please confirm current details with each school.",
  schoolClusters: [
    {
      city: "Hansi itself",
      note: "We found no school in Hansi confirmed to teach the IB or a Cambridge or Edexcel IGCSE syllabus, so none is named. Local schooling runs on the Haryana Board and CBSE, and a private-candidate route exists for IGCSE.",
      schools: [],
    },
    {
      city: "Nearby: Gurgaon",
      note: "Around 150 kilometres away and home to most of Haryana's IB-affiliated schools; it is also the one place where IB Gram tutors visit homes.",
      schools: ["Amity International School, Sector 46", "GD Goenka World School, Sohna"],
    },
    {
      city: "Nearby: Delhi",
      note: "A similar distance to the east, with a wider set of schools including established names that offer the IB Diploma next to CBSE.",
      schools: ["DPS RK Puram"],
    },
    {
      city: "Nearby: Chandigarh",
      note: "Further north, a workable boarding or relocation option for families in the Hisar belt who prefer Punjab and Himachal connections.",
      schools: ["Strawberry Fields High School, Sector 26"],
    },
  ],

  modesIntro:
    "In Hansi the format is settled: live one-to-one lessons on video. The real decisions are rhythm and focus, for example one long weekend session or two short evening ones, and whether the goal is steady progress or a push before an exam series.",
  modes: [
    {
      title: "Weekly private lessons on screen",
      description:
        "One tutor and one student, working on a shared whiteboard from past papers and the syllabus, in a slot that stays the same through the term.",
      bullets: [
        "Suits PYP, MYP, DP and IGCSE learners alike",
        "The same tutor throughout, not a changing roster",
        "Lessons can be recorded for revision",
        "Time shifts easily when a harvest or festival intervenes",
      ],
    },
    {
      title: "Bridge course for a change of board",
      description:
        "For a Haryana Board or CBSE student heading into IB or IGCSE, a planned programme of several months that builds exam style, command words and coursework habits before the new school begins.",
      bullets: [
        "Gap-finding lesson in the first week",
        "Sample criterion-based and extended answers",
        "Early practice with lab reports and investigations",
        "Progress note every few weeks for parents",
      ],
    },
    {
      title: "Pre-exam sprint",
      description:
        "A compact run of lessons in the weeks before the May or autumn series: timed papers, a fast marking loop and careful work on the topics that cost the most marks.",
      bullets: [
        "Three to four lessons a week at the peak",
        "Marking against the live mark scheme",
        "Planned around fog, heat and festival weeks",
        "Best booked two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Where would a Hansi student find IB or IGCSE teaching nearby?",
      paragraphs: [
        "Hansi has no school we can confirm as teaching the IB or a Cambridge or Pearson Edexcel IGCSE syllabus. The town's schools work to the Haryana Board and CBSE, and nearby Hisar is in the same position: its best-known schools follow CBSE too. A family wanting either curriculum therefore looks further afield, or studies with a tutor.",
        "The realistic destinations are in the National Capital Region. Amity International School in Sector 46 and GD Goenka World School at Sohna are in Gurgaon, and DPS RK Puram is in Delhi; Strawberry Fields High School in Chandigarh is another option to the north. Each lies at least three hours away by road, so a daily commute from Hansi is out of the question.",
        "That is why the decision tends to be a family one rather than a schooling one. Some families move to Gurgaon when a parent's job allows; some place a child in a boarding school; and some keep the child in a Hansi school and add private tuition toward IGCSE as a private candidate. The IB Diploma cannot be taken privately and needs an authorised school.",
        "For all of these, a tutor helps bridge the gap. Because the curriculum in a Hansi classroom and the IB classroom differ so much in style, the earlier the preparation begins, the gentler the transition.",
      ],
      table: {
        caption: "Options for IB or IGCSE, from a Hansi address",
        columns: ["Route", "Where", "What it involves"],
        rows: [
          ["Stay in Hansi", "Hansi", "Haryana Board or CBSE at school, IGCSE as a private candidate with online tutoring"],
          ["Move to NCR", "Gurgaon or Delhi", "Enrol at an IB or Cambridge school; tutoring can begin before the move"],
          ["Board in Chandigarh or NCR", "Chandigarh, Gurgaon", "Residential places at schools offering the IB Diploma or IGCSE"],
          ["Study abroad route", "Canada, UK, Australia", "IB or IGCSE results support an overseas application"],
        ],
      },
      bullets: [
        "No confirmed IB or Cambridge school inside Hansi",
        "Nearest confirmed schools are in Gurgaon, Delhi and Chandigarh",
        "IGCSE as a private candidate is possible; the IB Diploma needs a school",
        "Check a school's current programmes directly before planning a move",
      ],
    },
    {
      heading: "How does a Haryana Board or CBSE education differ from the IB and IGCSE?",
      paragraphs: [
        "A Haryana Board or CBSE paper largely tests how well a student has learned a fixed body of content. An IB or IGCSE paper tests what the student can do with it. A physics question on a projectile may ask the student to justify an assumption or evaluate a result, rather than simply apply a formula and stop.",
        "Assessment is spread over a longer period. CBSE and the Haryana Board weight a Class 12 board exam heavily, with practical and internal components that are modest. The IB counts internal assessments, often a fifth or more of the grade, and IGCSE includes coursework or practical papers in several subjects.",
        "Language use matters more than many students expect. IB and IGCSE examiners reward clear written English, exact subject vocabulary and organised paragraphs, even in mathematics and science papers with structured responses. A Hindi-medium student can meet this fully with practice, but it should begin early.",
        "None of this makes the IB and IGCSE harder in any simple sense. Many students who find rote learning tiring thrive when they can explain and discuss, choose subjects and work on a long-term project.",
      ],
      table: {
        caption: "Haryana Board, CBSE and IB or IGCSE at a glance",
        columns: ["Feature", "Haryana Board", "CBSE", "IB and IGCSE"],
        rows: [
          ["Core skill tested", "Recall of prescribed content", "Application within a fixed pattern", "Explanation, evaluation and independent work"],
          ["Internal or coursework share", "Small", "Small to moderate", "Large in the IB; varies in IGCSE"],
          ["Main language of instruction", "Hindi or English", "English or Hindi", "English, with Hindi as a language subject"],
          ["Recognition abroad", "Limited", "Moderate", "Widely recognised"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Hansi family?",
      paragraphs: [
        "The fee for an IB or IGCSE tutor is set by the programme, the subject and level, the length of each lesson and how recent the tutor's teaching of the syllabus is. A Diploma Higher Level subject sits above IGCSE Core because fewer teachers have current experience with it. You receive the rate in writing before the trial and it stays as agreed.",
        "Because nobody travels, a Hansi family pays nothing for distance. A tutor teaching from Bengaluru, Pune or Delhi costs the same as one in Chandigarh. Families sometimes assume a local private tutor should be cheaper, and for a generalist that can be true; a specialist in IB Physics HL is priced for scarcity anywhere in India.",
        "Comparing hourly rates alone can mislead. A tutor who has marked Cambridge papers or coached IB Paper 3 students may do in one hour what a generalist takes two to do. Better questions to ask are what the tutor has taught, how often they give feedback and how they measure progress.",
        "There is no long contract. Parents can review every few weeks, pause during exams or the harvest, and request a different tutor if the fit is wrong. No fixed price list is published, because the answer depends on the four factors above.",
      ],
      bullets: [
        "Programme, subject, level and lesson length set the rate",
        "No charge for distance, since lessons are online",
        "The rate is agreed in writing before the free trial",
        "No long-term commitment; pause or stop whenever needed",
      ],
    },
    {
      heading: "Is an online tutor better than a coaching centre or a home tutor in Hansi?",
      paragraphs: [
        "Coaching in and around Hansi is built for what the region's students overwhelmingly prepare for: board exams, JEE, NEET and government exams, much of it in batches in Hisar. A centre covering IGCSE Additional Mathematics or IB Biology HL does not exist, because the number of students is tiny.",
        "Local home tutors are valuable for younger children and for homework, but very few have taught the IB or IGCSE, and marking a response to a criterion descriptor is a specific skill. A well-meaning tutor can leave a student confident and still wrongly prepared.",
        "Self-study has real strengths for some IGCSE papers. Past papers for Cambridge and Edexcel are widely available and Mathematics rewards regular practice. What self-study cannot provide is feedback on a written answer, a plan for an internal assessment or a check on whether the student understood a concept or only memorised it.",
        "Online tuition fills that gap, provided the home has reliable internet and a quiet corner. In the Hansi belt that means thinking about power cuts in summer afternoons and keeping a backup plan for monsoon storms.",
      ],
      table: {
        caption: "Comparing support options for a Hansi student",
        columns: ["Option", "Matches the syllabus?", "Type of attention", "What to watch"],
        rows: [
          ["Online one-to-one tutor", "Yes, chosen for the exact board and level", "Individual", "Needs stable internet and power"],
          ["Coaching centre in Hansi or Hisar", "Not for IB or IGCSE", "Batch", "Focus is board exams, JEE and NEET"],
          ["Local home tutor", "Rarely", "Individual", "Seldom trained to mark to IB or Cambridge schemes"],
          ["Self-study", "Partly, for IGCSE Maths", "None", "No feedback on essays or coursework"],
        ],
      },
    },
    {
      heading: "How do harvests, fog and festivals shape the study year in Hansi?",
      paragraphs: [
        "The Hansi year follows the land. Wheat is harvested in April, which is also when board exams finish, and families with farms are busy for several weeks. Paddy and cotton sowing follow in the summer. Children from farming households often help at home, so lesson plans need room for flexibility in these weeks.",
        "Winter brings fog, especially from late December to January, which can disrupt travel to school and reduce light for early-morning study. Online lessons are an advantage here, because nobody has to move. May and June bring heat above 40 degrees, and power cuts in some villages can stretch for hours, so a fixed backup slot in the evening is sensible.",
        "Festivals add structure. Diwali, Holi, Teej and Gugga Navami each bring school holidays, family visits and social occasions in which a lesson can seem a low priority. Tutors who know the local calendar can plan around them, and suggest catch-up blocks so nothing is lost.",
        "Across these seasons the IB and IGCSE exam dates do not move. The May session is a fixed point for the IB Diploma, and Cambridge and Edexcel have their own series, so early planning beats last-minute cramming.",
      ],
      table: {
        caption: "The Hansi year and its study rhythm",
        columns: ["Time of year", "Local pattern", "Study consequence"],
        rows: [
          ["December to January", "Dense fog and cold", "Travel to Hisar schools disrupted; online lessons help"],
          ["February to April", "Board exams and wheat harvest", "Family work peaks; keep lessons short and regular"],
          ["May to June", "Extreme heat and power cuts", "IB May papers and IGCSE summer series; plan a backup slot"],
          ["July to September", "Monsoon and new school year", "Good months for foundation work and IA planning"],
          ["October to November", "Festival season and IGCSE autumn series", "Diwali week pauses lessons; book catch-up blocks"],
        ],
      },
      bullets: [
        "IB Diploma written papers: May session",
        "Cambridge IGCSE: February and March, May and June, October and November series",
        "Pearson Edexcel IGCSE: January, May and June, October and November",
        "Confirm the exact dates with your exam centre",
      ],
    },
    {
      heading: "Where can an IB or IGCSE student from Hansi study next?",
      paragraphs: [
        "IB and IGCSE students from Hansi can aim at Indian universities and at study abroad, often both at once. The Association of Indian Universities treats the IB Diploma as equivalent to Class 12 for admission to Indian universities, and Cambridge IGCSE with A Levels is recognised in the same spirit. Each institution still publishes its own rules, which should be checked.",
        "For national entrance tests, CUET-UG is open to students from several boards, but its content follows NCERT more closely than the IB, so IB students usually need extra preparation in particular subjects. JEE Main and NEET have their own eligibility conditions for students from international boards, and these change, so read the latest information bulletin before choosing subjects.",
        "Study abroad is a strong pull in Haryana. Canada, Australia and the UK draw many students from the state, and an IB or Cambridge record is easy for overseas admissions offices to read. IB predicted grades and points, or A Level predicted grades, carry real weight in UK and Canadian offers.",
        "Nearby options matter as well: Haryana Agricultural University and Guru Jambheshwar University in Hisar, and larger institutions in Rohtak, Gurugram and Delhi. A tutor's job is to lift the subject-level marks that every pathway depends on.",
      ],
      table: {
        caption: "Pathways after IB or IGCSE from Hansi",
        columns: ["Pathway", "What helps", "What to verify"],
        rows: [
          ["Indian universities", "IB Diploma equivalence recognised by AIU", "Each university's own notice"],
          ["CUET-UG, JEE Main, NEET", "Strong Maths and sciences", "Current eligibility for international boards"],
          ["Canada and Australia", "IB points or A Level grades", "Subject prerequisites and English test"],
          ["UK universities", "Predicted and final IB or A Level grades", "Course-specific entry requirements"],
        ],
      },
    },
    {
      heading: "Which IB Maths course and which sciences suit a student from Hansi?",
      paragraphs: [
        "A student from a Haryana Board or CBSE background is usually comfortable with algebra and calculus. That often makes IB Maths Analysis and Approaches a natural fit, especially for future engineers, although Higher Level is demanding. Applications and Interpretation suits students headed for economics, business or the social sciences, and leans on statistics and technology.",
        "Online mathematics lessons work well because the tutor and student write on the same digital page. Mistakes are caught as they appear, and the lesson can be replayed. This is particularly useful for Paper 3 at HL, where students need to see how a proof or extended problem develops step by step.",
        "The IB sciences mix theory with a designed investigation. Tutors help a student plan a question that can be tested with simple equipment at home or in school, analyse uncertainty and write up results, without writing any part themselves. Weekly practice with data-response questions builds fluency.",
        "Students who come from CBSE science often find the IB sciences broader but less formula-driven. A tutor helps redirect revision from memorised results to explanation, using past-paper questions to show how marks are awarded.",
      ],
      bullets: [
        "Analysis and Approaches suits future engineers and mathematicians",
        "Applications and Interpretation suits economics and social sciences",
        "Investigations are coached but always the student's own work",
        "Past-paper questions show how examiners award marks",
      ],
    },
    {
      heading: "Core or Extended: choosing IGCSE tiers and subjects from Hansi",
      paragraphs: [
        "In many Cambridge IGCSE subjects a student sits either a Core or an Extended paper. Core leads to a maximum of grade C, which suits a student who needs a manageable course. Extended reaches grade A star and is expected if the student plans to do A Levels or the IB Diploma in mathematics or science.",
        "A student from Hansi who intends to move to an IB school in Gurgaon will usually do best with Extended Mathematics and the sciences, with Additional Mathematics as a bonus. Core can make sense in one or two supporting subjects to keep the load manageable.",
        "Board choice needs care. Cambridge and Pearson Edexcel papers differ in layout and in how they handle practical skills, and private candidates should confirm which series and subjects their exam centre can offer. A tutor familiar with both can explain the differences before entries are made.",
        "Finally, think about balance. Most universities look for English, mathematics, a science and a humanity or language. Adding Hindi as a second language can round out a record without a heavy workload.",
      ],
      bullets: [
        "Extended tier for anyone heading to IB HL sciences or Maths",
        "Core tier for a manageable, confidence-building programme",
        "Keep to one board per subject and practise its papers",
        "Aim for a balanced spread of subjects",
      ],
    },
    {
      heading: "How do you begin with an IB or IGCSE tutor in Hansi?",
      paragraphs: [
        "It starts with a short message. Send the board or programme, the subject and level, your child's current standing and the times that suit you. We reply with a tutor whose recent teaching matches, along with their background and some trial slots.",
        "The trial is a real lesson on a topic from your child's syllabus. You see how the tutor explains, and your child can judge whether the pace feels right. If the fit is wrong, we arrange another tutor and there is no awkwardness.",
        "After the trial, we agree a first-month plan and confirm the rate in writing. A short note follows each lesson so that you see what was covered, and a fuller review every few weeks compares progress with the syllabus.",
        "If your child is a private candidate, tutors can explain how registration through an approved centre works and what to ask. We do not register students ourselves; that stays between you and the centre.",
      ],
    },
  ],

  tutorsIntro:
    "Every tutor teaches from India, in IST, and has recent experience of the syllabus offered. We match a Hansi family on board, subject and level first, and then on the hours the household can actually use.",
  process: [
    { title: "Send your brief", description: "Share the board or programme, subject, level, current grade and preferred times." },
    { title: "Receive a matched tutor", description: "We reply with a tutor's background and open trial slots." },
    { title: "Try a free lesson", description: "Your child works through a real syllabus topic online." },
    { title: "Confirm the plan", description: "The weekly rhythm and rate are set in writing before you commit." },
    { title: "Track progress", description: "A note after each lesson and a fuller review every few weeks." },
  ],
  whyPoints: [
    { title: "Matched to the syllabus", description: "Tutors are picked for recent teaching of your exact board, subject and level." },
    { title: "Straight about what exists locally", description: "We say plainly that Hansi has no confirmed IB or Cambridge school and plan from there." },
    { title: "Private attention", description: "Each lesson is one tutor and one student, never a batch." },
    { title: "Plain reporting", description: "Parents get a written note after every session." },
    { title: "Assessment integrity", description: "Tutors coach and mark; they never write assessed work." },
    { title: "Change of tutor on request", description: "If the fit is poor, another tutor is arranged quickly." },
  ],

  faqs: [
    { question: "Can I get IB or IGCSE home tuition in Hansi?", answer: "Not with a tutor who visits. IB Gram tutors do not come to homes in Hansi, because home visits run only in Gurugram and parts of Delhi NCR. What we offer is online home tuition: a live one-to-one lesson that your child takes at home on a laptop, with a tutor matched to the exact IB or IGCSE subject and level. Many families find the choice of specialists far better than a local search gives." },
    { question: "Is there any IB or IGCSE school in Hansi?", answer: "We could not confirm one. Hansi's schools teach the Haryana Board and CBSE, and nearby Hisar is similar. The nearest schools confirmed as offering these curricula are in Gurgaon, Delhi and Chandigarh, for example Amity International School in Sector 46 and GD Goenka World School at Sohna. Please check any school's current programmes directly before making plans." },
    { question: "Can my child take IGCSE at home as a private candidate?", answer: "Yes, for IGCSE. Cambridge and Pearson Edexcel both allow private candidates to enter through an approved exam centre, sometimes with an alternative-to-practical paper in the sciences. The IB Diploma cannot be taken this way and needs an authorised IB World School. A tutor can plan the course and explain what to ask the centre." },
    { question: "How much does an IB or IGCSE tutor cost for a Hansi student?", answer: "The rate depends on the programme, subject and level, lesson length and the tutor's recent experience of the syllabus. It is quoted in writing before the free trial and does not change. There is no distance charge because lessons are online. We do not publish fixed prices, since a Higher Level Diploma subject and IGCSE Core differ." },
    { question: "Will a tutor write my child's IA or Extended Essay?", answer: "No. Tutors coach and mark; they do not write, rewrite or complete any assessed work, including the Internal Assessment, Extended Essay, TOK essay and IGCSE coursework. They can help choose a workable question, explain criteria and give feedback on drafts. That keeps the work the student's own, which is what the IB and Cambridge require." },
    { question: "Which IB subjects do your tutors cover for Hansi students?", answer: "Both Maths courses at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, ESS, Geography, History and Hindi B, along with TOK and Extended Essay guidance. If your subject is unusual, tell us early and we will confirm availability before the trial." },
    { question: "Is online tuition effective for a student in Hansi?", answer: "Yes, provided the home has stable internet and a quiet place to work. A shared whiteboard, screen-shared past papers and recorded lessons cover most of what an in-room tutor would offer, and they open access to specialists from across India. Families plan for summer power cuts with a backup time and a mobile hotspot." },
    { question: "Does the winter fog affect lessons?", answer: "Fog disrupts travel, not online lessons, which is one reason families in the Hansi belt like them. A student can study on a foggy January morning without a cold journey to Hisar. The exception is a power or network problem, for which we keep a backup slot so that no lesson is lost." },
    { question: "When should we start IB or IGCSE tutoring?", answer: "As early as possible: Class 11 for the Diploma, Grade 9 for IGCSE, and several months before a planned move into an IB school. A longer start lets the tutor fix foundations and build exam style before internal deadlines. A later start still helps if lessons focus on the highest-value topics and on timed practice." },
    { question: "Can tutoring help my child move from CBSE or the Haryana Board to an IB school?", answer: "Yes, and this is one of the most common reasons families ask. The main gap is style: command words such as evaluate and justify, coursework planning and extended writing in English. A bridge programme of several months teaches these, using samples of criterion-based answers, so the first term in the new school feels manageable." },
    { question: "Do you teach Hindi?", answer: "Yes. IB Hindi B and IGCSE Hindi as a Second Language are covered, and English is available across all programmes. Students who speak Haryanvi or Hindi at home often do well in the oral component, and tutors focus on the text types and written formats that examiners reward." },
    { question: "Is there a free trial lesson?", answer: "Yes. Every family gets a free trial lesson, taught online with the tutor matched to your child's subject and level. It is a real lesson on a syllabus topic. You can continue, ask for a different tutor or stop. The rate is agreed in writing before the trial, so there are no surprises." },
    { question: "Can lessons take place on weekends or in the evening?", answer: "Yes. Weekday evenings and weekend mornings are the most common slots in Hansi, and many families use them around the school day and farm work. Tell the tutor about harvest weeks or festivals, and they will plan lighter weeks and catch-up blocks so nothing is lost." },
    { question: "How are tutors checked before being introduced?", answer: "We look at qualifications, how recently the tutor taught the exact syllabus, and their understanding of current mark schemes and criteria. The free trial then lets you test the fit directly. For a place like Hansi, where no local pool exists, recent and relevant experience is the standard we apply." },
    { question: "Is IB Gram linked to any school or exam board?", answer: "No. IB Gram is independent of the International Baccalaureate Organization, Cambridge, Pearson and every school named on this page. School names are there to help families understand what exists around Hansi. Tutors follow the published syllabus and, where relevant, the calendar of the school your child attends." },
    { question: "What if we are not happy with the tutor?", answer: "Tell us and we will arrange another one. Reviews every few weeks are designed to catch a poor fit early, and no student is asked to stay with a tutor who is not helping. There is no long contract, so pausing or stopping costs nothing." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online IB and IGCSE tutoring works across Indian cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The place where tutor visits to a home are offered." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB subjects and programmes explained." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, internal assessments, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the PYP Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches compared with Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and book a free trial." },
    { label: "IB and IGCSE tutoring in Hisar", href: "/hisar/", description: "The nearest big city, 26 km west of Hansi." },
    { label: "IB and IGCSE tutoring in Rohtak", href: "/rohtak/", description: "Haryana neighbour on the road to Delhi." },
    { label: "IB and IGCSE tutoring in Bhiwani", href: "/bhiwani/", description: "Another Haryana town with an online-only page." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor for your Hansi child",
  closingBody:
    "Tell us the board or programme, subject and level, where your child stands now and which hours work at home in Hansi. A tutor's background and trial slots come back within a short time, online and one to one, with no fee and no obligation. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115.",
};
