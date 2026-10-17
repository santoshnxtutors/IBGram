import type { CitySeoPage } from "../types";

/**
 * /shirdi/ - IB and IGCSE page for Shirdi, Ahmednagar district, Maharashtra. Online-only: no tutor
 * visits homes in Shirdi. No IB or Cambridge/Edexcel school is confirmed in the town, so stripSchools
 * is empty and clusters point at Pune, Nashik, Ahmednagar and Chhatrapati Sambhajinagar (Aurangabad).
 */
export const shirdi: CitySeoPage = {
  slug: "shirdi",
  countryName: "Shirdi",
  countryNameLong: "Shirdi, Ahmednagar, Maharashtra",
  demonym: "Shirdi",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekly slots are set around the Maharashtra school day and kept clear of Ram Navami, Guru Purnima and Vijayadashami, when Shirdi's own households are busiest",
  lastUpdated: "2026-09-21",
  geo: { latitude: 19.7668, longitude: 74.4772 },
  wikipedia: "https://en.wikipedia.org/wiki/Shirdi",
  alternateNames: ["Shirdi Sai Baba town", "Sainagar Shirdi"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Shirdi | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Shirdi families: live one-to-one online home tuition for PYP, MYP, DP and IGCSE, timed around pilgrim-season weeks. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Shirdi",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR SHIRDI FAMILIES",
  heroSubtitle:
    "Shirdi runs on the rhythm of the Sai Baba temple, and so do its households: hotel owners, shopkeepers, trust employees and farming families in the surrounding Rahata taluka. If one of their children needs private tuition from home for an IB or IGCSE course, the lesson has to be a live one-to-one video class, because tutors do not visit houses in Shirdi and the town has no IB school of its own to build on.",
  primaryKeyword: "IB and IGCSE tutors in Shirdi",
  imageAltText: "Student in Shirdi, Maharashtra, taking a live online IGCSE Physics lesson at a desk at home",
  secondaryKeywords: [
    "IB tutor Shirdi",
    "IGCSE tutor Shirdi",
    "IB home tuition Shirdi",
    "IGCSE home tuition Shirdi",
    "IB private tuition Shirdi",
    "IB Maths tutor Shirdi",
    "IGCSE Maths tutor Shirdi",
    "IB Physics tutor Shirdi",
    "IB Chemistry tutor Shirdi",
    "IB Biology tutor Shirdi",
    "IB DP tutor Shirdi",
    "IB MYP tutor Shirdi",
    "IB PYP tutor Shirdi",
    "IGCSE online tuition Shirdi",
    "IB tutor Ahmednagar district",
    "IB tutor Rahata",
    "IB tutor Kopargaon",
    "online IGCSE tutor Maharashtra",
    "Cambridge IGCSE tutor Shirdi",
  ],

  heroTrustPoints: [
    "A tutor is chosen for your child's exact IB course and level or IGCSE syllabus code, anywhere in India",
    "Everything runs online; home visits by tutors exist only in Gurugram and parts of Delhi NCR, never in Shirdi",
    "The first lesson is free, and a written plan follows before any commitment",
    "IB Gram is independent of every Shirdi school, the Sai Baba Sansthan, the IB, Cambridge and Pearson",
  ],
  heroStats: [
    { value: "Live and online", label: "One tutor, one student, one screen" },
    { value: "PYP to DP", label: "The whole IB continuum" },
    { value: "IST", label: "Tutor and student on the same clock" },
    { value: "Free trial", label: "See the teaching before paying" },
  ],

  intro: {
    heading: "Online IB and IGCSE tuition for a Shirdi household",
    paragraphs: [
      "Shirdi, in Rahata taluka of Ahmednagar district, had about 36,000 residents at the 2011 census, and its daily population is several times that because of pilgrims. The schools that serve those residents teach the Maharashtra State Board syllabus, CBSE or, in a few cases, ICSE. We checked for an IB World School or a Cambridge or Edexcel centre in the town and could not confirm one, so this page does not name any school as offering these programmes.",
      "That absence does not mean no one in Shirdi cares about them. Hotel and trading families with relatives in Pune, Mumbai or the Gulf often hear about international qualifications first. Employees who are posted to the Sansthan's hospitals and institutions sometimes arrive with children already mid-way through an IB or IGCSE course. Others are boarding children in Pune or Nashik and want the home weeks to count.",
      "For each of these the practical answer is the same. A tutor who currently teaches the course sits at a laptop somewhere in India, the student sits at a desk in Shirdi, and a shared whiteboard sits between them. Tutors do not travel to homes in Shirdi, since in-person home tuition runs only in Gurugram and parts of Delhi NCR; online private tuition from home is what the town gets, and it widens the choice of teacher well beyond Ahmednagar district.",
      "IB Gram is an independent service. It is not affiliated with the IB Organization, Cambridge, Pearson Edexcel, the Maharashtra State Board or any Shirdi institution. Tutors coach and explain, and they mark practice work, but the Internal Assessments, Extended Essay, TOK essay and coursework a student hands in are written by the student, and nobody else.",
    ],
    bullets: [
      "IB tutoring across PYP, MYP and the Diploma for Shirdi and Rahata families",
      "Cambridge and Pearson Edexcel IGCSE tuition matched to a syllabus code and tier",
      "Live online lessons in Indian Standard Time, with a note after every class",
      "A free trial lesson before any decision or payment",
      "No home visits in Shirdi; those exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Because no school in Shirdi runs an IB programme, a family reaches each one by a different road. The notes below describe what tutoring involves at each stage and where a Shirdi student is likely to meet it.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Learning in PYP is organised around themes such as how we express ourselves or where we are in place and time, and a class explores each through questions instead of chapters. The year closes with the Exhibition, a long inquiry presented to the school community. A tutor's role is to make reading, writing and number work comfortable enough that the inquiry itself can be enjoyed.",
      countryNote:
        "A Shirdi child meets PYP through a school in Pune, Mumbai or abroad, usually after a family decision about relocation, and the first tutoring weeks are about catching up with the pace of the new classroom.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP teachers grade each subject against four criteria, such as knowing and understanding, investigating, communicating and reflecting, and they expect students to link subjects together. Many schools finish with a Personal Project. Pupils from a state-board background tend to be strong on recall and weaker on explaining their reasoning in full sentences, which is what lessons train.",
      countryNote:
        "MYP tutoring for Shirdi students tends to fall in the Diwali break and the summer months, when a child who boards elsewhere is at home and can work on criterion feedback without a hostel schedule.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma candidate takes six subjects, three at Higher Level, and completes Theory of Knowledge, a 4,000-word Extended Essay and a CAS record. Examinations are in May and November, and the total is out of 45. Universities in India and abroad read that figure alongside predicted grades and, in some cases, subject-level results.",
      countryNote:
        "With no Diploma school nearby, a Shirdi family usually encounters the DP at a school in Pune, Nashik or further away, and our lessons follow that school's calendar, not anything local.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme combines two or three Diploma courses with a career-related study and a reflective project. Few Indian schools offer it. Students who choose it often have a clear vocational direction, such as hospitality, design or business, and the Diploma courses within it are taught to full DP standard.",
      countryNote:
        "For a town whose economy rests on hospitality and services, CP can be a natural idea, although enquiries from Shirdi remain rare and depend entirely on a school elsewhere offering it.",
    },
  ],

  subjectsIntro:
    "Shirdi requests tend to be precise: Chemistry HL for November, Maths AI SL with an exploration due, or a Grade 9 student starting Cambridge Physics in January. We start from that exact subject and exam date, then look for a tutor whose recent teaching matches it.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "For students who enjoy algebra, functions and calculus. Lessons spend time on unfamiliar problem-solving styles, because Maharashtra Board Maths seldom asks for open-ended proof." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator technology. The exploration works best when the topic comes from something the student already knows, such as hotel occupancy or crop yields." },
    { name: "IB Physics", levels: "HL / SL", description: "Content is familiar to anyone who has done Class 11, but data analysis and extended reasoning are newer. Lessons practise both with real past-paper questions." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry first, organic and equilibrium later. A clear habit of drawing reaction maps by hand pays off in Paper 2." },
    { name: "IB Biology", levels: "HL / SL", description: "A subject of volume, where command terms decide marks. Sessions pair concept review with short-answer practice and data-based questions." },
    { name: "IB Economics", levels: "HL / SL", description: "Local examples help: pilgrimage tourism, pricing in a seasonal market and agricultural cooperatives all illustrate supply, demand and market failure." },
    { name: "IB Business Management", levels: "HL / SL", description: "A strong fit for hospitality and trading families. Case-study practice and the internal commentary are guided without any writing done for the student." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Students whose first language is Marathi or Hindi build confidence through timed analysis of unseen texts and regular spoken practice for the oral." },
    { name: "IB Marathi A Literature", levels: "HL / SL", description: "A home-language option for Maharashtrian students, with close reading of set works and a comparison essay that differs from state-board answers." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language acquisition for students who learnt Hindi at school, with emphasis on writing tasks and the individual oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms and data structures on paper, and a working program for the internal assessment, practised together on a shared screen." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, models and evaluation, with long-answer structure rehearsed under time." },
    { name: "IB Geography", levels: "HL / SL", description: "Examples from Maharashtra, such as drought, river basins and urban growth around Pune, are shaped into precise, dated case studies." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and essay planning, with feedback focused on argument rather than length." },
  ],

  igcseSubjectsIntro:
    "A Shirdi student usually meets IGCSE at a school in another city or when a family weighs a switch before Class 9. Cambridge and Pearson Edexcel both print a code and tier for every subject, so lessons begin from the code on the school's list and the tier the student will sit.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended calls for fast, accurate algebra and structured working; Core rewards knowing exactly how method marks are earned." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and trigonometry ahead of the Diploma, and a solid base for IB Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation handling, units and graph skills, with the alternative-to-practical paper taught as its own technique." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, bonding and electrolysis through worked examples, with qualitative analysis practised for the practical paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Plant and human physiology, genetics and ecology, with extended-response writing drilled to the mark allocation." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, diagrams and data response, with Maharashtra examples used to make abstract ideas concrete." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python and pseudocode alternate, so students can both reason about and run their solutions." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and descriptive tasks, with feedback on tone and register." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension, letter and essay formats for Marathi-speaking students who study Hindi as an additional language." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case scenarios from retail, hospitality and services, tied back to the theory the examiner expects." },
  ],

  regionsTitle: "Shirdi and nearby areas our online IB and IGCSE tutors already serve",
  regionsIntro:
    "Because lessons run online, the places below describe context and not delivery: how far a family sits from the bigger school markets, how the temple's busy days affect the household and which roads connect each area to Pune, Nashik or Ahmednagar.",
  regions: [
    { name: "Shirdi town centre", note: "The area around the Sai Baba Samadhi Mandir, dense with hotels and shops, where evenings can be loud on festival days." },
    { name: "Kakadi", note: "The village near Shirdi Airport, about 14 km from town, where flights make travel to Mumbai and other cities easier for some families." },
    { name: "Pimpalwadi Road", note: "A residential and commercial corridor on the edge of Shirdi, popular with families who work in hospitality." },
    { name: "Nimgaon", note: "A village close to Shirdi whose households are linked to both farming and the pilgrim economy." },
    { name: "Rahata", note: "The taluka headquarters a short distance away, with government offices, markets and a range of schools." },
    { name: "Sakuri", note: "A village near Shirdi known for the ashram of Upasani Maharaj, within easy reach of the town." },
    { name: "Kopargaon", note: "A larger town on the Godavari to the north, with colleges, sugar cooperatives and its own set of private schools." },
    { name: "Loni", note: "The Pravara education campus town, known for its institute of medical sciences and a large student population." },
    { name: "Sangamner", note: "A town to the south in Ahmednagar district with a college tradition and a strong dairy economy." },
    { name: "Ahmednagar city", note: "The district headquarters, the nearest city with a broad range of schools and coaching classes." },
  ],

  schoolDisclaimer:
    "No Shirdi school is named here because we could not confirm one that offers the IB or Cambridge or Edexcel IGCSE. The cities below are places where Shirdi families look for such schools, not recommendations, and IB Gram is not connected with any school, board or trust mentioned.",
  schoolClusters: [
    {
      city: "Shirdi and Rahata taluka",
      note: "Schools here follow the Maharashtra State Board, CBSE or ICSE. We found no IB World School and no Cambridge or Edexcel centre locally, which is why tutoring for these programmes is online.",
      schools: [],
    },
    {
      city: "Nearby: Pune",
      note: "Pune is the main destination for Maharashtra families who want international curricula, and many of its schools offer IB or Cambridge. We name none here without checking each one's current status; confirm on the IB or Cambridge site before applying.",
      schools: [],
    },
    {
      city: "Nearby: Nashik and Ahmednagar",
      note: "Both cities are within a day's journey and have large private-school markets. Whether any teaches an international curriculum should be checked school by school.",
      schools: [],
    },
    {
      city: "Nearby: Chhatrapati Sambhajinagar (Aurangabad) and Mumbai",
      note: "Aurangabad has the nearest large airport apart from Shirdi's own, and Mumbai has the widest choice of IB and IGCSE schools in the state. Families who board a child tend to start here.",
      schools: [],
    },
  ],

  modesIntro:
    "Whatever the pattern, a Shirdi lesson has the same ingredients: a camera, a whiteboard and a tutor who knows the course. What changes is frequency, how much written feedback accompanies the lessons and how close the work sits to an exam.",
  modes: [
    {
      title: "A standing weekly lesson",
      description:
        "A fixed hour each week, picked to avoid the temple's busiest evenings. Many families use Sunday morning or a weeknight after school.",
      bullets: [
        "Tutor chosen by syllabus match, wherever they live",
        "Suitable for IB or IGCSE at any level",
        "Practice questions marked live",
        "The same tutor continues week to week",
      ],
    },
    {
      title: "Weekly lessons with a written record",
      description:
        "The same weekly session, plus a short note after each class and a fuller review every few weeks, so that a parent can follow progress without knowing the syllabus language.",
      bullets: [
        "Every note says what was covered and what is next",
        "Reviews adjust the plan when needed",
        "A gentle pace for younger PYP and MYP students",
        "An extra slot before mocks can be added quickly",
      ],
    },
    {
      title: "A concentrated pre-exam block",
      description:
        "More lessons in the weeks before a May or November session, with timed papers and quick feedback, scheduled around Shirdi's peak festival days when family and business duties crowd the calendar.",
      bullets: [
        "Papers timed and marked against the actual mark scheme",
        "Feedback within days",
        "Planned around Ram Navami, Guru Purnima and Vijayadashami",
        "Best arranged two or three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families linked to Shirdi",
      paragraphs: [
        "Shirdi is a pilgrimage town first, and its schooling reflects ordinary needs: Marathi-medium and English-medium schools following the state board, CBSE schools, and the institutions run by or linked to the temple trust. Our own checking did not turn up any IB World School or Cambridge or Edexcel centre in the town. If one opens, the page will be updated, but until then we say what we found.",
        "The households that ask us about these programmes fall into recognisable groups. Owners of hotels, lodges and shops with relatives in Pune or abroad. Professionals posted to the town's hospitals and institutions. Farming families from Rahata taluka whose children board in Pune or Nashik. And parents who have read that the IB or IGCSE gives a child more room to study abroad, but have nobody nearby to explain it.",
        "Distance used to decide who could be taught well. It no longer does. A tutor who has taught Cambridge Chemistry for five years is as good on a video call to Shirdi as to Pune, and a family is no longer limited to whoever advertises in Ahmednagar. The sensible test is a trial lesson on a real topic.",
        "Papers and marking do not change with postcode. A script written in Shirdi is marked exactly as one from a Mumbai school, so the aim of tutoring is to give a student the same familiarity with command terms, timing and criteria that a student in a city IB school gets through daily exposure.",
      ],
      table: {
        caption: "Where Shirdi families look for IB or Cambridge schooling",
        columns: ["Place", "Approximate distance", "What families find there"],
        rows: [
          ["Shirdi itself", "Local", "State board, CBSE and ICSE schools; no confirmed IB or IGCSE school"],
          ["Ahmednagar and Nashik", "Within a few hours by road", "Larger private-school markets; check each school's status"],
          ["Pune", "Several hours by road; an airport 186 km away", "The widest range of international-curriculum schools in the region"],
          ["Mumbai", "A long road or air journey", "The densest cluster of IB and IGCSE schools in Maharashtra"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed in Shirdi",
        "Enquiries come from hospitality, trading, professional and farming families",
        "Online matching removes the distance problem",
        "Papers are marked to one standard wherever they are sat",
      ],
    },
    {
      heading: "How do Maharashtra State Board, CBSE and ICSE compare with the IB and IGCSE?",
      paragraphs: [
        "Maharashtra's SSC and HSC examinations reward accurate recall and neat, complete answers. CBSE adds application questions and CISCE leans toward language and written expression. The IB and Cambridge IGCSE go further in two directions: they ask for reasoning in unfamiliar settings, and they count coursework, practicals or internal assessment toward the grade. A Shirdi student moving across feels the shift in the first term.",
        "Language is a real variable here. Many students think in Marathi, speak Hindi with visitors and study in English or Marathi medium. For IB and IGCSE the examination language is usually English, so technical vocabulary and extended writing must be built deliberately. Marathi or Hindi can itself be a subject, and for a student who loves literature that is a source of confidence.",
        "Internal assessment is the other big change. A Maharashtra Board student sits a few practicals; an IB student plans an investigation, collects data, analyses it and writes a report that counts for 20 to 30 percent of the grade. That independence is learnable, and a tutor's questions during planning are exactly the support it needs.",
        "No board is better for every child. The IB and IGCSE suit students who benefit from steady assessment, enjoy discussion and may study abroad. State board and CBSE suit students aiming for Indian entrance tests and institutions. A trial lesson in the actual subject often clarifies the choice quicker than any pamphlet.",
      ],
      table: {
        caption: "Boards compared for a Shirdi family",
        columns: ["Feature", "Maharashtra State Board", "CBSE / ICSE", "IB / IGCSE"],
        rows: [
          ["Local availability", "Most schools", "Several private schools", "None confirmed in Shirdi"],
          ["Final assessment", "Board exam, largely written", "Board exam plus internal marks", "Papers plus coursework or practicals"],
          ["Language", "Marathi or English medium", "English, some Hindi", "English; Marathi and Hindi available as subjects"],
          ["Recognition abroad", "Limited", "Moderate", "Wide"],
        ],
      },
      bullets: [
        "Reasoning in unfamiliar settings is the first new skill",
        "Internal assessment is the second",
        "Technical English needs deliberate practice",
        "Choose by the child's goals, not by reputation",
      ],
    },
    {
      heading: "What affects the cost of IB or IGCSE tuition for a Shirdi family?",
      paragraphs: [
        "A fixed price list would mislead, so none appears here. A tutor's rate reflects the programme, the level, the scarcity of people who can teach that course and the length of each session. Diploma HL Maths and the HL sciences are priced above IGCSE Core subjects because current, experienced teachers are fewer. You receive the rate in writing before the free trial begins.",
        "Because lessons are online, there is no travel charge to add and no cost to the family of reaching a coaching class in Ahmednagar, Kopargaon or Nashik. For a family whose evenings are shaped by hotel or shop hours, getting a lesson at the dining table instead of across town can be worth as much as the fee itself.",
        "To keep spending sensible, start with one subject, usually the one that is causing the most anxiety, and review after a month. Add a second only when the first is stable. Many families find that two strong subjects do more for a result than five rushed ones, particularly in the year before a major exam.",
        "Ask any provider what their tutors have taught recently and under which exam board. A generic Maths teacher is not the same as someone who has coached the Mathematical Exploration or marked a Cambridge Extended paper, and the difference is what you are paying for.",
      ],
      bullets: [
        "Programme, level, subject scarcity and session length set the rate",
        "Rates are given in writing before the trial",
        "No travel cost on either side",
        "One subject first, review, then add",
      ],
    },
    {
      heading: "Online home tuition, classes in the city, private tutors or self-study: what works for Shirdi?",
      paragraphs: [
        "Four routes are open to a Shirdi student. Coaching classes in Ahmednagar, Kopargaon or Nashik are built around state board, JEE or NEET timetables, not IB and IGCSE. A local private tutor knows the child but has probably never taught a Diploma paper. Self-study from free material is cheap but unmarked. Live one-to-one online tuition is the route that places a specialist in front of the student weekly.",
        "To be clear about format: a tutor does not come to your house in Shirdi. In-person home tuition is available only in Gurugram and parts of Delhi NCR. Shirdi families get private tuition from home, online, using a laptop, a webcam and a shared whiteboard. For a household that runs a lodge or a shop, avoiding a visiting tutor also avoids guests and staff getting in the way.",
        "On temple festival days, roads and lodging areas become crowded and a trip to a class can take far longer than the class itself. A lesson that starts and ends at the same desk is not touched by that. The only requirement is a stable connection, and a mobile hotspot as a back-up covers most problems.",
        "Self-study has a role for confident students, using the official syllabus, past papers and mark schemes. The missing piece is feedback on written answers and on investigation plans, and a weekly hour with a tutor is the cheapest way to supply it.",
      ],
      table: {
        caption: "Four ways to prepare for IB or IGCSE from Shirdi",
        columns: ["Route", "Strength", "Limit for IB or IGCSE"],
        rows: [
          ["Online one-to-one tuition", "Syllabus-matched specialist; no travel; written notes", "Needs a stable connection"],
          ["Coaching class in a nearby city", "Group routine and peers", "Built for state board, JEE or NEET rather than IB or IGCSE"],
          ["Local private tutor", "Personal knowledge of the child", "Rarely has recent IB or Cambridge teaching"],
          ["Self-study", "Low cost, flexible", "No marking of long answers or investigations"],
        ],
      },
      bullets: [
        "Online lessons need only a laptop and a connection",
        "Tutor visits to homes exist only in Gurugram and parts of Delhi NCR",
        "A lesson at the desk avoids crowded-road delays on festival days",
        "Free past papers work best alongside weekly feedback",
      ],
    },
    {
      heading: "How do exam sessions, monsoon and the pilgrim calendar shape the year in Shirdi?",
      paragraphs: [
        "IB Diploma examinations are held in May and November, with results in July and January. Cambridge IGCSE sits in June and November, with a smaller March series in some countries, and Pearson Edexcel runs January, May and June, and November windows. A Shirdi student follows the calendar of whichever school holds the registration, and the first step in any plan is to write down exam month, mock month and the school's holidays on one page.",
        "Locally, the busiest days are tied to the temple: Ram Navami in spring, Guru Purnima in July, and Vijayadashami in autumn, which marks Sai Baba's Mahasamadhi. Large crowds arrive, traffic slows and many families have extra duties at their shops, lodges or homes. Diwali and Ganesh Chaturthi are also major family events across Maharashtra.",
        "Instead of fighting the calendar, we use it. Light weeks are given to reading, vocabulary and past-paper review. Fresh weeks are given to difficult new material. If a family expects a heavy week, the tutor sets work that can be done offline and then discusses it at the next lesson.",
        "The weather matters too. Ahmednagar district is semi-arid, with a hot dry stretch from March to May and a monsoon from June. Heat in May can disturb exam preparation, and a morning session before it rises is often the better time. In the monsoon, thunderstorms can cut power, and a charged laptop and phone hotspot are a sensible habit.",
      ],
      table: {
        caption: "A year for a Shirdi student following an IB or IGCSE course",
        columns: ["Period", "Academic event", "Local factor", "Tutoring focus"],
        rows: [
          ["January to March", "IB mocks; IGCSE March series", "Cool mornings, then rising heat", "Full mock papers; weak-topic repair"],
          ["April to May", "IB May exams; IGCSE preparation", "Ram Navami; peak summer heat", "Morning sessions; revision"],
          ["June to September", "IB results; new academic year; IGCSE June results", "Monsoon, Guru Purnima, Ganesh Chaturthi", "Foundations; flexible scheduling"],
          ["October to December", "November exams for IB and IGCSE", "Vijayadashami, Diwali", "Timed papers around festival gaps"],
        ],
      },
      bullets: [
        "Write exam, mock and holiday dates on one page",
        "Offline tasks cover busy temple-calendar weeks",
        "Morning slots help in the hottest months",
        "Charge devices and keep a hotspot for monsoon power cuts",
      ],
    },
    {
      heading: "Where can a Shirdi student go after the IB or IGCSE?",
      paragraphs: [
        "In India, the Association of Indian Universities treats the IB Diploma as equivalent to a Class 12 pass, so admission to most universities is open. Many public universities admit through CUET-UG, and IB students register for the subjects their course needs. State universities and professional courses may have extra conditions, which should be read in the current prospectus and not assumed.",
        "For engineering and medical entrance the rules are stricter. JEE Main and NEET-UG set conditions on subjects studied and on equivalence of the qualification, and they are revised, so a family should read the current bulletins before choosing Diploma subjects. A student aiming at medicine usually needs Biology and Chemistry, and Physics or Maths in the right combination.",
        "Within Maharashtra, Pune has a long list of universities and colleges, and Mumbai adds many more. The Pravara institutions at Loni are close to Shirdi and attract medical, engineering and pharmacy students. An international qualification does not close any of these doors; it simply asks that the student meet each course's subject conditions.",
        "Abroad, the IB Diploma is read easily by universities in the UK, USA, Canada, Australia and Europe, and IGCSE results are accepted as proof of secondary study. Predicted grades, school references and, for some countries, SAT or ACT and English proficiency scores all matter. Tutors help with the academic side and leave counselling to the school.",
      ],
      bullets: [
        "AIU treats the IB Diploma as equivalent to Class 12",
        "CUET-UG is the common route into public universities",
        "JEE and NEET eligibility must be checked each year",
        "Study abroad also needs predicted grades and references",
      ],
    },
    {
      heading: "How are IB Maths and the sciences taught to a Shirdi student online?",
      paragraphs: [
        "IB Maths comes in Analysis and Approaches and Applications and Interpretation, each at HL or SL. AA suits students planning engineering, physics or pure mathematics, while AI suits those heading toward business, economics, the social sciences or design. A Shirdi family should pick by the degree the student wants, because switching after the first term is awkward.",
        "A typical Maths lesson uses a tablet or a webcam pointed at paper, so that the tutor sees each line of working as it is written. The student attempts a past-paper question aloud, the tutor interrupts at the first slip, and the pair then rewrite the solution in examiner-friendly steps. The exploration is planned over several weeks, with the tutor asking questions and the student doing all the writing.",
        "In the sciences, the first need is a map of the syllabus and a calendar for the internal assessment. Physics students then drill extended reasoning, Chemistry students organic pathways and equilibrium, and Biology students the many definitions and diagrams. All three learn what the command words, such as outline, discuss and evaluate, really require.",
        "Practicals can be handled even without a well-equipped lab. Tutors use simulations, data sets from past investigations and home experiments that need only kitchen equipment, then coach the student on analysis and evaluation. Where the school provides lab time, the online lessons prepare and debrief it.",
      ],
      table: {
        caption: "IB Maths and science choices for a Shirdi student",
        columns: ["Course", "Suits students heading for", "Usual hurdle"],
        rows: [
          ["Maths AA HL", "Engineering, pure sciences", "Paper 3 and abstract reasoning"],
          ["Maths AI", "Business, economics, social sciences", "Technology use and interpretation"],
          ["Physics HL", "Engineering, physical sciences", "Extended reasoning chains"],
          ["Chemistry HL", "Medicine, pharmacy", "Organic and equilibrium"],
          ["Biology HL", "Medicine, life sciences", "Volume and command terms"],
        ],
      },
      bullets: [
        "Select the Maths course by degree goal",
        "Live working lets the tutor catch errors early",
        "Internal assessments are always written by the student",
        "Simulations and simple experiments cover missing lab time",
      ],
    },
    {
      heading: "Core or Extended: how should a Shirdi student choose IGCSE subjects?",
      paragraphs: [
        "IGCSE students typically take six to ten subjects, often a first language, a second language, Mathematics, two or three sciences and one or two humanities or business subjects. The school's list narrows the choice, but students who may go on to the IB Diploma gain by taking Additional Mathematics and the separate sciences.",
        "The Core and Extended tiers are the next decision. Core papers cap the grade at a lower level and cover a narrower syllabus; Extended opens the whole grade range. A student who is confident in algebra and works steadily should aim for Extended, while one still building basics can take Core and improve, with a school's agreement to change tier before entries close.",
        "For a Shirdi student, one practical point is that many IGCSE courses expect fluent English. Science and business terms learnt in Marathi at the earlier stage need an English equivalent, and a tutor can build a vocabulary list within lessons and set short writing tasks that are marked in detail.",
        "Coursework and practical components vary. Cambridge uses a practical or alternative-to-practical paper for sciences, Edexcel structures it differently, and subjects like Art or English Literature involve portfolios. Tutors learn which applies to the student's code and coach accordingly, never writing any submitted work.",
      ],
      bullets: [
        "Start with the school's subject list",
        "Extended suits students who are secure in algebra",
        "Build English technical vocabulary deliberately",
        "Coursework is coached, not written, by the tutor",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors for IB PYP, MYP and Diploma subjects and Cambridge and Edexcel IGCSE, teaching Shirdi families live online. Each match is made on the exact course and level, and tutors do not visit houses in Shirdi.",

  process: [
    { title: "Share the brief", description: "Programme or board, subject and level, grades so far, exam month and the hours that work around your family's schedule." },
    { title: "Review a reasoned shortlist", description: "With no local pool in Shirdi, tutors are picked from across India, each with a note on the fit." },
    { title: "Take a free trial lesson", description: "A real topic from your child's syllabus, taught live, with no payment and no obligation." },
    { title: "Agree a written plan", description: "Topics, pace, session length and rate set out in writing for you to accept or change." },
    { title: "Continue each week", description: "A fixed slot, a note after each class, and a change of tutor if the match is not right." },
  ],

  whyPoints: [
    { title: "Chosen by syllabus", description: "Tutors are matched to the IB subject and level or IGCSE code, not to a loose subject name." },
    { title: "Made for towns without IB schools", description: "Where Shirdi has no local option, the search covers the whole country." },
    { title: "Trial first", description: "Your child has a real lesson before any money changes hands." },
    { title: "Coaching, never writing", description: "Tutors guide Internal Assessments, essays and coursework but never write any of it." },
    { title: "Progress in writing", description: "Each session ends with a short note, and a longer review follows every few weeks." },
    { title: "Easy to change", description: "No tie to a school or a long contract, and a new tutor is arranged if the first match is not working." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Shirdi?", answer: "Send us your child's IB programme, subject, level and exam session. We shortlist tutors who teach that exact course and book a free trial lesson. With no IB school in Shirdi, matching is done across India on syllabus fit, and the lesson itself runs live on video so you can judge the teaching before deciding." },
    { question: "Do you have IGCSE tutors for Shirdi students?", answer: "Yes. Tutors teach Cambridge and Pearson Edexcel IGCSE live online, matched to the syllabus code and tier your school uses, for example Cambridge 0620 Chemistry Extended. Matching on code matters because the codes decide what is examined and how practical skills are tested." },
    { question: "Will a tutor come to my home in Shirdi?", answer: "No. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. In Shirdi, the lesson is private tuition from home, online: your child uses a laptop and webcam, and the tutor teaches live and one-to-one. That is the only format we run in Ahmednagar district." },
    { question: "What does IB or IGCSE tuition cost in Shirdi?", answer: "It depends on programme, level, subject, session length and how many tutors can teach the course. Diploma HL Maths and sciences usually cost more than IGCSE Core subjects. No fixed price list is published; your rate is quoted in writing before the free trial, and the tutor's city does not change it." },
    { question: "Which schools in Shirdi offer IB or IGCSE?", answer: "We could not confirm any. Schools in Shirdi follow the Maharashtra State Board, CBSE or ICSE. Families who want an IB or Cambridge school usually look at Pune, Nashik or Mumbai, and each school's current authorisation should be checked on the IB or Cambridge website before applying." },
    { question: "My child boards at an IB school in Pune. Can a tutor help in the holidays?", answer: "Yes. We match a tutor to the school's subject and level and plan lessons around its term dates, so that Diwali or summer weeks at home in Shirdi are spent on criterion feedback, past papers and Internal Assessment planning. This is one of the commonest reasons families from small towns contact us." },
    { question: "Is there a free trial lesson?", answer: "Yes, every match starts with one. Your child studies a real topic from their own syllabus with the tutor, online and at no charge. Afterwards you receive a short written plan and can accept it, ask for another tutor or stop with no obligation." },
    { question: "Can a tutor help with my child's Internal Assessment?", answer: "A tutor can guide but never write. That means helping choose a workable question, reading the criteria, planning data collection and giving feedback on drafts. All the words, calculations and conclusions must be the student's own, which is also what the IB and Cambridge require." },
    { question: "Which IB Diploma subjects do you cover?", answer: "Both Maths courses at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, Psychology, Geography, History, English, Hindi and Marathi are covered. Some less common subjects depend on tutor availability, so mention the exact combination when you write to us." },
    { question: "Do you teach MYP and PYP as well as the Diploma?", answer: "Yes, all four programmes. MYP tutoring concentrates on criterion-based tasks and the Personal Project. PYP tutoring concentrates on reading, writing and number confidence ahead of a move to a PYP school. Shirdi families usually ask when a child is about to join relatives in Pune or Mumbai." },
    { question: "Is online tuition as effective as a tutor visiting the house?", answer: "For IB and IGCSE it works well. A shared whiteboard, a camera on the student's handwriting and live marking of past papers provide most of what a visit would, and a specialist tutor in another city is more useful than a general tutor nearby. A stable internet connection is the main requirement." },
    { question: "How do you check your tutors?", answer: "Before introducing a tutor we look at qualifications, recent experience with the specific programme and subject, and knowledge of assessment criteria. The trial lesson then shows how they teach. If the fit is wrong, another tutor is arranged without fuss." },
    { question: "When should my child start tuition?", answer: "Ideally at the start of the course: Class 9 for IGCSE and Class 11 for the Diploma. This leaves time to repair foundations before internal assessments and mocks. Students who join late, after a family move for example, can still catch up with a plan built around the first exam date." },
    { question: "My child is thinking of moving from the Maharashtra Board to IGCSE. Can you help?", answer: "Yes. A tutor can compare syllabuses subject by subject, show where English writing and practical skills need work and help decide between Core and Extended. The school move happens elsewhere; we help the student arrive prepared and keep up afterwards." },
    { question: "Can lessons run on weekends or late evenings?", answer: "Yes. Most Shirdi families choose weekday evenings or weekend mornings. We avoid the busiest festival evenings if you ask, and in the hot months a morning slot is usually more comfortable. Slots can be moved with notice around Ram Navami, Guru Purnima, Vijayadashami and Diwali." },
    { question: "What if we are not happy with the tutor?", answer: "Tell us and another tutor will be arranged. Progress is reviewed every few weeks anyway, and a poor fit is treated as a matching problem, not as a failure by the student. The short notes after each session make it easy to see whether the lessons are working." },
    { question: "Is IB Gram connected to any school, trust or board?", answer: "No. IB Gram is an independent tutoring service with no affiliation to the IB Organization, Cambridge, Pearson Edexcel, the Maharashtra State Board, the Sai Baba Sansthan or any school in Shirdi. Names on this page are for context only and imply no endorsement." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How city by city matching works for IB and IGCSE students nationwide." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The only place where a tutor visits the house, and how that works." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel boards, tiers and subjects explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, Internal Assessments, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and how MYP is reported." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the final-year Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "See profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and book a free trial lesson." },
    { label: "IB and IGCSE tutoring in Pune", href: "/pune/", description: "The state's main hub for international schools, a common destination for Shirdi families." },
    { label: "IB and IGCSE tutoring in Nashik", href: "/nashik/", description: "A nearby city with a large private-school market." },
    { label: "IB and IGCSE tutoring in Ahmednagar", href: "/ahmednagar/", description: "The district headquarters for Shirdi, served the same way." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor for Shirdi",
  closingBody:
    "Tell us the programme or board, the subject and level, how your child is doing and which hours suit a household that may be busy on temple days. You will receive a tutor chosen for that brief, an honest account of their experience and a trial lesson on Indian Standard Time. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
