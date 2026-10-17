import type { CitySeoPage } from "../types";

/**
 * Puranpur: no school in Puranpur or elsewhere in Pilibhit district could be confirmed as an IB World
 * School or a Cambridge / Edexcel centre, so stripSchools is empty. The clusters name Lucknow,
 * Dehradun and Delhi NCR schools already checked on the neighbouring Pilibhit, Shahjahanpur, Lucknow,
 * Dehradun and Kashipur pages, and say plainly that local choice is limited.
 */
export const puranpur: CitySeoPage = {
  slug: "puranpur",
  countryName: "Puranpur",
  countryNameLong: "Puranpur, Pilibhit district, Uttar Pradesh",
  demonym: "Puranpur",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early evenings after school and farm work, and weekend mornings, with lighter weeks for harvest, fog and festivals",
  lastUpdated: "2026-09-21",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  geo: { latitude: 28.5167, longitude: 80.15 },
  wikipedia: "https://en.wikipedia.org/wiki/Puranpur",
  alternateNames: ["Puranpur Pilibhit", "Puranpur UP", "Puranpur Terai", "Puranpur tehsil", "Mini Punjab Puranpur"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Puranpur | Online Tuition, Pilibhit, UP",
  metaDescription:
    "Live IB and IGCSE tuition for Puranpur students in the Pilibhit Terai, taught one-to-one online from home, with written notes and a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Puranpur, Pilibhit",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR PURANPUR AND THE PILIBHIT TERAI",
  heroSubtitle:
    "Private tuition at home for IB and IGCSE students in Puranpur, taught online: your child on a laptop in the living room, a specialist tutor live on the screen, one lesson at a time. Puranpur lies in the Terai near the Uttarakhand and Nepal borders, far from the nearest confirmed IB and Cambridge schools in Lucknow, Dehradun and Delhi NCR, so a tutor who knows your child's syllabus matters. Send us the board and subject and we arrange a matched tutor and a free trial lesson.",
  primaryKeyword: "IB and IGCSE tutors in Puranpur",
  imageAltText: "Puranpur student in the Pilibhit Terai taking a live online IGCSE Chemistry lesson with a private tutor at home",
  secondaryKeywords: [
    "IB tutor in Puranpur",
    "IGCSE tutor in Puranpur",
    "IB home tuition Puranpur",
    "IGCSE home tuition Puranpur",
    "IB private tuition Puranpur",
    "IB Maths tutor Puranpur",
    "IGCSE Maths tutor Puranpur",
    "IB Physics tutor Puranpur",
    "IB Chemistry tutor Puranpur",
    "IB Biology tutor Puranpur",
    "IB DP tutor Puranpur",
    "IB MYP tutor Puranpur",
    "IB PYP tutor Puranpur",
    "IGCSE online tuition Puranpur",
    "IB tutor Puranpur Pilibhit",
    "IGCSE tuition Pilibhit district",
    "IB tuition Mala Mahof",
    "IB online classes Terai Uttar Pradesh",
    "IB tutor Puranpur UP",
  ],

  heroTrustPoints: [
    "Real-time lessons with a single tutor, nothing pre-recorded and no shared batches",
    "Tutors who have handled IB PYP, MYP and DP and Cambridge or Edexcel IGCSE papers",
    "Lessons planned around sugar-season work, winter fog and festival weeks",
    "A free trial first, and a short written note after each session",
    "Hindi explanations where they help, for children who think first in Hindi or Punjabi",
  ],
  heroStats: [
    { value: "IST", label: "One clock for tutor and family" },
    { value: "PYP to DP", label: "Four IB programmes" },
    { value: "Free trial", label: "Try before you commit" },
    { value: "May & Nov", label: "IB sessions we plan for" },
  ],

  intro: {
    heading: "IB and IGCSE tuition in Puranpur, a Terai town known as Mini Punjab",
    paragraphs: [
      "Puranpur is a northern town of Pilibhit district, a Terai market town of about 40,000 people on the plain below the Himalayan foothills, nearer the Uttarakhand and Nepal borders than Bareilly. After Partition many Sikh families settled in the area, which earned it the nickname Mini Punjab, and Hindi, Punjabi and Urdu are all heard in its streets. Sugarcane and paddy fields surround the town, and the Pilibhit Tiger Reserve, declared in 2014, lies in the forest belt nearby. Most children study in UP Board or CBSE schools and look to JEE, NEET or the state colleges. A few families, some with relatives in Canada, the UK or Australia, are looking at the IB or IGCSE instead.",
      "IB and IGCSE tutors in Puranpur are not something you can find down the road. The nearest schools we could confirm are in Lucknow, Dehradun and Delhi NCR, and we could not confirm one anywhere in Pilibhit district. So the tutoring has to come to the child, and online it can: a live one-to-one lesson with someone who has taught the course elsewhere in India, followed by a short written note that tells a parent what was covered.",
      "Read on for the school map, the boards compared, what drives a rate, how fog, monsoon and harvest shape the calendar, university routes and the way lessons are built. IB Gram is an independent service with no tie to the IB, Cambridge, Pearson or any school named, and our tutors do not write IAs, Extended Essays, TOK essays or coursework.",
    ],
  },

  programmesIntro:
    "Each IB stage asks something different of a tutor. The notes below describe what lessons look like for a child in Puranpur at every stage, and what usually triggers the search.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1 to 5, age 6 to 11",
      description:
        "Young learners explore themes such as where we are in place and time, and show what they know in an end-of-programme Exhibition. A tutor's part is to keep reading, number sense and spoken explanation growing in step.",
      countryNote:
        "No PYP school is known in the district. The programme reaches a Puranpur child only through a move, most likely to Lucknow, Dehradun or Delhi NCR, and early lessons make the new classroom's English less of a shock.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6 to 10, age 11 to 16",
      description:
        "Five years of interdisciplinary units, each marked against criteria, finishing in a Personal Project. Lessons show a child how to choose a method, justify it and check it against the criterion.",
      countryNote:
        "UP Board and CBSE students are used to a fixed answer format. The MYP rewards choosing your own, so a tutor spends time on planning answers aloud before writing them.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11 to 12, age 16 to 19",
      description:
        "Six subjects, a long essay, a course on knowledge and a record of service combine to make the Diploma. We coach the papers and the marking criteria; the essay, the internal assessments and every reflection belong to the student.",
      countryNote:
        "For a Puranpur student the Diploma means boarding in another city or joining online, and a private tutor becomes the thread that links holiday weeks at home to term time away.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11 to 12, age 16 to 19",
      description:
        "A blend of Diploma courses with career-related study and a reflective project. Tutors look after the academic side.",
      countryNote:
        "CP is seldom offered in this part of Uttar Pradesh. Send the subject list and we find a tutor for those papers.",
    },
  ],

  subjectsIntro:
    "The tutor is picked for one course at one level. Children in Puranpur often think in Hindi or Punjabi first, so we also look for a teacher who can unpack a hard idea in more than one way.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "HL or SL", description: "Calculus, algebra and proof for students who want the rigorous route, with exam technique woven in from the first lesson." },
    { name: "Mathematics: Applications and Interpretation", levels: "HL or SL", description: "Statistics, modelling and calculator fluency for students bound for business, the social sciences or design." },
    { name: "Physics", levels: "HL or SL", description: "Mechanics and waves first, electricity and fields next, with uncertainty and units treated seriously throughout." },
    { name: "Chemistry", levels: "HL or SL", description: "Amount of substance, bonding, energetics and organic routes, with weekly calculation practice." },
    { name: "Biology", levels: "HL or SL", description: "Cells to ecosystems, where exact terminology and careful graph reading earn the marks." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "A close fit for a Terai district, looking at water, agriculture and forest conservation through systems diagrams." },
    { name: "Economics", levels: "HL or SL", description: "Markets, growth and trade, with sugarcane pricing and farm policy as local illustrations." },
    { name: "Business Management", levels: "HL or SL", description: "Case-based papers, finance formulae and strategy vocabulary." },
    { name: "Computer Science", levels: "HL or SL", description: "Algorithms and programming logic, practised on paper first and then on a laptop." },
    { name: "Geography", levels: "HL or SL", description: "Rivers, population and development, with the Sharda and the Terai as real examples." },
    { name: "English A: Language and Literature", levels: "HL or SL", description: "Unseen-text commentary, comparative essays and a spoken component, taught step by step." },
    { name: "Hindi B", levels: "HL or SL", description: "Reading, writing and conversation for learners of Hindi, with Hindi A literature where a school offers it." },
    { name: "Punjabi (school-supported)", levels: "School-based", description: "For students from Punjabi-speaking homes, help with Punjabi as a home-language course where a school supports it." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion-led practice on knowledge questions and the exhibition; the essay stays the student's own." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel tutors are kept separate, since each board words and tiers its papers in its own way.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core and Extended, or Foundation and Higher", description: "Number, algebra, geometry and statistics, with timed papers that show which tier suits a child." },
    { name: "Additional Mathematics", levels: "Class 9-10", description: "Early calculus, functions and vectors, a useful step towards Diploma mathematics." },
    { name: "Physics", levels: "Core and Extended", description: "Forces, energy, electricity and waves with calculation-heavy practice." },
    { name: "Chemistry", levels: "Core and Extended", description: "Atoms, bonding, rates, electrolysis and organic basics." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, inheritance, human physiology and ecosystems." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core and Extended", description: "The double-award route for schools that teach it." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Reading, writing, listening and speaking for students who use Hindi or Punjabi at home." },
    { name: "Hindi as a Second Language", levels: "Core and Extended", description: "Comprehension, composition and oral work." },
    { name: "Computer Science", levels: "Single tier", description: "Pseudocode, logic and programming." },
    { name: "Business Studies and Economics", levels: "Single tier", description: "Key ideas, data response and short evaluation." },
    { name: "Geography", levels: "Single tier", description: "Landforms, rivers, settlement and development with fieldwork-style questions." },
  ],

  regionsTitle: "Puranpur town, the Terai villages and the border belt",
  regionsIntro:
    "Puranpur is a small town ringed by farms, forest and two state borders, so the school run and the study day depend on harvests, buses and the weather. These notes describe how that plays out in each pocket.",
  regions: [
    { name: "Puranpur town centre", note: "Market lanes and the bus stand, with gurdwaras and temples close together. Evenings are busy, so a quiet corner and a headset matter more than a fast connection." },
    { name: "Railway station and bus stand side", note: "Buses run from Puranpur to Pilibhit, Bareilly, Lucknow and Delhi. Families who travel by them plan lessons around departure times." },
    { name: "Mala and Mahof forest fringe", note: "Villages on the edge of the Pilibhit Tiger Reserve, where families often prefer to keep evenings indoors, so early-evening lessons suit them." },
    { name: "Sikh farming villages", note: "Terai farms settled after Partition, where Punjabi is spoken at home and harvest seasons dominate the year." },
    { name: "Sugarcane belt villages", note: "Cane cutting and mill schedules from winter into spring decide when parents are free, so lesson times are agreed with the season." },
    { name: "Pilibhit", note: "The district headquarters to the west, with more private schools and a separate IB Gram page." },
    { name: "Khatima and Banbasa side", note: "Uttarakhand towns a short drive north, closer than many Uttar Pradesh ones. Families cross the line for trade, relatives and sometimes school." },
    { name: "Bareilly", note: "The main city for colleges, hospitals and coaching, reached by road through Pilibhit, about 100 km away." },
    { name: "The Lucknow road", note: "The long route to the state capital, where the nearest confirmed IB primary and Cambridge IGCSE schools sit." },
  ],

  schoolClusters: [
    {
      city: "Puranpur and Pilibhit district: local choice is limited",
      note: "We could not confirm any school in Puranpur or elsewhere in Pilibhit district as an IB World School or an approved Cambridge or Edexcel centre. Schools here teach the UP Board syllabus or CBSE, so international schooling means leaving the district.",
      schools: [],
    },
    {
      city: "Nearby: Lucknow, the state capital",
      note: "The closest big city with a confirmed IB primary school and a Cambridge IGCSE campus, several hours away by road. It suits boarding or relocation more than a commute.",
      schools: ["Modern School, Lucknow", "City Montessori School, Cambridge Campus"],
    },
    {
      city: "Nearby: Dehradun and the Doon valley",
      note: "A long-established boarding belt across the Uttarakhand hills, with confirmed international schools that take students from the Terai.",
      schools: ["SelaQui International School", "Unison World School"],
    },
    {
      city: "Further afield: Delhi NCR",
      note: "Noida and Gurugram have confirmed IB campuses, some with boarding. The journey from Puranpur is a full day by road or rail.",
      schools: ["Genesis Global School, Noida", "GD Goenka World School", "Pathways World School"],
    },
  ],
  schoolDisclaimer:
    "These schools are named only to show where international options sit for Puranpur families. IB Gram is independent of each of them, of the IB, of Cambridge and of Pearson, and every admission is decided by the school.",

  modesIntro:
    "Tutors do not visit homes in Puranpur. In-person home tuition exists only in Gurugram and parts of Delhi NCR, so the three formats below are all live online lessons, timed around harvest, fog and the school day.",
  modes: [
    {
      title: "A weekly one-to-one slot",
      description: "One fixed hour a week with the same tutor for a subject that needs steady attention.",
      bullets: ["Shared whiteboard and scanned papers", "Corrections explained, not just marked", "A written note for parents every week"],
    },
    {
      title: "Pre-exam intensive weeks",
      description: "Daily or alternate-day lessons in the weeks before mocks or the IB and IGCSE series.",
      bullets: ["Complete papers under exam timing", "Error logs that drive the next lesson", "Room to reschedule if fog or a power cut hits"],
    },
    {
      title: "Language-bridge lessons",
      description: "For students who know the ideas in Hindi or Punjabi and need the English of the IB or IGCSE exam room.",
      bullets: ["Key terms in two languages", "Short written answers first, long ones later", "A gradual move to English-only explanation"],
    },
  ],

  tutorsIntro:
    "Our tutors teach from several Indian cities on Indian Standard Time, so a Puranpur lesson needs no time-zone arithmetic. Most sessions fall between the end of school and the start of the evening meal, or on weekend mornings.",

  sections: [
    {
      heading: "Does Puranpur have an IB or IGCSE school, and where is the nearest?",
      paragraphs: [
        "No, not that we could confirm. Puranpur's schools teach the UP Board syllabus or CBSE, and we found no IB World School or approved Cambridge or Edexcel centre anywhere in Pilibhit district. The nearest confirmed options are in Lucknow, Dehradun and Delhi NCR, each a long road or rail journey away.",
        "Distance sets the pattern. Families who want an international curriculum either board a child in the Doon valley or Delhi NCR, move to Lucknow, or prepare for a move while the child is still in a local school. In all three cases a tutor at home fills gaps: before the move, during school holidays and in exam months.",
        "The region's history adds a twist. After Partition many Sikh families settled around Puranpur, and the town is still nicknamed Mini Punjab. Households with relatives in Canada, the UK or Australia sometimes see an international curriculum as a bridge, and a child whose cousins study IGCSE or the IB abroad may ask for the same.",
        "Whatever the route, choose the tutor by the syllabus your child will sit, not by postcode. Send us the board, subject and level, and we start from there.",
      ],
    },
    {
      heading: "UP Board, CBSE, ICSE, IGCSE and IB: a side-by-side view for Puranpur parents",
      paragraphs: [
        "The Uttar Pradesh Madhyamik Shiksha Parishad, based in Prayagraj, conducts the High School and Intermediate examinations that most Puranpur students sit, in February and March, with results in spring. Teaching is mostly in Hindi, and the route onwards runs through JEE, NEET, CUET-UG and the state's own counselling.",
        "CBSE schools in Pilibhit and Puranpur follow the national syllabus in English or Hindi and lead to the same entrance tests. ICSE schools are rare in the district.",
        "IGCSE and the IB differ from all three in one big way: they ask the student to write and justify, not just to recall. A child used to the textbook's answer format needs time to learn that an examiner wants the working and the reason. The table lines the boards up.",
      ],
      table: {
        caption: "The boards as seen from Puranpur",
        columns: ["Board", "When papers fall", "Main language", "Usual next step", "Local tutoring"],
        rows: [
          ["UP Board", "February and March", "Hindi, some English", "JEE, NEET, CUET-UG, UP colleges", "Plentiful"],
          ["CBSE", "Board exams from mid-February", "English or Hindi", "JEE, NEET, CUET-UG", "Good in Pilibhit, thinner here"],
          ["ICSE and ISC", "February to March", "English", "CUET-UG and colleges elsewhere", "Rare"],
          ["Cambridge or Edexcel IGCSE", "Several series, mainly May-June and October-November", "English", "IB, A Level or Class 11 in India", "Almost none"],
          ["IB Diploma", "May and November only", "English", "AIU-recognised study, universities abroad", "None locally"],
        ],
      },
    },
    {
      heading: "What will IB or IGCSE tuition cost a Puranpur family, and what moves the price?",
      paragraphs: [
        "The rate for IB and IGCSE tutors in Puranpur depends on the level and subject, the number of lessons, the length of the plan and the tutor's experience with that exact course. IB Gram sends every quote in writing before a trial lesson and publishes no price list.",
        "Level and subject come first. A Higher Level Diploma tutor needs depth well beyond school texts, and rarer courses such as Computer Science HL have fewer teachers, so both are priced above an MYP or IGCSE lesson in a common subject.",
        "Frequency and duration are the levers a family controls. One lesson a week for a year costs differently from three weeks of daily lessons before mocks, and a tutor can advise which pattern your child needs rather than selling the biggest package.",
        "Set against this the cost of the alternatives: boarding fees, travel to another city, and time away from home. Online lessons add none of these, although they support a school rather than replace one.",
      ],
      bullets: [
        "Course and level: Core, Extended, Standard or Higher",
        "How few tutors are qualified in the subject",
        "Lessons per week and plan length",
        "Steady weekly support or pre-exam weeks",
        "Travel and boarding costs that online lessons avoid",
      ],
    },
    {
      heading: "Online tuition, Bareilly classes, local tutors and self-study: how they stack up",
      paragraphs: [
        "Every family weighs the same four options, and each suits a different child. The useful questions are how deep the subject knowledge is, how far the journey is and how easily the timetable bends.",
        "Bareilly is close to 100 km away by road, and most classes there are built around JEE, NEET or board exams rather than IB and IGCSE papers. A local tutor in Puranpur is handy and often excellent on UP Board and CBSE content, although few have worked with international papers. Self-study with past papers suits a disciplined student in a favourite subject.",
        "IB and IGCSE tutors in Puranpur who teach online combine the depth of a specialist with the comfort of home. Many families keep a local tutor for school homework and use the online tutor for the syllabus that only a specialist knows.",
      ],
      table: {
        caption: "Four ways to get IB or IGCSE help from Puranpur",
        columns: ["Choice", "IB and IGCSE depth", "Journey", "Timetable", "Sensible when"],
        rows: [
          ["Live online lessons at home", "High, matched to board and level", "None", "Evenings and weekends, easily moved", "Any programme or subject"],
          ["Classes in Bareilly", "Mostly JEE and NEET focused", "About 100 km each way", "Fixed batches", "Families already moving there"],
          ["Local tutor in Puranpur", "Strong on UP Board and CBSE", "Short", "Flexible", "Homework and board subjects"],
          ["Self-study with past papers", "Depends on the student", "None", "Entirely your own", "Disciplined students in a strong subject"],
        ],
      },
    },
    {
      heading: "Fog, monsoon, harvest and festivals: the Puranpur study calendar",
      paragraphs: [
        "Uttar Pradesh schools start their session in April and finish in March, with UP Board papers in February and March. IB and IGCSE papers keep to their own calendar, so a Puranpur student often works to two sets of dates.",
        "IB Diploma papers are written only in May and November, with scores reaching schools in early July and early January. Pearson Edexcel International GCSE runs in January, May-June and October-November, and Cambridge IGCSE in February-March, May-June and October-November. The school enters a student for one series, and tutoring counts backwards from it.",
        "Local life shapes the weeks. Wheat is harvested in April and paddy in October and November, and cane crushing runs through the colder months, so many households are at their busiest when exams approach. Lohri and Baisakhi matter to Sikh families, Holi, Dussehra and Diwali to most, and Eid to the town's Urdu-speaking families.",
        "Winter brings dense fog and cold spells across the Terai, and July to September brings monsoon rain. We build spare slots into every plan and move lessons to the clearest, quietest part of the day.",
      ],
      table: {
        caption: "A year of study around Puranpur",
        columns: ["Months", "Local rhythm", "Exam or school milestone", "How lessons adapt"],
        rows: [
          ["January to March", "Fog, Lohri, Holi; UP Board papers", "IGCSE February-March series, IB mocks", "Short weekday slots, timed papers"],
          ["April to June", "Wheat harvest, Baisakhi, heat", "IB May session", "Early-evening lessons, flexible dates"],
          ["July to September", "Monsoon rain, school reopens", "IB results in early July", "Foundation lessons, backup connection"],
          ["October to November", "Paddy harvest, Dussehra, Diwali, Gurpurab", "IB and IGCSE November series", "Compressed revision, spare slots"],
          ["December", "Dense fog and cold spells", "IB January results, review", "Lighter plan and goal setting"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Puranpur go after school?",
      paragraphs: [
        "Indian universities generally ask IB Diploma holders for an Association of Indian Universities equivalence certificate, after which admission follows each institution's own rules, and CUET-UG is the common entry test for central universities such as Banaras Hindu University and Delhi University.",
        "For engineering, JEE Main opens the NITs and, through state counselling, Uttar Pradesh colleges, while IIT Roorkee and IIT Kanpur are among the institutes JEE Advanced candidates from this region often consider. For medicine, NEET-UG leads to colleges such as King George's Medical University in Lucknow. State seat rules depend on domicile and subject choices, so check them before Class 11.",
        "The Terai's farming economy makes agriculture, veterinary science and food technology real options. G. B. Pant University of Agriculture and Technology at Pantnagar and the Indian Veterinary Research Institute near Bareilly are well-known names. Their admission routes change, so read the current notice.",
        "Abroad, Canada, the UK and Australia are the usual choices, and families with relatives there often start planning early. Predicted grades and school references count, so a tutor's weekly notes and steady practice help build a strong record.",
      ],
      bullets: [
        "AIU equivalence certificate for Indian universities",
        "CUET-UG for central and participating universities",
        "JEE Main, JEE Advanced and NEET-UG eligibility checked against subjects",
        "Agriculture and veterinary routes checked against the current notice",
        "Canada, the UK and Australia through predicted grades",
      ],
    },
    {
      heading: "IB Mathematics, Physics, Chemistry and Biology: lesson structure for Terai students",
      paragraphs: [
        "Choosing between the two mathematics courses comes down to two questions. Does your child enjoy manipulating symbols and proofs for their own sake, and what will they study at university? Analysis and Approaches fits a yes and engineering or pure science, while Applications and Interpretation fits commerce, design or the life sciences.",
        "Lessons start from the paper, not the textbook. A tutor takes a past question, shows how the marks are split, and then rebuilds the topic behind it. The graphical calculator is taught as a tool for checking an answer, not a substitute for the working.",
        "Each science has a signature skill. In Physics it is units and order of magnitude, in Chemistry it is the mole and the drawn mechanism, and in Biology it is precise definitions and reading data. We drill the skill for a few minutes every lesson, because small habits decide grade boundaries.",
        "For Higher Level students the tutor also plans the long game: mock dates, internal assessment deadlines and revision blocks. The internal assessment itself is your child's own work, from choosing the question to writing the report.",
      ],
    },
    {
      heading: "IGCSE Core, Extended, Cambridge and Edexcel: decisions to make in Class 9",
      paragraphs: [
        "Three decisions matter in Class 9: the board, the tier and the subject mix. A family rarely controls the board, since the school picks it, but it does control the tier and, sometimes, the subjects.",
        "Extended papers allow the full grade range, while Core papers stop short of the top grades, so a child who may take a science or Mathematics further should be entered for Extended. Pearson Edexcel makes a similar split in Mathematics A, with Foundation and Higher tiers. A child who is struggling can score well at the lower tier and feel far more confident.",
        "The subject mix decides which doors stay open after Class 10. A balanced set pairs languages, Mathematics, sciences and one humanities or business subject, and strong Mathematics students often add Additional Mathematics.",
        "For Puranpur students the commonest stumbling block is extended English writing, particularly for children who think in Hindi or Punjabi. A tutor starts with directed writing and summaries, and within a term most students see the difference.",
      ],
    },
    {
      heading: "How do Hindi and Punjabi at home fit with English-medium IB and IGCSE lessons?",
      paragraphs: [
        "They fit well, provided the tutor treats them as an asset. A child who knows an idea in Hindi or Punjabi has done the hard part, and the work is to attach the English term and practise using it under time pressure.",
        "We usually start with a two-language glossary for each unit, then move to short English answers, then to full paragraphs. Explanations can switch into Hindi when a concept is stuck, and they shift back as confidence grows.",
        "The IB Diploma itself values the home language, because every student studies a Language A, and a Hindi- or Punjabi-speaking student can present a mother tongue there where the school supports it. IGCSE students can take Hindi as a second language alongside English.",
        "Daily reading in English, even a page of a newspaper, does more than an extra worksheet. We suggest a short reading habit alongside lessons, and the written note after each session lists the new words to practise.",
      ],
    },
  ],

  process: [
    { title: "Message the details", description: "Send the board, subject, level and exam series by WhatsApp or email, along with any dates the school has fixed." },
    { title: "Meet the suggested tutor", description: "We name one tutor who has taught that exact course and send a short profile." },
    { title: "Try a free lesson", description: "A live trial on a real syllabus topic, with no payment and no obligation." },
    { title: "Review the written terms", description: "If you would like to continue, the rate and plan arrive in writing for your approval." },
    { title: "Start the weekly routine", description: "Lessons run at a fixed time each week with a note after each, and the tutor can be changed if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Right tutor for the paper", description: "Each tutor is chosen for the exact board, course and level your child sits." },
    { title: "Planned around the Terai year", description: "Harvest, fog, monsoon and festivals are built into the schedule." },
    { title: "Plain about what is nearby", description: "We say clearly that no school here could be confirmed and describe the nearest real options." },
    { title: "Two languages welcome", description: "Explanations can switch between Hindi and English so that ideas land first and vocabulary follows." },
    { title: "Coaching, nothing more", description: "Tutors teach method and content; assessments, essays and coursework stay with the student." },
    { title: "A free exit after lesson one", description: "You decide after the trial, with the rate in writing and a tutor change at no cost." },
  ],

  faqs: [
    { question: "Is there any IB or IGCSE school in Puranpur or Pilibhit district?", answer: "None that we could confirm. Schools in Puranpur teach the UP Board syllabus or CBSE, and no school in Pilibhit district appeared as an IB World School or an approved Cambridge or Edexcel centre. The nearest confirmed options are in Lucknow, Dehradun and Delhi NCR. Tutoring can start once your child's school and syllabus are settled." },
    { question: "Do tutors come to our house in Puranpur?", answer: "No, tutors do not visit homes in Puranpur; home visits run only in Gurugram and parts of Delhi NCR. Puranpur families get online home tuition: a live one-to-one lesson over video while your child sits at home. It saves the road and keeps the same tutor all year." },
    { question: "How quickly can you find an IB Physics or IGCSE Chemistry tutor for a Puranpur student?", answer: "Usually within a day or two of your message. To find IB and IGCSE tutors in Puranpur for a subject, send the board, subject, level and exam series, and we name one tutor who has taught that exact course and arrange a free trial lesson. If the fit is wrong we find another tutor without charging for the change." },
    { question: "What decides the price of IB or IGCSE tuition?", answer: "Level and subject, how few tutors teach the course, the number of lessons a week and the length of the plan. We publish no fixed prices, and every quote is sent in writing before a trial lesson is booked." },
    { question: "Why study online instead of joining a centre in Bareilly?", answer: "Because the lesson is one-to-one, the journey disappears and the tutor knows your child's syllabus. Centres in Bareilly are built mostly around JEE and NEET, and the trip is close to 100 km each way. Online lessons can also move easily when fog or farm work intrudes." },
    { question: "Can a UP Board or CBSE student switch to IGCSE or the IB?", answer: "Yes, and many manage it. The content often overlaps, but the question style, the command words and the internal assessments are new. A tutor starts with paper style and vocabulary and then fills any gaps, ideally a couple of months before the switch." },
    { question: "We have relatives in Canada, the UK or Australia. Will tutoring help if we move?", answer: "Yes. A tutor can align your child with the syllabus they will meet abroad, whether IB, IGCSE or an A Level route, and keep the learning unbroken during the move. Tell us the target school and year, and we plan backwards from the date of arrival." },
    { question: "Which exam sessions can you prepare us for?", answer: "IB May and November, and whichever Cambridge or Edexcel series the school has chosen. The school sets the window and we count backwards from it. IB results arrive in early July and early January." },
    { question: "Does the tutor write the IA, Extended Essay or TOK essay?", answer: "No. The student writes every internal assessment, Extended Essay, TOK essay and piece of coursework. A tutor explains the criteria, teaches the method and comments on the student's own ideas, which is as far as coaching goes." },
    { question: "What happens in the free trial lesson?", answer: "Your child has a live lesson on a real topic from their syllabus with a tutor who has taught the course. There is no payment and no obligation. A short note follows, and we send the rate in writing only if you would like to go on." },
    { question: "Do you teach Cambridge and Pearson Edexcel both?", answer: "Yes. The boards set different papers and tiers, so the tutor is matched by board code and subject. Tell us which board your child's school uses and which papers come next." },
    { question: "My child speaks Punjabi and Hindi at home. Will that hold back English-medium lessons?", answer: "No, it is often an advantage. A child who understands an idea in Hindi or Punjabi has done the hard work, and the tutor adds the English term and practises it. We use a two-language glossary at first and move towards English-only explanations as confidence grows." },
    { question: "Can students from Pilibhit, Khatima or Banbasa join too?", answer: "Yes. Lessons are online, so any household with a steady connection can take part. We schedule around bus times, harvest weeks and festival dates, and we suggest a backup mobile network for foggy or rainy spells." },
    { question: "What if fog, floods or a power cut interrupt a lesson?", answer: "We pause and resume from the same topic, or rebook within the month using the spare slots in every plan. A charged laptop and a phone hotspot cover most short gaps, and in fog or flood weeks we suggest a lighter plan." },
    { question: "Will an IB Diploma be accepted for UP and national colleges?", answer: "Generally yes, once the Association of Indian Universities has issued an equivalence certificate, and CUET-UG is the usual route into central universities. JEE, NEET and Uttar Pradesh seat rules depend on subject choices, so read the current brochures before settling subjects." },
    { question: "Is mobile data enough for lessons?", answer: "Often yes, if the signal is steady. A laptop or tablet is better than a phone for the shared whiteboard and past papers, but a phone works as a backup. A headset and a quiet corner matter more than an expensive device." },
    { question: "How do we start?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board, subject and level. A tutor match and a trial time normally reach you within a day or two." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "All the places our online tutoring serves." },
    { label: "IB tutors for every programme", href: "/ib-tutors/", description: "How our IB teaching is organised, from PYP to Diploma." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel support from board-specific tutors." },
    { label: "Diploma Programme tutoring", href: "/programmes/dp/", description: "Subject help across the two Diploma years." },
    { label: "Middle Years Programme tutoring", href: "/programmes/myp/", description: "Help with criteria and the Personal Project." },
    { label: "Primary Years Programme tutoring", href: "/programmes/pyp/", description: "Gentle lessons for younger students in inquiry-led schools." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI at Standard and Higher Level." },
    { label: "Meet our tutors", href: "/tutors/", description: "The people who teach IB and IGCSE with us." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us or book a free first lesson." },
    { label: "IB and IGCSE tutors in Pilibhit", href: "/pilibhit/", description: "The district headquarters to the west." },
    { label: "IB and IGCSE tutors in Shahjahanpur", href: "/shahjahanpur/", description: "A neighbouring district city on the Lucknow side." },
    { label: "IB and IGCSE tutors in Lakhimpur", href: "/lakhimpur/", description: "Another Terai town to the east." },
    { label: "IB and IGCSE tutors in Lucknow", href: "/lucknow/", description: "The state capital, with the nearest confirmed IB primary school." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson from home in Puranpur",
  closingBody:
    "To begin with IB and IGCSE tutors in Puranpur, message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with your child's board, subject and exam series. We arrange a matched tutor and a free trial lesson, and the rate follows in writing before you decide.",
};
