import type { CitySeoPage } from "../types";

/**
 * /dhule/ - IB and IGCSE tutoring page for Dhule, Maharashtra. Online-only delivery: tutors do
 * not visit homes in Dhule, since in-person home tuition is offered only in Gurugram and parts
 * of Delhi NCR. No IB or Cambridge/Edexcel IGCSE school is confirmed within Dhule itself, so the
 * page is honest about that and points to genuine nearby options (Surat, Indore) alongside
 * private online study layered on a Dhule school day. Rendered with the shared CountryLanding
 * layout used by /gurgaon/.
 */
export const dhule: CitySeoPage = {
  slug: "dhule",
  countryName: "Dhule",
  countryNameLong: "Dhule, Maharashtra",
  demonym: "Dhule",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots get built around Dhule's brutal April heat, the June rains, and whatever calendar your child's actual school runs on",
  lastUpdated: "2026-09-21",
  geo: { latitude: 20.9042, longitude: 74.7749 },
  wikipedia: "https://en.wikipedia.org/wiki/Dhule",
  alternateNames: ["Dhulia"],
  stripSchools: [],

  title: "Dhule IB & IGCSE Tutors | Live Online Classes",
  metaDescription:
    "No school in Dhule teaches IB or IGCSE, so IB Gram matches students here with online tutors for DP, MYP, PYP and Cambridge/Edexcel, trial class first.",
  h1: "IB and IGCSE Tutoring for Dhule Students, Online",
  heroEyebrow: "ONLINE IB & IGCSE TUTORING FOR DHULE",
  heroSubtitle:
    "Dhule has government medical and engineering colleges, a university campus at Shirpur nearby, and, as far as our checks show, not one school teaching the IB or a Cambridge/Edexcel IGCSE course. Parents here end up on one of three paths: a boarding seat in Surat or Indore for the child who wants the full IB or IGCSE experience, private IGCSE study bolted onto a normal Marathi-medium or CBSE school week, or an IB subject kept alive online because the family moved to Dhule mid-programme. IB Gram covers all three, pairing each student with a tutor on their exact syllabus and running every lesson live over video, because nobody on our side drives out to a Dhule house to teach.",
  primaryKeyword: "IB and IGCSE tutors in Dhule",
  imageAltText: "Online tutor talking a Dhule student through an IB Physics investigation on a video call",
  secondaryKeywords: [
    "IB tutor Dhule",
    "IGCSE tutor Dhule",
    "IB home tuition Dhule",
    "IGCSE home tuition Dhule",
    "IB private tuition Dhule",
    "IB Maths tutor Dhule",
    "IGCSE Maths tutor Dhule",
    "IB Physics tutor Dhule",
    "IB Chemistry tutor Dhule",
    "IB Biology tutor Dhule",
    "IB DP tutor Dhule",
    "IB MYP tutor Dhule",
    "IB PYP tutor Dhule",
    "IGCSE online tuition Dhule",
    "IB tutor Dhulia",
    "IGCSE tutor Devpur Dhule",
    "online IB tutor Mahindale Dhule",
    "IB tutor Dhule Maharashtra",
    "IB tutor Khandesh",
  ],

  heroTrustPoints: [
    "We match on syllabus code and exam board first; city is irrelevant to who teaches your child",
    "Nobody drives to a Dhule address; face-to-face tuition is a Gurugram and Delhi-NCR thing only",
    "First lesson is free, and you decide only after watching it",
    "IB Gram earns nothing from any school, board or exam authority named on this page",
  ],
  heroStats: [
    { value: "0", label: "IB or IGCSE schools confirmed in Dhule" },
    { value: "PYP-DP", label: "Full continuum, taught online" },
    { value: "IST", label: "One time zone, tutor and student" },
    { value: "₹0", label: "Cost of the first trial class" },
  ],

  intro: {
    heading: "Tutoring for a city that skipped IB and IGCSE altogether",
    paragraphs: [
      "Dhule built its reputation on cotton trade and engineering colleges, not on international curricula. Its schools run on the Maharashtra State Board, CBSE, or a small ICSE stream, and none, as far as we have been able to verify, runs the IB or a Cambridge/Edexcel IGCSE. That single gap changes how tutoring here actually functions: it is rarely a supplement bolted onto a school timetable, and far more often the entire teaching a child gets in that subject.",
      "Three kinds of families call us from Dhule. One has already placed a child at a boarding school, usually in Surat or Indore, and wants a subject expert who tracks that school's own dates rather than a made-up term calendar. Another is building an IGCSE subject on their own initiative, sitting it privately, often with a foreign university already in view. A third has simply relocated to Dhule, perhaps for work at one of the local colleges or hospitals, and refuses to let a child's existing IB subject lapse just because the city cannot continue it.",
      "None of this depends on where the tutor lives. A Devpur student can be taught Physics by someone in Kolkata; a Walwadi family can book a Maths specialist from Chennai. This is simply how tuition works everywhere India minus Gurugram and a slice of Delhi's NCR, and for Dhule it is the difference between having almost no specialist to choose from locally and having the whole country to pick from instead.",
      "IB Gram holds no commercial or contractual relationship with any school, board or exam body on this page. A tutor teaches and marks; writing any part of a graded Internal Assessment, Extended Essay or coursework piece stays entirely on the student.",
    ],
    bullets: [
      "IB tuition across PYP, MYP and the Diploma, every major subject group covered",
      "Cambridge and Pearson Edexcel IGCSE, at whichever tier a student sits",
      "One-to-one, live, online, run on Indian Standard Time",
      "Free trial lesson before any commitment, then a short plan in writing",
      "No home visits near Dhule; that stays a Gurugram and Delhi-NCR arrangement",
    ],
  },

  programmesIntro:
    "None of these four programmes is taught in a Dhule school, so a family here reaches one of them by boarding elsewhere, planning a move, or entering an IGCSE subject privately. What follows is written for that reality, not for a family choosing between local school options.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Fixed subjects give way to inquiry units, ending in a student-led Exhibition in the final year. There is no exam at this level, so the point of tutoring is reading stamina, number confidence, and a habit of pushing past the first answer to a question.",
      countryNote:
        "PYP calls from Dhule are almost never about a local school; they concern a child enrolled at a PYP campus in another city, kept on track remotely while the family lives here.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Grading runs on published criteria rather than a percentage score, Year 5 adds a standalone Personal Project, and some schools finish with MYP eAssessment. Content rarely trips students up; hitting a named criterion in an answer, rather than simply being correct, usually does.",
      countryNote:
        "No school in Dhule runs MYP, so this is continuity work for a child already placed elsewhere, or groundwork before a family commits to a school that offers it.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level subjects, three Standard Level, Theory of Knowledge, an Extended Essay, and Internal Assessments worth roughly a fifth to a third of a subject grade. The main sitting is in May for most students.",
      countryNote:
        "DP requests from Dhule mostly involve a child boarding in Surat or Indore; the family wants a tutor who follows that school's real dates rather than a standard Indian academic year.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma subjects sit alongside a career study, a reflective project, and a skills component tied to the student's chosen field. Uncommon in Indian schools, but the embedded Diploma subjects still need full Diploma-level teaching.",
      countryNote:
        "CP hardly ever comes up from Dhule, given how few schools nationally run it; when it does, work focuses on those embedded DP subjects and the reflective project.",
    },
  ],

  subjectsIntro:
    "A student on Chemistry HL and one on SL need different sessions entirely, and since Dhule students following these subjects almost always belong to a school outside the district, we confirm that school's own exam dates before assuming anything about a standard Indian term.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Paper 3 at HL is where marks are won or lost; the exploration deserves a Year 1 start, not a rushed weekend before submission." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and real GDC fluency drive the grade here; pick the exploration topic early or lose easy marks late." },
    { name: "IB Physics", levels: "HL / SL", description: "Data-booklet fluency and paper timing matter, but the Investigation only earns marks if the method survives being questioned." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding first, then organic chemistry and energetics for repetition, then a write-up a marker can trace step by step." },
    { name: "IB Biology", levels: "HL / SL", description: "By Class 12 most students know the content; the fix is answering the exact command term and backing a conclusion with real statistics." },
    { name: "IB Economics", levels: "HL / SL", description: "A precise diagram plus one specific example beats either alone; HL adds a policy-flavoured Paper 3 that needs separate drilling." },
    { name: "IB Business Management", levels: "HL / SL", description: "Marks come from applying theory to the actual case in front of a student, and the Business Research Project needs a real organisation, not a hypothetical one." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen analysis for Paper 1, comparative argument for Paper 2, then spoken nerve for the Individual Oral, roughly in that order of difficulty." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode and abstract data structures need a coding IA whose documentation gets marked as carefully as the code." },
    { name: "IB Psychology", levels: "HL / SL", description: "Each approach needs correctly cited studies, and the extended-response questions reward a clean argument over volume of recall." },
    { name: "IB Environmental Systems & Societies", levels: "SL only", description: "No HL option exists; the subject rewards systems-level reasoning about a genuine issue, not a textbook summary." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies need real named detail, fieldwork has to be a live investigation, and evaluation outscores plain description." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 turns on source evaluation; Paper 2's essay needs one argument held together for the whole answer." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Hindi is common enough around Dhule that comprehension rarely needs work; unscripted speaking for the oral usually does." },
    { name: "IB Marathi B", levels: "HL / SL", description: "Even a fluent home speaker needs direct teaching on text-type conventions, since IB criteria mark very differently from a State Board Marathi paper." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "A talking subject: pressure-test an exhibition commentary, then push a prescribed title to be argued from a genuinely second angle." },
  ],

  igcseSubjectsIntro:
    "Cambridge 0580 Extended and Edexcel 4MA1 Higher test overlapping maths in different ways, so board, code and tier decide everything before a lesson plan does. Almost every Dhule student on these subjects is a private candidate or continuing a syllabus from a school elsewhere, so we build around Cambridge's May-June or October-November series, or Edexcel's January or May-June, rather than any local term dates.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tier needs speed without a calculator and full working on every line; a missed command word costs more than shaky topic knowledge." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, trig identities and vectors, taken early, make this the cleanest lead-in to IB Maths AA HL available." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Overlapping content with Cambridge, but Higher-tier Edexcel questions read differently and need their own practice set." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Speed under pressure on equations and confident diagram reading, plus dedicated drilling for the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations and organic chemistry take the most repetition; alternative-to-practical technique should be taught alongside content, not after it." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics sits at the core of the paper, and extended-response structure is usually the gap between an average script and a strong one." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and summary need direct teaching, not more reading alone, plus timed work on genuinely unseen passages." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams come with practice quickly; it is the long evaluative questions that Core-only prep tends to leave thin." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables need fresh problems each time, and real Python time matters as much as the theory behind it." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Examiners reward theory applied to the specific case given, not a memorised answer from a revision guide." },
  ],

  regionsTitle: "Dhule localities our online IB and IGCSE tutors reach",
  regionsIntro:
    "Every lesson here is online, so what matters about these areas is not travel distance but daily rhythm: which board most local households follow, and how badly summer heat or the June rains tend to disrupt an evening slot.",
  regions: [
    { name: "Devpur", note: "One of Dhule's bigger residential pockets, a mix of State Board and CBSE families, some now asking about IGCSE for the first time." },
    { name: "Old Dhule", note: "The city's dense historic core, mostly State Board schooling and a busy local commercial life." },
    { name: "Mahindale", note: "An expanding edge-of-city area popular with government and private-sector families who moved to Dhule for work." },
    { name: "Walwadi", note: "A well-settled locality with a strong tuition-class habit built around board exams rather than any international curriculum." },
    { name: "Mohadi Upnagar", note: "A newer planned layout where younger families are more likely to enquire about online IGCSE study." },
    { name: "Nagavbari", note: "Mixed residential and commercial, within easy reach of the city's colleges and coaching institutes." },
    { name: "Chittod", note: "An outlying locality where boarding-school research for older children often starts online before anything is decided." },
    { name: "Morane", note: "A semi-urban stretch on the outskirts, where steady evening connectivity matters more than it does closer to the centre." },
    { name: "Awadhan", note: "An outer subdivision housing families who commute daily into central Dhule for both work and school." },
  ],

  schoolDisclaimer:
    "Schools named on this page, in Dhule or in the nearby cities mentioned below, appear only to show honestly where IB or Cambridge/Edexcel IGCSE study is genuinely reachable from Dhule. None holds a contract, partnership or endorsement with IB Gram, and neither do the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Inside Dhule",
      note: "Nothing we can confirm here teaches the IB or a Cambridge/Edexcel IGCSE syllabus. Schooling in the city runs on the Maharashtra State Board pattern and CBSE, with a small ICSE presence alongside.",
      schools: [],
    },
    {
      city: "Nearby: Surat",
      note: "A half-day's drive northwest, with more than one real IB or Cambridge option; some Dhule families choose a Surat boarding seat over a longer haul to Mumbai or Pune.",
      schools: ["Fountainhead School", "P. P. Savani Cambridge International School"],
    },
    {
      city: "Nearby: Indore",
      note: "About the same distance northeast, with established Diploma and Cambridge schools; Dhule families with ties to Madhya Pradesh often prefer this route over Gujarat.",
      schools: ["Choithram International School", "The Emerald Heights International School"],
    },
    {
      city: "Nearby: Nashik",
      note: "No confirmed IB or IGCSE school here either, but its private-candidate exam centres and its position on the road to Pune and Mumbai make it part of most Dhule families' planning.",
      schools: [],
    },
  ],

  modesIntro:
    "One format covers every Dhule family: live, online, one to one, tutor somewhere in India on IST. What changes is pace: a steady weekly slot most of the year, something heavier close to an exam, or a short bridge while a student settles into an unfamiliar syllabus. Nobody visits a Dhule home for a lesson; that stays a Gurugram and Delhi-NCR feature only.",
  modes: [
    {
      title: "A weekly online lesson",
      description: "One slot a week, video call and shared screen, fitted around whichever school or boarding calendar the student actually keeps.",
      bullets: [
        "Opens up specialists nationwide instead of Dhule's near-empty local market",
        "Suits Diploma, MYP or IGCSE subjects equally",
        "Past papers get marked live, together, on screen",
        "Same tutor stays on unless the family wants a change",
      ],
    },
    {
      title: "A term-length programme with written check-ins",
      description: "Regular weekly classes, a short note after each one, and a fuller review roughly monthly so progress stays visible.",
      bullets: [
        "A note after every class on exactly what was taught",
        "A proper review about once a month",
        "Works especially well for younger PYP and MYP students",
        "A second weekly slot slots in easily before mocks",
      ],
    },
    {
      title: "A short block before an exam series",
      description: "Two to four sessions a week for a set stretch, timed past papers with quick turnaround, built around Dhule's peak-heat weeks and school breaks.",
      bullets: [
        "Marking against live IB or IGCSE criteria, not a generic standard",
        "Feedback back within days",
        "Scheduled around April-May heat and the monsoon window",
        "Best booked two to three weeks ahead of the exam date",
      ],
    },
  ],

  sections: [
    {
      heading: "Why families call IB Gram from a city with no IB or IGCSE school",
      paragraphs: [
        "A boarding placement is the single biggest reason. A child settles into a school in Surat or Indore, and the family wants a subject tutor who works to that school's own calendar rather than a generic academic year, so nothing slips between term time and the holidays spent back in Dhule.",
        "Private IGCSE entry is the second. A student sits a Cambridge or Edexcel subject on their own initiative, usually alongside a normal State Board or CBSE week, often with a specific foreign course already in mind. For these students, a tutor is not extra help; for that one subject, the tutor is effectively the whole school.",
        "A smaller third group has simply arrived in Dhule, drawn by work at one of the district's colleges or its government medical college, with a child mid-way through an IB subject elsewhere and no intention of letting it lapse just because the city cannot continue it.",
        "Compare this with Pune or Nagpur, where a family disappointed by one school can at least try another. Dhule offers no such fallback, and every recommendation on this page assumes that starting point rather than a shortlist of local campuses. What does not change is the exam itself: the syllabus, mark schemes and dates a Dhule student sits are identical to any other Indian city's, and a tutor who knows the material well gets a Dhule student just as ready.",
      ],
      bullets: [
        "No school confirmed to teach IB or Cambridge/Edexcel IGCSE operates in Dhule",
        "Boarding placements, private IGCSE entry and recent arrivals make up most enquiries",
        "For a private candidate, tutoring is effectively the whole school for that subject",
        "Exam content and standards match any other Indian city exactly",
      ],
    },
    {
      heading: "How does IB or IGCSE compare with Dhule's State Board, CBSE and ICSE schools?",
      paragraphs: [
        "IB and IGCSE grade for explanation and justification; the State Board, CBSE and the small ICSE presence that make up Dhule's schools grade largely for accurate recall on a fairly predictable paper. A student who can reproduce a method confidently under the State Board can still drop marks on an IGCSE Extended question that shifts the context slightly, or an IB Paper 2 that asks for a defended choice rather than a plain application.",
        "Internal assessment marks the widest gap. State Board and CBSE include some project work, but IB Internal Assessments and IGCSE coursework are far more detailed and run against published criteria, demanding a kind of independent planning most Dhule students have never had to do before Class 11. With no local school to model that process, a tutor typically starts from zero on planning and drafting habits.",
        "Depth cuts both ways too. IB HL Maths and the sciences go well past State Board or CBSE content for the same age group, while IGCSE Core sits close to familiar difficulty and Extended sits above it. Choosing the wrong tier without a local school to advise costs more here than in a city where a counsellor is available to ask directly.",
        "None of this means harder everywhere. A number of Dhule families we work with actually prefer coursework-heavy, criteria-based marking once they see what it rewards, compared with a single high-stakes paper.",
      ],
      table: {
        caption: "Dhule's boards against IB and IGCSE",
        columns: ["Question", "State Board / CBSE", "ICSE", "IB / IGCSE"],
        rows: [
          ["How are marks won?", "Recalling a fixed answer accurately", "Detailed syllabus recall", "Explaining and justifying a choice"],
          ["How much is internal?", "A small project component", "A moderate share", "20-30% of most IB subjects; IGCSE coursework varies"],
          ["Where is it recognised?", "Within India", "Within India", "Internationally"],
          ["Taught in Dhule?", "Yes, widely", "At a small number of schools", "Not confirmed anywhere; boarding or private study only"],
        ],
      },
      bullets: [
        "Explanation and justification outweigh recall in IB and IGCSE marking",
        "Internal assessment and coursework carry far more weight than under the State Board or CBSE",
        "Tier choice for IGCSE needs an outside opinion with no local school to ask",
        "Some families genuinely prefer coursework-based marking once they understand it",
      ],
    },
    {
      heading: "What sets the fee for an IB or IGCSE tutor working with a Dhule family?",
      paragraphs: [
        "Four things mostly: programme and level, the subject, session length, and how recently a tutor taught that exact syllabus. HL Diploma subjects cost more than MYP or IGCSE Core work simply because fewer tutors nationally are currently teaching them. Whatever it comes to for your child's specific match, that figure is agreed before the trial, never adjusted afterward.",
        "No travel cost sits inside the number, because every Dhule lesson runs online no matter where the tutor is based. A specialist in Pune, Bengaluru or Hyderabad costs the same as one who happened to live in Dhule, which matters more here than most places given how thin the genuine local specialist pool is for these syllabuses.",
        "The hourly rate alone tells you less than it seems to. Someone who has actually marked IGCSE 0620's alternative-to-practical component, or taught IB Maths AA HL's Paper 3 style, is worth more per hour than someone re-teaching content a school already covered, and that gap matters more without a local school to check a tutor's judgement against.",
        "Nothing here runs on a signed, multi-month contract. Progress gets discussed on a rolling basis, pausing costs nothing on either side, and a tutor who isn't clicking after the trial gets replaced instead of tolerated.",
      ],
      bullets: [
        "Fee depends on programme, level, subject and session length",
        "No travel premium, since every Dhule lesson runs online",
        "Fee fixed for your specific match before the trial begins",
        "No long contract; pause or stop as needed",
      ],
    },
    {
      heading: "Coaching classes, home tutors or online tuition: what actually works in Dhule",
      paragraphs: [
        "Dhule's coaching economy runs on JEE, NEET and MHT-CET batches, plus State Board and CBSE board-exam prep, so a class built for something as narrow as IB Chemistry HL or IGCSE Additional Mathematics does not exist here. A student on either course learns far more one to one than folded into a general-science batch aimed at an unrelated exam.",
        "Home tutors do operate across Devpur, Old Dhule and elsewhere, but with no local school teaching IB or Cambridge/Edexcel IGCSE, the number who have taught these exact syllabuses recently is close to none. A generalist reading from a standard textbook can build confidence, but rarely matches a current-syllabus specialist's sense of what a mark scheme actually rewards.",
        "Self-study can carry a motivated student through something with clear past papers, such as IGCSE Mathematics, but it tends to collapse around Internal Assessment planning, Extended Essay structure and the extended-response style IB and IGCSE examiners specifically look for. Left alone, most students skip exactly the practice that separates an average grade from a strong one.",
        "Online one-to-one tuition is genuinely the only option that answers both problems at once here: syllabus-specific knowledge no coaching centre in Dhule offers, plus the individual attention self-study lacks, while pulling from a tutor pool across the whole country rather than a city with almost none of its own.",
      ],
      table: {
        caption: "Dhule's realistic options, compared",
        columns: ["Route", "Syllabus match", "Attention", "Where it falls short here"],
        rows: [
          ["Coaching batches", "Built for JEE, NEET, board exams", "Group", "No batch anywhere runs IB or IGCSE"],
          ["Home tutors", "Rarely current on these syllabuses", "One to one", "Very few have taught them recently"],
          ["Self-study", "Only as good as the student", "None", "IAs, coursework and long answers suffer"],
          ["Online specialist tutor", "Matched to the exact code and tier", "One to one", "None; draws from the widest possible pool"],
        ],
      },
      bullets: [
        "Local coaching runs on JEE, NEET and board exams, not IB or IGCSE",
        "Home tutors current on these syllabuses are genuinely rare in Dhule",
        "Self-study struggles hardest with IAs, coursework and extended writing",
        "Online matching is the direct fix for Dhule's thin local supply",
      ],
    },
    {
      heading: "Dhule's exam year: heat, rain, and the right time to start",
      paragraphs: [
        "Dhule runs hot and dry for most of the year, with April and May regularly touching 42-44 degrees just as many schools sit their own year-end internal exams. The southwest monsoon then breaks from June to September; rainfall here stays lighter than on the Maharashtra coast, but sudden heavy spells can still knock out an evening's internet.",
        "For a Diploma student at a school elsewhere, May carries the main exam session, results land in early July, and November is the retake window. Cambridge IGCSE runs May-June and October-November; Edexcel runs January and May-June. Ganeshotsav and Diwali both genuinely disturb the school calendar right across Maharashtra, Dhule included, and a workable tutoring plan builds around them rather than ignoring them.",
        "For a student boarding in Surat or Indore, that school's own term dates and half-terms set the real schedule, with tutoring from Dhule usually stepping up during the holidays home and easing off through term. Getting that actual calendar early matters, since it will not resemble a typical Dhule school year at all.",
        "For a private IGCSE candidate, the six to eight weeks right before the sitting matter most. Starting in January for May-June, or July for October-November, tends to leave enough runway to fix real gaps instead of a last-minute scramble.",
      ],
      table: {
        caption: "Dhule's year, exams and weather together",
        columns: ["When", "What's on", "What it means for lessons"],
        rows: [
          ["April-May", "Peak heat, school year-end exams", "Keep sessions short; do not overload the week"],
          ["May-June", "IB DP exams, Cambridge IGCSE series", "Final revision and timed past papers take priority"],
          ["June-September", "Southwest monsoon", "Leave room for the odd connectivity drop"],
          ["August-November", "Ganeshotsav, Diwali, Cambridge retakes", "Family routines shift; also a good catch-up window"],
        ],
      },
      bullets: [
        "Peak heat in April-May lines up with school year-end exams",
        "IB DP sits in May, with November for retakes",
        "Cambridge IGCSE: May-June and October-November; Edexcel: January and May-June",
        "Get a boarding school's real calendar early; a Dhule term year will not match it",
      ],
    },
    {
      heading: "Where Dhule students head next: universities after IB or IGCSE",
      paragraphs: [
        "Most Dhule students finishing IB or an IGCSE-into-DP route choose between study abroad, Indian engineering or medical entrance, or a seat at one of the district's own colleges: Shri Bhausaheb Hire Government Medical College for medicine, SSVPS's and SES's engineering colleges locally, and NMIMS's Shirpur campus a short drive away.",
        "Indian engineering and medical entrance needs Association of Indian Universities equivalence for an IB or IGCSE qualification, plus the right subjects at the right level for JEE or NEET eligibility. With no local school in Dhule to flag this early, getting subject choices right two or three years ahead of these exams matters more here than somewhere with a school counsellor already tracking it.",
        "Applications abroad hinge more than most families expect on predicted grades issued in the autumn of the final year, since that is what a university sees before any final result exists. UK offers usually specify a total IB point score plus HL minimums; US applications weigh predicted grades within a wider file; other systems run their own rules, generally explained by a boarding school's own counselling office.",
        "IB Gram's tutors keep to the academic side: subject depth, predicted-grade improvement, exam technique. We are happy to explain what a target course typically expects subject-wise, so tutoring time goes toward whatever actually moves the outcome.",
      ],
      bullets: [
        "Shri Bhausaheb Hire Government Medical College and local engineering colleges anchor Dhule's higher education",
        "NMIMS's Shirpur campus sits within the district",
        "AIU equivalence and the right subject levels matter for JEE/NEET eligibility",
        "Predicted grades carry real weight for applications abroad",
      ],
    },
    {
      heading: "IB Maths AA, AI and the three sciences for a Dhule student",
      paragraphs: [
        "Analysis and Approaches fits a student aiming at engineering, physical science or economics-heavy courses; its HL Paper 3 rewards genuinely unfamiliar, multi-step problems, and a tutor working off an outdated syllabus version tends to leave students under-prepared for exactly that. Applications and Interpretation leans on statistics, modelling and real graphic-calculator skill, and marks slip most often when the exploration topic gets chosen too late.",
        "Physics HL needs fluent use of the data booklet and disciplined timing on both papers, but the Investigation is where it is actually won or lost: a method that holds up under questioning, not a copy of a school-lab write-up. Chemistry HL leans on organic mechanisms and energetics once early bonding units are behind a student, and both subjects benefit from marking against the real IB rubric rather than a generic science standard.",
        "Most Dhule Biology students already know the content by the time we meet them; what usually needs work is fluency in the exact command terms IB examiners reward, plus enough statistical grounding to make a conclusion actually defensible.",
        "With no school in Dhule teaching any of these subjects, an online specialist matched precisely on level and current syllabus year closes these gaps faster than a generalist improvising from whatever textbook is at hand.",
      ],
      bullets: [
        "AA suits proof and calculus-heavy routes; AI suits statistics and modelling",
        "Physics and Chemistry HL both turn on the Investigation",
        "Biology needs command-term precision as much as raw content",
        "State Board and CBSE switchers usually know the content, not the command words",
      ],
    },
    {
      heading: "IGCSE Core or Extended: which is right for a Dhule student?",
      paragraphs: [
        "Cambridge's Core and Extended tiers cap different grade ranges, and getting this right matters more from Dhule than from a city with its own IGCSE school to consult. Here, the decision usually falls to the family, working with a tutor or with whichever school the student is actually enrolled at outside the district.",
        "Extended Mathematics 0580, paired with Additional Mathematics 0606 where a student prepares it separately, gives the cleanest run-up to IB Maths AA HL available. Extended-tier sciences do the same job for DP Physics or Chemistry HL, since the content depth sits closer to what the Diploma expects from day one.",
        "A Dhule student sitting Edexcel IGCSE, privately or through a school elsewhere, needs a tutor who genuinely understands how Edexcel's Foundation and Higher tiers phrase questions against Cambridge's; the underlying maths overlaps, the technique does not.",
        "More broadly, a private IGCSE candidate has more room to choose subjects than one fixed to a single school's offering, but that only helps with a clear sense of where it leads, whether the Diploma, A Levels or an Indian entrance-exam route.",
      ],
      bullets: [
        "Core versus Extended shapes both grade ceiling and DP readiness",
        "0606 Additional Mathematics is the strongest bridge into IB Maths AA HL",
        "Edexcel's technique differs from Cambridge's even where content overlaps",
        "Private candidacy gives more subject choice, useful only with a clear end goal",
      ],
    },
    {
      heading: "How does a tutor actually get matched to a Dhule student?",
      paragraphs: [
        "A short brief starts it: programme or board, subject and level, current or predicted grade, the exam session or school calendar involved, and what is actually driving the request, a stuck topic, an IA, a private entry, or a school switch being weighed up. That brief matters far more than any tutor's profile photo.",
        "Syllabus fit comes first, because there is no local school in Dhule against which to check a tutor's claims. Before any introduction, we look at qualifications, how recently someone has taught that exact subject and level, and how they handle guiding an IA or coursework.",
        "The trial class is where you and your child actually decide: how clearly the tutor explains something, whether the diagnostic questions land, whether your child seems comfortable saying 'I don't get this.' A short first-month plan follows, for you to approve or send back.",
        "A wrong fit gets swapped, not forced. Nothing here holds a Dhule family to a long contract, and scheduling bends around a boarding term or a visit home without much fuss.",
      ],
      bullets: [
        "Brief covers programme, subject, level, exam session or school calendar, and the actual problem",
        "Syllabus fit is the first filter, with no local school here to check against",
        "Tutors vetted before any introduction; trial class before any commitment",
        "First-month plan in writing, with a re-match whenever it is needed",
      ],
    },
  ],

  tutorsIntro:
    "Below are tutors covering PYP, MYP and Diploma-level IB, plus Cambridge and Edexcel IGCSE, working with students who happen to live in or near Dhule. A profile only makes the shortlist once its subject and level line up with what your child is actually studying, wherever that course is set.",

  process: [
    { title: "Describe the situation", description: "What your child studies, at what level, their current standing, and the dates or calendar that the school or exam board has already fixed." },
    { title: "Look through two or three names", description: "Names come from matching the syllabus first, not the city, given Dhule has nobody local to compare a tutor against; we explain why each one made the cut." },
    { title: "Watch them teach once, free", description: "A real topic covered live over video, with no fee attached and no requirement to book a second session." },
    { title: "Greenlight the opening month", description: "The tutor lays out a plan, topic by topic; you either wave it through or push back with edits." },
    { title: "Settle into a rhythm", description: "Weekly sessions on a set slot, a progress conversation every so often, and a straightforward swap if things stop working." },
  ],

  whyPoints: [
    { title: "Syllabus decides the match, not geography", description: "The exact IB subject and level, or IGCSE board, code and tier, drives who teaches your child, not a generic 'IB tutor' label." },
    { title: "Built around Dhule's actual gap", description: "With no IB or IGCSE school in the city, matching nationally replaces a local tutor pool that effectively does not exist." },
    { title: "Judge the tutor before paying anything", description: "A free trial class on genuine content, so the decision rests on what you saw, not a written bio." },
    { title: "Assessed work stays the student's", description: "Tutors guide IAs, coursework and the Extended Essay, stopping well short of writing any of it themselves." },
    { title: "You always know what was covered", description: "A short note after every session, plus a fuller check-in roughly monthly." },
    { title: "No strings attached", description: "No tie to any board, no long contract, scheduling that bends around a boarding term or a family visit home." },
  ],

  faqs: [
    { question: "How do I find an IB tutor for my child in Dhule?", answer: "Send IB Gram the programme, subject, level and current school or exam session, and we shortlist tutors who actually teach that course. With no IB school in Dhule to search around, matching runs on syllabus fit rather than location, and we then agree a lesson time around your evenings or a boarding school's schedule. A free trial class comes before anything else, and we suggest someone new if the fit is wrong." },
    { question: "Is it really true that Dhule has no IB or IGCSE school at all?", answer: "As far as our checks show, yes. Dhule's schools run on the Maharashtra State Board pattern and CBSE, with a small ICSE presence, and none of them teaches IB or Cambridge/Edexcel IGCSE. Families wanting either option generally look toward boarding schools in Surat or Indore, or build a subject through private study with online tutoring." },
    { question: "Can you cover both Cambridge and Edexcel IGCSE for a Dhule student?", answer: "Both boards, yes. Nothing in Dhule runs in person; every lesson is online, so a Cambridge student gets paired by exact code and tier, Mathematics 0580 Extended or Chemistry 0620 for instance, while an Edexcel student is paired by specification and Foundation or Higher, each working through that specific board's own papers rather than a mixed approach." },
    { question: "Does a tutor actually come to our home in Dhule?", answer: "No. That kind of visit is something IB Gram only arranges in Gurugram and a few pockets of Delhi's NCR. A Dhule lesson happens over a video call, one to one, whiteboard shared on screen, no different in substance from private tuition except that nobody physically arrives." },
    { question: "What should we budget for an IB or IGCSE tutor from Dhule?", answer: "That number moves with programme, level, subject, session length and how current the tutor is on that syllabus, but it gets locked in for your match before the trial starts, not adjusted afterward. HL Diploma work typically runs higher than MYP or IGCSE Core. Nothing gets added for travel, and nothing ties you into a contract." },
    { question: "Our child boards at a school in Surat or Indore. Is there still a point to a Dhule-based tutor?", answer: "There is, and plenty of families here do exactly this. The tutor is chosen against the precise Diploma or MYP subject the boarding school teaches, sessions run online through the term, and pick up pace whenever the child is home for a break, following that school's actual dates rather than a made-up schedule." },
    { question: "Can our child sit Cambridge or Edexcel IGCSE privately while living in Dhule?", answer: "That option exists nationwide through registered exam centres, and a tutor can build toward whichever subjects and tier get chosen. We're happy to walk through how private entry generally works, though the centre and the board itself confirm the actual registration windows and paperwork." },
    { question: "Is the trial lesson actually free, or is there a hidden cost?", answer: "There's no hidden cost. Your child sits through a genuine lesson on their own syllabus, at no charge, with zero obligation to book a second one. What follows is a short written plan for month one, and from there it's entirely your call whether to proceed, tweak the plan, or ask for someone else." },
    { question: "Will a tutor write any part of an IB Internal Assessment for us?", answer: "No, though they'll shape the process around it: sharpening a research question, walking through what a criterion is actually looking for, sanity-checking a data-collection method, and marking up a draft honestly. The line stops at the writing itself, since IB rules treat that as a breach regardless of intent." },
    { question: "Which IB Diploma subjects do Dhule students ask for most?", answer: "Both Maths routes, AA and AI, at HL and SL, sit at the top, with Physics, Chemistry, Biology, Economics, Business Management, English A and either Hindi or Marathi B close behind, alongside TOK and Extended Essay guidance. That said, any Diploma subject can be matched; these simply come up the most." },
    { question: "Do you teach younger IB students from Dhule, or only Diploma-age ones?", answer: "PYP and MYP get covered too. With neither running anywhere in Dhule, the usual scenario is a family keeping a subject going after leaving an earlier IB school, or getting a child ready before a planned move to one. MYP leans on criterion-graded writing; PYP stays closer to reading, number work and Exhibition prep." },
    { question: "Can online tutoring really replace a local IB or IGCSE school for Dhule students?", answer: "It does the job reasonably well here, partly because there's so little to compare it with locally. A shared screen, live marking of past papers and saved worked solutions replicate most of what in-person teaching offers, only over a screen, and the trade-off is access to specialists across India instead of a near-empty Dhule shortlist." },
    { question: "How does IB Gram actually vet tutors before matching one to a Dhule family?", answer: "Before an introduction happens, we look at credentials, whether the subject and level have been taught recently, and how a tutor approaches guiding an IA or coursework. Because Dhule offers no local benchmark, the bar leans toward someone current on the syllabus over a generalist. You then judge the actual fit in the trial." },
    { question: "When is the right time to start, given Dhule has no local IB or IGCSE school to flag problems early?", answer: "Right from the course's first term ideally, Class 11 for the Diploma and Grade 9 for IGCSE, so gaps get fixed well before IA deadlines or predicted grades are due. A later start is still workable; it just means tutoring narrows quickly onto the topics and past papers worth the most marks." },
    { question: "We're moving our child from a Dhule State Board or CBSE school into IB or IGCSE elsewhere. Can tutoring prepare them first?", answer: "That's a fairly regular request from this area. Usually it isn't the content tripping students up but the question style: words like 'explain', 'evaluate' and 'justify' expect something different from a State Board answer, and building that habit, along with early IA or coursework planning, works best starting the preceding summer." },
    { question: "Can sessions happen on weekends, or only on weekday evenings?", answer: "Either works, and most households end up mixing both, weekday evenings once school is done and a slot or two on weekend mornings. Scheduling allows for Dhule's harsher summer stretch and the monsoon months when the connection can waver, and slotting in an extra weekly class ahead of mocks is a quick ask." },
    { question: "What if the tutor matched to us just isn't right?", answer: "Flag it and a different tutor gets found. We touch base periodically on how things are going, and a change happens whenever it's warranted rather than leaving a student stuck with someone who isn't landing. Since nothing is contracted long-term, stepping away entirely is equally an option if that's what's needed." },
    { question: "Is IB Gram tied to any school in Dhule, Surat or Indore, or to the IB or Cambridge boards?", answer: "It isn't tied to any of them. IB Gram operates on its own, carrying no endorsement from or partnership with the schools mentioned on this page, Fountainhead School and P. P. Savani Cambridge International School included, and none whatsoever from the IB Organization, Cambridge International or Pearson Edexcel. Those names appear purely as an honest map of where the actual curricula are taught." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "A wider look at how families across Indian cities approach IB and IGCSE tutoring." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The one part of India where IB Gram tutors actually visit a family's home." },
    { label: "IB tutors", href: "/ib-tutors/", description: "What IB tutoring covers, programme by programme and subject by subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "A rundown of IGCSE boards, tiers and how the subject list works." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL subjects, IAs, TOK and the Extended Essay, laid out in full." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP's criterion grading, the Personal Project and eAssessment explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "How PYP's inquiry units and the final Exhibition actually work." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "Where the CP sits alongside a standard Diploma course load." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor backgrounds sorted by subject, programme and years of experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief directly and get a trial class on the calendar." },
    { label: "IB and IGCSE tutoring in Surat", href: "/surat/", description: "One of the two nearest cities with real, confirmed IB and Cambridge schools." },
    { label: "IB and IGCSE tutoring in Indore", href: "/indore/", description: "A second boarding-school option families weigh against Surat." },
    { label: "IB and IGCSE tutoring in Nashik", href: "/nashik/", description: "A Maharashtra neighbour dealing with the exact same lack of a local school." },
  ],

  closingHeading: "Start a free trial class with a Dhule-matched IB or IGCSE tutor",
  closingBody:
    "Write in with the programme or board, the subject and level, your child's current grade, and whatever exam session or school calendar actually governs their year. We come back with a tutor shortlist, their background teaching that syllabus, and a few trial slots that fit around your evenings, all online, all one to one, with nothing charged and nothing owed afterward. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",
};
