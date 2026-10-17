import type { CitySeoPage } from "../types";

/**
 * Pukhrayan (Kanpur Dehat district, Uttar Pradesh). No IB or IGCSE school in the town could be confirmed,
 * so stripSchools is empty and the clusters reuse school names already published on the Kanpur and Lucknow pages,
 * labelled as nearby cities. Home visits are not offered here (homeTuition: false in plan.ts).
 */
export const pukhrayan: CitySeoPage = {
  slug: "pukhrayan",
  countryName: "Pukhrayan",
  countryNameLong: "Pukhrayan, Uttar Pradesh",
  demonym: "Pukhrayan",
  flagCode: "in",
  countryCode: "IN",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and early-morning slots that steer clear of the wheat harvest, wedding-season weeks, winter fog and the loo of May",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.2167, longitude: 79.8333 },
  alternateNames: ["Pukhrayan Kanpur Dehat", "Pukhraya", "Pukhrayan Uttar Pradesh", "Pukhrayan Ramabai Nagar"],
  wikipedia: "https://en.wikipedia.org/wiki/Pukhrayan",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Pukhrayan | Online Home Tuition",
  metaDescription:
    "One-to-one live online IB and IGCSE tuition for Pukhrayan students in Kanpur Dehat, timed around UP Board dates, the harvest and winter fog. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition in Pukhrayan, Kanpur Dehat",
  heroEyebrow: "ONLINE ONE-TO-ONE IB & IGCSE HOME TUITION IN PUKHRAYAN",
  heroSubtitle:
    "A parent in Pukhrayan who searches for home tuition for an IB or IGCSE subject is mostly shown classes meant for the UP Board. We offer something else: private tuition from home, online. Your child stays at the study table in Kanpur Dehat, while a tutor who has actually taught the paper appears live on screen. Give us the subject and the level, and we find the match.",
  primaryKeyword: "IB and IGCSE tutors in Pukhrayan",
  imageAltText: "A Pukhrayan student solving an IGCSE Physics paper with an online tutor on a laptop at a home study table",
  secondaryKeywords: [
    "IB tutor Pukhrayan",
    "IGCSE tutor Pukhrayan",
    "IB home tuition Pukhrayan",
    "IGCSE home tuition Pukhrayan",
    "IB private tuition Pukhrayan",
    "IB Maths tutor Pukhrayan",
    "IGCSE Maths tutor Pukhrayan",
    "IB Physics tutor Pukhrayan",
    "IB Chemistry tutor Pukhrayan",
    "IB Biology tutor Pukhrayan",
    "IB DP tutor Pukhrayan",
    "IB MYP tutor Pukhrayan",
    "IB PYP tutor Pukhrayan",
    "IGCSE online tuition Pukhrayan",
    "online IB tutor Pukhrayan",
    "IB tutor Kanpur Dehat",
    "IGCSE tutor Kanpur Dehat",
    "IB tutor Jhinjhak",
    "IB tutor Rura",
    "online tutor Ramabai Nagar",
  ],

  heroTrustPoints: [
    "Tutors picked for the exact IB or IGCSE paper, not the general subject",
    "Live video lessons, same day and time every week, in IST",
    "A free trial lesson, then a written quote before any booking",
    "No connection with the IB, Cambridge, Pearson or any school",
  ],
  heroStats: [
    { value: "Online", label: "How every lesson runs here" },
    { value: "PYP, MYP, DP", label: "IB stages covered" },
    { value: "2 boards", label: "Cambridge and Edexcel IGCSE" },
    { value: "Free trial", label: "Try the first lesson first" },
  ],

  intro: {
    heading: "Studying for the IB or IGCSE from Pukhrayan: a realistic picture",
    paragraphs: [
      "Pukhrayan is a railway town in Kanpur Dehat district, set in the flat Doab farmland between the Ganga and the Yamuna where wheat, mustard, potato and pulses fill the fields. Its schools mostly teach the Uttar Pradesh Board syllabus, with a few CBSE and ICSE campuses in the district. We could not verify any IB or IGCSE school in the town itself, which shapes everything on this page.",
      "For IB and IGCSE tutors in Pukhrayan, then, the practical answer is online home tuition. The student studies at home on a laptop, and the teacher is someone who has taught that course to learners in other cities. That matters because the city with real depth in international schooling, Kanpur, is a trip away, and Lucknow farther still.",
      "Let us be direct: tutors do not come to your door in Pukhrayan. Visits to homes happen only in Gurugram and parts of Delhi NCR. Here, a lesson means live video, a shared board and photographed pages of working, followed by a short written note that a parent can read in two minutes.",
      "IB Gram works on its own, with no tie to the IB Organization, Cambridge, Pearson or any school mentioned below. Our tutors teach, mark and advise. Writing a student's Internal Assessment, Extended Essay, TOK essay or coursework is something they never do.",
    ],
    bullets: [
      "IB PYP, MYP, Diploma and Career-related programme help",
      "Cambridge and Pearson Edexcel IGCSE preparation",
      "One tutor, one student, a fixed hour every week",
      "Short parent notes after each lesson",
      "Plans that make room for the harvest, weddings and fog",
    ],
  },

  programmesIntro:
    "With no IB school confirmed in Pukhrayan, a child studying these programmes is normally enrolled in Kanpur, in a boarding school elsewhere, or with an online provider. What follows describes each stage and what Kanpur Dehat families usually ask us for.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Learning is organised around big ideas, such as how people use water or why communities trade, rather than around a single textbook. Pupils present an Exhibition in their final year.",
      countryNote:
        "A child from a Hindi-medium early school often needs patient English speaking practice. Exhibition topics can start from things nearby, such as the railway junction, the grain market or the canal that waters the fields.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to 10, ages 11-16",
      description:
        "Subjects are assessed against criteria that reward reasoning and clear communication, and the course closes with a Personal Project chosen and managed by the student.",
      countryNote:
        "Pupils who grew up on UP Board question styles meet something new when criteria replace model answers. We spend the first lessons on how to plan an answer, present an experiment and explain a result in English.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "Six subjects across two years, three at Higher Level, with the Extended Essay, Theory of Knowledge and CAS. Final papers come in May or November, with internal assessments counted in.",
      countryNote:
        "Families here often have engineering or medicine in mind and keep JEE or NEET open. A written plan from the first month of Class 11 keeps both the IB and entrance preparation workable.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "A pair or trio of Diploma courses combined with a vocational pathway and a reflective project.",
      countryNote:
        "Seldom chosen from this district. If your child is enrolled, we tutor the academic courses and help schedule the project around exams.",
    },
  ],

  subjectsIntro:
    "Matching starts with the course and level. A learner taking IB Chemistry HL needs a different teacher from a Class 8 MYP Maths student, so we check the syllabus before we suggest a name.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof. Students with a JEE-style background are quick at manipulation and need practice at writing full reasoning." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology; the Exploration can use local data such as wheat yields, canal flows or grain market prices." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves, circuits and fields, plus an investigation in which uncertainty is treated seriously." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics, kinetics and organic chemistry, with a lab investigation marked on design and evaluation." },
    { name: "IB Biology", levels: "HL / SL", description: "Genetics, ecology and human physiology, where precise terms and data analysis carry the marks." },
    { name: "IB Economics", levels: "HL / SL", description: "Microeconomics, macroeconomics and development, with agricultural prices and rural credit as natural examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based papers; small traders, dairies and grain merchants of the district offer familiar cases." },
    { name: "IB Geography", levels: "HL / SL", description: "Freshwater, population and resource themes, supported by fieldwork on the Doab landscape." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Soil, water and pollution in an intensively farmed alluvial plain close to a large industrial city." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming and databases, practised on the student's own machine between lessons." },
    { name: "IB English A and B", levels: "HL / SL", description: "Analysis of texts and written commentary, for students stronger in Hindi who need exact, confident English." },
    { name: "IB Hindi", levels: "SL / HL", description: "A comfortable language course for a native speaker, with attention to analytical writing and literary terms." },
    { name: "IB Theory of Knowledge", levels: "Core", description: "Coaching on framing claims and counterclaims; the essay and exhibition stay the student's own." },
  ],

  igcseSubjectsIntro:
    "IGCSE students from Pukhrayan commonly work through an online school or as private candidates. We start from the syllabus code and tier, because Extended Mathematics, Additional Mathematics and Edexcel Higher call for different preparation.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Cambridge Core or Extended, Edexcel Foundation or Higher", description: "A broad syllabus where unclear working and misread command words cost the most marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus and trigonometry that make a later step to IB Maths or JEE foundations less steep." },
    { name: "IGCSE Physics", levels: "Core and Extended", description: "Forces, energy, electricity and waves; the alternative-to-practical paper tests lab thinking without a lab." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Reaction patterns, the periodic table and qualitative tests that must be learnt as routines." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Heavy content and questions that ask a student to plan an experiment." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Pseudocode, logic gates and programming." },
    { name: "IGCSE English First or Second Language", levels: "Grade 9-10", description: "Directed writing and summary for students who think first in Hindi." },
    { name: "IGCSE Economics and Business Studies", levels: "Grade 9-10", description: "Definitions, data response and short structured answers." },
    { name: "IGCSE Geography", levels: "Grade 9-10", description: "River systems, agriculture and settlement, written through case studies." },
  ],

  regionsTitle: "Pukhrayan and Kanpur Dehat areas we reach online",
  regionsIntro:
    "Everything is taught on screen, so the point of knowing an area is connection quality and a sensible hour. The notes below describe how the day tends to run so that we can plan a slot. We send nobody to these places.",
  regions: [
    { name: "Pukhrayan railway station area", note: "The main-line station zone, busy with traders and commuters, where trains set the rhythm of the evening." },
    { name: "Pukhrayan main bazaar", note: "Shops, grain dealers and small offices; fibre in some lanes, mobile data in others." },
    { name: "Highway side colonies", note: "Newer houses along the Kanpur-Jhansi road, with decent signal and heavy truck noise at night." },
    { name: "Old town lanes", note: "Closely built streets where a quiet room can take some finding, and power can dip at peak hours." },
    { name: "Jhinjhak", note: "A neighbouring railway town whose families share the same trains to Kanpur and the same school choices." },
    { name: "Rura", note: "A Kanpur Dehat town on the Delhi line, with parents who commute to Kanpur for work." },
    { name: "Derapur and Rasulabad", note: "Tehsil towns where school options are mostly UP Board, and family farms shape the study day." },
    { name: "Akbarpur", note: "The district headquarters area with government offices, colleges and a steady flow of transfers." },
    { name: "Bhognipur and the surrounding villages", note: "Village belts where harvest weeks and power supply decide when a child can study." },
  ],

  schoolDisclaimer:
    "IB Gram operates on its own and is not connected to the IB, Cambridge, Pearson or any school. We did not find an IB or IGCSE school in Pukhrayan, so the groups below borrow names from Kanpur and Lucknow, which already feature on our published pages for those cities. Verify courses and admission rules with each school itself.",
  schoolClusters: [
    {
      city: "Pukhrayan and Kanpur Dehat: few local options",
      note: "Schools in the town and the district teach the UP Board, CBSE or ICSE syllabus. No IB or IGCSE campus could be confirmed, so international study here takes place through private tuition and online schooling.",
      schools: [],
    },
    {
      city: "Nearby: Kanpur",
      note: "The district's big city is the first stop for families who want a Cambridge route, and it is reached by the same railway line.",
      schools: ["Billabong High International School", "Allenhouse Public School"],
    },
    {
      city: "Nearby: Lucknow",
      note: "The state capital has more choice, including an IB primary school and several Cambridge campuses, and some families consider boarding or relocation there.",
      schools: ["Modern School, Lucknow", "City Montessori School, Cambridge Campus", "GD Goenka Public School, Lucknow"],
    },
  ],

  modesIntro:
    "Online is the way we teach in Pukhrayan. Three patterns cover the requests we see from Kanpur Dehat families.",
  modes: [
    {
      title: "Private weekly lessons from home, online",
      description:
        "A live one-to-one session at a fixed hour each week, with screen sharing and a digital whiteboard, taught by someone who knows the syllabus.",
      bullets: [
        "No tutor travels to Pukhrayan; every lesson is online",
        "The same tutor throughout the term",
        "A written summary for parents after each lesson",
        "In-person home visits are limited to Gurugram and parts of Delhi NCR",
      ],
    },
    {
      title: "Exam-season sprint",
      description:
        "A dense run of lessons in the weeks ahead of the May or November papers, working from past questions and mark schemes.",
      bullets: [
        "Papers sat to the clock",
        "Targeted work on weak topics",
        "Command-word drills",
        "Dates chosen away from wedding and harvest weeks",
      ],
    },
    {
      title: "Switching from the UP Board",
      description:
        "For a student moving from the UP Board or CBSE into IGCSE or IB courses, a short series on method, English writing and practical reasoning.",
      bullets: [
        "A diagnostic opening lesson",
        "Training in structured answers",
        "Lab write-up coaching",
        "A gradual pace",
      ],
    },
  ],

  sections: [
    {
      heading: "Who in Pukhrayan chooses the IB or IGCSE, and why?",
      paragraphs: [
        "Pukhrayan families who look beyond the UP Board are a small circle with specific reasons. Railway and government employees expect transfers, traders and landowners think about a child studying in Delhi, Pune or abroad, and a few families have relatives in the Gulf, the UK or North America.",
        "Another group is parents who simply find the IB or Cambridge style of study more thoughtful. They like a course in which a student has to explain a result, not merely repeat it, and they see this as preparation for any university route.",
        "There is a worry we hear often: will the child lose Hindi, or lose touch with UP admissions? A good plan answers both. Hindi continues as a language course, and the family checks the rules for entrance tests well before Class 11.",
        "None of this needs the child to move to a hostel at fourteen. With online lessons the student remains in Pukhrayan, close to family, and still works with a specialist who would be out of reach by road.",
      ],
      bullets: [
        "Parents in transferable railway or government service",
        "Families planning study in Delhi, Pune or overseas",
        "Relatives abroad who set the example",
        "A wish for explanation over memorising",
      ],
    },
    {
      heading: "UP Board, CBSE, IGCSE and IB: what really changes for a student?",
      paragraphs: [
        "The UP Board, run by the Madhyamik Shiksha Parishad, holds High School at Class 10 and Intermediate at Class 12. CBSE and ICSE schools exist in Kanpur Dehat's larger towns. All three reward careful learning of prescribed chapters and neat final answers.",
        "Cambridge and Pearson Edexcel IGCSE use externally marked papers that ask students to apply knowledge to unfamiliar situations. The IB Diploma goes broader, with six subjects, an Extended Essay and Theory of Knowledge.",
        "A student crossing over discovers that the rules for earning marks have changed. A long, accurate paragraph from the textbook may fetch full marks at home but only a fraction when an IB question hands over a data table and asks for evaluation.",
        "The table gathers the main points for a family comparing boards.",
      ],
      table: {
        caption: "Boards side by side for a Kanpur Dehat family",
        columns: ["Board", "Main exams", "What earns marks", "Position for Pukhrayan students"],
        rows: [
          ["UP Board", "High School Class 10, Intermediate Class 12", "Learning set chapters and writing them out well", "The default in town, direct path to state universities"],
          ["CBSE or ICSE", "Board exams at Class 10 and 12", "NCERT or ICSE book accuracy", "In larger district towns and Kanpur, aligned with JEE and NEET"],
          ["Cambridge or Edexcel IGCSE", "Grade 10 papers in May-June and Oct-Nov", "Applying ideas and showing working", "Taken privately or through an online school"],
          ["IB Diploma", "May or November sessions, Class 12", "Breadth, extended writing and internal assessment", "Suits a family aiming at Delhi, metros or overseas study"],
        ],
      },
    },
    {
      heading: "How much should a Pukhrayan family expect IB and IGCSE tuition to cost?",
      paragraphs: [
        "Prices are not listed here. Instead, after the free first lesson we put a rate in writing, and no booking is made until you have read and accepted it. A few things drive the figure, and it is useful to know them in advance.",
        "Course and level come first. Tutoring IB Physics HL draws on narrower, more advanced experience than a Class 6 MYP Science course, and the rate reflects that. How long each lesson runs and how many fall in a week are the next factors.",
        "Pattern matters too. A steady weekly class over a school year works out differently from a six-week sprint before the May exams. Many parents in Kanpur Dehat prefer to try one subject for a month and add more only after seeing a change in confidence.",
        "There is no travel cost, since teaching is online. A family that would otherwise spend a day each week on the railway to Kanpur for a class saves both fares and hours.",
      ],
      bullets: [
        "Subject, with HL, SL, Core or Extended noted",
        "Minutes per lesson and sessions per week",
        "Steady plan or short exam run",
        "How specialised the tutor's syllabus record is",
      ],
    },
    {
      heading: "Is online home tuition better than a Kanpur coaching class or self-study?",
      paragraphs: [
        "For an IB or IGCSE student in Pukhrayan, usually yes, though it depends on the child. Local tuition in the town focuses on UP Board papers and entrance coaching, and does not cover command terms or tiered papers.",
        "Coaching institutes in Kanpur are famous for JEE and NEET, and some do cover Cambridge or CBSE subjects. The catch is travel: a rail or road journey each way, a late return in winter fog, and a tired student the next morning.",
        "Self-study using past papers works for a self-driven learner. Without a tutor looking at the answers, errors in structure and presentation repeat across months.",
        "The table compares the four routes on what matters to a family in Kanpur Dehat.",
      ],
      table: {
        caption: "Choosing between ways to study from Pukhrayan",
        columns: ["Route", "Syllabus match", "Journey involved", "Marked feedback", "Scheduling"],
        rows: [
          ["Online one-to-one lessons at home", "Tutor selected for the precise course", "None", "Work returned with comments", "Flexible around harvest and fog"],
          ["Local UP Board tuition", "Built for state papers", "Short local walk", "Rarely IB or IGCSE style", "Fixed batch hours"],
          ["Kanpur coaching institute", "Strong for entrance exams, patchy for IB", "Train or road trip each way", "Varies by centre", "Rigid batches"],
          ["Self-study from past papers", "Student's own choice", "None", "None unless someone marks", "Entirely open"],
        ],
      },
    },
    {
      heading: "How do harvest, weddings and fog shape the exam calendar in Pukhrayan?",
      paragraphs: [
        "Diploma candidates sit written papers mainly in May, with a smaller November round, and learn results in July or January. IGCSE papers from Cambridge and Edexcel come in May-June and October-November, with a January window for Edexcel. Your child's registered session decides every date that follows, so ask the school or online provider first.",
        "In Kanpur Dehat, the farm year collides with the exam year. Wheat is cut in April, just as IB students enter their last revision stretch, and the extra work at home pulls children away from desks. Wedding season, strongest in the cooler months and again before the monsoon, fills houses with guests and interrupts routines.",
        "Weather has its say as well. December and January bring dense fog that delays trains and cancels classes, and May is dominated by the dry, hot loo. Evening study with a power cut is a common problem, so we build slack into every plan.",
        "We therefore plan backwards from the exam window and avoid the weeks when a household is least able to support study.",
      ],
      table: {
        caption: "The Pukhrayan year and the study calendar",
        columns: ["Period", "Academic focus", "Local factor", "Tutoring plan"],
        rows: [
          ["July to September", "New session, IA topic ideas, foundation work", "Monsoon rain and humidity", "Weekly lessons, start IA planning"],
          ["October to November", "November sessions, mock papers", "Dussehra, Diwali and the start of wedding season", "Short paper practice before holidays"],
          ["December to February", "Mocks, IA drafts, UP Board practicals for state students", "Dense fog and cold evenings", "Early slots, feedback on drafts"],
          ["March to May", "Final revision and May papers", "Wheat harvest then the loo", "Late-evening slots, timed papers"],
        ],
      },
    },
    {
      heading: "Where can a Pukhrayan student go with an IB or IGCSE background?",
      paragraphs: [
        "The Association of Indian Universities treats the IB Diploma as equivalent to Class 12, while IGCSE on its own is a Class 10 qualification. Many universities accept IB scores directly, central universities use CUET-UG, and professional courses publish separate criteria that should be read each year.",
        "Families in Kanpur Dehat frequently think about engineering and medicine. JEE Main and Advanced remain the route to the IITs, including the one in Kanpur, and NEET-UG leads to medical seats. Eligibility for IB and A Level students depends on subject combination, so we advise reading the latest bulletin before choosing subjects. We teach the content and make no promises about entry.",
        "Locally, Chhatrapati Shahu Ji Maharaj University in Kanpur and Lucknow University serve many UP Board graduates, while Delhi University and private universities in Delhi NCR attract IB students. For overseas study, the Diploma maps cleanly to UK, Canadian, Australian and American applications, with SAT or ACT where asked.",
        "Starting to track deadlines in Class 11 saves a great deal of stress in Class 12.",
      ],
      bullets: [
        "AIU equivalence for the IB Diploma",
        "CUET-UG for central universities",
        "JEE Main and Advanced for engineering",
        "NEET-UG rules to be read from the latest bulletin",
        "Applications to the UK, Canada, Australia and the US",
      ],
    },
    {
      heading: "IB Maths AA or AI and the sciences: how does online coaching work from Pukhrayan?",
      paragraphs: [
        "Analysis and Approaches is the course for a student bound for engineering, physics or mathematics. It expects strong algebra, calculus and proof. Applications and Interpretation suits future economists, psychologists and biologists, with more statistics and technology. A mistake in Class 11 is hard to undo, so a diagnostic often comes first.",
        "Students trained for JEE-style problems can solve quickly but lose marks on written justification, which the IB marks directly. We build the habit of showing every inference and of using the calculator correctly where permitted.",
        "Physics, Chemistry and Biology follow a shared shape: content papers, data-handling questions and an investigation. Online, the tutor draws on a shared canvas, solves with the student and reviews photographs of lab notes. The practical work and its write-up remain the student's job; we coach the design, error analysis and evaluation.",
        "The Doab setting gives excellent raw material for Environmental Systems and Geography, including groundwater, canal irrigation, soil health and fertiliser use.",
      ],
      bullets: [
        "A diagnostic lesson before choosing AA or AI",
        "Weekly problem sets returned with comments",
        "Past-paper practice in the last term",
        "Help with designing investigations without writing the IA",
      ],
    },
    {
      heading: "IGCSE Core or Extended, Foundation or Higher: how does a Pukhrayan student decide?",
      paragraphs: [
        "With Cambridge, many subjects offer Core and Extended papers. Core limits the best grade to a C, while Extended runs the whole scale up to A*. A student who may go on to IB Maths, A Level sciences or JEE preparation should normally aim for Extended.",
        "Pearson Edexcel offers Foundation and Higher tiers in Mathematics. Higher matches Extended in difficulty, and the same advice applies. Uncertain families can take a diagnostic paper in the first lesson, which shows what is realistic.",
        "Most students pick English, Mathematics, two or three sciences, and a humanities or business subject. Hindi is not offered by every board at IGCSE level, so English as a Second Language is a frequent language choice.",
        "The table shows how typical combinations connect to later study.",
      ],
      table: {
        caption: "IGCSE combinations and their next steps",
        columns: ["Subject set", "Tier advice", "What it leads to"],
        rows: [
          ["Mathematics plus Additional Mathematics", "Extended or Higher", "IB Maths AA, A Level Maths, JEE foundations"],
          ["Physics, Chemistry and Biology", "Extended", "IB sciences, A Level sciences, NEET-style study"],
          ["Economics and Business Studies", "Extended", "IB Economics, Business Management, commerce degrees"],
          ["English as a Second Language", "Standard", "English requirements for overseas universities"],
        ],
      },
    },
  ],

  tutorsIntro:
    "These tutors teach live over video to families across India, Kanpur Dehat included. Each profile gives subjects, levels and teaching history, and each lesson with a Pukhrayan student happens online.",

  process: [
    { title: "Message us", description: "Share the board, programme, subject, level and free evenings by writing to support@ibgram.com or on WhatsApp at +91 7439 368 115." },
    { title: "Get a shortlist", description: "We respond with tutors whose teaching record fits the syllabus, along with open weekly times in IST." },
    { title: "Take a free lesson", description: "The first online session costs nothing and commits you to nothing." },
    { title: "See the quote in writing", description: "Rate and timetable arrive in writing, and no booking happens before you agree." },
    { title: "Watch the progress", description: "Brief notes follow each lesson, and a change of tutor is easy if the fit is off." },
  ],

  whyPoints: [
    { title: "Matched on the paper", description: "Tutors are chosen for the exact course and tier." },
    { title: "Plain about online", description: "No tutor comes to Pukhrayan; every lesson is on screen." },
    { title: "Technique inside content", description: "Command words, mark schemes and timing are practised in every lesson." },
    { title: "Parents in the loop", description: "A short written note follows every session." },
    { title: "Student keeps the work", description: "Tutors coach and mark but never write assessed work." },
    { title: "Fit can be changed", description: "If a tutor does not suit, we arrange another." },
  ],

  faqs: [
    {
      question: "Will an IB or IGCSE tutor visit my home in Pukhrayan?",
      answer:
        "No tutor will arrive at your gate in Pukhrayan. Visits to homes are confined to Gurugram and parts of Delhi NCR, so for a Kanpur Dehat family the lesson is a live, private session online. Your child works from a laptop or tablet at home, with a shared board and written follow-up. That still counts as tuition at home, minus any journey for the student.",
    },
    {
      question: "Is there any IB or IGCSE school in Pukhrayan?",
      answer:
        "None that we could verify, either in Pukhrayan or in neighbouring towns. Schools here teach the UP Board, CBSE or ICSE. For an international board, families generally turn to Kanpur or Lucknow, or to an online school. Ask each school about its curriculum, and rely on our tutors as support for whichever route you pick.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Pukhrayan?",
      answer:
        "Rates are not published, because the figure depends on course, level and hours per week. A free trial comes first, then a written quote, and nothing is booked unless you accept it. With lessons online there is no fare to add. Trying one subject for a month is a fair test of value.",
    },
    {
      question: "Can my child keep the UP Board and also take IB tuition?",
      answer:
        "Yes, with a clear weekly plan. The UP Board and IB assess in very different ways, so we help separate the two workloads. Many families keep the main schooling on one board and use tuition for a specific skill gap, such as written English or Maths reasoning. Tell us the plan and we will suggest a workable load.",
    },
    {
      question: "Which subjects do Kanpur Dehat students ask for most?",
      answer:
        "Mathematics, Physics, Chemistry and Biology lead, with Economics and Business Management next. Students aiming at JEE or NEET lean towards the science group. Hindi or English as a language course is common. We match tutors for any of these at HL or SL, or Core and Extended for IGCSE.",
    },
    {
      question: "Do tutors help write the Internal Assessment or Extended Essay?",
      answer:
        "Never. A tutor will not write an IA, Extended Essay, TOK essay or any coursework. What they do is unpack the marking criteria, help sharpen a research question and give comments on drafts. Ideas, data and words stay the student's, which also keeps the candidate clear of any misconduct finding.",
    },
    {
      question: "Which IGCSE boards do you teach?",
      answer:
        "We teach both Cambridge IGCSE and Pearson Edexcel International GCSE. Syllabus codes differ, for instance 0580 for Cambridge Mathematics and 4MA1 for Edexcel, so we confirm the entry before choosing a tutor. A Level and AS help is available for students continuing after IGCSE.",
    },
    {
      question: "Is the internet in Pukhrayan good enough for live lessons?",
      answer:
        "A steady connection of a few megabits is enough for video and a shared board. Many homes along the highway and in the bazaar have fibre or good mobile data, while the village belt can be patchy. If the line is weak, we use audio with screen sharing, and the free trial shows whether the connection holds.",
    },
    {
      question: "How do you handle power cuts and winter fog?",
      answer:
        "We schedule around them and keep slack in the plan. A phone hotspot and a power bank solve most interruptions. In dense fog, trains stall but online lessons carry on, which is one advantage over a Kanpur class. If a cut ruins a session, the tutor reschedules the lost part.",
    },
    {
      question: "Which months are the IB and IGCSE exams, and how soon should revision start?",
      answer:
        "The IB main session is May, and some candidates sit in November instead. IGCSE candidates from either board face papers in May-June or October-November. For a May paper, revision proper tends to start by December, followed by a concentrated block across the last two months. The school or online provider that registered your child can confirm the session.",
    },
    {
      question: "Can a Class 8 or 9 student begin before IGCSE starts?",
      answer:
        "Yes, and it often pays off. Starting in Class 8 or 9 gives time to build written English, algebra and experimental reasoning before the two-year course. Pupils from Hindi-medium schools gain especially from steady English practice. Lessons at this stage are lighter and focus on habits.",
    },
    {
      question: "Do Indian universities accept the IB Diploma?",
      answer:
        "Broadly yes. The Association of Indian Universities rates the IB Diploma as the same level as Class 12. Some universities admit on IB scores, central universities typically want CUET-UG, and professional degrees follow their own rules. Before fixing subjects, open the latest admission brochure for each university or entrance test you may target.",
    },
    {
      question: "What if my child does not click with the tutor?",
      answer:
        "Tell us and we will arrange another tutor without any fuss. The free first lesson exists to test the fit, and a change later is simple. Good matching depends on teaching style as well as syllabus knowledge, so we ask how your child learns before we propose anyone.",
    },
    {
      question: "Can lessons be explained in Hindi?",
      answer:
        "Teaching is in English, since that is the language of the papers, yet a tutor can restate a hard idea in Hindi for a hesitant student. Say what you prefer when you contact us and we will search accordingly. Spoken and written English usually improves fast once lessons are regular.",
    },
    {
      question: "How do I get started from Pukhrayan?",
      answer:
        "Send a message to support@ibgram.com, or use WhatsApp on +91 7439 368 115, saying which board, subject and level your child needs and when evenings are free. A shortlist and a trial slot come back from us. Fee and timetable are then confirmed in writing, so you can take time before saying yes.",
    },
  ],

  internalLinks: [
    { label: "How IB tutoring works", href: "/ib-tutors/", description: "Where a tutor adds the most in each IB programme." },
    { label: "IGCSE overview", href: "/igcse/", description: "Cambridge and Edexcel tiers and exam sessions." },
    { label: "Cities across India", href: "/india/", description: "The full list of places we teach online." },
    { label: "Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the core and how grades add up." },
    { label: "Middle Years Programme", href: "/programmes/myp/", description: "Criteria-based assessment and the Personal Project." },
    { label: "Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "Career-related Programme", href: "/programmes/cp/", description: "How the CP combines courses with career study." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Tutor profiles", href: "/tutors/", description: "Filter by subject, level and teaching history." },
    { label: "Entrance test preparation", href: "/admissions/test-prep/", description: "Fitting entrance exams around an international course." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us and book the free first lesson." },
    { label: "Kanpur", href: "/kanpur/", description: "The nearest large city, also served online." },
    { label: "Lucknow", href: "/lucknow/", description: "The state capital with a wider range of international schools." },
    { label: "Etawah", href: "/etawah/", description: "A neighbouring Uttar Pradesh town we serve online." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson in Pukhrayan",
  closingBody:
    "Tell us the board, subject, level and which evenings suit your family. We come back with a few tutor options and a time for a free trial over video. Reach out through support@ibgram.com or WhatsApp on +91 7439 368 115.",
};
