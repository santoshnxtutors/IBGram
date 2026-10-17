import type { CitySeoPage } from "../types";

/**
 * /satara/ - IB and IGCSE tutoring page for Satara, Maharashtra. No school in Satara city is confirmed to
 * teach IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and clusters use Pune and Atigre names
 * reused from the verified Pune and Sangli pages. All lessons online.
 */
export const satara: CitySeoPage = {
  slug: "satara",
  countryName: "Satara",
  countryNameLong: "Satara, Maharashtra",
  demonym: "Satara",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and Sunday slots that work around the monsoon downpours, Ganeshotsav week and the SSC and HSC exam months",
  lastUpdated: "2026-09-21",
  geo: { latitude: 17.6805, longitude: 74.0183 },
  wikipedia: "https://en.wikipedia.org/wiki/Satara,_Maharashtra",
  alternateNames: ["Satara city", "Satara Maharashtra"],
  stripSchools: [],

  title: "Satara IB & IGCSE Tutors | Online Private Home Tuition",
  metaDescription:
    "Satara students can learn IB and IGCSE online, one to one, with tutors timed around monsoon and Ganeshotsav, and a free trial lesson to start.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Satara",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR SATARA STUDENTS",
  heroSubtitle:
    "Private tuition from home for Satara students taking IB or IGCSE: a live, one-to-one online lesson with a tutor who has taught your syllabus before. Satara city sits a couple of hours from Pune but has no school we can confirm for these boards, so families use the laptop at home instead of a weekly drive up the highway.",
  primaryKeyword: "IB and IGCSE tutors in Satara",
  imageAltText: "A Satara school student in a live online IGCSE Biology lesson with a tutor, laptop on a home desk",
  secondaryKeywords: [
    "IB tutor Satara",
    "IGCSE tutor Satara",
    "IB home tuition Satara",
    "IGCSE home tuition Satara",
    "IB private tuition Satara",
    "IB Maths tutor Satara",
    "IGCSE Maths tutor Satara",
    "IB Physics tutor Satara",
    "IB Chemistry tutor Satara",
    "IB Biology tutor Satara",
    "IB DP tutor Satara",
    "IB MYP tutor Satara",
    "IB PYP tutor Satara",
    "IGCSE online tuition Satara",
    "IB tutor Sadar Bazar Satara",
    "IGCSE tutor Powai Naka",
    "IB tutor Karad Wai Koregaon",
    "online IB tutor Satara Maharashtra",
    "Cambridge IGCSE tutor Satara",
  ],

  heroTrustPoints: [
    "Specialists who have already taught the exact IB subject or IGCSE code",
    "Lessons stay online in Satara; in-person tuition is only in Gurugram and parts of Delhi NCR",
    "A written summary after each class, and a fair way to change tutor",
    "Free trial first, then a written rate",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The full IB range" },
    { value: "Cambridge + Edexcel", label: "IGCSE boards" },
    { value: "IST evenings", label: "After school and classes" },
    { value: "Free trial", label: "Judge the lesson yourself" },
  ],

  intro: {
    heading: "Satara families, Pune schools and online IB and IGCSE tuition",
    paragraphs: [
      "Satara is a district city with a proud history, a well-known Sainik School and a steady flow of families to Pune for work and study. When a parent here asks about IB or IGCSE home tuition, the reasons are usually practical: a child heading to a Pune school that runs these boards, a transfer already in motion, or a plan for university abroad.",
      "We have not been able to confirm any school inside Satara city that teaches the IB or a Cambridge or Pearson Edexcel IGCSE. Local schools follow the Maharashtra State Board, CBSE or ICSE. The closest confirmed international-board schools are in Pune and in the Kolhapur belt, so the lessons we provide are online and in IST, with no tutor travelling to Satara.",
      "The advantage of that arrangement is reach. Pune has an unusually deep pool of teachers who have taught IB and IGCSE, and an online lesson lets a Satara student use them without the two-hour drive. The child sits at home with a laptop, a notebook and a shared whiteboard, and a tutor marks the working line by line.",
      "IB Gram stands apart from the IB, Cambridge, Pearson and every school mentioned here. Our tutors coach and comment on work, but Internal Assessments, Extended Essays, TOK essays and coursework are never written by them.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, and Cambridge and Edexcel IGCSE",
      "Live one-to-one lessons in English, taught from India",
      "A free trial lesson before any fee is discussed",
      "No in-person visits in Satara, as home visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Satara students meet these programmes mostly through a planned move, so tutoring is timed to a target: a Pune admission test, an incoming term or a set of mock papers. The notes below describe what each stage asks of a student.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "Young children work on inquiry units and share what they discover, finishing with an Exhibition in the last year. Nobody sits an external paper. Tutors focus on the basics that make inquiry easier: confident reading, tidy writing, number sense and the habit of asking questions.",
      countryNote:
        "In Satara, PYP tutoring often prepares a child for a Pune school admission or supports a returning family, and lessons run short and gentle.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Every subject is graded on set criteria, and projects and investigations count alongside tests. Students who come from a Maharashtra State Board classroom often know the facts but have not been asked to justify, compare or reflect in writing. That gap is where a tutor helps most.",
      countryNote:
        "Satara students preparing for an MYP place in Pune typically work on English writing, science investigations and Maths problem-solving in context.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, with three at Higher Level, and the core of TOK, the Extended Essay and CAS. The total score is out of 45, and examinations run in May or November. Internal assessments carry a defined share of the mark, so the work is spread across two years.",
      countryNote:
        "DP students from Satara are usually enrolled in a Pune school, often as boarders, and use online lessons for weekends and holidays.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP pairs at least two Diploma courses with a career-related qualification and a reflective core. Indian schools rarely offer it. The Diploma subjects in a CP are taught to the same standard as in the full DP.",
      countryNote:
        "We seldom see CP requests from Satara; when we do, we handle the Diploma subjects as we would for any DP student.",
    },
  ],

  subjectsIntro:
    "Give us the subject, level and exam session, and we can find someone who has taught it. IB Maths, for instance, is two courses with two levels each, and a tutor for Applications and Interpretation at Standard Level is a different match from one for Analysis and Approaches at Higher Level.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions and calculus with proof. Maharashtra board students often find the content familiar and the written justification new." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology, taught with real data sets and a graphing calculator." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves, fields and modern physics, with explicit practice on data analysis." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative work, energetics, kinetics and organic chemistry, with the data booklet used from the first lesson." },
    { name: "IB Biology", levels: "HL / SL", description: "A broad syllabus. Lessons build a routine of recall, application and exam-style answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and evaluation, with examples that can draw on sugar cooperatives and agricultural markets in western Maharashtra." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study analysis, business tools and the internal research project." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Reading unseen texts closely and building comparative arguments, for students who study in Marathi or English medium." },
    { name: "IB Marathi B", levels: "HL / SL", description: "Comprehension, writing and speaking practice for students who already speak Marathi at home." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language skills and oral practice." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming logic and an internal project built in stages." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking with local material such as the Western Ghats and river-basin use." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies and fieldwork skills." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, methods and structured essays." },
  ],

  igcseSubjectsIntro:
    "IGCSE has two main boards, Cambridge and Pearson Edexcel. A tutor must know which one your child will sit, because the paper structure, tiers and command words differ. The subjects below are the ones Satara families ask about.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths with a non-calculator paper and a calculator paper. Extended candidates are drilled on algebra and geometry." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "For strong Maths students; calculus and vectors early." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson's Maths, two equal papers, with method marks throughout." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, forces, electricity and waves, including alternative to practical practice." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Reactions, bonding, rates and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, human biology, plants and ecology." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing and speaking for Marathi and Hindi speakers." },
    { name: "IGCSE First Language English 0500", levels: "Grade 9-10", description: "Composition and directed writing." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming logic, networks and data." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Introductory economics with data questions." },
    { name: "IGCSE Marathi as a Second Language", levels: "Grade 9-10", description: "Language skills for students who wish to include Marathi in their subject set, subject to the board's current offering." },
  ],

  regionsTitle: "Satara localities and nearby towns our tutors serve online",
  regionsIntro:
    "An online lesson looks the same from Sadar Bazar or from a village near Koregaon. The notes below show how families in each part of Satara usually organise the day, including highway timings, school hours and weather.",
  regions: [
    { name: "Sadar Bazar", note: "The commercial heart of Satara city; many households here run shops, so evening lessons follow closing time." },
    { name: "Powai Naka and Rajwada", note: "Central areas close to the bus stand and old palace precinct; students often attend several tuitions, so lessons usually sit after dinner or on Sundays." },
    { name: "Shahupuri", note: "A residential neighbourhood where many households already send children to Pune for higher study." },
    { name: "Godoli", note: "A growing residential area on the Pune side of the city, home to families who commute to Pune for work." },
    { name: "Karanje", note: "Residential and close to schools; students commonly come home to a quiet study window before evening tuitions." },
    { name: "Sangam Mahuli", note: "The old riverside pilgrim town at the confluence of the Krishna and Venna; connection strength can dip in heavy rain." },
    { name: "Satara MIDC and Kodoli", note: "Industrial and residential areas where shift patterns matter, so a fixed weekend slot is popular." },
    { name: "Koregaon and Wai", note: "Towns in Satara district where families travel to Satara or Pune for schooling; online lessons save a long bus or car journey." },
    { name: "Karad", note: "A larger town to the south with a strong medical and educational culture; families here often look towards Pune or Kolhapur for international schooling." },
    { name: "Panchgani and Mahabaleshwar", note: "Hill stations in the district with boarding-school culture; students there follow their school timetables and use online lessons in holidays." },
  ],

  schoolDisclaimer:
    "The schools named on this page are shown solely to explain where IB and IGCSE classrooms exist near Satara. IB Gram has no arrangement with them, nor with the IB, Cambridge or Pearson. Please verify programmes and admissions with each school before making decisions.",
  schoolClusters: [
    {
      city: "Local: Satara city",
      note: "We could not confirm any school in Satara city that offers IB or Cambridge or Edexcel IGCSE, so we list none. The city's schools follow the Maharashtra State Board, CBSE or ICSE.",
      schools: [],
    },
    {
      city: "Nearby: Pune",
      note: "About two hours up the highway, Pune has the region's deepest choice of IB and IGCSE schools, and is the usual destination for Satara families who change board.",
      schools: ["Mahindra International School", "Symbiosis International School", "Indus International School, Pune"],
    },
    {
      city: "Nearby: Atigre, Kolhapur district",
      note: "A school south of Satara on the Kolhapur side; it appears on our Sangli page as an international-board option.",
      schools: ["Sanjay Ghodawat International School, Atigre"],
    },
  ],

  modesIntro:
    "Every Satara student learns online. Families then choose the rhythm: one lesson each week, a longer plan with notes and reviews, or a burst of intense preparation before a paper.",
  modes: [
    {
      title: "Lessons every week",
      description:
        "A recurring slot with one tutor. The student brings work, the tutor teaches the next topic and corrects errors on the spot.",
      bullets: [
        "A tutor chosen for your subject, level and board",
        "Usually an hour each week",
        "Written working on a shared board",
        "Suitable for IGCSE, MYP and DP",
      ],
    },
    {
      title: "Planned term with progress notes",
      description:
        "A roadmap for the term and a written summary after each class, with a review every few weeks to adjust the order of topics.",
      bullets: [
        "Notes that non-specialist parents can follow",
        "Regular reviews with you",
        "Fits students who also attend school-based classes",
        "Extra sessions before class tests",
      ],
    },
    {
      title: "Focused weeks before exams",
      description:
        "As mocks and the May or November sessions near, lessons come more often and are mainly timed papers followed by line-by-line feedback.",
      bullets: [
        "Papers marked to the board's style",
        "Two to four sessions a week if the timetable allows",
        "Planned outside SSC and HSC weeks and Ganeshotsav",
        "Best started about three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Satara, and where do families turn?",
      paragraphs: [
        "We could not confirm any school in Satara city that teaches the IB or the Cambridge or Edexcel IGCSE. Schools here are affiliated to the Maharashtra State Board, CBSE or ICSE. The Sainik School near the city follows a defence-oriented CBSE-style curriculum and is a well-known option for local families.",
        "Families who want an international board usually look to Pune. Its schools include Mahindra International School, Symbiosis International School and Indus International School, and each has its own admission process and sessions. Some parents relocate to Pune, some place their child in a boarding house, and some wait until Class 9 or 11 to move.",
        "A smaller group looks south, towards Atigre in Kolhapur district, where Sanjay Ghodawat International School offers an international-board option. Families in Karad and Wai often compare Pune and Kolhapur before choosing.",
        "The important point is that a local, affordable option does not exist yet. Online tutoring fills the gap for a family that is preparing to move or is supporting a child who is already enrolled elsewhere.",
      ],
    },
    {
      heading: "How do the Maharashtra board, CBSE, ICSE, IGCSE and IB compare?",
      paragraphs: [
        "The Maharashtra State Board holds SSC at Class 10 and HSC at Class 12, generally in February and March, with a syllabus in Marathi, English or other media. CBSE and ICSE follow national syllabi. IGCSE and IB are international programmes and are examined in May and November sessions.",
        "State board students often reach Class 10 strong on facts and definitions, and may be less practised at extended, open-ended writing. IB and IGCSE assessment asks students to explain their reasoning, so the first weeks of tutoring usually go into writing structure and command words.",
        "For entrance to Maharashtra's engineering and medical colleges, the state's CET routes matter, along with JEE and NEET. IB and IGCSE students should check equivalence and eligibility rules with the relevant authority well in advance, especially for domicile-based admissions.",
        "For a Satara family, the practical question is where the child will finish school. If it is Pune or abroad, an international board may suit. If the plan is a state-based professional course, the state board or CBSE is often the smoother path.",
      ],
      table: {
        caption: "Board choices from Satara at a glance",
        columns: ["Board", "Where taught", "Assessment feel", "Main exam months"],
        rows: [
          ["Maharashtra State Board", "Most local schools", "Fact-based, Marathi or English", "Feb-Mar"],
          ["CBSE", "Private schools and Sainik School", "National syllabus, application questions", "Feb-Mar"],
          ["ICSE / ISC", "A few schools", "English-rich, wide syllabus", "Feb-Mar"],
          ["IGCSE", "Pune and beyond", "Applied, two boards", "May-Jun, Oct-Nov"],
          ["IB Diploma", "Pune and beyond", "Six subjects plus core", "May, November"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Satara family?",
      paragraphs: [
        "There is no set price on our site because the rate depends on the student. We quote it in writing after the free trial lesson, and it reflects the level of the course, the subject, the tutor's experience with the exact syllabus and the number of lessons a week.",
        "Higher Level IB Physics is a different task from IGCSE Core English, and rates reflect the depth of specialist knowledge needed. A tutor who has taught a syllabus for several years can usually shorten a student's path to competence, so a higher hourly rate can mean fewer hours overall.",
        "Compared with the alternatives, online lessons save on petrol, tolls and time lost on the Pune highway, and they avoid the cost of renting a room in Pune purely for classes. Parents who plan a Pune move sometimes use online lessons for one or two terms to prepare.",
        "Take the trial lesson first, look at the written rate and decide. You can stop or change tutor at any time.",
      ],
      bullets: [
        "Level taken: IB HL or SL, or IGCSE Core, Extended, Foundation or Higher",
        "Subject and tutor experience with the exact syllabus",
        "Length and frequency of lessons",
        "Steady plan or exam-season intensive",
      ],
    },
    {
      heading: "Online tutor, Pune classes, local home tutor or self-study?",
      paragraphs: [
        "Pune's classes are rich in IB and IGCSE options, but travelling there weekly from Satara costs time and money and wears out a school-age child. A Satara family can reach those same specialists by video without the highway.",
        "Local Satara home tutors are widely available for state board and CBSE subjects and are often strong. Fewer have taught IB or IGCSE, so they work best when the student needs general subject support rather than syllabus-specific coaching.",
        "Self-study is possible for a motivated student using past papers, especially in IGCSE Maths and sciences. It tends to stall on IB internal assessments and on written subjects, where the student needs a reader who knows the criteria.",
        "Online one-to-one lessons give syllabus-specific help and personal attention. They need a reliable connection, which can be a challenge in heavy monsoon weather, so tutors agree a fallback plan.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Satara",
        columns: ["Route", "Strength", "Limit"],
        rows: [
          ["Online one-to-one", "Exact syllabus, personal attention", "Needs stable internet"],
          ["Weekly classes in Pune", "In-person, wide choice", "Time, cost and tiring travel"],
          ["Local home tutor", "Easy to arrange", "Few with IB or IGCSE experience"],
          ["Self-study", "Flexible and free", "No feedback on essays or internal work"],
        ],
      },
    },
    {
      heading: "How does Satara's monsoon and festival calendar affect study?",
      paragraphs: [
        "Satara district lies in the Western Ghats rain belt, and the monsoon, roughly June to September, is heavy. Rivers such as the Krishna and Venna swell, some roads flood and mobile data can slow. A good plan includes a fallback, such as audio plus photographed working, so a storm does not cost a lesson.",
        "The Kaas Plateau blooms in late August and September and draws crowds of visitors, and hill-road traffic thickens at weekends. Families in Satara often find that travel on Saturdays and Sundays is harder in this period, so weekday evenings become more valuable for lessons.",
        "Ganeshotsav, in August or September, is the biggest household event, and many families host guests and attend processions for several days. Diwali follows in October or November. Both fall close to the IGCSE October-November session and IB November exams, so revision needs to be completed beforehand.",
        "February and March hold SSC and HSC exams. Students at state-board schools should have light lessons then, while those preparing for IB or IGCSE at another school will follow that school's calendar.",
      ],
      table: {
        caption: "Study calendar for a Satara IB or IGCSE student",
        columns: ["Months", "Conditions and events", "Planning notes"],
        rows: [
          ["Jan-Feb", "Cool, dry, SSC and HSC begin", "Catch-up lessons; lighter around board weeks"],
          ["Mar-May", "Warm, IB May session, IGCSE May-June", "Timed papers; early evening"],
          ["Jun-Sep", "Monsoon, Kaas bloom, Ganeshotsav", "Plan for outages; hold IA work steady"],
          ["Oct-Nov", "Diwali, IGCSE and IB November sessions", "Revise before festivals"],
          ["Dec", "Cool, school holidays", "Longer sessions and consolidation"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Satara go next?",
      paragraphs: [
        "For study inside India, Pune is the obvious next move from Satara. Students look at Symbiosis, Fergusson College, Flame University, MIT World Peace University and the College of Engineering Pune, among others. Each sets its own entry rules in the prospectus for the intake year in question.",
        "Equivalence certificates from the Association of Indian Universities allow IB and IGCSE-based qualifications to be treated alongside Indian Class 12, and IB Diploma holders may apply to central universities through CUET-UG. Requirements change, so check the current notification.",
        "Engineering and medicine depend on subject choice. Physics, Chemistry and Maths are needed for JEE Main and Maharashtra CET engineering routes, and Biology with Physics and Chemistry for NEET. Students should confirm eligibility before they lock in their IB subject package.",
        "Abroad, IB Diploma and IGCSE results are widely read in the UK, Europe, Canada and Australia, and US colleges consider them with tests and essays. Tutors support the subject side and do not write application essays.",
      ],
    },
    {
      heading: "What makes IB Maths and the sciences hard, and how do tutors help?",
      paragraphs: [
        "Explaining matters as much as calculating in IB Maths. Analysis and Approaches leans on tidy algebra and proof; Applications and Interpretation asks whether a chosen model really fits the situation. Both include the exploration, an independent piece worth one fifth of the final mark.",
        "In Physics, students often lose marks through units, poorly labelled graphs and vague explanations. Chemistry brings a heavy load of calculations, and a student needs speed with the data booklet. Biology is a content-rich course in which command terms decide what counts as a full answer.",
        "For internal assessments, tutors coach on question choice, method and evaluation, and they read drafts to say where a criterion is missed. They do not design the experiment or write the report.",
        "Satara students benefit from a tutor who has worked with Maharashtra board students, because the shift from a fact-led paper to an applied one is the most common stumbling block.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: choosing IGCSE tiers",
      paragraphs: [
        "On Cambridge papers the Core tier stops at grade C and Extended can reach A*. For Edexcel, Foundation tops out at 5 and Higher reaches 9. Anyone planning IB Maths HL or a science Diploma afterwards should sit the upper tier.",
        "The school normally decides. For a private candidate or a family choosing between schools, a diagnostic paper is the best way to judge. If the score is close to the boundary, discuss it with the school or the examination centre.",
        "Subject choice reflects direction. Students pointing to engineering or medicine take Maths, Physics, Chemistry and Biology or Computer Science. Business-oriented students may add Economics, Business Studies and Accounting. A language, including Marathi or Hindi where offered, rounds out the profile.",
        "Confirm the board and code before starting, so that the tutor prepares for the correct paper.",
      ],
    },
  ],

  tutorsIntro:
    "Each Satara match is built around four facts: programme, subject, level and exam board. Your tutor lives and teaches elsewhere in India, keeps IST hours, and arrives with a few lines explaining why their experience suits your child's particular course.",

  process: [
    { title: "Send your child's details", description: "Share the board or programme, subject, level, present school and the evenings that work at your Satara home." },
    { title: "Receive a tutor proposal", description: "We name a tutor and explain what they have taught that fits your child's syllabus." },
    { title: "Sit a free trial lesson", description: "A real lesson online, free and without commitment." },
    { title: "Agree in writing", description: "Frequency, rate and first-month topics are recorded before you pay anything." },
    { title: "Keep going with reviews", description: "Regular lessons with notes, and a change of tutor if you ask." },
  ],

  whyPoints: [
    { title: "Exact syllabus fit", description: "Tutors are picked for the specific subject, level and board your child faces." },
    { title: "Straight about local schools", description: "We say openly that Satara has no confirmed IB or IGCSE school, so your plan is realistic." },
    { title: "Try before you commit", description: "The free trial gives you first-hand evidence of the teaching." },
    { title: "Honest limits", description: "Tutors will not write internal assessments, essays or coursework." },
    { title: "Progress you can see", description: "Written notes and reviews keep you informed." },
    { title: "Freedom to change", description: "If the fit is poor, we find a new tutor without fuss." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Satara city?", answer: "Not one we can confirm. Satara city schools follow the Maharashtra State Board, CBSE or ICSE. The nearest confirmed international-board schools are in Pune and, on the south side, in the Kolhapur district. Ask any school claiming otherwise for its authorisation and its current list of subjects." },
    { question: "Can I get IB home tuition in Satara?", answer: "You can get online home tuition, which is a live one-to-one lesson at home taught by a specialist elsewhere in India. The tutor does not travel to Satara. In-person visits are limited to Gurugram and parts of Delhi NCR, and we say so up front." },
    { question: "Do you have IGCSE tutors in Satara for Cambridge and Edexcel?", answer: "Yes, for both boards. We match on the syllabus code and tier, for example Cambridge 0625 Physics or Edexcel 4MA1 Mathematics A. Lessons are online and taught in IST. Tell us your child's board and exam session before we suggest a tutor." },
    { question: "Do tutors visit homes in Satara?", answer: "No, tutors do not visit homes in Satara; in-person tuition exists only in Gurugram and parts of Delhi NCR. Satara lessons are live, private and online. Set up a laptop or tablet, a stable connection and a quiet desk, and the tutor follows your child's written working on a shared digital whiteboard." },
    { question: "How much does IB or IGCSE tuition cost in Satara?", answer: "It depends on level, subject, tutor experience and how many lessons a week you want, so we do not publish a figure. After the free trial, you receive a written rate and can compare it with the cost of travel to Pune or a change of school." },
    { question: "Which schools near Satara offer IB or IGCSE?", answer: "We cannot confirm any IB or IGCSE school inside Satara city. Families who relocate usually look at Pune, where our Pune page lists Mahindra International School, Symbiosis International School and Indus International School, or at Atigre near Sangli, where Sanjay Ghodawat International School is named on our Sangli page. Check current programmes and admission rules directly with each school." },
    { question: "Is the first lesson free?", answer: "Yes. Your child attends one real lesson with the proposed tutor online, at no cost and with no obligation. Afterwards you decide whether to continue, and we quote the rate in writing before any booking." },
    { question: "Can a tutor help with my child's IA or Extended Essay?", answer: "Guidance is allowed; authorship is not. A tutor will walk through the assessment criteria, help a student narrow a research question, look over a plan and give comments on drafts. The investigation, data and wording have to come from the student, and any request to produce assessed work is turned down." },
    { question: "Which IB Diploma subjects do you cover for Satara students?", answer: "Typical requests are Mathematics AA and AI, the three sciences, Economics, Business Management, English A, Computer Science, Psychology, ESS, Geography and Marathi or Hindi B, at Higher or Standard Level. Combination unusual? Tell us, and we will say plainly whether a suitable tutor is available." },
    { question: "Do you teach IB MYP and PYP to Satara students?", answer: "Yes. PYP lessons are short and activity-based, focusing on reading and number sense. MYP lessons address criterion-based writing, science reports and the Personal Project. Parents receive a note after every lesson." },
    { question: "Is online tutoring as effective as classes in Pune?", answer: "For most subjects, yes, given a stable connection. The tutor and student share a whiteboard and work through problems together. The advantage for Satara is that you skip the highway and the tutor can be chosen for syllabus experience rather than proximity." },
    { question: "How do you choose tutors for Satara students?", answer: "We check qualifications, recent teaching of the specific syllabus and how they explain, and match them to your child's level and goals. We propose a tutor only after understanding your needs, and the trial lesson tests the match." },
    { question: "When should my child start?", answer: "Ideally at the very start, which means Grade 9 for IGCSE and Class 11 for the Diploma. Someone aiming at a Pune admission may begin a term ahead of that and put English and Maths first." },
    { question: "My child is in the Maharashtra board. Can we move to IB or IGCSE?", answer: "A move needs a school seat, since tutoring alone cannot enrol a child in an IB school. A tutor can prepare the student for the applied style, close content gaps and strengthen English writing before the first term." },
    { question: "Can lessons fit around the monsoon and Ganeshotsav?", answer: "Yes. Weekday evenings and Sundays suit most Satara households, and sessions are planned around SSC and HSC weeks, Ganeshotsav and Diwali. During heavy monsoon spells, tutor and family agree a backup, such as voice only with a photo of the written working." },
    { question: "What if my child does not like the tutor?", answer: "Tell us and we will arrange a different tutor. Early check-ins catch problems, and the written plan keeps expectations clear." },
    { question: "Is IB Gram connected to any school or exam board?", answer: "No. IB Gram works independently of the IB, Cambridge, Pearson and every school in Satara, Pune or anywhere else. Schools mentioned on this page give context only." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The same online model in other cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person visits are possible." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "IB programmes and subjects." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure and grading." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry learning for young students." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA versus AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor backgrounds and subjects." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Get in touch to begin." },
    { label: "IB and IGCSE tutoring in Pune", href: "/pune/", description: "The nearest big city with many IB and IGCSE schools." },
    { label: "IB and IGCSE tutoring in Sangli", href: "/sangli/", description: "A neighbouring western Maharashtra city." },
    { label: "IB and IGCSE tutoring in Solapur", href: "/solapur/", description: "Another Maharashtra city using the online model." },
  ],

  closingHeading: "Book a free trial lesson for your Satara student",
  closingBody:
    "Share the programme or board, subject, level and the evenings that suit your Satara household. We will propose a tutor, explain why and arrange a free trial lesson online. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
