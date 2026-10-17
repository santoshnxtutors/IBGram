import type { CitySeoPage } from "../types";

/**
 * /ratia/ - IB and IGCSE tutoring page for Ratia, Fatehabad district, Haryana. No IB or Cambridge/Edexcel
 * school could be confirmed in Ratia, so stripSchools is empty and clusters are labelled nearby-city groups.
 */
export const ratia: CitySeoPage = {
  slug: "ratia",
  countryName: "Ratia",
  countryNameLong: "Ratia, Haryana",
  demonym: "Ratia",
  state: "Haryana",
  stateCode: "IN-HR",
  flagCode: "in",
  countryCode: "IN",
  region: "Haryana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around the cotton and paddy seasons, dense winter fog on the Fatehabad roads and the long Diwali and summer breaks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 29.6833, longitude: 75.5833 },
  wikipedia: "https://en.wikipedia.org/wiki/Ratia",
  alternateNames: ["Ratia Haryana", "Ratia Fatehabad"],
  stripSchools: [],

  title: "Ratia IB & IGCSE Tutors | Private Tuition at Home, Online",
  metaDescription:
    "Private IB and IGCSE tuition for Ratia, Fatehabad: live one-to-one online lessons from home, for DP, MYP, PYP and Cambridge or Edexcel. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Ratia",
  heroEyebrow: "ONLINE PRIVATE TUITION FOR IB & IGCSE STUDENTS IN RATIA",
  heroSubtitle:
    "Looking for home tuition in Ratia for an IB or IGCSE course? Our version is online home tuition: a live, private lesson at your own study table with an Indian tutor who has taught your exact syllabus. No tutor travels to Ratia, and your child does not have to travel to Hisar, Chandigarh or Gurugram to find one.",
  primaryKeyword: "IB and IGCSE tutors in Ratia",
  imageAltText: "A Ratia student wrapped in a shawl on a foggy winter evening, solving an IGCSE Maths problem with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor in Ratia",
    "IGCSE tutor in Ratia",
    "IB home tuition Ratia",
    "IGCSE home tuition Ratia",
    "IB private tuition Ratia",
    "IB Maths tutor Ratia",
    "IGCSE Maths tutor Ratia",
    "IB Physics tutor Ratia",
    "IB Chemistry tutor Ratia",
    "IB Biology tutor Ratia",
    "IB DP tutor Ratia",
    "IB MYP tutor Ratia",
    "IB PYP tutor Ratia",
    "IGCSE online tuition Ratia",
    "IB online tuition Ratia Fatehabad",
    "IGCSE tutor Fatehabad district",
    "online home tuition Ratia Haryana",
    "IB tutor near Tohana and Fatehabad",
  ],

  heroTrustPoints: [
    "Your child is matched with a tutor who has already taught the same IB or IGCSE course",
    "Everything is live and online; tutors do not come to Ratia homes",
    "A first lesson at no charge, so you can judge before deciding",
    "Independent of the IB, Cambridge, Pearson and every school mentioned",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "Cambridge, Edexcel", label: "IGCSE boards" },
    { value: "IST", label: "No time-zone gap" },
    { value: "Free trial", label: "Before you commit" },
  ],

  intro: {
    heading: "Home tuition for IB and IGCSE students in Ratia, delivered online",
    paragraphs: [
      "Ratia sits in the cotton and wheat country of Fatehabad district, close to the Ghaggar plain, and its education market is shaped by that: Haryana board schools, a good number of CBSE affiliates, and coaching for the government exams and entrance tests that lead out of the district. An international syllabus is not something most households here meet in the ordinary course of things. When it does come up, it is usually because a child is returning from abroad, a parent has moved for work, or relatives in Canada or Australia have pushed for a qualification that travels.",
      "That is the situation our tutoring is built for. A Ratia family that wants IB or IGCSE support gets a private tutor over live video, at a time agreed with them, rather than a seat in a batch somewhere else. The tutor is a person who has taught that course before, and who knows where students lose marks in it, whether that is a Paper 2 Chemistry calculation or an IGCSE Biology extended-response question.",
      "We should be plain about what we are not. IB Gram does not send teachers to houses in Ratia, because in-person lessons run only in Gurugram and parts of Delhi NCR. What Ratia gets is online one-to-one tuition, which is what most people searching for home tuition here actually need: a qualified tutor, a fixed hour, and no travelling along the foggy highway in December.",
      "The rest of this page covers what you will want to know before deciding: the school position in and around Ratia, how boards compare, what drives the cost of tuition, a table of how lessons compare with coaching and self-study, the exam calendar, university routes and the subject detail for Maths and the sciences. Questions go to support@ibgram.com or WhatsApp +91 7439 368 115.",
    ],
  },

  programmesIntro:
    "A town like Ratia does not have an IB campus of its own, so the four IB stages below are described by what a tutor actually does for a child who is following them, usually through a school elsewhere or through a family move. Pick the stage that matches your child's current class and we will find a tutor for it.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12, Nursery to Class 5",
      description:
        "Learning is organised around transdisciplinary themes and finishes with a pupil-led Exhibition. Tutoring at this age keeps reading, number sense and curiosity going without turning it into drill.",
      countryNote:
        "In Ratia, PYP support mostly serves children who began the programme abroad or in a metro and now live with grandparents or on a posting in Haryana.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16, Class 6 to 10",
      description:
        "Eight subject groups are marked against criteria rather than a single exam, and the Personal Project is the capstone. A tutor helps a child read the criteria and write to them.",
      countryNote:
        "A Ratia student in MYP typically needs help moving from the Haryana board habit of fixed answers to criterion-based reasoning.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects at Higher or Standard Level, plus Theory of Knowledge, the Extended Essay and CAS. Tutoring is subject by subject, with timed paper practice from the second term.",
      countryNote:
        "Ratia families considering DP usually weigh it against CBSE plus entrance coaching and want to understand the workload before committing.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three DP courses are combined with a career-related study and a reflective project. Tutors support the academic DP courses and the language component.",
      countryNote:
        "Rare in this part of Haryana, but relevant for students heading toward hospitality, business or design routes abroad.",
    },
  ],

  subjectsIntro:
    "These are the IB Diploma courses Ratia students ask about most, with a note on how each one is coached. Subjects outside the list can usually be arranged on request.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "For students who enjoy algebra, functions and calculus; sessions mix new theory with timed no-calculator practice, and the Exploration idea is shaped early." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and the graphic display calculator carry the course, so lessons teach the keystrokes as carefully as the concepts." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, electricity and the HL fields content are taken through worked numericals, with data-handling practice for the lab report." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, kinetics, equilibrium and organic pathways get repeated drilling, plus clean presentation of units and uncertainties." },
    { name: "IB Biology", levels: "HL / SL", description: "Precise vocabulary and diagram labelling win marks, so tutors rehearse definitions and the exact meaning of command terms." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, evaluation and real-world examples; students from agricultural districts often find the commodity and trade units easy to relate to." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading and structured paragraphs, useful for children from trading and farming business families." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and the paper 1 pseudocode style, with programming practice for the internal assessment." },
    { name: "IB English A", levels: "HL / SL", description: "Close reading, comparative essays and oral commentary, for students whose daily language at home is Haryanvi, Punjabi or Hindi." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language acquisition for students who want a scoring subject with familiar material, with structured writing and oral practice." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, evaluation and the essay formats examiners expect, with practice on the experimental-design internal." },
    { name: "IB Theory of Knowledge", levels: "Core", description: "Tutors help students understand knowledge questions and plan their thinking; the essay and exhibition themselves stay the student's own work." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE subjects most requested from Ratia, with Core and Extended tiers explained at the first lesson.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics with a full set of past papers; Extended students also get help with calculus basics and vectors." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, thermal physics and electricity worked as numerical problems, with the alternative-to-practical paper rehearsed." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Mole calculations, the reactivity series and organic basics, plus exam technique for balancing and gas tests." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cell biology, plant transport and genetics, with a focus on describing and explaining in the right depth for each mark." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For students taking a double-award route who need all three sciences covered in a single weekly plan." },
    { name: "IGCSE English First Language", levels: "Extended", description: "Directed writing, summary and descriptive or narrative composition, with feedback on style and structure." },
    { name: "IGCSE English as a Second Language", levels: "Core / Extended", description: "Reading, writing, listening and speaking practice for children moving from Hindi-medium schooling." },
    { name: "IGCSE Computer Science", levels: "Extended", description: "Programming logic, binary and networks, with pseudocode written the way the paper wants it." },
    { name: "IGCSE Economics and Business Studies", levels: "Core / Extended", description: "Definitions, data response and short essays, built around everyday examples from a small-town market." },
    { name: "IGCSE Hindi as a Second Language", levels: "Core / Extended", description: "Comprehension, letters and essays for students who need a dependable language grade." },
  ],

  regionsTitle: "Ratia and the surrounding belt our online tutors serve",
  regionsIntro:
    "We have not listed named colonies we cannot verify. Instead the areas below are the practical corners of the Ratia catchment, with a note on timing for each, since the school day and the road conditions decide when a lesson fits.",
  regions: [
    { name: "Ratia town centre", note: "Close to the market and the bus stand; most day schools finish in the early afternoon, leaving long evenings free for lessons." },
    { name: "Bus stand and railway side", note: "A busy approach where traffic thickens around bus arrival times, so an evening video lesson spares children a noisy commute." },
    { name: "Tohana road side", note: "Families here have the most contact with Tohana's schools and coaching, and sometimes want a specialist subject the town does not offer." },
    { name: "Fatehabad road side", note: "The route toward the district headquarters; students sometimes travel by bus for school, so lessons are placed after they return." },
    { name: "Jakhal and Bhuna direction", note: "A little further out, where bus timings are sparse and online lessons save a long afternoon." },
    { name: "Ghaggar belt villages", note: "Low-lying farmland where the rainy season can flood roads; a lesson at the desk continues when travel does not." },
    { name: "Hisar road side", note: "The corridor toward Hisar, the main university town for the region, and a useful direction for older students planning college." },
    { name: "Ratia block villages", note: "Rural households where a child may be the first to study an international course, and where one steady weekly slot works better than many scattered ones." },
    { name: "Sirsa-facing outskirts", note: "Families nearer the Sirsa side often compare options across two district towns before choosing online help." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service. We are not affiliated with, endorsed by or authorised by the International Baccalaureate, Cambridge University Press and Assessment, Pearson, or any school named on this page. School names appear only as geographic context and were taken from public directories; confirm curricula and admissions with each school directly.",
  schoolClusters: [
    {
      city: "Ratia and Fatehabad district",
      note: "Education here runs on the Haryana board and CBSE. We could not confirm any IB or Cambridge or Edexcel IGCSE school in Ratia or the district, so we name none, and international-syllabus students study through online tuition.",
      schools: [],
    },
    {
      city: "Nearby: Hisar and Sirsa",
      note: "These are the closest sizeable towns for most Ratia families. We could not confirm an IB or IGCSE school in either, so no school is listed here.",
      schools: [],
    },
    {
      city: "Nearby: Gurugram",
      note: "Gurugram is the region's main hub for international schools and the only place in Haryana with in-person IB Gram lessons. Some families consider boarding or relocation there.",
      schools: ["Amity International School, Sector 46", "GD Goenka World School, Sohna"],
    },
    {
      city: "Nearby: Mohali and Chandigarh",
      note: "The tricity is the nearest cluster with Cambridge-curriculum schools for families in this part of Haryana and Punjab.",
      schools: ["Oakridge International School, Mohali", "The British School, Chandigarh"],
    },
  ],

  modesIntro:
    "Every format below is delivered online, since tutors do not visit homes in Ratia. Choose the rhythm that suits your child's term, exam dates and the farming-season routine of your household.",
  modes: [
    {
      title: "Weekly one-to-one lessons",
      description:
        "One hour a week with the same tutor, moving through the syllabus in order, with homework marked before the next class.",
      bullets: [
        "Suitable for IB, MYP and IGCSE subjects",
        "Shared whiteboard for working out problems together",
        "Homework photographed and reviewed between lessons",
        "Same tutor all year, so they learn how your child thinks",
      ],
    },
    {
      title: "Exam-season intensive",
      description:
        "A compact block of two to four sessions a week before May or November papers, built around past-paper timing and error review.",
      bullets: [
        "Planned backwards from the exam date",
        "Mark-scheme reading taught explicitly",
        "Weak topics revisited in short rotations",
        "A written note after each session",
      ],
    },
    {
      title: "Catch-up and bridging",
      description:
        "For children joining an IB or IGCSE course mid-year, or coming from the Haryana board, this closes the gap in vocabulary and method.",
      bullets: [
        "Diagnostic first lesson to find the starting point",
        "Terminology and command-word practice",
        "Gentle move from memorised answers to explained reasoning",
        "Reviewed after a month and adjusted",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Ratia?",
      paragraphs: [
        "We could not confirm an IB or Cambridge or Edexcel IGCSE school in Ratia or elsewhere in Fatehabad district, and we would rather say so than put a name on this page that we cannot support. Schooling in the town is a mix of Haryana board schools, CBSE affiliates and a handful of private institutions that serve farming and trading families, with the usual pull toward Hisar and Chandigarh for anything more specialised.",
        "The families who ask us about international syllabuses are therefore a particular group. Some have a child who studied in Dubai, Canada or a metro school and has come back to the district. Others run a business with a link to Delhi or Gurugram and are planning a move. A few have a relative abroad who has told them that a Cambridge or IB certificate is widely understood by overseas universities, and want to know whether the route is realistic from a district town.",
        "For all of them the question is how to keep the syllabus going without a local school to lean on. A school normally gives a student a classroom, mock exams and a coordinator. In Ratia a family has to assemble those pieces, which is why we pay attention to the exam calendar, past-paper access and how the child will register as a private candidate where that applies.",
        "If a school in the district gains IB or Cambridge authorisation, the official directories on ibo.org and cambridgeinternational.org will show it first. We suggest checking them rather than relying on any tutoring site, including ours, for the school landscape, because approvals are added and withdrawn from year to year.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Ratia or Fatehabad district",
        "Haryana board and CBSE dominate local schooling",
        "Demand tends to come from returnees and relocating families",
        "Check ibo.org and cambridgeinternational.org for new authorisations",
      ],
    },
    {
      heading: "Haryana board, CBSE, IB and IGCSE: how do they compare for a Ratia family?",
      paragraphs: [
        "Four systems are in play for a Ratia child, and they reward different habits. The Haryana board and CBSE are the ordinary local choices, closely tied to NCERT books and to the entrance tests that most district students aim for. IB and IGCSE are international, assessed through a mix of written papers and internal work, and taught in English throughout.",
        "The table below sets them side by side. It is not a ranking. A child who wants an Indian engineering or medical seat through the national entrance route may well be better served by CBSE with coaching, while a child who expects to study abroad, or who will move between countries, may gain from IB or IGCSE.",
        "The sharpest practical difference is how an answer is marked. In the Haryana board and CBSE, a well-remembered textbook answer often earns full marks. In IB and IGCSE, the same fact must be applied to an unfamiliar situation, and examiners reward explanation and evaluation. Children who have been drilled to recall find this the hardest adjustment, and it is where a tutor earns the hour.",
        "We do not push families toward an international curriculum. If a child is happy and progressing on the local board, staying is a sound decision. We help where a family has already chosen IB or IGCSE, or is seriously considering it and wants to see what it feels like in a trial lesson.",
      ],
      table: {
        caption: "Board comparison for students in Ratia",
        columns: ["Feature", "Haryana board", "CBSE", "IB", "IGCSE"],
        rows: [
          ["Typical local availability", "Widely available in Ratia", "Available in several private schools", "No confirmed local school", "No confirmed local school"],
          ["Assessment style", "Year-end board exams, recall-heavy", "Board exams plus internal marks", "Papers plus internal assessments and core", "Subject papers, some coursework, Core or Extended"],
          ["Language of study", "Hindi or English", "English or Hindi", "English", "English"],
          ["Entrance route in India", "State and national exams", "JEE, NEET, CUET directly", "Via AIU equivalence and eligibility checks", "Via later Class 11-12 board, AIU checks"],
          ["Study abroad recognition", "Needs extra equivalence steps", "Generally accepted with test scores", "Widely recognised", "Widely recognised at 16"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Ratia?",
      paragraphs: [
        "There is no single price list, and we do not publish one, because the rate depends on who teaches and what is taught. After a free trial lesson you receive the rate in writing before anything is booked, so there are no surprises on the first invoice.",
        "Several things set the number. An IB Diploma Higher Level Physics tutor with years of examining experience will charge differently from a tutor supporting MYP Mathematics. The level also matters: Extended IGCSE Maths needs more preparation time than a Core revision hour. And frequency changes the arrangement, since a student who meets the tutor twice a week generally pays a different rate than one who comes once.",
        "What Ratia families do not pay for is travel. Because the lesson is online, there is no driving to Hisar or Sirsa, no petrol and no waiting in a coaching-centre lobby. For households managing a farm season or shop hours, that saved time often matters more than a modest difference in hourly rates.",
        "A sensible way to budget is to start with one weekly session in the hardest subject, review after a month with the written notes, and add sessions only if they are needed. Tutor changes cost nothing if the fit is wrong, so trying a different teaching style is not a financial risk.",
      ],
    },
    {
      heading: "Online home tuition, local coaching, private tutors or self-study: which fits Ratia?",
      paragraphs: [
        "Families in Ratia have four realistic routes. Local coaching centres exist, but they are built around the Haryana board, CBSE, JEE and NEET, not around IB or IGCSE syllabuses. A private tutor who lives in town may be excellent at Class 10 science yet not know the IB mark scheme. Self-study with past papers can work for a disciplined student. Online tuition with a specialist is the fourth option.",
        "The comparison below sets out how they differ on the points parents ask about most. No route suits every child, and some families combine them, for instance self-study for languages plus a tutor for Mathematics.",
        "The deciding factor is usually syllabus knowledge. An IB Maths AA HL paper has its own style, and a tutor who has never seen one will spend lessons figuring it out alongside your child. A specialist can skip that and go straight to what the examiner wants.",
        "Online delivery also removes the time constraints of a smaller town. A good tutor in Pune or Delhi is as reachable as one in Hisar, and the lesson is at a time that suits the household rather than the centre.",
      ],
      table: {
        caption: "Tuition options for IB and IGCSE students in Ratia",
        columns: ["Option", "Syllabus knowledge", "Flexibility", "Travel needed", "Individual attention"],
        rows: [
          ["Online one-to-one tutor", "Teaches the exact IB or IGCSE course", "Time agreed with the family", "None", "Full lesson on one child"],
          ["Local coaching centre", "Focused on Haryana board, CBSE and entrances", "Fixed batch timings", "Daily travel in town", "Shared with a batch"],
          ["Private tutor in town", "Varies, often board-based", "Moderate", "Tutor or student travels", "Good if subject matches"],
          ["Self-study", "Depends on resources", "Complete", "None", "None without feedback"],
        ],
      },
    },
    {
      heading: "What is the exam calendar and school year like for IB and IGCSE students in Ratia?",
      paragraphs: [
        "The IB Diploma has two examination sessions, May and November, and Cambridge and Edexcel IGCSE run a May to June series and an October to November series, with Edexcel adding a January option for some subjects. A Ratia student mostly sits papers in a larger city, so the calendar has to include the journey and the exam-centre booking.",
        "The local year has its own rhythm. Hot, dry weeks in May and June affect concentration and power supply. The monsoon in July to September can flood low roads near the Ghaggar. October brings Dussehra and Diwali, when families travel and lessons need rescheduling. December and January bring fog severe enough to stop buses, and online lessons keep going when roads do not.",
        "We suggest working backwards from the exam date. For a May series, serious past-paper work should start by January; for November, by July. The table below shows how a typical year can be planned in Ratia.",
        "Because tutors work in IST, nothing needs converting. A child can have a lesson at 6 pm after returning from school and still be done well before dinner, even in the short days of winter.",
      ],
      table: {
        caption: "A study year for IB and IGCSE students in Ratia",
        columns: ["Period", "Local conditions", "Study focus"],
        rows: [
          ["April to June", "Heat, school breaks, May exams for earlier cohorts", "Revision for May papers, then summer bridging for the new year"],
          ["July to September", "Monsoon, possible flooding near the river", "New topics, internal assessment drafts, steady weekly lessons"],
          ["October to November", "Dussehra, Diwali, November exam series", "Mocks, past papers, short intensive blocks"],
          ["December to February", "Dense fog, cold, school winter schedules", "Mock review, weak-topic repair, May paper practice"],
          ["March", "Harvest pressures on many households", "Light, regular sessions and final topic coverage"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Ratia go for university?",
      paragraphs: [
        "The first thing families ask is whether an IB or IGCSE certificate keeps Indian options open. In general, Indian universities accept the IB Diploma through equivalence recognised by the Association of Indian Universities, and IGCSE students normally complete Class 11 and 12 or A Levels before applying. Rules differ between institutions and change, so always confirm with the college and the entrance body.",
        "For national entrance tests, eligibility depends on the subject combination. A student aiming at CUET-UG, JEE Main or NEET should check the subject and mark requirements on the official sites before choosing IB subjects, because a missing subject can close a door that was open a year earlier.",
        "Closer to home, Ratia students generally look toward Hisar for agricultural, engineering and general degrees, toward Chandigarh and Delhi for professional and liberal-arts colleges, and toward Gurugram for private universities. A good number also consider Canada, Australia, the UK and the US, where IB and Cambridge results are read routinely.",
        "Our job is the academic preparation. We do not offer admissions consulting or promise a seat, but tutors can explain how predicted grades, subject levels and standardised tests such as the SAT or IELTS fit into a plan, and we offer separate test-preparation support through the link below.",
      ],
      bullets: [
        "AIU equivalence for IB Diploma holders applying within India",
        "CUET-UG, JEE Main and NEET have their own subject rules to check",
        "Hisar, Chandigarh, Delhi and Gurugram are the common domestic routes",
        "Canada, Australia, UK and US for study-abroad families",
      ],
    },
    {
      heading: "How are IB Maths AA and AI, and the sciences, tutored for Ratia students?",
      paragraphs: [
        "IB Mathematics comes in two courses. Analysis and Approaches suits students who like algebra, calculus and proof-style reasoning, and is the usual choice for future engineers and mathematicians. Applications and Interpretation suits those who prefer data, modelling and technology, and is common among future business, social-science and design students. Each is offered at Higher and Standard Level.",
        "A tutor begins by looking at a child's last few papers. If the marks are lost to careless algebra, lessons focus on fluency and checking. If the problem is conceptual, such as differentiation or the normal distribution, the plan goes back to the idea before returning to exam questions. Students receive timed practice from the first term of Year 2.",
        "The sciences share a pattern: the examiner rewards precise language and careful working. In Physics we spend time on units, graph reading and the structure of a multi-step numerical. In Chemistry the repetitive skills are mole calculations, balancing and reaction mechanisms. In Biology, definitions and well-labelled diagrams carry marks. For all three, the internal assessment is a student's own work, and tutors only coach the method.",
        "Ratia students often study alongside a school timetable that has little lab work, so we help them describe experiments they may not have performed. Videos, simulations and data sets from past papers fill some of that gap, though a family should ask the school about practical access if they are enrolled in a laboratory-based course.",
      ],
    },
    {
      heading: "How do Core and Extended IGCSE tiers work, and which subjects should a Ratia student choose?",
      paragraphs: [
        "Most IGCSE subjects offer two tiers. Core covers the foundation content and caps the top grade at a C or equivalent in the lettered scale, while Extended covers everything and reaches the top grades. A student who finds a subject comfortable should usually be entered for Extended, because the ceiling on Core cannot be lifted later in the same series.",
        "Subject choice at this stage is about balance. Many students take a core of English, Mathematics, a science group, a language and one humanities or business subject. A Ratia student who intends to study medicine or engineering after Class 12 will want strong Mathematics, Physics, Chemistry and Biology. A student who prefers business or commerce can lean toward Economics, Business Studies and Accounting.",
        "Two exam boards are widely taken: Cambridge International and Pearson Edexcel. They differ in paper structure, mark schemes and in some topic coverage. We ask a family early which board the student is registered with, because tutoring a Cambridge Chemistry student with Edexcel past papers wastes weeks.",
        "Finally, think about where the child goes after Class 10. Many Indian schools accept IGCSE results for entry into Class 11, but the receiving school sets its own subject requirements. Checking those early prevents an awkward subject gap later.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Send the class, board, subject and exam session on WhatsApp or email." },
    { title: "Meet a matched tutor", description: "We share a short profile of someone who has taught your syllabus." },
    { title: "Try a free lesson", description: "A full trial class, with no payment taken first." },
    { title: "Confirm in writing", description: "Rates, weekly time and a first-month plan arrive as a clear note." },
    { title: "Learn and review", description: "Weekly lessons, notes after each, and a tutor swap if it is not right." },
  ],

  whyPoints: [
    { title: "A tutor for the exact course", description: "IB Physics HL meets an IB Physics HL teacher, not a general science tutor." },
    { title: "Built for a town without a local option", description: "Ratia families get specialists that no centre nearby can supply." },
    { title: "Honest about what is local", description: "We say openly that we could not confirm a school here." },
    { title: "Notes you can read", description: "Parents get a short written summary after every lesson." },
    { title: "Trial before payment", description: "Judge the tutor in a real class rather than from a brochure." },
    { title: "Coaching, never ghost-writing", description: "Tutors explain and guide; assessed work is always the student's own." },
  ],

  tutorsIntro:
    "Our tutors are based across India and teach in Indian Standard Time, so a Ratia student has no time-zone arithmetic. Before the trial lesson you will see who is proposed, what they teach and how they work, and you can ask for a different match.",

  faqs: [
    { question: "Do tutors come to my home in Ratia for IB or IGCSE tuition?", answer: "No, tutors do not visit homes in Ratia. In-person home tuition runs only in Gurugram and parts of Delhi NCR. In Ratia we offer online home tuition, meaning a live private lesson that your child takes at home on a laptop or tablet with a tutor who teaches the exact course. Many families find it more reliable than travel, especially in foggy winters or during the monsoon." },
    { question: "Is there an IB or IGCSE school in Ratia?", answer: "We could not confirm any IB or Cambridge or Edexcel IGCSE school in Ratia or Fatehabad district. Local schools follow the Haryana board or CBSE. If you hear of a new authorisation, check ibo.org or cambridgeinternational.org. Students who follow an international syllabus here usually do so through a school elsewhere, a distance arrangement or a family move, and use online tutoring for subject support." },
    { question: "Can I get IGCSE home tuition in Ratia?", answer: "Yes, as online home tuition. A tutor who has taught your board, Cambridge or Pearson Edexcel, joins a live video lesson at a time agreed with you. The child needs only a laptop, a stable connection and notebooks. We cover Mathematics, the sciences, English, Computer Science, Economics and Hindi, and tutors work through past papers with the mark scheme so that your child learns what examiners reward." },
    { question: "How do I register for IGCSE or IB exams from Ratia?", answer: "Registration is through an authorised exam centre, not through us. IB candidates normally register through their school, while private candidates for Cambridge or Edexcel need a centre that accepts them, often in a larger city. Fees and deadlines vary by centre and series, so contact the centre early, and ask the board about private-candidate rules for the subjects you plan to take." },
    { question: "What does tuition cost, and is the first lesson free?", answer: "The first lesson is free. After that, the rate depends on the tutor's experience, the subject and level, and the number of lessons a week. We do not publish prices because they vary; we send the rate in writing before you book. Because lessons are online, you also save the travel cost to Hisar or Sirsa, and a tutor change is free if the fit is wrong." },
    { question: "Which subjects do Ratia students ask for most?", answer: "Mathematics leads, followed by Physics, Chemistry and Biology, reflecting the interest in engineering and medicine across Haryana. English is common for students shifting from Hindi-medium schooling, and Economics and Business have a growing following among families with trading interests. If your subject is less common, such as Psychology or Computer Science, we can usually find a tutor with a short wait." },
    { question: "Will an IB or IGCSE student from Ratia still be able to sit JEE, NEET or CUET?", answer: "It depends on the subject combination and on the current rules, which the exam agencies update. Many IB and IGCSE students do apply, but eligibility conditions on subjects and marks must be checked on the official sites before choosing courses. We coach the academic content and can explain the options, but we cannot confirm eligibility on behalf of any exam body." },
    { question: "Does winter fog or monsoon flooding disrupt lessons?", answer: "Rarely, because the lesson is online. Fog that stops buses on the Fatehabad and Tohana roads does not stop a video call, and monsoon water on village lanes does not affect a laptop on a table. Power cuts and weak signals are the real risks, so we suggest a charged device, a backup hotspot and a quiet corner, and tutors can move a session by a few hours if needed." },
    { question: "Do tutors help with Internal Assessments and the Extended Essay?", answer: "Tutors coach; they never write. They explain the assessment criteria, help a student narrow a research question, comment on structure and show what a strong response looks like. The wording, data and arguments must be the student's own, as the IB requires. We decline any request to write or heavily rewrite assessed work, because it would put the student's result at risk." },
    { question: "At what age should a child start IGCSE preparation?", answer: "Class 8 or 9 is a sound starting point, as it gives time to shift from memorising to explaining without exam pressure. Children from Haryana board schools often need a term to adjust to English-medium reasoning in science and Maths. A diagnostic trial lesson will show how big the gap is, and the tutor can propose a gentle plan." },
    { question: "What internet speed and equipment are needed?", answer: "A steady connection of about 5 Mbps and a laptop or tablet are enough. A phone works as a fallback but is poor for shared whiteboards. If broadband is unreliable in your area, a mobile hotspot from a second SIM is a sensible backup, and a pen tablet or a camera pointed at the notebook helps when working through problems." },
    { question: "Can a child who speaks Haryanvi or Punjabi at home manage English-medium lessons?", answer: "Yes. Lessons are conducted in English because the exams are in English, but tutors are Indian and comfortable clarifying a concept in Hindi when needed. Over a few months, subject vocabulary builds, and children usually gain confidence in speaking about science and Maths in English, which also helps with later university interviews." },
    { question: "How often should my child have lessons?", answer: "One hour a week with homework suits a steady syllabus. Before exams, two to four sessions a week for four to six weeks is common. A child who is struggling in one subject might start with two lessons a week for a month. The tutor reviews progress after a few classes and suggests changes in writing." },
    { question: "Which IGCSE boards do you support?", answer: "We support Cambridge International and Pearson Edexcel IGCSE, with A Level and AS used as background for older students. The two boards differ in paper structure, tiers and some content, so tell us which one your child is registered for. The tutor then uses the correct specification, past papers and mark schemes rather than generic material." },
    { question: "How do I book a free trial from Ratia?", answer: "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with your child's class, board, subject and a few preferred times. We reply with a shortlist of matched tutors and propose a trial slot, usually within a couple of days. The trial is free, with no obligation, and you decide afterwards whether to continue." },
    { question: "Is IB Gram connected to the IB, Cambridge, Pearson or any school?", answer: "No. IB Gram is an independent tutoring service and has no affiliation with, or endorsement from, the International Baccalaureate, Cambridge, Pearson or any school. We coach students on publicly available syllabuses. Any school names on this page are used only for geographic context, and we recommend verifying curriculum and admission details directly with each institution." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "All the Indian cities and towns we serve online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB tutoring." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE guidance." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects and the three core elements." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led support for younger children." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "How the career-related strand fits in." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI at Higher and Standard Level." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of IB and IGCSE specialists." },
    { label: "Test preparation", href: "/admissions/test-prep/", description: "SAT, CUET and other entrance support." },
    { label: "In-person tutoring in Gurugram", href: "/gurgaon/", description: "The one Haryana city with home visits." },
    { label: "IB and IGCSE tutors in Fatehabad", href: "/fatehabad/", description: "Our page for the district headquarters." },
    { label: "IB and IGCSE tutors in Tohana", href: "/tohana/", description: "Our page for the neighbouring town." },
    { label: "IB and IGCSE tutors in Hisar", href: "/hisar/", description: "Our page for the regional university town." },
    { label: "IB and IGCSE tutors in Sirsa", href: "/sirsa/", description: "Our page for the neighbouring district town." },
    { label: "Contact us", href: "/contact-us/", description: "WhatsApp or email to book a free trial." },
  ],

  closingHeading: "Book a free lesson from Ratia",
  closingBody:
    "Tell us your child's class, board and subject, and we will suggest a tutor who has taught it before. The first lesson costs nothing, and the rate is shared in writing before you commit. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
