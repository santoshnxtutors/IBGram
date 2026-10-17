import type { CitySeoPage } from "../types";

/**
 * /bhadrak/ - IB and IGCSE tutoring page for Bhadrak, Odisha. No IB or Cambridge/Edexcel school in
 * Bhadrak could be confirmed, so stripSchools is empty and the clusters point at Bhubaneswar (KIIT
 * International, SAI International, KT Global, already verified on the Bhubaneswar and Cuttack pages)
 * and Kolkata. Online only. Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const bhadrak: CitySeoPage = {
  slug: "bhadrak",
  countryName: "Bhadrak",
  countryNameLong: "Bhadrak, Odisha",
  demonym: "Bhadrak",
  state: "Odisha",
  stateCode: "IN-OR",
  flagCode: "in",
  countryCode: "IN",
  region: "Odisha, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Cyclone warnings, Durga Puja and the Kali Puja week are the dates that move a lesson here more than the weather ever does",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.0542, longitude: 86.5147 },
  wikipedia: "https://en.wikipedia.org/wiki/Bhadrak",
  alternateNames: ["Bhadrakh", "Bhadrak town"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Bhadrak | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Bhadrak students in Odisha: private one-to-one tuition from home over video, Cambridge and Edexcel too, with a free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Bhadrak",
  heroEyebrow: "IB & IGCSE ONLINE TUTORS FOR BHADRAK",
  heroSubtitle:
    "If home tuition in Bhadrak for an IB or IGCSE student is what you are after, the tutor teaches online, live and one to one, while your child sits at home. There is no visit to Bhadrak; the distance to Bhubaneswar simply stops mattering. Give us the syllabus and level, watch a free lesson, and decide from what you saw.",
  primaryKeyword: "IB and IGCSE tutors in Bhadrak",
  imageAltText: "A Bhadrak student at home working on IB Biology notes while an online tutor explains on a laptop",
  secondaryKeywords: [
    "IB tutor Bhadrak",
    "IGCSE tutor Bhadrak",
    "IB home tuition Bhadrak",
    "IGCSE home tuition Bhadrak",
    "IB private tuition Bhadrak",
    "IB online tuition Bhadrak",
    "IGCSE online tuition Bhadrak",
    "IB Maths tutor Bhadrak",
    "IGCSE Maths tutor Bhadrak",
    "IB Physics tutor Bhadrak",
    "IB Chemistry tutor Bhadrak",
    "IB Biology tutor Bhadrak",
    "IB DP tutor Bhadrak",
    "IB MYP tutor Bhadrak",
    "IB PYP tutor Bhadrak",
    "IB tutor Dhamnagar",
    "IGCSE tutor Chandbali",
    "IB tutor Basudevpur",
    "IB tutor Bhadrak Odisha",
  ],

  heroTrustPoints: [
    "Each tutor is chosen for having taught your child's exact subject and level",
    "All lessons are online and one to one; home visits exist only in Gurugram and parts of Delhi NCR",
    "A short written note follows every session",
    "Independent of all schools, boards and exam bodies mentioned here",
  ],
  heroStats: [
    { value: "PYP, MYP, DP, CP", label: "IB, start to finish" },
    { value: "Cambridge & Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "Same clock as home" },
    { value: "Free trial", label: "One lesson, no charge" },
  ],

  intro: {
    heading: "Halfway between Balasore and Cuttack, a long way from an IB classroom",
    paragraphs: [
      "Bhadrak sits on the Kolkata to Chennai rail and NH16 corridor in northern coastal Odisha, on the Salandi river, with Balasore to the north and Cuttack and Bhubaneswar a couple of hours south. Local schools follow the Board of Secondary Education, Odisha, plus CHSE for Class 11 and 12 and CBSE. We could not confirm any school in Bhadrak as authorised for the IB or as teaching Cambridge or Edexcel IGCSE, so none is named here.",
      "The families who ask about IB and IGCSE tutors in Bhadrak are mostly living with a gap. A child boards at an international school in Bhubaneswar and needs support on the weekends home. A family with a member in the Gulf, the United States or the Indian Navy plans study abroad and wants the Diploma or IGCSE route. A student has enrolled with an online school and needs subject specialists rather than generalists.",
      "Lessons run on video, in Indian Standard Time. IB Gram tutors live in different parts of India and visits to a home happen only in Gurugram and parts of Delhi NCR. A Bhadrak student sits with a laptop at their own desk and learns from a person who has taught the specification recently.",
      "Tutors coach and explain. Internal Assessments, Extended Essays, TOK essays and coursework are always the student's own writing.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, and Cambridge or Pearson Edexcel IGCSE",
      "Weekend-home boarders, online-school students and study-abroad planners",
      "Private lessons from home over video, not visits to your door",
      "A free trial lesson before you talk about fees",
    ],
  },

  programmesIntro:
    "Few Bhadrak parents have seen these programmes at first hand, since the nearest confirmed schools are in Bhubaneswar. Here is each stage in plain terms, and how it tends to arrive at a household in this district.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Children learn through units of inquiry built around big ideas, keep a record of their learning and finish primary school with a student-led Exhibition.",
      countryNote:
        "For a child from Bhadrak this is usually a boarder who visits at weekends, and the tutor helps preserve reading habits and confident questioning between school weeks.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is assessed against criteria, connecting concepts to real contexts, and a Personal Project closes the programme. Written explanations count as much as final answers.",
      countryNote:
        "MYP tutoring in Bhadrak often works on translating strong Odia-medium or CBSE foundations into English written answers that fit the criteria.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students pick six subjects across groups, three at Higher Level, and add the Extended Essay, Theory of Knowledge and CAS. Externally marked exams take place in May, and coursework marks are moderated.",
      countryNote:
        "Diploma students from Bhadrak are commonly at a Bhubaneswar school or with an online provider, and a tutor typically teaches whole units of Higher Level Maths, Chemistry or Physics.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses are taken with a career-related study, a reflective project and skills development. It suits applied, vocational directions.",
      countryNote:
        "SAI International in Bhubaneswar has been recorded as offering it, while in Bhadrak itself it appears only through online providers, and we support the academic Diploma courses beneath it.",
    },
  ],

  subjectsIntro:
    "The starting point is the course code and the next assessed piece of work, not a general subject label. With no IB or IGCSE classroom in town, we ask what the student has covered, what the school or provider expects next and where confidence is weakest.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, algebra and proof, with time spent on unfamiliar Paper 3 style problems that JEE-trained habits do not always cover." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, financial and geometric models handled with a graphic calculator, suiting economics or design paths." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, electricity and modern topics, with an investigation that needs a clean, measurable variable." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Reaction calculations, bonding, kinetics and organic chemistry, best learned through short, frequent practice sets." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and physiology, with marks won or lost on precise command terms." },
    { name: "IB Economics", levels: "HL / SL", description: "Correct diagrams tied to live examples, with Higher Level adding calculation papers." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying models to case studies, relevant to students from trading and port-linked families." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, databases and a programmed solution that needs many hours of actual coding." },
    { name: "IB Psychology", levels: "HL / SL", description: "Research methods and the main approaches, with a first experiment designed for the internal assessment." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual commentary, comparative essays and the recorded individual oral." },
    { name: "IB Odia A", levels: "HL / SL", description: "Odia is the home language, so work goes to literary analysis, essay structure and the oral rather than basic fluency." },
    { name: "IB Hindi B", levels: "SL / HL", description: "A language-acquisition course covering reading, writing and speaking tasks for students meeting Hindi mainly at school." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Coastal ecosystems, cyclones, mangroves and agriculture give Odisha students strong local case studies." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Knowledge questions tested against real cases, with the tutor pushing back the way classmates would." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel share many subjects but differ in paper structure, tiers and sittings. Cambridge examines in May-June and October-November; Edexcel adds January.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended needs clear working on every line; final answers alone do not earn the marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and trigonometry early on, a real advantage before IB Maths AA." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Familiar topics wrapped in different question wording, practised on Edexcel papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Formula rearrangement, units and the practical-skills paper, drilled weekly." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole work, electrolysis and organic chemistry, plus planning experiments on paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Enzymes, inheritance and transport, with extended answers structured deliberately." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions turned into chains of reasoning, evaluation as the Extended separator." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, trace tables and Boolean logic by writing small programs." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Summary, directed writing and composition, each practised against time." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Structured reading and writing for students whose centre registers Hindi." },
  ],

  regionsTitle: "Bhadrak town and the surrounding district",
  regionsIntro:
    "Everything is online, so these places supply context: where schools and coaching classes cluster, and how road, rail and river shape a family's week.",
  regions: [
    { name: "Bhadrak town centre", note: "The market and administrative core near the district offices, with most private schools and tuition centres within a short ride." },
    { name: "Railway station and NH16 stretch", note: "The commercial spine of Bhadrak, with heavy truck traffic and a high proportion of transport and trading households." },
    { name: "Bhadrak Autonomous College area", note: "A long-established institutional quarter, useful as a reference for students planning degrees in the region." },
    { name: "Dhamnagar", note: "A town in the district with its own colleges and a community that often looks to Bhadrak for coaching." },
    { name: "Chandbali", note: "A river port town on the Baitarani, whose families are linked to trade, fishing and the nearby Dhamra port." },
    { name: "Basudevpur", note: "A mid-sized town near the railway, drawing students from surrounding villages." },
    { name: "Aradi", note: "Known for the Akhandalamani temple, which brings large seasonal crowds during festivals." },
    { name: "Bonth and Tihidi", note: "Rural blocks whose families depend on agriculture and sometimes on weak evening power supply." },
    { name: "Agarpada", note: "A town on the road towards Balasore, mixing farming, small industry and commuters." },
  ],

  schoolDisclaimer:
    "We could not confirm any school inside Bhadrak as running the IB or a Cambridge or Edexcel IGCSE, so no school strip is shown. The Bhubaneswar and Kolkata schools named below are listed as context for families who consider boarding, and their curricula should be verified with each school. IB Gram is independent of them, the IB, Cambridge and Pearson.",
  schoolClusters: [
    {
      city: "Bhadrak district",
      note: "Local schooling follows the Odisha Board, CHSE and CBSE. We found no IB or IGCSE school in the district, so an international syllabus is studied elsewhere or online.",
      schools: [],
    },
    {
      city: "Nearby: Bhubaneswar (Infocity and Chandrasekharpur)",
      note: "About 130 kilometres south. SAI International School on Infocity Road runs CBSE alongside Cambridge IGCSE and the IB Career-related Programme.",
      schools: ["SAI International School"],
    },
    {
      city: "Nearby: Bhubaneswar (Patia)",
      note: "KIIT International School offers CBSE, Cambridge IGCSE and the IB Diploma, with the IB PYP in the early years, on the KIIT campus.",
      schools: ["KIIT International School"],
    },
    {
      city: "Nearby: Bhubaneswar (central)",
      note: "KT Global School, affiliated to Cambridge, serves families across the central city who want an international option outside the Infocity corridor.",
      schools: ["KT Global School"],
    },
    {
      city: "Nearby: Kolkata",
      note: "A longer rail journey to the north-east, Kolkata holds a larger set of long-established IB schools, and some Odisha families consider it for boarding.",
      schools: ["Calcutta International School", "The Heritage School, Kolkata"],
    },
  ],

  modesIntro:
    "All Bhadrak lessons are online and one to one. The variable is timing: a weekly slot, a weekend block for a student boarding in Bhubaneswar, or an exam run.",
  modes: [
    {
      title: "Weekly fixed-slot lessons",
      description:
        "The same tutor at the same time each week, moving through the syllabus with past papers and marked homework.",
      bullets: [
        "One tutor throughout the course",
        "Shared screen with the student's own papers",
        "Any IB programme or IGCSE board",
        "Rescheduled when a cyclone alert or festival intervenes",
      ],
    },
    {
      title: "Weekend blocks for boarders",
      description:
        "Longer sessions on the weekends a boarding student is home, catching up on difficult units and previewing the next ones.",
      bullets: [
        "Fitted to the boarding school's exeat weekends",
        "Two or three hours across a weekend",
        "Notes for the school teachers if wanted",
        "A lighter check-in during boarding weeks",
      ],
    },
    {
      title: "Exam preparation runs",
      description:
        "Timed papers with detailed marking in the weeks before May, October-November or January.",
      bullets: [
        "Marked against current schemes",
        "Error patterns identified and revisited",
        "Booked a few weeks ahead",
        "Planned around Puja holidays",
      ],
    },
  ],

  sections: [
    {
      heading: "Where can Bhadrak students find IB and IGCSE schools?",
      paragraphs: [
        "Not in Bhadrak itself, as far as we could verify. The district's schools run on the Odisha Board, CHSE and CBSE, and the nearest confirmed international campuses are in Bhubaneswar, roughly 130 kilometres south along NH16. That is too far for a daily commute, so the practical routes are boarding, moving the family, or studying online.",
        "In Bhubaneswar, SAI International School on Infocity Road runs CBSE with Cambridge IGCSE and the IB Career-related Programme. KIIT International School offers CBSE, Cambridge IGCSE and the IB Diploma, with the PYP in early years. KT Global School is Cambridge-affiliated and serves central Bhubaneswar.",
        "Some families look at Kolkata, where established IB schools such as Calcutta International School and The Heritage School operate, though it involves a longer rail journey and a different city.",
        "For those who keep the child at home, online study with a subject tutor is the way to follow the syllabus. The table sets out the confirmed options.",
      ],
      table: {
        caption: "Confirmed international-curriculum schools within reach of Bhadrak",
        columns: ["School", "City", "Curriculum recorded", "Route from Bhadrak"],
        rows: [
          ["SAI International School", "Bhubaneswar", "CBSE, Cambridge IGCSE, IB CP", "Boarding or relocation"],
          ["KIIT International School", "Bhubaneswar", "CBSE, Cambridge IGCSE, IB DP, PYP", "Boarding or relocation"],
          ["KT Global School", "Bhubaneswar", "Cambridge-affiliated", "Boarding or relocation"],
          ["Calcutta International School", "Kolkata", "IB", "Boarding"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed in Bhadrak district",
        "Bhubaneswar has the nearest verified campuses",
        "A daily commute of 130 km is not realistic",
        "Online study with a tutor suits students who stay at home",
      ],
    },
    {
      heading: "How does the Odisha Board or CBSE compare with the IB and IGCSE?",
      paragraphs: [
        "Students in the Odisha Board, CHSE and CBSE systems are used to structured textbooks and predictable question patterns, and many are strong at recall and calculation. IB and IGCSE keep the demand for accuracy but reward something added: an argument, an evaluation or a method applied to a new setting. Students often find that they know the content and still lose marks because the answer does not address the command term.",
        "Practical assessment is different. IGCSE sciences include a paper on practical skills, and the IB expects an Internal Assessment investigation designed and written by the student. Many local schools have limited laboratories, so tutors help design investigations using simulations, open data and simple materials.",
        "Language shifts too. Odia is the everyday language across Bhadrak, and many schools teach in Odia or English, but IB and IGCSE papers are in English apart from language courses. Students with strong subject knowledge in Odia often need a few months of writing practice in English.",
        "Both international routes are recognised for Indian and overseas university entry.",
      ],
      table: {
        caption: "Odisha Board, CBSE, IGCSE and IB compared",
        columns: ["Point", "Odisha Board / CHSE", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["What scores well", "Textbook accuracy", "Accuracy with application", "Structured reasoning", "Evaluation and argument"],
          ["Practical work", "Record and viva", "Practical file", "Practical-skills paper", "Internal Assessment investigation"],
          ["Language of paper", "Odia or English", "English or Hindi", "English", "English for most subjects"],
          ["Usual exam months", "February-March", "February-April", "May-June, Oct-Nov, Jan (Edexcel)", "May"],
        ],
      },
      bullets: [
        "Command terms decide marks as much as content",
        "Practical skills are assessed in a new way",
        "Odia-medium students need extra English writing practice",
        "Both routes are accepted for university entry",
      ],
    },
    {
      heading: "What determines the cost of IB and IGCSE tutoring for a Bhadrak family?",
      paragraphs: [
        "The rate is set by the lesson, not the district. Level comes first: a Higher Level IB Physics tutor with recent marking or teaching experience will not charge as an IGCSE Core Mathematics tutor does. Then come session length, the number of lessons each week and how closely the tutor's past teaching matches your exact specification.",
        "Because all lessons are online, Bhadrak families pay nothing extra for a smaller town and nothing for travel. Equally, there is no discount for it; the tutor's time and expertise are the same whether the student is in Kolkata or Bhadrak.",
        "During exam months many families add a second weekly lesson, and the total rises accordingly. It is worth asking for a plan that lists how many lessons are expected, so the budget can be set in advance.",
        "We give rates in writing after the free trial and before any booking. Pausing lessons for exams, Puja holidays or a family event carries no penalty.",
      ],
      bullets: [
        "Level, length and frequency set the rate",
        "Match to your exact specification matters",
        "No travel charge and no small-town premium",
        "Written quote after the free trial",
      ],
    },
    {
      heading: "Should a Bhadrak student choose an online tutor, a coaching class or a local private tutor?",
      paragraphs: [
        "Bhadrak has coaching classes for the Odisha Board, CHSE and entrance exams, and families in the district also send students to Bhubaneswar or Cuttack for JEE and NEET preparation. These classes are good at what they do, but none is built around an IB Higher Level or Cambridge Extended syllabus.",
        "Local private tutors teach well at school level. What is uncommon is a tutor who has recently taught the international specification, knows its mark schemes and can mark practice papers to the standard used by examiners.",
        "An online one-to-one tutor is drawn from a national pool, matched to your course, and can meet at times that suit both a school day and a farming or trading household's schedule.",
        "The table shows the comparison.",
      ],
      table: {
        caption: "Support routes for an IB or IGCSE student in Bhadrak",
        columns: ["Route", "Knows the syllabus?", "Personal attention", "Practical catch"],
        rows: [
          ["Local Odisha Board or CHSE coaching", "No", "Group", "Built for other exams"],
          ["Entrance coaching in Bhubaneswar or Cuttack", "No", "Large batches", "Travel or relocation"],
          ["Local private tutor", "Rarely at IB or IGCSE level", "One to one", "Limited mark-scheme experience"],
          ["Online one-to-one tutor", "Yes, matched to the course", "One to one", "Needs a stable connection"],
        ],
      },
      bullets: [
        "Local coaching serves board and entrance exams",
        "Few private tutors have taught the specification",
        "Online offers a specialist matched to the course",
        "A stable connection is the main requirement",
      ],
    },
    {
      heading: "How do cyclones, Durga Puja and the monsoon affect a study year in Bhadrak?",
      paragraphs: [
        "Bhadrak is in Odisha's cyclone belt, and the coastal district has seen severe storms, including landfall near Dhamra in 2021. October and November are the most exposed months. Warnings can mean power lines down and school closures for days, so tutoring in these months is planned with a spare slot and an option for a shorter lesson on a phone hotspot.",
        "The southwest monsoon from June to September brings heavy rain and occasional local flooding along the Salandi and Baitarani. Summer from April to June is hot and humid, so morning and evening slots are preferred.",
        "Durga Puja, usually in October, is the major break. Kali Puja and Diwali follow, then Kartik Purnima. Raja Parba in June and Rath Yatra in July or so add shorter pauses. Odia families often travel during these weeks.",
        "Exam windows are fixed: IB in May, Cambridge in May-June and October-November, Edexcel adding January. The plan is built backwards from them.",
      ],
      table: {
        caption: "Bhadrak's study calendar",
        columns: ["Period", "Local conditions", "How lessons adapt"],
        rows: [
          ["January to March", "Cool, dry; Edexcel January series", "Steady lessons and mock papers"],
          ["April to June", "Hot and humid; IB and Cambridge May papers", "Early or late slots, timed papers"],
          ["July to September", "Monsoon, possible flooding", "Buffer slots, shorter sessions if power is out"],
          ["October to November", "Cyclone risk, Durga Puja, Kali Puja; Cambridge Oct-Nov papers", "Long planned break, then revision"],
        ],
      },
      bullets: [
        "October and November carry the highest cyclone risk",
        "Puja weeks need a planned pause",
        "Monsoon flooding can interrupt power",
        "Exam dates never move",
      ],
    },
    {
      heading: "Where can an IB or IGCSE student from Bhadrak study next?",
      paragraphs: [
        "In-state, the choices include Utkal University, Ravenshaw University in Cuttack, IIT Bhubaneswar, NISER, AIIMS Bhubaneswar and KIIT University, and locally Bhadrak Autonomous College. Fakir Mohan University in Balasore is closer for some. Kolkata's institutions are within a rail journey.",
        "For Indian degrees, the Association of Indian Universities issues equivalence for the IB Diploma and, with documentation, for IGCSE with a qualifying Class 12. CUET-UG opens central universities to IB students. JEE and NEET have their own eligibility rules, which vary, so read the current official notice before subjects are locked.",
        "Overseas applications hinge on predicted grades, issued in autumn of the final year. These rest on internal exams and coursework, so steady effort from Class 11 counts.",
        "Tutors focus on subject learning that supports any of these routes. Counselling and applications remain with the school or a qualified counsellor.",
      ],
      bullets: [
        "Utkal, Ravenshaw, IIT Bhubaneswar, NISER and KIIT are regional options",
        "AIU equivalence is essential for Indian degrees",
        "CUET-UG is a route for IB students",
        "Predicted grades matter overseas",
      ],
    },
    {
      heading: "How do IB Maths and Science lessons work when the lab is at home?",
      paragraphs: [
        "In Maths, the tutor works from the syllabus in order and sets problems that the student has not seen. Analysis and Approaches sessions are heavy on algebra, calculus and proof. Applications and Interpretation sessions concentrate on statistics, modelling and getting the most from a graphic calculator.",
        "For Physics, Chemistry and Biology, sessions follow the specification, with past-paper questions and immediate feedback. When the Internal Assessment approaches, the tutor helps the student choose a workable research question, a method and a way to analyse results, but never writes any of it.",
        "Because a Bhadrak home is unlikely to have a laboratory, investigations are designed around what is available: online simulations, open datasets, measurements made with a phone, or kitchen chemistry that is safe. This is a genuine skill, and examiners reward it when the question and analysis are sound.",
        "A short note after each lesson lists topics covered, mistakes and the next task.",
      ],
      bullets: [
        "Syllabus followed in order with unseen problems",
        "Past-paper questions with quick feedback",
        "IA investigations designed around home resources",
        "A written note after each session",
      ],
    },
  ],

  tutorsIntro:
    "These tutors teach the IB and IGCSE from elsewhere in India, over video. None live in Bhadrak, and none need to; what matters is recent, specific teaching of your child's course and level.",

  process: [
    { title: "Share the course details", description: "Programme or board, subject, level, current school or provider and target exam session." },
    { title: "Receive a shortlist", description: "Tutors chosen for recent teaching of that exact course, with reasons." },
    { title: "Attend the free lesson", description: "A live session on a real topic before any rate is agreed." },
    { title: "Review the plan", description: "A short written outline of topics, pace and progress reports." },
    { title: "Continue each week", description: "A fixed slot, adjusted for exams, Pujas and school terms." },
  ],

  whyPoints: [
    { title: "Matched by syllabus", description: "Tutors are chosen for your course code and level, not a broad IB or IGCSE label." },
    { title: "Fit for a district with no local option", description: "Tutors are ready to teach a whole subject where no classroom does." },
    { title: "See before paying", description: "A free live lesson lets you judge the teaching first." },
    { title: "Coaching, not writing", description: "Feedback on IAs and essays, with the writing left to the student." },
    { title: "Progress on paper", description: "A note after each session and a review every few weeks." },
    { title: "No lock-in", description: "No long contract and an easy change of tutor if needed." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Bhadrak?", answer: "We could not confirm one. Bhadrak schools follow the Odisha Board, CHSE or CBSE. The nearest verified international campuses are in Bhubaneswar, about 130 kilometres south, so most families study through boarding, relocation or online provision, with a private tutor supporting the harder subjects." },
    { question: "Can a tutor come to our home in Bhadrak?", answer: "No. Tutors do not visit homes in Bhadrak. In-person home tuition runs only in Gurugram and parts of Delhi NCR. In Bhadrak, home tuition means an online lesson: your child studies at a desk at home while a tutor teaches live, one to one, over video, in Indian Standard Time." },
    { question: "How much does IB or IGCSE tuition cost in Bhadrak?", answer: "It depends on the level, session length, weekly frequency and how closely the tutor's experience matches your syllabus. We quote in writing after the free trial. There is no extra charge for being in a smaller district town, and pausing lessons for exams or Puja weeks carries no penalty." },
    { question: "Which Bhubaneswar schools teach IB or IGCSE?", answer: "SAI International School on Infocity Road offers CBSE with Cambridge IGCSE and the IB Career-related Programme. KIIT International School offers Cambridge IGCSE and the IB Diploma. KT Global School is Cambridge-affiliated. We name them for context only; IB Gram is not affiliated with any, and families should verify current curricula." },
    { question: "Is Bhubaneswar close enough for a daily commute from Bhadrak?", answer: "Not realistically. It is roughly 130 kilometres each way along NH16, several hours in traffic. Families who want a Bhubaneswar school generally arrange boarding or move, and those who stay in Bhadrak follow the syllabus online with a tutor supporting each subject." },
    { question: "My child studies in an Odia-medium school. Can they switch to IGCSE?", answer: "Yes, and Class 9 is the usual starting point. The main adjustments are English written answers, command terms and showing working in Mathematics. A tutor begins with a diagnostic lesson, then plans a gradual change over a term or two so the student is not overloaded." },
    { question: "Which IB subjects can your tutors teach?", answer: "Both Maths courses, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, Psychology, English A, Odia A, Hindi B, Environmental Systems and Societies and TOK, at HL and SL where they exist. Tell us the exact subject and level and we will confirm honestly whether we have a suitable tutor." },
    { question: "Will the tutor write my child's Internal Assessment or Extended Essay?", answer: "No. Tutors explain the criteria, help refine a question, review a plan and comment on drafts. The writing, data and analysis stay the student's own, as the IB and the exam boards require, whatever the deadline pressure." },
    { question: "Can my child sit IB or IGCSE exams from Bhadrak?", answer: "Only through an authorised centre, and none in Bhadrak is one we could confirm. Families usually register through a school in Bhubaneswar or elsewhere, or a private-candidate centre. Registration deadlines fall months before the exam series, so ask early." },
    { question: "Do you help MYP and PYP students?", answer: "Yes. MYP help centres on criterion-based writing, science reports and the Personal Project, as coaching only. PYP help is lighter, aimed at reading, number work and the Exhibition. Boarders often use weekend blocks when they are home." },
    { question: "How do cyclone warnings affect lessons?", answer: "We keep a flexible schedule. If a storm alert or power failure cancels a lesson, we move it within the week, and a longer closure is planned around. Before October and November it is sensible to check your backup, such as a charged laptop and a mobile hotspot." },
    { question: "When should we begin tutoring?", answer: "As close to the start of the course as possible: Class 11 for the Diploma, Class 9 for IGCSE. Starting early lets habits build steadily. A later start still works, with a narrower plan built from a diagnostic lesson and the highest-value topics first." },
    { question: "Is Odia available as an IB language?", answer: "Yes, Odia A is a school-supported language at HL and SL for students who use Odia as a first language, provided the registering school offers it. We can coach literary analysis, essay structure and the oral. Check with the school or provider that it is available." },
    { question: "What if my child does not get on with the tutor?", answer: "Tell us and we introduce another tutor. Reviews every few weeks are meant to catch a poor fit early, and no long contract is signed. The note after each lesson gives you a clear record to judge by." },
    { question: "How do I book the free trial?", answer: "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with the subject, level, board or programme and preferred times. We reply with a shortlist and a trial slot. The lesson is real teaching, with no obligation to continue afterwards." },
    { question: "Is IB Gram linked to the IB, Cambridge, Pearson or any school?", answer: "No. IB Gram is an independent tutoring service without affiliation to the International Baccalaureate, Cambridge, Pearson Edexcel or any school mentioned here. Schools appear only for context, and nothing here is an endorsement by or of them." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online tuition works from city to city." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person home visits are offered." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers and subjects." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The DP structure and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP inquiry units and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA versus AI explained." },
    { label: "Browse tutors", href: "/tutors/", description: "Search by subject and level." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and book a trial." },
    { label: "IB and IGCSE tutors in Bhubaneswar", href: "/bhubaneswar/", description: "The state capital with the nearest confirmed IB and IGCSE schools." },
    { label: "IB and IGCSE tutors in Cuttack", href: "/cuttack/", description: "The city between Bhadrak and Bhubaneswar." },
    { label: "IB and IGCSE tutors in Puri", href: "/puri/", description: "Another coastal Odisha city served online." },
  ],

  closingHeading: "Book a free IB or IGCSE trial lesson in Bhadrak",
  closingBody:
    "Share the subject and level, the board or programme, and the hours that suit your household. We will reply with a matched tutor and a trial slot, taught online and one to one, and you decide after watching. Email support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
