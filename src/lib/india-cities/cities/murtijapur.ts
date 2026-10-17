import type { CitySeoPage } from "../types";

/**
 * /murtijapur/ - IB and IGCSE tutoring page for Murtijapur (Murtizapur), Akola district, Maharashtra (plan
 * rank 748). Online one-to-one only (homeTuition false). No IB or Cambridge/Edexcel school in Murtijapur or
 * Akola district could be confirmed, so stripSchools is empty; clusters reuse the Amravati and Nagpur names
 * already verified on akola.ts, amravati.ts and nagpur.ts. Local facts (Shakuntala Railway, junction, no
 * engineering or medical college) come from Wikipedia; coordinates from OpenStreetMap.
 */
export const murtijapur: CitySeoPage = {
  slug: "murtijapur",
  countryName: "Murtijapur",
  countryNameLong: "Murtijapur, Akola district, Maharashtra",
  demonym: "Murtijapur",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons work around Vidarbha’s fierce May heat, the cotton-season and Diwali weeks, and your child’s own school day",
  lastUpdated: "2026-09-21",
  geo: { latitude: 20.7235, longitude: 77.4258 },
  wikipedia: "https://en.wikipedia.org/wiki/Murtijapur",
  alternateNames: ["Murtizapur", "Murtajapur", "Murtijapur Junction"],
  stripSchools: [],

  title: "IB and IGCSE Tutors for Murtijapur | Home Tuition Online",
  metaDescription:
    "IB and IGCSE tutors for Murtijapur, Akola district: live one-to-one online lessons for Diploma, MYP, PYP and IGCSE, taught from home, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition Online in Murtijapur",
  heroEyebrow: "IB & IGCSE HOME TUITION, ONLINE, FOR MURTIJAPUR FAMILIES",
  heroSubtitle:
    "Home tuition for IB or IGCSE is an online service in Murtijapur, a cotton-and-railway town in Akola district where no IB, Cambridge or Edexcel school could be confirmed. Lessons are live, one tutor to one student, on Indian Standard Time, and matched to the exact course, for children at a state-board or CBSE school, for families preparing a move to Akola, Amravati or Nagpur, and for students working through an international syllabus on their own.",
  primaryKeyword: "IB and IGCSE tutors in Murtijapur",
  imageAltText: "IGCSE Biology student in Murtijapur going through a diagram question with an online tutor at a desk at home",
  secondaryKeywords: [
    "IB tutor Murtijapur",
    "IB tutor Murtizapur",
    "IGCSE tutor Murtijapur",
    "IB home tuition Murtijapur",
    "IGCSE home tuition Murtizapur",
    "IB private tuition Murtijapur",
    "IB Maths tutor Murtijapur",
    "IGCSE Maths tutor Murtijapur",
    "IB Physics tutor Murtijapur",
    "IB Chemistry tutor Murtijapur",
    "IB Biology tutor Murtijapur",
    "IB DP tutor Murtijapur",
    "IB MYP tutor Murtijapur",
    "IB PYP tutor Murtijapur",
    "IGCSE online tuition Murtijapur",
    "Cambridge IGCSE tutor Akola district",
    "IB tutor Akola",
    "IB tutor Daryapur",
    "IB tutor Anjangaon Achalpur",
    "IB online tutor Vidarbha",
  ],

  heroTrustPoints: [
    "Matched to the exact course and level, by tutors who have taught it recently",
    "Online only: tutors do not visit homes in Murtijapur, because home visits run only in Gurugram and parts of Delhi NCR",
    "A free trial, a written note after every lesson and a rate agreed in writing",
    "No link to any school, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "Junction town", label: "Akola district, taught online" },
    { value: "PYP to DP", label: "Plus Cambridge and Edexcel IGCSE" },
    { value: "IST", label: "No time-zone gap" },
    { value: "Free trial", label: "Try a lesson before you commit" },
  ],

  intro: {
    heading: "IB and IGCSE tutoring from a junction town: what Murtijapur families need to know",
    paragraphs: [
      "Murtijapur is a municipal council and taluka headquarters in Akola district, on the Bhusawal-Badnera main line and National Highway 53, with a 2011 census population of 40,295. It grew around cotton: oil mills and cotton-pressing units still anchor an economy in which agriculture is the main occupation, and its junction is where a narrow-gauge railway once brought cotton in from Vidarbha’s interior.",
      "Schools run from pre-primary to graduation in arts, science and commerce, in Marathi, Hindi and English medium, but the town has no engineering or medical college, so older students look to Akola, Amravati and Nagpur. No IB, Cambridge or Edexcel school in Murtijapur or Akola district could be confirmed, and the nearest on our list are in Amravati and Nagpur.",
      "So the families asking for IB and IGCSE tutors in Murtijapur are a small, specific group: those planning study overseas, those who expect a move to a metro, those whose child needs an English-medium international foundation, and students whose school has added Cambridge subjects without a specialist teacher. Because nobody teaches these syllabuses nearby, tutors teach live online from elsewhere in India.",
      "Tutors coach; they do not write a student’s Internal Assessment, Extended Essay, TOK essay or coursework, and every piece handed in is the student’s own. IB Gram is independent of the IB, Cambridge, Pearson and any school named on this page, the first lesson costs nothing, and a short written note follows each session.",
    ],
    bullets: [
      "Lessons for students at state-board, CBSE or international-curriculum schools, or none",
      "One tutor per subject, matched on code, level and tier",
      "Slots that work around the heat, the harvest and school hours",
      "A free trial, then notes after every lesson",
      "No tutor visits in Murtijapur; in-person home visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Murtijapur has no IB school, so a programme here means one a family is preparing for, keeping going after a move, or following at home. Tutors work from the IB’s published guides for all four programmes and fit around whatever school calendar the student actually has.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Pre-K to Class 5, ages 3-12",
      description:
        "Units of inquiry blend subjects around big ideas, with a child’s own questions steering the work and a final Exhibition to show it. With no exams, a tutor’s role is to steady reading, numbers and confidence in speaking up.",
      countryNote:
        "Murtijapur has no PYP school, so this usually means a family preparing a child for later admission to an IB primary elsewhere.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups, four criteria in each and a Personal Project in Year 5 mean students are judged on how they think as well as what they know. The common gap lies between knowing a topic and arguing a case about it.",
      countryNote:
        "No MYP school is near, so requests tend to come from students preparing to join one or keeping MYP habits going after a move.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three subjects at Higher Level and three at Standard, plus TOK, an Extended Essay and CAS. The IB awards up to 45 points, and most subjects blend exams with internal assessment, so work in Class 11 already shapes the final picture.",
      countryNote:
        "A Murtijapur student on the Diploma studies at a school in another city, most likely boarding, so lessons at home fit school holidays and any weekend slots the hostel allows.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme places two or more Diploma courses beside a career-related study and a core of reflection, service and language. Few Indian schools run it, so most tutoring is for the Diploma courses inside it.",
      countryNote:
        "Nobody in Akola district is known to us to run the CP, so requests are rare.",
    },
  ],

  subjectsIntro:
    "Matching is done on subject and level, because IB Economics HL and IGCSE Biology need different people. With no IB teachers in the district, an online match brings in someone who has taught the current syllabus in a classroom and marked real papers.",
  subjects: [
    { name: "IB Mathematics: Analysis and Approaches", levels: "HL / SL", description: "Proof-style questions and unfamiliar functions catch out students who learned methods by rote, so sessions train choosing, justifying and checking a method, with the HL Paper 3 and the exploration planned early." },
    { name: "IB Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Data, modelling and a graphing calculator are the core; lessons cover distributions, tests and regression, and help pick an exploration built on real data, perhaps from rainfall or cotton prices." },
    { name: "IB Physics", levels: "HL / SL", description: "Long contextual questions reward calm setting-out, so students practise extracting data, stating the physics and checking units before calculating, then bring the same discipline to the lab report." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Moles, equilibrium and organic mechanisms compound one another, so a weak first-year base is repaired first and the Internal Assessment is planned around a method that yields usable data." },
    { name: "IB Biology", levels: "HL / SL", description: "Diagram-heavy answers and command terms need rehearsal, and the investigation works best when its question is one the student can genuinely test." },
    { name: "IB Economics", levels: "HL / SL", description: "Micro and macro diagrams are only half an answer; students learn to add a current example and a judgement, and Indian farm-price and commodity cases give natural material." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applied answers win marks, so students practise tying theory to the firm in each case, and the research project benefits from a real local business." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programs are written and tested, not only traced, and the Internal Assessment is built and documented in steps across the year." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Students rehearse commentary, comparative essays and the oral under time, with feedback on argument and evidence rather than on vocabulary alone." },
    { name: "IB Marathi A: Literature", levels: "SL / HL, school-supported self-taught", description: "For a student who reads Marathi well but has no class for it, set works are analysed closely and the oral commentary is rehearsed." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Fluent speakers still need register, text-type and listening practice, which is what the exam actually measures." },
    { name: "Theory of Knowledge (TOK)", levels: "DP core", description: "Discussion-led sessions test knowledge claims against examples from science, history and the arts, then turn the strongest arguments into the exhibition and essay plan." },
  ],

  igcseSubjectsIntro:
    "IGCSE requests from Murtijapur usually come from families building a course around a tutor, so the first decisions are board, tier and exam series. Cambridge and Edexcel share content but not phrasing, and the choice shapes every paper a student practises.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended papers reward method, so students practise showing each step, working without a calculator and checking answers for sense." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Differentiation, functions and trigonometry arrive earlier than school usually covers them, which smooths the path into Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Electricity, forces and waves are practised with data questions, and the alternative-to-practical paper is taught as its own skill." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Calculations and qualitative tests are drilled together, with organic chemistry introduced before the final term, not during it." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Transport, enzymes and genetics anchor the long answers, and students practise writing them in the mark scheme’s own vocabulary." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python is written at the keyboard, and algorithms, binary and logic gates are practised until the theory paper reads easily." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case material is read closely, and students practise answering the question asked rather than reciting a model answer." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing and speaking are practised for students making the move from Marathi or Hindi medium into English papers." },
  ],

  regionsTitle: "Murtijapur and the towns around it that our online lessons reach",
  regionsIntro:
    "Because lessons happen on a screen, these places are context: which rail line and road a family uses, where the working day of mills and markets sits, and which neighbouring towns share the same schooling picture.",
  regions: [
    { name: "Murtijapur Junction", note: "The Bhusawal-Badnera junction and old hub of the Shakuntala narrow-gauge line, which has been closed since 2016 while conversion to broad gauge proceeds." },
    { name: "Town centre and market", note: "The commercial core, where oil mills, cotton traders and shops set the working day and evening lessons suit households with late hours." },
    { name: "MIDC industrial area", note: "The estate with cotton-pressing units and mills, where many working families in the town earn a living." },
    { name: "NH 53 corridor", note: "The highway that runs east toward Amravati and west toward Akola, the usual road for admissions visits and exam journeys." },
    { name: "Akola", note: "To the west, the district headquarters, with the Government Medical College and Dr Panjabrao Deshmukh Krishi Vidyapeeth." },
    { name: "Daryapur", note: "A market town to the north in Amravati district, sharing Murtijapur’s cotton-belt economy and its state-board schooling." },
    { name: "Anjangaon Surji", note: "A trading town further north in Amravati district, with its own page on this site." },
    { name: "Amravati and Badnera", note: "To the east, home of the divisional board office and Sant Gadge Baba Amravati University." },
    { name: "Yavatmal", note: "To the south-east, the far end of the old narrow-gauge line, in a district with its own page on this site." },
  ],

  schoolDisclaimer:
    "The Amravati and Nagpur schools named here are context for where Murtijapur families might look, not recommendations or partners. IB Gram has no tie to any school, the International Baccalaureate, Cambridge or Pearson, and every school changes its programmes and admissions, so confirm each detail with the school itself.",
  schoolClusters: [
    {
      city: "Murtijapur and Akola district",
      note: "No IB, Cambridge or Edexcel school could be confirmed in Murtijapur or anywhere in Akola district. Local schooling runs on the Maharashtra State Board, CBSE and other boards, which is why this page is about online tutoring rather than a school list.",
      schools: [],
    },
    {
      city: "Nearby: Amravati",
      note: "East along NH 53, Amravati has the closest school on our list with Cambridge in its name. The journey is long for a daily commute, so it suits a boarding arrangement or a move.",
      schools: ["KK Cambridge International School, Indala"],
    },
    {
      city: "Nearby: Nagpur",
      note: "Beyond Amravati, Nagpur offers the widest regional choice, spread from the MIHAN zone in the south to central and western neighbourhoods. Families treat it as a relocation or boarding decision for the Diploma years.",
      schools: ["D Y Patil International School, MIHAN", "Centre Point School International", "VIBGYOR World Academy", "International School of Scholars"],
    },
  ],

  modesIntro:
    "All three modes are online: tutors do not visit homes in Murtijapur, because home visits run only in Gurugram and parts of Delhi NCR. The right one depends on how much time the school day leaves and how closely parents want to follow progress.",
  modes: [
    {
      title: "A fixed weekly hour",
      description:
        "The same hour each week through the school year with one tutor, placed where the family’s evening allows. Most Murtijapur students begin here.",
      bullets: [
        "A tutor who has taught your exact course",
        "Problems worked and marked together on screen",
        "Open to every IB programme and both IGCSE boards",
        "The hour shifts around exams and festival weeks",
      ],
    },
    {
      title: "A weekly hour plus monthly review",
      description:
        "Regular lessons with a short written summary after each and a monthly review of progress against the syllabus, for parents who want structure and visibility.",
      bullets: [
        "A summary after every session",
        "A monthly review of pace and gaps",
        "Useful for boarders and busy households",
        "A second weekly slot can be added near assessments",
      ],
    },
    {
      title: "A sprint around exams",
      description:
        "Closely packed sessions in the weeks before mocks, board exams or the May series, built around timed papers and quick, specific feedback.",
      bullets: [
        "Timed papers marked to the board’s own scheme",
        "Corrections back within a day or two",
        "Fits holidays and study-leave weeks",
        "Ideally set up two or three weeks in advance",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Murtijapur, and who looks for one?",
      paragraphs: [
        "No school in Murtijapur or anywhere in Akola district could be confirmed as an IB, Cambridge or Edexcel school. The nearest names on our list are in Amravati, east along NH 53, and in Nagpur, a long journey beyond. For most families here the realistic route is a tutor, with any move decided later.",
        "Local schools run from pre-primary to graduation in arts, science and commerce, in Marathi, Hindi and English medium, and the Amravati divisional board conducts SSC and HSC exams for Akola district. What the town lacks is higher professional education: there is no engineering or medical college, so older students routinely look to Akola, Amravati or Nagpur.",
        "That shapes the IB and IGCSE audience. Families with a clear overseas plan want an internationally readable record, parents who expect a metro posting want continuity, and some households simply want an English-medium international foundation for a young child. A few students attend a school that added Cambridge subjects but has no specialist teacher, and need a tutor for exactly that subject.",
        "With no local batch to join and no IB teacher down the road, online one-to-one lessons are the practical answer. A student stays at home with family and school, the tutor brings the exact syllabus, and every later option, including a move to Akola, Amravati or Nagpur, stays available.",
      ],
      table: {
        caption: "The nearest IB and Cambridge options from Murtijapur",
        columns: ["Place", "Schools on our list", "Direction", "What to weigh"],
        rows: [
          ["Murtijapur and Akola district", "None confirmed", "Local", "Local schooling runs on the Maharashtra State Board, CBSE and other boards"],
          ["Amravati", "KK Cambridge International School, Indala", "East along NH 53", "Long for a daily commute; suits boarding or a move"],
          ["Nagpur", "D Y Patil International School (MIHAN), Centre Point School International, VIBGYOR World Academy, International School of Scholars", "East, beyond Amravati", "The widest regional choice; usually a relocation or boarding decision"],
          ["Akola", "None confirmed on our list", "West", "The district headquarters, with the government medical college and agricultural university"],
        ],
      },
      bullets: [
        "No IB, Cambridge or Edexcel school in Akola district could be confirmed",
        "Amravati and Nagpur are the nearest names on our list, both long journeys",
        "The town has no engineering or medical college, so older students look to other cities",
        "Online lessons keep a child at home while later options stay open",
      ],
    },
    {
      heading: "What does a cotton-and-railway town have to do with an international curriculum?",
      paragraphs: [
        "More than it might seem. Murtijapur Junction exists because cotton from Vidarbha’s interior was carried here on the narrow-gauge Shakuntala Railway, built in 1903 so that the crop could be shipped on to Manchester, and the town has looked outward ever since. An international curriculum is a modern version of that habit: learning built to travel.",
        "The line, 189 kilometres of 2 ft 6 in track from Achalpur through Murtijapur to Yavatmal, was named after Shakuntala Deshmukh and stopped running in 2016, and conversion to broad gauge has been under way since 2020. Until that finishes, the road and the main line do the work, which keeps Akola, Amravati and Nagpur within reach for a family planning a school move.",
        "Trade keeps the town connected: the junction links to Mumbai, Hyderabad and Nagpur, and the mills and cotton-pressing units on the MIDC estate still depend on it. For a family whose business relies on markets elsewhere, an IB or IGCSE record that is recognised in other cities and countries can be a practical consideration as well as an academic one.",
        "The lesson for a student is practical rather than historical. Whatever syllabus they follow, the skills that travel furthest, clear writing, sound mathematics and confident explanation, are the ones tutors spend most time on, and they are learned as well over a screen in Murtijapur as in any metro.",
      ],
      bullets: [
        "The Shakuntala Railway, built in 1903, carried cotton to Murtijapur for shipment to Manchester",
        "It closed in 2016, and conversion to broad gauge began in 2020",
        "The junction still links the town to Mumbai, Hyderabad and Nagpur",
        "Portable skills, not any one syllabus, are what online tutors build",
      ],
    },
    {
      heading: "How do the Maharashtra State Board, CBSE, IB and IGCSE compare for a Murtijapur student?",
      paragraphs: [
        "The Maharashtra State Board and CBSE test a fixed syllabus in public exams each February and March, while IB and IGCSE ask students to reason in unfamiliar contexts and, in the IB, to submit assessed coursework. The Amravati divisional board conducts the state papers for Akola district. The table compares the four.",
        "MHT-CET for engineering and pharmacy and NEET-UG for medicine are built on the state and CBSE Class 11 and 12 syllabus, so a family picking IB or IGCSE should weigh them early. Since the town has no engineering or medical college, many students leave for Akola, Amravati, Nagpur or Pune at Class 11 anyway, which is the natural point to decide the syllabus.",
        "A student in a Marathi-medium school who moves to an English-medium IB or IGCSE course faces a language step as much as a syllabus step. Tutors begin with subject vocabulary and exam phrasing, particularly in sciences and economics, and raise the demand as explanations become easier.",
        "CBSE students often ask whether JEE and the IB conflict. They overlap heavily in algebra, calculus and physics, but the question styles differ, so a student who wants both needs two preparation streams planned together, not stitched together in the last year.",
      ],
      table: {
        caption: "Four school routes compared for a Murtijapur student",
        columns: ["Feature", "Maharashtra State Board", "CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["Medium in Murtijapur schools", "Marathi, Hindi or English", "English and Hindi", "English", "English"],
          ["Main exams", "SSC and HSC, February-March, Amravati divisional board", "Class 10 and 12, February-March", "Papers in May, plus internal assessment", "Papers in May-June or October-November"],
          ["Entrance routes", "MHT-CET and NEET-UG", "MHT-CET, JEE Main and NEET-UG", "AIU equivalence; check each authority", "Class 10 level; continues into Class 11 and 12"],
          ["Typical answer", "Recall of set material", "Recall with application", "Extended reasoning against criteria", "Structured answers, Core or Extended"],
        ],
      },
      bullets: [
        "State board and CBSE reward recall of a fixed syllabus; IB and IGCSE reward reasoning",
        "MHT-CET and NEET-UG are built on the state and CBSE syllabi, so weigh them early",
        "Moving from Marathi medium to English medium is a language step first",
        "A student who wants both JEE and the IB needs two plans made together",
      ],
    },
    {
      heading: "What sets the fee for an IB or IGCSE tutor in Murtijapur?",
      paragraphs: [
        "Four things set the rate: the programme and level, how scarce the subject is, how recently the tutor has taught the exact course, and how often lessons run. The figure is confirmed in writing before the free trial, and because every lesson is online there is no fare, fuel or travel time built into it.",
        "Higher Level sciences and Mathematics draw on fewer experienced tutors than IGCSE Core or middle-years help, and subjects such as Marathi A or Design Technology are rarer still, so they can take a little longer to arrange. Families who want two or three subjects usually start with the one causing most worry.",
        "When you compare, look at what each option covers. A class shares one teacher between a batch, and a school teacher offering private lessons may teach the state syllabus expertly without having marked a current IB or Cambridge paper. A written plan and a named list of past papers the tutor has marked are fair things to ask any provider.",
      ],
      bullets: [
        "Higher Level sciences and Maths usually cost more than IGCSE Core, because experienced tutors are fewer",
        "The rate is agreed in writing before the trial lesson",
        "No travel cost is built in: lessons are online",
        "If the fit is wrong, a different tutor is arranged",
      ],
    },
    {
      heading: "Online lessons, local classes, teachers in Akola or self-study: which suits a Murtijapur family?",
      paragraphs: [
        "For IB and IGCSE tutors in Murtijapur, live one-to-one lessons at home generally fit best, because local classes are built for state-board and entrance-exam batches and travelling to Akola or Amravati for a weekly lesson costs hours. The table compares four routes for a Murtijapur student.",
        "Classes in town do what they are meant to do well: SSC and HSC revision, MHT-CET and NEET batches and homework help. They follow those exams, so an IB command term or a Cambridge mark scheme rarely features in their notes.",
        "Teachers in Akola or Amravati may have taught English-medium students for years, and a few will have IB or Cambridge experience. Reaching them means a journey in Vidarbha’s heat, and the supply is thin, so a match is hard to find and harder to keep every week.",
        "Self-study helps a motivated student surprisingly far in IGCSE Maths, where past papers and mark schemes are free. It is weakest on explorations, extended answers and practical questions, where a tutor’s second reading of the work catches what the student cannot see alone.",
      ],
      table: {
        caption: "Four routes to IB and IGCSE support from Murtijapur",
        columns: ["Route", "Built for", "Fit with IB or IGCSE", "Practical note"],
        rows: [
          ["Classes in town", "SSC, HSC, MHT-CET and NEET batches", "Little or none", "A fixed timetable and a daily journey"],
          ["Teachers in Akola or Amravati", "English-medium and state syllabi", "Uneven; a few have IB or Cambridge experience", "Needs a long journey each week"],
          ["Live one-to-one online", "The exact IB or IGCSE course", "Matched to code, level and session", "Taught at home; nothing to commute"],
          ["Self-study", "Independent, motivated learners", "Whatever the student manages alone", "Nobody checks explorations or extended writing"],
        ],
      },
      bullets: [
        "Local classes follow SSC, HSC, MHT-CET and NEET, not IB or Cambridge mark schemes",
        "Teachers with IB or Cambridge experience are few and far away",
        "Self-study is weakest on explorations and extended writing",
        "A tutor provides the second reading that catches what a student misses alone",
      ],
    },
    {
      heading: "How do Akola district’s heat, monsoon and cotton season shape a study year?",
      paragraphs: [
        "Heat comes first: Akola district has recorded a maximum of 47.7 degrees Celsius, so May afternoons are unusable for study, and the monsoon that follows, averaging about 750 millimetres a year, sets the farming calendar. Evening lessons and early weekend slots therefore carry most of the year, with the hottest weeks kept light.",
        "Cotton, soybean, tur and jowar are the district’s main crops, and the autumn harvest and market season brings busy weeks for trading and farming households. Diwali, which falls close to it, is the main holiday, and Ganeshotsav, Pola and Navratri earlier in the season each take a few evenings.",
        "Exams fix the rest. Maharashtra’s SSC and HSC papers run in February and March, IB Diploma papers begin around the start of May, and Cambridge’s main series is May and June, so students following both a school timetable and an international syllabus should agree lesson slots in December, before the boards crowd the calendar.",
        "Results follow at their own pace: state results by the end of spring, IB May results in early July and Cambridge June results in August. Overseas applications cluster between October and January, so predicted grades from the autumn term of Class 12 become the first numbers admissions offices see.",
      ],
      table: {
        caption: "A Murtijapur study year and what it means for lessons",
        columns: ["Period", "What happens", "Planning note"],
        rows: [
          ["April to June", "Extreme heat; school year ends; summer break; IB and Cambridge papers in May-June", "Late-evening or early-morning slots; vacation weeks suit intensives"],
          ["July to September", "Monsoon; new school year; Pola and Ganeshotsav", "Steady weekly lessons; shift slots off festival evenings"],
          ["October to December", "Navratri and Diwali; cotton and soybean market season; Cambridge October-November series", "Expect broken weeks; book revision blocks in advance"],
          ["January to March", "Cooler weather; mock exams; SSC and HSC papers", "Timed papers; agree slots with school early"],
        ],
      },
      bullets: [
        "May afternoons are too hot for study, so evenings carry the year",
        "The autumn harvest and Diwali make October to December the busiest stretch",
        "SSC and HSC papers in February and March shape the state-board timetable",
        "Overseas applications cluster between October and January",
      ],
    },
    {
      heading: "Where do IB and IGCSE students from Murtijapur go after school?",
      paragraphs: [
        "Most look first to Akola, Amravati and Nagpur, then to Pune, Mumbai or abroad. The town itself has no engineering or medical college, so the next step is almost always a move, which is why choosing subjects and entrance routes early pays off. IB Diploma holders need Association of Indian Universities equivalence for most Indian admissions.",
        "Akola holds the Government Medical College and Dr Panjabrao Deshmukh Krishi Vidyapeeth, Amravati has Sant Gadge Baba Amravati University and the Government College of Engineering, and Nagpur adds VNIT and AIIMS. MHT-CET, NEET-UG, JEE Main and CUET-UG decide entry to most of them, each with its own eligibility notes.",
        "Overseas, UK offers usually name total IB points and Higher Level minimums, US and Canadian applications weigh grades beside essays and activities, and Australia and Singapore publish their own grade tables. Predicted grades are requested in the autumn of Class 12, so subject depth in Class 11 is what moves the needle.",
        "IB Gram does not advise on eligibility or promise outcomes. What tutors can do is explain what each subject demands, teach it in depth and help a student keep the options that matter open while the family checks the current rules for each test.",
      ],
      bullets: [
        "Akola, Amravati and Nagpur hold the nearest medical, engineering and agricultural institutions",
        "MHT-CET, NEET-UG, JEE Main and CUET-UG each publish their own eligibility notes",
        "IB Diploma holders usually need AIU equivalence for Indian admissions",
        "Subject depth in Class 11 is what lifts predicted grades for overseas offers",
      ],
    },
    {
      heading: "Which IB Maths course, which sciences and which IGCSE tier should a Murtijapur student pick?",
      paragraphs: [
        "Pick Maths AA for engineering, physics or economics and Maths AI for business, biology or social science, and use Higher Level only where the target course names mathematics. A student who is unsure should ask two or three target programmes for their entry requirements before the subject forms are filed.",
        "For sciences, Physics and Chemistry at Higher Level beside Maths AA is the conventional engineering combination, and Biology with Chemistry at Higher Level leads toward medicine. Since the Internal Assessment runs in each subject, a tutor helps sequence the workload so that no two investigations collide.",
        "For IGCSE, choose Core for confidence and a clean pass and Extended for the top grades, adding Additional Mathematics 0606 for a head start toward Maths AA. Without a school setting the tier, the family decides; Extended with a review after the first mock paper is a sensible default for a capable student.",
        "Fix the board early. Cambridge and Pearson Edexcel cover similar ground with different phrasing, tier names and mark allocation, so one family of past papers is enough. A tutor who has taught both can explain the differences quickly.",
      ],
      bullets: [
        "Maths AA for engineering, physics and economics; Maths AI for business, biology and social science",
        "Physics, Chemistry and Maths AA at Higher Level is the conventional engineering combination",
        "Extended with a review after the first mock is a sensible default for a capable IGCSE student",
        "Choose one board and use only its past papers",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach the IB from PYP to DP and both IGCSE boards. For Murtijapur each match starts from the exact course, level and exam session, since no IB school in Akola district means there is no local teacher to ask.",

  process: [
    { title: "Tell us about your child", description: "The class, the board or programme, the subjects that need help and any exam date you are working toward." },
    { title: "See who we suggest", description: "A short list of tutors, each with the syllabus history that makes them a fit." },
    { title: "Take the free lesson", description: "A trial on a real topic, before any payment or promise." },
    { title: "Read the plan", description: "A first-month outline with the rate in writing, for you to accept or adjust." },
    { title: "Carry on, or switch", description: "Weekly lessons with notes, regular reviews and a new tutor if the first is not right." },
  ],

  whyPoints: [
    { title: "The exact syllabus", description: "Board, tier, code and exam session come first, and only then is a tutor suggested." },
    { title: "Made for a town with no IB school", description: "Akola district has no IB or Cambridge school we can confirm, so tutors come from across India." },
    { title: "No long roads", description: "A lesson at home replaces a journey to Akola or Amravati in Vidarbha’s heat." },
    { title: "Coursework stays the student’s", description: "Tutors explain and coach; they never draft an Internal Assessment, Extended Essay or coursework." },
    { title: "A clear written trail", description: "A note after each lesson and regular reviews show parents what has moved." },
    { title: "Free to change", description: "The trial is free, no school is tied in, and a different tutor is arranged if needed." },
  ],

  faqs: [
    { question: "How can I find an IB tutor in Murtijapur?", answer: "Tell us your child’s class, programme, subject, level and exam session, and whether a move to another city is planned. We then suggest tutors who have taught that exact course and arrange a free first lesson. With no IB teachers in Akola district, matching is done across India, and each lesson is live on video at a time that suits your family." },
    { question: "Do you offer IGCSE tutors in Murtizapur for both Cambridge and Edexcel?", answer: "Yes, for both boards, taught online. Let us know which board your child will sit, and whether they enter through a school or as a private candidate, since syllabus codes, tiers and exam series differ. Tutors use each board’s published past papers and mark schemes, and will help a family choose a board and tier when nobody else has set them." },
    { question: "Will tutors come to our home in Murtijapur?", answer: "No. Tutors do not visit homes in Murtijapur; in-person visits run only in Gurugram and parts of Delhi NCR. A lesson here is a live video call with one tutor and one student, sharing a screen to work through problems and papers. It is private tuition at home, carried by a laptop, so nobody needs to travel on the highway or the railway." },
    { question: "What does IB or IGCSE tuition cost in Murtijapur?", answer: "The rate depends on the programme, level, how scarce the subject is, lesson length and how recently the tutor has taught the syllabus, and it is confirmed in writing before the free trial. Higher Level sciences and Mathematics usually cost more than IGCSE Core, and online delivery means no travel cost. A family can begin with one weekly hour and add more later." },
    { question: "Is there an IB or Cambridge school in Murtijapur or Akola district?", answer: "None could be confirmed. The nearest schools on our list are in Amravati and Nagpur, which are long journeys from Murtijapur and suit boarding or a move rather than a daily commute. Please check admissions and programmes with any school directly, because they change, and remember that a tutor can support a student whichever school they attend." },
    { question: "Our child is in a Marathi-medium school. Can tutoring help with an English-medium international course?", answer: "Yes, and it is a common starting point. Tutors begin with subject vocabulary and exam phrasing, usually in Science, Maths and Economics, then raise the level as explanations come more easily. Progress is steady rather than instant, and a short written note after each lesson shows which terms and question types have been mastered." },
    { question: "How does online tuition cope with power cuts and the May heat?", answer: "With a little planning. Keep a phone hotspot as a fallback for home broadband, choose early-morning or late-evening slots when May temperatures climb, and tell us about outages so a lesson can be moved rather than lost. Because nobody travels, a rescheduled lesson costs only a slot, not a journey." },
    { question: "Can a tutor help with IB Internal Assessments?", answer: "Yes, in a coaching role only. Tutors can help a student shape a workable question, understand each criterion, plan the data or research and reshape a draft’s structure. They never write, rewrite or supply any part of an Internal Assessment, Extended Essay, TOK essay or coursework, because the IB requires every piece to be the student’s own work." },
    { question: "Which IB subjects do you teach for Murtijapur students?", answer: "Both Mathematics courses, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English A, Hindi B and Theory of Knowledge are regular requests, and Marathi A can be taught as a self-taught subject. Tell us the combination and levels and we will confirm a suitable tutor for each before the trial lesson is booked." },
    { question: "Do you teach PYP and MYP children as well as Diploma students?", answer: "Yes, across the whole continuum. PYP tutoring focuses on reading, number confidence and explaining ideas aloud; MYP tutoring usually takes one subject and works it against the criteria, or supports the Personal Project. Lessons for younger children are brief and varied, and tutors are matched to the child’s age and programme." },
    { question: "When should we begin IB or IGCSE tutoring?", answer: "As early as the course allows, which means Class 11 for the Diploma and Class 9 for IGCSE. That leaves time to close gaps before internal deadlines and mock exams. A later start still helps, particularly in the last four months, when timed papers and the highest-value topics matter most." },
    { question: "Will an IB Diploma be accepted by Indian colleges?", answer: "Often yes, but each authority decides. Most Indian universities ask for an Association of Indian Universities equivalence certificate, and MHT-CET, NEET-UG, JEE Main and CUET-UG publish their own eligibility notes. Check them before choosing subjects. Tutors teach the subjects well but do not advise on eligibility." },
    { question: "Can lessons fit around school hours, exams and festivals?", answer: "Yes. Most Murtijapur students choose a weekday evening or a weekend morning, and slots move around exams, Diwali, Pola and the hottest weeks. A second weekly session is easy to add before assessments, and a short written plan for each month keeps the timetable visible to the whole family." },
    { question: "Is there a free trial lesson?", answer: "Yes. Every match begins with a free lesson on a topic from your child’s current syllabus, followed by a short written plan for the first month and a rate confirmed in writing. You may continue, switch tutor or stop. The trial is also the moment to ask which past papers the tutor has marked recently." },
    { question: "How do you check tutors?", answer: "Before an introduction we review qualifications, recent teaching of the specific syllabus and level, and familiarity with the assessment criteria. Tutors are based in India and teach on Indian Standard Time. The free lesson then lets your child judge the match, and a change of tutor is simple to arrange." },
    { question: "Is IB Gram linked to any school, the IB, Cambridge or Pearson?", answer: "No. IB Gram is an independent tutoring service with no tie to any school named on this page, the International Baccalaureate, Cambridge or Pearson Edexcel, and none of them endorses it. Schools in Amravati and Nagpur appear only as context, and tutors teach from each board’s own published specifications." },
  ],

  internalLinks: [
    { label: "IB Gram across India", href: "/india/", description: "How IB Gram works from metros to taluka towns, all taught live online." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "Gurugram and parts of Delhi NCR, the only places with in-person home tuition." },
    { label: "IGCSE guide", href: "/igcse/", description: "What IGCSE involves: the two boards, Core and Extended tiers and the exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "A closer look at the Diploma: six subjects, the core, internal assessment and scoring." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "The Middle Years Programme explained, from criteria to the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "The PYP in brief: inquiry units, transdisciplinary themes and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA or AI, HL or SL: how to choose an IB Mathematics course." },
    { label: "Browse tutors", href: "/tutors/", description: "Meet the tutors, with filters for subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send us your child’s details and ask for a trial lesson." },
    { label: "IB and IGCSE tutoring in Akola", href: "/akola/", description: "The district headquarters to the west, with a government medical college." },
    { label: "IB and IGCSE tutoring in Amravati", href: "/amravati/", description: "Amravati, to the east, where the divisional board and a Cambridge-linked school are based." },
    { label: "IB and IGCSE tutoring in Achalpur", href: "/achalpur/", description: "Achalpur, the old northern terminus of the Shakuntala narrow-gauge line." },
    { label: "IB and IGCSE tutoring in Yavatmal", href: "/yavatmal/", description: "Yavatmal, the southern end of the same line, with its own online tutoring page." },
  ],

  closingHeading: "Start with a free IB or IGCSE lesson in Murtijapur",
  closingBody:
    "Tell us the programme or board, the subjects and levels, the school your child attends and the hours that really suit the household. We will send a short list of tutors with their teaching history and a few trial slots, online and free at this stage. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
