import type { CitySeoPage } from "../types";

/**
 * /jamui/ - IB and IGCSE tutoring page for Jamui, Bihar. Online-only: no IB or Cambridge/Edexcel school is
 * confirmed in Jamui district. schoolClusters lean on Kolkata, Delhi NCR and Mussoorie names already verified
 * on the published Patna and Bhagalpur pages, labelled as nearby, never as local.
 */
export const jamui: CitySeoPage = {
  slug: "jamui",
  countryName: "Jamui",
  countryNameLong: "Jamui, Bihar",
  demonym: "Jamui",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are planned around Jamui's May-June heat, the Saraswati Puja and Chhath weeks, and the evenings when the Jhajha line or the district grid lets you down",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.9263, longitude: 86.2239 },
  wikipedia: "https://en.wikipedia.org/wiki/Jamui",
  alternateNames: ["Jamui Bihar", "Jamui town", "Jamui district"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Jamui | Online Home Tuition, Bihar",
  metaDescription:
    "IB and IGCSE tutors for Jamui students: live one-to-one online home tuition for DP, MYP, PYP and Cambridge or Edexcel IGCSE, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Jamui",
  heroEyebrow: "ONLINE IB & IGCSE HOME TUITION FOR JAMUI, BIHAR",
  heroSubtitle:
    "Searching for private tuition from home in Jamui and finding nothing that mentions the IB or IGCSE is normal: the district has no school on either curriculum that we could confirm. A Jamui student who still needs an IB Chemistry, IGCSE Maths or MYP Sciences teacher does not have to leave Bihar to get one. Our tutors teach live, one-to-one, over video, from elsewhere in India on Indian Standard Time. Nobody from IB Gram visits a house in Jamui; home visits run only in Gurugram and parts of Delhi NCR. What you get here is a proper weekly lesson on a laptop, planned around the local school calendar, with a free trial first.",
  primaryKeyword: "IB and IGCSE tutors in Jamui",
  imageAltText: "A Jamui student at a desk at home working through an IGCSE Physics paper during a live online lesson",
  secondaryKeywords: [
    "IB tutor Jamui",
    "IGCSE tutor Jamui",
    "IB home tuition Jamui",
    "IGCSE home tuition Jamui",
    "IB private tuition Jamui",
    "IB Maths tutor Jamui",
    "IGCSE Maths tutor Jamui",
    "IB Physics tutor Jamui",
    "IB Chemistry tutor Jamui",
    "IB Biology tutor Jamui",
    "IB DP tutor Jamui",
    "IB MYP tutor Jamui",
    "IB PYP tutor Jamui",
    "IGCSE online tuition Jamui",
    "online IB tutor Jhajha",
    "IGCSE tutor Gidhaur",
    "IB tutor Khaira Jamui",
    "IB tutor Jamui Bihar",
    "IGCSE tutor Jamui Bihar",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact board, paper code and level a student follows, not to a vague label",
    "Plain speaking on delivery: no tutor visits a home in Jamui, and home visits exist only in Gurugram and parts of Delhi NCR",
    "A free trial lesson and a written note after every session",
    "No tie-up with any school in Jamui, Patna, Ranchi or Kolkata is implied or claimed",
  ],
  heroStats: [
    { value: "PYP to DP and CP", label: "Every IB stage covered" },
    { value: "Cambridge and Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "Tutor and student on one clock" },
    { value: "Free trial", label: "Judge the tutor first" },
  ],

  intro: {
    heading: "Starting from what Jamui has, and what it does not",
    paragraphs: [
      "Jamui sits in the south-eastern corner of Bihar, hard against the Jharkhand border, a district of Jain pilgrimage sites at Lachhuar and Kshatriyakund, the Nagi and Nakti reservoirs near Jhajha, and a railway junction at Jhajha that has carried students and workers towards Kolkata and Delhi for generations. The schools here run the Bihar Board and CBSE. We could not confirm a single school in the district that teaches the IB or a Cambridge or Edexcel IGCSE.",
      "That shapes who writes to us. A parent in Jamui town may have a Class 8 child who will move with a transferred father to Bengaluru next year, where an IGCSE school will ask for a level of written English and Extended Maths the Bihar Board never tested. A family from Jhajha may be planning a boarding seat for a Class 11 son in Mussoorie, with the Diploma Programme waiting. Others are simply looking ahead to an application abroad, and have read that an internationally benchmarked qualification helps.",
      "For all of them the useful question is narrow: who has recently taught this exact syllabus, and can they do it live at 6 pm on Tuesday. Our tutors are based in India, teach IB PYP, MYP and Diploma subjects and both IGCSE boards, and work with Jamui students on a screen. Distance changes nothing about a mark scheme.",
      "One line stays fixed wherever the tutor sits. Coaching on method, feedback on drafts, marking past papers: yes. Writing an Internal Assessment, Extended Essay, TOK essay or any coursework for a student: never.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE, all taught online",
      "Private tuition from home in the literal sense: your child, your desk, a laptop and a tutor on video",
      "A free first lesson, then a short written plan only if you want to continue",
      "No home visits in Jamui; in-person teaching is a Gurugram and Delhi NCR service only",
    ],
  },

  programmesIntro:
    "Jamui children rarely meet the IB or IGCSE by choice of local school. They meet them through a move, a boarding decision, or a plan for study abroad, and each stage asks a different thing of a tutor.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "No formal exam sits at the end. Children work through units of inquiry and finish with a small Exhibition, so tutoring here is about confident reading, number sense and learning to ask questions a teacher can build on.",
      countryNote:
        "A Jamui child on the PYP is almost always one whose parent has moved for work. The common requests are reading aloud in English and Hindi with equal ease, and a calm route into inquiry-style maths.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Teachers grade each subject against criteria A to D, and a Personal Project closes the programme. Students who know the content often lose marks because they describe when a criterion asks them to judge.",
      countryNote:
        "MYP students connected to Jamui tend to need the most help with criterion-based Sciences and Individuals and Societies, and with pacing a Personal Project so it is not started in the final month.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard, with Theory of Knowledge, an Extended Essay and Creativity, Activity, Service around them. Internal Assessments carry real weight and the exams arrive in May.",
      countryNote:
        "Diploma students from Jamui are nearly always boarding or relocated. Maths, one science and English are the subjects they bring to us first, ideally in the first term of Class 11.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses sit beside a career-related study and a reflective project. Few Indian schools run it, but the Diploma courses inside it still need a tutor who knows them.",
      countryNote:
        "We have no CP enquiry we can tie to Jamui. If one arrives, the tutoring would sit on the embedded Diploma subjects, not on the career-related study itself.",
    },
  ],

  subjectsIntro:
    "Two students can both say they need IB Maths and mean opposite things. Tell us the course code, the level and the exam series, and we look for a tutor who has taught that paper recently and can hold a steady weekly slot in Jamui's evening.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "For students heading to engineering or pure science; HL rewards people who can prove a result they have never seen, which is a habit, not a fact to memorise." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Leans on modelling, statistics and a graphic display calculator; the skill is choosing the right tool and explaining the result in a sentence." },
    { name: "IB Physics", levels: "HL / SL", description: "Kinematics and fields feel familiar to a JEE-minded student, but the IB wants uncertainty handling and written explanation the entrance exam never asks for." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Equilibrium, kinetics and organic mechanisms carry the course; the data booklet is a tool to practise with, not a document to meet on exam day." },
    { name: "IB Biology", levels: "HL / SL", description: "Ecology, genetics and physiology reward precise terminology; a student who writes almost the right word usually loses the mark." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, real examples and a clear evaluative line; Jamui's own mica, agriculture and migration economy make useful practice cases." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading under time pressure, with theory tied to the company in front of the student rather than recited." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen texts, a comparative essay, and an oral that needs rehearsal aloud with someone listening." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms and data structures on paper, plus a working solution; both halves need their own practice." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies must be recalled accurately and applied to the question; a tutor trains students to structure a long answer before writing it." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking and balanced argument; it suits a student who reads the news and can weigh two positions fairly." },
    { name: "IB Geography", levels: "HL / SL", description: "A few case studies known deeply beat many known vaguely, and the fieldwork report needs a method another person could repeat." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation for the first paper and sustained argument for the essays; both are taught as skills, not as dates to learn." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension is rarely the trouble; speaking unscripted for the oral, and writing in the right text type, need deliberate practice." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation-led sessions to test an exhibition idea or argue a prescribed title from a side the student would not choose unprompted." },
  ],

  igcseSubjectsIntro:
    "IGCSE Maths 0580 from Cambridge and 4MA1 from Pearson Edexcel look similar on a syllabus list and read very differently on the paper. A Jamui student should settle the board, the code and the tier first, then the exam window: Cambridge in May-June or October-November, Edexcel in January or May-June.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended students drop marks on the non-calculator paper through arithmetic slips, not through ignorance of the topic." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "A first real contact with calculus and functions that makes the later jump to IB Analysis and Approaches much gentler." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Wording and structure differ from the Cambridge paper, so Higher candidates practise on Edexcel papers specifically." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation fluency and a dependable method for the alternative-to-practical paper, which surprises students who only did lab work in class." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, electrolysis and organic chemistry dominate revision time; qualitative analysis gets its own drill." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and human physiology carry many marks; longer answers are built like an examiner marks them, point by point." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Clean diagrams and short evaluative paragraphs; Core-only students often underestimate the written component." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace pseudocode by hand, then write it in a real language; the two skills do not transfer automatically." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and composition, with timed practice on genuinely unseen passages." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "For students whose school offers it; the writing tasks reward accuracy and a clear voice over ornate vocabulary." },
  ],

  regionsTitle: "Jamui towns and blocks our online tutors already work with",
  regionsIntro:
    "Nothing here depends on travel, since lessons run on video. Where a family lives still matters in practice: how dependable the broadband is, how far school runs from home, and what the evening looks like in the hottest months.",
  regions: [
    { name: "Jamui town", note: "The district headquarters and its busiest market; families here are mostly government service, trade and teaching households, and evening slots after coaching hours work best." },
    { name: "Jhajha", note: "A railway junction town on the main line towards Kolkata and Delhi, with many railway and transfer-linked households and plenty of practical knowledge of moving away for school." },
    { name: "Gidhaur", note: "An old seat of the Gidhaur estate to the north-east; the pace is slower and a steady weekly slot matters more than an intensive one." },
    { name: "Sikandra", note: "A block town on the road towards Nawada and Lakhisarai, where families often look to Patna for schooling and work decisions." },
    { name: "Khaira", note: "A block in the south-west with agricultural and small-trade households; mobile data often carries the lesson when fixed broadband lags." },
    { name: "Lachhuar and Kshatriyakund", note: "The Jain pilgrimage belt linked to Mahavira's birth tradition; pilgrim traffic in some seasons affects the roads more than the lessons." },
    { name: "Chakai", note: "A block near the Jharkhand border with close ties to Giridih and Deoghar; some families plan schooling across the state line." },
    { name: "Simultala", note: "Known for the state-run residential Awasiya Vidyalaya for gifted students, an academically ambitious pocket of the district." },
    { name: "Sono and Laxmipur", note: "Forested southern blocks near the plateau, where steady connectivity is the main practical question before a family commits to online lessons." },
  ],
  schoolDisclaimer:
    "Every school named on this page is outside Jamui and is listed only because families in Bihar do consider it and its curriculum can be checked. IB Gram is an independent tutoring service. It is not affiliated with, endorsed by or partnered with the International Baccalaureate, Cambridge, Pearson or any school named here.",
  schoolClusters: [
    {
      city: "Jamui district itself",
      note: "No school in Jamui district was confirmed to teach the IB or a Cambridge or Edexcel IGCSE. Local schools run the Bihar Board and CBSE, so an IB or IGCSE student here is either studying privately or has a school seat elsewhere.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "Reached by the Jhajha line, Kolkata is the most familiar destination for eastern Bihar families who want a continuing IB or IGCSE school place.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "The Cambridge School, Kolkata"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "The usual choice when a parent's job moves, or when a family wants a well-known Diploma campus; tutoring continues online after the move if the child wants the same teacher.",
      schools: ["Vasant Valley School, Delhi", "Sanskriti School, Delhi", "Step by Step School, Noida"],
    },
    {
      city: "Nearby: Mussoorie hill boarding",
      note: "A long journey from Jamui, but a known boarding option for families who want the Diploma in a residential setting.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],

  modesIntro:
    "Whichever route brings a student to us, the delivery is the same: live video lessons with an India-based tutor on IST, one student at a time. What changes is the rhythm, and that is where we adjust to a Jamui household.",
  modes: [
    {
      title: "Weekly online one-to-one",
      description:
        "One fixed slot a week with the same tutor, a shared screen, handwritten working photographed or written on a tablet, and a written note afterwards so a parent can see what was covered.",
      bullets: [
        "A slot chosen around school end and coaching hours",
        "Mobile-data fallback agreed in advance for slow broadband evenings",
        "Past-paper questions in most sessions, not only at exam time",
        "One tutor per subject for continuity across the term",
      ],
    },
    {
      title: "Two short sessions a week",
      description:
        "For students who need regular contact to stay on top of a fast course, particularly Diploma Maths or a science, without long sittings on hot evenings.",
      bullets: [
        "Shorter blocks suit Jamui's warm months better than marathon lessons",
        "Homework reviewed before the next session begins",
        "Easy to pause during Chhath or a family wedding",
        "Can be trimmed back to weekly once a topic is secure",
      ],
    },
    {
      title: "Focused run-in to a May or November exam",
      description:
        "Three or four sessions a week for a set stretch, with timed papers marked to the current criteria and corrections done together the same week.",
      bullets: [
        "Planned backwards from the exact exam date",
        "Mark-scheme language taught alongside the content",
        "Started six to eight weeks ahead, not in the last fortnight",
        "Kept clear of Chhath and school mock weeks",
      ],
    },
  ],

  sections: [
    {
      heading: "Jamui families and the nearest IB and IGCSE schools",
      paragraphs: [
        "Jamui is a district of small and mid-sized towns, and its strength has been in public-sector careers, teaching, small trade and the army, not in international education. Coaching for the Bihar Board, for Bihar's competitive examinations and for NEET and JEE fills the classrooms. A school offering the IB Diploma or Cambridge IGCSE has not taken root, and the directories we checked listed none in the district.",
        "Even so, IB and IGCSE questions reach us from Jamui homes for practical reasons. A father on a railway, defence or bank posting is transferred to Kolkata, Bengaluru or Delhi, and the new school expects a student who has never seen a command word such as evaluate or justify. A mother who teaches in a government school wants her child to be able to compare Indian and overseas university options. A relative abroad offers to sponsor a course, and the application asks for predicted grades in an international curriculum.",
        "The schools these families consider are a long way from Jamui. Kolkata is the nearest large centre with a continuing IB and Cambridge school scene, reached through Jhajha, and the Heritage School and Calcutta International School are among the names families there recognise. Delhi NCR, with Vasant Valley and Step by Step in Noida, is where a job move usually leads. Woodstock School in Mussoorie is the boarding option for those who can manage the distance.",
        "None of this changes what a tutor does. The syllabus, mark scheme and exam timetable are identical for a student in Jamui and a student in Kolkata. Only the location of the teacher differs, and a screen makes that irrelevant for almost every subject.",
      ],
      table: {
        caption: "Where Jamui families look for IB and IGCSE school places",
        columns: ["Option", "Where", "What it offers", "What to know"],
        rows: [
          ["Jamui district schools", "Jamui, Jhajha, Sikandra, Khaira", "Bihar Board and CBSE", "No IB or IGCSE school confirmed locally"],
          ["Kolkata school route", "Kolkata, West Bengal", "IB and Cambridge schools", "The most familiar rail destination for eastern Bihar"],
          ["Delhi NCR school route", "Delhi, Noida, Gurugram", "IB and IGCSE campuses", "Usually tied to a job move"],
          ["Mussoorie boarding", "Uttarakhand hills", "IB MYP and Diploma", "A long journey; residential only"],
        ],
      },
      bullets: [
        "No IB or IGCSE school was confirmed anywhere in Jamui district",
        "Kolkata and Delhi NCR carry most of the real choices",
        "Online tutoring lets a student keep a Jamui base while following an international syllabus",
        "Exam papers and mark schemes are the same in every city",
      ],
    },
    {
      heading: "How is an IB or IGCSE course different from the Bihar Board or CBSE?",
      paragraphs: [
        "The short answer is in the question style. The Bihar Board and CBSE reward a correct, familiar answer delivered accurately, while the IB and IGCSE often reward the reasoning shown on the way, and they are happy to set a problem in an unfamiliar setting to see whether a student can transfer an idea.",
        "Internal work is the larger gap. A Bihar Board practical is a short exercise in a laboratory. An IB Internal Assessment is a planned investigation that a student designs, carries out and writes up against published criteria, worth a meaningful share of the final grade, and IGCSE courses add coursework or a practical-skills paper on top of the written exams. Students arriving from a rote-heavy classroom find this the hardest change, because no one can cram it the night before.",
        "Content also differs in depth and order. IB Diploma Higher Level sciences go well beyond Class 12 in chosen areas, while Standard Level sits closer to it. IGCSE Core is approachable for a Class 9 student from a Jamui school, while Extended goes further. Choosing the tier is a decision to make with a teacher's advice and a past-paper score, not a guess.",
        "None of this makes one system superior. A student with strong recall and steady exam nerves may flourish on the state board. A student who likes to argue a point and explain why may prefer the IB. A good tutor helps with the transition, whichever direction it runs.",
      ],
      table: {
        caption: "Bihar Board, CBSE, IB and IGCSE compared for a Jamui student",
        columns: ["Feature", "Bihar Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Typical question", "Recall and standard problems", "Recall plus some application", "Application, explanation, unfamiliar contexts"],
          ["Internal or coursework marks", "Small practical component", "Modest internal assessment", "Substantial in IB; coursework or practical paper in IGCSE"],
          ["Language of study in Jamui classrooms", "Hindi or English medium", "Mostly English or Hindi", "English, with Hindi as a language subject"],
          ["Usual entry point for a Jamui child", "From Class 1", "From Class 1 or a later switch", "Class 9 for IGCSE, Class 11 for the Diploma, usually after a move"],
        ],
      },
      bullets: [
        "IB and IGCSE reward reasoning shown, not only the final answer",
        "Internal assessment and coursework cannot be crammed",
        "Core or Extended for IGCSE should be settled early in Class 9",
        "A switch from the state board is workable with direct teaching of command words",
      ],
    },
    {
      heading: "What shapes the fee for an IB or IGCSE tutor in Jamui?",
      paragraphs: [
        "A handful of factors decide it: the programme, the subject, the level, how long a session runs, and how recently the tutor has taught that exact specification. A tutor who has marked IB Chemistry papers this year is not priced like a general science teacher, and neither should be.",
        "Rates are quoted in writing before you book, and we do not publish a price list, because two Class 11 students asking for Maths can need very different things. One may want twice-weekly Higher Level support through the whole Diploma. Another may need six sessions to get past a single topic.",
        "There is no travel line on a Jamui bill. Nobody drives to Jhajha or Gidhaur, because lessons run online and in-person visits are restricted to Gurugram and parts of Delhi NCR. That absence is one real difference from what a city family might pay for a home visit.",
        "Judge the hour, not the rate. One lesson on the exact topic a student keeps failing is worth more than several spent revisiting what school has already covered. The free trial exists to let you test that before any money is agreed, and a mismatched tutor is replaced without an argument.",
      ],
      bullets: [
        "Programme, subject, level and session length set the fee",
        "The rate is fixed in writing before the first paid lesson",
        "No travel element because lessons run online",
        "Pause or stop at any time; a change of tutor costs nothing",
      ],
    },
    {
      heading: "Online home tuition, Jamui coaching, local tutor or self-study: which works for IB and IGCSE?",
      paragraphs: [
        "Coaching centres in Jamui, like those across Bihar, are built around the Bihar Board, competitive examinations and medical and engineering entrance preparation. Their batches are large, fast and focused on a syllabus with thousands of candidates. No centre here is likely to have an IB Physics HL or an IGCSE Additional Mathematics group, because there would be too few students to fill it.",
        "Private tutors in Jamui are capable and often devoted, but very few will have taught an IB Internal Assessment or a Cambridge alternative-to-practical paper. A generalist can build confidence and routine. On a Diploma or IGCSE syllabus, however, the student needs someone who knows the command words and mark schemes specifically.",
        "Studying alone is workable for a disciplined student with good past papers and a mark scheme, and some do well that way. The risk is the quiet error: practising a method for months that an examiner would mark down, because nobody ever showed the difference.",
        "Online one-to-one tuition puts a specialist on screen without a move or a long commute. It suits a household where one laptop and a steady connection are available, and it lets the student keep the school and friends they have in Jamui while working towards an international qualification.",
      ],
      table: {
        caption: "Weighing the routes to IB and IGCSE support for a Jamui student",
        columns: ["Route", "Syllabus match", "Individual attention", "Local catch"],
        rows: [
          ["Coaching centres in Jamui", "Low; built for state board and entrance tests", "Group setting", "No IB or IGCSE batch exists"],
          ["Local private tutor", "Varies with the individual", "One to one", "Few have taught these specifications"],
          ["Self-study", "Good if past papers and mark schemes are used", "None", "Errors in method can go unnoticed for months"],
          ["Online IB and IGCSE tutor", "Matched to board, code and level", "One to one, live", "Needs a steady connection and a quiet hour"],
        ],
      },
      bullets: [
        "Local coaching serves Bihar Board and entrance exams well, but not IB or IGCSE",
        "Local private tutors rarely know these mark schemes first-hand",
        "Self-study needs marked past papers to be reliable",
        "Online tutoring gives a specialist without moving the student",
      ],
    },
    {
      heading: "The Jamui study year: heat, Saraswati Puja, Chhath and the exam windows",
      paragraphs: [
        "Jamui is hot and dry from April into June, with afternoon temperatures that make a long sit at a desk unpleasant and, in some seasons, unreliable electricity on top. Evening lessons after six usually work better than mid-day ones. The IB Diploma examinations fall in this same window, so students in a May session are working through the hardest heat of the year.",
        "The monsoon arrives in late June and brings a cooler, wetter July to September. The Nagi and Nakti reservoirs fill, roads to the blocks can become difficult, and mobile networks sometimes falter. For a student in a southern block, an agreed fallback, such as switching to a phone hotspot, is better than cancelling the lesson.",
        "The festival calendar is part of a real study plan. Saraswati Puja in the winter is a school occasion many students treat as their own, Holi takes a few days, Dussehra and Diwali pull families together, and Chhath in the autumn stops nearly everything in Bihar for several days. We plan the heaviest teaching blocks away from these dates.",
        "For examinations, the IB Diploma has its main session in May with results in early July and a second session in November. Cambridge IGCSE runs in May-June and October-November. Edexcel has January and May-June series. The Bihar Board's Class 10 and 12 examinations come early in the year, so a student combining two systems needs the clashes mapped in advance.",
      ],
      table: {
        caption: "Jamui's academic and festival calendar, and how a tutoring plan adapts",
        columns: ["Months", "What is happening in Jamui", "How lessons adjust"],
        rows: [
          ["January to February", "Bihar Board examinations; Saraswati Puja", "Lighter IB load for dual-system students; Edexcel January series where entered"],
          ["April to June", "Severe heat; IB May and Cambridge main series", "Evening sessions, shorter blocks, timed papers"],
          ["July to September", "Monsoon; reservoirs and roads affected", "Flexible slots and a connectivity fallback"],
          ["October to November", "Dussehra, Diwali and Chhath; November series", "Teaching kept clear of festival days; revision before November papers"],
        ],
      },
      bullets: [
        "Evening lessons suit Jamui's heat better than afternoons",
        "Monsoon connectivity needs a fallback plan agreed early",
        "Saraswati Puja and Chhath are planned around, not argued with",
        "May is the IB Diploma session, with a second session in November",
      ],
    },
    {
      heading: "After the IB or IGCSE: where can a Jamui student go next?",
      paragraphs: [
        "Three routes cover most students. One is an Indian degree, including engineering, medicine and central universities. One is a course abroad. The third, more often than people expect, is a combination: an Indian entrance exam as a safety net with an overseas application alongside.",
        "For Indian universities, the IB Diploma and IGCSE-based school leaving qualifications are accepted in principle, but equivalence is handled by the Association of Indian Universities, and some institutions ask for a certificate. Admissions through the Common University Entrance Test for UG take a separate route for central universities, and candidates from an international board still need the subject combinations the university asks for.",
        "Engineering and medicine need particular care. JEE Main and NEET-UG have their own eligibility rules about subjects, and a student from an IB or IGCSE background has to confirm that Physics, Chemistry and Biology or Mathematics have been studied in a form the exam accepts. The safest step is to check the current information bulletin with the testing agency before Class 11 subject selection, not after.",
        "For study abroad, the IB Diploma points score and Cambridge A Level results are familiar to universities in the UK, Canada, Australia and the United States, and IGCSE grades feed into predicted grades. Tutors help with the subject side of preparation: stronger Maths, clearer essays, and exam technique. Applications, personal statements and any coursework remain the student's own work.",
      ],
      table: {
        caption: "Routes a Jamui student might take after IB or IGCSE",
        columns: ["Goal", "Main route", "What to check first"],
        rows: [
          ["Central or state university in India", "CUET-UG or direct merit, depending on the institution", "Current AIU equivalence requirements and subject lists"],
          ["Engineering in India", "JEE Main and JEE Advanced or state routes", "Subject and eligibility rules for international-board students"],
          ["Medicine in India", "NEET-UG", "Whether Biology, Physics and Chemistry meet the current criteria"],
          ["Study abroad", "IB points, A Levels or country-specific tests", "Required subjects and deadlines for each destination"],
        ],
      },
      bullets: [
        "Check AIU equivalence early for Indian universities",
        "JEE Main and NEET-UG have their own subject rules; read the current bulletin",
        "IB points and A Levels are widely understood overseas",
        "Tutors coach; applications and coursework stay the student's own",
      ],
    },
    {
      heading: "IB Maths AA or AI, and the sciences: what a Jamui student should know",
      paragraphs: [
        "Choosing between Analysis and Approaches and Applications and Interpretation is the first real decision of the Diploma for many students. Analysis and Approaches is algebra-heavy, with calculus, proof-style thinking and more abstract problems, and it suits students aiming at engineering, physical science or mathematics. Applications and Interpretation is built on statistics, modelling and technology, and suits students heading to economics, business, social science or medicine.",
        "Higher Level in either course is demanding. A Jamui student from a Bihar Board or CBSE background usually has the algebra, but may not have met a question that asks for a written justification or a modelling assumption. We start with a diagnostic paper so the first lessons go to the gaps that cost marks, not to topics already secure.",
        "The science courses have a common pattern. Physics, Chemistry and Biology each combine a content course, a data-handling skill and an Internal Assessment investigation. Students from a JEE or NEET background often know the content to a deep level and still lose marks in the written explanation and experimental design, so tutoring concentrates there.",
        "Each IA is the student's own. A tutor can explain what the criteria mean, discuss whether a research question is workable, and give feedback on a draft. A tutor does not design the experiment, run the analysis or write the report.",
      ],
      bullets: [
        "AA HL suits engineering and pure science; AI suits social science, business and many medical routes",
        "A diagnostic first lesson finds the gaps that cost marks",
        "JEE and NEET preparation helps with content, not always with written explanation",
        "IA guidance covers method and criteria, never the writing itself",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects to choose in Class 9 and 10",
      paragraphs: [
        "Cambridge IGCSE Maths, Physics, Chemistry and Biology offer Core and Extended papers. Core caps the grade available, while Extended opens the highest grades and is the expected path into the IB Diploma Maths courses or an A Level in the sciences. Edexcel offers Foundation and Higher in a similar way. Deciding early, with a real past-paper score, avoids a tier change in Class 10 that costs a term.",
        "Subject choice depends on where the student is going next. A Jamui student who expects to enter the IB Diploma will usually want Maths, at least two sciences, English and a language. A student planning an A Level route should match IGCSE subjects to the A Levels they hope to take, and a student planning an Indian degree should keep Mathematics and the sciences at Extended or Higher.",
        "English deserves attention in a Hindi-speaking district. Cambridge English First Language 0500 is written at a level that assumes fluent academic English, and a student who reads mostly in Hindi may need sustained work on summary and directed writing. The habit of reading one well-written English article a day helps more than another textbook.",
        "Coursework and practicals differ by board. Some Cambridge science syllabuses offer an alternative-to-practical paper, which students can prepare for without a full laboratory. Whatever the route, the student does the work. A tutor explains the structure and gives feedback on clarity.",
      ],
      bullets: [
        "Extended or Higher keeps the door open for IB Diploma Maths and sciences",
        "Match subject choices to the next stage, not only to current strengths",
        "English First Language needs steady reading, not just past papers",
        "Practical skills can be prepared through a tutor-led walkthrough",
      ],
    },
  ],

  process: [
    { title: "Tell us the situation", description: "Share the programme or board, subjects, current level and the hours your household can keep free on most weekdays." },
    { title: "See a matched shortlist", description: "We suggest one or two tutors chosen for the exact syllabus, with a line on why each fits." },
    { title: "Take a free trial lesson", description: "A real topic taught live online, with no payment and no commitment." },
    { title: "Agree a written plan", description: "A short plan with topics, pace and the rate, put in writing before any paid lesson." },
    { title: "Review every few weeks", description: "Weekly sessions, a note after each, a check-in every few weeks, and a change of tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Specification first", description: "Matched on the paper code, tier and exam series, not on a general subject label." },
    { title: "Honest about delivery", description: "We tell you plainly that tutors do not visit Jamui homes, and that visits run only in Gurugram and parts of Delhi NCR." },
    { title: "Tutors who have taught the papers", description: "People who have taught the course recently, not generalists reading ahead of the student." },
    { title: "A written note each session", description: "What was covered, what went wrong, what to practise before next time." },
    { title: "Scheduling that fits Jamui", description: "Timing set around the heat, the Jhajha trains, festival weeks and mock exams." },
    { title: "Coaching, not ghost-writing", description: "We never write Internal Assessments, Extended Essays, TOK essays or coursework for a student." },
  ],

  tutorsIntro:
    "These tutors already teach IB PYP, MYP and Diploma subjects and Cambridge or Edexcel IGCSE to students across India. Each match starts from the syllabus and exam session, and every lesson with a Jamui student happens on a screen.",

  faqs: [
    {
      question: "Are there IB or IGCSE tutors in Jamui?",
      answer:
        "Yes, online. IB Gram tutors teach Jamui students live over video, one-to-one, from elsewhere in India on IST. We could not confirm any IB or IGCSE school in the district, so the tutors work from their own homes or studios, not from Jamui. You book a free trial lesson, meet the tutor, and decide after that.",
    },
    {
      question: "Do your tutors come to my home in Jamui?",
      answer:
        "No. Tutors do not visit homes in Jamui. In-person home tuition runs only in Gurugram and parts of Delhi NCR. In Jamui, tuition is online: your child sits at home with a laptop and a tutor teaches live on video. Many families find that a good fit, since the choice of tutor is not limited to whoever lives nearby.",
    },
    {
      question: "Is there a school in Jamui that teaches the IB or Cambridge IGCSE?",
      answer:
        "We could not confirm one. Schools in Jamui district run the Bihar Board and CBSE. The nearest confirmed IB and Cambridge schools are in Kolkata and Delhi NCR, plus Woodstock School in Mussoorie for boarding. If a local school starts offering either curriculum, it would be worth checking directly with the school and the board.",
    },
    {
      question: "How much does IB or IGCSE tuition cost for a student in Jamui?",
      answer:
        "The rate depends on the programme, subject, level, session length and the tutor's recent experience with that exact specification. We do not publish a price list. You get a rate in writing before booking, after the free trial, and there is no travel charge because lessons are online. You can pause or stop whenever you like.",
    },
    {
      question: "Can my child study IB Maths online from Jamui?",
      answer:
        "Yes. IB Maths Analysis and Approaches or Applications and Interpretation, at HL or SL, works well online with a shared screen and a tablet or camera for handwritten working. Tutors go through past papers, correct method as well as answers, and explain what the examiner is looking for. The Internal Assessment stays the student's own work.",
    },
    {
      question: "Which IGCSE boards do you cover?",
      answer:
        "We cover Cambridge International IGCSE and Pearson Edexcel International GCSE. The two boards differ in paper structure, wording and exam windows, so the first step is to confirm which one the school or private candidate is entered for. Cambridge sits in May-June and October-November; Edexcel in January and May-June.",
    },
    {
      question: "Can a tutor write my Internal Assessment or Extended Essay?",
      answer:
        "No. Our tutors coach. They can explain the criteria, discuss whether a research question is workable, and give feedback on a draft you have written. They do not write or rewrite any part of an Internal Assessment, Extended Essay, TOK essay or coursework, because that work has to be the student's own under IB and exam board rules.",
    },
    {
      question: "What if my child studies in a Bihar Board or CBSE school in Jamui?",
      answer:
        "That is common. A student can follow the school syllabus and use a tutor for IGCSE preparation as a private candidate, or prepare for a move to an IB or IGCSE school later. We map the two calendars, since Bihar Board examinations come early in the year and Cambridge or Edexcel series fall later.",
    },
    {
      question: "What time of day are lessons held for Jamui students?",
      answer:
        "Most Jamui families choose early evening, after school and coaching hours and once the day's heat has eased. Weekend mornings also work. Tutors teach on IST, so there is no time-zone adjustment. We avoid festival days such as Chhath, and we agree a backup, such as a phone hotspot, for evenings when broadband is unreliable.",
    },
    {
      question: "Do you offer a free trial lesson?",
      answer:
        "Yes. The first lesson is free and covers a real topic chosen with you, taught live online. You see how the tutor explains, how they handle mistakes and whether your child is comfortable. If the match is wrong, we suggest another tutor. You are not asked to pay or commit before you have seen one.",
    },
    {
      question: "Is IB or IGCSE tuition useful for JEE or NEET aspirants in Jamui?",
      answer:
        "It depends on the student. Someone on the IB or IGCSE route who also wants JEE or NEET should check the current eligibility bulletin for subject and certificate rules before choosing Class 11 subjects. Our tutors cover the IB and IGCSE side; they do not run entrance-test batches, so a student would keep separate preparation for those.",
    },
    {
      question: "How many hours a week should a Jamui student plan for?",
      answer:
        "Most students do well with one or two sessions a week, each about an hour, plus a few hours of practice between them. Closer to an exam, three or four sessions a week are common for a few weeks. We suggest a starting plan after the trial and adjust it at the review every few weeks.",
    },
    {
      question: "Does IB Gram have any connection with schools in Jamui or Kolkata?",
      answer:
        "No. IB Gram is an independent tutoring service, not affiliated with the International Baccalaureate, Cambridge, Pearson or any school. Schools are named on this page only so that families can look at real options. We do not recruit on behalf of a school, and we are not paid by one.",
    },
    {
      question: "What devices and internet does a student need?",
      answer:
        "A laptop or tablet, a headphone set and a stable connection are enough. A phone camera pointed at handwritten work, or a drawing tablet, helps for Maths and Sciences. Broadband or a good mobile data plan both work. If the connection drops, the tutor keeps the notes and the session continues once it returns.",
    },
    {
      question: "Can my child take IGCSE exams from Jamui?",
      answer:
        "Usually as a private candidate, through an authorised examination centre that accepts external entries. Such centres are not common in Bihar, so a family may need to travel to a city for the papers. Check the Cambridge or Pearson centre listings and the entry deadlines early, well before the series you are aiming for.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com with the programme or board, the subject and level, and the hours that suit you. We send a matched tutor and trial slots. The first lesson is free, and a written plan and rate follow only if you decide to go on.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How our online service works in cities and towns nationwide." },
    { label: "Home visits: where they actually run", href: "/gurgaon/", description: "The Gurugram and Delhi NCR page, for anyone checking where in-person lessons exist." },
    { label: "IB and IGCSE tutors in Patna", href: "/patna/", description: "Bihar's capital and the state's closest airport hub." },
    { label: "IB and IGCSE tutors in Lakhisarai", href: "/lakhisarai/", description: "The neighbouring district town to the north." },
    { label: "IB and IGCSE tutors in Nawada", href: "/nawada/", description: "Another nearby Bihar town facing the same school gap." },
    { label: "IB and IGCSE tutors in Giridih", href: "/giridih/", description: "Across the Jharkhand border, with a similar school landscape." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How HL, SL, the Extended Essay and TOK fit together." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria A to D and the Personal Project explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IGCSE explained", href: "/igcse/", description: "Boards, tiers, subjects and exam series." },
    { label: "IB Maths AA and AI", href: "/courses/ib/mathematics/", description: "Which course suits which student." },
    { label: "Our tutors", href: "/tutors/", description: "Browse by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Tell us what your child needs and book a trial." },
  ],

  closingHeading: "Book a free trial lesson for your Jamui student",
  closingBody:
    "Send the programme or board, the subject and level, where the grades stand, and the evenings that suit your household. We reply with a matched tutor and trial times. Every lesson is online, one-to-one, on IST, and nobody visits a home in Jamui.",
};
