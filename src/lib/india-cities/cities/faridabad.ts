import type { CitySeoPage } from "../types";

/**
 * Faridabad schools shown in the sliding strip. Only schools confirmed to run the IB and/or
 * Cambridge or Pearson Edexcel IGCSE. Add a name only once it can be verified.
 */
export const faridabadIbIgcseSchools = [
  "Manav Rachna International School, Sector 14",
  "Sancta Maria International School",
  "Shiv Nadar School, Faridabad",
  "Delhi Public School, Faridabad",
] as const;

export const faridabad: CitySeoPage = {
  slug: "faridabad",
  countryName: "Faridabad",
  countryNameLong: "Faridabad, Haryana",
  demonym: "Faridabad",
  flagCode: "in",
  countryCode: "IN",
  state: "Haryana",
  stateCode: "IN-HR",
  region: "National Capital Region, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evening slots after school and weekend mornings, built around NH-19 and Delhi border traffic",
  lastUpdated: "2026-09-21",
  geo: { latitude: 28.4089, longitude: 77.3178 },
  wikipedia: "https://en.wikipedia.org/wiki/Faridabad",
  stripSchools: [
    "Manav Rachna International School, Sector 14",
    "Sancta Maria International School",
    "Shiv Nadar School, Faridabad",
    "Delhi Public School, Faridabad",
  ],

  title: "IB and IGCSE Tutors in Faridabad | Home & Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Faridabad: DP, MYP, PYP, Cambridge or Edexcel IGCSE, at home where a tutor covers your area, online or hybrid, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition in Faridabad",
  heroEyebrow: "IB & IGCSE TUTORS FOR FARIDABAD FAMILIES",
  heroSubtitle:
    "Whether your child studies at a Sector 14 IB school or a Greater Faridabad IGCSE campus, we shortlist a tutor who has actually taught that exact subject and level. Lessons run at home where a tutor covers your part of Faridabad, online everywhere else, or a mix of both, and every match begins with a free trial before you pay anything.",
  primaryKeyword: "IB and IGCSE tutors in Faridabad",
  imageAltText: "IB tutor reviewing an Extended Essay draft with a student in Faridabad, Haryana",
  secondaryKeywords: [
    "IB tutor Faridabad",
    "IGCSE tutor Faridabad",
    "IB home tuition Faridabad",
    "IGCSE home tuition Faridabad",
    "IB private tuition Faridabad",
    "IB Maths tutor Faridabad",
    "IGCSE Maths tutor Faridabad",
    "IB Physics tutor Faridabad",
    "IB Chemistry tutor Faridabad",
    "IB Biology tutor Faridabad",
    "IB DP tutor Faridabad",
    "IB MYP tutor Faridabad",
    "IB PYP tutor Faridabad",
    "IGCSE online tuition Faridabad",
    "IB tutor Sector 14 Faridabad",
    "IGCSE tutor Greater Faridabad",
    "IB tutor NIT Faridabad",
    "online IB tutor Faridabad",
    "IB tutor Ballabgarh",
    "Cambridge IGCSE tutor Faridabad",
    "IB Economics tutor Faridabad",
    "IB tutor Surajkund Road",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact IB level or IGCSE board and tier",
    "Home tuition where a tutor covers your Faridabad sector, plus online and hybrid",
    "Free trial lesson before you commit to anything",
    "Independent platform, not tied to any Faridabad school or board",
  ],
  heroStats: [
    { value: "PYP · MYP · DP", label: "IB programmes covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards covered" },
    { value: "Home · Online · Hybrid", label: "Lesson formats in Faridabad" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition looks like for a Faridabad family",
    paragraphs: [
      "A subject specialist working through your child's exact syllabus, one to one, is what IB and IGCSE tuition should mean in Faridabad rather than a tutor generally comfortable with 'IB' or 'international curriculum'. For a Diploma student that is a named course at Higher or Standard Level; for an IGCSE student it is the precise Cambridge or Pearson Edexcel code their school has entered them for, marked to that board's own criteria.",
      "Faridabad's IB and IGCSE schools are still a small, distinct group compared with neighbouring Gurugram: Manav Rachna International School in Sector 14 was the city's first IB continuum campus, Sancta Maria International School runs both IB and Cambridge IGCSE from Greater Faridabad's Sector 93, and Shiv Nadar School's Faridabad campus has added IB Diploma authorisation on top of its established Cambridge IGCSE results. Families choosing these schools tend to work in Delhi or along the Faridabad-Gurgaon-Delhi triangle and want a curriculum that keeps university options open across India and abroad.",
      "Because Faridabad sits inside the National Capital Region, home tuition is genuinely available here, not only online. Where a tutor is realistically placed to reach your sector on a weekday evening, we book home sessions; where the right subject specialist is based elsewhere in the NCR, we say so honestly and offer online or hybrid sessions with that same tutor instead of a weaker local match.",
      "No school named here has any tie to IB Gram: it runs as its own tutoring service, separate from the International Baccalaureate Organization, Cambridge Assessment International Education and Pearson Edexcel. Our tutors sit alongside a student through an IA, an Extended Essay or a piece of IGCSE coursework; the writing itself stays entirely theirs.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP tutors across the major subject groups",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended tiers",
      "Home sessions where a tutor can reach you, online everywhere else",
      "Free trial lesson and a written note after every session",
    ],
  },

  programmesIntro:
    "Faridabad families switch boards at roughly the same points as the rest of the NCR: Haryana Board or CBSE into Cambridge IGCSE around Grade 9, or IGCSE into the IB Diploma at Grade 11. Below is what tutoring should actually focus on at each stage for a Faridabad student.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-12",
      description:
        "Learning organised around units of inquiry rather than a fixed textbook, with a culminating Exhibition in the final year. There are no external exams, so support is about reading, writing and the research habits the Exhibition needs.",
      countryNote:
        "Faridabad PYP families most often ask for help with reading fluency and structured writing, since many are moving a younger child across from a CBSE-pattern nursery school.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to 10, ages 11-16",
      description:
        "Assessment against criteria A to D in every subject, a Personal Project in MYP 5, and in some schools an eAssessment component layered on top of internal grading.",
      countryNote:
        "Students here tend to need the most help turning a science criterion B or C investigation into a properly structured write-up rather than a descriptive account.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, alongside Theory of Knowledge, the Extended Essay and Internal Assessments carrying roughly a fifth to a third of most subject grades. Final exams sit in May, with November as the retake window.",
      countryNote:
        "Most Faridabad DP requests are for Maths AA or AI at HL, Physics, Chemistry, Economics and English A, usually from Grade 11 onward, with a second weekly slot common once mocks approach.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller set of DP courses paired with a career-related study, the reflective project and personal and professional skills.",
      countryNote:
        "CP is not widely run in Faridabad yet, so support here usually means the embedded DP subjects rather than the vocational component itself.",
    },
  ],

  subjectsIntro:
    "Good IB tutoring in Faridabad is specific to the course, not the label 'IB'. Maths Analysis and Approaches HL needs a different tutor from Applications and Interpretation SL, and a strong English A tutor is not automatically right for the Individual Oral. We match on the exact subject and level, then confirm whether a home session on your side of Faridabad is realistic or whether online suits better.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Proof, calculus and the Paper 3 problem-solving style HL students find hardest, alongside the maths exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and GDC fluency, with an exploration built around data the student can actually collect." },
    { name: "IB Physics", levels: "HL / SL", description: "The full theme sequence, exam-paper technique and a scientific investigation with a genuinely testable method." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, bonding and organic mechanisms, data-booklet fluency and the investigation write-up." },
    { name: "IB Biology", levels: "HL / SL", description: "Continuity and change across the syllabus, command-term precision and IA statistical treatment." },
    { name: "IB Economics", levels: "HL / SL", description: "Accurate micro and macro diagrams, Paper 3 policy questions for HL and the three internal commentaries." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying frameworks to an unfamiliar case and building the Business Research Project around a real organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen analysis for Paper 1, comparative work for Paper 2, and preparation for the Individual Oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode, object orientation and networks, plus the IA product and its documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "The biological, cognitive and sociocultural approaches, correctly cited studies and extended-response structure." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Systems thinking and evaluative writing that moves past description into judgement." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study depth, fieldwork methodology for the IA and the evaluation Paper 2 rewards." },
    { name: "IB History", levels: "HL / SL", description: "Source-based analysis for Paper 1 and sustained essay argument for Papers 2 and 3." },
    { name: "IB Hindi B and French B", levels: "HL / SL", description: "Text-type conventions, receptive-skills practice and rehearsal for the individual oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Shaping the exhibition commentary and a prescribed-title essay the student can genuinely argue." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Narrowing a research question early and holding reflection sessions to schedule. Guidance only, never written for the student." },
    { name: "IB MYP Sciences & Maths", levels: "MYP 1-5", description: "Investigation design for criteria B and C, building the depth DP HL sciences later assume." },
    { name: "IB MYP Individuals and Societies & Personal Project", levels: "MYP 1-5", description: "Source-based criterion A analysis and a Personal Project journal kept current through the year." },
  ],

  igcseSubjectsIntro:
    "IGCSE preparation in Faridabad needs to start from the board, code and tier, since Cambridge 0580 Extended and Edexcel 4MA1 Higher test the same content in different question formats. We match on board, code, tier and exam series, Cambridge in May-June or October-November, Edexcel in January or May-June, and on whether the student is heading into the IB Diploma afterwards.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended-tier paper technique and the non-calculator accuracy that costs marks under time pressure." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus foundations, trigonometric identities and the strongest bridge into IB Maths AA HL." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Higher-tier problem solving and the ways Edexcel question phrasing differs from Cambridge." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation rearrangement, electricity and waves, with alternative-to-practical technique." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, bonding and organic chemistry, plus the written alternative-to-practical paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, inheritance and extended-response structure at the top grade boundaries." },
    { name: "IGCSE Combined & Coordinated Sciences", levels: "0653 / 0654", description: "Keeping three sciences on schedule together without one falling behind the others." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagram accuracy and the evaluative writing examiners reward in the longer answers." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying theory to the case-study business rather than a memorised definition." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables and Python programming for the problem-solving component." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary skills and close reading of unseen texts." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing and the separately marked speaking component, drilled in turn." },
  ],

  regionsTitle: "Faridabad sectors and areas where our tutors travel",
  regionsIntro:
    "Faridabad stretches from the Delhi border down NH-19 to Ballabgarh, and where a family lives decides which tutors can genuinely reach them on a weekday evening. We plan home sessions around the actual sector and road network rather than a straight-line distance, and use online or hybrid wherever travel would make a weekly slot unreliable.",
  regions: [
    { name: "Sector 14 and Sector 15", note: "Central institutional belt near Manav Rachna International School; well served by tutors based across old Faridabad." },
    { name: "Sector 16 and 21", note: "Established residential sectors close to NIT Faridabad, with steady IGCSE and CBSE-to-IB demand." },
    { name: "NIT Faridabad", note: "Older planned township with a large tutoring-seeking population and reasonable evening travel access." },
    { name: "Old Faridabad", note: "Original town centre near the railway line, further from Greater Faridabad's newer schools." },
    { name: "Ballabgarh", note: "Southern Faridabad, a longer commute from Sector 14 and Sector 93 schools; online or hybrid often suits better." },
    { name: "Greater Faridabad (Sector 75-89)", note: "Newer residential sectors along the Faridabad-Noida-Ghaziabad corridor, with growing IB and IGCSE demand." },
    { name: "Sector 93 and Sector 91", note: "Home to Sancta Maria International School; families here often want a tutor who already knows the school's assessment pattern." },
    { name: "Surajkund and Anangpur", note: "Faridabad's border with Delhi and Gurugram; convenient for tutors covering the wider southern NCR." },
    { name: "Badkhal and Neelam Bata Road", note: "Central commercial and residential stretch with mixed CBSE and IGCSE households." },
    { name: "Sector 21 to Sector 28 (near Badarpur border)", note: "Closest sectors to Delhi, useful for tutors who commute from South Delhi." },
    { name: "YMCA Chowk and Sector 12 area", note: "Central Faridabad crossing point, reasonably central for evening scheduling across the city." },
  ],

  schoolDisclaimer:
    "IB Gram works independently of every school on this page. Names appear only so Faridabad families can see the local school landscape; none of them, nor the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel, endorses, partners with or is affiliated with IB Gram.",
  schoolClusters: [
    {
      city: "Sector 14 and central Faridabad",
      note: "Home to the city's first IB continuum school, this belt has the longest-running IB demand in Faridabad.",
      schools: ["Manav Rachna International School, Sector 14"],
    },
    {
      city: "Greater Faridabad (Sector 93 and neighbouring sectors)",
      note: "A newer, fast-growing belt where two schools run IB and Cambridge IGCSE side by side.",
      schools: ["Sancta Maria International School", "Shiv Nadar School, Faridabad"],
    },
    {
      city: "NIT Faridabad and the Delhi border sectors",
      note: "Families here often study at a Cambridge-curriculum micro-school or commute a short distance for the nearest IB campus.",
      schools: ["Delhi Public School, Faridabad"],
    },
  ],

  modesIntro:
    "Faridabad families generally settle on one of three formats, and the right one depends on the subject, the sector and how far a tutor genuinely has to travel down NH-19 or across to Greater Faridabad. Home tuition suits younger students and handwritten science work. Online suits HL specialists who cannot reach every sector on a weeknight. Hybrid combines both through the exam year.",
  modes: [
    {
      title: "Home tuition in your sector",
      description:
        "A tutor comes to your home in Faridabad at a fixed weekly slot, where travel is realistic on a school night.",
      bullets: [
        "Matched to tutors who can reach your sector reliably",
        "Works well for PYP, MYP and IGCSE maths and sciences",
        "Parents can sit in on early sessions",
        "Travel confirmed before any slot is booked",
      ],
    },
    {
      title: "Online IB and IGCSE tutoring",
      description:
        "Live one-to-one lessons over video with a shared screen and saved notes, opening up subject specialists across the wider NCR.",
      bullets: [
        "Access to HL and niche-subject tutors beyond Faridabad alone",
        "No NH-19 or Badarpur border traffic affecting either side",
        "Screen-shared past papers and GDC work",
        "Simple to add a second slot before mocks",
      ],
    },
    {
      title: "Hybrid: home and online together",
      description:
        "One home session a week plus one online session, with the same tutor throughout, common for Diploma and IGCSE students in their exam year.",
      bullets: [
        "In-person for handwritten problem solving",
        "Online for past papers and IA check-ins",
        "Keeps continuity through school breaks and traffic weeks",
        "Balance can shift as deadlines approach",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE families and schools in Faridabad",
      paragraphs: [
        "Faridabad's international-curriculum schools are a small but growing group compared with Gurugram's, concentrated in two belts: Sector 14 in central Faridabad, where Manav Rachna International School has run the IB continuum since it opened, and Greater Faridabad's Sector 93 area, where Sancta Maria International School and Shiv Nadar School both offer IB and Cambridge IGCSE. A newer Cambridge-curriculum micro-school at Delhi Public School Faridabad adds a third option for families wanting an international pathway without a full switch of schools.",
        "Families choosing these schools tend to commute toward Delhi or work along the Faridabad-Gurugram corridor, and often want a curriculum that keeps both Indian and overseas university routes open. A second group moves a child from Haryana Board or CBSE into IGCSE around Grade 9, usually ahead of a planned move into the Diploma at a Faridabad or nearby NCR school.",
        "Because the number of confirmed IB and IGCSE schools in Faridabad is still small, some families also look toward Delhi or Gurugram for a wider choice of Diploma subjects, while keeping tutoring local. IB Gram works with both groups: students at a Faridabad school and students commuting or boarding elsewhere in the NCR whose family lives in Faridabad.",
        "Whichever path brought a family here, the tutoring need is usually the same at first: adjusting to a mark scheme that rewards explanation and evaluation rather than recall, which is the biggest shift most Haryana Board or CBSE switchers face.",
      ],
    },
    {
      heading: "How does Haryana Board or CBSE compare with IB and IGCSE for a Faridabad student?",
      paragraphs: [
        "Haryana Board and CBSE run on a fixed syllabus with heavy weighting on a single final exam; IB and IGCSE instead weight internal assessment, coursework and evaluative writing much more heavily, and let a student specialise through subject and level choice from an earlier stage. Neither is inherently harder to teach; they simply reward different skills.",
        "For a Faridabad family choosing between systems, the practical question is usually what comes next. Haryana Board and CBSE map directly onto Indian entrance routes such as JEE and NEET. IB and IGCSE keep both Indian and international university applications open, through an AIU equivalence certificate and CUET-UG for Indian entry, and through predicted grades for applications abroad.",
        "The tutoring implication follows from that split: a Haryana Board or CBSE tutor typically drills past-paper recall and problem sets, while an IB or IGCSE tutor spends more time teaching how to structure an evaluative answer or plan a piece of assessed coursework, since that is where most of the available marks sit.",
      ],
      table: {
        caption: "Comparing boards for a Faridabad family",
        columns: ["Aspect", "Haryana Board / CBSE", "IB (PYP-DP)", "Cambridge / Edexcel IGCSE"],
        rows: [
          ["Assessment weight", "Mostly a single final exam", "Exams plus 20-30% internal assessment", "Exams plus coursework in some subjects"],
          ["Subject flexibility", "Fixed syllabus by class", "6 DP subjects, HL/SL split", "Choice of subjects and Core/Extended tier"],
          ["Entrance-exam fit", "Direct fit for JEE and NEET", "Needs CUET-UG or AIU equivalence route", "Clear IGCSE-to-DP or A Level progression"],
          ["Study-abroad fit", "Possible, with extra documentation", "Widely recognised by overseas universities", "Widely recognised, often paired with the DP"],
        ],
      },
    },
    {
      heading: "What does an IB or IGCSE tutor cost in Faridabad, and what sets the fee?",
      paragraphs: [
        "Three things move the price up or down more than anything else: which level the subject sits at, how long each session runs, and whether a tutor is travelling to your sector or teaching over video. A Diploma HL specialist in Physics or Maths AA sits at the top of the range simply because fewer tutors teach that content well; MYP and IGCSE Core work generally costs less.",
        "We tell you the actual number for your child's match before the trial lesson runs, not after. There is no separate registration charge, no annual membership and nothing added once the sessions begin. Judging a tutor on the hourly rate alone misses the point, though: a specialist who already knows the IGCSE 0620 alternative-to-practical format saves a family more time than a cheaper generalist working from the textbook.",
        "Because travel down NH-19 or across to Greater Faridabad adds time on top of the lesson itself, home visits usually cost a little more than an online slot with the same tutor. A number of Faridabad households solve this by keeping one weekly home session for maths or science working and moving a second subject entirely online.",
        "Nothing here is sold as a package or a term-long contract. You keep the arrangement reviewed every few weeks, and either side can end it without a penalty clause to work around.",
      ],
    },
    {
      heading: "Home tutor, coaching centre, online lessons or self-study: what actually helps in Faridabad?",
      paragraphs: [
        "Ask any parent in Faridabad about tuition and the first names that come up are coaching institutes built for Haryana Board, CBSE, JEE and NEET, and almost none of them run programmes designed around IB or IGCSE's coursework and internal-assessment structure. Sitting a Diploma student through a batch class meant for board-exam drilling wastes the hour: what that student actually needs is someone reading their Extended Essay draft.",
        "A tutor picked for the exact subject solves that mismatch, whether the session happens on the doorstep or on a screen. Self-study still has its place, mostly for a confident student revisiting a topic they have already mastered once, but it rarely carries a student through unfamiliar command words or a rubric they have not seen before.",
        "Faridabad's spot inside the NCR means home visits stay genuinely on the table here in a way they are not for every city IB Gram serves elsewhere in India. That said, if the one tutor who fits a child's exact syllabus lives too far to reach reliably on a weeknight, online keeps that same match intact rather than settling for whoever happens to live nearby.",
        "How much support a family actually needs shifts with the calendar: heavy, weekly involvement close to Diploma finals, and often just a short fortnightly check-in for a Grade 9 student who has only just started IGCSE.",
      ],
      table: {
        caption: "Comparing tutoring options for Faridabad IB and IGCSE students",
        columns: ["Option", "Best for", "Main limitation in Faridabad"],
        rows: [
          ["Home tutor", "Younger students, handwritten science and maths work", "Only realistic where a tutor can reach your sector"],
          ["Online tutor", "HL specialists, niche subjects, exam revision", "Needs a reliable connection and a quiet study space"],
          ["Local coaching centre", "Haryana Board, CBSE, JEE or NEET preparation", "Not built for IB/IGCSE coursework or evaluation style"],
          ["Self-study with past papers", "Revising already-understood material", "Weak for new topics or IA and coursework structure"],
        ],
      },
    },
    {
      heading: "The Faridabad school year: exams, winter fog and festivals",
      paragraphs: [
        "Most Faridabad international-curriculum schools run an academic year from around April to March, while external exams follow the boards' own fixed calendars. IB Diploma finals sit in May, with November as the smaller retake session; Cambridge IGCSE sits in May-June and October-November; Edexcel IGCSE sits in January and May-June. Tutoring plans should be built backward from those dates rather than around the school term alone.",
        "Faridabad shares Delhi's winter air-quality and fog problems, which regularly shorten or disrupt school weeks in November and December, sometimes overlapping with Cambridge's October-November session and the run-up to Diploma mock exams. Families planning that stretch should build in some flexibility rather than assuming every scheduled session will run as planned.",
        "Diwali in October and Holi in March are the two festival breaks most schools observe, and the monsoon from late June through September brings the usual waterlogging on NH-19 and other arterial roads that can affect evening home-tuition timing on the worst days.",
        "Grade 11 in April and Grade 9 at the same point of the year are the natural start dates for new tutoring, giving students a full run at Internal Assessments and tier decisions before deadlines and mocks arrive.",
      ],
      table: {
        caption: "Faridabad's exam and calendar year at a glance",
        columns: ["Period", "What happens", "Effect on tutoring"],
        rows: [
          ["April", "New academic year begins", "Best time to start Grade 9 or Grade 11 tutoring"],
          ["October-November", "Diwali; Cambridge IGCSE series; winter fog begins", "Build in slack for possible school and travel disruption"],
          ["January", "Edexcel IGCSE session; post-fog term restart", "Good checkpoint to review the year's progress"],
          ["May", "IB Diploma finals; Cambridge/Edexcel May-June series", "Final run of past papers and mock feedback"],
        ],
      },
    },
    {
      heading: "University pathways from Faridabad after IB or IGCSE",
      paragraphs: [
        "Look at where a Faridabad DP graduate's applications actually go and you find several routes running in parallel: JEE for an engineering seat, NEET for medicine, CUET-UG straight into an Indian university, and for a good number of families, an application abroad to the UK, US, Canada or continental Europe. Manav Rachna University sits inside Faridabad itself, and YMCA University of Science and Technology is a short drive away, so both come up often alongside Delhi University in family conversations about where a Diploma leads.",
        "Getting NEET or JEE eligibility right as an IB or IGCSE student is a content question first: the syllabus has to cover Physics, Chemistry, Maths or Biology to the depth those exams assume, which is exactly why so many Faridabad DP science students run coaching for one and Diploma classes for the other in the same term rather than treating them as sequential. Spotting a gap here in Grade 11 rather than Grade 12 saves a great deal of stress later.",
        "An Indian university that will not read IB or IGCSE results directly can usually be satisfied with an Association of Indian Universities equivalence certificate, and CUET-UG has become the standard door into most central and many state institutions. Overseas applications work on a different clock entirely, built around predicted grades issued well before the May exam season, which is why Grade 11 performance matters as much as the final result.",
        "Where IB Gram tutors add value is narrower than all of this: subject depth, technique and predicted-grade improvement, plus honesty about what a specific subject and level combination is likely to satisfy for a family's target course.",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the sciences, for Faridabad students",
      paragraphs: [
        "For a Faridabad student stacking engineering ambitions or a science-heavy Diploma against a JEE or NEET timetable, Analysis and Approaches is the calculus-and-proof route those exams already assume, which is why so many make that choice by default. Applications and Interpretation instead rewards a student drawn to statistics and modelling, and the exploration for it tends to go more smoothly when it is built on data the student has actually gone out and collected.",
        "All three HL sciences, Physics, Chemistry and Biology, share a written paper that punishes shallow revision and demand an investigation whose method survives a second look. Most Faridabad students arrive at these subjects with the content already reasonably solid, thanks to parallel entrance-exam coaching; the missing piece a subject tutor usually supplies is IB-specific paper technique and the level of write-up the assessment criteria expect.",
        "One habit shows up again and again among HL students here: strong recall paired with a shaky read of command terms, so an 'explain' answer comes out reading like a bare definition, or a data set gets described rather than actually evaluated. It is also one of the quickest things to correct once a tutor points it out directly.",
        "Beginning this kind of tutoring at the start of Grade 11, well before Grade 12 mocks arrive, leaves enough runway to fix these habits before they show up in a predicted grade rather than after.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: which tier fits a Faridabad student?",
      paragraphs: [
        "Core tier is the right call for a student who wants a solid pass and has no plan to sit HL maths or science at Diploma level afterwards. Extended opens every grade band above that ceiling, and for practically any Faridabad family with an eye on the Diploma, it is worth the extra stretch, since Core simply cannot reach the grade most HL entry points assume.",
        "Cambridge dominates the IGCSE landscape among Faridabad's schools, so Mathematics 0580, Physics 0625, Chemistry 0620 and Biology 0610 account for most tutoring requests we see. Edexcel shows up in fewer local classrooms, and a tutor working on it needs to know its distinct question style, which trips students up if they only practise on Cambridge-style papers.",
        "Additional Mathematics 0606 is worth flagging on its own: nothing else at IGCSE level predicts comfort with Diploma-level calculus as reliably, so a family aiming at Maths AA HL two years out should treat it as close to compulsory even where the school lists it as an elective.",
        "Combined or Coordinated Sciences gives breadth across three subjects without single-subject depth, which suits a student undecided on Diploma science choices, but it is worth checking what a target HL science actually assumes first, since Combined Science on its own can leave a real gap at entry.",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge or Edexcel IGCSE for Faridabad families. Every match weighs the exact syllabus and level, the exam session, and whether a home session in your sector or an online lesson suits your child best.",

  process: [
    { title: "Tell us what your child needs", description: "Board, subject, level, current grade, your Faridabad sector and the slots that suit your evenings." },
    { title: "We shortlist two or three tutors", description: "Chosen first for the exact syllabus, then checked against whether they can reach your sector." },
    { title: "Sit in on a free lesson", description: "Watch, or let your child work through a real topic alone, at no cost and no obligation." },
    { title: "Set the first month's plan together", description: "The tutor proposes a topic order and pace; you sign off on it or ask for changes." },
    { title: "Stay in the loop every few weeks", description: "We ask how it is going and switch tutors quickly if something is not clicking." },
  ],

  whyPoints: [
    { title: "Matched by course, not by label", description: "Shortlisting runs against the exact Diploma subject and level, or the precise IGCSE board, code and tier, never a generic 'IB tutor' tag." },
    { title: "A travel check before any promise", description: "A home slot is only confirmed once we know a tutor can genuinely reach your Faridabad sector after school." },
    { title: "A lesson before any payment", description: "A full trial on a real topic happens first, so you decide from what you saw, not from a profile." },
    { title: "Assessed work stays the student's own", description: "Tutors coach through IAs, coursework and the EE without drafting a single line of the submission." },
    { title: "A written record after every session", description: "You get a short note each time covering what was taught and what comes next." },
    { title: "Nothing locked in", description: "Swap tutors, pause around exams, or stop altogether, with no fixed-term contract behind any of it." },
  ],

  faqs: [
    {
      question: "Do you actually send a home tutor in Faridabad, or is it all online?",
      answer:
        "Home visits do happen here, wherever a suitable tutor genuinely lives close enough to reach your sector on a school evening. When the best-matched specialist is based further off, we tell you that upfront and put forward an online or hybrid slot with the same person rather than swapping in whoever happens to be nearby. A trial lesson always comes first, whichever format ends up suiting you.",
    },
    {
      question: "Where do I start if I want an IB tutor for my child in Faridabad?",
      answer:
        "Send us the programme, subject, level and school, and we pull together tutors who have taught precisely that course before. The exact subject and HL or SL level drives the first cut, reachability for a home session drives the second, and neither of you commits to anything until a free trial lesson has actually happened.",
    },
    {
      question: "Do your Faridabad tutors know Edexcel as well as Cambridge IGCSE?",
      answer:
        "Both are on offer. A Cambridge student is matched against their exact code and tier, Mathematics 0580 Extended or Chemistry 0620 for instance, and an Edexcel student against their specification and Foundation or Higher tier. Cambridge shows up in more Faridabad classrooms right now, which is why most requests we get are Cambridge, but Edexcel tutors are there when needed.",
    },
    {
      question: "How much should I expect to pay for IB or IGCSE tutoring here?",
      answer:
        "It comes down to the level, the subject, how long a session runs and whether it happens at your home or on a screen, and we give you the number for your exact match before the trial begins, not after. HL Diploma work generally costs more than MYP or IGCSE Core support, home visits a little more than the equivalent online slot. Nothing here is sold as a fixed-term package.",
    },
    {
      question: "Which parts of Faridabad can a home tutor actually reach?",
      answer:
        "We work across the city's sectors, from Sector 14 and Sector 15 through NIT Faridabad, Old Faridabad and Ballabgarh, out to the Sector 75-93 belt in Greater Faridabad and the Surajkund stretch near the Delhi and Gurugram borders. Each request gets checked against real road access rather than distance on a map, and online steps in wherever a weekly home visit would not hold up.",
    },
    {
      question: "Can we try a lesson before deciding anything?",
      answer:
        "Yes, and there is no charge attached to it. Your child sits through a genuine topic from their own syllabus with the tutor, at home or on a screen, and gets a short plan for the coming month once it is done. From there you either carry on, ask the tutor to adjust the approach, or ask us for someone else.",
    },
    {
      question: "Will a tutor actually write part of an IA or a piece of coursework for us?",
      answer:
        "No, and that line does not move. What a tutor will do is help settle on a workable research question, walk through what the marking criteria are actually looking for, and mark up a draft honestly. The moment that tips into writing or rewriting assessed content, it breaches academic integrity rules and puts the qualification itself at risk, so it is a request our tutors turn down every time.",
    },
    {
      question: "What Diploma subjects can Faridabad students get help with?",
      answer:
        "Coverage spans the major DP groups, with Maths Analysis and Approaches, Applications and Interpretation, Physics, Chemistry, Biology, Economics, Business Management, English A and Computer Science the most requested. Psychology, Environmental Systems and Societies, Geography, History, Hindi B, French B, Theory of Knowledge and the Extended Essay round out what tutors here regularly teach.",
    },
    {
      question: "Is there support below Diploma level, for MYP or PYP students?",
      answer:
        "Yes, the whole continuum is covered. At MYP level, work centres on criteria A to D across sciences, maths and language subjects, plus keeping a Personal Project journal moving forward rather than pieced together at the deadline. PYP sessions are shorter and lighter, aimed at reading, writing and number confidence that feeds into units of inquiry and the final Exhibition.",
    },
    {
      question: "Does an online lesson really work as well as one at home?",
      answer:
        "For the bulk of IB and IGCSE work, particularly HL Diploma content, revision and IA guidance, a shared screen and saved notes cover most of what a session needs. A home visit still has the edge for a younger child or for handwritten science and maths practice. Plenty of Faridabad households end up running one of each every week with the same tutor.",
    },
    {
      question: "What checks happen before a tutor is introduced to us?",
      answer:
        "Every tutor's qualifications, teaching history and depth in the specific subject get looked at before an introduction is made, alongside a separate, honest check on whether they can actually reach your part of Faridabad for a home slot. The trial lesson that follows is where you judge how well they explain things, which matters more than anything on paper.",
    },
    {
      question: "What is the right time to bring in a tutor?",
      answer:
        "Starting when the course itself starts, Grade 11 for the Diploma and Grade 9 for IGCSE, gives the most room to fix foundations before internal assessments and tier decisions pile up. Coming in later is not wasted effort by any means, but the work then shifts toward the highest-yield topics and past-paper practice rather than a broad rebuild.",
    },
    {
      question: "We are moving from Haryana Board or CBSE. How disruptive is that switch?",
      answer:
        "Less than most families brace for. The syllabus content overlaps more than people expect; what actually changes is how an answer earns marks, since IB and IGCSE reward explanation and evaluation over straight recall. A tutor who has taught both systems can get a student used to that in a matter of weeks, ideally starting right at the point the switch happens rather than after the first bad test result.",
    },
    {
      question: "Our child is also doing JEE or NEET coaching. Can tutoring fit around that?",
      answer:
        "It is a routine request here, and we build the tutoring timetable around the coaching schedule rather than the other way round. A tutor who understands both the Diploma science syllabus and what JEE or NEET actually tests can point out where the two overlap, so the hours spent on one genuinely help the other instead of doubling the load.",
    },
    {
      question: "Can lessons be booked outside normal school hours?",
      answer:
        "Weekday evenings after school and weekend mornings are what most Faridabad families choose. A home slot only gets locked in once we are confident a tutor can arrive on time given NH-19 and the usual border traffic, while an online slot gives more room to push later into the evening or squeeze in an extra session before an exam.",
    },
    {
      question: "What if the tutor turns out to be a poor fit?",
      answer:
        "Say so, and we will line up someone else. Progress gets checked every few weeks specifically so a mismatch does not drag on, and there is no obligation to keep a child with a tutor who is not landing. Nothing is tied to a fixed contract, so pausing or stopping altogether is always an option too.",
    },
    {
      question: "Is this service run by, or partnered with, any Faridabad school?",
      answer:
        "No. IB Gram operates independently of every Faridabad school, and of the International Baccalaureate Organization, Cambridge Assessment International Education and Pearson Edexcel. Schools appear on this page purely to describe the local landscape students study in, and each tutor works to that particular school's own calendar and published syllabus.",
    },
  ],

  internalLinks: [
    { label: "IB tutors in Faridabad", href: "/ib-tutors/faridabad/", description: "Programme and subject pages for IB tutoring in Faridabad." },
    { label: "IGCSE tutors in Faridabad", href: "/igcse-tutors/faridabad/", description: "Cambridge and Edexcel IGCSE tutor matching for Faridabad families." },
    { label: "IGCSE in Faridabad", href: "/igcse-pages/faridabad/", description: "How IGCSE tuition works for Faridabad students." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP works: HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series explained." },
    { label: "Tutors in Delhi", href: "/delhi/", description: "IB and IGCSE tuition for families across Delhi." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "IB and IGCSE home tutors across Gurugram." },
    { label: "Test prep and admissions support", href: "/admissions/test-prep/", description: "Support alongside IB and IGCSE for entrance exams." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial lesson." },
    { label: "IB and IGCSE blog", href: "/blog/", description: "Study guides and advice for IB and IGCSE families." },
  ],

  closingHeading: "Book a free trial lesson with an IB or IGCSE tutor in Faridabad",
  closingBody:
    "Send over the board, the subject and level, where your child currently stands, and which sector of Faridabad you are in. We will come back with a tutor, a short note on their background, and trial times that fit around school, whether that ends up being a home visit, a screen, or a bit of both, with nothing charged and nothing to sign. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",
};
