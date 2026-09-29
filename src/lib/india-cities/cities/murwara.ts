import type { CitySeoPage } from "../types";

/**
 * /murwara/ - IB and IGCSE tutoring page for Murwara (Katni), Madhya Pradesh. Online-only delivery:
 * tutors do not visit homes here, since in-person home tuition is offered only in Gurugram and parts
 * of Delhi NCR. No school in Katni district could be confirmed to teach IB or Cambridge/Edexcel IGCSE
 * (Delhi Public School Katni confirmed CBSE-only via its own site; other listed schools are CBSE or
 * state board), so stripSchools is empty and schoolClusters lean honestly on Jabalpur and Indore.
 * Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const murwara: CitySeoPage = {
  slug: "murwara",
  countryName: "Murwara",
  countryNameLong: "Murwara (Katni), Madhya Pradesh",
  demonym: "Katni",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We work around the district's brutal April-June heat and the unpredictable mid-term arrivals that come with a railway posting, alongside the ordinary school calendar",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.8333, longitude: 80.3833 },
  wikipedia: "https://en.wikipedia.org/wiki/Katni",
  alternateNames: ["Katni"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Murwara (Katni) | Online",
  metaDescription:
    "IB and IGCSE tutors for Murwara (Katni) families: Cambridge subjects and the IB continuum matched online, one-to-one, with a free trial class first.",
  h1: "IB and IGCSE Tutors and Online Tuition in Murwara (Katni)",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR MURWARA (KATNI) FAMILIES",
  heroSubtitle:
    "Katni's biggest employers, a rail junction, cement plants and an ordnance factory, all rotate staff in from other parts of the country, which is exactly the kind of family that ends up asking us for help: a child who was mid-syllabus somewhere else and now needs to pick it back up here, taught live over video by a tutor who already knows that exact course. IB and IGCSE tutors in Murwara get matched on the precise subject and level first, and only afterward does a time get set around your household's own evenings.",
  primaryKeyword: "IB and IGCSE tutors in Murwara",
  imageAltText: "Student in Murwara (Katni) working through an IB Biology topic with a tutor over a video call",
  secondaryKeywords: [
    "IB tutor Murwara",
    "IGCSE tutor Murwara",
    "IB tutor Katni",
    "IGCSE tutor Katni",
    "IB home tuition Katni",
    "IGCSE home tuition Katni",
    "IB private tuition Murwara",
    "IB Maths tutor Katni",
    "IGCSE Maths tutor Katni",
    "IB Physics tutor Katni",
    "IB Chemistry tutor Murwara",
    "IB Biology tutor Katni",
    "IB DP tutor Katni",
    "IB MYP tutor Murwara",
    "IB PYP tutor Katni",
    "IGCSE online tuition Katni",
    "Cambridge IGCSE tutor Katni",
    "IB tutor Katni Madhya Pradesh",
    "online IB tutor Murwara Madhya Pradesh",
    "IGCSE tutor near Jabalpur",
  ],

  heroTrustPoints: [
    "Tutors are chosen against the actual subject and HL/SL level, or the exact Cambridge code and tier, not a general label",
    "Nobody comes to your door in Murwara; that arrangement exists only in Gurugram and parts of Delhi NCR",
    "A complete free trial class happens before you spend anything",
    "No tie-up with any Katni school, the IB Organization, Cambridge International or Pearson Edexcel",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Full IB continuum covered" },
    { value: "Cambridge & Edexcel", label: "Both IGCSE boards matched" },
    { value: "IST", label: "One clock, tutor to student" },
    { value: "Free trial class", label: "See it before you pay" },
  ],

  intro: {
    heading: "A railway junction and cement town, not yet an international-curriculum one",
    paragraphs: [
      "Katni built its identity on limestone, cement and one of the country's largest railway junctions, not on schooling for a global curriculum, and that shows in what families here actually need from a tutor. A railway officer's family posted in from Kolkata or Chennai mid-Diploma needs continuity, not a fresh start. A cement-plant engineer's child settling into a CBSE school after years abroad needs help closing a gap the local system was never built to address. A marble-trade family curious about IGCSE for the first time needs someone to explain, patiently, what the switch would actually involve.",
      "None of these situations is solved by finding a tutor who lives nearby, because in Katni district that tutor, for an IB Diploma subject especially, essentially does not exist. What solves it is a tutor teaching live over video who already knows the precise syllabus a child is on, wherever in India that tutor happens to be sitting.",
      "IB Gram is not connected to Delhi Public School Katni, to any other school named on this page, or to the IB Organization, Cambridge International or Pearson Edexcel. A tutor here teaches, explains and marks; taking over a student's Internal Assessment, Extended Essay or any piece of coursework is not part of the arrangement, ever.",
      "Once the lesson happens on a screen instead of in a room, the whole idea of a 'local' tutor stops mattering. A family near Katni Junction can work with a Physics specialist based in Kochi, or a Maths AI tutor in Pune, exactly as easily as with someone across town, because the video call looks the same either way.",
    ],
    bullets: [
      "IB coverage across PYP, MYP, DP and CP for relocating and continuing families alike",
      "Cambridge and Edexcel IGCSE matched to the exact subject code and tier",
      "Live one-to-one lessons on Indian Standard Time",
      "A written plan follows every free trial class",
      "No home visits in Katni; that stays a Gurugram and Delhi NCR arrangement",
    ],
  },

  programmesIntro:
    "No school in Katni district has been confirmed to hold IB authorisation or to teach Cambridge or Edexcel IGCSE, so every family reaching us here is either continuing a curriculum started somewhere else, weighing a first move into one, or supporting a child boarding away. What each IB stage actually involves, and what that means practically for a Murwara household, is set out below.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Rather than separate subject periods, a class works through broad units of inquiry together, ending each year of the programme with a student-led Exhibition. Nothing here is externally examined, so a tutor's job is mostly about reading stamina, comfort with numbers, and helping a child ask a genuinely researchable question.",
      countryNote:
        "PYP requests connected to Katni almost always come from a family transferred in mid-year, most often through a railway or ordnance-factory posting, where the priority is picking up routines a previous school had already built rather than starting fresh.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Assessment runs against four lettered criteria per subject instead of a single score, a Personal Project falls due in Year 5, and some schools close the programme with an eAssessment. The habit most students take time to build is analysing against a criterion rather than simply describing a topic.",
      countryNote:
        "MYP work touching Katni typically belongs to a student who has moved here partway through a term, catching up on criterion-marked coursework a previous school had already started.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma student takes six subjects, three at Higher Level and three Standard, plus Theory of Knowledge, a compulsory Extended Essay and coursework worth roughly a fifth to a third of the final mark in most subjects. The main exam sitting falls in May.",
      countryNote:
        "With no Diploma school anywhere in the district, a Katni household supporting DP work is almost always tracking a boarding school's calendar in another city rather than a local one.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "This route pairs a couple of Diploma-level courses with a career-related study, a reflective project and practical, workplace-oriented skills training. Very few schools in India run it, but any Diploma content it carries still gets taught in full.",
      countryNote:
        "CP enquiries from Katni are rare, given the absence of a local IB presence altogether; on the odd occasion one comes up, tutoring stays focused on the Diploma subjects that particular CP includes.",
    },
  ],

  subjectsIntro:
    "A railway officer's daughter picking up DP Chemistry HL mid-year needs something quite different from a cement-plant engineer's son starting IGCSE Mathematics for the first time, so a tutor gets chosen for the exact subject and level before anything else about location or timing comes into it.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "A student arriving mid-programme usually has one specific gap, often Paper 3's unfamiliar multi-step problems, rather than a broad weakness, and a tutor's first job is finding exactly where the previous school left off." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistical modelling and fluent graphic-calculator use carry more weight here than formal proof, and the internal exploration is usually what suffers most when a family relocates mid-term and the deadline slips down the priority list." },
    { name: "IB Physics", levels: "HL / SL", description: "Rebuilding data-booklet fluency after a school transition is usually the first task, followed by checking whether the Scientific Investigation already underway has a method that would actually satisfy a moderator." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Organic chemistry is where most transferring students lose ground, since different schools sequence it differently, and a tutor's early sessions typically go into mapping what has and has not been covered yet." },
    { name: "IB Biology", levels: "HL / SL", description: "A student can know the content well and still lose marks by not answering to the command word asked, which is usually the first thing a tutor checks before assuming a content gap exists." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams get drilled for accuracy early on, then paired with genuinely current examples, before an HL student is pushed toward the policy-evaluation style Paper 3 rewards." },
    { name: "IB Business Management", levels: "HL / SL", description: "Sessions run mostly off past-paper case studies rather than theory recall, and the Business Research Project needs an actual local business willing to share information, which can take longer to arrange from a smaller town." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen commentary and comparative essay technique both come from repeated timed practice, and the Individual Oral is usually where a transferring student needs the most rehearsal before the recording counts." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory and pseudocode only really land once paired with time spent actually coding, since the IA needs a working product whose documentation matches it precisely." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies from the biological, cognitive and sociocultural approaches need accurate, current detail, and long-response answers need to stay structured rather than reading as a list of loosely connected facts." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "The strongest answers question a system's assumptions rather than restate them, so sessions are built around genuine evaluation rather than tidy summary." },
    { name: "IB Hindi A / B", levels: "HL / SL", description: "Register, text type and unscripted conversation practice for the individual oral get worked through together, since a Madhya Pradesh school's own Hindi teaching does not always map neatly onto IB's assessment criteria." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis carries Paper 1; a single sustained argument carries Paper 2, and a tutor treats the two as separate skills rather than teaching them together." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions run as real discussion rather than a lecture, with a student regularly asked to argue a prescribed title from a position they would not naturally take." },
  ],

  igcseSubjectsIntro:
    "With no school in Katni district confirmed to teach Cambridge or Edexcel IGCSE, preparation here almost always follows a student who is enrolled elsewhere, boarding away, or a family exploring the switch for the first time. Matching still runs off the precise board, code and tier, then works back from whichever exam series the student is actually entered for.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tier rewards speed without a calculator more than raw difficulty, and a tutor usually finds that losing method marks along the way costs more than a single wrong final answer." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Katni families rarely encounter this subject locally, so a tutor usually starts by explaining what it even covers, calculus and vector work, before showing why sitting it now pays off once Maths AA arrives later." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "A student switching in from CBSE physics usually knows the concepts fine and struggles with the pace of Cambridge's numerical questions instead; the alternative-to-practical paper gets treated as its own separate skill to practise." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "A tutor typically checks mole-ratio calculation speed in the very first session, since that single skill predicts more of a student's eventual grade than anything covered afterward, and folds alternative-to-practical technique in alongside it from day one." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics questions catch out students who assume the paper mirrors CBSE biology's emphasis; a tutor recalibrates that expectation early, then works the longer extended-response questions where marks most often go unclaimed." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Quick marks come from an accurate diagram early on; the real gap for most students sits in the longer evaluative questions that Core-tier preparation tends to skip." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Working through actual Python problems, not just theory on paper, is what makes the logic behind a program genuinely stick." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "A student coming from a CBSE English syllabus usually needs the summary question retaught almost from scratch, since Cambridge marks it on a completely different set of conventions, well before vocabulary becomes the limiting factor." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "A tutor drills a student to argue from the specific scenario printed on the page rather than reach for a general textbook definition, since that habit alone accounts for a large share of lost marks here." },
  ],

  regionsTitle: "Murwara (Katni) localities covered by our online IB and IGCSE matching",
  regionsIntro:
    "Every lesson here happens online, so what matters about these areas is less about proximity and more about who lives there: which schools and industries anchor a locality, and what a working evening looks like once the district's own rhythms are factored in.",
  regions: [
    { name: "Katni Junction and Railway Colony", note: "Home to families posted in through South East Central Railway, often mid-curriculum and mid-school-year, mostly CBSE and state board schooling nearby." },
    { name: "Bargawan", note: "Close to the ordnance factory, a locality with a steady flow of transferred defence-production families." },
    { name: "Madhya Pradesh Housing Board Colony", note: "A newer residential area popular with professional families, mixed CBSE and state board schools." },
    { name: "Gorakhpur, Katni", note: "An established central locality with a longer-running mix of state board and CBSE schools." },
    { name: "Kymore", note: "About 25 kilometres out, home to a major cement works, drawing engineering and technical families into the district." },
    { name: "Bahoriband", note: "A quieter tehsil town where families typically travel into Katni city for anything beyond state board schooling." },
    { name: "Vijayraghavgarh", note: "A smaller town on the district's edge, largely dependent on Katni city or Jabalpur for wider schooling options." },
    { name: "Sleemanabad", note: "Known locally for marble processing, home to trading families increasingly curious about board options beyond the state syllabus." },
    { name: "Rithi", note: "A rural tehsil where school choice still runs almost entirely through the state board system." },
  ],

  schoolDisclaimer:
    "Schools are named on this page only to show what is genuinely available to Murwara families, in the district and further out in Jabalpur and Indore. None of it should be read as a partnership: IB Gram has no arrangement with any listed school, nor with the International Baccalaureate Organization, Cambridge International or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Katni district",
      note: "No school in Katni district could be confirmed to teach IB or Cambridge/Edexcel IGCSE; Delhi Public School Katni, the largest well-known private school locally, confirmed on its own site that it runs CBSE only. Most other schools here sit on CBSE or the Madhya Pradesh State Board.",
      schools: [],
    },
    {
      city: "Nearby: Jabalpur",
      note: "Roughly 90 kilometres away and the nearest larger city, Jabalpur itself has very limited confirmed IB or IGCSE schooling, so it functions mainly as a transit point rather than a settled option for Katni families.",
      schools: [],
    },
    {
      city: "Nearby: Indore",
      note: "Madhya Pradesh's most established IB and Cambridge IGCSE hub, several hours from Katni by road or rail, where a number of families from smaller MP districts choose to board a child from Grade 9 onward.",
      schools: ["Choithram International", "Daly College Indore", "Emerald Heights International School"],
    },
  ],

  modesIntro:
    "Every option below reduces to the same core arrangement, a tutor and a student meeting live over video, on the same Indian clock, at a time the family sets. What changes is pace: a steady weekly habit, a tighter run before an exam, or sessions timed around a family's own relocation and settling-in period. Nobody visits a Katni home as part of any of this, outside Gurugram and Delhi NCR.",
  modes: [
    {
      title: "A regular weekly slot",
      description:
        "The same hour each week, tutor and student together on screen, fitted around a school day. This is where most Murwara families begin, and most stay here for the length of a term.",
      bullets: [
        "Tutor choice is never restricted to whoever happens to be nearby",
        "Suits IB DP and MYP subjects as well as Cambridge or Edexcel IGCSE",
        "Past papers get worked through and marked live, week after week",
        "The same tutor continues through the whole term",
      ],
    },
    {
      title: "A settling-in block for newly arrived families",
      description:
        "A tighter run of sessions in the weeks right after a move, aimed at mapping exactly what a previous school had covered and closing gaps before the new term properly settles in.",
      bullets: [
        "Starts with a proper diagnostic against the current syllabus",
        "Built for families arriving through a railway, cement or ordnance-factory posting",
        "Session pace eases off once the gap is closed",
        "Works alongside whatever the new local school is already teaching",
      ],
    },
    {
      title: "Exam-period revision",
      description:
        "Sessions run closer together in the weeks before mocks or an external series, centred on timed past papers with quick feedback, and planned around the district's own heat and festival calendar.",
      bullets: [
        "Past papers timed and marked against the current mark scheme",
        "Feedback comes back within days, not weeks",
        "Timed around April-June heat and the Navratri and Diwali weeks",
        "Best booked two to three weeks before an exam series begins",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families in Murwara (Katni)",
      paragraphs: [
        "Katni's economy runs on limestone, cement and one of India's larger railway junctions, and its schools reflect that: a mix of CBSE and Madhya Pradesh State Board institutions built for a stable local population, not an international-curriculum ecosystem. Delhi Public School Katni, the best-known private school in the district, confirms on its own website that it runs CBSE only, and no other school listed for the district could be confirmed to teach IB or Cambridge/Edexcel IGCSE after checking multiple directories and individual school sites.",
        "Three kinds of households tend to reach out from Katni: families posted in mid-curriculum through South East Central Railway, the ordnance factory, or a cement company, needing continuity rather than a fresh start; local business and marble-trade families exploring IGCSE for the first time; and households supporting a child boarding at an IB or Cambridge school in Jabalpur, Indore or further away.",
        "A district with no confirmed international-curriculum school has one direct consequence: there is effectively no local pool of IB or Cambridge specialists to draw on, and for Diploma-level subjects specifically, that pool is not thin, it is absent. Matching nationally is the only way to close that gap for a Katni family.",
        "None of that puts a Katni student at a disadvantage once matched properly. Cambridge and Edexcel both set one national paper regardless of where a student sits it, and the IB moderates Diploma work to a single global standard, so a tutor who genuinely knows the current syllabus brings a Katni student to the same standard as a peer at a far larger school elsewhere.",
      ],
      table: {
        caption: "Where Murwara families actually find IB and IGCSE options",
        columns: ["Location", "Distance from Katni", "What's confirmed there"],
        rows: [
          ["Katni district", "-", "No confirmed IB or IGCSE school; CBSE and MP State Board dominate"],
          ["Jabalpur", "About 90 km", "Very limited confirmed IB or IGCSE presence, mainly a transit hub"],
          ["Indore", "Several hours by road or rail", "Madhya Pradesh's established IB and Cambridge IGCSE base"],
        ],
      },
      bullets: [
        "No school in Katni district is confirmed to teach IB or Cambridge/Edexcel IGCSE",
        "Delhi Public School Katni, the district's best-known private school, runs CBSE only",
        "Railway, ordnance-factory and cement-industry postings drive most local demand",
        "National matching is the only real fix for a district with no local specialist pool",
      ],
    },
    {
      heading: "How does IB or IGCSE compare with the MP Board and CBSE in Murwara?",
      paragraphs: [
        "The Madhya Pradesh State Board and CBSE between them account for nearly every school in Katni district, and both set a single fixed paper against a fixed syllabus each year, the kind of exam a well-prepared student can often clear through recall and repetition. Cambridge and Edexcel IGCSE work on a different logic: an Extended-tier or Higher-tier question typically applies a familiar idea to an unfamiliar situation, which punishes memorised answers fast.",
        "Coursework marks the widest gap between the systems. The MP Board and CBSE both include some project-based assessment, but neither approaches the depth of an IB Internal Assessment or an IGCSE coursework component, each marked against detailed, published criteria. A student arriving in Katni from either board has typically never planned an independently assessed piece of work before, and that planning skill is usually the first thing a tutor spends real time building.",
        "Content depth pulls further apart still. What the MP Board or CBSE expects from a Class 11 or 12 student in Maths and the sciences falls noticeably short of what Diploma HL demands at the same stage, and even IGCSE's Extended tier, the tougher of its two options, sits a clear notch above ordinary CBSE difficulty. The choice a student makes at Grade 9, Core or Extended, ends up quietly setting how steep that later climb feels.",
        "This is not an argument against making the move. Families in Katni who have already switched, particularly ones with a railway or industrial background used to relocating and adapting, often say the criteria-based workload suits their household better once they see it laid out against a single make-or-break annual paper.",
      ],
      table: {
        caption: "MP Board and CBSE versus IB and IGCSE in Murwara",
        columns: ["Feature", "MP Board / CBSE", "IB / IGCSE"],
        rows: [
          ["Where it runs in Katni", "Nearly every school in the district", "No confirmed school; boarding elsewhere or online-only support"],
          ["Assessment style", "Fixed annual paper, recall-heavy", "Applies knowledge to unfamiliar contexts"],
          ["Coursework weight", "Limited project marks", "20-30% in most IB subjects; IGCSE coursework varies by subject"],
          ["Recognition", "Domestic only", "Recognised internationally"],
        ],
      },
      bullets: [
        "Cambridge and Edexcel questions punish memorised answers in a way the MP Board and CBSE rarely do",
        "Planning an independently assessed piece of work is the real skill gap for a switching student",
        "The Grade 9 Core-or-Extended decision shapes how large the Class 11 jump feels later",
        "Relocating families sometimes adapt to the criteria-based workload faster than settled ones do",
      ],
    },
    {
      heading: "What shapes the cost of an IB or IGCSE tutor for a Murwara family?",
      paragraphs: [
        "Two factors do most of the work in setting a fee here: how rare the exact subject-and-level combination is, and the length of each session. An IB Diploma HL subject costs more nationally than an IGCSE Core subject purely because far fewer tutors teach the former to a high standard. Once a specific match is proposed, the rate is confirmed in writing before the trial, not renegotiated afterward.",
        "Distance from a metro does not change the number, since a Katni lesson runs entirely online. A Chemistry specialist in Bhopal and one who happened to live in Katni itself, if such a person existed for an IB subject, would cost exactly the same, which is precisely why removing the travel requirement matters so much here.",
        "What a tutor does with the hour matters more than the hourly figure. Someone who has recently marked Cambridge's alternative-to-practical papers, or walked several students through an IB exploration, moves a newly arrived student forward faster than a generalist re-covering ground the student's previous school had already taught.",
        "Families are not locked into anything long-term. A session can be paused around a transfer, a move, or exam pressure elsewhere without cost, progress gets reviewed every few weeks rather than assumed, and a tutor who is not the right fit after the trial simply gets replaced.",
      ],
      bullets: [
        "Subject rarity, not location, is what actually drives the fee",
        "No travel cost anywhere in the number, since every lesson is online",
        "A specific match's cost is confirmed before the trial, never adjusted after",
        "Pausing around a relocation or a busy exam period carries no penalty",
      ],
    },
    {
      heading: "Online tutoring versus Murwara coaching classes, home tutors and self-study",
      paragraphs: [
        "Coaching classes around Katni city are built almost entirely for MP Board exams and competitive entrance preparation, JEE and NEET batches especially, since that is where the paying demand sits. A group class for IB Chemistry HL or IGCSE Additional Mathematics does not exist here, because too few students in the whole district would ever fill a room for it.",
        "Independent home tutors are not hard to find for ordinary board subjects around Gorakhpur or the Railway Colony, but someone genuinely current on IGCSE Physics's alternative-to-practical component, or an IB Diploma subject at HL, is a different matter entirely in a district this size. A generalist tutor can steady a student, but cannot substitute for recent experience with the actual syllabus.",
        "Self-study takes a motivated student reasonably far on IGCSE Mathematics, where past papers and mark schemes are freely available. It tends to fall apart on Internal Assessment planning and the kind of extended written response examiners specifically reward, gaps a student rarely spots without a second, experienced reader checking the work.",
        "What changes with a matched online tutor is reach, not method: a district with effectively no local specialist pool gets access to one covering the whole country, while still delivering the exact syllabus match no local coaching class here is set up to provide.",
      ],
      table: {
        caption: "Comparing routes to IB and IGCSE support around Katni",
        columns: ["Route", "What it is actually built for", "Where it falls short in Katni"],
        rows: [
          ["Coaching classes", "MP Board exams, JEE and NEET batches", "No batch exists anywhere for IB or Cambridge subjects"],
          ["Independent home tutors", "General CBSE and MP Board subjects", "Very few have taught a current IB or Cambridge syllabus"],
          ["Unsupervised self-study", "A motivated student working alone", "IAs and extended written responses go unchecked"],
          ["A matched online tutor", "The precise subject, board and level needed", "None; the only difference is that lessons run on a screen"],
        ],
      },
      bullets: [
        "Katni coaching classes run on MP Board, JEE and NEET demand, not IB or Cambridge",
        "Recent, syllabus-specific experience is rare among local home tutors here",
        "Self-study can work for IGCSE Maths but usually leaves IAs unchecked",
        "Matching online turns a district with no specialist pool into one with a national pool",
      ],
    },
    {
      heading: "What does the Murwara exam and festival calendar look like?",
      paragraphs: [
        "Summer in Katni district is severe even by Madhya Pradesh standards, with April and May routinely pushing well past 40 degrees Celsius, right as most local schools run their own year-end exams. Navratri and Diwali in autumn bring a genuine multi-day disruption to routines across the district, and the monsoon between July and September, while welcome after the heat, can affect roads in the more rural tehsils.",
        "Cambridge and Edexcel IGCSE both run May-June and October-November series each year, and a student connected to Katni sits whichever series their actual school, wherever it is, enters them for. IB Diploma exams for boarding students fall in the May session, with results out in July and a smaller November retake window, so scheduling here tracks a boarding school's calendar rather than a district one.",
        "For a family newly arrived in Katni, the first six to eight weeks matter most, since that is when a tutor can diagnose exactly what a previous school covered and close the gap before it compounds. For boarding Diploma students, school holidays remain the real working window, since term-time sessions have to bend around a boarding school's own timetable.",
        "Booking a revision block for the weeks right after Navratri, once the festival disruption has passed but well before the peak heat sets in again, tends to work better than trying to compress everything into the final fortnight before an exam.",
      ],
      table: {
        caption: "Katni's exam and climate calendar effect on tutoring",
        columns: ["Period", "What's happening locally", "Effect on scheduling"],
        rows: [
          ["April-June", "Severe heat, MP Board and school year-end exams", "Earlier morning or evening slots, sessions kept shorter"],
          ["May-June", "Cambridge and Edexcel IGCSE series; IB DP exams for boarding students", "Final timed past-paper blocks"],
          ["Sept-Oct", "Navratri and Diwali festival season", "A natural pause, then a good window to start revision"],
          ["July-Sept", "Monsoon, occasional disruption in rural tehsils", "Barely affects an online lesson either way"],
        ],
      },
      bullets: [
        "April-June heat in Katni is severe even by Madhya Pradesh standards",
        "Cambridge and Edexcel both run May-June and October-November series",
        "The first six to eight weeks after a relocation matter most for closing gaps",
        "Post-Navratri, pre-summer is a strong window to start a revision block",
      ],
    },
    {
      heading: "Where do Murwara students go after IB or IGCSE?",
      paragraphs: [
        "A student finishing IGCSE and moving into Class 11 and 12, or completing the Diploma while boarding away, tends to look in two directions: competitive entrance exams for engineering, medicine or management within India, and undergraduate study abroad, often both at once rather than one instead of the other.",
        "Indian universities need an Association of Indian Universities equivalence certificate before accepting an IB or IGCSE qualification, and separately check whether the subjects and levels taken satisfy JEE or NEET eligibility rules. Families with an engineering or medical background in Katni's industrial economy sometimes assume the IB or IGCSE qualification alone is enough for entrance eligibility, and getting that subject-selection wrong early is a genuinely avoidable mistake.",
        "For applications abroad, a predicted grade issued in the autumn of Class 12 matters more than most families expect, since it reaches an admissions office well before a final result does. Different systems weigh it differently: some set a points threshold with subject minimums attached, others fold it into a wider application alongside other evidence.",
        "IB Gram's tutors stay focused on the academic side of all this, subject depth, predicted-grade improvement and exam technique, rather than admissions strategy itself, though we are glad to explain what a target course or entrance exam typically expects subject-wise.",
      ],
      bullets: [
        "Engineering and medical entrance plus study abroad are often pursued together, not separately",
        "AIU equivalence and correct subject levels, not the qualification alone, decide JEE/NEET eligibility",
        "Predicted grades reach admissions offices well before final results do",
        "Tutoring covers subject depth and technique, not admissions consulting",
      ],
    },
    {
      heading: "IB Maths and the sciences for Murwara students",
      paragraphs: [
        "Because Katni has no Diploma school of its own, every Maths AA, Maths AI or science request connected to the district belongs either to a boarding student or to a family that relocated in mid-programme, and both situations demand the same thing first: a fast, accurate diagnosis of exactly where the previous teaching left off, before any new content gets introduced.",
        "The choice between Analysis and Approaches and Applications and Interpretation follows the usual logic anywhere in the country, proof-driven and abstract for engineering-bound students, statistics and modelling for those heading toward life sciences, economics or business. What is different for a Katni family is timing pressure: a relocation rarely happens conveniently between terms, so a tutor often has to make that call quickly rather than over a full term of observation.",
        "Physics and Chemistry both carry a Scientific Investigation graded on method as much as outcome, and it is usually the first thing left half-finished after a family relocates. Getting a workable, well-scoped question settled early matters more here than anywhere else, since a rushed investigation started weeks before a deadline rarely survives a moderator's scrutiny.",
        "Biology students transferring in from an MP Board or CBSE background generally already know the content; what they lack is practice answering to the specific command word an IB paper is testing, a gap a tutor can usually close within a handful of focused sessions once it is identified. Across all three sciences, matching runs entirely on which tutor has taught the current syllabus recently, since no local specialist exists to compare against.",
      ],
      bullets: [
        "Every Katni-connected Diploma request involves a boarding or relocating student, not a local school one",
        "Engineering-bound students generally lean AA; life-sciences and business-bound students lean AI",
        "A relocation-interrupted Scientific Investigation is usually the first thing that needs rescuing",
        "Command-word precision, not content knowledge, is the usual gap for science switchers",
      ],
    },
    {
      heading: "IGCSE Core and Extended tiers for Murwara families",
      paragraphs: [
        "Cambridge's Core and Extended tiers, and Edexcel's Foundation and Higher equivalents, cap different grade ranges, and the Grade 9 decision between them matters even more for a family considering the switch from within Katni, since it directly sets the ceiling on how large a later move toward IB HL sciences or maths will feel.",
        "Extended-tier Mathematics paired with Additional Mathematics, where a school offers it, builds the strongest foundation for a later move into Maths AA HL. Extended-tier sciences do the same job for Physics and Chemistry, narrowing the gap a student would otherwise feel jumping straight into Diploma-level content.",
        "A family moving from Edexcel to Cambridge, or the other way round, within or into Katni needs a tutor who understands that the two boards phrase questions differently even where the underlying content overlaps heavily; treating the two as interchangeable is a common and avoidable mistake.",
        "Since no local school currently teaches either syllabus, a newly switching Katni family is essentially choosing a tier and subject combination from scratch rather than following an existing school's structure, which makes an honest early conversation about strengths and goals more useful here than it might be elsewhere.",
      ],
      bullets: [
        "The Grade 9 tier decision sets the ceiling for a later move into IB HL sciences or maths",
        "Extended Mathematics plus Additional Mathematics is the strongest bridge toward Maths AA HL",
        "Cambridge and Edexcel phrase questions differently even where content overlaps",
        "A first-time Katni switcher chooses tier and subjects largely from scratch",
      ],
    },
    {
      heading: "How does IB Gram match a tutor for a family in Murwara?",
      paragraphs: [
        "A brief comes first, and it is deliberately specific: board or programme, subject and level, where the child's grades currently sit, the exam session ahead, and the actual reason behind the enquiry, a mid-year move, an unfinished Internal Assessment, mocks approaching, or genuine curiosity about a first switch. That last detail shapes the shortlist as much as the subject does.",
        "Because Katni cannot supply even one local IB Diploma specialist, and offers very little for Cambridge or Edexcel IGCSE either, every proposed tutor has already been checked on paper qualifications, how recently they taught the precise subject and level in question, and how they handle Internal Assessment guidance specifically, well before a family ever hears a name.",
        "What the trial class settles is everything paperwork cannot: whether an explanation actually lands, whether the tutor probes for exactly what a relocated or newly switching student is missing, and whether the child relaxes enough to ask a genuine question. From there, a written note on the first month, topics and pace included, goes to the family to accept or push back on.",
        "If it still is not right after that, the answer is a different tutor, not more patience. A Murwara family is never held to an arrangement by a contract, whether the sticking point is a curriculum switch mid-flow or simply a personality mismatch.",
      ],
      bullets: [
        "A specific brief, including the real reason behind the request, shapes the shortlist",
        "Every tutor is checked on recent, subject-specific experience before being named",
        "The trial class settles fit; nothing before it asks for a commitment",
        "A wrong match gets swapped, not tolerated, and no contract says otherwise",
      ],
    },
  ],

  tutorsIntro:
    "Below are tutors currently working with students across the IB continuum and Cambridge or Edexcel IGCSE, matched to families connected to Katni. Given that a relocation or a first-time board switch sits behind most Murwara enquiries, each profile gets checked specifically against the syllabus, level and timing your child actually needs, not a generic label.",

  process: [
    { title: "Describe your situation", description: "The board or programme, subject, level, and grade so far, plus whether this is a mid-year relocation, a first switch, or steady ongoing support." },
    { title: "See a shortlist", description: "Names come back chosen for syllabus fit above all else, since Katni offers nothing locally to fall back on, with a plain reason attached to each one." },
    { title: "Try a free class", description: "Your child and the proposed tutor work through a real topic online, at no charge and with nothing to agree to beforehand." },
    { title: "Sign off on month one", description: "A short written plan covering topics and pace arrives after the trial; accept it as it stands or ask for it to be adjusted." },
    { title: "Move into a steady rhythm", description: "Weekly online sessions continue from there, checked on periodically, with the option to swap tutors any time the fit genuinely is not working." },
  ],

  whyPoints: [
    { title: "The syllabus decides the match", description: "Selection runs on the specific subject, HL or SL level, or Cambridge/Edexcel code and tier, and stops there, never a vague tuition category." },
    { title: "Built for a genuine local gap", description: "Katni has nothing to offer locally for IB or IGCSE, so the search runs country-wide by default rather than as a fallback." },
    { title: "Designed around arriving, not starting", description: "Most Katni families are picking a syllabus back up mid-stream, so the opening sessions map what already happened before anything new gets taught." },
    { title: "Judge for yourself first", description: "A free trial puts your child in front of the tutor on real material before any money or commitment is involved." },
    { title: "Assessed work is never ghostwritten", description: "Internal Assessments, coursework and the Extended Essay get guided, corrected and discussed, never written on a student's behalf." },
    { title: "Nothing binds you in", description: "No school or board affiliation, no annual contract, and switching tutors is always on the table if the current one is not right." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Murwara or Katni?", answer: "Tell us your child's IB programme, subject, level and exam session, and we return tutors who genuinely teach that course. Since no school in Katni district runs the IB Diploma, the search happens nationally rather than by postcode, with the actual lesson time still set around your household afterward. Every match opens with a free trial, and a different tutor gets offered if it is not the right fit." },
    { question: "Do you offer IGCSE tutors in Katni for Cambridge or Edexcel?", answer: "We do, delivered entirely online. No school in Katni district could be confirmed to teach either board's IGCSE, so most of the demand reaching us here belongs to a family enrolled elsewhere, boarding away, or exploring the switch for the first time. A tutor gets matched to the precise code and tier, whichever board applies." },
    { question: "Do your tutors visit homes in Murwara?", answer: "No. Home visits from a tutor exist only in Gurugram and parts of Delhi NCR. Everywhere else, Katni included, every lesson runs live online, one to one, with a shared digital whiteboard doing the work a notebook would otherwise do. It is genuine one-to-one teaching, just not delivered inside your house." },
    { question: "What does an IB or IGCSE tutor in Murwara cost?", answer: "The rate mainly reflects subject rarity, the level, session length and how recently a tutor has taught that exact syllabus, confirmed in writing for your specific match before the trial happens. An IGCSE Core subject usually costs less than an IB Diploma HL one, purely because more tutors can teach it well. Distance never enters the calculation, since every lesson is online." },
    { question: "Which schools in Katni offer IB or IGCSE?", answer: "None that we could confirm. Delhi Public School Katni, the district's best-known private school, states on its own site that it runs CBSE only, and no other school listed for the district could be confirmed to teach IB, Cambridge or Edexcel IGCSE after checking several directories and individual school sites. Most schools here sit on CBSE or the Madhya Pradesh State Board." },
    { question: "My family is being posted to Katni mid-programme. Can a tutor help my child continue their IB or IGCSE syllabus?", answer: "Yes, and this is one of the more common reasons families reach out from here, given how many households arrive through a railway, cement or ordnance-factory posting. A tutor's first session focuses on diagnosing exactly what the previous school had covered, then continuing from that point rather than restarting the syllabus." },
    { question: "Is there a free trial class before I commit?", answer: "There is, for every match. Your child works through a real topic from their own syllabus with the tutor online, free of charge and with nothing signed beforehand. A short plan for the first month follows the trial, after which you decide whether to continue, adjust it, or try someone else." },
    { question: "Can a tutor help with IB Internal Assessments for a child in Katni?", answer: "Only by guiding the process, never by producing the work. That means helping settle on a workable research question, explaining what a specific assessment criterion is actually rewarding, checking a data-collection plan, and giving honest feedback on drafts. Writing or substantially rewriting the assessed work itself breaks IB's integrity rules, so it is not something our tutors do." },
    { question: "Which IB Diploma subjects can you help with for a Murwara family?", answer: "Coverage spans the subjects a boarding or relocating Katni student most often needs: both Maths routes at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A and History, along with Theory of Knowledge and Extended Essay support." },
    { question: "Do you tutor IB MYP and PYP students connected to Katni, not just the Diploma?", answer: "Yes, the whole IB continuum is covered for households here whose child is enrolled elsewhere or moving between curricula. MYP sessions focus on criterion-level analysis and the Personal Project's process journal; PYP sessions build reading, writing, number sense and the inquiry skills the Exhibition eventually calls on." },
    { question: "Is online tutoring as effective as in-person tuition for IB or IGCSE students in Katni?", answer: "It holds up well here in particular, given that no local specialist exists for these subjects at all, let alone a specific HL level or exam board. A shared digital whiteboard, screen-shared past papers and saved worked examples cover most of what an in-room tutor would otherwise offer, while opening tutor choice to the whole country instead of a district with no options." },
    { question: "How are IB Gram tutors verified for students connected to Murwara?", answer: "A tutor's qualifications, recent experience teaching that exact subject and level, and understanding of how assessment criteria actually get applied are all checked before they are introduced to any family. Given Katni's complete lack of a local pool, preference goes to tutors who have taught the current syllabus within the last year or two. The trial class is still where a family makes the final call." },
    { question: "When should my child in Katni start IB or IGCSE tutoring?", answer: "As close to the start of the course as possible, Class 11 for the Diploma or Grade 9 for Cambridge or Edexcel IGCSE, since that leaves room to fix gaps before internal exams and predicted grades converge. A student who has just relocated can start immediately regardless of the calendar; the sooner a diagnostic happens, the sooner a proper plan follows." },
    { question: "My child is switching from CBSE or the MP Board to IGCSE. Can a tutor in Katni help?", answer: "Yes, and it comes up regularly among families in Katni's industrial and railway community exploring the switch for the first time. Content usually is not the sticking point; the way Cambridge or Edexcel phrase their questions is, and direct teaching of command words like explain, evaluate and justify, ideally a term before the actual switch, closes that gap fastest." },
    { question: "Can sessions happen on weekends or after school hours in Murwara?", answer: "Yes. Weekday evenings after school and weekend mornings are what most families here book, planned around the district's severe April-June heat and the Navratri and Diwali weeks. Adding a second session ahead of mocks or an exam series is straightforward online." },
    { question: "What happens if we are not happy with the tutor in Katni?", answer: "Tell us and a replacement gets arranged. Families are checked in with every few weeks specifically so a poor fit does not drag on for a whole term, and since nothing here runs on a signed annual contract, stepping away costs nothing either." },
    { question: "Is IB Gram affiliated with any school in Katni, the IB, Cambridge or Edexcel?", answer: "No. IB Gram runs independently, with no affiliation to Delhi Public School Katni, any other school mentioned here, the International Baccalaureate Organization, Cambridge International or Pearson Edexcel. Schools get named only to describe the actual landscape families in this district are working with, and tutors follow each student's own school calendar and syllabus." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "See how this same city-by-city matching approach plays out elsewhere in the country." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The one place on this site where an actual in-home lesson is possible." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel boards, tiers, subjects and exam sessions explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL versus SL, the Extended Essay, TOK and how IAs get marked." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criterion grading, the Personal Project and the eAssessment route." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry, transdisciplinary learning and the closing Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Deciding between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Filter tutor profiles by subject, board, level and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your child's requirement straight through and book a trial." },
    { label: "IB and IGCSE tutoring in Jabalpur", href: "/jabalpur/", description: "The nearest larger city to Katni, about 90 kilometres away." },
    { label: "IB and IGCSE tutoring in Bhopal", href: "/bhopal/", description: "Madhya Pradesh's state capital, with its own limited local options." },
    { label: "IB and IGCSE tutoring in Sagar", href: "/sagar/", description: "Another Madhya Pradesh district with a similarly thin local base." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor in Murwara (Katni)",
  closingBody:
    "Send across your child's board or programme, the subject, current level and grade, and whether this is a fresh start, a relocation, or ongoing support. A shortlisted tutor and their teaching background come back along with trial slots to choose from, all online, one to one, free of charge and with nothing signed. WhatsApp +91 7439 368 115 or email ibgram24@gmail.com.",
};
