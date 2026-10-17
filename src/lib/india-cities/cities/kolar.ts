import type { CitySeoPage } from "../types";

/**
 * Kolar has no school we could confirm against the IB directory or Cambridge listings, so
 * stripSchools is empty. The clusters below point to Bengaluru, where the confirmed schools sit,
 * and say so plainly. Names were reused from the checked Bengaluru page.
 */
export const kolar: CitySeoPage = {
  slug: "kolar",
  countryName: "Kolar",
  countryNameLong: "Kolar, Karnataka",
  demonym: "Kolar",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings once the school bus or the Bengaluru commute is over, and unhurried weekend mornings",
  lastUpdated: "2026-09-21",
  state: "Karnataka",
  stateCode: "IN-KA",
  geo: { latitude: 13.1367, longitude: 78.1292 },
  wikipedia: "https://en.wikipedia.org/wiki/Kolar",
  alternateNames: ["Kolar Karnataka", "Kolar district", "Kolar Gold Fields"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Kolar | Online Home Tuition, Live",
  metaDescription:
    "Live one-to-one IB and IGCSE tutoring for Kolar students, taught online from home, with subject-matched tutors, weekly notes and a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Kolar",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR KOLAR STUDENTS",
  heroSubtitle:
    "Home tuition for IB and IGCSE students in Kolar, delivered as live one-to-one lessons on a laptop at your own dining table. Kolar sits about seventy kilometres from Bengaluru's international schools but has almost none of its own, so a tutor who already teaches your child's exact syllabus matters more here than in a big city. Tell us the programme, the subject and the exam session, and we match a tutor and book a free trial lesson.",
  primaryKeyword: "IB and IGCSE tutors in Kolar",
  imageAltText: "Kolar student attending a live IB Mathematics lesson with an online tutor from home",
  secondaryKeywords: [
    "IB tutor in Kolar",
    "IGCSE tutor in Kolar",
    "IB home tuition Kolar",
    "IGCSE home tuition Kolar",
    "IB private tuition Kolar",
    "IB Maths tutor Kolar",
    "IGCSE Maths tutor Kolar",
    "IB Physics tutor Kolar",
    "IB Chemistry tutor Kolar",
    "IB Biology tutor Kolar",
    "IB DP tutor Kolar",
    "IB MYP tutor Kolar",
    "IB PYP tutor Kolar",
    "IGCSE online tuition Kolar",
    "IB tutor Malur",
    "IGCSE tutor Bangarapet",
    "IB tuition Kolar Gold Fields",
    "IB online classes Kolar district",
  ],

  heroTrustPoints: [
    "Live one-to-one lessons, no recorded videos or big batches",
    "Tutors trained on IB DP, MYP, PYP and Cambridge or Edexcel IGCSE",
    "Evening and weekend slots that fit a Kolar school day",
    "Free trial lesson and a short written note after every class",
    "Tutor swap at no charge if the fit is wrong",
  ],
  heroStats: [
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before you decide" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "Why Kolar families look for IB and IGCSE tutors online",
    paragraphs: [
      "Ask around Kolar town, Malur or Bangarapet and you will find that most children study for the SSLC and the second PUC, or for CBSE, and the college route usually runs through KCET, NEET or JEE. A smaller group follows something else entirely: the IB Diploma, the MYP, or Cambridge and Pearson Edexcel IGCSE. Their parents are often engineers and managers at the manufacturing units along the Narasapura and Vemagal belt, doctors and faculty linked to the medical university at Tamaka, or families who have come back from Gulf or Western postings and want the syllabus to stay familiar. For them, the nearest tutor who has really taught Paper 2 of Mathematics AA is not next door.",
      "That is the gap our IB and IGCSE tutors in Kolar arrangement is built for. The lessons are private and live, the tutor teaches from India on Indian time, and the child sits at home with a laptop, a notebook and a stable connection. Nobody drives to Bengaluru in evening traffic. The same tutor can follow a student from the MYP into the Diploma, and the written note after each lesson tells a parent exactly what was covered, which questions went wrong and what the next session will attack.",
      "This page sets out how it works from a Kolar address: which schools are realistically within reach, how the boards compare, what drives the rate, how the exam calendar meets Karnataka's own school year, where students go afterwards, and how the subject teaching is shaped. We are an independent tutoring service and have no formal link with the IB, Cambridge, Pearson or any school named here. Tutors coach and explain; they never write internal assessments, Extended Essays or coursework for a student.",
    ],
  },

  programmesIntro:
    "Four IB programmes and two IGCSE boards exist, but a Kolar family usually meets them in a particular order. Many start with an international primary in Bengaluru or a Cambridge-linked school elsewhere, and the tutor's job changes at each stage.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Inquiry-led primary learning built around units and a final Exhibition. Tutoring here is light: number sense, reading fluency, writing habits and confidence in explaining ideas aloud.",
      countryNote:
        "PYP is rare near Kolar, so families who meet it usually do so after moving from Bengaluru. Short evening lessons keep a child comfortable with the inquiry style.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups assessed against criteria, plus the Personal Project. Tutors teach students how to read a command term and structure an answer, not just the content.",
      countryNote:
        "A student moving from a Karnataka-board school into MYP often needs the criterion-based writing style explained slowly. Online sessions handle that well.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, Theory of Knowledge, the Extended Essay and CAS. Tutoring targets the examined papers and the internal assessment method, never the writing of the assessments themselves.",
      countryNote:
        "Diploma students from the Kolar side rarely have a subject teacher within an hour, so the private tutor often becomes the only person who teaches Higher Level content at pace.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three DP courses combined with a career-related study and a reflective project. Tutors support the DP courses and academic language.",
      countryNote:
        "CP is uncommon in the region. We take it on request and pair the student with a tutor for the specific DP courses taken.",
    },
  ],

  subjectsIntro:
    "Subject tutors are chosen for the exact course and level, Standard or Higher, and for how well they teach a student who has never met the IB command terms before.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, proof-style reasoning and the paper structure of Paper 1 and 2, with HL extensions worked through slowly." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology-supported problem solving, including calculator fluency for Paper 2." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics through to fields and quantum topics, with practice on data-based questions and the practical write-up method." },
    { name: "Chemistry", levels: "SL / HL", description: "Structure, energetics, kinetics, organic reaction pathways and the arithmetic students trip over in stoichiometry." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology to ecology, with emphasis on precise definitions and how mark schemes reward terminology." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and global economy, using Indian and world examples for the extended response questions." },
    { name: "Business Management", levels: "SL / HL", description: "Case-study analysis, formulae and the Paper 2 style of applying tools to unseen organisations." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and the pseudocode conventions the examiners expect." },
    { name: "Psychology", levels: "SL / HL", description: "Studies, evaluation and the essay structure that the assessment criteria reward." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Text analysis, Paper 1 commentary and the Paper 2 comparative essay." },
    { name: "Hindi B", levels: "SL / HL", description: "Reading, writing and speaking practice for students who take Hindi as a second language." },
    { name: "Kannada and Telugu support", levels: "School-based", description: "Help with a home-language subject where a school offers it, useful in a district where Kannada and Telugu both live in the same household." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion coaching on knowledge questions and the exhibition; the essay itself stays the student's own." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE subjects are matched by board code, because the two syllabuses differ in paper structure and tiering even when the subject name is the same.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Algebra, geometry, trigonometry and statistics, plus timed paper practice." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, waves, electricity and atomic physics with practical-skills questions." },
    { name: "Chemistry", levels: "Core / Extended", description: "Bonding, the mole, electrolysis and organic chemistry basics." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, human systems, inheritance and ecology with data interpretation." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For schools that run the double-award science route." },
    { name: "English as a First or Second Language", levels: "Core / Extended", description: "Comprehension, directed writing and speaking preparation." },
    { name: "Computer Science", levels: "Single tier", description: "Programming logic, data representation and networks." },
    { name: "Economics and Business Studies", levels: "Single tier", description: "Core concepts, calculations and case questions." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Reading, writing and oral practice." },
    { name: "Accounting", levels: "Single tier", description: "Ledgers, statements and the presentation marks that add up quickly." },
  ],

  regionsTitle: "Kolar, Malur, Bangarapet and the wider district",
  regionsIntro:
    "Students here are spread across a district rather than a compact city, and school timing depends heavily on the bus route. Notes below reflect where families actually live and how the day usually runs.",
  regions: [
    { name: "Kolar town centre", note: "The district headquarters around the Clock Tower and the old market lanes. Homes are older and closely packed, school buses leave early, and evening study slots start after the market traffic thins." },
    { name: "Tamaka", note: "The stretch on the Bengaluru road that grew around the medical university campus. Faculty and hospital families live here, and many children commute to schools in or beyond Kolar." },
    { name: "Malur", note: "A manufacturing and residential town on the Bengaluru side, where households with jobs in the nearby industrial area tend to weigh Bengaluru schools seriously." },
    { name: "Vemagal and Narasapura", note: "Industrial belt villages and layouts west of Kolar. Shift patterns mean evening lessons are booked around when a parent gets home, not by the school bell." },
    { name: "Bangarapet", note: "A railway junction town toward the Tamil Nadu side. Families here often hold Kannada, Telugu and Tamil at home and move between three languages a day." },
    { name: "Robertsonpet and the Gold Fields", note: "The former mining township of KGF, with its own long history of English-medium schooling and a tight-knit community. See our separate page for Robertsonpet." },
    { name: "Mulbagal", note: "An eastern taluk town near the Andhra border, known for the Kurudumale Ganesha temple; students often travel to Kolar or Bengaluru for school." },
    { name: "Srinivaspur", note: "A mango-growing taluk to the north-east. Farming and trading families here plan school years around the harvest season and prefer flexible weekend slots." },
    { name: "Chikka Tirupati and Kammasandra", note: "Villages with temple and pilgrim traffic on weekends, which can crowd the roads; midweek evening lessons are calmer." },
  ],

  schoolClusters: [
    {
      city: "Kolar district",
      note: "We could not confirm any school in Kolar district that is an authorised IB World School or a listed Cambridge or Edexcel centre. Most local private schools teach CBSE, ICSE or the state syllabus, so the honest answer for IB and IGCSE is that local choice is very limited.",
      schools: [],
    },
    {
      city: "Nearby: Bengaluru (north and east)",
      note: "Bengaluru is where confirmed IB and Cambridge schools sit, and some Kolar families enrol children as boarders or relocate to be near them. Distances from Kolar are long, so check daily travel before deciding.",
      schools: ["Stonehill International School", "Trio World Academy", "Greenwood High International School"],
    },
    {
      city: "Nearby: Bengaluru (south and city)",
      note: "A second set of confirmed Bengaluru schools, mostly on the far side of the city from Kolar. Useful mainly for families already planning a move or boarding place.",
      schools: ["Canadian International School, Bengaluru", "The International School Bangalore", "Inventure Academy", "Indus International School, Bengaluru"],
    },
  ],
  schoolDisclaimer:
    "School names are listed only to show where the IB or Cambridge options for Kolar families really are. IB Gram is an independent tutoring service and has no affiliation with any school, the IB, Cambridge or Pearson, and admission decisions rest entirely with each school.",

  modesIntro:
    "Since home visits are not part of our service in Kolar, the formats below are all online. Each is live, private and scheduled around a Kolar school day.",
  modes: [
    {
      title: "Online one-to-one at home",
      description: "The core format: a live private lesson on your own laptop, with a tutor who teaches your board and level.",
      bullets: ["One student, one tutor, one screen", "Whiteboard, shared papers and past-question walkthroughs", "Weekly note to parents"],
    },
    {
      title: "Exam-season intensives",
      description: "Short, dense blocks before mock exams and before the May and November sessions.",
      bullets: ["Timed paper practice with review", "Command-term and mark-scheme drilling", "Rescheduling built in for power cuts"],
    },
    {
      title: "Steady weekly support",
      description: "A single lesson a week in one subject that keeps a student level with the school's pace.",
      bullets: ["Good for MYP and IGCSE years", "Pause during festival weeks", "Switch subject mid-year if needed"],
    },
  ],

  tutorsIntro:
    "Tutors teach from across India on Indian Standard Time. A Kolar student's lessons are usually late afternoon or evening, so most tutors on this rota work those hours anyway.",

  sections: [
    {
      heading: "Which IB and IGCSE schools can a Kolar family actually reach?",
      paragraphs: [
        "Very few, and it is better to say so directly. Within Kolar district we found no school we could confirm as an authorised IB World School or an approved Cambridge or Edexcel centre. Private schools in Kolar town, Malur, Bangarapet and KGF are mostly CBSE, ICSE or state-syllabus institutions, and several are well regarded. That means a family choosing an international curriculum is nearly always looking toward Bengaluru, about sixty-five to seventy kilometres away by the Kolar road.",
        "Some families cope by boarding a child in Bengaluru from Class 6 or Class 9. Others move house to the Whitefield or Hoskote side and keep a Kolar property for weekends. A third group joins an international school at the last stage, usually Class 11, and needs tutoring in the first year to catch up on what Diploma courses assume. All three groups end up needing help that a Kolar classroom does not provide.",
        "Who are these families? Engineers and managers in the Narasapura and Malur industrial belt, faculty and doctors linked to the university at Tamaka, business families in the Kolar tomato and milk trade, and returning professionals from the Gulf and elsewhere. Not one of them is likely to be a majority in any school, which is why the tutor who knows your board matters more than a group class built around other syllabuses.",
        "We have deliberately not padded this page with school names we cannot verify. If a Kolar school announces IB candidacy or a Cambridge licence, the parents will know first, and we can begin tutoring against that syllabus within a week of your telling us the subject list.",
      ],
    },
    {
      heading: "Karnataka SSLC, CBSE, ICSE, IB and IGCSE: how the boards compare",
      paragraphs: [
        "Karnataka's own system is a two-stage board sequence: the SSLC at the end of Class 10 and the second PUC after Class 12, run by state authorities, with KCET as the entrance gate for state engineering and many professional seats. It is a syllabus-and-recall structure, tested by written papers in March and April. CBSE and ICSE sit alongside it in the district's private schools.",
        "The IB is different in kind. Assessment rewards command terms, application and argument, and the Diploma includes an essay, a knowledge course and service. IGCSE sits nearer the middle: subject papers at Core or Extended level, with a clear syllabus and past papers. A student moving from SSLC to IGCSE usually finds the content familiar and the paper style strange.",
        "The table below is a quick guide for parents deciding whether the switch is realistic, and in which year.",
      ],
      table: {
        caption: "How the main boards look from a Kolar household",
        columns: ["Board", "Assessment style", "Language of teaching", "Common exit route", "Tutoring need in Kolar"],
        rows: [
          ["Karnataka SSLC and 2nd PUC", "Written state papers, March to April", "Kannada or English", "KCET, NEET, state colleges", "Local tutors plentiful"],
          ["CBSE", "Board papers, mostly Class 10 and 12", "English or Hindi", "JEE, NEET, CUET-UG", "Local coaching strong"],
          ["ICSE and ISC", "Essay-leaning, broader syllabus", "English", "CUET-UG, colleges in India", "Some local tutors"],
          ["Cambridge or Edexcel IGCSE", "Tiered papers, sessions in May and November", "English", "Class 11 IB or A Level, or Indian boards", "Very few local tutors"],
          ["IB Diploma", "Exams plus internal assessments, essays and CAS", "English", "AIU-recognised, CUET-UG, abroad", "Hardly any local tutors"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Kolar, and what drives the rate?",
      paragraphs: [
        "Rates for IB and IGCSE tuition in Kolar depend on a handful of factors rather than on a single price list, and we do not publish fixed prices. What we do is quote the rate in writing before a trial lesson is booked, so nothing is agreed on a phone call and forgotten by the next morning.",
        "The main drivers are the programme and the level. Higher Level Diploma Mathematics or Physics needs a tutor with degree-level depth and years of paper marking, and it costs more than a Class 8 MYP science lesson. Scarcity plays a part too: a tutor who teaches Computer Science HL or Further Mathematics is harder to find than one who teaches IGCSE English.",
        "Lesson frequency changes the effective rate, and so does the term. A student who wants two lessons a week for six months is in a different position from one who wants three intensive weeks before the November session. We would rather quote the shape of the plan than offer a generic hourly figure that hides the details.",
        "One thing parents in Kolar often ask about is the cost of travelling to Bengaluru for weekend classes, which can include fuel, tolls and a lost Saturday. Weighing that against an online lesson at home is a fair exercise, and the tutor's rate is only one part of it.",
      ],
      bullets: [
        "Programme and level (SL, HL, Core, Extended)",
        "How rare the subject is among qualified tutors",
        "Lessons per week and length of commitment",
        "Exam-season blocks versus steady support",
      ],
    },
    {
      heading: "Online tutoring, Bengaluru centres, local tutors and self-study compared",
      paragraphs: [
        "There are four realistic options for a Kolar student. Each has a place; the question is which combination suits the subject, the year and the family's routine.",
        "Bengaluru centres offer real IB and IGCSE specialists, but the travel is long, weekend-bound and hard to keep up through a school term. Local private tutors in Kolar are convenient and usually good at state and CBSE content, yet few have taught international papers. Self-study with past papers works for disciplined students in a subject they already like. Live private tutoring at home sits between them: specialist teaching, no travel.",
      ],
      table: {
        caption: "Four ways to get IB or IGCSE help from Kolar",
        columns: ["Option", "Specialist knowledge", "Travel", "Flexibility", "Works best for"],
        rows: [
          ["Live one-to-one online at home", "High, matched by subject and board", "None", "Evenings and weekends, easily moved", "Any programme, any subject"],
          ["Bengaluru tuition centre", "High, but group-paced", "Long, mostly weekends", "Fixed batch timings", "Families already going to Bengaluru"],
          ["Private tutor in Kolar", "Usually state or CBSE trained", "Little", "Reasonable", "Content revision on familiar syllabuses"],
          ["Self-study with past papers", "Depends on the student", "None", "Total", "Strong, self-directed learners"],
        ],
      },
    },
    {
      heading: "The Kolar school year: exam sessions, festivals and the summer heat",
      paragraphs: [
        "A Kolar student's calendar has more moving parts than a Bengaluru student's. The Karnataka school year begins around June, but the IB and IGCSE exam windows run to different rhythms, and festival weeks in the district can cut across lessons quickly.",
        "The IB Diploma has May and November sessions, with results in July and January. Cambridge IGCSE has February and March, May and June, and October and November windows, and Pearson Edexcel International GCSE has January, May and June, and October and November. Which one applies is set by the student's school or registered centre, and a tutor can only prepare a student for the session they are entered into.",
        "Local life adds its own pattern. Dasara and Deepavali interrupt October and November; Sankranti and the Ugadi new year affect January to March; and the dry season means power cuts and heat that make afternoon lessons draining. Evening slots after six o'clock tend to hold up best in Kolar's summer months.",
      ],
      table: {
        caption: "Calendar pressure points for a Kolar student",
        columns: ["Period", "What is happening", "Effect on study", "How tutoring adapts"],
        rows: [
          ["Jan to Mar", "Ugadi, PUC and SSLC exams around; IGCSE Feb/Mar series", "Heavy exam calendar", "Mock papers, tightly timed"],
          ["Apr to May", "IB May session, heat and power cuts", "Fatigue and hardware interruptions", "Early-evening slots, buffer minutes"],
          ["Jun to Aug", "School reopens; IB results in July", "Fresh syllabus or new programme", "Foundation lessons before the term speeds up"],
          ["Sep to Nov", "Dasara, Deepavali, November IB and IGCSE sessions", "Festival gaps in the calendar", "Compressed revision and reschedule buffers"],
          ["Dec", "Year-end, IB January results", "Rest and reflection", "Review of strengths, plan for next term"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Kolar go next?",
      paragraphs: [
        "IB Diploma holders from Kolar have three routes: Indian universities, colleges abroad and, for some, the professional courses that Karnataka is known for. The Association of Indian Universities issues an equivalence certificate for the IB Diploma that most Indian universities ask for, and CUET-UG is now the common entry route to central universities.",
        "For engineering and medicine, eligibility depends on subject choices. The IB Diploma with Mathematics, Physics and Chemistry or Biology can be positioned toward JEE or NEET, but a family should check the current rules with the National Testing Agency and, for Karnataka seats, with the Karnataka Examinations Authority before finalising subjects in Class 11.",
        "IGCSE students continue to IB, A Level or the Indian boards for Class 11. Study abroad is another route, typically to the UK, Canada, the US or Australia, where predicted grades and school reports matter.",
        "Because many Kolar families are anchored to Bengaluru's job market, plenty of graduates end up at engineering colleges, medical schools such as the one at Tamaka or Bengaluru universities. A tutor can help a student choose subjects that keep those doors open, and we recommend making that choice with a school counsellor.",
      ],
    },
    {
      heading: "IB Mathematics AA and AI, and the sciences, taught in detail",
      paragraphs: [
        "Mathematics Analysis and Approaches suits students who like algebra, calculus and proof-style reasoning. It is the usual route for those aiming at engineering or pure science. Applications and Interpretation is built around statistics, modelling and technology, and suits students headed for economics, business, social science and design. Choosing between them in Class 11 is one of the most consequential decisions in the Diploma.",
        "Where a tutor helps most is in the gaps that school teaching leaves: an unfinished calculus unit, a weak grasp of the graphical calculator, or the habit of writing answers without showing reasoning. We build a plan around the Paper 1 and Paper 2 structure, and use past questions to teach students to read what a command term is really asking for.",
        "Physics, Chemistry and Biology bring their own patterns. Physics needs fluency in units and a feel for order of magnitude; Chemistry punishes weak stoichiometry; Biology rewards exact definitions. Tutors work through each unit with past-paper questions, correcting the sort of slip that costs a grade boundary. The internal assessment is the student's own work, and tutors only teach the method.",
        "Higher Level students in Kolar benefit from longer sessions before a mock exam, because the content depth is greater and the time constraints are tight. Standard Level students often do better with regular shorter lessons.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, Cambridge or Edexcel: choosing tiers and subjects",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended papers in many subjects. Core caps the top grade, and Extended opens the full range, so students planning to take Mathematics, Physics or Chemistry further usually sit Extended. Pearson Edexcel International GCSE uses Foundation and Higher tiers in a similar spirit.",
        "The right choice depends on the child's current level and the destination. A student who wants to pursue the Diploma or A Level in a science subject should generally be entered for Extended or Higher. A student who is finding the content hard may score better at the lower tier than at a stretched higher one, and it is worth deciding early.",
        "Beyond tier, the subject list matters. A balanced IGCSE spread usually combines languages, mathematics, sciences and a humanities or business subject. Tutors help a family understand how the choices affect Class 11 options, and how the internal school reports feed into predicted grades.",
        "For Kolar students in particular, the biggest practical issue is often English writing at the extended level, where SSLC-trained students need extra practice in extended response and directed writing. That is a short, fixable gap with regular lessons.",
      ],
    },
  ],

  process: [
    { title: "Tell us the programme and subject", description: "Message us on WhatsApp or by email with the board, subject, level and the session your child is entered for." },
    { title: "Receive a tutor match", description: "We shortlist a tutor who has taught that exact course and share a short profile so you know who is coming." },
    { title: "Free trial lesson", description: "A real lesson on a real topic, so your child can judge the teaching style before anything is agreed." },
    { title: "Rate quoted in writing", description: "If the trial goes well, we send the rate and lesson plan in writing. Nothing starts until you agree." },
    { title: "Weekly lessons and notes", description: "Regular live sessions, a short written note after each, and a straightforward tutor change if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched to your syllabus", description: "A Diploma Physics student is not handed a generalist who also teaches CBSE. The tutor has taught the paper your child will sit." },
    { title: "Fits a Kolar day", description: "Slots are set around the school bus, a parent's shift and Kolar's own festival weeks." },
    { title: "Honest about local supply", description: "We tell you plainly when no local school offers your programme, and what that means for the year ahead." },
    { title: "Notes you can read", description: "After every lesson, a short written summary shows what was covered and what comes next." },
    { title: "Coaching, not ghost-writing", description: "Tutors teach method and content. They do not write internal assessments, essays or coursework." },
    { title: "No commitment on day one", description: "The trial lesson is free, rates are quoted in writing, and a tutor change is available at no extra cost." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE schools in Kolar?", answer: "We could not confirm any. Kolar district's private schools are mostly CBSE, ICSE or state-syllabus institutions, and no school we found appears in the IB directory or in Cambridge and Edexcel listings. Families who want an international curriculum usually look to Bengaluru, about sixty-five to seventy kilometres away. If a local school starts an IB or IGCSE programme, tutoring can begin against that syllabus quickly." },
    { question: "Do tutors come to my home in Kolar?", answer: "No. Tutors do not visit homes in Kolar; home visits run only in Gurugram and parts of Delhi NCR. What Kolar families get is online home tuition: a live private lesson taught over video while your child sits at home with a laptop. It saves the travel to Bengaluru and keeps the same tutor week after week." },
    { question: "How do I find IB and IGCSE tutors in Kolar for a specific subject?", answer: "Send us the programme, subject, level and exam session on WhatsApp or by email. We shortlist a tutor who has taught that exact course, share a short profile and book a free trial lesson. If the fit is wrong after the trial, we find another tutor without an extra charge." },
    { question: "What does IB tuition cost for a student in Kolar?", answer: "The rate depends on the programme, the level, how scarce the subject is among tutors and how many lessons a week you want. We do not publish prices. We quote in writing before booking so there are no surprises, and an exam-season plan is quoted differently from year-round weekly support." },
    { question: "Is online tuition really as good as classes in Bengaluru?", answer: "For most students, yes, and often more useful. The lesson is one-to-one, the tutor works on your child's gaps, and there is no travel through evening traffic. Group centres in Bengaluru can suit students who like a class environment, but the commute from Kolar makes them hard to sustain through a term." },
    { question: "Can you help with a student moving from SSLC or CBSE to IB or IGCSE?", answer: "Yes. This is a common Kolar case. The content is often familiar, but the paper style, the command terms and the internal assessment method are new. A tutor teaches those first, then fills any content gaps. Starting a few months before the switch helps considerably." },
    { question: "Which IB exam sessions do you support?", answer: "Both the May and November sessions. The student's school decides which session they are entered for, and we plan lessons backward from that date. Results arrive in July and January." },
    { question: "Will a tutor write my child's IA, Extended Essay or coursework?", answer: "No. Tutors coach and explain; they never write internal assessments, Extended Essays, TOK essays or coursework. They will teach the method, explain the criteria and give feedback on ideas the student produces, but the work stays the student's own." },
    { question: "How does the free trial lesson work?", answer: "It is a live lesson on a real topic from your child's syllabus, with a tutor matched to the subject. There is no payment and no obligation. Afterwards you receive a short note on what was covered, and we send the rate in writing if you wish to continue." },
    { question: "Do you cover Cambridge and Pearson Edexcel IGCSE both?", answer: "Yes. The two boards differ in paper structure and tiers, so tutors are matched by board code as well as subject. Tell us which board your child's school uses and which papers they will sit." },
    { question: "What about Mathematics AA versus AI?", answer: "Analysis and Approaches suits students who enjoy algebra and calculus and may head to engineering or pure science. Applications and Interpretation suits students headed for business, social science or design. A tutor can review your child's strengths and advise before the choice is fixed in Class 11." },
    { question: "Can students from Malur, Bangarapet or KGF also join?", answer: "Yes. Lessons are online, so anywhere in Kolar district works if the internet connection is stable. We schedule around school bus times and parents' shifts, and we suggest a backup mobile hotspot for exam-season lessons in areas that see power cuts." },
    { question: "What time are lessons held?", answer: "Most Kolar students take lessons on weekday evenings after school and on weekend mornings, in Indian Standard Time. Exam-season blocks can add extra slots. Festival weeks such as Dasara and Deepavali are usually paused and rescheduled." },
    { question: "Does IB Diploma count for Indian university admission?", answer: "Generally yes, with an equivalence certificate from the Association of Indian Universities, and CUET-UG is the common route for central universities. For JEE, NEET and Karnataka state seats, rules depend on subject choices, so check with the relevant authority before finalising subjects." },
    { question: "How do I get started?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's board, subject and level. We reply with a tutor match and a trial lesson time, usually within a day or two." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "See how the same service works in cities all over the country." },
    { label: "IB tutors, all programmes", href: "/ib-tutors/", description: "Overview of how our IB tutoring is organised." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects with board-specific tutors." },
    { label: "Diploma Programme help", href: "/programmes/dp/", description: "Subject tutoring for Classes 11 and 12." },
    { label: "Middle Years Programme help", href: "/programmes/myp/", description: "Support for criterion-based assessment in Classes 6 to 10." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "AA and AI courses at Standard and Higher Level." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of the tutors who teach IB and IGCSE." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book a free trial lesson." },
    { label: "IB and IGCSE tutors in Bengaluru", href: "/bengaluru/", description: "Where most of the region's confirmed IB and Cambridge schools sit." },
    { label: "IB and IGCSE tutors in Robertsonpet", href: "/robertson-pet/", description: "Our page for the Kolar Gold Fields side of the district." },
    { label: "IB and IGCSE tutors in Tumakuru", href: "/tumkur/", description: "Another Karnataka town served by the same online model." },
  ],

  closingHeading: "Start with a free trial lesson from home in Kolar",
  closingBody:
    "Tell us your child's programme, subject and exam session. We will match a tutor, arrange a free trial lesson and send the rate in writing before you decide anything. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115.",
};
