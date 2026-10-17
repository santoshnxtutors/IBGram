import type { CitySeoPage } from "../types";

/**
 * /farooenagar/ - IB and IGCSE tutoring page for Farooqnagar (Shadnagar area), Rangareddy district, Telangana.
 * The slug is a truncated name from the source PDF ("FarooEnagar"); the copy uses the real town name,
 * Farooqnagar. No school in the town is confirmed for IB or Cambridge/Edexcel IGCSE, so stripSchools is empty
 * and clusters reuse Hyderabad names from the verified Hyderabad page. All lessons online.
 */
export const farooenagar: CitySeoPage = {
  slug: "farooenagar",
  countryName: "Farooqnagar",
  countryNameLong: "Farooqnagar, Telangana",
  demonym: "Farooqnagar",
  state: "Telangana",
  stateCode: "IN-TG",
  flagCode: "in",
  countryCode: "IN",
  region: "Telangana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings after the highway rush and Sunday mornings, kept clear of Bathukamma, Dasara and the intermediate exam weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 17.0778, longitude: 78.2011 },
  wikipedia: "https://en.wikipedia.org/wiki/Farooqnagar",
  alternateNames: ["FarooEnagar", "Farooq Nagar", "Farooqnagar Shadnagar", "Shadnagar"],
  stripSchools: [],

  title: "Farooqnagar IB & IGCSE Tutors | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Farooqnagar and Shadnagar: one-to-one online private tuition at home, in IST, for families on the Hyderabad highway. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Farooqnagar",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR FAROOQNAGAR AND SHADNAGAR",
  heroSubtitle:
    "Private tuition at home for Farooqnagar students who follow, or are about to follow, the IB or IGCSE: live one-to-one lessons by video, a tutor who has taught your syllabus and a written note after each class. Farooqnagar is part of the Hyderabad commuter belt, but the international schools are in the city, so the lesson comes online.",
  primaryKeyword: "IB and IGCSE tutors in Farooqnagar",
  imageAltText: "A Farooqnagar student at home in a live one-to-one online IGCSE Mathematics lesson with a tutor",
  secondaryKeywords: [
    "IB tutor Farooqnagar",
    "IGCSE tutor Farooqnagar",
    "IB home tuition Farooqnagar",
    "IGCSE home tuition Farooqnagar",
    "IB private tuition Farooqnagar",
    "IB Maths tutor Farooqnagar",
    "IGCSE Maths tutor Farooqnagar",
    "IB Physics tutor Farooqnagar",
    "IB Chemistry tutor Farooqnagar",
    "IB Biology tutor Farooqnagar",
    "IB DP tutor Farooqnagar",
    "IB MYP tutor Farooqnagar",
    "IB PYP tutor Farooqnagar",
    "IGCSE online tuition Farooqnagar",
    "IB tutor Shadnagar",
    "IGCSE tutor Shadnagar Rangareddy",
    "online IB tutor Telangana",
    "Cambridge IGCSE tutor Farooqnagar",
    "Edexcel IGCSE tutor Shadnagar",
    "IB tutor FarooEnagar",
  ],

  heroTrustPoints: [
    "Each tutor is chosen for the IB subject or IGCSE paper code your child is taking",
    "Lessons in Farooqnagar are online; nobody travels to your door, because visits exist just in Gurugram and some Delhi NCR areas",
    "A brief summary in writing once each class ends",
    "One free trial class, then a quoted fee on paper before anything is booked",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Nursery to Class 12" },
    { value: "Two boards", label: "Both awarding bodies" },
    { value: "IST", label: "Evenings and Sundays" },
    { value: "Free trial", label: "Decide after one class" },
  ],

  intro: {
    heading: "A highway town with a city-sized question: how to study IB or IGCSE from here",
    paragraphs: [
      "Farooqnagar lies in Rangareddy district, beside Shadnagar on the Hyderabad to Bengaluru highway, roughly an hour or more from the city depending on the traffic. The area has grown on the back of factories, logistics parks and warehouses in the corridor, and a good number of its households have members who work in Hyderabad. The name also appears as Farooq Nagar, and in some lists as FarooEnagar, but the town is the same.",
      "Our enquiries found no school in Farooqnagar or Shadnagar teaching the IB or a Cambridge or Pearson Edexcel IGCSE. The schools here run the Telangana State Board, CBSE or ICSE, and the international-board campuses we can name are in Hyderabad. That is why the tutoring on this page is private, live and taken from home over video. No tutor arrives at the door: in-person sessions exist only in Gurugram and parts of Delhi NCR.",
      "For families who commute into the city, online lessons solve a timing problem. A child who finishes school at four and faces another hour on the highway has no energy left for a coaching class in Hyderabad. A video lesson at eight in the evening, from a desk at home, does not ask for that journey.",
      "Nothing here is endorsed by the IB organisation, Cambridge, Pearson or a named school; IB Gram is a separate tutoring company. A tutor teaches method and marks practice work, but assessed pieces such as IAs, Extended Essays and TOK essays are never drafted for a student.",
    ],
    bullets: [
      "Primary, middle and Diploma years of the IB, and both IGCSE boards",
      "Private video classes in English, with a line of Telugu or Hindi when it clears a doubt",
      "A trial class at no charge before fees come up",
      "Everything runs online; there are no tutor visits to Farooqnagar homes",
    ],
  },

  programmesIntro:
    "In Farooqnagar an international programme usually enters the conversation through a job move, a scholarship test or a plan to study overseas. The notes below set out what each stage expects, so tutoring can aim at the right thing at the right time.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "A primary class follows large themes such as migration or energy across several subjects, and the final year ends with a presentation to parents called the Exhibition. There is no outside exam. A tutor strengthens what the inquiry rests on: English reading, careful handwriting, sums that are second nature and a child who speaks up.",
      countryNote:
        "For a Farooqnagar family, PYP tutoring usually prepares a child for a school in Hyderabad and leans on spoken English, since Telugu or Urdu is often the language at home.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP teachers mark against published criteria in every subject, so investigations, projects and reflective pieces carry as much weight as tests. A child raised on state-board papers may know a topic thoroughly yet never have written why one method beats another, and closing that gap is the first job of a tutor.",
      countryNote:
        "Students in the Shadnagar belt aiming for an MYP place in Hyderabad normally work on English composition, practical science write-ups and Maths problems set in context.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma candidate studies six subjects, half of them at Higher Level, plus Theory of Knowledge, a 4,000-word Extended Essay and CAS service hours. Forty-five points is the ceiling, and exam papers are sat in May or November. Two years of consistent work pays off better than a final rush.",
      countryNote:
        "A Diploma student from Farooqnagar is usually enrolled at a Hyderabad school, often as a boarder or a long-distance commuter, and uses online lessons at weekends.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme places two or more Diploma courses beside a vocational strand and a short core on service and languages. Very few schools in India run it. A Diploma course taken inside CP is held to exactly the standard of the same course in the full Diploma.",
      countryNote:
        "CP enquiries from Farooqnagar are rare, and the Diploma component of any that arrive is staffed in the usual way.",
    },
  ],

  subjectsIntro:
    "Send the subject, level and the session your child will sit, and we look for a teacher with recent experience of that precise course. The Maths choice illustrates why: Analysis and Approaches and Applications and Interpretation reward different skills, so a good fit for one may be wrong for the other.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, algebra and formal argument, for students headed to engineering, computing or pure science." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data handling, models and calculator technology, a natural choice for business, biology and social science." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, electricity and modern physics, with emphasis on uncertainties and graph skills." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, structure, energetics, kinetics and organic reactions." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, evolution and ecology, revised through command-term practice." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and evaluation, with examples from the Hyderabad logistics and pharma belt." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading and the internal research project, using local manufacturing and trade enterprises." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysis of unseen texts and comparative essays, for students who speak Telugu or Urdu at home." },
    { name: "IB Telugu B", levels: "HL / SL", description: "Language acquisition for students who speak Telugu, subject to tutor availability." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Reading, writing and oral practice." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming and a staged internal project, popular with Hyderabad's tech-minded families." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems models applied to a semi-arid plateau, lakes and groundwater." },
    { name: "IB Geography", levels: "HL / SL", description: "Urban growth, resources and fieldwork method." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, methods and essay structure." },
  ],

  igcseSubjectsIntro:
    "Two bodies award the IGCSE, Cambridge and Pearson Edexcel, and their papers, tiers and question wording are not interchangeable. Board, code and tier are settled before we suggest a teacher. The list below reflects requests from families around Hyderabad.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge's Maths course, examined through one calculator and one non-calculator paper, with algebra and geometry given extra time for Extended candidates." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Early calculus and functions for students moving on to the Diploma or A Level." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson Maths in two matching papers where working earns marks." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Motion, energy, circuits and waves, plus questions on planning a practical." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, mole calculations, rates of reaction and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cell structure, human body systems, plant life and ecosystems." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Comprehension, composition and speaking practice for Telugu and Urdu speakers." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Algorithm design, how data is stored and how networks work." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Enterprise, marketing, finance and case-study questions." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "First-course economics with data-response questions." },
  ],

  regionsTitle: "Farooqnagar, Shadnagar and nearby places our tutors reach online",
  regionsIntro:
    "Any street gets the same picture on screen. What varies is who is at home when, how long the highway commute takes and how steady the signal is, so each note below covers those points.",
  regions: [
    { name: "Farooqnagar town", note: "The mandal centre and market, where families with shops and small businesses tend to free up after the evening trade." },
    { name: "Shadnagar", note: "The larger neighbouring town and revenue division headquarters on the highway; many households have a parent who commutes to Hyderabad." },
    { name: "Shadnagar bus stand and NH44 belt", note: "A busy corridor along the highway, so a room facing away from the road suits a lesson call better." },
    { name: "Kothur", note: "A nearby town along the highway with a mix of factory workers and trading families." },
    { name: "Kondurg", note: "A mandal to the east, where students often travel into Shadnagar or towards Hyderabad for school." },
    { name: "Keshampet", note: "A mandal with villages and farms where broadband quality varies and a mobile hotspot is a useful back-up." },
    { name: "Nandigama and Kamsanpalle side", note: "Villages around the town with short school afternoons; evening lessons suit them best." },
    { name: "Jadcherla", note: "A town south on the Mahbubnagar side whose families sometimes link in for subjects a local tutor cannot cover." },
    { name: "Shamshabad and the airport belt", note: "An area to the east with staff housing for the airport and its services, home to several families with international exposure." },
    { name: "Hyderabad outskirts", note: "Families moving into the city fringe often keep their Farooqnagar ties and use online lessons to smooth a school transfer." },
  ],

  schoolDisclaimer:
    "This list exists purely so parents can see where international-board classrooms are found near Farooqnagar. IB Gram holds no agreement with these schools or with the IB, Cambridge or Pearson. Fees, seats and current programmes should be confirmed with the school itself.",
  schoolClusters: [
    {
      city: "Local: Farooqnagar and Shadnagar",
      note: "No IB or IGCSE school in Farooqnagar or Shadnagar could be verified, so the local list is left empty. Schools on the highway follow the Telangana State Board, CBSE or ICSE.",
      schools: [],
    },
    {
      city: "Nearby: Hyderabad, southern side",
      note: "The city's south-west corridor is closest to the Shadnagar highway and holds several established international-board campuses that appear on our Hyderabad page.",
      schools: ["Oakridge International School", "CHIREC International School", "International School of Hyderabad"],
    },
    {
      city: "Nearby: Hyderabad, central and eastern campuses",
      note: "Further into the city, other schools offer IB or IGCSE programmes; the journey from Farooqnagar is long, so families usually weigh boarding or relocation.",
      schools: ["The Gaudium School", "Glendale International School", "Johnson Grammar School"],
    },
    {
      city: "Nearby: Hyderabad, outer ring",
      note: "Campuses on the outer edge of the city, which some families from the highway belt compare for their shorter road time.",
      schools: ["Sreenidhi International School", "Solitaire Global Schools"],
    },
  ],

  modesIntro:
    "Farooqnagar students all learn over video. The family then picks a pace: a single class each week, a mapped term with written updates, or a concentrated run ahead of an exam.",
  modes: [
    {
      title: "A standing weekly lesson",
      description:
        "The same tutor at the same hour each week. The student turns up with finished exercises and doubts, and the tutor moves to the next idea while fixing slips as they are written on the shared board.",
      bullets: [
        "Tutor chosen for your subject, level and awarding body",
        "Commonly sixty minutes weekly",
        "Working written out on screen as you go",
        "A fit for IGCSE, MYP and first-year DP",
      ],
    },
    {
      title: "A planned term with reviews",
      description:
        "A map of the term, a short report after every class and a catch-up every few weeks, so topics can be reordered if school speeds up or slows down.",
      bullets: [
        "Plain-language reports for parents",
        "Progress chats by message or call",
        "Sits alongside the school timetable",
        "Top-up classes ahead of unit tests",
      ],
    },
    {
      title: "A sprint before the papers",
      description:
        "When mocks and the May or November papers draw near, classes come more often and revolve around timed questions that are marked in detail.",
      bullets: [
        "Scripts marked against the official scheme",
        "Up to four classes a week when the timetable allows",
        "Scheduled round Dasara and intermediate exams",
        "Begin roughly three weeks before paper one",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Farooqnagar, or do families look to Hyderabad?",
      paragraphs: [
        "Our checks turned up no school in Farooqnagar or Shadnagar that offers the IB or a Cambridge or Edexcel IGCSE. The area has plenty of private schools, several with Telugu and English sections, all on the Telangana State Board, CBSE or ICSE. Should one advertise an international curriculum, request its authorisation letter and a list of the subjects actually taught.",
        "Hyderabad is where the international-board schools are. Oakridge International School, CHIREC International School and the International School of Hyderabad appear on our Hyderabad page, along with The Gaudium School, Glendale International School, Johnson Grammar School, Sreenidhi International School and Solitaire Global Schools. Each has its own admission process and calendar.",
        "The distance matters. From the Shadnagar highway, a daily school run to most of those campuses is long, and a child may spend two hours or more on a bus. Some families choose boarding, some move into the city, and some keep their child on a local board while adding specialist international-level tutoring online.",
        "Tutoring cannot secure a seat in an IB school or issue an IGCSE certificate, and we say so early. Where we help is in readying a child for an entrance test, backing up a pupil already enrolled in Hyderabad at weekends, or coaching a private IGCSE candidate who has booked an exam centre.",
      ],
    },
    {
      heading: "How do Telangana board, CBSE, ICSE, IGCSE and IB compare for a Farooqnagar child?",
      paragraphs: [
        "The Telangana State Board runs SSC at Class 10 in March and intermediate at Class 11 and 12, with subject streams such as MPC and BiPC built around the state entrance test. CBSE and ICSE follow national syllabi, and IGCSE and IB are international, examined in May and November sessions and taught in English.",
        "Telangana students are often very strong in Maths and science and accustomed to heavy practice. International papers ask for a different kind of answer, one that explains reasoning, interprets unfamiliar data and is written in clear English. Early tutoring therefore spends time on command words, structure and writing.",
        "For admission inside Telangana, the state engineering entrance, now called TG EAPCET, and national tests such as JEE and NEET have their own eligibility rules, which can depend on the final school board and on local-area status. Check the current rules before switching boards.",
        "A Farooqnagar household should start from where the child will complete school and what comes next. Hyderabad's international schools, an overseas university or a liberal arts college point to an international board; a Telangana state engineering or medical seat more often points to the state board or CBSE.",
      ],
      table: {
        caption: "Board options for Farooqnagar students",
        columns: ["Board", "Where it is taught", "What the paper rewards", "Main exam months"],
        rows: [
          ["Telangana State Board", "Most schools and junior colleges nearby", "Recall, speed and entrance-test drilling", "Feb and Mar"],
          ["CBSE", "Private and central schools", "Concepts with application questions", "Feb and Mar"],
          ["ICSE / ISC", "A handful of English-medium schools", "Wide syllabus, fluent written English", "Feb and Mar"],
          ["Cambridge or Edexcel IGCSE", "Hyderabad and other large cities", "Applied questions, two tiers", "May-Jun and Oct-Nov"],
          ["IB Diploma", "Hyderabad and other large cities", "Six subjects, essays, coursework", "May and Nov"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a family on the Shadnagar highway?",
      paragraphs: [
        "No rate card is published. After the trial class a fee is quoted on paper, shaped by the level of the course, the subject, the tutor's years on that syllabus and the weekly hours. Nothing is taken until you agree.",
        "IB Physics at Higher Level asks more of a tutor than IGCSE Core English, and rates reflect the difference. An experienced teacher who knows where students go wrong can often save weeks, so a higher hourly rate may produce a lower total over a term.",
        "For a family on the highway the real comparison is with travel. A weekly class in Hyderabad means petrol or bus fare, parking or a long wait, and a late return on a congested road. A video lesson at home takes none of that time from the child's evening.",
        "Begin with the trial, read the written rate and decide. You can change tutor, change frequency or stop at any time.",
      ],
      bullets: [
        "Level of study: IB Higher or Standard, IGCSE Core, Extended, Foundation or Higher",
        "The subject and how well the tutor knows that exact course",
        "Classes per week and how long each one runs",
        "Ongoing weekly teaching against a short intensive",
      ],
    },
    {
      heading: "Online tuition, Hyderabad classes, a local tutor or self-study: which suits a Farooqnagar child?",
      paragraphs: [
        "Hyderabad has IB and IGCSE coaching, but from Farooqnagar the round trip is tiring and unreliable in traffic. A weekly class can lose three hours to the road, and a child who does it for two years tends to drop out. An online lesson reaches the same kind of teacher.",
        "Private tutors around Shadnagar are easy to find for state-board and CBSE papers, and many teach well. Hardly any have handled IB criteria or IGCSE mark schemes, which makes them a sound choice for general reinforcement rather than paper-specific coaching.",
        "A disciplined IGCSE student can get far alone with past papers in Maths and the sciences. Alone, though, nobody reads the essays, lab reports or IB coursework against the criteria, and that feedback is exactly what is missing.",
        "Online one-to-one lessons offer syllabus knowledge and personal attention. The catch is connection quality, which can vary on the edge of town, so tutors agree a fallback such as a hotspot and photographed working.",
      ],
      table: {
        caption: "Study routes for Farooqnagar students",
        columns: ["Route", "Strength", "Weakness"],
        rows: [
          ["Online one-to-one", "Teaching on your precise course", "Relies on steady broadband"],
          ["Classes in Hyderabad", "In-person and a peer group", "Long, unreliable travel"],
          ["Local tutor", "Nearby and familiar", "Seldom with IB or IGCSE background"],
          ["Self-study", "Cheap and flexible", "Nobody marks the writing"],
        ],
      },
    },
    {
      heading: "How do Bathukamma, Dasara and the Telangana summer shape the study year?",
      paragraphs: [
        "Bathukamma and Dasara fall in September and October and are the biggest family festivals in Telangana, with nine days of flower celebrations, community gatherings and several school holidays. They sit close to the IGCSE October and November session and the IB November exams, so revision needs to be mostly finished before they begin.",
        "Sankranti in January is another long holiday, and Ugadi in March or April marks the new year. Muharram, Ramzan and Bonalu, which is celebrated in July and August, also change the rhythm of the household and, in some localities, the availability of evenings.",
        "The summer from March to May is hot, often above 40 degrees, and power cuts can occur. Afternoon study is difficult, and a late-evening lesson is usually more productive. The monsoon from June to September brings heavy showers, and the return monsoon in October can disrupt connections.",
        "Intermediate exams in February and March and SSC in March mark the local school calendar. Students taking an international board elsewhere follow that school's dates.",
      ],
      table: {
        caption: "A study calendar for Farooqnagar",
        columns: ["Months", "Local calendar", "Effect on classes"],
        rows: [
          ["Jan to Feb", "Sankranti, intermediate practicals, cool weather", "Good months for long sessions and catch-up"],
          ["Mar to May", "Heat, SSC, IB May session, IGCSE May to June", "Late-evening lessons; timed papers"],
          ["Jun to Sep", "Monsoon, Bonalu, Bathukamma begins", "Plan for outages; finish new topics early"],
          ["Oct to Nov", "Dasara, Diwali, IGCSE and IB November sessions", "Complete revision before the festivals"],
          ["Dec", "Mild winter, school holidays", "Longer consolidation sessions"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Farooqnagar study next?",
      paragraphs: [
        "Within Telangana, Hyderabad has the University of Hyderabad, the BITS Pilani campus, IIIT Hyderabad, Osmania University and the Indian School of Business, each with its own eligibility and admission rules. Read the current prospectus before locking in subjects.",
        "Equivalence letters for IB and IGCSE results come from the Association of Indian Universities, and Diploma holders may use CUET-UG for central universities when that year's notice permits. The rules move, so read the latest text.",
        "JEE Main and Advanced call for Physics, Chemistry and Maths, and NEET-UG for Biology alongside Physics and Chemistry. Settle the IB subject package before Class 11 begins, because changing it midway is difficult.",
        "Abroad, universities in the UK, Canada, Australia and Europe read IB and IGCSE results readily, and US colleges weigh them with test scores and essays. Hyderabad has many families with US and Gulf ties. Tutors assist with subject content alone; application essays belong to the student.",
      ],
    },
    {
      heading: "Why are IB Maths and the sciences hard, and how does a tutor help?",
      paragraphs: [
        "IB Maths asks for explanation as much as calculation. In Analysis and Approaches each algebraic step must be justified, and in Applications and Interpretation the student must decide whether a model fits the situation. Both courses include an Exploration, an independent investigation worth a fifth of the grade.",
        "Physics students drop marks through missing units and imprecise graphs. Chemistry brings long calculations, and quick use of the data booklet saves time. Biology is broad, and the command term in a question often decides what counts as a full answer.",
        "For coursework, the tutor goes through the marking criteria with the student, helps settle on a question worth investigating, and reads a draft to point out where marks are slipping. Collecting the data and writing the submitted text stay with the student.",
        "A Telangana student who has trained on entrance-style practice has strong speed. A tutor keeps that and adds the habit of writing out reasoning, which is where the international papers reward effort.",
      ],
    },
    {
      heading: "Which IGCSE tier fits: Core or Extended at Cambridge, Foundation or Higher at Edexcel?",
      paragraphs: [
        "Cambridge Core entries cannot score above C, whereas Extended goes up to A*. Edexcel Foundation stops at grade 5 and Higher runs to 9. Anyone expecting to take IB Maths HL or Diploma sciences should be entered for the upper tier.",
        "Schools usually choose the tier. Private candidates, or parents weighing two schools, learn the most from a diagnostic paper. A score close to the boundary should be discussed with the school or exam centre before entries close.",
        "Subject choice tracks what the student wants to become. Future engineers and doctors usually pick Maths with all three sciences, and sometimes Computer Science; those leaning towards commerce add Economics and Business Studies. Hindi or Telugu, if the school or centre offers it, fills out the list.",
        "Fix the board and code before the first class so preparation targets the right paper.",
      ],
    },
  ],

  tutorsIntro:
    "Every match is made on four points: the programme, the subject, the level and the awarding body. The teachers live in India and keep IST, and each profile carries a short note on which syllabus the person has taught and what makes them a fit for your child.",

  process: [
    { title: "Tell us about your child", description: "Give us the programme or board, the subject, the level, the current school and the evenings that are free at home in Farooqnagar." },
    { title: "Meet the suggested tutor", description: "We tell you who we have in mind and which matching courses that tutor has taught before." },
    { title: "Sit a trial class", description: "One complete online class, unpaid and carrying no commitment." },
    { title: "Get the terms on paper", description: "Weekly hours, the fee and the opening topics are written out for you before any payment is made." },
    { title: "Keep reviewing", description: "Classes carry on with summaries and check-ins, and asking for a replacement tutor takes one message." },
  ],

  whyPoints: [
    { title: "Matched to the syllabus", description: "Teachers are picked for the course and paper your child will sit." },
    { title: "Open about schools", description: "We state up front that we found no IB or IGCSE school in Farooqnagar." },
    { title: "See it before you pay", description: "One trial class shows you the teaching directly." },
    { title: "Firm limits", description: "Nobody writes a student's assessed pieces." },
    { title: "Parents stay informed", description: "A summary after every class and periodic reviews." },
    { title: "Changing is simple", description: "A wrong match is replaced quickly." },
  ],

  faqs: [
    { question: "Is Farooqnagar the same place as FarooEnagar or Shadnagar?", answer: "Farooqnagar is the correct spelling of the town in Rangareddy district, Telangana. FarooEnagar is a truncated form found in some lists, and Shadnagar is the larger neighbouring town next to it. This page covers families in all three names." },
    { question: "Is there an IB or IGCSE school in Farooqnagar?", answer: "None that we have been able to verify. The schools around Farooqnagar and Shadnagar work to the Telangana State Board, CBSE or ICSE syllabuses, and the closest campuses with an international board that we can confirm sit in Hyderabad. If a local school advertises IB or IGCSE, ask it for the authorisation document and the list of subjects it really teaches before paying anything." },
    { question: "Can I get IB home tuition in Farooqnagar?", answer: "Home tuition in Farooqnagar takes an online form: your child sits at home and a subject specialist based elsewhere in India teaches live over video, one to one. Tutors do not make the trip to Farooqnagar, since visits to the home are offered only in Gurugram and parts of Delhi NCR, and we tell every family so before any booking is made." },
    { question: "Do you have IGCSE tutors for Farooqnagar students?", answer: "We do, for both Cambridge and Pearson Edexcel. The first things we ask for are the syllabus code and the tier, such as Cambridge 0625 Physics Extended or Edexcel 4MA1 Mathematics A Higher, because a tutor who has taught that paper marks work the way the examiner would. Lessons run online on Indian Standard Time, so there is no clock to adjust." },
    { question: "Does a tutor come to my house in Farooqnagar?", answer: "No, and the setup is simpler than people expect. A laptop or tablet, a connection that holds for an hour and a quiet corner of the house are all the student needs. The tutor, who is elsewhere in India, teaches live and one to one, reading each line of working as it appears on a shared whiteboard. Nobody from IB Gram comes to a Farooqnagar home." },
    { question: "How much does IB or IGCSE tuition cost in Farooqnagar?", answer: "No fixed price is published, because the fee moves with the level of the course, the subject, how long the tutor has taught that syllabus and how many hours a week are booked. Once the free trial is over, the rate comes to you in writing. Many families then set it against what a weekly journey into Hyderabad would cost in fuel, fares and lost evenings." },
    { question: "Which schools near Farooqnagar teach IB or IGCSE?", answer: "None in Farooqnagar that we can confirm. Hyderabad schools such as Oakridge International School, CHIREC International School and the International School of Hyderabad appear on our Hyderabad page. Check each school's current programmes and admissions yourself." },
    { question: "Is the first lesson free?", answer: "It is. The student sits one genuine online lesson with the tutor we propose, at no charge and with no strings attached. You then decide whether to go on, and if you do, the rate is put in writing first so that nothing is booked on a verbal promise." },
    { question: "Can your tutors help with the IA or Extended Essay, and will they write it?", answer: "Help is available; writing is not. A tutor will go through the assessment criteria, help narrow a topic to something researchable, look over a plan and comment on drafts the student has written. The investigation, the data and every sentence of the submitted piece must be the student's own, and requests to produce assessed work are turned down." },
    { question: "Which IB Diploma subjects are covered?", answer: "The list runs from Mathematics (Analysis and Approaches or Applications and Interpretation) through Physics, Chemistry and Biology to Economics, Business Management, Computer Science, Geography, Psychology and Environmental Systems and Societies. English A, Hindi B and Telugu B cover the language requirement, all at Higher or Standard Level. If your child has an unusual combination, ask us, and we will say frankly whether we can staff it." },
    { question: "Do you teach MYP and PYP to children from Shadnagar?", answer: "Yes, at both levels, with a different feel for each. Younger PYP children get brief, activity-based sessions built around reading and a feel for numbers. MYP students work on writing against published criteria, on science investigations and on the Personal Project, and every class ends with a written note for parents." },
    { question: "Is online tutoring as effective as classes in Hyderabad?", answer: "In most subjects it is, as long as the connection is stable. Student and tutor work problems together on one whiteboard, which is closer to sitting side by side than to watching a recording. For a Farooqnagar child the larger gain is practical: no long and unpredictable road journey, and a tutor selected for experience with the exact syllabus rather than for proximity." },
    { question: "How are tutors chosen for Farooqnagar?", answer: "Three things are looked at: the tutor's qualifications, recent experience of teaching the specific syllabus, and how clearly they explain. The shortlist is then matched to your child's level and aim. The trial lesson serves as the real test, since it shows whether the two work well together before you commit to anything." },
    { question: "When should tutoring begin?", answer: "Early is better: the first week of the course, meaning Grade 9 for IGCSE and Class 11 for the Diploma, lets good habits form from the start. A child facing an admission test at a Hyderabad school can begin one term ahead and concentrate on English writing and Maths." },
    { question: "My child is in a Telangana board school. Can we switch to IB or IGCSE?", answer: "Only a school can offer the seat, and tutoring cannot create one. What a tutor can do before the first term is introduce the applied style of question, fill the content gaps left by the change of syllabus and build up English writing, so your child arrives at the new school already used to the demands." },
    { question: "Can lessons fit around Dasara and the summer heat?", answer: "They can. Weekday evenings once the highway traffic has eased and Sunday mornings suit most Farooqnagar families, and the calendar is drawn up with Bathukamma, Dasara and board exam weeks in mind. When heat or a power cut gets in the way, the tutor and family agree a fallback beforehand, for instance an audio call with photographs of the written working." },
    { question: "What happens if my child and the tutor are a poor match?", answer: "Let us know and a different tutor is lined up. We check in early on purpose, since a poor fit shows within the first few lessons, and the written plan gives both sides something to measure against when expectations drift." },
    { question: "Does IB Gram have any connection with a school or an examining body?", answer: "None at all. IB Gram is a separate tutoring service, unconnected to the IB organisation, Cambridge, Pearson and every school in Farooqnagar, Hyderabad or anywhere else. Where a school is named on this page it is only to show where international classrooms are located." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "Online tuition in cities nationwide." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person visits are available." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "IB programmes and subjects." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Core, subjects and scoring." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry learning for early years." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA versus AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Backgrounds and subjects." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write or WhatsApp to begin." },
    { label: "IB and IGCSE tutoring in Hyderabad", href: "/hyderabad/", description: "The nearest city with international schools." },
    { label: "IB and IGCSE tutoring in Vikarabad", href: "/vikarabad/", description: "A neighbouring Telangana town." },
    { label: "IB and IGCSE tutoring in Mahbubnagar", href: "/mahbubnagar/", description: "The district city to the south." },
    { label: "IB and IGCSE tutoring in Sangareddy", href: "/sangareddy/", description: "Another town in the Hyderabad belt." },
  ],

  closingHeading: "Book a free trial lesson for your Farooqnagar student",
  closingBody:
    "A free online lesson is the easy first step. Tell us the board or programme, the subject, the level and which evenings are clear in your Farooqnagar home, through WhatsApp on +91 7439 368 115 or by email to support@ibgram.com, and we will propose a tutor and explain why that person fits before the trial is fixed.",
};
