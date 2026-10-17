import type { CitySeoPage } from "../types";

/**
 * Niwai (Tonk district, Rajasthan). No IB or IGCSE school in the town could be confirmed, so stripSchools
 * is empty and the clusters reuse Jaipur school names already published on the Tonk and Jaipur pages,
 * labelled as nearby. Home visits are not offered here (homeTuition: false in plan.ts).
 * NOTE: plan.ts lists Niwai under Uttar Pradesh; this page describes Niwai in Tonk district, Rajasthan.
 */
export const niwai: CitySeoPage = {
  slug: "niwai",
  countryName: "Niwai",
  countryNameLong: "Niwai, Rajasthan",
  demonym: "Niwai",
  flagCode: "in",
  countryCode: "IN",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots after school and after the afternoon heat, with Sunday mornings kept for revision and a gap left around Gangaur, Teej and Diwali",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.3667, longitude: 75.9167 },
  alternateNames: ["Niwai Tonk", "Niwai Rajasthan", "Niwai Tehsil", "Banasthali Niwai"],
  wikipedia: "https://en.wikipedia.org/wiki/Niwai",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Niwai | One-to-One Tuition from Home",
  metaDescription:
    "Online IB and IGCSE tutors for Niwai students in Tonk district: private lessons from home, planned around RBSE dates and Rajasthan heat. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition in Niwai, Tonk District",
  heroEyebrow: "LIVE ONLINE IB & IGCSE PRIVATE TUITION FROM HOME IN NIWAI",
  heroSubtitle:
    "Niwai parents who want home tuition for an IB or IGCSE subject usually find that the town's teachers know the RBSE book and little else. Private tuition from home, online, closes that gap. Your child works at the desk in Tonk district, and a tutor who has already taught the course explains it on live video. Name the subject and level, and we begin the search.",
  primaryKeyword: "IB and IGCSE tutors in Niwai",
  imageAltText: "A Niwai student reviewing an IB Economics essay plan with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Niwai",
    "IGCSE tutor Niwai",
    "IB home tuition Niwai",
    "IGCSE home tuition Niwai",
    "IB private tuition Niwai",
    "IB Maths tutor Niwai",
    "IGCSE Maths tutor Niwai",
    "IB Physics tutor Niwai",
    "IB Chemistry tutor Niwai",
    "IB Biology tutor Niwai",
    "IB DP tutor Niwai",
    "IB MYP tutor Niwai",
    "IB PYP tutor Niwai",
    "IGCSE online tuition Niwai",
    "online IB tutor Niwai",
    "IB tutor Tonk district",
    "IGCSE tutor Banasthali",
    "IB tutor Niwai Rajasthan",
    "online IGCSE tutor near Jaipur",
    "IGCSE Chemistry tutor Niwai",
  ],

  heroTrustPoints: [
    "Tutors with real teaching history on the exact IB or IGCSE course",
    "Live one-to-one video lessons at a fixed weekly time, IST",
    "A free first lesson, with the rate sent in writing afterwards",
    "No affiliation with the IB, Cambridge, Pearson or any school",
  ],
  heroStats: [
    { value: "Online", label: "The way every Niwai lesson runs" },
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "IGCSE", label: "Cambridge and Edexcel papers" },
    { value: "Free trial", label: "No cost for lesson one" },
  ],

  intro: {
    heading: "Taking the IB or IGCSE from Niwai: how it works in practice",
    paragraphs: [
      "Niwai is a tehsil town in Tonk district, on the Jaipur side of the Banas basin, and best known beyond the district because Banasthali Vidyapith, the large women's university, sits nearby. The town lives on wheat, mustard, small trade and the steady movement of students and staff linked to the campus. School education here follows the Rajasthan Board or CBSE, and we found no confirmed IB or IGCSE school in Niwai.",
      "So what does a family do who wants an international syllabus? They study with a tutor online. Private tuition from home, delivered over video, puts a teacher with proven experience of the IB or IGCSE course in front of a Niwai student without anyone moving. Jaipur, the city with international schools, is a considerable drive away, and tutors based there seldom travel out to a tehsil.",
      "We should say clearly that no tutor will come to a Niwai address. Visits to homes are limited to Gurugram and parts of Delhi NCR. Niwai lessons use a live link, a shared digital board and photographs of written work, and parents receive a brief note when each session ends.",
      "IB Gram runs independently and has no tie to the IB Organization, Cambridge, Pearson or any school on this page. Tutors explain, check and guide, but a student's Internal Assessment, Extended Essay, TOK essay and coursework are never written by anyone but the student.",
    ],
    bullets: [
      "Help across IB PYP, MYP, DP and CP",
      "Cambridge and Pearson Edexcel IGCSE coaching",
      "One tutor per student, same hour each week",
      "A brief written update after every lesson",
      "Schedules that respect summer heat, Gangaur, Teej and Diwali",
    ],
  },

  programmesIntro:
    "Since no IB school in Niwai could be confirmed, children on these programmes tend to be enrolled in Jaipur, at a boarding school, or with an online provider. The paragraphs below set out each stage and what families from Tonk district generally look for.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Children explore themes such as how places change or how people share resources, and they document what they discover. The programme closes with the Exhibition.",
      countryNote:
        "A Niwai child from a Hindi-medium nursery will need relaxed English conversation. Exhibition ideas can come from home surroundings, such as the Banas river, a village fair or the campus around Banasthali.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to 10, ages 11-16",
      description:
        "Teachers mark each subject against stated criteria, so the quality of explanation matters as much as the answer. Students finish with a self-managed Personal Project.",
      countryNote:
        "Pupils schooled on RBSE question papers are used to fixed answers, and criteria marking is a change. We use the opening weeks to practise planning an answer and writing a clear scientific report.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "Students take six courses, three at Higher Level, and complete the Extended Essay, Theory of Knowledge and CAS. Main exams fall in May, with a November session for some.",
      countryNote:
        "Because Kota is not far off, many families here think about JEE or NEET too. A written plan from the first term of Class 11 makes it possible to hold both the IB and an entrance route.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "Selected Diploma courses are taken together with a career-related study and a reflective project.",
      countryNote:
        "Hardly ever chosen from Tonk district. If a Niwai student enrols, we teach the academic courses and help organise the project time.",
    },
  ],

  subjectsIntro:
    "In Niwai we begin with the course and level. A learner taking IB Biology HL has different needs from a Class 7 MYP Maths student, so the syllabus comes first and the tutor's name second.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof; students from a coaching-heavy region often compute quickly and are asked to slow down and justify." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data, probability and modelling; an Exploration might use mustard yields, Bisalpur water levels or temperature records." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, circuits and fields, with an investigation judged on how well uncertainty is handled." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, equilibrium, acids and organic chemistry, along with a lab investigation marked on design and evaluation." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, inheritance, ecology and physiology; accurate terms and data reading separate the grades." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets, growth and development; crop prices and canal irrigation are natural case material." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers reward applied thinking; the area's traders and campus suppliers provide familiar cases." },
    { name: "IB Geography", levels: "HL / SL", description: "Water, population and resource questions, with fieldwork supported by the semi-arid Banas setting." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water scarcity, soils and land use, studied in a basin that feeds a reservoir used by a large city." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, networks and algorithms, with plenty of hands-on work on the student's laptop." },
    { name: "IB English A and B", levels: "HL / SL", description: "Textual analysis and written commentary for students who speak Hindi or Marwari at home and need fluency in analytical English." },
    { name: "IB Hindi", levels: "SL / HL", description: "A natural language choice, studied with attention to literary terms and structured essays." },
    { name: "IB Theory of Knowledge", levels: "Core", description: "Support in building and testing arguments. The essay and presentation remain the student's own." },
  ],

  igcseSubjectsIntro:
    "Niwai students taking IGCSE usually study through an online school or as private candidates. We confirm the syllabus code and tier at the outset, since Extended Mathematics, Additional Mathematics and Edexcel Higher each need their own approach.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Cambridge Core or Extended, Edexcel Foundation or Higher", description: "Broad content where marks slip through missing working and misread command words." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and trigonometry ahead of time, which smooths a later move into IB Maths or JEE-level work." },
    { name: "IGCSE Physics", levels: "Core and Extended", description: "Forces, energy, electricity and waves, with a written practical paper that tests lab reasoning." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Reactions, periodic trends and qualitative tests that must be practised as set routines." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Large content volume plus questions on designing experiments." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Pseudocode, logic and programming." },
    { name: "IGCSE English First or Second Language", levels: "Grade 9-10", description: "Directed writing, summaries and comprehension for students who move between Hindi, Marwari and English." },
    { name: "IGCSE Economics and Business Studies", levels: "Grade 9-10", description: "Exact definitions, data work and short structured answers." },
    { name: "IGCSE Geography", levels: "Grade 9-10", description: "Rivers, climate and farming, argued through case studies." },
  ],

  regionsTitle: "Niwai and Tonk district areas served by our online tutors",
  regionsIntro:
    "All teaching is on screen, so the value of knowing an area lies in connection quality and the right hour. The notes describe how the day tends to run in each place so that a slot can be chosen with care. No tutor is sent to any of them.",
  regions: [
    { name: "Niwai main market", note: "The commercial heart of the tehsil, where shops, banks and offices keep long hours and evenings can be noisy." },
    { name: "Niwai railway station side", note: "Homes near the line to Jaipur and Sawai Madhopur, used by families who commute for work or study." },
    { name: "Highway edge colonies", note: "Newer houses on the Jaipur-Tonk road, with reliable mobile signal and heavy truck sound after dark." },
    { name: "Old town lanes", note: "Compact streets where space for a quiet study corner is limited and power can dip in the hottest weeks." },
    { name: "Banasthali campus surroundings", note: "Families linked to the university and its school, many with staff members who have strong views on schooling." },
    { name: "Tonk city", note: "The district headquarters to the south, with older schools and a mix of Hindi and Urdu in daily life." },
    { name: "Malpura side", note: "Households toward the Malpura road who sometimes join evening online slots." },
    { name: "Dudu and Chaksu approaches", note: "Communities north toward Jaipur who split time between town and farm." },
    { name: "Surrounding villages along the Banas", note: "Farm settlements where harvest and irrigation timing set study hours, and mobile data is the main connection." },
  ],

  schoolDisclaimer:
    "IB Gram offers tutoring on its own account and has no link to the IB, Cambridge, Pearson or any school. We could not verify an IB or IGCSE school in Niwai, so the groups below list Jaipur schools that already appear on our published Tonk and Jaipur pages. Please check each school's curriculum and admissions directly.",
  schoolClusters: [
    {
      city: "Niwai and Tonk district: limited local options",
      note: "Schools in the tehsil teach the Rajasthan Board or CBSE syllabus, and none could be confirmed as IB or IGCSE. International study from here therefore runs through private tuition and online schooling.",
      schools: [],
    },
    {
      city: "Nearby: Jaipur, southern colonies",
      note: "The southern end of Jaipur is the closest to families coming up from Tonk district, with schools that describe an international curriculum.",
      schools: ["India International School, Mansarovar", "Seedling Modern International Academy, Durgapura"],
    },
    {
      city: "Nearby: Jaipur, Ajmer Road and Sirsi Road",
      note: "These western and south-western corridors have longer-established names, some with boarding, that Niwai families consider for Class 9 and above.",
      schools: ["Jayshree Periwal International School", "Mayoor School Jaipur", "Sanskar School, Sirsi Road"],
    },
  ],

  modesIntro:
    "Teaching in Niwai is entirely online. Three formats cover what Tonk district families most often ask for.",
  modes: [
    {
      title: "Regular private lessons, online from home",
      description:
        "A live one-to-one lesson at the same hour each week, with screen sharing and a digital board, led by a tutor familiar with the syllabus.",
      bullets: [
        "Nobody visits homes in Niwai; lessons are online",
        "The same tutor through the term",
        "A short written note to parents after each session",
        "Home visits operate only in Gurugram and parts of Delhi NCR",
      ],
    },
    {
      title: "Final-weeks revision course",
      description:
        "A concentrated series before the May or November papers, using past questions, examiner reports and mark schemes.",
      bullets: [
        "Papers under a running clock",
        "Revisiting of weak topics",
        "Command-term drills",
        "Dates kept away from festivals and wedding weeks",
      ],
    },
    {
      title: "Moving over from the Rajasthan Board",
      description:
        "For a student shifting from RBSE or CBSE into IGCSE or IB courses, a short sequence that fills gaps in English writing, method and practical skills.",
      bullets: [
        "A diagnostic first lesson",
        "Practice in writing extended answers",
        "Lab report coaching",
        "An unhurried pace",
      ],
    },
  ],

  sections: [
    {
      heading: "What leads a Niwai family to consider the IB or IGCSE?",
      paragraphs: [
        "Niwai has an unusual mix of households. Alongside farming and trading families there are teachers, administrators and professionals attached to the Banasthali campus, and many of them have seen how other education systems work. Some have children or relatives studying in Jaipur, Delhi or abroad.",
        "For these families the draw of an international curriculum is mostly about method. Both the IB and Cambridge ask students to write, argue and handle data, and parents who work in education tend to value that over repetition of notes.",
        "A fair concern is that moving off the Rajasthan Board will make it harder to enter state institutions or to stay close to Hindi. A careful plan handles both: Hindi remains a course, and the family checks entrance rules, whether for CUET or for professional exams, before the child commits.",
        "No one needs to board in Jaipur at fourteen. Studying online keeps a Niwai child at home with family, while giving access to a teacher who has handled the course many times.",
      ],
      bullets: [
        "Parents linked to the Banasthali campus or other education work",
        "Relatives studying in Jaipur, Delhi or overseas",
        "Interest in writing-based assessment",
        "Wanting Hindi to continue as a language course",
      ],
    },
    {
      heading: "Rajasthan Board, CBSE, IGCSE and IB: how do the four differ?",
      paragraphs: [
        "The Rajasthan Board of Secondary Education sets the Class 10 and Class 12 examinations that most Niwai students take. CBSE schools in the district follow NCERT texts. In both, a student succeeds by learning prescribed chapters thoroughly and writing neat answers.",
        "Cambridge and Pearson Edexcel IGCSE rely on externally marked papers that ask for application of knowledge. The IB Diploma widens the picture with six subjects and the Extended Essay.",
        "Moving between them is mainly a matter of learning what each marker wants. A fully memorised paragraph can earn top marks on an RBSE paper and very little on an IB question that gives fresh data and asks for judgement.",
        "The comparison below helps families decide.",
      ],
      table: {
        caption: "Boards compared for a Niwai household",
        columns: ["Board", "Exams to expect", "What the marker wants", "How it fits Niwai"],
        rows: [
          ["Rajasthan Board", "Class 10 and Class 12 board papers", "Faithful recall of the textbook", "Standard in the tehsil, direct route to state universities"],
          ["CBSE", "Class 10 and 12 board exams", "NCERT accuracy and speed", "Offered by a few schools, matches JEE and NEET syllabus"],
          ["Cambridge or Edexcel IGCSE", "Grade 10 papers in May-June or Oct-Nov", "Application of ideas, working shown", "Studied privately or through an online school"],
          ["IB Diploma", "May or November, end of Class 12", "Breadth, extended writing and internal work", "Suits a plan for Jaipur, Delhi or overseas"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost for a family in Niwai?",
      paragraphs: [
        "A fixed list of prices does not appear here by design. After the free first lesson we write out a rate, and the family books only when they have read it. The reasons behind the number are worth knowing before you ask.",
        "Level is the main one. A tutor for IB Chemistry HL has narrower, deeper experience than one covering Class 6 MYP Science, and rates reflect that. Lesson length and number of weekly sessions come next.",
        "The shape of the plan counts as well. A weekly lesson through the year prices differently from an eight-week push before the May exams. Households in Tonk district are often careful with money, so we suggest one subject for a month before adding another.",
        "Because lessons are online, no fuel, bus fare or hostel deposit is added. Compared with a regular trip to Jaipur for classes, the money goes into teaching hours.",
      ],
      bullets: [
        "Subject and level: HL, SL, Core, Extended",
        "Minutes per lesson and lessons per week",
        "Year-round plan or exam-season run",
        "Depth of the tutor's record on that syllabus",
      ],
    },
    {
      heading: "Online tuition, Tonk or Kota coaching, or self-study: what should a Niwai student pick?",
      paragraphs: [
        "Local classes in Niwai and Tonk are tuned to RBSE examinations and to government job tests. Few have seen an IB command term or an IGCSE tier, so international syllabuses are rarely covered with confidence.",
        "Kota's coaching culture is world-famous for JEE and NEET, but it is not built around IB or IGCSE papers, and moving there would mean leaving home. Jaipur institutes sometimes teach international subjects, but the trip from Niwai takes time every week.",
        "Self-study with past papers suits a disciplined student. Without someone to mark answers, though, the same slips in structure and units tend to return.",
        "The table sets out the four routes against what Niwai families care about.",
      ],
      table: {
        caption: "Study routes weighed for Niwai",
        columns: ["Route", "Syllabus fit", "Travel needed", "Marking of written work", "Timing"],
        rows: [
          ["Online one-to-one lessons at home", "Tutor picked for the exact course", "None", "Work returned with notes", "Moved around heat and festivals"],
          ["Local Niwai or Tonk class", "Designed for RBSE and state tests", "Short ride in town", "Seldom IB-style", "Fixed batches"],
          ["Jaipur or Kota institute", "Strong for entrance tests, patchy for IB", "Long road or rail trip, or relocation", "Depends on the centre", "Rigid batch timings"],
          ["Self-study with past papers", "Whatever the student selects", "None", "None unless someone checks", "Wide open"],
        ],
      },
    },
    {
      heading: "How do Rajasthan's heat and festivals shape the exam calendar in Niwai?",
      paragraphs: [
        "IB Diploma exams run mainly in May, with a smaller November session, and results come out in July and January. Cambridge and Edexcel IGCSE sit in May-June and October-November, plus a January sitting for Edexcel. A parent should find out which session the child is registered for before any timetable is drawn.",
        "In Rajasthan the same weeks that carry IB papers are the hottest of the year. Temperatures in Tonk district regularly pass forty degrees, afternoon power cuts are common, and a student sitting a paper or revising in May needs a cool, quiet room and a morning start.",
        "The festival year also leaves its marks. Holi and Gangaur arrive in the spring, Teej in the monsoon, and Diwali and the wedding season fill the late autumn. RBSE board papers in March overlap with the final IGCSE or IB revision, so a student on two tracks needs a clear plan.",
        "We build every timetable from the exam date backwards, leaving the festival and heat weeks as buffer.",
      ],
      table: {
        caption: "A Niwai year for IB and IGCSE students",
        columns: ["Period", "Academic focus", "Local factor", "Tutoring plan"],
        rows: [
          ["July to September", "New session, IA topic choice, core content", "Monsoon and Teej", "Weekly lessons, begin IA planning"],
          ["October to November", "November sessions, mock papers", "Diwali and wedding season", "Short practice sets before holidays"],
          ["December to February", "Mocks, IA drafts, preparation for RBSE practicals", "Cold nights and fog", "Early evening slots, draft feedback"],
          ["March to May", "RBSE papers for some, final revision, May exams", "Holi, Gangaur and rising heat", "Morning or night slots, timed papers"],
        ],
      },
    },
    {
      heading: "Which universities can a Niwai student reach after the IB or IGCSE?",
      paragraphs: [
        "The Association of Indian Universities rates the IB Diploma as the same level as Class 12, while IGCSE is a Class 10 qualification. Applicants then use CUET-UG for many central universities or apply directly to universities that read IB scores. Each institution publishes its own rules, which can change.",
        "Families here know the Jaipur institutions well: the University of Rajasthan, MNIT and a growing number of private universities. For engineering, JEE Main is the usual route, and for medicine NEET-UG applies, with eligibility for IB students depending on the subject mix and equivalence rules. Read the latest bulletin before choosing subjects. We tutor the content and promise no admission.",
        "Many Niwai families also know Banasthali Vidyapith for its undergraduate and postgraduate courses. Whether an IB or IGCSE background is accepted for a given course is something to confirm with the university itself. For overseas study, the Diploma maps neatly to applications in the UK, Canada, Australia and the US.",
        "Checking deadlines in Class 11 gives a student a long runway for Class 12.",
      ],
      bullets: [
        "AIU equivalence for the IB Diploma",
        "CUET-UG for central universities",
        "JEE Main for engineering, NEET-UG for medicine",
        "Direct applications to private and overseas universities",
        "Admission rules to be confirmed with each institution",
      ],
    },
    {
      heading: "How are IB Maths AA, AI and the sciences taught online to a Niwai student?",
      paragraphs: [
        "Analysis and Approaches is for students heading towards engineering, physics or mathematics, and it expects fluent algebra, calculus and proof. Applications and Interpretation fits those aiming for economics, business or the life sciences, with more statistics and technology. Because the wrong choice is hard to reverse, a short diagnostic usually comes first.",
        "Rajasthan students with coaching habits often solve quickly but leave out reasoning, and the IB marks reasoning directly. We train a student to write each logical step and to use the graphing calculator properly where it is allowed.",
        "The three sciences share a shape: a content paper, a data-based paper and an investigation. Online, the tutor writes on a shared canvas, works problems with the student and reads photographed lab notes. The experiment and its write-up belong to the student; the tutor coaches design, error analysis and conclusions.",
        "A semi-arid basin offers strong themes for Environmental Systems and Geography, such as reservoir management, groundwater decline and crop choice.",
      ],
      bullets: [
        "A diagnostic lesson before choosing AA or AI",
        "Weekly problem sets returned with comments",
        "Past-paper practice through the final term",
        "Guidance on investigation design, never the writing of the IA",
      ],
    },
    {
      heading: "IGCSE tiers and subject choice: what should a Niwai student consider?",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended papers in many subjects. Core stops at grade C, while Extended opens the full range to A*. A student who may go on to IB Maths, A Level sciences or JEE should usually aim for Extended.",
        "Edexcel organises Mathematics into Foundation and Higher tiers, and Higher is the counterpart of Extended. A family that is unsure can take a diagnostic paper in the first session, which shows which tier is realistic.",
        "Typical choices are English, Mathematics, two or three sciences and one humanities or business subject. For languages, Hindi is not an IGCSE option on every board, so English as a Second Language is often the pick.",
        "The table shows how common combinations link to what follows.",
      ],
      table: {
        caption: "IGCSE combinations and the next step",
        columns: ["Subjects chosen", "Tier advice", "Where it points"],
        rows: [
          ["Mathematics with Additional Mathematics", "Extended or Higher", "IB Maths AA, A Level Maths, engineering preparation"],
          ["Physics, Chemistry and Biology", "Extended", "IB sciences, A Level sciences, medical entrance study"],
          ["Economics and Business Studies", "Extended", "IB Economics and Business Management, commerce degrees"],
          ["English as a Second Language", "Standard", "English requirement for overseas study"],
        ],
      },
    },
  ],

  tutorsIntro:
    "These tutors teach live over video to families across India, including Tonk district. Profiles show subjects, levels and teaching history, and every lesson with a Niwai student takes place online.",

  process: [
    { title: "Reach out", description: "Tell us the board, programme, subject, level and free evenings through support@ibgram.com or WhatsApp on +91 7439 368 115." },
    { title: "Look at the shortlist", description: "We send tutors whose history fits the course, with open weekly times in IST." },
    { title: "Try lesson one free", description: "The opening online session costs nothing and creates no obligation." },
    { title: "Approve the terms", description: "Fee and timetable come in writing, and nothing starts until you say yes." },
    { title: "Keep track", description: "Short notes follow each lesson, and a new tutor is arranged if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Chosen for the course", description: "Tutors are selected on exact syllabus and tier, not general ability." },
    { title: "Clear that it is online", description: "No tutor travels to Niwai; the lesson is on screen." },
    { title: "Exam skill inside content", description: "Command terms, mark schemes and pacing are practised each time." },
    { title: "Parents stay informed", description: "A brief written summary follows every session." },
    { title: "Work stays with the student", description: "Tutors coach and mark but never write assessed work." },
    { title: "A swap is simple", description: "If the pairing is poor, we find another tutor." },
  ],

  faqs: [
    {
      question: "Will an IB or IGCSE tutor come to my house in Niwai?",
      answer:
        "No, nobody will come to your house in Niwai. In-person home tuition runs only in Gurugram and parts of Delhi NCR. For Niwai, the lessons are private, one-to-one and online, taken by your child at home on a laptop, with a shared board and written feedback. That makes it home tuition without a commute.",
    },
    {
      question: "Is there an IB or IGCSE school in Niwai?",
      answer:
        "We could not verify one in Niwai. Local schools use the Rajasthan Board or CBSE. Families seeking an international board typically look at Jaipur, sometimes with boarding, or at an online school. Do check each school's curriculum yourself, and bring in a tutor to support your child on whichever route you select.",
    },
    {
      question: "What does IB or IGCSE tuition cost around Niwai?",
      answer:
        "We do not publish a price list, since the rate rests on the course, level and weekly hours. A free first lesson comes first, then a written quote, and you book only if you accept it. There is no travel cost for online lessons. A one-month trial in a single subject is a reasonable test.",
    },
    {
      question: "Can my child do RBSE and IB tuition together?",
      answer:
        "Yes, if the week is planned honestly. Rajasthan Board work and IB work are marked in different ways, so the timetable must keep them apart. Many families keep one board as the main path and use tuition for a gap, like English writing or Maths reasoning. Tell us what you intend and we will recommend a workable load.",
    },
    {
      question: "Which IB subjects do Tonk district students ask about?",
      answer:
        "Mathematics, Physics, Chemistry and Biology are the most requested, then Economics and Business Management. Students who may sit JEE or NEET lean to the science group. Hindi is a common language course. We match tutors for any of these at HL or SL, and Core or Extended at IGCSE.",
    },
    {
      question: "Do tutors write the IA, Extended Essay or TOK essay?",
      answer:
        "No. A tutor will not write an Internal Assessment, Extended Essay, TOK essay or coursework. They explain how it is marked, help a student shape a question and comment on drafts. The ideas, data and wording remain the student's, which also protects against a malpractice ruling.",
    },
    {
      question: "Which IGCSE boards can you teach for?",
      answer:
        "We teach Cambridge IGCSE and Pearson Edexcel International GCSE. The codes differ, for example 0580 for Cambridge Mathematics and 4MA1 for Edexcel, so we confirm the entry before choosing a tutor. AS and A Level help exists for students continuing from IGCSE.",
    },
    {
      question: "Is Niwai's internet strong enough for live lessons?",
      answer:
        "A steady link of a few megabits handles video and a shared board. The market and highway edge usually have decent fibre or mobile data, while farm settlements can be uneven. When the line is weak we fall back to audio with screen sharing, and the free trial shows whether it holds.",
    },
    {
      question: "How do you cope with summer heat and power cuts?",
      answer:
        "We plan the day around them. Early evening or early morning works best in a Rajasthan summer, and a charged power bank or phone hotspot covers short cuts. If a cut ends a lesson early, the tutor reschedules the missed part, and we leave extra time in the weeks before the May papers.",
    },
    {
      question: "When do the exams happen and when should revision start?",
      answer:
        "IB main exams fall in May, and some candidates sit in November. IGCSE papers from both boards run in May-June and October-November. For a May paper, serious revision usually starts around November or December, and the last eight to ten weeks become a tight block. Your school or online provider gives the registered session.",
    },
    {
      question: "Is it worth starting in Class 8 or 9?",
      answer:
        "Often yes. Beginning in Class 8 or 9 leaves time to build written English, algebra and lab reasoning before the two-year course. Pupils from Hindi-medium primary classes gain particularly from regular English practice. Early lessons stay light and are about habits, not exam pressure.",
    },
    {
      question: "Will Indian universities accept the IB Diploma?",
      answer:
        "Broadly yes, because the Association of Indian Universities rates it as the same level as Class 12. Some universities take IB scores directly, central universities generally ask for CUET-UG, and professional courses add their own rules. Read the current admission notice before settling on subjects.",
    },
    {
      question: "What happens if my child and the tutor do not suit each other?",
      answer:
        "Tell us and we will line up another tutor with no awkwardness. The free first lesson is there to test the match, and a change later is easy. Teaching style matters as much as knowledge of the syllabus, so we ask how your child learns before suggesting anyone.",
    },
    {
      question: "Can a tutor explain things in Hindi?",
      answer:
        "Lessons are in English, as the papers are, but a tutor can restate a hard idea in Hindi when it eases a hesitant student. Mention the preference when you write and we will look for someone suitable. English confidence tends to grow fast once lessons are regular.",
    },
    {
      question: "How can I begin from Niwai?",
      answer:
        "Email support@ibgram.com or WhatsApp +91 7439 368 115 with the board, subject, level and free evenings. We answer with a shortlist and a time for a free trial lesson. After the trial, the fee and timetable reach you in writing and you decide when ready.",
    },
  ],

  internalLinks: [
    { label: "How IB tutoring works", href: "/ib-tutors/", description: "Where a tutor adds most in each IB programme." },
    { label: "IGCSE overview", href: "/igcse/", description: "Cambridge and Edexcel tiers and exam sessions." },
    { label: "Cities across India", href: "/india/", description: "The full list of places we teach online." },
    { label: "Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the core and how grades add up." },
    { label: "Middle Years Programme", href: "/programmes/myp/", description: "Criteria-based assessment and the Personal Project." },
    { label: "Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "Career-related Programme", href: "/programmes/cp/", description: "How the CP combines courses with career study." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Tutor profiles", href: "/tutors/", description: "Filter by subject, level and teaching history." },
    { label: "Entrance test preparation", href: "/admissions/test-prep/", description: "Fitting entrance exams around an international course." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us and book the free first lesson." },
    { label: "Tonk", href: "/tonk/", description: "The district headquarters, also taught online." },
    { label: "Jaipur", href: "/jaipur/", description: "The nearest large city with international schools." },
    { label: "Malpura", href: "/malpura/", description: "A nearby Tonk district town we serve online." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson in Niwai",
  closingBody:
    "Give us the board, subject, level and the hours your family can spare. A few tutor options come back with a time for a free lesson over video. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
