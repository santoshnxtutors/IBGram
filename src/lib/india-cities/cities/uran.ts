import type { CitySeoPage } from "../types";

/**
 * /uran/ - IB and IGCSE tutoring page for Uran, the JNPT port town in Raigad district, Maharashtra
 * (not Uran Islampur, which has its own page). Online-only delivery: tutors do not visit homes in Uran.
 * No IB school is confirmed inside Uran, so stripSchools is empty; one nearby Navi Mumbai school is
 * mentioned in a clearly labelled cluster.
 */
export const uran: CitySeoPage = {
  slug: "uran",
  countryName: "Uran",
  countryNameLong: "Uran, Raigad district, Maharashtra",
  demonym: "Uran",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots are planned around port shift patterns, the Konkan monsoon downpours, Ganeshotsav week and the train timings on the Nerul to Uran line",
  lastUpdated: "2026-09-21",
  geo: { latitude: 18.8770, longitude: 72.9400 },
  wikipedia: "https://en.wikipedia.org/wiki/Uran,_Maharashtra",
  alternateNames: ["Uran Raigad", "Uran Navi Mumbai", "Uran JNPT"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Uran | Online Home Tuition, Raigad",
  metaDescription:
    "Online one-to-one IB and IGCSE tuition for Uran, Raigad students and port-town families: PYP to DP, Cambridge and Edexcel IGCSE, written notes, free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Uran",
  heroEyebrow: "IB & IGCSE TUITION FOR URAN AND JNPT PORT-TOWN FAMILIES",
  heroSubtitle:
    "Home tuition in Uran for IB and IGCSE students takes the form of live, private lessons on a laptop at your own table, with a tutor chosen for the exact course. It is deliberately online: no tutor comes to a flat in Dronagiri or a house in Karanja, because home visits exist only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Uran",
  imageAltText: "Student in Uran, Raigad, attending a live online IB Chemistry lesson with a tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Uran",
    "IGCSE tutor Uran",
    "IB home tuition Uran",
    "IGCSE home tuition Uran",
    "IB private tuition Uran",
    "IB Maths tutor Uran",
    "IGCSE Maths tutor Uran",
    "IB Physics tutor Uran",
    "IB Chemistry tutor Uran",
    "IB Biology tutor Uran",
    "IB DP tutor Uran",
    "IB MYP tutor Uran",
    "IB PYP tutor Uran",
    "IGCSE online tuition Uran",
    "IB tutor Uran Raigad",
    "IGCSE tutor Dronagiri",
    "IB tutor Karanja Uran",
    "online IB tutor JNPT township",
    "IB tutor Navi Mumbai Uran side",
    "Cambridge IGCSE tutor Raigad district",
  ],

  heroTrustPoints: [
    "Shortlists are built on the exact IB subject and level or the IGCSE syllabus code",
    "Lessons are online; in-person home tuition is limited to Gurugram and parts of Delhi NCR, so nobody visits Uran",
    "A free trial comes first, with the rate sent in writing before any booking",
    "IB Gram has no link with any school in Uran or Navi Mumbai, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "Port-town families", label: "Shipping, logistics and energy households" },
    { value: "PYP to DP", label: "The whole IB continuum" },
    { value: "IST", label: "One clock for both sides of the screen" },
    { value: "Free trial", label: "Meet the tutor first" },
  ],

  intro: {
    heading: "IB and IGCSE support for families in Uran and the JNPT belt",
    paragraphs: [
      "Uran is where Mumbai's container traffic meets the mainland. The Jawaharlal Nehru Port at Nhava Sheva, the ONGC plant, a gas-based power station and a long list of container freight stations give the taluka an unusual working population: customs and shipping professionals, marine engineers, logistics managers, plant engineers and many families from the original Koli and Agri communities. Their expectations for their children are often international.",
      "That sits oddly beside the school map. Most schools here are Maharashtra State Board, Marathi- or English-medium, with some CBSE options. Inside Uran itself, no IB World School or Cambridge or Edexcel centre could be confirmed. The nearest verified international-curriculum campus we came across is across the creek in Navi Mumbai, so many families look at relocation, boarding or private preparation.",
      "This is where online tutoring helps. A student in Karanja or Dronagiri can work with a tutor who has taught the course at an IB school in Mumbai, Pune or Bengaluru this year, on a fixed evening, without a two-hour round trip. The lesson is live, one-to-one and in Indian Standard Time.",
      "In plain terms, there are no home visits in Uran. Our in-person tuition runs only in Gurugram and parts of Delhi NCR. IB Gram is independent, has no tie to any school or examining body, and tutors coach without writing a student's Internal Assessment, Extended Essay or coursework.",
    ],
    bullets: [
      "IB tutoring for PYP, MYP, DP and CP students from the Uran taluka",
      "Cambridge and Pearson Edexcel IGCSE tutoring by syllabus code and tier",
      "Online one-to-one lessons from your own room",
      "Short written notes after every class",
      "Free trial, then rates in writing",
    ],
  },

  programmesIntro:
    "Families in Uran usually meet the IB through a parent's shipping or energy career, a move toward Navi Mumbai or South Mumbai, or a plan to send a child abroad. Here is what tutoring covers at each stage.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Children work through six themes such as 'How we organise ourselves' and 'Sharing the planet', turning questions into small research tasks. There are no exams. A tutor builds comfortable reading, steady number work and the courage to speak up in a group presentation.",
      countryNote:
        "Children from Marathi-medium primary classes in Uran often benefit from extra spoken English before inquiry units feel natural.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Every subject is marked against four criteria, and the programme closes with a Personal Project. Understanding what a command word wants is half the battle. Tutors work through the rubric with the student and compare a high-band answer to a mid-band one.",
      countryNote:
        "A student moving from a Maharashtra State Board school into MYP typically needs time with long-form written answers.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects across Higher and Standard Level, plus the Extended Essay, Theory of Knowledge and CAS. Assessment combines May or November papers with internal work, for a total out of 45. Tutors teach concepts and technique but never write assessed pieces.",
      countryNote:
        "Diploma students linked to Uran are generally enrolled at schools in Navi Mumbai, Mumbai or Pune, so lessons follow the term calendar of that school.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP combines two or more Diploma courses with a career-related study, a reflective project and service learning. It suits students heading for applied fields such as logistics, maritime studies, design or business. Few Indian schools offer it.",
      countryNote:
        "Enquiries from the port belt are occasional; they usually concern Business or Maths inside a CP package.",
    },
  ],

  subjectsIntro:
    "A student from Uran might ask for Physics HL support before a mock or Business Management help for a case study. Name the subject, the level and the exam session, and the shortlist begins there.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, sequences and proof-style reasoning for engineers and scientists in the making, including practice on unseen HL problems." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and calculator fluency for students heading toward business, logistics or social science degrees." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and thermal physics, with data questions rehearsed under timed conditions." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, equilibrium and organic mechanisms, with confident use of the data booklet." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics and ecology, plus practice turning detailed content into precise short answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Trade, exchange rates and market failure are natural topics when your home town hosts India's largest container port." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading and tools such as SWOT and Ansoff, applied to supply-chain and shipping examples." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis, comparative essays and oral preparation." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and the case-study topic learned by writing and testing code." },
    { name: "IB Psychology", levels: "HL / SL", description: "Core studies, evaluation structure and long-response practice." },
    { name: "IB Geography", levels: "HL / SL", description: "Coastal processes, urban growth and trade patterns, using the Mumbai Metropolitan Region as a case." },
    { name: "IB Marathi B", levels: "HL / SL", description: "Formal written Marathi, text types and oral practice for students who speak it at home." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Grammar, text types and the individual oral for second-language learners." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Coaching on questioning knowledge claims; essay and exhibition remain the student's own work." },
  ],

  igcseSubjectsIntro:
    "IGCSE is rarely taught in Uran itself, so requests come from students moving into an IGCSE school or sitting privately. The board, code and tier are fixed first, before any practice is set.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended needs algebraic speed; Core needs method marks that never leak." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "An early taste of calculus and functions, easing the later step to IB Maths." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equations, units and the alternative-to-practical paper trained together." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Reactions, the mole and salt analysis practised with exam-style questions." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, ecology and human biology tied to the long-answer questions." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams and short evaluative answers timed to the mark allocation." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode and Python alongside the theory paper." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing, listening and speaking for students from Marathi-medium schools." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case questions answered with applied, scenario-specific writing." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Case studies, map skills and fieldwork-style questions." },
  ],

  regionsTitle: "Uran taluka localities our online tutors already serve",
  regionsIntro:
    "Lessons happen online, so the places below matter for context: how far the nearest decent school is, how the local train and ferry timings shape the day, and when port shifts or monsoon rains reshape the evening.",
  regions: [
    { name: "Uran city", note: "The old taluka town with its creek, market and railway terminus on the Nerul line." },
    { name: "Karanja", note: "A coastal settlement beside the Mora and Karanja jetties, linked to the harbour and fishing economy." },
    { name: "Dronagiri", note: "A CIDCO-planned node with newer apartment blocks, home to many port and logistics workers." },
    { name: "Chirle", note: "A village near the end of the Atal Setu sea link, now seeing fast change in housing and traffic." },
    { name: "Jasai", note: "A semi-rural area with farming and fishing households, between Uran and the Panvel road." },
    { name: "Navghar", note: "A growing residential pocket close to the port-related industrial belt." },
    { name: "Bokadvira", note: "A settled locality near the Uran main road, with a mix of local families and migrant workers." },
    { name: "Funde", note: "A village area north of Uran, with industrial and coastal land use side by side." },
    { name: "Nhava Sheva", note: "The port township itself, home to JNPT staff and shipping-line families." },
    { name: "Mora", note: "The jetty area from which ferries cross toward the Mumbai side." },
    { name: "Gharapuri (Elephanta)", note: "The island of the Elephanta Caves, part of the Uran taluka, with a small resident community." },
  ],

  schoolDisclaimer:
    "No IB or Cambridge/Edexcel school inside Uran could be confirmed, so none is named for the town. One Navi Mumbai school appears in a nearby-city cluster because a published directory lists it as offering IB and IGCSE; it is not a partner of ours. IB Gram is independent of every school, the IB, Cambridge and Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Uran itself: local options are limited",
      note: "Schools in Uran are largely Maharashtra State Board with some CBSE. We confirmed no IB or IGCSE campus in the taluka, so online matching is the practical route for international-syllabus students.",
      schools: [],
    },
    {
      city: "Nearby: Navi Mumbai (Nerul and Belapur side)",
      note: "About 30 to 40 km away by road, Navi Mumbai has more CBSE, ICSE and international schools. An education directory lists D Y Patil International School in Nerul as offering the IB Diploma and IGCSE; check current offerings with the school.",
      schools: ["D Y Patil International School, Nerul"],
    },
    {
      city: "Nearby: Panvel",
      note: "The nearest large town on the Mumbai-Pune corridor, with a wider range of private schools than Uran and a rail link toward Mumbai.",
      schools: [],
    },
    {
      city: "Nearby: Mumbai and Pune",
      note: "The two cities where most Maharashtra IB and Cambridge schools are concentrated. Families transferring for work, or considering a boarding option, usually look here first.",
      schools: [],
    },
  ],

  modesIntro:
    "In Uran, every IB or IGCSE lesson is online, live and one-to-one. What differs is the pattern: a weekly standing slot, a lesson with written feedback, or a short block before an exam. Home visits exist only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "A weekly standing lesson",
      description:
        "The same tutor and time each week from your own desk. It suits families who want a predictable evening even when a parent works rotating port shifts.",
      bullets: [
        "Fixed weekly slot",
        "IB, MYP, PYP or IGCSE",
        "Past papers marked live",
        "No commute for the student",
      ],
    },
    {
      title: "Lessons plus written progress notes",
      description:
        "The live lesson stays the same. A brief note follows each session and a fuller review every few weeks, so a parent on a night shift can still follow what is happening.",
      bullets: [
        "Summary after every class",
        "Periodic plan review",
        "Works well for younger students",
        "Extra slots are easy to add",
      ],
    },
    {
      title: "Exam-season intensive",
      description:
        "A denser run of sessions before mocks and the May or November series, built on timed papers and quick feedback, and kept clear of Ganeshotsav and the heaviest monsoon days.",
      bullets: [
        "Papers marked to board criteria",
        "Feedback inside days",
        "Book two to three weeks ahead",
        "Short, high-focus blocks",
      ],
    },
  ],

  sections: [
    {
      heading: "Which schools and families around Uran look at IB and IGCSE?",
      paragraphs: [
        "Uran's economy runs through its port. JNPT handles a large share of India's container traffic, and thousands of families depend on shipping lines, customs brokerage, freight forwarding, marine services and the ONGC and power installations nearby. Many parents in these jobs have worked abroad or deal daily with global clients, and some want an international education for their children.",
        "The school system has not caught up. Within Uran taluka the schools are mainly Maharashtra State Board, in Marathi or English medium, with a handful of CBSE institutions. We found no confirmed IB World School or Cambridge or Edexcel centre inside the taluka, and this page does not name one.",
        "Enquiries therefore come from a few directions: a family relocating toward Nerul or South Mumbai; a child who has studied IB or IGCSE in the Gulf or Europe and returned with a posting; or a student preparing privately for a Cambridge exam. For each, the key problem is finding a tutor who knows the specific course.",
        "Online matching removes the geography. A student in Dronagiri can sit with a tutor who teaches in Pune or Bengaluru, at a time that fits around bus or train schedules.",
      ],
      table: {
        caption: "How Uran-area families approach IB or Cambridge schooling",
        columns: ["Situation", "Typical choice", "How tutoring helps"],
        rows: [
          ["Relocating to Navi Mumbai", "Move closer to an international school", "Bridges gaps before and after joining"],
          ["Returning from abroad", "Child continues IB or IGCSE", "Maintains continuity and fills content gaps"],
          ["Private IGCSE candidate", "Sits Cambridge exams without an IGCSE school", "Provides syllabus structure and practice"],
          ["State-board student exploring a switch", "Considers MYP or IGCSE", "Builds command-word and writing skills"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed inside Uran taluka",
        "Port-related careers drive international interest",
        "Matching across India replaces the local shortage",
        "Exam marking is identical wherever a student sits",
      ],
    },
    {
      heading: "How does the Maharashtra State Board compare with IB and IGCSE?",
      paragraphs: [
        "The Maharashtra State Board, with its SSC at Class 10 and HSC at Class 12, is textbook-led and recall-heavy, and it feeds directly into MHT-CET for engineering and pharmacy. CBSE leans slightly more toward application. IB and Cambridge IGCSE reward a different habit: interpreting an unfamiliar prompt and arguing a point in writing.",
        "Marathi-medium students face a language shift as well as a style shift. IGCSE Biology and IB Economics need precise English, and the first term of switching is usually spent on vocabulary and structure rather than new content. Tutors help by modelling answers and then asking the student to write their own.",
        "Assessment spread is different too. SSC and HSC students concentrate their effort on one set of papers in March. IB and IGCSE assess across more components and, in the Diploma, over two years, so effort has to be steady.",
        "None of this is a judgement on the state board, which produces strong recall and discipline. The point is only that the international route demands extra skills.",
      ],
      table: {
        caption: "State Board, CBSE and international syllabuses compared",
        columns: ["Feature", "Maharashtra State Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Local presence in Uran", "Most schools", "A few schools", "None confirmed"],
          ["Final assessment", "SSC and HSC papers in March", "Board papers plus internals", "Exams plus coursework across two years"],
          ["Question style", "Textbook-linked", "Some application", "Unfamiliar contexts, extended writing"],
          ["Entrance route", "MHT-CET and NEET", "JEE, NEET and CUET", "AIU equivalence, CUET or overseas entry"],
        ],
      },
      bullets: [
        "Language precision is a major adjustment",
        "Effort must stay steady across two years",
        "Entrance routes differ by board",
        "The state board builds strong recall",
      ],
    },
    {
      heading: "What shapes the fee for IB or IGCSE tuition in Uran?",
      paragraphs: [
        "No public price list exists, because the rate depends on several things at once. The biggest is the course: Higher Level sciences and Maths have fewer experienced tutors nationwide than IGCSE Core subjects, so quotes differ.",
        "Experience with the exact syllabus is next. Someone who has taught IB Physics HL for several cohorts, or marked scripts, can often shave weeks off a student's preparation. That value is built into the rate.",
        "The number of weekly sessions matters too. A student sitting on a single weekly lesson spends less per week than one with three sessions before a mock, though the longer plan is not always the dearer one.",
        "You will see the rate in writing after the free trial lesson. If anything looks out of proportion, ask us to propose a different tutor or a different schedule.",
      ],
      table: {
        caption: "What drives an IB or IGCSE quote",
        columns: ["Driver", "Effect", "What you control"],
        rows: [
          ["Course and level", "HL sciences and Maths cost more than IGCSE Core", "Prioritise subjects that need help"],
          ["Tutor experience", "Recent IB or Cambridge work raises the rate", "Ask what the tutor has taught or marked"],
          ["Sessions per week", "More hours increase the weekly total", "Start with one lesson"],
          ["Time of year", "Exam months are busy", "Book two to three weeks ahead"],
        ],
      },
      bullets: [
        "Quote in writing, after the trial",
        "Match quality often saves time overall",
        "No hidden joining charges",
        "Tutor change if the fit is wrong",
      ],
    },
    {
      heading: "Online home tuition, a Navi Mumbai class or self-study from Uran?",
      paragraphs: [
        "Reaching a class in Navi Mumbai from Uran means a journey that can eat two hours of an evening, especially when the monsoon floods low roads or when trains run late. For a child with school until 3 pm, this is a real cost.",
        "Local tuition in Uran is mainly aimed at SSC and HSC, with Maths and Science batches. Those teachers rarely have IB or Cambridge background, and batch size makes feedback thin.",
        "Online one-to-one tuition keeps the student at home and puts a specialist on the screen. The lesson can be shifted when a parent's shift changes, which is common in port work.",
        "Self-study is an option for disciplined students, but without marked feedback the same mistakes tend to repeat. A tutor shortens that loop.",
      ],
      table: {
        caption: "Ways to prepare for IB or IGCSE from Uran",
        columns: ["Option", "Strength", "Limit"],
        rows: [
          ["Online one-to-one", "Specialist, flexible timing", "Needs reliable internet"],
          ["Class in Navi Mumbai", "In-person contact", "Long commute, fixed batch pace"],
          ["Local state-board tuition", "Nearby, familiar", "Not built for IB or IGCSE"],
          ["Self-study", "Flexible, low cost", "No expert feedback"],
        ],
      },
      bullets: [
        "Commute time is a real cost",
        "Shift patterns suit flexible online slots",
        "Batch classes give limited feedback",
        "Use the trial lesson to compare",
      ],
    },
    {
      heading: "How do exam dates and the Konkan rains fit together?",
      paragraphs: [
        "Two exam windows matter. The IB sits its Diploma papers in May (a November window also exists for some schools), while Cambridge IGCSE candidates sit in May-June or October-November. Results follow in July and January. The student's own school or centre confirms the exact timetable.",
        "Uran gets the full force of the Konkan monsoon between June and September. Roads near the creek flood, trains slow, and power can drop for hours. A hotspot and a charged laptop turn a lost lesson into a mere interruption, which is worth setting up before the first drop of rain.",
        "Ganeshotsav is the other fixed point. For roughly ten days in August or September, homes fill with relatives, evenings turn into visits to mandals and study time shrinks. Diwali does something similar in autumn. Mocks that fall on top of either need a lighter week before them.",
        "Counting backwards from the exam date, the plan covers new content first, then practice papers, then a final revision stretch, with buffer days left for weather and festivals.",
      ],
      table: {
        caption: "A study year for an IB or IGCSE student in Uran",
        columns: ["Period", "Local context", "Focus"],
        rows: [
          ["January to March", "Cool and dry; school mocks", "Revision and weak-topic repair"],
          ["April to June", "Summer heat, monsoon onset; May exams", "Timed papers, short sessions"],
          ["July to September", "Heavy rain, Ganeshotsav", "New content, coursework planning"],
          ["October to December", "Post-monsoon, Diwali, November series", "Internal drafts, mocks, exam practice"],
        ],
      },
      bullets: [
        "May is the main IB session for Indian schools",
        "Cambridge offers May-June and October-November",
        "Build a backup connection for the rains",
        "Clear Ganeshotsav and Diwali days from the plan",
      ],
    },
    {
      heading: "Where can a Uran student go after IB or IGCSE?",
      paragraphs: [
        "Inside India the gatekeeper is the Association of Indian Universities, which issues equivalence for the Diploma and for Cambridge qualifications. Colleges under Mumbai University, private universities around Navi Mumbai and institutions in Pune and Bengaluru look at IB scores, and CUET-UG accepts students from international boards.",
        "Engineering and medicine carry extra conditions. JEE Main and NEET specify the subjects a candidate must have studied, and Maharashtra's MHT-CET has its own rules for state seats. Check Physics, Chemistry, Maths and Biology choices against the current bulletins as early as Class 11.",
        "Abroad, universities read IB points directly. With so many port families linked to maritime and logistics careers overseas, the UK, the Netherlands and Singapore come up often, and maritime or supply-chain degrees are a natural interest.",
        "Applications, personal statements and portfolios are the student's own. Our work is the subject teaching and exam technique behind the grades.",
      ],
      table: {
        caption: "Routes after an international syllabus",
        columns: ["Destination", "Key point", "Check"],
        rows: [
          ["Indian universities", "AIU equivalence and CUET-UG where used", "Each institution's page"],
          ["Engineering", "Subject mix for JEE or MHT-CET", "Latest bulletins"],
          ["Medicine", "NEET subject and eligibility rules", "NEET and state counselling notes"],
          ["Overseas", "IB points or A Level route", "University entry tables"],
        ],
      },
      bullets: [
        "Confirm equivalence early",
        "Class 11 subject choices shape JEE and NEET options",
        "Maritime and supply-chain degrees suit port families",
        "Applications stay the student's own work",
      ],
    },
    {
      heading: "How does live online teaching handle IB Maths and the sciences?",
      paragraphs: [
        "Mathematics comes in two IB flavours. Analysis and Approaches leans on algebra, calculus and proof; Applications and Interpretation leans on statistics, modelling and technology. A student who expects to study engineering usually takes the first, and one headed to economics or management may prefer the second.",
        "Tools make remote teaching practical. A shared whiteboard lets the tutor work a problem alongside the student, and photographs of handwritten solutions come back marked line by line. Many students find this clearer than a red pen across a page.",
        "Each science has its own pressure point. Physics punishes sloppy units and algebra. Chemistry punishes weak recall of the data booklet. Biology punishes vague wording. Sessions are aimed at the point that costs the individual student the most marks.",
        "Internal assessments are discussed at the level of planning and criteria. The investigation and the write-up stay with the student.",
      ],
      bullets: [
        "Pick the Maths course by intended degree",
        "Shared whiteboard and photographed working",
        "Practice aimed at each science's weak point",
        "Coursework remains the student's own",
      ],
    },
    {
      heading: "Core or Extended IGCSE, and how many subjects?",
      paragraphs: [
        "Cambridge splits many IGCSE subjects into Core, with grades up to C, and Extended, with grades up to A*. A student who may later take the IB Diploma or A Levels generally needs the Extended tier in Maths and the sciences, so the choice is really about the destination.",
        "Subject count is the second question. Too many dilutes revision time; too few narrows later options. A balanced set tends to include English, Maths, two or three sciences, a humanity and a language.",
        "Students from Marathi-medium schools can consider English as a Second Language. A second language such as Hindi or Marathi may be offered at some centres, which is worth asking about before registering.",
        "Pearson Edexcel IGCSE follows a similar structure with different papers and mark schemes. The board is confirmed before the first lesson so practice always matches the real exam.",
      ],
      bullets: [
        "Extended tier keeps later options open",
        "Keep the subject load realistic",
        "Think about the language option",
        "Confirm the board before starting",
      ],
    },
  ],

  process: [
    { title: "Tell us the course", description: "A WhatsApp message or email with class, board, subject and level is enough to begin." },
    { title: "Meet a shortlisted tutor", description: "We name a tutor who has recently taught or marked that exact course." },
    { title: "Sit a trial class", description: "One live lesson to test the fit, free of charge and free of obligation." },
    { title: "Confirm the schedule and rate", description: "Weekly hours and the fee are set out in writing before anything is booked." },
    { title: "Study with feedback", description: "Regular lessons with a short note after each, and a swap of tutor if it is not working." },
  ],

  whyPoints: [
    { title: "A tutor for your exact syllabus", description: "Subject, level and board decide the shortlist, not general availability." },
    { title: "No false promises on delivery", description: "Uran lessons are online; tutors visit homes only in Gurugram and parts of Delhi NCR." },
    { title: "Parents stay informed", description: "A note after every lesson suits families on rotating port shifts." },
    { title: "Try before you pay", description: "The free trial class lets you judge the teaching first." },
    { title: "Honest academic boundaries", description: "Tutors coach; they do not write IAs, Extended Essays, TOK essays or coursework." },
    { title: "Easy to change tutor", description: "A mismatch is fixed without argument." },
  ],

  tutorsIntro:
    "These tutors teach from different Indian cities and connect to Uran over video in IST. Distance is irrelevant; the course and the level are what we match on.",

  faqs: [
    { question: "Can I find IB and IGCSE tutors in Uran?", answer: "Yes, as online one-to-one tutors who teach live from elsewhere in India. The student attends from home in Uran on a laptop. We match by subject, level and board and arrange a free trial. Nobody visits homes in Uran, because in-person tuition exists only in Gurugram and parts of Delhi NCR." },
    { question: "Do you offer home tuition in Uran, Raigad?", answer: "Online home tuition, yes. The student studies privately at home, but the tutor joins over video rather than visiting. We do not send tutors to homes in Uran, Navi Mumbai or elsewhere in Maharashtra. Our in-person home service operates only in Gurugram and parts of Delhi NCR." },
    { question: "Is there an IB school in Uran?", answer: "We could not confirm one in the taluka. Schools here are mainly Maharashtra State Board with some CBSE. A published directory lists one IB and IGCSE school in Nerul, Navi Mumbai, and more exist in Mumbai and Pune. Confirm each school's current offerings directly before relying on this." },
    { question: "How much does IB tuition cost for a Uran student?", answer: "No rate card is published. The fee follows the subject, level, tutor experience and weekly hours, and HL sciences and Maths tend to sit above IGCSE Core subjects. After the trial you receive a written quote, and nothing is booked until you have agreed to it." },
    { question: "How does the free trial work?", answer: "Your child joins a regular-length live lesson with a tutor matched to the subject, so you can see teaching style and pace for yourselves. There is no fee and no obligation. If the match feels wrong, we offer another tutor before you commit to anything." },
    { question: "Can my child sit IGCSE privately from Uran?", answer: "Private entry is possible through an approved exam centre, though fees and availability differ, so ask the centre early. Tutoring covers the syllabus and papers while registration is the family's job. Mumbai and Pune have more centres than Uran, so some travel for the papers may be needed." },
    { question: "Will a tutor write my child's IA or Extended Essay?", answer: "No. Tutors explain criteria, talk through topic ideas and comment on structure, but the student researches, writes and submits their own work, as IB rules require. Ghost-writing of any assessed piece, including TOK essays and coursework, is something we do not do." },
    { question: "Which IB subjects can you cover?", answer: "Maths in both versions, the three sciences, Economics, Business Management, English, Computer Science, Psychology, Geography, Marathi B, Hindi B and TOK, at HL or SL. For anything less common, ask first and we will check that a suitable tutor exists before the trial." },
    { question: "Is IGCSE easier than the Maharashtra SSC?", answer: "It is different, not easier. IGCSE rewards application and written explanation, where SSC rewards recall from the textbook. Marathi-medium students often need extra practice with English phrasing and command words, and that is where tutoring pays off most." },
    { question: "Can students from Dronagiri, Karanja or Chirle join?", answer: "Yes. Lessons are online, so any student in the Uran taluka with a stable connection can join. The tutor is chosen for subject fit rather than distance, so your locality does not narrow the choice." },
    { question: "What time are lessons held?", answer: "Lessons run in Indian Standard Time, normally after school on weekdays or at weekends. A recurring slot is fixed first and can be moved around exams, port shift changes, Ganeshotsav or travel with a simple message." },
    { question: "What if the monsoon cuts internet or power?", answer: "From June to September, keep a phone hotspot and a charged laptop ready. If a lesson is lost, tell the tutor quickly; rescheduling is often possible within the week, under the terms agreed in writing before booking." },
    { question: "Can my child move from SSC to IB or IGCSE?", answer: "Yes, with planning. The usual switch points are Class 6, Class 9 and Class 11. A bridging period on English reasoning and command words is useful, and a tutor can say which level or tier is realistic for the first year." },
    { question: "Do you teach MYP and PYP students too?", answer: "Yes. For MYP the work centres on criteria-based tasks and the Personal Project routine, and for PYP on literacy, numeracy and inquiry habits. Both are gentler and less exam-driven than Diploma coaching." },
    { question: "Will I get feedback after lessons?", answer: "Yes. A short written note follows every session, saying what was taught, what was difficult and what to practise, with a longer review every few weeks. That helps parents who work port shifts and cannot sit in on lessons." },
    { question: "Are you affiliated with any school, the IB or Cambridge?", answer: "No. IB Gram is an independent service with no affiliation to the IB, Cambridge, Pearson or any school. Tutors bring relevant teaching or examining experience, but we claim no official status, and no school named here is a partner." },
    { question: "How do I get started?", answer: "Send a WhatsApp message to +91 7439 368 115 or an email to support@ibgram.com with the class, board, subject and any recent marks. A tutor shortlist and a trial time come back to you, and the rate is shared in writing before booking." },
  ],

  internalLinks: [
    { label: "IB Gram across India", href: "/india/", description: "City pages for IB and IGCSE tutoring elsewhere in the country." },
    { label: "IB tutors", href: "/ib-tutors/", description: "A guide to IB tutoring by subject and programme." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "How Cambridge and Edexcel IGCSE tutoring is arranged." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, core elements and how the 45 points work." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "The CP route and its career-related core." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation." },
    { label: "Our tutors", href: "/tutors/", description: "Profiles of tutors who teach online across India." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book your free trial class." },
    { label: "Tutors in Panvel", href: "/panvel/", description: "The nearest large town on the Mumbai-Pune corridor." },
    { label: "Tutors in Mumbai", href: "/mumbai/", description: "India's biggest market for IB and IGCSE schools." },
    { label: "Tutors in Pune", href: "/pune/", description: "Another Maharashtra city with many international schools." },
  ],

  closingHeading: "Book a free trial class from Uran",
  closingBody:
    "WhatsApp +91 7439 368 115 or email support@ibgram.com with the subject, level and board. A matched tutor, a trial hour that works around your family's shifts and a written rate will follow.",
};
