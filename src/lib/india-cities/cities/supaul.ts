import type { CitySeoPage } from "../types";

/**
 * /supaul/ - IB and IGCSE tutoring page for Supaul, Bihar (Kosi region). No school in the town is
 * confirmed to teach IB or Cambridge/Edexcel IGCSE, so delivery is online throughout; nearby-city
 * clusters reuse names already published on the Patna and Saharsa pages.
 */
export const supaul: CitySeoPage = {
  slug: "supaul",
  countryName: "Supaul",
  countryNameLong: "Supaul, Bihar",
  demonym: "Supaul",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Timings bend around the Kosi flood months, Chhath, Durga Puja and Holi, and the long power and connectivity gaps that can follow heavy rain",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.1236, longitude: 86.6049 },
  wikipedia: "https://en.wikipedia.org/wiki/Supaul",
  stripSchools: [],

  title: "Supaul IB & IGCSE Tutors | One-to-One Online Tuition",
  metaDescription:
    "Supaul IB and IGCSE tutors for the Kosi region: live one-to-one online lessons at home, planned around flood season and Chhath, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition Online for Supaul Students",
  heroEyebrow: "KOSI REGION IB & IGCSE ONLINE TUITION FOR SUPAUL",
  heroSubtitle:
    "For IB or IGCSE home tuition in Supaul, the arrangement is simple: a qualified specialist teaches your child alone, live, on a video call, while the student sits at a desk at home. Nobody travels to Supaul for this. The town on the Kosi plain, close to the Nepal border, teaches Bihar board and CBSE classes, so a child chasing a Cambridge, Edexcel or IB syllabus depends on the tutor's knowledge of it.",
  primaryKeyword: "IB and IGCSE tutors in Supaul",
  imageAltText: "A student in Supaul following an IGCSE Mathematics lesson online with a tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Supaul",
    "IGCSE tutor Supaul",
    "IB home tuition Supaul",
    "IGCSE home tuition Supaul",
    "IB private tuition Supaul",
    "IB Maths tutor Supaul",
    "IGCSE Maths tutor Supaul",
    "IB Physics tutor Supaul",
    "IB Chemistry tutor Supaul",
    "IB Biology tutor Supaul",
    "IB DP tutor Supaul",
    "IB MYP tutor Supaul",
    "IB PYP tutor Supaul",
    "IGCSE online tuition Supaul",
    "online IB tutor Kosi division",
    "IB tutor Supaul Bihar",
    "IGCSE tutor Birpur and Triveniganj",
    "Cambridge IGCSE classes for Maithili-speaking students",
    "Edexcel IGCSE online tutor Supaul",
  ],

  heroTrustPoints: [
    "Tutor choice follows the exact syllabus code, tier and sitting your child has to reach",
    "No tutor comes to a Supaul house; home visits exist only in Gurugram and parts of Delhi NCR, so every lesson is online",
    "Your child tries a real lesson free of charge before anyone discusses fees",
    "Not linked to any school, to the IB, to Cambridge or to Pearson",
  ],
  heroStats: [
    { value: "Kosi-ready", label: "Flexible plans for flood-season gaps" },
    { value: "Free trial", label: "A real lesson before any fee" },
    { value: "Class 1-12", label: "PYP, MYP, IGCSE and DP" },
    { value: "IST", label: "One clock for tutor and student" },
  ],

  intro: {
    heading: "Bringing an international syllabus to the Kosi plain without leaving Supaul",
    paragraphs: [
      "Supaul lies on the Kosi's floodplain in north Bihar, a district where maize, rice, jute and fish ponds sit alongside a busy town market and a steady traffic of people crossing towards Nepal. Its schools run the Bihar board and CBSE. After looking, we could not confirm a single school in the district that teaches the IB or a Cambridge or Edexcel IGCSE.",
      "A parent who wants one of those syllabuses has to decide between sending a child away and keeping the child at home. Many prefer home, especially in a region where families are close, the distances to big cities are long and flood years can make travel unpredictable. A live specialist on a screen turns that preference into an actual plan.",
      "Those asking tend to be doctors, engineers, engineers on Kosi irrigation and embankment projects, teachers, bankers and trading families. Some have children aiming at universities outside Bihar or outside India, and they want a certificate that such universities can read without translation.",
      "IB Gram works independently of the IB, Cambridge, Pearson and all schools. Its tutors teach, correct and advise. They do not produce Internal Assessments, Extended Essays, Theory of Knowledge essays or any coursework that a student submits under their own name.",
    ],
    bullets: [
      "IB PYP, MYP and Diploma subjects, at the level your child studies",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended, Foundation and Higher",
      "Private live video lessons in Indian Standard Time",
      "A free first lesson and a written note after each class",
      "Online only in Supaul; in-person home tuition is offered only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "No school in Supaul runs any of the four programmes, so the question for each one is how a child gets onto the syllabus. The answer differs with age, as the four cards below show.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Teaching is organised around themes such as how the world works, and the final year ends in a child-led Exhibition. Tutors concentrate on fluent reading, reliable arithmetic and a child's habit of asking questions.",
      countryNote:
        "A Supaul PYP student is almost always a child who began the programme in a city and returned home, so tutoring protects English reading and inquiry habits in a home where Maithili or Hindi is spoken.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Criteria replace a single mark in each subject, units connect subjects, and the Personal Project rounds off the programme. Explaining why matters as much as stating what.",
      countryNote:
        "For Supaul MYP students, the practical challenge is learning to justify an answer in writing after years of recall-based schooling, and planning a long project without a coordinator nearby.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma candidate studies six subjects with three at Higher Level, and adds Theory of Knowledge, the Extended Essay and CAS. The Internal Assessments are finished well before the May papers.",
      countryNote:
        "A Diploma student from Supaul is typically at a school in another city, using a tutor at home to shore up weaker subjects, or is following a plan aimed at studying abroad.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two Diploma courses are combined with career-related learning, a reflective project and a skills strand. Few Indian schools offer it.",
      countryNote:
        "CP questions from Supaul are scarce. When one appears, tutoring deals with the two academic courses and the reflective project.",
    },
  ],

  subjectsIntro:
    "Asking for an IB tutor says little. A student at the Physics HL Investigation stage needs different help from one beginning Economics SL, and what counts is the subject, the level and how far the coursework has moved.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, sequences and proof-style thinking, with demanding unseen problems at HL and an Exploration begun early." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling supported by technology, with the Exploration built on data the student can really gather." },
    { name: "IB Physics", levels: "HL / SL", description: "From mechanics through to fields, using the data booklet quickly and designing an investigation that stands up to scrutiny." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Moles, equilibrium and organic reaction pathways, with careful treatment of measurement uncertainty." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics and ecosystems, with long answers shaped by the command term." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram skills and policy evaluation, drawing on flood-relief, agriculture and cross-border trade as familiar cases." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study technique and an Internal Assessment on a real enterprise, for instance a fish-farm cooperative or a grain dealer." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysing unseen texts and speaking fluently in the oral, for students whose home languages are Maithili and Hindi." },
    { name: "IB Hindi A: Literature", levels: "SL / HL", description: "Close reading of set works and oral commentary for a student keeping Hindi as a first language." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Computational thinking, data structures and a documented programming project." },
    { name: "IB Geography", levels: "HL / SL", description: "Rivers, floods and migration, where the Kosi's shifting course offers an unusually vivid regional case." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Flood management, soil and wetland ecology judged with evidence rather than opinion." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis for Paper 1 and a sustained argument in the essay paper." },
    { name: "IB Theory of Knowledge", levels: "Core", description: "Coaching on knowledge questions and the exhibition, with no writing done for the student." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel each offer an IGCSE, yet the papers, grading and tiers are separate. We begin with the board and code, then work toward whichever sitting your child has chosen.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra and geometry with full working; Extended adds functions and lengthier multi-step questions." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus and trigonometry that ease the step up to Diploma Mathematics AA." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel's distinctive phrasing, practised from its own past papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, circuits and waves, with practice on the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Reacting quantities, bonding and organic chemistry under timed conditions." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Body systems, plants and inheritance, in complete written answers." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Case-study recall, data handling and fieldwork questions." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, policy and brief evaluative writing." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Algorithms, logic gates and programming." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing and a speaking assessment for students using English as an additional language." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension, composition and oral practice." },
  ],

  regionsTitle: "Supaul localities our online IB and IGCSE tutors serve",
  regionsIntro:
    "The lessons are online, so these places matter only as background: who lives there, how the floods and festivals shape the week, and when an evening is quiet enough for a proper video class.",
  regions: [
    { name: "Supaul town and Main Road", note: "Professionals, traders and officials, with a mix of Bihar board and CBSE students considering an international route." },
    { name: "Supaul railway station area", note: "Families connected with the Saharsa-Darbhanga line, used to travelling for work and study." },
    { name: "Kosi barrage side (Birpur direction)", note: "Households tied to irrigation, embankment and border-trade work, frequently on postings." },
    { name: "Triveniganj direction", note: "A neighbouring trading centre whose families shop and study in Supaul." },
    { name: "Pratapganj direction", note: "Semi-urban homes where families value a fixed evening slot that survives flood-season disruption." },
    { name: "Raghopur side", note: "Agricultural households with growing interest in an overseas study route." },
    { name: "Basantpur direction", note: "Families from the plains west of town who send children into Supaul for schooling." },
    { name: "Kishanpur direction", note: "Villages and small markets whose students travel in for tutoring and exams." },
    { name: "Nirmali and Saraigarh belt", note: "Border-adjacent households who sometimes have relatives or business across the Nepal frontier." },
  ],

  schoolDisclaimer:
    "The schools below are in faraway cities and are listed only to show where Supaul families look. IB Gram is independent, has no partnership with any of them, and is neither endorsed by nor affiliated with the IB, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Nearby: Patna and eastern Bihar",
      note: "Patna is the nearest large city, several hours away, and we have confirmed no IB or IGCSE school there ourselves, so local choice is limited.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The usual eastern destination for boarding or relocation, reached by long rail journeys from the Kosi region.",
      schools: ["Modern High School for Girls, Kolkata", "The Heritage School, Kolkata", "Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Where families with relatives in the capital sometimes consider moving for the senior years.",
      schools: ["Vasant Valley School, Delhi", "The British School, New Delhi", "Step by Step School, Noida"],
    },
  ],

  modesIntro:
    "Supaul has one format, live online, at three speeds. No school exists to combine with and no tutor visits homes here. The speed depends on how near the exam is and how much the household has on its plate.",
  modes: [
    {
      title: "Weekly live lessons",
      description:
        "A fixed slot every week with one tutor, working through the course in order.",
      bullets: [
        "Matched by board, code and tier",
        "Real past papers marked during the lesson",
        "One tutor from start to finish",
        "Works from PYP up to DP",
      ],
    },
    {
      title: "Term plan with notes",
      description:
        "The same weekly rhythm, plus a note after every class and a progress review each few weeks.",
      bullets: [
        "A brief summary after every lesson",
        "Scheduled reviews to catch slippage",
        "Reassuring for parents who cannot sit in",
        "An extra lesson can be added near mocks",
      ],
    },
    {
      title: "Focused exam push",
      description:
        "A tight run of frequent sessions on timed papers and weak topics before a sitting.",
      bullets: [
        "Timed papers with the real mark scheme",
        "Fast written feedback",
        "Chhath and Durga Puja weeks planned around",
        "Best begun about six weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Which schools and families in and around Supaul look to IB and IGCSE?",
      paragraphs: [
        "The short version is that we know of no IB or Cambridge or Edexcel school in Supaul. Education in the district is delivered through Bihar board and CBSE schools, along with a large tuition economy that prepares children for state exams, engineering and medical entrance and government recruitment.",
        "For a campus, families look far away. Patna is the closest big city but lacks a school we can confirm, so those serious about international boarding look at Kolkata or Delhi NCR. The journey on the Kosi-region rail lines is long, which is why a move in Class 9 or Class 11 is a weighty family decision.",
        "The people who ask about tutoring are varied: officials and engineers working on river and irrigation projects, doctors in the district hospital, teachers, bankers and trading families with an eye on the Nepal border trade. Their children might study abroad, might move cities with a transfer, or might simply be curious about a syllabus that is read the same everywhere.",
        "Learning online lets that decision wait. The student begins now, from home, and keeps going wherever the next school turns out to be.",
      ],
      table: {
        caption: "Where Supaul families look for IB and IGCSE campuses",
        columns: ["City", "Journey", "Schools listed on neighbouring pages"],
        rows: [
          ["Patna", "Several hours by road or rail", "None confirmed by us"],
          ["Kolkata", "A long rail journey east", "Modern High School for Girls, The Heritage School, Calcutta International School"],
          ["Delhi NCR", "A long rail journey west", "Vasant Valley School, The British School, Step by Step School"],
          ["Supaul", "Home", "None confirmed by us"],
        ],
      },
      bullets: [
        "No confirmed IB or IGCSE school in Supaul district",
        "Kolkata and Delhi NCR are the main campus options",
        "Families include engineers, doctors, teachers and traders",
        "Online study can start at home and follow a child to a new school",
      ],
    },
    {
      heading: "How far is the jump from Bihar board or CBSE to IGCSE or the IB?",
      paragraphs: [
        "It is a jump in style rather than in subject matter. Bihar board and CBSE reward complete, accurate answers reproduced quickly. Cambridge, Edexcel and the IB still require that accuracy, but they also set questions where the student must pick a method, apply it to an unfamiliar setting and say why it fits.",
        "Written English adds a hurdle. A Supaul student who thinks in Maithili or Hindi may understand a chemical idea perfectly and then write a vague sentence about it. Command words such as describe, explain, compare and evaluate each demand a different shape of answer, and that shape can be taught directly.",
        "Coursework changes the rhythm of the year. An IB Internal Assessment or an IGCSE practical or coursework component is marked to published criteria and counts towards the grade, so planning across months becomes part of the subject.",
        "Families often discover that, once the new logic is clear, steady weekly work feels calmer than preparing for a single enormous paper.",
      ],
      table: {
        caption: "Comparing the routes open to a Supaul student",
        columns: ["Feature", "Bihar board / CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["What the exam wants", "Complete recalled answers", "Recall and application", "Argument, evidence and application"],
          ["Coursework weight", "Small", "Present in some subjects", "Every subject has an internal component"],
          ["Language of answers", "Hindi or English", "English", "English, with language options"],
          ["How a Supaul student gets there", "Local schools", "Tutor plus an exam centre", "Tutor plus a school elsewhere"],
        ],
      },
      bullets: [
        "Application of ideas outweighs plain recall",
        "Command words are taught as a skill",
        "Coursework adds a months-long planning task",
        "Steady weekly practice makes the change manageable",
      ],
    },
    {
      heading: "What makes one IB or IGCSE tutor quote differ from another in Supaul?",
      paragraphs: [
        "Four things set the figure: programme and level, subject, session length and frequency, and how scarce a tutor with recent experience of that particular course is. Diploma HL Chemistry therefore sits differently from Class 7 MYP Mathematics. Prices are not printed here; a written quote is sent before you book.",
        "Distance never enters the calculation. Supaul lessons are delivered by video, so the family pays for teaching and preparation time only, and a tutor in Hyderabad charges the same as one in Delhi for the same lesson.",
        "Low hourly numbers can hide thin teaching. Ask whether past papers are marked, whether notes follow each lesson and whether the tutor has taught this exact syllabus lately. Those answers predict results better than a rate does.",
        "Nothing is paid ahead for a term, and families may stop or switch tutor whenever they wish.",
      ],
      bullets: [
        "Level, subject, duration and scarcity drive the quote",
        "No travel cost exists for online lessons",
        "Written figure before booking",
        "Stopping or switching carries no penalty",
      ],
    },
    {
      heading: "Compared with tuition classes and local teachers, where does online IB and IGCSE tuition fit in Supaul?",
      paragraphs: [
        "Supaul's tuition classes are busy and well attended, but they serve the Bihar board, CBSE, JEE, NEET and recruitment tests. A student who joins a batch for those gains little for an IB Physics paper, because the question style and order of topics differ.",
        "Individual teachers nearby help with discipline and homework, particularly for younger children. Few of them have taught IGCSE or IB, simply because no local school uses either, and the language of mark schemes is unfamiliar to them.",
        "Teaching oneself from past papers is realistic in some subjects, for example IGCSE Mathematics. Where the work needs a second opinion, such as picking a research question or structuring an essay, going alone tends to stall.",
        "The online specialist suits this situation best, as long as the household can provide a steady connection and a quiet hour, with a plan for outages.",
      ],
      table: {
        caption: "What each option gives a Supaul family",
        columns: ["Option", "Fit with the syllabus", "Attention", "Practical catch"],
        rows: [
          ["Board, JEE or NEET batch", "Different exams", "Large group", "Not designed for IB or IGCSE"],
          ["Nearby teacher", "Seldom matched", "One to one", "Little or no experience of either syllabus"],
          ["Self-study", "Partial", "None", "No outside view of coursework"],
          ["Online specialist", "Matched to code and tier", "One to one", "Needs power and broadband"],
        ],
      },
      bullets: [
        "Local batches aim at other exams",
        "Nearby teachers rarely know IB or IGCSE marking language",
        "Self-study lacks feedback on judgement-based tasks",
        "Online specialists match the exact course",
      ],
    },
    {
      heading: "How do the Kosi floods, Chhath and the exam calendar fit together?",
      paragraphs: [
        "Life in Supaul follows the river. From July to September the Kosi and its tributaries can flood roads and villages, cut electricity and make mobile data patchy. A study plan for this region keeps spare slots and offline material rather than assuming every lesson will connect.",
        "Festivals are the second rhythm. Chhath, in October or November, brings people home from other cities and pauses ordinary life for days. Durga Puja, Diwali, Holi and Saraswati Puja add shorter breaks. Weddings crowd the winter months.",
        "Exam dates stay put. The IB Diploma papers come in May with results in early July, and a November session exists. Cambridge IGCSE sits in May-June and October-November; Edexcel in January and May-June. Bihar board exams in February and March also claim attention.",
        "The sensible pattern is to finish heavy teaching before the monsoon, keep July to September for practice that can survive interruptions, and use the post-Chhath weeks for a final push.",
      ],
      table: {
        caption: "A Supaul year against the IB and IGCSE calendar",
        columns: ["Months", "What is happening", "Planning idea"],
        rows: [
          ["January-March", "Cold mornings, Bihar board exams, Holi", "Edexcel January papers; trimmed lesson load in exam weeks"],
          ["April-June", "Heat, IB and Cambridge papers", "Early-morning timed papers; finish syllabus coverage"],
          ["July-September", "Kosi flood season, Durga Puja", "Offline practice sets and flexible slots"],
          ["October-November", "Chhath, Diwali, Cambridge November series", "Post-festival revision and resits"],
        ],
      },
      bullets: [
        "Flood months can interrupt power and data",
        "Chhath is the biggest break of the year",
        "Bihar board papers collide with international preparation",
        "Finish heavy teaching before the monsoon",
      ],
    },
    {
      heading: "What happens after school for Supaul students taking IB or IGCSE?",
      paragraphs: [
        "Most continue to a city: Patna, Delhi, Kolkata, Pune and Bengaluru attract students for engineering, medicine, law and commerce. A few apply to universities in the UK, Canada, Australia or the United States. Others return to business or administrative careers after a degree.",
        "For Indian universities, an Association of Indian Universities equivalence certificate is often requested from international-board students. CUET-UG can be taken by IB and IGCSE students according to each university's rules. JEE Main and NEET have their own subject and level conditions, and those should be read again every year.",
        "Overseas offers are made on predicted grades, which a registered school or centre supplies in the autumn of the last year. A student studying at home must line up a centre well before that date.",
        "What we do is narrow: strengthen the subject and sharpen the technique. Admission strategy belongs with counsellors.",
      ],
      bullets: [
        "Patna, Delhi, Kolkata, Pune and Bengaluru are common next steps",
        "AIU equivalence, CUET-UG and JEE or NEET conditions change by year",
        "Overseas offers depend on predicted grades",
        "Home-based candidates need a registered centre",
      ],
    },
    {
      heading: "Picking IB Maths and sciences when floods and farming are part of everyday life",
      paragraphs: [
        "Analysis and Approaches appeals to students who enjoy algebra and may head to engineering or physics; Applications and Interpretation suits those who like data and plan on business, biology or social science. Neither is easier; they differ in the kind of problem they reward.",
        "Physics rewards setting up a situation before any arithmetic, Chemistry demands steady progress through organic topics, and Biology rewards using the exact command word. A home-based student has no laboratory at hand, so the Investigation should be designed around what can safely be done.",
        "Supaul hands students real material: river discharge, silt, crop yields, fish-pond water quality and market prices. Each can anchor a mathematics Exploration or an environmental study with genuine data.",
        "Begin the Internal Assessment early and keep a dated record of every step.",
      ],
      bullets: [
        "AA leans algebraic; AI leans towards data",
        "Sciences reward careful setup and precise wording",
        "Local rivers, crops and markets give real datasets",
        "A dated log protects the Internal Assessment",
      ],
    },
    {
      heading: "Selecting IGCSE subjects and tiers from a home base in Supaul",
      paragraphs: [
        "A home-based IGCSE student chooses freely, which is useful but carries risk, because nobody at a school desk will notice a weak combination. A balanced set usually includes English, Mathematics, a science and subjects that point to the next stage.",
        "Tier deserves the most thought. Core limits the top grade and suits a student needing a safe result. Extended keeps the highest grades open and leads more smoothly into the Diploma, so a child thinking about HL Mathematics or sciences is usually better in Extended.",
        "Language subjects such as English as a Second Language and Hindi as a Second Language give Supaul students realistic, creditable results.",
        "Confirm which centre will register a private candidate before settling on a board.",
      ],
      bullets: [
        "Balance core subjects with future-linked ones",
        "Extended tier for HL ambitions",
        "Language papers provide dependable results",
        "Confirm centre acceptance first",
      ],
    },
    {
      heading: "What are the first steps for a Supaul family?",
      paragraphs: [
        "Write to us with the board, subject, level, present marks, exam sitting and the topic causing trouble.",
        "We then choose tutors who have recently taught that exact course and look at how they guide coursework.",
        "A free trial lesson follows so you can judge the explanation and see whether your child is comfortable.",
        "A plan for the first month comes next, and a mismatch means a different tutor.",
      ],
      bullets: [
        "Brief by WhatsApp or email",
        "Shortlist with reasons",
        "Free trial lesson",
        "Adjustable plan",
      ],
    },
  ],

  tutorsIntro:
    "These specialists teach IB and IGCSE to students across India, including Supaul, each assigned to a syllabus and level on the strength of recent teaching.",

  process: [
    { title: "Write to us", description: "Board, subject, level, current marks, exam sitting and free evenings in Supaul." },
    { title: "Receive a shortlist", description: "Tutors with recent experience of the course, and the reason for each." },
    { title: "Attend the trial", description: "One lesson on your child's own material, free." },
    { title: "Fix the plan", description: "Topics, timing and quote in writing." },
    { title: "Stay in touch", description: "Notes after sessions and an easy swap if the fit is poor." },
  ],

  whyPoints: [
    { title: "Exact-paper matching", description: "Code, tier and sitting choose the tutor." },
    { title: "Beyond the district", description: "A pool of specialists from across India." },
    { title: "Try first", description: "The trial lesson precedes any commitment." },
    { title: "Honest coaching", description: "Coursework stays the student's own." },
    { title: "Visible progress", description: "Written notes and reviews keep you informed." },
    { title: "No lock-in", description: "Leave or switch without penalty." },
  ],

  faqs: [
    { question: "Does any school in Supaul teach the IB or IGCSE?", answer: "None that we could confirm. Supaul's schools appear to teach the Bihar board or CBSE, and the campuses we name are in Kolkata and Delhi NCR. A Supaul child who wants these syllabuses therefore usually studies them from home with a tutor who teaches over video and knows the exact papers." },
    { question: "Will a teacher come to our Supaul house?", answer: "No. House visits run only in Gurugram and parts of Delhi NCR. In Supaul, your child sits at home while the tutor teaches live over video with a shared whiteboard. The attention is private and one to one, and families can pick the best available specialist instead of whoever lives nearby." },
    { question: "What will IB or IGCSE tuition cost for a Supaul student?", answer: "We print no price list. The figure depends on programme, level, subject, length of session and how hard it is to find recent experience of that course. Nothing is added for travel. A written quote reaches you before the free trial and before any booking, and nobody needs to pay for a term in advance." },
    { question: "My child studies in Maithili or Hindi at home. Can they manage the English exams?", answer: "Yes, with deliberate practice. Tutors teach command words, short structured explanations and subject vocabulary, because many students understand a concept yet lose marks writing it. We choose tutors experienced with students from Maithili and Hindi-speaking backgrounds and work at a steady pace." },
    { question: "Do you cover both Cambridge and Edexcel IGCSE?", answer: "We do. Cambridge students are matched by subject code and Core or Extended tier, while Edexcel students are matched by specification and Foundation or Higher tier. The tutor uses only the papers and mark schemes of the board your child is entered for, since they are not interchangeable." },
    { question: "How does a student in Supaul register for the exams?", answer: "Through an approved exam centre, normally a school in a bigger city. Some centres accept private candidates for Cambridge and Edexcel, while the IB Diploma generally needs an authorised IB school. Ask about fees and deadlines early. Tutoring prepares the candidate but does not handle registration." },
    { question: "Is the trial lesson truly free?", answer: "Yes. Your child takes a full lesson on real material from their syllabus, with no charge and no paperwork. A short written plan follows, and you choose whether to continue, change something or stop altogether." },
    { question: "Can the tutor do the Internal Assessment or Extended Essay for my child?", answer: "No. Tutors explain criteria, help a student arrive at a researchable question and give honest comments on drafts the student wrote. Supplying finished text for submission is an academic integrity breach that can cancel results, so we decline it for every subject and level." },
    { question: "Which IB Diploma subjects are available?", answer: "Both Mathematics courses, Physics, Chemistry, Biology, Economics, Business Management, English, Hindi, Computer Science, Geography, History and Environmental Systems and Societies, plus Theory of Knowledge coaching. If yours is not listed, ask, since the tutor pool changes over time." },
    { question: "Can a child from a Bihar board or CBSE school move to IGCSE or IB?", answer: "Yes, and many do. Mathematics and science content overlaps more than parents expect, and the real adjustment is in written reasoning and coursework habits. A start in Grade 9 or Class 11 is comfortable; a shorter, focused preparation can also succeed with regular practice." },
    { question: "Which exam months should we keep in mind?", answer: "IB Diploma papers are held in May with results in early July, and a November session also runs. Cambridge IGCSE is offered in May-June and October-November. Edexcel IGCSE uses January and May-June. The boards publish each year's timetable, so check it once your child is entered." },
    { question: "How do lessons fit in with flood season and festivals?", answer: "We plan for them from the start. Sessions are typically on weekday evenings or weekend mornings, with lighter weeks around Chhath, Durga Puja and board exams. In flood months we keep spare slots and offline practice sets, and adding an extra lesson before a mock is easy because everything is online." },
    { question: "Can you teach younger children in PYP or MYP?", answer: "Yes. PYP sessions are short and concentrate on reading, writing and number sense, with support for Exhibition research. MYP sessions cover criterion-based writing, scientific reasoning and the Personal Project. We pace both around the child's attention and homework." },
    { question: "What if a storm or power cut stops a lesson?", answer: "The session is moved at no charge, and the tutor can send notes or practice questions for offline work. Many Supaul families keep a mobile hotspot and a charged backup as standby. We agree a missed-lesson rule at the start so nobody is surprised." },
    { question: "What if my child does not get on with the tutor?", answer: "We replace the tutor. Regular reviews are meant to reveal a weak match early, and no contract binds you. Families can also pause lessons during board exams, a wedding season or a long festival stretch and resume afterwards." },
    { question: "Is IB Gram connected with any school or exam board?", answer: "No. It is independent, with no affiliation to the IB, Cambridge, Pearson or any school on this page. To start, email support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's subject, level and exam sitting." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How other cities handle access to these syllabuses." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The one area where tutors can visit homes." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB support by programme." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel compared." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Core elements, assessments and HL versus SL." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject and level." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Begin with a free trial lesson." },
    { label: "IB and IGCSE tutoring in Saharsa", href: "/saharsa/", description: "The nearest larger Kosi-division town." },
    { label: "IB and IGCSE tutoring in Araria", href: "/araria/", description: "A neighbouring district town to the east." },
    { label: "IB and IGCSE tutoring in Darbhanga", href: "/darbhanga/", description: "The Mithila region's main city to the west." },
    { label: "IB and IGCSE tutoring in Purnia", href: "/purnia/", description: "A larger Seemanchal city." },
  ],

  closingHeading: "Begin with a free lesson for your Supaul student",
  closingBody:
    "Tell us the board, subject, level, current marks and which evenings the house is quiet. We will answer with a tutor suggestion, the reason behind it and a trial time, with nothing to sign. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115.",
};
