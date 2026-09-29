import type { CitySeoPage } from "../types";

/**
 * /vidisha/ - IB and IGCSE tutoring page for Vidisha, Madhya Pradesh. Online-only delivery: tutors do not
 * visit homes in Vidisha, since in-person home tuition is offered only in Gurugram and parts of Delhi NCR.
 * No IB or Cambridge/Edexcel school in Vidisha was confirmed, so stripSchools is empty and the clusters lean
 * on Bhopal (about 62 km away), honestly labelled.
 */
export const vidisha: CitySeoPage = {
  slug: "vidisha",
  countryName: "Vidisha",
  countryNameLong: "Vidisha, Madhya Pradesh",
  demonym: "Vidisha",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are slotted around MP Board and CBSE school hours, peak summer heat, monsoon weeks and the Navratri, Diwali and Holi holidays",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.5251, longitude: 77.8081 },
  wikipedia: "https://en.wikipedia.org/wiki/Vidisha",
  alternateNames: ["Bhelsa", "Besnagar", "Vidisha MP"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Vidisha | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Vidisha, Madhya Pradesh: DP, MYP, PYP, Cambridge and Edexcel taught live one-to-one from home, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Vidisha",
  heroEyebrow: "IB & IGCSE ONLINE PRIVATE TUITION FOR VIDISHA",
  heroSubtitle:
    "A family in Vidisha who wants IB or IGCSE support finds few teachers close by and fewer who have marked an international paper. IB and IGCSE tutors in Vidisha from IB Gram work online instead: private tuition from home, live and one-to-one, matched to the exact course. Tutors do not travel to Vidisha, since home visits happen only in Gurugram and parts of Delhi NCR, so the student learns at a desk in their own house with the tutor on screen.",
  primaryKeyword: "IB and IGCSE tutors in Vidisha",
  imageAltText: "Vidisha student in Madhya Pradesh preparing for IGCSE Physics with a live online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Vidisha",
    "IGCSE tutor Vidisha",
    "IB home tuition Vidisha",
    "IGCSE home tuition Vidisha",
    "IB private tuition Vidisha",
    "IB Maths tutor Vidisha",
    "IGCSE Maths tutor Vidisha",
    "IB Physics tutor Vidisha",
    "IB Chemistry tutor Vidisha",
    "IB Biology tutor Vidisha",
    "IB DP tutor Vidisha",
    "IB MYP tutor Vidisha",
    "IB PYP tutor Vidisha",
    "IGCSE online tuition Vidisha",
    "IB tutor Station Road Vidisha",
    "IGCSE tutor Bhopal Road Vidisha",
    "online IB tutor Sanchi Vidisha",
    "Cambridge IGCSE tutor Vidisha Madhya Pradesh",
    "Edexcel IGCSE tutor Vidisha",
    "Bhelsa IB tutor",
  ],

  heroTrustPoints: [
    "Each tutor is chosen for the exact IB subject and level or Cambridge and Edexcel code, not for a loose 'international' label",
    "Vidisha lessons are online only; in-person home visits exist just in Gurugram and parts of Delhi NCR",
    "A free trial lesson and a short written note come before any decision",
    "IB Gram is independent of the IB, Cambridge, Pearson and any school named on this page",
  ],
  heroStats: [
    { value: "IST", label: "Same clock as Vidisha" },
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "May and Nov", label: "IB exam sessions" },
    { value: "Free trial", label: "Nothing to pay first" },
  ],

  intro: {
    heading: "IB and IGCSE study in Vidisha, in plain terms",
    paragraphs: [
      "Vidisha is an old city on the Betwa and Bes rivers with a history that stretches back to Besnagar, and its schools reflect a more recent reality: MP Board and CBSE dominate, with a smaller ICSE presence. We could not confirm any school in the city that teaches the IB or the Cambridge or Edexcel IGCSE. That does not stop children here from needing those courses.",
      "Who asks, then? Mostly parents whose plans reach beyond the district: a child heading to a boarding school, a family expecting a transfer, a teenager on an online international programme, or a student who wants IGCSE-style science before applying abroad. Bhopal, roughly 62 km away, is where most of these plans point.",
      "Our answer is online delivery. A tutor based elsewhere in India teaches live over video on IST, with a shared whiteboard for graphs and working. Nobody travels to Vidisha, and we say so directly because 'home tuition' searches can suggest a visit. Home visits run only in Gurugram and parts of Delhi NCR.",
      "Tutors coach and explain; they do not write Internal Assessments, Extended Essays, TOK essays or coursework that a student submits for a grade. IB Gram has no affiliation with the IB, Cambridge, Pearson or any school mentioned here.",
    ],
    bullets: [
      "IB tutors for the PYP, MYP, Diploma and Career-related Programme",
      "Cambridge and Pearson Edexcel IGCSE at Core, Extended, Foundation and Higher levels",
      "Live private lessons on a laptop at home, timed around the Vidisha school day",
      "A free trial lesson and a written note before committing",
      "No tutor visits in Vidisha; in-person tuition stays in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Vidisha students meet the IB and IGCSE through a side door: an MP Board or CBSE upbringing followed by a plan to change track. The programme summaries below say what each stage involves and what it usually means for a student starting from here.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Inquiry replaces rote learning: pupils investigate themes, ask questions and present findings across subjects. The programme closes with the PYP Exhibition, and there is no board exam at any point.",
      countryNote:
        "Parents in Vidisha who ask about the PYP are often preparing a child for a future move; tutoring then builds English fluency, reading stamina and confident number work.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Every subject is judged against criteria, and each student completes a self-directed Personal Project. Schools may also enter students for an external eAssessment.",
      countryNote:
        "A Vidisha child arriving in an MYP class from an MP Board school needs to learn criterion-based answering, and our sessions start with reading a descriptor and writing to it.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take three subjects at Higher Level and three at Standard, alongside Theory of Knowledge, a 4,000-word Extended Essay and Internal Assessments. Written exams cluster in May.",
      countryNote:
        "From Vidisha, the DP request is usually about a place elsewhere or an online school, with Maths, Physics, Chemistry and Economics leading the list.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A short list of Diploma courses is paired with a career-related study, a reflective project and a skills strand. Very few Indian schools run it.",
      countryNote:
        "Requests from Vidisha are uncommon; when they come, the work goes into the DP subjects inside the programme and into structuring the reflective project.",
    },
  ],

  subjectsIntro:
    "We match on the course, the level and the target session together. A Vidisha student on Applications and Interpretation SL and one on Analysis and Approaches HL need different things, and both need a study plan that reflects what the MP Board or CBSE syllabus already covered.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof are the base, and students from a board background often need practice on open-ended, multi-step questions." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistical modelling and technology-supported reasoning carry the course, and the exploration works best around a dataset that interests the student." },
    { name: "IB Physics", levels: "HL / SL", description: "Topics from mechanics to fields are taught with attention to units, uncertainty and efficient use of the data booklet." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Kinetics, equilibrium and organic reactions are worked through in writing, and the investigation is scoped to what a school lab can support." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics and ecology are approached through command-term answers rather than long recall." },
    { name: "IB Economics", levels: "HL / SL", description: "Accurate diagrams and fresh examples come first, with HL learners adding quantitative practice." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case answers apply one named idea to the facts given, and the internal research project needs an organisation the student can approach." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen commentary, comparative writing and the spoken oral are trained as three separate skills." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, data structures and databases are taught alongside the documentation the practical task needs." },
    { name: "IB Psychology", levels: "HL / SL", description: "Named studies are turned into arguments that answer the question set." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking suits a region with river basins, farmland and a growing demand for water." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies are learnt deeply, and fieldwork methods are planned before data is gathered." },
    { name: "IB History", levels: "HL / SL", description: "Source work and sustained argument are practised in timed conditions; students from a city with Vidisha's layered past often bring good instincts." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Students who speak Hindi at home sharpen formal writing, text types and the oral for exam use." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions are conversations about claims and evidence, aimed at a stronger exhibition and essay plan." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "The tutor helps narrow the question and set milestones, and the student writes every word." },
  ],

  igcseSubjectsIntro:
    "Choosing the board comes first, because Cambridge and Edexcel use different syllabus codes and exam styles for similar-sounding subjects. After that comes tier, Core or Extended in most Cambridge papers, Foundation or Higher for Edexcel maths, and the series the student will sit.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended candidates drill non-calculator methods and clear working so method marks are not lost." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Differentiation, logarithms and trigonometry arrive early and prepare a student for IB Maths AA." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Higher papers are phrased differently from Cambridge's, so practice uses Edexcel's own material." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equations, circuits and waves, then the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, reactivity and organic families through paper-based practice." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, transport and ecology in the wording examiners reward." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagram accuracy, then evaluative writing." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables, pseudocode and Python practice alongside theory." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Summary and directed writing practised against mark schemes." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "Students with home fluency work on accuracy and paper format." },
  ],

  regionsTitle: "Vidisha areas and nearby towns our online tutors serve",
  regionsIntro:
    "Lessons are online, so the places below show context rather than distance: where school-going families are concentrated, which road they would use to reach Bhopal, and what season does to the evening routine.",
  regions: [
    { name: "Station Road", note: "Near the railway station on the Delhi to Mumbai and Delhi to Chennai lines; families here are often transfer-prone and ask about board changes." },
    { name: "Bhopal Road", note: "The main route to the state capital, and the natural corridor for families who consider schools in Bhopal." },
    { name: "Sanchi Road", note: "Leads towards Sanchi, a short distance away, where some households have ties to the tourism and heritage sector." },
    { name: "Sagar Road", note: "The western approach to the city, with a mix of schools and coaching centres." },
    { name: "Kila Andar", note: "An older part of the city around the historic fort area, home to long-established families." },
    { name: "Purani Basti", note: "A dense old neighbourhood where private tuition is common and online options are compared with neighbourhood tutors." },
    { name: "Gulabganj", note: "A nearby town on the rail line whose students study on the same timetable and often depend on stable mobile data." },
    { name: "Udayagiri Road", note: "Towards the Udayagiri caves, a quieter stretch popular with newer housing." },
    { name: "Tehsil and Collectorate area", note: "Government officials and their families cluster here; postings can mean a child changes boards mid-way." },
    { name: "Ganjbasoda and Basoda side", note: "Neighbouring towns in the district that follow the same board landscape and school calendar." },
  ],

  tutorsIntro:
    "The tutors below teach online from other parts of India on IST, picked for the syllabus a Vidisha student follows. Each profile is for live, private lessons and nobody visits Vidisha.",

  schoolDisclaimer:
    "We could not confirm any school inside Vidisha that teaches the IB or Cambridge or Edexcel IGCSE, so none is listed as local. The Bhopal school named below is mentioned only as the nearest confirmed option; there is no partnership with it. IB Gram is independent of the IB, Cambridge, Pearson and every school named, and we advise checking a school's authorisation with the awarding body first.",
  schoolClusters: [
    {
      city: "Vidisha and its district",
      note: "Local schools follow the MP Board, CBSE or ICSE. We could not verify an IB or Cambridge or Edexcel school in the city, so online tutoring is how most families reach those syllabuses.",
      schools: [],
    },
    {
      city: "Nearby: Bhopal",
      note: "About 62 km away, Bhopal has one confirmed Cambridge-curriculum residential campus at Ratibad. Families who look at it usually consider boarding rather than a daily commute.",
      schools: ["Shrewsbury International School India"],
    },
    {
      city: "Nearby: Indore and beyond",
      note: "Indore, several hours away, has a larger cluster of IB and Cambridge schools that some Madhya Pradesh families consider for boarding. Confirm each school's authorisation before relying on any name.",
      schools: ["Choithram International", "Daly College Indore", "Emerald Heights International School"],
    },
  ],

  modesIntro:
    "The service for Vidisha is the same everywhere: a private, live lesson over video with a tutor who works from elsewhere in India. What varies is the rhythm, as the three formats below show.",
  modes: [
    {
      title: "Weekly private lessons",
      description:
        "A fixed hour each week after the Vidisha school day, using a shared board and screen so the tutor can work through problems with your child.",
      bullets: [
        "Same tutor each week",
        "A short note after every session",
        "Free trial first",
      ],
    },
    {
      title: "Holiday and exam blocks",
      description:
        "Intensive lessons in the run-up to an IB, Cambridge or Edexcel series, or during the long summer break.",
      bullets: [
        "Past papers with marked feedback",
        "Planned around board exams and holidays",
        "Online only, with no visits to Vidisha homes",
      ],
    },
    {
      title: "Move-ready preparation",
      description:
        "A defined block of lessons before a move from the MP Board or CBSE into an IB or IGCSE school, for example in Bhopal.",
      bullets: [
        "Diagnostic lesson first",
        "Focus on topics the new school assumes",
        "Plan and rate agreed in writing",
      ],
    },
  ],

  sections: [
    {
      heading: "Who in Vidisha is looking at IB and IGCSE, and why?",
      paragraphs: [
        "The families who search for IB and IGCSE in Vidisha are a small but distinct group. Some are government or bank employees who expect a transfer and want a child to hold a qualification that travels between states and countries. Others run agricultural businesses or trading firms and hope for an engineering or management degree abroad.",
        "Because we could not confirm an IB or Cambridge school in Vidisha, most plans involve a school elsewhere. Bhopal is the obvious direction, with one confirmed Cambridge residential campus at Ratibad. Indore has a wider cluster of schools. For a family unwilling to send a child to boarding at ten or twelve, a Bhopal or Indore school is a big decision, and tutoring can bridge the gap.",
        "A second group is students already on an online international programme, who study from home in Vidisha and need a live human subject specialist. They benefit most from a regular weekly slot and a written note that shows progress.",
        "A third group is a local CBSE or MP Board student who wants IGCSE-level maths and science before Class 11. The work is realistic, but the plan must be built around the school's own exam dates.",
      ],
      table: {
        caption: "Where IB and Cambridge study sits relative to Vidisha",
        columns: ["Place", "Distance from Vidisha", "What we could confirm"],
        rows: [
          ["Vidisha", "Local", "No IB or Cambridge or Edexcel school confirmed"],
          ["Bhopal, Ratibad", "About 62 km to the city", "Shrewsbury International School India, a Cambridge residential campus"],
          ["Indore", "Several hours by road", "Choithram International, Daly College Indore, Emerald Heights International School"],
          ["Sanchi and Gulabganj", "Very close", "Same MP Board and CBSE landscape as Vidisha"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Vidisha?",
      paragraphs: [
        "Fees depend on the tutor's experience, the subject and level, and the number of hours you book. We do not publish a list because one figure would mislead. Rates are quoted in writing before booking, and the trial lesson is free.",
        "Local tuition in Vidisha is often priced per hour or per month at modest levels, and for MP Board and CBSE that is sensible. For IB and IGCSE, a lower rate can hide a real cost if the tutor has never seen an IB mark scheme. A well-matched specialist can save months of unfocused study.",
        "Three things move a rate: how senior the subject is, how frequently lessons run, and whether the plan includes extra guidance on planning an EE or an exploration. A student taking three lessons a week ahead of May will pay differently from one taking a weekly slot in term.",
        "Online delivery also removes the small costs that add up: fuel for trips on Bhopal Road, evening travel in summer heat and time in monsoon traffic. That time goes back to study and rest.",
      ],
      bullets: [
        "Tutor experience and the level taught",
        "Weekly hours and how close the exam is",
        "Board and series being targeted",
        "Extra guidance on planning a project or essay timeline",
      ],
    },
    {
      heading: "MP Board, CBSE, ICSE, IB and IGCSE: what changes for a Vidisha student?",
      paragraphs: [
        "The MP Board and CBSE are what most Vidisha families know, and both give a solid foundation. IB and IGCSE ask different things of a student: to explain, apply and justify, and to show independent work over months.",
        "MP Board and CBSE papers often reward accurate recall of set content, which suits disciplined students. IB pushes students to move ideas into unfamiliar contexts and to write extended responses. IGCSE is closer to a clear syllabus with terminal exams, though its questions expect application.",
        "A practical difficulty is English writing at speed. A student who has studied in Hindi medium may need practice in structuring a subject answer in English, so tutors spend time on vocabulary and on the shape of an answer, not general essay style.",
        "Class 6, Class 9 and Class 11 are the natural points to switch. A gradual bridge over two terms is far easier than a sudden change.",
      ],
      table: {
        caption: "Boards a Vidisha family may compare",
        columns: ["Feature", "MP Board / CBSE", "ICSE / ISC", "IB / IGCSE"],
        rows: [
          ["Emphasis", "Set content, accurate recall", "Wide content, detailed answers", "Application and reasoning"],
          ["Independent work", "Limited", "Projects in some subjects", "IAs, EE, oral work and coursework"],
          ["Language of study", "Hindi or English", "English", "English, with a second language in the IB"],
          ["Natural switch point", "Not applicable", "Not applicable", "Class 6, Class 9 or Class 11"],
        ],
      },
    },
    {
      heading: "Is online tuition a better choice than a Vidisha coaching centre?",
      paragraphs: [
        "For IB and IGCSE, usually yes. Vidisha's coaching centres and private tutors focus on MP Board, CBSE, JEE and NEET, and we did not find one running an IB or IGCSE batch. That is not a criticism; the local demand is for those exams.",
        "An online tutor can be a specialist in IB Chemistry or IGCSE Physics based anywhere in India, and the lesson runs live with a shared board. Sessions can be recorded for revision on request. The tutor is chosen for syllabus experience and not for where they live.",
        "Limits exist. Power cuts in peak summer or heavy monsoon days can break a lesson, so a phone hotspot is a good backup. Younger children may concentrate less well on screen, so we keep sessions short for them.",
        "Self-study is useful, particularly late in the exam year, but it is weak on IAs and long written answers where feedback matters most.",
      ],
      table: {
        caption: "Support options from Vidisha",
        columns: ["Option", "Syllabus fit", "Attention", "Main drawback"],
        rows: [
          ["Coaching centre", "MP Board, CBSE, JEE and NEET", "Group", "No IB or IGCSE batch we found"],
          ["Local private tutor", "Strong on state and CBSE content", "One-to-one", "Limited IB command-term experience"],
          ["Online IB Gram tutor", "Matched by course, level and code", "One-to-one, live", "Needs a stable connection"],
          ["Self-study", "Chosen by the student", "None", "No feedback on IAs or long answers"],
        ],
      },
    },
    {
      heading: "How do heat, monsoon and festivals shape the Vidisha study year?",
      paragraphs: [
        "Vidisha's summer is hot, with April to June often pushing temperatures high, and the monsoon arrives from late June. Both affect the day. Evening lessons at home suit families in the hot months, and power or internet cuts in a heavy shower are worth planning for.",
        "Local calendars bring their own pauses. Holi and Rangpanchami in spring, Navratri and Dussehra in autumn, Ganesh Chaturthi and Diwali all mean holidays and travel. Wheat and soybean cycles also shape the year for families with land, so we ask for the school and family calendar early.",
        "IB Diploma exams fall in May and November, Cambridge IGCSE in February to March, May to June and October to November, and Edexcel in January, May to June and November. Which one applies depends on the school or centre.",
        "A sensible plan for a May session finishes content by the winter break and uses January to April for past papers, weak-topic repair and timing.",
      ],
      table: {
        caption: "Exam windows and Vidisha season effects",
        columns: ["Period", "Exam or school event", "Local effect"],
        rows: [
          ["January to March", "Edexcel January, Cambridge February and March, MP Board exams", "Cool weather; Holi at the end of the period"],
          ["April to June", "Cambridge and IB May sessions", "Heat builds; wheat harvest for farming families"],
          ["July to September", "New term, IB results in July", "Monsoon; Ganesh Chaturthi holidays"],
          ["October to November", "Cambridge and Edexcel November, IB November session", "Navratri, Dussehra and Diwali breaks"],
        ],
      },
    },
    {
      heading: "University pathways for Vidisha students with IB or IGCSE",
      paragraphs: [
        "A student who completes the IB Diploma can apply to Indian universities with an Association of Indian Universities equivalence certificate where required, and many private institutions accept IB scores directly. Central universities that admit through CUET-UG treat IB students like any other candidate.",
        "Nearby options are well known to Vidisha families. Samrat Ashok Technological Institute in Vidisha and Atal Bihari Vajpayee Government Medical College in the city are local anchors, and Bhopal has MANIT, AIIMS Bhopal and Barkatullah University. Check each institution's rules for IB and IGCSE applicants directly, since they change.",
        "For engineering, JEE Main needs Physics, Chemistry and Mathematics with a recognised qualification. For medicine, NEET-UG needs Physics, Chemistry, Biology or Biotechnology and English. Both point to careful subject choice in Class 11.",
        "Overseas study is an increasing interest. IB and IGCSE followed by A Level are recognised in the UK, Canada, Australia and the United States, and each university publishes its own requirements for every course.",
      ],
      bullets: [
        "AIU equivalence for IB Diploma holders where asked",
        "CUET-UG registration for central and many state universities",
        "JEE and NEET eligibility follows the subjects chosen in Class 11",
        "Overseas requirements are set per university and course",
      ],
    },
    {
      heading: "IB Maths AA, Maths AI and the sciences: how heavy is the load?",
      paragraphs: [
        "Analysis and Approaches suits students who enjoy algebra, calculus and proof and who may head to engineering or physics. Applications and Interpretation suits those who prefer statistics and modelling with technology, often heading to economics, business or social sciences.",
        "The exploration counts for a fifth of the mark in both, and choosing a topic late is the most common mistake. A tutor helps a student judge scale and depth but does not write or edit.",
        "In the sciences, the recurring gaps are unit handling, reading command terms and starting the investigation late. Students from a board lab background often know the content but have not framed a research question or judged a method.",
        "One diagnostic lesson shows whether HL is realistic and costs far less than a year at the wrong level.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects should a Vidisha student pick?",
      paragraphs: [
        "Most Cambridge subjects offer Core and Extended tiers, and Edexcel maths offers Foundation and Higher. Core at Cambridge caps at a C, so a student aiming for IB HL Maths or A Level sciences should aim for Extended.",
        "The next step decides the subject list. The Diploma wants Mathematics, at least two sciences, English and a second language, while a return to CBSE suggests a lighter set that keeps the door open.",
        "Practical assessment is unlike most Indian syllabuses. Several subjects use a written alternative-to-practical paper, and English First Language has directed writing in a distinct style.",
        "Hindi is available as a second language for students who want to use existing fluency to lift the overall profile.",
      ],
    },
    {
      heading: "How does a lesson work when nobody visits Vidisha?",
      paragraphs: [
        "Every lesson is online and live. No one from IB Gram visits a Vidisha home, because in-person home tuition is offered only in Gurugram and parts of Delhi NCR. We say it plainly so families are not misled by a search result.",
        "You send us the programme or board, subject, level, current grade and preferred hours. We propose a tutor with the right syllabus experience and arrange a free trial. The tutor then sends a short note on what was covered and what comes next.",
        "If the fit is wrong, we change the tutor. Rates are quoted in writing before booking. A lesson needs a laptop, a steady connection, headphones and, for handwriting, a phone or tablet camera.",
        "Parents can sit in on the trial, and for younger children we suggest a parent stays nearby for the first few lessons.",
      ],
    },
  ],

  process: [
    { title: "Send your brief", description: "Tell us the programme or board, subject and level, current grade and the hours that suit a Vidisha household." },
    { title: "Meet a matched tutor", description: "We propose a tutor who has taught that exact syllabus and share a short profile." },
    { title: "Try a free lesson", description: "Your child works live with the tutor, and both sides judge the fit at no cost." },
    { title: "Receive a written plan", description: "The tutor notes strengths and gaps, and the rate is quoted in writing." },
    { title: "Continue, adjust or change", description: "Lessons run weekly or in blocks, with a note each time and a tutor swap if needed." },
  ],

  whyPoints: [
    { title: "Syllabus-led matching", description: "Tutors are picked for the exact IB course or IGCSE code, not for proximity." },
    { title: "Straight about delivery", description: "Online only in Vidisha; visits exist only in Gurugram and parts of Delhi NCR." },
    { title: "Works around Bhopal plans", description: "Lessons can bridge a planned move to a Bhopal or Indore school." },
    { title: "Notes after lessons", description: "Short written summaries keep parents informed." },
    { title: "Firm coaching limits", description: "Tutors never write IAs, essays or graded coursework." },
    { title: "Free to try", description: "A trial lesson first, tutor changes when needed, and rates in writing." },
  ],

  faqs: [
    {
      question: "Can I find IB and IGCSE tutors in Vidisha itself?",
      answer:
        "Not that we could vouch for. What Vidisha families get from us is a specialist who teaches over video from another part of India, on IST, chosen because they have handled your child's exact course before. Local teachers here are strong on MP Board and CBSE content, which is a different skill from coaching IB command terms or a Cambridge mark scheme.",
    },
    {
      question: "Is a tutor going to arrive at our house in Vidisha?",
      answer:
        "No, and we would rather say that up front. Our in-person visits exist only for Gurugram and parts of Delhi NCR. For Vidisha the lesson is live on a laptop, one teacher and one student, while the child sits at their own study table. That is what we mean by online home tuition, and it is the only format we run in this city.",
    },
    {
      question: "Which schools near Vidisha actually teach the IB or Cambridge?",
      answer:
        "None inside Vidisha that we could confirm. The closest verified option is Shrewsbury International School India, a Cambridge residential campus near Bhopal, roughly an hour's drive away. Indore has several more. Before relying on any name, look up its authorisation on the IB or Cambridge website, since we do not vouch for schools and have no partnership with any.",
    },
    {
      question: "How are fees decided, and can you give a rough number?",
      answer:
        "We do not print a rate card, since IGCSE English at Core level and IB Physics at HL are simply not the same job. What shapes the figure is the tutor's track record, the level, and how many hours you book each week. Once you tell us those, the rate comes to you in writing before any booking, and the first lesson is free.",
    },
    {
      question: "Our child is in an MP Board school. Is switching to IB or IGCSE realistic?",
      answer:
        "It is, if the timing is sensible. Classes 6, 9 and 11 are where schools expect new joiners. Expect the biggest adjustment in written English within a subject, questions that ask for reasoning rather than recall, and lab write-ups. One diagnostic session tells us where the distance actually lies, and we then plan a short run of lessons before the change.",
    },
    {
      question: "What is the difference between Cambridge and Edexcel IGCSE?",
      answer:
        "They test overlapping content in different ways. Codes differ (Cambridge 0580 versus Edexcel 4MA1 for maths), so do paper structures and the way questions are worded. Sessions differ too: Cambridge runs in February to March, May to June and October to November, Edexcel in January, May to June and November. Tell us which your school uses and we match accordingly.",
    },
    {
      question: "Can the tutor help with my Internal Assessment or essay?",
      answer:
        "The tutor can talk through a research question, point out a weak method and explain what a marker looks for. Writing, drafting or rewriting any of it is off the table, whether that is an IA, the Extended Essay, a TOK piece or other assessed coursework. Anything a student hands in has to be their own thinking and their own words.",
    },
    {
      question: "We plan to move to Bhopal. Can lessons help with that transition?",
      answer:
        "Yes, that is one of the more common reasons families write to us. A short block of lessons before joining an IB or IGCSE school lets the student meet unfamiliar terminology, paper styles and practical requirements at home, in their own time, instead of discovering them in the first month at a new school with new classmates.",
    },
    {
      question: "How do we get the free trial going?",
      answer:
        "Send a WhatsApp message to +91 7439 368 115 or write to ibgram24@gmail.com with the board or programme, the subject and level, your child's current grade and the evenings that work. A tutor is proposed, the trial is booked, and a brief note follows it. You then choose whether to continue. The trial is never charged.",
    },
    {
      question: "What happens to lessons during summer power cuts or monsoon storms?",
      answer:
        "A dropped connection is possible in both seasons. Keep a phone hotspot charged as a fallback, and tell the tutor early if the weather looks bad. A lesson lost to an outage is moved to another slot rather than written off, and evening sessions after the peak afternoon heat generally hold up better than daytime ones.",
    },
    {
      question: "Can a Vidisha student appear for IGCSE or IB papers without a school?",
      answer:
        "IGCSE, sometimes. Cambridge and Edexcel accept private entries through registered exam centres, though the closest ones are likely to be in Bhopal or another large city, with their own deadlines and fees. IB Diploma exams usually go through an authorised school instead. Find a centre before planning revision, since that fixes the series.",
    },
    {
      question: "Which subjects are most requested from Vidisha?",
      answer:
        "Maths leads by a distance, split between Analysis and Approaches and Applications and Interpretation. Physics, Chemistry and Economics follow, then Biology and Business Management. Language lessons in English and Hindi also turn up regularly. Level matters as much as the subject, because HL and SL differ in depth and in how quickly the tutor has to move.",
    },
    {
      question: "Do IB students qualify for JEE or NEET?",
      answer:
        "Often yes, subject to the current official rules. JEE Main looks for Physics, Chemistry and Mathematics at a recognised level. NEET-UG asks for Physics, Chemistry, Biology or Biotechnology, plus English. Because these rules can change, read the latest notification and settle Diploma subjects in Class 11 with the target exam in view.",
    },
    {
      question: "How often should my child have lessons?",
      answer:
        "One or two sessions in a normal school week suits most students. Ahead of an exam series that can go to three. A bridge block before a school change may be denser still. Nothing is locked in: after the trial we agree a rhythm together, then revisit it whenever homework, tests or holidays change the picture.",
    },
    {
      question: "Will a younger child cope with learning through a screen?",
      answer:
        "Many do, when the sessions are short and visual. For children in the primary years we shorten the slot, bring in pictures and objects, and suggest an adult sits nearby for a few lessons. The free trial is the real test. If concentration drifts, we adjust the length or swap the tutor before anything else.",
    },
    {
      question: "Does IB Gram belong to any school or examining body?",
      answer:
        "It does not. This is an independent tutoring service, separate from the IB, Cambridge, Pearson and all schools named here. Where a school is mentioned, it is only to show what exists near Vidisha. Confirm any school's authorisation with the awarding body itself before you enrol a child anywhere.",
    },
  ],

  internalLinks: [
    { label: "IB tutors overview", href: "/ib-tutors/", description: "Start here to see how tutors are picked for each IB programme and subject." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "A walk through boards, tiers and popular subject combinations." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What six subjects plus the core really involve across two years." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria-based marking and the Personal Project, unpacked." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "How inquiry units lead into the final-year Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "The vocational route that blends Diploma courses with career study." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "A side-by-side look at AA and AI to help choose between them." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles you can filter by subject, programme and experience." },
    { label: "Test preparation", href: "/admissions/test-prep/", description: "Help with entrance tests that follow the IB or IGCSE years." },
    { label: "IB and IGCSE across India", href: "/india/", description: "The national view of how online matching runs city by city." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The single region where tutors can visit a family in person." },
    { label: "Contact us", href: "/contact-us/", description: "Send a brief and ask for your trial slot." },
    { label: "IB and IGCSE tutoring in Bhopal", href: "/bhopal/", description: "The state capital, where many Vidisha school plans end up." },
    { label: "IB and IGCSE tutoring in Sagar", href: "/sagar/", description: "A Bundelkhand-side city page with a similar school landscape." },
    { label: "IB and IGCSE tutoring in Ganjbasoda", href: "/ganjbasoda/", description: "The neighbouring town inside Vidisha district." },
  ],

  closingHeading: "Book a free IB or IGCSE trial lesson from Vidisha",
  closingBody:
    "Share the board or programme, the subject and level, where your child stands now and which hours are free at home. A matched tutor is proposed within a short time, and the first lesson is on the house. WhatsApp +91 7439 368 115 or write to ibgram24@gmail.com.",
};
