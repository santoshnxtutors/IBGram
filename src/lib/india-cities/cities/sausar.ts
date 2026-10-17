import type { CitySeoPage } from "../types";

/**
 * /sausar/ - IB and IGCSE tutoring page for Sausar, Chhindwara district, Madhya Pradesh. No IB or
 * Cambridge/Edexcel school could be confirmed in the town, so stripSchools is empty and
 * schoolClusters point to Nagpur (72 km) using names already verified on the nagpur page.
 * Online-only delivery: in-person home tuition is Gurugram / Delhi NCR only.
 */
export const sausar: CitySeoPage = {
  slug: "sausar",
  countryName: "Sausar",
  countryNameLong: "Sausar, Madhya Pradesh",
  demonym: "Sausar",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and weekend slots work around orange-season farm commitments, the Navratri and Diwali weeks, and the May heat that empties afternoons",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.6667, longitude: 78.7833 },
  wikipedia: "https://en.wikipedia.org/wiki/Sausar",
  alternateNames: ["Saoner Madhya Pradesh", "Sausar Chhindwara", "Sausar MP"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sausar | Online Home Tuition, Free Trial",
  metaDescription:
    "Online IB and IGCSE tutors for Sausar, Chhindwara: live one-to-one lessons at home on a laptop, Nagpur-line timings, and a free trial lesson before you commit.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sausar",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR SAUSAR STUDENTS",
  heroSubtitle:
    "Searching for IB or IGCSE home tuition in Sausar? Be clear on one point first: lessons here are online home tuition, a private tutor on your laptop while your child sits at the family desk, because tutors do not come to houses in Sausar (that service exists only in Gurugram and parts of Delhi NCR). Every session is one student and one tutor, matched to the exact Diploma, Middle Years or Cambridge and Edexcel course your child follows, and fitted around a school day that may start with a train or bus on the Nagpur line.",
  primaryKeyword: "IB and IGCSE tutors in Sausar",
  imageAltText: "A Sausar student solving an IB Mathematics problem on a laptop with a live online tutor",
  secondaryKeywords: [
    "IB tutor Sausar",
    "IGCSE tutor Sausar",
    "IB home tuition Sausar",
    "IGCSE home tuition Sausar",
    "IB private tuition Sausar",
    "IB Maths tutor Sausar",
    "IGCSE Maths tutor Sausar",
    "IB Physics tutor Sausar",
    "IB Chemistry tutor Sausar",
    "IB Biology tutor Sausar",
    "IB DP tutor Sausar",
    "IB MYP tutor Sausar",
    "IB PYP tutor Sausar",
    "IGCSE online tuition Sausar",
    "IB tutor Chhindwara",
    "IB tutor Lodhikheda",
    "IGCSE tutor Borgaon Sausar",
    "online IB tuition near Nagpur",
    "Sausar Chhindwara IB tuition",
  ],

  heroTrustPoints: [
    "Tutors chosen for your child's exact IB subject and level, or the Cambridge or Edexcel code and tier",
    "Online lessons only in Sausar, with no travelling to Nagpur or Chhindwara for a class",
    "A free trial lesson, so you judge the teaching before any money is discussed",
    "Independent of every school, board and examining body named on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB continuum covered" },
    { value: "CAIE & Edexcel", label: "Both IGCSE boards taught" },
    { value: "IST", label: "Tutor and student on the same clock" },
    { value: "Free trial", label: "A real lesson before any commitment" },
  ],

  intro: {
    heading: "Who asks about IB and IGCSE in a town between two rivers",
    paragraphs: [
      "Sausar sits between the Jam and Kanhan rivers on the Nagpur to Chhindwara road, roughly 72 km from Nagpur and 55 km from Chhindwara. Its schools follow the MP Board or CBSE, and as far as we can confirm no school in or around the town teaches the IB or a Cambridge or Edexcel IGCSE. So the families who ask us about these courses are rarely walking in from the next street. They are usually a household with a child at an international boarding school, a family planning a move to Nagpur for Class 9 or 11, or parents who want to compare options with someone who has taught the syllabus.",
      "For all three, tuition at home means a laptop session. Each lesson is private, live and in Indian Standard Time, and the tutor is matched by subject code and level rather than by distance, which is just as well when the nearest classroom that teaches either curriculum is a long drive away. Tutors do not travel to Sausar; in-person home tuition is offered only in Gurugram and parts of Delhi NCR.",
      "The page that follows is written for Sausar specifically: the Raymond township at Borgaon and the orange orchards that shape family calendars, the Nagpur schools that parents actually consider, the exam sittings, and the honest limits of what online tutoring can and cannot do. Tutors coach, explain and mark. They never write an Internal Assessment, Extended Essay, TOK essay or coursework, and IB Gram is not affiliated with the IB, Cambridge, Pearson or any school.",
    ],
    bullets: [
      "IB PYP, MYP and Diploma tutors matched by exact subject and level",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended, Foundation and Higher",
      "Live one-to-one lessons on a laptop, with no in-person home visits in Sausar",
      "A free trial lesson and a short written plan before regular sessions start",
      "Timings that respect the Nagpur-line commute and the farm calendar",
    ],
  },

  programmesIntro:
    "With no IB school in town, a Sausar family usually reaches these programmes by a route that is anything but straight: an online international school, a boarding place in Nagpur or further away, or a Class 8 to 9 switch under discussion. The notes below describe what tutoring does at each stage in that context.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Learning is organised around six units of inquiry, with the student-led Exhibition closing the stage and no external papers on the way. Tutoring leans on reading aloud, number fluency and the habit of explaining a thought in full sentences.",
      countryNote:
        "In Sausar, PYP help most often supports a child on an online international programme, so a tutor sits beside the screen the school already provides rather than replacing it.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is marked on four criteria, and the Personal Project in the last year is a piece of independent work that tests planning more than knowledge. Students who can explain a topic often struggle to argue it against a named criterion.",
      countryNote:
        "A Sausar student coming from an MP Board or CBSE classroom meets criterion-based marking for the first time, so early lessons usually teach how to read a rubric.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects across three Higher and three Standard Level courses, plus TOK, the Extended Essay and creativity, activity and service. Internal assessments feed into the final grades, and the May session closes the two years.",
      countryNote:
        "DP requests from Sausar tend to come from students already placed at a school elsewhere, who want steady help in Maths, the sciences or English during home holidays.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take at least two Diploma courses alongside a career-related study, a reflective project and personal and professional skills. Very few Indian schools run it, but the Diploma courses inside it carry the same demands.",
      countryNote:
        "CP is uncommon from Sausar and is nearly always tied to a school in another city, so tutoring concentrates on the Diploma courses within the programme.",
    },
  ],

  subjectsIntro:
    "A student who has learned to write complete, textbook-style answers for an MP Board paper must learn to answer exactly the command term in an IB question. That shift is the commonest reason Sausar families look for help, and it is why every match begins with the precise course, level and paper, not a general subject label.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Proof, calculus and unfamiliar multi-step problems, with HL Paper 3 testing patience on a question no one has seen before. The exploration works best when a topic is picked months before the deadline." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, financial models and graphic-display calculator fluency carry the marks. Strong explorations come from a dataset a student actually cares about, collected early." },
    { name: "IB Physics", levels: "HL / SL", description: "Quick, accurate use of the data booklet, careful unit handling and a Scientific Investigation whose method would stand up to a marker's questions." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry is rarely the obstacle; organic reaction pathways, equilibrium and energetics usually are, and each needs worked examples in the IB's own style." },
    { name: "IB Biology", levels: "HL / SL", description: "Content is rarely the gap. Marks go when a student describes where a command term asks for an evaluation, or when an Investigation lacks the statistics to support its claim." },
    { name: "IB Economics", levels: "HL / SL", description: "Correctly labelled diagrams tied to a real and recent example, plus the policy evaluation that HL Paper 3 rewards." },
    { name: "IB Business Management", levels: "HL / SL", description: "Answers are marked on application to the case in front of the student, and the internal assessment needs a real organisation to study." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis, comparative essays and the spoken Individual Oral are separate skills and each deserves its own rehearsal." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and object-oriented thinking on paper, plus a documented coding project for the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Each approach needs a correctly described study behind it, and the extended response has to be argued, not listed." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems diagrams, case studies and an honest evaluation of sustainability trade-offs, which suits students who like connecting science with geography." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study depth, a defensible fieldwork design and evaluative writing, with HL adding the global-change and geopolitics options." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis in Paper 1, sustained argument in Paper 2, and an internal assessment built on a single focused question." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, text-type conventions and spoken confidence, a natural fit for a Hindi-speaking home that has never been tested in this style." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion practice for the exhibition and for testing a prescribed title from more than one side. Tutors coach the thinking, they do not write the essay." },
  ],

  igcseSubjectsIntro:
    "The IGCSE is not one exam. Cambridge and Edexcel set different papers, tiers and series, so the board and the code come first. For a Sausar student the next question is the sitting: Cambridge runs in May-June and October-November, Edexcel in January and May-June, and that decides how the months before it are used.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended candidates drop marks for missing working far more often than for hard topics, so lessons practise showing every step without a calculator." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Introduces calculus and trigonometric identities early, which makes the later jump to IB Maths AA HL or A Level Maths gentler." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Similar mathematics to Cambridge, but different phrasing and question order, so Edexcel papers get their own practice." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging equations under time pressure and the alternative-to-practical paper cost more marks than the concepts do." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, bonding and organic chemistry dominate, and practical-skill questions need rehearsal from the first term." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Inheritance, ecology and the longer structured answers that reward a clear, ordered response." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagram accuracy first, then the evaluative questions that separate a Core-level answer from a higher one." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables, pseudocode and Python programming, learned by repeated practice on new problems." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and narrative work, practised on passages the student has never met before." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Marks follow application to the business in the question, not memorised definitions." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and speaking tasks for a student whose home language is already Hindi but who has never practised the board's formats." },
  ],

  regionsTitle: "Sausar and the villages around it where we teach online",
  regionsIntro:
    "Lessons happen on a screen, so none of these places changes the teaching. They shape the practical week instead: when a parent's shift ends at Borgaon, when the Nagpur train comes in, and which evenings power or mobile data tend to wobble.",
  regions: [
    { name: "Sausar town centre", note: "The market and bus-stand area, where most local MP Board and CBSE schooling is concentrated; evening slots after 6 pm suit families who also run a shop." },
    { name: "Sausar railway station side", note: "Homes near the Nagpur to Chhindwara line, where one parent often commutes; lessons are placed after the evening train has come in." },
    { name: "Along the Jam river", note: "A quiet residential edge of town, popular for evening study, though the monsoon can interrupt power and data for a few hours." },
    { name: "Along the Kanhan river", note: "The opposite river edge of the town; families here often combine Sausar schooling with trips to Nagpur for relatives and shopping." },
    { name: "Lodhikheda", note: "Home to Kailashpath Singhania High School, a private school in the tehsil; students arrive home late on school days, so sessions start after 5 pm." },
    { name: "Borgaon", note: "The industrial and Raymond township side of the tehsil, where shift timings of working parents set the family routine." },
    { name: "Pipla Narayanwar", note: "A tehsil village area where farm commitments around the orange harvest can pull students out of routine for a week or two." },
    { name: "Ramkona and Mohgaon", note: "Villages on the Sausar tehsil roads, where a reliable mobile hotspot as a backup is worth agreeing before lessons begin." },
    { name: "Kuddam, Belgaon and Berdi", note: "Rural parts of the tehsil whose students lean on online lessons the most, since a classroom subject specialist is not within daily reach." },
  ],

  tutorsIntro:
    "The tutors below teach IB PYP, MYP and Diploma subjects, plus Cambridge and Edexcel IGCSE, live over video for students in Sausar and its tehsil. A match is made on subject, level and exam board. Postcode plays no part in it.",

  schoolDisclaimer:
    "We could not confirm any school in Sausar or Chhindwara district that teaches the IB or a Cambridge or Edexcel IGCSE, so the Nagpur schools below are listed only as options families sometimes weigh. IB Gram has no agreement, partnership or endorsement with any of them, and it is not connected to the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson.",
  schoolClusters: [
    {
      city: "Sausar and Chhindwara district",
      note: "No IB or Cambridge/Edexcel IGCSE school confirmed locally; MP Board and CBSE schools serve nearly every student.",
      schools: [],
    },
    {
      city: "Nearby: Nagpur, MIHAN and Wardha Road",
      note: "About 72 km from Sausar by NH-547, the nearest city where families usually look for an international school.",
      schools: ["D Y Patil International School, MIHAN"],
    },
    {
      city: "Nearby: Nagpur, central city",
      note: "Schools in the Ramdaspeth belt that families weigh when planning a move for Class 9 or 11.",
      schools: ["Centre Point School International", "VIBGYOR World Academy"],
    },
  ],

  modesIntro:
    "Sausar families end up with one format, because that is the one that works from here: a private tutor, a live video call, both on IST. Tutors do not visit homes in Sausar, since in-person tuition runs only in Gurugram and parts of Delhi NCR. What families choose is the rhythm.",
  modes: [
    {
      title: "Weekly one-to-one online lessons",
      description:
        "A fixed hour each week with the same tutor, a shared whiteboard, and past-paper questions worked live. Most Sausar students choose this as the steady base and add sessions before mocks.",
      bullets: [
        "A subject specialist from anywhere in India",
        "Works for IB DP, MYP, PYP and IGCSE",
        "Same tutor week after week",
        "Slots fitted around the Nagpur-line commute",
      ],
    },
    {
      title: "Holiday catch-up blocks",
      description:
        "Short, intense runs of daily lessons when a boarding student is home for Diwali or summer, with a plan that picks up exactly where the school term stopped.",
      bullets: [
        "Built for boarders and students on online schools",
        "Three to five sessions a week for two to four weeks",
        "Gaps listed at the start, checked at the end",
        "Easy to book ahead of the break",
      ],
    },
    {
      title: "Exam-season revision",
      description:
        "Timed past papers marked to the board's own scheme, with feedback within a couple of days, in the six to eight weeks before a Cambridge, Edexcel or IB sitting.",
      bullets: [
        "Marked against the real mark scheme",
        "Written feedback after every paper",
        "Extra slots added in the final fortnight",
        "Planned around the May heat and any family travel",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools near Sausar, and who are the families asking?",
      paragraphs: [
        "No school in Sausar or elsewhere in the tehsil is, to our knowledge, authorised for the IB or a Cambridge or Edexcel IGCSE. The town's schooling is MP Board and CBSE, with names such as Bhansali Vidya Mandir, described as one of the area's first CBSE schools, and Kailashpath Singhania High School at Lodhikheda. The nearest places with international curricula are in Nagpur, about 72 km away.",
        "That geography decides who calls. One group is families with a child at a boarding or day school in another city, who want help in the holidays. Another is parents who have decided on an online international school but cannot find a local teacher for Further Mathematics or Chemistry. A third is families weighing a move to Nagpur, who want a candid read on whether their child can handle the switch.",
        "Sausar also has a working population that is not entirely local. The Raymond township at Borgaon and the industrial area around it bring managers and engineers on postings, some of whom have children who started the IB elsewhere and expect to continue it. Their questions are practical: can the same course carry on here without a gap year?",
        "For every group the answer is a tutor who teaches the exact syllabus, live and one to one, from wherever in India they live. Tutors do not travel to Sausar, and they never produce assessed work for a student.",
      ],
      table: {
        caption: "Where IB and IGCSE study is realistically available for Sausar families",
        columns: ["Option", "Distance from Sausar", "What it offers"],
        rows: [
          ["Sausar and tehsil", "Local", "MP Board and CBSE schools; no IB or IGCSE school confirmed"],
          ["Nagpur", "About 72 km", "International-curriculum schools such as D Y Patil International School, MIHAN and Centre Point School International"],
          ["Online school or boarding elsewhere", "Not applicable", "Full IB or IGCSE, with tutoring added for weak subjects"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed in Sausar or Chhindwara district",
        "Nagpur is the nearest city with international-curriculum schools",
        "Typical callers: boarders, online-school families, relocation planners",
        "Tutoring is matched to the course, not to the family's address",
      ],
    },
    {
      heading: "How does IB or IGCSE differ from the MP Board and CBSE for a Sausar student?",
      paragraphs: [
        "The MP Board and CBSE mostly reward complete, accurate recall of a fixed syllabus, while the IB and IGCSE reward applying ideas to a context the student has not seen. A Sausar Class 10 student who scores well on a Board paper can still lose marks on an IGCSE Extended question that changes the scenario, because the memorised method no longer fits.",
        "Coursework is the sharper difference. The Boards give internal marks a small part of the final result, but IB internal assessments and IGCSE practical or coursework components follow detailed criteria and need planning over months. In a Sausar household that has only known Board schedules, that planning habit is the first thing to build.",
        "Depth varies too. IGCSE Core is close to Board level, Extended goes beyond it, and IB Higher Level mathematics and sciences go well beyond Class 12 in several topics. Language is also different: assessments in English expect structured analytical writing, which a student comfortable in Hindi at home must practise deliberately.",
        "None of this makes the courses harder across the board. Many students who learn the marking criteria find the IB and IGCSE more predictable than a single high-stakes Board paper, because the expectations are written down.",
      ],
      table: {
        caption: "MP Board and CBSE compared with IB and IGCSE",
        columns: ["Feature", "MP Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Main skill tested", "Recall of the syllabus", "Recall with some application", "Application, analysis and argument"],
          ["Internal marks", "Small share", "Small share", "Significant share in IB; coursework or practicals in IGCSE"],
          ["Language of study at home", "Hindi or English", "Hindi or English", "English, with Hindi as a language subject"],
          ["Local availability in Sausar", "Widespread", "A few private schools", "None confirmed; online or elsewhere"],
        ],
      },
      bullets: [
        "Context-based questions replace repeated textbook formats",
        "Internal assessment needs months of planning",
        "Extended and Higher Level go well beyond Board depth",
        "Written English needs deliberate, regular practice",
      ],
    },
    {
      heading: "What does IB or IGCSE tutoring cost for a family in Sausar?",
      paragraphs: [
        "The rate depends on four things: the programme and level, the subject, the length of each session and how recently the tutor has taught that exact syllabus. IB Diploma Higher Level courses sit at the upper end because tutors who can teach them are scarce, while PYP reading support and IGCSE Core subjects usually sit lower. The figure is agreed in writing before the trial, not after.",
        "Online delivery removes a cost that distance normally adds. A Sausar family does not pay for a tutor to travel from Nagpur, and a tutor in Pune or Bengaluru charges by the same method as one in Chennai. What changes the price is expertise and session length, not the road.",
        "Think about the value of an hour instead of the headline rate. One hour with someone who has taught IGCSE Additional Mathematics several times can clear a topic that a student would circle for weeks alone, which is a better use of money than a long group batch aimed at a different exam.",
        "There is no lock-in. Families can pause during orange-harvest weeks or festival travel, and a tutor who is not the right fit is replaced rather than endured. No published price list sits behind this page because each course is quoted individually.",
      ],
      bullets: [
        "Rate is set by level, subject, session length and tutor experience",
        "No travel charge, since every lesson is online",
        "The quote is given in writing before the trial lesson",
        "Pause or stop without any penalty",
      ],
    },
    {
      heading: "Online tuition, coaching centres, local tutors or self-study: what works in Sausar?",
      paragraphs: [
        "Coaching in and around Sausar is built mainly around Board examinations and, for older students, preparation for engineering and medical entrance, often completed in Nagpur or Chhindwara once school ends. None of it is set up for IB Chemistry HL or IGCSE Biology 0610, so a family on an international syllabus has to look outside the town.",
        "Local private tutors are valuable for school subjects, and many are excellent with younger children. The difficulty is that none has recent experience of an IB mark scheme or a Cambridge examiner report, since no local school sets those papers. A tutor can build confidence and study habits but cannot be expected to know current criteria.",
        "Self-study can work for a disciplined student in a subject with plenty of past papers, IGCSE Mathematics being the usual example. It tends to fail where feedback matters: planning an internal assessment, structuring a long answer, or noticing that a command term has been misread.",
        "Online one-to-one tuition is the only option here that combines syllabus knowledge with individual attention. Its limits are real too: it needs a steady connection and a student willing to turn up, and it cannot replace the daily teaching of a full-time school.",
      ],
      table: {
        caption: "Support options compared for a Sausar student",
        columns: ["Option", "Knows the IB or IGCSE syllabus", "Individual attention", "Main limitation in Sausar"],
        rows: [
          ["Board-focused coaching", "No", "Low, group batches", "Built for MP Board and entrance exams"],
          ["Local private tutor", "Rarely", "High", "No recent IB or Cambridge marking experience"],
          ["Self-study with past papers", "From the papers only", "None", "No feedback on internal assessment or long answers"],
          ["Online IB or IGCSE specialist", "Yes, chosen per course", "High, one to one", "Needs a stable connection and a regular slot"],
        ],
      },
      bullets: [
        "Local coaching is aimed at Board and entrance exams",
        "Local tutors seldom know current IB or Cambridge criteria",
        "Self-study lacks feedback where it matters most",
        "Online specialist tuition is the closest fit",
      ],
    },
    {
      heading: "How do exam dates, heat and harvest shape the year in Sausar?",
      paragraphs: [
        "IB Diploma examinations take place in May, with results in early July and a retake option in November. Cambridge IGCSE runs in May-June and October-November, and Edexcel IGCSE in January and May-June. Those dates are fixed by the boards, so a Sausar family builds the year backwards from them.",
        "Local conditions matter more than most people expect. May and June bring severe heat in this part of Madhya Pradesh, which makes afternoon study hard and pushes lessons to early morning or evening. That coincides with the final revision stretch, so rooms with a fan or cooler and a charged laptop matter more than a perfect timetable.",
        "The orange belt around Sausar and Pandhurna sets another rhythm for farming families, who may need students at home for part of the harvest. Navratri, Dussehra and Diwali take a week of attention each in the autumn, and the cold months from December are quieter, which suits a long block of past papers.",
        "A typical DP student feels the year in sequence: internal exams early in Class 11, internal assessment drafts through Class 12, predicted grades in the autumn for university applications, and mocks in the new year. Starting a few months ahead of each stage is cheaper than catching up inside it.",
      ],
      table: {
        caption: "The Sausar year and what it means for lessons",
        columns: ["Period", "What is happening", "Effect on tutoring"],
        rows: [
          ["May-June", "IB Diploma exams, Cambridge and Edexcel summer series; peak heat", "Early-morning or evening revision slots; reliable power backup"],
          ["July-September", "Monsoon, IB results, new academic year", "Good window to start new courses; possible power and data dips"],
          ["October-November", "Navratri, Dussehra, Diwali; Cambridge autumn series and IB retakes", "Shorter weeks around festivals; retake preparation"],
          ["December-February", "Cooler months, Edexcel January series, mock exams", "Long, calm revision blocks and timed papers"],
        ],
      },
      bullets: [
        "May: IB Diploma and IGCSE summer papers fall in the hottest weeks",
        "Monsoon power and data interruptions are planned for in advance",
        "Festival weeks are blocked out, not fought against",
        "Winter is the best season for long, quiet study blocks",
      ],
    },
    {
      heading: "Where can a Sausar student go after the IB or IGCSE?",
      paragraphs: [
        "Nagpur is the nearest large academic centre, with universities and institutes such as VNIT, AIIMS and IIM Nagpur within reach, and Bhopal adds names like MANIT, AIIMS Bhopal and IISER. Chhindwara has a state university of its own. For many Sausar families a Nagpur or Bhopal degree is the practical first choice, with study abroad as the second.",
        "Entry to Indian universities with an IB Diploma or IGCSE-and-A-Level route depends on equivalence from the Association of Indian Universities and on the right subjects. Central university admission now runs through CUET-UG, where the subject combination matters, and JEE or NEET eligibility needs Physics, Chemistry and Mathematics or Biology at suitable levels.",
        "For study abroad, predicted grades in Class 12 are what a university first sees. A UK offer is usually a total IB points score with specific Higher Level subjects, while a US application weighs grades with essays and activities. The earlier a Sausar student starts, the more the predicted grade can reflect real progress.",
        "IB Gram's role stays academic: teaching the subjects, lifting predicted grades and sharpening exam technique. We are happy to talk through what a target course typically asks for, but we do not handle applications or promise admissions.",
      ],
      bullets: [
        "Nagpur and Bhopal are the closest large academic hubs",
        "AIU equivalence and subject choice matter for Indian admissions",
        "CUET-UG, JEE and NEET have their own subject rules",
        "Predicted grades drive study-abroad offers",
      ],
    },
    {
      heading: "How are IB Maths, the sciences and IGCSE subject choices handled?",
      paragraphs: [
        "IB Maths Analysis and Approaches suits students heading to engineering, physical sciences or economics; its Paper 3 at Higher Level asks for patient investigation. Applications and Interpretation suits those who prefer statistics and modelling and are comfortable with a graphic calculator. The choice has to be made early, since the two courses are not interchangeable.",
        "In Physics and Chemistry, the data booklet, timing across Papers 1 and 2 and the internal investigation are where tutoring changes outcomes. In Biology, the gap is usually command terms rather than content. We work from the actual IB subject guide so that practice questions match the current assessment.",
        "On the IGCSE side, the first decision is the tier. Core caps the maximum grade, while Extended opens the full range, and Cambridge and Edexcel use different tier names. A student aiming for IB Maths later should aim for Extended, and Additional Mathematics is a sensible companion.",
        "Subject choice at Sausar's end should follow the child, not the neighbours. A student who enjoys writing may do better with Economics or Psychology than with a third science, and a tutor can say honestly what each course demands before a commitment.",
      ],
      bullets: [
        "AA for proof and calculus; AI for statistics and modelling",
        "Physics and Chemistry depend on data-booklet fluency and investigations",
        "Extended tier keeps the highest IGCSE grades available",
        "Subject choice should follow the student's strengths",
      ],
    },
  ],

  process: [
    { title: "Send a short brief", description: "Programme or board, subject, level, the next exam sitting and the one thing worrying you most." },
    { title: "Receive a matched shortlist", description: "One or two tutors who have recently taught that exact course, with a line explaining each choice." },
    { title: "Take the free trial lesson", description: "A full online lesson on a real topic from your child's syllabus, with no payment or obligation." },
    { title: "Approve a written plan", description: "Topics, weekly rhythm and the rate in writing, agreed before the regular lessons start." },
    { title: "Review and adjust", description: "A short note after each session, a progress review every few weeks, and a new tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched on the course, not the map", description: "Your address does not limit the choice; the syllabus, level and board decide it." },
    { title: "Suited to a town without IB teaching", description: "With no local classroom, a specialist online is the practical route, not a second-best one." },
    { title: "Judge before you pay", description: "The free trial lesson is a real session, so you see the teaching first." },
    { title: "Clear limits on assessed work", description: "Tutors coach and explain; they never write internal assessments, essays or coursework." },
    { title: "Regular written notes", description: "After each session you receive a short note, so progress is visible without chasing." },
    { title: "No lock-in", description: "No contract, no school tie, and a different tutor whenever the current match is not working." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Sausar?", answer: "No school in Sausar is confirmed to teach the IB or a Cambridge or Edexcel IGCSE. Local schooling is MP Board and CBSE. The nearest options are in Nagpur, about 72 km away. Families therefore usually combine an online or boarding school with an online tutor for the weaker subjects." },
    { question: "Do tutors come to our home in Sausar?", answer: "No. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. In Sausar, home tuition means a live one-to-one lesson that your child takes at home on a laptop, with the tutor teaching online from elsewhere in India. The experience is private and personal, only the tutor is on a screen." },
    { question: "How do I find an IB tutor in Sausar?", answer: "Send the programme, subject, level and exam sitting to support@ibgram.com or WhatsApp +91 7439 368 115. We shortlist tutors who have taught that exact course, then arrange a free trial lesson. Distance plays no part, since all teaching is online, so the shortlist is based on subject experience." },
    { question: "Can you help with IGCSE for both Cambridge and Edexcel?", answer: "Yes, both boards are covered. Cambridge students are matched by subject code and tier, such as Mathematics 0580 Extended or Physics 0625, and Edexcel students by specification such as 4MA1 Higher. Past papers from the right board are used throughout, because the question styles differ more than the names suggest." },
    { question: "What does tutoring cost for a family in Sausar?", answer: "The rate depends on the level, subject, session length and the tutor's experience with that syllabus, and it is quoted in writing before the trial lesson. Higher Level Diploma work usually costs more than IGCSE Core or PYP support. There is no travel charge for an online lesson, and no long contract." },
    { question: "My child is on an online international school from Sausar. Can a tutor still help?", answer: "Yes, this is one of the most common situations. A tutor works beside the online school, taking the same subject and level and filling in wherever the recorded or live classes are not landing, whether that is a topic in Physics or the structure of an English essay." },
    { question: "My child boards in another city. Can lessons continue at home in Sausar?", answer: "Yes, and many families use the holidays this way. The tutor is matched to the school's syllabus and picks up from the last topic covered, so a Diwali or summer break at home becomes a planned catch-up block rather than a pause in learning." },
    { question: "Is there a free trial lesson?", answer: "Yes, always, before any payment. The proposed tutor teaches one real topic from your child's syllabus online, and you decide afterwards whether to continue, change the plan or meet a different tutor. A short written plan follows the trial, not before it." },
    { question: "Can a tutor write my child's Internal Assessment or Extended Essay?", answer: "No. Tutors coach: they help choose a workable question, explain what each criterion looks for, check a plan and give honest feedback on a draft. Writing or rewriting the assessed work is not allowed, would breach the rules of the IB and Cambridge, and could put a student's results at risk." },
    { question: "Which IB Diploma subjects are most requested from Sausar?", answer: "Maths (Analysis and Approaches and Applications and Interpretation), Physics, Chemistry, Biology, Economics, Business Management and English A come up most often, with Theory of Knowledge and the Extended Essay alongside. Requests tend to come from students already enrolled elsewhere who want steady subject help at home." },
    { question: "Do you teach IB MYP and PYP students too?", answer: "Yes, across the whole continuum. MYP sessions often focus on criterion-based writing in sciences and Language and Literature, and help with the Personal Project process. PYP sessions are shorter and more frequent, built around reading, number sense and research for the Exhibition." },
    { question: "How reliable is online tuition with Sausar's internet and power?", answer: "It works well with a stable connection and a small plan for interruptions. We suggest a mobile hotspot as backup, a charged laptop, and a lesson slot outside the usual monsoon outage hours. If a session is lost to power or data, it is rescheduled rather than charged." },
    { question: "How are tutors checked before being introduced?", answer: "We verify qualifications, check how recently the tutor taught the exact subject and level, and look at their approach to assessment criteria before any introduction. Because Sausar has no local IB or IGCSE teaching pool to compare, the free trial lesson lets you confirm the fit with your own eyes." },
    { question: "When should my child start?", answer: "As early as the course begins: Class 9 for IGCSE and Class 11 for the Diploma. That leaves time to fix foundations before internal exams, internal assessment deadlines and predicted grades. A later start still helps if lessons focus on the highest-value topics and on timed past papers." },
    { question: "Can lessons be planned around harvest and festivals?", answer: "Yes. Families in the orange belt around Sausar often lose a week or two at harvest, and Navratri, Dussehra and Diwali take their own time. We agree a calendar in advance, move sessions around those weeks and add extra slots before mocks to make up the difference." },
    { question: "What if we are unhappy with the tutor?", answer: "Tell us and we will find someone else, usually within days. We also check in every few weeks without being asked. There is no contract, so pausing or changing tutors carries no penalty, and a child is never expected to persist with a poor match." },
    { question: "Is IB Gram connected to any school or to the IB, Cambridge or Pearson?", answer: "No. IB Gram is an independent tutoring service. It has no affiliation with any school mentioned on this page, including those in Nagpur, nor with the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Return to the IB Gram homepage." },
    { label: "IB tutoring across India", href: "/india/", description: "How IB and IGCSE tutoring works in other Indian cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The area where tutors also teach in person." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, internal assessments, TOK and the Extended Essay explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, the Personal Project and assessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition in plain language." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles sorted by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share a brief and book a free trial lesson." },
    { label: "IB and IGCSE tutoring in Pandhurna", href: "/pandhurna/", description: "The neighbouring town in the same Nagpur-facing belt." },
    { label: "IB and IGCSE tutoring in Nagpur", href: "/nagpur/", description: "The nearest large city for international schools." },
    { label: "IB and IGCSE tutoring in Jabalpur", href: "/jabalpur/", description: "Another Madhya Pradesh city with its own page." },
  ],

  closingHeading: "Ask about an IB or IGCSE tutor for your child in Sausar",
  closingBody:
    "Tell us the programme or board, the subject and level, and whether your child studies online, boards elsewhere or is still deciding. We will reply with a matched tutor, a short profile and free trial times that fit a Sausar evening. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
