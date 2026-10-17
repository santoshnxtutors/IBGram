import type { CitySeoPage } from "../types";

/**
 * /karjat/ - IB and IGCSE tutoring page for Karjat, Raigad district, Maharashtra (the Mumbai suburban
 * railway terminus at the foot of the Bhor Ghat). No IB or Cambridge/Edexcel school is confirmed in
 * Karjat, so stripSchools is empty and clusters point to Panvel / Navi Mumbai, Mumbai and Pune using
 * names verified on sibling pages. Online only: in-person home tuition runs just in Gurugram and parts
 * of Delhi NCR.
 */
export const karjat: CitySeoPage = {
  slug: "karjat",
  countryName: "Karjat",
  countryNameLong: "Karjat, Raigad, Maharashtra",
  demonym: "Karjat",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings are set around the drenching June to September rains, Ganesh Chaturthi and Diwali, and the suburban train timings that shape commuting households",
  lastUpdated: "2026-09-21",
  geo: { latitude: 18.91, longitude: 73.32 },
  wikipedia: "https://en.wikipedia.org/wiki/Karjat,_Raigad",
  alternateNames: ["Karjat Raigad", "Karjat Maharashtra", "Karjat Mumbai"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Karjat | Online Private Tuition",
  metaDescription:
    "Private online IB and IGCSE tuition for Karjat students: DP, MYP, Cambridge and Edexcel, one tutor to one child, timed around trains and rain, free trial.",
  h1: "IB and IGCSE Tutors and Private Tuition at Home in Karjat",
  heroEyebrow: "IB & IGCSE ONLINE PRIVATE TUITION IN KARJAT",
  heroSubtitle:
    "Karjat is the stop where the Mumbai suburban line runs out and the Bhor Ghat begins, and plenty of homes here are split between Raigad evenings and a metropolitan workplace. A student on the IB or IGCSE gets private tuition at home through a live online class, with a tutor who has taught that very course. No tutor rings your bell in Karjat; house visits are confined to Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Karjat",
  imageAltText: "A Karjat student revising IB Chemistry with an online tutor on a laptop while rain falls outside the window",
  secondaryKeywords: [
    "IB tutor Karjat",
    "IGCSE tutor Karjat",
    "IB home tuition Karjat",
    "IGCSE home tuition Karjat",
    "IB private tuition Karjat",
    "IB Maths tutor Karjat",
    "IGCSE Maths tutor Karjat",
    "IB Physics tutor Karjat",
    "IB Chemistry tutor Karjat",
    "IB Biology tutor Karjat",
    "IB DP tutor Karjat",
    "IB MYP tutor Karjat",
    "IB PYP tutor Karjat",
    "IGCSE online tuition Karjat",
    "IB tutor Karjat Raigad",
    "IB tutor Neral Karjat",
    "online IB tuition near Mumbai Pune railway",
    "IGCSE tutor Raigad district",
  ],

  heroTrustPoints: [
    "A tutor who has taught your child's own IB subject and level, or IGCSE board, code and tier",
    "Every lesson is online; in-person tuition exists only in Gurugram and parts of Delhi NCR, so nobody comes to a Karjat home",
    "A free first lesson and a written rate before you decide",
    "Independent of the IB, Cambridge, Pearson and every school mentioned on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Every IB stage" },
    { value: "CAIE and Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "One clock" },
    { value: "Free trial", label: "Nothing paid first" },
  ],

  intro: {
    heading: "Online IB and IGCSE tuition for Karjat, the railway town at the foot of the Ghats",
    paragraphs: [
      "Karjat, in Raigad district, is a rail junction town of Marathi-speaking families, an expanding stock of second homes, and a film-set economy around the studios on its outskirts. Its schools run the Maharashtra State Board or CBSE. We have not found a Karjat school teaching the IB or a Cambridge or Edexcel IGCSE syllabus, and we do not name one.",
      "The households that ask about these curricula tend to be mobile ones. A parent may work in Mumbai or Navi Mumbai and have moved to Karjat for space and lower costs, leaving a child enrolled in an international school far away on the line. Another family may be preparing for a posting abroad. Another may simply expect the child to apply to universities overseas and want the right qualification in place.",
      "For all of them the missing piece is a tutor who knows the course. Online lessons supply one. Your child sits at a desk at home, a tutor from elsewhere in India appears on screen, and both work from the board's own past papers on a shared whiteboard. A short written record closes each class.",
      "Tutors teach, mark and advise. They do not write or amend an Internal Assessment, Extended Essay or coursework piece for a student.",
    ],
    bullets: [
      "Subjects from the PYP, MYP, DP and CP",
      "Cambridge and Pearson Edexcel IGCSE at every tier",
      "Live one-to-one lessons in Indian Standard Time",
      "A free first lesson, then a plan in writing",
      "No tutor visits in Karjat; in-person lessons exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "With no IB school in Karjat, the stage a child studies is bound to a campus elsewhere or to a coming move. The notes below reflect what Raigad families actually tell us, so the lessons begin from the true situation.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-12",
      description:
        "Children work through inquiry units that cross subject lines and finish with a pupil-led Exhibition. As there is no exam, a tutor strengthens English reading, number sense and the research habits the Exhibition draws on.",
      countryNote:
        "A Karjat child on the PYP is typically enrolled at a school in Navi Mumbai or Mumbai while living out on the line, or is being prepared for such a move.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Criteria, not a single paper, grade each MYP subject, and the Personal Project follows in the last year. The leap is from describing to explaining, which a tutor can model with worked examples.",
      countryNote:
        "Help from Karjat often supports a student who travels long hours to an MYP school and needs focused time at home.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, with Theory of Knowledge, an Extended Essay and CAS. Most written papers fall in May, with November for some schools.",
      countryNote:
        "Diploma requests from this belt mostly concern Mathematics, the sciences and English A, usually from a student who completed Class 10 in the state board or CBSE.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pairing of Diploma courses with career-related study and a short core. Few Indian schools offer it.",
      countryNote:
        "CP interest is rare in Karjat; where it arises, the tutoring is on the Diploma courses inside the pathway.",
    },
  ],

  subjectsIntro:
    "A Higher Level Physics student and a Standard Level Psychology student need different people, so each match starts with subject and level. Target sitting and current grade come next, and finally the tutor's open evenings.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof for engineering-bound students, with HL Paper 3 testing unfamiliar problems." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and technology, plus an Exploration whose topic should be fixed early." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves and fields, with an investigation marked on method and evaluation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, equilibrium and organic routes, with fast, confident use of the data booklet." },
    { name: "IB Biology", levels: "HL / SL", description: "Answering exactly what the command term asks, supported by basic statistics for the investigation." },
    { name: "IB Economics", levels: "HL / SL", description: "Labelled diagrams with live examples, plus HL data-response drills." },
    { name: "IB Business Management", levels: "HL / SL", description: "Theory applied to the case in the paper, with a research project on a real organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen analysis, comparative writing and the Individual Oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode, object thinking and a solution whose code and write-up agree." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies used precisely in extended responses that stay on the question." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems reasoning with ghat forests, rainfall and river flow as natural local examples." },
    { name: "IB Geography", levels: "HL / SL", description: "Case study depth, fieldwork that can be defended and evaluation in writing." },
    { name: "IB Marathi B", levels: "HL / SL", description: "Text types, register and a confident oral for students with strong home Marathi." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "No syllabus; sessions train the skill of arguing a knowledge question from both sides." },
  ],

  igcseSubjectsIntro:
    "The name IGCSE hides two boards with their own paper styles. Cambridge 0580 Extended and Edexcel 4MA1 Higher cannot be swapped for each other, so planning starts with board, code and tier, plus the target series: Cambridge in February-March, May-June or October-November, or Edexcel in January or the summer.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Speed in algebra and graphs, with every step of working shown." },
    { name: "IGCSE Additional Maths 0606", levels: "Grade 9-10", description: "Calculus and trigonometry early, a bridge to IB Mathematics HL." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson wording differs from Cambridge, so practise on Pearson papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Formula work, graph skills and the paper that stands in for practical exams." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole sums, electrolysis, organic reactions and experiment design on paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Inheritance, ecology and body systems, phrased as the mark scheme phrases them." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions and diagrams first, then evaluation." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Hand-tracing algorithms and writing pseudocode." },
    { name: "IGCSE First Language English 0500", levels: "Grade 9-10", description: "Directed writing, summary and description under time." },
    { name: "IGCSE Hindi (Second Language) 0549", levels: "Grade 9-10", description: "Reading and writing in correct register for Marathi speakers." },
  ],

  regionsTitle: "Karjat and the surrounding Raigad belt our online tutors serve",
  regionsIntro:
    "Lessons are on screen, so the places below describe daily rhythm, such as which train a parent catches, how the rains disturb the evening and where a family keeps ties. Several are neighbouring stations and villages on the same rail line.",
  regions: [
    { name: "Karjat station area", note: "The junction where the Mumbai suburban line, the Pune main line and the Khopoli branch meet; a hub for commuting households." },
    { name: "Karjat bazaar and old town", note: "The market core with long-settled Marathi families, local shops and state board schools." },
    { name: "Bhivpuri Road", note: "The station just before Karjat, near the Bhivpuri waterfall and hydroelectric site, with a quieter residential character." },
    { name: "Neral (nearby)", note: "The gateway to Matheran, where toy-train and tourist traffic shape the local economy and the school day." },
    { name: "Shelu and Vangani (nearby)", note: "Stations on the line towards Badlapur, growing with Mumbai commuters seeking cheaper housing." },
    { name: "Chowk and the studio side (nearby)", note: "The area towards Khopoli and the film studios, with seasonal and contract workers." },
    { name: "Kondana and the cave villages (nearby)", note: "Village settlements near the Buddhist caves, where students join lessons on home mobile or broadband." },
    { name: "Khopoli (nearby)", note: "An industrial town on the branch line with engineering colleges and professional households." },
    { name: "Lonavala and the ghat road (nearby)", note: "The hill station above the Bhor Ghat, an alternative route to Pune and a weekend base for many families." },
  ],

  schoolDisclaimer:
    "Our checks found no IB or IGCSE school in Karjat. The campuses below sit in other cities and appear purely as signposts. IB Gram operates independently of them and of the International Baccalaureate, Cambridge and Pearson.",
  schoolClusters: [
    {
      city: "Nearby: Panvel and Kharghar",
      note: "The closest Navi Mumbai cluster, reachable from Karjat by road or by changing trains, with several campuses teaching international programmes.",
      schools: ["Dr Pillai Global Academy, New Panvel", "Ryan Global School, Kharghar", "Saviors Global School, Kharghar"],
    },
    {
      city: "Nearby: Pune",
      note: "Reached by the Pune line over the Ghats, Pune holds several established IB campuses and suits families who want a residential or boarding option.",
      schools: ["Mahindra International School", "Indus International School, Pune"],
    },
    {
      city: "Karjat and Khalapur: state board and CBSE schools",
      note: "Local schooling follows the state board or CBSE. Families wanting IB or IGCSE content use tuition beside school or Cambridge private entry.",
      schools: [],
    },
  ],

  modesIntro:
    "In Karjat the lesson is always the same kind of thing: one tutor and one student, live on video. The three plans below vary only in pace. Tutors do not come to the house.",
  modes: [
    {
      title: "Weekly slot after the commute",
      description:
        "A fixed evening, scheduled after the student and any commuting parent are home, with the same tutor each week and papers shared on screen.",
      bullets: [
        "Specialists from across India",
        "MYP, DP and every IGCSE subject",
        "Shared whiteboard",
        "One consistent tutor",
      ],
    },
    {
      title: "A term plan with reviews",
      description:
        "A run of lessons with a written note after each and a longer review every few weeks. It helps a family juggling a distant school, private entry or a planned transfer.",
      bullets: [
        "A written note per class",
        "Review of marks against schemes",
        "Supports new IB arrivals",
        "Extra lessons before mocks",
      ],
    },
    {
      title: "Pre-exam sprint",
      description:
        "Several weeks of two or three lessons weekly, built around timed papers and prompt correction, kept clear of the wettest days and the festival breaks.",
      bullets: [
        "Real time limits",
        "Fast correction",
        "Avoids festival peaks",
        "Book three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Which Karjat families look for IB or IGCSE tutors?",
      paragraphs: [
        "Karjat has long been a commuter and weekend town. Its permanent population is Marathi-speaking and rooted in farming, trade and services, while a newer layer of professional households has moved out along the rail line from Mumbai, Navi Mumbai and Thane. IB and IGCSE schools are not found in the town itself, so the people who ask for tutors are a distinct minority.",
        "One group is commuting families who choose a Karjat home for space but whose children still attend an international school in Navi Mumbai. A tutor at home in the evening makes up for the lost hours in transit. A second group plans a relocation, and wants the child to arrive in a new city already at level. A third group is simply forward-planning for university abroad.",
        "A fourth group is the private candidate. Cambridge allows entry at approved exam centres, so a student can sit one or two IGCSE subjects without changing school.",
        "No such household finds a Karjat tutor who has taught these syllabuses. That absence is what this page is for.",
      ],
      table: {
        caption: "Why Karjat households raise the IB or IGCSE",
        columns: ["Situation", "Where the child studies", "What tuition covers"],
        rows: [
          ["Commuting parent, child in a Navi Mumbai school", "Panvel or Kharghar campus", "Evening support at home in weaker subjects"],
          ["Planned posting or relocation", "Karjat now, new city soon", "Syllabus alignment before the move"],
          ["University abroad in mind", "State board or CBSE school", "English-medium Maths and sciences with exam technique"],
          ["Private IGCSE entry", "Local school plus exam centre", "Teaching the whole course, then paper drills"],
        ],
      },
      bullets: [
        "No IB or IGCSE school is confirmed in Karjat",
        "Demand comes from commuters and planners",
        "Online tutors are not limited by the rail line",
        "Marking is identical to any other city",
      ],
    },
    {
      heading: "State Board, CBSE, IB and IGCSE: what actually changes for a Karjat student?",
      paragraphs: [
        "The Maharashtra State Board tests how faithfully a student reproduces the prescribed textbook, while IB and IGCSE test how well that knowledge is applied to something unfamiliar. A Karjat student who is near the top of an SSC class can still be surprised by a question that gives data, asks for an explanation and then asks for an evaluation.",
        "CBSE sits partway between, with more application but a fixed syllabus. IB and IGCSE add internal assessments or practical papers marked on published criteria. That means planning, drafting and revising become skills to be taught, not assumed.",
        "Language is a further layer for Marathi-medium students. Terms, command words and the full-sentence style of an answer are new, and the first weeks usually go to those.",
        "Mark schemes are public, and once understood the system becomes predictable. Many students end up preferring marks that are spread across coursework and papers to a single high-stakes board exam.",
      ],
      table: {
        caption: "Maharashtra boards set beside IB and IGCSE",
        columns: ["Feature", "State Board (SSC/HSC)", "CBSE", "IB / IGCSE"],
        rows: [
          ["Language", "Marathi or English medium", "English or Hindi", "English"],
          ["What earns marks", "Recall of the textbook", "Recall plus application", "Application and evaluation"],
          ["Internal assessment", "Light", "Moderate", "Substantial, criteria-marked"],
          ["Availability in Karjat", "Everywhere", "A few schools", "None confirmed"],
        ],
      },
      bullets: [
        "Command words decide marks",
        "Coursework teaches planning",
        "English subject vocabulary needs building",
        "A board switch is manageable with help",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Karjat student?",
      paragraphs: [
        "Fees are not posted on the site because they turn on four things: what is being taught, at what level, how seasoned the tutor is and how many sessions a week are planned. A quote in writing comes after the free trial and always before booking.",
        "Higher Level Mathematics and sciences generally cost more than Standard Level humanities since fewer tutors can teach them in depth. A tutor with years of classroom or examining experience asks for more than a newcomer. More lessons per week raise the total but often speed progress.",
        "Online delivery removes travel from the bill. For a Karjat family the alternative is usually a train to Panvel or Mumbai and a late return, which costs hours and energy even when the fare is small.",
        "If budget is limited, tell us early. A four-week plan on one weak topic, or a fortnightly lesson with self-study between, can be built.",
      ],
      bullets: [
        "A written quote arrives first",
        "Course, level, experience and frequency set the price",
        "No travel cost with online lessons",
        "Shorter plans exist for tighter budgets",
      ],
    },
    {
      heading: "Online tuition or a Mumbai-line coaching class: which suits Karjat?",
      paragraphs: [
        "Where IB and IGCSE are concerned, a live online tutor usually beats a class in Panvel or Mumbai. There is no two-hour round trip, and the tutor is chosen for syllabus experience instead of address.",
        "Classes close by prepare for SSC, HSC and entrance tests. A neighbourhood tutor may be wonderful at Marathi or general Mathematics but has probably never opened an IB Paper 3 or an Edexcel Higher paper. Studying alone suits the disciplined, though nobody marks the work.",
        "Rain is another factor. During the monsoon, the Karjat line can be disrupted by waterlogging and landslips on the ghat section, and a lesson that does not depend on a train is a lesson that still happens.",
        "Many families mix methods, with school for the core, online lessons for the hardest subject and revision on their own.",
      ],
      table: {
        caption: "Study options compared for a Karjat student",
        columns: ["Option", "IB or IGCSE knowledge", "Travel", "Feedback"],
        rows: [
          ["Live online private lessons", "Matched to the exact course", "None", "Marked to scheme with a note"],
          ["Coaching in Panvel or Mumbai", "Mostly boards and entrance exams", "Long train journey", "Group level"],
          ["Local private tutor", "Varies, rarely IB trained", "Short or none", "Depends on the individual"],
          ["Self-study", "Books and papers you gather", "None", "Little without a marker"],
        ],
      },
      bullets: [
        "Choose by syllabus experience",
        "Coaching seldom covers IB or Cambridge",
        "Self-study needs a marker",
        "Mixing methods is common",
      ],
    },
    {
      heading: "How do the Raigad rains and the festival calendar shape the school year in Karjat?",
      paragraphs: [
        "Diploma papers are sat in May and November. Cambridge runs IGCSE series in February-March, May-June and October-November; Edexcel does so in January and May-June. Mocks arrive in December or January, so the opening term and a half is where new content is taught.",
        "This is one of the wettest corners of Maharashtra. Between mid-June and September the rain can last for days, trains slow or halt and networks wobble. Plan spare slots for those months and keep a charged laptop plus a phone hotspot within reach.",
        "Ganesh Chaturthi in August or September, Diwali in October or November and Gudi Padwa in spring are the main breaks, and the summer in April and May is hot before the rains arrive. Matheran season and weekend tourism also fill the roads on Saturdays and Sundays.",
        "Whoever sits the November IB session should use the rainy months for intensive work; whoever sits in May should work hardest between October and February.",
      ],
      table: {
        caption: "Exam windows against Karjat's year",
        columns: ["Period", "Exam or school event", "Local effect in Karjat"],
        rows: [
          ["December-January", "IB mocks, Edexcel January series", "Cool, dry, good for revision"],
          ["February-March", "Cambridge Feb-March series, board exams", "Warming; school calendar tight"],
          ["April-May", "IB May exams, summer heat", "Hot; evening or early lessons"],
          ["June-September", "Monsoon, Ganesh Chaturthi, IB November preparation", "Heavy rain; train disruptions"],
          ["October-November", "Cambridge Oct-Nov series, Diwali", "Festival breaks; weather steadies"],
        ],
      },
      bullets: [
        "IB sits in May and November",
        "Keep spare slots for rain outages",
        "Ganeshotsav and Diwali are the main breaks",
        "Start intensives two to three months ahead",
      ],
    },
    {
      heading: "Where do IB and IGCSE students from Karjat go next?",
      paragraphs: [
        "Indian colleges generally accept the equivalence certificate that the Association of Indian Universities issues for the IB Diploma, and central universities select through CUET-UG. Maharashtra's MHT-CET and the national NEET decide state engineering and medical seats, so ask each year how they treat IB and IGCSE applicants.",
        "Mumbai's university colleges, ICT, VJTI and IIT Bombay are the nearby targets, with the University of Pune and COEP across the ghats. JEE Main expects Mathematics, Physics and Chemistry, while NEET wants Biology, Chemistry, Physics and English.",
        "Admissions teams in the UK, US, Canada, Australia and Europe recognise the IB Diploma, and IGCSE grades matter when followed by A Levels or the IB. Subject choices made now can keep both Indian and foreign routes open.",
        "A plan begun in Class 8 or 9 costs far less stress than one begun after Class 10 results.",
      ],
      table: {
        caption: "Pathways from IB or IGCSE for a Karjat student",
        columns: ["Goal", "What is needed", "How a tutor helps"],
        rows: [
          ["Indian universities", "AIU certificate, plus CUET-UG for central universities", "Stronger papers and CUET readiness"],
          ["Engineering through JEE Main or the state CET", "Mathematics, Physics, Chemistry", "HL Maths and Physics with overlap planned"],
          ["Medicine via NEET", "Biology, Chemistry, Physics, English", "Strong HL Biology and Chemistry teaching"],
          ["Study abroad", "Predicted Diploma points, or IGCSE results followed by A Levels", "Focused work towards offer grades"],
        ],
      },
      bullets: [
        "The AIU certificate is the usual door",
        "Check MHT-CET, JEE and NEET rules every year",
        "Overseas universities read IB points",
        "Plan subjects early",
      ],
    },
    {
      heading: "How does online IB Maths and science tutoring work for a student in Karjat?",
      paragraphs: [
        "IB Mathematics comes in two courses, Analysis and Approaches, which favours algebra and proof, and Applications and Interpretation, which favours data and modelling, each at Higher or Standard Level. We ask about the intended degree before the first lesson because that settles the choice.",
        "For the sciences, a lesson often means one past paper dissected: multiple choice in Paper 1, structured questions in Paper 2, and the independent investigation alongside. Scripts are marked against the official scheme and each lost half mark is explained.",
        "For the investigation the tutor can advise on picking a measurable question, planning a method that repeats and handling uncertainty. The report and data stay entirely the student's work.",
        "IGCSE sciences use the same approach with extra attention to the alternative-to-practical paper, suiting students with limited home lab access.",
      ],
      bullets: [
        "Choose the maths course after discussing career aims",
        "Scripts marked one line at a time",
        "Investigation advice only",
        "Alternative-to-practical skills trained for IGCSE",
      ],
    },
  ],

  process: [
    { title: "Send the details", description: "Share programme, subject, level, board and class on WhatsApp at +91 7439 368 115 or at support@ibgram.com." },
    { title: "Review a shortlist", description: "We propose tutors who have taught that course and list their free evenings." },
    { title: "Try a free lesson", description: "Your child attends a genuine session online with no payment." },
    { title: "Read the plan and rate", description: "A schedule and quote come in writing before you book anything." },
    { title: "Track progress", description: "Each class ends with a short note, and a replacement tutor can be requested if things do not click." },
  ],

  whyPoints: [
    { title: "Syllabus-matched tutors", description: "Chosen for the exact course your child sits." },
    { title: "Honest about format", description: "Online only in Karjat; no visit is implied." },
    { title: "Rain-proof planning", description: "Extra slots and a fallback for a dropped connection are planned in advance." },
    { title: "Written notes", description: "Each class is logged with its topics and tasks." },
    { title: "Easy tutor change", description: "A poor fit is fixed quickly." },
    { title: "Coaching, not ghostwriting", description: "Tutors never write a student's coursework." },
  ],

  faqs: [
    {
      question: "Can I find an IB or IGCSE tutor in Karjat?",
      answer:
        "As far as we know, nobody who has taught these syllabuses lives in Karjat, so lessons are held online. A specialist from another part of India teaches your child live, picked for subject, level and board, and the first session costs nothing. No tutor calls at homes in Karjat.",
    },
    {
      question: "Do you offer IB or IGCSE home tuition in Karjat?",
      answer:
        "The learning happens at your own desk, with the tutor on a laptop screen. In-person visits are limited to Gurugram and parts of Delhi NCR, and Karjat is outside that area. A laptop, a headset and a steady connection are enough for each private lesson.",
    },
    {
      question: "Is there an IB school in Karjat or Raigad?",
      answer:
        "None that we could confirm in Karjat. Neighbourhood schools follow the state board or CBSE, and the closest international campuses we know of are in Panvel, Kharghar, Mumbai and Pune. Check with any school directly before relying on what it teaches.",
    },
    {
      question: "Can my child take IGCSE as a private candidate from Karjat?",
      answer:
        "Yes, through an approved exam centre, which is usually in a bigger city such as Navi Mumbai or Pune. The family arranges the centre and entry; a tutor does the teaching. Entry dates are fixed.",
    },
    {
      question: "How much does a tutor cost?",
      answer:
        "Prices are not listed. The rate depends on the course, level, tutor experience and number of lessons a week, and arrives in writing after the free trial. There is no travel charge for online lessons.",
    },
    {
      question: "Which subjects do commuting families ask for?",
      answer:
        "Mathematics and the three sciences top the list, with Economics, Business and English A behind them. Parents typically choose the subject in which a long school day leaves the least time for questions.",
    },
    {
      question: "Will a tutor write my child's coursework?",
      answer:
        "No. What a tutor does is unpack the criteria, show what makes a topic workable and read a draft against the rubric. Authoring or supplying material for an IA, Extended Essay, TOK essay or coursework lies outside the service, because the submission has to be your child's own.",
    },
    {
      question: "My child comes home late from school. Can lessons be late in the evening?",
      answer:
        "Yes, within reason. Most tutors offer slots between early evening and about nine at night, and weekend mornings are common. We choose a time after the commute, food and rest, because a tired child learns little.",
    },
    {
      question: "Cambridge or Edexcel: which should we choose?",
      answer:
        "Normally the school or the exam centre makes the call, as each candidate sits the board they are entered for. Given a free choice, Cambridge has more centres and an autumn series, and Edexcel offers a January one.",
    },
    {
      question: "When should we start?",
      answer:
        "Begin at the start of Class 11 for the Diploma, or a year sooner for Mathematics where Class 10 felt shaky. MYP learners can join whenever. Final-year students can still take an intensive, though earlier is gentler.",
    },
    {
      question: "How long is a lesson?",
      answer:
        "Lessons run sixty to ninety minutes, one or two a week, with an extra pre-exam session. Independent practice of a few hours per subject is expected, and we help weave it around school and the journey home.",
    },
    {
      question: "What if rain cuts the power or network?",
      answer:
        "If the line fails we shift the time or carry on by audio with a shared document. During the monsoon, a charged laptop and a phone hotspot are wise. Video and a shared board need only a few Mbps.",
    },
    {
      question: "Can IB be combined with MHT-CET, JEE or NEET?",
      answer:
        "Doable, but heavy. IB Mathematics HL and Physics HL share content with JEE; Biology HL shares with NEET. Rules move, so confirm them with the exam body, and let the tutor sort the topics that earn credit twice.",
    },
    {
      question: "How do we start with IB Gram?",
      answer:
        "Write on WhatsApp (+91 7439 368 115) or by email (support@ibgram.com), giving the programme, subject, level, board and class. We reply with a shortlist and a trial time, and continuing is entirely up to you.",
    },
    {
      question: "Can we swap tutors?",
      answer:
        "Yes. Mention it after the trial or any later class, and we offer a tutor with a comparable profile and pass on the earlier notes.",
    },
    {
      question: "Is IB Gram linked with the IB, Cambridge or Pearson?",
      answer:
        "No, we are an independent tutoring business. There is no association with the International Baccalaureate, Cambridge, Pearson or any school on this page, and school names are given for orientation.",
    },
  ],

  tutorsIntro:
    "Our tutors live in India and teach live on Indian Standard Time, which matches the school day in Karjat. The choice rests on course and not postcode, and none of them travels to homes here.",

  internalLinks: [
    { label: "Online IB and IGCSE tutoring nationwide", href: "/india/", description: "Online lessons for families elsewhere in India." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Tutors for Diploma, MYP and PYP subjects." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel courses by tier." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How subjects, core and exams fit together." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "How MYP criteria and the Personal Project work." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Learning by inquiry for the youngest." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "Choosing between the two IB maths courses." },
    { label: "Meet the tutors", href: "/tutors/", description: "Tutor profiles by subject." },
    { label: "Home tuition in Gurugram", href: "/gurgaon/", description: "Gurugram, where in-person visits are offered." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Questions, or booking the trial." },
    { label: "Tutors in Panvel", href: "/panvel/", description: "The Navi Mumbai edge with nearby international campuses." },
    { label: "Tutors in Pen", href: "/pen/", description: "Another Raigad district town with similar context." },
  ],

  closingHeading: "Start with a free IB or IGCSE lesson in Karjat",
  closingBody:
    "Tell us the course, level and class. In return you get a tutor who has taught it, an hour that still works once the train is home, a free first lesson and a written plan, all delivered online at your own desk. Our email is support@ibgram.com and our WhatsApp number +91 7439 368 115.",
};
