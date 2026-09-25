import type { CitySeoPage } from "../types";

/**
 * IB and Cambridge/Edexcel IGCSE schools shown in the Kolkata sliding strip. Only schools
 * confirmed to teach IB or IGCSE belong here.
 */
const kolkataIbIgcseSchools = [
  "The Heritage School, Kolkata",
  "Calcutta International School",
  "The Cambridge School, Kolkata",
  "Oaktree International School",
  "Garden High International School",
] as const;

export const kolkata: CitySeoPage = {
  slug: "kolkata",
  countryName: "Kolkata",
  countryNameLong: "Kolkata, West Bengal",
  demonym: "Kolkata",
  flagCode: "in",
  countryCode: "IN",
  region: "West Bengal, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday slots after school hours and relaxed weekend sessions, timed around Kolkata's school day and Durga Puja and exam breaks",
  lastUpdated: "2026-09-21",

  title: "IB & IGCSE Tutors in Kolkata | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Kolkata, teaching DP, MYP, PYP and Cambridge or Edexcel syllabuses over live video, with a free trial class before you pay anything.",
  h1: "IB and IGCSE Tutors and Online Tuition in Kolkata",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR KOLKATA FAMILIES",
  heroSubtitle:
    "If your child studies the IB or Cambridge and Edexcel IGCSE at a Kolkata school, private tuition from home works better when the tutor already knows that exact syllabus. We do not send tutors to Kolkata homes; every session runs online, live, one to one, on a laptop or tablet at your address, timed around school hours, tuitions elsewhere in the city and the traffic on EM Bypass or VIP Road. Tell us the programme, subject and level, and your child's grade, and we shortlist a tutor who has actually taught it.",
  primaryKeyword: "IB and IGCSE tutors in Kolkata",
  imageAltText: "Online IB tutor explaining an IB Diploma Physics problem to a student in Kolkata over video call",
  secondaryKeywords: [
    "IB tutor Kolkata",
    "IGCSE tutor Kolkata",
    "IB home tuition Kolkata",
    "IGCSE home tuition Kolkata",
    "IB private tuition Kolkata",
    "IB Maths tutor Kolkata",
    "IGCSE Maths tutor Kolkata",
    "IB Physics tutor Kolkata",
    "IB Chemistry tutor Kolkata",
    "IB Biology tutor Kolkata",
    "IB DP tutor Kolkata",
    "IB MYP tutor Kolkata",
    "IB PYP tutor Kolkata",
    "IGCSE online tuition Kolkata",
    "IB tutor Salt Lake Kolkata",
    "IGCSE tutor New Town Kolkata",
    "IB tutor Ballygunge",
    "online IB tutor Calcutta",
    "IGCSE tutor Calcutta",
    "Cambridge IGCSE tutor Kolkata",
    "Edexcel IGCSE tutor Kolkata",
    "IB Economics tutor Kolkata",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact IB or IGCSE course and level",
    "Every session is online, live and one to one, not recorded",
    "Free trial class before any commitment",
    "Independent platform, not tied to a school or exam board",
  ],
  heroStats: [
    { value: "PYP · MYP · DP", label: "IB programmes covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards covered" },
    { value: "IST, online only", label: "How Kolkata sessions run" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "Tutoring built around Kolkata's IB and IGCSE calendar, not a generic syllabus",
    paragraphs: [
      "A Kolkata child sitting the IB or the Cambridge and Edexcel IGCSE needs someone who has actually marked or taught that particular paper, not a general 'all boards' tutor. PYP work is inquiry led; MYP is scored against four published criteria; the DP splits every course into Higher and Standard Level; IGCSE runs on a board-specific code and tier. Picking the wrong match on any of these wastes a term, not a session.",
      "Kolkata's international-curriculum population sits in a few recognisable clusters rather than spreading across the whole city: the EM Bypass corridor around Anandapur, central Kolkata near Bagmari, and a boarding campus down at Joka. The households choosing IB or IGCSE tend to be Sector V's IT and finance transfers, established trading and business families sending a child abroad, or NRI households back in the city after years overseas.",
      "IB Gram runs Kolkata purely as an online city. Nobody comes to the door; a tutor logs in from wherever they are in India and teaches over a shared screen, working problems out, marking past papers and reviewing IA drafts in real time, with the session saved so either side can look back at it. That trade-off actually favours a Kolkata family, since it opens the door to a Diploma HL specialist or a niche IGCSE tutor the local market simply does not have in person.",
      "IB Gram has no partnership with any board, school or examining body it mentions here. Coaching stops at guidance: a tutor talks a student through a research question or a lab write-up, but the Internal Assessment, the Extended Essay, the TOK essay and IGCSE coursework stay entirely the student's own writing.",
    ],
    bullets: [
      "PYP, MYP and DP support built around the level, not just the board name",
      "Cambridge and Pearson Edexcel IGCSE, whichever tier your child sits",
      "Every Kolkata session is a live online class, starting with a free one",
      "A short write-up lands after each class so nothing gets lost between sessions",
    ],
  },

  programmesIntro:
    "Kolkata families move onto IB or IGCSE from several different starting points: a state-board or ICSE school in the early years, then a switch at Grade 9 into IGCSE, or straight into the IB continuum from Nursery at one of the city's handful of IB schools. Each stage needs a different kind of tutoring support, set out below.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "The PYP has no external exam. It runs on units of inquiry and, in the final year, the PYP Exhibition, a student-led research project presented to the school community.",
      countryNote:
        "Kolkata PYP families most often ask for help with English reading and writing fluency and number sense, since the school itself carries most of the inquiry work.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to 10, ages 11-16",
      description:
        "Every MYP subject is graded against criteria A to D, and MYP 5 ends with the Personal Project, a self-managed piece of work with a written process journal.",
      countryNote:
        "In Kolkata's MYP cohorts, the jump from descriptive answers to criterion-level analysis in the sciences and Language and Literature is usually where a tutor adds the most value.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A six-subject spread across three Higher and three Standard courses, sitting alongside TOK, the Extended Essay and CAS activity. The worldwide exam window falls in May, and a smaller resit round runs in November.",
      countryNote:
        "In Kolkata, requests cluster hardest around Maths AA and AI, Physics, Chemistry, Economics and English A, and a second weekly hour tends to get added once the school posts its mock timetable.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses paired with a career-related study, a reflective project and a set of personal and professional skills, built for students who want an applied strand alongside academic subjects.",
      countryNote:
        "Kolkata schools rarely register the CP directly, so our involvement is almost always on the Diploma courses inside a CP a student is taking through a partner institution elsewhere.",
    },
  ],

  subjectsIntro:
    "No two IB courses in a Kolkata student's timetable need the same tutor. A Maths AA HL class calls for someone comfortable with proof and abstract technique; a Business Management SL class calls for someone who reads a case study fast. Level and course come first in every match we make here, then grade and exam session.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Builds proof technique and calculus fluency toward the multi-step, unfamiliar problems that make up Paper 3 at Higher Level." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Leans on statistics, modelling and calculator work, with the modelling exploration going better when data collection starts in term one." },
    { name: "IB Physics", levels: "HL / SL", description: "Covers the syllabus theme by theme with real exam timing practice and a research question the student can actually test." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Ties bonding, energetics and organic mechanisms back to data-booklet use, the habit examiners consistently reward." },
    { name: "IB Biology", levels: "HL / SL", description: "Targets the wording of extended-response questions, genetics problems and the statistics an investigation write-up leans on." },
    { name: "IB Economics", levels: "HL / SL", description: "Sharpens diagram accuracy across micro and macro theory and shapes the three commentaries around genuine news articles." },
    { name: "IB Business Management", levels: "HL / SL", description: "Trains students to apply theory to the unseen case rather than recall it, and to structure the research project properly." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Works on unseen analysis for Paper 1, comparative essay writing for Paper 2 and rehearsal for the recorded oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Runs through pseudocode, object-oriented design and networking concepts alongside the coursework product and its write-up." },
    { name: "IB Psychology", levels: "HL / SL", description: "Covers the three approaches to behaviour, correct study referencing and how a strong extended response is built." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Uses systems diagrams and locally relevant case material rather than the same textbook example every tutor reaches for." },
    { name: "IB Geography", levels: "HL / SL", description: "Builds named case-study depth and a fieldwork method that can actually survive an examiner's questions about it." },
    { name: "IB History", levels: "HL / SL", description: "Develops source-handling for Paper 1 and essay argument for Paper 2, alongside the historical investigation." },
    { name: "IB Hindi B & Bengali A", levels: "HL / SL", description: "Practises the reading and writing conventions each paper expects and rehearses unscripted conversation for the oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Works through the exhibition objects and a prescribed title until the student has a position they can defend from two sides." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Helps narrow a workable research question early and reads drafts against the marking criteria; the writing stays the student's." },
    { name: "IB MYP Sciences & Maths", levels: "MYP 1-5", description: "Focuses on investigation design and the analytical language that criteria B and C are actually looking for." },
    { name: "IB MYP Personal Project", levels: "MYP 5", description: "Keeps the process journal moving in small weekly steps instead of a rushed rebuild before the school deadline." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel set different papers for what looks like the same subject, so an IGCSE match in Kolkata starts with the syllabus code and tier: 0580 Extended is not preparation for 4MA1 Higher, and 0606 Additional Mathematics is a different course altogether. We confirm board, code, tier and the exam series your child is entered for before a tutor is suggested.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Drills the non-calculator paper and the specific command words that quietly cost Extended-tier students their method marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Class 10", description: "Introduces calculus, trigonometric identities and vector work, giving the smoothest run into DP Maths AA later." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Focuses on Higher-tier problem solving in the phrasing Edexcel actually uses, which reads differently from Cambridge questions." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rebuilds confidence with equation rearrangement, electricity and waves, plus the alternative-to-practical paper technique." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Works through mole calculations, bonding and organic chemistry with the practical-alternative habits examiners look for." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Strengthens genetics, inheritance questions and the longer written answers that Extended tier specifically demands." },
    { name: "IGCSE Combined & Coordinated Sciences", levels: "0653 / 0654", description: "Keeps three sciences moving at once on a single revision timetable so none of them quietly falls behind." },
    { name: "IGCSE Economics 0455", levels: "Class 9-10", description: "Focuses on diagram precision and the longer evaluation paragraph that separates a solid answer from a strong one." },
    { name: "IGCSE Business Studies 0450", levels: "Class 9-10", description: "Trains application to the given business scenario instead of a memorised, generic textbook response." },
    { name: "IGCSE Accounting 0452", levels: "Class 9-10", description: "Covers double entry, the final accounts layout and ratio work, where formatting alone carries real marks." },
    { name: "IGCSE Computer Science 0478", levels: "Class 9-10", description: "Builds trace-table accuracy, pseudocode and Python skills for the problem-solving paper specifically." },
    { name: "IGCSE English First Language 0500", levels: "Class 9-10", description: "Works on directed writing, summary skills and composition, grounded in close reading of the unseen passage." },
    { name: "IGCSE English as a Second Language 0510", levels: "Class 9-10", description: "Trains reading, writing, listening and the speaking component as four genuinely separate skills." },
    { name: "IGCSE Geography & History", levels: "0460 / 0470", description: "Builds named case-study recall, source-based inference and essay pacing under real exam timing." },
  ],

  regionsTitle: "Kolkata neighbourhoods our online tutors work with",
  regionsIntro:
    "Because every session runs online, a tutor's home address in Kolkata never limits your child's options. What still matters is your family's routine: school pick-up time, tuition centres you already attend, and when the household internet and a quiet room are actually free. Here is how that plays out across the city.",
  regions: [
    { name: "Salt Lake City (Bidhannagar)", note: "Sector V's IT and BPO offices bring in relocating professionals whose children often move from a state board or CBSE school into IGCSE or IB. Evening slots after office hours work well for parent check-ins." },
    { name: "New Town (Rajarhat)", note: "A newer planned township with several CBSE and a growing number of IGCSE schools; families here tend to want a fixed weekly online slot rather than shifting timings." },
    { name: "EM Bypass, Anandapur and Mukundapur", note: "Home to The Heritage School and Calcutta International School; the corridor with the city's densest IB and IGCSE demand." },
    { name: "Ballygunge and Alipore", note: "Older, established south Kolkata neighbourhoods with a strong ICSE and CBSE base and a smaller but steady IB and IGCSE presence among business families." },
    { name: "Park Street and Camac Street", note: "Central Kolkata, close to several ICSE schools; families here often keep a state-board sibling and an IGCSE sibling in the same household." },
    { name: "Jadavpur and Garia", note: "South Kolkata residential belt near Jadavpur University, popular with academic families who value structured revision schedules." },
    { name: "Behala and Joka", note: "South-western Kolkata; Joka is also where Oaktree International School's boarding campus sits, drawing day and weekly-boarding IB and IGCSE students from across the region." },
    { name: "Dum Dum and the airport belt", note: "North Kolkata near Netaji Subhas Chandra Bose International Airport, with a mix of state-board and CBSE schools and a smaller IGCSE intake." },
    { name: "Howrah, across the Hooghly", note: "Families here commute across the river for school; online tuition removes that commute entirely for after-school sessions." },
    { name: "Tollygunge and Kalighat", note: "South-central Kolkata with easy access to Ballygunge and EM Bypass schools, and a mix of joint and nuclear families choosing IGCSE for older children." },
  ],

  schoolDisclaimer:
    "Schools appear on this page purely to show which catchments Kolkata families are drawing from. IB Gram runs as its own separate business, with no contract, licence or working relationship with any school listed here, nor with the International Baccalaureate, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "EM Bypass, Anandapur and Mukundapur",
      note: "Kolkata's main IB and IGCSE belt, drawing students from the EM Bypass residential corridor and neighbouring Kasba and Rajdanga.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "Garden High International School"],
    },
    {
      city: "Central and North Kolkata",
      note: "Families around Bagmari, Ultadanga and Park Circus study Cambridge IGCSE and A Levels at the city's oldest Cambridge-affiliated school.",
      schools: ["The Cambridge School, Kolkata"],
    },
    {
      city: "Joka and southern outskirts",
      note: "Eastern India's first authorised IB World School sits on a boarding campus south of the city, drawing day students from Behala and Diamond Harbour Road plus weekly boarders from further out.",
      schools: ["Oaktree International School"],
    },
    {
      city: "Nearby: Durgapur and Siliguri",
      note: "Smaller West Bengal towns with limited local IB or IGCSE options; some families board in Kolkata or commute for school while keeping a tutor based online for continuity.",
      schools: [],
    },
  ],

  modesIntro:
    "Kolkata has one format for us: online. Tutors do not visit homes here, so every session is a live one-to-one video class, and the choice families actually make is between online tuition, a local coaching centre and going it alone. Set out honestly below.",
  modes: [
    {
      title: "Online one-to-one tuition",
      description:
        "A live video class with your child at home in Kolkata, one to one, with a shared screen for working through problems and past papers. We do not offer home visits in Kolkata; this is the core format here.",
      bullets: [
        "Access to subject specialists well beyond Kolkata's local tutor pool",
        "Works for PYP, MYP, DP and IGCSE, all levels",
        "A saved record of the whiteboard for later revision",
        "No cancelled sessions for Kolkata's monsoon traffic",
      ],
    },
    {
      title: "Small-batch coaching centres",
      description:
        "Group classes at a physical centre, usually built around CBSE or state-board syllabuses rather than IB or IGCSE. Cheaper per hour, but pace is set by the group, not your child.",
      bullets: [
        "Useful for peer motivation and fixed timetables",
        "Rarely matched to a specific IB level or IGCSE tier",
        "Less individual feedback on IA and coursework drafts",
        "Travel time still applies, unlike online sessions",
      ],
    },
    {
      title: "Self-study with occasional check-ins",
      description:
        "Some Kolkata students manage steadily with past papers and school support alone, using a tutor only before mocks or for a single stuck topic.",
      bullets: [
        "Lowest cost, works best for confident, organised students",
        "Risk of gaps going unnoticed until a report card lands",
        "Best paired with an occasional online session before deadlines",
        "Not usually enough for HL sciences or Maths AA without support",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families in Kolkata",
      paragraphs: [
        "Kolkata's IB and IGCSE population is small next to Delhi or Mumbai but growing steadily, concentrated in a handful of schools rather than spread across the city. The Heritage School and Calcutta International School anchor the EM Bypass and Anandapur belt, The Cambridge School serves central Kolkata's Cambridge IGCSE and A Level families, and Oaktree International School, Eastern India's first authorised IB World School, runs a boarding campus at Joka that draws students from well beyond the city.",
        "The families choosing these boards over the West Bengal state board, ICSE or CBSE tend to fall into a few groups: professionals relocated to Salt Lake's Sector V IT and BPO offices who want continuity if they move again, established Kolkata business families sending children abroad for university, and NRI households returning to the city who want their children to keep pace with an international curriculum.",
        "Word of mouth still carries a lot of weight in how these families find tutors, more than in cities with bigger IB and IGCSE markets. That makes verified subject depth more important than volume of reviews. A tutor should be able to say, specifically, which IB level or IGCSE tier they have taught in the last two years, not just that they 'teach IB'.",
        "Kolkata's school year runs broadly April to March like most Indian schools, but with a longer autumn break around Durga Puja that state-board and CBSE schools also observe. IB and IGCSE schools tend to keep this break shorter, which is worth factoring into any tutoring plan built around the calendar rather than the syllabus alone.",
      ],
      bullets: [
        "IB and IGCSE options concentrate in a few Kolkata schools, not many",
        "Relocating professionals, business families and NRI returnees drive demand",
        "Verified subject depth matters more than a general 'IB tutor' label",
        "Durga Puja shortens the autumn term for most schools",
      ],
    },
    {
      heading: "State board, ICSE, CBSE or IB and IGCSE: how do they actually compare for a Kolkata family?",
      paragraphs: [
        "The West Bengal state board (WBBSE and WBCHSE) suits families staying within the state system for college admission, with lower fees and Bengali-medium options. ICSE, run by CISCE, is Kolkata's traditional choice for English-medium academic families and is well understood by local colleges. CBSE suits families expecting to move cities within India. IB and IGCSE suit families expecting international moves, a foreign university, or a curriculum built around explanation and inquiry rather than recall.",
        "The practical difference tutors see most is in how questions are asked. State board and ICSE exams reward accurate recall and set-format answers; IB and IGCSE reward application, evaluation and, at IB level, criterion-referenced analysis. A strong ICSE student switching boards is not automatically ready for an IGCSE Extended-tier question or an IB Paper 2 essay without some retraining in that style.",
        "Cost and grading also work differently. State board and ICSE fees are usually lower than IB or IGCSE school fees in Kolkata, and grading is exam-mark based throughout. IB adds continuous internal assessment worth 20 to 30 percent of most Diploma subjects, and IGCSE mixes coursework subjects with pure-exam ones, which changes how a tutor should plan the year.",
        "None of the four is objectively 'harder'; they measure different things. A family choosing between them should weigh where the child is likely to study after Class 12 more than which board has the reputation for being tougher in Kolkata's tuition-market gossip.",
      ],
      table: {
        caption: "Kolkata boards compared",
        columns: ["Board", "Assessment style", "Best fit"],
        rows: [
          ["WB state board", "Exam-based, set answer formats", "Families staying in the state college system"],
          ["ICSE (CISCE)", "Exam-based with some project work", "English-medium academic families in Kolkata"],
          ["CBSE", "Exam-based, national syllabus", "Families expecting a move within India"],
          ["IB (PYP/MYP/DP)", "Continuous IA plus final exams, criteria-marked", "Inquiry-based learning, international university plans"],
          ["Cambridge/Edexcel IGCSE", "Exam-based, some coursework subjects", "Bridge to IB Diploma or A Levels, overseas study"],
        ],
      },
    },
    {
      heading: "What drives the cost of IB and IGCSE tuition in Kolkata?",
      paragraphs: [
        "The cost of IB or IGCSE tuition for a Kolkata student depends mainly on the subject and level, not the city. IB Diploma HL sciences and Maths AA cost more per hour than MYP or IGCSE Core support, because fewer tutors teach them well, and niche subjects like Additional Mathematics or Computer Science command a premium simply because supply is thin, especially outside the biggest Kolkata schools.",
        "Session length and frequency matter next. A once-weekly hour through the school year costs less overall than the twice-weekly sessions many families add before IB mocks or an IGCSE exam series, but starting late in Class 12 or Grade 12 often needs more frequent sessions to catch up, which raises the total even at the same hourly rate.",
        "Because every Kolkata session runs online, travel is never part of the fee, which tends to make online IB and IGCSE tuition here more competitively priced than in cities where in-home travel time gets built into the rate. We confirm the exact fee for your child's match before the trial class, in writing, with no hidden add-ons.",
        "We do not publish a price list, because a fair quote depends on the actual subject, level and student need. What we can promise is no long lock-in: engagements are reviewed every few weeks, and you can pause or stop without penalty if circumstances change.",
      ],
      bullets: [
        "HL sciences and Maths AA cost more than MYP or IGCSE Core",
        "Niche subjects cost more because fewer tutors teach them",
        "No travel cost, since Kolkata sessions are always online",
        "Fee confirmed in writing before the trial, no long contract",
      ],
    },
    {
      heading: "Online tuition, coaching centres, home tutors or self-study: what actually works for a Kolkata student?",
      paragraphs: [
        "For IB and IGCSE specifically, online one-to-one tuition is usually the strongest option in Kolkata, because the local pool of tutors who have actually taught a given IB level or IGCSE tier is small. Going online widens that pool to subject specialists across India without asking a tutor to travel across the city in monsoon traffic.",
        "Local coaching centres are common in Kolkata for CBSE, state-board and competitive-exam preparation, but far fewer run true IB or IGCSE batches, and a mixed-syllabus group class rarely matches the criterion-level marking either board expects. They can still work as a supplement for confident students who want peer structure.",
        "A private home tutor coming to the house is the one option we do not offer in Kolkata, honestly stated: IB Gram's tutors work with Kolkata families online only, and in-person home visits run only in Gurugram and parts of Delhi NCR. Self-study with past papers works for organised, confident students but tends to leave gaps unnoticed until a report card or mock result reveals them.",
        "The comparison below is how these four options actually differ for an IB or IGCSE student in Kolkata, not a general study-skills argument.",
      ],
      table: {
        caption: "Study options for Kolkata IB and IGCSE students",
        columns: ["Option", "Syllabus match", "Individual feedback"],
        rows: [
          ["Online one-to-one tuition", "Matched to exact subject and level", "High, every session"],
          ["Local coaching centre", "Usually CBSE or state-board focused", "Low, group pace"],
          ["Home tutor visiting", "Not offered in Kolkata by IB Gram", "Not applicable here"],
          ["Self-study with past papers", "Depends on student's own planning", "None until exams"],
        ],
      },
    },
    {
      heading: "The Kolkata school year: exams, Durga Puja and the monsoon",
      paragraphs: [
        "Most Kolkata IB and IGCSE schools run an April-to-March academic year, but the external exams follow global board dates. IB Diploma exams sit in May worldwide, with November as the retake session; Cambridge IGCSE sits May-June and October-November; Edexcel IGCSE sits January and May-June. Planning tuition backwards from these dates, not just the school's own term dates, avoids a last-minute scramble.",
        "Durga Puja, usually in late September or October, brings the city's biggest school break of the year, often a week or more once Kali Puja and Diwali follow close behind. Many Kolkata families use this window for a short, focused run of sessions on a weak topic, since school pressure and traffic both ease during the pujas.",
        "The monsoon, roughly June to September, brings waterlogging on several EM Bypass and central Kolkata roads that can cancel an in-person session outright; it changes nothing for an online class, which is one practical reason online tuition holds up better through a Kolkata school year than travel-dependent tutoring.",
        "Board exam mocks typically land in December and again in February or March, and IB predicted grades are set in the autumn of Grade 12 for university applications. Both are natural points to add a second weekly session if a subject needs it.",
      ],
      table: {
        caption: "Kolkata's academic-year pressure points",
        columns: ["Period", "What happens", "Tuition implication"],
        rows: [
          ["June-September", "Monsoon, waterlogging on several routes", "No disruption to online sessions"],
          ["Late September-October", "Durga Puja and Kali Puja break", "Good window for focused catch-up work"],
          ["December", "First mocks for most schools", "Add a second weekly slot if needed"],
          ["May", "IB Diploma exams; Cambridge and Edexcel May-June series", "Final revision and past-paper sessions"],
        ],
      },
    },
    {
      heading: "How do IB and IGCSE results from Kolkata carry into Indian and overseas university seats?",
      paragraphs: [
        "IB and IGCSE results from a Kolkata school carry into Indian admissions through the Association of Indian Universities equivalence, which most Indian universities and the CUET-UG process for Kolkata's central universities and colleges recognise, provided the subject combination matches the course requirement. Families should check equivalence early, in Grade 11, not after results arrive.",
        "For engineering and medicine, IB and IGCSE students from Kolkata still need to sit JEE or NEET separately if they want a government college seat in India; the Diploma or IGCSE does not substitute for either exam, though a strong IB Physics or Chemistry HL background genuinely helps with the underlying concepts.",
        "For students headed abroad, which a meaningful share of Kolkata's IB families plan for, UK offers are usually stated as total IB points with HL subject minimums, US applications weigh predicted grades within the wider profile, and Canadian and Singaporean universities have their own published equivalence tables. Subject choices made in Grade 11 need to match the target course from the start.",
        "IB Gram's tutors focus on the academic side of this: subject preparation, predicted-grade improvement and exam technique. We can tell you which subjects and levels a target course usually expects, so tutoring time lands on what actually moves an application.",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the sciences, for Kolkata students",
      paragraphs: [
        "IB Maths Analysis and Approaches suits Kolkata students likely to study engineering, physical sciences or economics at university and comfortable with proof and abstract technique; Applications and Interpretation suits those who think better through modelling, statistics and real data. The choice, usually made at the end of Grade 10 or the start of Grade 11, should follow the student's actual strengths, not a school's default recommendation.",
        "Both routes assume comfort with a graphic display calculator and, at HL, a Paper 3 that presents unfamiliar, multi-step problems rather than routine ones. Kolkata students coming from an ICSE or state-board background, where problems are more formulaic, often need explicit practice at reading a long IB question before attempting it, not just more content.",
        "In the sciences, Physics, Chemistry and Biology HL each carry a Scientific Investigation internal assessment worth 20 percent of the subject grade, and Kolkata students frequently underestimate how early a workable, testable research question needs to be settled, usually by the middle of Grade 11 for a comfortable timeline.",
        "A tutor's real value in these subjects is in exam technique specific to the current syllabus, not re-teaching content the school already covers well; past papers from the last three sessions, marked against the actual criteria, tend to move a predicted grade faster than additional textbook chapters.",
      ],
      bullets: [
        "AA suits proof and abstract technique; AI suits modelling and data",
        "HL Paper 3 rewards unfamiliar problem-solving, not memorised methods",
        "Science IAs need a testable question settled by mid-Grade 11",
        "Marked past papers move predicted grades faster than new content",
      ],
    },
    {
      heading: "IGCSE Core or Extended: what should a Kolkata student choose?",
      paragraphs: [
        "Extended tier opens the full grade range in Cambridge IGCSE subjects like Mathematics 0580 and the sciences; Core tier caps the highest grade a student can achieve, usually at a C or grade 4 equivalent, but asks less depth and suits a student who needs a secure pass more than a top mark. The decision, usually made at the end of Class 9, should reflect the student's realistic trajectory, including whether IB Diploma HL subjects follow.",
        "For a Kolkata student planning the IB Diploma afterwards, Extended tier in Maths and the sciences, and ideally Additional Mathematics 0606, makes the jump to DP HL far less of a shock. A student who studied Core Maths and then attempts Maths AA HL is starting from a real content gap, not just an unfamiliar exam style.",
        "Edexcel IGCSE uses Foundation and Higher tiers instead of Core and Extended, with broadly the same logic but different grade boundaries and question phrasing. A student moving between a Cambridge-affiliated school and an Edexcel one in Kolkata, which does happen with family relocations, needs a tutor who actively works with both boards' past papers, not just one.",
        "Subject choice within IGCSE matters too. Kolkata students aiming at IB Business Management or Economics HL benefit from IGCSE Business Studies or Economics beforehand; those aiming at Computer Science HL benefit from IGCSE Computer Science 0478 rather than ICT 0417, which is a different, less programming-focused syllabus.",
      ],
      bullets: [
        "Extended and Higher tiers open the full grade range",
        "Core or Foundation suits a secure pass over a top grade",
        "Additional Maths 0606 bridges cleanly into IB Maths AA HL",
        "Subject choices should anticipate the DP subjects that follow",
      ],
    },
  ],

  tutorsIntro:
    "A look at the tutors we place with Kolkata families across the IB continuum and Cambridge or Edexcel IGCSE. Each shortlist is built around the exact course and level your child is sitting, and every one of these sessions happens over live video.",

  process: [
    { title: "Tell us the details", description: "Programme, subject and level, current grade, the school's exam session, and the hours that actually work for your Kolkata household." },
    { title: "See a short shortlist", description: "Two or three tutors who have recently taught that exact course, with a plain reason each one is on the list." },
    { title: "Try one class, free", description: "Your child sits a real topic with the tutor over video before anyone pays anything or signs anything." },
    { title: "Lock in a monthly plan", description: "The tutor lays out what the next few weeks cover and how you will hear about progress; you sign off on it." },
    { title: "Keep it under review", description: "We check in every few weeks, add sessions ahead of mocks, and swap the tutor without argument if it stops working." },
  ],

  whyPoints: [
    { title: "Match by course, not by board", description: "A Maths AA HL tutor and an IGCSE 0580 Core tutor are different people; we never hand you a generic 'IB tutor'." },
    { title: "Upfront about the online format", description: "Kolkata sessions run online, and we say why that is a genuine advantage here, not a lesser version of the Gurgaon offering." },
    { title: "Evidence before commitment", description: "One real class, unpaid, comes before any decision, so you are judging a tutor's teaching rather than a write-up." },
    { title: "A hard line on assessed work", description: "IAs, EE, TOK and IGCSE coursework get feedback and structure from tutors, never a ghost-written sentence." },
    { title: "Something to check after every class", description: "A short note lands after each session, plus a proper check-in on progress every few weeks." },
    { title: "Nothing locking you in", description: "No exam-board tie-up, no minimum term, and a straight swap of tutor whenever the match is not right." },
  ],

  faqs: [
    {
      question: "Do you provide home tutors who visit the house in Kolkata?",
      answer:
        "No. IB Gram does not send tutors to Kolkata homes; in-person home visits currently run only in Gurugram and parts of Delhi NCR. Every Kolkata session is online, private tuition, one to one, live over video from your child's own home, with a shared screen and a saved record of the working. This actually widens your options, since it opens up subject specialists across India rather than only tutors who live nearby.",
    },
    {
      question: "How do I find an IB tutor in Kolkata?",
      answer:
        "Share your child's IB programme, subject, level and school with IB Gram, and we shortlist tutors who have recently taught that exact course. We match first on subject and HL or SL level, then confirm your preferred times. You take a free online trial class before deciding anything, and if the fit is wrong we suggest another tutor rather than asking you to persist.",
    },
    {
      question: "Do you provide IGCSE tutors in Kolkata for both Cambridge and Edexcel?",
      answer:
        "Yes. We match Cambridge IGCSE students by syllabus code and tier, such as Mathematics 0580 Extended or Chemistry 0620 Core, and Edexcel students by specification and Foundation or Higher tier. Tutors work from the correct board's past papers and mark schemes, since Cambridge and Edexcel differ in question style, exam series and grading conventions.",
    },
    {
      question: "What does IB or IGCSE tuition cost for a Kolkata student?",
      answer:
        "The fee depends on the subject, the level, session length and how experienced the tutor is, and we confirm it in writing for your specific match before the trial class. IB Diploma HL sciences and Maths generally cost more than MYP or IGCSE Core support, and niche subjects cost more because fewer tutors teach them well. There are no long contracts, and you can pause or stop at any time.",
    },
    {
      question: "Which Kolkata neighbourhoods do you cover?",
      answer:
        "Every family, regardless of neighbourhood, since sessions run entirely online. We regularly work with families in Salt Lake, New Town, EM Bypass and Anandapur, Ballygunge, Alipore, Jadavpur, Behala, Dum Dum and across the river in Howrah. Because there is no travel involved, your address never limits which tutor we can match you with.",
    },
    {
      question: "Is there a free trial class before I commit?",
      answer:
        "Yes, and nothing is billed for it. Your child sits down with the tutor over video and works through a topic from their own current syllabus, so you are watching a real class rather than reading a bio. Once it is done, the tutor writes up a short plan for the coming weeks, and only then do you decide whether to go ahead, tweak the plan or ask for someone else.",
    },
    {
      question: "Which schools in Kolkata teach the IB or IGCSE curriculum?",
      answer:
        "Kolkata's IB and IGCSE schools include The Heritage School and Calcutta International School along the EM Bypass and Anandapur belt, The Cambridge School for Cambridge IGCSE and A Levels in central Kolkata, Garden High International School, and Oaktree International School, a boarding campus at Joka and Eastern India's first authorised IB World School. We name schools only to describe catchments, with no affiliation to any of them.",
    },
    {
      question: "Can a tutor help with IB Internal Assessments and the Extended Essay?",
      answer:
        "A tutor can absolutely shape the thinking behind an IA or the Extended Essay: pressure-testing a research question, walking through what a criterion is actually asking for, sanity-checking a data set, and marking up a draft honestly. What no tutor at IB Gram will do is put words on the page for the student, because that crosses the IB's academic integrity line and puts the Diploma itself at risk.",
    },
    {
      question: "Which IB Diploma subjects can you help with for Kolkata students?",
      answer:
        "We match tutors across all major IB Diploma subject groups for Kolkata students: Maths Analysis and Approaches and Applications and Interpretation at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, ESS, Geography and History, plus Theory of Knowledge and the Extended Essay.",
    },
    {
      question: "Do you tutor IB MYP and PYP students, not just the Diploma, in Kolkata?",
      answer:
        "Yes, we cover the full IB continuum. MYP support focuses on criteria A to D in the sciences, maths and Language and Literature, and on the Personal Project process journal. PYP support covers reading and writing fluency and number sense for younger students. Sessions for younger children are usually shorter and more frequent than for Diploma students.",
    },
    {
      question: "What is the difference between Cambridge and Edexcel IGCSE for a Kolkata student?",
      answer:
        "Cambridge Assessment International Education and Pearson Edexcel both award the IGCSE but use different syllabus codes, tiers and exam series. Cambridge uses Core and Extended tiers, sitting exams in May-June and October-November; Edexcel uses Foundation and Higher tiers, sitting in January and May-June. Most Kolkata IGCSE schools follow Cambridge, so a tutor who mainly knows Edexcel material for a Cambridge student will waste study time on the wrong exam style.",
    },
    {
      question: "How is IB or IGCSE different from ICSE or the West Bengal state board?",
      answer:
        "ICSE and the state board are largely exam-mark based, with set answer formats that reward accurate recall. IB adds continuous internal assessment worth 20 to 30 percent of most Diploma subjects and marks against published criteria; IGCSE mixes pure-exam subjects with some coursework. A student moving from ICSE or the state board into IB or IGCSE usually needs help adjusting to application and evaluation questions, not extra content.",
    },
    {
      question: "When should my child start IB or IGCSE tutoring in Kolkata?",
      answer:
        "The best time is at the start of the course: Class 11 for the IB Diploma and Class 9 for IGCSE, since early support fixes foundations before internal exams and predicted grades matter. Students who start later, in the final year, can still make real progress, but the plan shifts to the highest-value topics and marked past papers rather than full syllabus coverage.",
    },
    {
      question: "My child is switching from ICSE or CBSE to IB or IGCSE. Can a tutor help?",
      answer:
        "Yes, this is one of the most common requests we get from Kolkata families. The content gap is usually smaller than expected; the real gap is question style, since IB and IGCSE reward explanation and application over recall. A tutor who knows both systems can build those habits within a few weeks, ideally starting the summer before the switch or the first term after it.",
    },
    {
      question: "How does Durga Puja affect the tutoring schedule?",
      answer:
        "Most Kolkata schools take their longest break of the year around Durga Puja, usually a week or more once Kali Puja and Diwali follow. Regular weekly sessions typically pause for the main puja days, and many families use the rest of the break for a short, focused run of catch-up sessions on a weak topic while school pressure is lower.",
    },
    {
      question: "Do IB and IGCSE results help with JEE, NEET or CUET from Kolkata?",
      answer:
        "IB and IGCSE do not replace JEE or NEET; students targeting engineering or medical seats in India still sit those exams separately, though strong Physics, Chemistry or Maths preparation genuinely helps. For general university admission, the Association of Indian Universities equivalence and the CUET-UG process are the usual route, and eligibility should be checked in Grade 11, not after results.",
    },
    {
      question: "What happens if we are not happy with the tutor?",
      answer:
        "Say so and a different tutor gets found, plainly, without an argument about it. Progress gets checked with every family every few weeks anyway, precisely so a bad fit does not drag on for a whole term before anyone notices. Because there is no lock-in contract, pausing or stopping sessions altogether is also always an option.",
    },
    {
      question: "Is IB Gram affiliated with any Kolkata school or with the IB or Cambridge?",
      answer:
        "It is not. IB Gram runs as its own separate business with no tie-up, licence or endorsement from any Kolkata school named on this page, nor from the International Baccalaureate, Cambridge Assessment International Education or Pearson Edexcel. Schools appear here purely to describe the catchments our students come from, and tutors simply follow each school's own calendar and the relevant board's published syllabus.",
    },
  ],

  internalLinks: [
    { label: "IB tutors in Kolkata", href: "/ib-tutors/kolkata/", description: "The older subject-by-subject IB pages for Kolkata, kept live alongside this one." },
    { label: "IGCSE tutors in Kolkata", href: "/igcse-tutors/kolkata/", description: "Cambridge and Edexcel matching broken down by IGCSE subject for Kolkata students." },
    { label: "IGCSE in Kolkata", href: "/igcse-pages/kolkata/", description: "Background on how IGCSE study works for families in the city." },
    { label: "Gurgaon, where home visits run", href: "/gurgaon/", description: "The one Indian city where our tutors currently teach at the student's own house." },
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The wider view of how this matching works nationally, city by city." },
    { label: "Browse our tutors", href: "/tutors/", description: "Individual tutor profiles, searchable by subject and years of teaching experience." },
    { label: "Inside the IB Diploma", href: "/programmes/dp/", description: "A breakdown of HL and SL choices, the IA weighting, TOK and the Extended Essay." },
    { label: "Inside the IB Middle Years Programme", href: "/programmes/myp/", description: "What the four assessment criteria mean and how the Personal Project is judged." },
    { label: "Inside the IB Primary Years Programme", href: "/programmes/pyp/", description: "How units of inquiry build up to the PYP Exhibition in the final year." },
    { label: "IGCSE explained", href: "/igcse/", description: "A plain guide to the boards, tiers and exam windows a Kolkata student might sit." },
    { label: "IB Mathematics support", href: "/courses/ib/mathematics/", description: "The detail on how AA and AI are taught differently at HL and SL." },
    { label: "Test prep and admissions help", href: "/admissions/test-prep/", description: "Where JEE, NEET and broader university admissions prep fits alongside IB or IGCSE study." },
    { label: "Reading for IB and IGCSE parents", href: "/blog/", description: "Longer articles on study planning, subject choice and exam-season advice." },
    { label: "Get in touch", href: "/contact-us/", description: "Send your child's details through and we will set up the free trial class." },
  ],

  closingHeading: "Start with a free online class for your Kolkata child",
  closingBody:
    "Send across the board, subject and level, where your child stands right now, and the hours that work for your household. Back comes a tutor who has genuinely taught that course recently, a slot that fits around school, and a class that costs nothing and commits you to nothing. Write to ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",

  geo: { latitude: 22.5726, longitude: 88.3639 },
  alternateNames: ["Calcutta"],
  wikipedia: "https://en.wikipedia.org/wiki/Kolkata",
  state: "West Bengal",
  stateCode: "IN-WB",
  stripSchools: [...kolkataIbIgcseSchools],
};
