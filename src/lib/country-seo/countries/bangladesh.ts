import type { CountrySeoPage } from "../types";

/**
 * Bangladesh - https://www.ibgram.com/bangladesh/
 *
 * Hand-authored country landing page. Delivery to Bangladesh families is ONLINE only;
 * nothing here may imply in-person tutoring inside Bangladesh.
 * Named schools appear as ecosystem context only - no affiliation is implied.
 */
export const bangladesh: CountrySeoPage = {
  slug: "bangladesh",
  countryName: "Bangladesh",
  countryNameLong: "the People's Republic of Bangladesh",
  demonym: "Bangladeshi",
  flagCode: "bd",
  countryCode: "BD",
  region: "South Asia",
  timezoneLabel: "Bangladesh Standard Time (UTC+6)",
  schedulingNote: "Weekday evenings and weekend mornings in Bangladesh Standard Time",
  lastUpdated: "2026-09-14",

  title: "IB & O/A Level Tutors in Bangladesh | Online Tutoring",
  metaDescription: "Online tutors for O Level, A Level, IGCSE and IB students in Bangladesh. One-to-one coaching booked in Bangladesh Standard Time for Dhaka families.",
  h1: "Online IB, IGCSE and O/A Level tutors for students studying in Bangladesh",
  heroEyebrow: "ONLINE TUTORING FOR FAMILIES IN BANGLADESH",
  heroSubtitle: "English-medium education in Bangladesh runs mostly on Cambridge and Edexcel O Level and A Level rather than the IB, with a small number of schools also authorised for the Diploma Programme. We match your child to a tutor who already teaches that exact board, subject and paper, on a video call booked for a Bangladesh evening rather than fitted around a tutor's convenience elsewhere.",
  primaryKeyword: "IB tutors in Bangladesh",
  imageAltText: "Online tutor and a Dhaka student working through an O Level chemistry past paper together on a shared screen",
  secondaryKeywords: [
    "IGCSE tutors in Bangladesh",
    "O Level tutor Dhaka",
    "A Level tutor online Bangladesh",
    "IB tutor Dhaka",
    "Cambridge tutor Bangladesh",
    "Edexcel tutor Dhaka",
    "online tutor Gulshan Baridhara",
    "IB DP tutor Bangladesh",
    "O Level equivalence Bangladesh",
    "A Level tutor Chattogram",
    "online IGCSE tutor Sylhet",
    "Bangla A Literature IB tutor",
  ],

  heroTrustPoints: [
    "Booked for evenings in Bangladesh Standard Time (UTC+6), after school and any coaching-centre classes finish.",
    "Coverage for Cambridge and Edexcel O Level, AS/A Level and IGCSE, plus IB PYP, MYP and DP at Bangladesh's handful of IB schools.",
    "Tutors who know the equivalence-certificate route Bangladeshi O/A Level students need for local university admission.",
    "Matched to the exact subject, board and paper your child's Dhaka, Chattogram or Sylhet school sets.",
  ],
  heroStats: [
    { value: "UTC+6", label: "Bangladesh Standard Time, 30 minutes ahead of India" },
    { value: "SSC & HSC", label: "National exams most English-medium families also track" },
    { value: "O & A Level", label: "The dominant English-medium route in Bangladesh" },
    { value: "1:1", label: "Default format: one student, one tutor" },
  ],

  intro: {
    heading: "Who we tutor in Bangladesh: O Level, A Level, IGCSE and IB students",
    paragraphs: [
      "Most of the families we work with in Bangladesh are on the Cambridge or Edexcel path — O Level around Grade 10, then AS and A Level over the following two years — rather than the IB, which only a handful of Dhaka schools currently offer. That single fact changes almost everything about how tutoring gets structured here compared with a country where the IB dominates: subject choices are made earlier, exams are sat as individual papers rather than a diploma, and a Bangladeshi university application usually runs through an equivalence certificate rather than a direct read of the transcript.",
      "A second, smaller group studies the IB itself, at one of the small number of schools authorised for the Primary Years, Middle Years or Diploma Programme in Dhaka. These families often arrive with very specific questions — how Bangla fits into the Diploma's language requirement, whether a Bangladeshi passport holder needs anything extra for local recognition — that a tutor unfamiliar with Bangladesh has no reason to know the answer to.",
      "Whichever track your child is on, the moments that bring families to us are similar. A student's O Level results come back a grade lower than the mocks suggested, and Additional Mathematics or Chemistry needs steady weekly attention rather than a last-minute push. An A Level subject chosen for a specific university course — often Accounting, Economics or a science — turns out to need far more paper practice than a full class timetable leaves room for. A coursework or internal-assessment component sits unmarked because a teacher with dozens of students hasn't reached it yet.",
      "Every one of these sessions runs online, on video, scheduled to Bangladesh Standard Time. We don't place tutors inside homes in Bangladesh — that arrangement exists only for families in India, where our tutors are based. What we do instead is match your child to someone who has taught that specific board and paper before, whether that's Edexcel International GCSE Mathematics A or Cambridge A Level Accounting, and build the sessions around whatever your child's own teacher has already marked.",
      "You get a short message after each lesson on what was covered, and a straightforward path to a different tutor if the current match isn't clicking. There's no long contract to sign upfront — a first lesson comes before any commitment, so you and your child can judge the fit before deciding on a regular weekly slot.",
    ],
    bullets: [
      "Delivered entirely online, timed to Bangladesh Standard Time; in-home tutoring is a separate service offered only in India.",
      "Covers Cambridge and Edexcel O Level, AS/A Level and IGCSE, plus IB PYP, MYP and DP at Bangladesh's IB-authorised schools.",
      "Sessions are planned around your child's actual coursework — the last paper, the current topic, the assignment still unmarked.",
      "A first lesson at no cost, a note after every session, and an easy switch to a different tutor if needed.",
    ],
  },

  programmesIntro: "IB Gram covers all four IB programmes for the small number of Bangladesh schools authorised to teach them, and treats O Level and A Level with the same level of subject-specific matching even though they sit outside the IB's own programme structure. Here's how each IB stage lands for a Bangladesh-based family, alongside what O and A Level actually demand at the equivalent ages.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Ages 3-12 · Classes 1-5",
      description: "PYP is built around units of inquiry rather than a fixed subject list, so support at this age is usually reading fluency, number sense and the structured writing a unit of inquiry asks for, plus help preparing a simple research question ahead of the Grade 5 Exhibition.",
      countryNote: "PYP is offered at only a few Dhaka schools, so families switching in from a mainstream English-medium primary programme sometimes need a short settling-in period on inquiry-based tasks that look quite different from the memorisation-heavy homework a Bangladeshi primary curriculum typically sets.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Ages 11-16 · Classes 6-10",
      description: "MYP grades against criteria on a 0-8 scale across eight subject groups, a structure with no real equivalent in a Bangladeshi English-medium report card built around O Level target grades. We work on criterion language and the extended writing MYP expects, alongside the Personal Project in Year 5.",
      countryNote: "Because most Bangladeshi schools run straight from a primary programme into O Level rather than through MYP, a student moving into an MYP school from that background often needs a short bridge on inquiry-based assessment before the criteria stop feeling arbitrary.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Ages 16-19 · Classes 11-12",
      description: "Six subjects across Higher and Standard Level, plus Theory of Knowledge, the Extended Essay and CAS. Tutoring focuses on HL depth, the internal assessments, and the three supervisor check-ins the Extended Essay requires.",
      countryNote: "Bangladesh's DP schools sit the May session. For a Bangladeshi national, Bangla is a genuine option for the Language A requirement — usually school-supported self-taught, since few DP schools staff a full Bangla-medium literature class — and worth discussing with the school before defaulting to English A.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Ages 16-19 · Classes 11-12",
      description: "CP pairs at least two DP subjects taught to full DP standard with a career-related study and a core of Personal and Professional Skills, Service Learning, language development and the Reflective Project.",
      countryNote: "CP is not currently offered at Bangladesh's IB schools, so students interested in a career-related route alongside strong academic subjects more often combine A Level with a vocational or professional qualification instead — we can tutor either combination.",
    },
  ],

  subjectsIntro: "In Bangladesh's English-medium system, the exam board and paper code matter as much as the subject name — Cambridge O Level Additional Mathematics (4037) is a different exam from Edexcel International GCSE Mathematics A, and a tutor who only knows one will teach the wrong technique for the other. Sessions run online, booked to Bangladesh Standard Time, and follow whichever board your child's school actually enters them for.",
  subjects: [
    { name: "Mathematics", levels: "O Level (4024/4037) · IGCSE (0580) · A Level (9709) · IB AA/AI", description: "We start from whichever paper your child sits — O Level Mathematics D, Additional Mathematics, or the IGCSE equivalent — and work through the exact past-paper style rather than a generic maths curriculum. A Level Mathematics and IB AA/AI sessions build on that same foundation with calculus and mechanics or statistics options." },
    { name: "Physics", levels: "O Level (5054) · IGCSE (0625) · A Level (9702) · IB", description: "Mechanics, waves and electricity taught through worked problems rather than copied notes, with real attention on the practical paper and data-handling questions, which is where Bangladesh O Level candidates most often lose marks despite knowing the theory." },
    { name: "Chemistry", levels: "O Level (5070) · IGCSE (0620) · A Level (9701) · IB", description: "The calculation-heavy sections — moles, titrations, equilibrium — get broken into a method a student can repeat under exam pressure, and organic chemistry at A Level gets the mechanism practice a crowded classroom rarely has time for." },
    { name: "Biology", levels: "O Level (5090) · IGCSE (0610) · A Level (9700) · IB", description: "We drill the structured-response technique O Level and A Level Biology papers reward, and work on the extended-answer and evaluation skills that separate a B from an A at A Level." },
    { name: "Additional Mathematics", levels: "O Level (4037) · IGCSE (0606)", description: "A separate, harder paper many Bangladeshi students take alongside standard Mathematics to strengthen a university application in engineering or the sciences — we treat it as its own subject rather than an extension of ordinary maths, since the algebra and calculus demands are genuinely different." },
    { name: "Accounting", levels: "O Level Principles of Accounts (7110) · A Level Accounting (9706)", description: "A staple of Bangladesh's commerce stream, tested through structured problems on ledgers, financial statements and ratio analysis. Tutoring focuses on the layout examiners expect and the recurring question types that reward careful, methodical practice." },
    { name: "Economics", levels: "O Level (2281) · IGCSE (0455) · A Level (9708) · IB", description: "Micro and macro theory taught through diagrams and evaluation writing, with the case-study and data-response questions Bangladesh's commerce-stream students see most often on both O and A Level papers." },
    { name: "Business Studies", levels: "O Level (7115) · IGCSE (0450) · A Level (9609)", description: "Real business cases, including ones familiar from Bangladesh's garments, banking and services sectors, ground the units on marketing, finance and operations, with A Level work adding the evaluative depth O Level doesn't ask for." },
    { name: "English A: Language & Literature", levels: "O Level First Language English (1123) · IGCSE · IB", description: "Close reading, comprehension technique and directed writing for O Level, extended into IB's comparative and global-issue framing for the small number of Bangladesh students on the Diploma track." },
    { name: "English as a Second Language", levels: "O Level ESL (3245) · IGCSE", description: "For students whose stronger language is Bangla, built around the listening, structured-writing and oral components that ESL papers test separately from First Language English." },
    { name: "Bangla A: Literature", levels: "IB HL · SL, school-supported self-taught", description: "Since Bangladesh's IB schools rarely staff a dedicated Bangla-medium literature class, this usually runs as a school-supported self-taught Language A. It's a strong option for a Bangladeshi national confident in Bangla, and one families often don't realise the school will support." },
    { name: "ICT & Computer Science", levels: "O Level Computer Science (2210) · IGCSE (0478) · A Level (9618)", description: "Programming logic, algorithms and system fundamentals for the written papers, plus structured practice for the practical coding component where one is assessed." },
    { name: "History", levels: "O Level (2059) · IGCSE (0470)", description: "Source-based questions and depth studies, often on South Asian or twentieth-century world history options, with a focus on the source-evaluation technique that carries real marks on these papers." },
    { name: "Psychology", levels: "IB HL · SL", description: "For the small number of Bangladesh DP students taking it: biological, cognitive and sociocultural approaches taught through the actual studies a student needs to cite, since there is no Cambridge O Level Psychology to build on first." },
  ],

  regionsTitle: "Cities and school communities across Bangladesh",
  tutorsIntro: "The tutors shortlisted below teach on Bangladesh Standard Time, so an evening slot in Dhaka lines up with a normal working evening on their side too.",
  regionsIntro: "Bangladesh sits in a single time zone, roughly half an hour ahead of India, and does not observe daylight saving, so a booked evening slot stays fixed all year. Most families choose a window after school and any coaching-centre classes finish, typically between 6 and 9pm Bangladesh Standard Time, with weekend mornings as a second option before exams.",
  regions: [
    { name: "Gulshan & Baridhara, Dhaka", note: "Dhaka's diplomatic and expatriate-heavy neighbourhoods host some of the country's longest-running English-medium and IB-authorised schools, serving both foreign-passport and Bangladeshi families on O, A Level and IB tracks." },
    { name: "Dhanmondi & Mohammadpur, Dhaka", note: "An older, dense residential area with a wide spread of English-medium schools and coaching centres, drawing students who commute in from across the city for specific subject reputations." },
    { name: "Uttara & Banani, Dhaka", note: "A growing northern belt of Dhaka with newer English-medium campuses and multiple Scholastica-style school branches, popular with families who want an O/A Level school closer to home than the older southern neighbourhoods." },
    { name: "Mirpur, Dhaka", note: "A large residential zone with several English-medium branches serving middle-income families on the O and A Level track, where specialist subject tutoring outside school hours is in particularly high demand." },
    { name: "Chattogram (Chittagong)", note: "Bangladesh's second city has an established Cambridge-curriculum sector built around long-running grammar-style schools, serving the port city's business community on both O and A Level." },
    { name: "Sylhet", note: "A region with strong ties to the UK diaspora, where Cambridge and Edexcel English-medium schools have grown to serve both local families and those with relatives abroad planning a UK-facing education route." },
    { name: "Khulna", note: "A smaller English-medium market than Dhaka or Chattogram, where specialist subject teachers for Additional Mathematics or A Level sciences are harder to find locally, which is exactly the gap online tutoring is built to close." },
    { name: "Rajshahi", note: "A university city with a modest but established English-medium sector; families here often combine school coaching-centre classes with online subject tutoring for O and A Level papers." },
  ],

  schoolDisclaimer: "IB Gram is an independent tutoring service. The schools named on this page are listed only to show the curriculum landscape families in Bangladesh study within. We are not affiliated with, endorsed by, partnered with or authorised by any school named here, or by the International Baccalaureate Organization, Cambridge International or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Dhaka — IB schools",
      note: "Dhaka's small IB-authorised sector draws both expatriate families and Bangladeshi nationals building toward university abroad. Requests here concentrate on HL sciences, the Extended Essay, and Bangla A as a self-taught language option.",
      schools: [
        "American International School Dhaka (AISD)",
        "International School Dhaka (ISD)",
        "The Aga Khan School, Dhaka",
      ],
    },
    {
      city: "Dhaka — Cambridge & Edexcel schools",
      note: "The much larger English-medium sector across Gulshan, Baridhara, Dhanmondi and Uttara runs on O and A Level, where requests centre on Additional Mathematics, Chemistry and Accounting ahead of exam series.",
      schools: [
        "Scholastica",
        "Sunnydale School",
        "Academia School Dhaka",
        "Mastermind English Medium School",
      ],
    },
    {
      city: "Chattogram",
      note: "Chattogram's Cambridge-curriculum schools serve the port city's business and professional families, with steady demand for A Level Business, Economics and Accounting support alongside O Level sciences.",
      schools: [
        "Chittagong Grammar School",
        "Sunshine Grammar School",
        "CIDER International School",
        "International Hope School Bangladesh, Chattogram",
      ],
    },
    {
      city: "Sylhet, Khulna & Rajshahi",
      note: "Outside Dhaka and Chattogram, specialist subject teachers for O and A Level sciences and Additional Mathematics are scarcer, so families in these cities lean more heavily on online tutoring to fill gaps a smaller local staff room can't cover.",
      schools: [
        "Sylhet International School and College",
        "Royal Institute of Smart Education (RISE), Sylhet",
        "International Grammar School, Khulna",
        "Paramount School and College, Rajshahi",
      ],
    },
  ],

  modesIntro: "All tutoring for Bangladesh families is delivered over video with a shared on-screen workspace — we do not send tutors into homes inside Bangladesh. Your child keeps the same tutor from one session to the next, and you can move between the three formats below as exam season approaches or eases off.",
  modes: [
    {
      title: "One-to-one sessions",
      description: "A single tutor working through exactly what your child needs — an Additional Mathematics past paper, an Accounting question type that keeps costing marks, an unfinished IB internal assessment. The lesson follows your child's own school materials rather than a fixed outside syllabus, usually in 60 or 90-minute blocks.",
      bullets: [
        "A weekly slot fixed in Bangladesh Standard Time, agreed before the first lesson.",
        "Built from your child's own past papers, homework and teacher feedback.",
        "A brief written summary after each session so progress is visible without sitting in.",
        "The usual choice for O and A Level exam preparation, IB IA coaching, and mid-year transfers.",
      ],
    },
    {
      title: "Small groups",
      description: "Two to four students on the same paper share one tutor, which works well for subjects like Business Studies or Economics where comparing answers to a case study sharpens everyone's evaluation writing. Groups are formed by subject, board and level, and cost less per head than one-to-one.",
      bullets: [
        "Groups of two to four matched on exam board, subject and level.",
        "Well suited to essay and case-study subjects where discussion helps more than solo revision.",
        "A lower per-student rate, with the same tutor and slot held week to week.",
        "Easy to move a student to one-to-one if the group's pace stops suiting them.",
      ],
    },
    {
      title: "Exam-season intensives",
      description: "A concentrated run of extra sessions in the weeks before O Level, A Level or SSC/HSC-adjacent deadlines, working through timed past papers and mark schemes rather than new content. Feedback on each timed attempt comes back within days, not weeks.",
      bullets: [
        "Timed past-paper practice marked to the actual board's scheme, with quick turnaround.",
        "Timed to Cambridge and Edexcel's May/June and October/November series.",
        "Runs through school breaks and weekends as well as weekday evenings.",
        "Best booked several weeks ahead, since exam-season evening slots fill quickly.",
      ],
    },
  ],

  sections: [
    {
      heading: "O Level, A Level, IGCSE and the IB in Bangladesh: who studies what",
      paragraphs: [
        "English-medium education in Bangladesh has grown up almost entirely around the Cambridge and Edexcel system rather than the IB. A student typically sits O Level papers around Class 10, then moves into AS and A Level over the following two years — a subject-by-subject structure, not a fixed diploma. The IB exists in Bangladesh too, but only at a small number of Dhaka schools authorised for one or more of its four programmes, so it remains a minority path chosen deliberately rather than the default English-medium route.",
        "This matters for tutoring because the two systems ask for genuinely different support. O and A Level students need board-specific past-paper technique — a Cambridge paper and an Edexcel paper on the same subject are not interchangeable in structure or command words — while the IB's smaller Bangladesh cohort needs help with internal assessments, Theory of Knowledge and the Extended Essay alongside subject content.",
        "Bangladesh's own national system runs alongside both: the Secondary School Certificate (SSC) around Class 10 and the Higher Secondary Certificate (HSC) around Class 12, sat in Bangla by students in Bangla-medium schools under one of several regional education boards. English-medium O/A Level students sit outside this system entirely for their qualification itself, which is precisely why the equivalence-certificate process described later on this page exists.",
        "Families choose English-medium schooling in Bangladesh for a mix of reasons — a university application abroad, a curriculum that reads well to foreign admissions offices, or simply continuing what an older sibling already started. Whatever the reason, the practical need is the same: a tutor who knows the specific board, paper code and exam series your child is actually preparing for, not general exam coaching.",
        "Every session we run for a Bangladesh-based family happens online, timed to Bangladesh Standard Time so a lesson lands in the evening rather than at an inconvenient hour. We do not place tutors inside homes in Bangladesh; that model exists only for families based in India.",
      ],
      bullets: [
        "Cambridge and Edexcel O Level and A Level are the dominant English-medium route in Bangladesh; the IB is offered at only a handful of Dhaka schools.",
        "SSC and HSC are Bangladesh's own national exams, sat separately by Bangla-medium students under regional education boards.",
        "O/A Level students need board-specific technique; a small IB cohort needs internal assessment, TOK and Extended Essay support.",
        "English-medium schooling in Bangladesh sits outside the national qualification system, which is why an equivalence step exists for local university entry.",
        "Delivery for Bangladesh families is online only, timed to Bangladesh Standard Time.",
      ],
    },
    {
      heading: "Bangladesh's SSC/HSC vs Cambridge/Edexcel O and A Level vs the IB",
      paragraphs: [
        "The Secondary School Certificate and Higher Secondary Certificate are Bangladesh's own board exams, sat in Bangla (with an English version option at some schools) under one of the country's regional education boards — Dhaka, Chattogram, Rajshahi and others. Results are graded on a GPA scale out of 5, and SSC and HSC together form the direct route into Bangladeshi public university admission for students who sat them.",
        "Cambridge and Edexcel O Level cover similar ground to SSC in terms of student age, but are sat subject by subject in English, externally set and marked by the UK-based boards rather than a Bangladeshi one. A Level, taken over the two years after O Level, plays the same role as HSC in terms of timing but again as an externally-set qualification. Neither O Level nor A Level is, by itself, an SSC or HSC equivalent for Bangladeshi admissions purposes — that conversion has to be done explicitly.",
        "The IB Diploma sits apart from both: a fixed two-year package of six subjects at Higher or Standard Level plus Theory of Knowledge, the Extended Essay and CAS, graded 1 to 7 per subject with 45 points available overall, and read directly by universities outside Bangladesh without the equivalence step O/A Level students need domestically.",
        "The table below sets out how the three actually compare on the details a family needs before choosing a route — the exam format, how it's graded, and what happens next. None is inherently the stronger choice; a lot depends on whether the plan is a Bangladeshi public university, one abroad, or genuinely keeping both open.",
        "One point worth flagging: a student who studies entirely in English through O and A Level, with Bangla only as a subject rather than a medium of instruction, may find some Bangladeshi degree programmes taught partly in Bangla harder to enter smoothly than one taught in English — worth checking against a specific university's programme requirements rather than assuming.",
      ],
      bullets: [
        "SSC and HSC are Bangladesh's own board exams, graded on a GPA-out-of-5 scale and taken by Bangla-medium students.",
        "O Level and A Level are externally set by Cambridge or Edexcel and are not automatically SSC/HSC equivalents for local admission.",
        "The IB Diploma is graded 1-7 per subject, 45 points maximum, and is read directly by universities abroad.",
        "None of the three routes is objectively better — the right one depends on the target university and country.",
        "Check a specific Bangladeshi degree programme's language of instruction before assuming an English-medium background transfers smoothly.",
      ],
      table: {
        caption: "Bangladesh's SSC/HSC vs Cambridge/Edexcel O & A Level vs the IB Diploma",
        columns: ["Track", "SSC / HSC (national boards)", "Cambridge/Edexcel O & A Level", "IB Diploma Programme"],
        rows: [
          ["Exam structure", "SSC around Class 10, HSC around Class 12, set by a regional Bangladeshi board", "O Level around Class 10, then AS/A Level over two more years, set by Cambridge or Edexcel", "Six subjects across two years, externally examined plus internal assessment"],
          ["Grading", "GPA out of 5, per subject and combined", "A*-G at O Level/A Level, or 9-1 for some IGCSE syllabuses", "1-7 per subject, 45 points maximum with the diploma"],
          ["Language of instruction", "Bangla, with an English version at some schools", "English", "English, or Bangla A as a self-taught language alongside an English-taught programme"],
          ["Local recognition", "Direct entry to Bangladeshi public university admission", "Needs an equivalence certificate for Bangladeshi public university admission", "Read directly by universities abroad; needs equivalence for Bangladeshi public university admission"],
        ],
      },
    },
    {
      heading: "Do Bangladeshi students at English-medium schools still need Bangla and Bangladesh Studies?",
      paragraphs: [
        "Yes, in a defined way: English-medium schools in Bangladesh generally teach Bangla language and Bangladesh Studies as subjects within the school timetable from the primary years through to O Level, even though the main qualification a student sits is set by Cambridge or Edexcel. Bangla is typically offered as one of the O Level subject options, assessed on reading and writing rather than the fuller range a Bangla-medium student's own SSC Bangla paper would cover.",
        "How much weekly time this takes varies by school, and it's worth asking directly rather than assuming a fixed number, since some schools treat it as a light addition and others give it real timetable weight through the middle years. Where a student later drops formal Bangla study after O Level, there is no A Level continuation of the subject in the Cambridge or Edexcel system, so language practice essentially stops at that point unless a family arranges it separately.",
        "For a Bangladeshi national on the IB track at one of Dhaka's authorised schools, this plays out differently: Bangla can be offered as a genuine Language A option for the Diploma, usually as a school-supported self-taught course, which keeps a mother-tongue subject inside the qualification rather than treating Bangla only as a lighter secondary subject the way O Level does.",
        "None of this changes what our subject tutoring actually covers — we teach the O Level, A Level, IGCSE or IB syllabus itself. Where a family specifically wants stronger Bangla literacy alongside the English-medium coursework, that's a separate, narrower need worth naming clearly when you get in touch, since it calls for a different kind of tutor than an O Level Physics or A Level Accounting specialist.",
        "If you're choosing between schools, or wondering whether your child's Bangla will be strong enough for family, cultural or later professional reasons, ask the specific school how Bangla and Bangladesh Studies are timetabled and assessed at each stage — the answer differs enough between schools that a general rule isn't reliable.",
      ],
      bullets: [
        "English-medium schools generally teach Bangla and Bangladesh Studies as subjects, with Bangla often sat as an O Level option.",
        "There is no A Level continuation of Bangla in the Cambridge or Edexcel system, so formal study usually stops after O Level.",
        "Bangla A: Literature is a genuine self-taught Language A option at Bangladesh's IB schools.",
        "Our subject tutoring covers the O Level, A Level, IGCSE or IB syllabus itself, not general Bangla literacy support.",
        "Ask each school directly how Bangla and Bangladesh Studies are timetabled, since this varies meaningfully between schools.",
      ],
    },
    {
      heading: "How are O Level, A Level and IB results recognised for university entry in Bangladesh and abroad?",
      paragraphs: [
        "For universities outside Bangladesh, O Level, A Level and IB results are read directly, in the same way they would be for any other applicant — no Bangladeshi paperwork is normally needed for an application made from abroad. This direct readability is a major reason families choose the English-medium or IB route when the plan is a university overseas.",
        "For admission to a Bangladeshi public university, O and A Level results need to be converted through an equivalence certificate, issued by the relevant Education Board's equivalence committee (commonly coordinated through the Dhaka Education Board). The process assigns the student to a group — Science, Business or Humanities, based on the subjects taken — and converts the O/A Level results into an equivalent SSC/HSC-style GPA out of 5, which the university admission process then uses alongside its own entry test or merit criteria.",
        "The table below outlines the typical shape of that process. Treat it as a general guide rather than a substitute for the board's current instructions, since document requirements and processing windows are set by the board and can be updated between admission cycles.",
        "IB Diploma results are read directly by universities abroad without needing this equivalence step, since the IB itself is an internationally recognised qualification; a Bangladeshi IB graduate applying to a Bangladeshi public university, however, would still need to go through a comparable recognition process, so check the specific university's rules for IB applicants before assuming either way.",
        "Whichever path applies, keep the paperwork organised well before any application deadline: original certificates and statements of results, subject transcripts, and passport or birth-registration documents the equivalence application asks for. Assembling this after results day under deadline pressure is far harder than keeping it filed as each exam series finishes.",
      ],
      bullets: [
        "O Level, A Level and IB results are read directly by universities abroad, without Bangladeshi paperwork.",
        "Bangladeshi public university admission on O/A Level results generally requires an equivalence certificate converting them to a GPA-out-of-5 scale.",
        "The equivalence process sorts students into a Science, Business or Humanities group based on subjects taken.",
        "IB results are recognised abroad directly, but a Bangladeshi IB graduate applying locally should still confirm the university's own recognition process.",
        "Keep certificates, transcripts and identity documents filed as each exam series finishes, not assembled under deadline pressure later.",
      ],
      table: {
        caption: "Typical steps to get O/A Level results recognised for Bangladeshi university admission",
        columns: ["Step", "What happens", "Who submits it"],
        rows: [
          ["1. Sit and receive results", "Complete O Level and/or A Level with an authorised Cambridge or Edexcel centre in Bangladesh", "School or exam centre"],
          ["2. Choose a subject group", "Select Science, Business or Humanities based on the subjects taken", "Family or student"],
          ["3. Apply for the equivalence certificate", "Submit certificates, transcripts and identity documents to the relevant Education Board's equivalence committee", "Family or student"],
          ["4. Use the GPA-equivalent result", "The converted GPA accompanies the university application alongside original O/A Level transcripts", "University admissions office"],
        ],
      },
    },
    {
      heading: "O Level and A Level exam series, coursework and the run-up to results in Bangladesh",
      paragraphs: [
        "Cambridge and Edexcel both run two main exam series each year that Bangladesh schools use: a May/June series and an October/November series, giving students a second attempt within the same academic year that Bangladesh's own SSC/HSC calendar doesn't offer in the same way. Which series a given school enters students for varies, and some subjects carry coursework or practical components — sciences, ICT, some language papers — assessed partly inside the school and moderated externally.",
        "For O Level, the run-up typically means past-paper practice across Classes 9 and 10, with mock exams set by the school in the months before the real series. A Level compresses more pressure into a shorter window: AS content in the first year, A2 content in the second, often with the university application process (for a foreign university) running in parallel with the second year's coursework and revision.",
        "For the small number of Bangladesh students on the IB Diploma, the May session is the relevant calendar, with internal assessments, the Extended Essay and TOK components clustering in the months beforehand, following broadly the same rhythm as any other IB school on the northern-hemisphere calendar, adjusted for whatever the individual Dhaka school sets as its own internal deadlines.",
        "Coursework and practical components deserve particular attention because they're graded differently from a written exam — a science practical or an ICT project is marked against a rubric the school applies and Cambridge or Edexcel moderates, so understanding exactly what that rubric rewards matters as much as technical skill. Tutoring here often means reading the mark scheme with the student and pointing out precisely where a draft is losing marks against it.",
        "Because timing varies by school and even by subject, the most useful single step for a family is getting a written confirmation from the school of which series each subject is entered for, and when internal deadlines for coursework or practical write-ups actually fall — then building the tutoring calendar backward from those specific dates rather than a generic exam-season assumption.",
      ],
      bullets: [
        "Cambridge and Edexcel run a May/June and an October/November series; check which one each of your child's subjects is entered for.",
        "Some O Level and A Level subjects carry coursework or practical components marked in-school and moderated externally.",
        "IB Diploma students in Bangladesh sit the May session, with IA and Extended Essay deadlines clustering beforehand.",
        "Understanding a coursework mark scheme matters as much as subject skill for practical and project-based components.",
        "Get exam-series and internal-deadline confirmation from the school in writing, and plan tutoring backward from those dates.",
      ],
      table: {
        caption: "Typical exam calendar for Bangladesh-based English-medium and IB students",
        columns: ["Qualification", "Typical exam window", "Results", "Who usually sits it"],
        rows: [
          ["Cambridge/Edexcel O Level & IGCSE", "Main May/June series; October/November as a second series at many schools", "August for May/June; January for October/November", "Students at Bangladesh's English-medium schools, roughly Class 10"],
          ["Cambridge/Edexcel A Level", "Main May/June series; October/November at some schools", "August for May/June; January for October/November", "Students in the two years after O Level"],
          ["IB Diploma Programme", "May session, on the northern-hemisphere calendar", "Early July", "Students at Bangladesh's IB-authorised schools"],
        ],
      },
    },
    {
      heading: "Which subjects and levels should a Bangladeshi student choose?",
      paragraphs: [
        "Subject choice at O Level in Bangladesh tends to be made with one eye on the A Level combination it leads to, and A Level choice, in turn, is usually made with a specific degree in mind — Accounting and Economics for business school, Mathematics and Physics for engineering, the three sciences for medicine. Deciding the intended direction before locking in O Level options avoids the common problem of a strong student discovering at sixteen that they dropped a subject their preferred A Level combination actually needs.",
        "Additional Mathematics is worth a specific mention because it's easy to underrate. It isn't simply 'harder ordinary maths' — it tests different technique, particularly in algebra and calculus foundations, and a student planning A Level Mathematics or a numerate degree benefits from taking it at O Level rather than meeting that content for the first time at AS.",
        "For the small number of families on the IB track, the Bangla-versus-English-A decision matters more than it might first appear. A confident Bangla reader and writer often does better with Bangla A as a self-taught Language A than forcing English A: Language & Literature, which assumes a level of English literary analysis that not every strong Bangladeshi student has been taught explicitly, even if their spoken and written English is otherwise excellent.",
        "Accounting and Business Studies are worth choosing deliberately rather than by default. They reward methodical, well-laid-out answers more than raw creativity, which makes them a strong option for a student who is diligent but not naturally drawn to essay-writing subjects — and Bangladesh's active commerce and banking sector gives these subjects genuine local relevance beyond the exam itself.",
        "Whatever the combination, tutoring works best when it starts from the actual paper code and the school's own past assessments rather than a generic subject overview — a session built around your child's real mark scheme and recent results closes gaps faster than broad revision of the whole syllabus.",
      ],
      bullets: [
        "Choose O Level subjects with the intended A Level combination already in mind, not one exam stage at a time.",
        "Additional Mathematics is a genuinely different paper from ordinary Mathematics, not just a harder version of it.",
        "A confident Bangla reader may do better with Bangla A self-taught than forcing English A: Language & Literature.",
        "Accounting and Business Studies suit a methodical student and connect directly to Bangladesh's active commerce sector.",
        "Start tutoring from your child's actual paper code and recent mark scheme, not a generic subject overview.",
      ],
    },
    {
      heading: "How online tutoring works across Bangladesh Standard Time",
      paragraphs: [
        "Every booking is set in Bangladesh Standard Time, not ours. Our tutors work from India, only thirty minutes behind Bangladesh, which makes scheduling unusually simple — an evening slot in Dhaka lines up almost exactly with the same evening hour for a tutor in India. Most families book weekday evenings from around 6 to 9pm, plus weekend mornings before an exam series, and every confirmation states the full date and time so there's no ambiguity.",
        "A first lesson is used to find out where your child actually stands, not to launch straight into new content: the tutor works through a couple of past-paper questions with the student narrating their reasoning, and identifies where marks are genuinely being lost. From there, sessions typically run 60 minutes for routine subject maintenance or 90 minutes for coursework and heavier past-paper work, usually weekly, rising to twice weekly as an exam series approaches.",
        "Lessons run on video with a shared on-screen workspace — maths and science sessions use it for worked equations and diagrams, essay-based subjects use a shared document with inline comments. Past papers and mark schemes are annotated live during the lesson and saved somewhere your family can revisit. A laptop or tablet with a stable connection and a headset covers what's needed; a phone works for a quick catch-up but isn't ideal for anything requiring sustained diagram or equation work.",
        "The single most useful thing you can share with us is your child's own school material — the syllabus code, recent mock papers, marked coursework, teacher comments — because tutors then use the same terms and mark scheme language your child's own teacher applies, rather than a generic outside standard that might not match what the school actually rewards.",
        "You'll get a short note after each lesson on what was covered and what to work on before the next one, plus a broader check-in every few weeks. Tutors go through a vetting step on subject knowledge and teaching background before ever being matched with a student, and a parent is always welcome to stay in the room, particularly for younger students. Starting with a single trial lesson, before agreeing to anything ongoing, is the sensible way to check the fit.",
      ],
      bullets: [
        "Bookings run on Bangladesh Standard Time, which is only thirty minutes offset from a tutor's working hours in India.",
        "Weekday evenings and weekend mornings before exams are the standard windows families use.",
        "A shared on-screen workspace, a laptop and a stable connection are all that's needed for most subjects.",
        "Share your child's syllabus code, recent papers and teacher comments so feedback matches how the school actually marks.",
        "Start with a single trial lesson, bringing recent marked work, before committing to a regular weekly schedule.",
      ],
    },
  ],

  process: [
    { title: "Tell us the board, subject and level", description: "A short message covering whether your child is on Cambridge or Edexcel, O Level, A Level, IGCSE or the IB, the specific subject, and the exam series they're entered for is usually all we need to start finding the right tutor." },
    { title: "We match on the exact paper, not the subject name", description: "The shortlist is built around the specific paper code and board — O Level Additional Mathematics is not the same job as IGCSE Mathematics — so you see a tutor's relevant teaching background before anything is booked." },
    { title: "A free first lesson, timed to your evening", description: "Run over video with a shared workspace, in a Bangladesh Standard Time evening slot. Your child works through something real, and you get a short assessment afterward of where the gaps are." },
    { title: "Agree a plan around your child's exam calendar", description: "Once the fit looks right, the schedule is built around the actual series and internal deadlines your child's school has set. You choose how often to meet and pay per session or in a block, with no long-term contract." },
    { title: "Track progress and switch tutors if needed", description: "Notes arrive after every lesson, with a deeper check-in every few weeks against how your child is tracking toward the exam. If a pairing genuinely isn't working, tell us and we'll move your child to someone else." },
  ],

  whyPoints: [
    { title: "Matched to the exact board and paper", description: "Cambridge and Edexcel are not interchangeable, and O Level Additional Mathematics is a different job from IGCSE Mathematics. Matching runs on board, subject, level and paper code together, so the first lesson doesn't start from the wrong assumption." },
    { title: "Built around Bangladesh Standard Time", description: "A thirty-minute offset from India means evening bookings for Bangladesh families land at a genuinely convenient hour for both sides, not a compromise squeezed into either schedule." },
    { title: "We understand the equivalence-certificate route", description: "Families weighing O/A Level against Bangladesh's own SSC/HSC system get tutoring that's planned with the eventual university application in mind, not just the next exam in isolation." },
    { title: "Coverage from O Level through to the IB Diploma", description: "The great majority of Bangladesh's English-medium students are on Cambridge or Edexcel, with a small IB-authorised sector in Dhaka alongside it. One provider covers both, so a family doesn't need to search separately if a child changes school or track." },
    { title: "Coursework help that stays inside the rules", description: "IB internal assessments, the Extended Essay, and O/A Level coursework and practicals all carry academic honesty requirements. Coaching covers method and technique, never the finished piece of work itself." },
    { title: "Vetted tutors, judged by your child first", description: "Every tutor is checked on subject knowledge and teaching background before being matched, and the first lesson exists specifically so your child can judge whether the teaching style actually suits them before anything is booked further." },
  ],

  faqs: [
    {
      question: "How do I find a good O Level or A Level tutor in Bangladesh?",
      answer: "Start with the exact board — Cambridge or Edexcel — the subject, and the level your child is actually sitting, rather than a general search for 'a maths tutor'. Message ibgram24@gmail.com or +91 7439 368 115 on WhatsApp with your child's school, current results and where the difficulty sits, and we'll come back with a suggested tutor matched to that specific paper.",
    },
    {
      question: "Do you tutor IB students in Bangladesh as well as O and A Level?",
      answer: "Yes. Bangladesh has a small number of schools authorised for the IB's Primary Years, Middle Years and Diploma Programmes, mostly in Dhaka, and we tutor all four programmes alongside the much larger Cambridge and Edexcel O/A Level sector. Tell us which programme and subject your child is on and we'll match accordingly.",
    },
    {
      question: "Can lessons be scheduled in Bangladesh Standard Time?",
      answer: "Yes — every session is booked and confirmed in Bangladesh Standard Time (UTC+6), which is only thirty minutes ahead of India, so evening slots work comfortably for both your child and the tutor. Bangladesh doesn't observe daylight saving, so the schedule stays fixed throughout the year once agreed.",
    },
    {
      question: "Do English-medium students in Bangladesh still need to study Bangla?",
      answer: "Generally yes — Bangla and Bangladesh Studies are typically taught as subjects within English-medium schools, with Bangla often sat as an O Level option assessed on reading and writing. There's no A Level continuation of Bangla in the Cambridge or Edexcel system, so ask your specific school how it's timetabled at each stage, since practice differs between schools.",
    },
    {
      question: "How much does tutoring cost in Bangladesh, and how do we pay?",
      answer: "Rates depend on the board, subject, level and how many weekly hours you book — A Level sciences and Additional Mathematics typically sit above younger O Level support. We confirm a per-hour rate in writing before booking anything, so there's no surprise on the first invoice. Email ibgram24@gmail.com with your child's grade, board and subject for a current quote, and we'll confirm currency and payment method at the same time.",
    },
    {
      question: "Do you have in-person tutors in Bangladesh?",
      answer: "No — inside Bangladesh, tutoring is delivered online only. Home visits are a service we offer solely in India, where our tutors are based. For Bangladesh families that means live video lessons with a shared workspace, screen-sharing for past papers, and a written summary after each one, which works well for subjects like Additional Mathematics or Bangla A that a smaller local school can't always staff a specialist for.",
    },
    {
      question: "How are O Level and A Level results recognised for Bangladeshi university admission?",
      answer: "They generally need to go through an equivalence-certificate process with the relevant Education Board, which converts O/A Level results into an SSC/HSC-style GPA out of 5 after sorting the student into a Science, Business or Humanities group. This is separate from applying to a university abroad, where O/A Level and IB results are typically read directly with no local conversion needed.",
    },
    {
      question: "Can O Level or A Level results get my child into a university outside Bangladesh?",
      answer: "Yes — Cambridge and Edexcel qualifications are widely recognised, and universities abroad read A Level results directly as admissions evidence, the same as they would for a student from the UK or another Commonwealth country. No Bangladeshi equivalence step is needed for an application made to a foreign university; that step matters only for admission inside Bangladesh.",
    },
    {
      question: "Can a tutor help with my child's coursework or IB internal assessment?",
      answer: "Yes, within clear limits. A tutor can explain the mark scheme, help structure a response, test whether an argument or calculation actually holds up, and comment on a draft your child produced themselves. What a tutor won't do is write or rewrite the piece that then gets submitted as your child's own — the finished work has to be genuinely theirs, and the school's own guidance always takes priority over ours.",
    },
    {
      question: "Do you tutor Additional Mathematics specifically?",
      answer: "Yes, and we treat it as its own subject rather than an extension of ordinary Mathematics, since the algebra and calculus foundations it tests are genuinely different. It's a common choice for Bangladeshi students planning A Level Mathematics or a numerate degree, and we match students with a tutor who has taught that specific paper before.",
    },
    {
      question: "Which exam series does my child sit — May/June or October/November?",
      answer: "It depends on the school. Most Bangladesh English-medium schools enter students for the main May/June series, though some also offer October/November as a second attempt within the same academic year. Confirm this directly with your child's school rather than assuming, since it changes exactly when past-paper revision should peak.",
    },
    {
      question: "Is there a trial lesson before we commit to a regular schedule?",
      answer: "Yes — a first lesson lets your child and the tutor work through real material together before any ongoing booking is agreed. Use it to judge whether the explanation style actually lands, whether the tutor clearly knows the specific board and paper, and whether the evening time slot genuinely works for your household. A different tutor is easy to arrange if it isn't the right fit.",
    },
    {
      question: "How do you check your tutors before matching one with my child?",
      answer: "Every tutor is interviewed on subject knowledge and on the specific board and syllabus they'll be teaching, with evidence of qualifications and relevant teaching experience checked before they're matched with any family. We stay involved afterward too — if the pace, communication style or level isn't right, tell us and we'll change the tutor.",
    },
    {
      question: "How do we get started with a tutor?",
      answer: "Send four things to ibgram24@gmail.com or +91 7439 368 115: your child's grade and board, the subject and level, your preferred evening hours in Bangladesh Standard Time, and what you want to change — a grade, exam confidence, unfinished coursework. We'll suggest a tutor, share their background, and set up a first lesson. Nothing is charged until you've seen a session and agreed a rate.",
    },
  ],

  internalLinks: [
    { label: "IB tutors by city", href: "/ib-tutors/", description: "Browse city-level IB tutoring hubs and see how matching works in each location." },
    { label: "IGCSE tuition hub", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject support, syllabus notes and past-paper practice." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP is structured, what HL and SL demand, and where students usually need help." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, ePortfolio and personal project support for Classes 6-10." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Math AA and AI at HL and SL, from foundations through Paper 3 and the exploration." },
    { label: "Verified tutor profiles", href: "/tutors/", description: "See qualifications, subjects, teaching mode and availability before you commit." },
    { label: "Test preparation", href: "/admissions/test-prep/", description: "Exam-season preparation running alongside school coursework and internal assessments." },
    { label: "Talk to the team", href: "/contact-us/", description: "Ask about scheduling, subjects or tutor fit before booking a trial session." },
    { label: "IB and IGCSE guides", href: "/blog/", description: "Study guides, syllabus explainers and revision planning written for students." },
    { label: "IB tutors in Pakistan", href: "/pakistan/", description: "Compare tutoring for another South Asian market built around Cambridge O and A Level." },
    { label: "IB tutors in Sri Lanka", href: "/sri-lanka/", description: "See how O/A Level and IB tutoring works for a neighbouring South Asian market." },
    { label: "IB tutors in Nepal", href: "/nepal/", description: "Online tutoring for another South Asian market close to Bangladesh in time zone." },
  ],

  closingHeading: "Book a free first lesson, timed to your evening in Bangladesh",
  closingBody: "Tell us the board, the subject, the level and the city your child studies in. Within a day or two you'll have a named tutor, their teaching background, and a couple of trial slots already sitting in a Bangladesh Standard Time evening — free, with no obligation to book anything further. If the fit isn't right, tell us and we'll try someone else. Reach us at ibgram24@gmail.com or +91 7439 368 115 on WhatsApp, with your child's grade and current school.",
};
