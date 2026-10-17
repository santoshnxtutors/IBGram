import type { CitySeoPage } from "../types";

/**
 * Poonch (slug "punch", Jammu and Kashmir). The plan lists the town as "Punch"; the copy uses the standard Poonch
 * spelling and stays strictly non-political. No IB World School or Cambridge / Edexcel IGCSE centre could be
 * confirmed in the district, so stripSchools is empty. schoolClusters reuse the Amritsar and Chandigarh-region
 * schools already confirmed on the Jammu, Kathua and Anantnag pages, labelled as far-off options. Online delivery only.
 */
export const punch: CitySeoPage = {
  slug: "punch",
  countryName: "Poonch",
  countryNameLong: "Poonch, Jammu and Kashmir",
  demonym: "Poonch",
  flagCode: "in",
  countryCode: "IN",
  region: "Jammu and Kashmir, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Daytime slots in the coldest weeks, evenings and weekends otherwise, with lighter plans around Lohri, Eid, Dussehra and Diwali",
  lastUpdated: "2026-09-21",
  state: "Jammu and Kashmir",
  stateCode: "IN-JK",
  geo: { latitude: 33.7703, longitude: 74.0925 },
  alternateNames: ["Punch", "Poonch town", "Poonch district", "Punch Jammu and Kashmir"],
  wikipedia: "https://en.wikipedia.org/wiki/Poonch,_Jammu_and_Kashmir",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Poonch | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutoring for Poonch students: DP, MYP, PYP, Cambridge and Edexcel, live one to one from home, planned around snow and exams. Free trial.",
  h1: "IB and IGCSE Tutors in Poonch: Private Home Tuition, Delivered Online",
  heroEyebrow: "ONLINE IB & IGCSE HOME TUITION FOR POONCH AND THE PIR PANJAL HILLS",
  heroSubtitle:
    "Searching for home tuition in Poonch for an IB or IGCSE student? Nobody from IB Gram drives out to the district, but a subject specialist can teach your child privately on live video, at the study table at home. With no confirmed international school in the district, and snow that can slow hill roads in winter, a screen lesson is often the steadier option.",
  primaryKeyword: "IB and IGCSE tutors in Poonch",
  imageAltText: "Poonch student in a warm room studying IB Biology notes with a tutor on a live video lesson during winter",
  secondaryKeywords: [
    "IB tutor Poonch",
    "IGCSE tutor Poonch",
    "IB home tuition Poonch",
    "IGCSE home tuition Poonch",
    "IB private tuition Poonch",
    "IB Maths tutor Poonch",
    "IGCSE Maths tutor Poonch",
    "IB Physics tutor Poonch",
    "IB Chemistry tutor Poonch",
    "IB Biology tutor Poonch",
    "IB DP tutor Poonch",
    "IB MYP tutor Poonch",
    "IB PYP tutor Poonch",
    "IGCSE online tuition Poonch",
    "IB tutor Punch",
    "IB tutor Punch Jammu and Kashmir",
    "IB tutor Poonch district",
    "IB tutor Mandi Poonch",
    "IB tutor Surankote",
    "IB tutor Mendhar",
    "Cambridge IGCSE tutor Poonch",
    "Edexcel IGCSE tutor Poonch",
    "online IB tutor Jammu and Kashmir",
    "online IGCSE tutor Jammu and Kashmir",
  ],

  heroTrustPoints: [
    "Tutors chosen for the syllabus your child actually sits, such as IB Physics SL or Cambridge IGCSE Biology",
    "Delivery is online in Poonch, and we tell you so before you write to us",
    "Try the first lesson free, then decide whether to accept a written rate",
    "Not connected to the IB, Cambridge, Pearson or any of the schools listed",
  ],
  heroStats: [
    { value: "IB to IGCSE", label: "Both routes covered" },
    { value: "Live video", label: "Teaching at your desk" },
    { value: "IST", label: "Indian time slots" },
    { value: "Free trial", label: "First lesson on us" },
  ],

  intro: {
    heading: "Studying an international syllabus in a Pir Panjal hill town",
    paragraphs: [
      "Poonch sits at roughly 1,021 m in the Pir Panjal hills, at the point where the Poonch river is joined by the Betar Nala. It is the headquarters of Poonch district in the Jammu division of the Union Territory. Winters are cold and snow is quite common in January and February, while summers stay short and mild. NH 144A runs 236 km to Jammu, and the Mughal Road opens a route to the Kashmir Valley in the warmer months.",
      "The district's schools are affiliated to the J&K Board of School Education, CBSE or ICSE, and family conversations move between Pahari, Gojri, Kashmiri, Dogri, Urdu, Hindi and English. Our checks did not turn up an IB World School, or a Cambridge or Edexcel centre, anywhere in Poonch, so no local school is named here. Parents searching for IB and IGCSE tutors in Poonch usually find that specialist teaching of these courses is thin on the ground, and live online lessons fill that gap.",
      "Home tuition deserves a precise definition. Tutors from IB Gram go into students' homes only in Gurugram and some areas of Delhi NCR, so nobody will arrive at a door in Poonch. The alternative we offer is online home tuition: a private lesson, live on video, taken on a laptop at the family's own table and fitted around school timings, weather and household routine.",
      "IB Gram works independently, with no tie to the IB, Cambridge, Pearson or any school on this page. A tutor explains, questions and marks practice; whatever is submitted for assessment is the student's own.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Tutors who have taught your course, level and exam session",
      "First lesson free; rate confirmed in writing afterwards",
      "A short written summary after each lesson",
      "Online in Poonch, with sessions that can move when the weather turns",
    ],
  },

  programmesIntro:
    "Each stage of the IB continuum can be studied online from Poonch. The entries describe the stage, then say what a tutor adds where no international school is within reach.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme (PYP)",
      ageRange: "Nursery to Class 5 (ages 3 to 11)",
      description:
        "Young learners follow units of inquiry that cross subject lines and end in a student-led Exhibition. Nothing is examined from outside; curiosity and clear expression are the goals.",
      countryNote:
        "In Poonch the most useful support is usually English, spoken and written, built through stories and games in short sessions while the home languages stay strong.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme (MYP)",
      ageRange: "Class 6 to 10 (ages 11 to 16)",
      description:
        "Each subject is judged against published criteria, and a Personal Project closes the stage. Showing how you reached an answer counts as much as the answer.",
      countryNote:
        "Children coming from a JKBOSE or CBSE class often need the assessment language decoded before they can write to it. Tutors help plan the project timeline and do not write any part of it.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme (DP)",
      ageRange: "Class 11 to 12 (ages 16 to 19)",
      description:
        "Students take six subjects plus a core of Theory of Knowledge, an Extended Essay and Creativity, Activity, Service. Papers fall in May or November, and internally assessed work is moderated by the IB.",
      countryNote:
        "With no IB school in the district, a candidate would register elsewhere or enter privately, leaving a weekly online specialist as the main source of subject teaching.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme (CP)",
      ageRange: "Class 11 to 12 (ages 16 to 19)",
      description:
        "A few DP subjects are combined with career-related studies, a reflective project and a language element, for students who want an applied route.",
      countryNote:
        "No school offering CP in or near Poonch is known to us. Tutors help with its academic courses, and we say plainly when another route would suit a student better.",
    },
  ],

  subjectsIntro:
    "The IB Diploma courses below are the ones we can staff for Poonch students. Level and syllabus version are confirmed with the registering school before the first lesson, and support for a home-language course such as Urdu depends on the school offering it.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches (AA)", levels: "SL and HL", description: "Algebra, functions, calculus and proof; the usual base for engineering or science degrees." },
    { name: "Mathematics: Applications and Interpretation (AI)", levels: "SL and HL", description: "Data handling, probability and modelling with a calculator, for commerce and social science routes." },
    { name: "Physics", levels: "SL and HL", description: "From mechanics to atomic physics, with steady practice in reading data and handling units." },
    { name: "Chemistry", levels: "SL and HL", description: "Particle models, energy changes, equilibrium and organic mechanisms, with calculations laid out cleanly." },
    { name: "Biology", levels: "SL and HL", description: "Cells to ecosystems, with mountain and river habitats as worked examples." },
    { name: "Environmental Systems and Societies (ESS)", levels: "SL", description: "Climate, water and land use, illustrated by Himalayan foothill cases." },
    { name: "Geography", levels: "SL and HL", description: "Hazards, population change and resource security, with landslide and snow examples." },
    { name: "Economics", levels: "SL and HL", description: "Markets, trade and development, using agriculture-led hill economies as cases." },
    { name: "Business Management", levels: "SL and HL", description: "How small firms market, finance and organise themselves, taught through case studies." },
    { name: "English A (Language and Literature)", levels: "SL and HL", description: "Analysing texts and writing about them, for students whose home languages include Pahari, Gojri, Kashmiri or Urdu." },
    { name: "English B", levels: "SL and HL", description: "Building academic English and exam technique from a solid working base." },
    { name: "Hindi (A or B)", levels: "SL and HL", description: "Reading, composition and speaking in Hindi, either as a first or as an additional language." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, code and network ideas." },
    { name: "Psychology", levels: "SL and HL", description: "Research methods and the major approaches, with timed essay practice." },
    { name: "Theory of Knowledge (TOK)", levels: "Core", description: "Discussion of how we know what we know; the assessed essay stays the student's." },
  ],
  igcseSubjectsIntro:
    "IGCSE papers are sat in the May to June and October to November series, and some Edexcel subjects add January. Here are the courses we can staff for students in Poonch.",
  igcseSubjects: [
    { name: "Mathematics, Cambridge 0580 or Edexcel 4MA1", levels: "Core and Extended, or Foundation and Higher", description: "Number, algebra, shape and data, drilled on timed papers." },
    { name: "Additional Mathematics", levels: "Single tier", description: "Harder algebra and calculus, a bridge towards IB Maths AA or a Class 11 science stream." },
    { name: "Physics", levels: "Core and Extended", description: "Motion, heat, waves and circuits, plus the practical-skills questions." },
    { name: "Chemistry", levels: "Core and Extended", description: "Particles, reactions, the periodic table and organic basics, with calculation practice." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, transport, inheritance and ecosystems." },
    { name: "Geography", levels: "Single tier", description: "Mountains, rivers, hazards and settlement, with map skills." },
    { name: "Economics", levels: "Single tier", description: "How prices, trade and government policy work." },
    { name: "Business Studies", levels: "Single tier", description: "Running a firm: marketing, operations, finance and people." },
    { name: "English as a First Language", levels: "Single tier", description: "Writing for different audiences, plus summary and comprehension." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "All four skills, for students who use other languages at home." },
    { name: "Computer Science", levels: "Single tier", description: "Pseudocode, programming and data representation." },
    { name: "Hindi as a Second Language", levels: "Single tier", description: "Where the board and series permit it; the code is checked first." },
  ],

  regionsTitle: "Poonch town, district tehsils and the areas we teach online",
  tutorsIntro:
    "These tutors teach from elsewhere in India on live video, so a Poonch student never has to cross a pass or wait for a road to clear. Profiles list the IB stages and IGCSE boards each tutor has taught, and the free first lesson doubles as a meeting.",
  regionsIntro:
    "All teaching is online, so any student in Poonch district with a working connection can join. The entries below list places in and around the district, each with a short note on weather, travel or connectivity.",
  regions: [
    { name: "Poonch town", note: "The district headquarters on the Poonch river, at about 1,021 m. In the coldest weeks lessons move to the brighter, warmer hours of the day." },
    { name: "Haveli", note: "The tehsil that surrounds the headquarters. School distances are shortest here, though winter weather can still slow the roads." },
    { name: "Mandi", note: "A town and tehsil famous for the Budha Amarnath temple; the Chhadi Yatra in August fills the roads, so that week stays clear of lessons." },
    { name: "Surankote", note: "A town on the route towards the Mughal Road, where snow or a landslide can cut travel, exactly when a screen lesson is useful." },
    { name: "Mendhar", note: "A tehsil town with hill villages spread around it; connection quality is tested during the trial lesson." },
    { name: "Balakote", note: "A tehsil where hill roads slow any regular commute, so a lesson at home saves real time." },
    { name: "Mankote", note: "A smaller tehsil with few specialist teachers within reach, where a remote tutor widens the choice." },
    { name: "Mughal Road corridor", note: "The high road to the Kashmir Valley, normally shut by snow in winter, which matters for families who travel to Srinagar for courses." },
    { name: "Jammu", note: "The divisional capital, 236 km down NH 144A, which families often visit for admissions and coaching." },
  ],

  schoolClusters: [
    {
      city: "Poonch and the district",
      note: "Schools follow the J&K board, CBSE or ICSE. No IB or Cambridge school could be confirmed anywhere in the district, so none is named.",
      schools: [],
    },
    {
      city: "Jammu and Srinagar",
      note: "Neither city yielded a confirmed IB or Cambridge school in our checks, so we name none. Jammu alone lies 236 km from Poonch by road.",
      schools: [],
    },
    {
      city: "Far off: Amritsar",
      note: "The nearest confirmed schools we know of are in Punjab, well beyond Jammu. For a Poonch family this means boarding or relocating, never commuting.",
      schools: ["Invictus International School, Amritsar", "International Fateh Academy, Amritsar"],
    },
    {
      city: "Far off: Chandigarh region",
      note: "Two more confirmed options lie near Chandigarh, further still. They matter mostly to families who are already planning a move.",
      schools: ["Strawberry Fields High School, Chandigarh", "Oakridge International School, Mohali"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is independent and has no relationship with the IB, Cambridge, Pearson or any school on this page. A school appears only when a public source links it to an international programme, and every family should check current details with the school itself.",

  modesIntro:
    "No tutor travels to Poonch, so all three formats are delivered on live video. They differ in group size and in the point of the year where each is most useful.",
  modes: [
    {
      title: "Private lessons at the family table",
      description: "One student, one specialist, a shared whiteboard and a laptop at home. Tutors go to students' homes only in Gurugram and parts of Delhi NCR, so nobody visits houses in Poonch.",
      bullets: ["Fixed weekly slot in IST", "Shared board and worksheets", "A few lines of notes afterwards"],
    },
    {
      title: "Snow-season and pre-exam blocks",
      description: "Extra sessions for the snow months, or an intensive run before the May and November IB sessions or an IGCSE series, with timed papers and marked corrections.",
      bullets: ["Extra slots when school is shut", "Marked practice papers", "A gap list for parents"],
    },
    {
      title: "Two students, one tutor",
      description: "Two students on the same course and level share a tutor and split the fee, and either can return to a private lesson later.",
      bullets: ["Same course and level", "Fee split in writing", "Easy to switch back"],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or Cambridge school anywhere near Poonch?",
      paragraphs: [
        "Not that we can confirm. Our checks turned up no IB World School and no Cambridge or Edexcel centre in Poonch district, and none confirmed in Jammu or Srinagar either, which is why this page shows an empty school strip. A blank is more honest than a wrong name. Schools in the district are affiliated to the J&K board, CBSE or ICSE. If you know of an international programme running anywhere in the Union Territory, write to us and we will verify it before we mention it.",
        "The nearest schools we can confirm are a long way off and well beyond Jammu: Invictus International School and International Fateh Academy in Amritsar, and in the Chandigarh region Strawberry Fields High School and Oakridge International School in Mohali. Jammu itself is 236 km from Poonch by road, so these are options for boarding or relocation, never for a daily journey.",
        "Families that weigh an international course usually have a reason beyond the syllabus itself: a planned move, relatives working outside the Union Territory, or a child's wish to study overseas. The district has many households in government service, teaching, health care, trade and farming, and most of them keep the child in a local school while an online tutor covers the international material.",
        "Before relying on any school name, check it against the IB and Cambridge directories, which change from year to year. A private IGCSE candidate must sit papers at an authorised exam centre, so a trip to a bigger city is part of the plan, and the entry deadline falls months before the exam. Winter roads in the Pir Panjal make it wise to book such travel early.",
      ],
      bullets: [
        "Nothing IB or Cambridge confirmed in Poonch district",
        "Closest confirmed schools: Amritsar, then Chandigarh and Mohali",
        "Private candidates need an authorised centre in a larger city",
        "Verify every school on the official IB and Cambridge lists",
      ],
    },
    {
      heading: "How do JKBOSE, CBSE, ICSE, IGCSE and IB compare for a Poonch student?",
      paragraphs: [
        "The five routes ask different things of a student. JKBOSE examinations lean on the prescribed books, CBSE adds application through NCERT, and ICSE wants fuller answers in polished English. IGCSE and the IB go a step further: they set a graph, a data table or a scenario nobody has seen before and expect reasoning laid out in clear, organised English. Students used to recalling a page meet that change straight away, which is why the first term matters.",
        "Poonch is multilingual. Pahari, Gojri, Kashmiri, Dogri and Urdu are all heard at home, with Hindi and English at school. That is a strength, yet academic English is something learned in practice, and the written papers reward it. Weekly tutoring concentrates on paragraph planning, command terms and subject vocabulary. Short, regular writing tasks help more than an occasional long session.",
        "For NEET or JEE, staying with CBSE or the J&K board and adding coaching is normally the simpler route, and we say so to families who ask. For study abroad or a broad degree, IGCSE followed by the Diploma or A Levels is a closer match. Neither path is better in itself; it depends on where the student wants to study and whether the family could relocate.",
        "It is easier to switch early. Starting IGCSE in Class 9 allows two years to adapt, whereas the Diploma in Class 11 expects the international style of writing to be second nature. A handful of diagnostic lessons shows how much bridging is needed, and the decision can then follow the facts.",
      ],
      table: {
        caption: "Routes a Poonch family may compare",
        columns: ["Route", "Language of teaching", "Marks go to", "Usual next step"],
        rows: [
          ["J&K Board (JKBOSE)", "English, Hindi or Urdu", "Accurate recall of set textbooks", "NEET, CUET-UG, local degree colleges"],
          ["CBSE", "English or Hindi", "Understanding and application", "JEE, NEET, CUET-UG"],
          ["ICSE and ISC", "English", "Detailed, fluent written answers", "Universities in India and a few overseas"],
          ["Cambridge or Edexcel IGCSE", "English", "Reasoning set out on data", "A Levels, IB Diploma or another Class 11 route"],
          ["IB Diploma", "English", "Examinations plus internal assessment", "Universities across India and abroad"],
        ],
      },
    },
    {
      heading: "What pushes the price of IB and IGCSE tuition up or down in Poonch?",
      paragraphs: [
        "No rate card appears on this page, because the price follows the tutor and the course, not the map. Once the free first lesson is over, you get a written rate, and no payment is taken until you agree to it. Whichever provider of IB and IGCSE tutors in Poonch you approach, ask for that figure in writing along with any minimum booking.",
        "Four factors do most of the work. A Higher Level course costs more to teach than Class 7 science. A rare subject, such as Psychology, ESS or Computer Science HL, has fewer qualified tutors than Mathematics. More weekly hours raise the total. And the closer the exam, the more preparation each hour needs, so a pre-exam block is priced differently from a quiet term.",
        "A neighbourhood tuition class costs less, yet it prepares students for the local board. For an international course the realistic alternatives are a long trip to Jammu, 236 km away, or a move. An online lesson removes the road, which in winter can be shut for days.",
        "When money is tight, tell us at the start. A block of about ten lessons on one weak topic, a shared lesson with a classmate, or a lighter load in calm months and a heavier one before mocks will all keep the bill down. A smaller plan you can finish beats a large one that stops.",
      ],
      bullets: [
        "Course level and subject rarity set the rate",
        "Weekly hours and exam closeness change the total",
        "A written rate arrives after the free first lesson",
        "Short blocks and shared lessons reduce cost",
      ],
    },
    {
      heading: "How do online lessons compare with local coaching, private tutors and self-study?",
      paragraphs: [
        "An international syllabus brings one practical problem: finding someone who has actually taught these papers. In Poonch district that person is rarely next door, so IB and IGCSE tutors in Poonch are in practice online tutors, and online lessons are how a student reaches them. Local coaching and private tutors stay valuable for JKBOSE or CBSE subjects, but they work to different exams and different mark schemes.",
        "The map matters. Roads in the district wind through the Pir Panjal hills, and snow can interrupt them, yet a video lesson needs only electricity and a signal. An hour that might have gone on a slow journey can go on learning, and a missed connection is fixed by rebooking the slot.",
        "Working alone with past papers can carry a determined Class 10 student through IGCSE Mathematics. In the Diploma it is riskier, since internal assessments and fine differences between command terms call for feedback that a mark scheme cannot give. The danger is not lack of effort but an unnoticed misunderstanding repeated for months.",
        "Most families mix routes: local coaching for state or CBSE subjects, online lessons for the international ones. Watch the total load, though. A tired student learns less, and a steady weekly rhythm with enough sleep usually outperforms a crowded timetable before exams.",
      ],
      table: {
        caption: "Study routes for a student in Poonch",
        columns: ["Route", "What it offers", "Where it stops", "Suits"],
        rows: [
          ["Online one-to-one with IB Gram", "A tutor who has taught the exact course", "Depends on power and signal", "DP, MYP and IGCSE candidates"],
          ["Coaching class", "Routine, classmates and a modest fee", "Aimed at board and entrance exams", "JKBOSE or CBSE subjects alongside"],
          ["Nearby private tutor", "Personal attention, face to face", "Seldom trained on IB or IGCSE marking", "Younger children and homework"],
          ["Self-study with past papers", "Free and at your own pace", "Nobody marks the answers", "Confident IGCSE Maths students"],
        ],
      },
    },
    {
      heading: "How do snow, monsoon rain and festivals affect the exam year in Poonch?",
      paragraphs: [
        "Snow is quite common in January and February. The coldest weeks can bring school closures, slower roads and the odd power cut, so winter plans stay flexible: extra lessons while school is shut, and a move to daylight hours when evenings are too cold. With the IB May session and IGCSE summer papers still months off, winter is the season to finish new content.",
        "Summers are short and mild, so the May papers are not a heat problem as they are on the plains. Monsoon rain from July to September can set off landslides and block hill roads, and the Mughal Road is usually closed in the snow months and reopened in spring. Video lessons feel none of this beyond power and signal.",
        "The calendar is full: Lohri in January, Baisakhi in April, Eid with dates that move each year, the Chhadi Yatra to Budha Amarnath at Mandi in August, Dussehra and Diwali in October and November, and Guru Nanak Jayanti soon after. Families of every community can tell us which dates matter to them, and the timetable will work around them.",
        "November candidates should finish new content by August and use October for mocks. May candidates should finish by December or early January, ahead of the heaviest snow, and spend the cold months on timed papers indoors. School examinations need a lighter tutoring load, agreed in advance, not after a hectic fortnight.",
      ],
      table: {
        caption: "A year plan for Poonch students",
        columns: ["Months", "What Poonch is like", "What to study"],
        rows: [
          ["January to March", "Cold, with snow in January and February; school exams", "Finish content for May candidates; indoor timed papers"],
          ["April to June", "A mild spring and brief summer; IB May and IGCSE summer papers", "Final revision and past papers"],
          ["July to September", "Monsoon rain and landslide risk; Chhadi Yatra in August", "New topics, with spare slots on wet days"],
          ["October to November", "Dussehra, Diwali, Guru Nanak Jayanti; IB November and IGCSE autumn papers", "Mocks before the festivals, gentle work during them"],
          ["December", "Cold sets in; winter break", "Repair weak topics, plan internal assessments, shortlist universities"],
        ],
      },
    },
    {
      heading: "Where do Poonch students go after IB or IGCSE?",
      paragraphs: [
        "Indian universities recognise the IB Diploma through the Association of Indian Universities, which matches it to the Class 12 certificate. After that, every university sets its own subject and score conditions, and CUET-UG, JEE Main and NEET each issue separate rules for international-board candidates. Read the current bulletin, and check whether seats inside the Union Territory carry extra eligibility conditions, such as residence.",
        "Inside Jammu and Kashmir the familiar names are the University of Jammu, IIT Jammu, IIM Jammu, AIIMS Jammu, the Central University of Jammu, SKUAST-Jammu and Shri Mata Vaishno Devi University at Katra. In the Valley, the University of Kashmir, NIT Srinagar and the Central University of Kashmir complete the list. Many students build their first shortlist from these.",
        "Beyond the Union Territory, Delhi University, campuses around Chandigarh, and colleges in Pune and Bengaluru all draw students from the region. Study abroad usually means the UK, Canada, Singapore or the US, with predicted grades, English-language results and deadlines a year ahead. The earlier a family names a destination, the more options stay open.",
        "An IGCSE is not a school-leaving certificate in India, so an IGCSE student must still pick a route for Classes 11 and 12: the IB Diploma, A Levels or another board. The decisive choice therefore comes in Class 9 or 10. Tutors can explain how each route works, but the applications and the decision remain with the family.",
      ],
      bullets: [
        "IB Diploma matched to Class 12 by the AIU",
        "CUET-UG, JEE Main and NEET issue separate rules annually",
        "After IGCSE: A Levels, the IB Diploma or another Class 11 route",
        "Seats inside the Union Territory may carry residence conditions",
      ],
    },
    {
      heading: "How demanding are IB Mathematics and the three sciences?",
      paragraphs: [
        "Two Mathematics courses exist, and neither is the lighter one. Analysis and Approaches is for students who enjoy algebra, functions and proof, and who expect to study engineering, mathematics or physical science. Applications and Interpretation favours data, modelling and technology, and suits business, geography, psychology or design. Each includes a mathematical exploration marked by the school, so choose with the intended degree in mind.",
        "Physics, Chemistry and Biology follow one pattern: compulsory topics, further topics, written papers, and a scientific investigation. Physics rewards clean units and a method for unfamiliar problems. Chemistry rewards practice with moles, equilibria and mechanisms. Biology rewards exact terms and concise use of evidence. A weekly lesson spreads the load across two years.",
        "A hill district supplies examples for every science. Ecology can draw on the forests and river valleys around Poonch, Geography on landslides and snowfall, and Physics on cold and altitude when discussing thermal energy and pressure. A student who can picture an idea recalls it more easily when the paper is in front of them.",
        "Not every school has a fully equipped laboratory, yet the internal investigation still needs a sound method. Online tutors show how to choose a question, control variables, handle uncertainty and present results, while the experiment and the report stay entirely the student's own.",
      ],
    },
    {
      heading: "How do Core, Extended, Foundation and Higher tiers work at IGCSE?",
      paragraphs: [
        "At Cambridge, most sciences and mathematics come as Core or Extended papers: Core caps the grade at C, and Extended reaches A star. Pearson Edexcel splits Mathematics into Foundation and Higher tiers, while its sciences are a single tier graded numerically. A student who might later take IB Mathematics or a science stream should choose Extended or Higher from the beginning.",
        "A typical package runs to six or eight subjects: English, Mathematics, one or two sciences, a second language and a few electives. Geography suits children who live among mountains and rivers, Economics and Business Studies suit those from trading families, and Computer Science fits anyone who enjoys logic. The mix should point toward the Class 11 route planned.",
        "Cambridge and Pearson carry different specification codes, paper layouts and grade scales. Confirm the board and code first, then revise from that board's own past papers and mark schemes. Borrowing papers from the wrong board is one of the easiest ways to lose a month.",
        "A private candidate enters through an authorised exam centre, in Poonch's case in a larger city, with firm deadlines and separate planning for practical components. We can explain the steps and what each paper asks for, but the entry itself and the paperwork belong to the family and the centre.",
      ],
    },
  ],

  process: [
    { title: "Tell us the course", description: "Send the school, course, level, exam month and any worrying topics by WhatsApp or email." },
    { title: "Meet the tutor we propose", description: "You receive a tutor with experience of that exact syllabus, a short profile and some weekly options in IST." },
    { title: "Take the free lesson", description: "Your child works on real material for a whole session, so you judge the teaching itself." },
    { title: "Agree terms on paper", description: "To continue, hours and rate are written down first; nothing is paid before that." },
    { title: "Read the lesson notes", description: "After each session you get a few lines on what was covered and what to practise; changing tutor is easy." },
  ],
  whyPoints: [
    { title: "Matched by syllabus", description: "Pairing follows the exact paper, say IB Chemistry SL or Edexcel IGCSE Mathematics, not just the subject label." },
    { title: "Straight about delivery", description: "Lessons in Poonch are live on video; in-person teaching is reserved for Gurugram and parts of Delhi NCR." },
    { title: "Coaching, never ghost-writing", description: "IAs, Extended Essays, TOK essays and coursework stay the student's work; tutors explain and mark practice only." },
    { title: "Made for winter", description: "Sessions can be shifted, doubled up or moved to daylight when snow or cold upsets the week." },
    { title: "Indian time and calendar", description: "Tutors teach in IST and know school terms, board exams and the festival weeks of the region." },
    { title: "Notes for parents", description: "Each lesson's content reaches you in writing, without needing to sit in." },
  ],

  faqs: [
    { question: "Can I find an IB or IGCSE tutor in Poonch?", answer: "Yes, through live online lessons. For IB and IGCSE tutors in Poonch, we match a tutor based elsewhere in India to your child's course, level and exam session, and the teaching happens over video. No tutor comes to Poonch in person. Share the subject and the sitting, and we propose a tutor with a free trial slot in Indian time." },
    { question: "Will a tutor visit my home in Poonch?", answer: "No. Door-to-door teaching is limited to Gurugram and parts of Delhi NCR. Home tuition in Poonch means your child takes a private lesson at the family desk, with video and a shared whiteboard. There is no road to cross and no lesson lost to a closed pass." },
    { question: "Is there an IB or Cambridge school in Poonch?", answer: "We could not confirm one in the district, or in Jammu or Srinagar. Schools locally are affiliated to the J&K board, CBSE or ICSE, and the nearest confirmed international schools are in Amritsar and the Chandigarh region. Check any school on the official IB and Cambridge lists, since approvals change." },
    { question: "How much does IB or IGCSE tuition cost in Poonch?", answer: "No prices are published, because the rate follows the tutor, the course level, the rarity of the subject and the weekly hours. A written rate comes after the free first lesson. If you mention a budget, we can propose a short block, a shared lesson or a lighter weekly plan." },
    { question: "Can lessons continue when snow closes schools and roads?", answer: "Yes, provided there is power and a signal. Snow is quite common in January and February, and a closed road does not stop a video lesson. We can add sessions while school is shut and shift lessons to daylight when evenings are too cold." },
    { question: "What if the internet drops during a lesson?", answer: "We rebook the session without penalty when the drop was not your choice. Audio, camera and screen sharing are tested in the free lesson, and we suggest a backup such as a second SIM or a hotspot. A wired broadband line, where available, is steadier than mobile data." },
    { question: "Which IB subjects can your tutors teach?", answer: "The list covers Mathematics in both forms, Physics, Chemistry, Biology, Economics, Business Management, ESS, Geography, English A and B, Hindi, Computer Science and Psychology, and we also support MYP and PYP. Tell us the level and session first; we confirm that a suitable tutor is free before we propose a timetable." },
    { question: "Can my child sit IGCSE as a private candidate from Poonch?", answer: "Usually, yes, but only at an exam centre that Cambridge or Pearson has authorised, which means a trip to a larger city. Entry closes months before the papers, and practical components need separate arrangements. We handle the teaching; the registration sits with you and the centre." },
    { question: "Will you write my child's IA or Extended Essay?", answer: "No. Assessed pieces such as the IA, Extended Essay, TOK essay and coursework must be the student's own. We help a student read the criteria, pick a workable question, plan the time and see what examiners reward, and we mark practice pieces, but we never draft or edit anything that is handed in." },
    { question: "How is the IB Diploma treated by Indian universities?", answer: "Generally well: the Association of Indian Universities treats a completed Diploma as equivalent to Class 12. Each university then applies its own subject and score conditions, and CUET-UG, JEE Main and NEET issue separate rules each cycle. Check the latest notice for your chosen course, and send us any wording you find unclear." },
    { question: "Can a JKBOSE or CBSE student add IB or IGCSE lessons?", answer: "Yes, next to school, with the international exams entered privately. Two syllabuses at once are demanding, so the timetable is built around school examinations and protects sleep. Meeting the international question style in Class 9 or 10 makes a later Diploma far less of a shock." },
    { question: "My child speaks Pahari or Gojri at home. Is English a problem?", answer: "It is a skill to build, not a barrier. Tutors set short written tasks every week, teach command terms and subject vocabulary, and mark the results. Children raised with several languages often adapt well once the exam style is explained, and their written English improves steadily." },
    { question: "Should my child take IGCSE before the IB Diploma?", answer: "It is a popular order, though not a rule. IGCSE covers Classes 9 and 10 and trains structured English answers, and the Diploma covers Classes 11 and 12. A Levels or CBSE Class 11 are alternatives. With none offered locally, the choice often follows where the exams can be arranged." },
    { question: "How long does tutor matching take?", answer: "Usually two to four working days once we have the course, level and your free hours. Mathematics and sciences are quickest; rarer subjects take longer. If no tutor has real experience of your exact course, you hear that at once, not after a delay." },
    { question: "Is the first lesson free?", answer: "Yes. Your child gets a full session with a proposed tutor on genuine course material, so you see real teaching. Only if you wish to continue do we send a weekly plan and written rate, and nothing is charged beforehand. If the fit is wrong, we suggest another tutor." },
    { question: "How do we start from Poonch?", answer: "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the student's school, course, level and target exam month. A suggested tutor and trial time in IST follow. Asking costs nothing, and continuing is your decision." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How the online IB and IGCSE service works for hill districts and small towns." },
    { label: "Gurgaon home tuition", href: "/gurgaon/", description: "Where tutors do visit homes, in addition to online lessons." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How tutors are selected and which IB courses they cover." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, specifications and exam series in one place." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The six subjects, the core and how the Diploma is assessed." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and where tutoring helps." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-based learning for younger children." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI side by side." },
    { label: "Tutor profiles", href: "/tutors/", description: "Search profiles by subject, level and availability." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Reach us to arrange a tutor and a free first lesson." },
    { label: "IB and IGCSE tutors in Jammu", href: "/jammu/", description: "The divisional capital, 236 km along the highway." },
    { label: "IB and IGCSE tutors in Srinagar", href: "/srinagar/", description: "The Valley's largest city, reached over the Mughal Road in the warmer months." },
    { label: "IB and IGCSE tutors in Kathua", href: "/kath/", description: "Another Jammu-division town served the same way." },
  ],

  closingHeading: "Try a free IB or IGCSE lesson at home in Poonch",
  closingBody:
    "If you are looking for IB and IGCSE tutors in Poonch, give us the course, level and exam month, and we will look for a tutor who has taught it. The first lesson costs nothing, a written rate follows only if you choose to go on, and no mountain road stands between your child and the lesson. WhatsApp +91 7439 368 115, or write to support@ibgram.com.",
};
