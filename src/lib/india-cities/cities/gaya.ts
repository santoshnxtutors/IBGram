import type { CitySeoPage } from "../types";

/**
 * /gaya/ - IB and IGCSE tutoring page for Gaya, Bihar. No school in Gaya is confirmed to offer
 * the IB or Cambridge/Edexcel IGCSE, so this page is honest about that: tuition is online
 * one-to-one, and schoolClusters point to the real cities Gaya families board children in or
 * consider (Kolkata, Delhi NCR), never an invented local school. Rendered with the shared
 * CountryLanding layout used by /gurgaon/.
 */
export const gaya: CitySeoPage = {
  slug: "gaya",
  countryName: "Gaya",
  countryNameLong: "Gaya, Bihar",
  demonym: "Gaya",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots are built around Gaya's Pitru Paksha season, Chhath Puja and whatever timetable your child's own school or online programme actually keeps",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.75, longitude: 85.01 },
  wikipedia: "https://en.wikipedia.org/wiki/Gaya,_India",
  alternateNames: ["Gya"],
  stripSchools: [],

  title: "IB and IGCSE Tutors for Gaya | Live Online Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Gaya, since no local school runs either syllabus, matched one to one, sessions timed around Pitru Paksha, with a free trial.",
  h1: "Online IB and IGCSE Tutors for Students in Gaya",
  heroEyebrow: "GAYA'S IB & IGCSE STUDENTS, TAUGHT LIVE ONLINE",
  heroSubtitle:
    "No school in Gaya currently runs the IB or Cambridge and Edexcel IGCSE syllabus, so IB Gram brings the tutor to you instead: live, private tuition at home over video, matched to the exact course your child is following, whether through an online international curriculum, a break from boarding elsewhere, or a switch you are still weighing up. A tutor visiting your home only happens in Gurugram and parts of Delhi NCR; here, every lesson runs on a laptop, planned around the Pitru Paksha rush at Vishnupad Temple and the rest of your family's year.",
  primaryKeyword: "IB and IGCSE tutors in Gaya",
  imageAltText: "A Gaya student working through an IB Economics diagram with a tutor during a live online lesson",
  secondaryKeywords: [
    "IB tutor Gaya",
    "IGCSE tutor Gaya",
    "IB home tuition Gaya",
    "IGCSE home tuition Gaya",
    "IB private tuition Gaya",
    "IB Maths tutor Gaya",
    "IGCSE Maths tutor Gaya",
    "IB Physics tutor Gaya",
    "IB Chemistry tutor Gaya",
    "IB Biology tutor Gaya",
    "IB DP tutor Gaya",
    "IB MYP tutor Gaya",
    "IB PYP tutor Gaya",
    "IGCSE online tuition Gaya",
    "IB tutor Swarajpuri Road",
    "IGCSE tutor AP Colony Gaya",
    "online IB tutor Bodh Gaya",
    "IB tutor Gaya Bihar",
    "IGCSE tutor Buniyadganj",
  ],

  heroTrustPoints: [
    "A tutor matched to your child's exact IB or IGCSE course, even though no school in Gaya currently teaches one",
    "Lessons stay online only; a tutor visiting your home happens solely in Gurugram or parts of Delhi NCR",
    "Watch a complete lesson before paying a rupee",
    "Independent of every curriculum board and school named on this page",
  ],
  heroStats: [
    { value: "PYP through DP", label: "Every stage of the IB taught" },
    { value: "CAIE & Edexcel", label: "Cambridge and Pearson both covered" },
    { value: "IST", label: "One clock, tutor and student" },
    { value: "No-cost trial", label: "See a lesson before you pay" },
  ],

  intro: {
    heading: "Why Gaya families turn to IB Gram",
    paragraphs: [
      "Gaya does not have a school running the IB or a Cambridge or Edexcel IGCSE course, at least not yet, so families interested in either path are usually doing one of three things: following an online international curriculum while living in the city, keeping up over school holidays with a child who boards elsewhere, or weighing up whether to make the switch at all. IB Gram works with all three: tell us the exact programme, subject and level, and we find a tutor who has actually taught it.",
      "What Gaya has instead is a dense CBSE and Bihar State Board network, Kendriya Vidyalaya, Delhi Public School and Podar International School among them, none of which currently run an IB or Cambridge track. That gap is real, and it is exactly why an online tutor matters here: instead of waiting for a specialist to eventually set up locally, a family can reach one anywhere in India today.",
      "Home visits are not part of this service in Gaya. That format exists only in Gurugram and parts of Delhi NCR; everywhere else, a laptop and a steady connection carry the whole lesson, with the tutor logging in from wherever they live. A family near Vishnupad Temple can work with an IB Chemistry specialist based in Chennai just as easily as one based next door, if one even existed.",
      "IB Gram has no relationship with any school, board or curriculum authority named on this page. A tutor coaches, marks and explains; writing an Internal Assessment, an Extended Essay or any piece of coursework a student will submit for a grade is never part of what they do.",
    ],
    bullets: [
      "The full IB continuum, PYP through DP, across every core subject",
      "Both Cambridge and Pearson Edexcel IGCSE, whichever tier applies",
      "Live, one-to-one sessions at home, over video, on Indian time",
      "A no-cost trial lesson, followed by a short written plan",
      "No home visits reach Gaya; that stays limited to Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Without a local school to anchor around, a Gaya family's starting point usually depends on why IB or IGCSE is on the table at all: an online school already enrolled in, a curriculum a child followed before boarding elsewhere, or simply a switch under consideration. The notes below cover what actually comes up at each stage of the IB continuum.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Six transdisciplinary units of inquiry run through the year instead of fixed subjects, building towards the Exhibition in the final term, with nothing externally examined along the way. A tutor's real contribution is reading stamina, number sense and the habit of asking a sharper question.",
      countryNote:
        "For Gaya families, PYP usually means an online international school, so sessions often double up as a check that the platform's own material is actually landing, not just being clicked through.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Every subject carries criteria A to D, the Personal Project lands in Year 5, and MYP eAssessment closes the programme at some schools. Most students can describe a topic without much help; arguing it against a specific criterion is where they stall.",
      countryNote:
        "Gaya MYP students most often need this criterion-level habit built from scratch, since it rarely gets taught in a Bihar State Board or CBSE classroom.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two years, six subjects split three and three across Higher and Standard Level, with Theory of Knowledge seminars, an Extended Essay and Internal Assessment weighting that lands somewhere between a fifth and a third of each subject's final mark. May is when the whole thing comes together.",
      countryNote:
        "Without a Gaya school offering the DP, requests usually come from families with a child boarding elsewhere who want continuity during the holidays, most often in Maths, Physics, Chemistry and English A.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "At least two Diploma courses sit inside a career-focused study, alongside a reflective project and a set of personal and professional skills. Very few Indian schools run it, though the Diploma subjects inside it need the same level of support regardless.",
      countryNote:
        "CP interest from Gaya is rare and usually tied to a school elsewhere; tutoring focuses on whichever Diploma subjects the programme actually contains.",
    },
  ],

  subjectsIntro:
    "A Bihar State Board or CBSE classroom rewards a confident, complete answer; IB rewards one that answers the command term precisely, which is the single biggest adjustment for a Gaya student moving across. Matching still starts from the exact subject code and level, since Maths AA and AI, for instance, need entirely different preparation despite sharing a name.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Paper 3 at HL rewards a slow, unfamiliar problem worked through properly rather than a fast, familiar one, the opposite of what a Board-exam habit trains for. The exploration needs choosing early, well before the final term." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and a graphic calculator used fluently carry most of the marks here. The exploration usually loses marks not from weak maths but from a dataset picked too late to do much with." },
    { name: "IB Physics", levels: "HL / SL", description: "Command of the data booklet and Paper 1 and 2 timing matter as much as the physics itself, and the Scientific Investigation needs a method that would hold up if a marker pushed back on it." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding and structure rarely cause trouble; organic mechanisms and energetics later in the course are where a tutor earns their keep, alongside quick, confident data-booklet use." },
    { name: "IB Biology", levels: "HL / SL", description: "Most students know more biology than their marks suggest; the gap is usually the command term, not the content. A workable Investigation also needs real statistics behind its conclusion." },
    { name: "IB Economics", levels: "HL / SL", description: "An accurately drawn diagram tied to a genuine, current example earns more than a memorised definition ever will, and HL adds the policy-style questions of Paper 3 into the mix." },
    { name: "IB Business Management", levels: "HL / SL", description: "Marks follow application to the specific case given, not a recited theory, and the Business Research Project needs a real organisation behind it, not a hypothetical one." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen analysis, a sustained comparative argument, and the spoken fluency the Individual Oral demands are three separate skills, and each one needs its own practice." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode, object-oriented design and abstract data structures all sit alongside a coding project that needs documentation as carefully written as the code itself." },
    { name: "IB Psychology", levels: "HL / SL", description: "Each approach, biological, cognitive, sociocultural, needs a correctly cited study behind it, then repeated practice writing a long extended response inside a strict time limit." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems-level thinking and an honestly argued evaluation matter far more here than summarising a textbook, and that usually separates a strong grade from an average one." },
    { name: "IB Geography", levels: "HL / SL", description: "Depth in named case studies, a fieldwork method that could survive scrutiny, and evaluative rather than descriptive writing are what actually move a grade." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 rewards careful handling of sources; Paper 2 rewards one sustained argument held across a much longer essay. Neither skill transfers automatically from the other." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension of unfamiliar text, correct text-type conventions and real unscripted conversation practice all need attention before the individual oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Treated as conversation, not content: pressure-testing an exhibition commentary and arguing a prescribed title from a second angle that is not just for show." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel both use the IGCSE name but examine differently enough that board and tier come before anything else in a match. From there, the sitting a Gaya student is actually entered for, Cambridge's May-June or October-November series, or Edexcel's January or May-June, decides the pace.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended-tier candidates lose more marks to a skipped working step than to a genuinely hard topic, so speed without a calculator and full method are what tutoring actually targets." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Nothing else at this level introduces calculus, vectors and trig identities this early, which is exactly why it works so well as a lead-in to IB Maths AA HL." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Much the same mathematics as Cambridge sits underneath this specification, but the way Edexcel's Higher tier phrases and sequences a question is different enough to justify practising it separately." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Marks tend to slip on equation rearrangement under time pressure and on the alternative-to-practical paper long before they slip on the physics itself, so that is where sessions concentrate." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, bonding and organic chemistry take up most of a syllabus like this, and the alternative-to-practical skill needs building alongside the theory from lesson one, not near the exam." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and inheritance dominate the syllabus, and the extended-response questions specifically reward a structure most students only pick up through direct coaching." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Early diagram accuracy matters, though it is usually the longer, evaluative questions that expose a Core-only preparation." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Nothing about trace tables or pseudocode sticks without repetition against unfamiliar problems, and real Python practice alongside the theory makes a noticeable difference." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Neither directed writing nor summary technique comes naturally without direct teaching, and both need practice against passages a student has genuinely never seen." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "An examiner is looking for theory applied to the specific business named in the question, not a general answer recalled from a revision guide." },
  ],

  regionsTitle: "Where our online tutors reach students around Gaya",
  regionsIntro:
    "None of these areas change how a lesson runs, since everything happens on a screen, but they shape the practical side of a family's week: how far someone is from Gaya Junction or the Vishnupad Temple crowds, and when Pitru Paksha or winter fog is likely to disrupt an evening's plans.",
  regions: [
    { name: "Swarajpuri Road", note: "A busy commercial and residential stretch in central Gaya, home to much of the city's coaching and tuition activity." },
    { name: "A.P. Colony", note: "A well-established residential colony bordering Shastri Nagar and Ashok Nagar, popular with government and professional families." },
    { name: "Buniyadganj", note: "An older, dense neighbourhood close to the main railway line, with a long-standing local school presence." },
    { name: "Rampur", note: "A residential and semi-commercial area on Gaya's western side, some distance from the main pilgrimage crowds." },
    { name: "Shastri Nagar", note: "A quieter residential pocket near A.P. Colony, mostly CBSE and Bihar State Board households." },
    { name: "Ashok Nagar", note: "Adjoins A.P. Colony and Shastri Nagar; a settled, middle-class residential stretch." },
    { name: "Manpur", note: "Across the Phalgu river on Gaya's southern side, connected to the main city by bridge, with its own market area." },
    { name: "Gaya Junction area", note: "Around the city's main railway station on the Grand Chord line; convenient for families who travel often for work or school breaks elsewhere." },
    { name: "Bodh Gaya", note: "The Buddhist pilgrimage town roughly 16 kilometres away, home to the Mahabodhi Temple and a resident international monastic community, functionally part of the same urban area for many families." },
  ],

  schoolDisclaimer:
    "No school in Gaya is currently confirmed to run the IB or Cambridge/Edexcel IGCSE, and nothing on this page implies a tie-up with the schools named elsewhere, whether in Kolkata or Delhi NCR. IB Gram has no contract, partnership or endorsement with any of them, nor with the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Gaya itself",
      note: "No school currently confirmed to run the IB or Cambridge/Edexcel IGCSE; the CBSE and Bihar State Board network covers most students in the city.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "A common boarding destination for Bihar families wanting an established IB school within a manageable train journey of Gaya.",
      schools: ["Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Some Gaya families board a child here instead, within reach of IB Gram's own in-person service area.",
      schools: ["The British School, New Delhi", "Pathways World School, Gurugram"],
    },
  ],

  modesIntro:
    "Every Gaya family ends up on the same base format here: one tutor, one student, live over video, both keeping IST. IB Gram's home-visit service does not reach Gaya; that stays limited to Gurugram and parts of Delhi NCR. What changes is pace, not the format itself.",
  modes: [
    {
      title: "Live one-to-one online lessons",
      description:
        "A fixed slot each week, video call, shared whiteboard, timed around whatever school or online-curriculum calendar your child actually follows and Gaya's own pilgrimage season. Nearly every family we work with here uses this as the base format.",
      bullets: [
        "A specialist from anywhere in India, since Gaya has none locally",
        "Works across IB DP, MYP and IGCSE subjects",
        "Whiteboard and past papers shared live, every session",
        "The same tutor stays on, week after week",
      ],
    },
    {
      title: "Weekly programme with written progress notes",
      description:
        "A steady run of sessions across the term, a short note after each one, and a real review every few weeks, useful when a child is juggling an online-school timetable with everything else going on at home.",
      bullets: [
        "A note in writing after every session",
        "A proper review every few weeks",
        "Good fit for PYP and MYP students on a steady pace",
        "Easy to add a second slot before mocks",
      ],
    },
    {
      title: "Exam-block revision before mocks or the main series",
      description:
        "Two to four sessions a week for a set stretch, timed past papers marked quickly, scheduled around Pitru Paksha, Chhath Puja and whatever fog-season travel disruption a boarding student is dealing with.",
      bullets: [
        "Timed past papers marked to current criteria",
        "Feedback turned around within days",
        "Built around Pitru Paksha and Chhath Puja",
        "Best booked two to three weeks ahead of the exam window",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE options for Gaya families",
      paragraphs: [
        "As things stand, no school inside Gaya runs the IB or a Cambridge or Edexcel IGCSE course. The city's international-curriculum gap sits behind a large CBSE network, Kendriya Vidyalaya, Delhi Public School, Podar International School, Manav Bharti National School and several others, alongside the Bihar State Board, which most of Gaya's students still follow through school.",
        "Families who still want IB or IGCSE from Gaya generally fall into three groups: some enrol a child in an online international school or a correspondence programme while continuing to live in the city; some board a child at a school elsewhere, commonly in Kolkata or Delhi NCR, and want continuity during the holidays; and some are weighing the switch and want to understand what it would actually involve before committing.",
        "Bodh Gaya, barely 16 kilometres away, complicates the picture slightly. It hosts a genuinely international community, Buddhist monasteries and cultural missions from Thailand, Japan, Bhutan, Myanmar and Sri Lanka among them, and a hospitality and tourism trade that deals with international visitors daily. Families connected to that world sometimes want a globally recognised curriculum for exactly that reason, even without a local school to enrol in.",
        "Whatever the reason, the shape of the help needed is the same: a tutor who already knows the exact syllabus, whether that is a specific IB subject and level or a named IGCSE code and tier, delivered live and one to one rather than through a generic coaching batch built for a different exam altogether.",
      ],
      table: {
        caption: "IB and IGCSE access points for Gaya families",
        columns: ["Location", "Distance from Gaya", "What's available"],
        rows: [
          ["Gaya city", "-", "CBSE and Bihar State Board schools only; no IB or IGCSE school confirmed"],
          ["Kolkata", "About 470 km", "Calcutta International School (IB continuum, A Level)"],
          ["Delhi NCR", "About 830 km", "The British School (IGCSE, IB DP); Pathways World School, Gurugram (full IB continuum, boarding option)"],
        ],
      },
      bullets: [
        "No school in Gaya currently offers IB or Cambridge/Edexcel IGCSE",
        "Families use online schools, board elsewhere, or are considering the switch",
        "Bodh Gaya's international community adds a distinct reason to want it",
        "Tutoring needs match the exact syllabus regardless of the reason",
      ],
    },
    {
      heading: "How is studying IB or IGCSE different from Bihar's State Board and CBSE?",
      paragraphs: [
        "In short, IB and IGCSE mark for explanation and application, while the Bihar State Board and CBSE mark for accurate, complete reproduction of a fixed syllabus. A student who writes a long, correct Board-exam answer can still lose marks on an IGCSE Extended question that shifts the context, or an IB Paper 2 that wants justification rather than a rehearsed method.",
        "Internal assessment is the sharper contrast. The Bihar State Board and CBSE carry limited internal weight, while IB Internal Assessments and IGCSE coursework are detailed, marked against explicit criteria, and demand planning skills a Board-exam education rarely builds. A student picking up IB or IGCSE from a Gaya background usually needs direct teaching in how to plan, draft and revise this kind of work from the ground up.",
        "Depth also diverges. IB HL Maths and the sciences go well beyond Bihar State Board or CBSE content at the same age, IGCSE Core sits close to Board difficulty, and Extended sits above it. Because no Gaya school currently teaches either syllabus, most students meet this comparison only once they have already chosen an online school or a place elsewhere, which makes an early, honest conversation about the jump worthwhile.",
        "None of this makes IB or IGCSE harder across the board. Once the criteria-based marking is properly understood, some students actually find it more predictable to prepare for than one high-stakes Board exam.",
      ],
      table: {
        caption: "Bihar State Board and CBSE versus IB and IGCSE",
        columns: ["Feature", "Bihar State Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Assessment style", "Recall-heavy, fixed paper", "Recall-heavy, fixed paper", "Application and criteria-based"],
          ["Internal assessment weight", "Limited", "Limited", "20-30% in most IB subjects, coursework in IGCSE"],
          ["Global recognition", "Recognised in India", "Recognised in India", "Recognised worldwide"],
          ["Typical entry point for a Gaya student", "From Nursery", "From Nursery", "Usually via an online school or a move elsewhere"],
        ],
      },
      bullets: [
        "IB and IGCSE mark for justification, not just recall or length",
        "Internal assessment carries far more weight, and stricter criteria, under IB and IGCSE",
        "IB HL and IGCSE Extended sit well above Board-level depth",
        "An honest, early conversation about the jump helps most families",
      ],
    },
    {
      heading: "What does an IB or IGCSE tutor cost for a Gaya family?",
      paragraphs: [
        "What a Gaya family actually pays comes down to the programme and level, the subject, how long a session runs, and how recently the tutor has taught that specific syllabus. Higher Level Diploma work tends to sit at the top of the range, mainly because so few tutors nationally are teaching it right now, and the number is fixed for your particular match before the trial begins.",
        "Because every Gaya lesson happens online, there is no travel cost folded in anywhere. A tutor logging in from Mumbai or Hyderabad costs exactly what one logging in from Patna would, which removes the usual local-versus-distant pricing question entirely.",
        "Look at what an hour actually delivers rather than the figure alone. Fifty minutes with someone who has properly taught IGCSE Additional Mathematics or walked a student through the IB Maths AI exploration outweighs two hours spent re-covering ground an online school has already taught.",
        "There are no long contracts here either. Progress gets checked every few weeks, sessions pause without any penalty, and a match that is not working after the trial gets swapped rather than persisted with.",
      ],
      bullets: [
        "What decides the fee: programme, level, subject, session length",
        "No travel cost; every Gaya lesson runs online",
        "The fee is fixed for your match before the trial",
        "No long contracts; pause or stop whenever needed",
      ],
    },
    {
      heading: "Online tuition against Gaya's coaching centres, home tutors and self-study",
      paragraphs: [
        "Gaya's coaching scene, like much of Bihar, is built overwhelmingly around JEE and NEET, and a serious share of that ambition eventually migrates to Kota or Patna for dedicated coaching once school is close to finishing. None of it maps onto IB Chemistry HL or IGCSE 0610 Biology, so a family on either syllabus is working against a local market built for an entirely different goal.",
        "Home tutors in Gaya are plentiful for Board-exam subjects, but the number who have actually taught an IB or IGCSE syllabus recently is close to zero, since no local school runs either curriculum. A generalist can help with confidence and general study habits, but is unlikely to know current IB or IGCSE assessment criteria in any depth.",
        "A capable, self-directed student can make real progress alone in a subject with clear past papers, IGCSE Mathematics again being the obvious case. Self-study tends to fall short on Internal Assessment planning, Extended Essay structure and the extended written response IB and IGCSE examiners are specifically trained to reward.",
        "Online one-to-one tuition is really the only option in Gaya that offers genuine syllabus specificity, since the local market simply does not have it, while still giving more personal attention than a student working entirely alone would get.",
      ],
      table: {
        caption: "Weighing up Gaya's options for IB and IGCSE support",
        columns: ["Choice", "Fit with the syllabus", "How much individual attention", "The gap in Gaya"],
        rows: [
          ["Coaching batches", "Built for JEE and NEET, not IB/IGCSE", "Group, minimal", "No genuine IB or IGCSE batch runs locally"],
          ["Home tutors", "Inconsistent at best", "One to one", "Almost none have taught IB or IGCSE recently"],
          ["Going it alone", "Varies with the student", "None", "Falls down on IAs, EE and extended-response writing"],
          ["An online IB/IGCSE specialist", "Chosen for the exact syllabus", "One to one", "None; the only genuine specialist route available"],
        ],
      },
      bullets: [
        "Gaya's coaching culture centres on JEE and NEET, often migrating to Kota or Patna",
        "Local home tutors rarely have recent IB or IGCSE experience",
        "Self-study struggles with IAs, coursework and extended response",
        "Online matching is close to the only genuine option available",
      ],
    },
    {
      heading: "Gaya's calendar: Pitru Paksha, Chhath and when to start",
      paragraphs: [
        "Pitru Paksha, usually falling in September, brings hundreds of thousands of pilgrims to Vishnupad Temple for the pind daan ritual, and the roads around central Gaya slow to a crawl for close to two weeks. Families anywhere near the temple or the main railway station plan their evenings around it rather than through it.",
        "IB Diploma exams sit in the May session, with results out in early July and a retake sitting in November. Cambridge IGCSE runs in May-June and October-November; Edexcel IGCSE sits in January and May-June. Chhath Puja, usually in late October or November, is Bihar's biggest festival and draws the city towards the Phalgu's riverbanks for several days, a second fixture worth planning around.",
        "Winter in Gaya, December into January, brings dense Gangetic fog that regularly delays trains and flights in and out of the city, which matters for any family whose child boards elsewhere and travels home for a break. Session scheduling in these weeks tends to build in more flexibility than usual.",
        "For a DP student, the pressure points run in sequence: first internal exams in Class 11, IA deadlines through Class 12, predicted grades in the autumn of Class 12 for university applications, then mocks before May. Given how few Gaya students start this path through a local school, most begin the moment an online enrolment or a place elsewhere is confirmed, whenever in the year that happens to fall.",
      ],
      table: {
        caption: "Gaya's calendar and its effect on tutoring",
        columns: ["Period", "What happens", "Effect on tutoring"],
        rows: [
          ["September", "Pitru Paksha pilgrimage season", "Heavy local congestion; online sessions unaffected"],
          ["May-June", "IB DP exams, Cambridge IGCSE series", "Final revision blocks and past papers"],
          ["October-November", "Chhath Puja, Cambridge retake series", "Family time around Chhath; good window for retake prep"],
          ["December-January", "Dense winter fog, travel delays", "More scheduling flexibility for boarding students travelling home"],
        ],
      },
      bullets: [
        "Pitru Paksha in September brings major local congestion, not an online disruption",
        "IB DP: May exams, November retakes",
        "Chhath Puja is Bihar's biggest festival and genuinely pauses routine",
        "Winter fog affects travel for boarding students more than it affects lessons",
      ],
    },
    {
      heading: "University pathways from Gaya after IB or IGCSE",
      paragraphs: [
        "Students who complete the Diploma, or IGCSE feeding into it, from a Gaya family typically apply through one of three routes: India's national entrance exams, Bihar's own state options, or undergraduate study abroad. The Central University of South Bihar, based in Gaya itself, is the one genuine central university actually located in the city, alongside Magadh University nearby in Bodh Gaya.",
        "For Indian entrance, an IB or IGCSE qualification needs AIU equivalence, plus the right subject combination at the right level for JEE or NEET eligibility. Given how much of Bihar's serious coaching activity has shifted towards Kota and Patna, many IB or IGCSE families from Gaya end up running entrance preparation somewhere else entirely while keeping subject tutoring online and local to the family.",
        "Study-abroad applications rest on predicted grades issued in the autumn of Class 12, since that is what a university sees before final results exist. A UK offer is usually framed as a total IB points score with HL subject minimums; a US application treats the predicted grade as one part of a larger file; other countries run their own conversion tables.",
        "IB Gram's part in this stops at the academic groundwork: subject teaching, lifting predicted grades, exam technique. We are glad to talk through what a target course usually expects, so a Gaya family's tutoring time goes where it actually changes the outcome.",
      ],
      bullets: [
        "Central University of South Bihar sits in Gaya itself; Magadh University is in nearby Bodh Gaya",
        "AIU equivalence and the right subject levels matter for JEE and NEET eligibility",
        "Much of Bihar's serious coaching activity has shifted to Kota and Patna",
        "Predicted grades drive Class 12 university applications",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the sciences, for Gaya students",
      paragraphs: [
        "Maths AA suits a student aiming at engineering, physical science or an economics-heavy course, and its HL Paper 3 rewards working through an unfamiliar problem properly, the opposite of the fast, familiar-format training a Board-exam background gives. Maths AI leans on statistics, modelling and fluent GDC use, and its exploration usually loses marks from a dataset chosen too late rather than weak maths.",
        "Physics HL wants confident, quick data-booklet use, tight timing across Paper 1 and 2, and a Scientific Investigation with a method that would survive a marker pushing back on it, not a repeated textbook demonstration. Chemistry HL leans hard on organic mechanisms and energetics once the early bonding units are done, and both subjects need marking against the real IB rubric rather than a general science standard.",
        "Biology students from a Bihar State Board or CBSE background usually know more than their marks suggest; the actual gap is answering to the precise command term rather than writing everything they know, plus enough statistics behind an Investigation for its conclusions to hold up under scrutiny.",
        "Because no Gaya school currently teaches these subjects, a specialist matched precisely to the right HL or SL level and the live syllabus closes this gap far faster than a generalist tutor working from an unrelated textbook.",
      ],
      bullets: [
        "AA rewards unfamiliar problem-solving; AI rewards statistics and modelling",
        "Physics and Chemistry HL both hinge on the Scientific Investigation",
        "Biology needs command-term precision as much as content knowledge",
        "Bihar Board and CBSE switchers usually know the material but not the command words",
      ],
    },
    {
      heading: "How does IB Gram match a tutor for a family in Gaya?",
      paragraphs: [
        "Everything starts with a short brief: the programme or board, subject and level, current or predicted grade, the exam sitting ahead, and the specific worry behind it, whether that is a weak topic, an IA, upcoming mocks, or a decision about whether to switch at all. That brief shapes the shortlist far more than any tutor profile does.",
        "Because no school in Gaya teaches these syllabuses, syllabus fit is really the only filter that matters; there is no local pool to weigh against it. Tutors are checked on qualifications, how recently they have taught the exact subject and level, and how they approach Internal Assessment work before ever being introduced to a family.",
        "The free trial class is where a family actually judges the rest: how clearly the tutor explains, whether they ask useful diagnostic questions, whether a child is comfortable asking for help. A short first-month plan follows, covering topics and session rhythm, for the family to approve or adjust.",
        "If it is not working, we find someone else. No contract keeps a Gaya family tied to a tutor who is not the right fit.",
      ],
      bullets: [
        "Brief covers programme, subject, level, exam sitting and the specific worry",
        "Syllabus fit is the only real filter, since Gaya has no local IB or IGCSE pool",
        "Tutors checked before introduction; trial class before any commitment",
        "Written first-month plan, with re-matching if the fit is wrong",
      ],
    },
  ],

  tutorsIntro:
    "The tutors below teach IB PYP, MYP and Diploma subjects, plus Cambridge and Edexcel IGCSE, to students connected to Gaya, whether living in the city, boarding elsewhere, or somewhere in between. Matching goes entirely on the exact syllabus and level, since there is no local school here to anchor a search around.",

  process: [
    { title: "Describe where things stand", description: "What your child is studying, which exam board if any, the level, and how confident or worried you currently feel about it." },
    { title: "Get names, not a database entry", description: "A short list of tutors who actually teach that subject and level, each with a line on why they were picked." },
    { title: "Watch them teach, free", description: "One full lesson, online, before any money changes hands or any commitment gets made." },
    { title: "Set the plan together", description: "Topics, pace and how often you will hear from us, agreed before regular sessions begin." },
    { title: "Keep checking in", description: "A fixed weekly slot, a review every few weeks, and a swap if the tutor stops being the right one." },
  ],

  whyPoints: [
    { title: "The syllabus decides the match", description: "Not a general IB or IGCSE label. The exact subject, level, board, code and tier, every time." },
    { title: "Online because there is no local option", description: "Gaya has no IB or IGCSE school at all, so this is not a convenience here, it is the only door in." },
    { title: "See before you commit", description: "A real lesson comes before any payment, not a profile page and a promise." },
    { title: "A clear line on assessed work", description: "Coaching and feedback stay in bounds; producing an IA, an EE or any piece of coursework for a student does not." },
    { title: "You are told what happened", description: "A short note after each session, and a real review every few weeks, not silence until a bill arrives." },
    { title: "Free to walk away", description: "No school tie, no board tie, no contract, and a different tutor the moment the current one is not right." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Gaya?", answer: "Not currently. Every school in Gaya that we have been able to confirm runs CBSE or the Bihar State Board; none teaches the IB or a Cambridge or Edexcel IGCSE syllabus. That is exactly why IB Gram exists for this city, matching Gaya families with a tutor rather than waiting for a school to open locally." },
    { question: "How do I find an IB tutor for my child in Gaya?", answer: "Send us the programme, subject, level and exam sitting, and we shortlist tutors who teach that precise course. Since there is no local school to weigh against, the match is decided entirely by syllabus fit and whether the timing works for your evening. A free trial class comes first, and we find someone else if the fit is wrong." },
    { question: "Do you offer IGCSE tutors in Gaya for Cambridge and Edexcel?", answer: "Yes, for both boards, delivered online as tuition at home rather than an in-person visit. Cambridge students are matched by code and tier, Mathematics 0580 Extended or Biology 0610 for instance, and Edexcel students by specification and Foundation or Higher tier, using each board's own past papers." },
    { question: "Do your tutors visit homes in Gaya?", answer: "No, and that is true everywhere outside Gurugram and parts of Delhi NCR, not just Gaya. What happens instead is a live lesson delivered straight to your home over video, tutor and student one to one, screens shared for every worked problem. It is real tuition at home, simply not delivered by someone walking through your door." },
    { question: "What does an IB or IGCSE tutor cost for a Gaya family?", answer: "It depends on the programme and level, the subject, session length and the tutor's experience with that specific syllabus, confirmed before the trial starts. HL Diploma work usually costs more than MYP or IGCSE Core support. Online delivery means no travel charge, and nothing locks you into a long contract." },
    { question: "My child is enrolled in an online international school while we live in Gaya. Can a tutor still help?", answer: "Yes, this is one of the more common situations we see from Gaya. A tutor works alongside whatever online school or correspondence programme your child is already following, matched to the exact subject and level, filling in wherever the platform's own teaching is not quite landing." },
    { question: "My child boards at a school outside Gaya. Can tutoring continue during the holidays?", answer: "Yes, regularly. We match a tutor to the exact subject, level and syllabus your child's boarding school uses, so sessions during a break at home in Gaya carry straight on from where the school term left off, rather than starting over." },
    { question: "Is there a free trial class before I commit?", answer: "Always, before anything else happens. The proposed tutor takes your child through one real topic from their actual syllabus, online, free of charge, with no obligation attached. What follows is a short first-month plan, and only then do you decide whether to continue, adjust the plan, or meet someone else." },
    { question: "Can a tutor help with IB Internal Assessments from Gaya?", answer: "A tutor can shape the work without ever producing it: help pick a workable research question, unpack what a criterion is actually looking for, plan how data gets collected, and give honest feedback on a draft. The line sits exactly where writing or rewriting the assessed piece begins, and IB Gram tutors do not cross it." },
    { question: "Which IB Diploma subjects can you help with for a Gaya student?", answer: "Both Maths routes at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A and Computer Science come up most often, alongside Theory of Knowledge and the Extended Essay, matching what Gaya's DP-bound students are usually already studying elsewhere." },
    { question: "Do you tutor IB MYP and PYP students connected to Gaya, not only the Diploma?", answer: "Yes, right across the continuum. MYP sessions usually focus on criterion-based analysis in the sciences and Language and Literature, plus getting a Personal Project journal moving. PYP sessions run shorter and more often, built around reading, number sense and Exhibition research." },
    { question: "Does online tutoring work as well as a school-based tutor for IB or IGCSE students in Gaya?", answer: "Given that no school-based option actually exists in Gaya, online is not really a comparison, it is the available route. A shared whiteboard, screen-shared past papers and recorded worked examples cover nearly everything a subject specialist would otherwise do face to face, while reaching tutors anywhere in India rather than none nearby." },
    { question: "How are IB Gram tutors verified for students connected to Gaya?", answer: "Qualifications, how recently a tutor has actually taught the exact subject and level, and their approach to assessment criteria all get checked before any introduction is made. Given that Gaya has no local IB or IGCSE teaching pool to compare against, we look specifically for people with genuine, recent experience in that exact syllabus, and the trial class lets you confirm the fit yourself." },
    { question: "When should my child start IB or IGCSE tutoring from Gaya?", answer: "As close to the start of the course as possible, Class 11 for the Diploma and Grade 9 for IGCSE, which leaves room to fix foundations before internal exams, IA deadlines and predicted grades land. A later start can still help, provided sessions stay tightly focused on the highest-value topics and past papers." },
    { question: "Can sessions work around Pitru Paksha and Chhath Puja?", answer: "Yes, scheduling in Gaya routinely plans around both. Pitru Paksha in September brings heavy congestion near Vishnupad Temple, and Chhath Puja in October or November pulls families towards the Phalgu's banks for several days. Sessions pause or shift around these periods rather than competing with them." },
    { question: "What happens if we are not happy with the tutor?", answer: "Tell us, and a different one gets found. We check in with families every few weeks regardless, and re-matching happens whenever the fit is not right rather than expecting a child to push through. Nothing here runs on a long contract, so pausing or stopping never carries a penalty." },
    { question: "Is IB Gram affiliated with any school, or with the IB or Cambridge boards?", answer: "No. IB Gram runs independently of every school mentioned on this page, whether in Gaya, Kolkata or Delhi NCR, and of the International Baccalaureate Organization, Cambridge Assessment International Education and Pearson Edexcel, with no tie, endorsement or representation of any kind." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Back to the IB Gram homepage." },
    { label: "IB tutoring across India", href: "/india/", description: "What IB and IGCSE tutoring looks like in other Indian cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The one city where IB Gram's tutors also visit in person." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL subjects, IAs, TOK and the Extended Essay explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, the Personal Project and eAssessment, explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "How PYP units of inquiry and the Exhibition actually work." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series across IGCSE." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles sorted by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Get in touch to share a brief and book a trial." },
    { label: "IB and IGCSE tutoring in Patna", href: "/patna/", description: "How IB and IGCSE tutoring works for Patna families." },
    { label: "IB and IGCSE tutoring in Bhagalpur", href: "/bhagalpur/", description: "How IB and IGCSE tutoring works for Bhagalpur families." },
    { label: "IB and IGCSE tutoring in Muzaffarpur", href: "/muzaffarpur/", description: "How IB and IGCSE tutoring works for Muzaffarpur families." },
  ],

  closingHeading: "Talk to us about an IB or IGCSE tutor for your child in Gaya",
  closingBody:
    "Tell us the board or programme, the subject and level, and where your child is right now, an online school, a break from boarding elsewhere, or just an idea you are exploring. We will come back with a shortlisted tutor, their background, and open trial times that suit your family in Gaya, at no cost and with nothing owed. Write to ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",
};
