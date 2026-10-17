import type { CitySeoPage } from "../types";

/**
 * Kadi (Mahesana district, Gujarat). No IB or Cambridge / Edexcel school could be confirmed in the town, so
 * stripSchools is empty and the clusters point honestly to Kalol, Ahmedabad and Vadodara, whose schools are
 * already verified on neighbouring pages. Online only; no in-person tuition outside Gurugram and parts of Delhi NCR.
 */
export const kadi: CitySeoPage = {
  slug: "kadi",
  countryName: "Kadi",
  countryNameLong: "Kadi, Gujarat",
  demonym: "Kadi",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weeknight lessons that step aside for the Navratri fortnight, Diwali and Bestu Varas, Uttarayan in January and the parched weeks of late spring",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.3001, longitude: 72.3321 },
  wikipedia: "https://en.wikipedia.org/wiki/Kadi,_Gujarat",
  alternateNames: ["Kadi Mehsana", "Kadi Mahesana", "Kadi Gujarat", "Kadi town"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Kadi | One-to-One Online Tuition",
  metaDescription:
    "Online one-to-one IB and IGCSE tuition for students in Kadi, Mahesana: MYP, DP, PYP, Cambridge and Edexcel subjects, with a trial lesson at no cost.",
  h1: "IB and IGCSE Tutors and Online Tuition at Home in Kadi",
  heroEyebrow: "IB & IGCSE ONE-TO-ONE TUITION FOR KADI FAMILIES",
  heroSubtitle:
    "Private tuition at home in Kadi for an IB or IGCSE subject has to be built differently, because the town's coaching is tuned to the Gujarat board and to competitive entrance exams, not to Diploma or Cambridge papers. Our tutors teach live and one-to-one over video, so the lesson sits on your child's own desk in Kadi while the specialist, based elsewhere in India, brings the exact course knowledge.",
  primaryKeyword: "IB and IGCSE tutors in Kadi",
  imageAltText: "Kadi student attending a one-to-one IB Economics lesson on a laptop with an online tutor",
  secondaryKeywords: [
    "IB tutor Kadi",
    "IGCSE tutor Kadi",
    "IB home tuition Kadi",
    "IGCSE home tuition Kadi",
    "IB private tuition Kadi",
    "IB Maths tutor Kadi",
    "IGCSE Maths tutor Kadi",
    "IB Physics tutor Kadi",
    "IB Chemistry tutor Kadi",
    "IB Biology tutor Kadi",
    "IB DP tutor Kadi",
    "IB MYP tutor Kadi",
    "IB PYP tutor Kadi",
    "IGCSE online tuition Kadi",
    "IB tutor Mahesana district",
    "IB tutor Kalol",
    "online IB tutor Gujarat",
    "IGCSE tutor north Gujarat",
  ],

  heroTrustPoints: [
    "Online home tuition, live and entirely one-to-one",
    "Tutor selected for your child's own IB programme or IGCSE board",
    "A trial lesson at no cost before any decision",
    "Independent from every school, board and university",
    "Parents receive a short written summary after each lesson",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "CAIE and Edexcel", label: "IGCSE boards supported" },
    { value: "Online, IST", label: "Format for Kadi students" },
    { value: "Trial lesson", label: "Offered at no cost" },
  ],

  intro: {
    heading: "Kadi's case for online IB and IGCSE tuition",
    paragraphs: [
      "Kadi is a hard-working market town in Mahesana district, north of Ahmedabad and close to Kalol, where cotton ginning, castor, ceramics and agricultural processing shape the local economy. It has old educational roots in the region, with the Kadi Sarva Vidyalaya movement giving its name to a university in Gandhinagar, yet its tuition culture is centred on the Gujarat board and on preparation for GUJCET, JEE and NEET.",
      "Families in north Gujarat also have one of the strongest overseas links in India. Relatives in the United Kingdom, the United States, Canada, Africa and Australia are common, and a child's future may well lie abroad. That is a reason some households look at the IB Diploma or Cambridge and Edexcel IGCSE, which are read directly by foreign universities, even though Kadi itself has few or no schools teaching them.",
      "What follows is an honest route through that gap. Tutors do not visit homes in Kadi, because in-person home tuition runs only in Gurugram and parts of Delhi NCR. We offer private lessons at home, taught online: a live video call on a laptop, a shared screen for working, and a tutor who has recently taught the same programme. For anyone searching for IB and IGCSE tutors in Kadi, that is the service on offer.",
      "The page covers the school landscape around Kadi, how the syllabuses compare with GSEB and CBSE, what shapes the cost, how the Gujarati festival year interacts with exams, and where students go after school. It avoids promises about marks.",
    ],
  },

  programmesIntro:
    "Every IB programme and both IGCSE boards are covered. The notes below describe what each stage usually looks like for a student who lives in Kadi.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "A primary course built around inquiry units and guiding questions in place of a subject-by-subject textbook. A tutor supports reading, number sense, and the habit of explaining an idea aloud.",
      countryNote:
        "PYP is usually met in Kadi after a family returns from abroad or moves from Ahmedabad. Short lessons with a parent nearby suit children who are still adjusting.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked against criteria, linked by global contexts, ending with a personal project. Tutoring concentrates on how to read a criterion and how to lay out reasoning in full.",
      countryNote:
        "A Kadi student who joins an MYP school from a Gujarati-medium background needs help with academic English. A tutor builds vocabulary alongside the subject.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, Extended Essay, Theory of Knowledge and CAS across two years. Tutors teach content and exam technique. The essays, internal assessments and reflections are always the student's own.",
      countryNote:
        "DP students from Kadi are usually at schools in Ahmedabad, Gandhinagar or Vadodara. Weekend lessons at home in Kadi compensate for a busy school week.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A mix of DP courses and a career-related study, for students who prefer an applied route. Tutors focus on the academic courses within the combination.",
      countryNote:
        "Rare in Gujarat. Business-minded Kadi families sometimes compare it with the full Diploma, and a tutor can outline the effect on later study options.",
    },
  ],

  subjectsIntro:
    "IB subjects taught at Higher and Standard Level. For Kadi students we find a tutor who has taught the very course, not a generalist.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, algebra and formal reasoning, the usual base for engineering, architecture and science degrees." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, modelling and technology, useful for commerce, economics and life-science degrees." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics through to quantum physics, with practice in data questions and concise written reasoning." },
    { name: "Chemistry", levels: "SL and HL", description: "Stoichiometry, energetics, equilibrium and organic reactions, with a focus on structured responses." },
    { name: "Biology", levels: "SL and HL", description: "Cells, genetics, physiology and ecology, taught with careful attention to terminology." },
    { name: "Economics", levels: "SL and HL", description: "Micro, macro and development topics, drawing on trade and agriculture examples familiar in north Gujarat." },
    { name: "Business Management", levels: "SL and HL", description: "Case-study analysis, well suited to students from family businesses in manufacturing and trade." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, data structures and systems, practised against the paper format." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Analysis of texts and essays, built for students who speak Gujarati at home." },
    { name: "English A: Literature", levels: "SL and HL", description: "Close reading of set works, poetry and drama with support for the oral." },
    { name: "Gujarati and Hindi", levels: "SL and HL", description: "Language and literature support for a student's home language, where the school offers it." },
    { name: "Psychology", levels: "SL and HL", description: "Research methods, key studies and extended-response writing." },
    { name: "Design Technology", levels: "SL and HL", description: "Design process, materials and analysis, for students drawn to engineering and product design." },
    { name: "Theory of Knowledge", levels: "DP core", description: "Help with how knowledge questions work. The essay and exhibition remain the student's own." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE subjects, each with paper codes and tier checked at the first lesson.",
  igcseSubjects: [
    { name: "Mathematics (0580 and 4MA1)", levels: "Core and Extended", description: "Algebra, geometry, trigonometry and statistics, with extra depth at Extended tier." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "Calculus and algebra at pace, a foundation for IB Mathematics HL." },
    { name: "Physics", levels: "Core and Extended", description: "Energy, electricity, waves and atomic physics, with practical-skills practice." },
    { name: "Chemistry", levels: "Core and Extended", description: "Bonding, rates, organic chemistry and calculations." },
    { name: "Biology", levels: "Core and Extended", description: "Organisms, transport, inheritance and ecosystems, with careful definitions." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core and Extended", description: "Double-award science that balances all three disciplines." },
    { name: "Computer Science", levels: "Extended", description: "Algorithms and pseudocode in the board's exact style." },
    { name: "English First Language and Second Language", levels: "Extended", description: "Directed writing, summary and comprehension, following the mark scheme." },
    { name: "Gujarati and Hindi as second languages", levels: "Core and Extended", description: "Reading and writing tasks for students with Gujarati or Hindi at home." },
    { name: "Economics, Business Studies and Accounting", levels: "Extended", description: "Definitions, calculation and short essays for commerce-minded students." },
  ],

  regionsTitle: "Kadi and the villages around it where our students study from",
  regionsIntro:
    "These are not teaching venues, since all lessons are online. They show where students live in and around Kadi, with a note on how daily routine shapes a sensible lesson slot.",
  regions: [
    { name: "Kadi town centre", note: "The old market and dense residential streets. Shops stay open late, so evening lessons start after nine on busy trading days." },
    { name: "Kadi GIDC and industrial belt", note: "Home to families working in factories and processing units. Shift timings make Sunday a dependable lesson day." },
    { name: "Kalol Road side", note: "Towards Kalol, where the nearest confirmed Cambridge-curriculum campus is. Some families keep a foot in both towns." },
    { name: "Mahesana Road side", note: "The route north towards the district headquarters. Students here also look at Mahesana's schools and colleges." },
    { name: "Ahmedabad highway approach", note: "Commuters to Ahmedabad live along it. Students who travel for school want lessons on weekends or late evenings." },
    { name: "Thol", note: "A village near the lake bird sanctuary, about twenty kilometres away. Reliable internet is the main planning point." },
    { name: "Budasan", note: "A village in Kadi taluka with farming and trading households. Sowing and harvest weeks can shift timing." },
    { name: "Nandasan", note: "A village in the taluka, close to the oil-and-gas fields of the Mahesana region. Families include workers in the energy sector." },
    { name: "Kalol (Gandhinagar district)", note: "A neighbouring town with Cambridge-curriculum schooling. Some students from Kadi attend there and take extra lessons at home." },
  ],

  schoolClusters: [
    {
      city: "Kadi and Mahesana district",
      note: "We could not confirm an IB or Cambridge or Edexcel IGCSE school in Kadi. Local schools follow the Gujarat board or CBSE, so an international learner is usually enrolled elsewhere or studying privately.",
      schools: [],
    },
    {
      city: "Nearby: Kalol, Gandhinagar district",
      note: "The closest confirmed Cambridge-curriculum option, reachable by road from Kadi. Check its current offer directly.",
      schools: ["Swayam Cambridge International School, Kalol"],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "Ahmedabad has the widest spread of international schools in Gujarat. Families from Kadi consider it for day school or boarding.",
      schools: ["Mahatma Gandhi International School, Ahmedabad", "Ahmedabad International School", "Calorx Olive International School", "Fountainhead School"],
    },
    {
      city: "Nearby: Vadodara",
      note: "Vadodara offers an established IB option. The journey from Kadi is long, so it usually means boarding or relocation.",
      schools: ["Navrachana International School, Vadodara"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is independent. It has no connection with the IB, Cambridge, Pearson, or any school shown here, which are named only so families can see where international courses exist within reach of Kadi. Their mention is neither a recommendation nor a partnership.",

  modesIntro:
    "No tutor visits homes in Kadi, so the decision is about which online format suits a particular student and season.",
  modes: [
    {
      title: "Regular one-to-one lessons",
      description: "A weekly slot with one tutor for one subject, taught live from home on a laptop.",
      bullets: [
        "A consistent tutor across the term",
        "Shared whiteboard and past papers",
        "A short written summary after each lesson",
        "A tutor swap on request",
      ],
    },
    {
      title: "Exam-lead intensive",
      description: "More frequent lessons in the final months before May or November, covering the syllabus and timed practice.",
      bullets: [
        "Up to several lessons per week near the exam",
        "Timed papers and line-by-line marking",
        "A list of weak topics built from errors",
        "Planned around Diwali and Navratri gaps",
      ],
    },
    {
      title: "Switch-over support",
      description: "For a student moving from a Gujarati-medium or CBSE school into an international course, or returning from abroad.",
      bullets: [
        "A diagnostic first lesson",
        "Academic English and command-term practice",
        "Gentle pace for younger students",
        "Regular check-ins with parents",
      ],
    },
  ],

  sections: [
    {
      heading: "Where do Kadi families find IB and IGCSE schools?",
      paragraphs: [
        "Inside Kadi, we could not confirm a school teaching the IB or Cambridge or Edexcel IGCSE, and we will not guess. Schools in the town and its villages follow the Gujarat board or CBSE. The nearest confirmed Cambridge-curriculum campus is in Kalol, with the largest range of IB and IGCSE schools in Ahmedabad and an established IB school in Vadodara.",
        "That geography defines the families we meet. Some live in Kadi while a child boards in a bigger city. Some send a child daily towards Ahmedabad and arrive home late. Others have lived abroad and returned, carrying an unfinished syllabus. A few prepare privately for IGCSE or IB-style subjects, hoping to study overseas.",
        "For each, tuition has to fit around a life that is already stretched. An online lesson at home in Kadi avoids the return trip to a tutor in Ahmedabad and uses the evening efficiently. On weekends, lessons can run longer, and during holidays a family can set an intensive plan with no travel.",
        "Families considering a move should visit schools, ask about transport and fees, and confirm the current curriculum. We can explain what a course demands so that the decision is informed, but we are not connected to any school and cannot compare them on quality.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed inside Kadi",
        "Kalol, Ahmedabad and Vadodara hold the nearest confirmed options",
        "Typical families: boarders, daily commuters, returnees, private candidates",
        "Online lessons work around a stretched school week",
      ],
    },
    {
      heading: "How do GSEB and CBSE compare with the IB and IGCSE for a Kadi student?",
      paragraphs: [
        "The Gujarat Secondary and Higher Secondary Education Board uses state textbooks, widely taught in Gujarati, and its results determine entry to state colleges alongside GUJCET. CBSE follows NCERT, the base for JEE and NEET. Both emphasise prescribed content and standard formats.",
        "IB and IGCSE papers ask students to apply ideas in new contexts. A Chemistry question might show an unfamiliar reaction and ask for an explanation. A Mathematics question might be a real-world model with unfamiliar notation. In Economics and English, argument and evidence matter more than a memorised paragraph.",
        "The shift in language is often the biggest change for a Kadi student from a Gujarati-medium school. Technical English, command terms such as compare and justify, and the stamina to write timed answers all need practice. A one-to-one tutor can build these without slowing the subject.",
        "The table sets the four systems side by side on points that matter to families in Kadi.",
      ],
      table: {
        caption: "GSEB, CBSE, IB and IGCSE side by side for Kadi families",
        columns: ["Point", "GSEB", "CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["Medium of instruction", "Gujarati or English", "English or Hindi", "English, with a second language", "English, with optional languages"],
          ["Assessment style", "Board exams on a set syllabus", "Board exams plus internal marks", "Exams, internal assessments and essay", "Mostly exams"],
          ["Coaching in Kadi", "Plentiful, plus GUJCET preparation", "Available, with JEE and NEET options", "None confirmed locally", "None confirmed locally"],
          ["Route in India", "Direct to state admissions", "Direct, with CUET-UG, JEE and NEET", "AIU equivalence certificate", "Often a stage before A Level or IB"],
        ],
      },
    },
    {
      heading: "What influences the cost of IB and IGCSE tuition in Kadi?",
      paragraphs: [
        "We do not publish a fixed price, and the reason is simple: two students in Kadi can need very different teachers. After a free trial lesson we send a written rate, so you can study it and decide at home.",
        "The main drivers are the course level, the subject, the experience of the tutor, how long and how often lessons run, and how near the exam is. A tutor who has taught IB Physics HL often charges differently from one helping a Class 6 MYP student with number work. The last two months before May or November are more intense and cost more per week.",
        "A fair comparison helps. Local coaching in Kadi is less expensive per hour because a class may have dozens of students, and its syllabus is that of the Gujarat board. A neighbourhood tutor may be skilled but rarely knows IB command terms. You pay for undivided attention from someone who has taught your child's exact course, with a written record of each lesson.",
        "If you plan to continue through a whole year, tell us, and we will write out how a longer plan would work. A change of tutor is always free, so you are never locked in.",
      ],
      bullets: [
        "Course level: Higher Level and Additional Mathematics differ from Core",
        "Subject and the scarcity of qualified tutors",
        "Session length and number per week",
        "How close the exam session is",
        "Rates written down before booking",
      ],
    },
    {
      heading: "Online tuition, local coaching, private tutors or self-study: what works in Kadi?",
      paragraphs: [
        "Kadi offers coaching for Gujarat board subjects and for entrance exams, and many private tutors teach at home. Those are real strengths for GSEB and CBSE students. They are not aimed at the IB or IGCSE, which follow another style of question and another marking approach.",
        "A local tutor may be good at Mathematics or Science, but the chance that they have taught Cambridge paper 4 or IB Paper 2 is small. Even a correct explanation can lose marks if the wording does not match what the examiner looks for, and this is where specialist tutors earn their place.",
        "Self-study is a good start for motivated students, using free past papers and examiner reports from the boards. Its weakness is feedback, since answers are rarely marked by someone who knows the scheme. Students often repeat the same errors for months.",
        "Online tuition keeps the student at home and gives a specialist's attention. The table sets out the trade-offs most Kadi parents raise.",
      ],
      table: {
        caption: "Four ways to study IB or IGCSE from Kadi",
        columns: ["Route", "Matches IB or IGCSE", "Attention per student", "Travel", "Main limit"],
        rows: [
          ["Online one-to-one tuition", "Yes, tutor chosen for the course", "Undivided for the full lesson", "None", "Needs stable internet and a quiet desk"],
          ["Coaching class in Kadi", "Rarely, focused on GSEB and entrance exams", "Shared with a batch", "Daily within town", "Different question style and few IB-trained teachers"],
          ["Neighbourhood private tutor", "Sometimes, depending on experience", "Good for familiar subjects", "Tutor or student travels locally", "Hard to verify IB or IGCSE background"],
          ["Self-study", "Yes, with the correct past papers", "None unless an adult checks", "None", "No expert marking of written work"],
        ],
      },
    },
    {
      heading: "How do Navratri, Uttarayan and the dry season shape the exam calendar in Kadi?",
      paragraphs: [
        "IB and IGCSE exams run in May and in the autumn, and most Indian candidates sit May. Mocks are usually in January or February, which places the heaviest revision between February and April.",
        "Gujarat's festival calendar leaves its mark. Uttarayan on 14 January fills the sky with kites and closes schools for a few days, which falls right in mock season. Navratri in October takes nine evenings of garba, and Diwali with Bestu Varas follows within weeks, just when November candidates need every hour. Family weddings in winter add to the list.",
        "Weather matters as well. North Gujarat is dry and hot, with temperatures climbing through April and May, which coincides with the main exam. Power supply under peak load and a hot afternoon are not helpful for a video lesson, so early-morning or late-evening slots are sensible. Monsoon rain from July to September can disturb connectivity.",
        "We map these dates at the start of each term and book lessons to avoid them. The table lays out the year.",
      ],
      table: {
        caption: "The Kadi calendar laid over the IB and IGCSE year",
        columns: ["Period", "Local pattern", "Effect on lessons"],
        rows: [
          ["January to February", "Uttarayan, mocks, cool mornings", "Mock review; a short pause around 14 January"],
          ["March to April", "Rising heat, final revision", "Highest intensity; evening or early-morning slots"],
          ["May to June", "Peak heat, exams", "Early lessons and careful rest"],
          ["July to September", "Monsoon, new term", "Good time to begin a new course"],
          ["October to November", "Navratri, Diwali, Bestu Varas, autumn exams", "Lessons planned around festival evenings"],
        ],
      },
    },
    {
      heading: "What are the university options for IB and IGCSE students from Kadi?",
      paragraphs: [
        "Within Gujarat, students look to Ahmedabad and Gandhinagar: IIT Gandhinagar, Nirma University, PDEU, CEPT University, Ahmedabad University and IIM Ahmedabad for postgraduate study, along with Gujarat University and Kadi Sarva Vishwavidyalaya. For many of these, IB students need an equivalence certificate from the Association of Indian Universities.",
        "Engineering and medical routes have their own rules. JEE Main and NEET-UG publish eligibility notes for IB and IGCSE students, often requiring set subject combinations. Gujarat's own entrance, GUJCET, has separate rules for students from other boards. Since these change, families should check the current brochure in Class 11.",
        "Overseas study is a real option for many Kadi households. A relative in the UK, the US, Canada, Australia or East Africa can help with practical matters, and an IB Diploma score is read directly by admissions offices. An IGCSE record builds towards A Levels or IB, and feeds predicted grades.",
        "A tutor can explain how subject choices shape these routes, for instance why IB Mathematics AA HL suits engineering and economics, or why Biology and Chemistry keep medical options open. We make no promise about admission anywhere.",
      ],
      bullets: [
        "Gujarat options include IIT Gandhinagar, Nirma, PDEU, CEPT and Ahmedabad University",
        "AIU equivalence certificate for most Indian applications",
        "JEE Main, NEET-UG and GUJCET have separate rules for IB and IGCSE students",
        "Overseas routes depend on IB points or IGCSE plus A Level",
      ],
    },
    {
      heading: "How is IB Mathematics AA and AI, and the sciences, taught online in Kadi?",
      paragraphs: [
        "Analysis and Approaches leans on algebra, calculus and proof, and suits students likely to study engineering, mathematics or physics. Applications and Interpretation leans on statistics, modelling and technology, and suits commerce, economics, psychology and life sciences. A tutor helps a family choose at the start of the course.",
        "A typical lesson has the tutor set a problem on a shared screen, the student work the solution on paper, and the camera or a tablet show each line. The tutor corrects at once and sets a similar question. Over weeks, timed papers build stamina and the ability to decide on a method quickly.",
        "For the sciences, the shift is from knowing to writing. Kadi students taught under the Gujarat board often calculate well but write short explanations. Tutors teach a pattern for long answers: state the idea, link it to the data, explain, and conclude.",
        "Practical work is handled through reasoning: variables, uncertainty, errors and evaluation, using school lab data or simulations. Internal assessments are always the student's work, and tutors never write or edit them.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects suit a Kadi student?",
      paragraphs: [
        "Core caps the top grade and covers fewer topics. Extended removes the cap and adds more demanding questions. Anyone looking towards IB Diploma Mathematics or Sciences, A Levels, or engineering should take Extended in those subjects.",
        "Subject choice follows the goal. A future engineer keeps Mathematics, Physics, Chemistry and possibly Additional Mathematics. A future doctor keeps Biology, Chemistry and Physics. A business-minded student can add Economics, Business Studies or Accounting, and English plus a language keeps doors open.",
        "Board choice makes a difference too. Cambridge and Pearson Edexcel International GCSE differ in layout, weighting and practical assessment. If a student changes boards, topics may fall in a different order, and a tutor who has taught both can close gaps in a few sessions.",
        "Private candidates should start with the board's specification, choose an exam centre early and use past papers alongside examiner reports. Our tutors follow the specification in order and keep a log of what has been covered.",
      ],
      table: {
        caption: "Core or Extended for a student in Kadi",
        columns: ["Factor", "Core", "Extended"],
        rows: [
          ["Top grade", "Capped lower", "Full range"],
          ["Suits", "Students who need firm foundations", "Students aiming at IB HL, A Level or engineering"],
          ["Question style", "Shorter, more guided", "Longer, with stretch problems"],
          ["Tutoring emphasis", "Accuracy and confidence", "Problem solving and exam technique"],
        ],
      },
    },
  ],

  process: [
    { title: "Send your details", description: "Tell us class, IB programme or IGCSE board, subject, current level and exam month, by WhatsApp or email." },
    { title: "Receive a tutor suggestion", description: "We propose one or two tutors who have recently taught the course, with reasons." },
    { title: "Take a trial lesson", description: "Your child has a live lesson at no cost. You decide afterwards." },
    { title: "Read the rate in writing", description: "If you continue, we send the lesson rate and schedule before anything is booked." },
    { title: "Begin lessons", description: "Weekly lessons start, each followed by a written summary. If the fit is wrong, we change the tutor." },
  ],

  whyPoints: [
    { title: "Matched on the course", description: "Programme, subject, level and board decide the tutor, not a broad claim of IB experience." },
    { title: "Made for towns like Kadi", description: "With no IB specialist tutors locally, every lesson is built to run online from home." },
    { title: "Clear written updates", description: "After each lesson parents receive a brief summary of what was covered and what follows." },
    { title: "Coaching, not writing", description: "Tutors teach and comment. They never write internal assessments, essays or coursework." },
    { title: "Free to change", description: "If the match does not click, we arrange a new tutor with no charge." },
    { title: "Calendar awareness", description: "Lessons are planned around Navratri, Diwali, Uttarayan and exam weeks where we can foresee them." },
  ],

  faqs: [
    {
      question: "Are there IB and IGCSE tutors in Kadi?",
      answer: "Not locally at the level an international syllabus needs, so our tutors teach online. They are based in India, teach in Indian Standard Time and are matched to your child's exact programme, for example MYP Sciences or DP Economics HL. The lesson runs live on video at your own desk in Kadi, with a shared whiteboard.",
    },
    {
      question: "Do tutors visit homes in Kadi?",
      answer: "No. Tutors do not visit homes in Kadi, since in-person home tuition is offered only in Gurugram and parts of Delhi NCR. For Kadi we offer online home tuition: a private one-to-one lesson attended from home on a laptop, with the tutor on video and able to see handwritten work through the camera.",
    },
    {
      question: "Is there an IB school in Kadi?",
      answer: "We could not confirm one. Schools in Kadi follow the Gujarat board or CBSE. The nearest confirmed international schools are in Kalol, Ahmedabad and Vadodara. Please verify a school's current curriculum, admissions and transport yourself, since we have no affiliation with any school and cannot compare them for quality.",
    },
    {
      question: "How much does tuition cost?",
      answer: "We send a written rate after a free trial lesson and do not publish a fixed fee. The rate depends on the level, the subject, the tutor's experience with that course, session length and frequency, and how close the exam is. That lets you compare it calmly with local options before agreeing to anything.",
    },
    {
      question: "My child studies under GSEB. Can they take IGCSE subjects?",
      answer: "Yes, as a private candidate or by moving to a school that offers IGCSE. Private candidates need an approved exam centre and a chosen board. A tutor can test the student's current level and show how the answer style differs. The biggest shift is usually in written English and in reasoning through unfamiliar data.",
    },
    {
      question: "Do you teach Gujarati or Hindi?",
      answer: "Hindi tutors are available at IB and IGCSE levels, and Gujarati can be arranged where the syllabus includes it. Lessons cover set texts, writing in the correct register and oral practice. The tutor begins by finding whether the language is the student's first or second, and adjusts the plan to suit.",
    },
    {
      question: "Will you write the Extended Essay or internal assessments?",
      answer: "No. Tutors coach and never write. They can explain the criteria, help a student shape a research question, and comment on structure. The Extended Essay, internal assessments, TOK essay and coursework must be the student's own work, and we decline any request to write or rewrite them.",
    },
    {
      question: "What if the power or internet fails mid-lesson?",
      answer: "Keep a charged laptop and a mobile hotspot ready, and tell the tutor at once if sound or video drops. A lesson cut short by a long outage can be rescheduled at no charge. In the hottest weeks, choose early-morning or late-evening slots when grid load is lower.",
    },
    {
      question: "When should we start for the May exams?",
      answer: "Seven to nine months earlier is sensible, which means around August or September. That gives time for content, past papers and a mock in January. Starting later is still possible, but the plan will be tighter. The tutor starts by testing what is secure, so early lessons are not wasted.",
    },
    {
      question: "Can younger children learn online?",
      answer: "Yes. We teach PYP and MYP students along with DP and CP. PYP lessons are short, often thirty minutes, built around reading and number work. MYP lessons focus on criterion-based subject work. A parent near the desk in the first few lessons helps a young student settle into the format.",
    },
    {
      question: "Do Indian universities accept IB and IGCSE?",
      answer: "Yes, typically with an AIU equivalence certificate for the IB Diploma and certain international qualifications. Apply early, because processing overlaps admission rounds. JEE Main, NEET-UG and GUJCET publish their own rules for IB and IGCSE students each year. A tutor can explain how subject choices fit, but we do not promise admission.",
    },
    {
      question: "What equipment does my child need?",
      answer: "A laptop or tablet with a camera and microphone, dependable internet and a quiet spot. A phone as a second camera helps show handwritten work. Paper and pen suit Mathematics and Science better than a stylus, and a graphic calculator is needed only if the school requires one.",
    },
    {
      question: "Can students from villages near Kadi take lessons?",
      answer: "Yes, wherever the connection is steady. Students from Thol, Budasan, Nandasan and other villages in Kadi taluka have attended online. Test the link at the planned lesson time, since evening speeds can differ. If the signal is weak, we can shift slots or use audio-first lessons with photos of written work.",
    },
    {
      question: "Cambridge or Edexcel, which IGCSE board should we choose?",
      answer: "The school usually decides, because it registers students with one board. For private candidates, both are widely respected. Cambridge tends towards structured multi-part questions, while Edexcel International GCSE has a slightly different layout and weighting. A tutor who has taught both can compare the specifications for your child's subjects.",
    },
    {
      question: "How do I book the free trial lesson?",
      answer: "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with your child's class, programme or board, subject and exam session. We suggest a tutor and arrange a free lesson. Nothing is charged then, and a written rate follows only if you choose to continue.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "All Indian cities we serve, with how online lessons work." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE, subject by subject." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "How we plan the two-year Diploma." },
    { label: "IB MYP tutoring", href: "/programmes/myp/", description: "Criterion-based help for Class 6 to 10." },
    { label: "IB PYP tutoring", href: "/programmes/pyp/", description: "Short, friendly lessons for primary learners." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "What CP combines and who it suits." },
    { label: "IB Mathematics tutors", href: "/courses/ib/mathematics/", description: "AA and AI, SL and HL." },
    { label: "Our tutors", href: "/tutors/", description: "Tutor profiles, subjects and experience." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book a free lesson." },
    { label: "Mahesana", href: "/mahesana/", description: "The district headquarters, with its own online IB and IGCSE page." },
    { label: "Ahmedabad", href: "/ahmedabad/", description: "The nearest big city and its international schools." },
    { label: "Palanpur", href: "/palanpur/", description: "Another north Gujarat town covered by our tutors." },
  ],

  closingHeading: "Book a trial lesson from your own desk in Kadi",
  closingBody:
    "Tell us the programme or board, the subject and the exam session, and we will suggest a tutor who has taught it. The first lesson costs nothing, any rate comes in writing, and a tutor can be changed. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
  tutorsIntro:
    "Tutors teach from across India in Indian Standard Time. For Kadi we start by looking for someone who has recently taught your child's syllabus, since the town has no IB or IGCSE specialist to turn to.",
};
