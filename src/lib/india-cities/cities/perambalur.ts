import type { CitySeoPage } from "../types";

/**
 * Perambalur (district headquarters, Tamil Nadu). No IB World School or Cambridge / Edexcel IGCSE centre could be
 * confirmed in the district, so stripSchools is empty. schoolClusters reuse the Tiruchirappalli, Chennai and
 * Kodaikanal schools already confirmed on the published Tiruchirappalli, Karur and Virudhachalam pages, labelled as
 * nearby or further off. Online delivery only.
 */
export const perambalur: CitySeoPage = {
  slug: "perambalur",
  countryName: "Perambalur",
  countryNameLong: "Perambalur, Tamil Nadu",
  demonym: "Perambalur",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early mornings and evenings through the hot months, flexible around Pongal, Deepavali, the north-east monsoon and public exam weeks",
  lastUpdated: "2026-09-21",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  geo: { latitude: 11.2333, longitude: 78.8833 },
  alternateNames: ["Perambalur town", "Perambalur district", "Perambalur Tamil Nadu", "Perambalur TN"],
  wikipedia: "https://en.wikipedia.org/wiki/Perambalur",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Perambalur | Live Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Perambalur: DP, MYP, PYP, Cambridge and Edexcel, live one to one at home, timed around Pongal and the monsoon. Free trial.",
  h1: "IB and IGCSE Tutors in Perambalur with Private Home Tuition Online",
  heroEyebrow: "LIVE ONLINE HOME TUITION FOR IB & IGCSE STUDENTS IN PERAMBALUR",
  heroSubtitle:
    "Searching for home tuition in Perambalur for an IB or IGCSE student? Tutors do not travel to the district, yet a specialist for your child's exact course can teach privately on live video, straight from the study table at home. The nearest confirmed international schools are in Tiruchirappalli, about 59 km away, so many families prefer to keep the child at home and bring the teaching to the screen.",
  primaryKeyword: "IB and IGCSE tutors in Perambalur",
  imageAltText: "Perambalur student solving an IB Mathematics problem on a laptop during a live online lesson at home",
  secondaryKeywords: [
    "IB tutor Perambalur",
    "IGCSE tutor Perambalur",
    "IB home tuition Perambalur",
    "IGCSE home tuition Perambalur",
    "IB private tuition Perambalur",
    "IB Maths tutor Perambalur",
    "IGCSE Maths tutor Perambalur",
    "IB Physics tutor Perambalur",
    "IB Chemistry tutor Perambalur",
    "IB Biology tutor Perambalur",
    "IB DP tutor Perambalur",
    "IB MYP tutor Perambalur",
    "IB PYP tutor Perambalur",
    "IGCSE online tuition Perambalur",
    "IB tutor Perambalur district",
    "IB tutor Kunnam",
    "IB tutor Veppanthattai",
    "IB tutor Alathur Perambalur",
    "IB tutor near Tiruchirappalli",
    "Cambridge IGCSE tutor Perambalur",
    "Edexcel IGCSE tutor Perambalur",
    "IB Economics tutor Perambalur",
    "online IB tutor Tamil Nadu",
    "online IGCSE tutor Tamil Nadu",
  ],

  heroTrustPoints: [
    "Tutors who have taught your child's syllabus, whether that is IB Biology HL or Cambridge IGCSE Mathematics",
    "Online throughout Perambalur district, with no visits and no surprise about it",
    "A trial lesson at no cost before any rate is discussed",
    "No partnership with the IB, Cambridge, Pearson or the schools mentioned",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "IB levels" },
    { value: "Cambridge + Edexcel", label: "IGCSE boards" },
    { value: "Live", label: "One student, one tutor" },
    { value: "No cost", label: "For the first lesson" },
  ],

  intro: {
    heading: "Learning an international syllabus beside the Chennai-Tiruchirappalli highway",
    paragraphs: [
      "Perambalur is the headquarters of its own district in central Tamil Nadu, on NH 38 about 267 km from Chennai and 59 km from Tiruchirappalli. The surrounding land grows paddy, groundnut, sugarcane, millets and cashew, and the district is among the state's leading producers of small onion and maize. Tyre manufacturing at the MRF plants and the Perambalur Sugar Mills add industrial employment to a largely agricultural economy.",
      "Schools fall into three groups: state board schools teaching the Samacheer Kalvi syllabus in Tamil or English, private matriculation-style schools, and some CBSE schools. We could not confirm an IB World School or a Cambridge or Edexcel centre in Perambalur district. Tiruchirappalli has confirmed schools, but an hour's drive each way is a heavy daily burden, so IB and IGCSE tutors in Perambalur are, for most families, tutors who teach online.",
      "Home tuition needs a clear definition. IB Gram tutors do not go into homes outside Gurugram and parts of Delhi NCR, so nobody will come to a house in Perambalur. The service here is online home tuition: a live, private, one-to-one lesson on a laptop at your own table, scheduled around school, tuition classes and family life.",
      "IB Gram is an independent tutoring service, unconnected with the IB, Cambridge, Pearson or any school named on this page. Tutors teach, question and mark practice, but the IA, Extended Essay, TOK essay and coursework are written by the student alone.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Specialists matched to course, level and exam sitting",
      "Free trial first; a rate in writing only if you go on",
      "Short progress notes after every lesson",
      "Online only in Perambalur; no tutor comes to the house",
    ],
  },

  programmesIntro:
    "The whole IB sequence can be followed online from Perambalur. Below, each stage is outlined, followed by what a tutor can add when the school is in another city.",
  programmes: [
    {
      code: "PYP",
      name: "IB PYP: Primary Years Programme",
      ageRange: "Nursery through Class 5 (ages 3 to 11)",
      description:
        "Young children explore big ideas through units of inquiry and close the stage with a self-directed Exhibition. Nothing is examined from outside, so reading, curiosity and clear speech matter most.",
      countryNote:
        "In a Tamil-speaking home English is usually the second language, so tutors use stories, songs and number games in short, cheerful sessions that build confidence without displacing Tamil.",
    },
    {
      code: "MYP",
      name: "IB MYP: Middle Years Programme",
      ageRange: "Class 6 through Class 10 (ages 11 to 16)",
      description:
        "Every subject is marked against published criteria, and students finish with a Personal Project that they plan and carry out themselves.",
      countryNote:
        "A child coming from a Samacheer Kalvi or CBSE class usually needs the criteria translated into plain steps. Tutors help with project planning and deadlines, and never with the project's content.",
    },
    {
      code: "DP",
      name: "IB DP: Diploma Programme",
      ageRange: "Class 11 and Class 12 (ages 16 to 19)",
      description:
        "Six subjects are taken with a core of Theory of Knowledge, the Extended Essay and CAS. Written papers come in May or November, while internal assessment is moderated by the IB.",
      countryNote:
        "A Perambalur candidate would register with a school in another city or enter privately, so a weekly online specialist often supplies the subject depth that no local class provides.",
    },
    {
      code: "CP",
      name: "IB CP: Career-related Programme",
      ageRange: "Class 11 and Class 12 (ages 16 to 19)",
      description:
        "A few Diploma courses are paired with career-related study, a reflective project and a language element, for students who want a practical pathway.",
      countryNote:
        "We know of no school offering CP near Perambalur. Tutors can support the academic courses within it, and will say openly if a different route suits the student better.",
    },
  ],

  subjectsIntro:
    "These are the IB Diploma subjects we can match with a tutor for Perambalur students. The registering school confirms the level and syllabus version before lesson one, and help with Tamil literature depends on whether that school arranges a home-language course.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches (AA)", levels: "SL and HL", description: "Calculus, algebra and proof for future engineers, scientists and economists; the usual route into competitive courses." },
    { name: "Mathematics: Applications and Interpretation (AI)", levels: "SL and HL", description: "Probability, statistics and modelling supported by technology, suited to commerce, design and social science." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, thermal physics, waves and fields, with regular data-handling practice." },
    { name: "Chemistry", levels: "SL and HL", description: "Bonding, energetics, kinetics and organic chemistry, with sugar-processing and polymer examples from the region's industries." },
    { name: "Biology", levels: "SL and HL", description: "Cells, inheritance, physiology and evolution, with the district's marine fossils as a talking point." },
    { name: "Environmental Systems and Societies (ESS)", levels: "SL", description: "Soil, water and farming systems, using semi-arid Tamil Nadu agriculture as case material." },
    { name: "Geography", levels: "SL and HL", description: "Population, resource security and hazards, with cyclone and drought examples for the internal assessment." },
    { name: "Economics", levels: "SL and HL", description: "Price changes, elasticity and government intervention, with small-onion market swings as a live example." },
    { name: "Business Management", levels: "SL and HL", description: "Operations, marketing and finance, using manufacturing and agribusiness cases." },
    { name: "English A (Language and Literature)", levels: "SL and HL", description: "Reading and writing analysis for students who think first in Tamil." },
    { name: "English B", levels: "SL and HL", description: "Fluent, accurate written English for exam conditions." },
    { name: "Tamil or Hindi (A or B)", levels: "SL and HL", description: "Literature or language study in a home or additional language, where the registering school arranges the course." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming, data structures, networks and databases." },
    { name: "Psychology", levels: "SL and HL", description: "Research methods and the main approaches, plus practised essay writing." },
    { name: "Theory of Knowledge (TOK)", levels: "Core", description: "Conversations about knowledge and the exhibition; the essay stays the student's alone." },
  ],
  igcseSubjectsIntro:
    "Cambridge IGCSE papers fall in the May to June and October to November series, and Edexcel also offers January for some subjects. The courses below are the ones we can staff for Perambalur.",
  igcseSubjects: [
    { name: "Mathematics: Cambridge 0580 or Edexcel 4MA1", levels: "Core or Extended; Foundation or Higher", description: "Number, algebra, geometry and statistics, practised against the clock." },
    { name: "Additional Mathematics", levels: "Single tier", description: "Further algebra and introductory calculus for students heading to IB Maths AA." },
    { name: "Physics", levels: "Core and Extended", description: "Motion, energy, waves and circuits, with practical-paper skills." },
    { name: "Chemistry", levels: "Core and Extended", description: "Atomic structure, reactions, rates and organic basics, with calculation layout." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, nutrition, transport, inheritance and ecology." },
    { name: "Geography", levels: "Single tier", description: "Rivers, weather, farming and settlement, with map work." },
    { name: "Economics", levels: "Single tier", description: "Demand, supply, trade and policy, taught from everyday markets." },
    { name: "Business Studies", levels: "Single tier", description: "Enterprise, marketing, operations and finance." },
    { name: "English as a First Language", levels: "Single tier", description: "Writing for purpose and audience, summary and comprehension." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Listening, speaking, reading and writing for students from Tamil-medium schools." },
    { name: "Computer Science", levels: "Single tier", description: "Pseudocode, programming and the workings of computers." },
    { name: "Hindi as a Second Language", levels: "Single tier", description: "Offered where board and series allow; the syllabus code comes first." },
  ],

  regionsTitle: "Perambalur town, district taluks and the areas we teach online",
  tutorsIntro:
    "Our tutors teach from different parts of India on live video, so a Perambalur student never needs to travel down NH 38 to meet one. Each profile lists the IB stages and IGCSE boards the tutor has worked with, and the free opening lesson doubles as an introduction.",
  regionsIntro:
    "Teaching is online only, so any student in the district with power and a connection can join. The places below are towns and taluks in and around Perambalur, each with a practical note.",
  regions: [
    { name: "Perambalur town", note: "The district headquarters and a municipality of around 50,000 people; evenings after school and tuition class suit most households." },
    { name: "Elambalur", note: "A village known for small-onion cultivation; farming seasons shape the year, so lesson times are agreed around harvest weeks." },
    { name: "Siruvachur", note: "Seven km from the headquarters, known for the Madurakaliamman temple; festival days bring crowds, so those evenings stay free." },
    { name: "Ranjankudi", note: "About 16 km north on the national highway, home to a 15th-century fort; online lessons spare students the highway travel." },
    { name: "Kunnam", note: "A taluk with well-known marine fossils; a limited choice of specialist teachers makes remote lessons attractive." },
    { name: "Veppanthattai", note: "A taluk headquarters where broadband varies between streets, so speed is tested in the trial lesson." },
    { name: "Alathur", note: "A taluk with rural surroundings; students here normally study a state board or CBSE syllabus full time and add lessons on top." },
    { name: "Labbaikudikadu", note: "A town panchayat in the district; lessons are planned around Ramzan and Eid dates, which move each year." },
    { name: "Poolambadi and Kurumbalur", note: "Smaller town panchayats where local school choices are narrow, so online tuition widens access." },
    { name: "Ariyalur", note: "The neighbouring district town, 40 km away; families there face the same gap in international schooling." },
    { name: "Tiruchirappalli", note: "The regional hub 59 km away, with NIT Tiruchirappalli, hospitals and the closest confirmed international schools." },
  ],

  schoolClusters: [
    {
      city: "Perambalur and the district",
      note: "Local schools teach the Tamil Nadu state syllabus in Tamil or English, alongside private matriculation-style schools and some CBSE schools. We could not confirm an IB or Cambridge school in the district, so none is named.",
      schools: [],
    },
    {
      city: "Nearby: Tiruchirappalli (59 km)",
      note: "The closest confirmed schools are in K.K. Nagar. The drive is about an hour each way on NH 38 without traffic, so a daily run is possible for a few families, though most would treat it as a move.",
      schools: ["Alpha Cambridge International School", "The Indian Public School, Trichy"],
    },
    {
      city: "Further off: Chennai",
      note: "The state capital, some 267 km away, offers a wider set of confirmed international schools. For a Perambalur family it means relocation.",
      schools: ["Gateway International School", "KC High International School", "Akshar Arbol International School"],
    },
    {
      city: "Boarding option: Kodaikanal",
      note: "A residential IB school in the hills is an option for families who prefer boarding to relocation.",
      schools: ["Kodaikanal International School"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent service with no connection to the IB, Cambridge, Pearson or any school named here. Schools are mentioned only as regional context where a public listing ties them to an international programme, and every family should verify current details with the school.",

  modesIntro:
    "No tutor visits Perambalur, so all three formats run on live video. They differ in how many students join and in when in the year each one is most useful.",
  modes: [
    {
      title: "Weekly live lessons at home",
      description: "One student, one specialist, a shared whiteboard and a laptop at the family table. IB Gram tutors do not go to homes outside Gurugram and parts of Delhi NCR, so lessons in Perambalur stay on screen.",
      bullets: ["A fixed weekly slot in IST", "Shared board and worksheets", "Notes sent after each lesson"],
    },
    {
      title: "Pre-exam intensives",
      description: "A condensed run of lessons before the IB May or November papers or an IGCSE series, built on timed papers, marking and a repair list.",
      bullets: ["Timed mock papers", "Marked feedback", "Planned around Deepavali"],
    },
    {
      title: "Pairs from the same class",
      description: "Two students on the same course and level share a tutor, and the families divide the fee, with a return to private lessons possible at any time.",
      bullets: ["Matching course and level", "Fee split agreed first", "Switch back at will"],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools are within reach of Perambalur?",
      paragraphs: [
        "Inside the district, none that we can confirm. State board schools teach the Samacheer Kalvi syllabus, and private matriculation-style schools and some CBSE schools offer alternatives. We found no IB World School or Cambridge or Edexcel centre in Perambalur district, so the school strip on this page stays empty rather than carry a doubtful name. If you know a school that runs an international programme, tell us and we will check it.",
        "Tiruchirappalli, 59 km away, is the closest place with schools we can confirm: Alpha Cambridge International School and The Indian Public School, both in the K.K. Nagar area. On NH 38 the drive takes about an hour each way without traffic, so a few families might attempt a daily run, but most treat it as a decision to move or board. Chennai, 267 km away, has a wider choice, and Kodaikanal International School is a boarding option in the hills.",
        "The district's households include farmers and onion traders, employees of the tyre plants and sugar mills, teachers, doctors, and families with relatives working in Chennai, Bengaluru, the Gulf or Singapore. Families who consider an international curriculum are often thinking about study abroad or a move, and many keep the child in a local school while an online tutor covers the IB or IGCSE material.",
        "Verify each school on the IB and Cambridge directories before relying on it, because authorisations change. A private IGCSE candidate sits papers at an authorised exam centre, most likely in Tiruchirappalli or Chennai, and entry deadlines close months ahead. Plan the registration early and ask the centre how it handles practical papers.",
      ],
      bullets: [
        "No IB or Cambridge school confirmed in Perambalur district",
        "Closest confirmed schools: Tiruchirappalli, about 59 km away",
        "Chennai and Kodaikanal offer further options",
        "Private IGCSE entries go through an authorised exam centre",
      ],
    },
    {
      heading: "How do the Tamil Nadu State Board, CBSE, ICSE, IGCSE and IB compare?",
      paragraphs: [
        "The Tamil Nadu State Board examines the Samacheer Kalvi textbooks, with public examinations at the end of Class 10 and Class 12 in March and April, and it rewards accurate recall of what the books contain. CBSE leans on NCERT concepts and application, ICSE on long, fluent written English. IGCSE and the IB go further still: they set data, diagrams or unfamiliar scenarios and expect reasoning in clear, organised English.",
        "Tamil is the home language of nearly every family in the district, so English is the extra language, and the gap usually shows in written work, not in understanding. A student who solves a projectile problem quickly may struggle to write a six-mark explanation. Weekly tutoring trains command terms, paragraph structure and subject vocabulary through short marked tasks.",
        "Central Tamil Nadu has a strong culture of NEET and engineering-entrance preparation, with residential schools and coaching programmes in districts such as Namakkal and Tiruchirappalli. For a NEET or JEE goal, staying with the state board or CBSE plus coaching is usually simpler, and we say so. For study abroad, IGCSE followed by the Diploma or A Levels often fits better.",
        "Timing matters. IGCSE in Class 9 gives two years to adapt, while the Diploma in Class 11 expects the international style already in place. A handful of diagnostic lessons in Class 8 or 9 shows where the gaps lie, and the decision about board or route can follow the facts.",
      ],
      table: {
        caption: "Routes open to a Perambalur family",
        columns: ["Board", "Medium", "Exam rewards", "Typical next step"],
        rows: [
          ["Tamil Nadu State Board (Samacheer Kalvi)", "Tamil or English", "Accurate recall of set books", "TNEA, NEET, state colleges"],
          ["CBSE", "English", "Concepts and application", "JEE, NEET, CUET-UG"],
          ["ICSE and ISC", "English", "Long, fluent written answers", "Indian universities, some overseas"],
          ["Cambridge or Edexcel IGCSE", "English", "Structured reasoning on data", "A Levels, IB Diploma, Class 11 elsewhere"],
          ["IB Diploma", "English", "Exams plus internal assessment", "Universities in India and abroad"],
        ],
      },
    },
    {
      heading: "What decides the price of IB and IGCSE tuition in Perambalur?",
      paragraphs: [
        "No fixed price list is published, because a tutor's rate follows the course and not the town. After the free opening lesson you receive a rate in writing, and nothing is collected until you say yes. Ask every provider of IB and IGCSE tutors in Perambalur for the same, and check minimum bookings and exam-season extras before comparing.",
        "Four things shape it. Level comes first, since HL Physics asks more than Class 8 science. Subject scarcity follows, as Psychology and ESS have fewer tutors than Mathematics. Weekly hours add up. And closeness to the exam raises preparation time per hour, so a pre-exam block is priced differently from a quiet term.",
        "A neighbourhood tuition class costs less, yet it prepares students for the state board or CBSE. For an international course, the real comparison is a specialist in Tiruchirappalli or Chennai, whose fee comes with an hour or more of travel each way, or a move. Online teaching removes that travel, and the money goes into lesson time.",
        "If the budget is tight, say so in your first message. Ten sessions aimed at one weak topic, a paired lesson with a classmate, or a lighter plan in calm months can keep spending down. A plan you can finish is worth more than a larger one that stops at the first exam.",
      ],
      bullets: [
        "Course level and subject rarity set the rate",
        "Weekly hours and exam closeness change the total",
        "A rate in writing follows the free opening lesson",
        "Short blocks and paired lessons lower the cost",
      ],
    },
    {
      heading: "Online lessons, coaching centres, private tutors or self-study: what works in Perambalur?",
      paragraphs: [
        "Perambalur has no shortage of tuition centres, and many are good at board and entrance preparation. What the district lacks is someone who has taught IB or IGCSE papers and knows how examiners mark them. That is the gap online tutors fill, and it is why IB and IGCSE tutors in Perambalur are, in practice, tutors who teach online.",
        "Travel shapes the choice. A weekly lesson in Tiruchirappalli would swallow half an evening on NH 38, plus the return, while an online lesson needs one hour at the table. The time saved can go into practice papers, where marks are actually won, and into sleep, which matters just as much.",
        "Self-study can carry a disciplined Class 10 student through IGCSE Mathematics with past papers and mark schemes. The Diploma is another matter: internal assessments and finely drawn command terms need feedback, and an early misunderstanding can go unnoticed for two years.",
        "Most families mix routes: state board or CBSE tuition locally, online lessons for the international subjects. The one rule is to keep the total load realistic, because a rested student remembers more of what was taught.",
      ],
      table: {
        caption: "Study routes for a student in Perambalur",
        columns: ["Route", "What it gives", "Where it falls short", "Fits"],
        rows: [
          ["Online one-to-one with IB Gram", "A tutor who has taught the exact course", "Needs power and a steady signal", "DP, MYP and IGCSE students"],
          ["Tuition or coaching centre", "Routine, peers, modest cost", "Aimed at board and entrance exams", "Board subjects alongside"],
          ["Neighbourhood private teacher", "Familiar and face to face", "Rarely trained on IB or IGCSE marking", "Younger children, homework help"],
          ["Self-study with past papers", "Free and self-paced", "Nobody marks the answers", "Strong IGCSE Maths candidates"],
        ],
      },
    },
    {
      heading: "How do the hot season, the north-east monsoon and Tamil festivals shape the exam year?",
      paragraphs: [
        "April to June is hot in Perambalur, and the fortnight known as Agni Natchathiram in May brings the year's harshest afternoons, just as the IB May session and the IGCSE summer papers approach. Early-morning and late-evening lessons work better than afternoon ones, and a power backup for the router is sensible.",
        "The main rains come with the north-east monsoon from October to December, and a cyclone system can bring heavy downpours and power cuts in November or December, close to the IB November session and the IGCSE autumn series. Online lessons survive rain as long as power holds, and we move lost sessions without penalty.",
        "Pongal in January, the Tamil New Year in April, Aadi Perukku in July or August, Vinayagar Chathurthi and Navaratri in September and October, Deepavali, and Karthigai Deepam in November or December all shape the calendar. Temple festivals at places such as Siruvachur add local disruption, and Ramzan and Eid dates move each year. We front-load revision before these weeks and keep festival weeks light.",
        "For November candidates, finish new content by early September and mock in October. For May candidates, finish by January, use February and March for mocks, and keep April for revision. Class 10 and Class 12 public examinations in March and April mean a lighter tutoring load then, agreed at the start.",
      ],
      table: {
        caption: "An exam-year plan for Perambalur",
        columns: ["Months", "Local picture", "Study focus"],
        rows: [
          ["January to March", "Pongal, cool weather, Class 12 public exams start", "Steady practice, mocks after school exams"],
          ["April to June", "Tamil New Year, rising heat, Agni Natchathiram; IB May and IGCSE summer papers", "Early or late lessons, final revision"],
          ["July to September", "Aadi Perukku, Vinayagar Chathurthi, new academic year", "New content, regular weekly rhythm"],
          ["October to November", "Navaratri, Deepavali, north-east monsoon; IB November session", "Mocks before festivals, light work during them"],
          ["December", "Rain and cyclone risk, Karthigai Deepam, winter break", "Catch-up, internal assessment planning, university shortlists"],
        ],
      },
    },
    {
      heading: "Where do Perambalur students go after IB or IGCSE?",
      paragraphs: [
        "A completed Diploma is recognised by the Association of Indian Universities as equivalent to the Class 12 certificate, which is the document Indian colleges ask for. Each institution then sets its own subject and score conditions. CUET-UG, JEE Main and NEET publish separate rules for international-board students, so read the current bulletin. Tamil Nadu's own engineering and medical counselling has eligibility and equivalence conditions that change, and the brochure is the authority.",
        "Tiruchirappalli is the regional hub: NIT Tiruchirappalli, IIM Tiruchirappalli, IIIT Tiruchirappalli and Bharathidasan University all lie within easy reach, along with well-known hospitals and colleges. Chennai adds IIT Madras, Anna University, Loyola, Madras Christian College and many private universities, while Vellore (VIT, CMC) and Coimbatore (PSG, Amrita) are familiar destinations.",
        "Students from a farming district often look at agriculture and allied degrees at Tamil Nadu Agricultural University in Coimbatore and its colleges, and at veterinary and food-technology courses. Study abroad, especially to the UK, Canada, Singapore and Australia, is a frequent goal where relatives live overseas, with predicted grades, English-language scores and deadlines a year ahead.",
        "IGCSE covers Classes 9 and 10 only, so an IGCSE student must still choose a two-year route afterwards: the IB Diploma, A Levels or another board. The decisive choice therefore falls in Class 9 or 10. Tutors explain how each route works, while applications and decisions remain with the family.",
      ],
      bullets: [
        "AIU equivalence links the IB Diploma to Class 12",
        "CUET-UG, JEE Main and NEET each set separate rules",
        "Tamil Nadu state counselling has its own eligibility conditions",
        "After IGCSE: A Levels, the IB Diploma or another Class 11 route",
      ],
    },
    {
      heading: "What do the IB maths and science courses ask of a student?",
      paragraphs: [
        "The two Mathematics courses suit different futures, and neither is the lighter one. Analysis and Approaches builds algebra, functions, calculus and proof for engineering and pure science. Applications and Interpretation builds statistics, modelling and calculator fluency for business, design and social science. Each includes an exploration marked at school level, so the choice should start from the intended degree.",
        "Physics, Chemistry and Biology share a shape: core topics, further topics, written papers and a scientific investigation. Physics rewards units discipline and a method for new problems, Chemistry rewards moles, equilibria and mechanisms, and Biology rewards exact terms and evidence. One weekly lesson spread over two years beats a rush in the last term.",
        "Perambalur offers its own illustrations. The district's marine fossils, found far from any coast, open a conversation on evolution and geological time. Tyre making and sugar processing bring polymers, combustion and fermentation into Chemistry, and small-onion price swings bring volatility and elasticity to life in Economics.",
        "Where school laboratories are thin, the internal investigation can feel daunting. Online tutors show how to choose a question, control variables, handle uncertainty and write up results, while the experiment itself and the report remain the student's own.",
      ],
    },
    {
      heading: "What are IGCSE Core, Extended, Foundation and Higher, and how should a Perambalur student choose?",
      paragraphs: [
        "At Cambridge, most sciences and mathematics come as Core papers, capped at grade C, or Extended papers reaching A star. Pearson Edexcel has Foundation and Higher tiers in Mathematics, and its sciences are a single tier graded numerically. A student who may move on to IB Mathematics or a science stream should sit Extended or Higher from the start.",
        "A programme usually has six to eight subjects: English, Mathematics, one or two sciences, a second language and electives. Economics and Business Studies suit families in trade and farming, Geography suits students interested in weather and land, and Computer Science rewards logical minds. Electives should point towards the Class 11 route chosen.",
        "The two boards differ in specification codes, paper layouts and grade scales. Confirm the board first, then revise from its own past papers and mark schemes. Using the other board's papers is an easy way to lose weeks of preparation.",
        "Private candidates register through an authorised exam centre, most likely in Tiruchirappalli or Chennai, with firm deadlines and separate planning for practicals. We explain the steps and what each paper expects, but the registration is handled by the family and the centre.",
      ],
    },
  ],

  process: [
    { title: "Message us the details", description: "Share the school, course, level, exam month and the topics that worry you, on WhatsApp or email." },
    { title: "Look over the suggested tutor", description: "We propose a tutor who has taught that exact syllabus, with a short profile and a few weekly times in IST." },
    { title: "Try a lesson for free", description: "Your child works on real course material for a whole session, so you see the teaching itself." },
    { title: "Approve the plan on paper", description: "Hours and rate are written down before you commit, and nothing is taken until then." },
    { title: "Follow the notes", description: "After each lesson a short note lists what was covered and what to practise; a change of tutor is easy." },
  ],
  whyPoints: [
    { title: "Course-code matching", description: "Pairing follows the precise paper, for instance IB Chemistry HL or Edexcel IGCSE Biology, and not just the subject name." },
    { title: "Honest about online", description: "Every Perambalur lesson is on live video, because in-person teaching is restricted to Gurugram and parts of Delhi NCR." },
    { title: "Guidance, not ghost-writing", description: "The IA, Extended Essay, TOK essay and coursework belong to the student; tutors explain and mark practice." },
    { title: "Tamil Nadu calendar aware", description: "Planning respects Pongal, Deepavali, Class 10 and 12 public exams and the north-east monsoon." },
    { title: "Indian time zone", description: "Tutors teach in IST, so early-morning and late-evening slots are straightforward." },
    { title: "Clear progress notes", description: "Parents receive a short summary after each lesson, without sitting in." },
  ],

  faqs: [
    { question: "Can I find an IB or IGCSE tutor in Perambalur?", answer: "Yes, online. For IB and IGCSE tutors in Perambalur we find a tutor elsewhere in India who has taught your child's course and level, and lessons run on live video. Nobody travels to Perambalur. Send the subject and exam sitting, and we suggest a tutor and a free trial time in IST." },
    { question: "Will a tutor come to my house in Perambalur?", answer: "No. IB Gram tutors do not go into homes outside Gurugram and parts of Delhi NCR. In Perambalur, home tuition means a private online lesson at your own study table, with video and a shared whiteboard, and no hour-long drive to Tiruchirappalli." },
    { question: "Is there an IB or Cambridge school in Perambalur district?", answer: "We could not confirm one. Local schools teach the Tamil Nadu state syllabus, with private matriculation-style schools and some CBSE schools alongside. The nearest confirmed international schools are in Tiruchirappalli, about 59 km away. Please check any school on the IB and Cambridge directories, since approvals change." },
    { question: "How much does IB or IGCSE tuition cost in Perambalur?", answer: "We publish no prices, because the rate depends on the tutor, the course level, the rarity of the subject and the weekly hours. A written rate follows the free first lesson. Tell us your budget at the outset and we can propose a short block, a paired lesson or a lighter timetable." },
    { question: "Can my child follow IB lessons while studying in a state board or CBSE school?", answer: "Yes, as an addition to school, with the international exams entered privately. Running two syllabuses is demanding, so the timetable is built around school exams and protects sleep. Meeting the international question style in Class 9 or 10 makes the Diploma feel far less foreign later." },
    { question: "My child studies in a Tamil-medium school. Can they manage IB or IGCSE in English?", answer: "Often, yes, with targeted support for written English. Understanding of mathematics and science is rarely the gap; structuring an English answer under time pressure is. Short weekly writing tasks, marked and returned, with work on command terms and vocabulary, close it steadily." },
    { question: "Which IB subjects do your tutors cover?", answer: "Mathematics AA and AI, the three sciences, Economics, Business Management, ESS, Geography, English, Computer Science and Psychology are the usual requests, with Hindi and MYP or PYP help also available. Give us the level and sitting, and we confirm a suitable tutor is free before proposing times." },
    { question: "Can my child take IGCSE as a private candidate from Perambalur?", answer: "Yes, through an exam centre authorised by Cambridge or Pearson, most likely in Tiruchirappalli or Chennai. Entry closes months before the papers, and practical components need separate arrangements. Our role is the teaching; the registration is for you and the centre." },
    { question: "Will tutors write the IA or Extended Essay?", answer: "No. The IA, Extended Essay, TOK essay and coursework must be the student's own work. Tutors help a student read the criteria, choose a manageable question, plan the time and understand what examiners reward, and they mark practice pieces, but nothing submitted is drafted or edited by them." },
    { question: "How do Tamil Nadu engineering and medical admissions treat the IB Diploma?", answer: "Through their own eligibility rules, which change each year. The Association of Indian Universities equates the Diploma with Class 12, but TNEA counselling, NEET and CUET-UG each set conditions on subjects, marks and sometimes study in the state. Read the current notices, and send us any wording that is unclear." },
    { question: "Does the north-east monsoon disturb online lessons?", answer: "Only through power and signal. Heavy rain and cyclone systems from October to December can cause cuts, so we suggest a charged laptop, a hotspot and, where possible, a wired broadband line. If a session is lost, tell us promptly and we rebook it without penalty." },
    { question: "How does Agni Natchathiram affect the May exams?", answer: "It makes afternoons too hot for good study. We schedule early-morning or late-evening lessons in May and advise on a power backup and a cool, quiet room for exam days. The IB May session and IGCSE summer papers fall in this period, so preparation is front-loaded earlier in the year." },
    { question: "Should my child take IGCSE before the IB Diploma?", answer: "It is a common order but not a rule. IGCSE covers Classes 9 and 10 and builds structured exam writing; the Diploma follows in Classes 11 and 12, and A Levels or CBSE Class 11 are alternatives. With no international school in the district, the choice often follows where the exams can be taken." },
    { question: "How long does it take to match a tutor?", answer: "Usually two to four working days after we receive the course, level and your free hours. Mathematics and the sciences are placed fastest, and rarer subjects can take longer. If nobody suitable is available you hear at once, not after a wait." },
    { question: "Is the first lesson really free?", answer: "Yes. Your child gets a full session with a proposed tutor on genuine course material, which shows you the actual teaching. A weekly plan and written rate arrive only if you want to continue, and nothing is charged before that. If the fit is poor, we suggest another tutor." },
    { question: "How do we begin from Perambalur?", answer: "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the student's school, course, level and exam month. We reply with a suggested tutor and a trial time in IST. It costs nothing to ask, and continuing is your decision." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online lessons work for district headquarters and towns away from the big cities." },
    { label: "Gurgaon home tuition", href: "/gurgaon/", description: "The place where tutors do visit homes, alongside online lessons." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How we choose tutors and which IB courses they cover." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, specification codes and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects, the core and how the Diploma is marked." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and the role of tutoring." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry learning for the youngest students." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI compared." },
    { label: "Tutor profiles", href: "/tutors/", description: "Browse by subject, level and availability." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us to set up a free first lesson." },
    { label: "IB and IGCSE tutors in Tiruchirappalli", href: "/tiruchirappalli/", description: "The regional hub 59 km away, with the closest confirmed schools." },
    { label: "IB and IGCSE tutors in Karur", href: "/karur/", description: "A neighbouring district town to the west." },
    { label: "IB and IGCSE tutors in Namakkal", href: "/namakkal/", description: "Known across Tamil Nadu for residential schools and entrance coaching." },
    { label: "IB and IGCSE tutors in Virudhachalam", href: "/virudhachalam/", description: "A town to the east on the road towards Cuddalore." },
  ],

  closingHeading: "Start with a free IB or IGCSE lesson at home in Perambalur",
  closingBody:
    "If you are looking for IB and IGCSE tutors in Perambalur, tell us the course, level and exam month, and we will find a tutor who has taught it. The opening lesson costs nothing, the rate appears on paper only when you ask to continue, and the drive to Tiruchirappalli is not needed. Message +91 7439 368 115 on WhatsApp or email support@ibgram.com.",
};
