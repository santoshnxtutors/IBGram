import type { CitySeoPage } from "../types";

/**
 * /perinthalmanna/ - IB and IGCSE tutoring page for Perinthalmanna, Malappuram district, Kerala.
 * No IB World School could be confirmed in the town. Silvermount International School (Kakkooth) is
 * listed by ProKerala as offering Cambridge IGCSE exams at Grade 10 beside CBSE, but the school's own
 * site and public disclosure show CBSE only, so it is named with that evidence stated and
 * stripSchools stays empty. Nearby clusters reuse names already verified on the Palakkad and Kochi
 * pages. Town facts from Wikipedia (Perinthalmanna, Angadippuram, Mankada, Melattur, Kodikuthimala,
 * AMU Malappuram Centre) and ptmgc.ac.in. Online-only delivery.
 */
export const perinthalmanna: CitySeoPage = {
  slug: "perinthalmanna",
  countryName: "Perinthalmanna",
  countryNameLong: "Perinthalmanna, Malappuram district, Kerala",
  demonym: "Perinthalmanna",
  state: "Kerala",
  stateCode: "IN-KL",
  flagCode: "in",
  countryCode: "IN",
  region: "Kerala, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson times are set around Friday prayers, parents' hospital shifts, madrasa hours and the heaviest monsoon days, then held steady week to week",
  lastUpdated: "2026-09-21",
  geo: { latitude: 10.9765, longitude: 76.2269 },
  wikipedia: "https://en.wikipedia.org/wiki/Perinthalmanna",
  alternateNames: ["Perintalmanna", "Perinthalmanna Malappuram", "Perinthalmanna taluk"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Perinthalmanna | Private Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Perinthalmanna: live one-to-one lessons at home, planned around hospital shifts, Onam terms and monsoon days, free trial class.",
  h1: "IB and IGCSE Tutors and Home Tuition in Perinthalmanna",
  heroEyebrow: "PERINTHALMANNA: LIVE ONLINE IB & IGCSE TUITION FROM HOME",
  heroSubtitle:
    "Home tuition in Perinthalmanna without the travel: a private tutor teaches live on video, one to one, while your child works at the family desk. Tutors are based elsewhere in India and keep to Indian Standard Time. Nobody arrives at the gate, since home visits run only in Gurugram and parts of Delhi NCR; the whiteboard, marking and past papers all come through the screen.",
  primaryKeyword: "IB and IGCSE tutors in Perinthalmanna",
  imageAltText: "A Perinthalmanna student working through an IB Biology data question on a laptop during a live private lesson with a tutor",
  secondaryKeywords: [
    "IB tutor Perinthalmanna",
    "IGCSE tutor Perinthalmanna",
    "IB home tuition Perinthalmanna",
    "IGCSE home tuition Perinthalmanna",
    "IB private tuition Perinthalmanna",
    "IB Maths tutor Perinthalmanna",
    "IGCSE Maths tutor Perinthalmanna",
    "IB Physics tutor Perinthalmanna",
    "IB Chemistry tutor Perinthalmanna",
    "IB Biology tutor Perinthalmanna",
    "IB DP tutor Perinthalmanna",
    "IB MYP tutor Perinthalmanna",
    "IB PYP tutor Perinthalmanna",
    "IGCSE online tuition Perinthalmanna",
    "IB tutor Angadipuram",
    "IGCSE tutor Melattur",
    "IB tutor Mankada",
    "Cambridge IGCSE tuition Malappuram district",
    "Perintalmanna IB IGCSE tutor",
    "online IB tuition Kerala Perinthalmanna",
  ],

  heroTrustPoints: [
    "Tutors in India on IST, so evening and weekend slots are easy to fix",
    "A free trial lesson first; written rates only afterwards",
    "A short written note after every session",
    "Another tutor on request if the fit is off",
    "Coaching only: no IA, Extended Essay or TOK essay is written for a child",
  ],
  heroStats: [
    { value: "Online", label: "Live, private and one to one" },
    { value: "PYP to DP", label: "IB stages and IGCSE covered" },
    { value: "Free trial", label: "A real lesson before any fee" },
    { value: "May & Nov", label: "The IB sittings we plan towards" },
  ],

  intro: {
    heading: "IB and IGCSE tutors in Perinthalmanna, the hospital town where the Western Ghats begin",
    paragraphs: [
      "Perinthalmanna sits on National Highway 966 between Kozhikode and Palakkad, about 23 kilometres south-west of Malappuram, and was once the headquarters of the old Walluvanad taluk. Today it is better known as the hospital city of Malabar, with large private hospitals in town and a medical college campus at neighbouring Angadipuram. Doctors, nurses, teachers, traders and Gulf-linked families live side by side, and many ask the same thing: where can my child study an international syllabus without leaving home? IB and IGCSE tutors in Perinthalmanna from IB Gram exist to answer that.",
      "The picture on the ground is thin, and we would rather say so. We could not confirm any authorised IB World School in town. One local school, Silvermount International School at Kakkooth, appears in a directory as offering Cambridge IGCSE exams at Grade 10, though its own website describes CBSE affiliation. Most families therefore meet these syllabuses through a child returning from a Gulf school, enrolment with a school elsewhere or online, or a private-candidate route. Each needs help with the syllabus itself.",
      "IB Gram tutors teach from elsewhere in India on Indian Standard Time, live and one to one, with a shared whiteboard, the student's own worked pages and past papers. Our home visits run only in Gurugram and parts of Delhi NCR, so in this town the private lesson happens online, at the family desk. A free trial class comes first, rates follow in writing, and a short note after each session keeps parents informed.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description: "Inquiry-led primary learning built around themed units, where reading, number sense and questioning grow through projects.",
      countryNote: "A child from a Gulf PYP school entering a Malayalam-medium or CBSE primary class often needs a bridge that keeps inquiry habits alive while new routines settle.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description: "Five years of concept-driven courses marked against published criteria, closing with a personal project the student carries out alone.",
      countryNote: "Students leaving an MYP school mid-course ask whether to rejoin a Kerala Class 9 or 10 timetable or finish with IGCSE, and a tutor can lay out both routes.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description: "Two pre-university years: six subjects at Standard or Higher Level, a 4,000-word Extended Essay, Theory of Knowledge and a service strand.",
      countryNote: "IB exams are entered only through an authorised school, so a Perinthalmanna family combines a school elsewhere or online with tutoring at home.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description: "A shorter route pairing at least two Diploma courses with career-related study and a reflective project.",
      countryNote: "Rare in Kerala; it mostly arrives as a parent's question, and we explain how its subjects map onto Indian entrance routes.",
    },
  ],
  programmesIntro:
    "A first lesson starts with where the child stands on the syllabus and what the school or exam board expects next; the stage matters less than a clear picture of the gap.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Functions, calculus and proof, taught with the habit of showing every step." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology, a steady fit for biology, economics and medicine." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, waves, fields and nuclear topics, with data questions and investigation design." },
    { name: "Chemistry", levels: "SL / HL", description: "Structure, energetics, kinetics and organic reactions, including how long answers earn marks." },
    { name: "Biology", levels: "SL / HL", description: "Cells to ecology, with graph analysis and experiment design; a frequent choice where families lean towards medicine." },
    { name: "Environmental Systems and Societies", levels: "SL / HL", description: "Ecosystems, climate and resource use, a natural companion to the Ghats landscape east of town." },
    { name: "Economics", levels: "SL / HL", description: "Markets, trade and development, using remittance and small-business examples students already see." },
    { name: "Business Management", levels: "SL / HL", description: "Case-study papers on operations, finance and strategy, relevant to trading families." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, networks and databases, practised through trace tables and timed questions." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Close reading and comparison, for students who move between Malayalam, English and Arabic daily." },
    { name: "Malayalam A: Literature", levels: "SL / HL", description: "Poetry, prose and written commentary, for students who want their own language at Diploma level." },
    { name: "Hindi B and Arabic B", levels: "SL / HL", description: "Language acquisition courses for students who studied either language at school or abroad." },
    { name: "Theory of Knowledge", levels: "Core", description: "Help thinking through knowledge questions; the essay and exhibition stay entirely the student's own." },
  ],
  subjectsIntro:
    "Subject choice follows the degree in view, then what the student has already studied, then what the enrolling school can timetable.",

  igcseSubjects: [
    { name: "Mathematics (Core and Extended)", levels: "Cambridge 0580 / Edexcel 4MA1", description: "Number, algebra, geometry and statistics; the tier is settled in the first lessons." },
    { name: "Additional Mathematics", levels: "Cambridge 0606", description: "Functions, calculus and trigonometry that prepare a student for A Level or IB mathematics." },
    { name: "Physics", levels: "Cambridge 0625 / Edexcel 4PH1", description: "Motion, energy, waves and circuits, examined through unfamiliar situations." },
    { name: "Chemistry", levels: "Cambridge 0620 / Edexcel 4CH1", description: "Bonding, reactions, calculations and analysis, with practical skills handled early." },
    { name: "Biology", levels: "Cambridge 0610 / Edexcel 4BI1", description: "Cells, inheritance and ecosystems, with many graph and table questions." },
    { name: "English as a First Language", levels: "Cambridge 0500", description: "Argument, description and summary writing, with attention to accuracy and tone." },
    { name: "English as a Second Language", levels: "Cambridge 0510", description: "Reading, writing, listening and speaking for students whose home language is Malayalam." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Pseudocode, data representation and networks." },
    { name: "Economics", levels: "Cambridge 0455", description: "Scarcity, markets and government policy, with data-response practice." },
    { name: "Accounting", levels: "Cambridge 0452", description: "Double-entry bookkeeping and financial statements, useful for trading families." },
    { name: "Arabic as a Foreign Language", levels: "Cambridge 0544", description: "Rewards the Arabic a child has absorbed at madrasa or abroad." },
  ],
  igcseSubjectsIntro:
    "Tutors confirm the board, tier and syllabus code before the first lesson, because Cambridge and Edexcel papers differ in layout and wording even when the subject name matches.",

  regionsTitle: "Areas around Perinthalmanna where our students log in from",
  regionsIntro:
    "Lessons run online wherever the family lives, so these notes are about timing and context rather than travel: how each part of the taluk tends to shape a school day.",
  regions: [
    { name: "Perinthalmanna town centre", note: "Bus stand, hospitals and shops along NH 966, including the stretch locals call Kozhikode Road; traffic thickens near school closing time." },
    { name: "Angadipuram", note: "A suburb west of the centre with a station on the Nilambur-Shoranur line, a geo-heritage laterite monument and a medical college campus; some families plan lessons around hospital shifts." },
    { name: "Kakkooth", note: "The locality of Silver Hills, where Silvermount International School stands; a sensible place to begin any conversation about which board a child's Class 10 actually follows." },
    { name: "Pattikkad", note: "A village near the town with its own station on the same line; an evening slot after the journey home from school or work is the usual fit." },
    { name: "Cherukara and Chelamala", note: "Home to the AMU Malappuram Centre, roughly six kilometres from town, which brings law, management and education students into a quiet hill area." },
    { name: "Mankada", note: "Ten kilometres towards Malappuram, with a Government Higher Secondary School and the Kadannamanna Kovilakam, once a seat of a Valluvanad ruling family; evenings suit children who go to school by bus." },
    { name: "Melattur", note: "Seventeen kilometres from town on State Highway 39, beside the Velliyar river and with its own station; the distance makes home-based online lessons practical." },
    { name: "Thazhekode and Kodikuthimala", note: "Kodikuthimala, nine kilometres from town and 540 metres high, is the nearest hill viewpoint; hillside homes may have weaker mobile signal, so test the connection before fixing a slot." },
    { name: "Aliparamba, Vettathur and Elamkulam", note: "Village panchayats of the taluk where homes are spread out, so a lesson at the desk removes the trip into town." },
  ],

  schoolClusters: [
    {
      city: "Perinthalmanna itself",
      note: "No authorised IB World School could be confirmed in town. Silvermount International School at Silver Hills, Kakkooth, is listed by one directory as offering Cambridge IGCSE exams at Grade 10 beside CBSE, while the school's own website and public disclosure show CBSE affiliation for Class X only. Ask the school which board examines each class before relying on it.",
      schools: ["Silvermount International School, Perinthalmanna"],
    },
    {
      city: "Nearby: Palakkad district",
      note: "Across the district border and joined to Perinthalmanna by NH 966, Palakkad has one school confirmed to teach IGCSE, near Pirayiri; it is context for families weighing a move or boarding, not a wide choice.",
      schools: ["Cordova International School, Kallekkad"],
    },
    {
      city: "Nearby: Kochi",
      note: "Kerala's widest group of IB and Cambridge schools sits around Kochi, roughly 150 kilometres south by road; a few Perinthalmanna families weigh boarding or relocation there for the Diploma or IGCSE years.",
      schools: ["The Choice School, Ambalamugal", "TIPS Kochi", "Cochin International School", "Global Public School, Thiruvankulam"],
    },
    {
      city: "Nearby: Kozhikode",
      note: "The closest big city, about 70 kilometres north-west along NH 966. We could not confirm an IB or Cambridge school there, so none is named and most students rely on online tutoring.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "Schools are named only as places families in this part of Malappuram district may already know or weigh up, and each entry carries the limits of what we could verify. IB Gram works on its own: it has no tie to the International Baccalaureate, Cambridge, Pearson or any school on this page, and a name here is information, not a recommendation.",

  modesIntro:
    "Nobody travels to a Perinthalmanna house for lessons; outside Gurugram and parts of Delhi NCR there are no home visits. Families here tend to choose among three online formats.",
  modes: [
    {
      title: "Weekly lessons on a fixed evening",
      description: "One tutor, one subject and one regular slot, with the student's own pages marked live and a small task set for the week ahead.",
      bullets: ["Same day and hour weekly", "Live written feedback", "A note for parents"],
    },
    {
      title: "A bridge for a mid-year change",
      description: "For a child arriving from a Gulf school or switching boards, a plan that maps the old syllabus onto the new one and closes gaps in order of importance.",
      bullets: ["Syllabus and tier check", "Language support", "A steady catch-up schedule"],
    },
    {
      title: "A revision block before an exam series",
      description: "A compact run of timed papers and error review ahead of the May-June or October-November sittings.",
      bullets: ["Timed past papers", "A log of repeated mistakes", "Topics ranked by marks"],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Perinthalmanna, and does the word international in a name settle it?",
      paragraphs: [
        "No authorised IB World School could be confirmed in Perinthalmanna, and only one school in the town has any Cambridge link on record. Silvermount International School at Kakkooth is listed by a directory as offering Cambridge IGCSE exams at Grade 10 beside CBSE, but its own website and public disclosure describe CBSE affiliation for Class X and never mention Cambridge. Treat IGCSE there as a question for the school, not a settled fact, before planning a child's next two years around it.",
        "The word international in a school's name is branding, not a board. Across Malappuram district many schools carry it, from Valanchery and Pulikkal to Mampad and Tirur, and the directories listing them usually name no curriculum. Three questions settle the matter in ten minutes: which board affiliates the school, for which classes, and who conducts its examinations. CBSE requires each affiliated school to publish a public disclosure, and Cambridge and the IB both keep searchable lists of their own schools.",
        "Assuming wrongly is costly. A child admitted in Class 9 on the belief that IGCSE will follow meets a different Class 10 course, paper style and exam season, and a late switch can cost a term or more. Ask for the affiliation number, the examination centre and last year's results in writing, and ask what happens after Class 10, because a school affiliated only to that stage leaves the family hunting for a Class 11 and 12 route.",
        "That is why tutoring outside school hours matters here. A student in a CBSE or Kerala syllabus school who wants IGCSE as a private candidate, or a child back from a Gulf IB or IGCSE school, often studies the international syllabus beside the local timetable. IB and IGCSE tutors in Perinthalmanna from IB Gram teach it online, leave the school routine alone and plan around exam dates rather than whatever a nearby campus offers.",
      ],
    },
    {
      heading: "How do Kerala State, CBSE and ICSE compare with IGCSE and the IB for a Perinthalmanna student?",
      paragraphs: [
        "Kerala State and CBSE courses lead to school-leaving exams that feed KEAM, NEET and CUET directly, while IGCSE is a two-year course ending in subject papers at about sixteen and the IB Diploma is a two-year pre-university course in six subjects. For most families looking at IB and IGCSE tutors in Perinthalmanna, the decision turns on where the student wants to study after school, and which door each board opens most easily. The table sets the routes side by side.",
        "Most schools in and around town follow the Kerala SCERT syllabus, in Malayalam or English medium, with the SSLC exam in March and the Higher Secondary course afterwards. Papers reward accurate recall of the textbook and tidy presentation. A student moving into IGCSE from there usually has the content but must learn a new habit: explaining why, in full sentences, with units and command words handled exactly.",
        "A smaller group of schools follow CBSE, with a national syllabus, Class 10 and 12 board exams from mid-February and a structure suited to JEE and NEET preparation. ICSE and ISC are uncommon here. Moving between Kerala State and CBSE at the end of Class 8 is far easier than moving into an international board, because subjects, language and exam rhythm stay familiar.",
        "Two practical points apply whatever the choice. Kerala requires Malayalam to be taught in schools of every board, so an IGCSE or IB student who later wants a Kerala Plus One seat should check language rules early. And children back from the Gulf may have dropped Malayalam or gained Arabic. Tutors can cover subject gaps, but the receiving school's admission office has the last word on equivalence and seats.",
      ],
      table: {
        caption: "Routes a Perinthalmanna family may weigh up",
        columns: ["Route", "How common here", "Class 10 milestone", "Usual next step in India"],
        rows: [
          ["Kerala State syllabus", "Most schools", "SSLC exam in March", "Higher Secondary, then KEAM, NEET or a university"],
          ["CBSE", "A smaller group", "Board exam, February to March", "Class 12, then CUET-UG, JEE Main or NEET-UG"],
          ["Cambridge or Edexcel IGCSE", "Rare; one school in a directory", "IGCSE papers, May-June or October-November", "AS and A Level, or another Class 11 route"],
          ["IB MYP then Diploma", "No school confirmed in town", "MYP personal project", "Diploma through an authorised school"],
        ],
      },
    },
    {
      heading: "What shapes the cost of IB and IGCSE tuition in Perinthalmanna?",
      paragraphs: [
        "Four things set what IB and IGCSE tutors in Perinthalmanna charge: the tutor's experience with the exact specification, the subject and level, how long and how often sessions run, and how close the exam is. No figure appears here because two families seldom ask for the same thing. A weekly hour of IGCSE English writing is a different purchase from IB Physics Higher Level twice a week through a mock season. Rates arrive in writing only after the free trial lesson.",
        "Experience counts most. A tutor who has taught IB Chemistry for years, knows how examiners split a six-mark question and spots a recurring slip in a student's working is scarcer than a general subject teacher, and the rate reflects that. Higher Level mathematics and sciences, and subjects with few qualified tutors, usually sit at the upper end; early PYP and MYP lessons need less subject depth and are often quoted lower.",
        "Session pattern comes next. Two shorter lessons a week can cost differently from one long one, and an exam-window block before a May or October series is priced as its own plan. A family with a hospital-shift parent may need a late-evening or early-morning slot, and popular hours book early. Mention madrasa classes and school transport up front so the plan is realistic, and ask what the plan commits you to before you agree.",
        "Some costs are absent. Nothing is spent on travel and no centre is rented, which matters when the alternative is a weekly round trip to Kozhikode or Kochi with fuel and a lost afternoon each time. Compare like with like: a group evening class teaches many students at once, while a private online tutor reads one student's work. Set a monthly ceiling, say it plainly, and the tutor can propose a plan inside it.",
      ],
    },
    {
      heading: "Online home tuition, a tuition centre, a private teacher or self-study: which suits Perinthalmanna students?",
      paragraphs: [
        "For an IB or IGCSE syllabus, a live one-to-one online tutor suits most families, because a subject specialist reads the student's real work and nobody has to travel. Tuition centres and home teachers in and around the town mostly teach Kerala State and CBSE content, a different job from preparing for IB command terms or Cambridge mark schemes. The table compares five common options.",
        "Perinthalmanna has the evening tuition culture of a Kerala taluk headquarters, with batches for Plus One and Plus Two and entrance coaching for KEAM and NEET. Those classes do their own job well; the mismatch appears when a student needs help planning an IB Internal Assessment, tackling an IGCSE practical paper or unpicking a Higher Level Biology data question, because a batch moves at one pace and follows one syllabus.",
        "A retired school teacher visiting the house can give a child routine and attention, and for primary reading or basic arithmetic that may be enough. For the IB Diploma or IGCSE Extended papers the gap is knowledge of the specification. An excellent mathematician can still be unfamiliar with how IB Mathematics awards method marks or how a Cambridge paper words a question, and those details decide grades.",
        "Self-study and distant coaching have limits too. A disciplined student can work through past papers alone, but nobody marks the reasoning. Travelling to Kochi, about 150 kilometres away, or Kozhikode, roughly 70, costs whole days and is harder in the June to September rains. An online lesson keeps the student at the desk while an expert reads the actual pages.",
      ],
      table: {
        caption: "Ways a Perinthalmanna student can prepare for an international syllabus",
        columns: ["Option", "Knows IB or IGCSE marking", "Attention", "Practical load"],
        rows: [
          ["Live online one-to-one tutor", "Yes, a subject specialist", "Individual", "Laptop, steady connection, fixed slot"],
          ["Evening tuition centre in town", "Seldom", "Shared by a batch", "Daily travel, set batch timings"],
          ["Private teacher at home", "Depends on the teacher", "Individual", "Good for basics, limited syllabus knowledge"],
          ["Coaching in Kozhikode or Kochi", "Sometimes", "Small group", "Long journeys, sometimes a night away"],
          ["Self-study with past papers", "Only what the papers show", "None", "Needs discipline and a second reader"],
        ],
      },
    },
    {
      heading: "When do exams fall, and how do Onam, Ramadan and the monsoon shape a Perinthalmanna study year?",
      paragraphs: [
        "IGCSE papers are sat in the May-June and October-November series, and IB Diploma written exams fall mainly in May, with November used by a few schools. Kerala schools add their own rhythm: reopening in early June, a first terminal exam near Onam, a second before Christmas, and SSLC and Plus Two exams in March. On top come Ramadan, Friday prayers, madrasa hours and the southwest monsoon.",
        "A tutor places mock papers and revision blocks in the quieter weeks between those events instead of stacking extra work onto a school test week. CBSE schools run Class 10 and 12 board exams from mid-February, so a child in a CBSE school needs the whole plan shifted a few weeks earlier than a child on the state syllabus.",
        "Perinthalmanna has a majority Muslim population, so Ramadan, Eid al-Fitr and Bakrid shape family time, and where a child attends madrasa classes the tutor fits around them. Friday midday prayers clear the schedule too. Ramadan moves about eleven days earlier each year and in 2027 begins in February, close to mock season; lessons then shift to after iftar or early morning, the load lightens, and festival days stay free.",
        "The southwest monsoon arrives in June and runs to September, with the northeast monsoon adding showers in October and November. Power cuts and broadband faults follow storms, so keep a charged phone that can serve as a hotspot and agree a backup slot each week. Hospital shifts can change a parent's availability from week to week, so mention a new roster early and the tutor will look for another slot.",
      ],
      table: {
        caption: "A Perinthalmanna study year, month by month",
        columns: ["Months", "Local rhythm", "School or exam milestone", "How lessons adapt"],
        rows: [
          ["June to August", "Schools reopen as the southwest monsoon peaks", "New term, first class tests", "Foundations and gap-closing, a spare slot each week"],
          ["August to September", "Onam holidays", "First terminal exams", "Light revision before, timed papers after the break"],
          ["October to November", "Northeast monsoon showers", "Cambridge and Edexcel October-November series", "Short, focused lessons for candidates"],
          ["December", "Christmas holidays", "Second terminal exams", "Longer catch-up sessions once exams end"],
          ["January to March", "Dry weather; Ramadan falls here in 2027", "Mocks, internal assessments, board exams", "Full papers and method coaching, lighter Ramadan weeks"],
          ["April to May", "Hot, humid, pre-monsoon storms", "IGCSE May-June and IB May sittings", "Compact revision blocks and timed practice"],
        ],
      },
    },
    {
      heading: "IB Mathematics AA or AI, and how should the sciences be chosen in a medicine-minded town?",
      paragraphs: [
        "Analysis and Approaches suits students heading for engineering, physics, computing or pure mathematics, because it stresses algebra, functions, calculus and proof. Applications and Interpretation leans on statistics, modelling and technology, and fits biology, economics, psychology and medicine. In a town with so many doctors' families the second is a common choice, but the decision should follow each target university's published requirements. For most medical routes the subjects that decide entry are Chemistry and Biology; mathematics keeps other degrees open.",
        "Kerala students usually arrive with a strong base in algebra and calculus, which helps in either course. The difference lies in presentation: IB examiners reward clear working, precise language and correct use of a graphing calculator, and award method marks even when the final answer is wrong. Each course includes an Internal Assessment, a written exploration on a topic the student chooses; the tutor tests whether it is workable, and the writing stays the student's.",
        "The sciences reward a different preparation. Biology and Chemistry at Higher Level carry heavy content, many data questions and an investigation the student designs; Physics adds mathematical modelling across mechanics, waves, fields and quantum topics. A tutor works through past papers topic by topic, teaches how a six-mark answer is built and trains the student to read an unfamiliar graph quickly. Where a school has no laboratory, the practical element needs early planning.",
        "Workload deserves an honest conversation. Higher Level Biology and Chemistry plus a mathematics course, with NEET or an aptitude test on top, is a great deal, and parents in hospital families often know this from their own training. Sequencing the work, protecting sleep and choosing Standard Level where it does no harm to the target course can matter more than an extra study hour. Remember that IB exams are entered through an authorised school; a home tutor supports the course and never replaces enrolment.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects should a Perinthalmanna student choose?",
      paragraphs: [
        "In Cambridge IGCSE, Core papers top out at grade C while Extended papers can reach A* and are the normal choice for a student planning A Level, the IB or a science career; Edexcel uses Foundation and Higher tiers instead. A child who did comfortably in Class 8 or 9 mathematics is usually ready for Extended, and a short diagnostic in the first lessons confirms it. Where in doubt, start on Extended content, because dropping to Core later is simple and the reverse is very hard.",
        "A typical IGCSE load is five to eight subjects: English, mathematics, a language, two or three sciences and one elective. Future doctors keep Biology and Chemistry beside Physics and Mathematics; would-be engineers weight Mathematics, Additional Mathematics and Physics. Trading and business families often add Accounting or Economics, which suit the commercial culture of a Malabar town.",
        "Cambridge and Pearson Edexcel cover the same subject names differently: syllabus codes, paper structures, command words and practical papers all vary. A tutor asks for the code and tier before the first lesson, because revising from the wrong board's past papers can cost weeks. Practical skills are tested through a laboratory paper or a written alternative depending on board and centre, so find out which applies early.",
        "A student who wants to sit IGCSE outside a school must register as a private candidate through a centre that accepts external entries and can run any practical components. Registration closes months before each series and fees differ by centre. A family who later wants a Kerala Plus One seat should ask the admission office what equivalence paperwork is needed, since it differs from CBSE or ICSE. Tutors prepare the papers; they cannot arrange entry.",
      ],
    },
    {
      heading: "Which universities and careers follow from IB or IGCSE for students in Perinthalmanna?",
      paragraphs: [
        "Most routes stay open. The Association of Indian Universities treats the IB Diploma as a Class 12 equivalent, CUET-UG is the usual doorway to central universities, and NEET-UG and KEAM set their own subject and marks conditions that must be checked every year. Abroad, universities in the UK, Canada, Australia and Ireland read IB scores and Cambridge qualifications directly. The real question is whether the subjects chosen match the course the student wants.",
        "Close to home the options are real. Pookoya Thangal Memorial Government College in town, founded in 1975 and affiliated with the University of Calicut, offers arts, commerce and science degrees. The Aligarh Muslim University Malappuram Centre near Cherukara, about six kilometres away, teaches law, management and education programmes. Each sets its own admission rules, so read the current prospectus before applying.",
        "Medicine is the dream many households here share. NEET-UG requires Physics, Chemistry, Biology or Biotechnology and English at senior stage, and a student with an IB Diploma should confirm equivalence in the latest NTA bulletin. Private medical colleges such as the MES campus at Angadipuram admit through NEET-based counselling too. UK medical schools usually expect Chemistry and Biology, often at Higher Level, plus an aptitude test such as UCAT; tutoring supports the subjects, never the application.",
        "Other paths are just as valid. Engineers look to NIT Calicut and other institutes through JEE Main, nurses and pharmacists can build careers in the town's own hospitals, and many families keep a Gulf route in mind. Tutors do not manage applications, but they say honestly which combinations keep doors open, such as Mathematics with Physics and Chemistry for engineering.",
      ],
      table: {
        caption: "Where Perinthalmanna students commonly aim after IB or IGCSE",
        columns: ["Goal", "Main route", "With the IB Diploma", "With IGCSE"],
        rows: [
          ["MBBS or BDS in India", "NEET-UG counselling", "Equivalence plus Physics, Chemistry, Biology and English", "A Class 12 route must follow"],
          ["Engineering in India", "JEE Main and KEAM", "Mathematics, Physics and Chemistry choices matter", "A Class 11-12 programme first"],
          ["Arts, science, law or commerce in India", "CUET-UG or university tests", "AIU equivalence usually enough", "Needs a Class 12 equivalent first"],
          ["Study in the UK, Canada, Australia or Ireland", "Direct university applications", "Scores read directly", "IGCSE, then A Level or the Diploma"],
          ["Work or study in the Gulf", "Employer or university route", "Widely recognised", "Recognised at school level, then a senior course"],
        ],
      },
    },
  ],

  process: [
    { title: "Tell us the situation", description: "Write a few lines on your child's class, current school or board, and the subject that feels shaky." },
    { title: "We confirm the syllabus", description: "Board, tier, syllabus code and exam series are checked, along with school or private-candidate status." },
    { title: "Sit in on a free lesson", description: "A matched tutor teaches a genuine class at an hour that suits your household's evening." },
    { title: "Read the rates afterwards", description: "A written quote and suggested weekly plan arrive after the lesson, with nothing paid in advance." },
    { title: "Settle into a routine", description: "Sessions begin, a short note follows each one, and a different tutor is available on request." },
  ],

  whyPoints: [
    { title: "Matched on the exact course", description: "Each tutor is chosen for the IB guide at the right subject and level, or the Cambridge or Edexcel code." },
    { title: "Plain about delivery", description: "Lessons are online and private, and we say so: home visits exist only in Gurugram and parts of Delhi NCR." },
    { title: "Built around the town", description: "Hospital shifts, Friday prayers, madrasa hours, Onam terminals and the rains shape the timetable from week one." },
    { title: "Rates in writing, after the trial", description: "You watch a real lesson first and then receive a written quote; nothing is booked beforehand." },
    { title: "Coaching, never ghost-writing", description: "Tutors explain criteria and react to drafts; your child's IA, essay or coursework stays your child's own." },
    { title: "A note after every session", description: "A short summary records what was covered, what went wrong and what to practise next." },
  ],

  tutorsIntro:
    "Every tutor teaches live from elsewhere in India and is matched to a student by subject and programme; use the trial hour to judge the fit before deciding anything.",

  faqs: [
    {
      question: "Do tutors come to homes in Perinthalmanna?",
      answer: "No tutor visits homes in Perinthalmanna; lessons are live, online and one to one. Home visits run only in Gurugram and parts of Delhi NCR. Here your child sits at the family desk with a laptop, the tutor appears on video and writes on a shared whiteboard, and the student's own pages are marked while everyone watches. It is private tuition at home in every sense except the commute.",
    },
    {
      question: "Is there an IB World School in Perinthalmanna?",
      answer: "We could not confirm any IB World School in Perinthalmanna. The IB keeps a searchable list of authorised schools, and families should check it directly because lists change. Students who want the Diploma generally enrol with an authorised school in Kochi, Bengaluru or Coimbatore, or with an online IB school, and use tutoring at home for subject depth.",
    },
    {
      question: "Does Silvermount International School offer Cambridge IGCSE?",
      answer: "One directory says it offers Cambridge IGCSE exams at Grade 10 beside CBSE, but the school's own website and public disclosure show CBSE affiliation for Class X and do not mention Cambridge. Phone the school and ask which board examines Class 10, which centre number is used and whether IGCSE is open to new admissions. We tutor whichever syllabus your child actually follows.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Perinthalmanna?",
      answer: "There is no single price, because the rate depends on the subject and level, the tutor's experience and how many sessions you want each week. You see rates in writing after a free trial lesson, never before. If the budget is fixed, say so early; the tutor can focus on the topics carrying the most marks before the next paper, or propose fewer, longer sessions.",
    },
    {
      question: "My child is coming back from a Gulf school. Where do we start?",
      answer: "Start with a diagnostic lesson before school decisions are final. The tutor checks which board and tier the child followed, compares that with the Kerala or CBSE syllabus of the new school and lists the gaps in order of importance. Then you choose between finishing the old programme, changing boards or combining the two. A calm plan made a term ahead usually avoids a difficult first year back.",
    },
    {
      question: "Can my child sit IGCSE as a private candidate from Perinthalmanna?",
      answer: "Often yes, provided a registered centre accepts external candidates and can run the practical papers. Registration deadlines fall months before each series and fees differ by centre, so begin early. A tutor prepares the syllabus, timed papers and practical skills but cannot register a child. Contact centres directly, ask about external entries and keep the syllabus code ready, since Cambridge and Edexcel codes are not interchangeable.",
    },
    {
      question: "Can a student take the IB Diploma without an IB school nearby?",
      answer: "Not alone: IB exams are entered only through an authorised IB World School, and that school can be an online one. A private candidate cannot register directly. Families in Perinthalmanna therefore board at a school elsewhere, enrol in an online IB programme, or choose IGCSE and A Level instead. Private tuition then supports the subjects at home, and the tutor never replaces the school's registration.",
    },
    {
      question: "Is the IB Diploma accepted for NEET and Indian universities?",
      answer: "For Indian universities, the Association of Indian Universities treats the IB Diploma as a Class 12 equivalent, and CUET-UG covers most central universities. NEET-UG has its own rules, including Physics, Chemistry, Biology or Biotechnology and English at senior level, and equivalence checks. Read the current NTA bulletin and each university's admission notice, since conditions change. Tutors explain the subject logic, but only the official notices are binding.",
    },
    {
      question: "We want medicine. Which IB or IGCSE subjects keep that open?",
      answer: "Biology and Chemistry are the pillars, with Physics or Mathematics alongside. In the IB, most medical routes expect both sciences, often at Higher Level for UK medical schools; in IGCSE, taking all three sciences plus Mathematics keeps every senior option open. Check each target college's rules before finalising choices, and plan sleep and workload honestly, because aspirants often carry entrance preparation on top of school work.",
    },
    {
      question: "How does Ramadan affect lesson times?",
      answer: "Lessons move to after iftar or to early morning, and some weeks are lighter so nobody studies through the last hour before sunset. Eid stays a full holiday and catch-up follows it. Tell the tutor at the start how your household runs the month, including any madrasa or Quran classes, and the plan is built around that. Ramadan shifts about eleven days earlier each year, so check it against the mock calendar.",
    },
    {
      question: "What if rain or a power cut interrupts an online lesson?",
      answer: "The tutor and student resume after the break or move the lesson to a backup slot agreed for that week, so the lesson is not simply lost. During the June to September rains, keep the laptop charged, a phone ready to act as a hotspot and, if possible, a second internet connection. Tell us if your area loses power in storms, and we will schedule shorter sessions on the worst days.",
    },
    {
      question: "Will the tutor write my child's IA, Extended Essay or coursework?",
      answer: "No. Everything submitted under your child's name is written by your child. A tutor can explain the marking criteria, test whether a research question is workable, comment on an outline and read a draft for clarity, but does not draft sentences, run analyses or fix data. That boundary protects your child from a malpractice finding.",
    },
    {
      question: "Which IGCSE boards do tutors cover, Cambridge or Edexcel?",
      answer: "Both Cambridge International and Pearson Edexcel, with AS and A Level used only as background. The first step is always the syllabus code and tier, because past papers from the wrong board waste weeks. If your child's school is unsure which board examines Class 10, ask for the exam entry details, and we will match a tutor who has taught that exact specification.",
    },
    {
      question: "Do tutors help with Malayalam, Arabic or Hindi?",
      answer: "Yes, where a tutor is available: IB Malayalam A, Hindi B and Arabic B, and IGCSE Arabic. Children back from the Gulf may have lost Malayalam or gained Arabic, and a tutor builds on the stronger language first. Availability varies by language and level, so we confirm a tutor before you commit.",
    },
    {
      question: "How do we get started, and how does the free trial work?",
      answer: "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the class, the board or school, and the subject. We suggest a tutor and fix a real lesson at a convenient hour. Afterwards you receive a short summary and, only if you wish to continue, written rates. If the tutor does not suit, say so and another is proposed without awkwardness.",
    },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Tutors, subjects and how the trial works." },
    { label: "Indian city pages", href: "/india/", description: "Other cities where lessons run online." },
    { label: "Gurugram", href: "/gurgaon/", description: "The one place where tutors also go to homes." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse tutors by IB subject and level." },
    { label: "IGCSE", href: "/igcse/", description: "Cambridge and Edexcel subject pages." },
    { label: "IB MYP", href: "/programmes/myp/", description: "How the five MYP years are assessed." },
    { label: "IB DP", href: "/programmes/dp/", description: "What the Diploma asks over two years." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI explained in more detail." },
    { label: "Contact us", href: "/contact-us/", description: "Write to us or book the free trial." },
    { label: "Malappuram", href: "/malappuram/", description: "The district headquarters, about 23 kilometres north-east." },
    { label: "Palakkad", href: "/palakkad/", description: "The neighbouring district city, along NH 966." },
    { label: "Kozhikode", href: "/kozhikode/", description: "The nearest big city, to the north-west." },
    { label: "Ottappalam", href: "/ottappalam/", description: "A Palakkad-district town with a similar school picture." },
  ],

  closingHeading: "Start with one free lesson, from the desk at home in Perinthalmanna",
  closingBody:
    "If you have been searching for IB and IGCSE tutors in Perinthalmanna, a short message is enough to begin: the class, the board or school your child is coming from, and the subject that needs attention. We suggest a tutor and a trial hour; written rates come only after you have seen a lesson. Reach us on WhatsApp at +91 7439 368 115 or at support@ibgram.com.",
};
