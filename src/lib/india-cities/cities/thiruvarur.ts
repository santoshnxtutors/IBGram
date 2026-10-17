import type { CitySeoPage } from "../types";

/**
 * Thiruvarur (Tamil Nadu). No IB or Cambridge/Edexcel school could be confirmed in the town, so
 * stripSchools is empty. School clusters reuse names already verified on the Thanjavur, Tiruchirappalli
 * and Karaikal pages, labelled as nearby. Online only; no home visits.
 */
export const thiruvarur: CitySeoPage = {
  slug: "thiruvarur",
  countryName: "Thiruvarur",
  countryNameLong: "Thiruvarur, Tamil Nadu",
  demonym: "Thiruvarur",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and weekend hours that keep away from Pongal week, the Aazhi Ther festival days and the northeast monsoon storm spells",
  lastUpdated: "2026-09-21",

  title: "IB & IGCSE Tutors in Thiruvarur | Private Tuition Online",
  metaDescription:
    "Live one-to-one IB and IGCSE tuition for Thiruvarur students in the Cauvery delta, taught online from home by course specialists. Book a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition from Home in Thiruvarur",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR THIRUVARUR, ONLINE",
  heroSubtitle:
    "Thiruvarur is a temple town and district headquarters in the Cauvery delta, and its international-syllabus classrooms lie in Thanjavur, Tiruchirappalli, Madurai and Chennai. Private tuition at home here is a live video lesson, one tutor and one student, so an IB or IGCSE course can be followed without moving away. The first lesson is a free trial.",
  primaryKeyword: "IB and IGCSE tutors in Thiruvarur",
  imageAltText: "A Thiruvarur schoolgirl solving IB Chemistry problems on a tablet while an online tutor explains on screen at home",
  secondaryKeywords: [
    "IB tutor Thiruvarur",
    "IGCSE tutor Thiruvarur",
    "IB home tuition Thiruvarur",
    "IGCSE home tuition Thiruvarur",
    "IB private tuition Thiruvarur",
    "IB Maths tutor Thiruvarur",
    "IGCSE Maths tutor Thiruvarur",
    "IB Physics tutor Thiruvarur",
    "IB Chemistry tutor Thiruvarur",
    "IB Biology tutor Thiruvarur",
    "IB DP tutor Thiruvarur",
    "IB MYP tutor Thiruvarur",
    "IB PYP tutor Thiruvarur",
    "IGCSE online tuition Thiruvarur",
    "online IB tutor Thiruvarur Tamil Nadu",
    "IB tutor Tiruvarur",
    "IGCSE tutor Tiruvarur",
    "IB tutor Mannargudi",
    "IGCSE tutor Nannilam",
    "IB tutor Thiruthuraipoondi",
    "Cambridge IGCSE tutor Thiruvarur district",
  ],

  heroTrustPoints: [
    "Each tutor is chosen for the IB course and level, or the IGCSE syllabus code, that your child actually follows",
    "Lessons are live and one to one from a desk in Thiruvarur, and no tutor turns up at the door",
    "A free first lesson, a written summary afterwards and a replacement tutor if the match is poor",
    "Independent of every school and of every exam board",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "Cambridge + Edexcel", label: "IGCSE boards" },
    { value: "Tamil Nadu", label: "Tutors teaching in IST" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "Online IB and IGCSE home tuition for Thiruvarur families",
    paragraphs: [
      "A Thiruvarur parent who searches for IB home tuition or an IGCSE tutor is usually solving one problem: the syllabus is taught somewhere else, yet the child lives here. Online one-to-one tuition closes that gap. The lesson happens on a laptop at the family's own table, with a tutor on video, a shared writing space and homework that comes back marked. Whether the tutor is in Chennai or Bengaluru is secondary to whether they have taught the same course before.",
      "The town itself is better known for the Thyagaraja temple, its enormous temple tank and its place in the story of Carnatic music than for international schooling. Most children study under the Tamil Nadu State Board, the matriculation stream or CBSE. We could not confirm an IB or Cambridge school inside Thiruvarur, and the nearest verified campuses sit in Thanjavur, Tiruchirappalli, Madurai and Chennai, far enough that a daily run is unrealistic for most households.",
      "A clear word on delivery: IB Gram does not send tutors into Thiruvarur homes. In-person tuition exists only in Gurugram and parts of Delhi NCR. Every lesson for a Thiruvarur student is live and online, and for exam preparation that format performs just as well as sitting side by side, with the added benefit of a far broader pool of teachers than the district could supply.",
      "We work on our own account. No link exists between IB Gram and the International Baccalaureate, Cambridge, Pearson Edexcel or any school named below. Tutors teach, question and mark practice work. They do not author an Internal Assessment, Extended Essay, TOK essay or piece of coursework for any student.",
    ],
    bullets: [
      "IB PYP, MYP and DP tutors in every subject group",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended",
      "Online teaching only in Thiruvarur; visits at home are kept to Gurugram and parts of Delhi NCR",
      "First lesson free, with the rate put in writing beforehand",
    ],
  },

  programmesIntro:
    "Children in Thiruvarur arrive at an IB programme by unusual routes: a boarding place in Tiruchirappalli or Chennai, a parent returning from Singapore or the Gulf, or a family which moved from a metro and kept the old syllabus. Each stage needs a different kind of tutor, and each note below is written for that Thiruvarur starting point.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Units of inquiry replace the usual textbook chapter, and the final year ends in a public Exhibition. Tutoring at this age builds reading stamina, confidence with number and the habit of asking why.",
      countryNote:
        "With Tamil spoken at home, spoken English practice and read-aloud sessions help a young PYP child follow the inquiry discussion without losing the pleasure of talking about it.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are assessed on stated criteria, and the programme closes with a Personal Project in MYP 5. Students have to move from naming and describing to explaining, comparing and judging.",
      countryNote:
        "A child used to the Samacheer Kalvi textbooks and their fixed question patterns often gains most from drafting a short method and saying why each step was chosen.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard Level, sit beside TOK, the Extended Essay and CAS. Coursework marks feed into many subjects, and papers are sat in May and November.",
      countryNote:
        "Diploma requests from the delta lean towards Biology and Chemistry for medicine and biotechnology, and Mathematics and Physics for engineering, in line with Tamil Nadu's strong professional-course culture.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A portfolio of Diploma courses, a vocational strand, a reflective project and skills work. Rare in southern Tamil Nadu, so tuition generally supports the academic courses that sit inside it.",
      countryNote:
        "A Thiruvarur student enrolled in a CP elsewhere can take tutoring on the DP subjects and on building a reflective project from a real local theme, such as delta farming or temple heritage.",
    },
  ],

  subjectsIntro:
    "Every Thiruvarur match starts with the precise course and level. A tutor who teaches Biology SL confidently may not be the right choice for Biology HL, and Maths AA HL is not the same job as Maths AI SL. Syllabus comes first, followed by an hour that fits the child's school timetable and any tuition already taken.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus, vectors and proof, with demanding long problems at Higher Level for engineering applicants." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator-based work suited to biology, economics and commerce routes." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, electricity and nuclear topics, with proper uncertainty treatment for the practical." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure and bonding, energetics, rates and organic chemistry, with the data booklet used fluently." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and physiology, plus practice in reading unfamiliar experimental graphs." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, trade and development, with commentaries built on news that students follow." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study answers and the calculations examiners expect on finance and operations." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading and comparison for students whose first language is Tamil." },
    { name: "IB Tamil", levels: "HL / SL", description: "Language A literature or Language B, in a language the student already owns and lives in." },
    { name: "IB Hindi", levels: "SL", description: "Language B acquisition for students who need a second Indian language." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming and the documented product for the internal assessment." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Water, soil and climate cases that fit a delta shaped by rice farming and cyclones." },
    { name: "IB Geography", levels: "HL / SL", description: "Coastal and river systems, development and a fieldwork method that stands up to marking." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation, structured essays and a manageable internal investigation." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Testing knowledge claims and keeping the exhibition's argument tight." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Choosing a question, managing sources and meeting supervisors. Guidance only, never authorship." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Investigation criteria and the algebra that later underpins DP Mathematics." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel IGCSE work is planned by syllabus code and tier. A student sitting Mathematics 0580 Extended prepares differently from one taking Additional Mathematics 0606, and Biology 0610 differs from Combined Science 0653. We also ask what comes after Class 10, because an IB Diploma or A Levels means the maths and sciences need to be carried further.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with non-calculator accuracy and timing." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, logarithms and trigonometry that lead straight into IB Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Motion, energy, circuits and waves, with the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, rates, electrolysis and planning a qualitative analysis." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Enzymes, transport, inheritance and data-response questions." },
    { name: "IGCSE Combined Science", levels: "0653", description: "One award that spans all three sciences." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative and summary, with attention to structure." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, listening and speaking for Tamil-first learners." },
    { name: "IGCSE Tamil as a Second Language", levels: "Grade 9-10", description: "Reading and writing tasks in a language spoken at home, often a dependable scoring paper." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, graphs and short evaluation." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case studies, simple accounts and structured answers." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, logic gates and programming tasks." },
  ],

  regionsTitle: "Thiruvarur and delta towns our online IB and IGCSE tutors reach",
  regionsIntro:
    "The tutor pool is the same in every part of the district, since tutors are chosen for the syllabus. What changes is each family's day. Some students cross the delta to school in Thanjavur or Tiruchirappalli, others attend a local matriculation school and tuition classes, and the lesson has to fit that real timetable. Cyclone-season outages and waterlogged streets are also discussed before the first trial.",
  regions: [
    { name: "Thiruvarur town centre", note: "Around the Thyagaraja temple and its tank, where most professional and trading families live and many children attend local matriculation schools." },
    { name: "Vilamal", note: "A residential edge of the town towards the Nagapattinam road, popular with families of teachers and government staff." },
    { name: "Kamalalayam area", note: "Near the great temple tank, a dense neighbourhood of old houses where broadband quality varies street by street." },
    { name: "Neelakudi", note: "The location of the Central University of Tamil Nadu campus, bringing academic households and a keen interest in higher education." },
    { name: "Mannargudi", note: "A historic town to the south-west with a strong school culture, where families often look towards Thanjavur and Tiruchirappalli." },
    { name: "Nannilam", note: "A taluka town on the road to Kumbakonam, with farming households and growing interest in online study." },
    { name: "Thiruthuraipoondi", note: "A major paddy and trading centre towards the coast, with students who rely on buses for school." },
    { name: "Kodavasal", note: "A smaller town between Thiruvarur and Kumbakonam, where school choice is limited and distance learning fills gaps." },
    { name: "Valangaiman", note: "An inland delta town with farming families who plan study around harvest and irrigation seasons." },
  ],

  schoolDisclaimer:
    "IB Gram operates independently. Schools are listed on this page only to show where IB and IGCSE classrooms can be found within reach of Thiruvarur. None has endorsed us, asked to be included or engaged our services, and we have no connection to the International Baccalaureate, Cambridge or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Thiruvarur district",
      note: "We found no IB or Cambridge school in Thiruvarur that we could verify, so none is named for the town. Families looking at these syllabuses should expect to use a school elsewhere.",
      schools: [],
    },
    {
      city: "Nearby: Thanjavur",
      note: "Thanjavur, roughly an hour's drive away, has one confirmed Cambridge IGCSE campus with residential facilities, which is the closest option for Thiruvarur families.",
      schools: ["Yagappa International School, Sengipatti"],
    },
    {
      city: "Nearby: Tiruchirappalli",
      note: "Trichy offers a wider choice of schools that teach Cambridge syllabuses, reachable by rail or road, with hostels for senior students.",
      schools: ["Alpha Cambridge International School", "The Indian Public School, Trichy"],
    },
    {
      city: "Nearby: Madurai and Chennai",
      note: "Madurai and Chennai hold the largest groups of international schools in the state, and some delta families board children there for Class 9 to 12.",
      schools: ["Velammal Global School", "Vikaasa World School", "APL Global School", "Gateway International School"],
    },
  ],

  modesIntro:
    "Tutors do not go to Thiruvarur homes, because in-person home tuition at IB Gram exists only in Gurugram and parts of Delhi NCR. Thiruvarur students learn live, one to one, over video from their own desk. Three formats are on offer, chosen by subject and by how busy the term is.",
  modes: [
    {
      title: "Weekly one-hour class",
      description:
        "A live hour at a fixed slot each week with the same tutor, finishing with a written note. Right for subjects that need regular, cumulative work.",
      bullets: [
        "Same tutor from week to week",
        "Worked solutions on a shared screen",
        "A recap note after every session",
        "No bus, train or fuel needed",
      ],
    },
    {
      title: "Focused exam and coursework push",
      description:
        "Extra sessions before school mocks, internal assessment deadlines and the main exam sittings, concentrating on timed questions and feedback in examiner style.",
      bullets: [
        "Past papers grouped by topic",
        "More hours only where marks are lost",
        "Useful ahead of predicted-grade dates",
        "Eased off after the papers end",
      ],
    },
    {
      title: "Short live session with marked work",
      description:
        "One brief live class each week and a set of practice questions that the tutor marks between meetings. Helps students with long school days and little free evening time.",
      bullets: [
        "One live touchpoint weekly",
        "Comments on independent practice",
        "Carries through holidays",
        "Can grow into two lessons a week",
      ],
    },
  ],

  sections: [
    {
      heading: "Who chooses IB and IGCSE in Thiruvarur, and where are the classrooms?",
      paragraphs: [
        "Thiruvarur district sits in the eastern Cauvery delta, with a town of temple streets, government offices and a fast-growing educational footprint anchored by the Central University of Tamil Nadu campus and a government medical college. Schooling is mostly State Board or matriculation, with CBSE schools in the mix. No IB or Cambridge school in the town could be verified, so the school clusters on this page are marked as nearby.",
        "The families who enquire about international syllabuses are a varied group. Some have a parent with a foot in the Gulf, Singapore or Malaysia, where many delta families have links. Some are doctors, teachers or university staff who want a curriculum that travels with a transfer. Others are returning from Chennai or Bengaluru with a child midway through an IB or Cambridge course.",
        "Their question is how a child can follow a syllabus that the town does not teach. A number of families board children in Tiruchirappalli or Chennai from Class 9, some commute to Thanjavur for senior years, and others keep the child in a local school and add a specialist tutor over video so that the international option remains open.",
        "A tutor also helps the child who has just moved from the Tamil-medium or matriculation stream into an English-medium international classroom. The vocabulary of science and economics, and the skill of writing for a mark scheme, feel unfamiliar at first, and a few months of one-to-one work usually repairs that faster than general classroom catch-up.",
      ],
      bullets: [
        "No IB or Cambridge school in Thiruvarur could be verified",
        "Thanjavur, Trichy, Madurai and Chennai hold the nearest campuses",
        "Overseas links, transfers and returnees drive most enquiries",
        "Online tutors fill the subject gap without a move",
      ],
    },
    {
      heading: "Samacheer Kalvi, CBSE, IB or IGCSE: what differs for a delta student?",
      paragraphs: [
        "The Tamil Nadu State Board syllabus, known as Samacheer Kalvi, leads to the public exams in Classes 10, 11 and 12, and its papers are closely tied to the textbooks. The state has a strong tradition of preparing for NEET, JEE and TNEA, which builds careful, high-volume practice. IB and IGCSE questions ask something different: what would you do with a situation you have not rehearsed?",
        "CBSE occupies the middle. NCERT books explain ideas well and recent papers carry more case-based questions, so a CBSE student often slides into IGCSE sciences a little more easily. The key adjustment for everyone is learning command words. Describe, explain, evaluate and justify each signal a different shape of answer, and a mark scheme rewards that shape.",
        "Assessment design is another contrast. The IB Diploma includes substantial internal work in most subjects, and that work is marked alongside the exams. The state board puts most weight on the final paper, and IGCSE is mostly assessed by examination too, with practical skills tested in a written paper or a practical.",
        "The table puts the points that Thiruvarur parents ask about side by side.",
      ],
      table: {
        caption: "Samacheer Kalvi, CBSE and IB / IGCSE seen from Thiruvarur",
        columns: ["Point", "Tamil Nadu State Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Medium", "Tamil or English", "English mainly", "English, with Tamil available as a language subject"],
          ["Typical question", "Textbook-based problems and recall", "Recall plus application items", "Unfamiliar contexts that need analysis and judgement"],
          ["Internal work", "Small practical and assignment marks", "Internal marks and projects", "Large in IB, limited in IGCSE"],
          ["Usual next step", "TNEA, NEET and JEE coaching", "JEE, NEET and CUET-UG", "CUET-UG, overseas study, and JEE or NEET after eligibility checks"],
          ["Where it is taught", "Across Thiruvarur", "Thiruvarur and Thanjavur", "Thanjavur, Trichy, Madurai, Chennai; none confirmed locally"],
        ],
      },
    },
    {
      heading: "What is the cost of IB and IGCSE tuition in Thiruvarur, and what shapes the rate?",
      paragraphs: [
        "Four factors shape the rate. The tutor's experience with your exact course, the level taught, the number of weekly hours and the length of each session all count. A specialist who has taught IB Chemistry HL for years will usually charge more than a tutor supporting MYP English, and a two-hour weekly plan costs more than one hour. A written quote comes before the free trial, and there is no public price list.",
        "Teaching online strips out some costs. A Thiruvarur family does not pay for a tutor's transport or for a premium attached to a Chennai address, and does not spend evenings on a bus to Thanjavur or Trichy. For a child with a full school day, the recovered time can be worth more than the rupees.",
        "Where the hours are spent matters as much as how many there are. Ninety minutes on how to structure an IB Biology extended response often brings more than three hours of rereading notes. A sound tutor can explain what month one will cover, how progress will be tracked and when the plan will be revisited.",
        "Plans stay flexible. A family can stop for Pongal or a cyclone week, start again afterwards, and switch tutor without beginning the process from scratch.",
      ],
      bullets: [
        "Rate depends on subject, level, hours and tutor experience",
        "No transport cost and no travel time",
        "A written rate before the trial lesson",
        "Pause, resume or swap tutor without penalty",
      ],
    },
    {
      heading: "Online tutor, Thanjavur or Trichy tuition centre, local teacher or self-study: which suits Thiruvarur?",
      paragraphs: [
        "Tuition centres in Thanjavur, Kumbakonam and Tiruchirappalli are well established, but most are tuned to NEET, JEE and state board results. An IB or IGCSE learner who joins a batch finds classmates on a different syllabus, a fixed timetable and a bus ride there and back. It may help for calculus and is not built for these qualifications.",
        "A private teacher in Thiruvarur can give personal attention, yet hardly any local teachers have taught the IB Diploma or Cambridge Extended papers. Self-study with past papers works for a disciplined older student, but it leaves open whether a written answer would actually earn marks.",
        "Online one-to-one teaching blends attention with specialist knowledge. It asks for a stable connection, a working camera and microphone, and a student who arrives each time with a specific question. A phone hotspot and a fully charged laptop cover the typical delta power cut.",
        "The table sets the four options against what matters for these courses.",
      ],
      table: {
        caption: "Options for IB or IGCSE help from Thiruvarur",
        columns: ["Option", "Knows IB and IGCSE papers", "Attention", "Practical points"],
        rows: [
          ["Online one-to-one tutor", "Yes, matched on course and level", "Undivided", "Needs steady broadband; no travel"],
          ["Thanjavur or Trichy centre", "Seldom, focus is NEET and JEE", "Shared with a batch", "Bus or train journey, set hours"],
          ["Local private teacher", "Varies, few have taught these boards", "High", "Small supply in Thiruvarur"],
          ["Self-study", "Only what the student finds", "None without review", "Low cost, weak on feedback"],
        ],
      },
    },
    {
      heading: "The Thiruvarur year: Pongal, the temple festival, monsoon and cyclone season against exam dates",
      paragraphs: [
        "Life in the delta follows the paddy cycle and the temple calendar. Pongal in mid-January is a multi-day festival that empties the week. The Panguni Uthiram season in March and April brings the famous Aazhi Ther chariot festival at the Thyagaraja temple, with crowds and road closures in town. Tamil New Year comes soon after, and Deepavali lands in October or November.",
        "Weather is just as important. April to June is hot and humid, while the southwest monsoon is milder here than on the west coast. The northeast monsoon from October to December is the real test: heavy rain, flooded fields and occasional cyclones, as the delta learned during Cyclone Gaja in 2018. Power and broadband can fail for days. A careful plan puts buffer weeks before the November exam series.",
        "The Mettur dam water release each June and the Kuruvai, Samba and Thaladi crop seasons also shape household routines, as many delta families have ties to farming. A tutor who understands this will arrange lessons outside the busiest field-work days.",
        "The table is a planning sketch only. Real dates for mocks and exams come from your school or exam centre.",
      ],
      table: {
        caption: "A Thiruvarur year for an IB or IGCSE student",
        columns: ["Months", "What is going on", "Study focus"],
        rows: [
          ["March to June", "Public exams, new session, Aazhi Ther season, heat, May series", "Finish exams, then a light summer plan"],
          ["July to September", "Kuruvai harvest, steady teaching terms, first coursework drafts", "New content and early internal assessment planning"],
          ["October to December", "Deepavali, northeast monsoon, cyclone risk, November series", "Past papers early, buffer for outages"],
          ["January to February", "Pongal, mocks, predicted grades, applications", "Mock exams and university deadlines"],
        ],
      },
    },
    {
      heading: "Where can a Thiruvarur IB or IGCSE student study after school?",
      paragraphs: [
        "The IB Diploma is accepted by universities in the UK, US, Canada, Australia, Singapore and across Europe, and the Association of Indian Universities treats it as equivalent to Class 12. A Thiruvarur student can therefore apply within India and abroad using one set of results, provided each course's entry conditions are met.",
        "Within Tamil Nadu the delta is well placed. SASTRA University in Thanjavur, NIT Tiruchirappalli, Anna University, IIT Madras and the Central University of Tamil Nadu at Neelakudi are all within reach, and Tamil Nadu's medical and engineering colleges draw large numbers from here. CUET-UG opens central universities to IB and IGCSE-route students. JEE and NEET eligibility for IB students depends on the subject combination and that year's rules, so the current bulletin is worth reading before subjects are chosen.",
        "Students aiming overseas typically begin serious planning in Class 11, because offers depend on predicted grades, a personal statement and sometimes tests or interviews. An online tutor supports the subject side while the family coordinates the rest with the school or an adviser.",
        "IGCSE students usually move on to A Levels, the IB Diploma or Class 11 at an Indian school that accepts transfers. Overseas universities read A Level results much as they read IB grades.",
      ],
      bullets: [
        "IB Diploma equals Class 12 for Indian admission via AIU recognition",
        "SASTRA, NIT Tiruchirappalli and IIT Madras are reachable choices",
        "CUET-UG is open to IB-route applicants",
        "Check JEE and NEET eligibility every year",
      ],
    },
    {
      heading: "IB Maths AA or AI and the sciences: what should a delta student plan for?",
      paragraphs: [
        "IB Mathematics is split into Analysis and Approaches, which suits students who enjoy algebra, calculus and proof, and Applications and Interpretation, which favours data, modelling and technology. Tamil Nadu students trained for NEET and TNEA often feel at home in AA, then discover that the exploration and the open-ended Paper 3 questions need slower, more reflective thinking.",
        "Physics HL uses calculus from Maths AA, so it rarely pairs well with AI. Chemistry HL adds organic synthesis, kinetics and equilibrium. Biology HL rewards exact reading of data and careful description of how an experiment was designed. Students with the state's strong science foundation can do well, provided they practise putting reasoning into sentences.",
        "Every science carries an internal investigation. The student sets a question, plans a method, gathers data and judges the outcome. Tutors explain the criteria, challenge a weak plan and confirm understanding, while the question, data and writing remain the student's. Where school laboratory time is tight, simulations or school-approved datasets can support the work.",
        "Starting early matters. The first term of Class 11 sets habits for two years, and students who begin then seldom need a last-minute rescue when predicted grades fall due.",
      ],
      bullets: [
        "AA for calculus and proof, AI for data and modelling",
        "Physics HL pairs most naturally with Maths AA",
        "Internal assessments are coached but never written by tutors",
        "Begin in early Class 11 for the cumulative subjects",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a Thiruvarur student decide?",
      paragraphs: [
        "IGCSE subjects are entered at Core or Extended. Core grades end at C, and Extended can reach A*, so a student planning A Levels or IB sciences should aim for Extended. Core suits a child whose confidence has slipped and who needs a secure pass, though changing tier late is difficult once entries are made.",
        "The combination of subjects is the second decision. Aspiring engineers and doctors are better served by three separate sciences than by a combined award. Additional Mathematics 0606 smooths the path to IB Maths AA and A Level Mathematics, and Tamil as a second language is usually a reliable scoring paper for students who speak it daily.",
        "Practical skills are examined through a written paper or a practical session, depending on the syllabus. Students whose schools have modest laboratories still have to learn planning, tabulating and evaluating, and tutors use recorded demonstrations and data sets for that.",
        "A private candidate from Thiruvarur needs a Cambridge-registered centre that takes outside entries, likely in Thanjavur, Tiruchirappalli or Chennai, and must register well in advance. A tutor can work back from those dates, yet booking the centre remains the family's task.",
      ],
      bullets: [
        "Extended tier suits A Level and IB science routes",
        "Separate sciences for engineering and medicine goals",
        "Tamil papers often reward home fluency",
        "Private entry needs a centre and early registration",
      ],
    },
  ],

  tutorsIntro:
    "Meet the tutors who teach IB PYP, MYP and DP subjects and Cambridge and Edexcel IGCSE to Thiruvarur students. The match begins with the exact syllabus, level and exam series, then moves to a weekly hour that suits your child's day, since every class is online.",

  process: [
    { title: "Send the details", description: "Tell us the programme or board, subject, level, recent grades and which evenings are free in Thiruvarur." },
    { title: "Review your options", description: "We suggest tutors who have taught the course, each with a line on why they were picked." },
    { title: "Sit a free lesson", description: "Your child tries a real topic on video, at no charge and with no commitment." },
    { title: "Agree the first month", description: "The tutor explains topics, rhythm and how progress will reach you." },
    { title: "Hold a regular slot", description: "One set hour each week, moved around exams, festivals and storm spells." },
  ],

  whyPoints: [
    { title: "Syllabus before anything else", description: "We search for tutors who have taught your child's exact course and level." },
    { title: "Open about being online", description: "Thiruvarur families are told at the start that lessons run on video and no tutor visits." },
    { title: "See before you commit", description: "A free lesson on a real topic shows what no profile can." },
    { title: "Straight talk on coursework", description: "Tutors coach internal assessments, the Extended Essay and TOK and never write them." },
    { title: "Notes that arrive", description: "A short written summary follows every class, with a broader review every few weeks." },
    { title: "No lock-in", description: "Pause, change tutor or stop whenever it suits you." },
  ],

  faqs: [
    {
      question: "Can we get IB or IGCSE home tuition in Thiruvarur?",
      answer:
        "Home tuition here is online, because tutors do not visit Thiruvarur and in-person lessons run only in Gurugram and parts of Delhi NCR. Your child joins a live one-to-one class from home on a laptop, with the tutor on video and a shared whiteboard. For most families that is exactly what private tuition at home means.",
    },
    {
      question: "How do I find an IB tutor for my child in Thiruvarur?",
      answer:
        "Share the programme, subject, level and school, and we come back with tutors who have taught that course. IB specialists are scarce in the delta, so the tutor connects from elsewhere in India. You meet them in a free lesson, and only then agree on a weekly slot and a rate in writing.",
    },
    {
      question: "Is there an IB or Cambridge school in Thiruvarur?",
      answer:
        "We could not confirm one, so none is named for the town. The closest verified options are Yagappa International School near Thanjavur, two Cambridge-linked schools in Tiruchirappalli, and larger groups in Madurai and Chennai. Many local families keep a state or CBSE school and add an online tutor for depth.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Thiruvarur?",
      answer:
        "The rate varies by subject, level, weekly hours and the tutor's experience, and it comes in writing before the trial. We do not publish a fixed list because IB Physics HL and MYP Tamil are priced differently. Online lessons remove travel costs, so the fee pays for teaching time.",
    },
    {
      question: "Can a Samacheer Kalvi student move to IGCSE?",
      answer:
        "Yes, and Class 8 or 9 is the easiest point to switch. Much of the content overlaps. The gaps are in English written to a mark scheme, understanding command words and showing reasoning instead of only an answer. Regular one-to-one lessons normally bridge them within a few months.",
    },
    {
      question: "Which IB subjects are asked for most from the delta?",
      answer:
        "Biology, Chemistry, Mathematics and Physics lead, mirroring Tamil Nadu's medical and engineering ambitions, followed by Economics and Business Management. Students from Tamil-medium schools often ask for English writing support. Tutors can also teach Tamil as a language subject, where fluency helps the grade.",
    },
    {
      question: "Will a tutor write my child's Internal Assessment or Extended Essay?",
      answer:
        "No. Tutors are not allowed to, and they do not. They explain marking criteria, help choose a question that can be managed, review drafts for clarity and teach method. The data, thinking and writing have to be your child's, because authenticity checks exist and a breach can jeopardise the whole qualification.",
    },
    {
      question: "What happens in the free trial lesson?",
      answer:
        "Your child works on a topic of their choice with the proposed tutor, live on video, with no payment and no obligation. Afterwards you get a short note on what was covered and what we suggest next. If the tutor is not the right match, we offer another before anything is agreed.",
    },
    {
      question: "What equipment and connection will we need?",
      answer:
        "A laptop or tablet with a working camera and microphone, and a connection that can carry video. Keep a phone hotspot and a charged battery ready for storm season. A stylus tablet is ideal for maths and science, though a sheet of paper shown to the camera works, and the tutor can write on the shared whiteboard.",
    },
    {
      question: "Can my child take IGCSE privately from Thiruvarur?",
      answer:
        "Yes, through a Cambridge-registered centre that accepts private candidates, probably in Thanjavur, Tiruchirappalli or Chennai. Registration closes months before each series, and written papers replace practicals. We can plan revision around the centre's dates, but finding and booking the centre is the family's responsibility.",
    },
    {
      question: "Is the IB recognised for college admission in India?",
      answer:
        "Yes. The Association of Indian Universities treats the IB Diploma as equal to Class 12, and IB students apply through CUET-UG like other candidates. Some courses require certain subjects, and JEE or NEET eligibility depends on the subjects studied and current rules, so check each year's bulletin.",
    },
    {
      question: "Our child studies in Thanjavur or Trichy. Can tuition still fit?",
      answer:
        "Usually, since online lessons spare a second journey. We choose a time after your child returns home and eats, often late evening or Sunday, and keep it constant. On heavy travel days, a shorter session with marked practice is easier to manage.",
    },
    {
      question: "When should IB Diploma tuition begin?",
      answer:
        "The first term of Class 11 is best, particularly for Mathematics, Physics, Chemistry and Biology. The content builds over two years, and coursework begins early. Starting in Class 12 leaves little room for timed papers before predicted grades go to universities.",
    },
    {
      question: "What if a cyclone, flood or power cut disrupts a lesson?",
      answer:
        "We reschedule it. The northeast monsoon and cyclone spells are a known risk in the delta, so we agree a plan beforehand: a hotspot, a charged laptop and a make-up slot. Lessons lost this way are not charged twice, and we add buffer weeks before the November series.",
    },
    {
      question: "How do we begin from Thiruvarur?",
      answer:
        "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board, subject, level, current grade and free evenings. We reply with a shortlisted tutor, a trial time and a written rate. Nothing is payable until you have seen the first lesson and chosen to continue.",
    },
  ],

  internalLinks: [
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE overview", href: "/igcse/", description: "Cambridge and Edexcel subjects, tiers and exam sessions." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, board and experience." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the core and internal assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project for parents." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition for younger learners." },
    { label: "IB Maths guide", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI, and preparing for each." },
    { label: "Admissions and test prep", href: "/admissions/test-prep/", description: "Support around CUET, JEE, NEET and overseas applications." },
    { label: "IB and IGCSE tutoring in Thanjavur", href: "/thanjavur/", description: "The nearest city with a confirmed Cambridge school." },
    { label: "IB and IGCSE tutoring in Nagapattinam", href: "/nagapattinam/", description: "Online matching for families on the coast next door." },
    { label: "IB and IGCSE tutoring in Tiruchirappalli", href: "/tiruchirappalli/", description: "A larger centre with several Cambridge-linked schools." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and book a free trial lesson." },
  ],

  closingHeading: "Start with a free IB or IGCSE trial lesson in Thiruvarur",
  closingBody:
    "Share the programme or board, subject and level, your child's school and the evenings that are genuinely free. You will hear back with a tutor who has taught the course, a trial time on video and a written rate, and nothing is due until you have seen the first lesson. Email support@ibgram.com or message +91 7439 368 115 on WhatsApp.",

  geo: { latitude: 10.7661, longitude: 79.6344 },
  alternateNames: ["Tiruvarur", "Thiruvarur Tamil Nadu", "Tiruvarur Tamil Nadu"],
  wikipedia: "https://en.wikipedia.org/wiki/Thiruvarur",
  stripSchools: [],
};
