import type { CitySeoPage } from "../types";

/**
 * /pilibhit/ - IB and IGCSE tutoring page for Pilibhit, Uttar Pradesh (Terai, on the Bareilly-Khatima road).
 * Online-only delivery: tutors do not visit homes in Pilibhit, since in-person home tuition is offered
 * only in Gurugram and parts of Delhi NCR. No IB or Cambridge school inside the city is confirmed, so
 * stripSchools is empty and the clusters are labelled nearby cities.
 */
export const pilibhit: CitySeoPage = {
  slug: "pilibhit",
  countryName: "Pilibhit",
  countryNameLong: "Pilibhit, Uttar Pradesh",
  demonym: "Pilibhit",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions bend around Terai fog in winter, monsoon flooding on the Sharda side and the Holi and Diwali weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 28.6312, longitude: 79.8043 },
  wikipedia: "https://en.wikipedia.org/wiki/Pilibhit",
  alternateNames: ["Pilibhit city", "Pilibhit district"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Pilibhit | Online Home Tuition",
  metaDescription:
    "Pilibhit families get live one-to-one IB and IGCSE home tuition online: Cambridge and Edexcel, IB Diploma to PYP, tutors matched by subject, with a free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Pilibhit",
  heroEyebrow: "PRIVATE IB AND IGCSE TUITION FOR THE PILIBHIT TERAI",
  heroSubtitle:
    "Looking for private tuition at home in Pilibhit for an IB or IGCSE student usually ends in the same dead end: the town's good teachers know UP Board and CBSE, and the nearest international school is a long road trip away. IB Gram offers one-to-one online home tuition instead, with a subject specialist teaching live from elsewhere in India. It is a lesson at your own study table, with no visit to the house.",
  primaryKeyword: "IB and IGCSE tutors in Pilibhit",
  imageAltText: "Class 11 student in Pilibhit working through IB Mathematics problems with a tutor on a video call",
  secondaryKeywords: [
    "IB tutor Pilibhit",
    "IGCSE tutor Pilibhit",
    "IB home tuition Pilibhit",
    "IGCSE home tuition Pilibhit",
    "IB private tuition Pilibhit",
    "IB Maths tutor Pilibhit",
    "IGCSE Maths tutor Pilibhit",
    "IB Physics tutor Pilibhit",
    "IB Chemistry tutor Pilibhit",
    "IB Biology tutor Pilibhit",
    "IB DP tutor Pilibhit",
    "IB MYP tutor Pilibhit",
    "IB PYP tutor Pilibhit",
    "IGCSE online tuition Pilibhit",
    "IB tutor Bareilly Road Pilibhit",
    "IGCSE tutor Civil Lines Pilibhit",
    "online IB tutor Puranpur Pilibhit",
    "IB tutor Pilibhit Uttar Pradesh",
  ],

  heroTrustPoints: [
    "Tutors are matched on exact syllabus and level, never on postcode",
    "Every lesson is online, since tutors do not visit homes in Pilibhit and in-person visits run only in Gurugram and parts of Delhi NCR",
    "A short written note follows each lesson so parents are never guessing",
    "IB Gram is independent of every school, board and examining body mentioned here",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on Indian time" },
    { value: "4 IB stages", label: "PYP, MYP, DP and CP" },
    { value: "2 IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "Free trial", label: "Watch before you decide" },
  ],

  intro: {
    heading: "Where a Pilibhit family fits IB and IGCSE into the plan",
    paragraphs: [
      "Pilibhit is a district town on the road between Bareilly and Khatima, with the Terai forest reserve to its north and sugarcane and rice fields around. Most children here go to UP Board or CBSE schools, and the tutoring market is built around those boards plus coaching for JEE, NEET and government-service exams. For IB and IGCSE tutors in Pilibhit, there is simply nobody local to call.",
      "Yet the demand is real. It comes from a few directions: a child at a boarding school in Dehradun or Mussoorie who returns home for long breaks, a family that plans an overseas degree, a parent who has lived abroad and wants continuity, or a student whose father is posted to Pilibhit for a few years and cannot leave an IB course half done. Each of them needs private tuition at home, and each is served by live online lessons.",
      "We shortlist tutors from across India who have taught the exact course, whether it is IB Physics HL, MYP Sciences or Cambridge 0580 Extended Mathematics. The lesson uses a shared whiteboard and screen-shared past papers, and it happens on Indian Standard Time. Nobody has to drive to Bareilly or Lucknow, and nobody waits for a specialist to relocate.",
      "One point of honesty: IB Gram teaches, it does not ghost-write. Tutors will not draft an Internal Assessment, Extended Essay, TOK essay or coursework. They will explain the criteria, question the draft and mark practice, which is how a student actually improves.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Live sessions, shared whiteboard, marked past papers",
      "Free trial lesson and a written note after every session",
      "Tutors do not visit homes in Pilibhit; home visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "We cannot confirm an IB school inside Pilibhit, so the programmes below meet local families through boarding schools, online schools or a plan made at home. Each note says what the stage means for a student whose base is in the Terai.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Units of inquiry replace the usual subject boundaries, and the final year culminates in a project the pupils lead. There are no formal exams, so the tutor's job is to strengthen reading, number fluency and the confidence to explain a thought aloud.",
      countryNote:
        "In Pilibhit a PYP request most often comes from a family that has just returned from another city or country and wants the child to keep pace with an inquiry-based classroom.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Criteria A to D grade every subject, and the last year brings a self-directed Personal Project. The step up from textbook learning is the expectation to explain, to reflect and to show how a conclusion was reached.",
      countryNote:
        "Pilibhit MYP students are typically boarders at schools in the Doon valley or a nearby metro, and they use vacation months at home for criteria-focused writing practice.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects, three at Higher Level, and add TOK, an Extended Essay and CAS. Internal assessments carry a meaningful share of each grade, and the written papers fall in May for most schools.",
      countryNote:
        "A Pilibhit DP student is almost always enrolled elsewhere, and asks first for support in HL Mathematics, sciences and the Extended Essay process while at home.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pathway that pairs selected Diploma courses with career-related study and a reflective project. Adoption in India is limited, but wherever it is taught the Diploma courses still call for specialist teaching.",
      countryNote:
        "CP interest from Pilibhit is rare, and we handle any enquiry by looking at which Diploma courses the student has actually taken.",
    },
  ],

  subjectsIntro:
    "The subject list below is only a starting point. What a Pilibhit family really needs to tell us is the level, the exam session, and the state of the internal assessment, because a tutor who is right for HL Chemistry in the last term is different from one who suits SL Chemistry in the first.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus, proof and the odd Paper 3 investigation that nobody has seen before, plus an exploration built around a genuine question." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator technology, best suited to students headed towards economics, commerce and the social sciences." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through fields and quantum topics, with practised timing, data-booklet fluency and an investigation that can stand up to questioning." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative work at first, then organic reaction pathways and equilibria, with practical write-ups marked on uncertainty and evaluation." },
    { name: "IB Biology", levels: "HL / SL", description: "A large volume of content and a marking style that rewards precise use of the command term, plus statistics inside the investigation." },
    { name: "IB Economics", levels: "HL / SL", description: "Clean diagrams, real examples from India and beyond, and evaluation that ends in a reasoned judgement." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based papers where the named theory must be linked to the exact organisation in the stimulus." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen text, comparative essays and an oral that rewards a genuinely held opinion." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming logic, data structures and a documented product for the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches, studies and a long-answer format where structure counts for as much as knowledge." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking, resource use and evaluation of policy, often a good match for students near a wildlife reserve." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, data handling and a fieldwork investigation planned early enough to correct." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis for Paper 1 and sustained argument for Paper 2, with the internal assessment on a focused historical question." },
    { name: "IB Hindi B and Hindi A", levels: "HL / SL", description: "Written text types, listening and oral practice, and literary analysis for students whose home language gives them a natural advantage." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "The exhibition and the essay both reward clear thinking about how we know what we claim to know." },
  ],

  igcseSubjectsIntro:
    "An IGCSE student needs the board, the syllabus code and the tier settled before anything else. Cambridge sits in May-June and October-November, while Pearson Edexcel runs in January and May-June, and a Pilibhit family should ask their school or exam centre which one applies.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra, geometry and statistics with an emphasis on showing method, and Extended work that expects speed and accuracy without a calculator on Paper 2 style questions." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Introduces calculus and vectors early and is the best preparation for IB Mathematics AA at Higher Level." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "A distinct paper style from Cambridge, with worded problems that need Edexcel-specific practice." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy, electricity and waves, with equation handling and practical-paper skills built alongside theory." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "The mole concept, bonding, rates and organic chemistry, taught with practical-skills questions from early on." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, inheritance, ecosystems and human physiology, with extended answers taught as a skill." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Demand, supply and macro policy, with evaluation practised as early as possible." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Theory concepts and hands-on programming practice, with trace tables for exam technique." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative and argument, and comprehension on unfamiliar extracts." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and speaking for students who want the board's formal expectations explained." },
  ],

  regionsTitle: "Pilibhit areas we support with online IB and IGCSE tuition",
  regionsIntro:
    "The lesson reaches every locality that has a stable connection, so this is not a coverage map. The notes describe the kind of household and rhythm in each area, which helps us plan the timing of lessons around school, coaching and family work.",
  regions: [
    { name: "Civil Lines", note: "The administrative heart of the district, with officials, lawyers and doctors, and the families most likely to have moved between postings in several states." },
    { name: "Bareilly Road corridor", note: "The eastern approach towards Bareilly, home to newer housing where parents commute and evenings start late." },
    { name: "Puranpur Road", note: "Leads north towards the Terai and Puranpur, with farming and trading families and a growing interest in study abroad." },
    { name: "Bisalpur Road", note: "The southern route to Bisalpur, mixed residential and commercial, where a fixed weekly online slot replaces a long commute to any classes." },
    { name: "Old city around Chowk Bazaar", note: "A dense, long-established part of town where the family business often decides how early or late a student can study." },
    { name: "Katra and Khakra areas", note: "Traditional mohallas with strong home-tuition habits and large joint families, where a quiet study corner is the main practical need." },
    { name: "Madho Tanda", note: "The Gomti-source area to the south-east, semi-rural in character, where online tuition is often the only specialist option." },
    { name: "Amariya and Barkhera", note: "Nearby blocks with farming households, where power supply and network coverage are the main scheduling variables." },
    { name: "Jahanabad", note: "A small town on the Shahjahanpur side, where families look to Bareilly and Lucknow for higher education." },
    { name: "Tiger reserve fringe villages", note: "Communities near Mala and Mahof ranges, where a short evening window between farm work and school hours is often all a lesson needs." },
  ],

  schoolDisclaimer:
    "We list these schools only to describe the curricula they teach. IB Gram is not affiliated with any of them, none has endorsed this page, and IB Gram is likewise independent of the IB, Cambridge and Pearson.",
  schoolClusters: [
    {
      city: "Pilibhit itself",
      note: "No IB school and no Cambridge or Edexcel centre could be confirmed in the city, so we name none. Local schools follow the UP Board and CBSE, and a family that wants an international route builds it with an online school or a school elsewhere.",
      schools: [],
    },
    {
      city: "Nearby: Lucknow",
      note: "The state capital is a long road or rail journey away, but it holds the closest confirmed IB and Cambridge schools for families who want a place in a school setting.",
      schools: ["Modern School, Lucknow", "City Montessori School, Cambridge Campus"],
    },
    {
      city: "Nearby: Dehradun and the Doon valley",
      note: "The traditional destination for boarding, reachable by road through Uttarakhand and popular with north Indian families choosing an international curriculum.",
      schools: ["SelaQui International School", "Unison World School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "A long day's travel away, but the region with the widest choice of IB and IGCSE schools for families willing to relocate or board.",
      schools: ["Genesis Global School, Noida", "GD Goenka World School", "Pathways World School"],
    },
  ],

  modesIntro:
    "Whatever the format, the arrangement for a Pilibhit student is the same: a tutor somewhere in India, a live video lesson, one student. The options differ in weekly volume and reporting, and a tutor coming to the house is not among them, because home visits run only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "One lesson a week, kept up",
      description:
        "A fixed weekly hour with the same tutor, following the unit the student is currently studying. It is the calmest way to keep a syllabus moving without adding pressure.",
      bullets: [
        "Same tutor and slot every week",
        "Follows the student's own syllabus pace",
        "Works for IB, Cambridge and Edexcel",
        "Easy to raise to two lessons before mocks",
      ],
    },
    {
      title: "Lessons with written progress reports",
      description:
        "Each lesson is followed by a note on what was covered and what to revisit, and there is a proper review every few weeks. Parents who work long hours or live away for part of the week tend to prefer this.",
      bullets: [
        "A short note after every lesson",
        "Reviews at fixed intervals",
        "Useful for MYP and PYP parents",
        "A clear record if the student changes school",
      ],
    },
    {
      title: "Holiday and exam bursts",
      description:
        "Boarders and online-school students often want concentrated help in the holidays, and any student may need it before a May or November paper. Lessons cluster several times a week around timed past papers.",
      bullets: [
        "Suits winter and summer breaks",
        "Timed papers marked against the mark scheme",
        "Quick turnaround on corrected work",
        "Book two to three weeks before the exam",
      ],
    },
  ],

  sections: [
    {
      heading: "What kind of school and family does IB or IGCSE tuition serve around Pilibhit?",
      paragraphs: [
        "Nobody in Pilibhit would describe the city as an IB town, and it is worth starting from that fact. We could not confirm an IB World School or a Cambridge or Edexcel centre inside the city, and the schools that market themselves as international are, as far as we can tell, following CBSE or the UP Board. The families we hear from are therefore linked to schools elsewhere.",
        "Some are boarders. Pilibhit sits within reach of the Doon valley by road, and Dehradun and Mussoorie have long been the destination for north Indian families who want an international curriculum with boarding. These children come home for long breaks and need a subject tutor to keep them on track between terms.",
        "Some are relocating. The district has officials, doctors, engineers and forest-service staff who move between postings, and a child who began the IB in one city can arrive in Pilibhit mid-course. For such a student, online tuition is not an enrichment, it is the only way to avoid losing a term.",
        "Some are planning ahead. A parent who thinks that a UK, Canadian or Australian degree lies ahead for their child in Class 11 may begin IGCSE mathematics or IB-style science while the child is still at a local school. That head start is easier to arrange online than by moving house.",
      ],
      table: {
        caption: "Who asks about IB and IGCSE tutoring from Pilibhit",
        columns: ["Family situation", "Typical need", "What tutoring adds"],
        rows: [
          ["Child boards in the Doon valley or a metro", "Holiday catch-up, criteria practice", "Continuity between terms with a subject specialist"],
          ["Family transferred to Pilibhit mid-course", "Uninterrupted IB or IGCSE progress", "A tutor who knows the exact syllabus"],
          ["Family planning study abroad", "Early IGCSE or IB-style preparation", "Building strong foundations before Class 11"],
          ["Online school student living at home", "Subject depth, IA feedback", "A live human tutor beside recorded classes"],
        ],
      },
      bullets: [
        "No IB or Cambridge school is confirmed inside Pilibhit",
        "Boarders, transferred families and future overseas applicants make up most enquiries",
        "For a transferred child, tuition avoids losing a term",
        "Head starts in maths and science are easy to arrange online",
      ],
    },
    {
      heading: "UP Board, CBSE or ICSE compared with IB and IGCSE: what changes for a Pilibhit student?",
      paragraphs: [
        "A student who is comfortable in the UP Board syllabus has learned to read a question, recall the chapter and reproduce a worked method. IB and IGCSE keep the content but change what earns marks. A question may present an unfamiliar context and ask the student to choose the method, justify the choice, and comment on the result. That extra step is what surprises capable students.",
        "Assessment is spread differently too. In the state board system a year's work is largely decided in one exam season. IB subjects add internal assessments that are drafted, marked by the teacher and moderated by the IB, so the student must sustain a piece of independent work over months. IGCSE coursework exists in some subjects, though not in all.",
        "Language deserves attention. The English of an IB Economics paper or an IGCSE Biology question is precise, and terms like 'outline' and 'discuss' point to a different depth of answer. A tutor will spend early sessions on that vocabulary, usually with marked examples from real papers.",
        "For families weighing the two paths, the honest advice is to match the qualification to the destination. If the goal is a seat through JEE or NEET, the state or CBSE route remains direct. If it is a degree abroad or a flexible international profile, IB or IGCSE deserves serious thought.",
      ],
      table: {
        caption: "UP Board, CBSE and ICSE beside IB and IGCSE",
        columns: ["Point of comparison", "UP Board / CBSE", "ICSE", "IB / IGCSE"],
        rows: [
          ["Marks come from", "Mainly the board exam", "Board exam plus internals", "Exams plus internal or coursework components"],
          ["Question demand", "Recall and standard methods", "Detailed recall", "Application and justified reasoning"],
          ["Route to JEE and NEET", "Direct", "Largely direct", "Depends on subjects taken and eligibility rules"],
          ["Overseas recognition", "Accepted with conditions", "Accepted with conditions", "Widely recognised"],
        ],
      },
      bullets: [
        "The content overlaps, the way marks are earned does not",
        "Internal assessments require sustained independent work",
        "Command terms are worth teaching directly",
        "Choose the qualification to match the intended destination",
      ],
    },
    {
      heading: "How much does IB or IGCSE tutoring cost for a Pilibhit family?",
      paragraphs: [
        "There is no set price to quote here, and we prefer not to pretend otherwise. A rate is set after we know the programme, the subject and level, the length and frequency of sessions, and whether the tutor is one of the few who has recently taught a scarce course such as IB Physics HL or Edexcel Further Pure Mathematics.",
        "Whatever the figure, it is sent in writing before the free trial. That order matters: the family sees the number and the lesson before deciding, and never receives a bill that differs from what was discussed.",
        "For a town family, the lack of a travel component is worth noting. A tutor who lives in another city costs the same to reach as one in the next street, because the classroom is a screen. Most parents in smaller cities find that this makes specialist help affordable in a way that a visiting tutor from Bareilly or Lucknow never could.",
        "A last practical point: cheaper is not always thriftier. A tutor who has taught the mark scheme repeatedly resolves a misunderstanding in one session, whereas a generalist may take three. Ask each tutor what the session will cover and how progress will be reported, and judge value by that.",
      ],
      bullets: [
        "Rate depends on programme, subject, level, length and frequency",
        "Quoted in writing before the trial lesson",
        "No travel cost in any form",
        "Pause or stop at any point without penalty",
      ],
    },
    {
      heading: "Should a Pilibhit student choose online tuition, a Bareilly coaching centre or a local tutor?",
      paragraphs: [
        "Bareilly is the nearest city with a real coaching industry, about fifty kilometres away, and Pilibhit's own institutes cater mostly to JEE, NEET, banking and civil-service preparation. None of them, to our knowledge, teaches IB or Cambridge syllabuses. A weekly commute to Bareilly for a subject nobody there specialises in is a poor use of a student's Saturday.",
        "A local private tutor can be an excellent support for organisation, confidence and homework routine. What is missing is exposure to current IB or Cambridge mark schemes, which change in small ways from one series to the next. Without that, a student may practise faithfully and still lose marks on conventions no one told them about.",
        "Self-study is a serious option for a motivated IGCSE student, particularly in mathematics. Its weakness is feedback: nobody reads the internal-assessment draft or asks the awkward question that shows the argument has a hole.",
        "Online one-to-one lessons fill those gaps. The tutor is chosen for the syllabus, the lesson is timed for the family, and the student is not restricted to whoever lives within an hour of home.",
      ],
      table: {
        caption: "Support options for IB and IGCSE around Pilibhit",
        columns: ["Option", "Strength", "Gap for IB or IGCSE", "Practical note"],
        rows: [
          ["Bareilly coaching centre", "Strong entrance-exam culture", "No IB or IGCSE batches known", "About fifty kilometres each way"],
          ["Pilibhit private tutor", "Discipline and local trust", "Rarely trained on current mark schemes", "Good as a complement"],
          ["Self-study", "Flexible and free", "No feedback on internal assessments", "Works best for IGCSE mathematics"],
          ["Online IB Gram tutor", "Matched to exact syllabus", "Needs a steady connection", "Slots fit around school and family life"],
        ],
      },
      bullets: [
        "Bareilly's coaching strength is in entrance exams, not IB or IGCSE",
        "Local tutors help with routine but seldom know current mark schemes",
        "Self-study lacks a second reader for coursework",
        "Online tuition lets the syllabus decide who teaches",
      ],
    },
    {
      heading: "How do fog, floods and festivals shape the Pilibhit study year?",
      paragraphs: [
        "In the Terai, winter is not just cold, it is foggy. From December to January, dense morning fog can delay travel and shorten school days, and the fog often lifts only by late morning. Evening lessons are the sensible choice then, and parents should assume that a Monday morning slot may not be reliable.",
        "The monsoon has its own effect. Rivers such as the Sharda and Devha can flood parts of the district between July and September, disrupting roads and occasionally power supply. A student in a low-lying village should keep a mobile hotspot as a backup, and the tutor can shift a lesson to a later day if the family is dealing with water on the road.",
        "Festivals set the rhythm of the household. Holi in March, Diwali in October or November, and a run of local fairs mean that some weeks are family weeks. It helps to mark them at the start of the school year and to plan lessons on either side.",
        "Exam windows do not care about any of this. IB May papers, Cambridge May-June and October-November series, and Edexcel January and May-June exams sit where the boards put them. The best plan works backwards from the true date, leaves buffer weeks for fog and floods, and treats a festival week as unavailable.",
      ],
      table: {
        caption: "The Pilibhit calendar and its effect on lessons",
        columns: ["Time of year", "What to expect", "Practical response"],
        rows: [
          ["December-January", "Terai fog, cold mornings", "Evening lessons, avoid early slots"],
          ["March", "Holi, school year-end exams", "Lighter weeks around the festival"],
          ["May-June", "IB and Cambridge summer sessions, heat", "Timed papers, cooler evening hours"],
          ["July-September", "Monsoon and river flooding", "Backup connection, flexible rescheduling"],
          ["October-November", "Diwali, Cambridge November series", "Front-load revision before the holiday"],
        ],
      },
      bullets: [
        "Fog makes evening lessons more dependable than mornings in winter",
        "Flood-prone villages should have a backup connection",
        "Diwali and Holi weeks are best treated as unavailable",
        "Exam dates never move for local events",
      ],
    },
    {
      heading: "Where can IB or IGCSE take a student from Pilibhit?",
      paragraphs: [
        "Locally, the higher-education map is short. Bareilly, about fifty kilometres away, hosts Mahatma Jyotiba Phule Rohilkhand University and the Indian Veterinary Research Institute at Izatnagar, and Pantnagar in Uttarakhand has the well-known agricultural university. For Pilibhit families whose income comes from land, these institutions matter, and IB Biology, Chemistry or Environmental Systems can prepare a student for such fields.",
        "For a national route, IB and IGCSE students should check equivalence with the Association of Indian Universities. CUET-UG is the entrance channel for many central universities, and JEE Main and NEET have their own eligibility conditions that depend on the subjects studied. Those rules are updated from time to time, so we advise checking the official notice in the year of application.",
        "Abroad, a UK offer normally states an IB points total with subject minimums, and the predicted grade is submitted in the autumn of Class 12. Canadian, Australian and US universities use the predicted grade differently, and some ask for standardised tests. A Pilibhit family without contacts abroad can find the process opaque, so we suggest asking as early as Class 10 what a target course wants.",
        "What we can offer is teaching: getting the subject right, lifting the predicted grade and sharpening exam technique. Admissions strategy and personal statements are outside what a tutor does, and we say so upfront.",
      ],
      table: {
        caption: "Study routes from Pilibhit after IB or IGCSE",
        columns: ["Route", "Key condition", "Tutoring focus"],
        rows: [
          ["Bareilly and Uttarakhand universities", "Equivalence and course prerequisites", "Biology, Chemistry, Environmental Systems"],
          ["JEE Main or NEET", "Subject and eligibility rules for IB and IGCSE holders", "HL Mathematics and sciences"],
          ["CUET-UG for central universities", "Equivalence certificate and domain subjects", "Subject depth and language"],
          ["Study abroad", "Predicted grade and subject minimums", "Lifting HL grades before autumn of Class 12"],
        ],
      },
      bullets: [
        "Bareilly and Pantnagar are the local university anchors",
        "AIU equivalence, CUET-UG, JEE and NEET rules should be checked each year",
        "Predicted grades in autumn of Class 12 drive overseas offers",
        "Tutors teach the subject and do not write applications",
      ],
    },
    {
      heading: "What does the IB Diploma ask of a mathematics and science student?",
      paragraphs: [
        "Take Mathematics first. Analysis and Approaches suits students who like algebra and calculus and expect to study engineering, physics or pure mathematics. Applications and Interpretation suits those who prefer real data and modelling. HL adds extra topics in either route, and the internal assessment, an exploration, needs an interesting topic and several drafts.",
        "In Physics the difficulty lies in stitching topics together. A question can begin with circular motion, move to gravitation and finish with energy, and a student who has memorised each chapter separately can be stranded. Practising mixed problems under time is the remedy.",
        "Chemistry begins with quantitative work that suits diligent students and then broadens into organic synthesis, equilibrium and energetics. HL students in particular need to keep mechanisms fresh. Biology has the largest vocabulary, and here the marks depend on using the command term correctly and on a data-based investigation.",
        "Students from UP Board and CBSE schools tend to arrive with a good grasp of numerical work and a thinner habit of explaining. Sessions therefore lean on writing conclusions, evaluating methods and naming the assumptions behind a result.",
      ],
      bullets: [
        "AA for algebra and calculus, AI for data and modelling",
        "Physics rewards mixed-topic timed practice",
        "Chemistry HL needs mechanisms kept fresh",
        "Explanation and evaluation are the usual gaps for board-trained students",
      ],
    },
    {
      heading: "How should a family choose between IGCSE Core and Extended, Cambridge and Edexcel?",
      paragraphs: [
        "Core and Extended are not just difficulty levels, they cap the grades available. A student who might take a science or mathematics at Higher Level later should generally aim at Extended, while a student who wants a manageable load in a supporting subject can reasonably choose Core.",
        "Cambridge and Edexcel differ in ways that matter to a tutor. Their mathematics syllabuses overlap in content but not in the shape of questions, and their science papers organise practical skills differently. Practice must therefore be on the papers of the board the student will sit.",
        "Where the child is at a school elsewhere, the school chooses the board. Where the family is designing the route themselves, we suggest choosing on the basis of which exam centre is reachable and which series dates suit the household.",
      ],
      bullets: [
        "Extended keeps higher grades and later HL options open",
        "Core suits supporting subjects where load must be managed",
        "Practise on the board's own past papers",
        "Choose a board that matches a reachable exam centre",
      ],
    },
    {
      heading: "How does IB Gram work with a Pilibhit family from the first message?",
      paragraphs: [
        "It starts with a short conversation on WhatsApp or by email. We ask about the programme or board, the subject, the level, the exam session and what concerns the parent most. If the child is at a boarding school, we also ask when the holidays fall.",
        "We then propose tutors who have taught that exact course recently, and we describe why each fits. Credentials and teaching history are checked before a profile reaches you.",
        "The trial lesson is free. Sit in if you wish, and afterwards tell us candidly how it felt. If you carry on, the tutor lays out a first-month plan and how you will be updated.",
        "If it does not suit, we replace the tutor. Nobody is tied to a contract.",
      ],
      bullets: [
        "Short intake by WhatsApp or email",
        "Shortlist by recent teaching of the exact course",
        "Free trial and honest feedback",
        "Replacement tutor if the fit is wrong",
      ],
    },
  ],

  tutorsIntro:
    "These tutors cover IB PYP to DP and both major IGCSE boards for students connected to Pilibhit, whether they board elsewhere, study online or follow a course mainly through tuition. Matches weigh syllabus and level first, since lessons run on screen and not at your address.",

  process: [
    { title: "Share the details", description: "Board or programme, subject, level, exam session and the evening hours that work in Pilibhit." },
    { title: "Review the shortlist", description: "Tutors with recent teaching of that exact course, each with a note on why they fit." },
    { title: "Take the free lesson", description: "A genuine session on real content, free of charge and free of obligation." },
    { title: "Set the first month", description: "A written outline of topics and reporting, agreed with you before anything begins." },
    { title: "Carry on or change", description: "Regular lessons with reviews, and a simple switch if the match is not right." },
  ],

  whyPoints: [
    { title: "Syllabus before geography", description: "The match is made on course and level, so a tutor in another state is as good as one down the road." },
    { title: "A clear view of the local gap", description: "No confirmed IB or Cambridge school stands in Pilibhit, and we plan honestly around that." },
    { title: "Try before committing", description: "The first lesson costs nothing and commits you to nothing." },
    { title: "Support that stays honest", description: "Feedback and structure on IAs and essays, never the writing of the submitted work." },
    { title: "Written progress", description: "A note after each lesson and a review every few weeks, so you always know where things stand." },
    { title: "No lock-in", description: "Pause, stop or swap tutors whenever needed, with no penalty." },
  ],

  faqs: [
    { question: "How can I find an IB tutor in Pilibhit?", answer: "Tell us the programme, subject, level and exam session, and we will propose tutors who have taught that course recently. Because Pilibhit has no local IB school, the search is national and syllabus-led. You meet the tutor in a free trial lesson, and if it is not the right fit we will suggest another without any charge." },
    { question: "Do you provide IGCSE home tutors in Pilibhit for Cambridge and Edexcel?", answer: "Yes, as online home tuition: the student studies at home while a specialist teaches live by video. Cambridge and Edexcel are handled separately, using the board's own syllabus code, tier and past papers. A tutor for Cambridge 0625 Physics differs from one for Edexcel 4PH1, and we match accordingly." },
    { question: "Will a tutor come to my house in Pilibhit?", answer: "No. Tutors do not visit homes in Pilibhit, and in-person tuition is offered only in Gurugram and parts of Delhi NCR. In Pilibhit the lesson is a live one-to-one video session on a fixed weekly slot, and all the student needs is a laptop, a decent connection and a quiet place to work." },
    { question: "Is there any IB or Cambridge school in Pilibhit?", answer: "We could not confirm one, so none is named here. Schools in the city follow the UP Board and CBSE. Families looking for a school setting usually consider Lucknow, the Doon valley or Delhi NCR, and many combine that with tutoring during holidays. If a local school has recently gained authorisation, tell us and we will check." },
    { question: "What does IB or IGCSE tutoring cost for a family in Pilibhit?", answer: "The rate depends on programme, subject, level, session length and frequency, and it is given in writing before the free trial. Scarce HL Diploma courses generally cost more than Core IGCSE topics. There is no travel charge because lessons are online, and no long-term contract, so stopping is always possible." },
    { question: "Can my child follow the IB Diploma while living in Pilibhit?", answer: "Only through an arrangement with a school or online provider that is authorised for the IB, since the Diploma cannot be taken without one. Once that is in place, IB Gram provides the subject teaching at home. Families should settle registration and exam-centre questions with the school before choosing subjects." },
    { question: "Is the trial class really free?", answer: "Yes, the trial lesson is free and uses real syllabus content. You are not asked for payment details, and you may decide not to continue without giving a reason. If you do continue, the tutor proposes a short plan, and if the fit is poor we arrange a different tutor." },
    { question: "Will the tutor help write my child's Internal Assessment?", answer: "A tutor can help a student choose a workable question, understand the criteria, plan data collection and respond to draft feedback. A tutor does not write or rewrite any part of an Internal Assessment, Extended Essay or TOK essay, because these must be the student's own work under IB rules." },
    { question: "Which IB subjects do your tutors teach for Pilibhit students?", answer: "Most groups are available. Requests commonly cover Mathematics AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science and Hindi, plus TOK and Extended Essay guidance. If a subject is not listed, ask us, because the tutor network covers the country." },
    { question: "Do you teach MYP and PYP as well as the Diploma?", answer: "Yes. MYP tutoring focuses on writing to the criteria in Sciences, Language and Literature and Individuals and Societies, and on structuring the Personal Project. PYP sessions are shorter and centre on reading, number fluency and inquiry habits. Both are common for children who board or study online while the family stays in Pilibhit." },
    { question: "Is online tuition as good as face-to-face for these syllabuses?", answer: "In Pilibhit it is usually the only route to a specialist, so the real comparison is online against no specialist at all. A shared whiteboard, screen-shared papers and recorded solutions cover nearly everything a tutor at the table would. The gain is teachers who have taught the exact course, wherever they live." },
    { question: "How does IB Gram check its tutors?", answer: "We look at what each tutor has taught, at which level and how recently, and how they approach marking criteria, before a name reaches a family. The trial lesson is the second check, because a good explanation matters as much as a good record. If a tutor proves a poor match, we replace them." },
    { question: "When is the best time to begin tutoring?", answer: "At the start of the course whenever possible: Grade 9 for IGCSE and Class 11 for the Diploma. Early start leaves room to fix gaps before mocks and internal assessments crowd the calendar. A later start still helps, as the plan narrows to the highest-value topics." },
    { question: "My child is moving from the UP Board or CBSE. Can you help?", answer: "Yes, and it is one of our most common situations. Content is rarely the problem. The difficulty lies in command terms, application questions and sustained coursework. Starting the summer before a switch, with a few marked practice papers, makes the first term far less stressful." },
    { question: "Can lessons be scheduled around fog, floods and festivals?", answer: "Yes. Winter fog makes evenings the safer choice, monsoon flooding may call for a backup connection or a rescheduled lesson, and festival weeks such as Holi and Diwali can be set aside in advance. Tell the tutor early and the plan adjusts without penalty." },
    { question: "What if we are not satisfied with the tutor?", answer: "Say so and we will arrange a replacement. Reviews happen regularly so that a poor fit is caught early. Nothing obliges your child to stay with a tutor who is not working, and pausing or stopping costs nothing." },
    { question: "Is IB Gram connected to any school in or near Pilibhit, or to the IB, Cambridge or Pearson?", answer: "No. IB Gram is an independent tutoring service, without any partnership or endorsement from any school or from the International Baccalaureate Organization, Cambridge or Pearson Edexcel. Schools appear on this page only to describe what they teach." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "See how online tuition works for students across the country." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The only place where tutors also visit in person." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB subjects and tutoring formats." },
    { label: "IGCSE guide", href: "/igcse/", description: "Tiers, boards and exam sessions explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, the core and internal assessment weighting." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria A to D and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "Career-related study alongside Diploma courses." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA or AI, and which suits your child." },
    { label: "Browse tutors", href: "/tutors/", description: "Search tutor profiles by subject and level." },
    { label: "Test prep and admissions support", href: "/admissions/test-prep/", description: "Entrance preparation alongside subject tutoring." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a free trial." },
    { label: "IB and IGCSE tutoring in Shahjahanpur", href: "/shahjahanpur/", description: "The neighbouring Rohilkhand city, also served online." },
    { label: "IB and IGCSE tutoring in Rampur", href: "/rampur/", description: "Another Rohilkhand city on the Bareilly road network." },
    { label: "IB and IGCSE tutoring in Lucknow", href: "/lucknow/", description: "The state capital, with the closest confirmed IB and Cambridge schools." },
    { label: "IB and IGCSE tutoring in Dehradun", href: "/dehradun/", description: "The Doon valley boarding hub many Pilibhit families consider." },
  ],

  closingHeading: "Book a free IB or IGCSE trial lesson for your Pilibhit student",
  closingBody:
    "Send us the board or programme, the subject and level, and the hours that suit your household. We will reply with a tutor profile and open trial slots, with no fee and no paperwork. Contact us at support@ibgram.com or on WhatsApp at +91 7439 368 115.",
};
