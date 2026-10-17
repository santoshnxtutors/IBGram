import type { CitySeoPage } from "../types";

/**
 * /mansa/ - IB and IGCSE tutoring page for Mansa, Punjab (Malwa belt, not Mansa in Gujarat's Gandhinagar
 * district). No IB or Cambridge/Edexcel IGCSE school is confirmed in Mansa, so stripSchools is empty and
 * clusters use Ludhiana, Chandigarh-Mohali and Jalandhar schools already verified on neighbouring pages.
 * Online only.
 */
export const mansa: CitySeoPage = {
  slug: "mansa",
  countryName: "Mansa",
  countryNameLong: "Mansa, Punjab",
  demonym: "Mansa",
  state: "Punjab",
  stateCode: "IN-PB",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons work around paddy-season smog, December fog, Baisakhi and Lohri weeks and your child's own school hours",
  lastUpdated: "2026-09-21",
  geo: { latitude: 29.9988, longitude: 75.3933 },
  wikipedia: "https://en.wikipedia.org/wiki/Mansa,_Punjab",
  alternateNames: ["Mansa Punjab", "Mansa Bathinda", "Mansa town Punjab"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mansa, Punjab | Online Tuition",
  metaDescription:
    "Online one-to-one IB and IGCSE tutors for Mansa, Punjab (not Mansa in Gujarat): DP, MYP, PYP, Cambridge, Edexcel, paddy-season aware, free trial class.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Mansa, Punjab",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR MANSA, PUNJAB",
  heroSubtitle:
    "This page is about Mansa in Punjab's Malwa cotton belt, near Bathinda, and not the Mansa in Gujarat. Students here can take private tuition from home, live and one to one on a laptop, with a tutor who knows the exact IB subject or IGCSE paper involved. No school in town teaches either, so the tutor is found by syllabus and meets your child over video.",
  primaryKeyword: "IB and IGCSE tutors in Mansa",
  imageAltText: "A Mansa, Punjab student revising IGCSE Biology at a home desk while a tutor explains on a video call",
  secondaryKeywords: [
    "IB tutor Mansa Punjab",
    "IGCSE tutor Mansa Punjab",
    "IB home tuition Mansa",
    "IGCSE home tuition Mansa",
    "IB private tuition Mansa",
    "IB Maths tutor Mansa",
    "IGCSE Maths tutor Mansa",
    "IB Physics tutor Mansa",
    "IB Chemistry tutor Mansa",
    "IB Biology tutor Mansa",
    "IB DP tutor Mansa",
    "IB MYP tutor Mansa",
    "IB PYP tutor Mansa",
    "IGCSE online tuition Mansa",
    "IB tutor Bathinda Mansa district",
    "IGCSE tutor Sardulgarh",
    "online IB tutor Punjab Malwa",
    "IB tutor Mansa Punjab India",
  ],

  heroTrustPoints: [
    "Mansa in Punjab specifically, taught to the syllabus your own child is sitting",
    "Live video lessons only: a tutor at the door is a Gurugram and Delhi NCR arrangement, not a Mansa one",
    "A free trial class on a real topic before you spend anything",
    "No link to any school, board or exam body named on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB from primary to Diploma" },
    { value: "Cambridge + Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "Indian teachers, Indian clock" },
    { value: "Free trial class", label: "Try it, then decide" },
  ],

  intro: {
    heading: "IB and IGCSE support for a Malwa town that sends many students abroad",
    paragraphs: [
      "Mansa is a district town in southern Punjab, in the Malwa belt where cotton, wheat and paddy set the rhythm of the year and where Bathinda, about an hour to the east, is the regional hub. There is a second Mansa in Gujarat, near Gandhinagar; this page concerns only the Punjab one. Families here take education seriously, and many have a son, daughter or cousin in Canada, Australia or the UK.",
      "That overseas pull is why the IB and IGCSE come up at all. Neither is taught in a Mansa school that we can confirm. Local classrooms follow the Punjab School Education Board or CBSE, with private schools geared to NEET, JEE and, increasingly, IELTS readiness. A child who needs an international syllabus is typically returning from abroad, studying with an online school, or aiming at a school in Ludhiana, Mohali or further off.",
      "Because there is no local specialist, the tutor is chosen by syllabus and level, then teaches live on video with a shared screen and a marked past paper. The tutors are based in India and teach in IST, so an evening after school suits both sides and no time-zone arithmetic is needed.",
      "IB Gram works independently. It is not a school, and has no link with the IB, Cambridge or Pearson. Tutors explain and correct but never write an Internal Assessment, Extended Essay, TOK essay or other assessed work.",
    ],
    bullets: [
      "IB primary, middle and Diploma years",
      "Cambridge and Pearson Edexcel IGCSE across tiers",
      "Online home tuition with a short written summary after each class",
      "A free trial class, and a fresh tutor if the pairing is wrong",
      "Mansa tutoring is online; door-to-door teaching runs only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Since no Mansa school offers these programmes, each one reaches a family from a different starting point: a return from abroad, a distance enrolment, or a planned move to another Punjab city. The notes below describe those routes as they actually are.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3 to 12",
      description:
        "Young pupils learn through themed inquiries and close with a self-directed Exhibition instead of a test. With no exam to prepare for, tutoring focuses on comfortable English reading, arithmetic fluency and the curiosity to investigate a question.",
      countryNote:
        "A PYP child in Mansa has usually spent earlier years in a school abroad or in a metro, and parents want reading and number work kept on track while the child adjusts to Punjabi-medium surroundings.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11 to 16",
      description:
        "Four criteria are applied to every subject and a Personal Project completes the course. Pupils trained to reproduce Punjab Board answers often have to learn, for the first time, to justify a view in writing and compare sources.",
      countryNote:
        "No MYP school exists in Mansa, so the calendar of deadlines comes from a school elsewhere, and a tutor often becomes the person who keeps track of criterion tasks.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Ages 16 to 19",
      description:
        "Six subjects, three at Higher Level, plus a knowledge course, a long essay and coursework spread over two years. Written exams are held in May, with a string of internal deadlines before them.",
      countryNote:
        "A Diploma student in Mansa is usually a boarder in another city or a remote learner, and asks most often for Maths, Physics, Chemistry, Economics or Business Management.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Ages 16 to 19",
      description:
        "Two or more Diploma courses sit beside career-linked study, a reflective project and a skills strand. Few Indian schools offer it, but the Diploma courses within are assessed exactly as in the full Diploma.",
      countryNote:
        "Questions about the CP from Mansa are rare. When they come, tutoring attends to the Diploma courses and the reflective writing.",
    },
  ],

  subjectsIntro:
    "Saying 'IB Maths' is not enough for a good match, as Analysis and Approaches at Higher Level differs greatly from Applications and Interpretation at Standard. A Mansa student's plan starts with subject, level and exam session, then finds evenings that survive fog in winter and smog in the paddy season.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof, aimed at students heading to engineering or pure science. Strong Punjab Board algebra helps, while Paper 3's unusual problems need separate training." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, probability and modelling with calculator fluency. Exploration topics drawn from agriculture, such as cotton prices or rainfall, make coursework feel local." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves and fields with an investigation graded on method. Quick, tidy unit handling saves marks in both papers." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry and bonding followed by energetics and organic mechanisms. Students must practise extended, reasoned answers that board-style short answers never ask for." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics and ecology, marked on precise use of command terms, with simple statistics supporting a convincing Investigation." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, definitions and live examples. Punjab's farm economy, minimum support prices and migration give students natural case material." },
    { name: "IB Business Management", levels: "HL / SL", description: "Theory applied to a stated case, with a research project on a real organisation such as a local cooperative or a family shop." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Commentary on unseen texts, comparative essays and an oral. Punjabi and Hindi speakers benefit from weekly extended speaking in English." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming and data structures, with a documented solution for the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies recalled accurately and evaluated, with long answers organised around a clear argument." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking about soil, water and air. Groundwater decline, stubble burning and canal irrigation make this subject feel close to home." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, fieldwork design and evaluation, with agriculture and water management as natural themes." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and structured essays written to time." },
    { name: "IB Punjabi or Hindi", levels: "HL / SL", description: "Text analysis, written tasks and the oral for students who use Punjabi or Hindi every day; availability depends on what the exam session offers." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion-based coaching on the exhibition and prescribed titles, without writing the work for the student." },
  ],

  igcseSubjectsIntro:
    "Two boards and several tiers hide behind the word IGCSE. For a Mansa student, the plan begins with the board, code and tier, such as Cambridge 0580 Extended or Edexcel 4MA1 Higher, and with the first exam series the student is entered for.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended needs quick arithmetic and complete working; marks are lost more to misread command words than to missing topics." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Brings in calculus, vectors and trigonometric identities early, a sound bridge to IB Maths Analysis and Approaches." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Much the same mathematics as Cambridge, but wording and order differ, so the paper style needs its own practice." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation rearrangement, plus the alternative-to-practical paper for students who lack a full laboratory." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations and bonding, then organic chemistry, with practical analysis built in early." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, human biology and ecology, with longer answers shaped as examiners prefer." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, final accounts and ratios, a natural fit for families in trade and commission-agent businesses." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying concepts to the scenario in the question, not reciting definitions." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Accurate diagrams first, then balanced evaluation of both sides." },
    { name: "IGCSE Punjabi as a Second Language", levels: "Grade 9-10", description: "Reading, writing and speaking for students who want the language formally assessed; offered where a board syllabus exists for the session." },
  ],

  regionsTitle: "Mansa district places our online IB and IGCSE tutors reach",
  regionsIntro:
    "The lessons themselves are online, so this list is for context: which stretch of the district a family lives in, how it connects to Bathinda and Sirsa, and what the evening looks like after the school bus and the harvest cycle.",
  regions: [
    { name: "Mansa town centre", note: "The busy core around the main bazaar and grain market; a quiet upstairs room helps for video lessons in the evening rush." },
    { name: "Bathinda Road", note: "The eastern corridor toward the regional hub, used by families whose children commute for coaching or school." },
    { name: "Sirsa Road", note: "The western approach toward Haryana; some households have relatives across the border in Sirsa and Dabwali." },
    { name: "Barnala Road", note: "The north-east route toward Barnala and Ludhiana, the usual way out for students moving to a bigger school." },
    { name: "Railway station area", note: "A compact area close to the station with easy onward travel to Bathinda and Delhi." },
    { name: "Sardulgarh", note: "A town in the south-west of the district with its own agricultural market and families who often look toward Sirsa." },
    { name: "Budhlada", note: "A town on the Hisar-Bathinda side of the district with a busy mandi and many business households." },
    { name: "Bhikhi", note: "A smaller town east of Mansa with a mix of farming and salaried families." },
    { name: "Bareta", note: "A quieter town in the north-east of the district, where students often rely on Mansa or Barnala for higher school." },
    { name: "Jhunir and Joga", note: "Rural and semi-urban pockets where connectivity is uneven, so a backup plan for lessons matters." },
  ],

  schoolDisclaimer:
    "We could not confirm any school in Mansa, Punjab that teaches the IB or a Cambridge or Edexcel IGCSE, so the school strip is empty and the schools below are in other cities. IB Gram is an independent tutoring service. It is not affiliated with, or endorsed by, any school named here, the IB Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Nearby: Ludhiana",
      note: "The nearest large city with schools we have verified, roughly three hours by road, and a frequent destination for Malwa families changing schools.",
      schools: ["Britannica International School", "Harvest International School"],
    },
    {
      city: "Nearby: Chandigarh and Mohali",
      note: "A longer drive east, but the tri-city area is where Punjab families most often weigh an international school for the Diploma years.",
      schools: ["Oakridge International School, Mohali", "The British School, Chandigarh"],
    },
    {
      city: "Nearby: Jalandhar",
      note: "The Doaba city north of Ludhiana, with a school whose name includes Cambridge, verified on our Bathinda page.",
      schools: ["Cambridge International School, Jalandhar"],
    },
  ],

  modesIntro:
    "Mansa has a single delivery format, a live video class with one tutor and one student. The options below differ in pace and purpose. Nobody comes to a house here; door-to-door teaching runs only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "A weekly class on a fixed day",
      description:
        "The same hour every week, your child and the tutor sharing a whiteboard and a marked paper. It is the natural first step and works for every programme and subject we cover.",
      bullets: [
        "A single tutor who gets to know how your child works",
        "Whiteboard work saved for later revision",
        "Suits IB and IGCSE across all levels",
        "A brief note to parents after every class",
      ],
    },
    {
      title: "Term plan with check-ins",
      description:
        "Lessons tied to written aims, with a conversation every few weeks about progress. It is especially useful for students following an online school, where nobody nearby can monitor coursework.",
      bullets: [
        "Aims written after the trial class",
        "A regular progress conversation",
        "Good for subjects with heavy coursework",
        "Room for an extra class before mocks",
      ],
    },
    {
      title: "Exam-season intensive",
      description:
        "Two or three classes a week for a short run, almost all of it timed papers marked quickly. In Mansa these blocks steer clear of harvest peaks, heavy fog and the smog of the paddy burning season.",
      bullets: [
        "Papers taken under the clock",
        "Marking returned before the next paper",
        "Scheduled around fog, smog and festivals",
        "Best booked a month before the exam",
      ],
    },
  ],

  sections: [
    {
      heading: "Which Mansa is this, and who looks for IB and IGCSE tutors here?",
      paragraphs: [
        "This page is for Mansa in Punjab, the headquarters of Mansa district in the Malwa region, and not Mansa in Gujarat's Gandhinagar district, which has its own schools and its own tutoring landscape. If your child lives in the Gujarat town, the Gujarat city pages on this site are a better guide.",
        "The Punjab town has a population somewhere near a lakh and a half, an economy tied to cotton, wheat, paddy and the grain market, and strong ties abroad. In many households someone has already gone to Canada, the UK or Australia. That is why these syllabuses, which overseas universities understand well, are discussed at kitchen tables here.",
        "The typical enquirer is a parent whose child studied IGCSE or the IB elsewhere and is now in Mansa, or one who wants a child prepared for an international school in Mohali or Ludhiana, or one whose child follows an online school at home. They all hit the same wall: no teacher nearby has taught the exact course.",
        "Online private tuition answers that. IB and IGCSE tutors in Mansa are picked by syllabus and reached over video, with a whiteboard, marked papers and a written note after each class so that parents can follow along.",
      ],
      table: {
        caption: "Why a Mansa family might look for IB or IGCSE tuition",
        columns: ["Situation", "Who it involves", "What tutoring provides"],
        rows: [
          ["Return from abroad", "Children who studied IGCSE or the IB overseas", "Keeps the course moving through the move"],
          ["School change planned", "Students aiming at Mohali, Ludhiana or Chandigarh", "Early work on command words and coursework"],
          ["Online school", "Learners following a programme from home", "A live teacher beside recorded lessons"],
          ["Study abroad goal", "Older students targeting Canada, the UK or Australia", "Subject depth and stronger predicted grades"],
        ],
      },
      bullets: [
        "This page covers Mansa, Punjab, not Mansa in Gujarat",
        "No school in town is confirmed to teach IB or IGCSE",
        "Overseas family links drive much of the interest",
        "Tutors are matched by syllabus and taught online",
      ],
    },
    {
      heading: "How do Punjab Board and CBSE differ from the IB and IGCSE?",
      paragraphs: [
        "Punjab Board and CBSE papers reward a thorough grip on the prescribed text, reproduced in expected form. The IB and IGCSE ask for reasoning: explain, compare, evaluate, apply to a case the student has not met. A Mansa student who tops the class by learning the book can be unsettled by a changed context.",
        "Coursework is another gulf. The IB Diploma draws a large share of each grade from work done well before the exam, including Internal Assessments, the Extended Essay and Theory of Knowledge. IGCSE varies by subject, with some practical or coursework papers. Independent project work over months is unfamiliar to most Punjab Board classrooms.",
        "Depth differs as well. IB Higher Level Maths and sciences stretch beyond Class 12 in places; IGCSE Extended sits above typical Class 10. Nobody locally can advise on the right tier, which is why a diagnostic first lesson is part of our routine.",
        "Neither route is easier. Some students flourish under steady criterion-based assessment, others prefer a single big exam. The aim is to teach the format so that ability is visible.",
      ],
      table: {
        caption: "Punjab Board and CBSE set beside IB and IGCSE",
        columns: ["Aspect", "Punjab Board / CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["Skill rewarded", "Faithful recall of set content", "Analysis, evaluation and research", "Application with clear working"],
          ["Coursework share", "Small internal marks", "IAs, Extended Essay, TOK", "Some practical or coursework papers"],
          ["Exam timing", "Spring board exams", "May and November sessions", "May-June, October-November, Edexcel also January"],
          ["In Mansa", "Every local school", "None locally", "None locally"],
        ],
      },
      bullets: [
        "Questions often arrive in unfamiliar contexts",
        "Coursework needs months of independent planning",
        "Tier decisions need early advice",
        "Switching boards is manageable with guided practice",
      ],
    },
    {
      heading: "What shapes the fee for IB or IGCSE tuition in Mansa?",
      paragraphs: [
        "No price is printed here, because one figure would mislead. The rate moves with programme, level, subject, class length and the tutor's depth of experience with that syllabus. You see it in writing before you book anything.",
        "Less common courses cost more: IB Physics HL, IGCSE Additional Mathematics and Computer Science are taught by fewer specialists. A short revision sprint before an exam is planned differently from a steady weekly slot, and is quoted accordingly.",
        "Everything is online, so nothing is added for travel. A Mansa family also saves the bus fares, rent and lost evenings that come with sending a child to Bathinda, Ludhiana or Chandigarh for weekday coaching.",
        "Commitment is light. The first class is free, terms can be paused around harvest or a wedding, and a tutor can be replaced without penalty.",
      ],
      bullets: [
        "Programme, level, subject and class length set the rate",
        "Rare courses are priced higher",
        "No travel costs with online classes",
        "First class free, no lock-in",
      ],
    },
    {
      heading: "Online tutor, coaching institute, local teacher or self-study: what works in Mansa?",
      paragraphs: [
        "Coaching institutes in Mansa, Bathinda and Barnala are built around NEET, JEE, board results and, more recently, IELTS. They serve those goals well. None is likely to run a batch for IGCSE Chemistry or IB Economics, so that route is closed for these syllabuses.",
        "Private teachers in town are often capable and devoted. The gap is specific to IB and IGCSE: command words, the structure of full-mark answers and the way coursework is graded. General teaching experience does not automatically provide those.",
        "Self-study can work for a disciplined student, particularly in IGCSE Mathematics, where past papers are plentiful. It weakens on coursework planning and extended writing, since nobody can say whether an answer would earn top marks.",
        "Online specialists match the syllabus exactly but need a steady connection. Rural power cuts and fog-hit days can interrupt a class, so each plan includes a fallback slot and written solutions sent afterwards.",
      ],
      table: {
        caption: "Support options for IB or IGCSE students in Mansa",
        columns: ["Option", "Syllabus fit", "Attention", "Limit here"],
        rows: [
          ["Coaching institute", "Built for NEET, JEE and boards", "Group", "No IB or IGCSE batches"],
          ["Local teacher", "Strong for Punjab Board and CBSE", "One to one", "Seldom taught IB or IGCSE"],
          ["Self-study", "Depends on the student", "None", "No feedback on coursework"],
          ["Online specialist", "Matched to the course", "One to one", "Needs steady power and internet"],
        ],
      },
      bullets: [
        "Coaching here is aimed at other goals",
        "Local teachers rarely know IB or IGCSE marking",
        "Self-study lacks marked feedback",
        "Online classes come with a fallback for outages",
      ],
    },
    {
      heading: "How do paddy smog, fog and festivals shape the Mansa year?",
      paragraphs: [
        "The calendar in the Malwa belt follows the crops. Wheat is harvested in April, cotton picking runs through autumn, and paddy straw burning in October and November can leave the air heavy and the roads hazy. December and January bring thick fog that slows buses and shortens evenings outdoors, while May and June are scorching.",
        "Festivals sit on top of that. Lohri in January, Baisakhi in April, Diwali and Gurpurab in autumn, and the long wedding seasons fill weekends and pull relatives in. A sensible plan puts classes on fixed weekday slots and leaves weekends flexible.",
        "Exam dates follow their own logic. The IB Diploma papers are held in May, with results in early July. Cambridge IGCSE runs in May-June and October-November, and Edexcel adds a January window. For a May exam, revision should begin around February, before the summer heat and before harvest interrupts households.",
        "If your child's school runs on a different calendar, the tutor adjusts. An exam date, boarding term or school assessment always comes first.",
      ],
      table: {
        caption: "Mansa calendar and exam pressure points",
        columns: ["Period", "What happens", "Effect on classes"],
        rows: [
          ["April-June", "Wheat harvest, heat, DP and Cambridge May exams", "Early or late slots; final timed papers"],
          ["July-September", "Monsoon, DP results, cotton season begins", "A good time to fill gaps"],
          ["October-November", "Paddy smog, Diwali, Gurpurab, Cambridge November series", "Short breaks, then focused catch-up"],
          ["December-January", "Fog, Lohri, Edexcel January window", "Indoor evening slots; mocks"],
        ],
      },
      bullets: [
        "Harvest and heat crowd April to June",
        "Smog and fog affect the colder months",
        "Festival weekends are best left free",
        "Start May revision in February",
      ],
    },
    {
      heading: "Where can IB or IGCSE take a student from Mansa?",
      paragraphs: [
        "Parents in Mansa usually weigh three destinations for a child who finishes an international syllabus: a degree at an Indian university, a role in the family's farm, trading or transport business, and study in Canada, the UK or Australia. The nearest campuses include Central University of Punjab and AIIMS at Bathinda, Guru Kashi University near Talwandi Sabo, Punjabi University at Patiala and the health sciences university at Faridkot.",
        "To enter most Indian programmes with an IB Diploma or IGCSE-based record, a student first needs a certificate of equivalence from the Association of Indian Universities. CUET-UG is open to such candidates, but NEET and JEE rely on which subjects were taken and at what level, so a missing science in Class 11 can shut a door that is hard to reopen.",
        "Applications overseas lean on predicted grades, which the school issues in autumn of the final year. Canadian and Australian universities publish their own equivalence tables, British offers tend to name Higher Level results, and American colleges weigh grades beside essays and activities. Punjab's strong overseas networks mean most families can ask a cousin what life on campus is really like.",
        "Tutors here do not run admissions counselling. What they can do is explain what grades a given course usually expects, and then put the hours into subject depth, stamina on long papers and habits that raise predicted grades.",
      ],
      bullets: [
        "Equivalence from the AIU comes before most Indian applications",
        "NEET and JEE turn on subjects and levels, so choose early",
        "Canada, the UK and Australia read grades differently",
        "Predicted grades carry the most weight overseas",
      ],
    },
    {
      heading: "What do online Maths and science classes look like for a Mansa student?",
      paragraphs: [
        "In Analysis and Approaches the tutor works outward from the structure of functions, then moves to calculus and to the proof-flavoured puzzles that appear at Higher Level. Applications and Interpretation is built around data sets, distributions and steady calculator habits, which tends to suit students who already think in yields, rates and prices.",
        "A typical Physics class begins with unit checks and order-of-magnitude estimates before any derivation, because slips there cost marks in both papers. In Chemistry, the mole gets extra time since everything else leans on it. Biology classes put model answers on the screen so a student can see how a four-mark explanation is built sentence by sentence.",
        "For each Internal Assessment the tutor asks questions, points to criteria and comments on drafts, and never supplies wording. A Mansa home may have no laboratory, so investigations are planned with kitchen materials, free simulations or open datasets, including regional figures on rainfall or crop output.",
        "Each class follows a loose pattern: a short recap, problems tried aloud, then one past-paper question marked against the real scheme. The whiteboard is saved after class, which matters when a storm or a power cut ends a call early.",
      ],
      bullets: [
        "Approaches leans on proof; Interpretation leans on data",
        "Science marks depend on tidy units and clear method",
        "IA help means questions and comments, not text",
        "Saved boards let a cut-short class be replayed",
      ],
    },
    {
      heading: "Core or Extended: choosing IGCSE tiers and subjects from Mansa",
      paragraphs: [
        "Tiers decide what grade is reachable. Core stops short of the top grades, while Extended opens the whole scale but demands more. Since no counsellor in town can judge this, the first few classes double as a diagnostic, and the tutor reports honestly whether Extended is within reach this year.",
        "A student who expects to move into the IB Diploma later is usually better off with Extended Mathematics, plus Additional Mathematics if the school or online provider offers it. Extended sciences give a smoother landing in Higher Level Physics and Chemistry. A student drawn to commerce might pair Accounting, Economics and Business Studies with Maths.",
        "Cambridge and Edexcel cover similar ideas but phrase questions differently and use different exam windows, so the tutor works from the board named on the entry form. Anyone who might change boards midway should rehearse both styles.",
        "Distance learners are not tied to a school timetable, which is a real advantage: Computer Science, Accounting or Punjabi can be added without waiting for a Mansa school to introduce them.",
      ],
      bullets: [
        "The first classes show whether Extended is realistic",
        "Extended Maths and Additional Maths ease the IB move",
        "Commerce subjects suit business-minded families",
        "Board choice changes how a paper is practised",
      ],
    },
    {
      heading: "How is a tutor picked for a family in Mansa?",
      paragraphs: [
        "The process opens with a few questions: the programme or board, the subject and level, the present grade, the target exam session and the worry that started the search. The answers carry more weight than any biography when building the shortlist.",
        "Fit with the syllabus is tested first, because in a district with no local substitute a wrong pairing is expensive to undo. We look at qualifications, how recently the tutor taught this precise course and how they approach internal assessment.",
        "The trial class settles the matter. Your child works through a real topic, you watch whether the explanations land, and within a couple of days a written plan for the first month arrives.",
        "If the pairing is off, we simply assign someone else. You hear the fee in writing before booking, and there is no long contract to escape.",
      ],
      bullets: [
        "A few questions shape the shortlist",
        "Syllabus fit is tested before anything else",
        "Trial class, then a written monthly plan",
        "A replacement tutor whenever the fit slips",
      ],
    },
  ],

  tutorsIntro:
    "These are tutors for IB PYP, MYP and Diploma subjects and for Cambridge and Edexcel IGCSE, teaching students in Mansa, Punjab. Every pairing considers the exact syllabus, level and exam session, and the teaching is all online since no school in the district offers either curriculum.",

  process: [
    { title: "Describe your child's course", description: "Send the programme or board, subject, level, latest grade and the evenings your Mansa household can spare." },
    { title: "Read the shortlist", description: "Syllabus fit comes first, and each suggestion comes with a reason." },
    { title: "Join the trial class", description: "Your child works a real problem on video; no fee, no promise to continue." },
    { title: "Sign off the plan", description: "A written first-month plan names topics, pace and how results will be shared." },
    { title: "Keep a steady rhythm", description: "Weekly online classes, a short note after each, and a fuller review every few weeks." },
  ],

  whyPoints: [
    { title: "The syllabus decides the match", description: "Board, paper code, tier and level choose the tutor, never a vague 'international' tag." },
    { title: "Expertise from outside the district", description: "No Mansa school teaches these courses, so teachers anywhere in India can be considered." },
    { title: "See before you commit", description: "A trial class shows how the tutor teaches before any money is involved." },
    { title: "Your child's work stays theirs", description: "Coaching on coursework is thorough, yet writing it is never part of the job." },
    { title: "Written evidence of progress", description: "Brief notes after classes and periodic reviews make change visible." },
    { title: "No strings", description: "We are independent of schools and boards, sign no long contracts and swap tutors when asked." },
  ],

  faqs: [
    { question: "Is this page about Mansa in Punjab or Mansa in Gujarat?", answer: "It is about Mansa in Punjab, the district headquarters in the Malwa region near Bathinda. There is also a Mansa in Gujarat's Gandhinagar district, which this page does not cover. Online tutoring itself works from anywhere, so a Gujarat family is welcome to write, but the school and calendar details here refer to Punjab." },
    { question: "Are there IB schools in Mansa, Punjab?", answer: "None that we could confirm. Mansa schools follow the Punjab School Education Board, CBSE and a few ICSE programmes. Families wanting the IB usually continue a course from abroad or another city, use an online school, or plan a move to Mohali, Ludhiana or Chandigarh. We match tutors for each of these, all online." },
    { question: "Is there a Cambridge or Edexcel IGCSE school in Mansa?", answer: "We found no school in Mansa offering either. The nearest verified international schools we know of are in Ludhiana, Mohali, Chandigarh and Jalandhar. IGCSE students in Mansa normally study with an online school or carry on from an earlier one, and the tutor is matched to their exact board, code and tier." },
    { question: "Will a tutor come to our home in Mansa?", answer: "No. Nobody from IB Gram travels to homes in Mansa, because door-to-door tuition exists only in Gurugram and parts of Delhi NCR. What you receive is online home tuition: your child sits at home with a laptop and works live with one teacher on a shared whiteboard and marked past papers." },
    { question: "How much does IB or IGCSE tuition cost in Mansa?", answer: "No rate is fixed in advance. It turns on programme, level, subject, class length and how much the tutor has taught that syllabus, and the figure reaches you in writing before booking. Specialist courses such as IB Physics HL usually cost more. Because classes are online, no transport is added and no long contract is needed." },
    { question: "We moved back from Canada. Can tutoring keep the IB or IGCSE course going?", answer: "Yes, and Malwa families ask this often. Since no local school runs either syllabus, continuity rests on a tutor who knows the course. We start from the point the old class had reached and the date of the next assessment, then shape a weekly plan around those two facts." },
    { question: "Is the trial class really free?", answer: "It is. The first class costs nothing and commits you to nothing. Your child works on a live topic from their own syllabus, and the tutor sends a short plan for the month ahead. After that you can carry on, tweak the plan or ask for a different teacher without paying for the trial." },
    { question: "Will the tutor write my child's IA or Extended Essay?", answer: "No. Tutors question, explain and correct, yet every assessed word belongs to the student. Expect help picking a workable research question, reading the criteria, planning how data will be gathered and getting candid comments on drafts. That line also protects your child under IB academic-integrity rules." },
    { question: "Which Diploma subjects can a Mansa student study with you?", answer: "Nearly all of the usual ones. Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A and Computer Science lead the requests, and tutors also guide TOK and Extended Essay planning. Support in Hindi or Punjabi depends on what a given exam session offers." },
    { question: "Do you teach MYP and PYP children as well?", answer: "Yes. Middle years students get help with writing to criteria, reasoning in science and planning the Personal Project, while primary years children join short, regular classes on reading, number sense and the research habits they need before their Exhibition." },
    { question: "Is online tuition as good as a teacher in the room?", answer: "For IB and IGCSE it holds up well. The whiteboard is shared, papers sit on screen and worked answers are saved, which is close to sitting side by side, and the pool of specialists becomes national. Its one real weakness is connectivity, so a fallback slot is agreed before classes begin." },
    { question: "What if fog or a power cut interrupts a class?", answer: "The class shifts to another slot that week, and the tutor sends whatever working had been covered. During the thickest fog or a long outage we suggest a looser timetable with extra written practice, so the student does not lose momentum." },
    { question: "When is the right time to begin?", answer: "The start of a course is ideal: Class 9 for IGCSE and Class 11 for the Diploma, when gaps are easiest to close. Families who begin later, perhaps after coming home from abroad, still gain from a plan that starts with the highest-value topics and past papers." },
    { question: "My daughter is moving from Punjab Board to IB. Is that very hard?", answer: "It is manageable. The difficulty usually lies in question style more than content: words like justify, evaluate and compare must be taught directly, and coursework needs a different working rhythm. Most students find the format feels ordinary after several weeks of guided practice." },
    { question: "Can classes work around Lohri, Baisakhi and harvest?", answer: "Yes. Most Mansa families choose weekday evening slots and keep weekends loose for festivals, weddings and work in the fields. An extra weekly class before mocks or a May series can be added online without disturbing anything else." },
    { question: "What if we are unhappy with the tutor?", answer: "Tell us and we will find another. Progress is reviewed every few weeks anyway, and a pairing that is not working is replaced instead of endured. Nothing binds you, so classes can also be paused or stopped without penalty." },
    { question: "Is IB Gram linked to any school, or to the IB, Cambridge or Pearson?", answer: "No. IB Gram is an independent tutoring service with no tie to any school, to the International Baccalaureate, to Cambridge Assessment International Education or to Pearson Edexcel. Schools named on this page only show where families in the region send children, and tutors follow each student's timetable and published syllabus." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "City and town pages for the rest of the country." },
    { label: "Home tuition in Gurugram", href: "/gurgaon/", description: "Where a tutor can genuinely visit the house." },
    { label: "The IB Diploma explained", href: "/programmes/dp/", description: "Subject groups, the core and how coursework is weighted." },
    { label: "The IB Middle Years Programme", href: "/programmes/myp/", description: "What criterion grading means for a Class 6 to 10 student." },
    { label: "The IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition explained simply." },
    { label: "IGCSE explained", href: "/igcse/", description: "Cambridge against Edexcel, tiers and exam series." },
    { label: "IB Maths, AA or AI", href: "/courses/ib/mathematics/", description: "A side-by-side look at the two Maths routes." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse teachers by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your child's details and get a reply with options." },
    { label: "Tutoring for Bathinda families", href: "/bathinda/", description: "The Malwa hub about an hour east of Mansa." },
    { label: "Tutoring for Barnala families", href: "/barnala/", description: "A neighbouring Malwa town on the road toward Ludhiana." },
    { label: "Tutoring for Sirsa families", href: "/sirsa/", description: "The Haryana town just west of Mansa district." },
  ],

  closingHeading: "Book a free trial class for your Mansa student",
  closingBody:
    "Send the board or programme, the subject and level, and the evenings when the house is quiet. A teacher who has handled that course will reply with trial times and no charge. Email support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
