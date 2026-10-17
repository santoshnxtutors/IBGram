import type { CitySeoPage } from "../types";

/**
 * Umred (Nagpur district, Maharashtra). No IB or Cambridge/Edexcel school could be confirmed in Umred
 * town, so stripSchools is empty. School clusters reuse the Nagpur schools already verified on the Nagpur
 * page, labelled as nearby. Online only; no home visits.
 */
export const umred: CitySeoPage = {
  slug: "umred",
  countryName: "Umred",
  countryNameLong: "Umred, Maharashtra",
  demonym: "Umred",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons set after school hours and kept off Pola, Dussehra, Dhammachakra Pravartan Din week and the fiercest days of May",
  lastUpdated: "2026-09-21",

  title: "IB & IGCSE Tutors in Umred | Online Private Home Tuition",
  metaDescription:
    "IB and IGCSE private tuition for Umred students near Nagpur: live one-to-one online lessons at home, matched to your exact syllabus. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition Online in Umred",
  heroEyebrow: "IB & IGCSE PRIVATE HOME TUITION FOR UMRED, ONLINE",
  heroSubtitle:
    "Umred is a small town in Nagpur district, joined to the city by State Highway 9 but not by its international-school timetable. Private home tuition in Umred therefore runs online: a live video lesson, one student and one tutor who knows the IB or IGCSE course. Nobody has to drive into Nagpur for it, and the first lesson is a free trial.",
  primaryKeyword: "IB and IGCSE tutors in Umred",
  imageAltText: "A student in Umred revising IGCSE Chemistry with an online tutor using a laptop and notebook at a home study table",
  secondaryKeywords: [
    "IB tutor Umred",
    "IGCSE tutor Umred",
    "IB home tuition Umred",
    "IGCSE home tuition Umred",
    "IB private tuition Umred",
    "IB Maths tutor Umred",
    "IGCSE Maths tutor Umred",
    "IB Physics tutor Umred",
    "IB Chemistry tutor Umred",
    "IB Biology tutor Umred",
    "IB DP tutor Umred",
    "IB MYP tutor Umred",
    "IB PYP tutor Umred",
    "IGCSE online tuition Umred",
    "online IB tutor Umred Nagpur",
    "IB tutor Umrer",
    "IGCSE tutor Umrer",
    "IB tutor Umred Road Nagpur",
    "IB tutor Bhiwapur",
    "IGCSE tutor Kuhi",
    "Cambridge IGCSE tutor Umred Maharashtra",
  ],

  heroTrustPoints: [
    "Tutors matched to the IB course and level, or IGCSE syllabus code, your child is really taking",
    "Live one-to-one video lessons from home in Umred, with no tutor arriving at the gate",
    "Free trial, a short written note after each class and another tutor if the first is wrong",
    "An independent service that belongs to no school or exam board",
  ],
  heroStats: [
    { value: "IST", label: "Lessons in Indian time" },
    { value: "PYP, MYP, DP", label: "IB stages" },
    { value: "Cambridge + Edexcel", label: "IGCSE boards" },
    { value: "Free trial", label: "No obligation" },
  ],

  intro: {
    heading: "How IB and IGCSE home tuition works for a student in Umred",
    paragraphs: [
      "Start with the geography. Umred is roughly a district-road away from Nagpur, yet the IB and Cambridge classrooms are inside the city, on its Wardha Road and Hingna sides. A child who follows those syllabuses from Umred has three options: a long daily journey, a hostel, or learning part of the course at a distance. Online private tuition is aimed at the third. The student sits at home, the tutor appears on video, and the hour unfolds as a private class would, with a shared page for working and homework that returns marked.",
      "Umred's own character is agricultural and small-town, with coal activity in the wider belt, a large Buddhist community and the forest of the Umred-Karhandla wildlife sanctuary close by. Its schools work under the Maharashtra State Board or CBSE. No IB or Cambridge school in Umred could be verified by us, which is why Nagpur names below are marked as nearby.",
      "One fact about format up front: no IB Gram tutor comes to a house in Umred, since in-person lessons exist solely in Gurugram and parts of Delhi NCR. What you get is live teaching on video, which suits exam work and widens the choice of teachers far beyond the town.",
      "Our loyalty is to the family, not to any institution. IB Gram has no relationship with the IB organisation, Cambridge, Pearson Edexcel or a school named here. Tutors explain, ask questions and mark practice; the Internal Assessment, Extended Essay, TOK essay and coursework are written by the student alone.",
    ],
    bullets: [
      "IB PYP, MYP and DP tutors for all subject groups",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended",
      "Online only for Umred; in-person lessons are for Gurugram and parts of Delhi NCR",
      "A free trial, and the rate in writing before you decide",
    ],
  },

  programmesIntro:
    "Umred children come to IB programmes from odd angles: a hostel in Nagpur, a parent posted from elsewhere, a family back from the Gulf or a child who moved at Class 8. Every stage makes its own demand on a tutor, and the notes below describe each from an Umred family's point of view.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Learning follows inquiry units instead of single-subject chapters, and year six ends with a pupil-led Exhibition. A tutor works on reading fluency, confidence with numbers and the knack of turning curiosity into a question.",
      countryNote:
        "If Marathi is the language of the house, short daily English reading and a weekly conversation with a tutor do more for a PYP child than extra worksheets.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Every subject is graded on set criteria, and in MYP 5 students complete a Personal Project. Most struggle at the point where describing has to become explaining, then judging.",
      countryNote:
        "Students used to Balbharati textbooks commonly need practice at writing a method in steps, stating a result and saying how far it can be trusted.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects, together with TOK, an Extended Essay and CAS. Coursework counts towards most grades, and examinations run in May and November.",
      countryNote:
        "Umred enquiries lean towards Mathematics, Physics and Chemistry for engineering, plus Biology for medicine, reflecting the ambitions of a region that sends many students to Nagpur's colleges.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Selected Diploma courses are combined with career-focused study, a reflective project and skills work. Hardly any school in Vidarbha offers it, so tuition generally supports the Diploma courses within it.",
      countryNote:
        "A student from Umred in a CP elsewhere can get help with the DP courses and with a reflective project drawn from home, such as wildlife conservation near the sanctuary or mining and land use.",
    },
  ],

  subjectsIntro:
    "We begin by asking which course and which level. Good at Chemistry SL does not mean suited to Chemistry HL, and Maths AA HL differs from Maths AI SL. Only then do we hunt for an evening hour that can coexist with school, transport and other classes.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, vectors, algebra and proof, plus long multi-step problems at HL for future engineers." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology-led tasks for commerce and life-science routes." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, electricity and modern topics, with error analysis for the practical." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, energetics, rates, equilibrium and organic chemistry, using the data booklet well." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology, with practice reading unfamiliar graphs." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams for markets and policy, trade and development, and commentaries on the news." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based writing and the finance and operations calculations that examiners set." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Forests, water and land-use cases that connect naturally to a district with a tiger reserve and coal belt." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Annotation, comparing texts and the oral exam, aimed at students whose first thoughts come in Marathi." },
    { name: "IB Marathi", levels: "HL / SL", description: "Literature study as Language A, or Language B acquisition, taught in the student's mother tongue." },
    { name: "IB Hindi", levels: "SL", description: "Language B acquisition for students who want a second Indian language." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Coding, algorithmic thinking and the written product that the school assesses internally." },
    { name: "IB Geography", levels: "HL / SL", description: "Resources, development and a fieldwork method that survives the marking criteria." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, evaluation and the experimental design required for the internal assessment." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Testing claims to knowledge and holding an exhibition argument together." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Choosing a question, handling sources, meeting supervisors. Guidance only, never authorship." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Investigation criteria and the algebra that later supports DP Mathematics." },
  ],

  igcseSubjectsIntro:
    "An IGCSE plan hangs on two facts, the syllabus number and the tier. Mathematics 0580 Extended is not prepared like Additional Mathematics 0606, and Physics 0625 is unlike Co-ordinated Sciences 0654. If the IB Diploma or A Levels come next, maths and science need extra stretch this year, so we ask early.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics, with calculator-free accuracy and pacing." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and logarithms that lead into IB Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Motion, thermal physics, circuits and waves, with the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reaction rates, electrolysis and planning qualitative analysis." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Enzymes, transport, reproduction and data-response questions." },
    { name: "IGCSE Co-ordinated Sciences", levels: "0654", description: "A double award covering all three sciences." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative composition and summary." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, listening and speaking for Marathi-first learners." },
    { name: "IGCSE Marathi and Hindi as a Second Language", levels: "Grade 9-10", description: "Reading and writing in languages used at home, a steady scoring route." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, graphs and short evaluative writing." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case studies, simple accounts and structured answers." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, logic and programming tasks." },
  ],

  regionsTitle: "Umred, Nagpur's fringe and nearby towns that our online tutors teach",
  regionsIntro:
    "Whichever side of the taluka a student lives on, the same tutors are available, because matching follows the syllabus. Real life differs. Children who go to Nagpur for school leave early and get back late, while others study locally and attend classes in the evening. The weekly lesson is fixed around that actual pattern, and broadband or power cuts are checked before the first trial.",
  regions: [
    { name: "Umred town centre", note: "The market and council area, with trading and salaried families who often think about a Nagpur school or a hostel for senior years." },
    { name: "Umred bus stand and station side", note: "The transport end of town, used by students who travel to Nagpur, with the road along State Highway 9 as the main link." },
    { name: "Umred Road, Nagpur", note: "The southern edge of Nagpur along the same highway, where families already use city schools and look at international syllabuses." },
    { name: "Mandhal", note: "A village belt in Umred taluka where students depend on buses or bicycles for school, and online lessons remove a real barrier." },
    { name: "Bhiwapur", note: "A neighbouring taluka town with farming households, towards the Bhandara and Chandrapur side." },
    { name: "Kuhi", note: "A rural-edge taluka with a mix of farming and small-business families and limited choice of syllabus." },
    { name: "Pauni", note: "A river town across the district line in Bhandara, with students who often look to Nagpur for senior classes." },
    { name: "Nagbhid", note: "A town on the Chandrapur side with its own school routine, where a hotspot backup is sensible for lessons." },
    { name: "Kamptee", note: "A cantonment town to the north of Nagpur, with service and defence families used to moving between schools." },
  ],

  schoolDisclaimer:
    "We coach privately and answer to nobody else. A school's name on this page is there to show where IB or IGCSE teaching exists near Umred; no school has asked for that, sponsored us or vouched for us, and the same holds for the IB body, Cambridge and Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Umred town and taluka",
      note: "No IB or Cambridge IGCSE school turned up within the taluka when we checked, so none is named. Families who want these courses almost always look to Nagpur.",
      schools: [],
    },
    {
      city: "Nearby: Nagpur, MIHAN and Wardha Road",
      note: "On the south and west side of Nagpur, the MIHAN campus teaches an international curriculum, and some families from outside the city consider hostel or transport options.",
      schools: ["D Y Patil International School, MIHAN"],
    },
    {
      city: "Nearby: Nagpur, central and Ramdaspeth",
      note: "Central Nagpur holds more schools that teach international syllabuses, reached by road from Umred in a long daily run or through hostel places.",
      schools: ["Centre Point School International", "VIBGYOR World Academy"],
    },
    {
      city: "Nearby: Nagpur, Wanadongri and Hingna Road",
      note: "The western outskirts have another international school, on the side of the city furthest from Umred, so most practical for boarders.",
      schools: ["International School of Scholars"],
    },
  ],

  modesIntro:
    "Umred lessons never involve a visit: in-person home tuition is available only in Gurugram and parts of Delhi NCR. Instead the class is live, private and on video from a desk at home, arranged in one of three ways depending on subject and the pressure of the term.",
  modes: [
    {
      title: "Standing weekly lesson",
      description:
        "An hour on the same day each week with the same tutor, ended by a written recap. Well suited to subjects that accumulate steadily.",
      bullets: [
        "One tutor throughout",
        "Working shown on a shared page",
        "A short note after every class",
        "No fuel, no bus, no waiting",
      ],
    },
    {
      title: "Pre-exam and coursework sprints",
      description:
        "Extra meetings before mocks, internal deadlines and the big sittings, spent on timed questions and feedback written as an examiner would write it.",
      bullets: [
        "Past questions grouped by topic",
        "Extra hours only where marks slip",
        "Helps before predicted-grade deadlines",
        "Scaled down after the exams",
      ],
    },
    {
      title: "Short class and marked homework",
      description:
        "A compact live lesson each week plus practice that the tutor corrects between meetings. A good fit when school and travel leave few free evenings.",
      bullets: [
        "One live session each week",
        "Written feedback on independent work",
        "Runs through holidays",
        "Can grow to two lessons weekly",
      ],
    },
  ],

  sections: [
    {
      heading: "Who studies IB and IGCSE around Umred, and where are the classrooms?",
      paragraphs: [
        "Umred lies in the south-east corner of Nagpur district, a council town serving farms, small shops and households of the surrounding coal belt. Schools follow the Maharashtra State Board or CBSE. Our checks found no IB or Cambridge IGCSE school in town, which is why the school names below carry a nearby label.",
        "Families who ask about these syllabuses tend to fall into a few groups. Government and PSU employees, including people linked to mining and power, who expect a posting elsewhere. Professionals who work in Nagpur and keep a house in Umred. Households with relatives abroad who plan an overseas degree. And parents who have seen an IB or IGCSE classroom and like its emphasis on reasoning.",
        "Nagpur's schools are the obvious reference point, and some Umred families find a way: a hostel, a rented flat near the school or a long bus run. Others use a local school for ordinary days and bring in a specialist tutor on video to keep the international path open.",
        "Tutors also help children who have just moved into an English-medium international classroom from a Marathi-medium one. Science terms and the skill of writing to a mark scheme feel strange at first, and a short block of one-to-one lessons tends to fix that faster than general classroom catch-up.",
      ],
      bullets: [
        "No IB or Cambridge school in Umred could be confirmed",
        "Nagpur holds the nearest verified campuses",
        "Government, PSU and Nagpur-linked families drive enquiries",
        "Online tutors add subject depth without a move",
      ],
    },
    {
      heading: "Maharashtra State Board, CBSE, IB or IGCSE: how do they compare for Umred students?",
      paragraphs: [
        "Maharashtra's board marks two milestones, SSC in Class 10 and HSC in Class 12, both set for Umred by the Nagpur divisional board on the basis of Balbharati books. Plenty of students add MHT-CET, JEE or NEET preparation, where speed on known problems wins. IB and IGCSE papers more often open on a scenario nobody has rehearsed.",
        "CBSE falls between them. Clear NCERT books and a growing share of case-based questions help CBSE students settle into IGCSE sciences. Whichever board, learn the command words: describe, explain, evaluate and justify each want a different answer shape, which mark schemes reward.",
        "Coursework weight is the next difference. The IB Diploma credits internal assessment in most subjects, while the Maharashtra board and most IGCSE subjects lean on the final paper.",
        "The table puts the points Umred parents raise side by side.",
      ],
      table: {
        caption: "Maharashtra State Board, CBSE and IB / IGCSE seen from Umred",
        columns: ["Point", "Maharashtra State Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Medium", "Marathi, Hindi or English", "English mostly", "English, with Marathi and Hindi available as languages"],
          ["Typical question", "Textbook recall and standard problems", "Recall plus application", "Unfamiliar contexts needing analysis and judgement"],
          ["Coursework", "Small practical marks", "Internal marks and projects", "Heavy in IB, light in IGCSE"],
          ["Route onward", "MHT-CET, JEE and NEET", "JEE, NEET and CUET-UG", "CUET-UG and overseas study; JEE or NEET once eligibility is confirmed"],
          ["Nearest school offering it", "In Umred", "Umred and Nagpur", "Nagpur only; none confirmed in Umred"],
        ],
      },
    },
    {
      heading: "What do IB and IGCSE tuition rates depend on in Umred?",
      paragraphs: [
        "Expect the figure to reflect the tutor's depth in your child's course, the level, the sessions per week and their length. A teacher with many IB Physics HL students behind them generally costs more than someone helping with MYP English; two weekly hours cost more than one. The number arrives in writing before the trial. Nothing is advertised as a fixed price.",
        "Lessons online cut out some costs altogether: petrol for the Nagpur highway, a city-address premium, a tutor's own fare. The hours saved can matter more than the rupees, particularly when school already takes up most of the day.",
        "What happens inside the hour matters. Mastering the layout of a top-scoring IB Chemistry answer outweighs extra rereading. Any tutor should be able to describe month one, the evidence of progress and the date of the first review.",
        "Plans bend. Stop for Diwali or a wedding, resume later, swap tutors, and nothing has to be set up again.",
      ],
      bullets: [
        "Rate follows tutor depth, subject, level and weekly hours",
        "No fuel cost and no journey time",
        "A written rate before the trial",
        "Pause, restart or change tutor freely",
      ],
    },
    {
      heading: "Online tutor, Nagpur classes, a neighbourhood teacher or self-study: which works for Umred?",
      paragraphs: [
        "Nagpur is full of coaching institutes aimed at JEE, NEET, CET and state board marks. An IB or IGCSE student who joins sits with classmates on another syllabus, at set hours, after a run along State Highway 9. Calculus may benefit; the qualification itself was not the target.",
        "A neighbourhood teacher gives close attention, but hardly any has handled IB Diploma or Cambridge Extended papers. A self-driven senior might use past papers alone, although no one says whether an answer would score.",
        "Teaching online pairs attention with expertise. It asks for steady internet, a camera and microphone, and one precise question from the student each session. A phone hotspot and a charged laptop answer most outages.",
        "The table sets the four options beside what matters for these courses.",
      ],
      table: {
        caption: "Ways to get IB or IGCSE help from Umred",
        columns: ["Option", "Knows IB and IGCSE papers", "Attention", "Practical points"],
        rows: [
          ["Online one-to-one tutor", "Yes, matched on course and level", "Undivided", "Needs steady internet; no travel"],
          ["Nagpur coaching institute", "Rarely, focus is entrance exams", "Shared with a batch", "Highway journey, fixed timings"],
          ["Local private teacher", "Varies, few have taught these boards", "High", "Small supply in Umred"],
          ["Self-study", "Only what the student finds", "None without review", "Cheap, weak on feedback"],
        ],
      },
    },
    {
      heading: "The Umred year: Vidarbha summer, Pola, Dussehra and exam series",
      paragraphs: [
        "Nagpur and its surrounding district are among the hottest in India in May, with afternoons that make any study hard and power demand at its highest. The monsoon breaks in June, and the months from November to February are pleasant and dry, which makes them the best time for long revision blocks.",
        "The festival calendar is distinctive. Pola, the bullock festival, is a big day in rural Vidarbha in August or September. Dussehra and Dhammachakra Pravartan Din fall close together in autumn, when huge gatherings at Deekshabhoomi in Nagpur affect roads and family plans, and Umred has a large Buddhist community that takes part. Diwali follows soon after, and Holi and Gudi Padwa mark spring.",
        "The IB November session and the Cambridge October-November series fall in this crowded stretch. A sound plan marks the festival days early, places demanding work in winter and keeps the heat months light.",
        "The table is a planning guide. Real dates come from your school or exam centre.",
      ],
      table: {
        caption: "An Umred year for an IB or IGCSE student",
        columns: ["Months", "What is going on", "Study focus"],
        rows: [
          ["March to June", "Board exams, new session, peak heat, May series", "Finish exams, then keep the summer light"],
          ["July to September", "Monsoon, Pola, Ganeshotsav, long teaching terms", "New topics and first coursework drafts"],
          ["October to November", "Dussehra, Dhammachakra Pravartan Din, Diwali, November series", "Targeted past papers ahead of festivals"],
          ["December to February", "Cool dry weather, mocks, applications", "Long revision blocks and mock exams"],
        ],
      },
    },
    {
      heading: "What can an Umred IB or IGCSE student do after school?",
      paragraphs: [
        "Across the UK, US, Canada, Australia, Singapore and Europe, universities take IB Diploma results, and the Association of Indian Universities sets the Diploma level with Class 12. The same grades therefore serve applications in India and abroad, subject to each course's own entry rules.",
        "For its size, Nagpur offers a lot: VNIT, AIIMS Nagpur, IIM Nagpur, the National Law University and Rashtrasaint Tukadoji Maharaj Nagpur University. Amravati University, Pune and Mumbai pull others. CUET-UG admits IB and IGCSE-route applicants to central universities. JEE and NEET are subject to the combination of subjects and the year's rules, so read the bulletin before selecting subjects.",
        "Anyone thinking of study abroad should start in Class 11. Offers weigh predicted grades, a statement and sometimes tests or interviews. Tutors look after the subject side; the school or an adviser helps with the application process.",
        "From IGCSE the road leads to A Levels, the IB Diploma, or Class 11 in an Indian board at a school that admits transfers; overseas admissions staff read A Level grades much like IB scores.",
      ],
      bullets: [
        "IB Diploma equals Class 12 in India via AIU recognition",
        "VNIT, AIIMS Nagpur and IIM Nagpur are in the home district",
        "CUET-UG is open to IB-route applicants",
        "JEE and NEET eligibility must be checked yearly",
      ],
    },
    {
      heading: "Maths and the sciences in the IB Diploma: a practical guide for an Umred student",
      paragraphs: [
        "Two versions of IB Mathematics exist. Analysis and Approaches: algebra, calculus and proof, the norm for engineering and computing. Applications and Interpretation: data, modelling and technology, a fit for commerce, psychology and biology. MHT-CET trainees often pick AA, then find the exploration and open-ended questions demand slower thinking.",
        "Physics HL draws on the calculus in Maths AA, so pairing it with AI creates trouble. Chemistry HL brings organic synthesis, rates and equilibrium; Biology HL pays for careful data reading and precise method descriptions. Speed at state-board numericals does not guarantee ease with written explanation.",
        "An internal investigation sits in every science: pose a question, plan a method, record data, weigh the outcome. The tutor clarifies criteria, challenges a weak plan and tests understanding. Question, data and prose remain the student's. If lab time is short, simulations or school-approved datasets fill in.",
        "Class 11's first term fixes habits for two years, so tuition that starts then seldom needs a rescue at predicted-grade time.",
      ],
      bullets: [
        "AA is calculus and proof; AI is data and modelling",
        "Physics HL pairs most naturally with Maths AA",
        "Coursework is coached but never written by tutors",
        "Start early in Class 11 for cumulative subjects",
      ],
    },
    {
      heading: "IGCSE Core or Extended: which tier should an Umred student take?",
      paragraphs: [
        "Each IGCSE subject is sat at Core or Extended. Core ends at C; Extended reaches A*. Go for Extended when A Levels or IB sciences lie ahead. Core may suit a student whose confidence took a blow and who needs a safe pass, yet switching tiers late is hard after entries close.",
        "A second choice is the subject mix. Would-be engineers and doctors gain from three separate sciences in place of a combined award. Additional Mathematics 0606 eases the route to IB Maths AA and A Level Mathematics, and Marathi or Hindi as a second language often brings a steady grade to a daily speaker.",
        "Practical skills are tested in a written paper or a practical session, depending on syllabus. Even a school with a basic lab expects planning, tabulating and evaluating, so tutors bring recorded demonstrations and sample data.",
        "Private candidates must find a Cambridge-registered centre that accepts outside entries, most likely in Nagpur, and register months in advance. Revision can follow those dates; securing a place is the family's task.",
      ],
      bullets: [
        "Extended tier for A Level and IB science routes",
        "Separate sciences for engineering and medicine goals",
        "Marathi and Hindi papers often reward home fluency",
        "Private entry needs a centre and early registration",
      ],
    },
  ],

  tutorsIntro:
    "Tutors on our list cover IB PYP, MYP and DP subjects as well as Cambridge and Edexcel IGCSE, for students from Umred. Syllabus, level and exam series come first, followed by an hour to suit the child's day; all classes are online.",

  process: [
    { title: "Tell us what you need", description: "Give the programme or board, subject, level, recent grades and the evenings that are free in Umred." },
    { title: "Read the shortlist", description: "You receive tutors who have taught the course, each with a sentence on why they were chosen." },
    { title: "Try a free lesson", description: "Your child works on a real topic on video, free and without commitment." },
    { title: "Set up month one", description: "The tutor outlines topics, weekly pattern and how progress will be shared." },
    { title: "Keep a regular hour", description: "One set slot each week, moved for exams, festivals and hot spells." },
  ],

  whyPoints: [
    { title: "The course drives the match", description: "Each tutor has already taught the syllabus and level your child follows." },
    { title: "Honest about delivery", description: "Umred families are told at the outset that teaching is on video and no tutor visits." },
    { title: "Try before you commit", description: "A free lesson tells you more about a tutor than a profile can." },
    { title: "Clear limits on coursework", description: "Tutors coach internal assessments, the Extended Essay and TOK but never write them." },
    { title: "Notes you can read", description: "A short summary follows each class, with a wider review every few weeks." },
    { title: "Free to go", description: "Pause, change tutor or stop at any point." },
  ],

  faqs: [
    {
      question: "Can we have IB or IGCSE home tuition in Umred?",
      answer:
        "Online is the way home tuition reaches Umred: IB Gram tutors do not call at houses outside Gurugram and parts of Delhi NCR. The student has a live private lesson at home, laptop open, tutor on video, a shared page for working. Most parents mean exactly that when they ask for tuition at home.",
    },
    {
      question: "How do we find an IB tutor for a child in Umred?",
      answer:
        "Write with the programme, subject, level and school. We come back with tutors who have taught that course. Few IB specialists live near Umred, so the tutor teaches from elsewhere in India. A free lesson comes first; a weekly slot and written rate follow.",
    },
    {
      question: "Is there an IB or Cambridge school in Umred?",
      answer:
        "None verified, so none named. The nearest confirmed choices are in Nagpur: D Y Patil International School at MIHAN, Centre Point School International, VIBGYOR World Academy and International School of Scholars. Umred families generally study close to home and add online tutoring.",
    },
    {
      question: "How much do IB and IGCSE tutors charge in Umred?",
      answer:
        "Subject, level, weekly hours and tutor experience fix the rate, put in writing before the trial. No fixed list is kept, as IB Physics HL and MYP Hindi are priced differently. Online study spends nothing on travel, so the fee buys teaching time.",
    },
    {
      question: "Can a Maharashtra board student switch to IGCSE?",
      answer:
        "Yes; Class 8 or 9 makes the smoothest switch. Balbharati content overlaps more than people expect. To close: English written to a mark scheme, command words and showing how an answer was reached. Some months of weekly one-to-one lessons usually do it.",
    },
    {
      question: "Which IB subjects are most requested from Umred?",
      answer:
        "Engineering plans put Mathematics, Physics and Chemistry at the top, then Biology, Economics and Business Management. Marathi-medium students frequently want help writing English. We can also teach Marathi as a language subject, where fluency at home can lift a grade.",
    },
    {
      question: "Does the tutor write the Internal Assessment or Extended Essay?",
      answer:
        "Never. Tutors are barred and keep to the rule. They explain the marking criteria, help pick a workable question, comment on drafts and teach method. The student provides data, reasoning and words, because authenticity checks exist and a breach can put the whole qualification at risk.",
    },
    {
      question: "What happens in the free trial?",
      answer:
        "The child picks a topic and works on it live with the proposed tutor, free of charge and without obligation. A brief note then records what was covered and what we suggest. A poor fit leads to another tutor being offered before any plan starts.",
    },
    {
      question: "What equipment do we need at home?",
      answer:
        "Bring a laptop or tablet with camera and microphone, and internet that can carry video. A hotspot and a full battery help through summer power cuts and monsoon storms. A stylus tablet is handy for maths and science, and paper shown to the camera also works.",
    },
    {
      question: "Can my child sit IGCSE privately from Umred?",
      answer:
        "It can be done via a Cambridge-registered centre taking private candidates, probably in Nagpur. Entry closes months ahead of each series, and written papers stand in for practicals. Revision can fit the centre's calendar, though the family finds and books the centre.",
    },
    {
      question: "Is the IB accepted for college admission in India?",
      answer:
        "It is. The Association of Indian Universities equates the Diploma with Class 12, and IB graduates enter CUET-UG alongside others. A few courses name required subjects, and JEE or NEET eligibility depends on what was studied and the current rules, so each year's bulletin deserves a read.",
    },
    {
      question: "Our child goes to school in Nagpur. Can lessons still fit?",
      answer:
        "Mostly yes, since an online lesson saves a second trip. We choose a time once your child is home and fed, often early evening or Sunday morning, and keep it constant. Busy travel days can be met with a shorter class and marked practice.",
    },
    {
      question: "When should IB Diploma tuition begin?",
      answer:
        "Start in the first term of Class 11, most of all for Mathematics, Physics and Chemistry. Content accumulates across two years and coursework opens early. A Class 12 start leaves scant room for timed papers before predicted grades head to universities.",
    },
    {
      question: "What if a power cut or heat wave interrupts a lesson?",
      answer:
        "We move the lesson. Outages and extreme heat are well known in Vidarbha, so a fallback is agreed in advance: hotspot, charged laptop, make-up hour. Lost lessons of this kind are not charged twice, and spare weeks are kept before the November series.",
    },
    {
      question: "How do we begin from Umred?",
      answer:
        "Write to support@ibgram.com, or WhatsApp +91 7439 368 115, giving board, subject, level, current grade and free evenings. A shortlisted tutor, trial time and written rate come back. There is nothing to pay until you have watched a lesson and chosen to go on.",
    },
  ],

  internalLinks: [
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE overview", href: "/igcse/", description: "Cambridge and Edexcel subjects, tiers and exam sessions." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, board and experience." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the core and internal assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project for parents." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition for younger learners." },
    { label: "IB Maths guide", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI, and preparing for each." },
    { label: "Admissions and test prep", href: "/admissions/test-prep/", description: "Support around CUET, JEE, NEET and overseas applications." },
    { label: "IB and IGCSE tutoring in Nagpur", href: "/nagpur/", description: "The home district's city, with the nearest international schools." },
    { label: "IB and IGCSE tutoring in Wardha", href: "/wardha/", description: "Online matching for families to the west of Nagpur." },
    { label: "IB and IGCSE tutoring in Yavatmal", href: "/yavatmal/", description: "Tutor matching for families in the neighbouring district." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and book a free trial lesson." },
  ],

  closingHeading: "A free IB or IGCSE trial lesson is where Umred families can start",
  closingBody:
    "Describe the programme or board, subject, level, present school and hours that are genuinely free. You get back a tutor who has taught the course, a trial slot on video and a written rate, and no payment is due before the first lesson. Contact: support@ibgram.com or WhatsApp +91 7439 368 115.",

  geo: { latitude: 20.85, longitude: 79.3333 },
  alternateNames: ["Umrer", "Umred Nagpur"],
  wikipedia: "https://en.wikipedia.org/wiki/Umred",
  stripSchools: [],
};
