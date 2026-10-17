import type { CitySeoPage } from "../types";

/**
 * No school in Kapurthala could be confirmed for the IB or Cambridge/Edexcel IGCSE, so stripSchools is
 * empty. Cluster names are reused from the Amritsar, Ludhiana and Chandigarh pages, where they were
 * checked, and Jalandhar is stated honestly as having none confirmed.
 */
export const kapurthala: CitySeoPage = {
  slug: "kapurthala",
  countryName: "Kapurthala",
  countryNameLong: "Kapurthala, Punjab",
  demonym: "Kapurthala",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "After-school and post-tea lessons on weekdays, with Saturday and Sunday mornings kept for longer revision sessions",
  lastUpdated: "2026-09-21",
  state: "Punjab",
  stateCode: "IN-PB",
  geo: { latitude: 31.38, longitude: 75.3804 },
  wikipedia: "https://en.wikipedia.org/wiki/Kapurthala",
  alternateNames: ["Kapurthala city", "Kapurthala district", "Kapoorthala"],
  stripSchools: [],

  title: "IB and IGCSE Tutors in Kapurthala | Home Tuition Online",
  metaDescription:
    "IB and IGCSE tutors for Kapurthala, Punjab: one-to-one online home tuition by subject specialists, timed for Doaba school days, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Kapurthala",
  heroEyebrow: "IB & IGCSE HOME TUITION FOR KAPURTHALA, PUNJAB",
  heroSubtitle:
    "Home tuition for IB and IGCSE students in Kapurthala, delivered as private live lessons on a laptop instead of home visits. The old princely town in the Doaba has always looked abroad, and plenty of its families have relatives in Canada, the UK or Australia. It has no IB or Cambridge school we could confirm, though, so the tutor who has taught the exact paper is usually the only subject specialist a student meets.",
  primaryKeyword: "IB and IGCSE tutors in Kapurthala",
  imageAltText: "Kapurthala student practising IB Economics diagrams during a private online lesson at home",
  secondaryKeywords: [
    "IB tutor in Kapurthala",
    "IGCSE tutor in Kapurthala",
    "IB home tuition Kapurthala",
    "IGCSE home tuition Kapurthala",
    "IB private tuition Kapurthala",
    "IB Maths tutor Kapurthala",
    "IGCSE Maths tutor Kapurthala",
    "IB Physics tutor Kapurthala",
    "IB Chemistry tutor Kapurthala",
    "IB Biology tutor Kapurthala",
    "IB DP tutor Kapurthala",
    "IB MYP tutor Kapurthala",
    "IB PYP tutor Kapurthala",
    "IGCSE online tuition Kapurthala",
    "IB tutor Phagwara",
    "IGCSE tutor Sultanpur Lodhi",
    "IB tuition Doaba",
    "IB online classes Kapurthala district",
  ],

  heroTrustPoints: [
    "One student, one tutor, live on video every lesson",
    "Tutors who have taught IB DP, MYP and PYP and Cambridge or Edexcel IGCSE",
    "Timings that respect Doaba school hours and harvest weeks",
    "Free trial first, then the rate in writing",
    "Weekly note to parents and a free tutor change",
  ],
  heroStats: [
    { value: "IST", label: "Indian Standard Time" },
    { value: "PYP to DP", label: "All IB stages" },
    { value: "Free trial", label: "No payment upfront" },
    { value: "May & Nov", label: "IB sessions planned for" },
  ],

  intro: {
    heading: "An international syllabus from the Doaba's old princely town",
    paragraphs: [
      "Kapurthala's skyline is unlike any other town in Punjab: the French-style Jagatjit Palace, now home to a Sainik School, the Moorish-style mosque modelled on the Koutoubia in Marrakech, and the Shalimar gardens of a maharaja who admired Europe. Today it is also home to the Rail Coach Factory at Hussainpur, to the technical university on the Jalandhar road, and to households whose relatives farm, work or study in Canada, Britain, Australia and the Gulf. That last link is why an international syllabus attracts more attention here than a town of this size would otherwise expect.",
      "Attention is not the same as access. We could not confirm a single authorised IB World School or approved Cambridge or Edexcel centre in Kapurthala. Families who want the IB or IGCSE for a child must look to Amritsar, Ludhiana or Mohali, or to a school further afield, and the child often studies at home for a period while a decision is made. During that time the difference between a general tutor and one who has actually taught Paper 2 of the Diploma is very large.",
      "Our IB and IGCSE tutors in Kapurthala work on live video, one child at a time, with a lesson plan set against the paper the child will sit. This page sets out what a Kapurthala family should know: what school options really exist, how Punjab's boards compare with the international ones, what shapes the cost, how harvests, fog and festivals fit the exam calendar, where students go afterwards and how each subject is taught. IB Gram is an independent service with no tie to the IB, Cambridge, Pearson or any school, and tutors never write assessed work.",
    ],
  },

  programmesIntro:
    "In Kapurthala the four IB programmes rarely come from a local classroom, and the shape of tutoring changes with how a child arrives at them.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Inquiry-based primary learning built on units and a final Exhibition. Tutors emphasise reading, number sense and the habit of asking why, in short, friendly lessons.",
      countryNote:
        "Children of returning NRI families sometimes arrive mid-PYP from abroad. A weekly lesson smooths the move and keeps the approach familiar.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Criteria-marked work across eight subject groups and the Personal Project. Tutors show how to read a task and put together an answer that meets the criteria.",
      countryNote:
        "Students from Punjab-board or CBSE schools find open-ended MYP tasks new, so lessons often begin with structure and language before content.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects plus Theory of Knowledge, the Extended Essay and CAS. Tutors teach the examined content and the internal-assessment method, and leave the assessed writing to the student.",
      countryNote:
        "Many Diploma students in this region study away from a specialist teacher, so private tuition often supplies most of the Higher Level teaching.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "DP courses combined with career-related study and a reflective project. Tutors work on the academic courses.",
      countryNote:
        "CP is very rare in the region. We take requests and pair a tutor with the specific DP courses chosen.",
    },
  ],

  subjectsIntro:
    "Each subject goes to a tutor who has taught that paper and level, and who can vary the pace for a student who has come from a different board.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Functions, calculus, sequences and proof, with HL topics built up steadily over two years." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and calculator technique, with real-data practice." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, thermal physics, waves, fields and modern topics, with data-response drills." },
    { name: "Chemistry", levels: "SL / HL", description: "Quantitative chemistry, bonding, kinetics, equilibrium and organic reaction routes." },
    { name: "Biology", levels: "SL / HL", description: "Cells, genetics, physiology and ecology, with careful vocabulary." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Punjab's groundwater, crop cycle and air-quality debates supply strong local examples." },
    { name: "Economics", levels: "SL / HL", description: "Diagram skills, evaluation and case questions, drawing on agriculture and remittance economies." },
    { name: "Business Management", levels: "SL / HL", description: "Tools, calculations and unseen cases." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and system questions." },
    { name: "Geography", levels: "SL / HL", description: "Resources, population and development, with fieldwork method." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Analysis, commentary and comparative essays." },
    { name: "Hindi B and Punjabi support", levels: "SL / HL and school-based", description: "Language practice for students who speak Punjabi at home and study Hindi as a second language." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion coaching for knowledge questions; the essay remains the student's own." },
  ],

  igcseSubjectsIntro:
    "IGCSE subjects are taught against the specific board's syllabus, since Cambridge and Pearson Edexcel papers are set out differently.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, geometry and statistics with timed papers." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, energy, waves, electricity and radioactivity." },
    { name: "Chemistry", levels: "Core / Extended", description: "Structure, reactions, the mole and organic basics." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, human biology, inheritance and ecology." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For the double-award science route." },
    { name: "English as a First or Second Language", levels: "Core / Extended", description: "Reading, writing and speaking preparation." },
    { name: "Geography", levels: "Single tier", description: "Physical and human topics with skills papers." },
    { name: "Computer Science", levels: "Single tier", description: "Programming, hardware and data." },
    { name: "Economics and Business Studies", levels: "Single tier", description: "Concepts and calculations." },
    { name: "Hindi and Punjabi as second languages", levels: "Core / Extended", description: "Reading, writing and oral work where a school offers them." },
  ],

  regionsTitle: "Kapurthala city and the Doaba towns around it",
  regionsIntro:
    "Kapurthala district is a string of towns along the roads between Jalandhar, Amritsar and Hoshiarpur, and family routines vary between them. The notes below reflect how a school day usually runs in each place.",
  regions: [
    { name: "Kapurthala city centre", note: "The old town around the palace complex and the mosque, with narrow lanes and compact homes; school buses leave early and evening traffic thins after seven." },
    { name: "Jagatjit Palace and Sainik School side", note: "A quiet, green quarter, home to defence and staff families. Children here sometimes have a parent posted away." },
    { name: "Shalimar Bagh and Model Town side", note: "Residential areas with larger houses, many of them with relatives abroad and a steady flow of visitors in winter." },
    { name: "RCF and Hussainpur", note: "The Rail Coach Factory township, home to engineers and railway families who move between postings, so children arrive from many boards." },
    { name: "Jalandhar road and the technical university", note: "The corridor toward Jalandhar, where students and staff of the university live and where many families choose Jalandhar schools." },
    { name: "Sultanpur Lodhi", note: "A historic town of great religious importance, with strong farming and NRI links; many students commute to Kapurthala or Jalandhar." },
    { name: "Phagwara", note: "A busy trading and industrial town on the Grand Trunk Road, home to a large private university and a big student population." },
    { name: "Bholath and Begowal", note: "Farming towns to the south-west, where school options are fewer and harvest weeks pull children into family work." },
    { name: "Dhilwan and Nadala", note: "Smaller towns along the Beas side of the district; students often travel to Kapurthala or Amritsar for school." },
  ],

  schoolClusters: [
    {
      city: "Kapurthala district",
      note: "We could not confirm any school in Kapurthala district as an authorised IB World School or a Cambridge or Edexcel centre. Locally, the honest count is none.",
      schools: [],
    },
    {
      city: "Nearby: Amritsar",
      note: "About an hour and a half away, Amritsar has confirmed options that some Kapurthala families weigh for boarding or a move.",
      schools: ["Invictus International School", "International Fateh Academy"],
    },
    {
      city: "Nearby: Ludhiana",
      note: "Ludhiana, further down the Grand Trunk Road, has confirmed IB or Cambridge options for families willing to relocate or board.",
      schools: ["Britannica International School", "Harvest International School"],
    },
    {
      city: "Nearby: Jalandhar and Mohali",
      note: "Jalandhar, the nearest big city, has no confirmed IB or Cambridge school that we could verify. Mohali, a few hours away, has one.",
      schools: ["Oakridge International School, Mohali"],
    },
  ],
  schoolDisclaimer:
    "Schools are named only to show where confirmed IB or Cambridge options lie in relation to Kapurthala. IB Gram is an independent service with no affiliation to the IB, Cambridge, Pearson or any school, and each school makes its own admission decisions.",

  modesIntro:
    "Tutors do not visit homes in Kapurthala, so each format below is live and online, designed around Doaba routines.",
  modes: [
    {
      title: "Online home tuition, one to one",
      description: "A live private lesson with a subject specialist, from your own desk in Kapurthala.",
      bullets: ["Shared whiteboard and scanned papers", "The same tutor every week", "A written note after each class"],
    },
    {
      title: "Focused exam blocks",
      description: "Concentrated weeks before school tests and before IB or IGCSE sessions.",
      bullets: ["Past-paper cycles with review", "Command-term drills", "Rescheduling if fog or a power cut hits"],
    },
    {
      title: "Weekly support across the year",
      description: "A single weekly lesson in one subject that keeps a student level with the school.",
      bullets: ["Suits MYP and IGCSE years", "Break for Baisakhi or a family wedding", "Switch subject mid-year"],
    },
  ],

  tutorsIntro:
    "Tutors teach from across India on Indian Standard Time, and most are available in the late afternoon and evening hours that Kapurthala families prefer.",

  sections: [
    {
      heading: "Which IB and IGCSE schools are within reach of Kapurthala?",
      paragraphs: [
        "None inside the district, as far as we could verify. The IB directory and Cambridge listings show no authorised school in Kapurthala, Phagwara or Sultanpur Lodhi. The town's fame in education comes from the Sainik School and a long line of CBSE and state-board institutions, which are good at what they do.",
        "The nearest confirmed options sit in Amritsar, Ludhiana and Mohali, each a substantial drive. Jalandhar, the closest big city, has none we could confirm. A daily commute is unrealistic for most families, so those who want an international school consider boarding, or moving the household for a few years.",
        "That produces a particular kind of Kapurthala family: parents who have lived abroad and want continuity, households with a sibling already in an international school elsewhere, railway and university families who have moved often, and planners heading overseas who want a recognised qualification.",
        "None of those families is well served by a tutor whose main experience is Punjab Board Mathematics. What they need is a teacher who has actually taught the IB or IGCSE paper, and can do so from a laptop in the next room.",
      ],
    },
    {
      heading: "Punjab board, CBSE, ICSE, IB and IGCSE compared for Kapurthala students",
      paragraphs: [
        "The Punjab School Education Board and CBSE cover nearly every school in the district, with a few ICSE institutions. All three lead to JEE, NEET, CUET-UG or state entrance tests, and all three reward correct, complete answers drawn from a textbook.",
        "IGCSE moves toward precise expression and tiered papers, while the IB asks for application and extended reasoning. A student who is excellent at recall can score poorly on a first IB paper without lacking ability.",
        "This table shows the main differences.",
      ],
      table: {
        caption: "Boards a Kapurthala family may compare",
        columns: ["Board", "What earns marks", "Language", "Common next step", "Local help"],
        rows: [
          ["Punjab School Education Board", "Textbook accuracy", "Punjabi or English", "State colleges, JEE and NEET coaching", "Everywhere"],
          ["CBSE", "NCERT-based, complete answers", "English or Hindi", "JEE, NEET, CUET-UG", "Widely available"],
          ["ICSE and ISC", "Wider content, more writing", "English", "CUET-UG, Indian universities", "Some tutors"],
          ["Cambridge or Edexcel IGCSE", "Precise, mark-scheme answers", "English", "IB, A Level or Indian Class 11", "Almost none"],
          ["IB Diploma", "Application, reasoning, extended writing", "English", "Universities in India and abroad", "None we could confirm"],
        ],
      },
    },
    {
      heading: "What sets the cost of IB and IGCSE tuition in Kapurthala?",
      paragraphs: [
        "There is no fixed price we can honestly quote for every student, and we do not publish one. What we do is write the rate down and send it before any lesson is booked. The following points explain why two Kapurthala families can receive different quotes.",
        "Level is the first factor. Higher Level Diploma Physics calls for a tutor with years at that standard, while help with Class 7 science is a lighter task. Scarcity is the second: some subjects have plenty of qualified tutors, and others, such as Computer Science HL or Economics HL, have few.",
        "The pattern of lessons matters too. A weekly slot held through the year lets a tutor plan, and it is priced differently from a crowded block of daily lessons before an exam. October and November are the busiest months, because they combine festival gaps with the November sessions.",
        "Doaba families sometimes compare with what they see in Jalandhar centres. A fair comparison includes petrol, parking and the lost hour on the road each way, and weighs those against a lesson taken at home.",
      ],
      bullets: [
        "Level of the course (SL, HL, Core, Extended)",
        "How few tutors teach that subject",
        "Frequency and length of the plan",
        "Peak exam-season demand",
      ],
    },
    {
      heading: "Online home tuition, Jalandhar centres, local tutors and self-study: which suits?",
      paragraphs: [
        "Kapurthala students can pick from four options. Online private tuition brings a subject specialist to the home. Jalandhar centres offer group teaching with a commute. Local tutors are convenient and dependable for state and CBSE content. Self-study costs nothing but concentration.",
      ],
      table: {
        caption: "Support routes from Kapurthala",
        columns: ["Route", "Syllabus knowledge", "Travel", "Watch out for"],
        rows: [
          ["Live one-to-one online tuition", "Matched to your exact paper", "None", "A stable connection is needed"],
          ["Coaching centre in Jalandhar", "Mostly Indian boards and entrance exams", "Regular road trips", "Batches built for other syllabuses"],
          ["Local private tutor", "Punjab board or CBSE trained", "Little", "Few have taught international papers"],
          ["Self-study with past papers", "Depends on the student", "None", "No correction of weak answers"],
        ],
      },
    },
    {
      heading: "Fog, harvest and festivals: how the Kapurthala year meets the exam calendar",
      paragraphs: [
        "Doaba life runs on the crop calendar as much as the school year. Wheat is harvested around Baisakhi in April, paddy comes in during October and November, and stubble smoke in those weeks can make the air heavy. Winter fog, from December into January, disrupts travel and school timings across the region.",
        "Festivals add breaks: Lohri in January, Baisakhi in April, Diwali and Gurpurab in autumn, and the wedding season in winter, when a Doaba household may be busy for days. Since lessons are online, they can be moved rather than lost.",
        "The IB Diploma is examined in May and November, with results in July and January. Cambridge IGCSE sessions run around February and March, May and June, and October and November, and Pearson Edexcel International GCSE has January, May and June, and October and November. Tutors work backwards from the entry the school has made.",
      ],
      table: {
        caption: "The Kapurthala study year",
        columns: ["Months", "Local conditions", "Effect on study", "How lessons adapt"],
        rows: [
          ["Dec to Feb", "Dense fog, Lohri, wedding season; IGCSE Feb series", "Late buses, broken weeks", "Online lessons that do not depend on roads"],
          ["Mar to May", "Baisakhi, wheat harvest, rising heat; IB May exams", "Family work and exam stress", "Short, focused evening lessons"],
          ["Jun to Aug", "Hot, humid, monsoon; IB results in July", "New term begins", "Foundation lessons before pace picks up"],
          ["Sep to Nov", "Paddy harvest, stubble smoke, Diwali, Gurpurab; November exams", "Air quality and festival gaps", "Front-loaded revision and spare weeks"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Kapurthala go next?",
      paragraphs: [
        "Kapurthala is within easy reach of several universities: the technical university on the Jalandhar road, the large private university at Phagwara, and the colleges of Jalandhar, Amritsar and Chandigarh. IB and IGCSE students, however, tend to look wider than that.",
        "IB Diploma holders apply to Indian universities with an equivalence certificate from the Association of Indian Universities, and CUET-UG is the standard route to central universities. Engineering and medicine depend on subject combinations, so JEE and NEET eligibility should be checked with the exam authority before Class 11 subjects are fixed.",
        "Many Kapurthala families have close relatives in Canada, the United Kingdom or Australia, and study abroad is a familiar path. Predicted grades, school reports and English tests matter, and tutoring can help lift the grades those applications depend on.",
        "IGCSE students choose between the IB, A Level and an Indian Class 11 stream. Deciding by early Class 10 leaves the final IGCSE year free to be planned around the intended subjects.",
      ],
    },
    {
      heading: "IB Mathematics AA or AI, and the three sciences, for students in Kapurthala",
      paragraphs: [
        "Analysis and Approaches has a heavy load of calculus, functions and proof, and suits students who plan engineering, physics or mathematics. Applications and Interpretation uses statistics, financial mathematics and modelling with technology, and suits students headed for business, medicine or social science.",
        "Students from a Punjab Board or CBSE background are usually strong on procedure and slower on interpretation. Tutors therefore give early lessons to modelling questions and to explaining reasoning in words. Past-paper practice builds speed after that.",
        "In the sciences, Physics needs steady problem-solving and unit discipline, Chemistry needs reliable mole calculations, and Biology needs exact vocabulary. Each lesson starts by reviewing the previous week's mistakes.",
        "Internal assessments are the student's own investigations. Tutors can explain the criteria and the design of a fair test, but they do not write, carry out or correct the report.",
      ],
    },
    {
      heading: "Choosing the IGCSE board, tier and subjects in Kapurthala",
      paragraphs: [
        "Start with the board. Cambridge and Pearson Edexcel are both well regarded, but their papers are not interchangeable. If your child is entered through a school in another city, ask which board and which papers are on the entry.",
        "Tier decides the grades available. Cambridge Core caps the top grade, and Extended opens the whole range. Edexcel Foundation and Higher tiers follow the same idea. Students who plan science at IB or A Level should generally sit Extended or Higher.",
        "Subject mix keeps options open. Mathematics, the three sciences and English preserve engineering and medicine, while a student leaning toward business could add economics or business studies.",
        "Students from Punjabi-medium backgrounds often find extended English writing the hardest paper. A few weeks of directed-writing practice, with feedback on each attempt, usually narrows the gap a good deal.",
      ],
    },
    {
      heading: "Do returning NRI families face different problems?",
      paragraphs: [
        "Yes, and they are worth naming. A child who has lived in Canada, the UK or Australia and returns to Kapurthala is usually confident in spoken English and comfortable with discussion, but may have gaps in Hindi or Punjabi reading, in Indian-style mathematics practice and in the pace of the local school year.",
        "Some families move back permanently and enrol the child in a Punjab school. Others return for a stretch, perhaps to look after grandparents, and want the child to keep pace with an overseas syllabus. Either way, a short diagnostic lesson shows where the child is against the paper they will actually sit.",
        "Tutors then plan around what is missing, not around a generic course. For a student who must rejoin an international school later, that continuity is the whole point.",
      ],
    },
    {
      heading: "What will a Kapurthala family need at home for online lessons?",
      paragraphs: [
        "Very little. A laptop or a large tablet, a steady internet connection, a quiet corner and a notebook are enough. A headset helps in a busy household, and a phone on a stand can show handwritten working to the tutor.",
        "Connectivity in Kapurthala city and along the main roads is generally good. In outlying villages and during winter fog or storms it can wobble. A mobile hotspot as a backup is a cheap and sensible precaution.",
        "During the trial lesson the tutor checks sound, screen sharing and how well handwriting shows on camera, and fixes small problems on the spot. After that, lessons run the same way each week.",
      ],
    },
  ],

  process: [
    { title: "Send us the details", description: "Tell us the programme, subject, level and exam session over WhatsApp or email." },
    { title: "See your tutor match", description: "We pick a tutor who has taught that paper and send a short profile." },
    { title: "Take a free lesson", description: "A live class on a real topic from your child's syllabus, without charge or obligation." },
    { title: "Read the rate in writing", description: "If you would like to go on, the rate and plan arrive in writing before booking." },
    { title: "Learn week by week", description: "Regular lessons, a short note after each, and a tutor change if it is not working." },
  ],

  whyPoints: [
    { title: "A tutor who has taught your paper", description: "Not a general helper: someone who has taken students through your exact course and level." },
    { title: "Timed for Doaba life", description: "Slots respect fog days, harvest weeks and festival calendars." },
    { title: "Open about local options", description: "We say plainly that no school in Kapurthala could be confirmed for these syllabuses." },
    { title: "Notes you can act on", description: "Each lesson ends with a short note on what was covered and what comes next." },
    { title: "Coaching, not ghost-writing", description: "Tutors explain and guide; assessed work stays the student's own." },
    { title: "Low-risk beginning", description: "Free first lesson, written rate and a tutor change at no charge." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Kapurthala?", answer: "None that we could confirm. The IB directory and Cambridge and Edexcel listings show no authorised school in Kapurthala, Phagwara or Sultanpur Lodhi. The nearest confirmed options are in Amritsar, Ludhiana and Mohali, and Jalandhar has none we could verify, so live online tuition fills much of the gap." },
    { question: "Can a tutor come to our home in Kapurthala?", answer: "No. Tutors do not visit homes in Kapurthala, because home visits run only in Gurugram and parts of Delhi NCR. Our online home tuition is a live private lesson over video while your child sits at home, taught from India on Indian Standard Time." },
    { question: "How do I find IB and IGCSE tutors in Kapurthala for one subject?", answer: "Write with the programme, subject, level and exam session. We pick a tutor who has taught that paper, send a short profile and set up a free trial. If the match is wrong, we change the tutor at no extra cost." },
    { question: "What does IB tuition cost in Kapurthala?", answer: "The rate depends on level, subject scarcity, lessons per week and the length of the plan. There is no published price list. We send a written quote before booking, so you can compare it calmly with any alternative." },
    { question: "My family has relatives in Canada. Can tutoring help with a move abroad?", answer: "Yes. Tutors help lift grades for IGCSE and IB courses that overseas schools and universities look at, and can bridge gaps between an Indian and an overseas syllabus. Applications themselves are handled by the family and the school." },
    { question: "Is online tuition effective for Higher Level subjects?", answer: "It works well. A shared whiteboard, scanned past papers and live problem solving cover what a classroom does, and one-to-one lessons mean every minute is about your child's gaps. HL Mathematics and the sciences often benefit most." },
    { question: "Can my child switch from a Punjab Board or CBSE school to IB or IGCSE?", answer: "Yes, and starting early helps. Content overlaps more than parents expect, but the style of question is different. Tutors begin with that style and fill content gaps as they appear." },
    { question: "Which IB exam sessions do you cover?", answer: "May and November. The school or registered centre makes the entry, and we plan lessons backwards from the paper dates. IB results are published in July and January." },
    { question: "Will a tutor write the IA, Extended Essay or coursework?", answer: "No. Tutors coach and explain, and never write internal assessments, Extended Essays, TOK essays or coursework. They can explain criteria and give feedback on drafts the student has written." },
    { question: "How does the free trial work?", answer: "It is a live lesson on a real topic from your child's syllabus, with a tutor matched to the subject. There is no fee and no obligation. Afterwards you get a written note, and the rate in writing if you want to continue." },
    { question: "Do you teach both Cambridge and Edexcel IGCSE?", answer: "Yes. Tutors are matched by board code as well as subject, because papers and tiers differ. Tell us your child's board and we will find someone who knows its papers." },
    { question: "Can students from Phagwara, Sultanpur Lodhi or Bholath join?", answer: "Yes. Lessons are online, so any home with a steady connection works. We plan around bus times and harvest weeks, and suggest a hotspot backup in areas that lose signal in fog or storms." },
    { question: "When do lessons take place?", answer: "Weekday evenings and weekend mornings, on Indian Standard Time. Exam blocks can add sessions. Fog days, festivals and wedding weeks are handled by rescheduling." },
    { question: "Is the IB Diploma recognised by Indian universities?", answer: "Generally yes, with an Association of Indian Universities equivalence certificate, and CUET-UG is the usual route to central universities. Engineering and medicine depend on subject choices, so check JEE and NEET rules before fixing Class 11 subjects." },
    { question: "How do we start?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's board, subject and level. We usually reply within a day or two with a tutor match and a trial time." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "See the same service in cities around the country." },
    { label: "IB tutors, all programmes", href: "/ib-tutors/", description: "How IB tutoring is organised at IB Gram." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects." },
    { label: "Diploma Programme tutoring", href: "/programmes/dp/", description: "Support for Classes 11 and 12." },
    { label: "MYP tutoring", href: "/programmes/myp/", description: "Criteria-based support for Classes 6 to 10." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "AA and AI at SL and HL." },
    { label: "Meet our tutors", href: "/tutors/", description: "Profiles of the tutors who teach the lessons." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a free trial." },
    { label: "IB and IGCSE tutors in Jalandhar", href: "/jalandhar/", description: "The nearest large city, twenty minutes from Kapurthala." },
    { label: "IB and IGCSE tutors in Amritsar", href: "/amritsar/", description: "The nearest city with confirmed IB and Cambridge schools." },
    { label: "IB and IGCSE tutors in Hoshiarpur", href: "/hoshiarpur/", description: "Another Doaba town served by the same online model." },
    { label: "IB and IGCSE tutors in Ludhiana", href: "/ludhiana/", description: "Punjab's largest city, with confirmed international schools." },
  ],

  closingHeading: "Book a free first lesson from home in Kapurthala",
  closingBody:
    "Tell us the programme, subject and exam session, and we will match a tutor and arrange a free trial lesson. The rate comes in writing before you decide. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
