import type { CitySeoPage } from "../types";

/**
 * /kishanganj/ - IB and IGCSE tutoring page for Kishanganj, Bihar (Seemanchal). No school in
 * Kishanganj is confirmed to run the IB or a Cambridge/Edexcel IGCSE, so delivery is online
 * one-to-one and the clusters point honestly to Siliguri, Kolkata and Delhi NCR. Rendered with
 * the shared CountryLanding layout used by /gurgaon/.
 */
export const kishanganj: CitySeoPage = {
  slug: "kishanganj",
  countryName: "Kishanganj",
  countryNameLong: "Kishanganj, Bihar",
  demonym: "Kishanganj",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots avoid Ramadan iftar hours, Eid weeks and the flood-prone monsoon months, and always sit after your child's own school day",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.1, longitude: 87.9542 },
  wikipedia: "https://en.wikipedia.org/wiki/Kishanganj",
  alternateNames: ["Kishangunj", "Kishanganj Bihar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Kishanganj | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Kishanganj students in Bihar: one-to-one lessons from home, timed around Ramadan and monsoon, with a free trial first.",
  h1: "IB and IGCSE Tutors for Private Home Tuition in Kishanganj",
  heroEyebrow: "KISHANGANJ IB & IGCSE TUITION, ONLINE AND ONE TO ONE",
  heroSubtitle:
    "Want home tuition in Kishanganj for an international syllabus? Tutors do not travel to the town, because home visits run only in Gurugram and parts of Delhi NCR. Your child studies at home, on a laptop, with a specialist teaching them alone over live video, and you get a written note after each lesson.",
  primaryKeyword: "IB and IGCSE tutors in Kishanganj",
  imageAltText: "A Kishanganj student at a desk at home in the evening working on an IGCSE Physics paper with a tutor on video",
  secondaryKeywords: [
    "IB tutor Kishanganj",
    "IGCSE tutor Kishanganj",
    "IB home tuition Kishanganj",
    "IGCSE home tuition Kishanganj",
    "IB private tuition Kishanganj",
    "IB Maths tutor Kishanganj",
    "IGCSE Maths tutor Kishanganj",
    "IB Physics tutor Kishanganj",
    "IB Chemistry tutor Kishanganj",
    "IB Biology tutor Kishanganj",
    "IB DP tutor Kishanganj",
    "IB MYP tutor Kishanganj",
    "IB PYP tutor Kishanganj",
    "IGCSE online tuition Kishanganj",
    "IB tutor Seemanchal",
    "IGCSE tutor Kishanganj Bihar",
    "IB tutor Bahadurganj",
    "online IB classes Kishanganj",
    "international board tuition Seemanchal",
  ],

  heroTrustPoints: [
    "Tutors in India working on IST, so a Kishanganj evening is a normal teaching hour",
    "A free trial class first, with rates sent in writing afterwards",
    "A written summary from the tutor after every session",
    "A change of tutor if the fit is not right, with no fuss",
    "Coaching only: no writing of IAs, Extended Essays or TOK essays",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on local time" },
    { value: "PYP to DP", label: "Every IB stage plus IGCSE" },
    { value: "Free trial", label: "Try one lesson first" },
    { value: "May & Nov", label: "Exam sessions we plan from" },
  ],

  intro: {
    heading: "IB and IGCSE tutors in Kishanganj for a border district that plans for its children",
    paragraphs: [
      "Kishanganj is the last stop of Bihar before West Bengal and Nepal, a district of tea gardens, paddy and the Mechi and Mahananda rivers. Literacy and school-going have risen steadily here, and families in the town are increasingly ambitious about higher study, whether at Aligarh, Delhi, Hyderabad, Kolkata or abroad. That ambition is why some parents now search for IB and IGCSE tutors in Kishanganj, though almost no one can find a local classroom for either.",
      "The honest position is that we could not confirm a school in the district teaching the IB or a Cambridge or Edexcel IGCSE course. Bihar Board, madrasa-board schools, CBSE and a few private English-medium schools make up the local landscape, and Siliguri, about two to three hours away, is the nearest large centre for coaching and schools. For families who want an international qualification anyway, or who are preparing for a school elsewhere, tuition has to come to the child.",
      "IB Gram does that by video. Tutors live in India and teach on Indian Standard Time, and each lesson has one tutor and one student, with a shared whiteboard and real past papers on screen. Because in-person visits exist only in Gurugram and parts of Delhi NCR, we describe Kishanganj tuition as private lessons at home, online. A free trial comes first, then written rates, never the other way round.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "A primary curriculum organised around inquiry, where children investigate real questions and practise reading, writing and number sense inside each unit.",
      countryNote:
        "Kishanganj parents come to PYP mostly ahead of a move or when they want an English-speaking foundation that a local primary school does not provide.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "A five-year programme that links subjects through global contexts, marked against criteria, and closes with a personal project.",
      countryNote:
        "Students switching from Hindi, Urdu or Bengali-medium teaching to MYP need time to write extended answers in English, and that is the first tutoring job.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A two-year pre-university course of six subjects, the Extended Essay, Theory of Knowledge and CAS.",
      countryNote:
        "Most Kishanganj DP students study away from the district, and home tutoring during long breaks fills subject gaps they cannot close in a busy school term.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pathway pairing DP courses with career-related study, a reflective project and language development.",
      countryNote:
        "Seldom requested locally, though tea-trade and transport families sometimes ask whether its applied approach fits their child.",
    },
  ],
  programmesIntro:
    "A first lesson begins by explaining how the chosen programme is marked. Once the criteria make sense, both the child and the parent can see what to practise.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, algebra and proof for future engineers and scientists, with a firm habit of showing every step." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology, a good match for students heading to medicine, biology, business or economics." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics through fields, with data-analysis questions and an investigation the student must design." },
    { name: "Chemistry", levels: "SL / HL", description: "Reactivity, energetics and organic chemistry, taught through past-paper reasoning." },
    { name: "Biology", levels: "SL / HL", description: "A course for future doctors and researchers, with heavy weight on experimental design and interpreting data." },
    { name: "Economics", levels: "SL / HL", description: "Markets, trade and development, using diagrams and examples such as cross-border commerce and tea." },
    { name: "Business Management", levels: "SL / HL", description: "Case-study based, and useful for students from trading, transport and small-enterprise families." },
    { name: "Geography", levels: "SL / HL", description: "River systems, flooding and population, with case material that a Seemanchal student already understands from experience." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming and systems, taught through worked traces and timed questions." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Text analysis and comparative writing for students whose home languages are Hindi, Urdu, Bengali or Surjapuri." },
    { name: "Urdu A / Urdu B", levels: "SL / HL", description: "Literature or language study, an area where Kishanganj students often hold a real head start." },
    { name: "Hindi B", levels: "SL / HL", description: "A language acquisition course useful for a third-language credit." },
    { name: "Theory of Knowledge", levels: "Core", description: "Support to think clearly about knowledge; the exhibition and essay stay the student's own work." },
  ],
  subjectsIntro:
    "Subjects are chosen with the student's school and intended degree in mind. A tutor will speak plainly if a combination looks heavier than a student can manage.",

  igcseSubjects: [
    { name: "Mathematics (Core and Extended)", levels: "Cambridge 0580 / Edexcel", description: "Algebra, geometry, trigonometry and data at two tiers, with emphasis on setting work out clearly." },
    { name: "Additional Mathematics", levels: "Cambridge 0606", description: "Calculus and functions early, good preparation for A Level Mathematics." },
    { name: "Physics", levels: "Cambridge 0625 / Edexcel", description: "Forces, waves, electricity and thermal physics, with unfamiliar-context questions." },
    { name: "Chemistry", levels: "Cambridge 0620 / Edexcel", description: "Atoms, bonding, reactions and the mole, with practical-skills questions." },
    { name: "Biology", levels: "Cambridge 0610 / Edexcel", description: "Organisms, genetics and ecosystems, including reading data tables." },
    { name: "English as a Second Language", levels: "Cambridge 0510", description: "Reading, writing, listening and speaking for students moving from Hindi or Urdu-medium schooling." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Algorithms, networks and data representation." },
    { name: "Economics", levels: "Cambridge 0455", description: "Core economic problems and government policy with data response practice." },
    { name: "Business Studies", levels: "Cambridge 0450", description: "Business structures, marketing and finance through case questions." },
    { name: "Urdu as a Second Language", levels: "Cambridge 0539", description: "Reading, writing and speaking for students who want an additional language on their certificate." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel specifications differ, so tutors begin by identifying which one your child is following and at which tier.",

  regionsTitle: "Kishanganj town and blocks our students study from",
  regionsIntro:
    "Lessons run at home wherever you live in the district. These notes describe how each place's daily pattern tends to influence the best lesson time.",
  regions: [
    { name: "Kishanganj town centre", note: "The district headquarters and the busiest part of the district, with the widest choice of English-medium schools and coaching centres." },
    { name: "Khagra", note: "A well-known market area on the town's edge, active in the evening; families here often choose late-evening lessons after shops close." },
    { name: "Station Road", note: "The commercial route to Kishanganj railway station, where a headset makes a real difference to sound quality." },
    { name: "AMU Kishanganj centre neighbourhood", note: "Households near the Aligarh Muslim University centre, whose families often have direct ties to Aligarh and value higher study." },
    { name: "Bahadurganj", note: "A block to the east of the town, with a mix of agricultural and trading families and a growing school sector." },
    { name: "Dighalbank", note: "A block near the Nepal border road, with families who commute to Kishanganj town for coaching." },
    { name: "Pothia and Terhagachh", note: "Rural blocks where paddy and tea shape the year and a stable mobile network is the main practical issue." },
    { name: "Thakurganj and Kochadhaman", note: "Blocks close to the Nepal and Bengal borders, with strong links to Siliguri and its markets." },
  ],

  schoolClusters: [
    {
      city: "Kishanganj district",
      note: "We could not confirm any school in the district running the IB or a Cambridge or Edexcel IGCSE programme. Bihar Board, madrasa-board, CBSE and private English-medium schools dominate, so international curriculum study happens through online tutoring alongside them.",
      schools: [],
    },
    {
      city: "Nearby: Siliguri",
      note: "The nearest large city, a couple of hours across the Bengal border, is where many Kishanganj families go for coaching and higher-level schooling, though we could not confirm an IB or IGCSE school there.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "An overnight train from New Jalpaiguri, Kolkata has long-established IB and Cambridge schools and is a realistic boarding choice for well-resourced families.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "The Cambridge School, Kolkata"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Families with Aligarh, Jamia or Delhi ties sometimes look at Delhi NCR schools, where the choice of IB and IGCSE options is wider.",
      schools: ["Vasant Valley School, Delhi", "The British School, New Delhi"],
    },
  ],
  schoolDisclaimer:
    "Any school named on this page lies outside Kishanganj and is included only because families from the district sometimes consider it. IB Gram is an independent tutoring service and has no relationship with the IB, Cambridge, Pearson or any school, and a mention is not an endorsement.",

  modesIntro:
    "Tutors do not come to Kishanganj homes, since visits run only in Gurugram and parts of Delhi NCR. These are the three online set-ups families choose from.",
  modes: [
    {
      title: "Regular private lessons at home",
      description: "One subject, one tutor, a fixed weekly time, with the student's own work marked live.",
      bullets: ["Same slot each week", "Live written feedback", "Short parent note"],
    },
    {
      title: "Revision before mocks and finals",
      description: "A compact block ahead of mock exams and the May or November papers, using timed past questions and examiner wording.",
      bullets: ["Timed practice", "A log of repeated errors", "Topic priorities by marks"],
    },
    {
      title: "Preparation before a school move",
      description: "For a child about to start at a school elsewhere, a few months to build English, mathematics and science confidence.",
      bullets: ["Initial diagnostic", "Subject vocabulary in English", "Note-taking and study routine"],
    },
  ],

  sections: [
    {
      heading: "What does it mean to study IB or IGCSE when the nearest classroom is far away?",
      paragraphs: [
        "It means the syllabus, the exam and the school are three separate questions, and tutoring answers only one of them. A Kishanganj student can learn the content and the exam technique at home from a specialist. The exam itself needs a registered centre, and the internal assessments need a school. Most students who follow the IB from this region do so at a school elsewhere, and use home tuition to strengthen weak subjects.",
        "For IGCSE, some students study as private candidates. That route needs a centre that accepts them, and centres in Kolkata, Delhi and a few other cities do. A tutor cannot arrange the centre, but can prepare the student and tell the family what to ask when they call.",
        "Younger students have more freedom. A Class 6 or 7 student can start building English fluency, mathematical reasoning and lab-style thinking before choosing a board. If they later join an IB or IGCSE school, the transition is far smoother.",
        "We are candid on these limits with every family, and would prefer that a parent knows what tutoring can deliver than assume it replaces a school.",
      ],
    },
    {
      heading: "How do Bihar Board, madrasa-board and CBSE study compare with the IB and IGCSE?",
      paragraphs: [
        "The Bihar School Examination Board, the Bihar State Madrasa Education Board and CBSE all emphasise a public examination at the end of Class 10 and 12, with syllabus content set in textbooks. International boards are built differently, and the gap shows most in extended writing and unseen data.",
        "A student from a madrasa-board background often brings excellent discipline, memory and command of Urdu and Arabic, plus a solid foundation in mathematics. What needs building is English-language subject writing and experience of sciences taught as investigation. That is a specific, solvable gap, and tutoring targets it directly.",
        "Bihar Board students commonly need more help with English than with content. Once they learn to express a scientific argument in clear English, marks improve quickly.",
        "The table compares the boards a Kishanganj family may meet. It is a general guide, not a ranking, and specific schools vary.",
      ],
      table: {
        caption: "Boards a Kishanganj family may compare",
        columns: ["Aspect", "Bihar Board", "Madrasa Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Main language", "Hindi or English", "Urdu, Arabic and English", "English or Hindi", "English", "English plus second language"],
          ["Assessment", "Board exams", "Board exams", "Board exams", "Series exams", "Exams plus internal work"],
          ["Question focus", "Textbook recall", "Textbook recall with language depth", "Recall and application", "Structured, applied", "Extended reasoning"],
          ["Local presence", "Widespread", "Present in the district", "Some schools", "None confirmed", "None confirmed"],
          ["Typical next step", "Class 11-12, entrance exams", "Class 11-12, higher study", "CUET, JEE, NEET", "A Level or IB", "University in India or abroad"],
        ],
      },
    },
    {
      heading: "What shapes the price of IB and IGCSE tuition for a family in Kishanganj?",
      paragraphs: [
        "Rates on this site are given only after a free trial and only in writing. The reason is that they vary widely with what a family asks for. A Class 8 MYP mathematics learner needing one session a week is a completely different request from an IB Chemistry HL student needing three.",
        "Tutor experience and subject specialism matter most. Someone who has taught a specification for years, marked internal assessments and knows the mark schemes well will usually charge more than someone newer, and higher-level mathematics and sciences tend to sit at the higher end.",
        "The number and length of sessions come next, followed by whether the plan is steady or an intensive block. Families can ask the tutor for a lighter plan if the budget is tight.",
        "There are costs Kishanganj families avoid. There is no journey to Siliguri or Purnia, no hostel fees for weekday classes, and no lost travel hours. Those savings go straight into study time.",
        "Ask any tutor how they measure progress. A short written note after each lesson makes it easy to judge value for money without guessing.",
      ],
    },
    {
      heading: "Online one-to-one tuition, Siliguri coaching or self-study: which suits a Kishanganj student?",
      paragraphs: [
        "Siliguri is the natural place for Kishanganj families to look for coaching, and its centres are built for Bengal and Bihar board, JEE and NEET. That is useful for those exams. It is less useful for the IB or IGCSE, where the syllabus, the command words and the marking differ.",
        "The journey is another factor. Two to three hours each way rules out weekly attendance, and a hostel stay adds cost. For a student in Class 9 or 10 this is a heavy commitment for uncertain benefit.",
        "Self-study with past papers is possible, and some disciplined students manage well, particularly in mathematics. The weak point is feedback: without a reader, repeated errors stay hidden.",
        "Online tuition with a subject specialist keeps the student at home, on a familiar routine, with an expert reading the actual work. The table sets the choices side by side.",
      ],
      table: {
        caption: "Ways a Kishanganj student can prepare for an international syllabus",
        columns: ["Option", "Syllabus-specific", "Individual attention", "Practical burden"],
        rows: [
          ["Online one-to-one tutor", "Yes", "Full", "Laptop and connection"],
          ["Coaching in Siliguri", "Mostly board and entrance exams", "Batch", "Long journey and possible hostel"],
          ["Local coaching centre", "Rarely", "Batch", "Daily travel in town"],
          ["Local private teacher", "Seldom", "Individual", "Depends on subject knowledge"],
          ["Self-study", "Through past papers only", "None", "Needs strong discipline"],
        ],
      },
    },
    {
      heading: "When do exams fall, and how do Ramadan, floods and festivals affect the timetable?",
      paragraphs: [
        "IB Diploma exams run mainly in May, with a November session for some schools, and Cambridge and Edexcel IGCSE run in May-June and October-November. A Kishanganj student should confirm the session with the school or centre first, then let the tutor plan backwards from that date.",
        "Ramadan matters in a district where a large part of the population observes it. Study during the fast is tiring, and the hour before iftar is a poor time for a demanding lesson. Tutors move sessions to late evening or early morning, or reduce the load, and Eid is treated as a proper break.",
        "The monsoon from June to September brings the Mechi, Kankai and Mahananda into spate in some years, and low-lying blocks can lose roads and power for days. A fallback slot each week helps, and mock papers can be rescheduled without penalty.",
        "Durga Puja, Chhath and Diwali fall in the autumn, and Holi in March, so the calendar has a crowded second half. The table shows how a year can be organised.",
      ],
      table: {
        caption: "A Kishanganj year set against exams and local events",
        columns: ["Months", "Local factor", "Exam or school context", "Tutor approach"],
        rows: [
          ["January to March", "Cool weather and Holi in March", "Mocks and internal assessments", "Full papers and heavy topic work"],
          ["April to June", "Heat and pre-monsoon storms", "May sessions for IB and IGCSE", "Early or late lessons, short revision"],
          ["July to September", "Monsoon, river floods in some years", "New academic year", "Foundations, backup slots"],
          ["October to November", "Durga Puja, Diwali, Chhath", "November exam sessions", "Light weeks around festivals"],
          ["Ramadan and Eid (dates move each year)", "Fasting and family gatherings", "Can fall near term or exam periods", "Late-evening or early lessons, reduced load"],
        ],
      },
    },
    {
      heading: "How do IB Mathematics AA and AI and the sciences suit students from Seemanchal?",
      paragraphs: [
        "Mathematics tends to be a confident subject for Kishanganj students, and the IB builds on that if the student adjusts to the style. Analysis and Approaches puts weight on algebraic manipulation, calculus and justification, and suits engineering and pure science. Applications and Interpretation focuses on statistics, modelling and technology, and suits biology, economics and social science.",
        "Command words are the first hurdle. 'Hence', 'show that' and 'justify' each mean something precise, and marks depend on the answer following that meaning. Tutors drill this with past-paper questions until it becomes automatic.",
        "Science tutoring concentrates on three things. First, explaining a mechanism in a few clear sentences. Second, reading a graph or table for what it does show, not what the student expects. Third, designing an investigation with variables, controls and sources of error.",
        "Biology and Chemistry students hoping for medicine should also ask a tutor about workload. Higher Level in both alongside Mathematics is demanding, and a tutor will say honestly if the plan needs adjusting.",
      ],
    },
    {
      heading: "IGCSE Core and Extended tiers, and choosing subjects with a next step in mind",
      paragraphs: [
        "Core papers cover the basics and cap the highest grade, while Extended papers open the full range and ask for more depth. A student who performs well in Class 9 mathematics is normally ready for Extended, and a tutor can check this in the first two lessons.",
        "Subject choice at IGCSE is wide. Most students take English, Mathematics, a language, sciences and one or two others. A future doctor should keep Biology and Chemistry, an engineer Physics and Mathematics, and a commerce student Economics or Business Studies.",
        "Urdu, Hindi or another language can add value. A strong result in a mother-tongue language offers a reliable score and also keeps the student connected to home culture.",
        "Cambridge and Edexcel differ in layout and command words, so a tutor confirms which one applies. Private candidates should check with a centre for practical exam arrangements early, since booking deadlines can be several months ahead.",
      ],
    },
    {
      heading: "What university paths lead from Kishanganj with the IB or IGCSE?",
      paragraphs: [
        "Kishanganj has a particular local advantage: the Aligarh Muslim University centre in the town, which brings the AMU name and its admission culture into the district. IB students should verify how AMU treats IB Diploma applicants and whether entrance tests apply to the course they want.",
        "More generally, the Association of Indian Universities recognises the IB Diploma as equivalent to Class 12, and CUET-UG is the route into central universities including Delhi University, Jamia Millia Islamia and others. Rules vary by course, so check each university's admission brochure.",
        "For engineering and medicine, JEE Main and NEET-UG publish eligibility rules that name the subjects and marks required at the qualifying stage. IB students should study these before choosing Higher Level subjects.",
        "Overseas study is realistic for some families. IB scores are recognised directly by universities in the UK, USA, Canada, Australia and Europe, and the Extended Essay and CAS help a student show independence. Tutors will discuss subject combinations, though not run admissions.",
      ],
    },
  ],

  process: [
    { title: "Send us a message", description: "Use WhatsApp or email to share class, board and the subject where your child struggles most." },
    { title: "Confirm the syllabus", description: "We ask for the exam board, tier and session, and whether the student is in a school or a private candidate." },
    { title: "Take the free trial", description: "A tutor with relevant experience teaches a real class at an hour that suits your household." },
    { title: "Review written rates", description: "After the trial you receive a written quote and a suggested weekly plan, and nothing is booked yet." },
    { title: "Learn and review", description: "Classes start, a short note follows each one, and you may ask for a different tutor at any point." },
  ],

  whyPoints: [
    { title: "Made for the right syllabus", description: "Tutors work from IB guides and Cambridge and Edexcel specifications, marking to published criteria." },
    { title: "Straight about online delivery", description: "Nobody comes to Kishanganj in the flesh; each lesson is live and one to one, and we say that first." },
    { title: "Works around the local calendar", description: "Ramadan, Eid, floods and festivals are planned around rather than argued with." },
    { title: "Rates in writing", description: "You see a quote after the trial and before you commit." },
    { title: "Coaching, not ghost-writing", description: "Tutors help students produce their own IAs, essays and coursework." },
    { title: "No commuting", description: "No trips to Siliguri or Purnia; the hours go into learning." },
  ],

  tutorsIntro:
    "All tutors teach live from India and are chosen for the syllabus they know best. Use the trial lesson to judge fit before you decide.",

  faqs: [
    { question: "Do tutors visit homes in Kishanganj?", answer: "No, tutors do not visit homes in Kishanganj. In-person home tuition is available only in Gurugram and parts of Delhi NCR. Kishanganj students study online at home: a laptop, a live video link and a shared writing screen, with a single tutor teaching a single student, so the lesson remains fully personal." },
    { question: "Is there an IB or IGCSE school in Kishanganj?", answer: "We could not confirm a school in Kishanganj district teaching the IB or a Cambridge or Edexcel IGCSE programme. Local schools follow Bihar Board, madrasa board or CBSE. Families who want an international classroom usually look at Kolkata or Delhi NCR, and tutoring at home supports that move or a private-candidate route." },
    { question: "What does tuition cost?", answer: "Rates depend on the subject, level, tutor experience and number of sessions, so no single price applies. Start with a free trial and you will get written rates before booking. If your budget is limited, tell us, and the tutor can choose the highest-value topics first." },
    { question: "My child studied in a madrasa or Urdu-medium school. Can IB or IGCSE work?", answer: "Yes. Such students often bring strong discipline, memory and languages. The main task is building subject writing in English and practising unseen-data questions. Tutors start with a diagnostic lesson, then plan around the gaps, and many students see steady progress within a term or two." },
    { question: "Which subjects are most requested?", answer: "Mathematics, Physics, Chemistry and Biology lead, followed by English, Economics and Business. Urdu as a language subject also attracts interest because students hold a natural advantage and it can lift a total score." },
    { question: "How does Ramadan affect lessons?", answer: "Lessons are moved to late evening or early morning, or the load is reduced, so that students are not asked to work hard just before iftar. Eid is treated as a proper break, and the tutor plans catch-up sessions afterwards if needed." },
    { question: "What if floods or power cuts disrupt a class?", answer: "Rescheduling is free when a genuine disruption occurs. A mobile hotspot and a charged laptop help, and a backup slot each week gives room to recover. Families in low-lying blocks are encouraged to mention this at the outset so the plan allows for it." },
    { question: "Will the tutor write IAs or essays?", answer: "No. Tutors coach but never write IAs, Extended Essays, TOK essays or coursework. They explain criteria, help refine a question, review a plan and comment on a draft, but the student writes every word. That is what the IB requires and it also leads to real learning." },
    { question: "Is the IB Diploma accepted in Indian universities?", answer: "Generally yes. The Association of Indian Universities treats it as equivalent to Class 12, and CUET-UG is the main route into central universities. Some courses have subject conditions, so check the rules of each university and programme, including AMU if you are interested in it." },
    { question: "Can an IB or IGCSE student still take NEET or JEE?", answer: "Possibly, if the subjects and marks meet the exam authorities' rules. NEET expects Physics, Chemistry, Biology and English at the senior stage, and JEE has minimum conditions too. IGCSE alone is a Class 10 level qualification. Check the latest official notices before finalising subjects." },
    { question: "When should tutoring begin?", answer: "There is no single right age. Younger children can start with reading and number confidence, MYP and IGCSE support commonly begins in Class 7 to 9, and DP tutoring in Class 11. A summer bridge in Class 10 often makes the first term much smoother." },
    { question: "How does the trial lesson work?", answer: "You send the class, board and subject, we suggest a tutor, and the trial is an actual lesson at a time that suits you. There is no obligation. Afterwards you receive a note on what was covered and what comes next, plus written rates if you wish to continue." },
    { question: "Can we change tutors?", answer: "Yes, at any point. Teaching depends on pace and personality as well as knowledge, and a mismatch is nobody's fault. Tell us what felt wrong, and we will match a different tutor. Families who switch usually find the second match clearer because expectations are better defined." },
    { question: "Which IGCSE boards do tutors cover?", answer: "Cambridge International IGCSE and Pearson Edexcel International GCSE, with A Level and AS Level as context. We confirm the board, subject code and tier first, because question styles differ. Practising from the wrong board's papers is a common source of wasted revision." },
    { question: "How do I get started?", answer: "Send a WhatsApp message to +91 7439 368 115 or write to support@ibgram.com with your child's class, board and the subject needing help. We will suggest a tutor and arrange a free trial, and nothing is confirmed until you are happy with the lesson and the written rates." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "The whole IB and IGCSE tutoring service." },
    { label: "India city pages", href: "/india/", description: "Cities across India served online." },
    { label: "Gurugram", href: "/gurgaon/", description: "Where in-person home tuition is available." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Tutors by IB subject and level." },
    { label: "IGCSE", href: "/igcse/", description: "Cambridge and Edexcel IGCSE tutoring." },
    { label: "IB PYP", href: "/programmes/pyp/", description: "The Primary Years Programme." },
    { label: "IB DP", href: "/programmes/dp/", description: "How the Diploma Programme works." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book a free trial." },
    { label: "Siliguri", href: "/siliguri/", description: "The nearest large city across the Bengal border." },
    { label: "Purnia", href: "/purnia/", description: "The neighbouring Bihar city." },
    { label: "Katihar", href: "/katihar/", description: "Another Seemanchal district town." },
    { label: "Kolkata", href: "/kolkata/", description: "A major hub for IB and IGCSE schools." },
  ],

  closingHeading: "One free lesson is the easiest first step from Kishanganj",
  closingBody:
    "If you have been searching for IB and IGCSE tutors in Kishanganj, send a short message with your child's class, board and subject. We will suggest a tutor, arrange a trial and share written rates afterwards. Write to support@ibgram.com or use WhatsApp on +91 7439 368 115.",
};
