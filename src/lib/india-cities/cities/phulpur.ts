import type { CitySeoPage } from "../types";

/**
 * Phulpur in Prayagraj district, Uttar Pradesh (not the Phulpur in Azamgarh or Agra districts).
 * No IB or Cambridge/Edexcel school was confirmed in Phulpur or Prayagraj, so stripSchools is empty
 * and school clusters point honestly to Lucknow and Varanasi. Online-only; no home visits.
 */
export const phulpur: CitySeoPage = {
  slug: "phulpur",
  countryName: "Phulpur",
  countryNameLong: "Phulpur, Prayagraj district, Uttar Pradesh",
  demonym: "Phulpur",
  flagCode: "in",
  countryCode: "IN",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings and Sunday mornings, steered away from the Magh Mela month, Navratri and the wedding-season weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.55, longitude: 82.1 },
  wikipedia: "https://en.wikipedia.org/wiki/Phulpur,_Prayagraj",
  alternateNames: ["Phulpur Prayagraj", "Phulpur Allahabad"],
  stripSchools: [],

  title: "Phulpur IB & IGCSE Tutors | Online Home Tuition, Prayagraj",
  metaDescription:
    "Online IB and IGCSE tutors for Phulpur, Prayagraj district: live one-to-one lessons in DP, MYP, PYP and Cambridge or Edexcel IGCSE, with a free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Phulpur",
  heroEyebrow: "IB & IGCSE TUITION FOR PHULPUR, PRAYAGRAJ DISTRICT",
  heroSubtitle:
    "Phulpur, the Prayagraj district town on the Varanasi road, is better known for its fertiliser plant and its parliamentary seat than for international schooling, so a family looking for IB or IGCSE home tuition here faces a plain problem: few local teachers know these courses. We solve it by teaching online. A specialist tutor joins your child live, one to one, at home in Phulpur, after a free trial lesson that shows how the teaching works.",
  primaryKeyword: "IB and IGCSE tutors in Phulpur",
  imageAltText: "Student at home in Phulpur near Prayagraj joining a live online IB Physics lesson with a tutor sketching a circuit on a shared whiteboard",
  secondaryKeywords: [
    "IB tutor Phulpur",
    "IGCSE tutor Phulpur",
    "IB home tuition Phulpur",
    "IGCSE home tuition Phulpur",
    "IB private tuition Phulpur",
    "IB Maths tutor Phulpur",
    "IGCSE Maths tutor Phulpur",
    "IB Physics tutor Phulpur",
    "IB Chemistry tutor Phulpur",
    "IB Biology tutor Phulpur",
    "IB DP tutor Phulpur",
    "IB MYP tutor Phulpur",
    "IB PYP tutor Phulpur",
    "IGCSE online tuition Phulpur",
    "online IB tutor Prayagraj district",
    "IB tutor Allahabad",
    "IGCSE tutor Prayagraj",
    "Edexcel IGCSE tutor Uttar Pradesh",
    "IB Economics tutor Phulpur",
  ],

  heroTrustPoints: [
    "Tutors matched to your child's exact IB subject and level or IGCSE board code",
    "Live one-to-one video lessons that work on home broadband or mobile data",
    "Free trial lesson, with the rate put in writing before you decide",
    "Short written notes after each lesson so parents can follow along",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "IB programmes covered" },
    { value: "Cambridge, Edexcel", label: "IGCSE boards covered" },
    { value: "Online only", label: "No tutor visits in Phulpur" },
    { value: "Free trial", label: "First lesson at no cost" },
  ],

  intro: {
    heading: "IB and IGCSE help for families around Phulpur",
    paragraphs: [
      "Phulpur lies in the Prayagraj district of Uttar Pradesh, on the road and rail corridor towards Varanasi, about twenty-odd kilometres from the Sangam city. Most readers will know it for the large IFFCO fertiliser unit, for the political history of the Phulpur parliamentary seat, and for its market. Its schools follow the UP Board, CBSE and ICSE. International syllabuses are not part of the picture, so we say so at the outset.",
      "Even so, the enquiries arrive. Employees at the fertiliser plant and in government offices get transferred. Doctors, lawyers and businessmen in the Prayagraj area send children to boarding schools. Relatives in Dubai, London or Toronto sometimes ask that a child follow an international course. In every case, the stumbling block is the same: nobody nearby has taught the IB or IGCSE.",
      "IB Gram offers a direct fix. Our tutors are based in India, teach on Indian Standard Time and take students one to one over video. A shared whiteboard replaces the blackboard, and each lesson ends with a short written note. The first lesson is free, rates are quoted in writing before you decide, and a poor match is replaced.",
      "A word on terms. You may have searched for home tuition. Here it means private tuition your child receives at home, over a screen. Tutors do not come to Phulpur. The only in-person home tuition we run is in Gurugram and parts of Delhi NCR, and we would rather state that clearly than let you discover it later.",
    ],
    bullets: [
      "IB PYP, MYP and Diploma subjects, and Cambridge and Pearson Edexcel IGCSE",
      "Timetables built around the Magh Mela month, Navratri, Diwali and the wedding season",
      "Honest advice on whether an international route suits your plans",
      "Tutors coach; they never write Internal Assessments, Extended Essays or coursework",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "A themed, inquiry-based primary course. Tutors keep sessions short and talkative, centred on reading, spoken English and number reasoning.",
      countryNote:
        "A child from a Hindi-medium home in Phulpur benefits most from English storytelling and discussion before joining a PYP classroom.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups judged against criteria, plus interdisciplinary units and a personal project in the final year.",
      countryNote:
        "Students leaving UP Board classes for an MYP school find the shift from recall to explanation the main adjustment, and we rehearse it early.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects across Higher and Standard Level, plus an Extended Essay, Theory of Knowledge and CAS.",
      countryNote:
        "DP students linked to Phulpur are generally at boarding schools or in other cities; they use our lessons during term evenings and holidays at home.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A shorter IB route combining academic subjects with career-related study.",
      countryNote:
        "We support the CP only when a school in your child's real plans offers it.",
    },
  ],
  programmesIntro:
    "Four IB programmes exist, but a Phulpur family needs to know only the one its next school runs. We prepare for that, not for an abstract ideal.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, algebra and proof-style reasoning for would-be engineers and scientists." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics and modelling with technology, suited to commerce and social science." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, waves, fields and thermal physics with experimental design." },
    { name: "Chemistry", levels: "SL and HL", description: "Quantitative chemistry, kinetics and organic mechanisms; relevant to students with fertiliser-industry families." },
    { name: "Biology", levels: "SL and HL", description: "Molecular biology, genetics, ecology and human physiology." },
    { name: "Economics", levels: "SL and HL", description: "Markets, macroeconomics and development, using Indian agricultural and industrial examples." },
    { name: "Business Management", levels: "SL and HL", description: "Organisations, finance and strategy through case studies." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming, data structures and computational thinking." },
    { name: "History", levels: "SL and HL", description: "Twentieth-century world history and South Asian options; a good fit for students from Prayagraj's historical setting." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Textual analysis and structured essays for students from Hindi-medium schooling." },
    { name: "Hindi A: Literature", levels: "SL and HL", description: "Prose and poetry in Hindi, a natural strength in Uttar Pradesh." },
    { name: "Theory of Knowledge", levels: "Core", description: "Argument and discussion coaching; essay and exhibition remain the student's own work." },
  ],
  subjectsIntro:
    "These are the IB subjects tutors here teach most. History, Geography and Psychology are also available on request after a short discussion.",

  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core and Extended", description: "Algebra, geometry, statistics and, at Extended, functions and calculus basics." },
    { name: "Physics", levels: "Core and Extended", description: "Forces, electricity, waves and atomic physics with practical analysis." },
    { name: "Chemistry", levels: "Core and Extended", description: "Atomic structure, reactions, organic chemistry and the alternative-to-practical paper." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, humans, plants and ecosystems with data handling." },
    { name: "Combined Science", levels: "Core and Extended", description: "One course covering the three sciences." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Reading, directed writing and speaking components." },
    { name: "Hindi as a Second Language", levels: "Core and Extended", description: "Comprehension and composition suited to Hindi speakers." },
    { name: "Business Studies and Economics", levels: "Core and Extended", description: "Data response and structured answers on enterprise and markets." },
    { name: "Computer Science", levels: "Core and Extended", description: "Algorithms, pseudocode, networks and data representation." },
  ],
  igcseSubjectsIntro:
    "IGCSE is usually a private-candidate route for Phulpur students, or a boarding-school subject they need help with at home. We follow whichever Cambridge or Edexcel specification applies.",

  regionsTitle: "Phulpur and the places around it",
  regionsIntro:
    "Phulpur is a small town, so the useful geography is its main roads and the larger cities families use for schools, hospitals and exams. These notes describe study conditions; no tutor travels to any of these areas.",
  regions: [
    { name: "Phulpur market and town centre", note: "Shops, courts and the nagar panchayat office. Evening noise is high around the market, so a room away from the street works best for lessons." },
    { name: "Residential colonies near the fertiliser unit", note: "Company and government-employee families, the group most affected by transfers and most likely to ask about international schools." },
    { name: "Along the Prayagraj-Varanasi road", note: "Families who commute to Prayagraj for work or school and want evening lessons after the drive home." },
    { name: "Villages in Phulpur tehsil", note: "Agricultural households where mobile data is the main connection; audio-first lessons with a simple whiteboard are most reliable." },
    { name: "Prayagraj: Civil Lines and Allahpur", note: "The city's central school and coaching belt, about an hour away by road. Many Phulpur parents know it through work." },
    { name: "Prayagraj: Jhunsi and the Sangam side", note: "Areas that fill during the Magh Mela and Kumbh periods, when roads and connectivity are strained." },
    { name: "Handia and Soraon", note: "Neighbouring towns in the district whose families travel through Phulpur or meet it on rail journeys." },
    { name: "Varanasi", note: "The other large city on the same corridor, and home to a school offering an international curriculum." },
  ],

  schoolClusters: [
    {
      city: "Phulpur and Prayagraj district",
      note: "We could not confirm an IB or Cambridge/Edexcel school in Phulpur or in Prayagraj city. Local options for these syllabuses are limited, so online tuition and private candidacy are the realistic routes.",
      schools: [],
    },
    {
      city: "Nearby: Lucknow",
      note: "About 200 km away; the nearest large city with confirmed IB PYP and Cambridge IGCSE schools. Most families treat it as a relocation or boarding decision.",
      schools: ["Modern School, Lucknow", "City Montessori School, Cambridge Campus", "DPS Gomti Nagar Jr"],
    },
    {
      city: "Nearby: Varanasi",
      note: "Close by rail and road; one school there offers an international curriculum.",
      schools: ["Sunbeam International School, Varuna"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "The most common longer-distance move for UP families, with many established IB and IGCSE schools.",
      schools: ["Vasant Valley School, Delhi", "The British School, New Delhi"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent online tutoring service and has no affiliation with the IB, Cambridge, Pearson or any school named here. The schools are listed only to show where international syllabuses are taught in the wider region; check admissions directly.",

  tutorsIntro:
    "Our tutors teach live online from India on IST. None of them visits Phulpur; each lesson is a video call matched to your child's syllabus and level.",
  modesIntro:
    "In Phulpur all lessons run online. The three arrangements below differ in tempo and purpose.",
  modes: [
    {
      title: "Weekly online lessons",
      description: "A fixed weekly slot with the same tutor, placed after school or coaching hours.",
      bullets: [
        "One tutor who learns your child's habits",
        "Shared whiteboard and marked past papers",
        "Works on ordinary broadband or 4G",
        "Moves easily around wedding-season travel",
      ],
    },
    {
      title: "Mock and exam burst",
      description: "Several lessons a week for a few weeks, built around timed papers and weak-topic repair.",
      bullets: [
        "Papers marked to current schemes",
        "Gap list agreed after the first paper",
        "Best booked three weeks ahead",
        "Planned around the Magh Mela and Diwali",
      ],
    },
    {
      title: "Switch-to-international bridge",
      description: "Short, targeted help for a child about to join an IB or IGCSE school in Lucknow, Delhi NCR or a boarding school.",
      bullets: [
        "Academic English writing",
        "Maths and science vocabulary reset",
        "Practice with criteria-based marking",
        "Plain-language summary for parents",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families near Phulpur",
      paragraphs: [
        "Start with the facts we could verify. Phulpur and Prayagraj have well-regarded schools affiliated with the UP Board, CBSE and ICSE, and a deep tradition of coaching for Civil Services, engineering and medicine. We could not confirm any school in Phulpur or Prayagraj city offering the IB or a Cambridge or Edexcel IGCSE, so this page lists none.",
        "The families who contact us generally have a reason to look further. Plant and government employees can be transferred to Lucknow, Delhi or Pune. Prayagraj doctors and lawyers sometimes enrol a child in a boarding school in the hills. Relatives abroad may suggest an international qualification to keep study-abroad options open. Some families simply want to understand whether the IB is a better fit than another Class 11 stream.",
        "For all of them, the practical hurdle is the same. Teachers who have taught IB criteria or Cambridge command words are hard to find in the district. Online tuition removes the distance problem and allows a student to learn from a specialist whose experience matches the course.",
        "Where a family has not decided, the free trial doubles as a consultation. We explain what each route asks of a child and say honestly if staying on the current board is the better plan.",
      ],
    },
    {
      heading: "UP Board, CBSE, ICSE, IGCSE or IB: which fits a Phulpur student?",
      paragraphs: [
        "The UP Board and CBSE follow national or state syllabuses and test mainly through annual board examinations. ICSE leans more towards English and application. IGCSE offers a menu of subjects examined by Cambridge or Pearson, while the IB Diploma pairs six subjects with an essay, a knowledge course and creative or service work.",
        "For Phulpur students, the differences show in classroom habits. The UP Board and CBSE reward neat, complete answers drawn from the book. IGCSE rewards understanding of command words and the ability to apply ideas to new data. The IB asks for argument, evidence and independent investigation.",
        "No route is superior in itself. If your aim is a seat through JEE, NEET or a state exam in Uttar Pradesh, CBSE or the UP Board are the shortest path. If your aim is a degree abroad, the IB and A Level are better understood. IGCSE can serve as the bridge.",
        "The table sets out the main differences.",
      ],
      table: {
        caption: "Boards compared for a Phulpur family",
        columns: ["Feature", "UP Board / CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Typical stage", "Classes 9-12", "Classes 9-10, ages 14-16", "Classes 11-12, ages 16-19"],
          ["Language of instruction", "Hindi or English", "English", "English with a second language"],
          ["Assessment", "Annual board exams", "Externally set subject exams", "Exams plus internal assessments and core"],
          ["Skills rewarded", "Recall and completeness", "Application and structured answers", "Inquiry, essays and evaluation"],
          ["Availability near Phulpur", "Very common", "Private candidacy or boarding", "No local school confirmed"],
          ["Entrance exams in India", "JEE, NEET and state exams directly", "Requires equivalence checks", "AIU equivalence; JEE and NEET with right subjects"],
        ],
      },
    },
    {
      heading: "What do IB and IGCSE tuition fees depend on in Phulpur?",
      paragraphs: [
        "We do not publish a price list. Rates are put in writing after the free trial, once we know the subject, the level and how many lessons you need. Quoting one number without that knowledge would mislead.",
        "Several factors move the rate. The course comes first: IB Higher Level Chemistry demands more preparation than IGCSE Core English. The tutor's experience with that syllabus matters next. The calendar also counts, since exam-year students usually need more lessons and more marked papers.",
        "One thing you do not pay for is travel. Our tutors do not travel from Prayagraj or Varanasi to your home, so the rate covers teaching and preparation only. That also means no hidden transport charges, and no difference between a Phulpur family and one in a big city.",
        "To keep costs sensible, many families begin with a block of four to six lessons before a test, or alternate live lessons with independent practice on past papers. We will say plainly if fewer lessons would do.",
      ],
      bullets: [
        "Written rates after the trial lesson",
        "Higher Level and exam-year tuition usually costs more",
        "Blocks of lessons suit tighter budgets",
        "Notes, marking and parent updates are part of the service",
      ],
    },
    {
      heading: "Should a Phulpur student choose online tuition over Prayagraj coaching?",
      paragraphs: [
        "It depends on the target. Prayagraj has a famous coaching culture for civil services, JEE and NEET, and those classes are excellent for those exams. They do not teach IB criteria or Cambridge command words, and the journey of an hour or more each way eats study time.",
        "A local private tutor can be reassuringly familiar, especially for primary years, but finding one who knows IB or IGCSE in a town like Phulpur is unlikely. Self-study from past papers works for a disciplined student, though without marked feedback many students repeat mistakes.",
        "Online one-to-one tuition combines the benefits of a specialist with no travel. It does need a reliable connection, a quiet corner and a student who arrives with questions. Many Phulpur families combine it with a local school or class for the main board.",
        "The table shows the trade-offs.",
      ],
      table: {
        caption: "Study options for IB and IGCSE from Phulpur",
        columns: ["Option", "Advantage", "Drawback", "Best for"],
        rows: [
          ["Online one-to-one", "Specialist tutor for the exact course and written feedback", "Needs internet and discipline", "IB or IGCSE students anywhere in Phulpur tehsil"],
          ["Prayagraj coaching class", "Peers and a strong exam routine", "Long commute; syllabus mismatch", "JEE, NEET and civil-service preparation"],
          ["Local private tutor", "Convenient", "Rarely knows IB marking", "Primary help in English or Maths"],
          ["Self-study", "Free, own pace", "No feedback on lost marks", "Revision alongside tutored lessons"],
        ],
      },
    },
    {
      heading: "Exam months, the Magh Mela and the Phulpur study calendar",
      paragraphs: [
        "International exams follow a fixed calendar: IB Diploma in May and November, IGCSE in May-June and October-November, with a January series for some boards. A Phulpur student sitting exams through a centre in Lucknow, Delhi or Prayagraj should book travel and lodging early.",
        "The local calendar matters. Prayagraj's Magh Mela in January and February, and the Kumbh years, bring huge crowds, closed roads and stretched mobile networks. Navratri, Dussehra and Diwali break the autumn term, and the winter wedding season fills households with guests. Summers are very hot, and the monsoon occasionally brings power cuts.",
        "We plan around these facts. Heavy syllabus work is done before the Magh Mela, mock exams are timed away from Diwali, and summer lessons move to early morning or evening. If a connection fails, we reschedule the lesson.",
        "The table is a template. Schools and centres set their own dates.",
      ],
      table: {
        caption: "A typical year for a Phulpur IB or IGCSE student",
        columns: ["Months", "Local context", "Study emphasis"],
        rows: [
          ["April to June", "Heat and loo winds; May exams", "Early morning or evening lessons; final revision"],
          ["July to September", "Monsoon, new term", "Syllabus coverage and internal-assessment planning"],
          ["October to November", "Navratri, Dussehra, Diwali; November exams", "Revision between festivals"],
          ["December to February", "Winter fog, wedding season, Magh Mela; mocks", "Timed papers with feedback"],
          ["March", "Holi and pre-exam consolidation", "Weak-topic repair"],
        ],
      },
    },
    {
      heading: "What universities can IB and IGCSE students from Phulpur aim for?",
      paragraphs: [
        "Indian universities admit IB Diploma holders on the basis of Association of Indian Universities equivalence. Central universities generally route applicants through CUET-UG, so subject mapping needs early attention. The University of Allahabad, MNNIT Allahabad and IIIT Allahabad in Prayagraj are familiar names for local students.",
        "For engineering and medicine, JEE Main and NEET-UG are the usual gateways, and IB and IGCSE students are eligible if their subjects meet the published criteria. Physics, Chemistry and Mathematics or Biology are expected. Counselling rules change, so verify the current brochure.",
        "For study abroad, the IB Diploma is understood by universities in the UK, Canada, Australia and the US. A student from Phulpur can compete on equal terms, but should plan subjects and tests early. Predicted grades play a part in offers.",
        "We coach and teach. We do not act as admission agents, and we do not promise a seat or a score.",
      ],
      bullets: [
        "Request AIU equivalence early",
        "Check CUET-UG subject mapping for each university",
        "Keep Physics, Chemistry and Maths strong for JEE or NEET goals",
        "Start overseas applications a year before the diploma finals",
      ],
    },
    {
      heading: "IB Mathematics and sciences: what changes after the UP Board",
      paragraphs: [
        "Students from UP Board and CBSE classes arrive with strong calculation habits. IB Mathematics asks them to add reasoning: justify a step, state a conclusion in a sentence, interpret a result. Analysis and Approaches leans on algebra and calculus. Applications and Interpretation leans on statistics and modelling.",
        "The Mathematics internal assessment is a personal exploration. A tutor can explain the criteria and talk through topic choices but cannot write or edit the piece.",
        "In Physics and Chemistry, questions often supply unfamiliar data and ask the student to analyse or critique a method. Biology expects exact terms and careful reading of graphs. Students who revise only from notes find the move challenging, while those who practise explaining aloud adapt quickly.",
        "A common pattern is a lesson on a topic, a handful of past-paper questions during the week, and a correction session at the start of the next lesson. After six to eight weeks, timing and confidence usually improve.",
      ],
    },
    {
      heading: "Choosing IGCSE subjects and tiers from Phulpur",
      paragraphs: [
        "IGCSE subjects mostly come in Core and Extended tiers. Core caps the top grade, Extended does not. A student who plans to go on to A Level or the IB in Mathematics or the sciences should aim for Extended where possible.",
        "A balanced set includes English, Mathematics, at least two sciences and a language or social science. For Hindi-speaking families, Hindi as a Second Language is a manageable scoring subject, and Business Studies or Economics suit commerce-minded students.",
        "Private candidates need to check that their centre is registered with the right board, can host science practicals or alternative-to-practical papers, and offers the chosen subjects. Cambridge and Pearson Edexcel differ in paper layout and mark scheme, so tutors begin from the correct specification.",
        "We teach both. In the first session we confirm the subject code so that past papers match the exam.",
      ],
    },
    {
      heading: "How can parents in Phulpur judge whether tutoring is working?",
      paragraphs: [
        "Parents often cannot check the subject itself, since few of us studied the IB or IGCSE. So we make progress visible in simpler terms. After every lesson you receive a short note listing the topic, what the child managed alone, and what needs another go. Over a month those notes read like a diary of the course.",
        "Look for three signs. First, the child begins to ask better questions, such as why a step is allowed rather than only what the next step is. Second, practice-paper marks rise on the same type of question, not just in total. Third, written answers get shorter and sharper, because the child has learned what the examiner is looking for.",
        "If none of these appears after four to six lessons, say so. Sometimes the fault is the tutor match, sometimes the plan, and sometimes the child needs a break or a different subject sequence. We would rather adjust than keep a lesson slot that is not helping.",
        "It also helps to share the school's own reports or past test papers. A Phulpur parent who forwards a photograph of a returned test gives the tutor more to work with than any general description, and it keeps the lessons tied to what the child is actually asked at school.",
      ],
    },
  ],

  process: [
    { title: "Contact us", description: "Email support@ibgram.com or WhatsApp +91 7439 368 115 with class, board, subject and exam target." },
    { title: "Explain the plan", description: "We ask about school, timing and where marks are lost." },
    { title: "Try a free lesson", description: "A tutor for that course teaches a live online trial." },
    { title: "Agree in writing", description: "Rates and plan come in writing before payment." },
    { title: "Review and adjust", description: "Weekly lessons with notes; we change the tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Specialist matching", description: "Tutors teach the exact IB subject and level or IGCSE code." },
    { title: "Practical for small-town bandwidth", description: "Works on modest connections, with plans for power cuts." },
    { title: "Free first lesson", description: "See the teaching before you decide." },
    { title: "Rates in writing", description: "You know the cost beforehand." },
    { title: "Notes after lessons", description: "Parents see what was taught." },
    { title: "Ethical coaching", description: "Tutors never write assessed work." },
  ],

  faqs: [
    { question: "Can I find an IB tutor in Phulpur?", answer: "Online, yes. IB Gram tutors teach live over video from India, and your child studies at home in Phulpur. Tutors do not visit homes here; in-person tuition runs only in Gurugram and parts of Delhi NCR. A free trial lets you judge the teaching and the connection." },
    { question: "Is there an IB or IGCSE school in Phulpur?", answer: "We could not confirm one in Phulpur or in Prayagraj city. Local schools follow the UP Board, CBSE or ICSE. The nearest confirmed options we found are in Lucknow and Varanasi, and we name no school we cannot verify." },
    { question: "Do you offer home tuition in Phulpur?", answer: "Only online. Home tuition here means lessons your child takes at home on a laptop. Nobody visits your house. This gives access to specialist IB and IGCSE tutors you would not find locally." },
    { question: "How much does IB or IGCSE tuition cost?", answer: "Rates are quoted in writing after the free trial and depend on subject, level, tutor experience and number of lessons. Higher Level and exam-year tuition usually costs more. We do not publish a flat price list." },
    { question: "Can my child take IGCSE as a private candidate from Phulpur?", answer: "Usually yes, through an approved exam centre in a city such as Lucknow or Delhi. The centre registers the candidate and hosts papers, including science practicals. We cannot register you but advise on board, subjects and timing, and teach online." },
    { question: "What IB subjects do Phulpur students ask for?", answer: "Mathematics, Physics, Chemistry, Biology, Economics and English lead the list. Hindi A is popular for the language requirement. History and Business Management are also requested. Others can be arranged after a conversation." },
    { question: "Will a tutor write the Internal Assessment or Extended Essay?", answer: "No. Tutors coach only. They can explain criteria, help you choose a topic and show how a strong piece is structured, but the work must be your child's own." },
    { question: "How do we book a trial?", answer: "Send the class, subject and exam session to support@ibgram.com or WhatsApp +91 7439 368 115. We propose a tutor and a trial time on IST, usually within a few days. The trial is free and ends with a short note." },
    { question: "Is IB or IGCSE accepted for admission in India?", answer: "Generally yes, with AIU equivalence and, for central universities, CUET-UG. JEE and NEET accept IB and IGCSE students with suitable subjects. Always confirm requirements with the institution before choosing subjects." },
    { question: "Can you prepare my child for a move to an IB school in Lucknow or Delhi?", answer: "Yes. A bridge course covers subject vocabulary, academic English and criteria-based marking. Starting two or three months before the move works well, and we adapt it to the new school's course." },
    { question: "How do you cope with power cuts and fog?", answer: "We reschedule. Winter fog and summer load-shedding can interrupt lessons. Tell the tutor early, use a phone hotspot as backup, and a lost lesson is made up at a convenient time." },
    { question: "What internet is needed?", answer: "A steady broadband or 4G connection is enough for voice, video and a whiteboard. Wired earphones reduce echo. If the picture drops, the tutor continues by audio and sends notes afterwards." },
    { question: "When are IB and IGCSE exams?", answer: "IB Diploma exams are in May and November. IGCSE has May-June and October-November series, with January for some boards. Your school or centre confirms dates." },
    { question: "Can younger children get PYP or MYP support?", answer: "Yes. PYP help builds reading, English speech and number sense in short sessions. MYP help works on criteria and the personal project. A parent is usually nearby for early lessons." },
    { question: "What if we dislike the tutor?", answer: "Tell us and we change the tutor at no extra cost. The new tutor is briefed on what has been covered so the course continues smoothly." },
    { question: "Do tutors use Hindi?", answer: "Lessons are in English because the exams are. Tutors can briefly clarify a hard idea in Hindi when it helps a younger student. The balance moves to English over time." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How our online service works nationwide." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB subjects and programmes." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE support." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure and assessment." },
    { label: "IB Primary Years", href: "/programmes/pyp/", description: "How PYP works." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI guidance." },
    { label: "Meet the tutors", href: "/tutors/", description: "IB and IGCSE tutor profiles." },
    { label: "Contact us", href: "/contact-us/", description: "Book a free trial." },
    { label: "Prayagraj IB and IGCSE tutoring", href: "/prayagraj/", description: "The district's main city, about twenty kilometres away." },
    { label: "Varanasi IB and IGCSE tutoring", href: "/varanasi/", description: "The next large city along the corridor." },
    { label: "Lucknow IB and IGCSE tutoring", href: "/lucknow/", description: "The state capital with confirmed international schools." },
  ],

  closingHeading: "Try a free lesson from Phulpur",
  closingBody:
    "Send the class, the subject and the school or exam your child is aiming for. We will match a tutor, arrange a free online trial and put rates in writing. The lesson reaches your child at home in Phulpur; nobody needs to travel.",
};
