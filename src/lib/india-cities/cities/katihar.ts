import type { CitySeoPage } from "../types";

/**
 * /katihar/ - IB and IGCSE tutoring page for Katihar, Bihar. Online-only delivery: tutors do not visit
 * homes in Katihar, since in-person home tuition runs only in Gurugram and parts of Delhi NCR. Katihar
 * has no confirmed IB or Cambridge/Edexcel IGCSE school (checked against school directories; every
 * listed Katihar school runs CBSE or Bihar Board). schoolClusters point honestly to Kolkata, the
 * nearest city with confirmed options, reachable directly from Katihar Junction by rail. Rendered with
 * the shared CountryLanding layout used by /gurgaon/.
 */
export const katihar: CitySeoPage = {
  slug: "katihar",
  countryName: "Katihar",
  countryNameLong: "Katihar, Bihar",
  demonym: "Katihar",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Classes are timed around Katihar's Kosi and Mahananda flood season each monsoon, the Chhath rush every autumn, and whatever roster a railway family's own posting happens to run on",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.5333, longitude: 87.5833 },
  wikipedia: "https://en.wikipedia.org/wiki/Katihar",
  alternateNames: ["Katihar Junction"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Katihar | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Katihar students: DP, MYP, PYP and Cambridge or Edexcel IGCSE subjects, matched by syllabus, taught live online, free trial class first.",
  h1: "IB and IGCSE Tutors and Online Tuition in Katihar",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR KATIHAR STUDENTS",
  heroSubtitle:
    "Katihar runs on its railway junction and its makhana trade, not on international schooling; nothing in the district currently teaches the IB or Cambridge and Edexcel IGCSE. Two kinds of family end up asking us for tutors here: one has a child boarding away at a school that does teach one of these boards, the other is keeping a child in a Bihar Board or CBSE classroom locally while adding IB or IGCSE subjects on the side, sat as a private or transfer candidate. Either way, the lesson happens on a screen, matched to the exact subject a student needs rather than to whoever happens to live nearby.",
  primaryKeyword: "IB and IGCSE tutors in Katihar",
  imageAltText: "A Katihar student following a live online IGCSE Mathematics lesson with a tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Katihar",
    "IGCSE tutor Katihar",
    "IB home tuition Katihar",
    "IGCSE home tuition Katihar",
    "IB private tuition Katihar",
    "IB Maths tutor Katihar",
    "IGCSE Maths tutor Katihar",
    "IB Physics tutor Katihar",
    "IB Chemistry tutor Katihar",
    "IB Biology tutor Katihar",
    "IB DP tutor Katihar",
    "IB MYP tutor Katihar",
    "IB PYP tutor Katihar",
    "IGCSE online tuition Katihar",
    "Cambridge IGCSE tutor Katihar",
    "IB tutor Katihar Junction",
    "IGCSE tutor Mirchaibari Katihar",
    "online IB tutor Katihar Bihar",
    "IB tutor Purnia division",
  ],

  heroTrustPoints: [
    "Every match is checked against the actual subject, board and level, never a loose IB or IGCSE label",
    "Nothing happens at your doorstep. That side of IB Gram's work runs only in Gurugram and pockets of Delhi NCR",
    "A complete lesson runs first, free, before any payment changes hands",
    "No arrangement with any Katihar school, the IB Organization, Cambridge Assessment International Education or Pearson Edexcel",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Every IB stage taught" },
    { value: "Cambridge & Edexcel", label: "Both IGCSE boards" },
    { value: "IST throughout", label: "One clock, tutor to student" },
    { value: "First class free", label: "Nothing paid upfront" },
  ],

  intro: {
    heading: "Why Katihar sends its IB and IGCSE demand elsewhere",
    paragraphs: [
      "Every school we have checked against Katihar's own directories, Pratibha Public School, Kendriya Vidyalaya Katihar, Colonels Academy, the International School of East India among them, teaches Bihar Board or CBSE and nothing else. That leaves a genuine gap for the small but real number of families in the district who need IB or Cambridge and Edexcel IGCSE support: children of railway officers posted through Katihar's North East Frontier Railway division who studied one of these boards at a previous posting, students boarding at a school elsewhere while home stays in Katihar, and households simply exploring whether either qualification suits a child before committing to a move.",
      "None of that geography stops a screen-based lesson from doing its job properly. Watching a tutor pick apart an unfamiliar IGCSE question, or listening in as an IB Internal Assessment draft gets tested against its actual criteria, works identically whether the person on the other end sits near Katihar Junction's platforms or on the far side of the country. What a video call genuinely buys a Katihar household is choice, since the alternative would mean settling for whichever local tutor happens to be free rather than one who has actually taught the course.",
      "Nobody sends a tutor to a Katihar doorstep, and that stays true whatever a family's budget looks like. Only Gurugram and a limited stretch of Delhi NCR get that treatment. What a Katihar lesson asks for instead is ordinary: a working internet connection and a device to join from. Under that arrangement, a household off the Kadwa road can land an Additional Mathematics specialist working out of Kochi just as readily as anyone could, since finding that specialist parked nearby was never realistic to begin with.",
      "IB Gram has no tie to any school named on this page, nor to the IB Organization, Cambridge Assessment International Education or Pearson Edexcel. Tutors teach, explain and mark work; they do not write or rewrite any part of a student's Internal Assessment, Extended Essay or coursework, under any circumstance.",
    ],
    bullets: [
      "IB coverage across all four stages for boarding and railway-transfer families",
      "Cambridge and Edexcel IGCSE matched to the precise code and tier",
      "Live one-to-one lessons run on Indian Standard Time",
      "A written plan follows once the free trial class ends",
      "No home visits in Katihar; only Gurugram and parts of Delhi NCR get that",
    ],
  },

  programmesIntro:
    "No stage of the IB runs inside Katihar district, so requests reaching us fall into a handful of patterns: a family posted here through the railways or Katihar Medical College with a child already enrolled in the IB elsewhere, a household weighing whether a future move toward one of these boards makes sense, or a student trying an IB or IGCSE subject privately alongside an ordinary Bihar Board week. Here is what each stage of the programme actually involves.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "A young learner moves through connected units of inquiry rather than a fixed subject timetable, with the final year building toward a self-directed Exhibition the child largely steers. Nothing here carries an external exam, so a tutor's real contribution is steadier reading, comfort with numbers, and practice shaping a question actually worth investigating.",
      countryNote:
        "For Katihar, this stage almost always involves a child who has just arrived through a transfer, needing to settle back into an inquiry-based rhythm a previous school had already established.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Every subject is judged against four separate lettered criteria instead of a single combined mark, a Personal Project falls due in Year 5, and an optional eAssessment closes the programme out at some schools. Most students find the jump from describing a topic to genuinely analysing it the hardest part to manage.",
      countryNote:
        "In Katihar, MYP work usually surfaces when a boarding student is home for a short stretch and needs to catch up on criterion-marked work in science or a language before returning to school.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects make up a Diploma, three taken at Higher Level and three at Standard, with Theory of Knowledge and a compulsory Extended Essay sitting alongside them; internal assessment typically accounts for a fifth to a third of each subject's mark. Results for most candidates arrive in early July, following exams held in May.",
      countryNote:
        "No school in Katihar district teaches the Diploma, so scheduling here almost always runs off a boarding school's calendar somewhere else, Kolkata included, rather than any local rhythm.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma-level courses sit alongside a career-focused study, a reflective piece of writing and practical skills work aimed at the workplace. Very few schools in India offer it, but wherever it does come up, the Diploma subjects inside it still get taught properly by a matched tutor.",
      countryNote:
        "CP enquiries are rare out of Katihar given that no local school runs any IB stage; where they do come up, tutoring leans on the Diploma subjects embedded in the route rather than the reflective component.",
    },
  ],

  subjectsIntro:
    "A railway-transfer family catching up mid-term needs a different starting point from a household still deciding whether IB or IGCSE is worth pursuing, so matching always begins with the exact subject and level a student is actually working toward. From there, sessions follow whichever exam series applies and whatever calendar the student's real school keeps, wherever that school happens to be.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "A tutor usually meets a student straight after an HL Paper 3 problem has gone badly, proof and unfamiliar structure being the sticking point; agreeing an exploration idea in the first week of a holiday, rather than the last, changes how the whole thing turns out." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Handling messy, realistic datasets and reading a graphic calculator fluently counts for more here than manipulating equations by hand, and an exploration left until the final days of a break rarely reaches the standard it could." },
    { name: "IB Physics", levels: "HL / SL", description: "A first session generally goes toward isolating exactly where data-booklet recall slows a student under timed conditions, before turning to a Scientific Investigation whose method needs to hold up under a moderator's scrutiny, not just a teacher's." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Once the opening bonding and structure topics are settled, organic mechanisms are usually what cause the real difficulty, and getting the required investigation written up to match the mark scheme, not just the experiment itself, takes deliberate practice." },
    { name: "IB Biology", levels: "HL / SL", description: "Knowing the syllabus is rarely the problem; answering to the exact command word is. A tutor spends real time on that distinction, plus on the statistics an investigation needs if its conclusion is going to survive scrutiny." },
    { name: "IB Economics", levels: "HL / SL", description: "Accurate, well-labelled diagrams built around current, real examples come first, with an HL student then pushed toward the kind of evaluative writing Paper 3 specifically rewards." },
    { name: "IB Business Management", levels: "HL / SL", description: "A student loses marks fast by reciting theory instead of applying it to the exact case in front of them, so past-paper scenarios anchor most sessions, and the Business Research Project needs a genuine, willing organisation behind it." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Paper 1's unseen commentary and Paper 2's comparative essay both improve through repeated, deliberate practice rather than raw instinct, and the Individual Oral tends to demand more rehearsal than any other single component." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory, pseudocode and abstract structures only click once paired with time spent actually coding, since the IA needs a working solution whose write-up genuinely reflects what the code does." },
    { name: "IB Psychology", levels: "HL / SL", description: "Citing current, accurate studies across the biological, cognitive and sociocultural approaches matters, but so does building a long-response answer that stays coherent under timed conditions, a skill that needs repeated, deliberate rehearsal." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Marks go to a student willing to interrogate a system honestly rather than one who simply repeats what a textbook says, so sessions are built to push toward that kind of evaluation." },
    { name: "IB Geography", levels: "HL / SL", description: "Naming specific places, figures and dates beats vague general description every time, and a fieldwork investigation gets checked closely for whether its method would genuinely stand up." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 rewards careful handling of sources, Paper 2 rewards an essay that keeps one clear argument going from start to finish, and the two get practised as separate skills rather than blurred together." },
    { name: "IB Hindi A / B", levels: "HL / SL", description: "Getting register and text type right comes first, since that is where marks slip away fastest, well before the individual oral's unscripted conversation gets its turn." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "A session works best as an actual argument rather than a talk, pulling an exhibition commentary apart piece by piece and asking a student to defend a prescribed title from a position they had not considered going in." },
  ],

  igcseSubjectsIntro:
    "With no Cambridge or Edexcel school anywhere in Katihar district, IGCSE preparation always starts from whichever board and code a student's actual school uses, then works backward from the May-June or October-November series they are entered for. A student coming from an Edexcel background is matched to that specification rather than assumed onto Cambridge, since the underlying content overlaps but exam technique does not carry across cleanly.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "A student stepping up into Extended tier generally needs non-calculator speed rebuilt first, given how much a lost method mark costs compared to one wrong final number." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and vectors show up here a year or two earlier than the IB Diploma would otherwise introduce them, which is exactly why it eases a later transition into Maths AA so noticeably." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "The physics itself is rarely what trips a student up; rearranging an equation quickly under exam pressure is, and the alternative-to-practical paper earns dedicated attention right from the first lesson rather than an afterthought." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole-ratio calculations, organic content and alternative-to-practical technique get built up side by side from the start, instead of leaving the practical component for a later date." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cambridge papers lean unusually hard on genetics and inheritance, so extended-response practice gets its own dedicated time, since that is precisely where marks tend to disappear." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "A correct diagram is worth quick, easy marks, but the harder evaluative questions, the ones Core-tier revision often glosses over, are where real tutoring time gets spent." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Genuine coding problems in Python replace abstract theory wherever possible, since tracing logic on paper only sticks once a student has watched it run for real." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Practising an unseen passage against the clock, paired with direct summary-writing technique, closes more of the mark gap than broad vocabulary building ever seems to." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "A memorised answer nearly always loses to one written for the exact scenario on the page, so sessions push a student to apply theory to that specific case every time." },
  ],

  regionsTitle: "Katihar localities our online IB and IGCSE matching reaches",
  regionsIntro:
    "Every lesson here runs online, so the areas below matter less for reaching a student's door and more for context: which school catchment a family sits in, how the monsoon or Chhath season affects an evening, and how close a locality actually sits to Katihar's own railway and market life.",
  regions: [
    { name: "Mirchaibari", note: "Home to Pratibha Public School and New Pattern English School, a CBSE-heavy cluster on the eastern side of town." },
    { name: "Katihar Junction and railway colony", note: "Housing tied to the North East Frontier Railway's Katihar division, where families often arrive on transferable postings mid-academic-year." },
    { name: "Barmasia", note: "Where Scottish Public School sits, a mixed CBSE and Bihar Board residential locality." },
    { name: "Kadwa road", note: "A route toward the district's rural blocks, where makhana cultivation and processing shape much of the local economy." },
    { name: "Manihari", note: "A riverside town on the Ganga, roughly an hour from Katihar city, more exposed to seasonal flooding and with thinner school options of its own." },
    { name: "Kursela", note: "Near the Ganga's Vikramshila-adjacent stretch, a smaller town whose families mostly send children into Katihar city for schooling." },
    { name: "Falka", note: "A block close to the West Bengal border, where a number of families weigh Malda or Kolkata against staying local for schooling." },
    { name: "Katihar civil lines", note: "The administrative core near the district courts and collectorate, home to Kendriya Vidyalaya Katihar." },
    { name: "Medical college road", note: "The stretch around Katihar Medical College and Hospital, drawing staff and student families from across the district." },
  ],

  schoolDisclaimer:
    "No school physically inside Katihar district appears on this page, since none is confirmed to teach the IB or Cambridge/Edexcel IGCSE; the schools named below sit in Kolkata and are listed purely to show families their nearest genuine option. IB Gram holds no partnership, contract or affiliation with any school named, the International Baccalaureate, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Katihar district",
      note: "Schools here run Bihar Board or CBSE; nothing confirmed teaches the IB or Cambridge/Edexcel IGCSE, which is exactly why families end up matched with tutors from elsewhere in the country instead.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "Reachable directly from Katihar Junction by rail without changing trains, Kolkata is where most Katihar families actually look when a genuine IB or IGCSE classroom, not just a tutor, becomes the goal.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "Modern High School for Girls, Kolkata"],
    },
    {
      city: "Nearby: Patna",
      note: "Bihar's own capital sits several hours south by road or rail and has no confirmed IB or Cambridge/Edexcel school of its own either, but a considerably larger school market overall for families weighing a move within the state.",
      schools: [],
    },
  ],

  modesIntro:
    "Take away the scheduling and one format covers every Katihar arrangement: live video, one tutor and one student, both keeping the same clock. The rhythm is what actually differs, a steady weekly slot for most families, a denser run before an exam, or a plan pegged entirely to when a railway posting starts or a boarding term breaks. A tutor arriving at the door plays no part in a Katihar plan, full stop; that stays a Gurugram and Delhi NCR arrangement.",
  modes: [
    {
      title: "A weekly slot over video",
      description:
        "The same hour each week, tutor and student on a shared screen, set around school hours or wherever a boarding term's own timetable lands. This is where nearly every Katihar family begins and, for most, where things stay.",
      bullets: [
        "Nobody settles for a nearby tutor over the right one",
        "Runs across IB DP, MYP and PYP as well as Cambridge and Edexcel IGCSE",
        "Marking happens live, on a shared screen, paper after paper",
        "The same tutor continues from one week to the next",
      ],
    },
    {
      title: "A steady term with visible notes",
      description:
        "The weekly hour stays, but a short note follows each session and a fuller check-in lands every few weeks, useful for a family who cannot easily sit in on lessons because of distance or a posting elsewhere.",
      bullets: [
        "Every session ends with a written note on what was covered",
        "A review every few weeks adjusts the plan as needed",
        "Works well for a younger PYP or MYP student finding their rhythm",
        "Adding a second weekly hour before mocks takes no real effort",
      ],
    },
    {
      title: "A tighter block for holidays or a fresh posting",
      description:
        "A denser run of sessions during a school break, a transfer's settling-in weeks, or the final stretch before an exam series, working timed past papers with fast turnaround on feedback.",
      bullets: [
        "Past papers marked to current board standards, timed properly",
        "Feedback comes back in days, not weeks",
        "Fitted to a boarding term's dates or a posting's own timeline",
        "Best arranged a couple of weeks ahead of the actual break",
      ],
    },
  ],

  sections: [
    {
      heading: "Katihar's actual school landscape, and where IB and IGCSE demand comes from",
      paragraphs: [
        "Every school we have been able to check against Katihar district, Pratibha Public School and New Pattern English School in Mirchaibari, Colonels Academy, Scottish Public School in Barmasia, Kendriya Vidyalaya Katihar, the International School of East India, runs on Bihar Board or CBSE. None of them is confirmed to teach the IB in any of its four stages, and none is a verified Cambridge or Pearson Edexcel IGCSE centre. Cambridge Institute of Technology and Management, despite the name, is an engineering college, not a school teaching the Cambridge syllabus.",
        "The households who still end up contacting IB Gram from Katihar generally fall into three groups. Families posted through the North East Frontier Railway's Katihar division, or connected to Katihar Medical College, often arrive with a child already partway through an IB or IGCSE course from a previous posting. Boarding families keep a child enrolled at a school in Kolkata or further away while home stays in Katihar. A smaller group is simply testing the waters, entering a subject or two privately to see whether a fuller switch makes sense before committing to boarding.",
        "A district with no local specialist teacher for these boards has one clear consequence: even a well-meaning local tutor would almost certainly never have marked a Cambridge alternative-to-practical script or guided a genuine IB Internal Assessment, because so little of that work exists here to practise on. Matching across the country solves that directly, bringing in someone who has actually taught the precise subject and level this year, regardless of where in India they live.",
        "A properly matched Katihar student is not competing at a disadvantage against anyone. Every Cambridge candidate nationwide answers the identical paper, and the IB holds every Diploma subject to the same global moderation, so a student here can reach precisely the mark a peer would reach at a school that has its own IB coordinator on the payroll.",
      ],
      table: {
        caption: "Katihar's confirmed school boards versus the nearest IB and IGCSE options",
        columns: ["Location", "Board", "Notes"],
        rows: [
          ["Katihar district schools", "Bihar Board and CBSE", "No confirmed IB or Cambridge/Edexcel IGCSE school"],
          ["The Heritage School, Kolkata", "IB", "Reachable directly from Katihar Junction by rail"],
          ["Calcutta International School, Kolkata", "IB", "A long-standing boarding and day option for Bihar families"],
          ["Modern High School for Girls, Kolkata", "ISC with IB pathway", "A well-established Kolkata option for girls"],
        ],
      },
      bullets: [
        "No confirmed IB or Cambridge/Edexcel school exists anywhere in Katihar district",
        "Requests come mainly from railway-transfer, medical-college and boarding families",
        "A thin local specialist base is exactly why national matching works better here",
        "Marking standards and the papers themselves stay identical regardless of where a student sits them",
      ],
    },
    {
      heading: "Is IB or IGCSE genuinely harder than Bihar Board or CBSE?",
      paragraphs: [
        "A Bihar Board or CBSE paper tests one thing well: whether a student can reproduce a defined syllabus accurately under exam conditions once a year. Cambridge questions, Core tier included, are built to test the same knowledge from an angle nobody has seen in class, so a student relying purely on memorised steps stumbles precisely where that question turns unfamiliar.",
        "Internal grading is where the two systems really part ways. Bihar Board carries next to no internally assessed component at all, and CBSE's own internal marks stay light compared with the detailed, published criteria behind an IB Internal Assessment or a graded piece of IGCSE coursework. Few students moving across at Class 9 or 11 have ever planned a piece of independently assessed work before, and that gap, not subject content, is usually what early tutoring sessions spend the most time closing.",
        "Depth is the other divide. HL Maths and the HL sciences under the Diploma push considerably further than anything Bihar Board or CBSE attempts at the same stage, IGCSE Core tracks roughly at CBSE's own level, and Extended sits a full step past that. Whatever a student picks between Core and Extended in Grade 9 carries straight through to how demanding Class 11 turns out to be.",
        "None of this is an argument against switching, though. Plenty of families who eventually move a child toward Cambridge or the IB end up preferring how the workload spreads out across criteria rather than concentrating everything into one make-or-break annual sitting.",
      ],
      table: {
        caption: "Bihar Board and CBSE against IB and IGCSE, for a Katihar student",
        columns: ["Feature", "Bihar Board / CBSE", "IB / IGCSE"],
        rows: [
          ["Where it runs near Katihar", "Every local school", "Nowhere in the district; nearest confirmed option in Kolkata"],
          ["Assessment style", "Fixed paper, recall-heavy", "Application and criteria-based marking"],
          ["Coursework weight", "Minimal internal marks", "20-30% in most IB subjects; graded coursework in IGCSE"],
          ["Recognition", "India only", "Recognised worldwide"],
        ],
      },
      bullets: [
        "Cambridge Extended questions punish memorised answers far more than Bihar Board or CBSE ever does",
        "Planning independent assessed work is the real skill gap on a switch",
        "Picking Core or Extended in Grade 9 carries straight through into how Class 11 feels",
        "Many families come to prefer the spread-out workload once they see it laid out clearly",
      ],
    },
    {
      heading: "What does an IB or IGCSE tutor cost for a family in Katihar?",
      paragraphs: [
        "Ask what an IGCSE English tutor costs and what an IB Maths AA HL tutor costs, and the two answers rarely match, simply because far fewer people nationally have taught Diploma HL content recently than have taught mainstream IGCSE subjects. Whatever number applies to your child gets settled before the trial lesson runs, and stays fixed once teaching actually begins.",
        "A Katihar fee carries no hidden travel component, for the plain reason that nobody drives out to deliver a lesson here. That puts a Bengaluru-based Chemistry specialist and a hypothetical tutor living beside the railway colony on exactly equal footing cost-wise, a comparison that barely comes up in practice since the second person rarely exists for IB subjects anyway.",
        "The number matters less than what a tutor actually does with the hour. Someone who has already marked a real Cambridge 0620 alternative-to-practical script, or steered more than one student through the IB Maths AI exploration, covers more ground in a session than a generalist repeating content a boarding school already taught in class.",
        "No arrangement here binds a family to a fixed term. Check-ins happen every few weeks, a session pauses without charge whenever needed, and if a tutor and student are not clicking once the trial ends, the response is a fresh match rather than a request to stick it out.",
      ],
      bullets: [
        "Fewer specialists teach Diploma HL work, and the going rate reflects that scarcity",
        "A Katihar lesson has no commute built into it, so the fee does not either",
        "Whatever rate applies gets settled before the trial, and holds steady from there",
        "Sessions pause freely; nothing here runs on a term you cannot exit",
      ],
    },
    {
      heading: "Katihar coaching centres, home tutors and self-study, against matched online tuition",
      paragraphs: [
        "Walk past the tuition boards along Katihar's market lanes or near the medical and engineering college roads and the subjects on offer are Bihar Board, CBSE and medical-entrance batches, unsurprising given how many local households have a child aiming at those colleges. IB Chemistry HL and IGCSE Additional Mathematics never get a batch of their own, because too few students across the district study either one at any given time to fill a room.",
        "Ordinary board subjects find decent home tutors locally without much trouble, but IB and IGCSE families here are few and scattered, mostly railway postings and boarding households, so someone who has actually taught this year's syllabus rather than a rough approximation of it is hard to track down inside the district. A steady generalist reassures a nervous student well enough; marking against the genuine published rubric is a different skill entirely.",
        "IGCSE Mathematics rewards a disciplined student working alone, since past papers and mark schemes sit freely online, but that same self-study habit falls apart the moment Internal Assessment planning or an extended written response enters the picture, the two areas examiners are trained to reward beyond a tidy summary. Nobody catches those weak spots without a second, more experienced reader checking the work.",
        "What changes with an online match is narrow but decisive: a thin, mismatched local supply gets replaced by a national one, keeping the exact syllabus knowledge no Katihar coaching batch carries and the corrective feedback a student working alone never receives.",
      ],
      table: {
        caption: "Katihar's routes to IB and IGCSE support, compared",
        columns: ["Route", "Fit to the exact syllabus", "Attention given", "Real gap in Katihar"],
        rows: [
          ["Coaching batches", "Weak; built for Bihar Board, CBSE and entrance exams", "Group, shared", "No batch covers IB or Cambridge subjects"],
          ["Local home tutors", "Uneven", "One to one", "Few have taught the current IB or IGCSE syllabus"],
          ["Unsupervised self-study", "Depends entirely on the student", "None", "IAs and extended writing go unchecked"],
          ["Matched online tutor", "Chosen for the exact subject and level", "One to one", "Draws on the whole country, not one district"],
        ],
      },
      bullets: [
        "Local coaching in Katihar runs on Bihar Board, CBSE and entrance-exam demand",
        "A tutor who has taught the current IB or IGCSE syllabus is rare within the district",
        "Self-study usually leaves IAs and extended writing unchecked",
        "National matching is what actually closes Katihar's local supply gap",
      ],
    },
    {
      heading: "Floods, festivals and exam dates: planning tuition around Katihar's calendar",
      paragraphs: [
        "Two rivers shape the calendar here as much as any exam board does. The Kosi and the Mahananda both run close to Katihar, and between July and September genuine flood risk reaches outlying blocks such as Manihari and Kadwa, occasionally cutting road access for days. Chhath then empties much of the town every autumn as families head to the ghats, a pause worth building into any plan rather than discovering it mid-term.",
        "Cambridge holds its IGCSE series each May-June and October-November, and whichever one a Katihar student's boarding school enters them for is the one that counts; results for the May-June sitting typically arrive in August. Most Indian IB schools sit the Diploma exams in May, publish results in early July, and offer a November retake, so a Katihar family's calendar effectively borrows the boarding school's own dates rather than following anything local.",
        "Grade 9's tier decision and the Grade 10 mocks stand out as the earliest markers an IGCSE student should watch, and the six to eight weeks running up to the actual exam series is where revision pays back the most. Even a January start ahead of a May-June sitting can still cover real ground, provided the plan is honest about how much remains.",
        "A boarding Diploma student's real chance to catch up sits inside school holidays, not the term itself, since weekly sessions during term have to work around someone else's timetable entirely. Concentrating revision into the Chhath break and the summer holiday tends to outperform squeezing extra sessions into weeks that are already full.",
      ],
      table: {
        caption: "How Katihar's flood season and exam calendar shape tutoring",
        columns: ["Period", "What happens", "Effect on tutoring"],
        rows: [
          ["May-June", "Peak heat; Cambridge and IB DP main exam series", "Final revision blocks and timed past papers"],
          ["July-September", "Kosi and Mahananda flood risk in outlying blocks", "Online lessons continue unaffected; travel for exams needs a buffer"],
          ["October-November (Chhath)", "Major festival travel and a short local shutdown", "A natural pause point, aligned with Cambridge's second exam series"],
          ["December-January", "Cooler, generally settled weather", "A reliable stretch for steady weekly progress"],
        ],
      },
      bullets: [
        "Peak summer heat lines up with the main Cambridge and IB DP exam window",
        "Monsoon flood risk affects road travel in outlying blocks, not online lessons",
        "Chhath brings a genuine, predictable pause worth planning around every autumn",
        "Boarding school holidays, not Katihar's own calendar, drive most scheduling",
      ],
    },
    {
      heading: "University pathways for Katihar students after IB or IGCSE",
      paragraphs: [
        "Once IGCSE gives way to senior school, or the Diploma winds down for a boarding student, applications usually go out in more than one direction at once, some toward Indian engineering and medical seats, others toward undergraduate courses abroad. Katihar's own Katihar Medical College and Hospital, Katihar Engineering College and Al-Karim University give local households a close, tangible sense of what those fields demand, and Purnea University now serves as the wider anchor institution for higher education across the whole Purnia division.",
        "An Indian engineering or medical seat requires Association of Indian Universities equivalence for whichever IB or IGCSE qualification a student holds, on top of the right subject combination at the right level for JEE or NEET eligibility. With so many Katihar families already connected to the district's own medical and engineering colleges, running entrance-exam coaching alongside subject tutoring, rather than choosing one over the other, is fairly common practice here.",
        "Grades predicted in autumn of the final year carry unusual weight for anyone applying abroad, since a university sees those numbers long before real results exist. A UK offer names a total IB points figure with HL minimums attached; a US application folds predicted grades into a wider file; every other system runs its own conversion on top.",
        "IB Gram keeps to the academic half of that picture: subject depth, stronger predicted grades and sharper exam technique. Ask what a target course typically expects, subject-wise, and we will say so plainly, so tutoring time goes exactly where it moves the needle.",
      ],
      bullets: [
        "Katihar Medical College and Katihar Engineering College anchor strong local entrance-exam demand",
        "Purnea University now covers higher education across the wider Purnia division",
        "AIU equivalence and correct subject levels matter for JEE and NEET eligibility",
        "Tutoring covers subject depth and exam technique, not admissions consulting",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the sciences, for a Katihar student",
      paragraphs: [
        "A student aiming at engineering or a physical-science degree usually gravitates toward Analysis and Approaches, where HL Paper 3 throws up genuinely unfamiliar problems that a Bihar Board or CBSE background rarely prepares anyone for. Applications and Interpretation instead rewards comfort with statistics and a graphic calculator, and its exploration is where a boarding student most commonly loses marks simply by starting it in the last week of a holiday rather than the first.",
        "Physics HL depends on fast, accurate data-booklet use, careful pacing through two written papers, and a Scientific Investigation whose method could hold up if a moderator started asking pointed questions about it. Chemistry HL turns heavily on organic mechanisms and energetics once the opening bonding topics are out of the way, and in both subjects, marking has to follow the real IB descriptors rather than a general science yardstick.",
        "In Biology, the bottleneck is rarely content itself, it is turning that content into the kind of extended answer IB command words actually call for, alongside enough statistical know-how to make an investigation's conclusion stand up. Bihar Board and CBSE students tend to arrive knowing their material solidly but under-trained in that command-word discipline.",
        "None of these three sciences has a local teacher to draw on, which is exactly why a specialist matched to the right level, working the current syllabus, closes the distance between one school holiday and the next faster than a generalist reaching for whatever textbook happens to be closest.",
      ],
      bullets: [
        "AA suits proof and calculus-heavy routes; AI suits statistics and modelling",
        "Physics and Chemistry HL both turn on the Scientific Investigation",
        "Biology needs command-term precision as much as content depth",
        "Bihar Board and CBSE switchers usually know the content but under-practise command words",
      ],
    },
    {
      heading: "IGCSE Core versus Extended, and subject choices, for Katihar families",
      paragraphs: [
        "A Core-tier grade in Cambridge IGCSE tops out lower than an Extended-tier one can, so a boarding school's Grade 9 call on which tier a student sits carries weight well beyond that single year, particularly for anyone likely to face HL sciences or maths at Diploma level afterwards.",
        "Take Extended Mathematics together with Additional Mathematics, where a school offers both, and a student arrives at IB Maths AA HL already comfortable with a fair amount of what that course assumes. Extended sciences work the same way for DP Physics or Chemistry HL, since the underlying content sits noticeably closer to what the Diploma expects on day one.",
        "A student already settled into a Kolkata school follows whatever tier and subject list that school has already fixed, so tutoring works with that arrangement rather than against it, closing whatever specific gaps a given combination leaves open.",
        "Families weighing an Edexcel school instead of a Cambridge one benefit from a tutor who knows exactly how Edexcel phrases Foundation and Higher tier questions differently, since Edexcel and Cambridge cover similar mathematical ground but test it in noticeably different ways.",
      ],
      bullets: [
        "A Grade 9 tier call shapes both the ceiling ahead and how ready a student is for the Diploma",
        "Pairing Additional Mathematics with Extended Maths gives the smoothest route into AA HL",
        "Sessions build around whatever combination a student's actual school has already chosen",
        "Cambridge and Edexcel share content but ask questions in noticeably different ways",
      ],
    },
    {
      heading: "How does IB Gram match a tutor for a Katihar family?",
      paragraphs: [
        "We ask a handful of direct questions first: which programme or board, which subject and level, the grade the student is at or aiming for, the exam session, and what is actually going wrong, a shaky topic, an unfinished Internal Assessment, upcoming mocks, or a bigger question about switching boards entirely. Those answers, not a list of tutor bios, decide who ends up on the shortlist.",
        "Location drops well down the list of priorities, largely because a Katihar-based specialist for most IB Diploma subjects would be close to impossible to find. What actually gets checked first is whether a tutor has recently taught this precise subject and level, followed by their qualifications and how they approach Internal Assessment guidance, all of it reviewed before any family ever meets them.",
        "From there, the trial lesson does the real work of convincing you: does the explanation land clearly, do the questions asked actually reveal what a student knows, and is your child comfortable enough to say when something has not made sense. A brief plan for the first month arrives afterward, open to being approved outright or sent back with notes.",
        "A wrong fit gets corrected, not tolerated. We would rather introduce a different tutor than ask a student to force a relationship that is not working, and nothing about a long-term contract stands in the way of making that change for a Katihar family.",
      ],
      bullets: [
        "The opening conversation covers programme, subject, level, exam session and the actual worry",
        "Recent teaching experience with the exact subject matters more than location",
        "Tutors are vetted before any introduction; the trial comes before any commitment",
        "A written first-month plan, with re-matching whenever the fit is wrong",
      ],
    },
  ],

  tutorsIntro:
    "These are tutors already teaching PYP through to Diploma, plus Cambridge and Edexcel IGCSE, matched for Katihar households on the exact course a student is following. Location plays no part in that match, since every lesson runs live over video rather than inside anyone's home.",

  process: [
    { title: "Describe the situation", description: "Which board, subject and level, where the student currently stands, and the hours that genuinely fit a Katihar household's week." },
    { title: "Look over a shortlist", description: "A handful of tutors picked purely for having taught this syllabus recently, with a short note on why each one made the list." },
    { title: "Try one lesson, free", description: "A genuine topic covered live over video, nothing charged and nothing owed afterward." },
    { title: "Confirm the plan", description: "A brief outline of topics and pacing for the first month, ready for you to approve or push back on." },
    { title: "Continue at a set pace", description: "The same slot each week, a check-in every few weeks, and an easy switch if the pairing ever needs to change." },
  ],

  whyPoints: [
    { title: "Subject and level decide the match", description: "Nobody gets paired on the strength of the word IB or IGCSE alone; the exact code and level always decide it." },
    { title: "Made for a place with no school of its own", description: "Katihar has no IB or Cambridge/Edexcel school, so we look nationally rather than pretend a local option exists." },
    { title: "You watch before you decide", description: "One free lesson shows how a tutor actually teaches, well before any money is involved." },
    { title: "The student's own words, not the tutor's", description: "Guidance on Internal Assessments and coursework, never a tutor writing or rewriting a line of it." },
    { title: "Regular word on how things stand", description: "A note after each lesson and a proper check-in every few weeks keep progress visible rather than assumed." },
    { title: "Easy to leave, easy to change", description: "No affiliation to any school or board, no minimum term, and a straightforward switch if a tutor is not right." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Katihar?", answer: "Tell us the programme, subject, level and exam session your child is working with, and a shortlist comes back built around tutors who currently teach exactly that. Location never enters the shortlist itself, since no Katihar school runs any IB stage; a workable lesson time gets confirmed once the shortlist is in hand. Every match opens with a free trial, and a different tutor steps in if the first one is not right." },
    { question: "Do you offer IGCSE tutors in Katihar for Cambridge or Edexcel?", answer: "Yes, either board. Neither runs a physical school in Katihar district, so tutoring happens entirely online, matched down to the exact code and tier, Mathematics 0580 Extended and Chemistry 0620 coming up often, taught against that board's actual past papers and mark schemes." },
    { question: "Do your tutors visit homes in Katihar?", answer: "No. House calls are a Gurugram and Delhi NCR arrangement only, nowhere else in the country, Katihar included. A Katihar lesson always runs live over video, one to one, with a shared digital whiteboard standing in for a physical one. It still counts as genuine one-to-one tuition taken from home, just delivered through a screen instead of a knock at the door." },
    { question: "What does an IB or IGCSE tutor cost in Katihar?", answer: "The number depends on the programme, the subject and level, how long each session runs, and how recently a tutor has taught that specific syllabus, all confirmed for your case before the trial lesson happens. IB Diploma HL support tends to cost more than ordinary Cambridge Core help simply because fewer tutors teach it. Since every lesson is online, travel never enters the fee, and nothing here locks a family into a fixed term." },
    { question: "Which schools near Katihar teach IB or IGCSE?", answer: "None sit inside the district itself; Pratibha Public School, Kendriya Vidyalaya Katihar and the rest of the local list run CBSE or Bihar Board. Travel to Kolkata for a confirmed option, a direct rail journey from Katihar Junction, where schools such as The Heritage School and Calcutta International School actually teach these boards." },
    { question: "My child boards at an IB or IGCSE school away from Katihar. Can a tutor help during holidays?", answer: "Regularly, in fact, since this is exactly the situation most Katihar families bring to us, given that no district school teaches any IB stage or Cambridge/Edexcel IGCSE. A tutor is matched to whichever subject, level and syllabus the boarding school actually follows, and sessions fit around that school's holiday calendar or, where permitted, evening slots during term itself." },
    { question: "Is there a free trial before I have to commit?", answer: "Always. A real topic from your child's own syllabus, worked through live with the tutor online, costs nothing and asks for nothing in return. What follows is a short outline for the first month; take it as it stands, ask for adjustments, or decide the match was not quite right and try again." },
    { question: "Can a tutor write my child's IB Internal Assessment for them?", answer: "No. Guidance is the extent of it: helping settle on a research question that will actually work, unpacking what each criterion is really asking for, thinking through how data gets gathered, and giving straight feedback on a draft. Anything closer to writing or rewriting assessed work breaks IB's own integrity rules, so it is simply not something IB Gram tutors do." },
    { question: "Which IB Diploma subjects do you cover for Katihar families?", answer: "Just about every major subject group that comes up in practice: both Maths routes at HL and SL, the three sciences, Economics, Business Management, English A, Computer Science, and the DP core of Theory of Knowledge alongside the Extended Essay." },
    { question: "Do you tutor IB MYP and PYP students connected to Katihar too, or only Diploma students?", answer: "Both stages, not just the Diploma. An MYP student gets help building the criterion-based analysis their sciences and language subjects demand and working through the Personal Project journal; a PYP student works on reading, writing, number sense and the inquiry skills that lead toward the Exhibition." },
    { question: "Can online tuition really work as well as an in-person tutor for IB or IGCSE students in Katihar?", answer: "In practice, yes, and the comparison matters less here than in a city with actual local specialists to weigh against. A shared digital whiteboard, past papers marked on screen and recorded worked solutions replace nearly everything a tutor beside your child could offer, and since no local IB or IGCSE specialist exists to compare against anyway, the online option is really the only serious one on the table." },
    { question: "How does IB Gram check its tutors for Katihar students?", answer: "Qualifications, recent hands-on experience with the precise subject and level, and a track record of working with the assessment criteria involved, all reviewed before a tutor ever meets a family. Recency matters more than a broad résumé, given how thin the local base is here. After that, the free trial lets you form your own view of how well the fit actually works." },
    { question: "When should tutoring start for a Katihar student aiming at IB or IGCSE?", answer: "Beginning alongside the course itself, Class 11 for the Diploma or Grade 9 for IGCSE, gives the most room to sort out gaps before internal exams, IA deadlines and predicted grades all converge at once. A later start, even in the final year, can still shift outcomes meaningfully if the sessions concentrate on the topics and past papers most likely to move a grade." },
    { question: "My child is moving from Bihar Board or CBSE toward IGCSE. Can a Katihar-based tutor help?", answer: "Yes, and this request comes up often among households eyeing a Kolkata school. Content is rarely the real obstacle; exam phrasing is. Words like 'explain', 'evaluate' and 'justify' carry specific expectations that need direct teaching, ideally starting the term before the actual switch so Grade 9 or 10 does not land as a surprise." },
    { question: "Are weekend or evening sessions possible for a student in Katihar?", answer: "Yes, weekday evenings after school and weekend mornings are the two slots most Katihar families settle into. Planning also allows for monsoon-season flooding, which occasionally disrupts outlying blocks, and for Chhath each autumn, when the town largely pauses for a few days. Fitting in a second weekly session ahead of mocks or an exam sitting is straightforward." },
    { question: "What happens if the tutor is not the right fit for my Katihar family?", answer: "Say so, and a different tutor takes over. We review how things stand every few weeks and offer a re-match the moment a fit looks wrong, rather than leaving a student to struggle through with someone who is not helping. Nothing about our arrangement locks a family in, so changing course costs nothing extra." },
    { question: "Is IB Gram affiliated with any school near Katihar, or with the IB, Cambridge or Edexcel?", answer: "No, on every count. IB Gram operates independently, with no tie, endorsement or representation from any school on this page, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. Schools appear here strictly to point out where genuine options exist nearby, and every tutor follows that school's own calendar and the relevant board's published syllabus." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "A broader look at how IB and IGCSE tutoring is arranged in cities nationwide." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The one place IB Gram sends tutors to a family's actual door." },
    { label: "IGCSE guide", href: "/igcse/", description: "A rundown of IGCSE boards, tiers, subject choices and exam timing." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL, SL, Internal Assessments, TOK and the Extended Essay, explained together." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "What MYP's criteria, the Personal Project and eAssessment actually involve." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "How units of inquiry and the Exhibition fit into PYP." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "The real difference between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles sorted by subject, programme stage and teaching background." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your child's brief through and get a trial lesson booked." },
    { label: "IB and IGCSE tutoring in Patna", href: "/patna/", description: "How the same gap plays out in Bihar's larger capital city." },
    { label: "IB and IGCSE tutoring in Bhagalpur", href: "/bhagalpur/", description: "Another North Bihar city working with no local IB or IGCSE school." },
    { label: "IB and IGCSE tutoring in Darbhanga", href: "/darbhanga/", description: "A comparable district further west in Bihar, facing the same gap." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor in Katihar",
  closingBody:
    "Let us know the board or programme, subject and level, where your child currently stands, and hours that work around your household or posting. A shortlisted tutor comes back with their background and open trial times, ready to start online, one to one, without any charge or obligation attached. Write to ibgram24@gmail.com or message us on WhatsApp at +91 7439 368 115.",
};
