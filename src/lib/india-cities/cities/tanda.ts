import type { CitySeoPage } from "../types";

/**
 * /tanda/ - IB and IGCSE tutoring page for Tanda, Ambedkar Nagar district, Uttar Pradesh (not Tanda in
 * Rampur). No school in town is confirmed for IB or Cambridge/Edexcel IGCSE, so stripSchools is empty
 * and clusters use Lucknow and Varanasi names already verified on those pages. All lessons online.
 */
export const tanda: CitySeoPage = {
  slug: "tanda",
  countryName: "Tanda",
  countryNameLong: "Tanda, Uttar Pradesh",
  demonym: "Tanda",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots are set around UP Board exam weeks, winter fog, Ghaghara flood spells and the Chhath, Dussehra and Diwali run",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.55, longitude: 82.65 },
  wikipedia: "https://en.wikipedia.org/wiki/Tanda,_Ambedkar_Nagar",
  alternateNames: ["Tanda Ambedkar Nagar", "Tanda Uttar Pradesh", "Tanda Faizabad"],
  stripSchools: [],

  title: "Tanda (UP) IB & IGCSE Tutors | Online Home Tuition",
  metaDescription:
    "Tanda, Ambedkar Nagar families can get live one-to-one IB and IGCSE tutoring online, planned around UP Board exams and winter fog, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Tanda",
  heroEyebrow: "IB & IGCSE HOME TUITION FOR TANDA, UTTAR PRADESH",
  heroSubtitle:
    "Home tuition for IB and IGCSE students in Tanda, Ambedkar Nagar, is online: a private lesson your child takes on a laptop at home, with a tutor who has taught that exact syllabus. There is no school in the town that we can confirm for these boards, so the lesson replaces a long road trip to Lucknow or Varanasi.",
  primaryKeyword: "IB and IGCSE tutors in Tanda",
  imageAltText: "A Tanda student in Uttar Pradesh joining an online IGCSE Maths lesson with a tutor from home",
  secondaryKeywords: [
    "IB tutor Tanda",
    "IGCSE tutor Tanda",
    "IB home tuition Tanda",
    "IGCSE home tuition Tanda",
    "IB private tuition Tanda",
    "IB Maths tutor Tanda",
    "IGCSE Maths tutor Tanda",
    "IB Physics tutor Tanda",
    "IB Chemistry tutor Tanda",
    "IB Biology tutor Tanda",
    "IB DP tutor Tanda",
    "IB MYP tutor Tanda",
    "IB PYP tutor Tanda",
    "IGCSE online tuition Tanda",
    "IB tutor Ambedkar Nagar",
    "IGCSE tutor Akbarpur Tanda",
    "IB tutor near Ayodhya",
    "online IB tutor Tanda Uttar Pradesh",
    "Cambridge IGCSE tuition Tanda",
  ],

  heroTrustPoints: [
    "Each tutor has already taught the IB subject or IGCSE syllabus your child is studying",
    "Tanda lessons happen on screen only; face-to-face tuition exists just in Gurugram and parts of Delhi NCR",
    "A short written note follows every lesson, and swapping tutors is simple",
    "You see the rate in writing only after the free trial",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "Cambridge + Edexcel", label: "IGCSE boards" },
    { value: "IST", label: "Tutors on Indian time" },
    { value: "Free trial", label: "Try before you decide" },
  ],

  intro: {
    heading: "IB and IGCSE tutoring for Tanda families",
    paragraphs: [
      "Tanda is the largest town in Ambedkar Nagar district, known for its handloom and powerloom cloth, the NTPC power station and its position on the Ghaghara plain between Ayodhya and Azamgarh. Not to be confused with the Tanda in Rampur district, this is the eastern Uttar Pradesh town, and this page is for its families.",
      "Parents here who ask about IB and IGCSE are typically weighing something specific: a child heading to a boarding school in Lucknow or Dehradun, a family posting that will move the household, or plans for a university abroad. We could not confirm any school in Tanda that teaches the IB or a Cambridge or Pearson Edexcel IGCSE; local schools follow the UP Board, CBSE or ICSE.",
      "The service we offer is therefore private and online. A tutor teaches live over video, works on a shared board, marks the student's working and sends a short written note afterwards. Because tutors are chosen from across India, the match is based on who has taught the syllabus, not who lives near the Tanda bypass.",
      "IB Gram is independent and has no connection to the IB, Cambridge, Pearson or any school named on this page. Tutors coach and explain; they do not write Internal Assessments, Extended Essays or coursework for students.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP support, plus Cambridge and Edexcel IGCSE",
      "Live, private lessons over video, taught from India",
      "Free trial lesson, then written rates",
      "No tutor visits in Tanda; home visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "None of these programmes is taught in a Tanda classroom, so they are approached as preparation. The family may be planning a move, a boarding place or a university route, and the tutor's first task is to understand which of those is real.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "PYP organises learning as inquiry into themes and closes with a student-led Exhibition. No external exam is set. For a young learner, tutoring means fluent reading, neat writing, comfort with numbers and the confidence to ask questions.",
      countryNote:
        "Most Tanda PYP enquiries come from families who will relocate or who have lived abroad; lessons are short and use English alongside Hindi or Awadhi at home.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers grade each subject against published criteria, and tasks include investigations, essays and lab reports. A student who has learned to reproduce a textbook answer must learn to justify and reflect. The Personal Project closes the programme.",
      countryNote:
        "For Tanda students entering an MYP school, tutoring concentrates on English writing, scientific method and word-problem Maths.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects, three at Higher Level, along with TOK, the Extended Essay and CAS. A score out of 45 is awarded, and exams run in May or November. Internal assessments spread the workload across two years.",
      countryNote:
        "DP students from Tanda usually attend school in Lucknow or elsewhere, and study with tutors online at weekends and during breaks.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP joins two or more Diploma courses to a career-related study and a reflective core. Very few Indian schools run it. The Diploma courses inside it are taught with the same depth as in the DP.",
      countryNote:
        "Requests for CP from Tanda are rare; where they arise, the Diploma subjects are handled as for DP.",
    },
  ],

  subjectsIntro:
    "The more exactly you describe the need, the better the match. Two students who both say 'IB Maths' may need very different teachers, depending on whether they take Analysis and Approaches or Applications and Interpretation, and on Higher or Standard Level.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof. Students from a UP Board or JEE-oriented background handle the procedures well and need coaching on written reasoning and the exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology. A good fit for students heading to economics, business or life sciences." },
    { name: "IB Physics", levels: "HL / SL", description: "Concepts, data handling and practical design. Tutors work on explanation as much as on calculation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, kinetics and organic reactions, with the data booklet used from the first lesson." },
    { name: "IB Biology", levels: "HL / SL", description: "A large content load, best handled with a steady revision rhythm and command-term practice." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and evaluation, drawing on examples such as handloom and powerloom trade, agricultural markets and small-town enterprise." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based papers, tools of analysis and a research project on a real firm." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis and comparative writing for students whose first languages are Hindi or Awadhi." },
    { name: "IB Hindi A: Literature", levels: "SL / HL", description: "Set-text analysis for students who wish to keep Hindi as a first language." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming logic and a staged internal project." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and structured essays." },
    { name: "IB Political Thinking and Global Politics", levels: "HL / SL", description: "Concepts, cases and argument, offered through Global Politics." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking, with Ghaghara floods and Gangetic-plain agriculture as natural material." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, research methods and extended answers." },
  ],

  igcseSubjectsIntro:
    "Before choosing a tutor, learn which board the child will sit. Cambridge and Edexcel share subject names but not paper layouts. Below are the courses families in and around Tanda ask about.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths with a calculator and a non-calculator paper. Extended candidates work on algebra, trigonometry and geometry." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus, logarithms and vectors, a bridge to IB Maths AA." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson's two-paper Maths with method marks throughout." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, electricity, waves and thermal physics." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, bonding, reactivity and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, plants, human biology and ecology." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing and speaking for Hindi-speaking students." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming and data." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Introductory economics and data questions." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Language skills to add to a science or business profile." },
  ],

  regionsTitle: "Tanda areas and nearby towns our tutors support online",
  regionsIntro:
    "The neighbourhood does not change who can teach your child. It changes timing, connectivity and household rhythm, and the notes below reflect how families in each part of Tanda and its neighbours plan the day.",
  regions: [
    { name: "Tanda city centre and cloth market", note: "The commercial heart, full of handloom and powerloom traders; household schedules follow the market, so lessons often sit after shop closing." },
    { name: "NTPC Tanda township", note: "Home to employees of the power station, many of whom have lived in other states and consider English-medium international boards for their children." },
    { name: "Ayodhya Road side", note: "Homes on the road towards Ayodhya, with residents who commute or have relatives in that city; traffic in festival weeks can be heavy." },
    { name: "Akbarpur", note: "The district headquarters town nearby; government-service families here compare CBSE, UP Board and international options." },
    { name: "Jalalpur", note: "A neighbouring town where families often send children to Tanda or Ayodhya for school; online lessons save a further journey." },
    { name: "Alapur", note: "A tehsil town in the district where mobile data is common and compact sessions with downloadable notes work best." },
    { name: "Baskhari and Kichhauchha", note: "Towns in the district with pilgrimage and Sufi-shrine traffic at certain times of year, which affects roads and networks." },
    { name: "Rajesultanpur", note: "A tehsil town where students commonly attend a local school and a coaching batch, leaving weekends open for longer lessons." },
  ],

  schoolDisclaimer:
    "Where a school appears on this page it is only to show families in Tanda what exists within reach. None has any dealings with IB Gram, and IB Gram speaks for neither the IB, Cambridge nor Pearson. Ask each school itself about seats, fees and current programmes.",
  schoolClusters: [
    {
      city: "Local: Tanda, Ambedkar Nagar",
      note: "No Tanda school has been verified as teaching the IB or Cambridge or Edexcel IGCSE, so none is named. The town runs on UP Board, CBSE and ICSE schools.",
      schools: [],
    },
    {
      city: "Nearby: Lucknow",
      note: "Uttar Pradesh's capital has the closest confirmed set of IB and IGCSE schools for most eastern UP families, several hours away by road or rail, often used for boarding.",
      schools: ["Modern School, Lucknow", "City Montessori School, Cambridge Campus", "GD Goenka Public School, Lucknow"],
    },
    {
      city: "Nearby: Varanasi",
      note: "Varanasi appears on our page for the city as offering an international-board school on its Varuna side.",
      schools: ["Sunbeam International School, Varuna"],
    },
  ],

  modesIntro:
    "Every lesson for a Tanda student is online. What differs between families is the rhythm: a steady weekly lesson, a term plan with written notes, or an intensive block before an exam.",
  modes: [
    {
      title: "One weekly lesson, one tutor",
      description:
        "A recurring evening slot. The student brings homework, the tutor teaches the next unit and corrects errors while they are fresh.",
      bullets: [
        "A tutor matched on subject, level and board",
        "Around an hour a week for each subject",
        "Working written on a shared board",
        "Suitable for IB, MYP and IGCSE",
      ],
    },
    {
      title: "Term plan with notes for parents",
      description:
        "A topic roadmap for the term, a summary after each class and a review every few weeks to adjust the order.",
      bullets: [
        "Notes that parents can follow without subject knowledge",
        "Reviewed with you at intervals",
        "Works with school and coaching commitments",
        "Extra lessons before tests",
      ],
    },
    {
      title: "Intensive block before exams",
      description:
        "Before mocks or the May and November papers, lessons become more frequent and centre on timed practice and detailed marking.",
      bullets: [
        "Marked in the style of the official scheme",
        "Two to four sessions a week if the timetable allows",
        "Planned outside UP Board weeks and major festivals",
        "Best started three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Which Tanda is this, and is there an IB or IGCSE school here?",
      paragraphs: [
        "There are several places called Tanda in India, and searches often mix them up. This page is for Tanda in Ambedkar Nagar district, Uttar Pradesh, roughly midway between Ayodhya and Azamgarh. The Tanda in Rampur district has its own audience and is not covered here.",
        "In answer to the school question, we could not confirm any school in Tanda that offers the IB or the Cambridge or Edexcel IGCSE. The town has UP Board colleges, CBSE and ICSE schools, and a strong tradition of coaching for government and entrance exams.",
        "The nearest confirmed options are in Lucknow, where Modern School, City Montessori School's Cambridge Campus and GD Goenka Public School are named on our Lucknow page, and in Varanasi, where Sunbeam International School on the Varuna side is listed. Both cities are several hours away.",
        "For most Tanda families, then, an international board means a move, a hostel or a boarding place, and tutoring sits either side of that step.",
      ],
    },
    {
      heading: "UP Board, CBSE, ICSE, IGCSE and IB: how should a Tanda family choose?",
      paragraphs: [
        "The UP Board runs High School at Class 10 and Intermediate at Class 12, with exams in February and March and a large, well-known coaching culture around it. CBSE and ICSE are national, and IGCSE and IB are international. Each rewards different habits.",
        "UP Board students tend to be strong on recall and on Hindi-medium fluency, but may be less practised at long English answers and open-ended investigation. That is the main gap tutors must close for an IB or IGCSE student, and it takes patient practice.",
        "For Indian universities, equivalence certificates from the Association of Indian Universities allow IB and IGCSE-based results to be used, and central universities take IB Diploma holders through CUET-UG. Engineering and medicine depend on subject choice and on JEE and NEET eligibility rules, which should be checked directly.",
        "The right choice follows the child's plan. For government exams, engineering and medicine in India, the UP Board or CBSE with coaching is often the smoother road. For study abroad, or a broad liberal-arts route, IB or IGCSE may open more doors.",
      ],
      table: {
        caption: "Boards a Tanda family may compare",
        columns: ["Board", "Character", "Main exam months", "How it is reached from Tanda"],
        rows: [
          ["UP Board", "Hindi or English medium, recall-strong", "Feb-Mar", "Local schools"],
          ["CBSE", "National syllabus, entrance-aligned", "Feb-Mar", "Private schools in the district"],
          ["ICSE / ISC", "English-rich, wide syllabus", "Feb-Mar", "A few schools nearby"],
          ["IGCSE", "Applied, two boards", "May-Jun, Oct-Nov", "Lucknow or online preparation"],
          ["IB Diploma", "Six subjects plus core", "May, November", "Lucknow, Varanasi or a move"],
        ],
      },
    },
    {
      heading: "What is the cost of IB and IGCSE tuition in Tanda?",
      paragraphs: [
        "Prices are not published because rates depend on the student. After the free trial we send a written rate that reflects the course level, the subject, the tutor's experience with the exact syllabus and how many lessons a week you want.",
        "IB Higher Level Chemistry calls for a different tutor from IGCSE Core English, and the rate differs accordingly. Exam-season intensives cost more in total, because there are more hours, not because the hourly rate changes.",
        "The comparison many families make is against a hostel place in Lucknow simply for tutoring, or the cost and risk of a night-time road journey. Online lessons avoid both and keep the child at home, and some families begin with one subject before adding more.",
        "Have the trial lesson, read the written rate and decide. There is no lock-in, and a family can stop or change tutor at any time.",
      ],
      bullets: [
        "IB HL or SL versus IGCSE Core, Extended, Foundation or Higher",
        "Subject and the tutor's experience with the exact board",
        "Lesson length and weekly frequency",
        "Steady plan versus exam-season intensive",
      ],
    },
    {
      heading: "Online tutor, coaching class, local teacher or self-study in Tanda?",
      paragraphs: [
        "Tanda's coaching classes serve the UP Board, CBSE, JEE, NEET and government-exam aspirants. They are sensible for that track, but no class here runs IB Physics HL or Cambridge 0606, because there are too few students to fill a room.",
        "Local teachers are easy to find and often skilled, particularly in state-board and CBSE subjects. They are valuable as a supplement, but few have taught IB or IGCSE and can advise on internal assessments or command terms.",
        "Self-study using past papers works for disciplined students, especially in IGCSE Maths and sciences. It struggles in written subjects and internal work, where an independent reader is needed to say how an examiner would mark.",
        "Online one-to-one lessons offer syllabus-specific help and individual attention. They need a stable connection, and Tanda's power and network can be unreliable in fog, floods and heavy heat, so a fallback plan is agreed.",
      ],
      table: {
        caption: "Routes to IB and IGCSE help from Tanda",
        columns: ["Route", "Strength", "Limit"],
        rows: [
          ["Online one-to-one", "Exact syllabus, personal attention", "Needs stable power and data"],
          ["Coaching class in town", "UP Board, JEE, NEET and exam prep", "No IB or IGCSE batch"],
          ["Local teacher", "Convenient, personal", "Few with IB or IGCSE experience"],
          ["Self-study", "Flexible and low cost", "No feedback on essays or internal work"],
        ],
      },
    },
    {
      heading: "Tanda's year: fog, heat, floods and festivals",
      paragraphs: [
        "Tanda sits on the Gangetic plain and its seasons are sharp. From late December to January, dense fog can slow roads and delay trains, which affects families whose children study away. Winter evenings are cold and good for concentrated study at home.",
        "April to June brings dry, intense heat, often above forty degrees, with afternoon loo winds and frequent power cuts. Evening lessons work far better than afternoon ones, and short, sharp sessions beat long ones.",
        "The monsoon from July raises the Ghaghara and can cause floods in low-lying parts of the district, disrupting roads and networks. A phone hotspot, a charged laptop and the option of an audio-plus-photo lesson keep continuity.",
        "The festival run of Dussehra, Diwali and Chhath in October and November is close to IGCSE and IB November sessions, so revision should finish before it. Holi and Eid fall in spring, and wedding season fills much of the cooler months.",
      ],
      table: {
        caption: "A year for a Tanda IB or IGCSE student",
        columns: ["Months", "Conditions and events", "Study approach"],
        rows: [
          ["Dec-Jan", "Fog and cold, winter break, mocks", "Focused evening lessons; allow for travel delays"],
          ["Feb-Mar", "UP Board and CBSE exams, Holi", "Light lessons around board weeks"],
          ["Apr-Jun", "Severe heat, IB May session, IGCSE May-June", "Evening slots; timed papers"],
          ["Jul-Sep", "Monsoon, possible floods, IA work", "Plan for outages; steady lessons"],
          ["Oct-Nov", "Dussehra, Diwali, Chhath, November sessions", "Revise before festivals"],
        ],
      },
    },
    {
      heading: "Where can IB and IGCSE take a student from Tanda?",
      paragraphs: [
        "Within India, IB Diploma holders can apply to central universities through CUET-UG, and other institutions accept the Association of Indian Universities equivalence certificate for IB and IGCSE-based qualifications. Rules change every year, so check the prospectus of each target.",
        "Familiar destinations for eastern UP students include Banaras Hindu University, Allahabad University, Lucknow University, IIT BHU and private universities such as Amity, Shiv Nadar and Ashoka. Admission to many depends on entrance tests or on a subject-specific eligibility check.",
        "For engineering and medicine, subject choice decides eligibility: Physics, Chemistry and Maths for JEE Main and Biology with Physics and Chemistry for NEET. IB and IGCSE students should check the current counselling rules before fixing their subject package.",
        "Overseas, IB and IGCSE results are widely understood in the UK, Europe, Canada and Australia, and by many US colleges alongside tests and essays. Tutors help with subject strength, not with writing application essays.",
      ],
    },
    {
      heading: "IB Maths and the sciences: what a tutor does for a Tanda student",
      paragraphs: [
        "The first job is a diagnostic. The tutor sets a short paper in the first lesson, notes which topics come quickly and which are avoided, and builds a plan from that. It is common for a UP Board or JEE-style student to be fast on procedures and less sure of reasoning in words.",
        "In Physics and Chemistry, tutors push students to explain, not just calculate, and to give units, significant figures and labelled graphs as a habit. In Biology, precise vocabulary and command-term technique carry the most marks. Maths rewards clear steps and correct notation.",
        "For internal assessments, tutors advise on question choice, method and evaluation and comment on drafts. They do not design the experiment or write the report, since the work must be the student's own.",
        "With limited laboratory access for some families, tutors use simulations and sample data sets to build practical skill and can suggest safe, small investigations where appropriate.",
      ],
    },
    {
      heading: "IGCSE tiers and subject choices for a Tanda student",
      paragraphs: [
        "Cambridge offers Core, capped at grade C, and Extended, up to A*. Edexcel offers Foundation, capped at grade 5, and Higher, up to grade 9. A student planning IB Maths or a science Diploma should aim for the upper tier.",
        "If the school assigns the tier, follow its guidance. For a private candidate or a family choosing between schools, a diagnostic paper is the best guide. Being secure in the lower tier is better than being shaky in the upper one, but capable students should not be held back.",
        "Subject choice reflects the goal. Engineering and medicine point to Maths, Physics, Chemistry and Biology or Computer Science. Business and law point to Economics, English and Business Studies. Hindi as a second language is popular because it is comfortable and strengthens the overall profile.",
        "Decide the board, syllabus code and exam session before lessons begin, so that the tutor prepares the correct paper.",
      ],
    },
  ],

  tutorsIntro:
    "Each tutor here has taught the specific IB course or IGCSE paper your child faces. They work from other Indian cities on IST, and you meet them only after we have read your brief and can say in a sentence or two why they suit it.",

  process: [
    { title: "Write to us", description: "Say which board or IB programme, the subject and level, the school, and which evenings the Tanda household can spare." },
    { title: "Get a named suggestion", description: "One tutor comes back with a short reason: which syllabus they have taught and to what level." },
    { title: "Sit a lesson without paying", description: "The tutor teaches a real topic on screen. Nothing is owed if it does not feel right." },
    { title: "Put the plan on paper", description: "Weekly frequency, the quoted rate and the opening month's topics are written out for you to accept or change." },
    { title: "Review as you go", description: "Lessons continue weekly with a note each time, and you can ask for a new tutor whenever you wish." },
  ],

  whyPoints: [
    { title: "The syllabus decides the match", description: "Address, city and age of the tutor count for nothing next to their record with your child's exact course." },
    { title: "No pretence about local schools", description: "Tanda has no school we can confirm for these boards, and we would rather you plan around that than around a vague promise." },
    { title: "Judge the teaching first", description: "A whole lesson on screen comes before any talk of money." },
    { title: "Assessed work stays the student's", description: "Explanations and feedback, yes. Drafting an IA, an essay or coursework, never." },
    { title: "Notes in plain language", description: "After each session a short message says what was taught and what the student should do next." },
    { title: "Leave whenever it stops working", description: "No contract binds a family to a tutor or to the service." },
  ],

  faqs: [
    { question: "Is this page about Tanda in Ambedkar Nagar or Tanda in Rampur?", answer: "It is about Tanda in Ambedkar Nagar district, in eastern Uttar Pradesh, between Ayodhya and Azamgarh. Tanda in Rampur district is a different town. All lessons described here are online, so a student in either place can use the service, but the local context on this page is for Ambedkar Nagar." },
    { question: "Is there an IB or IGCSE school in Tanda?", answer: "None that we can confirm. Tanda's schools follow the UP Board, CBSE or ICSE, and the closest verified international-board schools sit in Lucknow and Varanasi. If a local school says it teaches these boards, ask to see its authorisation letter and its current subject list before you rely on the claim." },
    { question: "Can I get IB home tuition in Tanda?", answer: "Only in its online form: your child sits at home, the tutor teaches live from another city, and nobody comes to your door. Doorstep lessons exist just in Gurugram and parts of Delhi NCR. Most Tanda families find the shared whiteboard works well once the first session is over." },
    { question: "Do you have IGCSE tutors for Tanda students for Cambridge and Edexcel?", answer: "Both boards are covered. The brief we need is the syllabus code and tier, for instance Cambridge 0625 Physics or Edexcel 4MA1 Mathematics A, plus the exam session. A tutor who knows one board's paper layout is not automatically right for the other, so we check before proposing anyone." },
    { question: "Do tutors visit homes in Tanda?", answer: "No, and that is a fixed rule for any city outside Gurugram and Delhi NCR. Each Tanda lesson runs on screen. Your child needs a laptop or tablet, headphones, dependable power and data, and a table quiet enough to write on." },
    { question: "What does IB or IGCSE tuition cost in Tanda?", answer: "No fixed price is published, since the figure moves with the course level, the subject, the tutor's record and the number of weekly lessons. Once the trial is over you get a written quote to hold against the cost of a hostel place or a coaching batch elsewhere, and nothing forces you to continue." },
    { question: "Which schools near Tanda offer IB or IGCSE?", answer: "None in Tanda itself that we can verify. Our Lucknow page lists Modern School, City Montessori School's Cambridge Campus and GD Goenka Public School, and our Varanasi page names Sunbeam International School on the Varuna side. Contact each school directly for current programmes, seats and fees." },
    { question: "Is the first lesson free?", answer: "It is. Your child takes one real lesson with the tutor we propose, online, and owes nothing afterwards. If it went well, the quote follows in writing; if not, we look for a different tutor or you simply stop." },
    { question: "Can tutors help with the Internal Assessment or Extended Essay?", answer: "Guidance is fine, ghost-writing is not. A tutor may unpack the criteria, help narrow a topic, look over a plan or read a draft and say where marks are being lost. Research, data and prose remain the student's, and requests to produce assessed work are turned down." },
    { question: "Which IB Diploma subjects can you cover in Tanda?", answer: "The usual list runs across Maths AA and AI, the three sciences, Economics, Business Management, English A, Computer Science, History, Global Politics, Psychology, ESS and Hindi, at Higher or Standard Level. An unusual combination is worth asking about; we will say honestly whether a suitable tutor exists." },
    { question: "Do you teach IB MYP and PYP students from Tanda?", answer: "Yes, with a different feel from the Diploma. Younger children get short, playful sessions built around reading aloud and number games, while MYP students practise criterion-style writing, lab reports and planning a Personal Project. A note goes to parents after every lesson." },
    { question: "Is online tutoring as effective as a coaching class in Tanda?", answer: "They aim at different targets. Local coaching drills for UP Board, JEE and NEET; an online tutor teaches the precise IB or IGCSE syllabus one to one. For an international board there is rarely a coaching batch to compare against, so the specialist is the practical choice." },
    { question: "How are tutors chosen for Tanda students?", answer: "Credentials come first, then a record of teaching this very syllabus recently, then the ability to explain clearly at your child's stage. We pair that with the student's level and target grade, and the free lesson lets you test whether the pairing is right." },
    { question: "When should a Tanda student start IB or IGCSE tutoring?", answer: "As close to the beginning of the course as you can manage, meaning Grade 9 for IGCSE and Class 11 for the Diploma. A child hoping to join a Lucknow school can begin a term or two ahead of admission, mainly on English writing and Maths." },
    { question: "My child is in a UP Board school. Can tutoring help us move to IB or IGCSE?", answer: "It helps with readiness, though a seat in a school must come from the school itself. Before the move, sessions can build longer English answers, applied problem-solving and any content the new board assumes, so the opening term feels less steep." },
    { question: "Can lessons be planned around fog, heat and festivals?", answer: "They can. Weekday evenings and weekend mornings suit most Tanda homes, and the diary is kept clear of UP Board weeks, Dussehra, Diwali and Chhath. When fog, flood or a heat-driven power cut hits, tutor and family switch to audio with photographed working." },
    { question: "What if we are not happy with the tutor?", answer: "Say so and a different tutor is found; no explanation is needed. We also check in during the first weeks, and because the plan is in writing, both sides know what was agreed." },
    { question: "Is IB Gram affiliated with any school or board?", answer: "It is not. IB Gram runs independently of the IB, Cambridge, Pearson and every school in Tanda, Lucknow or Varanasi, and school names on this page are there only so families understand the local picture." },
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
    { label: "IB and IGCSE tutoring in Lucknow", href: "/lucknow/", description: "The state capital, with confirmed IB and IGCSE schools." },
    { label: "IB and IGCSE tutoring in Varanasi", href: "/varanasi/", description: "A large eastern UP city." },
    { label: "IB and IGCSE tutoring in Azamgarh", href: "/azamgarh/", description: "A neighbouring eastern UP town." },
    { label: "IB and IGCSE tutoring in Sultanpur", href: "/sultanpur/", description: "Another nearby district city." },
  ],

  closingHeading: "Book a free trial lesson for your Tanda student",
  closingBody:
    "Drop us a line with the board, subject, level and the hours your Tanda household can give. A tutor suggestion and an invitation to a free trial lesson follow. Contact support@ibgram.com, or WhatsApp +91 7439 368 115.",
};
