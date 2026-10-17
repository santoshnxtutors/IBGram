import type { CitySeoPage } from "../types";

/**
 * /nedumangad/ - IB and IGCSE tutoring page for Nedumangad, Thiruvananthapuram district, Kerala. No school in
 * Nedumangad is confirmed to teach IB or Cambridge/Edexcel IGCSE, so stripSchools is empty; clusters reuse the
 * Trivandrum International School and Kochi names from existing pages. All lessons online.
 */
export const nedumangad: CitySeoPage = {
  slug: "nedumangad",
  countryName: "Nedumangad",
  countryNameLong: "Nedumangad, Kerala",
  demonym: "Nedumangad",
  state: "Kerala",
  stateCode: "IN-KL",
  flagCode: "in",
  countryCode: "IN",
  region: "Kerala, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings and Sunday mornings that steer clear of Onam week, red-alert rain days and the SSLC and Plus Two exam season",
  lastUpdated: "2026-09-21",
  geo: { latitude: 8.603, longitude: 77.0028 },
  wikipedia: "https://en.wikipedia.org/wiki/Nedumangad",
  alternateNames: ["Nedumangadu", "Nedumangad Thiruvananthapuram", "Nedumangad Trivandrum"],
  stripSchools: [],

  title: "Nedumangad IB & IGCSE Tutors | One-to-One Online Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Nedumangad students near Thiruvananthapuram: private one-to-one lessons around monsoon and Onam. Free trial lesson first.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Nedumangad",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR NEDUMANGAD FAMILIES",
  heroSubtitle:
    "Private tuition from home for Nedumangad students on the IB or IGCSE, taught live and one to one over video. The town lies about twenty kilometres from Thiruvananthapuram's international-board schools, yet school runs, hill-road traffic and rain add up, so many families bring a specialist to the study table through a laptop instead.",
  primaryKeyword: "IB and IGCSE tutors in Nedumangad",
  imageAltText: "A Nedumangad student in a live online IB Biology lesson, laptop and notes on a home desk beside a rainy window",
  secondaryKeywords: [
    "IB tutor Nedumangad",
    "IGCSE tutor Nedumangad",
    "IB home tuition Nedumangad",
    "IGCSE home tuition Nedumangad",
    "IB private tuition Nedumangad",
    "IB Maths tutor Nedumangad",
    "IGCSE Maths tutor Nedumangad",
    "IB Physics tutor Nedumangad",
    "IB Chemistry tutor Nedumangad",
    "IB Biology tutor Nedumangad",
    "IB DP tutor Nedumangad",
    "IB MYP tutor Nedumangad",
    "IB PYP tutor Nedumangad",
    "IGCSE online tuition Nedumangad",
    "IB tutor Vellanad Palode Vithura",
    "IGCSE tutor Nedumangad Trivandrum",
    "online IB tutor Thiruvananthapuram district",
    "Cambridge IGCSE tutor Nedumangad Kerala",
  ],

  heroTrustPoints: [
    "A tutor who has already handled your child's exact IB subject or IGCSE code",
    "Everything runs online in Nedumangad; tutors visit homes only in Gurugram and parts of Delhi NCR",
    "A brief written recap after each class and an easy route to a new tutor",
    "One free trial lesson, then the rate in writing",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The IB from start to finish" },
    { value: "Cambridge + Edexcel", label: "IGCSE boards covered" },
    { value: "IST", label: "Indian hours, no time-zone juggling" },
    { value: "Free trial", label: "See the teaching first" },
  ],

  intro: {
    heading: "International-board study in the hill taluk east of Thiruvananthapuram",
    paragraphs: [
      "Nedumangad is a municipal town and taluk headquarters in Thiruvananthapuram district, on the road that climbs towards Ponmudi and the Western Ghats foothills. Households include government staff, Gulf returnees, small traders, farmers with coconut and rubber holdings, and a growing group who work at Technopark or at the space-research centres in the capital. A few of these families are now asking about an international board for their children.",
      "No school in Nedumangad itself is one we have been able to verify for the IB or for a Cambridge or Pearson Edexcel IGCSE, so none is presented as local. Schools nearby follow the Kerala State Board, CBSE or ICSE. The closest international-board school we can verify sits in Thiruvananthapuram city, and most families pair a seat there with extra lessons at home.",
      "In practice the tutor joins from a desk elsewhere in the country while the child works in their own room, with a laptop, a notebook and a shared writing board. A teacher in Chennai, Bengaluru or Pune can be picked because they have taught this syllabus several times, and the crawl along the Nedumangad to Trivandrum road is taken out of the week.",
      "We are an independent tutoring service and have no tie to the IB, Cambridge, Pearson or any school named below. Tutors coach and comment on practice; nobody writes a student's Internal Assessment, Extended Essay, TOK essay or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, and Cambridge and Edexcel IGCSE",
      "Live private sessions in English from tutors based across India",
      "A free sample lesson before a rate is mentioned",
      "Gurugram and parts of Delhi NCR are the only places tutors visit homes; in Nedumangad all teaching is online",
    ],
  },

  programmesIntro:
    "Nedumangad families normally reach the IB through a particular decision: a seat in Thiruvananthapuram, a posting abroad, or a plan for a university overseas. The summaries below show what each stage involves and where a tutor is useful.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "Learning is arranged as units of inquiry and ends in a student-led Exhibition. No external paper is set. Sessions with a tutor stay brief and warm, building reading stamina, spoken English, number sense and a readiness to explain an idea.",
      countryNote:
        "A Malayalam-speaking child heading for a PYP classroom often gains from relaxed spoken-English practice over several months before admission.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is marked against set criteria, and the programme closes with a Personal Project. Pupils raised on the State Board syllabus know a great deal but may not have practised comparing, justifying and reflecting in written English, so that is where sessions concentrate.",
      countryNote:
        "Kerala students are often strong at textbook science; MYP tutoring adds lab-report writing, open-ended problems and project planning.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects, at least three at Higher Level, alongside TOK, the Extended Essay and CAS. The top total is 45 points and papers fall in May or November. Internal assessments spread across two years and feed into each subject grade.",
      countryNote:
        "DP students from Nedumangad typically attend a school in Thiruvananthapuram or further away, and lean on online lessons for evenings and term breaks.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A CP student takes two or more Diploma courses beside a career-focused qualification and a reflective strand. Few Indian schools run it, yet the Diploma courses inside are assessed as in the full DP.",
      countryNote:
        "Enquiries for CP from Nedumangad are rare; if one arrives, the Diploma courses are treated just as they would be for a DP candidate.",
    },
  ],

  subjectsIntro:
    "Kerala has a proud tradition in mathematics and biology, so those two come up constantly, but languages, economics and computing are equally well staffed. Name the subject, level and exam session, and we search for someone who has taught precisely that course.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof. Kerala students are usually fluent in procedure and need practice stating why each step is valid." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology, using data from local weather, crops and trade." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics, with space science as a natural source of examples in this district." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative work, energetics, kinetics and organic chemistry, with regular data-booklet drills." },
    { name: "IB Biology", levels: "HL / SL", description: "A content-heavy course cut into recall, application and command-term practice, with Western Ghats biodiversity as a frequent case." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and evaluation, drawing on remittance income, spice and rubber markets and the Kerala development model." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies, business tools and the internal investigation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Reading unseen texts closely and writing comparisons, for students who think first in Malayalam." },
    { name: "IB Malayalam B", levels: "HL / SL", description: "Comprehension, writing and oral practice for students keeping Malayalam in their Diploma." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language skills and oral preparation." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and a staged internal project, relevant to the Technopark job market." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking, using the Western Ghats, backwaters and monsoon patterns as local material." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, fieldwork method and extended answers." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, research methods and essay structure." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel both award IGCSE, and their papers differ, so the first question we ask is which board your child will face. These are the subjects Nedumangad families raise most, with Malayalam included for those who want a home language.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths across a calculator and a non-calculator paper, with Extended drills in algebra and geometry." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus, functions and vectors for strong students heading to Diploma Maths." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson's two-paper Maths, where method earns marks." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, forces, electricity and waves, plus alternative-to-practical questions." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, rates, electrolysis and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, human biology, plants and ecology." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing, listening and speaking for Malayalam speakers." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming logic, data and networks." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, government and international trade with data questions." },
    { name: "IGCSE Environmental Management 0680", levels: "Grade 9-10", description: "Human impact, resources and sustainable use, a natural fit in the Ghats foothills." },
    { name: "IGCSE Malayalam as a Second Language", levels: "Grade 9-10", description: "Language skills for students who want Malayalam on the certificate, subject to the board's current offering." },
  ],

  regionsTitle: "Nedumangad localities and nearby places our tutors teach online",
  regionsIntro:
    "A video lesson is the same whether the student lives by the town centre or high in the hills toward Ponmudi. What changes is the household day, so these notes cover how families across the taluk tend to organise school hours, hill roads, rain and the pull of the capital.",
  regions: [
    { name: "Nedumangad town and the bus station", note: "The commercial centre of the taluk; many parents commute to the capital, so lessons usually begin after they return." },
    { name: "Karakulam", note: "A residential area on the Thiruvananthapuram side, popular with families who work in the city and want a school seat there." },
    { name: "Aruvikkara", note: "Known for its dam and water supply; a quiet neighbourhood where students often study in the evening after an hour on the road." },
    { name: "Vembayam", note: "A semi-rural belt north of Nedumangad where a long school commute makes at-home lessons appealing." },
    { name: "Vellanad", note: "A growing town south-east of Nedumangad, reached by winding roads that slow in heavy rain." },
    { name: "Palode", note: "A hill-edge town known for a tropical botanic garden and research institute, home to several families in science careers." },
    { name: "Vithura", note: "Near the Ponmudi road and a national science-education campus; parents here take a keen interest in strong Maths and science teaching." },
    { name: "Anad and Pazhakutty", note: "Smaller localities on the approaches to the town, with mixed farming and salaried households." },
    { name: "Kallar and the Ponmudi foothills", note: "Hill communities where mobile data can be weak, so test a wired connection or a nearby signal point before lessons start." },
    { name: "Thiruvananthapuram city", note: "The capital, about an hour away in traffic, where families compare international-board schools and a few students board or rent nearby." },
  ],

  schoolDisclaimer:
    "We list the schools below only to show where IB and IGCSE classrooms exist within reach of Nedumangad. IB Gram has no arrangement with any of them, or with the IB, Cambridge or Pearson, so please check programmes, fees and admission rules directly with each school.",
  schoolClusters: [
    {
      city: "Local: Nedumangad taluk",
      note: "No school in Nedumangad is one we can confirm for IB or Cambridge or Edexcel IGCSE, so none is listed. Local schools follow the Kerala State Board, CBSE or ICSE.",
      schools: [],
    },
    {
      city: "Nearby: Thiruvananthapuram",
      note: "The capital, roughly twenty kilometres away, holds the school we can verify in this district. It also appears on our Thiruvananthapuram and Neyyattinkara pages.",
      schools: ["Trivandrum International School"],
    },
    {
      city: "Nearby: Kochi",
      note: "Some families look north to Kochi for a wider choice, often combined with relatives' homes or boarding; it is listed on our Thiruvananthapuram page.",
      schools: ["The Indian Public School, Kochi"],
    },
  ],

  modesIntro:
    "Teaching in Nedumangad is always by video. Families then decide how steady or intensive they want it: a weekly lesson, a term with notes and reviews, or a short run of focused classes before papers.",
  modes: [
    {
      title: "Steady weekly lesson",
      description:
        "A fixed slot with one tutor. The student brings problems and questions, the tutor covers the next idea, and errors are fixed while the working is still on screen.",
      bullets: [
        "Tutor chosen for subject, level and board",
        "Usually one hour per week",
        "Working displayed on a shared board",
        "Fits IGCSE, MYP and early DP",
      ],
    },
    {
      title: "Term plan with progress notes",
      description:
        "A map of the term, a short recap after each class and a check-in every few weeks. Parents who never studied these boards can still see where their child stands.",
      bullets: [
        "Plain-language summaries",
        "Check-ins that reorder topics when needed",
        "Sits alongside school and tuition-centre timetables",
        "Extra sessions before class tests",
      ],
    },
    {
      title: "Pre-paper intensive",
      description:
        "As mocks and the May or November sessions approach, lessons become more frequent and are mostly timed practice with careful marking.",
      bullets: [
        "Papers marked in the board's style",
        "Two to four sessions a week where possible",
        "Booked around Onam and peak monsoon weeks",
        "Best started about three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Nedumangad, and where do families look?",
      paragraphs: [
        "Not one we can verify. Nedumangad is well supplied with State Board, CBSE and ICSE schools, including aided and private institutions with long histories, but none is a school we can confirm for the IB or the Cambridge or Edexcel IGCSE. If any institution says otherwise, ask to see its authorisation and the list of subjects it currently examines.",
        "The nearest verified option is Trivandrum International School in the capital. Families taking that route tend to shift towards Karakulam, Pattom or Kowdiar, accept a long daily drive, or investigate boarding. Admission calendars, age rules and fees differ by school and should be checked with each directly.",
        "A second group looks north to Kochi, where The Indian Public School is among the names on our other Kerala pages. Some of these households have relatives there or intend a longer-term move.",
        "A tutor cannot supply a school seat. What lessons can do is prepare a child for an entrance round, close the gaps left by a mid-year transfer, and give an enrolled student a specialist for evenings and holidays without another hour in the car.",
      ],
    },
    {
      heading: "How do Kerala State Board, CBSE, ICSE, IGCSE and IB compare for a Nedumangad child?",
      paragraphs: [
        "Kerala's State Board holds SSLC at Class 10 and Higher Secondary at Class 12, with papers usually in March. CBSE and ICSE follow national syllabi. IGCSE and IB are international programmes examined in May and November, so the calendar shifts by several months when a child changes route.",
        "Kerala students are known for sound basics in Maths, science and language. The State Board prizes accurate recall and clear working. IGCSE and IB build on that but also demand interpretation, evaluation and extended writing, and a tutor helps convert existing strength into the new answer style.",
        "For entrance to professional courses, Kerala's KEAM process for engineering and pharmacy and the national NEET for medicine matter. IB and IGCSE students should confirm eligibility, equivalence and any domicile rule with the relevant authority before finalising subject choices.",
        "A useful test is where Class 12 will end. If the goal is a Kerala professional course, the State Board or CBSE can be more direct; if it is study abroad or a broad undergraduate degree, an international board may leave more room.",
      ],
      table: {
        caption: "Board choices a Nedumangad family may weigh",
        columns: ["Board", "Where it is taught", "What the papers reward", "Exam months"],
        rows: [
          ["Kerala State Board", "Most schools in the taluk", "Accurate recall and clear working", "March"],
          ["CBSE", "Private and central schools", "National syllabus with applied questions", "February-March"],
          ["ICSE / ISC", "A few schools in the district", "Wide syllabus, English-rich answers", "February-March"],
          ["IGCSE", "Thiruvananthapuram and beyond", "Applied, tiered papers", "May-June and October-November"],
          ["IB Diploma", "Thiruvananthapuram and beyond", "Six subjects plus core, criteria based", "May and November"],
        ],
      },
    },
    {
      heading: "What will tuition for the IB or IGCSE cost a Nedumangad family?",
      paragraphs: [
        "Our site carries no price list, because the rate follows the student. After the free trial you get a written figure, shaped by the course level, the subject, how closely the tutor's past teaching matches your syllabus and the number of sessions you want each week.",
        "A teacher of Higher Level IB Chemistry who has run the course repeatedly is priced differently from one supporting IGCSE English as a Second Language, because the knowledge behind them differs. Booking across a whole term usually works out cheaper per hour than an emergency block before a paper.",
        "Do the sums honestly. Many Kerala parents already pay a tuition centre plus transport to the city. A lesson delivered to your own room removes the journey, so the outlay can be set against what the week costs today in fuel, bus fares and lost time.",
        "You may attend the trial, take the written rate home and talk it over before deciding. Lessons can be paused or ended at any point.",
      ],
      bullets: [
        "Level: IB HL or SL, IGCSE Core, Extended, Foundation or Higher",
        "Subject and the tutor's record with that syllabus",
        "Sessions per week and length of each",
        "Regular plan or short exam-season burst",
      ],
    },
    {
      heading: "A home-based online tutor, a city tuition centre, a local teacher or self-study: what fits Nedumangad?",
      paragraphs: [
        "City tuition centres give a classroom feel, but the round trip from Nedumangad can eat two hours in peak traffic and longer in a downpour. After a full school day that is a heavy price for a teenager to pay several times a week.",
        "Neighbourhood teachers are plentiful for State Board and CBSE subjects and many are very capable. Fewer have marked IGCSE scripts or IB internal assessments, so they are best for building fundamentals rather than syllabus-specific coaching.",
        "A disciplined student can manage IGCSE Maths and the sciences alone with past papers and mark schemes. The approach weakens wherever feedback on writing is needed, such as IB internal assessments and essay subjects.",
        "One-to-one video lessons combine syllabus familiarity with personal attention. They rely on a steady connection, which can be patchy in the hills around Vithura and Kallar, so a voice-call fallback with photographed working is agreed beforehand.",
      ],
      table: {
        caption: "Study routes compared for Nedumangad students",
        columns: ["Route", "What it gives", "What limits it"],
        rows: [
          ["Online one-to-one", "Exact syllabus, private pace, no travel", "Needs stable internet and power"],
          ["Tuition centre in the city", "Classroom setting and peers", "Long commute and fixed batch timing"],
          ["Local teacher", "Close to home, familiar", "Few with IB or IGCSE marking experience"],
          ["Self-study", "Free and flexible", "No feedback on essays or internal work"],
        ],
      },
    },
    {
      heading: "How do the two monsoons, Onam and Vishu shape the year for Nedumangad students?",
      paragraphs: [
        "Nedumangad gets heavy rain from the south-west monsoon between June and September, with a second, lighter spell from the north-east monsoon in October and November. Hill roads can flood or slip, and power lines suffer. A student aiming at the October-November IGCSE session or the IB November exams needs revision to stay ahead of the weather.",
        "Onam, in August or September, is the biggest festival in Kerala. It brings a long holiday, family visits and feasts that leave little room for study, and term exams often fall just before or after. Tutors in the state are used to moving lessons around Thiruvonam and the days either side.",
        "Vishu in April and the temple-festival season also shape household calendars. Christmas and the December break are good for consolidation, especially for students drafting internal assessments.",
        "State examinations come in March, so a house with siblings in Class 10 or 12 goes quiet for a few weeks. IGCSE May-June and IB May sessions follow soon after, which is why early preparation pays off.",
      ],
      table: {
        caption: "A year of study around Nedumangad",
        columns: ["Months", "Weather and events", "Planning advice"],
        rows: [
          ["January-February", "Cool and dry, model exams", "Timed practice and mock-paper marking"],
          ["March-April", "State exams, hot days, Vishu", "Light evening sessions; avoid exam weeks"],
          ["May-June", "IB May and IGCSE May-June, monsoon arrives", "Quiet evening slots with backup power"],
          ["July-September", "South-west monsoon, Onam", "Flexible scheduling; plan around Thiruvonam"],
          ["October-November", "North-east monsoon, IGCSE and IB November sessions", "Revise before the rains intensify"],
          ["December", "Cooler, Christmas break", "Consolidation and internal-assessment planning"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Nedumangad go after school?",
      paragraphs: [
        "Within Kerala, Thiruvananthapuram is the natural next step. The University of Kerala, the College of Engineering Trivandrum, Government Medical College and the Indian Institute of Space Science and Technology are familiar names, as is the IISER campus near Vithura. Each sets its own rules for candidates outside the State Board, printed in the prospectus for the year of application.",
        "An Association of Indian Universities equivalence certificate allows IB and IGCSE-based qualifications to be read beside an Indian Class 12. IB Diploma holders can also seek central university seats through CUET-UG, though subject mapping and rules change from one year to the next.",
        "Subject choice for engineering and medicine has to be settled early. JEE Main and KEAM engineering routes look for Physics, Chemistry and Maths, and NEET looks for Biology with Physics and Chemistry. Check the current notification before fixing an IB package or an IGCSE set.",
        "Overseas study is well established for Kerala families, with the Gulf, the UK, Canada, Australia, Germany and Singapore widely considered. IB and IGCSE results are read in all of them, and American colleges weigh them alongside tests and essays. Tutors help on the subject side and never draft application essays.",
      ],
    },
    {
      heading: "Why do IB Maths and the sciences challenge strong Kerala students, and how does a tutor help?",
      paragraphs: [
        "IB Maths wants a student to explain, not merely compute. Analysis and Approaches rewards careful algebra, calculus and proof, while Applications and Interpretation rewards modelling choices and sensible reading of calculator output. Both courses include an Exploration, an independent study worth a fifth of the grade.",
        "Physics marks tend to slip on units, rough graphs and loose explanations. Chemistry asks for quick calculation and comfort with the data booklet. Biology carries a large body of content, and command terms such as describe, explain and evaluate decide how much detail earns a mark.",
        "Internal assessments call for a particular kind of support. A tutor can unpack the criteria, question a research focus and read a draft to show where a descriptor is still unmet. The investigation, the data and the writing stay with the student.",
        "Kerala students arrive with firm foundations. The tutor's task is often to add a layer of justification and evaluation on top of solid calculation, something a few months of regular lessons can achieve.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: which IGCSE tier should a student take?",
      paragraphs: [
        "Cambridge Core papers cap the top grade at C, whereas Extended papers go up to A*. Edexcel Foundation tops out at grade 5 and Higher reaches 9. A student eyeing IB Maths HL or Diploma sciences should plan for the upper tier from the outset.",
        "Normally the school decides. A private candidate, or a family comparing schools, can judge with a diagnostic paper; a score near the boundary is a reason to consult the school or exam centre before entries close.",
        "Subjects follow direction. Future engineers and doctors take Maths, Physics, Chemistry and Biology or Computer Science, while those leaning to business or humanities might choose Economics, English and a language. Malayalam or Hindi can satisfy the language slot where offered.",
        "Always pin down the board, code and session before tutoring begins so the right papers are practised.",
      ],
    },
  ],

  tutorsIntro:
    "Every Nedumangad student is matched on programme, subject, level and exam board. The tutor teaches from within India on IST and arrives with a short note on why they suit your child's course.",

  process: [
    { title: "Tell us about your child", description: "Board or programme, subject, level, current school and the evening hours that suit your Nedumangad household." },
    { title: "Review the tutor we suggest", description: "We name one person and set out the syllabus and level they have taught." },
    { title: "Try a free lesson", description: "A genuine online class with no fee and no strings." },
    { title: "Settle terms on paper", description: "Frequency, rate and opening topics are written down before money changes hands." },
    { title: "Carry on with check-ins", description: "Regular lessons, recap notes, and a new tutor whenever you ask." },
  ],

  whyPoints: [
    { title: "Matched to your syllabus", description: "Tutors are picked for your child's exact subject, tier and board." },
    { title: "Plain about local schools", description: "We say openly that no Nedumangad school is confirmed for IB or IGCSE." },
    { title: "Trial before any fee", description: "You judge the teaching first." },
    { title: "Clear limits", description: "Nobody writes assessed work, essays or coursework for a student." },
    { title: "Progress on paper", description: "A short note records each lesson." },
    { title: "Simple to switch", description: "A poor fit is changed without awkwardness." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Nedumangad?", answer: "Not one we can verify. Schools in Nedumangad follow the Kerala State Board, CBSE or ICSE, and the closest school we can confirm for an international board is in Thiruvananthapuram. If a school claims IB or IGCSE status, request its authorisation and its current subject list." },
    { question: "Can I get IB home tuition in Nedumangad?", answer: "Yes, as online home tuition: a private live class at your own table, taught by a specialist somewhere else in India. Nobody travels to Nedumangad, because in-person visits exist only in Gurugram and parts of Delhi NCR. We spell that out before any booking." },
    { question: "Do you have IGCSE tutors for Nedumangad students on Cambridge and Edexcel?", answer: "Yes, for each board. We choose by syllabus code and tier, for instance Cambridge 0580 Mathematics or Edexcel 4MA1 Mathematics A, and classes run online on IST. Tell us the board and exam session so the right person is suggested." },
    { question: "Do tutors come to homes in Nedumangad?", answer: "No. Tutors go to homes only in Gurugram and parts of Delhi NCR. For Nedumangad, every class is live, private and on video. A child needs a laptop or tablet, a dependable connection and a quiet table, and the tutor follows the working on a shared board." },
    { question: "How much does IB or IGCSE tuition cost in Nedumangad?", answer: "It varies with course level, subject, tutor experience and weekly hours, so no figure is published. Once the free trial is done, a written rate arrives, and you can weigh it against what a commute to a Thiruvananthapuram tuition centre costs you." },
    { question: "Which schools near Nedumangad offer IB or IGCSE?", answer: "None inside Nedumangad that we can confirm. Trivandrum International School in Thiruvananthapuram is on our other Kerala pages, and The Indian Public School in Kochi is listed too. Please confirm current programmes and admissions with each school." },
    { question: "Is the first lesson free?", answer: "Yes. Your child sits one real class with the suggested tutor over video, at no charge and with no commitment. You then decide whether to go on, and a rate is given in writing before anything is booked." },
    { question: "Can a tutor help with my child's IA or Extended Essay?", answer: "Only as a guide. Tutors explain criteria, help narrow a topic, look over plans and comment on drafts, but the research, data and writing must be your child's own. We turn down any request to produce assessed work." },
    { question: "Which IB Diploma subjects do you cover for Nedumangad students?", answer: "Common picks include Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, ESS, Geography, Psychology and Malayalam or Hindi B, at Higher and Standard Level. For a rare combination, ask, and we will tell you honestly if we can staff it." },
    { question: "Do you teach IB MYP and PYP to children in Nedumangad?", answer: "We do. PYP classes are short and activity-led, with reading and number sense at the centre. MYP classes cover criterion-style writing, science reports and the Personal Project, and parents get a note after each session." },
    { question: "What if heavy monsoon rain cuts the internet or power?", answer: "The class is moved or shortened. Each tutor agrees a fallback in advance, such as a voice call plus photographed working, and we try not to place key sessions on days when a red or orange rain alert is in force." },
    { question: "How are tutors chosen for Nedumangad students?", answer: "We look at qualifications, recent teaching of the precise syllabus and how the person explains. A name is put forward only once we understand your child's level and target, and the trial class then tests the fit in practice." },
    { question: "When should my child start tuition?", answer: "Ideally at the start of a course, meaning Grade 9 for IGCSE and Class 11 for the Diploma. A child aiming at a Thiruvananthapuram admission can begin a term sooner and concentrate on English and Maths." },
    { question: "My child is on the Kerala State Board. Can we switch to IB or IGCSE?", answer: "A switch needs a seat in a school, since tuition cannot enrol anyone. A tutor can help the student cope with applied questions, close content gaps and strengthen written English before the first term starts." },
    { question: "Can lessons fit around Onam and the SSLC season?", answer: "They can. Most Nedumangad families pick weekday evenings and Sunday mornings, and we plan around Onam week, March examinations and heavy-rain days. When a festival or exam collides with a slot, that class simply shifts to another day." },
    { question: "What if my child does not get on with the tutor?", answer: "Let us know and we will line up someone else. Early check-ins usually expose a poor fit, and the written plan keeps everybody's expectations clear." },
    { question: "Is IB Gram connected to any school or exam board?", answer: "No. We are independent, with no link to the IB, Cambridge, Pearson or any school in Nedumangad, Thiruvananthapuram or elsewhere. Schools named here are given as context only." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "See how the same service works in other towns." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where visits to the student's house are possible." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "Programmes, subjects and how we match." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel compared." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects, the core and the scoring." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led learning in the early years." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Which Maths course suits which student." },
    { label: "Browse tutors", href: "/tutors/", description: "Backgrounds and subjects of the teaching team." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a message to get started." },
    { label: "IB and IGCSE tutoring in Thiruvananthapuram", href: "/thiruvananthapuram/", description: "The capital, with the nearest verified international school." },
    { label: "IB and IGCSE tutoring in Neyyattinkara", href: "/neyyattinkara/", description: "A neighbouring southern taluk served the same way." },
    { label: "IB and IGCSE tutoring in Kollam", href: "/kollam/", description: "Another Kerala city served online." },
  ],

  closingHeading: "Book a free trial lesson for your Nedumangad student",
  closingBody:
    "Send us the programme or board, the subject, the level and the evenings that work at home in Nedumangad. A tutor is suggested, the reason explained, and a free trial class arranged on video. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
