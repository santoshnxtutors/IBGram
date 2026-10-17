import type { CitySeoPage } from "../types";

/**
 * /phulera/ - IB and IGCSE tutoring page for Phulera, Jaipur district, Rajasthan. No school in Phulera was
 * confirmed to run the IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and the school clusters are
 * honestly labelled Jaipur clusters (names reused from the already-vetted Jaipur page). Online only.
 */
export const phulera: CitySeoPage = {
  slug: "phulera",
  countryName: "Phulera",
  countryNameLong: "Phulera, Jaipur district, Rajasthan",
  demonym: "Phulera",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around school hours, the Phulera Dooj and wedding-season weeks, Holi and Diwali breaks, and the hot weeks of May and June",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.8723, longitude: 75.2425 },
  wikipedia: "https://en.wikipedia.org/wiki/Phulera",
  alternateNames: ["Phulera Junction", "Phulera Jaipur", "Phulera Rajasthan", "Fulera"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Phulera | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors in Phulera, Jaipur district: private tuition from home, live online one to one for DP, MYP, PYP and IGCSE, free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Phulera",
  heroEyebrow: "IB & IGCSE HOME TUITION FOR PHULERA, JAIPUR DISTRICT",
  heroSubtitle:
    "Private tuition from home is the format that makes sense for IB and IGCSE students in Phulera: a specialist teaches your child one to one over a live video call while the family stays beside the junction, instead of losing evenings to the highway run towards Jaipur. The tutor is chosen for the exact subject, level and exam session, and nobody travels to Phulera, because home visits run only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Phulera",
  imageAltText: "A Phulera student at a desk at home working through an IB Physics past paper while an online tutor annotates a shared screen",
  secondaryKeywords: [
    "IB tutor Phulera",
    "IGCSE tutor Phulera",
    "IB home tuition Phulera",
    "IGCSE home tuition Phulera",
    "IB private tuition Phulera",
    "IB Maths tutor Phulera",
    "IGCSE Maths tutor Phulera",
    "IB Physics tutor Phulera",
    "IB Chemistry tutor Phulera",
    "IB Biology tutor Phulera",
    "IB DP tutor Phulera",
    "IB MYP tutor Phulera",
    "IB PYP tutor Phulera",
    "IGCSE online tuition Phulera",
    "online IB tutor Phulera Jaipur",
    "IB tutor Phulera Junction",
    "IGCSE tutor Sambhar Lake Phulera",
    "IB tuition Jaipur district Rajasthan",
  ],

  heroTrustPoints: [
    "A tutor matched to your child's exact IB subject and level, or the IGCSE board, subject code and tier",
    "Every session is a live video lesson; tutors do not come to Phulera, and home visits are limited to Gurugram and parts of Delhi NCR",
    "A free trial lesson to judge the teaching before any decision",
    "An independent tutoring service with no tie to the IB, Cambridge, Pearson or any school named here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Primary, middle and diploma years" },
    { value: "Cambridge and Edexcel", label: "Both IGCSE boards" },
    { value: "Evenings in IST", label: "No time-zone arithmetic" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "IB and IGCSE support for a junction town with no international school of its own",
    paragraphs: [
      "Phulera sits in the western stretch of Jaipur district, where the railway line from Jaipur forks towards Ajmer on one side and the Marwar country on the other. It is a town known for its junction, its railway colony and its closeness to the Sambhar salt lake, not for classrooms that teach the International Baccalaureate. We could not confirm any school in Phulera that runs the IB or a Cambridge or Edexcel IGCSE syllabus, and we will not pretend otherwise on this page.",
      "That gap defines who contacts us. A family may have a child who started the IB Primary Years or Middle Years at a school elsewhere in India and then moved back to the home town. Another may be preparing for the IGCSE as a private candidate through an examination centre in Jaipur. A third may simply have decided that an international route to a university abroad suits a Class 8 student better than a crowded JEE queue. IB and IGCSE tutors in Phulera are rare because the syllabus is rare, so we bring the tutor to the family through a screen.",
      "In practice a lesson is quiet and focused. One student, one tutor, a shared whiteboard, a past paper on the screen and a pen in your child's hand at the dining table. The tutor listens to how a solution is set out, stops at the line where marks would be lost, and explains the mark scheme's expectation in plain words. Most of the value comes from that immediate, repeated correction.",
      "We are an independent service. We are not affiliated with the IB, Cambridge, Pearson or any school. Tutors teach, explain and give feedback; they never write an Internal Assessment, an Extended Essay, a Theory of Knowledge essay or any coursework for a student.",
    ],
    bullets: [
      "IB PYP, MYP and DP subjects, taught by tutors who have worked with that programme",
      "Cambridge and Pearson Edexcel IGCSE at Core, Extended, Foundation or Higher tier",
      "Live one-to-one video lessons on Indian Standard Time",
      "A free trial lesson and a short written plan afterwards",
      "No tutor visits to Phulera; home visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "With no IB school in Phulera itself, the programme a family names is usually a clue to their situation: a transfer from another city, a private-candidate plan, or a switch under discussion for next year. The notes below describe those situations as we meet them.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Learning is organised into transdisciplinary themes rather than separate periods, and the final year brings a self-directed Exhibition. No external paper exists, so a tutor's job is reading fluency, number sense and the habit of asking a good question about a topic.",
      countryNote:
        "Phulera has no PYP classroom of its own, so enquiries almost always come from a family who began the programme in Jaipur or another city and wish to keep the thread unbroken at home.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are marked against four published criteria each, and every student completes a Personal Project near the end. Tutors help a child move from retelling facts to explaining, comparing and evaluating, which is where the higher criterion bands sit.",
      countryNote:
        "In this part of Jaipur district the MYP is usually met by a student whose school is elsewhere, or by a family weighing MYP against the CBSE for Class 6.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard Level, plus Theory of Knowledge, the Extended Essay and CAS. Internal assessments feed into each subject grade, and the written papers are sat in a May or November session.",
      countryNote:
        "A Phulera Diploma student usually studies at a school far from the town or follows a distance route, and leans on tutoring most heavily for Mathematics and the sciences.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP pairs two or more Diploma courses with a career-related study, a reflective project and a personal and professional skills course. Few Indian schools offer it, but the Diploma courses inside it need the same careful subject teaching.",
      countryNote:
        "CP enquiries from Phulera are very uncommon; where one arrives, we focus on the Diploma subjects inside it and the reflective project's structure.",
    },
  ],

  subjectsIntro:
    "Tutors are assigned by syllabus, not by general subject. Tell us the subject, the level (Higher or Standard) and the exam session, and we find someone who has taught that course recently.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, vectors and proof-style reasoning for students aiming at engineering, physics or pure mathematics degrees." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Modelling, statistics and technology-assisted problem solving, suited to economics, business and life-science pathways." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics through quantum and nuclear physics, with careful attention to units, uncertainties and the internal investigation." },
    { name: "Chemistry", levels: "SL / HL", description: "Structure, energetics, kinetics and organic reaction pathways, with mole calculations drilled until they stop being a source of lost marks." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology, genetics, ecology and physiology, with practice at writing precise, term-accurate paragraph answers." },
    { name: "Economics", levels: "SL / HL", description: "Microeconomics, macroeconomics and the global economy, built around diagram accuracy and real-world examples." },
    { name: "Business Management", levels: "SL / HL", description: "Organisation, marketing, finance and operations, with case-study technique for the paper-one stimulus." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming, data structures, networks and the case-study paper, supported with worked code rather than copied solutions." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis, the individual oral and comparative essay structure for students writing in English." },
    { name: "Hindi A and Hindi B", levels: "SL / HL", description: "A natural option for Phulera families; tutors help with literature study, language mechanics and oral preparation." },
    { name: "History", levels: "SL / HL", description: "Source analysis, essay planning and the historical investigation, taught through argument rather than memorised narrative." },
    { name: "Psychology", levels: "SL / HL", description: "Approaches to behaviour, research methods and the experimental study, with emphasis on evaluating evidence." },
    { name: "Theory of Knowledge", levels: "Core", description: "Guidance on how to think through knowledge questions and plan an exhibition; the essay itself stays the student's work." },
  ],
  igcseSubjectsIntro:
    "Rajasthan students sit the IGCSE through Cambridge or Pearson Edexcel, usually at an approved centre in Jaipur. Subject and tier choices made in Class 9 shape what a student can study at the next stage, so we help families pick with care.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended, Foundation / Higher", description: "Algebra, geometry, trigonometry and statistics, with a clear view of which tier suits a student's target grade." },
    { name: "Additional Mathematics", levels: "Cambridge 0606", description: "A bridge towards A Level Mathematics for students who want stronger calculus and algebra before Class 11." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, electricity, waves and thermal physics, with practical-paper and alternative-to-practical technique." },
    { name: "Chemistry", levels: "Core / Extended", description: "Atomic structure, bonding, reactivity and organic basics, plus qualitative analysis for the practical paper." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, transport, inheritance and ecosystems, with data-response questions practised repeatedly." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Algorithms, pseudocode and Python for the programming paper, taught by working through problems." },
    { name: "English as a Second Language", levels: "Cambridge 0510 / 0511", description: "Reading, writing, listening and speaking skills for students from Hindi-medium backgrounds." },
    { name: "Hindi as a Second Language", levels: "Cambridge 0549", description: "Comprehension, composition and grammar for students who read and write Hindi at home." },
    { name: "Business Studies", levels: "Core", description: "Business activity, marketing, finance and people, with exam-style questions on case material." },
    { name: "Economics", levels: "Core", description: "Supply and demand, government policy and development, taught with local examples from Rajasthan's economy." },
  ],

  regionsTitle: "Phulera and the towns around it we support",
  regionsIntro:
    "Lessons are online, so a student anywhere in the Phulera area can join. These areas are listed so parents can see how we think about timing, school travel and connectivity in the neighbourhood.",
  regions: [
    { name: "Phulera Junction and railway colony", note: "Railway-employee families live here, and a posting transfer is a common reason a child ends up on an international syllabus; evening sessions suit shift-working parents." },
    { name: "Main Bazar and the old town", note: "Established trading families; many children attend local CBSE or RBSE schools and look for IB or IGCSE help as an additional route." },
    { name: "Sambhar Road", note: "The road towards Sambhar Lake; students here lose time on the bus to school, so a home-based lesson saves an hour a week." },
    { name: "Sambhar Lake town", note: "Home to the salt works and the lake; families connected with the salt industry sometimes plan studies abroad and ask about international syllabuses." },
    { name: "Naraina", note: "A well-known Dadupanthi religious centre in the area; students here study with Hindi at home and often value bilingual explanation." },
    { name: "Bherana", note: "A village belt near the junction where connectivity improved through the industrial corridor; lessons suit evenings after the farming day." },
    { name: "Naliasar", note: "A small settlement known to visitors for its natural setting; internet reliability should be checked before the first lesson." },
    { name: "Kishangarh Renwal", note: "Close to the Jaipur-Ajmer highway; students sometimes commute to Jaipur schools by bus, making evening online study practical." },
    { name: "Highway and industrial corridor", note: "Families employed along the Delhi-Mumbai Industrial Corridor stretch; relocations make a portable, online tutor attractive." },
  ],

  tutorsIntro:
    "Every tutor is based in India and teaches on Indian Standard Time, so a Phulera student studies in the evening without worrying about time zones. Pick the subject and level, and we introduce a tutor who has taught that syllabus.",

  schoolClusters: [
    {
      city: "Nearby: Jaipur, Sirsi Road and western Jaipur",
      note: "Phulera has no confirmed IB or IGCSE school, so the nearest options sit in Jaipur, roughly 70 to 80 km away by road. This is a nearby-city list, not a statement about schools in Phulera.",
      schools: ["Sanskar School, Sirsi Road"],
    },
    {
      city: "Nearby: Jaipur, Ajmer Road and Sanganer belt",
      note: "The side of Jaipur nearest the highway to Phulera.",
      schools: ["Jayshree Periwal International School", "Mayoor School Jaipur"],
    },
    {
      city: "Nearby: Jaipur, Mansarovar, Durgapura and Jawahar Nagar",
      note: "Further into Jaipur and more suited to boarding or a family relocating for school years.",
      schools: ["India International School, Mansarovar", "Seedling Modern International Academy, Durgapura", "Seedling International Academy, Jawahar Nagar"],
    },
  ],
  schoolDisclaimer:
    "The schools above are in Jaipur, not Phulera, and are listed only to show where the nearest international curricula are taught. IB Gram is an independent tutoring service with no partnership with, or endorsement from, any of them, the IB, Cambridge or Pearson. Confirm current offerings directly with each school.",

  modesIntro:
    "All of our lessons for Phulera families are delivered online. Our tutors do not visit Phulera, so the real choice is about rhythm: a steady weekly lesson, a deeper block before exams, or a lighter plan with progress notes.",
  modes: [
    {
      title: "Weekly one-to-one lesson",
      description:
        "One fixed evening a week with the same tutor, built around the syllabus your child follows and the school timetable they already manage.",
      bullets: [
        "The same tutor, week after week",
        "Shared whiteboard and screen-shared past papers",
        "A written note after each lesson",
        "Moves easily around Phulera power cuts or train-time commitments",
      ],
    },
    {
      title: "Exam-season intensive",
      description:
        "Extra lessons in the six to eight weeks before the IB May session, the Cambridge or Edexcel series, or school mocks.",
      bullets: [
        "Timed past papers marked against the official scheme",
        "Targets the topics that lose the most marks",
        "Works alongside a regular tutor or coaching class",
        "Winds down once papers are over",
      ],
    },
    {
      title: "Light-touch guided study",
      description:
        "A shorter plan for students who mostly work alone but want someone to check method, unblock stuck topics and keep a schedule honest.",
      bullets: [
        "One or two focused sessions a fortnight",
        "Useful for private candidates preparing for Cambridge papers",
        "Short summary after every session",
        "Can be stepped up whenever deadlines near",
      ],
    },
  ],

  sections: [
    {
      heading: "Why would a Phulera family look at the IB or IGCSE at all?",
      paragraphs: [
        "A Phulera family usually reaches the IB or IGCSE through a specific event rather than a general preference. A parent in the railways receives a transfer and the child must slot into a new school's syllabus. A relative abroad suggests a Class 10 qualification that overseas universities recognise at sight. Or a student who has finished Class 8 in Jaipur decides that a Cambridge route fits an interest in computing better than the usual science-or-commerce fork.",
        "Phulera is a place where the traditions of trade, railways and salt are strong, and where the idea of studying abroad still travels from cousin to cousin rather than through school counsellors. That makes the early questions practical ones: which exam, which centre, which subjects, and what happens if the family wants to return to CBSE later? A tutor can answer the subject questions; our team can explain the admin route.",
        "The IB asks for breadth across six subjects and a long list of compulsory components. The IGCSE is narrower and school-year based, finishing in Class 10 or 11 depending on the school. Neither is easier than the CBSE or the Rajasthan Board; they ask for different habits. The IB rewards sustained inquiry and writing, and the IGCSE rewards accuracy and close reading of the question.",
        "We say plainly that tutoring cannot replace a school. Where a child is enrolled in a full IB programme elsewhere, a tutor supplements the teacher. Where a child is a private candidate, a tutor becomes the nearest thing to structured teaching, and the family should plan for a longer runway before papers.",
      ],
    },
    {
      heading: "How do the Rajasthan Board, CBSE, IB and IGCSE compare for a Phulera student?",
      paragraphs: [
        "In short, Rajasthan Board (RBSE) and CBSE are examination-centred and national or state in orientation, while the IB and IGCSE are international qualifications with more written analysis and, in the IB case, compulsory projects. Phulera students are most often on RBSE or CBSE, so the table below lists what changes if a family considers a move.",
        "Switching boards is easiest at the start of Class 6, 9 or 11. Moving into the IB Diploma after Class 10 usually requires a school that already offers it, which in this region means a Jaipur school. Entering the IGCSE as a private candidate is possible earlier but needs an exam centre registration, and it leaves the student without the school-based assessment structure that the IB insists on.",
        "Language is another factor. Many Phulera households speak Hindi and Rajasthani at home. The IB and IGCSE are taught in English, and the written answers must be well structured in English. Tutors in our team are asked to explain concepts in simple English first, and switch to Hindi for clarification where that helps without drifting into mixing languages in the answer itself.",
        "Finally, think about the exits. RBSE and CBSE feed Indian entrance tests directly. The IB and IGCSE also reach Indian universities through equivalence and CUET-UG, but the planning has to start earlier, and the family needs to track document requirements deliberately.",
      ],
      table: {
        caption: "Boards a Phulera family may be weighing",
        columns: ["Board", "Typical route in this area", "Assessment style", "Language of study", "Main exit"],
        rows: [
          ["Rajasthan Board (RBSE)", "Local government and private schools", "Annual board papers in Class 10 and 12", "Hindi or English", "State and national entrance tests, local colleges"],
          ["CBSE", "Private schools in town and Jaipur", "Board papers in Class 10 and 12 with internals", "English or Hindi", "JEE, NEET, CUET-UG"],
          ["IB Diploma", "Jaipur school or boarding, plus online tutoring", "Papers plus internal assessments and Extended Essay", "English, with a second language", "Indian universities by equivalence, study abroad"],
          ["Cambridge IGCSE", "Jaipur school or private candidate", "Final papers per subject, often with a practical component", "English", "Class 11 in any board, A Level, IB DP"],
          ["Pearson Edexcel IGCSE", "Jaipur school or private candidate", "Linear final exams in the January, May-June or November series", "English", "Class 11 in any board, A Level, IB DP"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Phulera, and what drives the rate?",
      paragraphs: [
        "We do not publish a price list, and the answer to cost depends on several things that vary from child to child. Rates are quoted in writing before you book, after a free trial, so a family never agrees to a number blind. What follows explains what moves the figure so you can compare offers sensibly.",
        "The first driver is level. A Class 8 MYP mathematics tutor and an IB Physics HL specialist are not interchangeable, and the second is a scarcer, more experienced profile. The second driver is how many lessons a week: a fixed weekly slot is cheaper per lesson than an urgent block packed into the fortnight before papers. The third is the subject mix; a family combining Mathematics and Chemistry with the same tutor sometimes finds a sensible arrangement.",
        "Phulera has a practical advantage here. Because lessons are online, a family pays for teaching time and not for a tutor's fuel or an hour's drive. There is no cost for a venue and no extra for travel from Jaipur. The saving is real, but we would not oversell it; the main price is the quality of the tutor's subject knowledge.",
        "Compare any quote on four points: who exactly will teach, how long a lesson runs, what happens if the fit is wrong, and whether the rate is in writing. We offer a tutor change if the match is poor, and we do not require a long advance payment to start.",
      ],
      bullets: [
        "Level and programme: PYP, MYP, IGCSE and DP, with Higher Level the most demanding",
        "Lessons per week and the length of each lesson",
        "How rare the subject and exam board combination is",
        "Whether the plan is regular or a short exam-season block",
        "A written quote before booking and a free trial lesson first",
      ],
    },
    {
      heading: "Online home tuition, coaching centre, local tutor or self-study: what works from Phulera?",
      paragraphs: [
        "Families in Phulera usually have four options on the table, and each fits a different student. A coaching centre in Jaipur gives structure and company but needs a long trip. A local private tutor is nearby and affordable, but rarely knows the IB or IGCSE mark scheme. Self-study is free yet lonely. Online one-to-one tuition fits between them: it keeps the child at home with the syllabus-specific teaching that a coach in a neighbouring town would be unlikely to offer.",
        "The honest limitation of online tuition is that it needs a stable connection and a quiet corner. Power cuts in summer afternoons and patchy mobile data in the outer villages can interrupt a lesson, so we suggest a broadband line and a backup hotspot. We arrange evening slots when electricity and bandwidth are normally steadier.",
        "Coaching centres in Jaipur are mostly built around JEE, NEET and CBSE or RBSE boards. They are not designed to explain an IB internal assessment criterion or the difference between Cambridge command words. If your child follows an international syllabus, a general centre may deliver good teaching on the wrong target.",
        "Self-study works for disciplined older students, especially for IGCSE practice papers, but it struggles with mathematics and sciences where one misunderstood step compounds. We often see students do well on self-study until the mock exam, then request tutoring to close the last gaps.",
      ],
      table: {
        caption: "Study options for an IB or IGCSE student based in Phulera",
        columns: ["Option", "Travel needed", "Syllabus fit", "Attention per student", "Weak point"],
        rows: [
          ["Online one-to-one tuition", "None", "Matched to the exact IB or IGCSE course", "Full lesson", "Needs a stable connection and a quiet space"],
          ["Jaipur coaching centre", "A long road or rail journey", "Usually CBSE, RBSE, JEE or NEET focused", "Shared with a batch", "Weak on IB criteria and Cambridge command words"],
          ["Local private tutor", "Short", "General school subjects", "High", "Seldom familiar with international mark schemes"],
          ["Self-study with past papers", "None", "Exact, if papers are chosen well", "None", "No feedback on method or written answers"],
          ["Boarding or relocation to Jaipur", "Family relocation", "Full school-based IB or IGCSE", "School classroom", "Cost and distance from home"],
        ],
      },
    },
    {
      heading: "What does a Phulera study year look like: heat, Dooj, weddings and exam dates?",
      paragraphs: [
        "A realistic timetable for Phulera starts from the climate. May and June are very hot in this part of Rajasthan, and afternoons in a house without cooling are hard to use. Students do better with early-morning or evening study, so we schedule after five in the evening for most pupils during these months.",
        "The social calendar matters too. Phulera Dooj, the second day of the bright fortnight of Phalguna, is considered an auspicious day in Rajasthan, and weddings cluster around it and later around Akshaya Tritiya. Holiday periods at the school level follow Holi, and then Diwali in autumn. Family functions pull a student out of routine for days at a time, so we suggest planning heavy revision away from the biggest wedding weeks.",
        "Exam series follow the international calendar. The IB Diploma has May and November sessions; Cambridge IGCSE runs February-March, May-June and October-November series; Pearson Edexcel IGCSE has January, May-June and November. Private candidates must register with a centre several months before, and late registration is expensive, so the first job is to confirm dates early.",
        "Mock examinations and internal assessment deadlines are set by the school. For students who are not enrolled in a school, we work back from the series date and set our own mock weeks.",
      ],
      table: {
        caption: "A Phulera year for an international-syllabus student",
        columns: ["Period", "What is happening locally", "Study implication"],
        rows: [
          ["January to February", "Cool weather, Makar Sankranti kites, pre-mock revision", "Best weeks for long sessions and new topics"],
          ["March", "Holi, Phulera Dooj and the start of the wedding season; Cambridge February-March series ends", "Plan lighter weeks around festivals and keep a fixed weekly slot"],
          ["April to June", "Heat builds; IB May and Cambridge May-June exams", "Move lessons to evenings; use morning for timed papers if cool"],
          ["July to September", "Monsoon arrives late and briefly; school restarts; IB assessments begin", "Good window to build foundations and practise internal assessment skills"],
          ["October to November", "Dussehra, Diwali, cooler weather; Cambridge and Edexcel autumn series", "Short revision blocks around festival days"],
          ["December", "Winter break, mocks for May candidates", "Past-paper marathons and gap review"],
        ],
      },
    },
    {
      heading: "Where do Phulera students go after the IB or IGCSE?",
      paragraphs: [
        "For most Phulera students, the first step after the IGCSE is Class 11 at a school in Jaipur or Ajmer, either on an IB Diploma, Cambridge A Level or the CBSE. The IGCSE is accepted by Indian boards for admission to Class 11 as an equivalent of Class 10 through the usual verification steps, though the school should confirm the details.",
        "After the IB Diploma, a student in this region typically sits for CUET-UG for central universities, or applies to private universities in Jaipur and the wider NCR. The Association of Indian Universities recognises the IB Diploma as equivalent to Class 12, which is the key document for Indian admission. For engineering through JEE Main, IB students are eligible if they meet the Class 12 subject requirements, and for NEET they must have studied Physics, Chemistry and Biology with English.",
        "Rajasthan has local strengths students should know. Jaipur offers MNIT, the University of Rajasthan, Manipal University Jaipur, LNMIIT and other private universities, while Pilani has BITS and Ajmer has its own state university and colleges. A student keeping Phulera as a base while studying in these cities is common.",
        "Study abroad is the other major path. UK, US, Canadian, Australian and Singapore universities understand the IB well, with predicted grades and the Extended Essay as differentiators. IGCSE grades feed into the early application profile, especially for UK courses. A tutor helps with the grades; the university list is a family decision made with a counsellor.",
      ],
    },
    {
      heading: "How are IB Maths AA and AI and the sciences taught online to a Phulera student?",
      paragraphs: [
        "The IB offers two mathematics routes, and the choice shapes the next three years. Analysis and Approaches is the algebraic, calculus-heavy path for students heading to engineering, physics or mathematics. Applications and Interpretation leans on modelling and statistics with technology, and suits economics, psychology or business plans. We help a family decide before Class 11 starts, not three weeks after.",
        "In an online lesson, the tutor writes with a stylus on a shared whiteboard and the student does the same, so the working is visible line by line. That matters for IB mathematics where method marks are awarded for working. The student photographs or scans written work between sessions, and the tutor annotates it so mistakes are caught early.",
        "Physics, Chemistry and Biology share a pattern. Content knowledge is half the story; the other half is data analysis, command terms and the internal assessment. Tutors teach the skill of reading a question for what it asks, then drill a sequence of past-paper questions with the official markscheme in view. For practicals, the tutor discusses design and error analysis rather than producing the write-up.",
        "A Phulera student without access to a well-equipped school lab can still prepare. Tutors suggest low-cost, safe home demonstrations when they are relevant, and use simulations and recorded practicals for the rest. The Internal Assessment itself must be the student's own work.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: choosing IGCSE subjects and tiers",
      paragraphs: [
        "The IGCSE gives two ways of sitting several subjects. Cambridge uses Core and Extended papers; Pearson Edexcel uses Foundation and Higher tiers. Core limits the top grade available, so a student with university ambitions in science or engineering should aim for Extended or Higher where the school permits it.",
        "Subject choice at this stage has long consequences. A student who wants to take Physics or Mathematics at A Level or IB Higher Level needs a strong Extended result in those subjects. A student keen on commerce may add Business Studies and Economics. Computer Science at IGCSE is a good test of whether a child enjoys programming before committing to it later.",
        "Hindi is an advantage for Phulera households. Taking Hindi as a second language is a relatively high-scoring option for fluent speakers and gives a useful grade without too much extra study. English as a Second Language is common among students from non-English-medium schools, but check carefully whether the target university or school asks for a particular English qualification.",
        "Because Phulera students are often private candidates, tutoring plans follow the registration deadlines. We map each subject to a specification code, collect the syllabus and past papers, and set a timetable that ends with several timed mocks.",
      ],
    },
  ],

  process: [
    { title: "Tell us the syllabus", description: "Share the programme, subject, level and exam session so we can find a tutor who has taught that exact course." },
    { title: "Meet a matched tutor", description: "We introduce a tutor chosen for the subject and your child's age and style, with a short profile you can read first." },
    { title: "Take a free trial lesson", description: "A real lesson on a real topic from your child's syllabus, with the family welcome to sit in." },
    { title: "Agree a plan in writing", description: "If the trial works, we confirm lesson frequency, timing and the rate in writing before anything begins." },
    { title: "Review and adjust", description: "A written note follows each session, and we change the tutor or pace if the fit is not right." },
  ],
  whyPoints: [
    { title: "Syllabus-matched tutors", description: "Tutors are picked for the IB subject and level or the IGCSE code and tier, not for a generic school subject." },
    { title: "Honest about distance", description: "We say clearly that Phulera has no tutor visits, and design online lessons so that this is not a handicap." },
    { title: "Mark-scheme literacy", description: "Tutors work from official mark schemes and examiner reports, so practice resembles the real papers." },
    { title: "Coaching, never writing", description: "Tutors guide method and feedback; they never write Internal Assessments, Extended Essays or coursework." },
    { title: "Written notes", description: "A short note after each lesson lets parents see what was covered and what comes next." },
    { title: "Change if it fits badly", description: "If the tutor and student do not click, we move to another tutor without a fuss." },
  ],

  faqs: [
    {
      question: "Are there IB or IGCSE tutors in Phulera?",
      answer:
        "There are very few resident IB or IGCSE tutors in Phulera, so we teach Phulera students online instead. Each tutor is based in India and teaches live, one to one, on Indian Standard Time. We choose the tutor for your child's exact subject, level and exam session, then run a free trial lesson first so you can judge the teaching before agreeing to anything.",
    },
    {
      question: "Do tutors come to my house in Phulera?",
      answer:
        "No, tutors do not come to houses in Phulera. Home visits run only in Gurugram and parts of Delhi NCR. For Phulera we offer online home tuition: your child sits at home with a laptop or tablet and a tutor teaches live, one to one, with a shared whiteboard and past papers on screen. Most families find it saves the commute and widens the choice of tutor.",
    },
    {
      question: "Is there an IB or IGCSE school in Phulera?",
      answer:
        "We could not confirm any school in Phulera that teaches the IB or a Cambridge or Edexcel IGCSE. The nearest options we know of are in Jaipur, around 70 to 80 km away. Always check directly with a school before relying on a listing, because offerings change. If you are unsure, ask the school which programmes and exam boards it is authorised to run.",
    },
    {
      question: "Can my child take the IGCSE as a private candidate from Phulera?",
      answer:
        "Yes, a private candidate route usually exists, but it depends on an approved examination centre accepting the registration. Centres in Jaipur are the closest place to ask. You will need to register months before the series, choose subjects and tiers, and plan for practical papers. A tutor helps with preparation; the registration itself must be arranged with the centre directly.",
    },
    {
      question: "How much does IB or IGCSE tuition cost for a Phulera student?",
      answer:
        "We do not publish prices because the rate depends on the programme, level, subject, lessons per week and how rare the tutor's specialism is. We quote in writing after a free trial lesson. Because lessons are online, a Phulera family does not pay for travel. Compare quotes on who teaches, lesson length, the change policy and whether the rate is written down.",
    },
    {
      question: "Which IB subjects do Phulera students ask for most?",
      answer:
        "Mathematics and the sciences are the most requested, followed by Economics, Business Management and English. Many students ask for Mathematics Analysis and Approaches at Higher Level or Physics HL, since those are demanding and benefit from one-to-one correction. Hindi A or B is also common in this area. We assign tutors by subject and level, not just by subject name.",
    },
    {
      question: "My child studies in RBSE or CBSE. Can they still get IGCSE help?",
      answer:
        "Yes, an RBSE or CBSE student can study IGCSE subjects with a tutor, usually as a private candidate or in preparation for switching. We start by comparing the syllabus with what the child already knows, because algebra and basic science overlap. Expect the biggest adjustments in written English, command words and practical-paper technique rather than in the underlying content.",
    },
    {
      question: "Do your tutors write the Internal Assessment or Extended Essay?",
      answer:
        "No. Tutors coach but never write an Internal Assessment, Extended Essay, Theory of Knowledge essay or any coursework. They can explain the criteria, discuss how to plan an investigation, and give feedback on a student's own draft. The work submitted must be the student's, and academic integrity rules at the IB and the school apply to every candidate.",
    },
    {
      question: "What internet speed is needed for online lessons from Phulera?",
      answer:
        "A steady broadband or fibre connection is best, but a good 4G or 5G hotspot also works for video and a whiteboard. Aim for a stable connection rather than a fast one, and keep a backup option for summer power cuts. We run a quick test during the trial lesson so you know the setup works before you commit to a plan.",
    },
    {
      question: "When are the IB and IGCSE exams, and how early should we start?",
      answer:
        "The IB Diploma has May and November sessions. Cambridge IGCSE runs February-March, May-June and October-November series, and Pearson Edexcel runs January, May-June and November. For a main exam, starting six to nine months ahead is sensible for most subjects. Private candidates must also register with a centre well before the series, so confirm dates first.",
    },
    {
      question: "Can a Class 8 or 9 student in Phulera start IGCSE preparation now?",
      answer:
        "Yes, and it is often the most sensible time. Starting in Class 8 or 9 gives a student a full year or more for algebra, basic science and written English before the pressure of final papers. We usually begin with a diagnostic lesson, build a topic list from the specification, and set a gentle weekly rhythm that fits around school work.",
    },
    {
      question: "Is the IB or IGCSE accepted by Indian colleges and CUET?",
      answer:
        "Generally yes, with paperwork. The Association of Indian Universities issues equivalence for the IB Diploma and for IGCSE results as Class 10, and CUET-UG is open to IB students who meet the subject requirements. JEE Main and NEET have their own eligibility rules, so check the latest notice. A school or counsellor should confirm the exact documents for each college.",
    },
    {
      question: "How do you handle Hindi and English during lessons?",
      answer:
        "Lessons are in English because the exams are in English, but tutors can clarify a difficult idea in Hindi when it helps. For a Phulera student who thinks in Hindi or Rajasthani, we suggest saying the idea aloud first and then writing it in English. Over a few weeks, the written explanations become clearer and quicker.",
    },
    {
      question: "What if the tutor is not a good fit?",
      answer:
        "We change the tutor. If after the trial or the first few lessons your child is not comfortable with the pace, style or personality, tell us and we propose another tutor with the same subject expertise. You are not locked into a long package, and rates are always confirmed in writing before you book.",
    },
    {
      question: "How do I start with IB Gram from Phulera?",
      answer:
        "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com with your child's class, school board, the subject and the exam session. We reply with a suggested tutor and a time for a free trial lesson. After the trial, you can decide whether to continue, change the tutor or stop with no obligation.",
    },
    {
      question: "Can you help with IB Theory of Knowledge or CAS?",
      answer:
        "We can help a student understand what Theory of Knowledge asks and how to build a good exhibition or essay plan, but the essay is the student's own work. CAS is a school-run requirement, and tutors can only advise on reflection quality and organisation. If CAS is a worry, discuss it first with the IB coordinator at the student's school.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Our online IB and IGCSE tuition service for students in cities and towns across the country." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject-by-subject information on our International Baccalaureate tutors." },
    { label: "IGCSE tutors", href: "/igcse/", description: "How we teach Cambridge and Pearson Edexcel IGCSE subjects and tiers." },
    { label: "IB Diploma Programme tutoring", href: "/programmes/dp/", description: "What Diploma tutoring covers, from Higher Level subjects to assessment technique." },
    { label: "IB MYP tutoring", href: "/programmes/myp/", description: "Support for the Middle Years criteria and the Personal Project." },
    { label: "IB Mathematics tuition", href: "/courses/ib/mathematics/", description: "Analysis and Approaches and Applications and Interpretation explained." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse tutor profiles by subject and programme." },
    { label: "Contact us", href: "/contact-us/", description: "Book a free trial lesson or ask a question before deciding." },
    { label: "IB and IGCSE tutors in Jaipur", href: "/jaipur/", description: "Our page for Jaipur, the nearest city with international schools." },
    { label: "IB and IGCSE tutors in Sikar", href: "/sikar/", description: "Online tuition for students in Sikar, the coaching town to the north of Jaipur." },
    { label: "IB and IGCSE tutors in Ajmer", href: "/ajmer/", description: "Our page for Ajmer, the other city many Phulera families use." },
  ],

  closingHeading: "Start with one free lesson for your child in Phulera",
  closingBody:
    "Tell us the programme, the subject and the exam series, and we will introduce a tutor who has taught it. The first lesson is free, the rate is shared in writing afterwards, and everything runs online so your child stays at home. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com.",
};
