import type { CitySeoPage } from "../types";

/**
 * No IB or Cambridge/Edexcel school could be confirmed in Ambikapur or Surguja, so stripSchools is
 * empty. Clusters name schools already verified on the Raipur, Bhilai and Bilaspur pages and label
 * them as nearby and far away.
 */
export const ambikapur: CitySeoPage = {
  slug: "ambikapur",
  countryName: "Ambikapur",
  countryNameLong: "Ambikapur, Chhattisgarh",
  demonym: "Ambikapur",
  flagCode: "in",
  countryCode: "IN",
  region: "Chhattisgarh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early evening lessons before the winter dark sets in, and Sunday slots when the family is home together",
  lastUpdated: "2026-09-21",
  state: "Chhattisgarh",
  stateCode: "IN-CT",
  geo: { latitude: 23.1189, longitude: 83.1952 },
  wikipedia: "https://en.wikipedia.org/wiki/Ambikapur",
  alternateNames: ["Ambikapur Surguja", "Ambikapur Sarguja", "Sarguja"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Ambikapur | Live Online Home Tuition",
  metaDescription:
    "Live online home tuition for IB and IGCSE students in Ambikapur, Surguja: subject-matched tutors, weekly progress notes and a free trial lesson to begin.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Ambikapur",
  heroEyebrow: "IB & IGCSE HOME TUITION FOR AMBIKAPUR, SURGUJA",
  heroSubtitle:
    "Home tuition for IB and IGCSE students in Ambikapur, taught live and one-to-one over video, with the child at a desk in their own house. Surguja is far from Raipur and further still from any international school, so families here who follow the IB or a Cambridge and Edexcel course usually study with very little local subject support. A tutor matched to the exact paper closes that distance without a single night away from home.",
  primaryKeyword: "IB and IGCSE tutors in Ambikapur",
  imageAltText: "Ambikapur student working through an IGCSE Physics problem with a tutor on a live video lesson",
  secondaryKeywords: [
    "IB tutor in Ambikapur",
    "IGCSE tutor in Ambikapur",
    "IB home tuition Ambikapur",
    "IGCSE home tuition Ambikapur",
    "IB private tuition Ambikapur",
    "IB Maths tutor Ambikapur",
    "IGCSE Maths tutor Ambikapur",
    "IB Physics tutor Ambikapur",
    "IB Chemistry tutor Ambikapur",
    "IB Biology tutor Ambikapur",
    "IB DP tutor Ambikapur",
    "IB MYP tutor Ambikapur",
    "IB PYP tutor Ambikapur",
    "IGCSE online tuition Ambikapur",
    "IB tutor Surguja",
    "IGCSE tutor Sarguja",
    "IB tuition Bishrampur",
    "IB online classes Chhattisgarh",
  ],

  heroTrustPoints: [
    "Live private video lessons, never pre-recorded",
    "Tutors who teach IB PYP, MYP and DP and Cambridge or Edexcel IGCSE",
    "Slots chosen around Surguja's short winter days",
    "A free first lesson and written rates before any commitment",
    "A note after every class and a free tutor change",
  ],
  heroStats: [
    { value: "IST", label: "Same clock as your school" },
    { value: "PYP to DP", label: "All IB stages" },
    { value: "Free trial", label: "First lesson on us" },
    { value: "May & Nov", label: "Exam sessions planned" },
  ],

  intro: {
    heading: "Studying an international syllabus from northern Chhattisgarh",
    paragraphs: [
      "Ambikapur is the headquarters of Surguja district, up at the top of Chhattisgarh where the state runs into Jharkhand and Uttar Pradesh. It is a district town of government offices, a medical college, a university, coal-linked employers around Bishrampur and Surajpur, and a road network that runs south to Bilaspur and Raipur for hours. Children here mostly follow the Chhattisgarh board or CBSE. A very small number, usually the sons and daughters of officers, doctors, engineers or returning professionals, follow the IB or IGCSE, often through a distance route or after a posting elsewhere.",
      "Those families can feel isolated. The syllabus is international, the teachers who know it are mostly in Raipur, Bengaluru or Delhi, and a child in Class 11 with a Higher Level science subject may have nobody within three hundred kilometres to check a solution. Our IB and IGCSE tutors in Ambikapur work as that missing teacher. Lessons are live, private and paced to the child, and each tutor has taught the course the student will actually be examined on.",
      "What follows is an honest local guide, not a brochure. It covers what school options really exist, how Chhattisgarh's board sits against CBSE, the IB and IGCSE, what shapes the cost, how the calendar interacts with monsoon and winter, what universities expect, and how subject teaching is done. IB Gram is independent of the IB, Cambridge, Pearson and every school, and tutors coach and explain but never write assessed work.",
    ],
  },

  programmesIntro:
    "In Ambikapur these programmes almost always arrive by a route other than a local school, and the tutor's task changes with the route: catching up, running alongside, or keeping a child on track after a transfer.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Learning organised by big ideas and projects, ending in an Exhibition. Tutoring is gentle: reading aloud, number games, short writing tasks and practice explaining a thought clearly.",
      countryNote:
        "A child who has arrived in Ambikapur on a parent's posting may come from a PYP school. Short evening lessons keep the habits alive until a family decides the next step.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subject groups assessed by criteria, plus the Personal Project. Tutors teach how to unpack a task and build a response, alongside the content of the topic.",
      countryNote:
        "For students moving from a Chhattisgarh-board school, MYP tasks are a different sort of exercise, so early lessons often go on structure before content.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, the Theory of Knowledge course, the Extended Essay and CAS. Tutors teach the examined content and internal-assessment method; the assessments belong to the student.",
      countryNote:
        "Very few Diploma students in the region have a subject teacher nearby for Higher Level courses, so tuition here often carries the whole weight of HL delivery.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A combination of DP courses with a career-related study and a reflective project. Tutors work on the academic side.",
      countryNote:
        "CP requests from this part of Chhattisgarh are rare. We take them and match a tutor for the chosen DP courses.",
    },
  ],

  subjectsIntro:
    "Every subject is taught by someone who has led students through that paper at that level, and who can explain it twice in different ways when the first explanation does not land.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Functions, calculus and proof-based reasoning, with HL depth built up steadily across the two years." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology skills, suited to students heading toward commerce, medicine or social science." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, waves, fields and modern physics, with problem-solving drills and data questions." },
    { name: "Chemistry", levels: "SL / HL", description: "Quantitative chemistry, energetics, equilibrium and organic pathways with regular calculation practice." },
    { name: "Biology", levels: "SL / HL", description: "From molecules to ecosystems, with careful attention to command terms and diagram questions." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "A natural fit for students who live near Surguja's forests and mining landscape and can use local cases." },
    { name: "Economics", levels: "SL / HL", description: "Diagrams, evaluation and case analysis, including examples from India's coal and agrarian economies." },
    { name: "Business Management", levels: "SL / HL", description: "Frameworks, calculations and unseen business cases." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, programming and system design questions." },
    { name: "Geography", levels: "SL / HL", description: "Population, resources and change, with fieldwork method for the internal assessment." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Analysis, commentary and comparative essays." },
    { name: "Hindi B", levels: "SL / HL", description: "Reading, writing and speaking for a language most Ambikapur students already speak at home." },
    { name: "Theory of Knowledge", levels: "Core", description: "Coaching for discussion and the exhibition; the essay stays the student's work." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE subjects are handled by board code, because the two organise papers and tiers differently.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, geometry and data handling with timed paper practice." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, energy, waves and electricity." },
    { name: "Chemistry", levels: "Core / Extended", description: "Particles, reactions, the mole and organic chemistry." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, human biology, plants and ecology." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For schools that combine the three sciences." },
    { name: "English as a First or Second Language", levels: "Core / Extended", description: "Comprehension, summary and directed writing." },
    { name: "Geography", levels: "Single tier", description: "Physical and human topics with case studies and skills papers." },
    { name: "Computer Science", levels: "Single tier", description: "Programming, hardware and data." },
    { name: "Economics and Business Studies", levels: "Single tier", description: "Concepts and calculations for short and long answers." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Reading and writing tasks with oral practice." },
  ],

  regionsTitle: "Ambikapur and the towns of Surguja",
  regionsIntro:
    "Surguja is a spread-out district, so where a family lives shapes how a lesson fits into the day more than the school does. These notes describe what local life usually looks like.",
  regions: [
    { name: "Ambikapur city centre and the Mahamaya temple area", note: "The busiest core of the town. Homes and shops share narrow lanes, and festival crowds at the Mahamaya temple can slow local evenings for a few days." },
    { name: "Darima and the airport road", note: "The airport and the university side of town. It has a quieter, campus-like feel with officers' housing and staff families." },
    { name: "Government offices and medical college neighbourhoods", note: "Residential areas where doctors, officials and teachers live. Children here sometimes have a parent who moved from another state." },
    { name: "Lakhanpur", note: "A block town close to Ambikapur, with many families who commute in for work or shopping and prefer afternoon slots." },
    { name: "Sitapur", note: "A taluk town on the road toward the north, where school options thin out and online support matters more." },
    { name: "Bishrampur", note: "A coal-mining centre where families of engineers and mine staff live. Shift patterns affect when a parent can be at home for a lesson." },
    { name: "Surajpur", note: "A district town south of Ambikapur with a growing professional population; some children travel to Ambikapur or Bilaspur for school." },
    { name: "Mainpat", note: "The hill plateau known for its Tibetan settlement and cool weather. Connectivity can be patchy, so families there should plan a backup connection." },
    { name: "Wadrafnagar and Balrampur", note: "Towns further north-east, where distance from any large school is even greater and tuition at home is the practical choice." },
  ],

  schoolClusters: [
    {
      city: "Ambikapur and Surguja",
      note: "We could not confirm any school in Ambikapur or Surguja district as an authorised IB World School or a listed Cambridge or Edexcel centre. Local options for these syllabuses are, in plain terms, none we can verify.",
      schools: [],
    },
    {
      city: "Nearby: Raipur",
      note: "Raipur, the state capital, is the closest large city with confirmed schools. Distance from Ambikapur is several hours by road, so it suits boarding or a family move rather than a daily commute.",
      schools: ["Rungta International School, Raipur", "N.H. Goel World School, Raipur"],
    },
    {
      city: "Nearby: Bhilai and Nagpur",
      note: "Two more confirmed options further away, in Bhilai and in Nagpur. Both are far from Ambikapur and are listed only for families researching boarding or relocation.",
      schools: ["Rungta Public School, Bhilai", "D Y Patil International School, MIHAN"],
    },
  ],
  schoolDisclaimer:
    "The schools above are named only to show where confirmed IB or Cambridge options lie relative to Ambikapur. IB Gram is an independent service with no affiliation to the IB, Cambridge, Pearson or any school, and each school decides its own admissions.",

  modesIntro:
    "Tutors do not visit homes in Ambikapur, so all three formats run online, live and private. They are designed to work around Surguja's connectivity and its distances.",
  modes: [
    {
      title: "Private online lessons at home",
      description: "One tutor, one student, one live lesson, from your own study table in Ambikapur.",
      bullets: ["Digital whiteboard and shared papers", "A consistent tutor", "Weekly notes for parents"],
    },
    {
      title: "Revision blocks before exams",
      description: "Short, focused periods ahead of school tests and IB or IGCSE sessions.",
      bullets: ["Timed papers with debrief", "Command-term drills", "Buffer time in case of power cuts"],
    },
    {
      title: "Long-term weekly support",
      description: "One steady weekly lesson in a single subject across the school year.",
      bullets: ["Good for MYP and IGCSE years", "Pauses for festivals", "Change subject as needs shift"],
    },
  ],

  tutorsIntro:
    "Tutors teach from across India on Indian Standard Time, and because Surguja sits at the same clock, no lesson has to be squeezed into an awkward hour.",

  sections: [
    {
      heading: "Is there any IB or IGCSE school in Ambikapur or Surguja?",
      paragraphs: [
        "Not one that we can confirm. We looked at the IB's school directory and at Cambridge listings and found no authorised school in Ambikapur, Surajpur, Bishrampur or elsewhere in Surguja. Private schools in the district are CBSE or Chhattisgarh-board, and several have good reputations for board results and entrance-exam coaching.",
        "The closest confirmed IB and Cambridge schools are in Raipur and Bhilai, and one in Nagpur. Road distances from Ambikapur to Raipur run to a long day's drive, so a child would have to board or the family would have to relocate. Both are big decisions, and the fees are considerable.",
        "That is why the families who do follow these syllabuses in Ambikapur tend to be a specific set: officers on a district posting whose child is mid-programme, doctors and faculty who came from bigger cities, coal-industry engineers with children in an international stream, or households planning study abroad who choose the IGCSE or IB route deliberately.",
        "For all of them, the honest picture is that the teacher who knows the paper is not local. A live private tutor is a practical answer, and we would sooner say so plainly than pretend Ambikapur has a school infrastructure it does not.",
      ],
    },
    {
      heading: "Chhattisgarh board, CBSE, IB and IGCSE side by side",
      paragraphs: [
        "In Ambikapur the Chhattisgarh Board of Secondary Education and CBSE carry the great majority of students. Both lead toward state entrance tests, JEE, NEET and university admission through CUET-UG. The IB and IGCSE stand at some distance from these, with different papers and a different kind of answer.",
        "The board differences matter most at the moment a student switches. Chhattisgarh-board and CBSE papers reward correct recall of textbook content, the IB rewards reasoned answers to unfamiliar questions, and IGCSE sits between the two with tiered papers. Families should decide which route they are on well before Class 9.",
        "This table gives a plain summary.",
      ],
      table: {
        caption: "Boards a Surguja family may weigh",
        columns: ["Board", "What the exams reward", "Usual language", "What follows", "Local support in Ambikapur"],
        rows: [
          ["Chhattisgarh board", "Recall of the state textbook", "Hindi or English", "State colleges, CG state entrance tests", "Plentiful"],
          ["CBSE", "Accurate NCERT-based answers", "English or Hindi", "JEE, NEET, CUET-UG", "Plentiful"],
          ["IGCSE (Cambridge or Edexcel)", "Precise expression to the mark scheme", "English", "IB, A Level or Indian Class 11", "Almost none"],
          ["IB Diploma", "Reasoning, application and extended writing", "English", "Indian and overseas universities", "None we could confirm"],
        ],
      },
    },
    {
      heading: "What determines the cost of IB and IGCSE tuition in Ambikapur?",
      paragraphs: [
        "We do not print prices, and there is a reason. Two families in Ambikapur asking for tuition can want completely different things, and a single number would suit neither. Instead, a written quote is sent before any lesson is booked, and it names exactly what the rate covers.",
        "Level comes first. Preparing a student for Higher Level Physics or Mathematics calls for a tutor who has marked or taught those papers for years, and that experience is priced accordingly. A younger student in the MYP or the lower IGCSE years is a different, lighter engagement.",
        "Scarcity comes second. Some subjects have plenty of qualified tutors and others very few. If your child studies Geography HL or Computer Science HL, a suitable tutor may be harder to find, which affects the quote.",
        "The pattern of lessons comes third. A student who takes one lesson a week for a full year gives the tutor time to plan. A student who wants four lessons a week for a month before an exam is asking for an intensive block.",
        "One local factor counts too. Because Ambikapur is far from any centre, the alternative to online tuition is not an hour's drive but a night in another city. Compared with that, an online lesson at home tends to be the cheaper route in total.",
      ],
      bullets: [
        "The level of the course (Standard, Higher, Core or Extended)",
        "How few qualified tutors teach that subject",
        "Lessons per week and how long the plan runs",
        "Whether it is regular support or an exam-season block",
      ],
    },
    {
      heading: "Online tutoring, the Raipur route, local tutors and studying alone",
      paragraphs: [
        "Ambikapur students have four choices, and they are not equal. Going to Raipur for tuition or school is feasible for a few, though costly and disruptive. Local tutors are easy to find for the Chhattisgarh board and CBSE, but rare for international papers. Self-study is possible for strong students. Online private tutoring is the one that puts a specialist at the desk without any travel.",
      ],
      table: {
        caption: "Ways an Ambikapur student can get IB or IGCSE help",
        columns: ["Choice", "Subject expertise", "Distance", "Practical catch"],
        rows: [
          ["Live online private lessons", "Matched to the exact paper", "None; taught at home", "Needs a reliable connection and power backup"],
          ["Boarding or tuition in Raipur", "Strong", "Several hours away", "High cost and time away from family"],
          ["Local private tutor", "Chhattisgarh board or CBSE", "Near home", "Few have taught international papers"],
          ["Self-study with past papers", "Depends on the student", "None", "No one to correct mistakes"],
        ],
      },
    },
    {
      heading: "Monsoon, winter and festivals: how the Ambikapur year shapes study",
      paragraphs: [
        "Surguja has real seasons, and each one affects how a student can study. The monsoon from June to September brings heavy rain and occasional power interruptions. Winter, from late November to February, is among the coldest in Chhattisgarh, with early darkness and dense mist. Summer is hot, but the plateau is milder than the plains further south.",
        "Festivals add their own breaks. Hareli and Pola in the monsoon, Dussehra and Diwali in autumn, Chhath for families with roots in Bihar or eastern Uttar Pradesh, and Holi in March all reduce study hours for a few days. Lessons are simply moved rather than lost.",
        "Exam windows are set by the boards. The IB Diploma has May and November sessions, with results in July and January. Cambridge IGCSE offers sessions around February and March, May and June, and October and November, and Pearson Edexcel International GCSE has January, May and June, and October and November.",
      ],
      table: {
        caption: "The Ambikapur study year",
        columns: ["Season", "Local conditions", "Effect", "Tutoring plan"],
        rows: [
          ["Jan to Mar", "Cold nights, Holi; IGCSE February series", "Short days, shivering evenings", "Early evening lessons, warm-room set-up"],
          ["Apr to Jun", "Heat builds; IB May session", "Exam stress plus summer", "Morning or late-evening slots; backup power"],
          ["Jul to Sep", "Monsoon, Hareli, Pola; IB results", "Rain-related connectivity gaps", "Recorded notes after each lesson; flexible reschedule"],
          ["Oct to Dec", "Dussehra, Diwali, Chhath; November sessions", "Long holiday gaps", "Front-loaded revision, then buffer weeks"],
        ],
      },
    },
    {
      heading: "Where do students from Ambikapur go after IB or IGCSE?",
      paragraphs: [
        "Ambikapur has its own university and a government medical college, so a student who stays local has options. But an IB Diploma or IGCSE student is more likely to look outward: to Raipur, Bhopal, Delhi, Pune or Bengaluru for engineering and medicine, or overseas for undergraduate study.",
        "IB Diploma holders use the Association of Indian Universities equivalence process for Indian admissions, and CUET-UG is the usual route to central universities. Engineering and medicine depend on the subject combination chosen at the start of Class 11, so the eligibility rules for JEE and NEET should be checked with the exam authority before the subjects are locked in.",
        "IGCSE students choose between the IB, A Level and an Indian Class 11 stream. Because moving between systems is easiest before Class 11, the decision is best made in Class 9 or early Class 10.",
        "Study abroad brings its own paperwork: predicted grades, school reports, English-language tests and, often, a coherent extracurricular record. Tutoring can lift the grades that those applications depend on, but the application itself is a family and school process.",
      ],
    },
    {
      heading: "IB Mathematics AA and AI, and the three sciences, in Ambikapur classrooms",
      paragraphs: [
        "Analysis and Approaches is the more abstract course: calculus, functions, sequences, and at Higher Level a heavy dose of proof and complex numbers. Applications and Interpretation leans on statistics, financial maths and modelling with a calculator. A student who plans engineering or physics should lean toward AA; one who plans economics, biology or design may prefer AI.",
        "The largest single problem we see in students from smaller towns is unfamiliarity with how IB Mathematics asks its questions. The content itself is not beyond them, but multi-step questions with a modelling context, or a proof, are unlike a textbook exercise. Tutors spend early lessons on that style.",
        "For the sciences, the tutor's role is to keep the student working at the right pace. Physics needs steady practice on problems, Chemistry needs firm mole calculations, and Biology needs precision in definitions. Each session begins with the mistakes of the previous week.",
        "Practical work and internal assessments are the student's own. A tutor can explain how a criterion is marked and how to design a fair investigation, but does not carry out, write or correct the report.",
      ],
    },
    {
      heading: "IGCSE choices: board, tier and subject mix for an Ambikapur student",
      paragraphs: [
        "The first IGCSE decision is the board. Cambridge and Pearson Edexcel are both respected, but the papers differ. If your child's school has already chosen, the tutor follows that board; if you are choosing, ask how each fits the intended route into Class 11.",
        "Then there is the tier. Cambridge Core papers are capped below the top grades, so students headed for science at IB or A Level should generally take Extended. Edexcel Foundation and Higher tiers work on the same principle. It is better to choose the tier that gives a student a fair chance at their real target grade than to stretch out of reach.",
        "The subject mix should preserve options. A student who wants to keep engineering or medicine open should combine mathematics, all three sciences and English. A student leaning toward business or law might add economics and business studies.",
        "Students coming from Hindi-medium schooling often find extended English writing the hardest paper. A few weeks of directed-writing practice, with feedback on each attempt, usually changes the picture.",
      ],
    },
  ],

  process: [
    { title: "Share the basics", description: "Send us your child's programme, subject, level and exam date by WhatsApp or email." },
    { title: "See the tutor match", description: "We choose a tutor who has taught that paper and send a brief introduction." },
    { title: "Take the free lesson", description: "A real live class on a topic your child is studying, with no cost and no commitment." },
    { title: "Review the written rate", description: "If you wish to continue, the rate and plan are sent in writing before anything is booked." },
    { title: "Keep learning weekly", description: "Regular live lessons, a short note after each, and a tutor swap if it is not working." },
  ],

  whyPoints: [
    { title: "A teacher who knows the paper", description: "The person who teaches has taught the exact course, so your child is not the first they have coached." },
    { title: "Scheduled around Surguja life", description: "Timings respect winter darkness, monsoon power cuts and festival weeks." },
    { title: "Plain about local limits", description: "We tell you directly that Ambikapur has no confirmed IB or Cambridge school, and plan on that basis." },
    { title: "Progress written down", description: "A short note after every class shows what was covered and what is next." },
    { title: "Coaching, not writing", description: "Tutors explain and guide; internal assessments, essays and coursework stay the student's own." },
    { title: "Low risk to start", description: "The trial is free, the rate is written, and a change of tutor costs nothing." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Ambikapur?", answer: "None that we could confirm. We checked the IB directory and Cambridge listings and found no authorised school in Ambikapur or elsewhere in Surguja district. The nearest confirmed options are in Raipur, Bhilai and Nagpur, all a long way off, which is why many families rely on live online tuition alongside their school." },
    { question: "Will a tutor come to our house in Ambikapur?", answer: "No. Tutors do not visit homes in Ambikapur, because home visits run only in Gurugram and parts of Delhi NCR. Our online home tuition puts a tutor on your child's screen for a live one-to-one lesson, and the child studies at home in the usual place with the family nearby." },
    { question: "How do I get IB and IGCSE tutors in Ambikapur for a particular subject?", answer: "Message us with the programme, subject, level and exam session. We pick a tutor with experience of that exact paper, share a short profile, and arrange a free trial lesson. If the trial does not feel right, another tutor is offered at no extra cost." },
    { question: "What will IB tuition cost from Ambikapur?", answer: "It depends on level, subject scarcity, lessons per week and the length of the plan. There is no published price list. A written quote is sent before booking, so you can decide without pressure and compare it with the cost of travelling elsewhere." },
    { question: "Is the internet reliable enough for live lessons?", answer: "For most homes in Ambikapur city, yes. Mainpat, Sitapur and villages can be patchier. We suggest a mobile hotspot as backup, and if a power cut or connection drop cuts a lesson short, we shift the remaining time to another slot that week." },
    { question: "Can my child switch from the Chhattisgarh board to IB or IGCSE?", answer: "It can be done, and the earlier the better. Content overlap is real, but IB and IGCSE ask questions differently and expect longer written answers. A tutor starts with that style and fills content gaps as they surface." },
    { question: "Which IB exam sessions do you support?", answer: "Both the May and November sessions. The school registers the candidate, and we plan lessons backwards from the paper dates. IB results are published in July and January." },
    { question: "Do tutors write the IA or Extended Essay?", answer: "No. Tutors coach and explain, but they never write internal assessments, Extended Essays, TOK essays or coursework. They can discuss method and criteria and comment on drafts the student wrote." },
    { question: "What happens in the free trial lesson?", answer: "It is a live class on a real topic from your child's syllabus, taught by the tutor you would work with. No payment or commitment is needed. Afterwards you get a written summary, and the rate follows in writing if you ask for it." },
    { question: "Do you teach Cambridge and Edexcel IGCSE?", answer: "Both. Tutors are matched by board code as well as subject, since papers and tiers differ. Tell us your child's board and we find someone who knows it." },
    { question: "How should we choose between Maths AA and AI?", answer: "Analysis and Approaches suits students who enjoy algebra and calculus and plan engineering or physical science. Applications and Interpretation suits students headed for medicine, business or social science. A tutor can review your child's strengths before Class 11 choices are made." },
    { question: "Can students from Surajpur, Bishrampur or Mainpat join?", answer: "Yes, because lessons are online. Any place in Surguja with a decent connection works. Families in Mainpat should plan for occasional patchy signal, and Bishrampur families often prefer slots that fit a parent's shift." },
    { question: "When are lessons scheduled?", answer: "Early evenings on weekdays and Sundays are common, on Indian Standard Time. In winter, earlier slots are popular because of the short days. Exam blocks may add more sessions, and festival weeks are worked around." },
    { question: "Is the IB Diploma accepted by Indian universities?", answer: "Generally yes, with an Association of Indian Universities equivalence certificate, and CUET-UG is the usual route for central universities. Engineering and medicine depend on subjects taken, so check JEE and NEET rules before finalising Class 11 subjects." },
    { question: "How do we begin?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's board, subject and level. We normally reply within a day or two with a tutor match and a trial time." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "How this service runs in cities across the country." },
    { label: "IB tutors, all programmes", href: "/ib-tutors/", description: "Overview of IB tutoring at IB Gram." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects." },
    { label: "Diploma Programme tutoring", href: "/programmes/dp/", description: "Support for Classes 11 and 12." },
    { label: "MYP tutoring", href: "/programmes/myp/", description: "Criterion-based support for Classes 6 to 10." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "AA and AI at Standard and Higher Level." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of the tutors who teach the lessons." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a free trial lesson." },
    { label: "IB and IGCSE tutors in Raipur", href: "/raipur/", description: "The state capital, with the region's confirmed IB and Cambridge schools." },
    { label: "IB and IGCSE tutors in Bilaspur", href: "/bilaspur/", description: "The main city of northern and central Chhattisgarh." },
    { label: "IB and IGCSE tutors in Korba", href: "/korba/", description: "A coal and power city in the same state." },
  ],

  closingHeading: "Start a free trial lesson from home in Ambikapur",
  closingBody:
    "Send us your child's programme, subject and exam session, and we will pair a tutor and arrange a free first lesson. The rate reaches you in writing before you decide. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
