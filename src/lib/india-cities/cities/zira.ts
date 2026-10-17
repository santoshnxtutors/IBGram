import type { CitySeoPage } from "../types";

/**
 * Zira (Firozpur district, Punjab). No IB or IGCSE school could be confirmed in the town itself, so stripSchools is
 * empty. Clusters reuse school names already verified on the published Ludhiana, Firozpur and Chandigarh pages and are
 * labelled as nearby cities.
 */
export const zira: CitySeoPage = {
  slug: "zira",
  countryName: "Zira",
  countryNameLong: "Zira, Punjab",
  demonym: "Zira",
  flagCode: "in",
  countryCode: "IN",
  state: "Punjab",
  stateCode: "IN-PB",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings and Sunday mornings, planned around paddy and wheat harvest weeks, winter fog and the PSEB and CBSE board calendars",
  lastUpdated: "2026-09-21",
  geo: { latitude: 30.9708, longitude: 74.9953 },
  alternateNames: ["Zira Punjab", "Zira Ferozepur", "Zira Firozpur", "Zira Khas", "Jira Punjab"],
  wikipedia: "https://en.wikipedia.org/wiki/Zira,_Punjab",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Zira | Online Home Tuition, Punjab",
  metaDescription:
    "Live one-to-one online IB and IGCSE tuition for Zira families in Firozpur district: Maths, sciences and more, timed around harvest and fog. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition in Zira, Punjab (Online)",
  heroEyebrow: "ONLINE ONE-TO-ONE IB & IGCSE HOME TUITION IN ZIRA",
  heroSubtitle:
    "Looking for IB or IGCSE home tuition in Zira usually ends in the same dead end: neighbourhood tutors who know the PSEB or CBSE textbook and have never opened a Cambridge or Edexcel paper. Our answer is private tuition from home, delivered online. The student sits at the family desk in Zira, a tutor who has taught that exact syllabus joins on live video, and the first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Zira",
  imageAltText: "Zira student at a home desk in Punjab working through an IGCSE Mathematics paper with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Zira",
    "IGCSE tutor Zira",
    "IB home tuition Zira",
    "IGCSE home tuition Zira",
    "IB private tuition Zira",
    "IB Maths tutor Zira",
    "IGCSE Maths tutor Zira",
    "IB Physics tutor Zira",
    "IB Chemistry tutor Zira",
    "IB Biology tutor Zira",
    "IB DP tutor Zira",
    "IB MYP tutor Zira",
    "IB PYP tutor Zira",
    "IGCSE online tuition Zira",
    "online IB tutor Zira Punjab",
    "IB tutor Ferozepur district",
    "IGCSE tutor Makhu",
    "IB tutor Talwandi Bhai",
    "online tutor Zira Firozpur",
    "IGCSE Physics tutor Zira",
  ],

  heroTrustPoints: [
    "Tutors who have already taught the syllabus your child is sitting",
    "Live one-to-one video lessons at a fixed weekly hour",
    "Free first lesson, then a written quote before you commit",
    "Independent of the IB, Cambridge, Pearson and every school",
  ],
  heroStats: [
    { value: "Online", label: "How every Zira lesson runs" },
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "May & Nov", label: "Main exam sessions" },
    { value: "Free trial", label: "First lesson is on us" },
  ],

  intro: {
    heading: "IB and IGCSE study from Zira: what a family here should know first",
    paragraphs: [
      "Zira sits in Firozpur district in the Malwa belt of Punjab, a town of roughly 37,000 people at the 2011 census, ringed by wheat and paddy fields and tied to Firozpur, Moga and Ludhiana by road and rail. If you search for IB or IGCSE home tuition in Zira, you will mostly meet general tutors. The reliable route is private tuition from home, online, with a specialist on the other side of the screen.",
      "To be direct about it: IB and IGCSE tutors in Zira teach over live video. No tutor walks into a Zira house. In-person home lessons run only in Gurugram and parts of Delhi NCR, and we would rather say so now than let a family find out after booking. What replaces the doorbell is a fixed weekly slot, a shared digital whiteboard and a person who has coached the paper before.",
      "The families who ask us about this are a small but clear group. Some have relatives in Canada, the UK or Australia and picture a child following that path. Some run farm-input, rice-milling or trading businesses and want options beyond the local board. Others have a child already enrolled in an online international school, or preparing for IGCSE as a private candidate, who needs a human teacher alongside.",
      "IB Gram is an independent tutoring service. It is not affiliated with the International Baccalaureate, Cambridge, Pearson Edexcel or any school. Our tutors teach, correct and coach; the student writes every Internal Assessment, Extended Essay, TOK piece and coursework task alone.",
    ],
    bullets: [
      "IB PYP, MYP, Diploma and Career-related support",
      "Cambridge and Pearson Edexcel IGCSE, plus A Level context",
      "One student per lesson at a regular weekly time",
      "A short written note after every session",
      "Timetables that avoid harvest peaks and fog weeks",
    ],
  },

  programmesIntro:
    "We could not confirm an IB or IGCSE school inside Zira, so most students meet these programmes through a school elsewhere, an online school or private entry. Here is what each stage involves and what we usually see from Firozpur-district homes.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3 to 11",
      description:
        "Teaching is organised around six transdisciplinary themes, and children are encouraged to ask, test and reflect instead of copying notes. Fifth year closes with the Exhibition, a group inquiry presented to the whole school community.",
      countryNote:
        "A Zira child on the PYP typically needs spoken English confidence, since Punjabi and Hindi lead at home. Exhibition topics that work well are close at hand: canal water, the wheat and paddy cycle, or the town's rice mills.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to 10, ages 11 to 16",
      description:
        "Subjects are assessed against four published criteria each, so a student is marked on investigating, communicating and applying, not only on remembering. A Personal Project in the final year is planned and finished by the student.",
      countryNote:
        "Children arriving from PSEB or CBSE classrooms often score well on facts and lose marks on explanation. Early lessons therefore concentrate on showing method, defining terms and writing a conclusion that answers the question.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and 12, ages 16 to 19",
      description:
        "Six subjects over two years, three or four at Higher Level, together with the Extended Essay, Theory of Knowledge and CAS. Written exams arrive in May or November, and internal assessments are marked across the course.",
      countryNote:
        "Diploma students from this belt lean toward Maths, sciences and Economics, and many also keep a study-abroad file open. Pacing the Extended Essay and IAs from the first term of Class 11 matters most.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and 12, ages 16 to 19",
      description:
        "A smaller set of Diploma courses combined with a career-related study and a reflective project.",
      countryNote:
        "Rare in this part of Punjab. If your school offers it, we cover the academic courses and help the student share time between them and the project.",
    },
  ],

  subjectsIntro:
    "Zira students are paired with tutors course by course and level by level. A Higher Level Chemistry candidate needs a different teacher from a Class 9 IGCSE Biology beginner, so we confirm the syllabus code and tier before proposing anyone.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus, vectors and proof. Students from Punjab's strong arithmetic tradition are fast at calculation and need practice in writing each step as an argument." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology-led problem solving. A good exploration here can use local data such as mandi arrivals or canal flow." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves, fields and modern physics, with an investigation graded on method and uncertainty." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, kinetics, equilibrium and organic reactions. Agricultural chemistry such as fertiliser and soil pH gives natural investigation ideas." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and human physiology, with plenty of data-based questions." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets, trade and development. Minimum support prices and crop procurement are rich real-world material." },
    { name: "IB Business Management", levels: "HL / SL", description: "Operations, finance and strategy, a good fit for families running trading or milling businesses." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water, soil and pollution in an intensive farming landscape, written up through case studies." },
    { name: "IB Geography", levels: "HL / SL", description: "Freshwater, food security and population, with a fieldwork-based internal assessment." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis and the oral, for students who think in Punjabi and write in English." },
    { name: "IB Punjabi A", levels: "SL / HL", description: "Literature in a mother tongue, for the student who wants a language course they can already speak." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Language acquisition at ab initio or SL for a second-language route." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, databases, networks and a solution project marked on documentation as well as code." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Knowledge questions and the exhibition, approached by discussion. We help think through ideas; the written work is the student's own." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "A 4,000-word independent paper. A tutor can help refine the question and plan, while research and writing remain the student's." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Criterion-based investigations and reflections." },
  ],

  igcseSubjectsIntro:
    "Most IGCSE learners in the Zira area are studying through an online school or sitting as private candidates at an exam centre in a bigger city. We match by syllabus code and tier, because Extended Mathematics, Additional Mathematics and Edexcel Higher each need a different kind of practice.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Cambridge Core or Extended, Edexcel Foundation or Higher", description: "A wide paper where most lost marks come from unlabelled working and misread command words." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus and trigonometry that makes the step up to IB Maths or JEE-style problems far smoother." },
    { name: "IGCSE Physics", levels: "Core and Extended", description: "Forces, electricity, thermal and wave physics, and an alternative-to-practical paper that tests reasoning about experiments." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Atomic structure, reactions, rates and qualitative analysis, where memorised tests must be applied to unseen data." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, transport, inheritance and ecosystems with experimental design questions." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Algorithms, pseudocode and Python or Java." },
    { name: "IGCSE English First or Second Language", levels: "Grade 9-10", description: "Directed writing, summary and comprehension for students who speak Punjabi and Hindi at home." },
    { name: "IGCSE Economics and Business Studies", levels: "Grade 9-10", description: "Definitions, calculations and short evaluative answers." },
    { name: "IGCSE Punjabi and Hindi as foreign languages", levels: "Grade 9-10", description: "Reading, writing and speaking tasks for students who want an extra language certificate." },
  ],

  regionsTitle: "Parts of Zira and the surrounding area our online tutors reach",
  tutorsIntro:
    "These tutors teach Zira students over live video from their own bases in India. Each profile shows the syllabus and level they have taught, and we match on the paper code rather than the subject label.",
  regionsIntro:
    "Everything is taught on screen, so the useful local detail is when the house is quiet and how reliable the connection is. These notes help set sensible slots. No tutor travels to any of these places.",
  regions: [
    { name: "Zira town centre", note: "The old bazaar, bus stand and municipal area, where fibre broadband is common and evenings are loud near the market." },
    { name: "Ferozepur Road side", note: "Homes along the highway toward Firozpur, many with family members who commute to the district headquarters." },
    { name: "Moga Road side", note: "The stretch toward Moga and Ludhiana, popular with families who already travel to those cities for shopping and schooling." },
    { name: "Railway station area", note: "Around the Zira station on the Firozpur line, with students who sometimes take the train for exam centres." },
    { name: "Mallanwala", note: "A nearby town along the same line, with a farming-based community and mixed internet quality." },
    { name: "Makhu", note: "A town in Firozpur district where families mix agriculture, small trade and overseas links." },
    { name: "Talwandi Bhai", note: "A smaller town on the road toward Firozpur, where most students use mobile data or a shared router." },
    { name: "Mamdot and Guru Har Sahai side", note: "Border-district towns whose study hours bend around farm work and power cuts." },
    { name: "Village belt around Zira", note: "Farming villages where tractors, sowing and harvest weeks decide when a lesson can happen." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service with no link to the IB, Cambridge, Pearson or any school. We could not verify an IB or IGCSE school in Zira itself, so the clusters below use schools already confirmed on our Ludhiana, Firozpur and Chandigarh pages and are labelled as nearby cities. Please confirm curriculum and admission details with each school directly.",
  schoolClusters: [
    {
      city: "Zira town: few local options",
      note: "Schools in the town follow PSEB or CBSE. We found nothing in Zira confirmed as IB or Cambridge or Edexcel IGCSE, which is why international study here is private or online.",
      schools: [],
    },
    {
      city: "Nearby: Firozpur",
      note: "The district headquarters, the closest larger centre for school choices.",
      schools: ["Invictus International School", "International Fateh Academy"],
    },
    {
      city: "Nearby: Ludhiana",
      note: "Punjab's biggest industrial city, a few hours away by road and the usual choice for relocating families.",
      schools: ["Britannica International School", "Harvest International School"],
    },
    {
      city: "Nearby: Mohali and Chandigarh",
      note: "The region's main cluster of international schools, a day trip or a boarding move away.",
      schools: ["Oakridge International School, Mohali", "Strawberry Fields High School, Sector 26"],
    },
  ],

  modesIntro:
    "Everything in Zira is online. Three formats cover almost every request we receive.",
  modes: [
    {
      title: "Weekly private lessons from home",
      description:
        "A fixed hour each week on live video, with a shared whiteboard and the same tutor throughout the course.",
      bullets: [
        "Tutors do not visit homes in Zira; lessons are online",
        "Same tutor from week to week",
        "A short written summary after each lesson",
        "Home visits run only in Gurugram and parts of Delhi NCR",
      ],
    },
    {
      title: "Exam-season intensive",
      description:
        "A heavier block of lessons in the weeks before May or November sessions, built around past papers and mark schemes.",
      bullets: [
        "Timed papers under exam conditions",
        "Command-word and mark-scheme drills",
        "Weak-topic revision plan",
        "Lesson dates set outside harvest weeks",
      ],
    },
    {
      title: "Bridge from PSEB or CBSE",
      description:
        "A short series for a child moving from a state-board or CBSE classroom into IGCSE or IB work.",
      bullets: [
        "Diagnostic first lesson",
        "Extended-answer writing practice",
        "Lab-report and investigation coaching",
        "Slow pacing for the first weeks",
      ],
    },
  ],

  sections: [
    {
      heading: "Why would a family in Zira look at the IB or IGCSE?",
      paragraphs: [
        "Punjab is among the Indian states most closely linked to overseas study, and Zira is no exception: most families here know someone abroad. That connection is the first reason curious parents ask us about IB and IGCSE tutors in Zira. A child who earns a Diploma or IGCSE certificate talks to a foreign university in a vocabulary it already knows.",
        "A second reason is practical. Zira has no large international school, so the families who want one tend to be choosing between a move to Ludhiana or Chandigarh, an online international school, or staying put and studying privately. Online lessons let the child continue at home through those choices.",
        "A third is curiosity about method. The IB asks for argued essays, investigations and oral presentations. IGCSE rewards precise application of a syllabus. Parents who watched a child grind through rote answers sometimes want that change.",
        "None of this requires giving up Punjabi or local roots. Many Diploma students choose Punjabi A as a language course and keep a view on Indian entrance routes, which we cover in a later section.",
      ],
      bullets: [
        "Relatives or future plans in Canada, the UK, Australia or the Gulf",
        "A family business that might one day move to a bigger city",
        "Preparing for an online international school",
        "Wanting more investigation and less memorisation",
      ],
    },
    {
      heading: "PSEB, CBSE, IGCSE and IB: how do they differ for a Zira student?",
      paragraphs: [
        "Most Zira students sit PSEB examinations at Class 10 and 12, run by the Punjab School Education Board. A good number of private schools follow CBSE and its NCERT textbooks. Both reward accurate recall and tidy presentation, and both are well understood by local tutors and coaching teachers.",
        "IGCSE is a two-year course set by Cambridge or Pearson Edexcel, with externally marked papers that test application and explanation across the syllabus. The IB Diploma is broader again: six subjects, a 4,000-word Extended Essay, Theory of Knowledge and CAS.",
        "The change a student feels is about what earns marks. A tidy paragraph copied from a textbook may be full marks in a board exam, whereas an IGCSE or IB question may supply unfamiliar data and ask for an explanation or evaluation.",
        "This table sets the four side by side.",
      ],
      table: {
        caption: "PSEB, CBSE, IGCSE and IB Diploma compared for Zira families",
        columns: ["Point", "PSEB", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Exam stages", "Class 10 and Class 12 boards", "AISSE and AISSCE", "IGCSE at Grade 10, then A Level or IB", "Two-year Diploma at Class 11-12"],
          ["What is rewarded", "Textbook accuracy and recall", "NCERT knowledge plus some application", "Applying syllabus content to new data", "Inquiry, research, argument and reflection"],
          ["Availability near Zira", "Everywhere", "Some private schools", "Not at a confirmed local school; private or online", "Not at a confirmed local school; private or online"],
          ["Indian college route", "Direct", "Direct", "Equivalence and eligibility checks", "Equivalence and eligibility checks"],
          ["Overseas recognition", "Needs extra checks", "Widely understood", "Recognised worldwide", "Recognised worldwide"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Zira, and what sets the rate?",
      paragraphs: [
        "We do not print prices on this page, because a number that suits a Grade 9 IGCSE learner would be unfair to a Higher Level Diploma candidate. Every family receives a written quote before booking, once we know the syllabus, level and number of weekly lessons.",
        "Four factors shape that quote. The first is level, since HL Diploma Maths or Chemistry asks more of a tutor than introductory IGCSE work. The second is the tutor's experience with that precise syllabus. The third is weekly frequency, and the fourth is the length of the engagement, because a full exam year is planned differently from a short revision burst.",
        "A cost many families forget is the journey. A good tutor in Ludhiana or Chandigarh would mean a long drive or a bus ride after school. Teaching on video removes that expense and the evening it eats.",
        "Group coaching is cheaper per hour but divides one teacher between many children. Private lessons cost more per hour and give the student a tutor's whole attention. The free trial exists so you can judge which suits your child.",
      ],
    },
    {
      heading: "Which is better for IB or IGCSE in Zira: online tutor, coaching, local teacher or self-study?",
      paragraphs: [
        "Tuition in the Zira area centres on PSEB and CBSE subject teaching, with competitive-exam coaching available in Firozpur, Moga and Ludhiana. These are useful for their own purpose and a student who also plans on Indian entrance exams may well keep them.",
        "What they rarely cover is the IB and IGCSE way of working: command terms, mark schemes, internal assessment criteria and the layout of Cambridge and Edexcel papers. A neighbourhood teacher who has taught them is difficult to find in a town of this size.",
        "Self-study with past papers works for a disciplined older student, though mistakes can stay uncorrected for months.",
        "The comparison below summarises the trade-offs.",
      ],
      table: {
        caption: "Routes to IB and IGCSE preparation from Zira",
        columns: ["Route", "Fit with IB or IGCSE syllabus", "Individual attention", "Timing", "Main limit"],
        rows: [
          ["Online one-to-one tutor", "Close, chosen per course", "Full", "Evenings and weekends by agreement", "Needs steady power and data"],
          ["Competitive-exam coaching batch", "Low", "Shared", "Fixed batch hours", "Aimed at Indian entrance exams"],
          ["Local school teacher giving tuition", "Partial at best", "High", "Flexible", "Seldom has IB or IGCSE experience"],
          ["Self-study", "Varies", "None", "Total control", "No feedback on errors"],
        ],
      },
    },
    {
      heading: "How do harvest, fog and exam sessions shape the year in Zira?",
      paragraphs: [
        "The calendar in Zira is set by two grain harvests. Wheat comes in around April and early May, and paddy follows in October and early November. In both windows many households are stretched, power is in demand and children are pulled into the work. We agree lesson times with parents rather than imposing a fixed pattern.",
        "Winter brings dense fog in December and January, which closes some roads, shortens school days and sometimes disrupts broadband. Summers are the other extreme, with June temperatures regularly above 40 degrees, so afternoon lessons are rarely sensible.",
        "IB exams fall in May and November, and the Diploma May session is heavy on heat and wheat harvest at once. IGCSE has June and October to November series for Cambridge, and January, June and November for Edexcel, with Cambridge also running a February to March series in India for some subjects.",
        "Festivals matter too. Lohri, Baisakhi, Diwali and Gurpurab days are family occasions that we treat as protected time.",
      ],
      table: {
        caption: "A study year for a Zira IB or IGCSE student",
        columns: ["Period", "What is happening locally", "Exam focus", "How lessons adapt"],
        rows: [
          ["April to May", "Wheat harvest and rising heat", "IB May papers; Cambridge and Edexcel summer series", "Short early-morning or late-evening slots"],
          ["June to July", "Peak heat and monsoon build-up", "Result period; summer catch-up", "Evening lessons, tidy backup for power cuts"],
          ["August to September", "Paddy transplanted, school term in full swing", "Mock papers and coursework milestones", "Regular weekly rhythm"],
          ["October to November", "Paddy harvest, Diwali, post-harvest fields", "IB November and Cambridge October to November series", "Plan around harvest days and festival dates"],
          ["December to February", "Fog, cold, Lohri and the Edexcel January series", "Pre-board mocks and Edexcel January papers", "Lessons after 5 pm, with flexible rescheduling when fog or power disrupts"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Zira go next?",
      paragraphs: [
        "Overseas study is the destination most often named by Punjab families. IB Diploma and IGCSE-plus-A-Level results are read easily by universities in Canada, the UK, Australia and elsewhere, and our tutors can help a student plan subject choices that match course requirements abroad.",
        "For Indian universities, the first step is equivalence. The Association of Indian Universities issues certificates for IB and for Cambridge or Edexcel qualifications, and some institutions ask for them before admission. CUET-UG accepts students from other boards, and the subject domain papers have to match the course sought.",
        "Medicine and engineering need additional care. NEET-UG and JEE Main both set rules about subjects studied and qualification equivalence, and those rules change, so families should check the latest official notice rather than rely on us or on hearsay. What we can do is teach Physics, Chemistry, Biology and Maths to the depth those exams assume.",
        "Punjab institutions such as Panjab University in Chandigarh and Punjab Agricultural University in Ludhiana are also realistic targets for a student who keeps the Indian route alive.",
      ],
      bullets: [
        "Overseas applications: Canada, UK, Australia, USA and Europe",
        "Indian universities via AIU equivalence and CUET-UG",
        "NEET-UG and JEE Main: check current official eligibility",
        "IB Maths AA or Additional Mathematics as groundwork for engineering",
      ],
    },
    {
      heading: "How does IB Maths and Science tutoring work for a student in Zira?",
      paragraphs: [
        "Choosing between Analysis and Approaches and Applications and Interpretation is the first decision for a Diploma Maths student. AA suits those who enjoy algebra, calculus and proof and are aiming at engineering or pure science. AI suits those who prefer statistics, modelling and technology, and is a sensible fit for Business, Economics or social sciences.",
        "In lessons we work from past-paper questions rather than lecture notes. The tutor sets a problem, watches the student solve it on a shared whiteboard and corrects the reasoning on the spot. That live correction is what a PSEB tuition class cannot give, and it is what takes marks from a method that nearly works to one that does.",
        "For Physics, Chemistry and Biology, we organise each topic around the guide's assessment statements, then train data-based questions and the extended-response style. HL students also need practice with calculations on uncertainty and with writing a conclusion linked to a hypothesis.",
        "Internal assessments are the student's own work. We coach the method, explain the criteria and give feedback on what a good investigation looks like. We do not write any part of them.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, Cambridge or Edexcel: how should a Zira student choose?",
      paragraphs: [
        "IGCSE gives two tiers in many subjects. Core papers cap the highest grade available, while Extended papers open the full range and are usually the right choice for any student aiming at A Level, IB or competitive science. For Edexcel the tiers are called Foundation and Higher.",
        "Cambridge and Edexcel are both respected and differ in layout. Cambridge papers are typically split into numbered components that mix short and long answers; Edexcel papers often come as fewer, longer papers with a more even topic spread. Neither is easier. A student with an online school usually takes whichever board that school uses.",
        "Subject choice should follow the pathway after Grade 10. A student heading to IB Diploma science wants IGCSE Mathematics (Extended) and Additional Mathematics, the three sciences and English. One aiming at commerce may prefer Economics, Business Studies and Accounting.",
        "We ask at the first lesson which board, tier and exam series applies, and build the schedule backwards from the paper date.",
      ],
    },
  ],

  process: [
    {
      title: "Send us the details",
      description: "WhatsApp or email the syllabus, level, school or online school, and the exam series you are aiming at.",
    },
    {
      title: "We propose a tutor",
      description: "A tutor who has taught that exact course is suggested, with a short note on their background.",
    },
    {
      title: "Free trial lesson",
      description: "The student attends a first lesson online at no charge, so both sides can judge the fit.",
    },
    {
      title: "Written quote and plan",
      description: "You get rates in writing before anything is booked, together with a weekly timetable that suits Zira's calendar.",
    },
    {
      title: "Regular lessons and notes",
      description: "Weekly sessions begin, a note follows each one, and the tutor can be changed if the match is wrong.",
    },
  ],

  whyPoints: [
    { title: "Syllabus-specific tutors", description: "We match to the paper code, not just the subject name." },
    { title: "Honest about format", description: "Online only for Zira, with home visits limited to Gurugram and parts of Delhi NCR." },
    { title: "Parent-friendly notes", description: "A short written summary after every session shows what was covered." },
    { title: "Free first lesson", description: "Try before you commit, and receive a quote in writing." },
    { title: "Tutor change on request", description: "If the fit is not right, we reassign without fuss." },
    { title: "Coaching, not shortcuts", description: "Tutors never write IAs, Extended Essays, TOK essays or coursework." },
  ],

  faqs: [
    {
      question: "Do IB and IGCSE tutors in Zira come to the house?",
      answer:
        "No, tutors do not visit homes in Zira. Our lessons are live one-to-one online sessions that the student attends from home on a laptop or tablet. In-person home tuition runs only in Gurugram and parts of Delhi NCR. We say this plainly so that nobody books expecting a visit, and the online format gives access to tutors who have taught your exact syllabus.",
    },
    {
      question: "Is there an IB or IGCSE school in Zira?",
      answer:
        "We could not confirm any IB or Cambridge or Edexcel IGCSE school in Zira. Local schools follow PSEB or CBSE. Families who want an international curriculum generally look at Firozpur, Ludhiana, Mohali or Chandigarh, or study with an online school. We only list schools we can verify, so please check each school with the school itself.",
    },
    {
      question: "Can my child take the IB or IGCSE while living in Zira?",
      answer:
        "Yes, in two main ways. A student can enrol with an online international school that prepares candidates for the exam, or register as a private candidate through an authorised exam centre. IB Diploma candidates normally need a school authorised by the IB. We tutor alongside either route, and we do not run schools or exam centres.",
    },
    {
      question: "How much does an IB or IGCSE tutor cost in Zira?",
      answer:
        "Rates depend on level, syllabus, tutor experience and how many lessons a week you want, and we quote in writing before you commit. We do not publish a price list because a Higher Level Diploma candidate and a Grade 9 IGCSE student need different expertise. The first lesson is free, so you can judge value first.",
    },
    {
      question: "What subjects can you cover for Zira students?",
      answer:
        "We cover IB Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, Environmental Systems, Geography, Computer Science, English, Hindi, Punjabi and the Diploma core. For IGCSE we cover Mathematics, Additional Mathematics, the three sciences, Computer Science, English, Economics and Business Studies. Tell us your syllabus code and we will confirm availability.",
    },
    {
      question: "Which exam sessions apply to a Zira student?",
      answer:
        "IB Diploma exams are in May and November. Cambridge IGCSE has main series in May to June and October to November, with a February to March series for some subjects in India. Edexcel IGCSE runs in January, May to June and October to November. Your school or exam centre will confirm exact dates, and we plan lessons backward from them.",
    },
    {
      question: "Will lessons clash with harvest or fog?",
      answer:
        "We schedule around them. Wheat harvest in April and paddy harvest in October and November can strain a household, and December to January fog interrupts travel and sometimes broadband. We agree a weekly hour with parents and reschedule without penalty when a field day or a power cut makes the slot impractical.",
    },
    {
      question: "My child studies PSEB or CBSE now. Can the move to IGCSE or IB work?",
      answer:
        "Yes, with some preparation. The main gap is not content but how answers are written: IGCSE and IB reward explanation, evaluation and use of unfamiliar data. We begin with a diagnostic lesson, then work on extended answers and command words. Most students adjust within a term or two when lessons are regular.",
    },
    {
      question: "Do you write the Internal Assessment or Extended Essay?",
      answer:
        "No. Our tutors never write IAs, Extended Essays, TOK essays or any coursework. They coach: explaining criteria, helping a student choose a workable question, reviewing a plan and giving feedback on a draft the student has written. The work submitted must be the student's own, as the IB and the exam boards require.",
    },
    {
      question: "Can online lessons run on mobile data in Zira?",
      answer:
        "Yes, if the signal is steady. A lesson needs a modest connection for video, and a laptop or tablet is better than a phone because the screen is shared. Families with patchy broadband in outlying villages often keep a second connection as a backup. Tell us at the trial lesson and we will adapt the format.",
    },
    {
      question: "Is IB or IGCSE recognised for Indian college admission from Zira?",
      answer:
        "Generally yes, subject to equivalence rules. The Association of Indian Universities issues equivalence certificates for IB and for Cambridge or Edexcel qualifications, and some colleges ask for them. CUET-UG and some professional exams have their own conditions. We advise families to confirm the current rule with the college or exam body.",
    },
    {
      question: "What about NEET or JEE after IB or IGCSE?",
      answer:
        "Both exams publish eligibility rules covering qualifications and subjects, and those rules are updated, so check the latest official notice. A student aiming at them should usually take Physics, Chemistry, and Maths or Biology at a strong level. We can teach the science and maths content, but we do not run entrance coaching batches.",
    },
    {
      question: "How are tutors chosen for a Zira child?",
      answer:
        "We look at the syllabus code, level, exam series and the child's age and temperament, and pick someone who has taught that precise course. We then share a short note about the tutor. If the first lesson does not feel right, say so and we will propose another tutor at no extra cost.",
    },
    {
      question: "What timings work best in Zira?",
      answer:
        "Weekday evenings after school and Sunday mornings suit most families, with early mornings in peak summer. Tutors are based in India and teach in IST, so there is no time-zone problem. We steer away from harvest days, major festivals and heavy-fog evenings, and we agree any change a day or so ahead.",
    },
    {
      question: "How do I start with IB Gram from Zira?",
      answer:
        "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the syllabus, level and exam date. We will suggest a tutor and book a free trial lesson. After the trial you receive a written quote, and only then do you decide whether to continue with a weekly plan.",
    },
    {
      question: "Do you offer help for younger children on the IB PYP or MYP?",
      answer:
        "Yes. For PYP learners we support reading, number sense and the inquiry projects, including the Exhibition. For MYP students we coach criterion-based writing in sciences, Maths and humanities and guide the Personal Project process. Younger students have shorter, more frequent sessions with a parent nearby for the first few weeks.",
    },
  ],

  internalLinks: [
    { label: "IB tutors across India", href: "/india/", description: "See how online IB and IGCSE tuition is organised for students in every Indian city." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "The full list of IB subjects and programmes we teach." },
    { label: "IGCSE tuition", href: "/igcse/", description: "Cambridge and Pearson Edexcel IGCSE subjects and tiers." },
    { label: "IB Diploma support", href: "/programmes/dp/", description: "Higher Level and Standard Level courses, the Extended Essay and TOK." },
    { label: "IB MYP support", href: "/programmes/myp/", description: "Criterion-based help for Classes 6 to 10." },
    { label: "IB PYP support", href: "/programmes/pyp/", description: "Primary inquiry learning and the Exhibition." },
    { label: "IB Maths tutoring", href: "/courses/ib/mathematics/", description: "Analysis and Approaches and Applications and Interpretation." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse tutor profiles and their experience." },
    { label: "Gurugram home tuition", href: "/gurgaon/", description: "The one place where in-person home lessons run." },
    { label: "Contact us", href: "/contact-us/", description: "Book a free trial lesson or ask a question." },
    { label: "Test preparation", href: "/admissions/test-prep/", description: "SAT, ACT and admissions test support." },
    { label: "Blog", href: "/blog/", description: "Guides on IB and IGCSE study planning." },
    { label: "IB and IGCSE tutors in Jalandhar", href: "/jalandhar/", description: "A neighbouring Punjab city page." },
    { label: "IB and IGCSE tutors in Firozpur", href: "/firozpur/", description: "The district headquarters near Zira." },
    { label: "IB and IGCSE tutors in Moga", href: "/moga/", description: "Moga, the next town along the Ludhiana road." },
  ],

  closingHeading: "Start with one free lesson from your Zira home",
  closingBody:
    "Tell us the syllabus, the level and the exam series, and we will pair your child with a tutor who has taught it before. The first lesson is on us, the quote comes in writing, and the lessons happen on a screen at home in Zira. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
