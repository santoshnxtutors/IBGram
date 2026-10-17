import type { CitySeoPage } from "../types";

/**
 * /tandur/ - IB and IGCSE tutoring page for Tandur, Vikarabad district, Telangana. Online-only delivery:
 * tutors do not visit homes in Tandur (in-person home tuition runs only in Gurugram and parts of Delhi NCR).
 * No school in Tandur could be confirmed to offer IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and
 * the clusters point honestly to Hyderabad, reusing school names already confirmed on hyderabad.ts.
 */
export const tandur: CitySeoPage = {
  slug: "tandur",
  countryName: "Tandur",
  countryNameLong: "Tandur, Telangana",
  demonym: "Tandur",
  state: "Telangana",
  stateCode: "IN-TG",
  flagCode: "in",
  countryCode: "IN",
  region: "Telangana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We fit Tandur lessons around the Deccan summer heat, the June to September rains, Bathukamma and Dasara, and most of all the school timetable your child already follows",
  lastUpdated: "2026-09-21",
  geo: { latitude: 17.2576, longitude: 77.5875 },
  wikipedia: "https://en.wikipedia.org/wiki/Tandur",
  alternateNames: ["Tandoor", "Tandur Vikarabad"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Tandur | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE private tuition for Tandur students in Vikarabad district, with live one-to-one lessons set to the Telangana school year and a free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Tandur",
  heroEyebrow: "ONE-TO-ONE IB & IGCSE TUITION FOR TANDUR FAMILIES",
  heroSubtitle:
    "Searching for IB home tuition or IGCSE private tuition in Tandur usually ends at a directory page with no real IB specialist on it. IB and IGCSE tutors in Tandur are therefore reached online: live private lessons your child attends from home on a laptop, taught by Indian tutors who work the same syllabus and the same clock.",
  primaryKeyword: "IB and IGCSE tutors in Tandur",
  imageAltText: "A Tandur student at a desk at home on a video lesson with an IB Maths tutor, with a past paper open beside the laptop",
  secondaryKeywords: [
    "IB tutor Tandur",
    "IGCSE tutor Tandur",
    "IB home tuition Tandur",
    "IGCSE home tuition Tandur",
    "IB private tuition Tandur",
    "IB Maths tutor Tandur",
    "IGCSE Maths tutor Tandur",
    "IB Physics tutor Tandur",
    "IB Chemistry tutor Tandur",
    "IB Biology tutor Tandur",
    "IB DP tutor Tandur",
    "IB MYP tutor Tandur",
    "IB PYP tutor Tandur",
    "IGCSE online tuition Tandur",
    "Cambridge IGCSE tutor Tandur",
    "IB tutor Vikarabad district",
    "online IB tutor Basheerabad",
    "IGCSE tutor Tandur Telangana",
    "IB tuition near Tandur",
    "Edexcel IGCSE tutor Tandur",
  ],

  heroTrustPoints: [
    "Lessons are live and online; tutors do not come to Tandur homes, because home visits run only in Gurugram and parts of Delhi NCR",
    "Matching begins from your child's exact IB course or Cambridge and Edexcel paper code, not from a loose board name",
    "The trial lesson is free, and rates are given to you in writing before any booking",
    "IB Gram is an independent service with no tie to any school, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "Online only", label: "Live lessons, no tutor visits in Tandur" },
    { value: "PYP to DP", label: "Every IB stage plus IGCSE" },
    { value: "IST", label: "Tutors teach on your own clock" },
    { value: "Free trial", label: "One full lesson before any commitment" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition means for a family in Tandur",
    paragraphs: [
      "Tandur is known across Telangana for its limestone, its cement works and a pigeon pea that carries a Geographical Indication tag, so the typical family here has roots in farming, stone, transport or small trade. Most children attend Telangana State Board or CBSE schools. IB and Cambridge IGCSE reach a Tandur household in other ways, and each way changes what a tutor needs to do.",
      "One route is a child who boards or studies in Hyderabad, about a day's round trip away, where the international schools sit, and who comes home for Dasara, Sankranti and the summer break with a backlog. Another is a family that has worked abroad or is preparing to, and wants a child to move onto an internationally recognised syllabus. A third is a student in a local school who simply needs stronger English, Maths or science than a single textbook allows, and whose parents have read about the IGCSE.",
      "Whichever applies, the tutoring is online, one student and one tutor, on a shared screen and a real whiteboard. That is how IB Gram works in every city outside Delhi NCR. You will not see a tutor arrive at a home in Tandur; in-person home lessons are run only in Gurugram and parts of Delhi NCR. What Tandur gains is a wider choice: the tutor is picked for the syllabus rather than for living nearby.",
      "We know of no school inside Tandur that offers the IB or Cambridge or Edexcel IGCSE, and this page says so plainly. It also explains the closest real options in Hyderabad, what tutoring costs and why, how exams fall against a Telangana calendar, and which universities IB and IGCSE students here usually target. IB Gram is independent of all schools and boards named on this page.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Live online lessons for Tandur students, with no travel to Vikarabad or Hyderabad",
      "Support for boarders home on holiday and for families shifting syllabus",
      "Written note after every lesson and a tutor change if the fit is wrong",
      "Coaching only: tutors never write IAs, Extended Essays, TOK essays or coursework",
    ],
  },

  programmesIntro:
    "Since no school in Tandur runs an IB stage that we could confirm, each programme below reaches a local family through a child studying elsewhere or a move being planned, and the tutor works from the exact course the child follows.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Learning is organised into units of inquiry that blend subjects around a central idea, and the stage closes with the Exhibition, a project the child leads. Nothing is externally marked, so a tutor spends time on reading fluency, number sense and confidence in explaining ideas aloud, in short lessons a young child can hold attention through.",
      countryNote:
        "A Tandur parent asking about PYP is usually planning a move to a city school or has a younger child following an older sibling, so early lessons build reading and number habits before any school change.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Every subject is graded against published criteria, interdisciplinary units join subjects together, and Year 5 brings a Personal Project. Students from a marks-based board often struggle with command terms and with writing up a reasoned answer, so a tutor rehearses that style before it counts for a grade.",
      countryNote:
        "For a Tandur household, MYP help tends to be aimed at a student transferring from a Telugu-medium or Telangana State Board school, where English-medium criterion-based writing is the main hurdle.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard, with Theory of Knowledge, the Extended Essay and Creativity, Activity, Service around them. Internal assessments carry a fifth or more of many subject grades, and final papers reward structured, evidence-led answers more than recall.",
      countryNote:
        "DP tutoring tied to Tandur mostly supports a student boarding in a Hyderabad school, revised hard during the Dasara and summer breaks, and sometimes a repeat sitting after a disappointing result.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP pairs a small number of Diploma courses with a career-related study, a reflective project and work on personal and professional skills. Few Indian schools run it, so enquiries are rare, but the Diploma subjects inside it are taught like any other.",
      countryNote:
        "Interest in CP from Tandur is uncommon; where it arises, tutoring concentrates on the Diploma-level courses in the student's chosen combination rather than the reflective project.",
    },
  ],

  subjectsIntro:
    "Subject and level decide everything, so tell us whether the student takes Maths AA or AI, which sciences, and at what level. A boarder in Hyderabad needs different help from a Tandur child weighing a move, and the tutor is chosen accordingly.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof-style reasoning, with attention to setting out method marks clearly and to the Paper 1 habit of working without a calculator." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and technology use, where fluent graphic-calculator work and clear interpretation of results earn most of the marks." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics, plus a practical investigation written up to the published criteria and checked for sound method." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics, equilibrium and organic pathways, practised through timed questions so that calculation errors are found before an exam does." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and physiology, with data-based questions and the exact command words that decide how long an answer should be." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams drawn cleanly and applied to live examples, then extended evaluation for the longer responses the higher paper rewards." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study technique, where applying a concept to the facts given matters far more than quoting its definition." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis of unseen material, comparative essays and the individual oral, with writing tightened towards the assessment criteria." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory topics alongside real programming practice, because the internal assessment must run as working, documented software." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies from each approach held accurately in memory, and extended responses practised until they argue rather than list." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking applied to land, water and climate topics, including the kind of dry-land and monsoon-fed agriculture a Telangana student knows first hand." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies learnt with real places and figures, and fieldwork reports checked so the method could be defended if questioned." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion-led sessions on knowledge questions, the exhibition and the prescribed titles, coached but never written for the student." },
    { name: "Hindi B", levels: "HL / SL", description: "Register, text types and spoken confidence for the oral, useful for a Telugu-first student who uses Hindi as the third language." },
    { name: "Telugu (school-supported language)", levels: "Ab initio / B", description: "Where a school offers Telugu through the IB, language support follows the school's own course; we confirm availability before matching." },
  ],

  igcseSubjectsIntro:
    "Telangana State Board schools do not teach Cambridge or Edexcel codes, so a Tandur student meets IGCSE through a school in Hyderabad or through a family's own decision. Lessons follow the exact code and tier, Core or Extended, the student is entered for.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics, with non-calculator fluency built first so that method marks stop leaking on Paper 2 and Paper 4." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, logarithms and vectors ahead of the Diploma, a useful head start for a student aiming at Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, electricity, waves and thermal physics, with formula rearrangement drilled and the alternative-to-practical paper taught as its own skill." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactivity, organic chemistry and qualitative analysis, practised through past questions in the order they tend to appear." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Inheritance, transport, ecology and human physiology, with extended answers built around the precise terms a mark scheme wants." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and descriptive or argumentative composition, for students whose home language is Telugu or Urdu." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python practice beside the written theory, since tracing an algorithm sticks once the same logic has run on screen." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Supply, demand and government policy, with diagram accuracy first and evaluation after." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case-based answers that apply terms to the scenario in front of the student, not to a generic firm." },
  ],

  regionsTitle: "Tandur and nearby areas we support with online IB and IGCSE matching",
  regionsIntro:
    "Lessons happen online, so a locality matters for context, not for a tutor's travel: how long a school day runs, how a family's evening looks, and how steady the connection is. These are the parts of Tandur and Vikarabad district our families write from.",
  regions: [
    { name: "Tandur town centre", note: "The main market and school belt, where most Telangana State Board and CBSE day schools are found and where study hours follow the market day." },
    { name: "Tandur railway station side", note: "Families here use the Hyderabad and Wadi line, which matters for boarders travelling to and from a Hyderabad school at term ends." },
    { name: "Basheerabad", note: "A neighbouring mandal headquarters where students often travel into Tandur for school, so online lessons after school save a second commute." },
    { name: "Yalal", note: "A smaller mandal town in Tandur's orbit, with mostly government and small private schools and fewer options for English-medium specialist tutoring." },
    { name: "Peddemul", note: "A rural-edge area where internet reliability varies, so we suggest a fixed indoor slot and a wired or well-placed router." },
    { name: "Bomraspet", note: "An agricultural mandal where harvest weeks can change a family's evenings, which a tutor can plan around from the start." },
    { name: "Kodangal", note: "A larger mandal town in Vikarabad district, with its own school mix and families who commute to Tandur or Vikarabad for higher classes." },
    { name: "Vikarabad road corridor", note: "Households along the road to Vikarabad look to the district headquarters for schools and, for international options, onward to Hyderabad." },
    { name: "Zaheerabad road side", note: "Families on the western approach sometimes weigh Hyderabad against Sangareddy side schools, and ask about syllabus change before a move." },
  ],

  schoolDisclaimer:
    "The schools named here are listed only to describe the curriculum picture near Tandur and the closest city with confirmed international options. IB Gram is independent and has no link, partnership or endorsement arrangement with any of them, with the IB, with Cambridge International or with Pearson Edexcel. Check a school's current authorisation and fees with the school itself.",
  schoolClusters: [
    {
      city: "Tandur town",
      note: "We could not confirm any school inside Tandur offering the IB or Cambridge or Edexcel IGCSE. Local schools run Telangana State Board, with some CBSE and Urdu-medium options, so IB and IGCSE work is done online alongside whatever the school teaches.",
      schools: [],
    },
    {
      city: "Nearby: Hyderabad (Gachibowli, Financial District and north-west)",
      note: "The state's main cluster of international-curriculum campuses is in Hyderabad, a long road or rail journey from Tandur, so it comes up mostly for boarding or for families relocating for work.",
      schools: ["Oakridge International School", "CHIREC International School", "International School of Hyderabad"],
    },
    {
      city: "Nearby: Hyderabad (Secunderabad and further out)",
      note: "A second group sits on the city's wider edge, where a Tandur family weighing a move sometimes finds a shorter commute and a different fee level.",
      schools: ["Sreenidhi International School", "The Gaudium School", "Glendale International School"],
    },
  ],

  modesIntro:
    "With tutors in another city, the choices come down to rhythm, not place. One family wants a single weekly lesson, another a written trail parents can follow, a third an intense block before a mock.",
  modes: [
    {
      title: "Weekly one-to-one video lesson",
      description:
        "A fixed hour each week with one tutor, a shared whiteboard and a past-paper habit. It suits most Tandur students whose school also follows a steady weekly routine.",
      bullets: [
        "The same tutor carries the student through the term",
        "Works for IB DP and MYP as well as Cambridge and Edexcel IGCSE",
        "Marking is done live, so errors are corrected while fresh",
        "Timing can move around exams at the school in Hyderabad",
      ],
    },
    {
      title: "Lessons with a written progress trail",
      description:
        "The weekly lesson continues, and a short note after each one records what was covered and what to do next; every few weeks the tutor reviews the plan with parents.",
      bullets: [
        "Notes arrive in writing after every session",
        "A longer review every few weeks resets the plan",
        "Helpful when parents are working hours away from the desk",
        "A second weekly slot can be added without paperwork",
      ],
    },
    {
      title: "Holiday and pre-exam intensive",
      description:
        "Lessons bunch together during the Dasara and summer breaks, or in the last weeks before a session, working through timed papers with quick feedback.",
      bullets: [
        "Timed papers marked against the published mark scheme",
        "Feedback returned within days",
        "Planned around a boarder's travel home by train or bus",
        "Best booked a fortnight before the term break begins",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families in Tandur",
      paragraphs: [
        "Nobody should arrive at Tandur expecting an IB campus. We checked school directories and found only State Board, CBSE and Urdu-medium schools inside the town, with no confirmed IB or Cambridge or Edexcel IGCSE affiliation. Hyderabad, not Tandur, is where the state's international schools cluster, and that shapes every conversation we have with families here.",
        "The families who write to IB Gram fall into a few groups. Some have a child boarding or living in Hyderabad, home at Dasara and in the long summer break. Some have relatives in the Gulf, the United States or the United Kingdom and are planning a move or a study route abroad. Some run stone, cement-supply, transport or agricultural businesses and want their children to hold a qualification any university in the world reads without explanation.",
        "A third kind of household is comparing paths. The child is doing well in a Telangana State Board school, and the parents want to know whether the IGCSE or IB Diploma would open more doors, what it demands, and whether a family outside Hyderabad can realistically support it. An honest answer is yes, with online tutoring, but only if the school move itself is workable.",
        "Because the local supply of specialists is close to nil, the online route is not a second best here. A tutor who teaches IB Chemistry HL every week is worth more to a student than a general tutor who lives twenty minutes away. Exam papers and IB moderation are the same everywhere; only access to a good explainer varies, and that is what we try to equalise.",
      ],
      table: {
        caption: "The school picture around Tandur",
        columns: ["Board or programme", "Where families meet it", "What it means for tuition"],
        rows: [
          ["Telangana State Board (SSC, Intermediate)", "Most government and many private schools in Tandur and Vikarabad district", "Extra support is mostly English and exam technique"],
          ["CBSE", "A smaller group of private schools in and around Tandur", "Tutoring matches NCERT pace; IB or IGCSE is an add-on"],
          ["Urdu-medium state schools", "Town schools serving Urdu-speaking families", "English-medium bridging matters for any international route"],
          ["IB or Cambridge / Edexcel IGCSE", "No confirmed school in Tandur; Hyderabad campuses nearby", "Reached by boarding, relocation or self-directed online study"],
        ],
      },
      bullets: [
        "No Tandur school confirmed for IB or IGCSE at present",
        "Most IB and IGCSE families are linked to Hyderabad, boarding or relocation",
        "Online tutoring gives access to specialists the town does not have",
        "Papers and moderation are identical to those sat in any large city",
      ],
    },
    {
      heading: "How is IB or IGCSE different from Telangana State Board and CBSE?",
      paragraphs: [
        "The short answer is that Telangana State Board and CBSE reward a student who has learnt a set syllabus and reproduces it accurately in a final paper, while the IB and IGCSE reward a student who can apply ideas to unfamiliar material and explain the reasoning. The content may overlap; the way it is tested does not.",
        "Coursework shows the difference most. A State Board student's internal marks are modest, and in CBSE they are a limited share. In the IB, an internal assessment such as a Physics investigation or a Maths exploration is a sustained piece marked against criteria, and in some IGCSE subjects coursework or a practical paper carries real weight. Students used to one big exam find this style unfamiliar at first.",
        "Language is the other gap. A student from a Telugu-medium or Urdu-medium background may understand a concept perfectly and still lose marks because a command word such as evaluate or justify was not recognised. Much of early tutoring is simply teaching students to read a question the way an international examiner wrote it, then answer in clear English.",
        "None of this argues for or against leaving the State Board. Some Tandur families stay with it for the EAPCET and NEET route and add IGCSE Maths or English as a stretch. Others shift after Class 10. The right choice depends on what the student wants to study and where, which we are glad to talk through during the trial.",
      ],
      table: {
        caption: "Telangana State Board and CBSE compared with IB and IGCSE",
        columns: ["Feature", "State Board / CBSE", "IB / IGCSE"],
        rows: [
          ["Main assessment", "Final board paper, recall-heavy", "Papers plus internal or coursework components"],
          ["Question style", "Textbook-based, predictable", "Application, data and extended reasoning"],
          ["Language of instruction", "Telugu, Urdu or English", "English throughout"],
          ["Entrance route in India", "EAPCET, NEET, JEE directly", "AIU equivalence, CUET-UG, NEET with conditions"],
          ["Recognition abroad", "Recognised, sometimes needs bridging", "Widely recognised for admissions"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Tandur?",
      paragraphs: [
        "The cost depends on the subject, the level, the tutor's experience with that syllabus and how often the student meets, and we do not publish fixed prices. Rates are quoted in writing before you book, after the free trial, so you compare a real figure against a real lesson instead of a brochure range.",
        "A tutor with years of IB Physics HL teaching and examiner-style marking will charge differently from someone guiding a Class 8 student through MYP Maths. A twice-weekly plan before mocks will differ from a single weekly hour. We explain the reasoning for any quote so a Tandur family can see why, and adjust it if the plan changes.",
        "Because the lessons are online, a Tandur family does not pay for petrol, a tutor's travel time or a long round trip to Hyderabad for a coaching class. That is often a larger saving than it first appears, particularly for a boarder who would otherwise need a tutor nearby during every holiday. It also means more of what you spend reaches actual teaching time.",
        "Some things raise the bill without helping: a long contract, a fixed bundle of hours the student may not use, a tutor chosen for a famous name and not for fit. We avoid these. You pay for lessons taken, can stop whenever you choose, and can swap tutors if the first match is not right.",
      ],
      bullets: [
        "Subject and level (Maths HL versus a Class 8 MYP subject)",
        "Tutor experience with the exact syllabus and exam session",
        "Lesson length and number of weekly slots",
        "Extra timed-paper marking in the last weeks before an exam",
        "No published prices; rates are given in writing before booking",
      ],
    },
    {
      heading: "Online home tuition versus coaching classes, local tutors and self-study",
      paragraphs: [
        "Families in Tandur have four real choices for IB or IGCSE help, and each has a role. Online one-to-one tuition is the closest thing to home tuition here: a private tutor, at a fixed time, with a student in their own study room. It is not in-person, but it is personal, and it reaches subjects nobody locally teaches.",
        "Coaching classes in Hyderabad are built around group batches and usually around JEE, NEET or CBSE. They can be excellent at those, but an IB Biology internal assessment or an IGCSE Chemistry practical paper is not what they are organised to teach, and commuting from Tandur makes regular attendance hard.",
        "A local private tutor is valuable when the student needs foundation work in Maths or English. But finding one who has taught the IB or Cambridge mark scheme in a town of this size is unusual, so many families use a local tutor for basics and an online specialist for the syllabus itself.",
        "Self-study with past papers works for a motivated student with a clear mark scheme. The risk is silent error: a student who practises a wrong method repeatedly gets no feedback. A tutor can be used lightly, for marking and diagnosis, to keep self-study honest.",
      ],
      table: {
        caption: "Ways to get IB and IGCSE help from Tandur",
        columns: ["Option", "Strength", "Limit", "Suits"],
        rows: [
          ["Online one-to-one tuition", "Syllabus specialist, personal, fixed slot", "Needs a laptop and a steady connection", "DP, MYP and IGCSE students wanting depth"],
          ["Hyderabad coaching centre", "Energy of a batch, structured timetable", "Long commute, JEE and NEET focus", "Students already living in Hyderabad"],
          ["Local private tutor", "Nearby, familiar with the school", "Rarely knows IB or Cambridge mark schemes", "Foundation Maths and English"],
          ["Self-study with past papers", "Low cost, flexible", "No feedback on wrong methods", "Self-driven students with a mentor check"],
        ],
      },
    },
    {
      heading: "Exam calendar and Tandur's school year",
      paragraphs: [
        "IB Diploma exams run in May and November sessions, Cambridge IGCSE in the May and June and October and November series, and Pearson Edexcel IGCSE in May and June and again in November. A Hyderabad-based school sets its own dates for mocks, so the first job of a tutor is to get the exact timetable from the student.",
        "Tandur's own rhythm sits on top of this. Summer in the Deccan is hot and long, with March to May bringing afternoons too warm for comfortable study, so we usually suggest early-morning or evening slots then. The southwest monsoon arrives in June and can interrupt power and connectivity for a day, so a backup plan for a lesson is sensible.",
        "Festivals shape the year too. Bathukamma and Dasara fall in the autumn term, a natural moment for a boarder's holiday block, while Sankranti brings a short winter break and Ugadi usually falls in the run-up to spring exams. Tutors look at these dates first and place intensive lessons around them, not over them.",
        "Board examinations add pressure for students who also sit the State Board or CBSE. A student carrying both must not be overloaded in February and March, and we sometimes advise pausing IGCSE lessons for a fortnight. Planning this early avoids a crisis later.",
      ],
      table: {
        caption: "Exam and term timing for a Tandur student",
        columns: ["Period", "What is happening", "Tutoring focus"],
        rows: [
          ["March to May", "IB May session, IGCSE May and June series, Deccan summer heat", "Early-morning slots, timed papers, rest days"],
          ["June to September", "Southwest monsoon, new academic year", "Foundation building, internal assessment planning"],
          ["October to November", "Bathukamma, Dasara, IB November session, IGCSE October and November series", "Holiday intensives, final mocks"],
          ["December to February", "Sankranti, winter, mock exams, State Board pressure", "Past-paper marking, workload balancing"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Tandur go to university?",
      paragraphs: [
        "IB Diploma and Cambridge IGCSE followed by A Levels are accepted by universities in the United Kingdom, the United States, Canada, Australia, Singapore and much of Europe. A Tandur student with a strong Diploma has a wide set of options, and the IB's emphasis on independent writing and research is well regarded in admissions.",
        "Within India, the Association of Indian Universities issues equivalence for IB and for Cambridge qualifications, which is usually needed when applying to Indian institutions. Many central and private universities admit through CUET-UG, and students should check each programme's subject requirements. A few national-level courses have rules for overseas boards, so early checking matters.",
        "Medicine and engineering need separate attention. NEET-UG requires Physics, Chemistry and Biology or Biotechnology at an acceptable level, and a student from the IB should confirm current eligibility and subject rules before choosing Diploma subjects. For engineering, JEE Main has its own eligibility rules, and many IB students choose university routes abroad or private colleges instead.",
        "A family in Tandur should treat this as a planning conversation as early as Class 9 or 10. The subjects chosen at 16 shape the options at 18, and once the Diploma starts, changes are difficult. We are not an admissions service, and we do not promise any outcome, but tutors who have seen many pathways can help a student ask the right questions.",
      ],
    },
    {
      heading: "IB Maths AA and AI and the sciences: what students actually need",
      paragraphs: [
        "IB Mathematics offers Analysis and Approaches and Applications and Interpretation, each at Higher and Standard level. AA suits a student who enjoys algebra and calculus and may study engineering, physics or pure mathematics. AI suits one who prefers statistics, modelling and technology, for example in business, economics or social sciences. Students often pick on instinct and regret it, so we talk through the choice.",
        "The Maths internal assessment, an exploration of a topic the student chooses, is a place where confidence often wobbles. A tutor does not write it, but helps the student select a manageable question, test whether the mathematics is at the right level and understand what the criteria reward. Students who start early finish calmly.",
        "Physics, Chemistry and Biology share a practical internal assessment and two or three written papers. The common trouble spots are unit handling, multi-step calculations, organic reaction pathways and extended data-response answers. Timed practice with the data booklet reveals these quickly, and a tutor marks the paper the way an examiner would.",
        "Students moving from a State Board background frequently find the sciences easy in content but tough in style. A question on equilibrium may come with a graph, a table and an experimental setting, and the answer must draw on all three. We practise this gradually, starting with guided problems and moving to unseen ones.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects to take?",
      paragraphs: [
        "Core and Extended are tiers within a subject such as Mathematics, Physics or Chemistry. Core papers cap the highest grade reachable at a C, while Extended opens the full range from A star downwards. A student who plans to take A Level or IB Higher Level Maths should normally sit the Extended tier and build the pace for it.",
        "Subject choice at Grade 9 matters more than many families expect. Universities abroad like to see a balance of languages, sciences and humanities, while a student aiming for engineering will want Mathematics, Physics and Chemistry at Extended, perhaps with Additional Mathematics. Computer Science and Economics are good supplementary options.",
        "English is a special case in Tandur. A student whose first language is Telugu or Urdu may choose English as a Second Language or First Language, and the decision affects confidence across the whole qualification. A tutor can assess writing and reading and suggest which fits, rather than leaving it to a guess.",
        "Edexcel and Cambridge codes differ in structure and mark schemes, so we never treat them as interchangeable. A tutor who knows 0580 is not automatically ready for the Edexcel 4MA1, and we match on the exact code the student will sit.",
      ],
    },
    {
      heading: "How does IB Gram match a tutor for a Tandur family?",
      paragraphs: [
        "You tell us the programme or board, the subject and level, the exam session and what the student currently scores. We then suggest tutors who have taught that exact course, explain why each suits, and arrange a free trial lesson. Nothing is booked, and nothing is charged, until you have seen the tutor at work.",
        "Tutors are based in India and teach in Indian Standard Time, so there are no awkward time zones. Each is reviewed on qualifications, recent teaching of the specific syllabus and their ability to explain clearly to a teenager. We care about how they question a student, not only what they know.",
        "After every lesson you receive a short written note with what was done and what comes next. Every few weeks the tutor and family review whether the plan still fits. If it does not, we find another tutor, without fuss and without asking a student to adjust to a poor match.",
        "The limits are clear. Tutors coach, explain, set practice and mark; they do not write IAs, Extended Essays, TOK essays or coursework. They do not visit Tandur homes, because in-person lessons run only in Gurugram and parts of Delhi NCR. Everything else is arranged around your child's week.",
      ],
      bullets: [
        "Free trial lesson before any commitment",
        "Short written note after every lesson",
        "Tutor change whenever the fit is wrong",
        "Rates explained in writing before booking",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge and Edexcel IGCSE to students joining online from Tandur. Each match starts from the exact syllabus, level and exam session, and you can book a free trial before deciding.",

  process: [
    { title: "Tell us the course", description: "Name the programme or board, the subject and level, the exam session and the hours your household can spare." },
    { title: "Receive a short list", description: "We suggest tutors who have taught that exact course, with a line on why each might fit your child." },
    { title: "Sit a trial lesson", description: "A full online lesson on a real topic, with no fee and no promise required." },
    { title: "Agree a first plan", description: "The tutor outlines the opening weeks and how often you will hear back, and you approve or alter it." },
    { title: "Settle into a routine", description: "A fixed weekly online slot, reviews every few weeks, and a new tutor if the match stops working." },
  ],

  whyPoints: [
    { title: "Syllabus first, postcode second", description: "With no IB specialist nearby, we search nationally for someone who has taught your child's exact course." },
    { title: "Personal without a commute", description: "A private tutor and a fixed slot, reached from your own study table rather than a long trip to Hyderabad." },
    { title: "Trial before trust", description: "You watch a real lesson before any money moves, so the decision rests on what you saw." },
    { title: "The student does the work", description: "Tutors explain, question and mark, yet never write internal assessments, essays or coursework." },
    { title: "A paper trail parents can read", description: "Notes follow each lesson, with longer reviews periodically, so progress is visible." },
    { title: "Easy to change course", description: "No lock-in, no bundle of hours, and a different tutor whenever you ask." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Tandur?", answer: "Send us your child's programme, subject, level and exam session, and we will suggest tutors who teach that course online. Since no Tandur school runs the IB, the search is national and based on syllabus knowledge. A free trial lesson comes first, and you can change tutors afterwards if the fit is not right." },
    { question: "Do you have IGCSE tutors in Tandur?", answer: "Yes, for Cambridge and Pearson Edexcel IGCSE, taught live online. We match to the exact subject code and tier, such as 0580 Extended Mathematics, and use recent past papers with the current mark scheme. The tutor works from your child's own school timetable wherever the school is." },
    { question: "Do tutors come to my home in Tandur?", answer: "No. Tutors do not visit homes in Tandur; in-person home lessons run only in Gurugram and parts of Delhi NCR. In Tandur the lessons are one-to-one, live and online, which works as online home tuition: your child studies at home on a laptop with a private tutor." },
    { question: "What does IB or IGCSE tuition cost in Tandur?", answer: "Rates depend on the subject, the level, the tutor's experience with that syllabus and how often your child meets the tutor. We quote in writing before booking and publish no fixed price list. Online lessons remove travel costs, which for Tandur families is often a real saving." },
    { question: "Is there an IB or IGCSE school in Tandur?", answer: "We could not confirm any. Local schools run the Telangana State Board, CBSE or Urdu-medium courses, and the nearest verified international campuses are in Hyderabad. Check any school's current authorisation directly with the school, because affiliations change over time." },
    { question: "My child boards in Hyderabad. Can a tutor help during holidays?", answer: "Yes. Many of our Tandur enquiries are from boarders who come home at Dasara, Sankranti or in summer. We plan intensive blocks around the break, using timed papers from the student's own school and recent past sessions, and then drop back to a lighter weekly slot when term restarts." },
    { question: "Can a tutor help with my child's Internal Assessment?", answer: "A tutor can guide but not write. They help choose a workable question, explain the criteria, and comment on drafts in general terms. The student's own words, calculations and conclusions must remain the student's, as the IB requires, and we will not accept requests that cross that line." },
    { question: "Do you teach IB MYP and PYP, or only the Diploma?", answer: "We teach the whole continuum. MYP help is usually on criteria-based writing and Maths, and PYP help on reading, number sense and confidence. Younger children get shorter lessons, often with a parent nearby, and the tutor sends a simple note after each one." },
    { question: "Is online tuition as good as a tutor at home?", answer: "For specialist subjects, it is often better, because the tutor is chosen for the syllabus and not for living close by. A shared whiteboard, live marking and recorded notes cover most of what a classroom visit would, though a tutor does not attend in person here. What you need is a laptop, a steady connection and a quiet corner." },
    { question: "How are your tutors checked?", answer: "Each is reviewed for qualifications, recent experience teaching the exact course and clarity of explanation. The trial lesson adds a live test in front of the family. If a tutor does not suit your child, we replace them and keep the plan and notes so nothing is lost." },
    { question: "When should my child start?", answer: "Ideally at the start of the course: Class 11 for the Diploma, Grade 9 for the IGCSE. Early lessons build habits that are hard to add later. That said, many students start before a mock or a retake, and a short, focused block can still make a clear difference." },
    { question: "Can my child move from Telangana State Board to IGCSE or IB?", answer: "Yes, and a tutor can ease the change, mainly by building English-medium writing and showing how command words work. The harder part is finding a school with the programme. We can talk through timing, but the school decision and its admission rules are yours to check." },
    { question: "What if we are not happy with the tutor?", answer: "Tell us and we will find someone else, with no penalty. Families hear from us every few weeks on progress, and a change is simply another trial lesson. No student should have to adapt to a tutor who is not working for them." },
    { question: "Do you help with Telugu or Urdu alongside IB or IGCSE?", answer: "Telugu and Urdu are not examined subjects in the standard IGCSE choice from Cambridge or Edexcel, and IB availability depends on the school. We focus on English, Hindi and the core subjects, and advise on language options when a family asks." },
    { question: "Can my child take both Telangana board exams and IGCSE?", answer: "It is possible but heavy, so plan early. A tutor can map the two calendars and advise where to lighten the load, for example by pausing IGCSE lessons before a State Board exam. We recommend not stacking both at maximum intensity in the same month." },
    { question: "How do I start with IB Gram from Tandur?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the subject, level and what the student needs. We reply with tutor suggestions and trial times, so the first lesson is booked within a few days and costs nothing." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Overview of all IB and IGCSE tutoring." },
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How our online service works city by city." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where in-person home lessons run." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Our IB teaching across all programmes." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject by subject." },
    { label: "IB PYP", href: "/programmes/pyp/", description: "Support for the Primary Years stage." },
    { label: "IB MYP", href: "/programmes/myp/", description: "Criteria-based help for Middle Years students." },
    { label: "IB Diploma", href: "/programmes/dp/", description: "Six subjects plus the core, explained." },
    { label: "IB CP", href: "/programmes/cp/", description: "The Career-related route, briefly." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI courses, HL and SL." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject and experience." },
    { label: "Admissions test preparation", href: "/admissions/test-prep/", description: "Help for entrance and aptitude tests." },
    { label: "Contact us", href: "/contact-us/", description: "Book a trial lesson or ask a question." },
    { label: "Blog", href: "/blog/", description: "Guides on IB and IGCSE study." },
    { label: "IB and IGCSE tutoring in Hyderabad", href: "/hyderabad/", description: "The state's hub for international schools." },
    { label: "IB and IGCSE tutoring in Vikarabad", href: "/vikarabad/", description: "District headquarters, 40 km from Tandur." },
    { label: "IB and IGCSE tutoring in Sangareddy", href: "/sangareddy/", description: "Another Telangana town served online." },
    { label: "IB and IGCSE tutoring in Nizamabad", href: "/nizamabad/", description: "A northern Telangana city we also cover." },
  ],

  closingHeading: "Book a free trial lesson for your Tandur student",
  closingBody:
    "Tell us the programme, the subject and level, where your child is now, and which evenings or weekends suit your household. You will get tutor suggestions with reasons, trial times that fit, and a first lesson that costs nothing. Email support@ibgram.com or message +91 7439 368 115 on WhatsApp whenever you are ready.",
};
