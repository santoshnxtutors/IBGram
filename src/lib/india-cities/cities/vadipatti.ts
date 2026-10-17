import type { CitySeoPage } from "../types";

/**
 * /vadipatti/ - IB and IGCSE tutoring page for Vadipatti, Madurai district, Tamil Nadu (Vaigai belt,
 * west of Madurai city). Online-only: tutors do not visit homes in Vadipatti. No IB or Cambridge/Edexcel
 * school confirmed locally, so stripSchools is empty and clusters are labelled nearby cities.
 */
export const vadipatti: CitySeoPage = {
  slug: "vadipatti",
  countryName: "Vadipatti",
  countryNameLong: "Vadipatti, Madurai district, Tamil Nadu",
  demonym: "Vadipatti",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are set around the school bus, the Pongal and Jallikattu fortnight, the fierce Madurai summer and the October to December rains",
  lastUpdated: "2026-09-21",
  geo: { latitude: 10.0800, longitude: 77.9500 },
  wikipedia: "https://en.wikipedia.org/wiki/Vadipatti",
  alternateNames: ["Vadippatti", "Vadipatti Madurai"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Vadipatti | Online Private Tuition",
  metaDescription:
    "Vadipatti parents can book live IB and IGCSE tutors online: private lessons at home, PYP to DP and Cambridge or Edexcel IGCSE, with a free trial class.",
  h1: "IB and IGCSE Tutors and Home Tuition in Vadipatti, Madurai",
  heroEyebrow: "IB & IGCSE TUITION FOR VADIPATTI AND MADURAI DISTRICT",
  heroSubtitle:
    "A Vadipatti family that wants IB or IGCSE home tuition gets it in one specific form: the child studies at home, the tutor appears on a laptop, and the whole hour is theirs alone. We cannot send anyone to your door, because in-person tutoring runs only in Gurugram and parts of Delhi NCR, so private lessons here are online, live and matched to the exact course.",
  primaryKeyword: "IB and IGCSE tutors in Vadipatti",
  imageAltText: "Student in Vadipatti near Madurai using a laptop for a private online IGCSE Chemistry lesson",
  secondaryKeywords: [
    "IB tutor Vadipatti",
    "IGCSE tutor Vadipatti",
    "IB home tuition Vadipatti",
    "IGCSE home tuition Vadipatti",
    "IB private tuition Vadipatti",
    "IB Maths tutor Vadipatti",
    "IGCSE Maths tutor Vadipatti",
    "IB Physics tutor Vadipatti",
    "IB Chemistry tutor Vadipatti",
    "IB Biology tutor Vadipatti",
    "IB DP tutor Vadipatti",
    "IB MYP tutor Vadipatti",
    "IB PYP tutor Vadipatti",
    "IGCSE online tuition Vadipatti",
    "IB tutor Madurai district",
    "IGCSE tutor Cholavandan",
    "online IB tutor Alanganallur",
    "IB tutor Vadipatti Madurai",
    "Cambridge IGCSE tutor Vadipatti Tamil Nadu",
    "IB tutor near Madurai",
  ],

  heroTrustPoints: [
    "The real IB subject and level, or IGCSE syllabus code, decides the shortlist",
    "Lessons are online; physical home tuition is limited to Gurugram and parts of Delhi NCR",
    "Try a lesson free; the fee follows in writing before you book",
    "IB Gram has no tie to any Vadipatti school, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "West of Madurai", label: "Vaigai valley, Madurai district" },
    { value: "PYP to DP", label: "Every IB stage" },
    { value: "IST", label: "One clock, both ends" },
    { value: "Free trial", label: "Try a class first" },
  ],

  intro: {
    heading: "Studying the IB or IGCSE from Vadipatti",
    paragraphs: [
      "Vadipatti sits west of Madurai on the road toward Theni and the Cumbum valley, in the green belt along the Vaigai where coconut, banana, paddy and the famous Madurai jasmine fill the fields. Cholavandan, a short drive away, grows betel leaf; Alanganallur, in the same taluk, draws the country's attention every Pongal for its Jallikattu. Madurai city, with its temple, its university and its hospitals, is the town's anchor for almost everything.",
      "Schools around Vadipatti teach the Tamil Nadu State Board in Tamil and English, with several CBSE campuses, and children head toward NEET, TNEA engineering counselling or government jobs. We found no IB World School and no Cambridge or Edexcel centre inside Vadipatti, and this page does not pretend otherwise.",
      "The parents who write to us are usually connected to the wider Tamil world. A brother in Singapore, a sister in Dubai, a family returning from Malaysia: their children have often already met the IB or IGCSE. Others are local, ambitious and curious about whether a different syllabus would stretch a bright child.",
      "No specialist lives nearby, so we pick a tutor from the national pool for the exact course and teach by video.",
    ],
    bullets: [
      "IB help across PYP, MYP, DP and CP",
      "Cambridge and Pearson Edexcel IGCSE preparation",
      "Live online lessons, one tutor to one child",
      "A brief written note after each session",
    ],
  },

  programmesIntro:
    "Vadipatti has no IB classroom that we can name, so the four programmes arrive through a relocation, a return from abroad or private study. Here is what a tutor does at each one.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "A unit might ask Class 3 children where the jasmine in a Madurai garland comes from, sending them to question growers, map the journey and share what they learned. The final Exhibition is a joint inquiry, and no marks-based exam appears. Tutors build early reading, number sense and the courage to speak up.",
      countryNote:
        "A child from a Tamil-medium primary class near Vadipatti usually benefits from relaxed spoken English before inquiry units flow.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP subjects are marked on four criteria, and every student plans a Personal Project of their own choosing. The hard part is moving from describing a thing to judging it. A tutor shows what a top-band answer sounds like, then lets the student write one.",
      countryNote:
        "Moving from Samacheer Kalvi to MYP brings criterion-based marking and longer written answers for the first time.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects sit with the Extended Essay, Theory of Knowledge and CAS. Papers in May or November, with internal assessments, give up to 45 points. Tutors teach understanding and technique, and every assessed line is the student's own.",
      countryNote:
        "Any Diploma student linked to Vadipatti is most likely enrolled in Madurai, Chennai, Coimbatore or overseas, which means the school's own term dates decide the lesson calendar.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller set of Diploma courses is combined with a career-related study and a reflective project, a route for students with a practical bent. Few Indian schools offer it.",
      countryNote:
        "Requests from the Madurai belt are rare and usually concern Business or Maths inside a CP package.",
    },
  ],

  subjectsIntro:
    "Vadipatti parents rarely ask for general IB support. The request is more like Chemistry HL before a mock or Economics essays before a deadline. Give us the subject, level and session and we start there.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Differentiation, functions and logical argument for future engineers, with HL-style problems nobody has seen before." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, probability and modelling on a graphing calculator, suited to commerce and social science plans." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, circuits and fields, with graphs and uncertainty handled calmly against the clock." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Moles, bonding and organic routes, with examiners' use of the data booklet in mind." },
    { name: "IB Biology", levels: "HL / SL", description: "From enzymes to ecosystems, with plant science and food crops as natural talking points in farming country." },
    { name: "IB Economics", levels: "HL / SL", description: "Jasmine, banana and betel prices show supply, demand and market failure in action." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies and business tools, illustrated with Madurai's textile, flower and food-processing firms." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Dissecting unseen passages, shaping comparative essays and rehearsing for the oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Code is written, run and debugged during the lesson, because tidy logic often misbehaves on screen." },
    { name: "IB Psychology", levels: "HL / SL", description: "Key studies, their evaluation and the shape of a long answer." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "River systems, groundwater and dam-fed irrigation, with the Vaigai as a working example." },
    { name: "IB Tamil A / B", levels: "HL / SL", description: "Literary analysis for first-language readers, or register and text types for learners of Tamil as an additional language." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Text types, grammar and the oral for second-language learners." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Practice in testing how claims are justified; the written pieces stay with the student." },
  ],

  igcseSubjectsIntro:
    "No school near Vadipatti is known to teach Cambridge or Edexcel IGCSE, so requests come from private candidates and families preparing a school change. Board, code and tier are fixed before practice starts.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended needs brisk and tidy algebra; Core needs working that is easy to follow and earns method marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Pulls calculus and functions into Class 9-10, so the later step to IB or A Level Maths is shorter." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation work and the alternative-to-practical paper, side by side." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Calculations with the mole and identification tests, with past-paper wording." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, plants and the human body, rehearsed through essay-style questions." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Learn the definition, draw the diagram, make the judgement, each in proportion to its marks." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming in Python and pseudocode, next to the written theory." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "All four skills for pupils from Tamil-medium homes." },
    { name: "IGCSE Tamil as a Second Language", levels: "Grade 9-10", description: "A steady route into formal reading and writing for exam purposes." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case questions answered with writing that stays tied to the scenario." },
  ],

  regionsTitle: "Where our online tutors already teach around Vadipatti",
  regionsIntro:
    "Every lesson is online, so these places are context: where children go to school, how the Madurai roads run, and what heat, rain and festival weeks do to an evening.",
  regions: [
    { name: "Vadipatti town", note: "The taluk town on the Madurai to Theni road, with a busy market and a morning school-bus rush." },
    { name: "Cholavandan", note: "A nearby town known for betel leaf and coconut, with its own school cluster." },
    { name: "Alanganallur", note: "The village famous for its Jallikattu at Pongal, which draws crowds from across Tamil Nadu." },
    { name: "Sholavandan side", note: "The stretch of the Vaigai valley that links Vadipatti to Madurai and Theni." },
    { name: "Madurai city", note: "The district headquarters, with the university, hospitals, the temple and the widest school choice." },
    { name: "Thirumangalam", note: "A town south-west of Madurai, familiar to Vadipatti families as a market and road junction." },
    { name: "Usilampatti", note: "A town on the Theni road known for its cultural traditions and agricultural trade." },
    { name: "Melur", note: "A town to the east of Madurai, linked by road to the district's other taluks." },
    { name: "Dindigul road", note: "The route north toward Dindigul and the foothills, used for trade and relatives." },
    { name: "Theni and Cumbum valley", note: "The direction of the Western Ghats, with grape, banana and cardamom economies." },
  ],

  schoolDisclaimer:
    "Looking for an IB or Cambridge/Edexcel campus in Vadipatti, we found none we could confirm, so the town entry is left empty. The cities below are simply possible places to relocate or board, with no commercial tie to us. IB Gram is separate from every school and from the IB, Cambridge and Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Vadipatti itself: local options are limited",
      note: "Schools nearby follow the Tamil Nadu State Board in Tamil and English medium, with several CBSE campuses. We confirmed no IB or IGCSE school, so online matching is the realistic route.",
      schools: [],
    },
    {
      city: "Nearby: Madurai",
      note: "The big city a short drive east has a far wider range of CBSE, ICSE and international-curriculum options. We name no specific school without direct confirmation.",
      schools: [],
    },
    {
      city: "Nearby: Dindigul, Theni and Virudhunagar",
      note: "These district towns offer regional private schooling, but we did not verify an IB or IGCSE campus in any of them.",
      schools: [],
    },
    {
      city: "Nearby: Coimbatore, Chennai and Bengaluru",
      note: "The larger cities where most Tamil Nadu families look for IB and Cambridge schools, whether for boarding or relocation.",
      schools: [],
    },
  ],

  modesIntro:
    "All Vadipatti lessons are live, one-to-one and online, whatever the pace. House calls are for Gurugram and Delhi NCR.",
  modes: [
    {
      title: "A fixed weekly hour",
      description:
        "A named tutor, a fixed weekly slot and a quiet room: by the end of a term the tutor has learned your child's reasoning and aims the practice accordingly.",
      bullets: [
        "Same tutor, same hour",
        "From PYP right up to Diploma or IGCSE",
        "Past papers marked live",
      ],
    },
    {
      title: "Weekly hour plus a written trail",
      description:
        "Lessons are unchanged, but a few written lines close each session and a wider review arrives every few weeks, which suits parents working in Singapore or the Gulf.",
      bullets: [
        "A summary after each class",
        "Periodic plan review",
        "A second weekly slot is easy to add",
      ],
    },
    {
      title: "Run-up to an exam",
      description:
        "Sessions are packed into the weeks before a mock or the May and November series, with timed papers marked within days and a plan that avoids Pongal and the hottest afternoons.",
      bullets: [
        "Scripts marked to the published scheme",
        "Quick feedback",
        "Best booked two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Who around Vadipatti is curious about the IB and IGCSE?",
      paragraphs: [
        "Madurai district has sent people abroad for generations: to Singapore, Malaysia, Sri Lanka and now the Gulf, the UK and North America. That history shapes how Vadipatti parents think about education. A qualification that is understood in Singapore or London matters when a brother or cousin may host the next generation.",
        "The enquiries we hear are of three kinds. Some come from families returning home with a child halfway through an IGCSE or Diploma course. Some come from households planning a move to Chennai, Bengaluru or overseas in a year or two. And some come from local students who have read about the IB and want to test themselves against a broader syllabus.",
        "None can find a nearby teacher of IB Physics HL or IGCSE Extended Maths, because no school in the Vadipatti belt has taught those papers this year. A specialist from elsewhere in India, teaching live, fills the gap without uprooting the child.",
        "Fairness matters here: an exam does not know its candidate's address. A Cambridge script from Vadipatti is marked to the same scheme as one from Singapore, and IB moderation follows one standard.",
      ],
    },
    {
      heading: "Tamil Nadu State Board, CBSE, IB or IGCSE: what actually differs?",
      paragraphs: [
        "The Samacheer Kalvi curriculum follows a prescribed textbook, with public examinations at Class 10 and 12 that lead to NEET and TNEA counselling. CBSE sits close by with more application. IB and Cambridge IGCSE instead drop a student into an unfamiliar scenario and expect a justified written answer.",
        "For Tamil-medium pupils the leap is mainly linguistic. A Biology answer wants exact English terms and an Economics essay wants a visible argument, so the opening weeks combine fresh content with plenty of writing.",
        "Another shift is coursework. IB Internal Assessments and IGCSE practicals reward planning your own investigation and recording honest data, a skill few state-board pupils have practised; children who work in banana or coconut groves often do well at fieldwork.",
        "None of this is a verdict on the state board, whose strengths are discipline and recall. The international route tests an additional set of abilities.",
      ],
      table: {
        caption: "Boards a Vadipatti family may compare",
        columns: ["Feature", "Tamil Nadu State Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Local presence", "Most schools", "Several campuses", "None confirmed"],
          ["Final assessment", "Class 10 and 12 public exams", "Board papers plus internals", "Exams plus coursework over two years"],
          ["Entrance routes", "NEET, TNEA, JEE", "JEE, NEET, CUET", "AIU certificate, CUET or study abroad"],
          ["Main medium", "Tamil or English", "English or Hindi", "English plus language courses"],
        ],
      },
    },
    {
      heading: "How is a tutoring fee decided for IB or IGCSE in Vadipatti?",
      paragraphs: [
        "The site shows no price list because the figure follows the course. Tutors able to teach Physics HL or Maths HL at the current IB standard are scarce nationwide, which lifts their hours above IGCSE Core subjects, where far more teachers exist.",
        "How well the tutor knows the syllabus comes next. Someone who taught the course last year, or marked its papers, finds a student's weak spot sooner, which often shortens the programme.",
        "Weekly hours move the total as well: one lesson is modest, three before a mock cost more that week, yet a compact block can end sooner than a long, thin one.",
        "Only after the free trial do you receive a written quote. Until then nothing is charged, and if the fit is wrong a different tutor is offered.",
      ],
    },
    {
      heading: "Online home tuition or Madurai classes: which suits a Vadipatti student?",
      paragraphs: [
        "Madurai's coaching scene is large, but it serves Samacheer Kalvi, NEET and JEE. Its teachers seldom meet IB command terms or IGCSE practical papers, and a daily bus journey takes real hours from a school week.",
        "A private tutor near Vadipatti may know a subject thoroughly, yet with so few international schools in the district almost none has taught these exact papers.",
        "A live online lesson bridges the gap: a tutor in Chennai or Pune, a student at home in Vadipatti, paired by expertise.",
        "Self-study with past papers helps only if someone marks them and explains each lost mark.",
      ],
      table: {
        caption: "Ways to prepare for IB or IGCSE from Vadipatti",
        columns: ["Option", "Strength", "Limit"],
        rows: [
          ["Online one-to-one", "Specialist chosen by course", "Needs steady internet and power"],
          ["Madurai coaching classes", "In-person contact", "Aimed at board and entrance exams; daily travel"],
          ["Local private tutor", "Close to home", "Rarely has taught IB or IGCSE"],
          ["Self-study", "Cheap and flexible", "No expert marking"],
        ],
      },
    },
    {
      heading: "How do Pongal, Jallikattu and the Madurai climate shape the school year?",
      paragraphs: [
        "Most Indian Diploma candidates sit papers in May; a few schools use November. Cambridge IGCSE has a May-June and an October-November series, and results appear in July and January. Your child's school or centre will confirm dates.",
        "The Vadipatti calendar has its own beat. Pongal in mid-January brings several days of travel and visitors, and Alanganallur's Jallikattu turns the weekend into a pilgrimage. Chithirai festival in April fills Madurai with crowds, and Deepavali and Karthigai Deepam take days each in the autumn.",
        "Madurai is hot. March to June pushes afternoons toward 40 degrees, so evening or early-morning slots work best. The Northeast monsoon from October to December can bring storms and power cuts, so keep a phone hotspot beside a charged laptop.",
        "Working backwards from the exam date, we keep spare days around each of these.",
      ],
      table: {
        caption: "A study year for a Vadipatti student",
        columns: ["Period", "Local context", "Focus"],
        rows: [
          ["January to March", "Pongal, Jallikattu, warming days; school mocks", "Revision and weak-topic repair"],
          ["April to June", "Chithirai festival, severe heat; May exams", "Timed papers in early or late slots"],
          ["July to September", "Warm, windy; new school term", "New content, coursework planning"],
          ["October to December", "Northeast monsoon, Deepavali; November series", "Drafts, mocks and exam practice"],
        ],
      },
    },
    {
      heading: "Where can a Vadipatti student go after IB or IGCSE?",
      paragraphs: [
        "For study in India, equivalence certificates for the Diploma and for Cambridge qualifications come from the Association of Indian Universities, and CUET-UG is open to international-board students. Chennai, Coimbatore and Bengaluru universities each read IB scores in their own way, so check every institution's page.",
        "JEE Main and NEET name the subjects a candidate must have studied, so read the latest bulletins before fixing Class 11 choices; Tamil Nadu's own TNEA and medical counselling rules need reading separately.",
        "Abroad, admissions offices in Singapore, the UK, Australia, Canada and the US read IB totals directly. Madurai families often have relatives in several of these places who can advise on cities, costs and visas.",
        "We provide teaching and exam rehearsal only. Application forms, personal statements and portfolios stay in the student's hands.",
      ],
    },
    {
      heading: "What does a video lesson in IB Maths or science look like?",
      paragraphs: [
        "Choose a lane first. Analysis and Approaches follows algebra, graphs and calculus toward engineering or pure science; Applications and Interpretation follows data, probability and technology toward business, medicine-adjacent studies or the social sciences. Higher or Standard Level is decided second, usually by the university course in mind.",
        "Tutor and student draw on one shared whiteboard, working a tricky question together. Your child then photographs written solutions and receives them back with a remark beside each line.",
        "Where do science marks leak? Mostly in Physics when a unit disappears halfway through a calculation, in Chemistry when the data booklet is half remembered, and in Biology when a definition stays vague. The first sessions find your child's biggest leak and fix it.",
        "Internal assessments are discussed only for planning and criteria; investigation and write-up stay with the student.",
      ],
    },
    {
      heading: "Core or Extended IGCSE, and how many subjects?",
      paragraphs: [
        "For IGCSE Maths and the sciences there are two tiers: Core, where grades stop at C, and Extended, which reaches A*. A Vadipatti child dreaming of IB Physics or A Level Maths should enter Extended from the start.",
        "Subject count is the next choice: nine could swamp a child who also studies Tamil, five might close doors. English, Maths, two sciences, a humanity and a language is a sensible middle.",
        "Tamil as a Second Language suits pupils who want formal reading and writing credit for their home language, and English as a Second Language suits those schooled in Tamil medium.",
        "With Pearson Edexcel the tiers are similar but the papers differ, so name your child's board in the first message.",
      ],
    },
  ],

  process: [
    { title: "Send a note", description: "Message class, board, subject and level; that opens the file." },
    { title: "Weigh our suggestion", description: "We suggest a tutor who has recently taught or marked the very course." },
    { title: "Join a free lesson", description: "A free live class, as long as a normal one, lets the family judge the fit." },
    { title: "Fix hours and fee", description: "Both go into a written note before any booking." },
    { title: "Start and review", description: "Weekly lessons, a short note after each, and a replacement tutor if the first is not right." },
  ],

  whyPoints: [
    { title: "Chosen for the syllabus", description: "Subject, level and board decide who is shortlisted." },
    { title: "Honest about delivery", description: "In Vadipatti every lesson is on screen; house visits belong to Gurugram and parts of Delhi NCR alone." },
    { title: "Parents kept informed", description: "Written notes let a parent in Singapore or Dubai follow progress." },
    { title: "See before you pay", description: "A free class shows the teaching before any commitment." },
    { title: "Clear academic limits", description: "Students keep authorship: no tutor drafts an IA, Extended Essay or TOK essay." },
    { title: "Quiet swaps", description: "If a tutor is not right for your child, we change them." },
  ],

  tutorsIntro:
    "Tutors come from several Indian cities and always teach on Indian time; recent experience of the course matters for a Vadipatti student, not distance.",

  faqs: [
    { question: "Are there IB and IGCSE tutors for Vadipatti?", answer: "Yes. The child stays in Vadipatti; the tutor, elsewhere in India, teaches live. Subject, level and board are settled first and a free trial follows. In-person tuition exists only in Gurugram and parts of Delhi NCR, so nobody visits homes in Madurai district." },
    { question: "Can I book home tuition in Vadipatti?", answer: "Private one-to-one tutoring while your child stays at home: yes, by video. A tutor ringing the bell in Vadipatti, Madurai or Theni: no, because that format is for Gurugram and parts of Delhi NCR." },
    { question: "Is there an IB school in Vadipatti?", answer: "No campus we could verify. Nearby schools follow the Tamil Nadu State Board with several CBSE campuses, and Madurai has broader choice. Ask any school which IB or Cambridge programmes it is authorised to run before planning around it." },
    { question: "What does tuition cost?", answer: "There is no rate card on this page, and that is deliberate. What a Vadipatti family pays rises with the rarity of the subject, falls when the course is common, and depends on how many hours a week it chooses. HL Physics costs more than IGCSE Core Geography, for example. The exact figure is written out after the trial." },
    { question: "What happens in the trial lesson?", answer: "Your child's first session is free and runs the length of a regular lesson. Look at three things: how clearly the tutor explains, how well the pace suits your child, and whether your child asks questions. If something feels off, we find another tutor before any money changes hands." },
    { question: "Can my child do IGCSE as a private candidate from Vadipatti?", answer: "Private candidates are generally accepted through approved exam centres. Fees, subject lists and closing dates differ, so ask the centre well ahead; for Vadipatti that probably means Madurai. Our job is the preparation for papers and practical skills; the paperwork of entry belongs to the family." },
    { question: "Would a tutor write my child's IA or Extended Essay?", answer: "Writing a student's IA or Extended Essay would break IB rules, which is why no IB Gram tutor does it. Tutors discuss the assessment criteria, test the research question, and comment on the structure of drafts. Authorship, including that of the TOK essay, stays entirely with your child." },
    { question: "Which IB subjects do your tutors teach?", answer: "IB Maths in both forms, Physics, Chemistry, Biology, Economics, Business Management, English, Computer Science, Psychology, ESS, Tamil, Hindi and TOK are all on offer, at either level. Anything outside the list, raise at the start and we will check whether a tutor exists before the trial lesson." },
    { question: "Is IGCSE easier than Samacheer Kalvi?", answer: "Easier is the wrong word. Samacheer Kalvi rewards remembering the set textbook accurately; IGCSE rewards using an idea on a situation the student has not seen. A child from a Tamil-medium class typically needs drills in English sentence-building and in the verbs, such as 'compare' or 'justify', that examiners use." },
    { question: "Can students from Cholavandan, Alanganallur or Usilampatti join?", answer: "Certainly, if the home has a dependable connection. We choose tutors by subject knowledge, not address, so a child in Cholavandan or Usilampatti sees the same names as one in Vadipatti." },
    { question: "What time are lessons held?", answer: "All lessons are on Indian Standard Time, mostly early evenings and weekends. After a regular slot is agreed, it can move around exams, Pongal, festivals or travel with a message to the tutor." },
    { question: "What if the monsoon or a power cut interrupts a lesson?", answer: "From October to December, keep a charged laptop and a phone hotspot by the desk. If a session drops completely, message the tutor straight away; most can be moved to another day that week." },
    { question: "Can a Tamil Nadu State Board student still move to IB?", answer: "Is the door closed for a child in Class 8 or Class 10 at a Vadipatti school? Not at all; it is merely heavier. Class 6, 9 and 11 are the natural moments because syllabuses restart. Whenever the switch happens, plan on a few weeks of English reasoning and exam-verb practice before new topics land, and let the tutor suggest Standard Level or Core." },
    { question: "Do you teach MYP and PYP students?", answer: "MYP and PYP are both covered. In MYP the tutor helps with criteria-marked assignments and the Personal Project; in PYP with reading, number sense and the knack of asking questions. Exams hardly feature at either stage." },
    { question: "Will parents get feedback?", answer: "Every lesson closes with a short written note on the topic, the stumbling points and the next task, followed by a broader review every few weeks. Parents in Singapore or the Gulf read these from afar." },
    { question: "Does IB Gram belong to any school or exam board?", answer: "IB Gram belongs to nobody but itself: there is no school, awarding body or coaching chain behind it. References to Madurai or Theni on this page are geography, not partnership. The tutors have taught or examined these courses, and they speak for themselves." },
    { question: "How do we get started?", answer: "WhatsApp +91 7439 368 115 or write to support@ibgram.com. Say which class your Vadipatti child is in, which board the school uses, which subject worries you and how the last test went. Our reply names a tutor and a trial hour; the fee comes only after you have watched a lesson." },
  ],

  internalLinks: [
    { label: "IB Gram across India", href: "/india/", description: "Pages for other towns and cities, in case family lives elsewhere." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB subjects and programmes in everyday language." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "IGCSE support, Cambridge or Edexcel." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects plus the core, and how they fit." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led learning for younger children." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing the Maths route that suits your child." },
    { label: "Our tutors", href: "/tutors/", description: "Our teachers and their subjects." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a trial." },
    { label: "Tutors in Madurai", href: "/madurai/", description: "The district headquarters, a short drive east." },
    { label: "Tutors in Theni-Allinagaram", href: "/theni-allinagaram/", description: "The Theni valley town to the west." },
    { label: "Tutors in Virudhunagar", href: "/virudhunagar/", description: "A neighbouring Tamil Nadu district town to the south." },
    { label: "Tutors in Tirunelveli", href: "/tirunelveli/", description: "The southern regional centre." },
  ],

  closingHeading: "A free first lesson, from Vadipatti",
  closingBody:
    "Write to +91 7439 368 115 on WhatsApp, or to support@ibgram.com, with subject, level and exam board. A proposed tutor, an after-school trial and a written fee reach you before you commit to anything in Vadipatti or beyond.",
};
