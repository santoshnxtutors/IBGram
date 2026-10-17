import type { CitySeoPage } from "../types";

/**
 * /shahpur/ - IB and IGCSE tutoring page for Shahpur, the taluk town in Yadgir district, Karnataka
 * (not Shahabad in Kalaburagi district and not Shahabad in Hardoi, which have their own pages).
 * Online-only delivery: tutors do not visit homes in Shahpur. No IB or IGCSE school inside the town
 * could be confirmed, so stripSchools is empty and clusters reuse schools already named on published
 * Hyderabad and Bengaluru pages. Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const shahpur: CitySeoPage = {
  slug: "shahpur",
  countryName: "Shahpur",
  countryNameLong: "Shahpur, Yadgir district, Karnataka",
  demonym: "Shahpur",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and weekend slots that avoid the dry-season afternoon heat, Ugadi and Muharram holidays and the weeks around the Kannada-medium board exams",
  lastUpdated: "2026-09-21",
  geo: { latitude: 16.7000, longitude: 76.8333 },
  wikipedia: "https://en.wikipedia.org/wiki/Shahpur,_Karnataka",
  alternateNames: ["Shahapur", "Shahpur Yadgir", "Shahpur Karnataka"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Shahpur, Yadgir | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors in Shahpur, Yadgir: live one-to-one online tuition for DP, MYP, PYP and IGCSE, timed around Kalyana Karnataka heat, with a free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Shahpur, Karnataka",
  heroEyebrow: "SHAHPUR, YADGIR: IB AND IGCSE ONE-TO-ONE TUITION",
  heroSubtitle:
    "Private tuition from home for IB and IGCSE students in Shahpur, delivered as a live one-to-one video lesson on a laptop. A tutor who has taught your exact IB subject or Cambridge and Edexcel IGCSE paper is matched after a short chat with you, and the first lesson is free. Nobody travels to Shahpur: in-person visits run only in Gurugram and parts of Delhi NCR, so the town gets the same specialist a Bengaluru family would, on screen.",
  primaryKeyword: "IB and IGCSE tutors in Shahpur",
  imageAltText: "A Shahpur student in Yadgir district working through an IB Maths problem with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Shahpur",
    "IGCSE tutor Shahpur",
    "IB home tuition Shahpur",
    "IGCSE home tuition Shahpur",
    "IB private tuition Shahpur",
    "IB Maths tutor Shahpur",
    "IGCSE Maths tutor Shahpur",
    "IB Physics tutor Shahpur",
    "IB Chemistry tutor Shahpur",
    "IB Biology tutor Shahpur",
    "IB DP tutor Shahpur",
    "IB MYP tutor Shahpur",
    "IB PYP tutor Shahpur",
    "IGCSE online tuition Shahpur",
    "IB tutor Yadgir",
    "IGCSE tutor Yadgir district",
    "online IB tutor Surpur",
    "IB tuition Kalyana Karnataka",
    "Shahapur IB tutor",
  ],

  heroTrustPoints: [
    "Tutors matched to your child's actual IB subject or IGCSE paper, not to a vague 'international syllabus' label",
    "Lessons are live and online only; home visits exist just in Gurugram and parts of Delhi NCR",
    "A free trial lesson before you decide anything, with a written note after every session",
    "An independent tutoring service, not linked to the IB, Cambridge, Pearson or any school",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Primary years to Diploma and CP" },
    { value: "Cambridge + Edexcel", label: "Both IGCSE boards covered" },
    { value: "IST", label: "No time-zone gap" },
    { value: "Free trial", label: "Try a lesson before booking" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition looks like for a family in Shahpur",
    paragraphs: [
      "Shahpur is a taluk town in the north-eastern corner of Karnataka, in Yadgir district, with Surpur (Shorapur) a short distance to the south and the Krishna basin canals shaping the farming economy around it. Children here study in Kannada-medium and English-medium state board schools, in CBSE schools, and in a handful of private institutions, but we could not confirm a single school in town teaching the IB or an IGCSE. Parents who ask about IB and IGCSE tutors in Shahpur are therefore almost always planning something outside the town: a move to Hyderabad or Bengaluru, a boarding place, a Gulf posting, or a child already enrolled in an international programme online.",
      "That makes the tutor's job unusual. The student may be sitting an IB Diploma paper in a school three hundred kilometres away, or preparing for Cambridge IGCSE Mathematics as a private candidate, or catching up after a switch from the Karnataka state board. IB Gram matches a tutor to the specific subject, level and exam session, then teaches by live video with a shared digital whiteboard so that every worked step is visible to both sides at once.",
      "Home tuition in Shahpur, in the sense of a stranger arriving at the door, is something we do not offer. In-person lessons run only in Gurugram and parts of Delhi NCR. What a Shahpur family gets instead is private tuition from home: the child sits at their own desk, the tutor appears on screen, and the lesson is as personal as a one-to-one session can be. Rates are quoted in writing before anything is booked, and a trial lesson comes first.",
      "IB Gram is an independent service. It is not affiliated with the International Baccalaureate, Cambridge University Press and Assessment, Pearson Edexcel, or any school named on this page. Tutors coach concepts, exam technique and revision plans; they do not write Internal Assessments, Extended Essays, TOK essays or coursework for a student.",
    ],
    bullets: [
      "IB PYP, MYP, Diploma and Career-related Programme support",
      "Cambridge and Pearson Edexcel IGCSE at Core and Extended tier",
      "One-to-one, live, online, in Indian Standard Time",
      "Free trial lesson and a written note after each session",
      "No tutor visits in Shahpur; in-person home tuition only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Because Shahpur has no IB school of its own that we can name, the four IB programmes reach local families through relocation, boarding or distance study rather than through a classroom down the road. Each programme asks a different thing of a tutor, so the descriptions below say what the work actually involves.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-11",
      description:
        "Primary Years learning is built around units of inquiry instead of separate textbooks, and it ends in a student-led Exhibition. Nothing is externally marked, so a tutor spends the time on fluent reading, number sense and the habit of asking a question and following it through, which are the skills that carry into MYP.",
      countryNote:
        "In Shahpur this usually means a child of a family planning a transfer to Hyderabad or Bengaluru, where an IB primary school expects confident English reading and comfortable written explanations on entry.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each MYP subject is marked against four criteria rather than a single percentage, and Year 5 closes with a Personal Project. A student coming from Karnataka state board textbooks often knows the content but has never had to justify a method in writing, and that habit is what a tutor builds first.",
      countryNote:
        "Families from Yadgir district tend to ask about MYP Sciences and Individuals and Societies, where criterion-based writing differs most from the short-answer style of the SSLC board.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard Level, alongside Theory of Knowledge, the Extended Essay and Creativity, Activity, Service. Internal Assessments count towards each subject grade and the written papers arrive in the May session, so the two years are paced around drafts and past papers as much as lectures.",
      countryNote:
        "A Shahpur student on the Diploma is almost certainly studying elsewhere in term time. Online tutoring then covers the gaps: Maths AA, Physics and Chemistry problem practice, and English A paper technique.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme combines at least two Diploma courses with a career-related study and a reflective project. Very few Indian schools offer it, so the demand is small, but the Diploma-level subjects inside it need the same careful coaching.",
      countryNote:
        "Enquiries from Shahpur about CP are rare. When one arrives we focus on the two Diploma subjects the student has actually chosen and leave the career-related study to the school.",
    },
  ],

  subjectsIntro:
    "Telling a tutor that a student is 'doing IB Physics' says very little. Level, school, exam session and the topic that currently hurts all change the plan. These are the IB subjects Shahpur students ask for most, with the way each one is usually approached.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions and proof-style reasoning for students aiming at engineering, economics or pure science. Tutors drill the Paper 1 no-calculator habit alongside Paper 2 technology use." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology-led problems suited to biology, business and social-science routes. Calculator fluency and clear written interpretation carry most of the marks." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, fields, waves and the data-based questions that trip students who learned physics only as formulae. Practical-skills coaching supports the Internal Assessment investigation." },
    { name: "Chemistry", levels: "SL / HL", description: "Stoichiometry, equilibrium, organic reaction pathways and energetics, with plenty of worked past-paper structure. Students moving from Karnataka PUC chemistry usually need the IB's data-analysis questions first." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology, genetics, ecology and physiology, with command-term practice so that 'outline' and 'evaluate' are answered differently. Useful for medicine-bound students planning NEET or overseas applications." },
    { name: "Economics", levels: "SL / HL", description: "Microeconomic and macroeconomic diagrams, the commentary portfolio and data-response writing. Tutors work from real news items so that diagrams are explained rather than memorised." },
    { name: "Business Management", levels: "SL / HL", description: "Case-study analysis, finance calculations and the Internal Assessment research project. A strong fit for families from trading and agricultural-business backgrounds in the region." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming logic, data structures and system fundamentals taught through live coding on a shared screen. Good for students who learned to code informally and now need exam-style answers." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Paper 1 textual analysis, Paper 2 comparative essays and the individual oral. Many Shahpur students think in Kannada or Hindi first, so tutors work on sentence control and argument structure." },
    { name: "Hindi B", levels: "SL / HL", description: "Language acquisition for students who use Hindi daily. Written tasks, reading comprehension and the oral are coached with attention to register and accuracy." },
    { name: "Kannada A", levels: "SL / HL", description: "Literature study for students whose first language is Kannada, with close reading of set texts and structured essay planning where a school offers the course." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion practice for the exhibition and essay prompts. Tutors help students test arguments and organise ideas; the writing remains the student's own." },
    { name: "Psychology", levels: "SL / HL", description: "Research methods, the three approaches and the experimental-study Internal Assessment. Tutors help students evaluate studies rather than list them." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE papers are open to private candidates through authorised centres, which is the usual route for a Shahpur family without an international school nearby. Tutors prepare students for whichever board and tier the exam centre has entered them for.",
  igcseSubjects: [
    { name: "Mathematics (Core and Extended)", levels: "0580 / 4MA1", description: "Algebra, geometry, trigonometry and statistics at Core or Extended tier. Tutors help families decide the tier early, since it caps the top grade." },
    { name: "Additional Mathematics", levels: "0606 / 4PM1", description: "Calculus, functions and proof-style reasoning for students planning A Level or IB Maths AA later." },
    { name: "Physics", levels: "0625 / 4PH1", description: "Mechanics, electricity, waves and thermal physics with equation recall and the alternative-to-practical paper." },
    { name: "Chemistry", levels: "0620 / 4CH1", description: "Atomic structure, reactions, the periodic table and organic chemistry, plus qualitative-analysis tables." },
    { name: "Biology", levels: "0610 / 4BI1", description: "Cells, transport, inheritance and ecosystems, taught alongside data-handling and experiment-design questions." },
    { name: "English as a Second Language", levels: "0510 / 0511", description: "Reading, writing, listening and speaking components for students whose home language is Kannada, Urdu, Telugu or Hindi." },
    { name: "English First Language", levels: "0500 / 4EA1", description: "Directed writing, narrative and argument tasks, with feedback on paragraphing and tone." },
    { name: "Computer Science", levels: "0478 / 4CP0", description: "Algorithms, pseudocode and programming tasks practised live, with exam-style trace tables." },
    { name: "Economics and Business Studies", levels: "0455 / 0450", description: "Core concepts, data response and short case studies, suited to students who may continue into A Level or IB Business." },
    { name: "Hindi as a Second Language", levels: "0549", description: "Comprehension, composition and grammar for students who want a language credit next to their sciences." },
  ],

  regionsTitle: "Shahpur town, nearby taluks and the roads that connect them",
  tutorsIntro:
    "These tutors teach Shahpur students online, from their own bases across India. Each profile shows subjects and levels taught, so you can see who has handled your child's exact IB course or IGCSE paper before the free trial.",
  regionsIntro:
    "Online lessons do not depend on where in Shahpur a student lives, but the practical details do matter: power cuts, mobile signal, school end times and where a family might move. These are the parts of the town and area parents mention most.",
  regions: [
    { name: "Shahpur town centre", note: "The market area around the taluk offices and bus stand. Most families here send children to state-board or CBSE schools, and evening slots after 6 pm suit students who finish late." },
    { name: "Shahpur railway side", note: "Homes near the railway line and Hosur road. Signal is generally steady on 4G, but families often keep a mobile hotspot as a backup during power interruptions." },
    { name: "Surpur (Shorapur)", note: "The neighbouring taluk town to the south with its own fort and a small cluster of private schools. Students here book the same online tutors as Shahpur and often share a trial slot." },
    { name: "Yadgir town", note: "The district headquarters is the nearest larger town, and the place where parents are most likely to inquire about coaching or a CBSE school before looking at international options." },
    { name: "Narayanpur and the Krishna canal belt", note: "Irrigated paddy and cotton villages whose families often have agriculture-based businesses. Home internet quality varies, so we test the connection during the free trial." },
    { name: "Gogi and Kodekal", note: "Smaller settlements along the road towards Raichur district. Students here usually commute to Shahpur for school and take lessons late evening or on Sundays." },
    { name: "Vadgera and Hunsagi side", note: "Rural pockets where a family may be considering Hyderabad schooling in future. Tutors can prepare a child for an international-school entrance assessment in English and Maths." },
    { name: "Kalaburagi road corridor", note: "Families with relatives or workplaces in Kalaburagi tend to compare Cambridge IGCSE schools there with online-only study from Shahpur." },
  ],
  schoolClusters: [
    {
      city: "Shahpur and Yadgir district",
      note: "We could not confirm any school in Shahpur or Yadgir that teaches the IB or Cambridge / Edexcel IGCSE. Local schools follow the Karnataka state board or CBSE. This is why most Shahpur students on an international curriculum study with a tutor online.",
      schools: [],
    },
    {
      city: "Nearby: Hyderabad",
      note: "The closest large cluster of confirmed IB and Cambridge schools, a long road or rail journey north-east. Relevant to families who plan to relocate or board.",
      schools: ["Oakridge International School", "CHIREC International School", "International School of Hyderabad", "The Gaudium School"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "The deepest pool of IB and IGCSE schools in Karnataka. Realistic for boarding or a family move rather than a daily commute from Shahpur.",
      schools: ["Stonehill International School", "Inventure Academy", "Indus International School, Bengaluru"],
    },
  ],
  schoolDisclaimer:
    "School names appear only to show where the nearest confirmed IB or Cambridge options are. IB Gram is an independent tutoring service and has no affiliation, partnership or endorsement arrangement with any school, the International Baccalaureate, Cambridge or Pearson.",

  modesIntro:
    "Three ways of working are available to a Shahpur family, and all three run on screen. The right one depends on whether the student needs steady weekly help, a burst before an exam, or support through a school change.",
  modes: [
    {
      title: "Online home tuition, one-to-one",
      description: "The core format: a private lesson with one tutor, taken from the student's own desk in Shahpur on a laptop, with a shared whiteboard and worked solutions on screen.",
      bullets: ["Weekly slots fixed in IST", "Recording available on request for revision", "Written note after every lesson"],
    },
    {
      title: "Exam-season intensives",
      description: "Short, dense blocks in the weeks before the May or November sessions, covering past papers, mark schemes and timed practice.",
      bullets: ["Paper-by-paper plan", "Timed practice with feedback", "Weak-topic triage"],
    },
    {
      title: "Transition support",
      description: "For students moving from the Karnataka state board or CBSE into an IB or IGCSE school, or sitting an entrance assessment in Hyderabad or Bengaluru.",
      bullets: ["Bridging the content gap", "Command-term and criterion practice", "English writing stamina"],
    },
  ],

  sections: [
    {
      heading: "Which Shahpur is this page about, and who studies IB or IGCSE here?",
      paragraphs: [
        "This page is about Shahpur, the taluk town in Yadgir district of north-eastern Karnataka. It is not the Shahabad in Kalaburagi district and not the Shahabad in Hardoi, Uttar Pradesh; those places have their own pages. There are also villages called Shahpur in other states, so parents searching from Karnataka should check the district before relying on any listing.",
        "The students who ask for IB and IGCSE tutors in Shahpur come from a few distinct situations. Some are children of doctors, engineers or officials posted to the district who expect to move on within a few years. Some are from business and landowning families who plan to send a child to Hyderabad, Bengaluru or abroad. Others are already enrolled in a school elsewhere and study from home during holidays. A few are NRIs returning to look after family land who want continuity with a Gulf or UK curriculum.",
        "Yadgir is classed as an aspirational district, and facilities are thinner than in the big cities, which is exactly why online delivery matters. A strong IB Chemistry or IGCSE Maths specialist is not sitting in the next lane, but is only a stable internet connection away.",
        "What we ask of a family is simple: tell us the school or board, the subject and level, the exam session, and the part that currently feels hardest. We use that to pick the tutor, not a generic profile.",
      ],
    },
    {
      heading: "How do Karnataka state board, CBSE, IB and IGCSE compare for a Shahpur student?",
      paragraphs: [
        "A student in Shahpur will usually have met the Karnataka SSLC and second PUC pathway, run by the state examination boards, or the CBSE Class 10 and 12 route. IB and IGCSE are different in structure: they emphasise extended writing, internal assessment and application, rather than a single end-of-year paper dominated by recall. Both IB and IGCSE are taught in English.",
        "The table below sets out the differences that matter when a family is deciding whether a switch is realistic, and what tutoring would need to address. It describes general features of each system and not any particular school.",
        "Moving from state board to IB at Class 11 is possible but demanding, mostly because of the language of instruction and the writing load. Moving from CBSE is smoother in Maths and Science content. A move before Class 9 into IGCSE is the least disruptive, since IGCSE starts a two-year course that finishes at Class 10 level.",
        "Whichever route a family takes, universities in India generally accept IB and IGCSE-plus-A-Level results subject to equivalence rules, which the university pathways section below explains.",
      ],
      table: {
        caption: "Board comparison for a Shahpur family",
        columns: ["Feature", "Karnataka state board", "CBSE", "IB Diploma", "Cambridge / Edexcel IGCSE"],
        rows: [
          ["Medium", "Kannada or English", "English or Hindi", "English", "English"],
          ["Assessment", "Mostly end-of-year papers", "Board papers plus internal marks", "Exams plus Internal Assessment, Extended Essay, TOK", "Mainly exams, some coursework by subject"],
          ["Entrance tests", "KCET, NEET, JEE", "JEE, NEET, CUET", "CUET-UG, NEET and JEE with eligibility checks", "Usually followed by A Level or IB"],
          ["Local availability", "Throughout Shahpur", "A few schools in town", "Not confirmed locally", "Not confirmed locally; private candidacy possible"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost for a family in Shahpur?",
      paragraphs: [
        "IB Gram does not publish fixed prices, because the rate depends on who teaches and what is being taught. Rates are quoted in writing after the free trial lesson, before any booking is made, and a family can say no at that point without any obligation.",
        "Four things drive the rate. The first is level and subject: an IB Maths AA HL or Physics HL tutor with Diploma marking experience is a more specialised hire than a Class 6 English helper. The second is frequency, since a student who takes two lessons a week has a different arrangement from one who books a few sessions before a mock. The third is the tutor's own experience, including whether they have taught the exact board and syllabus code. The fourth is lesson length and the amount of preparation and written feedback involved.",
        "Compared with moving a child to a boarding school in Hyderabad or Bengaluru, online tuition is a small fraction of the total cost, and it needs no relocation. Compared with a local general-purpose tuition teacher in Shahpur, it costs more per hour because the tutor is a specialist in the IB or IGCSE, which the local teacher is unlikely to be.",
        "If budget is tight, we suggest booking fewer, better-aimed lessons: a diagnostic first, then fortnightly sessions on the one or two weakest topics, rather than weekly general revision.",
      ],
    },
    {
      heading: "Online home tuition, local coaching or self-study: which suits Shahpur?",
      paragraphs: [
        "Shahpur has the usual mix of small tuition classes and teachers who coach state-board students at home. These are valuable for the syllabus they know, but none that we could confirm is built around IB or IGCSE assessment. A strong state-board Physics teacher will not know the IB's command terms or the structure of an Edexcel paper, and the mismatch costs marks.",
        "Self-study is realistic for disciplined students with good resources, and past papers are freely available for many IGCSE subjects. Its weakness is feedback: nobody tells a student that their Paper 2 explanation scores two out of four marks for a specific reason. A short block of tutoring often fixes that.",
        "Online one-to-one lessons from IB Gram sit between the two. The tutor teaches the actual syllabus, marks work against the real criteria and adapts weekly. Because the lesson is online, it also avoids the long journeys to Kalaburagi or Hyderabad that a classroom coaching centre would need.",
        "Still, online tuition depends on a connection. Families in outlying villages should test their signal at the actual hour of the lesson. We include a connection check in the trial.",
      ],
      table: {
        caption: "Ways to prepare for IB and IGCSE from Shahpur",
        columns: ["Option", "Syllabus match", "Feedback quality", "Practical issue in Shahpur"],
        rows: [
          ["Online one-to-one with IB Gram", "Built around the exact IB or IGCSE course", "Written note and criteria-based marking", "Needs stable internet and a laptop"],
          ["Local state-board tuition teacher", "Good for state-board content only", "Informal, content-focused", "Few teachers know IB command terms"],
          ["Coaching centre in Kalaburagi or Hyderabad", "Sometimes, in the larger centres", "Group feedback, limited personal attention", "Long travel or a rented room"],
          ["Self-study with past papers", "Very high if papers are chosen well", "None unless self-marked", "Needs discipline and a mark-scheme habit"],
        ],
      },
    },
    {
      heading: "What does the exam calendar look like for students in Shahpur?",
      paragraphs: [
        "IB Diploma exams run in May and November sessions, and Cambridge IGCSE sits in the May-June and October-November series; Edexcel runs January, May-June and October-November. Indian schools following the IB usually enter students in May. Karnataka state board SSLC and second PUC exams fall in March and April, which can clash with an IGCSE mock if a student is balancing two systems.",
        "Local conditions matter too. The north-east of Karnataka is among the hottest parts of the state, with April and May afternoons that make midday study unrealistic. We schedule lessons for mornings before nine or in the evening, and avoid the hottest hours. The monsoon is moderate, but power cuts during storms are common, so a laptop with a charged battery is sensible.",
        "Festivals also shape the term. Ugadi falls around March or April, Dasara in September or October, Diwali in October or November, and Muharram moves with the lunar calendar. Many families travel at these times, and online lessons can be moved without losing continuity.",
        "The table lays out a typical year for an IB Diploma student studying with a Shahpur tutor, though the school's own calendar always takes priority.",
      ],
      table: {
        caption: "A typical study year for a Shahpur IB or IGCSE student",
        columns: ["Period", "Exams and deadlines", "Local factor", "Tutoring focus"],
        rows: [
          ["June to August", "New term begins; IA topics chosen", "Monsoon starts, Krishna canals fill", "Foundations, IA planning"],
          ["September to October", "Internal mocks; October IGCSE series", "Dasara holidays", "Past papers, error logs"],
          ["November to December", "IB November session; Diwali", "Cooler evenings, good study weather", "Targeted revision"],
          ["January to March", "Mock exams; Ugadi", "Dry and warming", "Full papers under timed conditions"],
          ["April to June", "IB May and IGCSE May-June sessions", "Peak heat in Kalyana Karnataka", "Early-morning or late-evening revision"],
        ],
      },
    },
    {
      heading: "How do IB and IGCSE results open university doors from Shahpur?",
      paragraphs: [
        "For admission to Indian universities, the Association of Indian Universities grants equivalence to the IB Diploma and to IGCSE followed by recognised senior qualifications. CUET-UG is the common route to central universities, including the Central University of Karnataka near Kalaburagi, though each programme sets its own eligibility and subject requirements.",
        "For engineering and medicine, an IB student should check JEE and NEET eligibility carefully. NEET requires Physics, Chemistry, Biology and English at the senior level, and the subject combination in the Diploma needs to match. IGCSE students typically move to A Level or IB for these exams.",
        "A growing number of Karnataka families look abroad. The IB Diploma is widely recognised by UK, Canadian, Australian and European universities, and IGCSE results lead into A Level or IB before applications. Tutors can help a student plan subjects and revision around predicted grades, though they do not guarantee admission.",
        "Within Karnataka, students sometimes target Bengaluru colleges. Admission rules for private colleges differ from those for government seats, so ask the college directly.",
      ],
      table: {
        caption: "University routes for Shahpur students",
        columns: ["Goal", "Typical route", "What to check", "Where tutoring helps"],
        rows: [
          ["Central universities in India", "IB Diploma or IGCSE plus A Level, then CUET-UG", "Equivalence and domain subjects", "Subject mastery and CUET practice"],
          ["Medicine in India", "NEET with PCB and English", "Eligibility of the subject combination", "Biology and Chemistry depth"],
          ["Engineering in India", "JEE Main and Advanced", "Subject eligibility and board percentage rules", "Maths and Physics problem solving"],
          ["Study abroad", "IB Diploma or A Level", "Predicted grades and entry requirements", "Grade improvement in key subjects"],
        ],
      },
    },
    {
      heading: "How are IB Maths, Physics, Chemistry and Biology taught online?",
      paragraphs: [
        "IB Maths comes in two courses. Analysis and Approaches suits students heading for engineering, economics or pure mathematics, and it leans on algebra, calculus and proof. Applications and Interpretation emphasises statistics and modelling with a graphic display calculator. Choosing the wrong course is a common early mistake, and a tutor can help with the decision before the first term ends.",
        "The sciences share a pattern: concepts, data questions and an Internal Assessment investigation. In Physics, a tutor will work through mechanics and fields with the student drawing diagrams on a shared whiteboard. In Chemistry the emphasis is on stoichiometry, equilibrium and organic mechanisms. In Biology the weight falls on explaining processes in the right command-term language.",
        "Practical work is a real concern in a small town, because a school without good labs cannot give the experimental experience the Internal Assessment expects. Tutors can discuss how to design an investigation using household or school equipment, and how to analyse the data, but the investigation itself must be the student's own.",
        "For IGCSE, Core and Extended tier matter. A student aiming for grade 7 or above needs Extended, and this should be decided before the course is half over.",
      ],
    },
  ],

  process: [
    { title: "Send a message", description: "Tell us on WhatsApp or by email the student's school, board, subject, level and exam session." },
    { title: "Match with a tutor", description: "We shortlist a tutor who has taught the exact syllabus, and tell you why they fit." },
    { title: "Free trial lesson", description: "A live one-to-one lesson on screen, with a connection check for your home in Shahpur." },
    { title: "Rate in writing", description: "If the fit is right, the rate and schedule are confirmed in writing before any booking." },
    { title: "Weekly lessons and notes", description: "Lessons run in IST with a written note after each. The tutor can be changed if the fit is wrong." },
  ],
  whyPoints: [
    { title: "Syllabus-specific tutors", description: "Every match is made to the exact IB subject or IGCSE code, not a general 'international' tag." },
    { title: "Honest about delivery", description: "We tell Shahpur families plainly that lessons are online and that visits happen only in Gurugram and parts of Delhi NCR." },
    { title: "Written feedback", description: "A short note after each lesson says what was covered and what to practise next." },
    { title: "Free trial first", description: "You see a real lesson before any commitment or payment." },
    { title: "Tutor change on request", description: "If the style does not suit your child, we replace the tutor without fuss." },
    { title: "Ethical coaching", description: "Tutors coach and explain. They do not write IAs, Extended Essays, TOK essays or coursework." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE tutors in Shahpur?", answer: "Yes, online. IB Gram tutors teach Shahpur students live by video, one-to-one, in Indian Standard Time. They are not physically based in Shahpur. We could find no local tutoring service built around the IB or IGCSE, so online delivery is the realistic option for most families in Yadgir district." },
    { question: "Do tutors come to my home in Shahpur?", answer: "No. In-person home tuition runs only in Gurugram and parts of Delhi NCR. Shahpur students get private tuition from home instead: the child sits at their own desk and the tutor teaches on screen. Rates and the schedule are agreed in writing before any booking." },
    { question: "Is there an IB or IGCSE school in Shahpur or Yadgir?", answer: "We could not confirm one. Schools in Shahpur and Yadgir district follow the Karnataka state board or CBSE. The nearest confirmed IB and Cambridge schools are in Hyderabad and Bengaluru, which matters if you plan to relocate or board a child." },
    { question: "Is this page about Shahpur in Yadgir or Shahabad in Kalaburagi?", answer: "It is about Shahpur in Yadgir district, Karnataka. Shahabad in Kalaburagi district and Shahabad in Hardoi, Uttar Pradesh have separate pages on this site. The service is the same online everywhere, but local detail on this page refers to Yadgir district." },
    { question: "Can my child switch from the Karnataka state board to IB?", answer: "It is possible, though harder after Class 9 because of the English writing load. Tutors help with bridging content gaps, criterion-based writing and command terms. Check with the receiving school about entry requirements and whether it will admit a student mid-programme." },
    { question: "How much does IB or IGCSE tuition cost?", answer: "Rates are quoted in writing after the free trial. They depend on subject and level, lesson frequency, the tutor's experience with that exact syllabus and the length of each session. There are no published fixed prices, and you are free to decline after hearing the quote." },
    { question: "Which IB Maths course should my child take?", answer: "Analysis and Approaches suits students heading to engineering, pure science or economics; Applications and Interpretation suits biology, business and social-science routes. A tutor can test the student on both and advise early. The final choice is made with the school, since not every school offers both." },
    { question: "Can a private candidate sit IGCSE from Shahpur?", answer: "Often yes, through an authorised exam centre, usually in a larger city. Cambridge and Edexcel both allow private entries, but centres set their own deadlines and fees. Tutors can prepare the student for the papers; the entry itself is arranged by the family with the centre." },
    { question: "Do tutors write the Internal Assessment or Extended Essay?", answer: "No. Tutors coach on method, structure and criteria, and may discuss a draft the student has written. They do not write, rewrite or complete an IA, Extended Essay, TOK essay or coursework, as those must be the student's own work under IB rules." },
    { question: "What internet speed is needed in Shahpur?", answer: "A steady 4G or broadband connection of a few Mbps is enough for video and a whiteboard. We run a connection check during the free trial. If power cuts are common in your area, keep a charged laptop and a mobile hotspot as backup." },
    { question: "What time do lessons take place?", answer: "Evenings after school and weekend mornings are most popular. In April and May we recommend early mornings or late evenings because of the heat. All slots are in IST, so there is no time-zone adjustment for a family in Karnataka." },
    { question: "Is Kannada or Hindi available as a subject?", answer: "Hindi B and, where a school offers it, Kannada A can be supported at IB level, and Hindi as a Second Language at IGCSE. Tutors for language subjects are matched separately, so mention the language when you first write to us." },
    { question: "Can IB students from Shahpur apply to Indian universities?", answer: "Yes. The IB Diploma is recognised through AIU equivalence, and central universities admit through CUET-UG. Engineering and medicine require checking JEE and NEET subject eligibility. Always confirm directly with the university for the specific programme." },
    { question: "How does the free trial work?", answer: "You choose a time, meet a matched tutor on video and work through a real topic for the student. We check the connection at the same time. After the trial, you get a written rate and plan, and you can decline without any charge." },
    { question: "What if my child does not get on with the tutor?", answer: "Tell us and we change the tutor. Fit matters more than awkward loyalty, and a change costs the family nothing. Continuity is kept through the written notes, so the new tutor knows exactly where the previous one stopped." },
    { question: "How do I get started?", answer: "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com with the student's class, board, subject and exam date. We usually reply with a shortlist and a trial time. Nothing needs to be paid to begin." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Yadgir", href: "/yadgir/", description: "The district page, covering the headquarters town and wider district context." },
    { label: "IB and IGCSE tutors in Raichur", href: "/raichur/", description: "The neighbouring district town in Kalyana Karnataka." },
    { label: "IB and IGCSE tutors in Hyderabad", href: "/hyderabad/", description: "The nearest large city with confirmed IB and Cambridge schools." },
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Where online tutoring reaches, and where home visits run." },
    { label: "Home tuition in Gurugram", href: "/gurgaon/", description: "The only place in-person home tuition is offered, with parts of Delhi NCR." },
    { label: "IB tutors", href: "/ib-tutors/", description: "All IB subjects, programmes and tutor profiles." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects and tiers." },
    { label: "IB Diploma programme", href: "/programmes/dp/", description: "Structure of the DP, assessment and core elements." },
    { label: "IB Maths tutoring", href: "/courses/ib/mathematics/", description: "AA and AI courses explained." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "WhatsApp, email and how to book a free trial." },
  ],
  closingHeading: "Start with one free lesson from your own desk in Shahpur",
  closingBody:
    "Write to us with the subject, the level and the next exam date. We will propose a tutor, set a trial time that avoids the afternoon heat, and check your connection during that first lesson. If it suits your child, rates are confirmed in writing. If it does not, you have lost nothing. Reach us at support@ibgram.com or +91 7439 368 115 on WhatsApp.",
};
