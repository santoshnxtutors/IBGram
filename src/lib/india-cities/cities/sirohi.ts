import type { CitySeoPage } from "../types";

/**
 * /sirohi/ - IB and IGCSE tutoring page for Sirohi, Rajasthan. Online-only delivery (in-person home
 * tuition runs only in Gurugram and parts of Delhi NCR). No school in Sirohi district could be
 * confirmed as teaching the IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and the clusters
 * point honestly to Udaipur and Ahmedabad, reusing names already confirmed on those neighbouring pages.
 */
export const sirohi: CitySeoPage = {
  slug: "sirohi",
  countryName: "Sirohi",
  countryNameLong: "Sirohi, Rajasthan",
  demonym: "Sirohi",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson slots are planned around Sirohi's long hot season, the Rajasthan school calendar and the exam series your child is actually entered for",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.885, longitude: 72.8625 },
  wikipedia: "https://en.wikipedia.org/wiki/Sirohi,_Rajasthan",
  alternateNames: ["Sirohi Rajasthan", "Sirohi town"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sirohi | Private Online Tuition",
  metaDescription:
    "Private IB and IGCSE tutors for Sirohi students: DP, MYP, PYP, Cambridge and Edexcel IGCSE taught live online one to one, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Sirohi",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR SIROHI, TAUGHT ONLINE",
  heroSubtitle:
    "Looking for private home tuition in Sirohi for an IB or IGCSE course? Here it means a live one-to-one lesson on a laptop in your own house, because tutors do not visit homes in Sirohi; home visits run only in Gurugram and parts of Delhi NCR. A subject specialist who has taught your child's exact syllabus joins on video, works through problems on a shared screen, and sends a short written note after each session.",
  primaryKeyword: "IB and IGCSE tutors in Sirohi",
  imageAltText: "A Sirohi student revising IB Mathematics with an online tutor on a laptop at a study desk at home",
  secondaryKeywords: [
    "IB tutor Sirohi",
    "IGCSE tutor Sirohi",
    "IB home tuition Sirohi",
    "IGCSE home tuition Sirohi",
    "IB private tuition Sirohi",
    "IB Maths tutor Sirohi",
    "IGCSE Maths tutor Sirohi",
    "IB Physics tutor Sirohi",
    "IB Chemistry tutor Sirohi",
    "IB Biology tutor Sirohi",
    "IB DP tutor Sirohi",
    "IB MYP tutor Sirohi",
    "IB PYP tutor Sirohi",
    "IGCSE online tuition Sirohi",
    "IB tutor Abu Road",
    "IGCSE tutor Pindwara",
    "online IB tutor Mount Abu",
    "IB tuition Sirohi Rajasthan",
    "IB and IGCSE tutors in Sirohi",
  ],

  heroTrustPoints: [
    "Tutors matched to your child's board, subject and level before any lesson is booked",
    "Every lesson is live and online; home visits exist only in Gurugram and parts of Delhi NCR",
    "A free trial lesson first, then a written plan you can read in full",
    "Independent of every school, the IB, Cambridge and Pearson",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Primary, middle and diploma years" },
    { value: "Cambridge & Edexcel", label: "Both main IGCSE boards" },
    { value: "IST", label: "Same clock as your child" },
    { value: "Free trial", label: "Try a lesson, then decide" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition looks like for a family in Sirohi",
    paragraphs: [
      "Sirohi is a district town in the south of Rajasthan, in the shadow of the Aravalli hills and not far from the Gujarat border. Most children here study on the Rajasthan Board or CBSE, and a family asking about the IB or IGCSE is usually doing so for a reason: a parent's transfer, a plan for study abroad, or a relative who has already followed that road. IB and IGCSE tutors in Sirohi, in the sense of someone who lives in town and teaches those syllabuses, are almost impossible to find. What is possible is a specialist anywhere in India teaching your child live.",
      "We could not confirm any school in Sirohi itself that teaches the IB Diploma or a Cambridge or Edexcel IGCSE, and we would rather say so than invent one. That shapes who writes to us. Some students are enrolled at a boarding school in another city and need help in the term breaks. Others are studying IGCSE as private candidates, or following the IB through an online school. A few are younger children whose parents want a stronger base before a move.",
      "Private home tuition in Sirohi, for these courses, therefore means online home tuition: the student sits at the family's own table, the tutor appears on screen, and both write on the same digital page. Nobody travels. Nothing is lost on subjects such as Mathematics, Physics or Economics, where the working on the page matters more than the room it happens in, and the tutor can show a correction while the student is still thinking about the mistake.",
      "We are an independent tutoring service. We have no tie to the IB Organization, Cambridge University Press and Assessment, Pearson or any school named on this page, and our tutors coach understanding and exam technique. They do not write Internal Assessments, Extended Essays or coursework for students.",
    ],
    bullets: [
      "PYP, MYP, DP and CP support, plus Cambridge and Edexcel IGCSE",
      "Live one-to-one lessons on Indian Standard Time",
      "A free trial lesson and a tutor change if the fit is wrong",
      "Rates quoted in writing before anything is booked",
      "Home visits are limited to Gurugram and parts of Delhi NCR, never Sirohi",
    ],
  },

  programmesIntro:
    "Families in Sirohi meet the IB through very different doors, so the four programmes below are described by what a tutor actually does at each stage. Because no school in town runs them, the starting point is usually a child coming from a Rajasthan Board or CBSE classroom, and tutoring has to bridge a difference in method as much as in content.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Learning is organised around units of inquiry rather than a timetable of separate subjects, and the final year ends with a student-led Exhibition. Nothing is externally marked, so a tutor works on fluent reading, confident number sense and the habit of asking a question that can actually be investigated.",
      countryNote:
        "For a Sirohi child about to join a PYP school elsewhere, the useful early work is English reading aloud, mental arithmetic and short written explanations, since these are the skills the first term quietly assumes.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Each MYP subject is graded against four published criteria, and the programme closes with a Personal Project. A student from a marks-and-chapters classroom often understands the content but has never been asked to justify a choice against a rubric, and that is where support begins.",
      countryNote:
        "Sirohi families most often ask about MYP Sciences, Mathematics and Individuals and Societies, and about choosing a Personal Project that can be finished with the resources available at home.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three subjects at Higher Level, three at Standard Level, Theory of Knowledge, the Extended Essay and CAS make up the Diploma, with internal assessments counting towards each grade. Tutoring concentrates on the subject papers and on how internal work is planned, never on writing it.",
      countryNote:
        "A Sirohi Diploma student is nearly always studying away from home or through an online school, so lessons tend to fill the gaps between term-time teaching, mainly in Maths, Physics, Chemistry and English.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme combines at least two Diploma courses with a career-related study, a reflective project and language development. Where Diploma courses sit inside it, they need the same depth of subject work as the full Diploma.",
      countryNote:
        "Very few schools in India offer CP, so enquiries from Sirohi are rare; when they come, we build the plan around the two Diploma subjects the student has chosen.",
    },
  ],

  subjectsIntro:
    "Saying a student 'does IB Maths' is not enough to find the right tutor. Analysis and Approaches and Applications and Interpretation are different courses, and Higher Level differs from Standard Level in pace and depth. We shortlist from the syllabus code and the student's current grade first, and treat the evening timetable as a later filter.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof-style reasoning dominate, and Higher Level Paper 3 asks for extended investigation of an unfamiliar problem, which only comes with practice on unseen questions." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator fluency carry the course, and a good exploration starts from data a student can really collect." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics are tested through data-based questions, with the internal investigation judged on whether another person could repeat it." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative work, equilibrium and organic reaction pathways need regular drilling, and the data booklet becomes an ally once a student knows where everything sits." },
    { name: "IB Biology", levels: "HL / SL", description: "Command terms decide the marks, so a student learns to answer 'outline' differently from 'evaluate', alongside basic statistics for the practical work." },
    { name: "IB Economics", levels: "HL / SL", description: "Clear labelled diagrams tied to a real recent example outscore long paragraphs, and Higher Level adds data-response questions on development and policy." },
    { name: "IB Business Management", levels: "HL / SL", description: "Marks reward applying a concept to the named firm in the case, and the internal commentary needs a real organisation behind it." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Cold reading of unseen texts, comparison across works and a spoken oral each need separate practice." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Written theory papers sit beside a working software solution, so revision splits between algorithms on paper and code that actually runs." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches to behaviour must be backed by named studies and applied accurately, and a single tight argument scores above a scatter of half-remembered research." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies named with specifics, plus a fieldwork method that would survive scrutiny, separate the strongest scripts." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis rewards scepticism about origin and purpose, while essays reward a sustained argument rather than a list of events." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Unseen reading and unrehearsed speaking decide the grade more than vocabulary lists, and Hindi is often a strong subject for Rajasthan students." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation works better than lecture here, with a student pushed to defend a prescribed title from an unfamiliar angle." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel IGCSE courses share a name but not a specification, and within each there are Core and Extended papers. A Sirohi student's plan starts with the exact board, code and tier the school or examination centre has entered, and works backwards from the series being sat.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Extended students need algebra, trigonometry and graphs at speed, while Core students gain more from accuracy and clear working." },
    { name: "IGCSE Additional Mathematics", levels: "Cambridge", description: "A step above ordinary Mathematics, with differentiation, integration and functions, and a common bridge into IB Maths AA." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Calculation habits, unit discipline and the alternative-to-practical paper are the three things that most reliably move a grade." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Balancing equations, mole calculations and identifying ions are practised until they become automatic." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Precise terminology, diagram interpretation and experiment design questions reward careful reading." },
    { name: "IGCSE English as a First Language", levels: "Cambridge / Edexcel", description: "Directed writing, summary and composition each need a different register, which is worth rehearsing with feedback." },
    { name: "IGCSE English as a Second Language", levels: "Cambridge", description: "Reading comprehension, formal writing and speaking skills are built in short regular sessions rather than long cramming." },
    { name: "IGCSE Economics", levels: "Cambridge / Edexcel", description: "Definitions, diagrams and a habit of using a short real example lift answers quickly." },
    { name: "IGCSE Computer Science", levels: "Cambridge", description: "Pseudocode, logic and a programming paper that expects working solutions under time pressure." },
    { name: "IGCSE Hindi as a Second Language", levels: "Cambridge", description: "Comprehension and structured writing in a language many Sirohi students already speak at home, which makes it a dependable grade." },
  ],

  regionsTitle: "Sirohi district towns and where our online students log in from",
  regionsIntro:
    "Sirohi district is spread along the Aravalli range and the Delhi to Ahmedabad railway corridor. The list below describes the towns families write from, with a note on school context and timing. Tutors do not travel to any of them; every lesson is online.",
  regions: [
    { name: "Sirohi city", note: "The district headquarters, with a CBSE and Rajasthan Board school mix and a quiet evening routine that suits lessons from around 5 pm." },
    { name: "Abu Road", note: "A busy railway junction town at the foot of the hills, popular with families who also have ties to Gujarat and prefer weekend lesson slots." },
    { name: "Pindwara", note: "Home to Sirohi Road railway station, a commercial town where school-end times and evening shop hours shape when a lesson fits." },
    { name: "Sirohi Road", note: "The station area near Pindwara, used by families who commute by train to Ahmedabad or Udaipur for work, so lessons run after they return." },
    { name: "Mount Abu", note: "Rajasthan's only hill station, noticeably cooler than the plains; lessons are easy to schedule outside the tourist peaks, and mobile connectivity should be checked before booking." },
    { name: "Reodar", note: "A smaller town on the district's western side, where a stable broadband or mobile hotspot is the first thing we confirm." },
    { name: "Sheoganj", note: "A trading town on the Jawai river belt, with families who often start lessons in the evening after market hours." },
    { name: "Swaroopganj", note: "A town in the east of the district, where board exams and the local calendar decide lesson intensity in February and March." },
    { name: "Rohida", note: "A smaller settlement where online tuition is often the only practical route to a specialist IB or IGCSE tutor." },
  ],

  schoolClusters: [
    {
      city: "Sirohi district",
      note: "We could not confirm any school here teaching the IB or Cambridge or Edexcel IGCSE, so local options are limited. We do not name schools we cannot verify.",
      schools: [],
    },
    {
      city: "Nearby: Udaipur",
      note: "Roughly three hours by road, Udaipur is the closest Rajasthan city with confirmed Cambridge-curriculum schools, and a natural choice for a Sirohi family weighing a move or boarding.",
      schools: ["Rockwoods International School", "Seedling The World School", "Crossroads International School"],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "A major Gujarat city on the same rail corridor, with a deeper set of IB and Cambridge schools; many Abu Road and Sirohi families already travel there for work or health care.",
      schools: ["Calorx Olive International School", "Ahmedabad International School", "Eklavya School"],
    },
  ],
  schoolDisclaimer:
    "These schools are listed only to describe options in the wider region. IB Gram is independent and has no partnership with them, with the IB, Cambridge or Pearson, and nothing here implies endorsement or a place at any school.",

  modesIntro:
    "A Sirohi family can use IB Gram in three ways. All are live and online, because we do not send tutors to homes outside Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "A weekly lesson through term",
      description: "One tutor, one fixed slot, built to track what school or an online provider is covering that week.",
      bullets: ["Same tutor across the year", "Homework reviewed in the next session", "Short written note afterwards"],
    },
    {
      title: "A short run before an exam series",
      description: "More frequent sessions for the weeks before a paper, centred on past questions and timing.",
      bullets: ["Past papers under timed conditions", "Mark scheme walkthroughs", "Weak topics ranked and revisited"],
    },
    {
      title: "Holiday catch-up for boarders",
      description: "A student boarding in another city uses the break at home in Sirohi to repair gaps or move ahead.",
      bullets: ["Plan agreed before the break starts", "Concentrated sessions on one or two subjects", "Hand-over notes for the school term"],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools and families does Sirohi's tuition serve?",
      paragraphs: [
        "In short, Sirohi has no confirmed IB or IGCSE school of its own, so the families who contact us are scattered across several situations. Some have a child boarding in Udaipur, Dehradun or another city and want help in the holidays. Some follow Cambridge or Edexcel IGCSE as private candidates through an exam centre elsewhere. Others are preparing a younger child for a future move.",
        "The district's mix of occupations shapes this. Families linked to marble and mineral businesses, to temple and tourism trade at Mount Abu and Abu Road, to government service and to the army and paramilitary postings that rotate through Rajasthan all appear in our conversations. Government and defence families in particular value an international curriculum because a transfer can land a child in a different state mid-year.",
        "Because there is no local IB campus, the tutor often becomes the main continuity. A student who changes schools between Class 8 and Class 9 will find the MYP or IGCSE courses start from different assumptions, and a tutor who knows the syllabus can smooth the transition by checking what the new school has already covered.",
        "Parents sometimes ask whether they should move to a bigger city to follow the IB properly. We do not advise on admissions or relocation. We can say that a tutor is a useful companion whichever route is chosen, and that a free trial lesson shows within an hour whether the approach suits the child.",
        "If you already know the school, the board and the subject list, send those details. If you do not, begin with the year group and the board your child is studying now, and we will explain what the shift to IB or IGCSE would involve for that child.",
      ],
      bullets: [
        "Boarders who study in another city and return home for holidays",
        "Private candidates for Cambridge or Edexcel IGCSE",
        "Transferable-job families wanting continuity of curriculum",
        "Younger children preparing for a later move to an international school",
      ],
    },
    {
      heading: "How do Rajasthan Board, CBSE, IB and IGCSE compare for a Sirohi student?",
      paragraphs: [
        "The four routes differ most in how a mark is earned. Rajasthan Board and CBSE reward accurate recall and worked solutions to familiar question types. IB and IGCSE reward explaining, applying and evaluating, with coursework or practicals contributing in several subjects.",
        "For a Sirohi student the practical consequence is workload shape. A CBSE or board student has a heavy single exam season; an IB student carries a longer, steadier stream of internal tasks across two years. An IGCSE student has the lightest coursework but meets papers with long, multi-step questions.",
        "Language matters here as well. Many Sirohi students think in Hindi or Marwari and write English as an academic language. IB and IGCSE papers ask for extended English answers, so a tutor spends real time on how to structure a paragraph, not just on the subject content.",
        "Neither route is inherently harder. A student strong in problem solving may find the Cambridge Mathematics papers comfortable, while one who dislikes rote learning may enjoy MYP projects. We help families decide with a trial lesson in the subject rather than with a general opinion.",
      ],
      table: {
        caption: "How the main school routes compare for a Sirohi family",
        columns: ["Feature", "Rajasthan Board / CBSE", "IB Diploma", "Cambridge or Edexcel IGCSE"],
        rows: [
          ["Typical age", "Classes 9-12", "Classes 11-12", "Classes 9-10"],
          ["Assessment style", "Annual board papers", "Papers plus internal assessments", "Final papers, some coursework or practicals"],
          ["Local availability", "Widely taught in Sirohi", "Not confirmed in Sirohi", "Not confirmed in Sirohi"],
          ["Language load", "Hindi or English medium", "English, extended writing", "English, structured writing"],
          ["Common onward route", "CUET, JEE, NEET", "Indian and overseas universities", "IB, A Level or Indian Class 11"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Sirohi, and what sets the rate?",
      paragraphs: [
        "IB Gram does not publish a price list, and we give the rate in writing before a family books anything. The rate depends on a handful of things that are easy to describe, so you can judge a quote against them.",
        "The first is the course. A Diploma Higher Level Physics tutor with several years of examining or teaching experience costs more than a tutor for IGCSE English, because the pool of people who can do the former well is smaller. The second is the level of the student's need: catching up a missed term is different work from stretching a student aiming at a top grade.",
        "Frequency and length matter next. Two one-hour lessons a week cost more than one, but a single weekly lesson is often enough for a student whose school teaching is strong. Short intensive blocks before an exam series usually need more sessions than a calm month in the middle of term.",
        "Because the lesson is online, a Sirohi family pays nothing for a tutor's travel and nothing for a centre's rent. We do not pretend that makes tuition cheap, only that the money goes towards the tutor's time and preparation. The trial lesson is free so that a family can decide on quality before discussing a rate.",
        "Ask for the quote to state the hourly rate, the length of each lesson, what happens if a session is cancelled, and how a tutor change is handled. If any of those is vague, ask again.",
      ],
      bullets: [
        "Course and level (DP Higher Level, MYP, IGCSE Core or Extended)",
        "Tutor experience with the specific syllabus",
        "Sessions per week and length of each",
        "Intensity near an exam series versus mid-term",
      ],
    },
    {
      heading: "Online home tuition, local coaching, private tutors or self-study: which suits a Sirohi student?",
      paragraphs: [
        "A student in Sirohi who wants IB or IGCSE help has four realistic options, and none is wrong for everyone. The table below sets them side by side so a family can see the trade-offs rather than decide by habit.",
        "Local coaching centres in Sirohi and Abu Road are built around board examinations and competitive entrance tests such as JEE and NEET, and they are well suited to those. They rarely teach IB or IGCSE content, and it is unusual to find a teacher who has marked Cambridge or IB papers.",
        "Independent private tutors may exist for IGCSE English or Mathematics, since the content overlaps with Indian syllabuses, but the experience of a specific IB subject at Higher Level is hard to find in a small town. Self-study with past papers works for disciplined students but leaves misunderstandings uncorrected for weeks.",
        "Online one-to-one tuition combines a specialist with the convenience of studying at home. Its main requirement is a stable connection and a quiet corner at the agreed hour, which most Sirohi homes can manage with a broadband line or a good mobile signal.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Sirohi",
        columns: ["Option", "Syllabus knowledge", "Fit with Sirohi routines", "Main limit"],
        rows: [
          ["Online one-to-one with IB Gram", "Matched to the exact syllabus", "Evening or weekend slots at home", "Needs reliable internet"],
          ["Local coaching centre", "Board and entrance exams", "Fixed batch timings", "Rarely covers IB or IGCSE"],
          ["Private tutor in town", "Depends on the individual", "Flexible", "Few with IB Higher Level experience"],
          ["Self-study with past papers", "Whatever the student finds", "Fully flexible", "Errors go uncorrected"],
        ],
      },
    },
    {
      heading: "When are the exams, and how does Sirohi's calendar affect study?",
      paragraphs: [
        "The IB Diploma has two examination sessions, in May and November, and most Indian schools enter students in May with results published in early July. Cambridge IGCSE runs in the February-March series for some centres, the May-June series and the October-November series. Pearson Edexcel offers January, May-June and October-November sittings.",
        "Sirohi's weather and festival calendar then cut across these dates. Summers on the plains are long and hot, with daytime temperatures that can pass 40 degrees, so most families schedule lessons after sunset from April to June. Winters are mild and easy for study, though Mount Abu can be cold enough to affect heating and connectivity.",
        "Festivals reshape weeks rather than days. Diwali, Holi, Navratri and Gangaur bring travel and family gatherings, and wedding season adds more, so we ask for dates at the start and build the plan around them rather than around hopeful guesses.",
        "A sensible rhythm is to treat the months before a series as the main working block, with one longer review lesson at the half-way point. After a mock paper, we use the next session to mark it together, because a marked paper shows more than a score.",
      ],
      table: {
        caption: "Exam series and what they mean for lesson planning",
        columns: ["Series", "When", "Who sits it", "Lesson focus"],
        rows: [
          ["IB Diploma May session", "May, results in early July", "Class 12 Diploma students", "Timed papers, internal assessment review"],
          ["IB November session", "November", "Retakes and some schools", "Targeted revision of weak papers"],
          ["Cambridge IGCSE", "Feb-Mar, May-Jun, Oct-Nov", "Class 10 candidates", "Past papers by paper number"],
          ["Pearson Edexcel IGCSE", "Jan, May-Jun, Oct-Nov", "Class 10 candidates", "Mark scheme technique"],
          ["Rajasthan Board / CBSE", "February-March", "Class 10 and 12", "Aligning school and IB or IGCSE work"],
        ],
      },
    },
    {
      heading: "Where can IB and IGCSE take a Sirohi student after school?",
      paragraphs: [
        "The question we hear most often from Sirohi parents is whether an international qualification will be accepted at home. The Association of Indian Universities issues equivalence for the IB Diploma and for IGCSE results at Class 10 level, and many Indian universities admit IB students directly, so the route stays open.",
        "For national entrance tests, the details change by year. Students from the IB Diploma can apply to CUET-UG through the subjects the university accepts, and JEE Main and NEET have eligibility rules about subject combinations, so we always tell families to read the current information bulletin before choosing subjects, not to rely on a general summary.",
        "Abroad, IB points and IGCSE grades are widely understood by universities in the UK, Canada, Australia and Europe, and many require Higher Level Mathematics or sciences for particular degrees. A tutor does not make admissions decisions, but can explain what a grade of 6 or 7 in a subject usually signals.",
        "Within India, students from this part of Rajasthan often look at Jaipur, Delhi, Pune and Ahmedabad for undergraduate study. The IB's emphasis on writing and independent research tends to suit liberal arts and management programmes as well as engineering.",
      ],
      bullets: [
        "AIU equivalence is the first document to request for Indian admissions",
        "CUET-UG subject choices must be checked against each university's list",
        "JEE and NEET have subject eligibility rules that change by year",
        "Overseas degrees often ask for Higher Level Mathematics or sciences",
      ],
    },
    {
      heading: "How do IB Maths and the sciences work in detail for a Sirohi student?",
      paragraphs: [
        "IB Mathematics comes in two courses. Analysis and Approaches suits students aiming at engineering, mathematics or physical sciences, and leans on algebra, calculus and proof. Applications and Interpretation suits economics, psychology and business, with more statistics and technology. Each has Higher and Standard Level.",
        "Students from a CBSE or Rajasthan Board background usually have strong calculation and weaker explanation. Their first adjustment is to show reasoning in words and diagrams, to read a question that has no obvious formula, and to use a graphical display calculator without losing hand skills.",
        "IB Physics, Chemistry and Biology combine content with a practical dimension. The internal assessment is a student's own investigation, and our tutors help a student choose a researchable question, plan methods and understand marking criteria, but they never write the report.",
        "For all three sciences, we recommend working through the syllabus topic by topic, then switching to mixed past-paper questions in the last third of the course so the student learns to recognise which topic a question belongs to. Data booklets and command terms are practised from the first month.",
        "A weekly lesson with homework between sessions usually suits the first year. In Year 2, a second weekly session for the weakest subject often pays off more than extending the first.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects should a Sirohi student choose?",
      paragraphs: [
        "Core and Extended are two tiers of the same IGCSE subject. Core papers cover the basic syllabus and cap the highest grade lower; Extended papers add harder content and allow the top grades. The decision is normally made by the school or exam centre, but a private candidate can choose.",
        "Our general advice is to choose Extended Mathematics and the sciences if the student plans to continue to IB Diploma, A Level or an engineering path, because the extra content becomes the foundation for later courses. A student who finds Mathematics stressful may do better with Core and a strong result than with Extended and a shaky one.",
        "Subject choice should follow strengths and the destination. For Indian engineering or medicine, Mathematics, Physics, Chemistry and Biology matter. For commerce or management, Economics, Business Studies and Accounting are common. Languages, including Hindi, are often among a student's most reliable grades.",
        "Cambridge and Edexcel differ in layout, grade labels and sometimes content. Cambridge uses A* to G across most subjects; Edexcel IGCSE uses 9 to 1 in newer specifications. A tutor should name the board in the first message, and we ask for it before we shortlist.",
      ],
      bullets: [
        "Extended tier keeps IB, A Level and engineering routes open",
        "Core tier suits a student building confidence in a hard subject",
        "Hindi as a second language is often a high-scoring subject",
        "Confirm the board and tier with the exam centre before booking tutoring",
      ],
    },
  ],

  process: [
    { title: "Tell us the syllabus", description: "Send the programme, subject, level, board and exam series by WhatsApp or email." },
    { title: "We shortlist a tutor", description: "A subject specialist who has taught that exact course is proposed, with a brief profile." },
    { title: "Take the free trial", description: "A real lesson on a real topic, with the child, so the family sees the teaching first." },
    { title: "Agree a plan in writing", description: "Weekly slots, rate and goals are written down before any booking." },
    { title: "Review and adjust", description: "A written note follows each session, and the tutor can be changed if the fit is wrong." },
  ],
  whyPoints: [
    { title: "Syllabus-matched tutors", description: "Tutors are chosen for the exact IB or IGCSE course, not a general subject label." },
    { title: "Online, so no travel", description: "Lessons run from your home in Sirohi without anyone travelling anywhere." },
    { title: "Indian Standard Time", description: "Tutors are based in India, so there is no time-zone gap to manage." },
    { title: "Written notes", description: "After every lesson you receive a short note on what was covered and what to do next." },
    { title: "Free trial and tutor change", description: "Try first, and switch tutor if the fit is not right." },
    { title: "Honest scope", description: "Tutors coach; they do not write Internal Assessments, Extended Essays or coursework." },
  ],

  tutorsIntro:
    "These tutors teach IB and IGCSE online across India. A Sirohi student can be matched with any of them, because the lesson happens on screen and not at your door.",

  faqs: [
    { question: "Are there IB and IGCSE tutors in Sirohi who come to the house?", answer: "No, not through IB Gram. Tutors do not visit homes in Sirohi, because in-person home tuition runs only in Gurugram and parts of Delhi NCR. What we offer instead is online home tuition: a live one-to-one lesson that your child takes at home on a laptop, with a tutor who has taught the exact IB or IGCSE syllabus. Many families find that works as well as a visit." },
    { question: "Is there an IB or IGCSE school in Sirohi?", answer: "We could not confirm one. We looked for IB World Schools and Cambridge or Edexcel centres in Sirohi district and did not find any we could verify, so we do not name any. The nearest confirmed options are in cities such as Udaipur and Ahmedabad, which is why our Sirohi students learn mainly through private tutoring, boarding elsewhere, or as private candidates." },
    { question: "How does online IB tuition work for a student in Sirohi?", answer: "A student logs in from home at an agreed hour, the tutor appears on video, and both share a digital whiteboard or document. The tutor explains, sets questions, marks answers live and sends a written note afterwards. Lessons run on Indian Standard Time, so a Sirohi student does not have to adjust to another time zone." },
    { question: "What do IB and IGCSE tutors in Sirohi cost?", answer: "We do not publish prices, because the rate depends on the subject, level, tutor experience and number of sessions. A quote is given in writing before booking. Higher Level sciences and Maths usually cost more than IGCSE English, for example. The first lesson is free, so you can judge the teaching before discussing money." },
    { question: "Can my child switch from Rajasthan Board or CBSE to IGCSE?", answer: "Yes, though usually through a school or exam centre that offers it. A Sirohi student can prepare as a private candidate for Cambridge or Edexcel IGCSE through a centre elsewhere, and a tutor helps with the style of the papers. We cannot arrange the exam entry ourselves, so check the registration deadlines with the centre early." },
    { question: "Do you teach IB Maths Analysis and Approaches and Applications and Interpretation?", answer: "Yes, both, at Higher and Standard Level. They are different courses, so we ask which one the school has chosen and shortlist a tutor who has taught it. Analysis and Approaches leans on calculus and proof, while Applications and Interpretation emphasises statistics and modelling with technology." },
    { question: "Will a tutor write my child's Internal Assessment or Extended Essay?", answer: "No. Our tutors coach and never write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework. They can explain the criteria, discuss how to choose a question, give feedback on structure and help a student practise exam skills, but the work submitted must be the student's own." },
    { question: "Does IB Gram cover MYP and PYP, or only the Diploma?", answer: "We cover all four IB programmes: PYP, MYP, DP and CP. Younger students usually need help with reading, mathematics fluency and written explanation, while MYP students often need support with criteria-based tasks and the Personal Project. The Diploma has the largest demand, but families of younger children are welcome." },
    { question: "Which IGCSE boards do you support?", answer: "Both Cambridge International and Pearson Edexcel. The two have different specifications, paper codes and grade scales, so we ask for the board and syllabus code first. A Sirohi student sitting Cambridge 0580 Mathematics needs different practice from one sitting Edexcel 4MA1." },
    { question: "What is the best time for lessons given Sirohi summers?", answer: "Evenings after sunset are the most comfortable from April to June, when daytime heat on the plains is intense. In the cooler months, afternoon lessons after school work well. We set the schedule with you, and we keep a spare slot for power cuts or connectivity trouble." },
    { question: "Can students in Abu Road, Pindwara or Mount Abu join too?", answer: "Yes. Any student in Sirohi district with a stable internet connection can take lessons, since everything is online. Mount Abu and smaller towns sometimes have patchy signal, so we suggest testing a video call before the trial lesson and having a mobile hotspot as a backup." },
    { question: "How do I start with a free trial lesson?", answer: "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com with the programme, subject, level, board and your child's year. We propose a tutor and a trial time, usually within a few days. The trial is a real lesson on a topic your child is studying, with no obligation to continue." },
    { question: "What if the tutor is not a good fit?", answer: "Tell us after the first lessons and we will change the tutor. A good fit depends on teaching style as well as subject knowledge, and it is easy to see within a few sessions. There is no awkwardness in asking, and the change does not restart the written plan from zero." },
    { question: "Will IB or IGCSE be accepted by Indian universities?", answer: "Generally yes. The Association of Indian Universities issues equivalence for the IB Diploma and for IGCSE at Class 10 level, and many universities admit IB students directly. Entrance tests such as CUET-UG, JEE and NEET have their own subject rules, so read the current bulletin before choosing subjects. We do not guarantee admission anywhere." },
    { question: "Is IB Gram connected to the IB or to any school?", answer: "No. IB Gram is an independent tutoring service with no affiliation to the IB Organization, Cambridge, Pearson or any school mentioned on this page. School names appear only to describe regional options. Our tutors teach and coach; admissions, entries and results remain between the family, the school and the exam body." },
    { question: "Can a child in Sirohi who boards in another city still use your tutors?", answer: "Yes, and it is a common pattern. A student away at school can take weekend or holiday lessons from wherever they are, and the same tutor continues when the student comes home to Sirohi. We keep notes between sessions, so nothing is lost when the location changes." },
  ],

  internalLinks: [
    { label: "India city pages", href: "/india/", description: "See every Indian city where we teach IB and IGCSE online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse IB subject tutors across programmes." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject tutoring." },
    { label: "IB Diploma tuition", href: "/programmes/dp/", description: "What Diploma tutoring covers, subject by subject." },
    { label: "IB MYP tuition", href: "/programmes/myp/", description: "Support for criteria-based MYP subjects and the Personal Project." },
    { label: "IB Maths tuition", href: "/courses/ib/mathematics/", description: "Analysis and Approaches or Applications and Interpretation." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of the tutors who teach online." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book your free trial lesson." },
    { label: "Udaipur", href: "/udaipur/", description: "Our page for Udaipur, the nearest Rajasthan city with Cambridge schools." },
    { label: "Pali", href: "/pali/", description: "Our page for Pali, another Rajasthan town we teach online." },
    { label: "Ahmedabad", href: "/ahmedabad/", description: "Our page for Ahmedabad, across the Gujarat border." },
  ],

  closingHeading: "Start with one lesson and see how it feels",
  closingBody:
    "Tell us the programme, the subject and the exam series, and we will suggest a tutor for a free trial lesson that your child can take from home in Sirohi. If the teaching suits, we agree a plan and a rate in writing. If it does not, you have lost nothing but an hour. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
