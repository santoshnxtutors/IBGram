import type { CitySeoPage } from "../types";

/**
 * /sanchore/ - IB and IGCSE page for Sanchore, Jalore district, Rajasthan. Online-only delivery: no tutor
 * visits homes in Sanchore. No IB or Cambridge/Edexcel school is confirmed in the town, so stripSchools
 * is empty and clusters point at Jodhpur, Udaipur and the Gujarat cities families trade with.
 */
export const sanchore: CitySeoPage = {
  slug: "sanchore",
  countryName: "Sanchore",
  countryNameLong: "Sanchore, Jalore, Rajasthan",
  demonym: "Sanchore",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots start after the worst of the desert afternoon heat, and the plan stays clear of Diwali, Navratri and the wedding weeks when Marwari households travel",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.7536, longitude: 71.7714 },
  wikipedia: "https://en.wikipedia.org/wiki/Sanchore",
  alternateNames: ["Sanchor", "Sanchaur"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sanchore | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Sanchore, Jalore: live one-to-one online tuition from PYP to DP and Cambridge IGCSE, scheduled around desert summers. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sanchore",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR SANCHORE, RAJASTHAN",
  heroSubtitle:
    "Sanchore sits in the far south-west of Rajasthan, on the highway that runs towards Gujarat, and the families here think in a different geography from most towns: trade partners in Ahmedabad, Surat and Mumbai, relatives wherever the business has gone, and children who may be sent to school far from home. Private tuition from home for the IB or IGCSE can only be a live online lesson, because tutors do not visit houses in Sanchore.",
  primaryKeyword: "IB and IGCSE tutors in Sanchore",
  imageAltText: "Student in Sanchore, Rajasthan, in an online IB Economics lesson on a laptop with a tutor",
  secondaryKeywords: [
    "IB tutor Sanchore",
    "IGCSE tutor Sanchore",
    "IB home tuition Sanchore",
    "IGCSE home tuition Sanchore",
    "IB private tuition Sanchore",
    "IB Maths tutor Sanchore",
    "IGCSE Maths tutor Sanchore",
    "IB Physics tutor Sanchore",
    "IB Chemistry tutor Sanchore",
    "IB Biology tutor Sanchore",
    "IB DP tutor Sanchore",
    "IB MYP tutor Sanchore",
    "IB PYP tutor Sanchore",
    "IGCSE online tuition Sanchore",
    "IB tutor Jalore district",
    "IGCSE tutor Jalore",
    "IB tutor Bhinmal",
    "online IGCSE tutor Rajasthan",
    "Cambridge IGCSE tutor Sanchore Rajasthan",
  ],

  heroTrustPoints: [
    "Tutors are picked for your child's precise IB subject and level or IGCSE syllabus code, from anywhere in India",
    "All lessons are live online; home visits by tutors exist only in Gurugram and parts of Delhi NCR, not in Sanchore",
    "A free trial lesson comes first, with a written plan afterwards",
    "IB Gram is independent of every school in Jalore district, the IB, Cambridge and Pearson",
  ],
  heroStats: [
    { value: "Online only", label: "Private lessons from home, on screen" },
    { value: "PYP to DP", label: "All four IB programmes" },
    { value: "IST", label: "One time zone for both sides" },
    { value: "Free trial", label: "Judge the teaching first" },
  ],

  intro: {
    heading: "IB and IGCSE tuition for a family in Sanchore",
    paragraphs: [
      "Sanchore is the headquarters of its tehsil in Jalore district, a town of roughly 33,000 people at the 2011 census set in the Thar Desert region at about 192 metres above sea level. It lies on National Highway 68 and the Amritsar-Jamnagar Expressway, about 135 km from Jalore city, with the nearest railway stations at Dhanera, Raniwara and Bhinmal. Schools around it teach the Rajasthan Board syllabus or CBSE. We could not confirm an IB or Cambridge school in the town and name none.",
      "Even so, the question does come up. Trading families in Sanchore have deep links to Gujarat and Mumbai, where international schools are common, and a younger cousin may already be in one. Others are weighing a boarding school in Udaipur, Mount Abu or Ajmer. And a few parents, hearing about the oil and infrastructure boom in the Barmer-Sanchore basin, expect their children to work outside India and want an internationally recognised qualification.",
      "What serves all of them is a good tutor on a screen. Tutors do not visit homes in Sanchore because in-person home tuition is offered only in Gurugram and parts of Delhi NCR; online lessons at your own desk are the only format here. That makes the national pool of tutors available to a family in the far south-west of Rajasthan, which no classroom in the district could match for these exact courses.",
      "IB Gram is an independent service with no affiliation to the IB Organization, Cambridge, Pearson Edexcel, the Rajasthan Board or any school in Sanchore. Tutors coach and explain, and they mark practice papers, but students always write their own Internal Assessments, Extended Essays, TOK essays and coursework.",
    ],
    bullets: [
      "IB support from PYP to Diploma for families with Gujarat and Mumbai ties",
      "Cambridge and Edexcel IGCSE tuition matched to the syllabus code and tier",
      "Live online lessons in IST with written notes after each session",
      "A free trial lesson, then a written plan",
      "No home visits in Sanchore; they exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "No school in Sanchore teaches an IB programme, so a family usually meets each one through a school in another city. The notes below set out what tutoring looks like at each stage for a child whose home is in Jalore district.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "PYP pupils learn through units of inquiry, which pull language, maths, science and social studies into one big question at a time. Assessment is mostly teacher observation and portfolios, and the last year ends with a group Exhibition. Tutoring stays gentle: fluent reading, secure number sense and the confidence to ask questions in English.",
      countryNote:
        "A Sanchore child who needs PYP tutoring is usually about to join a school in Ahmedabad, Mumbai or abroad, and the early lessons help settle English reading and spoken confidence.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers in MYP assess each subject against criteria and ask pupils to connect their learning to real situations. The Personal Project ends the programme at many schools. Students from a Rajasthan Board background are used to rote accuracy; MYP rewards explaining why, and that is the habit tutors work to build.",
      countryNote:
        "MYP tutoring tied to Sanchore often takes place in summer, when a boarder is home from Udaipur, Ajmer or Gujarat and the desert heat keeps everyone indoors anyway.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Diploma is a two-year course of six subjects, three at Higher Level, with TOK, the Extended Essay and CAS. Exams are held in May and November, and the final score out of 45 is used by universities. Internal Assessments are worth a fifth to a third of the grade in most subjects and need steady planning.",
      countryNote:
        "A Diploma student linked to Sanchore studies at a school elsewhere, so our timetable follows that school's mock dates and internal deadlines, not local ones.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme blends two or three Diploma courses with a career-related study, so it suits students who already know the field they want to enter. Few schools in India run it. The academic subjects are taught at full Diploma depth, which means the tutoring resembles DP tutoring.",
      countryNote:
        "Business-minded families in Sanchore sometimes ask about CP, but it depends on a school elsewhere offering it, and such enquiries remain uncommon.",
    },
  ],

  subjectsIntro:
    "A Sanchore enquiry tends to be practical: Economics HL, a Business Management case study, Maths for a boy who wants to become an engineer. We start from that subject and level, then look for a tutor who has taught that course recently and can work at a time that fits the household.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof. Students from Rajasthan Board Class 10 usually have calculation speed; the new work is structured reasoning and explanation." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology. For students heading to business or social sciences, with an exploration that can use data from a family business." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves and fields, with emphasis on data handling and long reasoning chains in Paper 2." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative work first, organic and equilibrium chemistry later, with a hand-drawn reaction map as the core study tool." },
    { name: "IB Biology", levels: "HL / SL", description: "Large content volume handled by cycles of recall and short-answer practice, with attention to the statistics in the investigation." },
    { name: "IB Economics", levels: "HL / SL", description: "A natural subject for trading families. Real examples, such as commodity prices, border trade and oil, are used to teach evaluation rather than description." },
    { name: "IB Business Management", levels: "HL / SL", description: "Theory is tested through case studies, and the internal project works best on a real business the student can observe." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Students who speak Marwari or Hindi at home gain from timed analysis of unseen texts and regular oral practice." },
    { name: "IB Hindi A Literature", levels: "HL / SL", description: "A home-language option with close reading of set works and a comparative essay, different from Board-style answers." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms and databases on paper, plus working code for the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, models and evaluation, with long-answer structure practised under time." },
    { name: "IB Geography", levels: "HL / SL", description: "Arid-zone and water-management examples from Rajasthan are turned into precise case studies with dates and figures." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Desert ecology, canal irrigation and energy use give students concrete, local material for evaluating sustainability." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and essay structure, with feedback aimed at argument rather than length." },
  ],

  igcseSubjectsIntro:
    "In Sanchore, IGCSE is usually met through a school in another city, or considered before Class 9 as an alternative to the Rajasthan Board. Cambridge and Pearson Edexcel both print a code and tier for every subject, so we begin from the code on the school's list.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tests algebra under time pressure and clear multi-step working; Core rewards method marks and accurate arithmetic." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and trigonometry ahead of the Diploma, and a firm base for IB Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equations, units and graphs, with the alternative-to-practical paper taught as its own skill." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, bonding and electrolysis through worked examples, plus qualitative analysis for the practical paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Physiology, genetics and ecology, with extended answers drilled to the number of marks asked." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, diagrams and data response using trade and market examples familiar to Sanchore families." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode and Python alternate so students can reason about and run their solutions." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and descriptive tasks, with feedback on tone and register." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension, letter and essay formats for students who speak Marwari or Gujarati at home." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case scenarios from trade and retail, tied back to the theory examiners expect." },
  ],

  regionsTitle: "Sanchore and nearby Jalore district areas our online IB and IGCSE tutors already serve",
  regionsIntro:
    "Lessons are online, so these places describe context: which corridor a family lives on, how far it is from bigger school markets, and how heat and the highway affect an evening. Families from each have asked about international curricula.",
  regions: [
    { name: "Sanchore town", note: "The tehsil headquarters on NH 68, with a busy market, a trading culture and schools following the Rajasthan Board and CBSE." },
    { name: "Highway 68 corridor", note: "The road that links Sanchore to Barmer in one direction and to Gujarat in the other, and the main route for business travel." },
    { name: "Pathmeda", note: "A nearby village known for the Gopal Govardhan Gaushala, which Wikipedia calls the largest in India." },
    { name: "Bhinmal", note: "A larger town about 65 km away with a railway station, colleges and a range of private schools." },
    { name: "Jalore", note: "The district headquarters, around 135 km away, where government offices and the main colleges sit." },
    { name: "Dhanera", note: "A Gujarat town about 42 km away with a railway station, used by Sanchore families for travel and shopping." },
    { name: "Raniwara", note: "A town about 47 km away with a railway station, another gateway to the wider rail network." },
    { name: "Narmada canal belt", note: "Farmland along the canal that has changed cropping around Sanchore, with families who combine farming and trade." },
    { name: "Barmer", note: "The neighbouring district headquarters, tied to the oil and refinery economy of the region." },
    { name: "Palanpur and Deesa", note: "Gujarat towns within reach that Sanchore families treat as a gateway to Ahmedabad." },
  ],

  schoolDisclaimer:
    "No Sanchore school is named because we could not confirm one that offers the IB or Cambridge or Edexcel IGCSE. The cities below are places families look for such schools, not endorsements, and IB Gram has no connection to any school or board mentioned.",
  schoolClusters: [
    {
      city: "Sanchore and Jalore district",
      note: "Local schools follow the Rajasthan Board or CBSE. We found no IB World School and no Cambridge or Edexcel centre in the district, so tutoring for these programmes is online.",
      schools: [],
    },
    {
      city: "Nearby: Jodhpur and Udaipur",
      note: "The two big cities of western and southern Rajasthan, with large private-school markets and boarding options. Whether a particular school offers an international curriculum should be checked on the IB or Cambridge website.",
      schools: [],
    },
    {
      city: "Nearby: Ahmedabad and other Gujarat cities",
      note: "The usual commercial partner for Sanchore families, and a city with many schools running international programmes. We name none without confirmation.",
      schools: [],
    },
    {
      city: "Nearby: Mount Abu and Ajmer boarding schools",
      note: "The hill and heritage boarding schools of Rajasthan attract families from across the south-west. Check current curriculum offerings school by school.",
      schools: [],
    },
  ],

  modesIntro:
    "In Sanchore a lesson looks the same whichever pattern a family chooses: laptop, camera, whiteboard, one tutor. The difference lies in how often the lessons happen and how closely they follow an exam date or a boarding school's terms.",
  modes: [
    {
      title: "A regular weekly slot",
      description:
        "One hour each week at a time that avoids the afternoon heat, such as early evening or Sunday morning.",
      bullets: [
        "Tutor matched by syllabus, wherever they live",
        "Suits IB DP, MYP or IGCSE",
        "Past-paper questions are marked on the call",
        "The same tutor continues over time",
      ],
    },
    {
      title: "Weekly lessons with written updates",
      description:
        "The same weekly hour, plus a short note after each class and a fuller review every few weeks, so that parents can follow progress without knowing exam jargon.",
      bullets: [
        "Notes list what was covered and what is next",
        "Reviews reset the plan when needed",
        "A gentle pace for PYP and MYP",
        "Extra pre-mock slots on request",
      ],
    },
    {
      title: "A pre-exam intensive",
      description:
        "More frequent lessons in the six to eight weeks before a May or November exam, with timed papers and quick feedback, planned around wedding season and festival travel.",
      bullets: [
        "Papers timed and marked to the real scheme",
        "Feedback within days",
        "Built around Diwali, Navratri and wedding weeks",
        "Best arranged two weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families connected to Sanchore",
      paragraphs: [
        "The first thing to say is what we did not find. Schools in and around Sanchore follow the Rajasthan Board or CBSE, and nothing we could verify in the tehsil carries IB World School status or Cambridge or Edexcel centre approval. Some bigger Rajasthan and Gujarat cities do have such schools, which is where the enquiries tend to originate.",
        "The families who ask are mostly business families. A Sanchore household that runs a wholesale or transport business often has connections in Ahmedabad, Surat or Mumbai, where cousins' children study in international schools and talk about the IB. Others are mining, oil and construction professionals who came to the area for the Barmer-Sanchore basin and expect to move on again.",
        "A third group are parents who want an alternative to the heavy coaching culture they see around them. Rajasthan is the home of Kota, and many families assume that only JEE or NEET coaching leads to a good career. The IB and IGCSE offer a different path, and families like to understand it before deciding anything.",
        "For all of them the answer is online. A tutor in Bengaluru or Pune can teach a student in Sanchore as well as one in their own city, and the lessons happen at the student's desk. The papers, mark schemes and moderation are the same for everyone, so tutoring aims to give the Sanchore student the same familiarity with the style that a city student gets.",
      ],
      table: {
        caption: "Where Sanchore families look for IB or Cambridge schooling",
        columns: ["Option", "Distance from Sanchore", "What to expect"],
        rows: [
          ["Sanchore and Jalore district", "Local", "Rajasthan Board and CBSE schools; no confirmed IB or IGCSE school"],
          ["Jodhpur or Udaipur", "A few hours' drive or more", "Larger private-school markets and boarding options"],
          ["Ahmedabad", "Reached via Palanpur and Deesa", "A large city with many international-curriculum schools"],
          ["Mount Abu and Ajmer", "A few hours away", "Heritage boarding schools; check each school's curriculum"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed in Sanchore",
        "Enquiries come from business, oil-sector and boarding families",
        "Online matching removes distance as a limit",
        "The same papers and mark schemes apply everywhere",
      ],
    },
    {
      heading: "What changes for a Rajasthan Board or CBSE student who switches to the IB or IGCSE?",
      paragraphs: [
        "A Rajasthan Board student is trained to produce accurate, complete answers to questions that follow the textbook. IB and IGCSE questions often put a familiar idea in an unfamiliar setting and ask the student to explain, compare or evaluate. The content may be known, but the reading of the question is new, and the first term is about learning to read command words.",
        "Quantity of writing also differs. IB and IGCSE papers reward extended English answers and, in some subjects, short essays under time. A student who has done most of his study in Hindi may know the science but lack the sentences to express it. Short, frequent writing tasks with detailed feedback fix this more quickly than extra reading.",
        "Internal assessment is the most visible change. The IB expects a research question, a method, data, analysis and conclusion, completed over weeks and worth a real share of the grade. Rajasthan Board practicals are usually shorter and more prescribed. Planning an investigation of one's own is a skill that tutors help build through questions, never through writing the report.",
        "A move does not suit every child. Students aiming for Indian engineering or medical entrance may find the state board or CBSE a more direct path, though IB students do enter those routes after checking eligibility. The decision is best made after a trial lesson in one or two subjects, with real work to compare.",
      ],
      table: {
        caption: "Rajasthan Board, CBSE, IB and IGCSE compared for a Sanchore family",
        columns: ["Feature", "Rajasthan Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Local availability", "Most schools", "Some private schools", "None confirmed in Sanchore"],
          ["Question style", "Textbook-linked, direct", "Direct plus application", "Unfamiliar settings, explanation and evaluation"],
          ["Internal work", "Short practicals", "Practicals and projects", "Extended investigations and coursework"],
          ["Recognition abroad", "Limited", "Moderate", "Wide"],
        ],
      },
      bullets: [
        "Command words are the first new skill",
        "Extended English writing is the second",
        "Self-planned investigations are the third",
        "Decide after a trial lesson, not before",
      ],
    },
    {
      heading: "How much does IB or IGCSE tuition cost for a Sanchore family?",
      paragraphs: [
        "We do not print a price list because rates depend on several things at once. These include the programme and level, the scarcity of tutors who can teach that exact course, how long each session lasts and how often the student attends. The rate you are offered is given in writing before the free trial begins, so there is no surprise after the first lesson.",
        "For a Sanchore household, online tuition has two savings built in. There is no travel charge, because no tutor needs to cross the desert. And there is no cost in time to reach a class: the nearest big coaching hubs are hours away in Jodhpur or Kota, and a lesson at the kitchen table spares a child that journey.",
        "Where costs creep up is in volume. Starting with Maths, Physics, Chemistry and English in the same month is expensive and tiring. A better plan is to begin with the subject causing the most worry, review after a month, and add a second only when the first is stable. This pattern also gives a family evidence of what is working.",
        "When comparing providers, ask what the tutor has taught recently, under which board, and whether they have marked or moderated papers. A tutor with current experience on the exact course saves hours of confusion, and that is what the fee should reflect.",
      ],
      bullets: [
        "Programme, level, subject scarcity and session length shape the rate",
        "Rates given in writing before the free trial",
        "No travel charge, no commute for the student",
        "Start with one subject and review",
      ],
    },
    {
      heading: "Online home tuition, coaching in a big city, local tutors or self-study: which suits Sanchore?",
      paragraphs: [
        "Families in Sanchore usually weigh four things. Coaching in Jodhpur, Kota or a Gujarat city offers a group routine, but its programmes are built for state board, JEE and NEET. A local private tutor knows the child but is unlikely to have taught IB or Cambridge material. Self-study is cheap but nobody marks it. Online one-to-one tuition gives a specialist who teaches the exact course every week.",
        "To be clear about what online means here: tutors do not visit homes in Sanchore. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. In Sanchore, your child has private tuition from home, online, with a laptop, a webcam and a shared whiteboard. The format suits Maths and sciences particularly well, because the tutor sees the student's working appear line by line.",
        "Practical reasons also favour online. Summer afternoons in this part of the Thar are too hot to be out, dust storms can close roads, and long drives to a class cut into the practice time a student needs. A lesson that begins in the cooler evening and ends at the same desk preserves energy for homework.",
        "Self-study still helps. Official syllabuses, past papers and mark schemes are free, and a motivated student can use them well. What they cannot do is explain why an answer lost marks, and a weekly hour with a tutor who does exactly that is the most efficient addition.",
      ],
      table: {
        caption: "Four ways to prepare for IB or IGCSE from Sanchore",
        columns: ["Route", "Strength", "Limit for IB or IGCSE"],
        rows: [
          ["Online one-to-one tuition", "Specialist for the exact course; no travel; written notes", "Needs a reliable connection"],
          ["Coaching in a big city", "Group routine and peers", "Built for state board, JEE or NEET, and far from home"],
          ["Local private tutor", "Knows the child and the area", "Rarely has recent IB or Cambridge experience"],
          ["Self-study", "Free resources, flexible", "No marking of long answers or investigations"],
        ],
      },
      bullets: [
        "Online lessons need a laptop and a connection",
        "Home visits by tutors exist only in Gurugram and parts of Delhi NCR",
        "Evening slots avoid the hottest hours",
        "Free past papers work best with weekly feedback",
      ],
    },
    {
      heading: "How do desert heat, festivals and exam sessions shape the study year in Sanchore?",
      paragraphs: [
        "IB Diploma exams run in May and November, with results in July and January. Cambridge IGCSE sits in June and November with a March series in some places, and Edexcel offers January, May and June, and November windows. A Sanchore student follows the calendar of the school that holds the registration, so the first task is to write the exam month, mock month and school holidays on one sheet.",
        "May and June are the hardest months in this part of Rajasthan. Temperatures are very high, power cuts happen, and families sometimes move to cooler places or relatives' homes. Students sitting a May exam from Sanchore should plan study blocks for early morning and after sunset, and keep the laptop charged and a phone hotspot ready.",
        "The festival calendar is just as important. Diwali, Navratri, Teej and Gangaur are widely celebrated, and Jain families observe Paryushan and Mahavir Jayanti. Marriage season brings long travel for entire households. Rather than push through these, we plan lighter offline tasks, such as reading or paper review, and schedule hard new material for calm weeks.",
        "The monsoon, brief but welcome from July to September, brings relief and sometimes disruption. It is a good moment to rebuild foundations at the start of a new academic year, and the cooler evenings that follow make longer lessons more comfortable.",
      ],
      table: {
        caption: "A study calendar for a student connected to Sanchore",
        columns: ["Period", "Academic event", "Local factor", "Tutoring focus"],
        rows: [
          ["January to March", "IB mocks; IGCSE March series", "Cool season and wedding weeks", "Full mocks; weak-topic repair"],
          ["April to June", "IB May exams; IGCSE June exams", "Extreme heat, power cuts", "Early morning sessions; revision"],
          ["July to September", "IB results; new term", "Short monsoon, Teej, Paryushan", "Foundations; flexible slots"],
          ["October to December", "November exams", "Navratri, Diwali, wedding season", "Timed papers around travel"],
        ],
      },
      bullets: [
        "Write exam, mock and holiday dates on one page",
        "Study in the early morning and after sunset in summer",
        "Offline tasks cover festival and wedding weeks",
        "Keep devices charged and a hotspot ready",
      ],
    },
    {
      heading: "What are the university pathways after the IB or IGCSE from Sanchore?",
      paragraphs: [
        "For Indian universities, the Association of Indian Universities treats the IB Diploma as equivalent to a Class 12 pass. Many public universities admit through CUET-UG, where IB and IGCSE-route students register for the subjects their chosen course asks for. State universities, including those in Rajasthan, publish their own conditions, which should be read in the current prospectus.",
        "For engineering and medicine, check JEE Main and NEET-UG information bulletins before choosing Diploma subjects, since eligibility rules about subjects and equivalence are updated. A student aiming at medicine will normally need Chemistry and Biology plus either Physics or Maths in the Diploma, and a family should confirm this early.",
        "Business and management is a natural direction for many Sanchore students. Economics, Business Management and Maths AI form a strong set for degrees in commerce, finance or management, in India or abroad. Students who want to return to the family business after studying elsewhere often find this set practical.",
        "Abroad, the IB Diploma is widely recognised, and IGCSE results serve as evidence of secondary study. Universities in the UK, USA, Canada, Australia and Europe also look at predicted grades, references and English proficiency. Tutors help with the academic side; counselling remains with the school.",
      ],
      bullets: [
        "AIU treats the IB Diploma as equivalent to Class 12",
        "CUET-UG is the common route to public universities",
        "JEE and NEET eligibility must be checked each year",
        "Commerce and management suit Economics, Business and Maths AI",
      ],
    },
    {
      heading: "How are IB Maths and the sciences taught online in Sanchore?",
      paragraphs: [
        "IB Maths offers Analysis and Approaches and Applications and Interpretation, each at HL and SL. AA fits students heading to engineering, physics or pure mathematics. AI fits those going into business, economics, psychology or design. The decision should follow the target degree, because changing course after the first term is awkward.",
        "A typical online Maths lesson uses a tablet or a webcam over paper, so the tutor can watch the working appear. The student attempts a past-paper question, the tutor stops at the first slip, and the pair rewrite the answer in examiner-friendly steps. The exploration is planned over weeks, with the student writing every sentence.",
        "In the sciences, the early task is to map the syllabus and set a calendar for the internal assessment. Physics students then practise extended reasoning, Chemistry students organic pathways and equilibrium, and Biology students the many definitions and diagrams. All three learn what verbs like outline, discuss and evaluate actually demand.",
        "Labs can be a problem in small towns. Tutors work with simulations, data sets from past investigations and simple experiments using household items, then coach analysis and evaluation. Where a school offers lab time, the lessons prepare and debrief it.",
      ],
      table: {
        caption: "IB Maths and science choices for a Sanchore student",
        columns: ["Course", "Suits students heading for", "Usual hurdle"],
        rows: [
          ["Maths AA HL", "Engineering, pure sciences", "Paper 3 and abstract reasoning"],
          ["Maths AI", "Business, economics, social sciences", "Technology use and interpretation"],
          ["Physics HL", "Engineering, physical sciences", "Long reasoning chains"],
          ["Chemistry HL", "Medicine, pharmacy", "Organic pathways and equilibrium"],
          ["Biology HL", "Medicine, life sciences", "Volume and command terms"],
        ],
      },
      bullets: [
        "Choose the Maths course by degree goal",
        "Live working lets the tutor catch slips early",
        "Students write all internal assessments",
        "Simulations and simple experiments cover lab gaps",
      ],
    },
    {
      heading: "Core or Extended: how does a Sanchore student pick IGCSE subjects and tier?",
      paragraphs: [
        "IGCSE students typically sit six to ten subjects: a first language, a second language, Mathematics, two or three sciences and a humanities or business subject. The school's list limits the choice, but students who may move on to the IB Diploma benefit from Additional Mathematics and separate sciences.",
        "Tier is the second decision. Core caps the grade at a lower level and covers a narrower syllabus, while Extended opens the full range. Students secure in algebra and able to work under time should aim for Extended. Others can begin on Core and move up if the school permits before entries close.",
        "English is the practical issue for students arriving from the Rajasthan Board. Technical terms learnt in Hindi need English equivalents, and extended answers need practice. A tutor builds vocabulary lists within lessons and sets short writing tasks marked in detail, a method that works faster than reading alone.",
        "Practical components differ by board. Cambridge uses a practical or alternative-to-practical paper for sciences; Edexcel is structured differently; Art and Literature use portfolios. Tutors learn which applies to the student's code and coach to it, never writing any submitted piece.",
      ],
      bullets: [
        "Start with the school's subject list",
        "Extended suits students secure in algebra",
        "Technical English vocabulary needs deliberate practice",
        "Coursework is coached, not written, by the tutor",
      ],
    },
  ],

  tutorsIntro:
    "Browse the people who could end up teaching your child: specialists in IB PYP, MYP and Diploma courses and in Cambridge or Edexcel IGCSE, all working from their own desks across India. The screen is the classroom for every family in Sanchore, and nobody is sent to your door.",

  process: [
    { title: "Write to us about the student", description: "Tell us the course or board, the subject and level, recent marks, the exam month and which hours the Sanchore household can keep free." },
    { title: "Get names, with reasons", description: "No specialist lives in the district, so we search the whole country and explain why each suggested tutor suits the syllabus in question." },
    { title: "Sit one lesson at no cost", description: "Your child tackles an actual topic from the course with a prospective tutor, on camera, before any money or promise is involved." },
    { title: "Read the plan before agreeing", description: "The topics, the pace, the length of each session and the fee arrive in writing, and you may change any of it." },
    { title: "Settle into a weekly rhythm", description: "One slot a week, a short written summary afterwards, and a swap of tutor whenever the pairing is not working." },
  ],

  whyPoints: [
    { title: "Syllabus first", description: "We look for the person who has taught your child's particular IB subject and level or IGCSE code, not just anyone who teaches the subject." },
    { title: "Designed for a town like Sanchore", description: "Where the district offers no IB or Cambridge classroom, the search simply stretches to the whole of India." },
    { title: "A lesson before a fee", description: "The trial class is free, so the choice rests on what you saw your child do and not on a brochure." },
    { title: "The student's own words", description: "Tutors explain, question and give feedback on Internal Assessments and essays, but not a sentence of them is written by anyone except the student." },
    { title: "A paper trail of progress", description: "Short summaries after each class and a longer check-in every few weeks keep parents informed without needing to know the jargon." },
    { title: "No lock-in", description: "There is no link to a particular school and no long contract, and replacing a tutor is a short conversation." },
  ],

  faqs: [
    { question: "How can I find an IB tutor in Sanchore?", answer: "Write to us with the programme, subject, level and exam session. We search nationally for people who have taught exactly that course and offer a free first class. As Sanchore has no IB school, nobody local is being passed over; the video call simply opens the whole country to you." },
    { question: "Is there IGCSE tuition for Sanchore students?", answer: "There is. Cambridge and Pearson Edexcel IGCSE subjects are taught live online, lined up against the code and tier on your school's list, such as Cambridge 0580 Extended Mathematics. The code matters because it fixes the papers, the practical component and the grade boundaries." },
    { question: "Can a tutor teach at our house in Sanchore?", answer: "No. Visits to a student's house are limited to Gurugram and parts of Delhi NCR. What Sanchore gets is private tuition from home through a screen: laptop, webcam and a shared whiteboard, with the tutor speaking to your child alone for the whole hour." },
    { question: "What decides the fee for IB or IGCSE lessons?", answer: "Several things together: the programme and level, how few people can teach the course, the session length and the number of lessons a week. HL Diploma Maths and sciences tend to cost more than IGCSE Core. You get the figure in writing before the trial, and a tutor's city never alters it." },
    { question: "Which schools around Sanchore teach the IB or IGCSE?", answer: "We found none that we could confirm. The schools in the tehsil work to Rajasthan Board or CBSE rules. Parents wanting an international school normally look towards Jodhpur, Udaipur, Gujarat or a boarding campus, and each one's current authorisation should be read on the IB or Cambridge website first." },
    { question: "Our son boards at an IB school far away. Can lessons happen when he is home?", answer: "They can, and many families do exactly that. The tutor is chosen for his school's subject and level, and sessions are fitted to the term dates, so a fortnight at home over Diwali or in the hot summer months goes into marked papers and Internal Assessment planning instead of idling." },
    { question: "Does the trial lesson really cost nothing?", answer: "It costs nothing. Your child works on a genuine topic from the course with the tutor, over video. Afterwards a brief written plan comes to you, and you can continue, request someone else, or walk away. We do not chase families who decide against it." },
    { question: "How far will a tutor go in helping with an Internal Assessment?", answer: "Up to guiding, and no further. A tutor can help the student pick a question that can actually be investigated, decode the marking criteria, think through data collection and respond to drafts. The writing, the numbers and the conclusions must come from the student, as the IB itself demands." },
    { question: "Which Diploma subjects are available?", answer: "Maths in both versions at HL and SL, the three sciences, Economics, Business Management, Computer Science, Psychology, Geography, History, English and Hindi are all covered. Rarer combinations depend on who is free, so list your exact six subjects when you write." },
    { question: "Is anything offered below Class 11?", answer: "Yes, the PYP and MYP stages are covered as well. MYP lessons deal with criterion-marked tasks and the Personal Project, while PYP lessons build reading, writing and number sense. Sanchore parents tend to ask when a child is about to start at a school in Gujarat or Mumbai." },
    { question: "Does learning through a screen work as well as having a tutor in the room?", answer: "For these courses it does. Writing is visible on a shared board, a camera can show the student's own workings, and past papers are marked while both are watching. A specialist who has taught the exact course elsewhere beats a generalist in the next lane. A steady connection is all that is required." },
    { question: "What checks are made on tutors?", answer: "Qualifications come first, then recent classroom experience with the particular programme and subject, then how well the person knows the assessment criteria. A trial lesson shows what the teaching actually feels like. Should it not suit, someone else is found, with no hard feelings." },
    { question: "At what point should tuition begin?", answer: "The sooner the better after the course starts: Class 9 for IGCSE, Class 11 for the Diploma. The early months are for patching foundations before mocks and internal deadlines pile up. Families that arrive late can still manage with a plan built backwards from the first paper." },
    { question: "We are thinking of leaving the Rajasthan Board for IGCSE. Where do we start?", answer: "Begin by comparing one subject at a time. A tutor can lay the two syllabuses side by side, point to where English writing and practical skills fall short, and help choose Core or Extended. The school change happens somewhere else; we prepare the student on both sides of it." },
    { question: "Are evening or Sunday lessons possible?", answer: "Yes. Most households choose a weekday evening once the heat has dropped, or Sunday morning. In summer, an early morning slot works better. Tell us about Diwali, Navratri or wedding travel beforehand and the calendar can be bent around it." },
    { question: "What happens if the tutor is the wrong fit?", answer: "Say so and a different person is arranged. The student is not blamed; a poor match is our problem to fix. The summaries after each class and the periodic reviews make it plain whether lessons are actually helping." },
    { question: "Does IB Gram belong to any school or examining body?", answer: "No. It is an independent tutoring service and has no tie to the IB Organization, Cambridge, Pearson Edexcel, the Rajasthan Board, CBSE or any school in Jalore district. Any board or city named here is for context alone." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "See how matching works for students in towns and cities all over the country." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The single area where a tutor does come to the house." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject choices for Cambridge and Edexcel, laid out plainly." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the six subjects, the core and the assessments fit together." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "What the four criteria and the Personal Project ask of a student." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "How inquiry units lead to the final Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Which of the two Maths courses matches a given degree plan." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles filtered by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and ask for the free trial." },
    { label: "IB and IGCSE tutoring in Barmer", href: "/barmer/", description: "The oil-district headquarters next door, handled in the same online way." },
    { label: "IB and IGCSE tutoring in Jodhpur", href: "/jodhpur/", description: "Western Rajasthan's biggest city, often compared by Sanchore parents." },
    { label: "IB and IGCSE tutoring in Sirohi", href: "/sirohi/", description: "A nearby Rajasthan town in the Mount Abu direction." },
  ],

  closingHeading: "Ask for a free trial lesson in Sanchore",
  closingBody:
    "Write down the course or board, the subject and level, where marks stand today and the hours your household can spare, then send it to support@ibgram.com or WhatsApp +91 7439 368 115. A matched tutor, a short account of their teaching history and a first lesson in Indian Standard Time will follow.",
};
