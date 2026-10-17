import type { CitySeoPage } from "../types";

/**
 * Mokokchung, Nagaland (Ao homeland). Kept strictly non-political. No IB or Cambridge school could
 * be confirmed in the district, so stripSchools is empty; clusters use Guwahati and Kolkata names
 * already checked on the Dimapur, Kohima and Guwahati pages.
 */
export const mokokchung: CitySeoPage = {
  slug: "mokokchung",
  countryName: "Mokokchung",
  countryNameLong: "Mokokchung, Nagaland",
  demonym: "Mokokchung",
  flagCode: "in",
  countryCode: "IN",
  region: "Nagaland, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Afternoons and early evenings, since dusk comes early in the hills, with rain-day swaps agreed in advance",
  lastUpdated: "2026-09-21",
  state: "Nagaland",
  stateCode: "IN-NL",
  geo: { latitude: 26.3224, longitude: 94.5167 },
  wikipedia: "https://en.wikipedia.org/wiki/Mokokchung",
  alternateNames: ["Mokokchung town", "Mokokchung district", "Moko", "Mokokchung Nagaland"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mokokchung | Online Home Tuition",
  metaDescription:
    "One-to-one IB and IGCSE tuition for Mokokchung students, taught live online from home by subject-matched tutors, with weekly notes and a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Mokokchung",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR MOKOKCHUNG STUDENTS",
  heroSubtitle:
    "Private home tuition in IB and IGCSE for Mokokchung students, delivered as live one-to-one lessons over video so the child studies from the family home in the Ao hills. English is the language of school here, which gives students a head start on international syllabuses, yet specialist teachers for them are rare and the roads to larger cities are long. Share the subject, level and exam session, and we pair a tutor and book a free trial lesson.",
  primaryKeyword: "IB and IGCSE tutors in Mokokchung",
  imageAltText: "Mokokchung student in Nagaland learning IB Biology in a live online lesson at home",
  secondaryKeywords: [
    "IB tutor in Mokokchung",
    "IGCSE tutor in Mokokchung",
    "IB home tuition Mokokchung",
    "IGCSE home tuition Mokokchung",
    "IB private tuition Mokokchung",
    "IB Maths tutor Mokokchung",
    "IGCSE Maths tutor Mokokchung",
    "IB Physics tutor Mokokchung",
    "IB Chemistry tutor Mokokchung",
    "IB Biology tutor Mokokchung",
    "IB DP tutor Nagaland",
    "IB MYP tutor Mokokchung",
    "IB PYP tutor Mokokchung",
    "IGCSE online tuition Mokokchung",
    "IB tutor Nagaland",
    "IGCSE tutor Nagaland",
    "IB online classes northeast India",
    "online home tuition Mokokchung",
  ],

  heroTrustPoints: [
    "Live private lessons, never recordings or crowded batches",
    "Tutors who have taught IB DP, MYP and PYP and both IGCSE boards",
    "Timings that allow for hill rain, early sunsets and church and festival weeks",
    "A free trial and a written note after each lesson",
    "A free tutor change if the first one is not the right fit",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on Indian time, with the early northeast dusk in mind" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before you commit" },
    { value: "English", label: "Taught in the language of Nagaland schools" },
  ],

  intro: {
    heading: "Why Mokokchung families turn to online IB and IGCSE tutors",
    paragraphs: [
      "Mokokchung sits on a ridge in the Ao Naga heartland, with the town stepped down the hillside and villages like Ungma and Chuchuyimlang close by. English is the working language of Nagaland, and students here often write and speak it with an ease that surprises visitors from larger cities. Strong English is exactly what an IB or IGCSE paper rewards. What the town lacks is a classroom that teaches those papers.",
      "Most students follow the Nagaland Board or CBSE and then move to colleges in Mokokchung, Kohima, Guwahati, Delhi, Bengaluru or Pune. A smaller number, whose parents work in government service, the church, medicine, the army, business or abroad, want an international qualification for a child heading overseas or to a national university. For them, we offer private IB and IGCSE tuition delivered live and one-to-one over video, so the lessons come to the child rather than the child going to another state.",
      "This page describes how that works from a Mokokchung address: which schools can be reached, how boards differ, what shapes the rate, how monsoon rain, festivals and exam dates interact, where graduates go, and how the core subjects are taught. IB Gram is an independent tutoring service and is not connected to the IB, Cambridge, Pearson or any school. Tutors coach and give feedback; they never write a student's internal assessment, Extended Essay or coursework.",
    ],
  },

  programmesIntro:
    "The IB has four programmes and IGCSE has two boards. For Mokokchung families these usually become relevant when a child is moving schools or planning for study outside Nagaland.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Inquiry-based primary education built around units and a final Exhibition. Tutoring is brief and playful, centred on reading, numeracy and speaking about ideas.",
      countryNote:
        "PYP is not offered in the town, so younger students who encounter it are usually preparing for a school elsewhere. A short weekly lesson builds confidence in the style.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups assessed on set criteria and a Personal Project. Tutors teach students to read the task, plan the answer and show their reasoning.",
      countryNote:
        "Because English is already comfortable, Mokokchung students tend to adapt to MYP writing quickly. The tutor's main job is explaining criterion-based marking.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, Theory of Knowledge, the Extended Essay and CAS. Tutoring covers examined content and the method behind internal assessments.",
      countryNote:
        "Students who go to a Diploma school in Guwahati or further away often come home for long breaks, which suits concentrated online lessons.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more DP courses with career-related study and a reflective project, which suits practically oriented students.",
      countryNote:
        "CP is rare across the northeast. We take it on request and match tutors to the DP courses selected.",
    },
  ],

  subjectsIntro:
    "Subjects are matched to tutors by course and level. Strong English means some Mokokchung students can attempt English A at Higher Level with confidence, which not every Indian student can.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions and proof-style reasoning, with Paper 1 and 2 timing practised regularly." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Modelling, statistics and technology, for those leaning toward social science or business." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, thermal physics, waves and fields, with attention to units and graph interpretation." },
    { name: "Chemistry", levels: "SL / HL", description: "Moles, bonding, reaction rates and organic pathways, practised with worked examples." },
    { name: "Biology", levels: "SL / HL", description: "From cell biology to ecology, with local examples such as hill forests and jhum agriculture for ecology questions." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Cross-disciplinary study that suits a region of rich biodiversity and strong land-use debates." },
    { name: "Economics", levels: "SL / HL", description: "Markets, development and trade, using northeastern and Indian examples." },
    { name: "Business Management", levels: "SL / HL", description: "Case analysis, finance and organisational tools." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming logic, algorithms and the pseudocode style of the papers." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis and comparative essay writing, a strength for many students here." },
    { name: "English A: Literature", levels: "SL / HL", description: "Study of prose, poetry and drama, with guided essay planning." },
    { name: "Hindi B", levels: "SL / HL", description: "Reading, writing and speaking practice for students who learn Hindi as an additional language." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion coaching for knowledge questions; the essay and exhibition stay the student's own work." },
  ],

  igcseSubjectsIntro:
    "Cambridge IGCSE and Pearson Edexcel International GCSE differ in papers and tiers, so we match tutors by exam board and by the specific subject code.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Algebra, geometry, trigonometry and statistics at the appropriate tier." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, electricity, waves and atomic physics, plus practical-skills questions." },
    { name: "Chemistry", levels: "Core / Extended", description: "Atoms, reactions, electrolysis and organic basics." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, human biology, inheritance and ecosystems." },
    { name: "Environmental Management", levels: "Single tier", description: "Natural resources and human impact, with relevance to the Naga hills." },
    { name: "English as a First Language", levels: "Core / Extended", description: "Reading, writing and speaking tasks, suited to students already fluent in English." },
    { name: "English Literature", levels: "Single tier", description: "Close reading and essay planning for set texts." },
    { name: "Computer Science", levels: "Single tier", description: "Programming, data and networks." },
    { name: "Economics", levels: "Single tier", description: "Key concepts, data response and short essays." },
    { name: "Geography", levels: "Single tier", description: "Physical and human geography with fieldwork-style questions." },
  ],

  regionsTitle: "Mokokchung town, nearby villages and the wider district",
  regionsIntro:
    "Mokokchung is a hill town where distances on the map understate travel time, and where steep lanes, rain and the early dusk shape the school day. These notes cover areas whose students may look for online lessons.",
  regions: [
    { name: "Mokokchung town centre", note: "The main commercial and administrative stretch on the ridge, with shops, offices and schools close together; evening traffic thins early." },
    { name: "Mokokchung Village", note: "The older settlement near the town, where family networks are close-knit and homes are often multi-generational." },
    { name: "Ungma", note: "A well-known Ao village near the town with a strong tradition of education and church life, from which many students go on to colleges across the country." },
    { name: "Alempang", note: "A residential locality of the town where many salaried and professional households live; lessons fit after work and school." },
    { name: "Chuchuyimlang", note: "A village area whose students commute into town for school, so afternoon and evening lessons are best." },
    { name: "Mangkolemba", note: "A sub-division town east of Mokokchung with its own schools and families who seek tutors online." },
    { name: "Tuli", note: "A town toward the Assam border known for its industrial links, with a distinct mix of communities and travel patterns." },
    { name: "Changtongya", note: "A sub-divisional centre in the district; students here often depend on lessons by video because specialist teaching is scarce." },
    { name: "Longkhum and Khensa side", note: "Villages and settlements around the district where mobile networks and power can vary, calling for flexible scheduling." },
  ],

  schoolClusters: [
    {
      city: "Mokokchung district",
      note: "We could not confirm an authorised IB World School or approved Cambridge or Edexcel centre in Mokokchung. Schools here follow the Nagaland Board or CBSE, so local choice for IB and IGCSE is very limited.",
      schools: [],
    },
    {
      city: "Nearby: Guwahati",
      note: "Guwahati is the nearest large city with a confirmed IB school and is the usual gateway for northeastern families to the rest of the country. It is a long journey from Mokokchung, so it suits boarding or relocation.",
      schools: ["International School Guwahati"],
    },
    {
      city: "Nearby: Kolkata",
      note: "Kolkata has several confirmed IB and Cambridge schools and is a flight or long rail journey from the northeast. Some Nagaland families send children there for the Diploma years.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
  ],
  schoolDisclaimer:
    "School names are listed only to show where IB and Cambridge options for Mokokchung families really are. IB Gram is an independent tutoring service with no connection to any school, the IB, Cambridge or Pearson, and every school decides its own admissions.",

  modesIntro:
    "We do not send tutors to homes in Mokokchung, so every format below is online. Each is live, private and can be reshuffled around rain and local events.",
  modes: [
    {
      title: "Private lessons at home",
      description: "A live video lesson with a single tutor who teaches your child's board, subject and level.",
      bullets: ["Virtual whiteboard and past-paper walkthroughs", "Short note after each session", "Moves easily when rain or power interferes"],
    },
    {
      title: "Break-time intensives",
      description: "Condensed lessons during the long winter break and before exam sessions.",
      bullets: ["Daily sessions for a week or two", "Targeted at topics missed in term", "Final timed paper with feedback"],
    },
    {
      title: "Single-subject weekly support",
      description: "One steady lesson a week in the subject that needs the most help.",
      bullets: ["Good for MYP and IGCSE years", "Pausable for festival weeks", "Switch subject if priorities change"],
    },
  ],

  tutorsIntro:
    "Our tutors teach from across India on Indian Standard Time. In the northeast the sun sets early, so most Mokokchung lessons take place in the afternoon or early evening.",

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Mokokchung?",
      paragraphs: [
        "None that we could confirm. Mokokchung has a long record of education and a number of well-known schools run by churches, the state and private trusts, but they follow the Nagaland Board or CBSE, and none we checked appears in the IB World School directory or in Cambridge and Edexcel centre lists. We do not want to name a school we cannot verify, so we leave it there.",
        "Families who want an international curriculum therefore think about Guwahati, Kolkata or Delhi NCR, or about studying privately for the exams while staying in Mokokchung. Some students stay with relatives in a big city for the last two years of school. Others take the Nagaland Board route and apply abroad on the strength of strong English and a good record, adding IB or IGCSE style tutoring only where needed.",
        "The families who ask are typically a mix of serving officers and civil servants who have lived elsewhere, doctors and teachers, entrepreneurs, and households with relatives in the Gulf, the UK or North America. They are few in any one neighbourhood, so there is no natural group class for them. A private online tutor fills that gap.",
        "If a local institution announces IB candidacy or a Cambridge licence, we can start teaching that syllabus within a week of learning the subject list.",
      ],
    },
    {
      heading: "Nagaland Board, CBSE, IGCSE and IB: how do they differ for a Mokokchung student?",
      paragraphs: [
        "The Nagaland Board of School Education conducts the Class 10 and Class 12 examinations, usually in February and March, on a syllabus that follows the national pattern in many subjects. CBSE schools in the state use NCERT books. Both reward accurate recall and neat written answers, and the school year in Nagaland has traditionally begun in March or April.",
        "IGCSE introduces tiered papers, published learning objectives and more application questions. IB Diploma goes further, with internal assessments, a 4,000-word essay, a knowledge course and service. Students with strong English have an advantage in language and humanities papers, but may need to adapt in mathematics and science, where the method and the units matter as much as the answer.",
        "The table lays out the main differences from a Mokokchung household's perspective.",
      ],
      table: {
        caption: "Board comparison for a Mokokchung family",
        columns: ["Board", "Assessment", "Medium", "Typical next step", "Local specialist help"],
        rows: [
          ["Nagaland Board (HSLC, HSSLC)", "State-set written papers, February to March", "English", "Colleges in Nagaland, CUET-UG, NEET, JEE", "Local teachers in most subjects"],
          ["CBSE", "NCERT-based national papers", "English", "CUET-UG, JEE, NEET", "A few coaching options"],
          ["Cambridge or Edexcel IGCSE", "Tiered papers, sessions three times a year", "English", "IB, A Level or Indian Class 11", "Practically none locally"],
          ["IB Diploma", "Exams, essay, internal assessments, service", "English", "Indian and overseas universities", "None locally"],
          ["A Level", "Linear subject exams after IGCSE", "English", "Universities in India and abroad", "None locally"],
        ],
      },
    },
    {
      heading: "What does private IB or IGCSE tuition cost in Mokokchung, and why does it vary?",
      paragraphs: [
        "There is no published price list, and we say so openly. We quote the rate in writing before a trial is booked, which keeps the conversation honest and lets you compare with other options before spending anything.",
        "Three elements move the figure most. The first is course level: Higher Level Diploma Chemistry demands a specialist with deep content knowledge and marking experience, while IGCSE English at Core level sits lower. The second is rarity: some subjects, such as Computer Science HL or Further Mathematics, have fewer qualified teachers. The third is the shape of the plan: weekly lessons for a year versus a two-week winter block.",
        "For a Mokokchung family the alternative costs are real. A flight or long road journey to Guwahati, lodging in a bigger city, and the time away from home all add up, and a student who needs only support in two subjects may find that a home-based online plan costs far less than relocation.",
        "Ask for the quote in writing, ask exactly what is included, and avoid committing to a long block before the trial lesson has gone well.",
      ],
      bullets: [
        "Level of the course: SL, HL, Core, Extended",
        "How few tutors teach the subject",
        "Lessons per week and total length",
        "Holiday block versus year-round support",
      ],
    },
    {
      heading: "Online tutor, relocating to a city, local teachers or self-study: what are the trade-offs?",
      paragraphs: [
        "Four routes are open, and the best choice depends on whether the gap is content, exam technique or access. Families often use two together.",
        "Relocating to a city with an IB school offers the full classroom but is a major step. Local teachers know the Nagaland Board well and are sometimes excellent in maths and science fundamentals. Self-study with past papers works for disciplined students. Live online tutoring brings an experienced specialist without any move.",
      ],
      table: {
        caption: "Four ways to get IB or IGCSE help from Mokokchung",
        columns: ["Route", "Subject depth", "Disruption to family", "Flexibility", "Best for"],
        rows: [
          ["Live one-to-one online", "High, matched by board and subject", "Very little", "Evenings, weekends and breaks", "Most IB and IGCSE students"],
          ["Relocating to a metro school", "Highest, whole-school", "Major", "Fixed by school", "Families ready to move"],
          ["Local teacher or tuition", "Good for state-board content", "Little", "Reasonable", "Basics shared with the Nagaland Board"],
          ["Self-study with past papers", "Depends on student", "None", "Total", "Self-directed students"],
        ],
      },
    },
    {
      heading: "How do hill rain, early dusk and festivals fit around IB and IGCSE exam dates?",
      paragraphs: [
        "In Mokokchung the monsoon arrives heavily, usually from May to September, and landslides can close roads while storms can interrupt power and mobile networks. Winters are dry and cool, and the sun sets early throughout the year, so the useful study window is often the afternoon and early evening.",
        "The IB Diploma exam sessions fall in May and November, with results in July and January. Cambridge IGCSE runs in February to March, May to June and October to November, and Pearson International GCSE in January, May to June and October to November. The school or registered centre decides which session a student sits, so tutors plan backwards from that date.",
        "Community life adds its own calendar. The Moatsu festival of the Ao in early May and Tsungremong in August are important to families, Christmas is the major event of December, and church activities fill Sundays. A good schedule respects them.",
      ],
      table: {
        caption: "Study calendar pressure points in Mokokchung",
        columns: ["Period", "Local conditions", "Effect on study", "How lessons adapt"],
        rows: [
          ["Dec to Feb", "Dry cool season, Christmas, winter break", "Rest period, family events", "Holiday intensives and catch-up blocks"],
          ["Mar to Apr", "New school year, Nagaland Board results", "Fresh syllabus, adjustment", "Foundation lessons before the term speeds up"],
          ["May to Jun", "Moatsu, heavy rains begin, IB May session", "Festival days, power cuts", "Early slots with spare time booked"],
          ["Jul to Sep", "Monsoon, landslides, IB results, Tsungremong", "Poor roads, patchy networks", "Reschedule freely, hotspot back-up"],
          ["Oct to Nov", "Post-monsoon clarity, November sessions", "Compressed revision", "Timed papers and weekly review"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Mokokchung go next?",
      paragraphs: [
        "Within India, students from Mokokchung often study at Fazl Ali College in the town, at colleges in Kohima and Dimapur, at universities in Guwahati, or move to Delhi, Bengaluru, Pune and Kolkata. IB Diploma holders apply with an Association of Indian Universities equivalence certificate, and CUET-UG is the main route into central universities. Many private universities accept Diploma scores directly.",
        "For engineering and medicine, the rules depend on subject combinations. A Diploma with Mathematics, Physics and Chemistry or Biology can fit JEE and NEET eligibility, but the latest National Testing Agency notice must be checked before Class 11 subjects are fixed. Northeastern students should also check any state or regional provisions that apply.",
        "Abroad, the UK, Canada, Australia, the US and Singapore are the usual choices. Strong English helps, and predicted grades and school reports weigh heavily. IGCSE students typically continue to Class 11 in an Indian board, to A Level or to the IB.",
        "A tutor can explain how subject choice shapes options, but the final advice belongs to a school counsellor or the university concerned.",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences taught live to Mokokchung students?",
      paragraphs: [
        "Mathematics Analysis and Approaches covers algebra, functions, calculus and proof, and suits those aiming at engineering, science or economics. Applications and Interpretation is built around data, modelling and technology, and often fits students headed for business, social science or design. The two are different enough that the choice at the start of Class 11 deserves a careful conversation.",
        "In practice a lesson opens with a quick diagnostic on the previous topic, moves to a worked example on a shared whiteboard, and ends with the student attempting a past-paper question alone. The tutor then marks it line by line, showing where method marks were earned or lost and how the same working would appear in a mark scheme.",
        "Physics lessons train students to read graphs and handle units. Chemistry lessons spend time on the mole and on balancing, because small slips there spoil whole answers. Biology lessons concentrate on definitions and on explaining processes in the language examiners reward.",
        "Internal assessments are the student's own investigations. Tutors may explain criteria and method, but they do not draft, edit or write the work.",
      ],
    },
    {
      heading: "IGCSE tiers and boards: what should a Mokokchung family consider?",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended papers in mathematics and the sciences, while Pearson Edexcel uses Foundation and Higher. Core and Foundation cap the top grades, so students who hope to continue to science or IB Higher Level courses should usually sit the upper tier.",
        "A sensible tier decision draws on recent test results, the subject teacher's view and a diagnostic with the tutor. A careful student with gaps may do better at the lower tier than a stretched one at the higher tier, so the right answer varies from child to child.",
        "Mokokchung students often have an advantage in English First Language, and can use that to balance subjects where more support is needed. A varied IGCSE set generally combines languages, mathematics, sciences and one humanities or business subject, and the combination affects Class 11 options.",
        "Boards also differ in practical exams, paper numbers and grade boundaries, so we confirm the board code before assigning a tutor.",
      ],
    },
  ],

  process: [
    { title: "Share the basics", description: "Message us with the board, subject, level and the exam session your child will sit." },
    { title: "Meet the proposed tutor", description: "We select a tutor who has taught that course and send a short profile." },
    { title: "Try a free lesson", description: "A genuine lesson on a real topic, free of charge, to see if the style fits." },
    { title: "See the plan in writing", description: "Rates and lesson frequency are put on paper. Nothing begins until you agree." },
    { title: "Keep the rhythm", description: "Weekly live lessons with a note afterwards, and a change of tutor if you want one." },
  ],

  whyPoints: [
    { title: "Course-specific teaching", description: "A Diploma Physics student works with someone who has taught that exact paper." },
    { title: "Fits hill life", description: "Rain days, early dusk, Sundays and festival weeks are all part of the timetable." },
    { title: "Candid about options", description: "We say plainly that no IB or Cambridge school is confirmed in Mokokchung and help you plan around that." },
    { title: "Clear reports", description: "A short written summary after each lesson shows topics covered, errors and next steps." },
    { title: "Coaching, not writing", description: "Tutors teach and give feedback but never produce assessed work." },
    { title: "Simple start", description: "A free trial, a written rate and an easy tutor change." },
  ],

  faqs: [
    { question: "Does Mokokchung have an IB or Cambridge school?", answer: "We could not confirm one. Schools in Mokokchung follow the Nagaland Board or CBSE, and none we checked appears in the IB directory or in Cambridge and Edexcel centre lists. For an international syllabus, families look to Guwahati, Kolkata or Delhi NCR, or follow the syllabus privately with an online tutor while living at home." },
    { question: "Do tutors visit homes in Mokokchung?", answer: "No. Tutors do not visit homes in Mokokchung; in-person lessons run only in Gurugram and parts of Delhi NCR. Here the service is online home tuition: a live private lesson over video while your child sits at home. That keeps the one-to-one attention and removes the long hill-road journeys." },
    { question: "How can I find a tutor for IB Chemistry or IGCSE Maths in Mokokchung?", answer: "Send us the board, subject, level and exam session by WhatsApp or email. We choose a tutor who has taught that specific course, send you a short profile and book a free trial lesson. If the teaching style does not suit your child, we replace the tutor at no cost." },
    { question: "What does IB tuition cost in Mokokchung?", answer: "The rate depends on the course level, how scarce the subject is among tutors and how many lessons you want each week. We do not publish a price list. You receive the figure in writing before the trial lesson is booked, so you can decide calmly without pressure." },
    { question: "Will the mobile network be good enough for video lessons?", answer: "Usually yes, with some planning. A stable broadband or good 4G connection works well for video and a shared whiteboard. Rain and landslides can affect networks, so we suggest a second connection as back-up. If a session is lost to outages, we reschedule it within the same week." },
    { question: "Can a Nagaland Board student switch to IGCSE or IB?", answer: "Yes. Strong English helps a great deal. The content in maths and science overlaps, though the question style, units and marking are different. A tutor starts with command words and paper format, then fills content gaps. Classes 8 to 10 are a good time to begin IGCSE, and Class 10 or 11 for the Diploma." },
    { question: "Can you help with a Mokokchung student studying at a Diploma school elsewhere?", answer: "Yes. Students at schools in Guwahati, Kolkata or Delhi NCR often come home for long breaks. A holiday block of daily lessons can revisit units that were rushed, practise past papers and prepare for the next set of tests. We map gaps at the first lesson." },
    { question: "Will tutors write the Extended Essay or internal assessment?", answer: "No. Tutors coach and explain; they never write, rewrite or edit internal assessments, Extended Essays, TOK essays or coursework. They can explain criteria and discuss the student's own ideas, but all submitted work must be the student's alone." },
    { question: "How does the free trial lesson work?", answer: "It is a live lesson on a real topic from your child's syllabus with the tutor we propose. There is no payment and no obligation. Afterwards you receive a brief written note, and if you wish to continue, the plan and rate are sent in writing for your approval." },
    { question: "Which exam sessions do you prepare students for?", answer: "Both IB sessions, in May and November, and the Cambridge and Edexcel series in which the student's school enters them. The school or exam centre decides the window, and we plan the lessons backwards from that date. IB results arrive in July and January." },
    { question: "Do you cover both Cambridge and Pearson Edexcel IGCSE?", answer: "Yes. The boards differ in paper structure, tiers and practical components, so we match tutors by board code as well as subject. Tell us which board your child's school uses and which papers appear on the timetable." },
    { question: "When are lessons held?", answer: "Most Mokokchung students take lessons in the afternoon or early evening, since daylight ends early in the northeast, plus weekend slots and winter-break blocks. Lessons are in Indian Standard Time and are paused around Christmas, Moatsu and other major community events." },
    { question: "Does the IB Diploma count for Indian university admission?", answer: "Generally yes, with an equivalence certificate from the Association of Indian Universities. CUET-UG is the common route to central universities. Entrance tests like JEE and NEET have particular subject rules, so read the latest official notices before finalising Class 11 subjects." },
    { question: "Can students from Mangkolemba, Tuli or Changtongya join?", answer: "Yes. Lessons are online, so any address in the Mokokchung area works if the connection is steady. We choose times that suit the school and family routine and keep the weekly slot fixed so it is easy to remember." },
    { question: "Is English support included for IB English A?", answer: "Yes, if you want it. Many Mokokchung students are already fluent, so the tutor concentrates on analysis, paper structure and the comparative essay rather than basic language. English A Language and Literature and English A Literature both have tutors available." },
    { question: "How do we get started?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the class, board, subject and exam session. We normally reply within a day or two with a tutor suggestion and a suggested time for the free trial lesson." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Where else the online tutoring model is available." },
    { label: "IB tutoring overview", href: "/ib-tutors/", description: "How IB tutoring is organised by programme." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects with matched tutors." },
    { label: "Middle Years Programme help", href: "/programmes/myp/", description: "Support with criterion-based assessment, Class 6 to 10." },
    { label: "Diploma Programme help", href: "/programmes/dp/", description: "Subject tutoring for the last two school years." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI at Standard and Higher Level." },
    { label: "Tutor profiles", href: "/tutors/", description: "The people who teach IB and IGCSE." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book your free trial." },
    { label: "IB and IGCSE tutors in Kohima", href: "/kohima/", description: "Our page for the state capital." },
    { label: "IB and IGCSE tutors in Dimapur", href: "/dimapur/", description: "Nagaland's commercial centre and rail gateway." },
    { label: "IB and IGCSE tutors in Wokha", href: "/wokha/", description: "A neighbouring Nagaland town served online." },
  ],

  closingHeading: "Book a free trial lesson from home in Mokokchung",
  closingBody:
    "Give us the board, subject and exam session. We pair a tutor, run a free trial and send the rate in writing before you commit to anything. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115.",
};
