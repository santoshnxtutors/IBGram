import type { CitySeoPage } from "../types";

/**
 * Raver is a banana-growing taluka town in Jalgaon district. No IB or Cambridge school there could be
 * confirmed, so stripSchools is empty and the clusters point to Pune and Mumbai using names already
 * checked on the Aurangabad and Nashik pages.
 */
export const raver: CitySeoPage = {
  slug: "raver",
  countryName: "Raver",
  countryNameLong: "Raver, Maharashtra",
  demonym: "Raver",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings after the day's work in the banana fields and market has settled, with Sunday mornings left free for longer practice",
  lastUpdated: "2026-09-21",
  state: "Maharashtra",
  stateCode: "IN-MH",
  geo: { latitude: 21.2431, longitude: 76.0333 },
  wikipedia: "https://en.wikipedia.org/wiki/Raver,_Maharashtra",
  alternateNames: ["Raver Jalgaon", "Raver Maharashtra", "Raver taluka", "Raver Khandesh"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Raver | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Raver students in Jalgaon district: live one-to-one online lessons from home, subject-matched tutors and a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Raver",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR RAVER, JALGAON DISTRICT",
  heroSubtitle:
    "If you are looking for private tuition at home in Raver for an IB or IGCSE student, lessons run online, one to one, with a tutor matched to the exact course. Nobody from IB Gram visits homes in Raver, since home visits exist only in Gurugram and parts of Delhi NCR. What a Raver family gets is the same private attention on a laptop, timed to a farming town's day. Send the programme, subject and exam session and we book a free trial lesson.",
  primaryKeyword: "IB and IGCSE tutors in Raver",
  imageAltText: "Raver student studying IGCSE Chemistry at home during a live one-to-one online tuition lesson",
  secondaryKeywords: [
    "IB tutor in Raver",
    "IGCSE tutor in Raver",
    "IB home tuition Raver",
    "IGCSE home tuition Raver",
    "IB private tuition Raver",
    "IB Maths tutor Raver",
    "IGCSE Maths tutor Raver",
    "IB Physics tutor Raver",
    "IB Chemistry tutor Raver",
    "IB Biology tutor Raver",
    "IB DP tutor Raver",
    "IB MYP tutor Raver",
    "IB PYP tutor Raver",
    "IGCSE online tuition Raver",
    "IB tutor Raver Jalgaon",
    "IGCSE tutor Savda",
    "IB online classes Jalgaon district",
    "IB tuition Khandesh",
  ],

  heroTrustPoints: [
    "Live one-to-one lessons, not recordings or crowded batches",
    "Tutors with experience of IB DP, MYP, PYP and Cambridge or Edexcel IGCSE",
    "Slots that respect banana-season work days and market hours",
    "Free trial lesson and a short written note after each session",
    "A different tutor at no charge if the first one is not right",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before any payment" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "International syllabus help for a banana-belt town",
    paragraphs: [
      "Raver is a taluka town in Jalgaon district, in the Khandesh country of north Maharashtra, known above all for bananas. The taluka grows most of the district's crop, and trucks from Savda and the villages around carry it to markets across India. About twenty-five kilometres north is Burhanpur across the Madhya Pradesh border, and Jalgaon city lies some sixty kilometres away. Children here mostly study the Maharashtra State Board or CBSE and aim for engineering, medicine or a degree at the North Maharashtra University.",
      "A few families want something else. They may be growers and traders whose children plan to study abroad, parents working with the railway or a bank who have lived in a metro, or relatives of people settled overseas. Their child follows the IB through an online school, studies for Cambridge or Edexcel IGCSE, or is preparing to move to a campus in Pune or Mumbai. For those students, the nearest tutor who has handled IB Mathematics Paper 2 may be several hours away.",
      "That is why we run IB and IGCSE tutors in Raver as a fully online service. The tutor teaches live from India on Indian time, the child sits at home, and the written note after each class keeps parents informed. We are an independent service, not part of the IB, Cambridge, Pearson or any school, and our tutors coach and explain but do not write assessments, essays or coursework for students.",
    ],
  },

  programmesIntro:
    "In a farming taluka the IB programmes tend to arrive from outside, through a relocation plan or an online school. Tutoring changes with the stage a student has reached.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Units of inquiry that connect subjects, closing with an Exhibition. A tutor's role is light: fluent reading, number confidence and talking through ideas in English.",
      countryNote:
        "A Raver child usually speaks Marathi or Ahirani at home, so PYP English gains from a short, friendly session that builds spoken confidence.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups assessed against criteria, plus the Personal Project. Tutors teach students to read a task closely and structure answers to the descriptors.",
      countryNote:
        "A student arriving from a State Board school faces criterion marking for the first time. A weekly lesson with an MYP-experienced tutor makes the first term easier.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects plus Theory of Knowledge, the Extended Essay and CAS. Tutoring supports the examined papers and the method of internal assessments, never writing them.",
      countryNote:
        "A Diploma student near Raver rarely has a Higher Level specialist locally, so the private tutor often carries the demanding parts of the course.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A mix of DP courses and a career-related study with a reflective project. Tutors support the DP courses and academic English.",
      countryNote:
        "CP is hardly offered in this part of Maharashtra. We take requests case by case and match a tutor to the chosen DP courses.",
    },
  ],

  subjectsIntro:
    "Every subject tutor is picked for the precise course and level, and for the patience that students coming out of Marathi-medium classrooms need in the first months.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, vectors and reasoning, with Paper 1 skills built in small regular practice sessions." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and calculator-based problem solving, including how to present method clearly." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics through waves and fields, with data-based questions and practical write-ups." },
    { name: "Chemistry", levels: "SL / HL", description: "Quantitative chemistry, kinetics, equilibrium and organic routes, with focus on calculation slips." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology to ecology, with correct terminology and structured long answers." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and global economy, with agricultural price and supply examples that suit a farming region." },
    { name: "Business Management", levels: "SL / HL", description: "Case-study reading, finance calculations and tools applied to unseen organisations." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and exam pseudocode." },
    { name: "Psychology", levels: "SL / HL", description: "Key studies, evaluation language and extended-response structure." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis, comparison and the individual oral, taught as technique." },
    { name: "Marathi A / Hindi B", levels: "SL / HL", description: "Literary analysis in Marathi A for native speakers, or structured expression in Hindi B." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Systems, water and land use, a good match for a student who knows irrigated farming first-hand." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion practice on knowledge questions and the exhibition, with coaching on structure only." },
  ],
  igcseSubjectsIntro:
    "IGCSE tutoring spans Cambridge and Pearson Edexcel. The Core or Extended tier is decided early because it sets the highest grade available.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics, with tier choice discussed openly." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "Calculus and functions for students heading to IB Mathematics AA or A Level." },
    { name: "Physics (0625 / 4PH1)", levels: "Core / Extended", description: "Electricity, forces and waves, with practice for the practical-skills paper." },
    { name: "Chemistry (0620 / 4CH1)", levels: "Core / Extended", description: "Moles, reactivity, organic chemistry and analysis questions." },
    { name: "Biology (0610 / 4BI1)", levels: "Core / Extended", description: "Cells, inheritance, plant biology and ecosystems, with exam-style description of experiments." },
    { name: "Computer Science (0478)", levels: "Single tier", description: "Programming logic, databases and trace tables." },
    { name: "English as a Second Language", levels: "Single tier", description: "Reading, directed writing and speaking, shaped for Marathi-speaking students." },
    { name: "Hindi as a Second Language (0549)", levels: "Single tier", description: "Comprehension, letters and essays to the board's expectations." },
    { name: "Economics (0455) and Business Studies (0450)", levels: "Single tier", description: "Definitions, calculations and case-based data response." },
  ],

  regionsTitle: "Raver and the towns around it that we serve",
  regionsIntro:
    "Because every lesson is online, location matters only for connection, power and timing. This is what we plan around in each part of the area.",
  regions: [
    { name: "Raver town", note: "The taluka town itself, where most coaching and private schooling in the area sits; broadband and mobile data are generally dependable." },
    { name: "Raver railway station area", note: "About four kilometres from the town on the Bhusawal to Khandwa line; railway families live here and are used to postings and transfers." },
    { name: "Savda", note: "A banana transport hub; lessons are best set outside the evening loading rush." },
    { name: "Nimbhora and nearby villages", note: "Villages along the rail line with patchy signals; a second data connection is a sensible backup." },
    { name: "Pal and the Satpura foothills", note: "A quiet hill area in Raver taluka where connectivity can be weak and evening lessons are best." },
    { name: "Faizpur", note: "A larger market town in the district whose families often look at Jalgaon and Pune for schooling." },
    { name: "Yawal", note: "A forest-edge town in Jalgaon district; students there are well suited to the environmental systems course." },
    { name: "Bhusawal", note: "A railway junction town with a strong railway-employee community and a steady stream of transfers." },
    { name: "Jalgaon city", note: "The district headquarters about sixty kilometres away, with the North Maharashtra University and the bigger school choice." },
    { name: "Burhanpur, Madhya Pradesh", note: "Just across the state border; students there can take the same online lessons and follow the same timetable." },
  ],

  schoolClusters: [
    {
      city: "Raver and Jalgaon district",
      note: "We could not confirm an IB or Cambridge school in Raver or nearby, so local options are limited. Students here mostly study online, as private IGCSE candidates, or move for the senior years.",
      schools: [],
    },
    {
      city: "Nearby: Pune",
      note: "Pune is the usual destination for families in north Maharashtra who choose a dedicated IB or Cambridge campus, with boarding being a frequent choice.",
      schools: ["Mahindra International School", "Symbiosis International School", "Indus International School, Pune"],
    },
    {
      city: "Nearby: Mumbai",
      note: "Mumbai suits families with business or professional ties to the city; the journey is long, so relocation is often part of the plan.",
      schools: ["Dhirubhai Ambani International School", "Oberoi International School"],
    },
  ],
  schoolDisclaimer:
    "We are an independent tutoring service. The Pune and Mumbai schools are named only because they are publicly known to offer international curricula, and none of them is connected with us or recommended by us. Please confirm programmes and admission with each school.",

  tutorsIntro:
    "Our tutors teach from across India on Indian time. A Raver student does not have to take whoever lives in Jalgaon district, because the match can be made on subject depth and teaching style alone.",

  modesIntro:
    "In Raver the format is online, and we try to make it feel like a private lesson at home rather than a webinar.",
  modes: [
    {
      title: "Private online home tuition",
      description: "One tutor, one student, live on video with a shared digital board.",
      bullets: [
        "No tutor visits in Raver; home visits run only in Gurugram and parts of Delhi NCR",
        "The student works from a quiet corner of the house with a laptop",
        "Handwritten working is photographed and shared in the lesson",
        "A note after each class tells parents what was covered",
      ],
    },
    {
      title: "Exam-season intensive",
      description: "More frequent lessons in the weeks before a May or November session.",
      bullets: [
        "Three or four lessons a week for a month or so",
        "Past papers marked against the published scheme",
        "Weak topics rebuilt from mock results",
        "A pause before the first paper for rest",
      ],
    },
    {
      title: "Steady weekly support",
      description: "A single weekly lesson for a subject through the year.",
      bullets: [
        "Same tutor all year for continuity",
        "Suited to MYP and the first Diploma year",
        "Moves easily around local festivals and exams",
        "Free trial before the first paid week",
      ],
    },
  ],

  sections: [
    {
      heading: "What are the realistic ways to study IB or IGCSE near Raver?",
      paragraphs: [
        "A student in Raver can reach an international syllabus in a handful of ways, and it helps to be clear about each before choosing. The first is an online international school, where classes run on a screen and the student sits at home. The second is a move to a school in Pune, Mumbai or another city, often as a boarder. The third is sitting IGCSE as a private candidate through an approved exam centre, which means studying largely at home.",
        "Each has an effect on tutoring. An online school gives structure but little individual feedback, so the tutor fills the gap. A boarder returns home in holidays wanting repair work before the new term. A private candidate needs the most coverage, because there is no school teacher to set the pace across the whole syllabus, and the practical papers need extra care.",
        "We are not in a position to recommend one route as better than another. What we can say is that the route should be chosen around the child's age, language comfort and the family's plans for university. Younger children often settle better with home and a tutor. Older students nearing the Diploma sometimes gain from a campus with laboratories and a peer group.",
        "A first conversation with us is free and takes a few minutes. Tell us where your child is now, which exam session they are aiming for, and what subjects they take, and we will say honestly how much support is realistic.",
      ],
    },
    {
      heading: "Maharashtra State Board, CBSE, IB and IGCSE side by side",
      paragraphs: [
        "Most children in Raver study the Maharashtra State Board, where Class 10 and 12 results feed into MHT-CET, NEET and the state's college counselling. CBSE schools run a similar pattern with national entrance tests. The IB and IGCSE ask for something different: explaining reasoning, working with data, and writing in English.",
        "Parents sometimes worry that moving to IB or IGCSE closes doors in India. It does not, but the paperwork needs care. The Association of Indian Universities issues equivalence for IB and for IGCSE plus A Level combinations, and CUET-UG accepts such students on stated subject combinations.",
      ],
      table: {
        caption: "Boards compared for a Raver household",
        columns: ["Board", "How it is assessed", "Language of study", "Common next step"],
        rows: [
          ["Maharashtra State Board", "Final written papers in Class 10 and 12", "Marathi, Hindi or English", "MHT-CET, NEET-UG, state counselling"],
          ["CBSE", "Board exams with internal marks", "English or Hindi", "JEE Main, NEET-UG, CUET-UG"],
          ["IB Diploma", "Six subjects, internal assessments, final papers", "English", "Study abroad, Indian private universities, CUET-UG with equivalence"],
          ["Cambridge or Edexcel IGCSE", "Subject papers at Core or Extended tier", "English", "IB Diploma or A Level, then university"],
        ],
      },
    },
    {
      heading: "What shapes the cost of IB and IGCSE tuition for a Raver student?",
      paragraphs: [
        "Several things decide the rate for IB and IGCSE tuition in Raver: the subject and level, the tutor's experience, the number of lessons per week, and how long the arrangement lasts. We give the rate in writing before you book. There is no published price list, since a Class 6 English slot and Higher Level Chemistry are different jobs.",
        "The online format removes travel and lets us choose the tutor on subject fit rather than distance. That matters in a taluka town, where the nearest specialist could otherwise be sixty kilometres away.",
        "Families spend sensibly when they time lessons carefully. A new MYP student gains most from a weekly lesson in the first term. A Diploma student benefits from a focused block before mocks, then another before the final session. Many Raver families start with one subject, commonly Mathematics, and add a science after a month.",
      ],
      bullets: [
        "Subject and level: Higher Level Mathematics and the sciences usually need more experienced tutors",
        "Programme: PYP, MYP, DP and IGCSE tutors have different backgrounds",
        "Frequency: weekly lessons cost less in total than an exam-month intensive",
        "Timing: late requests near a session leave fewer tutors free",
        "Commitment: a longer engagement is easier to plan for both sides",
      ],
    },
    {
      heading: "Online tutor, local class or self-study in Raver?",
      paragraphs: [
        "Raver families usually compare three things: a local coaching class, a private online tutor and studying alone from videos. Local classes are strong for state board and entrance exams, but rarely teach IB or IGCSE papers. Videos suit revision of something already understood. A live private tutor gives feedback on how an answer would actually be marked.",
        "The comparison that follows is candid about the weak side of online tutoring too: it asks for a quiet corner and a dependable signal, and it cannot stand in for hands-on lab work.",
      ],
      table: {
        caption: "Study options for an IB or IGCSE student in Raver",
        columns: ["Option", "Strength", "Limit in Raver", "Best for"],
        rows: [
          ["Live private online tutor", "Exact syllabus, marked practice, flexible timing", "Needs a steady connection; no wet lab", "Most IB and IGCSE students"],
          ["Local coaching class", "Peers and a fixed timetable", "Built for state board and entrance tests", "Students also aiming at MHT-CET or NEET"],
          ["Self-study with videos", "Low cost, any time", "No feedback on marking, easy to drift", "Revision of known topics"],
          ["School in a larger city", "Labs, peers and teachers on site", "Cost and distance from home", "Families set on a full campus experience"],
        ],
      },
    },
    {
      heading: "Heat, harvest and festival weeks in Khandesh",
      paragraphs: [
        "Khandesh is hot. Summer temperatures at Raver reach forty to forty-five degrees, which makes midday study hard and pushes lessons to early morning or late evening. The May IB and IGCSE session falls in the worst of it, so mock papers earlier in spring are good practice for sitting in an uncomfortable room.",
        "The farming year shapes family life too. The banana crop has its own cycle of planting, harvest and loading, and many parents are busy with trucks and markets at certain weeks. Children often help or travel with family. We keep schedules flexible, and a missed lesson can move without a penalty.",
        "Festivals set the pace of the autumn. Ganeshotsav, Navratri and Dussehra, and then Diwali come just before the November sessions, and the Datta Jayanti celebration at the temple in November or December brings crowds to town. Akshaya Tritiya is a significant festival in Khandesh in spring. We place revision blocks before these weeks and keep festival weeks light.",
      ],
      table: {
        caption: "A study year in Raver",
        columns: ["Months", "Local pattern", "Tutoring plan"],
        rows: [
          ["March to May", "Heat builds, Akshaya Tritiya, May sessions", "Early morning lessons and timed past papers"],
          ["June to August", "Monsoon, new term, Ganeshotsav", "Settle new subjects, assessment planning"],
          ["September to November", "Navratri, Dussehra, Diwali, November sessions", "Mocks first, lighter weeks around festivals"],
          ["December to February", "Cooler weather, Datta Jayanti, school exams", "Long steady stretch to rebuild weak topics"],
        ],
      },
    },
    {
      heading: "Universities and pathways open to students from Raver",
      paragraphs: [
        "Students from the Raver area who finish an international syllabus have several routes. Some apply abroad, some to private universities in India, and others use national entrance tests for state and central institutions.",
        "Within India, the Association of Indian Universities recognises the Diploma and the IGCSE with A Level route for degree entry, and CUET-UG scores open central university seats to these students on the combinations each course lists. Engineering and medicine entrance tests set their own subject conditions every year, so check the official bulletin before dropping any subject.",
        "The nearest big university campus is Kavayitri Bahinabai Chaudhari North Maharashtra University at Jalgaon. Beyond it lie the colleges of Pune and Mumbai, and Indore over the Madhya Pradesh line. Overseas, students apply to the United Kingdom, Canada, the United States, Australia and Singapore, and we offer admissions test preparation separately.",
        "Pick subjects with the destination in mind. A short conversation with us before the school's subject deadline can save a year.",
      ],
    },
    {
      heading: "How are IB Mathematics and science tutored online?",
      paragraphs: [
        "IB Mathematics comes in Analysis and Approaches, heavy on algebra and calculus, and Applications and Interpretation, heavy on statistics and modelling. A student aiming at engineering usually takes AA at Higher Level, while one planning economics or social science often does well with AI. We help weigh the choice without pushing the harder course.",
        "Online teaching works for mathematics because the tutor watches the student write and can correct method as it appears. Paper 1 without a calculator needs frequent short practice, and Paper 2 needs clean working and calculator fluency, which a regular weekly slot supports.",
        "In Physics, Chemistry and Biology, data-based questions and long answers cause most of the lost marks. Practical skills also matter, and a tutor can explain how a method works and how it is written up, though real laboratory time at school or a centre remains important.",
        "Keep past papers and the formula booklet at hand. We begin with topics, move to mixed questions, then full papers in the last term, so that understanding comes before speed.",
      ],
    },
    {
      heading: "A weekly rhythm that works for a Raver student",
      paragraphs: [
        "Good tuition is mostly routine. For a Raver student the week usually needs three anchors: one lesson that introduces or repairs a topic, one slot of solo practice, and one short review of the written note from the tutor. If the household is busy with the banana harvest or a market day, protect the lesson and let the solo practice flex.",
        "Weekdays after school can be tired hours. A child who wakes at six for a school bus does better with an early, short lesson than with a late, long one. Where the family prefers evenings, we keep the session to about an hour and end with one question the student must answer unaided the next day.",
        "Sundays suit longer exercises: a timed section of a past paper, followed by marking against the official scheme and a plan for the following week. In the Diploma years, a Sunday morning mock every second week gives a realistic picture of progress long before the real papers.",
        "Parents help most by providing a quiet table, keeping a notebook for the tutor's notes, and asking the student to explain one idea aloud each evening. Nobody needs to understand the syllabus. Hearing a child teach it back is the best sign that learning has stuck.",
      ],
    },
    {
      heading: "Core or Extended: choosing IGCSE tiers",
      paragraphs: [
        "Most IGCSE subjects offer Core and Extended tiers. Core limits the top grade, while Extended opens the full range but asks more. A student intending to continue to IB Mathematics AA or A Level should choose Extended.",
        "Cambridge and Pearson Edexcel papers are organised differently, and tutors need the syllabus code before preparing material, for example 0620 for Cambridge Chemistry or 4CH1 for Edexcel. We ask this when you book.",
        "Subject choice at this age is easier if you start from the child. Keep one science the student genuinely enjoys, pick the mathematics tier by looking at recent test papers rather than hopes, and add a language where marks come naturally. English is compulsory in practice; Marathi or Hindi usually fills the second place without fuss.",
      ],
    },
  ],

  process: [
    { title: "Send a message", description: "Tell us the board and programme, the subject, level and exam session, and that you are in Raver. WhatsApp +91 7439 368 115 is enough." },
    { title: "Receive a shortlist", description: "We reply with tutors who have taught that exact syllabus and who can teach in your evening slots." },
    { title: "Try a free lesson", description: "The first lesson is free and covers a topic the student needs." },
    { title: "Confirm the plan in writing", description: "Rate, weekly timings and subject are written down before any payment." },
    { title: "Review and adjust", description: "A note follows each class, and the tutor or schedule can change if needed." },
  ],

  whyPoints: [
    { title: "Straight about the format", description: "Online only in Raver, with no vague promise of a house visit." },
    { title: "Syllabus-level matching", description: "Tutors are picked for the course, level and exam board, not a general subject." },
    { title: "Notes after every lesson", description: "Parents see what was covered and what comes next." },
    { title: "Timed for the town", description: "Slots avoid midday heat and the evening banana loading rush." },
    { title: "Coaching, not ghost-writing", description: "Tutors never write assessments, essays or coursework for a student." },
    { title: "No lock-in", description: "If the match is wrong, we replace the tutor free of charge." },
  ],

  faqs: [
    { question: "Is there home tuition for IB or IGCSE in Raver?", answer: "Only the online kind. Home visits by our tutors happen in Gurugram and parts of Delhi NCR alone, so nobody will knock on a door in Raver. What you do get is a live, private, one-to-one lesson at your own table, with a shared board and a short written summary after each class." },
    { question: "How much do IB and IGCSE tutors in Raver charge?", answer: "What you pay turns on the subject, the level, how senior the tutor is and the number of weekly lessons. You get the figure in writing before booking, and there is no printed price list. Because the opening lesson costs nothing, you can see the teaching before any money changes hands." },
    { question: "Is there an IB school in Raver?", answer: "We could not confirm any IB or Cambridge school in Raver, so we name none. The nearest campuses are in Pune and Mumbai, a long way off. Many local students study online, as private IGCSE candidates, or move for the senior years. Verify any school directly." },
    { question: "Can my child take IGCSE as a private candidate from Raver?", answer: "Frequently, via an approved Cambridge or Edexcel centre, but centres, fees and dates differ and science practicals need their own arrangement. We do not conduct exams. What we offer is preparation for the papers; do check the entry deadline with the centre well ahead." },
    { question: "What is the best time for lessons in Raver?", answer: "Early morning or evening, because summer afternoons in Khandesh are very hot. Most students take lessons after school or after dinner, with Sunday mornings for longer practice. We shift slots around banana-season work and festival weeks." },
    { question: "Will a tutor write the IA or Extended Essay?", answer: "Never. A tutor can unpack the marking criteria, talk through how a strong investigation is built and say where reasoning is thin, yet the writing, data and conclusions must come from the student. Anything else breaches the IB's academic integrity rules and puts the diploma at risk." },
    { question: "What internet connection do online lessons need?", answer: "Not much: a few megabits a second carries video and a drawing board comfortably, whether through broadband or a decent 4G signal. Where a village signal wavers, a second SIM as backup and a lesson during the strongest hours of coverage solve most problems." },
    { question: "Is the trial lesson truly free?", answer: "Yes. The first lesson is free with no obligation, and it is a real lesson on a topic the student needs. If the tutor does not suit, we find another before any paid class." },
    { question: "Do you cover MYP and PYP too?", answer: "Yes. Tutors cover PYP literacy and numeracy, MYP subjects against the criteria and the full Diploma. One tutor can follow a student from MYP into DP." },
    { question: "How do I choose between IB Maths AA and AI?", answer: "Analysis and Approaches leans on algebra and calculus and suits future engineers, mathematicians and physicists. Applications and Interpretation leans on data and modelling and suits economics, psychology or business plans. Each is offered at two levels. Sampling one lesson of each before the school's deadline usually settles it." },
    { question: "Can IB students still sit NEET or JEE?", answer: "They can, provided the subjects studied meet the conditions the National Testing Agency sets for that year. Equivalence and subject combinations are the sticking points, so read the current information bulletin yourself. Our tutors handle the content of Physics, Chemistry, Biology or Mathematics, not the admission rulebook." },
    { question: "Which IGCSE boards do you support?", answer: "Both Cambridge International and Pearson Edexcel. A syllabus code like 0625 for Physics, or 4PH1 on the Edexcel side, tells us exactly which papers apply, and the school's subject list usually carries it. We then pick someone who has taught that very specification." },
    { question: "When should I book for the November session?", answer: "Early August leaves a comfortable runway. Because Dussehra and Diwali land just before the November papers, we keep those weeks gentle and bring the heavy past-paper work forward into September." },
    { question: "Can a student in Burhanpur or Faizpur use the same service?", answer: "Yes. Lessons are online, so students in Burhanpur, Faizpur, Yawal or Bhusawal take the same lessons on the same timetable. Only a laptop and a steady connection are needed." },
    { question: "How do I get started?", answer: "Write to us on WhatsApp at +91 7439 368 115, or at support@ibgram.com, naming the class, the subject, the school or online school and Raver. A tutor and a trial slot normally come back to you within a day." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Nashik", href: "/nashik/", description: "A larger north Maharashtra city with a similar private-candidate route." },
    { label: "IB and IGCSE tutors in Indore", href: "/indore/", description: "The nearest large city across the Madhya Pradesh border." },
    { label: "IB and IGCSE tutors in Aurangabad", href: "/aurangabad/", description: "A Marathwada city page with online lessons." },
    { label: "IB tutors across India", href: "/india/", description: "Online IB and IGCSE tuition for students anywhere in India." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How our IB tutoring works, programme by programme." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject help." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "Subject, TOK and Extended Essay coaching." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI at Standard and Higher Level." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of tutors by subject and programme." },
    { label: "Contact us", href: "/contact-us/", description: "WhatsApp or email to book a free trial lesson." },
  ],

  closingHeading: "Book a free trial lesson from Raver",
  closingBody:
    "Name the class, the subject and the sitting you are aiming at. A matched tutor, a clear description of how the screen lessons run and a free first class follow. WhatsApp +91 7439 368 115 or write to support@ibgram.com.",
};
