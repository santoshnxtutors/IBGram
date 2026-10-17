import type { CitySeoPage } from "../types";

/**
 * /loha/ - IB and IGCSE tutoring page for Loha, a taluka town in Nanded district, Marathwada,
 * Maharashtra. No IB or Cambridge school is confirmed in Loha, so the page is written for a small
 * town where international curricula arrive through relocation, boarding or private entry, with
 * honest nearby-city clusters. Online-only delivery: tutors do not visit homes in Loha, since
 * in-person home tuition exists only in Gurugram and parts of Delhi NCR. Kept distinct from
 * /nanded-waghala/ by focusing on the taluka-town household and rural-income calendar.
 */
export const loha: CitySeoPage = {
  slug: "loha",
  countryName: "Loha",
  countryNameLong: "Loha, Nanded district, Maharashtra",
  demonym: "Loha",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions work around harvest-season farm duties, the extreme April and May heat of Marathwada, load-shedding hours, and the exam dates of whichever school your child actually attends",
  lastUpdated: "2026-09-21",
  geo: { latitude: 18.9667, longitude: 77.1333 },
  wikipedia: "https://en.wikipedia.org/wiki/Loha,_Maharashtra",
  alternateNames: ["Loha Nanded", "Loha taluka", "Loha Maharashtra"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Loha | Online Private Tuition",
  metaDescription: "IB and IGCSE tutors for Loha, Nanded district: live one-to-one online tuition from home, planned around Marathwada heat and farm seasons. Free trial.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Loha",
  heroEyebrow: "IB & IGCSE TUTORING FOR LOHA STUDENTS",
  heroSubtitle:
    "Searching for home tuition in Loha for an international syllabus? IB Gram runs private one-to-one tuition from home, online: your child sits at their own desk and a specialist teaches live on screen. No tutor travels to Loha, and nothing about the lesson depends on a big-city address.",
  primaryKeyword: "IB and IGCSE tutors in Loha",
  secondaryKeywords: [
    "IB tutor Loha",
    "IGCSE tutor Loha",
    "IB home tuition Loha",
    "IGCSE home tuition Loha",
    "IB private tuition Loha",
    "IB Maths tutor Loha",
    "IGCSE Maths tutor Loha",
    "IB Physics tutor Loha",
    "IB Chemistry tutor Loha",
    "IB Biology tutor Loha",
    "IB DP tutor Loha",
    "IB MYP tutor Loha",
    "IB PYP tutor Loha",
    "IGCSE online tuition Loha",
    "IB tutor Nanded district",
    "IGCSE tuition Loha Maharashtra",
    "online IB tuition Marathwada",
    "Cambridge IGCSE tutor Nanded",
    "IB tutor Kandhar",
    "IB tutor Latur region",
  ],
  imageAltText: "A Loha student at a study desk in a Marathwada home taking a live one-to-one IB lesson on a laptop",

  heroTrustPoints: [
    "Free trial lesson, no payment or card needed",
    "Written summary after every session, for parents to read",
    "A different tutor if the first match is not right",
    "Rates in writing before booking, never quoted over a call and forgotten",
    "Tutors coach; they never write an IA, Extended Essay or TOK essay",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on local time" },
    { value: "PYP to DP", label: "Stages we teach" },
    { value: "Free trial", label: "Before any payment" },
    { value: "May & Nov", label: "Main exam windows" },
  ],

  intro: {
    heading: "International-curriculum tuition for a taluka town in Marathwada",
    paragraphs: [
      "Loha is a taluka town in Nanded district, in the Marathwada region of Maharashtra. It is not a city where international schools line the main road, and we would rather say so than pretend otherwise. Families here who ask about IB and IGCSE tutors in Loha are usually thinking about one of three things: a child who will move to a larger city, a student already in an international programme elsewhere, or a young learner whose parents want a wider syllabus than the local board provides.",
      "Because there is no tutor who can sensibly visit a house in Loha, and because IB Gram's in-person home tuition exists only in Gurugram and parts of Delhi NCR, everything on this page is delivered online. Online home tuition means a live private lesson on a laptop from your own room, with a subject specialist who is matched to the child, not to the postcode. For a taluka town this is not a compromise; it is the only practical way to reach a specialist in IB Physics or IGCSE Extended Mathematics.",
      "What matters more here than anywhere is realism about the study environment: voltage dips, summer heat that can push past forty degrees, a broadband line that may be a mobile hotspot, and a household calendar shaped by farming, trade or government service. The tutors we match are used to this and plan around it instead of expecting a perfect set-up.",
      "Tutors coach understanding, exam technique and written answers. They do not write internal assessments, Extended Essays or TOK essays. IB Gram is an independent service and is not affiliated with the IB, Cambridge, Pearson or any school.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description: "Inquiry-based primary learning in which a child investigates a central idea. Tutoring is gentle and short, building reading, number confidence and the habit of explaining a thought clearly.",
      countryNote: "In Loha, PYP exposure comes almost entirely from families who have lived in a big city or abroad. The tutor mainly keeps a child in step with inquiry-style tasks while a local routine settles in.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description: "Eight subject groups, criterion-based marking, global contexts and a personal project. Tutoring teaches children how to show reasoning instead of just stating answers.",
      countryNote: "A child moving from a Marathi-medium or State Board school to MYP faces a jump in English writing. Early sessions concentrate on sentence-level clarity before topic content.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description: "Six subjects, Theory of Knowledge, an Extended Essay and CAS. Tutoring focuses on subject content, paper technique and timed writing, while the essay and internal assessments stay the student's own.",
      countryNote: "A Loha Diploma student is typically boarding or living in a larger city, or studying through a school elsewhere. Online tutoring then continues smoothly across holidays back home.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description: "Two or three DP courses with career-related study and a reflective project. Tutors support the DP subjects and the writing that connects them.",
      countryNote: "Uncommon in the region, but useful for students who see a practical vocational route and still want university options open.",
    },
  ],
  programmesIntro: "Each stage needs a different kind of help. A Class 6 child learning to write a paragraph in English and a Class 12 student sitting Higher Level Chemistry do not belong in the same lesson plan, and we do not treat them as if they do.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Algebra, calculus and proof-style reasoning, suited to engineering and pure science. Practised in both calculator and no-calculator papers." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, probability and modelling with technology, often chosen for life sciences, commerce and social science applicants." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics through quantum and nuclear physics, with attention to unit handling and the data-based questions in Paper 2 and 3." },
    { name: "Chemistry", levels: "SL / HL", description: "Structure, energetics, kinetics and organic synthesis, with practice in the calculation-heavy questions." },
    { name: "Biology", levels: "SL / HL", description: "Cell structure, genetics, ecology and human physiology, taught with the command terms that mark schemes follow." },
    { name: "Economics", levels: "SL / HL", description: "Markets, macro indicators and development, using examples from agriculture, cotton and soybean pricing, and rural credit." },
    { name: "Business Management", levels: "SL / HL", description: "Planning, finance, marketing and operations, useful for students from trading, agri-processing or family-firm backgrounds." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Analysing non-literary and literary texts, with Paper 1 and 2 structure and a steady habit of timed writing." },
    { name: "English B", levels: "SL / HL", description: "For students who learned English as an additional language, covering reading, listening, speaking and the written tasks." },
    { name: "Hindi B", levels: "SL / HL", description: "Language acquisition for students more comfortable in Marathi, Hindi or Urdu at home, with attention to the written tasks and the oral." },
    { name: "Marathi A or B (school-supported)", levels: "SL", description: "Where a school offers Marathi, we discuss how tutoring can support reading and writing practice, subject to a tutor being available." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "A cross-disciplinary subject that suits students interested in water, soil and climate, themes close to Marathwada life." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming logic, computational thinking and a case-study paper, taught in the language your school uses." },
  ],
  subjectsIntro: "Choose subjects according to the course your child wants at university and what the school offers. If a mix is unusual, tell us at the trial lesson and the tutor match follows from it.",
  igcseSubjectsIntro: "IGCSE subject availability depends on the board and the examination centre your child will sit with. These are the subjects we are asked about most often.",
  igcseSubjects: [
    { name: "Mathematics (Core / Extended)", levels: "Core, Extended", description: "Number, algebra, geometry and statistics, with a diagnostic to decide the right tier for the student." },
    { name: "Physics", levels: "Core, Extended", description: "Motion, energy, electricity and waves, with practice on the written alternative to the practical." },
    { name: "Chemistry", levels: "Core, Extended", description: "Atoms, bonding, reactions and organic chemistry, with fluency on mole calculations." },
    { name: "Biology", levels: "Core, Extended", description: "Living organisms, transport, reproduction and ecology, answered in the compact style marking schemes reward." },
    { name: "English as a Second Language", levels: "Core, Extended", description: "Reading, writing, listening and speaking, well suited to students whose home language is Marathi, Hindi or Urdu." },
    { name: "English First Language", levels: "Extended", description: "Directed writing, summary and composition for students ready for a stronger language tier." },
    { name: "Hindi as a Second Language", levels: "Core, Extended", description: "Where the centre offers it, structured support in reading, writing and speaking." },
    { name: "Computer Science", levels: "Extended", description: "Algorithms, binary data, networks and pseudocode tasks practised on paper." },
    { name: "Economics", levels: "Extended", description: "Basic economic problem, market behaviour, government policy and trade." },
    { name: "Geography", levels: "Extended", description: "Physical and human themes, with fieldwork-style questions and map skills, well matched to a drought-prone region." },
  ],

  regionsTitle: "Loha and the surrounding Nanded district areas we support",
  tutorsIntro: "Every tutor below teaches Loha students online from elsewhere in India. Profiles show subjects, levels and experience, and each match starts with a free trial lesson, so you judge the fit before paying anything.",
  regionsIntro: "All tutoring is online, so these are the places our students and their schools are connected to. We list them to help you plan timing and school travel, not because a tutor will travel there.",
  regions: [
    { name: "Loha town centre", note: "The main market area and taluka offices. Most families here use State Board or CBSE schools in town, with older students looking to Nanded or Latur for the next step." },
    { name: "Loha bus stand and highway side", note: "The town's connection to Nanded and neighbouring talukas. Students who commute for coaching leave and return on fixed bus times, which fixes the evening lesson slot." },
    { name: "Kandhar", note: "A neighbouring taluka town closer to the Nanded road, with a similar tuition culture. Some families compare options across both towns." },
    { name: "Nanded city", note: "The district headquarters and the nearest large urban centre, home to Swami Ramanand Teerth Marathwada University and the Hazur Sahib gurdwara. Where Loha families look first for higher education and larger schools." },
    { name: "Waghala", note: "Part of the twin municipal area with Nanded. Relevant for families planning a move and for students who attend coaching there." },
    { name: "Mukhed and Deglur direction", note: "Border-side areas of Nanded district shaped by trade and Telugu links, where families sometimes look towards Hyderabad for international schooling." },
    { name: "Latur", note: "A major coaching hub in Marathwada, widely known for JEE and NEET preparation. Many Loha families look there for competitive entrance training." },
    { name: "Udgir", note: "A town in Latur district with its own schools and tuition scene. Occasionally considered by families on the Karnataka side of the region." },
    { name: "Purna and Parbhani side", note: "Rail and road links east of Nanded. Students who move here for school typically keep home lessons online during visits." },
    { name: "Hingoli and Washim road", note: "Neighbouring districts whose students share the same State Board calendar and the same exam-time pressures." },
  ],

  schoolClusters: [
    {
      city: "Loha itself",
      note: "We have not been able to confirm any school in Loha running the IB or Cambridge IGCSE. International-curriculum learners from the town are therefore private candidates, relocating families, or students studying at schools in other cities and returning home for holidays.",
      schools: [],
    },
    {
      city: "Nearby: Nanded",
      note: "Nanded city has a larger set of private schools, but we could not confirm IB or IGCSE at any of them. Families should ask each school directly before relying on any listing.",
      schools: [],
    },
    {
      city: "Nearby: Hyderabad",
      note: "A direct rail and air connection from Nanded makes Hyderabad the most practical big city with confirmed IB options, and many Nanded-district families have relatives there.",
      schools: ["Oakridge International School, Hyderabad"],
    },
    {
      city: "Nearby: Pune",
      note: "Pune is the largest education hub in Maharashtra, with a deep list of IB and Cambridge schools. We name none here because we have not verified individual campuses for this page; check each school's own site.",
      schools: [],
    },
  ],
  schoolDisclaimer: "IB Gram is an independent tutoring service. We are not affiliated with the IB, Cambridge, Pearson or any school named or described on this page, and a mention is not a recommendation. Confirm curriculum and admission details with the school directly.",

  modesIntro: "Delivery in Loha is online. Three formats cover most of what families ask for.",
  modes: [
    {
      title: "Weekly online one-to-one",
      description: "A steady live lesson at home each week, with the same tutor, a shared whiteboard and a note afterwards. The default for most students.",
      bullets: [
        "Evening or weekend slots in IST",
        "No tutor travels to Loha; home visits run only in Gurugram and parts of Delhi NCR",
        "Backup plan for load-shedding or poor signal",
      ],
    },
    {
      title: "Pre-exam intensive",
      description: "A compressed block of paper practice in the weeks before May or November sessions, especially useful for private candidates.",
      bullets: [
        "Past-paper cycles by topic",
        "Mark-scheme training",
        "Weekend and holiday scheduling",
      ],
    },
    {
      title: "Bridging for a move",
      description: "Short, targeted support for a child who is about to join an IB or IGCSE school in another city and needs to catch up on the syllabus.",
      bullets: [
        "Diagnostic in the first lesson",
        "Focus on English writing and Mathematics",
        "Continues online after the move",
      ],
    },
  ],

  sections: [
    {
      heading: "Who looks for IB and IGCSE tutors in Loha?",
      paragraphs: [
        "In a town of Loha's size, the families who search for IB and IGCSE tutors in Loha are a small group, and each has a clear reason. Some are planning a move to Pune, Hyderabad or abroad and want the child ready for a new syllabus before the move. Others have a son or daughter at a boarding school elsewhere who needs steady help during the holidays at home.",
        "A third group are professionals in government service, medicine, banking or education, who have lived outside Marathwada and want a curriculum with wider subject choice than the local board offers. A fourth are business and farm-income families who see a school-leaving qualification as a way to keep a child's options open internationally.",
        "What they share is a lack of nearby specialists. A local teacher may be excellent for State Board Science but unfamiliar with Paper 3 of IB Physics or Extended Mathematics at IGCSE. Online tutoring removes the distance problem and keeps the subject knowledge where it is needed.",
        "A first message to IB Gram can be as short as a class, a board and a subject. We will propose a tutor and a trial lesson, tell you honestly if a combination is hard to staff, and avoid selling anything the child does not need.",
      ],
      bullets: [
        "Families preparing for a move to a larger city or abroad",
        "Boarding students needing support during holidays at home",
        "Professional families wanting wider subject choice",
        "Business and farm-income families keeping international options open",
      ],
    },
    {
      heading: "Maharashtra State Board, CBSE, ICSE, IB or IGCSE: what changes for a Loha student?",
      paragraphs: [
        "Most children in Loha follow the Maharashtra State Board, with the Class 10 SSC and Class 12 HSC examinations conducted by the divisional board. CBSE schools are present in the wider district. The IB and IGCSE are rare locally, so choosing them usually means a decision about where the child will live and study for the next several years.",
        "State Board exams reward accurate recall of the prescribed textbooks, and the path to engineering or medicine runs through MHT-CET, JEE Main and NEET-UG. The IB asks for broader reasoning and writing across six subjects, and IGCSE is more subject-by-subject. A student moving between them will notice the difference most in extended answers.",
        "Language is an equally important factor. Marathi remains the working language of many Loha classrooms and homes, with Hindi and Urdu also widely spoken. IB and IGCSE assessments are mainly in English, so the strongest early investment for a Loha student is usually English writing, before any science or Mathematics acceleration.",
        "The table below sets the main routes side by side, so that you can see how each fits a family in Marathwada.",
      ],
      table: {
        caption: "Boards compared for a student from Loha",
        columns: ["Board", "Exam style", "Typical entrance route", "Home language fit", "Moving elsewhere"],
        rows: [
          ["Maharashtra State Board", "Textbook-led SSC and HSC papers", "MHT-CET, JEE Main, NEET-UG", "Marathi or semi-English medium", "Smooth within Maharashtra"],
          ["CBSE", "NCERT-based board papers", "JEE Main, NEET-UG, CUET-UG", "Mostly English medium", "Easy transfer across India"],
          ["ICSE / ISC", "Wider written syllabus", "Same national exams as CBSE", "English medium", "Accepted widely"],
          ["IB Diploma", "Six subjects, essays, internal assessment", "AIU equivalence, CUET-UG, overseas offers", "English-led; language B optional", "Strong abroad"],
          ["Cambridge / Edexcel IGCSE", "Tiered subject exams", "Followed by A Level or IB for India", "English-led; limited local languages", "Familiar to UK and Gulf schools"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Loha and what decides it?",
      paragraphs: [
        "IB Gram does not list prices on this page. The rate depends on the tutor's experience, the subject and level, and how many lessons a week you want, so a single number would be wrong for most readers. We give you the rate in writing before booking, and the first trial lesson is free.",
        "The biggest driver is the level of the course. Higher Level Chemistry or Mathematics: Analysis and Approaches requires a specialist, and a Class 7 English writing session does not. The second driver is lesson frequency; one session a week suits maintenance, while an exam run-up may need three. The third is how quickly a match is needed.",
        "What you will not pay for in Loha is travel, either your child's or a tutor's. Many families compare this with a coaching centre in Nanded or Latur, where there are bus fares, hostel or room costs and a batch pace. Online tuition keeps the child at home and turns that travel time into study time.",
        "If you are budgeting for a year, ask about a plan for the high-pressure months only. Many students choose steady lessons until the winter, then a heavier block before the May session, and then pause during summer heat or travel. A written plan with clear limits is more useful than an open-ended arrangement.",
      ],
    },
    {
      heading: "Is online tuition better than a Nanded or Latur coaching centre?",
      paragraphs: [
        "It depends on the exam. Nanded and Latur have long coaching traditions aimed at State Board, JEE and NEET preparation, and for those goals a batch with a strong record is often the right call. For an international syllabus, however, such centres rarely teach the IB or IGCSE, and a student who joins one may end up studying the wrong content.",
        "Online one-to-one teaching trades the energy of a classroom for exact matching. A tutor can spend an entire lesson on one weak topic, and the student can ask questions without hesitating in front of peers. For shy students or those with a gap in English, this is a real advantage.",
        "The risks are practical rather than academic. A dropped connection, a shared phone, or a noisy room can derail a lesson. We recommend a laptop where possible, a power backup for key lesson times, and a lesson room that is quiet for the full hour.",
        "Many families do both: State Board coaching for the main syllabus and a weekly online lesson for a specific IB or IGCSE subject. The table below compares the main options.",
      ],
      table: {
        caption: "Study routes compared for a Loha household",
        columns: ["Route", "Delivery", "Where it helps", "Main drawback", "Typical user"],
        rows: [
          ["IB Gram online one-to-one", "Live video at home", "Exact IB or IGCSE syllabus match; flexible timing", "Requires stable power and internet", "Students in an international programme or a move"],
          ["Nanded or Latur coaching centre", "In-person batch", "Strong for MHT-CET, JEE and NEET", "Travel, fixed pace, rarely IB or IGCSE", "State and CBSE students"],
          ["Local school teacher", "Informal extra help", "Familiar, affordable", "May not know IB papers or IGCSE tiers", "Younger children"],
          ["Self-study", "Independent", "Free and flexible", "No feedback or marking", "Very disciplined seniors"],
        ],
      },
    },
    {
      heading: "How do heat, harvest and festivals change the study year in Marathwada?",
      paragraphs: [
        "A student in Loha studies in a climate that sets its own rules. Marathwada is a drought-prone, rain-fed region, and the long hot season from March through May can be punishing, with afternoons too hot for sustained study and electricity supply under pressure. Lessons in these months work best in early morning or after sunset, and shorter than usual.",
        "The monsoon from June to September brings relief but also its own problems, such as road flooding and network drops. The kharif harvest in October and November is a busy period for many farm households, and children are sometimes pulled into family duties just before the November exams. Tell the tutor early and the plan can adjust.",
        "Festivals add structure. Ganesh Chaturthi, Dasara and Diwali bring breaks that suit revision blocks, and Hola Mohalla in Nanded in March draws large crowds across the district. The Maharashtra school year begins in June, and State Board exams run in February and March, so a student following two systems may face overlapping exam pressure.",
        "The IB examinations are held in May and November, and Cambridge and Edexcel IGCSE sessions fall in the May and June and October and November windows. The table below gives a typical year for a student in Loha.",
      ],
      table: {
        caption: "A typical year for a Loha IB or IGCSE student",
        columns: ["Months", "Local pattern", "Academic focus", "How lessons are adapted"],
        rows: [
          ["June to August", "School year starts; monsoon sets in", "New content and first assessment planning", "Regular weekly slots; plan for network drops"],
          ["September to October", "Ganesh and Dasara breaks; harvest begins", "Syllabus completion for November candidates", "Flexible timing around family duties"],
          ["November to December", "Exam session and Diwali", "Final papers, then a rest week", "Short revision blocks around the holiday"],
          ["January to March", "State Board exam season; Hola Mohalla crowds", "Mocks and revision for May", "Evening slots; avoid exam-day clashes"],
          ["April to May", "Peak summer heat", "Timed papers and technique", "Early morning or late evening lessons"],
        ],
      },
    },
    {
      heading: "Which university pathways open up from Loha?",
      paragraphs: [
        "A student who finishes the IB Diploma, or a set of IGCSE subjects followed by A Levels or the IB, has several routes. For Indian universities, the Association of Indian Universities issues an equivalence for the IB Diploma that most public universities require. CUET-UG accepts IB students who satisfy the stated eligibility, and many central and State universities admit through it.",
        "For engineering and medicine, the subject mix matters. NEET-UG and JEE Main publish their own eligibility conditions, and the IB or IGCSE combination must match them. Read the current official bulletin before choosing subjects, since rules change and the school or tutor cannot confirm them on behalf of the testing agency.",
        "Within the region, students look to Swami Ramanand Teerth Marathwada University at Nanded, Dr. Babasaheb Ambedkar Marathwada University at Aurangabad, and professional colleges in Latur and Pune. Mumbai and Pune remain the larger destinations for engineering, design, law and management.",
        "Study abroad is a realistic goal for some Loha families, particularly those with relatives in the United States, the UK or the Gulf. Offers are usually expressed in IB points with subject requirements, and a tutor can help a student understand how a predicted grade links to a typical offer, though admission is always the university's decision.",
      ],
      bullets: [
        "AIU equivalence is generally needed for Indian admissions",
        "CUET-UG, JEE and NEET have separate eligibility rules",
        "Offers abroad depend on IB points and subject requirements",
        "Always check current rules before choosing subjects",
      ],
    },
    {
      heading: "How do IB Mathematics and the sciences work for a student studying from Loha?",
      paragraphs: [
        "Mathematics: Analysis and Approaches is the stronger fit for students aiming at engineering, physics or economics, with heavier algebra and calculus. Applications and Interpretation emphasises statistics and modelling and suits many life science, commerce and social science applicants. Choose with the university course in mind, and check the school's own advice.",
        "The sciences at Higher Level are demanding and benefit from regular written practice. Tutors set a weekly problem set, review it live, and keep a log of repeated errors, so that revision becomes targeted. The internal assessment is the student's own, and the tutor will never write or rewrite it.",
        "Practical work cannot be taught remotely, but the thinking behind it can: planning an investigation, handling data, estimating uncertainty and writing a conclusion. These skills are examined in the written papers as well, so time spent on them pays back.",
        "Because a Loha student may have limited access to lab equipment, the tutor will use simulations, videos and household examples where suitable. The aim is understanding and confident exam technique, not equipment. A weekly note records what was covered and what to practise.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects suit a Loha student?",
      paragraphs: [
        "Cambridge IGCSE subjects usually offer two tiers, Core and Extended. Core is shorter and caps the top grades; Extended covers the full range and is expected if a student plans to continue to A Level or the IB in the same subject. In Mathematics and the sciences, most ambitious students aim for Extended.",
        "A diagnostic in the first lesson avoids guesswork. The tutor sets an Extended-style paper, marks it, and shows where the student stands. If the student is clearly below the mark for Extended, the right decision may be Core for now with a plan to move up.",
        "Subject choice should reflect strengths and future plans. A typical set includes English, Mathematics, the sciences or Combined Science, and one or two other subjects such as Geography, Economics or Computer Science. Marathi is not offered by most IGCSE boards, though Hindi is sometimes available as a second language.",
        "Private candidates need to register through an approved examination centre, and deadlines for entry come earlier than many families expect. Confirm the fee, the practical-paper arrangements and the centre's location before committing to a session, then build the lesson plan backwards from the exam date.",
      ],
    },
  ],

  process: [
    { title: "Send us a message", description: "Write on WhatsApp with the class, the board and the subject. A few lines is enough to begin." },
    { title: "Trial lesson", description: "A matched tutor teaches a free live lesson so you can judge fit before committing." },
    { title: "Plan and rate in writing", description: "You get a weekly plan and the rate in writing, with no pressure to decide on the call." },
    { title: "Regular online sessions", description: "Weekly lessons in IST, shifted when heat, harvest or power cuts require it." },
    { title: "Notes and adjustments", description: "A written summary follows each class, and we swap the tutor if the match is not working." },
  ],
  whyPoints: [
    { title: "Reach without relocation", description: "A specialist in IB Physics or IGCSE Extended Mathematics, even where no such tutor lives nearby." },
    { title: "Built for real conditions", description: "Planning for load-shedding, summer heat and weak signal, not for a perfect studio setup." },
    { title: "Honest about format", description: "Online only in Loha. We never claim a tutor will visit your house." },
    { title: "Parent-readable notes", description: "Short written summaries, so parents who are not familiar with the IB can still follow." },
    { title: "Coaching with limits", description: "No ghost-writing of IAs, Extended Essays or TOK essays, ever." },
    { title: "Easy exit and change", description: "Free trial, written rates and a tutor swap if the fit is wrong." },
  ],

  faqs: [
    {
      question: "Can I find IB and IGCSE tutors in Loha?",
      answer: "Yes, online. IB Gram's tutors are based elsewhere in India and teach Loha students by live video. We could find no local IB or IGCSE specialists in the town, so online matching is the practical way to get one. Lessons run on a shared whiteboard in IST, with a written note after each session.",
    },
    {
      question: "Does a tutor come to my home in Loha?",
      answer: "No. In-person home tuition is available only in Gurugram and parts of Delhi NCR. In Loha, the lesson is online: your child sits at a desk at home and a tutor teaches live on screen. We call it online home tuition, and it works with a laptop, a quiet room and a steady connection.",
    },
    {
      question: "Is there an IB or IGCSE school in Loha?",
      answer: "We could not confirm one. Local schools mainly follow the Maharashtra State Board, with some CBSE options in the district. Families who want an international curriculum usually look at Hyderabad or Pune, or consider private entry. Please check any school's curriculum directly with the school, and tell us if you know of a local option.",
    },
    {
      question: "How much does tuition cost?",
      answer: "We do not publish prices. The rate depends on the level, subject, number of lessons per week and how quickly a tutor can be matched. It is quoted in writing before you book, and the first trial lesson is free. Higher Level sciences cost more than primary support, and exam-run-up intensives are priced separately.",
    },
    {
      question: "Can my child sit IGCSE exams from Loha?",
      answer: "Usually as a private candidate through an approved examination centre, but private entries are not accepted everywhere. Ask the centre about registration deadlines, fees and practical-paper arrangements early. We prepare students for the papers, while registration remains the centre's and the exam board's responsibility.",
    },
    {
      question: "What internet and power set-up do we need?",
      answer: "A laptop, a quiet room and a stable connection of around 10 Mbps are enough for video and a shared whiteboard. Given load-shedding and summer heat in Marathwada, keep a charged backup device and a mobile hotspot ready. If a lesson fails because of a genuine outage, we reschedule it.",
    },
    {
      question: "Which subjects are most requested?",
      answer: "Mathematics, Physics, Chemistry and Biology lead, followed by English and Economics. Many Loha students need extra help with English writing before anything else, because the IB and IGCSE are assessed mainly in English. We often begin with a short diagnostic in written English.",
    },
    {
      question: "Can a tutor write or edit my child's IA or Extended Essay?",
      answer: "No. Tutors coach the thinking and explain the criteria, but they never write or rewrite assessed work. They may comment on a student's own draft or help plan a research question. The work, data and conclusions must remain the student's own.",
    },
    {
      question: "Is the IB Diploma accepted by Indian universities?",
      answer: "Generally yes, with an Association of Indian Universities equivalence. Many central and State universities admit through CUET-UG, and IB students are eligible if they meet the stated conditions. Rules vary by university and year, so always check the current notice of the course you want.",
    },
    {
      question: "Can an IB or IGCSE student take NEET or JEE?",
      answer: "Possibly, depending on the subjects taken and the eligibility rules published each year. Biology, Chemistry and Physics are usually essential for NEET, and Mathematics for JEE. Read the official information bulletin before choosing subjects, because the testing agencies set the rules, not the school or IB Gram.",
    },
    {
      question: "My child studies in Marathi medium. Can they still join IB?",
      answer: "Often yes, with preparation. The jump is mainly in English writing and in the style of questions. A tutor usually starts with a diagnostic, then builds reading and writing fluency before pushing content. A gradual start over two or three months works better than a rushed catch-up.",
    },
    {
      question: "How does tuition fit with State Board exams in February and March?",
      answer: "We plan around them. If a student is sitting State Board papers and an IGCSE or IB session in the same year, we sequence the preparation, usually lighter during exam week and heavier afterwards. Tell the tutor your school's exam calendar at the trial so the plan avoids clashes.",
    },
    {
      question: "How quickly can we start?",
      answer: "Often within a few days. A common subject like Mathematics or Chemistry is usually matched quickly, while a rarer combination or a niche language may take longer. Start early before the May and November exams, because a longer lead time gives you more choice and a calmer schedule.",
    },
    {
      question: "What if the tutor does not suit my child?",
      answer: "We change the tutor. Tell us what felt wrong, whether the pace, the style or the timing, and we will propose a different match without extra charge for the change. A good fit matters more than a quick start.",
    },
    {
      question: "Can you help a child about to move to a Pune or Hyderabad IB school?",
      answer: "Yes. Bridging support focuses on the gaps that matter most, usually English writing, Mathematics and the chosen sciences. A tutor can run a diagnostic, build a catch-up plan, and keep the same lessons going online after the move, which gives the child a familiar face in a new school.",
    },
    {
      question: "How do I contact IB Gram?",
      answer: "Message or call +91 7439 368 115 on WhatsApp, or email support@ibgram.com. Include the class, board, subjects and any exam date in the first message. We reply with a suggested tutor and a time for the free trial lesson.",
    },
  ],

  internalLinks: [
    { label: "IB tutors across India", href: "/india/", description: "How IB Gram works with students across the country." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject-wise IB tutoring and how tutor matching works." },
    { label: "IGCSE tuition", href: "/igcse/", description: "Cambridge and Pearson Edexcel IGCSE subjects and support." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What the Diploma involves and where tutoring helps." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led learning for younger students." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI compared, with topics and exam structure." },
    { label: "Our tutors", href: "/tutors/", description: "See tutor profiles and subject backgrounds." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Request a free trial lesson and a written quote." },
    { label: "Nanded-Waghala", href: "/nanded-waghala/", description: "The district headquarters, with its own school and board context." },
    { label: "Pune", href: "/pune/", description: "Maharashtra's largest IB and Cambridge schooling hub." },
    { label: "Hyderabad", href: "/hyderabad/", description: "The nearest big city with confirmed IB options for Nanded-district families." },
  ],

  closingHeading: "Book a free trial lesson from home in Loha",
  closingBody: "Whether your child is preparing for a move, studying through a school in another city, or taking IGCSE subjects privately, one trial lesson will show what the right tutor offers. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com, and we will plan the schedule around Marathwada's heat, harvest and festival calendar.",
};
