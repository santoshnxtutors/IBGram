import type { CitySeoPage } from "../types";

/**
 * /silao/ - IB and IGCSE tutoring page for Silao, Nalanda district, Bihar. No IB or Cambridge/Edexcel
 * school is confirmed in Nalanda district, so stripSchools is empty and clusters name Patna-linked
 * boarding destinations (Kolkata, Delhi NCR, Mussoorie), labelled as nearby. Angle: the Nalanda and
 * Rajgir heritage belt, khaja town, Bihar Board households. Online-only delivery.
 */
export const silao: CitySeoPage = {
  slug: "silao",
  countryName: "Silao",
  countryNameLong: "Silao, Nalanda, Bihar",
  demonym: "Silao",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions are planned around the summer heat, the July to September rains, Chhath week and the exam calendar of the board or school each student follows",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.0333, longitude: 85.4333 },
  wikipedia: "https://en.wikipedia.org/wiki/Nalanda_district",
  alternateNames: ["Silao Nalanda", "Silav", "Silao Bihar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Silao, Nalanda | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE home tuition for students in Silao, Nalanda, Bihar: DP, MYP, PYP, Cambridge and Edexcel, live one to one on IST with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition in Silao",
  heroEyebrow: "ONLINE IB & IGCSE TUITION IN SILAO, NALANDA",
  heroSubtitle:
    "A family in Silao asking about home tuition for an IB or IGCSE subject is searching for something this stretch of Nalanda district has never had: a tutor who has taught the syllabus. IB Gram delivers one-to-one home tuition online, with a live lesson on a laptop at your own table, a specialist chosen for the exact course, and a free trial first. Nobody visits homes in Silao, because house calls are limited to Gurugram and some Delhi NCR neighbourhoods.",
  primaryKeyword: "IB and IGCSE tutors in Silao",
  imageAltText: "Student in Silao, Bihar, studying IGCSE Chemistry on a laptop with an online tutor",
  secondaryKeywords: [
    "IB tutor Silao",
    "IGCSE tutor Silao",
    "IB home tuition Silao",
    "IGCSE home tuition Silao",
    "IB private tuition Silao",
    "IB Maths tutor Silao",
    "IGCSE Maths tutor Silao",
    "IB Physics tutor Silao",
    "IB Chemistry tutor Silao",
    "IB Biology tutor Silao",
    "IB DP tutor Silao",
    "IB MYP tutor Silao",
    "IB PYP tutor Silao",
    "IGCSE online tuition Silao",
    "IB tutor Nalanda",
    "IGCSE tutor Bihar Sharif",
    "online IB tutor Bihar",
    "IB tutor Silao Nalanda Bihar",
  ],

  heroTrustPoints: [
    "Tutor chosen for the precise syllabus code and level, not for living nearby",
    "Lessons stay online: Silao students need no trip to Patna or Bihar Sharif",
    "Try one full lesson free before any rate is discussed",
    "Parents get a brief written summary after every session",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Every IB stage supported" },
    { value: "May & Nov", label: "Main IB and IGCSE sessions" },
    { value: "IST", label: "No time-zone gap" },
    { value: "Free trial", label: "First lesson on us" },
  ],

  intro: {
    heading: "IB and IGCSE study from a Nalanda district town",
    paragraphs: [
      "Silao is better known for khaja, the crisp layered sweet sold in glass-fronted shops along the road, than for classrooms. It sits in Nalanda district, in the same belt as the ruins of the ancient Nalanda Mahavihara, now a UNESCO World Heritage Site, and the hills of Rajgir. Schools here follow the Bihar Board or CBSE, and a family weighing something different has very little to look at close by.",
      "Who actually asks about IB and IGCSE tutors in Silao? Mostly parents who have a child at a boarding school far from Bihar, households with a government or railway posting that may move them, and families planning a degree overseas. A few are returning from jobs in the Gulf or the West. Sooner or later each of them learns that nobody in the district has coached an IB internal assessment or an IGCSE Extended paper.",
      "So the search for IB and IGCSE tutors in Silao ends outside Bihar, on a video call. A subject specialist sits with your child on a live call, alone with them, on IST evenings. We are an independent service, unconnected with the IB, Cambridge, Pearson or any school. Our tutors coach and mark; Internal Assessments, Extended Essays and TOK essays are written by the student alone.",
      "To be plain about home tuition: no tutor knocks on a door in Silao, since house calls belong to Gurugram and a few Delhi NCR areas. What a Silao family can have is online home tuition, the lesson taken in your own living room, with the teacher on screen and the whiteboard shared.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP with stage-specific tutors",
      "Cambridge and Pearson Edexcel IGCSE across Core, Extended, Foundation and Higher",
      "Live video lessons timed for evenings and weekends",
      "Free trial, then rates in writing before booking",
      "No house calls in Silao; those are kept for Gurugram and a few Delhi NCR areas",
    ],
  },

  programmesIntro:
    "The four IB programmes make different demands, and a family in Silao usually meets one of them through a boarding school elsewhere or a relocation plan. Below is what each requires and how it looks from a Nalanda district home.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Instead of daily textbook chapters, children follow units of inquiry built around a central idea. The programme closes with an Exhibition in the final year, a project the pupils largely drive themselves.",
      countryNote:
        "A Silao child heading into a PYP school after a Bihar Board or CBSE start often needs spoken English confidence and practice at explaining thinking, which is where we begin.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Classes 6 to 10, ages 11-16",
      description:
        "Each subject is marked against criteria rather than a single score, and the programme ends with a Personal Project. Explaining a method counts alongside reaching an answer.",
      countryNote:
        "Pupils moving from Bihar Board syllabuses meet this shift hardest in Sciences and Individuals and Societies, where reasoned paragraphs replace short factual answers.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Classes 11 and 12, ages 16-19",
      description:
        "Students take six courses, half at Higher Level, and add TOK, a 4,000-word research essay and service activities. Most courses carry a school-marked piece that is moderated.",
      countryNote:
        "Silao students on this path are enrolled elsewhere or sitting as private candidates, so we line preparation up with the exact session they are registered for rather than a generic timetable.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Classes 11 and 12, ages 16-19",
      description:
        "A compact route that blends a couple of Diploma courses with vocational study and a reflective project. Very few Indian schools offer it.",
      countryNote:
        "We hear almost nothing about CP from the Silao area. If it comes up, tutoring centres on the Diploma subjects within the student's package.",
    },
  ],

  subjectsIntro:
    "Saying a child studies IB tells a tutor very little. Course, level and exam session do the real work, so those come first when we match, and only afterwards do evening slots and preferences enter.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof under timed conditions. Paper 3 at HL asks for stamina on unfamiliar problems, and the exploration rewards an early, well-scoped topic." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data handling, probability models and calculator technique. Students used to symbolic-only board papers need practice interpreting real contexts." },
    { name: "IB Physics", levels: "HL / SL", description: "From mechanics to fields, with the data booklet used fluently and an investigation whose design the student can explain aloud." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, kinetics, energetics and organic pathways, with quantitative habits built through frequent short drills." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology to ecology, where precise command-term answers decide the marks more than extra content does." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, real-world examples and evaluation. Bihar's own agricultural and migration economy offers good material for case work." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying theory to a stated case, with the internal assessment resting on a genuine organisation and honest data." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen passages, comparative writing and a recorded oral, for students whose schooling leaned on a single prescribed anthology." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and a documented software project with clear design notes." },
    { name: "IB Psychology", levels: "HL / SL", description: "Accurate recall of named studies, arranged into structured arguments, plus an experimental internal assessment." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study depth and fieldwork. River systems, floodplain land use and heritage tourism around Nalanda give living examples." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and essay argument. Students from the Nalanda region often bring unusual enthusiasm for ancient and medieval periods." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, formal and informal writing and spoken practice for students who use Magahi or Hindi at home." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation-led coaching on titles and the exhibition, encouraging students to weigh more than one way of knowing." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel use similar names for different papers. We begin with board, code and tier, then plan backwards from the sitting the student is registered for.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended candidates lose most marks through skipped working and misread command words, not missing knowledge." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Differentiation, trigonometry and functions, a useful run-up to Maths AA at Higher Level." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Familiar topics framed in Pearson's house style, needing practice on its own papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Fast rearrangement of equations, circuits and waves, with practical-skills questions drilled all year." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactivity and organic basics, with data-analysis questions built into regular practice." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Inheritance, transport and ecosystems, with answers organised to match mark schemes." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Accurate diagrams first, then balanced evaluation in longer answers." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Flowcharts, trace tables and short Python programs practised next to the theory." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Persuasive and descriptive writing plus summary skills, with timed unseen reading each week." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "Comprehension and composition for students who speak Magahi at home." },
  ],

  regionsTitle: "Silao and nearby Nalanda district places we teach",
  regionsIntro:
    "Everything runs on screen, so these places show context only: how families in each corner of the district tend to study, and when an evening online lesson fits around work, markets and school.",
  regions: [
    { name: "Silao Bazar", note: "The commercial heart, busy with sweet shops and traders; evening lessons usually begin after the shops wind down." },
    { name: "Nalanda ruins area", note: "Close to the UNESCO-listed Mahavihara site; families here include guides, hoteliers and teachers with regular exposure to visitors from abroad." },
    { name: "Bihar Sharif", note: "The district headquarters, with the widest set of schools, coaching centres and government offices in Nalanda." },
    { name: "Rajgir", note: "A hill town of temples and hot springs, also home to Nalanda University; its own page covers the Rajgir side in more detail." },
    { name: "Giriyak", note: "A rural block to the south-east; reliable mobile data is the main practical question for lessons." },
    { name: "Hilsa", note: "A town toward the Patna side of the district, with agriculture and trading households and frequent bus links to the capital." },
    { name: "Islampur", note: "A town in the district's north-west, with students who sometimes travel to Patna for coaching." },
    { name: "Ekangarsarai", note: "A block-level town with mostly Bihar Board households and growing interest in broader qualifications." },
    { name: "Pawapuri", note: "A pilgrimage site of the Jain tradition, with a mix of temple trusts, farming families and teachers." },
  ],

  schoolDisclaimer:
    "The schools below are context, nothing more: they show where Nalanda district families search when a classroom with IB or Cambridge status is the goal. IB Gram stands apart from all of them and from the three examining organisations, with no contract or endorsement involved.",
  schoolClusters: [
    {
      city: "Local: Silao and Nalanda district",
      note: "Checking turned up no authorised IB World School and no listed Cambridge or Edexcel centre anywhere in Nalanda district, so the list is blank. Nearby schools teach the Bihar Board or CBSE courses.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The usual eastern destination for families seeking a confirmed IB or IGCSE school, reachable by overnight train from Bihar.",
      schools: ["Calcutta International School", "The Heritage School, Kolkata"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Several confirmed IB and IGCSE schools, mostly day schools, chosen by families who have relocated or by those who can arrange a guardian.",
      schools: ["The British School, New Delhi", "Pathways World School, Gurugram"],
    },
    {
      city: "Nearby: Mussoorie",
      note: "A long-established boarding school in the hills of Uttarakhand, a considered choice for families who want a residential setting.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],

  modesIntro:
    "Each format below is a live video call between one tutor and one student. Only the tempo changes. Nobody arrives at a Silao doorstep for any of them; house calls belong to Gurugram and some Delhi NCR areas.",
  modes: [
    {
      title: "A weekly one-to-one slot",
      description:
        "A set evening or weekend hour for each subject, with a live whiteboard and past papers open on both screens. Most Silao families begin here.",
      bullets: [
        "One tutor for the whole term",
        "Suits the DP, the MYP and either IGCSE board",
        "Homework marked against the live criteria",
        "A short summary sent after every lesson",
      ],
    },
    {
      title: "A term plan with checkpoints",
      description:
        "Lessons laid out across the whole syllabus, with a review every few weeks that reshapes the plan whenever a topic resists.",
      bullets: [
        "Topic order tied to the registered sitting",
        "Short written review every month or so",
        "Good for younger primary and middle years pupils",
        "Extra sessions slot in ahead of school mocks",
      ],
    },
    {
      title: "Concentrated revision before exams",
      description:
        "A brief, high-tempo run of sessions built on timed papers and fast marking, booked a fortnight or three weeks before paper one.",
      bullets: [
        "Scripts returned within two days",
        "Shaky topics rebuilt rather than re-read",
        "Scheduled around Chhath and summer heat",
        "Delivered online, from your own room",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools near Silao, and who studies these courses?",
      paragraphs: [
        "Our checks found no IB World School and no listed Cambridge or Edexcel IGCSE centre in Nalanda district, so we put no name forward. Schools in Silao, Bihar Sharif and Rajgir follow the Bihar Board or CBSE, with a few private English-medium institutions of local repute. That is the honest baseline for any family considering a switch.",
        "The households that approach us fall into recognisable groups. Parents of a child already at a boarding school in Kolkata, Delhi NCR or Mussoorie. Families in transferable jobs, such as railways, banking or the central services, who expect to be moved. And those with a long-term plan for university abroad who see the IB or IGCSE as a more portable record than a board certificate.",
        "A student in this position often studies as a private candidate, registered through a school or centre in another city. That works, but it leaves a gap, since there is nobody locally who has guided a student through an IB Extended Essay timetable or an IGCSE practical paper.",
        "Closing that gap is what IB Gram is for. A tutor with direct experience of the course is found, and schooling and registration remain entirely your family's decisions. The table below names schools purely as context.",
      ],
      table: {
        caption: "Where Nalanda district families look for IB and IGCSE schooling",
        columns: ["Place", "What is confirmed", "Typical route from Silao"],
        rows: [
          ["Silao and Nalanda district", "No IB or IGCSE school confirmed; Bihar Board and CBSE", "Not applicable"],
          ["Kolkata", "IB and IGCSE schools confirmed (Calcutta International School, Heritage School)", "Overnight train or flight from Patna"],
          ["Delhi NCR", "IB and IGCSE schools confirmed (British School, Pathways)", "Train or flight from Patna"],
          ["Mussoorie", "IB boarding school confirmed (Woodstock School)", "Train to Dehradun, then road"],
        ],
      },
      bullets: [
        "No IB or IGCSE school is confirmed in Nalanda district",
        "Boarding and relocation drive most enquiries",
        "Private candidates rely on specialist tutoring",
        "Lessons are online, matched to the registered course",
      ],
    },
    {
      heading: "How do the Bihar Board and CBSE compare with IB and IGCSE?",
      paragraphs: [
        "Bihar Board and CBSE papers reward a student who has memorised the prescribed chapters and can reproduce them clearly under time. IB and IGCSE assume that foundation and then ask a second question: can you use it somewhere new? An IGCSE Extended Physics paper may present a device the student has never seen and expect the right principle to be applied.",
        "The assessment structure differs too. In the IB, internal assessments are marked against published criteria and contribute to the final grade, and IGCSE has coursework or practical elements in several subjects. A student from a board background has usually never planned an experiment, drafted a report and revised it against a rubric, so that process needs deliberate teaching.",
        "Depth shifts as well. IB Higher Level Maths and sciences exceed Class 12 board content in several areas, whereas IGCSE Core aligns roughly with Class 9 and 10 and Extended pushes beyond it. Choosing a tier in Grade 9 therefore decides how comfortable the Diploma will be.",
        "Neither path is superior in every case. A student aiming at JEE or NEET from Bihar may do very well on the board route, which matches the national tests closely. The IB and IGCSE make most sense with a specific destination in mind, such as study abroad or a family move.",
      ],
      table: {
        caption: "Bihar Board and CBSE against IB and IGCSE",
        columns: ["Feature", "Bihar Board / CBSE", "IB / IGCSE"],
        rows: [
          ["What earns marks", "Accurate reproduction of the syllabus", "Applying ideas to new situations"],
          ["Coursework", "Light in most subjects", "Internal assessment in IB; practical elements in IGCSE"],
          ["Fit with JEE and NEET", "Close match to the exam syllabus", "Needs extra topic work and equivalence checks"],
          ["Usual switch point", "Remain from Class 1", "Grade 9 for IGCSE, Class 11 for the Diploma"],
        ],
      },
      bullets: [
        "Board papers test recall; IB and IGCSE test application",
        "Internal assessment is a new skill for most switchers",
        "Tier choice in Grade 9 matters for the Diploma",
        "Board study remains strong for JEE and NEET aspirants",
      ],
    },
    {
      heading: "What does IB or IGCSE home tuition cost for a family in Silao?",
      paragraphs: [
        "We do not print a price list, because the fee depends on several things at once: programme, subject, level, session length and how many tutors currently teach that exact course. HL Diploma sciences cost more than MYP English or IGCSE Core Maths. You receive a figure in writing before you decide.",
        "Where you live does not move the price. A tutor teaching from Pune or Chennai charges the same for a Silao student as for anyone else, since an online lesson has no travel, no petrol and no waiting. There is nothing extra for being in a district town.",
        "Think in terms of what an hour delivers. A tutor who knows the common errors in a particular command term can resolve in one session what might otherwise linger for weeks. Ask what the lesson will cover and how you will hear about progress. These questions say more than the hourly figure does.",
        "There is no contract. A family can pause sessions during Chhath week or a long summer break, and ask for a different tutor if the trial does not feel right. The free first lesson is there so you pay only for a match that works.",
      ],
      bullets: [
        "Fee depends on subject, level and session length",
        "No travel charge of any kind",
        "Rates are confirmed in writing before booking",
        "Pause or stop whenever you need to",
      ],
    },
    {
      heading: "Online tutoring against Bihar Sharif coaching, home teachers and self-study",
      paragraphs: [
        "Coaching in Nalanda district and in Patna is built for Bihar Board exams and the JEE, NEET and competitive-service tests. Large batches, printed notes and test series do that job well. None of it is organised around IB Physics HL or IGCSE Biology, so a student has to translate it alone.",
        "Teachers who visit homes in Silao and Bihar Sharif are a long tradition, and many are skilled. They teach what the nearby schools teach, though. Someone who has never opened an IB command-term list or an IGCSE mark scheme can explain content well and yet miss what the examiner rewards.",
        "Self-study with past papers works for IGCSE Mathematics and some sciences, but it falters wherever feedback matters: internal assessments, essays, extended responses and orals. A student cannot see their own blind spots on those tasks.",
        "Online one-to-one lessons draw on a national pool, so a Silao student can learn from a person who has taught that particular course for many years. The price paid is a dependable connection and, through Bihar's hot season, a plan for power cuts.",
      ],
      table: {
        caption: "Study options compared for a Silao student",
        columns: ["Option", "Knows IB or IGCSE", "Personal attention", "Main limit in Nalanda district"],
        rows: [
          ["Local coaching centres", "No", "Large batches", "Designed for board and entrance exams"],
          ["Local home teachers", "Rarely", "One to one", "Few have taught these syllabuses"],
          ["Self-study", "Only what the student finds", "None", "Weak on assessed written work"],
          ["Online IB or IGCSE tutor", "Matched on course and level", "One to one", "Needs reliable connectivity and power backup"],
        ],
      },
      bullets: [
        "Local coaching serves board and entrance exams",
        "Home teachers rarely know IB or IGCSE mark schemes",
        "Self-study lacks feedback on essays and investigations",
        "Online tutors are matched on the exact course",
      ],
    },
    {
      heading: "How do heat, rains, Chhath and fog shape the Silao study year?",
      paragraphs: [
        "Summers in this part of Bihar are fierce, with hot dry winds from April to June, and afternoon power cuts are common. Evening lessons, after the worst heat passes, tend to work best. A charged laptop and a phone hotspot are worth keeping ready.",
        "The rains arrive in July and run into September, sometimes flooding low-lying fields and disrupting roads and connections. Winter brings dense fog in December and January, which rarely affects online lessons but often disrupts school travel and sleep patterns.",
        "Chhath, in October or November, is the great family occasion of the year, with preparations and fasting spread over several days. Holi in March and Saraswati Puja in late winter also move the calendar. We build these into the plan so that no student loses revision time unexpectedly.",
        "On the exam side, the IB Diploma sits in May with results in early July, and some candidates take a November session. Cambridge IGCSE runs May-June and October-November, and Edexcel IGCSE has January and May-June sessions. Confirm with the registering school which window applies.",
      ],
      table: {
        caption: "The Silao year against IB and IGCSE sessions",
        columns: ["Time of year", "Local conditions", "What it means for lessons"],
        rows: [
          ["April to June", "Heat and afternoon power cuts", "Evening slots; keep a backup power source"],
          ["July to September", "Monsoon rains", "Mind connectivity; good time for steady weekly work"],
          ["October to November", "Chhath and the Cambridge autumn session", "Plan around the festival; use the quiet weeks for revision"],
          ["December to January", "Dense fog and cold", "Online lessons continue; January suits Edexcel preparation"],
        ],
      },
      bullets: [
        "Evening lessons avoid summer heat",
        "Rains and fog affect travel more than online sessions",
        "Chhath week is scheduled into the plan",
        "Diploma papers in May; IGCSE series in winter, summer and autumn depending on board",
      ],
    },
    {
      heading: "Where do Silao students go after the IB or IGCSE?",
      paragraphs: [
        "Within Bihar, Patna is the centre of gravity, with Patna University, NIT Patna, IIT Patna and AIIMS Patna. Nalanda University at Rajgir is a newer international institution with its own admission rules. Nearby, the heritage of ancient Nalanda gives a particular resonance to students interested in history, archaeology or Buddhist studies.",
        "For admission to central universities, CUET-UG is widely used, while the Association of Indian Universities certifies equivalence for the Diploma, and for IGCSE paired with a suitable Class 12 route. JEE and NEET eligibility turns on subjects and levels, so ask the testing agency early.",
        "Overseas, admissions offices in Britain, Canada, Australia and America read both qualifications fluently. British offers frequently quote a points total plus Higher Level minimums, which gives the predicted grades filed in autumn of the final year real weight.",
        "Our involvement ends at the academic side. We can describe what a course tends to demand in Maths or the sciences, while applications, visas and funding sit with your school or an admissions counsellor. Subject depth and exam technique are the job.",
      ],
      bullets: [
        "Patna offers Patna University, NIT, IIT and AIIMS",
        "Nalanda University at Rajgir has its own rules",
        "CUET-UG and AIU equivalence apply to national routes",
        "Overseas universities read both qualifications",
      ],
    },
    {
      heading: "IB Maths AA and AI and the sciences for Silao students",
      paragraphs: [
        "Analysis and Approaches is built for students who will lean on calculus and proof later, in engineering, physics or economics. HL Paper 3 throws up problems nobody has seen, and patience pays. Applications and Interpretation is more statistical, and its exploration is where late starters shed most marks.",
        "Physics HL requires data-booklet fluency, careful timing across Papers 1 and 2, and an investigation whose method can survive questioning. Bihar Board graduates usually know the formulas but have seldom practised writing a clear justification, which the mark scheme explicitly rewards.",
        "Chemistry HL builds from bonding to energetics and organic mechanisms, and Biology hinges on command terms and precise wording. Both need regular timed work against the real rubric and feedback after each attempt.",
        "Without a local IB classroom, the quickest route to improvement is a specialist matched by course and current syllabus, working live through papers. Geography and History students have an extra resource in Nalanda's own heritage and river landscape for case studies.",
      ],
      bullets: [
        "Pick AA for proof and calculus, AI for data and modelling",
        "Physics and Chemistry HL both depend on a defensible investigation",
        "Biology turns on command terms",
        "Local heritage offers Geography and History case material",
      ],
    },
    {
      heading: "Core or Extended: which IGCSE tier should a Silao student take?",
      paragraphs: [
        "Core and Extended place different ceilings on the final grade, so the choice made in Grade 9 matters twice: for the IGCSE result and for readiness for the Diploma. Extended is the sensible tier for anyone who may take Maths AA or HL sciences later.",
        "Pairing Extended 0580 with Additional Mathematics 0606, when a centre offers it, builds the best base for HL Maths. Extended sciences do similar work ahead of DP Physics and Chemistry.",
        "Edexcel candidates need Edexcel papers, since Foundation and Higher questions are worded and ordered differently from Cambridge ones. The mathematics is shared; the exam habits are not.",
        "Subject choice finally rests with the registering school or centre, so we tutor whatever the student has actually signed up for rather than an ideal combination on paper.",
      ],
      bullets: [
        "Extended fits students heading for HL",
        "Additional Mathematics 0606 leads into Maths AA HL",
        "Practise on the right board's papers",
        "The registering centre fixes the subject list",
      ],
    },
    {
      heading: "How does IB Gram choose a tutor for a Silao family?",
      paragraphs: [
        "A brief exchange opens things: board, subject code, level, session and the sticking point. A tutor with recent experience of that course is put forward, and a free trial follows. A poor fit means a new tutor, with no fee.",
        "Once a lesson ends, a brief note records the ground covered and the plan for next time. Parents can follow without joining the call, and the notes form a trail should a school ask how things stand.",
        "The rate arrives in writing before any booking, and every session keeps IST. Contact support@ibgram.com or WhatsApp +91 7439 368 115 and a proposed tutor and some slots will come back to you.",
        "A tutor teaches and marks, nothing beyond. Internal Assessments, Extended Essays, TOK essays and other graded work stay with the student, which keeps both the result and the qualification honest.",
      ],
      bullets: [
        "Give the board, code, level and session",
        "A tutor with that course behind them is proposed",
        "A free trial lesson comes first",
        "A summary follows every session",
      ],
    },
  ],

  process: [
    { title: "Name the course", description: "Pass on the board, subject, level and sitting through WhatsApp or email, plus whatever is causing trouble." },
    { title: "Look at the proposed tutor", description: "A tutor who has taught the same course is suggested, with a few evening time options." },
    { title: "Try a lesson free", description: "Log in from your own table, work a real question jointly and decide whether the style suits." },
    { title: "Settle it on paper", description: "The weekly plan and the rate are written out before the trial becomes anything binding." },
    { title: "Carry on", description: "Weekly lessons, a summary each time, periodic reviews, and a swap of tutor whenever it would help." },
  ],

  whyPoints: [
    { title: "Picked for the course", description: "The match rests on the precise syllabus code and level, so a Silao student is not confined to whoever lives close." },
    { title: "Straight about Nalanda district", description: "We state openly that no local IB or IGCSE school could be confirmed, and name only what we can verify." },
    { title: "Built around local weather", description: "Evening slots dodge the afternoon heat and power cuts, with room around Chhath and exam weeks." },
    { title: "A note for parents", description: "A summary lands after each session, so parents see progress without attending." },
    { title: "Coaching only", description: "Tutors explain and mark. Internal Assessments, Extended Essays and TOK essays stay the student's own." },
    { title: "Try before you pay", description: "A free first lesson, rates on paper beforehand, and a no-cost swap if the match is off." },
  ],

  faqs: [
    { question: "Can I find an IB tutor in Silao?", answer: "Nobody teaching face to face in Silao that we could verify, so IB Gram delivers IB tutoring online instead. A specialist for the exact course, say Physics HL or Maths AI SL, teaches your child live and alone with them, using IST hours. Your child's first lesson costs nothing, which lets you judge the fit." },
    { question: "Do you offer home tuition in Silao?", answer: "Our version is online home tuition: a private live lesson your child takes from their own desk on a laptop. No tutor visits a Silao home, as house calls are confined to Gurugram and some Delhi NCR areas. In exchange, the whole country's tutors become available rather than only neighbours." },
    { question: "Is there an IB or IGCSE school in Silao or Nalanda district?", answer: "Verification found none, so none is listed. Schools throughout Nalanda district teach Bihar Board or CBSE courses. Parents wanting an IB or IGCSE classroom tend to look at Kolkata, Delhi NCR or Mussoorie, and our tutors support whichever school or centre your child registers with." },
    { question: "How much does an IB or IGCSE tutor cost?", answer: "Pricing moves with the programme, the subject, the level and how long each session runs, and it is sent to you in writing before booking. Higher Level Diploma courses normally cost above MYP or IGCSE Core. A Silao address changes nothing, since online lessons have no travel element, and the trial is free." },
    { question: "Can a Bihar Board student move to IGCSE?", answer: "It can be done, usually at Grade 9. Much of the content is familiar, but the papers lean on application and command words that board exams rarely use, and a tutor can build that habit early. Whether Cambridge or Edexcel applies depends on the registering school or centre." },
    { question: "What IB subjects can you teach?", answer: "Coverage runs from Maths AA and AI through the three sciences, Economics, Business, English A, Computer Science, Psychology, Geography, History and Hindi B to TOK, at HL or SL where the course exists. Give us the course and level and we will check a suitably experienced tutor is free." },
    { question: "Will my tutor write my Internal Assessment?", answer: "No. A tutor clarifies criteria and comments on drafts the student wrote, yet never produces or finishes an Internal Assessment, Extended Essay, TOK essay or other graded piece. That keeps the grade honest and within the rules of the IB and the exam boards." },
    { question: "How do power cuts and summer heat affect lessons?", answer: "Power often drops in the afternoons between April and June, so evening slots, when it is cooler and the supply steadier, work better. Charge the laptop and keep a phone hotspot nearby. If a lesson is lost it gets rebooked, and the post-session summary keeps the plan intact." },
    { question: "Is internet in Silao good enough for video lessons?", answer: "In Silao and Bihar Sharif most households can run a video call over steady broadband or decent 4G. Try the connection beforehand in the room you will really use. A laptop with a camera is ideal, though a tablet copes with Maths and sciences on a shared whiteboard." },
    { question: "When are the IB and IGCSE exams held?", answer: "Diploma papers are written in May, results follow in early July, and a few candidates take November. Cambridge IGCSE has summer and autumn series, while Edexcel adds January. Exact dates come from the school or centre that entered your child." },
    { question: "How early should we begin preparing?", answer: "Diploma students gain most by beginning in April or May of Class 11, which leaves room for foundations and internal assessments. IGCSE candidates ideally begin when Grade 10 opens. Later is workable, but then the plan targets the topics worth most marks instead of the full syllabus." },
    { question: "Can you teach Hindi for IGCSE or IB?", answer: "Yes, for IGCSE Hindi as a Second Language and IB Hindi B, working on comprehension, composition and speech with students from Magahi or Hindi-speaking homes. For any other language, send the subject code and we will say whether a tutor exists before the trial is set up." },
    { question: "What if the tutor is not right for my child?", answer: "Say so after the trial or any time later and we will propose someone else without extra cost. That is the point of the free first lesson. Nobody has to stay with a poor match, and sessions can stop or pause quickly." },
    { question: "Which universities accept IB and IGCSE students from Bihar?", answer: "Universities in Britain, Canada, Australia and America accept both. At home, the Association of Indian Universities provides equivalence, and CUET-UG is the usual doorway to central universities. Policies shift, so read each institution's present rules for IB and IGCSE applicants." },
    { question: "How do I get started?", answer: "Write to support@ibgram.com or WhatsApp +91 7439 368 115 listing the board, subject, level and sitting. A tutor suggestion and some evening times come back, the first lesson costs nothing, and the rate is put in writing before any commitment." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in India", href: "/india/", description: "A map of the cities where we teach IB and IGCSE online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Specialists across the Diploma and Middle Years." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel tutors listed by subject and tier." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The Diploma's structure and the points where help counts." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led learning for the youngest pupils." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Both Maths courses at Higher and Standard Level." },
    { label: "Contact us", href: "/contact-us/", description: "Request a tutor or book the free first lesson." },
    { label: "IB and IGCSE tutors in Rajgir", href: "/rajgir/", description: "The heritage hill town nearby, also in Nalanda district." },
    { label: "IB and IGCSE tutors in Patna", href: "/patna/", description: "The state capital and gateway city for Bihar students." },
    { label: "IB and IGCSE tutors in Gaya", href: "/gaya/", description: "Online tuition for families in the neighbouring Magadh region." },
  ],

  closingHeading: "Book a first live lesson from your Silao home",
  closingBody:
    "Give us the board, subject and level and a tutor with experience of that course will be put forward. The opening lesson is free, the rate is put in writing first, and swapping tutor is always possible. Reach us at support@ibgram.com or on WhatsApp, +91 7439 368 115.",
  tutorsIntro:
    "Our tutors live in different parts of India and appear on screen for Silao pupils, alone with one student at a time, on IST. Each has taught the course beside their name, and a free lesson shows how they handle a genuine problem.",
};
