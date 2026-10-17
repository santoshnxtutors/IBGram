import type { CitySeoPage } from "../types";

/**
 * /araria/ - IB and IGCSE tutoring page for Araria, Seemanchal, Bihar. Online-only delivery: tutors do not
 * visit homes in Araria, since in-person home tuition is offered only in Gurugram and parts of Delhi NCR.
 * No IB or Cambridge school in the district was confirmed, so stripSchools is empty and clusters point
 * honestly to Kolkata and Delhi NCR using names already verified on neighbouring pages (Purnia, Kishanganj).
 */
export const araria: CitySeoPage = {
  slug: "araria",
  countryName: "Araria",
  countryNameLong: "Araria, Bihar",
  demonym: "Araria",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are planned around the July to September flood season, winter fog, Chhath, Durga Puja and Eid breaks, and the power and data interruptions that follow heavy weather",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.1324, longitude: 87.4647 },
  wikipedia: "https://en.wikipedia.org/wiki/Araria",
  alternateNames: ["Araria Bihar", "Araria district", "Araria Court", "Forbesganj Araria"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Araria | Online Tuition at Home",
  metaDescription:
    "IB and IGCSE tutors in Araria, Bihar: live online lessons for DP, MYP, PYP, Cambridge and Edexcel, built for Seemanchal flood and fog seasons. Free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Araria",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR ARARIA AND SEEMANCHAL",
  heroSubtitle:
    "Families in Araria who want private tuition at home for an IB or IGCSE course quickly learn that no local centre teaches either. IB and IGCSE tutors in Araria from IB Gram close that gap online: a subject specialist, one student, a live video lesson, all from a desk at home. It is built for a border district where travel to a bigger city is long, and where a sound lesson at home is worth more than a journey.",
  primaryKeyword: "IB and IGCSE tutors in Araria",
  imageAltText: "Araria student at a home desk with a laptop and a notebook during a live online IB Maths lesson",
  secondaryKeywords: [
    "IB tutor Araria",
    "IGCSE tutor Araria",
    "IB home tuition Araria",
    "IGCSE home tuition Araria",
    "IB private tuition Araria",
    "IB Maths tutor Araria",
    "IGCSE Maths tutor Araria",
    "IB Physics tutor Araria",
    "IB Chemistry tutor Araria",
    "IB Biology tutor Araria",
    "IB DP tutor Araria",
    "IB MYP tutor Araria",
    "IB PYP tutor Araria",
    "IGCSE online tuition Araria",
    "IB tutor Forbesganj",
    "IGCSE tutor Jogbani",
    "IB tutor Seemanchal",
    "IB tutor Araria Court",
    "online IB tutor north Bihar",
    "Araria IB IGCSE tuition",
  ],

  heroTrustPoints: [
    "Each tutor is picked for the course your child studies, not for a postcode",
    "Araria lessons are online; house visits are limited to Gurugram and parts of Delhi NCR",
    "A free first lesson and a written summary before any payment",
    "Independent of the IB, Cambridge, Pearson and all schools named on this page",
  ],
  heroStats: [
    { value: "Seemanchal", label: "Border district focus" },
    { value: "PYP to DP", label: "IB coverage" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards" },
    { value: "Free trial", label: "Nothing to pay first" },
  ],

  intro: {
    heading: "Araria: a border district where good teaching has to travel to the student",
    paragraphs: [
      "Araria lies in the north-east of Bihar, in the Seemanchal belt, with Nepal a short distance north. Rivers that come down from the Himalayan foothills give the land its richness and its flood risk. Hindi, Maithili, Urdu and Surjapuri are all heard in a single market, and the writer Phanishwar Nath Renu, whose novels capture rural Bihar, came from this district. It is a place with a strong sense of itself and a serious respect for education.",
      "It is not a place where an IB or Cambridge classroom is easy to find. Our checks could not confirm an IB, Cambridge or Edexcel school in Araria, and the nearest cities with wider choice, Purnia and Kishanganj and then Kolkata, Patna and Delhi, are a real journey away. The student who wants an international curriculum here therefore needs teaching that reaches the house rather than the other way round.",
      "To be precise about 'home tuition': no tutor will visit an Araria home. Physical visits exist only in Gurugram and parts of Delhi NCR. In Araria the student stays at home while a tutor teaches live over video, on a shared whiteboard, in the exact course the student is following.",
      "What a tutor does is teach, set practice and mark it. What a tutor does not do is write an IA, an Extended Essay, a TOK essay or coursework that the student will submit. IB Gram is independent and has no affiliation with the IB, Cambridge, Pearson or any school named here.",
    ],
    bullets: [
      "Teaching for IB PYP, MYP, Diploma and Career-related Programme subjects",
      "IGCSE lessons on Cambridge and Pearson Edexcel syllabuses",
      "Live private video lessons timed around the Araria school day",
      "A free trial and a written note before any fee",
      "No tutor visits to Araria homes; in-person tuition is only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "In Araria an international programme is usually a deliberate decision by a family with a plan: study outside Bihar, a move to a metro, or a child already in a boarding school elsewhere. The programme notes that follow reflect those motives.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Children learn through units of inquiry that cross subject lines and end, in the last year, with a self-chosen Exhibition. There is no formal written exam. The emphasis is on asking questions, researching and communicating what was found.",
      countryNote:
        "A young Araria learner preparing for a move often needs English reading and writing confidence first, because a PYP class in another city will assume it.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Students meet eight subject groups, are marked against criteria, and finish with a Personal Project. Teachers give a level for each criterion rather than one mark for the paper.",
      countryNote:
        "A child coming from a Bihar board or CBSE school has to learn what criteria ask, and we usually start there, with short tasks marked against a real descriptor.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six courses, three at Higher Level, combine with Theory of Knowledge, the Extended Essay and CAS. Written papers come mostly in May, with results in early July.",
      countryNote:
        "Diploma lessons for Araria are typically for a student in a boarding or city school elsewhere who is home in the holidays, or studying through a flexible route, with Maths and the sciences leading.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A small set of Diploma courses is paired with a career-related study and a reflective project. It is uncommon in India and designed for vocational goals.",
      countryNote:
        "Very few Araria enquiries concern the CP. If one does, we support the academic courses and help the student time the reflective project.",
    },
  ],

  subjectsIntro:
    "A good match begins with the exact course: Analysis and Approaches or Applications and Interpretation in maths, HL or SL, and the exam session in view. Araria students from Bihar board backgrounds often bring strong mathematical practice, and what they need is fluency with IB command terms.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof are central, and Bihar board students with heavy practice in problem-solving adapt quickly once they see how marks are given." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator use suit future economists and social scientists, with an exploration built on real data." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves and electricity are taught with care over units, uncertainties and concise written reasoning." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, equilibrium and organic mechanisms are drilled step by step, since method marks are where most students slip." },
    { name: "IB Biology", levels: "HL / SL", description: "Answers are shaped to the command term, with data questions practised under time." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and current examples carry the papers, and a student from a border district has plenty of trade and price examples to draw on." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based answers must apply a concept to the named firm; the research project needs a reachable organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen commentary, comparative essays and the oral, with added work on academic English for students from Hindi-medium schools." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, databases and networks plus programming practice for the solution project." },
    { name: "IB Geography", levels: "HL / SL", description: "Rivers, floods and migration are real local subjects in Seemanchal, and give strong case material." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Flood plains, silt and farming give an Araria student living examples of systems and resource use." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies from each approach turned into argued essays." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and extended essay writing under timed conditions." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Strengthens formal written and spoken Hindi for students from Hindi, Maithili, Urdu or Surjapuri-speaking homes." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion of knowledge claims and the exhibition, with no essay written on the student's behalf." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Help with framing the question and pacing the work; the writing itself remains the student's." },
  ],

  igcseSubjectsIntro:
    "For many Araria families the IGCSE is the practical first step, since it begins at Class 9 and keeps both A Level and the IB open. Confirm the board before choosing papers, because Cambridge and Edexcel differ in codes, layouts and entry months.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended candidates practise non-calculator work and careful layout to win every method mark." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and trigonometry early on, helpful for the step up to IB Maths AA or A Level." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel's tiers and question wording differ from Cambridge, so practice uses its own papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, electricity and waves, then the written practical paper that students tend to leave late." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, reactivity series and organic chemistry built through regular timed work." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Transport, inheritance and ecology with mark-scheme phrasing." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Accurate diagrams and brief evaluative writing." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, trace tables and Python practice." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed directed writing and summary tasks marked against published criteria." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "A natural scoring subject for students from Hindi-speaking homes, covering comprehension, writing and speaking." },
  ],

  regionsTitle: "Araria town and district areas our online tutors serve",
  regionsIntro:
    "Since every lesson is online, these entries describe context, not journeys: how each part of the district sits in relation to the roads, rivers and cities families depend on, and where connectivity deserves a backup plan.",
  tutorsIntro:
    "These tutors teach from other parts of India on IST, matched to the syllabus an Araria student follows. Every profile describes live private lessons, and none involves a visit to Araria.",
  regions: [
    { name: "Araria town and Araria Court", note: "The district headquarters, with administrative and professional families; the railway halt and court area are the main landmarks." },
    { name: "Forbesganj", note: "The district's second large town, close to the Nepal border trade routes and home to many business families." },
    { name: "Jogbani", note: "The border town facing Biratnagar in Nepal, where cross-border trade and family ties shape the year." },
    { name: "Raniganj", note: "A block town on the road network towards Supaul and Madhepura; students there rely even more on a steady phone connection." },
    { name: "Narpatganj", note: "A block town on the route from Forbesganj towards Supaul, with farming households dependent on the river season." },
    { name: "Palasi", note: "A block town on the route towards Purnia, which makes it a practical point for families who travel to Purnia for schooling." },
    { name: "Sikti and Kursakanta", note: "Rural blocks where flood risk and power cuts are most likely in the rains; early-morning or evening lessons are safest." },
    { name: "Bhargama and Jokihat", note: "Blocks to the south and south-west, where broadband is patchy and a mobile hotspot is a sensible fallback." },
    { name: "Purnia road corridor", note: "The main link to Purnia, the closest big city for schools, hospitals and airport or railway connections." },
    { name: "Kishanganj direction", note: "Families with links to Kishanganj and its Aligarh Muslim University centre often look east for higher education options." },
  ],

  schoolDisclaimer:
    "We could not confirm any school in Araria that teaches the IB or Cambridge or Edexcel IGCSE, so none is listed as local. The Kolkata and Delhi NCR names are shown for orientation only, since Bihar families sometimes consider them for boarding or relocation. IB Gram has no arrangement with any of them and does not speak for them.",
  schoolClusters: [
    {
      city: "Araria district",
      note: "Schools in the district follow the Bihar board or CBSE. No IB, Cambridge or Edexcel school turned up in our checks, so online teaching carries the international syllabus.",
      schools: [],
    },
    {
      city: "Nearby: Purnia and Kishanganj",
      note: "The closest larger towns, with more school choice, though we could not confirm IB or Cambridge provision in either for this page.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The eastern metro most Seemanchal families connect with by rail, and a realistic base for anyone who decides to move for an IB or Cambridge school.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "The Cambridge School, Kolkata"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "A long rail journey away, but where many Bihar families have relatives and where school choice is much wider. Listed for orientation only.",
      schools: ["Vasant Valley School, Delhi", "The British School, New Delhi"],
    },
  ],

  modesIntro:
    "Every Araria family receives the same core service: a live private lesson over video with a tutor based elsewhere in India. The three patterns below show how households in a river district tend to use it.",
  modes: [
    {
      title: "A regular weekly slot",
      description:
        "One or two hours on a fixed evening, chosen when power and data are usually steady, with the same tutor each week.",
      bullets: [
        "Same tutor throughout",
        "Short written note after each lesson",
        "A free first session",
      ],
    },
    {
      title: "Holiday catch-up for boarders",
      description:
        "For a student at school in another city who is home for Durga Puja, Chhath or the winter break, a compact run of lessons on the weakest topics.",
      bullets: [
        "Focus chosen from the student's latest results",
        "Timed practice with feedback",
        "Online only, with no tutor visiting Araria",
      ],
    },
    {
      title: "Flood-season flexible plan",
      description:
        "A plan that expects interruptions in July to September, with shorter sessions, recorded summaries and easy rescheduling when power or roads fail.",
      bullets: [
        "Shorter and more frequent lessons",
        "Notes that work without a live connection",
        "Schedule agreed in writing",
      ],
    },
  ],

  sections: [
    {
      heading: "Why would an Araria family look at IB or IGCSE at all?",
      paragraphs: [
        "It is a fair question in a district where most students sit the Bihar board or CBSE. The answer is usually a plan that extends beyond Araria. Seemanchal families send children to Kolkata, Delhi, Bengaluru, Pune and abroad, and many have relatives working in those places. A parent who sees that path early may ask whether IGCSE or the IB prepares a child better for it.",
        "A second reason is exam style. IB and IGCSE reward explanation and application, and some parents like that a student must show reasoning and not only a final answer. Others are drawn by the subject range, such as Economics, Psychology or Computer Science, which a local school may not offer.",
        "A third reason is practical and worth stating plainly: the family may already have a child enrolled in an IB or Cambridge boarding school elsewhere. During a holiday at home in Araria, that child still needs help with Higher Level Physics or IGCSE Additional Mathematics, and the nearest specialist is not nearby.",
        "We could not confirm any IB or Cambridge or Edexcel school in Araria. So this page does not promise a centre. It describes a service that works because it is online, and it says openly what that does and does not include.",
      ],
      table: {
        caption: "Why Araria families ask about IB and IGCSE",
        columns: ["Reason", "Typical student", "What helps first"],
        rows: [
          ["Study outside Bihar or abroad", "Class 8 to Class 11 in a local school", "IGCSE Maths, English and sciences; early IB Diploma planning"],
          ["Child already at a boarding school elsewhere", "Home for the holidays", "Targeted catch-up blocks on the hardest topics"],
          ["Preferred exam style", "Any age", "Diagnostic lesson and a plan to bridge the gap"],
          ["Subjects not offered locally", "Class 9 to Class 12", "Economics, Psychology or Computer Science tutoring"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost for a student in Araria?",
      paragraphs: [
        "IB and IGCSE tuition in Araria does not come with one price, and we do not publish a list. The work differs too much from course to course for one figure to be honest. Every rate is sent in writing before a booking, and the first trial lesson costs nothing.",
        "Four variables set the rate. The tutor's experience is the largest, especially for Higher Level courses where knowing the marking bands matters. The subject and level come next, followed by how many sessions each week the student takes, and finally how close the exam is, since intensive revision uses more of a tutor's time.",
        "Families here are careful about spending, rightly, and the useful comparison is with what a student in Araria can actually get. A local tutor for Bihar board or CBSE is often affordable and excellent for those boards. A tutor who travels from Purnia adds fuel, road time and flood-season risk. An online specialist removes all three, because the only thing that moves is the signal.",
        "Ask for a written rate for a named course and a fixed number of weeks, and compare it with the full cost of any alternative. The free first lesson is there precisely so that the decision is made with evidence.",
      ],
      bullets: [
        "Tutor experience and the level taught",
        "Sessions each week",
        "How close the exam date is",
        "Extra help on TOK, EE planning or project schedules",
      ],
    },
    {
      heading: "Bihar board, CBSE, IGCSE or IB: how do they differ for an Araria student?",
      paragraphs: [
        "The Bihar School Examination Board and CBSE both examine a fixed syllabus with questions that are largely predictable in form. A well-prepared student can score strongly by mastering the textbook and past papers. That discipline is a real asset and carries over to IB and IGCSE, which ask for more explanation and more independence.",
        "What changes is the kind of thinking rewarded. In IB Physics or Economics, a correct number without reasoning earns a fraction of the marks. In IGCSE Biology, candidates are expected to interpret unfamiliar data, not merely recall a diagram. Internal assessments in the IB, and coursework in a few IGCSE subjects, require a student to plan and finish something over weeks.",
        "Language is another hurdle. Many Araria students think in Hindi, Maithili, Urdu or Surjapuri and write exams in English, so building clear subject writing is a first task. It is a skill that improves quickly with short, regular practice and corrected examples.",
        "If a switch is planned, Class 6 suits the MYP, Class 9 the IGCSE and Class 11 the Diploma. A bridge programme of two terms ahead of the change makes the transition calmer and less costly in marks.",
      ],
      table: {
        caption: "Boards an Araria family may compare",
        columns: ["Feature", "Bihar board / CBSE", "ICSE / ISC", "IB / IGCSE"],
        rows: [
          ["Main skill tested", "Recall of set content", "Breadth and detail", "Application and reasoning"],
          ["Independent work", "Limited", "Some subjects", "IAs, EE, orals and coursework"],
          ["Exam language", "Hindi or English", "English", "English, with a language course in the IB"],
          ["Natural switch point", "Not applicable", "Not applicable", "Class 6, Class 9 or Class 11"],
        ],
      },
    },
    {
      heading: "Is online tuition a realistic option in Araria?",
      paragraphs: [
        "Yes, with sensible planning. Mobile data coverage in Bihar has improved sharply, and many Araria households run a fibre or mobile broadband line. A live lesson needs a modest, steady connection, not a fast one. The real risks are power and weather, and we plan for them openly.",
        "The benefits are plain. A tutor in another state can be a specialist in IB Chemistry or IGCSE Extended Mathematics, available at fixed hours without a journey. The lesson uses a shared whiteboard, worked solutions and marked papers, and recordings can be replayed before a test.",
        "The limits are equally plain. Heavy rain can cut power for hours, and river flooding can block roads and damage lines in some blocks. We ask every family for a backup plan, such as a phone hotspot or a power bank, and we keep lessons flexible during the flood months.",
        "Support options in Araria are limited. Local classes concentrate on board exams and entrance tests, and self-study lacks feedback on extended writing. Online teaching does not replace all of that, but it fills the one gap nobody else in the district does.",
      ],
      table: {
        caption: "Support options for IB and IGCSE students in Araria",
        columns: ["Option", "Syllabus fit", "Attention", "Main drawback"],
        rows: [
          ["Local coaching class", "Board and entrance-test focus", "Group", "No IB or IGCSE batch we could confirm"],
          ["Tutor from Purnia", "Depends on the tutor", "One-to-one", "Travel, cost and monsoon road risk"],
          ["Online IB Gram tutor", "Matched by course, level and code", "One-to-one, live", "Depends on power and connection"],
          ["Self-study", "Whatever the student picks", "None", "No marked feedback on longer answers"],
        ],
      },
    },
    {
      heading: "How do floods, fog and festivals shape the study year in Araria?",
      paragraphs: [
        "The Seemanchal calendar is shaped first by water. From July to September, rivers in the Kosi system and smaller streams swell, roads flood and power lines fail. Some blocks are cut off for days. Lessons in that period should be short, flexible and tolerant of a missed slot, and students should finish big content topics before the rains start.",
        "Winter brings a different interruption. Dense fog in December and January slows travel and sometimes depresses mobile data, and early mornings can be very cold. A lesson at home in the evening suits this season far better than a journey to a class.",
        "The festival calendar is among the richest in India. Chhath in October or November, Durga Puja and Dussehra, Diwali, Holi, Eid and Muharram each bring closures and travel. A family may leave the district for a week at Chhath, and we plan for a lighter week, or a lesson from wherever the student is.",
        "For a May IB session, content teaching should be complete before the winter break, past papers should begin in January, and the final weeks should address timing and weak topics. Cambridge and Edexcel follow the same pattern on their own dates.",
      ],
      table: {
        caption: "Exam windows and Araria seasonal effects",
        columns: ["Period", "Exam or school event", "Local effect"],
        rows: [
          ["December to February", "Edexcel January series, school mocks", "Dense fog, cold weather, slower data"],
          ["March to June", "Cambridge and IB May sessions", "Heat builds, evening power cuts possible"],
          ["July to September", "New term, IB results in early July", "Flood season, road and power disruption"],
          ["October to November", "Cambridge and Edexcel November series, IB November session", "Chhath, Durga Puja and Diwali breaks"],
        ],
      },
    },
    {
      heading: "Which universities can an Araria student reach after IB or IGCSE?",
      paragraphs: [
        "A Diploma graduate from Araria can apply to Indian universities with the Association of Indian Universities equivalence certificate where it is requested, and many private universities take IB results directly. For central and many state universities CUET-UG is the usual route, so Class 11 subjects should match the course being targeted.",
        "Nearer home, the Shri Phanishwar Nath Renu Engineering College in Araria is a local engineering institution, and Aligarh Muslim University's Kishanganj centre is not far away. We mention them only as regional landmarks. Each institution sets its own admission rules for IB and IGCSE applicants, and these should be checked with the institution directly.",
        "For medicine, NEET-UG requires Physics, Chemistry, Biology or Biotechnology and English, so Diploma subject choice at 16 needs care. For engineering, JEE Main and Advanced have separate subject and eligibility rules, and the current year's notice is the only dependable guide.",
        "Many Seemanchal families look beyond India. The UK, Canada, Australia, the UAE and the United States understand IB and IGCSE plus A Level, although each university publishes its own requirements. We suggest reading the target course page before settling subjects.",
      ],
      bullets: [
        "AIU equivalence for IB Diploma holders where it is requested",
        "CUET-UG for central and many state universities",
        "NEET and JEE depend on Class 11 subject choices",
        "Overseas requirements differ by university and course",
      ],
    },
    {
      heading: "How demanding are IB Maths and the sciences for a Bihar board student?",
      paragraphs: [
        "Bihar board students have often done an impressive amount of mathematical practice, and that becomes an advantage. Analysis and Approaches builds on it with proof, functions and calculus, at a pace that suits students aiming for engineering or pure sciences. Applications and Interpretation suits students who lean towards economics, social science or business, with more statistics and modelling.",
        "What is usually new is the exploration, a piece of independent work worth a fifth of the maths grade. Choosing a topic, framing a question and writing it up in full sentences is unlike anything in a board syllabus. A tutor advises on scale and depth but neither writes nor edits it.",
        "In the sciences the usual gaps are units, command terms and investigation design. A student trained on textbook problems may know every formula yet struggle to plan an experiment or evaluate a method, so tutors spend time on the written side of practical work.",
        "The simplest test for Higher Level is whether the student copes with Standard Level without help. If not, a year at HL can be a long struggle, and a single diagnostic lesson is an inexpensive way to find out.",
      ],
    },
    {
      heading: "Core or Extended: how should an Araria family plan IGCSE subjects?",
      paragraphs: [
        "IGCSE Mathematics and the sciences offer a lower and an upper tier in both Cambridge and Edexcel. The lower tier caps the top grade, and the upper tier gives the full range. A student who might take A Level or IB Higher Level later should normally prepare for the upper tier from the start.",
        "A standard programme includes five to eight subjects. A sensible mix has English, Mathematics, at least one science, a humanity or a business subject, and a language. Hindi as a second language is a dependable addition for a student who speaks it at home.",
        "Practical skills deserve an early look. Some Cambridge sciences use an alternative-to-practical paper that tests experimental reasoning on paper, which students without regular lab access should rehearse often.",
        "With no IGCSE school confirmed in Araria, students sit exams as private candidates through a registered centre in another city, and that route has its own deadlines, fees and practical arrangements. Families should begin enquiries many months before an entry date.",
      ],
    },
  ],

  process: [
    { title: "Tell us what you need", description: "Send the programme or board, subject and level, present grade, and the hours when power and data are usually steady in your area." },
    { title: "See the proposed tutor", description: "We name a tutor who has taught that syllabus, with a short summary of their experience." },
    { title: "Use the free lesson", description: "Your child works live with the tutor on video, and both sides judge the fit without any payment." },
    { title: "Get a written summary", description: "The tutor records strengths and gaps, and the rate is sent in writing." },
    { title: "Decide how to continue", description: "You pick a weekly slot or a block, and can request a new tutor at any time." },
  ],

  whyPoints: [
    { title: "A specialist for the exact course", description: "Matched by syllabus and level, since nobody teaching these courses sits in the district." },
    { title: "Clear about the format", description: "Araria lessons are online; in-person visits exist only in Gurugram and parts of Delhi NCR." },
    { title: "Built for interruptions", description: "Flexible timing and recorded notes when floods or fog disrupt a week." },
    { title: "A note after every session", description: "A brief written summary keeps parents informed." },
    { title: "Coaching within firm limits", description: "Tutors never write IAs, essays or graded coursework." },
    { title: "Low-risk start", description: "A free trial, a swap of tutor if needed, and rates in writing." },
  ],

  faqs: [
    {
      question: "Is there an IB or IGCSE tutor I can use in Araria?",
      answer:
        "Yes, online. We found no local IB or IGCSE specialist we could vouch for, so IB Gram tutors teach Araria students live over video from elsewhere in India on IST. Each is chosen for the student's exact course and level. The first lesson is a free trial, so you can judge the match before you commit to anything.",
    },
    {
      question: "Will a tutor come to our home in Araria?",
      answer:
        "No. Tutors do not visit homes in Araria. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. In Araria your child studies at home with a laptop, joins a live video lesson and works on a shared whiteboard. For a district this far from a major city, it gives access to teaching that would otherwise need a long journey.",
    },
    {
      question: "Is there an IB school in Araria?",
      answer:
        "We could not confirm one. Schools in Araria follow the Bihar board or CBSE. The nearest options with wider choice are in Purnia and Kishanganj, though we could not verify IB there either, and then Kolkata and Delhi. Ask any school directly about its curriculum, since offerings change and our list is not complete.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Araria?",
      answer:
        "The rate depends on the tutor's experience, the subject and level, and the hours each week. We do not publish a price list. You get a written rate before booking, and the first lesson is free. Online lessons avoid the fuel and time of a tutor from Purnia, which is worth counting when you compare options.",
    },
    {
      question: "Can my child move from the Bihar board or CBSE to IGCSE or IB?",
      answer:
        "Yes. Class 6, Class 9 and Class 11 are the easiest points. Students usually need a bridge in command terms, application questions, practical write-ups and English subject writing. A diagnostic lesson shows the gaps and the time they will take to close, and starting two terms before a switch is wise.",
    },
    {
      question: "Which IGCSE boards do you teach?",
      answer:
        "Both Cambridge International and Pearson Edexcel. They differ in syllabus codes, paper layouts and exam months, so we confirm the board before we match a tutor. Cambridge series run in February and March, May and June, and October and November, and Edexcel adds a January series to those.",
    },
    {
      question: "Will the tutor write my IA, Extended Essay or TOK essay?",
      answer:
        "No. Our tutors coach and give feedback on the student's own work, and never write an Internal Assessment, Extended Essay, TOK essay or coursework that will be graded. They can help pick a workable topic, plan the timeline and explain the criteria. The work and its authorship belong to the student.",
    },
    {
      question: "What if floods or fog cut off power or data during a lesson?",
      answer:
        "We reschedule the missed session at no cost and plan for interruptions. A phone hotspot and a power bank solve most short outages. For the flood months we suggest shorter, more frequent lessons and written or recorded notes that the student can use without a live connection. Tell us about local problems and we adapt the plan.",
    },
    {
      question: "How do I begin with a free trial?",
      answer:
        "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the board or programme, subject, level, current grade and preferred timings. We choose a tutor and arrange the trial. Afterwards you receive a short written note and the rate in writing, and pay nothing unless you decide to continue.",
    },
    {
      question: "My child is at a boarding school in another city. Can lessons run in the holidays?",
      answer:
        "Yes. Many students use Durga Puja, Chhath or winter holidays for focused catch-up. Because lessons are online, they can take place wherever the student is, at home in Araria or elsewhere. Send the latest test results, and we plan the block around the topics that cost the most marks.",
    },
    {
      question: "Can an Araria student sit IGCSE or IB exams as a private candidate?",
      answer:
        "Sometimes. The IB Diploma is usually sat through an authorised school, so the route is narrow. IGCSE with Cambridge or Edexcel can often be taken privately through a registered centre, which may be in Purnia, Kolkata or farther away. Fees, dates and practical-assessment rules vary, so contact the centre early.",
    },
    {
      question: "Which subjects do Araria families ask about most?",
      answer:
        "Mathematics first, then Physics, Chemistry and Biology, followed by Economics and English. Computer Science also draws interest. We match by level as well as subject, since a Higher Level tutor and a Standard Level tutor prepare a student differently even for the same paper.",
    },
    {
      question: "Is medical or engineering entrance still possible after IB or IGCSE?",
      answer:
        "It can be, but subject choice matters. NEET-UG needs Physics, Chemistry, Biology or Biotechnology and English, and JEE has its own conditions. Rules change, so read the current year's notice before choosing Class 11 subjects. Our tutors can show how IB or A Level content lines up with what those exams test.",
    },
    {
      question: "How many lessons a week should we plan?",
      answer:
        "One or two each week suits most students in term, rising to three before an exam series. A short concentrated block can work during a holiday. We agree a schedule after the trial, and change it as the exam date nears or as the season affects power and data.",
    },
    {
      question: "Do you teach younger children in PYP or early MYP?",
      answer:
        "Yes. For primary pupils we keep lessons short and interactive, focusing on reading, number sense and inquiry. For early MYP we work on criteria, writing structure and study habits. An adult should be nearby for younger children to manage the screen and any technical problems during the session.",
    },
    {
      question: "Is IB Gram affiliated with any school or exam board?",
      answer:
        "No. IB Gram is an independent tutoring service. It has no affiliation with the IB, Cambridge, Pearson or any school on this page, and school names appear only to describe regional options. Please confirm a school's curriculum, fees and admission rules with the school before making a decision.",
    },
  ],

  internalLinks: [
    { label: "IB tutors overview", href: "/ib-tutors/", description: "How matching works across IB programmes and subjects." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel tiers, codes and subject choices." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, core components and exam timing." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, interdisciplinary units and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition explained." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "How career study combines with Diploma courses." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA or AI, and HL or SL, compared." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles by subject and programme." },
    { label: "Test preparation", href: "/admissions/test-prep/", description: "Admission-test support after IB or IGCSE." },
    { label: "IB and IGCSE across India", href: "/india/", description: "How online matching works for cities nationwide." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only area with in-person home visits, in Delhi NCR." },
    { label: "Contact us", href: "/contact-us/", description: "Send a brief and arrange a free trial." },
    { label: "IB and IGCSE tutoring in Purnia", href: "/purnia/", description: "The nearest large city to Araria, about an hour by road." },
    { label: "IB and IGCSE tutoring in Kishanganj", href: "/kishanganj/", description: "A Seemanchal neighbour with similar schooling needs." },
    { label: "IB and IGCSE tutoring in Katihar", href: "/katihar/", description: "Another eastern Bihar district city." },
    { label: "IB and IGCSE tutoring in Patna", href: "/patna/", description: "Bihar's capital, the largest school hub in the state." },
  ],

  closingHeading: "Book a free IB or IGCSE trial lesson in Araria",
  closingBody:
    "Send us the programme or board, the subject and level, the present grade and the hours when power and data are steady in your house. A matched tutor replies and the first lesson is free. Write on WhatsApp to +91 7439 368 115 or to support@ibgram.com, and learn from home in Araria on IST.",
};
