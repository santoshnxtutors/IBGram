import type { CitySeoPage } from "../types";

/**
 * /fatehpur-sikri/ - IB and IGCSE tutoring page for Fatehpur Sikri, the Mughal town in Agra district,
 * Uttar Pradesh. No school in the town is confirmed to offer IB or Cambridge/Edexcel IGCSE, so
 * stripSchools is empty and the clusters point honestly to Agra (Sharda World School) and to the
 * Gurugram boarding schools already verified on /agra/. Online only; no home visits.
 */
export const fatehpurSikri: CitySeoPage = {
  slug: "fatehpur-sikri",
  countryName: "Fatehpur Sikri",
  countryNameLong: "Fatehpur Sikri, Uttar Pradesh",
  demonym: "Fatehpur Sikri",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around the winter tourist season, the Urs and Diwali weeks, the loo-heated afternoons of May and June, and each student's own school or boarding calendar",
  lastUpdated: "2026-09-21",
  geo: { latitude: 27.0911, longitude: 77.6611 },
  wikipedia: "https://en.wikipedia.org/wiki/Fatehpur_Sikri",
  alternateNames: ["Fatehpur Sikari", "Fatehpursikri", "Sikri"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Fatehpur Sikri | Online Home Tuition",
  metaDescription:
    "Private IB and IGCSE tutors for Fatehpur Sikri families, taught live online one to one by subject specialists. Diploma, MYP, Cambridge and Edexcel. Free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Fatehpur Sikri",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR FATEHPUR SIKRI STUDENTS",
  heroSubtitle:
    "Private tuition from home, delivered on a laptop: that is how a student in Fatehpur Sikri can now work with a specialist in IB Diploma, MYP or Cambridge and Edexcel IGCSE subjects without leaving the town. Lessons are one to one and live, timed to Indian Standard Time, and based on the actual syllabus code your child is sitting. Tutors do not travel to Fatehpur Sikri; in-person home visits run only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Fatehpur Sikri",
  imageAltText: "Student in Fatehpur Sikri working through an IB Physics problem set with a tutor on a live video lesson",
  secondaryKeywords: [
    "IB tutor Fatehpur Sikri",
    "IGCSE tutor Fatehpur Sikri",
    "IB home tuition Fatehpur Sikri",
    "IGCSE home tuition Fatehpur Sikri",
    "IB private tuition Fatehpur Sikri",
    "IB Maths tutor Fatehpur Sikri",
    "IGCSE Maths tutor Fatehpur Sikri",
    "IB Physics tutor Fatehpur Sikri",
    "IB Chemistry tutor Fatehpur Sikri",
    "IB Biology tutor Fatehpur Sikri",
    "IB DP tutor Fatehpur Sikri",
    "IB MYP tutor Fatehpur Sikri",
    "IB PYP tutor Fatehpur Sikri",
    "IGCSE online tuition Fatehpur Sikri",
    "online IB tutor near Agra",
    "IB tutor Fatehpur Sikri Agra district",
    "IGCSE tutor Fatehpur Sikri Uttar Pradesh",
    "Cambridge IGCSE tuition Fatehpur Sikri",
  ],

  heroTrustPoints: [
    "Tutors chosen for the exact syllabus code and level, not a general 'international curriculum' label",
    "Entirely online; no tutor visits homes in Fatehpur Sikri, as home visits exist only in Gurugram and parts of Delhi NCR",
    "A free trial lesson to judge the fit before any commitment",
    "A short written note after every session, so parents can see what was covered",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Primary years through the Diploma" },
    { value: "Two boards", label: "Cambridge and Pearson Edexcel IGCSE" },
    { value: "IST", label: "Same clock as your tutor" },
    { value: "Free trial", label: "One lesson before you decide" },
  ],

  intro: {
    heading: "Why families in Fatehpur Sikri look for IB and IGCSE tutors online",
    paragraphs: [
      "Fatehpur Sikri is a town of about thirty-three thousand people living around a UNESCO World Heritage Site, and its classrooms follow the rest of western Uttar Pradesh: UP Board, CBSE and a little ICSE. We could not confirm a school in the town itself that teaches the IB or a Cambridge or Edexcel IGCSE course. A family that wants one of those qualifications for a child therefore has to look outward, towards Agra, Delhi NCR or a boarding campus, or prepare at home with the right teacher.",
      "That is the gap IB and IGCSE tutors in Fatehpur Sikri are asked to fill, and it is mostly filled on a screen. A student sits at a desk in Sikri or along the Agra road, opens a video call, and works through a Maths AA problem set or an IGCSE Chemistry paper with a tutor who has taught that exact specification before. The lesson is live, private and recorded in a short written summary for parents afterwards.",
      "The households that contact us tend to run hotels, guide services, handicraft workshops or export units tied to the monuments, to serve in government posts at the tehsil, or to have relatives in Dubai, London or Canada who have raised the question of an international qualification. Some children board in Agra or Gurugram and need support in the holidays. Others are moving between curricula and cannot find a local teacher who knows the new one.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, with tutors who know each stage",
      "Cambridge and Pearson Edexcel IGCSE at Core, Extended, Foundation and Higher",
      "Live one-to-one video lessons on Indian Standard Time",
      "A free trial lesson, then rates quoted in writing before you book",
      "No home visits in Fatehpur Sikri; in-person tuition is limited to Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is taught in Fatehpur Sikri itself, so families here meet them through a boarding decision, a transfer, or a plan to prepare a child privately for exams set elsewhere. Below is what each stage asks of a student, and how tutoring tends to be used by families from the town.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Learning is organised around transdisciplinary themes rather than a fixed subject timetable, so a single unit might draw on reading, number sense, science and art together. In the final year a child carries out a self-directed Exhibition, choosing a real issue and researching it with a mentor nearby.",
      countryNote:
        "For a primary child from Fatehpur Sikri the usual request is fluency in English reading and writing, plus patient help turning a curious question into a small piece of research, since no neighbourhood teacher has worked with inquiry units.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is graded against four criteria, and a student is judged on how well the argument is built rather than on recall alone. The five-year course closes with a Personal Project and, in many schools, externally moderated assessment.",
      countryNote:
        "Students from UP Board and CBSE backgrounds usually find criterion-based writing in Sciences and Individuals and Societies the biggest adjustment, which is where tutor feedback on a draft makes the clearest difference.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects are studied over two years, three at Higher Level and three at Standard, alongside Theory of Knowledge, the Extended Essay and a service strand. Internal assessments feed into the final grade and the written papers are sat in May.",
      countryNote:
        "A Diploma student linked to Fatehpur Sikri is almost always working away from town or privately, so support is concentrated on Maths, a science and English, started early in Class 11 rather than in the second year.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A student combines at least two Diploma courses with a career-related study, a reflective project and personal and professional skills. It is a narrower route, offered by relatively few schools in India.",
      countryNote:
        "Enquiries from the town are rare; where they arise, tutoring simply covers the Diploma courses inside the student's CP package.",
    },
  ],

  subjectsIntro:
    "An 'IB Maths student' might be taking Analysis and Approaches at Higher Level or Applications and Interpretation at Standard, and those are different courses with different papers. Tutoring begins by pinning down the course, the level and the exam session, then looks at where marks are actually being lost. Subject pages below describe what each course asks of a student rather than what a brochure says.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof-flavoured reasoning for students heading to engineering, economics or pure science. HL Paper 3 supplies long investigative problems that reward composure; the exploration needs a topic chosen early." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology use dominate, with the graphic display calculator central to most papers. Students from CBSE often need to learn how to justify a model rather than only compute with it." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, fields, thermal physics and waves tested through reasoning as much as formula. The practical investigation is assessed on design, data handling and evaluation, so a student needs a question that can really be measured." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure and bonding, energetics, kinetics and organic mechanisms, with a data booklet that should be second nature by the second year. The investigation asks for a variable that can be controlled with school-lab equipment." },
    { name: "IB Biology", levels: "HL / SL", description: "Ecology, cell biology, genetics and physiology, tested largely through command terms: describe, explain, evaluate. A student who knows the content can still lose marks by answering a different question from the one asked." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy and current, specific examples carry the paper. HL adds quantitative questions on elasticity, national income and trade, and a Paper 3 policy task." },
    { name: "IB Business Management", levels: "HL / SL", description: "Theory is only credited when applied to the organisation described in the case. Students from trading and hospitality families often bring real examples, which helps." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close analysis of unseen texts, comparative essays on set works and an oral that tests spoken argument. Speaking fluently about a text is a skill that needs practice with a listener." },
    { name: "IB Hindi A or B", levels: "HL / SL", description: "Hindi is a home language for most students from the town, so the work is on formal analytical writing, text types and comparison, not basic fluency." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Systems, networks, data structures and programming in a pseudocode-and-Java context, with an internally assessed solution that must be documented properly." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation, essay construction and prescribed topics. Students who grew up beside Mughal monuments often arrive with interest, but need training in argument and evidence." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches to research, studies that must be recalled accurately and extended-response structure. The internal experiment needs a feasible design and sound analysis." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "A systems-based course combining science and policy; strong answers weigh several viewpoints and cite specific case material." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion of how knowledge claims are justified. Tutors talk through the exhibition and essay prescribed titles but do not draft the assessed work." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE share names but not papers. A 0580 Extended candidate and a 4MA1 Higher candidate are preparing for different question styles, so the board, the tier and the sitting are fixed first. After that the plan works backwards from the date of the written exam.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tier asks for algebra, trigonometry, vectors and functions, with a non-calculator paper that punishes slow arithmetic. Working must be shown on every line." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus, logarithms and trigonometric identities. It lifts students noticeably into IB Maths AA at Higher Level." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Familiar content, but papers are sequenced and phrased differently from Cambridge, so past Edexcel papers matter." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, electricity, waves and atomic physics, with an alternative-to-practical paper that needs rehearsed technique." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Stoichiometry, bonding, reactivity and organic basics. The mole calculation is where most Extended marks are won or lost." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cell structure, transport, inheritance and ecology; extended answers must be structured the way examiners expect." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Clear diagrams, definitions and short evaluative chains, taught with current Indian examples." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying terms to a supplied case, which suits families who already run a shop, hotel or workshop." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Computational thinking, trace tables and Python-style pseudocode, with practice on unfamiliar scenarios." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and descriptive tasks, with timed practice on passages the student has not met." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading and writing tasks in formal Hindi for students whose schooling has been mostly in English." },
  ],

  regionsTitle: "Fatehpur Sikri areas and neighbouring places our online tutors serve",
  regionsIntro:
    "Lessons never involve travel to these places; they are listed because a family's address says something useful about commute, board and the evening hours that suit a call. If your locality is not listed, it makes no difference to matching.",
  regions: [
    { name: "Buland Darwaza and the dargah quarter", note: "The walled heritage precinct and its busy bazaar lanes; many households here work in guiding, souvenirs or food stalls, and evenings after the last visitors leave suit lessons well." },
    { name: "Agra Road", note: "The main approach from Agra, lined with hotels, shops and newer housing; families here often have the best road links for weekend trips to Agra schools." },
    { name: "Station Road", note: "The area near Fatehpur Sikri railway station, about a kilometre from the centre; practical for families who commute to Agra for work or classes." },
    { name: "Bharatpur Road side", note: "The western edge towards Rajasthan, where Keoladeo and Bharatpur are close and some children travel to Rajasthan for schooling." },
    { name: "Tehsil and civil offices area", note: "Home to government staff on posting, a group that sometimes moves frequently and values a tutor who stays the same across transfers." },
    { name: "Sikri village", note: "The older settlement beside the monuments, mainly UP Board and CBSE households with strong ties to the tourism trade." },
    { name: "Nearby: Kiraoli", note: "A tehsil headquarters in Agra district, whose families often share the same Agra-oriented school choices." },
    { name: "Nearby: Achhnera", note: "A rail junction town close to the Mathura border, from where some families look towards Mathura and Delhi for schooling." },
    { name: "Nearby: Bharatpur", note: "Across the Rajasthan border and a regular destination for shopping and health care; it has its own city page on this site." },
  ],

  schoolDisclaimer:
    "School names on this page are given only to show where students linked to Fatehpur Sikri tend to look for IB or IGCSE study. IB Gram is an independent tutoring service and has no tie-up with, sponsorship from or endorsement by any school named here, the International Baccalaureate, Cambridge University Press and Assessment or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Fatehpur Sikri itself",
      note: "We could not confirm any school in the town offering the IB or a Cambridge or Edexcel IGCSE course, so none is named. Local schooling is UP Board, CBSE and some ICSE.",
      schools: [],
    },
    {
      city: "Nearby: Agra",
      note: "Roughly 37 km away. Sharda World School on the Fatehabad Road side is the one Cambridge-linked option we could confirm in Agra, reached by road in under an hour for those willing to commute.",
      schools: ["Sharda World School"],
    },
    {
      city: "Nearby: Gurugram, Delhi NCR (boarding)",
      note: "Well over two hundred kilometres away, so daily travel is out of the question; some families consider these campuses as boarding schools for the full IB continuum. This is a family decision, not something IB Gram arranges.",
      schools: ["Pathways World School, Aravali", "GD Goenka World School"],
    },
    {
      city: "Nearby: Jaipur",
      note: "The Rajasthan capital is the nearest large city with several IB and Cambridge campuses, and the highway through Bharatpur connects Fatehpur Sikri to it.",
      schools: ["Sanskar School, Sirsi Road", "Jayshree Periwal International School"],
    },
  ],

  modesIntro:
    "The format is the same for everyone: a live video lesson, tutor and student on one-to-one terms. What differs is how often the sessions run and how they are paced around school, tourist-season workloads and exams. No tutor visits a home in Fatehpur Sikri; if you search for home tuition, what we offer is private tuition from home, online.",
  modes: [
    {
      title: "Weekly one-to-one lessons",
      description:
        "A fixed hour each week with the same tutor, using a shared whiteboard and past-paper material chosen for your child's course.",
      bullets: [
        "Same tutor throughout the year",
        "Works for DP, MYP and IGCSE subjects",
        "Slot picked around school and evening power cuts",
        "Notes after every session",
      ],
    },
    {
      title: "Term plan with progress reviews",
      description:
        "Regular sessions across a term with a written plan, and a short review every few weeks so that parents hear about progress from the tutor directly.",
      bullets: [
        "Topic sequence agreed in advance",
        "Review conversation with parents",
        "Suits younger PYP and MYP students",
        "Extra sessions can be added before internal exams",
      ],
    },
    {
      title: "Exam-season intensive",
      description:
        "Two to four lessons a week in the weeks before a sitting, built around timed papers and marked feedback.",
      bullets: [
        "Papers marked against current criteria",
        "Feedback within two to three days",
        "Booked around Diwali and winter weddings",
        "Start at least three weeks before the exam window",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools are near Fatehpur Sikri?",
      paragraphs: [
        "No school inside Fatehpur Sikri is confirmed to teach the IB or a Cambridge or Edexcel IGCSE course. The town's schools follow UP Board, CBSE and in a few cases ICSE. That does not mean the question is academic; it means the answer is found in Agra, in Delhi NCR or in a handful of boarding campuses.",
        "In Agra, Sharda World School is the one Cambridge-linked option we could verify, and it is a drive of roughly an hour from the town. Further afield, Gurugram has a dense cluster of IB schools that some families consider for boarding, and Jaipur has a smaller set with day and boarding options. Nothing here is a recommendation; it is a map of where the curricula actually exist.",
        "Because the nearest options are far enough to make a daily commute impractical, most families who come to us are either preparing a child privately for an exam sitting, supporting a child who boards elsewhere, or keeping an international qualification alive after a transfer back to Uttar Pradesh.",
        "A tutor's job in each case is the same: know the specification, mark to the real criteria and explain clearly. Where a student sits the exam is a separate question handled by the school or the examination centre.",
      ],
      table: {
        caption: "Where IB and IGCSE study for Fatehpur Sikri students is realistically found",
        columns: ["Place", "Rough distance", "What we could confirm"],
        rows: [
          ["Fatehpur Sikri", "Local", "No IB or IGCSE school confirmed; UP Board, CBSE, ICSE"],
          ["Agra", "About 37 km", "Sharda World School, with a Cambridge-linked curriculum"],
          ["Jaipur", "Over 200 km", "Sanskar School and Jayshree Periwal International School, among others"],
          ["Gurugram", "Over 200 km", "Pathways World School and GD Goenka World School, boarding options for the IB"],
        ],
      },
      bullets: [
        "No local IB or IGCSE school has been confirmed",
        "Agra is the only realistic day-school commute",
        "Gurugram and Jaipur matter mainly for boarding",
        "Online tuition removes distance from the subject-support question",
      ],
    },
    {
      heading: "How do UP Board and CBSE differ from IB and IGCSE?",
      paragraphs: [
        "UP Board and CBSE reward accurate recall of a fixed syllabus and are marked mostly on one external paper per subject. IB and IGCSE keep content but test what a student can do with it in an unfamiliar situation. A Class 10 student who scores well on NCERT chapters may still struggle with an IGCSE Extended question that changes the context.",
        "The assessment mix also differs. In the IB, an internal assessment worth a fifth to a third of the grade is marked by the teacher against published criteria and moderated externally, and the Extended Essay adds a research task. UP Board and CBSE give projects and practicals a smaller share. For a student new to the IB, learning to plan and write up independent work is often harder than any single topic.",
        "Depth varies by subject. IB Higher Level Maths and the sciences go well beyond CBSE Class 12; IGCSE Core is roughly level with Class 9 to 10 content, while Extended is clearly above it. A family weighing a switch should ask which tier and which level the child would actually start in.",
        "Neither system is better for every child. Plenty of students from the town do well in CBSE and go on to JEE or NEET, and the case for IB or IGCSE is strongest for children aiming at study abroad or at courses that value broad coursework.",
      ],
      table: {
        caption: "UP Board and CBSE compared with IB and IGCSE",
        columns: ["Feature", "UP Board / CBSE", "IB / IGCSE"],
        rows: [
          ["Main skill tested", "Recall and procedure", "Application, argument and explanation"],
          ["Internal work", "Small share of the mark", "Significant in the IB; coursework in some IGCSE subjects"],
          ["Language of exam", "Hindi or English", "English, with Hindi available as a language course"],
          ["Typical entry point", "Whole school career", "Class 9 for IGCSE, Class 11 for the Diploma"],
          ["Recognition", "Strong in India", "Recognised internationally and accepted in India through equivalence"],
        ],
      },
      bullets: [
        "Content overlaps; the style of questions does not",
        "Internal assessment is the biggest change for new IB students",
        "Hindi can continue as a language subject",
        "Switching is workable with the right support from Class 9 or 11",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Fatehpur Sikri family?",
      paragraphs: [
        "There is no single rate, because the fee follows the programme, the subject, the level and how specialised the tutor is. A tutor who teaches IB Physics HL regularly is a smaller pool than one who teaches IGCSE Core Maths, and the rate reflects that. We quote it in writing before the trial lesson and keep it fixed afterwards.",
        "Since lessons are online, the tutor's location adds nothing. A family in Fatehpur Sikri pays no travel allowance because nobody travels. The cost of an hour is the cost of the hour, whether the tutor is in Pune, Kolkata or Gurugram.",
        "Cost per hour is a poor measure on its own. One focused hour with someone who knows how Paper 2 is marked can save several hours of revision aimed at the wrong thing. Ask any tutor what a typical session covers, how progress is reported and what happens if the fit is wrong.",
        "There are no lock-in contracts. Families can pause during Diwali, the wedding season or a family trip, and resume afterwards. If the first tutor is not the right match, we replace them without charge for the switch.",
      ],
      bullets: [
        "Rates depend on programme, subject, level and session length",
        "No travel cost because every lesson is online",
        "Quoted in writing before you book a trial",
        "Pause or stop whenever your plans change",
      ],
    },
    {
      heading: "Online tuition, Agra coaching, local tutors or self-study?",
      paragraphs: [
        "Agra has a large coaching market, but it is built for UP Board, CBSE, JEE and NEET. Fatehpur Sikri itself has smaller tuition centres of the same kind. Neither is set up to teach IB Chemistry HL or IGCSE Additional Mathematics, because there is no steady demand in the town to justify a batch.",
        "Local private tutors, usually schoolteachers or graduates teaching in the evening, can help with general Maths or English, but very few have taught an IB or IGCSE specification. The skills tested, from command-term answers to Internal Assessment planning, are not part of their experience.",
        "Self-study with past papers works for a disciplined student in a subject like IGCSE Maths. It is less reliable for subjects where marking is subjective, such as English, Economics or the extended essay-style IB papers, and for any assessed project, because the student never sees how an examiner would read the work.",
        "A live online tutor combines specialist knowledge with individual attention, and draws on a pool across India. The trade-off is that the student needs a laptop, a steady connection and a quiet hour, which in the evening hours of a tourist town is not always simple.",
      ],
      table: {
        caption: "Support options for IB and IGCSE students in Fatehpur Sikri",
        columns: ["Option", "Knows IB or IGCSE?", "Attention per student", "Main limit"],
        rows: [
          ["Agra coaching centre", "Rarely", "Group batch", "Built for JEE, NEET and board exams"],
          ["Local private tutor", "Seldom", "One to one", "No IB or IGCSE background"],
          ["Self-study", "Only as far as past papers allow", "None", "No feedback on extended answers"],
          ["Online IB or IGCSE tutor", "Matched by course code and level", "One to one", "Needs a laptop and stable internet"],
        ],
      },
      bullets: [
        "Coaching in Agra is aimed at Indian entrance exams",
        "Local tutors seldom know IB or IGCSE marking",
        "Self-study leaves gaps in feedback",
        "Online matching is the practical route to a subject specialist",
      ],
    },
    {
      heading: "The Fatehpur Sikri year: tourist season, Urs, heat and fog",
      paragraphs: [
        "A student's calendar in a heritage town is shaped by the visitor season. From October to March hotels, guides and shops are busy, and children in households that depend on them often help after school or at weekends. Revision plans need to leave room for that, and early-evening lessons can clash with the busiest hours.",
        "The annual Urs at the dargah of Sheikh Salim Chishti and the week around Diwali bring crowds and some disruption; Holi and Eid have their own effects on schedules. May and June are very hot, with afternoon temperatures often above forty degrees and hot dry winds, so tutors usually avoid scheduling lessons for the early afternoon. December and January bring dense fog across the Agra belt, which affects road travel more than online lessons.",
        "The external exam calendar sits on top of this. IB Diploma papers run in May, with a November session in some cases. Cambridge IGCSE has May to June and October to November series; Edexcel IGCSE runs in January and May to June. UP Board and CBSE finish in March, so students switching mid-stream have to fit international preparation around a different rhythm.",
        "A good plan therefore starts from the exam date, subtracts the festival and heat weeks, and then decides how many lessons are realistic. We do this together with the family rather than handing out a fixed timetable.",
      ],
      table: {
        caption: "Local calendar and its effect on tutoring",
        columns: ["Period", "What is happening", "Effect on lessons"],
        rows: [
          ["October to March", "Peak tourist season", "Evenings can be busy; weekend slots may suit better"],
          ["December and January", "Fog and cold", "Online lessons continue; keep devices charged in case of power cuts"],
          ["March", "UP Board and CBSE exams end", "Window to start IB or IGCSE foundation work"],
          ["May and June", "Intense heat; IB and Cambridge exams", "Morning or late evening sessions; revision intensives"],
          ["July to September", "Monsoon and school restart", "Good months for building habits and early topics"],
        ],
      },
      bullets: [
        "Tourist season can limit evening availability",
        "Heat makes early afternoon sessions a poor choice",
        "IB exams are in May; IGCSE series vary by board",
        "Plans are built backwards from the exam date",
      ],
    },
    {
      heading: "University pathways after IB or IGCSE from Fatehpur Sikri",
      paragraphs: [
        "A student from the town who completes the IB Diploma has three broad routes. One is Indian universities, using AIU equivalence to confirm that the Diploma is treated as a Class 12 qualification and CUET-UG for central universities such as Delhi University. The second is entrance-based engineering and medicine, where JEE and NEET have their own subject and mark requirements. The third is study abroad, using predicted and final grades.",
        "Nearby options include institutions in Agra such as Dr. Bhimrao Ambedkar University and the Dayalbagh Educational Institute, and Delhi is a day's journey away. For subjects such as economics, law, design or liberal arts, many families look at Delhi, Pune or private universities, where an IB profile is well understood.",
        "IGCSE students usually continue into A Levels, IB or a CBSE or ICSE Class 11. The IGCSE itself is not a Class 12 equivalent, so planning backwards from the destination matters; a student aiming for JEE needs to check Physics, Chemistry and Maths coverage at the right depth.",
        "Tutors do not run admissions. They can explain what the usual subject combinations for a target course look like and then make sure the work in those subjects is as strong as possible.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG are central for Indian universities",
        "JEE and NEET have separate subject requirements to check early",
        "Study abroad uses predicted grades in Class 12",
        "Tutoring covers subject depth and technique",
      ],
    },
    {
      heading: "IB Maths and the sciences for students from Fatehpur Sikri",
      paragraphs: [
        "Students choosing between Analysis and Approaches and Applications and Interpretation should look first at the course they want to follow. Engineering, physics and economics usually point to AA; psychology, business and social sciences often fit AI. The choice changes both the content and the style of the papers, and it is easier to settle in the first term than to switch later.",
        "Physics and Chemistry at Higher Level are the subjects where students from CBSE backgrounds feel the largest jump. The content is familiar in places, but questions mix topics, and the data booklet is used constantly. Short, regular problem sets with feedback do more for these students than long revision marathons.",
        "Biology is gentler on mathematics but heavy on language. Marks depend on using command terms exactly, describing a process in the right order, and supporting a claim with data. A student who knows the biology but writes loosely will drop marks steadily.",
        "For each of these courses, an internal investigation also has to be planned, carried out and written up. Tutors can talk through methods and criteria; the work itself must be the student's own.",
      ],
      bullets: [
        "AA suits calculus-heavy pathways; AI suits statistics and modelling",
        "HL sciences mix topics in the same question",
        "Biology marks depend on command-term precision",
        "Investigations are the student's own work, with tutors coaching only",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects to take",
      paragraphs: [
        "Cambridge offers Core and Extended tiers in Mathematics, Physics, Chemistry and Biology. Core caps the grade at a lower ceiling and covers less content; Extended opens the full grade range. If the plan is to continue into IB Maths AA or HL sciences, Extended is the sensible choice, and the decision is best made at the start of Class 9.",
        "Edexcel uses Foundation and Higher tiers in Mathematics, and its questions are phrased differently from Cambridge's. A student moving between boards cannot simply reuse past papers; they need a short period of re-orientation.",
        "Subject choice is limited by the school or exam centre. Private candidates, who sit the exam through an approved centre, have more freedom but must plan registration well before the deadline. For languages, Hindi as a second language is available in some centres.",
        "A tutor can help a family compare combinations, but the decision rests with the school and the child's goals.",
      ],
      bullets: [
        "Extended tier keeps the full range of grades open",
        "Edexcel and Cambridge papers need separate practice",
        "Private candidates should register through an approved centre early",
        "The final subject list depends on the school or centre",
      ],
    },
    {
      heading: "How does IB Gram match a tutor for a Fatehpur Sikri student?",
      paragraphs: [
        "We start with a short conversation or form covering the board and programme, the subject and level, the current grade, the exam session and what feels hardest. That information is more useful than any profile photo when choosing between tutors.",
        "Then we look for a tutor who has taught that specific course recently and whose schedule overlaps with the evenings your child can manage. We check qualifications and teaching history before an introduction, not after.",
        "The trial lesson shows how the tutor explains, whether they ask diagnostic questions, and whether your child feels comfortable saying they do not understand. Afterwards we share a simple plan for the first month, which you can accept or change.",
        "If the fit is wrong at any point, we find another tutor. Nobody is asked to persist with a poor match.",
      ],
      bullets: [
        "A brief covering board, subject, level and concerns",
        "Recent teaching experience on the exact course",
        "Trial lesson before any commitment",
        "Free tutor change if the fit is wrong",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge or Edexcel IGCSE to students linked to Fatehpur Sikri. Every lesson is live on video, matched on syllabus code, level and exam session, so a student in the old town gets the same specialist a child in a metro would.",

  process: [
    { title: "Tell us your need", description: "Share the programme or board, subject, level, current grade and the evenings that suit your household." },
    { title: "Receive a tutor shortlist", description: "We match on syllabus fit first, then availability, and tell you why each tutor suits your child." },
    { title: "Take a free trial lesson", description: "A live lesson on video, so you can judge teaching style and comfort without paying anything." },
    { title: "Agree a plan in writing", description: "Rates, session frequency and the first month's topics are confirmed before regular lessons begin." },
    { title: "Review as you go", description: "A short note after every session, a check-in every few weeks, and a tutor change if the fit is not right." },
  ],
  whyPoints: [
    { title: "Subject specialists", description: "Tutors are matched to the exact course code and level, not to a general 'international board' label." },
    { title: "Fully online", description: "Your child learns from the family desk. There are no home visits in Fatehpur Sikri, and none are needed." },
    { title: "Aligned with real marking", description: "Practice papers are marked against current IB and IGCSE criteria so feedback means something." },
    { title: "Visible progress", description: "Parents receive a written note after each lesson and a review every few weeks." },
    { title: "Straightforward terms", description: "Rates are quoted in writing, there are no lock-in contracts and tutor changes are free." },
    { title: "Honest scope", description: "Tutors coach; they do not write Internal Assessments, Extended Essays or any assessed coursework." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE tutors in Fatehpur Sikri?", answer: "Yes, through online tuition: IB Gram's tutors teach students in Fatehpur Sikri live over video. We found no local tutor pool with IB or IGCSE experience, which is why matching is done across India on syllabus fit, then on timing. Tutors do not visit homes in the town." },
    { question: "Do IB Gram tutors come to my home in Fatehpur Sikri?", answer: "No. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. Families in Fatehpur Sikri get online home tuition, meaning one-to-one private lessons that the student takes at home on a laptop with a specialist tutor." },
    { question: "Is there an IB school in Fatehpur Sikri?", answer: "We could not confirm one. Local schools follow UP Board, CBSE or ICSE. The nearest school with a verifiable Cambridge-linked curriculum is Sharda World School in Agra, and the IB is concentrated in Delhi NCR and Jaipur. Students usually study privately, board elsewhere or move." },
    { question: "How much does IB or IGCSE tuition cost in Fatehpur Sikri?", answer: "The rate depends on programme, subject, level and tutor experience, so we do not publish a fixed price. You receive the figure in writing before the free trial and it does not change afterwards. Distance adds nothing, since lessons are online." },
    { question: "Can a Class 10 CBSE student switch to the IB Diploma?", answer: "Yes, if the school or an approved route admits the student for Class 11. Tutoring in Class 10 can focus on Maths, English and the science concepts the Diploma assumes, and on writing in a criterion-based style. Starting a term or two early helps." },
    { question: "Which IB Maths course should my child take?", answer: "It depends on the intended degree. Analysis and Approaches suits engineering, physics, economics and mathematics; Applications and Interpretation suits business, psychology and social sciences. A tutor can look at past work and suggest, but the school makes the formal choice." },
    { question: "Will IGCSE help my child prepare for JEE or NEET?", answer: "IGCSE alone does not prepare for JEE or NEET, whose syllabi are different. Extended Maths and sciences give a good base, but students need to confirm AIU equivalence and the subject depth required, and plan separate entrance preparation." },
    { question: "Do tutors write the Internal Assessment or Extended Essay?", answer: "No. Tutors coach students on method, structure, criteria and revision, but the work must be the student's own. Writing or substantially drafting assessed work would breach IB and board rules, and we do not offer it." },
    { question: "What time are lessons held, given our tourist-season schedule?", answer: "Slots are agreed with you. Many families choose early evening or weekends, and during the busy October to March season some prefer Sunday mornings. Tutors teach on Indian Standard Time, so there is no time-zone gap." },
    { question: "What internet speed do online lessons need?", answer: "A stable broadband or good 4G connection is enough for video and a shared whiteboard. We suggest having a backup, such as a mobile hotspot, for fog-season power cuts. If a session drops, the tutor can continue after reconnecting." },
    { question: "Can my younger child take PYP tuition online?", answer: "Yes. PYP sessions are shorter and more activity-based, with a parent nearby for the first few lessons. Tutors focus on reading, writing, number sense and helping the child plan their Exhibition inquiry." },
    { question: "Are Cambridge and Edexcel both covered?", answer: "Yes. Cambridge IGCSE and Pearson Edexcel IGCSE are both supported, along with IB. We ask for the syllabus code at the start because the papers, tiers and mark schemes differ between boards." },
    { question: "How do private candidates sit IGCSE exams from Fatehpur Sikri?", answer: "Private candidates register through an approved exam centre, usually in a larger city such as Agra or Delhi NCR, before the board's deadline. IB Gram does not run exams; we advise on subject preparation and you check dates with the centre." },
    { question: "What if my child does not get on with the tutor?", answer: "We replace the tutor at no charge. Tell us what did not work, such as pace, style or timing, and we will shortlist someone different. A trial lesson exists for exactly this reason." },
    { question: "How do I get started?", answer: "Send the programme or board, subject, level and preferred evenings to support@ibgram.com or message +91 7439 368 115 on WhatsApp. We will propose a tutor and arrange a free trial lesson." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online matching works for students in every Indian city and town." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where IB Gram tutors visit homes, together with parts of Delhi NCR." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Programme-by-programme guide to IB tutoring." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How Higher Level, Standard Level, TOK and the Extended Essay fit together." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment." },
    { label: "IB Mathematics course guide", href: "/courses/ib/mathematics/", description: "Deciding between AA and AI." },
    { label: "Tutor profiles", href: "/tutors/", description: "Browse tutors by subject, programme and experience." },
    { label: "Contact us", href: "/contact-us/", description: "Send your brief and arrange a free trial." },
    { label: "IB and IGCSE tutors in Agra", href: "/agra/", description: "The nearest large city, 37 km away, with its own school context." },
    { label: "IB and IGCSE tutors in Bharatpur", href: "/bharatpur/", description: "The Rajasthan neighbour just across the border." },
    { label: "IB and IGCSE tutors in Mathura", href: "/mathura/", description: "The Braj town to the north-west, linked by road and rail." },
  ],

  closingHeading: "Book a free trial lesson for your Fatehpur Sikri student",
  closingBody:
    "Tell us the programme or board, the subject and level, where your child stands today and which evenings are easiest. We will suggest a tutor with recent experience on that syllabus and set up a free trial lesson. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
