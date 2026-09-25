import type { CitySeoPage } from "../types";

/**
 * Indore IB / Cambridge IGCSE schools confirmed by search: Choithram International (IB PYP, MYP,
 * DP and Cambridge IGCSE), The Emerald Heights International School (IB DP and Cambridge IGCSE)
 * and Daly College (Cambridge IGCSE and A Level, not IB). Only these three belong on the page.
 */
export const indoreIbIgcseSchools = ["Choithram International School", "The Emerald Heights International School", "Daly College"] as const;

export const indore: CitySeoPage = {
  slug: "indore",
  countryName: "Indore",
  countryNameLong: "Indore, Madhya Pradesh",
  demonym: "Indore",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evening slots after school and weekend mornings, planned around Indore school timings and exam sessions",
  lastUpdated: "2026-09-21",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  geo: { latitude: 22.7196, longitude: 75.8577 },
  wikipedia: "https://en.wikipedia.org/wiki/Indore",
  stripSchools: [...indoreIbIgcseSchools],

  title: "IB & IGCSE Tutors in Indore | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Indore students: DP, MYP, PYP and Cambridge IGCSE subjects, one-to-one with your child's own syllabus, plus a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Tuition in Indore",
  heroEyebrow: "IB & IGCSE ONLINE TUITION IN INDORE",
  heroSubtitle:
    "If you are searching for IB and IGCSE tutors in Indore, private tuition here works one to one over video, matched to your child's exact Diploma, Middle Years or Cambridge syllabus rather than a generic MP Board worksheet. Tell us the programme, subject and level, whether your child studies at Choithram International, Emerald Heights or Daly College, and we shortlist a tutor who already knows that course.",
  primaryKeyword: "IB and IGCSE tutors in Indore",
  imageAltText: "Online IB tutor reviewing a Diploma Programme chemistry problem with a student in Indore",
  secondaryKeywords: [
    "IB tutor Indore",
    "IGCSE tutor Indore",
    "IB home tuition Indore",
    "IGCSE home tuition Indore",
    "IB private tuition Indore",
    "IB Maths tutor Indore",
    "IGCSE Maths tutor Indore",
    "IB Physics tutor Indore",
    "IB Chemistry tutor Indore",
    "IB Biology tutor Indore",
    "IB DP tutor Indore",
    "IB MYP tutor Indore",
    "IB PYP tutor Indore",
    "IGCSE online tuition Indore",
    "IB tutor Vijay Nagar",
    "IGCSE tutor Palasia",
    "IB Economics tutor Indore",
    "online IB tutor Indore",
    "IGCSE Chemistry tutor Indore",
    "IB tutor Bhanwarkuan",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact IB level or IGCSE tier, not a generic label",
    "Live one-to-one sessions online, with a shared screen and saved notes",
    "Free trial class before you commit to anything",
    "Independent platform, not tied to any Indore school or exam board",
  ],
  heroStats: [
    { value: "PYP · MYP · DP · CP", label: "IB programmes covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards covered" },
    { value: "Online, one-to-one", label: "How Indore sessions run" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition means for an Indore family",
    paragraphs: [
      "Indore is Madhya Pradesh's largest city and its commercial heart, a trading and pharmaceutical hub where a good number of families move in and out for business or a posting, and where a smaller but real group of parents wants their children on an internationally recognised syllabus rather than only the MP Board or CBSE track. Choithram International, The Emerald Heights International School and Daly College between them cover IB PYP, MYP, DP and Cambridge IGCSE for the city, but three schools cannot carry every family's tutoring need on their own timetable.",
      "Tutoring here means a subject specialist working one to one with your child over video, on the exact IB course or IGCSE syllabus code they study, not a Bhanwarkuan coaching-class worksheet aimed at MP Board students. That distinction matters because IB internal assessment criteria and Cambridge command words are marked in ways board-exam coaching never trains for.",
      "IB Gram tutors are based across India and teach in Indian Standard Time, so scheduling around Indore school hours, evening coaching commitments and board exam weeks is straightforward. Sessions run entirely online for Indore families; there is no home-visit option here, only in Gurugram and parts of Delhi NCR, and we say that plainly rather than let the phrase 'home tuition' create the wrong expectation.",
      "IB Gram is independent and not affiliated with, endorsed by or representing Choithram International, Emerald Heights, Daly College, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. Tutors coach and explain; they never write a student's Internal Assessment, Extended Essay, TOK essay or IGCSE coursework.",
    ],
    bullets: [
      "IB DP, MYP and PYP tutors matched by exact subject and level",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended tiers",
      "Fully online one-to-one sessions, no home visits in Indore",
      "Free trial class and a written plan after it",
    ],
  },

  programmesIntro:
    "Indore families move across boards more than the average MP city: from CBSE or MP Board into Cambridge IGCSE at Grade 9, or from IGCSE into the IB Diploma at Grade 11. Each programme needs a different kind of tutoring, and below is how each one plays out for a family studying in Indore.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "An inquiry-led programme built around units of inquiry and, in the final year, the PYP Exhibition, with no external exams to sit.",
      countryNote:
        "Indore PYP families most often ask for help with English reading fluency, number sense and structuring Exhibition research, in short after-school sessions.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Every subject is assessed against criteria A-D, MYP 5 runs the Personal Project, and some schools finish with MYP eAssessment.",
      countryNote:
        "In Indore, MYP students most often need criterion-level analysis in sciences and Language and Literature, and a Personal Project journal kept up through the year rather than assembled the week before it is due.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard Level, plus Theory of Knowledge, the Extended Essay and Internal Assessments worth roughly a fifth to a third of most subject grades.",
      countryNote:
        "Most DP requests from Indore are for Maths AA or AI, Physics, Chemistry and Economics, often alongside JEE or NEET coaching that Indore's science-focused students already attend.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Combines two or more DP courses with a career-related study, a reflective project and personal and professional skills.",
      countryNote:
        "Very few Indore schools run the CP; where a student does follow it, the DP subjects inside it need the same specialist tutoring as full Diploma students get.",
    },
  ],

  subjectsIntro:
    "IB tutoring for an Indore student has to match the exact course and level: Maths Analysis and Approaches HL is a different subject from Applications and Interpretation SL, and a Biology tutor is not automatically right for MYP Sciences. We match on the specific subject, the level, the Internal Assessment stage and the exam session your child is preparing for.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, algebraic proof and the Paper 3 investigative questions that HL students in Indore tend to find hardest, alongside the exploration IA." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator fluency, with an exploration IA built around a real data set rather than a textbook example." },
    { name: "IB Physics", levels: "HL / SL", description: "The seven themes, data-booklet use, Paper 2 extended response and a Scientific Investigation with a method that would hold up under questioning." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure and bonding through to organic mechanisms, energetics calculations and a lab-based Scientific Investigation write-up." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell and molecular biology through to ecology, extended-response command terms and the statistics an IA needs to be credible." },
    { name: "IB Economics", levels: "HL / SL", description: "Micro and macro theory, accurate diagrams and the Paper 3 quantitative questions HL students face, plus the three internal commentaries." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying theory to a real case study rather than restating it, and building a Business Research Project around an organisation the student actually knows." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen textual analysis for Paper 1, comparative essay technique for Paper 2, and the Individual Oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Data structures, object orientation and networks, plus the IA solution and its supporting documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "Biological, cognitive and sociocultural approaches, correct study citation and extended-response argument structure." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Systems diagrams, case-study evaluation and the fieldwork element schools in and around Indore can realistically arrange." },
    { name: "IB Hindi B and Hindi A", levels: "HL / SL", description: "Text-type conventions, receptive-skills practice and spontaneous speaking for the individual oral, useful for students moving between Hindi and English mediums." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study depth, fieldwork write-ups and the evaluative language that separates a mid-range grade from a strong one." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation for Paper 1, essay argument for Paper 2 and a historical investigation with a workable research question." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Building an exhibition commentary around three genuine objects and arguing a prescribed title from more than one angle." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Narrowing a research question a student can actually finish, working within subject-specific criteria, and staying entirely the student's own writing." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Criterion B and C investigation design and the maths foundations that DP HL subjects will later assume are already solid." },
    { name: "IB MYP Language & Literature and Personal Project", levels: "MYP 1-5", description: "Criterion A textual analysis and a Personal Project process journal that gets built week by week, not rebuilt at the deadline." },
  ],

  igcseSubjectsIntro:
    "Cambridge dominates IGCSE in Indore; Daly College also offers Cambridge AS and A Level after it. We match tutors on the syllabus code and tier, Core or Extended, and on the exam series your child is entered for, and we look ahead to whether Additional Mathematics or Extended sciences will matter for a Diploma place afterwards.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Paper-specific technique for Extended, accuracy without a calculator, and the command words that cost easy method marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus basics, trigonometric identities and vectors, the strongest bridge into IB Maths AA HL." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation rearrangement, electricity and waves, and the alternative-to-practical paper technique." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, bonding, organic chemistry and the practical-alternative skills examiners reward." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, extended-response structure and reading unfamiliar data correctly under time pressure." },
    { name: "IGCSE Combined & Coordinated Sciences", levels: "0653 / 0654", description: "Keeping three sciences moving together on one revision timetable without one of them slipping." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagram precision and the longer evaluation answers that carry most of the marks." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying theory to the specific case-study business rather than writing a general answer." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables, pseudocode and Python for the problem-solving paper." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary skills and close reading of unseen passages." },
    { name: "IGCSE Hindi as a First or Foreign Language", levels: "Grade 9-10", description: "Composition and comprehension technique for Cambridge's Hindi papers, useful for Indore students moving between languages of instruction." },
  ],

  regionsTitle: "Indore areas where families search for IB and IGCSE tutoring",
  regionsIntro:
    "Sessions run online, so where you live in Indore does not limit which tutor your child gets, but it does shape the local school and coaching context we plan around: evening traffic on AB Road, a coaching-class timetable in Vijay Nagar, or a board switch happening at a Rau school. Here is what we account for by area.",
  regions: [
    { name: "Vijay Nagar", note: "A commercial and residential hub on AB Road with dense NEET and JEE coaching options; IB and IGCSE families here are mostly on the CBSE-to-IGCSE switch." },
    { name: "Palasia", note: "Central Indore, close to Race Course Road; a mixed board area where families often ask about moving a child from CBSE into Cambridge IGCSE." },
    { name: "Bhanwarkuan", note: "A dense residential and coaching-class belt; tutoring demand here skews towards Grade 9-10 IGCSE science and maths." },
    { name: "Race Course Road and South Tukoganj", note: "Central Indore near Daly College's Cambridge programme; families here often want Extended-tier support alongside a competitive-exam track." },
    { name: "Manik Bagh Road", note: "Home to Choithram International's IB and Cambridge continuum; requests here run from PYP reading support through to DP HL sciences." },
    { name: "Rau and the AB Road corridor", note: "Home to The Emerald Heights International School; DP and IGCSE tutoring requests cluster around this southern stretch of the city." },
    { name: "Scheme 78 and Nipania", note: "Indore's IT and Super Corridor belt, home to many relocating professional families; demand leans towards online IB DP maths and sciences." },
    { name: "Bicholi Mardana and Bicholi Hapsi", note: "Newer residential development on the city's edge with a growing school-age population and fewer local IGCSE options." },
    { name: "Sudama Nagar", note: "A well-established middle-class residential area where families switching a child from MP Board to CBSE or IGCSE often start with a tutor first." },
    { name: "Rajwada and the old city", note: "Indore's historic trading centre; business families based here are among those most likely to consider IB or IGCSE for a child heading abroad for university." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring platform. Schools are named only to describe the IB and Cambridge IGCSE options Indore families actually study on. We are not affiliated with, endorsed by, partnered with or representing Choithram International, The Emerald Heights International School, Daly College, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Central and south Indore",
      note: "Choithram International and Daly College sit within a few kilometres of each other around Manik Bagh Road and Race Course Road, and tutor requests here follow Choithram's Diploma calendar alongside Daly College's Cambridge one.",
      schools: ["Choithram International School", "Daly College"],
    },
    {
      city: "Rau and AB Road corridor",
      note: "The Emerald Heights International School's IB Diploma and Cambridge IGCSE families are based along this southern stretch of Indore, close to the IIT Indore area.",
      schools: ["The Emerald Heights International School"],
    },
    {
      city: "Vijay Nagar, Palasia and the eastern IT corridor",
      note: "No school here runs an IB or IGCSE campus of its own, so families in this belt are honestly a smaller share of local demand; most study fully online and travel across town only for open days or admissions visits.",
      schools: [],
    },
  ],

  modesIntro:
    "Tutors do not visit homes in Indore; that in-person option exists only in Gurugram and parts of Delhi NCR. What we do offer is three ways of running fully online, one-to-one IB and IGCSE tuition, and the right one usually depends on how close your child is to an exam.",
  modes: [
    {
      title: "Standard online one-to-one tuition",
      description:
        "A weekly live video lesson with a shared screen, working through the exact syllabus your child studies at school, with notes saved after each session.",
      bullets: [
        "Matched to the exact IB level or IGCSE tier",
        "Works for every programme from PYP through DP",
        "Parents can join the first session to see how it runs",
        "Easy to reschedule around Indore school and coaching timetables",
      ],
    },
    {
      title: "Exam-season intensive online tuition",
      description:
        "A second weekly session added in the run-up to mocks, the May DP session or the Cambridge and Edexcel series, focused on past papers and weak topics.",
      bullets: [
        "Targets the topics a mock exam actually flagged",
        "Past-paper walkthroughs from the right board",
        "Useful for Grade 10 tier decisions and Grade 12 predicted grades",
        "Sessions can increase or reduce as the exam date changes",
      ],
    },
    {
      title: "Online sibling or small-group tuition",
      description:
        "Two children on the same syllabus, often siblings or classmates at the same Indore school, share a session at a lower cost per child.",
      bullets: [
        "Practical for MYP siblings a year or two apart",
        "Keeps cost down without losing subject-specialist teaching",
        "Works well for IGCSE Core-tier group revision",
        "Can split into one-to-one sessions closer to exams",
      ],
    },
  ],

  sections: [
    {
      heading: "Which Indore schools offer IB or IGCSE, and who are they for?",
      paragraphs: [
        "Only three Indore schools currently run a confirmed IB or Cambridge IGCSE programme: Choithram International (IB PYP, MYP and DP, plus Cambridge IGCSE) on Manik Bagh Road, The Emerald Heights International School (IB DP and Cambridge IGCSE) on the AB Road corridor near Rau, and Daly College (Cambridge IGCSE through to A Level, not IB) near Race Course Road. Every other school in the city runs MP Board, CBSE or ICSE.",
        "That makes Indore's IB and IGCSE population smaller and more scattered than in a city like Bhopal's neighbour Delhi, but the families who choose it are consistent: business and trading families based in the old city and Rajwada area who want a global option for their children, pharmaceutical and manufacturing executives posted to Indore from elsewhere in India or abroad, and a smaller group of professionals returning from overseas who want continuity with an international curriculum.",
        "Because the three schools each run their own pace and their own IA and coursework deadlines, a tutor working with an Indore family needs to know which school's calendar applies, not just the programme name. A DP student at Emerald Heights and one at Choithram can be at different points in their Internal Assessment timeline in the same month.",
        "Families whose children study MP Board or CBSE but are considering a switch to IGCSE or the IB Diploma later also come to us, usually around Grade 8 or Grade 10, wanting to understand what the jump actually involves before committing a child to it.",
      ],
      bullets: [
        "Choithram International: IB PYP, MYP, DP and Cambridge IGCSE",
        "Emerald Heights International: IB DP and Cambridge IGCSE",
        "Daly College: Cambridge IGCSE and A Level, not IB",
        "Business families, relocating professionals and board switchers drive most demand",
      ],
    },
    {
      heading: "CBSE, MP Board or IB and IGCSE: how do they compare for Indore families?",
      paragraphs: [
        "MP Board and CBSE reward accurate recall against a fixed syllabus and a single annual paper; IB and Cambridge IGCSE reward explanation, application and, for the IB, criterion-based judgement across two years of continuous assessment. Neither is harder in every sense; they test different things, and a strong MP Board student can still struggle with an IGCSE Extended-tier question that changes the context of a familiar topic.",
        "For Indore's large NEET and JEE coaching population, the MP Board or CBSE route stays the more direct path, because competitive-exam coaching is built around that syllabus. Families choosing IB or IGCSE are usually prioritising a different outcome: an internationally portable qualification, a broader subject mix at DP level, or preparation for university admission outside India.",
        "The table below sets out how the three systems compare on the things that actually change a tutoring plan.",
      ],
      table: {
        caption: "MP Board / CBSE, IB and Cambridge IGCSE compared",
        columns: ["Aspect", "MP Board / CBSE", "IB (PYP / MYP / DP)", "Cambridge / Edexcel IGCSE"],
        rows: [
          ["Assessment style", "Recall-based, structured board papers", "Criteria-marked, inquiry and internal assessment plus external exams", "Structured papers, Core or Extended tiers, occasional coursework"],
          ["Main exam window", "Annual finals in March", "DP exams in May, retakes in November; no exams in PYP", "Cambridge in May-June and October-November; Edexcel in January and May-June"],
          ["Best suited to", "Students staying on India's competitive-exam pipeline", "Students targeting global universities or a broad DP subject spread", "Students wanting an internationally recognised Grade 9-10 result before DP or A Level"],
          ["Local availability in Indore", "Widely available across the city", "Full continuum only at one school", "Offered at three schools, to different levels"],
        ],
      },
      bullets: [
        "Neither system is universally harder, they test different skills",
        "MP Board and CBSE suit families staying in the JEE/NEET pipeline",
        "IB and IGCSE suit families targeting global universities or portability",
        "Local availability is the real constraint, not preference alone",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost in Indore, and what changes the price?",
      paragraphs: [
        "The fee for an IB or IGCSE tutor in Indore depends on the programme and level, the subject, how long each session runs and how experienced the tutor is with that exact syllabus. IB Diploma HL subjects and Cambridge Extended-tier sciences generally cost more per hour than MYP or PYP support, because fewer tutors in India teach them to a genuinely specialist level.",
        "We do not publish a fixed price list, because the honest answer changes with every match. What we do is confirm the fee for your specific tutor and subject in writing before the trial class, so there is nothing to negotiate afterwards and nothing hidden in a later invoice.",
        "Because sessions run online for Indore families, there is no travel cost built into the fee, which tends to make online tutoring here more economical than an equivalent in-person arrangement would be in a city where home visits exist. A second weekly session before exams costs proportionally more, but many families only add it for the eight or so weeks before mocks.",
        "There are no long contracts. We review progress every few weeks and you can pause or stop sessions without penalty if your child's timetable, coaching schedule or exam calendar changes.",
      ],
      bullets: [
        "Fee depends on programme, level, subject and tutor experience",
        "Confirmed in writing for your specific match before the trial",
        "No travel cost, since Indore sessions are fully online",
        "No long contracts; pause or stop anytime",
      ],
    },
    {
      heading: "Online tuition, coaching centres or self-study: what actually works for IB and IGCSE in Indore?",
      paragraphs: [
        "Indore has a strong coaching-centre culture built almost entirely around MP Board, CBSE and the JEE and NEET entrance exams. That infrastructure does not transfer well to IB or Cambridge IGCSE, because coaching centres teach to a different mark scheme and rarely see enough IB or IGCSE students to build real depth in the criteria.",
        "Local private home tutors face the same gap: the supply of tutors who have actually taught IB Internal Assessment criteria or Cambridge Extended-tier papers is thin outside the three schools' own staff, and school staff are usually unavailable for outside tutoring. Self-study from past papers works for a motivated, organised Grade 12 student close to an exam, but it gives no feedback on an IA draft or a TOK argument.",
        "Online one-to-one tuition with a syllabus specialist closes that gap without asking a family to find a rare in-person match. It also means an Indore student is not limited to whichever handful of local tutors happen to know the right board; the specialist can be based anywhere in India.",
      ],
      table: {
        caption: "How the options compare for IB and IGCSE families in Indore",
        columns: ["Format", "Best for", "Limitation in Indore"],
        rows: [
          ["Online one-to-one tuition", "Exact syllabus and level match, HL/SL or Core/Extended specialists", "Needs a quiet room and steady internet, no in-person contact"],
          ["Local coaching centres", "Group revision aligned to JEE/NEET and board exams", "Built for MP Board and CBSE syllabuses, not IB or Cambridge criteria"],
          ["Private home tutors in Indore", "Younger children, handwriting and foundational practice", "Very few have taught IB or IGCSE criteria; supply is thin"],
          ["Self-study with past papers", "Motivated Grade 12 students close to an exam", "No feedback on IA drafts, TOK arguments or Extended-tier technique"],
        ],
      },
      bullets: [
        "Coaching centres in Indore are built for board and entrance exams, not IB/IGCSE",
        "Local IB/IGCSE-experienced home tutors are genuinely scarce",
        "Self-study alone leaves IA, EE and TOK work unchecked",
        "Online specialist tuition removes the local-supply problem entirely",
      ],
    },
    {
      heading: "The Indore school year: exams, monsoon and festivals that shape a study calendar",
      paragraphs: [
        "Indore runs an April-to-March academic year like most Indian schools, but the IB and Cambridge calendars sit on top of it rather than following it exactly. Summer in Indore runs hot and dry from April into June, monsoon arrives by late June and can bring waterlogging on low-lying roads through September, and winter from November to February is the most comfortable stretch for sustained study.",
        "Navratri and Diwali fall in October or November most years and are celebrated widely across the city, often with a week or more of reduced school activity either side; that period also overlaps with the Cambridge October-November series and, in some years, IB DP retakes, so planning revision around the break rather than through it avoids losing momentum.",
        "January brings the Edexcel January series and most schools' pre-board and mock exams, which is usually when weak topics become obvious enough to act on before the main May session. The final stretch from March to May carries MP Board and CBSE finals for switchers alongside the DP and Cambridge May-June series, the heaviest exam load of the Indore school year.",
      ],
      table: {
        caption: "Indore's exam and festival calendar",
        columns: ["Period", "What happens", "Effect on tutoring"],
        rows: [
          ["April-June", "New academic year begins; peak summer heat", "Good window for foundation work before the year gets busy"],
          ["July-September", "Monsoon; MYP and DP term assessments", "Occasional waterlogging affects commutes; online sessions stay unaffected"],
          ["October-November", "Navratri, Diwali; Cambridge Oct-Nov series; some DP retakes", "Plan revision around the festival break rather than through it"],
          ["January-February", "Edexcel January series; pre-boards and mocks", "Mock results usually show exactly which topics need a focused push"],
          ["March-May", "MP Board/CBSE finals; DP and Cambridge May-June series", "Heaviest exam load; sessions shift to past papers and exam technique"],
        ],
      },
      bullets: [
        "April-March academic year, exam calendars layered on top",
        "Navratri and Diwali sit close to Cambridge's October-November series",
        "January mocks flag the topics worth focused revision",
        "March-May is the city's heaviest exam period across all boards",
      ],
    },
    {
      heading: "From Indore to university: IB and IGCSE pathways, CUET and JEE/NEET eligibility",
      paragraphs: [
        "IB Diploma results are recognised for Indian university admission once the Association of Indian Universities issues an equivalence certificate, comparing DP subject grades to the percentage bands Indian institutions ask for. Families applying to Indian universities from an IB or IGCSE background in Indore should build time for this equivalence step into their admissions planning, since it takes longer than a straightforward CBSE marksheet.",
        "For Indian universities using the Common University Entrance Test, IB and IGCSE students sit CUET-UG on the same footing as board students, so subject choice at DP level should account for which CUET domain subjects a target course expects. This is a common gap tutors help close, because school counsellors are not always across CUET's specific subject-matching rules.",
        "JEE and NEET eligibility depends on having studied Physics, Chemistry and Mathematics, or Physics, Chemistry and Biology, to the right level, which is available within DP HL and SL combinations and within Cambridge Extended-tier sciences. Many Indore DP and IGCSE science students already run a parallel JEE or NEET coaching track, and tutoring plans need to respect that timetable rather than compete with it.",
        "Students planning to study abroad from Daly College, Emerald Heights or Choithram typically apply on predicted grades submitted during Grade 12, which makes the Grade 11 and early Grade 12 internal exams the real target for tutoring, ahead of the final May results.",
      ],
      bullets: [
        "AIU equivalence is needed for Indian university admission from the DP",
        "CUET-UG subject matching needs planning at the DP subject-choice stage",
        "JEE/NEET eligibility needs the right science and maths combination",
        "Study-abroad applications run on predicted grades from Grade 11-12",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the sciences: what Indore tutoring should target",
      paragraphs: [
        "Maths Analysis and Approaches suits students heading towards engineering or the physical sciences, and it is the subject where Indore's overlap with JEE-style problem solving helps most: proof, calculus and Paper 3 investigative work reward the same rigorous habits JEE coaching builds, though the exam format is different enough that dedicated IB practice still matters. Applications and Interpretation suits students planning economics, business or social science degrees, with statistics and modelling at its core rather than pure calculus.",
        "In Physics and Chemistry, HL students in Indore most often need help with Paper 2's extended-response questions and the Scientific Investigation, where a workable, defensible method matters more than an ambitious one. Many students preparing simultaneously for NEET or JEE find the conceptual overlap useful but need separate coaching for IB's data-booklet conventions and command-term expectations, which differ from competitive-exam question styles.",
        "Biology students benefit from early, steady work on extended-response command terms and IA statistics, both of which are usually the actual reason a strong content grasp does not translate into a strong DP grade. Economics HL students need consistent diagram practice and Paper 3's quantitative questions, which reward technique that only builds up with repetition.",
      ],
      bullets: [
        "Maths AA suits JEE-aligned, calculus-heavy students",
        "Maths AI suits statistics and modelling-focused students",
        "IB command terms and data-booklet use differ from JEE/NEET style",
        "IA statistics and diagram technique are the most common gaps",
      ],
    },
    {
      heading: "Should Indore students choose Core or Extended IGCSE?",
      paragraphs: [
        "Extended tier gives access to the full grade range and is the right choice for any Indore student who might later apply to the IB Diploma or Cambridge A Level, since Core tier caps the achievable grade and closes doors a family may not yet know they want open. Core tier suits a student who genuinely needs a slower pace to build confidence, but the decision should be revisited each year rather than fixed once in Grade 9.",
        "For Cambridge Mathematics 0580, moving to Extended keeps Additional Mathematics 0606 available afterwards, which is the strongest single bridge into IB Maths AA HL. The same logic applies to the sciences: Extended-tier Physics, Chemistry and Biology at Daly College or Emerald Heights make DP HL sciences far less of a jump in Grade 11.",
        "Subject choice at IGCSE also has a practical Indore angle: a student planning to sit JEE or NEET after Grade 12 needs Extended-tier or equivalent depth in Physics, Chemistry and Mathematics regardless of which board they finish on, so the tier decision made in Grade 9 quietly shapes options years later.",
      ],
      bullets: [
        "Extended tier keeps DP and A Level options open",
        "Core tier caps the achievable grade",
        "Additional Mathematics 0606 is the best bridge to Maths AA HL",
        "Tier choice affects JEE/NEET readiness too, not just IB entry",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP, DP and Cambridge or Edexcel IGCSE for Indore families online. Every match weighs the exact syllabus and level, the exam session your child is preparing for, and the school calendar they follow at Choithram, Emerald Heights, Daly College or elsewhere.",

  process: [
    { title: "Tell us the programme and subject", description: "Share the board, subject and level, your child's current grade and which Indore school or exam session applies." },
    { title: "Receive a shortlist", description: "We match tutors on syllabus and level fit first, then on availability at times that suit your evenings." },
    { title: "Take a free trial class", description: "Your child works through a real topic online with the tutor, at no charge and no obligation." },
    { title: "Approve the first-month plan", description: "The tutor sets out topics and session rhythm; you approve it or ask for changes before regular sessions begin." },
    { title: "Review every few weeks", description: "We check progress against school assessments and exam dates, and re-match if the fit is not right." },
  ],

  whyPoints: [
    { title: "Exact-syllabus matching", description: "Tutors are matched to the precise IB subject and level or IGCSE board, code and tier your child studies, not a general label." },
    { title: "Built around Indore's school calendars", description: "We track Choithram, Emerald Heights and Daly College's own assessment and coursework timelines, not a generic academic year." },
    { title: "Honest about format", description: "Sessions in Indore are fully online; we say so plainly instead of implying a home visit that does not happen here." },
    { title: "Free trial before commitment", description: "You and your child judge a real session before agreeing to anything ongoing." },
    { title: "Academic integrity respected", description: "Tutors guide IAs, coursework and the Extended Essay but never write assessed work." },
    { title: "No long contracts", description: "Pause, adjust or stop sessions as your child's coaching and exam calendar changes." },
  ],

  faqs: [
    {
      question: "Are there IB tutors in Indore who teach online?",
      answer:
        "Yes, all IB Gram tutoring for Indore families runs online, matched to the exact IB programme, subject and level your child studies. We do not offer home visits in Indore; in-person home tuition currently runs only in Gurugram and parts of Delhi NCR. Sessions are live, one-to-one video lessons with a shared screen, and every match starts with a free trial class so you can judge the fit before committing.",
    },
    {
      question: "Do you provide IGCSE tutors in Indore for Cambridge and Edexcel?",
      answer:
        "Yes, we match tutors for both Cambridge and Pearson Edexcel IGCSE. Cambridge students are matched by syllabus code and tier, such as Mathematics 0580 Extended or Chemistry 0620 Core, and Edexcel students by specification and Foundation or Higher tier. Since Daly College and Emerald Heights both follow Cambridge, most Indore requests are for that board, but Edexcel specialists are available too.",
    },
    {
      question: "Do tutors visit homes in Indore?",
      answer:
        "No, tutors do not visit homes in Indore. In-person home tuition exists only in Gurugram and parts of Delhi NCR. What we offer in Indore is online one-to-one tuition, live private lessons your child takes at home on a laptop, matched to their exact syllabus. Many families find this works well because it removes local supply limits and gives access to specialists anywhere in India.",
    },
    {
      question: "Which schools in Indore offer IB or IGCSE?",
      answer:
        "Choithram International School offers the IB Primary Years, Middle Years and Diploma Programmes plus Cambridge IGCSE. The Emerald Heights International School offers the IB Diploma Programme and Cambridge IGCSE. Daly College offers Cambridge IGCSE through to A Level but does not run the IB. These are the three Indore schools we can confirm; every other major school in the city follows MP Board, CBSE or ICSE.",
    },
    {
      question: "What does an IB or IGCSE tutor in Indore cost?",
      answer:
        "The fee depends on the programme and level, the subject, session length and the tutor's experience with that exact syllabus, and we confirm it in writing for your specific match before the trial. IB Diploma HL subjects and Cambridge Extended-tier sciences usually cost more than MYP or Core-tier support. Because sessions are online, there is no travel cost added, and there are no long contracts.",
    },
    {
      question: "Is there a free trial class before I commit?",
      answer:
        "Yes, every match starts with a free trial class at no charge and no obligation to continue. Your child works through a real topic from their syllabus with the tutor over video, and afterwards the tutor shares a short first-month plan. You then decide whether to continue, ask for a different approach, or try another tutor.",
    },
    {
      question: "Can a tutor help with IB Internal Assessments and the Extended Essay?",
      answer:
        "Yes, but only by guiding the process, never by writing it. A tutor can help choose a workable research question, explain what each assessment criterion rewards, plan how to collect data and give critical feedback on drafts. Writing or rewriting an IA, the Extended Essay or a TOK essay breaches the IB's academic integrity rules and can cost a student the Diploma, so this line is never crossed.",
    },
    {
      question: "Which IB Diploma subjects can you help with in Indore?",
      answer:
        "We match tutors for all the major IB Diploma subject groups: Maths Analysis and Approaches and Applications and Interpretation at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology and Environmental Systems and Societies, along with Theory of Knowledge and the Extended Essay. Hindi B is also available for students moving between languages of instruction.",
    },
    {
      question: "Do you tutor IB MYP and PYP students, not only DP?",
      answer:
        "Yes, we tutor across the whole IB continuum from Choithram's PYP through to Grade 12 DP students. MYP support focuses on criteria A-D across sciences, maths and Language and Literature, plus the Personal Project journal in MYP 5. PYP support covers reading fluency, number sense and Exhibition research skills for younger students, usually in short, regular sessions.",
    },
    {
      question: "How does online IGCSE or IB tutoring compare to Indore's coaching centres?",
      answer:
        "Indore's coaching centres are built around MP Board, CBSE, JEE and NEET, not IB or Cambridge assessment criteria, so they rarely have the depth an IB or IGCSE student needs. Online one-to-one tutoring gives access to a specialist who already knows the exact syllabus and mark scheme, wherever in India they are based, which matters in a city where local IB and IGCSE-experienced tutors are genuinely scarce.",
    },
    {
      question: "When should my child start IB or IGCSE tutoring in Indore?",
      answer:
        "The best time is at the start of the course: Grade 11 for the IB Diploma and Grade 9 for IGCSE, which leaves time to build strong habits before internal assessments and predicted grades are set. Families who start closer to exams can still make real progress, but the plan shifts towards the highest-value topics and past papers rather than full syllabus coverage.",
    },
    {
      question: "My child is switching from MP Board or CBSE to IGCSE or IB. Can a tutor help?",
      answer:
        "Yes, board switches are common among Indore families considering Choithram, Emerald Heights or Daly College. The content gap is usually smaller than families expect; the real adjustment is in how questions are asked and marked, since IGCSE and IB reward explanation and application over recall. A tutor familiar with both systems can build those habits quickly, ideally in the summer before the switch.",
    },
    {
      question: "Does IB or IGCSE affect JEE or NEET eligibility for Indore students?",
      answer:
        "No, as long as the right subjects are studied to the right level. JEE eligibility needs Physics, Chemistry and Mathematics, and NEET needs Physics, Chemistry and Biology, both achievable within DP HL and SL combinations or Cambridge Extended-tier sciences. Many Indore DP and IGCSE students run a parallel JEE or NEET coaching track, and we plan tutoring sessions around that timetable rather than against it.",
    },
    {
      question: "Can sessions run around Indore's coaching-class and school timetable?",
      answer:
        "Yes, most Indore families book sessions on weekday evenings after school and coaching, or on weekend mornings. Since everything runs online, there is no travel time to plan around, which makes it easier to fit a session between a coaching class and dinner, or to add a second weekly slot before mocks without worrying about a tutor's commute.",
    },
    {
      question: "What happens if the tutor is not the right fit?",
      answer:
        "Tell us and we will find another tutor. We review progress with families every few weeks and re-match whenever the fit is not working, rather than asking a child to persist with a tutor who is not helping. There are no long contracts, so you can also pause or stop sessions without penalty at any point.",
    },
    {
      question: "Is IB Gram affiliated with Choithram, Emerald Heights or Daly College?",
      answer:
        "No, IB Gram is an independent tutoring platform and is not affiliated with, endorsed by or representing any Indore school, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. Schools are named on this page only to describe the syllabuses Indore families actually study, and tutors work to each school's own calendar and the relevant board's published syllabus.",
    },
  ],

  internalLinks: [
    { label: "IB tutors in Indore", href: "/ib-tutors/indore/", description: "Programme and subject pages for IB tutoring in Indore." },
    { label: "IGCSE tutors in Indore", href: "/igcse-tutors/indore/", description: "Cambridge and Edexcel IGCSE tutor matching for Indore students." },
    { label: "IGCSE in Indore", href: "/igcse-pages/indore/", description: "How IGCSE tutoring works for Indore families." },
    { label: "India hub", href: "/india/", description: "IB and IGCSE tutoring across Indian cities." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB programme and subject tutoring across India." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP works: HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, the Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP units of inquiry and the Exhibition." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial class." },
    { label: "IB and IGCSE tutoring in Bhopal", href: "/bhopal/", description: "The same online tutoring model for Madhya Pradesh's capital." },
    { label: "IB and IGCSE tutoring in Jabalpur", href: "/jabalpur/", description: "Online IB and IGCSE tutor matching for Jabalpur families." },
    { label: "IB and IGCSE tutoring in Gwalior", href: "/gwalior/", description: "Online IB and IGCSE tutor matching for Gwalior families." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor for your Indore student",
  closingBody:
    "Tell us the programme or board, the subject and level, your child's current grade and which Indore school they attend. You will get back a shortlisted tutor, their teaching background and trial slots that fit your evenings, entirely online, with no charge and no commitment. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",
};
