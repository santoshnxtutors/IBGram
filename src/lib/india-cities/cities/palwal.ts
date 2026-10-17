import type { CitySeoPage } from "../types";

/**
 * Palwal has no school we can confirm as an IB or Cambridge/Edexcel IGCSE centre, so stripSchools stays
 * empty. The nearby-city cluster reuses the Faridabad schools already verified for the Faridabad page.
 */
export const palwal: CitySeoPage = {
  slug: "palwal",
  countryName: "Palwal",
  countryNameLong: "Palwal, Haryana",
  demonym: "Palwal",
  state: "Haryana",
  stateCode: "IN-HR",
  flagCode: "in",
  countryCode: "IN",
  region: "Haryana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots after school and Sunday mornings, kept clear of winter fog mornings and the wheat and paddy harvest weeks when family schedules shift",
  lastUpdated: "2026-09-21",

  title: "IB & IGCSE Tutors in Palwal | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Palwal families: DP, MYP, PYP and Cambridge subjects taught one to one from home over video, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Palwal",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR PALWAL, LIVE ONLINE",
  heroSubtitle:
    "Palwal sits on the Delhi-Agra highway about 60 km south of the capital, and its families increasingly look towards Faridabad and Gurugram for schooling. If you want private tuition from home for an IB or Cambridge IGCSE student, IB Gram offers one-to-one lessons on video with a tutor who has taught your child's exact course. Nobody drives out to Palwal for the lesson, so the tutor can be anyone in India who suits the subject.",
  primaryKeyword: "IB and IGCSE tutors in Palwal",
  imageAltText: "Palwal student studying IB Diploma mathematics with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor in Palwal",
    "IGCSE tutor in Palwal",
    "IB home tuition Palwal",
    "IGCSE home tuition Palwal",
    "IB private tuition Palwal",
    "IB Maths tutor Palwal",
    "IGCSE Maths tutor Palwal",
    "IB Physics tutor Palwal",
    "IB Chemistry tutor Palwal",
    "IB Biology tutor Palwal",
    "IB DP tutor Palwal",
    "IB MYP tutor Palwal",
    "IB PYP tutor Palwal",
    "IGCSE online tuition Palwal",
    "online IB tutor Palwal Haryana",
    "Cambridge IGCSE tutor Palwal",
    "IB tutor Hodal",
    "IGCSE tutor near Faridabad and Palwal",
    "online tuition for IB students in Palwal district",
  ],

  heroTrustPoints: [
    "Tutors picked for the exact IB or Cambridge IGCSE subject and level",
    "Live private lessons on video, taken from your own home in Palwal",
    "A free trial lesson before you agree to anything",
    "An independent service with no tie to any school or examining body",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
    { value: "Online only", label: "Format for Palwal" },
    { value: "Free trial", label: "First lesson costs nothing" },
  ],

  intro: {
    heading: "IB and IGCSE tuition when you live in Palwal but the syllabus is international",
    paragraphs: [
      "Anyone typing IB and IGCSE tutors in Palwal into a search box is usually in one of three positions: the child already studies IB or Cambridge at a school in Faridabad or Gurugram and needs help with one subject, the family is considering moving the child out of a Haryana Board or CBSE school, or a parent wants a private tutor at home and assumes one must be nearby. This page speaks to all three, and it starts with the format, because that is where most searches go wrong.",
      "Every IB Gram lesson for a Palwal family runs live on video. The student sits in their own room, the tutor teaches from wherever they are in India, and a shared whiteboard carries the working. Nobody makes the trip down the Delhi-Agra road. That is the honest meaning of online home tuition here: private, one-to-one tuition from home, delivered by screen, with the tutor chosen for the syllabus rather than for their postcode.",
      "Palwal district is counted within the National Capital Region, which sometimes leads families to expect the same door-to-door service that exists in Gurugram. It does not extend this far. Home visits are limited to Gurugram and selected parts of Delhi NCR, and Palwal is outside them, so the plain answer for this city is online lessons, every time, for every programme.",
      "IB Gram is an independent tutoring service. We have no affiliation with the International Baccalaureate, Cambridge, Pearson Edexcel or any school mentioned on this page. Our tutors coach understanding, technique and exam skills; they do not write Internal Assessments, Extended Essays, TOK essays or coursework. The first lesson is free, and a tutor can be changed if the fit is wrong.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP support by subject and level",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended",
      "Online one-to-one lessons; no tutor travels to Palwal",
      "A written note after each session and a free trial to begin",
    ],
  },

  programmesIntro:
    "In Palwal the IB rarely arrives as a straight admission at age three. It usually comes through a move: a job transfer to the Gurugram or Faridabad belt, a decision to change board before Class 9, or a sibling who already studies an international curriculum. The four programmes below explain what each stage asks of a student and where a tutor tends to be useful.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Children in the PYP learn through six transdisciplinary themes and finish with a small group Exhibition instead of a board paper. Tuition here is light: reading stamina, confidence with number bonds and tables, and the habit of asking a good question.",
      countryNote:
        "For Palwal children, a PYP tutor mostly helps the family bridge a Hindi-medium or local English-medium start with the English-heavy inquiry style used by IB primary classrooms in Faridabad and Gurugram.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP teachers grade against published criteria, and a strong answer explains why, not just what. Students also complete a Personal Project in the final year, which asks them to manage their own timeline over several months.",
      countryNote:
        "Palwal students who join an MYP class from HBSE or CBSE often need help writing in full analytical paragraphs in Sciences, Individuals and Societies and Language and Literature, where rote answers earn low criterion marks.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects sit beside TOK, the Extended Essay and CAS. Internal assessments carry a meaningful slice of most grades, and the written papers reward structured reasoning under time pressure.",
      countryNote:
        "Diploma tuition asked for by Palwal families concentrates on Maths, the sciences and Economics, and tends to begin at the very start of Grade 11 because the two-year course leaves little slack for a slow first term.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme pairs at least two DP courses with a vocational pathway, a reflective project and personal and professional skills. It is offered by only a small number of Indian schools.",
      countryNote:
        "Palwal has no local CP school that we can confirm, so any CP student who contacts us is enrolled elsewhere or studying at a distance, and tutoring covers the DP courses inside their combination.",
    },
  ],

  subjectsIntro:
    "A Palwal student gets a tutor matched at course level, not just at subject level. Maths Analysis and Approaches at HL is a different job from Applications and Interpretation at SL, and Chemistry HL asks for far more organic and energetics depth than the SL course does. Tell us the exact combination and we start from there.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, complex numbers, proof and the long HL Paper 3 problems, with steady practice on unfamiliar question styles." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Probability distributions, modelling and technology use on the GDC, plus a workable exploration topic chosen early." },
    { name: "IB Physics", levels: "HL / SL", description: "Kinematics to fields and quantum topics, uncertainty handling and the write-up expected in the scientific investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, bonding and organic reaction routes, with regular drills on the data booklet and calculation layout." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and physiology, with attention to how data-response and essay questions are marked." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram discipline, real-world examples for Paper 1 and the internal commentary portfolio built across the course." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, financial calculations and the way command terms decide how much evaluation a question wants." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen extracts, comparative essays and rehearsal for the individual oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and networks theory, plus planning the solution and documentation for the internal product." },
    { name: "IB Psychology", levels: "HL / SL", description: "Learning the studies well enough to use them as evidence, and shaping a full response to a short essay prompt." },
    { name: "IB Hindi A and Hindi B", levels: "HL / SL", description: "Literary analysis for Hindi A and receptive and productive skills for Hindi B, which many Haryana families choose as a strong home language." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study recall, data-response tasks and the fieldwork investigation that feeds the internal assessment." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Talking through knowledge questions until the student can build their own argument for the exhibition and the essay." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Turning a broad curiosity into a research question that can be answered in 4,000 words. Guidance and feedback only." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Practising inquiry design, data handling and reasoned conclusions so MYP criteria feel routine before DP begins." },
    { name: "IB MYP Language & Literature", levels: "MYP 1-5", description: "Building analytical paragraphs and controlled writing across the criteria, and keeping the Personal Project journal current." },
  ],

  igcseSubjectsIntro:
    "IGCSE exists mainly through Cambridge and Pearson Edexcel, and the two boards phrase the same topic differently. A Palwal student preparing for either gets a tutor who works from the correct specification code, tier and past-paper series rather than a general textbook.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Algebra, geometry and statistics in exam form, with careful method layout so partial marks are not lost." },
    { name: "IGCSE Additional Mathematics", levels: "Grade 9-10", description: "Differentiation, functions and coordinate geometry, useful preparation for IB Maths AA or A Level." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, energy, circuits and waves, plus the planning and analysis skills tested in the practical-style paper." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, reactivity, electrolysis and organic basics, with worked practice on qualitative analysis tables." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Enzymes, transport, inheritance and ecology, along with reading experimental data cleanly." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Grade 9-10", description: "Handling three sciences in one course, so time is shared out sensibly and none of them drifts." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Algorithm tracing, flowcharts, logic gates and Python or pseudocode for the problem-solving paper." },
    { name: "IGCSE Economics and Business Studies", levels: "Grade 9-10", description: "Definitions, diagrams and case-based answers, with practice on when a question wants judgement." },
    { name: "IGCSE English First and Second Language", levels: "Grade 9-10", description: "Directed writing, summaries, reading comprehension and speaking practice for the language papers." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "Reading, writing and speaking tasks in Hindi, a natural strength for many Haryana students." },
  ],

  regionsTitle: "Palwal areas and nearby towns our online tutors serve",
  regionsIntro:
    "Because lessons are online, a family in old Palwal and a family in a HUDA sector get the same tutor pool. What varies is the school your child attends, the commute towards Faridabad or Gurugram, and the household's bandwidth in the evening. The notes below capture what we plan around, and we adapt to your own timetable.",
  regions: [
    { name: "Palwal HUDA sectors", note: "Planned residential sectors where newer households live, and where many parents follow admissions news from Faridabad and Gurugram schools." },
    { name: "Old Palwal and the bazaar area", note: "Dense older neighbourhoods near the main market, with many families running shops or trading businesses and keen to plan schooling long before Class 9." },
    { name: "Railway Road and the junction side", note: "Close to Palwal railway junction, popular with commuters to Faridabad and Delhi, where tuition slots are usually fitted around train timings." },
    { name: "Hodal", note: "A town on the highway towards Mathura, where the nearest international-curriculum options are several towns away and online lessons remove that gap." },
    { name: "Hathin", note: "A more rural block towards the Mewat side, where dependable evening internet is the first thing we check before a trial lesson." },
    { name: "Prithla", note: "A small town south of Faridabad district's border, with families tied to agriculture and industry and increasing interest in international boards." },
    { name: "Aurangabad and the surrounding villages", note: "Village households where a child may be the first to study a Cambridge or IB syllabus, so the tutor takes extra care with English medium terminology." },
    { name: "Ballabhgarh and the Faridabad border", note: "Just north of Palwal, this side has a slightly wider choice of schools and many students who commute daily up the highway." },
    { name: "NH-19 and the Delhi-Mumbai Expressway belt", note: "New warehousing and residential development is drawing outside professional families to the district, a group that often already knows IB or IGCSE." },
  ],

  schoolDisclaimer:
    "Schools appear on this page only to describe where Palwal students study, and IB Gram is an independent tutoring business that is not connected to, endorsed by or working for any of them, or for the IB, Cambridge or Pearson. We have not confirmed any IB or IGCSE school inside Palwal itself, so we do not list one.",
  schoolClusters: [
    {
      city: "Palwal district",
      note: "We cannot confirm an IB or Cambridge/Edexcel IGCSE school inside Palwal, and we would rather say so than invent a name. Local students mostly attend CBSE or Haryana Board schools and take the international syllabus through tutoring or a school elsewhere.",
      schools: [],
    },
    {
      city: "Nearby: Faridabad, north of Palwal",
      note: "Faridabad is the nearest large city with confirmed IB and IGCSE schools. A commute of roughly an hour along the highway is realistic for some families, and others consider boarding-style arrangements.",
      schools: [
        "Manav Rachna International School, Sector 14",
        "Sancta Maria International School",
        "Shiv Nadar School, Faridabad",
        "Delhi Public School, Faridabad",
      ],
    },
    {
      city: "Nearby: Gurugram and the wider NCR",
      note: "Gurugram has the deepest choice of IB and IGCSE campuses in the region. Palwal families rarely commute there daily, but some relocate to the city, and our Gurugram page explains how that market works.",
      schools: [],
    },
  ],

  modesIntro:
    "For Palwal there is one delivery format, live video, and three ways of using it. Which fits depends on the calendar and on how confident the student is in the subject right now.",
  modes: [
    {
      title: "Weekly one-to-one online lessons",
      description:
        "A regular slot with one tutor, working through the current unit and homework questions on a shared board. Most Palwal students begin here, and it suits every programme from MYP to the Diploma.",
      bullets: [
        "Fixed day and time each week",
        "Written note sent after each lesson",
        "Recorded board work shared for revision on request",
        "No commuting or waiting for anyone to arrive",
      ],
    },
    {
      title: "Focused exam-preparation blocks",
      description:
        "Short bursts of extra lessons before school mocks, internal assessment deadlines or the May and November series, used to drill past papers and correct recurring mistakes.",
      bullets: [
        "Paper-by-paper practice with timed sections",
        "Mark-scheme reading so answers hit the marking points",
        "Extra lessons added only for the busy weeks",
        "Back to the regular slot once the pressure eases",
      ],
    },
    {
      title: "Catch-up and transition support",
      description:
        "For students changing board mid-stream, a tutor rebuilds missing foundations in the new syllabus's own vocabulary, so the switch from HBSE or CBSE to IB or IGCSE does not feel like starting over.",
      bullets: [
        "Diagnostic session to find the actual gaps",
        "Bridge topics that the previous board skipped",
        "Reading habits for long English-medium questions",
        "Progress review every few weeks",
      ],
    },
  ],

  sections: [
    {
      heading: "Which schools and families in and around Palwal look at IB and IGCSE?",
      paragraphs: [
        "There is no IB or Cambridge school inside Palwal that we can verify, and any page that lists one without proof is doing families a disservice. Palwal's education picture is CBSE, Haryana Board and a range of English-medium private schools. The international curricula show up through Faridabad, whose confirmed schools include Manav Rachna International School, Sancta Maria International School, Shiv Nadar School and Delhi Public School, and through the much larger set of campuses in Gurugram.",
        "The families who actually ask us about IB and IGCSE from Palwal fall into recognisable groups. There are parents who work in Faridabad, Gurugram or Delhi and intend to move closer to a school. There are business families with relatives abroad who want their children to hold an internationally recognised qualification. And there are households whose children are already enrolled at a Faridabad campus and travel each day, then need extra support at home in the evenings.",
        "Palwal's location on the Delhi-Agra corridor and the expanding logistics and housing along the Delhi-Mumbai Expressway also draw newcomers. Some arrive from cities where they already followed an international syllabus and want tutoring that keeps the same course going. For them, a tutor who knows the specific board and year is more use than one who simply lives nearby.",
        "Since local IB choice is thin, tutoring carries more weight for Palwal than for a city with five international schools. A child can stay at home, keep local friendships and a Haryana school day, and still work through an international syllabus one lesson at a time. That is not the same as attending an IB school, and we say so plainly, but for many families it is the realistic first step.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed inside Palwal",
        "Faridabad and Gurugram hold the nearest confirmed campuses",
        "Relocating, business and NRI-linked families ask most often",
        "Online tutoring keeps a child at home while following the syllabus",
      ],
    },
    {
      heading: "How do HBSE, CBSE, IB and IGCSE differ for a student in Palwal?",
      paragraphs: [
        "The short answer is that Haryana Board and CBSE reward accurate recall of a fixed textbook, while IB and IGCSE reward explanation, application and comparison of ideas that the student has not seen before. A Palwal student who topped a Class 8 test by memorising notes can find the first IGCSE or MYP unit test humbling, and it is not a sign of weak ability, only of unfamiliar marking.",
        "HBSE syllabuses in Haryana follow the state textbook pattern, and a large proportion of students in Palwal district study through Hindi or Hindi and English mixed instruction. CBSE moves closer to international style with competency-based questions, but its final board papers remain fairly predictable in shape. IB and Cambridge papers change their question wording each series, so pattern learning stops working quickly.",
        "That difference is why tutoring for the switch focuses on how questions are asked as much as on content. A tutor shows a student how a command word such as evaluate, justify or discuss changes the length and structure of an answer, then practises it on real past questions. Technical vocabulary in English also needs steady exposure, especially for students coming from Hindi-medium classrooms.",
        "Families weighing the change often want the practical differences laid out in one place, so the table below summarises what they will notice first when comparing the boards for a child in Palwal.",
      ],
      table: {
        caption: "HBSE, CBSE, IB and Cambridge IGCSE compared for Palwal families",
        columns: ["Feature", "HBSE", "CBSE", "IB / IGCSE"],
        rows: [
          ["Medium of teaching", "Hindi or English", "Mostly English, some Hindi", "English, with a second language studied"],
          ["Question style", "Textbook recall", "Mix of recall and application", "Application, analysis, evaluation"],
          ["Coursework", "Small practical marks", "Internal assessment and projects", "IA, EE, TOK and coursework in several subjects"],
          ["Nearest schools", "In Palwal and nearby towns", "In Palwal and nearby towns", "Faridabad and Gurugram, not confirmed in Palwal"],
        ],
      },
    },
    {
      heading: "What decides the cost of IB and IGCSE tuition for a Palwal student?",
      paragraphs: [
        "Cost is set by five things: the programme and level, the subject, how long each session runs, how many lessons a week you want, and how much teaching experience the tutor brings to that exact syllabus. IB Diploma Higher Level Physics from a specialist costs more per hour than help with Class 7 MYP Mathematics, and that difference reflects the tutor's skills rather than a mark-up on the label.",
        "For Palwal, one saving is built in. Since the tutor never travels, families pay for teaching time and not for a commute along the highway, and there is no need to limit the search to whoever happens to live within reach. That widens the pool, which usually helps a family find someone who has taught the specific course recently.",
        "IB Gram does not print a rate card, because the honest number depends on your child's course. After you share the brief, you receive a rate in writing before the free trial is booked, so there is no surprise afterwards. If the trial is not right, nothing is owed, and if the arrangement stops working later, you can pause or end it without penalty.",
        "The best use of a limited budget is aiming lessons at the actual gap. One well-planned hour on Paper 2 structure or IA data analysis often achieves more than three hours of general revision. We suggest starting with a short diagnostic session, then choosing a rhythm that fits the child and the family purse.",
      ],
      bullets: [
        "Rate depends on programme, level, subject and session length",
        "No travel cost is built into online lessons",
        "Rate stated in writing before the trial is booked",
        "Pause or stop at any time without a penalty",
      ],
    },
    {
      heading: "Is online tuition better than local coaching or a private tutor in Palwal?",
      paragraphs: [
        "It depends on the syllabus, and for IB and IGCSE the answer leans towards online. Palwal has coaching classes and home tutors for the Haryana Board, CBSE and competitive exams, but very few teach the IB or Cambridge courses with real familiarity, and Internal Assessment guidance is almost unknown. A general tutor may cover the maths, yet miss what the mark scheme rewards.",
        "A tutor found through IB Gram is picked for the specific course, so the student works from the correct specification, learns the right command words and practises on the appropriate past papers. Being online also means lessons can move easily, for example when a wedding, a festival or a train delay changes the evening plan.",
        "Self-study has value for revision of material a student already understands. It struggles where outside feedback matters most: essay structure, laboratory write-ups, oral practice and IA methodology. School teaching remains the base, but classes in international schools can be large, and an hour of private attention often catches the misunderstanding that a busy classroom missed.",
        "The comparison below sets the four routes side by side on the points that matter to families in Palwal.",
      ],
      table: {
        caption: "Four ways to prepare for IB or IGCSE from Palwal",
        columns: ["Route", "Syllabus knowledge", "Personal feedback", "Practical note for Palwal"],
        rows: [
          ["Online one-to-one tutor", "Chosen for the exact course", "After every lesson", "No commute; tutor can be anywhere in India"],
          ["Local coaching centre", "Usually for Haryana Board, CBSE or entrance exams", "Shared across a batch", "Fine for those boards, rarely for IB or Cambridge"],
          ["Local private home tutor", "General subject knowledge", "Personal, but limited to their syllabus", "Availability depends on who lives nearby"],
          ["Self-study", "Whatever the student has", "None unless checked", "Good for revision, weak for essays and IAs"],
        ],
      },
    },
    {
      heading: "How do Haryana's seasons and festivals shape the study year in Palwal?",
      paragraphs: [
        "Palwal's calendar carries a few rhythms that international boards ignore. Winter fog in December and January can make early school runs slow, and evening lessons then suit families better than early morning ones. Summer heat from May to June often coincides with the exam window, so a tutor may schedule lessons before noon or after sunset rather than at the hottest hour.",
        "The IB Diploma written exams take place in May, with results in early July, and a November session exists for retakes and some schools. Cambridge IGCSE runs in the May and June series and the October and November series, and Pearson Edexcel has its own January, May and June and November windows. A Palwal student should confirm the exact dates with the school, since entry deadlines come months before the papers.",
        "Festivals matter too. Holi, Diwali, Raksha Bandhan, Teej and Janmashtami all interrupt weekly routines, and Palwal's closeness to the Braj region makes Janmashtami and Holi big local events. Rather than losing those weeks, tutors often move a lesson a day, or use the break for a single long revision session, which many students find more productive than squeezing in a short one.",
        "Rural households may also see routines change at harvest, when wheat is cut in April and paddy in October, and older children are sometimes needed at home. We plan around that honestly, and flexibility is built into the arrangement so a missed week does not lead to a lost term.",
      ],
      table: {
        caption: "Palwal's year set against the international exam calendar",
        columns: ["Months", "What is happening locally", "Exam or school event"],
        rows: [
          ["December to January", "Dense fog, cold mornings, school winter break", "School mocks; Edexcel January window where used"],
          ["March to April", "Wheat harvest, new academic year starts", "IB and Cambridge final preparation"],
          ["May to June", "Peak heat, summer vacation", "IB May exams; Cambridge May and June series; IB results in July"],
          ["October to November", "Paddy harvest, Dussehra and Diwali", "Cambridge and Edexcel autumn series; IB November session"],
        ],
      },
    },
    {
      heading: "Where do Palwal students go after IB or IGCSE?",
      paragraphs: [
        "Palwal students who finish an IB Diploma or IGCSE and A Level sequence typically weigh three routes: universities abroad, Indian universities that recognise international boards, and professional degrees such as medicine or engineering. Which one is realistic depends on subjects taken, predicted grades and a family's finances, and it helps to talk it through by the end of Grade 10, not the start of Grade 12.",
        "In India, the Association of Indian Universities issues equivalence certificates for IB and Cambridge results, and many universities ask for them at admission. CUET-UG accepts students from international boards, though subject combinations must align with the course being applied to. Delhi University sits about 65 km away, and Faridabad and the wider NCR have private universities such as Manav Rachna and J.C. Bose University of Science and Technology, YMCA.",
        "JEE and NEET are separate matters. Both require specific subject combinations, and the National Testing Agency's published eligibility should be checked directly rather than assumed. A Palwal student who wants to keep the JEE door open should confirm early that Physics, Chemistry and Mathematics are taken, and that the qualification is recognised as equivalent to Class 12.",
        "Closer to home, Shri Vishwakarma Skill University in Palwal district focuses on skills and vocational degrees, which may suit students with a practical bent. Study abroad, especially in the UK, Canada, Australia and the United States, remains the main international route, with predicted grades and a personal statement doing much of the work.",
      ],
      bullets: [
        "AIU equivalence is needed for many Indian applications",
        "CUET-UG accepts international-board students with matching subjects",
        "Check JEE and NEET eligibility with the NTA directly",
        "Start pathway discussions by the end of Grade 10",
      ],
    },
    {
      heading: "How is IB Maths, Physics, Chemistry and Biology taught to Palwal students?",
      paragraphs: [
        "IB Mathematics comes in two flavours. Analysis and Approaches leans on algebra, calculus and proof, and suits students aiming at engineering, physics or pure mathematics. Applications and Interpretation is built on statistics, modelling and technology, and suits students heading to economics, business, social sciences or design. A tutor begins by checking which course is being studied, then builds fluency with the calculator the school uses.",
        "Physics and Chemistry each split into Higher and Standard Level. In Physics HL, added topics include fields, induction and quantum physics, and the last paper includes options. In Chemistry HL, equilibrium, organic synthesis and energetics go further. Both subjects use a data booklet during exams, so we teach students to navigate it quickly instead of memorising formulae that are provided anyway.",
        "Biology relies on precise use of language and on reading unfamiliar data. Students lose marks when they know the idea but phrase it loosely, so tutors practise short, exact answers and structured extended responses. The internal assessment across all three sciences is an individual investigation, and tutors help the student to plan and reflect, without ever writing the report.",
        "Because Palwal has few IB-trained science teachers of its own, a tutor with recent experience of the syllabus provides something the neighbourhood cannot. A Grade 11 student can begin at the start of the course, and a Grade 12 student can target the weaker papers, with lessons built around past questions from recent exam series.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: which tier and subjects should a Palwal student choose?",
      paragraphs: [
        "Core papers are pitched for a maximum of grade C, while Extended papers open grades A* to E, so the choice matters if the student later wants IB, A Level or a competitive Indian university. Students who are comfortable in Class 8 and 9 mathematics or science usually belong in Extended, and a subject teacher's advice is worth having before entries are made.",
        "Subject choice at IGCSE is wider than at CBSE. A student might take Mathematics, Physics, Chemistry, Biology, English, a second language and one or two options such as Computer Science, Economics or Business Studies. Additional Mathematics is a helpful extra for anyone planning to study Mathematics at A Level or IB HL, as it introduces calculus early.",
        "The writing subjects need particular care. English First Language rewards flexible, controlled writing, while English as a Second Language tests four skills separately, including speaking. Students from Hindi-speaking homes in Palwal often speak confidently but write informally, and a tutor helps them move between registers without losing their own voice.",
        "Boards also differ. Cambridge and Pearson Edexcel share subject names but not exact content or paper structure, so the tutor should work from the board the school has chosen. We ask for the syllabus code at the start, and sometimes for a recent paper, so the first lesson is spent on real work, not on guessing which course applies.",
      ],
    },
  ],

  tutorsIntro:
    "These tutors teach IB PYP, MYP and Diploma subjects, and Cambridge and Edexcel IGCSE, over live video. Each match is made on the syllabus code and level first, and Palwal families can ask for a tutor who has handled a student moving from a Haryana Board or CBSE background.",

  process: [
    { title: "Send the details", description: "Tell us the programme or board, subject, year, recent marks and which evenings work for your household in Palwal." },
    { title: "Review the shortlist", description: "We suggest tutors and explain what each has taught, so you can see why the match fits your child's course." },
    { title: "Try a free lesson", description: "Your child works on a real topic on video and both of you decide whether the tutor suits." },
    { title: "Agree a plan and rate", description: "The tutor outlines the first weeks and the rate is given in writing before regular lessons begin." },
    { title: "Begin weekly lessons", description: "Lessons run at a set slot, and we adjust around exams, festivals and Palwal's harvest and fog weeks." },
  ],

  whyPoints: [
    { title: "Matched by course", description: "The tutor is chosen for the subject, level and board your child actually studies, not a broad IB label." },
    { title: "Clear about online delivery", description: "You are told before booking that lessons are on video and nobody comes to Palwal." },
    { title: "Free first lesson", description: "You judge the tutor from a real lesson instead of a profile page." },
    { title: "Coaching, never ghost-writing", description: "Tutors explain, question and give feedback, and never write an IA, EE, TOK essay or coursework for a student." },
    { title: "Regular written notes", description: "After each lesson a short note records what was covered and what to practise next." },
    { title: "Easy to change", description: "No lock-in, no penalty, and a new tutor can be arranged if the fit is not right." },
  ],

  faqs: [
    {
      question: "Do IB Gram tutors come to homes in Palwal?",
      answer:
        "No, tutors do not visit homes in Palwal. Home visits are available only in Gurugram and parts of Delhi NCR, and Palwal is outside that area. Lessons are live one-to-one video sessions, taken by your child at home on a laptop or tablet. Many families searching for home tuition are happy with this once they try the free lesson, because the tutor is chosen for the syllabus and not for how close they live.",
    },
    {
      question: "Is Palwal part of the areas where home tuition is offered?",
      answer:
        "No, Palwal is not one of the home-visit areas, even though the district lies within the wider National Capital Region. Our in-person tuition is limited to Gurugram and selected parts of Delhi NCR where a tutor can reliably travel. Palwal students study online, with the same one-to-one attention, written notes after each session and a free trial lesson before any commitment is made.",
    },
    {
      question: "How do I find an IB tutor in Palwal?",
      answer:
        "Send IB Gram the programme, subject, level and your child's recent marks, along with the days that suit you, and we shortlist tutors who have taught that exact course. You can reach us on WhatsApp at +91 7439 368 115 or write to support@ibgram.com. After you choose, a free trial lesson is arranged so your child can meet the tutor before a regular schedule begins.",
    },
    {
      question: "Can you provide IGCSE tutors for Palwal students?",
      answer:
        "Yes, we match IGCSE tutors for Cambridge and Pearson Edexcel, working from the syllabus code and tier your school uses. The tutor covers Mathematics, sciences, English, Computer Science, Economics and other subjects online. Tell us whether your child is on Core or Extended, and the tutor will use the right past papers and mark schemes instead of general revision material.",
    },
    {
      question: "Which schools near Palwal teach IB or IGCSE?",
      answer:
        "We cannot confirm any IB or Cambridge IGCSE school inside Palwal itself. The nearest confirmed options are in Faridabad, including Manav Rachna International School, Sancta Maria International School, Shiv Nadar School and Delhi Public School, and in Gurugram. Please check admissions and current programmes directly with any school, since offerings change, and remember that IB Gram is not connected with any of them.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Palwal?",
      answer:
        "The rate depends on the programme, level, subject, session length and the tutor's experience with that syllabus, and we give it in writing before your free trial. Online lessons carry no travel cost, so you pay for teaching time. We do not publish a price list because a Class 8 MYP maths lesson and a Diploma HL Chemistry lesson are different jobs. Ask for a quote with your brief.",
    },
    {
      question: "Is there a free trial lesson?",
      answer:
        "Yes, the first lesson is free and carries no obligation. Your child works on a real topic from their own syllabus with the tutor over video, and you can sit nearby or step away. Afterwards you receive a short written note, and you can either continue with a plan and rate, ask for a different tutor, or stop without paying anything.",
    },
    {
      question: "Will the tutor write my child's Internal Assessment or Extended Essay?",
      answer:
        "No, tutors never write or edit assessed work for the student. They can explain the criteria, help choose a workable research question, talk through data methods and give feedback on a draft the student has written. IB and Cambridge take academic honesty seriously, and a tutor who crossed the line would put your child's qualification at risk, so we do not allow it.",
    },
    {
      question: "My child studies in Faridabad and travels from Palwal. Can lessons fit around that?",
      answer:
        "Yes, lessons are booked around the school day and the commute, which may be long along the highway. Many students prefer a fixed evening slot after they are home and rested, plus an occasional Sunday morning before exams. Since the tutor does not travel, a delayed bus or a late return means moving the start by a few minutes, not cancelling the lesson.",
    },
    {
      question: "Can a student moving from HBSE or CBSE to IB catch up?",
      answer:
        "Yes, and it is one of the most common reasons families contact us from Palwal. A tutor first runs a short diagnostic to find what the earlier board did not cover, then builds those foundations in the new syllabus's language. The bigger adjustment is usually writing longer analytical answers in English, which improves steadily with regular practice and feedback.",
    },
    {
      question: "Does my child need Hindi or English support alongside subject tuition?",
      answer:
        "Often, yes, particularly for students from Hindi-medium schools. We can arrange English language support, IB Hindi A or B, or IGCSE Hindi as a second language. Technical vocabulary in science and economics can be a hurdle even for fluent speakers, so tutors weave key terms into every lesson instead of treating language as a separate chore.",
    },
    {
      question: "When are the IB and IGCSE exams for students in Palwal?",
      answer:
        "IB Diploma exams are held mainly in May, with a November session for some schools, and Cambridge IGCSE runs in May and June and in October and November. Pearson Edexcel has January, May and June and November windows. Your school registers candidates and sets deadlines, so confirm the dates with them. We plan lessons backwards from your child's actual exam session.",
    },
    {
      question: "Can you help with IB Maths Analysis and Approaches or Applications and Interpretation?",
      answer:
        "Yes, we have tutors for both courses at HL and SL. Analysis and Approaches concentrates on calculus, algebra and proof, while Applications and Interpretation emphasises statistics and modelling with technology. The tutor also guides the mathematical exploration, in terms of topic choice and structure, without writing any of it. Tell us which course and level your child takes.",
    },
    {
      question: "Can a Palwal student take IB or IGCSE lessons if internet speed is poor?",
      answer:
        "Usually yes, with some planning. Video lessons need a steady connection, and we ask about your evening speed before the trial. If bandwidth drops, the tutor can switch off video and keep audio and the shared whiteboard, or move the slot to a quieter hour. Families in outlying blocks such as Hathin often pick early evening, when the network is less busy.",
    },
    {
      question: "How soon can lessons start after I get in touch?",
      answer:
        "Most Palwal families reach a free trial lesson within a few days of sending their brief, depending on the subject and how flexible the timing is. A rarer subject, or a request for a specific evening slot, can take a little longer. Sharing the syllabus code and a recent test paper speeds matching and makes the trial much more useful.",
    },
    {
      question: "Does IB Gram have any connection with schools, the IB or Cambridge?",
      answer:
        "No, IB Gram is an independent tutoring service with no affiliation to the International Baccalaureate, Cambridge, Pearson Edexcel or any school. Names of boards and schools appear only to describe the syllabus and the local landscape. Our tutors coach students to understand and perform in the assessments as they are, and they follow the rules on academic integrity.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Faridabad", href: "/faridabad/", description: "The nearest city with confirmed IB and IGCSE schools, and how tutoring supports its students." },
    { label: "IB and IGCSE tutors in Gurugram", href: "/gurgaon/", description: "Where home visits are available, and where the region's largest cluster of IB campuses sits." },
    { label: "Delhi IB and IGCSE tutoring", href: "/delhi/", description: "Tutor matching for families in and around the capital." },
    { label: "Panipat tutoring page", href: "/panipat/", description: "Online IB and IGCSE tuition for another Haryana city." },
    { label: "Sonipat tutoring page", href: "/sonipat/", description: "How online tutoring works for Sonipat students." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "What IB tutors cover across all programmes." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel tiers, subjects and papers explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the Diploma is structured, from HL and SL to the core." },
    { label: "IB Maths overview", href: "/courses/ib/mathematics/", description: "Maths AA and AI compared, with what each course tests." },
    { label: "Browse tutors", href: "/tutors/", description: "See tutor profiles by subject and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and request a free trial lesson." },
  ],

  closingHeading: "Start with a free lesson for your Palwal student",
  closingBody:
    "Send the programme or board, the subject, your child's year and the evenings that are realistic for your household. We reply with a tutor who has taught that course, a rate in writing and a trial slot, and nobody needs to travel anywhere. If the fit is wrong after the first lesson, you owe nothing and can ask for someone else.",

  geo: { latitude: 28.1487, longitude: 77.3320 },
  alternateNames: ["Palwal city", "Palwal Haryana"],
  wikipedia: "https://en.wikipedia.org/wiki/Palwal",
  stripSchools: [],
};
