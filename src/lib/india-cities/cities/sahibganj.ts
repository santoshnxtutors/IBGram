import type { CitySeoPage } from "../types";

/**
 * /sahibganj/ - IB and IGCSE tutoring page for Sahibganj, Jharkhand. No IB or Cambridge/Edexcel
 * school is confirmed in Sahibganj, so stripSchools is empty and the clusters point to Kolkata and
 * Delhi NCR using names already verified on deoghar.ts and ranchi.ts. In-person home tuition is
 * offered only in Gurugram and parts of Delhi NCR.
 */
export const sahibganj: CitySeoPage = {
  slug: "sahibganj",
  countryName: "Sahibganj",
  countryNameLong: "Sahibganj, Jharkhand",
  demonym: "Sahibganj",
  state: "Jharkhand",
  stateCode: "IN-JH",
  flagCode: "in",
  countryCode: "IN",
  region: "Jharkhand, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are planned around the Ganga flood months, Chhath and Durga Puja, the long humid summer and the hours when the power and broadband at your end are dependable",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.2426, longitude: 87.6427 },
  wikipedia: "https://en.wikipedia.org/wiki/Sahibganj",
  alternateNames: ["Sahebganj", "Sahebgunj"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sahibganj | Online Home Tuition",
  metaDescription:
    "Live online IB and IGCSE tutors for Sahibganj, Jharkhand: DP, MYP, PYP, Cambridge and Edexcel, taught one to one at home, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sahibganj",
  heroEyebrow: "IB & IGCSE TUITION FOR SAHIBGANJ FAMILIES, TAUGHT ONLINE",
  heroSubtitle:
    "If you are searching for IB or IGCSE home tuition in Sahibganj, the honest position is that nobody teaches either curriculum in the town and our tutors do not visit homes here. Private tuition from home still works, delivered online: a live one-to-one lesson on a laptop, with a tutor who knows your child's exact subject and level, scheduled around Ganga-side life and the Jharkhand school calendar.",
  primaryKeyword: "IB and IGCSE tutors in Sahibganj",
  imageAltText: "A Sahibganj student working through an IB Chemistry problem with an online tutor during a live video lesson at home",
  secondaryKeywords: [
    "IB tutor Sahibganj",
    "IGCSE tutor Sahibganj",
    "IB home tuition Sahibganj",
    "IGCSE home tuition Sahibganj",
    "IB private tuition Sahibganj",
    "IB Maths tutor Sahibganj",
    "IGCSE Maths tutor Sahibganj",
    "IB Physics tutor Sahibganj",
    "IB Chemistry tutor Sahibganj",
    "IB Biology tutor Sahibganj",
    "IB DP tutor Sahibganj",
    "IB MYP tutor Sahibganj",
    "IB PYP tutor Sahibganj",
    "IGCSE online tuition Sahibganj",
    "IB tutor Sahebganj Jharkhand",
    "IGCSE tutor Rajmahal",
    "IB tutor Barharwa Barhait",
    "online IB tuition Jharkhand",
    "Cambridge IGCSE private candidate Jharkhand",
  ],

  heroTrustPoints: [
    "Tutors who have recently taught the exact IB or IGCSE subject and level",
    "All lessons are live on screen; visiting tutors exist only in Gurugram and parts of Delhi NCR",
    "A complete trial lesson first, free of charge",
    "Independent of schools, exam boards and the Jharkhand Academic Council",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "IB stages supported" },
    { value: "Cambridge or Edexcel", label: "IGCSE boards taught" },
    { value: "IST", label: "No time-zone gap" },
    { value: "Trial lesson free", label: "Before any commitment" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition looks like for a family in Sahibganj",
    paragraphs: [
      "Sahibganj is a Ganga port town in the north-east corner of Jharkhand, close to the Bihar and West Bengal borders, with the Rajmahal hills behind it and the river in front. Its schools teach the Jharkhand Academic Council syllabus and CBSE. No school in the town is confirmed to offer the IB or a Cambridge or Pearson Edexcel IGCSE, so a student who wants either does most of the learning with one of our IB and IGCSE tutors in Sahibganj, online.",
      "The families who reach out are few but purposeful. Some have children aiming at medicine, engineering or management abroad, where an international record stands out. Some have relatives in Kolkata, Delhi or the Gulf and are weighing a relocation. Some are railway, bank or government families who expect a posting to a larger city with an IB school. Others simply want a richer, discussion-based education than the regional boards offer and are willing to use a screen to get it.",
      "We should be plain about format. A tutor does not call at a Sahibganj house. In-person tutoring is offered only in Gurugram and parts of Delhi NCR, several days away by train, so all lessons here are online. A child sits at home, joins a link and works with a tutor matched to the syllabus, board and level. Because the teaching happens online, the pool is all of India rather than one small district.",
      "IB Gram is independent. It has no tie to the IB, Cambridge, Pearson or any school on this page. Tutors explain, rehearse and mark. They never write an Internal Assessment, an Extended Essay, a TOK essay or coursework for any student, and we state that up front.",
    ],
    bullets: [
      "IB PYP, MYP and DP, and Cambridge or Pearson Edexcel IGCSE",
      "Live private lessons with a shared whiteboard and genuine past papers",
      "Chosen by families planning a move, a boarding place or study abroad",
      "A written summary after each lesson and a free first lesson",
      "No visits to homes in Sahibganj; in-person tutoring is confined to Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Since no school in Sahibganj runs an IB programme, these four stages arrive by another route: a transfer, a hostel place in a bigger city, or overseas study plans. What a tutor does at each stage is quite different.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "The PYP replaces a timetable of separate subjects with units built on open questions, and ends with the Exhibition, where each child presents a study of their own. Support at this stage means reading together, steady number work and encouraging a child to explain an idea in full sentences.",
      countryNote:
        "For a Sahibganj child, PYP tutoring usually prepares for a move to a school in Kolkata or the NCR, focusing on spoken English and confidence in questioning rather than on any local syllabus.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Teachers mark each MYP subject against four published criteria, and the final year includes a student-designed Personal Project. Content is seldom the obstacle; matching an answer to what the criterion descriptor says is.",
      countryNote:
        "A student who has studied under the Jharkhand board will meet criterion-based marking for the first time, so tutors begin with short written answers in science and humanities and build outwards.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Diploma combines six subjects, three at Higher and three at Standard Level, with Theory of Knowledge, an Extended Essay and a service strand. Internal assessments feed into subject grades, and final papers are sat together in a single May session.",
      countryNote:
        "Enrolment at an authorised school is compulsory for the Diploma, so a Sahibganj student on it lives elsewhere; tutoring helps with HL Maths, Physics, Chemistry and Economics in particular.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP asks a student to take at least two Diploma courses alongside a career-related study, personal skills and a reflective project. Few Indian schools offer it, but the Diploma courses inside it are assessed just as strictly.",
      countryNote:
        "No school in or near Sahibganj teaches CP; a family meeting it elsewhere needs standard Diploma-course coaching.",
    },
  ],

  subjectsIntro:
    "Jharkhand students often come with strong Maths and Science but less practice in extended English writing, which shapes how we plan an IB course. The exact course code and level, the exam month and the student's starting point are settled first, then a tutor is chosen.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "A good match for students from JEE-minded households; HL Paper 3 tests reasoning on problems with no familiar template." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator technique carry the course, so regular practice with the graphic calculator matters." },
    { name: "IB Physics", levels: "HL / SL", description: "Expect explanation as well as calculation; a good answer says why a result holds, not only what it is." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Equilibrium, kinetics and organic synthesis carry the heavy marks, and the data booklet should feel like a familiar tool." },
    { name: "IB Biology", levels: "HL / SL", description: "Diagrams, terminology and data-based questions are examined, and the IA relies on sensible statistics." },
    { name: "IB Economics", levels: "HL / SL", description: "Students can draw on Jharkhand's mining, rail and river-trade economy for real, specific examples in long answers." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers reward links between theory and the firm described, and the IA needs a cooperative organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Learners from Hindi, Bhojpuri or Urdu homes benefit from graded reading and practice on unseen texts." },
    { name: "IB Computer Science", levels: "HL / SL", description: "The theory paper assesses algorithm design and systems knowledge separately from the coded IA project." },
    { name: "IB Psychology", levels: "HL / SL", description: "Named studies with accurate evaluation and a clear essay structure make up most of the marks." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "River systems, flooding and mining's land impact around the Ganga and Rajmahal hills give natural case material." },
    { name: "IB Geography", levels: "HL / SL", description: "The fieldwork question must be answerable with data a student can gather and repeat." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and sustained argument are separate skills, each rehearsed on its own." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Speakers of Bhojpuri, Maithili or Santhali at home still need work on the written text types and the oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "The aim is to hold a view and then test it against a counter-argument, which takes regular conversation." },
  ],

  igcseSubjectsIntro:
    "For Sahibganj students IGCSE is usually a two-year course taken alone as a private candidate, or a preparation for A Levels or the IB in a larger city. Tutors cover the content, the tier decision and the practical-skills paper that replaces a laboratory exam.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Marks follow working as well as answers, so habits of setting out matter from the first lesson." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Brings calculus and vector work forward and suits a student who is comfortable with algebra." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "The content overlaps with Cambridge, but question style differs, so past papers from this board are essential." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Private candidates rehearse the alternative-to-practical paper by planning experiments on paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Test-tube identification, calculations and organic names need spaced repetition rather than last-minute study." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Extended answers reward sequences and exact terms, both of which can be practised weekly." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Everyday examples, from river-port trade to mandi prices, make the concepts concrete." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Flowcharts, pseudocode and binary logic are learned best by solving small problems on screen." },
    { name: "IGCSE First Language English 0500", levels: "Grade 9-10", description: "A student from a Hindi-speaking home may prefer English as a Second Language 0510, and we advise on the choice." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Often a confident scoring subject that balances a demanding set of sciences." },
  ],

  regionsTitle: "Sahibganj district areas we teach students from, online",
  regionsIntro:
    "Every lesson is online, so the place a student lives affects timing and connectivity rather than travel: where the river floods, how steady the broadband is on the hill side, and how long the day at a CBSE school or a family shop runs.",
  regions: [
    { name: "Sahibganj town centre and the station area", note: "The commercial heart on the Ganga rail line, where many railway, bank and government families live; evening lessons are popular." },
    { name: "The Ganga ghats and riverfront", note: "The port side of town, central to trade on National Waterway 1; flood months affect some lanes, so a backup slot is wise." },
    { name: "Near Sahibganj College", note: "An institutional belt for the town's only college, with many students and teachers in the household." },
    { name: "Rajmahal", note: "A historic Mughal-era capital south of the town on the Ganga, where families often balance schooling with farming or trade." },
    { name: "Barharwa", note: "A rail junction town in the district, with a mix of CBSE and state-board schools and a busy commuting population." },
    { name: "Barhait", note: "A block town in the Santhal Pargana, associated with Bhognadih where the 1855 Santhal uprising began; families often speak Santhali and Hindi." },
    { name: "Taljhari", note: "A smaller block town near the Rajmahal hills, where connectivity can be patchy and lessons suit weekend mornings." },
    { name: "Mirzachowki", note: "A stone-quarry and market town in the district; shift patterns in local industry influence when lessons are practical." },
    { name: "Udhwa", note: "Known for the Udhwa lake bird sanctuary; a quiet rural area where a fixed backup slot helps in the rains." },
    { name: "Pathna and Borio", note: "Rural blocks in the district's south and west, where some households have members working in Kolkata or the Gulf." },
  ],

  schoolDisclaimer:
    "IB Gram is independent and has no partnership with any school named here, nor with the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. School names are drawn from public directories and school sites; programmes can change, so please check with each school directly.",
  schoolClusters: [
    {
      city: "Sahibganj itself",
      note: "We found no school in Sahibganj confirmed to teach the IB or a Cambridge or Edexcel IGCSE syllabus. Local schooling follows the Jharkhand Academic Council and CBSE, and Jawahar Navodaya Vidyalaya serves the district for gifted rural students.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "Roughly 350 kilometres away by rail, Kolkata is the closest big city with long-established IB schools, and a common destination for boarding or eventual relocation.",
      schools: ["Calcutta International School", "The Heritage School", "Oaktree International School"],
    },
    {
      city: "Nearby: Delhi NCR boarding routes",
      note: "A smaller number of families look at boarding in Gurugram, reached by the Howrah-Delhi rail lines; it is also the one place where IB Gram tutors visit homes.",
      schools: ["Pathways World School", "GD Goenka World School"],
    },
    {
      city: "Nearby: Ranchi and Bhagalpur",
      note: "Ranchi, the state capital, has no confirmed IB school in our checks, and Bhagalpur in Bihar is the same; both matter mainly for universities and exam centres.",
      schools: [],
    },
  ],

  modesIntro:
    "Online one-to-one is the only format offered in Sahibganj. Choice lies in how it is used: a weekly lesson all year, a catch-up plan for a change of board, or a concentrated block before an exam series.",
  modes: [
    {
      title: "Regular weekly lessons online",
      description:
        "A fixed slot each week with the same tutor, working from the syllabus and past papers on a shared whiteboard.",
      bullets: [
        "Works for PYP, MYP, DP and IGCSE learners",
        "Continuity with one tutor who knows the gaps",
        "Lessons can be recorded for revision",
        "Easy to move a slot for a flood day or festival",
      ],
    },
    {
      title: "Board-switch preparation",
      description:
        "A planned course for a student moving from the Jharkhand board or CBSE to an IB or IGCSE school, covering command words, extended writing and coursework habits before the move.",
      bullets: [
        "Diagnostic lesson in the first week",
        "Sample criterion-based answers to study",
        "Early practice with investigations and lab reports",
        "Parent summary every few weeks",
      ],
    },
    {
      title: "Exam block before May or the autumn series",
      description:
        "A run of lessons concentrated into the last weeks before papers, with timed questions, prompt marking and work on the topics that lose the most marks.",
      bullets: [
        "Three or four lessons a week at peak",
        "Marking against the live mark scheme",
        "Scheduled around power-cut-prone afternoons",
        "Best planned two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Sahibganj, or nearby?",
      paragraphs: [
        "We found no school in Sahibganj that is confirmed to teach the IB or a Cambridge or Pearson Edexcel IGCSE syllabus. Education in the district follows the Jharkhand Academic Council and CBSE, with Jawahar Navodaya Vidyalaya serving talented rural children. A family wanting an international curriculum must therefore look outside Sahibganj, or learn through tutoring.",
        "Nor does the wider region change the picture much. Ranchi, the capital, and Bhagalpur across the Bihar line did not show confirmed IB schools in our checks. The nearest established IB schools are in Kolkata: Calcutta International School, The Heritage School and Oaktree International School, all roughly 350 kilometres away.",
        "Delhi NCR is the other destination. Pathways World School and GD Goenka World School are well-known boarding options in and near Gurgaon, reached by the Howrah-Delhi rail lines. These are big decisions and most families consider them only when a parent's posting or business allows a move.",
        "Others stay and study IGCSE as a private candidate, registering through an approved exam centre and learning with a tutor. The IB Diploma cannot be done that way, because it needs enrolment at an IB World School. A tutor can help families work out which route suits a child's stage.",
      ],
      table: {
        caption: "IB and IGCSE options reachable from Sahibganj",
        columns: ["Route", "Where", "Comment"],
        rows: [
          ["Jharkhand board or CBSE with online tutoring", "Sahibganj", "Keeps the child at home while adding IGCSE or IB-style preparation"],
          ["Kolkata schools", "Kolkata, about 350 km", "Calcutta International School, The Heritage School, Oaktree International School"],
          ["Delhi NCR boarding", "Gurugram and nearby", "Pathways World School, GD Goenka World School"],
          ["Private-candidate IGCSE", "Approved exam centre", "Possible for IGCSE, not for the IB Diploma"],
        ],
      },
      bullets: [
        "No confirmed IB or Cambridge school in Sahibganj",
        "Kolkata is the closest city with established IB schools",
        "Private-candidate IGCSE works; the IB Diploma needs a school",
        "Confirm current programmes directly with each school",
      ],
    },
    {
      heading: "How does the Jharkhand board differ from IB and IGCSE study?",
      paragraphs: [
        "In the Jharkhand Academic Council and CBSE systems, success depends heavily on covering the textbook and repeating its content accurately in a timed paper. IB and IGCSE ask students to use what they know on a question that looks different. A biology question may hand over unfamiliar data and ask the student to draw a conclusion.",
        "Internal assessment is another difference. Regional boards count practicals and projects lightly, whereas an IB internal assessment may carry a fifth to a third of a subject grade and IGCSE includes coursework or practical papers in some subjects. Students must learn to plan, work independently over weeks and revise their own drafts.",
        "English is the quiet hurdle. An IB answer is graded on clarity and structure, even in Physics, and a student who has studied in Hindi may need time to gain exact scientific vocabulary in English. This is very fixable with regular practice.",
        "Students with a solid Maths and Science base often adapt quickly once the style is clear. The change calls for a different way of studying, not more hours.",
      ],
      table: {
        caption: "Board comparison for a Sahibganj family",
        columns: ["Feature", "Jharkhand board", "CBSE", "IB and IGCSE"],
        rows: [
          ["Main test", "Recall of textbook content", "Application within a known pattern", "Reasoning on unfamiliar questions"],
          ["Independent work", "Light", "Light to moderate", "Substantial, and formally marked"],
          ["Language of instruction", "Hindi or English", "English or Hindi", "English, with language subjects separately"],
          ["Global recognition", "Limited", "Moderate", "Broad"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tutoring cost for a Sahibganj family?",
      paragraphs: [
        "Four factors set the fee: the programme, the subject and level, the length of a lesson and how recently the tutor has taught that exact syllabus. Higher Level Diploma subjects are priced above IGCSE Core because fewer teachers have current experience. You see the rate in writing before the trial, and it stays as agreed.",
        "Distance is irrelevant because nobody travels. A tutor based in Bengaluru costs the same as one in Kolkata or Delhi. Families sometimes compare this with private tutors in Sahibganj, who charge reasonably for school subjects but do not know the IB or IGCSE mark schemes.",
        "A low hourly rate may still be poor value. A tutor who has coached students through Cambridge practical papers or IB Paper 3 can do in one hour what another needs two for. It helps to ask what the tutor has taught and how they give feedback.",
        "Nothing is locked in. Families can pause for exams, floods or festivals, ask for another tutor if the fit is wrong, and review progress every few weeks. No price list is published, because the answer depends on the four factors listed.",
      ],
      bullets: [
        "Programme, subject, level and lesson length set the rate",
        "No distance charge; lessons are online",
        "Rate is agreed in writing before the free trial",
        "No long contract; pause or change tutor at any time",
      ],
    },
    {
      heading: "Online tutor or local coaching: what actually suits Sahibganj?",
      paragraphs: [
        "The tuition market in Sahibganj serves the boards and competitive exams students in Jharkhand and Bihar sit: Class 10 and 12 papers, JEE, NEET and government recruitment tests. Nothing in it is set up for IB or IGCSE, simply because too few students would fill a batch.",
        "Local private tutors help with confidence and daily work, particularly in Maths and Science. Few have marked to an IB or Cambridge scheme, and even fewer can teach the coursework side, so a bright student may end up well taught in the wrong style.",
        "Self-study has its place, especially for IGCSE Mathematics and Physics, where past papers are free and answers are checkable. It is weakest where judgement is needed: a lab write-up, a long essay or an Extended Essay plan.",
        "An online tutor chosen for the exact syllabus avoids the shortage, but needs a dependable connection. In Sahibganj that means planning for power cuts in the hot months and for flooding in the rains, with a backup slot agreed in advance.",
      ],
      table: {
        caption: "Comparing support choices in Sahibganj",
        columns: ["Choice", "Suited to IB or IGCSE?", "Attention", "Main limit"],
        rows: [
          ["Online one-to-one tutor", "Yes, matched to board and level", "Individual", "Requires stable power and internet"],
          ["Local coaching for boards, JEE or NEET", "No", "Batch", "No IB or IGCSE content"],
          ["Local private tutor", "Seldom", "Individual", "Not trained on IB or Cambridge marking"],
          ["Self-study with past papers", "Partly", "None", "No feedback on essays or coursework"],
        ],
      },
    },
    {
      heading: "How do the Ganga floods, festivals and heat shape the school year?",
      paragraphs: [
        "The Ganga rules the Sahibganj calendar. Between July and September the river rises, parts of the lowlands flood and roads to some blocks become difficult. Schools may close for days, and families plan journeys carefully. Online lessons do not need travel, but power and mobile signal can suffer, so a backup slot is part of every plan here.",
        "Festivals follow. Durga Puja and Dussehra in autumn, Diwali soon after, then Chhath, a major occasion in this region, each bring school breaks, visitors and long days of preparation. Sarhul and Karma matter in the Santhal and tribal communities. Tutors who know the calendar propose lighter weeks and catch-up blocks.",
        "Heat shapes the rest of the year. Summers are long and humid, afternoons can be uncomfortable for study, and power cuts are common. Early morning and evening slots suit most families. Winter is mild and often the most productive time for long revision.",
        "The exam dates stay fixed. The IB Diploma papers fall in May, while Cambridge and Edexcel run their own series, so the study plan should leave room for the flood months rather than treating them as an afterthought.",
      ],
      table: {
        caption: "A Sahibganj year and its study effects",
        columns: ["Time of year", "Local pattern", "Study effect"],
        rows: [
          ["July to September", "Ganga floods and monsoon", "Travel and power disrupted; keep a backup slot"],
          ["October to November", "Durga Puja, Diwali and Chhath", "Long breaks; plan catch-up blocks"],
          ["December to February", "Mild winter, Jharkhand board exams", "A good period for revision and IA drafting"],
          ["March to May", "Rising heat, IB May papers", "Early-morning sessions; exam sprint"],
          ["June", "Heat, Hul Diwas on 30 June", "IGCSE summer series end; rest and review"],
        ],
      },
      bullets: [
        "IB Diploma written papers: May session",
        "Cambridge IGCSE: February and March, May and June, October and November series",
        "Pearson Edexcel IGCSE: January, May and June, October and November",
        "Confirm exact dates with your exam centre",
      ],
    },
    {
      heading: "Where can an IB or IGCSE student from Sahibganj go next?",
      paragraphs: [
        "IB and IGCSE students from Sahibganj can apply to universities in India and abroad. The Association of Indian Universities treats the IB Diploma as equivalent to Class 12 for admission, and IGCSE followed by A Levels is treated comparably. Every institution publishes its own rules, which should be checked against your child's exact subject mix.",
        "Entrance tests in India have their own rules. CUET-UG admits students from several boards, and students from the IB should look at how its syllabus compares with NCERT. JEE Main and NEET have eligibility conditions for international-board students that change from year to year, so read the current bulletins before committing.",
        "Institutions close to home include Sido Kanhu Murmu University in Dumka, Tilka Manjhi Bhagalpur University across the state line, and, further afield, IIT (ISM) Dhanbad, BIT Mesra and NIT Jamshedpur in Jharkhand and colleges in Kolkata. Abroad, the UK, Canada, Australia and Singapore are common targets for IB students.",
        "Whichever door a student aims at, the subject grades open it. Tutors therefore concentrate on the marks that admission offices read: Maths, the sciences and English.",
      ],
      table: {
        caption: "Next steps after IB or IGCSE from Sahibganj",
        columns: ["Pathway", "Useful facts", "Check"],
        rows: [
          ["Indian universities", "IB Diploma recognised by AIU", "Each institution's eligibility notice"],
          ["CUET-UG, JEE Main, NEET", "Eligibility for international boards is specific", "Current information bulletin"],
          ["Kolkata and eastern colleges", "Close, affordable and well connected", "Subject and entrance requirements"],
          ["Study abroad", "IB points or A Level grades drive offers", "Country and course prerequisites"],
        ],
      },
    },
    {
      heading: "IB Maths AA or AI, and how the sciences work online",
      paragraphs: [
        "Choosing between Analysis and Approaches and Applications and Interpretation is the first big decision. AA is deeper in algebra, functions and calculus and suits a student planning engineering or pure science. AI centres on statistics, modelling and technology and suits economics, business or social sciences. HL of either demands sustained effort.",
        "Online teaching suits mathematics well. Tutor and student write on the same digital board, so working is visible and errors are caught early. Recordings let a student replay a derivation before a test, which is handy in a town where no class is available to repeat.",
        "The sciences combine theory with an investigation of the student's own design. Tutors help plan a question that can be tested with kitchen or school equipment, discuss uncertainty and review drafts, but the work itself is the student's. Weekly data-response practice builds fluency.",
        "A student from a JEE-oriented background may find IB sciences wider and more written. Tutors move revision from memorised derivations toward explanations, using past papers to show what earns marks.",
      ],
      bullets: [
        "AA for future engineers and mathematicians; AI for economics and social sciences",
        "A shared whiteboard keeps working visible",
        "Investigations are coached, never written for the student",
        "Past papers show how marks are awarded",
      ],
    },
    {
      heading: "Choosing IGCSE tiers and subjects from Sahibganj",
      paragraphs: [
        "Many Cambridge IGCSE subjects offer a Core or Extended paper. Core caps the top grade at C and suits a student who wants a manageable load. Extended reaches A star and is the right choice for a student who may do A Levels or the IB Diploma in sciences or mathematics.",
        "A student from Sahibganj planning to move to a Kolkata IB school should take Extended Mathematics and sciences, with Additional Mathematics as a stretch. Core can work for supporting subjects to keep the workload humane.",
        "Board choice matters. Cambridge and Pearson Edexcel papers differ in layout and in how practical skills are assessed, and private candidates must check which series and subjects an exam centre can enter. A tutor who knows both boards can explain the differences before registration.",
        "Think of the whole spread. Most universities want English, mathematics, a science and a humanity or language. A Hindi credit is an easy addition for a Hindi-speaking home and helps round out a record.",
      ],
      bullets: [
        "Extended for anyone aiming at HL sciences or Maths later",
        "Core for a manageable, confidence-building course",
        "One board per subject, with that board's past papers",
        "A balanced spread of subjects",
      ],
    },
    {
      heading: "How do we begin with an IB or IGCSE tutor in Sahibganj?",
      paragraphs: [
        "The first step is a short message giving the board or programme, the subject and level, your child's current standing and the hours that work at home. We reply with a tutor who has recently taught that syllabus, together with their background and trial slots.",
        "The trial lesson is real teaching on a topic from your child's syllabus. You see how the tutor explains and your child judges whether the pace feels comfortable. If it does not, we arrange another tutor.",
        "After the trial, we set a first-month plan and confirm the rate in writing. A note follows each lesson, and a fuller review every few weeks shows where the student stands against the syllabus.",
        "Private candidates get extra help: tutors explain how registration through an approved centre works and what to ask. We do not register students; that stays with you and the centre.",
      ],
    },
  ],

  tutorsIntro:
    "All tutors teach from India on IST and have recent experience of the syllabus they offer. A Sahibganj family is matched first on board, subject and level, then on the hours the household can really use.",
  process: [
    { title: "Send a brief", description: "Tell us the programme or board, subject, level, current grade and times." },
    { title: "Hear back with a tutor", description: "We share a tutor's background and trial slots for your subject." },
    { title: "Attend a free trial", description: "Your child works through a real topic online with the tutor." },
    { title: "Agree the plan", description: "Rhythm and rate are confirmed in writing before lessons start." },
    { title: "Follow progress", description: "A note after each lesson and a review every few weeks." },
  ],
  whyPoints: [
    { title: "Syllabus-specific tutors", description: "Chosen for recent teaching of your exact board, subject and level." },
    { title: "Frank about local options", description: "We state plainly that Sahibganj has no confirmed IB or Cambridge school." },
    { title: "Individual lessons", description: "One tutor, one student, no batches." },
    { title: "Written updates", description: "Parents receive a short note after every lesson." },
    { title: "Integrity first", description: "Tutors coach and mark but never write assessed work." },
    { title: "Easy switch of tutor", description: "If the fit is poor, another tutor is arranged promptly." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE home tutors in Sahibganj?", answer: "Not tutors who visit. IB Gram tutors do not come to homes in Sahibganj, since home visits run only in Gurugram and parts of Delhi NCR. We offer online home tuition instead: a live one-to-one lesson that your child takes at home on a laptop, with a tutor matched to the exact IB or IGCSE subject and level. The range of specialists is much wider than a local search would give." },
    { question: "Does Sahibganj have an IB or IGCSE school?", answer: "We could not confirm one. Schools in Sahibganj follow the Jharkhand Academic Council or CBSE. The nearest IB schools we could confirm are in Kolkata, including Calcutta International School, The Heritage School and Oaktree International School, and boarding options in Delhi NCR such as Pathways World School. Please check each school's current programmes before planning." },
    { question: "Can my child do IGCSE as a private candidate from Sahibganj?", answer: "Yes, for IGCSE. Cambridge and Pearson Edexcel both let private candidates enter through an approved exam centre, often with an alternative-to-practical paper in the sciences. The IB Diploma has no private route and requires enrolment at an IB World School. Tutors can plan the whole course and explain what to ask the centre." },
    { question: "What does IB or IGCSE tuition cost in Sahibganj?", answer: "The rate depends on programme, subject and level, lesson length and the tutor's recent experience of the syllabus. It is given in writing before the free trial and does not change. There is no distance charge because the lesson is online. We do not publish a price list, since Higher Level Diploma subjects and IGCSE Core differ." },
    { question: "Will a tutor write the Internal Assessment or Extended Essay?", answer: "No. Tutors coach and mark; they do not write, rewrite or complete any assessed work, including the IA, Extended Essay, TOK essay and IGCSE coursework. They can help choose a workable question, clarify the criteria and give feedback on drafts. This protects the student's integrity, which the IB and Cambridge insist on." },
    { question: "Which IB subjects do you cover for Sahibganj students?", answer: "Both Maths courses at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, ESS, Geography, History and Hindi B, plus TOK and Extended Essay guidance. If your subject is less common, tell us early so we can confirm a tutor before the trial." },
    { question: "Is online tuition reliable in Sahibganj given power and network problems?", answer: "It works well with some planning. Families keep a backup time, a mobile hotspot and, where possible, an inverter or power bank. If a flood or storm takes out power, the lesson is rescheduled at no cost. Recorded lessons and written notes keep continuity during short gaps." },
    { question: "Do Ganga floods affect lessons?", answer: "Floods mostly affect travel and power rather than online lessons themselves. A student who cannot reach a school can still study at home if the connection holds. Families in flood-prone lanes and blocks usually agree an alternative slot in advance and tell the tutor when the river is rising." },
    { question: "When should we start IB or IGCSE tutoring?", answer: "Earlier is gentler: Class 11 for the Diploma, Grade 9 for IGCSE, and several months before any planned move to an IB school. That leaves time to fix foundations and build exam style. A late start still helps if tutoring targets the highest-value topics and timed papers." },
    { question: "Can tutoring ease a move from the Jharkhand board or CBSE to an IB school?", answer: "Yes. The main gap is style, not content: command words such as evaluate, coursework planning and extended English writing. A bridge programme over several months teaches these skills with sample answers, so the first term in the new school is manageable rather than shocking." },
    { question: "Do you support Hindi, Bhojpuri or Santhali speakers?", answer: "Hindi B at IB and Hindi as a Second Language at IGCSE are covered, and English is available for all programmes. Bhojpuri and Santhali are not examined by the IB or Cambridge, but tutors understand multilingual homes and can explain English terms through familiar words where that helps." },
    { question: "Is there a free trial lesson?", answer: "Yes. Every family receives a free trial taught online by the tutor matched to your child. It is a real lesson on a syllabus topic. You can continue, ask for a different tutor or stop. The rate is agreed in writing before the trial, so nothing changes afterwards." },
    { question: "Can lessons happen in the evening or at weekends?", answer: "Yes. Most Sahibganj families choose early mornings, evenings or weekend slots, avoiding the hottest hours and school time. Tell the tutor about Chhath, Durga Puja, flood weeks and exam dates, and they will plan lighter and heavier weeks accordingly." },
    { question: "How are tutors verified?", answer: "We check qualifications, recent teaching of the exact syllabus and understanding of current mark schemes before introducing a tutor. The free trial lets you test the fit directly. With no local specialists in Sahibganj, recent and relevant experience is the standard we rely on." },
    { question: "Is IB Gram affiliated with any school or exam board?", answer: "No. IB Gram is independent of the International Baccalaureate Organization, Cambridge, Pearson and every school named on this page. Names are given only to help families see what exists near Sahibganj. Tutors follow the published syllabus and, where relevant, the calendar of your child's school." },
    { question: "What if we do not like the tutor?", answer: "Tell us and we will arrange another one. Reviews every few weeks aim to catch a poor fit early, and nobody is asked to stay with a tutor who is not helping. There is no long contract, so pausing or stopping costs nothing." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online IB and IGCSE tutoring works across Indian cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where tutor visits to a home are offered." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB subjects and programmes explained." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the PYP Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI compared." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial." },
    { label: "IB and IGCSE tutoring in Ranchi", href: "/ranchi/", description: "The Jharkhand capital, for exam and university context." },
    { label: "IB and IGCSE tutoring in Deoghar", href: "/deoghar/", description: "Another Santhal Pargana town with an online-only page." },
    { label: "IB and IGCSE tutoring in Bhagalpur", href: "/bhagalpur/", description: "The nearest large city across the Bihar border." },
  ],

  closingHeading: "Try a free online lesson with an IB or IGCSE tutor for Sahibganj",
  closingBody:
    "Send the programme or board, subject and level, your child's present grade and the hours that suit your Sahibganj home. A tutor's background and trial slots will follow, taught online and one to one, free and without obligation. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
