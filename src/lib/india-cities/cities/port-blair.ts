import type { CitySeoPage } from "../types";

/**
 * Port Blair (renamed Sri Vijaya Puram in 2024), capital of the Andaman and Nicobar Islands. schoolmykids
 * lists no IB school for the territory and none could be confirmed for Cambridge/Edexcel IGCSE, so
 * stripSchools is empty. Mainland clusters reuse Chennai, Visakhapatnam and Kolkata names already verified
 * on those city pages. Online-only delivery; the island setting (flights, ships, bandwidth) is the story.
 */
export const portBlair: CitySeoPage = {
  slug: "port-blair",
  countryName: "Port Blair",
  countryNameLong: "Port Blair, Andaman and Nicobar Islands",
  demonym: "Port Blair",
  state: "Andaman and Nicobar Islands",
  stateCode: "IN-AN",
  flagCode: "in",
  countryCode: "IN",
  region: "Andaman and Nicobar Islands, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-afternoon lessons after the early island school day, with a backup slot agreed for rough-weather days",
  lastUpdated: "2026-09-21",
  geo: { latitude: 11.6234, longitude: 92.7265 },
  wikipedia: "https://en.wikipedia.org/wiki/Port_Blair",
  alternateNames: ["Sri Vijaya Puram", "Port Blair Andaman", "South Andaman"],
  stripSchools: [],

  title: "Port Blair IB & IGCSE Tutors | Online Home Tuition, Andaman",
  metaDescription:
    "IB and IGCSE tutors for Port Blair, Andaman: one-to-one home tuition delivered online across the sea gap, DP, MYP, PYP and Cambridge, free trial included.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Port Blair",
  heroEyebrow: "IB & IGCSE HOME TUITION FOR PORT BLAIR AND THE ANDAMANS",
  heroSubtitle:
    "Port Blair sits roughly twelve hundred kilometres from the Indian mainland by sea, and a child here who needs IB or IGCSE home tuition cannot simply be sent to a mainland tuition centre after school. IB Gram brings private, one-to-one lessons to the islands over video, so a student in Port Blair studies live with a tutor who has taught the exact syllabus, without leaving home or the island.",
  primaryKeyword: "IB and IGCSE tutors in Port Blair",
  imageAltText: "Student in Port Blair taking an online IB Biology lesson from a tutor on the mainland, with a marine biology diagram on screen",
  secondaryKeywords: [
    "IB tutor in Port Blair",
    "IGCSE tutor in Port Blair",
    "IB home tuition Port Blair",
    "IGCSE home tuition Port Blair",
    "IB private tuition Port Blair",
    "IB Maths tutor Port Blair",
    "IGCSE Maths tutor Port Blair",
    "IB Physics tutor Port Blair",
    "IB Chemistry tutor Port Blair",
    "IB Biology tutor Port Blair",
    "IB DP tutor Port Blair",
    "IB MYP tutor Port Blair",
    "IB PYP tutor Port Blair",
    "IGCSE online tuition Port Blair",
    "online IB tutor Port Blair",
    "IB tutor Andaman",
    "IGCSE tutor Andaman and Nicobar",
    "IB tutor Sri Vijaya Puram",
    "IB tutor Aberdeen Bazaar",
    "Cambridge IGCSE tutor Port Blair",
  ],

  heroTrustPoints: [
    "Lessons that cross the sea by video, so no mainland trip is needed",
    "Tutors matched to the exact IB subject or Cambridge syllabus code",
    "A free first lesson, and a fallback slot planned for rough-weather days",
    "Independent of every school, examining body and tuition centre",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB range taught" },
    { value: "Cambridge, Edexcel", label: "IGCSE boards taught" },
    { value: "Island-ready", label: "Backup slots for bad weather" },
    { value: "Free trial", label: "Before anything is booked" },
  ],

  intro: {
    heading: "Studying an international syllabus on an island capital: how tutoring works from Port Blair",
    paragraphs: [
      "Port Blair, in the South Andaman district and the capital of the Andaman and Nicobar Islands, is a small, green harbour town, and it has been officially renamed Sri Vijaya Puram though almost everyone still says Port Blair. Its schools run the CBSE pattern for the most part, under the territorial administration, and a few follow other boards. No IB school shows up in national directories for the islands, and we could not confirm a Cambridge or Edexcel IGCSE school either. For most families, IB and IGCSE tutors in Port Blair exist only on a screen.",
      "That is not a small point. On the mainland a family can move a child to a better-fitting school across town. From here, the next school is an aeroplane ride or a several-day ship passage away. Flights leave for Chennai, Kolkata and a few other cities, and sea sailings from Chennai, Kolkata and Visakhapatnam take days rather than hours. Families whose parents are posted here in the administration, the armed forces or the medical services face that gap with a child already midway through an international syllabus.",
      "So here is what a Port Blair student gets, plainly stated. The lessons are live, private and one to one, over video, and a tutor never comes to your house, because in-person home visits run only in Gurugram and parts of Delhi NCR. The child needs a laptop or tablet and a working connection, and we plan for the fact that island bandwidth and weather can both interrupt a session.",
      "IB Gram is an independent service, unconnected with the International Baccalaureate, Cambridge, Pearson or any school. Tutors explain, question and mark practice; they do not write Internal Assessments, Extended Essays or coursework. Every lesson ends with a short written note, and the first one is free.",
    ],
    bullets: [
      "Online private lessons for Port Blair, Garacharma, Haddo, Dollygunj and the South Andaman belt",
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "A written backup plan for weather and connectivity interruptions",
      "Free trial, notes after each lesson, tutor change on request",
    ],
  },

  programmesIntro:
    "Families in the Andamans reach the IB and IGCSE through unusual doors: a posting that arrives with a child already on the Diploma, a plan to send a teenager to a mainland boarding school for the senior years, or a decision to prepare privately for a later move. The programme notes below describe what a tutor at a distance can realistically do in each case.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Children work through inquiry units rather than a textbook, and the last year ends with the PYP Exhibition. Tutoring is short and conversational, keeping a child's reading and number sense moving in step with a school elsewhere.",
      countryNote:
        "A younger child who arrived in Port Blair after starting PYP on the mainland often finds the local classroom very different, so online sessions keep the questioning habit alive between school days.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Four criteria mark every subject, and the Personal Project rounds off MYP 5. The skill being trained is reasoning in writing, not recalling a page of notes.",
      countryNote:
        "Where a Port Blair family is between postings, MYP tutoring holds a student's place in the units of the previous school, so the reunion with a mainland classroom does not open with a shock.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects with three at Higher Level, plus TOK, the Extended Essay and CAS. Papers fall in May and November, and schools mark the internal assessments before external moderation.",
      countryNote:
        "A Diploma student living in the Andamans usually studies through a school or an online provider elsewhere, and local tutoring fills the hours in which no teacher is physically near.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Diploma courses join a career-related study, a reflective project and a personal and professional skills strand. Tutors support the Diploma courses and help a student shape the reflective project into something genuine.",
      countryNote:
        "The CP is uncommon in India at large, and a Port Blair student meeting it does so through a school far away, so online tutors keep the academic core steady on the island.",
    },
  ],

  subjectsIntro:
    "Demand from the islands leans toward the sciences, with Biology and Environmental Systems given a natural local flavour by reefs, mangroves and forest, alongside Mathematics, Physics and Chemistry. Languages reflect the settler communities: Hindi, Bengali, Tamil, Telugu and Malayalam are all widely spoken here.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof for students heading to engineering or the physical sciences, with worked solutions typed live on the shared page." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator technique, with real data sets such as tide tables and rainfall records as practice material." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves and fields, plus practical design done with household equipment when a proper school laboratory is not within reach." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, energetics and organic mechanisms, with the data booklet used until it feels natural." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology to ecology, with coral reef, mangrove and tropical forest examples ready to hand for the extended answers." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Marine and island ecosystems, fisheries, tourism pressure and tsunami risk used as authentic case material." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram discipline, applied to a small island economy that depends on shipping, tourism and administration." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading and tool selection, with island tourism firms and ferry operators as workable research subjects." },
    { name: "IB Geography", levels: "HL / SL", description: "Coastal and hazards topics argued from evidence, with a fieldwork question sized for island conditions." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen commentary, comparative essays and oral rehearsal, drawing on a student's own voice and reading." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Text types, vocabulary and structured oral practice for a student for whom Hindi is a shared island language." },
    { name: "IB Bengali B", levels: "HL / SL", description: "Register and formal writing for students from Bengali-speaking families, who form a large part of the island's settler population." },
    { name: "IB Tamil B", levels: "HL / SL", description: "Support for Tamil-speaking families in writing and speaking to the standard the exam expects." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming logic and data structures, with the internal solution built in stages that a slow connection can still manage." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Building knowledge questions from lived situations and testing arguments, always in the student's own words." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Narrowing a topic into a researchable question, with guidance on process only, never on drafting." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Fair-test investigations and criterion writing that prepare students for Diploma sciences." },
  ],

  igcseSubjectsIntro:
    "IGCSE work from Port Blair generally prepares a student for a mainland or overseas school, or serves as a private route to a Cambridge record. Syllabus code and tier decide the plan, and printed past papers travel well when internet is slow.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Fluent number and algebra work, then geometry and statistics, with paper-based practice for days when the connection is poor." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus and trigonometry that leaves a student ready for A Level or IB Maths HL." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy, circuits and waves, with practical-paper questions rehearsed using simple home apparatus." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, reacting masses, rates and organic chemistry, tested by frequent short recall questions." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Human and plant systems, inheritance and ecology, using local island ecosystems for extended answers." },
    { name: "IGCSE Combined & Co-ordinated Sciences", levels: "0653 / 0654", description: "Three sciences in one timetable so that none is left behind." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Case studies and skills questions, with coastal and tectonic hazards close to the student's own experience." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions and diagrams, then short evaluations of who benefits and who pays." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying ideas to the printed case rather than reciting a definition." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, trace tables and Python that can be practised offline between lessons." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Composition, summary and directed writing, for students who move between several home languages." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and speaking practice at an even pace." },
  ],

  regionsTitle: "Port Blair neighbourhoods and South Andaman settlements our tutors reach online",
  regionsIntro:
    "Lessons travel by video, so a family at Aberdeen Bazaar has the same choice of tutor as a family in Bambooflat across the water. Practical differences come from geography: ferry timings, hilly roads, patchy mobile coverage in some settlements and the island's early sunrise, which pushes the school day forward. The notes below record such details.",
  tutorsIntro:
    "Port Blair students are matched with tutors based on the mainland who have taught the exact IB or Cambridge course and who understand that island bandwidth and weather sometimes interrupt a lesson. Each profile lists subjects, levels and availability, and the final choice follows the free trial.",
  regions: [
    { name: "Aberdeen Bazaar", note: "The old commercial heart of the town, with many trading families and government staff living within walking distance of the main market." },
    { name: "Junglighat", note: "Busy district with the harbour and jetties nearby, home to families connected with shipping and the fisheries." },
    { name: "Dollygunj", note: "Residential area on the airport side of town, convenient for parents who travel to the mainland often." },
    { name: "Delanipur", note: "Hillier residential belt where mobile signal varies from lane to lane, so a wired or Wi-Fi connection helps." },
    { name: "Haddo", note: "Harbour-side locality with administrative and port staff quarters, where fixed weekday hours are popular." },
    { name: "Garacharma", note: "Settlement on the road south of the town, with families who commute daily into Port Blair for work and school." },
    { name: "Brookshabad", note: "Area in the vicinity of Pondicherry University's island campus, popular with academic households." },
    { name: "Sipighat", note: "Fishing and farming settlement south-west of town, where the connection quality is the main practical question." },
    { name: "Bambooflat", note: "Across the inlet by road or ferry; families here schedule lessons around ferry timings and evening power." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service with no affiliation to any school named here, to the International Baccalaureate, Cambridge or Pearson. Mainland schools appear only to describe the nearest confirmed options for families in the Andaman and Nicobar Islands, and not as endorsements or partnerships. Please check every school's current programmes and authorisation before applying.",
  schoolClusters: [
    {
      city: "Port Blair and the Andaman and Nicobar Islands",
      note: "National directories list no IB school for the islands, and we could not confirm any Cambridge or Edexcel IGCSE school either. Schools here follow the CBSE pattern for the most part, with a few others, so an international syllabus has to be studied online or on the mainland.",
      schools: [],
    },
    {
      city: "Nearby by air: Chennai",
      note: "Chennai is the closest large city with a broad cluster of IB and Cambridge schools, and many island families use it for a boarding or relocation plan.",
      schools: ["Gateway International School", "APL Global School"],
    },
    {
      city: "Nearby by air and sea: Visakhapatnam",
      note: "Visakhapatnam has a growing set of international schools and is linked to the islands by sea, which makes it a plausible option for some families.",
      schools: ["Oakridge International School, Visakhapatnam", "Oak Valley International School, Gajuwaka", "Silver Oaks International School, Rushikonda"],
    },
    {
      city: "Nearby by air and sea: Kolkata",
      note: "Kolkata has long-standing links with the islands and a well-established set of international schools, especially useful for Bengali-speaking families.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "The Cambridge School, Kolkata"],
    },
  ],

  modesIntro:
    "Tutors do not visit homes in Port Blair, and home visits are offered only in Gurugram and parts of Delhi NCR. Each lesson runs live on video at the student's home, in one of three formats built for the realities of island life.",
  modes: [
    {
      title: "A fixed weekly hour with a backup plan",
      description:
        "One tutor and one regular slot, with a second time named in advance for days when weather or bandwidth interferes. It is the core arrangement for most students.",
      bullets: [
        "One tutor throughout the course",
        "A named backup slot every week",
        "Written note after each lesson",
        "Low-data mode when the line is weak",
      ],
    },
    {
      title: "Bursts around the exam calendar",
      description:
        "A short run of sessions before mocks, coursework deadlines or the May and November exams, for families who prefer a light routine for the rest of the year.",
      bullets: [
        "Past-paper practice by topic",
        "Booked only when needed",
        "Works around travel to the mainland",
        "Pauses easily when the family is away",
      ],
    },
    {
      title: "Recorded notes plus live review",
      description:
        "A live session for new material, and worked solutions and marked practice sent between sessions in files light enough for a slow connection. Good for students who study offline in the evening.",
      bullets: [
        "Marked work returned in small files",
        "Useful during storm-day outages",
        "Two live lessons near exams",
        "Keeps progress steady across holidays",
      ],
    },
  ],

  sections: [
    {
      heading: "What does the distance from the mainland mean for a Port Blair student on an international syllabus?",
      paragraphs: [
        "It means the child depends on remote teaching far more than a student in a mainland city does. There is no neighbouring IB school to visit, no second tutor a bus ride away, and no weekend coaching institute to try. Every extra resource has to arrive by video, by post that travels by air or sea, or on the family's next trip north.",
        "Distance also shapes time. A flight to Chennai or Kolkata takes a couple of hours, but ticket prices vary, seats fill during holidays and weather can ground services. Ship passages take days. For families weighing a move for the Diploma years, that is a real logistical burden, and it is why so many prefer to keep a child at home and add online tutoring.",
        "The good news is that a video lesson is indifferent to geography. A tutor in Bengaluru or Delhi teaches a child in Port Blair exactly as they would a child in the same city. A diagram is drawn on the shared board, a past paper is marked and returned, and the note after the lesson arrives on WhatsApp within minutes.",
        "What needs planning is the connection. Since the undersea cable to Chennai came into service in 2020, bandwidth has improved a great deal compared with the satellite era, but outages and slow evenings still occur. A wired connection, a phone hotspot as a spare and a named backup slot each week are simple precautions that keep progress steady.",
      ],
      bullets: [
        "No IB school is listed for the islands in national directories",
        "Flights and sea passages make relocation slow and costly",
        "Video lessons are unaffected by the sea gap once the line works",
        "Plan a backup connection and a backup slot each week",
      ],
    },
    {
      heading: "CBSE, other boards, IB or IGCSE: how do they differ for a student in the Andamans?",
      paragraphs: [
        "Schools run by the Andaman and Nicobar administration, together with the Kendriya Vidyalayas, largely follow the CBSE pattern: national textbooks, internal tests, and a board examination at Class 10 and Class 12. The system is orderly and familiar to families who have moved from one Indian posting to another.",
        "IB and Cambridge IGCSE ask different things. Papers give data, diagrams or unfamiliar situations and expect the student to reason aloud on paper. Marks depend on showing steps, using the right technical terms and writing in clear English. A right answer without working may earn little, and a long answer without focus may earn less than a short, exact one.",
        "Students in Port Blair often have strengths that suit these systems well. Many are comfortable in more than one language, used to change, and curious about the natural world around them. The gap tends to lie in extended English writing and in answering open questions, which is what tutoring trains.",
        "The table compares the systems on points island families raise most often.",
      ],
      table: {
        caption: "CBSE, IB and IGCSE compared for Port Blair families",
        columns: ["Point", "CBSE pattern", "IB Diploma", "Cambridge IGCSE"],
        rows: [
          ["Where taught near you", "Most schools on the islands", "None listed for the territory", "None confirmed on the islands"],
          ["Public exams", "Class 10 and Class 12 boards", "May and November session", "May-June and Oct-Nov series"],
          ["What earns marks", "Structured recall and method", "Reasoning, evaluation and internal work", "Skill-based papers and command terms"],
          ["Portability after a posting", "Excellent across CBSE schools", "Strong across IB schools worldwide", "Strong across Cambridge schools worldwide"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition for an island family cost, and what sets the price?",
      paragraphs: [
        "The rate is shaped by the programme, the level, the subject, how long each session runs and the tutor's experience with that syllabus. A tutor with years of IB Physics HL teaching commands a different rate from one supporting a Grade 7 student in English. IB Gram publishes no rate card; a written quote reaches you before the trial is booked.",
        "For Andaman families the comparison is not with a neighbourhood tutor but with the cost of moving a child, or of flying a tutor in. A single return flight to the mainland can exceed many weeks of online lessons, and boarding or renting near a mainland school adds a great deal more. Online tutoring turns a large logistical bill into a modest weekly one.",
        "The costliest mistake is a mismatch. A tutor whose experience is with a different board may spend months learning the command terms of a new syllabus at the student's expense. A tutor who has already taught the course starts working productively from the second lesson.",
        "There is no lock-in. Lessons can pause when the family travels, reduce after a good exam or stop with a few weeks' notice, and the tutor can be replaced at any point.",
      ],
      bullets: [
        "Programme, level, subject, length and tutor experience set the rate",
        "No flights or hostel costs to reach a mainland tutor",
        "Quote in writing before the trial lesson",
        "Pause during trips; no long contract",
      ],
    },
    {
      heading: "Online tutor, mainland coaching, local tutor or self-study: which route suits a Port Blair student?",
      paragraphs: [
        "Mainland coaching institutes are famous, but almost all target NEET and JEE, and none is a short bus ride away. A student who relocates for a year to attend one gives up home, family and the island routine, and often finds that the teaching does not follow the IB or Cambridge syllabus anyway.",
        "Local tutors in Port Blair are valued and often very good at CBSE-pattern subjects. The trouble comes with IB Chemistry HL or IGCSE Additional Mathematics: very few teachers on the islands have taught them. Families find themselves choosing between a mismatch and a search that leads off the island.",
        "Self-study with past papers is realistic for a disciplined IGCSE candidate and needs no bandwidth at all, which is an advantage. What it lacks is feedback. Without a marker, errors in method and phrasing repeat, and confidence can rest on a false sense of progress.",
        "The table lines up the four routes.",
      ],
      table: {
        caption: "Study routes for IB and IGCSE students in Port Blair",
        columns: ["Route", "Fit with IB and IGCSE", "Individual feedback", "Practical burden"],
        rows: [
          ["Online private tutor", "Matched to programme and subject", "Every lesson, one to one", "Needs a working connection; no travel"],
          ["Mainland coaching institute", "Mostly NEET and JEE", "Batch-level", "Relocation, flights and hostel costs"],
          ["Local island tutor", "Strong for the CBSE pattern", "Good, if syllabus knowledge matches", "Small pool for IB and IGCSE"],
          ["Self-study with past papers", "Whatever the student chooses", "None unless someone marks it", "Works offline; needs discipline"],
        ],
      },
    },
    {
      heading: "How do the monsoons, cyclone season and the early island sunrise shape a study plan?",
      paragraphs: [
        "The Andamans get two monsoons: the south-west from about May to September and the north-east from October to December. Rain can be heavy, ferries sometimes stop, and thunderstorms interrupt power and signal. A tutor and family who agree on a backup slot at the start of term rarely lose more than a lesson at a time.",
        "The Bay of Bengal also produces cyclones, most often in the pre-monsoon and post-monsoon months, and the islands remember the 2004 tsunami keenly. Emergency systems are taken seriously, and lessons yield to any warning. Notes and practice sets sent in small files let a student keep working through an outage.",
        "Because the islands keep Indian Standard Time despite lying far to the east, the sun rises very early and sets by late afternoon in winter. School days begin early and end early, which leaves the late afternoon and evening for lessons, and makes a 4 pm slot far more practical here than in most cities.",
        "The table maps the local year against the two exam calendars.",
      ],
      table: {
        caption: "Port Blair's year against IB and Cambridge dates",
        columns: ["Period", "Island conditions", "Exam and study focus"],
        rows: [
          ["January to March", "Dry season, best sea and air travel", "Revision before spring assessments; good months for visits to the mainland"],
          ["April to May", "Heat builds; first monsoon showers", "IB May papers and Cambridge May-June series"],
          ["June to September", "South-west monsoon, heavy rain and rough seas", "Coursework and Internal Assessment drafting; keep a backup slot"],
          ["October to December", "North-east monsoon, cyclone risk, Diwali, Durga Puja and Christmas", "Cambridge Oct-Nov series and mock exams"],
        ],
      },
    },
    {
      heading: "How are IB Biology, Environmental Systems and the other sciences taught from a distance?",
      paragraphs: [
        "The sciences at IB and IGCSE level rely on practical work, and a student who lacks a well-equipped laboratory might expect to be disadvantaged. Tutors handle this by concentrating on the parts that can be done at home: designing a fair test, collecting data from household apparatus, analysing results and writing a conclusion. Those are precisely the skills that the internal investigation rewards.",
        "IB Biology and Environmental Systems and Societies gain from the location. Reefs, mangroves, tropical forest, fisheries and tsunami risk are real subjects for a Port Blair student, and they give richer material for extended answers than the textbook examples do. A tutor encourages students to bring local evidence into their arguments, provided the sources are reliable.",
        "Physics and Chemistry are taught topic by topic, using past-paper questions as the working material. The tutor solves a problem live, hands over a similar one, and marks the attempt before the next lesson. Data-booklet familiarity and unit discipline are drilled until they are automatic.",
        "For a student who plans to move to a mainland school for Grade 11, a bridging block in the summer before helps enormously. It covers vectors, moles, cell structure and other gap areas, and it removes much of the shock of a new syllabus, new teachers and new city all at once.",
      ],
      bullets: [
        "Home-based experiments can meet the aims of the internal investigation",
        "Island ecosystems make strong material for Biology and ESS answers",
        "Topic-by-topic past-paper work suits low-bandwidth lessons",
        "A bridging block before a move eases the transition",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a Port Blair student choose?",
      paragraphs: [
        "Most subjects at Cambridge IGCSE are offered in two tiers. Core papers cover a lower range of grades, while Extended papers open the whole scale and demand more algebra, more writing and more speed. The choice depends on where the student stands today and where the next school expects them to be.",
        "For Mathematics the decision is critical. A child who may enter IB Analysis and Approaches, A Level Mathematics or an engineering course later should take Extended and consider Additional Mathematics. A child whose strengths are in language, geography or the arts may do better on Core, leaving time for subjects where they can excel.",
        "The sciences follow the same reasoning. Extended is the route for anyone who will continue with the subject. Co-ordinated Sciences combines three subjects into a double grade, which some mainland schools and universities treat differently from three separate results, so check with the receiving school first.",
        "A short diagnostic in the trial lesson, a look at recent marks and an open conversation settle the matter. Making the decision before entries close avoids the pressure of a late change.",
      ],
    },
    {
      heading: "What are the university routes for a Port Blair student with an IB or IGCSE background?",
      paragraphs: [
        "Nearly every professional degree lies on the mainland or overseas, and that shapes the plan from Grade 11 onwards. The Association of Indian Universities treats the IB Diploma as equivalent to Class 12, and CUET-UG lets Diploma students apply to central universities. Pondicherry University runs a campus in Port Blair, and local colleges offer some general degrees, but students seeking engineering, medicine or design usually leave the islands.",
        "JEE Main and NEET-UG list subject conditions that IB and IGCSE students must meet, and the choice of Physics, Chemistry, Mathematics or Biology in the qualifying course needs to be made early. Examination centres on the islands are limited, so it is worth confirming the centre and travel dates well ahead of each session.",
        "Study abroad attracts many island families. The UK, Canada, Australia and the United States read IB scores directly, and IGCSE results lead to A Level or the Diploma. A tutor cannot replace an admissions counsellor, but can explain the grade levels that different destinations tend to look for.",
        "Because journeys off the island cost time and money, it is sensible to gather documents early: predicted grades, syllabus outlines, school reports and any equivalence certificates. Courier services and digital submission help, but delays happen.",
      ],
      table: {
        caption: "Next steps for Port Blair students after the IB or IGCSE",
        columns: ["Destination", "From the IB Diploma", "From IGCSE", "Detail to confirm early"],
        rows: [
          ["Central universities in India", "CUET-UG, with AIU equivalence", "Complete senior years first", "Subject and language paper choices"],
          ["Engineering degrees", "JEE Main if Physics, Chemistry, Maths were studied", "As above, after senior years", "Exam centre and travel dates"],
          ["Medical degrees", "NEET-UG if PCB and English were studied", "As above, after senior years", "Exam centre, equivalence paperwork"],
          ["Universities overseas", "Predicted, then final, Diploma points", "IB or A Level next", "Grade thresholds by country and course"],
        ],
      },
    },
  ],

  process: [
    { title: "Write to us from the island", description: "Send the programme, subject, level, board and your preferred hours, by WhatsApp or email, and mention the quality of your home connection." },
    { title: "Meet the suggested tutor", description: "A tutor who has taught that exact course is proposed, with subjects, availability and teaching style." },
    { title: "Take the free trial", description: "One live lesson on a real topic, plus a quick check of how your line copes with video." },
    { title: "Agree the terms in writing", description: "Length, frequency, rate and the weekly backup slot are all written down before booking." },
    { title: "Continue with notes", description: "Weekly lessons, a short note after each, and a tutor change whenever the fit is off." },
  ],

  whyPoints: [
    { title: "Lessons that cross the sea", description: "A Port Blair student studies with a specialist without leaving home or the island." },
    { title: "Syllabus-specific tutors", description: "Tutors are chosen for the IB subject guide or IGCSE code, not just for a subject label." },
    { title: "Plans for island weather", description: "A backup slot and low-data materials keep progress going through storms and slow evenings." },
    { title: "Honest about visits", description: "Tutors do not visit homes in Port Blair; in-person visits run only in Gurugram and parts of Delhi NCR." },
    { title: "Guidance, never ghost-writing", description: "Tutors advise on IAs, essays and coursework, and the writing stays the student's own." },
    { title: "Free trial, easy change", description: "The first lesson is free, and a different tutor is a single message away." },
  ],

  faqs: [
    {
      question: "Can a student in Port Blair get an IB tutor?",
      answer:
        "Yes, over video. IB Gram connects Port Blair students with tutors based on the mainland who have taught the IB course concerned. Tell us the programme, subject and level, and we propose a tutor, followed by a free trial lesson, which also tests how well your home connection copes with a live class.",
    },
    {
      question: "Will a tutor ever come to our house in Port Blair?",
      answer:
        "No. Tutors do not visit homes in Port Blair, and in-person home visits are limited to Gurugram and parts of Delhi NCR. Island students receive private one-to-one tuition at home, delivered online. All you need is a laptop or tablet, a quiet corner and a connection that holds for an hour.",
    },
    {
      question: "Does any school in the Andamans teach the IB or IGCSE?",
      answer:
        "We could not confirm one. National directories list no IB school for the Andaman and Nicobar Islands, and we found no confirmed Cambridge or Edexcel IGCSE school either. The nearest options are in Chennai, Visakhapatnam and Kolkata, and families should check each school's current programmes before applying.",
    },
    {
      question: "What do IB or IGCSE lessons cost for an island family?",
      answer:
        "Cost depends on programme, level, subject, session length and tutor experience, and IB Gram keeps no public price list. A written quote arrives before the trial is booked. Since nobody travels, there are no flight or hostel costs attached, and you can pause or stop after a few weeks.",
    },
    {
      question: "Is the internet good enough for video lessons?",
      answer:
        "Usually, with sensible precautions. Bandwidth has improved since the undersea cable to Chennai began operating in 2020, but outages and slow evenings still happen. A wired connection, a phone hotspot as a spare and a named backup slot each week cover most problems, and the trial shows how your line performs.",
    },
    {
      question: "What happens if a storm or power cut stops a lesson?",
      answer:
        "The lesson is moved to the backup slot agreed in advance. Monsoon storms and cyclone warnings are a normal part of island life, and safety comes first. Marked work and notes are sent in small files, so a student can keep studying offline until the connection returns.",
    },
    {
      question: "Is Port Blair the same as Sri Vijaya Puram?",
      answer:
        "Yes. The city was officially renamed Sri Vijaya Puram in 2024, though Port Blair remains the name in everyday use and in most search queries. This page uses Port Blair for that reason. The service is identical whichever name is on your address, and lessons run in Indian Standard Time.",
    },
    {
      question: "Can you help with the IB Internal Assessment and Extended Essay?",
      answer:
        "We coach, and we never write. Tutors help a student choose a workable topic, read the criteria, plan a method and respond to feedback on drafts the student has produced. They do not write any part of an IA, Extended Essay, TOK essay or coursework, which would jeopardise the result.",
    },
    {
      question: "How do the sciences work without a school laboratory?",
      answer:
        "Tutors focus on the skills that internal investigations reward: designing a fair test, gathering data from simple home apparatus or provided data sets, analysing results and writing a reasoned conclusion. Where the school supplies practical work, the tutor helps with the write-up. Local ecosystems also supply strong examples in Biology and Environmental Systems.",
    },
    {
      question: "Which IGCSE boards do you support?",
      answer:
        "Both Cambridge and Pearson Edexcel. Cambridge syllabus codes such as 0580, 0625, 0620 and 0610 are the most common requests, but Edexcel candidates are matched with tutors who know that board. Mention the board, subject and tier when you write, so that the first proposal is a good fit.",
    },
    {
      question: "We are posted here for a few years. Can lessons continue afterwards?",
      answer:
        "Yes. Because lessons are online, the same tutor and weekly slot can continue from your next posting. That makes online tutoring especially useful for administration, defence and medical families who move every few years and want a thread of continuity in a child's international syllabus.",
    },
    {
      question: "Do you teach younger children on the PYP or MYP?",
      answer:
        "Yes. PYP sessions are short and playful, built around reading, counting and questions. MYP tutoring covers criterion writing, science investigations and the Personal Project journal. Most demand comes from the Diploma years, but a suitable tutor for a younger child is found in the same way.",
    },
    {
      question: "Does an IB or IGCSE route still allow JEE or NEET?",
      answer:
        "Often yes, with careful subject choice. JEE Main and NEET-UG both list qualifying subjects, and the centres for both exams may be off the island, so travel needs early planning. Entrance coaching is separate; our tutors teach the IB or IGCSE course and help you see how it lines up.",
    },
    {
      question: "How soon can lessons start?",
      answer:
        "Often within a few days for popular subjects such as IB Mathematics or IGCSE Chemistry, and a little longer for rare combinations. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the details, and we confirm availability before the free trial is fixed.",
    },
    {
      question: "Can we change tutors if the first is not right?",
      answer:
        "Of course. Rapport matters more than any profile, so a mismatch is solved by a single message. Earlier notes can be passed to the new tutor, so the child does not repeat work already covered. There is no charge for asking, and no need to justify the request at length.",
    },
    {
      question: "Are you connected with the IB, Cambridge or any school?",
      answer:
        "No. IB Gram is independent and not affiliated with the International Baccalaureate, Cambridge, Pearson or any school. It promises no grades and no admissions. It aims to describe syllabuses accurately and to teach well, so that families on the islands can make their own informed choices.",
    },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "How tutors are matched to programmes and boards." },
    { label: "Online IB and IGCSE tutors in India", href: "/india/", description: "The national page for online tuition across Indian cities and territories." },
    { label: "Chennai tutors", href: "/chennai/", description: "The nearest large city with a broad cluster of IB and Cambridge schools." },
    { label: "Visakhapatnam tutors", href: "/visakhapatnam/", description: "An east-coast city linked to the islands by sea." },
    { label: "Kolkata tutors", href: "/kolkata/", description: "A long-standing link to the islands, with well-established international schools." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject pages for every IB level from PYP to the Diploma." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Help for Cambridge and Edexcel candidates by syllabus code." },
    { label: "MYP support", href: "/programmes/myp/", description: "What the Middle Years Programme asks and how tutoring helps." },
    { label: "Career-related Programme", href: "/programmes/cp/", description: "How the CP is built and where tutoring fits in." },
    { label: "Meet our tutors", href: "/tutors/", description: "Profiles of the teachers who take the lessons." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question before booking the trial." },
  ],

  closingHeading: "Book a free trial lesson from the Andamans",
  closingBody:
    "Email support@ibgram.com or WhatsApp +91 7439 368 115 with the syllabus, the level and the hours that suit your island timetable. A suitable tutor is suggested within days. The first lesson costs nothing, terms are put in writing, and a backup slot is agreed for the days when the sea and sky have other plans.",
};
