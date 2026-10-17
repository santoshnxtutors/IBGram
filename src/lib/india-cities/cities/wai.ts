import type { CitySeoPage } from "../types";

/**
 * Wai has no school we could confirm as an IB World School or a Cambridge or Edexcel centre, so
 * stripSchools is empty. Clusters point to the Panchgani plateau (12 km) and to Pune, and say so.
 * Pune names were reused from the checked Pune and Satara pages. The single Panchgani IGCSE mention
 * comes from a school directory and is worded as a listing, not as a confirmation.
 */
export const wai: CitySeoPage = {
  slug: "wai",
  countryName: "Wai",
  countryNameLong: "Wai, Satara district, Maharashtra",
  demonym: "Wai",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings after the school bus and any tuition-class hours, and unhurried weekend mornings",
  lastUpdated: "2026-09-21",
  state: "Maharashtra",
  stateCode: "IN-MH",
  geo: { latitude: 17.95, longitude: 73.89 },
  wikipedia: "https://en.wikipedia.org/wiki/Wai,_Maharashtra",
  alternateNames: ["Wai Satara", "Wai Maharashtra", "Dakshin Kashi", "Wai taluka"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Wai | Private Tuition from Home, Online",
  metaDescription:
    "Live one-to-one IB and IGCSE tuition for students in Wai, Satara, taught online by India-based tutors, with weekly notes and a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Wai",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR WAI AND THE KRISHNA VALLEY",
  heroSubtitle:
    "Private tuition from home for IB and IGCSE students in Wai, taught as live one-to-one lessons on a laptop, with no ride to Pune and no tutor at the door. Wai sits about ninety-five kilometres from the nearest cluster of international schools, so most families here learn the syllabus through a screen. Send us the programme, the subject and the exam session your child is entered for, and a matched tutor will offer a free first lesson.",
  primaryKeyword: "IB and IGCSE tutors in Wai",
  imageAltText: "Student in Wai, Maharashtra, working through an IB Chemistry problem with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor in Wai",
    "IGCSE tutor in Wai",
    "IB home tuition Wai",
    "IGCSE home tuition Wai",
    "IB private tuition Wai",
    "IB Maths tutor Wai",
    "IGCSE Maths tutor Wai",
    "IB Physics tutor Wai",
    "IB Chemistry tutor Wai",
    "IB Biology tutor Wai",
    "IB DP tutor Wai",
    "IB MYP tutor Wai",
    "IB PYP tutor Wai",
    "IGCSE online tuition Wai",
    "IB tutor Panchgani",
    "IGCSE tutor Mahabaleshwar",
    "IB home tuition Satara district",
    "online IB classes Wai Maharashtra",
    "IB tutor Dakshin Kashi Wai",
  ],

  heroTrustPoints: [
    "Live one-to-one lessons, never recorded videos or crowded batches",
    "Tutors who have taught IB DP, MYP, PYP and Cambridge or Edexcel IGCSE",
    "Slots that respect Maharashtra school hours, monsoon weeks and festival gaps",
    "A free trial lesson, then a short written note after every class",
    "A different tutor if the first match does not suit your child",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on Indian Standard Time" },
    { value: "PYP to DP", label: "Every IB stage, plus IGCSE" },
    { value: "Free trial", label: "Try one lesson first" },
    { value: "May & Nov", label: "IB exam sessions covered" },
  ],

  intro: {
    heading: "Learning an international syllabus from the banks of the Krishna",
    paragraphs: [
      "Wai is known for its stone ghats on the Krishna, for more than a hundred temples, and for the film crews who keep returning to shoot beside them. It is not known for international schools, and that is the honest starting point of this page. About thirty-six thousand people lived here at the 2011 census, and most children study the Maharashtra State Board or CBSE, then aim at the MHT-CET, NEET or a Pune college. A smaller group follows the IB or Cambridge and Pearson Edexcel IGCSE, because a parent works in Pune or abroad, because the family plans overseas university, or because a boarding seat on the Panchgani plateau came up. For those students a tutor who has taught Paper 2 of Mathematics AA is not a short bus ride away.",
      "Our answer is private one-to-one tuition, live and online. The tutor teaches from elsewhere in India on Indian time, and the student sits at home in Wai or a nearby village with a laptop and a steady connection. Nobody rides the hill road in the rain or gives up a Saturday to the Pune highway. The same tutor can stay with a child from the MYP into the Diploma, and a short written note after every lesson tells a parent what was covered, which questions went wrong and what the next session will attack. That is the idea behind our IB and IGCSE tutors in Wai: specialist teaching without the journey.",
      "The sections below explain how this works from a Wai address. They cover which schools are realistically within reach, how the boards compare, what shapes the rate, how the exam calendar meets the Maharashtra school year and the festival season of a temple town, where students go afterwards, and how Mathematics, the sciences and the IGCSE subjects are taught. IB Gram works independently of the IB, Cambridge, Pearson and every school mentioned on this page. Our tutors teach and correct, but they never write an internal assessment, Extended Essay, TOK essay or piece of coursework for anyone.",
    ],
  },

  programmesIntro:
    "A Wai child usually meets the IB in one of three ways: a move to Pune, a boarding place on the Panchgani plateau, or a parent's posting overseas. What a tutor does differs sharply between those routes, so each programme below is described from that angle.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Units of inquiry that end in a Class 5 exhibition. Tutoring stays light and playful: number sense, reading aloud, neat written explanations and the confidence to ask why.",
      countryNote:
        "We know of no PYP school in Wai itself, so a child who meets it has usually just arrived from Pune or abroad. Twenty-minute evening sessions keep the inquiry habit alive without tiring a small child after school.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked against published criteria, finishing with the Personal Project. A tutor's first job is teaching a child to read a criterion descriptor and answer exactly what it asks.",
      countryNote:
        "A child moving from a Marathi-medium or semi-English school into the MYP finds criterion-based writing the biggest jump. Online sessions let us work through it slowly, with the student's own class work open on screen.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects at Standard or Higher Level, plus Theory of Knowledge, the Extended Essay and CAS. Tutoring goes into the examined papers and the method of internal assessment, never into writing either.",
      countryNote:
        "A Diploma student with roots in Wai is usually studying in Pune, or further afield, and coming home for holidays, so lessons are planned around that rhythm of term and break.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three Diploma courses joined to a career-related study and a reflective project. Tutors cover the Diploma courses and the academic English that goes with them.",
      countryNote:
        "The CP is rare in western Maharashtra. We take it on request and match the student to a tutor for the particular Diploma courses chosen.",
    },
  ],

  subjectsIntro:
    "Each tutor is chosen for the exact course and level, Standard or Higher, and for patience with a student who has never met an IB command term before.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, algebraic proof and the habit of showing every line of working under Paper 1 and Paper 2 time pressure." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology work, including the graphing-calculator fluency that Paper 2 quietly assumes." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics through fields and quantum topics, with regular drilling of units, estimation and data-based questions." },
    { name: "Chemistry", levels: "SL / HL", description: "Stoichiometry, energetics, equilibrium and organic pathways, plus the practical method that internal assessments depend on." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology to ecology, with attention to the exact definitions and terms that mark schemes reward." },
    { name: "Geography", levels: "SL / HL", description: "Rivers, hazards, population and urban change, with data-response practice that suits a student raised beside a Western Ghats river." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and the global economy, drawing on farm markets, tourism and Indian policy for extended answers." },
    { name: "Business Management", levels: "SL / HL", description: "Tools, formulae and the Paper 2 skill of applying them to an unseen company." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and the pseudocode conventions an examiner expects to see." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Close reading, Paper 1 commentary and comparative essay structure." },
    { name: "Hindi B", levels: "SL / HL", description: "Text work, written tasks and oral practice for students who study Hindi as an additional language." },
    { name: "Marathi support", levels: "School-based", description: "Help with Marathi as a home or school language where a school offers it, and with the writing habits that carry across into English A." },
    { name: "Theory of Knowledge", levels: "Core", description: "Practice in discussing knowledge questions and preparing the exhibition; the essay itself is written by the student alone." },
  ],

  igcseSubjectsIntro:
    "Tutors are matched by exam board and syllabus code, since Cambridge and Pearson Edexcel papers differ in structure, tiers and practicals even where a subject shares a name.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, geometry, trigonometry and probability, with timed papers from the first month." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, waves, electricity and atomic physics, including the practical-skills questions." },
    { name: "Chemistry", levels: "Core / Extended", description: "Bonding, the mole, electrolysis and an introduction to organic chemistry." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, human systems, inheritance and ecology, with graph and table interpretation." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For schools that enter pupils for the double-award science papers." },
    { name: "English as a First or Second Language", levels: "Core / Extended", description: "Reading comprehension, directed writing, summary work and oral practice." },
    { name: "Computer Science", levels: "Single tier", description: "Programming and algorithmic logic, how data is stored, and computer networks." },
    { name: "Economics", levels: "Single tier", description: "Core concepts, calculations and data-response questions." },
    { name: "Business Studies", levels: "Single tier", description: "Business activity, marketing, finance and case questions." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Reading passages, composition and conversation, for children who learn Hindi at school but not at home." },
    { name: "Geography", levels: "Single tier", description: "Physical and human themes, plus the skills paper with maps and fieldwork data." },
  ],

  regionsTitle: "Wai town, its ghat quarters and the villages of the Krishna valley",
  regionsIntro:
    "Students here live in an old riverside town and in villages strung along the Krishna, where the school bus, temple traffic and the Panchgani road shape the day. The notes below describe how households in each place usually plan an evening.",
  regions: [
    { name: "Ganpati Aali and Dholya Ganpati", note: "The temple quarter on the Krishna, where Dholya Ganpati and the stone ghats draw visitors all year. Lanes are narrow and processions are frequent, so evening lessons are booked once the visitor crowd has thinned." },
    { name: "Gangapuri and Brahmanshahi", note: "Two of the seven ghat quarters on the Krishna. In a town known for Pradnya Pathshala and the Marathi Vishwakosh, parents tend to ask for proof of progress, which is why every class ends with a written note." },
    { name: "Dharmapuri and Madhi Aali", note: "Two more ghat quarters of the old town. Festivals centred on the river can close lanes for days, so lessons here are planned around the Krishnamai calendar rather than against it." },
    { name: "Ramdoh Aali and Bhimkund Aali", note: "The remaining ghat quarters. School runs on the Maharashtra calendar, but life near the river follows the festival one, and a lesson that clashes with a procession is moved, not squeezed in." },
    { name: "Motibag", note: "A historic quarter linked with the Raste family and its wada. Households here are long settled, several have relatives in Pune or abroad, and international schooling is discussed more openly than in most of the taluka." },
    { name: "Menawali", note: "The riverside village just outside town that gave the Maratha statesman Nana Phadnavis his birthplace. Visitors come for the wada and the ghat; residents plan study around school buses and farm work." },
    { name: "Bavdhan", note: "A village on the town's fringe, known for a wada tied to the Tambe family of Rani Lakshmibai. Children usually travel into Wai for school, so lessons start only after the return bus." },
    { name: "Surur and Kikali", note: "Villages with a hilltop wind-power project at Surur and a Dasara yatra at Kikali. Broadband can be patchy here, so we ask families to test the connection during the free trial." },
    { name: "Bhuinj", note: "A large village whose Mahalaxmi yatra begins at Dasara. For households with farm work or a shop to run, the practical slots are the hour after dusk and weekend mornings." },
    { name: "Panchgani and the plateau road", note: "Twelve kilometres uphill, the boarding-school town. A Wai child who boards there can still take online lessons, with the school's permission and within fixed hostel study hours, and weekend visitor traffic can slow the road home." },
    { name: "Dhom Dam and the western villages", note: "Lakeside and valley villages toward the dam, where boating draws visitors at Boriv. School is usually a bus ride away, and the monsoon can interrupt power, so we agree a backup slot in advance." },
  ],

  schoolClusters: [
    {
      city: "Local: Wai town and Wai taluka",
      note: "We could not confirm any school in Wai taluka as an authorised IB World School or a listed Cambridge or Edexcel centre. The schools we identified follow the Maharashtra State Board or CBSE, so for an international syllabus the honest position is that local choice is very limited.",
      schools: [],
    },
    {
      city: "Nearby: Panchgani, about 12 km uphill",
      note: "A boarding-school town that has taken students from Mumbai and Pune since the late nineteenth century. Directories place most of its schools under ICSE, CBSE or the State Board. One school, Sanjeewan Vidyalaya, shows an IGCSE option on a school directory; ask it which subjects and exam board it actually enters before relying on that listing.",
      schools: ["Sanjeewan Vidyalaya"],
    },
    {
      city: "Nearby: Pune, about 95 km",
      note: "The deepest choice of IB and IGCSE campuses within reach of Satara district, and the usual destination for a Wai family that decides to change boards. The distance means boarding, living with relatives or moving with a parent.",
      schools: ["Mahindra International School", "Symbiosis International School", "Indus International School, Pune", "Mercedes-Benz International School"],
    },
  ],
  schoolDisclaimer:
    "The schools above are named only to show where the nearest IB and Cambridge options really sit for a Wai family. We are an independent tutoring service, unaffiliated with those schools, the IB, Cambridge or Pearson, and every admission decision belongs to the school concerned.",

  modesIntro:
    "Tutors do not come to a house in Wai; home visits run only in Gurugram and parts of Delhi NCR. The three formats below are all live, private and online, and each can be fitted around a Wai school day.",
  modes: [
    {
      title: "Weekly one-to-one lessons",
      description: "One slot a week with a single tutor who teaches your child's board and level, taken at home on a laptop.",
      bullets: ["Shared whiteboard and past-paper walkthroughs", "The same tutor week after week", "A written note for parents after each lesson"],
    },
    {
      title: "Pre-exam intensives",
      description: "Short, dense blocks before school terminals, MYP assessments and the May or November sessions.",
      bullets: ["Timed papers marked against board criteria", "Command-term and mark-scheme drills", "A spare slot held in reserve for a monsoon outage"],
    },
    {
      title: "Catch-up for a new entrant",
      description: "A defined run of lessons that brings a child from the State Board or CBSE up to the pace of an IB or IGCSE class just joined.",
      bullets: ["A gap check in the very first lesson", "Command terms explained slowly", "A move back to a weekly rhythm once level"],
    },
  ],

  tutorsIntro:
    "Tutors teach from different parts of India on Indian Standard Time, so a Wai student's late-afternoon and evening lessons fall inside ordinary working hours for them. You see a short profile before the trial class.",

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Wai, and where do local families look instead?",
      paragraphs: [
        "Not that we could confirm. No school in Wai town or Wai taluka appears, in the sources we checked, as an authorised IB World School or as a Cambridge or Pearson Edexcel centre, and the schools we could identify follow the Maharashtra State Board or CBSE. A family that wants an international syllabus therefore looks in two directions: uphill to the Panchgani plateau, twelve kilometres away, or out to Pune, about ninety-five kilometres by road. Mumbai, roughly 250 kilometres off, is a third option for families with ties there.",
        "Panchgani deserves its own paragraph because it is so near. The hill town has taken boarders from Mumbai and Pune since the late nineteenth century, with Kimmins dating from the 1890s and St. Peter's from the early 1900s. Directory listings place most Panchgani schools under ICSE, CBSE or the State Board. One, Sanjeewan Vidyalaya, shows an IGCSE option on a school directory. We have not seen its Cambridge listing ourselves, so ask the school which subjects and which exam board it actually enters before building a plan on it.",
        "For the full IB or Cambridge route, Pune is where the schools are. Mahindra International School, Symbiosis International School, Indus International School and Mercedes-Benz International School are among the campuses that Satara district families consider. The drive is long enough that most children board, live with a relative or move with a parent, and families who keep the Wai house for the Ganesh festival, Diwali and the summer break create natural gaps in the calendar. Those are the weeks when a tutor who has followed the child all year earns the most.",
        "Who are these families? The ones most likely to weigh an international syllabus here fall, in broad terms, into three groups. The first are professionals in Pune's software, automotive and engineering sector whose parents still live in Wai. The second are hospitality, horticulture and strawberry-trade families around Panchgani and Mahabaleshwar who expect a child to study abroad. The third are defence and government-service families used to moving between boards, together with a few returning from the Gulf or from Western postings. None forms a majority in any classroom, which is why a tutor who knows your child's exact board matters more than a group class built around someone else's syllabus.",
        "We have kept the school names to those we could check. If a Wai school announces IB candidate status or a Cambridge licence, tell us the subject list and we can start teaching against that syllabus within a week.",
      ],
    },
    {
      heading: "Maharashtra State Board, CBSE, ICSE, IB and IGCSE: how the boards compare for a Wai student",
      paragraphs: [
        "The Maharashtra State Board sets the SSC at the end of Class 10 and the HSC at the end of Class 12, with written papers in February and March and results in May or June. Marathi-medium and semi-English schools are common across the taluka. The entrance gate for state engineering and pharmacy seats is the MHT-CET, medicine runs through NEET-UG, and a Wai child on this track usually learns in a large batch with a thick guidebook and a lot of written repetition.",
        "CBSE and ICSE schools exist in Satara, in Panchgani's boarding campuses and, in greater number, in Pune. CBSE is built around the JEE and NEET syllabuses and rewards precise, textbook-aligned answers. ICSE and ISC ask for broader reading and longer written answers, which is why a student who has done well in ICSE English often settles into IB English A faster than a State Board student does.",
        "The IB differs in kind rather than degree. Marks reward command terms, the application of ideas to unfamiliar data and structured argument, and the Diploma adds an essay, a knowledge course and a service component. IGCSE sits nearer the Indian boards: a stated syllabus, tiered papers and a long archive of past questions. A State Board student moving to IGCSE usually finds the content familiar and the paper style strange. A move to the Diploma needs more groundwork.",
        "The table below compares the boards from a Wai household's point of view. The last column is the one that matters for planning, because it shows how much specialist teaching for each board you can actually find near the town.",
      ],
      table: {
        caption: "The main boards as they look from Wai",
        columns: ["Board", "How it is assessed", "Usual medium around Wai", "Common exit routes", "Specialist teaching near Wai"],
        rows: [
          ["Maharashtra SSC and HSC", "Written papers each February and March", "Marathi or semi-English", "MHT-CET, NEET-UG, local colleges", "Plentiful, mostly group batches"],
          ["CBSE", "Board papers in Class 10 and 12, largely written", "English or Hindi", "JEE Main, NEET-UG, CUET-UG", "Good coaching in Satara and Pune"],
          ["ICSE and ISC", "Broader syllabus, essay-leaning papers", "English", "CUET-UG, colleges across India", "Some in Satara, more in Pune"],
          ["Cambridge or Edexcel IGCSE", "Tiered subject papers in fixed exam series", "English", "IB or A Level, or Class 11 in an Indian board", "Hardly any near Wai"],
          ["IB Diploma", "Final exams plus internal assessments, essay and CAS", "English", "AIU equivalence, CUET-UG, study abroad", "Almost none near Wai"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost for a Wai family, and what sets the rate?",
      paragraphs: [
        "There is no fixed price list, because the rate for IB and IGCSE tutors in Wai depends on the programme, the level and the tutor's subject, and we do not publish prices. We quote in writing before any trial lesson is booked, so nothing is agreed over a phone call and forgotten by the next morning.",
        "Level and rarity move the figure most. A Higher Level Diploma Mathematics or Physics tutor needs degree-level depth and years of marking papers, and that costs more than helping with Class 7 MYP science. A tutor for Computer Science HL, Further Mathematics or a second Indian language is harder to find than one for IGCSE English, and the rate reflects that scarcity.",
        "Frequency and duration matter as well. Two lessons a week for a whole school year is a different arrangement from three intensive weeks before the November session, and we would rather describe the shape of a plan than quote an hourly number that hides the detail. Two siblings, a mid-year change of subject or a pause for a festival week can all be written into the plan.",
        "Wai families sometimes weigh this against a weekly class in Pune. That comparison should include the whole journey: roughly ninety-five kilometres each way, bus fare or fuel, a lost Saturday and, in the rains, a slow ride home in the dark. Tuition at home removes all of it, so the tutor's rate is only one line in the sum.",
      ],
      bullets: [
        "Programme and level: MYP, DP, IGCSE Core or Extended",
        "How scarce the subject is among qualified tutors",
        "Lessons per week and how long the plan runs",
        "Steady weekly support or a short exam-season block",
      ],
    },
    {
      heading: "Online tuition at home, Pune centres, local tutors and self-study compared",
      paragraphs: [
        "A family looking for IB and IGCSE tutors in Wai has four realistic ways to get help, and plenty end up combining two. What matters is which one fits the subject, the year and the household's weekly rhythm, not which sounds best on paper.",
        "Pune centres do employ genuine IB and IGCSE specialists, but a weekly journey of ninety-five kilometres is hard to keep up through a school term, and group pacing rarely matches one child's gaps. Private tutors in Wai and Satara are nearby, trusted and usually excellent on State Board and CBSE material, though few have marked an international paper. Self-study from past papers suits a disciplined student in a subject already liked. Live private tuition from home sits in the middle: specialist teaching without the road.",
        "Nothing replaces a student's own practice, and a good tutor's real job is to make that practice efficient. The table gives a plain side-by-side view.",
      ],
      table: {
        caption: "Four ways to get IB or IGCSE help from Wai",
        columns: ["Option", "Specialist depth", "Travel from Wai", "Scheduling", "Works best for"],
        rows: [
          ["Live private lessons online, from home", "Specialist, matched to the syllabus", "None", "Evenings and weekends, movable", "Any programme or subject"],
          ["Weekend centre in Pune", "High, but paced for a group", "About 95 km each way", "Fixed batch timings", "Families already travelling to Pune"],
          ["Private tutor in Wai or Satara", "Usually State Board or CBSE trained", "Short", "Reasonable", "Content revision on a familiar syllabus"],
          ["Self-study with past papers", "Depends on the student", "None", "Total freedom", "Strong, self-directed learners"],
          ["Boarding school tutoring in Panchgani or Pune", "Varies by school", "Hostel life", "Fixed by the school", "Students already boarding"],
        ],
      },
    },
    {
      heading: "The Wai school year: exam sessions, monsoon weeks and festival gaps",
      paragraphs: [
        "A Wai student's year is shaped by three calendars at once: the Maharashtra school year, the exam sessions of the IB or the IGCSE board, and the rhythm of a temple town. Schools generally reopen in mid-June and break for Diwali in the autumn, while annual papers fall in March and April and the long summer holiday follows.",
        "The IB Diploma is examined in May and November, with results in early July and early January. Cambridge schedules IGCSE papers in a February and March series, a May and June series and an October and November series, while Pearson Edexcel International GCSE sits in January, in the May and June summer series and again in the autumn. Which one applies depends on the school or centre where the student is registered, and a tutor can only prepare a child for the session they are entered into.",
        "Then there is Wai itself. The monsoon from June to September brings mist, wet roads and the odd power or broadband outage. Krishnamai Utsav fills the ghats for four to eight days at a time, Ganesh Chaturthi and Navratri send processions through the lanes, the Dasara yatras at Bhuinj, Kikali and other villages follow, and Gokul Ashtami draws crowds to Govardhan Sanstha. None of this stops study, but it moves the hours when a house is quiet enough for a lesson.",
        "Winter at about 718 metres is cool and clear, which suits a long weekend block of catch-up lessons. Peak summer afternoons are better left alone, with sessions moved to early evening.",
      ],
      table: {
        caption: "Calendar pressure points for a Wai student",
        columns: ["Months", "What is happening", "Effect on study", "How tutoring adapts"],
        rows: [
          ["June to August", "Schools reopen, monsoon sets in, IB results arrive in July", "New syllabus and unsettled routines", "Foundation lessons before the term speeds up"],
          ["September", "Ganesh Chaturthi and ghat festivities", "Processions, noise and visitors", "Lessons moved to quieter slots"],
          ["October to November", "Dasara yatras, Diwali break, November IB and IGCSE series", "Festival gaps and exam pressure together", "Compressed revision with spare slots"],
          ["December to January", "Cool weather, IB January results, State Board practicals", "Calm weeks, good for catch-up", "Longer weekend sessions and a plan for the year"],
          ["February to April", "SSC and HSC papers, IGCSE Feb and March series, school annuals", "Heavy exam calendar", "Mock papers, tightly timed"],
          ["May", "IB and IGCSE May sessions, summer holiday", "Heat and exam fatigue", "Early-evening slots, short and focused"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Wai study next?",
      paragraphs: [
        "The IB Diploma opens three broad routes: Indian universities, colleges abroad and, through the entrance exams, professional courses in Maharashtra. For Indian admission the Association of Indian Universities issues an equivalence certificate for the Diploma that most universities ask for, and CUET-UG is the common gateway to central universities.",
        "Pune is the nearest large university city, with Savitribai Phule Pune University and its affiliated colleges, Fergusson College, Symbiosis, COEP Technological University and many private institutes. Mumbai's colleges are the other pull. Medicine runs through NEET-UG, and Satara now has its own Government Medical College, which admits 100 MBBS students a year through NEET. Defence-minded students also know Sainik School Satara, though it serves a different path from the IB.",
        "Eligibility for MHT-CET, JEE Main and NEET-UG depends on subject combinations and on the rules published each year by the state CET Cell and the National Testing Agency, so check the current brochure before Class 11 subjects are fixed. IGCSE students move on to the IB Diploma, A Levels or Class 11 in an Indian board, and some junior colleges ask for an equivalence certificate for the Class 10 result.",
        "Abroad, families usually look at the UK, Canada, the United States, Australia and Singapore, where predicted grades and school reports weigh heavily. A tutor can help a student pick subjects that keep several doors open, and we recommend making that choice together with a school counsellor.",
      ],
    },
    {
      heading: "IB Mathematics AA and AI, with Physics, Chemistry and Biology, in practice",
      paragraphs: [
        "A simple test works in Class 10. If your child enjoys pushing algebra around for its own sake, Analysis and Approaches is likely to fit. If she prefers data, graphs and real-world models, Applications and Interpretation is the kinder route. Higher Level in either course asks for far more time, and the third paper at HL tests extended investigative problems that SL students never see.",
        "Where a tutor helps most is in the gaps school teaching leaves: an unfinished calculus unit, shaky use of the graphing calculator, or a habit of writing answers without reasoning. We build the plan around Paper 1, which allows no calculator, and Paper 2, which does, and use past questions to teach students what a command term is really asking for.",
        "Physics needs fluency in units and a feel for orders of magnitude. Chemistry punishes weak stoichiometry. Biology rewards exact definitions. Tutors take each unit through past-paper questions and correct the slips that cost a grade boundary, and they teach the practical method that the internal assessment relies on.",
        "The internal assessment is always the student's own work. A tutor can test whether a question is measurable and whether the method is sound. Wai offers unusual raw material for that kind of investigation: the Krishna at the ghats, the Dhom reservoir, plateau farms and strawberry beds. A student who measures something real usually writes the more honest report.",
      ],
    },
    {
      heading: "Choosing IGCSE tiers and subjects: Core or Extended, Cambridge or Edexcel",
      paragraphs: [
        "In most Cambridge IGCSE subjects a candidate is entered for one of two routes. Core papers cap the highest grade that can be reached, and Extended papers remove the cap, so a student who means to carry Mathematics, Physics or Chemistry into the Diploma or A Level normally sits Extended. Pearson Edexcel International GCSE follows the same logic with Foundation and Higher tiers.",
        "Which route is right depends on where the child stands today and where they want to go. Aiming for Higher Level science in the Diploma points to Extended or Higher. A child who finds the material heavy often earns a sound result at the lower tier rather than a shaky one at the upper, and the decision is best taken early, with the school's advice and a handful of timed papers as evidence.",
        "Practical work needs a decision too. Cambridge science syllabuses carry either a practical test or an alternative-to-practical paper, and schools with limited lab time often choose the latter. A tutor can teach the paper your child will actually sit, with the observation and planning skills it expects.",
        "Beyond tier, the subject spread matters. A balanced IGCSE set usually pairs languages, mathematics, sciences and a humanities or business subject. For Wai students coming from the State Board, the biggest practical gap is often English writing at the extended level, where directed writing and summary skills need regular practice. That is a short, fixable gap with steady lessons.",
      ],
    },
  ],

  process: [
    { title: "Send us the details", description: "Message the board, subject, level and exam session, and attach a recent test paper if you have one." },
    { title: "See your tutor's profile", description: "We shortlist someone who has taught that exact course and share a short profile before any lesson." },
    { title: "Take the free trial", description: "A real lesson on a real topic, so your child can judge the teaching before anything is agreed." },
    { title: "Read the rate in writing", description: "If the trial worked, we send the rate and the lesson plan in writing. Nothing begins until you agree." },
    { title: "Settle into a weekly rhythm", description: "Live lessons, a short written note after each, and a tutor change if the fit turns out to be wrong." },
  ],

  whyPoints: [
    { title: "Matched to the syllabus", description: "A Diploma Chemistry student is not handed a general science tutor. Your tutor has taught the paper your child will sit." },
    { title: "Fits a valley timetable", description: "Lessons are set around the school bus, tuition hours and the festival weeks of a temple town." },
    { title: "Honest about local choice", description: "We say plainly that Wai has no confirmed IB or IGCSE school, and what that means for the years ahead." },
    { title: "Notes a parent can read", description: "A short written summary after each class shows what was covered and what comes next." },
    { title: "Coaching, not ghost-writing", description: "Our tutors explain, correct and set practice. Assessments, essays and coursework are never written for a student." },
    { title: "Nothing to decide on day one", description: "The first lesson costs nothing, the rate is sent in writing before you commit, and you can ask for a different tutor if it is not right." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE schools in Wai?", answer: "We could not confirm any in Wai town or Wai taluka. The schools we identified follow the Maharashtra State Board or CBSE. The nearest options sit at Panchgani, about twelve kilometres uphill, where a directory lists one school with an IGCSE option, and in Pune, about ninety-five kilometres away, where the main IB and Cambridge campuses are. If a local school starts an international programme, tutoring can begin against that syllabus within a week." },
    { question: "Do tutors come to my home in Wai?", answer: "No. Tutors do not visit homes in Wai; home visits run only in Gurugram and parts of Delhi NCR. What a Wai family gets is online home tuition: a live, private lesson over video while the student sits at home with a laptop. That saves the trip to Pune and keeps the same tutor week after week, including during holidays spent in the village." },
    { question: "How do I find IB and IGCSE tutors in Wai for one particular subject?", answer: "Tell us the programme, subject, level and exam session by WhatsApp or email, and we put forward a tutor who has taught that very course. You see a short profile, then book a free first lesson. A recent test paper or school report helps the tutor judge where your child stands, and if the pairing does not feel right we propose someone else. Matching normally takes a day or two." },
    { question: "What does IB or IGCSE tuition cost for a student in Wai?", answer: "It varies with the programme, the level, how few tutors teach the subject and how many lessons a week you want, so there is no published price list. You receive the rate in writing after the free lesson and before any commitment. Steady weekly support, an exam-season block and a plan for two siblings are each quoted separately." },
    { question: "Is online tuition as effective as weekend classes in Pune?", answer: "For most students it is at least as useful, and far easier to sustain. The lesson is one-to-one, the tutor works on your child's own gaps, and there is no ninety-five-kilometre journey. A Pune centre can suit a child who enjoys a classroom and can reach it every week, but across a full school term that routine rarely lasts." },
    { question: "Can students from Panchgani, Mahabaleshwar or villages around Wai join as well?", answer: "Yes. Lessons are online, so any address in the Krishna valley or on the plateau works if the connection is stable. Boarders in Panchgani can take lessons in agreed hostel hours with the school's permission. We suggest a mobile hotspot as a backup during the monsoon, and a lesson can be moved at short notice when the network drops." },
    { question: "My child is moving from the Maharashtra State Board or CBSE to IB or IGCSE. Can you help?", answer: "Yes, and it is among the most frequent reasons Wai families write to us. Much of the subject matter will feel known to a State Board or CBSE student. What is new is how marks are earned: command terms, longer reasoning and the internal assessment method. A tutor works on those habits first and closes content gaps afterwards. Beginning two or three months before the switch makes the first term calmer." },
    { question: "Which IB exam sessions do you support?", answer: "Both May and November. The school decides which session a student sits, and we plan lessons backwards from that date. Results arrive in early July and early January. For IGCSE we support the Cambridge and Pearson Edexcel series the student is entered for, whether that is in winter, early summer or autumn." },
    { question: "Will a tutor write my child's IA, Extended Essay or coursework?", answer: "No, and no genuine tutor should. Ours teach the method, unpack the assessment criteria and give feedback on ideas the student has produced. They do not draft, rewrite or supply any part of an internal assessment, Extended Essay, TOK essay or piece of coursework, so every word submitted remains the student's own." },
    { question: "How does the free trial lesson work?", answer: "It is a full live lesson, not a demonstration video. Your child works through an actual topic from the current syllabus with a tutor matched to the subject, and you pay nothing and commit to nothing. A short written note follows describing what was covered, and if you would like to carry on, the rate arrives in writing." },
    { question: "Do you teach both Cambridge and Pearson Edexcel IGCSE?", answer: "Yes, for both. Cambridge and Pearson Edexcel set different papers, tiers and practical components, so a tutor is chosen for the board's syllabus code and not only the subject name. Tell us which board your child's school or exam centre uses and which papers are coming up." },
    { question: "Should my child take Mathematics AA or AI?", answer: "It depends on strengths and on the course they want to study afterwards. Analysis and Approaches suits students who enjoy algebra and calculus, particularly for engineering or pure science. Applications and Interpretation suits those headed for business, social science, design or health courses. A tutor can review your child's work before the choice is fixed in Class 11." },
    { question: "What time are lessons held, given the school day in Wai?", answer: "Most Wai students take weekday evenings after school and any tuition-class hours, plus weekend mornings, all in Indian Standard Time. Exam blocks can add extra slots. Festival weeks and the Diwali break are usually paused and rescheduled so nobody studies through a procession." },
    { question: "What happens in the monsoon if the power or internet fails?", answer: "The lesson is moved to another slot. A short outage mid-lesson is handled by pausing and reconnecting through a phone hotspot, and the tutor shares the whiteboard notes afterwards. For exam-season lessons we suggest keeping a charged phone with a data plan nearby as a backup." },
    { question: "Is the IB Diploma accepted for university admission in India and for MHT-CET or NEET?", answer: "Generally yes, though the details depend on the course. The Association of Indian Universities issues an equivalence certificate for the Diploma, and CUET-UG is the usual route for central universities. For MHT-CET, JEE Main and NEET-UG, eligibility rests on subject combinations and each year's published rules, so check the current brochure before Class 11 subjects are fixed." },
    { question: "What equipment does my child need for online lessons?", answer: "A laptop or tablet with a working camera, a stable internet connection, a notebook and the school's textbooks or past papers. A graphing calculator is needed for IB Mathematics and some IGCSE papers, and the tutor will tell you which model the exam allows. A phone hotspot is a useful backup." },
    { question: "How do I get started?", answer: "Send a short message to support@ibgram.com, or on WhatsApp to +91 7439 368 115, giving the board, subject and level. A tutor suggestion and a trial slot normally come back within a day or two." },
  ],

  internalLinks: [
    { label: "Our service across India", href: "/india/", description: "How the same online model reaches students in cities and towns around the country." },
    { label: "IB tutoring overview", href: "/ib-tutors/", description: "How IB support is organised, programme by programme." },
    { label: "IGCSE tutoring by board", href: "/igcse/", description: "Subject specialists for Cambridge and Pearson Edexcel IGCSE." },
    { label: "Diploma Programme support", href: "/programmes/dp/", description: "Subject-level teaching for Classes 11 and 12." },
    { label: "MYP support", href: "/programmes/myp/", description: "Help with criterion-based assessment from Class 6 to Class 10." },
    { label: "IB Mathematics tutors", href: "/courses/ib/mathematics/", description: "AA and AI courses, at Standard and Higher Level." },
    { label: "Our tutors", href: "/tutors/", description: "Browse the people who teach IB and IGCSE for us." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or request a free first lesson." },
    { label: "IB and IGCSE tutors in Satara", href: "/satara/", description: "Our page for the district headquarters, about 35 km south of Wai." },
    { label: "IB and IGCSE tutors in Pune", href: "/pune/", description: "Where most of the region's confirmed IB and Cambridge schools are located." },
    { label: "IB and IGCSE tutors in Phaltan", href: "/phaltan/", description: "Another Satara district town served by the same online model." },
  ],

  closingHeading: "Try a free lesson from your own desk in Wai",
  closingBody:
    "Share your child's programme, subject and exam session and a matched tutor will offer a free first lesson. The rate follows in writing, and nothing is decided until you have seen the teaching. Write to support@ibgram.com or use WhatsApp on +91 7439 368 115.",
};
