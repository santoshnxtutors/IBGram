import type { CitySeoPage } from "../types";

/**
 * /darbhanga/ - IB and IGCSE tutoring page for Darbhanga, Bihar. Online-only delivery: tutors do
 * not visit homes in Darbhanga, since in-person home tuition is offered only in Gurugram and
 * parts of Delhi NCR. No IB or Cambridge/Edexcel IGCSE school is confirmed within Darbhanga
 * itself, mirroring Patna and Ranchi's own pages, so this page is honest about that and points to
 * genuine boarding routes (Kolkata, Delhi NCR) alongside private online study layered on a
 * Darbhanga school day. Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const darbhanga: CitySeoPage = {
  slug: "darbhanga",
  countryName: "Darbhanga",
  countryNameLong: "Darbhanga, Bihar",
  demonym: "Darbhanga",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Classes get planned around Darbhanga's May heat, the monsoon flood season, and Chhath, on top of whatever calendar your child's actual school follows",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.1542, longitude: 85.8918 },
  wikipedia: "https://en.wikipedia.org/wiki/Darbhanga",
  alternateNames: ["Durbhunga"],
  stripSchools: [],

  title: "Darbhanga IB & IGCSE Tuition, All Online",
  metaDescription:
    "Darbhanga has no IB or IGCSE school, so IB Gram matches its students with online tutors for DP, MYP, PYP and Cambridge/Edexcel subjects, first class free.",
  h1: "IB and IGCSE Tutors for Darbhanga Students, Taught Online",
  heroEyebrow: "ONLINE IB AND IGCSE CLASSES, BUILT FOR DARBHANGA",
  heroSubtitle:
    "Darbhanga carries the old Raj Darbhanga name and Mithila's cultural weight, but not, as far as we have been able to check, a single school teaching the IB or a Cambridge/Edexcel IGCSE course; the pattern is the same one Patna and Ranchi face. A family here is usually doing one of three things: keeping an IB subject alive for a child who studies at a boarding school in Kolkata or Delhi NCR, entering a Cambridge or Edexcel IGCSE subject privately alongside a normal CBSE or State Board week, or simply working out whether either qualification makes sense before committing a child to boarding. IB Gram matches a tutor to the exact syllabus in each case and runs every class live over video, since we send nobody to a Darbhanga doorstep to teach.",
  primaryKeyword: "IB and IGCSE tutors in Darbhanga",
  imageAltText: "Online IB tutor walking a Darbhanga student through an Economics diagram over a video call",
  secondaryKeywords: [
    "IB tutor Darbhanga",
    "IGCSE tutor Darbhanga",
    "IB home tuition Darbhanga",
    "IGCSE home tuition Darbhanga",
    "IB private tuition Darbhanga",
    "IB Maths tutor Darbhanga",
    "IGCSE Maths tutor Darbhanga",
    "IB Physics tutor Darbhanga",
    "IB Chemistry tutor Darbhanga",
    "IB Biology tutor Darbhanga",
    "IB DP tutor Darbhanga",
    "IB MYP tutor Darbhanga",
    "IB PYP tutor Darbhanga",
    "IGCSE online tuition Darbhanga",
    "IB tutor Laheriasarai",
    "IGCSE tutor Darbhanga Bihar",
    "online IB tutor Mirzapur Darbhanga",
    "IB tutor Mithila",
    "IB tutor Darbhanga Bihar",
  ],

  heroTrustPoints: [
    "A tutor is chosen for the precise syllabus code your child studies, wherever the school teaching it actually sits",
    "House calls belong to Gurugram and parts of Delhi's NCR; a Darbhanga class always happens on screen",
    "The opening lesson costs nothing and commits you to nothing",
    "IB Gram has no financial stake in any school, board or exam authority named on this page",
  ],
  heroStats: [
    { value: "PYP -> DP", label: "every IB stage, taught remotely" },
    { value: "2 boards", label: "Cambridge and Edexcel IGCSE" },
    { value: "IST", label: "no time gap between tutor and student" },
    { value: "Free first class", label: "nothing charged until you say yes" },
  ],

  intro: {
    heading: "Teaching a curriculum the city itself does not offer",
    paragraphs: [
      "The Darbhanga Raj once ran a princely estate large enough to earn the city its 'Cultural Capital of Bihar' title, and Lalit Narayan Mithila University still sits on the old palace grounds. None of that history has produced a school teaching the IB or a Cambridge/Edexcel IGCSE syllabus locally, at least none we have been able to verify. Schooling in the city runs on the Bihar State Board and CBSE, with a scattering of convent-run schools alongside them.",
      "That gap decides how tutoring actually plays out here. A child boarding in Kolkata or Delhi NCR needs someone tracking that specific school's dates, not a generic Indian term calendar. A student entering a Cambridge or Edexcel IGCSE subject privately, often with an eye on a foreign university later, needs a tutor who is effectively their entire teaching staff for that subject, not a supplement. And a family newly arrived in Darbhanga, perhaps posted to the medical college or one of the district offices, sometimes just wants a child's existing IB subject kept going rather than dropped.",
      "None of it hinges on where the tutor happens to sit. A student near Laheriasarai can learn Chemistry from someone in Bengaluru; a family off Lalbagh can book a Maths specialist teaching from Pune. Everywhere in India except Gurugram and a slice of Delhi's NCR runs this way already, and for Darbhanga it turns an empty local specialist market into the entire country's worth of tutors instead.",
      "IB Gram holds no contract, fee-sharing arrangement or endorsement with any school, board or exam body mentioned on this page. Tutors teach and mark; the actual drafting of an Internal Assessment, Extended Essay or coursework piece is left to the student, every time.",
    ],
    bullets: [
      "IB tutoring across PYP, MYP and the Diploma, every major subject group",
      "Cambridge and Pearson Edexcel IGCSE, at Core, Extended, Foundation or Higher tier",
      "Live, one-to-one, online lessons run on Indian Standard Time",
      "A free first class, followed by a short written plan",
      "No home visits near Darbhanga; that stays a Gurugram and Delhi-NCR arrangement only",
    ],
  },

  programmesIntro:
    "None of the four IB programmes below is taught inside Darbhanga, so families get to them by boarding a child elsewhere, weighing a future move, or sitting an IGCSE subject as a private candidate. The notes that follow are written for exactly that starting point.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Structured around inquiry units rather than fixed timetabled subjects, closing in the final year with a student-run Exhibition. There is no external exam, so tutoring focuses on reading fluency, comfortable number sense, and teaching a child to keep questioning past the first answer that comes to mind.",
      countryNote:
        "PYP calls from Darbhanga almost always come from a family whose child already attends a PYP school somewhere else and needs that subject kept current while they are based here.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Scored against published criteria instead of a percentage, with a standalone Personal Project in Year 5 and, at some schools, MYP eAssessment to close it out. Students rarely struggle with the content itself; meeting a stated criterion in an answer is the harder habit to build.",
      countryNote:
        "No MYP-authorised school exists in Darbhanga, so this is continuity teaching for a child enrolled elsewhere, or preparation before a family commits to a boarding move.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three subjects at Higher Level, three at Standard, plus Theory of Knowledge, an Extended Essay, and Internal Assessments generally worth a fifth to a third of the final subject grade. Most candidates sit their exams in May.",
      countryNote:
        "Darbhanga's DP families are typically supporting a child boarding in Kolkata or the Delhi NCR belt, wanting a tutor who follows that specific school's calendar rather than a generic academic year.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Sets two or more Diploma subjects alongside a career-focused study, a reflective project, and a skills strand built around whatever field the student is aiming for. Uncommon among Indian schools, though the Diploma subjects inside it still demand full Diploma-standard teaching.",
      countryNote:
        "CP enquiries from Darbhanga are rare given how few Indian schools run it; when they arise, the work centres on the embedded Diploma subjects and the reflective project.",
    },
  ],

  subjectsIntro:
    "A student on Biology SL needs a different kind of session from one on HL, and because almost every Darbhanga student on these subjects belongs to a school outside the state, we start by confirming that school's actual exam session rather than guessing at a standard Bihar term.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "HL hinges on Paper 3's unrehearsed problem sets; students who leave the exploration for the last month almost always regret it." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Built around statistics and modelling, with the graphic calculator doing real work rather than sitting idle; a weak exploration topic chosen late is the usual mark-loser." },
    { name: "IB Physics", levels: "HL / SL", description: "Speed with the data booklet counts, but examiners really test whether the Investigation's method survives a second look." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure and bonding open the course; organic chemistry and energetics soak up the most revision hours before the write-up stage." },
    { name: "IB Biology", levels: "HL / SL", description: "Content is rarely the gap by Class 12; hitting the exact command term and using genuine statistics to support a conclusion usually is." },
    { name: "IB Economics", levels: "HL / SL", description: "A sharp diagram tied to one specific, real example wins more marks than a page of general theory; HL's Paper 3 needs separate, dedicated practice." },
    { name: "IB Business Management", levels: "HL / SL", description: "Examiners want theory applied to the case actually in front of the student, and the Business Research Project needs a genuine organisation to study." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen analysis on Paper 1, a held-together comparative argument on Paper 2, then enough nerve for the Individual Oral to land well." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Object-oriented thinking and abstract data structures need to sit alongside a coding IA whose documentation gets marked as closely as the code." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies cited for each approach need to be accurate, and long-response questions reward a tight line of argument over sheer volume." },
    { name: "IB Environmental Systems & Societies", levels: "SL only", description: "There is no HL version; the subject rewards genuine systems-level reasoning about a real issue rather than a recycled summary." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies need specific, named detail, fieldwork must read as a live investigation, and evaluative writing outweighs description." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation carries Paper 1; Paper 2 rewards one sustained argument held together across a long essay." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Most Darbhanga students bring strong comprehension already, given how widely Hindi and Maithili are both spoken; unscripted speaking for the oral is the usual gap." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "A subject built on conversation: testing an exhibition commentary and getting a student to argue a prescribed title from a genuinely opposing angle." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel run their IGCSE exams on different clocks and, subject for subject, ask questions differently even when the content overlaps, so a study plan starts from board, code and tier, never from the general word 'IGCSE'. Nearly every Darbhanga student on these subjects is either a private candidate or keeping a syllabus going from a school somewhere else, so timing follows Cambridge's May-June and October-November series, or Edexcel's January and May-June, over any local school's own dates.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended-tier scripts are lost to missed command words far more often than to actual maths errors; working shown at every line protects marks either way." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Front-loads calculus and vectors a year or two before most students meet them, which is exactly why it eases the jump into IB Maths AA HL so well." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Runs over similar ground to Cambridge's syllabus, but Edexcel's own question style at Higher tier needs practice on its own papers, not borrowed Cambridge ones." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Speed rearranging equations and reading a circuit diagram cold both need repetition, and the alternative-to-practical paper rewards specific drilling of its own." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Organic chemistry and mole calculations chew up the most study hours, and alternative-to-practical technique is best built in parallel, not saved for revision week." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "A strong script usually comes down to structuring the extended-response answers correctly, not simply knowing more about genetics than everyone else." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Summary and directed writing rarely improve from reading alone; they need to be taught as skills, drilled against genuinely unfamiliar timed passages." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "A neat diagram is the easy part; Core-only preparation usually leaves the longer evaluative questions noticeably underdeveloped." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Tracing unfamiliar code matters more than memorised pseudocode, and real time spent writing Python earns more than theory revision alone." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Examiners reward a theory bent around the actual case study on the page, not a general answer pulled from a revision guide." },
  ],

  regionsTitle: "Darbhanga areas our online IB and IGCSE tutors work with",
  regionsIntro:
    "Since every class here happens on a screen, these areas matter for context rather than a tutor's commute: which part of the twin city a family sits in, and how badly the May heat, the monsoon flood season or Chhath tends to reshape an evening's plans.",
  regions: [
    { name: "Laheriasarai", note: "Darbhanga's administrative twin town, home to the district courts and much of the city's institutional life; several long-established schools sit in this half of the urban area." },
    { name: "Allalpatti", note: "A locality within Laheriasarai, known locally for its schools and a settled, education-focused population." },
    { name: "Mirzapur", note: "Home to the Darbhanga Municipal Corporation office; a mixed residential and institutional pocket close to the city centre." },
    { name: "Lalbagh", note: "Another municipal-office locality near central Darbhanga, with a longstanding residential population alongside government buildings." },
    { name: "Darbhanga Bara Bazar", note: "The old central market area, commercially dense, where State Board and CBSE households dominate the school-going population." },
    { name: "Darbhanga Chowk", note: "A central crossing point for the city, useful as a reference for families explaining where they sit relative to Laheriasarai and the old town." },
    { name: "The Rajgarh and Fort precinct", note: "Grounds of the former Darbhanga Raj palace, now home to Lalit Narayan Mithila University; a student-heavy area with a strong academic identity even without an IB or IGCSE school of its own." },
    { name: "Around Darbhanga Medical College and Hospital", note: "A locality shaped by DMCH's presence, drawing staff and student families who often ask about online options precisely because no local school offers an international curriculum." },
  ],

  schoolDisclaimer:
    "Schools named on this page, whether in the nearby cities discussed below or in general references to Darbhanga's own schools, appear only to describe honestly where IB or Cambridge/Edexcel IGCSE study is actually reachable. None carries a contract, partnership or endorsement with IB Gram, and neither do the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Inside Darbhanga",
      note: "Nothing we can confirm here teaches the IB or a Cambridge/Edexcel IGCSE syllabus. Well-known local schools such as D.A.V Public School and Jesus & Mary Academy, alongside many State Board institutions, cover the city's actual schooling; none of them, as far as we know, runs an international curriculum.",
      schools: [],
    },
    {
      city: "Nearby: Patna",
      note: "Bihar's capital, a few hours south, has no confirmed IB or IGCSE school of its own either, but its rail and air links make it the practical first stop before travelling further for one.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The nearest city with a genuinely established IB and IGCSE presence, reachable from Darbhanga by an overnight train; many Bihar families board here or move for a posting and keep the same tutor going afterward.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Further away but well connected by rail and air, Delhi NCR is the other common boarding destination for Bihar families who want their child inside a full IB continuum sooner.",
      schools: ["Pathways World School", "GD Goenka World School"],
    },
  ],

  modesIntro:
    "One underlying format covers every Darbhanga family we work with: live, online, one to one, with a tutor based somewhere in India on IST. What genuinely changes is intensity, a steady weekly rhythm through most of the year, a heavier push near an exam date, or a short settling-in block for a student new to a syllabus. Nobody visits a Darbhanga home for a lesson; that remains specific to Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "A steady weekly class",
      description: "One fixed slot a week, video call and a shared screen, timed to whichever school or boarding calendar the student actually follows.",
      bullets: [
        "Draws on specialists from across India rather than a nonexistent local pool",
        "Suits Diploma, MYP or IGCSE subjects without adjustment",
        "Past papers get worked through together, live, on screen",
        "The same tutor continues unless the family asks otherwise",
      ],
    },
    {
      title: "A term-length plan with regular updates",
      description: "Weekly sessions through the term, a short note after each one, and a fuller review roughly every month so progress stays visible.",
      bullets: [
        "A written note after every class on exactly what was covered",
        "A proper check-in about once a month",
        "Particularly suited to younger PYP and MYP students",
        "A second weekly slot is simple to add ahead of a mock exam",
      ],
    },
    {
      title: "A short push before an exam series",
      description: "Two to four sessions a week for a defined stretch, timed past papers with quick feedback, planned around flood-season disruption and school breaks.",
      bullets: [
        "Marking runs against live IB or IGCSE criteria, not a generic standard",
        "Feedback returned within days",
        "Built around the June-September monsoon and Chhath",
        "Best booked two to three weeks ahead of the exam date",
      ],
    },
  ],

  sections: [
    {
      heading: "Who is actually asking IB Gram for help in Darbhanga?",
      paragraphs: [
        "A boarding placement drives most enquiries. A child settles into a school in Kolkata or somewhere in Delhi NCR, and the family wants a subject tutor tracking that specific school's calendar rather than a generic Indian academic year, so nothing gets lost between term time and holidays spent back home in Mithila.",
        "Private IGCSE entry is the second pattern. A student sits a Cambridge or Edexcel subject independently, usually alongside a normal State Board or CBSE week, often already eyeing a specific course abroad. For this group, the tutor is not extra help layered on top of school; for that one subject, the tutor is the whole of the teaching the student gets.",
        "A smaller group has recently arrived in Darbhanga, often posted to the medical college, the university or a government office, with a child partway through an IB subject elsewhere and no wish to let it lapse simply because the city offers nowhere to continue it.",
        "Set this against Patna or Ranchi, both larger Bihar and Jharkhand cities with the exact same gap: none of these places gives a family a local shortlist to fall back on. What stays constant is the exam itself. The syllabus, the mark schemes and the dates a Darbhanga student sits are identical to a student's anywhere else in India, and a tutor who genuinely knows the material gets a Darbhanga student just as ready.",
      ],
      bullets: [
        "No school confirmed to teach IB or Cambridge/Edexcel IGCSE exists in Darbhanga",
        "Boarding placements, private IGCSE entry and recent arrivals account for most requests",
        "For a private candidate, the tutor effectively is the school for that one subject",
        "Exam content and standards match any other Indian city exactly",
      ],
    },
    {
      heading: "Where a Darbhanga student actually feels the difference between BSEB, CBSE and IB or IGCSE",
      paragraphs: [
        "A Bihar Board or CBSE paper in Darbhanga rewards a student who can reproduce a taught method under time pressure, cleanly and from memory. Cambridge and Edexcel examiners, and IB ones just as much, ask for that same knowledge to be bent around a question they have deliberately made unfamiliar, so a top BSEB scorer can still lose marks on an IGCSE Extended paper simply by trusting the wrong instinct.",
        "The bigger shock tends to be coursework. A BSEB or CBSE student might complete a small project once or twice through school; an IB Diploma candidate is running several Internal Assessments a year against detailed published criteria, each one needing its own research question, data and honest self-critique. Nobody in Darbhanga has a nearby classroom to learn that rhythm from, so a tutor usually starts that habit from scratch, not from a refresher.",
        "Subject depth moves in opposite directions depending where you look. HL Maths and the sciences at Diploma level go noticeably further than anything in a Class 12 BSEB or CBSE syllabus, whereas IGCSE Core stays roughly level with what a Darbhanga student already handles, with Extended pulling ahead of it. Getting that Core-or-Extended call right in Grade 9 is harder without a local IGCSE school's own experience to lean on.",
        "None of this makes IB or IGCSE the tougher path for every student. Quite a few Darbhanga families we work with end up preferring the coursework-and-criteria model precisely because it spreads pressure across the year instead of loading it all onto one paper in March.",
      ],
      table: {
        caption: "BSEB, CBSE and convent schooling against IB and IGCSE",
        columns: ["What changes", "BSEB / CBSE", "Convent-run school", "IB / IGCSE"],
        rows: [
          ["What gets rewarded", "Reproducing a taught method", "Thorough syllabus recall", "Applying and defending a method"],
          ["Coursework share", "One or two small projects", "A moderate written component", "20-30% in most IB subjects; IGCSE coursework varies by subject"],
          ["Recognised where", "Within India", "Within India", "Worldwide"],
          ["Run in Darbhanga?", "Yes, the default for most schools", "A handful of schools", "Nowhere confirmed; boarding or private entry only"],
        ],
      },
      bullets: [
        "Marks follow applying and defending a method, not just reproducing one",
        "Internal Assessments and coursework demand planning skills BSEB and CBSE rarely build first",
        "The Core-or-Extended call in Grade 9 needs outside advice with no local IGCSE school to lean on",
        "Several families end up preferring criteria-based marking once they see how it spreads the workload",
      ],
    },
    {
      heading: "What does an IB or IGCSE tutor actually cost a Darbhanga family?",
      paragraphs: [
        "Rates move with the programme and level first, then the subject, session length and how recently the tutor has actually taught that specific syllabus. A Diploma HL specialist typically charges more than someone teaching MYP or IGCSE Core, purely because so few tutors nationally are current on the harder material. Your child's rate gets settled before the trial, not renegotiated once lessons start.",
        "Geography plays no part in the number. A tutor teaching from Kolkata or Delhi costs a Darbhanga family exactly what a Darbhanga-based tutor would, if one existed for these syllabuses, and that flat pricing across distance is really what makes wide access possible from a city with almost no local specialist base of its own.",
        "Comparing tutors purely on their hourly rate misses the point. Someone who has actually taught IB Maths AA HL through a real Paper 3 cycle, or marked IGCSE Chemistry's alternative-to-practical paper, earns their rate back in fewer wasted sessions than a cheaper generalist working from a textbook, and Darbhanga families feel that gap more sharply with no local second opinion to check it against.",
        "Nothing here runs as a locked-in package. Sessions get reviewed as they go, a pause costs nothing, and if a tutor is not clicking once the trial is over, the next step is simply trying someone else.",
      ],
      bullets: [
        "Programme, level, subject and session length set the rate",
        "No distance-based pricing; a Kolkata or Delhi tutor costs the same as anyone else",
        "Rate confirmed for your child's match before lessons begin",
        "No locked-in package; pausing or switching tutors costs nothing",
      ],
    },
    {
      heading: "Setting online tutoring against what Darbhanga already has: coaching centres, tuition-bureau home tutors, self-study",
      paragraphs: [
        "Ask around Darbhanga's coaching lanes and almost everything on offer is built for NEET, BPSC preparation or BSEB and CBSE board revision. None of it touches a syllabus as narrow as IGCSE Additional Mathematics or IB Chemistry HL, so a student chasing either ends up sitting through content aimed at an entirely different exam if they try to make a group batch work.",
        "The city's tuition bureaus, the kind advertising home visits around Mirzapur or Laheriasarai, run almost entirely on BSEB and CBSE demand. Ask one of them for an IGCSE Extended tutor and the honest answer is usually that nobody on staff has taught it, since no Darbhanga school has ever needed that particular expertise.",
        "A determined student can get partway alone, especially in a subject like IGCSE Maths where past papers are freely available. What self-study rarely survives is the Internal Assessment stage, the Extended Essay, or the specific way IB and IGCSE reward a long written answer; without feedback, students tend to keep making the same structural mistakes undetected.",
        "What actually closes the gap is a tutor who already knows the exact syllabus, delivered over a video call rather than in person, because that is the only way Darbhanga taps into expertise its own coaching lanes were never built to carry.",
      ],
      table: {
        caption: "What's actually available to a Darbhanga student",
        columns: ["Option", "Knows this exact syllabus?", "Attention", "The catch in Darbhanga"],
        rows: [
          ["NEET/board coaching batch", "No, built for a different exam", "Group", "Nothing here touches IB or IGCSE content"],
          ["Tuition-bureau home tutor", "Almost never", "One to one", "Staff are rarely trained on these boards"],
          ["Self-study", "As good as the student's discipline", "None", "IAs and extended writing go unchecked"],
          ["Online subject specialist", "Matched to the code and tier", "One to one", "None worth noting; the pool is nationwide"],
        ],
      },
      bullets: [
        "Coaching batches in Darbhanga are built for NEET, BPSC and board exams, not IB or IGCSE",
        "Local tuition-bureau tutors rarely have any background in these specific boards",
        "Self-study leaves IAs, the Extended Essay and long-answer technique unchecked",
        "A syllabus-matched online tutor is the only route built for this exact gap",
      ],
    },
    {
      heading: "Darbhanga's exam year: heat, floods, Chhath, and when to start",
      paragraphs: [
        "May is Darbhanga's hottest month, regularly touching 43 degrees, often overlapping with a school's own year-end internal exams. The monsoon then carries close to nine-tenths of the year's rainfall between roughly June and September, and the Bagmati and Kamala rivers that run near the city are prone to the seasonal flooding that affects much of North Bihar, which can disrupt travel and connectivity for stretches at a time.",
        "For a Diploma student boarding elsewhere, May holds the main exam session, results land in early July, and November covers retakes. Cambridge IGCSE runs May-June and October-November; Edexcel runs January and May-June. Chhath, observed intensely across Mithila in autumn, genuinely reshapes family schedules for several days each year, and a workable tutoring plan accounts for it rather than pretending otherwise.",
        "For a student boarding in Kolkata or Delhi NCR, that school's own term dates and half-terms set the real rhythm, with Darbhanga-based tutoring typically stepping up during holidays home and easing off through term. Getting that actual calendar early matters, since it bears no resemblance to a typical Darbhanga school year.",
        "For a private IGCSE candidate, the six to eight weeks directly before the sitting matter most. Starting in January for a May-June series, or July for October-November, generally leaves enough time to close real gaps rather than a last scramble.",
      ],
      table: {
        caption: "Darbhanga's year, exams and weather together",
        columns: ["When", "What's on", "What it means for lessons"],
        rows: [
          ["April-May", "Peak heat, school year-end exams", "Keep sessions shorter; avoid an overloaded week"],
          ["May-June", "IB DP exams, Cambridge IGCSE series", "Priority goes to final revision and timed past papers"],
          ["June-September", "Monsoon, seasonal flood risk", "Build in slack for possible connectivity disruption"],
          ["October-November", "Chhath, Cambridge retake series", "Family routines shift; also a useful catch-up window"],
        ],
      },
      bullets: [
        "Peak heat in May often lines up with school year-end exams",
        "IB DP exams sit in May, with November for retakes",
        "Cambridge IGCSE: May-June and October-November; Edexcel: January and May-June",
        "Get a boarding school's actual calendar early; a Darbhanga term year will not resemble it",
      ],
    },
    {
      heading: "After the Diploma or IGCSE: where a Darbhanga student's degree comes from",
      paragraphs: [
        "Darbhanga itself is not short of institutions, just of ones that lead on from IB or IGCSE directly: Lalit Narayan Mithila University sits on the old Raj palace grounds for a wide undergraduate spread, Darbhanga Medical College and Hospital has trained doctors for the region for decades, and AIIMS Darbhanga, once finished, will add to that further. A DP or IGCSE graduate can absolutely apply to any of these, alongside the more usual routes abroad or into India's national entrance exams.",
        "For JEE or NEET, the paperwork step most families overlook is Association of Indian Universities equivalence for an IB or IGCSE certificate, paired with having taken the right subjects at the right level years in advance. Without a Darbhanga school's counsellor to raise this at the right moment, that planning conversation has to start earlier and more deliberately than it might in a city with an IB school of its own.",
        "For a foreign university application, the autumn predicted grade matters more than most families expect, since final results simply are not out yet when offers are being decided. Exactly how that predicted grade gets used, a total IB points figure for the UK, one line among many for a US application, or a different rule elsewhere, is something a boarding school's counselling team is best placed to explain.",
        "Where IB Gram tutors add value is narrower and more concrete: teaching the subject well enough that the predicted grade and the final one both hold up. Admissions strategy stays with the school or a dedicated counsellor.",
      ],
      bullets: [
        "LNMU, Darbhanga Medical College and the coming AIIMS campus anchor local higher education",
        "AIU equivalence plus the right subject levels matter years before JEE or NEET",
        "Autumn predicted grades carry real weight for university offers abroad",
        "Tutors handle subject mastery; admissions strategy stays with the school",
      ],
    },
    {
      heading: "Maths AA versus AI, and the sciences, for a Darbhanga Diploma student",
      paragraphs: [
        "The Maths choice comes down to what a student actually wants next. Analysis and Approaches assumes a comfort with proof and abstraction that pays off in engineering or physics-heavy degrees, and its HL Paper 3 is deliberately unrehearsable, which is exactly why a tutor still working from an old syllabus copy tends to under-prepare students for it. Applications and Interpretation trades that abstraction for statistics and a graphic calculator doing real work, and its exploration goes wrong most often when it's chosen in a rush near the deadline rather than early.",
        "Across Physics and Chemistry HL, the Investigation is where a grade actually gets decided, not the exam papers. A method has to survive someone poking holes in it, not just resemble a school experiment written up neatly. Chemistry HL adds organic mechanisms and energetics as the heavier lifting once the early structural topics are out of the way, and in both subjects a tutor grading against the live IB rubric catches things a general science teacher simply would not look for.",
        "Biology students arriving in Darbhanga rarely lack content knowledge by Class 12; what's missing is usually the discipline of answering to the exact command term set, and enough real statistical reasoning to make a written conclusion stand up rather than just sound confident.",
        "None of these three sciences, or either Maths route, has a teacher for them anywhere in Darbhanga, which is precisely why matching to someone current on the exact level and year of the syllabus closes the gap faster than a generalist reading from whatever book happens to be at hand.",
      ],
      bullets: [
        "AA rewards proof and abstraction; AI rewards statistics and calculator fluency",
        "The Investigation, not the exam paper, is where Physics and Chemistry HL grades get decided",
        "Biology students usually need command-term precision more than extra content",
        "No school in Darbhanga teaches any of these, so exact-syllabus matching does the heavy lifting",
      ],
    },
    {
      heading: "Deciding Core or Extended for IGCSE without a Darbhanga school to ask",
      paragraphs: [
        "Every Cambridge IGCSE subject caps its Core-tier grade below its Extended-tier ceiling, which makes this an early decision worth getting right, and normally a school's own subject teacher would weigh in on it. Without one anywhere in Darbhanga, that conversation happens instead between the family, the tutor, and whatever school the student is actually registered through.",
        "For a student with an eye on Maths AA HL later, Extended 0580 alongside Additional Mathematics 0606, taken as a separate subject where possible, sets up that transition better than almost anything else available at this stage. The same logic applies to the sciences: Extended tier's extra depth softens the jump into DP Physics or Chemistry HL considerably.",
        "Edexcel candidates face a related but separate question. Its Foundation and Higher tiers cover much the same ground as Cambridge's Core and Extended, but the way questions get asked genuinely differs enough that a tutor needs direct experience with Edexcel's own papers, not just assumed overlap with Cambridge's.",
        "A private candidate does get more freedom over subject choice than a student stuck with one school's fixed list, and that freedom is worth using deliberately, aimed at wherever the student is actually heading next, the Diploma, A Levels, or a domestic entrance exam.",
      ],
      bullets: [
        "Core caps a lower grade ceiling than Extended, in every Cambridge IGCSE subject",
        "Extended Maths and Additional Maths 0606 together set up IB Maths AA HL well",
        "Edexcel's Foundation/Higher split needs its own preparation, not borrowed Cambridge technique",
        "A private candidate's extra subject freedom pays off only with a clear next step in mind",
      ],
    },
    {
      heading: "What actually happens between your first message and the first lesson?",
      paragraphs: [
        "It opens with a quick back-and-forth rather than a form: what your child studies and at what level, how they're doing now, what dates a school or board has already set, and the real reason you're reaching out, whether that's one stubborn topic, an IA, a private entry, or still deciding whether to switch at all.",
        "From there, matching leans entirely on the syllabus, because Darbhanga gives us no local tutor track record to compare anyone against. Every name that reaches you has already been checked on paper: real qualifications, recent hands-on teaching of that specific subject and level, and a track record of steering IAs and coursework the right way.",
        "The trial class is deliberately unscripted, because that's where you and your child find out things a CV cannot tell you, whether an explanation actually lands, whether a diagnostic question is genuinely useful, whether your child relaxes enough to admit what they don't understand. A first month's worth of topics and pacing gets written up right after, for you to approve or push back on.",
        "If it turns out wrong, the fix is simple: a different tutor, not a pep talk about giving it more time. Darbhanga families are never locked into a term-length agreement, and rescheduling around a boarding calendar or a trip home rarely takes more than a message.",
      ],
      bullets: [
        "First contact covers subject, level, current standing, dates, and the actual reason for reaching out",
        "Matching runs on verified syllabus experience, since Darbhanga offers no local track record to check against",
        "The trial class, not a CV, is where fit actually gets decided",
        "A wrong match gets swapped quickly; nothing here is a term-length commitment",
      ],
    },
  ],

  tutorsIntro:
    "These are tutors teaching IB PYP, MYP and Diploma subjects, plus Cambridge and Edexcel IGCSE, to students living in and around Darbhanga. A match happens on the exact syllabus, level and exam calendar a student actually follows, since every one of these classes runs over video rather than in someone's living room.",

  process: [
    { title: "Tell us where your child stands", description: "The syllabus, the level, how things are going right now, and the dates already fixed by a board or a boarding school." },
    { title: "Meet a small shortlist", description: "Two or three names, chosen because their teaching background matches your child's actual course, not their availability." },
    { title: "Try one class, no strings", description: "A genuine lesson on a topic that matters, free of charge, with zero pressure to continue." },
    { title: "Lock in a plan for month one", description: "Topics, pacing and how often you'll hear from the tutor, agreed upfront rather than discovered as you go." },
    { title: "Carry on, and revisit as needed", description: "A regular slot, occasional check-ins on progress, and an easy switch if something about the pairing stops working." },
  ],

  whyPoints: [
    { title: "The course decides who teaches, not the postcode", description: "Matching runs on the specific IB subject, level or IGCSE board and tier your child studies, never a loose 'does IB tutoring' label." },
    { title: "Answers a gap Darbhanga actually has", description: "Since no school here runs IB or IGCSE, reaching across India replaces a specialist pool the city simply never built." },
    { title: "Nothing to take on faith", description: "A real class comes before any payment, so judgement rests on what you watched, not on a description of it." },
    { title: "Your child's own words go on the page", description: "Tutors coach IAs, coursework and the Extended Essay without ever writing the graded material themselves." },
    { title: "No silence between sessions", description: "A quick note lands after each class, with a deeper look at progress roughly monthly." },
    { title: "Easy to leave, easy to adjust", description: "No board affiliation, no lock-in period, and a schedule that moves around a boarding term or a family trip without a fuss." },
  ],

  faqs: [
    { question: "How do I find an IB tutor for my child in Darbhanga?", answer: "Send IB Gram the programme, subject, level and current school or exam session, and we shortlist tutors who genuinely teach that course. With no IB school in Darbhanga to search around, the match runs on syllabus fit rather than location, and we then settle on a lesson time around your evenings or a boarding school's own schedule. A free trial class comes before anything else." },
    { question: "Does Darbhanga really have no IB or IGCSE school at all?", answer: "As far as our checks show, no. Darbhanga's schools sit on the Bihar State Board and CBSE, with a small convent-run stream alongside, and none of them teaches IB or a Cambridge/Edexcel IGCSE syllabus. Families wanting either option generally look toward boarding schools in Kolkata or Delhi NCR, or build a subject through private study with online tutoring." },
    { question: "Can you teach both Cambridge and Edexcel IGCSE for a student in Darbhanga?", answer: "Yes, both boards. Every lesson here runs online since nothing is in person, so a Cambridge student gets matched by exact code and tier, say Mathematics 0580 Extended, and an Edexcel student by specification and Foundation or Higher, each working through that board's own past papers rather than a blended approach." },
    { question: "Will a tutor actually visit our home in Darbhanga?", answer: "No. That kind of visit is something IB Gram runs only in Gurugram and select parts of Delhi's NCR. A Darbhanga lesson happens live on a video call, one to one, whiteboard shared on screen, genuine private tuition just without anyone physically arriving." },
    { question: "What should we expect to pay for an IB or IGCSE tutor from Darbhanga?", answer: "That figure moves with the programme, level, subject, session length and how current the tutor is on that syllabus, and it gets fixed for your match before the trial starts. HL Diploma work usually costs more than MYP or IGCSE Core. Nothing gets added for travel, and no contract ties you down." },
    { question: "Our child boards at a school in Kolkata or Delhi NCR. Is a Darbhanga-based tutor still worthwhile?", answer: "It genuinely is, and it's a common arrangement from this part of Bihar. The tutor gets matched to the precise Diploma or MYP subject the boarding school teaches, sessions run online through term, and pick up pace whenever the child is home for a break, following that school's real dates rather than a generic calendar." },
    { question: "Can our child sit Cambridge or Edexcel IGCSE privately while based in Darbhanga?", answer: "That route exists nationwide through registered exam centres, and a tutor can build toward whichever subjects and tier are chosen. We can walk through how private entry generally works, though the centre and the exam board confirm the actual registration windows and paperwork themselves." },
    { question: "Is the free trial class genuinely free?", answer: "Genuinely, yes. Your child sits through a real lesson on their own syllabus with no charge and no obligation to book a second one. A short first-month plan follows, and from there it's entirely up to you whether to continue, adjust it, or ask for a different tutor." },
    { question: "Can a tutor write part of an IB Internal Assessment for a Darbhanga student?", answer: "No, though they will shape the process around it: sharpening a research question, unpacking what a criterion is actually looking for, checking a data-collection method makes sense, and marking up a draft honestly. Writing the assessed work itself is off limits, since IB treats that as an integrity breach regardless of the reason." },
    { question: "Which IB Diploma subjects come up most for Darbhanga students?", answer: "Both Maths routes, AA and AI, at HL and SL, top the list, followed by Physics, Chemistry, Biology, Economics, Business Management, English A and Hindi B, alongside TOK and Extended Essay guidance. Any Diploma subject can be matched; these are simply the ones that come up most." },
    { question: "Do you tutor younger IB students from Darbhanga, or only Diploma-age ones?", answer: "PYP and MYP get covered as well. With neither running anywhere in Darbhanga, the usual scenario is a family keeping a subject going after leaving an earlier IB school, or preparing a child ahead of a planned move to one. MYP work leans on criterion-graded writing; PYP stays closer to reading, number sense and Exhibition preparation." },
    { question: "Can online tutoring genuinely stand in for a local IB or IGCSE school here?", answer: "For exam preparation specifically, yes, and there is barely a local alternative to measure it against anyway. A shared screen, live marking of past papers and saved worked solutions cover most of what sitting beside a tutor would offer, and the trade-off is access to specialists across India rather than a Darbhanga market that has almost none for these syllabuses." },
    { question: "How does IB Gram vet its tutors before matching one to a Darbhanga family?", answer: "Before any introduction, we check qualifications, how recently a subject and level have actually been taught, and how a tutor approaches guiding an IA or coursework. With no local school here to compare against, the bar leans toward someone current on the syllabus over a generalist. The trial class is where you confirm that fit for yourself." },
    { question: "When should we start, given Darbhanga has no local IB or IGCSE school to flag problems early?", answer: "Ideally right at the start of the course: Class 11 for the Diploma, Grade 9 for IGCSE, which leaves time to fix gaps before Internal Assessment deadlines and predicted grades are due. A later start still works; tutoring simply narrows onto the highest-value topics and past papers before the exam date." },
    { question: "We're moving our child from a Darbhanga State Board or CBSE school to IB or IGCSE elsewhere. Can tutoring help beforehand?", answer: "This comes up regularly from this area. Usually it isn't the content that trips students up but the question style: words such as 'explain', 'evaluate' and 'justify' expect something different from a State Board answer, and building that habit, along with early IA or coursework planning, works best starting the summer before the move." },
    { question: "Can sessions run on weekends, or only weekday evenings?", answer: "Either works, and most families end up mixing both: weekday evenings once school is done, plus a slot or two on weekend mornings. Scheduling allows for Darbhanga's harsher summer stretch and the monsoon and Chhath period, when connectivity or routines can shift, and adding an extra weekly class before mocks is a quick ask." },
    { question: "What happens if the tutor matched to us isn't the right fit?", answer: "Say so, and a different tutor gets found. We check in periodically on how things are going, and a change happens whenever it's warranted rather than leaving a student stuck with someone who isn't landing. Since nothing here runs on a long contract, stepping away entirely is equally an option." },
    { question: "Is IB Gram connected to any school in Darbhanga, Kolkata or Delhi NCR, or to the IB or Cambridge boards?", answer: "No, on every count. IB Gram operates independently, with no endorsement from or partnership with any school named on this page, The Heritage School and Pathways World School included, and none whatsoever from the IB Organization, Cambridge International or Pearson Edexcel. Those names appear purely as an honest map of where the actual curricula are genuinely taught." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "A wider look at how IB and IGCSE tutoring actually gets delivered across Indian cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The one region where IB Gram tutors genuinely turn up at a family's door." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring explained programme by programme and subject by subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "How IGCSE boards, tiers and subject choices actually fit together." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL subjects, IAs, TOK and the Extended Essay, laid out in full." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP's criterion grading, the Personal Project and eAssessment, unpacked." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "How PYP's inquiry-based years build toward the final Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "Where the CP sits alongside a standard Diploma subject load." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor backgrounds, searchable by subject and years teaching that syllabus." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief directly and get a trial class booked in." },
    { label: "IB and IGCSE tutoring in Patna", href: "/patna/", description: "Bihar's capital, facing the exact same absence of a local IB or IGCSE school." },
    { label: "IB and IGCSE tutoring in Kolkata", href: "/kolkata/", description: "The nearest city with a genuinely established IB and Cambridge presence." },
    { label: "IB and IGCSE tutoring in Ranchi", href: "/ranchi/", description: "A neighbouring state capital dealing with the same local-school gap." },
  ],

  closingHeading: "Start a free trial with an IB or IGCSE tutor for Darbhanga",
  closingBody:
    "Write in with the programme or board, subject and level, your child's current grade, and whatever exam session or school calendar actually governs their year. You'll hear back with a tutor shortlist, their background teaching that syllabus, and a few trial times that fit your evenings, all online, all one to one, nothing charged and nothing owed afterward. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",
};
