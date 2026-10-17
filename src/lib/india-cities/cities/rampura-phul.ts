import type { CitySeoPage } from "../types";

/**
 * Rampura Phul (Bathinda district, Punjab). No IB or Cambridge/Edexcel school could be confirmed in Rampura Phul
 * or Bathinda, so stripSchools is empty. Clusters reuse Ludhiana, Mohali, Chandigarh and Jalandhar names verified
 * on neighbouring pages. Online only; no home visits.
 */
export const rampuraPhul: CitySeoPage = {
  slug: "rampura-phul",
  countryName: "Rampura Phul",
  countryNameLong: "Rampura Phul, Punjab",
  demonym: "Rampura Phul",
  state: "Punjab",
  stateCode: "IN-PB",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-evening and Sunday lessons arranged around cotton-picking weeks, winter fog and the June heat of the Malwa belt",
  lastUpdated: "2026-09-21",

  title: "IB & IGCSE Tutors in Rampura Phul | Online Home Tuition",
  metaDescription:
    "Live online IB and IGCSE tutoring for Rampura Phul and Bathinda-district students: DP, MYP, PYP and IGCSE, one to one from home. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Rampura Phul",
  heroEyebrow: "IB & IGCSE TUITION FOR RAMPURA PHUL AND MALWA FAMILIES",
  heroSubtitle:
    "Parents in Rampura Phul looking for private home tuition for an IB or IGCSE student need a plain answer on format. Lessons are live, private and taught over video while your child studies at home. A tutor does not come to your door here, and nobody needs to make the drive to Bathinda, Ludhiana or Mohali for a class.",
  primaryKeyword: "IB and IGCSE tutors in Rampura Phul",
  imageAltText: "A Rampura Phul student reviewing IGCSE Chemistry mole calculations during a one-to-one online lesson",
  secondaryKeywords: [
    "IB tutor Rampura Phul",
    "IGCSE tutor Rampura Phul",
    "IB home tuition Rampura Phul",
    "IGCSE home tuition Rampura Phul",
    "IB private tuition Rampura Phul",
    "IB Maths tutor Rampura Phul",
    "IGCSE Maths tutor Rampura Phul",
    "IB Physics tutor Rampura Phul",
    "IB Chemistry tutor Rampura Phul",
    "IB Biology tutor Rampura Phul",
    "IB DP tutor Rampura Phul",
    "IB MYP tutor Rampura Phul",
    "IB PYP tutor Rampura Phul",
    "IGCSE online tuition Rampura Phul",
    "online IB tutor Rampura Phul",
    "IB tutor Rampura",
    "IB tutor Phul",
    "IB tutor Bathinda district",
    "IGCSE tutor Bathinda",
    "IB tutor Maur",
    "IB tutor Bhucho Mandi",
  ],

  heroTrustPoints: [
    "Tutors are chosen for the exact IB course and level or IGCSE code your child studies",
    "Private lessons taken at home in Rampura Phul over live video, with no tutor visit",
    "A free trial lesson and a written note after each class",
    "No link to any school, to the IB, to Cambridge or to Pearson",
  ],
  heroStats: [
    { value: "PYP, MYP, DP, CP", label: "IB stages supported" },
    { value: "Punjabi and Hindi", label: "Home-language subjects available" },
    { value: "Online, private", label: "Every lesson, at home" },
    { value: "Free trial", label: "Before paying anything" },
  ],

  intro: {
    heading: "An international syllabus for a student in the cotton belt, taught from a screen",
    paragraphs: [
      "Rampura Phul is in the Malwa region of Punjab, in Bathinda district, about thirty kilometres from Bathinda on the railway line to Rajpura. It is a place of grain markets, cotton and wheat, small businesses and many families with someone working in Canada, Australia or the UK. It is also a place without an IB or Cambridge IGCSE school that we can confirm, and Bathinda is the same.",
      "What a family can have is a tutor by video. The teacher is chosen for having taught the very syllabus, the lesson happens live with handwritten working on a shared screen, and work is returned with comments between sessions. A student in a house on a Rampura Phul lane gets the same quality of explanation as a student anywhere in India, without the cost of a hostel.",
      "One point is non-negotiable. No IB Gram tutor knocks on a door in Rampura Phul, since the home-visit service belongs to Gurugram and parts of Delhi NCR. Searching for home tuition here ends in a private online lesson delivered to your living room screen.",
      "IB Gram is an independent service, with no connection to the International Baccalaureate, Cambridge, Pearson Edexcel or any school or university mentioned. Tutors coach and explain; they do not write Internal Assessments, Extended Essays, TOK essays or any coursework for a student.",
    ],
    bullets: [
      "IB PYP, MYP and Diploma coaching by subject and level",
      "Cambridge and Pearson Edexcel IGCSE at Core and Extended",
      "Private online lessons only; in-person home visits are limited to Gurugram and parts of Delhi NCR",
      "A free trial first and a written rate before any booking",
    ],
  },

  programmesIntro:
    "In Rampura Phul, the question about IB or IGCSE often begins with a cousin in Brampton or Melbourne, or with a child who talks about studying abroad. Whatever started the conversation, this is what each stage involves for a tutor.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Learning is organised around units of inquiry, and the Exhibition replaces an end-of-stage exam. A tutor helps with confident reading, number sense and the habit of asking questions.",
      countryNote:
        "If a child speaks Punjabi at home, regular English reading together, even ten minutes a day, will help more than extra worksheets before a move to a PYP school.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Four criteria govern marking in each subject, and the stage closes with the Personal Project. Children must apply ideas to new situations and reflect on how they learn.",
      countryNote:
        "Students arriving from PSEB or CBSE classrooms around Rampura Phul often find investigative science write-ups and reflective journals harder than the content itself.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, TOK, the Extended Essay and CAS, three at Higher Level and three at Standard. The exams fall in May and November.",
      countryNote:
        "With so many Malwa families connected to Canada and Australia, Diploma students here usually ask first about Maths, sciences, Economics and Business for overseas degrees.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A few Diploma courses are combined with a career-related study and a reflective project. Few Punjab schools run it, so tutors usually support the academic courses within.",
      countryNote:
        "A student from Rampura Phul in a CP elsewhere can build the reflective project on local material, such as cotton marketing, cold-chain storage or small-business finance.",
    },
  ],

  subjectsIntro:
    "We start with the course and the level. Maths AA HL has proof and Paper 3 work that Maths AI SL never touches, and Physics HL needs calculus that SL does not. After that we search for a lesson hour that holds up against school, power supply and farm or shop commitments at home.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof, with extended HL Paper 3 tasks and a workable exploration topic." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator technique, with a data-based exploration." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, fields and quantum ideas, with uncertainty handling for the investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, kinetics, equilibrium and organic routes, with the calculations that recur in papers." },
    { name: "IB Biology", levels: "HL / SL", description: "Molecular biology, genetics and ecology, with graph interpretation and structured long answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy, evidence from real economies and the three commentaries." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reasoning, finance tools and the research project." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysis of unseen texts and set works, for students who think first in Punjabi." },
    { name: "IB Punjabi A and B", levels: "HL / SL", description: "Literature analysis or language acquisition in a home language, often a dependable strength." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Reading, writing and oral practice for students with Hindi from school or family." },
    { name: "IB Geography", levels: "HL / SL", description: "Food security, water and migration, with Malwa cases such as cotton and canal irrigation." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Soil, water and land-use systems, with examples from Punjab's irrigation and crop patterns." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, object-oriented code and a documented solution for the internal task." },
    { name: "IB Psychology", levels: "HL / SL", description: "Key studies, evaluation practice and the experimental design task." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Turning knowledge questions into arguments and keeping the exhibition focused." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Choosing a researchable question and working well with a supervisor. Coaching only; the essay is the student's own." },
    { name: "IB MYP Sciences & Maths", levels: "MYP 1-5", description: "Designing fair tests for criteria B and C and strengthening algebra." },
    { name: "IB MYP Language & Literature", levels: "MYP 1-5", description: "Analytical writing in English and a Personal Project journal kept current." },
  ],

  igcseSubjectsIntro:
    "IGCSE support depends on three facts: the syllabus code, the tier and the series in which the papers will be sat. Families in Rampura Phul usually enter as private candidates through a centre in a bigger city, so we ask about centre and series at the first call and work back from there.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, geometry and calculator skill, with method marks on the long questions." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and trigonometry, good preparation for IB Maths AA or A Level." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, electricity, waves and thermal physics, plus the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, electrolysis, rates and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Enzymes, transport, inheritance and ecology, with unfamiliar data questions." },
    { name: "IGCSE Combined & Coordinated Sciences", levels: "0653 / 0654", description: "Three sciences in a single award, with the weakest strand tackled first." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative and descriptive composition, and summary." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, listening and speaking, with fluency exercises." },
    { name: "IGCSE Punjabi as a Second Language", levels: "Grade 9-10", description: "Reading and writing tasks in the language families speak at home." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension and composition at the student's own pace." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, final accounts and ratios, suited to trading families." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, trace tables and programming for students without much lab time." },
  ],

  regionsTitle: "Rampura Phul and nearby places our online tutors work with",
  regionsIntro:
    "Whether your home is in the old bazaar or on a farm road makes no difference to an online tutor, but the household schedule does. A shopkeeping family plans around shop closing time, a farming one around cotton picking and wheat harvest, and a railway or government family around duty hours. We fix lesson times after you describe the actual week.",
  regions: [
    { name: "Rampura town centre", note: "The market area near the railway line, with trading families who ask about study abroad and business degrees." },
    { name: "Phul town", note: "The older twin town with a long history and multi-generational homes, where a quiet study corner needs planning." },
    { name: "Railway station area", note: "A busy zone on the Bathinda-Rajpura line, used by families who travel often and like weekend lessons." },
    { name: "Grain market (Anaj Mandi) area", note: "A commercial hub where families are busiest during procurement, which affects evening availability." },
    { name: "Bathinda Road side", note: "Newer colonies on the road towards the district city, with households connected to schools there." },
    { name: "Maur Mandi", note: "A nearby mandi town where families often use the same online options for lack of local specialist teachers." },
    { name: "Bhucho Mandi", note: "A trading town in the district with agricultural and business households." },
    { name: "Talwandi Sabo", note: "A town with university and religious-heritage links, whose families sometimes compare educational options with Rampura Phul." },
    { name: "Sangat and Goniana", note: "Smaller centres in the district where broadband reliability is worth testing before the first class." },
    { name: "Village belts around Rampura Phul", note: "Farm settlements where study fits around cotton and wheat seasons and where a hotspot back-up is sensible." },
  ],

  schoolDisclaimer:
    "We work independently of the schools below, of the IB, of Cambridge and of Pearson Edexcel. Each name appears purely to locate the nearest international classrooms, and none has endorsed this page. Rampura Phul and Bathinda offer no confirmed IB or Cambridge school.",
  schoolClusters: [
    {
      city: "Nearby: Ludhiana",
      note: "Ludhiana is the closest big city with confirmed international-curriculum campuses, and families considering boarding or relocation often start here.",
      schools: ["Britannica International School, Ludhiana", "Harvest International School, Ludhiana"],
    },
    {
      city: "Nearby: Mohali and Chandigarh",
      note: "The Mohali and Chandigarh area has a wider set of confirmed schools, for families ready to move or board.",
      schools: ["Oakridge International School, Mohali", "The British School, Chandigarh"],
    },
    {
      city: "Nearby: Jalandhar",
      note: "Jalandhar adds a further confirmed school on the other side of the state.",
      schools: ["Cambridge International School, Jalandhar"],
    },
    {
      city: "Rampura Phul and Bathinda",
      note: "We found no school here we can confirm for IB or Cambridge IGCSE, so local options are limited and none is named.",
      schools: [],
    },
  ],

  modesIntro:
    "No tutor comes to the house in Rampura Phul, because in-person work is confined to Gurugram and parts of Delhi NCR. What runs here is live, private video teaching from your own desk, in one of three patterns.",
  modes: [
    {
      title: "Steady weekly video classes",
      description:
        "An hour each week with the same tutor on a fixed day, handwritten working on a shared whiteboard, and a short note sent afterwards.",
      bullets: [
        "One tutor, one regular slot",
        "Working visible line by line",
        "A written note after each lesson",
        "No trips to Bathinda or Ludhiana",
      ],
    },
    {
      title: "Mock-exam and submission push",
      description:
        "More hours for mock papers, internal assessment milestones and the May and November series, using timed questions and mark-scheme feedback.",
      bullets: [
        "Topic-by-topic past papers",
        "More time where marks are lost",
        "Helpful before predicted grades",
        "Reduced after the exams",
      ],
    },
    {
      title: "Compact lesson with checked practice",
      description:
        "A shorter live session plus practice questions corrected between meetings, useful when a wedding, a harvest or a long day at the shop disturbs the week.",
      bullets: [
        "One live session weekly",
        "Corrected work with comments",
        "Copes with crowded weeks",
        "Can grow later",
      ],
    },
  ],

  sections: [
    {
      heading: "Who asks about IB and IGCSE in Rampura Phul, and where do they study?",
      paragraphs: [
        "Schools in and around Rampura Phul follow PSEB or CBSE, with private English-medium schools of varying sizes and coaching centres for IELTS and competitive exams. We could not confirm an IB or Cambridge IGCSE school in town or in Bathinda, so none is named here. Families studying either programme are boarding in another city or entering as private candidates.",
        "The Malwa belt is unusual in how closely it is tied to the wider world. Many homes have a son, daughter or cousin settled in Canada, Australia, New Zealand or the UK, and the next generation thinks of overseas study as a normal plan rather than an exception. That is why IB and IGCSE come up, since both are widely understood by foreign universities.",
        "Other enquirers are doctors, teachers and officers at Bathinda's hospitals, colleges and offices, business owners from the grain trade, and parents whose child is bright but bored by recall-heavy exams. Each needs a different kind of help, from a holiday catch-up for a boarder to a full two-year plan for a private candidate.",
        "We prefer clarity to hype. Rampura Phul does not have an international school; it has families who want one for their child and who can reach a tutor without leaving home.",
      ],
      bullets: [
        "No IB or Cambridge school in Rampura Phul or Bathinda could be confirmed",
        "Nearest confirmed campuses are in Ludhiana, Mohali, Chandigarh and Jalandhar",
        "Overseas-linked, professional and trading families lead the enquiries",
        "Boarders and private IGCSE candidates are a real share",
      ],
    },
    {
      heading: "PSEB, CBSE, IB or IGCSE: how should a Rampura Phul family choose?",
      paragraphs: [
        "PSEB and CBSE offer a direct line to JEE, NEET and state counselling, and they are the obvious choice where a seat in an Indian engineering or medical college is the goal. IB and IGCSE are better matched to students who expect to study overseas, who might relocate, or who think more clearly when asked to explain than when asked to recite.",
        "Compare a typical question. PSEB often wants a definition or a textbook-style problem. An IB or Cambridge question provides a fresh scenario and asks the student to analyse, compare or evaluate. CBSE is in between and is adding more competency-based items each year. No board is easier; each rewards different habits.",
        "For students who began in Punjabi medium, English command words are their own topic. Discuss, justify and evaluate each ask for specific things in an answer, and learning what they mean often recovers marks that knowledge alone does not.",
        "The table puts the main differences side by side.",
      ],
      table: {
        caption: "PSEB, CBSE and IB / IGCSE for Rampura Phul families",
        columns: ["Point", "PSEB", "CBSE", "IB / IGCSE"],
        rows: [
          ["Medium", "Punjabi or English", "English with Hindi", "English, with Punjabi or Hindi as a language subject"],
          ["Usual question", "Recall and textbook problems", "Recall and more application", "New scenarios and evaluation"],
          ["Entrance route", "JEE, NEET, state counselling", "JEE, NEET, CUET-UG", "CUET-UG and overseas; JEE and NEET depend on eligibility"],
          ["Subjects", "Stream with fixed groups", "Stream with limited options", "Six IB subjects or a wide IGCSE choice"],
          ["Nearest classroom", "Rampura Phul and Bathinda district", "Rampura Phul and Bathinda", "Ludhiana, Mohali, Chandigarh or boarding"],
        ],
      },
    },
    {
      heading: "What goes into IB and IGCSE tuition pricing for families here?",
      paragraphs: [
        "Pricing follows four things: the level of the course, the match between the tutor's past teaching and the syllabus, how many hours you book, and whether the help is constant or concentrated before exams. HL Mathematics from a former examiner sits above MYP reading support. A written rate is shared before the free trial, and there is no published price list.",
        "For families outside big cities, online lessons remove costs that otherwise pile up: fuel, tolls, a night in a hostel, a Saturday lost to travel. A weekly class in Ludhiana or Mohali can take most of a day. A live lesson at home needs a laptop, a desk and a stable connection.",
        "Low quotes need a second look. A tutor who has never taught the international papers may take months to learn what the exam rewards. Fewer hours with the right person are often cheaper across a year than many hours with the wrong one.",
        "Three questions are worth putting to any provider: who will teach, which courses they have taught, and what happens if the fit is poor. You will have answers to all three from us before anything is billed.",
      ],
      bullets: [
        "Course level and tutor experience are the main drivers",
        "Weekly hours and timing near exams also matter",
        "No fuel, toll or hostel costs for lessons at home",
        "Written rate before the free trial",
      ],
    },
    {
      heading: "Online tutor, a class in Ludhiana, IELTS-style coaching or self-study: what works here?",
      paragraphs: [
        "Rampura Phul has no shortage of coaching, much of it built for IELTS, school subjects and competitive exams, and it does those jobs well. For IB and IGCSE, these centres rarely have subject specialists. Ludhiana and Mohali do, but the road is long. Self-study is cheap, but nobody marks long answers with a strict eye.",
        "An online one-to-one tutor suits the exact gap a student here faces: someone who has taught the course, in a place where there is no such person. The lesson belongs to the child alone, the pace follows them, and returned work shows where marks were lost.",
        "Stable internet is the practical concern. Summer storms and power cuts can break a call, so a hotspot and a charged laptop are sensible. We test the set-up before the first class and reschedule any session that is lost.",
        "The table sets the options side by side.",
      ],
      table: {
        caption: "Routes to IB or IGCSE help for a student in Rampura Phul",
        columns: ["Route", "Syllabus knowledge", "Feedback on the student's work", "Practicalities"],
        rows: [
          ["Online one-to-one tutor", "High, matched to course and level", "Detailed and personal", "Needs a steady connection"],
          ["Class in Ludhiana or Mohali", "Usually high", "Shared with a group", "Long road trips and costs"],
          ["Local coaching centre", "Low for IB and IGCSE", "Varies widely", "Strong for IELTS and Indian exams, not these boards"],
          ["Self-study from past papers", "Only what the student finds", "Little without a marker", "Cheap, but weak on extended answers"],
        ],
      },
    },
    {
      heading: "How do cotton season, fog and the Malwa heat shape a Rampura Phul study year?",
      paragraphs: [
        "Malwa summers are fierce and dry. May and June often push above 44 degrees, which makes afternoon study unrealistic and power supply stretched. Lessons in those months settle into early morning or late evening, and this is the same time as the IB May session and the Cambridge May and June series.",
        "The monsoon arrives in July and brings humidity and the occasional heavy spell, while the cotton crop is picked from October into the winter. Households in the farm belt have all hands busy for some weeks, and a student may be asked to help. Tutors plan with the family, not against it.",
        "Winter brings dense fog from December to January and sharp cold. Buses and trains run late or not at all, but a live lesson does not depend on the road. The festival and wedding calendar adds Lohri, Baisakhi, Dussehra, Diwali and Gurpurab, plus a long winter wedding season that fills homes with guests.",
        "The table is a planning guide, not an official timetable, because each board sets its own dates.",
      ],
      table: {
        caption: "A Rampura Phul year for IB and IGCSE study",
        columns: ["Period", "Local conditions", "Sensible focus"],
        rows: [
          ["March to June", "Baisakhi, wheat harvest, severe heat, IB May and IGCSE May-June papers", "Final revision at cooler hours, then rest"],
          ["July to September", "Monsoon humidity, new academic year", "New content and internal assessment planning"],
          ["October to November", "Cotton picking, Dussehra, Diwali, Gurpurab, the November series", "Timed papers before festival weeks"],
          ["December to February", "Fog, Lohri, wedding season, mocks and applications", "Mocks, predicted-grade prep and overseas forms"],
        ],
      },
    },
    {
      heading: "After school: Canada, the UK, Australia or an Indian campus?",
      paragraphs: [
        "Families in the Malwa belt have watched relatives settle in Brampton, Surrey, Sydney and Leicester, so the overseas question arrives early. A strong IB Diploma carries weight with admissions offices in those countries, and Indian universities accept it too, because the AIU treats it as a Class 12 equal and CUET-UG admits IB-qualified candidates. IGCSE is a stepping stone at Class 10 level only.",
        "Nearer home the choices are concrete: AIIMS Bathinda for medicine, the Central University of Punjab at Ghudda, the state technical university, Thapar in Patiala, Chandigarh University and IIT Ropar. Whether an IB or IGCSE student may sit JEE or NEET depends on the rules published in that year, so we read the notice and do not rely on rumour from a neighbour.",
        "Begin the overseas paperwork in the first term of Class 12. Offers lean on predicted grades, essays and references, and some deadlines close while the student is still in the middle of the syllabus. Engineering applicants need strong Higher Level Mathematics and Physics; business and economics applicants have more freedom.",
        "A tutor can explain which subjects open which doors and pace the workload. The decision about where to apply, and the result, belongs to the family and the universities.",
      ],
      bullets: [
        "The IB Diploma counts as Class 12 for Indian universities through AIU equivalence",
        "CUET-UG welcomes IB-qualified applicants",
        "JEE and NEET eligibility is checked against each year's official notice",
        "Predicted grades drive overseas offers, so the Class 12 autumn term matters",
      ],
    },
    {
      heading: "Which IB subject mixes make sense for a student from Rampura Phul?",
      paragraphs: [
        "Start with the degree, then pick subjects. A future engineer usually takes Maths AA, Physics and Chemistry, at least two of them at Higher Level. A would-be doctor adds Biology and keeps Chemistry at HL. Someone headed for commerce or a family trading business might choose Economics, Business Management and Maths AI, with a language to round the six out.",
        "Physics HL leans on calculus, which is why it pairs with AA and not with AI in most cases. Its internal task is an experiment designed by the student, and a home with no laboratory should plan early around data that can be gathered safely or taken from a simulation. Tutors can test the question for feasibility without touching the work itself.",
        "Language choices deserve thought. Punjabi A or B from a Punjabi-speaking home can be among the safer points in a student's total, and Hindi B is similar. English A Language and Literature suits students who read widely and enjoy argument, while English B is meant for those still building fluency.",
        "Throughout, a tutor's role is to explain criteria, question the plan and check understanding. Ideas, data and sentences in any assessed piece stay the student's own.",
      ],
    },
    {
      heading: "IGCSE tiers and private entry: what should a Rampura Phul family plan?",
      paragraphs: [
        "Every IGCSE subject that has tiers offers a lower Core paper and a higher Extended one. Core limits the best grade available, which is why students aiming at A Level, the IB or selective universities sit Extended wherever they can. Trying a timed Extended paper in the first months of Grade 9 settles the question faster than a debate at home.",
        "A common bundle here is Mathematics, Physics, Chemistry, Biology, English as a second language and one Indian language, with Accounting, Economics or Computer Science added to match interests. Additional Mathematics is optional but is worth considering for any student who expects to take Maths AA or A Level Mathematics afterwards.",
        "Because there is no Cambridge or Pearson centre in town that we can confirm, private candidates must locate one that accepts outside entries, register before the cut-off and arrange the practical or alternative-to-practical paper. Do this at the start of Grade 9, not in the spring of Grade 10.",
        "Grades here reward habits more than heroics: write out every step, underline the command word and time each paper. An hour a week of those habits is worth more than a panicked fortnight of past papers.",
      ],
      bullets: [
        "Extended is the normal base for A Level or IB entry",
        "Additional Mathematics 0606 is optional but useful for later Maths AA",
        "Private entry requires a centre, a deadline and a practical plan",
        "A second-language paper in Punjabi or Hindi can raise an overall profile",
      ],
    },
  ],

  tutorsIntro:
    "Our tutors teach IB PYP, MYP and Diploma courses along with Cambridge and Pearson Edexcel IGCSE, and they reach Rampura Phul students by video only. We begin with syllabus, level and exam series, and look at weekly hours after that.",

  process: [
    { title: "Send a short brief", description: "Note the board or programme, the subject and level, recent marks and which evenings Rampura Phul life leaves free." },
    { title: "Read the tutor suggestions", description: "You receive one or two tutors who have taught that course, each with a reason for the match." },
    { title: "Sit a trial lesson", description: "A real topic, a live tutor and no bill, so your child can judge the teaching first." },
    { title: "Approve the opening plan", description: "The tutor lists topics for the first month, the weekly rhythm and the way parents will be updated." },
    { title: "Settle into a weekly hour", description: "A regular slot that bends around cotton picking, weddings, fog and exam weeks." },
  ],

  whyPoints: [
    { title: "A tutor who has taught the paper", description: "The match is made on course and level, which matters far more than a general reputation for international boards." },
    { title: "Truthful about delivery", description: "Everything in Rampura Phul happens on video, and the page says so before anything else." },
    { title: "Judge before you pay", description: "The trial lesson costs nothing, so the decision rests on what your child actually experiences." },
    { title: "The student's own work", description: "Coaching on IAs, Extended Essays and TOK is given, but the writing is never done for a student." },
    { title: "Clear reporting", description: "Parents read a brief note after each class and a longer summary every few weeks." },
    { title: "Room to adjust", description: "No fixed contract, pauses for harvest or weddings, and a new tutor if the chemistry is off." },
  ],

  faqs: [
    {
      question: "Is IB or IGCSE home tuition available in Rampura Phul?",
      answer:
        "Only in an online form. A tutor will not walk into your house in Rampura Phul, because home visits are limited to Gurugram and parts of Delhi NCR. What your child gets is a private live lesson on a laptop at home, with handwritten working on a shared whiteboard and written comments afterwards.",
    },
    {
      question: "How do I find an IB tutor in Rampura Phul?",
      answer:
        "Begin with a short message giving the course, level and latest marks. We reply with tutors who have taught that exact syllabus and arrange a free video trial. Since nobody needs to live nearby, you are choosing from tutors across India instead of hoping a suitable teacher happens to be in the Bathinda district.",
    },
    {
      question: "Are there IB or Cambridge schools in Rampura Phul?",
      answer:
        "None that we can verify, in Rampura Phul or in Bathinda, and we prefer to leave names out than guess. Confirmed campuses exist in Ludhiana, Mohali, Chandigarh and Jalandhar, listed above and labelled as nearby. Local schools are PSEB or CBSE, so families here usually study these programmes as boarders or as private candidates.",
    },
    {
      question: "What does IB and IGCSE tuition cost in Rampura Phul?",
      answer:
        "The figure depends on the course level, how well the tutor's background fits, hours per week and exam timing, so we keep no price list. You get a written rate before the trial lesson. Teaching at home also removes the fuel, toll and lost-day costs that a regular class in Ludhiana or Mohali would add.",
    },
    {
      question: "Can my child move from PSEB to IGCSE?",
      answer:
        "Yes, and the move is commonest after Class 8 or Class 10. The adjustment is mostly about English command words, longer written answers and the practical-skills paper, not the content itself. A tutor can build those skills first, then set a past paper so you see the readiness in actual marks.",
    },
    {
      question: "Which IB subjects do students here ask about most?",
      answer:
        "Maths and the sciences head the list, with Economics and Business Management close behind, which reflects how many families are thinking about degrees abroad. English A and Punjabi or Hindi come up often as well. When a combination looks overloaded, we say so and propose a lighter set that protects the total.",
    },
    {
      question: "Do tutors write the IA, Extended Essay or TOK essay?",
      answer:
        "They do not, and they will not. Tutors show how the criteria work, test a research question, read a draft and point out weak reasoning. Everything submitted must be the student's own thinking and wording, otherwise the IB can treat it as malpractice. Requests to cross that line are politely refused.",
    },
    {
      question: "How does the free trial lesson work?",
      answer:
        "Your child meets a matched tutor on video for a real lesson on a topic from their own course. The tutor watches how your child reasons and outlines a plan. No payment is taken and no promise is asked for. If the fit seems off, you can try a second tutor before deciding anything.",
    },
    {
      question: "What equipment and internet do we need?",
      answer:
        "A laptop or tablet, a camera, headphones, paper and pen, and a connection that stays up for an hour. The whiteboard opens in a browser, so there is nothing to install. Keep a phone hotspot ready for outages, because Malwa storms sometimes cut broadband. We check sound and video briefly before the first class.",
    },
    {
      question: "Can my child sit IGCSE privately from Rampura Phul?",
      answer:
        "Yes, as an outside candidate at a Cambridge or Pearson Edexcel centre that admits them, most likely in Ludhiana, Mohali or Chandigarh. The family needs the centre's name, entry deadline and practical arrangements settled early. Once the series is fixed, the tutor builds the preparation calendar backwards from the paper dates.",
    },
    {
      question: "Will universities in India accept the IB?",
      answer:
        "Broadly, yes. AIU treats the Diploma as equal to Class 12, and CUET-UG is open to IB-qualified candidates. JEE and NEET are different: eligibility follows each year's published rules and depends on the subjects taken. Check that notice before locking in subjects, and ask the target colleges if you are unsure.",
    },
    {
      question: "Can lessons fit around cotton picking, weddings and shop hours?",
      answer:
        "They can. A lesson can shift to a late evening or a Sunday morning, and in a crowded week the shorter live session with marked practice keeps things moving. Missed lessons are rebooked instead of forfeited. Tell us the dates you already know about, and we plan the term around them.",
    },
    {
      question: "What if fog, a storm or a power cut stops a lesson?",
      answer:
        "Fog does not matter to an online lesson, which is one of its quiet advantages on Punjab winter mornings. A storm or outage might, and then the tutor rebooks the class or sets practice to do offline. A charged laptop and a hotspot make interruptions rare, and we keep one spare slot in monsoon weeks.",
    },
    {
      question: "When is the right time to start IB Diploma tuition?",
      answer:
        "Usually the summer before Class 11, when the groundwork in Maths and the sciences is easiest to lay. Some families wait until first-term results show gaps, which also works. The earlier start pays off in the Extended Essay and internal assessments, both of which take months and punish last-minute effort.",
    },
    {
      question: "How do I start from Rampura Phul?",
      answer:
        "Send an email to support@ibgram.com or a WhatsApp message to +91 7439 368 115 with the programme or board, subject, level and free hours. You will hear back with tutor suggestions and a written rate, then a trial lesson. Whether to continue is your decision afterwards, and nothing is owed beforehand.",
    },
  ],

  internalLinks: [
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "Tiers, codes and exam sessions for the two IGCSE boards." },
    { label: "Tutor profiles", href: "/tutors/", description: "Browse tutors by subject, board and experience." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The Diploma's subjects, levels and core." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition." },
    { label: "IB Maths guidance", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Admissions and test prep", href: "/admissions/test-prep/", description: "Support for CUET, JEE, NEET and overseas tests." },
    { label: "IB and IGCSE tutoring in Bathinda", href: "/bathinda/", description: "The district city, a short drive down the railway line." },
    { label: "IB and IGCSE tutoring in Barnala", href: "/barnala/", description: "A neighbouring Malwa town served by the same online tutors." },
    { label: "IB and IGCSE tutoring in Mansa", href: "/mansa/", description: "Malwa families with a similar school picture." },
    { label: "IB and IGCSE tutoring in Sangrur", href: "/sangrur/", description: "Another Malwa district with online matching." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and ask for a free trial lesson." },
  ],

  closingHeading: "Book a free IB or IGCSE trial lesson at home in Rampura Phul",
  closingBody:
    "Write a few lines about the programme, the subject, your child's present school and the evenings that stay free once the shop shuts or the fields are done. A tutor who has taught the course, a video trial slot and a written rate come back to you, and no money moves until the first lesson is over. Email support@ibgram.com or WhatsApp +91 7439 368 115.",

  geo: { latitude: 30.2750, longitude: 75.2400 },
  alternateNames: ["Rampura", "Phul", "Rampura Phul Bathinda"],
  wikipedia: "https://en.wikipedia.org/wiki/Rampura_Phul",
  stripSchools: [],
};
