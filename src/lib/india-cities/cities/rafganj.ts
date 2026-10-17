import type { CitySeoPage } from "../types";

/**
 * Rafiganj (Aurangabad district, Bihar). No school here could be confirmed as an IB World School or a
 * Cambridge / Edexcel centre, so stripSchools is empty and the clusters point to cities families reach.
 * School names are reused from the already-checked Patna page.
 */
export const rafganj: CitySeoPage = {
  slug: "rafganj",
  countryName: "Rafiganj",
  countryNameLong: "Rafiganj, Bihar",
  demonym: "Rafiganj",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late afternoons after the school day, evenings once the power is steady, and Sunday mornings before the heat builds",
  lastUpdated: "2026-09-21",
  state: "Bihar",
  stateCode: "IN-BR",
  geo: { latitude: 24.8167, longitude: 84.6333 },
  wikipedia: "https://en.wikipedia.org/wiki/Rafiganj",
  alternateNames: ["Rafiganj Bihar", "Rafiganj Aurangabad", "Rafigunj", "Rafiganj Dhawa"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Rafiganj | Home Tuition via Live Video",
  metaDescription:
    "Rafiganj students get live one-to-one IB and IGCSE tutoring from home, Cambridge and Edexcel covered, scheduled around Chhath and the heat, free first lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Rafiganj",
  heroEyebrow: "IB & IGCSE HOME TUITION FOR RAFIGANJ STUDENTS, TAUGHT ONLINE",
  heroSubtitle:
    "Looking for home tuition in Rafiganj for an IB or IGCSE student? The honest version is this: a specialist teaches your child live, one to one, over video, while your child sits at the family desk. Nobody from IB Gram travels to Rafiganj, and there is no international school in town, so the right tutor has to come from outside the district. Give us the board, the subject and the level, and we line up a free first lesson.",
  primaryKeyword: "IB and IGCSE tutors in Rafiganj",
  imageAltText: "Student in Rafiganj, Bihar, having a live IGCSE Mathematics lesson with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Rafiganj",
    "IGCSE tutor Rafiganj",
    "IB home tuition Rafiganj",
    "IGCSE home tuition Rafiganj",
    "IB private tuition Rafiganj",
    "IB Maths tutor Rafiganj",
    "IGCSE Maths tutor Rafiganj",
    "IB Physics tutor Rafiganj",
    "IB Chemistry tutor Rafiganj",
    "IB Biology tutor Rafiganj",
    "IB DP tutor Rafiganj",
    "IB MYP tutor Rafiganj",
    "IB PYP tutor Rafiganj",
    "IGCSE online tuition Rafiganj",
    "IB tutor Aurangabad district Bihar",
    "IGCSE tutor Daudnagar",
    "IB tuition Obra Goh Kasma",
    "online IB classes near Gaya",
    "Rafigunj IGCSE tuition",
  ],

  heroTrustPoints: [
    "Live lessons with one tutor and one student, never a recorded course",
    "Tutors who have taught IB DP, MYP, PYP and Cambridge or Edexcel IGCSE papers",
    "Slots arranged around Bihar school hours, load-shedding and the Chhath fortnight",
    "A free first lesson and a short written summary after each session",
    "A different tutor at no cost if the first pairing does not click",
  ],
  heroStats: [
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "First lesson on us" },
    { value: "May & Nov", label: "IB sessions supported" },
  ],

  intro: {
    heading: "Who looks for IB and IGCSE tutors in Rafiganj, and why online?",
    paragraphs: [
      "Rafiganj is a market town on the bank of the Dhawa river, in Aurangabad district, roughly 36 km from Gaya and 25 km from Aurangabad town. Its schools follow the Bihar School Examination Board or CBSE, and its coaching lanes are built for matric, intermediate and the JEE or NEET grind. A family asking for an IB or Cambridge tutor here is therefore unusual, and almost always has a specific story: a parent posted to Dubai or Muscat who has come home, a child doing an online international course, a doctor or engineer who wants a global degree path, or a boarder at a school elsewhere who returns for the long break and cannot afford to fall behind.",
      "For those families the problem is supply, not interest. Finding someone in town who has actually taught Paper 2 of IB Mathematics, or a Cambridge IGCSE Chemistry alternative-to-practical question, is close to impossible, and a daily trip to Patna is out of the question. So the tutoring comes to the screen. IB and IGCSE tutors in Rafiganj, in our model, are subject specialists based elsewhere in India who teach live on Indian Standard Time, with a whiteboard, scanned past papers and a short note to parents afterwards.",
      "Below we set out what is realistic from a Rafiganj address: which schools exist within reach, how the Bihar board compares with the two international systems, what drives the rate, how the exam calendar collides with Chhath and the summer, and where students go afterwards. IB Gram is an independent service with no tie to the IB, Cambridge, Pearson or any school mentioned. Tutors coach and explain; they do not write a student's internal assessment, Extended Essay or coursework.",
    ],
  },

  programmesIntro:
    "A Rafiganj child usually meets these programmes late rather than early, often after a move or through a distance route, so the tutor's role is to close gaps before they harden into a pattern.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "A themed, inquiry-driven primary stage ending in a group Exhibition. Tutoring is gentle: reading aloud, number talk, short written explanations and the confidence to ask why.",
      countryNote:
        "PYP is almost unheard of in Aurangabad district. A child who meets it after returning from abroad benefits from a short weekly lesson that keeps English and mathematics vocabulary aligned with the old school.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked against published criteria, with a Personal Project at the end. Tutors teach how criteria work and how to build an answer that satisfies them.",
      countryNote:
        "Students coming from a Hindi-medium or BSEB background often know the content but have never been marked on criteria. Early lessons are spent on writing structure, not new topics.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects plus Theory of Knowledge, the Extended Essay and CAS. Tutors work on examined content and the technique for internal assessments, leaving the assessed work to the student.",
      countryNote:
        "A Diploma student studying remotely from Rafiganj often has nobody nearby who can check a Higher Level solution, so a weekly specialist session carries more weight here than in a big city.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pair of Diploma courses combined with a career study, a reflective project and language development. Tutors support the Diploma courses and the written English.",
      countryNote:
        "CP is rare for Bihar families. We accept it on request and match a tutor to the specific courses your child takes.",
    },
  ],

  subjectsIntro:
    "Each subject is paired with a tutor who has taught that course at that level. A Standard Level student and a Higher Level student are not given the same teacher by default.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, sequences and proof-based reasoning, with the Paper 1 (no calculator) discipline practised from the first month." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and finance with the graphic display calculator used properly, not as a black box." },
    { name: "Physics", levels: "SL / HL", description: "Kinematics through wave phenomena and fields, with data-analysis questions and uncertainty handling drilled until natural." },
    { name: "Chemistry", levels: "SL / HL", description: "Mole calculations, bonding, equilibrium and the organic pathways that decide Paper 2 marks." },
    { name: "Biology", levels: "SL / HL", description: "Cell structure to ecology, with attention to the precise wording that mark schemes look for." },
    { name: "Economics", levels: "SL / HL", description: "Diagram-led micro and macro, with Indian and Bihar-relevant examples for the extended responses." },
    { name: "Business Management", levels: "SL / HL", description: "Tools such as SWOT and break-even applied to unseen case studies in Paper 1 and 2." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and the specific pseudocode the examiners use." },
    { name: "Psychology", levels: "SL / HL", description: "Key studies, evaluation language and essay structure for the short and long response papers." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Unseen-text commentary, comparative essays and sustained oral work." },
    { name: "Hindi B and Hindi A", levels: "SL / HL", description: "Reading, writing and discussion in Hindi, which many Rafiganj households use at home alongside Magahi." },
    { name: "Visual Arts support", levels: "SL / HL", description: "Process-journal technique and critical writing for students whose school offers the subject." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion practice around knowledge questions; the essay and exhibition remain the student's work." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE courses carry the same names but different paper structures, so a tutor is chosen by board code first and subject second.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, mensuration, trigonometry and statistics, with timed papers marked line by line." },
    { name: "Additional Mathematics", levels: "Single tier", description: "Calculus and functions in a compact course that suits students heading for A Level or the Diploma." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, thermal physics, waves, circuits and radioactivity with practical-skills questions." },
    { name: "Chemistry", levels: "Core / Extended", description: "Atomic structure, the mole, rates, electrolysis and basic organic chemistry." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, nutrition, transport, inheritance and ecosystems with data and graph questions." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For students on the double-award science route." },
    { name: "English First or Second Language", levels: "Core / Extended", description: "Reading comprehension, summary, directed writing and speaking assessment." },
    { name: "Computer Science", levels: "Single tier", description: "Programming logic, binary, hardware and networks." },
    { name: "Economics and Business Studies", levels: "Single tier", description: "Core concepts, calculation questions and case analysis." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Comprehension, composition and oral practice." },
  ],

  regionsTitle: "Rafiganj and the towns around it",
  regionsIntro:
    "Families live in town, along the highway or in outlying villages, and the practical limits are power supply, signal quality and who can sit nearby. Notes below describe the places students are actually studying from.",
  regions: [
    { name: "Rafiganj market and station area", note: "The densest part of town, around the market and the Grand Chord railway station. Evening noise is high; a quiet back room and headphones matter more than the address." },
    { name: "Along the Dhawa river", note: "Lower-lying homes near the riverbank, where the rainy season can disrupt power and roads for a day or two; lessons are rescheduled without penalty." },
    { name: "Kasma", note: "A nearby block settlement reached by bus from Rafiganj. Many families here have members working in Jharkhand and the Gulf, and parents often attend the trial lesson over video." },
    { name: "Daudnagar", note: "A larger trading town on the Sone side with its own colleges and a long commercial history; some families here already compare Patna options for their children." },
    { name: "Obra and Goh", note: "Towns on the state highway toward Gaya and Aurangabad. Highway timing means school buses leave early, so lessons start after five o'clock." },
    { name: "Aurangabad town", note: "The district headquarters about 25 km away, where the better-known private schools and coaching centres are. Some Rafiganj families commute or send children there for Class 11." },
    { name: "Deo and Umga", note: "Temple and hill settlements in the district, with the Chhath crowds at the Sun temple at Deo. Lessons are paused around the main days." },
    { name: "Madanpur and Nabinagar side", note: "Villages and a power-project belt toward the Jharkhand border, where engineering families sometimes hold a more mobile school history." },
    { name: "Gaya side (36 km)", note: "The nearest city for railways, hospitals and larger coaching. Students who study there for a year often continue lessons from Rafiganj afterwards." },
  ],

  schoolClusters: [
    {
      city: "Rafiganj and Aurangabad district",
      note: "We could not confirm any school in the district as an authorised IB World School or a registered Cambridge or Edexcel centre. Local schools follow BSEB, CBSE or ICSE, so for an IB or IGCSE route the honest position is that there is no local option today.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata (reached by the Grand Chord line)",
      note: "Kolkata is the nearest large city with confirmed Cambridge and international-curriculum schools. A few families consider boarding or relocating; the journey from Rafiganj by train is long.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "The Cambridge School, Calcutta", "Modern High School for Girls, Kolkata"],
    },
    {
      city: "Nearby: Delhi NCR (boarding and relocation)",
      note: "Delhi NCR has the widest choice of IB schools for families who move. These are shown only as a map of where confirmed options sit.",
      schools: ["Vasant Valley School, Delhi", "Sanskriti School, Delhi", "The British School, New Delhi", "Step by Step School, Noida"],
    },
    {
      city: "Nearby: Mussoorie boarding belt",
      note: "A hill-station boarding choice a few Bihar families consider for senior years.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],
  schoolDisclaimer:
    "The schools named above are listed only to show where confirmed IB or Cambridge options lie relative to Rafiganj. IB Gram is a separate tutoring service, not linked to those schools, the IB, Cambridge or Pearson, and each school decides its own admissions.",

  modesIntro:
    "Every format here is online, because we do not send tutors to Rafiganj; in-person home visits are limited to Gurugram and parts of Delhi NCR. What stays constant is the live, private teaching.",
  modes: [
    {
      title: "Online one-to-one at home",
      description: "A scheduled live lesson from your own desk with a tutor who knows the board and level.",
      bullets: ["Shared whiteboard and annotated papers", "Same tutor week after week", "Short summary for parents after each session"],
    },
    {
      title: "Pre-exam crash blocks",
      description: "Dense sessions in the weeks before school mocks and the May or November papers.",
      bullets: ["Timed questions, then line-by-line review", "Command-word practice", "Spare slots held for power or network outages"],
    },
    {
      title: "Light weekly catch-up",
      description: "One lesson a week in a single subject, enough to keep pace with an online or distance course.",
      bullets: ["Useful for MYP and IGCSE years", "Pause during Chhath and wedding season", "Subject can change mid-year"],
    },
  ],

  tutorsIntro:
    "Tutors teach from different parts of India on Indian time. For a Rafiganj student that usually means lessons from late afternoon into the evening, which most of the roster is free for.",

  sections: [
    {
      heading: "Are there any IB or IGCSE schools near Rafiganj?",
      paragraphs: [
        "No school that we could confirm. Search the IB directory or Cambridge's list of registered centres for Aurangabad district and the pages stay empty, and the town's own schools are built around BSEB, CBSE and, in a few cases, ICSE. That is not a criticism; several of them have loyal alumni and strong results in board exams. It simply means a Rafiganj family cannot walk a child to a Diploma classroom.",
        "The realistic alternatives are all some distance away. Kolkata is the nearest city with a cluster of confirmed Cambridge and international-curriculum schools, and the Grand Chord line makes the journey possible but long. Delhi NCR offers the broadest choice. A few Bihar families look at Mussoorie boarding for the last two school years. Patna, strangely, has few options we could verify, so we have not listed any there.",
        "What does that mean for a student who is already on an international syllabus? Often they are studying through an online school, a school abroad that the family left, or a boarding school during term time and home during the break. In each case the tutor fills a gap that nobody in Rafiganj can: a teacher who has the same specification open on the other end of the call.",
        "We keep this section short on school names deliberately. A page that lists schools we cannot verify wastes your time. If a school in Aurangabad district becomes an authorised IB candidate or a Cambridge centre, tell us, and tutoring can be aligned to its subject list within a few days.",
      ],
    },
    {
      heading: "Bihar Board, CBSE, ICSE, IB and IGCSE compared for a Rafiganj family",
      paragraphs: [
        "Most children in town sit the BSEB matric at the end of Class 10 and the intermediate exam in Class 12, with a Science, Commerce or Arts stream chosen at Class 11. CBSE schools in Aurangabad and Gaya run the national pattern, and the main aim for many students is a Patna or Delhi college through JEE, NEET or CUET-UG.",
        "IGCSE tests individual subjects at the end of Class 10 and rewards clear written reasoning more than recall. The IB Diploma goes further: six subjects, an essay, a knowledge course and service hours, assessed partly through coursework that the school sends to examiners. A Bihar student moving over often finds the mathematics comfortable and the writing unfamiliar.",
        "The table compares the three families of qualification on points a parent usually asks about.",
      ],
      table: {
        caption: "Boards as they look from Rafiganj",
        columns: ["Board", "How it is assessed", "Teaching language", "Typical next step", "Specialist help nearby"],
        rows: [
          ["BSEB matric and intermediate", "Written state papers, February to March", "Hindi or English", "Bihar and Patna colleges, JEE or NEET coaching", "Plentiful and affordable"],
          ["CBSE", "Board papers in Class 10 and 12", "English or Hindi", "JEE, NEET, CUET-UG", "Good in Gaya and Aurangabad"],
          ["ICSE and ISC", "Broad syllabus, essay-leaning", "English", "CUET-UG, Indian colleges", "Limited"],
          ["Cambridge or Edexcel IGCSE", "Subject papers, tiered, three sessions a year", "English", "IB, A Level or Indian Class 11", "Practically none"],
          ["IB Diploma", "Exams, internal assessments, essay, CAS", "English", "AIU-recognised degrees, CUET-UG, abroad", "None within the district"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Rafiganj, and what sets the rate?",
      paragraphs: [
        "We do not list prices. The reason is practical: two students in Rafiganj can ask for tuition that looks alike on paper and need very different things. What we do guarantee is that the rate is sent to you in writing after the free first lesson, and nothing begins until you agree to it.",
        "Level is the largest factor. A Higher Level Diploma Physics tutor with years of marking behind them is a different resource from someone supporting Class 7 MYP science, and the rate reflects that. Subject scarcity matters too. A tutor for IGCSE English or Business is easier to find than one for Further Mathematics, Computer Science HL or Chemistry HL.",
        "Frequency and duration also move the number. A student who studies twice a week for the whole academic year sits in a different position from one who needs a concentrated three-week block before the November session. We would rather describe the plan than quote a flat hourly number that hides the detail.",
        "Parents here sometimes compare the cost against what they already spend on Patna or Kota-style coaching and hostel stays. A fair comparison counts the saved travel, the rent and the days of school missed, as well as the lesson fee itself.",
      ],
      bullets: [
        "Programme and level (SL, HL, Core, Extended)",
        "How few tutors teach that subject",
        "Lessons per week and the length of the plan",
        "Steady support versus an exam-season sprint",
      ],
    },
    {
      heading: "Online home tuition, Gaya coaching, a local tutor or self-study: which suits an international syllabus?",
      paragraphs: [
        "Four options exist for a Rafiganj family. Coaching institutes in Gaya or Patna are built for entrance exams rather than IB or IGCSE papers, and a local tutor who teaches BSEB mathematics may be excellent at that and still never have seen an IB Paper 3. Self-study with past papers works for some disciplined learners.",
        "Live online tuition at home is the middle path. The tutor knows the specification, the student does not travel, and lessons shift when the family calendar does. The limits are plain: it depends on a stable internet connection and a quiet corner, and a student has to be willing to practise between sessions.",
      ],
      table: {
        caption: "Ways to study an international syllabus from Rafiganj",
        columns: ["Option", "Knows IB or IGCSE papers", "Travel", "Schedule", "Best fit"],
        rows: [
          ["Live online one-to-one at home", "Yes, matched to the exact course", "None", "Moves with school and festival weeks", "Any programme, any level"],
          ["Coaching centre in Gaya or Patna", "Rarely", "Long, daily or weekly", "Fixed batch hours", "JEE or NEET aspirants, not IB-specific"],
          ["Local private tutor in town", "Seldom", "Short", "Flexible", "Foundation content in maths and science"],
          ["Self-study with past papers", "Only if the student digs in", "None", "Total freedom", "Motivated students in a strong subject"],
        ],
      },
    },
    {
      heading: "How Chhath, the Bihar summer and the monsoon shape the study year in Rafiganj",
      paragraphs: [
        "Rafiganj runs on a different timetable from a metro. Summers are punishing, with May and June afternoons often too hot to concentrate and power supply at its weakest. Monsoon rain in July and August swells the Dhawa and nearby streams, and a storm can cut electricity for a day. Evening lessons held after dinner with a charged laptop and a phone hotspot ready are the safe default.",
        "Chhath in late October or November is not an interruption but the centre of the year. Aurangabad district, with its Sun temple at Deo, sees huge gatherings, and families travel, fast and prepare for days. Lessons are paused for the main days and restarted with a short recap. Durga Puja, Diwali and Holi, plus the wedding season that runs through winter, create smaller gaps.",
        "The exam side runs on three clocks: Bihar board papers in February and March, IGCSE sessions in February to March, May to June and October to November, and IB sessions in May and November. A student following an international syllabus can easily find that the Bihar year and the international year do not line up.",
      ],
      table: {
        caption: "The Rafiganj study calendar",
        columns: ["Months", "What is happening", "Effect on study", "How lessons adapt"],
        rows: [
          ["Jan to Mar", "BSEB exams, IGCSE February and March series, Holi", "Heavy exam pressure and festival colour", "Mock papers and short targeted review"],
          ["Apr to Jun", "IB May and IGCSE May or June papers, peak heat", "Fatigue and frequent outages", "Early evening slots, buffer for power cuts"],
          ["Jul to Sep", "Monsoon, school reopens, IB results in July", "New topics and flooded roads", "Foundation lessons, online-only flexibility"],
          ["Oct to Nov", "Durga Puja, Chhath, Diwali, IB and IGCSE November sessions", "Long festival gaps", "Compressed revision and a rescheduling margin"],
          ["Dec", "Winter wedding season, results planning", "Travel and guests", "Lighter weekly rhythm"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Rafiganj go after school?",
      paragraphs: [
        "The Association of Indian Universities issues equivalence for the IB Diploma, which is what most Indian universities ask to see. CUET-UG has become the shared gate for central universities, including those in Delhi, Hyderabad and Varanasi. State options such as Patna University and Magadh University in Bodh Gaya accept students from varied boards, though a family should confirm the exact documents required.",
        "For engineering and medicine the rules matter. JEE Main, JEE Advanced and NEET each define subject and eligibility conditions that can be met by IB or IGCSE students only if certain subject choices are made at Class 11 and 12. Check them with the National Testing Agency, JoSAA and the Bihar counselling authority before the subject list is locked.",
        "Study abroad is the other route. UK, Canadian, Australian and American universities look at predicted and final IB grades or A Levels, with SAT or IELTS requirements sometimes added. Many Bihar students also consider IIT Patna, NIT Patna and AIIMS Patna, which are reached through national tests rather than board marks.",
        "IGCSE students either move to the IB Diploma or A Level, or return to an Indian board for Class 11. A tutor can discuss subject choices honestly and prepare the student for whichever route is chosen, but a school counsellor should take part in that decision.",
      ],
    },
    {
      heading: "How is IB Mathematics AA and AI taught, and what about the sciences?",
      paragraphs: [
        "Analysis and Approaches is the route for students who like algebra, calculus and proof. It is the usual choice for aspiring engineers, physicists and mathematicians. Applications and Interpretation suits those headed for economics, business, psychology or design, with a heavier statistics and calculator component. Because a Bihar student's earlier maths is often strong on procedure, Approaches feels natural, but the exam still asks for explained reasoning.",
        "Where tutoring matters most is the unfamiliar paper format. Paper 1 allows no calculator and tests algebraic fluency; Paper 2 allows technology and rewards correct setup and interpretation. We begin by asking the student to attempt a past paper cold, then walk through every lost mark to see whether the cause was knowledge, speed or presentation.",
        "In the sciences the pattern repeats. Physics rewards units, estimation and clear derivations. Chemistry exposes weak mole arithmetic early. Biology demands exact terminology. Students coming from a BSEB or CBSE background usually have solid theory and less practice with data-response questions, so lessons use real examination data tables and graphs.",
        "Internal assessments are the student's own investigations. A tutor explains what the criteria reward and how to plan a procedure, but never drafts the write-up. Higher Level learners are given longer sessions near mocks and Standard Level learners shorter, more frequent ones.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, Cambridge or Edexcel: how do you choose?",
      paragraphs: [
        "Cambridge IGCSE papers come in Core and Extended tiers for many subjects. Core limits the top grade, while Extended opens the full range from A* downward. Pearson Edexcel International GCSE uses Foundation and Higher tiers. For any student who may continue into a science or mathematics stream, the stretching tier is usually safer, provided the preparation is steady.",
        "Choosing tier is partly about confidence. A pupil who struggles with algebra may do better securing a good grade at Core than missing grades at Extended, and the entry decision is usually the school's. If a family is studying privately or through an online school, ask early who enters the candidate and by what date.",
        "The subject mix matters as much. A standard spread combines English, mathematics, two or three sciences, a language and one humanities or business subject. Hindi as a second language is available and relatively quick to prepare for a Hindi-speaking home. Additional Mathematics helps those aiming at the Diploma at higher level.",
        "For Rafiganj students the common stumbling block is extended English writing: summaries, directed writing and a clear argumentative paragraph. Content knowledge is rarely the issue. Short, regular writing practice with feedback usually closes the gap within a term.",
      ],
    },
  ],

  process: [
    { title: "Send us the details", description: "Write on WhatsApp or by email with the board, subject, level and the exam session your child is aiming for." },
    { title: "Meet your tutor match", description: "We propose a tutor who has taught that exact course and share a brief profile before anything else happens." },
    { title: "Take the free first lesson", description: "A live session on a real topic, so you can judge the teaching style at no cost." },
    { title: "Get the rate in writing", description: "If you wish to continue, we send the rate and plan in writing and wait for your agreement." },
    { title: "Study weekly with notes", description: "Regular live sessions, a short written summary after each, and a tutor change if the pairing is not right." },
  ],

  whyPoints: [
    { title: "A tutor for your exact paper", description: "Someone who has taught the course your child sits, rather than a general maths or science teacher." },
    { title: "Timed for Rafiganj life", description: "Evening slots, buffer minutes for load-shedding, and a pause around Chhath and wedding weeks." },
    { title: "Straight talk on local options", description: "We say plainly that no school nearby offers these programmes, and what that means for planning." },
    { title: "Parents stay informed", description: "A brief written summary after each lesson shows topics covered, mistakes spotted and the next target." },
    { title: "Coaching, not ghost work", description: "Tutors explain method and content; assessed coursework remains the student's own." },
    { title: "Easy to start, easy to leave", description: "Free first lesson, written rates and a tutor swap without a fee if things do not fit." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE schools in Rafiganj?", answer: "We could not confirm any. Schools in Rafiganj and across Aurangabad district follow BSEB, CBSE or ICSE, and none appears in the IB directory or among registered Cambridge and Edexcel centres. Families who want an international syllabus usually study through an online route, a boarding school elsewhere, or after relocating. If a local school adds one of these programmes, we can match tutors to its subject list quickly." },
    { question: "Do tutors visit homes in Rafiganj?", answer: "No. IB Gram tutors do not visit homes in Rafiganj, because in-person home tuition runs only in Gurugram and parts of Delhi NCR. What we offer in Rafiganj is online home tuition: a live, private lesson over video while your child sits at home. It removes the problem of finding a local teacher who knows the syllabus." },
    { question: "How do I find an IB tutor in Rafiganj for a particular subject?", answer: "Message us with the programme, subject, level and exam session. We choose a tutor who has taught that specific course, share a short profile and arrange a free first lesson. If the chemistry between tutor and student is wrong, we replace the tutor without charging extra." },
    { question: "What does IGCSE home tuition in Rafiganj cost?", answer: "The rate depends on the subject, the tier, how many lessons a week you want and how long the plan runs. We do not publish prices. After the free first lesson we send the rate in writing, so there is nothing to negotiate verbally and nothing begins until you accept." },
    { question: "Will slow internet or power cuts ruin the lessons?", answer: "They can interrupt a lesson, but they need not ruin the course. We recommend a charged laptop, a phone hotspot as backup and a lesson time away from peak load-shedding. If a session is lost to an outage, it is rescheduled rather than counted against you." },
    { question: "My child is in a BSEB or CBSE school. Can they move to IGCSE or IB?", answer: "Yes, though the move is easier before Class 9 for IGCSE and before Class 11 for the Diploma. Content is usually not the problem. Command words, extended writing and the internal assessment method are new, and a tutor can teach those over a few months. Whether a school will accept the transfer is its own decision." },
    { question: "Which IB exam sessions can you prepare for?", answer: "Both the May and November sessions. Your school or registered centre decides the session your child is entered for, so we plan backward from that date. IB results are released in July and January respectively." },
    { question: "Do your tutors write the IA, Extended Essay or TOK essay?", answer: "No. Tutors teach method, explain assessment criteria and give feedback on ideas the student produces. The internal assessments, Extended Essay, TOK essay and any coursework are written by the student alone, which is also what the IB and Cambridge expect." },
    { question: "What happens in the free first lesson?", answer: "It is a full live lesson on a real topic from your child's syllabus with a matched tutor. You pay nothing and promise nothing. Afterwards you receive a brief note on what was covered, and we send the rate in writing if you want to continue." },
    { question: "Do you cover both Cambridge and Pearson Edexcel IGCSE?", answer: "Yes. The two boards differ in paper layout, tiers and assessment style, so we ask which one your child is entered for and match the tutor accordingly. Tell us the subject code if you have it." },
    { question: "Should my child choose Mathematics AA or AI?", answer: "Analysis and Approaches suits students who enjoy calculus and algebraic reasoning and may study engineering or pure science. Applications and Interpretation suits those headed for business, social science or design. A tutor can look at your child's strengths and advise, but the final choice should be made with the school." },
    { question: "Can students from Daudnagar, Kasma or Obra join as well?", answer: "Yes. All lessons are online, so any location in the region works if the connection is stable. We schedule around local bus timings and school hours, and Chhath weeks are planned for in advance." },
    { question: "What time are lessons usually held?", answer: "Most Rafiganj students have lessons in the late afternoon or evening, on weekdays, and on Sunday mornings. Exam-season blocks may add extra slots. Chhath, Durga Puja and heavy rain days are rescheduled, not forfeited." },
    { question: "Is an IB Diploma accepted by Indian universities?", answer: "Generally yes, with an equivalence certificate from the Association of Indian Universities, and CUET-UG is the common route into central universities. For JEE, NEET and Bihar state counselling, eligibility depends on subject choices, so verify the current rules with the relevant authority before finalising subjects." },
    { question: "Can you help a child who is doing IGCSE through an online school?", answer: "Yes, and this is a common Rafiganj case. Online schools often leave students to practise alone. A tutor can go through the specification topic by topic, mark timed papers and explain examiner expectations. We need to know the board and tier before the first lesson." },
    { question: "How do I start?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's board, subject and level. We reply with a tutor suggestion and a free-lesson time, normally within a day or two." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "How the same online service runs in other cities and towns." },
    { label: "IB tutors, all programmes", href: "/ib-tutors/", description: "An overview of IB tutoring from Primary Years to Diploma." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects with board-matched tutors." },
    { label: "Diploma Programme help", href: "/programmes/dp/", description: "Subject support for Class 11 and 12 students." },
    { label: "Middle Years Programme help", href: "/programmes/myp/", description: "Support for criterion-based work in Classes 6 to 10." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "AA and AI at Standard and Higher Level." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of the tutors who teach these syllabuses." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book the free first lesson." },
    { label: "IB and IGCSE tutors in Aurangabad, Bihar", href: "/aurangabad-bihar/", description: "The district headquarters, a short bus ride from Rafiganj." },
    { label: "IB and IGCSE tutors in Gaya", href: "/gaya/", description: "The nearest large railway and coaching city." },
    { label: "IB and IGCSE tutors in Patna", href: "/patna/", description: "Bihar's capital and the main hub for higher education." },
  ],

  closingHeading: "Book a free first lesson from home in Rafiganj",
  closingBody:
    "Share your child's programme, subject and exam session and we will find a tutor who has taught it. The first lesson is free, and the rate is put in writing before you decide. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
