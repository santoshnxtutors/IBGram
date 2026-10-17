import type { CitySeoPage } from "../types";

/**
 * Sira (Tumakuru district, Karnataka), a taluk town on NH48 roughly 120 km from Bengaluru.
 * No IB or Cambridge/Edexcel school in Sira was confirmed (Wikipedia and directory checks), so
 * stripSchools is empty and the clusters point honestly to Tumakuru and Bengaluru, reusing names
 * already on the Bengaluru page.
 */
export const sira: CitySeoPage = {
  slug: "sira",
  countryName: "Sira",
  countryNameLong: "Sira, Karnataka",
  demonym: "Sira",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings after school and tuition-free Sundays, with lighter weeks around Ugadi, Ganesha Chaturthi and Deepavali",
  lastUpdated: "2026-09-21",
  state: "Karnataka",
  stateCode: "IN-KA",
  geo: { latitude: 13.7411, longitude: 76.9047 },
  alternateNames: ["Sira Tumkur", "Sira Tumakuru", "Sira taluk", "Sira town Karnataka"],
  wikipedia: "https://en.wikipedia.org/wiki/Sira,_Karnataka",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sira | Online Home Tuition, Karnataka",
  metaDescription:
    "IB and IGCSE tutors in Sira, Tumakuru district: live one-to-one online lessons for PYP, MYP, DP and Cambridge or Edexcel IGCSE, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sira, Karnataka",
  heroEyebrow: "IB & IGCSE ONE-TO-ONE TUITION FOR SIRA, TUMAKURU DISTRICT",
  heroSubtitle:
    "Looking for home tuition in Sira for an IB or IGCSE student? Lessons here are private and live, taken from your own study table over a video call, because tutors do not visit homes in Sira. A specialist in Maths, the sciences or English is matched to the syllabus, and the weekly slot is fixed around a Kannada-medium or CBSE school day.",
  primaryKeyword: "IB and IGCSE tutors in Sira",
  imageAltText: "A Sira student at a study table at home in a live online IB Mathematics lesson with a tutor",
  secondaryKeywords: [
    "IB tutor Sira",
    "IGCSE tutor Sira",
    "IB home tuition Sira",
    "IGCSE home tuition Sira",
    "IB private tuition Sira",
    "IB Maths tutor Sira",
    "IGCSE Maths tutor Sira",
    "IB Physics tutor Sira",
    "IB Chemistry tutor Sira",
    "IB Biology tutor Sira",
    "IB DP tutor Sira",
    "IB MYP tutor Sira",
    "IB PYP tutor Sira",
    "IGCSE online tuition Sira",
    "IB tutor Sira Tumkur",
    "IGCSE tutor Sira Tumakuru",
    "online IB tutor Tumakuru district",
    "Cambridge IGCSE tutor Sira Karnataka",
    "Edexcel IGCSE tutor Sira",
    "IB tutor Sira Gate",
    "IB Economics tutor Sira",
    "IGCSE Additional Maths tutor Sira",
  ],

  heroTrustPoints: [
    "Every lesson is live and private, taught by video to one student at a time",
    "Tutors are chosen for the exact board, subject code and level, not just the subject name",
    "A free trial lesson comes before any commitment, with a written note after each session",
    "IB Gram is an independent service, unconnected to any school, board or exam body named here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards" },
    { value: "Online, one-to-one", label: "Format for Sira" },
    { value: "Free trial", label: "Before any fee" },
  ],

  intro: {
    heading: "An international curriculum for a taluk town on the Pune highway",
    paragraphs: [
      "Sira sits on National Highway 48 in Tumakuru district, about 120 km from Bengaluru, and it carries the confidence of a place that was once a provincial capital. In the early 1700s it served as the seat of the Sira Subah, and the old Jumma Masjid and fort remnants still mark that past. Today it is a taluk headquarters with a municipal council, a market that serves farms for miles around, and a population of a little over fifty-seven thousand. Schools in town follow the Karnataka state syllabus or CBSE. We found no school in Sira that is confirmed to teach the IB or a Cambridge or Edexcel IGCSE course.",
      "That absence is the reason families call. A parent in Sira may have a child enrolled at an IB or IGCSE school in Bengaluru, may be planning a move, or may simply want a child to sit an international qualification through an exam centre later. Some are returning from Gulf or European postings to family land near Sira. Others work in Bengaluru's technology sector and keep a home here. For each of these households, IB and IGCSE tutors in Sira only make sense as online tutors, since no local classroom offers the material.",
      "To be plain about the format: IB Gram tutors do not come to homes in Sira. In-person home visits run only in Gurugram and parts of Delhi NCR. What a Sira family gets is private tuition from home, done online, with a tutor who is teaching live, marking work, and adjusting the pace for one child. The tutor is based in India and teaches in Indian Standard Time, so evening lessons line up with the end of a school day.",
      "Tutors here coach and explain. They do not write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework for students. IB Gram is an independent tutoring service with no link to the International Baccalaureate, Cambridge, Pearson Edexcel or any school named on this page.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP tutoring through live video from the first lesson",
      "Cambridge and Edexcel IGCSE at Core, Extended, Foundation and Higher tiers",
      "Private tuition from your own home, delivered online, with no tutor travelling to Sira",
      "A free trial, then a written plan you can approve, change or decline",
    ],
  },

  programmesIntro:
    "Sira students meet international programmes mostly through a Bengaluru school, a relocation plan or an exam-centre route. Here is what each stage involves and how a tutor helps from a distance.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Children work through transdisciplinary units built around a central idea, asking questions, researching and reflecting, and the last year ends with a pupil-led Exhibition.",
      countryNote:
        "A child who speaks Kannada at home and studies English at school often needs help turning spoken curiosity into written sentences, so tutors spend early sessions on reading aloud and short paragraphs.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are assessed against published criteria, with interdisciplinary units and a Personal Project at the end that the student plans, carries out and records.",
      countryNote:
        "Students arriving from a state-board school usually find criterion-based marking unfamiliar, so a tutor shows marked sample answers and explains why each band was awarded.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three or four of them at Higher Level, sit alongside the Extended Essay, Theory of Knowledge and Creativity, Activity and Service. External papers are written in May or November.",
      countryNote:
        "With no DP school in town, Sira candidates are nearly always Bengaluru boarders, day scholars from a family flat there, or private candidates, and each needs a tutor who knows the assessment objectives thoroughly.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses are combined with a career-related study and a reflective project, which suits students who want applied skills alongside academic subjects.",
      countryNote:
        "CP is offered by very few schools anywhere near Sira, so this stage is tutored mainly for students enrolled elsewhere who need help with the Diploma-level courses inside it.",
    },
  ],

  subjectsIntro:
    "These are the IB subjects Sira families ask about most often. Each tutor is matched for depth in the course and for patience with a student who may be the only one in town taking it.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus, vectors and proof, with timed paper practice and a structured plan for the Exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator fluency, a common choice for students heading into commerce, management or biology." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through to fields and quantum ideas, practised with data-booklet questions and a workable investigation using household equipment." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, energetics, kinetics and organic reactions, with mole calculations drilled until they stop being a worry." },
    { name: "IB Biology", levels: "HL / SL", description: "From cells to ecology, with case studies that can draw on the dryland farming and coconut belt around Sira for investigation ideas." },
    { name: "IB Economics", levels: "HL / SL", description: "Microeconomics, macroeconomics and development, with agricultural markets and rural credit as natural worked examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study analysis and the Internal Assessment research project, with Karnataka small-business examples." },
    { name: "IB English A: Language & Literature", levels: "HL / SL", description: "Paper 1 textual analysis and Paper 2 essays, plus the oral commentary and the individual oral." },
    { name: "IB English B", levels: "HL / SL", description: "Language acquisition for students whose first language is Kannada, Urdu or Hindi, focused on fluent writing and listening." },
    { name: "IB Kannada and Hindi A/B", levels: "SL", description: "Literature and language study for students who want their mother tongue recognised in the Diploma." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming in Java or Python, databases and networks, relevant for a student with a Bengaluru technology household." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches to behaviour, research methods and the experimental Internal Assessment." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and essay technique for the twentieth-century world history topics." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion of knowledge questions and planning of the exhibition, coached without writing any student work." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Edexcel IGCSE suit students in Sira who are preparing for an overseas school, moving to a school with an international section, or sitting papers at an approved exam centre in Bengaluru. Subject codes and tiers are checked with the family before any lesson begins.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics at the tier the student is entered for, with past-paper routines." },
    { name: "IGCSE Additional Mathematics", levels: "Extended", description: "Calculus and functions in depth, a good bridge to A Level or IB Maths Analysis." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, electricity, thermal physics and waves, with practical-paper and alternative-to-practical support." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Bonding, stoichiometry, rates and organic chemistry, with careful practice on calculations." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, transport, inheritance and ecosystems, with data-handling questions." },
    { name: "IGCSE English as a First Language", levels: "Extended", description: "Directed writing, composition and reading comprehension with marked practice scripts." },
    { name: "IGCSE English as a Second Language", levels: "Core / Extended", description: "Reading, writing, listening and speaking for students who use Kannada or Hindi at home." },
    { name: "IGCSE Computer Science", levels: "Extended", description: "Theory and pseudocode, with a steady programming routine in Python." },
    { name: "IGCSE Business Studies", levels: "Core / Extended", description: "Business activity, marketing, finance and case-study technique." },
    { name: "IGCSE Economics", levels: "Extended", description: "Basic economic problem, markets and government policy with data-response practice." },
    { name: "IGCSE Hindi and Kannada as Foreign Language", levels: "Core", description: "Reading and writing support for families who want a home language on the certificate." },
  ],

  tutorsIntro:
    "These tutors teach IB and IGCSE live over video to Sira students. Each is matched to the syllabus and level before a trial lesson, and none travels to homes in Sira.",
  regionsTitle: "Sira neighbourhoods and what they mean for lesson timing",
  regionsIntro:
    "Because every lesson is online, the neighbourhood matters only for school end times, bus routes and how steady the broadband is. These notes help us plan a slot that holds through the year.",
  regions: [
    { name: "Sira Gate", note: "The junction area toward Tumakuru, where several families commute to the city for work; evening slots after 6 pm suit parents who return late." },
    { name: "Kote area (old fort quarter)", note: "Dense lanes near the old fort remnants; broadband is usually fine, and students here often attend the older government and aided schools." },
    { name: "Jumma Masjid Road", note: "A central market-facing stretch; shopkeeping families keep irregular hours, so Sunday afternoon slots are popular." },
    { name: "Bus Stand Road", note: "The busiest corridor, where bus timings shape school arrival; lessons are best fixed at least an hour after school ends." },
    { name: "Hospital Road", note: "Home to doctors' and teachers' families, several of whom ask about NEET-eligible IB Biology and Chemistry." },
    { name: "Basaveshwara Nagar", note: "A residential extension where newer houses have fibre or strong mobile data, useful for steady video lessons." },
    { name: "Kallambella Road", note: "Leads toward Kallambella and the farmland beyond; farming families often prefer early-morning slots before field work." },
    { name: "Hulikunte and Kasaba surroundings", note: "Villages within reach of town where students travel in by bus; lessons happen after they return home, with a plan for power cuts." },
    { name: "Bangalore Road (NH48 side)", note: "Families with relatives in Bengaluru, some with children in boarding there, who join weekend lessons from either address." },
    { name: "Industrial and APMC yard area", note: "Trader households near the produce market; tutors allow flexible rescheduling during busy arrival days." },
  ],

  schoolClusters: [
    {
      city: "In Sira itself",
      note: "We could not confirm any school in Sira teaching the IB or a Cambridge or Edexcel IGCSE syllabus. Local schools follow the Karnataka state syllabus or CBSE, which is why an online tutor is the main route.",
      schools: [],
    },
    {
      city: "Nearby: Bengaluru",
      note: "About 120 km down NH48, Bengaluru has the nearest concentration of IB and IGCSE campuses. Families in Sira who enrol a child there usually arrange a boarding seat or a second address in the city. Names below are also listed on our Bengaluru page.",
      schools: ["Stonehill International School", "Greenwood High International School", "Inventure Academy", "Indus International School, Bengaluru"],
    },
    {
      city: "Nearby: Bengaluru (other IB campuses)",
      note: "A further set of Bengaluru schools with IB offerings that Sira families shortlist when comparing fees, distance and boarding.",
      schools: ["Canadian International School, Bengaluru", "Trio World Academy", "Candor International School", "The International School Bangalore"],
    },
    {
      city: "Nearby: Tumakuru",
      note: "The district headquarters, roughly 55 km away, is where most Sira families go for higher studies and competitive coaching. We have no confirmed IB or IGCSE school to list there and will not guess.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "Schools are named only to show where international curricula are offered in the wider region. IB Gram is an independent tutoring service and is not affiliated with, endorsed by, or acting for any school, the IB, Cambridge or Pearson, and a school's appearance here does not mean it recommends us.",

  modesIntro:
    "Sira families can choose the rhythm that suits a household on a farm, in a shop or in a government job. All three modes are live, scheduled and taught to one student at a time.",
  modes: [
    {
      title: "Online one-to-one after school",
      description:
        "A fixed weekly evening slot, the closest thing to classic home tuition that can reach Sira. The student sits at a desk at home with a laptop, and the tutor teaches live.",
      bullets: [
        "Weekday slots after school, or Sunday daytime",
        "Shared digital whiteboard for working out problems",
        "Short written note after each lesson for parents",
      ],
    },
    {
      title: "Exam-season intensive",
      description:
        "Two or three lessons a week in the six to eight weeks before a session, built around timed past papers and marked corrections.",
      bullets: [
        "Targeted to the May or November window",
        "Paper-by-paper plans for IB or IGCSE components",
        "Extra revision blocks that avoid harvest and festival days",
      ],
    },
    {
      title: "Bridge and catch-up course",
      description:
        "For students changing from the state board or CBSE into an IB or IGCSE school, usually over a summer, to cover the gaps before term begins.",
      bullets: [
        "Diagnostic lesson to locate real gaps",
        "English writing and command-term practice",
        "Steady pacing for a child adjusting to a new board",
      ],
    },
  ],

  sections: [
    {
      heading: "Who looks for IB and IGCSE tutors in Sira, and why?",
      paragraphs: [
        "Families who search for IB and IGCSE tutors in Sira tend to fall into a few groups, and none of them is large. The first group has children at a Bengaluru international school, where the child boards during the week and comes home to Sira for weekends and holidays. These parents want weekend lessons to continue without the child losing a week of momentum. The second group is planning a move, either to Bengaluru or abroad, and wants the child to arrive with the new board's vocabulary already familiar.",
        "A third group is the returning-family case. A couple who worked in the Gulf or in Europe comes back to land or a business near Sira, and the children have spent years on Cambridge or IB curricula. The local schools offer a different board, and switching mid-stream can cost a year of progress. Continuing with an online tutor keeps the syllabus intact while the family decides where to settle.",
        "A fourth group is simply ambitious. A student at a good state-board or CBSE school hears of IGCSE Mathematics or IB Biology, wants the rigour, and plans to sit papers as a private candidate at an exam centre in a larger city. These students need a tutor who can explain the exam board's expectations from scratch rather than assume a classroom has already done so.",
        "What all four groups share is that distance from an international classroom is the obstacle. A tutor in a city can help only by video, and a good one makes the video lesson feel like a desk beside the student, with work written out live and questions asked constantly. The practical detail parents mention most is reliability: a lesson that starts on time every week matters more than a famous name.",
        "A fifth, quieter reason is comparison. Some Sira parents who have no plan to change boards still want to see what an international syllabus asks of a child. A free trial lesson in IGCSE Maths or IB English lets them watch the style of questioning before deciding anything, with no obligation.",
      ],
      bullets: [
        "Bengaluru boarders who come home to Sira at weekends",
        "Families relocating to Bengaluru, the Gulf, the UK or elsewhere",
        "Returning families whose children have studied Cambridge or IB abroad",
        "Private candidates preparing IGCSE papers for an exam centre",
      ],
    },
    {
      heading: "Karnataka state board, CBSE, IB or IGCSE: how do they differ for a Sira student?",
      paragraphs: [
        "The Karnataka state syllabus, CBSE, the IB and IGCSE ask different things of a child, and the contrast is sharper in a taluk town where the first two dominate. The state board, examined through the SSLC in Class 10 and the second pre-university course in Class 12, rewards accurate recall of the textbook and is taught largely in Kannada or English medium. CBSE is also textbook-led, with a national reach and a steady link to JEE and NEET.",
        "The IB leans toward explanation and transfer. A Diploma student is asked to apply a concept to an unfamiliar case, to write structured arguments in Economics or History, and to carry out an internal investigation in science. Marks are awarded against criteria rather than a fixed answer key. IGCSE sits between the two: content-heavy like a national board, yet set in command words such as explain, evaluate and suggest, with tiers that let a student aim for a realistic ceiling.",
        "Language is the practical gap for many Sira children. Most do their daily thinking in Kannada, and an international paper expects extended English prose under time pressure. A tutor can help by teaching paragraph structure, showing how marks are earned for a clear chain of reasoning, and giving fast feedback on each attempt. Maths is usually less affected, because the symbols carry over, but the wording of problems needs attention.",
        "The table sets the four side by side. It is a general guide, not a statement about any single school.",
      ],
      table: {
        caption: "Comparing the boards a Sira family is likely to weigh",
        columns: ["Feature", "Karnataka state board", "CBSE", "IB (PYP, MYP, DP)", "IGCSE (Cambridge / Edexcel)"],
        rows: [
          ["Medium in Sira schools", "Kannada or English", "Mostly English", "English, with mother-tongue language courses", "English"],
          ["Style of assessment", "Textbook recall, short and long answers", "Textbook and application questions", "Criteria-based, applied and investigative", "Command-word papers with tiers"],
          ["Key external exam", "SSLC, second PUC", "Class 10 and 12 board exams", "Diploma exams in May or November", "May-June or October-November series"],
          ["Usual entrance link", "KCET, NEET, state routes", "JEE, NEET, CUET-UG", "Checked for AIU equivalence, CUET-UG, overseas", "Bridge to A Level, IB or overseas schools"],
          ["Availability near Sira", "Widely available", "Available in town", "No confirmed school in Sira", "No confirmed school in Sira"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost for a family in Sira?",
      paragraphs: [
        "Cost questions come early, and they deserve straight answers. IB Gram does not publish prices, and rates are quoted in writing before any booking, so a family can see exactly what is proposed before agreeing. A Sira family should know what actually moves the number, so that two quotes can be compared fairly.",
        "The biggest factor is the subject and level. IB Maths Analysis HL or IGCSE Additional Mathematics asks for a tutor with real depth, and depth costs more than general homework support in Class 6. The second factor is the tutor's experience with the exact board: someone who has marked IB papers or taught the Cambridge 0580 syllabus for years brings a different kind of value than a generalist. Third is frequency. One lesson a week is a steady support, while three a week before an exam is a different commitment.",
        "Format also matters. A private one-to-one lesson costs more per hour than a small group, but for a student who is behind or racing ahead, the personal attention is the point. Because Sira has no local specialist pool, comparing with Tumakuru or Bengaluru home tutors can mislead: those tutors charge for travel time and a local premium that online tuition does not carry.",
        "Parents sometimes ask about a cheaper route through recorded lessons. Recorded material is useful for revision, but it cannot notice where a particular child is confused. Our free trial lesson lets a family judge whether live one-to-one teaching makes a visible difference before any money is involved.",
        "If budget is tight, a sensible plan is to start with the subject that worries the student most, run it for a term, and review the tutor's written notes before adding another subject. A tutor can also plan a short intensive instead of a year-long commitment when only a particular paper needs attention.",
      ],
      bullets: [
        "Subject and level (HL sciences and Maths cost more than foundation topics)",
        "Tutor experience with the exact board and syllabus code",
        "Lessons per week and length of the course",
        "One-to-one versus a shared small group",
      ],
    },
    {
      heading: "Online home tuition, Sira coaching centres, private home tutors or self-study?",
      paragraphs: [
        "Sira has coaching classes and private tutors, mostly for the state board, CBSE and entrance exams. None that we could confirm is built around IB or IGCSE, which is an honest gap rather than a criticism. A centre that teaches Class 10 state-board Science to forty students cannot easily switch to a command-word IGCSE Chemistry paper for the one child who needs it.",
        "Online one-to-one tuition closes that gap. The tutor can be a former IB examiner or a long-time IGCSE teacher located anywhere in India, and the lesson is shaped around a single student's syllabus and weaknesses. Because it happens from home, travel to Tumakuru or Bengaluru is avoided, which for a school-going child is a meaningful saving in hours and fatigue.",
        "Self-study has its place. Past papers, examiner reports and the official subject guides are free and worth using. The limitation is feedback: a student can mark a multiple-choice paper alone, but cannot easily judge whether an essay reaches the top band. A tutor who marks and explains fills that loop.",
        "The table below compares the four options for a Sira student on the points parents raise most often. It does not rank any provider.",
      ],
      table: {
        caption: "Four ways a Sira student can prepare for IB or IGCSE",
        columns: ["Option", "Fit for IB / IGCSE", "Travel needed", "Personal attention", "Main limit"],
        rows: [
          ["Online one-to-one tuition", "Tutor chosen for the exact syllabus", "None, lesson is at home", "Full, one student per lesson", "Needs steady internet and a quiet desk"],
          ["Local coaching centre", "Mostly state board, CBSE and entrance exams", "Daily trip within Sira", "Shared among a batch", "Rarely covers international papers"],
          ["Private tutor in town", "Depends on the individual", "Tutor or student travels locally", "Good if the tutor knows the board", "Few with IB or IGCSE experience"],
          ["Self-study with past papers", "Excellent materials are free", "None", "None unless reviewed by someone", "No feedback on essays or methods"],
        ],
      },
    },
    {
      heading: "When are the IB and IGCSE exams, and how does the Sira year fit around them?",
      paragraphs: [
        "IB Diploma exams run in May and November, and IGCSE has a May-June and an October-November series, with a small number of centres also using January or March sessions for specific boards. Karnataka schools start a new academic year around June, finishing in March or April, so a student who moves between a state-board school and an international one has to shuffle several timelines.",
        "Sira's local calendar brings its own rhythm. Ugadi in March or April, Ganesha Chaturthi in late summer, Dasara in October and Deepavali soon after all cut into the weeks that matter. The farming seasons of the surrounding dryland belt also pull family attention, with sowing and harvest times leaving some households short of evenings. Tutors plan around these by fixing slots in advance and keeping spare sessions for make-ups.",
        "Weather is moderate but not absent. The south-west monsoon is light here compared with the coast, yet Sira can see heavy late showers in the north-east monsoon weeks of October and November. Broadband and power can wobble in those weeks, so lessons in those windows should have a plan B, such as a phone hotspot or a rescheduled slot.",
        "The table lays out a typical year for a Sira student sitting an international exam. Dates for a particular school or centre must be confirmed with that school or centre, and registration deadlines are set by the exam board.",
      ],
      table: {
        caption: "A typical exam-year calendar for a Sira student",
        columns: ["Period", "Academic activity", "Local factor in Sira", "Tutoring focus"],
        rows: [
          ["June to August", "New year begins, first units", "Sowing season in surrounding farms", "Settling routine, building foundations"],
          ["September to October", "Mid-year assessments, mock papers", "Ganesha Chaturthi, Dasara holidays", "Past-paper practice and gap repair"],
          ["November to January", "November IB and IGCSE sessions, preparation for year-end", "Deepavali and heavier north-east monsoon showers", "Exam technique, backup power and data plans"],
          ["February to April", "Final revision, Indian board exams", "Ugadi, hotter days begin", "Timed papers and revision cycles"],
          ["May to June", "May IB and IGCSE examination series", "Peak summer heat", "Morning-friendly slots, rest days between papers"],
        ],
      },
    },
    {
      heading: "Which universities can a Sira student reach with IB or IGCSE?",
      paragraphs: [
        "An IB Diploma is broadly recognised by Indian universities once the Association of Indian Universities issues an equivalence certificate, and many students use it to apply through CUET-UG to central universities. For engineering and medicine, JEE Main and NEET-UG set their own eligibility rules, and IB or IGCSE students need to check the subject combinations accepted for each exam. Physics, Chemistry and Mathematics or Biology are the usual requirement, and English is expected.",
        "From Sira, the closest established campuses are in Tumakuru, where Siddaganga Institute of Technology and Tumkur University are well known, and in Bengaluru, which has a dense group of private universities, engineering colleges and research institutes. A Sira student aiming for one of those will weigh the IB or IGCSE route against the state route of KCET, which has its own eligibility conditions for Karnataka domicile and board status.",
        "Study abroad is the other path that makes the IB attractive. UK universities specify grades in HL subjects, and US institutions look at the whole Diploma and predicted scores. Canada, Australia, Singapore and Germany use similar signals. IGCSE alone usually leads into A Level, IB Diploma or a foundation year rather than directly into a degree.",
        "Families should check each course's requirement directly with the admitting university, since these change from year to year. A tutor can help a student choose subjects that keep several doors open, but the entry criteria themselves are set by the institutions.",
      ],
      bullets: [
        "AIU equivalence for the IB Diploma to support Indian applications",
        "CUET-UG for central and many state universities",
        "JEE Main and NEET-UG subject eligibility checked early",
        "UK, US, Canada, Australia and Singapore via predicted and final grades",
      ],
    },
    {
      heading: "How are IB Maths and the sciences taught online to a Sira student?",
      paragraphs: [
        "IB Mathematics comes in two forms, Analysis and Approaches and Applications and Interpretation, and the choice shapes everything that follows. Analysis and Approaches suits students who enjoy algebra, calculus and proof, and is usually expected for engineering and pure science courses. Applications and Interpretation leans on statistics, modelling and technology, a natural fit for economics, psychology, business and biology. A tutor can run a short diagnostic to show which course is more realistic.",
        "Online teaching of Maths works best with a shared writing surface. The tutor works a problem line by line, then hands the pen over, and the student repeats a similar one aloud. Paper 2 and Paper 3 practice is timed, and mistakes are logged in a running list so that the same error does not appear three times. For Sira students with limited access to specialist books, the tutor provides worked examples and points to free resources.",
        "In Physics, Chemistry and Biology the challenge is to connect ideas rather than memorise them. A tutor will walk through how a graph from an investigation links to a formula, or how a reaction mechanism explains a trend in the data booklet. Internal assessments in the sciences need a workable experiment, and tutors coach the student on planning and analysis without writing the report.",
        "Data tasks are a particular strength of one-to-one lessons. A student reads a table, suggests a hypothesis, and the tutor probes the reasoning. That kind of exchange is hard to reproduce in a coaching batch, and it is exactly what IB papers reward.",
        "For students in Sira who are the only ones in their circle taking these courses, regular contact with a tutor also reduces isolation. A short message thread between lessons, handled within agreed hours, lets a student ask a quick question before it snowballs.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects should a Sira student choose?",
      paragraphs: [
        "Cambridge IGCSE offers most subjects in Core and Extended tiers, while Pearson Edexcel uses Foundation and Higher. The lower tier caps the top grade, so a student who could reach a strong result is held back if entered for it. The upper tier asks more, but a student who is comfortable with Class 9 and 10 CBSE mathematics will usually find Extended reachable with focused work.",
        "Choice of subjects matters more than students expect. A typical Sira candidate takes English, Mathematics, at least two sciences, and one subject of interest such as Computer Science, Business or Economics. Adding a home language such as Hindi or Kannada is useful if the student plans to study in India later. Additional Mathematics is a strong signal for students aiming at IB Maths Analysis or engineering.",
        "Practical papers deserve early attention. Cambridge Physics, Chemistry and Biology offer either a practical exam or an alternative-to-practical paper, and a student without a laboratory at hand should clarify with the exam centre which is being taken. Tutors teach the alternative-to-practical skills, such as drawing graphs from given data and suggesting improvements to a method, by video.",
        "Timing matters too. A student who starts IGCSE preparation in Class 8 or 9 has time to build English writing alongside content. One who starts in Class 10 with a few months left needs a leaner plan, focusing on the highest-weighted topics and exam technique. Either route is workable, and a trial lesson helps estimate the gap.",
      ],
      bullets: [
        "Core or Extended (Cambridge) and Foundation or Higher (Edexcel) chosen with the school or centre",
        "Additional Mathematics as a bridge to IB or A Level Maths",
        "Alternative-to-practical skills taught for science papers",
        "Home language subjects if Indian university study is planned",
      ],
    },
    {
      heading: "Will online lessons work from a taluk town like Sira?",
      paragraphs: [
        "Yes, with a little planning. Most homes in Sira have either fibre, a broadband line or solid 4G, and a live lesson needs far less bandwidth than streaming a film. The main risks are power interruptions, weak signal in some villages around the town, and a shared family phone or laptop. We suggest checking these before the trial lesson.",
        "A quiet corner, a laptop or tablet with a working camera, and a pen and notebook are enough. A second device, often a phone, can serve as a backup for the video call if the main connection fails. Students who have only a phone can still attend, though a larger screen makes a whiteboard far easier to read.",
        "Power cuts are common enough in taluk towns that a small inverter or a charged laptop is a sound investment. We also allow one make-up lesson within a reasonable window if a cut or a storm ruins a session, so that a bad evening does not become a lost week.",
        "Parents can sit in for the first lesson, read the written note afterwards, and ask the tutor about pace. We encourage that. A child who knows the parent is informed usually takes the routine more seriously, and the tutor learns what to focus on at home.",
      ],
    },
  ],

  process: [
    { title: "Message us on WhatsApp or email", description: "Tell us the board, class, subjects and current concern. We reply with a short list of tutor options." },
    { title: "Book a free trial lesson", description: "The tutor teaches a real topic so you can judge the style before committing to anything." },
    { title: "Receive the plan and quote in writing", description: "You see the weekly schedule, the topics and the rate before you agree." },
    { title: "Begin weekly lessons", description: "Lessons run live from your home in a fixed slot, with a written note after each session." },
    { title: "Review and adjust", description: "After a few weeks we check progress, and you can change the plan or the tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Tutors matched to the exact syllabus", description: "IB Maths AA is not IB Maths AI, and Cambridge is not Edexcel. Your child gets someone who has taught that specific course." },
    { title: "A fit for a taluk-town routine", description: "Slots are shaped around school buses, farm seasons and shop hours rather than a city schedule." },
    { title: "Free trial before any fee", description: "You see the tutor teach before deciding, and there is no obligation to continue." },
    { title: "Written notes after every lesson", description: "Parents see what was covered, what went well and what to practise, without asking." },
    { title: "Change the tutor if needed", description: "If the match is off, we find another tutor without an awkward conversation." },
    { title: "Coaching, never ghost-writing", description: "Tutors explain and guide. They never write IAs, Extended Essays, TOK essays or coursework." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE tutors in Sira?", answer: "Yes, online. Sira has no confirmed IB or IGCSE school, so IB Gram tutors teach live one-to-one by video from elsewhere in India. They are chosen for the student's exact syllabus, teach in Indian Standard Time, and fix a weekly slot. The lessons happen at your child's own desk at home, which is how families in a taluk town get specialist help without travelling to Tumakuru or Bengaluru." },
    { question: "Can I get IB home tuition in Sira with a tutor visiting my house?", answer: "No, tutors do not visit homes in Sira. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. For Sira we provide online home tuition: a private live lesson your child takes at home on a laptop. It keeps the one-to-one attention of a home tutor without the travel, and it opens up specialists who could not otherwise reach the town." },
    { question: "Is IGCSE home tuition available in Sira?", answer: "It is available as online one-to-one tuition, not as a tutor visiting your house. Cambridge and Edexcel IGCSE tutors teach Mathematics, Additional Mathematics, the sciences, English, Computer Science, Business and Economics by video. You get a free trial lesson, a written note after each session, and a quote in writing before you book." },
    { question: "Which IB and IGCSE schools are nearest to Sira?", answer: "We could not confirm any in Sira itself. The nearest concentration is in Bengaluru, about 120 km away, where schools such as Stonehill International School and Inventure Academy are listed on our Bengaluru page. Tumakuru, roughly 55 km away, has no school we can confirm. Check any school's current curriculum with the school directly before relying on it." },
    { question: "How much does IB or IGCSE tuition cost in Sira?", answer: "We do not publish prices, and every rate is quoted in writing before you book. The rate depends on the subject and level, the tutor's experience with the exact board, how many lessons a week you want, and whether the lesson is private or small group. A free trial lesson comes first, so you can judge the teaching before agreeing to anything." },
    { question: "Can a Kannada-medium student take up IGCSE or IB?", answer: "Yes, though English writing needs early attention. A student from a Kannada-medium school usually understands Maths and science well but needs practice in extended English answers. Tutors teach paragraph structure, command words and timed writing, and they help the student move at a realistic pace. Many students settle into the style within a term of steady practice." },
    { question: "Will tutoring help with JEE, NEET or KCET from an IB or IGCSE background?", answer: "It can help with the subject content, but the entrance exams have their own rules. IB and IGCSE students must check eligibility for JEE Main, NEET-UG and KCET, especially subject combinations and board recognition. Our tutors coach IB Physics, Chemistry, Biology and Mathematics in depth. For dedicated entrance coaching, families often add a separate programme and we can advise on the overlap." },
    { question: "Do tutors write the IA, Extended Essay or TOK essay?", answer: "No. Tutors coach, explain and give feedback, but they never write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework. They can help a student choose a workable research question, plan an investigation, structure an argument and understand the assessment criteria. The work submitted must be the student's own, and we will not compromise that." },
    { question: "What is a free trial lesson like?", answer: "It is a real lesson, not a sales call. The tutor picks a topic the student is working on, teaches it live, and asks questions to see how the student thinks. Afterwards you receive a short note on what was covered and a suggested plan. There is no payment and no commitment, and you can ask for a different tutor if the style does not suit." },
    { question: "What if my internet or power fails during a lesson?", answer: "Reconnect from a phone hotspot if you can, and message the tutor. If the lesson cannot continue, we reschedule it within a reasonable window. Power cuts and weak signal are common in taluk towns, so we suggest keeping a charged phone and, if possible, a small inverter. A missed lesson because of a technical fault is a rescheduling matter, not a lost fee." },
    { question: "Which exam sessions can a Sira student sit?", answer: "IB Diploma exams are held in May and November, and IGCSE has May-June and October-November series. Registration usually goes through a school or an approved exam centre, and private candidates need to book a place early. The nearest centres are generally in Bengaluru. We help students plan study timelines but cannot register them for exams." },
    { question: "Is IB Maths AA or AI better for a Sira student?", answer: "It depends on the student's plans and strengths. Analysis and Approaches suits engineering, pure science and mathematics, while Applications and Interpretation suits economics, business, psychology and biology. A tutor can run a short diagnostic lesson and show how each course feels. The right choice also depends on what the target university asks for, which should be checked first." },
    { question: "Can my child start IGCSE in Class 8 or 9?", answer: "Yes, and an early start often helps. Beginning in Class 8 or 9 gives time to build English writing, practise past-paper style and cover the content at a steady pace. A student starting in Class 10 can still succeed with a focused plan. The tutor will judge how much ground remains in the first lesson and explain a realistic schedule." },
    { question: "How do you handle festivals and the agricultural calendar?", answer: "We plan around them. Ugadi, Ganesha Chaturthi, Dasara and Deepavali are built into the schedule, and families with farm duties can choose early-morning or late-evening slots during sowing and harvest weeks. If a lesson has to be skipped, it is rescheduled rather than lost, and the tutor adjusts the plan so important topics are still covered before exams." },
    { question: "Can my child switch tutors if the fit is not right?", answer: "Yes, with no awkwardness. Tell us what is not working, whether it is pace, style or subject depth, and we find a different tutor. The new tutor receives the written notes from earlier lessons so the student does not have to start again. Most families find the right match within the trial lesson or soon after." },
    { question: "How do I get started from Sira?", answer: "Message us on WhatsApp at +91 7439 368 115 or write to support@ibgram.com with your child's class, board, subjects and the main worry. We will suggest a tutor, arrange a free trial lesson in a convenient evening slot, and send the plan and quote in writing. You can decide after the trial whether to continue." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Start from the main site to see how all our tutoring works." },
    { label: "Tutoring across India", href: "/india/", description: "See the cities and towns in India where online IB and IGCSE tuition is available." },
    { label: "Tutoring in Gurgaon", href: "/gurgaon/", description: "The one city where in-person home visits also run, with its own school guide." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB tutoring across the programmes." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "How Cambridge and Edexcel IGCSE tutoring is organised." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What a Diploma student studies in the two years." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation explained." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of the tutors who teach online." },
    { label: "Contact us", href: "/contact-us/", description: "WhatsApp or email us to book a free trial lesson." },
    { label: "Bengaluru", href: "/bengaluru/", description: "The nearest big city with a concentration of IB and IGCSE schools." },
    { label: "Tumakuru", href: "/tumkur/", description: "The district headquarters near Sira and its schooling options." },
    { label: "Hindupur", href: "/hindupur/", description: "A neighbouring town across the Andhra border with a similar schooling picture." },
  ],

  closingHeading: "Start with one free lesson from your own desk in Sira",
  closingBody:
    "Tell us the class, the board and the subject that worries your child most. We will match a tutor, arrange a free trial lesson at a time that works around school and home, and send a written plan and quote afterwards. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com.",
};
