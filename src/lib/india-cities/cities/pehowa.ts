import type { CitySeoPage } from "../types";

/**
 * Pehowa, Kurukshetra district, Haryana (ancient Prithudaka / Pitrudhak Teerth). Unambiguous:
 * there is only one Pehowa, a tehsil town 27 km west of Kurukshetra, vehicle code HR-41.
 * No school in Kurukshetra district could be confirmed as an authorised IB World School or a
 * registered Cambridge / Edexcel centre, so stripSchools is empty and the clusters below point to
 * the Chandigarh tricity and Delhi NCR, reusing names already verified on the Thanesar, Kaithal
 * and Karnal pages.
 */
export const pehowa: CitySeoPage = {
  slug: "pehowa",
  countryName: "Pehowa",
  countryNameLong: "Pehowa, Haryana",
  demonym: "Pehowa",
  flagCode: "in",
  countryCode: "IN",
  region: "Haryana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings once the school van has dropped back, and weekend mornings before the bazaar fills up",
  lastUpdated: "2026-09-21",
  state: "Haryana",
  stateCode: "IN-HR",
  geo: { latitude: 29.9833, longitude: 76.5833 },
  wikipedia: "https://en.wikipedia.org/wiki/Pehowa",
  alternateNames: ["Prithudaka", "Pitrudhak Teerth", "Pehowa Kurukshetra", "Pehova"],
  stripSchools: [],

  title: "Pehowa IB & IGCSE Tutors | One-to-One Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Pehowa students in Kurukshetra district: live one-to-one online lessons in DP, MYP and Cambridge subjects, free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Pehowa",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR PEHOWA, KURUKSHETRA DISTRICT",
  heroSubtitle:
    "Private tuition from home for an IB or IGCSE course in Pehowa means one thing in practice: a live one-to-one lesson with a tutor who has actually taught that syllabus, taken on a laptop at your own study table. Nobody drives to Kurukshetra or Chandigarh for it, and no tutor visits houses here, because home visits are a Gurugram and Delhi NCR arrangement only. Tell us the programme, subject and exam session and a free trial lesson comes before anything else.",
  primaryKeyword: "IB and IGCSE tutors in Pehowa",
  imageAltText: "Pehowa student working through an IB Chemistry past paper with a tutor during a live online lesson at home",
  secondaryKeywords: [
    "IB tutor Pehowa",
    "IGCSE tutor Pehowa",
    "IB home tuition Pehowa",
    "IGCSE home tuition Pehowa",
    "IB private tuition Pehowa",
    "IB Maths tutor Pehowa",
    "IGCSE Maths tutor Pehowa",
    "IB Physics tutor Pehowa",
    "IB Chemistry tutor Pehowa",
    "IB Biology tutor Pehowa",
    "IB DP tutor Pehowa",
    "IB MYP tutor Pehowa",
    "IB PYP tutor Pehowa",
    "IGCSE online tuition Pehowa",
    "IB tutor Kurukshetra district",
    "IGCSE tutor Prithudaka",
    "IB tuition Pehowa tehsil",
    "IB online classes Pehowa Haryana",
    "IGCSE tutor Ladwa Shahabad",
    "IB tuition near Pundri",
  ],

  heroTrustPoints: [
    "One student, one tutor, one live lesson, never a recorded batch",
    "Tutors matched by board code and level, Cambridge or Edexcel, SL or HL",
    "Slots built around a Kurukshetra district school day and a farming household",
    "Free trial lesson, then the rate in writing before anything begins",
    "A short written note after every session, and a tutor change at no cost",
  ],
  heroStats: [
    { value: "IST", label: "Every lesson on Indian time" },
    { value: "PYP to CP", label: "All four IB programmes" },
    { value: "Trial first", label: "No payment to start" },
    { value: "May & Nov", label: "IB sessions prepared for" },
  ],

  intro: {
    heading: "Pehowa studies for the Haryana Board, so what changes when a child moves to IGCSE or the IB?",
    paragraphs: [
      "Pehowa is a tehsil town of a little under forty thousand people, 38,853 at the 2011 census, sitting 27 kilometres west of Kurukshetra on the old pilgrim road. Literacy here was recorded at 82.12 per cent against a Haryana figure of 75.55 per cent, which tells you schooling is taken seriously in these lanes. What it does not tell you is that almost every classroom in the tehsil runs on the Board of School Education Haryana syllabus or on CBSE, with a CISCE school or two in the wider district. Cambridge IGCSE and the IB Diploma are simply not part of the local supply.",
      "So when a Pehowa household ends up with a child on one of those syllabuses, and it happens more often than you would guess, the shift is not about thicker books. It is about what an examiner pays for. A Haryana Board paper rewards a well-learned answer. An IB paper rewards a student who reads the command term, decides what analyse or evaluate is asking for, and builds an argument in English without translating it first in their head. IGCSE sits in between, with a tight published syllabus and past papers that reward method. That gap in habit is the real switching cost, and it is usually a term's worth of work rather than a year's.",
      "Nobody in the Pehowa tuition market has marked those papers, which is the honest problem. Our IB and IGCSE tutors in Pehowa are therefore online: a subject specialist teaching from elsewhere in India on Indian time, with your child at their own desk. Tutors do not come to homes in Pehowa; that part of the service runs only in Gurugram and parts of Delhi NCR. This page lays out the school picture in Kurukshetra district, how the boards actually compare, what sets the rate, how the exam windows collide with the paddy and pilgrim calendar, and where students go afterwards.",
      "One line of housekeeping, said once. IB Gram is an independent tutoring service with no tie to the International Baccalaureate Organization, Cambridge Assessment International Education, Pearson Edexcel or any school mentioned below. Tutors teach method, content and paper technique. They never write an internal assessment, an Extended Essay, a Theory of Knowledge essay or any piece of coursework for a student.",
    ],
  },

  programmesIntro:
    "Four IB programmes and two IGCSE boards exist on paper. A Pehowa family usually meets just one or two of them, and almost never from the beginning, so what a tutor is asked to do differs sharply by stage.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Transdisciplinary units of inquiry closing with an Exhibition in the final year. There are no external papers, so tutoring stays light: arithmetic fluency, reading stamina, and the confidence to explain an idea out loud without being asked a leading question.",
      countryNote:
        "A Pehowa child in the PYP has almost certainly moved for a parent's posting or come back from abroad. Two short lessons a week is usually enough to keep the inquiry habit alive.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked against published criteria, with a Personal Project in the last year. The teaching work is as much about structuring a response to a criterion strand as it is about covering content.",
      countryNote:
        "This is where most Haryana Board transfers land, and where criterion marking feels most alien. We spend the first few weeks on how a strand descriptor is actually written before touching the syllabus.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects across the groups, three at Higher Level, plus Theory of Knowledge, the Extended Essay and CAS. Tutoring targets the examined papers and teaches the method behind each internal assessment.",
      countryNote:
        "A Diploma student with a Pehowa address has no subject teacher inside the tehsil. In practice the private tutor carries the Higher Level pace for the full two years.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more DP courses alongside a career-related study, a reflective project and a core of personal and professional skills. We support the DP courses and the academic English the reflective project needs.",
      countryNote:
        "CP is rare across Haryana and we have not seen it offered anywhere near Kurukshetra. We take it on request and match tutors to the specific DP courses chosen.",
    },
  ],

  subjectsIntro:
    "Tutors are picked for the exact course and level rather than for a subject label, and for whether they can teach a student who has never seen an IB command term before. The list below covers what Pehowa families have asked for.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Algebra, functions, calculus and proof, taught with Paper 1 and Paper 2 structure in mind. Higher Level students get the option topics worked slowly rather than skimmed." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology-led problem solving, with real work on graphical calculator fluency because Paper 2 punishes clumsy keystrokes." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics to fields, waves and the modern-physics options, plus the data-analysis questions and the way a practical write-up is expected to read." },
    { name: "Chemistry", levels: "SL / HL", description: "Bonding, energetics, kinetics, equilibrium and organic pathways, with the mole arithmetic drilled until it stops costing marks." },
    { name: "Biology", levels: "SL / HL", description: "Cells through to ecology and genetics, with heavy emphasis on using the exact term the mark scheme wants rather than a near synonym." },
    { name: "Economics", levels: "SL / HL", description: "Microeconomics, macroeconomics and the global economy, with diagrams marked the way an examiner marks them and Indian examples used where they fit." },
    { name: "Business Management", levels: "SL / HL", description: "Tools, formulae and case analysis, with Paper 2 practice on organisations the student has never read about before." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures, systems and the pseudocode conventions the examiners expect to see on the page." },
    { name: "Geography", levels: "SL / HL", description: "Physical and human units with case studies, and the paper technique for structuring an extended response under time pressure." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Unseen text analysis for Paper 1, the comparative essay for Paper 2, and the individual oral method." },
    { name: "English B", levels: "SL / HL", description: "For students whose school English has been functional rather than analytical, which is a common position after a Haryana Board start." },
    { name: "Hindi B", levels: "SL / HL", description: "Reading, writing and speaking practice for Hindi as an acquired language, the everyday language of Pehowa households." },
    { name: "Punjabi and Haryanvi language support", levels: "School-based", description: "Help where a school offers Punjabi as a language option, useful in a belt where Punjabi and Haryanvi are both spoken in the surrounding villages." },
    { name: "Theory of Knowledge", levels: "Core", description: "Coaching on knowledge questions, the exhibition objects and essay planning. The essay itself stays entirely the student's own writing." },
  ],

  igcseSubjectsIntro:
    "Cambridge IGCSE and Pearson Edexcel International GCSE share subject names but not paper structures or tiering, so we match a tutor to the board code the school has registered, not just to the subject.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, geometry, trigonometry and statistics, with timed paper practice and a habit of writing working out in full." },
    { name: "Physics", levels: "Core / Extended", description: "Forces and motion, thermal physics, waves, electricity and atomic physics, with the practical-skills paper treated as a taught topic." },
    { name: "Chemistry", levels: "Core / Extended", description: "Particles, bonding, the mole, acids, electrolysis, metals and introductory organic chemistry." },
    { name: "Biology", levels: "Core / Extended", description: "Characteristics of organisms, human systems, plant biology, inheritance and ecology, with data and graph questions." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For schools running the single or double award science route instead of three separate sciences." },
    { name: "English as a Second Language", levels: "Core / Extended", description: "Reading comprehension, summary writing, directed writing and the speaking component, which is where a state-board start usually shows." },
    { name: "English Literature", levels: "Single tier", description: "Set texts, poetry unseen response and the essay discipline of using short quotations well." },
    { name: "Computer Science", levels: "Single tier", description: "Data representation, networks, problem solving and the pre-release material where one is set." },
    { name: "Economics", levels: "Single tier", description: "Core concepts, diagram work, calculations and the structured data-response questions." },
    { name: "Business Studies", levels: "Single tier", description: "Business objectives, marketing, finance and human resources, with case questions marked to the current criteria." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Comprehension, composition and oral practice for students taking Hindi within an international curriculum." },
    { name: "Accounting", levels: "Single tier", description: "Double entry, control accounts, final statements and the layout marks that quietly decide a grade." },
  ],

  regionsTitle: "Pehowa, its bazaar wards and the Kurukshetra district around it",
  regionsIntro:
    "Pehowa is too small for sectors. People here navigate by the bazaar, the ghats, the mandi and which road out of town you live on, so the notes below are written that way, with the village belt and the rest of the tehsil included because that is where many students actually live.",
  regions: [
    { name: "Pehowa town centre and the main bazaar", note: "The commercial core, dense and old, with shops running late. School vans finish their rounds by early evening and lessons slot in after that, though pilgrim season weekends can make the lanes noisy enough to want a room at the back of the house." },
    { name: "Prithudak Teerth and the Saraswati ghats", note: "The tirtha quarter, where pind daan rites are performed and where the Saraswati channel was made perennial under the state revival project. Households here, including panda families who keep the genealogy registers, are busiest in Pitra Paksha, so lessons are usually moved to mornings that fortnight." },
    { name: "Kartikeya temple and dharamshala lanes", note: "The streets around the old Kartikeya shrine and the pilgrim rest houses. Families running dharamshalas keep irregular hours through the year, and we tend to fix a weekend slot with them rather than a weekday one." },
    { name: "The anaj mandi quarter", note: "The grain market side of town. Wheat arrivals in April and paddy arrivals in October turn this into the busiest part of Pehowa, and a commission agent's household plans tuition around those two fortnights rather than around school terms." },
    { name: "Arnaicha and the brick-kiln belt", note: "Kiln country on the town's edge, where brick production has long been part of the local economy. Dust and the firing season matter here, and an evening lesson indoors with the windows shut is simply more practical than a late-afternoon one." },
    { name: "The Kurukshetra road, towards Pipli and Thanesar", note: "The eastern approach, 27 kilometres to Kurukshetra and the junction at Pipli. Students boarding or day-scholaring at larger schools in Thanesar live along this stretch, and their lessons start late because the bus gets back late." },
    { name: "The Patiala road, west towards Punjab", note: "The route into Punjab, around sixty kilometres to Patiala. Households on this side often have relatives across the border district and a strong migration link to Canada and the United Kingdom, which shapes why they look at international curricula at all." },
    { name: "The Cheeka and Guhla side", note: "North-west towards the Guhla-Cheeka belt of Kaithal district. Farming families here are the most spread out, mobile data can be patchy in the fields, and we recommend taking lessons from the house rather than a tube-well room." },
    { name: "The Pundri road, south-east", note: "Pundri lies about 26 kilometres away, and families along this road frequently split the difference between Pehowa and Kaithal for schooling and shopping. Weekend morning slots suit them best." },
    { name: "Ladwa, Shahabad and the wider tehsil", note: "The other towns of Kurukshetra district, each in the same position as Pehowa with no confirmed IB or Cambridge school. Students from here join the same online lessons, and the scheduling conversation is identical." },
  ],

  schoolClusters: [
    {
      city: "Pehowa and Kurukshetra district",
      note: "We could not confirm a single school in Pehowa, Thanesar, Ladwa, Shahabad or anywhere else in Kurukshetra district that is an authorised IB World School or a registered Cambridge or Pearson Edexcel centre. Schools here follow the Haryana Board, CBSE or CISCE. If a local institution advertises an international curriculum, ask to see its IB authorisation or its Cambridge centre number before you commit a child's two Diploma years to it.",
      schools: [],
    },
    {
      city: "Nearby: Chandigarh tricity",
      note: "Roughly 110 to 130 kilometres north-west of Pehowa depending on whether you go via Ambala or via Patiala, the tricity is the closest place with confirmed authorisation. Families here weigh it mainly for boarding or for a full relocation, since a daily commute is not realistic from Pehowa.",
      schools: [
        "Strawberry Fields High School, Sector 26, Chandigarh (IB)",
        "Firststeps School, Sector 26, Chandigarh",
        "Oakridge International School, Mohali (IB and Cambridge IGCSE)",
      ],
    },
    {
      city: "Nearby: Delhi NCR and Gurugram",
      note: "About 190 to 210 kilometres south, the capital region holds the deepest pool of long-established IB and Cambridge schools, and a fair number of Haryana students from this belt board there. It is a boarding decision rather than a commuting one.",
      schools: [
        "Pathways World School, Aravali (IB)",
        "GD Goenka World School, Sohna Road (IB and Cambridge IGCSE)",
      ],
    },
    {
      city: "Nearby: Patiala and the Punjab side",
      note: "Patiala is the nearest sizeable city at around sixty kilometres, and plenty of Pehowa households already use it for medical care and shopping. We have not been able to confirm an IB or Cambridge authorised school inside Patiala city, so we name none and would verify before pointing anyone there.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "The schools above are named only so a Pehowa family can see where confirmed IB and Cambridge provision actually sits on the map. IB Gram is an independent tutoring service. We are not affiliated with, endorsed by or acting for any of these schools, nor for the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel, and every admission decision rests with the school itself.",

  modesIntro:
    "There is one delivery method in Pehowa and it is online, because no tutor from this service travels to a house in Kurukshetra district. What does vary is the rhythm: a steady weekly pattern, a compressed block before a mock or a session, or a schedule bent entirely around a boarding term's holiday dates.",
  modes: [
    {
      title: "A fixed weekly one-to-one slot",
      description:
        "The default. One tutor, one student, a shared screen for working and a saved record of what was done. The slot stays yours for the term, which matters more than it sounds when a household has harvest weeks and pilgrim weekends to work around.",
      bullets: [
        "The tutor pool is national, so a rare Higher Level subject is still available",
        "Past papers are marked live, in front of the student, not returned a week later",
        "The same tutor carries a student from MYP into the Diploma where that is wanted",
        "A written note lands after each lesson so a parent is never guessing",
      ],
    },
    {
      title: "Exam-window intensives",
      description:
        "A tighter run of sessions before school mocks and in the eight to ten weeks ahead of a May or November series, built almost entirely on timed papers with immediate review rather than fresh teaching.",
      bullets: [
        "Papers sat under real timing, then taken apart question by question",
        "Command terms and mark-scheme wording drilled deliberately",
        "Extra slots added in the final fortnight without renegotiating the whole plan",
        "Buffer minutes built in for the power interruptions this belt still sees",
      ],
    },
    {
      title: "Holiday and catch-up blocks for boarders",
      description:
        "For Pehowa students boarding in Chandigarh, Delhi NCR or the Dehradun belt, a run of lessons during school breaks that closes whichever unit the term left unfinished, plus the first weeks of a transfer into IGCSE or the Diploma.",
      bullets: [
        "Mapped to boarding-school holiday dates, not to a generic calendar",
        "Good for the method teaching a mid-year transfer needs",
        "Can pause completely while the student is back at school",
        "Best booked two or three weeks before a term ends",
      ],
    },
  ],

  tutorsIntro:
    "Tutors teach from across India and keep Indian Standard Time, which is the same clock a Pehowa household already lives on. Most lessons here land between late afternoon and about nine in the evening, with weekend mornings as the second popular window.",

  sections: [
    {
      heading: "Is there any IB or IGCSE school a Pehowa family can reach?",
      paragraphs: [
        "Not in Kurukshetra district, and it is better to be blunt about it. We checked Pehowa, Thanesar, Ladwa, Shahabad and the rest of the tehsils and found no school we could confirm as an authorised IB World School or as a registered Cambridge or Pearson Edexcel examination centre. The district's private schools, some of them long-standing and well regarded, teach the Haryana Board syllabus, CBSE, or in a couple of cases CISCE. For a secondary-level international curriculum the honest answer is that local choice is zero.",
        "That leaves three realistic shapes. A family boards the child somewhere with confirmed authorisation, most often the Chandigarh tricity at 110 to 130 kilometres or Delhi NCR at roughly 190 to 210. A family relocates for a parent's job and keeps the Pehowa house for festivals and harvest. Or a child is already mid-syllabus because the household has just come back from abroad, and the question is how to keep the syllabus running from a small Haryana town.",
        "Who actually ends up in this position here? Returning migrant families, and this belt has a deep migration link with Canada, the United Kingdom and Australia. Agricultural trading households with the means to board a child and the ambition to do it. Transferred staff from the banks, the power utilities and the irrigation and Saraswati heritage work that runs through the district. And academic households connected to Kurukshetra University and the engineering institute at Kurukshetra, 27 kilometres down the road, who know exactly what an external curriculum demands.",
        "None of those groups is large enough locally to fill a coaching batch, which is the whole reason this page exists. A group class assembled in Pehowa would be teaching four different syllabuses at once. One tutor, one student, matched to the registered board, is the only arrangement that actually fits.",
        "We have deliberately not padded the page with school names. If a school in Pehowa or anywhere in Kurukshetra district takes IB candidacy or registers as a Cambridge centre, the parents will hear before any website does, and tutoring against that syllabus can start within days of your sending us the subject list.",
      ],
    },
    {
      heading: "Haryana Board, CBSE, CISCE, IGCSE and the IB laid side by side",
      paragraphs: [
        "The Board of School Education Haryana runs the system most Pehowa children sit inside: written papers at Class 10 and Class 12, a published syllabus, results in May, and a route onward through Haryana's own colleges or through the national entrance tests. CBSE is the aspirational alternative in the district's private schools and dominates whenever a family starts thinking about engineering or medicine. CISCE appears occasionally and is noticeably more essay-driven.",
        "Cambridge IGCSE and Pearson Edexcel International GCSE change the terms of the game without changing the content drastically. The syllabus is tightly published, the past papers are plentiful, and subjects are tiered, Core against Extended for Cambridge, Foundation against Higher for Edexcel. A student who has done well under the Haryana Board usually finds the physics and the chemistry familiar and the question wording unfamiliar.",
        "The IB Diploma is a different animal. Six subjects rather than five, internal assessments that carry real weight, Theory of Knowledge, an Extended Essay of four thousand words, and a service requirement. Marks come from exams plus coursework, and the examined papers are written for a student who can argue, not merely recall. Two years of that reshapes how a child writes, which is both the appeal and the difficulty.",
        "The practical question for a Pehowa parent is not which board is stronger. It is when a switch is still cheap. Moving at Class 6 or Class 9 into the MYP or into IGCSE is comfortable. Moving into Class 11 directly into the Diploma is possible but front-loads a lot of method teaching into the first four months, and that is precisely the stretch where a private tutor earns their fee.",
      ],
      table: {
        caption: "The five boards a Pehowa household is choosing between",
        columns: ["Board", "How marks are earned", "Main exam months", "Usual next step", "Tutors available in Pehowa"],
        rows: [
          ["Haryana Board (BSEH)", "Written papers at Class 10 and 12", "February to April", "Haryana colleges, CUET-UG, state entrances", "Plentiful and inexpensive"],
          ["CBSE", "Board papers plus internal marks", "February to April", "JEE, NEET, CUET-UG", "Widely available, often in batches"],
          ["CISCE (ICSE and ISC)", "Longer, essay-weighted papers", "February to April", "CUET-UG, Indian universities", "A handful in the district"],
          ["Cambridge or Edexcel IGCSE", "Tiered subject papers, some practicals", "Feb to Mar, May to Jun, Oct to Nov", "Class 11 IB or A Level, or an Indian board", "None found locally"],
          ["IB Diploma", "Exams plus internal assessments, EE and TOK", "May and November", "AIU equivalence, CUET-UG, study abroad", "None found locally"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost a Pehowa family, and what moves that figure?",
      paragraphs: [
        "There is no price list, and we do not publish one, because a figure on a page would be wrong for most of the people reading it. What we do instead is quote the rate in writing after the free trial lesson and before anything is booked, so the number is on record rather than agreed on a phone call and misremembered a week later.",
        "The single biggest driver is the course and the level. A Higher Level Diploma Mathematics or Physics tutor is a scarce person who needs degree-depth subject knowledge plus familiarity with how the papers are actually marked, and that sits at a different level from a Class 7 MYP integrated science lesson. Scarcity compounds it: Computer Science HL, Economics HL and the less common languages have smaller tutor pools than IGCSE Mathematics or English.",
        "Frequency and horizon matter next. Two lessons a week sustained across a full academic year is a different commitment from nine intensive sessions in the month before a November series, and the two are quoted differently. A plan that starts in June for a May session gives a tutor room to teach properly; a plan that starts in March buys crisis management, and crisis management is never the cheaper option in the end.",
        "There is a comparison worth doing honestly. A Pehowa family considering weekend coaching in Kurukshetra or Chandigarh should add up the diesel, the road time, the Saturday given away and the lesson itself, and set that against an online hour at home. The tutor's rate is only one line in that sum, and often not the largest one.",
      ],
      bullets: [
        "Programme and level: PYP, MYP, DP at SL or HL, IGCSE at Core or Extended",
        "How rare qualified tutors are in that specific subject",
        "Lessons per week, and how many months the plan runs",
        "Whether it is steady teaching or an exam-window rescue",
        "Travel, fuel and lost weekends if the alternative is coaching in another city",
      ],
    },
    {
      heading: "Online tuition, Kurukshetra coaching, a local private tutor or self-study?",
      paragraphs: [
        "Four options exist for a Pehowa student and all four have a legitimate use. The question is which one you are using for which subject and which year, because the answer is rarely the same across a whole timetable.",
        "Coaching centres in Kurukshetra and Chandigarh do real work, but almost all of it is aimed at JEE, NEET and the board exams, and a batch pace cannot bend around an IB internal assessment deadline. A local private tutor in Pehowa is cheap, available and often genuinely good, yet very unlikely to have marked a Cambridge Extended paper or an IB Paper 3. Self-study with the published syllabus and a decade of past papers genuinely works for a disciplined student in a subject they already like. Live one-to-one online teaching is the option that supplies specialist knowledge without a road journey.",
        "Most families here end up blending them. Self-study for the subject the child is strongest in, a local tutor for the language or the arithmetic drill, and online specialists for the two or three subjects where the syllabus is unfamiliar and the stakes are highest. That is a sensible allocation, not a compromise.",
      ],
      table: {
        caption: "Four routes to IB or IGCSE help from a Pehowa address",
        columns: ["Route", "Subject specialism", "Travel involved", "Flexibility", "Where it fits best"],
        rows: [
          ["Live one-to-one online lesson", "Matched to board, subject and level", "None at all", "Slots move with a week's notice", "Any unfamiliar or high-stakes subject"],
          ["Coaching centre in Kurukshetra or Chandigarh", "Strong, but aimed at JEE, NEET and boards", "27 km each way, or 110 km plus", "Fixed batch timings", "A family already travelling that way weekly"],
          ["Private tutor in Pehowa", "Haryana Board and CBSE trained", "Minimal", "Easily arranged", "Language drill and familiar content revision"],
          ["Self-study on syllabus and past papers", "Depends entirely on the student", "None", "Complete", "A strong student in a subject they enjoy"],
        ],
      },
    },
    {
      heading: "The Pehowa year: wheat, paddy, pilgrim season, smoke and December fog",
      paragraphs: [
        "An exam calendar drawn up in Geneva or Cambridge knows nothing about a Kurukshetra district household, and pretending otherwise wastes everyone's time. We plan around the local year explicitly, and in Pehowa that year has four distinct pressure points.",
        "The exam windows themselves are fixed. The IB Diploma runs May and November sessions, with results in early July and early January. Cambridge IGCSE has February to March, May to June, and October to November series. Pearson Edexcel International GCSE has January, May to June, and October to November. Which series applies is set by the registered school or centre, and a tutor can only prepare a student for the entry that already exists on paper.",
        "Then the farming calendar. Wheat is harvested through April, which drops straight onto the IB May session and the IGCSE May to June series, and the anaj mandi turns into the centre of the town's attention. Paddy transplanting takes June and July, and paddy arrives at the mandi in October, which collides with the November series. Households that trade grain feel both of those in a way a salaried family does not.",
        "Pilgrim season is specific to Pehowa. The fortnight of Pitra Paksha brings people here to perform pind daan for their ancestors at Prithudak Teerth, and families who keep dharamshalas, run the ghats or maintain the genealogy registers are fully occupied. That fortnight usually sits in September or October, right in the run-up to the November entries, so we shift those students to early mornings rather than cancelling.",
        "Finally the air and the weather. Late October and November bring stubble smoke across this part of Haryana, and December into January brings the dense fog that makes bus and road travel unpredictable and school attendance patchy. An online lesson is actually the format that survives both, which is worth saying plainly: fog closes roads, not laptops.",
      ],
      table: {
        caption: "What competes with study through a Pehowa year",
        columns: ["Months", "What is happening in Pehowa", "Effect on a student", "How lessons are adjusted"],
        rows: [
          ["Jan to Feb", "Dense fog, BSEH and CBSE practicals begin, IGCSE Feb to Mar series", "Erratic school attendance, cold rooms", "Lessons held online through fog days, mock papers timed"],
          ["Mar to Apr", "Wheat harvest, mandi at its busiest, Haryana Board papers", "Household attention is elsewhere", "Fewer but longer sessions, moved to late evening"],
          ["May to Jun", "IB May session, IGCSE May to Jun series, peak heat", "Fatigue, power interruptions", "Early-evening slots with buffer time and a hotspot backup"],
          ["Jul to Aug", "Monsoon, paddy transplanting done, IB July results", "New academic year or a new programme", "Foundation and method teaching before the school pace lifts"],
          ["Sep to Oct", "Pitra Paksha pilgrim fortnight, paddy arrivals, Navratri", "Lanes crowded, trading households busy", "Morning slots, planned pauses, revision compressed"],
          ["Nov to Dec", "November IB and IGCSE series, stubble smoke, fog returns", "Exams against poor air and travel", "Daily short sessions in the final fortnight, then review"],
        ],
      },
    },
    {
      heading: "Where does a Pehowa student go after IGCSE or the Diploma?",
      paragraphs: [
        "Three doors, and all three stay open if the subject choices are made deliberately in Class 11. Indian universities, universities abroad, and the professional entrance route that this part of Haryana has always taken seriously.",
        "For Indian admission the IB Diploma needs an equivalence certificate from the Association of Indian Universities, which most universities ask for at the point of admission rather than application. CUET-UG is now the common gate to central universities and many state ones, and an IB or IGCSE background is no barrier to it, though the syllabus mapping takes checking. Closer to home, Kurukshetra University and the national engineering institute at Kurukshetra are 27 kilometres away and are the realistic local destinations, while Punjabi University at Patiala is about sixty kilometres west.",
        "For engineering and medicine, eligibility turns on subject combinations rather than on the board. A Diploma with Mathematics, Physics and Chemistry or Biology can be aimed at JEE or NEET, but the Class 12 equivalence and subject-count rules are set by the National Testing Agency and, for state seats, by Haryana's own counselling authority, and they change. Check them before the Class 11 subject form is signed, not after.",
        "Study abroad is the route this belt knows best. Families along the Patiala road and across the Punjab border have decades of migration to Canada, the United Kingdom and Australia behind them, and an IGCSE plus IB or A Level record reads directly to admissions offices in all three without equivalence paperwork. Predicted grades, school references and English evidence matter as much as final marks, which is an argument for steady work from Class 11 rather than a sprint at the end.",
        "Our part in all this is narrow and worth stating. A tutor can explain what a subject combination opens or closes, and can keep the grades where they need to be. The actual admissions strategy belongs with the school's counsellor and with the family, and anyone promising an admission outcome should be treated with suspicion.",
      ],
    },
    {
      heading: "Choosing between Mathematics AA and AI, and teaching the three sciences",
      paragraphs: [
        "Mathematics Analysis and Approaches is the algebra, calculus and proof route, and it is the usual choice for a student heading towards engineering, physics or mathematics itself. Applications and Interpretation is built around statistics, modelling and technology, and reads better for economics, business, psychology, design and the social sciences. Picking between them in Class 11 is one of the few Diploma decisions that is genuinely hard to reverse, and a Pehowa student rarely has a teacher nearby who has taught both.",
        "That is the conversation we have first. A tutor who has taught AA HL and AI SL can look at a child's Class 10 work, ask what the intended degree is, and say something useful about which paper style will suit them. The wrong call here costs a year, so it is worth a session on its own before the form goes in.",
        "The teaching itself tends to go after the same handful of gaps: an unfinished calculus unit the school rushed, shaky confidence with the graphical calculator, and the habit of writing an answer without the reasoning that earns the method marks. We work through Paper 1 and Paper 2 structure explicitly and use past questions to teach what each command term actually demands.",
        "The sciences each fail in their own way. Physics punishes carelessness with units and an absent feel for order of magnitude. Chemistry punishes weak stoichiometry above everything else, and no amount of understanding bonding rescues a student who cannot handle moles under time pressure. Biology rewards exact terminology, and a near synonym scores nothing. Tutors go unit by unit with past paper questions and correct exactly the sort of slip that moves a grade boundary.",
        "On internal assessments, the line is fixed. A tutor teaches the method, explains how the criteria are written, and gives feedback on work the student has produced. The investigation, the write-up and the analysis are the student's own, and we will not draft them.",
      ],
    },
    {
      heading: "Core or Extended, Cambridge or Edexcel: building a workable IGCSE subject list",
      paragraphs: [
        "Cambridge IGCSE splits many subjects into Core and Extended papers. Core caps the attainable grade; Extended opens the full range and assumes more. Pearson Edexcel International GCSE does something similar with Foundation and Higher tiers. The decision is usually made by the school, but a parent should understand it, because it quietly determines what Class 11 looks like.",
        "The rule of thumb is simple enough. A student intending to continue a subject into the IB Diploma or into A Level, particularly Mathematics or a science, should sit Extended or Higher. A student genuinely struggling with the content may finish with a better outcome at the lower tier than a stretched one, and deciding early is far kinder than deciding in February.",
        "Beyond tiering, the spread matters. A balanced IGCSE list generally pairs a first language and a second language with Mathematics, one or more sciences, and a humanities or business subject. Dropping all sciences at IGCSE narrows Diploma options considerably, and families coming from a Haryana Board background sometimes do not realise that until the Class 11 form appears.",
        "For students in this district, the subject that reliably needs the most work is English. Comprehension is usually fine; it is summary writing, directed writing and the extended response under timing that reveal a schooling in which English was a subject rather than a medium of argument. That is a short, fixable gap with a weekly lesson across two terms, and it pays back in every other subject on the list.",
      ],
      table: {
        caption: "Tiering choices and what they lead to",
        columns: ["Choice", "What it means", "Grades available", "Recommended when"],
        rows: [
          ["Cambridge Core", "The shared content only, fewer papers", "A restricted upper range", "A subject being taken for breadth, not continued"],
          ["Cambridge Extended", "Core plus extension content and papers", "The full grade range", "Any subject continuing into DP or A Level"],
          ["Edexcel Foundation", "The lower tier of a two-tier subject", "A restricted upper range", "A student who needs a secure pass over a stretch"],
          ["Edexcel Higher", "The upper tier, harder papers", "The full grade range", "Mathematics and sciences being carried forward"],
        ],
      },
    },
    {
      heading: "Moving a child from a Haryana Board or CBSE school into the IB or IGCSE",
      paragraphs: [
        "This is the most common request we get from Kurukshetra district, and the good news is that the content transfer is usually easier than parents fear. A Class 9 Haryana Board student who has covered motion, chemical reactions and cell biology properly is not behind an IGCSE student on substance. The difficulty is entirely in how answers are produced and what the mark scheme pays for.",
        "Four things typically need deliberate teaching in the first term. Command terms, because define, describe, explain, analyse and evaluate are not interchangeable and each has a price. Criterion marking in the MYP, where a strand descriptor must be read before the answer is written. Writing in English as the language of reasoning rather than as a translated afterthought. And the absence of a guess-paper culture: there is no list of important questions, the published syllabus is the contract, and past papers are the preparation.",
        "The practical sequencing we recommend is to start tuition two or three months before the transfer, not after it. Those early weeks are spent on method with light content, so that the child walks into the new classroom already able to read a question properly. Starting after the move means learning method and chasing an unfamiliar syllabus at the same time, which is where confidence tends to break.",
        "There is an emotional side worth naming. A child who topped the class in a Pehowa school can score modestly in the first IGCSE assessment and conclude they have made a mistake. They have not; they have met a different marking culture. A tutor who has watched that happen a dozen times can say so credibly, which a parent often cannot, and that reassurance is a real part of the job.",
        "We put all of this in writing as we go, which is why a short note follows every lesson. It tells a parent what was taught, where the student struggled and what the next session targets, and it means nobody in the household is relying on a teenager's summary of how tuition is going.",
      ],
      bullets: [
        "Begin two to three months before the switch, not after it",
        "Method first, content second, for roughly the first six weeks",
        "Expect the first assessment to read low and plan for it",
        "Fix English writing early, because it carries every other subject",
        "Keep the school counsellor in the loop on subject choices",
      ],
    },
  ],

  process: [
    { title: "Send us the details", description: "A WhatsApp message or email with the programme, the subject, the level and the exam session your child is entered for. Mention the school and the registered board if you know them." },
    { title: "Get a tutor match", description: "We shortlist someone who has taught that exact course at that exact level and send a short profile, so you know who will be teaching before any lesson happens." },
    { title: "Take the free trial lesson", description: "A real lesson on a real topic from the current syllabus, with no payment and no obligation to continue. Your child judges the teaching, not a sales call." },
    { title: "Agree the rate in writing", description: "If the trial worked, we send the rate and the lesson plan in writing. Nothing is booked, and nothing is payable, until you say yes to that." },
    { title: "Settle into a weekly rhythm", description: "Regular live sessions in your fixed slot, a written note after each one, and a straightforward tutor change at no cost if the match turns out wrong." },
  ],

  whyPoints: [
    { title: "Matched to the registered board", description: "A Cambridge Extended Chemistry student gets a tutor who has taught Cambridge Extended Chemistry, not a generalist who also handles CBSE Class 10 science." },
    { title: "Built for a Kurukshetra district day", description: "Slots are set around the school van, the mandi season and the Pitra Paksha fortnight, because those are the things that actually move a Pehowa week." },
    { title: "Straight answers about local supply", description: "We say plainly that Kurukshetra district has no confirmed IB or Cambridge school, and what that means for boarding, relocating or staying put." },
    { title: "A written record of every lesson", description: "A short note after each session names what was covered, what went wrong and what comes next, so the household is never guessing." },
    { title: "Coaching, never ghost-writing", description: "Tutors teach the method behind internal assessments and essays and give feedback on the student's drafts. They do not write assessed work, and they will say no if asked." },
    { title: "Nothing owed on day one", description: "The trial lesson is free, the rate comes in writing afterwards, and changing tutors costs nothing if the fit is not right." },
  ],

  faqs: [
    {
      question: "Are there any IB or IGCSE schools in Pehowa?",
      answer: "No, and none anywhere in Kurukshetra district as far as we could confirm. We checked Pehowa, Thanesar, Ladwa and Shahabad against the IB school directory and Cambridge and Edexcel centre listings and found nothing. Local schools follow the Haryana Board, CBSE or CISCE. If a school here advertises an international curriculum, ask for its IB authorisation or Cambridge centre number before enrolling, and if a genuine programme does start, we can begin tutoring against that syllabus within days.",
    },
    {
      question: "Does a tutor come to my house in Pehowa?",
      answer: "No. Tutors do not visit homes in Pehowa or anywhere else in Haryana outside Gurugram and parts of Delhi NCR. What Pehowa gets is online home tuition: a live private lesson over video while your child sits at their own desk with a laptop and a notebook. It is the same tutor week after week, in your fixed slot, with no travel for anyone and nothing lost to fog or a harvest week.",
    },
    {
      question: "How do I find IB and IGCSE tutors in Pehowa for one particular subject?",
      answer: "Send the programme, subject, level and exam session to support@ibgram.com or on WhatsApp at +91 7439 368 115. We look for a tutor who has taught that specific course, share a short profile, and set up a free trial lesson. If the trial does not work, we match a different tutor at no extra charge rather than asking you to make do.",
    },
    {
      question: "What does IB tuition cost for a student in Pehowa?",
      answer: "It depends on the course, the level, how scarce tutors are in that subject and how many lessons a week you want, which is why we do not publish a price list. The rate is quoted in writing after the free trial and before anything is booked. A year-long weekly plan is priced differently from an eight-week push before a November series, and we will tell you which one your situation actually needs.",
    },
    {
      question: "Is an online lesson genuinely as useful as coaching in Kurukshetra?",
      answer: "For an IB or IGCSE subject, usually more useful. Coaching in Kurukshetra is built around JEE, NEET and the Indian boards, and a batch cannot pace itself to one child's internal assessment deadline. An online one-to-one lesson is specialist, undivided and loses nothing to the 27 kilometre road each way. For board-exam drill with a local syllabus, a Kurukshetra batch may well be the better fit.",
    },
    {
      question: "My child is in a Haryana Board school and wants to shift to IGCSE. Is that realistic?",
      answer: "Yes, and the content is the easy part. What needs teaching is method: command terms, paper structure, writing in English as the language of argument, and the fact that there is no guess-paper shortcut. Start two or three months before the move so that method work happens before the new syllabus starts. Shifting at Class 9 is comfortable; shifting straight into Class 11 is harder and needs more tuition in the first term.",
    },
    {
      question: "Which exam sessions do you prepare students for?",
      answer: "Both IB sessions, May and November, and all the IGCSE series: Cambridge in February to March, May to June and October to November, and Pearson Edexcel in January, May to June and October to November. Your child's school or registered centre decides the entry, and we plan the lessons backwards from that date. IB results come in early July and early January.",
    },
    {
      question: "Will a tutor write my child's IA, Extended Essay or TOK essay?",
      answer: "No, and we will not be talked into it. Tutors explain how the criteria are written, teach the method, discuss the student's own ideas and give feedback on the student's own drafts. The writing is the student's work. Services that offer to produce assessed work put a child's Diploma at risk under academic honesty rules, and no grade is worth that.",
    },
    {
      question: "What actually happens in the free trial lesson?",
      answer: "It is an ordinary lesson on a real topic from your child's current syllabus, taught by the matched tutor for the usual length of a session. Nothing is payable and nothing is committed. Afterwards you get a short note on what was covered and how the student responded, plus the rate in writing if you want to carry on. Plenty of families take one trial, think about it, and come back later.",
    },
    {
      question: "Do you cover both Cambridge and Pearson Edexcel IGCSE?",
      answer: "Yes, and we treat them as different courses because they are. Paper structures, tiering and some content differ even where the subject name matches, so tutors are matched by board as well as by subject. Tell us which board the school has registered with and which papers your child will sit, and if you are unsure the school office can confirm it in a minute.",
    },
    {
      question: "How do I choose between Mathematics AA and AI?",
      answer: "Analysis and Approaches suits a student who enjoys algebra, calculus and proof and is heading for engineering, physics or mathematics. Applications and Interpretation suits one heading for economics, business, psychology or design, and is built on statistics and modelling. It is a hard choice to reverse, so we usually spend one session looking at the child's Class 10 work and intended degree before the Class 11 form is submitted.",
    },
    {
      question: "Can students from Ladwa, Shahabad, Pundri or the Cheeka side join the same lessons?",
      answer: "Yes. Lessons are online, so anywhere in Kurukshetra district or the neighbouring Kaithal belt works provided the connection holds. For village addresses we suggest taking the lesson from the house rather than an outbuilding, and keeping a mobile hotspot as a fallback during exam-season sessions, since this belt still sees power interruptions in summer.",
    },
    {
      question: "When are lessons usually held?",
      answer: "Most Pehowa students take lessons on weekday evenings once the school van is back, typically between five and nine, and on weekend mornings. Everything runs on Indian Standard Time, so there is no awkward clock arithmetic. During Pitra Paksha and the wheat and paddy mandi fortnights we move students to morning slots rather than cancelling the term's rhythm.",
    },
    {
      question: "Does the IB Diploma work for Indian university admission from Haryana?",
      answer: "Generally yes, with an equivalence certificate from the Association of Indian Universities, which universities usually ask for at admission. CUET-UG is the common route into central and many state universities. For JEE, NEET and Haryana state counselling, eligibility depends on subject combinations and the rules do change, so confirm the current position with the National Testing Agency and the state authority before finalising Class 11 subjects.",
    },
    {
      question: "What if the tutor and my child do not get along?",
      answer: "Tell us and we change the tutor, at no cost and without an argument. A mismatch is usually about teaching pace or manner rather than competence, and pretending otherwise wastes a term. We would rather rematch in week three than have a student quietly disengage until the mocks reveal it. The written notes after each lesson are partly there so that this surfaces early.",
    },
    {
      question: "How do we get started?",
      answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's board, programme, subject, level and exam session. We reply with a tutor match and a couple of possible trial times, usually within a day or two. There is nothing to pay at that stage and no obligation beyond turning up to the trial lesson.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How this same online model runs in cities and towns throughout the country." },
    { label: "IB tutors by programme", href: "/ib-tutors/", description: "How our IB tutoring is organised across PYP, MYP, DP and CP." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Pearson Edexcel IGCSE subjects with board-matched tutors." },
    { label: "Diploma Programme support", href: "/programmes/dp/", description: "Subject tutoring, paper technique and internal assessment method for Classes 11 and 12." },
    { label: "Middle Years Programme support", href: "/programmes/myp/", description: "Criterion-based assessment explained for students arriving from an Indian board." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "Analysis and Approaches and Applications and Interpretation, at Standard and Higher Level." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of the tutors who teach IB and IGCSE subjects online." },
    { label: "Contact us", href: "/contact-us/", description: "Ask about a subject or book the free trial lesson." },
    { label: "IB and IGCSE tutors in Thanesar", href: "/thanesar/", description: "Our page for Kurukshetra city, 27 kilometres east of Pehowa." },
    { label: "IB and IGCSE tutors in Kaithal", href: "/kaithal/", description: "The neighbouring district town, in the same position on local school supply." },
    { label: "IB and IGCSE tutors in Patiala", href: "/patiala/", description: "The nearest large city to the west, about sixty kilometres along the Patiala road." },
    { label: "IB and IGCSE tutors in Karnal", href: "/karnal/", description: "The larger Haryana city on the national highway east of the district." },
    { label: "Home tuition in Gurugram", href: "/gurgaon/", description: "The one part of Haryana where tutors do teach in person, for families who relocate." },
  ],

  closingHeading: "Book a free trial lesson from home in Pehowa",
  closingBody:
    "Send us the programme, the subject, the level and the exam session your child is entered for. We will find IB and IGCSE tutors in Pehowa who have taught that exact course, arrange a free trial lesson in a slot that suits your week, and put the rate in writing before you decide anything at all. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115.",
};
