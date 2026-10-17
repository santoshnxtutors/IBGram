import type { CitySeoPage } from "../types";

/**
 * /sakti/ - IB and IGCSE tutoring page for Sakti, Chhattisgarh. No school in Sakti is confirmed to teach IB or
 * Cambridge/Edexcel IGCSE, so stripSchools is empty and clusters use the Raipur and Nagpur names already
 * verified on the Bilaspur page. All lessons online.
 */
export const sakti: CitySeoPage = {
  slug: "sakti",
  countryName: "Sakti",
  countryNameLong: "Sakti, Chhattisgarh",
  demonym: "Sakti",
  state: "Chhattisgarh",
  stateCode: "IN-CT",
  flagCode: "in",
  countryCode: "IN",
  region: "Chhattisgarh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and Sunday slots that work around the long summer heat, Hareli and Teeja weeks and the Diwali fortnight",
  lastUpdated: "2026-09-21",
  geo: { latitude: 22.0286, longitude: 82.9667 },
  wikipedia: "https://en.wikipedia.org/wiki/Sakti,_Chhattisgarh",
  alternateNames: ["Sakti city", "Sakti Chhattisgarh", "Sakti district", "Shakti Chhattisgarh"],
  stripSchools: [],

  title: "Sakti IB & IGCSE Tutors | Online Private Home Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Sakti, Chhattisgarh: Diploma, MYP, PYP and Cambridge subjects, one to one at home on screen, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Sakti",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR SAKTI FAMILIES",
  heroSubtitle:
    "Private tuition from home for a Sakti student on an IB or IGCSE course: a live, one-to-one video lesson with someone who has taught your syllabus before. Sakti became the headquarters of its own district only recently, and no school here that we can confirm teaches these boards, so the laptop at home is the practical classroom.",
  primaryKeyword: "IB and IGCSE tutors in Sakti",
  imageAltText: "A Sakti student at a home desk in Chhattisgarh sharing IGCSE Chemistry working with an online tutor",
  secondaryKeywords: [
    "IB tutor Sakti",
    "IGCSE tutor Sakti",
    "IB home tuition Sakti",
    "IGCSE home tuition Sakti",
    "IB private tuition Sakti",
    "IB Maths tutor Sakti",
    "IGCSE Maths tutor Sakti",
    "IB Physics tutor Sakti",
    "IB Chemistry tutor Sakti",
    "IB Biology tutor Sakti",
    "IB DP tutor Sakti",
    "IB MYP tutor Sakti",
    "IB PYP tutor Sakti",
    "IGCSE online tuition Sakti",
    "IB tutor Sakti Chhattisgarh",
    "IGCSE tutor Dabhra Malkharoda",
    "online IB tutor Sakti district",
    "Cambridge IGCSE tutor Sakti",
    "IB tutor Janjgir Champa Bilaspur division",
  ],

  heroTrustPoints: [
    "Specialists who have previously taught the IB subject or IGCSE code your child sits",
    "All lessons are online in Sakti; in-person tuition exists only in Gurugram and parts of Delhi NCR",
    "A written note after each class and a simple way to change tutor",
    "A free trial, then the rate in writing",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Every IB stage" },
    { value: "Cambridge + Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "No clock changes" },
    { value: "Free trial", label: "Judge the lesson first" },
  ],

  intro: {
    heading: "Sakti, a young district headquarters, and online IB and IGCSE tuition",
    paragraphs: [
      "Sakti is a town on the Borai river at the foot of the Udaigiri hills, once the capital of the princely state of Sakti and now the namesake of a Chhattisgarh district that was formed in 2021 and fully functioning from September 2022. It lies on the Howrah-Nagpur-Mumbai railway corridor and on national highways, and it is a trading and administrative centre for a farming and mining hinterland, with a power plant, dolomite, silk weaving and trailer manufacturing nearby.",
      "The schools in Sakti follow the Chhattisgarh Board or CBSE; Saraswati Shishu Mandir, founded in 1957, is among the longest established. We could not confirm any school in Sakti that teaches the IB or a Cambridge or Pearson Edexcel IGCSE, and we will not guess. A family asking about these boards is usually planning a move, has a child already enrolled in a school in Raipur or further away, or is returning from a posting where the child studied an international syllabus.",
      "IB and IGCSE tutors in Sakti therefore work online. A tutor elsewhere in India, teaching on Indian Standard Time, joins a video call, shares a whiteboard and watches the student write. Nobody visits houses in Sakti, since in-person home tuition from IB Gram runs only in Gurugram and parts of Delhi NCR. Private tuition at home, through a screen, is the honest description.",
      "IB Gram is an independent tutoring service and has no connection with the IB, Cambridge, Pearson or any school mentioned. Tutors teach and give feedback; they do not write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, with Cambridge and Edexcel IGCSE",
      "Live private lessons in English from tutors based in India",
      "A free trial lesson before a rate is mentioned",
      "No tutor visits in Sakti; home visits are limited to Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "In Sakti the IB or IGCSE conversation nearly always begins with a destination, such as a school in Raipur, a boarding option or a university overseas. Each programme below is described in terms of what a student must be able to do, so tuition can aim at a specific skill and not at a vague wish for better marks.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Learning is organised into inquiry units and finishes with the Exhibition, a self-chosen project presented in the last year. No examination is sat. Tutors concentrate on foundations: fluent reading, short written answers, number sense and a child who is comfortable saying what they do not yet understand.",
      countryNote:
        "A Sakti PYP request is often from parents preparing a young child for an admission interview elsewhere in Chhattisgarh, with sessions kept brief and playful.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Work in every subject is judged against published criteria across four strands, and projects count beside tests. Students from Chhattisgarh Board classrooms commonly handle facts well and struggle to analyse, evaluate and reflect in writing, which is exactly where one-to-one support pays off.",
      countryNote:
        "Sakti students heading into MYP typically need English writing practice, science investigations and Maths set in everyday contexts.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects, three at Higher Level, plus TOK, the Extended Essay and CAS. The maximum score is 45 and the papers are sat in May or November. Because internal assessments feed into the final mark, the effort has to be spread across two years.",
      countryNote:
        "A Diploma student from Sakti is almost always enrolled at a school in another city, so lessons are tied to holidays and weekends at home.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP pairs a minimum of two Diploma courses with a career-related qualification and a reflective core. It is uncommon in India. The Diploma courses inside it are examined to the Diploma standard.",
      countryNote:
        "We rarely meet CP from Sakti. If it comes up, we tutor the Diploma courses as we would for any other Diploma student.",
    },
  ],

  subjectsIntro:
    "Name the subject, the level and the exam session and we look for a tutor who has taught precisely that. IB Maths shows why: there are two separate courses, Analysis and Approaches or Applications and Interpretation, each at Higher or Standard Level, and the right tutor differs for each combination.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof; students from Chhattisgarh Board Maths already know much of the content and need to practise full written reasoning." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling and statistics with technology, practised on data sets and calculator output." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves, fields and modern physics, with steady work on unit handling and data analysis." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Moles and quantitative work, energetics, kinetics and organic chemistry, using the data booklet from the first session." },
    { name: "IB Biology", levels: "HL / SL", description: "A broad syllabus that rewards precise terminology and answers matched to the command term." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams with evaluation, where examples can come from mining, power generation and farm markets in the Bilaspur division." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study analysis and business tools, with the internal commentary built up in stages." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading and comparison for students who speak Chhattisgarhi or Hindi at home." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, writing and oral practice for students who are already comfortable in the language." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming logic and a staged internal project." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking applied to forests, river basins and mining land, themes that sit close to Sakti." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies and fieldwork skills." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, methods and structured essays." },
  ],

  igcseSubjectsIntro:
    "IGCSE has two main boards, Cambridge and Pearson Edexcel. Papers, tiers and command words differ between them, so a tutor must know which board your child's school or exam centre uses. These are the subjects Sakti families raise most often.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths with a calculator and a non-calculator paper; Extended candidates need strong algebra and geometry." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "For capable Maths students; calculus and trigonometry arrive early." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson's Maths with two equal papers and method marks throughout." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, forces, electricity and waves, including alternative-to-practical questions." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Reactions, bonding, rates and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, human biology, plants and ecology." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing and speaking for students who think first in Hindi or Chhattisgarhi." },
    { name: "IGCSE First Language English 0500", levels: "Grade 9-10", description: "Composition and directed writing." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming logic, networks and data." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Introductory economics with data questions." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Language skills for those who add Hindi to the subject set." },
  ],

  regionsTitle: "Sakti, Jetha and nearby towns our tutors reach online",
  regionsIntro:
    "A video lesson looks the same from a house in the town as from a village on the district edge. The notes below describe how households in each area tend to organise the day around schools, the heat and the road.",
  regions: [
    { name: "Sakti town centre", note: "The market core, where many families run shops, so lessons settle into the hour after closing." },
    { name: "Railway station area", note: "Households close to the Howrah-Nagpur-Mumbai line; students often visit relatives by train, so a lesson may need moving on travel days." },
    { name: "Jetha and the district offices", note: "The area where the new district administration is based, home to government staff families whose postings can move them between districts." },
    { name: "Borai riverside", note: "Neighbourhoods near the river, where heavy rain in July and August sometimes disturbs the mobile network." },
    { name: "Udaigiri foothills", note: "Quieter homes on the edge of the hills, where a connection check before the trial lesson is wise." },
    { name: "NH49 and NH200 junction", note: "A road-junction belt with transport businesses; students here often study late into the evening." },
    { name: "Dabhra", note: "A neighbouring town that looks to Sakti and Raigarh for schooling and shopping, with a farming economy behind it." },
    { name: "Malkharoda", note: "A town in the district where families commonly send older children to Bilaspur or Raipur for higher study." },
    { name: "Jaijaipur and Champa", note: "Towns on the Janjgir-Champa side, known for silk and cotton weaving, where online lessons save a trip to a bigger city." },
    { name: "Bilaspur and Raigarh side", note: "The two larger cities on either side, where families often look first when comparing school choices." },
  ],

  schoolDisclaimer:
    "The schools named here are listed only to show where IB and IGCSE classrooms exist within reach of Sakti. IB Gram has no agreement with them, nor with the IB, Cambridge or Pearson. Programmes and admission rules change, so please confirm everything with the school itself.",
  schoolClusters: [
    {
      city: "Local: Sakti and Bilaspur division",
      note: "We could not confirm any school in Sakti, or in the neighbouring towns, that offers the IB or a Cambridge or Edexcel IGCSE, so none is listed. Local schools follow the Chhattisgarh Board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Raipur",
      note: "The state capital is the realistic place to look for an IB school, and the Bilaspur page names its one confirmed example. A move means a long drive, a boarding house or a family relocation.",
      schools: ["Rungta International School, Raipur"],
    },
    {
      city: "Nearby: Nagpur",
      note: "Some families look further west to Nagpur, which has a small group of confirmed IB and Cambridge schools, as a boarding or relocation option.",
      schools: ["D Y Patil International School, MIHAN", "VIBGYOR World Academy, Nagpur"],
    },
  ],

  modesIntro:
    "Every Sakti student studies online, and families then choose the pace: a lesson each week, a planned term with written reviews, or a concentrated run-up to a paper.",
  modes: [
    {
      title: "One lesson a week",
      description:
        "A fixed slot with one tutor. The student brings school work, the tutor teaches the next topic and corrects slips as they appear on the shared board.",
      bullets: [
        "A tutor chosen for subject, level and board",
        "Usually one hour each week",
        "Written working visible to both sides",
        "Suits IGCSE, MYP and early Diploma",
      ],
    },
    {
      title: "A term plan with written notes",
      description:
        "A schedule for the term, a short note after every lesson and a conversation with parents every few weeks about what to speed up or slow down.",
      bullets: [
        "Notes written for non-specialist parents",
        "Reviews at set points",
        "Fits students who also have classes at school",
        "Extra sessions near class tests",
      ],
    },
    {
      title: "Exam-season intensive",
      description:
        "Before mocks and the May or November sessions, lessons become more frequent and are mostly timed papers followed by detailed marking.",
      bullets: [
        "Papers marked to board style",
        "Two to four sessions a week if possible",
        "Placed away from Diwali and Teeja",
        "Starts about three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Sakti, and where do families look?",
      paragraphs: [
        "None that we can confirm. Sakti's schools are affiliated to the Chhattisgarh Board or CBSE, and the town's educational identity is built around those: Saraswati Shishu Mandir, started in 1957, and a mix of private English-medium schools and government institutions. The district is young, so its education infrastructure is still being added.",
        "For an international board, families turn to Raipur, where Rungta International School is the one school our Bilaspur page confirms for an IB programme in Chhattisgarh, or travel further to Nagpur. Both involve a long road or rail journey from Sakti, so the usual solutions are a boarding place, a parent relocating with the child or a plan that waits until Class 9 or Class 11.",
        "A second group is families who already hold the syllabus. Officers, engineers and managers posted to the power plant or to the district administration sometimes arrive with a child halfway through an IGCSE or Diploma course, and the child's old school is hundreds of kilometres away. For them, an online tutor keeps the same board going.",
        "That is the role of online tuition in Sakti. It does not enrol anyone in a school; it holds a student on track while a decision is made, or supports one who is enrolled somewhere else and home for the holidays.",
      ],
    },
    {
      heading: "How do Chhattisgarh Board, CBSE, IGCSE and IB differ for a Sakti student?",
      paragraphs: [
        "The Chhattisgarh Board sets Class 10 and Class 12 examinations in February and March, with Hindi and English medium options. CBSE sits in the same window. IGCSE and the IB belong to an international calendar, with main sessions in May and June and again in October and November.",
        "Students in Sakti who have studied under the state board generally have solid content and good memory. The international boards add something different: extended answers, interpretation of data and justification of method. A first-term tutor spends a lot of time on that bridge, teaching what a command word such as discuss or evaluate actually asks for.",
        "Entrance routes need attention. The state's professional entrance tests run through Vyapam, while JEE Main and NEET are national. IB and IGCSE students should check each authority's eligibility and equivalence rules early, ideally before their subject choices are fixed, because Physics, Chemistry and Maths or Biology are the usual requirement.",
        "For a Sakti family the decision hinges on the child's likely finish line. If it is a state engineering or medical seat, the home board is straightforward. If it is a university abroad or a liberal arts course in India, an international board becomes more attractive.",
      ],
      table: {
        caption: "Boards a Sakti family may meet",
        columns: ["Board", "Where it is taught", "How papers feel", "Main exam months"],
        rows: [
          ["Chhattisgarh Board", "Most schools in town and the district", "Recall-led, Hindi or English medium", "Feb-Mar"],
          ["CBSE", "Private schools and a few others", "National syllabus, some application", "Feb-Mar"],
          ["ICSE / ISC", "Very few schools nearby", "English-rich, wide syllabus", "Feb-Mar"],
          ["Cambridge or Edexcel IGCSE", "Raipur, Nagpur and beyond", "Applied, tiered papers", "May-Jun, Oct-Nov"],
          ["IB Diploma", "Raipur, Nagpur and beyond", "Six subjects plus core", "May, November"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Sakti family?",
      paragraphs: [
        "No price is printed on this page, because the right figure depends on your child. After the free trial lesson we send a written rate, which shows the lesson length and weekly pattern it assumes, and nothing is billed until you accept it.",
        "The rate follows four things. Course level matters, since Higher Level Chemistry is a heavier teaching task than Core English. The tutor's depth on the exact syllabus matters, because someone who has taught a particular paper through several cycles diagnoses faster. Lessons per week change the monthly total. And a steady plan costs differently from a short emergency push before a paper.",
        "Online delivery avoids expenses that rarely appear on a quote. A Sakti student does not need to take a train or a bus to Bilaspur or Raipur for a class, does not need accommodation near a city tutor and loses no school day to travel. For a family outside a big city that saving is often larger than the tuition difference between two tutors.",
        "A higher hourly rate can still be cheaper in total, since a specialist closes a gap in fewer hours. Judge the trial lesson on how quickly the tutor finds the real problem.",
      ],
      bullets: [
        "Course and level: IB HL or SL, IGCSE Core, Extended, Foundation or Higher",
        "Tutor's experience with the exact syllabus and board",
        "Lessons per week and minutes per lesson",
        "Steady term plan or intensive run-up to a paper",
      ],
    },
    {
      heading: "Online tutor, city classes, local home tutor or self-study from Sakti?",
      paragraphs: [
        "A weekly class in Bilaspur or Raipur would mean a long return journey, so it is realistic only for a short intensive or a holiday camp. A school-age student cannot sensibly spend a day each week on the road.",
        "Local home tutors in Sakti are plentiful for Chhattisgarh Board and CBSE subjects, and the best of them are very good. Few have taught IB or IGCSE content, so they suit general subject support more than a specific code or an IA criterion.",
        "Self-study with past papers is an option for a motivated student, particularly in IGCSE Maths and the sciences, and many students do much of their own revision. The weak points are the subjects that need judgement, such as English, TOK and the analysis of internal assessments, where nobody tells the student what a better answer looks like.",
        "Online one-to-one lessons supply the missing specialist and the personal feedback. The real dependency is the connection: Sakti households should test it before the trial and keep a phone hotspot ready for the monsoon and for the occasional power cut.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Sakti",
        columns: ["Route", "Strength", "Limit"],
        rows: [
          ["Online one-to-one", "Exact syllabus and personal pace", "Needs a stable connection"],
          ["Weekly classes in a bigger city", "Face-to-face teaching", "A long journey each way from Sakti"],
          ["Local home tutor", "Easy to arrange and affordable", "Few have taught IB or IGCSE"],
          ["Self-study", "Free and flexible", "No feedback on essays or internal work"],
        ],
      },
    },
    {
      heading: "How do heat, monsoon and Chhattisgarh festivals shape the study year?",
      paragraphs: [
        "Sakti sits in the plains of the Bilaspur division, and summers are hot, with temperatures climbing well into the forties from April to June. That overlaps the IB May session and IGCSE May-June papers, so a student may be sitting a three-hour paper in the hottest part of the year. Practice should be placed in the morning or late evening, with a fan or cooler tested in advance.",
        "The monsoon arrives around mid-June and lasts through September. Rain on the Borai catchment and the Udaigiri slopes can bring flooded lanes and weaker mobile data. A backup plan, such as a second device or a switch to audio with photographed working, prevents a lost lesson.",
        "Chhattisgarh's own calendar adds weeks of reduced attention. Hareli in July marks the start of the farming season, Teeja in August or September is observed widely by women in the family, Dussehra and Diwali follow in October and November, and Chherchhera comes after the winter harvest. Diwali sits right beside the November papers, so revision has to be finished early.",
        "Winters are cool and dry, with pleasant mornings, and December is a good month for long consolidation lessons before the next term begins.",
      ],
      table: {
        caption: "Study calendar for a Sakti IB or IGCSE student",
        columns: ["Months", "Conditions and events", "Planning notes"],
        rows: [
          ["Jan-Feb", "Cool and dry; state board and CBSE preparation locally", "Catch-up lessons and mock marking"],
          ["Mar-May", "Rising heat; IB May and IGCSE May-June papers", "Morning or late-evening practice"],
          ["Jun-Sep", "Monsoon, Hareli, Teeja", "Backup connection; steady IA progress"],
          ["Oct-Nov", "Dussehra, Diwali, November sessions", "Finish revision before the festival fortnight"],
          ["Dec", "Cool, quiet, school holidays", "Longer consolidation lessons"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Sakti go next?",
      paragraphs: [
        "Inside Chhattisgarh, the main destinations are in Raipur and Bilaspur: NIT Raipur, IIIT Naya Raipur, IIT Bhilai, AIIMS Raipur, Pt. Ravishankar Shukla University and the central university, Guru Ghasidas Vishwavidyalaya at Bilaspur. Each sets its own admission rules, and you should read the current prospectus for the year of application.",
        "Equivalence is the first administrative step. The Association of Indian Universities certifies IB and IGCSE-based qualifications as comparable to Indian Class 12, and IB Diploma holders may apply for central university seats through CUET-UG when the notification allows. The details change often, so confirm the current rule.",
        "For engineering and medicine the subject package decides eligibility. JEE Main routes need Physics, Chemistry and Maths, and NEET needs Biology with Physics and Chemistry. State counselling may add domicile conditions, so ask the relevant authority early in Class 11 before committing.",
        "Overseas, IB and IGCSE results are widely recognised in the UK, Europe, Canada, Australia and Singapore, and American colleges read them with tests and essays. Tutors support the subject side only; application essays must be the student's own.",
      ],
    },
    {
      heading: "Which parts of IB Maths and the sciences cause most trouble, and how do tutors help?",
      paragraphs: [
        "IB Maths demands explanation as well as accuracy. Analysis and Approaches rewards clean algebra, calculus and proof. Applications and Interpretation tests whether students can build a model, run the statistics and say honestly what the answer means. Both include an Exploration, which a tutor can guide on scope and structure without producing.",
        "Physics marks are often lost on units, unlabelled graphs and loose explanations. Chemistry has a calculation load and a data booklet that must be navigated at speed. Biology is content heavy, and the gap between a middle grade and a top one is frequently terminology and the habit of answering the exact command term.",
        "On internal assessments a tutor coaches in question choice, method, uncertainty and evaluation, and will read a draft and say which criterion is thin. The experiment, the data and the report belong to the student.",
        "A Sakti student who has never met a lab report marked against criteria benefits from a tutor who has seen the format many times, because the habits can be set early and the surprises removed before the Diploma.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: choosing an IGCSE tier",
      paragraphs: [
        "Cambridge's Core tier tops out at grade C and Extended reaches A*. Edexcel's Foundation caps at grade 5 while Higher goes up to 9. A student aiming at IB Maths HL, Physics HL or a science-led Diploma should work towards the upper tier.",
        "The school or exam centre normally sets the tier. When a family is choosing for a private candidate, a timed diagnostic paper gives more reliable evidence than a guess. If the result is near the boundary, talk it over with the centre, and remember that a solid Core grade can be worth more than a shaky Extended one.",
        "Subjects should follow the direction of travel. Engineering and medicine aspirants take Maths, the three sciences or Computer Science, while commerce-minded students add Economics or Business Studies. A language can sit comfortably in the set.",
        "Check the board and the exact code before lessons begin, so the tutor prepares your child for the right paper.",
      ],
    },
  ],

  tutorsIntro:
    "Every Sakti request is paired by programme, subject, level and exam board. Tutors are based elsewhere in India and teach on the same clock as you, each introduced with a brief reason for the match.",

  process: [
    { title: "Tell us about your child", description: "Board or programme, subject, level, current school and the hours your Sakti household can keep free." },
    { title: "Review a tutor proposal", description: "One named tutor, with the reason their past classes resemble your child's course." },
    { title: "Attend the free trial", description: "A genuine online lesson with the proposed tutor, free of charge and without obligation." },
    { title: "Agree the plan in writing", description: "The weekly rhythm, the rate and the opening topics go on paper before money changes hands." },
    { title: "Continue with notes and check-ins", description: "Regular lessons with a short note afterwards, and a different tutor if the fit is poor." },
  ],

  whyPoints: [
    { title: "Matched to your paper", description: "The tutor has already prepared students for the very subject, level and board in question." },
    { title: "Plain about local schools", description: "We say openly that Sakti has no confirmed IB or IGCSE school, so plans stay realistic." },
    { title: "A trial before a commitment", description: "One free lesson gives first-hand evidence of the teaching." },
    { title: "Honest boundaries", description: "Coaching and feedback only; the written assessments stay the student's own work." },
    { title: "Visible progress", description: "A written note after each lesson records what was covered." },
    { title: "Room to change", description: "If the match is wrong, we arrange another tutor." },
  ],

  faqs: [
    {
      question: "Does Sakti have a school for the IB or IGCSE?",
      answer:
        "Not one we can confirm. Schools in Sakti follow the Chhattisgarh Board or CBSE. The nearest IB school we can name is Rungta International School in Raipur, and Nagpur has a few more options. Check any school's current programmes and admissions directly, because we have no link to them and our list is for context.",
    },
    {
      question: "Can I get IB home tuition in Sakti?",
      answer:
        "You can get online home tuition, a private live lesson attended from your own study table, with the teacher joining by video from another Indian city. Nobody turns up at the door. IB Gram sends tutors to houses only in Gurugram and parts of Delhi NCR, so for Sakti every minute is on screen.",
    },
    {
      question: "Do you have IGCSE tutors for Sakti students on Cambridge and Edexcel?",
      answer:
        "Yes, both boards are covered, always over video. Matching uses the board, the tier and the syllabus code, such as Cambridge 0580 Mathematics or Edexcel 4MA1. Lessons keep Sakti's own time. Send the code printed on your child's subject sheet and a tutor who has handled that paper is suggested.",
    },
    {
      question: "Do tutors visit homes in Sakti?",
      answer:
        "No, and none travels here. Visits happen only in Gurugram and parts of Delhi NCR. In Sakti the setup is a laptop or tablet, dependable internet and a quiet corner. The tutor writes on a shared board and emails a brief summary after the lesson, which keeps you informed even when you are out.",
    },
    {
      question: "What will IB or IGCSE lessons cost a Sakti family?",
      answer:
        "It depends on the course level, subject, tutor experience and lessons per week, so we publish no fixed price. After the free trial you receive a written rate and can compare it with other options. Online lessons spare a Sakti family the expense and time of regular trips to Bilaspur or Raipur.",
    },
    {
      question: "Which schools near Sakti offer IB or IGCSE?",
      answer:
        "None in Sakti or its neighbouring towns that we can confirm. Rungta International School in Raipur is the one Chhattisgarh school our Bilaspur page names for an IB programme, and D Y Patil International School, MIHAN and VIBGYOR World Academy in Nagpur are further options. This is context only, so please verify with each school.",
    },
    {
      question: "Is the first lesson really free?",
      answer:
        "Yes. Your child sits one genuine online lesson with the suggested tutor, at no charge and with nothing to sign. You then decide. If you continue, the rate is put in writing first. Most trials use a topic from the current school week, which shows the teaching style in action.",
    },
    {
      question: "Can the tutor write my child's IA or Extended Essay?",
      answer:
        "No. Tutors coach: they unpack the marking criteria, help sharpen a topic, test a plan and react to a draft. Research, data and prose must come from the student, which also holds for TOK essays and coursework. Outsourced writing can cost a candidate the whole result.",
    },
    {
      question: "Which IB Diploma subjects can you cover for Sakti students?",
      answer:
        "Requests usually cover Maths in both forms, the three sciences, Economics, Business Management, English A, Computer Science, Psychology, ESS, Geography and Hindi B, at either level. For a rarer subject, send the code and session and we reply frankly about whether a suitable teacher exists.",
    },
    {
      question: "Do you teach IB MYP and PYP to Sakti students?",
      answer:
        "Yes. Younger PYP children get brief, playful sessions on reading and number sense. MYP students work on writing to criteria, lab investigations, problem solving and the Personal Project. Each lesson ends with a plain note to parents, written for readers who have never opened an IB guide.",
    },
    {
      question: "Is online tuition as effective as classes in Raipur or Bilaspur?",
      answer:
        "For most subjects it works well, as long as the internet holds. Both sides write on one board, and a slip is caught as it happens. For Sakti the real gain is no long ride to a bigger city. Hands-on practical work, though, still needs the school laboratory.",
    },
    {
      question: "How do you choose tutors for Sakti students?",
      answer:
        "Qualifications come first, then recent classes taught on the same syllabus, then a check on how clearly the person explains. After that comes the match with your child's level, board and aims. We put a name forward only once the need is clear, and give our reasons so you can weigh them before the trial.",
    },
    {
      question: "When should my child start?",
      answer:
        "Ideally at the start of a course: Class 9 for IGCSE, Class 11 for the Diploma, Class 6 for MYP. A child facing an admission test or a house move may begin one term sooner, centred on English and Maths. A late start still helps; it simply leaves less room, so topics are ranked harder.",
    },
    {
      question: "My child studies in the Chhattisgarh Board. Can we move to IB or IGCSE?",
      answer:
        "A school seat comes first, since lessons alone cannot admit a child to an IB or IGCSE course. Where a seat exists, a tutor can ready the student for applied questions, plug gaps in content and set up writing habits beforehand. Ask the school about the entry class and any test, and begin a term early if possible.",
    },
    {
      question: "Can lessons fit around Sakti's heat, monsoon and festivals?",
      answer:
        "Yes. Families here mostly pick early mornings, evenings and Sundays, steering clear of the hottest hours in May and June. The plan allows for Hareli, Teeja, Dussehra and Diwali, pulls revision ahead of the November papers and sets a monsoon fallback, for example voice only with photographed working.",
    },
    {
      question: "What if my child does not like the tutor?",
      answer:
        "Say so, and another tutor is lined up. A poor fit tends to show in the first weeks, and the written plan keeps everyone clear on what was promised. A couple of lines to support@ibgram.com or a WhatsApp text is all the search needs.",
    },
    {
      question: "Is IB Gram connected to any school or exam board?",
      answer:
        "No. IB Gram stands apart from the IB, Cambridge, Pearson and every school in Sakti, Raipur, Nagpur or beyond. School names are here for orientation alone. Admission, marks and grades are outside our control and we promise none; what the tutor controls is the quality of the teaching.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How the same online lessons run for students in other Indian towns." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only region where a tutor can come to the door." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "A map of the IB programmes and what each covers." },
    { label: "IGCSE guide", href: "/igcse/", description: "How the two IGCSE boards differ in papers and tiers." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects, the core and how 45 points are built." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criterion marking and the closing project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Unit-based learning for ages 3 to 11." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "Diploma courses combined with a vocational strand." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between the two Diploma Maths courses." },
    { label: "Browse tutors", href: "/tutors/", description: "Who teaches what, and from which background." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Email or WhatsApp to arrange the trial." },
    { label: "IB and IGCSE tutoring in Bilaspur", href: "/bilaspur/", description: "The divisional city closest to Sakti." },
    { label: "IB and IGCSE tutoring in Raipur", href: "/raipur/", description: "The state capital with a confirmed IB school." },
    { label: "IB and IGCSE tutoring in Korba", href: "/korba/", description: "A neighbouring industrial city on the same online model." },
  ],

  closingHeading: "Begin with a free trial lesson for your Sakti student",
  closingBody:
    "Tell us which course your child follows, the subject and level, and when evenings are quiet at home. A tutor is proposed with reasons, and the trial lesson costs nothing. Reach us at support@ibgram.com or WhatsApp +91 7439 368 115.",
};
