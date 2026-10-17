import type { CitySeoPage } from "../types";

/**
 * Arwal (Arwal district, Bihar, on the Sone). No IB or Cambridge/Edexcel school confirmed; a Bihar district
 * search listed Arwal only as a generic directory filter. stripSchools empty; clusters use Patna (none
 * confirmed), Kolkata, Delhi NCR and Mussoorie names recorded on neighbouring pages. Online-only delivery.
 */
export const arwal: CitySeoPage = {
  slug: "arwal",
  countryName: "Arwal",
  countryNameLong: "Arwal, Bihar",
  demonym: "Arwal",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late afternoons and Saturday evenings, eased around Chhath, transplanting season and Sone flood days",
  lastUpdated: "2026-09-21",
  state: "Bihar",
  stateCode: "IN-BR",
  geo: { latitude: 25.2500, longitude: 84.6800 },
  alternateNames: ["Arwal Bihar", "Arwal district", "Arwal town"],
  wikipedia: "https://en.wikipedia.org/wiki/Arwal",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Arwal | Live Online Home Tuition",
  metaDescription:
    "Live one-to-one IB and IGCSE tutors for Arwal, Bihar: DP, MYP, PYP, Cambridge and Edexcel taught online at home, with a free trial lesson before any fee.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Arwal",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR ARWAL, TAUGHT LIVE ONLINE",
  heroSubtitle:
    "Arwal is one of Bihar's youngest districts, a Sone-side town roughly 75 kilometres from Patna, and directories that list it under IB or IGCSE schools do so only as a generic filter, with no school we could verify. Private tuition at home for an international course here therefore means a live one-to-one video lesson, since IB Gram tutors teach from other Indian cities and do not visit Arwal.",
  primaryKeyword: "IB and IGCSE tutors in Arwal",
  imageAltText: "Arwal student following a live IGCSE Mathematics lesson on a laptop at a desk in a family home",
  secondaryKeywords: [
    "IB tutor Arwal",
    "IGCSE tutor Arwal",
    "IB home tuition Arwal",
    "IGCSE home tuition Arwal",
    "IB private tuition Arwal",
    "IB Maths tutor Arwal",
    "IGCSE Maths tutor Arwal",
    "IB Physics tutor Arwal",
    "IB Chemistry tutor Arwal",
    "IB Biology tutor Arwal",
    "IB DP tutor Arwal",
    "IB MYP tutor Arwal",
    "IB PYP tutor Arwal",
    "IGCSE online tuition Arwal",
    "online IB tutor Arwal district",
    "IB tutor Kurtha",
    "IGCSE tutor Kaler",
    "IB tutor Karpi Bihar",
    "Cambridge IGCSE tutor Arwal",
    "Edexcel IGCSE tutor Arwal",
    "online IB tutor near Patna",
    "IB Computer Science tutor Arwal",
  ],

  heroTrustPoints: [
    "Tutors assigned by IB course or IGCSE specification code, which is how real subject expertise shows up",
    "All Arwal teaching is live online; home visits exist only in Gurugram and parts of Delhi NCR",
    "No fee for the first lesson, and the rate arrives in writing",
    "Independent of schools, the IB organisation, Cambridge and Pearson",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "IB stages supported" },
    { value: "Cambridge, Edexcel", label: "IGCSE boards" },
    { value: "Live, private", label: "One student, one tutor" },
    { value: "Free trial", label: "Then a written rate" },
  ],

  intro: {
    heading: "Arwal and international curricula: what the search actually shows",
    paragraphs: [
      "Arwal was carved out of Jehanabad district in 2001 and sits on the western bank of the Sone, a farming region of paddy and wheat watered by the Sone canal system, with Magahi and Hindi as the everyday languages. Its schools follow the Bihar board or CBSE. One education directory lists Arwal among Bihar districts with IB and IGCSE schools, but that is a category filter, and we found no school here that we could confirm as authorised.",
      "Even so, a few families ask. A parent in a Patna or Delhi job may have enrolled a child in an online IGCSE programme while the family stays in Arwal. A teenager may be at a boarding school in another state and home for long holidays. Or a household may simply want the writing and reasoning habits of an international course before university applications.",
      "The phrase home tuition deserves a direct answer. No IB Gram tutor goes to houses in Arwal. In-person teaching exists only in Gurugram and some parts of Delhi NCR. Arwal students learn from home in a different way: a laptop, a quiet corner, and a tutor on video who writes live on a shared board and sends a summary afterwards.",
      "IB Gram is an independent service. It has no tie to the IB, Cambridge, Pearson or any school, and its tutors never write a student's Internal Assessment, Extended Essay, Theory of Knowledge essay or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Indian Standard Time lessons, with no bus to Jehanabad or Patna",
      "A free opening lesson and a rate sent in writing",
      "A summary of every session",
      "No house visits in Arwal, only live online lessons",
    ],
  },

  programmesIntro:
    "A child near Arwal could be anywhere on the IB path. These cards explain each stage and how a tutor's role changes with age.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Children work through themes such as how the world works, asking questions and sharing what they find. At the end they carry out the Exhibition, a joint inquiry with no paper to sit.",
      countryNote:
        "For a young Arwal child who speaks Magahi at home, short online sessions of picture books and counting games help English feel like a friend, not a hurdle.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are graded on criteria, and students take on service projects and a Personal Project in the final year.",
      countryNote:
        "Bihar board students moving into MYP need to learn how to justify an answer, not only state it, and early lessons practise that with short tasks.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, combine with Theory of Knowledge, the Extended Essay and CAS, leading to external papers in May or November.",
      countryNote:
        "Diploma candidates from Arwal register elsewhere, so the weekly online specialist often serves as the nearest Higher Level teacher they will meet.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two Diploma courses are taken alongside a career-related qualification, a reflective project and language development.",
      countryNote:
        "We know of no school in the district offering it. We teach the academic courses where a student is enrolled and will say so if a different route would suit better.",
    },
  ],

  subjectsIntro:
    "Families in central Bihar ask most often about these IB Diploma courses. The registering school or centre confirms the syllabus version and level first.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Algebra, calculus and proof, the standard choice for engineering and pure science aspirants." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics and modelling supported by a graphing calculator." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, waves and fields, with attention to planning the investigation." },
    { name: "Chemistry", levels: "SL and HL", description: "Bonding, kinetics and organic chemistry, with tidy layout of calculations." },
    { name: "Biology", levels: "SL and HL", description: "Cell biology, inheritance and ecology, answered in exact command-term language." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Water, soil and food systems, using Sone canal irrigation as a local example." },
    { name: "Economics", levels: "SL and HL", description: "Markets, growth and development, with Bihar's agrarian economy as a rich case." },
    { name: "Business Management", levels: "SL and HL", description: "Small enterprise, marketing and finance using case studies." },
    { name: "Geography", levels: "SL and HL", description: "Rivers, floods and population movement across the Gangetic plain." },
    { name: "History", levels: "SL and HL", description: "Evaluating sources and structuring essays." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, data and simple programs." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Analysis of literary and everyday texts, and the individual oral." },
    { name: "Hindi B", levels: "SL and HL", description: "Second-language reading, writing and conversation." },
    { name: "Theory of Knowledge", levels: "Core", description: "Conversation about how we know what we know; the essay is the student's own." },
  ],
  igcseSubjectsIntro:
    "IGCSE papers are sat in the May or June and October or November series, and Edexcel adds January for some subjects. Arwal families most often ask about these courses, on either board.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core and Extended", description: "Number, algebra, shape and data, with calculator and non-calculator papers practised separately." },
    { name: "Additional Mathematics", levels: "Extended route", description: "A stronger algebra and calculus base for a later step into IB Mathematics AA." },
    { name: "Physics", levels: "Core and Extended", description: "Motion, heat, circuits and radioactivity." },
    { name: "Chemistry", levels: "Core and Extended", description: "The mole, rates, periodic patterns and carbon chemistry." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, plants, human body systems and inheritance." },
    { name: "Environmental Management", levels: "Single tier", description: "Resources, ecosystems and human impact, well matched to a river-plain district." },
    { name: "Geography", levels: "Single tier", description: "Physical and human themes, with map and data work." },
    { name: "Economics", levels: "Single tier", description: "Prices, employment and trade in plain examples." },
    { name: "Business Studies", levels: "Single tier", description: "Enterprise basics, finance and marketing." },
    { name: "English as a First Language", levels: "Single tier", description: "Composition and summary under exam conditions." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Even practice across reading, writing, listening and speaking." },
    { name: "Hindi as a Second Language", levels: "Single tier", description: "Offered by some boards and series, and the code is verified before we start." },
  ],

  regionsTitle: "Arwal town, blocks and villages we teach online",
  tutorsIntro:
    "Arwal students learn from tutors based in India over live video. Each tutor card names the programme or specification they have taught, and the free opening lesson lets you test the fit.",
  regionsIntro:
    "Any household in the district with a workable connection can join. The places below are those families mention, with notes on how geography and farming affect the day.",
  regions: [
    { name: "Arwal town centre", note: "The district headquarters, with offices, courts and the main market. Government-employee households here are often the first to ask about English-medium options." },
    { name: "Sone riverbank side", note: "Homes close to the river face flood worries from July to September, and lessons are flexible in those weeks." },
    { name: "Kurtha block", note: "A block to the north-west with farming families and a steady stream of students heading to Patna or Jehanabad for college." },
    { name: "Kaler block", note: "A rural block where mobile data can be patchy, so a backup connection is agreed in advance." },
    { name: "Karpi block", note: "Towards the Jehanabad and Gaya side, with families whose relatives work in other states." },
    { name: "Sonbhadra Banshi Suryapur block", note: "The district's river-facing block, where canal schedules and paddy work shape the evening." },
    { name: "Jehanabad road side", note: "The approach to the neighbouring district headquarters, where families travel for shopping and coaching." },
    { name: "Patna road side", note: "The route to the state capital, about 75 kilometres away, used by parents who commute or work there." },
    { name: "Villages on the Sone canal", note: "Farming villages that live by the irrigation calendar, where evenings before transplanting can be hectic." },
  ],
  schoolClusters: [
    {
      city: "Arwal itself",
      note: "We could not confirm any school in the district as an authorised IB World School or an approved Cambridge or Edexcel centre. A directory that lists Arwal under IB and IGCSE is showing a generic filter, not a named school.",
      schools: [],
    },
    {
      city: "Nearby: Patna",
      note: "The state capital has many private schools, but we could not confirm an IB or IGCSE school there either, so even Patna families often rely on online tutors.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The closest major city where confirmed IB and IGCSE schools exist, a long train ride east, and a choice for some Bihar families who board a child.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "The Cambridge School, Calcutta"],
    },
    {
      city: "Nearby: Delhi NCR and the Mussoorie hills",
      note: "Families relocating for work or boarding a teenager often look at Delhi and Noida, or at the hill boarding belt above Dehradun.",
      schools: ["Vasant Valley School, Delhi", "Step by Step School, Noida", "Woodstock School, Mussoorie"],
    },
  ],
  schoolDisclaimer:
    "These schools appear only to show where confirmed international programmes exist beyond Arwal, taken from public information. IB Gram is independent and is not affiliated with any of them, the IB, Cambridge or Pearson.",

  modesIntro:
    "No tutor travels to Arwal, so these modes describe how a live online lesson can be organised.",
  modes: [
    {
      title: "Regular online home tuition",
      description: "A fixed weekly one-to-one lesson from a laptop in your own room.",
      bullets: [
        "Shared screen with handwritten working",
        "A set day and hour agreed in advance",
        "Session summary delivered afterwards",
      ],
    },
    {
      title: "Term-end revision weeks",
      description: "A denser block of lessons before mock exams and before the real papers.",
      bullets: [
        "Timed questions followed by careful review",
        "A running list of repeated mistakes",
        "Timetable kept clear of Chhath and flood days",
      ],
    },
    {
      title: "Paired lessons",
      description: "Two students on the same course share a slot and its cost.",
      bullets: [
        "Identical board, subject and level only",
        "Good for revision and problem practice",
        "Return to private lessons at will",
      ],
    },
  ],

  sections: [
    {
      heading: "Why would an Arwal family want an IB or IGCSE tutor at all?",
      paragraphs: [
        "Because some students in Arwal are already on an international course, and others want to be. The first may be following an online school whose lessons are recorded, with no teacher to question. The second may be a Class 8 child whose parents plan a move to a city school next year. Both need someone who knows what the examiner rewards.",
        "Bihar has a long tradition of students who work intensely and travel far for education, and families in Arwal are no exception. What they often lack is access: there is no specialist for IB Chemistry HL in the district, and the nearest big cities have few of them too.",
        "A tutor online closes that gap at modest cost. The student stays in Arwal, avoids the long road to Patna, and still gets an hour with a teacher who has taught the very syllabus code they are sitting.",
        "We are careful not to overstate. We coach; we do not replace the school or the student's own effort, and we say plainly when a topic is better handled by the student's class teacher.",
      ],
      bullets: [
        "Online international school students without a live teacher",
        "Children of Patna and Delhi professionals living in Arwal",
        "Boarders home for long holidays",
        "Students preparing for a future move to an IB school",
      ],
    },
    {
      heading: "How do Bihar Board, CBSE, IB and IGCSE differ in what they ask of a student?",
      paragraphs: [
        "The Bihar School Examination Board tests how well a student knows the set books, and CBSE adds application questions across a national syllabus. IB and IGCSE ask a student to explain reasoning in full sentences, to interpret data, and to work with sources and unfamiliar situations.",
        "For a hardworking Arwal student this is a change of method more than a rise in difficulty. The content of IGCSE Physics or IB Mathematics is often familiar, but the answer format is not. Marks are lost when a student writes the final result with no method, or describes a graph without analysing it.",
        "The IB Diploma goes further, adding an Extended Essay and internal assessments that take months. A student must learn to manage a long project alone, with a tutor as a guide rather than an author.",
        "The table lays out the main contrasts.",
      ],
      table: {
        caption: "What each syllabus rewards, for an Arwal family",
        columns: ["Point", "Bihar Board", "CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["Marks come from", "Accurate recall of set books", "Recall and application", "Analysis, evaluation and long-form projects", "Structured answers and method in tiered papers"],
          ["Main sitting", "February to March", "February to March", "May, some schools November", "May or June, October or November"],
          ["Language of exam", "Hindi or English", "English or Hindi", "English plus a second language", "English plus language options"],
          ["Available in Arwal", "Yes", "Some schools", "Only via online tutoring", "Only via online tutoring"],
          ["Where a tutor helps", "Practice papers", "Application skills", "IA planning and Higher Level depth", "Choosing a tier and mastering paper technique"],
        ],
      },
    },
    {
      heading: "What shapes the cost of IB or IGCSE tuition in Arwal?",
      paragraphs: [
        "We quote no fixed prices on this page because one number would mislead. Each family receives a rate in writing after the free lesson, and no money or commitment is asked for beforehand.",
        "The rate rises with the course level, so Higher Level Physics sits above Standard Level English. It rises with weekly hours and with a tutor's years of experience, and it falls when two students share a slot.",
        "Families in Arwal also save on things that do not appear in a fee. There is no fare to Jehanabad or Patna, no lost half-day on the road and no rented room in a city. A cancelled lesson moves to another slot without a wasted journey.",
        "Beginning with one lesson a week keeps the risk small. A family can add sessions ahead of mock exams and drop back afterwards, which suits a household whose farm calendar already has peaks and troughs.",
      ],
    },
    {
      heading: "How do Chhath, the Sone floods and the farm year shape study in Arwal?",
      paragraphs: [
        "Arwal's calendar follows the river and the crop. Paddy transplanting runs through July, harvest in October and November, and wheat is cut in April. During those weeks, children and adults alike are pulled into farm work, and evenings change.",
        "Chhath Puja, in October or November, is the biggest festival, bringing relatives home and emptying towns for days. The IB November session and IGCSE autumn series fall close to it, so revision should wrap up before it begins. Heat from April to June is fierce and power supply unreliable, and winter fog lingers from December.",
        "The Sone can rise sharply in the monsoon, and canal and river flooding affects low villages between July and September. A laptop with a full battery and a phone hotspot matter more here than a perfect desk.",
        "The table ties the local calendar to exam windows.",
      ],
      table: {
        caption: "Arwal's year against IB and IGCSE dates",
        columns: ["Months", "Local conditions", "Academic event", "What we do"],
        rows: [
          ["December to February", "Fog, cold, wedding season", "Mock papers for May candidates", "Short daylight sessions, mock dates protected"],
          ["March to April", "Wheat harvest, Holi", "IB internal assessment deadlines", "Late-evening slots in peak harvest weeks"],
          ["May to June", "Heat, power cuts", "IB May session and IGCSE summer series", "Devices charged, hotspot ready"],
          ["July to September", "Transplanting, Sone floods", "New-year content", "Flexible dates, notes kept offline"],
          ["October to November", "Paddy harvest, Chhath, Diwali", "IGCSE autumn series, IB November session", "Revision finished before Chhath"],
        ],
      },
    },
    {
      heading: "Which suits Arwal better: an online specialist, a coaching class, a local teacher or self-study?",
      paragraphs: [
        "Jehanabad and Patna have coaching for board exams and for engineering and medical entrances, and many Arwal students travel there for Class 11 and 12. These are effective for the goals they serve, but they do not teach the IB rubric or an IGCSE mark scheme.",
        "Local teachers who tutor privately know their own syllabus thoroughly, yet it is rare to find one who has taught Cambridge Additional Mathematics or IB Biology HL. Self-study is fine for a disciplined older student with good past papers, but it stalls whenever a doubt needs a human answer.",
        "A specialist online tutor brings the right syllabus into the house. The weak spot is connectivity, so we agree a backup plan first and send summaries that can be read without a signal.",
        "The table compares the four in plain terms.",
      ],
      table: {
        caption: "Four ways to study an international syllabus from Arwal",
        columns: ["Way", "Syllabus fit", "Travel", "Main weakness"],
        rows: [
          ["Online specialist tutor", "Strong, by course code", "None", "Needs a steady connection"],
          ["Coaching in Jehanabad or Patna", "Weak", "Regular trips by road", "Built for board and entrance tests"],
          ["Local teacher giving private lessons", "Weak to moderate", "Tutor or student travels", "Unfamiliar with IB and IGCSE formats"],
          ["Self-study with past papers", "Depends on the student", "None", "No feedback when stuck"],
        ],
      },
    },
    {
      heading: "What happens after school: universities and careers from Arwal",
      paragraphs: [
        "For an IB Diploma student from Arwal, the nearest university city is Patna, with Patna University, IIT Patna, NIT Patna and AIIMS Patna among its institutions. Many students go on to Delhi, Varanasi or Kolkata, and some abroad. Each institution sets its own rules for how IB points count.",
        "The Association of Indian Universities treats the IB Diploma as equal to Class 12, CUET-UG serves many central universities, and engineering and medicine have their own exams in JEE and NEET-UG. The rules on subjects and equivalence shift from year to year, so read the current notice before finalising the Diploma subject mix.",
        "Some families look to the UK, Canada, the US or Australia, where the IB Diploma and Cambridge A Levels are familiar. We help students understand prerequisites and plan revision, but we never write applications or personal statements.",
        "IGCSE students usually move to A Levels, the IB Diploma or an Indian Class 11 programme. An early conversation in Class 9 about goals and where the student will study saves difficult changes later.",
      ],
      bullets: [
        "AIU treats the IB Diploma as a Class 12 equivalent",
        "Read JEE, NEET-UG and CUET-UG notices every year",
        "Keep Mathematics, Physics and Chemistry together for engineering",
        "Ask universities directly how they count IB points",
      ],
    },
    {
      heading: "What does a live online lesson look like for IGCSE Mathematics or IB Computer Science?",
      paragraphs: [
        "In IGCSE Mathematics the tutor shares a blank page and works a problem aloud while the student copies and attempts the next step. Mistakes are caught immediately rather than days later in a marked script. Extended topics such as functions, vectors and trigonometry are built up from the student's existing algebra.",
        "Core versus Extended is the decision that matters most. Extended opens the highest grades but asks for speed and accuracy in algebra, so we assess a student on a few past questions before advising a tier.",
        "In IB Computer Science the tutor teaches algorithms through trace tables and small programs, reviews the student's design notes for the Internal Assessment, and explains what the criteria look for. The student writes every line of code, and the project is theirs alone.",
        "Students in Arwal often have limited access to a computer lab, so we keep software needs light and suggest free tools that run on an ordinary laptop.",
      ],
    },
    {
      heading: "How do you get started from Arwal?",
      paragraphs: [
        "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the programme, subject, level, exam session and school or online centre. Hindi or English works.",
        "A tutor suggestion and a few trial times follow, often the same day or the next. The first lesson is honest teaching on a real topic, with time at the end for the parent to ask about experience and approach.",
        "If you want to carry on, a written rate and weekly slot are sent, and nothing is booked before then. After each class the tutor writes a brief summary, handy for parents who are out in the fields or at work during the lesson.",
        "If the tutor is not the right match, say so and we will change it.",
      ],
    },
  ],

  process: [
    { title: "Message the details", description: "Write the programme, subject, level, session and school or centre, in Hindi or English." },
    { title: "Receive a proposal", description: "A named tutor who has taught that course comes back with trial times in IST." },
    { title: "Take the opening lesson", description: "Your child tries a real topic live, and you can ask the tutor about background." },
    { title: "Study the written terms", description: "A rate and weekly plan arrive in writing before you decide anything." },
    { title: "Read each summary", description: "After every class a short note lists topics done and practice to follow." },
  ],
  whyPoints: [
    { title: "Expertise tied to the syllabus", description: "We select by IB course or IGCSE code so the tutor has actually taught what your child sits." },
    { title: "No pretence about visits", description: "Arwal gets online lessons only, and that is stated first." },
    { title: "Terms after the trial", description: "Pricing is shared in writing once the free lesson is done." },
    { title: "Guidance, never authorship", description: "IAs, Extended Essays, TOK essays and coursework are written by the student alone." },
    { title: "Planned around the river and the crop", description: "Floods, transplanting, Chhath and heat are built into timetables." },
    { title: "A fresh tutor on request", description: "If the pairing is poor, a new tutor is found quickly." },
  ],

  faqs: [
    {
      question: "Can I get an IB or IGCSE tutor in Arwal?",
      answer:
        "Yes, online and live. A student in Arwal is paired with a tutor who has taught the exact IB or IGCSE course, and they work one to one over video on Indian time. A directory listing Arwal under IB schools turned out to be a generic filter, and we found no confirmed local school, so a specialist on screen is usually the practical route.",
    },
    {
      question: "Do your tutors come to houses in Arwal?",
      answer:
        "No. Visits in person are limited to Gurugram and parts of Delhi NCR. In Arwal, home tuition means a live online lesson taken at home: your child at a desk, the tutor on video, and a written summary at the end. You save the road to Jehanabad or Patna, and the lesson runs at a time that suits the family.",
    },
    {
      question: "Are there IB or IGCSE schools in Arwal district?",
      answer:
        "None that we could verify. Schools we found in the district follow the Bihar board or CBSE, and we also failed to confirm such a school in Patna. Please ask any school for evidence of IB authorisation or Cambridge or Edexcel centre status before enrolling, since we do not handle admissions and cannot vouch for institutions.",
    },
    {
      question: "How is the price of IGCSE or IB tuition decided for Arwal students?",
      answer:
        "By course level, weekly hours, tutor experience and whether the lesson is private or shared, and always in writing after the free trial. No price list is published. Sharing a slot with another student lowers each family's part, and lessons online carry no travel or lodging cost, which matters in a district far from big cities.",
    },
    {
      question: "We live in Arwal but the school is online. Can a tutor fill the gap?",
      answer:
        "Yes. Online schools often give recorded lessons and a portal but little live questioning. A tutor who knows the same board and syllabus code can go through topics the student finds hard, set practice and mark it, then share a summary. Send the school's course outline and recent results so the plan starts where the student actually is.",
    },
    {
      question: "Can a Bihar Board student move to an international syllabus?",
      answer:
        "Yes, at the right moment. Class 9 for IGCSE and Class 11 for the IB Diploma are the smoothest entry points, and a school or online centre must accept the student, which we do not arrange. Before the switch, bridge lessons in written English and in reasoned answers help a child from a recall-based system settle faster.",
    },
    {
      question: "Which IB Mathematics is right for a student aiming at engineering?",
      answer:
        "Usually Analysis and Approaches at Higher Level, because it develops calculus and proof-style thinking that engineering programmes build on. Applications and Interpretation suits economics, business or social science better. Entrance requirements change, so check the current JEE notice alongside the subject choice. Our free lesson includes a brief sample of both courses.",
    },
    {
      question: "Will a tutor write my child's IA or Extended Essay?",
      answer:
        "Never. A tutor explains the assessment criteria, helps choose a workable question and gives feedback on a plan or draft. The research, data and writing belong to the student. The same rule covers Theory of Knowledge essays and coursework. It protects the student from academic-misconduct findings and keeps the work honestly theirs.",
    },
    {
      question: "What if the Sone floods or the power goes during a lesson?",
      answer:
        "We reschedule at no cost. Arwal can face flooded lanes in the monsoon and long power cuts in summer, so we agree a backup in advance: a fully charged laptop, a phone hotspot on a different network and notes saved offline. If several days are lost, the tutor adjusts the plan so exam dates stay in sight.",
    },
    {
      question: "Who sets the IGCSE board, Cambridge or Edexcel?",
      answer:
        "The school or online centre where the student is registered. Codes differ, such as 0580 for Cambridge Mathematics and 4MA1 for Edexcel, and papers are laid out differently. Give us the code and we find a tutor who has taught that specification, so practice papers and mark schemes match what the examiner will actually use.",
    },
    {
      question: "When are the IB and IGCSE examinations held?",
      answer:
        "IB Diploma papers fall mainly in May, with a November session at some schools. IGCSE runs in May or June and October or November, and Edexcel adds January for some subjects. Your school or centre confirms exact dates. We plan revision backwards from them and keep the weeks around Chhath and harvest as light as possible.",
    },
    {
      question: "Is the IB Diploma accepted by Indian universities?",
      answer:
        "Broadly yes. The Association of Indian Universities treats it as a Class 12 equivalent, and many universities accept IB scores directly. Central university seats often rely on CUET-UG, and JEE and NEET-UG have their own eligibility rules that change by year. Read the current official notice for each course before you choose subjects.",
    },
    {
      question: "Can two students in Arwal share one tutor and one lesson?",
      answer:
        "When they study the same board, subject and level, yes. A shared online slot costs each family less and works well for revision and problem-solving practice. We avoid mixing syllabi, because the lesson would serve neither student well. Neighbours and cousins often pair up, and either can return to a private slot at any time.",
    },
    {
      question: "What can a tutor honestly promise about grades?",
      answer:
        "Nothing about the result itself, because marks depend on the student, the school and the examiner. We promise a tutor matched to the exact syllabus, a free first lesson, a written summary after each class and an easy tutor change. A family can then judge progress from real evidence rather than assurances.",
    },
    {
      question: "Is there help for younger children in PYP or MYP?",
      answer:
        "Yes, in shorter lessons suited to age. PYP help is about spoken English, early reading and number sense through games and stories. MYP help is about criteria-based writing, research and planning. The Personal Project belongs to the student, so the tutor guides planning and reflection without adding content. Many children enjoy a weekly session as a steady habit.",
    },
    {
      question: "How do I book a free lesson from Arwal?",
      answer:
        "Send a message to +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the course, level, exam session and school. A tutor and trial times usually come back within a day. The lesson is real teaching, free and with no obligation, and a written rate follows only if you want to continue.",
    },
    {
      question: "Is IB Gram linked to any school, the IB or an exam board?",
      answer:
        "No. IB Gram is an independent tutoring service with no link to any school, the IB organisation, Cambridge or Pearson. Schools named here are there for geographic context only, from public information. Please check any school's authorisation directly with the relevant body before you decide about enrolment or a move.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "City pages for every state, and how our online model works." },
    { label: "Gurugram home tuition", href: "/gurgaon/", description: "Our one city with tutors who visit homes." },
    { label: "IB tutors", href: "/ib-tutors/", description: "The IB programmes and subjects our tutors have taught." },
    { label: "IGCSE guide", href: "/igcse/", description: "Understanding boards, tiers and subject packages." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The two-year structure and its assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "How MYP criteria and projects are marked." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-based learning for the early years." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Which Diploma maths course suits which goal." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and level." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to request a trial lesson." },
    { label: "IB and IGCSE tutors in Jehanabad", href: "/jehanabad/", description: "The neighbouring district headquarters." },
    { label: "IB and IGCSE tutors in Patna", href: "/patna/", description: "The state capital, around 75 kilometres away." },
    { label: "IB and IGCSE tutors in Gaya", href: "/gaya/", description: "The south Bihar city on the way to Bodh Gaya." },
    { label: "IB and IGCSE tutors in Aurangabad, Bihar", href: "/aurangabad-bihar/", description: "The district just across the Sone." },
  ],

  closingHeading: "Start with a free IB or IGCSE lesson at your desk in Arwal",
  closingBody:
    "Nobody needs to leave Arwal. Tell us the course and the sitting, and we will suggest a tutor with some trial times. The first lesson is free and the terms follow in writing. Reach us on WhatsApp at +91 7439 368 115 or by email at support@ibgram.com.",
};
