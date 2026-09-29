import type { CitySeoPage } from "../types";

/**
 * /jhansi/ - IB and IGCSE tutoring page for Jhansi, Uttar Pradesh. No school inside Jhansi is
 * confirmed to run the IB or Cambridge/Edexcel IGCSE, so stripSchools stays empty and
 * schoolClusters point families to the nearest confirmed options: Bhopal, Lucknow and
 * Gurugram/Delhi NCR for boarding. Online-only delivery; home visits are not offered here.
 */
export const jhansi: CitySeoPage = {
  slug: "jhansi",
  countryName: "Jhansi",
  countryNameLong: "Jhansi, Uttar Pradesh",
  demonym: "Jhansi",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots get fixed around whichever is fiercer that fortnight, the Bundelkhand summer or your child's own exam timetable, plus whatever a posting order happens to be doing to the calendar",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.4484, longitude: 78.5685 },
  wikipedia: "https://en.wikipedia.org/wiki/Jhansi",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Jhansi | Online Home Tuition",
  metaDescription:
    "Jhansi has no confirmed IB or IGCSE school, so tutors teach the whole DP, MYP, PYP or Cambridge/Edexcel syllabus live online, one to one, with a free trial.",
  h1: "IB and IGCSE Tutors and Online Tuition in Jhansi",
  heroEyebrow: "IB & IGCSE TUTORING FOR JHANSI, TAUGHT LIVE ONLINE",
  heroSubtitle:
    "No school in Jhansi is currently confirmed to run the IB or a Cambridge or Edexcel IGCSE syllabus, so most families here lean on online private tuition from home to get the subject taught properly at all, by someone who has actually examined and marked that exact course before. A camera, a shared screen and a stable connection cover the whole lesson online; no tutor drives out to a house anywhere in Jhansi, and the plan bends around Bundelkhand's summer heat and your family's own calendar rather than the other way round.",
  primaryKeyword: "IB and IGCSE tutors in Jhansi",
  imageAltText: "IB Diploma student in Jhansi working through a Physics past paper with a tutor during a live online lesson",
  secondaryKeywords: [
    "IB tutor Jhansi",
    "IGCSE tutor Jhansi",
    "IB home tuition Jhansi",
    "IGCSE home tuition Jhansi",
    "IB private tuition Jhansi",
    "IB Maths tutor Jhansi",
    "IGCSE Maths tutor Jhansi",
    "IB Physics tutor Jhansi",
    "IB Chemistry tutor Jhansi",
    "IB Biology tutor Jhansi",
    "IB DP tutor Jhansi",
    "IB MYP tutor Jhansi",
    "IB PYP tutor Jhansi",
    "IGCSE online tuition Jhansi",
    "IB tutor Civil Lines Jhansi",
    "IGCSE tutor Sipri Bazar",
    "online IB tutor Jhansi Cantonment",
    "IB tutor Jhansi Uttar Pradesh",
    "Cambridge IGCSE tutor Jhansi",
    "Edexcel IGCSE tutor Jhansi",
  ],

  heroTrustPoints: [
    "Matching starts from the syllabus code your child's school actually issued, never a loose label like 'IB tutor'",
    "A doorbell ringing for a lesson is a Gurugram or Delhi NCR thing; in Jhansi the whole class happens on screen",
    "Sit in on one complete lesson, free, before you commit to anything",
    "Operates apart from any school, cantonment authority or PSU your family happens to be posted under",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Full IB continuum taught" },
    { value: "CAIE & Edexcel", label: "Both IGCSE boards covered" },
    { value: "IST", label: "Tutor and student, same clock" },
    { value: "Free trial", label: "First lesson, no obligation" },
  ],

  intro: {
    heading: "What tutoring actually looks like for a Jhansi household",
    paragraphs: [
      "A tutor working with a Jhansi student starts from whatever their enrolment paperwork says: a specific IB Diploma, Middle Years or Primary Years subject at a stated level, or a named Cambridge or Pearson Edexcel IGCSE code with its tier already fixed. From there the lesson is a video call with a shared drawing surface, close enough to a desk-side conversation that a tutor can point at a half-finished mechanics diagram, mark a mock paper line by line while the student watches, or push back on a shaky Internal Assessment draft in real time.",
      "Almost nobody in Jhansi grows up inside this syllabus. The city's recognisable schools sit under the Army, the railways, BHEL or one of a handful of older convent-run institutions, and every one of them, as far as we can confirm, teaches CBSE, ICSE or the Uttar Pradesh State Board rather than anything IB or IGCSE. That single fact shapes who actually comes looking: a child transplanted mid-course by a posting, or a household deciding to hand-build the syllabus with a tutor since no nearby school will do it for them.",
      "Three institutions do most of the transferring: the cantonment moves Army officers' families in and out on postings, the railway division rotates staff through Jhansi as a junction town, and the BHEL unit at Bangra brings in engineers on fixed tenures. A good number of these children were already partway through an IB or IGCSE course somewhere else entirely, which turns the tutor's job into something closer to keeping a thread from snapping than starting from zero.",
      "None of that implies any tie to the schools, boards or universities mentioned on this page. A tutor teaches, marks and comments; the line stops well short of drafting so much as a paragraph of a graded Internal Assessment, an Extended Essay, or coursework that will eventually carry a student's own name on it.",
    ],
    bullets: [
      "Tutors across the IB continuum, PYP through DP, and every major subject group",
      "Both Cambridge and Pearson Edexcel IGCSE, whichever tier a school has placed your child in",
      "One-to-one video lessons on IST, with a short recap sent after each one",
      "A free trial lesson before any money changes hands",
      "No doorstep visits in Jhansi; that exists only within Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Ask a Jhansi family how they ended up needing an IB or IGCSE tutor and the answer is rarely 'our local school offers it'. It is usually a posting order, a deliberate switch away from the State Board system, or a child who started the syllabus somewhere else and now needs it kept alive. Each rung of the IB continuum below reflects a slightly different version of that same starting point.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Nothing here hinges on a textbook chapter; a class spends a year circling a handful of big, open questions together instead of sitting through separate Maths or English periods, and a teacher notes progress by watching rather than by setting a term exam. All of that six-year build-up points at one moment near the end, a self-picked question a child researches independently and stands up to present to the school.",
      countryNote:
        "The youngest PYP arrivals we hear of in Jhansi have almost always just landed with a transferred Army or BHEL family and are seeing this unscored, question-led style for the very first time; the opening weeks are less about content and more about a child learning it is fine not to already know the answer.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Two or more separate criteria sit under every subject, marked independently of each other, so a genuinely good piece of writing can still shed marks against a criterion it simply forgot to address. By around fifteen, a self-directed Personal Project joins the workload, built up gradually through a process journal rather than produced overnight, and a school may choose to close the programme with a formal MYP eAssessment.",
      countryNote:
        "A Jhansi student dropped into MYP partway through a posting rarely struggles with the ideas themselves; the trip-up is almost always reading a numbered criterion correctly, and fixing that habit early is what keeps the Personal Project journal from turning into a frantic last-month write-up.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects run in parallel over two years, with roughly half stretched to Higher Level and the remainder kept at Standard, and three fixed extras sit alongside them regardless of subject choice: a course interrogating how knowledge gets justified in the first place, an independent essay of about four thousand words, and teacher-assessed coursework in every subject that later goes to an external moderator. Everything converges on one worldwide exam window in May.",
      countryNote:
        "With no Diploma school inside Jhansi, practically every enquiry we get is a continuation case rather than a fresh start, a Class 11 or 12 student who began the Diploma at a previous station and needs Maths, the sciences or English A kept moving rather than dropped mid-course.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Aimed at a student who wants something more vocational alongside academic depth, it wraps two or more full Diploma subjects around a work-linked study, a structured skills component and a shorter reflective piece instead of the Extended Essay. Very few Indian schools run it at all, so where it does show up, the borrowed Diploma subjects still need teaching at full Diploma weight.",
      countryNote:
        "We hear about CP from Jhansi only occasionally, since almost nothing in the wider region offers it, but on the rare occasion a previous posting's school did, tutoring narrows straight down to whichever Diploma subjects the student carried across.",
    },
  ],

  subjectsIntro:
    "Two students both labelled 'IB Maths' in Jhansi can be preparing for entirely different exams depending on whether their school entered them for Analysis and Approaches or Applications and Interpretation, so the exact code and level comes first, always, ahead of the word 'IB' itself. Internal Assessment stage and the exam series a school has actually entered a student for come next, and only after both of those does a workable evening slot get discussed.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Students arriving from a CBSE background tend to be sharp on algebraic manipulation and shaky on proof, and that gap is exactly what widens once Paper 3's open-ended questions appear; picking an exploration topic in Class 11 rather than Class 12 leaves room to abandon a weak one." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Real data sets, statistical modelling and a graphic calculator used without hesitation carry most of this course, and the exploration tends to suffer most when it is squeezed into the final fortnight rather than planned from early on." },
    { name: "IB Physics", levels: "HL / SL", description: "Six wide-ranging topic areas eventually funnel into one skill the exam actually rewards, a method that can survive a marker questioning it, which is the real test behind the internal Scientific Investigation regardless of how the practical itself turned out." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Time spent on structure and bonding early on only shows its value once organic chemistry and energetics land in Class 12, at which point a student either reaches for the data booklet automatically or is still searching it mid-question." },
    { name: "IB Biology", levels: "HL / SL", description: "By the time a mock paper goes badly, most students already know the biology; what actually costs marks is answering a command term the question did not ask, plus statistics too thin to support an investigation's own conclusion." },
    { name: "IB Economics", levels: "HL / SL", description: "A slightly wrong diagram costs more here than an argument that wobbles, and Higher Level candidates specifically need repeated timed drilling on the policy-evaluation style Paper 3 leans on." },
    { name: "IB Business Management", levels: "HL / SL", description: "Marks go to a named theory bent to fit the case actually printed on the page rather than recited in the abstract, and the Business Research Project falls apart without a genuine organisation willing to be interviewed." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Three fairly distinct skills get graded here: cold analysis of a text seen for the first time, a comparison sustained across two studied works, and enough spoken confidence to survive the Individual Oral's follow-up questions." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Long before object-oriented design trips anyone up, tracing pseudocode by hand catches most students out, and the actual coding for the Internal Assessment usually finishes well ahead of the written documentation that has to accompany it." },
    { name: "IB Psychology", levels: "HL / SL", description: "Citing studies accurately across the biological, cognitive and sociocultural approaches only gets a student halfway there; the rest depends on structuring a long extended-response answer clearly enough that an examiner never has to re-read a paragraph." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "A student who can describe a system in detail still trails one who can evaluate it honestly, and that willingness to weigh evidence rather than list it tends to be the real line between a middling grade and a strong one." },
    { name: "IB Geography", levels: "HL / SL", description: "Named case studies do more work than general theory ever will, a workable fieldwork investigation needs planning well before the write-up begins, and evaluative rather than purely descriptive answers tend to score noticeably better." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 rewards weighing a source's reliability over merely summarising it, while Paper 2 rewards whoever can carry one argument cleanly across a considerably longer essay without losing the thread halfway through." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "This is closer to conversation than lecture, stress-testing an exhibition commentary out loud and pushing a student to argue a prescribed title from an angle they had not originally considered." },
  ],

  igcseSubjectsIntro:
    "Cambridge 0580 Extended and Edexcel 4MA1 Higher share the IGCSE label but not much of their exam technique, so the board, code and tier get settled before anything else. After that, the actual exam series a Jhansi student is entered for decides the shape of the plan, Cambridge's May-June or October-November window, or Edexcel's January or May-June sitting, and whether an IB Diploma is the next step afterwards.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "The non-calculator questions are where a genuinely capable Extended student throws away the most avoidable marks, usually because working was left out rather than because the maths itself was beyond them." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Taking this on means an early, real encounter with calculus and vectors, which is exactly why it tends to be the gentlest possible run-up into IB Maths AA HL a couple of years later." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "The underlying topics barely differ from Cambridge's, but a student who has only ever seen Cambridge-style questions often freezes the first time Edexcel phrases the same idea, and that is unfamiliarity rather than a genuine content gap." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging an equation quickly under time pressure matters more than memorising extra formulae, and the alternative-to-practical paper rewards a student who has genuinely pictured the apparatus rather than only read a description of it." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations decide the paper's outcome well before organic chemistry gets a look in, and treating the alternative-to-practical questions as their own skill, not a footnote to revise last, tends to lift a grade fastest." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Inheritance and genetics questions turn up in some form almost every session, and a student who can write a properly shaped extended response consistently beats one who simply holds more facts in their head." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "A clean, correctly labelled diagram earns quick marks, but the longer evaluative question tucked at the end of a paper is usually the part Core-tier preparation leaves thinnest." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Working through a piece of pseudocode by hand, one line at a time, exposes far more misunderstanding than reading theory does, and pairing that habit with real Python practice rather than theory alone is what actually shifts a grade." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Summary writing and directed writing both need to be taught as skills rather than left to instinct, and timed reading of a genuinely unfamiliar passage under pressure is the closest thing to real exam rehearsal." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "A well-written but generic answer scores poorly here; marks sit with whoever bends a named theory to fit the exact business scenario the question describes, not the theory recited on its own." },
  ],

  regionsTitle: "Jhansi areas our online IB and IGCSE tutors reach",
  regionsIntro:
    "Since every lesson in Jhansi runs online, these localities matter less as travel destinations and more as a snapshot of who lives where, which board the nearby schools follow, and what usually squeezes or frees up an evening slot once the season or a posting's demands enter the picture.",
  regions: [
    { name: "Civil Lines", note: "Sits close to the collectorate at the centre of town; an older mix of CBSE and ICSE schools, and one of the more common addresses among families weighing a move into IGCSE." },
    { name: "Sipri Bazar", note: "Dense and commercial, within easy reach of Jhansi Junction; a frequent first stop for railway families still unpacking after a transfer." },
    { name: "Elite Crossing (Elite Chauraha)", note: "A busy junction that doubles as the city's mental reference point, surrounded by coaching centres built for board exams rather than anything IB or IGCSE." },
    { name: "Jhansi Cantonment", note: "The Army's base in the city; most enquiries from here are continuity requests for a syllabus a child was already partway through at a previous station." },
    { name: "BHEL Township, Bangra", note: "A company-planned residential area for Bharat Heavy Electricals Limited engineers, whose fixed-tenure, transferred lifestyle looks a lot like the cantonment's." },
    { name: "Gwalior Road", note: "Runs out past Rani Lakshmi Bai Central Agricultural University toward Gwalior; one of the newer, fast-growing residential stretches in the city." },
    { name: "Nawabad", note: "An older, settled residential pocket nearer the historic core, mostly State Board and CBSE households by default." },
    { name: "Sadar Bazar", note: "A historic commercial quarter close to the fort, with long-established schools and a noticeably slower rhythm than the newer parts of town." },
    { name: "Prem Nagar", note: "Popular with government and public-sector staff, many of whom are themselves on a fixed-term posting of some kind." },
    { name: "Talpura and Baragaon", note: "The university side of the city, close to Bundelkhand University, with a fair number of faculty and postgraduate-student households." },
  ],

  schoolDisclaimer:
    "Every school and university named on this page either shows where Jhansi families actually study or marks the nearest place a confirmed IB or IGCSE option exists; treat none of it as a partnership. There is no contract, arrangement or endorsement between IB Gram and any institution listed here, and none either with the International Baccalaureate, Cambridge Assessment International Education, or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Nearby: Bhopal",
      note: "About 285 kilometres away by road, Bhopal is the closest place carrying a full confirmed IB continuum alongside Cambridge IGCSE, which is why a handful of Jhansi families weigh it for boarding.",
      schools: ["Eastern Public School, Bhopal (IB PYP, MYP and Diploma Programme, plus Cambridge IGCSE at Class 9-10)"],
    },
    {
      city: "Nearby: Lucknow",
      note: "Roughly 400 kilometres from Jhansi, Uttar Pradesh's own state capital holds a long-running Cambridge campus that some Bundelkhand families look at for boarding.",
      schools: ["City Montessori School, Cambridge Campus (Cambridge IGCSE and A Level)"],
    },
    {
      city: "Nearby: Gurugram and Delhi NCR (boarding)",
      note: "For a family willing to consider a full boarding move rather than a shorter relocation, Gurugram and the wider NCR carry easily the largest cluster of established IB and IGCSE schools that Bundelkhand families end up shortlisting.",
      schools: ["Pathways World School, Aravali", "The Shri Ram School, Aravali", "GD Goenka World School"],
    },
  ],

  modesIntro:
    "Whatever the pace, a Jhansi lesson always looks the same underneath: video call, one student, one tutor based somewhere in India, running on IST. The three options below differ mainly in rhythm, an ongoing weekly habit, a supported drift through the term, or a short, harder push right before an exam. None of the three involves anyone knocking on a door in Jhansi; that particular format exists only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "A steady weekly slot",
      description:
        "The default for most families: the same hour, the same tutor, week after week, fitted around Jhansi school hours and, for cantonment or BHEL households, around whatever a posting's own schedule allows.",
      bullets: [
        "Tutor choice is never capped by who happens to be teaching in the city",
        "Works equally for DP, MYP and IGCSE subjects",
        "Past papers get marked on the shared screen, not emailed back later",
        "A child keeps the same tutor rather than starting over each term",
      ],
    },
    {
      title: "A running commentary through the term",
      description:
        "For a family that wants visibility more than intensity: regular lessons plus a short line after each one on what was covered, useful when a household relocating mid-year needs a clear picture of where things actually stand.",
      bullets: [
        "A brief summary lands after every lesson, not just at report time",
        "Pace gets reset every few weeks rather than left on autopilot",
        "Suits younger PYP and MYP learners especially well",
        "A second slot slots in easily once mocks approach",
      ],
    },
    {
      title: "A short, harder push before the exam",
      description:
        "Two to four sessions a week for a defined stretch, built entirely around timed papers and quick correction, scheduled with one eye on Jhansi's punishing pre-monsoon stretch and whatever the school calendar allows around it.",
      bullets: [
        "Every paper attempted is timed and marked to the current syllabus",
        "Corrections come back inside a couple of days, not weeks later",
        "Sessions shift earlier in the day once the heat peaks",
        "Best booked two or three weeks out from the exam itself",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families in Jhansi",
      paragraphs: [
        "As far as we can confirm, no school physically inside Jhansi teaches the IB or a Cambridge or Edexcel IGCSE syllabus. Recognisable names in the city, several tied to the cantonment, the railways or long-running convent institutions such as St. Mark's and St. Francis' Convent, run CBSE, ICSE or the Uttar Pradesh State Board, and that covers the overwhelming majority of students here.",
        "The households that still end up searching for IB and IGCSE tutors in Jhansi cluster into a handful of patterns: an Army officer's child continuing a syllabus started at a previous posting, an engineer's family newly arrived at the BHEL unit in Bangra, a railway officer rotated through the divisional headquarters, or occasionally a family choosing to build the qualification around a tutor rather than wait for a local school to introduce it.",
        "No local school teaching these syllabuses also means no local bench of tutors who have taught them recently. That is the actual gap online matching fills: rather than trawling Civil Lines or Sipri Bazar hoping to find someone willing to attempt IB Chemistry HL cold, a Jhansi family can reach a tutor anywhere in the country who has genuinely taught that exact course before.",
        "None of this leaves a Jhansi student at a disadvantage once matched properly. The syllabus content, the assessment criteria and the exam calendar are identical to what a student in Delhi or Mumbai sits, and a tutor who knows the live specification closely can prepare a Jhansi student to the same standard as one working from a city with schools of its own.",
      ],
      table: {
        caption: "Nearest confirmed IB and IGCSE options to Jhansi",
        columns: ["Location", "School", "Curriculum"],
        rows: [
          ["Bhopal (approx. 285 km)", "Eastern Public School", "IB PYP, MYP, DP and Cambridge IGCSE"],
          ["Lucknow (approx. 400 km)", "City Montessori School, Cambridge Campus", "Cambridge IGCSE and A Level"],
          ["Gurugram/Delhi NCR (approx. 400-420 km, boarding)", "Pathways World School, Shri Ram School Aravali, GD Goenka World School", "IB and Cambridge IGCSE"],
        ],
      },
      bullets: [
        "No confirmed IB or Cambridge/Edexcel IGCSE school currently operates inside Jhansi",
        "Most enquiries trace back to an Army, BHEL or railway posting mid-course",
        "A near-empty local tutor bench is exactly what makes online matching worthwhile here",
        "Grading standards and exam windows are the same as anywhere else in India",
      ],
    },
    {
      heading: "How is IB or IGCSE different from CBSE, ICSE and the UP State Board?",
      paragraphs: [
        "IB and IGCSE ask a student to explain and justify a method, where the CBSE, ICSE and Uttar Pradesh State Board syllabuses most Jhansi students grow up on tend to reward accurate recall against a familiar question format. A student who can reproduce a State Board method fast may still drop marks on an IGCSE Extended question that shifts the context slightly, or an IB Paper 2 question that demands a justified choice of method rather than a straightforward application of one.",
        "The clearest gap sits in internal assessment. CBSE and the State Board do carry some internally marked work, but IB Internal Assessments and IGCSE coursework are considerably more detailed, graded against explicit criteria, and expect a kind of independent planning that a board-exam education in Jhansi rarely trains for. A student switching in at Grade 9 or Class 11 usually needs direct, explicit teaching in planning, drafting and revising this sort of work rather than being left to work it out alone.",
        "Subject depth diverges too. IB Higher Level Maths and the sciences push noticeably past State Board or CBSE content at the same age, IGCSE Core tier lands close to CBSE difficulty, and Extended tier sits above it. Getting the tier right at Grade 9 matters because it effectively sets a ceiling that only a harder, later catch-up can raise.",
        "None of this means IB or IGCSE is uniformly harder. Families already used to a posting disrupting an academic year sometimes find the coursework-heavy, criteria-based rhythm of IB and IGCSE easier to build a transfer around than a single high-stakes board exam that cannot move.",
      ],
      table: {
        caption: "CBSE, ICSE, UP State Board and IB/IGCSE, side by side",
        columns: ["What changes", "CBSE / State Board", "ICSE", "IB / IGCSE"],
        rows: [
          ["How a strong answer is built", "Accurate reproduction of a known method", "Thorough coverage of a detailed syllabus", "A method justified and applied to a new context"],
          ["Weight given to coursework", "Small", "Some, exam-linked", "A fifth to a third of the mark in most IB subjects; core to IGCSE"],
          ["Where the qualification travels", "Accepted across Indian institutions", "Accepted across Indian institutions", "Accepted by universities well beyond India"],
          ["Usual Jhansi entry point", "From the earliest school years", "From the earliest school years", "Grade 9 or Class 11, often triggered by a posting"],
        ],
      },
      bullets: [
        "IB and IGCSE mark justification and application, State Board and CBSE mostly mark recall",
        "Coursework is heavier and more tightly criteria-marked under IB and IGCSE",
        "The Grade 9 tier decision quietly sets a later grade ceiling",
        "A posting-driven switch is manageable once command words and IA planning are taught directly",
      ],
    },
    {
      heading: "What does an IB or IGCSE tutor cost for a Jhansi family?",
      paragraphs: [
        "What a Jhansi family pays reflects the programme and level, the subject itself, how long each session runs and how recently a tutor has actually taught that specific syllabus, rather than any published rate card. Higher Level Diploma subjects tend to sit above MYP or IGCSE Core work simply because fewer tutors nationally are currently teaching them. Whatever figure applies to your match gets confirmed before the trial class starts, with no surprise addition later.",
        "Every lesson in Jhansi happens online, so there is nothing added for travel, which keeps the number more stable than it would be if a tutor were driving across town. A specialist logging in from Pune, Chennai or Kolkata charges a Jhansi family exactly what they would charge anyone else.",
        "The hourly figure alone tells you less than what actually happens inside the hour. A tutor who has taught IGCSE 0620's alternative-to-practical questions or marked against IB Maths AI HL's exploration criteria moves a student further in one session than two spent re-explaining ground a previous school already covered. It is worth asking directly what a session will work through and how that gets reported back.",
        "Nothing here locks a family in. Progress gets reviewed every few weeks rather than assumed, a session can be paused if a posting order lands unexpectedly, and if the first match is not right, we look again rather than asking a family to make do with it.",
      ],
      bullets: [
        "Rate reflects programme, level, subject and session length, not a fixed price list",
        "No travel cost is ever folded in; every session is online",
        "Your specific rate is confirmed before the trial, not adjusted after",
        "Nothing is locked in; sessions can pause around a posting change without penalty",
      ],
    },
    {
      heading: "How does online tutoring compare with Jhansi's coaching classes, home tutors and self-study?",
      paragraphs: [
        "What passes for coaching culture in Jhansi is built almost entirely around board exams and entrance preparation, JEE, NEET and NDA rather than anything international. A batch designed to drill CBSE Class 10 boards has no reason to also cover IGCSE 0580 Extended or IB Chemistry HL, so a student on either syllabus gets nothing usable from the city's coaching centres, however good those centres are at their actual job.",
        "Home tutors do exist across Civil Lines, Sipri Bazar and the cantonment area, but with no school in the city teaching these syllabuses, almost none of them have taught IB or IGCSE recently, if at all. A generalist working from a State Board textbook can still build a student's confidence and discipline, just not their familiarity with current mark schemes.",
        "Self-study can carry a strongly self-directed student through a subject with clear, accessible past papers, IGCSE Mathematics being a fair example, but it tends to fall apart around Internal Assessment planning, Extended Essay structure and the specific extended-response style IB and IGCSE examiners look for. Left unsupervised, most students under-practise precisely the skills that separate a mid-range grade from a strong one.",
        "Online one-to-one tutoring is really the only route in Jhansi that closes both gaps at once, reaching syllabus-specific depth no coaching batch offers locally while giving a student the individual attention self-study cannot provide.",
      ],
      table: {
        caption: "What each option can realistically offer a Jhansi student",
        columns: ["Option", "Can it teach this exact syllabus?", "How much individual attention?", "The honest limitation in Jhansi"],
        rows: [
          ["Coaching batches", "No, built for boards and entrance exams", "Group, minimal", "No batch anywhere in the city runs IB or IGCSE content"],
          ["Local home tutors", "Rarely", "One to one", "Very few have taught the syllabus recently, if ever"],
          ["Self-study alone", "Only up to a point", "None", "Weak on IAs, coursework and extended-response writing"],
          ["Online IB/IGCSE tutor", "Yes, matched to the exact code and tier", "One to one", "None; effectively the only real specialist route from Jhansi"],
        ],
      },
      bullets: [
        "Jhansi's coaching centres are built for boards and entrance exams, not IB or IGCSE",
        "The local home-tutor pool has almost no one who has taught these syllabuses",
        "Self-study alone tends to under-serve IAs, coursework and extended response",
        "Online matching is, practically speaking, the only path to a genuine specialist here",
      ],
    },
    {
      heading: "Jhansi's exam calendar: heat, festivals and when to start",
      paragraphs: [
        "Bundelkhand's summers are among the harshest in north India, and April and May in Jhansi routinely push past 43 to 45 degrees Celsius right when local schools are still finishing their own year-end internal exams. Sessions built around that heat, shorter and earlier in the day through the worst weeks, tend to hold up far better than a plan that tries to power through it unchanged.",
        "The IB Diploma's main exams sit in May, with results out in early July and a further sitting in November for anyone retaking. Cambridge IGCSE runs its two series in May-June and October-November; Edexcel IGCSE runs in January and May-June. Diwali and Holi both genuinely disrupt the school year across Uttar Pradesh, and a plan that pretends otherwise tends not to survive contact with the actual calendar.",
        "For DP students in Jhansi, most of whom arrived mid-course, the real pressure points are the first internal exams of Class 11, a string of Internal Assessment deadlines through Class 12, predicted grades issued that autumn for university applications, and mock exams ahead of May. Starting the following April or July of Class 11 gives enough runway to close gaps before any of these land.",
        "IGCSE students face their own version of this: the Grade 10 tier decision and school mocks come first, and the six to eight weeks directly before the external series is where focused revision genuinely pays off. Even a family starting as late as January for a May-June sitting can still make real progress with an honest plan.",
      ],
      table: {
        caption: "Jhansi's IB and IGCSE season at a glance",
        columns: ["Period", "What is happening", "What it means for tutoring"],
        rows: [
          ["April to June", "Bundelkhand's harshest heat, school year-end exams", "Sessions move earlier and shorter rather than longer"],
          ["May to June", "IB DP exams, Cambridge IGCSE main series", "Focused past-paper blocks in the run-up"],
          ["August to October", "Monsoon, Dussehra, mid-year school assessments", "Occasional connectivity dips; buffer time built in"],
          ["November to December", "Diwali, Cambridge retake series, winter fog sets in", "A useful stretch for catch-up or retake work"],
        ],
      },
      bullets: [
        "Peak heat and school year-end exams overlap directly in April and May",
        "IB DP sits its main series in May and retakes in November",
        "Cambridge IGCSE runs May-June and October-November; Edexcel runs January and May-June",
        "Diwali and Holi both meaningfully reshape the school calendar in Uttar Pradesh",
      ],
    },
    {
      heading: "Where do Jhansi's IB and IGCSE students go after school?",
      paragraphs: [
        "From here, students finishing the IB Diploma or an IGCSE-into-DP path scatter in several directions: engineering and agricultural sciences close to home, national entrance exams, or an undergraduate degree abroad. Bundelkhand University and Bundelkhand Institute of Engineering and Technology both sit inside the city, and Rani Lakshmi Bai Central Agricultural University, a national agricultural university on Gwalior Road, gives the region a specific academic strength that most Indian cities its size simply do not have.",
        "For engineering or medical entrance in India, an IB or IGCSE qualification needs Association of Indian Universities equivalence, and JEE or NEET eligibility depends on holding the right subjects at the right level. Given how many Jhansi households are Army-linked, an interest in the National Defence Academy route sitting alongside a child's mainstream IB or IGCSE subjects is genuinely common, though that particular preparation falls outside what an IB or IGCSE tutor takes on.",
        "For applications abroad, predicted grades issued in the autumn of Class 12 carry real weight, since a university sees them well before any final result exists. UK offers usually come stated as a total IB point score with Higher Level subject minimums; US admissions weigh predicted grades as one part of a fuller application; other countries apply their own conversion rules entirely.",
        "IB Gram tutors keep to the academic half of this: subject teaching, predicted-grade improvement and exam technique. We are happy to explain what a target course typically expects subject and level-wise, so the time spent tutoring in Jhansi goes toward whatever actually shifts the outcome.",
      ],
      bullets: [
        "Bundelkhand University, BIET Jhansi and Rani Lakshmi Bai Central Agricultural University anchor local higher education",
        "AIU equivalence and the right subject levels matter directly for JEE and NEET eligibility",
        "NDA interest is common among Army-linked families but sits outside what tutoring covers",
        "Autumn predicted grades carry real weight for applications abroad",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the sciences, for Jhansi students",
      paragraphs: [
        "Analysis and Approaches suits a student heading toward engineering, physical science or economics-heavy courses, and its Higher Level Paper 3 rewards exactly the unfamiliar problem-solving that a State Board-trained local tutor pool in Jhansi rarely gets the chance to practise. Applications and Interpretation leans into statistics, modelling and confident calculator use instead, and its exploration usually suffers from a late start rather than any real gap in ability.",
        "Physics at Higher Level needs fluent data-booklet use, tight pacing across both written papers, and a Scientific Investigation built around a method that can actually withstand questioning, not a repeated version of a standard textbook experiment. Chemistry HL leans heavily on organic mechanisms and energetics once the early structure and bonding units are behind a student, and both subjects benefit enormously from a tutor marking against the real IB rubric instead of a generic science standard.",
        "Biology students most often need help converting solid content knowledge into the precise wording IB extended-response questions actually reward, along with enough statistics to make an investigation's conclusion defensible under scrutiny. Across all three sciences, Jhansi students switching in from CBSE or the State Board generally know the material; what they lack is the command-word precision IB marking specifically checks for.",
        "Given how thin the local pool of tutors is for any of this, an online specialist matched precisely to the level and current specification is, in practice, the fastest way for a Jhansi student to close these gaps, rather than a generalist improvising from whichever textbook happens to be nearby.",
      ],
      bullets: [
        "AA suits proof-heavy, calculus-driven routes; AI suits statistics and modelling",
        "A defensible Scientific Investigation sits at the centre of both Physics and Chemistry HL",
        "Biology depends on command-term precision as much as raw content knowledge",
        "CBSE and State Board switchers usually know the material but miss the command-word precision",
      ],
    },
    {
      heading: "IGCSE Core versus Extended, and subject choices in Jhansi",
      paragraphs: [
        "Cambridge IGCSE's Core and Extended tiers cap two different grade ranges, and getting that choice right at Grade 9 matters more for a Jhansi student than it might in a city with an IB school to compare against, since the tier decision alone effectively sets how steep the eventual jump into DP sciences or maths will feel if that route is chosen later.",
        "Extended-tier Mathematics 0580, taken alongside Additional Mathematics 0606 wherever a previous school offered it, builds the smoothest possible run-up to IB Maths AA HL. Extended-tier sciences do something similar for DP Physics or Chemistry HL, since their content depth already sits close to what the Diploma assumes from day one.",
        "Edexcel IGCSE students with a Jhansi connection, usually through a school at a previous posting, need a tutor who genuinely knows how Edexcel's Foundation and Higher tiers word questions differently from Cambridge's; the underlying mathematics overlaps heavily, but the exam technique really does not.",
        "On subject choice more broadly, a Jhansi-based family rarely gets to pick from a local school's own subject list, so tutoring generally has to work around whatever combination a previous or planned school actually offers rather than an ideal one assembled from scratch.",
      ],
      bullets: [
        "The Grade 9 Core versus Extended decision affects both the grade ceiling and later DP readiness",
        "Additional Mathematics 0606 is the gentlest bridge toward IB Maths AA HL",
        "Edexcel's exam technique differs from Cambridge's even where the content overlaps",
        "Subject choice in Jhansi is usually inherited from a school elsewhere, not chosen freely",
      ],
    },
  ],

  tutorsIntro:
    "Browse tutors who teach across IB PYP, MYP and Diploma subjects, plus Cambridge or Edexcel IGCSE, for families connected to Jhansi. Every match is weighed against the exact syllabus, level and exam session a child is entered for, since every one of these lessons runs live on a screen rather than in a room.",

  process: [
    { title: "Tell us the situation", description: "Programme or board, subject and level, current or predicted grade, and anything a posting or transfer is doing to your timing." },
    { title: "Receive a shortlist", description: "Tutors are matched on syllabus fit first, since there is no local bench to draw on in Jhansi, with a plain explanation of why each one fits." },
    { title: "Sit in on a free lesson", description: "Your child works through a genuine topic with the tutor online, at no cost, before anyone commits to anything." },
    { title: "Sign off on a first-month plan", description: "The tutor lays out topics, a session rhythm and how progress will be reported; you approve it or ask for it to change." },
    { title: "Settle into a rhythm, then review", description: "Regular online lessons at a fixed slot, checked in on every few weeks, with a new match found quickly if the fit stops working." },
  ],

  whyPoints: [
    { title: "Matched on syllabus, not a label", description: "A tutor is chosen against the exact IB subject and HL or SL level, or the specific IGCSE board, code and tier, never a generic 'IB tutor' tag." },
    { title: "Built for a city without an option of its own", description: "With no confirmed IB or IGCSE school in Jhansi, matching reaches across India rather than staying limited to whoever happens to live here." },
    { title: "A real lesson before any commitment", description: "Your child meets the tutor on an actual topic first, so the decision rests on what you both saw rather than a written profile." },
    { title: "Academic integrity is not negotiable", description: "Tutors guide Internal Assessments, coursework and the Extended Essay, but drafting any of it themselves is off the table entirely." },
    { title: "Progress stays visible", description: "A short update after each session and a proper check-in every few weeks, which matters as much for tracking a posting as it does for tracking grades." },
    { title: "No ties, no lock-in", description: "Independent of any school or exam board, with no long contract and a straightforward re-match whenever something is not working." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Jhansi?", answer: "Tell IB Gram your child's IB programme, subject, level and exam session, and we shortlist tutors who genuinely teach that course. With no confirmed IB school inside Jhansi itself, the match is built purely on syllabus fit rather than geography, and we then fit the lesson time around your household's own schedule. A free trial lesson comes before any decision, and we find someone else if the first match is not right." },
    { question: "Do you offer IGCSE home tutors in Jhansi for Cambridge and Edexcel?", answer: "Yes, for both Cambridge and Pearson Edexcel, delivered as online home tuition rather than a visit to your door. Cambridge students are matched by their exact code and tier, Mathematics 0580 Extended or Physics 0625 Core for instance, and Edexcel students by specification and Foundation or Higher tier, each taught against that board's own past papers and mark schemes." },
    { question: "Do your tutors visit homes in Jhansi?", answer: "No. In-person home tuition is something IB Gram runs only in Gurugram and parts of Delhi NCR; everywhere else, Jhansi included, lessons happen as live online home tuition, one to one, over video with a shared drawing surface. It is genuine online private tuition delivered at home, not a promise that anyone will turn up at your door." },
    { question: "What does an IB or IGCSE tutor cost in Jhansi?", answer: "It depends on the programme, level, subject, session length and how recently the tutor has taught that exact syllabus, and we confirm the figure for your specific match before the trial begins. Higher Level Diploma subjects tend to cost more than MYP or IGCSE Core work. Nothing is added for travel since every session is online, and there is no long contract holding you in, so pausing or stopping is straightforward." },
    { question: "Are there any IB or IGCSE schools in Jhansi?", answer: "Not that we can confirm; the city's well-known schools run CBSE, ICSE or the Uttar Pradesh State Board. Families who do need IB or IGCSE support in Jhansi usually arrived there through a posting from elsewhere, or are weighing the nearest confirmed alternatives in Bhopal, Lucknow, or Gurugram and Delhi NCR for boarding." },
    { question: "My child started IB or IGCSE at a previous posting. Can a Jhansi-based tutor keep it going?", answer: "Yes, and this is one of the more common reasons Jhansi families reach out, given how many arrive through an Army, BHEL or railway posting. A tutor is matched to the exact syllabus, level and board your child was already following, so the work already done stays intact rather than getting lost in the move." },
    { question: "Is there a free trial class before I commit?", answer: "Yes, every match opens with a free trial lesson. Your child works through a genuine topic from their own syllabus with the tutor online, with nothing charged and no obligation attached. The tutor then shares a short first-month plan, and you decide whether to continue, adjust it, or try someone else." },
    { question: "Can a tutor help with IB Internal Assessments for a Jhansi student?", answer: "Yes, within limits. A tutor can help choose a workable research question, unpack what each assessment criterion is actually asking for, plan data collection and give honest feedback on drafts. Writing or rewriting any part of the assessed work itself would breach IB academic integrity rules, so that request is always declined." },
    { question: "Which IB Diploma subjects can you help with in Jhansi?", answer: "The requests we see most from Jhansi's small DP-connected population cover Maths Analysis and Approaches and Applications and Interpretation at both HL and SL, Physics, Chemistry, Biology, Economics, Business Management and English A, alongside Theory of Knowledge and the Extended Essay, and we match tutors across the wider subject list too." },
    { question: "Do you tutor IB MYP and PYP students in Jhansi, not only the Diploma?", answer: "Yes, right across the continuum. MYP support for Jhansi students tends to focus on criterion-based analysis in the sciences and humanities and on building a Personal Project journal properly. PYP support covers reading, writing, number sense and Exhibition research skills, usually through short, regular online sessions." },
    { question: "Is online tutoring effective for IB or IGCSE students in Jhansi given there is no local school?", answer: "It works well precisely because there is no local specialist pool to fall back on otherwise. A shared drawing surface, screen-shared past papers and recorded worked examples cover almost everything a tutor sitting physically beside your child would normally provide, while opening the choice of tutor to specialists anywhere in India instead of whoever happens to live nearby." },
    { question: "How are IB Gram tutors verified for Jhansi students?", answer: "Tutors are checked on qualifications, recent teaching experience with the exact subject and level, and how they approach assessment criteria, before ever being introduced to a family. Since Jhansi has no local school running these syllabuses, we specifically look for tutors who have taught it recently elsewhere rather than a generalist willing to attempt it. The free trial lesson then lets you judge the fit yourself." },
    { question: "When should my child in Jhansi start IB or IGCSE tutoring?", answer: "Ideally at the start of the course itself, Class 11 for the Diploma and Grade 9 for IGCSE, which leaves time to fix foundations before internal exams, IA deadlines and predicted grades all land. A family arriving mid-posting or already in the final year can still make genuine progress, with tutoring aimed squarely at the highest-value topics and past papers before the exam." },
    { question: "My child is switching from CBSE or the State Board to IB or IGCSE while we are in Jhansi. Can a tutor help?", answer: "Yes, and it happens often, since nothing local offers that route directly. The gap is usually in question style rather than content, command words such as 'explain', 'evaluate' and 'justify' need direct teaching, alongside new habits around planning Internal Assessments or coursework, ideally starting the summer before the switch." },
    { question: "Can sessions happen on weekends or after school hours in Jhansi?", answer: "Yes, most families here book weekday evenings after school or weekend mornings. Sessions shift earlier through Bundelkhand's April-June heat when families prefer it, and we plan around Diwali and Holi rather than through them. Adding a second weekly slot ahead of mocks or an exam series is straightforward online." },
    { question: "What happens if we are not happy with the tutor matched for our child in Jhansi?", answer: "Tell us, and we will find someone else. Progress gets reviewed with families every few weeks, and we re-match whenever the fit is genuinely wrong rather than expecting a child to push through it. There is no long contract, so pausing or stopping is always available, which matters if a posting changes plans again." },
    { question: "Is IB Gram affiliated with any Jhansi school, the Army, or with the IB or Cambridge?", answer: "No. IB Gram operates independently and is not affiliated with, endorsed by, or representing any Jhansi school, the Indian Army, the International Baccalaureate, Cambridge Assessment International Education, or Pearson Edexcel. Institution names on this page simply describe where Jhansi families actually study, and tutors work to each school's own calendar and the relevant board's published syllabus." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How IB and IGCSE tutoring works across Indian cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "Where IB Gram's in-person home tuition is actually available." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP works: HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, the Personal Project and eAssessment explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP units of inquiry and the Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation, explained." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial class." },
    { label: "IB and IGCSE tutoring in Gwalior", href: "/gwalior/", description: "Tutor matching for the nearest large city to Jhansi." },
    { label: "IB and IGCSE tutoring in Agra", href: "/agra/", description: "Tutor matching for Agra families on the same Delhi-Bundelkhand rail corridor." },
    { label: "IB and IGCSE tutoring in Kanpur", href: "/kanpur/", description: "Tutor matching for Kanpur families elsewhere in Uttar Pradesh." },
    { label: "IB and IGCSE tutoring in Lucknow", href: "/lucknow/", description: "Tutor matching for Uttar Pradesh's state capital, and its Cambridge campus." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor for your Jhansi family",
  closingBody:
    "Send across the programme or board, the subject and level, your child's current grade, and whatever a posting or transfer is doing to your timing. What comes back is a shortlisted tutor, their teaching background, and trial slots that actually fit your week, delivered online and one to one, with nothing charged and nothing owed. Reach us at ibgram24@gmail.com or on WhatsApp at +91 7439 368 115.",
};
