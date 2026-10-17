import type { CitySeoPage } from "../types";

/**
 * /palampur/ - IB and IGCSE tutoring page for Palampur, Kangra district, Himachal Pradesh. No IB or
 * Cambridge/Edexcel IGCSE school in Palampur could be confirmed (the Cambridge-named schools found
 * are CBSE affiliated), so stripSchools is empty and the clusters point honestly to Chandigarh and Mussoorie.
 */
export const palampur: CitySeoPage = {
  slug: "palampur",
  countryName: "Palampur",
  countryNameLong: "Palampur, Himachal Pradesh",
  demonym: "Palampur",
  state: "Himachal Pradesh",
  stateCode: "IN-HP",
  flagCode: "in",
  countryCode: "IN",
  region: "Himachal Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Timings respect the July and August downpours, cold January mornings, the Navratri and Diwali weeks and tourist-season family workloads",
  lastUpdated: "2026-09-21",
  geo: { latitude: 32.1109, longitude: 76.5363 },
  wikipedia: "https://en.wikipedia.org/wiki/Palampur",
  alternateNames: ["Palampur Kangra", "Palampur HP", "Tea capital of north India"],
  stripSchools: [],

  title: "Palampur IB & IGCSE Tutors | Private Home Tuition Online",
  metaDescription:
    "IB and IGCSE tutors for Palampur in Kangra: live one-to-one home tuition online for DP, MYP, PYP, Cambridge and Edexcel, with a free first lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Palampur",
  heroEyebrow: "ONLINE IB & IGCSE HOME TUITION FOR PALAMPUR, KANGRA VALLEY",
  heroSubtitle:
    "Home tuition in Palampur for an IB or IGCSE course is hard to arrange locally, because even the schools with Cambridge in their names here are CBSE schools. IB Gram offers a different kind of home tuition: a private live lesson by video with a tutor who has taught the exact syllabus, taken from your own house under the Dhauladhar.",
  primaryKeyword: "IB and IGCSE tutors in Palampur",
  imageAltText: "A Palampur student studying IB Physics with an online tutor, the Dhauladhar range visible through the window",
  secondaryKeywords: [
    "IB tutor Palampur",
    "IGCSE tutor Palampur",
    "IB home tuition Palampur",
    "IGCSE home tuition Palampur",
    "IB private tuition Palampur",
    "IB Maths tutor Palampur",
    "IGCSE Maths tutor Palampur",
    "IB Physics tutor Palampur",
    "IB Chemistry tutor Palampur",
    "IB Biology tutor Palampur",
    "IB DP tutor Palampur",
    "IB MYP tutor Palampur",
    "IB PYP tutor Palampur",
    "IGCSE online tuition Palampur",
    "IB tutor Kangra district",
    "IB tutor Palampur Himachal Pradesh",
    "IGCSE tutor Palampur Kangra",
    "online IB tutor Baijnath Palampur",
  ],

  heroTrustPoints: [
    "A tutor who has already taught your child's exact IB or IGCSE course and level",
    "Lessons run online; tutors do not visit Palampur homes",
    "A free trial lesson before any decision",
    "No link to the IB, Cambridge, Pearson or any school named",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "All IB stages" },
    { value: "Cambridge, Edexcel", label: "IGCSE boards" },
    { value: "IST", label: "No time gap" },
    { value: "Free trial", label: "First lesson" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition at home means in a tea town",
    paragraphs: [
      "Palampur sits at about 1,250 metres in the Kangra valley with the Dhauladhar range rising behind the tea estates, and for over a century it has been a town of schools, colleges and research institutes as much as of tea. The agricultural university and the CSIR Himalayan bioresource institute draw scientists and students from all over India. Even so, in our searches we could find no school in Palampur teaching the IB or a Cambridge or Edexcel IGCSE syllabus. The schools with Cambridge in their names that turn up in listings are affiliated to CBSE.",
      "A family in Palampur who wants an international course for their child therefore needs a different answer, and the online private lesson is it. The tutor teaches from another Indian city, your child sits at home with a laptop, and the two work together privately. Tutors do not visit homes in Palampur; the face-to-face home model operates only in Gurugram and parts of Delhi NCR. What the screen provides is a wide choice of teachers by exact syllabus and level.",
      "The families who ask are varied. Scientists and faculty at the university and the institutes, often from other states, with children who studied elsewhere. Hoteliers, tea-estate owners and returned professionals whose own education was abroad. Parents who plan to send a child to a boarding school in Dehradun, Mussoorie or the plains and want the syllabus familiar beforehand. And a number of families with a daughter or son aiming at a foreign university.",
      "IB Gram is independent of the International Baccalaureate, Cambridge, Pearson and every school mentioned here. Our tutors teach and coach; they do not write internal assessments, Extended Essays, Theory of Knowledge essays or coursework for a student.",
    ],
    bullets: [
      "Live one-to-one tuition for IB PYP, MYP, DP and for Cambridge and Edexcel IGCSE",
      "Online only in Palampur; home visits run solely in Gurugram and parts of Delhi NCR",
      "A written summary of each lesson for parents",
      "A change of tutor if the first match is not right",
      "A written quote before you book",
    ],
  },

  programmesIntro:
    "Palampur's schools follow the Himachal Pradesh Board or CBSE. The IB stages below show what a tutor does at each point when the programme is studied at home beside, or ahead of, that route.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Young learners work through inquiry units that cross subject lines, then plan and present their own Exhibition. Reading, number sense and questions come first.",
      countryNote:
        "A PYP request from Palampur typically involves the child of a faculty member or professional who joined from another state, where the child had started the programme.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to Class 10, ages 11-16",
      description:
        "Eight subject groups are graded on published criteria, and the course closes with a Personal Project. Students are asked to explain, justify and reflect.",
      countryNote:
        "Without a local MYP classroom, the tutor translates the criterion descriptors into plain language and works through sample answers at each band.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "Students pick three Higher Level and three Standard Level subjects, add the Extended Essay, TOK and CAS, and earn a score out of 45 plus core points.",
      countryNote:
        "Enquiries from Kangra valley families lean towards medicine, agriculture and life sciences, engineering, hospitality and study abroad.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "A few Diploma courses are combined with a career-related qualification and a reflective project for students with a practical aim.",
      countryNote:
        "No school near Palampur is known to run the CP, so tutoring supports the academic courses inside the programme.",
    },
  ],

  subjectsIntro:
    "Give us the exact course. Biology HL and Biology SL are different journeys, and Analysis and Approaches Mathematics needs a different tutor from Applications and Interpretation.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof for students aiming at engineering or pure science, with the exploration planned well ahead." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling with technology, a match for life sciences, hospitality management and economics." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, fields and waves practised as timed numerical problems, with graph skills for the investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, energetics and organic pathways, with calculations repeated until they are routine." },
    { name: "IB Biology", levels: "HL / SL", description: "Physiology, genetics and ecology, with the exact definitions and command terms that earn marks; a natural fit for an agricultural university town." },
    { name: "IB Environmental Systems & Societies", levels: "HL / SL", description: "Mountain ecosystems, tea farming, water and tourism pressure as local case material." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams with clear explanation, drawing on tourism, tea pricing and horticulture markets." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies that echo hospitality, homestay and small-estate businesses familiar in the valley." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis, essay planning and spoken commentary for students from Hindi-medium backgrounds." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming and databases, with pseudocode written in the exam's format." },
    { name: "IB Psychology", levels: "HL / SL", description: "Key studies and research methods turned into balanced, evaluated responses." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies and data-response practice, with Himalayan hazards and glacial processes at hand." },
    { name: "IB Hindi B", levels: "HL / SL", description: "A strong language option for local students, with text types, grammar and oral practice." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "The tutor talks through knowledge questions and real-life situations; the essay and exhibition belong wholly to the student." },
  ],

  igcseSubjectsIntro:
    "For Palampur families IGCSE is usually a private course taken at home or a preparation for a move to a boarding school. Choose the board first, Cambridge or Pearson Edexcel, then the tier.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra and geometry built through short daily practice and clear worked solutions." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Brings in calculus and functions early, as a bridge to Diploma or A Level Mathematics." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel's question wording and method marking, rehearsed on mixed papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, circuits and waves, with the alternative-to-practical paper treated as its own skill." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atoms, reactions and organic families, with short recall tests." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, plants and heredity, using diagrams the student draws from memory." },
    { name: "IGCSE Combined Science 0653", levels: "Core / Extended", description: "One path through the three sciences for students who are not specialising." },
    { name: "IGCSE Environmental Management 0680", levels: "Grade 9-10", description: "Resources, pollution and sustainability, with mountain and valley examples." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Physical and human geography, with fieldwork ideas from a Himalayan foothill setting." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, trade and government policy, anchored in regional industries such as tourism and tea." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business structures, finance and marketing, practised on short scenarios." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Data representation and algorithm tracing before programming tasks." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "A route to formal English for students whose home languages are Hindi, Pahari or Punjabi." },
  ],

  regionsTitle: "Palampur and the Kangra valley places our online tutors reach",
  regionsIntro:
    "Every lesson is online, so this list is not about tutor travel. It shows how the shape of each place, with its slopes, roads and seasons, influences the best time for a lesson.",
  regions: [
    { name: "Palampur town and Main Bazaar", note: "The commercial centre, where shopkeepers and hoteliers often prefer evening lessons after the day's trade." },
    { name: "Tea estate belt", note: "Households on and around the estates below the Dhauladhar, with views, quiet and sometimes patchy broadband in the monsoon." },
    { name: "CSKHPKV and university campus area", note: "Faculty and research families from different states, with children who may already have followed other boards." },
    { name: "Maranda", note: "The area around the Palampur railway station on the narrow-gauge Kangra Valley line, used for local travel and for tourists." },
    { name: "Bundla and Neugal side", note: "Residential pockets with river and gorge scenery, where steep roads shape the school bus and tuition routine." },
    { name: "Andretta", note: "An artists' village known for pottery and a historic art colony, home to creative families with an interest in broader education." },
    { name: "Baijnath and Paprola", note: "A temple town with an ancient Shiva shrine and a railway stop, with students who often take buses to Palampur for school." },
    { name: "Bir and Billing", note: "Known for paragliding and Tibetan monasteries, a place of hospitality families who may value international education." },
    { name: "Dharamshala and McLeod Ganj", note: "About two hours away, with an international community and Tibetan schools, and strong English-language demand." },
    { name: "Kangra town", note: "The district centre with its fort and temple, and the main route towards Pathankot and Chandigarh." },
  ],

  schoolDisclaimer:
    "No Palampur school is described as an IB or Cambridge/Edexcel IGCSE school, because we could not confirm one. Several local schools carry Cambridge in their names but are CBSE schools. Schools in other cities below are shown only as options some families consider; none has any link with IB Gram.",
  schoolClusters: [
    {
      city: "Palampur and Kangra valley",
      note: "Local schools follow the Himachal Pradesh Board or CBSE. Some use Cambridge as a brand name but are CBSE-affiliated. We found no IB or IGCSE school, so international-course students study at home with an online tutor.",
      schools: [],
    },
    {
      city: "Nearby: Chandigarh and Mohali",
      note: "The Chandigarh region is the closest large city group with IB and Cambridge schools, around four to five hours by road. Some Kangra families consider a move or boarding there.",
      schools: ["Strawberry Fields High School, Sector 26", "Firststeps School, Sector 26", "Oakridge International School, Mohali"],
    },
    {
      city: "Nearby: Mussoorie",
      note: "Woodstock School in Mussoorie is a well-known international boarding option for Himalayan families, and online tutoring suits the school holidays.",
      schools: ["Woodstock School, Mussoorie"],
    },
    {
      city: "Nearby: Shimla, Dharamshala and Pathankot",
      note: "These towns are within a few hours, but we could not confirm an IB or IGCSE school in any of them, so we name none.",
      schools: [],
    },
  ],

  modesIntro:
    "Palampur families usually settle into one of the three patterns below. The lesson is always a live private video call; the schedule and aim differ.",
  modes: [
    {
      title: "Standing weekly tutor",
      description:
        "One teacher, one weekly slot, following the specification in sequence with photographed homework marked between classes.",
      bullets: [
        "For IB, MYP and IGCSE subjects",
        "A digital whiteboard stays on screen",
        "Feedback on every worksheet",
        "A tutor who learns the student's pace",
      ],
    },
    {
      title: "International course beside a board school",
      description:
        "For a student in a Himachal board or CBSE school who studies an IB or IGCSE syllabus in the evenings or at weekends.",
      bullets: [
        "Content follows the international course only",
        "Avoids school terminal examination weeks",
        "A short progress note each month",
        "Prepares for a later boarding or relocation move",
      ],
    },
    {
      title: "Exam-season push",
      description:
        "A compact block of classes before the May or November papers, built around timed papers and correction.",
      bullets: [
        "Marked against examiner mark schemes",
        "Weak topics revisited weekly",
        "Usually begins about five weeks out",
        "Fitted around snow, rain and festivals",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Palampur?",
      paragraphs: [
        "We could not confirm an IB or Cambridge or Edexcel IGCSE school in Palampur. This surprises some parents, because several schools in and around the town have Cambridge in their names. The ones we checked are affiliated to CBSE, which means they follow the Indian national syllabus, not Cambridge International. The name is a brand, not a curriculum, and it is wise to ask a school directly which board it prepares students for.",
        "Palampur has a long record as an education town. The tea industry brought schools and hospitals in the nineteenth century, and the agricultural university and the Himalayan bioresource institute now give the town a population of scientists, teachers and students. That mix means many parents are well informed about curricula, and some have children who studied in an IB or Cambridge school in a metro city before the family moved.",
        "Others plan the opposite journey: a boarding place in Dehradun, Mussoorie or a plains city in a year or two, with the child needing to arrive ready for an IB or IGCSE classroom. For both groups an online tutor is the sensible bridge.",
        "If a genuine IB or Cambridge school opens locally, it will appear in the IB school finder and the Cambridge school directory. We suggest checking those, not trusting a tutoring page, for future claims.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Palampur",
        "Schools with Cambridge in the name are CBSE-affiliated",
        "Families: university and institute staff, hoteliers, returnees, boarding aspirants",
        "Check the IB and Cambridge directories for new authorisations",
      ],
    },
    {
      heading: "HP Board, CBSE, IB or IGCSE: which route fits a Palampur child?",
      paragraphs: [
        "These four are not rivals in a league table. They answer different questions, and in Himachal the practical difference is how each connects to entrance exams and to the colleges of Kangra, Shimla and the plains.",
        "The Himachal Pradesh Board is the widest-used route in the valley and ends with Class 12 exams, from which students go to NEET, JEE, CUET or state-level admissions. CBSE offers a national syllabus and is common in private schools. IGCSE develops applied reasoning in tiered papers, and IB asks for six subjects, a long essay and community service, suiting an all-round student.",
        "For a child staying in Himachal, the state board or CBSE with good coaching is often the shortest road to a seat. An international route makes sense where a boarding move is planned, where an overseas degree is a stated aim, or where the child learns best by explaining.",
      ],
      table: {
        caption: "Four school routes compared for a Palampur family",
        columns: ["Point", "HP Board", "CBSE", "IB", "IGCSE"],
        rows: [
          ["Found in Palampur", "Yes, widely", "Yes, several private schools", "No school found", "No school found"],
          ["How learning is judged", "Written board exams", "Board exams with application", "Exams, coursework and essay", "Tiered external papers"],
          ["Entrance route", "NEET, JEE, CUET, state admissions", "NEET, JEE, CUET", "AIU equivalence, CUET or direct entry", "Class 11 at any board, or A Level"],
          ["Following it from Palampur", "School and coaching", "School and coaching", "Online tutor or relocation", "Online tutor, private entry"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE home tuition cost in Palampur?",
      paragraphs: [
        "There is no price list on this page, and that is deliberate. A written quote follows a short chat about the child, the course and the exam month, and you decide only after seeing it.",
        "Subject and level carry the most weight: Higher Level Chemistry needs a rarer teacher than primary reading. After that come the tutor's record with the exact specification, the number of lessons each week and the shape of the plan, whether a steady year or a concentrated push.",
        "Palampur families also avoid costs that others take for granted. No winding drive to Dharamshala or Chandigarh for a tutor, no rented room for a child sent to the plains, and no premium for a teacher willing to leave a city. The best match is found nationally and arrives on screen.",
        "The first lesson is free and complete, so you see the teaching style and your child's comfort with video before you pay.",
      ],
      bullets: [
        "Level, subject, experience and frequency set the rate",
        "A written quote comes before booking",
        "No travel, rent or hostel costs",
        "The first lesson is free",
      ],
    },
    {
      heading: "Online tutor, coaching centre, local teacher or self-study: what suits Palampur?",
      paragraphs: [
        "Coaching in Palampur and Kangra serves NEET, JEE and board marks, and some students go down to Chandigarh or Kota for it. These classes are not built around Cambridge or IB papers, and a parent who asks about IGCSE Physics will usually hear that the syllabus is not offered.",
        "A local teacher can be excellent at general Science and Mathematics but may never have read an IB subject guide or a Cambridge examiner report. Self-study with past papers works for a few motivated students, though errors persist when nobody marks the work.",
        "An online tutor who has taught your child's exact course comes closest to a school class. The table compares the four options.",
      ],
      table: {
        caption: "Ways to study an international course from Palampur",
        columns: ["Option", "Syllabus knowledge", "Marked to official schemes", "Practical notes"],
        rows: [
          ["Online one-to-one tutor", "Matched on board, subject and level", "Yes", "Laptop and stable broadband needed"],
          ["Coaching centre", "Rarely covers IB or IGCSE", "Not applicable", "Batch timings, steep roads in winter"],
          ["Local private teacher", "Depends on background", "Seldom", "Flexible, small pool"],
          ["Self-study", "From the specification alone", "No", "Free, slow correction"],
        ],
      },
    },
    {
      heading: "How do monsoon rain, winter cold and festivals shape the exam year in Palampur?",
      paragraphs: [
        "The IB Diploma is sat in May and November, and Cambridge and Edexcel IGCSE series run in spring, summer and autumn. Most Indian candidates sit in May. For a Palampur student the last revision weeks fall in a pleasant spring, one of the easier climates in India for exam preparation.",
        "The difficult season is the monsoon. Palampur is one of the wettest places in Himachal, with roughly 2,500 millimetres of rain a year, most of it in July and August. Landslides, road blocks and power cuts are possible, and broadband can fail. January is cold, with temperatures near freezing and snow on the Dhauladhar above the town. Lohri in January, Holi, Navratri, Dussehra and Diwali shape family time, and the tourist seasons in May to June and October keep hotel families busy.",
        "We therefore place the heaviest content teaching in the months before the monsoon, treat July and August as consolidation weeks, and keep a spare slot each week for connection problems.",
      ],
      table: {
        caption: "Year plan for a Palampur student aiming at the May session",
        columns: ["Period", "Study priority", "Local factor"],
        rows: [
          ["June to August", "Begin the course, set routines", "Heavy monsoon rain, possible road blocks and outages"],
          ["September to October", "Core topics, first assessments", "Navratri, Dussehra, autumn tourist season"],
          ["November to January", "Practice papers, internal drafts", "Diwali, cold mornings, Lohri"],
          ["February to March", "Mock exams and correction", "Holi, clear weather, a good study window"],
          ["April to May", "Timed papers and final revision", "Pleasant spring, but summer visitors arrive"],
        ],
      },
    },
    {
      heading: "What can a Palampur student do after IB or IGCSE?",
      paragraphs: [
        "The route depends on the certificate, the subjects and the destination, and the paperwork is easier to understand in Class 11 than in Class 12.",
        "Indian public universities generally ask IB Diploma holders for an equivalence certificate from the Association of Indian Universities, and a growing number of private universities admit directly on IB scores. CUET-UG publishes its rules for international boards each year. IGCSE students usually move into Class 11 at a CBSE, ICSE or IB school, or take A Level.",
        "For medicine and engineering the subject mix matters: NEET-UG needs Physics, Chemistry and Biology, and JEE Main needs Mathematics. Himachal's own admission processes, including those for the state's medical and agricultural colleges, publish rules for non-state-board candidates, so check them each year.",
        "Abroad, the UK uses UCAS, Canada and Australia use mainly direct applications, and the United States uses the Common Application. A student at an agricultural university town may also look at life-science and agricultural degrees overseas. Tutors build the subject strength that all these applications rest on.",
      ],
      bullets: [
        "AIU equivalence for Indian public universities",
        "Check CUET-UG, JEE Main, NEET-UG and Himachal admission notices yearly",
        "UCAS, direct applications and the Common Application abroad",
        "Choose Diploma subjects with the target degree in mind",
      ],
    },
    {
      heading: "How do IB Biology, Chemistry and Mathematics lessons work on video?",
      paragraphs: [
        "A shared digital whiteboard stands in for the classroom board. The tutor writes, the student works on paper beside the laptop, and at the end a photograph of the page goes back so that handwriting and layout can be corrected along with the answer.",
        "Diploma Mathematics comes in two courses. Analysis and Approaches suits students who like algebra and calculus and may read engineering or physics. Applications and Interpretation turns towards statistics and modelling and suits life sciences, hospitality management and economics. We talk through the intended degree before the choice is locked.",
        "In the sciences the tutor sets out the specification, trains calculations and definitions, and discusses experiment design. Biology students in Palampur often have a strong interest in plants and agriculture, which makes ecology and plant science easy to illustrate. The investigation report remains the student's own, with feedback in the form of questions.",
        "Broadband can slow in heavy rain, so we recommend a mobile hotspot as a back-up during timed papers.",
      ],
    },
    {
      heading: "Should a Palampur student pick IGCSE Core or Extended?",
      paragraphs: [
        "Core and Extended are separate papers, not two scales for one paper. Core stops at grade C and Extended reaches A star, so the tier sets the top grade the student can earn.",
        "A student heading for the IB Diploma, A Level sciences or a boarding school with a demanding curriculum should usually choose Extended in Mathematics and the sciences. Core suits a subject that is a real struggle or one taken for breadth. After a few months of lessons, a tutor can review the tier and suggest a change before entries close.",
        "Subject choice finishes the plan. English and Mathematics are near-universal, and most students add two or three sciences and one subject from Geography, Economics or Business. Hindi as a second language is a reliable scoring option for Himachali students.",
        "Edexcel names its tiers Foundation and Higher, and Cambridge names them Core and Extended. Tell us your child's board and we will match a tutor.",
      ],
    },
  ],

  process: [
    { title: "Share the course", description: "Class, board, subject, level and exam sitting, by WhatsApp or email." },
    { title: "Receive a match", description: "We put forward a tutor who has taught that syllabus." },
    { title: "Take a free lesson", description: "A whole class with no payment and no pressure." },
    { title: "Fix terms in writing", description: "Rate, timings and a month-one plan arrive in one short note." },
    { title: "Study and review", description: "Regular classes, written notes and a swap if needed." },
  ],

  whyPoints: [
    { title: "Matched by course", description: "Your child's tutor has taught the same subject, level and board." },
    { title: "Made for hill towns", description: "Palampur students reach specialists that no valley centre can offer." },
    { title: "Clear about local schools", description: "We say that Cambridge-named schools here are CBSE and no IB or IGCSE school was found." },
    { title: "Notes for parents", description: "A short written record follows each lesson." },
    { title: "A free first class", description: "See the teaching before you pay." },
    { title: "Honest coaching", description: "Assessed work always stays with the student." },
  ],

  tutorsIntro:
    "All tutors teach from within India on Indian time, so a Palampur family has no conversions to make. A short profile is sent before the trial, and the match weighs course, level and teaching style.",

  faqs: [
    { question: "Will a tutor visit our house in Palampur?", answer: "No. Tutors do not visit homes in Palampur, because teaching in person at home is offered only in Gurugram and parts of Delhi NCR. In Palampur, home tuition means a live private lesson over video while your child studies in the house. You keep a teacher's full attention and avoid the winding road to anywhere else." },
    { question: "Are the Cambridge-named schools in Palampur IGCSE schools?", answer: "From what we could verify, no. The Palampur schools with Cambridge in their names are affiliated to CBSE and follow the Indian national syllabus. If you want Cambridge IGCSE, ask the school which board it prepares students for, and check the Cambridge school directory. Our online tutors teach the real Cambridge and Edexcel IGCSE syllabuses." },
    { question: "Is there any IB school in Kangra district?", answer: "We found none in Palampur, Dharamshala or Kangra town. Local schools follow the HP Board or CBSE. Authorisations change, so use the IB school finder to confirm any new claim. Until something opens, IB students from the valley study with an online tutor at home or move to a school in another city." },
    { question: "How does IGCSE home tuition work from Palampur?", answer: "Your child is paired with a tutor of the relevant Cambridge or Edexcel subject, and the two meet on video at agreed times. Nobody travels. That lets you ask for someone who has taught a particular tier or exam series, which a general local teacher usually cannot provide." },
    { question: "Where can a private candidate from Palampur sit IGCSE papers?", answer: "At an approved exam centre that accepts private candidates, most likely in Chandigarh, Delhi or another large city. Cambridge and Pearson publish centre lists and entry deadlines months ahead. Ask the centre early about practical papers and fees. Tutors prepare your child; entry and exam-day arrangements rest with you and the centre." },
    { question: "How much does it cost, and is the first lesson free?", answer: "Yes, the first lesson is free and complete. Afterwards the rate depends on the tutor's experience, subject, level and weekly hours, and it is given in writing before booking. Higher Level sciences cost more than primary support. You pay nothing for travel, which matters when the nearest big city is hours away." },
    { question: "Which subjects do Palampur students ask for most?", answer: "Biology, Chemistry, Physics and Mathematics lead, tied to medicine, agriculture and engineering aims. Environmental Systems, Economics and Business Management come next, then English and Hindi. Some parents ask about Theory of Knowledge, where the tutor discusses ideas but the student writes the essay." },
    { question: "Can my child still apply to NEET or JEE after IB?", answer: "Often, depending on subject choices and on rules each agency publishes for that year. Physics and Chemistry with Biology or Mathematics are usually needed, and many institutions want an equivalence certificate. Himachal's own admission processes may treat international-board candidates differently. Decide on subjects early and read the latest notice before Class 12." },
    { question: "Do monsoon rains and winter cold disturb online lessons?", answer: "Sometimes. July and August bring heavy rain, landslides and broadband outages, and January can be bitterly cold. Online lessons cope better than travel on steep roads, but an outage still ends a call. Keep a hotspot ready. Missed sessions are rescheduled without charge, and the note records where the class stopped." },
    { question: "Will tutors write the Extended Essay or an IA?", answer: "No. Tutors explain the criteria, ask questions that sharpen a research question and give general comments on a plan or draft. All words, data and ideas must come from the student. This keeps the work authentic and protects your child from a misconduct finding that could endanger the Diploma." },
    { question: "Is Class 8 too early for IGCSE tuition?", answer: "No. Starting in Class 8 or 9 gives time to move from memorising to explaining. Early lessons are gentle, focused on command words and core skills, with past papers added later. A trial class shows how your child responds and how many hours a week to plan." },
    { question: "What internet speed do we need in the hills?", answer: "A stable connection of around 5 Mbps is enough for video and a shared board. Fibre or reliable Wi-Fi is better than mobile data, and a second phone hotspot is a good safety net in the monsoon. Lost minutes are made up later, and the note records what had been covered." },
    { question: "My child studies in a Hindi-medium school. Can English lessons work?", answer: "Yes, with patience. Lessons run in English because the exams do, but our tutors are Indian and can explain a hard idea in Hindi. We try to match with someone who understands the shift, and IB Hindi B or IGCSE English as a Second Language can be added alongside." },
    { question: "How many lessons a week are sensible?", answer: "One lesson a week plus homework suits a normal term. In the month before papers, two to four sessions are common. The tutor reviews past-paper results and recommends changes, and you can adjust the plan with written notice." },
    { question: "How do I book the first lesson?", answer: "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with the class, board, subject and a convenient time. A matching tutor is usually proposed within a few days. There is no obligation, and you can ask for a different tutor before booking." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "All the Indian cities we serve online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of our IB tutoring." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE help." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "DP subject groups and the core." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led help for younger learners." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Analysis and Applications at HL and SL." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of IB and IGCSE specialists." },
    { label: "Contact us", href: "/contact-us/", description: "Book a free lesson by WhatsApp or email." },
    { label: "IB and IGCSE tutors in Shimla", href: "/shimla/", description: "Our page for the state capital." },
    { label: "IB and IGCSE tutors in Mandi", href: "/mandi/", description: "Our page for the central Himachal town." },
    { label: "IB and IGCSE tutors in Pathankot", href: "/pathankot/", description: "Our page for the gateway town on the Punjab side." },
  ],

  closingHeading: "Start with a free lesson from Palampur",
  closingBody:
    "Tell us the programme, subject and exam sitting and we will name a tutor who has taught that course. Write to support@ibgram.com or WhatsApp +91 7439 368 115; the first lesson is free.",
};
