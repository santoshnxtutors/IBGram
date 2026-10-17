import type { CitySeoPage } from "../types";

/**
 * /tarana/ - IB and IGCSE tutoring page for Tarana, a tehsil town in Ujjain district, Madhya Pradesh.
 * No school in Tarana is confirmed to run the IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and
 * the clusters point honestly to Ujjain and Indore, reusing school names already confirmed on those pages.
 * Online-only delivery: in-person home tuition exists only in Gurugram and parts of Delhi NCR.
 */
export const tarana: CitySeoPage = {
  slug: "tarana",
  countryName: "Tarana",
  countryNameLong: "Tarana, Ujjain district, Madhya Pradesh",
  demonym: "Tarana",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings are planned around the kharif harvest weeks, the June-to-September monsoon, Diwali and Holi breaks, and the family's own school and coaching timetable",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.3333, longitude: 76.0167 },
  wikipedia: "https://en.wikipedia.org/wiki/Tarana,_Madhya_Pradesh",
  alternateNames: ["Tarana Ujjain", "Tarana Madhya Pradesh"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Tarana | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE private tuition for Tarana, Ujjain district: DP, MYP, PYP and Cambridge or Edexcel subjects, taught one to one, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Tarana",
  heroEyebrow: "IB & IGCSE ONLINE PRIVATE TUITION FOR TARANA FAMILIES",
  heroSubtitle:
    "Looking for private tuition from home in Tarana for the IB or an IGCSE syllabus? No school in the town teaches either, so the practical route is a specialist teaching your child live online, one to one, on the exact course they follow. Tutors do not travel to Tarana or visit homes here; home visits run only in Gurugram and parts of Delhi NCR. Lessons run on Indian Standard Time and are fitted around school, farm-season travel and Malwa's hot months.",
  primaryKeyword: "IB and IGCSE tutors in Tarana",
  imageAltText: "A Tarana student at a desk at home working through an IB Physics problem set with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Tarana",
    "IGCSE tutor Tarana",
    "IB home tuition Tarana",
    "IGCSE home tuition Tarana",
    "IB private tuition Tarana",
    "IB Maths tutor Tarana",
    "IGCSE Maths tutor Tarana",
    "IB Physics tutor Tarana",
    "IB Chemistry tutor Tarana",
    "IB Biology tutor Tarana",
    "IB DP tutor Tarana",
    "IB MYP tutor Tarana",
    "IB PYP tutor Tarana",
    "IGCSE online tuition Tarana",
    "online IB tutor Tarana Ujjain",
    "IB tutor Ujjain district",
    "IGCSE tutor Ujjain Madhya Pradesh",
    "IB online tuition Tarana Madhya Pradesh",
  ],

  heroTrustPoints: [
    "A tutor chosen for your child's exact IB subject and level, or exact IGCSE board, code and tier",
    "Lessons are live and online only; nobody travels to Tarana, because home visits exist only in Gurugram and parts of Delhi NCR",
    "A free trial lesson and a written note after every session",
    "Independent of every school, board and exam body mentioned on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Whole IB continuum covered" },
    { value: "Cambridge & Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "No time-zone adjustment" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "Finding IB or IGCSE help when Tarana has no IB or IGCSE school",
    paragraphs: [
      "Tarana sits in the north-east of Ujjain district, in the Malwa plateau, a town of grain markets, a railway station and schools that follow the Madhya Pradesh Board (MPBSE) or CBSE. Nobody here teaches the IB Diploma, Middle Years or Primary Years programme, and nobody prepares students for a Cambridge or Pearson Edexcel IGCSE paper. For a parent who has decided on one of those curricula anyway, the question is not which Tarana centre to join but how to get an experienced teacher in front of the child at all.",
      "The families who ask us tend to fall into a few groups. Some have a child enrolled at a residential school in Indore or further afield and want support during holidays or exam preparation. Some are registered with an online international school. Some are planning a move for Class 9 or Class 11 and want the child ready for a different style of assessment before the switch. A few are simply comparing syllabuses and want a tutor's view before choosing.",
      "A tutor on IB Gram works with one learner at a time, over live video with a shared digital whiteboard, on the subject code in front of the child: IB Mathematics Analysis and Approaches at Higher Level, Cambridge 0580 Extended, Edexcel 4PH1 Physics and so on. Because delivery is online, geography stops being the constraint it is in a town like Tarana, where a subject specialist for IB Chemistry is not going to be down the road.",
      "IB Gram is an independent service with no tie to the IB, Cambridge, Pearson or any school. Tutors coach, explain, set practice and give feedback. They do not write, edit or complete Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework, and families should treat anyone offering that as a warning sign.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP support, plus Cambridge and Pearson Edexcel IGCSE",
      "Live one-to-one online lessons on Indian Standard Time",
      "A free trial lesson, then a short plan in writing before you pay anything",
      "No home visits in Tarana; those run only in Gurugram and parts of Delhi NCR",
      "Contact: support@ibgram.com or WhatsApp +91 7439 368 115",
    ],
  },

  programmesIntro:
    "Because Tarana has no IB school, the programme name matters less than the story behind the enquiry: a transfer already made, a school switch planned for next year, or a private-candidate route through an approved centre. The notes below describe how each stage actually reaches a family here.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Learning is organised around transdisciplinary units of inquiry instead of separate textbooks, and the final year closes with a student-led Exhibition. Nothing is externally examined, so a tutor's job is to build reading fluency, number sense and the habit of asking and researching questions.",
      countryNote:
        "A Tarana child on the PYP is almost always enrolled at a school elsewhere or following a distance programme, so short weekly sessions that keep reading and mental arithmetic moving suit best.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is judged against four criteria rather than one total, and the Personal Project asks a student to run a self-directed piece of work across a year. Students who recite facts well but struggle to explain and justify are the ones who gain most from a tutor.",
      countryNote:
        "For Tarana families the MYP question is usually whether to move a Class 8 or 9 child from an MP Board classroom towards the IB, and a few months of criterion-style practice shows how realistic that is.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects, Theory of Knowledge, a 4,000-word Extended Essay and CAS make up the Diploma. Written papers fall mostly in the May session, with November used by a limited set of schools.",
      countryNote:
        "A Diploma student from the Tarana area most often needs Mathematics, Physics or Chemistry at Higher Level, studying from home alongside a residential or online school.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme pairs at least two Diploma courses with a career-related study, a reflective project and personal and professional skills. Very few Indian schools run it, but the Diploma courses inside it still need ordinary subject teaching.",
      countryNote:
        "CP enquiries from Tarana are rare; where they appear, tutoring concentrates on the two Diploma courses rather than the framework around them.",
    },
  ],

  subjectsIntro:
    "A student of Mathematics Analysis and Approaches at Higher Level needs a different tutor from one in Applications and Interpretation at Standard Level, so we start with subject, level and target exam session. For a Tarana student already working through a school's course, we then match on how that course is taught rather than only on the label.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "For students aiming at engineering, physics or economics, with proof-style reasoning, calculus and the unfamiliar problems of Paper 3 at Higher Level." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology use, with the Exploration planned early so it is not squeezed into the last term." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through fields, with practice in unit handling, graph reading and defending a method in the Scientific Investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, bonding, energetics and organic chemistry, with training to use the data booklet quickly under time pressure." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology to ecology, with attention to command terms and to the statistics a good Investigation needs." },
    { name: "IB Economics", levels: "HL / SL", description: "Labelled diagrams tied to a current example, which suits students who follow Indian agriculture and mandi pricing closely." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying theory to a case, and a Business Research Project built on a genuine local enterprise such as a grain trader or a dairy cooperative." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen analysis, comparative essays and the Individual Oral, for students whose home language is Hindi or Malvi." },
    { name: "IB Hindi A or B", levels: "HL / SL", description: "A natural strength for Tarana students, worked toward textual analysis, formal writing and the oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode, object-oriented thinking and a coherent IA solution whose code and documentation agree." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches, cited studies and structured extended-response writing." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Systems thinking, with fieldwork ideas drawn from rain-fed Malwa agriculture and water use." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study depth, fieldwork method and evaluative writing." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and sustained argument across the longer essay paper." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation-led sessions on knowledge questions, exhibition commentary and the prescribed essay titles, with the essay itself written by the student." },
  ],

  igcseSubjectsIntro:
    "Cambridge 0580 Extended and Edexcel 4MA1 Higher both sit under the IGCSE label yet differ in paper structure, so we begin with the board, subject code and tier. Tarana has no centre of its own, which means we also confirm which exam centre the child will sit at and whether the target series is Cambridge May-June, October-November or Edexcel January or May-June.",
  igcseSubjects: [
    { name: "IGCSE Mathematics (0580 / 4MA1)", levels: "Core / Extended, Foundation / Higher", description: "Algebra, trigonometry and statistics, with tier advice before the entry is fixed." },
    { name: "IGCSE Additional Mathematics", levels: "Extended", description: "Calculus and functions work for students planning A Level Mathematics or JEE-style study." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Practical-skills paper preparation and calculation fluency." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Mole calculations, rates and organic basics, with alternative-to-practical questions rehearsed." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Transport, genetics and ecosystems, with data-handling practice." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For schools that award a double science grade, balanced across three sciences." },
    { name: "IGCSE English as a First or Second Language", levels: "Core / Extended", description: "Directed writing, summary skills and speaking assessment." },
    { name: "IGCSE Hindi as a Second Language", levels: "Core / Extended", description: "A familiar home language turned into exam-ready composition and comprehension." },
    { name: "IGCSE Economics", levels: "Extended", description: "Definitions, diagrams and data response questions." },
    { name: "IGCSE Business Studies", levels: "Extended", description: "Case-study answers and calculation questions." },
    { name: "IGCSE Computer Science", levels: "Extended", description: "Algorithms, pseudocode and a programming paper." },
    { name: "IGCSE Geography", levels: "Extended", description: "Case studies, map skills and the fieldwork-style paper." },
  ],

  regionsTitle: "Tarana, nearby towns and the cities Tarana families commute to",
  tutorsIntro: "Tutors below teach live online on Indian Standard Time, so a Tarana student gets the same specialist a student in any large city would, matched by subject, level and exam board.",
  regionsIntro:
    "Tarana is small, so the useful picture takes in the surrounding tehsil and the two cities where school choices open up, Ujjain and Indore. The notes below are about timing and practicalities for lessons, and no tutor visits any of these places, since every lesson is online.",
  regions: [
    { name: "Tarana town centre", note: "Market-side homes keep a regular broadband connection; evening sessions start after shops close and children are back from school." },
    { name: "Tarana Road railway station side", note: "Families here often travel to Ujjain or Indore by train; lessons can be rescheduled around journey days without losing continuity." },
    { name: "Villages around Tarana", note: "Power cuts and mobile-data coverage vary; a mobile hotspot as a backup keeps a lesson from being lost." },
    { name: "Badnagar", note: "A neighbouring Ujjain-district town; students here have the same MP Board and CBSE options and the same absence of IB schools." },
    { name: "Mahidpur", note: "Another Ujjain-district town where families choose between MP Board schools and a move to Ujjain or Indore for older children." },
    { name: "Ghatiya", note: "Rural pockets benefit from lesson timing that avoids sowing and harvest weeks, when children help at home." },
    { name: "Nagda and Khachrod", note: "Industrial and trading towns west of Tarana where parents in factory and business work sometimes ask for international curricula." },
    { name: "Ujjain: Freeganj and Nanakheda", note: "The city most Tarana families reach first; useful for school visits and exam registrations, with online lessons keeping the child in one weekly rhythm." },
    { name: "Ujjain: Dewas Road and Madhav Nagar", note: "Residential colonies whose families sometimes consider Indore schools for IB or IGCSE." },
    { name: "Indore: Vijay Nagar and Bhawarkuan", note: "The nearest city with confirmed IB and Cambridge schools, roughly two hours away by road, and where many boarding decisions are made." },
  ],

  schoolClusters: [
    {
      city: "Nearby: Indore (IB and Cambridge schools)",
      note: "Tarana has no IB or IGCSE school. Indore, the largest city in the region, is where families usually look; these schools are listed as nearby options, not as being in Tarana. Admission, boarding and fees are for the school to confirm.",
      schools: ["Choithram International School", "Daly College", "The Emerald Heights International School"],
    },
    {
      city: "Nearby: Ujjain",
      note: "Ujjain is the district headquarters and about an hour away. Local options are limited, so Ujjain families and those from Tarana often look at Indore instead.",
      schools: [],
    },
    {
      city: "Nearby: Bhopal",
      note: "Bhopal is reachable by rail from the Tarana side and has a small number of international-curriculum options; confirm programme and board with the school before relying on it.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent tutoring service and has no affiliation with, endorsement from or contract with the IB, Cambridge, Pearson or any school named here. School names are given only to show where families in this region often look; always confirm programmes, fees and admissions directly with the school.",

  modesIntro:
    "Every lesson for a Tarana student is a live online session, because that is the only format we run outside Gurugram and parts of Delhi NCR. What changes between families is the purpose: steady weekly work, a crossing from one board to another, or a short push before an exam series.",
  modes: [
    {
      title: "Weekly live one-to-one lessons",
      description:
        "One tutor, one learner, a fixed slot each week on video with a shared whiteboard, planned around the child's school hours and Tarana's power and connectivity patterns.",
      bullets: ["Same tutor each week", "Past papers and a written note after each lesson", "Slots on weekday evenings or weekends"],
    },
    {
      title: "Transition and bridging courses",
      description:
        "For a child moving from an MP Board or CBSE class into an IB or IGCSE classroom, a few weeks of preparation on the new command terms, assessment criteria and paper styles.",
      bullets: ["Gap mapping against the new syllabus", "Mathematics and science first", "Writing skills for criterion-based marking"],
    },
    {
      title: "Exam-season intensives",
      description:
        "Short, concentrated blocks in the weeks before a May-June, October-November or January series, built around timed papers and examiner-style marking.",
      bullets: ["Timed past papers", "Mark scheme walk-throughs", "Final-week revision checklists"],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools serve families in Tarana?",
      paragraphs: [
        "No school inside Tarana is confirmed to run the IB or a Cambridge or Edexcel IGCSE course. Schools in the town follow the Madhya Pradesh Board or CBSE, mostly in Hindi or English medium. Families who want an international curriculum therefore look at Indore, about two hours away, where Choithram International School, Daly College and The Emerald Heights International School are among the names that appear in parent conversations, or at residential schools in other states.",
        "Ujjain, the district headquarters, offers a wide range of CBSE and board schools but, as far as we can confirm, no IB or IGCSE school. A child living in the Tarana area is therefore either a boarder, a weekly commuter from a rented flat in Indore, or studying online. In each case the home town keeps one thing constant: the weeknight and weekend hours at the family table, which is where a tutor's lessons live.",
        "Because we cannot name a Tarana school with confidence, this page does not pretend there is one. If you know of a school near you that has begun an IB or IGCSE programme, tell us the name and we will tailor the tutor to its syllabus code and exam board rather than guessing.",
        "Families who relocate with the Western Railway, with banks, with agricultural trading firms or with the soybean and wheat business sometimes arrive from cities where an IB school was available and then find Tarana has none. A tutor can hold the child's place in the old programme while the family decides whether to stay, move to Indore or switch boards.",
      ],
      bullets: [
        "Local schools: MP Board and CBSE, no IB or IGCSE inside Tarana",
        "Closest options: Indore, with Ujjain and Bhopal as other reference points",
        "Online tutoring bridges the gap without a move",
      ],
    },
    {
      heading: "How do MP Board, CBSE, IB and IGCSE compare for a Tarana student?",
      paragraphs: [
        "The MP Board and CBSE both lean on a fixed textbook, a final board paper and a high weight on recall. IB and IGCSE ask more of the student in explaining, applying and evaluating, and give more marks to showing method. A Tarana child coming from the board world is rarely short of knowledge; the gap is usually in structured written answers and in unseen questions.",
        "Mathematics shows the contrast fastest. A CBSE Class 10 student can solve a standard quadratic cleanly yet struggle with an IGCSE Extended question that wraps the same idea in a context and asks for a justification. In sciences, the IB expects experimental design and data handling to be marked alongside theory, which is rarely the focus in a school lab session.",
        "CBSE, IB and IGCSE all lead to university entry in India. For an IB or IGCSE student, the practical points are equivalence for Indian universities, the CUET route and, for engineering and medicine, the eligibility rules of the exam being targeted. These are covered in a later section so that parents can see how the choice plays out for a child who stays in India.",
        "The table below sets the four systems side by side for a family in the Tarana area. It is a guide, not an endorsement of one over another.",
      ],
      table: {
        caption: "MP Board, CBSE, IB and IGCSE compared for a Tarana family",
        columns: ["Feature", "MP Board", "CBSE", "IB Diploma", "Cambridge or Edexcel IGCSE"],
        rows: [
          ["Offered in Tarana", "Yes", "Yes", "No local school", "No local school"],
          ["Assessment style", "Board paper, recall-heavy", "Board paper, mixed", "Papers plus internal assessments", "Papers, with some coursework options"],
          ["Language of teaching", "Hindi or English", "English or Hindi", "English", "English"],
          ["University recognition", "Indian universities", "Indian universities", "AIU equivalence, global", "Pathway to A Level or IB"],
          ["Typical tutor need", "Exam practice", "Exam practice", "Subject depth and IA coaching", "Paper technique and tier choice"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost for a family in Tarana?",
      paragraphs: [
        "IB Gram does not publish prices. A rate is quoted in writing before you book, after the free trial lesson, and it reflects the child's level, the subject and the number of lessons per week. Online delivery means there is no travel premium of any kind in the Tarana area, so the cost is about the tutor's experience, not the distance.",
        "Several things move the rate. Higher Level Mathematics or Physics usually calls for a more specialised tutor than a Class 6 PYP reading session. Exam-season intensives pack more hours into fewer weeks. A student needing IA or EE coaching, which means feedback on a plan and not writing the work, may need longer sessions in the early stages.",
        "A Tarana family comparing options should weigh the full picture. A hostel or a rented flat in Indore adds living costs on top of school fees, whereas weekly online lessons let a child remain at home while being taught to the standard of the syllabus. Neither route is right for everyone, and we do not claim online tutoring replaces a good school.",
        "If your budget is tight, say so in the first message. A smaller number of well-planned sessions per month, focused on the paper or topic that costs the most marks, often beats a long weekly slot used on general revision. We will propose a plan to fit and put it in writing.",
      ],
      bullets: [
        "No published rate card; every quote is written and confirmed before booking",
        "Cost drivers: subject, level, tutor experience, sessions per week and exam proximity",
        "No travel charges because every lesson is online",
      ],
    },
    {
      heading: "Online tutor, coaching centre, private tutor or self-study for Tarana students?",
      paragraphs: [
        "Tarana does not have a coaching culture on the scale of Kota or Indore, and the centres that exist are aimed at board exams, JEE and NEET foundation and competitive tests. None teaches the IB or IGCSE, so a family has to decide between a distant specialist online, a general local teacher who will work from the textbook, or self-study with past papers.",
        "A good private teacher in Tarana can still help with fundamentals, particularly in Mathematics and English. The limit is syllabus knowledge: a teacher who has never seen a Cambridge 0580 Extended paper or an IB Mathematics Analysis and Approaches Paper 3 cannot explain how it is marked. The online tutor on IB Gram has, because that is what they teach every week.",
        "Self-study with past papers works for disciplined students, particularly in the final months, provided the student can mark honestly against the scheme. Without feedback, the common failure is to repeat the same type of error through ten papers. A tutor is most useful at exactly that point.",
        "The comparison below is deliberately plain. It shows what each route does well so a Tarana family can combine them, for instance a local teacher for the Hindi subject and an online tutor for Higher Level Mathematics.",
      ],
      table: {
        caption: "Ways to get IB or IGCSE help from Tarana",
        columns: ["Option", "Syllabus knowledge", "Convenience in Tarana", "Feedback quality", "Best suited to"],
        rows: [
          ["Online one-to-one tutor", "High, matched to the exact course", "Home, on a laptop", "Written note after each lesson", "Anyone studying IB or IGCSE content"],
          ["Local private teacher", "Usually board-focused", "Home or teacher's place", "Informal", "Fundamentals and language support"],
          ["Coaching centre", "None for IB or IGCSE", "Town centre", "Batch-level", "JEE, NEET or board-exam batches"],
          ["Self-study with past papers", "Depends on the student", "Anywhere", "Only as good as self-marking", "Disciplined senior students"],
        ],
      },
    },
    {
      heading: "Exam calendar, school year and Malwa seasons for IB and IGCSE students",
      paragraphs: [
        "IB Diploma written papers fall mostly in the May session, with results in early July. Cambridge IGCSE has May-June and October-November series, with results in August and January. Edexcel IGCSE has January and May-June windows. A Tarana child must have an approved exam centre in mind well before registration closes, because the town has none of its own.",
        "The local calendar matters as much as the board's. The kharif harvest in October pulls many rural families into extra work, Diwali and Holi interrupt study for several days, and the April-to-June heat makes afternoon work hard. Monsoon rain from late June can disrupt power and mobile signal, which is why a backup connection is worth planning for.",
        "Indian schools typically start the year in April. An IB or IGCSE course taken at a school elsewhere may follow a different cycle, and online schools often run on a different calendar again. We therefore ask for the child's own school dates and build a revision map backwards from the exam month.",
        "The table below is a planning aid, not a promise of dates. Exam boards publish timetables each year, and families should confirm dates with the school or exam centre.",
      ],
      table: {
        caption: "Exam series and local calendar for Tarana students",
        columns: ["Period", "Exam or event", "What students usually do"],
        rows: [
          ["January", "Edexcel IGCSE window; Cambridge results", "Mock exams and tier decisions"],
          ["March-April", "Indian school year begins", "New syllabus planning and baseline papers"],
          ["May-June", "IB Diploma and IGCSE main series", "Timed papers, then exams; summer heat limits afternoons"],
          ["July-September", "Monsoon; IB results in early July", "Steady content building; backup internet plan"],
          ["October-November", "Cambridge IGCSE second series; kharif harvest and Diwali", "Short, focused lessons around family commitments"],
        ],
      },
    },
    {
      heading: "What university routes open up from Tarana for IB and IGCSE students?",
      paragraphs: [
        "Indian universities generally recognise the IB Diploma through equivalence from the Association of Indian Universities (AIU), and IGCSE results are usually followed by A Level, IB or a return to CBSE for Class 11 and 12. A Tarana student who finishes an IB Diploma can apply for CUET-UG and to many private universities, and can look abroad to the UK, US, Canada and Australia.",
        "For engineering, JEE Main eligibility depends on the qualifying examination and the subject combination, and families should verify the current rules published by the exam authority before choosing subjects. For medicine, NEET requires Physics, Chemistry and Biology, which means an IB student aiming at it needs the right subjects at the right level. These are decisions to make in Class 10, not Class 12.",
        "Close to home, students look at Vikram University in Ujjain, Devi Ahilya Vishwavidyalaya and IIT Indore and IIM Indore in Indore, and institutions in Bhopal. Admissions to those routes are through CUET, JEE or NEET depending on the course, and IB scores matter in a different way for each.",
        "Overseas, predicted grades, the Extended Essay and Theory of Knowledge are part of how universities read an IB profile. For IGCSE students, the grades feed into the A Level or IB offer. A tutor can explain what a given target needs in each subject, but admission is always the decision of the university.",
      ],
      bullets: [
        "India: AIU equivalence, CUET-UG, private universities",
        "Engineering and medicine: check JEE and NEET subject eligibility early",
        "Abroad: UK, US, Canada and Australia, depending on grades and subject mix",
      ],
    },
    {
      heading: "IB Maths AA and AI, Physics, Chemistry and Biology in detail",
      paragraphs: [
        "IB Mathematics Analysis and Approaches suits students who like algebra, functions and calculus, and who expect to study engineering, physics or economics. Higher Level adds depth in series, vectors and differential equations. Applications and Interpretation is more statistics, modelling and technology, with a lower proof load, and suits business, biology or social science routes.",
        "Both courses assess a written Exploration. The common mistake is to pick a topic late and then chase data. Tutors help students pick a manageable idea, plan the structure and understand the marking criteria, while the student does the mathematics and the writing. The same applies to the sciences' Scientific Investigation.",
        "IB Physics at Higher Level is demanding on quantitative reasoning: mechanics, waves, fields and nuclear physics, with paper styles that mix calculation and explanation. Chemistry rewards a systematic approach to calculations and careful reading of data booklets. Biology rewards precise terminology and the ability to interpret graphs and experimental design.",
        "A tutor working with a Tarana student will usually start with a diagnostic paper, find the three topics that cost the most marks and plan the next six weeks around them. Past papers come after the weak points are repaired, not before.",
      ],
    },
    {
      heading: "IGCSE Core and Extended, tiers and subject choices",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended papers in many subjects. Core caps the top grade, while Extended opens the full range. Edexcel uses Foundation and Higher tiers in a similar way. Entering the wrong tier is the most expensive mistake a family can make, because a student on Core cannot reach a grade that colleges asking for strong results expect.",
        "A good rule is to prepare for the harder tier unless the child is struggling badly, because moving down is easy and moving up is not. A tutor can run a short diagnostic and say plainly which tier looks realistic, and the school or exam centre makes the final entry.",
        "Subject choices matter too. Students aiming at engineering or the sciences usually take Mathematics, Additional Mathematics, Physics, Chemistry and Biology or Computer Science. Those leaning towards business or law might add Economics, Business Studies and English Literature. Hindi can be a strong, dependable grade for a Tarana student.",
        "Coursework and practical papers vary by subject and board. Tutors explain what the examiner is looking for and give feedback on drafts of practice work, but never produce coursework for submission.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Send the programme, subject, level and exam session by WhatsApp on +91 7439 368 115 or email support@ibgram.com." },
    { title: "Tutor shortlist", description: "We match a tutor who teaches the exact course and reply with a short profile." },
    { title: "Free trial lesson", description: "The child attends a live online trial so the family can judge the fit." },
    { title: "Written plan and rate", description: "You receive a short plan and the rate in writing before any booking." },
    { title: "Weekly lessons", description: "Lessons begin with a note after each session and a tutor change if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Right course, not just right subject", description: "Tutors are chosen for the exact IB subject and level or the exact IGCSE board and tier." },
    { title: "Honest about format", description: "Everything is online for Tarana; we say plainly that home visits run only in Gurugram and parts of Delhi NCR." },
    { title: "No pricing surprises", description: "Rates are written before booking and there are no travel charges." },
    { title: "Written notes", description: "Each lesson ends with a short note on what was covered and what to practise next." },
    { title: "Fit guaranteed by change, not by promise", description: "If the match is wrong, we change the tutor; we do not promise grades." },
    { title: "Coaching with integrity", description: "Tutors never write IAs, Extended Essays, TOK essays or coursework." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE tutors in Tarana?", answer: "There are no IB or IGCSE specialists we can confirm in Tarana itself, but IB Gram tutors teach Tarana students live online. Tutors are based elsewhere in India and teach on Indian Standard Time. A free trial lesson shows how a session works before you commit, and a tutor can be changed if the fit is wrong." },
    { question: "Can an IB or IGCSE tutor come to my home in Tarana?", answer: "No, tutors do not visit homes in Tarana. In-person home tuition runs only in Gurugram and parts of Delhi NCR. For Tarana, lessons are one to one on video, taken from home on a laptop or tablet, with a shared whiteboard for working through problems and annotated feedback." },
    { question: "Is there any IB or IGCSE school in Tarana?", answer: "None that we can confirm. Schools in Tarana follow the Madhya Pradesh Board or CBSE. Families looking for an IB or Cambridge school usually consider Indore, about two hours away. We name only schools whose programmes we have confirmed, and recommend checking directly with any school." },
    { question: "How does online IB tuition work for a student in a small town?", answer: "A tutor and student meet on a video call at a fixed weekly time and use a shared whiteboard, past papers and screen-shared mark schemes. A stable connection and a laptop are enough. We suggest a mobile hotspot as a backup during monsoon months, when power and signal in smaller towns can drop." },
    { question: "How much does IB or IGCSE tuition cost in Tarana?", answer: "We do not publish prices. The rate depends on subject, level, tutor experience and how many sessions a week, and is quoted in writing after the free trial lesson. There is no travel charge because every lesson is online, so Tarana families pay for teaching, not distance." },
    { question: "Which IB subjects are hardest for students from MP Board or CBSE?", answer: "Students coming from MP Board or CBSE most often find IB Mathematics at Higher Level, Physics and English A the hardest, because answers need explanation and justification and not only a correct result. A diagnostic paper in the first lesson shows which two or three topics need attention first." },
    { question: "Can a tutor help with my IB Internal Assessment or Extended Essay?", answer: "Tutors can coach but not write. They help you choose a manageable question, understand the assessment criteria and give feedback on a draft you wrote. They do not write, rewrite or complete any IA, Extended Essay, TOK essay or coursework, and we will not offer that service." },
    { question: "Which IGCSE board should my child take, Cambridge or Edexcel?", answer: "The school or exam centre usually decides, so ask them first. Cambridge IGCSE has Core and Extended papers and two main series, while Edexcel uses Foundation and Higher tiers with January and May-June windows. Tell us the board and the subject code and we will match a tutor who teaches that specification." },
    { question: "Where can a Tarana student sit IB or IGCSE exams?", answer: "Tarana has no exam centre we can confirm. Candidates sit at the school where they are registered or at an approved private-candidate centre, often in Indore or another city. Register early, because private candidates need a centre to accept them well before the series begins." },
    { question: "Do you cover IB PYP and MYP as well as the Diploma?", answer: "Yes. Tutors support PYP reading and number work, MYP criterion-based subjects and the Personal Project, and the Diploma and Career-related Programme. For younger children, short regular sessions work better than long ones, and the tutor's note after each lesson shows the parent what changed." },
    { question: "What time are lessons held for students in Tarana?", answer: "Lessons run on Indian Standard Time, usually on weekday evenings after school or on weekends. During exam weeks or festival periods such as Diwali and Holi, the schedule can shift. We plan around your child's school, travel days and the family's farm or business commitments." },
    { question: "Can my child join online from a village near Tarana?", answer: "Yes, if the connection is steady. A laptop or tablet with a working camera, and a hotspot as backup, are what matter. If power cuts are frequent, we choose slots when supply is most reliable, and a tutor can share a recording of the whiteboard notes afterwards." },
    { question: "Does IB Gram help with Hindi as a subject?", answer: "Yes. IB Hindi A or B and IGCSE Hindi as a Second Language are available, and a Tarana student often finds Hindi a dependable scoring subject. Tutors focus on textual analysis, formal writing and speaking so the strength turns into a strong grade." },
    { question: "Will the IB or IGCSE be accepted by Indian universities?", answer: "Generally yes. The IB Diploma is recognised through AIU equivalence and IGCSE leads into A Level, IB or Class 11 and 12 in India. Specific courses, particularly engineering and medicine, have their own subject rules, so check the current eligibility requirements before choosing subjects." },
    { question: "How do I start with IB Gram from Tarana?", answer: "Send the programme, subject, level and exam session by WhatsApp on +91 7439 368 115 or email support@ibgram.com. We will suggest a tutor and arrange a free trial lesson. After the trial you receive a written plan and rate and can decide whether to continue." },
    { question: "What if the tutor is not the right fit?", answer: "Tell us after the trial or at any point, and we will change the tutor. There is no penalty for asking. We do not guarantee grades, but we do take fit seriously, since a child who is comfortable with a tutor learns faster and asks more questions." },
  ],

  internalLinks: [
    { label: "IB tutors across India", href: "/india/", description: "Our India hub with all city pages and online tuition options." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse IB subject tutors and how matching works." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE support by subject." },
    { label: "IB PYP programme", href: "/programmes/pyp/", description: "What the Primary Years Programme covers and how a tutor helps." },
    { label: "IB MYP programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and subject support." },
    { label: "IB Diploma programme", href: "/programmes/dp/", description: "Six subjects, the core and IA support explained." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches and Applications and Interpretation." },
    { label: "Meet the tutors", href: "/tutors/", description: "Tutor profiles by subject and level." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us or message on WhatsApp for a free trial." },
    { label: "IB and IGCSE tutors in Ujjain", href: "/ujjain/", description: "Our page for the district headquarters." },
    { label: "IB and IGCSE tutors in Indore", href: "/indore/", description: "The nearest city with IB and Cambridge schools." },
    { label: "IB and IGCSE tutors in Ratlam", href: "/ratlam/", description: "A neighbouring Malwa city covered online." },
  ],

  closingHeading: "Start with one free trial lesson from Tarana",
  closingBody:
    "Tell us the subject, level and exam session and we will arrange a live trial lesson with a tutor who teaches that exact course. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp. Everything is online, so there is nothing to travel for and nothing to pay until you have seen a lesson and received the plan and rate in writing.",
};
