import type { CitySeoPage } from "../types";

/**
 * /ramanathapuram/ - IB and IGCSE tutoring page for Ramanathapuram (Ramnad), Tamil Nadu. No school in the town is
 * confirmed to teach IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and clusters reuse Madurai and Chennai
 * names from neighbouring pages. All lessons online.
 */
export const ramanathapuram: CitySeoPage = {
  slug: "ramanathapuram",
  countryName: "Ramanathapuram",
  countryNameLong: "Ramanathapuram, Tamil Nadu",
  demonym: "Ramanathapuram",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and weekend slots that leave room for the north-east monsoon weeks, Pongal and the Tamil Nadu public examinations",
  lastUpdated: "2026-09-21",
  geo: { latitude: 9.3639, longitude: 78.8395 },
  wikipedia: "https://en.wikipedia.org/wiki/Ramanathapuram",
  alternateNames: ["Ramnad", "Ramnathapuram", "Ramanathapuram Tamil Nadu"],
  stripSchools: [],

  title: "Ramanathapuram IB & IGCSE Tutors | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Ramanathapuram (Ramnad) students: private one-to-one online lessons timed around Pongal and the monsoon. Free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Ramanathapuram",
  heroEyebrow: "IB & IGCSE TUITION FROM HOME FOR RAMNAD STUDENTS",
  heroSubtitle:
    "Private tuition at home for Ramanathapuram students who follow, or are preparing for, the IB or IGCSE: a live one-to-one online lesson with a tutor who has taught the syllabus. No school in Ramnad town is one we can verify for these boards, and Madurai is a long drive away, so the screen on your desk is the classroom.",
  primaryKeyword: "IB and IGCSE tutors in Ramanathapuram",
  imageAltText: "A Ramanathapuram school student in a live online IGCSE Maths lesson, laptop and workbook on a home desk",
  secondaryKeywords: [
    "IB tutor Ramanathapuram",
    "IGCSE tutor Ramanathapuram",
    "IB home tuition Ramanathapuram",
    "IGCSE home tuition Ramanathapuram",
    "IB private tuition Ramanathapuram",
    "IB Maths tutor Ramanathapuram",
    "IGCSE Maths tutor Ramanathapuram",
    "IB Physics tutor Ramanathapuram",
    "IB Chemistry tutor Ramanathapuram",
    "IB Biology tutor Ramanathapuram",
    "IB DP tutor Ramanathapuram",
    "IB MYP tutor Ramanathapuram",
    "IB PYP tutor Ramanathapuram",
    "IGCSE online tuition Ramanathapuram",
    "IB tutor Ramnad",
    "IGCSE tutor Rameswaram Paramakudi",
    "online IB tutor Tamil Nadu district",
    "Cambridge IGCSE tutor Ramnad Tamil Nadu",
  ],

  heroTrustPoints: [
    "Tutors who have taught the precise IB subject or IGCSE syllabus code",
    "Lessons are online in Ramanathapuram; in-person tuition exists only in Gurugram and parts of Delhi NCR",
    "A short written note after each session and a polite way to switch tutor",
    "A free trial first, then a written rate before you commit",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB ladder" },
    { value: "Two boards", label: "Cambridge and Edexcel IGCSE" },
    { value: "IST", label: "Indian teaching hours" },
    { value: "Free trial", label: "Try a real lesson" },
  ],

  intro: {
    heading: "IB and IGCSE help for a district headquarters on the Gulf of Mannar coast",
    paragraphs: [
      "Ramanathapuram, also written Ramnad, is the headquarters of a coastal district in southern Tamil Nadu, with a history tied to the Sethupathi rulers and a geography shaped by the Gulf of Mannar and the road to Rameswaram. It is a town of government offices, fishing and farming families, and households with relatives in Chennai, Singapore and the Gulf. Interest in international boards here comes mostly from those overseas connections.",
      "We could not confirm any school in Ramanathapuram town that teaches the IB or the Cambridge or Pearson Edexcel IGCSE, so none is named on this page. Local schools follow the Tamil Nadu State Board or CBSE, and a few are run by mission or trust managements. The nearest confirmed international-board classrooms are in Madurai, about two and a half hours inland, and in Chennai.",
      "That is why the lessons on offer are online. A student stays in Ramnad, sits at home with a laptop and a notebook, and works with a tutor who might be in Chennai, Bengaluru or Hyderabad. Because the tutor is chosen for syllabus experience rather than proximity, a family gets access that a small district town rarely has.",
      "IB Gram is an independent tutoring service, unconnected to the IB, Cambridge, Pearson or any school named here. Tutors coach and give feedback on practice; they do not write Internal Assessments, Extended Essays, TOK essays or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE",
      "Live private lessons in English, taught from India",
      "A free trial lesson before a fee is mentioned",
      "No tutor visits in Ramanathapuram; home visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Students in Ramnad usually meet an IB stage through a plan: a hostel place in Madurai, a transfer to Chennai or a course abroad. These notes describe each stage and the part a tutor plays.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "Children explore themes through inquiry and present an Exhibition at the end. There are no external exams. A tutor helps with reading aloud, sentence writing, number bonds and the habit of asking why, using short lessons that do not tire a young child.",
      countryNote:
        "A Ramanathapuram family moving a child to a Madurai or Chennai PYP school often wants English speaking confidence built over a term or two.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Every subject is marked on stated criteria, and students complete a Personal Project. Pupils from Tamil-medium classrooms know their content well but may not have written extended English answers, so practice with structure, evidence and reflection carries most of the benefit.",
      countryNote:
        "Tamil-medium students moving to an MYP school tend to need steady English reading first, then science investigations and problem-solving in context.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students choose six subjects, at least three at Higher Level, and complete TOK, the Extended Essay and CAS. Scores are out of 45, with exams in May or November, and internal assessments are built up across two years.",
      countryNote:
        "DP candidates linked to Ramanathapuram are almost always enrolled in another city, and they use online lessons in holidays and before mock weeks.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP pairs two or more Diploma courses with a career-related qualification and a reflective core. It is uncommon in India, but its Diploma courses meet the same standard as those in the full DP.",
      countryNote:
        "We seldom get CP enquiries from Ramanathapuram, and when they come we handle the Diploma courses as we would for any DP student.",
    },
  ],

  subjectsIntro:
    "Give us the subject, the level and the exam session, and we try to find someone who has taught that exact course. A student from Ramnad who aims at an engineering or medical degree usually wants the sciences and Maths first, while those looking at hospitality, marine or business routes often add Economics or Business Management.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof. Tamil Nadu board students are often well drilled in calculation and need practice explaining each step." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology, with data sets drawn from everyday contexts such as fishing catches and rainfall." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves and fields, with habits of careful units and labelled graphs." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, energetics, equilibrium and organic reactions, using the data booklet routinely." },
    { name: "IB Biology", levels: "HL / SL", description: "A large syllabus turned into structured recall and application, with marine and coastal ecology as natural examples." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram skills and evaluation, illustrated with fisheries, pilgrimage tourism and remittance economies." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies, business tools and the internal research project." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis and essay planning for students whose first language is Tamil." },
    { name: "IB Tamil B", levels: "HL / SL", description: "Comprehension, writing and speaking for students who wish to keep Tamil in their Diploma set." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language skills for students new to the language." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms and programming logic, with an internal project built in stages." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking, with coral reefs, mangroves and the Gulf of Mannar as local material." },
    { name: "IB Geography", levels: "HL / SL", description: "Coastal processes, development and fieldwork technique." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, methods and essay structure." },
  ],

  igcseSubjectsIntro:
    "IGCSE is offered by Cambridge and by Pearson Edexcel, and the two are not interchangeable in structure or command words. The subjects below are those Ramnad families raise most, with Tamil included for students who want a home language on their certificate.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths across two papers; Extended students build speed in algebra and geometry." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus, functions and vectors ahead of Diploma Maths." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Two papers of equal weight with marks for method." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, forces, electricity and waves, including practical-skills questions." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, reaction rates, electrolysis and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, human biology, plants and ecosystems." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing, listening and speaking for Tamil speakers." },
    { name: "IGCSE First Language English 0500", levels: "Grade 9-10", description: "Directed writing and composition." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming, data representation and networks." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Physical and human themes, with coastal case studies." },
    { name: "IGCSE Tamil as a Second Language", levels: "Grade 9-10", description: "Language skills for students who wish to include Tamil, subject to the board's current offering." },
  ],

  regionsTitle: "Ramanathapuram areas and neighbouring towns our tutors reach online",
  regionsIntro:
    "An online lesson is identical whether the student lives near the collectorate or out towards Rameswaram. The notes that follow describe how households in each part of the district tend to arrange study, including timings and coastal weather.",
  regions: [
    { name: "Ramanathapuram town centre", note: "The busy heart of the district, near the bus stand and the old Sethupathi palace; evenings after office hours are the popular lesson window." },
    { name: "Collectorate and government quarters", note: "Families of officials who are transferred every few years often want a tutor they can keep across postings, which suits an online arrangement." },
    { name: "Keezhakarai", note: "A historic coastal town with a long trading and Muslim heritage; many households have Gulf and Southeast Asian ties that raise interest in international boards." },
    { name: "Pattinamkathan and Sakkarakottai", note: "Residential pockets around the town where broadband reliability is uneven, so a mobile hotspot is a useful backup." },
    { name: "Devipattinam", note: "A coastal temple town known for the Navapashanam shrine; weekends can be busy with pilgrims, so weekday lessons are easier." },
    { name: "Uchipuli and Mandapam", note: "Towards the Pamban side, where naval and railway families live; transfers make a portable tutor relationship attractive." },
    { name: "Rameswaram", note: "An island pilgrim town of about an hour's drive; visitor crowds peak during festival and Aadi Amavasai periods, so lesson timing varies." },
    { name: "Paramakudi", note: "A large town on the Madurai road with a well-known textile and trading culture, where parents often look at Madurai schools." },
    { name: "Mudukulathur and Kamuthi", note: "Interior towns where daily travel to a good classroom is difficult and online lessons remove that barrier." },
    { name: "Thondi and Thiruvadanai", note: "East-coast towns with fishing and farming households; boys and girls here often prepare for Madurai or Chennai admissions." },
  ],

  schoolDisclaimer:
    "The schools named here are shown only to explain where IB and IGCSE classrooms can be found within reach of Ramanathapuram. IB Gram has no agreement with any of them, or with the IB, Cambridge or Pearson. Please confirm programmes, fees and admission rules with each school.",
  schoolClusters: [
    {
      city: "Local: Ramanathapuram town",
      note: "We could not confirm any school in Ramanathapuram town that offers IB or Cambridge or Edexcel IGCSE, so none is listed. Local schools follow the State Board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Madurai",
      note: "The regional city roughly two and a half hours inland has the closest established choice of international-board schools; these names also appear on our Madurai and Tirunelveli pages.",
      schools: ["Velammal Global School", "Vikaasa World School", "TIPS Globeducate Madurai", "Jain Vidyalaya, Madurai"],
    },
    {
      city: "Nearby: Chennai",
      note: "A full day by road or an overnight train away, Chennai is where many returning-NRI and transferred families settle; these schools are listed on our Sivakasi page.",
      schools: ["Gateway International School", "KC High International School", "Akshar Arbol International School"],
    },
  ],

  modesIntro:
    "All Ramanathapuram lessons are online. After that the choice is about rhythm: a steady weekly class, a term with notes and reviews, or an intensive run-up to a paper.",
  modes: [
    {
      title: "Weekly private lesson",
      description:
        "A recurring time with one tutor. The student brings unfinished work and questions, the tutor teaches the next idea, and mistakes are corrected while the working is still on the board.",
      bullets: [
        "Tutor matched on subject, level and board",
        "Typically an hour a week",
        "Working shown on a shared whiteboard",
        "Suitable for IGCSE, MYP and early DP",
      ],
    },
    {
      title: "Term roadmap with written reviews",
      description:
        "A plan for the term, a short summary after every class and a review every few weeks. Parents who did not study these boards can still follow the progress.",
      bullets: [
        "Notes written in plain English",
        "Reviews that adjust topic order",
        "Works next to school or hostel timetables",
        "Extra lessons before class tests",
      ],
    },
    {
      title: "Pre-exam push",
      description:
        "Before mocks and the May or November papers, sessions become more frequent and centre on timed practice and detailed marking.",
      bullets: [
        "Papers marked in the board's own style",
        "Two to four lessons a week if possible",
        "Planned away from cyclone alerts and Deepavali week",
        "Best begun about three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Ramanathapuram, and what do families do?",
      paragraphs: [
        "We have found no school in Ramanathapuram town that we can confirm as teaching the IB or the Cambridge or Edexcel IGCSE. The town's schools are affiliated to the Tamil Nadu State Board or to CBSE. A claim of IB or IGCSE status should always be checked against the school's authorisation and its present subject list.",
        "Families who want an international curriculum tend to look to Madurai, where schools such as Velammal Global School, Vikaasa World School, TIPS Globeducate Madurai and Jain Vidyalaya run these boards. Some place the child in a hostel, some rent a flat with a grandparent, and some wait until Class 9 or Class 11 for the move.",
        "Another group, often with a parent working abroad or in a central government post, prefers Chennai, where Gateway International School, KC High International School and Akshar Arbol International School are among the options. Admission in each school follows its own calendar and entrance process.",
        "What tutoring can offer, in both cases, is preparation and continuity. It can get a child ready for an entrance assessment, bridge the difference between boards after a move, and give a hostel student a specialist to talk to on weekends.",
      ],
    },
    {
      heading: "Tamil Nadu State Board, CBSE, IGCSE and IB: how do they differ?",
      paragraphs: [
        "The State Board follows the Samacheer Kalvi syllabus, with public examinations at Class 10, 11 and 12, usually in March and April. CBSE has a national syllabus and its own exams, while IGCSE and IB are international programmes examined in set May and November sessions. A move between them is a change of assessment style as much as content.",
        "Students raised on the State Board are often strong at computation, definitions and steady revision. IGCSE and IB examiners also want reasons, assumptions and evaluation, so a good part of early tutoring is learning to show the thinking in complete sentences and to read command words.",
        "For college entry in Tamil Nadu, the reservation and counselling systems for engineering and medical courses are built around State Board results, NEET and JEE. IB and IGCSE students should check domicile, equivalence and eligibility with the relevant authority before choosing subjects.",
        "A sound question for a Ramnad family is where Class 12 will be finished. For Tamil Nadu professional counselling, the State Board can be straightforward. For a university abroad or a liberal-arts degree, an international board may serve better.",
      ],
      table: {
        caption: "Board choices a Ramanathapuram family may weigh",
        columns: ["Board", "Where it is taught", "What the papers reward", "Exam months"],
        rows: [
          ["Tamil Nadu State Board", "Most schools in the district", "Accurate recall and calculation", "March-April"],
          ["CBSE", "Private and central-type schools", "National syllabus with applied items", "February-March"],
          ["IGCSE", "Madurai, Chennai and further", "Applied papers with Core or Extended tiers", "May-June and October-November"],
          ["IB Diploma", "Madurai, Chennai and further", "Six subjects plus core, criteria marked", "May and November"],
        ],
      },
    },
    {
      heading: "What should a Ramanathapuram family expect to pay for IB or IGCSE tuition?",
      paragraphs: [
        "There is no fixed price list on our site. After the free trial lesson we send a written rate, and three things shape it: the level and subject of the course, how specialised the tutor's record is on that syllabus, and how many sessions a week you want.",
        "A tutor for Higher Level IB Physics has usually spent years on a narrow body of material, and that is reflected in the rate. A tutor for IGCSE English as a Second Language will usually be priced differently. Longer commitments are normally more economical per hour than sudden bursts.",
        "Cost comparison in a district town needs care. Hiring a teacher in Madurai means an overnight stay or a long bus ride each week, and some families also spend on a hostel seat mainly to reach coaching. An online lesson avoids travel completely, and the fees can be judged against that saving.",
        "Because no rate is committed in advance, you can attend the trial, read the written quote at home, talk to relatives and decide. Nothing obliges you to continue.",
      ],
      bullets: [
        "Programme level: IB HL or SL, IGCSE Core, Extended, Foundation or Higher",
        "Subject and the tutor's record on that syllabus",
        "Lessons per week and their length",
        "Regular plan or short exam-season burst",
      ],
    },
    {
      heading: "Online lessons, Madurai coaching, a neighbourhood teacher or self-study: what works from Ramnad?",
      paragraphs: [
        "Madurai has a healthy supply of IB and IGCSE teachers, but getting there from Ramanathapuram takes the better part of half a day return. For a child in school that is tiring and unsustainable as a weekly routine, which is why many families look at video lessons with the same kind of specialist.",
        "Teachers in Ramnad itself are often dedicated and affordable, and they do well with State Board and CBSE subjects. Fewer have marked IGCSE scripts or IB internal assessments, so they are most useful for foundational support in Maths, science or English.",
        "Self-study suits a motivated student in IGCSE Maths and the sciences, using past papers and mark schemes. It becomes weak where a student needs written feedback, such as IB internal assessments or essay-based subjects.",
        "Online one-to-one tuition combines syllabus knowledge and personal attention. The weak point is the network, especially in coastal areas during storms, so tutors agree a backup route such as a phone call plus photographed working.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Ramanathapuram",
        columns: ["Route", "Benefit", "Drawback"],
        rows: [
          ["Online one-to-one", "Exact syllabus, private pace", "Depends on internet and power"],
          ["Coaching in Madurai", "Classroom setting, larger choice", "Long travel, cost and tired students"],
          ["Local teacher", "Close at hand, affordable", "Limited IB or IGCSE marking experience"],
          ["Self-study", "Flexible and free", "No feedback on written or internal work"],
        ],
      },
    },
    {
      heading: "How do the north-east monsoon, Pongal and the coast affect the study year?",
      paragraphs: [
        "Ramanathapuram is one of the drier districts of Tamil Nadu, with hot, humid weather for much of the year and most of its rain arriving with the north-east monsoon between October and December. Cyclone warnings on the Gulf of Mannar and Bay of Bengal coast can close schools and cut power and mobile data, so the IGCSE and IB November sessions fall in the riskiest weeks.",
        "A sensible plan therefore finishes major revision by the end of September, leaves the storm weeks for light consolidation, and keeps a fallback in place for lessons. Students who need extra practice can use the dry months between February and May.",
        "Pongal in January is the most important household festival, with several days of holiday, and it comes just before school preparatory exams. Deepavali in October or November and local temple festivals also draw whole families into preparation.",
        "Public examinations for Tamil Nadu classes fall in March and April, and siblings sitting them affect a household's quiet hours. Tutors in this area are used to scheduling around those weeks.",
      ],
      table: {
        caption: "A year of study around Ramanathapuram",
        columns: ["Months", "Weather and events", "Planning note"],
        rows: [
          ["January-February", "Pongal, cool mornings, mock papers", "Hold lessons steady and begin timed practice"],
          ["March-April", "State Board public exams, rising heat", "Keep sessions short and early evening"],
          ["May-June", "IB May session, IGCSE May-June, hot and windy", "Evening slots; fans and power backup"],
          ["July-September", "Dry and warm, Aadi month", "Good time for deep revision and internal-assessment drafts"],
          ["October-December", "North-east monsoon, Deepavali, IGCSE and IB November", "Finish revision early; expect disruptions"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Ramanathapuram go next?",
      paragraphs: [
        "Within India, Madurai, Chennai, Coimbatore and Bengaluru attract most students. Well-known names in the region include the University of Madras, Anna University, Thiagarajar College of Engineering in Madurai and Alagappa University at Karaikudi. Each institution publishes its own rules for candidates from outside the State Board.",
        "An Association of Indian Universities equivalence certificate allows IB and IGCSE-based qualifications to be read alongside an Indian Class 12. IB Diploma holders can also apply through CUET-UG to participating central universities, and requirements change from year to year.",
        "Engineering and medicine depend on subject choice. JEE Main and Tamil Nadu engineering counselling expect Physics, Chemistry and Maths, and NEET expects Biology with Physics and Chemistry. Students should check the current notification before settling their IB package.",
        "Abroad, Singapore, Malaysia, the Gulf, the UK, Canada and Australia are common destinations for Ramnad families with overseas links, and American colleges consider these results alongside their own tests. Tutors help on the subject side, not with application essays.",
      ],
    },
    {
      heading: "Why do IB Maths and the sciences trip up good students, and how do tutors help?",
      paragraphs: [
        "IB Maths wants reasoning as well as answers. Analysis and Approaches rewards tidy algebra, calculus and formal argument; Applications and Interpretation rewards sensible modelling and interpreting calculator output. Both courses require an Exploration that counts for a fifth of the grade.",
        "In Physics, marks slip on units, poorly labelled graphs and thin explanations. Chemistry demands quick calculation and ease with the data booklet. Biology is content-rich, and command terms decide how much detail a full answer needs.",
        "For internal assessments a tutor can explain the criteria, test a research question and read a draft to show where a descriptor has not been met. The design, data and writing remain the student's own work.",
        "Ramnad students often arrive with strong number skills. A tutor who knows the State Board habit of full-stop answers can build on it gently, adding explanation without losing speed.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: choosing the right IGCSE tier",
      paragraphs: [
        "Cambridge Core papers cap the top grade at C, while Extended papers allow A*. Edexcel Foundation tops out at grade 5 and Higher reaches 9. A student who wants IB Maths HL or sciences at Diploma level should aim for the upper tier from the start.",
        "Usually the school chooses. A private candidate or a family comparing schools can decide with a diagnostic paper, and a score close to the boundary is a reason to talk to the school or exam centre before entries close.",
        "Subject choice should reflect direction. A future engineer needs Maths, Physics and Chemistry with Computer Science or Additional Mathematics as support. A student aimed at marine science or biology can pair Biology, Chemistry and Geography.",
        "Always confirm the board, code and exam session before lessons start so the right papers are practised.",
      ],
    },
  ],

  tutorsIntro:
    "Ramanathapuram students are matched by programme, subject, level and exam board. Each tutor teaches from within India in IST and comes with a short note on why they fit your child's course.",

  process: [
    { title: "Send the basics", description: "Board or programme, subject, level, present school and the evening hours that fit your Ramnad household." },
    { title: "Receive a tutor proposal", description: "We name a tutor and describe the syllabus and level they have taught." },
    { title: "Take a free trial lesson", description: "A real online lesson with no fee and no pressure." },
    { title: "Agree terms on paper", description: "Frequency, rate and opening topics are recorded before any payment." },
    { title: "Keep learning with reviews", description: "Regular lessons, written notes and a swap of tutor on request." },
  ],

  whyPoints: [
    { title: "Syllabus-specific matching", description: "We pick tutors for your child's exact subject, tier and board." },
    { title: "Straight talk on local schools", description: "We say openly that no Ramanathapuram school is confirmed for IB or IGCSE." },
    { title: "Trial first", description: "You judge the teaching yourself before any fee." },
    { title: "Firm boundaries", description: "Tutors never write assessed work or essays." },
    { title: "Progress you can read", description: "Short notes record what was covered." },
    { title: "Easy to change", description: "A poor match is swapped without awkwardness." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Ramanathapuram?", answer: "Not one that we can confirm in the town. Local schools follow the Tamil Nadu State Board or CBSE. The closest confirmed international-board schools are in Madurai and Chennai. Ask any school that claims IB or IGCSE status for its authorisation and its current subject list." },
    { question: "Can I get IB home tuition in Ramanathapuram?", answer: "You can get online home tuition: a live private lesson from your own house with a specialist elsewhere in India. Tutors do not travel to Ramanathapuram. In-person visits run only in Gurugram and parts of Delhi NCR, and we make that clear before you book." },
    { question: "Do you have IGCSE tutors for Ramnad students on Cambridge and Edexcel?", answer: "Yes, for both boards. We match by syllabus code and tier, such as Cambridge 0625 Physics or Edexcel 4MA1 Mathematics A. Lessons are online in IST. Tell us the board and exam session first so the right tutor is proposed." },
    { question: "Do tutors visit homes in Ramanathapuram?", answer: "No. Home visits run only in Gurugram and parts of Delhi NCR. In Ramanathapuram, lessons are online, live and private. Your child needs a laptop or tablet, a steady connection and a quiet table, and the tutor reads the working on a shared whiteboard." },
    { question: "How much does IB or IGCSE tuition cost in Ramanathapuram?", answer: "It depends on the level, subject, tutor experience and lessons per week, so we publish no figure. After a free trial you receive a written rate and can compare it with the cost of weekly travel to Madurai or a hostel seat." },
    { question: "Which schools near Ramanathapuram offer IB or IGCSE?", answer: "None in the town that we can confirm. In Madurai, Velammal Global School, Vikaasa World School, TIPS Globeducate Madurai and Jain Vidyalaya appear on our other pages, and Chennai options are on our Sivakasi page. Check current programmes with each school." },
    { question: "Is the trial lesson free?", answer: "Yes. Your child attends one real lesson with the proposed tutor online, at no cost and with no obligation. You decide afterwards whether to continue, and the rate is written down before any booking." },
    { question: "Will a tutor help with my child's IA or Extended Essay?", answer: "A tutor can guide but not write. Tutors explain the criteria, help narrow a topic, review plans and comment on drafts. The research, data and text must be the student's own, and we refuse requests to produce assessed work." },
    { question: "Which IB Diploma subjects do you cover for Ramanathapuram students?", answer: "Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, ESS, Geography, Psychology and Tamil or Hindi B are common, at Higher and Standard Level. For an unusual combination, ask and we will say honestly whether we can staff it." },
    { question: "Do you teach IB MYP and PYP to children in Ramnad?", answer: "Yes. PYP lessons are short and activity-based with reading and number sense. MYP lessons cover criterion-style writing, science reports and the Personal Project. Parents receive a note after every lesson." },
    { question: "What happens during cyclone warnings or heavy rain?", answer: "Lessons can be moved or shortened. Coastal storms in October to December may cut power and data, so every tutor agrees a fallback, such as a phone call with photographs of the working, and we avoid booking key sessions on forecast storm days." },
    { question: "How are tutors chosen for Ramanathapuram students?", answer: "We check qualifications, recent teaching of the exact syllabus and how the person explains. We propose a tutor only after understanding your child's level and goal, and the trial lesson tests the match." },
    { question: "When should my child start?", answer: "At the beginning of the course if possible, which means Grade 9 for IGCSE and Class 11 for the Diploma. A child preparing for a Madurai or Chennai admission can start a term earlier and focus on English and Maths." },
    { question: "My child is on the Tamil Nadu State Board. Can we switch to IB or IGCSE?", answer: "A switch needs a school seat, since tutoring cannot enrol a child. A tutor can help the student adjust to applied questions, close gaps and strengthen English writing before the first term." },
    { question: "Can lessons fit around Pongal and the public exams?", answer: "Yes. Most Ramanathapuram families choose evening or weekend slots, and we plan around Pongal, Deepavali and the March-April public exams. If a festival or exam clashes, a lesson moves to another day." },
    { question: "What if my child does not like the tutor?", answer: "Tell us and we will arrange a different tutor. Early check-ins usually catch a poor fit, and the written plan keeps expectations clear." },
    { question: "Is IB Gram connected to any school or exam board?", answer: "No. IB Gram is independent and has no link with the IB, Cambridge, Pearson or any school in Ramanathapuram, Madurai or Chennai. Schools named here are for context only." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The online model in other Indian towns and cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where in-person visits run." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "Programmes, subjects and matching." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel explained side by side." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure, core and grading." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry for younger children." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor backgrounds and subjects." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write or message to begin." },
    { label: "IB and IGCSE tutoring in Madurai", href: "/madurai/", description: "The nearest large city with IB and IGCSE schools." },
    { label: "IB and IGCSE tutoring in Tirunelveli", href: "/tirunelveli/", description: "A southern Tamil Nadu city on the same model." },
    { label: "IB and IGCSE tutoring in Sivakasi", href: "/sivakasi/", description: "A nearby Tamil Nadu town with Madurai and Chennai options." },
  ],

  closingHeading: "Book a free trial lesson for your Ramanathapuram student",
  closingBody:
    "Tell us the programme or board, the subject, the level and the evenings that suit your Ramanathapuram household. We will propose a tutor, explain the match and arrange a free trial lesson online. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
