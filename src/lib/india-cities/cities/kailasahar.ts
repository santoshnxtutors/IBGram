import type { CitySeoPage } from "../types";

/**
 * Kailasahar (also spelt Kailashahar) is the headquarters of Unakoti district in northern Tripura,
 * on the Manu river. No school there could be confirmed as an IB World School or a Cambridge or
 * Edexcel centre, so stripSchools is empty and the clusters point to Agartala and further afield.
 */
export const kailasahar: CitySeoPage = {
  slug: "kailasahar",
  countryName: "Kailasahar",
  countryNameLong: "Kailasahar, Tripura",
  demonym: "Kailasahar",
  flagCode: "in",
  countryCode: "IN",
  region: "Tripura, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early-evening slots after the sun sets and school ends, with flexibility for rain days and puja weeks",
  lastUpdated: "2026-09-21",
  state: "Tripura",
  stateCode: "IN-TR",
  geo: { latitude: 24.3333, longitude: 92.0167 },
  wikipedia: "https://en.wikipedia.org/wiki/Kailashahar",
  alternateNames: ["Kailashahar", "Kailashahar Tripura", "Unakoti district headquarters", "Kailasahar Unakoti"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Kailasahar | Live Online Home Tuition",
  metaDescription:
    "Private IB and IGCSE tutors for Kailasahar and Unakoti students, taught live online from home, around Tripura's rainy seasons, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Kailasahar",
  heroEyebrow: "IB & IGCSE HOME TUITION FOR KAILASAHAR STUDENTS",
  heroSubtitle:
    "Home tuition for IB and IGCSE students in Kailasahar, given as live private lessons through a laptop at your own table. The Unakoti district headquarters lies more than a hundred kilometres from Agartala, so an international-curriculum classroom is not something a child can simply travel to. A tutor who has taught your exact syllabus can be reached online instead. Give us the programme, subject and exam session, and we set up a free trial lesson.",
  primaryKeyword: "IB and IGCSE tutors in Kailasahar",
  imageAltText: "Kailasahar student following a live IGCSE Physics lesson with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor in Kailasahar",
    "IGCSE tutor in Kailasahar",
    "IB home tuition Kailasahar",
    "IGCSE home tuition Kailasahar",
    "IB private tuition Kailasahar",
    "IB Maths tutor Kailasahar",
    "IGCSE Maths tutor Kailasahar",
    "IB Physics tutor Kailasahar",
    "IB Chemistry tutor Kailasahar",
    "IB Biology tutor Kailasahar",
    "IB DP tutor Kailasahar",
    "IB MYP tutor Kailasahar",
    "IB PYP tutor Kailasahar",
    "IGCSE online tuition Kailasahar",
    "IB tutor Kailashahar",
    "IB tuition Unakoti district",
    "IGCSE tutor Dharmanagar",
    "IB online classes Tripura",
  ],

  heroTrustPoints: [
    "Lessons are live and private, with no pre-recorded videos or big groups",
    "Tutors have taught IB DP, MYP and PYP as well as Cambridge and Edexcel IGCSE",
    "Slots are planned around Tripura's heavy rains and the puja calendar",
    "A free trial class comes first, and a written note follows every session",
    "A change of tutor costs nothing if the first match is not right",
  ],
  heroStats: [
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before any commitment" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "Why Kailasahar families turn to online IB and IGCSE tutoring",
    paragraphs: [
      "In Kailasahar the conversation about schooling usually starts with the Tripura Board of Secondary Education, with CBSE at schools such as Kendriya Vidyalaya, and with degree colleges that feed into Tripura University. Medical and engineering ambitions mean NEET and JEE, and for most households the road runs through Agartala. A smaller group of families is thinking about something wider: an IB Diploma, a Cambridge or Edexcel IGCSE, or a university abroad.",
      "What stands in their way is distance. The state capital is about 137 kilometres away by road, the nearest railhead is at Kumarghat, and none of the schools in town could be confirmed as teaching an international curriculum. Uprooting a child at twelve is a heavy decision. For these households, IB and IGCSE tutors in Kailasahar who teach online offer a different answer: the child stays in the family home and studies with a specialist who has actually taught the course.",
      "Below we describe how this works from a Kailasahar address. The topics are the schools within reach, how Tripura's board sits next to the IB and IGCSE, what shapes a tutor's rate, how the Manu valley's monsoon and the puja season interact with exam sessions, where students progress afterwards, and how subject and tier choices are made. Tutors do not visit homes in Kailasahar. Every lesson is online.",
    ],
  },

  programmesIntro:
    "Four IB stages and two IGCSE boards exist, though in Unakoti they tend to arrive as a surprise. A cousin in Bengaluru or a posting outside Tripura introduces the idea, and parents then work backwards through the stages.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Primary learning organised by units of inquiry, closing with a student-led Exhibition. Sessions here are short and playful, aimed at reading stamina, number sense and a first habit of asking why.",
      countryNote:
        "Many Kailasahar children speak Bengali or Kokborok at home, so a gentle online tutor helps with spoken English alongside the unit work.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "A criteria-marked course covering eight subject groups with a Personal Project at the end. The tutor shows how to read a task, plan a response and meet each assessment strand.",
      countryNote:
        "Pupils coming from state-board classes are accustomed to learning set answers. Online coaching helps them practise explaining reasoning in their own words, which MYP rewards.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects with Theory of Knowledge, an Extended Essay and CAS. Tutoring concentrates on the examined papers and internal-assessment method; no assessed piece is ever written by the tutor.",
      countryNote:
        "A Diploma student near the Manu river has no subject teacher within a day's travel, so a tutor who teaches Higher Level content live is the practical alternative.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A cluster of Diploma courses taken with career-focused study and a reflective project. Tutors take the academic strands and the English that underpins them.",
      countryNote:
        "Almost unheard of in this district. We accept it on request and match a tutor to each Diploma course chosen.",
    },
  ],

  subjectsIntro:
    "Each tutor is picked for the specific course, its level and its examiners' habits, and for patience with a student who may never have seen an IB command term before.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Functions, calculus and algebraic argument, with each paper's layout practised until timing feels natural." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Probability, statistics and modelling, with calculator technique built into every topic." },
    { name: "Physics", levels: "SL / HL", description: "Waves, mechanics, fields and atomic ideas, alongside data-handling questions and lab-report structure." },
    { name: "Chemistry", levels: "SL / HL", description: "Reaction energy, equilibrium, organic routes and the quantitative skills behind them." },
    { name: "Biology", levels: "SL / HL", description: "From the cell to ecology, with attention to the exact words mark schemes expect; Tripura's forest and river ecology gives vivid examples." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and development, with rubber, bamboo, tea and border trade as worked examples for essays." },
    { name: "Business Management", levels: "SL / HL", description: "Case reading, financial tools and the application of theory to an unseen organisation." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, programming logic and the exam's pseudocode conventions." },
    { name: "Psychology", levels: "SL / HL", description: "Core studies, evaluation language and the structure of a scoring essay." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Analysing unseen texts, writing commentary and building comparative arguments." },
    { name: "Hindi B", levels: "SL / HL", description: "Reading, writing and speaking practice for those taking Hindi as a language beyond their first." },
    { name: "Bengali and Kokborok support", levels: "School-based", description: "Help with a home-language element where a school allows it, valuable in a district where Bengali dominates and Kokborok is also spoken." },
    { name: "Theory of Knowledge", levels: "Core", description: "Conversation practice on knowledge questions and the exhibition, with the essay left to the student." },
  ],

  igcseSubjectsIntro:
    "IGCSE tutors are matched by board and syllabus code, for the Cambridge and Pearson Edexcel papers are laid out differently even when a subject carries the same name.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Algebra, geometry, graphs and statistics, drilled with timed papers." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, light, circuits and nuclear ideas, with practical-skills questions." },
    { name: "Chemistry", levels: "Core / Extended", description: "Atomic structure, reactions, electrolysis and simple organic chemistry." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, nutrition, inheritance and ecosystems, with attention to graph work." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For students on a double-award science route." },
    { name: "English as a First or Second Language", levels: "Core / Extended", description: "Reading, directed writing and oral preparation." },
    { name: "Computer Science", levels: "Single tier", description: "Programming logic, number systems and networks." },
    { name: "Economics and Business Studies", levels: "Single tier", description: "Key ideas, calculations and case responses." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Comprehension, writing and speaking." },
    { name: "Bengali", levels: "School-based", description: "Where a school registers it, practice in reading and composition for a first or second language paper." },
  ],

  regionsTitle: "Kailasahar town, Unakoti hills, Kumarghat and Dharmanagar",
  regionsIntro:
    "Students here live in a river-valley town and the villages around it. What matters is how far each place is from the roads, how the rain affects the commute and which larger town families look toward.",
  regions: [
    { name: "Kailasahar town centre", note: "The district headquarters beside the Manu river, with offices, a degree college and an ITI. Government households are common, and the town quietens early on weekday evenings." },
    { name: "Along the Manu river", note: "Neighbourhoods and villages on the river's banks. Floods and heavy rain can interrupt travel and power, so an extra spare slot each week is built into the lesson plan." },
    { name: "Unakoti hills", note: "About eight kilometres out, famed for its rock-cut carvings. The spring Ashokastami fair brings visitors and crowds, which can disturb traffic and routines for a few days." },
    { name: "Kumarghat", note: "The railhead about twenty-six kilometres away, the town many families use to reach Agartala or Assam, and a useful point for planning any boarding or relocation." },
    { name: "Dharmanagar", note: "The larger town to the north, headquarters of North Tripura district, with its own colleges and markets. Some households look here before they look to Agartala." },
    { name: "Panisagar and Kanchanpur", note: "Northeastern towns toward the Mizoram border, where families often combine government service, tea and plantation work, and travel for secondary schooling." },
    { name: "Kamalpur and Longthari valley", note: "Southern settlements, hilly and wooded, where mobile signal can be patchy and a stable connection is tested before the first lesson." },
    { name: "Agartala", note: "The state capital, about 137 kilometres away, with the nearest commercial airport and the region's best-known schools and colleges; most boarding conversations lead here." },
  ],

  tutorsIntro:
    "Tutors teach from across India on Indian Standard Time. In Tripura the sun sets early, so lessons are usually in the early evening, an hour when most tutors on this rota are already teaching.",

  sections: [
    {
      heading: "Which IB and IGCSE schools are within reach of Kailasahar?",
      paragraphs: [
        "None that we could verify, which is the honest starting point. Kailasahar has a Kendriya Vidyalaya, an English-medium school and a number of private and government schools, but we found no confirmation that any of them is an authorised IB World School or an approved Cambridge or Edexcel centre. Pupils follow the Tripura Board or CBSE.",
        "The nearest places with established international programmes lie outside the state, in Guwahati and Kolkata, with a couple of options at Agartala for other boards. Reaching them means a long road to Kumarghat or Agartala, then a train or flight. Families who want a child inside an IB classroom therefore choose boarding, a posting to another state, or a long-term move.",
        "The households that ask about IB and IGCSE here are varied. Officers and bank staff posted in Unakoti, doctors and teachers who studied elsewhere, families with relatives in Bengaluru or the Gulf, and parents who simply want their child to keep options open beyond the state's boards.",
        "We have deliberately left unverified school names off this page. If a school in the district announces an IB candidacy or a Cambridge licence, parents will hear first, and tutoring on that syllabus can begin within a week of your telling us.",
      ],
    },
    {
      heading: "Tripura Board, CBSE, IB and IGCSE: how do the systems differ?",
      paragraphs: [
        "Tripura's Board of Secondary Education runs the Madhyamik at Class 10 and the Higher Secondary at Class 12, with Bengali and English as common media of instruction and Kokborok taught in some schools. CBSE appears at central schools. After Class 12, science students look to NEET and JEE Main, while arts and commerce students often enrol at Ramkrishna Mahavidyalaya or move to Agartala.",
        "The IB is different in nature. Its marking looks for application and argument, not memory alone, and the Diploma adds an essay, a knowledge course and service. IGCSE lies between: subject papers at Core or Extended level, with a defined syllabus examined in set series. Making the move is easier at Class 8 or 9 than at Class 11.",
        "The table gives parents a rough map for choosing.",
      ],
      table: {
        caption: "How the main systems look from a Kailasahar household",
        columns: ["System", "Assessment style", "Language of teaching", "Usual next step", "Tutor supply nearby"],
        rows: [
          ["Tripura Board (Madhyamik and HS)", "State papers in the spring", "Bengali or English", "NEET, JEE Main, Tripura University colleges", "Plenty"],
          ["CBSE", "Board papers at Class 10 and 12", "English or Hindi", "JEE, NEET, CUET-UG", "Some"],
          ["Cambridge or Edexcel IGCSE", "Tiered papers in set series", "English", "Class 11 IB, A Level or an Indian board", "Very few"],
          ["IB Diploma", "Exams plus internal assessments, essay and CAS", "English", "AIU recognition, CUET-UG, study abroad", "Almost none"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Kailasahar?",
      paragraphs: [
        "We do not publish a price list for IB and IGCSE tuition in Kailasahar, because the cost of a plan follows a few variables that differ from family to family. What we do is send the rate in writing before a trial is booked, so no figure surprises you after the first class.",
        "The level and the subject carry the most weight. Higher Level Diploma Chemistry, taught by a person who has marked or coached many papers, is priced differently from a Class 7 MYP science class. Scarcity adds to it: a tutor with Further Mathematics depth is simply harder to find than a general science teacher.",
        "Frequency and duration then set the monthly outlay. Two classes a week for a school year is a different plan from three intense weeks before an exam series. We describe the shape of the arrangement first, then quote for that shape, rather than offering one number that suits nobody.",
        "A fair comparison for a Kailasahar parent is the true cost of sending a child to Agartala for classes: the long road, the overnight stays and the days lost from school. An online class at the family table avoids all of that, which is often a bigger saving than the lesson fee itself.",
      ],
      bullets: [
        "Programme and level (SL, HL, Core, Extended)",
        "How rare qualified tutors are in the subject",
        "Lessons per week and how long the plan runs",
        "Regular support versus exam-season blocks",
      ],
    },
    {
      heading: "Online tutoring, Agartala classes, local teachers or self-study: what works from Kailasahar?",
      paragraphs: [
        "A student here has four realistic choices. Live one-to-one tutoring online places a specialist in the room without travel. Classes in Agartala hold genuine expertise but mean a long trip each time and fixed group timings. A local teacher knows the board and the town, though few have prepared pupils for international papers. Self-study with past papers works only for the most organised learner.",
        "They can be combined. Some families keep a local teacher for Bengali or an extra language and add an online specialist for Mathematics and the sciences, where syllabus knowledge decides marks.",
      ],
      table: {
        caption: "Four ways to get IB or IGCSE help from Kailasahar",
        columns: ["Choice", "Expert depth", "Journey", "Timing", "Fits"],
        rows: [
          ["Live one-to-one online", "High, matched to the exact course", "None", "Evenings and weekends, easily moved", "Every programme and subject"],
          ["Classes in Agartala", "High but pitched at a group", "More than 130 km each way", "Fixed batches", "Families relocating or boarding there"],
          ["Local teacher in town", "Usually state-board trained", "Short", "Reasonable", "Revision on a familiar syllabus"],
          ["Self-study with past papers", "Depends on the learner", "None", "Total", "A very organised older student"],
        ],
      },
    },
    {
      heading: "How do monsoon rains and the puja calendar shape study in Kailasahar?",
      paragraphs: [
        "Few Indian towns feel the rain as strongly as northern Tripura, where yearly rainfall runs to roughly two and a half metres. The wet season brings floods, landslips, broken roads and unreliable power, and a lesson plan has to expect interruption. Spare slots are built in, and a lesson can move to another day with a message.",
        "The festival year adds its own pattern. Durga Puja, usually in October, closes schools for several days and fills evenings with pandal visits. Kali Puja and Diwali follow, then Saraswati Puja in winter, Poila Boishakh in April, and the Ashokastami fair at Unakoti in spring. Exam series for the IB, Cambridge and Edexcel fall across these weeks, so a revision plan needs dates fixed early.",
        "Seasonal temperature matters less than humidity, which can make long afternoons sticky and tiring. Early-evening classes, a fan or cooler at the study table and a charged backup device keep sessions productive.",
      ],
      table: {
        caption: "Calendar pressure points for a Kailasahar student",
        columns: ["Months", "What is happening", "Effect on study", "How tutoring adapts"],
        rows: [
          ["Jan to Mar", "Saraswati Puja, Madhyamik and HS exams, early IGCSE series", "Busy exam weeks", "Mock papers on firm dates, short sessions"],
          ["Apr to May", "Poila Boishakh, Ashokastami fair, IB May session, rising heat", "Humid, tiring days", "Early-evening slots, buffer minutes"],
          ["Jun to Sep", "Heavy monsoon, school reopens, IB results in July", "Floods and power cuts", "Flexible rescheduling, foundation lessons"],
          ["Oct to Nov", "Durga Puja, Kali Puja, Diwali, November IB and IGCSE sessions", "Long school breaks and distraction", "Compact revision blocks, dates set early"],
          ["Dec", "Winter break, IB January results", "Calmer weeks", "Review of strengths and a plan for next term"],
        ],
      },
    },
    {
      heading: "Where can a Kailasahar student go after IB or IGCSE?",
      paragraphs: [
        "A Diploma holder from Unakoti can look three ways: universities in India, universities abroad and professional courses. The Association of Indian Universities issues an equivalence certificate for the IB Diploma, and a growing number of institutions also take CUET-UG scores. In Tripura itself, Tripura University, NIT Agartala and the state medical colleges form the local set of options.",
        "Engineering and medicine need extra care. A Diploma with Mathematics, Physics and Chemistry or Biology can be positioned toward JEE Main or NEET, but eligibility rules are revised from time to time, so check the current notices before fixing subjects. Outside the state, Kolkata, Guwahati, Bengaluru and Delhi are the usual destinations.",
        "IGCSE students move on to Class 11 in the IB, A Level or an Indian board. Abroad, the United Kingdom, Canada, Australia and the United States are the most common choices, and predicted grades and school references weigh heavily in those applications.",
        "A tutor helps a family see how today's subject choices keep tomorrow's doors open. A student who drops Mathematics at fifteen may find several degree routes closed by seventeen.",
      ],
    },
    {
      heading: "How are IB Mathematics AA and AI and the sciences taught online?",
      paragraphs: [
        "Analysis and Approaches is the course for students who enjoy calculus, algebraic argument and proof, and it is the usual choice for engineering and pure science. Applications and Interpretation leans on data, modelling and technology, and suits students heading toward economics, business or social science. Both are offered at Standard and Higher Level, and a trial lesson often shows which fits.",
        "A tutor fills what school teaching leaves open: a calculus unit left unfinished, doubtful skill with the graphical calculator, or answers that skip the working. Paper 1 and Paper 2 demand different rhythms, so timed practice under exam conditions is part of the plan.",
        "In the sciences, Physics rewards a feel for units and orders of magnitude, Chemistry punishes weak mole arithmetic, and Biology pays for precise vocabulary. The tutor uses a shared whiteboard and past questions, and the parent receives a short written note after the session.",
        "Higher Level pupils benefit from longer sessions before mocks, since the content is deeper. Standard Level pupils usually do better with brief, regular classes than with rare marathon ones.",
      ],
    },
    {
      heading: "Core or Extended in IGCSE, and Cambridge or Edexcel: how should a Kailasahar student decide?",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended papers in most subjects. Core limits the highest grade available, whereas Extended covers the full scale, so a student intending to continue with Mathematics or sciences normally takes Extended. Pearson Edexcel uses Foundation and Higher tiers on a similar principle.",
        "The choice follows the child's current level and what comes next. A pupil aiming for the Diploma or A Level in a science should usually be entered at the upper tier. One who is struggling with the content may do better at the lower tier, and a tutor can judge this after some weeks of lessons, not on day one.",
        "The overall spread of subjects counts as much as the tier. A healthy mix of languages, mathematics, sciences and a business or humanities subject protects Class 11 options. Tutors explain what each choice opens or closes, and how school-assessed components differ between the two boards.",
        "For pupils from Bengali-medium schools, the common obstacle is extended English writing, particularly directed writing and structured answers. It is a fixable gap that regular practice with feedback closes within a term or two.",
      ],
    },
  ],

  schoolClusters: [
    {
      city: "Kailasahar and Unakoti district",
      note: "No school in the district could be confirmed as an authorised IB World School or a listed Cambridge or Edexcel centre. Schools here teach the Tripura Board or CBSE, so local choice for IB and IGCSE is very limited.",
      schools: [],
    },
    {
      city: "Nearby: Agartala and the northeast",
      note: "These schools were confirmed on other pages of ours as the closest established options in the wider northeast. Distances from Kailasahar are long, so treat them as boarding or relocation choices, not as daily schools.",
      schools: ["International School Guwahati", "Sankardeva Gurukul"],
    },
    {
      city: "Nearby: Kolkata",
      note: "Kolkata has established IB and Cambridge schools and is reachable by train or flight from Agartala. Suitable mainly for families already planning a longer move.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
  ],
  schoolDisclaimer:
    "These names appear only to show where real IB or Cambridge options lie for Kailasahar families. IB Gram is an independent tutoring service, unconnected to any school, the IB, Cambridge or Pearson, and each school makes its own admission decisions.",

  modesIntro:
    "Because no tutor travels to a Kailasahar address, the three formats here are all delivered over video. In-person visits exist only in Gurugram and parts of Delhi NCR. Whatever you pick, the class is live, private and timed for a Unakoti evening.",
  modes: [
    {
      title: "Private online lessons at home",
      description: "The usual choice: your child, a laptop and a specialist who teaches the board and level in question.",
      bullets: ["Shared digital whiteboard and scanned past papers", "Worked solutions explained line by line", "Brief written summary sent to a parent"],
    },
    {
      title: "Pre-exam intensive blocks",
      description: "A run of closely spaced classes in the weeks before school mocks or the May and November series.",
      bullets: ["Papers sat against the clock, then dissected", "Mark-scheme wording and command terms rehearsed", "Reserve slots for flood days and outages"],
    },
    {
      title: "One class a week, all year",
      description: "A modest, sustainable rhythm in a single subject that keeps pace with school without crowding the evening.",
      bullets: ["Sensible in MYP and early IGCSE years", "Skipped for Durga Puja week", "Switchable to another subject later"],
    },
  ],

  process: [
    { title: "Message us", description: "Send the board, subject, level and exam series through WhatsApp or email, plus anything the school has said about pace." },
    { title: "See your tutor", description: "A specialist who has taught that very course is chosen, and a short profile reaches you before class." },
    { title: "Sit a no-cost trial", description: "An honest class on an honest topic lets your child form a view of the tutor's style." },
    { title: "Read the fee", description: "Should the trial go well, the fee and plan arrive in writing. Nothing starts until you say so." },
    { title: "Settle into a rhythm", description: "Live classes each week, a written note after every one, and a swap if the pairing is poor." },
  ],

  whyPoints: [
    { title: "Right tutor for the exam", description: "A Diploma Biology candidate is not passed to a generalist. Whoever teaches has handled the paper your child will face." },
    { title: "Planned around Unakoti weather", description: "Floods, outages and puja weeks are allowed for, with reserve classes so nothing is lost." },
    { title: "Plain about local options", description: "Where no nearby school offers your programme, we say that outright and explain the consequence for the year." },
    { title: "Progress you can read", description: "A brief summary after each class says what was covered and what comes next." },
    { title: "Explaining, not ghost-writing", description: "Tutors teach method and content and leave internal assessments, essays and coursework to the student." },
    { title: "Free to step away", description: "The trial costs nothing, fees are written down and a new tutor is arranged without extra charge." },
  ],

  faqs: [
    { question: "Can I find an IB tutor if I live in Kailasahar?", answer: "Yes, over video. We found no IB specialist teaching inside the town, so the tutor joins from another part of India while your child sits at home. Matching is by programme, subject and level, and the person chosen has coached the real papers, something a teacher steeped in the Tripura Board seldom has." },
    { question: "Will someone visit our house in Kailasahar?", answer: "No. Visits to the home are limited to Gurugram and parts of Delhi NCR, and Kailasahar sits outside that area. What you get is online tuition at home: a private live class through your laptop, led by a specialist picked for the subject rather than for the postcode." },
    { question: "What does online home tuition mean here, and is it private?", answer: "It means private tuition received at home, with the tutor on screen. Each class has one teacher and one learner, never a batch. For younger children a parent may sit in at first. Afterwards a written note records the topics, the stumbling points and the next step." },
    { question: "Which Kailasahar schools offer IB or IGCSE?", answer: "None that we could confirm. Local schools lean toward the Tripura Board and CBSE. Established international programmes are found in Guwahati and Kolkata, a long way off. Should a district school announce an international curriculum, let us know and tutoring on that syllabus can start in about a week." },
    { question: "How is the cost of IB tuition decided?", answer: "Four things matter: the programme and level, how few qualified tutors exist in the subject, the number of weekly classes and the length of the plan. Prices are not published. After you describe your child's situation we put a figure in writing, ahead of any trial being scheduled." },
    { question: "Is it realistic to move from the Madhyamik track to IGCSE?", answer: "It is, particularly before Class 9. Pupils on the state track usually need bridging in written English, Mathematics and Science. Switching later is harder yet still possible. A trial class lets a tutor locate the gaps and estimate how many weeks of preparation would be sensible." },
    { question: "What happens to classes during floods or power cuts?", answer: "A reserve slot is built into the weekly plan, and any class can be moved with a quick message. Missed sessions are rescheduled instead of lost. Tutors recommend a charged second device and mobile data as a fallback, since lessons are live and no recordings stand in for them." },
    { question: "Will a tutor write my child's IA or Extended Essay?", answer: "Never. Tutors explain the criteria, show what strong work looks like, and comment on drafts the student has written. The topic, research, argument and wording remain the student's, which is what the IB demands and what moderators look for in submitted work." },
    { question: "Does IB Gram teach both Cambridge and Edexcel IGCSE?", answer: "Yes. Their papers, tiers and exam series differ, so we pair a tutor by board code as well as by subject. Let us know which one your child is registered with. Tutoring for AS and A Level can also be arranged for students planning that route afterwards." },
    { question: "How do Core and Extended papers differ?", answer: "Core covers a smaller part of the syllabus and limits the top grade. Extended goes wider and lets a candidate reach every grade. Anyone expecting to carry Mathematics or a science further normally takes Extended. Edexcel offers Foundation and Higher on a similar basis. A few weeks of lessons show which tier is realistic." },
    { question: "How early before an exam should lessons begin?", answer: "For a major exam, four to six months gives comfortable room. Ten to twelve weeks is the shortest sensible window. The IB Diploma examines in May and November, while IGCSE boards hold several series a year. In Kailasahar, add a few extra weeks to absorb rain-related disruption." },
    { question: "Will an IB Diploma be accepted by Indian universities?", answer: "Broadly yes. An equivalence certificate is issued by the Association of Indian Universities, and CUET-UG scores are accepted at many institutions. Engineering and medicine need more care because JEE and NEET eligibility changes. Fix subject choices early and check each university's requirements before applying." },
    { question: "What kind of connection does a lesson need?", answer: "A few megabits per second will do, along with a laptop, headphones and a working microphone. Use mobile data as a backup. In wooded or hilly places near Longthari, signal may waver, so try a test call a day ahead of the trial and keep a second device topped up." },
    { question: "Does the free trial lesson come with strings attached?", answer: "No. It is a genuine class, with no obligation to continue. Afterwards you receive a written rate and nothing begins until you agree. If the tutor feels wrong for your child, a replacement is arranged without a fee." },
    { question: "Can we replace the tutor if the chemistry is off?", answer: "Certainly, at no cost. Compatibility counts for more than most parents expect, especially with younger students and hard subjects. Tell us whether pace, manner or style was the issue and we shortlist someone else. Our written class notes also let us spot a poor fit early." },
    { question: "My child is in Class 8 and may join an IB school later. Can you help?", answer: "Yes. In the term before a move, a bridging plan usually covers MYP-style tasks, written English and the subjects the entrance test will probe. A tutor who has taught MYP helps the child arrive at ease. Admission itself is never promised because each school decides alone." },
    { question: "What is the quickest way to begin?", answer: "Write on WhatsApp to +91 7439 368 115 or email support@ibgram.com, giving programme, subject, level, board and exam series. A tutor suggestion and trial time normally come back within a day, and the fee is shown in writing before any booking." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "How the same online service supports students in towns and cities nationwide." },
    { label: "IB tutors, all programmes", href: "/ib-tutors/", description: "A fuller picture of the way IB tutoring is organised." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects with tutors who know each board." },
    { label: "Diploma Programme help", href: "/programmes/dp/", description: "Subject coaching across Classes 11 and 12." },
    { label: "Middle Years Programme help", href: "/programmes/myp/", description: "Guidance on criterion-based tasks from Class 6 to Class 10." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "Analysis and Approaches alongside Applications and Interpretation." },
    { label: "Meet the tutors", href: "/tutors/", description: "The people who teach IB and IGCSE with us." },
    { label: "Contact us", href: "/contact-us/", description: "Ask something or request a trial class." },
    { label: "IB and IGCSE tutors in Agartala", href: "/agartala/", description: "The state capital, roughly 137 kilometres from Kailasahar." },
    { label: "IB and IGCSE tutors in Dharmanagar", href: "/dharmanagar/", description: "The North Tripura town lying up the road from Kailasahar." },
    { label: "IB and IGCSE tutors in Silchar", href: "/silchar/", description: "The Barak Valley city just across the Assam border." },
  ],

  closingHeading: "Begin with a free trial class at home in Kailasahar",
  closingBody:
    "Share your child's programme, subject and exam series. A tutor is lined up, a trial class is arranged and the fee is stated in writing before you commit to anything. Reach us on support@ibgram.com or at +91 7439 368 115 on WhatsApp. IB Gram is an independent service and is not linked to the IB, Cambridge, Pearson or any school.",
};
