import type { CitySeoPage } from "../types";

/**
 * No school inside Mhow is confirmed for IB or Cambridge/Edexcel IGCSE, so stripSchools is empty.
 * The Indore cluster reuses the three Indore schools already verified for the Indore page.
 */
export const mhowCantonment: CitySeoPage = {
  slug: "mhow-cantonment",
  countryName: "Mhow Cantonment",
  countryNameLong: "Mhow Cantonment (Dr Ambedkar Nagar), Madhya Pradesh",
  demonym: "Mhow",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and Sunday slots that respect parade and duty hours, posting-season moves and the Malwa monsoon",
  lastUpdated: "2026-09-21",

  title: "IB & IGCSE Tutors in Mhow Cantonment | Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Mhow Cantonment (Dr Ambedkar Nagar) and army families near Indore: DP, MYP, PYP and Cambridge online, one to one, free trial.",
  h1: "IB and IGCSE Tutors and Online Tuition in Mhow Cantonment",
  heroEyebrow: "IB & IGCSE TUITION FOR MHOW AND DR AMBEDKAR NAGAR, ONLINE",
  heroSubtitle:
    "Mhow, officially Dr Ambedkar Nagar, is an army cantonment about 25 km south-west of Indore, and its children often follow a syllabus that has to survive the next posting order. For private tuition at home in an IB or Cambridge IGCSE subject, IB Gram runs one-to-one video lessons with a tutor who has taught that exact course, so the same teacher can carry on when a family moves to another station.",
  primaryKeyword: "IB and IGCSE tutors in Mhow Cantonment",
  imageAltText: "Army family's child in Mhow Cantonment following an IB Chemistry lesson with an online tutor at home",
  secondaryKeywords: [
    "IB tutor in Mhow Cantonment",
    "IGCSE tutor in Mhow Cantonment",
    "IB home tuition Mhow",
    "IGCSE home tuition Mhow",
    "IB private tuition Mhow",
    "IB Maths tutor Mhow",
    "IGCSE Maths tutor Mhow",
    "IB Physics tutor Mhow",
    "IB Chemistry tutor Mhow",
    "IB Biology tutor Mhow",
    "IB DP tutor Mhow",
    "IB MYP tutor Mhow",
    "IB PYP tutor Mhow",
    "IGCSE online tuition Mhow",
    "online IB tutor Dr Ambedkar Nagar",
    "Cambridge IGCSE tutor Mhow Indore",
    "IB tutor for defence families Mhow",
    "IB tutor Jam Gate Mhow",
    "IGCSE tutor Simrol",
    "IB tutor near Indore Mhow road",
  ],

  heroTrustPoints: [
    "Tutors matched to the precise IB subject and level or IGCSE syllabus code",
    "Live one-to-one lessons over video from your quarters or house in Mhow",
    "One trial lesson with no fee attached",
    "A separate business from every school, board and examining body",
  ],
  heroStats: [
    { value: "Posting-proof", label: "Same tutor after a move" },
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards" },
    { value: "Free trial", label: "Before anything is agreed" },
  ],

  intro: {
    heading: "For Mhow's army families, tuition that moves when the posting does",
    paragraphs: [
      "Mhow is one of the Indian Army's long-established training stations. The Infantry School, the College of Combat and the Military College of Telecommunication Engineering are all based here, and the town is also the birthplace of Dr B.R. Ambedkar, which is why it now carries his name alongside the old one. For a parent in uniform, the schooling question is rarely just about Mhow. It is about the next station, and the one after that.",
      "That is the reasoning behind IB and IGCSE for many defence households. Both syllabuses are followed in the same form in schools across India and abroad, so a child who moves from Mhow to Pune, Delhi or Bengaluru finds much the same course on the other side. What can break is the tutoring. A local teacher stays behind. An online tutor from IB Gram teaches over video, so a Class 10 child can keep the same subject teacher through a mid-year relocation.",
      "To be exact about what we do: lessons are live and one to one, the child studies at home on a laptop or tablet, and the tutor is elsewhere in India. Nobody comes to Mhow, and our in-person visits exist only for Gurugram and part of Delhi NCR. Civilian families in Mhow town and its surrounding villages use the service in the same way.",
      "IB Gram is not linked to the Army, the Army Welfare Education Society, the IB, Cambridge, Pearson Edexcel or any school. Our tutors coach understanding and exam skill. They do not produce IAs, essays or coursework on a student's behalf. The first lesson is free.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE",
      "Video lessons only; no tutor visits Mhow",
      "Same tutor can continue after a posting to another station",
      "Free first lesson and a written note after each session",
    ],
  },

  programmesIntro:
    "Service families read the IB programmes differently from most. The useful questions are how easily a stage transfers between schools and how much a child can carry between postings, so each programme below is described in those terms as well as by content.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "PYP classrooms trade single textbooks for shared themes, and pupils complete a self-directed Exhibition in their last year. A tutor's contribution is quiet: reading practice, sums that stay fluent and someone familiar in a year of new faces.",
      countryNote:
        "A primary child who has changed schools twice in three years often has holes in reading or number work. A steady weekly tutor closes them without adding to the stress of a new station.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP subjects are marked against published criteria, and the Personal Project at the end is a months-long piece of self-management. Students who have not seen these criteria before need a clear introduction.",
      countryNote:
        "MYP students arriving from CBSE, including Kendriya Vidyalaya and other service-linked schools, usually need practice in writing reasoned answers, and a project journal that survives a mid-year move.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six courses at Higher and Standard Level are combined with TOK, an Extended Essay and CAS, and the two-year sequence leaves little room for a lost term. Internal assessments and predicted grades feed directly into university offers.",
      countryNote:
        "Because a posting in Grade 11 or 12 is especially disruptive, defence families often request a tutor who can hold the Diploma course steady across two schools, chiefly in Mathematics and the sciences.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP combines at least two DP subjects with a career-related course and a reflective project. Very few Indian schools run it.",
      countryNote:
        "We know of no CP school in Mhow. Any CP tutoring would cover the DP-level subjects of a student enrolled at a school in another place.",
    },
  ],

  subjectsIntro:
    "When a child changes schools mid-course, the exact course and level matter more than the subject name. We ask which Maths, which Science options and which level (HL or SL) your child is on, and find a tutor who has taught that same combination.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof for students who may go into engineering or the sciences, with steady practice on unfamiliar problems." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Data handling, models and statistical tests using a calculator, plus an exploration topic settled early enough to survive a school change." },
    { name: "IB Physics", levels: "HL / SL", description: "Forces, waves, circuits and fields, and for HL the quantum and nuclear material that trips up students who have missed a term." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, energy changes, equilibria and organic routes, with the data booklet used as a working tool." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and human physiology, with precise phrasing for short answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram habits, key definitions and current-affairs examples for the internal commentaries." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, numeric tools and written recommendations that weigh both sides." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis, comparative essays and oral commentary practice." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and networks theory, together with structured documentation of the internal solution." },
    { name: "IB Hindi A and Hindi B", levels: "HL / SL", description: "Literature analysis or language acquisition in Hindi, a natural strength for children who have grown up across several regions." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation, structured essays and the investigation that forms the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Core studies used as evidence, and building extended answers within the time limit." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion of how we come to know things, moving towards an exhibition and essay that belong to the student." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Choosing a question that can be answered in the word limit and building a plan. Advice and feedback only." },
    { name: "IB MYP Mathematics and Sciences", levels: "MYP 1-5", description: "Investigation design, reasoning in full sentences and a firm base for the Diploma." },
    { name: "IB MYP Language and Literature", levels: "MYP 1-5", description: "Criterion-based writing and a Personal Project journal that keeps pace with the calendar." },
  ],

  igcseSubjectsIntro:
    "Cambridge is the more common IGCSE board among Indian schools, and Pearson Edexcel is the other. A child coming into Mhow or leaving it may swap boards with the school, so we confirm the syllabus code each time and work from that.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Number, algebra, geometry and probability in exam form, with method laid out so marks are earned even after a slip." },
    { name: "IGCSE Additional Mathematics", levels: "Grade 10", description: "Calculus, functions and coordinate geometry that prepare students for IB or A Level Mathematics." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Motion, heat, circuits and waves, plus the written practical-skills paper." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, reactivity, organic basics and interpreting qualitative tests." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, transport, reproduction and ecology, with data-handling questions." },
    { name: "IGCSE Combined and Coordinated Sciences", levels: "Grade 9-10", description: "Three sciences under one qualification, revised on a shared timetable." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Algorithms, logic and Python, with regular short coding tasks." },
    { name: "IGCSE Economics and Accounting", levels: "Grade 9-10", description: "Definitions, diagrams, ledgers and final accounts, with layouts examiners expect." },
    { name: "IGCSE English First and Second Language", levels: "Grade 9-10", description: "Directed writing, summaries and comprehension, with speaking practice where required." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "Reading, writing and speaking tasks in Hindi, useful for children from mixed-language service households." },
  ],

  regionsTitle: "Mhow, Dr Ambedkar Nagar and neighbouring areas we teach online",
  regionsIntro:
    "Online lessons mean a child in the cantonment and a child in a village on the Indore road see the same tutors. Practical details differ: service housing in the cantonment, private housing in town, and how long the school run to Indore takes. The notes below describe what we allow for.",
  regions: [
    { name: "Jam Gate and the old town", note: "The busy market end of Mhow, where civilian families and long-term residents live close to the cantonment boundary." },
    { name: "Sadar Bazaar", note: "The commercial spine of the cantonment, used by service and civilian families alike, with lively evenings that shape lesson timings." },
    { name: "Dr Ambedkar Nagar and Bhim Janmabhoomi", note: "The area around the memorial to Dr Ambedkar's birthplace, a landmark drawing visitors from across India." },
    { name: "Infantry School and college campuses", note: "Residential areas attached to the training institutions, where officers' and instructors' families live for the length of a tenure." },
    { name: "Cantonment married accommodation", note: "Quarters where postings come and go, so timetables are often arranged around a family's expected date of move." },
    { name: "Kodaria", note: "A semi-rural stretch beyond the cantonment, with households who travel into Mhow or Indore for school." },
    { name: "Gawli Palasia", note: "A village-town on the Mhow-Indore corridor that many families pass through daily on the way to Indore schools." },
    { name: "Simrol", note: "The area near IIT Indore, home to faculty and research families who often know international curricula from abroad." },
    { name: "Rau and the AB Road stretch", note: "The southern edge of Indore, closest to the Mhow side, with international-school campuses along the way." },
  ],

  schoolDisclaimer:
    "The schools listed here are named only to show where children from Mhow may study. IB Gram is unconnected with them, with the Indian Army or its education bodies, with the IB and with Cambridge and Pearson. We know of no IB or IGCSE school inside the cantonment or town of Mhow, so none is claimed as local.",
  schoolClusters: [
    {
      city: "Mhow Cantonment and Dr Ambedkar Nagar",
      note: "We cannot confirm an IB or Cambridge or Edexcel IGCSE school inside Mhow. Its schools follow CBSE, MP Board and service-linked patterns, and the international curricula reach children by tutoring or by attending school in Indore.",
      schools: [],
    },
    {
      city: "Nearby: south and central Indore",
      note: "Choithram International School and Daly College are among the Indore names we have confirmed for IB and Cambridge respectively, within reach of families who accept a daily journey of around an hour each way or board.",
      schools: ["Choithram International School", "Daly College"],
    },
    {
      city: "Nearby: the Rau and AB Road corridor",
      note: "The Emerald Heights International School lies on the southern edge of Indore, the side closest to Mhow, and is confirmed for the IB Diploma and Cambridge IGCSE.",
      schools: ["The Emerald Heights International School"],
    },
  ],

  modesIntro:
    "Lessons for Mhow families are always live and remote, and the shape they take depends on duty timetables and the next move.",
  modes: [
    {
      title: "Steady weekly lesson, portable across postings",
      description:
        "One student, one tutor and a fixed hour. If the family moves, the lesson simply carries on at the new address, since only the time zone stays the same across India.",
      bullets: [
        "The same tutor after a relocation",
        "Board work saved for revision",
        "Written note after each session",
        "Rebooked around a move date",
      ],
    },
    {
      title: "Mid-year transfer bridging",
      description:
        "When a child joins a new school partway through a course, a short run of sessions reconstructs what the previous school taught differently and prepares for the new teacher's pace.",
      bullets: [
        "Diagnostic on the first session",
        "Topics the new school has already covered",
        "Focus on assessed pieces due soon",
        "Tapering off as the child settles",
      ],
    },
    {
      title: "Exam-window revision",
      description:
        "In the weeks before mocks and the May or November series, extra hours drill past papers and error analysis, whichever station the family is at.",
      bullets: [
        "Timed past-paper practice",
        "Mark-scheme walk-throughs",
        "Extra hours only in the busy weeks",
        "Return to the normal slot afterwards",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools serve families in Mhow?",
      paragraphs: [
        "There is no IB or Cambridge school in Mhow that we can verify, and that includes the cantonment and the surrounding town. Children of serving personnel usually attend CBSE schools, including service-linked ones, while civilian families choose between CBSE, MP Board and local private schools. For an international syllabus, the natural direction is Indore.",
        "Three Indore schools are confirmed on our Indore page. Choithram International School and Daly College serve central and southern Indore, and The Emerald Heights International School stands on the Rau side, closest to Mhow. Distance still matters: a daily journey of an hour or so each way is a real burden, and some families weigh a boarding place instead, particularly at Daly College.",
        "The families we hear from are of several kinds. Some are service households who chose an international curriculum because it is recognised wherever they may be posted. Some are civilians in Mhow's markets and villages who want a route towards overseas study. Others are academics near IIT Indore at Simrol, who know the syllabus from earlier postings abroad.",
        "In each case a tutor plays a supporting role. It helps a child prepare for entry to an Indore school, or keep pace once in it, or keep a course steady through a posting. It is not a substitute for attending an authorised school, and it is not offered as one.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed inside Mhow",
        "Indore has three confirmed schools within a long commute",
        "Service, civilian and academic families all use online tutoring",
        "A tutor supports school attendance and never replaces it",
      ],
    },
    {
      heading: "How does IB or IGCSE compare with CBSE and MP Board for a child in Mhow?",
      paragraphs: [
        "CBSE is the board most familiar to service families because it is standard at schools near military stations across the country. Its syllabus is the same wherever the child goes, which is its strength. MP Board is common among local civilian families, and follows a state textbook pattern in Hindi or English.",
        "IB and IGCSE keep a similar consistency, but of a different kind. The course is defined internationally, so a Chemistry HL student in Indore and one in Bengaluru follow the same guide. What changes is the style of questioning. Instead of repeating textbook content, students are asked to interpret, compare and argue from evidence.",
        "The practical effect for a child moving from CBSE or MP Board is less about content than about writing. Answers need a stated claim, evidence and a link back to the question. Students who have always been quick at recall often need a term of guided practice, and science vocabulary in English has to be built on purpose for those from Hindi-medium schools.",
        "A side-by-side view helps a family in Mhow see the trade-offs clearly.",
      ],
      table: {
        caption: "CBSE, MP Board and IB or IGCSE, from a Mhow family's point of view",
        columns: ["Feature", "CBSE", "MP Board", "IB / IGCSE"],
        rows: [
          ["Transfer between stations", "Very smooth, same syllabus nationwide", "Weaker outside Madhya Pradesh", "Smooth between authorised schools, though not every station has one"],
          ["Assessment style", "Recall plus application", "Recall of the state textbook", "Reasoning, evidence, evaluation"],
          ["Teaching language", "English or Hindi", "Hindi or English", "English, plus a second language"],
          ["Local availability", "Several schools in and near Mhow", "Widespread", "Not confirmed in Mhow; Indore has options"],
        ],
      },
    },
    {
      heading: "How is the fee for IB or IGCSE tuition in Mhow worked out?",
      paragraphs: [
        "Fees follow five variables: the programme and level, the subject, how long the lesson runs, how many lessons a week, and the tutor's depth of experience with your syllabus. IB Diploma HL Physics from someone who has taught it for years is priced differently from support in MYP Mathematics in Class 7.",
        "Since the lessons are online, a family is not paying towards travel, and is not limited to tutors who can reach Mhow. For service families this has a second benefit: the arrangement does not have to be rebuilt when a posting order arrives, because the same tutor can carry on from another address.",
        "IB Gram does not show fixed prices. Your brief decides the figure, and we send it in writing before you book the trial. If the trial does not suit, you owe nothing, and after that you can lower the hours, pause for a field exercise or a move, or stop altogether.",
        "A practical route is to begin with a single weekly hour aimed at the largest gap, review after four or five weeks, and add sessions only for mocks and exam periods. That keeps spending proportionate.",
      ],
      bullets: [
        "Programme, level, subject, hour length and frequency set the fee",
        "No travel cost and no rebuilding after a posting",
        "Written figure before the trial",
        "Pause, reduce or stop whenever needed",
      ],
    },
    {
      heading: "Why choose an online tutor over cantonment coaching or a local teacher?",
      paragraphs: [
        "Mhow and Indore have coaching for board exams, NDA and other defence entrance tests, JEE and NEET, and a large pool of private teachers. Those serve their exams well. IB and Cambridge papers are constructed differently, and a batch preparing for another test does not use them.",
        "A tutor from IB Gram is chosen because they have taught the actual course. They use past papers from the right board, explain what an examiner is looking for, and leave a written summary after each lesson. Because they are not tied to Mhow, they are still available after the family has moved.",
        "Self-study is useful for revision, but where feedback matters, it falls short. Essays, laboratory write-ups, orals and IA methodology improve when an experienced reader comments, and that is where a tutor adds the most.",
        "The table below compares the routes for a Mhow household.",
      ],
      table: {
        caption: "Study routes for an IB or IGCSE student in Mhow",
        columns: ["Route", "Knows the IB or IGCSE course", "Feedback", "What happens on a posting"],
        rows: [
          ["Online specialist tutor", "Yes, for the named course", "Every lesson, one to one", "Continues from the new address"],
          ["Coaching for NDA, JEE or NEET", "No, different exams", "Shared in a batch", "Ends when the family leaves"],
          ["Local private teacher", "Sometimes, subject only", "Personal", "Ends when the family leaves"],
          ["Self-study", "Depends on the student", "None without review", "Unaffected but unsupported"],
        ],
      },
    },
    {
      heading: "How do posting seasons, parade hours and the Malwa monsoon shape study in Mhow?",
      paragraphs: [
        "In service families the academic year is often laid over a second calendar: the posting cycle. Orders commonly land in spring and summer, and a family may relocate between April and July, exactly when new school years begin and just after IB and Cambridge exams. Tutors plan for this by keeping notes and board work in a shared folder.",
        "Duty hours matter too. A parent on parade or exercise may be unavailable at expected times, and older children may need to be alone with the laptop. Lessons are set at agreed slots, and rebooked without fuss when an exercise or field posting intervenes. Sunday sessions suit many households.",
        "Weather plays a part. Mhow sits on the Malwa plateau and is cooler than the Indore plains in the monsoon, but June to September rain can disrupt roads and power. Diwali, Holi, Dussehra and Eid change routines, while Ambedkar Jayanti on 14 April brings crowds to Bhim Janmabhoomi. Tutors work around all of them.",
        "The table shows how these patterns fit the international exam calendar.",
      ],
      table: {
        caption: "Mhow's posting, weather and festival calendar against IB and IGCSE dates",
        columns: ["Months", "Local pattern", "Academic point"],
        rows: [
          ["March to April", "Ambedkar Jayanti, rising heat, posting orders begin", "Final preparation for IB May and Cambridge May-June exams"],
          ["May to July", "Summer break, most relocations", "Exams, then IB results in July; new school year"],
          ["July to September", "Monsoon and cool weather on the plateau", "Term begins; mocks approach in some schools"],
          ["October to December", "Dussehra, Diwali, pleasant weather", "Cambridge and Edexcel autumn series; IB November session"],
        ],
      },
    },
    {
      heading: "What can a Mhow student do after IB or IGCSE?",
      paragraphs: [
        "Children of service families tend to have wide horizons. After the IB Diploma or IGCSE and A Levels, some aim for the National Defence Academy or other services routes, some for engineering or medicine in India, and others for universities overseas. Which subjects to take should be discussed with that plan in mind by Grade 9.",
        "For entry to Indian institutions, the Association of Indian Universities issues equivalence certificates that translate IB and Cambridge grades, and many universities request them. CUET-UG lets international-board students apply, if the subject mix matches the course. Rules shift from year to year, so each institution's latest notice is the reference.",
        "Service-specific entrances, including NDA, have their own eligibility conditions for candidates from international boards, and these must be confirmed with the official notification. The same is true for NEET and JEE. A tutor can teach the science and mathematics content, but eligibility and equivalence are for the authorities to decide.",
        "Regionally, Indore offers IIT Indore, Devi Ahilya Vishwavidyalaya, IIM Indore and a range of private universities, while Delhi, Pune and Bengaluru attract many service children. Overseas study in the UK, Canada, Australia and the United States is common for families with links abroad.",
      ],
      bullets: [
        "AIU equivalence is often needed for Indian universities",
        "NDA, NEET and JEE rules for international boards must be checked officially",
        "Indore holds IIT, IIM and a state university near Mhow",
        "Discuss subject choices with the end goal in mind by Grade 9",
      ],
    },
    {
      heading: "What does IB Maths and Science tutoring look like for a child on the move?",
      paragraphs: [
        "In Mathematics the first step is to identify the course. Analysis and Approaches is algebra, calculus and proof, aimed at engineering and the physical sciences. Applications and Interpretation is centred on data and modelling and suits medicine, business and social sciences. If a child changes school, the tutor checks that both schools teach the same variant and order.",
        "Physics and Chemistry punish gaps. A missing unit on energy changes or on circuits makes later units harder, and mid-year transfers often skip topics. The tutor maps what has been taught, fills the holes and then aligns the pace to the new class. Booklets are available in the exam, so we practise quick use of them.",
        "Biology depends on exact wording, and many students lose marks through loose phrasing. Tutors practise short, precise answers and structured long ones. All three sciences carry an internal investigation, and the tutor's role is to challenge the plan and comment on drafts the student wrote, never to write them.",
        "For a child whose school changes twice, a tutor is the constant. Lessons carry forward the same notes, error log and topic map from one address to the next, and beginning early in Grade 11 leaves Grade 12 for consolidation.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: choosing a tier when a child switches schools",
      paragraphs: [
        "Core papers are capped at grade C, while Extended papers reach A*. If a child may go on to IB, A Level or a demanding Indian degree, Extended is usually right for Mathematics and the sciences, though the current teacher's view of recent work should count. A mid-year move can complicate this, so ask the new school early.",
        "Subject packages vary from one school to another, which is a problem for a child who moves. A typical set has English, a second language, Mathematics, one to three sciences, and a few options. When a new school offers a different mix, the tutor helps bridge the gap, for example by teaching a missing option in evenings.",
        "English needs thought for children whose home language is Hindi or another. First Language demands polished prose, and Second Language tests reading, writing, listening and speaking separately. A tutor helps decide, then builds a loop of reading, drafting and correcting.",
        "Cambridge and Pearson Edexcel share subject titles but not exact papers. If your child changes board with the school, tell us at once, so that lessons follow the correct specification and past papers from the first session.",
      ],
    },
  ],

  tutorsIntro:
    "Tutors here teach the IB from PYP through the Diploma and IGCSE under Cambridge and Edexcel, always over live video. We choose by course and level, and families in Mhow may ask for someone experienced with service children who change schools during a course.",

  process: [
    { title: "Send the details", description: "Tell us the programme or board, subject, class, and the hours that work around duty timetables in Mhow." },
    { title: "See who we suggest", description: "We describe the tutor's teaching on your child's exact course, so you can judge the fit." },
    { title: "Try one free lesson", description: "Your child works on a real topic on video, with no fee and no promise on either side." },
    { title: "Agree the plan and fee", description: "The tutor outlines the early weeks and the rate is confirmed in writing." },
    { title: "Carry on weekly", description: "Lessons continue at a fixed time, and shift with a posting, an exercise or an exam." },
  ],

  whyPoints: [
    { title: "Course-specific match", description: "Tutors are chosen for your child's exact subject, level and board." },
    { title: "Made for postings", description: "The same tutor can continue over video after a move to another station." },
    { title: "No-cost first lesson", description: "You see the teaching before deciding on anything." },
    { title: "Coaching, not writing", description: "Tutors explain, question and comment; they never author IAs, essays or coursework." },
    { title: "Clear written notes", description: "A summary follows each lesson, useful when a school changes." },
    { title: "Plain about format", description: "Lessons are online from the outset, and nobody expects a visit to Mhow." },
  ],

  faqs: [
    {
      question: "Do IB or IGCSE tutors come to homes in Mhow Cantonment?",
      answer:
        "No. IB Gram tutors teach online, and nobody visits homes in Mhow or Dr Ambedkar Nagar, since in-person lessons exist only in Gurugram and parts of Delhi NCR. Your child studies in the house or quarters on a laptop, with a specialist on video, one to one. Many service families like that the tutor can carry on after a posting.",
    },
    {
      question: "Is Mhow the same as Dr Ambedkar Nagar for these lessons?",
      answer:
        "Yes, Mhow Cantonment is officially Dr Ambedkar Nagar, and our online lessons serve both names and the neighbouring areas. Just tell us your locality so we can plan evening timings, and mention whether you live in the cantonment, the town or a nearby village. The tutoring itself is identical everywhere, and is delivered by video.",
    },
    {
      question: "Which IB or IGCSE schools are near Mhow?",
      answer:
        "None is confirmed inside Mhow. In Indore, about 25 km away, we have confirmed Choithram International School, Daly College and The Emerald Heights International School. Please check current programmes directly with any school, since they change, and note that IB Gram has no connection to them, to the Army or to any examining body.",
    },
    {
      question: "How do I find an IB tutor from Mhow?",
      answer:
        "Send IB Gram your child's programme, subject, level and school year, plus any posting date you know of. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp. We shortlist a tutor who has taught that course, and a free lesson follows, so you can see the teaching before committing to weekly sessions.",
    },
    {
      question: "How much does IB or IGCSE tuition cost?",
      answer:
        "The fee reflects the programme, level, subject, hour length, weekly frequency and the tutor's experience, and we give it in writing before the trial. There is no travel element. We do not publish a fixed list because MYP Maths in Class 7 and IB Diploma HL Physics are quite different services. You can lower or stop at any time.",
    },
    {
      question: "Is the first lesson really free?",
      answer:
        "Yes, the first lesson costs nothing and creates no obligation. Your child works on a real topic from their own course with the tutor, and you receive a short note after it. You may then agree a regular plan, request a different tutor or stop. Most families use the trial to judge the tutor's manner as much as the content.",
    },
    {
      question: "Can the same tutor continue if we are posted elsewhere?",
      answer:
        "Yes, that is one of the main reasons service families choose online tutoring. Lessons run over video, so a new address changes nothing except the time you book. Tell us as soon as you know your move date, and we will shift the sessions around it. Notes and board work travel with the student between schools.",
    },
    {
      question: "My child joins a new school mid-year. How can tutoring help?",
      answer:
        "A few sessions at the start can find out what the previous school covered differently and prepare for the new teacher's pace. The tutor maps gaps, catches up missing topics and helps with any assessed piece due soon. Most children settle within a term, and lessons can then drop to a lighter weekly rhythm.",
    },
    {
      question: "Can tutors write my child's Internal Assessment or Extended Essay?",
      answer:
        "No, tutors never write, edit or rewrite assessed work. They may explain the criteria, help choose a workable question, suggest ways of collecting data and comment on a draft the student wrote. IB and Cambridge take malpractice seriously, and doing the work would put the student's qualification at risk and defeat the learning.",
    },
    {
      question: "Which subjects do Mhow families ask about most?",
      answer:
        "Mathematics and the sciences lead, with Physics, Chemistry and Biology often linked to engineering, medicine or defence ambitions, followed by Economics and English. Grade 12 students ask for TOK and Extended Essay guidance. If your child studies Hindi, Computer Science or Psychology, tell us in your brief and we will check availability.",
    },
    {
      question: "Can tutoring fit alongside NDA, JEE or NEET preparation?",
      answer:
        "It can, but eligibility for international-board candidates is set by each exam authority and must be checked in its official notification. Many families use a local centre for entrance tests and an IB or IGCSE tutor for the school course. Our test-prep page gives general guidance, and lessons can be timed to avoid clashes.",
    },
    {
      question: "What about parade timings or field exercises?",
      answer:
        "We plan around them. If a parent's duty schedule changes, lessons can be rebooked without charge, and children who are home alone in the evening can still join a session on their own. Sunday slots are popular with service households. Tell us the times that are dependable and we match a tutor whose availability lines up.",
    },
    {
      question: "What if the internet is slow in the cantonment?",
      answer:
        "Lessons work on ordinary broadband or a decent 4G connection. We ask about your evening speed before the trial, and if video breaks up, the tutor can continue with voice and the shared whiteboard. Some service accommodation has patchy signal, so a mobile hotspot is a useful fallback and recorded board work can be sent afterwards.",
    },
    {
      question: "When are the exams for IB and IGCSE students?",
      answer:
        "IB Diploma papers are held mainly in May, with results in July, and some schools use November. Cambridge IGCSE runs in May-June and October-November, and Pearson Edexcel adds a January window. Your school enters your child and sets deadlines, so confirm them early. Tutors plan lessons backwards from the month your child sits papers.",
    },
    {
      question: "Do you cover both IB Maths courses?",
      answer:
        "Yes, Analysis and Approaches and Applications and Interpretation, each at HL and SL. The first stresses algebra, calculus and proof, and the second data, modelling and technology. Tutors also coach the exploration, from topic choice to structure, without drafting it. Tell us which course and level your child is on, and we shortlist accordingly.",
    },
    {
      question: "How quickly can we begin?",
      answer:
        "Many families in Mhow reach a free lesson within a few days of sending a brief. Common subjects with flexible timings are quickest, while an unusual subject or a fixed duty-friendly slot can take longer. Including the syllabus code, a recent test paper and your preferred times in the first message saves a round of questions.",
    },
    {
      question: "Is IB Gram connected with the Army, a school or an exam board?",
      answer:
        "No. IB Gram is an independent tutoring service and has no connection with the Indian Army, its education societies, the IB, Cambridge, Pearson Edexcel or any school. We mention them only to describe syllabuses and local options. Tutors prepare students for assessments as they stand and follow every rule on academic integrity.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Indore", href: "/indore/", description: "The nearest large city, about 25 km away, with three confirmed IB and IGCSE schools." },
    { label: "IB and IGCSE tutors in Ujjain", href: "/ujjain/", description: "Online tutoring for another city in the Malwa region." },
    { label: "IB and IGCSE tutors in Nagpur", href: "/nagpur/", description: "Tutor matching for a large central India city with a defence presence." },
    { label: "IB and IGCSE tutors in Pune", href: "/pune/", description: "A common posting for service families, with a dense cluster of IB schools." },
    { label: "IB and IGCSE tutoring in Delhi", href: "/delhi/", description: "The capital region, where many service families are posted." },
    { label: "Gurugram home tuition", href: "/gurgaon/", description: "Where in-person home visits are available, unlike Mhow." },
    { label: "IB tutors, all programmes", href: "/ib-tutors/", description: "The subjects and levels our tutors teach." },
    { label: "The IGCSE guide", href: "/igcse/", description: "How Cambridge and Edexcel boards, tiers and subjects fit together." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL choices, internal assessments, TOK and the Extended Essay." },
    { label: "Admissions test preparation", href: "/admissions/test-prep/", description: "Planning entrance exams beside an international board." },
    { label: "Tutor profiles", href: "/tutors/", description: "Browse tutors by subject and background." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and request a free lesson." },
  ],

  closingHeading: "Book a free lesson for your child in Mhow",
  closingBody:
    "Send the programme or board, the subject, your child's class, any posting date you know of and the evening or Sunday hours that hold up around duty. A tutor who has taught the course will be proposed, with the fee written down and a trial slot. Everything happens by screen, so a move changes the address and nothing else.",

  geo: { latitude: 22.5520, longitude: 75.7650 },
  alternateNames: ["Mhow", "Dr Ambedkar Nagar", "Mhow Cantt"],
  wikipedia: "https://en.wikipedia.org/wiki/Mhow",
  stripSchools: [],
};
