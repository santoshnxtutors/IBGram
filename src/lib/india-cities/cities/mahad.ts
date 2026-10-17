import type { CitySeoPage } from "../types";

/**
 * /mahad/ - IB and IGCSE tutoring page for Mahad, Raigad district, Maharashtra. Online-only delivery:
 * tutors do not visit homes in Mahad. No IB or Cambridge/Edexcel school is confirmed inside Mahad, so
 * stripSchools is empty and clusters point at Navi Mumbai (Panvel/Kharghar) and Pune, reusing names
 * from the existing Panvel and Pune pages.
 */
export const mahad: CitySeoPage = {
  slug: "mahad",
  countryName: "Mahad",
  countryNameLong: "Mahad, Raigad, Maharashtra",
  demonym: "Mahad",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around your child's school timetable, the July to September downpour when the Savitri runs high and power can flicker, and the Ganeshotsav fortnight when Konkan families go home to the village",
  lastUpdated: "2026-09-21",
  geo: { latitude: 18.0833, longitude: 73.4167 },
  wikipedia: "https://en.wikipedia.org/wiki/Mahad",
  alternateNames: ["Mahad Raigad", "Mahad Konkan"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mahad | Online Home Tuition, Raigad",
  metaDescription:
    "IB and IGCSE tutors for Mahad, Raigad families: PYP, MYP, DP and Cambridge or Edexcel IGCSE, live one-to-one online lessons from home, free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Mahad",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR MAHAD, RAIGAD",
  heroSubtitle:
    "Looking for private tuition from home in Mahad for an international syllabus? The town is known for the 1927 Chavdar Tale satyagraha and for the Savitri river, not for IB classrooms, so we do not pretend a local centre exists. A specialist for your child's exact subject is chosen from across India and teaches one-to-one over video, at an hour that suits a Konkan evening.",
  primaryKeyword: "IB and IGCSE tutors in Mahad",
  imageAltText: "Student in Mahad, Raigad studying IGCSE Physics on a laptop during an online one-to-one lesson with a tutor",
  secondaryKeywords: [
    "IB tutor Mahad",
    "IGCSE tutor Mahad",
    "IB home tuition Mahad",
    "IGCSE home tuition Mahad",
    "IB private tuition Mahad",
    "IB Maths tutor Mahad",
    "IGCSE Maths tutor Mahad",
    "IB Physics tutor Mahad",
    "IB Chemistry tutor Mahad",
    "IB Biology tutor Mahad",
    "IB DP tutor Mahad",
    "IB MYP tutor Mahad",
    "IB PYP tutor Mahad",
    "IGCSE online tuition Mahad",
    "Cambridge IGCSE tutor Mahad Raigad",
    "online IB tutor Raigad district",
    "IB tutor Mahad Maharashtra",
    "IGCSE tutor Mangaon",
    "IB tutor Poladpur",
    "IB tuition Konkan",
  ],

  heroTrustPoints: [
    "Tutors are matched to the exact IB subject and level or the Cambridge and Edexcel syllabus code your child is sitting",
    "All teaching is online; tutors do not visit homes in Mahad, because home visits run only in Gurugram and parts of Delhi NCR",
    "A free trial lesson comes first, then a written note after every session",
    "Independent service with no link to any Mahad school, coaching class, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "Konkan-aware", label: "Planned around monsoon and Ganeshotsav" },
    { value: "PYP to DP", label: "Every IB stage covered" },
    { value: "Free trial", label: "Meet the tutor before paying" },
    { value: "IST", label: "One timetable for tutor and child" },
  ],

  intro: {
    heading: "What IB and IGCSE tutoring looks like for a family in Mahad",
    paragraphs: [
      "Most children in Mahad study under the Maharashtra State Board, with a few CBSE and private English-medium schools alongside it. We could not confirm any IB World School or Cambridge or Edexcel IGCSE centre inside the town. Parents who contact us for private tuition from home in Mahad usually fall into three groups: families whose child boards in Pune, Navi Mumbai or Mahabaleshwar, families moving back after a posting elsewhere, and parents deciding whether a switch from the state board is worth it.",
      "Since there is no local pool of IB or IGCSE specialists to choose from, we do not shortlist by postcode. We shortlist by syllabus. A tutor who teaches IB Chemistry HL or IGCSE Mathematics 0580 every week, wherever in India they live, is a better match than a generalist who happens to be nearby. The lesson itself is live, private and on video, so a laptop and a steady connection are all a Mahad household needs.",
      "One honest point on terms. People search for home tuition, and we use that phrase because it is how families think about it, but our tutors do not come to your house in Mahad. In-person visits exist only in Gurugram and some parts of Delhi NCR. In Mahad it is online home tuition: your child studies in their own room, on their own desk, with the tutor on screen.",
      "This page is not written on behalf of any school, board or examining body. Tutors explain, practise and mark; the student writes every Internal Assessment, Extended Essay and piece of coursework themselves.",
    ],
    bullets: [
      "IB tutoring from PYP through the Diploma and Career-related Programme",
      "Cambridge and Pearson Edexcel IGCSE tutoring tied to the real specification",
      "Live one-to-one lessons in Indian Standard Time",
      "Free trial lesson, then rates confirmed in writing before you book",
      "Online only in Mahad; in-person visits stay in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "No school in Mahad that we could verify runs an IB programme, so families meet these four stages through a boarding school, a relocation or a planned switch. This is what tutoring usually involves at each stage.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "The Primary Years Programme replaces rote chapters with units of inquiry, where a class studies one big idea through language, maths and science together. It ends with the Exhibition, a group research project. There are no formal exams, so tutoring focuses on fluent reading, number sense and the habit of asking questions that can actually be researched.",
      countryNote:
        "Families in Mahad who ask about PYP are most often those returning from a Gulf or metro posting, where a child has already followed the programme and needs to keep the thread while settling into Konkan life.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "In the Middle Years Programme each subject is graded on four criteria rather than one total, and a Personal Project in the final year asks the student to run an independent piece of work. Students used to Maharashtra Board marking are often surprised that a correct answer without explanation can lose marks under a criterion.",
      countryNote:
        "For a Mahad student the work tends to cluster in the May and Diwali holidays, when a hostel student is home and has a stack of criterion-marked tasks to rework.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Diploma asks for six subjects, three at Higher Level and three at Standard Level, together with the Extended Essay, Theory of Knowledge and CAS. Most subjects carry an internal assessment worth a fifth to a third of the grade. Final exams arrive in May or November, with papers marked by external examiners.",
      countryNote:
        "A Mahad family weighing the Diploma is usually comparing it with the Maharashtra HSC and a JEE or NEET route, so tutoring begins with an honest look at which pathway the child's target course actually needs.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme pairs two or three Diploma-level subjects with a career-focused study and a reflective project. It suits students aiming at design, hospitality, business or technical routes. Tutors support the academic subjects and the structure of the reflective project, never its writing.",
      countryNote:
        "This route is rarely raised in Mahad, but an industrial family connected to the MIDC chemical cluster sometimes asks about it for a child leaning towards applied sciences and business.",
    },
  ],

  subjectsIntro:
    "Subject choice, not curriculum branding, decides which tutor fits. A Mahad student reading IB Physics HL needs very different help from one preparing IGCSE Business Studies, so each request starts with the subject, level and next exam session.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "The algebra and calculus route for students heading to engineering, economics or pure science; tutoring pushes Paper 2 timing and the shape of the Exploration, while leaving the writing to the student." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Built around data, modelling and technology, this course suits students who prefer context to proof, and lessons centre on calculator fluency and reading a model critically." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics and fields reward careful unit handling, and the Scientific Investigation needs a measurable question that the school's equipment can actually test." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Equilibrium, kinetics and organic mechanisms are where marks slip, and a student needs repeated practice writing the mechanism rather than only recognising it." },
    { name: "IB Biology", levels: "HL / SL", description: "Large content volume plus data-based questions; lessons teach how to turn a graph or table into a two-sentence scientific claim." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy and a clear chain of reasoning matter more than memorised definitions, and the commentary portfolio relies on a student's own news choices." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers favour students who can apply a tool such as a SWOT or break-even chart to unfamiliar data, a skill that suits families with trading backgrounds." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, object-oriented ideas and the case-study paper; lessons favour writing and tracing code by hand as well as running it." },
    { name: "IB English A: Language & Literature", levels: "HL / SL", description: "Close reading of unseen extracts and a guided literary analysis; tutoring builds a method for paragraphs rather than a bank of quotations." },
    { name: "IB Hindi B", levels: "HL / SL", description: "A language-acquisition course for students whose home tongue is Marathi or English and who need confidence in written and spoken Hindi for the Paper 1 and oral tasks." },
    { name: "IB Marathi", levels: "SL / school-based", description: "Where a school offers Marathi as a language option, tutors help with reading, written response and speaking practice rooted in the student's own region." },
    { name: "IB Theory of Knowledge", levels: "Core", description: "Support for understanding the knowledge questions, the exhibition and the essay planning process, with all writing remaining the student's own." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, theories and evaluation paragraphs; tutoring trains students to write tightly structured short answers and the extended essay-style response." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel IGCSE courses are two-year courses for Grades 9 and 10. Students in the Konkan who join them are usually changing school or boards, so lessons often begin by identifying gaps against the specification code.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tier asks for algebraic fluency and multi-step reasoning; a student from the Maharashtra Board often needs help with non-calculator Paper 2 and clear working." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "A step above the standard course, with functions, trigonometry and early calculus; a good bridge for students heading to IB Maths AA HL." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Heavy on equation handling and the alternative-to-practical paper, which many students underestimate." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Stoichiometry, the reactivity series and organic basics; practical-skill questions get regular drills." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, ecosystems and human physiology; lessons practise applying content to unseen experimental data." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Short data-response questions and a longer evaluative essay, with plenty of use of Indian examples such as the Konkan fishing and tourism economy." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case-based questions on small businesses, a natural fit for students from trading and industrial families around the MIDC." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, logic and a programming project style paper; practice includes writing programs by hand." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and composition marked for tone and control, useful for students whose schooling so far was in Marathi medium." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading comprehension, translation and writing tasks, suited to a Marathi-speaking household where Hindi is the second language." },
  ],

  regionsTitle: "Areas around Mahad our online IB and IGCSE tutors already serve",
  regionsIntro:
    "Lessons are delivered online, so the places below matter only as context: where a family lives, what schools are nearby and how the Konkan monsoon or the highway changes an evening. Students at any of them can start a free trial.",
  regions: [
    { name: "Mahad city and Chavdar Tale", note: "The old town centre around the water tank where Dr Ambedkar led the 1927 satyagraha; compact, busy and close to most Mahad schools." },
    { name: "Birwadi and Mahad MIDC", note: "The industrial estate on the town's edge, home to chemical and pharmaceutical plants; shift workers' families often ask about evening-only schedules." },
    { name: "Nate", note: "A village area near Mahad on the Raigad Fort approach; mostly Marathi-medium schooling, with strong interest in a better English foundation." },
    { name: "Dasgaon", note: "A village south of town, popular with weekend visitors, where families often have a Mumbai or Pune link through a working relative." },
    { name: "Vinhere", note: "A Mahad taluka village with a mix of farming and commuter families; broadband quality can vary, so we test the connection in the free trial." },
    { name: "Poladpur", note: "A taluka town to the south on the way to Mahabaleshwar, where ghat roads make any daily commute to a bigger school impractical." },
    { name: "Mangaon", note: "The taluka town to the north, with a Konkan Railway link and the Dr Babasaheb Ambedkar Technological University campus at nearby Lonere." },
    { name: "Mhasla", note: "A coastal-side taluka town west of Mahad, reached by a winding road, where parents think of boarding or relocation for secondary years." },
    { name: "Lonere", note: "The campus village near Mangaon, home to the state technological university, which shapes how many local families think about engineering degrees." },
    { name: "Raigad Fort approach", note: "Villages below Raigad Fort, about 24 km from Mahad, where tourism work is common and internet access is patchy during heavy rain." },
  ],

  schoolDisclaimer:
    "We list no school inside Mahad because none could be confirmed as offering IB or Cambridge or Edexcel IGCSE. The schools named below are in other cities and are included only because Mahad families board or relocate there. IB Gram is an independent tutoring service with no affiliation to, or endorsement from, any school, the IB, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Mahad and Raigad interior",
      note: "Local options are limited. Schooling here is Maharashtra State Board and some CBSE and private English-medium, and we found no confirmed IB or IGCSE campus in Mahad itself.",
      schools: [],
    },
    {
      city: "Nearby: Panvel and Kharghar, Navi Mumbai",
      note: "The closest large cluster for families on the Mumbai-Goa highway, a few hours' drive north, where several schools carry Cambridge or IB authorisation.",
      schools: ["Dr Pillai Global Academy, New Panvel", "Ryan Global School, Kharghar", "Saviors Global School, Kharghar"],
    },
    {
      city: "Nearby: Pune",
      note: "Reached from Mahad over the Varandha ghat road, Pune has a wide spread of IB and Cambridge schools and is where many Konkan families with an international-school plan eventually look.",
      schools: ["Mahindra International School", "Indus International School, Pune", "Symbiosis International School"],
    },
  ],

  modesIntro:
    "The format is the same for every Mahad student: a tutor, one learner and a screen. What varies is the rhythm, whether lessons are weekly through the school year, concentrated before an exam, or squeezed into a hostel holiday.",
  modes: [
    {
      title: "Weekly one-to-one lessons",
      description:
        "A fixed weekly slot with the same tutor, working through the syllabus in order and revisiting weak topics. This suits students who are enrolled in an IB or IGCSE school and want steady support.",
      bullets: [
        "Same tutor each week for continuity",
        "Evening or weekend slots in IST",
        "A short written note after each session",
      ],
    },
    {
      title: "Exam-season intensives",
      description:
        "Short, frequent sessions before the May or November IB session, or the IGCSE June and November series. Past-paper practice, examiner-style marking and a clear list of what to fix next.",
      bullets: [
        "Timed past-paper work with feedback",
        "Command-word and mark-scheme training",
        "Plans written around power cuts and exam dates",
      ],
    },
    {
      title: "Holiday catch-up for boarders",
      description:
        "For students at a boarding school who come home to Mahad for Diwali, Christmas or summer. Intensive blocks help them clear backlog and prepare for the next term.",
      bullets: [
        "Block bookings across a holiday week",
        "Revision against the school's own term plan",
        "Pause and resume without penalty",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families around Mahad",
      paragraphs: [
        "Mahad's schooling is dominated by the Maharashtra State Board, with a growing number of CBSE and private English-medium schools. We looked for IB World Schools and approved Cambridge or Pearson Edexcel centres in the town and found none we could confirm, so this page names none. Treat any claim otherwise with caution and check the official IB and Cambridge directories.",
        "The families who ask about international curricula tend to share a few traits. Many have a member working in Mumbai or the Gulf and a child who may move with them. Others are tied to the Birwadi industrial estate, where chemical and pharmaceutical companies employ engineers and managers who relocate in and out. A third group are local business families who want a child to study abroad for a degree and think an international diploma helps.",
        "The practical routes are limited by geography. The nearest dependable choice for a daily student is outside the district. Panvel and Kharghar in Navi Mumbai host several Cambridge and IB schools, and Pune has a larger selection. Both are a long road journey from Mahad, so boarding or a family move is the realistic way in.",
        "Because of this, tutoring in Mahad is rarely for a child sitting in a local IB classroom. It is for a boarder at home in the holidays, for a child about to enter an international school who needs bridging, or for a student in a Mahad school who wants to explore IGCSE subjects before committing.",
        "A tutor can do all of that online. What a tutor cannot do is replace the school's authorisation to enter a child for IB or IGCSE exams, so we always suggest confirming the exam centre before choosing a route.",
      ],
      table: {
        caption: "Options a Mahad family usually weighs for IB or IGCSE schooling",
        columns: ["Option", "Where", "What to know"],
        rows: [
          ["Stay in Mahad", "Mahad and nearby talukas", "State Board and CBSE only; IB or IGCSE would be supplementary study"],
          ["Navi Mumbai schools", "Panvel and Kharghar", "A cluster of Cambridge and IB schools; daily travel from Mahad is not practical"],
          ["Pune boarding or relocation", "Pune and its outskirts", "More IB schools; usually a boarding or family move"],
          ["Study IGCSE subjects online", "From home in Mahad", "Useful as a bridge or extra, if an exam centre can enter the student"],
        ],
      },
    },
    {
      heading: "Maharashtra State Board, CBSE, IB or IGCSE: which suits a Mahad student?",
      paragraphs: [
        "There is no single right answer, because the choice depends on the child's next step. A student heading for a state engineering or medical seat through MHT-CET or NEET is generally best served by staying in the state or CBSE stream, since those exams are written around those syllabi. IB and IGCSE make sense when the child is likely to study abroad, or move between cities and countries.",
        "The Maharashtra State Board is content-heavy and exam-driven, with Marathi or English medium and a strong tradition of textbook learning. CBSE is broadly similar but with a national paper pattern. The IB leans on inquiry, internal assessment and writing; IGCSE sits in between, with externally set papers but a stronger emphasis on application than recall.",
        "Switching late is hard. A student moving from Class 8 or 9 in a state school to an IGCSE course in Grade 9 has to learn new command words, new mark schemes and often a new language of instruction in science. Starting a year early with a tutor reduces that shock.",
        "For many Konkan families the deciding factor is cost and distance rather than philosophy. International schools are in other cities, and boarding adds a large expense. Online tuition does not change that, but it can keep a child connected to an international syllabus without a move.",
      ],
      table: {
        caption: "Boards compared from a Mahad perspective",
        columns: ["Board", "Strength", "Watch out for"],
        rows: [
          ["Maharashtra State Board", "Best aligned with MHT-CET and local colleges", "Textbook-heavy; fewer chances to practise open-ended writing"],
          ["CBSE", "National paper pattern, JEE and NEET alignment", "Competitive and content-dense in Classes 11-12"],
          ["Cambridge IGCSE", "Clear specification, flexible subject choice", "Needs an approved exam centre"],
          ["Pearson Edexcel IGCSE", "Similar rigour, different paper style", "Fewer schools offer it; confirm centre first"],
          ["IB Diploma", "Breadth, research skills, global recognition", "Heavier workload and internal assessments"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Mahad?",
      paragraphs: [
        "The short answer is that the rate depends on the tutor and the course, and we quote it in writing before you book. We do not publish a price list, because a fixed number would be wrong for most families. What follows explains what sets the figure, so you can judge a quote fairly.",
        "The first factor is the level. A tutor for IB Mathematics HL or IGCSE Additional Mathematics has spent years on a narrow, difficult syllabus, and the rate reflects that. A Primary Years or Middle Years support session is usually priced lower than Diploma subject coaching.",
        "The second is experience with the exact specification. A teacher who has marked or taught a paper for several exam sessions can predict where a student will lose marks. The third is session length and frequency: two shorter weekly lessons often work better than one long one, but cost more in total.",
        "In Mahad there is no travel component, which is where online tuition saves money compared with tutors who commute. There is also no premium for rare local supply, because the pool is national.",
        "Ask for the rate, the length of each session and any block discount in writing. If it does not suit your budget, a shorter plan focused on exam season can be agreed.",
      ],
      bullets: [
        "Level of the course and whether it is HL, SL, Core or Extended",
        "The tutor's experience with that exact specification",
        "Session length and number of lessons per week",
        "Whether the plan covers the whole year or an exam sprint",
      ],
    },
    {
      heading: "Online home tuition, coaching centres, private tutors or self-study in Mahad?",
      paragraphs: [
        "Mahad has coaching classes, mostly for State Board, MHT-CET and NEET preparation, and they do that job well for those exams. They are not built for IB or IGCSE, whose papers, command words and internal assessments are different. A coaching class teaching a batch of thirty will rarely tailor lessons to one student's Paper 2 weaknesses.",
        "A private tutor who visits the home is the traditional answer, and it works when a suitable person exists nearby. For IB and IGCSE in the Konkan, such tutors are few. Our tutors do not travel to Mahad, but because lessons are online, the choice is not limited to who lives within reach.",
        "Self-study is possible with past papers and mark schemes, and strong students manage it. The risk is that without feedback an error in method goes unnoticed for months. A tutor's job is to catch that early.",
        "Online home tuition is not perfect. It depends on a stable internet connection, and a tutor cannot sit beside the child to nudge them through a distraction. In exchange, the child gets a specialist chosen for the syllabus, flexible scheduling and a recording-free, note-based record of progress.",
      ],
      table: {
        caption: "Ways of studying IB or IGCSE from Mahad",
        columns: ["Approach", "Strength", "Limit"],
        rows: [
          ["Online one-to-one", "Syllabus-matched specialist, flexible slots", "Needs reliable internet"],
          ["Local coaching class", "Peer group, structured timetable", "Designed for State Board and entrance exams"],
          ["Visiting private tutor", "Face to face", "Hard to find for IB or IGCSE in the Konkan"],
          ["Self-study", "Free and flexible", "No feedback loop on method"],
        ],
      },
    },
    {
      heading: "When are the exams, and how do Konkan weather and festivals affect study?",
      paragraphs: [
        "IB Diploma exams run in May and November, with results in July and January. IGCSE has June and November series, plus a March series for some Cambridge subjects in India. Internal assessments and coursework deadlines are set by the school, usually a few months earlier.",
        "In Mahad the weather shapes the calendar more than in most cities. Rainfall in the Konkan often exceeds four metres a year, and the Savitri river has flooded the town in past monsoons. Power cuts and weak mobile data during July and August are common, so we plan lessons with buffer time and suggest charging a laptop and keeping a mobile hotspot ready.",
        "Ganeshotsav, usually in August or September, is the great pause. Many Konkan households return to ancestral villages, and students may be away from their desk for a week or more. We schedule around that and often front-load lessons beforehand.",
        "Diwali, the winter weeks and the summer break are better for catch-up blocks. Holi, called Shimga in the Konkan, may also take a family away for several days.",
        "The table below gives a rough year plan. Dates are indicative and your school's own calendar always prevails.",
      ],
      table: {
        caption: "A study calendar for a Mahad student",
        columns: ["Period", "What is happening", "Tutoring focus"],
        rows: [
          ["June to September", "Monsoon and Ganeshotsav", "Foundations, buffer for outages, front-load before the festival"],
          ["October to December", "Post-monsoon, Diwali, mock exams", "Past papers, internal assessment drafts"],
          ["January to March", "Cooler months, final preparation", "Timed practice, weak-topic repair"],
          ["April to June", "May IB exams, IGCSE series, summer", "Revision sprints and exam technique"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Mahad go after school?",
      paragraphs: [
        "Pathways depend on which board the student has finished and where they want to study. For Indian universities, the Association of Indian Universities treats the IB Diploma and recognised IGCSE plus A Level combinations as equivalent to Class 12 for admission, though each institution sets its own rules.",
        "CUET-UG is used by many central and some state universities. IB and IGCSE students can sit it, but they must choose subjects that match the course and check the university's eligibility. For engineering, JEE Main and Advanced require Class 12 subjects in Physics, Chemistry and Mathematics with a minimum percentage; IB students should confirm how marks are converted. NEET needs Physics, Chemistry and Biology with English.",
        "Many IB families aim abroad. Universities in the UK, USA, Canada, Australia and Europe recognise the Diploma directly, and IGCSE leads into A Levels or IB. Tutoring helps hit the predicted grades that offers depend on.",
        "Closer to home, a student who completes the Diploma might look at private universities in Pune and Mumbai, or at design, law and liberal arts programmes that accept the IB. Mahad's own technology campus at Lonere, run by Dr Babasaheb Ambedkar Technological University, offers state engineering routes that follow the state or CBSE pathways.",
      ],
      bullets: [
        "Confirm AIU equivalence for each Indian target",
        "Check CUET-UG subject mapping early",
        "Ask each university how it converts IB points",
        "Plan JEE or NEET separately and in time",
      ],
    },
    {
      heading: "How do IB Maths and Science lessons work for a Mahad student?",
      paragraphs: [
        "IB Mathematics comes in two forms. Analysis and Approaches is for students who enjoy algebra, functions and calculus, and is the usual route for engineering, physics or economics. Applications and Interpretation focuses on statistics, modelling and technology and suits business, social science and design. HL adds depth in both; SL is lighter.",
        "Lessons start with a diagnostic on past questions to find gaps. We then work on the Exploration, the maths internal assessment, as a guidance process: the tutor can discuss topic choice and structure, but the student writes it.",
        "IB Physics, Chemistry and Biology share a pattern: Paper 1 multiple choice, Paper 2 structured, Paper 3 on options and data, and an internal Scientific Investigation. A tutor works through the guide, then trains students in the type of question each paper asks. In Chemistry, practising mechanism arrows on paper matters; in Physics, careful use of units and uncertainty; in Biology, reading experimental data.",
        "Practicals are the usual concern for a Mahad student whose school lab is limited. Tutors cannot replace lab access, but they can explain method, data handling and evaluation so that whatever experiment the school allows is written up to a high standard.",
        "Where a student is stronger in one science, we may build a longer plan for the weaker one, with checkpoints after each unit.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a Mahad student choose?",
      paragraphs: [
        "Core and Extended are two tiers of the same subject, and the paper a student sits decides the highest grade they can reach. Core papers cap the grade at a C in Cambridge's lettered system, while Extended papers open A* to E. Students aiming for IB Maths AA HL or A Level science should usually be on Extended.",
        "The choice is made by the school, usually in Grade 9, based on class performance. If your child is moving from the Maharashtra Board, a tutor can test readiness for Extended before the decision is final. A student who is strong in arithmetic but weak in algebra may find Extended Maths painful, yet not much safer on Core, so the diagnostic matters.",
        "Subject choice follows a similar logic. Students aiming for science degrees should take Physics, Chemistry, Biology or the Co-ordinated Sciences option as the school allows, plus Mathematics. Business-minded students often add Economics or Business Studies. Language choices such as Hindi or English as a first or second language depend on the school's offer.",
        "Cambridge and Edexcel differ in format and marking, so we ask early which board the school uses. A tutor familiar with 0580 Mathematics is not automatically ready for Edexcel's 4MA1.",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors for IB PYP, MYP and Diploma subjects and for Cambridge and Edexcel IGCSE who teach Mahad families online. Each match starts from the syllabus and level your child is sitting, since every lesson here is delivered over video.",

  process: [
    { title: "Share your child's details", description: "Tell us the programme or board, subject, level, current grades and the evenings that work in Mahad." },
    { title: "Receive a matched shortlist", description: "We propose tutors chosen for your syllabus, with a brief reason for each, because the pool is national rather than local." },
    { title: "Take a free trial lesson", description: "Your child sits a real lesson on a real topic, online, with no payment or obligation." },
    { title: "Agree the plan in writing", description: "Topics, pace, session length and rate are set out before any booking." },
    { title: "Study weekly and review", description: "A fixed online slot, a note after each session and a change of tutor if the fit is not right." },
  ],

  whyPoints: [
    { title: "Syllabus-first matching", description: "Tutors are picked for the exact IB subject and level or the IGCSE code, not for being nearby." },
    { title: "Honest about location", description: "No tutor visits Mahad, and we say so plainly; the lessons are live online one-to-one." },
    { title: "A trial before any payment", description: "A free first lesson shows how the tutor teaches before you decide." },
    { title: "Coaching, not ghost-writing", description: "Tutors guide Internal Assessments, Extended Essays and coursework but never write them." },
    { title: "Written progress notes", description: "After each session you receive a short summary of what was covered and what comes next." },
    { title: "Easy to change", description: "If the fit is wrong, we arrange another tutor; rates are confirmed in writing before you book." },
  ],

  faqs: [
    {
      question: "How do I find an IB tutor in Mahad?",
      answer: "Send us your child's programme, subject, level and exam session, and we propose tutors who teach that exact course. Mahad has no confirmed IB school, so the search is national, and lessons run online. Each shortlist comes with reasons, and a free trial lesson follows before you commit to anything.",
    },
    {
      question: "Do you offer IGCSE tutors in Mahad for Cambridge and Edexcel?",
      answer: "Yes, for both Cambridge and Pearson Edexcel IGCSE, taught online. The tutor works from the specification your child's school follows, such as 0580 Mathematics or 0620 Chemistry. Tell us the board and tier, Core or Extended, so the match is made against the right paper pattern.",
    },
    {
      question: "Do your tutors visit homes in Mahad?",
      answer: "No. Tutors do not travel to Mahad or teach in person here. In-person home tuition runs only in Gurugram and parts of Delhi NCR. In Mahad, home tuition means live one-to-one lessons that your child attends from their own room on a laptop, with the tutor on video.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Mahad?",
      answer: "The rate depends on the course, level, tutor experience and how many sessions a week, and we confirm it in writing before booking. We do not publish prices. Exam-season blocks cost less overall than a year-round plan, and there is no travel charge because every lesson is online.",
    },
    {
      question: "Which schools in Mahad offer IB or IGCSE?",
      answer: "We could not confirm any IB World School or Cambridge or Edexcel centre inside Mahad, so we name none. Families usually look at Panvel, Kharghar or Pune, where several international schools exist. Check the IB and Cambridge directories before relying on any school's claim.",
    },
    {
      question: "My child boards outside Mahad. Can a tutor help in the holidays?",
      answer: "Yes. Holiday blocks suit boarders who return for Diwali, winter or summer. We plan a week or two of daily sessions against the school's term plan, clear backlogs and prepare for the next set of assessments, then pause until the next break with no penalty.",
    },
    {
      question: "Is there a free trial lesson?",
      answer: "Yes, every new student gets one. Your child works through a real topic from their syllabus with the proposed tutor, online, at no cost and with no obligation. You decide afterwards whether to continue, and you can ask for a different tutor if the style did not suit.",
    },
    {
      question: "Can a tutor help with my child's Internal Assessment or Extended Essay?",
      answer: "A tutor can guide, but not write. That means helping choose a researchable question, explaining the criteria, reviewing structure and giving feedback on drafts. The IA, Extended Essay, TOK essay and other coursework must be the student's own work, and we do not accept requests to write them.",
    },
    {
      question: "Which IB Diploma subjects do you cover for Mahad students?",
      answer: "We cover Mathematics AA and AI, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English A, Hindi B, Psychology and Theory of Knowledge, at HL and SL. Tell us the combination your child takes and we will match a tutor for each subject.",
    },
    {
      question: "Do you tutor PYP and MYP, not only the Diploma?",
      answer: "Yes, the whole IB continuum. PYP support centres on reading, number sense and inquiry skills, while MYP tutoring covers criterion-based tasks and the Personal Project. A child in a Mahad family who moves between schools often benefits from steady support at these earlier stages.",
    },
    {
      question: "Is online tuition as effective as home visits for IB or IGCSE?",
      answer: "For these syllabi it works well, because a specialist matters more than proximity. A shared screen, digital whiteboard and past papers let a tutor teach almost everything. The limits are internet reliability and the need for the student to stay focused, so we check the connection in the trial.",
    },
    {
      question: "How are your tutors vetted?",
      answer: "Before matching, we check qualifications, subject experience and recent teaching of the exact syllabus. A tutor must also demonstrate lesson quality in a sample. We do not publish tutor counts or ratings. You judge the fit in the free trial, and a change is arranged if it is not right.",
    },
    {
      question: "When should my child in Mahad start tutoring?",
      answer: "Start at the beginning of the course, Grade 9 for IGCSE or Class 11 for the Diploma, if possible. Early lessons build foundations before pressure rises. A late start still helps, particularly with a focused exam plan, but the earlier plan leaves more room for practice and mistakes.",
    },
    {
      question: "My child is moving from the Maharashtra Board to IGCSE. Can a tutor help?",
      answer: "Yes. The first sessions compare the board syllabus with the IGCSE specification and fill gaps in content, command words and paper format. State Board students often have strong content but need practice with application questions and extended answers, which the tutor trains.",
    },
    {
      question: "Can lessons run on weekends or after school?",
      answer: "Yes. Most Mahad students book weekday evenings after school and Saturday or Sunday mornings. We avoid heavy-rain evenings where possible and plan around Ganeshotsav. Tell us your preferred times and the tutor proposes slots in Indian Standard Time.",
    },
    {
      question: "What if the tutor is not the right fit?",
      answer: "Tell us and we find another one. Progress is reviewed every few weeks, and a change can happen at any time without charge for the switch. The aim is a tutor your child is comfortable asking questions of, which is the strongest sign that lessons will work.",
    },
    {
      question: "Is IB Gram affiliated with any school or examining body?",
      answer: "No. IB Gram is an independent tutoring service. It has no affiliation with the IB, Cambridge, Pearson or any school in Mahad or elsewhere. Names of schools or boards on this page are used only to describe the education landscape and do not imply endorsement.",
    },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How online IB and IGCSE matching works for cities and towns nationwide." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one city where tutors visit homes in person." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subjects for Cambridge and Edexcel." },
    { label: "IB tutors", href: "/ib-tutors/", description: "A look at IB tutoring across programmes and subjects." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, core components and assessment explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and common pitfalls." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Filter tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and book a free trial." },
    { label: "IB and IGCSE tutoring in Panvel", href: "/panvel/", description: "Online tutoring for the nearest Raigad city with international schools." },
    { label: "IB and IGCSE tutoring in Ratnagiri", href: "/ratnagiri/", description: "Konkan-coast tutoring matched in the same way." },
    { label: "IB and IGCSE tutoring in Pune", href: "/pune/", description: "Tutoring for families connected to Pune's international schools." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor in Mahad",
  closingBody:
    "Send the programme or board, the subject and level, your child's current standing and the evenings that suit your household. We will return a tutor chosen for that syllabus, and your child can try a free lesson before any decision. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
