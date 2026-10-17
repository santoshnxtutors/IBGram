import type { CitySeoPage } from "../types";

/**
 * /tirora/ - IB and IGCSE tutoring page for Tirora (Tiroda), Gondia district, Maharashtra. No IB or
 * Cambridge/Edexcel IGCSE school in Tirora could be confirmed, so stripSchools is empty and the
 * clusters point honestly to Nagpur, Raipur and Pune.
 */
export const tirora: CitySeoPage = {
  slug: "tirora",
  countryName: "Tirora",
  countryNameLong: "Tirora, Maharashtra",
  demonym: "Tirora",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Classes avoid the paddy transplanting and harvest weeks, the Pola and Diwali holidays and the worst of Vidarbha's pre-monsoon heat",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.4072, longitude: 79.9325 },
  wikipedia: "https://en.wikipedia.org/wiki/Tirora",
  alternateNames: ["Tiroda", "Tirora Gondia", "Tirodi"],
  stripSchools: [],

  title: "Tirora IB & IGCSE Tutors | Online Home Tuition, One to One",
  metaDescription:
    "IB and IGCSE tutors for Tirora in Gondia district: online one-to-one home tuition for DP, MYP, PYP, Cambridge and Edexcel, with a free first lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Tirora",
  heroEyebrow: "ONLINE IB & IGCSE HOME TUITION IN TIRORA, GONDIA DISTRICT",
  heroSubtitle:
    "People who want home tuition in Tirora for an IB or IGCSE subject soon discover that nobody in the Gondia area teaches those syllabuses, and the nearest international schools are in Nagpur. IB Gram arranges the next best thing: a private lesson on a laptop with a tutor who knows the exact course, taken at the family table, with no road trip to Gondia or Nagpur.",
  primaryKeyword: "IB and IGCSE tutors in Tirora",
  imageAltText: "A Tirora student solving an IB Chemistry question with an online tutor over video at home",
  secondaryKeywords: [
    "IB tutor Tirora",
    "IGCSE tutor Tirora",
    "IB home tuition Tirora",
    "IGCSE home tuition Tirora",
    "IB private tuition Tirora",
    "IB Maths tutor Tirora",
    "IGCSE Maths tutor Tirora",
    "IB Physics tutor Tirora",
    "IB Chemistry tutor Tirora",
    "IB Biology tutor Tirora",
    "IB DP tutor Tirora",
    "IB MYP tutor Tirora",
    "IB PYP tutor Tirora",
    "IGCSE online tuition Tirora",
    "IB tutor Tiroda",
    "IB tutor Gondia district",
    "IGCSE tutor Tirora Maharashtra",
    "online IB tutor Tirora Gondia Tumsar",
  ],

  heroTrustPoints: [
    "Tutors chosen because they have taught your child's precise IB or IGCSE course and level",
    "Teaching is online; no tutor will arrive at a Tirora doorstep",
    "A free first lesson with no obligation",
    "Independent of the IB, Cambridge, Pearson and every school mentioned below",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "Whole IB pathway" },
    { value: "Cambridge, Edexcel", label: "IGCSE boards" },
    { value: "IST", label: "Same clock as Tirora" },
    { value: "Free lesson", label: "Before any fee" },
  ],

  intro: {
    heading: "Private IB and IGCSE tuition for families in Tirora",
    paragraphs: [
      "Tirora, also written Tiroda, is a municipal town in Gondia district in the eastern corner of Maharashtra, close to the Madhya Pradesh border. The Wainganga river feeds the paddy fields around it, and on its outskirts stands the Adani Power Maharashtra plant, one of the largest coal-fired stations in the state. Marathi and Hindi are both heard in the market. Education is Maharashtra State Board and CBSE, and our checks found no school here that teaches the IB or a Cambridge or Edexcel IGCSE syllabus.",
      "For this reason private tuition at home has to be delivered by video. A tutor logs in from another Indian city, the student studies at home on a laptop, and the two work through the course together, privately. No tutor visits homes in Tirora; visits in person are available only in Gurugram and parts of Delhi NCR. The advantage of the online way is selection, since you can ask for a teacher who has handled the exact subject and level, wherever they live.",
      "Parents who contact us include power-plant engineers and managers on postings, doctors and lawyers from Gondia and Tumsar, and farming and rice-milling families that have done well and want their children to study abroad. Some are returning from Pune, Nagpur or the Gulf with a child already in an IB or Cambridge course. Others are simply curious about a route that tests understanding rather than memory.",
      "IB Gram is an independent service. We have no connection with the International Baccalaureate, Cambridge, Pearson or any school, and tutors never write internal assessments, Extended Essays, Theory of Knowledge essays or coursework. They teach and coach; the work submitted is the student's.",
    ],
    bullets: [
      "One-to-one live tuition for IB PYP, MYP, DP and for both IGCSE boards",
      "Fully online in Tirora; home visits run only in Gurugram and parts of Delhi NCR",
      "A written summary after each lesson",
      "A different tutor if the first is not right",
      "A written quote before any commitment",
    ],
  },

  programmesIntro:
    "In Tirora almost every child goes through the Maharashtra State Board or CBSE until Class 10. The IB stages below describe how a tutor helps at each point when the international programme is studied alongside or in place of that route.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Learning is organised into units of inquiry rather than separate subjects, and pupils finish with an Exhibition they plan and present.",
      countryNote:
        "A Tirora PYP request normally concerns a child who studied the programme in Nagpur or Pune; the aim is to protect reading fluency and curiosity after the move.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to Class 10, ages 11-16",
      description:
        "Eight subject groups are judged on stated criteria, and the programme ends with a Personal Project that the student manages independently.",
      countryNote:
        "With no local MYP class, tutoring means unpacking the criterion language and supplying worked examples at each achievement level.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard Level, together with the Extended Essay, TOK and CAS, produce a score out of 45 plus core points.",
      countryNote:
        "Diploma enquiries from eastern Vidarbha mostly come from families aiming at medicine, engineering, agriculture-related sciences or management abroad.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "Selected Diploma courses are joined by a career-related qualification and a reflective project for students with a practical aim.",
      countryNote:
        "No school offering the CP is known near Tirora, so tutoring supports the academic courses within it.",
    },
  ],

  subjectsIntro:
    "Share the exact course. Mathematics Applications SL and Mathematics Analysis HL are different subjects with different teachers, and the same is true across the list below.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and reasoning for future engineers and scientists, with the exploration planned months before it is due." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data, probability and modelling with technology, a good fit for commerce, biology and social science." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves and fields, with a link to thermal power generation to make energy topics concrete." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, kinetics and organic synthesis, practised with frequent short calculations." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics and ecosystems, with accurate terminology and data-response practice." },
    { name: "IB Environmental Systems & Societies", levels: "HL / SL", description: "Energy, water and land use, using paddy farming, coal power and the Wainganga basin as case material." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and short explanations, with examples from rice markets, minimum support prices and power tariffs." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, operations and finance, using agro-processing firms as examples." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis, essay structure and speaking for students from Marathi- or Hindi-medium schools." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and databases, trained in the exam's pseudocode style." },
    { name: "IB Psychology", levels: "HL / SL", description: "Key studies and research methods shaped into evaluative paragraphs." },
    { name: "IB Marathi B", levels: "HL / SL", description: "Formal writing and speaking for families who want Marathi in the Diploma." },
    { name: "IB Hindi B", levels: "HL / SL", description: "A strong option in a Hindi-speaking border belt, with text types and oral practice." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "The tutor discusses knowledge questions and real-life situations; the essay and exhibition remain the student's own." },
  ],

  igcseSubjectsIntro:
    "IGCSE in Tirora usually means private study at home or a step before a school change. Decide the board first, Cambridge or Pearson Edexcel, and then the tier.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra and shape, built through short daily practice and clear solutions." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and functions introduced early for students who will go on to Diploma or A Level Mathematics." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel's question style and how its mark scheme rewards method." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, electricity and waves, plus the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atoms, bonding and organic chemistry with regular recall tests." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Life processes, plant science and genetics, using diagrams the student draws." },
    { name: "IGCSE Combined Science 0653", levels: "Core / Extended", description: "One route through all three sciences for students not specialising." },
    { name: "IGCSE Agriculture 0600", levels: "Grade 9-10", description: "Crop and soil science, relevant to a rice-growing district and practical in outlook." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, trade and government policy, anchored in regional industry." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business structures, finance and marketing, practised on short cases." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Data representation and algorithm tracing before programming tasks." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "A steady route for Marathi- and Hindi-speaking students to formal English." },
  ],

  regionsTitle: "Tirora and neighbouring places our online tutors reach",
  regionsIntro:
    "Lessons happen on screen, so this list does not describe tutor travel. It shows how the local school day, power supply and journeys can influence the best slot for a lesson.",
  regions: [
    { name: "Tirora town centre", note: "The market and bus-stand area, with trading and salaried families who prefer lessons after dinner." },
    { name: "Wainganga weir side", note: "Households near the river works that supply the power plant, where the monsoon can raise water levels and disturb routine." },
    { name: "Kachewani", note: "The railway station zone used for coal movement and passenger trains, with employees of the plant and their families." },
    { name: "Adani power plant colony", note: "A professional township with engineers who relocate every few years, for whom a portable tutor is a practical fit." },
    { name: "Village belt around Tirora", note: "Rural households with paddy land, where transplanting and harvest weeks pull the whole family into the fields." },
    { name: "Gondia", note: "The district headquarters and railway junction, about an hour away, with the area's largest school and coaching market." },
    { name: "Tumsar", note: "A trading and rice-milling town in neighbouring Bhandara district, known for brass ware and rice mills." },
    { name: "Sakoli", note: "A taluk town to the west with agricultural families and strong ties to Bhandara and Nagpur." },
    { name: "Balaghat", note: "Across the state border in Madhya Pradesh, a manganese and forest town whose families often cross over for trade and study." },
    { name: "Nagpur", note: "Roughly three hours away and the natural destination for hospital visits, university enquiries and international schools." },
  ],

  schoolDisclaimer:
    "No Tirora school is described as an IB or Cambridge/Edexcel IGCSE school, because we could not confirm one. Schools in other cities below are shown only as options some families consider; none has any link with IB Gram.",
  schoolClusters: [
    {
      city: "Tirora and Gondia district",
      note: "Local schools follow the Maharashtra State Board or CBSE. We found no IB or IGCSE campus in Tirora, so students on an international course study at home with an online tutor.",
      schools: [],
    },
    {
      city: "Nearby: Nagpur",
      note: "Nagpur is the main city for eastern Vidarbha families who want an international school. The distance makes a move a serious decision, so many begin with online tuition.",
      schools: ["D Y Patil International School, MIHAN", "Centre Point School International", "VIBGYOR World Academy"],
    },
    {
      city: "Nearby: Raipur and Bhilai",
      note: "Chhattisgarh's cities are also within a few hours by train. We could not confirm an IB or IGCSE school there either, so we name none.",
      schools: [],
    },
    {
      city: "Nearby: Pune",
      note: "Pune, an overnight train journey, has a large group of IB and IGCSE schools and many industrial links with Vidarbha families.",
      schools: ["Mahindra International School", "Indus International School, Pune", "The Riverside School, Pune"],
    },
  ],

  modesIntro:
    "Most Tirora households fall into one of the three patterns below. The lesson is always a live private call; schedule and purpose differ.",
  modes: [
    {
      title: "Weekly course tuition",
      description:
        "One tutor, one fixed slot a week, working through the specification in order, with photographed homework marked in between.",
      bullets: [
        "For IB, MYP and IGCSE alike",
        "A digital board stays open throughout",
        "Feedback on each worksheet",
        "A teacher who comes to know the student",
      ],
    },
    {
      title: "International syllabus beside a local school",
      description:
        "For a child in a Maharashtra board or CBSE school who studies an IB or IGCSE course in the evenings or at weekends.",
      bullets: [
        "Content comes from the international course alone",
        "Steers clear of unit-test weeks at school",
        "A progress note each month",
        "Groundwork for switching school later",
      ],
    },
    {
      title: "Pre-exam intensive",
      description:
        "A short run of frequent classes built on timed papers, correction and retesting before the May or November papers.",
      bullets: [
        "Checked against the examiners' mark schemes",
        "Weak topics return every week",
        "Begins roughly a month and a bit ahead",
        "Fitted around heat, harvest and holidays",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Tirora or Gondia district have an IB or IGCSE school?",
      paragraphs: [
        "We could not confirm an IB or Cambridge or Edexcel IGCSE school in Tirora, and neither in Gondia, Tumsar or Sakoli. Education in eastern Vidarbha runs on the Maharashtra State Board, with CBSE schools in the larger towns and attached to industrial townships. The district is better known for rice, manganese, forests and the Nagzira and Navegaon wildlife areas than for international education.",
        "That does not mean no family here cares about it. The power plant has brought engineers and managers from Gujarat, Karnataka, Bengal and beyond, some of whom want continuity for children who began IB or Cambridge elsewhere. Local professionals and business families, in turn, have relatives in Nagpur, Pune and Mumbai and have heard that international qualifications open doors.",
        "Gondia is also a railway junction on the main line between Mumbai and Howrah, so families can reach Nagpur or Raipur easily, and some use that mobility to look at schools. But moving a family is costly and rarely quick, and a child in Class 10 or 11 may not be able to wait.",
        "If a new authorised school opens nearby, the IB's school finder and Cambridge's school directory will show it. We suggest checking them for any future claim instead of relying on a tutoring page.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Tirora, Gondia, Tumsar or Sakoli",
        "Local schooling: Maharashtra State Board and CBSE",
        "Typical families: power-plant staff, professionals, rice-trade households",
        "Verify new schools on ibo.org and the Cambridge directory",
      ],
    },
    {
      heading: "Maharashtra Board, CBSE, IB or IGCSE: how should a Tirora family decide?",
      paragraphs: [
        "No ranking is intended among the four. Each leads somewhere different, and in Maharashtra the decision hinges on how much a family relies on MHT-CET, JEE and NEET to open the door to a professional seat.",
        "A State Board student prepares for the HSC and entrance exams, with coaching in Gondia and Nagpur widely available. A CBSE student follows a national syllabus and finds it easier to apply outside the state. IGCSE trains applied reasoning in tiered papers, and IB broadens the load to six subjects, an essay and community work.",
        "Households sure to stay in Maharashtra often find the state board with CET coaching the straightest path. The international option deserves a look where relocation is probable, an overseas degree is the aim, or a child plainly learns by explaining and discussing.",
      ],
      table: {
        caption: "Tirora family options side by side",
        columns: ["Point", "Maharashtra State Board", "CBSE", "IB", "IGCSE"],
        rows: [
          ["In Tirora itself", "Yes, widely", "A few schools", "No school found", "No school found"],
          ["Assessment style", "HSC and SSC written exams", "Board exams with application", "Exams, coursework and essay", "Tiered external papers"],
          ["Entrance route", "MHT-CET, JEE, NEET after HSC", "JEE, NEET, CUET", "AIU equivalence, CUET or direct entry", "Class 11 at any board, or A Level"],
          ["How to follow it here", "School plus coaching", "School plus coaching", "Online tutor or relocation", "Online tutor, private entry"],
        ],
      },
    },
    {
      heading: "What makes IB or IGCSE home tuition cost more or less in Tirora?",
      paragraphs: [
        "We do not print a price list, because one figure would suit almost nobody. After a short conversation about your child, the course and the exam month, we send a written quote, and you decide once you have seen it.",
        "The subject and level matter most: Higher Level Chemistry needs a rarer teacher than primary reading. A tutor's record with the specific syllabus also counts, as does the number of weekly lessons, and whether you want a steady year or a concentrated push.",
        "A Tirora family also avoids costs that other households absorb without noticing. No fuel to Gondia or Nagpur, no hostel for a child sent away to school, no coaching-centre commute through the evening traffic. The teacher comes by screen.",
        "Because the first lesson is free, you can compare teaching styles before you pay for anything.",
      ],
      bullets: [
        "The rate follows level, subject, experience and frequency",
        "You see a written quote before booking",
        "Nothing spent on travel, hostels or rent",
        "The first lesson costs nothing",
      ],
    },
    {
      heading: "Online tutor, coaching centre, local teacher or self-study: which suits Tirora?",
      paragraphs: [
        "Gondia and Nagpur coaching centres focus on MHT-CET, JEE, NEET and board results. A parent who asks about IGCSE Physics will probably hear that the syllabus is not taught.",
        "A local teacher can be good at general Science, but may never have read an IB subject guide. Self-study with past papers can work for a disciplined student, though errors persist if nobody marks the work.",
        "The closest thing to a school class is an online tutor who has taught your child's exact course. The table lines the choices up.",
      ],
      table: {
        caption: "Ways of following an international syllabus from Tirora",
        columns: ["Option", "Syllabus knowledge", "Marking to official schemes", "Points to consider"],
        rows: [
          ["Online one-to-one tutor", "Yes, matched on board and level", "Yes", "Needs a laptop and a stable connection"],
          ["Coaching centre", "Rarely offers IB or IGCSE", "Not applicable", "Fixed batches and a trip to Gondia"],
          ["Local private teacher", "Depends on background", "Rarely", "Flexible but few to choose from"],
          ["Self-study", "From the specification alone", "No", "Free, but corrections are slow"],
        ],
      },
    },
    {
      heading: "How do paddy seasons, heat and festivals fit the exam year in Tirora?",
      paragraphs: [
        "The IB Diploma is sat in May and November, and Cambridge and Edexcel IGCSE series run in spring, summer and autumn. Most Indian candidates choose May, so the last revision weeks fall in April and May, when eastern Vidarbha is very hot and power demand peaks.",
        "Rice shapes the calendar. Transplanting follows the first monsoon rains in June and July, and harvest comes in October and November, two periods when farming families, and sometimes their children, are fully engaged. Pola in August, Ganeshotsav, Navratri and Dussehra, and Diwali provide the long breaks. Winter weddings fill December to February.",
        "We therefore place the heaviest teaching in the stable weeks of September and the cooler months, keep the transplanting and harvest windows light for families who need them, and hold timed papers in early morning or evening slots in April.",
      ],
      table: {
        caption: "Year plan for a Tirora student aiming at the May session",
        columns: ["Period", "Study priority", "Local factor"],
        rows: [
          ["June to August", "Begin the course, set routines", "Paddy transplanting, Pola, monsoon"],
          ["September to October", "Core topics and first assessments", "Ganeshotsav, Navratri, early harvest"],
          ["November to January", "Practice papers, internal drafts", "Diwali, harvest end, wedding season"],
          ["February to March", "Mock exams and correction", "Rising heat, school tests"],
          ["April to May", "Timed papers and final revision", "Extreme heat; early or late slots"],
        ],
      },
    },
    {
      heading: "Where can a Tirora student go after IB or IGCSE?",
      paragraphs: [
        "What comes next varies with the certificate, the subjects and the destination, and it is far easier to learn the paperwork during Class 11 than in the rush of Class 12.",
        "Most Indian public universities want an IB Diploma graduate to present an equivalence certificate from the Association of Indian Universities, whereas several private universities simply look at IB scores. CUET-UG announces its conditions for international boards annually. After IGCSE, students usually join Class 11 at a CBSE, ICSE or IB school, or switch to A Level.",
        "Medicine and engineering depend on subject combinations: NEET-UG wants Physics, Chemistry and Biology, and JEE Main wants Mathematics. Maharashtra's CET cell sets quota rules of its own that can treat international-board candidates differently, so confirm them yearly.",
        "Abroad, UCAS covers the UK, direct applications cover Canada and Australia and the Common Application covers the United States. Families linked to the power sector often look at energy and electrical engineering degrees overseas. Tutors build the subject strength those applications depend on.",
      ],
      bullets: [
        "Equivalence certificate from AIU for public universities",
        "Check CUET-UG, JEE Main, NEET-UG and Maharashtra CET notices each year",
        "UCAS, direct applications and the Common Application abroad",
        "Choose Diploma subjects around the intended degree",
      ],
    },
    {
      heading: "How does a Mathematics or science lesson run over video?",
      paragraphs: [
        "Think of a shared digital whiteboard in place of the classroom blackboard. The tutor writes, the student writes on paper next to the laptop, and a photo of the finished page returns to the tutor, so that handwriting and layout get corrected along with the answer.",
        "The Diploma has two Mathematics courses. Analysis and Approaches is meant for those who enjoy algebra and calculus and expect to read engineering or pure science, while Applications and Interpretation turns towards statistics and modelling for business, social science and biology plans. We discuss the intended degree before the form is signed.",
        "In the sciences a tutor sets out the specification, drills calculations and definitions and talks through how an investigation could be designed. The report is written by the student, with feedback in the form of questions. Physics students in a district with a major power station often enjoy applying thermodynamics and electricity ideas to what they see around them.",
        "Because power cuts are possible in the heat of April and May, keep a charged laptop and a phone hotspot ready for timed papers.",
      ],
    },
    {
      heading: "Should a Tirora student choose IGCSE Core or Extended?",
      paragraphs: [
        "Core and Extended are separate question papers. The Core ceiling is grade C, while Extended can reach A star, so the tier decides the highest grade on offer.",
        "Anyone aiming for the IB Diploma, A Level sciences or a tough engineering stream should normally choose Extended for Mathematics and the sciences. Core suits a subject that truly troubles the student or one taken for breadth. After a few months a tutor can look again and advise a switch before entries close.",
        "Subjects complete the plan. Nearly everyone takes English and Mathematics, and the typical timetable adds two or three sciences and one of Economics, Business or Agriculture. Hindi or Marathi as a second language is a reliable local scorer.",
        "Edexcel's tiers are Foundation and Higher, and Cambridge's are Core and Extended. Name your child's board and the right tutor follows.",
      ],
    },
  ],

  process: [
    { title: "Tell us the course", description: "Pass on class, board, subject, level and sitting." },
    { title: "Meet a proposed tutor", description: "Someone with experience of that syllabus is proposed." },
    { title: "Try a free lesson", description: "A whole lesson, unpaid and unpressured." },
    { title: "Settle terms in writing", description: "Rate, timings and a plan for month one arrive in one note." },
    { title: "Learn and review", description: "Classes continue, summaries follow and swaps are possible." },
  ],

  whyPoints: [
    { title: "Matched to the course", description: "Their tutor has already taught that subject, level and board." },
    { title: "Fits postings and moves", description: "Families posted to or away from the power plant keep the same tutor." },
    { title: "Open about local schools", description: "We call no Tirora school IB or IGCSE, since none was found." },
    { title: "Notes parents can read", description: "Every class ends with a brief written record." },
    { title: "Free first class", description: "Watch the teaching first." },
    { title: "Honest coaching", description: "Whatever is assessed is written by the student." },
  ],

  tutorsIntro:
    "Teaching is done from within India on Indian time, which spares Tirora families any conversion. Before the trial you get a profile, and the match balances course, level and style.",

  faqs: [
    { question: "Do teachers from IB Gram come to people's homes in Tirora?", answer: "They do not. Visits to the house are arranged only in Gurugram and parts of Delhi NCR, so a Tirora student has the tutor on a screen and sits in the usual place at home. The lesson is still private and live, and it spares the family a drive to Gondia or Nagpur while giving you access to teachers across the country." },
    { question: "Is there an IB school anywhere in Gondia district?", answer: "None that we could confirm, in Tirora, Gondia, Tumsar or Sakoli. Local schools teach the Maharashtra State Board or CBSE syllabus. If you hear of a new one, look it up on the IB's school finder, because approvals change. Until then, IB students here learn through online tutors or relocate to a larger city." },
    { question: "How does IGCSE home tuition work if nobody can travel to Tirora?", answer: "Your child is paired with a teacher of the relevant Cambridge or Edexcel subject, and the two meet by video at fixed times. Because geography is irrelevant, you may request a tutor who has taught a particular tier, paper or session, something a general local teacher is rarely able to offer." },
    { question: "Where do private IGCSE candidates from this area write their papers?", answer: "Papers are taken at an approved centre that admits outside candidates, in practice Nagpur or Pune. Cambridge and Pearson list their centres and set entry deadlines well in advance. Speak to a centre early about practical components and fees. We handle the preparation; registration and the exam day belong to the family and the centre." },
    { question: "What decides the price, and is the trial lesson really free?", answer: "Yes, the first lesson is free and complete. Later fees reflect how experienced the tutor is, the subject and level, and how many hours a week you want, and you get the figure in writing first. Senior sciences usually cost more than primary support. No travel money is needed, since nobody leaves home." },
    { question: "What do Tirora students study most?", answer: "Mathematics and the three sciences take the lead, driven by engineering and medical goals. Economics, Business Management and Environmental Systems and Societies follow, along with English, Hindi and Marathi. Now and then parents ask about Theory of Knowledge, which tutors will discuss with the student without ever writing the essay." },
    { question: "Does an IB Diploma still allow NEET, JEE or MHT-CET entry?", answer: "Frequently it does, though much depends on the subject combination and on notices that each agency issues year by year. Physics and Chemistry plus Biology or Mathematics are typically expected, and several institutions request an equivalence certificate. State quotas can treat international-board candidates differently, so check before Class 12 starts." },
    { question: "How do the paddy seasons affect our lesson timetable?", answer: "Transplanting in the monsoon and harvest in autumn pull farming households away from routine, and April heat can bring blackouts. We plan the heavy teaching around those windows, keep slots flexible, and move any class lost to weather or fieldwork to another day without charge. The lesson note records where the session stopped." },
    { question: "Can the tutor complete an Extended Essay or an IA for my child?", answer: "No. The tutor may explain what the criteria reward, query a weak research question and offer general comments on structure, but wording, data and arguments belong to the student. That limit keeps the work genuine and shields your child from a misconduct ruling that could damage the Diploma." },
    { question: "At what age should IGCSE preparation start?", answer: "Class 8 or 9 is a comfortable point. It gives time to move from memorising towards explaining, with no exam pressure yet. Early lessons concentrate on foundations and the meaning of command words, while timed papers come later. One trial class will show how your child copes and what weekly time is sensible." },
    { question: "What internet connection is adequate?", answer: "A steady line of about 5 Mbps will do for video and a shared board. Fibre or reliable Wi-Fi is preferable to a mobile signal, and a spare hotspot is a useful safety net. When a call breaks, the lost minutes are given back later and the written note shows what had been covered." },
    { question: "Will a Marathi-medium student cope with lessons in English?", answer: "Usually, after a few weeks. Lessons run in English because the examinations do, though our tutors are Indian and can clear up a stubborn point in Hindi. We aim to pair with someone who understands the transition. A language course such as IB Marathi B or IGCSE English as a Second Language can be added alongside." },
    { question: "How often should we meet the tutor?", answer: "For an ordinary term, a single hour weekly plus homework works. Nearer the papers, two to four lessons a week over about a month is typical. The tutor studies past-paper results, suggests changes, and you may adjust the plan whenever you send written notice." },
    { question: "Do tutors cover both Cambridge and Edexcel?", answer: "Yes, both, along with AS and A Level as background. Because their syllabus codes, tiers and question styles differ, please tell us which board your child has entered. We select a tutor for that board and can find a new match if your child moves to the other." },
    { question: "What is the simplest way to start?", answer: "Send a WhatsApp message to +91 7439 368 115 or an email to support@ibgram.com, mentioning your child's class, board, subject and a suitable time. A tutor is normally suggested within a few days and the trial is arranged. You owe nothing at that stage and can request another tutor before booking." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Full list of Indian cities served online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB tutoring with us." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE help." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the core and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, ATL skills and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Support for inquiry-based primary learners." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Both IB Mathematics courses and levels." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse IB and IGCSE specialist profiles." },
    { label: "Contact us", href: "/contact-us/", description: "Arrange the free lesson by message or email." },
    { label: "IB and IGCSE tutors in Nagpur", href: "/nagpur/", description: "Our page for the closest big city." },
    { label: "IB and IGCSE tutors in Balaghat", href: "/balaghat/", description: "Our page for the town over the Madhya Pradesh border." },
    { label: "IB and IGCSE tutors in Raipur", href: "/raipur/", description: "Our page for the Chhattisgarh capital." },
  ],

  closingHeading: "Book a free lesson from Tirora",
  closingBody:
    "Send the programme, subject and sitting, and we will suggest a tutor with experience of the course. Contact support@ibgram.com or WhatsApp +91 7439 368 115; the first lesson is not charged.",
};
