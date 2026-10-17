import type { CitySeoPage } from "../types";

/**
 * /sultanganj/ - IB and IGCSE tutoring page for Sultanganj, Bihar (Bhagalpur district, on the Ganga).
 * No IB or Cambridge/Edexcel school could be confirmed in Sultanganj or Bhagalpur (Wikipedia names none;
 * neighbouring Bihar pages found none either), so stripSchools is empty and the clusters are honestly
 * labelled nearby cities, reusing names already used by neighbouring pages. Online only: in-person home
 * tuition runs only in Gurugram and parts of Delhi NCR.
 */
export const sultanganj: CitySeoPage = {
  slug: "sultanganj",
  countryName: "Sultanganj",
  countryNameLong: "Sultanganj, Bihar",
  demonym: "Sultanganj",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote:
    "Lesson slots are fitted around school and coaching hours, the Sawan pilgrim month, Durga Puja, Diwali and Chhath, and the monsoon weeks when the Ganga runs high",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.2461, longitude: 86.7381 },
  wikipedia: "https://en.wikipedia.org/wiki/Sultanganj",
  alternateNames: ["Sultangunj", "Ajgaibinath Dham", "Sultanganj Bhagalpur"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sultanganj | Private Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Sultanganj students: live one-to-one tuition online from home, PYP to DP, Cambridge and Edexcel, planned around Sawan, free trial.",
  h1: "IB and IGCSE Tutors and Private Tuition at Home in Sultanganj",
  heroEyebrow: "ONE-TO-ONE IB AND IGCSE TUITION FOR SULTANGANJ AND BHAGALPUR DISTRICT",
  heroSubtitle:
    "Home tuition for IB and IGCSE in Sultanganj works as live one-to-one lessons taken online from your own room: tutors do not travel to Sultanganj, because home visits are limited to Gurugram and parts of Delhi NCR. The town's schools follow the Bihar Board and CBSE, and the closest IB and Cambridge classrooms lie in Kolkata, Delhi NCR and the Mussoorie hills, so a specialist on screen covers what the town cannot.",
  primaryKeyword: "IB and IGCSE tutors in Sultanganj",
  imageAltText: "A Sultanganj student and a tutor reviewing an IB Economics diagram together over video",
  secondaryKeywords: [
    "IB tutor Sultanganj",
    "IGCSE tutor Sultanganj",
    "IB home tuition Sultanganj",
    "IGCSE home tuition Sultanganj",
    "IB private tuition Sultanganj",
    "IB Maths tutor Sultanganj",
    "IGCSE Maths tutor Sultanganj",
    "IB Physics tutor Sultanganj",
    "IB Chemistry tutor Sultanganj",
    "IB Biology tutor Sultanganj",
    "IB DP tutor Sultanganj",
    "IB MYP tutor Sultanganj",
    "IB PYP tutor Sultanganj",
    "IGCSE online tuition Sultanganj",
    "online IB tutor Sultanganj Bihar",
    "IB tutor Bhagalpur district",
    "IGCSE tutor Ajgaibinath Dham",
    "IB tutor Sultangunj",
    "IGCSE tuition Sultanganj Bhagalpur",
  ],

  heroTrustPoints: [
    "Tutors picked for your child's exact IB subject and level, or IGCSE board, paper code and tier",
    "Every Sultanganj lesson is online; visits to the house happen only in Gurugram and parts of Delhi NCR",
    "A free trial lesson on a genuine topic before any decision is asked of you",
    "No affiliation with any school, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "The IB from primary to Diploma" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "IST", label: "Same clock as your school" },
    { value: "Free trial", label: "Nothing to pay at the start" },
  ],

  intro: {
    heading: "Online IB and IGCSE tutoring in a Ganga town where the syllabus is taught elsewhere",
    paragraphs: [
      "Sultanganj lies on the southern bank of the Ganga, roughly 25 km west of Bhagalpur, and most of India knows it for the Ajgaibinath temple and the Shravani Mela, when pilgrims fill the town before walking to Deoghar with river water. The 2011 census counted 52,892 residents. Anyone searching for IB and IGCSE tutors in Sultanganj is asking for something the town itself does not teach.",
      "Those who ask tend to be parents of a child at an IB or Cambridge school in another city, families preparing a few IGCSE subjects privately, or households planning a move before Class 9 or Class 11. Teachers, doctors, railway and bank staff, traders and pilgrim-economy business owners all appear among them. What they want is a tutor who knows the syllabus, not a general home tutor learning it alongside the child.",
      "Tuition in this setting means a live lesson on a laptop or tablet, with the tutor anywhere in India and both of you on Indian Standard Time. The pair works on a shared whiteboard, so a solved problem or a marked paragraph is visible to both at once, and a short written note follows each session so parents can see what was covered.",
      "IB Gram stands apart from every school, board and exam body named here. Tutors teach, explain, mark and give feedback. They do not write, edit or rework an Internal Assessment, Extended Essay, TOK essay or piece of coursework, because those belong to the student.",
    ],
    bullets: [
      "IB PYP, MYP and Diploma subjects, and Cambridge and Pearson Edexcel IGCSE",
      "Live one-to-one lessons online on Indian Standard Time",
      "A free trial lesson, then a written plan and rates in writing before booking",
      "A written note after every session",
      "Tutors do not visit homes in Sultanganj; that exists only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "No school in Sultanganj teaches an IB programme, so a family's situation says more than the programme name: a child enrolled in a city campus, one following a course from home, or one who will move schools soon. The notes below reflect those situations.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Children learn through units of inquiry that cut across subjects, and the last year builds toward a self-directed Exhibition. There is no external exam, so tutoring means building reading, writing and number habits that make the inquiry work easier.",
      countryNote:
        "A typical PYP request here comes from a family back in Bhagalpur district after years in Kolkata or Delhi, wanting a younger child's reading and inquiry routine kept going.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers mark each subject against four criteria, and the Personal Project asks a student to manage a long task alone. Students who can describe a thing well often stall when the criterion asks them to explain or evaluate it.",
      countryNote:
        "For Sultanganj MYP students the work is usually turning good description into analysis in the sciences and Language and Literature, and scoping a Personal Project that can be finished.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects run alongside Theory of Knowledge, an Extended Essay and CAS. Internal Assessments contribute a fifth to nearly a third of each subject, and the written papers are sat in May.",
      countryNote:
        "Diploma students connected to Sultanganj are enrolled in another city or country; Mathematics, the sciences and Economics are the subjects that draw the most requests.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A student combines at least two Diploma courses with a career-related qualification and a reflective project. Few Indian schools run it, but the Diploma courses inside it are taught like any other.",
      countryNote:
        "The CP is almost unknown in Bhagalpur district; if a family meets it elsewhere, we teach the Diploma courses within it and leave the framework to the school.",
    },
  ],

  subjectsIntro:
    "An IB subject at Higher Level asks far more than the same subject at Standard Level, so a Sultanganj enquiry starts with subject and level, then the exam sitting, then the student's current grade. Those three decide who gets shortlisted.",
  subjects: [
    { name: "IB Mathematics: Analysis and Approaches", levels: "HL / SL", description: "Functions, calculus, vectors and proof, with Higher Level adding complex numbers and a paper of long, unfamiliar problems; the route for engineering and pure science." },
    { name: "IB Mathematics: Applications and Interpretation", levels: "HL / SL", description: "Modelling, statistics and technology use, better matched to commerce, biology and social science, and tied to an Exploration that needs an early start." },
    { name: "IB Physics", levels: "HL / SL", description: "Forces, fields, waves and energy, marked on clean reasoning and units, plus a scientific investigation that needs a method the student can defend." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure and bonding, energetics and equilibrium, then organic mechanisms; stoichiometry slips are the commonest silent mark-loss." },
    { name: "IB Biology", levels: "HL / SL", description: "From molecules to ecosystems, where precise answers to command terms matter more than volume, and the investigation needs sound statistics." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams that are labelled correctly and tied to a current case, with Higher Level adding quantitative and policy-evaluation practice." },
    { name: "IB Business Management", levels: "HL / SL", description: "Theory applied to a case rather than recited, with a research project built on a real organisation such as a silk, grain or pilgrim-trade business." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis on the first paper and a sustained argument on the essay papers; Bihar's Vikramshila and Nalanda give many students a ready curiosity about institutions of the past." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Unseen commentary, a comparative essay and an individual oral, each needing separate rehearsal with real timing." },
    { name: "IB Hindi A: Literature", levels: "HL / SL", description: "Close reading of set works in Hindi, for students whose best written language it is, with essay structure and quotation practice." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms and pseudocode, object thinking, and an IA whose finished program and documentation match each other." },
    { name: "IB Environmental Systems and Societies", levels: "SL / HL", description: "Systems reasoning applied to real places; the Ganga and its dolphin sanctuary stretch make a natural context for a fieldwork-style investigation." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "An essay and an exhibition rather than a syllabus; discussing how objects carry meaning, such as a museum piece found locally and now displayed abroad, is good practice for the exhibition." },
  ],

  igcseSubjectsIntro:
    "IGCSE is an umbrella for two boards and two or three tiers, so preparation is planned from the board, paper code and tier. For a student in Sultanganj the exam series also matters, because the nearest open centre is likely to be in another city.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Fast, accurate arithmetic without a calculator on one paper and clear working on the other; at Extended tier, algebra and trigonometry decide the top grades." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Class 10", description: "Early calculus, functions and trigonometry that make IB Mathematics Higher Level feel less sudden." },
    { name: "Edexcel International GCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Familiar topics asked in Edexcel's own style; Higher tier rewards students who have practised that wording." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Formula handling, graph reading and the practical-skills paper, which a student with no school lab nearby must practise on purpose." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactions, the periodic table and organic chemistry, with an alternative-to-practical paper that rewards apparatus fluency." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, genetics and ecology, where clear, structured longer answers earn more than memorised lists." },
    { name: "IGCSE Economics 0455", levels: "Class 9-10", description: "Basic diagrams first, then evaluation questions that ask a student to weigh both sides and reach a judgement." },
    { name: "IGCSE Geography 0460", levels: "Class 9-10", description: "River, climate and population topics, with fieldwork-style data questions; the Ganga plain offers many real examples." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Class 9-10", description: "Reading, writing and speaking for students fluent at home who need a recognised certificate in it." },
    { name: "IGCSE Computer Science 0478", levels: "Class 9-10", description: "Tracing algorithms by hand and writing real programs, rather than treating the course as definitions." },
  ],

  regionsTitle: "Sultanganj areas and nearby towns our online tutors work with",
  regionsIntro:
    "Since lessons happen on screen, these places add context rather than travel time: where the pilgrim crowds fall, which road a student takes to Bhagalpur, and where evening power or broadband is less dependable.",
  regions: [
    { name: "Ajgaibinath Dham and the Ganga ghats", note: "The Nagara-style temple, renovated in the 19th century under Rani Kalavati, draws the Sawan crowds; households near it plan July and August evenings loosely." },
    { name: "Sultanganj station and main market", note: "Travellers, shopkeepers and railway or bank staff live around here; lessons work best once the evening trains and the market rush have passed." },
    { name: "The Deoghar road", note: "The state highway towards Deoghar is the start of the roughly 105 km pilgrim walk, so roadside households see heavy traffic during Sawan." },
    { name: "Ganga bank and ghat neighbourhoods", note: "Families close to the river, where Chhath and the high-water weeks of the monsoon change the evening routine." },
    { name: "Sabour road", note: "The stretch towards Bhagalpur, where Bihar Agricultural University at Sabour sits; students sometimes travel this way for tuition or school." },
    { name: "Bhagalpur city, 25 km east", note: "The nearest city, with Tilka Manjhi Bhagalpur University, IIIT Bhagalpur and its silk trade; some Sultanganj students attend school or classes there." },
    { name: "Vikramshila dolphin sanctuary stretch", note: "A 60 km protected stretch of the Ganga that includes the river at Sultanganj; useful context for Environmental Systems and Societies students." },
    { name: "Jamalpur and Munger side", note: "Towns to the west with railway and factory families; some send children to Sultanganj or Bhagalpur for school and seek online help for subjects not taught there." },
    { name: "Across the Ganga in Khagaria district", note: "Households on the northern bank, who reach Sultanganj by river and road and often rely on mobile data for online lessons." },
  ],

  schoolDisclaimer:
    "We could not confirm an IB or Cambridge or Edexcel IGCSE school in Sultanganj or in Bhagalpur, so none is named as local. The schools listed under other cities are options some Bihar families weigh, and IB Gram is not connected to any of them, to the IB, to Cambridge or to Pearson.",
  schoolClusters: [
    {
      city: "Sultanganj and Bhagalpur district",
      note: "Schools here follow the Bihar Board or CBSE. No IB or Cambridge or Edexcel campus was confirmed, so students study online, privately or away from home.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The usual long-distance choice for eastern Bihar, reached by an overnight train, and the place where many families with a child in an international school are based.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "A longer rail journey, but with a wide choice of international curricula and, for some families, relatives to stay with.",
      schools: ["Vasant Valley School, Delhi", "Step by Step School, Noida"],
    },
    {
      city: "Boarding in the hills: Mussoorie",
      note: "Some families consider a boarding school in the Mussoorie hills for the Diploma years, weighing distance and cost against a fully international campus.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],

  modesIntro:
    "Lessons in Sultanganj are live on video, one tutor with one student. The three formats differ in how the week is laid out, not in the medium. Tutors do not come to the house here; home visits run only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "One fixed evening a week",
      description:
        "The tutor and student meet at the same hour each week and work through a topic, then a few exam-style questions. It is the simplest pattern and the one most Sultanganj families pick first.",
      bullets: [
        "Suits IB, MYP and IGCSE subjects alike",
        "Questions and solutions shared live on the whiteboard",
        "The same tutor every week",
      ],
    },
    {
      title: "A teaching lesson and a paper lesson",
      description:
        "Two sessions a week: one to teach or repair a topic, one to mark a timed paper and go through it line by line. This works for Higher Level and Extended tier, where technique matters as much as content.",
      bullets: [
        "One session for new content, one for timed practice",
        "Marked papers discussed while the student watches",
        "A written note after each session",
      ],
    },
    {
      title: "A sprint before an exam window",
      description:
        "A compact run of sessions in the weeks before a Cambridge, Edexcel or IB sitting, aimed at gaps and timing. The schedule avoids Sawan, Durga Puja and Chhath weeks where it can.",
      bullets: [
        "Timed past papers with prompt feedback",
        "Weak topics targeted one by one",
        "Booking a fortnight or more ahead keeps good slots free",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE classroom near Sultanganj, and who is asking for one?",
      paragraphs: [
        "There is none we could confirm. Sultanganj's schools follow the Bihar Board and CBSE, and Bhagalpur, the nearest city, showed no confirmed IB or Cambridge or Edexcel campus either. The families who still ask are tied to a school somewhere else: a child at a campus in Kolkata or Delhi NCR, a student taking some IGCSE papers privately, or parents planning a change before Class 9 or Class 11.",
        "Their background is varied. The town's economy rests on agriculture, pilgrim services and small trade, and around it live railway employees, bank and government staff, teachers and doctors, along with families whose relatives work in Kolkata, Delhi or abroad. What they share is wanting a child's international curriculum to be taught by someone who has taught it, not by whoever is nearest.",
        "Bhagalpur's strengths explain part of the picture. The city has Tilka Manjhi Bhagalpur University, IIIT Bhagalpur and Bihar Agricultural University, and is known as the Silk City, but its schools run on state or CBSE lines. A Sultanganj family therefore faces a long journey for an international classroom and a short one for everything else.",
        "Online tuition reverses that arithmetic. The tutor travels nowhere and the student stays put, the syllabus, past papers and exam dates match those anywhere in India, and a child can stay in the family's home town for school while keeping an international qualification within reach. That is how IB and IGCSE tutors in Sultanganj can serve a student without anyone leaving town.",
      ],
      table: {
        caption: "Where Sultanganj families look for an IB or IGCSE classroom",
        columns: ["Place", "Distance and access", "What it offers"],
        rows: [
          ["Bhagalpur", "About 25 km east by road or rail", "Universities and coaching; no confirmed IB or IGCSE school"],
          ["Patna", "Several hours by road or train", "Bihar's capital; we could not confirm an IB or IGCSE campus, so verify directly"],
          ["Kolkata", "An overnight train", "An established group of IB and Cambridge schools"],
          ["Delhi NCR", "A long rail journey", "A wide choice of international curricula"],
          ["Mussoorie", "A long journey and a boarding commitment", "An international boarding option for the Diploma years"],
        ],
      },
      bullets: [
        "No IB or Cambridge or Edexcel school was confirmed in Sultanganj or Bhagalpur",
        "Most families are tied to a campus in another city",
        "Online lessons let a child stay at home while following the curriculum",
        "Syllabus, papers and exam dates are identical to any other city's",
      ],
    },
    {
      heading: "How do the Bihar Board, CBSE and ICSE compare with IB and IGCSE for a Sultanganj student?",
      paragraphs: [
        "The Bihar Board's matric and intermediate papers reward accurate recall of a fixed syllabus, often in Hindi medium, while IB and IGCSE reward explaining why an answer is right. A student who memorises a derivation perfectly can still lose marks when an IB question asks for justification or an IGCSE Extended paper changes the setting.",
        "Coursework also differs. The Bihar Board's internal assessment is light beside an IB Internal Assessment, which is an extended, criteria-marked piece of work, or IGCSE coursework in some subjects. Students moving across usually need teaching in how to plan, draft and revise a substantial piece, something the state system seldom practises.",
        "Language is the other change. A student who has learned science in Hindi will know the ideas but may not know the English terms, and every IB and IGCSE paper is written in English. Building that vocabulary alongside the concepts, topic by topic, takes a few terms and is best begun early.",
        "CBSE and ICSE sit closer to IGCSE than the Bihar Board does, particularly in Mathematics and the sciences, which makes the switch from those boards gentler. Whichever board a child starts from, the question is not which system is better but which suits the destination the family has in mind.",
      ],
      table: {
        caption: "Bihar Board, CBSE and ICSE set beside IB and IGCSE",
        columns: ["Feature", "Bihar Board", "CBSE and ICSE", "IB and IGCSE"],
        rows: [
          ["Main marking aim", "Recall of a fixed syllabus", "Recall with some application", "Reasoning and justification"],
          ["Coursework", "Light internal assessment", "Moderate internal marks", "IAs worth roughly 20 to 30 percent in most IB subjects; coursework in some IGCSE subjects"],
          ["Medium", "Hindi or English", "English, or Hindi in CBSE", "English only"],
          ["Typical next step", "Bihar and national entrance tests", "JEE, NEET, CUET", "AIU equivalence, then CUET, NEET, JEE or study abroad"],
        ],
      },
      bullets: [
        "IB and IGCSE mark reasoning; the Bihar Board leans on recall",
        "Internal Assessments are far larger than state-board internals",
        "English scientific vocabulary is the quiet hurdle for Hindi-medium students",
        "CBSE and ICSE students usually find the switch gentler",
      ],
    },
    {
      heading: "What decides the fee for IB or IGCSE tuition in Sultanganj?",
      paragraphs: [
        "You will not find a fixed list of prices here because the rate depends on the lesson rather than the address. The things that move it are the programme and level, how hard the subject is to staff, how long and how often sessions run, and how recently the tutor has taught that exact syllabus. You will see the rate in writing before you agree to anything.",
        "Higher Level Chemistry, Physics or Mathematics and IGCSE Additional Mathematics sit near the top because few tutors can teach them well, while IGCSE Hindi or a first-year MYP subject tends to sit lower. Being in Sultanganj does not change that, since no one is paid for travel and a tutor in Chennai costs the same to a family in Bhagalpur district as to one in Pune.",
        "Compare tutors by what happens inside an hour. Someone who has marked Extended-tier scripts or guided an Internal Assessment before will get a student further than a cheaper tutor working the syllabus out as they go. For a family without a nearby school to ask, that experience is worth more than a small saving.",
        "The trial lesson comes first, free. Afterwards the tutor sets out a plan, you see the rate in writing, and if the fit is wrong you can ask for a different tutor.",
      ],
      bullets: [
        "The rate follows level, subject, length, frequency and tutor experience",
        "No travel charge is ever built in because every Sultanganj lesson is online",
        "You see the rate in writing before booking",
        "A different tutor can be requested if the fit is wrong",
      ],
    },
    {
      heading: "A private home tutor, Bhagalpur coaching or an online specialist: which fits?",
      paragraphs: [
        "Bhagalpur has a long-established coaching and home-tuition scene, focused on Bihar Board subjects and on JEE and NEET entrance work. That serves those exams well, but a class for IGCSE Additional Mathematics or IB Chemistry at Higher Level would fill too few seats to run, so the option rarely exists at all.",
        "A private tutor at home is easy to find for Class 9 to 12 subjects. The catch is that none of them will have taught an IB or IGCSE class recently, so they work from a general textbook. They can help a child regain confidence on a weak topic, but cannot say what this year's Cambridge or IB examiners are rewarding.",
        "Studying alone works best for subjects with abundant past papers, such as IGCSE Mathematics. It works worst for Internal Assessments, the Extended Essay and the long answers IB and IGCSE favour, since nobody marks those at home and mistakes harden into habits.",
        "An online specialist fills both gaps: the right syllabus and real attention. The cost is a stable connection, so a mobile-data fallback is agreed in advance, and a lesson lost to a power cut is simply rescheduled.",
      ],
      table: {
        caption: "Options for IB and IGCSE support around Sultanganj",
        columns: ["Option", "Syllabus fit", "Attention", "What limits it here"],
        rows: [
          ["Bhagalpur coaching class", "Built for Bihar Board, JEE and NEET", "Group", "No IB or IGCSE batch; a daily trip of about 25 km"],
          ["Private home tutor", "Good for state and CBSE subjects", "One to one", "No recent IB or IGCSE teaching"],
          ["Self-study", "Varies", "None", "Coursework and long answers go unmarked"],
          ["Online specialist", "Matched to the exact course", "One to one", "Depends on a steady connection"],
        ],
      },
      bullets: [
        "Bhagalpur coaching targets Bihar Board and entrance exams",
        "Home tutors rarely have recent IB or IGCSE experience",
        "Self-study leaves coursework unmarked",
        "Online specialists combine syllabus knowledge with one-to-one attention",
      ],
    },
    {
      heading: "Sawan, Chhath, Durga Puja and the Ganga in flood: a study calendar for Sultanganj",
      paragraphs: [
        "The calendar here is set by the river and by pilgrimage. In Sawan, between July and August, lakhs of kanwariyas collect Ganga water at Ajgaibinath Dham and carry it to Deoghar, a walk of about 105 km, and the town's roads and routines bend around them. Lessons in those weeks do best when fixed early, kept short, and flexible about the hour.",
        "The monsoon brings the Ganga up; Bhagalpur district averages around 1,162 mm of rain, mostly from June to September. Power and mobile data can be unreliable in the wettest weeks. A spare slot each week and a hotspot fallback keep the term from slipping when an evening is lost.",
        "Durga Puja, Diwali and Chhath arrive in quick succession in autumn, and Chhath brings families to the river ghats. Saraswati Puja in January or February is a school festival in Bihar, and the Bihar Board's examinations follow soon after, so a sibling's revision can fill the house. A quiet hour for an online lesson is worth negotiating.",
        "Exams sit above all this. Cambridge IGCSE runs in May-June and October-November, Edexcel adds January for some subjects, and IB Diploma papers are sat in May. Summer heat in Bhagalpur can touch 46 degrees, so the last push before May works best in the morning or late evening.",
      ],
      table: {
        caption: "A year of study in Sultanganj, month by month",
        columns: ["Time of year", "What is happening", "Planning note"],
        rows: [
          ["July to August", "Sawan and the Shravani Mela; monsoon begins", "Fix lesson times early, keep sessions short, allow for road crowds"],
          ["August to September", "The Ganga runs high", "Keep a backup slot and a mobile-data fallback"],
          ["October", "Durga Puja and Dussehra; Cambridge October-November series", "Short gaps between lessons before a paper"],
          ["November", "Diwali and Chhath", "Use the break for a catch-up plan or retake preparation"],
          ["January to February", "Saraswati Puja; Bihar Board exams", "A quiet room and later slots help"],
          ["April to June", "Summer heat; Cambridge, Edexcel and IB papers", "Early-morning or late-evening timed practice"],
        ],
      },
      bullets: [
        "Sawan reshapes the town for roughly a month from July",
        "Monsoon weeks bring unreliable power and data",
        "Chhath and Diwali cluster in November",
        "IB papers sit in May, with results in early July",
      ],
    },
    {
      heading: "After school: which university routes open for Sultanganj's IB and IGCSE students?",
      paragraphs: [
        "Most students look at two directions: an Indian degree or one abroad. In Bihar, Patna has IIT Patna, NIT Patna, AIIMS Patna, Patna University and Chanakya National Law University, while Bhagalpur adds Tilka Manjhi Bhagalpur University, IIIT Bhagalpur and Bihar Agricultural University. Kolkata and Delhi widen the field further for those willing to relocate.",
        "Indian routes usually begin with an Association of Indian Universities equivalence certificate for the IB Diploma, or for IGCSE plus A-level work. After that, CUET-UG opens central universities, NEET needs Physics, Chemistry, Biology and English, and JEE needs Mathematics, Physics and Chemistry in the right combination. Each exam's rules for other boards change, so read the current information bulletin before choosing subjects.",
        "For study abroad, the predicted grade a school sends in the autumn counts for more than the final result. British universities set IB points or A-level grades with named subjects, American ones read a whole file, and German or Dutch programmes check subject prerequisites. A student in a small town may not have a counsellor, so collecting these requirements early matters.",
        "IB Gram tutors teach subjects, lift predicted grades and sharpen exam technique. They do not run applications or visas. If a target course wants Higher Level Mathematics or Chemistry, you will be told clearly and the plan will be built around it.",
      ],
      bullets: [
        "Patna offers IIT, NIT, AIIMS, a university and a national law university",
        "Bhagalpur offers TMBU, IIIT and Bihar Agricultural University",
        "An AIU certificate is the usual first step for Indian admissions",
        "Predicted grades drive most overseas offers",
      ],
    },
    {
      heading: "IB Mathematics and the three sciences when no IB teacher is nearby",
      paragraphs: [
        "Analysis and Approaches suits engineering, physics and economics routes, and Higher Level pushes into complex numbers, proof and a final paper of extended problems that repetitive practice does not prepare a student for. Applications and Interpretation trades some of that depth for statistics, modelling and careful use of technology. Either way the Exploration takes a fifth of the grade and needs a topic chosen early.",
        "Physics rewards algebra that holds up and clean handling of units; Chemistry rewards methodical calculation, then fluency in organic mechanisms. Both ask for a scientific investigation, and in a town with no IB school the investigation must be planned around equipment a student can actually use at home or borrow from a local school.",
        "Biology students usually know their content and lose marks on command terms: describe, explain and evaluate each ask for something different. The statistics in the investigation need to be able to support the conclusion, and a tutor can check that logic without writing a word of the report.",
        "A tutor who has taught the current syllabus, with its latest assessment format, is the practical route. Live sessions let worked solutions appear as the student follows, and marked papers can be discussed straight away.",
      ],
      bullets: [
        "AA suits proof-based, calculus-heavy routes; AI suits modelling",
        "Investigations must be planned around equipment actually available",
        "Command terms cost Biology students more marks than missing facts",
        "Current-syllabus experience matters more than proximity",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects to combine",
      paragraphs: [
        "Core and Extended are separate routes, not difficulty settings. Cambridge awards grades C to G at Core and A* to E at Extended, so a student aiming higher than a C must enter Extended. For anyone who might later take IB Mathematics or a Higher Level science, Extended is the safer choice.",
        "Additional Mathematics 0606 is worth adding if the student enjoys Mathematics, because it brings calculus, functions and trigonometry forward. Private candidates can usually add it without affecting the rest of their programme, and it shows a future Diploma teacher what a student can handle.",
        "Edexcel's International GCSE in Mathematics A, code 4MA1, has Foundation and Higher tiers and a question style that differs from Cambridge's even where the topics are the same. If an exam centre offers only Edexcel, choose a tutor who has worked from its past papers.",
        "A private candidate can also pick a blend that suits them: two sciences with Mathematics and Hindi as a Second Language, or Economics with Geography for a humanities lean. Each can be scheduled in the series that fits the year's festivals and floods.",
      ],
      bullets: [
        "Core caps the grade at C; Extended opens A* to E",
        "0580 Extended with 0606 prepares well for IB Mathematics Higher Level",
        "Edexcel's wording differs from Cambridge's",
        "Private candidates can shape both subjects and exam series",
      ],
    },
  ],

  tutorsIntro:
    "The IB and IGCSE tutors in Sultanganj’s online pool are the people who teach the lessons: specialists who work with students in the town and across Bhagalpur district. Each match is judged on the subject, level and sitting the child is working toward.",

  process: [
    { title: "Share the details", description: "Programme or board, subject and level, the sitting you are aiming for, and which evenings fit your household." },
    { title: "We match on the syllabus", description: "Recent experience with your exact course comes first, because no local specialist exists to compare against." },
    { title: "Sit a free trial lesson", description: "A genuine lesson on a genuine topic, and you owe nothing afterwards." },
    { title: "Receive the plan and the rate", description: "Topics, pace and the rate arrive in writing before you book." },
    { title: "Continue and review", description: "Weekly lessons, a note after each, and a tutor change if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Right syllabus, exact level", description: "Matching starts from the IB subject and level, or the IGCSE board, code and tier, not a label like IB tutor." },
    { title: "Built for towns without the school", description: "Sultanganj has no IB or IGCSE classroom, and online matching replaces an empty list with a national one." },
    { title: "Try before you decide", description: "The first lesson is free and uses real syllabus material." },
    { title: "Integrity is fixed", description: "Tutors can question an argument and explain a criterion, but the words of any assessed work are the student's." },
    { title: "Visible progress", description: "A written note after each lesson and periodic reviews keep parents informed." },
    { title: "Free of tie-ins", description: "Independent of every school and board, with written rates and tutor changes on request." },
  ],

  faqs: [
    { question: "Are there IB schools in Sultanganj or Bhagalpur?", answer: "None that we could confirm. Sultanganj and Bhagalpur schools follow the Bihar Board or CBSE, and we found no IB Diploma, MYP or PYP campus there. Families who want the IB usually continue a programme begun in another city, or plan a move. For IB and IGCSE tutors in Sultanganj, IB Gram then arranges a match for the exact subject and level." },
    { question: "Is there a Cambridge or Edexcel IGCSE school nearby?", answer: "We could not confirm one in Sultanganj or Bhagalpur. Some families register as private candidates and sit papers through an approved centre in a larger city; others switch schools before Class 9. Tutoring is matched to the board, code and tier, because Cambridge and Edexcel papers are worded differently." },
    { question: "Can a tutor come to our house in Sultanganj?", answer: "No. Tutor visits are arranged only in Gurugram and parts of Delhi NCR. In Sultanganj the lesson is live on video, with a shared whiteboard in place of a desk. That makes it private home tuition in the sense that the child studies from home, but the tutor is on screen." },
    { question: "What will IB or IGCSE tuition cost us?", answer: "The rate depends on level, subject, session length, frequency and the tutor's experience with that exact syllabus, so no price list is published. You are sent the rate in writing before booking. Higher Level sciences and Additional Mathematics usually cost more. Your location in Bhagalpur district does not change the figure." },
    { question: "Will online lessons work during Sawan, when the town is crowded?", answer: "Yes, with some planning. Pilgrim traffic affects roads more than screens, but mobile networks can slow down near the temple. We fix times early, keep lessons short if needed and arrange a backup slot. If a session is lost to congestion or a power cut, it is rescheduled." },
    { question: "My child is in a Bhagalpur CBSE school. Is an IB or IGCSE tutor still useful?", answer: "Yes, if the family is planning a move to an IB or IGCSE curriculum, or a stand-alone IGCSE subject. A tutor can introduce command words, extended writing and the structure of international papers ahead of time, which eases the change considerably and reduces first-term surprises." },
    { question: "How does a Bihar Board student move to IGCSE or the IB?", answer: "Usually at Class 9 for IGCSE or Class 11 for the Diploma, through a school change. The main adjustments are English scientific vocabulary, criteria-based coursework and justified answers. Starting support two terms before the move lets a tutor build these gradually rather than in a rush." },
    { question: "Can we take IGCSE exams privately from Sultanganj?", answer: "Often yes, through an approved exam centre, though the nearest one is normally in another city and entry closes early. Check the series, fees and practical arrangements with the centre first. We then plan lessons backwards from the paper dates and the topics still uncovered." },
    { question: "Can the IB Diploma be taken without an IB school?", answer: "Not on your own. The Diploma is registered through an authorised IB World School, so the school route must come first. Once a child is enrolled, including by a distance arrangement, a tutor can teach any Higher or Standard Level subject alongside it." },
    { question: "Will the tutor help with my child's Internal Assessment or Extended Essay?", answer: "Yes, within limits. A tutor can help shape a question, explain what the criteria reward, plan data collection and react to a draft. The writing and final submission stay entirely with the student. Tutors never write, edit or rework assessed work." },
    { question: "Which subjects are requested most from Sultanganj?", answer: "Mathematics in both IB forms comes first, then Physics, Chemistry, Biology and Economics. For IGCSE the most common requests are Mathematics, Additional Mathematics and the sciences, followed by Hindi as a Second Language and Geography. History and Business Management appear less often but steadily." },
    { question: "Do you teach younger students in MYP and PYP?", answer: "Yes. MYP tutoring covers criterion-based analysis in the sciences and Language and Literature, as well as planning a Personal Project. PYP children get short lessons on reading, writing and number sense, with research skills added before the Exhibition. The format remains live, online and one to one." },
    { question: "Is Cambridge or Edexcel the better IGCSE board for us?", answer: "Neither is better in general; availability usually decides. Cambridge is the more common board in India, while Edexcel may be the one your nearest exam centre offers. The mathematics and science content are similar, so the tutor's familiarity with the specific papers matters more than the brand." },
    { question: "What if power or internet fails during a lesson?", answer: "The session is rescheduled, not lost. Families in villages or across the Ganga often rely on mobile data, so we agree a fallback before the first lesson. The tutor can also share the day's working so that a cut-off class still leaves a written record." },
    { question: "How do IB and IGCSE results link to NEET, JEE or CUET?", answer: "Each exam sets its own rules for candidates from other boards, often asking for an AIU equivalence certificate and certain subjects at a certain level. The rules change, so read the current bulletin early. Tutors help with subject content, not with counselling or application forms." },
    { question: "How do we begin, and is the first lesson really free?", answer: "Send us the board or programme, subject and level, and your preferred times. A tutor whose background fits will offer trial slots. The trial is a real lesson, free of charge. A written plan and a rate follow, and only then do you decide whether to continue." },
    { question: "What if we are not happy with the tutor?", answer: "Tell us and a new match is arranged. Progress is reviewed every few weeks, and a pairing that has stopped helping is replaced. Nothing ties you to one tutor, and you can stop at any point." },
    { question: "Is IB Gram connected to any school or exam board?", answer: "No. IB Gram is an independent tutoring service with no link to any school, the International Baccalaureate, Cambridge or Pearson. Schools named on this page appear only to describe where families look for campuses, and nothing here is an endorsement." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across Indian cities", href: "/india/", description: "See how online matching works for families in other towns and cities." },
    { label: "Home visits in Gurugram", href: "/gurgaon/", description: "The one place tutors do visit, in contrast with Sultanganj." },
    { label: "IB tutors by subject", href: "/ib-tutors/", description: "Browse IB tutoring by programme and subject." },
    { label: "IGCSE explained", href: "/igcse/", description: "Boards, tiers and exam series set out clearly." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the Core, and how IAs are weighted." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and external assessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the PYP Exhibition." },
    { label: "IB Mathematics AA or AI", href: "/courses/ib/mathematics/", description: "How to choose between the two courses." },
    { label: "Meet our tutors", href: "/tutors/", description: "Filter tutor profiles by subject, programme and experience." },
    { label: "Write to IB Gram", href: "/contact-us/", description: "Send your child's details and receive a shortlist with trial slots." },
    { label: "Tutoring for families in Bhagalpur", href: "/bhagalpur/", description: "The nearest city, 25 km east of Sultanganj." },
    { label: "Tutoring for families in Munger", href: "/munger/", description: "A neighbouring Bihar town with a similar absence of IB schools." },
    { label: "Tutoring for families in Patna", href: "/patna/", description: "Bihar's capital and the region's main university centre." },
  ],

  closingHeading: "Start with a free trial lesson for your Sultanganj student",
  closingBody:
    "Looking for IB and IGCSE tutors in Sultanganj? Tell us the board or programme, the subject and level, the exam sitting you have in mind, and which hours suit your household. A suitable tutor will reply with trial times, and the rate will reach you in writing before any booking. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
