import type { CitySeoPage } from "../types";

/**
 * /mysuru/ - IB and IGCSE tutoring page for Mysuru (Mysore), Karnataka. Only two Cambridge-affiliated
 * schools could be independently confirmed in or immediately around the city, below the guide's
 * threshold for the sliding strip, so stripSchools is empty and the confirmed schools are named in
 * the body table and clusters instead. Online only, since in-person home tuition runs only in
 * Gurugram and parts of Delhi NCR. Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const mysuru: CitySeoPage = {
  slug: "mysuru",
  countryName: "Mysuru",
  countryNameLong: "Mysuru, Karnataka",
  demonym: "Mysuru",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Mysuru rarely gets uncomfortably hot, so the calendar we actually watch is Dasara week and school exam dates, not the weather",
  lastUpdated: "2026-09-21",
  geo: { latitude: 12.2958, longitude: 76.6394 },
  wikipedia: "https://en.wikipedia.org/wiki/Mysore",
  alternateNames: ["Mysore"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mysuru | Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Mysuru students: DP, MYP, PYP and Cambridge or Edexcel IGCSE, taught live online, one to one, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Tuition in Mysuru",
  heroEyebrow: "IB & IGCSE TUITION FOR MYSURU STUDENTS",
  heroSubtitle:
    "Two schools in or near Mysuru teach a Cambridge curriculum; none locally has been confirmed to run the full IB. So when a Mysuru parent messages us, it is almost always to keep a syllabus going that the city's own classrooms are not built to teach: a boarding-school programme during the holidays, an online IB provider's coursework, or preparation ahead of a switch to Bengaluru. Name the subject and level and we shortlist a tutor who has taught exactly that, on video, with a free lesson before any money changes hands.",
  primaryKeyword: "IB and IGCSE tutors in Mysuru",
  imageAltText: "Mysuru student working through an IGCSE Chemistry past paper with an online tutor over video call",
  secondaryKeywords: [
    "IB tutor Mysuru",
    "IGCSE tutor Mysuru",
    "IB home tuition Mysuru",
    "IGCSE home tuition Mysuru",
    "IB online tuition Mysuru",
    "IGCSE online tuition Mysore",
    "IB DP tutor Mysuru",
    "IB MYP tutor Mysuru",
    "IB PYP tutor Mysuru",
    "IB Maths tutor Mysuru",
    "IGCSE Maths tutor Mysuru",
    "IB Physics tutor Mysuru",
    "IB Chemistry tutor Mysuru",
    "IB Biology tutor Mysuru",
    "IB tutor Gokulam Mysuru",
    "IGCSE tutor Vijayanagar Mysuru",
    "IB tutor Mysore Karnataka",
  ],

  heroTrustPoints: [
    "Every tutor is chosen for one thing: recent, hands-on teaching of your child's exact subject and level",
    "Lessons happen on a screen, always; a tutor knocking at the door is a Gurugram and Delhi NCR service only",
    "Watch a real lesson first, at no cost, before you decide anything",
    "No stake in any Mysuru school, board or exam authority named here",
  ],
  heroStats: [
    { value: "Two confirmed schools", label: "Which is why families ask us instead" },
    { value: "Cambridge & Edexcel", label: "Covered either way" },
    { value: "Indian Standard Time", label: "No jet lag to plan around" },
    { value: "First lesson, no cost", label: "Pay only if you continue" },
  ],

  intro: {
    heading: "Why Mysuru parents end up looking for an IB or IGCSE tutor",
    paragraphs: [
      "Ask around Mysuru and you will find CBSE and Karnataka State Board schools on every second street, ICSE in smaller numbers, and, by our count, exactly two schools teaching a Cambridge curriculum anywhere in or near the city. Nobody here runs the IB continuum that we could independently verify. So a parent reaching out for IB tutoring in Mysuru is rarely trying to switch their child's school; they are keeping a syllabus alive that the city was never set up to teach.",
      "The reasons vary. A child boarding at a Cambridge school two states away comes home for six weeks and needs the syllabus not to stall. A family enrolled with an online IB provider wants a subject specialist rather than a generalist tutor. Infosys and Wipro both employ people in Mysuru whose careers move them between cities and countries, and their children sometimes carry a curriculum the local schools do not offer. Mysuru's long history as a base for Ashtanga Yoga study also brings foreign and NRI households who settle in for months at a stretch and want their child's education to keep pace regardless.",
      "Every one of these situations gets the same delivery: live, over video, since Mysuru sits nowhere near Delhi NCR, the only part of India where IB Gram sends a tutor to a door. What does not change is the depth of the teaching, working from your child's real specification and past papers rather than a generic outline.",
      "None of this makes IB Gram part of any Mysuru school, the IB Organization, Cambridge International or Pearson Edexcel. A tutor teaches, marks, and explains; putting words into an Internal Assessment or Extended Essay on a student's behalf is not something we do.",
    ],
    bullets: [
      "PYP through the Career-related Programme, taught subject by subject and level by level",
      "Cambridge or Pearson Edexcel IGCSE, whichever your family already has",
      "Video lessons only; a physical visit is offered exclusively in Gurugram and parts of Delhi NCR",
      "A no-cost first lesson, followed by a short plan if you want to keep going",
    ],
  },

  programmesIntro:
    "Mysuru families rarely arrive knowing the IB structure well, since there is no full IB school locally to have explained it to them already. What follows is a plain account of each stage and how it tends to actually show up for a family in this city: a child home on a school break, a Class 11 student starting the Diploma through an online school, or simply a parent doing their homework before deciding anything.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Young children work through units of inquiry rather than a fixed subject grid, with nothing externally graded until the final year's PYP Exhibition.",
      countryNote:
        "In Mysuru, this almost always means a child boarding elsewhere at a PYP school, home for the holidays and needing the question-first habits of that classroom kept going rather than lost to a few weeks off.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Marking runs against lettered criteria in every subject, the Personal Project lands in Year 5, and eAssessment closes the programme at some schools. A student has to be shown what a criterion is actually rewarding; it rarely becomes obvious on its own.",
      countryNote:
        "Mysuru MYP support typically fills the gap between terms at a boarding school elsewhere, aimed squarely at keeping criterion-based writing from going rusty over a long break.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three subjects run at Higher Level, three at Standard, alongside Theory of Knowledge and an Extended Essay of around four thousand words, with Internal Assessment folded into every subject's grade. Everyone sits the externally set papers in the same May window.",
      countryNote:
        "A Mysuru DP student is typically registered through a residential school elsewhere or an online provider, which puts the tutor in charge of teaching real depth, most often in Higher Level Maths, Physics or Economics, not just backing up a class already happening.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "At least two Diploma subjects sit alongside a career study, a structured reflective project and a set of personal and professional skills. Barely any Indian school runs it, and in Mysuru it shows up almost exclusively through online IB providers.",
      countryNote:
        "The reflective project and career study are generally handled directly by that online provider, so a Mysuru tutor's role stays narrowly on the Diploma subjects sitting underneath.",
    },
  ],

  subjectsIntro:
    "No full IB school locally means matching cannot lean on 'this is what the school already covers'; it has to start cold, from the exact subject, level and where the Internal Assessment stands, then work out a weekly rhythm around whatever school, residential campus or online provider the family already has.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Paper 3 rewards handling a problem the student has genuinely never seen before, and that skill fades fast without someone setting fresh, unfamiliar questions regularly." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling and statistics dominate the content, and the exploration needs a hard deadline early on, or it becomes the last thing touched before submission." },
    { name: "IB Physics", levels: "HL / SL", description: "Six thematic units, two written papers, and a Scientific Investigation that needs planning months, not days, ahead of the deadline." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure and bonding open the syllabus, organic chemistry and energetics dominate Higher Level later on, and steady practice between sessions beats a single long review each week." },
    { name: "IB Biology", levels: "HL / SL", description: "The content is usually fine; it is answering the precise command term asked, rather than the one the student expected, that costs marks." },
    { name: "IB Economics", levels: "HL / SL", description: "A correctly labelled diagram tied to a real example earns marks reliably; Higher Level students additionally need drilled practice at Paper 3's policy-style questions." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying a theory to the actual case study on the page earns marks, reciting it does not, and the Business Research Project needs a genuine organisation willing to be studied." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen commentary, a comparative essay, and the spoken argument the Individual Oral demands are three different muscles, and each needs its own practice." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Reading about object-oriented design is not the same as writing it, and the IA product needs actual coding hours logged, not just theory revised." },
    { name: "IB Psychology", levels: "HL / SL", description: "Naming a study correctly across the biological, cognitive and sociocultural approaches is a discipline, and it holds up better with someone checking the citations regularly." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "A case study summarised is worth less than a trade-off actually weighed, and that shift usually needs a tutor pushing past the first answer a student gives." },
    { name: "IB Kannada A", levels: "HL / SL", description: "Everyday fluency in Kannada helps enormously with the individual oral, but writing to IB's own criteria for literary analysis is a separate skill that still needs direct teaching." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Without classmates to push back on an argument, a Mysuru student's tutor ends up doing that job, testing a prescribed title from an angle the student would not have picked themselves." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel examine the same broad content in different ways and on different calendars, Cambridge in May-June or October-November, Edexcel in January or May-June, so a tutor's first job is confirming which one a family is actually on before touching a single topic.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Full working shown for every step, not just the right final answer, is what Extended tier demands, and that habit needs building deliberately rather than assumed." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "A year ahead of core Mathematics, this brings in calculus and trigonometric proof early, giving a real head start into IB Maths AA HL two years later." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "The mathematics is close to Cambridge's, but Higher-tier Edexcel questions read differently on the page, a gap that only closes with board-specific practice." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging an equation quickly under pressure, and knowing the alternative-to-practical paper's particular style, separates a strong result from a mediocre one." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations and organic chemistry carry the bulk of the marks, and the alternative-to-practical technique needs to be a running habit, not a last-minute cram." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics tends to be the make-or-break topic, and the extended-response questions want a specific structure that only becomes clear after a few marked attempts." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams earn Core-tier marks reliably, but the longer evaluative questions at Extended tier are where under-practised students consistently lose ground." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables make sense only once a student has actually run code and watched it behave the way, or not, the table predicted." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Summary and directed writing improve through direct teaching and timed practice on unfamiliar passages, not by osmosis over time." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Marks go to whoever answers the exact scenario printed on the page, not whoever recites the tidiest textbook definition." },
  ],

  regionsTitle: "Mysuru areas our online tutors work with",
  regionsIntro:
    "Lessons run online, so these areas matter for context, not travel: the schools and coaching options around a family, and how Dasara week or exam timing tends to reshape an evening.",
  regions: [
    { name: "Gokulam", note: "Close to Mysuru's yoga-study community; a neighbourhood with a fair number of long-staying foreign and NRI families." },
    { name: "Yadavagiri", note: "Leafy and central, near the University of Mysore, and home to I Can International School's early years centre." },
    { name: "Vijayanagar", note: "A large, newer layout on the city's north side, drawing IT-sector and professional households." },
    { name: "Saraswathipuram and Kuvempunagar", note: "Established, central neighbourhoods with a heavy concentration of CBSE and Karnataka State Board schools." },
    { name: "Jayalakshmipuram (JLB Road)", note: "An older institutional stretch close to several long-established schools and colleges." },
    { name: "Hebbal", note: "Where the Infosys campus sits, along with other IT and industrial units; many relocated professional families live nearby." },
    { name: "Hootagalli", note: "An industrial and IT belt on the edge of the city, home to staff from nearby manufacturing units." },
    { name: "Vontikoppal", note: "An older, central part of the city, mostly CBSE and State Board households." },
    { name: "Srirangapatna and the Mysuru-Bengaluru Highway", note: "Just outside the city limits; home to De Paul International Residential School, a boarding option some families here look at." },
  ],

  schoolDisclaimer:
    "Only two schools in or immediately around Mysuru could be independently confirmed to teach a Cambridge curriculum, which is too few for the sliding strip on this page; both are named honestly in the table and clusters below instead. IB Gram carries no contract, endorsement or partnership with any school named here, nor with the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Mysuru city",
      note: "I Can International School teaches Cambridge IGCSE from an early years base in Yadavagiri and a Grade 2 to 12 campus in Jakkanakuppe; no other school in the city could be confirmed as running IB or IGCSE.",
      schools: ["I Can International School"],
    },
    {
      city: "Srirangapatna, Mandya district",
      note: "Just past the city limits, De Paul International Residential School runs Pearson Edexcel IGCSE and, since 2024-25, the Cambridge curriculum as well, sitting both the June and January series.",
      schools: ["De Paul International Residential School"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "About three hours away, Bengaluru holds a far larger set of confirmed IB and Cambridge schools, and some Mysuru families weigh boarding a child there instead.",
      schools: ["Stonehill International School", "Canadian International School, Bengaluru", "Trio World Academy"],
    },
  ],

  modesIntro:
    "Every lesson from Mysuru runs online; Delhi NCR is the only place IB Gram sends a tutor to a family's door. Inside that, the choice is mostly about how much structure a child needs when no school nearby is teaching the same course.",
  modes: [
    {
      title: "Weekly one-to-one lessons over video",
      description:
        "A fixed slot each week, taught over a shared screen, working from whatever specification the family is actually enrolled with, wherever in India the tutor happens to live.",
      bullets: [
        "Choice of specialist is nationwide, not limited to who lives in Mysuru",
        "A shared whiteboard and past papers on screen, every session",
        "Suits DP, MYP, PYP and IGCSE subjects equally",
        "The same face returns each week, building real familiarity",
      ],
    },
    {
      title: "Holiday-block intensives",
      description:
        "For a child boarding at a school elsewhere, a concentrated run of sessions during the school break, catching up on what the term covered or getting ahead before it resumes.",
      bullets: [
        "Built around the actual dates of a boarding school's holidays",
        "Denser scheduling than a term-time weekly slot",
        "A written summary of ground covered, for the school term ahead",
        "Can combine with a lighter check-in once term resumes",
      ],
    },
    {
      title: "Exam-sprint sessions before May or October-November",
      description:
        "A tighter run of sessions in the weeks before an exam series, working timed papers and returning feedback fast, scheduled around Dasara and any local school holidays.",
      bullets: [
        "Timed past papers, marked against current criteria",
        "Feedback turned around within days",
        "Built around Dasara and other local school breaks",
        "Worth booking two to three weeks ahead of the series itself",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE families in a city where almost nobody teaches either",
      paragraphs: [
        "Two schools in or near Mysuru could be independently confirmed to run an international curriculum. I Can International School teaches Cambridge IGCSE from an early years base in Yadavagiri and a Grade 2 to 12 campus in Jakkanakuppe. De Paul International Residential School, a boarding school just outside the city in Srirangapatna, offers Pearson Edexcel IGCSE and added Cambridge for the 2024-25 year. Nothing else in the city could be confirmed as teaching the IB continuum or either IGCSE board.",
        "Demand for tutoring still exists, and it comes from a fairly small set of doors. Infosys keeps a large campus at Hebbal, and Wipro is also present, so professional postings sometimes bring in a child already partway through an international curriculum with nowhere local to continue it. Mysuru's decades-long pull as a centre for Ashtanga Yoga study draws foreign families who settle in for extended stretches and want schooling continuity regardless. Others are simply home from a boarding school elsewhere for the holidays.",
        "For most of these families, a tutor is not filling a gap next to a school lesson; the tutor is the lesson. That changes the job: setting the pace, assigning work between sessions, tracking where a student actually stands, the things a school would otherwise be doing.",
        "The syllabus itself does not change because of any of this. A Mysuru student sits the same papers, against the same criteria, as a peer in Bengaluru or Chennai; what differs is simply how much of the teaching runs through the tutor rather than a classroom.",
      ],
      table: {
        caption: "Confirmed international-curriculum schools in and around Mysuru",
        columns: ["School", "Location", "Curriculum"],
        rows: [
          ["I Can International School", "Yadavagiri (early years) and Jakkanakuppe (Grade 2-12)", "Cambridge IGCSE"],
          ["De Paul International Residential School", "Srirangapatna, Mandya district", "Pearson Edexcel IGCSE; Cambridge added 2024-25"],
          ["Stonehill International School (Bengaluru)", "Nearby city, roughly three hours by road", "IB PYP, MYP, DP"],
        ],
      },
      bullets: [
        "Two schools cover Cambridge in or near Mysuru; none confirmed for the full IB",
        "Demand comes from IT postings, long-staying yoga families, and boarding students home on break",
        "A tutor here usually is the lesson, not a supplement to one",
        "Exam papers and marking criteria are identical to any other Indian city",
      ],
    },
    {
      heading: "How different is IB or IGCSE from the CBSE and Karnataka State Board schooling most Mysuru children have?",
      paragraphs: [
        "CBSE and the Karnataka State Board, which between them cover most Mysuru schools, mark for close agreement with an expected answer. IB and IGCSE mark for something else: whether a student can explain a method, weigh an argument, or apply an idea to a scenario it was not written for.",
        "The internal assessment component is where the two systems really part ways. CBSE and the State Board include a small practical or project element; IB Internal Assessments and IGCSE coursework are detailed, published against explicit criteria, and expect planning skills that a board-exam education rarely builds on purpose. A Mysuru student picking this up cold, without a school demonstrating the process, needs it taught as its own skill.",
        "There is also a depth gap. IB Higher Level content sits well above CBSE or State Board content at the same age; IGCSE Core lands closer to CBSE, Extended sits above it. With no local school to weigh in on tier choice, that call generally falls to whoever is guiding the child directly.",
        "None of this settles which is harder. Several families we work with in Mysuru find the criteria-based system easier to plan a term against than one high-stakes CBSE paper, once they see how it actually works.",
      ],
      table: {
        caption: "CBSE and Karnataka State Board versus IB and IGCSE, for a Mysuru family",
        columns: ["What a parent wants to know", "CBSE / Karnataka State Board", "ICSE", "IB / IGCSE"],
        rows: [
          ["What gets the top score?", "Matching the expected answer closely", "Thorough, well-organised recall", "Argument, evaluation, applying a method to something new"],
          ["How much rides on ongoing work?", "A small practical or project piece", "A bit more than CBSE", "Often a fifth to a third of the grade in IB; varies by subject in IGCSE"],
          ["Who picks the tier or level?", "The board sets it", "The board sets it", "Usually worked out between tutor and family"],
          ["How widely is it accepted?", "Well across Indian universities", "Well across Indian universities", "By Indian and overseas universities alike"],
        ],
      },
      bullets: [
        "IB and IGCSE reward explanation and application, CBSE and the State Board reward recall",
        "Internal assessment is far more detailed and criteria-based in IB and IGCSE",
        "Tier or level choice usually falls to the tutor and family in Mysuru",
        "Criteria-based marking can feel easier to plan against once it clicks",
      ],
    },
    {
      heading: "What does a tutor for a Mysuru family actually cost?",
      paragraphs: [
        "The fee tracks the subject, the level, how long a session runs, and how recently a tutor has taught that specific syllabus, none of which has anything to do with Mysuru itself. Since so many Mysuru students need a tutor to carry the whole subject rather than support it, sessions here can end up running longer, or more often, than in a city where school teaching already does most of the lifting.",
        "Living outside a metro carries no surcharge. A lesson costs the same whether the tutor is sitting in Bengaluru, Chennai or Mumbai; distance from Mysuru is not part of the calculation at all.",
        "Given how much weight the tutoring often carries on its own here, it is worth asking directly how the full course gets paced, not just the next session, and how you will actually know whether progress is being made without a school report to check.",
        "There is no annual contract behind any of this. Reviews happen every few weeks, sessions pause for travel or exams without penalty, and a family unhappy with a match after the trial simply gets introduced to someone else.",
      ],
      bullets: [
        "Fee tracks subject, level, session length and tutor experience, not the city",
        "Sessions may run longer where the tutor is carrying the full syllabus",
        "No distance surcharge for being outside a metro",
        "No annual contract; pause or change tutors as your schedule needs",
      ],
    },
    {
      heading: "Coaching centre, self-study or a tutor: what actually gets a Mysuru student through IB or IGCSE",
      paragraphs: [
        "Mysuru's coaching scene runs almost entirely on engineering and medical entrance preparation, and that machinery simply has no batch built for a specific IGCSE code or an IB Higher Level syllabus. Walking into one expecting IB or IGCSE support wastes a term finding that out.",
        "A determined student can self-study a subject with clean past papers, IGCSE Mathematics being the standard example, but Internal Assessment planning, Extended Essay structure and the particular shape of an extended-response answer all improve fastest with someone marking the work and pushing back on it.",
        "A one-to-one tutor sidesteps both problems at once: no school teaching it, no coaching batch built for it, solved by someone who has actually taught the exact syllabus before. In Mysuru, that person is doing the job a school would elsewhere.",
        "This is a genuinely different setup from a bigger city, where tutoring usually tops up a school class already running. Here it is often the entire structured input a student gets, which is worth saying plainly rather than glossing over.",
      ],
      table: {
        caption: "Mysuru's realistic options for IB and IGCSE support",
        columns: ["Option", "Does it cover the syllabus?", "Attention", "The catch in Mysuru"],
        rows: [
          ["Engineering/medical coaching centres", "No, aimed at a different exam entirely", "Group, thin", "No IB or IGCSE batch exists here"],
          ["Self-study", "Only partly, depends on the student", "None", "Weak on IAs, the Extended Essay and extended response"],
          ["One-to-one online tutor", "Yes, built to the exact syllabus", "Full one-to-one", "Often the only structured teaching the student gets"],
        ],
      },
      bullets: [
        "Coaching centres here serve engineering and medical entrance, not IB or IGCSE",
        "Self-study alone rarely covers IAs, the Extended Essay or extended response well",
        "A one-to-one tutor solves the specific gap a coaching batch cannot",
        "For most Mysuru families, tutoring is the main structured input, not a top-up",
      ],
    },
    {
      heading: "Mysuru's calendar: mild weather, Dasara, and when to start",
      paragraphs: [
        "Sitting higher than most of Karnataka keeps Mysuru's climate genuinely gentle: warm from March to May without the extremes cities further north see, and cool enough in the evenings from November to February to need a light jacket. Heat is rarely the reason a session gets rescheduled here.",
        "Dasara is. The ten-day festival each September or October, built around the lit-up Mysore Palace and the Chamundeshwari procession, effectively pauses the city, schools included. A plan built without Dasara in it loses more time than one that simply works around it from day one.",
        "A Mysuru DP student faces the same real milestones as anywhere: internal exams and early Internal Assessment work through Class 11, IA deadlines and predicted grades through Class 12, mocks before May. Starting at the beginning of Class 11, not partway through, matters more here given there is no daily school reinforcement to lean on.",
        "IGCSE students hit an earlier fork: choosing Core or Extended, ideally with input from a tutor since no local school is guiding that decision, then the final six to eight weeks of concentrated, timed practice before the series, which is where most of the improvement actually happens.",
      ],
      table: {
        caption: "Mysuru's year, season by season",
        columns: ["Time of year", "What's actually happening", "What we adjust"],
        rows: [
          ["March-May", "Warm, but rarely extreme", "No real change to scheduling"],
          ["June-October", "Monsoon, generally moderate rainfall", "Occasional reschedule around heavy rain"],
          ["September-October", "Dasara; much of the city, schools included, pauses", "Sessions stop for the festival week"],
          ["May and October-November", "IB DP papers; the two IGCSE board sittings", "Final revision and timed past papers"],
        ],
      },
      bullets: [
        "Mysuru's climate is milder year-round than most cities we serve",
        "Dasara in September or October is the one fixed disruption every year",
        "Class 11, not Class 12, is when DP tutoring should start",
        "A later IGCSE start can still work, with the plan narrowed accordingly",
      ],
    },
    {
      heading: "Where a Mysuru IB or IGCSE student heads next",
      paragraphs: [
        "A good number of Mysuru students on an IB or IGCSE track are already looking past the city, toward a Bengaluru school, another Indian metro, or a university abroad, so tutoring here often gets planned with that endpoint in mind rather than around a fixed local finish line.",
        "For those staying within reach of home, the University of Mysore, JSS Science and Technology University and the National Institute of Engineering give the city a real academic base, on top of the national entrance exams. None of that opens automatically to an IB or IGCSE certificate holder: the qualification needs AIU equivalence, and JEE or NEET eligibility depends on having taken the right subjects at the right level in the first place.",
        "CUET-UG has quietly become a genuine way into a wide range of central and state universities without a CBSE board result at all, which matters given how many Mysuru tutoring students are not on an Indian board to start with.",
        "For an application abroad, or a move to another school entirely, the predicted grade issued in autumn of Class 12 is what a university actually sees first, months before the real result exists. IB Gram's tutors keep to the academic half of that: subject depth and exam technique, leaving admissions strategy to the family.",
      ],
      bullets: [
        "University of Mysore, JSS and the National Institute of Engineering anchor local higher education",
        "AIU equivalence and the right subjects matter before JEE or NEET is even possible",
        "CUET-UG is a real route for non-CBSE students into Indian universities",
        "Predicted grades in Class 12 autumn carry real weight abroad and for school moves",
      ],
    },
    {
      heading: "How does IB Gram actually match a tutor to a Mysuru family?",
      paragraphs: [
        "A short set of facts gets this moving: board or programme, exact subject and level, where the child stands today, the exam date being aimed at, and whether the tutor needs to run the whole subject or simply reinforce something already being taught.",
        "With no local classroom to check a candidate against, the process leans on evidence instead: what have they taught recently, at this exact level, and can they structure a full term without a school timetable alongside them to lean on.",
        "The trial lesson does the rest of the work. You watch how the tutor handles a real question, whether the pace suits your child, and whether they seem genuinely at ease owning the subject rather than just supporting it. A short plan for the first month follows, open to your edits before anything locks in.",
        "A tutor who is not right gets swapped without drama, and nothing here runs on a contract that outlasts the arrangement's usefulness.",
      ],
      bullets: [
        "Brief covers programme, subject, level, exam date, and how much the tutor needs to carry",
        "Recent, verifiable teaching at the right level matters more here than a résumé",
        "Trial lesson first; written plan for month one before anything regular begins",
        "Swapping tutors costs nothing, since nothing is signed for the long term",
      ],
    },
  ],

  tutorsIntro:
    "The tutors below already teach across the IB continuum and both IGCSE boards; none live in Mysuru, and none need to. What matters for a match here is recent, specific teaching experience with your child's exact course, and a willingness to run the whole thing rather than tidy up around a class that does not exist locally.",

  process: [
    { title: "Lay out where things stand", description: "Board or programme, subject and level, and whether a tutor needs to teach the whole thing or reinforce it." },
    { title: "Review a shortlist", description: "Names picked for recent, specific experience with that exact course, given there is little local teaching to compare them against." },
    { title: "Watch a free lesson", description: "One real session, on video, on an actual topic, before anything is paid or promised." },
    { title: "Check the first-month plan", description: "A short written outline of topics and how you will hear about progress, open for you to push back on." },
    { title: "Carry on, at your pace", description: "A fixed weekly slot, revisited periodically, shifted around Dasara, exams or travel as they come up." },
  ],

  whyPoints: [
    { title: "Picked for the course, not a profile", description: "The match runs on the exact subject and level, or the precise IGCSE board and tier, never a broad 'IB tutor' label." },
    { title: "Built for a city with almost no local option", description: "Tutors expect to teach full subject depth here, not just answer questions around a class Mysuru does not have." },
    { title: "Proof before payment", description: "One real lesson comes first, so the decision is based on what you saw, not what a profile claims." },
    { title: "Guides work, never writes it", description: "IAs, coursework and the Extended Essay get feedback and direction; the graded text stays the student's own." },
    { title: "You can see what's happening", description: "A note after each session and a real check-in every few weeks, in place of the school report you do not otherwise get." },
    { title: "Nothing locks you in", description: "No ties to a school or exam board, no long contract, and a straightforward re-match whenever it is not working." },
  ],

  faqs: [
    { question: "Does Mysuru have an IB school?", answer: "Not one we could independently confirm. Mysuru's schools run mainly on CBSE and the Karnataka State Board, with two schools nearby teaching a Cambridge curriculum but none confirmed for the full IB. Families here usually build IB support through online tutoring alongside a boarding school or online provider elsewhere." },
    { question: "Which Mysuru schools actually teach IGCSE?", answer: "I Can International School, with an early years centre in Yadavagiri and a main campus in Jakkanakuppe, teaches Cambridge IGCSE. De Paul International Residential School, just outside the city in Srirangapatna, runs Pearson Edexcel IGCSE and added Cambridge from 2024-25. Almost every other Mysuru school follows CBSE or the Karnataka State Board." },
    { question: "How does IB Gram find a tutor for my child in Mysuru?", answer: "Tell us the programme, subject, level and target exam session, and we shortlist tutors with recent experience teaching that exact course. Given how few local schools teach these syllabuses, we specifically look for tutors ready to carry full subject depth, not just answer occasional questions. A free lesson comes before anything else." },
    { question: "Can a tutor visit our home in Mysuru?", answer: "No. Home visits are a Gurugram and Delhi NCR service only; everywhere else in India, Mysuru included, lessons run live online, one to one, over a shared screen. It is genuine private tuition, delivered on video rather than at your door." },
    { question: "What should we expect to pay for a tutor in Mysuru?", answer: "The fee tracks the subject, level, session length and the tutor's experience, confirmed in writing before the trial, not the fact that you're in Mysuru. Sessions may run longer or more often here since a tutor often carries the whole syllabus rather than topping up a school class. There is no annual contract." },
    { question: "Why does a Mysuru family need a tutor at all if the schools don't teach this?", answer: "A handful of recurring situations: a child boarding at a Cambridge or IB school elsewhere, home for the holidays; an Infosys or Wipro family whose child was already on an international curriculum before relocating; long-staying yoga or heritage-tourism households; or a family planning ahead of an eventual move to Bengaluru." },
    { question: "Can we see how the tutor teaches before paying anything?", answer: "Yes, always. The first lesson is live, online, on a real topic from your child's syllabus, free of charge and with nothing owed after. Only once you have actually watched the tutor work does a short plan for the next month get written, and you can decide not to continue at that point." },
    { question: "Will the tutor write parts of my child's Internal Assessment for them?", answer: "No. They will help choose a workable research question, explain what a criterion is really asking for, check a data collection plan, and give honest feedback on drafts, but the graded text itself stays entirely the student's own. Producing or correcting it would breach IB's own integrity rules." },
    { question: "What Diploma subjects can IB Gram actually cover in Mysuru?", answer: "Both Maths options, Analysis and Approaches and Applications and Interpretation, at HL and SL; Physics, Chemistry and Biology; Economics and Business Management; English A; Computer Science; plus support for Theory of Knowledge and the Extended Essay." },
    { question: "My child is in MYP or PYP, not the Diploma. Does IB Gram still help?", answer: "Yes, across the full continuum. With so few local schools teaching this, MYP and PYP support in Mysuru usually fills school holidays or runs alongside regular local schooling, keeping inquiry and criterion-based skills sharp between terms." },
    { question: "Which IGCSE subjects and boards do you cover from Mysuru?", answer: "Both Cambridge and Edexcel, across Mathematics, Additional Mathematics, Physics, Chemistry, Biology, Economics, Computer Science, English First Language and Business Studies, matched to whichever exact code and tier your family already follows." },
    { question: "Is online tutoring really enough without a nearby IB or IGCSE school?", answer: "It holds up well, provided the tutor is set up to teach the whole subject rather than just clarify doubts around one, which is specifically how matches are made for Mysuru. A shared screen, a deliberate weekly plan and properly marked past papers cover most of what a classroom would otherwise do." },
    { question: "How do you vet a tutor when there's no local school to compare them against?", answer: "By looking hard at what they have actually taught recently, at the exact subject and level needed, and how they plan a full term without a school running alongside them. The trial lesson afterwards is where you confirm the fit for yourself." },
    { question: "When is the right time to start IB or IGCSE tutoring for a Mysuru student?", answer: "As close to the start of the course as possible: the beginning of Class 11 for the Diploma, Grade 9 for IGCSE, since there is little local reinforcement to fall back on. A later start still helps, narrowed to whatever will move the exam result most." },
    { question: "Does scheduling account for Dasara and Mysuru's school calendar?", answer: "Yes. Sessions pause for the full Dasara week each September or October, since much of the city, schools included, effectively shuts down, and scheduling works the same way around other local holidays and Annual Exam weeks." },
    { question: "What if the tutor isn't right for my child?", answer: "Say so, and a different tutor is found. Reviews happen every few weeks specifically to catch this early, and since nothing is signed long term, switching or pausing costs you nothing beyond the conversation itself." },
    { question: "Is IB Gram connected to any Mysuru school, the IB, or Cambridge?", answer: "No. IB Gram runs independently of every school, the International Baccalaureate Organization, Cambridge Assessment International Education and Pearson Edexcel, and tutors simply follow whatever curriculum and calendar a family's own school or provider has set." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "See how IB and IGCSE tutoring differs from one Indian city to the next." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The only part of India where an IB Gram tutor visits a home in person." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject choices, HL and SL, the Extended Essay and TOK, explained fully." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP's criteria, the Personal Project and eAssessment, laid out plainly." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "How a unit of inquiry works and what the Exhibition involves." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject options across IGCSE explained." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "What actually separates Analysis and Approaches from Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Search by the exact subject and programme your child needs." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and get a free trial lesson on the calendar." },
    { label: "IB and IGCSE tutoring in Bengaluru", href: "/bengaluru/", description: "The closest large city, with a far wider set of confirmed IB and IGCSE schools." },
    { label: "IB tutors in Mysuru", href: "/ib-tutors/mysuru/", description: "Programme and subject-level pages for IB tutoring in Mysuru." },
    { label: "IGCSE tutors in Mysuru", href: "/igcse-tutors/mysuru/", description: "Cambridge and Edexcel IGCSE tutor matching specific to Mysuru." },
    { label: "IGCSE in Mysuru", href: "/igcse-pages/mysuru/", description: "A closer look at how IGCSE tutoring works for Mysuru families." },
  ],

  closingHeading: "Book a free lesson with an IB or IGCSE tutor from Mysuru",
  closingBody:
    "Tell us the board or programme, the subject and level, where your child currently stands, and a few times that work for your household. We will come back with a tutor matched to that exact course, what they have taught before, and a slot for a free first lesson, no payment and nothing to sign. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",
};
