import type { CitySeoPage } from "../types";

/**
 * /mandya/ - IB and IGCSE tutoring page for Mandya, Karnataka. No school inside Mandya city could be
 * confirmed for the IB or Cambridge/Edexcel, so stripSchools is empty; the confirmed schools nearby
 * (De Paul in Srirangapatna, I Can in Mysuru, Bengaluru campuses) are named in the clusters and the
 * body table. Online only. Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const mandya: CitySeoPage = {
  slug: "mandya",
  countryName: "Mandya",
  countryNameLong: "Mandya, Karnataka",
  demonym: "Mandya",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons move around Cauvery bandh days, the Dasara fortnight and the sugar-crushing months when farm families are stretched thin",
  lastUpdated: "2026-09-21",
  geo: { latitude: 12.5218, longitude: 76.8951 },
  wikipedia: "https://en.wikipedia.org/wiki/Mandya",
  alternateNames: ["Mandya city", "Sugar City"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mandya | Online Home Tuition",
  metaDescription:
    "Private IB and IGCSE tuition from home for Mandya students, taught live online one to one by subject specialists. Free trial lesson before you commit.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Mandya",
  heroEyebrow: "IB & IGCSE TUITION FOR MANDYA FAMILIES",
  heroSubtitle:
    "Looking for home tuition in Mandya for an IB or IGCSE student? Tutors do not travel to Mandya, so the lesson comes to your child's desk online: private, live, one to one, from a specialist who has taught the exact subject. Families here are usually holding an international syllabus together across a boarding school, a Bengaluru move or an online provider, and the first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Mandya",
  imageAltText: "A Mandya student at a home desk revising IB Physics with a tutor on a laptop video call",
  secondaryKeywords: [
    "IB tutor Mandya",
    "IGCSE tutor Mandya",
    "IB home tuition Mandya",
    "IGCSE home tuition Mandya",
    "IB private tuition Mandya",
    "IB online tuition Mandya",
    "IGCSE online tuition Mandya",
    "IB Maths tutor Mandya",
    "IGCSE Maths tutor Mandya",
    "IB Physics tutor Mandya",
    "IB Chemistry tutor Mandya",
    "IB Biology tutor Mandya",
    "IB DP tutor Mandya",
    "IB MYP tutor Mandya",
    "IB PYP tutor Mandya",
    "IB tutor Vivekananda Road Mandya",
    "IGCSE tutor Srirangapatna",
    "IB tutor Maddur",
    "IB tutor Mandya Karnataka",
  ],

  heroTrustPoints: [
    "Tutors are picked for recent teaching of your child's own subject and level, not for a general profile",
    "Every session is live and online; visits to a home are limited to Gurugram and parts of Delhi NCR",
    "A written note follows each lesson, so you can see what was covered without asking",
    "Independent of every school, board and exam body mentioned on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB continuum" },
    { value: "Cambridge & Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "Same clock as your school day" },
    { value: "Free trial", label: "Before any rate is agreed" },
  ],

  intro: {
    heading: "An international curriculum, a sugar-belt address",
    paragraphs: [
      "Anyone searching for private tuition from home in Mandya for the IB or Cambridge IGCSE is working against the local grain. The town's classrooms run on the Karnataka State Board and CBSE, with sugarcane, the Visvesvaraya Canal and the Krishnaraja Sagara reservoir shaping most family conversations. No school inside Mandya city is one we could confirm as teaching the IB or an IGCSE syllabus, and we do not name any we cannot verify.",
      "So the families who write to us tend to fall into a few groups. Some have a son or daughter boarding at an international school in Srirangapatna or Bengaluru who returns at term breaks. Some are enrolled with an online IB or Cambridge provider and need a real subject teacher on the other end. Some are planning a move to the Bengaluru-Mysuru corridor, which the expressway has made far more thinkable, and want a child fluent in the new syllabus before the move lands.",
      "All of this is delivered on video. IB Gram is an independent service whose tutors are based across India and teach in Indian Standard Time; an in-person home visit exists only in Gurugram and parts of Delhi NCR. What Mandya families get instead is the same specification, the same past papers and the same marking language a student in Bengaluru would meet, taught one to one.",
      "The tutor coaches, explains and marks. Internal Assessments, Extended Essays, TOK essays and coursework remain the student's own writing.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Boarding-school students home for the break, online-school students, and families preparing a move",
      "Private one-to-one lessons at home on a laptop, never a visit to your door",
      "A free first lesson, then a short written plan if you carry on",
    ],
  },

  programmesIntro:
    "Few Mandya parents have met the IB structure up close, because no nearby classroom has walked them through it. The four programmes below are described the way they tend to appear here: a child at a boarding campus, a Class 11 student registered online, or a parent still deciding whether the switch is worth it.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Learning is organised around six transdisciplinary themes and open questions instead of a subject timetable, and the final year ends in a student-led Exhibition. Reading, number sense and habits of inquiry matter more than memorised chapters.",
      countryNote:
        "For a Mandya child this is usually a boarder returning from a PYP campus, where a few weeks in a Kannada-medium neighbourhood can flatten the questioning habit that took a year to build.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is marked against four published criteria, and students carry a Personal Project through the last year. Writing to a criterion is a different skill from writing to a textbook, and it has to be shown, not merely described.",
      countryNote:
        "Mandya MYP help tends to be steady weekly work on criterion-based writing and science reports, since the neighbouring State Board and CBSE classes reward a different answer style.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard, sit beside the Extended Essay, Theory of Knowledge and CAS. The externally marked papers arrive in May, and Internal Assessments count towards each subject grade.",
      countryNote:
        "A Diploma candidate from Mandya is normally registered at a residential school elsewhere or with an online provider, so the tutor often carries Higher Level Maths or the sciences in full.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses pair with a career-related study, reflective project and language development. It suits students aiming at applied or vocational routes, and very few Indian schools offer it.",
      countryNote:
        "In this district the Career-related route is seen only through online IB providers, and we support the academic Diploma courses that sit underneath it.",
    },
  ],

  subjectsIntro:
    "Subjects are matched by course code and level, then by where the student is stuck. For a Mandya family with no school nearby to lean on, we first ask what the syllabus looks like this term and which Internal Assessment stage is next.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, proof and algebra with an eye on Paper 3 investigations; the students who do well have practised unfamiliar problems weekly, not just revised worked ones." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Technology-heavy statistics and modelling, where fluency with the graphic display calculator decides how many marks survive a long question." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through fields and quantum topics, with the practical investigation needing a measurable question chosen early." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, bonding, kinetics and organic pathways; students gain most from short, frequent calculation practice between lessons." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics and ecology, with examiners rewarding the precise command word, such as outline against explain." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams built correctly, then applied to a real current example, with Higher Level adding Paper 3 quantitative work." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study application over recall, and a Business Research Project that needs a real organisation to study." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming logic, databases and networks, plus a solution project that needs real coding hours rather than reading time." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies named accurately across the biological, cognitive and sociocultural approaches, and a first experiment designed to be marked." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Commentary on unseen texts, a comparative essay and a spoken Individual Oral, each needing its own drills." },
    { name: "IB Kannada A", levels: "HL / SL", description: "Kannada is the home language here, so the work is literary analysis in the IB manner, which is a separate skill from fluency." },
    { name: "IB Hindi B", levels: "HL / SL", description: "A language-acquisition course for students who use Hindi less at home, focused on the oral, written tasks and receptive skills." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking applied to land, water and food questions, which a Cauvery-basin student can ground in local examples." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Prescribed titles tested from more than one angle, since a lone student lacks classmates to argue back." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel share subjects but not calendars or paper styles, so the first task is confirming the board and tier. Cambridge sits in the May-June and October-November series; Edexcel adds a January sitting.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Core and Extended differ in ceiling and pace; the working shown, not only the answer, earns Extended marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus and trigonometric identities that give a real running start before IB Maths AA HL." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Familiar content, but with a wording style and mark scheme that need board-specific practice." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation rearrangement under time pressure and the alternative-to-practical paper reward regular drilling." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactivity and organic chemistry carry most marks, with planning-an-experiment questions to rehearse." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and transport in plants and humans are the topics where extended answers are most often thin." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions turned into short chains of reasoning, with Extended-tier evaluation as the separating skill." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, trace tables and Boolean logic learned by running small programs, not just reading them." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Summary, directed writing and a composition, each with its own timing habit." },
    { name: "IGCSE Kannada as a Second Language", levels: "Grade 9-10", description: "For students whose school offers it, structured reading and writing practice in the script and the exam format." },
  ],

  regionsTitle: "Around Mandya: where our online students live and study",
  regionsIntro:
    "Lessons happen on a screen, so these places describe context, not travel: which school belts and roads shape an evening, and what interrupts the routine.",
  regions: [
    { name: "Vivekananda Road and the town centre", note: "The dense commercial heart of Mandya, with most of the town's private CBSE and State Board schools within a short auto ride." },
    { name: "Guttalu", note: "A residential colony on the town's edge where families with government and bank postings tend to settle." },
    { name: "Hosahalli", note: "A growing residential area where evening study time is often broken by power interruptions in summer." },
    { name: "Subhash Nagar", note: "Close to the older institutional zone, with a mix of retired-service and business households." },
    { name: "Bengaluru-Mysuru Road stretch", note: "Now that the expressway is open, this corridor is where families weigh a move towards Bengaluru against staying in Mandya." },
    { name: "Maddur", note: "A town roughly midway to Bengaluru, known for its snack, and for families who commute to Bengaluru work while children study locally." },
    { name: "Srirangapatna", note: "Toward Mysuru; De Paul International Residential School, which teaches Edexcel and Cambridge IGCSE, sits here." },
    { name: "Pandavapura and the KRS side", note: "Sugarcane country close to the Krishnaraja Sagara reservoir, with farm households whose calendar follows the crushing season." },
    { name: "Melukote", note: "A hill-top temple town and Sanskrit study centre; its schooling is largely local and quiet." },
  ],

  schoolDisclaimer:
    "We could not confirm any school inside Mandya city as running the IB or a Cambridge or Edexcel IGCSE, so no school strip is shown here. The schools named below sit in Srirangapatna, Mysuru and Bengaluru and are listed only so that a family can see the options within reach. IB Gram is independent and has no link with those schools, the IB, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Mandya district: Srirangapatna",
      note: "De Paul International Residential School, close to the Mysuru road, runs Pearson Edexcel IGCSE and, from 2024-25, Cambridge as well. It is a residential option a few Mandya families weigh.",
      schools: ["De Paul International Residential School"],
    },
    {
      city: "Nearby: Mysuru",
      note: "About 45 kilometres away, I Can International School teaches Cambridge IGCSE; local choice is very limited, which is why many Mandya families look further along the highway.",
      schools: ["I Can International School"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "Around 100 kilometres east, Bengaluru has the region's real spread of IB and IGCSE campuses, and the expressway makes weekly boarding or a family move realistic.",
      schools: ["Stonehill International School", "Inventure Academy", "Canadian International School, Bengaluru", "Trio World Academy"],
    },
    {
      city: "Mandya city itself",
      note: "Schools here follow the Karnataka State Board, CBSE or, in a few cases, ICSE. Anyone learning an international syllabus in Mandya is doing it at home, online or through a school elsewhere.",
      schools: [],
    },
  ],

  modesIntro:
    "Every lesson for Mandya runs online, one to one. What varies is the rhythm: a standing weekly slot, a burst around the holidays of a boarding school, or a tight run before an exam series.",
  modes: [
    {
      title: "A standing weekly slot",
      description:
        "One fixed hour or ninety minutes each week with the same tutor, working from the student's own syllabus and current unit.",
      bullets: [
        "Same tutor throughout, so the pace is known",
        "Past papers and a shared whiteboard on screen",
        "Fits PYP, MYP, DP and IGCSE alike",
        "Slot moved when a bandh or festival closes schools",
      ],
    },
    {
      title: "Break-time blocks for boarders",
      description:
        "A run of daily or alternate-day sessions timed to a boarding school's term break, to close gaps and preview what comes next.",
      bullets: [
        "Planned against the school's real break dates",
        "Denser than a weekly slot",
        "Written summary passed to the boarding teachers if you wish",
        "Lighter check-ins once term restarts",
      ],
    },
    {
      title: "Exam-window preparation",
      description:
        "Timed papers, marked and discussed, in the weeks before a May, October-November or January series.",
      bullets: [
        "Marking against the current mark scheme",
        "Feedback returned within days",
        "Most useful when booked two to three weeks ahead",
        "Paused sensibly for any local disruption",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Mandya?",
      paragraphs: [
        "No school inside Mandya city is one we could confirm as authorised for the IB or as teaching Cambridge or Edexcel IGCSE, and a claim we cannot verify is not one we will print. The town has a good spread of Karnataka State Board and CBSE schools, a handful of ICSE options, and several respected engineering and medical institutions, but the international boards have not put down local roots yet.",
        "The nearest confirmed options sit along the highway. De Paul International Residential School at Srirangapatna teaches Pearson Edexcel IGCSE and now offers Cambridge too. In Mysuru, I Can International School teaches Cambridge IGCSE. For the full IB, the realistic direction is Bengaluru, where campuses such as Stonehill and Trio World Academy run the continuum, though a daily commute of about 100 kilometres is not workable, so it means boarding or relocating.",
        "That is why so many enquiries from Mandya come from a child studying somewhere else. The tutor bridges the weeks and the distance between the boarding campus and the family home, or stands in for a classroom that does not exist locally.",
        "The confirmed schools within reach are laid out in the table below so a parent can see what the map actually looks like before deciding anything.",
      ],
      table: {
        caption: "International-curriculum schools within reach of Mandya",
        columns: ["School", "Place", "Curriculum", "Distance from Mandya"],
        rows: [
          ["De Paul International Residential School", "Srirangapatna", "Pearson Edexcel IGCSE; Cambridge added 2024-25", "Under an hour by road"],
          ["I Can International School", "Mysuru", "Cambridge IGCSE", "About 45 km"],
          ["Stonehill International School", "Bengaluru", "IB PYP, MYP and DP", "About 100 km"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed inside Mandya city",
        "Srirangapatna and Mysuru offer the nearest Cambridge and Edexcel options",
        "Full IB campuses are in Bengaluru, which means boarding or moving",
        "Online tutoring bridges the time between campus and home",
      ],
    },
    {
      heading: "How does the Karnataka State Board or CBSE compare with the IB and IGCSE?",
      paragraphs: [
        "A Mandya student coming from a State Board or CBSE classroom finds that the international boards ask a different question. Where the SSLC and PUC papers lean on reproducing a prescribed answer accurately, IB and IGCSE examiners look for a working method, a reasoned position or a fresh application of an idea. The content in Class 9 or 10 can look similar; the way marks are earned does not.",
        "Practical and coursework work differs too. In the IB, Internal Assessments are set tasks with published criteria, written up over weeks. IGCSE science leans on a paper about practical skills rather than a lab record book. Neither of these fits the style of most local classrooms, which is why students often struggle at first even when the syllabus topics are familiar.",
        "Language needs mention. Kannada is widely spoken at home in Mandya and taught in schools across Karnataka, while IB and IGCSE papers in most subjects are written in English. A student who reads Kannada fluently may need direct help with English command words and extended writing.",
        "Recognition is broad: Indian universities accept both routes through equivalence, and overseas universities are comfortable with either.",
      ],
      table: {
        caption: "State Board, CBSE, IGCSE and IB at a glance for a Mandya family",
        columns: ["Feature", "Karnataka State Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Typical answer style", "Textbook-aligned recall", "Recall and application", "Structured response with working", "Argument, evaluation, method"],
          ["Ongoing assessed work", "Internal marks, small", "Internal assessment, modest", "Coursework in some subjects", "Internal Assessments plus Extended Essay"],
          ["Language of the paper", "Kannada or English medium", "English or Hindi", "English", "English for most subjects"],
          ["Exam windows", "March-April", "February-April", "May-June, Oct-Nov, Jan (Edexcel)", "May (November at some schools)"],
        ],
      },
      bullets: [
        "Marks come from method and argument, not a single expected answer",
        "Practical skills are tested on paper, so lab habits change",
        "Kannada-medium students often need English command-word practice",
        "Both international routes are recognised in India and abroad",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition in Mandya cost, and what moves the rate?",
      paragraphs: [
        "Rates are quoted in writing before a trial is booked and are not published here, because they depend on choices rather than on postcode. The main drivers are the level, since IB Higher Level Physics costs more to teach well than IGCSE Core Biology; the length of each session; the number of lessons per week; and how deeply a tutor has taught that exact specification.",
        "The town itself does not push the rate up or down. A tutor teaching a Mandya student from Chennai or Pune charges as they would for a student anywhere, and there is no travel component because nobody travels.",
        "Where a tutor carries a whole subject alone, sessions can run longer or more often than a top-up would. It is worth asking how the full year will be paced, what past-paper volume is planned before the exams, and how you will hear about progress.",
        "Nothing binds a family to a term or a package. Lessons can pause during a school exam fortnight or a family function, and a mismatch after the trial leads to a different tutor, not a lost fee.",
      ],
      bullets: [
        "Level, session length and frequency drive the rate most",
        "Tutor experience with the exact specification matters more than city",
        "No travel cost since every lesson is online",
        "Free trial first; rates confirmed in writing before you book",
      ],
    },
    {
      heading: "Online tutor, local coaching class or self-study: which suits an IB student in Mandya?",
      paragraphs: [
        "Mandya has coaching centres, mostly geared to the SSLC and PUC boards, KCET and NEET. Those batches serve a large, single syllabus and are good at it. They do not run an IB Higher Level Chemistry group or a Cambridge 0580 Extended class, because there are too few students to fill one.",
        "Self-study can work for a motivated student on IGCSE Mathematics with a stack of past papers, but the parts of the IB that reward feedback, such as Internal Assessment planning, Extended Essay structure and extended-response technique, improve fastest with a person reading the work.",
        "A private online tutor with subject depth fills the gap. Someone who has taught the specification recently, works one to one, and can set the pace suits a student whose school is elsewhere or whose course is being followed remotely.",
        "The table sets the three routes side by side so the trade-offs are visible.",
      ],
      table: {
        caption: "Support options for an international-curriculum student in Mandya",
        columns: ["Option", "Matches the syllabus?", "Feedback on written work", "Main limit"],
        rows: [
          ["Local coaching class", "For State Board, PUC, KCET and NEET only", "Group marking, slow", "No IB or IGCSE batch"],
          ["Self-study with past papers", "Yes, if the student is disciplined", "None unless someone reads it", "Weak on IA and essays"],
          ["One-to-one online tutor", "Yes, built to the exact specification", "Detailed and quick", "Needs a good connection and a fixed weekly slot"],
        ],
      },
      bullets: [
        "Local coaching is built for other exams",
        "Self-study is strongest in Mathematics",
        "Online tutoring is the only option here that follows the specification",
        "A stable broadband link matters more than a fast one",
      ],
    },
    {
      heading: "How do the sugar season, Cauvery bandhs and Dasara shape a study year in Mandya?",
      paragraphs: [
        "Mandya's year has a rhythm set by the fields. The sugarcane crushing season, running through the cooler months, occupies farm and mill households heavily, and evenings at home can be noisy with lorries and long working days. Pre-monsoon showers arrive in April and May, the southwest monsoon runs June to September, and the weather rarely gets extreme.",
        "Cauvery water disputes have on several occasions turned Mandya into the centre of protests, with bandh calls that close shops and often schools for a day or two. We keep a spare slot each month so a lost lesson can be made up within the week.",
        "Dasara is the other large interruption. The ten days of celebration in Mysuru draw many Mandya families, and school holidays follow. Ugadi, Ganesh Chaturthi, Deepavali and Sankranti add short pauses.",
        "The exam calendar is fixed by boards. IB Diploma papers begin in May, Cambridge runs May-June and October-November, and Edexcel adds January.",
      ],
      table: {
        caption: "A working year in Mandya",
        columns: ["Period", "What is happening", "How tutoring adjusts"],
        rows: [
          ["October to March", "Sugarcane crushing, cooler weather, Deepavali and Sankranti", "Evening slots kept short and flexible for busy households"],
          ["April to May", "Pre-monsoon showers, IB and Cambridge May papers", "Timed paper practice, lighter on new content"],
          ["June to September", "Southwest monsoon, Ganesh Chaturthi, Dasara approaching", "Steady weekly lessons and a buffer for power cuts"],
          ["Any month", "A Cauvery bandh or local closure", "Lesson moved within the same week"],
        ],
      },
      bullets: [
        "Farm and mill calendars affect evening availability",
        "Cauvery bandhs are occasional but real",
        "Dasara and Ugadi are the main festival pauses",
        "IB and Cambridge deadlines are fixed regardless of local events",
      ],
    },
    {
      heading: "Where can a Mandya IB or IGCSE student go after school?",
      paragraphs: [
        "A student finishing IB or IGCSE from Mandya has several doors open. Within Karnataka, Bengaluru's universities and institutes are the common target, and Mysuru's University of Mysore and JSS institutions are close. Mandya itself has PES College of Engineering and the Mandya Institute of Medical Sciences, which anchor local higher education for many students.",
        "For Indian degrees, the Association of Indian Universities issues equivalence for IB and for IGCSE plus a Class 12 route. The Common University Entrance Test (CUET-UG) opens many central and state universities to IB students. JEE Main and NEET have their own subject and eligibility rules, so anyone planning either should check the current notice before choosing subjects.",
        "For study abroad, predicted grades issued in autumn of the final year are what universities see first, and they rest on internal exams and coursework, so early consistency matters.",
        "Tutors focus on the subject learning that supports any of these routes and leave admissions counselling to the school or a counsellor.",
      ],
      bullets: [
        "Local options include PES College of Engineering and Mandya Institute of Medical Sciences",
        "AIU equivalence and CUET-UG matter for Indian degrees",
        "JEE and NEET eligibility must be checked for IB and IGCSE subjects",
        "Predicted grades carry weight for overseas applications",
      ],
    },
    {
      heading: "How does IB Maths and Science tutoring work for a Mandya student?",
      paragraphs: [
        "The first choice is between Analysis and Approaches and Applications and Interpretation. Analysis and Approaches suits students who enjoy algebra, calculus and proof and are aiming at engineering, physical science or mathematics. Applications and Interpretation is more modelling and statistics, using a graphic display calculator throughout, and suits economics, psychology and business paths.",
        "For Physics, Chemistry and Biology, the tutor works from the specification topic by topic, with past-paper questions in the style of the current examiners and a plan for the Internal Assessment investigation, built around a question the student can genuinely measure.",
        "Mandya students often own limited lab access for the practical side, so tutors help them plan investigations with simulations, household materials, or data sets that a school could not provide.",
        "Progress is tracked by a note after each lesson, listing topics covered, marks on the latest question set and the next unit.",
      ],
      bullets: [
        "Maths route chosen on university plans, not just marks",
        "Sciences taught topic by topic with timed questions",
        "Investigations designed around what a home can measure",
        "A session note after each lesson",
      ],
    },
    {
      heading: "IGCSE Core or Extended: what should a Mandya family choose?",
      paragraphs: [
        "In most Cambridge subjects there are two tiers. Core papers cap the grade at C and suit students who need a steadier pace; Extended papers cover harder content and reach A*. Edexcel uses Foundation and Higher in the same spirit. The decision is best made early, since Extended content cannot be learned in a fortnight.",
        "For a student heading toward IB Maths Analysis and Approaches or Higher Level sciences, Extended is almost always the right choice, and Additional Mathematics adds a useful head start. For a student who may follow IB Applications and Interpretation or a non-science route, Core in some subjects is a perfectly sensible decision.",
        "Without a school guiding the tier, the tutor's first diagnostic lesson looks at what the student can already do, and the family decides with that in hand.",
        "Cambridge and Edexcel timetables should be checked with whichever school or exam centre registers the student, as candidates from Mandya need an authorised centre for the exam itself.",
      ],
      bullets: [
        "Core and Extended (or Foundation and Higher) tiers set the maximum grade",
        "Extended suits students heading toward IB Higher Level courses",
        "A diagnostic lesson makes the choice evidence-based",
        "Confirm the exam centre well before the series",
      ],
    },
  ],

  tutorsIntro:
    "The tutors below teach IB and IGCSE from elsewhere in India, over video. None live in Mandya, and none need to; what matters is recent, specific experience with the syllabus and level your child follows.",

  process: [
    { title: "Send the brief", description: "Programme or board, subject, level, current school or provider and the exam session in view." },
    { title: "Get a shortlist", description: "Tutors chosen for their recent teaching of that exact course, with a short reason for each." },
    { title: "Try a free lesson", description: "A live session on a real topic, so you judge the teaching before any rate is agreed." },
    { title: "Read the plan", description: "A brief written outline for the first weeks and how progress will be reported." },
    { title: "Settle into a rhythm", description: "A weekly slot that flexes around exams, festivals and boarding-school terms." },
  ],

  whyPoints: [
    { title: "Matched to the course", description: "Selection follows subject, level and exam board, not a general label." },
    { title: "Built for a town with no local option", description: "Tutors expect to teach the full syllabus where no classroom does." },
    { title: "Watch before you pay", description: "The first lesson is free and live, so the decision rests on what you saw." },
    { title: "Coaching, not ghost-writing", description: "Guidance on IAs and essays; the writing stays the student's own." },
    { title: "Progress on paper", description: "A note after each session and a review every few weeks." },
    { title: "Easy to change", description: "No school ties, no long contract, and a fresh match if the fit is wrong." },
  ],

  faqs: [
    { question: "Is there an IB school in Mandya?", answer: "We could not confirm one inside Mandya city. Local schools follow the Karnataka State Board, CBSE or ICSE. The nearest confirmed international options are De Paul at Srirangapatna, I Can in Mysuru and the Bengaluru campuses. Families who want the IB while living in Mandya usually study through a boarding school or an online provider, with a private tutor supporting each subject." },
    { question: "Can you send an IB or IGCSE tutor to my home in Mandya?", answer: "No, tutors do not visit homes in Mandya. In-person home tuition runs only in Gurugram and parts of Delhi NCR. In Mandya, private tuition at home means an online lesson: your child sits at a desk at home with a laptop and a tutor teaches live, one to one, in Indian Standard Time." },
    { question: "How much does IB or IGCSE tuition cost in Mandya?", answer: "Rates depend on level, session length, frequency and the tutor's experience with the exact specification, and we quote them in writing before you book. There is no extra charge for being outside a metro. The free trial lesson comes first, so you have seen the teaching before any figure is agreed." },
    { question: "Which IGCSE schools are near Mandya?", answer: "De Paul International Residential School at Srirangapatna, under an hour away, teaches Pearson Edexcel IGCSE and Cambridge. I Can International School in Mysuru teaches Cambridge IGCSE. Bengaluru has more. We list these for context only; IB Gram is not affiliated with any of them, and you should confirm current curricula directly." },
    { question: "Can a Kannada-medium student switch to the IB or IGCSE?", answer: "Yes, though English command words and extended writing usually need extra attention in the first year. A tutor can start by reading the student's written English and set short practice tasks. Many students adapt within a term, especially if they begin in Class 8 or 9 rather than Class 11." },
    { question: "What IB Diploma subjects can your tutors teach?", answer: "Both Mathematics courses at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, Psychology, English A, Kannada A, Hindi B, Environmental Systems and Societies and Theory of Knowledge. If your subject is not listed, ask; we will say honestly whether we have a tutor with the right experience." },
    { question: "Do you support the MYP and PYP as well?", answer: "Yes. MYP support covers criterion-based writing, science reports and the Personal Project, all coaching only. PYP support tends to be lighter, aimed at reading, number work and the Exhibition. For a boarder returning home, short blocks over the school break are the usual pattern." },
    { question: "Will the tutor write my child's Internal Assessment or Extended Essay?", answer: "No. Tutors explain the criteria, help narrow a workable question, check a plan and give honest feedback on drafts. The writing, data collection and analysis stay the student's own, as the IB requires, and we will not blur that line whatever the deadline pressure." },
    { question: "Which IGCSE boards and subjects do you cover?", answer: "Cambridge and Pearson Edexcel, across Mathematics, Additional Mathematics, Physics, Chemistry, Biology, Economics, Computer Science, English First Language and more. Tell us the syllabus code on your child's papers and we will match the tutor to that code rather than a general subject." },
    { question: "Can my child sit IGCSE or IB exams from Mandya?", answer: "Only through an authorised centre. Cambridge, Edexcel and the IB all register candidates through schools or approved exam centres, and none is confirmed inside Mandya city. Families usually register through a school elsewhere or a private-candidate centre in Bengaluru or Mysuru, so ask early, since places for private candidates close months before the series." },
    { question: "When should we start tutoring?", answer: "As near the start of the course as you can: Class 11 for the Diploma, Class 9 for IGCSE. Starting early lets the tutor build habits gradually. A later start still works, with a narrower plan built from a diagnostic lesson and the most valuable topics first." },
    { question: "Is online tuition enough without a school teaching the course?", answer: "It can be, provided the tutor is set up to carry the syllabus and not merely answer doubts. We ask for the syllabus and the school or provider's schedule at the start, and the tutor plans the year accordingly. For some students a weekly session plus regular past papers is enough; others need two." },
    { question: "How do you handle Cauvery bandhs, power cuts and festival breaks?", answer: "By keeping slack in the schedule. If a bandh or a power failure removes a lesson, we shift it within the week, and a longer break such as Dasara is planned around in advance. A stable connection matters most, so a mobile hotspot as backup is a sensible precaution." },
    { question: "What happens if the tutor is not right for my child?", answer: "Tell us, and we introduce a different tutor. Reviews happen every few weeks precisely to catch a poor fit early, and nothing is signed for the long term. The written note after each lesson helps you judge whether the lessons are working." },
    { question: "How do I book a free trial lesson?", answer: "Send the programme, subject, level and preferred timings by WhatsApp on +91 7439 368 115 or email support@ibgram.com. We reply with a shortlist and a trial slot. The trial is a real lesson on a real topic, and no rate is agreed until after you have watched it." },
    { question: "Is IB Gram linked to any school, the IB or Cambridge?", answer: "No. IB Gram is an independent tutoring service, not affiliated with the International Baccalaureate, Cambridge, Pearson Edexcel or any school named on this page. Schools appear only as context for families, and nothing here is an endorsement by, or of, any of them." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How our online tuition works from city to city." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where a tutor visits a home in person." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Programme-level detail on IB tutoring." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject choices explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, Core components and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI compared." },
    { label: "Browse tutors", href: "/tutors/", description: "Search by programme and subject." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and book the free trial." },
    { label: "IB and IGCSE tutors in Mysuru", href: "/mysuru/", description: "The neighbouring city, 45 kilometres along the highway." },
    { label: "IB and IGCSE tutors in Bengaluru", href: "/bengaluru/", description: "The region's largest cluster of IB and IGCSE schools." },
    { label: "IB and IGCSE tutors in Tumkur", href: "/tumkur/", description: "Another Karnataka town served the same way." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson from Mandya",
  closingBody:
    "Send the programme, subject, level, the school or online provider your child studies with, and a few evenings that suit the household. We will return with a matched tutor and a trial slot, all online, and you decide after watching the lesson. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
