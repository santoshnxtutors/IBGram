import type { CitySeoPage } from "../types";

/**
 * /malur/ - IB and IGCSE tutoring page for Malur, the taluk town in Kolar district, Karnataka, about 50 km east of
 * Bengaluru. Online-only: tutors do not visit homes in Malur, since in-person home tuition runs only in Gurugram and
 * parts of Delhi NCR. No IB or Cambridge/Edexcel school in Malur could be confirmed; nearby Bengaluru east schools
 * (Indus International, Inventure Academy) were checked and are used as labelled nearby options.
 */
export const malur: CitySeoPage = {
  slug: "malur",
  countryName: "Malur",
  countryNameLong: "Malur, Kolar district, Karnataka",
  demonym: "Malur",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons set after the Hoskote-road commute, outside Dasara and Deepavali weeks, and clear of the October-November north-east monsoon downpours",
  lastUpdated: "2026-09-21",
  geo: { latitude: 13.0211, longitude: 77.9381 },
  wikipedia: "https://en.wikipedia.org/wiki/Malur",
  alternateNames: ["Maluru", "Malur Kolar", "Malur Karnataka"],
  stripSchools: [],

  title: "Malur IB & IGCSE Tutors | Private Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Malur and east Bengaluru families in Kolar district: private one-to-one lessons for DP, MYP and IGCSE, with a free trial.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Malur",
  heroEyebrow: "MALUR, KOLAR DISTRICT: ONLINE IB AND IGCSE TUITION",
  heroSubtitle:
    "Malur sits on Bengaluru's eastern industrial corridor, close enough to the city's international schools to make IB and IGCSE a real option and far enough that finding a specialist tutor nearby is hard. IB Gram offers private home tuition in the only form available here: live one-to-one lessons on video, with a teacher who has coached your child's exact subject. Tutors do not visit Malur homes; that service runs only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Malur",
  imageAltText: "A student in Malur, Kolar district, revising IB Chemistry with an online tutor after the school commute",
  secondaryKeywords: [
    "IB tutor Malur",
    "IGCSE tutor Malur",
    "IB home tuition Malur",
    "IGCSE home tuition Malur",
    "IB private tuition Malur",
    "IB Maths tutor Malur",
    "IGCSE Maths tutor Malur",
    "IB Physics tutor Malur",
    "IB Chemistry tutor Malur",
    "IB Biology tutor Malur",
    "IB DP tutor Malur",
    "IB MYP tutor Malur",
    "IB PYP tutor Malur",
    "IGCSE online tuition Malur",
    "IB tutor Kolar district",
    "IGCSE tutor Narasapura",
    "online IB tutor Hoskote",
    "IB tutor Whitefield Bengaluru",
    "IB and IGCSE tutors in Malur",
  ],

  heroTrustPoints: [
    "Each tutor is picked for your child's own IB subject and level or IGCSE code",
    "All lessons are online; tutors do not visit Malur, and in-person tuition exists only in Gurugram and parts of Delhi NCR",
    "A free trial class, then rates in writing",
    "Parents receive a short written update after every lesson",
  ],
  heroStats: [
    { value: "Kannada-friendly", label: "Support for Kannada as a language subject" },
    { value: "IB + IGCSE", label: "PYP to Diploma, both boards" },
    { value: "IST", label: "Same clock as every tutor" },
    { value: "Free trial", label: "One class before any decision" },
  ],

  intro: {
    heading: "Where Malur sits between Kolar and Bengaluru, and why it matters for tuition",
    paragraphs: [
      "Malur is a taluk town of about forty thousand people in Kolar district, roughly fifty kilometres from Bengaluru and thirty from Kolar, with the Tamil Nadu border only fifteen kilometres away. At around 900 metres above sea level it shares Bengaluru's mild, tropical climate, and its Kannada-speaking population has a literacy rate above the state average. Silk, vegetables, dairy and the industrial estates around the town provide the local living.",
      "That geography produces an unusual mix of households. Engineers and managers who work in Whitefield, Hoskote or the Narasapura and Vemagal industrial areas and live in Malur for the space and price. Farm and trading families who send children to private English-medium schools. Parents with a cousin on a visa in the United States or the Gulf. All of them have heard about IB and IGCSE; few have a clear picture of what the courses ask.",
      "We could not confirm an IB or Cambridge or Edexcel school inside Malur. The nearest we could verify are in Bengaluru's east and south-east, such as Indus International School in Sarjapur for the IB and Inventure Academy in the Whitefield-Sarjapur corridor for the IGCSE. Both are a long and heavy commute from Malur, so a daily school run is a serious decision, and online tutoring often bridges the period before or after one.",
      "IB Gram is independent of the IB, Cambridge, Pearson and every school. Tutors teach and give feedback; they do not write Internal Assessments, Extended Essays, TOK essays or other coursework on a student's behalf.",
    ],
    bullets: [
      "Live one-to-one lessons on a shared digital board",
      "IB PYP, MYP, DP and CP, with Cambridge and Edexcel IGCSE",
      "Tutors matched by exact syllabus, not by postcode",
      "A free first class and a written month-one plan",
      "No tutor visits in Malur; those exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Four programmes, four different reasons a Malur family might care. The notes below say what each asks of a child and how a tutor helps from outside the school.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-12",
      description:
        "Teaching is built around themes like how the world works, explored through questions the children help to frame, and the final year ends in a self-chosen Exhibition. With no exam to practise for, support is about expressive English, curiosity and comfort with explaining a thought in two or three sentences.",
      countryNote:
        "In Malur, PYP questions come mostly from parents weighing a Bengaluru school and wanting their child confident in English before an admission interview.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Every subject is graded on criteria, and Year 5 culminates in a Personal Project. Children who learned by completing textbook exercises sometimes find open-ended assignments, with no single right answer, the toughest part of the switch.",
      countryNote:
        "Students from Karnataka State or CBSE schools in Kolar district usually need early help with science investigations and with writing a structured response in Individuals and Societies.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects are studied, three at Higher Level and three at Standard, alongside Theory of Knowledge, a 4,000-word Extended Essay and CAS. External papers fall mainly in May, and internal work is moderated by the IB.",
      countryNote:
        "Malur Diploma students who commute or board in Bengaluru often add a weekly online lesson in Maths or Physics because the daily journey eats into self-study time.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP combines two or more Diploma courses with a career-related study, a reflective project and language development. Few Indian schools offer it, and the academic courses inside are as rigorous as in the Diploma.",
      countryNote:
        "CP is rarely requested from Kolar district; if it is, support concentrates on the Diploma subjects within the combination.",
    },
  ],

  subjectsIntro:
    "A tutor has to match the course your child will actually sit. That means level, variant and, for languages, which language, before the conversation turns to evenings and weekends.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof, a natural partner to Karnataka's engineering ambitions, with the exploration begun in good time." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data, probability and modelling with a graphic calculator, suited to business, design and life-science aims." },
    { name: "IB Physics", levels: "HL / SL", description: "From mechanics to fields and modern physics, with rehearsal of unfamiliar data questions and a clean experimental write-up." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, energetics, kinetics and organic chemistry, with the data booklet a working tool from week one." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell and molecular biology to ecology, with each command term treated as an instruction on how to answer." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams that argue a case, tied to examples from India's manufacturing and IT economy." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case answers using the firm named, and an internal project that can draw on a family or local business." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Reading unseen texts closely, comparing set works and speaking about them in the oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithmic thinking, systems and a documented program for the internal assessment, a good fit for Bengaluru's tech households." },
    { name: "IB Psychology", levels: "HL / SL", description: "Named studies recalled precisely and evaluated inside a clear argument." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, data handling and a fieldwork investigation." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and structured essays." },
    { name: "IB Kannada B", levels: "SL / HL", description: "Reading unfamiliar text types, formal writing and conversation, suited to students who speak Kannada at home, subject to tutor availability." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation on knowledge questions and the exhibition, with the essay left to the student." },
  ],

  igcseSubjectsIntro:
    "Core or Extended is settled first, because one code can hide two papers. Then the plan counts back from the series the school or private entry names: February-March, May-June or October-November for Cambridge, January, May-June or October for Edexcel.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra, geometry and data handling, where steps shown are marks earned." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, logarithms and vectors, ahead of IB Analysis and Approaches." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, electricity, waves and the atom, with the practical-skills paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Reactivity, the mole, electrolysis and organic compounds." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, inheritance, body systems and ecology." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, firms and government with tidy diagrams." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Data, networks and pseudocode traced by hand." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Marketing, operations and finance applied to the case." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "All four skills, with extra time on formal writing for Kannada-medium students." },
    { name: "IGCSE Kannada as a Foreign Language", levels: "Grade 9-10", description: "Language practice for students who want Kannada on the transcript, subject to availability." },
  ],

  regionsTitle: "Malur and the Kolar-Bengaluru corridor our online tutoring reaches",
  regionsIntro:
    "Everything happens by video, so geography is context. These are the places Malur-area students actually live in, commute to or look toward, with a note on what each means for school and study time.",
  regions: [
    { name: "Malur town", note: "The taluk headquarters on the Bengaluru side of Kolar, with Kannada-medium and English-medium schools and a busy tuition scene for SSLC and PUC." },
    { name: "Narasapura", note: "A KIADB industrial area in Kolar district, home to manufacturing employees whose families often look at Bengaluru schools." },
    { name: "Vemagal", note: "Another industrial area on the Kolar side, popular with engineers and plant staff." },
    { name: "Hoskote", note: "A town on the Bengaluru outskirts, a common transit point for Malur families commuting toward Whitefield and KR Puram." },
    { name: "Whitefield", note: "Bengaluru's IT belt, where many Malur-area parents work and where international schools cluster." },
    { name: "KR Puram", note: "A big junction on the eastern edge of Bengaluru, which shapes the timing of any commute by road or rail." },
    { name: "Sarjapur", note: "A southeast Bengaluru area with several IB and international schools, a long but real option for some families." },
    { name: "Bangarpet", note: "A neighbouring taluk town toward Kolar Gold Fields, with its own small-town schooling culture." },
    { name: "Kolar Gold Fields (KGF)", note: "The historic mining town to the east, with an English-medium school tradition from the gold-mining era." },
    { name: "Kolar", note: "The district headquarters, with colleges and the Sri Devaraj Urs medical university." },
  ],

  schoolDisclaimer:
    "Schools are named only to describe what exists and where students go. IB Gram is independent of every school listed, the IB, Cambridge and Pearson, and no partnership, referral fee or endorsement is involved.",
  schoolClusters: [
    {
      city: "Malur and Kolar district",
      note: "We could not confirm any school in Malur or Kolar district that teaches the IB or a Cambridge or Edexcel IGCSE. Local schools follow the Karnataka State Board or CBSE, so an international syllabus normally means a Bengaluru school.",
      schools: [],
    },
    {
      city: "Nearby: Bengaluru east and south-east",
      note: "Two Bengaluru schools we could verify: Indus International School in Sarjapur, which uses the IB, and Inventure Academy in the Whitefield-Sarjapur corridor, which offers Cambridge IGCSE with A and AS Levels. Both are a long commute from Malur, and admission rules change.",
      schools: ["Indus International School, Sarjapur", "Inventure Academy, Whitefield-Sarjapur"],
    },
    {
      city: "Nearby: Bengaluru wider",
      note: "Bengaluru has one of India's largest clusters of IB schools, and families who relocate within the city often choose by commute first.",
      schools: ["The International School Bangalore", "Stonehill International School"],
    },
  ],

  modesIntro:
    "All three are the same live, one-to-one video lesson with an India-based tutor; what changes is tempo. A tutor travelling to a Malur home is not part of any of them, because in-person tuition is offered only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Weekly online sessions",
      description:
        "A standing weekly appointment, often straight after the school journey, in which one tutor takes the course in sequence and revisits weak spots.",
      bullets: [
        "One tutor all term",
        "Past-paper practice in every class",
        "Notes after each lesson",
        "Easy to pause around Dasara and Deepavali",
      ],
    },
    {
      title: "Targeted exam weeks",
      description:
        "Lessons bunched closer together ahead of a mock or series, with the whole effort aimed at topics that are still costing marks.",
      bullets: [
        "Timed questions marked on screen",
        "Plan agreed in advance",
        "Suited to private candidates",
        "Stops when the exam ends",
      ],
    },
    {
      title: "Home tuition by video",
      description:
        "Malur parents often type home tuition into a search box. The honest equivalent is a private teacher reaching the student at home by screen: no extra commute and no visitor at the door, because house visits run only in Gurugram and parts of Delhi NCR.",
      bullets: [
        "A laptop, headphones and a quiet corner",
        "Parent welcome at the trial",
        "A different tutor if the fit is wrong",
        "Quote in writing before booking",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools are within reach of Malur, and who uses them?",
      paragraphs: [
        "Inside Malur there is nothing we can verify, so the question becomes how far a family is willing to go. Bengaluru's international schools sit in the east and south-east, which for a Malur household means a drive of an hour or more each way on a good day. Indus International School in Sarjapur runs the IB, and Inventure Academy offers Cambridge IGCSE with A and AS Levels in the Whitefield-Sarjapur corridor. Admissions, fees and programmes change, so every family should confirm directly.",
        "Because of the distance, many Malur families do one of three things. Some move into Bengaluru's eastern suburbs when a child reaches Class 6 or 9. Some use a boarding or a school bus arrangement. Others stay in Malur and plan a later move, using the intervening years to prepare.",
        "That last group is where tutoring has the most effect. A Class 8 student from a Kolar-district school who will join an IGCSE or IB school in Class 9 or 11 meets a different style of question. Starting early removes the shock.",
        "Another group arrives from the opposite direction: students already in a Bengaluru international school who live in Malur and lose study time to the road. A fixed weekly online lesson is easier to protect than a travelling tutor.",
        "Because Malur has no ecosystem of these syllabuses, tutors are matched nationally on specification experience and trial-lesson quality.",
      ],
      table: {
        caption: "How Malur-area families approach IB and IGCSE",
        columns: ["Path", "What it involves", "Where tutoring helps"],
        rows: [
          ["Daily commute to a Bengaluru school", "Long road journey east or south-east", "A fixed weekly slot that survives traffic"],
          ["Move to east Bengaluru", "Relocation at Class 6, 9 or 11", "Bridging old and new syllabus before the move"],
          ["Boarding for the Diploma", "Residential school outside the city", "Strong Maths and Science before Class 11"],
          ["Private IGCSE entry", "Home-based study for Cambridge or Edexcel", "Teaching the full specification"],
        ],
      },
    },
    {
      heading: "How do Karnataka's SSLC and PUC compare with IB and IGCSE?",
      paragraphs: [
        "SSLC at Class 10 and the second PUC at Class 12 are built around prescribed textbooks and a fixed pattern of short and long answers, with strong emphasis on accurate recall. Students who prepare for KCET, JEE and NEET add speed and problem-solving on top.",
        "IGCSE and IB papers ask for something else in addition: explaining a method in words, applying a concept to data the student has not seen, and writing a sustained argument. A Kolar-district student who excels at recall may need time to adjust to a case study or an unfamiliar graph.",
        "The results also read differently. SSLC and PUC give marks and percentages, IGCSE gives A* to G and the Diploma gives a total out of 45. Universities in India and abroad convert these in their own ways.",
        "None of these systems is easier. The most useful first step is learning how a question is built and what a complete answer looks like.",
      ],
      table: {
        caption: "SSLC and PUC, CBSE, IGCSE and the IB Diploma compared",
        columns: ["Point", "SSLC / PUC / CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Stage", "Class 10 and 12 boards", "Class 9-10", "Class 11-12"],
          ["Result", "Marks and percentage", "Grades A* to G", "Points out of 45"],
          ["Question style", "Textbook-led", "Structured and applied", "Applied, with essay and investigation"],
          ["Near Malur", "Widely available", "Not confirmed in town", "Not confirmed in town"],
          ["Entrance link", "KCET, JEE, NEET", "Leads to IB, A Level or PUC", "CUET-UG, AIU equivalence, overseas"],
        ],
      },
    },
    {
      heading: "What goes into the cost of IB and IGCSE tuition for a Malur student?",
      paragraphs: [
        "No figure is printed here, because a number with no subject attached would mislead. A written quote reaches you after you tell us the course, the level and how often you want to meet.",
        "Level and subject come first: Higher Level Chemistry takes more specialist preparation than a Class 6 MYP lesson. How often and how long you meet comes next, followed by the tutor's experience with the exact specification.",
        "Malur families save on something Bengaluru families pay for. The tutor comes by screen, so there is no extra hour on the Hoskote road for a visiting teacher, and no centre fee in Whitefield. The quote is the whole bill.",
        "A free first class lets you judge the value before any money changes hands.",
      ],
      bullets: [
        "Programme, level and subject",
        "Tutor's experience with that specification",
        "Number and length of sessions per week",
        "No travel cost, because lessons are online",
      ],
    },
    {
      heading: "Online tutor, Bengaluru coaching centre or self-study: what suits an IB student in Malur?",
      paragraphs: [
        "An online subject specialist usually gives the best return for IB and IGCSE. Bengaluru has coaching centres for the IB and IGCSE, but reaching them from Malur means a long road journey on top of a school day.",
        "Self-study with past papers is possible for a disciplined student, but marking one's own script is unreliable. Students are generous to themselves, and the same slip repeats across papers.",
        "A local general tutor in Malur is easy to hire but rarely trained on IB or Cambridge mark schemes. Online widens the pool to the whole country without adding a single kilometre.",
        "The trade-off is a stable connection. Heavy rain in the north-east monsoon can interrupt broadband, so a backup hotspot is wise.",
      ],
      table: {
        caption: "Study routes for a Malur student",
        columns: ["Route", "Strength", "Limit"],
        rows: [
          ["Online one-to-one tutor", "Syllabus-specific live feedback", "Needs a stable connection"],
          ["Bengaluru centre", "Peers and a set routine", "Long commute from Malur"],
          ["Local general tutor", "Convenience", "Seldom IB or Cambridge trained"],
          ["Self-study", "Low cost", "No expert marking"],
        ],
      },
    },
    {
      heading: "When are the exams, and how does the Malur year shape study?",
      paragraphs: [
        "IB Diploma papers fall mainly in May, with some schools sitting in November. Cambridge IGCSE runs February-March, May-June and October-November, and Edexcel January, May-June and October. A private candidate registers through an approved centre, almost certainly in Bengaluru.",
        "Climate helps here more than in most of India. At 900 metres Malur rarely passes thirty-seven degrees and stays pleasant for much of the year, so afternoon lessons are possible even in summer. The south-west monsoon from June is mild, and the north-east monsoon in October and November can bring heavy rain that affects roads and power.",
        "The festival calendar sets the real gaps: Ugadi in spring, Dasara in autumn, Deepavali and the Sankranti harvest festival in January, along with local temple fairs. Exam preparation planned across Dasara or Deepavali tends to lose a week.",
        "A sensible plan starts heavy revision ten weeks before each paper and keeps the last fortnight for timed practice only.",
      ],
      table: {
        caption: "Exam calendar and the Malur year",
        columns: ["Months", "Exam events", "Local factor"],
        rows: [
          ["January-February", "Edexcel January papers, mocks", "Sankranti, cool pleasant mornings"],
          ["March-April", "Cambridge results, IB preparation", "Ugadi, warm days"],
          ["May-June", "IB May exams, Cambridge May-June", "Warm but rarely extreme, afternoon lessons possible"],
          ["July-September", "IB results, new session", "Light monsoon showers"],
          ["October-November", "Autumn series, IB November", "Dasara, Deepavali and north-east monsoon rain"],
        ],
      },
    },
    {
      heading: "Where can a Malur IB or IGCSE student study next?",
      paragraphs: [
        "Karnataka offers an unusually rich set of options within a day's reach: the Indian Institute of Science, Bangalore University, RV College of Engineering, PES University, BMS College of Engineering, Christ University, St Joseph's and Jain University in Bengaluru, and the Sri Devaraj Urs Academy of Higher Education in Kolar. Entry is a mix of KCET, JEE, NEET, CUET-UG and institutional tests, and IB students should read each year's notice before choosing subjects.",
        "The Association of Indian Universities issues equivalence for the IB Diploma, which many institutions recognise, although each sets its own subject requirements and cut-offs.",
        "Overseas, IB and IGCSE are widely understood. The UK uses predicted grades, Canada and Australia publish conversion tables, and US colleges consider the Diploma with test scores where required. Many Bengaluru IT families already have relatives in these countries.",
        "A tutor can strengthen the subjects a course needs, but admission can never be promised. The best moment to plan is before Class 11 subject selection.",
      ],
      bullets: [
        "IISc, Bangalore University, RVCE, PES and others through entrance routes",
        "AIU equivalence for the IB Diploma",
        "CUET-UG for central universities",
        "UK, Canada, Australia and US pathways",
      ],
    },
    {
      heading: "What does one IB Maths or Science lesson look like on video?",
      paragraphs: [
        "Picture a Class 11 student who has just stepped off the bus from Whitefield. The laptop is open on the desk at home and the tutor, say in Pune, asks which question beat them last night. They share it; the tutor reads the working, pauses at the exact line where it went wrong and rebuilds that step with them, then sets two cousins of the same problem.",
        "The close of the hour is a short timed question, marked while the student waits. Whatever was written on the shared board is saved, and a few lines reach the parents that evening.",
        "The two Maths courses draw different students. Analysis and Approaches suits those who relish calculus and algebra, while Applications and Interpretation suits those heading toward business, design or biology, where statistics and modelling count for more.",
        "For Physics, Chemistry and Biology the same rhythm holds, with extra time on the investigation: picking variables, handling uncertainty, plotting results and drawing a conclusion. Shared data sets stand in for apparatus. Over several weeks a tutor finds the handful of topics that cost the most marks and spends the hours there.",
      ],
    },
    {
      heading: "Which IGCSE tier and subjects fit a Malur student?",
      paragraphs: [
        "A tier is a ceiling. Extended reaches every grade up to A* and is the sensible route for anyone who may carry the subject into IB Higher Level or A Level; Core stops lower but is kinder to a student who needs a dependable pass. Teachers choose inside a school, whereas a private candidate states the tier on the entry form.",
        "Mathematics is where the choice bites hardest. Extended Maths plus Additional Maths leaves a Class 11 student at ease with calculus on the first day of a Diploma course. Someone who struggles with algebra is usually better off with a clean Core grade than a battered Extended one.",
        "Look to the destination when ticking subject boxes. Engineers and computer scientists gather Maths, Physics and Computer Science; doctors need Biology and Chemistry; children heading for business or finance can pick Economics, Business Studies and Accounting.",
        "Cambridge and Edexcel are both well regarded, and teaching follows the specification written on the entry.",
      ],
      table: {
        caption: "IGCSE choices by ambition",
        columns: ["Ambition", "Tier", "Subjects"],
        rows: [
          ["Engineering or computing", "Extended", "Maths, Additional Maths, Physics, Computer Science"],
          ["Medicine or biosciences", "Extended", "Biology, Chemistry, Maths"],
          ["Business or finance", "Extended or Core", "Economics, Business Studies, Accounting"],
          ["A secure overall pass", "Core", "Core papers throughout"],
        ],
      },
    },
  ],

  tutorsIntro:
    "Below are the sorts of tutors a Malur family might meet, from primary years through the Diploma and IGCSE, each chosen for one exact course. Video is the only teaching format available for Malur.",

  process: [
    { title: "Write to us", description: "Say which course, at what level, how the last test went and which evenings survive the commute from Malur." },
    { title: "Meet the shortlist", description: "Expect two or three names with a few lines on the exam papers each has taught." },
    { title: "Sit one trial class", description: "Pick a topic that has been frustrating your child; there is no fee and no follow-up pressure." },
    { title: "Settle a first month", description: "We write down what will be covered, the weekly hour and how parents will hear back." },
    { title: "Reassess regularly", description: "Every few weeks we compare progress with the target, and swap the tutor if the chemistry is poor." },
  ],

  whyPoints: [
    { title: "Fits a day already stretched by travel", description: "A lesson that comes to the laptop saves the extra hour on the Hoskote road a visiting teacher would cost." },
    { title: "Syllabus before geography", description: "Tutors are shortlisted on whether they have taught your child's actual paper, wherever they live." },
    { title: "See it before you buy it", description: "The unpaid first class tells you more than any profile page." },
    { title: "Guidance, not authorship", description: "Coaching and marking of practice answers are fine; writing an IA, Extended Essay or TOK essay is off the table." },
    { title: "A paper trail for parents", description: "Each lesson closes with a brief written summary sent to the family." },
    { title: "Nothing keeps you tied", description: "Take a pause, change tutor or stop; no fixed term applies." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE tutor in Malur?", answer: "None that we could verify works in the town itself, so the dependable option is a specialist who teaches over video. Your child is paired with someone who has already coached the same paper, and lessons run live on Indian time. Many of our tutors are based in Bengaluru or Pune, but experience with the specification is the deciding factor." },
    { question: "Does anyone come to the house for IB or IGCSE tuition in Malur?", answer: "No. Tutors stay online for Malur, because visiting students at home is arranged only in Gurugram and parts of Delhi NCR. What a Malur family does get is private one-to-one teaching at home by screen, with a shared digital board standing in for paper and pen." },
    { question: "What will IB or IGCSE tuition cost?", answer: "Programme, level, subject and tutor experience decide the rate; Higher Level Diploma Physics and Class 7 MYP Science, for example, are quoted differently. You see the number in writing before agreeing, and because the tutor never travels there is no extra charge for the Hoskote road or any centre." },
    { question: "Which schools near Malur teach IB or IGCSE?", answer: "Not within the town, as far as we could confirm. In Bengaluru we checked Indus International School at Sarjapur, which runs the IB, and Inventure Academy on the Whitefield-Sarjapur side, which offers Cambridge IGCSE. Both are a heavy commute, and programmes and admission terms should be confirmed with the school." },
    { question: "Can my child take IGCSE as a private candidate from Kolar district?", answer: "That is possible. The papers are written at a Cambridge or Pearson centre approved for external candidates, in practice somewhere in Bengaluru, while preparation happens through online lessons. Registration closes well ahead of each exam series, so call the centre about fees and dates early." },
    { question: "Is the trial lesson genuinely free?", answer: "Yes. It is a full working class on a topic of your choice, and you can sit alongside. If the tutor's pace or style does not suit your child, we propose another person. No invoice is raised for the trial." },
    { question: "Will the tutor do my child's IA or Extended Essay?", answer: "Never. A tutor can unpack the marking criteria, talk a research question into shape, check whether a method is sound and comment on a draft the student has written. The finished IA, Extended Essay or TOK essay has to come from the candidate alone." },
    { question: "My child studies in Kannada medium. Can they cope with English-medium lessons?", answer: "Usually, with some patience. Exams are set in English, so lessons are too, but a tutor can restate a difficult idea in Kannada or Hindi when that helps if you mention it in the brief. Spoken confidence typically grows within a term of weekly classes." },
    { question: "What happens if the broadband fails in heavy rain?", answer: "Keep the laptop charged and a phone hotspot nearby, since October and November downpours can disrupt connections around Kolar. The tutor makes up lost minutes in another slot and still sends notes on what was covered." },
    { question: "Can a student from SSLC or CBSE move to IGCSE or IB?", answer: "Plenty do. Rarely is the content the barrier; instead it is how questions are phrased and how much reasoning an answer should show. The first weeks go on words like justify, compare and evaluate, then on genuine past questions marked against the official scheme." },
    { question: "When is the best time to start?", answer: "At the start of the course if possible, so Class 9 for IGCSE and Class 11 for the Diploma, because early weeks are when gaps are cheapest to fix. Joining later still pays off; even six to eight weeks before one paper can tighten exam technique." },
    { question: "What time of day works for Malur families?", answer: "Weekday evenings after the school run suit most, and weekend mornings work too. Malur's mild climate means afternoons are usable even in summer. Around Dasara, Deepavali and Sankranti, dates are agreed in advance so that revision does not collapse." },
    { question: "How will we know whether the lessons are working?", answer: "A short note arrives after each class naming the topic, the strengths and the next tasks. Every few weeks a longer review compares your child's marks with the grade being aimed for. Parents may also join the trial class to see the teaching style first-hand." },
    { question: "What if my child and the tutor do not click?", answer: "Tell us and we arrange a replacement at no cost. Plenty of pairings fail on pace or manner rather than ability. Nobody signs up for a fixed term, so you can also pause for exams and restart later." },
    { question: "Does IB Gram have any connection with a school, the IB or Cambridge?", answer: "None whatsoever. IB Gram works independently, and any mention of the IB, Cambridge, Pearson or a named school only states a fact. To arrange a trial, email support@ibgram.com or message +91 7439 368 115 on WhatsApp." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring in Bengaluru", href: "/bengaluru/", description: "The big-city picture next door, with its cluster of international schools." },
    { label: "IB tutors across India", href: "/india/", description: "An overview of how the service works from one city to the next." },
    { label: "IB and IGCSE home tuition in Gurugram", href: "/gurgaon/", description: "The only area where the tutor actually arrives at the door." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, levels and the core: the two Diploma years in outline." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criterion-based grading and the Year 5 Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led primary learning and the closing Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "A smaller Diploma selection beside a career-focused study." },
    { label: "IGCSE guide", href: "/igcse/", description: "How to pick a board, a tier and the right set of papers." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches against Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Look through tutor profiles before asking for an introduction." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your details and request a trial hour." },
  ],

  closingHeading: "Ask for a free IB or IGCSE class in Malur",
  closingBody:
    "Write with your child's course, current marks and the hours free once the Hoskote-road commute is over. We reply with a suggested tutor, a note on their teaching history and some trial times. Our address is support@ibgram.com and our WhatsApp number is +91 7439 368 115.",
};
