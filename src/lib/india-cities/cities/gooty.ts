import type { CitySeoPage } from "../types";

/**
 * Gooty (Anantapur district, Andhra Pradesh). No IB or Cambridge/Edexcel school could be confirmed in Gooty or
 * nearby Guntakal and Anantapur, so stripSchools is empty. Clusters reuse Kurnool, Nandyal, Bengaluru and Hyderabad
 * names verified on neighbouring pages. Online only; no home visits.
 */
export const gooty: CitySeoPage = {
  slug: "gooty",
  countryName: "Gooty",
  countryNameLong: "Gooty, Andhra Pradesh",
  demonym: "Gooty",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  flagCode: "in",
  countryCode: "IN",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and Sunday lessons planned around Rayalaseema summer heat, railway duty rosters and groundnut harvest weeks",
  lastUpdated: "2026-09-21",

  title: "IB & IGCSE Tutors in Gooty | Private Tuition, Online",
  metaDescription:
    "Online one-to-one IB and IGCSE tuition for Gooty students in Anantapur district: DP, MYP, PYP and Cambridge or Edexcel IGCSE, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Gooty, Online",
  heroEyebrow: "IB & IGCSE TUITION FOR GOOTY, GUNTAKAL AND RAYALASEEMA FAMILIES",
  heroSubtitle:
    "Gooty has a hill fort, a railway junction and a highway through it, but no classroom for the IB or Cambridge IGCSE. For private tuition at home in Gooty, lessons run live and one to one over video: your child studies at your own table and a tutor who knows the syllabus teaches from elsewhere in India. Nobody visits the house, and nobody commutes to Bengaluru.",
  primaryKeyword: "IB and IGCSE tutors in Gooty",
  imageAltText: "A Gooty student practising IGCSE Additional Mathematics on a shared whiteboard with an online tutor",
  secondaryKeywords: [
    "IB tutor Gooty",
    "IGCSE tutor Gooty",
    "IB home tuition Gooty",
    "IGCSE home tuition Gooty",
    "IB private tuition Gooty",
    "IB Maths tutor Gooty",
    "IGCSE Maths tutor Gooty",
    "IB Physics tutor Gooty",
    "IB Chemistry tutor Gooty",
    "IB Biology tutor Gooty",
    "IB DP tutor Gooty",
    "IB MYP tutor Gooty",
    "IB PYP tutor Gooty",
    "IGCSE online tuition Gooty",
    "online IB tutor Gooty",
    "IB tutor Guntakal",
    "IGCSE tutor Guntakal",
    "IB tutor Anantapur district",
    "IB tutor Pamidi",
    "IB tutor Tadipatri",
    "IGCSE tutor Gooty Anantapur",
  ],

  heroTrustPoints: [
    "Tutors are chosen for your child's precise IB course and level or IGCSE syllabus code",
    "Lessons taken privately at home in Gooty over live video, never as a home visit",
    "A free trial class and a written summary after each lesson",
    "No tie to any school, railway or corporate body, nor to the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "IB and IGCSE", label: "Both boards covered" },
    { value: "Telugu, Urdu, Hindi", label: "Home-language subjects available" },
    { value: "Private video lessons", label: "No home visits" },
    { value: "Free trial", label: "Try it first" },
  ],

  intro: {
    heading: "International curricula for students who live where the Bengaluru highway crosses Rayalaseema",
    paragraphs: [
      "Gooty lies in Anantapur district on the road and rail corridor between Bengaluru and Hyderabad, and on paper that should make it well connected. In practice, the IB and Cambridge schools are in those two cities, hours away, and families in Gooty or neighbouring Guntakal who want either programme for a child have to choose between a hostel and doing without. Online tuition is a third option, and it is the one this page is about.",
      "A lesson runs like this. Your child opens a laptop at home, the tutor appears on video, and the two work through problems on a shared whiteboard, with the tutor correcting method line by line. Between lessons the student sends photographs of written work and gets comments back. Tutors are in India and teach in IST, so timing is straightforward, and the tutor is picked because they have taught that exact paper before.",
      "We will not dress this up: IB Gram tutors do not come to houses in Gooty. Home-visit tuition is offered only in Gurugram and parts of Delhi NCR. Anyone searching for IB or IGCSE home tuition in Gooty should read it as private lessons delivered to the home by screen.",
      "IB Gram is independent. We have no link with the International Baccalaureate, Cambridge, Pearson Edexcel, Indian Railways, the state government or any school mentioned. Tutors advise and coach, but the Internal Assessment, Extended Essay, TOK essay and any coursework stay entirely the student's own.",
    ],
    bullets: [
      "IB PYP, MYP and Diploma tutoring by subject and level",
      "Cambridge and Pearson Edexcel IGCSE across Core and Extended tiers",
      "Private online lessons only; home visits exist just in Gurugram and parts of Delhi NCR",
      "Free trial first, and a rate in writing before any booking",
    ],
  },

  programmesIntro:
    "Why would a Gooty parent look into these programmes? Often because of a posting that may change, an older relative abroad or a plan to send a child to a Bengaluru or Hyderabad campus. Whichever door you came through, these are the stages and what each asks from a tutor.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Younger children explore big ideas through units of inquiry and show what they know in the Exhibition. Support at this age builds comfortable reading, number sense and confidence in explaining an idea aloud.",
      countryNote:
        "For a child in Gooty who speaks Telugu or Urdu at home, short daily reading in English, and talking about what was read, prepares the ground more effectively than workbooks do.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Criteria replace single marks, and the Personal Project at the end asks for independent planning and reflection. Students are expected to apply knowledge to unfamiliar situations.",
      countryNote:
        "A student from an AP State Board or CBSE classroom in Gooty typically meets the hardest change in science reports and reflective writing, where method and evaluation score as highly as the answer.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects with TOK, the Extended Essay and CAS, three at Higher Level and three at Standard Level. The written exams take place in May and November.",
      countryNote:
        "Railway, banking and agricultural-business families from this region often plan engineering, medicine or commerce abroad, so Maths, Physics, Chemistry, Biology and Economics are the subjects requested most.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller set of DP courses is paired with a career-related study and a reflective project. Few schools in Andhra Pradesh offer it, so tutors usually focus on the academic courses inside.",
      countryNote:
        "A CP student connected to Gooty can shape the reflective project around something real locally, such as groundnut trade, rail logistics or the heritage of the hill fort.",
    },
  ],

  subjectsIntro:
    "Match by course first. Maths AA HL has proof and Paper 3 problems that Maths AI SL never includes, and Physics HL relies on calculus that SL skips. Once the subject and level are pinned down, we look for an evening slot that survives heat, power cuts and whatever is on the school calendar.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof, plus the long-form HL Paper 3 investigations and a well-framed exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and calculator use, with a data-based exploration chosen early." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, fields and quantum topics, along with error analysis for the investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, kinetics, acids and bases, and organic pathways, with the calculations that recur in every session." },
    { name: "IB Biology", levels: "HL / SL", description: "Molecular and cell biology, genetics and ecology, with data-analysis drills and structured long answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram precision, real-world evidence and the internal commentaries, with quantitative HL content." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reasoning, finance calculations and the research project." },
    { name: "IB Geography", levels: "HL / SL", description: "Freshwater, resource and change themes, with drought and irrigation cases that Rayalaseema students know well." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen text analysis and comparison of set works, for students thinking in Telugu or Urdu first." },
    { name: "IB Telugu A and B", levels: "HL / SL", description: "Literature analysis or language acquisition in a student's own language, often a dependable strength." },
    { name: "IB Urdu and Hindi B", levels: "HL / SL", description: "Reading, writing and oral practice for students with Urdu or Hindi in the home." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, object-oriented programming and a documented solution for the internal task." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Water, soil and energy systems, using semi-arid and solar-energy examples from the region." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and essay structure, with balanced argument over narrative." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Building arguments from knowledge questions and keeping the exhibition on track." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Finding a researchable question and making the most of supervisor meetings. Coaching only; the essay is the student's own." },
    { name: "IB MYP Sciences & Maths", levels: "MYP 1-5", description: "Designing fair investigations for criteria B and C and strengthening algebra for the Diploma." },
    { name: "IB MYP Language & Literature", levels: "MYP 1-5", description: "Structured analytical writing and a Personal Project journal that keeps pace." },
  ],

  igcseSubjectsIntro:
    "IGCSE work begins with three facts: syllabus code, tier and the series in which the papers will be sat. Many Gooty students take these as private candidates through a centre in Anantapur, Bengaluru or Hyderabad, so we ask about the centre early, before drawing up a revision calendar.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, geometry and calculator skills, with method marks on multi-step questions." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and trigonometry, a solid lead-in to IB Maths AA or A Level." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy, circuits and waves, with the planning logic of the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, electrolysis, rates and organic basics, with recall routines for ion tests." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Enzymes, transport, reproduction and ecosystems, plus interpreting graphs and tables." },
    { name: "IGCSE Combined & Coordinated Sciences", levels: "0653 / 0654", description: "A compact route through three sciences in one award." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, descriptive and narrative tasks and summary skills." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, listening and oral practice aimed at steady fluency." },
    { name: "IGCSE Telugu as a Second Language", levels: "Grade 9-10", description: "Comprehension and composition in the region's main language." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, data questions and the evaluation habit examiners reward." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, final accounts and ratios, well suited to trading families." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, trace tables and programming for students with little lab access." },
  ],

  regionsTitle: "Gooty and nearby towns where our online tutors work with families",
  regionsIntro:
    "Distance from any of these places does not matter to a tutor on video, but routine does. A railway household plans around duty rosters, a farming family around the groundnut and sunflower seasons, and a fort-side business family around market days. Lesson times are agreed after we hear the real week, not a tidy imagined one.",
  regions: [
    { name: "Gooty town centre", note: "The busy core near the market and bus stand, where families who value English-medium learning are starting to ask about international options." },
    { name: "Gooty Fort surroundings", note: "An old residential belt at the foot of the hill fort, with long-settled households and students who share a room for study." },
    { name: "Railway Colony, Gooty", note: "Housing linked to the junction, where transfers and shift rosters make a portable programme attractive." },
    { name: "Guntakal", note: "The nearby railway town with a larger school base, where students often compare Gooty and Guntakal for tuition time." },
    { name: "Pamidi", note: "A town along the Gooty to Anantapur road with cement, trading and farming families." },
    { name: "Peddavadugur", note: "A mandal headquarters close by, where broadband quality is worth testing before a first class." },
    { name: "Yadiki", note: "A smaller town towards Tadipatri, with families who would otherwise need a long journey for specialist teaching." },
    { name: "Tadipatri", note: "A cement and stone-industry town with business households interested in commerce and engineering pathways." },
    { name: "Kasapuram and outlying villages", note: "Farm-belt settlements where study is squeezed around harvest and irrigation schedules." },
    { name: "Anantapur city", note: "The district headquarters to the south-east, where some Gooty families have relatives and school contacts." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service with no connection to the schools named here, the International Baccalaureate, Cambridge or Pearson Edexcel. The names show where IB and IGCSE classrooms exist for families around Gooty. No such school could be confirmed in Gooty, Guntakal or Anantapur.",
  schoolClusters: [
    {
      city: "Nearby: Kurnool and Nandyal",
      note: "Kurnool is the closest city to the north with a confirmed international-curriculum campus, and Nandyal has one more, both on neighbouring-city pages we have already checked.",
      schools: ["Monte International School, Kallur, Kurnool", "Nandi Academy International School, Nandyal"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "Bengaluru is the usual choice for boarding or a family move, and is reachable down the highway, though not for a weekly class.",
      schools: ["Stonehill International School, Bengaluru", "Canadian International School, Bengaluru"],
    },
    {
      city: "Nearby: Hyderabad",
      note: "Hyderabad is the second big option, with a long list of international campuses for families willing to relocate.",
      schools: ["Oakridge International School, Hyderabad", "International School of Hyderabad, Patancheru"],
    },
    {
      city: "Gooty, Guntakal and Anantapur",
      note: "We found no confirmed IB or Cambridge IGCSE campus here, so local choice is limited and we name none.",
      schools: [],
    },
  ],

  modesIntro:
    "We do not send tutors to homes in Gooty; in-person tuition at IB Gram exists only in Gurugram and parts of Delhi NCR. Every class here is live on video, private and taken at home. These three formats cover most cases, depending on the subject and how soon the exam is.",
  modes: [
    {
      title: "Regular private video lessons",
      description:
        "One tutor, the same weekday hour, live working on a shared whiteboard and a short note to parents afterwards.",
      bullets: [
        "Same tutor and slot each week",
        "Steps written out on screen",
        "Progress note after each class",
        "No highway journey to Bengaluru",
      ],
    },
    {
      title: "Pre-exam and deadline sprint",
      description:
        "A denser schedule of timed papers and marked feedback ahead of mocks, internal assessment submissions and the May and November series.",
      bullets: [
        "Topic-by-topic past papers",
        "Extra hours where marks drop",
        "Useful before predicted grades are filed",
        "Stepped down after exams",
      ],
    },
    {
      title: "Live session with marked homework",
      description:
        "A shorter weekly class combined with practice questions checked between meetings, for families whose evenings shift with railway duty or farm work.",
      bullets: [
        "One live hour each week",
        "Comments on photographed work",
        "Survives travel and harvest weeks",
        "Hours can be raised at any time",
      ],
    },
  ],

  sections: [
    {
      heading: "What is the school picture in and around Gooty for IB and IGCSE families?",
      paragraphs: [
        "Gooty and its neighbours, Guntakal, Pamidi and Tadipatri, are served by Andhra Pradesh State Board schools, CBSE and private English-medium institutions of different sizes. We could not confirm an IB or Cambridge IGCSE school in any of them, and this page would rather say so than repeat names that cannot be checked. Families meeting an international curriculum usually do so by moving away or by studying privately.",
        "The households asking tend to fall into clear groups. Railway and banking staff whose careers involve transfers. Doctors and engineers in Anantapur and Kurnool with children who have spent time abroad. Traders in groundnut, cement and stone whose sons and daughters may study overseas. And parents who simply believe an exam that rewards explanation suits their child better than one that rewards recall.",
        "Each group needs something slightly different. A transfer family needs continuity of syllabus wherever the next posting lands. A business family wants a route to a foreign degree. A family with a hostel student wants holiday catch-up. A tutor who has taught the course can tell quickly which of these is the real need.",
        "Because local classrooms are absent, the quality of the match matters more than in a large city. We ask for the course, the level, the recent marks and the plan, and propose a tutor on those facts.",
      ],
      bullets: [
        "No confirmed IB or Cambridge school in Gooty, Guntakal or Anantapur",
        "Kurnool, Nandyal, Bengaluru and Hyderabad hold the nearest verified campuses",
        "Railway, trade and professional families make most enquiries",
        "Private IGCSE candidates and hostel students are a steady group",
      ],
    },
    {
      heading: "AP State Board, CBSE, IB or IGCSE: which fits a Gooty student?",
      paragraphs: [
        "The Andhra Pradesh State Board and CBSE are built around a clear textbook syllabus and a public examination that feeds directly into AP EAPCET, JEE Main and NEET. For a student aiming at an Indian professional seat, either is a sound and economical route. IB and IGCSE are better suited to a student who expects to study abroad, to move often, or to do well in applied, open-ended questions.",
        "Think about what a typical paper asks. State Board questions often test whether the student can reproduce a definition or a worked example. An IB or Cambridge question places the student in an unfamiliar setting and asks for reasoning, comparison and judgement. CBSE is shifting towards this style as well, with more competency-based items in recent papers.",
        "Language deserves a moment. A student who has studied in Telugu through Class 8 or Class 9 has to meet precise English command words, such as justify, distinguish and evaluate. Teaching these early removes a large, hidden source of lost marks.",
        "Here is the comparison laid out in one place.",
      ],
      table: {
        caption: "AP State Board, CBSE and IB / IGCSE for Gooty families",
        columns: ["Point of comparison", "AP State Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Medium", "Telugu, Urdu or English", "English with Hindi", "English, with Telugu, Urdu or Hindi as a language subject"],
          ["Question style", "Textbook recall and stock problems", "Mix of recall and application", "Context-based reasoning and evaluation"],
          ["Usual entrance route", "AP EAPCET, JEE, NEET", "JEE, NEET, CUET-UG", "CUET-UG and overseas admission; JEE and NEET subject to eligibility"],
          ["Subject structure", "Stream-based with fixed groups", "Stream with limited options", "Six IB subjects, or a broad IGCSE menu"],
          ["Nearest classroom", "Gooty and surrounding mandals", "Gooty, Guntakal, Anantapur", "Kurnool, Nandyal, Bengaluru or Hyderabad"],
        ],
      },
    },
    {
      heading: "How is the price of IB and IGCSE tuition set for families in Gooty?",
      paragraphs: [
        "Rates turn on four points: the level taught, the tutor's experience with that precise course, weekly hours and whether the help is continuous or confined to an exam window. An HL Physics tutor who has marked papers costs more than one supporting MYP language work. The rate arrives in writing before the free trial, and no public price list is kept.",
        "What families in a district town notice first is what online delivery saves. A class in Bengaluru means a long trip each way and a bus or petrol bill, and a hostel means thousands a month on top of fees. A lesson at home needs a laptop and a stable connection, and the money goes on teaching rather than transport.",
        "It is also worth asking what a low quote leaves out. A general-subject tutor without IB or IGCSE experience might charge less per hour but take months to find what the exam actually rewards. Spending on a good match for fewer hours is frequently the cheaper choice over a year.",
        "Three questions protect any family: who will teach, what exact courses they have taught before, and how a change of tutor works if it is not right. We answer all three before anything is billed.",
      ],
      bullets: [
        "Course level and tutor experience set the rate",
        "Weekly hours and timing before exams adjust it",
        "No highway, hostel or boarding cost for a home-based lesson",
        "Written rate agreed before the free trial",
      ],
    },
    {
      heading: "Online tutor, Bengaluru class, local coaching or self-study: what suits Gooty best?",
      paragraphs: [
        "Gooty has coaching centres, mostly geared to EAPCET, JEE, NEET and State Board subjects, and they serve those aims well. For IB or IGCSE, they seldom carry the expertise. A class in Bengaluru or Hyderabad provides it but demands long travel. Self-study is free but lacks anyone to mark extended answers honestly.",
        "An online one-to-one tutor fits a narrow gap: the student needs someone who has already taught the exact course, and lives where no such person is. The lesson is private, the pace follows the child, and written work is returned with comments that show where marks were lost and why.",
        "Connection stability is the main practical question. Gooty's summer storms and occasional outages can interrupt a class, so a phone hotspot and a charged laptop are sensible. A lost lesson is rescheduled, and we test the set-up before the first class rather than after a bad one.",
        "The table below compares the four routes on the points that matter.",
      ],
      table: {
        caption: "Routes to IB or IGCSE help for a student in Gooty",
        columns: ["Route", "Knowledge of the syllabus", "Personal feedback", "Practicalities"],
        rows: [
          ["Online one-to-one tutor", "High, chosen for course and level", "Detailed and individual", "Needs a stable connection"],
          ["Class in Bengaluru or Hyderabad", "Usually high", "Shared among a group", "Long travel, possible hostel cost"],
          ["Local EAPCET or JEE coaching", "Low for IB and IGCSE", "Varies by centre", "Strong for Indian entrance exams, not for these boards"],
          ["Self-study from past papers", "Only what the student sources", "Little without a marker", "Cheap, but weak on extended answers"],
        ],
      },
    },
    {
      heading: "How do Rayalaseema heat, railway rosters and harvests shape the study year in Gooty?",
      paragraphs: [
        "Rayalaseema is among the driest parts of the state, and summer in Gooty is severe, with April and May days commonly above 40 degrees. Afternoon study is not realistic. Lessons in those months sit in the early morning or after dinner, which happens to coincide with the IB May session and the Cambridge May and June series.",
        "Rain is scarce and uneven, so the monsoon matters less for disruption than in coastal districts, though heavy spells in October can still interfere with connectivity. Farming households plan around the kharif and rabi seasons, and groundnut harvest weeks can pull a whole family's attention away from a desk.",
        "The festival year brings its own gaps. Sankranti in January, Ugadi in spring, Vinayaka Chaturthi, Dasara and Diwali, and Ramzan and Eid for many families, each alter routine. Railway households also work to duty rosters that can change the evening a parent is at home to supervise.",
        "The table is a planning guide, not a timetable, because every school and board sets its own dates.",
      ],
      table: {
        caption: "A Gooty year for IB and IGCSE study",
        columns: ["Period", "Local conditions", "Suggested focus"],
        rows: [
          ["March to June", "Ugadi, extreme heat, IB May and IGCSE May-June papers", "Early or late lessons, final revision, then rest"],
          ["July to September", "New term, light rain, Vinayaka Chaturthi", "New content, internal assessment drafts"],
          ["October to November", "Dasara, Diwali, kharif harvest, the November series", "Timed papers and revision before festival weeks"],
          ["December to February", "Cool weather, Sankranti, mock exams, university applications", "Mocks, predicted-grade preparation, overseas forms"],
        ],
      },
    },
    {
      heading: "Where can a Gooty student go with an IB Diploma or IGCSE results?",
      paragraphs: [
        "Universities in the UK, US, Canada, Australia and much of Europe accept the IB Diploma. In India, the Association of Indian Universities treats it as equal to Class 12, and CUET-UG accepts IB-qualified applicants. IGCSE alone is a Class 10 equivalent, so students normally proceed to A Levels, the Diploma or a Class 11 place in an Indian school.",
        "Closer to home, students from the district look at engineering and medicine first, with JNTU Anantapur, Sri Venkateswara University, IIT Tirupati and Bengaluru's institutions in view. Whether an IB or IGCSE student qualifies for JEE or NEET in a given year depends on the notice published for that year, so we check the rules rather than guess.",
        "For overseas study, the plan should begin in the first term of Class 12 because applications use predicted grades and deadlines are early. Maths, Physics and Chemistry at Higher Level keep engineering open. Economics, Business and Maths open commerce and finance routes.",
        "Tutors advise on subjects and study plans only. Universities decide admissions, and we do not promise any result.",
      ],
      bullets: [
        "AIU equivalence applies to the IB Diploma for Indian universities",
        "CUET-UG is open to IB-qualified students",
        "JEE and NEET eligibility is verified yearly against the official notice",
        "Overseas applications rely on predicted grades and open early in Class 12",
      ],
    },
    {
      heading: "Which IB Maths and science combinations help a Gooty student aiming for engineering or medicine?",
      paragraphs: [
        "Maths Analysis and Approaches is the conventional pick for students comfortable with algebra and calculus, and it is what most engineering applicants choose. Applications and Interpretation, with its statistics and modelling, suits someone heading for economics, psychology or a data-led field. At Higher Level the two courses are different enough that the choice should follow the degree plan.",
        "Physics HL relies on calculus, so pairing it with Maths AA is natural. Its internal assessment is a student-designed investigation, and students with modest lab access should plan early for data they can actually collect or simulate. Tutors can advise on a sound question and on the treatment of uncertainty.",
        "Chemistry HL rewards steady practice with equilibrium, energetics and organic routes. Biology HL favours careful graph reading and organised long answers. Students hoping for medicine abroad often pair Chemistry and Biology at Higher Level, and they need a tutor who can handle both without muddling the two.",
        "On internal assessments, the tutor's role is to explain criteria, test the plan and check understanding. The idea, the data and the writing must be the student's own.",
      ],
    },
    {
      heading: "IGCSE Core or Extended for a Gooty student, and how do private entries work?",
      paragraphs: [
        "Core papers limit the top grade in many subjects, while Extended papers open the full A* to G range and are the usual path for anyone heading to A Level or the IB. Mathematics and the three sciences are offered at both tiers. If a student is unsure, a timed Extended paper under exam conditions will show readiness better than an opinion.",
        "A workable Gooty timetable might combine Mathematics, Physics, Chemistry, Biology, English as a second language and Telugu as a second language, with Accounting or Economics for commerce-minded students. Additional Mathematics is a good pick for students who expect to take Maths AA or A Level Mathematics later.",
        "Private candidates handle the paperwork themselves. They need a Cambridge or Pearson Edexcel centre that accepts external entries, usually in Anantapur, Bengaluru or Hyderabad, along with entry deadlines and arrangements for the practical or alternative-to-practical component. We suggest confirming these at the start of Grade 9.",
        "The habit that lifts IGCSE results most is unglamorous: show the working, read the command word and watch the clock. A few steady hours each week on that beat a mountain of unmarked papers in the last month.",
      ],
      bullets: [
        "Extended tier is the usual base for IB or A Level entry",
        "Additional Mathematics 0606 makes the step up to IB Maths smoother",
        "Private entries need a centre and deadline confirmed early",
        "Telugu second-language papers can strengthen the overall profile",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge and Pearson Edexcel IGCSE to students in Gooty. We choose by syllabus, level and exam series first, then by a lesson hour that fits your household, and every lesson is online.",

  process: [
    { title: "Send the details", description: "Tell us the programme or board, subject and level, recent grades and the times that work in Gooty." },
    { title: "See the shortlist", description: "We propose tutors who have taught the course and give the reasons for each choice." },
    { title: "Join a free trial", description: "Your child works through a real topic on video with a tutor, at no cost and no obligation." },
    { title: "Settle the plan", description: "The tutor outlines topics, weekly rhythm and how progress will be shared with you." },
    { title: "Begin weekly lessons", description: "A fixed slot each week, shifted around exams, festivals and harvest weeks when needed." },
  ],

  whyPoints: [
    { title: "Course-specific tutors", description: "We look for someone who has taught your child's own subject and level, not a general teacher of international boards." },
    { title: "Clear about delivery", description: "Gooty lessons are live video only, and we say so at the start." },
    { title: "Trial before payment", description: "Your child tries a real lesson before you agree to anything." },
    { title: "Work stays the student's", description: "Tutors coach IAs, the Extended Essay and TOK but never write them." },
    { title: "Regular reporting", description: "A brief note follows each session and a longer review comes every few weeks." },
    { title: "Flexible arrangements", description: "No long contract, easy pauses around exams and a simple switch of tutor." },
  ],

  faqs: [
    {
      question: "Is IB or IGCSE home tuition available in Gooty?",
      answer:
        "Home tuition is available as online private lessons, not as home visits. Our tutors do not travel to Gooty, and in-person lessons run only in Gurugram and parts of Delhi NCR. Your child studies at home over live video, one to one, with handwritten working on a shared whiteboard, which gives focused attention for exam preparation without any travel.",
    },
    {
      question: "How do I find an IB tutor in Gooty?",
      answer:
        "Share the course, level and current marks, and we propose tutors who have taught that syllabus. You then try a free video lesson. Because the lessons are online, your choice is not limited to people who live in Gooty, which matters when the nearest teacher with IB experience may be in another state.",
    },
    {
      question: "Are there IB or Cambridge schools in Gooty?",
      answer:
        "We could not confirm an IB or Cambridge IGCSE school in Gooty, Guntakal or Anantapur, so we name none. The nearest we can verify are in Kurnool, Nandyal, Bengaluru and Hyderabad. Local schools follow the AP State Board or CBSE, which is why online tuition helps families whose child studies an international syllabus elsewhere or privately.",
    },
    {
      question: "What does IB and IGCSE tuition cost in Gooty?",
      answer:
        "It depends on the course level, the tutor's experience with that syllabus, weekly hours and the closeness of exams. We publish no price list. A written rate is sent before the free trial, so you know the figure in advance. Lessons at home also avoid the bus, fuel and hostel costs that a Bengaluru or Hyderabad class would add.",
    },
    {
      question: "Can my child switch from the AP State Board to IGCSE?",
      answer:
        "Yes, after Class 8 or Class 10 being the usual points. The biggest adjustments are English command words, extended written answers and the practical-skills papers. A tutor can prepare the ground, then test the student on a past Cambridge or Edexcel paper so you can see readiness in marks. Telugu second-language papers allow continuity with the home language.",
    },
    {
      question: "Which IB subjects do Gooty students ask for most?",
      answer:
        "Mathematics, Physics and Chemistry are requested most, followed by Biology, Economics and Business Management. English A support and Telugu or Urdu language subjects are regular requests too. If a subject combination looks too heavy, we say so and suggest alternatives that protect the student's overall results instead of over-filling the timetable.",
    },
    {
      question: "Do tutors write the IA, Extended Essay or TOK essay?",
      answer:
        "No, never. Tutors explain marking criteria, help narrow a question, read drafts and push back on weak arguments, but the ideas, data and text belong to the student. Submitted work that is not the student's own risks a malpractice decision from the IB. If a family asks us to cross that line, we decline.",
    },
    {
      question: "How does the free trial lesson work?",
      answer:
        "It is a live video session with a tutor matched to your child's course. The tutor teaches a real topic, sees how your child reasons and proposes a plan. There is no fee and no obligation. If the match is wrong, we arrange a second trial with another tutor before anything is charged.",
    },
    {
      question: "What equipment and internet do we need?",
      answer:
        "A laptop or tablet with a camera, headphones and a dependable connection, plus paper and a pen for written working. A phone hotspot is a good backup for power or broadband interruptions. The whiteboard runs in a browser, so nothing special needs installing. We run a brief set-up check before the first class.",
    },
    {
      question: "Can my child sit IGCSE privately from Gooty?",
      answer:
        "Yes, through a Cambridge or Pearson Edexcel centre that accepts private candidates, usually in a larger city such as Anantapur, Bengaluru or Hyderabad. The family must confirm the centre, entry dates and practical arrangements early. Tutors then plan the preparation around the chosen exam series, ideally starting at the beginning of Grade 9.",
    },
    {
      question: "Is the IB accepted for admission in India?",
      answer:
        "Yes. The Association of Indian Universities recognises the IB Diploma as equal to Class 12, and CUET-UG is open to IB-qualified students. Whether a student can sit JEE or NEET depends on that year's official rules and the subjects taken, so check the current notice before choosing subjects. Universities abroad widely accept the Diploma.",
    },
    {
      question: "My child's evenings change with railway duty or farm work. Can lessons flex?",
      answer:
        "Yes, flexibility is built in. Sessions can move to Sunday mornings or later weekday hours, and we can switch to the shorter live lesson plus marked practice format in busy weeks. A missed class is rescheduled instead of lost, so the syllabus keeps moving even when the household's week does not.",
    },
    {
      question: "What happens if the heat, a storm or a power cut stops a lesson?",
      answer:
        "We reschedule the lesson without losing it. In the hottest months we move classes to early morning or after dinner. If a storm or outage interrupts a session, the tutor can finish it later or set marked practice to do offline. A phone hotspot and a charged laptop make that rarely necessary.",
    },
    {
      question: "When should IB Diploma tuition begin?",
      answer:
        "Many students begin in the summer before Class 11, when core ideas in Mathematics and the sciences are simplest to secure. Others start after first internal exams expose gaps. Early support helps with pacing, the Extended Essay and internal assessments, which all take months, so starting before pressure builds is usually wiser than waiting until it does.",
    },
    {
      question: "How do I start from Gooty?",
      answer:
        "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board or programme, subject, level and the hours that work. We reply with tutor suggestions and a written rate and arrange a free trial. After that, you choose whether to begin weekly sessions, with nothing due beforehand.",
    },
  ],

  internalLinks: [
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tuition by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "Subjects, tiers and exam series for Cambridge and Edexcel." },
    { label: "Tutor profiles", href: "/tutors/", description: "Browse tutors by subject, board and experience." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the Diploma fits together, from subjects to the core." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition for young learners." },
    { label: "IB Maths guidance", href: "/courses/ib/mathematics/", description: "Weighing AA against AI and preparing for either." },
    { label: "Admissions and test prep", href: "/admissions/test-prep/", description: "Help with CUET, JEE, NEET and overseas tests." },
    { label: "IB and IGCSE tutoring in Anantapur", href: "/anantapur/", description: "The district headquarters, for families with ties across the district." },
    { label: "IB and IGCSE tutoring in Kurnool", href: "/kurnool/", description: "The nearest northern city with a confirmed international campus." },
    { label: "IB and IGCSE tutoring in Hindupur", href: "/hindupur/", description: "Online lessons for a Rayalaseema town on the Bengaluru side." },
    { label: "IB and IGCSE tutoring in Adoni", href: "/adoni/", description: "A neighbouring Rayalaseema town with a similar school picture." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and ask for a free trial lesson." },
  ],

  closingHeading: "Arrange a free IB or IGCSE trial lesson at home in Gooty",
  closingBody:
    "Tell us the board or programme, the subject and level, your child's school or plan and the hours that are truly free around railway duty, shops or fields. You will get a tutor who has taught the course, a video trial slot and a written rate, and nothing is billed until after the first lesson. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",

  geo: { latitude: 15.1231, longitude: 77.6346 },
  alternateNames: ["Gooty Anantapur", "Guthi", "Gooty Andhra Pradesh"],
  wikipedia: "https://en.wikipedia.org/wiki/Gooty",
  stripSchools: [],
};
