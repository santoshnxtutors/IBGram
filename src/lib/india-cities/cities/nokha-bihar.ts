import type { CitySeoPage } from "../types";

/**
 * /nokha-bihar/ - IB and IGCSE tutoring for Nokha, Rohtas district, Bihar (not Nokha in Bikaner,
 * Rajasthan, which has its own page at /nokha/). No IB or Cambridge/Edexcel school in Nokha could be
 * confirmed, so stripSchools is empty and clusters are labelled nearby-city clusters reused from
 * verified pages. All lessons online.
 */
export const nokhaBihar: CitySeoPage = {
  slug: "nokha-bihar",
  countryName: "Nokha",
  countryNameLong: "Nokha, Rohtas, Bihar",
  demonym: "Nokha",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-afternoon and night slots that work around rice-harvest weeks, Chhath, the load-shedding hours and the Bihar board exam months",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.1015, longitude: 84.1228 },
  wikipedia: "https://en.wikipedia.org/wiki/Nokha,_Rohtas",
  alternateNames: ["Nokha Rohtas", "Nokha Bihar", "Nokha Sasaram"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Nokha, Bihar | Online Home Tuition",
  metaDescription:
    "Nokha (Rohtas, Bihar) students can study IB and IGCSE with live one-to-one online tutors, timed around rice season and Chhath. Free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Nokha, Bihar",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR NOKHA, ROHTAS",
  heroSubtitle:
    "Home tuition in Nokha for an IB or IGCSE student has one workable form: a live private lesson at your own table, taught over video by a specialist elsewhere in India. This page is about Nokha in Rohtas district, Bihar, the rice-mill town on the Sasaram plain, and not Nokha in Rajasthan, which has a separate page.",
  primaryKeyword: "IB and IGCSE tutors in Nokha",
  imageAltText: "A Nokha, Bihar school student in a live online IB Mathematics lesson with a tutor, laptop on a study table at home",
  secondaryKeywords: [
    "IB tutor Nokha",
    "IGCSE tutor Nokha",
    "IB home tuition Nokha Bihar",
    "IGCSE home tuition Nokha Bihar",
    "IB private tuition Nokha",
    "IB Maths tutor Nokha",
    "IGCSE Maths tutor Nokha",
    "IB Physics tutor Nokha",
    "IB Chemistry tutor Nokha",
    "IB Biology tutor Nokha",
    "IB DP tutor Nokha",
    "IB MYP tutor Nokha",
    "IB PYP tutor Nokha",
    "IGCSE online tuition Nokha",
    "IB tutor Rohtas Bihar",
    "IGCSE tutor Sasaram Nokha",
    "online IB tutor Bikramganj Dehri",
    "Cambridge IGCSE tutor Rohtas district",
    "IB tutor Nokha Rohtas",
  ],

  heroTrustPoints: [
    "Tutors who have already taught the exact IB subject or IGCSE syllabus code",
    "Lessons are online for Nokha; in-person tuition exists only in Gurugram and parts of Delhi NCR",
    "A short written note after every lesson, and a change of tutor if the fit is wrong",
    "A free trial lesson, then a rate in writing before you commit",
  ],
  heroStats: [
    { value: "Rohtas, Bihar", label: "Not Nokha, Rajasthan" },
    { value: "PYP to DP", label: "Every IB stage" },
    { value: "Cambridge + Edexcel", label: "Both IGCSE boards" },
    { value: "Free trial", label: "Sit a real lesson first" },
  ],

  intro: {
    heading: "Nokha in Rohtas: online IB and IGCSE tuition for a rice-mill town",
    paragraphs: [
      "Nokha is a nagar panchayat and development block in Rohtas district, on the flat Sasaram plain of south-west Bihar. State Highway 12 runs through it, a small railway halt links it to the Patna side, and its economy is built on parboiled rice, with furniture and brick-making close behind. If you were searching for the Nokha in Bikaner district of Rajasthan, that town has its own page on this site; everything below is about the Bihar one.",
      "Families here who ask about IB or IGCSE home tuition tend to fall into three groups: parents who have a child in an international school in Patna, Varanasi or further afield and want weekend support at home; households planning an admission test or a move and wanting the child ready for a new board; and students who have finished Class 10 locally and are aiming at study abroad. We could not confirm any school inside Nokha that teaches the IB or a Cambridge or Pearson Edexcel IGCSE, so none is named as local.",
      "That is why IB Gram teaches Nokha students online. The lesson is live and private: the student sits at home with a laptop, a notebook and a shared whiteboard, and a tutor who has taught the same syllabus before marks the working as it appears. No tutor travels to Nokha, because in-person tuition runs only in Gurugram and parts of Delhi NCR.",
      "IB Gram is an independent service and has no tie to the International Baccalaureate, Cambridge, Pearson or any school mentioned here. Tutors coach and give feedback. They do not write Internal Assessments, Extended Essays, TOK essays or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Live, private lessons in English, taught from India in IST",
      "A free trial lesson before any fee is discussed",
      "No home visits in Nokha, since home visits are limited to Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "In Nokha the IB reaches a family through a plan, never through the school gate next door. So the tutoring below is tied to a target: an entrance test in a bigger city, a first term in a new curriculum, or a set of mock papers in an international school the child already attends.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Young pupils learn through units built around a central idea, and they finish with a self-chosen Exhibition project. There are no marked papers, so tutoring is gentle: reading aloud, neat handwriting, counting games that build number sense, and practice at explaining what they noticed in a sentence or two.",
      countryNote:
        "A Nokha family usually reaches for PYP support when a younger child is about to start at an international school elsewhere, and a few short lessons a week are enough.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers grade against published criteria in eight subject groups, and the personal project at the end of the programme asks a student to plan and reflect over months. The step up from a Bihar Board or CBSE notebook habit is writing a reason after every answer.",
      countryNote:
        "Students from Nokha who join MYP late are often strong at recall and need coaching in lab reports, source analysis and extended English writing.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three or four of them at Higher Level, plus the Extended Essay, Theory of Knowledge and CAS service hours. The final grade is out of 45, with examination sessions in May and November, and the coursework deadlines arrive well before the papers.",
      countryNote:
        "Nokha's DP candidates normally study at a school in a larger city, possibly as boarders, and use online lessons during Saturdays and long holidays at home.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP combines at least two Diploma courses with a career-related study and a core on service learning and reflection. Very few Indian schools run it, and the Diploma courses inside CP are held to the same standard as in the full Diploma.",
      countryNote:
        "We rarely get a CP enquiry from Rohtas district, and when we do we teach the Diploma subjects exactly as for any DP student.",
    },
  ],

  subjectsIntro:
    "Tell us the subject, level and exam session and we look for a tutor who has already taught it. IB Maths is a good example: Analysis and Approaches and Applications and Interpretation are separate courses with separate tutors, and Higher Level is a different load from Standard Level.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof. Students from Bihar Board classrooms usually have the technique, and we train them to set out every line of reasoning." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling with a graphing calculator, using data sets such as monsoon rainfall and rice yields." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, electricity and fields, with careful attention to units, uncertainties and plotted graphs." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics, equilibrium and organic reaction pathways, with the data booklet open from lesson one." },
    { name: "IB Biology", levels: "HL / SL", description: "A wide syllabus turned into a rhythm of recall, application and command-word practice." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram skills and evaluation, with examples that can draw on rice milling, minimum support prices and Bihar's migration of labour." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies, tools of analysis and the internal research project, useful for families that run mills or shops." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen texts and the oral commentary, for students who think in Hindi or Bhojpuri at home." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, writing and spoken practice for students who already speak Hindi fluently." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and the practical project, built up in small steps." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems models and case studies, with irrigation canals and the Sone river basin as natural local examples." },
    { name: "IB Geography", levels: "HL / SL", description: "Population, hazards and resource themes, with fieldwork methods explained for the internal study." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and essay planning, with the Mughal and Sur-era history around Sasaram familiar to many local students." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, methodology and structured essay writing." },
  ],

  igcseSubjectsIntro:
    "IGCSE is offered by Cambridge and by Pearson Edexcel, and the two differ in paper structure, tiers and command words. A tutor must know which board your child sits. These are the subjects Nokha families most often raise.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths with calculator and non-calculator papers; Extended candidates spend most time on algebra, trigonometry and graphs." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "A bridge to IB Maths HL, with early calculus and functions." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Two equally weighted papers, with method marks given throughout." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy, circuits and waves, including the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atomic structure, reactions, rates, and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, transport, inheritance, ecosystems and human physiology." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing, listening and speaking for students from Hindi-speaking homes." },
    { name: "IGCSE First Language English 0500", levels: "Grade 9-10", description: "Directed writing, descriptive and narrative composition." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, networks and data representation." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Basic economic ideas with data-response practice." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "A natural subject for students from Bihar who wish to include Hindi in the certificate." },
  ],

  regionsTitle: "Nokha and the towns around it where our tutors teach online",
  regionsIntro:
    "A video lesson works the same from any part of Rohtas district. What changes is the daily rhythm: the rice-mill shift, the bus to Sasaram, the evening power supply. The notes below show how families around Nokha tend to plan study time.",
  regions: [
    { name: "Nokha town centre", note: "The market area and the old lanes around the block office. Many households run shops, so lessons are fitted after the shutters come down." },
    { name: "The rice-mill belt", note: "Mills along the approach roads employ many local families, and the busiest weeks follow the paddy harvest, so exam revision is scheduled away from them." },
    { name: "Nokha railway station area", note: "A small halt on the line towards Patna; useful for students who travel to a larger city school for weekends." },
    { name: "SH-12 corridor", note: "Homes and workshops along the State Highway; truck noise and power fluctuations make a good headset and a backup plan worthwhile." },
    { name: "Nokha block villages", note: "Villages around the town where mobile data is the main connection; lessons are planned around network strength." },
    { name: "Sasaram", note: "The district headquarters, with Sher Shah Suri's tomb and the tuition culture of Rohtas; many Nokha students already travel there for coaching." },
    { name: "Dehri-on-Sone and Dalmianagar", note: "The industrial twin towns to the south-east; families with a mill or industrial background often think of boarding schools outside Bihar." },
    { name: "Bikramganj", note: "A busy market town to the north on the way to Arrah and Patna, popular for coaching centres." },
    { name: "Kochas and Tilouthu", note: "Nearby block towns whose students would otherwise commute long distances; online lessons remove the journey." },
    { name: "Sheosagar and Koath", note: "Smaller towns along the Grand Trunk Road side of the district where evening lessons suit the long bus ride home." },
  ],

  schoolDisclaimer:
    "The schools named here are listed only to show where IB and Cambridge or Edexcel IGCSE classrooms exist within reach of Nokha. IB Gram has no agreement with them, and none with the IB, Cambridge or Pearson. Please check every programme, subject list and admission rule with the school itself.",
  schoolClusters: [
    {
      city: "Local: Nokha and Rohtas district",
      note: "We could not confirm any school in Nokha or its block that teaches the IB or an IGCSE, so we list none. Local schools follow the Bihar School Examination Board or CBSE, and parents who want an international board usually look outside the district.",
      schools: [],
    },
    {
      city: "Nearby: Varanasi",
      note: "Varanasi is the nearest large city outside Bihar to the west, roughly a half-day trip by road or rail, and it appears on our Sasaram page with an international-board school.",
      schools: ["Sunbeam International School, Varuna"],
    },
    {
      city: "Nearby: Kolkata (boarding and relocation)",
      note: "Families from Bihar who want a full IB or Cambridge pathway often consider Kolkata, which has several established schools and a long-standing Bihari community.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "The Cambridge School, Calcutta"],
    },
    {
      city: "Nearby: Delhi NCR (boarding)",
      note: "Delhi NCR schools take boarders and relocating families from across Bihar, and the capital region is where in-person tuition from IB Gram exists.",
      schools: ["Vasant Valley School, Delhi", "The British School, New Delhi"],
    },
  ],

  modesIntro:
    "Every Nokha student studies online. What families choose is the shape of it: a steady weekly lesson, a longer plan with written reviews, or a sharp burst of timed practice before mocks and final papers.",
  modes: [
    {
      title: "A steady weekly lesson",
      description:
        "One tutor, one recurring slot. The student arrives with the week's questions, the tutor teaches the next topic and fixes mistakes line by line on the shared board.",
      bullets: [
        "A tutor picked for your subject, level and board",
        "Usually one hour, once or twice a week",
        "Handwritten working shown on camera or tablet",
        "Works for IGCSE, MYP and DP",
      ],
    },
    {
      title: "A term plan with reviews",
      description:
        "A short roadmap for the term, a written note after each lesson and a call with the parent every few weeks to reset priorities.",
      bullets: [
        "Notes a parent without IB experience can follow",
        "Review calls rather than surprise reports",
        "Fits a student who also attends school or coaching",
        "Extra revision before unit tests",
      ],
    },
    {
      title: "Exam-season intensives",
      description:
        "In the weeks before mocks and the May or November sessions, lessons become timed practice on past papers with detailed marking.",
      bullets: [
        "Papers marked in the style of the board",
        "Two to four sessions a week if the home schedule allows",
        "Kept clear of Chhath and the paddy harvest",
        "Best begun about three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Nokha, Rohtas?",
      paragraphs: [
        "No school inside Nokha that we can confirm offers the IB or an IGCSE. The town's schools are affiliated to the Bihar School Examination Board or to CBSE, and the same is largely true across the block. If a school or coaching centre tells you otherwise, ask to see its authorisation letter and its current subject list before paying any fee.",
        "That does not mean a Nokha child cannot take an international board. It means the classroom is elsewhere. The nearest options usually sit in cities such as Varanasi or Patna, or further away in Kolkata and the Delhi region, where some schools take boarders. Each has its own admission test, entry age and fee structure.",
        "For many Rohtas families the question is timing. A child in Class 8 at a local English-medium school can still move into an IGCSE programme at Class 9 if the new school finds a seat. A student who has finished Class 10 may join the IB Diploma at Class 11. Online coaching in the months before the move closes the gap in writing style and subject content.",
        "We are open about this because a realistic plan is more useful than a flattering one. If your goal is an Indian engineering or medical seat through JEE or NEET, the Bihar Board or CBSE route is usually smoother, and we will say so.",
      ],
    },
    {
      heading: "How do Bihar Board, CBSE, IGCSE and IB compare for a Nokha student?",
      paragraphs: [
        "The Bihar Board holds its matriculation exam at Class 10 and its intermediate exam at Class 12 in February and March. CBSE follows the same months with a national syllabus. IGCSE and IB are international programmes assessed mainly in May and November sessions, and they reward explained reasoning and applied questions rather than recall alone.",
        "A Bihar Board student typically arrives with excellent arithmetic and a long memory for definitions. In an IGCSE or IB paper the marks are for method, for units, for evaluation and for clear sentences. The first fortnight of tutoring usually targets one habit: write the reasoning, not just the answer.",
        "Language is another gap. Many Nokha homes speak Hindi or Bhojpuri, and the exam is in English. That is not a barrier for the sciences once the command words are understood, but it matters for IB English, History and Economics essays.",
        "For a family weighing the options, the clearest question is where the student plans to study next. India-only plans favour CBSE or the state board. Plans for the UK, Canada, Australia or an Indian private university lean towards IGCSE then IB.",
      ],
      table: {
        caption: "Board choices for a Nokha family",
        columns: ["Board", "Typical availability", "Style of questions", "Main exam months"],
        rows: [
          ["Bihar School Examination Board", "Most local schools", "Recall-heavy, Hindi or English medium", "Feb-Mar"],
          ["CBSE", "Private schools in Rohtas towns", "National syllabus with application questions", "Feb-Mar"],
          ["Cambridge IGCSE / Edexcel IGCSE", "Larger cities, some boarding schools", "Applied, tiered papers, command words", "May-Jun, Oct-Nov"],
          ["IB Diploma", "Larger cities and boarding schools", "Six subjects plus core, internal assessment", "May, Nov"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a family in Nokha?",
      paragraphs: [
        "We do not publish a price list, because the rate depends on the student. After your child's free trial lesson we send a written quote that reflects the course and level, the subject, how closely the tutor has taught that exact syllabus, and how many lessons a week you want.",
        "A Higher Level IB Chemistry tutor who has marked many papers is a different resource from a tutor for IGCSE Foundation Maths. A more experienced specialist may charge more per hour but need fewer hours to get a student to the standard, so the hourly figure alone is a poor guide.",
        "Online lessons also change the other costs. There is no fare to Sasaram or Bikramganj, no hours lost on SH-12, and no rent for a room in a bigger city purely to attend classes. For a family that already pays for school fees and coaching, those savings are real.",
        "The practical advice is to sit the trial, read the written rate, and compare it with what you currently spend each month on coaching. You can pause or change tutor if the plan stops working.",
      ],
      bullets: [
        "Course level: IB Higher or Standard Level, IGCSE Core, Extended, Foundation or Higher",
        "Subject, and the tutor's experience with that exact syllabus",
        "Number and length of weekly lessons",
        "Regular term plan or a short exam intensive",
      ],
    },
    {
      heading: "Online tutor, Sasaram coaching, a local home tutor or self-study?",
      paragraphs: [
        "Sasaram and Bikramganj have busy coaching markets, but they are built around Bihar Board, CBSE, JEE and NEET preparation. They are rarely set up for IB Internal Assessments or Cambridge paper codes, so an IB or IGCSE student may find the room full of children on another syllabus.",
        "A local private home tutor is easy to find in Nokha and is often an excellent teacher of school subjects. The limit is syllabus knowledge: few have sat in an IB exam hall or marked a Cambridge Paper 4, so help tends to be general rather than specific.",
        "Self-study with past papers works for a disciplined student in IGCSE Maths or the sciences. It fails more often in written subjects and in coursework, where a reader who knows the mark scheme can say exactly where marks were lost.",
        "Online one-to-one lessons offer specialist teaching and personal feedback without travel. They depend on a working connection, which we plan for with agreed backup arrangements.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Nokha",
        columns: ["Route", "What it does well", "Where it falls short"],
        rows: [
          ["Online one-to-one", "Exact syllabus, personal feedback", "Needs a steady internet connection"],
          ["Coaching in Sasaram or Bikramganj", "Peer environment, exam discipline", "Built for other boards; travel time"],
          ["Local private home tutor", "Convenient and familiar", "Little IB or IGCSE experience"],
          ["Self-study", "Free and flexible", "No marking of essays, IAs or open answers"],
        ],
      },
    },
    {
      heading: "How do rice season, Chhath and load-shedding shape the study year in Nokha?",
      paragraphs: [
        "Nokha lives with the agricultural calendar. The kharif paddy comes in during October and November, and the mills run hard through the winter. Many households have someone working long shifts, and children are sometimes asked to help at home. Lessons booked for those weeks should be short and fixed in advance.",
        "Chhath Puja in October or November is the most important festival in Bihar, and families travel, fast and prepare for several days. It falls close to the November IB session and the October-November Cambridge session, so revision must be finished before the festival starts rather than during it.",
        "Summers on the Sasaram plain are hot, with the loo winds of May and June, and the monsoon from late June is heavy. Power cuts and weak mobile signals can interrupt a lesson, so we ask families to note which hours are most reliable and to keep a charged phone as a hotspot.",
        "February and March bring the Bihar Board and CBSE exams, when households go quiet. Students who attend an international school elsewhere follow its calendar, so we plan lessons around those dates instead.",
      ],
      table: {
        caption: "A study calendar for an IB or IGCSE student in Nokha",
        columns: ["Months", "What is happening", "How to plan lessons"],
        rows: [
          ["Jan-Feb", "Cold mornings, board exam season begins", "Steady lessons, lighter during board weeks"],
          ["Mar-May", "Rising heat, IB May and IGCSE summer sessions", "Early evening timed papers; keep fans and power backup ready"],
          ["Jun-Sep", "Monsoon and school restart", "Budget for outages; keep IA work moving steadily"],
          ["Oct-Nov", "Paddy harvest, Chhath, Diwali, November sessions", "Finish revision before the festivals begin"],
          ["Dec", "Cool, long school break", "Longer sessions and consolidation"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Nokha go after school?",
      paragraphs: [
        "Inside India, students from Rohtas often look at Patna, Varanasi, Delhi and Kolkata. Institutions such as NIT Patna, IIT Patna, Patna University and Banaras Hindu University are within reach, and the Delhi University and private university system draws many. Each sets its own admission rules, which change from year to year.",
        "For IB and IGCSE graduates, the Association of Indian Universities issues equivalence certificates that allow qualifications to be treated alongside Indian Class 12. IB Diploma holders can apply to central universities through CUET-UG, subject to the current notification and subject combinations.",
        "Engineering and medicine need planning. JEE Main and NEET have specific subject requirements, and a student who drops Physics, Chemistry or Biology from an IB package may rule out a route. Check eligibility before choosing subjects, not after.",
        "Abroad, IB and IGCSE results are widely recognised in the UK, Canada, Australia, Singapore and Europe, and US colleges read them alongside test scores and essays. Tutors help with the subject work only; admissions essays remain the student's own.",
      ],
    },
    {
      heading: "Which parts of IB Maths and the sciences cause the most trouble?",
      paragraphs: [
        "In IB Maths Analysis and Approaches the difficulty is rarely the formula; it is the written chain of reasoning. A student who can differentiate in seconds may still lose marks because the argument is not set out. The Applications and Interpretation course asks different questions: is the model sensible, and what does the output mean?",
        "Both Maths courses require an Exploration, a personal investigation that contributes to the final grade. Tutors help a student choose a manageable topic, check the mathematics and point out missing criteria, but the investigation itself must be the student's work.",
        "In Physics, marks leak through unit slips, careless graphs and thin explanations. In Chemistry, long calculations demand organised working. In Biology, command terms such as describe, explain and evaluate decide how much to write, and a short practice on each pays off.",
        "Students from Bihar often have a remarkable memory and a strong appetite for practice. What they need is to redirect that effort toward application, and online sessions with immediate marking suit it well.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: how to choose IGCSE tiers",
      paragraphs: [
        "Cambridge splits many subjects into Core and Extended. Core allows grades up to C, while Extended runs to A*. Edexcel offers Foundation, with a top grade of 5, and Higher, which goes up to 9. A student aiming at IB HL Maths or a science-based pathway should sit the upper tier.",
        "The school or examination centre normally fixes the tier. A private candidate or a family comparing schools should take a diagnostic paper first. If the result sits near the boundary, speak to the centre before registration closes.",
        "Subjects follow the student's direction. A future engineer builds on Maths, Physics, Chemistry and Computer Science; a student drawn to business can add Economics and Accounting. A language such as Hindi gives balance and an easier mark.",
        "Before the first lesson, confirm the exact board, the syllabus code and the exam series, so the tutor teaches the right paper.",
      ],
    },
  ],

  tutorsIntro:
    "Nokha students are matched on programme, subject, level and exam board. Every tutor teaches from India in IST and comes with a short note on why they suit your child's course.",

  process: [
    { title: "Share your child's details", description: "Tell us the board or programme, subject, level, current school and the late-afternoon or evening hours that work at home in Nokha." },
    { title: "Receive a tutor proposal", description: "We name a tutor and explain which syllabus they have taught that matches your child." },
    { title: "Attend a free trial", description: "A real online lesson, with no payment and no obligation." },
    { title: "Agree terms in writing", description: "Rate, frequency and first-month topics are set out in writing before you pay." },
    { title: "Continue with reviews", description: "Weekly lessons with short notes, and a replacement tutor if you ask for one." },
  ],

  whyPoints: [
    { title: "Syllabus-specific matching", description: "Tutors are selected for the exact subject, level and board your child will sit." },
    { title: "Honest about local schools", description: "We tell you plainly that Nokha has no school we can confirm for these boards." },
    { title: "A trial before any fee", description: "The first lesson is free so you can judge the teaching yourself." },
    { title: "Clear limits on help", description: "Tutors never write IAs, Extended Essays, TOK essays or coursework." },
    { title: "Visible progress", description: "Short written notes after each lesson keep parents informed." },
    { title: "Freedom to change", description: "If the fit is wrong, we find another tutor without argument." },
  ],

  faqs: [
    { question: "Is this page about Nokha in Bihar or Nokha in Rajasthan?", answer: "This page covers Nokha in Rohtas district, Bihar. Nokha in Bikaner district, Rajasthan, is a different town with its own page on this site. Lessons are online for both, so what matters is that we know your state, your board and your timetable before proposing a tutor." },
    { question: "Is there an IB or IGCSE school in Nokha, Bihar?", answer: "Not one we can confirm. Schools in Nokha follow the Bihar School Examination Board or CBSE. Students who want an international board generally enrol in a school in a bigger city. Please ask any school claiming to offer the IB for its authorisation and its current list of subjects." },
    { question: "Can I get IB home tuition in Nokha?", answer: "You can have online home tuition: a live one-to-one lesson at your own table, taught by a specialist elsewhere in India. The tutor does not come to Nokha. Visits to the home are offered only in Gurugram and parts of Delhi NCR, and we make that clear before you book." },
    { question: "Do you offer IGCSE tutors for Cambridge and Edexcel students in Rohtas?", answer: "Yes, for both boards, taught online. We match on the syllabus code and tier, such as Cambridge 0625 Physics or Edexcel 4MA1 Mathematics A. Tell us the board, the subject and the exam series, and we propose a tutor who has taught it." },
    { question: "Will a tutor visit our home in Nokha?", answer: "No. Home visits run only in Gurugram and parts of Delhi NCR. In Nokha, lessons are live and private over video. Your child needs a laptop or tablet, a stable connection and a quiet table, and the tutor reads the working on a shared whiteboard." },
    { question: "How much does IB or IGCSE tuition cost in Nokha?", answer: "It depends on the course level, subject, tutor experience and number of weekly lessons, so we do not post a figure. After the free trial you receive a written rate, which you can compare with your current coaching spend and any travel to Sasaram or Patna." },
    { question: "What internet speed is needed for online lessons from Nokha?", answer: "A steady connection of a few Mbps is usually enough for video and a shared whiteboard. Mobile data works if the signal is stable. If your home has load-shedding, tell us the hours when power is dependable and we will schedule around them, with a phone hotspot as backup." },
    { question: "Is the first lesson really free?", answer: "Yes. Your child attends one real lesson with the proposed tutor, online, at no charge and with no obligation. Afterwards you decide whether to continue, and we put the rate in writing before any booking is confirmed." },
    { question: "Can a tutor help with my child's Internal Assessment or Extended Essay?", answer: "A tutor can coach the process: choosing a workable question, structuring the method, reading a draft and pointing to missing criteria. A tutor does not write or edit the work for the student, because the IB requires it to be the student's own." },
    { question: "How do we choose between IGCSE and CBSE for Class 9 and 10?", answer: "Choose by the next step. If the student plans to study in India through entrance exams like JEE or NEET, CBSE or the state board is often simpler. If the plan is IB Diploma or study abroad, IGCSE suits better. We can talk through the trade-offs during the trial." },
    { question: "Which IB Maths course should my child take?", answer: "Analysis and Approaches suits students heading towards engineering, physics or pure mathematics. Applications and Interpretation suits students going into business, social sciences, psychology or design. Your child's school and target university decide, and we teach whichever is chosen at the right level." },
    { question: "How do exam months affect lessons in Nokha?", answer: "We plan around them. February and March carry the Bihar Board and CBSE exams, May and November hold the IB sessions, and October to November includes Chhath and the paddy harvest. We agree dates early, so the busiest festival weeks are used for rest rather than new topics." },
    { question: "My child studies in Hindi medium. Can IB or IGCSE still work?", answer: "Yes, with preparation. Maths and the sciences transfer well once the English command words are learned. Essay subjects take longer. A tutor can start with vocabulary and structure, using short written practice before moving on to full papers, and progress becomes visible within a few weeks." },
    { question: "Do tutors teach Hindi alongside the other subjects?", answer: "Yes. IB Hindi B and IGCSE Hindi as a Second Language are available, and many students find a Hindi lesson a gentle way to build confidence in exam technique. Tell us the exact course code and the school's reading list so we can match properly." },
    { question: "Can a student in a village near Nokha join online lessons?", answer: "Yes, provided the signal at home is steady enough for video. We recommend a test call before the first lesson. Students from block villages have joined by mobile data. If the connection is unreliable, we can agree shorter sessions and send written notes after each one." },
    { question: "How do we get started?", answer: "Send a message on WhatsApp to +91 7439 368 115 or email support@ibgram.com with your child's class, board, subject and school. We reply with a tutor proposal and a time for the free trial lesson. You decide afterwards whether to continue." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Start from the main site to see how IB Gram works." },
    { label: "Online tuition across India", href: "/india/", description: "See the other Indian cities and towns we teach online." },
    { label: "IB and IGCSE tutors in Sasaram", href: "/sasaram/", description: "The district headquarters near Nokha, with its own local notes." },
    { label: "IB and IGCSE tutors in Patna", href: "/patna/", description: "Bihar's capital and the nearest large school market." },
    { label: "IB and IGCSE tutors in Gaya", href: "/gaya/", description: "Another south Bihar city covered online." },
    { label: "IB and IGCSE tutors in Nokha, Rajasthan", href: "/nokha/", description: "The other Nokha, in Bikaner district." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse our IB tutor profiles and subjects." },
    { label: "IGCSE tuition", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the Diploma works, with core and exam details." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or request a free trial lesson." },
  ],

  closingHeading: "Ready to start IB or IGCSE lessons from Nokha?",
  closingBody:
    "Send us your child's class, board and subject, and we will name a tutor who has taught the same course. Your child sits one free lesson online from home, you read the rate in writing, and you choose whether to go on. The tutor stays in India and the classroom is a laptop screen, because home visits are limited to Gurugram and parts of Delhi NCR. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
