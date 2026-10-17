import type { CitySeoPage } from "../types";

/**
 * /firozpur/ - IB and IGCSE tutoring page for Firozpur (Ferozepur), Punjab. Online-only:
 * tutors do not visit homes in Firozpur. No IB or IGCSE school in the city is confirmed, so the
 * clusters are honestly labelled Ludhiana, Amritsar and Mohali options.
 */
export const firozpur: CitySeoPage = {
  slug: "firozpur",
  countryName: "Firozpur",
  countryNameLong: "Firozpur, Punjab",
  demonym: "Firozpur",
  state: "Punjab",
  stateCode: "IN-PB",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Timetables bend around winter fog, the Lohri and Baisakhi weeks and the paddy and wheat seasons that shape many households here",
  lastUpdated: "2026-09-21",
  geo: { latitude: 30.9331, longitude: 74.6225 },
  wikipedia: "https://en.wikipedia.org/wiki/Firozpur",
  alternateNames: ["Ferozepur", "Ferozepore", "Firozpur Cantonment"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Firozpur | Online Private Tuition",
  metaDescription:
    "Firozpur (Ferozepur) IB and IGCSE tutors online: one-to-one Maths, Science, English and Punjabi support, fog-season scheduling and a free first lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition for Firozpur (Ferozepur) Students",
  heroEyebrow: "FIROZPUR AND FEROZEPUR IB AND IGCSE TUTORING",
  heroSubtitle:
    "Private tuition at home for an IB or IGCSE student in Firozpur works like this: the tutor teaches live, one to one, on a laptop screen, while your child sits at the family study table. Call it online home tuition. Nobody visits a Firozpur address; in-person home tuition is available only in Gurugram and parts of Delhi NCR. In exchange you pick from tutors across India who teach the exact syllabus, with a written note after every session and a first lesson free of charge.",
  primaryKeyword: "IB and IGCSE tutors in Firozpur",
  imageAltText: "A Firozpur student on a winter evening with a laptop and IGCSE Mathematics workbook, taking a live lesson from a tutor",
  secondaryKeywords: [
    "IB tutor Firozpur",
    "IGCSE tutor Firozpur",
    "IB home tuition Firozpur",
    "IGCSE home tuition Firozpur",
    "IB private tuition Firozpur",
    "IB Maths tutor Firozpur",
    "IGCSE Maths tutor Firozpur",
    "IB Physics tutor Firozpur",
    "IB Chemistry tutor Firozpur",
    "IB Biology tutor Firozpur",
    "IB DP tutor Firozpur",
    "IB MYP tutor Firozpur",
    "IB PYP tutor Firozpur",
    "IGCSE online tuition Firozpur",
    "IB tutor Ferozepur",
    "IB tutor Ferozepur Cantt",
    "IGCSE tutor Mall Road Firozpur",
    "online IB tuition Punjab border district",
    "IB tutor Basti Tanka Wali Firozpur",
  ],

  heroTrustPoints: [
    "Tutors are shortlisted by the exact syllabus code and tier, not by postcode",
    "Firozpur lessons are online; home visits are confined to Gurugram and parts of Delhi NCR",
    "One free lesson before any decision or payment",
    "Independent of every school, board and exam body named on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB coverage" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards" },
    { value: "IST", label: "Same time zone" },
    { value: "Free first lesson", label: "No obligation" },
  ],

  intro: {
    heading: "A border district where international curricula arrive from elsewhere",
    paragraphs: [
      "Firozpur sits on the Sutlej, a short drive from the Pakistan border and the memorial at Hussainiwala. It is an old army town with a large cantonment, and it is also the site of the Saragarhi Gurdwara, raised in memory of the twenty-one Sikh soldiers of the 36th Sikhs who fell at Saragarhi in 1897. Families here carry strong ties to the armed forces, to farming and to trade, and to relatives abroad. What they do not currently have, as far as we could verify, is an IB or Cambridge school inside the city.",
      "So the question we hear is rarely which local school to pick. It tends to be one of these. A defence-family child is moving to a posting where the school is IB. A student boards in Mohali or Ludhiana and wants extra help in the holidays. A family with relatives in Canada, the UK or Australia wants an international qualification for their child. Or a student wants to sit IGCSE papers privately.",
      "For each of these, IB Gram provides a live online tutor, one student per lesson, timed in Indian Standard Time. Home visits from tutors are not part of what we do in Firozpur, and we would prefer you knew that up front. They exist only in Gurugram and parts of Delhi NCR.",
      "IB Gram is independent of the IB, Cambridge, Pearson and any school named here.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "A transdisciplinary primary course that starts from questions rather than chapters. Tutoring for this age is light and playful: reading aloud, number talk and finishing exhibition-style projects with the child doing the thinking.",
      countryNote:
        "In Firozpur, PYP interest usually comes from a parent who has seen it in a posting city and wants a younger child to keep pace.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Five years of connected subjects marked against criteria, with a personal project at the end. Tutors help decode criteria and shape answers to them.",
      countryNote:
        "A Punjab board student stepping into MYP needs a bridge in written explanation more than in maths or science content.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects with TOK, the Extended Essay and CAS, examined in May and November. Tutors deal with content, past-paper technique and time management.",
      countryNote:
        "Most Firozpur DP students board in another city or have joined after a posting. Lessons are set for evenings and holidays.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Diploma courses combined with career-related study and a reflective project. Tutors support the academic courses and the reflection.",
      countryNote:
        "CP is little known in the region; queries here mostly come from families comparing several routes after Class 10.",
    },
  ],
  programmesIntro:
    "Since no IB school in Firozpur is confirmed, the four IB stages reach local families through moves, boarding and long-distance planning. Here is how each is approached.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Algebra, functions and calculus for engineers and scientists in the making." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Data, probability and modelling with a graphing calculator." },
    { name: "Physics", levels: "SL and HL", description: "Kinematics to fields and quantum physics, with unfamiliar-context problems." },
    { name: "Chemistry", levels: "SL and HL", description: "Atomic structure to organic synthesis, with quantitative reasoning." },
    { name: "Biology", levels: "SL and HL", description: "Cells, genetics, ecology and human physiology in exam-ready form." },
    { name: "Economics", levels: "SL and HL", description: "Market analysis and macroeconomic policy with diagrams and evaluation." },
    { name: "Business Management", levels: "SL and HL", description: "Case-study analysis, relevant to Punjab's trading and agri-business families." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming, computational thinking and the case study." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Analysis of texts and the oral, for students who think in Punjabi or Hindi at home." },
    { name: "Punjabi A", levels: "SL and HL", description: "Literature in Punjabi, for students who want their home language recognised." },
    { name: "Hindi B", levels: "SL and HL", description: "Language acquisition for reading, writing and speaking." },
    { name: "Global Politics", levels: "SL and HL", description: "Concepts, cases and argument structure for a subject that suits border-region students." },
    { name: "Geography", levels: "SL and HL", description: "Human and physical geography with case-study evaluation." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion practice on knowledge questions and the exhibition." },
  ],
  subjectsIntro:
    "Firozpur students most often ask for Mathematics, the sciences and English, followed by Economics and Business. Punjabi and Hindi are available for language courses.",
  igcseSubjectsIntro:
    "Because IGCSE subjects are examined individually, a Firozpur student can start with the subject that worries the family most and add others later.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core and Extended", description: "Number, algebra, geometry and statistics, with advice on tier before entry." },
    { name: "Additional Mathematics", levels: "Extended", description: "Calculus and functions for students heading to A Level or IB Mathematics." },
    { name: "Physics", levels: "Core and Extended", description: "Mechanics, electricity, thermal physics and alternative-to-practical papers." },
    { name: "Chemistry", levels: "Core and Extended", description: "Stoichiometry, energetics and organic chemistry with worked calculations." },
    { name: "Biology", levels: "Core and Extended", description: "Structure and function, inheritance and ecology, taught for accurate written answers." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Reading, writing and speaking practice for students whose home language is Punjabi." },
    { name: "Computer Science", levels: "Core", description: "Programming and theory to the exam board's pseudocode style." },
    { name: "Accounting", levels: "Core", description: "Ledgers, statements and ratio analysis, a natural fit for business families." },
    { name: "Economics", levels: "Core", description: "Concepts, data response and short essays." },
    { name: "Punjabi and Hindi as second languages", levels: "Core", description: "Reading and writing practice for candidates who offer them." },
  ],

  regionsTitle: "Parts of Firozpur our students study from",
  regionsIntro:
    "Lessons happen on a screen, so the locality only matters for timing and connectivity. These are the areas families mention, and what tends to matter in each.",
  regions: [
    { name: "Firozpur Cantonment", note: "The army-dominated side of the city, home to families used to transfers and to school changes between states." },
    { name: "Mall Road", note: "A central commercial spine where many professional and business families live within reach of the older schools." },
    { name: "Basti Tanka Wali", note: "A long-settled residential quarter of the city, with dense housing and evening study often done indoors." },
    { name: "Zira Gate", note: "One of the older gate areas of the walled city, with shopkeeping households and joint families." },
    { name: "Makhu Gate", note: "Another older-city neighbourhood, where parents value fixed timetables for school and tuition." },
    { name: "Delhi Gate", note: "The side of the city towards the railway station, with a mix of railway, trade and service families." },
    { name: "Ferozepur City", note: "The main civilian town beside the Cantonment, with government employees and local traders." },
    { name: "Moga Road side", note: "The road towards Moga and Ludhiana, used by families who plan boarding or higher study in those directions." },
  ],
  schoolClusters: [
    {
      city: "Firozpur itself",
      note: "We could not confirm an IB or Cambridge school in Firozpur. City schools follow the Punjab School Education Board, CBSE or ICSE. If a local school begins IB or IGCSE, we will verify and list it.",
      schools: [],
    },
    {
      city: "Nearby: Ludhiana",
      note: "Punjab's biggest city, and the closest large education centre for many Malwa families.",
      schools: ["Britannica International School", "Harvest International School"],
    },
    {
      city: "Nearby: Amritsar",
      note: "A shorter journey than many expect, reached by road, and home to a couple of international campuses.",
      schools: ["Invictus International School", "International Fateh Academy"],
    },
    {
      city: "Nearby: Mohali",
      note: "The Chandigarh tricity belt, where boarders and relocating families often settle.",
      schools: ["Oakridge International School, Mohali"],
    },
  ],
  schoolDisclaimer:
    "These schools are mentioned only to describe the region. IB Gram has no partnership, sponsorship or endorsement arrangement with any of them, the IB, Cambridge or Pearson, and a mention is not a recommendation.",

  modesIntro:
    "Firozpur students can use IB Gram in three ways, always online.",
  modes: [
    {
      title: "A weekly slot for one subject",
      description: "Same tutor, same day, same hour, with homework set and marked between sessions.",
      bullets: ["Reliable routine", "Timed around school or hostel schedule", "Note after each lesson"],
    },
    {
      title: "Boarder holiday intensives",
      description: "For students who live in a hostel elsewhere and come home for winter and summer breaks, a compact run of lessons to consolidate learning.",
      bullets: ["Planned before the break begins", "Focus on the hardest topics", "Fast feedback on practice papers"],
    },
    {
      title: "Private candidate course",
      description: "A full-syllabus IGCSE course for a student sitting papers without a classroom.",
      bullets: ["Whole specification taught in order", "Board and tier advice", "Guidance on exam centres and deadlines"],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Firozpur or must families look elsewhere?",
      paragraphs: [
        "We could not confirm an IB or Cambridge school inside Firozpur, so the honest answer is that families look elsewhere. The city's schools follow the Punjab board, CBSE or ICSE, and the international campuses that Malwa parents consider are in Ludhiana, Amritsar and the Mohali-Chandigarh belt, each a few hours away.",
        "That is why so much of the enquiry here is about support rather than enrolment. A defence family may be transferring out of the cantonment to a station where the school is IB. A child may be boarding at an international school in Mohali and returning home for winter. Another family may have relatives in Canada and want their child to hold a qualification that travels.",
        "In every case a tutor's first job is to establish where the child is starting and what syllabus they face. We ask for the subject list, the level and the exam series, and read the official syllabus with the student in the free lesson.",
        "Before you pay any fee to a school that calls itself international, check the IB's list of authorised schools or Cambridge's school locator. The word international in a name is marketing, and it does not prove either curriculum is taught.",
      ],
    },
    {
      heading: "How does the Punjab board compare with CBSE, IGCSE and IB?",
      paragraphs: [
        "Most Firozpur students know the Punjab School Education Board or CBSE. The Punjab board uses PSEB textbooks, with Punjabi taught as a compulsory language, while CBSE offers a national syllabus. IGCSE and IB step away from a single textbook and towards applying ideas.",
        "A student moving into either international route usually finds the content familiar and the questions unfamiliar. Terms like evaluate, justify and to what extent require a structure of point, evidence and judgement, and practising it is what turns a knowledgeable student into a high scorer.",
        "The comparison below sets out the practical differences.",
      ],
      table: {
        caption: "Boards a Firozpur family may weigh",
        columns: ["Board", "Compulsory languages", "Exam style", "Usual route after school"],
        rows: [
          ["Punjab School Education Board", "Punjabi, English", "Textbook-based written papers", "Local colleges, state entrance exams"],
          ["CBSE", "English and Hindi or another language", "National papers with application questions", "JEE, NEET, CUET-UG"],
          ["Cambridge IGCSE", "First or second language choice", "Structured papers, Core or Extended", "A Level, IB Diploma or Indian Class 11"],
          ["Pearson Edexcel IGCSE", "First or second language choice", "Modular-style papers with data questions", "A Level, IB Diploma"],
          ["IB Diploma", "Language A plus a second language", "Papers, internal assessment, Extended Essay", "Indian universities and study abroad"],
        ],
      },
    },
    {
      heading: "What should Firozpur parents expect to pay for IB or IGCSE tutoring?",
      paragraphs: [
        "IB Gram gives no fixed price list. Instead, every rate is written down and sent to you before you book, and only after the free lesson. That approach avoids the false comfort of a single hourly number that ignores the subject and level.",
        "A useful way to think about cost is to separate its drivers. First, level: a Higher Level or Extended paper needs a teacher with more depth. Second, rarity: a tutor for IB Global Politics or IGCSE Accounting is harder to find than one for Mathematics. Third, session shape: ninety minutes twice a week costs more than an hour once a week. Fourth, experience with the specific board.",
        "There is also what you avoid spending. Firozpur families who once considered sending a child to Ludhiana or Chandigarh for weekend coaching spare themselves the bus or train fare, the overnight stay and a lost Saturday.",
        "Whoever you choose, ask for the exact rate in writing, ask how progress will be reported, and ask how a change of tutor works.",
        "It also helps to decide in advance how many hours a week the household can actually protect. A student who attends school until mid-afternoon, does homework, and has family commitments on weekends may only have three or four good study hours outside class, and two of those are better spent on tuition than on a fourth subject squeezed in.",
      ],
      bullets: [
        "Rates depend on level, subject, session length and frequency",
        "Written quote before booking, never after",
        "No travel costs for online lessons",
      ],
    },
    {
      heading: "Is online IB tutoring better than a coaching centre or a private tutor in Firozpur?",
      paragraphs: [
        "It depends on the student's goal. Firozpur has coaching centres focused on PSEB and CBSE subjects, and on entrance exams. They are valuable for those routes. For IB and IGCSE material, the local supply is thin.",
        "An online tutor is chosen for the syllabus and can work in one-to-one mode, adjusting to the student's pace. The trade-offs are real: it needs a working connection and a student willing to prepare between sessions.",
        "In practice many families combine options: a local teacher for the school's regular subjects, and an online IB or IGCSE specialist for the international subjects.",
      ],
      table: {
        caption: "Support options compared for Firozpur students",
        columns: ["Option", "What it does well", "Where it falls short"],
        rows: [
          ["Online one-to-one", "Syllabus-specific teaching with individual feedback", "Depends on internet and student self-discipline"],
          ["Coaching centre", "Structured batches and test series for board and entrance exams", "Seldom covers IB or IGCSE content"],
          ["Local private teacher", "Convenient, familiar and flexible", "Difficult to find IB or IGCSE experience"],
          ["Self-study", "No cost and complete freedom", "No feedback on weak answers"],
        ],
      },
    },
    {
      heading: "How do fog, harvests and festivals shape the study year in Firozpur?",
      paragraphs: [
        "Firozpur's winters are cold and foggy, with mornings that can stay grey until late. Schools sometimes shift timings, and evening online lessons are usually more comfortable than early ones from December to January. Summers are hot, with May and June the heaviest months.",
        "Farming shapes household rhythm across the district. Wheat is harvested in April and paddy in October and November, and families with land often have busy weeks at home. Post-harvest smoke in autumn can make outdoor life unpleasant and keeps children indoors, which suits study.",
        "Festivals add their own gaps: Lohri and Maghi in January, Baisakhi in April, Diwali in autumn and Gurpurab in November. Each brings visitors and travel. We plan the exam-season calendar with the family in advance so that lessons fall around them.",
      ],
      table: {
        caption: "The Firozpur year and its study windows",
        columns: ["Months", "Local pattern", "Study advice"],
        rows: [
          ["December to February", "Fog, Lohri, IGCSE February-March series", "Evening sessions, mock exams"],
          ["March to May", "Wheat harvest and Baisakhi, rising heat, May exams", "Early sessions, past-paper blocks"],
          ["June to August", "Heat, monsoon, new school year", "Foundations and coursework planning"],
          ["September to November", "Paddy harvest, Diwali, November series", "Revision and exam practice"],
        ],
      },
    },
    {
      heading: "Which universities can a Firozpur IB or IGCSE student aim for?",
      paragraphs: [
        "Indian universities recognise the IB Diploma through the Association of Indian Universities, which treats it as equivalent to the senior secondary certificate. Central universities use CUET-UG, so IB students should check subject requirements for their target course.",
        "Engineering and medicine need special attention. JEE Main and NEET-UG carry subject requirements that IB and IGCSE students should verify with the authority before choosing subjects. Punjab's state-quota rules for non-state board candidates are best checked directly with the relevant counselling body.",
        "Many Punjabi families have ties to Canada, the UK and Australia, and those countries read IB and A Level results directly. A student from Firozpur should start planning subjects, predicted grades and any admission tests early, because counselling is less available locally than in a metro.",
        "Our tutors teach subject content and help with test technique, but do not write applications or coursework.",
      ],
      bullets: [
        "AIU equivalence for the IB Diploma in India",
        "CUET-UG for central universities",
        "JEE and NEET subject rules must be verified",
        "Canada, UK and Australia are common study-abroad destinations",
      ],
    },
    {
      heading: "What do IB Mathematics and the sciences ask of a Firozpur student?",
      paragraphs: [
        "IB Mathematics comes in two forms. Analysis and Approaches is algebra, calculus and proof; Applications and Interpretation is statistics, modelling and technology. A student who wants engineering, physics or economics at a top university should look closely at Analysis and Approaches HL.",
        "The Higher Level papers reward steady, weekly practice. A missed topic can undermine the next three, and one-to-one lessons help catch such gaps while they are small.",
        "In the sciences, PSEB and CBSE students tend to arrive with good theory but limited experience of experimental design, uncertainty and data-based questions. Tutors work on these specific skills, along with the calculation habits that the papers reward.",
        "For IGCSE Mathematics, entering Core caps the top grade, so a student who is aiming higher or thinking about IB later should sit Extended. Our tutors give a direct view after reviewing recent work.",
      ],
    },
    {
      heading: "Core or Extended, Cambridge or Edexcel: choosing IGCSE subjects from Firozpur",
      paragraphs: [
        "Start from the goal. A student heading to A Level or IB should take Extended Mathematics and separate sciences. A student who wants a broader qualification with less pressure may do well with a mix of Core subjects.",
        "Cambridge and Pearson Edexcel differ in paper style and exam months, so choose after checking which one the school or exam centre uses. Private candidates must register through an approved centre and meet deadlines that fall months ahead of the exam.",
        "Language options deserve thought. Punjabi or Hindi as a second language can give a dependable grade to students who already speak them.",
        "We suggest using the free lesson for a short planning conversation before the family commits to a subject list.",
        "One more practical point for families in a cantonment city: postings change without much notice. A child who takes Cambridge IGCSE subjects can usually carry the same syllabus to a new station or a new country, while a switch between two state boards means relearning content in a different order. If a transfer is possible in the next two years, that alone is a good reason to lean toward an international syllabus now and to keep one tutor across the move, because online lessons continue from any city with a connection.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Send the subject, level, board and exam series to support@ibgram.com or +91 7439 368 115 on WhatsApp." },
    { title: "Meet the tutor", description: "We name a suitable tutor and offer a slot in IST that suits your evenings." },
    { title: "Attend a trial", description: "One complete lesson, free, with no commitment to continue." },
    { title: "Confirm terms", description: "Should you want to proceed, we put the rate and schedule in writing before any booking." },
    { title: "Learn week by week", description: "Live lessons, a written note after each, and a replacement tutor if the fit is wrong." },
  ],
  whyPoints: [
    { title: "Matching by syllabus", description: "Your child gets someone who teaches that IB course or IGCSE code every year." },
    { title: "Straight talk on visits", description: "No tutor travels to Firozpur; in-person home tuition exists only in Gurugram and parts of Delhi NCR." },
    { title: "Notes for parents", description: "A brief written record follows each session, which suits busy households." },
    { title: "Easy tutor change", description: "If the chemistry between tutor and student is missing, we swap without fuss." },
    { title: "Quotes upfront", description: "You see the rate in writing before any commitment." },
    { title: "Guidance, not ghost-writing", description: "Tutors never write IAs, Extended Essays or TOK essays." },
  ],

  tutorsIntro:
    "Tutors teach from different Indian cities, all in IST. For Firozpur students the match rests on syllabus knowledge and teaching style.",

  faqs: [
    {
      question: "Are IB and IGCSE tutors available in Firozpur?",
      answer:
        "Yes, online. IB Gram places Firozpur students with subject tutors who teach live over video, one to one. Tutors are not based in Firozpur and do not visit, because in-person home tuition is only available in Gurugram and parts of Delhi NCR. Working online widens the choice of specialists, particularly for Higher Level and less common subjects.",
    },
    {
      question: "Can I get home tuition for IB or IGCSE in Ferozepur?",
      answer:
        "You can get online home tuition, meaning a private live lesson taken from your own home. A tutor will not come to your Ferozepur or Firozpur address. The tutor shares a screen, works through problems, marks the student's writing and follows up with a short written note. In-person visits happen only in Gurugram and parts of Delhi NCR.",
    },
    {
      question: "Which IB or IGCSE schools are close to Firozpur?",
      answer:
        "We could not confirm any inside Firozpur. Families usually look at Ludhiana, Amritsar or the Mohali-Chandigarh belt, which are hours away. We list only schools we have verified, and labelled by city. None is a recommendation, and you should check any school's status with the IB or Cambridge before paying fees.",
    },
    {
      question: "How much does IB tuition cost in Firozpur?",
      answer:
        "That depends on the subject, level, length of sessions and how often you meet. We do not publish prices and send a written rate before you book. Higher Level and scarce subjects typically cost more. Online lessons save the fares and time that weekend coaching in Ludhiana or Chandigarh would need.",
    },
    {
      question: "Can my child sit IGCSE as a private candidate from Firozpur?",
      answer:
        "Possibly, through an exam centre that accepts private entries. Cambridge and Pearson Edexcel both allow external candidates, but the centres, fees and deadlines vary, and the deadlines are early. We can teach the syllabus and help plan the timeline, but we do not run exams or register candidates.",
    },
    {
      question: "Will the tutor write my child's IA or Extended Essay?",
      answer:
        "No. Tutors guide and give feedback but do not write or finish Internal Assessments, Extended Essays, TOK essays or other coursework. They explain the assessment criteria, help a student choose a workable topic and comment on structure, so that the work remains the student's own and is safe from misconduct findings.",
    },
    {
      question: "What is the difference between IGCSE and the IB Diploma?",
      answer:
        "IGCSE is a subject-by-subject qualification taken at around 16, offered by Cambridge and Pearson Edexcel. The IB Diploma is a two-year programme for ages 16-19 that pairs six subjects with TOK, the Extended Essay and CAS. Students often take IGCSE first and then A Level or IB. Both can be taught online.",
    },
    {
      question: "Does an Indian university accept the IB Diploma?",
      answer:
        "Broadly yes. The Association of Indian Universities treats the IB Diploma as equivalent to the Indian senior secondary certificate, and many universities take IB students. Specific programmes, especially medicine and engineering, may add conditions. Always confirm with the university and the relevant national or Punjab authority for the year you apply.",
    },
    {
      question: "Can IB or IGCSE students from Punjab take NEET and JEE?",
      answer:
        "Eligibility rests on the subjects studied and the rules of the National Testing Agency, which can change from year to year. Punjab's state counselling has its own conditions for non-state board candidates. Check the current bulletins early, ideally in Class 10 before subjects are chosen, and do not rely on general advice, including ours.",
    },
    {
      question: "When are the IB and IGCSE examinations?",
      answer:
        "IB Diploma exams run in May and November. Cambridge IGCSE has February and March, May and June, and October and November series, and Pearson Edexcel IGCSE has January, May and June, and November series. Availability varies by subject, so confirm with your school or exam centre. We plan lessons backwards from the series you are entering.",
    },
    {
      question: "How do online lessons cope with Firozpur's fog and power cuts?",
      answer:
        "Fog itself does not affect a video call, but it can delay early routines, so evening slots are often easier in December and January. A phone hotspot is a sensible backup for a connection dip. If an outage cancels a session, we reschedule it. Everything the tutor writes appears on a shared whiteboard, so no printing is needed.",
    },
    {
      question: "What is included in the free first lesson?",
      answer:
        "A full lesson with a tutor matched to your child's subject and level, at no cost and with no obligation. The student sees how the tutor teaches and how the platform works. If you carry on, the rate and schedule are confirmed in writing first, and a different tutor is available if you feel the fit is wrong.",
    },
    {
      question: "Which subjects do Firozpur students ask for most?",
      answer:
        "Mathematics is the most common request, followed by Physics, Chemistry, Biology and English. Economics and Business come next, with Computer Science growing. Punjabi and Hindi support is available for language requirements. We match by syllabus code and level and say honestly if an unusual combination will take longer to staff.",
    },
    {
      question: "My child studies under the Punjab board. Can they switch to IB or IGCSE?",
      answer:
        "Yes, with support. Punjab board students generally have solid content knowledge but need practice with command terms, unfamiliar problems and written reasoning. A tutor can teach these directly using model answers and timed questions. Starting a few months before the switch helps the first term feel less abrupt.",
    },
    {
      question: "Can we change the tutor?",
      answer:
        "Yes, and you do not need to explain why. A good match depends on teaching style as well as subject knowledge, and we would rather fix a poor fit early than let a student lose confidence. We will review the schedule and focus with you when we assign a new tutor.",
    },
    {
      question: "How do we start from Firozpur?",
      answer:
        "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the subject, level, board and exam series. We will propose a tutor and a time in IST for the free lesson. If you have the school's syllabus code or subject list, send it too, since it helps us match accurately on the first try.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The national page and list of cities served online." },
    { label: "Ludhiana page", href: "/ludhiana/", description: "Punjab's largest city and its international school context." },
    { label: "Bathinda page", href: "/bathinda/", description: "A nearby Malwa city and how its families use online tutoring." },
    { label: "Amritsar page", href: "/amritsar/", description: "The nearest big city to the north-west." },
    { label: "IB tutors", href: "/ib-tutors/", description: "The subjects and levels our IB tutors teach." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Pearson Edexcel subject support." },
    { label: "Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, subjects and the personal project." },
    { label: "Diploma Programme", href: "/programmes/dp/", description: "How the six subjects and the core fit together." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI courses in detail." },
    { label: "Tutor profiles", href: "/tutors/", description: "The tutors students can be matched with." },
    { label: "Admissions test preparation", href: "/admissions/test-prep/", description: "Support for entrance and admission tests." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book the free lesson." },
  ],
  closingHeading: "Begin with a free lesson from Firozpur",
  closingBody:
    "Send the subject, level and exam series, and a suitable tutor will teach one live lesson at no charge. Whether to continue is then entirely your family's call.",
};
