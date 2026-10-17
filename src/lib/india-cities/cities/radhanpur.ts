import type { CitySeoPage } from "../types";

/**
 * /radhanpur/ - IB and IGCSE tutoring page for Radhanpur, Patan district, Gujarat. Online-only delivery.
 * Wikipedia confirms the town facts (Babi nawabs, Rajghadi, town wall). No IB or Cambridge school is confirmed
 * inside Radhanpur, so stripSchools is empty and the clusters point honestly to Ahmedabad (schools already
 * verified on neighbouring pages).
 */
export const radhanpur: CitySeoPage = {
  slug: "radhanpur",
  countryName: "Radhanpur",
  countryNameLong: "Radhanpur, Gujarat",
  demonym: "Radhanpur",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots after the school day, with mornings kept free in the peak summer weeks and around Uttarayan and Navratri",
  lastUpdated: "2026-09-21",
  state: "Gujarat",
  stateCode: "IN-GJ",
  geo: { latitude: 23.8326, longitude: 71.6049 },
  alternateNames: ["Radhanpur Patan", "Radhanpur Gujarat"],
  wikipedia: "https://en.wikipedia.org/wiki/Radhanpur",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Radhanpur | Online Home Tuition",
  metaDescription:
    "One-to-one IB and IGCSE tutors for Radhanpur students in Patan district, taught live online at home, with a free trial lesson and written notes.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Radhanpur",
  heroEyebrow: "IB & IGCSE TUITION FOR RADHANPUR FAMILIES, TAUGHT LIVE ONLINE",
  heroSubtitle:
    "Looking for home tuition in Radhanpur for an IB or IGCSE student? The old Babi nawabs' town in Patan district has no IB or Cambridge campus we can confirm, so private tuition at home arrives as live one-to-one lessons on a laptop, with a free first class to try it.",
  primaryKeyword: "IB and IGCSE tutors in Radhanpur",
  imageAltText: "Radhanpur student attending a live one-to-one IB Mathematics lesson on a laptop at a study table at home",
  secondaryKeywords: [
    "IB tutor Radhanpur",
    "IGCSE tutor Radhanpur",
    "IB home tuition Radhanpur",
    "IGCSE home tuition Radhanpur",
    "IB private tuition Radhanpur",
    "IB Maths tutor Radhanpur",
    "IGCSE Maths tutor Radhanpur",
    "IB Physics tutor Radhanpur",
    "IB Chemistry tutor Radhanpur",
    "IB Biology tutor Radhanpur",
    "IB DP tutor Radhanpur",
    "IB MYP tutor Radhanpur",
    "IB PYP tutor Radhanpur",
    "IGCSE online tuition Radhanpur",
    "online IB tutor Patan district",
    "IB tutor North Gujarat",
    "IGCSE tutor Patan Gujarat",
    "Cambridge IGCSE tutor Radhanpur",
    "Edexcel IGCSE tutor Radhanpur",
    "online IB tuition Gujarat",
    "IB tutor Radhanpur Gujarat",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact IB course or IGCSE specification code your child sits",
    "Live online lessons only in Radhanpur, as home visits run just in Gurugram and parts of Delhi NCR",
    "First lesson free, then a rate written down before you commit",
    "A short written note after every class so parents see what was covered",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards" },
    { value: "Free trial", label: "Before any commitment" },
    { value: "IST", label: "Tutors on Indian time" },
  ],

  intro: {
    heading: "International curricula for a North Gujarat town",
    paragraphs: [
      "Radhanpur is an old town with a layered past. It was the seat of a princely state ruled by the Babi family until 1947, and the carved wooden houses, the remains of a town wall and the inner fort known as Rajghadi still mark the map. Schooling today is mostly Gujarati-medium and GSEB, with some CBSE. We could not confirm any school in the town that teaches the IB or a Cambridge or Edexcel IGCSE programme, and we would rather say so than invent one.",
      "Families who look for an IB or IGCSE tutor in Radhanpur are usually in one of a few situations. A child may already be enrolled in an international school in Ahmedabad or boarding elsewhere and come home for holidays. A parent working in the solar, power or transport sector around Patan district may be expecting a posting abroad. Or a household with relatives overseas may want a Western university route and wants to start early, in Class 8 or 9.",
      "Home tuition is the phrase most parents type, so here is the plain version. IB Gram tutors do not visit houses in Radhanpur; in-person lessons run only in Gurugram and parts of Delhi NCR. What we offer here is online home tuition: your child sits at their own desk, a trained tutor appears on the screen, and the lesson is private, live and paced to one student.",
      "IB Gram is an independent service with no link to the IB, Cambridge, Pearson or any school mentioned on this page. Our tutors coach understanding and exam technique; they never write a student's Internal Assessment, Extended Essay, TOK essay or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "No daily road trip to Patan, Mehsana or Ahmedabad for a specialist",
      "Free trial lesson, then a written rate and a fixed weekly slot",
      "Written feedback after each session",
      "Live online only in Radhanpur, with no tutor visits to the home",
    ],
  },

  programmesIntro:
    "A child anywhere in Radhanpur can follow the IB continuum through screen-based lessons. The sections below describe how a tutor's job changes as a student moves from primary classes towards the Diploma.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Learning is organised around big ideas such as how we express ourselves or where we are in place and time, rather than separate textbooks. Children close the stage with a PYP Exhibition, a self-chosen inquiry with no external exam.",
      countryNote:
        "For a young Radhanpur child the real gain is usually English fluency and number sense through short, playful online sessions, particularly where the home language is Gujarati and the school language is not.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are marked against criteria, so a student needs to learn what a descriptor is asking for. Service as action and a Personal Project sit alongside the academic work.",
      countryNote:
        "Students joining MYP from a GSEB or CBSE background in North Gujarat tend to need help moving from recalling a textbook line to explaining and applying ideas, which a patient one-to-one tutor can build over a term.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, along with Theory of Knowledge, the Extended Essay and CAS. Examinations fall in May and November, and internal assessments feed into each subject grade.",
      countryNote:
        "A Radhanpur student following the Diploma will almost always be registered through a school in another city, so the weekly online specialist often becomes the sole expert teacher for Physics HL or Mathematics.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two Diploma courses combine with a career-related study, a reflective project and language development, giving a practical route into applied degrees or work.",
      countryNote:
        "CP is offered by very few schools in India and none in Radhanpur that we can confirm. We support the academic courses and the language strand, and we say so honestly if another pathway suits the child better.",
    },
  ],

  subjectsIntro:
    "These IB Diploma subjects come up most in enquiries from North Gujarat. We check the syllabus year and level with the registering school before the first full lesson.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, functions and proof for students heading to engineering, science or economics." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, modelling and technology use, suited to business, commerce and social science pathways." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, waves, fields and modern physics, with data-booklet fluency and help planning the internal investigation." },
    { name: "Chemistry", levels: "SL and HL", description: "Stoichiometry, energetics, equilibrium and organic reactions, with working laid out the way examiners expect." },
    { name: "Biology", levels: "SL and HL", description: "Cell biology, genetics, ecology and physiology, written in command-term language." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Land use, water and energy questions that connect easily to the solar parks and arid landscape of North Gujarat." },
    { name: "Economics", levels: "SL and HL", description: "Markets, trade and development, with diagram accuracy and current examples." },
    { name: "Business Management", levels: "SL and HL", description: "Strategy, finance and operations, a natural fit for business families in trading towns." },
    { name: "Geography", levels: "SL and HL", description: "Population, resources and hazards, and a clean plan for fieldwork in the internal assessment." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Close analysis of texts and preparation for the individual oral." },
    { name: "Gujarati A", levels: "SL and HL", description: "Literature in the home language where the school and the exam session offer it." },
    { name: "Hindi B", levels: "SL and HL", description: "Reading, writing and speaking practice for the second-language route." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, data structures and programming logic." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion of knowledge questions and exhibition planning; the student writes their own essay." },
  ],
  igcseSubjectsIntro:
    "IGCSE papers come in the May or June series and the October or November series, and Edexcel adds January for several subjects. These are the courses Radhanpur families ask about, on both Cambridge and Pearson Edexcel lines.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core and Extended", description: "Algebra, geometry, trigonometry and statistics, with calculator and non-calculator technique." },
    { name: "Additional Mathematics", levels: "Extended route", description: "More calculus and algebra for students aiming at IB Maths AA or a science stream." },
    { name: "Physics", levels: "Core and Extended", description: "Motion, energy, circuits, waves and atomic physics, with practical-skills questions." },
    { name: "Chemistry", levels: "Core and Extended", description: "Reactions, the periodic table, quantitative work and introductory organic chemistry." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, inheritance, nutrition and ecology, plus reading data from graphs and tables." },
    { name: "Environmental Management", levels: "Single tier", description: "Resources, ecosystems and human impact, close to the realities of a semi-arid region." },
    { name: "Geography", levels: "Single tier", description: "Physical and human themes with map and fieldwork skills." },
    { name: "Economics", levels: "Single tier", description: "Markets, trade and the role of government in plain, example-led explanations." },
    { name: "Accounting", levels: "Single tier", description: "Ledgers, final accounts and ratios, popular with trading and business families." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Balanced practice across reading, writing, listening and speaking." },
    { name: "Computer Science", levels: "Single tier", description: "Pseudocode, logic and programming tasks." },
    { name: "Hindi as a Second Language", levels: "Single tier", description: "Where the board and session offer it, with the specification code confirmed first." },
  ],

  regionsTitle: "Radhanpur areas we teach online",
  tutorsIntro:
    "Lessons for Radhanpur are taught over live video by India-based tutors, each with experience in the IB programme or IGCSE specification listed on their card. The free first class lets you meet one before deciding.",
  regionsIntro:
    "Our lessons reach any Radhanpur address with a steady internet connection. The areas below are how families describe the town and its approach roads, with a note on timing and the school run.",
  regions: [
    { name: "Old walled town and Rajghadi", note: "The historic core around the inner fort, with narrow lanes and older joint families. Evening lessons avoid the crowded market hours." },
    { name: "Station Road", note: "The busy corridor around the railway line and bus stand, convenient for families who travel to Patan or Ahmedabad for work." },
    { name: "Patan Road side", note: "Residential colonies on the road towards Patan, where parents sometimes commute to the district headquarters and prefer lessons after they return." },
    { name: "Sami and Harij Road side", note: "Homes on the western approach, where some households run farm or trading businesses and keep flexible hours." },
    { name: "Santalpur Road side", note: "The road leading towards the Rann side of the district. Distances are long, so online lessons remove the travel completely." },
    { name: "Newer housing colonies on the town edge", note: "Plots and societies built out in recent years, typically with younger families considering international curricula for the first time." },
    { name: "Charanka and the solar-park belt", note: "Villages near the large solar park, with some households tied to the energy sector and open to postings elsewhere." },
    { name: "Market and Bohra Wad lanes", note: "Trading households in the town centre, many with Gujarat-wide and overseas family links." },
    { name: "Government quarters and school campus area", note: "Teachers, clerks and officials living near the municipal and school buildings, who often ask about boards and degree pathways." },
  ],

  schoolClusters: [
    {
      city: "Nearby: Ahmedabad",
      note: "Roughly 170 kilometres away by road, Ahmedabad holds Gujarat's largest group of IB and Cambridge schools, and it is where most Patan-district families begin when they consider boarding or relocation. Local options in Radhanpur itself are limited.",
      schools: ["Calorx Olive International School", "Ahmedabad International School", "Fountainhead School"],
    },
    {
      city: "Nearby: Ahmedabad's western ring",
      note: "Families moving closer to work in the Bopal and Science City area look at a newer cluster of schools.",
      schools: ["Mahatma Gandhi International School", "Eklavya School"],
    },
    {
      city: "In Radhanpur itself: no confirmed IB or Cambridge school",
      note: "The local schools we know of follow GSEB or CBSE. We do not name any as an IB or IGCSE provider.",
      schools: ["No confirmed IB or IGCSE school in Radhanpur; we name none."],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent tutoring service and is not connected with the IB, Cambridge, Pearson or any school named above. Schools appear only as nearby context; please check authorisation and current offerings directly with each school.",

  modesIntro:
    "Because tutors do not travel to Radhanpur, all three formats run on screen. They differ in group size and in the point of the year when they help most.",
  modes: [
    {
      title: "Private online lessons at home",
      description:
        "One student, one specialist, live over video from the student's own room. It is the nearest thing to home tuition we can offer in Radhanpur, since home visits are limited to Gurugram and parts of Delhi NCR.",
      bullets: ["Shared whiteboard and worksheets", "A fixed weekly slot in IST", "Written note after every lesson"],
    },
    {
      title: "Vacation revision blocks",
      description:
        "Summer break and the Diwali holidays are a good moment for concentrated catch-up before the next term or exam series.",
      bullets: ["Daily or alternate-day sessions", "Marked past-paper practice", "A list of weak topics for parents"],
    },
    {
      title: "Paired lessons",
      description:
        "Two students on the same course and level can share a tutor, which suits siblings or cousins and divides the cost.",
      bullets: ["Same course and level", "Rate agreed in writing", "Easy to return to one-to-one"],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools and families are around Radhanpur?",
      paragraphs: [
        "Inside Radhanpur we found no school that clearly runs the IB or a Cambridge or Edexcel IGCSE programme. The town's schools are Gujarati-medium GSEB schools, a few English-medium private ones and some CBSE options. Patan, the district seat, is the next centre of education, home to Hemchandracharya North Gujarat University, and it too is mainly a state-board setting.",
        "The families who ask about international curricula are therefore a mixed group. Some have children in Ahmedabad schools on the IB or IGCSE and want holiday and weekend support. Some run trading or farming businesses with relatives in the UK, the United States, Canada or East Africa, a very common pattern across Gujarat, and are mapping a route abroad. Others work in power, solar or railway roles that can mean a transfer.",
        "For all of them the question is practical rather than ideological: how can a child here keep up with a demanding curriculum when there is no specialist teacher within a short drive? Online tutoring answers it. The tutor needs no visa, no train ticket and no petrol; they need a stable connection and a quiet corner.",
        "We are also candid about what we cannot do. We do not register students for exams, and we are not a school. A candidate must be enrolled with an authorised centre; we then work alongside it.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed inside Radhanpur",
        "Ahmedabad is the realistic base for international schooling",
        "Online tutoring supports students registered elsewhere",
        "Always confirm a school's authorisation with the board itself",
      ],
    },
    {
      heading: "How do GSEB, CBSE, IGCSE and IB differ for a Radhanpur student?",
      paragraphs: [
        "The first difference is what the paper rewards. GSEB examinations lean on textbook content and neat recall, and CBSE adds application and competency questions. IGCSE and IB papers reward explanation, calculation shown clearly and the ability to deal with a situation that has not been seen before.",
        "That shift is real, but it is also teachable. A student who has always learned definitions can learn to write a six-mark answer in steps; a student strong at maths but anxious about English can build command-term vocabulary. Most of our early work with a student moving across boards is about habits, not content.",
        "The second difference is destination. A GSEB or CBSE route points naturally to Indian entrance exams and state or central universities. IGCSE followed by IB or A Levels points towards the UK, Canada, Australia, Europe and the United States, while IB Diploma results are also recognised in India through AIU equivalence.",
        "Neither is better in the abstract. If we think a child is better served by staying on the board they know, we say so during the free trial.",
      ],
      table: {
        caption: "Board comparison for a student in Radhanpur",
        columns: ["Board", "What the paper rewards", "Main language", "Where it usually leads"],
        rows: [
          ["GSEB", "Textbook recall and neat presentation", "Gujarati or English", "State universities, Indian entrance exams"],
          ["CBSE", "Concepts with application and competency questions", "English or Hindi", "JEE, NEET, CUET-UG"],
          ["IGCSE", "Structured questions, tiered papers, data handling", "English", "A Levels, IB Diploma, CBSE Class 11"],
          ["IB Diploma", "Analysis, essays, internal assessments", "English", "Global universities, AIU-equivalent in India"],
        ],
      },
    },
    {
      heading: "What drives the cost of IB and IGCSE tuition in Radhanpur?",
      paragraphs: [
        "We do not publish a price list, because the rate depends on the tutor and the course rather than on the town. You receive a written quote before booking, and the first lesson is free.",
        "Three things move the number most. Level is one: IB Physics HL or Mathematics HL needs a more specialised tutor than Class 7 maths. Subject scarcity is another; Psychology or Environmental Systems tutors are fewer than those for maths. Frequency completes the picture, and a student having two sessions a week in the run-up to May will pay for more hours than one meeting fortnightly.",
        "Compared with options near Radhanpur, a batch at a tuition class in Patan costs little because many pupils share one teacher, and it will not teach an IB mark scheme. A private tutor in Ahmedabad costs far more once the family adds travel and lost evenings.",
        "To keep spend predictable we can quote a fixed block of sessions aimed at one weak unit, or share a tutor between two students.",
      ],
    },
    {
      heading: "Online home tuition, coaching classes, local tutors or self-study: which fits?",
      paragraphs: [
        "Each option suits a different kind of student, and most Radhanpur families end up combining two. A coaching class gives structure and company but is built for GSEB or CBSE content. A local private tutor knows the school and the family, but rarely knows IB command terms or the Cambridge mark scheme.",
        "Self-study works well for disciplined students with good past papers, and badly the moment a concept goes wrong with nobody to notice. The most common failure is a student who rereads notes for weeks and never discovers a misunderstanding of a basic idea.",
        "Online home tuition sits in the gap. The tutor knows the specification, answers questions live and can see the working on the shared page, while the student stays in the safety of home.",
        "The table below compares them honestly, including where online tuition is weaker, such as a patchy connection or the lack of a physical lab.",
      ],
      table: {
        caption: "Study options compared for Radhanpur students",
        columns: ["Option", "Strength", "Limit", "Best for"],
        rows: [
          ["Online home tuition (IB Gram)", "Specialist who knows the IB or IGCSE specification, one-to-one", "Needs a stable connection and a quiet space", "Core subjects, exam technique, assessment planning"],
          ["Local coaching class", "Routine, peers, low cost", "Built for GSEB or CBSE, large batches", "Board-aligned practice and discipline"],
          ["Private local tutor", "Familiar with the family and school", "Little knowledge of IB or IGCSE mark schemes", "General homework help in earlier years"],
          ["Self-study", "Flexible and free", "Errors go unnoticed without feedback", "Revision once concepts are secure"],
        ],
      },
    },
    {
      heading: "When are the exams, and how does the Radhanpur year shape study time?",
      paragraphs: [
        "IB Diploma examinations are held in May and November. IGCSE sessions run in May and June and again in October and November, with an extra January window in some Edexcel subjects. A student registered through a school in another city follows that school's calendar for mocks and internal deadlines.",
        "Local life adds its own rhythm. Summers in North Gujarat are severe, with temperatures commonly near 45 degrees in May, and the power cut or the heat of mid-afternoon makes early morning or evening the useful study windows. Uttarayan in mid January pulls the whole family onto rooftops, and Navratri evenings are largely lost to garba.",
        "Diwali holidays bring relatives, guests and a break in routine. The monsoon in July to September is usually the calmer stretch for steady weekly work. Cumin and castor harvests also shape many farming households' calendars in the winter months.",
        "We plan around all of this. A tutor can shift a weekly slot, front-load revision before the festival break or reserve the exam-month evenings for past papers.",
      ],
      table: {
        caption: "Exam and local calendar for Radhanpur students",
        columns: ["Month", "Exam or school event", "Local effect", "Study approach"],
        rows: [
          ["January", "Edexcel IGCSE window for some subjects; Uttarayan", "Rooftop kite days, noise and distraction", "Short sessions, move the slot to early morning on the festival day"],
          ["March to April", "Indian board exams, mock papers, IB exam preparation", "Pleasant weather before summer", "Intensive past-paper work"],
          ["May to June", "IB May session and IGCSE May or June series", "Extreme heat, power interruptions", "Schedule early morning or evening, keep backup power"],
          ["July to September", "New academic year, internal assessment drafting", "Monsoon, steadier routine", "Weekly rhythm, IA planning with feedback"],
          ["October to November", "IGCSE autumn series, IB November session, Navratri and Diwali", "Festival evenings and guests", "Front-load revision before the festivals"],
        ],
      },
    },
    {
      heading: "What do university pathways look like from Radhanpur?",
      paragraphs: [
        "A student finishing the IB Diploma or IGCSE followed by A Levels has two broad directions: study in India or study abroad. The IB Diploma is recognised in India through the Association of Indian Universities equivalence, and many central and private universities admit on IB grades. For central universities, CUET-UG applies to many courses, and IB students should check each programme's current rules.",
        "For engineering and medicine, eligibility needs care. JEE Main and NEET have their own requirements about subjects and board equivalence, and IB students must confirm those with the examination authority before choosing subjects, not after. We help with the academic preparation but do not give admission guarantees.",
        "Abroad, destinations popular with Gujarati families include the UK, Canada, the United States, Australia and, increasingly, Germany and the Netherlands. UK universities read predicted IB points and A Level grades, while American colleges look at the whole profile including SAT or ACT scores where required.",
        "For commerce households, IB Business Management, Economics and Mathematics AI lead naturally to business, finance and accounting degrees.",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences taught online?",
      paragraphs: [
        "Mathematics comes in two forms. Analysis and Approaches suits students who enjoy algebra, calculus and proof, and who may head to engineering, physics or economics. Applications and Interpretation emphasises statistics, modelling and technology, and fits commerce, social science or design pathways. The choice is made before the course begins, so we advise during the trial.",
        "Online lessons use a digital whiteboard where the tutor and student write together. The tutor sees every line of working and can interrupt at the exact step where an error appears, which is more precise than correcting a finished page days later. Students also screen-share graphing calculator work.",
        "In Physics, Chemistry and Biology the heavy lifting is data-based questions, unit discipline and the internal investigation. We coach how to design a method, how to analyse uncertainty and how to structure a report, but the investigation, its data and its write-up remain the student's own work.",
        "Because Radhanpur schools may have limited lab facilities for international-style practicals, we use simulations and video demonstrations to bridge concepts, and encourage safe at-home measurement tasks where possible.",
      ],
      bullets: [
        "Choose AA or AI with a tutor's input before Class 11 begins",
        "Digital whiteboard with live working and corrections",
        "Data-booklet and command-term practice in the sciences",
        "Internal assessments coached, never written for the student",
      ],
    },
    {
      heading: "Core or Extended: how should an IGCSE student choose?",
      paragraphs: [
        "Most IGCSE subjects offer two tiers. Core papers cap the grade at a C or equivalent, while Extended papers open the full A* to G range. A student aiming for IB Diploma Mathematics, Sciences or A Levels should almost always sit Extended in those subjects.",
        "Subject choice is a wider conversation. Many students take five to eight subjects, mixing languages, sciences, humanities and a practical or creative option. For North Gujarat families the combinations we see include Mathematics, Physics, Chemistry, Biology, English, Economics, Accounting and Computer Science.",
        "Cambridge and Pearson Edexcel are the two boards our tutors teach. They are similar in aim and different in the details: paper structure, command words and coursework or practical elements vary by subject. We confirm the board and the syllabus code before planning a single lesson.",
        "A strong IGCSE record gives a student a clear route into IB or A Levels in Ahmedabad or abroad, and a weaker one tells us exactly what to repair before Class 11.",
      ],
    },
  ],

  process: [
    { title: "Write to us", description: "Send the student's class, board, subjects and goals through WhatsApp on +91 7439 368 115 or email support@ibgram.com." },
    { title: "Matched to a tutor", description: "We shortlist a tutor who has taught the exact course, not just the broad subject." },
    { title: "Free trial lesson", description: "A live class on the student's real material, so you can judge teaching style and pace." },
    { title: "Written rate and weekly plan", description: "You receive the rate in writing before anything is booked, along with a fixed slot in IST." },
    { title: "Lessons with notes", description: "Every session ends with a short written summary, and a tutor change is easy if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Specialists for the course itself", description: "Tutors are chosen for IB Maths AA, IGCSE Chemistry or MYP Design, not for a vague label." },
    { title: "Honest about format", description: "We tell Radhanpur families directly that lessons are online and that home visits exist only in Gurugram and parts of Delhi NCR." },
    { title: "No coursework ghost-writing", description: "Tutors coach the thinking behind IAs, essays and projects, and never author them." },
    { title: "Free first lesson", description: "Meet the tutor on real topics before any payment." },
    { title: "Written feedback", description: "A note after each lesson lets parents track what was taught without sitting in." },
    { title: "Change if it is not working", description: "A tutor swap is simple when personality or pace does not suit the student." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE tutors in Radhanpur?", answer: "Yes, online. IB Gram tutors teach Radhanpur students live over video, one to one, across IB PYP, MYP, DP and Cambridge or Edexcel IGCSE. They are based elsewhere in India and teach in IST. Because we found no IB or IGCSE school in the town, online lessons are often the only way to reach a subject specialist without a long drive to Ahmedabad." },
    { question: "Do tutors come to my home in Radhanpur?", answer: "No. In-person home visits run only in Gurugram and parts of Delhi NCR. In Radhanpur, our home tuition is online: your child studies at home on a laptop, with a tutor live on the screen. The lesson is private, the tutor sees the student's working on a shared page, and nobody has to travel." },
    { question: "Is there an IB school in Radhanpur?", answer: "We could not confirm one. The town's schools appear to follow GSEB or CBSE, and we name none as an IB or IGCSE provider. The nearest cluster of confirmed IB and Cambridge schools is in Ahmedabad. If you have been told otherwise, ask the school for its authorisation details and check them on the IB or Cambridge website." },
    { question: "How much does IB or IGCSE tuition cost in Radhanpur?", answer: "We quote privately and in writing, because the price follows the tutor and course, not the town. IB Higher Level sciences cost more than primary-level help, and rare subjects more than common ones. Sessions per week matter as well. The first lesson is free, and you see the rate before any booking." },
    { question: "Can my child take IB or IGCSE while living in Radhanpur?", answer: "Only through an authorised school or exam centre, which usually means enrolling in another city or sitting as a private candidate where the board allows it. We do not register students. Once your child is registered, we provide the subject teaching and exam coaching from home." },
    { question: "Which subjects are most requested?", answer: "Mathematics leads, in both IB AA and AI and in IGCSE Extended, followed by Physics, Chemistry and Biology. Economics, Business Management and Accounting are popular with trading families, and English support is common for students whose schooling so far has been in Gujarati." },
    { question: "Will my child manage if the school was GSEB so far?", answer: "Usually yes with time. The adjustment is from memorising to explaining. We begin with a diagnostic lesson, identify the gaps, and build English subject vocabulary alongside concept work. Expect a term or two of steady effort, not a few weeks." },
    { question: "Do you help with the IA and Extended Essay?", answer: "We coach, we do not write. A tutor can help choose a question, plan a method, discuss analysis and review structure. The text, data and conclusions must be the student's, as the IB requires, and we refuse any request to produce coursework." },
    { question: "Is the internet in Radhanpur reliable enough?", answer: "For most homes, yes. A fibre or good 4G or 5G connection handles video lessons. Keep a phone hotspot as a backup and tell us if there are regular power cuts, so we can pick sensible times. If a session drops, we make up the minutes." },
    { question: "What happens in the free trial?", answer: "It is a real lesson on your child's own topic, usually thirty to forty minutes. You and the student can judge the tutor's clarity and pace. If you want a different style, we try another tutor, and you pay nothing for the trial." },
    { question: "Cambridge or Edexcel IGCSE: which should we choose?", answer: "Usually the school decides, and a private candidate picks the board whose subjects and exam centre are available. Cambridge is more widely taken in India, while Edexcel offers January sessions in some subjects. Tell us what the school uses, and we teach to that specification." },
    { question: "Can IB students from Radhanpur apply to Indian universities?", answer: "Yes. The IB Diploma is recognised in India through AIU equivalence, and many universities accept IB grades. Some courses, such as medicine or engineering through national exams, have extra requirements. Check each programme's rules early; we help with academic preparation only." },
    { question: "When should we start before the exams?", answer: "Ideally six to nine months before a final session, with lighter weekly work before that. For Class 9 and 10 IGCSE students, starting at the beginning of the course is the best way to avoid last-minute panic. A shorter intensive block is possible too." },
    { question: "Do you teach younger children, PYP and MYP?", answer: "Yes. PYP help focuses on reading, writing and number confidence through short, friendly sessions, and MYP support covers subject concepts, criteria-based writing and organising the Personal Project. Younger children usually work in thirty to forty-five minute lessons." },
    { question: "How do I start?", answer: "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com with the class, board, subjects and your goals. We reply with a tutor suggestion and a time for the free lesson. There is no commitment until you have seen a written rate." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Our wider list of Indian cities and how online tutoring works nationwide." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject-level IB tutoring across PYP, MYP and DP." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Pearson Edexcel IGCSE subjects." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "How we support the Diploma Programme." },
    { label: "IB MYP tutoring", href: "/programmes/myp/", description: "Criteria-based support for Years 1 to 5." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI Mathematics in more detail." },
    { label: "Our tutors", href: "/tutors/", description: "Browse tutor profiles and experience." },
    { label: "Contact us", href: "/contact-us/", description: "Book a free trial lesson." },
    { label: "Ahmedabad", href: "/ahmedabad/", description: "The nearest large city with IB and Cambridge schools." },
    { label: "Patan", href: "/patan/", description: "The district headquarters, with its own page." },
    { label: "Palanpur", href: "/palanpur/", description: "A neighbouring North Gujarat town page." },
  ],

  closingHeading: "Start with one free lesson from your Radhanpur home",
  closingBody:
    "Tell us the class, the board and the subjects that worry you most, and we will suggest a tutor and a time. The first lesson costs nothing, the rate comes in writing, and you can write to support@ibgram.com or message +91 7439 368 115 on WhatsApp whenever you are ready.",
};
