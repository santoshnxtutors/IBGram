import type { CitySeoPage } from "../types";

/**
 * Shikaripur (Shivamogga district, Karnataka). No IB or Cambridge/Edexcel school could be confirmed in the taluk,
 * so stripSchools is empty. Clusters reuse school names already published on the Sirsi page and are labelled nearby.
 */
export const shikaripur: CitySeoPage = {
  slug: "shikaripur",
  countryName: "Shikaripur",
  countryNameLong: "Shikaripur, Karnataka",
  demonym: "Shikaripur",
  flagCode: "in",
  countryCode: "IN",
  state: "Karnataka",
  stateCode: "IN-KA",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "After school hours on weekdays and on Saturday mornings, avoiding the arecanut harvest rush, heavy monsoon evenings and Ganesha Chaturthi week",
  lastUpdated: "2026-09-21",
  geo: { latitude: 14.2667, longitude: 75.35 },
  alternateNames: ["Shikarpur", "Shikaripura", "Shikaripur Shimoga", "Shikaripur taluk"],
  wikipedia: "https://en.wikipedia.org/wiki/Shikaripur",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Shikaripur | Private Online Tuition",
  metaDescription:
    "Looking for IB or IGCSE help in Shikaripur? Book private one-to-one online lessons in Maths, sciences and languages with a free trial lesson first.",
  h1: "IB and IGCSE Tutors for Shikaripur: Private Tuition at Home, Online",
  heroEyebrow: "PRIVATE ONLINE IB & IGCSE TUITION IN SHIKARIPUR",
  heroSubtitle:
    "Families in Shikaripur often type home tuition into a search bar and find nobody who has taught an IB or IGCSE paper. Our answer is private tuition from home, delivered online. Your child sits at the desk they already use, a specialist appears on screen, and a free first lesson shows whether the match is right before any fee is agreed.",
  primaryKeyword: "IB and IGCSE tutors in Shikaripur",
  imageAltText: "A Shikaripur student writing out an IGCSE Biology answer while a tutor reviews it on a video call",
  secondaryKeywords: [
    "IB tutor Shikaripur",
    "IGCSE tutor Shikaripur",
    "IB home tuition Shikaripur",
    "IGCSE home tuition Shikaripur",
    "IB private tuition Shikaripur",
    "IB Maths tutor Shikaripur",
    "IGCSE Maths tutor Shikaripur",
    "IB Physics tutor Shikaripur",
    "IB Chemistry tutor Shikaripur",
    "IB Biology tutor Shikaripur",
    "IB DP tutor Shikaripur",
    "IB MYP tutor Shikaripur",
    "IB PYP tutor Shikaripur",
    "IGCSE online tuition Shikaripur",
    "online IB tutor Shikaripura",
    "IB tutor Shivamogga district",
    "IGCSE tutor Shiralakoppa",
    "IB tutor Talagunda",
    "online tutor Shikarpur Karnataka",
    "IGCSE Chemistry tutor Shikaripur",
  ],

  heroTrustPoints: [
    "Specialists matched on the exact IB course or IGCSE code",
    "Live lessons, never recorded videos, with one student per session",
    "Free first lesson, then a quote you receive in writing",
    "No affiliation with the IB, Cambridge, Pearson or any school",
  ],
  heroStats: [
    { value: "IST", label: "Lessons in Indian time" },
    { value: "Online", label: "Shikaripur lessons run on video" },
    { value: "Two boards", label: "Cambridge and Edexcel" },
    { value: "Free trial", label: "No charge for lesson one" },
  ],

  intro: {
    heading: "International curricula from a Malnad-edge taluk: a practical guide",
    paragraphs: [
      "Shikaripur lies where the Malnad hills begin to flatten into the maidan, in Shivamogga district. Arecanut, paddy and maize fill the fields, the Anjanapura reservoir feeds the land, and the Talagunda inscription in the taluk is a landmark for anyone who studies early Kannada history. Schools here teach to the Karnataka State Board or CBSE, which makes an IB or IGCSE student an uncommon sight.",
      "If you want tuition at home for one of these courses, the format is online. A private tutor teaches your child live on video, one to one, and your child never leaves the house. Tutors do not call at homes in Shikaripur; house visits belong to Gurugram and parts of Delhi NCR only.",
      "Shivamogga city is the nearest large town with more colleges and specialist teachers, Davanagere and Hubballi lie beyond it, and Bengaluru is the destination for international schooling. Teaching by screen sidesteps all of those journeys and lets a child in the taluk work with someone from a metro tutoring circuit.",
      "We are independent. IB Gram has no link with the International Baccalaureate Organization, Cambridge, Pearson, or any school mentioned. Tutors explain, correct and coach; assessed pieces such as Internal Assessments, Extended Essays and TOK essays are always written by the student.",
    ],
    bullets: [
      "Help from PYP through MYP, DP and CP",
      "IGCSE with Cambridge and with Pearson Edexcel",
      "Fixed weekly slot with one tutor",
      "Short note to parents after each class",
      "Calendars set around PUC, harvest and monsoon",
    ],
  },

  programmesIntro:
    "No IB or IGCSE school in the Shikaripur taluk could be verified, so children following these routes are usually enrolled elsewhere, studying privately or moving later. A quick guide to each IB stage and the Shikaripur angle follows.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Young learners explore big ideas through units of inquiry rather than isolated chapters. In the final year they carry out the PYP Exhibition, a collaborative investigation shared with the school community.",
      countryNote:
        "A Shikaripur primary child may need support in spoken English and in turning curiosity into questions; Exhibition topics could come from the reservoir, areca farming or the temple town heritage.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are assessed against criteria such as knowing, investigating and communicating. Every student closes the programme with a self-managed Personal Project.",
      countryNote:
        "Pupils shifting from Kannada-medium or State Board classes meet new academic English quickly, so we devote early weeks to sentence structure for explanations and for lab reports.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students choose six subjects, three at Higher Level and three at Standard Level, then add the Extended Essay, Theory of Knowledge and CAS. Written exams come in May or November.",
      countryNote:
        "Shikaripur DP candidates often pair Maths with the sciences, and some keep an eye on Karnataka CET, so we map weekly hours so neither plan is squeezed.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses sit beside a career-related qualification and a short reflective strand.",
      countryNote:
        "We seldom see the CP from this taluk. If your plan involves it, we cover the academic courses and help the student pace the reflective work.",
    },
  ],

  subjectsIntro:
    "Tutors for Shikaripur students are chosen course by course. Standard Level Business is a different job from Higher Level Chemistry, so we confirm the syllabus and level with you before proposing a name.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, algebra, vectors and proof, with attention to showing every step the way examiners expect." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling with a graphic display calculator; the exploration can draw on rainfall or crop-price data from the taluk." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves and fields, plus an investigation that rewards honest error analysis." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, reactivity and organic pathways, practised with exam-style questions and data tables." },
    { name: "IB Biology", levels: "HL / SL", description: "Molecules to ecosystems, strong on terminology; the Western Ghats edge offers rich ecological examples." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets, macro policy and development, using areca and rice marketing as familiar case material." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study analysis and the internal assessment, with cooperatives and agro-processing as local context." },
    { name: "IB Geography", levels: "HL / SL", description: "Water, hazards and development, with fieldwork write-up discipline." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Forests, water cycles and land use, topics close to a hill-fringe landscape." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysis of literary and non-literary texts and the oral, for students who think first in Kannada." },
    { name: "IB Kannada B", levels: "SL / HL", description: "Reading, writing and speaking Kannada against IB criteria, useful for students fluent at home but new to academic writing." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Language acquisition support with oral practice and written tasks." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Systems, programming and computational thinking, with the internal project marked on process." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion-driven sessions on how claims are justified; the student writes the essay and presentation." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Support in shaping a question and a research plan; the 4,000-word essay is the student's own." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Criterion-led investigations and written conclusions." },
  ],

  igcseSubjectsIntro:
    "Shikaripur IGCSE learners typically register as private candidates or enrol with an online school. We begin by checking the syllabus code and whether the entry is Core, Extended, Foundation or Higher.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Cambridge Core or Extended, Edexcel Foundation or Higher", description: "A broad paper set where tidy working and careful reading earn many of the marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Differentiation, functions and trigonometry ahead of time, helpful before IB Maths AA." },
    { name: "IGCSE Physics", levels: "Core and Extended", description: "Energy, motion, electricity and waves, with a practical-skills paper handled through diagrams and reasoning." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, reactivity, organic basics and test-tube analysis." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Plants, humans and ecosystems, with data-handling questions." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Programming logic, data representation and networks." },
    { name: "IGCSE English First or Second Language", levels: "Grade 9-10", description: "Writing for audience, summary and reading comprehension." },
    { name: "IGCSE Economics and Business Studies", levels: "Grade 9-10", description: "Definitions, calculations and short data-based answers." },
    { name: "IGCSE Geography", levels: "Grade 9-10", description: "River, coastal and settlement topics with case studies." },
  ],

  regionsTitle: "Shikaripur and nearby places where our online lessons reach students",
  regionsIntro:
    "Lessons are on video, so a place matters for timing and network strength. The notes below give a sense of the day in each locality so we can fix a sensible hour. No tutor travels to these places.",
  regions: [
    { name: "Shikaripur town centre", note: "The main road, market and bus stand area, with reasonable broadband and busy evenings on market days." },
    { name: "Talagunda", note: "A village with a famous temple and Kadamba-era inscription, quiet in the evenings and dependent on mobile data in parts." },
    { name: "Anjanapura", note: "The reservoir area northwest of town, where picnic traffic is heavy on holidays and school hours are regular." },
    { name: "Hitla and Kumsi side", note: "Villages on the Shivamogga approach, with families who commute to the district headquarters." },
    { name: "Shiralakoppa", note: "A neighbouring taluk town with its own schools and a strong handloom and areca trade rhythm." },
    { name: "Udathadi", note: "The birthplace of the medieval poet Akka Mahadevi, a quiet village with limited connectivity in places." },
    { name: "Kotipura and Tadaganichi", note: "Agricultural settlements where harvest weeks change the household timetable." },
    { name: "Hosur and Chikkamaginakoppa", note: "Rural clusters where power cuts during the monsoon can interrupt evening lessons." },
    { name: "Shivamogga road corridor", note: "Families along the highway who may study from the taluk or from the city on different days." },
  ],

  schoolDisclaimer:
    "IB Gram has no connection to the IB, Cambridge, Pearson or any school. We could not verify an IB or IGCSE school in Shikaripur, so the groups below list schools in other Karnataka cities already named on our Sirsi and Bengaluru-linked pages. Please check programmes and admissions with the school.",
  schoolClusters: [
    {
      city: "Shikaripur taluk: limited options",
      note: "Schools in the taluk teach the Karnataka State Board syllabus or CBSE. No IB or IGCSE campus was confirmed, which is why international study from here is private or online.",
      schools: [],
    },
    {
      city: "Nearby: Bengaluru",
      note: "Several hours by road, and Karnataka's main centre for international day and boarding schools.",
      schools: ["Stonehill International School", "Canadian International School, Yelahanka"],
    },
    {
      city: "Nearby: Mysuru (boarding or relocation)",
      note: "A smaller option for families considering a residential international school.",
      schools: ["I Can International School", "De Paul International Residential School"],
    },
  ],

  modesIntro:
    "In Shikaripur, all teaching is online. Three set-ups account for most enquiries.",
  modes: [
    {
      title: "Weekly one-to-one online lessons",
      description:
        "A regular hour each week on video with the same tutor, using a shared board for working and diagrams.",
      bullets: [
        "Tutors do not come to homes in Shikaripur; the lesson is online",
        "One tutor throughout the term",
        "Short written notes for parents",
        "In-person visits exist only in Gurugram and parts of Delhi NCR",
      ],
    },
    {
      title: "Exam-season catch-up",
      description:
        "A busier block of lessons in the weeks ahead of the May or November papers, using past papers and mark schemes.",
      bullets: [
        "Timed practice in exam conditions",
        "Targeted revision lists",
        "Command-word clinics",
        "Calendar cleared of festival days",
      ],
    },
    {
      title: "Switching curriculum",
      description:
        "For students moving from Karnataka State Board or CBSE into IGCSE or IB, a short run of lessons on academic English, method and practicals.",
      bullets: [
        "Starting diagnostic",
        "Writing structured answers",
        "Lab-report coaching",
        "Confidence-building pace",
      ],
    },
  ],

  sections: [
    {
      heading: "Who chooses an international curriculum in a place like Shikaripur?",
      paragraphs: [
        "Shikaripur is a taluk headquarters of Shivamogga district with a long agricultural tradition, rice and areca in the wetter parts and maize and cotton nearer the maidan. It is not a place where international schools cluster, and the parents who ask about the IB or IGCSE usually tell us a specific story.",
        "Some work in banks, engineering, government service or the power sector and expect to be posted to Bengaluru or beyond. Some have grown-up children in the Gulf, the UK or the US and picture a grandchild joining them. Others are teachers themselves who are drawn to a curriculum that prizes explanation over copying.",
        "Local identity is strong, and many parents worry that an international route will loosen the child's tie to Kannada and to the region's culture. A sensible plan answers this by keeping Kannada as a language course and by choosing examples from the child's own surroundings.",
        "What the family does not need is a move at fifteen. A child can remain with friends in Shikaripur and still learn from a teacher who knows the IB mark scheme.",
      ],
      bullets: [
        "Transferable jobs in banking or government",
        "Family members overseas",
        "A preference for explanation-led learning",
        "A plan to keep Kannada alive as an academic subject",
      ],
    },
    {
      heading: "State Board, CBSE, IGCSE or IB: what are the real differences for Shikaripur students?",
      paragraphs: [
        "The overwhelming majority of Shikaripur children follow the Karnataka State Board through SSLC and then a pre-university course. Some private schools teach CBSE. Both approaches use a single board examination at the end of Class 10 and Class 12 and reward careful recall.",
        "IGCSE, whether from Cambridge or Pearson Edexcel, is a two-year qualification in which papers are set and marked externally. Questions typically provide new data and ask the student to apply what they know. The IB Diploma goes wider, with six subjects and three core elements.",
        "A Shikaripur student crossing over usually finds the vocabulary of command terms the biggest novelty. Words such as evaluate, justify and suggest carry specific expectations, and a few weeks of practice with them changes results more than extra reading.",
        "The comparison below sets out the practical differences.",
      ],
      table: {
        caption: "Comparing school boards for a Shikaripur family",
        columns: ["Aspect", "Karnataka State Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Main exams", "SSLC, then second PUC", "Class 10 and Class 12 boards", "IGCSE at the end of Grade 10", "Diploma at the end of Grade 12"],
          ["Question style", "Recall and short answers", "Textbook-led with application", "Data, explanation and calculation", "Essays, inquiry and reflection"],
          ["Offered in taluk", "Widely", "Selected private schools", "No confirmed school", "No confirmed school"],
          ["Entry to Indian degrees", "Direct", "Direct", "Equivalence certificate may be required", "Equivalence certificate may be required"],
          ["Second language", "Kannada paper", "Hindi or other option", "Optional", "Language B alongside Language A"],
        ],
      },
    },
    {
      heading: "How should a Shikaripur family think about the cost of IB and IGCSE tuition?",
      paragraphs: [
        "We prefer to quote after a conversation rather than print rates. After the free trial lesson you receive a written quote, and you may decline it with no pressure. A single advertised number would not fit the range from Class 8 Maths to HL Chemistry in the Diploma.",
        "The rate depends on four things: how advanced the course is, how deep the tutor's experience of that syllabus runs, how many hours you book each week, and how long you intend to continue. A short revision burst before an exam costs less overall than a full year of weekly lessons.",
        "Because teaching is online, there are no travel costs and no need to rent a room in Shivamogga to attend a class. That is a real saving for a family living some distance from the district town.",
        "Coaching batches look cheaper per hour. Private tuition focuses the whole session on the points your child finds hard, and fewer hours are often enough.",
      ],
    },
    {
      heading: "Is online private tuition better than a coaching centre or a village teacher for IB and IGCSE?",
      paragraphs: [
        "That depends on what the child is preparing for. Coaching centres in Shivamogga and Davanagere focus on state board, CET and NEET, and they do that well. They do not teach to Cambridge or Edexcel mark schemes, or to IB internal assessment criteria.",
        "A school teacher who tutors on the side may be excellent at Karnataka syllabus content, but rarely has the experience of marking IGCSE papers or advising on an IB investigation.",
        "Self-study with a pile of past papers works for a few disciplined students, though errors often go unnoticed until the exam.",
        "An online private tutor combines a subject specialist, regular scheduling and focused feedback. The table lays out each route.",
      ],
      table: {
        caption: "Study routes compared for Shikaripur students",
        columns: ["Route", "IB or IGCSE relevance", "Feedback", "Flexibility", "Weak point"],
        rows: [
          ["Online private tutor", "High, matched to the course", "Immediate and individual", "Evenings and weekends", "Relies on stable internet"],
          ["Coaching centre in Shivamogga", "Low", "Group level", "Fixed batch times", "Travel and a different syllabus"],
          ["Village or school teacher", "Patchy", "Personal", "Flexible", "Seldom trained on these boards"],
          ["Self-study", "Variable", "None", "Entirely self-set", "Errors persist unseen"],
        ],
      },
    },
    {
      heading: "What does the Shikaripur school year look like once monsoon, harvest and festivals are counted?",
      paragraphs: [
        "The taluk straddles a transition zone, so rainfall is heavier than in the plains around Davanagere but lighter than in the true Malnad. June to September brings steady rain, and some villages lose power during storms. Summers from March to May are hot but less severe than in northern Karnataka, and winters are comfortable.",
        "Agricultural cycles matter. Areca harvests keep many households busy, paddy transplanting falls in the monsoon, and extended family often gathers for festivals. Ugadi, Ganesha Chaturthi, Dasara, Deepavali and Sankranti all affect study hours, and Ramzan and Eid shape evenings for many families.",
        "School calendars follow Karnataka rules, with SSLC and second PUC exams in March and April. An IB or IGCSE candidate may hold exams in May or November, so the timeline looks different from a classmate's.",
        "Here is a planning table for a typical year.",
      ],
      table: {
        caption: "Planning an academic year in Shikaripur",
        columns: ["Period", "Academic focus", "Local rhythm", "Suggested lesson pattern"],
        rows: [
          ["June to August", "New term, IA topic selection", "Monsoon rain, paddy planting", "One or two lessons a week, backup for power cuts"],
          ["September to November", "Mocks and the October-November IGCSE series", "Ganesha Chaturthi, Dasara, Deepavali", "Finish mocks before festival weeks"],
          ["December to February", "IA drafts, revision of Year 1 content", "Pleasant weather, areca harvest", "Longer weekend sessions"],
          ["March to April", "IB revision, IGCSE practicals", "Ugadi, hotter days", "Early evening lessons"],
          ["May to June", "IB Diploma and IGCSE May series", "Pre-monsoon heat, first showers", "Morning slots and a mobile hotspot ready"],
        ],
      },
    },
    {
      heading: "Which universities and careers open up for a Shikaripur student with the IB or IGCSE?",
      paragraphs: [
        "Shivamogga is the first stop, with Kuvempu University at Shankaraghatta, the Sahyadri campuses and several engineering colleges, and Davanagere, Hubballi and Mysuru add choices. Bengaluru has the deepest list, from private universities to IISc-linked programmes and IIIT Bangalore.",
        "For Indian admission, IB and IGCSE students normally rely on national entrance routes such as CUET-UG, JEE Main, NEET and Karnataka CET where eligible. An Association of Indian Universities equivalence certificate is frequently required. Policies change, so please read the current notices. Tutors teach and do not manage admissions.",
        "Overseas options include the UK, Canada, Australia, Singapore and the US. The IB Diploma is read easily by admissions teams, and strong Maths and science results support engineering and health-related applications.",
        "Whichever door you aim for, talk about subject choices early so that prerequisite courses are in place.",
      ],
    },
    {
      heading: "What should a Shikaripur student expect from IB Maths, Physics, Chemistry and Biology lessons?",
      paragraphs: [
        "In Maths, the first question is the course. Analysis and Approaches covers calculus, algebra and proof for future engineers and scientists, and Applications and Interpretation emphasises statistics and technology for a student leaning toward economics or life sciences. We help you decide before the first month ends.",
        "Physics, Chemistry and Biology lessons follow the specification closely. Tutors teach a topic, assign exam-style questions, then review the answers and the reasoning. For Standard and Higher Level, the extra depth is added in separate blocks.",
        "The internal investigation is treated as a skill. We explain how to frame a testable question, control variables, treat uncertainty and write a conclusion that matches the data, but the experiment and report are the student's own work.",
        "Students from state board schools are often strong on memory and on numerical accuracy, so practice concentrates on explanation, graph interpretation and extended answers.",
      ],
      bullets: [
        "Choosing between AA and AI before committing",
        "Weekly past-paper questions with feedback",
        "Practice with data booklets and formula sheets",
        "Vocabulary banks for Biology and Chemistry",
      ],
    },
    {
      heading: "How do Cambridge and Edexcel IGCSE tiers and subject choices work for private candidates?",
      paragraphs: [
        "A private candidate cannot simply turn up on exam day. Registration is made through an authorised centre, usually in a larger city, and the centre also deals with practical assessments where they apply. Check deadlines months ahead.",
        "Cambridge Core limits the top grade, while Extended opens the full range; Edexcel uses Foundation and Higher in the same way. A student wanting IB HL or A Level Maths should sit Extended or Higher.",
        "Subject choices follow the plan. Students heading towards medicine or biotechnology combine Biology and Chemistry, future engineers take Physics and Additional Mathematics, and those drawn to commerce add Economics or Business Studies.",
        "Our tutors help students understand the specification and past-paper habits for either board. We do not register candidates ourselves.",
      ],
    },
  ],

  process: [
    { title: "Tell us the details", description: "WhatsApp +91 7439 368 115 or email support@ibgram.com with grade, board, subject and a possible weekly hour." },
    { title: "A tutor is proposed", description: "We suggest someone who has taught the exact syllabus and share how they run lessons." },
    { title: "Trial lesson", description: "A free video session in which the tutor sees your child's current level." },
    { title: "Quote and timetable", description: "You get the rate in writing and agree a stable slot before anything is booked." },
    { title: "Learning with notes", description: "After each class a short note records what was covered, and a new tutor is arranged if the fit is poor." },
  ],

  whyPoints: [
    { title: "Right syllabus, right level", description: "A tutor is selected for the specific IB course or IGCSE code and the tier your child is sitting." },
    { title: "Small taluk, no disadvantage", description: "The online model lets a Shikaripur child learn with the same calibre of tutor a Bengaluru child would meet." },
    { title: "Clear about home visits", description: "House calls happen only in Gurugram and parts of Delhi NCR; in Shikaripur private lessons are online." },
    { title: "Parent visibility", description: "Notes after each class let you follow progress without sitting in the room." },
    { title: "Integrity first", description: "Tutors never write IAs, Extended Essays, TOK essays or coursework for students." },
    { title: "Fit matters", description: "If the tutor is not right, we replace them promptly." },
  ],

  faqs: [
    { question: "Is IB home tuition in Shikaripur available?", answer: "Home tuition in Shikaripur is offered online, not in person. Your child takes private one-to-one lessons from home with a tutor on a laptop, and no tutor visits houses in the taluk because in-person lessons run only in Gurugram and parts of Delhi NCR. The first lesson is free, so you can test the arrangement." },
    { question: "Does any school in Shikaripur teach IGCSE or the IB?", answer: "We could not verify one. Schools in the taluk teach the Karnataka State Board or CBSE. Families interested in IB or IGCSE usually study privately, join an online school, or consider relocating to Bengaluru. Always confirm programmes directly with schools as they change." },
    { question: "What factors set tuition fees for Shikaripur students?", answer: "Fees depend on the level of the course, the tutor's experience with that syllabus, the number of lessons each week and the length of the plan. We provide a written quote after a free trial rather than a published price list. Online lessons remove the travel expense of reaching Shivamogga." },
    { question: "Which IGCSE subjects can I study with an online tutor?", answer: "Mathematics, Additional Mathematics, Physics, Chemistry, Biology, Computer Science, English, Economics, Business Studies and Geography are all staffed for both Cambridge and Edexcel. If you need another subject, ask and we will say honestly whether we can match a qualified tutor." },
    { question: "Can my child do IB Maths with an online tutor if they come from the State Board?", answer: "Yes. Many students make the move successfully. We begin with a diagnostic to see whether Analysis and Approaches or Applications and Interpretation fits, then bridge any gaps in notation, proof or calculator use. Expect the first month to focus on method as much as content." },
    { question: "Will tutors help with the Extended Essay?", answer: "They can help you pick a researchable question, plan the structure and understand the assessment criteria, and they can comment on drafts you write yourself. They do not write, rewrite or ghost any part of the essay, the IA or TOK work. That boundary protects your child's results." },
    { question: "How do you handle power cuts during the monsoon?", answer: "We choose lesson hours when supply is usually steady, ask families to keep a charged laptop and a phone hotspot ready, and reschedule if the outage runs long. The tutor's note after each class means a missed portion can be recovered in the next session without loss." },
    { question: "When does the IB exam season fall?", answer: "The IB holds Diploma sessions in May and November, with results in July and January. Most Indian schools sit the May session. Your coordinator will confirm exact dates, and we plan lessons backwards from them so topics are covered and past papers practised in time." },
    { question: "Which months do Cambridge and Edexcel hold IGCSE exams?", answer: "Cambridge has February to March, May to June and October to November series; Edexcel runs in January, May to June and October to November. A private candidate must register through an authorised centre well before the deadline, and not all subjects appear in every series." },
    { question: "Can an IB or IGCSE student still write NEET or JEE?", answer: "Eligibility is set by the testing agency and can change each year, so check the current brochure. Students with the IB or IGCSE sometimes need particular subject combinations or an equivalence certificate. We teach subjects at IB and IGCSE level and do not offer separate NEET or JEE coaching." },
    { question: "Is an equivalence certificate necessary for Indian universities?", answer: "Many Indian institutions ask for an Association of Indian Universities equivalence certificate for IGCSE or IB results. Requirements differ by college and year, so verify with the university. We teach the courses and do not issue or process certificates." },
    { question: "At what class should a child start getting IB or IGCSE help?", answer: "Families can begin whenever a need appears. Many start in Class 8 or 9 as IGCSE approaches, or in Class 10 before the Diploma. Younger children benefit from English reading and problem-solving support in the PYP and early MYP years." },
    { question: "What are the lessons like for a younger PYP child?", answer: "They are short, interactive and built around talk, stories and hands-on tasks shown on the camera. A parent usually sits nearby for the first few sessions. The tutor aims to build curiosity, reading fluency and confidence, not to push worksheets." },
    { question: "What happens if the tutor does not suit my child?", answer: "Tell us and we will arrange someone else. Fit matters, and a change is part of the service. You also review a written note after each lesson, so any mismatch in pace or style becomes visible early rather than late." },
    { question: "What equipment is required at home?", answer: "A laptop or tablet, a headset, a notebook and stable internet are enough for most subjects. Maths and science students also need an approved calculator, and a phone or webcam positioned over the page helps the tutor see handwritten working." },
    { question: "How do I book the free trial?", answer: "Send a WhatsApp message to +91 7439 368 115 or email support@ibgram.com with your child's class, board and subject. We reply with a tutor suggestion and a time. After the trial you decide whether to continue, with a written quote in hand." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "How the online service works in towns and cities across the country." },
    { label: "IB tutors", href: "/ib-tutors/", description: "All IB subjects and levels we cover." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Pearson Edexcel support by subject." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "What the PYP involves and how tutoring helps." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, core and assessment in the Diploma." },
    { label: "IB Maths support", href: "/courses/ib/mathematics/", description: "AA and AI courses explained." },
    { label: "Meet the tutors", href: "/tutors/", description: "See profiles and subject areas." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Start with a free trial lesson." },
    { label: "Shivamogga", href: "/shivamogga/", description: "Our page for the district headquarters." },
    { label: "Sagara", href: "/sagara/", description: "Online IB and IGCSE tuition for Sagara students." },
    { label: "Tarikere", href: "/tarikere/", description: "A neighbouring Karnataka town page." },
  ],

  tutorsIntro:
    "Every tutor below teaches live online. A Shikaripur family can meet one in a free trial lesson, and we shortlist by syllabus, level and timing.",
  closingHeading: "Book a free IB or IGCSE trial from Shikaripur",
  closingBody:
    "Send us the class, board and subject and we will propose a tutor and a trial time. Reach us on WhatsApp at +91 7439 368 115 or at support@ibgram.com.",
};
