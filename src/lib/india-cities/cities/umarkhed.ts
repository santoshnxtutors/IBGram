import type { CitySeoPage } from "../types";

/**
 * /umarkhed/ - IB and IGCSE tutoring page for Umarkhed, Yavatmal district, Maharashtra. No school in
 * Umarkhed could be confirmed for the IB or Cambridge/Edexcel, so stripSchools is empty; Nagpur and
 * boarding clusters reuse names already confirmed on the Pusad and Yavatmal pages. Online only.
 */
export const umarkhed: CitySeoPage = {
  slug: "umarkhed",
  countryName: "Umarkhed",
  countryNameLong: "Umarkhed, Maharashtra",
  demonym: "Umarkhed",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are scheduled around the cotton-picking months, the Navratri and Ganeshotsav weeks and the fierce May heat",
  lastUpdated: "2026-09-21",
  geo: { latitude: 19.6, longitude: 77.7 },
  wikipedia: "https://en.wikipedia.org/wiki/Umarkhed",
  alternateNames: ["Umarkhed Yavatmal", "Umarkhed city"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Umarkhed | Online Home Tuition",
  metaDescription:
    "Live one-to-one IB and IGCSE tuition for Umarkhed students, taught online at home by subject specialists in IST. Start with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Umarkhed",
  heroEyebrow: "IB & IGCSE TUITION FOR UMARKHED FAMILIES",
  heroSubtitle:
    "Are you hunting for private tuition at home in Umarkhed for an IB or IGCSE learner? Tutors do not visit Umarkhed in person. What arrives is an online lesson, live and one to one, from someone who has taught the same syllabus code recently. Families on the Vidarbha and Marathwada border often have no school nearby for this, and the trial lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Umarkhed",
  imageAltText: "An Umarkhed student on a laptop at a home desk in a one-to-one IB Economics lesson with a tutor",
  secondaryKeywords: [
    "IB tutor Umarkhed",
    "IGCSE tutor Umarkhed",
    "IB home tuition Umarkhed",
    "IGCSE home tuition Umarkhed",
    "IB private tuition Umarkhed",
    "IB online tuition Umarkhed",
    "IGCSE online tuition Umarkhed",
    "IB Maths tutor Umarkhed",
    "IGCSE Maths tutor Umarkhed",
    "IB Physics tutor Umarkhed",
    "IB Chemistry tutor Umarkhed",
    "IB Biology tutor Umarkhed",
    "IB DP tutor Umarkhed",
    "IB MYP tutor Umarkhed",
    "IB PYP tutor Umarkhed",
    "IB tutor Umarkhed Yavatmal district",
    "IGCSE tutor Mahagaon",
    "IB tutor Dhanki Umarkhed",
    "IB tutor Umarkhed Maharashtra",
  ],

  heroTrustPoints: [
    "Tutors are picked for recently teaching your child's own syllabus code and level",
    "Lessons are live video calls; home visits happen only in Gurugram and parts of Delhi NCR",
    "You receive a plain written note after every session",
    "IB Gram is independent of every school, board and exam body named here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The full IB range" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards" },
    { value: "IST", label: "Same clock as home" },
    { value: "Free trial", label: "Before you commit" },
  ],

  intro: {
    heading: "A cotton town on the Penganga, far from any IB classroom",
    paragraphs: [
      "Umarkhed lies in the far south of Yavatmal district, near the Penganga river and the edge of Marathwada, with Telangana not far beyond. Cotton, trading families, Marathi and Banjara communities and a lively market define it. Schools follow the Maharashtra State Board and CBSE, and we could not confirm any school in Umarkhed as teaching the IB or a Cambridge or Edexcel IGCSE, so none is named as such here.",
      "Those who look for an international syllabus from this town usually have a specific reason. A doctor or engineer's child is about to move to a city with an IB campus. A student is registered with an online school and wants help from a real teacher. A boarder at a residential campus returns for the holidays behind in Physics.",
      "Every lesson goes out over video. IB Gram is independent, its tutors sit in different Indian cities and keep IST hours, and in-person home teaching is restricted to Gurugram and some parts of Delhi NCR.",
      "The tutor coaches, explains and marks.",
    ],
    bullets: [
      "The IB at every stage plus Cambridge and Pearson Edexcel IGCSE",
      "Families planning a move, online-school students and boarders on holiday",
      "One-to-one lessons at your own desk on a laptop, with no tutor at your door",
      "A no-charge first lesson, then a short written plan if you carry on",
    ],
  },

  programmesIntro:
    "Very few parents in Umarkhed have visited an IB classroom, so the four programmes are outlined below in the form they take for a household here: a child at a campus in another city, a student enrolled remotely, or a parent still comparing routes.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Learning is organised around big themes and open questions instead of separate textbooks, and children present what they find. Reading fluency, number sense and a habit of asking why are the goals, ending in a student-led Exhibition.",
      countryNote:
        "For an Umarkhed child, PYP support usually means English reading practice and number talk at home, because Marathi, Hindi and sometimes Banjara or Telugu are the languages around them.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are marked against criteria, with linked units and a Personal Project at the close. Students explain, evaluate and reflect, which is different from memorising a chapter.",
      countryNote:
        "MYP work with Umarkhed students tends to be a weekly rhythm on Mathematics and criterion-based science reports, both new to those coming from a State Board classroom.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, plus the Extended Essay, Theory of Knowledge and CAS. May examinations and marked coursework combine into the final result.",
      countryNote:
        "A Diploma candidate connected to Umarkhed is typically registered at a school elsewhere or online, so the tutor often carries a Higher Level subject for both years.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pair of Diploma courses joins a career-related study, a reflective project and language work. It suits students who plan applied or vocational pathways.",
      countryNote:
        "Almost no school in the region runs this programme, so we support the academic courses inside it for students taking it remotely.",
    },
  ],

  subjectsIntro:
    "Pairing starts from the syllabus code, the level and the stage of the year, and then narrows to the place where marks are leaking.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, algebra and proof, with steady exposure to Paper 3 style problems where the top grades are won." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling and statistics through technology, where clean use of the calculator saves many marks." },
    { name: "IB Physics", levels: "HL / SL", description: "Kinematics to fields and quantum topics, with an investigation designed around something a home can measure." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, equilibrium and organic reaction pathways, backed by short problem sets between lessons." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, inheritance and ecology, with careful reading of command terms in every answer." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and real examples, such as cotton prices and support policy, worked into analytical paragraphs." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study analysis and a research project on a real local business, such as a ginning unit or a trader." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, databases and networks, with time set aside for the solution project." },
    { name: "IB Psychology", levels: "HL / SL", description: "Three approaches to behaviour, studies recalled accurately and a small experiment designed to earn marks." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen texts and set works, plus rehearsal of the spoken component." },
    { name: "IB Marathi A", levels: "HL / SL", description: "Literary analysis in Marathi, following IB criteria for texts rather than a Maharashtra Board guide." },
    { name: "IB Hindi B", levels: "HL / SL", description: "A language acquisition course for those who use Hindi less at home, concentrating on speaking and written tasks." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking, with Vidarbha's cotton farming and water stress as material close at hand." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Knowledge questions discussed from several angles, which needs a conversation partner." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel share subject names but not codes, tiers or paper design, so the first task is to confirm the board. Cambridge runs June and November series, while Edexcel adds January.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra, geometry and data at the right tier, with credit for shown working." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and trigonometry, an early step toward IB Analysis and Approaches." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel papers and mark schemes practised in their own wording." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equations, units and the practical-skills paper, drilled in short sets." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactivity, rates and organic basics, revised with timed questions." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Transport, coordination, inheritance and ecology with extended-answer practice." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions turned into short chains of reasoning and applied to real cases." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, logic and trace tables practised on running programs." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing and speaking for students who use Marathi or Hindi day to day." },
    { name: "IGCSE Marathi as a Second Language", levels: "Grade 9-10", description: "Where an exam centre offers it, structured reading and writing practice." },
  ],

  regionsTitle: "Around Umarkhed: where our online students live and study",
  regionsIntro:
    "Lessons take place on a screen, so the list below is context, not directions: where families live, what shapes an evening and what pulls a household away.",
  regions: [
    { name: "Umarkhed main market and bus stand area", note: "The busy trading core where the older private schools and coaching rooms sit, noisy at closing time." },
    { name: "Station and Nanded road side", note: "Towards Nanded, which many families visit for hospitals, colleges and the Hazur Sahib pilgrimage." },
    { name: "Pusad road side", note: "Toward Pusad, the neighbouring town, where families often compare school and coaching options." },
    { name: "Dhanki", note: "A village belt near the town where farm households run to the cotton calendar." },
    { name: "Mahagaon", note: "A rural settlement in the tehsil where children travel some distance for schooling, leaving short evenings." },
    { name: "Bitargaon", note: "A village area near the Penganga side, with quiet evenings and occasional power interruptions." },
    { name: "Loni", note: "A nearby village belt where Banjara communities are prominent, with strong festival routines." },
    { name: "Penganga river belt", note: "The southern edge of the district, where the river shapes farming and, in a heavy monsoon, travel." },
    { name: "Mahur road", note: "Toward Mahur and Kinwat in Nanded district, used by families for temple visits and family ties." },
  ],

  schoolDisclaimer:
    "No school in Umarkhed could be verified as running the IB or a Cambridge or Edexcel IGCSE, so there is no school strip on this page.",
  schoolClusters: [
    {
      city: "Umarkhed and south Yavatmal",
      note: "Local schools follow the Maharashtra State Board or CBSE. A student following an international syllabus here does it online or through a school in another city.",
      schools: [],
    },
    {
      city: "Nearby: Nagpur (MIHAN and Wardha Road)",
      note: "Nagpur is the nearest large city with confirmed international-curriculum campuses, but it is over 250 kilometres away, so it means boarding or a family move.",
      schools: ["D Y Patil International School, MIHAN"],
    },
    {
      city: "Nearby: Nagpur (central and Wanadongri)",
      note: "Further schools inside Nagpur that some families shortlist for a relocation.",
      schools: ["Centre Point School International", "VIBGYOR World Academy", "International School of Scholars"],
    },
    {
      city: "Distant: Hyderabad and Pune (boarding)",
      note: "A small number of families consider residential IB study in Hyderabad or western Maharashtra.",
      schools: ["Oakridge International School, Hyderabad (IB and CBSE)", "Mahindra United World College of India (IB Diploma, boarding)", "International School Aamby (IB PYP to DP, boarding)"],
    },
  ],

  modesIntro:
    "All lessons for Umarkhed are online and one to one. The pace varies: a weekly slot, a burst during a school holiday or a tight run before an exam.",
  modes: [
    {
      title: "Regular weekly lessons",
      description:
        "One regular slot of an hour or ninety minutes, same tutor each week, tracking whatever unit your child is on.",
      bullets: [
        "One tutor throughout, so feedback compounds",
        "Digital whiteboard and past-paper practice",
        "Suits PYP, MYP, DP and IGCSE",
        "Slot moved if a festival or heat wave intrudes",
      ],
    },
    {
      title: "Holiday-time intensives",
      description:
        "Concentrated sessions in a boarder's term break or the long summer holiday, used to get ahead on units and mend weak spots.",
      bullets: [
        "Planned around real school dates",
        "More hours per week than a regular slot",
        "A summary for the school if you wish",
        "Easing back to weekly after the break",
      ],
    },
    {
      title: "Exam-series preparation",
      description:
        "Timed papers marked and reviewed in the weeks before a May, November or January series.",
      bullets: [
        "Marked to the official scheme",
        "Feedback within a couple of days",
        "Best started three weeks ahead",
        "Paused sensibly for any local closure",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school near Umarkhed?",
      paragraphs: [
        "We could not confirm an IB or IGCSE school in Umarkhed, and we will not print a name we cannot verify. The town has State Board and CBSE schools, some with English-medium sections, and junior colleges that send students onward to Nanded, Nagpur, Pune and Hyderabad.",
        "The confirmed international campuses nearest to the Yavatmal district are in Nagpur, more than 250 kilometres away. D Y Patil International School at MIHAN, Centre Point School International, VIBGYOR World Academy and International School of Scholars are the ones neighbouring towns most often look at. For residential IB study, families sometimes weigh Oakridge in Hyderabad or boarding schools such as Aamby and the Mahindra United World College in western Maharashtra.",
        "None is a daily commute from Umarkhed, so a seat there would mean boarding or moving the household. Many Umarkhed enquiries therefore come from families whose child studies elsewhere, or who plan to move soon.",
        "The table shows how the map looks so a family can weigh distance first.",
      ],
      table: {
        caption: "International-curriculum options within reach of Umarkhed",
        columns: ["School", "Place", "Type of option", "Approximate distance"],
        rows: [
          ["D Y Patil International School", "MIHAN, Nagpur", "Day school, relocation needed", "About 260 km"],
          ["Centre Point School International", "Nagpur", "Day school, relocation needed", "About 270 km"],
          ["Oakridge International School", "Hyderabad", "Day and boarding options, distant", "About 350 km"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed in Umarkhed",
        "Nagpur holds the nearest confirmed campuses",
        "Attending in person means boarding or moving",
        "Online tuition covers the time between campus and home",
      ],
    },
    {
      heading: "How does the Maharashtra State Board compare with the IB and IGCSE?",
      paragraphs: [
        "A student from the Maharashtra State Board finds the international syllabi ask for a different habit. SSC and HSC papers reward accurate reproduction of textbook material. IB and IGCSE examiners give marks for showing a method, weighing evidence and applying an idea to an unseen case.",
        "Topics in Class 9 and 10 can sound the same on the surface. What changes is command words, mark scheme logic and the amount of explanation expected. A one-line answer that earns full marks in a State Board paper may earn a fraction in a Cambridge extended question.",
        "Language needs attention. Marathi, Hindi and Banjara are widely used around Umarkhed, and some households speak Telugu, while IB and IGCSE papers are in English. A student who reads English well may still need practice writing structured extended answers.",
        "Both international routes are recognised for Indian and overseas university admissions.",
      ],
      table: {
        caption: "Board comparison for an Umarkhed household",
        columns: ["Feature", "Maharashtra State Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["What earns credit", "Accurate textbook answers", "Recall and application", "Reasoned response with working", "Argument, evaluation and method"],
          ["Coursework", "Small internal component", "Internal assessment", "Some subjects only", "Internal Assessments and Extended Essay"],
          ["Language of papers", "Marathi, Hindi or English", "English or Hindi", "English", "English for most subjects"],
          ["Main exam window", "February to March", "February to April", "May-June, Oct-Nov, Jan (Edexcel)", "May, November at a few schools"],
        ],
      },
      bullets: [
        "Method and reasoning earn the marks",
        "Practicals are assessed on paper",
        "English extended-writing practice helps most",
        "Both routes are recognised widely",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition in Umarkhed cost, and why do quotes differ?",
      paragraphs: [
        "We do not publish rates. A quote is sent in writing before a trial is booked, because it depends on the student and not on the town. The level matters most, since IB Higher Level Physics takes more preparation than IGCSE Core Business, and so do session length and weekly frequency.",
        "A tutor's specific experience is the other big factor. Someone who has taught your child's exact specification recently will typically be quicker at finding what is wrong. Living in Umarkhed changes nothing, because nobody travels.",
        "When a tutor is the only teacher a student has for a subject, sessions run longer and more often than a top-up.",
        "Nothing binds a family to a term. Lessons can stop for a school exam fortnight or a family event, and a poor fit after the trial leads to a new tutor and no lost fee.",
      ],
      bullets: [
        "Level, length and weekly frequency move the rate",
        "Experience with the exact specification counts too",
        "No travel cost as every lesson is online",
        "Free trial first, with rates in writing before booking",
      ],
    },
    {
      heading: "Should an Umarkhed student choose online tuition, a coaching class or self-study?",
      paragraphs: [
        "Umarkhed and Pusad have coaching classes aimed at the Maharashtra Board, MHT-CET, NEET and JEE. They work well for those exams and are run in large batches. A Higher Level IB Chemistry group or a Cambridge Additional Mathematics class is unlikely to run, because too few students would enrol.",
        "Self-study is feasible for some. A disciplined IGCSE Mathematics student with past papers can do a lot alone. The IB is harder to self-teach, because its weightiest parts, including Internal Assessment plans, Extended Essay outlines and long responses, improve only when someone reads and responds.",
        "A one-to-one online tutor fills the middle ground. Marked work comes back quickly and the lessons follow the specification, which helps a student whose school is in another city.",
        "Here is how the routes compare.",
      ],
      table: {
        caption: "Support routes for an international-curriculum student in Umarkhed",
        columns: ["Route", "Matches the IB or IGCSE course?", "Feedback on writing", "Main limit"],
        rows: [
          ["Local coaching class", "Built for State Board, MHT-CET, NEET and JEE", "Shared across a big batch", "No IB or IGCSE batch"],
          ["Self-study with past papers", "Yes, if the student is disciplined", "None unless someone reads it", "Weak for IAs and essays"],
          ["Online school or provider teacher", "Yes, where the student is enrolled", "Depends on class size", "Often stretched across many learners"],
          ["One-to-one online tutor", "Yes, matched to the exact code", "Detailed and quick", "Needs steady internet and a fixed slot"],
        ],
      },
      bullets: [
        "Local coaching serves other exams",
        "Self-study is strongest in Mathematics",
        "Provider teachers may have big classes",
        "A private tutor is tied to your syllabus",
      ],
    },
    {
      heading: "How do the cotton season, heat and festivals shape the school year in Umarkhed?",
      paragraphs: [
        "In this cotton belt the season shapes the household. Sowing follows the first monsoon rains in June, and picking runs through the cooler months, when farm families are stretched thin. Trading families feel the same rhythm through the market, so evenings can be busy.",
        "Summer in Vidarbha is severe. May temperatures often climb above 44 degrees, power supply can be uneven and afternoons are impractical for study, so lessons move to early morning or late evening. The monsoon runs from June to September, and the Penganga can rise in heavy years.",
        "Ganeshotsav, Navratri, Deepavali, Gudi Padwa and Holi bring their own pauses, and the Banjara community's Teej celebrations add to the local calendar. Weddings crowd weekends in the winter months.",
        "Boards fix their own dates whatever happens locally: the IB Diploma starts in May, Cambridge runs two series in May-June and October-November, and Edexcel adds January.",
      ],
      table: {
        caption: "A study year in Umarkhed",
        columns: ["Period", "What is happening", "How lessons adapt"],
        rows: [
          ["June to September", "Monsoon sowing, Ganeshotsav, river levels", "Regular slots and a backup connection"],
          ["October to December", "Navratri, Deepavali, cotton picking", "Short evening sessions, weekend blocks"],
          ["January to March", "Cooler weather, State Board exams, Holi, weddings", "Flexible weekday slots"],
          ["April to May", "Severe heat, IB and Cambridge May papers", "Early-morning sessions and timed papers"],
        ],
      },
      bullets: [
        "Cotton picking and trading affect evening availability",
        "May heat makes afternoons unusable for study",
        "Monsoon rain and power cuts may interrupt lessons",
        "Exam dates stay fixed by the boards",
      ],
    },
    {
      heading: "Where can an Umarkhed student go after IB or IGCSE?",
      paragraphs: [
        "From Umarkhed, the nearest university hubs are Nanded, with Swami Ramanand Teerth Marathwada University, and Amravati and Nagpur across the district, with Sant Gadge Baba Amravati University and Nagpur's colleges. Pune, Mumbai and Hyderabad draw those who want a wider choice and can live away.",
        "Indian degrees are reachable through Association of Indian Universities equivalence for the IB, and for IGCSE when paired with a Class 12 route. The Common University",
        "Universities abroad look first at predicted grades, which come from mock papers and coursework, so steady work from early Class 11 protects them.",
        "Tutors focus on subject learning behind these routes and leave admissions counselling to a school or a specialist.",
      ],
      bullets: [
        "Nanded, Amravati and Nagpur are the regional hubs",
        "AIU equivalence and CUET-UG help for Indian degrees",
        "Check MHT-CET, JEE and NEET rules for IB and IGCSE students",
        "Predicted grades matter for overseas applications",
      ],
    },
    {
      heading: "How does IB Maths and Science tutoring work for an Umarkhed student?",
      paragraphs: [
        "Start by choosing between Analysis and Approaches and Applications and Interpretation.",
        "For the sciences a tutor goes through the subject guide one unit at a time and sets past-paper questions in the present style.",
        "Laboratory access is often the missing piece. Without a school lab, practicals are planned using simulations and recorded data, and the tutor checks whether the method would pass with an examiner.",
        "A short note after each lesson lists what was covered, the latest score and the next unit.",
      ],
      bullets: [
        "Choose the Maths course by university plan",
        "Sciences taught topic by topic with timed questions",
        "Investigations built around what a home can measure",
        "A brief note follows each lesson",
      ],
    },
    {
      heading: "IGCSE Core or Extended: which tier should an Umarkhed student choose?",
      paragraphs: [
        "Most Cambridge subjects come in a Core and an Extended tier, and Edexcel offers Foundation and Higher. Core tops out at grade C and Extended reaches A*, so the choice sets a ceiling. It should be settled early, because Extended material cannot be absorbed in a sprint.",
        "Anyone heading for IB Analysis and Approaches or Higher Level science will nearly always be better off in Extended, often with Additional Mathematics alongside.",
        "No school is at hand to advise, so the first diagnostic lesson does it: it shows what the student can do today, and the family chooses from that.",
        "Registration is the practical hurdle. Candidates need an authorised centre, whose deadlines govern, so contact one many months before the series.",
      ],
      bullets: [
        "Tier decides the top grade available",
        "Extended or Higher suits those aiming at IB Higher Level",
        "A diagnostic lesson makes the choice concrete",
        "Secure an authorised centre early",
      ],
    },
  ],

  tutorsIntro:
    "Every tutor listed teaches IB and IGCSE remotely from somewhere else in India, and nobody needs to live near Umarkhed for that. The test is whether they have lately taught the very syllabus and level your child is on.",

  process: [
    { title: "Send the brief", description: "Board, subject, level, where the student is enrolled and which exam series is next." },
    { title: "Review the shortlist", description: "Tutors who taught that course lately, each with a note on why they fit." },
    { title: "Take a free lesson", description: "A live session on a real topic, so the teaching is judged before any rate is agreed." },
    { title: "Read the written plan", description: "What the opening weeks cover and how you will hear about progress." },
    { title: "Fix a rhythm", description: "A weekly slot that flexes around festivals, exams and holiday blocks." },
  ],

  whyPoints: [
    { title: "Matched to the syllabus code", description: "Selection follows the course and level, not a general subject label." },
    { title: "Ready to teach alone", description: "Tutors expect to carry a course where no school nearby does." },
    { title: "See it before paying", description: "The first lesson is free and live." },
    { title: "Coaching, not ghost-writing", description: "Guidance on IAs and essays, with the writing left to the student." },
    { title: "Progress on paper", description: "A note after each session and a review every few weeks." },
    { title: "Simple to change", description: "No long contract and a new tutor if the fit is wrong." },
  ],

  faqs: [
    { question: "Is there an IB school in Umarkhed?", answer: "Nothing confirmable in Umarkhed. Local schools teach the Maharashtra State Board or CBSE." },
    { question: "Can an IB or IGCSE tutor come to my house in Umarkhed?", answer: "No. Tutors do not travel to Umarkhed, and in-person home tuition exists only in Gurugram and parts of Delhi NCR. Here, tuition at home takes the form of a live, private video lesson: your child works at a desk in your house, the tutor teaches one to one, and everything runs on Indian Standard Time." },
    { question: "How much does IB or IGCSE tuition cost in Umarkhed?", answer: "Quotes vary with the level, how long and how often lessons run, and how well the tutor knows that exact specification. Each is given in writing before booking. Being in Umarkhed costs nothing extra. Because the trial is free, you will have watched the teaching before discussing any figure." },
    { question: "Which international schools are closest to Umarkhed?", answer: "The nearest confirmed campuses are in Nagpur, including D Y Patil International School at MIHAN, Centre Point School International and VIBGYOR World Academy. Hyderabad and western Maharashtra have boarding options. All are far enough to mean boarding or a move. They are listed as context only, and IB Gram has no link with them." },
    { question: "Can a Marathi-medium student switch to IGCSE or the IB?", answer: "Yes, with some extra effort on English writing at the outset. A tutor begins by reading what your child writes now, then sets short drills on command words and building a paragraph. A switch at Class 8 or 9 is gentler than one at Class 11, though older switchers do manage." },
    { question: "Which IB Diploma subjects can your tutors teach?", answer: "Mathematics (Analysis and Approaches as well as Applications and Interpretation, HL and SL), the three sciences, Economics, Business Management, Computer Science, Psychology, English A, Marathi A, Hindi B, Environmental Systems and Societies and TOK. A subject absent here is still worth asking about, and we will answer frankly." },
    { question: "Do you teach MYP and PYP students as well?", answer: "Yes. On the MYP side we help with criterion-style writing, science reports, Mathematics and the Personal Project, strictly as coaching." },
    { question: "Will the tutor write my child's Internal Assessment or Extended Essay?", answer: "Never. A tutor can unpack the marking criteria, help the student settle on a question that can be researched, review a plan and react honestly to drafts. The investigating, drafting and analysis belong to your child, exactly as IB rules require, whatever the calendar says." },
    { question: "Which IGCSE boards and subjects do you cover?", answer: "Cambridge and Pearson Edexcel, spanning Mathematics, Additional Mathematics, the three sciences, Economics, Computer Science, English and more. The syllabus code printed on your child's past paper is the best thing to send, because we assign tutors by code and not by a broad subject heading." },
    { question: "Where can my child sit IB or IGCSE exams from Umarkhed?", answer: "Through a recognised exam centre only. Entries for the IB, Cambridge and Edexcel are made by schools or approved centres, and we found none in Umarkhed. Private candidates usually enter via a centre in Nagpur or another large city, and those entries shut months ahead, so enquire early." },
    { question: "When should tuition begin?", answer: "The sooner in the course, the better: Class 11 suits the Diploma and Class 9 suits IGCSE, because habits and foundations are easiest to set early. Joining mid-course is fine too. A diagnostic first lesson finds the weakest heavily-tested topics, and the plan starts there." },
    { question: "Is online tuition enough if no school teaches the course?", answer: "Often yes, when the tutor treats it as a full course and not a doubt-clearing service. At the start we collect the syllabus outline and whatever calendar the online provider follows, then map the year. Mathematics may need only one session a week, while a practical science plus papers may need two." },
    { question: "How do you handle summer heat, power cuts and festival weeks?", answer: "By building slack into the plan. In May, sessions move to early morning or late evening. If a power cut or a festival removes a lesson, it moves within the week. A mobile hotspot as a backup is a sensible precaution, especially in the monsoon and in peak summer." },
    { question: "What if the tutor is not right for my child?", answer: "We swap the tutor. A quick word from you is enough, since we also check in every few weeks and no long agreement exists to get stuck in. The notes written after each lesson give a steady record, so you can tell over a fortnight or two whether the teaching is landing." },
    { question: "How do I book the free trial lesson?", answer: "WhatsApp +91 7439 368 115 or email support@ibgram.com with your child's board or programme, subject, current level and a few evenings that work. We come back with candidate tutors and a trial time. That first session is a proper live lesson, and nothing about fees is settled until afterwards." },
    { question: "Is IB Gram linked to a school, the IB or Cambridge?", answer: "IB Gram stands apart from all of them. It has no partnership with the International Baccalaureate, Cambridge, Pearson Edexcel or any school on this page, and each school is named purely to help a family judge distances. Inclusion here is not an endorsement, and families should verify curricula, fees and intake directly with schools." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online tuition works for families in every city." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where tutors visit homes." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Programme-level detail on IB tutoring." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject choices explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, Core and assessment together." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches compared with Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Search by programme, subject and level." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and book the trial." },
    { label: "IB and IGCSE tutors in Pusad", href: "/pusad/", description: "The neighbouring town in Yavatmal district." },
    { label: "IB and IGCSE tutors in Yavatmal", href: "/yavatmal/", description: "The district headquarters, served the same way." },
    { label: "IB and IGCSE tutors in Nanded", href: "/nanded-waghala/", description: "The nearest Marathwada city across the river." },
    { label: "IB and IGCSE tutors in Nagpur", href: "/nagpur/", description: "Where the nearest international campuses are." },
  ],

  closingHeading: "Start a free IB or IGCSE lesson from Umarkhed",
  closingBody:
    "Share your child's programme or board, the subject and level, where they currently study and when evenings are free. A matched tutor and a trial time come back to you, all on video, and the decision is yours once the lesson is over. Email support@ibgram.com or WhatsApp +91 7439 368 115.",
};
