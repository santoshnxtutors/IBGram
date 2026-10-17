import type { CitySeoPage } from "../types";

/**
 * Samana (Patiala district, Punjab). No IB or Cambridge/Edexcel school could be confirmed in Samana or in Patiala,
 * so stripSchools is empty. Clusters reuse Mohali, Chandigarh, Ludhiana and Jalandhar names already verified on
 * neighbouring pages and say plainly that local options are limited. Online only; no home visits.
 */
export const samana: CitySeoPage = {
  slug: "samana",
  countryName: "Samana",
  countryNameLong: "Samana, Punjab",
  demonym: "Samana",
  state: "Punjab",
  stateCode: "IN-PB",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and weekend slots that sidestep winter fog, post-harvest smoke weeks and wedding-season calendars",
  lastUpdated: "2026-09-21",

  title: "IB & IGCSE Tutors in Samana, Punjab | Online Tuition",
  metaDescription:
    "Private online IB and IGCSE tuition for Samana, Patiala district: DP, MYP, PYP and Cambridge or Edexcel IGCSE, taught one to one at home. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition at Home in Samana",
  heroEyebrow: "IB & IGCSE TUITION FOR SAMANA AND PATIALA-DISTRICT FAMILIES",
  heroSubtitle:
    "Families in Samana who search for home tuition for an IB or IGCSE student meet a simple fact: tutors for these boards are not sitting in the next lane. Lessons here are private and live over video, taught to your child at your own table, with no tutor travelling to Samana and no daily run to Patiala or Mohali for a class.",
  primaryKeyword: "IB and IGCSE tutors in Samana",
  imageAltText: "A Samana student checking IB Mathematics calculus answers with an online tutor during a live video lesson",
  secondaryKeywords: [
    "IB tutor Samana",
    "IGCSE tutor Samana",
    "IB home tuition Samana",
    "IGCSE home tuition Samana",
    "IB private tuition Samana",
    "IB Maths tutor Samana",
    "IGCSE Maths tutor Samana",
    "IB Physics tutor Samana",
    "IB Chemistry tutor Samana",
    "IB Biology tutor Samana",
    "IB DP tutor Samana",
    "IB MYP tutor Samana",
    "IB PYP tutor Samana",
    "IGCSE online tuition Samana",
    "online IB tutor Samana",
    "IB tutor Samana Punjab",
    "IGCSE tutor Samana Patiala",
    "IB tutor Patiala district",
    "IB tutor Patran",
    "IB tutor Bhawanigarh",
    "IB tutor Ghagga",
  ],

  heroTrustPoints: [
    "Each tutor is picked for your child's exact IB course and level or IGCSE syllabus code",
    "Private lessons taken at home in Samana over live video, with no home visits",
    "A free trial class, then a written note after every lesson",
    "Independent of every school, university and exam board named or unnamed",
  ],
  heroStats: [
    { value: "IB + IGCSE", label: "Both programmes" },
    { value: "Punjabi, Hindi, English", label: "Language subjects available" },
    { value: "One to one, live", label: "How every lesson runs" },
    { value: "Free trial", label: "No fee to start" },
  ],

  intro: {
    heading: "IB and IGCSE help for Samana, where the nearest classroom is a journey away",
    paragraphs: [
      "Samana is a grain-market town in the south-west of Patiala district, close to the Haryana border and a short distance from Sangrur and Bhawanigarh. It has a long history, busy mandis, rice mills and a large base of farming, trading and government-service families. What it does not have is a school we can confirm for the IB or Cambridge and Pearson Edexcel IGCSE, and Patiala itself has none that we can verify either.",
      "For a student here, online lessons fill that gap. A tutor who has taught the same syllabus appears on video, solves problems live on a shared whiteboard and returns written comments on homework between sessions. The student sits at home, in a room that may also be the family's study, in the thick of Punjab's rhythm of mandi seasons and wedding dates, and learns at a pace planned for one person.",
      "To be blunt about the format: IB Gram tutors do not visit homes in Samana. Home-visit tuition exists only in Gurugram and parts of Delhi NCR. When parents here type home tuition into a search box, what they should expect from us is a live private lesson delivered to the home by screen.",
      "IB Gram is independent and is not associated with the International Baccalaureate, Cambridge, Pearson Edexcel, Punjabi University or any school mentioned. Tutors teach and mentor, and they never write an Internal Assessment, Extended Essay, TOK essay or coursework on a student's behalf.",
    ],
    bullets: [
      "IB PYP, MYP and Diploma tutoring across subject groups",
      "Cambridge and Pearson Edexcel IGCSE at both tiers",
      "Online private lessons only; home visits run solely in Gurugram and parts of Delhi NCR",
      "Free trial lesson first, then a written rate before any booking",
    ],
  },

  programmesIntro:
    "Samana families often come to IB or IGCSE because a relative lives in Canada, Australia or the UK, because the child wants an overseas degree, or because a parent thinks the exam style will suit the child better. Here are the four IB stages and what a tutor does at each.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Children work through units of inquiry and finish with the PYP Exhibition in place of a formal test. A tutor at this age builds reading fluency, comfort with numbers and the ability to say what they think and why.",
      countryNote:
        "For a Samana child who speaks Punjabi at home, relaxed English conversation and shared picture-book reading before a move to a PYP classroom matter more than any worksheet drill.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are graded on four criteria and the stage ends with the Personal Project. Students have to plan, justify, reflect and apply what they know to fresh situations.",
      countryNote:
        "A student arriving from a PSEB or CBSE classroom in Samana usually finds the lab-report style of science and the reflective journal the biggest adjustments in the first year.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, TOK, the Extended Essay and CAS, with three subjects at Higher Level and three at Standard Level. The final papers are sat in May and November.",
      countryNote:
        "Punjab's overseas connections mean many Diploma students aim at Canada, the UK or Australia, so Maths, sciences, Economics and Business are in steady demand from this district.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Selected Diploma courses sit alongside a career-related study and a reflective project. It is rare in Punjab, so tutors mostly help with the academic courses within it.",
      countryNote:
        "A student linked to Samana who joins a CP elsewhere can anchor the reflective project in something true to home, such as grain marketing, farm mechanisation or small-town rice processing.",
    },
  ],

  subjectsIntro:
    "Subjects are matched by course and level, because Maths AA HL contains proof and Paper 3 tasks that Maths AI SL avoids, and Physics HL uses calculus that SL sidesteps. After that, we look for a lesson hour that works around the school day, evening power supply and fog-season travel.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof, with the extended HL Paper 3 problems and a well-scoped exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator technique, with a data-led exploration chosen early." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics, along with uncertainty handling for the investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, kinetics, equilibrium and organic synthesis, with the calculations that repeat every session." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics and ecology, with practice on graph questions and structured long answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy, current evidence and the internal commentaries." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reasoning, finance calculations and the research project." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen text analysis and comparative essays, for students who think first in Punjabi." },
    { name: "IB Punjabi A and B", levels: "HL / SL", description: "Literary study or language acquisition in Punjabi, often a confident scoring area for students who speak it at home." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Receptive and productive skills and the oral, for students who use Hindi at school or at home." },
    { name: "IB Geography", levels: "HL / SL", description: "Food, water and population themes, with agricultural cases that Punjab students know close up." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Soil, water and pollution systems, with groundwater and crop-residue examples from the region." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, object-oriented programming and a documented solution for the internal task." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, evaluation and the experimental design task." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Turning knowledge questions into reasoned arguments and keeping the exhibition focused." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Choosing a researchable question and using supervisor meetings well. Coaching only; the essay is the student's own." },
    { name: "IB MYP Sciences & Maths", levels: "MYP 1-5", description: "Designing fair tests for criteria B and C and building the algebra that the Diploma needs." },
    { name: "IB MYP Language & Literature", levels: "MYP 1-5", description: "Analytical writing in English and an up-to-date Personal Project journal." },
  ],

  igcseSubjectsIntro:
    "IGCSE planning begins with a syllabus code, a tier and an exam series. Samana students usually enter as private candidates through a centre in a larger city, so we ask early about the centre and the series, and build the revision calendar backwards from them.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra and geometry, calculator skills and method marks on multi-step questions." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and trigonometry, a helpful lead-in to IB Maths AA or A Level." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy, electricity and waves, with the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, electrolysis, reaction rates and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Enzymes, transport, inheritance and ecology, with unfamiliar data questions." },
    { name: "IGCSE Combined & Coordinated Sciences", levels: "0653 / 0654", description: "A compact route through three sciences in a single award." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative and descriptive composition and summary." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, listening and speaking with fluency building." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension, letters and composition at the student's pace." },
    { name: "IGCSE Punjabi as a Second Language", levels: "Grade 9-10", description: "Reading and writing tasks in the language most families speak at home." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, data response and the evaluation step." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case studies and finance calculations without excess theory." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, trace tables and programming for students with limited lab time." },
  ],

  regionsTitle: "Samana and nearby places where our online tutors support families",
  regionsIntro:
    "An online tutor does not care whether your house is inside the old town or out on a farm road, but the household's week does matter. A mandi-trade family plans around the arhtiya season, a government-service family around office hours and a farm family around sowing and harvest. We settle lesson times after hearing how your week really runs.",
  regions: [
    { name: "Samana town centre", note: "The bazaar core near the main chowk, with trading and professional families asking about overseas study." },
    { name: "Old Samana", note: "Older lanes with multi-generational homes, where shared rooms make a quiet study corner worth planning." },
    { name: "Patiala Road area", note: "A road-side belt towards Patiala, used by families who make regular trips to the city for shopping and schooling." },
    { name: "Grain market (Anaj Mandi) surroundings", note: "A commercial zone where arhtiya and trading families are busiest at procurement time, affecting evening availability." },
    { name: "Sangrur Road side", note: "Newer colonies on the western side, with households whose children may attend schools in Sangrur or Patiala." },
    { name: "Bhawanigarh", note: "A neighbouring town in Sangrur district, close enough that families move between the two for school and work." },
    { name: "Patran", note: "A town to the north-east with agricultural and transport households and steady interest in foreign study." },
    { name: "Ghagga", note: "A border-side town towards Haryana, where students may travel longer to school and benefit from lessons at home." },
    { name: "Bhunerheri", note: "A nearby block town with families who depend on the Patiala road for most of their educational needs." },
    { name: "Village belts around Samana", note: "Farm settlements where study fits around paddy and wheat schedules and where broadband quality is worth checking first." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service. Schools are named only to show where IB and IGCSE classrooms sit relative to Samana, and we have no tie to them, to the International Baccalaureate, Cambridge or Pearson Edexcel. We could not confirm such a school in Samana or Patiala.",
  schoolClusters: [
    {
      city: "Nearby: Mohali and Chandigarh",
      note: "The Mohali-Chandigarh area is the closest cluster with confirmed international-curriculum schools, and families considering a move or boarding usually look here first.",
      schools: ["Oakridge International School, Mohali", "Strawberry Fields High School, Chandigarh (IB)", "The British School, Chandigarh"],
    },
    {
      city: "Nearby: Ludhiana",
      note: "Ludhiana is a larger option to the west, with two campuses confirmed on pages for other Punjab towns.",
      schools: ["Britannica International School, Ludhiana", "Harvest International School, Ludhiana"],
    },
    {
      city: "Nearby: Jalandhar",
      note: "Jalandhar adds one more confirmed school, for families already connected to the Doaba side of the state.",
      schools: ["Cambridge International School, Jalandhar"],
    },
    {
      city: "Samana and Patiala",
      note: "We could not confirm an IB or Cambridge IGCSE school here, so local choice is limited and we name none.",
      schools: [],
    },
  ],

  modesIntro:
    "Tutors do not come to homes in Samana, because in-person tuition at IB Gram exists only in Gurugram and parts of Delhi NCR. All lessons are live, private and taken from home. Three patterns suit most families, depending on the subject and the nearness of exams.",
  modes: [
    {
      title: "Weekly live video lessons",
      description:
        "A fixed weekly hour with one tutor, handwritten working on a shared whiteboard, and a summary note parents can read afterwards.",
      bullets: [
        "One tutor and a regular slot",
        "Steps worked out on screen",
        "Written note after each class",
        "No daily trip to Patiala or Mohali",
      ],
    },
    {
      title: "Exam-season and deadline intensive",
      description:
        "A heavier block of timed papers, marked feedback and internal assessment milestones ahead of mocks and the May and November series.",
      bullets: [
        "Past papers by topic",
        "Extra hours where marks slip",
        "Useful before predicted grades",
        "Reduced after the exams",
      ],
    },
    {
      title: "Short class and corrected practice",
      description:
        "One brief live session combined with practice questions marked between meetings, helpful when weddings, harvest or fog disturb the week.",
      bullets: [
        "One live session a week",
        "Comments on photographed work",
        "Handles disrupted weeks",
        "Easy to step up later",
      ],
    },
  ],

  sections: [
    {
      heading: "Who looks for IB and IGCSE tuition in Samana, and what are their schools?",
      paragraphs: [
        "Samana's school landscape is made up of PSEB-affiliated schools, CBSE institutions and private English-medium schools, with a number of well-regarded names in the wider Patiala area. We could not confirm an IB or Cambridge IGCSE school in Samana or in Patiala, and so we list none here. Anyone studying these programmes from this district is either boarding elsewhere or studying privately.",
        "The enquiries come from recognisable families. Parents with siblings or children in Canada, Australia or the UK, for whom an international qualification is a natural bridge. Doctors, lecturers and officers in Patiala district whose children want a broader subject mix. Trading and mandi families thinking about business degrees abroad. And parents who see that an IB-style paper rewards explanation over memory and think their child would flourish under it.",
        "The routes they take also differ. Some children are enrolled in a Mohali or Chandigarh school and need help over holidays. Some will move after Class 10. Some sit IGCSE as private candidates and want a tutor who knows the tier, the paper codes and the practical-skills component from the inside.",
        "This page states the limits openly because a town of this size does not gain from being described as an international-school hub. What it does have are families who plan carefully and are willing to work hard.",
      ],
      bullets: [
        "No IB or Cambridge school in Samana or Patiala could be confirmed",
        "Nearest confirmed campuses are in Mohali, Chandigarh, Ludhiana and Jalandhar",
        "Overseas-linked, professional and trading families make up most enquiries",
        "Boarding students and private IGCSE candidates form a steady group",
      ],
    },
    {
      heading: "PSEB, CBSE, IB or IGCSE: what should a Samana family weigh?",
      paragraphs: [
        "The Punjab School Education Board and CBSE offer a direct path to JEE Main, NEET and the state entrance routes, and are well suited to students whose goal is an engineering or medical seat in India. IB and IGCSE suit students who want to study abroad, who may relocate, or who are more at ease with questions that ask them to reason than with ones that ask them to recall.",
        "Look at the paper to see the difference. A PSEB question will often test a definition or a textbook problem. An IB or Cambridge question will give a new context and ask for analysis, comparison or judgement. CBSE falls between, with more competency-based questions each year. None of these is easier; they test different habits.",
        "For students who studied in Punjabi medium in the early years, the English command words are a separate skill. Terms such as explain, justify and evaluate mean specific things to an examiner, and learning them early gives back marks that have nothing to do with knowledge.",
        "The table lays out the main differences.",
      ],
      table: {
        caption: "PSEB, CBSE and IB / IGCSE for Samana families",
        columns: ["Point", "PSEB", "CBSE", "IB / IGCSE"],
        rows: [
          ["Medium", "Punjabi or English", "English with Hindi", "English, with Punjabi or Hindi as language subjects"],
          ["Question style", "Textbook recall and standard problems", "Recall plus a growing share of application", "Unfamiliar contexts and reasoned evaluation"],
          ["Common entrance route", "JEE, NEET, state counselling", "JEE, NEET, CUET-UG", "CUET-UG and overseas; JEE and NEET depend on eligibility"],
          ["Subject structure", "Stream-based, fixed groups", "Stream with limited choice", "Six IB subjects, or a wide IGCSE range"],
          ["Closest classroom", "Samana and Patiala district", "Samana and Patiala", "Mohali, Chandigarh, Ludhiana or boarding"],
        ],
      },
    },
    {
      heading: "What decides the cost of IB and IGCSE tuition in Samana?",
      paragraphs: [
        "Four things: the level of the course, how closely the tutor's teaching history matches it, how many hours you book each week, and whether the help is steady or a burst before exams. A former examiner for HL Mathematics costs more than someone helping with MYP reading. The rate comes in writing before the free trial, and there is no public price list.",
        "Online lessons remove costs that Punjab families in smaller towns know well. A weekly class in Mohali or Chandigarh means fuel, tolls, parking and most of a day, often on roads that are hazardous in winter fog. A home lesson asks only for a laptop, a desk and a working connection.",
        "A low quote can mislead. A tutor without international-curriculum experience may charge less per hour but spend months discovering what the paper rewards. Fewer hours with someone who has taught the course will often be the cheaper route across a year.",
        "We encourage three questions to any provider: who will teach, which courses have they taught, and what happens if the fit is wrong. You get answers to all three before any money is paid.",
      ],
      bullets: [
        "Course level and tutor experience move the rate most",
        "Weekly hours and exam proximity adjust it",
        "No fuel, toll or fog-season travel for a home lesson",
        "A written rate is shared before the free trial",
      ],
    },
    {
      heading: "Is an online tutor better than a Chandigarh class, a Patiala coaching centre or self-study?",
      paragraphs: [
        "Patiala has coaching for school subjects and entrance exams, and those centres serve their aims well. For IB and IGCSE, they rarely have the subject knowledge. Chandigarh and Mohali have that knowledge, but Samana is a long road away. Self-study costs nothing and gives a student no one to mark extended answers with a strict eye.",
        "Online one-to-one tutoring fits a precise gap: the student needs someone who has taught the exact course, and there is no such person nearby. The lesson is private, the pace follows the child, and returned work shows where marks were lost and how to win them back.",
        "Connection is the practical concern. Summer storms and occasional power failures can disrupt a class, so a mobile hotspot and a charged laptop are sensible back-ups. We test the set-up before the first lesson and reschedule any session that is lost.",
        "This table sets the four routes side by side.",
      ],
      table: {
        caption: "Routes to IB or IGCSE help for a student in Samana",
        columns: ["Route", "Syllabus knowledge", "Personal feedback", "Practical points"],
        rows: [
          ["Online one-to-one tutor", "High, chosen for course and level", "Detailed and individual", "Needs a stable connection"],
          ["Class in Mohali or Chandigarh", "Usually high", "Shared in a group", "Long road trips, fog risk in winter"],
          ["Patiala coaching centre", "Low for IB and IGCSE", "Varies", "Good for Indian entrance exams, not for these boards"],
          ["Self-study from past papers", "Only what the student finds", "Little without a marker", "Low cost, weak on long answers"],
        ],
      },
    },
    {
      heading: "How do fog, post-harvest smoke and wedding season shape the Samana study year?",
      paragraphs: [
        "Punjab's seasons push and pull at a study plan. Summers are hot and dry, with May and June often above 40 degrees, and the monsoon arrives in July with heavy spells. After the paddy harvest in October and November, smoke from crop residue can hang over the region, making the air unpleasant and outdoor travel less welcome.",
        "Winter brings dense fog from December into January, and with it cancelled buses, late trains and early school closures. An online lesson is unaffected by the road, which is one of its quiet advantages here. Families also plan around the long cold evenings, when a warm study room is worth more than another hour at a desk in the cold.",
        "The festival and wedding calendar is full: Lohri in January, Baisakhi in April, Dussehra and Diwali in the autumn, Gurpurab in November, and a long wedding season in winter that brings guests and late nights. Tutors plan around known dates with families in advance so that the syllabus stays steady.",
        "The table is a planning guide, not an official timetable, since each board fixes its own dates.",
      ],
      table: {
        caption: "A Samana year for IB and IGCSE study",
        columns: ["Period", "Conditions in Samana", "Sensible focus"],
        rows: [
          ["March to June", "Baisakhi, wheat harvest, heat, IB May and IGCSE May-June papers", "Final revision at cooler hours, then rest"],
          ["July to September", "Monsoon rains, new academic year", "New content and internal assessment planning"],
          ["October to November", "Paddy harvest smoke, Dussehra, Diwali, Gurpurab, the November series", "Timed papers before festival weeks"],
          ["December to February", "Fog, Lohri, weddings, mocks and university applications", "Mocks, predicted-grade prep, overseas forms"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Samana go next?",
      paragraphs: [
        "The IB Diploma is accepted by universities across the UK, Canada, Australia, the US and much of Europe, which is where many Punjab families look. In India, the Association of Indian Universities treats it as equal to Class 12, and CUET-UG is open to IB-qualified candidates. IGCSE alone is a Class 10 equivalent, so most students proceed to A Levels, the Diploma or Class 11 elsewhere.",
        "Within Punjab and the neighbouring states, students look at Thapar Institute in Patiala, Punjabi University, Chitkara, Chandigarh University, Panjab University, IIT Ropar and IISER Mohali. Whether an IB or IGCSE student meets the requirements for JEE or NEET in a given year depends on that year's notice and on the subjects studied, so it is verified and not assumed.",
        "Overseas applications should begin in the first term of Class 12, since they depend on predicted grades and have early deadlines. Maths, Physics and Chemistry at Higher Level keep engineering open. Economics and Business suit commerce and management routes.",
        "Tutors advise on subject choice and study plans only. Admissions are decided by universities, and we promise no outcome.",
      ],
      bullets: [
        "AIU equivalence applies to the IB Diploma for Indian universities",
        "CUET-UG accepts IB-qualified applicants",
        "JEE and NEET eligibility is verified each year against the official notice",
        "Overseas applications use predicted grades and open early in Class 12",
      ],
    },
    {
      heading: "Which IB Maths and science choices suit a Samana student with overseas plans?",
      paragraphs: [
        "Maths Analysis and Approaches is the standard choice for students who enjoy algebra and calculus, and most engineering-bound applicants pick it. Applications and Interpretation is built around statistics and modelling and suits students heading for economics, business or social science degrees. The two differ so much at Higher Level that the decision ought to follow the degree plan.",
        "Physics HL uses calculus, so pairing it with Maths AA is common. Its internal assessment is an investigation that the student designs, and a student with limited lab access should plan early for data that can really be gathered or simulated. A tutor can help shape a realistic question and handle uncertainty correctly.",
        "Chemistry HL rewards regular practice on equilibrium, energetics and organic routes, while Biology HL asks for patient graph reading and tidy long answers. Students aiming at medicine abroad often take both at Higher Level, and they need a tutor who can cover them without the two subjects blurring.",
        "On internal assessments, the tutor explains the criteria, tests the plan and checks the student's grasp of the method. The idea, data and writing are the student's own.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and how do private candidates in Samana enter?",
      paragraphs: [
        "Core papers cap the highest grade in many subjects, while Extended papers open the full range and are the normal base for A Level or the IB. Mathematics and the three sciences come at both tiers. A student uncertain about the tier should sit a timed Extended paper under exam conditions, since marks say more than opinions.",
        "A sensible Samana timetable might pair Mathematics, Physics, Chemistry, Biology and English as a second language with Punjabi or Hindi as a second language, and Economics or Business Studies for commerce-minded students. Adding Additional Mathematics helps anyone expecting to take Maths AA or A Level Mathematics.",
        "Private candidates handle logistics themselves. They need a Cambridge or Pearson Edexcel centre that accepts external entries, typically in Chandigarh, Mohali or Ludhiana, plus entry deadlines and arrangements for the practical component. Settling these at the start of Grade 9 keeps the calendar realistic.",
        "What lifts IGCSE results is plain: show all the working, read the command word, and keep an eye on the clock. Steady weekly practice on those points outperforms a pile of unmarked papers in the final month.",
      ],
      bullets: [
        "Extended tier is the usual base for IB or A Level entry",
        "Additional Mathematics 0606 makes the move to IB Maths smoother",
        "Private candidates should confirm a centre and deadline early",
        "Punjabi or Hindi second-language papers can strengthen the profile",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects as well as Cambridge and Pearson Edexcel IGCSE to Samana students. Matching starts with syllabus, level and exam series, and then with a lesson hour that suits your home, since every class is online.",

  process: [
    { title: "Share the brief", description: "Send the programme or board, subject and level, present marks and the hours that work in Samana." },
    { title: "Review suggested tutors", description: "We propose tutors who have taught that course and explain each recommendation." },
    { title: "Take a free trial", description: "Your child studies a real topic with a tutor on video, without fee or obligation." },
    { title: "Fix the first-month plan", description: "The tutor sets out topics, the weekly pattern and how you will hear about progress." },
    { title: "Start weekly lessons", description: "A regular slot each week, adjusted around exams, fog days and family events." },
  ],

  whyPoints: [
    { title: "Matched to the course", description: "We look for someone who has taught your child's subject and level, not a general IB or IGCSE teacher." },
    { title: "Direct about format", description: "Samana lessons are live online only, and we say so first." },
    { title: "Trial first", description: "Your child works a real problem before you commit to anything." },
    { title: "Integrity of assessed work", description: "Tutors coach IAs, the Extended Essay and TOK and never write them." },
    { title: "Parents stay informed", description: "A short note follows every lesson and a fuller review follows every few weeks." },
    { title: "Flexible terms", description: "No long contract, easy pauses and a simple change of tutor when needed." },
  ],

  faqs: [
    {
      question: "Is IB or IGCSE home tuition available in Samana?",
      answer:
        "Home tuition is available online, but tutors do not visit your house. In-person lessons run only in Gurugram and parts of Delhi NCR. Your child takes a live private lesson at home on a laptop, with the tutor on video and a shared whiteboard, which gives focused one-to-one teaching for exam work without any travel.",
    },
    {
      question: "How do I find an IB tutor in Samana?",
      answer:
        "Send us the course, level and recent marks, and we propose tutors who have taught that syllabus. You then book a free video trial. As the lessons are online, your choice is not limited to tutors living in Samana, which matters when the nearest teacher with IB experience may be in another city altogether.",
    },
    {
      question: "Are there IB or Cambridge schools in Samana?",
      answer:
        "We could not confirm an IB or Cambridge IGCSE school in Samana or Patiala, so we name none. The closest we can verify are in Mohali, Chandigarh, Ludhiana and Jalandhar. Local schools follow PSEB or CBSE. Online tuition therefore helps families whose child studies an international syllabus elsewhere or as a private candidate.",
    },
    {
      question: "What does IB and IGCSE tuition cost in Samana?",
      answer:
        "The rate depends on the course level, the tutor's experience with that exact syllabus, weekly hours and proximity of exams. We publish no price list. You receive a written rate before the free trial, so the figure is known in advance. Home lessons also avoid the fuel, toll and time costs that a class in Mohali or Chandigarh adds.",
    },
    {
      question: "Can my child move from PSEB to IGCSE?",
      answer:
        "Yes, commonly after Class 8 or Class 10. The hardest changes are English command words, extended written answers and practical-skills papers. A tutor can prepare the student and then set a past Cambridge or Edexcel paper so you see readiness in marks. Punjabi and Hindi second-language papers exist for continuity with the home language.",
    },
    {
      question: "Which IB subjects do Samana students ask for most?",
      answer:
        "Mathematics, Physics and Chemistry lead, followed by Biology, Economics and Business Management. English A support and Punjabi or Hindi language subjects are also regular requests. If a subject combination looks too heavy, we say so and suggest alternatives that protect overall results instead of crowding the timetable.",
    },
    {
      question: "Do tutors write the IA, Extended Essay or TOK essay?",
      answer:
        "No, tutors never write assessed work. They explain criteria, help narrow a question, read drafts and raise objections, but ideas, data and wording must be the student's own. Work that is not the student's risks a malpractice finding from the IB and makes the final mark meaningless. If a family asks us to cross that line, we say no.",
    },
    {
      question: "How does the free trial lesson work?",
      answer:
        "The trial is a live video session with a tutor matched to your child's course. The tutor works through a real topic, sees how your child thinks and suggests a plan. No fee is charged and you are not obliged to continue. If the match feels wrong, we arrange another trial with a different tutor before anything is billed.",
    },
    {
      question: "What equipment and internet do we need?",
      answer:
        "A laptop or tablet with a camera, headphones and a reliable connection are enough, plus paper and a pen for handwritten working. A phone hotspot is a good back-up for outages. The whiteboard runs in a browser, so nothing special has to be installed. We run a quick set-up check before the first class.",
    },
    {
      question: "Can my child sit IGCSE privately from Samana?",
      answer:
        "Yes, through a Cambridge or Pearson Edexcel centre that accepts external candidates, usually in Chandigarh, Mohali or Ludhiana. The family confirms the centre, entry deadlines and practical arrangements early. Tutors then plan the preparation around the chosen series, ideally beginning at the start of Grade 9.",
    },
    {
      question: "Is the IB accepted for admission in India?",
      answer:
        "Yes. The Association of Indian Universities recognises the IB Diploma as equivalent to Class 12, and CUET-UG is open to IB-qualified students. Eligibility for JEE and NEET depends on each year's official rules and on the subjects taken, so check the current notice before choosing subjects. Overseas universities widely accept the Diploma.",
    },
    {
      question: "Can lessons work around fog, harvest smoke and wedding season?",
      answer:
        "Yes, and online delivery already avoids the worst of the road problems. Fog, smoke and cold evenings do not stop a live lesson, and sessions can move around wedding dates, Lohri, Baisakhi and Diwali. The shorter live lesson with marked practice is a good option for crowded weeks.",
    },
    {
      question: "What if a storm or power cut interrupts a lesson?",
      answer:
        "The session is rescheduled, not lost. If a storm or outage cuts the connection, the tutor can finish the class later or set marked practice to do offline. A phone hotspot and a charged laptop make this uncommon. In the stormiest weeks, keeping a spare slot prevents the syllabus from falling behind.",
    },
    {
      question: "When should IB Diploma tuition begin?",
      answer:
        "Many students start in the summer before Class 11, when foundations in Mathematics and the sciences are easiest to secure. Others begin after first internal exams show gaps. Early help supports pacing, the Extended Essay and internal assessments, which take months, so beginning before pressure builds is usually wiser than starting once it has.",
    },
    {
      question: "How do I start from Samana?",
      answer:
        "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board or programme, subject, level and the hours that suit you. We reply with suggested tutors and a written rate and arrange a free trial. Afterwards you decide whether to begin weekly lessons, with nothing due in advance.",
    },
  ],

  internalLinks: [
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "Subject codes, tiers and exam series for Cambridge and Edexcel." },
    { label: "Tutor profiles", href: "/tutors/", description: "Browse tutors by subject and board." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, levels and the Diploma core explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition." },
    { label: "IB Maths guidance", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Admissions and test prep", href: "/admissions/test-prep/", description: "Help around CUET, JEE, NEET and overseas tests." },
    { label: "IB and IGCSE tutoring in Patiala", href: "/patiala/", description: "The district headquarters, about an hour's drive away." },
    { label: "IB and IGCSE tutoring in Sangrur", href: "/sangrur/", description: "A neighbouring Punjab town with a similar school picture." },
    { label: "IB and IGCSE tutoring in Nabha", href: "/nabha/", description: "Online lessons for families in this part of Patiala district." },
    { label: "IB and IGCSE tutoring in Malerkotla", href: "/malerkotla/", description: "A nearby Punjab town served by the same online tutors." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and request a free trial lesson." },
  ],

  closingHeading: "Request a free IB or IGCSE trial lesson at home in Samana",
  closingBody:
    "Send us the board or programme, the subject and level, your child's school or plan and the hours that really are free after school, shop or field. You will receive a tutor who has taught the course, a video trial slot and a written rate, and nothing is billed until the first lesson is done. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",

  geo: { latitude: 30.1500, longitude: 76.1930 },
  alternateNames: ["Samana Patiala", "Samana Punjab"],
  wikipedia: "https://en.wikipedia.org/wiki/Samana,_Punjab",
  stripSchools: [],
};
