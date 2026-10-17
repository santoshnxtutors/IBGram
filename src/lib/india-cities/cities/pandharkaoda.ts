import type { CitySeoPage } from "../types";

/**
 * Pandharkaoda (Pandharkawada) is a small Yavatmal district town in Vidarbha with no IB or Cambridge
 * school we could confirm, so stripSchools is empty. The clusters point to Nagpur, where the names
 * were taken from the already checked Nagpur page, and the page says plainly that local options are thin.
 */
export const pandharkaoda: CitySeoPage = {
  slug: "pandharkaoda",
  countryName: "Pandharkaoda",
  countryNameLong: "Pandharkaoda, Maharashtra",
  demonym: "Pandharkaoda",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early mornings before the Vidarbha sun climbs and evenings once the day's heat has eased, with weekend slots kept flexible",
  lastUpdated: "2026-09-21",
  state: "Maharashtra",
  stateCode: "IN-MH",
  geo: { latitude: 19.9594, longitude: 78.7261 },
  wikipedia: "https://en.wikipedia.org/wiki/Pandharkawada",
  alternateNames: ["Pandharkawada", "Pandharkavda", "Pandharkawda", "Pandharkawada Yavatmal"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Pandharkaoda | Online Home Tuition",
  metaDescription:
    "Online home tuition for IB and IGCSE students in Pandharkaoda, Yavatmal district: live one-to-one lessons, written notes and a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Pandharkaoda",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR PANDHARKAODA STUDENTS",
  heroSubtitle:
    "Private tuition from home for IB and IGCSE students in Pandharkaoda, taught as live one-to-one lessons on a laptop. Our tutors do not visit homes in Pandharkaoda, because in-person home tuition runs only in Gurugram and parts of Delhi NCR, but the lessons are private, timed to your child's day, and given by someone who has taught the exact syllabus. Share the programme, subject and exam session and we will arrange a free trial lesson.",
  primaryKeyword: "IB and IGCSE tutors in Pandharkaoda",
  imageAltText: "Pandharkaoda student at a home desk in a live online IB Physics lesson with a tutor",
  secondaryKeywords: [
    "IB tutor in Pandharkaoda",
    "IGCSE tutor in Pandharkaoda",
    "IB home tuition Pandharkaoda",
    "IGCSE home tuition Pandharkaoda",
    "IB private tuition Pandharkaoda",
    "IB Maths tutor Pandharkaoda",
    "IGCSE Maths tutor Pandharkaoda",
    "IB Physics tutor Pandharkaoda",
    "IB Chemistry tutor Pandharkaoda",
    "IB Biology tutor Pandharkaoda",
    "IB DP tutor Pandharkaoda",
    "IB MYP tutor Pandharkaoda",
    "IB PYP tutor Pandharkaoda",
    "IGCSE online tuition Pandharkaoda",
    "IB tutor Pandharkawada",
    "IGCSE tutor Pandharkawada Yavatmal",
    "IB online classes Yavatmal district",
    "IB tuition Vidarbha",
  ],

  heroTrustPoints: [
    "Live one-to-one lessons, no recorded videos or large batches",
    "Tutors who have taught IB DP, MYP, PYP and Cambridge or Edexcel IGCSE",
    "Slots set around Vidarbha summer heat and the school day",
    "Free trial lesson and a written note after every class",
    "Tutor change at no charge if the fit is wrong",
  ],
  heroStats: [
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before you decide" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "Looking for IB or IGCSE help in a cotton-belt town",
    paragraphs: [
      "Pandharkaoda, also spelt Pandharkawada, is a municipal town in Yavatmal district in eastern Maharashtra's Vidarbha region, lying along the Nagpur to Hyderabad highway, with dense forest and the Tipeshwar sanctuary in the surrounding country. It is a market and farm town. Most children here study in the Maharashtra State Board, in Marathi or semi-English medium schools, and aim for MHT-CET, NEET or the Class 12 science route. A few families follow something different: a father in a bank transfer, a doctor from the district hospital, parents who have lived abroad, or those who simply want an international degree route for a bright child.",
      "Those families have a practical problem. The closest IB and Cambridge IGCSE campuses are in Nagpur, a long road journey away, and none in the town that we have been able to confirm. A child may be enrolled in an online international school, studying from a laptop, or preparing privately for IGCSE as an external candidate through a centre elsewhere. Either way, the person who explains Paper 2 of IB Mathematics or the command terms of IGCSE Biology is not next door.",
      "This is the gap our IB and IGCSE tutors in Pandharkaoda are built to close. Lessons are live and private, the tutor teaches from India on Indian time, and the student sits at home with a laptop and a steady connection. We do not send tutors to the house, and we say so plainly below. We are an independent service with no tie to the IB, Cambridge, Pearson or any school, and tutors coach rather than write assessments or coursework for students.",
    ],
  },

  programmesIntro:
    "In a district town the four IB programmes arrive in unusual ways: through an online school, a move from a metro, or a plan to prepare for university abroad. Here is how tutoring adapts to each stage.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Concept-led primary learning around units of inquiry and a final Exhibition. Tutoring stays gentle: reading aloud, number work, and speaking in full sentences about what was discovered.",
      countryNote:
        "A child in Pandharkaoda may switch between Marathi at school and English in the PYP programme online. Short lessons build confidence in the second language without overloading the day.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked against criteria, plus the Personal Project. Tutors show students how to read a task and structure criterion-ready answers.",
      countryNote:
        "Moving from the Maharashtra State Board textbook style to criterion marking is a real adjustment. Weekly sessions with a tutor who knows MYP shorten it.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, Theory of Knowledge, the Extended Essay and CAS. Tutoring covers examined papers and assessment method but never the writing of the assessments themselves.",
      countryNote:
        "Diploma students from a small Vidarbha town often have no Higher Level teacher within reach, so a private tutor becomes the person who moves through the syllabus at pace.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three DP courses together with a career-related study. Tutors support the DP courses and academic language skills.",
      countryNote:
        "CP is rare in this part of Maharashtra. We take requests individually and match a tutor to the DP courses chosen.",
    },
  ],

  subjectsIntro:
    "Subject tutors are chosen for the exact course and level, and for patience with a student whose earlier schooling was in Marathi or another board.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, vectors and proof-style reasoning, with Paper 1 fluency without a calculator built up in small daily steps." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology-supported problem solving, taught alongside a student's graphing calculator." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, waves, fields and the data-based questions that make up much of the paper." },
    { name: "Chemistry", levels: "SL / HL", description: "Quantitative chemistry, energetics, equilibrium and organic pathways, with attention to the unit slips that cost marks." },
    { name: "Biology", levels: "SL / HL", description: "Cells to ecosystems, with exact terminology and how long answers are marked." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and global economy, drawing on agriculture and trade examples from the Indian context." },
    { name: "Business Management", levels: "SL / HL", description: "Case-study reading, finance calculations and applying tools to unseen organisations." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and exam pseudocode, practised through short exercises." },
    { name: "Psychology", levels: "SL / HL", description: "Studies, evaluation vocabulary and the structure of an extended response." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis, comparative writing and the individual oral, taught as technique." },
    { name: "Marathi A / Hindi B", levels: "SL / HL", description: "A natural pairing for a Vidarbha student; tutors work on literary analysis and structured writing in the language the student already speaks." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Systems thinking, land use and water, a close fit for a student who has grown up near forest and farmland." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion practice on knowledge questions and the exhibition, coached on structure without ghost-writing." },
  ],
  igcseSubjectsIntro:
    "IGCSE tutoring covers Cambridge and Pearson Edexcel specifications. Core or Extended tier is chosen early because it limits the highest grade available.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics with a clear conversation about which tier fits." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "Calculus and functions ahead of IB Mathematics AA or A Level." },
    { name: "Physics (0625 / 4PH1)", levels: "Core / Extended", description: "Forces, electricity and waves, with practice for the practical-skills paper." },
    { name: "Chemistry (0620 / 4CH1)", levels: "Core / Extended", description: "Moles, reactivity, organic chemistry and the analysis questions that return every session." },
    { name: "Biology (0610 / 4BI1)", levels: "Core / Extended", description: "Cells, inheritance and ecology, plus writing about experiments in exam language." },
    { name: "Computer Science (0478)", levels: "Single tier", description: "Programming logic, databases and trace tables." },
    { name: "English as a Second Language", levels: "Single tier", description: "Reading, directed writing and speaking for students whose home language is Marathi." },
    { name: "Hindi as a Second Language (0549)", levels: "Single tier", description: "Comprehension and writing tasks to the board's expectations." },
    { name: "Economics (0455) and Business Studies (0450)", levels: "Single tier", description: "Definitions, calculations and data-response practice." },
  ],

  regionsTitle: "Pandharkaoda and the places we serve around it",
  regionsIntro:
    "Online lessons need only a laptop and a connection, so the real question is the evening: power cuts, load-shedding hours and the heat. For each area we say what to expect.",
  regions: [
    { name: "Pandharkaoda town centre", note: "The market area with most private schools and clinics; mobile and broadband coverage is generally good, so online lessons run without fuss." },
    { name: "Along the Nagpur-Hyderabad highway", note: "Families living off the highway have the best data connections; evening noise from traffic is the main thing to plan around." },
    { name: "Kelapur side", note: "Neighbouring market town for farm families; most children here follow Maharashtra State Board, with a few online IB learners." },
    { name: "Ghatanji side", note: "Smaller town to the north; good for early morning sessions before the field work day begins." },
    { name: "Zari Jamani and the forest fringe", note: "Villages near the forest edge where signals vary; we suggest a dongle backup and a lesson recorded for revision only with permission." },
    { name: "Wani", note: "A coal-mining town in the wider Yavatmal district where officers' families sometimes look for English-medium and international options." },
    { name: "Yavatmal city", note: "The district headquarters, with the district's colleges, a medical college and the nearest larger school choice." },
    { name: "Adilabad, Telangana", note: "A cross-border town south of Pandharkaoda along the same highway; students there can take the same online lessons." },
    { name: "Tipeshwar sanctuary villages", note: "Remote settlements where internet access can be patchy; we plan lessons on the best-connected days and keep notes written." },
  ],

  schoolClusters: [
    {
      city: "Nearby: Nagpur (MIHAN and Wardha Road)",
      note: "Pandharkaoda has no IB or Cambridge school we could confirm. Nagpur is the nearest city with international campuses, a long road trip, so local options are limited and boarding or relocation is the usual route.",
      schools: ["D Y Patil International School, MIHAN"],
    },
    {
      city: "Nearby: Nagpur (central)",
      note: "Central Nagpur has established Cambridge curriculum schools that some Vidarbha families consider for Class 9 and above.",
      schools: ["Centre Point School International", "VIBGYOR World Academy"],
    },
    {
      city: "Nearby: Nagpur (Hingna Road)",
      note: "A day-cum-residential Cambridge school on the western side of Nagpur draws families from further out.",
      schools: ["International School of Scholars"],
    },
  ],
  schoolDisclaimer:
    "This is an independent tutoring site with no link to any school named. The Nagpur schools are listed only because they are publicly known to offer an international curriculum, and none is a recommendation. Always verify programmes and admission with the school before you decide.",

  tutorsIntro:
    "Our tutors teach from different parts of India on Indian time, which is a real advantage for a district town. You are not limited to whoever lives in Yavatmal district, so we can match on subject depth alone.",

  modesIntro:
    "In Pandharkaoda the format is online. What we can offer instead is a structure that feels close to a private home lesson.",
  modes: [
    {
      title: "Live online home tuition",
      description: "A private one-to-one lesson over video with a shared digital whiteboard, taken from your own room.",
      bullets: [
        "No tutor visits in Pandharkaoda; home visits run only in Gurugram and parts of Delhi NCR",
        "Lessons run on a laptop with a steady connection and headphones",
        "Working is photographed and shared so the tutor sees every line",
        "A written note follows every lesson for parents",
      ],
    },
    {
      title: "Intensive exam block",
      description: "A short run of more frequent lessons before the May or November session.",
      bullets: [
        "Three or four sessions a week for four to six weeks",
        "Past papers marked against the published mark scheme",
        "Topic list based on mock results",
        "Ends a week before the first paper to leave rest time",
      ],
    },
    {
      title: "Ongoing weekly support",
      description: "One steady lesson per subject through the school year.",
      bullets: [
        "The same tutor all year, so nothing is re-explained",
        "Good for MYP and the first Diploma year",
        "Flexible rescheduling around exams and festivals",
        "Trial lesson free before the first paid week",
      ],
    },
  ],

  sections: [
    {
      heading: "Is it realistic to follow IB or IGCSE from Pandharkaoda?",
      paragraphs: [
        "Yes, though it takes planning. Following the IB or an IGCSE from Pandharkaoda usually means one of three routes: enrolling in an online international school, studying at a boarding or day school in Nagpur or another city, or sitting IGCSE papers privately as an external candidate through an exam centre. Each has costs and trade-offs, and we do not recommend one over another here. We can only say what each means for tutoring.",
        "Online schools place the burden of discipline on the student, because there is no classroom around to catch a slip. A tutor with a regular weekly slot acts as that structure. Boarding students in Nagpur come home in the holidays and want a tutor to cover gaps. External candidates need the most help, because they cover the full syllabus and the practical components largely alone.",
        "The main thing a Pandharkaoda family should check is access to the practical components of science subjects. IGCSE Practical Paper 4 or Alternative to Practical Paper 6, and the IB group four project, need real equipment or a school lab. Without one, a student will rely on tutor-guided virtual demonstrations to prepare for the questions, but cannot replace the real experience.",
        "If you are unsure which route fits your child, start with the subject and the exam session, and ask for a trial lesson. A tutor can tell within an hour how far a student is from the standard of the course, which is the single most useful piece of information when choosing a route.",
      ],
    },
    {
      heading: "Maharashtra State Board, CBSE, IB or IGCSE: how do they compare?",
      paragraphs: [
        "The Maharashtra State Board (SSC and HSC) is where most children in Pandharkaoda study. It is assessed in Marathi, Hindi or English, with a written final exam, and it feeds into MHT-CET, NEET-UG and JEE through the science stream. IB and IGCSE ask a different kind of work: explanation, data handling and extended writing in English.",
        "Families sometimes worry that a switch will weaken a child's chances in Indian entrance tests. It need not, but it needs care. The IB Diploma and Indian entrance exams overlap in content, though NEET and JEE test speed on questions that the IB would allow a calculator or more time for. Students thinking of both routes should plan their coaching early.",
      ],
      table: {
        caption: "Boards compared from a Vidarbha town",
        columns: ["Board", "Language and style", "Typical next step", "Fit for a Pandharkaoda student who"],
        rows: [
          ["Maharashtra State Board (SSC/HSC)", "Marathi, Hindi or English; textbook-based written papers", "MHT-CET, NEET-UG, JEE Main, state counselling", "Wants a state-quota route and has local school access"],
          ["CBSE", "English or Hindi; NCERT-based papers", "JEE, NEET-UG, CUET-UG", "May relocate for coaching in Nagpur or Hyderabad"],
          ["IB Diploma", "English; internal assessments and May or November papers", "Study abroad or CUET-UG with equivalence", "Enjoys writing, projects and discussion"],
          ["Cambridge or Edexcel IGCSE", "English; subject papers, Core or Extended", "IB Diploma or A Level, then universities", "Is aiming for an international school after Class 10"],
        ],
      },
    },
    {
      heading: "What drives IB and IGCSE tuition rates for Pandharkaoda families?",
      paragraphs: [
        "The rate for IB and IGCSE tuition depends on the subject and level, the tutor's experience, the weekly frequency and the length of the engagement. We quote the figure in writing before you book. There is no published flat price, because Higher Level Physics for a Class 12 student and Class 7 English are different jobs.",
        "For a family in a district town, one cost is absent: nobody drives anywhere. Online lessons also let us choose a tutor purely on subject depth rather than on who lives nearby, so you are not forced into a generalist because the specialist is out of reach.",
        "It helps to spend lessons where they have the most effect. A new MYP student benefits from a weekly slot in the first term. A Diploma student gains most from focused blocks before the mocks and again before the main session. Many Pandharkaoda families also book a single subject first, usually Mathematics, then add a science after the first month.",
      ],
      bullets: [
        "Subject and level: Higher Level Mathematics AA and sciences usually involve more experienced tutors",
        "Programme: PYP, MYP, DP and IGCSE tutors differ in background",
        "Frequency: weekly support costs less than an exam-month intensive",
        "Timing: requests close to an exam session have fewer tutors free",
        "Duration: a longer commitment makes planning easier for both sides",
      ],
    },
    {
      heading: "Online tutor, local coaching class or self-study in Pandharkaoda?",
      paragraphs: [
        "Pandharkaoda families usually weigh three options: a local coaching class, a private online tutor, or self-study from videos and books. Local classes focus on state board and entrance tests, which is useful for those exams but rarely for IB or IGCSE papers. Self-study works for revision, though without marking feedback it is easy to drift. A live private tutor addresses both gaps.",
        "The table lines up the three honestly, including where a private online tutor falls short: the student must keep a quiet space and a working connection, and cannot do hands-on laboratory work at a distance.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Pandharkaoda",
        columns: ["Option", "What it gives", "Limit here", "Suits"],
        rows: [
          ["Live online private tutor", "Exact syllabus, marked practice, flexible slots", "Needs a steady connection; no wet-lab work", "Most IB and IGCSE students"],
          ["Local coaching class", "Peer group, fixed timetable", "Built for state board and entrance tests", "Students also preparing for MHT-CET or NEET"],
          ["Self-study with videos", "Cheap, flexible", "No marking, easy to lose pace", "Revision of known topics"],
          ["Boarding school in a city", "Full school and lab access", "Large cost, leaves home early", "Families set on the full IB experience"],
        ],
      },
    },
    {
      heading: "Heat, harvest and festivals: the Vidarbha study calendar",
      paragraphs: [
        "Vidarbha summers are among the hottest in India, and April to June can push the day above forty degrees. This is also the time of the May exam sessions for older cohorts and the start of a new school year for others. Early morning lessons, before the heat builds, are often the most productive hours. Afternoon sessions in May are best avoided.",
        "The monsoon arrives in June and July, bringing relief and sometimes power cuts and patchy mobile data. A cotton-belt town also has its own rhythm in the farming year: sowing in the monsoon months, then the picking season from late autumn. Many families have relatives working the land, and children travel for weddings and harvest-time gatherings.",
        "Festivals shape the calendar too. Ganeshotsav in August or September, Navratri and Dussehra in October, and Diwali in October or November all fall close to the November IB and IGCSE sessions. Pola, the bullock festival in the monsoon, is a local holiday in the region. We plan lighter weeks around these and place heavy revision before them.",
      ],
      table: {
        caption: "A year of study in Pandharkaoda",
        columns: ["Months", "What is happening locally", "What we plan"],
        rows: [
          ["March to May", "Peak heat, board exams, May IB and IGCSE sessions", "Early morning lessons, past-paper marathons"],
          ["June to August", "Monsoon, Pola, Ganeshotsav, new term", "Settle new subjects, work around power cuts"],
          ["September to November", "Navratri, Dussehra, Diwali, November sessions", "Mock papers early, lighter festival weeks"],
          ["December to February", "Cooler weather, picking season, school exams", "Longest, steadiest stretch for study and catch-up"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from this region go next?",
      paragraphs: [
        "Students from the Pandharkaoda area who finish an IB or IGCSE route usually look in three directions. Some apply to universities abroad, some to Indian private universities, and some to central or state institutions through national entrance tests.",
        "For Indian degrees, the Association of Indian Universities issues equivalence for the IB Diploma and for IGCSE plus A Level combinations. CUET-UG accepts IB students on the subject combinations each university requires. For engineering through JEE Main and medicine through NEET-UG, eligibility rules depend on the subjects studied, so families should read the current NTA bulletin carefully.",
        "In the region, the obvious destinations are in Nagpur: VNIT, the AIIMS campus and Nagpur's universities, and Government Medical College in Yavatmal for those who qualify in NEET. Others look east to Pune or south to Hyderabad. For overseas, students apply to the United Kingdom, Canada, the United States, Australia and Singapore, and we can help with admissions test preparation separately.",
        "Choosing subjects early with the destination in mind saves a year. Ask us for a short conversation about it before the school deadline.",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences tutored online?",
      paragraphs: [
        "Mathematics AA and AI are different in emphasis, and the choice should follow the student's university plan. A future engineer usually takes AA at Higher Level, while someone leaning to commerce or the social sciences may be better with AI. The tutor will help weigh that choice honestly rather than push the harder course.",
        "Online teaching of mathematics works because the tutor can watch handwriting appear in real time on a shared board, then correct method rather than just answers. Calculator work is covered by screen sharing a model calculator. Paper 1 without a calculator needs repeated short practice, which suits a regular schedule.",
        "In Physics, Chemistry and Biology, data-based questions and extended responses cause the most lost marks. We practise those methodically. For practicals, a tutor can talk through how a method works and how an examiner would expect it to be written up, though a student still needs real lab time at school.",
        "Students should keep their own formula booklet and past papers close by. Starting from the earliest topic, we move to full papers in the final term, because understanding must come before speed.",
      ],
    },
    {
      heading: "Core or Extended: choosing IGCSE tiers and subjects",
      paragraphs: [
        "Most IGCSE subjects at Cambridge and Edexcel offer Core and Extended tiers. Core caps the grade, while Extended leaves room for the highest bands but asks more of the student. A child hoping to continue to IB Mathematics AA or A Level should be in Extended from the start.",
        "Cambridge and Edexcel papers differ in structure and style. A tutor needs to know which board and syllabus code the student sits, such as 0620 for Chemistry or 4CH1 on the Edexcel side, before preparing materials. We ask at the booking stage.",
        "When choosing subjects, we suggest a balanced set: at least one strong science, a mathematics tier that stretches without breaking confidence, and a language that suits the child. English is essential, and Marathi or Hindi is an easy second.",
      ],
    },
  ],

  process: [
    { title: "Tell us what you need", description: "Send the board and programme, the subject, the level, the exam session and your town. A WhatsApp message to +91 7439 368 115 is enough." },
    { title: "We shortlist tutors", description: "You hear from us with tutors who have taught that exact syllabus and who can teach online in your evening slots." },
    { title: "Free trial lesson", description: "The first lesson is free and is a real lesson on a topic the student needs." },
    { title: "Plan and rate in writing", description: "Weekly slots, subject and rate are confirmed in writing before paid lessons begin." },
    { title: "Review and adjust", description: "A note follows each lesson, and the tutor or schedule can change if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Plain about what we offer", description: "Online only in Pandharkaoda, with no pretence of a house visit." },
    { title: "Exact syllabus teaching", description: "Tutors are matched to the course, level and exam board, not a broad subject label." },
    { title: "Notes after each class", description: "A short written summary shows what was covered and what is next." },
    { title: "Planned around heat and power", description: "Slots avoid the Vidarbha afternoon and are easy to shift on a bad-connection day." },
    { title: "Coaching, not ghost-writing", description: "Tutors never write assessments, essays or coursework for a student." },
    { title: "Easy to change", description: "If the first match is wrong, we swap the tutor at no charge." },
  ],

  faqs: [
    { question: "Do IB tutors come to the house in Pandharkaoda?", answer: "No. Our tutors do not visit homes in Pandharkaoda, because in-person home tuition runs only in Gurugram and parts of Delhi NCR. Lessons are live and online, one-to-one, taken from your own room. They are private and personal in feel, with a shared whiteboard, and many families find them as effective as a visit." },
    { question: "How can I find an IGCSE tutor in Pandharkaoda for Extended Mathematics?", answer: "Send us the board, the tier and the exam session. We match a tutor who teaches Cambridge 0580 or Edexcel 4MA1 Extended and book a free trial lesson. Because lessons are online, you are not limited to tutors who live in Yavatmal district, so the match depends on subject depth." },
    { question: "What do IB and IGCSE tutors in Pandharkaoda charge?", answer: "The rate depends on subject, level, tutor experience and weekly frequency, and we quote it in writing before you book. We publish no flat price. A Higher Level science tutor usually costs more than a middle-school English slot. The first lesson is free so you can judge quality before spending." },
    { question: "Is there an IB school in Pandharkaoda?", answer: "We have not been able to confirm any IB or Cambridge school in the town, so we name none. The nearest international campuses are in Nagpur. Many local students study through an online international school or sit IGCSE as private candidates. Verify any school directly before relying on it." },
    { question: "Can my child sit IGCSE as a private candidate from here?", answer: "Often yes, through an authorised exam centre, though availability and fees vary and practical papers need arrangements. We do not run exams. A tutor can prepare your child for the papers, and we suggest checking the registration deadline with the centre early." },
    { question: "Will the tutor write the Internal Assessment or Extended Essay?", answer: "No. Tutors explain the criteria, help plan and give feedback on understanding, but never write or rewrite an internal assessment, Extended Essay, TOK essay or coursework. The IB and the school require the work to be the student's own." },
    { question: "What internet speed do online lessons need?", answer: "A stable connection of a few megabits per second is enough for a video call and a shared whiteboard. Wired broadband or a good 4G signal works. In villages with weak coverage we suggest a second connection as backup and a lesson time at the best-signal part of the day." },
    { question: "Is the first lesson really free?", answer: "Yes. The first lesson is free and carries no obligation. It is a proper lesson on a topic the student needs, with a written note afterwards. If the tutor is not right, we find another before any paid class begins." },
    { question: "What time of day suits Pandharkaoda students?", answer: "Early morning and evening, because afternoons in Vidarbha are very hot between April and June. Most lessons run after school or after dinner, and on weekend mornings. We also plan around power cuts, and a lesson can move at short notice." },
    { question: "Do you teach IB MYP and PYP as well as the Diploma?", answer: "Yes. Tutors cover PYP numeracy and literacy, MYP subjects against the criteria, and the full Diploma. One tutor can stay with a student from MYP into DP, which saves a restart." },
    { question: "Can IB students still take NEET or JEE?", answer: "Yes, within the eligibility rules the testing agency publishes each year. IB students need the right subject combination and recognised equivalence, so check the latest bulletin. A tutor can help with content, but cannot interpret admission rules for you." },
    { question: "How do I choose between IB Maths AA and AI?", answer: "Pick Analysis and Approaches if you may study engineering, mathematics or physics, and Applications and Interpretation if statistics and modelling suit your degree. Both exist at Standard and Higher Level. A trial lesson on each course before the school deadline helps the decision." },
    { question: "Which IGCSE boards do you support?", answer: "Cambridge International and Pearson Edexcel. Tell us the syllabus code, for example 0625 for Physics or 4PH1, and we match a tutor who has taught it. If you do not know the code, the school's subject list will show it." },
    { question: "When should I book for the November session?", answer: "By early August is ideal, so there is a long preparation window. November overlaps with Dussehra and Diwali in Maharashtra, so we plan lighter weeks around the festivals and place past-paper practice earlier." },
    { question: "How do I get started?", answer: "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with the programme, subject, level, school or online school, and your town. We reply with a matched tutor and a trial lesson time, usually within the day." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Nagpur", href: "/nagpur/", description: "The nearest city with international campuses, relevant for boarding and relocation plans." },
    { label: "IB and IGCSE tutors in Wardha", href: "/wardha/", description: "A Vidarbha neighbour with online lessons." },
    { label: "IB tutors across India", href: "/india/", description: "Online IB and IGCSE tuition for students anywhere in India." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How our IB tutoring works, programme by programme." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject help." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "Subject, TOK and Extended Essay coaching for the Diploma." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI at Standard and Higher Level." },
    { label: "Admissions test preparation", href: "/admissions/test-prep/", description: "SAT, ACT and similar tests for overseas applications." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of tutors by subject and programme." },
    { label: "Contact us", href: "/contact-us/", description: "WhatsApp or email to book a free trial lesson." },
  ],

  closingHeading: "Start with a free trial lesson from Pandharkaoda",
  closingBody:
    "Share the programme, the subject and the exam session. We will match a tutor, explain exactly how the online lessons run, and the first class costs nothing. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com.",
};
