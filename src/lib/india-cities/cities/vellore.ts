import type { CitySeoPage } from "../types";

/**
 * /vellore/ - IB and IGCSE tutoring page for Vellore, Tamil Nadu. Online-only delivery: tutors do
 * not visit homes in Vellore, since in-person home tuition is offered only in Gurugram and parts of
 * Delhi NCR. Two schools inside Vellore itself are confirmed teaching Cambridge IGCSE: Springdays
 * International School (NH48, Eraivankadu) and The Geekay World School, both verified via their own
 * sites. "Vellore International School (VIS)" is excluded: its own site confirms it is actually in
 * Kelambakkam, Chennai, despite the name. No IB World School is confirmed in Vellore (schoolmykids.com
 * "IB schools in Vellore" returns zero). Per the guide, fewer than 3 confirmed local schools keeps
 * stripSchools at []; the two real schools are named honestly inside schoolClusters instead.
 * Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const vellore: CitySeoPage = {
  slug: "vellore",
  countryName: "Vellore",
  countryNameLong: "Vellore, Tamil Nadu",
  demonym: "Vellore",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We work around CMC's clinic calendar for families in the city for treatment, VIT's own term dates, and whatever timetable your child's own school keeps",
  lastUpdated: "2026-09-21",
  geo: { latitude: 12.9165, longitude: 79.1325 },
  wikipedia: "https://en.wikipedia.org/wiki/Vellore",
  alternateNames: ["Velur"],
  // Fewer than 3 confirmed local schools (Springdays International School and The Geekay World
  // School), so per the guide stripSchools stays empty. See schoolClusters for the honest picture.
  stripSchools: [],

  title: "IB & IGCSE Tutors in Vellore | Online, One to One",
  metaDescription:
    "IB and IGCSE tutors for Vellore families: Cambridge subjects, IB Diploma, MYP and PYP, matched to your syllabus, taught live online, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Tuition in Vellore",
  heroEyebrow: "ONLINE IB & IGCSE TUTORING FOR VELLORE FAMILIES",
  imageAltText: "A student in Vellore following an IGCSE Physics lesson on a laptop, tutor visible on screen, notebook open",
  heroSubtitle:
    "Two schools inside Vellore, Springdays International and The Geekay World School, already teach Cambridge IGCSE, and families connected to either one regularly want a subject specialist alongside the classroom teaching. Others land here through CMC, treating a child here for months while trying not to lose a term, or through VIT, where research and teaching staff arrive from other states or countries mid-year. Whichever route brought you here, a tutor is matched to the exact syllabus your child is actually on and teaches over video, never in person, since Vellore sits outside the small patch of India where a tutor visits a home.",
  primaryKeyword: "IB and IGCSE tutors in Vellore",
  secondaryKeywords: [
    "IB tutor Vellore",
    "IGCSE tutor Vellore",
    "IB home tuition Vellore",
    "IGCSE home tuition Vellore",
    "IB private tuition Vellore",
    "IB Maths tutor Vellore",
    "IGCSE Maths tutor Vellore",
    "IB Physics tutor Vellore",
    "IB Chemistry tutor Vellore",
    "IB Biology tutor Vellore",
    "IB DP tutor Vellore",
    "IB MYP tutor Vellore",
    "IB PYP tutor Vellore",
    "IGCSE online tuition Vellore",
    "Cambridge IGCSE tutor Vellore",
    "IB tutor Katpadi Vellore",
    "IGCSE tutor Gandhi Nagar Vellore",
    "online IB tutor Vellore Tamil Nadu",
    "IB tutor near VIT Vellore",
  ],

  heroTrustPoints: [
    "Matched to the exact Cambridge code and tier, or IB subject and level, a student is actually working through",
    "Taught entirely over video; a tutor calling at a Vellore address is not something this platform offers anywhere outside Gurugram and parts of Delhi NCR",
    "Watch a genuine class free of charge before spending anything",
    "No relationship with Springdays, GeeKay, VIT, CMC, or the IB, Cambridge and Pearson Edexcel bodies themselves",
  ],
  heroStats: [
    { value: "PYP, MYP, DP, CP", label: "Every IB stage taught" },
    { value: "Cambridge & Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "Tutor and student, one clock" },
    { value: "Free first lesson", label: "Pay only if you continue" },
  ],

  intro: {
    heading: "What tutoring means for a Vellore family day to day",
    paragraphs: [
      "Vellore is unusual among smaller Indian cities in that it already has two schools teaching Cambridge IGCSE inside the city itself, Springdays International School out on NH48 and The Geekay World School. Families at either one still come to us, most often wanting a subject specialist to sit alongside what the classroom already covers, particularly once a child nears an exam series or gets stuck on a topic the school moved past too quickly.",
      "A second, quite different group reaches out because of what Vellore is for the rest of the country: a place people come to for medicine, at CMC, or for higher education, at VIT. A family camped here for months of cancer treatment, or a visiting faculty member's child settling in mid-term, both need a curriculum kept alive without the fixed rhythm a normal school year assumes. Neither situation is solved by finding a tutor nearby; it is solved by finding one who knows the syllabus.",
      "For the IB specifically, nothing local carries World School status at any stage, so a Diploma, Middle Years or Primary Years request tends to point outward, most often to Chennai, roughly 135 kilometres east, where the school base is considerably deeper. A session itself looks the same regardless of why a family reached out: one tutor, one student, a shared screen, and material drawn from the actual paper or unit a school has set that week.",
      "This page does not represent a partnership with Springdays, GeeKay, VIT, CMC or any other name mentioned here, nor with the IB, Cambridge Assessment International Education or Pearson Edexcel. A tutor explains, corrects and marks; producing or rewriting graded work such as an Internal Assessment, an Extended Essay or IGCSE coursework on a student's behalf is refused outright.",
    ],
    bullets: [
      "Every IB stage covered, PYP through to a Diploma candidate's final year",
      "Cambridge and Edexcel IGCSE matched to the specific code and tier",
      "Live one-to-one video lessons, run on Indian Standard Time",
      "A short written plan follows the opening lesson",
      "No home visits in Vellore; that stays limited to Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Vellore itself holds no IB authorisation at any level, so a family here dealing with the Primary Years, Middle Years, Diploma or Career-related Programme is almost certainly doing so because of Chennai, VIT or CMC rather than a local school. The kind of help that actually makes a difference shifts quite a lot across the four stages.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "A young learner on this track never sits a formal exam; classes instead spend weeks chasing one big question together, and the oldest cohort wraps things up by presenting an Exhibition they have researched themselves. A tutor coming in at this stage is not teaching a subject so much as building the underlying skills, being able to read for longer, feeling at ease with numbers, and refusing to stop at the first answer that comes to mind.",
      countryNote:
        "A PYP request from Vellore almost always follows a VIT or CMC arrival mid-year, where the point is simply not letting the pace a previous school set slip while a family finds its feet.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Rather than a single percentage, each subject on this programme carries a handful of separate criteria, a Personal Project is due by Year 5, and a few schools layer a formal eAssessment on at the very end. Where students genuinely struggle is not remembering facts; it is building an argument that actually answers a criterion rather than just describing what took place.",
      countryNote:
        "MYP work connected to Vellore nearly always belongs to a child boarding somewhere else, usually Chennai, and the sessions here focus on catching up a piece of criterion-marked coursework over a holiday.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A candidate juggles six subjects at once here, half pushed to Higher Level, half kept at Standard, plus Theory of Knowledge, a mandatory Extended Essay, and coursework that typically counts for somewhere between a fifth and a third of any given subject's overall grade. Exams run in May, the bulk of results land by early July, and November carries a smaller sitting mostly used for retakes.",
      countryNote:
        "Since nowhere in Vellore actually offers the Diploma, planning here runs entirely on a boarding school's own calendar, typically Chennai's, rather than any date fixed locally.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "This pathway sits two or more Diploma subjects next to a career-focused study, a written reflective piece, and a bundle of practical skills modules. Not many schools across India have taken it up yet, though wherever it does appear, the Diploma subjects inside it get taught with exactly the same depth as anywhere else.",
      countryNote:
        "We rarely hear from a Vellore family about CP specifically, given how few schools nearby run it at all; when it does come up, the actual work centres on the Diploma subjects rather than the career element.",
    },
  ],

  subjectsIntro:
    "A GeeKay student prepping for a Cambridge Additional Mathematics paper needs a completely different session from a boarding student polishing a History Internal Assessment during a school holiday, so we start from the precise subject and level a student is actually on rather than treating IB as one single thing. Timing follows from there, built around the real exam series and whichever school calendar applies.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "The biggest single win here is starting the mathematical exploration early in a break rather than the final week, since a strong topic choice usually matters more to the final mark than any last-minute polish." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Fluency with real data and the graphic calculator wins more marks in this course than clever algebra does, so sessions lean hard into modelling practice rather than pure technique." },
    { name: "IB Physics", levels: "HL / SL", description: "Most lost marks trace back to the data booklet, not the physics itself, so a tutor drills quick, accurate lookups before turning to a Scientific Investigation built to withstand real scrutiny." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Organic chemistry is where confidence usually cracks, well after the bonding and structure units are done, and matching an investigation write-up to what examiners actually reward takes several redrafts." },
    { name: "IB Biology", levels: "HL / SL", description: "Knowing the syllabus rarely converts into marks on its own; answering exactly what the command word demands does, and shaky statistics is what most often sinks an otherwise solid investigation." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams earn quick marks once they are accurate and tied to a current example, but the real gains at HL come later, in the policy evaluation Paper 3 is actually testing for." },
    { name: "IB Business Management", levels: "HL / SL", description: "Reciting theory without applying it to the case study on the page is the single fastest way to lose marks, so sessions work directly from past papers, and the research project needs a genuine cooperative business behind it." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Instinct alone rarely carries a student through the unseen commentary or the comparative essay; both need drilled technique, and the Individual Oral demands more rehearsal time than almost anything else on the syllabus." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode and abstract theory stay theoretical until a student is regularly writing and testing real code, since the final IA is judged on software that actually runs and matches its own documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "Current, accurately cited studies across the biological, cognitive and sociocultural approaches matter, but the real differentiator is a long-response answer rehearsed enough to hold together under time pressure." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "A tidy textbook summary earns fewer marks than a genuine challenge to how a system actually functions, so sessions here train argument over recall from the outset." },
    { name: "IB Geography", levels: "HL / SL", description: "Naming an actual place and figure beats a vague generalisation every time, and a fieldwork write-up gets checked hard for whether the method would genuinely survive scrutiny." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 is won through close, sceptical reading of sources; Paper 2 through an essay that holds one argument from the first line to the last; the two get practised as separate skills." },
    { name: "IB Tamil A / B", levels: "HL / SL", description: "Getting register and text type right early prevents the fastest source of lost marks, which frees up later sessions for the unscripted conversation practice the individual oral actually demands." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "A TOK session works as a real argument rather than a talk at a student, pulling an exhibition commentary apart claim by claim and asking a student to hold a prescribed title from an angle they did not pick themselves." },
  ],

  igcseSubjectsIntro:
    "Because Springdays and GeeKay both teach on Cambridge, that is where most Vellore IGCSE work naturally begins, though a CMC or VIT family arriving from elsewhere sometimes carries an Edexcel syllabus instead. Either board, the plan is built around the student's own school code and tier first and the actual sitting, May-June, October-November, or Edexcel's near-equivalent dates, second.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Core / Extended, Foundation / Higher", description: "Before chasing a tier upgrade, a student generally needs raw speed without a calculator, since this paper punishes a dropped method mark harder than it punishes one wrong final number." },
    { name: "IGCSE Additional Mathematics 0606 / 4PM1", levels: "Grade 10", description: "Getting a head start on calculus and vector work here, well before the IB Diploma would otherwise introduce either, pays off directly for a student later moving into Maths AA." },
    { name: "IGCSE Physics 0625 / 4PH1", levels: "Core / Extended, Foundation / Higher", description: "It is speed under pressure, not the physics itself, that usually costs marks on this paper, which is why the alternative-to-practical component earns a dedicated rehearsal slot of its own." },
    { name: "IGCSE Chemistry 0620 / 4CH1", levels: "Core / Extended, Foundation / Higher", description: "Rather than treating practical technique as a late add-on, mole-ratio work and organic reactions get taught alongside it right from the first session." },
    { name: "IGCSE Biology 0610 / 4BI1", levels: "Core / Extended, Foundation / Higher", description: "Both Cambridge and Edexcel weight genetics questions more heavily than students expect, so those extended answers get singled out for their own practice rather than lumped in with general revision." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams bring in the quick, reliable marks; the harder evaluative questions, which a Core-tier student would rather skip, are where sessions actually earn their keep." },
    { name: "IGCSE Computer Science 0478 / 4CP0", levels: "Grade 9-10", description: "Working real Python problems from day one beats abstract theory, because tracing an algorithm on paper rarely sinks in until it has been typed out and actually run." },
    { name: "IGCSE English First Language 0500 / 4EA1", levels: "Grade 9-10", description: "Practising an unseen passage under a clock, together with explicit summary technique, moves the needle far more than open-ended vocabulary work ever does on its own." },
    { name: "IGCSE Business Studies 0450 / 4BS1", levels: "Grade 9-10", description: "A generic, memorised answer nearly always loses to one tailored to the case study actually printed on the page, so that specific application gets rehearsed directly." },
  ],

  regionsTitle: "Vellore localities our online matching covers",
  regionsIntro:
    "Nothing here changes how a tutor reaches a student, since every lesson runs on a screen, but the areas below still matter for practical planning: which school a family's child attends, how close a home sits to CMC or the VIT campus, and what an evening study slot actually looks like once traffic and term dates are factored in.",
  regions: [
    { name: "Katpadi", note: "Home to Vellore's railway junction and a fast-growing residential belt, popular with families connected to VIT's satellite campuses nearby." },
    { name: "Gandhi Nagar", note: "A central, established residential area close to CMC, home to a noticeable share of families in the city for extended medical treatment." },
    { name: "Sathuvachari", note: "A large planned residential township on the city's edge, with a genuine mix of state board, matriculation and CBSE schooling." },
    { name: "Bagayam", note: "Close to CMC's Bagayam campus, with a hostel and staff-housing population that shifts a fair amount through the year." },
    { name: "Thorapadi", note: "A quieter residential stretch on the western side, within easy reach of both Springdays International School and the NH48 corridor." },
    { name: "Officers Line", note: "An older, leafy locality near the town centre, home to professional families weighing a switch from matriculation schooling." },
    { name: "VIT campus vicinity (Kelamattoor Road)", note: "Housing for VIT faculty and visiting academics, with families here often needing continuity for a curriculum begun somewhere else entirely." },
    { name: "Vellore Fort and town centre", note: "The historic core of the city, dense and commercial, with schooling dominated by Tamil Nadu state board and matriculation institutions." },
  ],

  schoolDisclaimer:
    "Springdays International School and The Geekay World School are named here because they are the two schools genuinely teaching Cambridge IGCSE inside Vellore; Chennai's schools appear because that is where the fuller IB and Cambridge picture actually exists. None of this implies any working relationship: IB Gram is not contracted to, and does not represent, any school listed, nor the IB, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Vellore city",
      note: "Two schools here are confirmed teaching Cambridge IGCSE; neither carries IB authorisation, and Tamil Nadu state board and matriculation schooling covers most of the rest of the city.",
      schools: ["Springdays International School, Eraivankadu", "The Geekay World School"],
    },
    {
      city: "Nearby: Ranipet region",
      note: "A short drive out toward Ranipet, families sometimes weigh a CBSE and Cambridge boarding option in the wider corridor beyond Vellore's own city limits.",
      schools: [],
    },
    {
      city: "Nearby: Chennai",
      note: "Around 135 kilometres east, and where the region's real IB depth sits, alongside a much larger Cambridge school base than Vellore itself offers.",
      schools: ["APL Global School", "Gateway International School"],
    },
    {
      city: "Nearby: Delhi NCR (boarding only)",
      note: "A considerable distance away, but the widest choice of IB Diploma schools nationally; in-person tutoring itself is genuinely available only here and in Gurugram, never delivered back into Vellore.",
      schools: ["Pathways World School, Aravali"],
    },
  ],

  modesIntro:
    "Every arrangement for a Vellore-connected student reduces to the same core: a tutor and a student, live over video, matched by syllabus. Three formats cover almost every request, and the difference between them is pace and structure, not the underlying delivery.",
  modes: [
    {
      title: "A fixed weekly lesson",
      description:
        "The same slot every week, tutor and student sharing a screen, timed around a Vellore school day or a boarding term elsewhere. Most arrangements here start out exactly this way.",
      bullets: [
        "Choice of tutor is never limited by where they happen to live",
        "Works equally well for IB DP, MYP and either IGCSE board",
        "Past papers get marked live, on the call, not returned days later",
        "One tutor stays with a student for the whole term, not a rotating list",
      ],
    },
    {
      title: "A term with written progress notes",
      description:
        "The same weekly rhythm continues, but a short note follows every class and a fuller review happens every few weeks, so progress is never left to guesswork.",
      bullets: [
        "A note after each class records exactly what was covered",
        "A periodic review resets priorities the moment something stops landing",
        "A sensible choice for a younger PYP or MYP student on a steady pace",
        "Adding a second slot before mocks takes a single message",
      ],
    },
    {
      title: "A focused block before an exam series",
      description:
        "Sessions run closer together across a school holiday or the final weeks before an exam, centred on timed past papers marked and returned fast, planned around CMC and VIT term calendars where those apply.",
      bullets: [
        "Every paper is timed and marked to this year's actual grade boundaries",
        "Feedback comes back within days, not the following week",
        "Dates follow a boarding school's real calendar, never a guessed one",
        "Booking two to three weeks before a term ends gets the best results",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE families connected to Vellore, and where their children study",
      paragraphs: [
        "Vellore sits in an unusual middle ground for a city of its size. It is not without an international curriculum, since Springdays International School and The Geekay World School both run Cambridge IGCSE inside the city, but it has no school carrying IB World School status at any level, and the wider international-curriculum base is still thin compared with Chennai, just over two hours east.",
        "Three groups make up most of the enquiries we see. Families with a child already at Springdays or GeeKay want a specialist to run alongside classroom teaching, usually once an exam series or a tricky topic comes into view. Families connected to CMC, in the city for extended medical treatment, or to VIT, through research, teaching or postgraduate work, need a tutor who can pick up a curriculum mid-year with no local school to lean on. A smaller group is weighing whether to board a child in Chennai for the IB in the first place.",
        "For that second group especially, geography barely matters. A CMC family working through months of treatment, or a VIT researcher's child settling into India mid-term, gains nothing from a tutor who happens to live nearby and everything from one who has actually taught the specific board and level their child is on, wherever in the country that person happens to be.",
        "None of this puts a Vellore-connected student at a disadvantage academically. Cambridge and Edexcel set one national paper, IB moderation applies a single standard to every Diploma script regardless of where it was written, and a tutor who genuinely knows the mark scheme closes the gap between a student here and one at a much larger school elsewhere.",
      ],
      table: {
        caption: "IB and IGCSE options in and around Vellore",
        columns: ["Location", "Distance from Vellore", "What's actually there"],
        rows: [
          ["Vellore city", "-", "Two confirmed Cambridge IGCSE schools; no IB school"],
          ["Ranipet region", "A short drive out", "A wider corridor of CBSE and Cambridge options beyond city limits"],
          ["Chennai", "About 135 km east", "A considerably larger IB and Cambridge school base"],
          ["Delhi NCR", "A long way north", "Widest IB Diploma choice; the only place with in-person tuition"],
        ],
      },
      bullets: [
        "Two schools inside Vellore teach Cambridge IGCSE; none carries IB authorisation",
        "CMC and VIT bring a steady stream of families needing curriculum continuity, not a local school",
        "Chennai, about 135 km away, holds the region's real depth of IB and Cambridge schools",
        "Exam standards and marking stay identical no matter where a student is based",
      ],
    },
    {
      heading: "Why do CMC and VIT families in particular ask about tutoring?",
      paragraphs: [
        "CMC draws patients and their families from across India and beyond, and treatment can run for months, not weeks. A child accompanying a parent through that, or being treated themselves, cannot simply pause school; what they need is someone who can keep a specific subject moving without a fixed classroom behind it, on a schedule that bends around clinic appointments rather than fighting them.",
        "VIT operates on a different rhythm again. Faculty, researchers and postgraduate students arrive from other Indian states and from abroad throughout the year, often with a school-age child already partway through an IB or Cambridge syllabus that no school in Vellore continues. Picking up mid-unit, mid-Internal Assessment or mid-Personal Project is the norm here, not the exception.",
        "Both situations share the same underlying need: continuity that does not depend on finding the right school nearby, because the right school nearby usually does not exist for that exact syllabus. A tutor matched to the precise board and level a child already knows can start immediately rather than asking a family to wait for a local option to appear.",
        "None of this is unique to Vellore in principle, but the scale of it is. Few Indian cities of this size have both a major medical referral centre and a large private university drawing international staff, and that combination is what keeps this kind of enquiry coming in steadily rather than as a rare exception.",
      ],
      bullets: [
        "CMC treatment can run for months, and schooling cannot simply pause for that long",
        "VIT brings faculty and research families with children already mid-syllabus",
        "Both groups need continuity on an exact syllabus, not a nearby school",
        "This combination of hospital and university is unusually large for a city Vellore's size",
      ],
    },
    {
      heading: "How does Tamil Nadu state board or matriculation schooling compare with IB or IGCSE?",
      paragraphs: [
        "Most Vellore schools run on the Tamil Nadu State Board or the matriculation stream, both of which set a fixed paper against a fixed syllabus that a well-prepared student can often clear through recall and familiar patterns. Cambridge and Edexcel IGCSE work differently: an Extended or Higher-tier question regularly places a familiar idea inside an unfamiliar scenario, catching out a student who has only memorised the steps.",
        "Coursework marks the clearest split. State board and matriculation schooling include a project or practical component, but neither prepares a student for how strictly an IB Internal Assessment or IGCSE coursework piece is held to published criteria. A student joining Springdays or GeeKay, or an IB school in Chennai, around Class 9 or 11 has usually never planned an independent piece of assessed work, and that gap in process is where a tutor's earliest sessions concentrate.",
        "Depth pulls the systems apart further. HL Maths and HL sciences at Diploma level go well past what Tamil Nadu's own boards reach at a similar age, and IGCSE's Core or Foundation tier sits close to matriculation difficulty while Extended or Higher sits a clear step above. The tier a student takes in Grade 9 quietly decides how steep Class 11 will feel later.",
        "None of this argues against making the move. Vellore families weighing a switch, whether into Springdays, GeeKay or a boarding option in Chennai, often end up preferring the spread-out, criteria-based workload once it is set against the single high-stakes paper a state board or matriculation student sits at year end.",
      ],
      table: {
        caption: "Tamil Nadu schooling set against IB and IGCSE",
        columns: ["Feature", "State Board / Matriculation", "IB / IGCSE"],
        rows: [
          ["Available in Vellore", "Yes, at most local schools", "Yes for Cambridge IGCSE (2 schools); no for IB"],
          ["Exam style", "Fixed paper, recall-heavy", "Applies knowledge in unfamiliar contexts"],
          ["Coursework weight", "A modest project component", "20-30% in most IB subjects; formal IGCSE coursework"],
          ["Recognition", "Within India", "Recognised internationally"],
        ],
      },
      bullets: [
        "Extended and Higher-tier questions defeat rote learning far more than state board papers do",
        "Planning an independent piece of assessed work is the real skill gap on any switch",
        "The Grade 9 tier choice quietly sets how steep Class 11 will feel",
        "Many families end up preferring the criteria-based workload once they compare the two directly",
      ],
    },
    {
      heading: "What should IB or IGCSE tutoring cost a Vellore family?",
      paragraphs: [
        "Ask about IGCSE Biology support and IB Maths AA HL in the same breath and you will get two very different numbers back, purely because so few tutors teach Diploma HL content compared with the much wider bench available for IGCSE Core or Foundation. Whatever figure applies to your pairing gets settled before a trial ever runs, and it stays fixed from there.",
        "A Vellore quote carries nothing for travel, since a tutor teaching from Kochi costs exactly the same as one who happens to live thirty minutes away, given that neither is being asked to turn up anywhere. That equivalence matters more here than in a city with a deeper local bench, precisely because Vellore's own bench is so shallow for either curriculum.",
        "It is worth paying more attention to what a session actually delivers than to the rate itself. A tutor who marked this year's Cambridge 0620 papers, or who has walked several students through an IB History IA recently, gets a student further in one hour than someone simply repeating what a school has already taught.",
        "No fixed term applies to any of this. We check in periodically regardless of how things are going, a session can be paused with no consequence, and a poor trial simply means trying a different tutor rather than pushing on with the wrong one.",
      ],
      bullets: [
        "Diploma HL pricing runs higher nationally purely because so few tutors teach it, not because it is harder",
        "Travel adds nothing to a Vellore quote, since every lesson happens over video",
        "Your pairing's cost is settled before the trial and stays that way",
        "There is no fixed term, and stopping or pausing carries no consequence",
      ],
    },
    {
      heading: "Coaching centres, school-based tuition or self-study: what actually works here?",
      paragraphs: [
        "Vellore's coaching lanes, particularly around Katpadi and Sathuvachari, are built for NEET and state board preparation, reflecting the city's own medical-education gravity. Nobody runs a batch for IB Chemistry HL or IGCSE Additional Mathematics here, since the handful of students across the city taking either subject would never fill a room.",
        "Springdays and GeeKay both provide solid classroom teaching in Cambridge IGCSE, but a school timetable is built for the whole class, not one student's specific weak topic, and neither school teaches the IB Diploma at all. A tutor who has marked this year's actual papers fills that gap in a way a school's own pace cannot.",
        "Published past papers and mark schemes make IGCSE Mathematics a fairly workable subject to tackle alone, right up until a student hits Internal Assessment planning or the kind of extended written answer Cambridge, Edexcel and IB examiners specifically look to reward over a merely competent summary. Getting past that point on your own is rare; it takes a more experienced reader looking over the work.",
        "The actual shift online tutoring brings to Vellore is fairly narrow but useful: a bench of national specialists layered on top of what two decent local schools already do well in the classroom, plus the kind of correction that self-study is structurally unable to give itself.",
      ],
      table: {
        caption: "Four ways a Vellore student gets support, side by side",
        columns: ["Option", "Matches the exact syllabus?", "Setting", "Its limit in Vellore"],
        rows: [
          ["NEET or state board coaching", "No; different subjects entirely", "Group classes", "Nothing here touches IB or IGCSE"],
          ["Classroom teaching at Springdays or GeeKay", "Yes, at a whole-class pace", "School timetable", "Cannot chase one student's individual gap"],
          ["Working alone", "As far as the student can manage", "No feedback loop", "IAs and long-form answers go unread by anyone else"],
          ["A tutor matched online", "Yes, to the precise code and level", "One to one", "None; the whole country is the candidate pool"],
        ],
      },
      bullets: [
        "NEET and state board demand, not IB or IGCSE, is what Vellore's coaching centres are built around",
        "Springdays and GeeKay teach their classes well but were never built to chase one student's gap",
        "A student working alone typically has no one to check IAs or long-form answers",
        "Reaching beyond Vellore is the only real fix for a bench this shallow",
      ],
    },
    {
      heading: "Which weeks of the year matter most for a Vellore family's study plan?",
      paragraphs: [
        "Vellore's climate runs hot through April and May, with temperatures regularly touching the low forties just as many schools hold end-of-year internal exams before the summer break. The northeast monsoon brings heavier rain through October and November, occasionally disrupting travel around the city, and Pongal in mid-January marks the region's biggest festival pause.",
        "Cambridge IGCSE sits its main series in May-June with a second window in October-November, and Edexcel follows a broadly similar pattern; a student at Springdays or GeeKay sits whichever series their own school enters them for. IB Diploma students, wherever they board, sit exams in May, with results out by early July and a smaller November session for retakes.",
        "For a family supporting an IGCSE student locally, the Grade 9 tier decision and Grade 10 mock results are the earliest points worth watching, and the six to eight weeks before the external series is where focused work pays off most. For a boarding DP student, school holidays are the real working window, since term-time sessions have to bend around a timetable set far from Vellore.",
        "CMC and VIT add their own rhythm on top of the school calendar: a family here for treatment often needs sessions fitted around clinic appointments that shift week to week, and VIT's own academic terms can pull a visiting family's schedule in a different direction from the school year entirely.",
      ],
      table: {
        caption: "Vellore's year, and what it means for tutoring",
        columns: ["Period", "What's happening", "Effect on tutoring"],
        rows: [
          ["April-May", "Peak heat; many schools hold year-end internal exams", "Shorter, sharper sessions rather than long ones"],
          ["Mid-January (Pongal)", "The region's major festival break", "Routines pause for several days; plan around it"],
          ["May-June", "Cambridge/Edexcel IGCSE series; IB DP exams for boarding students", "Final revision blocks and timed past papers"],
          ["Oct-Nov (northeast monsoon)", "Heavier rain, occasional travel disruption", "Online sessions carry on regardless of road conditions"],
        ],
      },
      bullets: [
        "April-May heat lines up with many schools' year-end internal exams",
        "Both Cambridge and Edexcel IGCSE run May-June and October-November series",
        "IB DP boarding students sit exams in May, with a smaller November retake window",
        "CMC clinic schedules and VIT's own term dates can both reshape a family's usual routine",
      ],
    },
    {
      heading: "Where do Vellore students go for higher education after IB or IGCSE?",
      paragraphs: [
        "Students finishing IGCSE at Springdays or GeeKay, or completing the IB Diploma while boarding in Chennai, generally apply in several directions: engineering or medical entrance within India, management courses, or a place abroad. Locally, VIT itself is a major destination for engineering and technology degrees, drawing applicants from across India who sit its own entrance exam, VITEEE.",
        "An extra step sits ahead of JEE or NEET for anyone holding an IB or IGCSE qualification: Association of Indian Universities equivalence, on top of having actually taken the right subjects at the right level. CMC's presence pulls a good number of local families toward medicine specifically, so it is common here to see NEET preparation running in parallel with IB or IGCSE tutoring rather than one replacing the other.",
        "Overseas applications lean heavily on predicted grades released each autumn of Class 12, often more than a family expects going in, since an offer is typically issued long before a final result is available. A UK offer usually names a total points figure with a floor set on HL grades; in the US, that predicted grade sits inside a much larger application file; elsewhere, each country runs its own separate conversion.",
        "None of the admissions side is something tutoring here gets drawn into. The work stays academic, deepening a subject, pushing predicted grades higher, and sharpening exam technique, with a plain explanation available on request of what a given overseas course typically wants to see.",
      ],
      bullets: [
        "VIT anchors Vellore's own higher-education pull, through its own VITEEE entrance exam",
        "AIU equivalence and the right subject levels matter for JEE and NEET eligibility",
        "CMC's presence means NEET preparation often runs alongside IB or IGCSE tutoring here",
        "Tutoring stays focused on subject depth and technique, not admissions consulting",
      ],
    },
    {
      heading: "IB Maths AA, AI and the sciences, for a Vellore-connected student",
      paragraphs: [
        "A student aiming at engineering or a physical-science degree usually does better on Analysis and Approaches, where HL Paper 3 rewards a kind of unfamiliar problem-solving that a Tamil Nadu state-board-trained tutor market rarely practises at real depth. Applications and Interpretation suits a more statistics-and-modelling mind, and its exploration is where a student most reliably loses easy marks by leaving it to the last week of a holiday.",
        "In Physics HL, quick and accurate data-booklet use separates students more reliably than raw content knowledge does, and the Scientific Investigation needs a method sturdy enough to survive real scrutiny rather than a repeated classroom experiment. Chemistry HL rests heavily on organic mechanisms and energetics once the early structure and bonding work is behind a student, and both subjects punish a tutor marking against a generic standard instead of the actual IB rubric.",
        "Biology throws up a different kind of problem: solid content knowledge paired with answers that drift past what the command word is actually asking, and statistics too shaky to hold up an otherwise reasonable investigation. Tamil Nadu board switchers usually arrive knowing the syllabus; the gap sits in the exam discipline IB marking specifically looks for.",
        "None of this exists in a Vellore classroom, so a specialist matched to the precise level and current syllabus closes these gaps between terms considerably faster than a generalist working from whatever textbook happens to be closest to hand.",
      ],
      bullets: [
        "A calculus-and-proof mind suits AA; a statistics-and-modelling mind suits AI",
        "The Scientific Investigation carries real weight in both Physics HL and Chemistry HL",
        "Biology rewards command-word discipline as much as raw content knowledge",
        "State-board switchers usually need exam discipline more than they need new content",
      ],
    },
    {
      heading: "IGCSE Core versus Extended, and subject choices for Vellore families",
      paragraphs: [
        "Choosing Core over Extended, or Foundation over Higher on Edexcel, sets a hard ceiling on the grade a student can reach, which is exactly why the Grade 9 decision at Springdays or GeeKay deserves more attention than it usually gets from a family new to Cambridge.",
        "A student with IB Maths AA HL in their future gets more out of taking Extended or Higher Mathematics now, ideally with Additional Mathematics alongside it wherever a school offers that option, since the calculus groundwork transfers directly. Extended-tier sciences achieve the same thing for Physics or Chemistry HL, given how much closer that content already sits to what the Diploma assumes going in.",
        "Tutoring here works with whatever tier and subject combination a school in Vellore or Chennai has already fixed, not some ideal version that does not apply to a specific student, filling whatever gaps that particular school's own choices happen to leave open.",
        "A family shifting a child between an Edexcel school and a Cambridge one, in either direction, benefits from a tutor who knows exactly how differently the two phrase a question, since the maths and science content overlaps substantially even though exam technique carries across far less cleanly.",
      ],
      bullets: [
        "A Grade 9 tier choice sets both the grade ceiling and how ready a student is for DP",
        "Additional Mathematics is the strongest single bridge toward IB Maths AA HL",
        "Tutoring works within whichever subject list a school has already set, not an ideal one",
        "Edexcel and Cambridge phrase questions differently even where the content lines up",
      ],
    },
    {
      heading: "How does IB Gram match a tutor to a Vellore family?",
      paragraphs: [
        "First comes a brief covering the board or programme, subject and level, roughly where a grade sits today, the exam session in view, and the actual concern driving the enquiry, a weak topic, an Internal Assessment, looming mocks, or switching boards altogether. That detail shapes the shortlist far more than any tutor's profile photo does.",
        "Given how unlikely it is that a Diploma or Cambridge specialist happens to live in Vellore, syllabus fit is checked ahead of everything else. Formal qualifications, how recently a tutor has taught that precise subject and level, and their approach to Internal Assessments all get reviewed before a family sees a single name.",
        "Judgement on everything beyond that sits with the family, formed during the free trial class itself: whether an explanation actually lands, whether the questions asked probe real understanding, and whether a child is comfortable enough to say when something is not clicking. A short first-month plan arrives right after, open to approval or pushback.",
        "A pairing that is not working gets replaced, not patched over by asking a child to adapt. No contract obliges a Vellore family to stay with an arrangement that has stopped delivering.",
      ],
      bullets: [
        "The opening brief covers programme, subject, level, exam session and the actual worry",
        "Syllabus fit comes first, since Vellore's local school base is thin for IB in particular",
        "Every tutor is vetted before introduction; the trial class comes before any payment",
        "A written first-month plan, with an easy re-match whenever it is needed",
      ],
    },
  ],

  tutorsIntro:
    "The tutors listed here are active right now on IB PYP, MYP and Diploma courses, and on Cambridge and Edexcel IGCSE, working with households tied to Vellore. Every pairing gets weighed against a child's real syllabus, level and sitting, given that the classroom here is always a screen.",

  process: [
    { title: "Share the details", description: "Board or programme, subject and level, where things stand for your child right now, and hours that actually work for a Vellore household." },
    { title: "See who comes back", description: "A shortlist built on syllabus fit, since the local bench for IB is thin, each name attached to a clear reason for the match." },
    { title: "Sit in on a free class", description: "One genuine topic, taught live online, at no cost and no expectation of booking anything further." },
    { title: "Greenlight the opening month", description: "A plan covering topics and rhythm comes from the tutor for you to accept, question or adjust." },
    { title: "Settle into a rhythm", description: "One slot online each week, a check-in every so often, and a quick change of tutor if the fit ever slips." },
  ],

  whyPoints: [
    { title: "Matching starts with the syllabus", description: "A tutor's exact IB level or Cambridge/Edexcel code and tier decides the match, never a rough subject label." },
    { title: "Built to cover a real gap", description: "With no IB school in Vellore and only two confirmed for Cambridge IGCSE, matching reaches specialists across the whole country instead." },
    { title: "Nothing is taken on trust", description: "A free class comes before any payment, so the decision rests on what a family actually watched, not a promise on a page." },
    { title: "IAs, coursework and the EE stay the student's own", description: "Guidance, structure and honest feedback, yes; a tutor writing or rewriting graded work for a student, never." },
    { title: "Progress is written down, not just implied", description: "A short note after every class and a fuller check-in every few weeks keep a family informed without needing to ask." },
    { title: "Easy to step back from", description: "No school tie-up, no board affiliation, no lock-in contract, and a quick re-match whenever a pairing isn't working." },
  ],

  faqs: [
    { question: "How do I go about finding an IB tutor for my child in Vellore?", answer: "Send us the programme, subject, level and exam session, and a shortlist comes back of tutors currently teaching that exact course. Since no school in Vellore runs any IB stage, matching happens nationally on syllabus fit, with lesson timing confirmed against your household once a pairing looks right. Nothing gets booked before a free trial class, and a different tutor is offered whenever the first match is not it." },
    { question: "Can you find an IGCSE tutor for a student at Springdays or GeeKay?", answer: "Yes, and this is one of our more common Vellore requests. Even with solid classroom teaching at either school, a tutor matched to the exact code and tier can target a specific weak topic or exam series that whole-class pacing cannot always reach. Matching uses that board's genuine past papers and mark schemes throughout." },
    { question: "Does a tutor actually visit our home in Vellore?", answer: "No. Nobody visits a home in Vellore for tutoring. In-person lessons are offered only in Gurugram and select parts of Delhi NCR; everywhere else, Vellore included, teaching happens live online, one to one, over a shared screen. That is a genuine class delivered into your home over video, not a promise that a tutor arrives at the door." },
    { question: "What does tutoring in Vellore typically cost?", answer: "The fee depends on the programme and level, the subject, session length and how recently a tutor has taught that exact syllabus, and it is fixed for your specific pairing before the trial starts. IB Diploma HL subjects generally cost more than IGCSE Core or Foundation work, purely on tutor scarcity. Every lesson is online, so travel never enters the fee, and there is no minimum term; pausing or stopping stays available whenever you need it." },
    { question: "Which schools in or near Vellore actually teach IB or IGCSE?", answer: "Springdays International School and The Geekay World School both teach Cambridge IGCSE inside Vellore itself; neither runs the IB Diploma. For a fuller IB and Cambridge picture, Chennai, about 135 kilometres east, carries a considerably larger school base, and Delhi NCR offers the widest national choice for families prepared to board a child there." },
    { question: "My family is in Vellore for CMC treatment. Can a tutor help keep our child's schooling on track?", answer: "Yes, and this is a genuine, recurring request. A tutor gets matched to the exact syllabus your child was already following, and sessions are built around clinic appointments rather than a fixed school-style timetable, so a course of treatment does not have to mean losing a term of schooling." },
    { question: "We've just moved to Vellore for a role at VIT. Can tutoring continue our child's IB or IGCSE course?", answer: "Yes. A tutor is matched to the precise board, subject and level your child was already on, picking up mid-unit or mid-assessment rather than restarting the syllabus, which matters given that no school in Vellore continues most IB courses directly." },
    { question: "Do we actually get to try before paying anything?", answer: "Always. The first class runs on genuine material from your child's own syllabus, free of charge, with nothing owed afterward regardless of the outcome. A short plan for the coming month follows right away, and the decision on whether to continue, tweak something, or switch tutors entirely sits entirely with you." },
    { question: "Will a tutor write an IB Internal Assessment for my child?", answer: "No tutor here will. What is available is guidance: helping settle on a workable research question, explaining what an assessment criterion is actually looking for, planning data collection, and giving honest feedback on drafts. Writing or rewriting graded work breaks IB academic integrity rules outright, so it is simply not offered." },
    { question: "Which Diploma subjects can IB Gram actually help with here?", answer: "Pretty much every subject group a Vellore-connected Diploma student is likely to be carrying: both Maths routes at HL and SL, the three sciences, Economics, Business Management, English A, Computer Science, and support around Theory of Knowledge and the Extended Essay on top." },
    { question: "Is it just Diploma support, or can you help with MYP and PYP as well?", answer: "The full continuum is on offer, for any Vellore household with a child on an IB programme through a school elsewhere or moving between curricula. Younger MYP students get help building criterion-based arguments across sciences and languages plus Personal Project support; PYP sessions concentrate on reading, writing, number confidence and the research groundwork behind the Exhibition." },
    { question: "Is online tutoring really as effective as sitting with a tutor face to face?", answer: "It holds up well, particularly given that Vellore has no IB specialist locally and only two schools teaching Cambridge at all. A shared screen, live-marked past papers and recorded worked examples achieve most of what that would, only without needing anyone nearby, which matters given how few options exist in this city anyway." },
    { question: "What actually goes into vetting a tutor before we meet them?", answer: "A look at formal qualifications, how current their experience is in that specific subject and level, and how they actually approach assessment criteria, all completed before a family hears a name at all. Because Vellore's own IB and IGCSE pool is so shallow, live, recent teaching experience counts for more here than it might elsewhere. The trial class is still where the final call gets made." },
    { question: "Is there an ideal point to bring in a tutor?", answer: "Right at the start of a course works best, Class 11 for the Diploma or Grade 9 for IGCSE, since it leaves room to settle foundations before internal exams, IA deadlines and predicted grades all arrive together. Coming in later, even in the final year, can still move the needle if sessions stay narrowly focused on the topics and past papers worth the most marks." },
    { question: "My child is moving from Tamil Nadu state board or matriculation into IGCSE at Springdays or GeeKay. Is that a big adjustment?", answer: "It is a common move locally, and the adjustment is mostly about question style rather than subject content. Command words such as 'explain', 'evaluate' and 'justify' need direct teaching, ideally a full term before the switch happens, since the underlying maths and science content usually overlaps a good deal already." },
    { question: "Can sessions fit around clinic visits, VIT term dates or school hours?", answer: "Yes, scheduling is built around whatever calendar your household actually keeps, whether that is a school day, a VIT academic term, or a CMC treatment schedule that shifts week to week. Weekday evenings and weekend mornings are the most commonly booked slots, and adding a second session before an exam series is straightforward to arrange." },
    { question: "What happens if the tutor isn't the right fit for my child?", answer: "Tell us, and a different tutor gets found. Progress is reviewed every few weeks regardless of whether anything feels wrong, and a mismatch is solved by switching tutors rather than asking a child to persist with someone who is not helping. Since nothing here runs on a long contract, pausing or ending sessions never carries a penalty." },
    { question: "Does IB Gram have any formal tie to Springdays, GeeKay, VIT, CMC, or to the exam boards?", answer: "None whatsoever. IB Gram runs independently, without endorsement from or representation of any organisation named on this page, and the same goes for the International Baccalaureate Organization, Cambridge Assessment International Education and Pearson Edexcel. Every name here exists purely to give honest local context, and each tutor works to the relevant school's calendar and the actual published syllabus of whichever board applies." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How IB and IGCSE tutoring works across Indian cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "Where IB Gram's in-person home tuition is available." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP works: HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, the Personal Project and eAssessment explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation, explained." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial class." },
    { label: "IB and IGCSE tutoring in Chennai", href: "/chennai/", description: "Tutor matching for Chennai, the nearest large IB and Cambridge hub to Vellore." },
  ],

  closingHeading: "Book a free trial class for your Vellore family",
  closingBody:
    "Let us know the board or programme, the subject and level, roughly where things stand, and whatever calendar actually governs your week, school hours, a VIT term or a CMC appointment schedule. A shortlist comes back with each tutor's background laid out plainly and trial times built around your routine, all of it online, one to one, free to try and with nothing owed. Email ibgram24@gmail.com or message us on WhatsApp at +91 7439 368 115.",
};
