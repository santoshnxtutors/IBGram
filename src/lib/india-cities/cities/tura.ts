import type { CitySeoPage } from "../types";

/**
 * Tura (West Garo Hills, Meghalaya). No IB or Cambridge/Edexcel school could be confirmed in Tura, so
 * stripSchools stays empty. Clusters use Guwahati and Kolkata schools already verified on those pages,
 * and an honest note on Shillong (CISCE only). Online only; no home visits. Kept non-political.
 */
export const tura: CitySeoPage = {
  slug: "tura",
  countryName: "Tura",
  countryNameLong: "Tura, Meghalaya",
  demonym: "Tura",
  state: "Meghalaya",
  stateCode: "IN-ML",
  flagCode: "in",
  countryCode: "IN",
  region: "Meghalaya, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday afternoons and Saturday sessions that leave Sunday church hours free, allowing for the heavy monsoon and the November Wangala and December Christmas weeks",
  lastUpdated: "2026-09-21",

  title: "IB & IGCSE Tutors in Tura, Meghalaya | Online Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Tura, Meghalaya: DP, MYP, PYP and Cambridge IGCSE, one to one on video at home, planned around Garo Hills rain. Free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Tura",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR TURA, GARO HILLS",
  heroSubtitle:
    "Tura is a hill town in the Garo Hills with a long tradition of English-medium schooling, yet the nearest IB and IGCSE classrooms are a long road journey away in Guwahati. A live one-to-one lesson on video is private tuition at home without the journey. Tutors teach online and do not visit the house; the first lesson is a free trial.",
  primaryKeyword: "IB and IGCSE tutors in Tura",
  imageAltText: "A Tura student in the Garo Hills revising IB Biology diagrams with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Tura",
    "IGCSE tutor Tura",
    "IB home tuition Tura",
    "IGCSE home tuition Tura",
    "IB private tuition Tura",
    "IB Maths tutor Tura",
    "IGCSE Maths tutor Tura",
    "IB Physics tutor Tura",
    "IB Chemistry tutor Tura",
    "IB Biology tutor Tura",
    "IB DP tutor Tura",
    "IB MYP tutor Tura",
    "IB PYP tutor Tura",
    "IGCSE online tuition Tura",
    "online IB tutor Tura Meghalaya",
    "IB tutor Tura Garo Hills",
    "IGCSE tutor West Garo Hills",
    "IB tutor Chandmari Tura",
    "IB tutor Hawakhana",
    "IGCSE tutor Dobasipara",
    "Cambridge IGCSE tutor Meghalaya",
  ],

  heroTrustPoints: [
    "Tutors matched to your child's exact IB course and level or IGCSE syllabus",
    "Live one-to-one lessons taken at home in Tura, with no tutor visit and no trip to Guwahati",
    "Free trial class and a short written note after every session",
    "Independent of schools, exam boards and any examining body",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "IB programmes" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
    { value: "English medium", label: "Lessons taught in English" },
    { value: "Free trial", label: "First class on us" },
  ],

  intro: {
    heading: "Private IB and IGCSE tuition when the nearest classroom is in Guwahati",
    paragraphs: [
      "Tura is the largest town in the Garo Hills, reached by a winding road of several hours from Guwahati. For a family here, private tuition in an IB or IGCSE subject is hard to arrange locally because few teachers in the region have taught those syllabuses. An online one-to-one tutor changes that. The student sits at home with a laptop, the tutor appears on video from elsewhere in India, and the two work through the course using a shared whiteboard, worked questions and marked homework.",
      "English is the official language of Meghalaya and many Tura households already study and converse in it, which makes the move to an English-language syllabus easier than in many towns. Schooling in the region follows the Meghalaya Board of School Education and CBSE, and higher education includes Tura Government College and the Tura campus of North-Eastern Hill University. We could not confirm an IB or Cambridge school in Tura, so this page does not name one.",
      "Stated plainly, IB Gram tutors do not visit homes in Tura. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. In Tura, all lessons are live online, which fits a hill town where getting a specialist teacher to your door would be hard anyway.",
      "IB Gram is an independent service, unconnected with the International Baccalaureate, Cambridge, Pearson Edexcel or any school mentioned. Tutors teach, explain and give feedback; they never write an Internal Assessment, Extended Essay, TOK essay or any coursework for a student.",
    ],
    bullets: [
      "IB PYP, MYP and Diploma subjects across all main groups",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended",
      "Online only in Tura; home visits run just in Gurugram and parts of Delhi NCR",
      "Free trial lesson and a written rate before you book",
    ],
  },

  programmesIntro:
    "Families in Tura meet IB and IGCSE through varied routes: a child heading to a boarding school in Guwahati or further away, a household with a parent posted in the region, or a student who wants a syllabus recognised abroad. Each stage asks for something different from a tutor, described here with the hills in mind.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Pupils learn through themed units of inquiry and finish with a self-directed Exhibition. A tutor builds reading, number sense and the habit of researching a question, in place of extra worksheets.",
      countryNote:
        "A young child in Tura who speaks Garo at home and English at school usually benefits from a tutor who reads aloud and encourages spoken explanations in English.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP subjects are marked against four criteria and the Personal Project closes the programme. Students have to learn how to justify a method and evaluate a result, not just arrive at an answer.",
      countryNote:
        "MYP students from Tura often do well with written English but need practice with open-ended science investigations and with planning a long project over months.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects including TOK, the Extended Essay and CAS, with internal assessments feeding into most grades and exams in May or November.",
      countryNote:
        "Diploma requests from Tura tend to come from students aiming at universities outside the region, with Biology, Chemistry, English and Mathematics asked for most.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "DP courses are taken with a career-related study, a reflective project and skills components. It is very rare in north-east India, so tutors mainly support the DP subjects inside it.",
      countryNote:
        "A Tura student on a CP route through a school elsewhere gets help with the academic courses and with building a reflective project around a real local question.",
    },
  ],

  subjectsIntro:
    "Matching for a Tura student starts with the exact course. HL and SL courses in the same subject differ widely in depth, and Maths AA and AI are different subjects. We look at syllabus fit first, then at a timetable that works around a hill town's school day, afternoon rain and patchy evening connectivity.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions, vectors and proof, with long-answer problems and a focused exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology use, with an exploration built on real data." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, electricity and modern physics, with uncertainty in the investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, energetics, kinetics and organic chemistry, with clean calculation habits." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, physiology and ecology, a natural fit for students near the Nokrek biosphere reserve." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Ecology, water and land systems, drawing on forest and hill-country case studies." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, development economics and the commentaries, with HL quantitative methods." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study application and the planning tools used in the research project." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis, comparative essays and the individual oral, building on strong English." },
    { name: "IB English A Literature", levels: "HL / SL", description: "Close reading of set works and the structure of a literary essay." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language-acquisition skills, text types and oral practice." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches to behaviour, key studies and essay structure." },
    { name: "IB Geography", levels: "HL / SL", description: "Hills, rivers and development themes with a sound fieldwork method." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and essay planning, with a manageable investigation." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, algorithms and the documented product for internal assessment." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Testing knowledge claims and keeping the exhibition focused on an argument." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Refining a question and pacing the work. Coaching only; the essay is the student's own." },
    { name: "IB MYP Sciences & Maths", levels: "MYP 1-5", description: "Investigation skills for criteria B and C and the algebra that DP Maths relies on." },
    { name: "IB MYP Language & Literature", levels: "MYP 1-5", description: "Close reading, essay writing and the Personal Project journal." },
  ],

  igcseSubjectsIntro:
    "Cambridge papers are planned by syllabus code and tier, since 0580 Extended, 0606 Additional Mathematics and 0620 Chemistry each call for a different method. A Tura student who enters as a private candidate also needs a centre, usually in Guwahati or further away, so we ask early about the family's plans.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, geometry and statistics, with clear method lines and time control." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and trigonometry, a useful bridge to IB Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, electricity, waves and thermal physics, with written practical questions." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactivity, electrolysis and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, enzymes, inheritance and ecology, with data questions." },
    { name: "IGCSE Combined & Coordinated Sciences", levels: "0653 / 0654", description: "Three sciences in one award, planned around weaker topics." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, composition and summary." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, listening and speaking for bilingual students." },
    { name: "IGCSE Literature in English 0475", levels: "Grade 9-10", description: "Set texts, unseen poetry and essay technique." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Physical and human themes and the skills papers." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, data response and evaluation." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode and programming for students with limited lab access." },
  ],

  regionsTitle: "Tura localities our online IB and IGCSE tutors serve",
  regionsIntro:
    "An online tutor does not care whether a student lives on a ridge or near the market; what matters locally is connectivity, light and the rain. Steep roads and heavy showers shape the school run, and evening electricity can be uncertain in some parts of the hills. We keep these in mind when fixing the hour for a weekly lesson.",
  regions: [
    { name: "Chandmari", note: "A busy residential and commercial neighbourhood, home to families with children at several English-medium schools." },
    { name: "Hawakhana", note: "An established central area with government employees and teachers among its residents and steady interest in study abroad." },
    { name: "Dobasipara", note: "A mixed residential locality where families combine school with private tuition and are open to an online specialist." },
    { name: "Nazing Bagan", note: "A quieter residential area where a home study corner and steady broadband make online lessons practical." },
    { name: "Babupara", note: "A long-settled neighbourhood near the town centre with a strong tradition of schooling and higher education." },
    { name: "Ringrey", note: "An outlying residential belt, where families should check signal strength before settling a lesson hour." },
    { name: "Dakopgre", note: "A growing area on the edge of town, with newer households and students who travel in for school." },
    { name: "Tura Bazar", note: "The market heart of town, where business families often think ahead about university abroad." },
    { name: "Rongkhon", note: "A residential neighbourhood away from the main road, with students who benefit from lessons without the steep trip to town." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service. The schools named here are listed only to show where IB and IGCSE classrooms exist within reach of Tura families. We have no affiliation with, endorsement from or partnership with any school named, the International Baccalaureate, Cambridge or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Nearby: Guwahati (about 220 km by road)",
      note: "Guwahati is the regional hub where a Tura family would look for a boarding or relocation route. It has one school with a confirmed Cambridge link, and no IB Diploma school we can name.",
      schools: ["International School Guwahati"],
    },
    {
      city: "Nearby: Shillong",
      note: "Shillong's well-known schools run the CISCE board, not IB or IGCSE, so it is not a source of international-curriculum places. We mention it because Tura families often think of it first.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata boarding options",
      note: "A few families from north-east India look at Kolkata for wider IB and IGCSE choice, often through boarding. Local options in Tura itself remain limited, which is exactly why online tutoring matters here.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
  ],

  modesIntro:
    "Tutors do not visit homes in Tura; in-person tuition at IB Gram is offered only in Gurugram and parts of Delhi NCR. Every Tura lesson is live on video and one to one, taken from home. Families choose among three formats depending on the subject and the school calendar.",
  modes: [
    {
      title: "Weekly online private lessons",
      description:
        "One fixed hour each week with the same tutor, live on video with a whiteboard, followed by a short written summary. It is the standard format for learning a subject over a term.",
      bullets: [
        "The same tutor and time every week",
        "Handwritten working on a shared whiteboard",
        "A summary after each class",
        "No steep road to travel",
      ],
    },
    {
      title: "Exam and deadline boost",
      description:
        "Extra lessons leading up to mock exams, internal assessment deadlines and the main exam series, using timed questions and examiner-style feedback.",
      bullets: [
        "Past papers sorted by topic",
        "Extra hours only where marks are lost",
        "Useful before predicted grades",
        "Reduced once exams finish",
      ],
    },
    {
      title: "Shorter live lesson with marked practice",
      description:
        "A compact weekly session plus practice questions marked between meetings. It suits students whose evenings are disrupted by rain, power cuts or long school days.",
      bullets: [
        "One live session a week",
        "Written comments on work done alone",
        "Keeps going through rainy weeks",
        "Easy to increase later",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE in and around Tura: what can a family actually find locally?",
      paragraphs: [
        "Tura's schools follow the Meghalaya Board of School Education and CBSE, and the town is well regarded for English-medium education with a long history of mission and government schools. We could not confirm an IB or Cambridge IGCSE school in Tura, and the nearest place with a Cambridge link that we can name is Guwahati, several hours away by road. This page therefore keeps its claims about schools modest.",
        "Who asks about IB and IGCSE here? Families with a parent posted to the region from elsewhere in India, for whom continuing an international syllabus matters. Families who plan to send a child to boarding school in Guwahati, Kolkata or beyond and want the student ready. Families with relatives abroad. And students in strong English-medium schools who want to study outside the region and need a qualification that universities recognise.",
        "For these households, tutoring is the practical solution. A student can study a subject that the local school does not offer, catch up before joining a school elsewhere, or prepare for IGCSE as a private candidate without leaving town.",
        "A word on realism. The Garo Hills offer strong students and a serious attitude to study, but a thin supply of specialist teachers in international syllabuses. An online tutor chosen for the exact course fills that gap directly.",
      ],
      bullets: [
        "No IB or Cambridge school in Tura could be confirmed",
        "Guwahati has the nearest verified Cambridge link",
        "Boarding, relocation and private candidacy are common routes",
        "Online tutors supply subject depth the town lacks",
      ],
    },
    {
      heading: "MBOSE, CBSE, IB or IGCSE: what does a Tura student need to adjust to?",
      paragraphs: [
        "Students in Tura sit MBOSE examinations at the end of Class 10 and Class 12, or CBSE in schools that follow it. Both rely on prescribed textbooks and final papers. IB and Cambridge assessments reward explanation, evidence and judgement, and often start from a scenario the student has not met before.",
        "The good news for a Tura student is language. Because English is the medium of instruction in many local schools, the step into IB or IGCSE English is shorter than for students who are new to English-medium study. The adjustment is more often in style: writing extended answers that build an argument, and using command words like evaluate and justify with their intended meaning.",
        "MBOSE also differs from CBSE in syllabus coverage and sequencing, so a student switching from MBOSE to IGCSE may meet chemistry or mathematics topics in a different order and depth. A tutor with experience of both can map the gaps quickly and avoid wasted weeks.",
        "The table lists the features Tura families ask about most.",
      ],
      table: {
        caption: "MBOSE, CBSE and IB / IGCSE for Tura students",
        columns: ["Feature", "MBOSE", "CBSE", "IB / IGCSE"],
        rows: [
          ["Usual language of study", "English, with Garo at home", "English or Hindi", "English, with Hindi or other languages as subjects"],
          ["Question style", "Textbook-based, recall and problems", "Mixed recall and application", "Unseen contexts requiring analysis and evaluation"],
          ["School-based work", "Limited", "Internal marks and projects", "Large in the IB, small in IGCSE"],
          ["Routes onward", "Regional colleges, NEHU, entrance exams", "CUET-UG, JEE, NEET", "CUET-UG and overseas, with JEE and NEET eligibility checks"],
          ["Nearest verified provider", "Tura and the district", "Tura and nearby towns", "Guwahati, Kolkata or boarding elsewhere"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Tura, and what moves the price?",
      paragraphs: [
        "The rate is set by the level taught, the tutor's depth of experience with that exact course, the weekly hours and the format. A Higher Level Chemistry or Mathematics tutor who has taught the syllabus several times will cost more than a tutor supporting MYP subjects. We confirm the rate in writing before the free trial and publish no fixed price list.",
        "The largest saving for a Tura family is travel. Getting to Guwahati for weekly classes is a long day each way, with cost and time that most students cannot spare. Online lessons turn that into an hour at a desk at home. Even a family that does not count the rupees will count the hours.",
        "Think about spend in terms of marks, not hours. A session on how to set out an IB Biology long answer, or how to use the command words in IGCSE Chemistry, will often lift a grade more than a longer session revising familiar material. Ask what the first four weeks will cover and how progress will be checked.",
        "There is no long contract. A family can pause during the heavy rains, for Wangala or Christmas, or during exams, and pick up later without re-doing the matching.",
      ],
      bullets: [
        "Rate depends on level, subject, weekly hours and tutor experience",
        "No travel to Guwahati, saving a full day each way",
        "Rate agreed in writing before the trial",
        "Pause, resume or change tutor freely",
      ],
    },
    {
      heading: "Online tutor, local teacher, distance course or self-study: what works in the Garo Hills?",
      paragraphs: [
        "Every option has a place. A local teacher gives continuity and knows the school, but few in the region have taught IB or Cambridge papers. A distance or online course offers structure but often at a pace that does not suit an individual child. Self-study with past papers is cheap, but nobody checks whether a written answer would earn marks.",
        "A one-to-one online tutor combines individual attention with real knowledge of the syllabus. The tutor sees the student's working in real time, corrects it and sets the next task. The limits are practical: a stable connection, a quiet corner and a student willing to arrive with a question.",
        "Connectivity is the main issue in a hill town. Signal can vary by locality and weather, so a mobile hotspot as a second route and a slightly shorter lesson on wet days will help. If a call drops, the tutor carries on from where it stopped, and the student receives notes afterwards.",
        "The table compares the routes on what matters for these syllabuses.",
      ],
      table: {
        caption: "Ways a Tura student can get IB or IGCSE support",
        columns: ["Route", "Syllabus expertise", "Individual attention", "Practical notes for Tura"],
        rows: [
          ["Online one-to-one tutor", "High, matched to course and level", "Complete", "Needs reliable connection, hotspot backup advised"],
          ["Local private teacher", "Seldom has taught IB or IGCSE", "High", "Few specialists in the region"],
          ["Recorded or group online course", "Generic, not personal", "Low", "Flexible timing, limited feedback"],
          ["Self-study", "Depends on resources found", "None without review", "Low cost, weak on extended answers"],
        ],
      },
    },
    {
      heading: "The Tura year: monsoon, Wangala, Christmas and exam series",
      paragraphs: [
        "Tura sits in one of the wetter parts of India. From May through September, heavy rain is normal, with landslides and road disruption on the hill routes, and power and broadband can suffer. A study plan that assumes a clear run through the monsoon will break down, so we allow flexible make-up slots in those months.",
        "The cultural calendar matters as well. Wangala, the post-harvest festival of the Garo people, falls around November, and Christmas is a major season for the many Christian families in town, with preparations through December. Sunday is reserved for church for many households, so we arrange sessions on weekdays and Saturdays, and avoid Sunday mornings unless a family asks otherwise.",
        "Exam series follow the boards. IB exams take place in May and November, and Cambridge IGCSE series run in May to June and October to November, with a February to March sitting for some subjects. MBOSE and CBSE board exams come in February and March, and a student carrying both needs a timetable that does not collide.",
        "The table is a planning sketch, not an official calendar.",
      ],
      table: {
        caption: "A Tura year for IB and IGCSE students",
        columns: ["Months", "What is happening", "Study focus"],
        rows: [
          ["February to April", "Board exams, mocks, spring warming", "Mocks and a steady start on new content"],
          ["May to September", "Heavy monsoon, IB May exams, IGCSE May-June, landslide and outage risk", "Flexible make-up slots and internal assessment drafts"],
          ["October to November", "Post-monsoon clearing, Wangala, November exam series", "Timed papers ahead of the November sittings"],
          ["December to January", "Christmas season, cool dry weather", "Light revision, applications and planning"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Tura study next?",
      paragraphs: [
        "The IB Diploma is accepted by universities in the UK, US, Canada, Australia and Europe, and the Association of Indian Universities treats it as equal to Class 12 for admission in India. IGCSE students usually continue to A Levels, the IB Diploma or an Indian Class 11 place. Either route keeps a student from Tura open to both Indian and overseas study.",
        "Within the region, the North-Eastern Hill University in Shillong, with a campus in Tura, is a familiar option, and IIT Guwahati, Gauhati University and Cotton University in Guwahati draw many students from Meghalaya. Shillong also has IIM Shillong and NIT Meghalaya. CUET-UG is the entry route to central universities for IB students, and JEE and NEET eligibility depends on the subjects taken and the year's rules.",
        "Many Tura students who look abroad are drawn to health, biology, English and social-science programmes. Biology and Chemistry at Higher Level support medicine and life-science applications, while English A and Psychology or Economics suit humanities and social-science routes.",
        "A tutor can help map subject choices to these destinations before a student commits, since early choices in Class 10 or 11 are hard to reverse.",
      ],
      bullets: [
        "AIU recognises the IB for Indian university admission",
        "CUET-UG is open to IB-qualified students",
        "JEE and NEET eligibility must be checked every year",
        "Choose subjects with the target degree in mind from Class 10 or 11",
      ],
    },
    {
      heading: "IB Biology, Chemistry and English: a practical plan for a Tura student",
      paragraphs: [
        "Biology HL and Chemistry HL are the most common pairing among Tura students who look at medicine and life sciences. Biology rewards careful reading of data and clear description of experiments, while Chemistry rewards methodical calculation and mastery of organic pathways. Students who are strong in memory from MBOSE or CBSE do well when they add the habit of applying a fact to an unfamiliar case.",
        "English A Language and Literature suits students who read widely and write well, which is a strength in many Tura schools. The course asks for disciplined analysis of unseen texts and set works, and a student who practises timed Paper 1 commentaries weekly usually improves faster than one who reads more.",
        "Mathematics needs a separate decision. AA is the choice for students who want engineering, physical science or economics, and AI for those heading to social science, business or health science. A student aiming at medicine often finds AI enough, though a university's own entry requirements must be checked.",
        "For the internal assessments, tutors can explain what a good investigation looks like and challenge a weak question, but the student must collect the data, analyse it and write it up. In a town with limited laboratory access, approved simulations and secondary datasets can support the work with the school's agreement.",
      ],
      bullets: [
        "Biology and Chemistry HL support medicine and life-science applications",
        "English A builds on the strong English of many Tura schools",
        "AA for engineering and physical science, AI for health and social science",
        "Investigations are guided, never written, by the tutor",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a Tura student choose?",
      paragraphs: [
        "Most IGCSE subjects offer Core and Extended. Core caps the top grade at C, while Extended runs from A* to E, so students who plan A Levels or IB Diploma sciences should aim for Extended. Core can suit a student who wants a secure pass while building confidence, although switching later is rarely possible once entries are made.",
        "Subject choice matters too. Additional Mathematics 0606 prepares for IB Maths AA and A Level Mathematics, and separate sciences give a firmer base for medicine than a combined science award. English First Language is a natural option for students who already write well in English.",
        "Students in Tura who sit IGCSE privately must find a Cambridge-registered centre, which for most will mean travel to Guwahati or another city, and must register months before the series. Practical papers are replaced with written alternatives for private candidates, so students should practise planning and evaluating experiments on paper.",
        "Tutors can build a revision plan working back from the centre's dates. Booking the centre stays with the family, and it is worth doing early because places can be limited.",
      ],
      bullets: [
        "Extended tier keeps A Level and IB science routes open",
        "Additional Mathematics 0606 supports later maths at A Level or IB",
        "Separate sciences suit medicine better than combined",
        "Private candidates need a centre and early registration",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge and Edexcel IGCSE to Tura students. Every match starts with the exact syllabus, level and exam series, then with a lesson hour that holds up in a hill town, since every class is online.",

  process: [
    { title: "Tell us the brief", description: "Send the programme or board, subject, level, present grade and the times that work in Tura." },
    { title: "Review your shortlist", description: "We suggest tutors who have taught that precise course, with a line on why each fits." },
    { title: "Try a free lesson", description: "Your child works through a real topic on video, with no cost and no commitment." },
    { title: "Settle the first-month plan", description: "The tutor sets out topics, weekly rhythm and how progress will be shared." },
    { title: "Begin the weekly slot", description: "Regular live lessons at a set hour, adjusted around rain, festivals and exams." },
  ],

  whyPoints: [
    { title: "Matched on the exact course", description: "We look for a tutor who has taught your child's subject and level, not a general IB or IGCSE teacher." },
    { title: "Honest about online only", description: "Tura lessons are live video. We say clearly that nobody visits the house." },
    { title: "Trial before commitment", description: "Your child works a real problem first, and you decide after seeing the teaching." },
    { title: "Academic integrity", description: "Tutors coach coursework, the Extended Essay and TOK but never write them." },
    { title: "Clear written progress", description: "A short note after each lesson and a fuller review every few weeks." },
    { title: "Flexible and independent", description: "No long contract, easy pauses, and a quick change of tutor if the fit is off." },
  ],

  faqs: [
    {
      question: "Can we get IB or IGCSE home tuition in Tura?",
      answer:
        "You can get online home tuition, but not home visits. Tutors do not travel to Tura, and in-person tuition runs only in Gurugram and parts of Delhi NCR. Your child takes a live one-to-one lesson at home on a laptop, with the tutor on video and a shared whiteboard, which works well for exam preparation.",
    },
    {
      question: "How do I find an IB tutor in Tura?",
      answer:
        "Tell us the programme, subject, level and school, and we propose tutors who have taught that course. Because specialist IB teachers are scarce in the Garo Hills, the tutor joins from elsewhere in India by video. You start with a free lesson, then agree a weekly slot and a rate confirmed in writing.",
    },
    {
      question: "Are there IB or Cambridge schools in Tura?",
      answer:
        "We could not confirm any in Tura, so we name none. The nearest school with a confirmed Cambridge link is in Guwahati. Families here often use boarding schools elsewhere, relocate or prepare privately, and rely on online tutors for the specialist subjects their local schools do not teach.",
    },
    {
      question: "What does IB and IGCSE tuition cost in Tura?",
      answer:
        "The rate depends on level, subject, tutor experience and weekly hours, and we confirm it in writing before the trial. We publish no price list because HL Chemistry and MYP English are not priced alike. Online lessons avoid the long road to Guwahati, so the fee covers teaching time.",
    },
    {
      question: "Can my child move from MBOSE or CBSE to IGCSE?",
      answer:
        "Yes, and Class 8 or 9 is the easiest time. Because English is already the medium at many Tura schools, the language step is small. The real adjustments are command words, extended written answers and the order of topics, which a tutor can map in the first few weeks.",
    },
    {
      question: "Which IB subjects are most in demand from Tura?",
      answer:
        "Biology, Chemistry, English and Mathematics lead, matching students who aim at medicine, life sciences and humanities overseas. Economics and Psychology follow. We can also supply Hindi tutors for language-acquisition courses, which suit students who already speak Hindi alongside English and Garo.",
    },
    {
      question: "Do tutors write the IA, Extended Essay or TOK essay?",
      answer:
        "No, and they are not permitted to. Tutors explain criteria, help choose a manageable question, review drafts for clarity and teach method. The data, argument and writing must be your child's own, since authenticity checks apply and a breach can put the whole qualification at risk.",
    },
    {
      question: "What happens in the free trial class?",
      answer:
        "Your child works through a topic they choose with the proposed tutor, live on video, with no payment or obligation. You then receive a short written note on what was covered and what we suggest next. If the match does not feel right, we offer another tutor before any plan starts.",
    },
    {
      question: "What internet and equipment do we need in Tura?",
      answer:
        "A laptop or tablet with a camera and microphone and a connection that can carry video. Because signal can vary with weather and locality, keep a mobile hotspot as a second route. For maths and science, a stylus tablet is ideal, but paper shown to the camera also works.",
    },
    {
      question: "Are lessons possible on Sundays?",
      answer:
        "They are possible, but we plan around the fact that many Tura households keep Sunday mornings for church. Most families choose a weekday afternoon or evening and a Saturday slot instead. If a Sunday hour is helpful, say so in your brief and we will look for a tutor who can offer it.",
    },
    {
      question: "Can my child sit IGCSE privately from Tura?",
      answer:
        "Yes, through a Cambridge-registered centre that takes private candidates, which will likely be in Guwahati or another city. Registration closes months before the series and practical papers are replaced by written alternatives. We can plan revision to the centre's dates, though booking the centre is for the family.",
    },
    {
      question: "Is the IB accepted for admission in India?",
      answer:
        "Yes. The Association of Indian Universities treats the IB Diploma as equal to Class 12, and IB students apply for central universities through CUET-UG. Some courses ask for particular subjects, and JEE or NEET eligibility depends on subjects taken and current rules, so read each exam's bulletin.",
    },
    {
      question: "When should IB Diploma tuition begin?",
      answer:
        "Begin in the first term of Class 11, especially for Mathematics, Chemistry and Biology. The content builds continuously over two years, and internal assessments begin early. A Class 12 start leaves little room for timed papers before predicted grades go to universities.",
    },
    {
      question: "What happens if rain or a power cut interrupts a lesson?",
      answer:
        "We reschedule it. The Garo Hills monsoon can disrupt electricity and broadband, so we agree in advance on a hotspot, a charged laptop and a make-up slot. Missed lessons due to outages are moved, not charged twice, and we keep extra buffer weeks before the November exam series.",
    },
    {
      question: "How do I start from Tura?",
      answer:
        "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board, subject, level, current grade and the hours that suit you. You receive a shortlisted tutor, a trial slot and a written rate. Nothing is charged until you have seen the first lesson and chosen to continue.",
    },
  ],

  internalLinks: [
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel subjects, tiers and exam sessions." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, board and experience." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the core and internal assessments." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition explained." },
    { label: "IB Maths guidance", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI and preparing for each." },
    { label: "Admissions and test prep", href: "/admissions/test-prep/", description: "Support around CUET, JEE, NEET and overseas tests." },
    { label: "IB and IGCSE tutoring in Guwahati", href: "/guwahati/", description: "The regional hub with the nearest Cambridge link." },
    { label: "IB and IGCSE tutoring in Shillong", href: "/shillong/", description: "Online matching for the Meghalaya capital." },
    { label: "IB and IGCSE tutoring in Kolkata", href: "/kolkata/", description: "Tutors for the larger eastern hub of IB and IGCSE schools." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and book a free trial lesson." },
  ],

  closingHeading: "Book a free IB or IGCSE trial class from home in Tura",
  closingBody:
    "Send the programme or board, the subject and level, the school or plan and the days that are realistic around rain and church on Sundays. We reply with a tutor who has taught the course, a trial time on video and a written rate, and nothing is charged until you have seen the first lesson. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",

  geo: { latitude: 25.514, longitude: 90.2029 },
  alternateNames: ["Tura Meghalaya", "Tura Garo Hills"],
  wikipedia: "https://en.wikipedia.org/wiki/Tura,_Meghalaya",
  stripSchools: [],
};
