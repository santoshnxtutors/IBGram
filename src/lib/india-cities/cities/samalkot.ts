import type { CitySeoPage } from "../types";

/**
 * /samalkot/ - IB and IGCSE tutoring page for Samalkot (Samarlakota), Kakinada district, Andhra Pradesh. No school in
 * Samalkot is confirmed to teach IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and clusters reuse
 * Visakhapatnam and Tirupati names from existing pages. All lessons online.
 */
export const samalkot: CitySeoPage = {
  slug: "samalkot",
  countryName: "Samalkot",
  countryNameLong: "Samalkot, Andhra Pradesh",
  demonym: "Samalkot",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  flagCode: "in",
  countryCode: "IN",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-afternoon and evening slots that miss the April to June humidity, Sankranti week, cyclone alerts and the SSC and Intermediate exam months",
  lastUpdated: "2026-09-21",
  geo: { latitude: 17.05, longitude: 82.1667 },
  wikipedia: "https://en.wikipedia.org/wiki/Samalkot",
  alternateNames: ["Samarlakota", "Samalkota", "Samalkot Kakinada"],
  stripSchools: [],

  title: "Samalkot IB & IGCSE Tutors | Online Private Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Samalkot (Samarlakota), near Kakinada: one-to-one online lessons timed around Sankranti and cyclone season, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Samalkot",
  heroEyebrow: "IB & IGCSE TUITION DELIVERED ONLINE TO SAMALKOT HOMES",
  heroSubtitle:
    "Home tuition for Samalkot students on the IB or IGCSE, taught live and one to one on video. The town is a railway junction on the Godavari delta, fifteen kilometres from Kakinada, yet none of the schools in this belt is one we can confirm for these boards, so the tutor joins the lesson on a laptop instead of the family crossing the delta for it.",
  primaryKeyword: "IB and IGCSE tutors in Samalkot",
  imageAltText: "A Samalkot school student in a live online IB Chemistry lesson at a study table, coconut palms visible through the window",
  secondaryKeywords: [
    "IB tutor Samalkot",
    "IGCSE tutor Samalkot",
    "IB home tuition Samalkot",
    "IGCSE home tuition Samalkot",
    "IB private tuition Samalkot",
    "IB Maths tutor Samalkot",
    "IGCSE Maths tutor Samalkot",
    "IB Physics tutor Samalkot",
    "IB Chemistry tutor Samalkot",
    "IB Biology tutor Samalkot",
    "IB DP tutor Samalkot",
    "IB MYP tutor Samalkot",
    "IB PYP tutor Samalkot",
    "IGCSE online tuition Samalkot",
    "IB tutor Samarlakota",
    "IGCSE tutor Pithapuram Peddapuram",
    "online IB tutor Kakinada district",
    "Cambridge IGCSE tutor Samalkot Andhra Pradesh",
  ],

  heroTrustPoints: [
    "Tutors picked because they have taught your child's exact IB course or IGCSE code",
    "All teaching is online in Samalkot; tutors visit homes only in Gurugram and parts of Delhi NCR",
    "A concise written recap after every class and an easy switch of tutor",
    "One free trial class, then the fee in writing before you book",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The full IB sequence" },
    { value: "Cambridge + Edexcel", label: "IGCSE covered twice over" },
    { value: "Sankranti-aware", label: "Planned around festival weeks" },
    { value: "Free trial", label: "A real class before any fee" },
  ],

  intro: {
    heading: "An international curriculum for a delta railway town",
    paragraphs: [
      "Samalkot, also spelt Samarlakota, sits in the Kakinada district of Andhra Pradesh, in the fertile Godavari delta where rice fields, coconut groves and aquaculture ponds stretch to the horizon. It is known for its busy railway junction, where the Howrah to Chennai line meets the branch to Kakinada, and for the Kumararama Bhimeswara temple, one of the five Pancharama shrines. Families here work in farming, trade, the railways, industry around Kakinada port and, increasingly, in jobs abroad.",
      "We cannot confirm that any school in Samalkot teaches the IB or a Cambridge or Pearson Edexcel IGCSE, so no local school is named. The schools in and around the town follow the Andhra Pradesh State Board or CBSE. The international-board schools we can verify are in Visakhapatnam to the north-east and in Tirupati and Chennai well to the south.",
      "So the lessons happen on video. A child stays in Samalkot, at the family table with a laptop and notebook, and a tutor anywhere in India appears on screen with a shared board between them. A family that might otherwise think of moving to Visakhapatnam for a board gets time to decide, while the child keeps learning the right syllabus meanwhile.",
      "Nothing here is tied to the IB, Cambridge, Pearson or any school. Tutors give coaching and comments on practice; they do not write Internal Assessments, Extended Essays, TOK essays or any coursework a student submits for marks.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, along with Cambridge and Edexcel IGCSE",
      "Live private teaching in English, from tutors across India",
      "A free trial class before any price is mentioned",
      "In Samalkot everything is online; Gurugram and parts of Delhi NCR are the only places tutors visit homes",
    ],
  },

  programmesIntro:
    "Samalkot households usually meet an IB programme through a specific plan, such as a place in Visakhapatnam, a relative's suggestion from abroad or a private IGCSE entry. The summaries below show what each stage asks for and where a tutor helps.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "Children learn through big-idea units and finish with a pupil-led Exhibition. No external paper is set. Tutor time is used for confident reading, tidy writing, number sense and the habit of asking why, in sessions short enough for a young child.",
      countryNote:
        "A Telugu-speaking child preparing for an English-medium PYP class usually gains most from gentle conversation practice for a term beforehand.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers mark each subject against set criteria, and the course ends with a Personal Project. Students from State Board classes are often excellent at content but unused to explaining, comparing and evaluating in written English, which is exactly the skill this stage tests.",
      countryNote:
        "MYP hopefuls in Samalkot tend to start with English writing and lab-report structure, then move to open-ended Maths questions.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma student carries six subjects, with three or four at Higher Level, along with TOK, the Extended Essay and CAS. The ceiling is 45 points with bonus core points on top, and sittings are in May or November; internal assessments are spread over two years.",
      countryNote:
        "DP students linked to Samalkot normally attend school in another city, and use online lessons in term breaks and before mock exams.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP students pair two or more Diploma courses with vocational study and a reflective project. It is offered by few schools in India, though the Diploma courses within it are assessed to the normal Diploma standard.",
      countryNote:
        "CP enquiries from Samalkot are very rare. If one comes, the Diploma courses are taught as they would be for any DP candidate.",
    },
  ],

  subjectsIntro:
    "Andhra families tend to favour Maths, the sciences and computing, with a healthy interest in commerce, and the list below reflects those requests. Tell us the course, the level and the exam session, and we will search for a tutor who has taught it.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof. Students from the Andhra system usually have speed and need practice writing out reasons." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator use, with data from paddy yields, tides and port traffic." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and thermal physics, with careful attention to graphs and uncertainties." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, energetics, rates and organic reactions, with the data booklet in use from the start." },
    { name: "IB Biology", levels: "HL / SL", description: "A large syllabus built into recall, application and timed writing, with mangrove and delta ecology as natural cases." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram skills and evaluation, with examples from aquaculture exports, fertiliser and port economies." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies and business tools, suited to children of trading and industrial families." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis and comparative essays, for students whose first language is Telugu." },
    { name: "IB Telugu B", levels: "HL / SL", description: "Comprehension, writing and oral practice for students who want Telugu in their Diploma set." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language skills and oral preparation." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming logic and a staged internal project." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking, with the Godavari delta, cyclones, coastal erosion and mangroves as local material." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies on rivers, coasts and development, plus fieldwork technique." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, methods and essay structure." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel both issue IGCSE certificates but build their papers differently, so the first thing to settle is the board. These are the subjects Samalkot families ask for, with Telugu available for students who want a home language.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths across two papers; Extended candidates sharpen algebra, geometry and graph work." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus, functions and vectors for strong students aiming at Diploma Maths." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson Maths with two equal papers and marks for method." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, forces, electricity and waves, with practical-skills questions rehearsed." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, rates, electrolysis and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, transport, human biology and ecosystems." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing, listening and speaking for students from Telugu-speaking homes." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming logic, data representation and networks." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business activity, marketing and finance." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, final accounts and ratios." },
    { name: "IGCSE Environmental Management 0680", levels: "Grade 9-10", description: "Human impact, resources and sustainability, with coastal examples." },
    { name: "IGCSE Telugu as a Second Language", levels: "Grade 9-10", description: "Language skills for students who want Telugu included, subject to the board's current offering." },
  ],

  regionsTitle: "Samalkot and the nearby delta towns our tutors teach online",
  regionsIntro:
    "A live lesson is identical from any street in Samalkot. What differs is the household day around it, so the notes below describe how families in the town and its neighbours arrange study, including train timings, humidity and cyclone-season power.",
  regions: [
    { name: "Samalkot Junction and railway colony", note: "Railway families with transfers and long duty hours; a tutor who stays the same across postings is a real advantage." },
    { name: "Main road and bazaar", note: "The commercial centre where shops stay open late, so lessons tend to start after the evening meal." },
    { name: "Bhimeswara temple area", note: "Near the Kumararama temple; festival days draw crowds, so lessons are moved around Karthika and Shivaratri events." },
    { name: "Kakinada road side", note: "Newer housing along the road towards Kakinada, where families with jobs at the port and industrial units live." },
    { name: "Peddapuram road side", note: "Residential streets towards Peddapuram and Rajahmundry, where parents often look at Rajahmundry schools first." },
    { name: "Agricultural fringe", note: "Farming households at the edge of town, where paddy seasons shape when students are free." },
    { name: "Kakinada", note: "A port city about fifteen kilometres away with JNTU Kakinada and several colleges; it has its own page on this site." },
    { name: "Pithapuram and Peddapuram", note: "Neighbouring towns in the district with similar school choices and an equally limited local supply of international boards." },
    { name: "Rajahmundry", note: "A Godavari city to the west, described on our Rajahmundry page, that many families use as a reference point." },
    { name: "Samarlakota villages and the coast road", note: "Smaller settlements where connectivity varies, so a mobile hotspot is a useful backup." },
  ],

  schoolDisclaimer:
    "The schools named here are given only to show where IB and IGCSE classrooms can be found within reach of Samalkot. IB Gram has no arrangement with them, or with the IB, Cambridge or Pearson, so please confirm programmes, fees and admission rules with each school directly.",
  schoolClusters: [
    {
      city: "Local: Samalkot town",
      note: "We could not confirm any school in Samalkot that offers IB or Cambridge or Edexcel IGCSE, so none is listed. Local schools follow the Andhra Pradesh State Board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Visakhapatnam",
      note: "About three hours north-east by road or rail, Visakhapatnam has the nearest verified IB and IGCSE schools; names come from our Visakhapatnam and Kakinada pages.",
      schools: ["Oakridge International School, Visakhapatnam", "Oak Valley International School, Gajuwaka", "Pollocks Intelli School, Madhurawada, Visakhapatnam"],
    },
    {
      city: "Nearby: Tirupati",
      note: "A long overnight journey south, but two Cambridge IGCSE schools are listed on our Tirupati page.",
      schools: ["Sree Vidyanikethan International School", "Edify School"],
    },
    {
      city: "Nearby: Chennai",
      note: "The big southern option for families with relatives or postings there; these names appear on our Sivakasi page.",
      schools: ["Gateway International School", "KC High International School"],
    },
  ],

  modesIntro:
    "Every Samalkot lesson is by video. What families pick is the shape of it: one steady class each week, a term plan with written summaries, or a tight run of classes before the papers.",
  modes: [
    {
      title: "A standing weekly class",
      description:
        "Same tutor, same hour. The student turns up with questions and half-finished problems, the tutor moves on to the next idea, and errors are caught as the working is written.",
      bullets: [
        "Tutor matched on subject, level and board",
        "Generally sixty minutes",
        "Working visible on a shared board",
        "Suits IGCSE, MYP and early DP",
      ],
    },
    {
      title: "Term plan and summaries",
      description:
        "A map for the term, a few lines after every class and a progress chat every few weeks. Parents who did not study these boards can follow along.",
      bullets: [
        "Summaries in simple English",
        "Chats that reorder topics when needed",
        "Fits beside school and tuition timetables",
        "Extra sessions before unit tests",
      ],
    },
    {
      title: "Run-up to the papers",
      description:
        "Before mocks and the May or November sessions, classes become more frequent and are mostly timed questions with careful marking.",
      bullets: [
        "Past papers marked in the board's style",
        "Two to four sessions a week if the week allows",
        "Scheduled away from Sankranti and cyclone alerts",
        "Best begun about three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Samalkot have an IB or IGCSE school, and what do families do about it?",
      paragraphs: [
        "No school in Samalkot is one we have been able to verify for IB or Cambridge or Edexcel IGCSE, so the list stays empty. The town's schools are State Board or CBSE.",
        "Verified options lie a long way off. Visakhapatnam has Oakridge International School, Oak Valley International School and Pollocks Intelli School, while Tirupati and Chennai offer Sree Vidyanikethan, Edify and several others. Each school has its own entry test, age rule and fee structure, and families should ask directly.",
        "Because of that distance, the decision is usually a whole-family one: move, use a hostel, or stay and study a local board. Families working abroad or in central government posts tend to be the ones who consider the IB seriously.",
        "A tutor cannot secure a seat. What lessons can do is prepare a child for an entrance round, close gaps left by a move, and give an enrolled student a specialist for holidays, when the hostel has closed and the school library is far away.",
      ],
    },
    {
      heading: "Andhra Pradesh State Board, CBSE, IGCSE and IB: what really changes?",
      paragraphs: [
        "The State Board sets SSC after Class 10 and Intermediate after Class 12, normally in March or April, in Telugu or English. CBSE follows one national syllabus. IGCSE and IB papers are sat in May and November, so a switch moves the exam calendar by months.",
        "Students from Andhra schools are usually fast, well drilled in calculation and used to long revision hours. International examiners add something else: explanations, stated assumptions, labelled diagrams and judgement. That is the gap a tutor works on during the first weeks.",
        "For later entrance tests, AP EAPCET, JEE Main and NEET matter most to families who intend to stay in India. IB and IGCSE students should read the current eligibility and equivalence rules before choosing subjects, because domicile and subject requirements vary.",
        "A practical rule is to ask where Class 12 will be completed. If the plan is an Andhra professional seat, the State Board or CBSE is often smoother. If it is study abroad or a broad degree, an international board may serve better.",
      ],
      table: {
        caption: "Boards a Samalkot family might compare",
        columns: ["Board", "Typical setting near Samalkot", "What the papers reward", "Main exam months"],
        rows: [
          ["AP State Board (SSC, Intermediate)", "Most local schools", "Accurate recall in Telugu or English", "March-April"],
          ["CBSE", "Private schools in town and Kakinada", "National syllabus, applied questions", "February-March"],
          ["IGCSE", "Visakhapatnam, Tirupati, Chennai", "Applied, tiered papers", "May-June and October-November"],
          ["IB Diploma", "Visakhapatnam, Chennai and further", "Six subjects plus core, criteria based", "May and November"],
        ],
      },
    },
    {
      heading: "How is the fee for IB or IGCSE tuition decided for Samalkot families?",
      paragraphs: [
        "There is no price list on this site, since the figure has to fit the student. After the free trial class you receive a written quote, shaped by the level and subject, the tutor's record on that syllabus and the hours you choose.",
        "Expert Higher Level teaching costs more than general support, and a tutor of IGCSE English as a Second Language is priced on a different footing. Weekly booking is generally cheaper per hour than a rushed fortnight before papers.",
        "Put the quote beside the alternatives. Weekly travel to Kakinada or Rajahmundry for a specialist means train fares, long waits at the junction and a lost evening, and relocating to Visakhapatnam costs far more. A class delivered to the house removes the journey.",
        "You can attend the trial, read the written rate at home with your family and decide without pressure. Lessons can be paused for festivals and resumed without penalty.",
      ],
      bullets: [
        "Level: IB HL or SL, IGCSE Core, Extended, Foundation or Higher",
        "Subject and the tutor's record on that syllabus",
        "Hours per week and length of each class",
        "Steady plan or short exam burst",
      ],
    },
    {
      heading: "Online tutor, Kakinada coaching, a local teacher or self-study: which suits Samalkot?",
      paragraphs: [
        "Coaching in Kakinada or Rajahmundry is close enough to be tempting, but few centres there teach IB or IGCSE syllabuses, and a daily or weekly trip still costs time. A video lesson brings a specialist without the journey.",
        "Teachers in Samalkot are plentiful for State Board and CBSE subjects and often very good at fundamentals. Few have marked IB internal assessments or IGCSE scripts, so they suit general help better than syllabus-specific coaching.",
        "Working alone is realistic for IGCSE Maths and the sciences if a student keeps to past papers and reads the mark schemes properly. It fails for anything needing a second reader, such as IB essays, the Exploration or a spoken language exam.",
        "A live one-to-one class gives a reader who knows the criteria and a timetable that bends around the house. Connectivity is the weak link, and cyclone season makes it weaker, so a voice-call backup is settled before the first session.",
      ],
      table: {
        caption: "Study routes compared for Samalkot students",
        columns: ["Route", "What it offers", "What limits it"],
        rows: [
          ["Online one-to-one", "Exact syllabus, private pace, no travel", "Needs stable data and power"],
          ["Coaching in Kakinada or Rajahmundry", "Classroom and peer group", "Few IB or IGCSE specialists, travel time"],
          ["Local teacher", "Close and familiar", "Little IB or IGCSE marking experience"],
          ["Self-study", "Free and flexible", "No feedback on essays or internal work"],
        ],
      },
    },
    {
      heading: "How do delta humidity, cyclone season and Sankranti shape study in Samalkot?",
      paragraphs: [
        "Samalkot lies on the Bay of Bengal side of the delta, so summers are hot and humid, with April to June the most draining months. Afternoon lessons are hard on students, and evenings are the natural slot. Fans, water and a charged laptop matter more than people expect.",
        "October and November bring the north-east monsoon and the main cyclone risk on this coast. Storm warnings can close schools and cut power and data for days, exactly when IGCSE and IB November sessions fall. Good plans finish revision by September and keep a backup route for lessons.",
        "Sankranti in January is the largest festival, with several days of holiday, travel and family gatherings. Ugadi, Vinayaka Chavithi, Dasara and Diwali also take whole households out of routine, and the Karthika month brings temple crowds at Kumararama. The next Godavari Pushkaralu, expected in 2027, will also fill nearby towns.",
        "State board examinations are in March and April, and a house with a sibling in Class 10 or 12 goes quiet for weeks. IGCSE May-June and IB May sessions follow soon afterwards.",
      ],
      table: {
        caption: "A year of study around Samalkot",
        columns: ["Months", "Weather and events", "Planning advice"],
        rows: [
          ["January-February", "Sankranti, cooler days, mock exams", "Resume after the festival; start timed papers"],
          ["March-April", "SSC and Intermediate exams, rising heat", "Light evening sessions"],
          ["May-June", "IB May and IGCSE May-June, peak humidity", "Late-afternoon or evening slots with power backup"],
          ["July-September", "Monsoon showers, Vinayaka Chavithi", "Good months for deep revision"],
          ["October-November", "Dasara, Diwali, cyclone risk, November sessions", "Finish revision before the storm season"],
          ["December", "Mild weather, Karthika month", "Consolidation and internal-assessment drafts"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Samalkot go after school?",
      paragraphs: [
        "Within India, nearby institutions include JNTU Kakinada, Andhra University in Visakhapatnam, and colleges in Rajahmundry, Vijayawada and Hyderabad. Families with international plans often look at Bengaluru, Chennai and Delhi. Each institution publishes its own rules for candidates from outside the State Board.",
        "Indian universities generally ask for an equivalence certificate from the Association of Indian Universities before treating IB or IGCSE results like a Class 12 certificate. Central universities may take IB Diploma holders through CUET-UG, but the list of accepted subjects moves, so read the current circular.",
        "Careers in engineering or medicine narrow the subject list early. The national and state engineering tests ask for a Maths, Physics and Chemistry base, and the medical test asks for Biology plus the other two. Read the notification for the year your child applies before locking an IB group or IGCSE list, because an eligibility surprise in Class 12 cannot be repaired.",
        "Overseas study has deep roots in the Godavari districts, with the United States, Canada, Australia, the UK and Singapore in frequent conversation. IB and IGCSE results are read in all of them. Tutors help with subjects and do not write application essays.",
      ],
    },
    {
      heading: "What makes IB Maths and the sciences tough, and how can a tutor help?",
      paragraphs: [
        "Maths in the IB is graded on how well you justify, not only what you answer. The Analysis course leans on algebra, calculus and proof; the Applications course leans on models and on interpreting calculator output. Each includes the Exploration, a self-directed write-up that contributes twenty per cent of the grade.",
        "Physics candidates lose marks on missing units, rough graphs and hand-waving. Chemistry rewards quick arithmetic and quick use of the data booklet. Biology is a memory-and-application subject where words like state, outline and evaluate set the depth expected.",
        "Coursework is where families worry most. Our tutors unpack what each criterion wants, say whether a chosen question is too broad, and comment on a draft in the margins. They stop there. The lab work, the numbers and the wording belong to the student, and examiners expect exactly that.",
        "Students from Andhra schools have a head start in speed and stamina. A tutor experienced with them keeps those strengths and adds the explanation and evaluation that international examiners reward.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: which IGCSE tier should a student take?",
      paragraphs: [
        "Cambridge splits its papers into Core, where the ceiling is grade C, and Extended, which reaches A*. Edexcel splits into Foundation, limited to 5, and Higher, which goes to 9. Anyone expecting to take Maths HL or a science Diploma later should be sitting the upper papers.",
        "Schools usually set the tier. If you are entering as a private candidate, or choosing between schools, a practice paper is the sensible test. A result within a few marks of the boundary is worth raising with the exam centre before registration closes.",
        "Choose subjects with the destination in mind. Engineering and medicine point to Maths with the three sciences or Computer Science; family business or aquaculture points to Business Studies, Accounting and Environmental Management; Telugu can fill the language place where offered.",
        "Always fix the board, code and exam session before tutoring begins, so the right papers are practised.",
      ],
    },
  ],

  tutorsIntro:
    "We match each Samalkot student by programme, subject, level and board, then introduce the tutor with a few lines on why they fit. All tutors teach from within India, on IST.",

  process: [
    { title: "Describe the student", description: "Board or programme, subject, level, present school and the late-afternoon or evening hours that work in your Samalkot home." },
    { title: "Consider our suggestion", description: "We put one tutor forward and explain which syllabus and level they have taught." },
    { title: "Take a free class", description: "A real lesson on video, with no fee and no pressure." },
    { title: "Agree the terms in writing", description: "Weekly hours, rate and opening topics are set out before any payment." },
    { title: "Continue, with check-ins", description: "Regular classes, short summaries and a different tutor whenever you ask." },
  ],

  whyPoints: [
    { title: "Syllabus-level matching", description: "Tutors are chosen for your child's exact subject, tier and board." },
    { title: "Candid about local schools", description: "We say plainly that no Samalkot school is confirmed for IB or IGCSE." },
    { title: "Cyclone-season planning", description: "Backup routes are agreed before storms, not during them." },
    { title: "Trial before fees", description: "You judge the teaching first." },
    { title: "Firm limits", description: "Nobody writes a student's assessed work or essays." },
    { title: "Simple to switch", description: "A poor fit is replaced without awkwardness." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Samalkot?", answer: "Not one we can verify. Schools in Samalkot follow the Andhra Pradesh State Board or CBSE. The nearest verified international-board schools are in Visakhapatnam, Tirupati and Chennai. If a school claims IB or IGCSE status, ask for its authorisation and subject list." },
    { question: "Can I get IB home tuition in Samalkot?", answer: "As online home tuition, yes: a private live class from your own room, taught by a specialist based elsewhere in India. A tutor does not come to Samalkot itself. In-person visits are limited to Gurugram and parts of Delhi NCR, and we state this before you book." },
    { question: "Do you have IGCSE tutors for Samalkot students on Cambridge and Edexcel?", answer: "We cover both. The matching key is the syllabus code and tier, for example Cambridge 0620 Chemistry or Edexcel 4MA1 Mathematics A. Teaching is online on Indian time. Let us know the board and the sitting before a tutor is suggested." },
    { question: "Do tutors visit homes in Samalkot?", answer: "No, tutors go to homes only in Gurugram and parts of Delhi NCR. A Samalkot class is live, private and on video; your child needs a laptop or tablet, a stable connection and a quiet corner, and the working appears on a shared board." },
    { question: "What does IB or IGCSE tuition cost in Samalkot?", answer: "It shifts with the course level, subject, tutor background and weekly hours, so no price is published. After the free class you get a written quote to set beside the cost of trips to Kakinada or a move to Visakhapatnam." },
    { question: "Which schools near Samalkot offer IB or IGCSE?", answer: "None inside Samalkot that we can confirm. Oakridge, Oak Valley and Pollocks Intelli in Visakhapatnam appear on our other pages, Sree Vidyanikethan and Edify in Tirupati, and Chennai options on our Sivakasi page. Check admissions directly." },
    { question: "Is the trial lesson free?", answer: "It is. Before fees come up, your child takes one full class with the tutor we have in mind. Afterwards you may stop or continue, and if you continue, the rate is written down first." },
    { question: "Can a tutor write my child's IA or Extended Essay?", answer: "Not at all. A tutor can walk through the criteria, test a research question, read a plan and mark where a draft falls short. Data, analysis and sentences must come from your child, and requests for finished assessed work are refused." },
    { question: "Which IB Diploma subjects can you cover for Samalkot students?", answer: "The usual requests are Maths in both versions, Physics, Chemistry, Biology, Economics, Business Management, English A, Telugu B, Hindi B, Computer Science, ESS, Geography and Psychology, at either level. A rare pairing is fine to ask about; we will say honestly if we cannot staff it." },
    { question: "Do you teach IB MYP and PYP to children in Samalkot?", answer: "We do, and the two stages feel different. PYP children get short, playful sessions around reading aloud and number games. MYP students work on criteria: lab write-ups, structured answers and planning the Personal Project. A few lines on each class reach you afterwards." },
    { question: "What happens when a cyclone warning or a power cut interrupts a class?", answer: "Nothing is lost for good. The class shrinks or moves to another day, and each tutor agrees a backup in advance, such as a phone call plus photographs of the working. Key sessions are not booked on days when an alert is in force." },
    { question: "How are tutors chosen for Samalkot students?", answer: "Three things: what the person has qualified in, how recently they taught your syllabus, and how clearly they explain. Only after hearing about your child's level and target do we name anyone, and the free class shows whether it works." },
    { question: "When should my child start tuition?", answer: "Start at the opening of a course: Grade 9 for IGCSE or Class 11 for the Diploma. If a Visakhapatnam entrance test is the aim, begin a term early and put English and Maths first." },
    { question: "My child is on the AP State Board. Can we move to IB or IGCSE?", answer: "That depends on admission, not tuition, because a teacher cannot hand out a school place. In the meantime a tutor helps the student cope with application-style questions, revisit missed topics and write longer English answers." },
    { question: "Can lessons fit around Sankranti and the SSC season?", answer: "They can. Most Samalkot families choose evenings and Sunday slots, and we plan around Sankranti, Dasara, Diwali and the March and April examinations. A clashing slot simply moves to another day." },
    { question: "What if my child does not get on with the tutor?", answer: "If the chemistry is wrong, tell us plainly. We will introduce a different teacher without any awkward conversation, and your written terms stay in place." },
    { question: "Is IB Gram connected to any school or exam board?", answer: "None. We are a private tutoring service, separate from the IB, Cambridge, Pearson and each school in Samalkot, Kakinada or further afield. Schools appear on this page so you can see the landscape, nothing more." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The online service in other Indian towns." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where home visits run." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "Programmes, subjects and matching." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel compared." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, core and scoring." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry for younger children." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI compared." },
    { label: "Browse tutors", href: "/tutors/", description: "Backgrounds and subjects of the team." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a message to start." },
    { label: "IB and IGCSE tutoring in Kakinada", href: "/kakinada/", description: "The port city fifteen kilometres away." },
    { label: "IB and IGCSE tutoring in Rajahmundry", href: "/rajahmundry/", description: "The Godavari city to the west." },
    { label: "IB and IGCSE tutoring in Eluru", href: "/eluru/", description: "Another delta-region city on the same model." },
  ],

  closingHeading: "Book a free trial lesson for your Samalkot student",
  closingBody:
    "Write with the programme or board, the subject and level, and the times after school that are quiet in your Samalkot house. A tutor is proposed with a reason, a free sample class is booked on video, and the fee comes later, on paper. Contact support@ibgram.com or WhatsApp +91 7439 368 115.",
};
