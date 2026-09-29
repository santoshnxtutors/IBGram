import type { CitySeoPage } from "../types";

/**
 * /purnia/ - IB and IGCSE tutoring page for Purnia, Bihar. Online-only delivery: no IB or
 * Cambridge/Edexcel IGCSE school has been confirmed anywhere in Purnia district, consistent with
 * the rest of this repo's Bihar pages (patna, bhagalpur, muzaffarpur, gaya, darbhanga all carry an
 * empty stripSchools). schoolClusters point honestly to Kolkata and a Delhi NCR boarding option.
 * Rewritten 2026-09-29 to clear the duplicate-phrasing gate (was sharing boilerplate wording with
 * hapur.ts and thanjavur.ts in the programme/subject/mode/process/FAQ blocks); every fact kept,
 * sentence structure and ordering rebuilt from scratch. Rendered with the shared CountryLanding
 * layout used by /gurgaon/.
 */
export const purnia: CitySeoPage = {
  slug: "purnia",
  countryName: "Purnia",
  countryNameLong: "Purnia, Bihar",
  demonym: "Purnia",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions are planned around the Chhath Puja days each autumn, the weeks when the Kari Kosi and Saura rivers run high, and your child's actual school timetable, in that order of priority",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.778, longitude: 87.476 },
  wikipedia: "https://en.wikipedia.org/wiki/Purnia",
  alternateNames: ["Purnea"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Purnia | Online Tuition",
  metaDescription:
    "Purnia has no IB or Cambridge/Edexcel school yet. Online IB and IGCSE tutors matched to your child's syllabus, live one-to-one classes, free trial lesson.",
  h1: "Online IB and IGCSE Tutors and Tuition in Purnia",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR PURNIA FAMILIES",
  heroSubtitle:
    "Purnia sits on NH27 as a trading and transit point between the rest of India and the Northeast, with Gulabbagh's maize market and its own airport keeping the city plugged into places well beyond Bihar. No school inside the district teaches the IB or Cambridge/Edexcel IGCSE, so every one of our Purnia students learns over a live video call, matched to whatever syllabus their actual school has set, timed around Chhath Puja and the monsoon weeks when the Kari Kosi and Saura rise.",
  primaryKeyword: "IB and IGCSE tutors in Purnia",
  imageAltText: "IB Diploma student in Purnia working through a Physics past paper with a tutor over a live online class",
  secondaryKeywords: [
    "IB tutor Purnia",
    "IGCSE tutor Purnia",
    "IB home tuition Purnia",
    "IGCSE home tuition Purnia",
    "IB private tuition Purnia",
    "IB Maths tutor Purnia",
    "IGCSE Maths tutor Purnia",
    "IB Physics tutor Purnia",
    "IB Chemistry tutor Purnia",
    "IB Biology tutor Purnia",
    "IB DP tutor Purnia",
    "IB MYP tutor Purnia",
    "IB PYP tutor Purnia",
    "IGCSE online tuition Purnia",
    "Cambridge IGCSE tutor Purnia",
    "IB tutor Line Bazar Purnia",
    "IGCSE tutor Gulabbagh",
    "online IB tutor Purnea",
    "IB tutor Purnia Bihar",
  ],

  heroTrustPoints: [
    "A tutor is picked for your child's exact board, subject and level, never a generic 'IB' or 'IGCSE' tag",
    "Classes stay entirely on screen here; a doorstep visit from a tutor exists only as a Gurugram and Delhi NCR service",
    "Sit in on one complete class at no cost before deciding anything",
    "No school on this page has any partnership with us, and neither does the IB itself, Cambridge, or Pearson Edexcel",
  ],
  heroStats: [
    { value: "Online only", label: "No IB or IGCSE school confirmed locally" },
    { value: "PYP through DP", label: "Every IB stage covered" },
    { value: "IST", label: "Same clock for tutor and student" },
    { value: "First class free", label: "Nothing to pay before deciding" },
  ],

  intro: {
    heading: "What a Purnia family is usually asking for",
    paragraphs: [
      "Three kinds of household reach out to us from Purnia. The first has a son or daughter boarding at a school elsewhere, home only for Chhath Puja or the long summer break, wanting the same syllabus kept alive during those weeks rather than a generic revision programme. The second has just moved here, often on a posting connected to government service, banking or the district's grain trade, and is trying to hold onto a curriculum the previous city offered as a matter of course. The third has never touched IB or IGCSE at all and is weighing whether it is worth starting one with nothing local to lean on.",
      "None of those three briefs looks like the other, yet they share one starting condition: Purnia does not have a school teaching the IB in any form, or Cambridge or Edexcel IGCSE, and the tuition economy built up around Gulabbagh's maize trade and the district's coaching lanes serves Bihar Board and CBSE demand instead, not international syllabuses.",
      "That gap turns out to matter less in practice than it sounds. A past paper marked up line by line, an Extended Essay outline talked through argument by argument, a rehearsed answer to a command word that keeps tripping a student up, none of that needs a shared room; a shared screen carries it just as well, and it opens the search to a tutor anywhere in the country instead of whoever happens to live nearby.",
      "IB Gram is not connected to any school named on this page, nor to the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. A tutor explains, marks and questions; the Internal Assessment, Extended Essay or coursework a student submits stays that student's own writing from first draft to last.",
    ],
    bullets: [
      "Suits a boarding family as easily as one that has just arrived mid-programme",
      "Cambridge and Edexcel IGCSE matched down to the exact subject code and tier",
      "One tutor, one student, taught live on Indian Standard Time",
      "A written plan follows the very first trial class",
      "No tutor visits your home in Purnia; that stays a Gurugram and Delhi NCR arrangement",
    ],
  },

  programmesIntro:
    "None of the four IB stages is taught inside Purnia district, so almost every enquiry we get traces back to a family boarding a child away or one that has recently arrived here mid-course. Here is what tutoring actually involves at each stage once that conversation starts.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Six units of inquiry carry most of the learning across the year rather than a fixed subject timetable, and the programme closes with a self-directed Exhibition in the final year. There is no external exam anywhere in it, so a tutor's early weeks with a young Purnia student usually go into restoring the habits and routines a previous school had already built.",
      countryNote:
        "A PYP enquiry tied to Purnia almost always follows a household relocating here for a government or banking posting, and the job is simply keeping a young child's learning moving mid-unit.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Grades are awarded against named criteria in each subject rather than a single mark, a Personal Project lands in the programme's fifth year, and some schools close it out with an eAssessment. The real sticking point is rarely content; it is the shift from stating what a student knows to building an argument a criterion actually rewards.",
      countryNote:
        "Families here with a child boarding at an MYP school elsewhere tend to want criterion-focused catch-up over the Chhath or summer break, not a repeat of what term-time lessons already covered.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three of them at Higher Level, run alongside a self-directed Extended Essay and Theory of Knowledge across the two years, and internal assessment quietly settles a meaningful share of most subject grades before the May exam series ever begins. Results follow in early July, roughly two months after the last paper is sat.",
      countryNote:
        "With the Diploma unavailable anywhere in the district, a Purnia family's DP tutoring runs entirely to whichever boarding school calendar the student is actually following.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP builds a career-related study, a reflective journal and applied skills work around just two or three Diploma subjects kept at their core. Few Indian schools have taken it up so far, but wherever it does run, the Diploma component inside it is taught to exactly the same standard as a full Diploma course.",
      countryNote:
        "CP enquiries from Purnia are rare simply because so few schools nationally offer the track; when one comes in, sessions concentrate on whichever Diploma subjects the student has actually taken.",
    },
  ],

  subjectsIntro:
    "A tutor starts from the exact subject, board and level a Purnia student is actually sitting, not the label IB or IGCSE by itself, then builds sessions around whatever exam series that student's own school has entered them for.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Families usually come to us after a disappointing Paper 3 attempt, and once that happens the mathematical exploration gets a topic fixed straight away rather than left to drift for months." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "This course rewards comfort with messy, real data and a graphic calculator far more than algebraic manipulation, and starting the exploration early is what keeps the final weeks from turning into a scramble." },
    { name: "IB Physics", levels: "HL / SL", description: "Marks slip away fastest when a student cannot pull the right figure out of the data booklet under pressure, and fixing that speed comes before any attempt at redesigning the Scientific Investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding and structure are rarely the problem; organic chemistry is where most students stall, and the required practical write-up gets a session of its own rather than being squeezed in at the end." },
    { name: "IB Biology", levels: "HL / SL", description: "A student who knows every process on the syllabus can still lose marks by answering the wrong question, so reading the command word correctly is taught as its own skill, alongside the statistics an investigation's conclusion leans on." },
    { name: "IB Economics", levels: "HL / SL", description: "Getting a diagram accurate is the quick fix; the real coaching time goes into the evaluative writing that an HL Paper 3 actually rewards, once the diagrams stop costing easy marks." },
    { name: "IB Business Management", levels: "HL / SL", description: "A case study drives every session rather than theory floating on its own, because examiners give little credit to an answer that ignores the scenario printed in front of them. Lining up a willing organisation for the Research Project is worth doing months, not weeks, ahead of the deadline." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Marks come from a rehearsable technique for unpacking a text nobody has seen before, not raw flair, and the Individual Oral usually takes several dry runs before it stops feeling like a performance." },
    { name: "IB Computer Science", levels: "HL / SL", description: "A keyboard sits in the room from the very first session, because the Internal Assessment is graded on code that runs, not on a description of code that might." },
    { name: "IB Psychology", levels: "HL / SL", description: "Knowing current studies across the three approaches is the easy half; the harder work is building a long response that argues one clear position rather than reciting facts in sequence." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Students who ask how a system actually behaves consistently score higher than those reproducing a textbook description, so that habit is built deliberately from the first session onward." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies stand or fall on named places and real figures rather than vague description, and a fieldwork write-up only earns full marks once its method could survive a genuine challenge." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 tests scepticism toward a source and Paper 2 tests one argument held to the end, two different skills that get taught separately rather than blurred into a single 'history exam'." },
    { name: "IB Hindi A / B", levels: "HL / SL", description: "Register and text-type mistakes cost more marks early on than vocabulary gaps do, and sessions move toward the individual oral's unscripted conversation once those mistakes are cleared up." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "A session runs as a genuine debate rather than a lecture, with the student made to argue a prescribed title from the side they walked in disagreeing with." },
  ],

  igcseSubjectsIntro:
    "No school in Purnia district teaches Cambridge or Edexcel, so preparation begins with whatever code and tier a student's actual school has entered them for, then works backward from the May-June or October-November series ahead. Hindi and English both stay available for families who simply want either language kept up outside school hours.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "A rushed non-calculator paper is where marks disappear before a student even reaches Extended-tier questions, so speed drills come first and harder topics follow once that base is solid." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Sitting this a year ahead of the Diploma means calculus and vectors are already familiar by the time Maths AA HL introduces them properly, instead of two new topics landing together." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Most students already understand the physics; what costs marks is slow equation handling against a clock, so timed drills and alternative-to-practical technique run together from the first week." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations and the alternative-to-practical paper get equal attention from the outset here, rather than leaving the practical component as something to worry about later." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics carries more weight on Cambridge's paper than most students expect walking in, so the longer extended-response questions on that topic get deliberate extra time." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "A correct diagram earns quick, easy marks; real coaching time goes into the longer evaluative answers that Core-tier preparation tends to underrate." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "A student writes and runs actual Python rather than memorising pseudocode on paper, since logic only proves itself once it executes correctly." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed practice summarising a genuinely unseen passage moves a grade further than another vocabulary list ever will." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Answers built around the specific numbers in a case study consistently outscore a general, memorised essay about business theory." },
  ],

  regionsTitle: "Purnia localities our online tutors already serve",
  regionsIntro:
    "No lesson ever involves a visit, so treat the list below as background rather than a delivery map: it shows which curriculum options families in each part of Purnia are actually weighing, and how the festival and monsoon calendar tends to shape their evenings.",
  regions: [
    { name: "Line Bazar", note: "A central commercial and residential stretch, home to many of the professional families who first ask about an international curriculum." },
    { name: "Gulabbagh", note: "The maize trading hub that anchors much of the district's commerce, with business families increasingly curious about options beyond the Bihar Board." },
    { name: "Bhatta Bazar and Khuskibagh", note: "Older, established residential pockets with a mixed Bihar Board and CBSE school-going population." },
    { name: "Airport Road", note: "The corridor toward Purnea Airport, popular with families whose work involves regular travel to Delhi, Kolkata or Hyderabad." },
    { name: "Purnea University area", note: "Home to academic families connected to the university, several of whom have lived in cities with wider schooling options before settling here." },
    { name: "Madhubani and Rambagh", note: "Residential pockets on the city's edge, largely Bihar Board and CBSE schooling, with growing interest in Cambridge options for younger children." },
    { name: "Kasba Road corridor", note: "The route toward Kasba and the district's southern tehsils, where families plan around seasonal flooding near the Kari Kosi." },
    { name: "Banmankhi", note: "A sub-divisional town within Purnia district where local schooling still centres almost entirely on the Bihar Board." },
    { name: "Krishna Nagar", note: "A settled residential area close to the district hospital, home to many medical and government-service families." },
  ],

  schoolDisclaimer:
    "Schools named on this page, whether they sit inside Purnia or in a city families here actually travel to, appear only to show where an international curriculum genuinely exists. None of it implies a partnership. IB Gram is run independently of every school it names, and independently of the International Baccalaureate Organization, Cambridge Assessment International Education and Pearson Edexcel as well.",
  schoolClusters: [
    {
      city: "Purnia district",
      note: "We could not confirm an IB or Cambridge/Edexcel IGCSE school operating anywhere in Purnia district. Local schooling runs on the Bihar Board and CBSE, including at Vidya Vihar Residential School and Bijendra Public School.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "About 450 kilometres away and within direct reach of Purnea Airport, Kolkata holds the nearest real cluster of confirmed IB and IGCSE schools, and several Purnia families already board a child there.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "A direct flight out of Purnea Airport puts Delhi NCR within reach for a family weighing boarding or a full relocation, given its far wider spread of IB schools to pick from.",
      schools: ["Vasant Valley School, Delhi", "The British School, New Delhi"],
    },
  ],

  modesIntro:
    "None of what follows brings a tutor to your door in Purnia; home visits stay limited to Gurugram and pockets of Delhi NCR. Within that limit, families here generally pick between a steady weekly class, an ongoing plan with regular written updates, or a concentrated push timed to a school break.",
  modes: [
    {
      title: "A steady weekly class online",
      description:
        "The same hour, held free week after week on both sides, fitted to school hours or a boarding term's own bell schedule rather than the tutor's convenience. Most Purnia households never need anything beyond this.",
      bullets: [
        "Tutors are picked purely for subject expertise, never proximity",
        "Works equally for IB DP, MYP and Cambridge or Edexcel IGCSE",
        "Past papers get marked live on a shared screen every week",
        "One tutor sees a student through the full term",
      ],
    },
    {
      title: "An ongoing plan with regular written check-ins",
      description:
        "The weekly class carries on as usual, and a short written note after every session plus a fuller review every few weeks keeps progress visible instead of assumed.",
      bullets: [
        "Every session ends with a short written note",
        "A periodic review resets pace or topics wherever needed",
        "Works especially well for a younger PYP or MYP student",
        "A second weekly slot can be arranged quickly before mocks",
      ],
    },
    {
      title: "A concentrated push around a school break",
      description:
        "Sessions run closer together across a holiday or the run-up to an exam series, with timed papers marked and returned fast, planned around Chhath Puja and the monsoon weeks rather than fought against them.",
      bullets: [
        "Timed papers get marked against the board's own live criteria",
        "Feedback comes back within a day or two, not a week",
        "Fitted to whatever holiday window a boarding school allows",
        "Best arranged two to three weeks before a boarding term ends",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families in Purnia today",
      paragraphs: [
        "Schools across Purnia run overwhelmingly on the Bihar Board, with a smaller CBSE presence carried by names such as Vidya Vihar Residential School and Bijendra Public School. Nothing confirmed inside the district currently teaches any of the four IB programmes, and nothing teaches Cambridge or Edexcel IGCSE either, a pattern that holds across Bihar's other major cities as well.",
        "Enquiries about an IB or IGCSE tutor in Purnia come mostly from three directions: households with a child boarding at an international school in Kolkata, Delhi or elsewhere; government, banking and grain-trade professionals who have recently relocated to Purnia and want to keep a curriculum going that a previous posting offered locally; and a smaller group weighing an international curriculum for the very first time.",
        "A district with essentially no local specialist pool changes what tutoring has to answer for. Almost nobody teaching Diploma-level or Cambridge subjects lives inside Purnia itself, so a family reaching outward is not a matter of preference; it is the only route that actually exists, and it works precisely because it removes that local limit entirely.",
        "A thin local base does not translate into a weaker outcome. Cambridge examiners hold one uniform standard to a subject code regardless of where the script was written, and IB moderators apply the same global benchmark to every Diploma cohort on the planet. A well-prepared Purnia student sits that exam on exactly the same footing as a classmate from a school with forty international candidates in the same year.",
      ],
      table: {
        caption: "Schools and boards in Purnia",
        columns: ["School or board", "Where", "Curriculum"],
        rows: [
          ["Vidya Vihar Residential School", "Purnia", "CBSE"],
          ["Bijendra Public School", "Purnia", "CBSE"],
          ["Most district schools", "Across Purnia district", "Bihar State Board (BSEB)"],
          ["IB or Cambridge/Edexcel school", "None confirmed", "Not currently available locally"],
        ],
      },
      bullets: [
        "No school confirmed inside Purnia district teaches IB or Cambridge/Edexcel IGCSE",
        "Bihar Board dominates locally, with a smaller CBSE presence",
        "Most families are either boarding elsewhere or newly settled in the district",
        "Cambridge and IB marking standards stay identical wherever a student studies",
      ],
    },
    {
      heading: "Is Bihar Board or CBSE really easier than IB and IGCSE?",
      paragraphs: [
        "Easier is not quite the right word; different is closer. A Bihar Board paper, like most state board exams, tests memory and pattern recognition in one yearly sitting, which a student who has worked through several years of past papers can clear largely on recall. Cambridge IGCSE dresses a familiar topic up in an unfamiliar scenario far more often, and that is exactly where recall alone starts to fall apart.",
        "The two systems diverge hardest on assessed coursework. Bihar Board carries almost nothing internally graded, CBSE folds in a modest project component, and neither resembles the detailed written rubric an IB Internal Assessment or a piece of IGCSE coursework is scored against. A student crossing over in Class 9 or 11 has usually never designed an independent piece of assessed work before, and that planning skill is normally the first thing a tutor builds.",
        "Subject depth widens the gap with age. HL Maths and the HL sciences at Diploma level sit well beyond anything Bihar Board or CBSE covers at the same stage, and Cambridge's own IGCSE splits the difference: Core tier lands close to CBSE, Extended clears a noticeably higher bar. Whichever tier a boarding student takes at Grade 9 quietly decides how steep that later jump into HL work feels.",
        "None of this argues against making the move. A fair number of switching Purnia families come to prefer a workload spread across the year to the single high-stakes paper that Bihar Board or CBSE rests everything on.",
      ],
      table: {
        caption: "Bihar Board, CBSE and IB/IGCSE, compared",
        columns: ["Measure", "Bihar Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Presence in Purnia district", "The default at most schools", "A smaller set of schools", "None confirmed; studied away from Purnia"],
          ["Exam format", "One yearly paper, recall-heavy", "One yearly paper, some applied questions", "Criteria-marked, application-focused"],
          ["Internally assessed work", "Minimal", "A modest project component", "20-30% in most IB subjects; coursework in IGCSE"],
          ["Recognition", "Within India", "Within India", "Recognised internationally"],
        ],
      },
      bullets: [
        "Rote answers hold up far better on Bihar Board or CBSE than on Cambridge's Extended questions",
        "Planning assessed work independently is the real hurdle for a Class 9 or 11 switch",
        "The Grade 9 tier choice quietly sets how steep the later jump into HL feels",
        "Plenty of switching families end up preferring workload spread across the year",
      ],
    },
    {
      heading: "What actually drives an IB or IGCSE tutor's fee in Purnia?",
      paragraphs: [
        "Scarcity, not distance, sets the fee here. Cambridge IGCSE Core support draws on a wide national bench of tutors, which keeps it cheaper; IB Diploma HL subjects draw from a noticeably smaller pool nationally, simply because few tutors currently teach that exact course in any given year, and the fee tracks that scarcity directly.",
        "A lesson runs over video either way, so where the tutor happens to live drops out of the equation entirely. A Biology specialist working from Hyderabad, a short flight from Purnea Airport, costs the same as a purely hypothetical local option, one that in practice does not exist for most IB subjects here.",
        "What matters more than the number itself is whether that tutor has recently graded the exact paper your child is sitting. Someone teaching Cambridge 0625 this year moves a student further in one session than a generalist dusting off an old syllabus.",
        "The figure you are quoted holds steady from the very first paid session onward; it is agreed before anything is paid and does not drift upward later. Stepping away, for a week or for good, never adds a charge.",
      ],
      bullets: [
        "IB HL subjects cost more nationally than Cambridge Core support, purely from tutor scarcity",
        "Video delivery takes a tutor's home city out of the pricing equation entirely",
        "The quoted figure is agreed before the first paid class and holds steady after",
        "Stepping away from lessons, briefly or for good, never adds a charge",
      ],
    },
    {
      heading: "Coaching centres, home tutors and solo study, set against a matched online tutor",
      paragraphs: [
        "Purnia's coaching centres are built around Bihar Board, CBSE and competitive-exam preparation, since that is exactly where local paid-tuition demand sits. A batch for IB Chemistry HL or IGCSE Additional Mathematics has never existed here, and it realistically will not, since too few students district-wide would ever fill one.",
        "A home tutor for ordinary school subjects around Line Bazar or Bhatta Bazar is an afternoon's search; locating someone who has actually taught a Cambridge science specification this year, or any IB subject whatsoever, is a search that typically comes up empty. A generalist can steady a nervous student's nerves well enough, but that is not the same thing as marking against a syllabus the tutor genuinely knows.",
        "IGCSE Mathematics is the one subject a self-driven student can push quite far on alone, thanks to how openly Cambridge releases its own past papers and mark schemes. What that independence cannot fix is planning an Internal Assessment, or the sustained, argued writing both boards reward over a neat summary, and those gaps stay hidden until someone else, reading with a sharper eye, actually points them out.",
        "What a matched online tutor supplies is precisely what the other three cannot: a national bench where local coaching offers none, marking pinned to the exact syllabus a batch class was never built for, and a second, informed opinion self-study has no way of producing on its own.",
      ],
      table: {
        caption: "Purnia's realistic study options for IB and IGCSE",
        columns: ["Route", "Matches the exact syllabus", "Setting", "Where it falls short in Purnia"],
        rows: [
          ["A coaching batch", "No, built for Bihar Board, CBSE and entrance exams", "Shared classroom", "No IB or Cambridge batch exists in the district"],
          ["A local home tutor", "Depends entirely on which tutor you happen to find", "One to one", "Few have taught a live international syllabus recently"],
          ["Self-study alone", "As far as the student can push it unaided", "Unsupervised", "Internal Assessments and long essays go unreviewed"],
          ["A matched online tutor", "Picked for the exact subject and level required", "One to one, over video", "Draws on tutors from across the whole country"],
        ],
      },
      bullets: [
        "Local coaching in Purnia is built for Bihar Board, CBSE and entrance-exam demand",
        "Genuinely current international syllabus experience is hard to find inside the district",
        "Self-study consistently leaves Internal Assessments and extended writing without a second reader",
        "A national search is what actually closes Purnia's local supply gap",
      ],
    },
    {
      heading: "How do Chhath Puja and the monsoon reshape a Purnia study calendar?",
      paragraphs: [
        "Three things genuinely move a Purnia calendar: summer heat peaking between April and June, right alongside school year-end exams; the monsoon between July and September, when the Kari Kosi and Saura rivers can swell and disrupt local roads; and Chhath Puja, usually falling in late October or November, which pauses much of the city's routine for several days.",
        "Layered on top of that sits whichever exam board a student's actual school follows. Cambridge runs two series a year, one across May and June and a smaller one in October and November, with results for the bigger sitting typically landing in August; a boarding DP student instead follows the IB's own May session, waits for results in early July, and has a November resit available if a subject needs it.",
        "For a family whose child boards elsewhere, the boarding school's own mock-exam block is the milestone that actually matters, not any date fixed by Purnia's local calendar. Starting a plan as early as January still leaves genuine room to close gaps honestly before a May-June sitting arrives.",
        "For boarding DP or MYP students, school holidays remain the real working window, since term-time tutoring has to fit around a boarding school's own timetable rather than Purnia's. Blocking serious revision into the summer break and the days around Chhath tends to work far better than trying to squeeze it into an already full term.",
      ],
      table: {
        caption: "Purnia's year, and what it means for tutoring",
        columns: ["Time of year", "Locally", "For an IB or IGCSE student"],
        rows: [
          ["April to June", "The hottest stretch of the year, overlapping local school finals", "Shorter sessions, spaced evenly rather than bunched together"],
          ["July to September", "Monsoon season; the Kari Kosi and Saura can rise sharply", "Keep the schedule flexible for the odd washed-out week"],
          ["Late October / November", "Chhath Puja brings several days of major local observance", "A deliberately lighter, quieter run of sessions works best"],
          ["May and June", "No exam of its own, but boarding schools test in this window", "Both the Cambridge series and IB DP finals sit here too"],
        ],
      },
      bullets: [
        "Monsoon flooding on the Kari Kosi and Saura can disrupt routines between July and September",
        "Chhath Puja effectively pauses much of the city for several days each year",
        "A student's own boarding school, not Purnia's calendar, decides which exam series they sit",
        "Summer holidays and the days around Chhath are the best windows for a concentrated push",
      ],
    },
    {
      heading: "Where does an IB or IGCSE path lead after school in Purnia?",
      paragraphs: [
        "Two broad routes account for most Purnia students once IGCSE or the Diploma lies behind them: an engineering or medical seat somewhere within India, or an undergraduate place abroad. Purnea University covers general higher education inside the district itself, and Bihar's larger university system, based in Patna, sits a few hours off by road, a trip the expressway now under construction should eventually shorten.",
        "An IB or IGCSE transcript does not open an Indian entrance exam by itself. It first needs an equivalence certificate from the Association of Indian Universities, together with the correct subject combination and level, before JEE or NEET eligibility even enters the picture. Because Purnia sits far from Bihar's established coaching hubs, a good number of families run entrance preparation through an online provider in parallel with ordinary subject tutoring, rather than treating the two as separate decisions made later.",
        "For those applying abroad, it is the predicted grade issued during the autumn of Class 12, not a final result, that actually opens a university offer, since most decisions arrive months before results exist to check. British universities typically weigh that prediction against a specific IB points total and named Higher Level floors; American applications fold the same number into a far wider file built around essays and references, with every other country running its own separate equivalence check.",
        "IB Gram's tutors stay inside subject teaching, predicted-grade improvement and exam technique; admissions strategy is not the job on offer here, though a tutor will always give an honest read on what level a particular course abroad tends to expect.",
      ],
      bullets: [
        "Purnea University anchors local higher education; Patna and Bihar's wider system sit a few hours away",
        "AIU equivalence and the correct subject levels are prerequisites for both JEE and NEET",
        "Purnia's distance from major coaching hubs pushes many families toward online entrance-exam preparation",
        "Tutoring stays focused on subject and grade support, not admissions counselling",
      ],
    },
    {
      heading: "Choosing between Maths AA and AI, and handling the sciences, from Purnia",
      paragraphs: [
        "Ask a student what they actually enjoy before asking what looks safer on a transcript. Analysis and Approaches suits someone who likes proof and pure calculus, and its HL Paper 3 rewards exactly the unfamiliar, multi-step questions a Bihar Board or CBSE background rarely trains for in depth. Applications and Interpretation suits a student who would rather model messy real-world data on a graphic calculator than manipulate algebra by hand, and its own internal exploration is usually where marks vanish once a holiday schedule gets compressed.",
        "The three HL sciences share one demand that has nothing to do with syllabus content: a written investigation has to hold up if someone actually questions it, not merely resemble a rehearsed classroom experiment. Physics adds the further pressure of pulling the right figure out of the data booklet fast enough under a clock. Chemistry turns largely on organic reaction mechanisms once the early bonding and structure units are behind a student. Biology comes down less to what a student knows than to whether an answer actually addresses the command word used, and shaky data handling is usually what pulls an otherwise strong write-up down.",
        "Purnia students moving across from Bihar Board or CBSE schooling tend to arrive with the underlying content in reasonably good shape already. What is missing is the discipline of answering exactly what a command word demands rather than everything a student happens to know about the topic, and that only improves through deliberate, repeated practice against real mark schemes, not further revision of facts already learned.",
        "None of these three subjects is taught within Purnia district, which is precisely why pairing a student with a tutor currently teaching that same HL or SL course elsewhere in India, rather than a generalist, is what keeps these gaps from widening from one school term to the next.",
      ],
      bullets: [
        "A student's own preference, proof-based or modelling-based, guides the choice better than a transcript",
        "Every HL science investigation has to survive being genuinely questioned, not just look tidy on paper",
        "Command-word precision moves grades further than extra content revision for most switchers",
        "No school near Purnia teaches these subjects, so specialist matching does the real work",
      ],
    },
    {
      heading: "Extended or Core IGCSE, decided without a local school to decide it for you",
      paragraphs: [
        "Cambridge sets a different grade ceiling for its Core and Extended tiers, and whichever one a school picks at Grade 9, at wherever a Purnia student actually studies, decides how steep the later climb into IB HL Maths and sciences ends up feeling.",
        "Extended Mathematics 0580 alongside Additional Mathematics 0606, where a school offers both, hands a future Maths AA HL student a real head start on calculus and vectors before the Diploma ever introduces them formally. Extended-tier sciences carry the same advantage forward, since Cambridge already pitches that content close to where DP Physics or Chemistry HL actually begins.",
        "A tutor works from whatever tier and subject combination a student's own school has actually chosen, never a hypothetical ideal one, and closes the specific gaps that combination leaves open instead of starting again from nothing.",
        "A family arriving in Purnia from an Edexcel-affiliated school needs a tutor who already knows that Edexcel's Foundation and Higher tiers word questions differently from Cambridge's own papers, even in places where the underlying mathematics or science content overlaps closely.",
      ],
      bullets: [
        "The Grade 9 Core versus Extended decision shapes both the grade ceiling and later DP readiness",
        "Extended Mathematics with Additional Mathematics gives Maths AA HL a genuine head start",
        "Tutoring adapts to whatever subject combination a student's actual school has set",
        "Edexcel's question style differs from Cambridge's even where content overlaps closely",
      ],
    },
    {
      heading: "How does a Purnia family actually get matched with a tutor?",
      paragraphs: [
        "It starts with a short conversation rather than a form: the board and level, which subject is genuinely causing trouble, and whether the real issue is a topic gap, an approaching Internal Assessment, weak exam technique, or a family weighing a full switch away from Bihar Board. That conversation shapes the shortlist far more than any tutor's résumé does.",
        "Since Purnia has no local school teaching an international curriculum at all, the search runs nationally from the very first step instead of pretending a local shortlist could exist, and every tutor's recent teaching experience with the exact subject and level gets checked before a single introduction happens.",
        "A shortlisted tutor then runs one genuine, free lesson on something the student is actually working through. You judge whether the explanation lands, whether the questions asked back are actually useful, and whether your child would want a second session. Only after that does a short plan for the coming month get written down for your approval.",
        "If the fit turns out wrong once term is underway, the honest response is a different tutor, not encouragement to push through it. Nothing here runs long enough to make switching difficult.",
      ],
      bullets: [
        "Board, subject, level and the real underlying concern decide the shortlist",
        "The search runs nationally from the outset, given how little exists locally",
        "The trial lesson is genuine and free, ahead of any plan or payment",
        "A poor fit gets swapped for a better one, not defended",
      ],
    },
  ],

  tutorsIntro:
    "The tutors placed with Purnia families teach right across the IB continuum plus Cambridge and Edexcel IGCSE, matched to a specific course rather than a broad label, with every class held live over video since nobody visits a home here.",

  process: [
    { title: "Explain what your child actually needs", description: "The board, the subject, where they currently stand, and which hours realistically work for your household around school or a boarding term's break." },
    { title: "Review a short, justified shortlist", description: "Each name arrives with a plain reason attached, built around recent, relevant teaching experience rather than a generic profile." },
    { title: "Watch the free lesson unfold", description: "A genuine topic, taught live, costing nothing, so the teaching style can be judged before any decision gets made." },
    { title: "Approve a simple first-month plan", description: "Topics, pace, and how you will hear about progress, set down on paper before regular sessions begin." },
    { title: "Keep a steady rhythm going", description: "Weekly sessions continue with regular check-ins, and switching tutors stays an option whenever it is actually needed." },
  ],

  whyPoints: [
    { title: "The match runs on subject, not geography", description: "A tutor is picked for the precise HL, SL or Cambridge code your child needs, never a broad label." },
    { title: "Designed around what Purnia actually has", description: "No local IB or IGCSE school means the search starts nationally from day one, not as a fallback." },
    { title: "Nothing is decided sight unseen", description: "A free trial replaces guesswork with a real class your child can react to." },
    { title: "The student's own words stay the student's", description: "Feedback and planning come from the tutor; the assessed writing never does." },
    { title: "You always know where things stand", description: "Written notes and periodic reviews keep progress visible rather than assumed." },
    { title: "Nothing locks you in", description: "No affiliation to defend, no long contract, and a straightforward switch if a tutor is not right." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Purnia?", answer: "Send across your child's IB programme, the subject that needs attention, their current level and which exam session they are working toward. A shortlist comes back built purely on syllabus fit, since no school in Purnia teaches the IB, with timing arranged around your household and a free trial lesson offered before any commitment is asked for. If the first tutor is not right, a replacement follows straight away." },
    { question: "Do you offer IGCSE tutors in Purnia?", answer: "We do, and every class runs online since Purnia has no confirmed Cambridge or Edexcel school of its own. A request for a specific code and tier, Mathematics 0580 Extended or Chemistry 0620 for example, gets matched precisely, and sessions draw on the board's genuine past papers and mark schemes rather than generic revision material." },
    { question: "Do your tutors visit homes in Purnia?", answer: "They do not, and we would rather say that plainly than let it come as a surprise later. Home visits are a Gurugram and parts-of-Delhi-NCR arrangement only; everywhere else, Purnia included, a class runs live over video, one to one, with a shared screen doing the work a shared table would elsewhere. It is genuine tuition, just not delivered at your door." },
    { question: "What does an IB or IGCSE tutor in Purnia cost?", answer: "Mostly it comes down to how rare a subject and level are among tutors nationally, along with session length and how recently that tutor last taught it, and we confirm your exact figure before the trial class starts. Cambridge Core work tends to cost less than IB Diploma HL subjects. There is no travel cost hidden anywhere since every class is online, and no penalty for pausing or stopping." },
    { question: "Which schools in Purnia offer IB or IGCSE?", answer: "None that we have been able to confirm. Vidya Vihar Residential School and Bijendra Public School are reasonably well known CBSE options in the city, and the rest of the district runs largely on the Bihar Board. A family set on the IB or a broader Cambridge choice usually looks toward boarding in Kolkata or Delhi NCR instead." },
    { question: "My child boards at an IB or IGCSE school outside Purnia. Can a tutor still help?", answer: "This is, if anything, our most common Purnia enquiry, given that neither curriculum is taught locally. We match to exactly what your child's actual school in Kolkata, Delhi or wherever they board is covering that term, and build sessions around holiday windows or evening slots where the boarding school permits them." },
    { question: "Is there a free trial class before I commit to anything?", answer: "Always. Your child sits through a genuine topic from their own syllabus with the proposed tutor, over video, at no cost and with nothing owed afterward. Once that is done, a short plan for the first month gets put together, and you decide whether to proceed as is, ask for adjustments, or meet a different tutor instead." },
    { question: "Can a tutor help with IB Internal Assessments for a Purnia student?", answer: "Only by guiding, never by writing. That means helping settle on a workable research question, unpacking what a specific assessment criterion is actually looking for, planning out data collection, and giving direct feedback on drafts as they come in. Producing or rewriting the assessed work itself would break IB's academic integrity rules, so it is simply not something our tutors do." },
    { question: "Which IB Diploma subjects can tutors cover for a Purnia family?", answer: "Coverage spans the major Diploma subject groups a Purnia student is likely to need: both Maths courses at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, and the Theory of Knowledge and Extended Essay components that sit alongside them." },
    { question: "Do you also tutor IB MYP and PYP students connected to Purnia?", answer: "Yes, right across the continuum, for households whose child studies elsewhere or is moving between curricula. MYP sessions concentrate on criterion-based analysis in the sciences and languages, plus the Personal Project's process journal; PYP sessions build reading, writing, number sense and the research skills an Exhibition calls for." },
    { question: "Is online tutoring as effective as in-person tuition for a Purnia IB or IGCSE student?", answer: "In practice, yes, and arguably more so here given how few specialists for HL subjects or specific Cambridge codes exist anywhere near Purnia. A shared screen, annotated past papers and recorded worked examples cover most of what an in-room tutor would otherwise offer, while opening the search to specialists nationwide instead of a shortlist that does not really exist locally." },
    { question: "How are IB Gram tutors verified for Purnia students?", answer: "Qualifications, how recently a tutor has taught the exact subject and level in question, and how they approach assessment criteria all get reviewed before any introduction is made. Because Purnia's local school base is so thin, we lean toward tutors with recent, direct syllabus experience over generalists, and the free trial lets you form your own judgement regardless." },
    { question: "When should my child in Purnia start IB or IGCSE tutoring?", answer: "Ideally at the course's own start, Grade 9 for Cambridge IGCSE or Class 11 for the Diploma, which leaves room to fix foundations before internal exams, Internal Assessment deadlines and predicted grades converge. A later start is not wasted either; sessions simply concentrate on the highest-value topics and past papers ahead of the exam series." },
    { question: "My child is switching from Bihar Board to IGCSE. Can a tutor help?", answer: "Regularly, particularly around Grade 9 when a family is moving a child toward a school elsewhere. The adjustment is usually about question style, not raw content: command words like explain, evaluate and justify need direct, dedicated teaching, and starting that work a term ahead of the actual switch tends to pay off." },
    { question: "Can sessions run on weekends or after school hours in Purnia?", answer: "Most families settle on weekday evenings after school and weekend mornings. We build the Chhath Puja period into scheduling each year, since routines shift noticeably then, and keep flexibility ready for the monsoon weeks when travel around the city can be unpredictable. A second weekly slot ahead of mocks is easy to add if needed." },
    { question: "What happens if we are not happy with a tutor in Purnia?", answer: "Say so, and we move quickly to arrange someone else. Progress gets checked in on every few weeks specifically so a poor fit does not drag on, and since there is no long-term contract attached, pausing or ending sessions altogether costs nothing extra." },
    { question: "Is IB Gram affiliated with any Purnia school, or with the IB or Cambridge boards?", answer: "No, on both counts. IB Gram operates independently, with no endorsement from, representation of, or partnership with any school named on this page, nor with the International Baccalaureate itself, Cambridge Assessment International Education, or Pearson Edexcel. Schools appear here only to show where an international curriculum genuinely exists for a Purnia family." },
    { question: "How does IB Gram handle a mixed-board household, say one child on CBSE and another moving to IGCSE?", answer: "Each child is matched on their own terms, board, subject and level kept entirely separate, with scheduling worked out so both sets of sessions fit one household's actual routine rather than colliding. If a family is still deciding whether to move the second child at all, a tutor can walk through an honest comparison first, no pressure attached." },
    { question: "Does IB Gram help with subject or level choice before a Purnia student commits to the Diploma?", answer: "It does. Before locking in six subjects and an HL/SL split, a tutor can talk through what each course genuinely demands week to week, weighed against a student's actual strengths, so the decision is grounded in reality rather than a guess made with no local IB school nearby to compare against." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "A broader look at how IB and IGCSE families across the country get matched with tutors." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The only city where IB Gram tutors actually walk into a student's home." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel boards, tiers and subject options laid out plainly." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The two-year DP broken down: subject choices, TOK, the Extended Essay and internal assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "What MYP's criterion grading, the Personal Project and any eAssessment actually involve." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "How PYP's units of inquiry and Exhibition actually work in practice." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches set against Applications and Interpretation, compared." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles sorted by subject, programme and teaching experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and get a free trial class booked." },
    { label: "IB and IGCSE tutoring in Patna", href: "/patna/", description: "Tutor matching for Patna families, roughly a day's drive from Purnia as Bihar's state capital." },
    { label: "IB and IGCSE tutoring in Bhagalpur", href: "/bhagalpur/", description: "Tutor matching for Bhagalpur, another Kosi-Seemanchal city facing the same local schooling gap." },
    { label: "IB and IGCSE tutoring in Katihar", href: "/katihar/", description: "Tutor matching for Katihar, roughly 90 kilometres from Purnia along the same road corridor." },
  ],

  closingHeading: "Book a free trial lesson for your Purnia student",
  closingBody:
    "Write to us with the board or programme, the subject that needs the most work, where your child stands right now, and a window of time that suits school or a boarding break. A tutor comes back matched on real, recent experience with that syllabus, along with an open trial slot, at no cost and with no obligation attached. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp to get started.",
};
