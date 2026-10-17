import type { CitySeoPage } from "../types";

/**
 * /shahabad/ - IB and IGCSE tutoring page for Shahabad in Kalaburagi district, Karnataka (plan
 * rank 473, stateCode IN-KA). This is NOT the Shahabad in Hardoi, Uttar Pradesh, which has its own
 * page at /shahabadc-hardoi/. Online one-to-one only (homeTuition false). No IB or Cambridge/Edexcel
 * school in Shahabad or Kalaburagi could be confirmed, so stripSchools is empty; clusters reuse the
 * Hyderabad and Bengaluru names verified on neighbouring city pages.
 */
export const shahabad: CitySeoPage = {
  slug: "shahabad",
  countryName: "Shahabad",
  countryNameLong: "Shahabad, Kalaburagi district, Karnataka",
  demonym: "Shahabad",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons avoid the worst of the Kalaburagi afternoon heat, the Ugadi, Eid and Dasara weeks, and the hours your child is already in class",
  lastUpdated: "2026-09-21",
  geo: { latitude: 17.1333, longitude: 76.9333 },
  wikipedia: "https://en.wikipedia.org/wiki/Shahabad,_Kalaburagi",
  alternateNames: ["Shahabad Kalaburagi", "Shahabad Gulbarga", "Shahabad Karnataka", "Shahabad Chittapur"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Shahabad | Online Home Tuition",
  metaDescription:
    "Shahabad, Kalaburagi: live online IB and IGCSE tutors for Diploma, MYP, PYP and Cambridge or Edexcel, taught one to one at home, free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Shahabad, Karnataka",
  heroEyebrow: "IB & IGCSE TUITION FOR SHAHABAD IN KALABURAGI DISTRICT",
  heroSubtitle:
    "Shahabad here means the Karnataka town in Kalaburagi district, famous for its limestone and cement belt, not the Shahabad in Uttar Pradesh. Families who want home tuition in Shahabad for an IB or IGCSE student get it online: private, one-to-one, live on a laptop, with a tutor who has taught the exact course, since nobody from IB Gram visits homes in Karnataka.",
  primaryKeyword: "IB and IGCSE tutors in Shahabad",
  imageAltText: "A Shahabad student in Kalaburagi district studying IB Chemistry notes on a laptop with an online tutor during a live lesson",
  secondaryKeywords: [
    "IB tutor Shahabad",
    "IGCSE tutor Shahabad",
    "IB home tuition Shahabad",
    "IGCSE home tuition Shahabad",
    "IB private tuition Shahabad",
    "IB Maths tutor Shahabad",
    "IGCSE Maths tutor Shahabad",
    "IB Physics tutor Shahabad",
    "IB Chemistry tutor Shahabad",
    "IB Biology tutor Shahabad",
    "IB DP tutor Shahabad",
    "IB MYP tutor Shahabad",
    "IB PYP tutor Shahabad",
    "IGCSE online tuition Shahabad",
    "IB tutor Shahabad Kalaburagi",
    "IB tutor Wadi",
    "IGCSE tutor Kalaburagi district",
    "online IB tutor Kalyana Karnataka",
    "IB and IGCSE tutors in Shahabad",
  ],

  heroTrustPoints: [
    "This is Shahabad in Kalaburagi district, Karnataka; lessons are online only",
    "Tutors chosen for the subject, level and exam session, in English",
    "Written note after every lesson for parents",
    "First lesson free; rate confirmed in writing before you book",
    "Switch tutor without fuss if the match is wrong",
  ],
  heroStats: [
    { value: "Karnataka", label: "Kalaburagi district, not Uttar Pradesh" },
    { value: "Online", label: "Live private lessons at home" },
    { value: "Free trial", label: "Try one lesson first" },
    { value: "IST", label: "Indian-time evening slots" },
  ],

  intro: {
    heading: "Limestone country, a railway junction nearby and no international school",
    paragraphs: [
      "Shahabad is a taluk town in Kalaburagi district, set on the Deccan plateau between the Bhima and Kagina rivers. It is best known for Shahabad stone, the limestone slabs once laid on railway platforms across the country, and for the cement works and boiler industry that grew up around the quarries. The fields nearby grow toor dal, jowar, Bengal gram, cotton and sunflower, and the main railway line to Mumbai, Chennai, Bengaluru and Hyderabad runs close by.",
      "Families here are a mix of Kannada, Urdu, Telugu and Hindi speakers, and many households have someone working in the plants, in government service, or in Hyderabad, Pune or the Gulf. The region is part of Kalyana Karnataka, where special education provisions under Article 371(J) apply to local students in state institutions, so most parents think first of KCET, NEET and the PU colleges of Kalaburagi.",
      "The IB and IGCSE come into the picture for a narrower group: a child returning from abroad, a family with a posting that moves, or a student who wants a route to a university outside India. We could not confirm any school in Shahabad that teaches either curriculum, so the lessons happen online. IB Gram supplies a subject specialist, in Indian time, with a free first lesson and a written summary after every session.",
    ],
  },

  programmesIntro:
    "Here is how we approach each of the four IB programmes for a student whose home is in Shahabad or the Kalaburagi countryside.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1 to 5 (ages 6 to 11)",
      description:
        "Learning organised through themes and questions. A tutor keeps a young child moving with short tasks, spoken explanations and number play, then writes up what the child managed alone.",
      countryNote:
        "A PYP child in Shahabad is nearly always a newcomer from a city or a country where the programme was offered. Weekly online help stops the gap widening while the family finds its feet.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6 to 10 (ages 11 to 16)",
      description:
        "Concepts and contexts marked against set criteria. Tutors unpack each descriptor, show how a response climbs from one band to the next and help with the personal project timetable.",
      countryNote:
        "MYP students connected with Kalaburagi often come from Karnataka state board or CBSE, where marks out of a hundred rule. The early weeks teach them to write for criteria instead.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11 to 12 (ages 16 to 19)",
      description:
        "Six subjects, theory of knowledge, an extended essay and service hours. Tutors teach syllabus content and exam method, and they keep away from the assessed pieces themselves.",
      countryNote:
        "A Shahabad DP student is usually enrolled through a school in Hyderabad or Bengaluru, or through an online provider, and lives at home in between. A tutor on video covers what the classroom cannot.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11 to 12 (ages 16 to 19)",
      description:
        "A short list of DP courses combined with a career-focused strand and a reflective project. Tutors help with the academic courses and with balancing them against the practical work.",
      countryNote:
        "Hardly anyone in this district takes the CP, so enquiries concern single DP courses within it, most often Mathematics or Business Management.",
    },
  ],

  subjectsIntro:
    "These IB subjects appear most in enquiries from the Shahabad area. If your course is not shown, write to us with its name and level and we will check who is free.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "Standard or Higher Level", description: "Algebra, calculus and proof for engineering-minded students, with timed Paper 2 practice." },
    { name: "Mathematics: Applications and Interpretation", levels: "Standard or Higher Level", description: "Data, probability and modelling for students aiming at commerce, medicine or economics." },
    { name: "Physics", levels: "Standard or Higher Level", description: "Mechanics through thermal and atomic physics, plus uncertainty and data-analysis questions." },
    { name: "Chemistry", levels: "Standard or Higher Level", description: "Stoichiometry, bonding and organic chemistry, with limestone, lime and cement chemistry as natural local examples." },
    { name: "Biology", levels: "Standard or Higher Level", description: "Cells to ecosystems, with agricultural topics such as pulses and cotton offering familiar cases." },
    { name: "Geography", levels: "Standard or Higher Level", description: "Resources, urban change and climate, with semi-arid plateau farming as a case study." },
    { name: "Economics", levels: "Standard or Higher Level", description: "Markets, trade and development, with clear diagrams and evaluation." },
    { name: "Business Management", levels: "Standard or Higher Level", description: "Operations and finance cases, relevant to industrial and trading households." },
    { name: "Environmental Systems and Societies", levels: "Standard Level", description: "Water, soils and land use, with drought and quarrying as real-world contexts." },
    { name: "Computer Science", levels: "Standard or Higher Level", description: "Programming, data structures and systems for both theory papers." },
    { name: "History", levels: "Standard or Higher Level", description: "Source evaluation and essay planning for the prescribed topics." },
    { name: "English A: Language and Literature", levels: "Standard or Higher Level", description: "Reading unseen texts closely and writing analytically under time pressure." },
    { name: "English B", levels: "Standard or Higher Level", description: "Language acquisition for students whose daily speech is Kannada, Urdu, Telugu or Hindi." },
    { name: "Kannada B", levels: "Standard or Higher Level", description: "Reading and writing support for students who take Kannada as a language subject, where the school offers it." },
    { name: "Hindi B", levels: "Standard or Higher Level", description: "Language study in Hindi for students who want it as a second language." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion of knowledge questions and exhibition planning, not the essay itself." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel treat IGCSE differently, so the first job is fixing the syllabus code. These subjects are the ones Shahabad and Kalaburagi families most often raise.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core or Extended tier", description: "Number, algebra, geometry and statistics, with Extended students practising multi-step questions." },
    { name: "Additional Mathematics", levels: "Cambridge", description: "Functions and calculus for students who expect to take IB Mathematics AA or A Level." },
    { name: "Physics", levels: "Core or Extended tier", description: "Forces, electricity, waves and energy, with practical-skills questions treated as a topic of their own." },
    { name: "Chemistry", levels: "Core or Extended tier", description: "Atomic structure, reactions, rates and organic chemistry, including the chemistry of lime." },
    { name: "Biology", levels: "Core or Extended tier", description: "Organisms, inheritance and ecology, with diagram and data questions." },
    { name: "Geography", levels: "Both boards", description: "Physical and human themes with case-study detail for long answers." },
    { name: "English First Language", levels: "Both boards", description: "Composition, directed writing and summary tasks." },
    { name: "English as a Second Language", levels: "Cambridge", description: "Reading, writing, listening and speaking for students from Kannada, Urdu or Telugu homes." },
    { name: "Computer Science", levels: "Cambridge", description: "Pseudocode, logic and programming practice." },
    { name: "Economics", levels: "Both boards", description: "Data response and structured questions with exact definitions." },
    { name: "Business Studies", levels: "Cambridge", description: "Case questions with cost and profit calculations." },
    { name: "Urdu as a Second Language", levels: "Cambridge", description: "Reading and writing support for students from Urdu-speaking families, subject to tutor availability." },
  ],

  regionsTitle: "Shahabad and its neighbouring towns we teach",
  regionsIntro:
    "Lessons are live on a laptop, so tutors never need an address. Knowing how the town and its neighbours work helps us pick times that suit shifts, trains and the heat.",
  regions: [
    { name: "Shahabad town centre", note: "The market and bus stand area. Schools finish in mid-afternoon, so weekday sessions generally run from 5 pm or later." },
    { name: "Railway station side", note: "The area around Shahabad station on the main line. Families with a parent who travels by train to Kalaburagi or Hyderabad prefer late evening slots." },
    { name: "Cement works colonies", note: "Company housing near the plants, where parents may work rotating shifts. Weekend and late-evening slots give both parents a chance to sit in." },
    { name: "Stone quarry belt", note: "Settlements near the limestone quarries, where school transport is limited and online lessons avoid a dusty road." },
    { name: "Wadi", note: "The nearby railway junction town, well known for its cement industry. Some families here work for the plants or the railway." },
    { name: "Chittapur", note: "A neighbouring taluk town, with students who compare options in Shahabad and Kalaburagi." },
    { name: "Kalaburagi city", note: "The district headquarters, roughly thirty kilometres away, home to Gulbarga University and the PU colleges many Shahabad students aim for." },
    { name: "Bhima river villages", note: "Farming villages where school choices are narrow and mobile data can be uneven, so a hotspot backup is wise." },
    { name: "Kagina belt", note: "Rural settlements near the Kagina river, where harvest season can pull students out of class." },
    { name: "Yadgir side", note: "Families from the neighbouring Yadgir district, whose children sometimes study in Shahabad and look to Hyderabad for further options." },
  ],

  schoolClusters: [
    {
      city: "Shahabad and Kalaburagi district",
      note: "Our checks found no IB World School and no Cambridge or Edexcel centre in Shahabad or Kalaburagi district, so no school is listed. Local options follow the Karnataka state syllabus or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Hyderabad",
      note: "Roughly 170 kilometres north-east by road or rail, Hyderabad has the nearest confirmed IB and Cambridge schools and is where many Kalyana Karnataka families look.",
      schools: ["Oakridge International School", "CHIREC International School", "International School of Hyderabad", "The Gaudium School"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "A long journey south, but the largest concentration of international schools in Karnataka, relevant for families thinking of boarding.",
      schools: ["Stonehill International School", "Inventure Academy", "Indus International School, Bengaluru"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent service and has no tie to the IBO, Cambridge, Pearson or any school on this page. Names appear only so you can see the wider region. Verify programmes and admission rules with each school.",

  modesIntro:
    "No tutor visits a home in Shahabad, because in-person tuition is given only in Gurugram and parts of Delhi NCR. A family here picks from three online formats.",
  modes: [
    {
      title: "Weekly one-to-one lesson",
      description:
        "An hour with the same tutor each week, for one subject, through the academic year.",
      bullets: [
        "Fixed slot after school",
        "Whiteboard and screen-shared past papers",
        "A short note after every lesson",
        "Pauses during harvest or festivals on request",
      ],
    },
    {
      title: "Exam-run intensive",
      description:
        "Extra lessons in the weeks before mocks and the May and November sessions.",
      bullets: [
        "Timed papers and marked feedback",
        "Command-word and mark-scheme practice",
        "A weekly list of topics to revisit",
        "Tapers off after the last paper",
      ],
    },
    {
      title: "English-medium bridge",
      description:
        "A short block for a student moving from Kannada, Urdu or Telugu-medium teaching into an English-language IB or IGCSE course.",
      bullets: [
        "A first lesson that finds vocabulary gaps",
        "Subject terms built from the student's own notes",
        "Short written answers with careful feedback",
        "Then a move to weekly lessons",
      ],
    },
  ],

  sections: [
    {
      heading: "Which Shahabad is this page about, and what schools are nearby?",
      paragraphs: [
        "This page is for Shahabad in Kalaburagi district, Karnataka. A second Shahabad in Hardoi district, Uttar Pradesh, has its own separate page on this site, so if you live there, please use that one instead. Keeping them apart matters because the boards, the climate and the nearest cities are entirely different.",
        "In Kalaburagi district we could not confirm an IB World School or a Cambridge or Edexcel centre, and we do not want to name one that we cannot stand behind. Schools in the taluk follow the Karnataka state board or CBSE, and the PU colleges of Kalaburagi draw many students after Class 10.",
        "The nearest confirmed cluster of international schools is in Hyderabad, with a larger group in Bengaluru. Both are long journeys, so they matter mainly for families who consider boarding or relocation.",
        "For most Shahabad students who follow the IB or IGCSE, the course comes through an online provider or a distant school. The missing element is a teacher who can explain the syllabus patiently and in detail, and live video lessons supply it.",
      ],
    },
    {
      heading: "How does Karnataka's SSLC and PU system compare with the IB and IGCSE?",
      paragraphs: [
        "Karnataka students sit the SSLC at Class 10 and the second PU exam at Class 12, and entry to most state professional courses runs through KCET or NEET. The IB and IGCSE sit outside that chain, so a family must understand what changes before switching.",
        "The table sets the main routes side by side. It is a rough guide, since each school adds its own calendar and rules.",
        "The content in a good IB or IGCSE course is comparable in weight to PU, but the marking rewards different things. A state-board student often excels at recall and calculation, yet loses marks by not explaining reasoning or by skipping units and working. Tutors spend the first weeks fixing exactly that.",
        "Kalyana Karnataka families should also ask about reserved seats under Article 371(J). Whether an IB or IGCSE student can use them depends on the current rules and on the institution, so check with the authority concerned before assuming anything.",
      ],
      table: {
        caption: "Board routes open to a Shahabad family",
        columns: ["Route", "How it is assessed", "Who usually takes it", "Main exit path"],
        rows: [
          ["Karnataka SSLC and II PU", "State board papers with textbook-based questions", "Most local students", "KCET, NEET, state colleges"],
          ["CBSE", "National board exams with case-based questions", "Families expecting transfers", "JEE Main, NEET, CUET-UG"],
          ["IGCSE (Cambridge or Edexcel)", "Externally marked structured and practical papers", "Online students or those at a city school", "IB Diploma, A Level, study abroad"],
          ["IB Diploma", "Six subjects plus TOK, EE and CAS", "Families with overseas or metro plans", "Universities abroad, AIU-recognised Indian entry"],
        ],
      },
    },
    {
      heading: "What do IB and IGCSE lessons cost for a student in Shahabad?",
      paragraphs: [
        "There is no fixed price list. IB Gram gives every family a rate in writing before booking, because the amount of teaching varies far more than a single number could capture.",
        "The level of the course matters first. An IB Physics HL tutor carries a heavier load of preparation than an IGCSE Core English tutor, and the rate follows. Less common subjects, such as a language at HL, draw on a smaller pool of tutors.",
        "Then comes intensity. A single weekly hour through the year is one plan, and three short sessions a week for eight weeks before an exam is another. Shahabad families often start with the first and scale up before mocks.",
        "Finally, experience counts. A tutor who has taught the same course to many candidates may be priced differently from a newer colleague. No travel enters the calculation because everything is online, and the free first lesson lets you judge before paying.",
      ],
      bullets: [
        "The course, level and subject",
        "Number and length of weekly lessons",
        "The tutor's experience with that syllabus",
        "A year-long plan or a short exam push",
        "How rare the subject combination is",
      ],
    },
    {
      heading: "Should a Shahabad student use online lessons, a Kalaburagi centre or a nearby tutor?",
      paragraphs: [
        "Kalaburagi has a solid tuition culture built around KCET, NEET and the PU syllabus. That is exactly why an IB Chemistry HL or IGCSE Additional Mathematics student may struggle to find a teacher there who has met the papers.",
        "Travelling into Kalaburagi also costs time. A student from Shahabad faces a road or rail trip of perhaps thirty kilometres each way, and a hot one in summer. Online one-to-one lessons remove the trip and give the student a tutor chosen for the course.",
        "A nearby private tutor helps with younger children and foundations, while self-study suits disciplined older students with good notes. Neither provides marked feedback on written answers in IB style.",
        "The table lines up the options. Many families mix two, for instance an online tutor for the hardest subject and self-study for the rest.",
      ],
      table: {
        caption: "Support options for a Shahabad IB or IGCSE student",
        columns: ["Option", "Helps with", "Falls short on", "Verdict"],
        rows: [
          ["Online one-to-one", "Specialist tutor, no travel, written notes", "Needs reliable power and internet", "Strong for depth in HL, SL and IGCSE"],
          ["Kalaburagi coaching centre", "Structure, peer group", "Built for KCET, NEET and PU syllabuses", "Weak for international papers"],
          ["Nearby private tutor", "Convenience and personal attention", "May not know international mark schemes", "Fair for foundations"],
          ["Self-study", "Flexibility at low cost", "No feedback on written work", "Good as a top-up"],
        ],
      },
    },
    {
      heading: "How do summer heat, harvest and festivals shape the year in Shahabad?",
      paragraphs: [
        "Kalaburagi district is among the hottest parts of Karnataka. Temperatures pass forty degrees in April and May, which overlaps with the May exam session, and the monsoon is modest, arriving in June. Evening power cuts in the hot months can disturb online lessons.",
        "Farming sets another rhythm. Toor, cotton and jowar harvests pull families into fields, and some students help at home for a few weeks. Ugadi in spring, Eid, Muharram, Dasara and Diwali each take a few days, and the Urs at Kalaburagi's dargah draws visitors from across the region.",
        "IB exams run in May and November, and IGCSE papers in the same months plus October and November for some boards. A student's school decides which session applies, so we confirm it before planning.",
        "We therefore schedule early-morning or late-evening sessions in the hottest weeks, plan mocks early, and keep a reserve make-up slot. A sample year is in the table below.",
      ],
      table: {
        caption: "A sample Shahabad study year",
        columns: ["Months", "Academic focus", "Local factor", "Our plan"],
        rows: [
          ["June to August", "New units and gap-finding", "Monsoon arrives, sowing season", "Set weekly slots"],
          ["September to October", "Term tests and first mocks", "Dasara holidays", "Lessons before and after the break"],
          ["November", "IB and IGCSE November series", "Diwali and harvest", "Targeted past-paper sessions"],
          ["December to February", "Mocks and Internal Assessment drafts", "Cooler weather, good study weeks", "Steady weekly progress"],
          ["March to May", "Final revision and the May series", "Ugadi, then extreme heat and power cuts", "Morning or late evening papers"],
        ],
      },
    },
    {
      heading: "Where can a Shahabad student go after the IB or IGCSE?",
      paragraphs: [
        "An IB Diploma holder may apply to Indian universities, since the Association of Indian Universities recognises the Diploma as equivalent to Class 12. CUET-UG accepts candidates from all boards and opens many central universities.",
        "For medicine and engineering, students must read the current NEET, JEE Main and KCET rules. IB and IGCSE students sometimes need equivalence certificates and specific subject combinations, and Karnataka's own rules for state quota seats can differ from national ones.",
        "Many Kalyana Karnataka students aim for Hyderabad, Bengaluru, Pune or Mumbai for study, and others look to the United Kingdom, Canada, Australia or the Gulf. IB points and IGCSE grades, with predicted grades from the school, feed into those applications.",
        "Tutors do not pick a university for a student and never promise admission. They raise the subject grades that keep each route open.",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences taught online for a Shahabad student?",
      paragraphs: [
        "IB Mathematics gives a choice between Analysis and Approaches, rich in algebra and calculus, and Applications and Interpretation, stronger on data and modelling. Each comes at two levels, and the choice shapes which degrees stay open.",
        "Students from Karnataka's PU system are fast with numbers. They need help presenting reasoning, using technology where permitted and managing time across papers, so tutors make those habits the focus of early lessons.",
        "In the sciences the lesson rhythm alternates between content and practice. One half of an hour might cover electrochemistry, the other a timed data question marked live on screen.",
        "Practical work is harder at a distance. Tutors coach planning, recording and evaluation from the student's own lab records and never do or write the assessed Internal Assessment.",
      ],
      bullets: [
        "Mathematics AA: calculus, vectors, series and proof",
        "Mathematics AI: statistics, finance and modelling",
        "Physics: mechanics, waves, electricity and nuclear physics",
        "Chemistry: energetics, redox, equilibrium and organic chemistry",
        "Biology: genetics, physiology, ecology and data analysis",
      ],
    },
    {
      heading: "Which IGCSE tier and subjects should a Shahabad student choose?",
      paragraphs: [
        "Core papers cap the top grade, while Extended papers allow the full range. A student planning the IB Diploma or A Level should sit Extended in Mathematics and the sciences, because later courses assume that depth.",
        "Choice of subjects follows the aim. Engineering needs Mathematics, Physics and Chemistry, plus Additional Mathematics where offered. Medicine adds Biology, and commerce adds Economics, Business Studies or Computer Science. Languages can widen the profile, and Urdu or Hindi suit some families.",
        "Cambridge and Edexcel cover similar content in different paper layouts. We check the code first and train only on that board's past papers.",
        "A standard course lasts two years, and one weekly lesson in each of two or three subjects is typical, with extra sessions before exams. Students who join late can use the English-medium bridge block.",
      ],
    },
  ],

  process: [
    { title: "Write with your child's details", description: "Message the class, board, programme, subject, level and exam session on WhatsApp or by email." },
    { title: "See a suggested tutor", description: "We send the profile of a teacher who has handled that course, with open evening slots." },
    { title: "Try the free lesson", description: "A live video session on a real topic from your child's own syllabus, at no charge." },
    { title: "Confirm cost in writing", description: "The rate, lesson length and weekly plan are sent to you before any paid lesson." },
    { title: "Settle into weekly lessons", description: "A short note follows every session, and a fresh tutor is available whenever you ask." },
  ],

  whyPoints: [
    { title: "A specialist for the exact course", description: "Your child works with someone who has taught that subject and level, not a general maths or science teacher." },
    { title: "Indian-time scheduling", description: "Tutors are in India and teach on IST, so lessons fit after school without late-night calls." },
    { title: "Clear about what we are", description: "We say plainly that no tutor visits homes in Shahabad, and that in-person lessons exist only in Gurugram and parts of Delhi NCR." },
    { title: "Guidance without ghost-writing", description: "Tutors explain, question and give feedback, but never author an IA, Extended Essay, TOK essay or coursework." },
    { title: "Progress parents can read", description: "A brief written summary after each lesson helps families who work shifts or live apart." },
    { title: "Low-risk beginning", description: "The first lesson is free, the rate comes in writing and changing tutor costs nothing." },
  ],

  tutorsIntro:
    "These tutors teach online from elsewhere in India on IST. Each profile shows the subjects and levels taught, so a Shahabad family can see who is closest to the course.",

  faqs: [
    {
      question: "Is this page for Shahabad in Karnataka or Shahabad in Hardoi?",
      answer: "It is for Shahabad in Kalaburagi district, Karnataka. There is another Shahabad in Hardoi district, Uttar Pradesh, and that town has its own page on this site. The two are hundreds of kilometres apart, with different boards, weather and nearby cities, so we keep the advice separate. If you are in the Hardoi Shahabad, please open that page instead.",
    },
    {
      question: "Can my child get IB or IGCSE home tuition in Shahabad?",
      answer: "Yes, online. A tutor teaches live on video while your child sits at home with a laptop, one to one. Nobody from IB Gram travels to Shahabad, because visits are offered only in Gurugram and parts of Delhi NCR. The tutor is chosen for the subject and level, and the first lesson is free. For a taluk town with no confirmed international school, this is the workable route.",
    },
    {
      question: "Are there any IB or Cambridge schools in Shahabad or Kalaburagi?",
      answer: "We could not confirm any. Our checks found no IB World School and no Cambridge or Edexcel centre in Shahabad or Kalaburagi district. The closest verified schools on this page are in Hyderabad and Bengaluru. If you know of a local one, send its name and we will verify it. Until then, families usually choose boarding, relocation or an online programme.",
    },
    {
      question: "How much do lessons cost in Shahabad?",
      answer: "We give a written quote instead of a public price list. The figure depends on the course and level, the subject, how many lessons you want each week and the tutor's experience with your syllabus. There is no travel charge because lessons are online. Send the subject and level on WhatsApp for a quote. The first lesson costs nothing, so you can decide with real evidence.",
    },
    {
      question: "Our child studied in Kannada medium. Can the IB or IGCSE still work?",
      answer: "It can, with preparation. Exams and teaching are in English, so a Kannada-medium student needs subject vocabulary and practice writing full answers. The tutor builds that from the student's own notes, rehearses explanations aloud, then moves to short written answers. Mathematics usually transfers with little trouble. Most students are comfortable within a term or two.",
    },
    {
      question: "Does Article 371(J) apply to IB or IGCSE students?",
      answer: "We cannot say, and it would be wrong to guess. Article 371(J) gives local candidates in Kalyana Karnataka special provisions in state institutions, but who qualifies depends on current rules and on each institution. An IB or IGCSE student should ask the admitting authority in writing and keep the reply. Our tutors teach the subject and cannot advise on quota eligibility.",
    },
    {
      question: "Do tutors write IAs, Extended Essays or TOK essays?",
      answer: "No. A tutor coaches but the student writes. Expect explanations of the criteria, questions that sharpen a research idea and comments on a draft the student has produced. Expect no sentences written for the student, no rewritten paragraphs and no data supplied. Crossing that line would risk the student's results, so we decline even when asked.",
    },
    {
      question: "Which IGCSE boards can you teach?",
      answer: "Cambridge International and Pearson Edexcel. Their papers differ, so we begin by noting the syllabus code, such as Cambridge 0610 Biology or Edexcel 4BI1, and practise on matching past papers. Not sure which applies to your child? The entry confirmation, the textbook cover or the school office will tell you, and a photograph is enough for us.",
    },
    {
      question: "What time of day are lessons held?",
      answer: "Mostly weekday evenings after school and across weekends, in Indian Standard Time. Since tutors are in India, there are no overnight sessions. In the hottest weeks of April and May we can move to early morning or late evening, and around harvest or a festival we can pause or shift. The slot is fixed before the first paid lesson.",
    },
    {
      question: "How do we manage heat, power cuts and weak signal?",
      answer: "Plan for them. Keep the laptop charged, use a phone hotspot as a backup and choose the cooler part of the day. If a power cut ends a lesson, we reschedule at no cost and send the notes so nothing is lost. In exam months a short catch-up session can be added. Villages along the Bhima may have patchier data, so the hotspot matters most there.",
    },
    {
      question: "How do KCET, NEET, JEE and CUET-UG work for IB and IGCSE students?",
      answer: "Each exam has its own conditions, and they change, so read the current official notice. The Association of Indian Universities treats the IB Diploma as equivalent to Class 12, and CUET-UG accepts all boards. NEET, JEE Main and KCET set subject and mark requirements, and KCET may also ask for domicile or equivalence papers. We teach the subject and make no promises about ranks.",
    },
    {
      question: "Can you teach IB PYP and MYP to a child in Shahabad?",
      answer: "Yes. PYP lessons use short, practical tasks in reading, number and inquiry for Classes 1 to 5, while MYP lessons cover subjects from Class 6 to 10 against criteria. No school nearby runs these programmes, so most pupils are newcomers or online students. A tutor who speaks the programme language makes the change far easier.",
    },
    {
      question: "What if we want to change tutor?",
      answer: "Just ask. Another tutor is offered at no extra cost, with no need to justify the decision at length. A sentence or two about what did not suit, such as pace or manner, helps us choose better. The free first lesson is meant to lower the chance of a mismatch, but the option to switch stays open for the whole course.",
    },
    {
      question: "Will a tutor visit our house in Shahabad or Kalaburagi?",
      answer: "No. IB Gram does not send tutors to homes in Shahabad, Kalaburagi or anywhere in Karnataka. House visits run only in Gurugram and parts of Delhi NCR. In Shahabad, home tuition means private online lessons taken on a laptop at home. We say so early so that no family waits for a visit that will not come.",
    },
    {
      question: "What happens in the free trial lesson, and how do we start?",
      answer: "The trial is a live video lesson of about thirty to forty-five minutes on a real topic from your child's syllabus. The tutor asks where the student struggles, teaches one idea and sets a short task. To begin, message +91 7439 368 115 on WhatsApp or email support@ibgram.com with class, programme, subject and exam session, and we reply within about a day.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "See where IB Gram teaches and how online tuition is arranged." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse IB subject tutors and programme guides." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject guides." },
    { label: "IB Diploma programme", href: "/programmes/dp/", description: "How DP subjects and the core fit together." },
    { label: "IB MYP programme", href: "/programmes/myp/", description: "MYP criteria and the personal project." },
    { label: "IB PYP programme", href: "/programmes/pyp/", description: "Inquiry learning in the primary years." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI at SL and HL." },
    { label: "Tutor profiles", href: "/tutors/", description: "Tutors by subject, level and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write or WhatsApp to arrange a free trial." },
    { label: "IB and IGCSE tutors in Raichur", href: "/raichur/", description: "The page for the Kalyana Karnataka district to the south-west." },
    { label: "IB and IGCSE tutors in Yadgir", href: "/yadgir/", description: "For families in the neighbouring district." },
    { label: "IB and IGCSE tutors in Hyderabad", href: "/hyderabad/", description: "The city with the nearest confirmed IB and Cambridge schools." },
    { label: "IB and IGCSE tutors in Ballari", href: "/ballari/", description: "Our page for another Kalyana Karnataka city." },
  ],

  closingHeading: "A free online lesson for Shahabad students",
  closingBody:
    "Whether your child is Kannada, Urdu or Telugu speaking, following the IB or an IGCSE, the first move is one trial lesson with a tutor who knows that course. Send us the subject, level and exam session, and we will propose a teacher and a time in Indian hours. The trial costs nothing, the rate comes in writing, and another tutor is always possible. WhatsApp +91 7439 368 115 or email support@ibgram.com.",
};
