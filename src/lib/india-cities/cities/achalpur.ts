import type { CitySeoPage } from "../types";

/**
 * /achalpur/ - IB and IGCSE tutoring page for Achalpur (Ellichpur) and its twin town Paratwada,
 * Amravati district, Maharashtra. Online only: in-person visits exist only in Gurugram and parts of
 * Delhi NCR. No IB or Cambridge/Edexcel campus could be confirmed in Achalpur, so stripSchools is empty
 * and clusters point to Amravati and Nagpur using school names already verified on those pages.
 */
export const achalpur: CitySeoPage = {
  slug: "achalpur",
  countryName: "Achalpur",
  countryNameLong: "Achalpur, Maharashtra",
  demonym: "Achalpur",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We work around the Vidarbha summer heat, Ganeshotsav and Navratri evenings, Eid and Diwali weeks and the Maharashtra board exam season",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.2569, longitude: 77.5122 },
  wikipedia: "https://en.wikipedia.org/wiki/Achalpur",
  alternateNames: ["Ellichpur", "Elichpur", "Achalpur Paratwada"],
  stripSchools: [],

  title: "Achalpur IB & IGCSE Tutors | Private Online Home Tuition",
  metaDescription:
    "Live one-to-one IB and IGCSE tutors for Achalpur and Paratwada: online private tuition from home for MYP, DP and Cambridge students, free first lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Achalpur",
  heroEyebrow: "ACHALPUR AND PARATWADA: IB & IGCSE TUITION ONLINE",
  heroSubtitle:
    "Anyone in Achalpur asking for private home tuition on the IB or IGCSE quickly learns that the closest specialists are in Nagpur or Pune. IB and IGCSE tutors in Achalpur are matched online instead: your child logs on at home and works one-to-one with a teacher who knows the exact course, from a first lesson that costs nothing.",
  primaryKeyword: "IB and IGCSE tutors in Achalpur",
  imageAltText: "Achalpur student reviewing IGCSE Physics past papers with an online tutor",
  secondaryKeywords: [
    "IB tutor Achalpur",
    "IGCSE tutor Achalpur",
    "IB home tuition Achalpur",
    "IGCSE home tuition Achalpur",
    "IB private tuition Achalpur",
    "IB Maths tutor Achalpur",
    "IGCSE Maths tutor Achalpur",
    "IB Physics tutor Achalpur",
    "IB Chemistry tutor Achalpur",
    "IB Biology tutor Achalpur",
    "IB DP tutor Achalpur",
    "IB MYP tutor Achalpur",
    "IB PYP tutor Achalpur",
    "IGCSE online tuition Achalpur",
    "IB tutor Paratwada",
    "IGCSE tutor Paratwada",
    "IB tutor Ellichpur",
    "online IB tutor Anjangaon Surji",
    "Cambridge IGCSE tutor Amravati district",
    "Edexcel IGCSE tutor Achalpur",
  ],

  heroTrustPoints: [
    "The lesson is live and private; the tutor is picked for the syllabus and can be anywhere in India",
    "No tutor will come to a house in Achalpur or Paratwada: home visits are limited to Gurugram and parts of Delhi NCR",
    "A free first lesson comes before any decision",
    "IB Gram is independent of the IB, Cambridge, Pearson Edexcel and all schools named here",
  ],
  heroStats: [
    { value: "Twin-town reach", label: "Achalpur, Paratwada and nearby talukas" },
    { value: "PYP to DP", label: "The full IB continuum" },
    { value: "IST", label: "Same clock for tutor and student" },
    { value: "Free trial", label: "See a lesson first" },
  ],

  intro: {
    heading: "An international syllabus in a Vidarbha twin town",
    paragraphs: [
      "Achalpur, once called Ellichpur, and its twin town Paratwada together form the second-largest urban area in Amravati district. The place has an old story: an early Rashtrakuta capital in the eighth century and the seat of the Imad Shahi sultans from 1490. Today it is a town of traders, cotton and orange growers, teachers and government staff at the foot of the Satpuras, with Melghat and Chikhaldara to the north. Schools follow the Maharashtra State Board or CBSE. We could not confirm any that teach the IB or Cambridge or Edexcel IGCSE.",
      "For a family here, the search for private home tuition for an international course ends at a gap. Amravati, about 45 kilometres away, has a single confirmed Cambridge school. Nagpur has more, but is further. The way to reach a subject specialist is therefore to bring one to the child by video.",
      "That is what IB and IGCSE tutors in Achalpur offer. A tutor experienced in the specific course teaches your child alone, for an hour, from a laptop at home. Progress is written down after each lesson so you can see what changed.",
      "One thing we will not do is pretend the lesson is in person. Tutors do not travel to Achalpur. Assessed work is also off limits: no IA, Extended Essay or TOK essay is ever written by a tutor.",
    ],
    bullets: [
      "For families moving to or from Vidarbha for work",
      "IGCSE support matched to Cambridge or Edexcel paper codes",
      "IB support from PYP to the Diploma",
      "Lessons arranged around Achalpur's festivals and exam season",
      "Online only: no home visits in this district",
    ],
  },

  programmesIntro:
    "Nothing in the twin towns is authorised for the IB as far as we can confirm, so each programme comes to a family sideways: through a transfer, a boarding seat in Nagpur or Pune, or a decision to add international depth on top of Maharashtra board study.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Children explore units built around big ideas and complete an Exhibition in the final year. Since nothing is externally examined, tutors give attention to fluent reading, number confidence and curiosity.",
      countryNote:
        "In Achalpur, PYP tuition mostly serves a child whose family has recently arrived for a posting or business move and needs a smooth handover.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Students meet criteria-based tasks across eight subject groups and complete a Personal Project. The main challenge is to move from describing a topic to analysing it, which Maharashtra board students have often had less practice in.",
      countryNote:
        "Achalpur MYP students are typically at a boarding school outside the district and use tutoring for holidays and long weekends home.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A six-subject course with Theory of Knowledge, an Extended Essay and CAS. Internal assessment adds to each subject grade, and final results follow the May or November exams.",
      countryNote:
        "As no Diploma school exists in the twin towns, a local student follows the course elsewhere, and tutoring covers the gaps in weeknights and vacations.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Diploma courses are combined with career-related study and a reflective project. Very few Indian schools run it, and what we support is the Diploma course material within it.",
      countryNote:
        "CP enquiries from Achalpur are unusual; tutoring, when requested, addresses the Diploma courses only.",
    },
  ],

  subjectsIntro:
    "Preparation for IB Chemistry HL is unlike help with a Class 7 MYP Science task, so we begin from the subject, the level and the assessment date before we discuss tutors. A local teacher rarely covers this range, and online matching lets us cover it.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof. Maharashtra board students are strong on procedures and benefit from practice in explaining each step in words." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator work, often chosen by students heading to business, economics or life sciences." },
    { name: "IB Physics", levels: "HL / SL", description: "Students learn to use the data booklet quickly and to argue from evidence in extended answers." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative work is familiar from state boards; the reaction mechanisms and the internal investigation need extra attention." },
    { name: "IB Biology", levels: "HL / SL", description: "Content is broad, so structured revision and command-word practice are the key tools." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams tied to real examples, including Vidarbha's cotton and orange economy, make answers concrete." },
    { name: "IB Business Management", levels: "HL / SL", description: "Suited to trading and business families, focusing on case-study reading and structured answers." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, systems and, at HL, a pre-released case study." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Comparative analysis and written commentary practised with timed tasks." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Reading, writing and oral practice for students who want Hindi as an assessed language." },
    { name: "IB Marathi B", levels: "SL", description: "For students who want Marathi assessed, subject to tutor availability at the time." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies on rivers, agriculture and hill forests with fieldwork-style internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies and evidence recalled accurately and used in short and extended responses." },
  ],

  igcseSubjectsIntro:
    "The twin towns have no confirmed IGCSE school. Most demand is from families who want Cambridge-level content next to the Maharashtra syllabus, or whose child studies at a school elsewhere. A paper code is always the starting point.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended goes beyond the SSC syllabus in algebra and trigonometry; sessions focus on written method." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and functions to prepare for IB Maths AA or A Level Maths." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Calculations under time pressure and the alternative to practical paper get regular attention." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactivity and organic families taught with exam-style questions." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Exact terminology and clear extended answers on genetics, ecology and physiology." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Basic and applied economics with evaluation, drawing on Indian examples." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "A useful match for families who run a business, covering finance, marketing and operations." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python and pseudocode alongside networks and data representation." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative and summary, practised on unseen passages." },
  ],

  regionsTitle: "Achalpur, Paratwada and nearby places we teach online",
  regionsIntro:
    "All lessons run on video, so these places are for context about school catchments, evening connectivity and the distance to a confirmed international campus.",
  regions: [
    { name: "Achalpur city", note: "The older municipal centre with Marathi and Urdu medium schools and a settled professional community." },
    { name: "Paratwada", note: "The twin town, a commercial hub with well-established traders and more CBSE school choices." },
    { name: "Ellichpur old town", note: "The historic quarter with narrow lanes, where families often hold long-standing trade businesses." },
    { name: "Achalpur Camp", note: "A residential part of town near government offices, home to a number of officers and teachers." },
    { name: "Anjangaon Surji", note: "A nearby taluka town with a large market and agricultural families who look towards Amravati for schooling." },
    { name: "Chandur Bazar", note: "A taluka to the south known for its farm produce, where distance from cities makes online options attractive." },
    { name: "Daryapur", note: "A cotton-growing taluka town with families that send older children to Amravati for study." },
    { name: "Semadoh and Dharni", note: "Melghat gateway settlements where broadband can be slow and evening lessons need careful planning." },
    { name: "Chikhaldara", note: "The nearby hill station, home to a few resort and estate families who prefer learning at home." },
    { name: "Amravati", note: "The district city about 45 km away, where the closest confirmed Cambridge school is found." },
  ],

  schoolDisclaimer:
    "We could not confirm an IB World School or a Cambridge or Edexcel IGCSE centre in Achalpur or Paratwada, so the strip above shows none. The schools below are in other cities and appear only so families can see where campuses exist. IB Gram is independent and has no link to any of them.",
  schoolClusters: [
    {
      city: "Nearby: Amravati",
      note: "The district city, roughly 45 km away, has one confirmed Cambridge school. Options here are limited, so many families look further.",
      schools: ["KK Cambridge International School, Indala"],
    },
    {
      city: "Nearby: Nagpur, MIHAN belt",
      note: "Nagpur is Vidarbha's largest city and has the region's most confirmed international schools, though it is a longer journey from Achalpur.",
      schools: ["D Y Patil International School, MIHAN"],
    },
    {
      city: "Nearby: Nagpur, central schools",
      note: "Central Nagpur adds two more confirmed campuses that Vidarbha families compare when considering boarding or relocation.",
      schools: ["Centre Point School International", "VIBGYOR World Academy"],
    },
  ],

  modesIntro:
    "Everything in Achalpur happens on screen: a live video class with one tutor and one student. You choose how often and how intensely.",
  modes: [
    {
      title: "Weekly one-to-one lessons",
      description: "A regular slot on a weekday evening or weekend morning, adjusted around school and other classes.",
      bullets: [
        "Chosen for syllabus match, wherever the tutor lives",
        "IB, IGCSE, A Level bridging where relevant",
        "Papers are worked and marked live",
        "The same tutor stays for the whole term",
      ],
    },
    {
      title: "Lessons plus a paper trail",
      description: "Weekly lessons with a short written note afterwards and a proper progress review every few weeks.",
      bullets: [
        "Each note lists topics done and homework given",
        "Parents can follow along without sitting in",
        "Works well for younger MYP and PYP students",
        "Extra sessions can be added near mocks",
      ],
    },
    {
      title: "Revision bursts",
      description: "A few weeks of tighter scheduling before an exam series or during the Diwali and summer breaks, avoiding the hottest hours of the Vidarbha day.",
      bullets: [
        "Timed papers with feedback in days",
        "Useful for boarders back for a holiday",
        "Fits around festival weeks",
        "Book early for the popular break slots",
      ],
    },
  ],

  sections: [
    {
      heading: "Who in Achalpur and Paratwada asks about the IB and IGCSE?",
      paragraphs: [
        "A short list of family types accounts for nearly every enquiry. Traders and industrialists who expect a child to study abroad or work in an international setting. Doctors, engineers and bank officers posted to Amravati district from other states. Families with a boarding-school place in Nagpur, Pune or a hill school. And parents who want Cambridge-level Maths and Science to sit next to the local syllabus.",
        "Because no school in the twin towns is authorised, none of these groups can walk to a local campus. Amravati's single confirmed Cambridge school is one option, though it serves a limited intake and often requires a move.",
        "This is where online teaching earns its place. The IB and Cambridge examine every candidate against one standard, so a Vidarbha student taught by a subject specialist elsewhere is prepared on exactly the same terms as anyone in a metro.",
        "Some parents worry that a hometown tutor would be easier to manage. We understand that; but a local tutor for these subjects is nearly impossible to find, and the video route has one advantage: the tutor is picked from the entire country.",
      ],
      table: {
        caption: "Confirmed international school options near Achalpur",
        columns: ["Place", "Confirmed option", "Notes for Achalpur families"],
        rows: [
          ["Achalpur and Paratwada", "None confirmed", "Maharashtra State Board and CBSE"],
          ["Amravati", "KK Cambridge International School, Indala", "The nearest confirmed Cambridge campus, about 45 km away"],
          ["Nagpur, MIHAN", "D Y Patil International School", "A longer commute or boarding decision"],
          ["Nagpur, central", "Centre Point School International; VIBGYOR World Academy", "Compared by families thinking of relocation"],
        ],
      },
    },
    {
      heading: "What happens after IB or IGCSE for a student from Achalpur?",
      paragraphs: [
        "Most students go on to Amravati, Nagpur or Pune for undergraduate study, and some look overseas. Indian universities recognise the IB Diploma and, subject to subject combinations, Cambridge and Edexcel qualifications through the Association of Indian Universities. Each institution publishes its own rules, so always read them.",
        "Medicine and engineering need care. NEET and JEE follow the Indian syllabus, so an IB or IGCSE student who wants them needs extra preparation, and the subject rules on eligibility must be met. MHT-CET in Maharashtra has its own domicile and qualification norms that should be checked in the current brochure.",
        "CUET-UG opens central universities to IB and IGCSE students on the same footing as everyone else. Sant Gadge Baba Amravati University serves the region, and many students still choose Nagpur or Pune for professional courses.",
        "For overseas study, the IB Diploma is widely understood, and IGCSE results are usually followed by A Levels or the Diploma before university applications.",
      ],
      bullets: [
        "AIU equivalence must be confirmed for each Indian university",
        "NEET, JEE and MHT-CET need Indian-syllabus preparation",
        "CUET-UG suits central-university applicants",
        "Overseas applications are built on IB or A Level grades",
      ],
    },
    {
      heading: "Is Maharashtra board study a good base for the IB or IGCSE?",
      paragraphs: [
        "It can be, with adjustments. Students from the SSC or HSC tracks tend to have solid arithmetic, algebra and factual knowledge. What they often lack is practice in writing long, reasoned answers in English under time pressure, which the IB and Cambridge reward.",
        "The Marathi and Urdu medium routes bring an extra dimension. A student fluent in one of those languages may have to learn a new set of scientific terms in English. A tutor helps most by building vocabulary in context and by getting the student to write, rather than only read.",
        "CBSE students face less of a jump, because NCERT already stresses concepts, though both IB and IGCSE go further in asking for evaluation and independent thought.",
        "The table shows how the routes differ in ways that matter to an Achalpur family deciding whether and when to switch.",
      ],
      table: {
        caption: "Maharashtra Board, CBSE, IGCSE and IB Diploma compared",
        columns: ["Feature", "Maharashtra SSC / HSC", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Main emphasis", "Content and procedure", "Concepts and application", "Content with structured reasoning", "Reasoning, research and reflection"],
          ["Entrance link", "MHT-CET, NEET, JEE", "JEE, NEET, CUET", "A Level or IB pathway", "AIU equivalence, overseas entry"],
          ["Assessment", "Annual papers", "Annual papers", "Final papers, some coursework", "Papers, IA, EE, TOK"],
          ["Best moment to switch", "Class 9 for IGCSE", "Class 9 or 11", "Grade 9", "Class 11"],
        ],
      },
    },
    {
      heading: "How much does IB or IGCSE tuition cost for an Achalpur family?",
      paragraphs: [
        "There is no published price list, so the honest answer is that it depends, and you will see the exact figure in writing before the trial lesson. The variables are the subject, the level, the length and frequency of sessions and the tutor's record.",
        "IB Diploma Higher Level courses generally sit above PYP or lower-secondary support, because fewer tutors have taught them recently. A tutor who has examined for the IB or taught Cambridge Extended Mathematics over several years commands more than a newer graduate.",
        "Compared with the alternative of sending a child to Nagpur for coaching, an online arrangement removes lodging, bus fare and the time spent on the road between Achalpur and the city. That is not always cheaper in absolute terms, but it is often cheaper than expected.",
        "A WhatsApp message with the programme or board, subject, level and desired lessons per week is enough for a written quote.",
      ],
    },
    {
      heading: "Should you choose online tuition, a coaching institute, a local teacher or self-study?",
      paragraphs: [
        "The town has tuition classes for SSC, HSC, MHT-CET and NEET, and some are very good. None we know of teaches IB or Cambridge syllabuses, and their batch timings are fixed. A local private teacher could help with general Maths, but may not know the IB or Cambridge specification.",
        "Self-study with past papers is a real option for a disciplined student, though feedback on written answers is missing, and that is where marks are usually lost.",
        "An online tutor combines specialist knowledge with flexible timing. The trade-off is a need for a stable connection, which we ask families to check before the trial.",
        "The table compares the four options.",
      ],
      table: {
        caption: "Four ways to study an international course from Achalpur",
        columns: ["Option", "Syllabus knowledge", "Timing", "Limitation"],
        rows: [
          ["Online one-to-one tutor", "Specialist in the exact course", "Flexible", "Depends on internet"],
          ["Coaching institute", "SSC, HSC, MHT-CET and NEET focus", "Fixed batches", "No IB or IGCSE teaching that we could confirm"],
          ["Local private teacher", "General school subjects", "Flexible", "May not know the specification"],
          ["Self-study", "Depends on the student", "Total freedom", "No feedback on written work"],
        ],
      },
    },
    {
      heading: "When do the exams fall, and how does Achalpur's year affect study?",
      paragraphs: [
        "IB Diploma exams run in May and November. Cambridge IGCSE sits in February-March, May-June and October-November, and Pearson Edexcel in January, May-June and October-November. Results follow within weeks or a few months. Private candidates should confirm their exam centre and entry deadlines well ahead of time.",
        "Vidarbha's summer is severe. Temperatures in April and May often pass 40 degrees, and afternoon study is unrealistic. Early mornings and evenings are the workable hours, and we schedule accordingly.",
        "The festival calendar is full. Ganeshotsav and Navratri bring late evenings and processions, Eid and Muharram matter to a large part of the community, and Diwali marks the longest school break of the year. Buddha Purnima and Christmas add to the rhythm.",
        "The table is a planning aid rather than an official timetable, so always confirm dates with the school or examination centre.",
      ],
      table: {
        caption: "Exam and festival calendar for Achalpur students",
        columns: ["Time of year", "Main events", "Study advice"],
        rows: [
          ["January to March", "Edexcel January series; IGCSE February-March; Maharashtra board exams", "Keep lessons short and focused around school papers"],
          ["April to June", "Vidarbha heat; IB May session; Cambridge summer series", "Schedule early morning or evening lessons"],
          ["July to September", "Monsoon; new academic year; Ganeshotsav", "A steady weekly rhythm is easiest to build now"],
          ["October to December", "Navratri, Diwali, Eid dates vary; IB and Cambridge November series", "Plan intensive blocks before festival weeks"],
        ],
      },
    },
    {
      heading: "Which IB Maths and science combination suits which student?",
      paragraphs: [
        "IB Maths Analysis and Approaches is for a student who likes algebra, calculus and proof and is aiming for engineering or physical science. Applications and Interpretation is a better fit for business, economics, biology or psychology, with more statistics and technology. Each is available at Standard and Higher Level.",
        "For those planning medicine, Biology and Chemistry at Higher Level are a common pair, with Maths Applications. For engineering, Physics and Maths Analysis at Higher Level are typical. We compare the combination with the target course before lessons start, since a mismatch is costly to fix later.",
        "The internal investigation in each science needs early planning. A tutor can help a student choose a workable question, but the data, analysis and write-up must be the student's own.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects to take?",
      paragraphs: [
        "Cambridge offers Core and Extended tiers in Maths and the sciences. Core tops out at grade C; Extended reaches A*. Anyone aiming for A Level, the IB Diploma or a strong science track should sit Extended, and Core suits students who want a solid base with less pressure.",
        "A typical IGCSE set is six or seven subjects: English, Maths, two sciences, a language and one or two options such as Business, Economics or Computer Science. Hindi as a second language is popular with Indian families and Marathi is worth asking about.",
        "Cambridge and Pearson Edexcel differ in paper design, so a student sits one board's papers per subject.",
        "A diagnostic paper in the free trial usually settles the tier question.",
      ],
    },
  ],

  tutorsIntro:
    "These tutors already teach IB PYP to Diploma courses and Cambridge or Edexcel IGCSE to Indian families online. Each match is built around the programme, subject, level and exam series your child is working towards.",

  process: [
    { title: "Message us", description: "Tell us the board or programme, the subject, where the marks stand now and which hours of the day are free at home in Achalpur." },
    { title: "Meet a tutor on paper", description: "We propose one or two people whose recent teaching matches the course, and explain why each was picked." },
    { title: "Sit a trial", description: "A working hour on a real topic, live on screen, and no fee or promise attached." },
    { title: "Agree the plan", description: "The tutor writes down what will be covered in the first four weeks; you can change it before paying anything." },
    { title: "Settle in", description: "Same slot each week, a short report afterwards, and a quiet swap of tutor if the chemistry is missing." },
  ],

  whyPoints: [
    { title: "Course knowledge over convenience", description: "The person teaching your child has taught the exact IB guide or Cambridge code, wherever they live." },
    { title: "Made for places the IB never reached", description: "With no authorised school in the twin towns, geography is not allowed to decide who your tutor is." },
    { title: "Judge the teaching first", description: "One free hour tells you more than any profile could." },
    { title: "Marks earned by the student", description: "Coursework and essays are never drafted by a tutor; coaching stops where authorship starts." },
    { title: "Reports you can read", description: "After each session you get a few lines on what was done, and every month or so a longer review." },
    { title: "No awkward exits", description: "Fees are quoted before you commit, there is no contract term, and changing tutor needs one message." },
  ],

  faqs: [
    { question: "How can I find an IB tutor in Achalpur?", answer: "Message us with the programme, subject, level and the exam you are heading for. Since neither Achalpur nor Paratwada has an IB school we can verify, we look across the country for someone who has taught that course recently. Expect a short list, a free first hour and a written month plan, with lessons live on video and timed to your household." },
    { question: "Will a tutor come to our house in Achalpur or Paratwada?", answer: "No. Nobody from IB Gram teaches in person in Achalpur, Paratwada or anywhere else outside Gurugram and parts of Delhi NCR. What families get here is private home tuition delivered online: your child sits at a desk at home with a laptop and the tutor teaches them alone for the full hour." },
    { question: "Is IGCSE tuition available for students in the twin towns?", answer: "Yes, for Cambridge and for Pearson Edexcel, delivered online. The tutor is chosen for the paper code and tier, for instance 0580 Extended Maths or 0625 Physics. Some students are enrolled at schools in other cities, some are moving, some are preparing as private candidates. The first hour is treated as a diagnostic." },
    { question: "What does an hour of IB or IGCSE tuition cost in Achalpur?", answer: "It varies with subject, level, tutor and how many hours a week you want, and you are told the figure in writing before the trial. We do not publish rates. As a rule, Diploma Higher Level work is priced above junior-school help. Skipping the bus to Nagpur, and a hostel there, usually changes how families compare." },
    { question: "Does any school in Achalpur teach the IB or IGCSE?", answer: "None that we were able to confirm. The town's schools work to the Maharashtra board or CBSE, and the closest verified Cambridge school we found is in Amravati. Nagpur has more. Should a local school gain authorisation recently, write to us and we will check the IB or Cambridge register before editing this page." },
    { question: "My child is in a Maharashtra board school. Is IGCSE Maths or Science realistic on the side?", answer: "It is, and quite common. Content overlaps more than parents expect, but the papers ask for working shown and reasons given in English sentences. A tutor spends the first weeks on that habit, then on Extended-tier topics beyond the board syllabus. One diagnostic hour tells us how heavy the load will be beside school." },
    { question: "Can we try before we commit?", answer: "Yes, the first lesson is free and uses a real topic from your child's course. After it the tutor sends a plan for the coming month and you decide. If the two do not click, we introduce someone else. Fees are already in writing by then, so nothing about money is left open." },
    { question: "Will the tutor write my child's Internal Assessment or Extended Essay?", answer: "Never. Tutors do not write IAs, Extended Essays, TOK essays or any graded coursework. They will explain what a criterion rewards, discuss whether a question is workable, talk through a method and read what the student has produced. Authorship stays with your child, which is what the IB and Cambridge require." },
    { question: "Which Diploma subjects are available?", answer: "Maths in both versions at HL and SL, the three sciences, Environmental Systems and Societies, Economics, Business Management, Computer Science, Geography, Psychology, English A, and language options such as Hindi B and Marathi B when a tutor is free. Ask about anything else; we will tell you quickly whether it can be staffed." },
    { question: "Do you cover MYP and PYP as well?", answer: "Yes. For MYP the work centres on criterion-marked tasks in the sciences, maths and languages, and on keeping the Personal Project journal in order. For PYP it is reading, writing and number sense, with help on unit tasks. Shorter sessions suit the younger ones, and a parent close by helps in the first weeks." },
    { question: "Can teaching on a screen really stand in for a classroom here?", answer: "For this syllabus in this town, it is the workable option, because no specialist lives nearby. A shared whiteboard, past papers marked while the student watches and a written report after each hour cover most of what a classroom would. The one real requirement is a dependable connection and a quiet corner." },
    { question: "What if the connection drops during a lesson?", answer: "Tell the tutor when it happens or as soon as you can, and the hour is moved, usually by a day or two. A mobile hotspot as backup is sensible, especially for families near Melghat where broadband thins out. Keeping the same evening every week makes such moves easy to manage." },
    { question: "How are tutors vetted?", answer: "We look at degrees, the most recent classes taught in the exact subject and level, and how the person handles mark schemes and criteria. A short sample lesson comes first. After that, your child's trial hour is the test that counts, and if it fails we replace the tutor without argument." },
    { question: "At what point in school should a student begin?", answer: "The earlier in the course the better: Class 11 for the Diploma, Grade 9 for IGCSE, Year 4 for MYP. Early starts leave room to repair gaps before internal deadlines and mocks. Anyone starting late can still use a dense block before the exam; give us the date in your first message." },
    { question: "Can a tutor support Hindi, Marathi or Urdu for these exams?", answer: "Hindi B is offered for the IB at both levels and IGCSE Hindi as a second language is covered. Marathi is possible when a suitable tutor is available. Tell us the level and the exam session and we will confirm before the trial whether the slot can be filled." },
    { question: "Does IB Gram belong to a school or an exam board?", answer: "It does not. IB Gram is a separate tutoring business with no tie to the IB, Cambridge, Pearson Edexcel or any school mentioned here, and none has endorsed or paid it. Schools are named solely so parents can see where campuses stand; each name is checked against public records." },
    { question: "What is the first step?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the programme, subject, level, present grade and the hours you can offer. Have a laptop or tablet with camera and microphone and a stable line ready. A reply, usually within one working day, brings a shortlist and trial slots." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "Where online tuition covers Indian cities without a local IB school." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place tutors do visit homes in person." },
    { label: "IGCSE guide", href: "/igcse/", description: "What the tiers, boards and exam sessions mean." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects, TOK, the Extended Essay and CAS." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and how MYP is assessed." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "How units of inquiry and the Exhibition work." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Which of the two IB Maths courses fits which student." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles arranged by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us and ask for a free first lesson." },
    { label: "Tutoring in Amravati", href: "/amravati/", description: "The district city, home to the closest confirmed Cambridge school." },
    { label: "Tutoring in Akola", href: "/akola/", description: "A Vidarbha neighbour where lessons are also online." },
    { label: "Tutoring in Nagpur", href: "/nagpur/", description: "The regional centre and its international campuses." },
  ],

  closingHeading: "Book the free first hour for your Achalpur student",
  closingBody:
    "Write to us with the board or programme, the subject and level, the present standing and the hours your home can spare. You will get a tutor's name, a paragraph on their background and trial times, all online and without a fee.",
};
