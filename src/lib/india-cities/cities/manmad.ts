import type { CitySeoPage } from "../types";

/**
 * /manmad/ - IB and IGCSE tutoring page for Manmad, Nashik district, Maharashtra. No IB or
 * Cambridge/Edexcel school in Manmad could be confirmed, so stripSchools is empty and the clusters
 * are labelled Nashik, Pune and Mumbai groups. Delivery is online; in-person home tuition runs only
 * in Gurugram and parts of Delhi NCR.
 */
export const manmad: CitySeoPage = {
  slug: "manmad",
  countryName: "Manmad",
  countryNameLong: "Manmad, Nashik district, Maharashtra",
  demonym: "Manmad",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Manmad's railway and depot shift patterns vary from household to household, so we agree slots per term and leave Ganeshotsav, Diwali and the Shirdi pilgrimage weeks open",
  lastUpdated: "2026-09-21",
  geo: { latitude: 20.2525, longitude: 74.4394 },
  wikipedia: "https://en.wikipedia.org/wiki/Manmad",
  alternateNames: ["Manmad Junction", "Manmad Nashik", "Manmad Maharashtra"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Manmad | Online One-to-One Tuition",
  metaDescription:
    "IB and IGCSE tutors for Manmad students in Nashik district: PYP, MYP, DP and IGCSE taught live online, one to one, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition in Manmad",
  heroEyebrow: "IB & IGCSE TUITION FOR MANMAD JUNCTION FAMILIES",
  heroSubtitle:
    "Manmad families asking for IB or IGCSE home tuition should know the arrangement up front: lessons happen at home, but online, because in-person visits run only in Gurugram and parts of Delhi NCR. A tutor who teaches your child's exact syllabus works one to one over video, and the first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Manmad",
  imageAltText: "Manmad student practising IB Physics questions with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Manmad",
    "IGCSE tutor Manmad",
    "IB home tuition Manmad",
    "IGCSE home tuition Manmad",
    "IB private tuition Manmad",
    "IB online tuition Manmad Nashik",
    "IGCSE online tuition Manmad",
    "IB DP tutor Manmad",
    "IB MYP tutor Manmad",
    "IB PYP tutor Manmad",
    "IB Maths tutor Manmad",
    "IGCSE Maths tutor Manmad",
    "IB Physics tutor Manmad",
    "IB Chemistry tutor Manmad",
    "IB Biology tutor Manmad",
    "IB tutor Yeola",
    "IB tutor Nandgaon Manmad",
    "IGCSE tutor Nashik district",
    "Manmad Junction IB tuition",
  ],

  heroTrustPoints: [
    "Tutor selected for the exact IB subject and level or IGCSE code and tier",
    "Delivery is online in Manmad; home visits run only in Gurugram and parts of Delhi NCR",
    "Free trial lesson, written feedback note after every session, tutor change on request",
    "Independent of every school, exam board and the IB Organization",
  ],
  heroStats: [
    { value: "Manmad to Nashik", label: "Nashik-district families welcome" },
    { value: "PYP to DP", label: "Plus Cambridge and Edexcel IGCSE" },
    { value: "IST", label: "Tutors in India, no odd hours" },
    { value: "Free first lesson", label: "See the tutor work before paying" },
  ],

  intro: {
    heading: "Looking for IB and IGCSE tutors in Manmad? Here is how it works",
    paragraphs: [
      "Manmad is a railway junction first and a town second. Lines to Mumbai, Bhusawal, Daund and Aurangabad cross here, the oil depots at Panewadi hold fuel for a large part of north Maharashtra, and the Food Corporation of India godowns shape the town's working week. Schools follow the Maharashtra State Board and CBSE, with a few trust-run English-medium campuses. We have not been able to confirm any school in Manmad that teaches the IB or a Cambridge or Edexcel IGCSE.",
      "Yet questions come in. A railway officer on a three-year posting whose child began the Diploma in Pune. A depot engineer whose family lived in the Gulf. A Yeola or Nandgaon business family preparing a daughter for a foreign university. A parent who heard that IGCSE Mathematics gives a cleaner start to A Levels than Class 10 board preparation. Tutoring has to travel to these children, not wait for a school to appear.",
      "That is why lessons run online. The tutor, based in India and working on IST, teaches live over video, shares a whiteboard, marks past papers with the student watching, and sends a short note at the end. At home, the student needs a quiet corner, a laptop and a charged phone as a back-up for patchy evenings. There is no commute to Nashik and no overnight rail journey.",
      "IB Gram is not linked to the IB, Cambridge, Pearson Edexcel or any school. Tutors teach and coach; they never write Internal Assessments, Extended Essays, Theory of Knowledge essays or other assessed coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP help for students anywhere in the Manmad area",
      "Cambridge and Pearson Edexcel IGCSE at Core, Extended, Foundation and Higher tiers",
      "Weekday evening and weekend slots that fit railway-family schedules",
      "Written fee quote after the free trial, never before",
    ],
  },

  programmesIntro:
    "Because Manmad has no IB campus, the programmes arrive through transfers, relatives and online enrolment. Here is what each one typically means for a family in the junction town.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "A child works through units built on a central idea, using projects, discussion and reflection instead of a textbook-first routine. It closes with a self-directed exhibition in the last year.",
      countryNote:
        "Manmad PYP cases are nearly always transfers: a child who began in Pune, Mumbai or overseas and whose parents want the same way of learning continued while they are posted here.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers assess against set criteria in each of eight subject groups, and the Personal Project in the final year asks a student to manage an extended piece of work alone.",
      countryNote:
        "In Manmad, MYP tuition generally sits alongside a Maharashtra board or CBSE school and prepares a child for a move to a Nashik, Pune or Mumbai school that follows the programme.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students study six subjects, sit externally marked exams in May or November, and complete the Extended Essay, TOK and CAS. Higher Level subjects reward sustained independent work.",
      countryNote:
        "A Diploma student in Manmad is registered with a school or online provider elsewhere, so a tutor often covers topics from first principles, with Higher Level Mathematics and Physics the usual requests.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Career-related study joins two or more Diploma subjects and a reflective project. It is designed for students with a clear vocational direction.",
      countryNote:
        "Few Maharashtra schools run the CP and none near Manmad is known, so the requests we see are from families relocating to a school that does.",
    },
  ],

  subjectsIntro:
    "The subjects below are the ones Manmad students ask about most. Anything else in the IB catalogue can be arranged, so ask.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, functions and proof, the usual choice for students heading to engineering or pure science." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Modelling and statistics with technology, matched to commerce, medicine and social science degrees." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, fields, thermal and quantum physics with emphasis on clear written reasoning." },
    { name: "Chemistry", levels: "SL and HL", description: "Energetics, equilibria and organic reactions, plus the data questions that appear in every paper." },
    { name: "Biology", levels: "SL and HL", description: "Cell biology to ecology, with careful practice on command terms and diagrams." },
    { name: "Economics", levels: "SL and HL", description: "Micro and macro with examples from agriculture markets and the regional economy." },
    { name: "Business Management", levels: "SL and HL", description: "Case-study analysis for students from trading and family-business backgrounds." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming, algorithms and systems, with regular problem-solving practice." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "An interdisciplinary course where Nashik district's irrigation and onion-belt farming offer real case material." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Analysis and comparative writing for students who use Marathi at home." },
    { name: "Marathi B", levels: "SL", description: "Structured Marathi for fluent speakers who need exam accuracy." },
    { name: "Hindi B", levels: "SL and HL", description: "Language acquisition support for students who speak Hindi socially." },
    { name: "Psychology", levels: "SL and HL", description: "Research methods and studies with an internal experiment to plan." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion practice for knowledge questions and the exhibition; the writing stays the student's own." },
  ],

  igcseSubjectsIntro:
    "IGCSE is taken around ages 14 to 16 and is set by Cambridge or Pearson Edexcel. Codes and papers differ, so the tutor matches the board first.",
  igcseSubjects: [
    { name: "Mathematics (Extended or Higher)", levels: "Cambridge 0580, Edexcel 4MA1", description: "The upper tier keeps A Level and IB Mathematics open." },
    { name: "Physics", levels: "Cambridge 0625, Edexcel 4PH1", description: "Forces, energy, circuits and waves, with practical-analysis questions." },
    { name: "Chemistry", levels: "Cambridge 0620, Edexcel 4CH1", description: "Atomic structure, bonding, rates and organic basics." },
    { name: "Biology", levels: "Cambridge 0610, Edexcel 4BI1", description: "Living systems, inheritance and ecology, with diagram and data work." },
    { name: "Co-ordinated Sciences", levels: "Cambridge 0654", description: "A double-award route covering three sciences in fewer papers." },
    { name: "English as a Second Language", levels: "Cambridge 0510, 0511", description: "Reading, writing and speaking for students whose home language is Marathi or Hindi." },
    { name: "English First Language", levels: "Cambridge 0500", description: "Directed writing and composition for strong English users." },
    { name: "Marathi and Hindi support", levels: "School-set", description: "Language tuition to sit alongside IGCSE subjects." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Theory and programming logic with pseudocode practice." },
    { name: "Business Studies", levels: "Cambridge 0450", description: "Business activity, marketing and finance with case-based questions." },
    { name: "Geography", levels: "Cambridge 0460", description: "Physical and human geography, with monsoon and river-basin examples." },
  ],

  regionsTitle: "Manmad and the Nashik-district belt we support",
  regionsIntro:
    "Every lesson is online, so the address decides only timing and context. These are the parts of Manmad and its neighbours that our families write from, with the practical notes they mention.",
  regions: [
    { name: "Manmad Junction and the railway colony", note: "Railway staff quarters and nearby lanes where shift work shapes family timetables; evening slots after 6 pm are the most requested." },
    { name: "Panewadi oil depot area", note: "Home to households linked to the fuel depots; a number of engineering families with postings elsewhere in India." },
    { name: "Manmad market and old town", note: "The busy trading centre around the market, with shop-owning families and steady broadband in the main lanes." },
    { name: "Ankai and the fort side", note: "The Ankai-Tankai hill fort sits to the south-west; residents around it are a mix of long-settled families and newer arrivals." },
    { name: "Nandgaon", note: "A neighbouring town to the east with a strong farming and trading base; students usually study in the local Marathi-medium and CBSE schools." },
    { name: "Yeola", note: "Known for Paithani weaving; some business families here look at international schooling in Nashik, Pune or Mumbai." },
    { name: "Chandwad", note: "Towards the Nashik side and onion-belt villages; evening study fits around harvest-season work in the family." },
    { name: "Lasalgaon", note: "Famous for its large onion market; trading families here follow market hours that affect dinner and lesson timing." },
    { name: "Malegaon side", note: "A larger neighbouring city to the north-west; some Manmad families have relatives there and compare schools and coaching." },
  ],

  schoolClusters: [
    {
      city: "Manmad itself",
      note: "We could not confirm any IB or Cambridge or Edexcel IGCSE school in Manmad. Schools here follow the Maharashtra board or CBSE, so IB and IGCSE students work privately online.",
      schools: [],
    },
    {
      city: "Nearby: Nashik",
      note: "The district headquarters is about a two-hour trip, and its international-curriculum options are not confirmed here. Most Manmad families who want an IB school look to Pune or Mumbai.",
      schools: [],
    },
    {
      city: "Nearby: Pune",
      note: "Pune is reachable by the Manmad-Daund line and road; these are confirmed to offer international programmes. Check each school's current admissions.",
      schools: ["Symbiosis International School", "Mercedes-Benz International School"],
    },
    {
      city: "Nearby: Mumbai",
      note: "The Panchavati Express links Manmad and Mumbai, and some families consider Mumbai for boarding or relocation.",
      schools: ["Dhirubhai Ambani International School", "Oberoi International School"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent tutoring service and is not connected with any school, exam board or the IB. Schools are named only to show what exists within reach of Manmad, and no listing means a partnership, endorsement or a guaranteed place.",

  modesIntro:
    "In Manmad the delivery is always live online, one to one. Families differ in how they use it, and three patterns cover most of what we see.",
  modes: [
    {
      title: "Steady weekly tuition",
      description:
        "A regular slot with one tutor that follows the IB or IGCSE course order next to a Maharashtra board or CBSE school year.",
      bullets: [
        "Same tutor every week",
        "Short practice sets between lessons",
        "A written note to parents after each session",
      ],
    },
    {
      title: "Exam-window intensive",
      description:
        "A denser lesson pattern for six to eight weeks before the May or November series, built on past papers and time management.",
      bullets: [
        "Timed full and part papers",
        "Weak-topic list revised weekly",
        "Weekend slots around festivals",
      ],
    },
    {
      title: "Transfer-year bridge",
      description:
        "Focused help for a child who is moving into or out of an IB or IGCSE school, or whose family has been posted into Manmad mid-course.",
      bullets: [
        "Diagnostic first lesson",
        "Topic order matched to the next school",
        "Fortnightly review with parents",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools are near Manmad, and who goes to them?",
      paragraphs: [
        "Start with the honest position: the closest confirmed international-curriculum campuses are in Pune and Mumbai, and none is confirmed in Manmad or Nashik district towns around it. Manmad's own school scene consists of Maharashtra State Board schools in Marathi and English medium, several CBSE schools, and railway-run schools for employees' children.",
        "The railway shapes the families who ask about IB. Officers and engineers with transferable postings carry an expectation of continuity, and some have children already partway through a Diploma in another city. Then there are depot staff and contractors with Gulf or overseas history, traders from Yeola, Nandgaon and Lasalgaon with children aiming at study abroad, and doctors at the sub-district hospital.",
        "These families generally choose one of three routes. Some send a child to boarding or a day school in Pune or Mumbai and rely on relatives. Some enrol with an online school and study from home. Some keep the child in a local school and take IGCSE subjects as private candidates. Whichever route is chosen, a subject tutor closes the gap that a local classroom cannot.",
        "We name Pune and Mumbai schools only as context, from confirmed information. Please visit and confirm admissions yourself; a place at any school is decided by that school, not by IB Gram.",
      ],
    },
    {
      heading: "How do Maharashtra board, CBSE, IGCSE and IB compare for a Manmad student?",
      paragraphs: [
        "A Class 10 student in Manmad most likely sits the SSC exam of the Maharashtra board or CBSE. Both are built around the prescribed textbook, with weight on accurate recall. IGCSE covers similar content but asks more often for application and explanation. The IB Diploma adds extended essays, internal assessments and broader reflection.",
        "What changes for a Manmad student is the style of answering more than the content. Marathi-medium learners have an added step: command words such as justify, discuss and evaluate are not familiar in translation, and losing marks over phrasing is common. Tutors build a short glossary of such terms into early lessons.",
        "The table lays the options side by side for a parent who wants a quick overview.",
        "Moving between systems is possible and common. Maths and science carry over well; the main retraining is in written structure and exam technique.",
      ],
      table: {
        caption: "Maharashtra board, CBSE, IGCSE and IB Diploma for Manmad families",
        columns: ["Feature", "Maharashtra State Board", "CBSE", "IGCSE (Cambridge or Edexcel)", "IB Diploma"],
        rows: [
          ["Medium", "Marathi or English", "English or Hindi", "English", "English plus language options"],
          ["Main emphasis", "Textbook recall", "Textbook and application", "Application and explanation", "Research, essays and exams"],
          ["Internal work", "Limited", "Practicals and projects", "Coursework in some subjects", "Mandatory internal assessments, Extended Essay and TOK"],
          ["Available in Manmad", "Yes", "Yes", "No confirmed school", "No confirmed school"],
          ["Entrance exams", "MHT-CET, NEET, JEE Main", "JEE Main, NEET, CUET-UG", "Leads to A Level or IB", "AIU equivalence, CUET-UG, overseas admissions"],
        ],
      },
    },
    {
      heading: "What influences the price of IB and IGCSE tutoring in Manmad?",
      paragraphs: [
        "IB Gram does not publish rates. After the free first lesson, we send a written quote for IB or IGCSE tuition in Manmad, so you see the number before committing. Several things set it, and knowing them lets you compare any offer.",
        "The level and subject come first: a Higher Level Mathematics or Physics tutor with years on the syllabus is a different proposition from a Class 6 English session. The tutor's track record on the specific board comes next. Then the number of sessions and their length. Finally, the calendar; the last eight weeks before May and November papers are the busiest.",
        "It helps to picture the alternatives. A school teacher in Manmad may give evening tuition for less, but might not have taught the IB command terms or Cambridge Extended papers. Coaching in Nashik or Pune means long travel and often a hostel. An online tutor chosen for the course costs more than a general teacher and less than a long-term move.",
        "Ask what is inside the price: marked past papers, mock exams, notes, rescheduling. We write each of these into the quote.",
      ],
      bullets: [
        "Subject, level and tutor experience set the hourly rate",
        "More sessions or longer sessions raise the monthly total",
        "Mock exam marking should be confirmed in writing",
        "Nothing is owed until after the free first lesson",
      ],
    },
    {
      heading: "Online tutor, coaching class or local teacher: which works for a student in Manmad?",
      paragraphs: [
        "Families in Manmad have several tuition options. Local teachers run evening batches for Class 10 and 12, institutes in Nashik and Pune offer coaching for MHT-CET, JEE and NEET, and online platforms cover everything else. For IB and IGCSE, the practical question is whether the teacher has taught that exact course.",
        "An online one-to-one tutor chosen for the course fits best on syllabus knowledge. The price is a dependence on connectivity and a need for discipline at home. A local batch has routine and company but follows the pace of the group and the board syllabus. Self-study suits disciplined learners who can mark their own work against published schemes.",
        "The table compares them using points Manmad parents often raise.",
        "Many students combine routes: MHT-CET or NEET coaching locally or online, plus an IB or IGCSE tutor for the international subjects. The tutor needs to know the weekly load to plan sensibly.",
      ],
      table: {
        caption: "Tuition routes for an IB or IGCSE student in Manmad",
        columns: ["Route", "Course fit", "Travel", "Personal attention", "Main caution"],
        rows: [
          ["Online one-to-one", "Tutor chosen for exact syllabus", "None", "Whole session", "Needs reliable broadband or a hotspot back-up"],
          ["Coaching in Nashik or Pune", "Entrance exams and state board", "Long trips or hostel", "Shared in a batch", "Time and cost of travel"],
          ["Local school teacher", "Board syllabus strength", "Short", "Some", "Seldom used IB or Cambridge papers"],
          ["Self-study", "Varies with resources", "None", "None", "No feedback on long written answers"],
        ],
      },
    },
    {
      heading: "What does a Manmad student's exam year look like?",
      paragraphs: [
        "IB Diploma papers are set in May and November. Cambridge IGCSE runs in May and June and again in October and November. Edexcel offers January, May and June, and autumn series. Private candidates in Maharashtra usually register at an exam centre in Pune, Mumbai or Nashik, and most pick May, so that preparation runs through the winter and spring.",
        "Weather shapes the working day. Manmad is on the dry side of the Sahyadris, and from April to June temperatures pass 40 degrees, making afternoon study hard. The monsoon is moderate; heavy rain sometimes disrupts rail lines and power, so an exam candidate should keep a charged device and a hotspot ready. Winter is cooler and the best time for long papers.",
        "Festivals and family routines matter too. Ganeshotsav in August or September takes up evenings for ten days. Diwali brings a week or more of visiting. Shirdi pilgrimages, with Manmad the nearest junction, draw relatives through the town. Gudi Padwa, Ram Navami and Holi add shorter breaks. Onion-market trading families around Lasalgaon follow the harvest schedule.",
        "A tutor who knows these dates can front-load lessons before them and schedule recovery after, so that nothing important falls in a crowded week.",
      ],
      table: {
        caption: "Yearly study plan for a Manmad IB or IGCSE student",
        columns: ["Window", "Academic event", "Local rhythm", "Suggested focus"],
        rows: [
          ["January to February", "Edexcel January series; IB mock exams; HSC boards begin", "Cool winter weather", "Mock papers and revision notes"],
          ["March to April", "Last weeks before May papers", "Heat rises; SSC and HSC results later", "Timed papers and mark-scheme practice"],
          ["May to June", "IB and IGCSE May exams", "Heat above 40 degrees", "Early lessons, light review"],
          ["July to September", "IB May results in July; new term", "Monsoon; Ganeshotsav", "Start the new course, finish heavy topics before festivals"],
          ["October to December", "IB November and IGCSE autumn exams", "Diwali, cooler weather", "Steady practice and rest"],
        ],
      },
    },
    {
      heading: "Where can IB and IGCSE take a student from Manmad?",
      paragraphs: [
        "The destinations are broad, but each has its paperwork. In India, the Association of Indian Universities gives equivalence to the IB Diploma, and IB graduates apply to central universities through CUET-UG. MHT-CET, JEE Main and NEET-UG have their own eligibility rules for IB and IGCSE students, depending on subject combinations and certificate recognition, so read the latest brochure before choosing subjects.",
        "Within Maharashtra, families look at Pune's private universities, at Mumbai's degree colleges and institutes, and at the Nashik-based health sciences university for medical pathways. Closer to Manmad, K.K. Wagh and other Nashik colleges offer engineering and management courses, and students sometimes use them as a fallback or a first degree before moving abroad.",
        "For overseas study, UK universities work from IB points and predicted grades, American colleges weigh the Diploma with SAT or ACT scores and essays, and Canada and Australia publish conversion tables. Families with relatives abroad often start there and work backwards.",
        "A tutor can explain which subject combinations keep choices open, without steering. Engineering abroad needs strong Mathematics and Physics; medicine needs Chemistry and Biology; business schools like Economics and Mathematics.",
      ],
      bullets: [
        "India: AIU equivalence, CUET-UG, and NEET or JEE eligibility checks",
        "Maharashtra: Pune and Mumbai universities, Nashik health sciences and engineering colleges",
        "Abroad: UK via IB points, US via Diploma plus SAT or ACT, Canada and Australia via conversion tables",
        "Choose subjects with the degree in mind from the beginning",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences taught to Manmad students online?",
      paragraphs: [
        "IB offers two Mathematics routes. Analysis and Approaches is for students who like algebra, calculus and proof. Applications and Interpretation favours data, statistics and modelling, and suits students heading to biology, business and the social sciences. The right choice follows the degree, not the perceived ease.",
        "Sessions use a shared digital whiteboard so both tutor and student write. A lesson typically revisits the last problem set, introduces a topic from first principles and ends with exam-style questions. Feedback focuses on method and reasoning, since marks in IB Mathematics reward working as much as answers.",
        "In the sciences, tutors focus on moving from recall to explanation. A student who did well in the Maharashtra board may know every fact but still lose marks for not evaluating or justifying. Tutors teach command terms, walk through data-based questions and show how practical skills are assessed.",
        "Internal Assessments are coached, not written. The tutor helps a student choose a workable investigation, plan the method and understand the criteria, while the student collects data and writes the report.",
      ],
    },
    {
      heading: "IGCSE tiers and subject choices for Manmad families",
      paragraphs: [
        "Cambridge IGCSE subjects come in Core and Extended tiers, and Edexcel uses Foundation and Higher. The lower tier caps the top grade, so a student planning A Level or IB Mathematics or sciences should almost always sit the upper tier.",
        "Typical combinations include English, Mathematics, one to three sciences, a second language and one or two electives. Students in Manmad often add Business Studies, Computer Science or Geography. Those aiming at medicine should keep Biology and Chemistry; engineering aspirants need Physics and Extended Mathematics.",
        "Private candidates in Maharashtra register through an exam centre in a larger city, since few small-town schools host outside entries. Practical components and coursework differ between boards and subjects, and deadlines come early. The tutor explains the syllabus and exam technique, while the centre handles registration and fees.",
        "IGCSE results support admission to IB and A Level programmes and count toward overseas applications, though they do not replace a board certificate for Indian university admission.",
      ],
    },
  ],

  process: [
    { title: "Send the details", description: "Write with class, programme, subject, board and any exam date, and we will shortlist a tutor." },
    { title: "Try the first lesson free", description: "The tutor and your child work through a real topic over video, with no payment and no pressure." },
    { title: "Get the plan in writing", description: "You receive the weekly schedule, a short study plan and the fee, all before you agree." },
    { title: "Keep a steady rhythm", description: "Live lessons on IST with a written note after each one covering what was taught and what to practise." },
    { title: "Adjust whenever needed", description: "We change the tutor, timing or intensity whenever the situation calls for it, especially before exams." },
  ],

  whyPoints: [
    { title: "Syllabus-matched", description: "The tutor has taught your exact IB course or IGCSE code." },
    { title: "Direct about delivery", description: "Home tuition in Manmad is online; tutors do not travel to Maharashtra." },
    { title: "Fits railway-town schedules", description: "Slots suit shift work, school hours and evening routines." },
    { title: "Coaching, not ghost-writing", description: "Tutors teach and give feedback but never write assessed work." },
    { title: "Regular written notes", description: "Parents see what was covered and what is next." },
    { title: "Start without risk", description: "A free lesson, a written quote and a freedom to swap tutors." },
  ],

  tutorsIntro:
    "Tutors here teach live online on IST, so a lesson with a Manmad student feels the same as one anywhere in India. Each card lists the programmes and subjects they teach.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Manmad?",
      answer:
        "No school in Manmad has been confirmed to teach the IB or a Cambridge or Edexcel IGCSE. Local schools follow the Maharashtra board or CBSE. Families usually look to Pune or Mumbai, choose an online school, or study privately for the exams. IB Gram supports the subject teaching whichever route you pick.",
    },
    {
      question: "Do your tutors visit homes in Manmad?",
      answer:
        "No. In-person home visits exist only in Gurugram and parts of Delhi NCR. In Manmad every session is live online and one to one, with an India-based tutor on IST. Your child studies from home while the tutor shares a screen, marks work and sends a written note afterwards.",
    },
    {
      question: "How do I find IB home tuition in Manmad?",
      answer:
        "Message IB Gram with the programme, subject and level, and we shortlist a tutor and arrange a free trial. Home tuition in Manmad means online lessons taken at home. After the trial we send a written plan and quote, and you can change tutors or stop at any point.",
    },
    {
      question: "What does IGCSE tuition cost in Manmad?",
      answer:
        "The price depends on subject, tier, tutor experience and the number of weekly sessions. We do not publish fixed prices; a written quote follows the free lesson. Upper-tier subjects and lessons near an exam usually cost more than a light weekly slot. Ask what marking and mocks are included.",
    },
    {
      question: "Can my child sit IGCSE as a private candidate from Manmad?",
      answer:
        "Yes. Private candidates register through an authorised exam centre that accepts outside entries, normally in a larger city such as Nashik, Pune or Mumbai. Practical and coursework parts depend on subject and board. A tutor teaches the syllabus and exam technique; the centre handles entries and fees.",
    },
    {
      question: "Which IB Mathematics course suits a Manmad student?",
      answer:
        "It depends on the degree. Analysis and Approaches suits engineering, physics and pure maths. Applications and Interpretation suits business, social science and many life-science routes. Check the target university's requirement first. A tutor can try both with your child and help decide which fits.",
    },
    {
      question: "How is IB different from the Maharashtra board?",
      answer:
        "The Maharashtra board rewards accurate textbook coverage, while the IB Diploma adds research, extended writing and internal assessments. Marathi-medium students also adjust to English command words. Content overlaps in maths and science, but answer style does not, and that is where tutoring usually begins.",
    },
    {
      question: "Will tutors write my child's IA or Extended Essay?",
      answer:
        "No. Tutors coach; they do not write assessed work. They can explain criteria, suggest methods and comment on a draft, but the writing, data and conclusions must be the student's own. Anything else would put results at risk and break IB rules. We say this clearly at the first lesson.",
    },
    {
      question: "Which IGCSE boards do you cover?",
      answer:
        "Both Cambridge International and Pearson Edexcel. Share the syllabus code or the subject and tier, such as Cambridge 0620 Chemistry or Edexcel 4BI1 Biology, and we match a tutor who has taught it. Papers and mark schemes differ between boards, so matching the board matters as much as the subject.",
    },
    {
      question: "What time are lessons for Manmad students?",
      answer:
        "Lessons run on Indian Standard Time. Manmad families usually choose weekday evenings, early mornings or weekends, avoiding shift clashes and festival weeks such as Ganeshotsav and Diwali. In the hot months early slots work better. You agree the pattern with the tutor and can change it every term.",
    },
    {
      question: "We were posted to Manmad mid-course. Can you help my child continue?",
      answer:
        "Yes, this is common. Tell us the programme and year reached, share textbooks if you have them, and give us the next exam date. The tutor maps what has been covered, fills gaps and keeps the syllabus moving so your child can rejoin a school or sit the exam without losing a year.",
    },
    {
      question: "Can my child study IB subjects alongside a Maharashtra board school?",
      answer:
        "Yes, with planning. Many students take one or two IB or IGCSE subjects online outside school hours while the school covers the rest. Workload is the main limit, so a tutor suggests a realistic weekly load that avoids clashes with board exams. Some families choose a full online IB course.",
    },
    {
      question: "When are IB and IGCSE exams held?",
      answer:
        "IB Diploma exams are in May and November. Cambridge IGCSE is held in May and June and again in October and November. Edexcel runs January, May and June, and autumn series. Most private candidates choose May. Dates and deadlines change every year, so confirm them with your exam centre.",
    },
    {
      question: "Is the trial lesson free?",
      answer:
        "Yes, with no obligation. Your child meets the tutor, works through a real topic and sees how online teaching feels. Afterwards you receive a written plan and quote. If the match is wrong we offer another tutor, and if you decide not to continue there is nothing to pay.",
    },
    {
      question: "Can you help a student from a Yeola or Nandgaon trading family with IB Economics?",
      answer:
        "Yes. Tutors use familiar examples such as market prices, cooperative trade and small-firm finance to explain theory and coach case-study technique. The approach suits students from trading households who already grasp the practical side. Internal assessments are guided but remain the student's own work.",
    },
    {
      question: "How do I contact IB Gram?",
      answer:
        "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the student's class, programme, subject and preferred time. We send a shortlist and arrange the free lesson. IB Gram is independent and not affiliated with any school, the IB, Cambridge or Pearson.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online tuition works in every city and town we serve." },
    { label: "IB and IGCSE tutors in Nashik", href: "/nashik/", description: "The district headquarters, with its own notes on schooling and exam centres." },
    { label: "IB and IGCSE tutors in Malegaon", href: "/malegaon/", description: "The neighbouring city to the north-west." },
    { label: "IB and IGCSE tutors in Pune", href: "/pune/", description: "The nearest major city with a wide choice of international schools." },
    { label: "IB and IGCSE tutors in Mumbai", href: "/mumbai/", description: "Where many Manmad families look for boarding or relocation." },
    { label: "IB tutors", href: "/ib-tutors/", description: "All IB programmes and subjects our tutors cover." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects, tiers and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the Diploma is structured and examined." },
    { label: "IB PYP tutoring", href: "/programmes/pyp/", description: "Inquiry-based learning for primary students." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI compared." },
    { label: "Our tutors", href: "/tutors/", description: "Profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send details and arrange a free lesson." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson from Manmad",
  closingBody:
    "Share your child's class, the course and the subject causing the most stress, and we will introduce a tutor who has taught it. One free lesson online, then a plan in writing. Email support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
