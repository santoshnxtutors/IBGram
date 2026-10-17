import type { CitySeoPage } from "../types";

/**
 * Lonar (Buldhana district, Maharashtra). No IB or Cambridge school could be confirmed locally, so
 * stripSchools is empty and the clusters show the nearest cities where confirmed schools sit.
 * School names are reused from the existing Nagpur, Pune and Mumbai-linked city pages.
 */
export const lonar: CitySeoPage = {
  slug: "lonar",
  countryName: "Lonar",
  countryNameLong: "Lonar, Maharashtra",
  demonym: "Lonar",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings after six, once the day's heat has eased, and Sunday mornings when the roads are quiet",
  lastUpdated: "2026-09-21",
  state: "Maharashtra",
  stateCode: "IN-MH",
  geo: { latitude: 19.9833, longitude: 76.5167 },
  wikipedia: "https://en.wikipedia.org/wiki/Lonar",
  alternateNames: ["Lonar Buldhana", "Lonar Sarovar", "Lonar crater town", "Lonar Maharashtra"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Lonar | Private Tuition Online",
  metaDescription:
    "Lonar families can book live one-to-one IB and IGCSE tutoring from home, with Cambridge and Edexcel covered by subject, and a free first lesson before any fee.",
  h1: "IB and IGCSE Tutors and Private Tuition from Home in Lonar",
  heroEyebrow: "LIVE IB & IGCSE TUTORING FOR LONAR STUDENTS",
  heroSubtitle:
    "Private tuition at home in Lonar for an IB or IGCSE student means a live video lesson, one tutor, one child, with the laptop on your own table. Tutors do not travel to Buldhana district, and no school in town runs these syllabuses, so the specialist has to be matched from elsewhere in India. Tell us the programme, subject and level, and we arrange a free first lesson in the evening.",
  primaryKeyword: "IB and IGCSE tutors in Lonar",
  imageAltText: "Lonar student studying IB Physics with an online tutor on a video lesson at a home desk",
  secondaryKeywords: [
    "IB tutor Lonar",
    "IGCSE tutor Lonar",
    "IB home tuition Lonar",
    "IGCSE home tuition Lonar",
    "IB private tuition Lonar",
    "IB Maths tutor Lonar",
    "IGCSE Maths tutor Lonar",
    "IB Physics tutor Lonar",
    "IB Chemistry tutor Lonar",
    "IB Biology tutor Lonar",
    "IB DP tutor Lonar",
    "IB MYP tutor Lonar",
    "IB PYP tutor Lonar",
    "IGCSE online tuition Lonar",
    "IB tutor Buldhana district",
    "IGCSE tutor Mehkar",
    "IB online tuition Lonar Sarovar",
    "IB tuition near Jalna",
  ],

  heroTrustPoints: [
    "Live private lessons, not recorded videos and not group batches",
    "Tutors with experience in IB DP, MYP, PYP and Cambridge or Edexcel IGCSE",
    "Evening timing built around the Vidarbha summer and school hours",
    "Free first lesson, then a short written note after every session",
    "A free tutor change if the first pairing is not right",
  ],
  heroStats: [
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "First lesson on us" },
    { value: "May & Nov", label: "IB sessions supported" },
  ],

  intro: {
    heading: "IB and IGCSE tutors for a town built around a meteorite crater",
    paragraphs: [
      "Lonar is known across the world for a lake that is not supposed to exist: a nearly circular, salt-and-alkaline crater in solid basalt, about 1.8 km across and some 137 m below its rim, created by a meteorite strike tens of thousands of years ago. Geologists, bird watchers and pilgrims come to the Daitya Sudan temple and the ruined shrines around the water. For a student of IB Physics, Chemistry or Environmental Systems, the town hosts a rare real-world case study, and many Lonar parents know it.",
      "Schooling in town is more conventional. It is mostly the Maharashtra State Board, with some CBSE, and Marathi is the everyday language of the classroom and the street. IB and IGCSE are not taught locally, which is why a family searching for IB and IGCSE tutors in Lonar is nearly always doing something specific: raising a child on an international syllabus through an online route, preparing a move to Pune, Nagpur or abroad, or supporting a student who boards elsewhere and returns home between terms.",
      "We handle that with live online lessons from specialists who teach on Indian time. The student sits at home, the tutor appears on screen, and a short written note after each lesson tells parents what happened. Further down, this page explains local schooling options, board differences, the cost drivers, the exam calendar against Vidarbha weather and festivals, and the paths students take next. We are independent of the IB, Cambridge, Pearson and every school named. Tutors coach and explain, and they do not write assessed coursework.",
    ],
  },

  programmesIntro:
    "In a taluka town these programmes tend to arrive through a move, an online school or a boarding place. What follows is how tutoring shifts across the four IB stages for a Lonar household.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Learning through units of inquiry and a closing Exhibition. A tutor keeps the sessions short and playful, building reading, number sense and the habit of explaining a thought clearly.",
      countryNote:
        "PYP is not offered in Lonar. A child who has it from a previous city can keep pace through one brief weekly session, in English, that matches what the old class was doing.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups assessed on criteria, with an interdisciplinary unit and a Personal Project. Tutors show students how to meet a criterion rather than only memorise.",
      countryNote:
        "A student moving from Marathi-medium teaching into English-medium MYP gets help first with subject vocabulary and sentence structure, before any new content.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, Theory of Knowledge, an Extended Essay and CAS. Lessons target the exam papers and the method of internal assessment, while the assessed work stays with the student.",
      countryNote:
        "Diploma students who live in Lonar and study remotely rarely have a local teacher for Higher Level content, so a weekly specialist lesson stands in for the missing classroom.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses combined with a career-related qualification and a reflective project. Tutors cover the academic courses and the English that supports them.",
      countryNote:
        "Hardly any Lonar family meets CP, but we can pair a tutor with the particular Diploma courses a student takes.",
    },
  ],

  subjectsIntro:
    "A tutor is picked for the specific course and level, because Standard and Higher Level need different depth and pace, and because a Lonar student may be studying with no teacher nearby who knows either.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Differentiation, integration, complex numbers at HL and the trained habit of writing every step on Paper 1." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Data handling, probability models and calculator-based solving for Paper 2." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, thermal physics, waves and fields; impact energy and projectile ideas link neatly to the crater at home." },
    { name: "Chemistry", levels: "SL / HL", description: "Stoichiometry, acids and bases (the lake's alkalinity makes a good example), equilibrium and organic reactions." },
    { name: "Biology", levels: "SL / HL", description: "Cells, genetics, ecology and extremophile ideas, with the terminology that mark schemes expect." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Case-study thinking on wetlands, salinity and conservation, assessed through structured and extended responses." },
    { name: "Geography", levels: "SL / HL", description: "Geomorphology and resource questions, where impact craters and basalt landscapes give vivid examples." },
    { name: "Economics", levels: "SL / HL", description: "Diagram skills and policy evaluation, using cotton, soybean and pilgrimage tourism as context." },
    { name: "Business Management", levels: "SL / HL", description: "Case analysis for Paper 1 and 2 using small-town enterprises as examples." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and exam pseudocode." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Commentary on unseen texts and comparative essays." },
    { name: "Marathi and Hindi", levels: "School-based", description: "Home-language support where the school lets students offer it, helpful in a Marathi-speaking household." },
    { name: "Theory of Knowledge", levels: "Core", description: "Talking through knowledge questions and the exhibition; the essay itself stays the student's." },
  ],

  igcseSubjectsIntro:
    "IGCSE comes from two boards, Cambridge and Pearson Edexcel, whose papers differ in structure. Tutors are therefore matched by board code before subject.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Algebra, geometry, trigonometry and data handling with timed paper practice." },
    { name: "Physics", levels: "Core / Extended", description: "Motion, energy, waves, electricity and atomic physics." },
    { name: "Chemistry", levels: "Core / Extended", description: "Bonding, reactivity, quantitative chemistry and an introduction to organic chemistry." },
    { name: "Biology", levels: "Core / Extended", description: "Life processes, genetics and environmental systems." },
    { name: "Environmental Management", levels: "Single tier", description: "Water, land and energy resources, a good fit for students curious about the crater's wetland." },
    { name: "Geography", levels: "Single tier", description: "Physical processes, population and fieldwork-style questions." },
    { name: "English First or Second Language", levels: "Core / Extended", description: "Reading, writing and speaking practice." },
    { name: "Computer Science", levels: "Single tier", description: "Programming and computational thinking." },
    { name: "Economics and Business Studies", levels: "Single tier", description: "Core terms, calculations and case questions." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Language skills for students who study Hindi at home or school." },
  ],

  regionsTitle: "Lonar town, the crater rim and the neighbouring taluka belt",
  regionsIntro:
    "Students study from the town itself, from villages around the lake and from taluka centres a bus ride away. Local conditions that matter for lessons are summer heat, power reliability and the pace of village roads.",
  regions: [
    { name: "Lonar town centre", note: "The main bazaar and bus-stand area, with the Daitya Sudan temple nearby. Shop and bus noise rises toward evening, so a closed room matters." },
    { name: "Lonar Sarovar crater rim", note: "Homes and guesthouses near the lake's rim path. Visitor traffic is heaviest on weekends and holidays, so weekday sessions are more settled." },
    { name: "Ambar Lake side", note: "The smaller lake to the south of the crater, in a quiet, mostly residential zone." },
    { name: "Mehkar", note: "A nearby town with its own schools and coaching lanes; a few families here also look at Nagpur or Pune options. See our page for Mehkar." },
    { name: "Sindkhed Raja", note: "The Jijau birthplace town on the Jalna highway, where students sometimes combine Lonar family ties with study elsewhere." },
    { name: "Buldhana", note: "The district headquarters, roughly 80 to 100 km away depending on the route, and the reference point for government offices and larger hospitals." },
    { name: "Malkapur and Shegaon", note: "The nearest railway towns, about 100 km away; Shegaon is known for the Gajanan Maharaj shrine. Page links are provided for both." },
    { name: "Washim and Risod side", note: "Towns to the east where cotton and soybean calendars shape family routines." },
    { name: "Jalna and Partur side", note: "Towns to the south-west toward Marathwada; some families split time between there and Lonar." },
  ],

  schoolClusters: [
    {
      city: "Lonar and Buldhana district",
      note: "We could not confirm any school in Lonar or the surrounding taluka as an IB World School or a registered Cambridge or Edexcel centre. The honest answer for a local IB or IGCSE classroom is that none exists today.",
      schools: [],
    },
    {
      city: "Nearby: Nagpur (MIHAN and city)",
      note: "Nagpur holds the nearest confirmed IB and Cambridge schools for Vidarbha families, though the distance from Lonar is considerable. Treat these as a boarding or relocation map.",
      schools: ["D Y Patil International School, MIHAN", "Centre Point School International", "International School of Scholars"],
    },
    {
      city: "Nearby: Pune",
      note: "Pune is the main destination for Marathwada and Vidarbha families who relocate for an international curriculum. Names shown are confirmed through the existing Pune page.",
      schools: ["Mahindra International School", "Symbiosis International School", "Indus International School, Pune"],
    },
    {
      city: "Nearby: Mumbai (boarding and relocation)",
      note: "Mumbai has long-established IB campuses; the journey from Lonar is long, so this is for planned moves only.",
      schools: ["Dhirubhai Ambani International School", "Oberoi International School"],
    },
  ],
  schoolDisclaimer:
    "School names appear only to show where confirmed international-curriculum options are located compared with Lonar. IB Gram operates independently and has no link to these schools, the IB, Cambridge or Pearson; each school controls its own admissions.",

  modesIntro:
    "Nothing in this section involves a tutor travelling to Lonar. In-person home tuition is limited to Gurugram and parts of Delhi NCR, so the options below are all live online formats.",
  modes: [
    {
      title: "Weekly online home tuition",
      description: "A recurring live lesson from home with one tutor who knows your child's course.",
      bullets: ["Digital whiteboard and scanned past papers", "Notes sent to parents after each session", "Same tutor for continuity"],
    },
    {
      title: "Mock and final-exam intensives",
      description: "A short run of frequent lessons ahead of school mocks and the May or November papers.",
      bullets: ["Timed practice, followed by review", "Mark-scheme language drills", "Backup slots for power loss"],
    },
    {
      title: "Subject rescue lessons",
      description: "Targeted help in one hard subject when a student is falling behind or changing programme.",
      bullets: ["Diagnostic paper first", "A fixed plan of four to six lessons", "Extend or stop at your choice"],
    },
  ],

  tutorsIntro:
    "Tutors are based across India and teach on Indian Standard Time. Lonar evenings are generally a good window for them, with most Lonar lessons held between five and nine.",

  sections: [
    {
      heading: "What does Lonar offer an IB or IGCSE student, and what does it not?",
      paragraphs: [
        "Lonar offers a landscape that suits science teaching better than most towns of its size. The crater lake, formed in basalt and fed by a small freshwater stream, is a ready example for impact physics, alkaline chemistry, microbial ecology and conservation. The Lonar wetland has been recognised internationally, which gives Environmental Systems and Geography students a local case study.",
        "What it does not offer is an international classroom. Schools in the taluka run the Maharashtra State Board or CBSE, mostly in Marathi or semi-English medium. We could not confirm an authorised IB World School or a Cambridge or Edexcel centre within the district. That is the main reason families here turn to private online tuition rather than a school change.",
        "For the few households who do follow an international route, the pattern is varied. Some are studying through an online school, others board at a school in Pune or Nagpur and return home in holidays, and a few are preparing for study abroad on a two-year plan. A tutor who knows the target specification can keep each of them on track.",
        "If you are curious about a particular subject path, send the list your child is considering. A short conversation about workload, language demands and likely next steps often saves a term of drift.",
      ],
    },
    {
      heading: "Maharashtra State Board, CBSE, ICSE, IB and IGCSE: how do they differ?",
      paragraphs: [
        "The Maharashtra State Board runs the SSC in Class 10 and the HSC in Class 12, with a state common entrance test, MHT-CET, for engineering and pharmacy seats and NEET for medicine. Teaching is frequently in Marathi, and exams reward recall and neat presentation of textbook content.",
        "CBSE and ICSE are national in reach but share the Indian practice of annual or board-exam focus. IGCSE is a two-year course that ends in subject papers, with questions that ask students to explain, evaluate and use data. The IB Diploma adds an essay, a theory-of-knowledge course and a service component to six examined subjects.",
        "For a Lonar parent the useful question is not which is better, but which fits the child's likely route. The table sets out the differences in plain terms.",
      ],
      table: {
        caption: "Five qualification routes seen from Lonar",
        columns: ["Route", "Exam style", "Usual medium", "Entrance path", "Local support"],
        rows: [
          ["Maharashtra SSC and HSC", "Written state papers, February to March", "Marathi or English", "MHT-CET, NEET, state colleges", "Abundant"],
          ["CBSE", "Board papers in Class 10 and 12", "English or Hindi", "JEE, NEET, CUET-UG", "Moderate"],
          ["ICSE and ISC", "Broader, written-heavy syllabus", "English", "CUET-UG, Indian colleges", "Scarce"],
          ["Cambridge or Edexcel IGCSE", "Tiered subject papers, three sessions a year", "English", "IB, A Level or Class 11 in India", "Almost none"],
          ["IB Diploma", "Exams, coursework, essay, CAS", "English", "AIU equivalence, CUET-UG, overseas", "None in the district"],
        ],
      },
    },
    {
      heading: "How much does IB or IGCSE tuition in Lonar cost?",
      paragraphs: [
        "There is no price list on this page, because the figure depends on what is being taught and how often. After the free first lesson we send a written quote, and nothing is billed until you accept it. That avoids the vagueness many parents meet with phone-based tuition promises.",
        "The first driver is level. A Higher Level Diploma Physics lesson draws on a tutor with university-level content knowledge and marking experience, while a Class 7 MYP lesson does not. The second is scarcity: tutors who can teach Computer Science HL, Further Mathematics or a language course are fewer than those who teach IGCSE English.",
        "Next comes the shape of the plan. A year of weekly lessons, a six-week sprint before the May session and a handful of rescue lessons each cost differently. We describe the plan and then the price, rather than the other way round.",
        "A Lonar family should also count the travel it saves. A weekly class in Jalna, Aurangabad or Nagpur involves a long bus or car journey that eats half a day. A live session at home removes that cost, even if the lesson fee alone looks similar.",
      ],
      bullets: [
        "Programme and level, from MYP to Higher Level DP",
        "Number of qualified tutors for the subject",
        "Lessons per week and total duration",
        "Whether the plan is steady or exam-season only",
      ],
    },
    {
      heading: "Is online home tuition better than travelling to Aurangabad, Jalna or Nagpur?",
      paragraphs: [
        "For most Lonar students, yes, because the nearest cities with relevant coaching are a long way off. Aurangabad, Jalna and Nagpur all have tuition centres, but those mostly serve state board, JEE and NEET preparation rather than IB or IGCSE papers. A weekly trip also costs several hours of travel for a single class.",
        "Online home tuition has real limits too. It needs a reliable connection and a quiet corner, and a student who cannot concentrate on a screen may do better in a room with a teacher. But for a motivated pupil studying a specific specification, being taught by someone who has actually sat the syllabus is hard to match with any local option.",
      ],
      table: {
        caption: "Study options compared for a Lonar student",
        columns: ["Option", "Knows the international syllabus", "Travel", "Timing", "Good for"],
        rows: [
          ["Live online one-to-one at home", "Yes, matched to the course", "None", "Adjusts to school and festival weeks", "Any programme and level"],
          ["Coaching in Aurangabad, Jalna or Nagpur", "Seldom", "Several hours per trip", "Fixed batches", "JEE or NEET, not IB-specific"],
          ["Local tutor in Lonar or Mehkar", "Rarely", "Short", "Flexible", "State board maths and science"],
          ["Self-study with past papers", "Only if the student is thorough", "None", "Unlimited", "Self-directed students in a strong subject"],
        ],
      },
    },
    {
      heading: "How do Vidarbha summers, Pola and Ganesh festival shape the study year in Lonar?",
      paragraphs: [
        "April, May and early June in this part of Maharashtra are hot enough that outdoor activity stops by late morning. That is also when the IB May exams and many IGCSE papers fall. A student preparing in these weeks should plan lessons for the evening, keep a fan and water within reach and avoid scheduling anything demanding after lunch.",
        "The monsoon from June to September makes the countryside green, and heavy rain can cut village roads and power for hours. Pola, the bullock festival in August, matters in farming households. Ganesh Chaturthi in September brings ten days of processions and noise in town, and Navratri and Dasara follow in October. Diwali then arrives, and many families travel.",
        "Cotton and soybean harvests also shape routine, since parents from farming families are busiest in October and November, just when the IB and IGCSE November sessions run. The rhythm of the calendar below is based on those patterns, and lessons are planned with them in mind rather than against them.",
      ],
      table: {
        caption: "A Lonar study calendar",
        columns: ["Period", "What is happening", "Impact on study", "How tutoring adapts"],
        rows: [
          ["Jan to Mar", "Maharashtra board exams, IGCSE February and March series", "High exam load", "Mock papers and focused review"],
          ["Apr to Jun", "IB May session, IGCSE May and June, severe heat", "Tiredness and power cuts", "Evening slots only, spare time buffered in"],
          ["Jul to Sep", "Monsoon, school reopens, IB results, Pola and Ganesh Chaturthi", "New topics and festival noise", "Foundation lessons with flexible days"],
          ["Oct to Nov", "Navratri, Dasara, Diwali, harvest, November sessions", "Family travel and busy parents", "Compressed revision with rescheduling margins"],
          ["Dec", "Winter, year-end", "Calmer weather", "Review and planning for the next term"],
        ],
      },
    },
    {
      heading: "What can a student from Lonar do after an IB or IGCSE course?",
      paragraphs: [
        "Within India, the Association of Indian Universities recognises the IB Diploma for admission, and CUET-UG feeds many central university seats. Maharashtra has strong engineering, medical and design institutions in Pune, Mumbai and Nagpur, and some of them admit international-board students through their own rules or through national exams.",
        "For engineering and medicine, check the eligibility conditions for JEE, NEET and Maharashtra's state counselling before choosing Class 11 subjects. IB and IGCSE students can qualify, but often need particular subjects and documentation. A mistake here is expensive and hard to undo, so confirm with the relevant authority rather than relying on a general guide.",
        "Overseas study is the other main route. Universities in the UK, Canada, Australia and the United States treat IB and A Level results seriously, and the IB's science focus suits students interested in earth science, environmental studies or engineering.",
        "IGCSE students normally continue to IB or A Level, or return to Indian Class 11 with a board that accepts the equivalence. A tutor can describe the academic demands of each choice, though a school counsellor should help make the final call.",
      ],
    },
    {
      heading: "IB Mathematics and sciences: what the lessons actually cover",
      paragraphs: [
        "Analysis and Approaches suits students who enjoy algebra and calculus and may head toward engineering, physics or mathematics. Applications and Interpretation emphasises statistics, modelling and technology and fits students leaning toward economics, psychology or business. The choice is made in Class 11, so a trial lesson in each can help a hesitating student decide.",
        "Where Maharashtra board students struggle is not content but presentation. Calculation-heavy exams in the state system reward the final answer and neat steps, whereas IB Paper 1 rewards logical communication of method. We teach students to write a solution as an argument and to use command terms such as justify, deduce and hence.",
        "In Physics and Chemistry, we work with real examination data: tables of results, graphs with uncertainty bars and multi-step calculations. Biology lessons concentrate on precise definitions and on reading experimental design. The crater lake's chemistry and microbial life make good practice examples for equilibrium, pH and ecosystems.",
        "Internal assessments are conducted and written by the student. A tutor can explain the criteria, discuss how to design a measurable experiment and give feedback on the student's own questions, but the write-up belongs to the student.",
      ],
    },
    {
      heading: "IGCSE tiers, boards and subject choices for Lonar students",
      paragraphs: [
        "Cambridge IGCSE usually offers Core and Extended papers. Extended is intended for students who aim for high grades and who may continue to Diploma-level science or mathematics. Core suits those who want a solid but more limited route. Pearson Edexcel International GCSE uses Foundation and Higher tiers in a similar way.",
        "If a child is studying through an online school or privately, ask who registers the entry. Private candidates need an exam centre that accepts them, and entry deadlines for the May or June session may close months ahead. A tutor can help with preparation but cannot arrange the exam entry.",
        "Subject choices should balance strengths and future plans. English, mathematics and two sciences make a sound base; geography, environmental management, economics or computer science add range. Students from Marathi-medium schools typically need extra practice with English writing and listening, which often takes a term of regular lessons.",
        "Lonar students can also take Hindi as a second language, which is a relatively gentle IGCSE for those who speak it at home and brings a dependable grade into the profile.",
      ],
    },
  ],

  process: [
    { title: "Message us your details", description: "Write by WhatsApp or email with the board, subject, level and exam session." },
    { title: "Review the tutor we suggest", description: "We send a short profile of a tutor who has taught that exact course." },
    { title: "Attend a free first lesson", description: "A live trial on a real topic, so your child can decide if the style works." },
    { title: "Receive the rate in writing", description: "If you wish to continue, we send the fee and plan and wait for your agreement." },
    { title: "Learn weekly, with notes", description: "Regular sessions, a written summary each time and a free tutor change if needed." },
  ],

  whyPoints: [
    { title: "Specialist for your syllabus", description: "A tutor who has taught the paper your child will sit, not a general-purpose teacher." },
    { title: "Fits taluka-town life", description: "Evening slots, backup time for outages and pauses around Pola, Ganesh and Diwali." },
    { title: "Plain about local options", description: "We state clearly that no IB or IGCSE school operates near Lonar, and plan accordingly." },
    { title: "Clear updates for parents", description: "Each session ends with a note on what was covered and what comes next." },
    { title: "Guidance, not ghost-writing", description: "Tutors teach method and content, and assessed work remains the student's own." },
    { title: "Low-risk start", description: "A free first lesson, written rates and a tutor swap without charge." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Lonar?", answer: "We could not confirm one. Schools in Lonar and the surrounding taluka follow the Maharashtra State Board or CBSE, and none appears in the IB directory or among registered Cambridge and Edexcel centres. Families who want an international syllabus usually choose an online school, a boarding school in Pune or Nagpur, or a relocation. A tutor can support any of those routes." },
    { question: "Will a tutor come to my house in Lonar?", answer: "No. Tutors do not visit homes in Lonar, because in-person home tuition runs only in Gurugram and parts of Delhi NCR. What we provide is online home tuition: live, private lessons over video while your child sits at the family desk. It also removes the need to travel to Aurangabad, Jalna or Nagpur for classes." },
    { question: "How do I find an IB tutor in Lonar for Physics or Mathematics?", answer: "Send us the programme, subject, level and session by WhatsApp or email. We match a tutor who has taught that exact course, share a profile and book a free first lesson. If the pairing does not feel right, we change the tutor at no cost." },
    { question: "What does IGCSE tuition cost for a Lonar student?", answer: "The fee depends on subject, tier, lessons per week and how long the plan lasts. We do not publish prices. After the free first lesson we send the rate in writing, and nothing starts until you agree." },
    { question: "Can my child study IGCSE from Lonar through an online school?", answer: "Yes, many students do. The online school provides the course and exam entry; a tutor adds live explanation, timed paper practice and feedback. Check with the school which board and tier your child will sit, and tell us so we can match the right tutor." },
    { question: "My child is in a Marathi-medium school. Is the switch possible?", answer: "It is possible, but the language adjustment is real. Science and mathematics content is usually familiar, yet English-medium exam writing is new. We start with vocabulary and structured answers. Starting several months before the switch gives much better results than starting in the same week." },
    { question: "Does the Lonar crater actually help with IB Environmental Systems or Geography?", answer: "It can help as an example, not as a substitute for the syllabus. A student can discuss impact structures, saline lakes and wetland conservation in extended answers, provided the points answer the question asked. Tutors teach how to use local examples within examiner expectations." },
    { question: "Which IB sessions do you support?", answer: "Both May and November. Your school or registered centre decides which session your child sits, and we plan the lessons backward from that date. IB results are published in July for May candidates and in January for November candidates." },
    { question: "Will the tutor write my child's IA or Extended Essay?", answer: "No. Tutors explain the criteria, discuss how to plan an investigation and comment on the student's own ideas. The internal assessments, Extended Essay, TOK essay and coursework are written by the student, as the IB and Cambridge require." },
    { question: "What happens in the free trial?", answer: "It is a live lesson on a real topic from your child's syllabus, with a tutor who teaches that subject. There is no payment and no commitment. Afterwards you get a short note on what was covered, and we send the rate in writing if you wish to continue." },
    { question: "Do you teach both Cambridge and Pearson Edexcel IGCSE?", answer: "Yes. The two boards have different paper structures and tiers, so tutors are matched to the board code as well as the subject. Let us know which board your child is entered with." },
    { question: "What if the power goes during a lesson?", answer: "Outages happen in Vidarbha summers and during storms. We suggest a charged laptop and a phone hotspot as backup. If a lesson is lost to an outage, we reschedule it, and evening slots tend to be more reliable than afternoon ones." },
    { question: "Can students from Mehkar, Sindkhed Raja or Buldhana join too?", answer: "Yes. Lessons are online, so any town with a stable connection works. We plan around bus timings, school hours and local festivals." },
    { question: "Will an IB Diploma be accepted by Indian universities?", answer: "In general yes, with an equivalence certificate from the Association of Indian Universities, and CUET-UG is the usual route to central universities. For JEE, NEET and Maharashtra counselling, rules depend on subjects and documents, so check the current requirements before locking Class 11 choices." },
    { question: "How long before a May exam should we begin?", answer: "Ideally six months, which gives time to find gaps, work through the syllabus and complete several timed papers. Three months is workable for a focused subject. Less than six weeks is usually revision only, and we will say so honestly." },
    { question: "How do we begin?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's board, subject and level. We reply with a tutor suggestion and a free-lesson time, normally within a day or two." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "How the same online service works in other cities." },
    { label: "IB tutors, all programmes", href: "/ib-tutors/", description: "An overview of IB tutoring from PYP to Diploma." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects with board-matched tutors." },
    { label: "Diploma Programme help", href: "/programmes/dp/", description: "Subject tutoring for Class 11 and 12." },
    { label: "Primary Years Programme help", href: "/programmes/pyp/", description: "Gentle support for younger learners." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "AA and AI at Standard and Higher Level." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of the tutors who teach these syllabuses." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book the free first lesson." },
    { label: "IB and IGCSE tutors in Mehkar", href: "/mehkar/", description: "The neighbouring town in Buldhana district." },
    { label: "IB and IGCSE tutors in Malkapur", href: "/malkapur/", description: "A railway town on the Buldhana side." },
    { label: "IB and IGCSE tutors in Nagpur", href: "/nagpur/", description: "The main city for confirmed IB and Cambridge schools in Vidarbha." },
  ],

  closingHeading: "Start with a free live lesson from home in Lonar",
  closingBody:
    "Tell us your child's programme, subject and exam session. We will find a tutor who has taught it, arrange the first lesson at no charge and send the rate in writing afterwards. Contact us at support@ibgram.com or on WhatsApp at +91 7439 368 115.",
};
