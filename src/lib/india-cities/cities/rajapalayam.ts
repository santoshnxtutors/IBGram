import type { CitySeoPage } from "../types";

/**
 * /rajapalayam/ - IB and IGCSE tutoring page for Rajapalayam, Virudhunagar district, Tamil Nadu.
 * No IB or Cambridge/Edexcel school inside the town could be confirmed, so stripSchools is empty and
 * the clusters point honestly at Madurai, whose schools are already verified on the Madurai and
 * Tirunelveli pages. Online only. Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const rajapalayam: CitySeoPage = {
  slug: "rajapalayam",
  countryName: "Rajapalayam",
  countryNameLong: "Rajapalayam, Tamil Nadu",
  demonym: "Rajapalayam",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Deepavali production rush, hot dry summers and Pongal shape which weeks a household can protect for study",
  lastUpdated: "2026-09-21",
  geo: { latitude: 9.4528, longitude: 77.5534 },
  wikipedia: "https://en.wikipedia.org/wiki/Rajapalayam",
  alternateNames: ["Rajapalaiyam", "Rajapalayam Virudhunagar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Rajapalayam | Online Tuition at Home",
  metaDescription:
    "Online one-to-one IB and IGCSE tuition for Rajapalayam students, Cambridge and Edexcel included, planned around Deepavali and mill shifts. Free first lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Rajapalayam",
  heroEyebrow: "ONLINE IB & IGCSE TUITION IN RAJAPALAYAM",
  heroSubtitle:
    "Want private tuition at home in Rajapalayam for an IB or IGCSE student? The workable form is an online lesson: a live, one-to-one class from a subject specialist, taken on a laptop in your own room. Nobody travels, so distance from Madurai stops mattering, and the first lesson costs nothing. We match by syllabus code, level and the exam session your child is aiming for.",
  primaryKeyword: "IB and IGCSE tutors in Rajapalayam",
  imageAltText: "A Rajapalayam student at home working through IGCSE Physics questions with a tutor on a video call",
  secondaryKeywords: [
    "IB tutor Rajapalayam",
    "IGCSE tutor Rajapalayam",
    "IB home tuition Rajapalayam",
    "IGCSE home tuition Rajapalayam",
    "IB private tuition Rajapalayam",
    "IB online tuition Rajapalayam",
    "IGCSE online tuition Rajapalayam",
    "IB Maths tutor Rajapalayam",
    "IGCSE Maths tutor Rajapalayam",
    "IB Physics tutor Rajapalayam",
    "IB Chemistry tutor Rajapalayam",
    "IB Biology tutor Rajapalayam",
    "IB DP tutor Rajapalayam",
    "IB MYP tutor Rajapalayam",
    "IB PYP tutor Rajapalayam",
    "IB tutor Ramco Nagar",
    "IGCSE tutor Srivilliputhur",
    "IB tutor Sivakasi",
    "IB tutor Virudhunagar district",
  ],

  heroTrustPoints: [
    "Tutors are selected for having taught your child's specific subject and level recently",
    "Lessons are online and one to one; no tutor visits homes in Rajapalayam",
    "Each session ends with a short written note for parents",
    "No connection to any school, exam board or organisation named here",
  ],
  heroStats: [
    { value: "PYP, MYP, DP, CP", label: "All four IB programmes" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards covered" },
    { value: "May & Nov", label: "The main exam windows" },
    { value: "Free trial", label: "A real lesson, no charge" },
  ],

  intro: {
    heading: "Mills, matches and a very different syllabus",
    paragraphs: [
      "Rajapalayam is a cotton-mill and cement town in the dry south of Tamil Nadu, home to the Ramco group, with Srivilliputhur's Andal temple a few kilometres away and Sivakasi's printing and firecracker industry a short drive east. Its schools run on the Tamil Nadu State Board, the Matriculation stream and CBSE. We found no school in the town that we could confirm for the IB or Cambridge or Edexcel IGCSE, and we will not guess.",
      "People who contact us about IB and IGCSE tutors in Rajapalayam are therefore rarely enrolled next door. A typical family has a child at an international boarding school in the Nilgiris or Kodaikanal region, or is preparing for a move to Chennai or abroad, or has taken up an online IB course because the household's business or professional plans point overseas. In each case the syllabus arrives from somewhere else and a specialist has to teach it here.",
      "The teaching is online, delivered in Indian Standard Time. IB Gram tutors are based around India, and in-person visits to a home are offered only in Gurugram and parts of Delhi NCR. What the Rajapalayam student receives is a focused hour with someone who knows the mark scheme, works from real past papers and gives written feedback.",
      "Tutors coach; the Internal Assessment, Extended Essay and any coursework remain the student's own work.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Boarding students, online-school students and families planning a move",
      "One-to-one online lessons from home, never a visit to your address",
      "A free trial lesson before any rate is agreed",
    ],
  },

  programmesIntro:
    "Because there is no IB campus on the doorstep, Rajapalayam parents tend to meet the programmes through a brochure or a relative abroad. Here is what each stage involves and how it usually reaches a family in this part of Virudhunagar district.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Children explore themes such as how we express ourselves or how the world works, through inquiry units, and finish with a self-directed Exhibition. Literacy and numeracy are taught inside those units rather than as separate silos.",
      countryNote:
        "For a Rajapalayam child, PYP tutoring is most often a boarder's holiday routine or a light weekly session that keeps reading and mathematical thinking moving between terms.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are assessed against criteria such as Knowing and Understanding or Investigating, and each student completes a Personal Project. It rewards explaining why, not only what.",
      countryNote:
        "MYP help here is mostly about turning a strong Tamil Nadu-style memory habit into criterion-based written answers, particularly in Sciences and Individuals and Societies.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects, three at Higher Level, plus the Extended Essay, Theory of Knowledge and CAS. Most of the grade comes from May examinations, with Internal Assessment adding a substantial share.",
      countryNote:
        "A Rajapalayam Diploma student typically studies at a residential school elsewhere in Tamil Nadu or with an online school, and often needs Higher Level Maths and Physics taught in full.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses combine with a career-related study, a reflective project and personal and professional skills. It suits applied or vocational goals and is offered by very few Indian schools.",
      countryNote:
        "In this part of Tamil Nadu it appears only through online providers, and our role covers the Diploma courses that form its academic core.",
    },
  ],

  subjectsIntro:
    "Pick a subject and level and we look for a tutor who has recently taught that course, then ask where the student stands today. With no local IB classroom to compare against, the course code and the next assessed task are the anchors.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof for future engineers and scientists, with Paper 3 problem solving as the real test." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling on a graphic calculator, where reading the question carefully saves as many marks as arithmetic." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics, with a written investigation that needs a clear variable to measure." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, bonding, equilibrium and organic reactions, built up through short daily practice." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, physiology and ecology, where the exact command term shapes the answer expected." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy and real-world examples, with Higher Level adding calculations and policy evaluation." },
    { name: "IB Business Management", levels: "HL / SL", description: "Theory applied to a stated case, valuable for students from the town's many family-run businesses." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and a solution project that needs steady coding hours." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches to behaviour and research methods, with a first experiment planned for the internal assessment." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen texts, comparative writing and the recorded oral." },
    { name: "IB Tamil A", levels: "HL / SL", description: "Tamil is the home language, so lessons go to literary analysis and writing to IB criteria, not vocabulary." },
    { name: "IB Hindi B", levels: "SL / HL", description: "A language-acquisition course for students meeting Hindi mainly at school, covering oral, reading and writing tasks." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water, land use and energy, with dry-zone irrigation and monsoon dependence as ready local case studies." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Knowledge questions tested against real examples, with the tutor playing the sceptical classmate." },
  ],

  igcseSubjectsIntro:
    "IGCSE content overlaps across boards, but paper layouts, tiers and dates differ. Cambridge examines in May-June and October-November; Edexcel has a January series too, so we confirm which one first.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended reaches the top grades and demands working shown line by line." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Differentiation, integration and trigonometry taken early, a useful bridge to IB Maths AA." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Similar content with different phrasing and mark allocation, practised on board papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Formula handling, units and the practical-skills paper that many students underprepare for." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, electrolysis and organic chemistry as the major mark carriers." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Inheritance, enzymes and body systems, with longer answers needing clear structure." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Supply and demand analysis, with evaluation questions the separator at Extended level." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, logic gates and trace tables through hands-on program writing." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Summary and directed-writing techniques practised against the clock." },
    { name: "IGCSE Tamil as a Second Language", levels: "Grade 9-10", description: "Reading and writing practice for students whose school offers it and whose exam board lists it." },
  ],

  regionsTitle: "Rajapalayam and its surroundings",
  regionsIntro:
    "Since all teaching is online, these places are context for scheduling and school choice, not tutor travel routes.",
  regions: [
    { name: "Rajapalayam town centre", note: "The market and bus-stand core, where most private schools and tuition centres sit within a short walk." },
    { name: "Ramco Nagar and the mill belt", note: "Company-linked housing and the cotton-mill and cement worker households whose shift patterns can move a lesson time." },
    { name: "Sethur", note: "A nearby village settlement, with families who lean on the town for schools and coaching." },
    { name: "Chatrapatti", note: "A neighbouring town on the road towards Madurai, popular with families who commute daily." },
    { name: "Srivilliputhur", note: "Famous for the Andal temple and its milk sweet, roughly a short drive away, with its own set of schools." },
    { name: "Krishnankoil", note: "Home to Kalasalingam Academy of Research and Education, giving local students a university within reach." },
    { name: "Sivakasi", note: "A printing and fireworks centre to the east whose factories set the rhythm for many families' year." },
    { name: "Sankarankovil", note: "A temple town to the south, sending some students to Rajapalayam for coaching and schools." },
    { name: "Watrap", note: "A foothill town on the Western Ghats side, where families enjoy cooler evenings but weaker broadband in places." },
  ],

  schoolDisclaimer:
    "No IB or Cambridge or Edexcel school inside Rajapalayam could be confirmed, so no school strip appears on this page. The Madurai schools named below are listed for context, and their curricula come from published sources that families should check again with the school. IB Gram is independent of them, the IB, Cambridge and Pearson.",
  schoolClusters: [
    {
      city: "Rajapalayam and Virudhunagar district",
      note: "Local schooling runs on the Tamil Nadu State Board, Matriculation and CBSE. We could not confirm an IB or IGCSE school here, so a child following either syllabus is studying elsewhere or online.",
      schools: [],
    },
    {
      city: "Nearby: Madurai",
      note: "Around 80 kilometres north-east. Velammal Global School runs the IB continuum; Vikaasa World School, TIPS Globeducate Madurai and Kalvi Intercontinental School teach Cambridge IGCSE. Jain Vidyalaya has been authorised for the IB Career-related Programme.",
      schools: ["Velammal Global School", "Vikaasa World School", "TIPS Globeducate Madurai", "Kalvi Intercontinental School", "Jain Vidyalaya, Madurai"],
    },
    {
      city: "Nearby: Madurai (CAIE with CBSE)",
      note: "Mahatma Global Gateway School in Madurai runs Cambridge alongside CBSE, one of the closer options for a family after IGCSE specifically.",
      schools: ["Mahatma Global Gateway School, Madurai"],
    },
    {
      city: "Nearby: Chennai and Coimbatore",
      note: "Tamil Nadu's larger clusters of IB and Cambridge schools sit in Chennai and Coimbatore, many hours away, so they mean boarding or relocation.",
      schools: [],
    },
  ],

  modesIntro:
    "All Rajapalayam lessons run online. Choose the rhythm that fits the household: weekly, in bursts around a boarding school, or before an exam.",
  modes: [
    {
      title: "Weekly one-to-one class",
      description:
        "A fixed slot with the same tutor, working steadily through the student's syllabus with past papers and a shared board.",
      bullets: [
        "Slot fixed around school and mill-shift timings",
        "One tutor who learns the student's habits",
        "Suits IB and IGCSE at every level",
        "Rescheduled when a festival week intervenes",
      ],
    },
    {
      title: "Holiday intensive for boarders",
      description:
        "Concentrated sessions during a boarding school's break to consolidate the term or preview the next one.",
      bullets: [
        "Aligned with the school's real holiday dates",
        "Several short sessions a week rather than one long one",
        "Notes to hand to teachers on return",
        "Optional lighter follow-up during term",
      ],
    },
    {
      title: "Pre-exam sprint",
      description:
        "Timed papers and quick feedback in the final weeks before May, October-November or January.",
      bullets: [
        "Papers marked against current schemes",
        "Common errors listed after each set",
        "Best started a few weeks ahead",
        "Adjusted for local exams and holidays",
      ],
    },
  ],

  sections: [
    {
      heading: "Can Rajapalayam students study IB or IGCSE without a local school?",
      paragraphs: [
        "Yes, though the route is different from a city with several international campuses. In Rajapalayam a student typically follows the syllabus through a boarding school in another district, an online school, or a home-study arrangement supported by a private tutor. All three require an authorised exam centre to register the candidate, and the tutor supports the learning rather than the registration.",
        "The nearest confirmed options are in Madurai, about 80 kilometres away. Velammal Global School runs the IB continuum there, and Vikaasa World School, TIPS Globeducate Madurai and Kalvi Intercontinental School teach Cambridge IGCSE. Jain Vidyalaya has recently been authorised for the Career-related Programme, and Mahatma Global Gateway School runs Cambridge alongside CBSE.",
        "That distance makes a daily commute impractical for most, so a Madurai school usually means boarding or moving. Families who want to keep the child at home lean on online provision instead, and a subject tutor then does the classroom's job for the harder subjects.",
        "The table lists the confirmed schools reachable from Rajapalayam and the curricula they are recorded as offering.",
      ],
      table: {
        caption: "International-curriculum schools reachable from Rajapalayam",
        columns: ["School", "City", "Curriculum recorded", "Approx. distance"],
        rows: [
          ["Velammal Global School", "Madurai", "IB continuum", "About 80 km"],
          ["Vikaasa World School", "Madurai", "Cambridge IGCSE", "About 80 km"],
          ["TIPS Globeducate Madurai", "Madurai", "Cambridge IGCSE", "About 80 km"],
          ["Kalvi Intercontinental School", "Madurai", "Cambridge IGCSE", "About 80 km"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed inside Rajapalayam",
        "Madurai has the nearest verified campuses",
        "Boarding, relocation or online study are the usual routes",
        "A tutor supports the learning, the centre handles registration",
      ],
    },
    {
      heading: "What is different about the IB and IGCSE for a student from a Tamil Nadu State Board or Matriculation school?",
      paragraphs: [
        "Students from Samacheer State Board and Matriculation schools tend to arrive with excellent recall and disciplined note-taking. That is a real asset in IB Biology and IGCSE Chemistry. What changes is the expectation that an answer explains, compares or applies, so a memorised paragraph that is correct but off the command word earns fewer marks than students expect.",
        "Mathematics differs in emphasis. State Board papers reward speed with standard problems; IB Analysis and Approaches and IGCSE Extended add unfamiliar setups and multi-step reasoning, and Paper 3 in HL asks for sustained investigation. Students who have been drilled on repeating patterns often need a period of unlearning.",
        "Language matters as well. Tamil is the medium at home for nearly everyone in Rajapalayam, and English-medium Matriculation schools are common, so most students cope, but extended written English is often the first hurdle in Individuals and Societies and English A.",
        "None of this is a reason to hesitate. Students who move over usually find the criteria a fairer measure of what they actually understand.",
      ],
      table: {
        caption: "Tamil Nadu Board, CBSE, IGCSE and IB compared",
        columns: ["Question", "TN State / Matriculation", "CBSE", "IGCSE / IB"],
        rows: [
          ["What earns full marks?", "Accurate, complete recall", "Recall with some application", "Reasoned explanation and evaluation"],
          ["Practical work", "Record notebook and viva", "Practical file", "Practical skills paper (IGCSE), IA investigation (IB)"],
          ["Assessment mostly at", "End of Class 10 and 12", "End of Class 10 and 12", "IGCSE final papers; IB Diploma May, plus internal coursework"],
          ["Language of the paper", "Tamil or English medium", "English or Hindi", "English for most subjects"],
        ],
      },
      bullets: [
        "Strong recall helps but must be aimed at the command word",
        "Maths papers add unfamiliar, multi-step problems",
        "Extended English writing is the usual first hurdle",
        "Students often find the criteria fairer once they understand them",
      ],
    },
    {
      heading: "How is the rate for IB and IGCSE tuition in Rajapalayam set?",
      paragraphs: [
        "We do not publish figures, because the number is decided by the lesson, not the town. Level is the biggest factor: an IB Higher Level Chemistry tutor with recent IB marking experience commands a different rate from a tutor for IGCSE Core Mathematics. Session length and weekly frequency come next.",
        "A tutor's fit to your syllabus matters too. Someone who has taught the exact Edexcel or Cambridge code, or the exact IB subject at your level, saves time in explanation and worked examples. That is the reason we ask for the syllabus code up front.",
        "Rajapalayam is a smaller town, but nothing in the rate changes for being outside a metro. There is no travel charge and no premium for online delivery.",
        "Rates are given in writing after the free trial and before anything is booked, and lessons can be paused for exams, weddings or the festival season without penalty.",
      ],
      bullets: [
        "Level, length and frequency shape the rate",
        "Exact syllabus experience is worth paying attention to",
        "No metro premium or travel charge",
        "Rate confirmed in writing after the free trial",
      ],
    },
    {
      heading: "Private home tutors, coaching centres or online tuition: what fits an international syllabus in Rajapalayam?",
      paragraphs: [
        "Ask a Rajapalayam parent about tuition and they will describe evening classes for the State Board, and perhaps NEET or JEE coaching in Madurai or a residential school further afield. Those classes are competent at what they do, but they are not designed around an IB Diploma subject or an IGCSE code.",
        "Private home tutors in the town can teach school subjects well. It is rare to find one who has taught the international specification recently, and sharing the mark scheme, examiner reports and past papers takes real familiarity.",
        "Online one-to-one tuition widens the pool to specialists across India, working on a shared screen with the student's own papers. It replaces the missing classroom for the subjects that need it most.",
        "A comparison table sets out how each option stands.",
      ],
      table: {
        caption: "Ways to get IB and IGCSE help from Rajapalayam",
        columns: ["Option", "Knows the IB and IGCSE syllabus?", "Attention", "Practical catch"],
        rows: [
          ["State Board evening class", "No", "Group", "Different assessment style"],
          ["NEET/JEE coaching in Madurai or Namakkal belt", "No", "Large batches", "Travel or residence needed"],
          ["Local private tutor", "Sometimes, at school level", "Individual", "Few have taught the specification"],
          ["Online one-to-one tutor", "Yes, matched to the course", "Individual", "Needs steady broadband"],
        ],
      },
      bullets: [
        "Local classes serve State Board and entrance exams",
        "Few private tutors have taught the specification",
        "Online tutoring gives access to real subject specialists",
        "A dependable connection is the one requirement",
      ],
    },
    {
      heading: "How do Deepavali, Pongal and the dry summer affect study time in Rajapalayam?",
      paragraphs: [
        "Rajapalayam sits in a dry, hot part of Tamil Nadu. Summers from March to June are the hardest, with temperatures regularly high in the afternoon, so we prefer early morning or evening slots and keep a lesson short when a power cut hits. The northeast monsoon from October to December brings the more reliable rain.",
        "Deepavali is a larger factor here than in most towns. Sivakasi's fireworks and printing sector, a short drive away, ramps up production in the months before, and many families in the wider area have relatives working long hours. Lessons are planned around the festival week, and students often want a break before and after.",
        "Pongal in January and Tamil New Year in April bring shorter pauses. Temple festivals in Srivilliputhur and other nearby towns can also close roads and shift schedules.",
        "Exam windows do not move. Diploma papers begin in May, Cambridge sits in May-June and October-November, and Edexcel adds January, so the tutoring calendar is set backwards from those dates.",
      ],
      table: {
        caption: "A study year in Rajapalayam",
        columns: ["Months", "Local conditions", "How lessons adapt"],
        rows: [
          ["January", "Pongal, Edexcel January series", "Short pause, then exam-style practice"],
          ["March to June", "Hot, dry; IB and Cambridge May papers", "Morning or evening slots, early papers"],
          ["July to September", "Warm, occasional showers", "Regular weekly lessons, extra for new terms"],
          ["October to December", "Northeast monsoon, Deepavali, Cambridge Oct-Nov papers", "Lesson gaps around Deepavali, focused revision"],
        ],
      },
      bullets: [
        "Summer afternoons are avoided for lessons",
        "Deepavali needs a longer planned break here",
        "Pongal and temple festivals cause short pauses",
        "Board exam dates are fixed",
      ],
    },
    {
      heading: "What can an IB or IGCSE student from Rajapalayam do after school?",
      paragraphs: [
        "Local higher education is anchored by Kalasalingam Academy of Research and Education at Krishnankoil, Ramco Institute of Technology in Rajapalayam and Ayya Nadar Janaki Ammal College in Sivakasi. Madurai adds Thiagarajar College of Engineering, Madurai Kamaraj University and Madurai Medical College, and Chennai and Coimbatore draw students further.",
        "The route to Indian universities runs through equivalence. The Association of Indian Universities recognises IB and, with the right documentation, IGCSE plus a Class 12 qualification. CUET-UG is a way into many central universities. Engineering and medicine have subject and eligibility rules that should be read from the current official notice before subject choices are locked.",
        "Study abroad depends on predicted grades issued in autumn of the final year, which in turn rest on consistent work through Class 11 and the early months of Class 12.",
        "A tutor helps with the subject side of all these routes and leaves counselling and applications to the school or a qualified counsellor.",
      ],
      bullets: [
        "Local institutions include Kalasalingam and Ramco Institute of Technology",
        "AIU equivalence is essential for Indian degrees",
        "CUET-UG is an open route for IB students",
        "Predicted grades matter for applications abroad",
      ],
    },
    {
      heading: "Which IB Maths route and IGCSE tier should a Rajapalayam student choose?",
      paragraphs: [
        "IB Mathematics Analysis and Approaches suits students planning engineering, physics, computer science or mathematics, since it emphasises algebra, calculus and proof. Applications and Interpretation suits those heading toward economics, psychology, business or design, with a stronger focus on statistics, modelling and technology.",
        "Higher Level in either adds depth and, for Analysis and Approaches, a great deal of calculus. Standard Level is a sound choice when Mathematics is a support subject. The decision should be made from the university course requirements, not only from current marks.",
        "For IGCSE, the tier decision is the equivalent. Extended in Mathematics and the sciences prepares for IB Higher Level; Core is sensible where a student is aiming at a steadier result in a non-quantitative direction.",
        "A first diagnostic lesson gives the family evidence for either choice, so it is made with facts.",
      ],
      bullets: [
        "AA suits engineering and physical science paths",
        "AI suits economics, psychology and business paths",
        "Extended tier prepares for IB Higher Level",
        "Decide from university requirements, not only marks",
      ],
    },
  ],

  tutorsIntro:
    "These tutors teach IB and IGCSE from other parts of India, over video. None are in Rajapalayam and none need to be; what counts is recent, specific teaching of your child's syllabus and level.",

  process: [
    { title: "Tell us the syllabus", description: "Programme or board, subject and level, plus the school or online provider and the target exam session." },
    { title: "Review the shortlist", description: "Tutors chosen for recent experience of that exact course, each with a note on why they were picked." },
    { title: "Take the free lesson", description: "A live online session on a real topic, before any rate is agreed." },
    { title: "Agree a plan", description: "A short written outline of topics, pace and how progress will be reported." },
    { title: "Continue weekly", description: "A fixed slot, adjusted around exams, Deepavali and school terms." },
  ],

  whyPoints: [
    { title: "Chosen by course", description: "Tutors are matched to the syllabus code and level, not a broad IB or IGCSE label." },
    { title: "Right for a town without an IB school", description: "Tutors are prepared to teach the whole subject where no classroom does." },
    { title: "See it first", description: "A free live lesson lets you judge the teaching before paying." },
    { title: "Guidance, not authorship", description: "Feedback on IAs and essays, with the writing left to the student." },
    { title: "Visible progress", description: "A note after every session and a review every few weeks." },
    { title: "No lock-in", description: "No long contract, and a straightforward change of tutor if needed." },
  ],

  faqs: [
    { question: "Is there an IB school in Rajapalayam?", answer: "We could not confirm one. Rajapalayam schools follow the Tamil Nadu State Board, Matriculation or CBSE. The nearest verified international campuses are in Madurai, roughly 80 kilometres away, so Rajapalayam families usually study the IB through boarding or online provision with a private tutor supporting the harder subjects." },
    { question: "Can a tutor come to my home in Rajapalayam?", answer: "No. Tutors do not visit homes in Rajapalayam; in-person home tuition is limited to Gurugram and parts of Delhi NCR. Home tuition here means online: your child studies from a desk at home and a tutor teaches them live, one to one, over video, in Indian Standard Time." },
    { question: "What does IB or IGCSE tuition cost in Rajapalayam?", answer: "It depends on level, session length, weekly frequency and how closely the tutor's experience matches your syllabus. We give rates in writing after the free trial, and there is no charge for living in a smaller town. Pausing for exams or festivals does not carry a penalty." },
    { question: "Which schools near Rajapalayam teach IGCSE?", answer: "In Madurai, Vikaasa World School, TIPS Globeducate Madurai and Kalvi Intercontinental School teach Cambridge IGCSE, and Mahatma Global Gateway School runs Cambridge alongside CBSE. Nothing inside Rajapalayam itself could be confirmed. We name these for context only and are not affiliated with any." },
    { question: "Is Madurai the closest IB school for a Rajapalayam student?", answer: "Among the schools we could verify, yes. Velammal Global School in Madurai runs the IB continuum, and Jain Vidyalaya has been authorised for the Career-related Programme. It is about 80 kilometres away, so it means boarding or relocating, and families should check current admissions and curricula with the schools directly." },
    { question: "My child studies in a Tamil Nadu Matriculation school. Can they move to IGCSE?", answer: "Yes, and many do at Class 9. The main adjustments are answering to command words, showing working in Mathematics and writing longer English responses. A tutor can run a diagnostic lesson first and then plan the transition over a term or two, so the student is not overwhelmed." },
    { question: "Which IB subjects do your tutors cover?", answer: "Both Maths courses, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, Psychology, English A, Tamil A, Hindi B, Environmental Systems and Societies and TOK, at HL and SL where they exist. Tell us the exact subject and level and we will confirm honestly whether a suitable tutor is available." },
    { question: "Do you help with the Extended Essay and Internal Assessments?", answer: "We coach, we do not write. A tutor can explain criteria, help refine a research question, review a plan and comment on drafts, but the IA, Extended Essay, TOK essay and coursework remain the student's own work, exactly as the IB and the exam boards require." },
    { question: "Can my child sit exams from Rajapalayam?", answer: "Only through an authorised centre. The IB, Cambridge and Edexcel register candidates through schools or approved centres, and none in Rajapalayam is one we could confirm. Families typically register through a school elsewhere or a private-candidate centre in Madurai or Chennai, and the deadlines are months before the exam series." },
    { question: "Do you support MYP and PYP students?", answer: "Yes. MYP work centres on criteria-based writing, science reports and the Personal Project, with coaching only. PYP support is lighter, mostly reading, number work and Exhibition preparation. Boarders often take short blocks during term breaks." },
    { question: "What time of day are lessons held?", answer: "Slots are fixed with the family, commonly early morning, after school or in the evening. In the hot months we avoid the middle of the afternoon, and we plan around power interruptions. Weekend sessions are usual for students with long school days." },
    { question: "How do Deepavali and Pongal affect the schedule?", answer: "We plan for them. Deepavali usually brings a longer pause, particularly for families linked to the Sivakasi industries, while Pongal and Tamil New Year mean shorter breaks. Lessons missed because of a festival are moved, not lost, and the plan is adjusted so exam preparation is unaffected." },
    { question: "How do I know the tutor is qualified?", answer: "We look at what the tutor has taught recently, at which level and on which specification, and the trial lesson is your own check. You see how they explain, how they use past papers and whether your child is comfortable, all before any rate is agreed." },
    { question: "What if my child does not get on with the tutor?", answer: "Tell us and we introduce another tutor. Reviews every few weeks are meant to catch this early, and nothing is signed long term. The note after each session gives you a clear record to judge by." },
    { question: "How do I start with a free lesson?", answer: "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with the subject, level, board or programme and preferred times. We reply with a shortlist and a trial slot. The lesson is real teaching, and you decide afterwards whether to continue." },
    { question: "Is IB Gram part of the IB, Cambridge, Pearson or any school?", answer: "No. IB Gram is an independent tutoring service with no affiliation to the International Baccalaureate, Cambridge, Pearson Edexcel or any school named on this page. Schools are mentioned only to help families understand their options." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "See how online tuition works from one Indian city to another." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person home tuition is available." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "Understanding IGCSE boards and tiers." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, Core and assessment for the DP." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP inquiry units and the Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "The applied route alongside Diploma courses." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Find a tutor by subject and level." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and book a free trial." },
    { label: "IB and IGCSE tutors in Madurai", href: "/madurai/", description: "The nearest city with verified IB and IGCSE schools." },
    { label: "IB and IGCSE tutors in Tirunelveli", href: "/tirunelveli/", description: "A southern Tamil Nadu city served the same online way." },
    { label: "IB and IGCSE tutors in Sivakasi", href: "/sivakasi/", description: "The neighbouring industrial town to the east." },
  ],

  closingHeading: "Start with a free IB or IGCSE lesson in Rajapalayam",
  closingBody:
    "Share the subject and level, the board or programme, and the times that suit your family. We will reply with a matched tutor and a trial lesson slot, taught online and one to one. You decide after watching. Email support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
