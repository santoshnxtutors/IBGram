import type { CitySeoPage } from "../types";

/**
 * IB and IGCSE schools in Jaipur, confirmed either as IBO-listed World Schools or as advertising
 * a Cambridge Assessment International Education syllabus. Only schools verified this way belong
 * in the sliding strip; a CBSE-only or RBSE-only school listed here would be a factual error.
 */
const jaipurIbIgcseSchools = [
  "Sanskar School, Sirsi Road",
  "Jayshree Periwal International School",
  "Mayoor School Jaipur",
  "Seedling International Academy, Jawahar Nagar",
  "Seedling Modern International Academy, Durgapura",
  "India International School, Mansarovar",
] as const;

export const jaipur: CitySeoPage = {
  slug: "jaipur",
  countryName: "Jaipur",
  countryNameLong: "Jaipur, Rajasthan",
  demonym: "Jaipur",
  flagCode: "in",
  countryCode: "IN",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots after school and coaching hours, and weekend mornings before the Jaipur summer heat sets in",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.9124, longitude: 75.7873 },
  wikipedia: "https://en.wikipedia.org/wiki/Jaipur",
  alternateNames: ["Pink City"],
  stripSchools: [...jaipurIbIgcseSchools],

  title: "IB & IGCSE Tutors in Jaipur | Online & Home Tuition",
  metaDescription:
    "IB and IGCSE tutors in Jaipur covering DP, MYP, PYP and Cambridge IGCSE subjects, taught online one to one from home, with a free trial class before you commit.",
  h1: "IB and IGCSE Tutors and Online Tuition in Jaipur",
  heroEyebrow: "IB & IGCSE ONLINE TUITION IN JAIPUR",
  heroSubtitle:
    "Looking for IB and IGCSE tutors in Jaipur who actually teach your child's board and level, not a generic school-subject label? We match Diploma, Middle Years, Primary Years or Cambridge IGCSE students in Jaipur with a tutor who has taught that exact syllabus, then run every lesson live, one to one, online, so your child studies at home in Malviya Nagar, Vaishali Nagar, Mansarovar or wherever you live in the city without losing an evening to Jaipur traffic.",
  primaryKeyword: "IB and IGCSE tutors in Jaipur",
  imageAltText: "Online IB tutor explaining a Diploma Programme chemistry problem on a shared screen to a student in Jaipur",
  secondaryKeywords: [
    "IB tutor in Jaipur",
    "IGCSE tutor in Jaipur",
    "IB home tuition Jaipur",
    "IGCSE home tuition Jaipur",
    "IB online tuition Jaipur",
    "IGCSE online tuition Jaipur",
    "IB private tuition Jaipur",
    "IB Maths tutor Jaipur",
    "IGCSE Maths tutor Jaipur",
    "IB Physics tutor Jaipur",
    "IB Chemistry tutor Jaipur",
    "IB Biology tutor Jaipur",
    "IB DP tutor Jaipur",
    "IB MYP tutor Jaipur",
    "IB PYP tutor Jaipur",
    "Cambridge IGCSE tutor Jaipur",
    "IGCSE Additional Maths tutor Jaipur",
    "IB tutor Malviya Nagar",
    "IGCSE tutor Vaishali Nagar",
    "IB tutor Mansarovar",
    "online IB tutor Jaipur",
    "Pink City IGCSE tutor",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact IB level or Cambridge IGCSE code your child studies",
    "Live one-to-one online lessons taken at home in Jaipur, no travel either side",
    "Free trial class before any fee or commitment",
    "Independent platform, not run by or tied to any Jaipur school",
  ],
  heroStats: [
    { value: "PYP · MYP · DP · CP", label: "IB programmes covered" },
    { value: "Cambridge IGCSE", label: "Board covered in Jaipur" },
    { value: "Online, one to one", label: "How every lesson runs" },
    { value: "Free trial class", label: "Before you commit" },
  ],

  intro: {
    heading: "What an IB or IGCSE tutor actually does for a Jaipur student",
    paragraphs: [
      "An IB or IGCSE tutor in Jaipur is a subject specialist who has taught the exact course your child studies, works to the school's own assessment calendar, and teaches every lesson live over video so the student never leaves the house. For a Diploma Programme student that is a named subject at Higher or Standard Level; for an IGCSE student it is a Cambridge syllabus code and tier, such as Mathematics 0580 Extended or Chemistry 0620. Generic 'all-board' tuition rarely keeps up once assessment criteria and command words come into play.",
      "Jaipur's international-curriculum base is smaller than Delhi NCR or Mumbai but is growing steadily, anchored by schools such as Sanskar School on Sirsi Road, Jayshree Periwal International School, Mayoor School Jaipur and a handful of Cambridge-affiliated schools including Seedling International Academy and Seedling Modern International Academy. Most Jaipur families still study CBSE or the Rajasthan state board (RBSE), so an IB or IGCSE student here is often the exception in their extended family and their school, which makes finding a tutor who has actually taught the syllabus harder than it should be.",
      "Because in-person home visits from IB Gram run only in Gurugram and parts of Delhi NCR, every Jaipur match is taught online: a live, one-to-one video lesson with a shared whiteboard, screen-shared past papers and a saved lesson note, taken by the student at home in Jaipur on a laptop or tablet. That is not a downgrade from a home visit; it opens the match to specialists who may not live within driving distance of Mansarovar or C-Scheme at all.",
      "IB Gram is an independent tutoring platform. We are not affiliated with, endorsed by or representing any school named on this page, the International Baccalaureate Organization or Cambridge Assessment International Education. Tutors coach and explain; they never write Internal Assessments, the Extended Essay, TOK work or any assessed coursework for a student.",
    ],
    bullets: [
      "IB DP, MYP and PYP tutors matched by subject and level",
      "Cambridge IGCSE, Core and Extended tiers",
      "Every lesson live, online, one to one, from home in Jaipur",
      "Free trial class and a written note after every session",
    ],
  },

  programmesIntro:
    "Most Jaipur students who reach IB Gram are either at one of the city's handful of IB or Cambridge-affiliated schools, or are relocating from a CBSE or RBSE school into one. Each IB programme needs a different kind of support, and what follows is how each stage typically plays out for a Jaipur family and what a tutor should focus on.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "The PYP has no external exams. Children work through units of inquiry and, in the final year, the PYP Exhibition, so support is about reading fluency, number sense and structured research rather than textbook drilling.",
      countryNote:
        "Jaipur PYP families most often ask for help with English writing and comprehension, since many children switch between English at school and Hindi or Marwari at home, plus foundational maths and Exhibition research skills.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to Class 10, ages 11-16",
      description:
        "Every MYP subject is graded against criteria A to D, and MYP 5 adds the Personal Project. The hardest jump for students is moving from simply describing an answer to analysing it against the exact criterion wording.",
      countryNote:
        "In Jaipur, MYP requests concentrate on criterion-based work in the sciences and Language and Literature, and on keeping the Personal Project process journal current instead of rebuilt the week before it is due.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard Level, plus Theory of Knowledge, the Extended Essay and Internal Assessments that carry roughly a fifth to a third of most subject grades. Final exams sit in the May session, with November as the retake window.",
      countryNote:
        "Jaipur DP students most often want a tutor for Maths Analysis and Approaches HL, Physics, Chemistry, Economics and English A, usually starting in Class 11 with a second weekly slot added before the May mocks.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A mix of at least two DP courses, a career-related study, the reflective project and personal and professional skills. Very few Jaipur schools currently run it, but where a student is on it, the DP-subject support is identical.",
      countryNote:
        "The rare Jaipur CP student we see usually needs help with the DP subjects inside the programme and with structuring the reflective project rather than with the career-related study.",
    },
  ],

  subjectsIntro:
    "IB tutoring for a Jaipur student has to match the exact course and level, not just the word 'IB'. Maths Analysis and Approaches HL asks for a different tutor than Applications and Interpretation SL, and a strong Physics HL tutor is not automatically the right fit for MYP Sciences. We shortlist first on that exact match, then confirm the tutor can teach comfortably in the evening slots that fit a Jaipur school day.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, proof, vectors and the demanding Paper 3 problem-solving questions, plus support for the maths exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator fluency, with an exploration that rewards a real data set over a textbook example." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through to quantum and nuclear physics, Paper 1 and 2 technique, uncertainties and a defensible scientific investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure and bonding, organic mechanisms, energetics and the data-booklet fluency Jaipur students often lack after switching boards." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology through ecology and evolution, extended-response command terms and investigation statistics." },
    { name: "IB Economics", levels: "HL / SL", description: "Micro, macro and global economics, accurate diagrams and the three commentaries that carry internal assessment marks." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying theory to a real case study and the quantitative tools Paper 2 expects, alongside the Business Research Project." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen analysis for Paper 1, comparative essays for Paper 2, and the Individual Oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode, object-oriented programming and networks, alongside the coursework product and its documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "Biological, cognitive and sociocultural approaches, accurate study citation and structured extended-response questions." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking and case studies that go beyond what a Jaipur textbook covers, with a focus on evaluation over description." },
    { name: "IB Hindi A and Hindi B", levels: "HL / SL", description: "Text-type conventions, receptive skills and the individual oral, taught by tutors who work in both English-medium IB structure and Hindi content." },
    { name: "IB French and Spanish B", levels: "HL / SL", description: "Written response conventions and spontaneous speaking practice for the individual oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Building an exhibition commentary around three chosen objects and a prescribed-title essay the student can argue from more than one side." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Narrowing a research question early and working through subject-specific criteria across the reflection sessions; guidance only, never the writing itself." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Investigation design for criteria B and C, and groundwork for DP-level maths and sciences before students choose HL subjects." },
    { name: "IB MYP Language & Literature", levels: "MYP 1-5", description: "Criterion A textual analysis and support through the Personal Project process journal." },
  ],

  igcseSubjectsIntro:
    "IGCSE tutoring in Jaipur starts with the exact syllabus code and tier, because Cambridge 0580 Extended, 0606 Additional Mathematics and Core-tier sciences call for different preparation and different past papers. We match on board, code, tier and the May-June or October-November series, and on whether a student is heading toward the IB Diploma afterwards, since that changes how deep the maths and sciences need to go.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Paper-specific technique for Extended, accuracy without a calculator, and the command words that quietly cost method marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Extended only", description: "Calculus, trigonometric identities and vectors that bridge directly into IB Maths AA HL." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging equations reliably, electricity and waves, and the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, bonding, electrochemistry and organic chemistry, plus alternative-to-practical technique." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, inheritance and data-interpretation questions that reward precise extended-response structure." },
    { name: "IGCSE Combined and Coordinated Sciences", levels: "0653 / 0654", description: "Keeping three sciences moving on one timetable without any of them slipping behind the others." },
    { name: "IGCSE Economics 0455", levels: "Core / Extended", description: "Diagram accuracy and the longer evaluation answers that separate a mid-range grade from a high one." },
    { name: "IGCSE Business Studies 0450", levels: "Core / Extended", description: "Applying theory to the specific case-study business rather than writing a generic textbook answer." },
    { name: "IGCSE Computer Science 0478", levels: "Core / Extended", description: "Trace tables, pseudocode and Python programming for the problem-solving components." },
    { name: "IGCSE English First Language 0500", levels: "Core / Extended", description: "Directed writing, summary skills and close reading of unseen extracts." },
    { name: "IGCSE Hindi as a First Language 0549", levels: "Core / Extended", description: "Composition and comprehension in Hindi for students studying at a Cambridge-affiliated Jaipur school." },
    { name: "IGCSE Geography and History", levels: "0460 / 0470", description: "Named case studies, source inference and essay structure under timed conditions." },
  ],

  regionsTitle: "Jaipur neighbourhoods our IB and IGCSE tutors teach students in, online",
  regionsIntro:
    "Because every lesson runs online, where you live in Jaipur no longer decides which tutor you can book, but it still shapes the timing that works. Below is how session planning looks across some of Jaipur's main residential areas, based on school-end times, coaching-class clashes and the evening slowdown that summer heat brings to the city between April and June.",
  regions: [
    { name: "Malviya Nagar", note: "A dense residential and coaching hub in south Jaipur; many students here juggle school with JEE or NEET coaching, so IB or IGCSE sessions are usually planned around those slots." },
    { name: "Vaishali Nagar", note: "A large western residential colony with several CBSE and a few Cambridge-affiliated schools nearby; evening online slots after 6 pm work well once school and homework wind down." },
    { name: "Mansarovar", note: "Home to India International School and a large student population; families here often want IGCSE and CBSE tutoring side by side for siblings on different boards." },
    { name: "C-Scheme", note: "Central, well-established Jaipur, home to several long-running English-medium schools; families here often ask about IB DP options once a child finishes IGCSE elsewhere in the city." },
    { name: "Jagatpura and the Ajmer Road belt", note: "Fast-growing southeastern Jaipur near several newer schools; online tutoring avoids the traffic buildup on Ajmer Road and Jagatpura Road in the evenings." },
    { name: "Vidhyadhar Nagar", note: "Northern Jaipur residential sector with a mostly CBSE and RBSE school base; families moving a child into IGCSE here usually need bridging support in the first term." },
    { name: "Jhotwara", note: "An industrial-adjacent northwestern area with a growing residential population; online sessions remove the need to find a specialist tutor within local travel distance." },
    { name: "Tonk Road", note: "A major southern arterial corridor connecting several school catchments; families here favour a fixed early-evening slot before the road's evening traffic builds." },
    { name: "Bani Park and Civil Lines", note: "Older, established central neighbourhoods with a mix of legacy schools; online tutoring here often supplements a school that has recently added an IGCSE strand." },
    { name: "Sodala and Ajmer Road junction", note: "A busy western junction area; families commuting past it for coaching classes tend to prefer a single online IB or IGCSE slot rather than an extra cross-town trip." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring platform. Schools are named only to describe the catchments Jaipur families study in. We are not affiliated with, endorsed by, partnered with or representing any school named here, the International Baccalaureate Organization or Cambridge Assessment International Education.",
  schoolClusters: [
    {
      city: "Sirsi Road and western Jaipur",
      note: "Sanskar School's IB DP and PYP strands anchor demand from families along Sirsi Road and the surrounding western sectors.",
      schools: ["Sanskar School, Sirsi Road"],
    },
    {
      city: "Ajmer Road and Sanganer belt",
      note: "Jayshree Periwal International School and Mayoor School Jaipur, both offering the IB or Cambridge curriculum, draw families from this fast-growing southwestern corridor.",
      schools: ["Jayshree Periwal International School", "Mayoor School Jaipur"],
    },
    {
      city: "Mansarovar and Durgapura",
      note: "India International School and Seedling Modern International Academy sit close together here, and many families in Mansarovar and neighbouring colonies study at one or the other.",
      schools: ["India International School, Mansarovar", "Seedling Modern International Academy, Durgapura"],
    },
    {
      city: "Jawahar Nagar and south-central Jaipur",
      note: "Seedling International Academy in Jawahar Nagar draws families from this part of the city who want a Cambridge track without moving out to Mansarovar or Durgapura.",
      schools: ["Seedling International Academy, Jawahar Nagar"],
    },
  ],

  modesIntro:
    "Every lesson we run in Jaipur is online, since IB Gram's in-person home visits are limited to Gurugram and parts of Delhi NCR. Within that, families choose between three formats depending on the subject, the exam calendar and how much support a child needs in a given month. Tutors do not travel to your home in Jaipur under any of these formats; sessions are live video lessons the student takes at home on a laptop or tablet.",
  modes: [
    {
      title: "Online one-to-one tuition, taken at home",
      description:
        "A fixed weekly video lesson with the same tutor, using a shared digital whiteboard and screen-shared past papers. This is the standard format for most Jaipur students across every IB level and IGCSE subject.",
      bullets: [
        "Same tutor every week for continuity",
        "Shared whiteboard and marked-up past papers",
        "A written note after each session",
        "No travel time on either side",
      ],
    },
    {
      title: "Hybrid: weekly sessions plus intensive revision blocks",
      description:
        "Regular weekly tuition through the term, with extra sessions added in the weeks before mocks, Internal Assessment deadlines or the May or October-November exam series.",
      bullets: [
        "Steady term-time pace, then a focused push before deadlines",
        "Useful for Diploma students balancing IAs across subjects",
        "Session frequency reviewed every few weeks",
        "Works around Jaipur school and coaching-class timetables",
      ],
    },
    {
      title: "Exam-block online coaching",
      description:
        "Short, concentrated tutoring aimed at one exam session, typically past-paper practice and targeted topic revision in the six to eight weeks before it.",
      bullets: [
        "Built around a specific exam date, not an open-ended schedule",
        "Heavy use of past papers and mark schemes for the right board",
        "Good fit for a late start before IGCSE or DP exams",
        "Can convert into ongoing weekly tuition afterwards",
      ],
    },
  ],

  sections: [
    {
      heading: "Who studies IB and IGCSE in Jaipur, and at which schools?",
      paragraphs: [
        "IB and IGCSE students in Jaipur are still a minority against the city's much larger CBSE and RBSE base, concentrated in a small set of schools: Sanskar School on Sirsi Road for the IB, Jayshree Periwal International School and Mayoor School Jaipur for the IB or Cambridge curriculum, and Cambridge-affiliated schools such as Seedling International Academy and Seedling Modern International Academy for IGCSE. India International School in Mansarovar runs both an IB and a Cambridge strand.",
        "The families choosing IB or IGCSE in Jaipur tend to fall into a few groups: business and trading families with international connections, especially in the city's long-established Marwari business community, professionals who have relocated to Jaipur from a metro city and want continuity for their children's curriculum, and parents planning eventual study abroad who prefer an internationally recognised qualification over the state board.",
        "Because the international-curriculum cohort is small, students often do not have classmates a few doors down doing the same syllabus, and a tutor who has taught that exact course becomes more important, not less. A Jaipur MYP student switching from CBSE, for instance, needs someone who understands both systems, not just one.",
        "IB and IGCSE tutors in Jaipur matched through IB Gram are chosen first for having taught the precise subject and level, then for their availability in the evening windows that fit a Jaipur school day, which usually ends between 2 pm and 3.30 pm depending on the school.",
      ],
      bullets: [
        "A handful of schools carry Jaipur's IB and IGCSE cohort",
        "Marwari business families and relocating professionals form much of the demand",
        "Board-switch students need a tutor fluent in both systems",
        "Matching starts with the exact subject and level",
      ],
    },
    {
      heading: "CBSE, RBSE, ICSE, IB and IGCSE in Jaipur: how the boards compare",
      paragraphs: [
        "Most Jaipur schools follow CBSE, with a smaller number on the Rajasthan Board of Secondary Education (RBSE) and fewer still on ICSE. IB and IGCSE sit apart from all three: they are internationally set and marked, assess coursework and internal components more heavily, and use command words and criteria that Jaipur students moving over from CBSE or RBSE are rarely taught explicitly.",
        "CBSE and RBSE reward accurate recall and practised problem types; IB and IGCSE reward explanation, justification and application to an unfamiliar context. A Jaipur student who is strong at CBSE board-exam maths can still lose marks on an IGCSE Extended paper that changes the wording of a familiar question, simply because the command word asks for something the student was never drilled on.",
        "IB and IGCSE also carry weight differently for university applications. Predicted grades and Internal Assessments matter earlier in the process than they do for CBSE or RBSE students, whose applications typically rest on a single board-exam result. That timing difference is one reason Jaipur families ask about tutoring as early as Class 9 or Class 11.",
        "The table below sets out the practical differences a Jaipur family is usually weighing when deciding, or when a child has already been enrolled and the family wants to understand what changed.",
      ],
      table: {
        caption: "How CBSE, RBSE, ICSE, IB and IGCSE compare for Jaipur families",
        columns: ["Board", "Assessment style", "Where it's common in Jaipur", "What changes for tutoring"],
        rows: [
          ["CBSE", "Board exams, largely recall and applied problems", "Majority of Jaipur schools", "Practice-heavy, past-paper drilling"],
          ["RBSE", "State board exams, similar recall emphasis", "Government and many private Jaipur schools", "Similar to CBSE, Hindi-medium options common"],
          ["ICSE", "Detailed syllabus, strong emphasis on English and writing", "A small number of Jaipur schools", "Long-answer technique and structured writing"],
          ["IB (PYP/MYP/DP/CP)", "Inquiry-led, criteria-based, Internal Assessments and Extended Essay", "Sanskar School, JPIS, Mayoor School and similar", "Criterion-matched analysis, IA and EE guidance"],
          ["IGCSE (Cambridge)", "Two-year syllabus, Core or Extended tiers, coursework in some subjects", "Seedling schools, Mayoor School, India International School", "Syllabus-code and tier-specific past-paper technique"],
        ],
      },
    },
    {
      heading: "What drives the cost of an IB or IGCSE tutor in Jaipur?",
      paragraphs: [
        "The fee for an IB or IGCSE tutor in Jaipur depends mainly on the level, the subject and the tutor's experience, not on the city itself. Diploma Programme Higher Level subjects and Cambridge IGCSE Extended-tier sciences generally sit at a higher rate than MYP or PYP support, since they need a specialist who has taught that syllabus recently and can guide Internal Assessments or coursework.",
        "Session length and frequency also change the total. A single weekly hour costs less overall than two sessions a week, but a student cramming several subjects before mocks may need the extra frequency for a limited stretch rather than year-round. IB Gram reviews the plan every few weeks so families are not paying for a schedule that no longer fits.",
        "Because every Jaipur lesson runs online rather than as a home visit, families are not paying for a tutor's travel time or fuel across the city, which keeps online tuition generally more economical than in-person tuition would be if it were offered here. We share the exact fee for your child's specific match before the trial class, with nothing added afterwards.",
        "We do not publish a fixed price list, because a single number would misrepresent the range between, say, MYP English support and IB Diploma Maths AA HL with Internal Assessment guidance. Ask what a session will cover and how progress will be tracked, since that tells you more about value than the hourly figure alone.",
      ],
      bullets: [
        "Fee depends on level, subject and tutor experience",
        "HL and Extended-tier subjects generally cost more than foundational support",
        "No home-visit travel cost, since every Jaipur session is online",
        "Exact fee confirmed for your match before the trial, no hidden charges",
      ],
    },
    {
      heading: "Online home tuition, Jaipur coaching centres and self-study: what fits your child?",
      paragraphs: [
        "Jaipur has a strong coaching-centre culture built around JEE and NEET preparation, and some families assume the same group-class model works for IB or IGCSE. It rarely does. IB and IGCSE assessment is criteria-based and subject-specific, and a large coaching batch cannot adapt to one student's Internal Assessment topic or a Cambridge Extended-tier gap the way one-to-one tuition can.",
        "Online one-to-one tuition puts a subject specialist in front of your child without either side needing to travel, which matters in a city where a 30-minute cross-town trip during evening traffic is common. It also opens up tutors who have taught the exact IB level or Cambridge code, rather than whoever happens to run a coaching batch nearby.",
        "Self-study works for confident, well-organised students revising material they already understand, particularly in the weeks before an exam when past-paper practice matters more than new teaching. It works less well for a student stuck on a genuinely new topic, or one who needs feedback on IA or coursework drafts that only a subject specialist can give properly.",
        "The comparison below reflects what Jaipur families most often ask when weighing these options against each other.",
      ],
      table: {
        caption: "Online one-to-one tuition versus coaching centres and self-study, for IB and IGCSE in Jaipur",
        columns: ["Format", "Best suited to", "Limitation in Jaipur"],
        rows: [
          ["Online one-to-one tuition", "Any IB level or IGCSE subject needing syllabus-specific teaching", "Needs a stable internet connection and a quiet study space at home"],
          ["Local coaching centres", "JEE, NEET and CBSE or RBSE board-exam preparation", "Group pace rarely matches an individual IB or IGCSE syllabus or IA need"],
          ["Self-study with past papers", "Confident students revising familiar material before an exam", "No feedback on IA drafts, coursework or genuinely new topics"],
          ["No support", "Students who are fully on track and simply need occasional doubt-clearing", "Risky close to Internal Assessment or exam deadlines"],
        ],
      },
    },
    {
      heading: "The Jaipur school year: exams, heat, festivals and when to start tutoring",
      paragraphs: [
        "Most Jaipur schools run an April-to-March academic year, similar to the CBSE calendar, while the IB and Cambridge external exams follow their own international schedules regardless of when the local school year starts. IB Diploma exams sit in May, with results in early July and a November retake session; Cambridge IGCSE sits in May-June and October-November.",
        "Jaipur's summer runs hot, often crossing 40 degrees Celsius between April and June, and this is exactly when Diploma students are approaching their May exams and IGCSE students their May-June series. Evening online sessions after sunset, once the day's heat has eased, tend to work better than mid-afternoon slots during this stretch.",
        "The festival calendar also shapes the study year. Teej and Gangaur in the monsoon months, Diwali in October or November, and Makar Sankranti's kite-flying season in mid-January are all periods when Jaipur households are genuinely busy, and tutoring schedules are usually lighter around them rather than pushed through regardless.",
        "For Diploma students, the practical planning points are Class 11 internal exams, Internal Assessment deadlines through Class 12, predicted grades in the autumn of Class 12 for university applications, and mock exams before May. For IGCSE students, the tier decision and school mocks in Class 10 matter most, alongside the six to eight weeks directly before the external series.",
      ],
      table: {
        caption: "Jaipur's academic year against the IB and Cambridge IGCSE exam calendar",
        columns: ["Period", "Jaipur school context", "IB / IGCSE exam context"],
        rows: [
          ["April-June", "New academic year begins; peak summer heat", "Post-result period for Diploma; planning for next session"],
          ["July-September", "Monsoon, Teej and Gangaur", "Term settles; good window for foundational tutoring"],
          ["October-November", "Diwali break", "Cambridge IGCSE October-November series; DP November retakes"],
          ["December-January", "Winter, Makar Sankranti", "Mock exams and Internal Assessment deadlines approach"],
          ["February-May", "Final term, board and school exams", "DP May exams; Cambridge IGCSE May-June series begins"],
        ],
      },
    },
    {
      heading: "University pathways from Jaipur after IB or IGCSE",
      paragraphs: [
        "Jaipur's IB and IGCSE students generally head in one of three directions after Class 12: universities abroad, particularly in the UK, Canada, Australia or the US, given the city's long history of families with international trading and business ties; Indian universities and colleges through CUET-UG; or engineering and medical entrance routes through JEE and NEET, for which IB and IGCSE students remain eligible subject to meeting the relevant subject and percentage criteria.",
        "For applications abroad, predicted grades matter earlier than final results, since they go in during Class 12 before the May exam session. That makes a student's Class 11 and early Class 12 performance the real target for tutoring, not only the final exams. UK offers typically state a total IB point requirement with Higher Level subject minimums; other countries weigh predicted grades alongside the whole academic profile.",
        "Students applying within India through CUET-UG need Association of Indian Universities equivalence for their IB or IGCSE results, and subject combinations from Class 11 onward should be chosen with that in mind if an Indian university is a realistic option. Local institutions such as Malaviya National Institute of Technology and Manipal University Jaipur are common targets discussed by families weighing an India-based route.",
        "For JEE or NEET aspirants who are also on the IB or IGCSE track, the subject overlap in maths and the sciences helps, but the exam styles are very different from IB or Cambridge assessment, and most families we work with in Jaipur treat entrance-exam coaching and IB or IGCSE subject tutoring as two separate, parallel efforts rather than one combined programme.",
      ],
      bullets: [
        "Study-abroad, CUET-UG and JEE/NEET are the three common routes",
        "Predicted grades drive Class 12 applications abroad",
        "AIU equivalence matters for CUET-UG applicants",
        "JEE/NEET coaching and IB/IGCSE tutoring usually run in parallel, not combined",
      ],
    },
    {
      heading: "IB Maths Analysis and Approaches, Applications and Interpretation, and the sciences in Jaipur",
      paragraphs: [
        "IB Maths splits into Analysis and Approaches, which suits students heading toward engineering, physical sciences or economics-heavy degrees, and Applications and Interpretation, which suits those heading toward statistics, business or social-science routes. Jaipur students moving from a CBSE or RBSE background often default to AA because it looks closer to a familiar board-exam maths course, without necessarily checking whether AI would suit their intended degree better.",
        "At Higher Level, AA adds proof, more demanding calculus and the unfamiliar-problem style of Paper 3, which rewards structured practice far more than memorised methods. AI HL leans into statistics, modelling and technology use, with an exploration that works best around a genuinely interesting real data set rather than a recycled textbook example.",
        "In the sciences, Jaipur students frequently arrive with strong content knowledge from CBSE-style board preparation but less practice at IB's extended-response format and its emphasis on evaluation. Physics and Chemistry both carry a scientific investigation component that needs a defensible method and honest treatment of uncertainty, which is a different skill from reproducing a standard practical write-up.",
        "A tutor working with a Jaipur Diploma student on Maths or the sciences typically starts by mapping where CBSE or RBSE preparation has left gaps against the IB syllabus guide, then builds a plan around Internal Assessment timing and the specific paper types the student finds hardest, rather than re-teaching content the student already knows.",
      ],
      bullets: [
        "AA suits proof and calculus-heavy routes; AI suits statistics and modelling",
        "HL adds Paper 3 problem-solving in both maths courses",
        "Science IAs need a defensible method, not a standard write-up",
        "Tutoring maps CBSE or RBSE gaps against the IB syllabus guide first",
      ],
    },
    {
      heading: "IGCSE Core or Extended: which tier should a Jaipur student take?",
      paragraphs: [
        "Extended tier gives access to the full grade range and is the right choice for a Jaipur student aiming at strong grades or planning to move into the IB Diploma afterwards, while Core tier caps the top grade but suits a student who needs a more manageable syllabus depth in a particular subject. The decision is usually made in Class 9, and it is one of the most consequential choices a family makes for that subject.",
        "Getting the tier decision wrong has knock-on effects. A student entered for Core Mathematics who later wants Maths AA HL at the Diploma level will be starting that transition with a real content gap, since Additional Mathematics 0606, only available at Extended-equivalent depth, is the strongest bridge into HL maths.",
        "For the sciences, Extended tier's alternative-to-practical paper and its deeper content coverage matter most for students likely to continue with IB Physics, Chemistry or Biology at Higher Level. A student who is confident they will not continue with a science beyond IGCSE has more room to choose Core without long-term consequences.",
        "We generally recommend Jaipur families revisit the tier decision honestly at the end of Class 9, using actual classroom performance rather than optimism, and get a tutor involved early in Class 9 if a subject already looks borderline, since catching a tier mismatch before the syllabus deepens is far easier than correcting it in Class 10.",
      ],
      bullets: [
        "Extended tier opens the full grade range and IB Diploma pathways",
        "Core tier suits a manageable depth where DP continuation is unlikely",
        "0606 Additional Mathematics is the strongest bridge to IB Maths AA HL",
        "Revisit the tier decision honestly at the end of Class 9",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP, DP and CP subjects and Cambridge IGCSE for Jaipur families. Every match is checked against the exact syllabus, level and exam series first, and every lesson runs live online so your child studies at home in Jaipur without losing an evening to travel.",

  process: [
    { title: "Tell us the syllabus", description: "Share the programme or board, subject and level, current or predicted grade, and the exam session your child is working toward." },
    { title: "Receive a shortlist", description: "We match tutors who have taught that exact IB level or Cambridge code, and explain why each one suits your child." },
    { title: "Take a free trial class", description: "Your child works through a real topic with the tutor online, at no charge and with no obligation to continue." },
    { title: "Agree a first-month plan", description: "The tutor sets out the topics, session rhythm and how progress will be reported, and you approve or adjust it." },
    { title: "Review and adjust", description: "We check in every few weeks, add intensive sessions before deadlines, and re-match if the fit is ever wrong." },
  ],

  whyPoints: [
    { title: "Syllabus-exact matching", description: "Tutors are matched on the precise IB subject and level, or the Cambridge code and tier, not a general international-curriculum label." },
    { title: "Honest about format", description: "We are upfront that Jaipur tuition is online, one to one, live and taken at home, with no home visits outside Gurugram and parts of Delhi NCR." },
    { title: "Free trial before commitment", description: "Your child meets the tutor on a real topic first, so you decide from evidence rather than a profile page." },
    { title: "Academic integrity protected", description: "Tutors guide Internal Assessments, coursework, the Extended Essay and TOK, but never write assessed work themselves." },
    { title: "Written progress notes", description: "A short note after every session, and a review every few weeks, so you always know what is being covered." },
    { title: "No long contracts", description: "Sessions can be paused or stopped anytime, and we re-match at no extra cost if a tutor is not the right fit." },
  ],

  faqs: [
    {
      question: "Do you provide home tutors who visit our house in Jaipur?",
      answer:
        "No, tutors do not visit homes in Jaipur. IB Gram's in-person home visits run only in Gurugram and parts of Delhi NCR. Every Jaipur match is taught as live, one-to-one online tuition, with the student studying at home in Jaipur on a laptop or tablet. Families sometimes call this online home tuition or private tuition from home, since the child stays at home for every lesson even though the tutor is not physically present.",
    },
    {
      question: "How do I find IB and IGCSE tutors in Jaipur who have taught the right syllabus?",
      answer:
        "Share your child's exact programme, subject and level with IB Gram, and we shortlist IB and IGCSE tutors in Jaipur who have recently taught that specific course, such as IB Maths AA HL or IGCSE Chemistry 0620 Extended. We check the syllabus match first, then confirm the tutor is available in the evening windows that fit a Jaipur school day. You then take a free trial class before deciding anything.",
    },
    {
      question: "Which Cambridge IGCSE subjects can you help with in Jaipur?",
      answer:
        "We match tutors for the full range of Cambridge IGCSE subjects requested in Jaipur, including Mathematics 0580, Additional Mathematics 0606, Physics 0625, Chemistry 0620, Biology 0610, Combined and Coordinated Sciences, Economics 0455, Business Studies 0450, Computer Science 0478, English First Language 0500 and Hindi as a First Language 0549. Tutors are matched by the exact code and tier so past-paper practice is genuinely relevant.",
    },
    {
      question: "What does an IB or IGCSE tutor in Jaipur cost?",
      answer:
        "The fee depends on the IB level or IGCSE tier, the subject and the tutor's experience, and we confirm it for your specific match before the trial class. Diploma Higher Level subjects and Extended-tier sciences generally cost more than MYP or PYP support. Because every Jaipur lesson is online, there is no travel cost added, and there are no long contracts, so you can pause or stop anytime.",
    },
    {
      question: "Which schools in Jaipur offer the IB or Cambridge IGCSE?",
      answer:
        "Sanskar School on Sirsi Road, Jayshree Periwal International School and Mayoor School Jaipur offer the IB or Cambridge curriculum, while Seedling International Academy, Seedling Modern International Academy and India International School in Mansarovar are affiliated with Cambridge IGCSE. This list reflects publicly available school information and is not exhaustive; ask us if your child's school is not named here.",
    },
    {
      question: "Is there a free trial class before I pay anything?",
      answer:
        "Yes, every match starts with a free trial class, taught online at no charge and with no obligation to continue. Your child works through a real topic from their syllabus with the tutor, and afterwards the tutor shares a short plan for the first month. You then decide whether to proceed, ask for a different tutor, or take more time to think about it.",
    },
    {
      question: "Can a tutor help my child with IB Internal Assessments in Jaipur?",
      answer:
        "Yes, tutors can guide Internal Assessments, but they never write any part of one. Legitimate help includes choosing a workable research question, explaining what each assessment criterion rewards, planning data collection and giving critical feedback on drafts. Writing or rewriting assessed work breaches the IB's academic integrity policy and can put a student's Diploma at risk, so our tutors decline those requests outright.",
    },
    {
      question: "My child is switching from CBSE or RBSE to IB or IGCSE. Can a tutor help?",
      answer:
        "Yes, board switches are one of the most common requests we see from Jaipur families. The content gap is usually smaller than the gap in how questions are asked and marked. IB and IGCSE reward explanation and application over recall, and command words such as evaluate, justify and hence carry specific expectations that a tutor who knows both systems can teach explicitly, ideally in the term before or just after the switch.",
    },
    {
      question: "Is online tuition as effective as in-person tuition for IB and IGCSE?",
      answer:
        "For most IB and IGCSE subjects, yes, particularly for Diploma Higher Level content, IGCSE Extended-tier work and exam revision, where screen-shared past papers and a digital whiteboard work well. It gives access to specialists who may not live near Jaipur at all. It suits a self-motivated student best; a child who is easily distracted on screen may need more structure built into sessions, which we factor into the match.",
      },
    {
      question: "Do you tutor IB MYP and PYP students in Jaipur, or only the Diploma?",
      answer:
        "We tutor across the whole IB continuum, not only the Diploma. MYP support in Jaipur usually focuses on criteria A to D in the sciences and Language and Literature, and on the Personal Project process journal. PYP support covers reading fluency, number sense and research skills for units of inquiry and the Exhibition. Younger students generally do best with shorter, more frequent sessions rather than long ones.",
    },
    {
      question: "When should my child start IB or IGCSE tutoring in Jaipur?",
      answer:
        "The best time is close to the start of the course: Class 11 for the IB Diploma and Class 9 for IGCSE, especially given the tier decision IGCSE students face early on. Starting then leaves time to fix foundations before internal exams, Internal Assessment deadlines and predicted grades. A late start in the final year can still help, but the focus shifts to the highest-value topics and past-paper practice.",
    },
    {
      question: "Do your tutors write Extended Essays, IAs or coursework for students?",
      answer:
        "No, and we are firm about this. Tutors coach students through choosing a research question, understanding assessment criteria and reviewing drafts critically, but every word of an Extended Essay, Internal Assessment, TOK essay or coursework submission has to remain the student's own work. This protects the student's Diploma or IGCSE result and reflects the academic integrity rules both the IB and Cambridge enforce.",
    },
    {
      question: "Can sessions be scheduled around Jaipur's summer heat and coaching-class timings?",
      answer:
        "Yes, we plan sessions around your child's actual week, including coaching-class clashes common in areas like Malviya Nagar and the intense April-to-June heat that makes many families prefer evening slots after sunset. Online tuition makes this easier than an in-person visit would, since there is no travel time to plan around on either side, only the lesson itself.",
    },
    {
      question: "What happens if the tutor is not the right fit for my child?",
      answer:
        "Tell us, and we will find another tutor. We check in with families every few weeks and re-match whenever the fit is wrong, rather than expecting a child to adjust to a tutor who is not working for them. There are no long contracts attached to any match, so you can also pause or stop sessions entirely without any penalty.",
    },
    {
      question: "Is IB Gram affiliated with any Jaipur school, the IB or Cambridge?",
      answer:
        "No, IB Gram is an independent tutoring platform and is not affiliated with, endorsed by or representing any Jaipur school, the International Baccalaureate Organization or Cambridge Assessment International Education. School names on this page describe the catchments Jaipur families study in, and tutors always work to each school's own calendar and the relevant board's published syllabus.",
    },
    {
      question: "How do I get started with an IB or IGCSE tutor in Jaipur?",
      answer:
        "Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp with your child's programme or board, subject, level and current grade. We will send a shortlist of matched tutors along with trial slots that fit a Jaipur school week, and your child can take a free trial class online before you decide on anything.",
    },
  ],

  internalLinks: [
    { label: "IB tutors in Jaipur", href: "/ib-tutors/jaipur/", description: "Programme and subject pages for IB tutoring in Jaipur." },
    { label: "IGCSE tutors in Jaipur", href: "/igcse-tutors/jaipur/", description: "Cambridge IGCSE tutor matching for Jaipur students." },
    { label: "IGCSE in Jaipur", href: "/igcse-pages/jaipur/", description: "How IGCSE tuition works for Jaipur families." },
    { label: "India IB and IGCSE tuition", href: "/india/", description: "IB and IGCSE tutoring across Indian cities." },
    { label: "IB and IGCSE tuition in Gurgaon", href: "/gurgaon/", description: "Where IB Gram's in-person home visits are available." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the Diploma Programme works: HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, the Personal Project and assessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP units of inquiry and the Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series explained." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "IB Maths AA and AI at HL and SL." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Test prep and admissions", href: "/admissions/test-prep/", description: "Support for entrance tests alongside IB or IGCSE study." },
    { label: "IB and IGCSE tuition in Jodhpur", href: "/jodhpur/", description: "IB and IGCSE tutoring for families in Jodhpur, Rajasthan." },
    { label: "IB and IGCSE tuition in Indore", href: "/indore/", description: "IB and IGCSE tutoring for families in Indore." },
    { label: "IB and IGCSE blog", href: "/blog/", description: "Study guides and advice for IB and IGCSE families." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial class." },
  ],

  closingHeading: "Book a free trial with IB and IGCSE tutors in Jaipur",
  closingBody:
    "Tell us your child's programme or board, subject and level, and current or predicted grade. We will send back a shortlist of matched tutors and trial slots that fit a Jaipur school week, taught online, one to one, with no charge and no commitment. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",
};
