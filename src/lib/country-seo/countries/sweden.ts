import type { CountrySeoPage } from "../types";

/**
 * Sweden - https://www.ibgram.com/sweden/
 *
 * Hand-authored country landing page. Delivery to families in Sweden is ONLINE only;
 * nothing here may imply in-person tutoring inside the country. Named schools appear
 * as ecosystem context only - no affiliation is implied.
 */
export const sweden: CountrySeoPage = {
  slug: "sweden",
  countryName: "Sweden",
  countryNameLong: "the Kingdom of Sweden",
  demonym: "Swedish",
  flagCode: "se",
  countryCode: "SE",
  region: "Northern Europe",
  timezoneLabel: "Central European Time (CET/CEST, UTC+1/+2)",
  schedulingNote: "Weekday afternoons once gymnasiet ends and weekend mornings in Stockholm time",
  lastUpdated: "2026-09-14",

  title: "IB Tutors in Sweden | Online IB DP, MYP & PYP Tutoring",
  metaDescription: "Online IB tutors for students at gymnasium schools across Sweden. DP, MYP and PYP support scheduled in Stockholm time, with meritvärde and UHR context.",
  h1: "Online IB tutors for students studying the Diploma Programme in Sweden",
  heroEyebrow: "ONLINE TUTORING FOR FAMILIES IN SWEDEN",
  heroSubtitle: "Whether your child sits the Diploma at a kommunal gymnasium in Uppsala or a fee-free international school in Stockholm, the challenge is the same: finding one subject specialist who has actually taught that syllabus, on a screen, at an hour that still leaves the evening free. Say which programme, subject and exam session your child is working toward, and we come back with a tutor's name rather than a page of search results.",
  primaryKeyword: "IB tutors in Sweden",
  imageAltText: "IB tutor and a Swedish DP student working through an IB Physics problem in a one-to-one online lesson",
  secondaryKeywords: [
    "IB tutor Stockholm",
    "IB tutor Gothenburg",
    "IB tutor Malmö",
    "online IB tutor Sweden",
    "IB DP tutor Sweden",
    "meritvärde IB conversion tutor",
    "högskoleprovet IB student",
    "IB Maths AA tutor online Sweden",
    "IB Extended Essay tutor Sweden",
    "Swedish A tutor IB",
    "IGCSE tutor Stockholm",
    "IB tutor Uppsala",
  ],

  heroTrustPoints: [
    "Sessions scheduled around a Swedish school day, in CET or CEST depending on the season.",
    "Tutors who understand how IB total points convert into a Swedish meritvärde for university selection.",
    "Support for IB PYP, MYP, DP and CP, whether your child's gymnasium is kommunal or fristående.",
    "Subject specialists for content a single school's IB coordinator has no spare hours to cover alone.",
  ],
  heroStats: [
    { value: "20+", label: "gymnasium schools authorised for the Diploma" },
    { value: "May", label: "IB DP exam session used in Sweden" },
    { value: "20.0", label: "top meritvärde a converted IB score can reach" },
    { value: "1:1", label: "the usual format: one tutor, one student" },
  ],

  tutorsIntro: "Because our tutors already teach on Central European hours, the trial slot you're offered sits inside a normal Swedish afternoon or evening rather than something bolted on around someone else's day.",

  intro: {
    heading: "Who we support in Sweden: PYP, MYP, DP and CP students",
    paragraphs: [
      "Sweden runs its International Baccalaureate programme through a public education system that funds nearly every upper-secondary place, kommunal or fristående, through the same skolpeng voucher — a genuinely unusual setup among the countries we cover, where IB usually means a fee-paying private school. That doesn't make the workload any lighter for the student sitting it: a PYP pupil at a Stockholm-run international school, an MYP student splitting focus between eight subject groups and ordinary grundskola requirements, a DP candidate weighing which Higher Level subjects will convert best into a Swedish meritvärde, and a CP student pairing DP courses with a vocational track all show up in our inbox for different reasons.",
      "More than twenty Swedish gymnasium schools currently run the Diploma Programme, spread between long-established kommunal options in Stockholm, Uppsala, Linköping and Gothenburg and independent international schools in Stockholm, Malmö and Lund. Being tuition-free doesn't mean being lightly staffed — most of these schools run one or two IB coordinators across an entire cohort, and Higher Level content still gets taught to a full class rather than adjusted for the one student who's fallen a step behind.",
      "Requests tend to cluster around a few situations. A student's Higher Level Mathematics or Physics has quietly become the subject dragging down an otherwise strong profile. An internal assessment draft has come back needing more detailed, criterion-by-criterion feedback than a teacher managing thirty students can realistically give. A family is trying to work out what their child's projected 38 IB points will actually become on the meritvärde scale universities use for selection, or whether sitting högskoleprovet alongside the Diploma is worth the extra effort. None of these need a crisis response — they need one specialist, working weekly, on the specific thing that's stuck.",
      "We start with a plain question: which programme, which subject, which level, and roughly which week your child's evening actually frees up. A tutor with a documented history teaching that exact course gets suggested by name, and a live trial lesson happens before any ongoing arrangement is agreed. Because everything runs on a screen, a family in Bromma and a family in Linköping can end up with the very same Chemistry specialist without either location mattering at all.",
      "From there, sessions track whatever the gymnasium itself has actually assigned that week rather than a separate curriculum bolted on top — a topic the class rushed through, a paper that came back weaker than expected, an internal-assessment section due before the next lov. Marking follows the same conventions an IB examiner would apply, and a short note reaches you after each lesson. If the pairing genuinely isn't working after the first couple of sessions, one message is enough to swap it.",
    ],
    bullets: [
      "Every lesson runs on a screen; India is the only market where IB Gram places a tutor physically in a home.",
      "Support spans PYP, MYP, DP and CP, regardless of whether your child's gymnasium is kommunal or fristående.",
      "Work follows genuine deliverables — internal assessments, the Extended Essay, mock papers, the May session — not a generic plan.",
      "A trial lesson comes first, a note follows every session after, and switching tutors is a one-line request.",
    ],
  },

  programmesIntro: "Very few Swedish DP students actually began the IB in PYP at the same school — a student is more likely to have come up through ordinary grundskola and joined an IB gymnasium at sixteen, or to have moved between Stockholm, Gothenburg and Malmö partway through MYP. We start wherever your child actually is, matched to their current year and scheduled around Central European hours. Here's roughly what each of the four stages looks like inside a Swedish school.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Ages 3-12 · Förskoleklass to Årskurs 6",
      description: "Six broad units of inquiry drive the timetable rather than a fixed subject list, so a term might be organised entirely around 'how we organise ourselves' instead of a discrete lesson block. Support at this stage stays modest — reading confidence, number sense, and turning a classroom question into something a child can genuinely go and investigate for the Grade 5 exhibition.",
      countryNote: "PYP appears almost exclusively at Sweden's international schools rather than ordinary kommunal grundskola, though several of those international schools charge no fees at all under the skolpeng system. Sessions run thirty to forty-five minutes after school in CET or CEST, and a parent is welcome on the call.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Ages 11-16 · Årskurs 6 to Gymnasiet Åk 1",
      description: "Every subject is marked on four criteria out of eight apiece — a scale that looks nothing like Sweden's own A-F system, and confuses plenty of parents on first contact. We spend real time unpacking what a given criterion strand is actually asking for, on top of the command-term drilling MYP relies on and, in the final year, structuring the Personal Project from a workable proposal through to a finished report.",
      countryNote: "A Swedish MYP student is usually also sitting national grundskola tests in the same years, so the two systems compete for study time even where a school manages the timetable well. Sessions are planned with both sets of deadlines in view.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Ages 16-19 · Gymnasiet Åk 1-3",
      description: "Six subjects, three or four at Higher Level, sit around Theory of Knowledge, the Extended Essay and CAS across the full three years of Swedish gymnasiet — a year longer than the DP's usual two-year span elsewhere, since many Swedish schools use the first year for foundational work before the formal Diploma begins in earnest. Sessions split between deepening Higher Level content and coaching the Extended Essay separately, through the research question and supervisor check-ins.",
      countryNote: "Sweden sits the May session, so the final exams land near the end of gymnasiet, close to when a student is also deciding whether to add högskoleprovet to their university application alongside a converted IB score.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Ages 16-19 · Gymnasiet Åk 1-3",
      description: "CP combines two or more Diploma subjects with a career-related study and its own additional core: Personal and Professional Skills, Service Learning, further language study and the Reflective Project. The DP subjects are taught to the same depth a full-diploma candidate would receive, and the Reflective Project is built up over several sessions from an initial ethical question to a properly sourced final piece.",
      countryNote: "CP remains rare in Sweden, usually paired with a vocational gymnasium track, so a student following it often has nobody else in their year working through the same Reflective Project brief — exactly the isolation outside tutoring is built to solve.",
    },
  ],

  subjectsIntro: "A message from a Swedish family almost always names the specific course rather than just the subject, because Mathematics AA HL and IGCSE Extended Mathematics call for entirely different preparation even though both sit under 'maths'. Every session below fits around a Swedish school day and around the May session most gymnasium schools sit, whether your child studies in English at an international school or through a Swedish-medium IB stream.",
  subjects: [
    { name: "Mathematics AA", levels: "HL · SL · IGCSE Extended (0580)", description: "HL work leans hard on proof and calculus depth, and a student arriving from Sweden's own maths courses sometimes needs that shift in expectation named directly before it lands. SL keeps the same territory but paced for the grade a student actually needs rather than the extension beyond it." },
    { name: "Mathematics AI", levels: "HL · SL · IGCSE Core & Extended", description: "Modelling and statistics carry AI rather than formal proof, which suits students who find abstract algebra a poor match for how they think. HL adds matrices, graph theory and complex numbers on top of that applied base; SL stays inside interpreting data in realistic contexts." },
    { name: "Physics", levels: "HL · SL", description: "Problem sets come first and theory gets built around them, covering the practical scheme and uncertainty treatment the internal assessment depends on. HL students additionally get direct help scoping and writing their own scientific investigation from a genuinely testable question." },
    { name: "Chemistry", levels: "HL · SL", description: "The calculation-heavy stretch — moles, equilibrium, pH — gets worked through step by step rather than left to a memorised formula sheet. HL sessions add support planning the scientific investigation; both levels cover the organic mechanisms that tend to separate a strong grade from an average one." },
    { name: "Biology", levels: "HL · SL", description: "The current DP guide is organised by theme rather than a numbered topic list, which trips up students expecting a linear syllabus, so sessions spend real time rebuilding the connections between units directly rather than assuming they're obvious." },
    { name: "Economics", levels: "HL · SL", description: "Diagram accuracy and evaluation language carry most of the marks here, and the three internal-assessment commentaries land better built from Swedish or wider European economic reporting than from a translated foreign case study." },
    { name: "Business Management", levels: "HL · SL", description: "Real, recognisable companies make the theory land faster than a textbook's generic example, and sessions scope the internal assessment early, concentrating feedback on the application and evaluation marks where most students actually lose ground." },
    { name: "English A: Language & Literature", levels: "HL · SL", description: "Close reading of non-literary texts, the individual oral and Paper 1's unseen-text timing all get direct, repeated rehearsal — often the harder half of the course for a strong personal-essay writer who hasn't previously practised IB's comparative, global-issue lens." },
    { name: "English B", levels: "HL · SL", description: "Built for students whose stronger language is Swedish but who study some or all DP subjects in English, working through the five prescribed themes, listening papers and the individual oral at a pace matched to actual fluency rather than assumed fluency." },
    { name: "Swedish A: Language & Literature", levels: "HL · SL", description: "The Group 1 course most Swedish DP students take, covering Swedish and world literature toward the individual oral and the comparative written commentary — a noticeably different skill from the single-text analysis Swedish grundskola classes usually reward." },
    { name: "Computer Science", levels: "HL · SL · IGCSE Computer Science (0478)", description: "Students who already code comfortably often still lose marks on the written papers, since data structures, object orientation and system fundamentals are examined as theory rather than as working code. Sessions also carry the internal assessment through planning, build and documentation." },
    { name: "Psychology", levels: "HL · SL", description: "Biological, cognitive and sociocultural approaches all depend on citing specific named studies accurately, and the extended-response questions reward a student who argues a position rather than one who lists everything they've learned." },
    { name: "History", levels: "HL · SL", description: "An essay that weighs conflicting sources well consistently outperforms one that simply recalls more facts, so source evaluation gets more session time than pure content review, and the historical investigation is planned around material a student can genuinely access." },
    { name: "Environmental Systems & Societies (ESS)", levels: "HL · SL", description: "ESS counts toward both a Group 3 and a Group 4 requirement in a single course, a genuinely efficient choice for a student already balancing DP subjects against ordinary Swedish coursework. Sessions build systems diagrams and environmental value systems first, adding the extra HL content separately." },
  ],

  regionsTitle: "Cities, gymnasium schools and time zones across Sweden",
  regionsIntro: "Sweden sits on Central European Time and, unlike several countries on this list, still shifts its clocks twice a year for daylight saving — CET in winter, CEST from late March to late October. Most families book a slot in the late afternoon once gymnasiet finishes for the day, or a weekend morning, and IB Gram tutors are rostered specifically to cover both the winter and summer shift so a booking never quietly drifts an hour without notice.",
  regions: [
    { name: "Stockholm", note: "CET/CEST. The capital carries Sweden's densest cluster of IB schools, from the municipally run International School of the Stockholm Region to long-established independent options. Afternoon slots from around 4 pm suit students commuting home across the city's transit network." },
    { name: "Gothenburg (Göteborg)", note: "CET/CEST. Home to the municipally funded International High School of the Gothenburg Region, drawing a genuine mix of Swedish and internationally mobile families to the same tuition-free IB pathway." },
    { name: "Malmö", note: "CET/CEST. Malmö's international schools run PYP and MYP with a bridge into a blended Swedish gymnasium and IB Diploma option, serving a city with close commuter ties to Copenhagen across the Öresund." },
    { name: "Uppsala", note: "CET/CEST. A university city where a long-standing municipal upper-secondary school runs the Diploma Programme as one of its national programme lines, drawing students from across the wider Uppsala region." },
    { name: "Lund", note: "CET/CEST. An internationally minded university town with an independent school serving dozens of nationalities, reflecting Lund's research and biotech community." },
    { name: "Linköping", note: "CET/CEST. A technology-sector city whose municipal upper-secondary school has run the Diploma Programme for decades, feeding a strong local pipeline into engineering degrees." },
    { name: "Helsingborg", note: "CET/CEST. A smaller but growing international-education market in southern Sweden, with families here often weighing a Danish or Swedish university destination given the short ferry link to Denmark." },
    { name: "Umeå", note: "CET/CEST, though winter daylight hours run noticeably shorter this far north. Umeå's university-town population supports a smaller IB-interested community, and online tutoring is often the only way to reach a specialist in a less common subject this far from Stockholm." },
  ],

  schoolDisclaimer: "The gymnasium schools named on this page appear only to describe the education landscape families in Sweden are choosing between. None of them has endorsed, partnered with or authorised IB Gram, and neither has the International Baccalaureate Organization, Cambridge International, Skolverket or UHR. We are an independent tutoring service with no institutional tie to any of them.",
  schoolClusters: [
    {
      city: "Stockholm",
      note: "Stockholm hosts Sweden's broadest IB offer, spanning a municipally run continuum school, a long-established independent international school, and a boarding option outside the city itself. Requests here run from Higher Level Mathematics and Physics support to Extended Essay supervision.",
      schools: [
        "International School of the Stockholm Region (ISSR)",
        "Stockholm International School",
        "British International School of Stockholm",
        "Sigtunaskolan Humanistiska Läroverket (SSHL), Sigtuna",
      ],
    },
    {
      city: "Gothenburg",
      note: "Gothenburg's IB sector centres on one well-established municipal school offering the full Diploma Programme free of charge, drawing families from across the wider metropolitan region.",
      schools: [
        "International High School of the Gothenburg Region (IHGR)",
      ],
    },
    {
      city: "Malmö",
      note: "Malmö's international schools cover the early IB years directly, with a blended route into gymnasium-level Diploma study for older students, serving a city with strong cross-border ties to Denmark.",
      schools: [
        "Malmö International School (MIS)",
        "Bladins International School of Malmö (BISM)",
      ],
    },
    {
      city: "Uppsala & Linköping",
      note: "These two university cities both run the Diploma Programme through long-standing municipal upper-secondary schools, integrated into the ordinary Swedish gymnasium application process rather than a separate private admissions track.",
      schools: [
        "Katedralskolan, Uppsala",
        "Katedralskolan, Linköping",
        "Lund International School (LIS)",
      ],
    },
  ],

  modesIntro: "IB Gram does not place a tutor inside a home anywhere in Sweden — India is the only market where that happens. What a Swedish family chooses instead is one of three video-call formats, fitted around whatever a gymnasium day and its Swedish coursework leave free.",
  modes: [
    {
      title: "One-to-one online IB tutoring",
      description: "The standard arrangement: one tutor, one student, meeting at the same weekly time and working from whatever your child's own gymnasium actually assigned that week rather than a separate syllabus. It's the natural fit for a Higher Level subject that's slipping, an internal assessment stuck on one criterion, or a student who has just transferred between Swedish schools mid-programme.",
      bullets: [
        "A fixed weekly slot in CET or CEST, adjusted automatically each spring and autumn.",
        "Planning drawn from your child's actual coursework, past papers and teacher feedback.",
        "A short note reaches you after every lesson.",
        "60 minutes suits ongoing maintenance; 90 suits internal-assessment or Extended Essay work.",
      ],
    },
    {
      title: "Small-Group Online Sessions",
      description: "Two to four students on the same course share a tutor and a session, which works particularly well for content-heavy subjects where hearing a classmate's mistake explained often teaches more than a solo lesson would. Groups are formed strictly by subject, level and overlapping evening availability, and the per-student cost drops accordingly.",
      bullets: [
        "Grouped by subject, level and Central-European-Time availability.",
        "A noticeably lower per-student rate than a private slot.",
        "The same small group and tutor meet consistently, week after week.",
        "Moving a student to one-to-one later, if the shared pace stops fitting, is a simple change.",
      ],
    },
    {
      title: "Intensive Exam-Block Sessions",
      description: "A short, concentrated run built around a single deadline — the May session or an internal-assessment submission window — rather than an ongoing weekly arrangement. Several sessions a week for a month or two replace the usual one, working timed papers under real conditions with fast turnaround on feedback.",
      bullets: [
        "Three or four sessions weekly is typical, run over four to six weeks.",
        "Every timed paper comes back marked within a day or two.",
        "Available through school holidays as well as term-time evenings.",
        "Booking a few weeks ahead matters, since May-season evening slots fill first.",
      ],
    },
  ],

  sections: [
    {
      heading: "IB inside Sweden's tuition-free gymnasium system",
      paragraphs: [
        "Sweden funds nearly all upper-secondary education, kommunal and fristående alike, through the same per-student skolpeng voucher — which means a family choosing the International School of the Stockholm Region over a Naturvetenskapsprogrammet at their local gymnasium isn't typically choosing between free and expensive, the way IB families in most other countries do. A handful of boarding options charge separately for accommodation, but the academic programme itself carries no tuition fee at a properly approved school.",
        "That funding model shapes which schools actually run the Diploma. Rather than a large field of competing private academies, Sweden has a smaller, more stable set of municipal and independent schools that have offered the IB for years or decades, several of them integrated directly into the normal Swedish gymnasium application system that any student applies through regardless of which programme they want.",
        "Sweden's own national gymnasium programmes run on an entirely different logic: eighteen defined tracks — Naturvetenskapsprogrammet, Samhällsvetenskapsprogrammet, Ekonomiprogrammet among them — each built from mandatory and programme-specific courses graded A to F, aggregated into a meritvärde used directly for university selection. A student choosing the Diploma instead is opting into a different assessment philosophy entirely: externally moderated final papers alongside internal assessment, six subjects across defined groups, and Theory of Knowledge, the Extended Essay and CAS layered on top.",
        "None of this makes one route objectively harder than the other — Swedish universities read both routes seriously, provided the underlying meritvärde is strong. What changes is the shape of the work: a national-programme student's grade builds gradually across many small assessments, while a DP student's grade rests more heavily on a smaller number of externally set papers plus a handful of substantial coursework pieces, which rewards a genuinely different study rhythm.",
      ],
      table: {
        caption: "Swedish national gymnasium programmes vs the IB Diploma",
        columns: ["Route", "Funding", "Grading", "Used for"],
        rows: [
          ["National gymnasium programme", "Free at kommunal and fristående schools alike", "A-F per course, aggregated into meritvärde", "Direct entry to Swedish universities via betygsurval"],
          ["Cambridge IGCSE (rare in Sweden)", "Fee-paying, at the handful of British-curriculum schools", "A*-G or 9-1, mostly terminal papers", "A pre-DP or pre-A-Level step at those specific schools"],
          ["IB Diploma Programme", "Free at almost every authorised Swedish school", "1-7 per subject, out of 45 total, converted to meritvärde", "Swedish universities via UHR's conversion table, plus direct reading abroad"],
        ],
      },
      bullets: [
        "Sweden funds nearly all gymnasium places through skolpeng, so IB tuition itself is typically free.",
        "A small, stable set of kommunal and independent schools run the Diploma, several via the normal gymnasium application process.",
        "National programmes and the Diploma reflect different assessment philosophies, not different levels of difficulty.",
        "A DP student's grade leans more on external papers and substantial coursework than continuous small assessment.",
        "Universities in Sweden read a strong result from either route seriously.",
      ],
    },
    {
      heading: "How are IB grades converted for Swedish university admission?",
      paragraphs: [
        "Through UHR — Universitets- och högskolerådet, the Swedish Council for Higher Education — which publishes an official table converting an IB Diploma's total score, out of 45, into a meritvärde on the same 10-to-20 scale a national-programme student's A-F average produces. The table was revised for admissions from mid-2025 onward, and as of that revision, 43 IB points converts to the maximum meritvärde of 20.0, so a very strong IB result and a near-perfect Swedish gymnasium average end up competing on genuinely comparable footing.",
        "IB Diploma holders can also pick up bonus meritpoäng — extra points added on top of the base meritvärde — for specific subjects including additional language study, English and mathematics, worth up to 2.5 points combined under the relevant UHR regulation. Because these bonus points can matter at the margin for competitive programmes, it's worth checking the current rules on antagning.se, Sweden's national admissions portal, before finalising a subject combination in DP1.",
        "Betygsurval — selection by grades, whether a national Swedish average or a converted IB meritvärde — is only one of two main routes into Swedish higher education. The other is högskoleprovet, a standardised aptitude test open to anyone regardless of prior schooling, which feeds its own separate admissions quota. Some IB students sit it as a hedge, particularly where a competitive programme's grade-based cutoff sits above what their converted meritvärde is likely to reach.",
        "Universities outside Sweden read the Diploma on its own terms rather than through a meritvärde conversion, working from predicted DP2 grades before final results exist. That's a genuinely different audience with different timing, which is why many Swedish IB families end up planning a domestic application through UHR's conversion table and an international one in parallel, rather than settling on a single route before either set of numbers is confirmed.",
      ],
      bullets: [
        "UHR converts IB's 45-point total into a Swedish meritvärde on the same 10-20 scale as gymnasium grades.",
        "As of the mid-2025 revision, 43 IB points converts to the maximum 20.0 meritvärde.",
        "Up to 2.5 bonus meritpoäng are available for specific language, English and maths choices.",
        "Högskoleprovet offers a separate admissions route alongside betygsurval, useful as a hedge for competitive programmes.",
        "Foreign universities read predicted DP2 grades directly, on a different timeline from UHR's conversion process.",
      ],
    },
    {
      heading: "Do you need Swedish to study the IB Diploma in Sweden?",
      paragraphs: [
        "Not to study the Diploma itself — most Swedish IB schools teach it fully in English, and a student can complete all six subjects, TOK, CAS and the Extended Essay without ever submitting work in Swedish. Where Swedish becomes unavoidable is afterward, at the point of applying to a Swedish-taught university programme, since basic eligibility for higher education in Sweden generally requires a Swedish course roughly equivalent to Svenska 3, or Svenska som andraspråk 3 for students who didn't grow up speaking it.",
        "Students who take Swedish A: Language and Literature as their Group 1 subject typically satisfy this requirement as part of the ordinary Diploma. A student without strong Swedish arriving mid-programme, or one who took a different Group 1 language entirely, sometimes needs a supplementary Swedish course through Komvux, Sweden's adult and supplementary education system, before a Swedish-taught programme will actually consider the application — worth checking well before the final year rather than discovering it during the application window.",
        "Programmes taught in English at Swedish universities generally waive the Swedish-language requirement itself, though basic eligibility rules can still ask for evidence of English proficiency, which the Diploma's own English A or English B usually covers without extra paperwork. This English-medium route is the one most international IB families in Sweden actually end up using, since it sidesteps the Swedish-language question almost entirely.",
        "None of this is admissions law we can guarantee — universityadmissions.se and each university's own eligibility page are the sources to check directly, and requirements do shift between intake years. What we can control is making sure a student's Swedish A, English A or English B result is strong enough to support whichever eligibility route the family ends up needing.",
      ],
      bullets: [
        "The Diploma itself is taught in English at almost every Swedish IB school; Swedish isn't required to complete it.",
        "Swedish-taught university programmes generally require a Svenska 3 equivalent for basic eligibility.",
        "Taking Swedish A: Language and Literature as a DP subject typically satisfies that requirement directly.",
        "English-medium Swedish university programmes usually waive the Swedish-language requirement outright.",
        "Confirm current eligibility rules on universityadmissions.se, since requirements can shift between intake years.",
      ],
    },
    {
      heading: "IB internal assessments and the May session against a Swedish school year",
      paragraphs: [
        "The Swedish school year runs late August to early June, split into two terminer with a longer sommarlov between them and shorter höstlov, jullov and sportlov breaks scattered through the autumn and winter. Because Sweden sits the May examination session, a DP3 student's spring compresses internal-assessment final drafts, the Extended Essay, TOK components and school mocks into the months right after jullov — a genuinely tight window that a tutor plans backward from rather than working forward from a generic IB calendar.",
        "Internal assessments are marked first by the student's own teacher, then checked externally for consistency, with weighting that varies by subject — lighter in some sciences and mathematics, heavier in language and the arts. That structure rewards steady documentation over a single burst of effort near the deadline: a chemistry student needs a variable their own school's lab can actually control, a Swedish A student needs texts they can compare in genuine depth, and a maths exploration needs a topic narrow enough to actually finish well.",
        "The Extended Essay and TOK run on their own separate clock. A four-thousand-word research paper needs a question answerable from sources a student can genuinely reach — a Swedish public library database works for plenty of topics, but an idea that quietly requires archives only available abroad becomes unworkable by winter no matter how strong it looked in September. TOK's exhibition and prescribed-title essay reward a student who starts collecting real-world examples early rather than assembling an argument the week before the deadline.",
        "Every one of these submissions is checked for originality, and a tutor stays firmly on the coaching side of that check: pointing out a misread criterion, asking the question that exposes a weak inference, working through a comparable but different problem, tidying referencing. Supplying finished wording, or reworking a draft closely enough that it stops being the student's own, ends the arrangement immediately — the IB treats it as seriously as that sounds.",
      ],
      bullets: [
        "Sweden's spring term compresses IA drafts, the Extended Essay and TOK into the weeks after jullov.",
        "Internal-assessment weighting varies by subject, rewarding steady documented work over a last-minute push.",
        "Extended Essay and TOK questions both need to stay answerable from sources a student can genuinely reach.",
        "Tutors coach against published criteria; they never supply finished wording a student then submits as their own.",
        "May-session preparation means full timed papers and mark-scheme reading, not further topic review.",
      ],
    },
    {
      heading: "Gymnasium vs the IB Diploma: how the two actually compare",
      paragraphs: [
        "A national gymnasium programme and the Diploma sit on the same funding footing in Sweden, which is unusual, but they diverge sharply in structure. Gymnasiet's national programmes run three years built from a mix of mandatory core courses and programme-specific ones, each graded independently and aggregated. The Diploma is a tighter package: six subjects across defined groups, three or four at Higher Level, wrapped around Theory of Knowledge, the Extended Essay and CAS, with a capped 45-point total that rewards depth across a narrower set of subjects rather than breadth across many.",
        "University selection treats the two outputs as comparable rather than identical. A national-programme meritvärde comes from continuous grading across roughly three years of coursework; a converted IB meritvärde comes from a smaller number of heavily weighted external papers plus internal assessment, run through UHR's official conversion table. Both land on the same 10-to-20 scale for betygsurval, but the underlying assessment rhythm that produced each number is genuinely different.",
        "Because both systems are publicly funded, families in Sweden don't face the fee-driven pressure that pushes some countries toward one qualification over the other — the actual decision usually comes down to whether a student prefers steady, cumulative assessment or the Diploma's mix of depth, coursework and pressure-tested final papers. Schools running the Diploma alongside national programmes, as several municipal schools do, let a student switch tracks relatively cleanly if the fit turns out to be wrong.",
        "One naming quirk is worth flagging: Sweden's own gymnasium years are called Åk 1, Åk 2 and Åk 3 (or Termin 1 through 6), which map onto DP1 and DP2 slightly differently depending on whether a school treats its first gymnasium year as foundational or as the true start of the two-year Diploma. Confirm which convention your child's specific school uses before comparing deadlines with another family's experience — 'Åk 1' doesn't mean the same DP stage everywhere.",
        "For a family deciding where to put limited tutoring hours, the practical takeaway is that Swedish universities take a strong result from either route seriously, so the choice is really about which assessment rhythm suits your child, not about which one 'counts more' — provided whichever path is chosen gets followed through with a genuinely strong final result.",
      ],
      table: {
        caption: "How Swedish school stages map onto the IB continuum",
        columns: ["Swedish stage", "Ages", "IB programme", "Typical assessment load"],
        rows: [
          ["Förskoleklass – Årskurs 6", "6-12", "PYP", "Grundskola curriculum plus PYP units of inquiry"],
          ["Årskurs 7-9 (Högstadiet)", "13-15", "MYP Years 1-3", "Grundskola coursework plus MYP criterion-based tasks"],
          ["Gymnasiet Åk 1", "16-17", "MYP Year 4-5 or foundational DP year", "National gymnasium courses, MYP Personal Project or early DP subjects"],
          ["Gymnasiet Åk 2-3", "17-19", "Diploma Programme / CP", "IB internal assessment, TOK, Extended Essay and the May exams"],
        ],
      },
      bullets: [
        "Both the national gymnasium route and the Diploma are publicly funded, removing the fee pressure other countries face.",
        "A national meritvärde and a converted IB meritvärde land on the same scale from very different assessment rhythms.",
        "Some municipal schools let a student switch between national programmes and the Diploma relatively cleanly.",
        "'Åk 1' can mean different DP stages depending on how a specific school structures its pathway.",
        "A strong result from either route is read seriously; the choice is about assessment style, not prestige.",
      ],
    },
    {
      heading: "Scheduling online tutoring across Central European Time",
      paragraphs: [
        "Sweden still observes daylight saving, moving from CET to CEST in late March and back again in late October — a genuine point of difference from countries elsewhere on this site that have abolished the seasonal shift entirely. Our tutors work from India, and rosters are rebuilt around both clock changes each year, so a slot that sits at 5 pm Swedish time in January should still sit at 5 pm in July, even though the gap to India's own clock has moved.",
        "A first session is exploratory rather than a straight teaching lesson: the tutor wants to watch how your child actually approaches a problem, in real time, before deciding where the coming weeks should focus. That usually means two or three live questions and more listening than talking, ending with a clearer picture of the actual gap — which is often not quite the gap a parent expected going in.",
        "The setup stays deliberately simple: video plus a shared interactive whiteboard, equation and graphing tools for maths and the sciences, a tracked-changes document for essay-based subjects. Every worked example is saved to a folder the family can reopen later, which matters most in the weeks before a mock, when a student wants to revisit exactly how something was explained months earlier.",
        "Before a first lesson does much good, send whatever paperwork the school has already issued — an MYP task sheet with its specific criteria, the internal-assessment brief with its word count, or notes on which subjects run in Swedish versus English. Working from a school's own documents, rather than a generic outline, is what lets feedback sound like it came from someone who actually knows that classroom's marking style.",
        "Planned in advance, a Swedish school year has a reasonably predictable shape: internal-assessment pressure builds through autumn and into the weeks after jullov, May-session preparation intensifies from sportlov onward, and any international university applications running in parallel usually need their strongest subjects in shape well before a foreign deadline that has nothing to do with the Swedish exam calendar at all. Naming these dates at the first conversation means the plan is built around them from day one.",
      ],
      bullets: [
        "Sweden still shifts between CET and CEST twice a year; rosters are rebuilt around both changes.",
        "A first lesson is diagnostic — finding the real gap through live problem-solving, not a scripted introduction.",
        "Shared whiteboard, equation tools and a tracked-changes document cover most subjects without extra setup.",
        "Send the school's own task sheets and note which subjects run in Swedish versus English.",
        "Plan the year once around jullov, sportlov and any foreign application deadlines together.",
      ],
    },
  ],

  process: [
    { title: "Tell us the programme, subject and school type", description: "Your child's stage — PYP, MYP, DP or CP — the subject and level, and whether the gymnasium is kommunal or fristående is enough to start. A short message covers it; nothing needs filling in first." },
    { title: "A named tutor comes back, not a list", description: "The person we suggest has a documented history teaching that exact course, and their background is shared with you before anything is booked, so the decision is about a specific tutor rather than a category." },
    { title: "Watch a live trial lesson first", description: "Timed for a Swedish afternoon or evening, the trial works through something real from your child's own coursework rather than a generic sample. You decide whether the fit is right, not us." },
    { title: "Set a rhythm around your school's calendar", description: "Weekly, twice weekly, or built around a specific deadline — the frequency is yours to choose, mapped to gymnasium terms and IB dates rather than a fixed package. Billing follows sessions actually taken." },
    { title: "Adjust or replace the tutor as the year moves on", description: "A short note follows every lesson, with a longer check-in every few weeks. If something about the pairing isn't right, one message is enough to change it." },
  ],

  whyPoints: [
    { title: "Matched to the exact course, not the general subject", description: "Mathematics AA HL and Mathematics AI SL call for different teaching backgrounds even though both sit under 'IB maths'. Matching happens on programme, subject and level together, so the first lesson starts exactly where your child actually is." },
    { title: "Built around Swedish clock changes, not against them", description: "Sweden still shifts between CET and CEST each year, and bookings are rebuilt around both changes rather than left to drift by an hour every spring and autumn." },
    { title: "PYP through DP and CP, kommunal or fristående", description: "Whether your child's IB runs through a municipally funded continuum school or an independent international one, coverage spans all four stages, so a change of school doesn't mean a change of tutoring provider." },
    { title: "Coaching that stays on the right side of originality rules", description: "Internal assessments, the Extended Essay and TOK all carry strict checks. Sessions focus on method — sharpening a question, testing evidence, fixing referencing — and stop well short of supplying finished wording." },
    { title: "A tutor you see in action before committing", description: "Every tutor's background is checked before they're ever suggested to a family, and a live trial lesson lets your child judge the actual teaching style before anything ongoing is agreed." },
    { title: "Honest about where UHR and university rules take over", description: "Meritvärde conversion and university eligibility rules shift year to year and sit with UHR and each university, not with us. Our part is keeping the underlying IB result strong enough to support whichever route a family needs." },
  ],

  faqs: [
    {
      question: "How do I find the right IB tutor for my child in Sweden?",
      answer: "Start with the specifics — programme stage, subject, level, and whether the school is kommunal or fristående — rather than a general request for help. Message ibgram24@gmail.com or +91 7439 368 115 on WhatsApp with the school and where the difficulty actually sits, and a named tutor comes back rather than a directory to work through yourself.",
    },
    {
      question: "Will sessions actually fit a normal Swedish afternoon?",
      answer: "Yes — bookings sit in CET or CEST depending on the season, and rosters are rebuilt around both of Sweden's clock changes so a slot holds its local time year-round. Tell us the window your household actually keeps free in the afternoon or evening, and a tutor is matched inside it.",
    },
    {
      question: "What does tutoring cost, and how do we pay?",
      answer: "Cost tracks the programme level, subject and weekly hours booked, with Higher Level sciences and maths typically priced above MYP support. A per-hour rate is confirmed in writing before anything is booked, so nothing on the first invoice is a surprise. Send your child's grade, subject and level to ibgram24@gmail.com and ask about currency and payment options at the same time.",
    },
    {
      question: "Does anyone actually visit our home in Sweden?",
      answer: "No — every lesson in Sweden happens over video, with a shared whiteboard carrying the same past-paper work an in-person tutor would otherwise handle. India is the only country where IB Gram places a tutor physically with a student. Online delivery is also what lets us find a specialist for a less common subject combination that a single Swedish city's own market might not stock.",
    },
    {
      question: "How does an IB score actually become a Swedish meritvärde?",
      answer: "UHR publishes an official conversion table turning the Diploma's 45-point total into the same 10-to-20 meritvärde scale a national-programme average produces, revised for admissions from mid-2025 so that 43 IB points now reaches the maximum 20.0. Bonus meritpoäng for certain language, English and maths choices can add up to 2.5 more. Check antagning.se for the current table before finalising subject choices.",
    },
    {
      question: "Is högskoleprovet worth sitting alongside the Diploma?",
      answer: "For some students, yes — it's a separate admissions route with its own quota, open regardless of prior grades, and can act as a hedge where a competitive programme's grade-based cutoff sits above what a converted meritvärde is likely to reach. It's a genuinely different kind of preparation from DP coursework, so treat it as an addition to the plan rather than a replacement for strong subject results.",
    },
    {
      question: "Does our child need to speak Swedish to complete the Diploma?",
      answer: "No — almost every Swedish IB school teaches the Diploma fully in English, and Swedish only becomes relevant afterward, for basic eligibility to a Swedish-taught university programme. Taking Swedish A as the Group 1 subject usually satisfies that requirement directly; English-medium Swedish programmes generally waive it outright.",
    },
    {
      question: "Is HL support taught differently from SL support?",
      answer: "Noticeably, and it's worth stating the level when you book. Higher Level papers carry more content and run longer under time pressure, so sessions weight toward extension material and pacing; Standard Level work leans toward locking in the core syllabus through steady practice. A tutor strong at HL Mathematics AA isn't automatically the right fit for SL Mathematics AI.",
    },
    {
      question: "Can a tutor actually help with an internal assessment or the Extended Essay?",
      answer: "Within clear limits. That means narrowing an overly broad research question, working through the marking criteria strand by strand, checking whether gathered evidence actually supports the argument, and marking a draft the student wrote unaided. It does not mean supplying wording, data or sources the student then submits as their own — the finished piece has to be genuinely theirs.",
    },
    {
      question: "How are tutors actually vetted before being matched with a student?",
      answer: "Each tutor is interviewed on both subject knowledge and the specific curriculum they'd be teaching, with evidence requested for qualifications and prior teaching experience against the current syllabus rather than the subject in general. That scrutiny doesn't stop once a match happens — a mismatch in pace or communication at any point gets a different tutor, not an explanation for why you should adapt.",
    },
    {
      question: "Can we watch a tutor teach before agreeing to anything ongoing?",
      answer: "Yes — a live trial lesson comes first, built around a real piece of your child's own coursework rather than a scripted demonstration. It's the chance to judge whether the explaining style actually works, whether the tutor genuinely knows the syllabus, and whether the timing suits your household before committing further.",
    },
    {
      question: "Which subjects can you actually staff?",
      answer: "Groups 1 through 5 cover most requests: both Mathematics routes, Physics, Chemistry, Biology, Economics, Business Management, Psychology, History, Computer Science, both English options, Swedish A, Environmental Systems and Societies, and Theory of Knowledge, alongside MYP and PYP support. Availability for a rarer combination depends on who's free that term, so send the exact subject and level to confirm.",
    },
    {
      question: "Can tutoring intensify specifically before the May exams?",
      answer: "Yes, and sportlov through to May is when most Swedish families step it up, moving from one weekly session to two or three, built around timed past papers and close mark-scheme review. Book the increase with some notice, since evening slots around exam season fill quickly, and a recent mock is a useful place to start shaping the plan.",
    },
    {
      question: "We're moving between Swedish cities mid-year — will our child fall behind?",
      answer: "It's a common reason families first get in touch, and it's manageable. A tutor compares the new school's subject combination and internal-assessment progress against what your child has already covered, then builds a short plan for whatever specific gap turns up — a topic covered earlier elsewhere, or a different Higher Level pairing. Share the new subject list and the plan starts from there.",
    },
    {
      question: "What's the first step to actually start with a tutor?",
      answer: "One message to ibgram24@gmail.com or +91 7439 368 115 on WhatsApp, covering your child's stage and grade, the subjects and levels, an afternoon or evening window that suits you, and what specifically needs to change. A named tutor and their background come back first, then a trial lesson, with nothing billed until after you've watched it and agreed a rate.",
    },
  ],

  internalLinks: [
    { label: "IB tutors by city", href: "/ib-tutors/", description: "Browse city-level IB tutoring hubs and see how matching works in each location." },
    { label: "IGCSE tuition hub", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject support, syllabus notes and past-paper practice." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP is structured, what HL and SL demand, and where students usually need help." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, ePortfolio and personal project support for the middle years." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Math AA and AI at HL and SL, from foundations through Paper 3 and the exploration." },
    { label: "Verified tutor profiles", href: "/tutors/", description: "See qualifications, subjects, teaching mode and availability before you commit." },
    { label: "Test preparation", href: "/admissions/test-prep/", description: "Exam-season preparation running alongside school coursework and internal assessments." },
    { label: "Talk to the team", href: "/contact-us/", description: "Ask about scheduling, subjects or tutor fit before booking a trial session." },
    { label: "IB and IGCSE guides", href: "/blog/", description: "Study guides, syllabus explainers and revision planning written for students." },
    { label: "IB tutors in Denmark", href: "/denmark/", description: "A neighbouring Nordic market with its own gymnasium system and a growing IB sector." },
    { label: "IB tutors in Norway", href: "/norway/", description: "How online IB tutoring works in another Nordic country with public IB provision." },
    { label: "IB tutors in Finland", href: "/finland/", description: "A third Nordic comparison, with its own tuition-free IB pathway and matriculation exam." },
  ],

  closingHeading: "Book a free trial with an IB tutor in Swedish time",
  closingBody: "Send over the programme, the subject, the level and the city your family is in, and a named tutor comes back with their teaching background and a couple of trial-slot options already sitting inside a Swedish afternoon or evening — free, with nothing to continue after it if the fit is off. Say so if it isn't, and a different tutor is arranged instead. Reach us at ibgram24@gmail.com or +91 7439 368 115 on WhatsApp, with your child's grade and school programme included.",
};
