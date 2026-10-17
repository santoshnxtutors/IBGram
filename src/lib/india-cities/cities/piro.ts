import type { CitySeoPage } from "../types";

/**
 * Piro is a block town in Bhojpur district, Bihar. No IB or Cambridge school there could be confirmed,
 * so stripSchools is empty and the clusters use boarding and relocation cities whose school names
 * were taken from the already checked Patna page.
 */
export const piro: CitySeoPage = {
  slug: "piro",
  countryName: "Piro",
  countryNameLong: "Piro, Bihar",
  demonym: "Piro",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late afternoons once school and tuition rounds are over, and after-dinner slots that sit clear of power-cut hours",
  lastUpdated: "2026-09-21",
  state: "Bihar",
  stateCode: "IN-BR",
  geo: { latitude: 25.3333, longitude: 84.4167 },
  wikipedia: "https://en.wikipedia.org/wiki/Piro,_Bihar",
  alternateNames: ["Piro Bhojpur", "Piro Bihar", "Piro Arrah", "Piro Ara"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Piro | Online Tuition at Home, Bihar",
  metaDescription:
    "Online IB and IGCSE tutors for Piro, Bhojpur: live private lessons from home, tutors matched to your syllabus, written notes and a free first lesson.",
  h1: "IB and IGCSE Tutors and Online Tuition at Home in Piro",
  heroEyebrow: "IB & IGCSE TUITION FOR PIRO, BHOJPUR, BIHAR",
  heroSubtitle:
    "Home tuition for an IB or IGCSE student in Piro means a live online lesson, because our tutors do not visit homes in Bihar; in-person home tuition is limited to Gurugram and parts of Delhi NCR. The lesson itself is private, one-to-one and matched to your child's exact programme and subject. Piro sits about forty kilometres from Arrah and further from any international school, so a tutor who already knows the syllabus is worth more here than in a metro.",
  primaryKeyword: "IB and IGCSE tutors in Piro",
  imageAltText: "Piro student with a laptop and notebook in a live online IGCSE Mathematics tutoring session",
  secondaryKeywords: [
    "IB tutor in Piro",
    "IGCSE tutor in Piro",
    "IB home tuition Piro",
    "IGCSE home tuition Piro",
    "IB private tuition Piro",
    "IB Maths tutor Piro",
    "IGCSE Maths tutor Piro",
    "IB Physics tutor Piro",
    "IB Chemistry tutor Piro",
    "IB Biology tutor Piro",
    "IB DP tutor Piro",
    "IB MYP tutor Piro",
    "IB PYP tutor Piro",
    "IGCSE online tuition Piro",
    "IB tutor Piro Bhojpur",
    "IGCSE tutor Arrah",
    "IB online classes Bhojpur Bihar",
    "IB tuition Bihar town",
  ],

  heroTrustPoints: [
    "Live one-to-one lessons by video, never recorded playlists",
    "Tutors who have taught IB DP, MYP, PYP and Cambridge or Edexcel IGCSE",
    "Time slots that work around power cuts and school shifts in Bihar",
    "Free first lesson and a written summary after each session",
    "No-fee tutor swap if the first match is not right",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before any commitment" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "An international syllabus, studied from a Bihar block town",
    paragraphs: [
      "Piro is a block headquarters and municipal town in Bhojpur district, Bihar, on the railway and road that link Arrah with Sasaram, with Jitaura a few kilometres away. Local classrooms follow the Bihar board or CBSE, and conversation at home moves between Bhojpuri and Hindi. A family here who chooses the IB or Cambridge and Edexcel IGCSE is making an unusual choice, often because a parent works for the railways, a bank or the armed forces and expects a posting, or because relatives in the Gulf, the UK or the United States have made the international route feel natural.",
      "What follows is practical. The nearest city with international campuses is far away, and the nearest tutor who has marked an IB Chemistry Paper 3 may be in another state. Our IB and IGCSE tutors in Piro teach live online, from India, on Indian time, to a child sitting at the family table. The lesson is private, the note afterwards is written, and the same person can follow a student from MYP to the Diploma.",
      "The sections below explain which routes into the IB and IGCSE are realistic from Bhojpur, how the Bihar board compares, what shapes the fee, how Chhath and the monsoon fit around exam sessions, and where students go next. We are an independent service with no connection to the IB, Cambridge, Pearson or any school, and tutors explain and coach but never write assessments or coursework for a student.",
    ],
  },

  programmesIntro:
    "Four IB programmes exist, yet few reach a Bhojpur family in sequence. They tend to arrive after a move or through an online school, and the tutor's job shifts to match.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "A transdisciplinary primary programme with units of inquiry and an Exhibition at the end. Private help is short and warm: reading together, number talk and learning to explain a thought.",
      countryNote:
        "A child in Piro is often bilingual in Bhojpuri and Hindi before English. Brief lessons in English build vocabulary for PYP without overwhelming the day.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked against published criteria, with a Personal Project. Tutors teach how to decode a task and write to the descriptors.",
      countryNote:
        "Switching from a Bihar board textbook to criterion-based marking can shock a student. A weekly MYP tutor smooths the first two terms.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects with Theory of Knowledge, the Extended Essay and CAS. Tutoring supports the examined papers and the method of internal assessments, not their writing.",
      countryNote:
        "A Diploma student studying from Bhojpur has few teachers for Higher Level content nearby. A reliable tutor covers that gap at the pace the course demands.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pairing of DP courses with a career-related study and reflective project. Tutors help with the DP courses and academic English.",
      countryNote:
        "CP is almost unknown in Bihar. We handle requests one by one and match a tutor to the courses the student takes.",
    },
  ],

  subjectsIntro:
    "Tutors are picked for the exact course and level and for the kind of patience a student needs when the earlier syllabus was Bihar board.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, algebra, vectors and reasoning, with Paper 1 practice built up in short regular blocks." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology-supported solutions with clear written method." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, thermal physics, waves and fields, with data analysis and practical write-ups." },
    { name: "Chemistry", levels: "SL / HL", description: "Moles, energetics, kinetics, equilibrium and organic synthesis, with calculation habits that save marks." },
    { name: "Biology", levels: "SL / HL", description: "Cells, genetics, physiology and ecology, with the vocabulary examiners reward." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and development economics, with examples from Indian agriculture and migration that fit a Bihar student." },
    { name: "Business Management", levels: "SL / HL", description: "Case-study reading, finance calculations and applying business tools." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and exam pseudocode." },
    { name: "Psychology", levels: "SL / HL", description: "Studies, evaluation vocabulary and extended-response structure." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis, comparative essays and the individual oral." },
    { name: "Hindi A / Hindi B", levels: "SL / HL", description: "Literary analysis for native Hindi speakers and structured writing for those taking Hindi B." },
    { name: "History", levels: "SL / HL", description: "Source analysis and essay planning, with room to use South Asian topics where the syllabus allows." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion practice on knowledge questions and the exhibition, coached on structure only." },
  ],
  igcseSubjectsIntro:
    "IGCSE tutoring covers Cambridge and Pearson Edexcel. The Core or Extended tier is picked early because it sets the top grade available.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics, with the tier choice made on evidence." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "Calculus and functions for students going on to IB Mathematics AA or A Level." },
    { name: "Physics (0625 / 4PH1)", levels: "Core / Extended", description: "Forces, electricity, waves and the practical-skills paper." },
    { name: "Chemistry (0620 / 4CH1)", levels: "Core / Extended", description: "Moles, reactivity, organic chemistry and analysis questions." },
    { name: "Biology (0610 / 4BI1)", levels: "Core / Extended", description: "Cells, inheritance and ecology, with exam wording for experiments." },
    { name: "Computer Science (0478)", levels: "Single tier", description: "Programming logic, databases and trace tables." },
    { name: "English as a Second Language", levels: "Single tier", description: "Reading, directed writing and speaking for students from Hindi and Bhojpuri homes." },
    { name: "Hindi as a Second Language (0549)", levels: "Single tier", description: "Comprehension, letter and essay writing." },
    { name: "Economics (0455) and Business Studies (0450)", levels: "Single tier", description: "Definitions, calculations and data response." },
  ],

  regionsTitle: "Piro, Bhojpur and the nearby towns we teach",
  regionsIntro:
    "Every lesson is online, so what matters is the evening: electricity, mobile data and how far a child has to travel to school or coaching. Here is how that looks across the area.",
  regions: [
    { name: "Piro town", note: "The block headquarters, where most private schools and tuition shops sit; broadband and 4G are usable for video lessons in most homes." },
    { name: "Piro railway station side", note: "Families connected with the railways often live near here and are used to postings, which is one reason some of them explore international syllabuses." },
    { name: "Jitaura", note: "A small nearby settlement a few kilometres away; students here share the same school buses and evening timetable as Piro." },
    { name: "Arrah", note: "The district headquarters about forty kilometres away, with Veer Kunwar Singh University and the largest school choice in Bhojpur." },
    { name: "Behea", note: "A town in Bhojpur district on the Arrah side, where families commute to Arrah and Buxar for study." },
    { name: "Koilwar", note: "A town near the Sone river bridge on the route to Patna; students may combine school with trips to the state capital." },
    { name: "Shahpur", note: "A block town in Bhojpur district with a mix of agricultural and service-sector families." },
    { name: "Jagdishpur", note: "A historic town linked with Babu Kunwar Singh, with growing numbers of families who value English-medium study." },
    { name: "Sasaram", note: "In Rohtas district to the south, a rail junction town students may reach for exams or coaching." },
    { name: "Patna", note: "The state capital, the usual place for entrance coaching, passport work and university visits." },
  ],

  schoolClusters: [
    {
      city: "Piro and Bhojpur district",
      note: "We could not confirm any IB or Cambridge school in Piro or elsewhere in Bhojpur, so local options are limited. Students here usually study through online schools, as private IGCSE candidates, or after relocating.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The nearest large city with confirmed IB and Cambridge campuses, reachable by train, and a recognised option for families considering boarding or a move.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "The Cambridge School, Calcutta"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Several established IB campuses sit in Delhi and Noida; Bihar families consider them for boarding or after a work posting.",
      schools: ["Vasant Valley School, Delhi", "Sanskriti School, Delhi", "Step by Step School, Noida"],
    },
    {
      city: "Nearby: Mussoorie",
      note: "A hill-station boarding option well known to Bihar families; the school below is an authorised IB World School.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],
  schoolDisclaimer:
    "This is an independent tutoring service with no tie to any school. Schools in Kolkata, Delhi, Noida and Mussoorie are named only because they are publicly known to offer an international curriculum. They are not recommendations, and families should check programmes and admission with each school.",

  tutorsIntro:
    "Our tutors are spread across India and teach on Indian time. For Piro that means you are not stuck with whoever lives in Bhojpur; the match can be made on how deeply the tutor knows your subject and how well they teach.",

  modesIntro:
    "In Piro lessons run online only, but there is more than one way to arrange them.",
  modes: [
    {
      title: "Online home tuition, one to one",
      description: "A private lesson on video with a shared board, taken at your own table.",
      bullets: [
        "No tutor visits in Piro; home visits operate only in Gurugram and parts of Delhi NCR",
        "A laptop, a notebook and headphones are all that is needed",
        "Written working is photographed and discussed live",
        "Parents receive a short note after each lesson",
      ],
    },
    {
      title: "Short intensive before the papers",
      description: "A focused burst of lessons ahead of the May or November exam session.",
      bullets: [
        "Several lessons a week for about a month",
        "Past papers marked against the official scheme",
        "Weak topics rebuilt from mock results",
        "Rest days kept in before the first paper",
      ],
    },
    {
      title: "Year-long weekly cover",
      description: "One regular lesson per subject, all year, with the same tutor.",
      bullets: [
        "Keeps the student ahead of a fast syllabus",
        "Fits MYP and the first year of the Diploma",
        "Reschedules easily around Chhath, Holi and school exams",
        "Starts with a free trial lesson",
      ],
    },
  ],

  sections: [
    {
      heading: "How does a family in Piro get onto an IB or IGCSE path?",
      paragraphs: [
        "There are four doors, and each leads to a different kind of tutoring need. The first is an online international school, with classes streamed to the child at home. The second is a boarding or day school in a city that offers the IB or Cambridge, such as one in Kolkata, Delhi or Mussoorie. The third is a posting that moves the whole family to a city with such a school. The fourth is sitting IGCSE papers as a private candidate through an approved centre.",
        "Online schools demand discipline that a young student may not yet have, so a weekly tutor becomes the person who checks understanding. A boarder returns for holidays wanting repairs. A relocating family wants the new school's pace matched before the first day. A private candidate needs the broadest cover of all, because there is no school teacher setting the timetable.",
        "The right door depends on the child's age, language comfort, the family's budget and plans for university. We do not push any of them. What we offer is a clear account of the tutoring each route needs and an honest estimate of how much help is realistic.",
        "If you are still deciding, begin with one subject and one trial lesson. An experienced tutor can tell within an hour how far the student is from the standard of the course, and that is the most useful fact a family can have.",
      ],
    },
    {
      heading: "Bihar board, CBSE, IB or IGCSE: what changes?",
      paragraphs: [
        "Most students in Bhojpur sit the Bihar School Examination Board papers or CBSE, with entrance routes through JEE Main, NEET-UG, state counselling and CUET-UG. These systems reward recall and speed. The IB and IGCSE reward explanation, structured argument and data handling in English, which is a real change of habit.",
        "None of this means the Bihar student starts behind. Many arrive with strong mathematics and science content and need coaching only on the style of answer, the command terms and the use of a calculator.",
      ],
      table: {
        caption: "Four boards, as a Piro family meets them",
        columns: ["Board", "What the exams look like", "Where students usually go next"],
        rows: [
          ["Bihar School Examination Board", "Written papers in Hindi or English at Class 10 and 12", "State counselling, JEE Main, NEET-UG, CUET-UG"],
          ["CBSE", "Board papers plus internal marks", "JEE Main, NEET-UG, CUET-UG"],
          ["IB Diploma", "Six subjects, internal assessments and final papers in May or November", "Universities abroad, Indian private universities, CUET-UG with equivalence"],
          ["Cambridge or Edexcel IGCSE", "Subject papers at Core or Extended tier, usually at Class 10", "IB Diploma or A Level, then university"],
        ],
      },
    },
    {
      heading: "What goes into the fee for IB and IGCSE tuition in Piro?",
      paragraphs: [
        "A fee for IB and IGCSE tuition in Piro is built from the subject and level, the seniority of the tutor, the number of lessons each week and the length of the arrangement. You receive the figure in writing before you commit, and there is no printed price list because the work differs so much: a Class 7 reading lesson and Higher Level Physics are not alike.",
        "Online delivery removes the cost of a tutor's travel, and it widens the pool, so you can choose a specialist on merit instead of proximity. In a block town this makes the largest difference, since the nearest comparable specialist might otherwise be in Patna.",
        "Many families concentrate lessons where they count most. A new MYP student benefits from regular weekly help in the first term. A Diploma student gains from heavier cover before mocks and again before the final papers. Starting with a single subject and adding another once the first is working is also common.",
      ],
      bullets: [
        "Subject and level: Higher Level Mathematics and the sciences usually need more experienced tutors",
        "Programme: PYP, MYP, DP and IGCSE tutors have different backgrounds",
        "Frequency: one weekly lesson costs less in total than an exam-month burst",
        "Notice: late requests near an exam leave fewer tutors available",
        "Length: a longer arrangement is easier to plan",
      ],
    },
    {
      heading: "Tuition shop, online tutor or self-study in Piro?",
      paragraphs: [
        "Families in Bhojpur often compare the neighbourhood tuition shop, a private online tutor and studying alone with videos. The tuition shop is cheap and social but is built around Bihar board and entrance exams. Videos suit revision, but nobody marks the work. An online tutor offers exact syllabus coverage and feedback, in exchange for a quiet space and a reliable signal.",
        "The table lays out the trade-offs, including the weak point of online tuition: it cannot replace hands-on laboratory work.",
      ],
      table: {
        caption: "Choosing a study option in Piro",
        columns: ["Option", "Good for", "Weak point", "Fits"],
        rows: [
          ["Private online tutor", "Exact syllabus, marked practice", "Needs signal; no wet lab", "Most IB and IGCSE students"],
          ["Neighbourhood tuition shop", "Cheap, peers nearby", "Board and entrance focus", "Students also sitting Bihar board papers"],
          ["Self-study with videos", "Flexible and low cost", "No marking, easy to drift", "Revision of topics already understood"],
          ["Relocating to a city school", "Labs, teachers and peers", "Cost and separation from home", "Families who want the full campus experience"],
        ],
      },
    },
    {
      heading: "Chhath, floods and power cuts: the Bhojpur study calendar",
      paragraphs: [
        "Bihar has its own calendar, and a tutor needs to plan around it. Chhath Puja, which falls in October or November, is the most important festival, and families often travel home from other cities for it. That is exactly when the November IB and IGCSE sessions are close, so revision must be front-loaded and the festival week kept clear.",
        "Heat peaks from April to June and coincides with the May session. Monsoon rains from late June to September can bring flooding on the low-lying lands near the rivers, damage to roads and power outages that last hours. A tutor who knows this will keep a lesson short and move it online, or shift it to the next evening, without fuss.",
        "Other markers include Holi in March, Durga Puja and Dussehra in October, Diwali, and the Teej fasts in the monsoon. Winters are cold and foggy, with school hours shortened on the coldest days. These patterns repeat every year, so we agree a rough plan at the start and adjust it as the weeks pass.",
      ],
      table: {
        caption: "A year of study in Bhojpur",
        columns: ["Months", "What shapes the week", "What we do"],
        rows: [
          ["March to May", "Holi, heat, May sessions", "Early evening lessons, timed past papers"],
          ["June to September", "Monsoon, flood risk, power cuts, new term", "Flexible online slots, steady topic work"],
          ["October to November", "Durga Puja, Chhath, Diwali, November sessions", "Mocks first, quiet week for Chhath"],
          ["December to February", "Cold and fog, school terminal exams", "Rebuild weak topics, start May revision"],
        ],
      },
    },
    {
      heading: "After school: universities and careers open to Piro students",
      paragraphs: [
        "A student who completes an IB or IGCSE route can aim in three directions. Some apply to universities abroad, some to private universities in India, and some to central and state institutions through national entrance tests.",
        "For Indian degrees, the Association of Indian Universities recognises the Diploma and the IGCSE plus A Level route, and CUET-UG scores give access to central university seats on the combinations each course lists. Engineering and medicine tests set their own subject conditions each year, so read the official bulletin before dropping any subject.",
        "In Bihar, the obvious local choices are Veer Kunwar Singh University at Arrah and the institutions of Patna, including its engineering and medical colleges for those who qualify through entrance tests. Many Bihar students also go to Delhi, Varanasi or Kolkata. Overseas, students apply to the United Kingdom, Canada, the United States, Australia and Singapore, and we offer admissions test preparation separately.",
        "Choosing subjects with the destination in mind saves a year. A short chat before your school's deadline is enough to set the plan.",
      ],
    },
    {
      heading: "How online lessons handle IB Mathematics and the sciences",
      paragraphs: [
        "IB Mathematics splits into Analysis and Approaches, built on algebra and calculus, and Applications and Interpretation, built on data and modelling. The first suits engineers, mathematicians and physicists, and the second suits economics and the social sciences. We help weigh the choice without nudging a student towards the harder course.",
        "Online teaching works for mathematics because the tutor watches handwriting appear on a shared board and corrects method at the moment it goes wrong. Paper 1, without a calculator, needs repeated short practice. Paper 2 needs clean working and calculator fluency.",
        "In the sciences, data-based questions and extended responses lose the most marks. A tutor trains the student to read a graph, pull out the unit and write a conclusion in the way the mark scheme expects. Practical skills can be explained clearly, but they also need real laboratory time at school or at a centre.",
        "We begin with topics, move to mixed questions and finish with whole papers in the last term, so that understanding comes before speed.",
      ],
    },
    {
      heading: "Choosing between Core and Extended in IGCSE",
      paragraphs: [
        "IGCSE subjects like Mathematics, Physics and Chemistry are set at Core and Extended tiers. Core caps the highest grade, while Extended opens the full range but demands more. A student hoping to study IB Mathematics AA or A Level should be in Extended from the start.",
        "Cambridge and Pearson Edexcel papers are laid out differently. The syllabus code tells us which applies, for example 0620 for Cambridge Chemistry or 4CH1 for Edexcel, and we ask for it at the booking stage.",
        "A balanced subject list keeps options open: at least one science the child enjoys, a mathematics tier that stretches without breaking confidence, and a language that suits the home. English is a given, with Hindi usually the natural second.",
      ],
    },
  ],

  process: [
    { title: "Tell us the details", description: "Send the board and programme, the subject, level and exam session, and mention Piro. A WhatsApp message to +91 7439 368 115 will do." },
    { title: "Shortlist of tutors", description: "We come back with tutors who have taught that exact syllabus and who can fit your evening hours." },
    { title: "Free first lesson", description: "The first lesson is free and covers a topic the student actually needs." },
    { title: "Agree the plan in writing", description: "Subject, timings and rate are written down before paid lessons begin." },
    { title: "Review as you go", description: "A note follows every class, and the tutor or timing can change if needed." },
  ],

  whyPoints: [
    { title: "Clear about the format", description: "Online only in Piro, with no vague hint of a home visit." },
    { title: "Matched to the syllabus", description: "Tutors are chosen for the course, level and exam board, not for a general subject." },
    { title: "Written notes", description: "Parents get a short summary of every lesson." },
    { title: "Mindful of Bihar conditions", description: "Slots avoid power-cut hours and are easy to move on a flood or festival day." },
    { title: "Coaching, not ghost-writing", description: "Tutors never write assessments, essays or coursework for students." },
    { title: "Easy to switch", description: "If the first tutor is not right, we change them at no charge." },
  ],

  faqs: [
    { question: "Can an IB tutor come to my house in Piro?", answer: "No. Our tutors do not visit homes in Piro, since in-person home tuition is limited to Gurugram and parts of Delhi NCR. The alternative is a live one-to-one lesson on a laptop at your own table, with a shared board and a written summary after every class." },
    { question: "How much do IB and IGCSE tutors in Piro cost?", answer: "The fee depends on the subject, the level, the tutor's experience and how often you meet. We give the exact figure in writing before you book and publish no flat price. The first lesson is free, so you can judge the teaching before paying anything." },
    { question: "Is there any IB school in Piro or Bhojpur?", answer: "We could not confirm an IB or Cambridge school in Piro or in Bhojpur district, so we name none. The nearest confirmed campuses are in cities such as Kolkata and Delhi. Many local students use online schools or sit IGCSE privately. Check any school directly." },
    { question: "Can my child sit IGCSE as a private candidate from Bihar?", answer: "In many cases yes, through an authorised exam centre, though availability, fees and dates vary and science practicals need arrangements. We do not run exams. A tutor can prepare your child for the papers, and the centre will confirm entry deadlines." },
    { question: "What time of day suits students in Piro?", answer: "Late afternoon or after dinner, avoiding the hours when power cuts are common. Weekends work well for longer sessions. In the hottest weeks of May we favour early evening, and around Chhath we leave the festival week free." },
    { question: "Will a tutor write the Internal Assessment or Extended Essay?", answer: "No. Tutors can explain the criteria, discuss how a strong investigation is built and give feedback on understanding, but never write any part of an assessment or essay. The IB requires the work to be the student's own." },
    { question: "What internet do I need for online lessons?", answer: "A stable connection of a few megabits a second is enough, whether broadband or a steady 4G signal. If the signal in your village is patchy, keep a second SIM or hotspot as backup and choose the time of day when coverage is strongest." },
    { question: "Is the trial lesson free?", answer: "Yes, the first lesson is free and carries no obligation. It is a real lesson on a topic your child needs, followed by a written note. If the tutor is not right, we find another before any paid class begins." },
    { question: "Do you teach MYP and PYP as well?", answer: "Yes. Tutors cover PYP literacy and numeracy, MYP subjects against the criteria and the Diploma subjects. A single tutor can stay with a student from MYP to DP, which saves repeating introductions." },
    { question: "How do I pick between Maths AA and AI?", answer: "Pick Analysis and Approaches if you may study engineering, mathematics or physics, and Applications and Interpretation if data and modelling suit your course. Each is offered at Standard and Higher Level. A trial lesson on both before the school deadline helps." },
    { question: "Can IB students still apply for JEE or NEET?", answer: "Often yes, if the subjects studied satisfy the conditions the testing agency publishes each year. Equivalence and subject combinations are the sticking points, so read the current bulletin. A tutor helps with the content, not the admission rules." },
    { question: "Which IGCSE boards do you cover?", answer: "Cambridge International and Pearson Edexcel. The syllabus code, like 0625 for Physics or 4PH1, tells us exactly which papers apply. We then match a tutor who has taught that specification." },
    { question: "When should I book for the November session?", answer: "Early August is ideal. November falls close to Durga Puja, Diwali and Chhath in Bihar, so we keep those weeks light and bring the heavy practice earlier." },
    { question: "Can students in Arrah or Behea use the same service?", answer: "Yes. The lessons are online, so students in Arrah, Behea, Koilwar, Shahpur or Jagdishpur take the same lessons on the same timetable. All you need is a laptop and a steady signal." },
    { question: "How do I start?", answer: "Send a WhatsApp message to +91 7439 368 115 or an email to support@ibgram.com with the class, subject, school and Piro. We reply with a matched tutor and a trial time, usually within a day." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Patna", href: "/patna/", description: "The state capital page, with online lessons for Bihar students." },
    { label: "IB and IGCSE tutors in Arrah", href: "/arrah/", description: "The Bhojpur district headquarters, about forty kilometres away." },
    { label: "IB and IGCSE tutors in Sasaram", href: "/sasaram/", description: "A Rohtas district town on the same railway line." },
    { label: "IB and IGCSE tutors in Buxar", href: "/buxar/", description: "A Bihar neighbour to the west of Bhojpur." },
    { label: "IB tutors across India", href: "/india/", description: "Online IB and IGCSE tuition for students anywhere in India." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How our IB tutoring works, programme by programme." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject help." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "Subject, TOK and Extended Essay coaching." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of tutors by subject and programme." },
    { label: "Contact us", href: "/contact-us/", description: "WhatsApp or email to book a free trial lesson." },
  ],

  closingHeading: "Start with a free lesson from Piro",
  closingBody:
    "Tell us the class, the subject and which exam sitting you are working towards. We will match a tutor and explain how the screen lessons run, and the first lesson costs nothing. WhatsApp +91 7439 368 115 or email support@ibgram.com.",
};
