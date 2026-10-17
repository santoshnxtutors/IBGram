import type { CitySeoPage } from "../types";

/**
 * /terdal/ - IB and IGCSE tutoring page for Terdal, Bagalkot district, Karnataka. No IB or
 * Cambridge/Edexcel IGCSE school in the town could be confirmed, so stripSchools is empty and the
 * clusters point honestly to Pune, Bengaluru and the Belagavi-Sangli belt.
 */
export const terdal: CitySeoPage = {
  slug: "terdal",
  countryName: "Terdal",
  countryNameLong: "Terdal, Karnataka",
  demonym: "Terdal",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We schedule around Terdal's sugarcane crushing season, Krishna flood warnings, Mahavir Jayanti and the Dasara holidays",
  lastUpdated: "2026-09-21",
  geo: { latitude: 16.5, longitude: 75.05 },
  wikipedia: "https://en.wikipedia.org/wiki/Terdal",
  alternateNames: ["Terdhal", "Terdal Bagalkot", "Terdal Karnataka"],
  stripSchools: [],

  title: "Terdal IB & IGCSE Tutors | Home Tuition, Taught Online",
  metaDescription:
    "IB and IGCSE tutors for Terdal in Bagalkot district: private tuition from home over live video, for DP, MYP, PYP, Cambridge and Edexcel. First lesson free.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Terdal",
  heroEyebrow: "IB & IGCSE TUITION FROM HOME IN TERDAL, BAGALKOT DISTRICT",
  heroSubtitle:
    "A search for home tuition in Terdal for an IB or IGCSE subject rarely finds anyone, because nobody in the town teaches those syllabuses. IB Gram brings the teacher to the screen instead: a live one-to-one lesson taken at home, whether you live near the Terdal market, on the Mahalingpur road or in a village on the Krishna side.",
  primaryKeyword: "IB and IGCSE tutors in Terdal",
  imageAltText: "A Terdal student reviewing IB Biology notes with an online tutor over a video call at home",
  secondaryKeywords: [
    "IB tutor Terdal",
    "IGCSE tutor Terdal",
    "IB home tuition Terdal",
    "IGCSE home tuition Terdal",
    "IB private tuition Terdal",
    "IB Maths tutor Terdal",
    "IGCSE Maths tutor Terdal",
    "IB Physics tutor Terdal",
    "IB Chemistry tutor Terdal",
    "IB Biology tutor Terdal",
    "IB DP tutor Terdal",
    "IB MYP tutor Terdal",
    "IB PYP tutor Terdal",
    "IGCSE online tuition Terdal",
    "IB tutor Bagalkot district",
    "IGCSE tutor Terdal Karnataka",
    "online IB tutor Mahalingpur Terdal",
    "IB tutor near Jamkhandi and Mudhol",
  ],

  heroTrustPoints: [
    "Tutors who have taught the same IB or IGCSE course and level your child is studying",
    "Everything runs online; no tutor travels to a Terdal home",
    "One complete trial lesson before you decide anything",
    "No official tie to the IB, Cambridge, Pearson or any school named here",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "IB stages covered" },
    { value: "Two boards", label: "Cambridge and Edexcel" },
    { value: "IST", label: "No time difference" },
    { value: "Free trial", label: "Always first" },
  ],

  intro: {
    heading: "How private tuition for IB and IGCSE works from Terdal",
    paragraphs: [
      "Terdal is a municipal town of roughly twenty-six thousand people in the north-west corner of Bagalkot district, close to the Belagavi boundary and a short run from Maharashtra's sugar towns. The taluk has an unusually large Jain population, around four in ten residents according to the 2011 census, and the town's life follows the sugarcane harvest and the Krishna river. Education is the Karnataka State Board and CBSE. When we looked for a school teaching the IB or Cambridge or Edexcel IGCSE here, we found none.",
      "So tuition at home in Terdal means a live class on a laptop. The tutor logs in from elsewhere in India, your child sits at the family table and the two work through the course, privately. No tutor visits houses in Terdal, because home teaching in person is run only in Gurugram and parts of Delhi NCR. What families gain is the freedom to look for a tutor by subject, level and board instead of by distance.",
      "Our enquiries come from households with different histories. Sugar and trading families whose children have studied in Pune or Bengaluru and want continuity. Doctors, teachers and engineers from the town who plan for a degree abroad. Parents with relatives in Sangli, Kolhapur or the Gulf who have seen Cambridge or IB results open doors, and who want their own child to start early.",
      "IB Gram is independent of the International Baccalaureate, Cambridge, Pearson and every school mentioned. Tutors teach and coach; they do not write a student's IA, Extended Essay, TOK essay or coursework.",
    ],
    bullets: [
      "Live private lessons for IB PYP, MYP, DP and for Cambridge and Edexcel IGCSE",
      "Online throughout; home visits happen only in Gurugram and parts of Delhi NCR",
      "A short written record of every lesson for parents",
      "A new tutor on request if the first does not suit",
      "Rates agreed in writing before booking",
    ],
  },

  programmesIntro:
    "Most Terdal children pass through Kannada or English-medium state schools before a PUC college. The IB stages below show what a tutor is asked to provide when the international programme runs alongside, or after, that path.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Pre-primary to Class 5, ages 3-11",
      description:
        "Learning is organised around transdisciplinary themes, with questions, research and a final Exhibition replacing a plain textbook syllabus.",
      countryNote:
        "A PYP request from Terdal usually concerns a child who started in Pune or Bengaluru, and the aim is to hold onto reading in English and the inquiry approach.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to Class 10, ages 11-16",
      description:
        "Assessment follows criteria across eight subject groups, and a Personal Project completes the programme. Pupils learn to explain, not merely recall.",
      countryNote:
        "With no MYP classroom around, a tutor explains each criterion and uses sample answers so the student can see where marks are won.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "Six subjects across Higher and Standard Level, plus the Extended Essay, TOK and CAS, produce a score of up to 45 with core bonus points.",
      countryNote:
        "Diploma enquiries from northern Karnataka's sugar belt mostly come from families who look at medicine, engineering, pharmacy or management abroad.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "A smaller number of Diploma courses is paired with a career-related qualification and a reflective project for students with a practical bent.",
      countryNote:
        "No school near Terdal is known to run the CP, so support concentrates on the academic courses inside it.",
    },
  ],

  subjectsIntro:
    "A good tutor match depends on precise details. Applications and Interpretation SL is a different subject from Analysis and Approaches HL, and the same goes for every course listed here.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof for students who want the most rigorous route, with the exploration begun early." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data handling, probability and modelling supported by technology, suited to business and life-science paths." },
    { name: "IB Physics", levels: "HL / SL", description: "From mechanics to fields and nuclear physics, taught with timed numerical practice and graph analysis." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Calculations, bonding and organic reactions rehearsed until the working is automatic." },
    { name: "IB Biology", levels: "HL / SL", description: "Genetics, physiology and ecology with accurate definitions and well-framed data answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams with sharp explanations, using sugar pricing, cooperative societies and farm credit as living examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies from family firms and cooperatives, with decision tools applied to real scenarios." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading, comparative essays and oral commentary for students making the jump from regional-medium schooling." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming constructs and networks in the pseudocode form the exam expects." },
    { name: "IB Chemistry for medical aspirants", levels: "HL", description: "A focused Higher Level plan for students who need top Chemistry grades alongside Biology for medicine." },
    { name: "IB Kannada B", levels: "HL / SL", description: "Formal writing and speaking for students who want their first language counted in the Diploma." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Text types, grammar and conversation practice for a dependable language B choice." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and essay argument, including the Deccan sultanates and the freedom movement where chosen." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "The tutor opens up questions about knowledge; the essay and exhibition are the student's own." },
  ],

  igcseSubjectsIntro:
    "In Terdal IGCSE is a deliberate step, often taken at home before moving to a school that teaches it. The board and the tier come first, because they set the shape of the whole programme.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra and shape built through brief regular practice with careful checking of method." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "A step towards calculus and advanced algebra for future Diploma or A Level mathematicians." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel question style, with practice on how method marks are awarded." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, electricity and waves, with exam technique for practical-based questions." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atoms, reactions and organic chemistry, with regular short tests to lock in facts." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, nutrition and inheritance, with diagrams drawn from memory." },
    { name: "IGCSE Combined Science 0653", levels: "Core / Extended", description: "One coherent path through three sciences for students not specialising." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, inflation and government policy explained through examples from cane farming and cooperative sugar mills." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Types of business, finance and marketing, trained on short scenarios." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Representation of data and tracing algorithms before the coding tasks." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing and listening for students whose home language is Kannada, Marathi or Urdu." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Practical Hindi comprehension and composition, popular with border-region families who already speak it." },
  ],

  regionsTitle: "Terdal and the surrounding towns our online tutors serve",
  regionsIntro:
    "Everything is taught on screen, so this list is not about tutor travel. It shows how each area's rhythm of school, work and transport tends to shape the right lesson time.",
  regions: [
    { name: "Terdal market and main road", note: "A compact trading centre where many households run shops or cane-linked businesses and classes after closing time are popular." },
    { name: "Jain temple neighbourhoods", note: "Close-knit areas where festival calendars such as Paryushana and Mahavir Jayanti matter when planning lessons." },
    { name: "Terdal municipal area outskirts", note: "Newer housing on the edge of town, where students may travel by auto or bus to school and lessons fit after return." },
    { name: "Mahalingpur", note: "A larger neighbouring town on the Bagalkot road with more schools and coaching, though no IB or IGCSE option was confirmed." },
    { name: "Rabkavi Banhatti", note: "A silk and textile town nearby, known for sarees and weaving, with families who often send children to Belagavi for study." },
    { name: "Mudhol", note: "A town famous for its hunting hound and for the old princely state, linked to Terdal by road along the sugar belt." },
    { name: "Jamkhandi", note: "A taluk headquarters with a sugar industry and many colleges, from which students move to Belagavi and Pune." },
    { name: "Krishna riverbank villages", note: "River-side settlements where flood warnings, not traffic, decide whether children can be at their desks." },
    { name: "Belagavi", note: "The nearest large city for schooling and health care, which some Terdal families consider for a long-term move." },
    { name: "Sangli and Kolhapur side", note: "Across the Maharashtra border, with strong ties of trade and marriage and a different set of international school options." },
  ],

  schoolDisclaimer:
    "No Terdal school is presented as an IB or Cambridge/Edexcel IGCSE school because none could be confirmed. Schools in other cities below are given only to describe options families consider and have no link to IB Gram.",
  schoolClusters: [
    {
      city: "Terdal and Bagalkot district",
      note: "Local schools follow the Karnataka State Board, with some CBSE. We found no IB or IGCSE campus in Terdal, so international-syllabus students study at home with an online tutor.",
      schools: [],
    },
    {
      city: "Nearby: Belagavi, Sangli and Kolhapur",
      note: "These larger towns are within a couple of hours by road and offer more school choice, but we could not confirm an IB or IGCSE campus there either, so we name none.",
      schools: [],
    },
    {
      city: "Nearby: Pune",
      note: "Pune, reached by road or train via Sangli, is the closest large city with many international-curriculum schools. For some Terdal families it is the destination if a move becomes possible.",
      schools: ["Mahindra International School", "Indus International School, Pune", "The Riverside School, Pune"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "Bengaluru is a long journey from Terdal, but its cluster of IB and IGCSE campuses attracts boarding and relocation enquiries.",
      schools: ["Stonehill International School", "Canadian International School, Bengaluru", "Greenwood High International School"],
    },
  ],

  modesIntro:
    "Terdal families usually settle into one of the three patterns below. The lesson is always a live private call; the difference lies in schedule and purpose.",
  modes: [
    {
      title: "Regular weekly tutor",
      description:
        "A standing weekly slot with one teacher who follows the syllabus in order and marks homework between lessons.",
      bullets: [
        "Fits IB, MYP and IGCSE subjects",
        "A shared whiteboard stays open throughout",
        "Work photographed and returned with comments",
        "A tutor who learns the student's habits across the year",
      ],
    },
    {
      title: "International course next to a state school",
      description:
        "For a student who attends a Karnataka board or CBSE school in the day and studies an IB or IGCSE course in the evenings.",
      bullets: [
        "Follows only the international specification",
        "Avoids school terminal examination weeks",
        "Monthly progress note for parents",
        "A head start before a later change of school",
      ],
    },
    {
      title: "Exam-season intensive",
      description:
        "A short block of frequent classes centred on timed papers, correction and retesting before the May or November session.",
      bullets: [
        "Marking against examiner mark schemes",
        "Mistake log that is revisited each week",
        "Usually starts about five weeks out",
        "Shaped around cane-crushing months and festivals",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Terdal have an IB or IGCSE school?",
      paragraphs: [
        "Our checks found no school in Terdal teaching the IB or the Cambridge or Edexcel IGCSE, and none in the adjoining towns of Mahalingpur, Rabkavi Banhatti, Mudhol or Jamkhandi either. Education in this part of Bagalkot district is organised around state board schools, with a scattering of CBSE campuses and several well-regarded colleges for pre-university and degree study.",
        "The town's character helps explain the demand that does exist. Terdal sits in a sugar-and-silk belt with strong trading families, a visible Jain community with its own educational institutions and a border culture in which Kannada and Marathi mix freely. Many households have relatives in Pune, Sangli or the Gulf, and children grow up hearing about international schools long before they might need one.",
        "A common story is a family whose child spent two or three years in a Pune or Bengaluru international school and returned after a business or health change. Another is a family planning a move within two years who wants the child ready for an IB or IGCSE classroom. In both cases a trained online tutor is the best bridge available.",
        "Should a new authorised school appear locally, the IB's school finder and Cambridge's school directory will show it. Please rely on those lists rather than on a tutoring page for that kind of fact.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Terdal or neighbouring taluks",
        "Local schooling is Karnataka State Board and CBSE",
        "Typical families: trading, sugar and professional households with Pune ties",
        "Check ibo.org and Cambridge directories for new schools",
      ],
    },
    {
      heading: "Karnataka State Board, CBSE, IB or IGCSE: which fits a Terdal child?",
      paragraphs: [
        "Think of these as four different roads and not four steps on one ladder. The state board and CBSE are close at hand, widely taught and linked directly to KCET, NEET, JEE and CUET. IGCSE and IB demand more planning from a Terdal family, because the school, the tutoring and the exam centre may all be in different places.",
        "Three questions usually settle the matter. How much of the assessment is memory, and how much is explanation? Where does the family expect to live and study over the next decade? And who will accept the certificate at the end? The state board leans towards textbook recall, CBSE adds application, IGCSE asks for applied reasoning in tiered papers, and IB adds an essay, community service and six subjects.",
        "For a family firmly rooted in Karnataka, the state board with strong entrance coaching can be the shortest road to a professional seat. An international route makes sense where a move is likely, where an overseas degree is a stated goal, or where a child's mind responds better to explanation than repetition.",
      ],
      table: {
        caption: "Four routes compared for a Terdal household",
        columns: ["Point", "Karnataka State Board", "CBSE", "IB", "IGCSE"],
        rows: [
          ["Nearby in Terdal", "Yes, many schools", "Few", "No school found", "No school found"],
          ["How learning is judged", "Recall of textbook content", "Recall plus application", "Exams, coursework and a long essay", "Tiered external papers"],
          ["Entrance route in India", "KCET, NEET, JEE after second PUC", "JEE, NEET, CUET", "AIU equivalence, CUET or direct entry", "Class 11 at a school of choice, or A Level"],
          ["Studying from Terdal", "School plus coaching", "School plus coaching", "Online tutor or relocation", "Online tutor, private entry"],
        ],
      },
    },
    {
      heading: "What decides the price of IB or IGCSE home tuition in Terdal?",
      paragraphs: [
        "You will not find a rate card here. A single figure would be wrong for most families, so we ask about the course, the level and the exam date first, then send a written quote.",
        "Four things move the figure. Level and subject, since a Higher Level science draws on fewer specialists than early reading. The tutor's history with that exact syllabus. The number of lessons per week. And whether the plan is a steady year or a short push before papers.",
        "There are costs a Terdal family simply does not pay. No bus ticket to Belagavi, no petrol on the Sangli road, no hostel or rented room for a child sent to study elsewhere, and no extra for a tutor to leave a larger city. The lesson arrives wherever there is an internet connection.",
        "Start with the free class. It is a real lesson, so you see the teaching and your child's comfort with the format before any fee is agreed.",
      ],
      bullets: [
        "Level, subject, tutor record and frequency set the rate",
        "A written quote precedes any booking",
        "No travel, hostel or rent costs",
        "The first class is free",
      ],
    },
    {
      heading: "Which works better from Terdal: online tutor, coaching class, local teacher or self-study?",
      paragraphs: [
        "Coaching classes in Mahalingpur, Jamkhandi and Belagavi serve the KCET, NEET and board-exam market well. Their batches are not built around Cambridge or IB papers, and a parent who asks about IGCSE Physics will probably hear that the syllabus is not taught.",
        "A local teacher can be excellent at general Science, yet may never have used an IB mark scheme. Self-study with past papers works for a few motivated children, but without someone to mark the work a misunderstanding can last for months.",
        "A tutor who teaches your child's exact course online fills the gap that a school class would leave. The table sets the options side by side.",
      ],
      table: {
        caption: "Study options for an international course from Terdal",
        columns: ["Option", "Knows the syllabus?", "Marks to official schemes?", "Things to weigh"],
        rows: [
          ["Online one-to-one tutor", "Yes, matched on board and level", "Yes", "Laptop and stable connection needed"],
          ["Coaching class", "Seldom offers IB or IGCSE", "Not applicable", "Batch timing, travel to a larger town"],
          ["Local private teacher", "Depends on background", "Rarely", "Flexible, small pool"],
          ["Self-study", "From the specification alone", "No", "No cost, slow correction"],
        ],
      },
    },
    {
      heading: "How do sugar season, floods and festivals shape the exam year in Terdal?",
      paragraphs: [
        "The IB Diploma is sat in May and November, and Cambridge and Edexcel IGCSE series run in spring, summer and autumn. Most Indian candidates choose May, which means their final revision weeks fall in the hot, dry spring when electricity demand peaks across northern Karnataka.",
        "Local rhythms matter. The cane-crushing season, roughly from October to March, keeps families in the trade busy and busy households shift lesson times. The Krishna river can rise sharply in the monsoon, and the floods of August 2019 showed how quickly roads and schools can be cut off in this region. Dasara, Deepavali, Mahavir Jayanti and Paryushana, together with Ugadi in spring, provide the longer breaks.",
        "A good plan therefore places the heaviest content teaching before the monsoon, treats July and August as lighter weeks with flexibility for flood interruptions, and keeps April for timed practice indoors.",
      ],
      table: {
        caption: "Study calendar for a Terdal student aiming at May",
        columns: ["Period", "Study priority", "Local factor"],
        rows: [
          ["June to August", "Start the course, build routines", "Monsoon, Krishna flood watch"],
          ["September to October", "Core topics, first assessments", "Dasara, Deepavali, cane crushing begins"],
          ["November to January", "Practice papers, internal assessment drafts", "Cooler months, a calm study window"],
          ["February to March", "Mock exams and correction", "Ugadi and school terminal tests"],
          ["April to May", "Timed papers, final revision", "High heat and power-cut risk"],
        ],
      },
    },
    {
      heading: "What options open up after IB or IGCSE for a Terdal student?",
      paragraphs: [
        "Choices depend on the certificate and the destination, and it is wiser to understand the paperwork in Class 11 than in Class 12.",
        "Indian public universities generally want an equivalence certificate for IB Diploma holders from the Association of Indian Universities, while an increasing number of private universities consider IB results directly. CUET-UG publishes its approach for international boards annually. IGCSE students usually enter Class 11 at a CBSE, ICSE or IB school, or continue to A Level.",
        "Medicine and engineering require attention to subject combinations: NEET-UG needs Physics, Chemistry and Biology, and JEE Main needs Mathematics. Karnataka's KCET and its counselling system have their own conditions, so check them with the authority concerned each year.",
        "For study overseas, the UK uses UCAS, Canada and Australia mostly use direct applications, and the United States uses the Common Application. Pune and Mumbai are also popular destinations for private universities. Tutors strengthen the subject performance on which every application rests.",
      ],
      bullets: [
        "AIU equivalence for Indian public university entry",
        "Check CUET-UG, JEE Main, NEET-UG and KCET rules every year",
        "UCAS for the UK, direct applications elsewhere",
        "Match Diploma subjects to the intended degree",
      ],
    },
    {
      heading: "How are IB sciences and Mathematics taught on a video call?",
      paragraphs: [
        "The class is a working session at a shared board, not a recorded talk. The tutor writes, the student writes beside the laptop, and a photograph of the page lets the tutor see handwriting and spot where a step went wrong.",
        "Diploma Mathematics divides into Analysis and Approaches and Applications and Interpretation. The first rewards a taste for algebra and calculus and suits future engineers and economists. The second concentrates on data, models and technology and suits business, social science and life-science plans. Students from Karnataka often choose the more difficult option by default, so we talk through the degree they actually want before the form is signed.",
        "In the sciences the tutor sets out the specification, trains students on calculations and definitions and discusses how to design an investigation. The investigation report itself must be written by the student, and feedback is given as questions and pointers.",
        "On hot afternoons in April and May, power can fail. We advise a fully charged laptop, a mobile hotspot and, if possible, an inverter for timed papers.",
      ],
    },
    {
      heading: "How should a Terdal student choose between IGCSE Core and Extended?",
      paragraphs: [
        "Core and Extended are separate question papers rather than two scales for one paper. Core stops at grade C and Extended reaches A star, so the tier sets the highest grade the student can earn.",
        "A student aiming at the IB Diploma, A Level sciences or a demanding engineering course should usually take Extended in Mathematics and the sciences. Core suits a subject that is a real difficulty or one taken for breadth. A tutor can review the choice after some months and recommend a change while entries are still open.",
        "Subject selection matters equally. English and Mathematics are close to universal, and most students add two or three sciences and one subject from Economics or Business. A language such as Kannada, Hindi or English as a second language is a sensible scoring option for many Terdal students.",
        "Cambridge labels its tiers Core and Extended and Edexcel uses Foundation and Higher. Tell us which board your child is entered with and a suitable tutor will be found.",
      ],
    },
  ],

  process: [
    { title: "Share the course", description: "Send class, board, subject, level and exam session through WhatsApp or email." },
    { title: "Receive a suggestion", description: "We name a tutor whose teaching record matches your course." },
    { title: "Try one lesson", description: "A full class with nothing to pay and nothing to sign." },
    { title: "Fix terms in writing", description: "Rate, timing and a month-one plan come as a short note." },
    { title: "Study and review", description: "Weekly lessons, written notes and an easy change of tutor if needed." },
  ],

  whyPoints: [
    { title: "A tutor for your exact course", description: "IB Physics HL goes to someone who has taught IB Physics HL." },
    { title: "Made for small towns", description: "Terdal students reach specialists that no local class can offer." },
    { title: "Plain about local schools", description: "We say openly that no IB or IGCSE school in Terdal could be found." },
    { title: "Notes for parents", description: "Each lesson closes with a written summary." },
    { title: "A free first lesson", description: "See the teaching before any decision." },
    { title: "Honest coaching", description: "Tutors guide the student but never write assessed work." },
  ],

  tutorsIntro:
    "Our tutors teach from across India on the same clock as Terdal, so families never work out time differences. We send a short profile before the trial and pair on course, level and teaching style.",

  faqs: [
    { question: "Can a tutor visit our house in Terdal?", answer: "No. Tutors do not go to houses in Terdal, because in-person home tuition is limited to Gurugram and parts of Delhi NCR. Home tuition in Terdal means a one-to-one video class while your child studies in the family's own room. You get a teacher's undivided attention and can choose a specialist from anywhere in India." },
    { question: "Is there an IB-affiliated school in Terdal or Bagalkot district?", answer: "We could not find one in Terdal or in Mahalingpur, Mudhol, Jamkhandi or Rabkavi Banhatti. Local schools use the state board or CBSE. Official school directories change, so use the IB's school finder to confirm any new claim. Until then, IB students here learn at home through online tuition or join a school in another city." },
    { question: "Do you offer IGCSE home tuition in Terdal?", answer: "We do, delivered online. Your child is paired with a teacher of the relevant Cambridge or Edexcel subject, and lessons happen on video at a time you agree. Because tutors do not travel, you are free to ask for someone with a specific record, such as Extended Mathematics or Edexcel Chemistry." },
    { question: "Where would a Terdal student sit IGCSE examinations?", answer: "A private candidate must register through an approved centre, usually in a city such as Belagavi, Pune or Bengaluru. Cambridge and Pearson publish their centre lists and entry deadlines months ahead of each series. Discuss practical papers and fees with the centre. Tutors prepare your child, while entry and exam-day logistics rest with you and the centre." },
    { question: "How much does tuition cost, and what does the trial include?", answer: "The trial class is free and includes a full lesson with a real tutor. After that, the rate depends on subject, level, tutor experience and weekly hours, and it is confirmed in writing before booking. Higher Level sciences and advanced Mathematics tend to cost more. There is no travel cost, which matters when the nearest big city is far." },
    { question: "Which subjects are most requested from Terdal?", answer: "Mathematics, Physics, Chemistry and Biology lead, linked to ambitions in medicine, engineering and pharmacy. Economics and Business Management follow, with English, Kannada and Hindi after them. A few parents ask about Theory of Knowledge, where the tutor discusses ideas and structure but the essay is written by the student." },
    { question: "After the IB, can my child apply for NEET, JEE or KCET?", answer: "Often, but it depends on subject choices and the rules each agency publishes for that year. Typically Physics and Chemistry plus Biology or Mathematics are needed, and many institutions want an equivalence certificate. Decide on Diploma subjects early and read the current notices in writing before the final year." },
    { question: "Do floods or festivals interrupt lessons?", answer: "Occasionally. Krishna floods in the monsoon, Dasara and Deepavali, Mahavir Jayanti and weddings can all change a week. We plan the heaviest content before the rains and keep flexible slots. A session lost to a power cut or road closure is rescheduled without charge, and the lesson note records progress." },
    { question: "Will a tutor write the Extended Essay or an IA?", answer: "No. Tutors explain the criteria, ask questions that sharpen a research question and comment in general terms on structure. All text, data and ideas must come from the student. This keeps the work authentic and protects your child from a misconduct decision, which can put a Diploma at risk." },
    { question: "Is Class 7 or 8 too soon for IGCSE?", answer: "No. Starting in Class 8 or 9 leaves time to move from memorising to explaining. Early lessons stay light, with command words and core skills, and past papers come later. A trial class shows how your child responds and how many hours a week make sense." },
    { question: "What internet quality is needed?", answer: "Around 5 Mbps that holds steady is enough for video and a shared whiteboard. A fibre or good Wi-Fi line is better than mobile data. If the call drops, switch to a hotspot. Time lost is made up later, and the note after each class records what was covered." },
    { question: "My child is in a Kannada-medium school. Can English-only lessons work?", answer: "Yes, though it takes patience. Lessons are in English because the exams are, but tutors are Indian and can clarify a hard idea in Hindi, and we try to place Kannada speakers with someone sensitive to the shift. Exam English builds gradually, and a language subject can be taken alongside." },
    { question: "How often should the lessons be?", answer: "A single weekly lesson with homework suits a normal term. In the month before exams, two to four sessions a week are common. The tutor reviews past-paper results and suggests changes, and you can adjust the plan with written notice." },
    { question: "Do you cover both Cambridge and Edexcel IGCSE?", answer: "Yes, with A Level and AS as background. The boards use different codes, tiers and question styles, so tell us which your child will take. The tutor is selected for that board, and we can rematch if you change boards." },
    { question: "How do I start?", answer: "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with your child's class, board, subject and a convenient time. A matching tutor is usually suggested within a few days. There is no obligation, and you can ask for a different tutor before booking." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The Indian cities we teach in online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of our IB tutoring." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE help." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "DP subjects and the core." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-based support for young learners." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Analysis and Applications at both levels." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of IB and IGCSE specialists." },
    { label: "Contact us", href: "/contact-us/", description: "WhatsApp or email for your free trial." },
    { label: "IB and IGCSE tutors in Belagavi", href: "/belagavi/", description: "Our page for the nearest big Karnataka city." },
    { label: "IB and IGCSE tutors in Rabkavi Banhatti", href: "/rabkavi-banhatti/", description: "Our page for the nearby silk town." },
    { label: "IB and IGCSE tutors in Sangli", href: "/sangli/", description: "Our page for the Maharashtra city across the border." },
  ],

  closingHeading: "Book a free lesson from Terdal",
  closingBody:
    "Share the programme, subject and exam month and we will name a tutor who has taught that course. Email support@ibgram.com or WhatsApp +91 7439 368 115, and the first lesson is on us.",
};
