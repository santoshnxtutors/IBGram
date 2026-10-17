import type { CitySeoPage } from "../types";

/**
 * Gohana (Sonipat district, Haryana). No IB or Cambridge/Edexcel school could be confirmed in the town, so
 * stripSchools is empty and clusters point to Sonipat, Rohtak-side and Gurugram/Delhi using names already
 * recorded on neighbouring pages. Online-only delivery (homeTuition false in plan.ts).
 */
export const gohana: CitySeoPage = {
  slug: "gohana",
  countryName: "Gohana",
  countryNameLong: "Gohana, Haryana",
  demonym: "Gohana",
  flagCode: "in",
  countryCode: "IN",
  region: "Haryana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings after school and Sunday mornings, shifted around wedding season, harvest weeks and winter fog",
  lastUpdated: "2026-09-21",
  state: "Haryana",
  stateCode: "IN-HR",
  geo: { latitude: 29.1392, longitude: 76.6994 },
  alternateNames: ["Gohana Sonipat", "Gohana Haryana"],
  wikipedia: "https://en.wikipedia.org/wiki/Gohana",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Gohana | Online Home Tuition",
  metaDescription:
    "Private IB and IGCSE tutors for Gohana students, one to one and live online: DP, MYP, Cambridge and Edexcel, with a free trial lesson before any fee.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Gohana",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR GOHANA, TAUGHT LIVE ONLINE",
  heroSubtitle:
    "Gohana is better known for its jalebi and its wrestling akharas than for international schooling, so a family here who wants private tuition at home for an IB or IGCSE student has to look past the town itself. Our tutors teach from elsewhere in India and never visit Gohana in person, which means home tuition here is a live one-to-one lesson on a laptop in your own room.",
  primaryKeyword: "IB and IGCSE tutors in Gohana",
  imageAltText: "Gohana student working through an IB Mathematics problem set on a laptop during a live one-to-one online lesson",
  secondaryKeywords: [
    "IB tutor Gohana",
    "IGCSE tutor Gohana",
    "IB home tuition Gohana",
    "IGCSE home tuition Gohana",
    "IB private tuition Gohana",
    "IB Maths tutor Gohana",
    "IGCSE Maths tutor Gohana",
    "IB Physics tutor Gohana",
    "IB Chemistry tutor Gohana",
    "IB Biology tutor Gohana",
    "IB DP tutor Gohana",
    "IB MYP tutor Gohana",
    "IB PYP tutor Gohana",
    "IGCSE online tuition Gohana",
    "online IB tutor Sonipat district",
    "IB tutor Khanpur Kalan",
    "IGCSE tutor Mundlana",
    "Cambridge IGCSE tutor Gohana Haryana",
    "Edexcel IGCSE tutor Gohana",
    "IB Economics tutor Gohana",
    "online IGCSE tutor Haryana",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact IB course or IGCSE specification code your child is sitting",
    "Lessons are live and online in Gohana, because tutors visit homes only in Gurugram and parts of Delhi NCR",
    "A free first lesson, then a written rate before you commit to anything",
    "Independent of every school, exam board and the IB organisation",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "Live, one to one", label: "Online at home in Gohana" },
    { value: "Free trial", label: "Before any rate is agreed" },
  ],

  intro: {
    heading: "An honest picture of international curricula around Gohana",
    paragraphs: [
      "Gohana sits in the north-west corner of Sonipat district, a grain-market town of sugarcane, wheat and paddy fields, with a busy anaj mandi and a wrestling culture that has sent young athletes into Haryana's akharas for generations. The schools families talk about are Haryana Board and CBSE institutions. We looked for any school in or immediately around the town teaching the International Baccalaureate or a Cambridge or Edexcel IGCSE and could not confirm one, so this page does not pretend there is one.",
      "That does not mean nobody here needs an IB or IGCSE tutor. A child may be enrolled with an online international school, a parent may be preparing a move to Gurugram or abroad, a family returning from the Gulf may have children halfway through a Cambridge course, or a boarder in Dehradun or Mussoorie may come home for long holidays and want steady support. For each of these, private tuition at home, delivered online by a tutor who has taught the syllabus before, is the practical route.",
      "A word on the phrase home tuition. IB Gram tutors do not travel to Gohana or teach in person anywhere in the town. In-person visits exist only in Gurugram and some parts of Delhi NCR. What we offer here is online home tuition: the student sits at a desk in their own house, a tutor joins by video, and the lesson is one to one with a shared whiteboard and a written note afterwards.",
      "IB Gram is an independent service. We have no tie to the IB, Cambridge, Pearson or any school named on this page. Tutors coach understanding and exam technique, and they never write a student's Internal Assessment, Extended Essay, Theory of Knowledge essay or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Sessions in Indian Standard Time, no bus to Rohtak or Sonipat required",
      "Free trial lesson, then a written rate and schedule",
      "A short written note after every session",
      "No home visits in Gohana; every lesson is live online",
    ],
  },

  programmesIntro:
    "Whichever stage a Gohana child has reached, the tutor's job changes with age. The notes below describe that shift and what each programme demands.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Learning is organised around units of inquiry such as how we express ourselves or where we are in place and time. Children finish with the PYP Exhibition, a group investigation with no external exam.",
      countryNote:
        "For a young child in Gohana the useful help is spoken English, early reading and number sense in short, cheerful sessions, since a Hindi-medium school day leaves little room for either.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are assessed on published criteria rather than a single final paper. Service learning and the Personal Project in the final year ask students to plan, act and reflect.",
      countryNote:
        "A student moving into MYP from a Haryana Board or CBSE background usually struggles first with criterion-based writing, so early lessons practise reading a rubric and building an answer to it.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, sit beside Theory of Knowledge, the Extended Essay and CAS. Final papers come in the May or November session, and internal assessment feeds each subject grade.",
      countryNote:
        "Gohana candidates typically register through a school or online centre elsewhere, which makes a weekly specialist lesson the main place where Physics HL or Mathematics HL gets taught carefully.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two DP courses are combined with a career-related study, a reflective project and language development. It fits students aiming at applied or vocational university routes.",
      countryNote:
        "We know of no school near Gohana running CP. We help with the academic courses and tell families plainly if a different pathway would serve a student better.",
    },
  ],

  subjectsIntro:
    "These IB Diploma courses arrive most often from Haryana families. The registering school or online centre confirms the syllabus version and level, and we plan lessons to match.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Functions, calculus and proof, the usual route for future engineers and for students eyeing JEE-style thinking." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, modelling and technology-led problems, good for commerce, economics and social science plans." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, waves, fields and modern physics, with data-booklet habits and help planning the internal investigation." },
    { name: "Chemistry", levels: "SL and HL", description: "Stoichiometry, energetics, kinetics and organic reactions, with setting-out that earns method marks." },
    { name: "Biology", levels: "SL and HL", description: "Cells, genetics, ecology and physiology, written in exact command-term language." },
    { name: "Economics", levels: "SL and HL", description: "Micro, macro and development topics, with clean diagrams and examples drawn from the Indian economy." },
    { name: "Business Management", levels: "SL and HL", description: "Marketing, operations and finance, including the case-study reading needed for the set paper." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Water, soil and land-use questions that map closely onto Haryana's farming and groundwater debates." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, programming fundamentals and databases." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Close analysis of literary and non-literary texts and preparation for the individual oral." },
    { name: "Hindi B", levels: "SL and HL", description: "Structured reading, writing and speaking practice for the second-language route." },
    { name: "Geography", levels: "SL and HL", description: "Population, resources and hazards, with fieldwork planning for the internal assessment." },
    { name: "Psychology", levels: "SL and HL", description: "Approaches to behaviour, research methods and evaluative essay writing." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion of knowledge questions and exhibition planning; the student writes their own essay." },
  ],
  igcseSubjectsIntro:
    "IGCSE papers run in the May or June and October or November series, with Edexcel adding January for some subjects. These are the courses Haryana families ask about, on Cambridge and Pearson Edexcel.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core and Extended", description: "Number, algebra, geometry and statistics, with separate practice for calculator and non-calculator papers." },
    { name: "Additional Mathematics", levels: "Extended route", description: "Calculus and algebra depth for students heading towards IB Maths AA or the sciences." },
    { name: "Physics", levels: "Core and Extended", description: "Motion, electricity, waves and nuclear physics, plus alternative-to-practical questions." },
    { name: "Chemistry", levels: "Core and Extended", description: "Periodic patterns, reactions, mole calculations and organic basics." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, inheritance, nutrition and ecology, with data interpretation." },
    { name: "Combined Science", levels: "Core and Extended", description: "A joined route through the three sciences for students taking a lighter load." },
    { name: "Economics", levels: "Single tier", description: "Markets, trade and policy explained with local examples." },
    { name: "Business Studies", levels: "Single tier", description: "Enterprise, finance and marketing, including case-based questions." },
    { name: "English as a First Language", levels: "Single tier", description: "Directed writing, summary and composition." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Balanced reading, writing, listening and speaking practice." },
    { name: "Hindi as a Second Language", levels: "Single tier", description: "Offered where the board and series allow, with the code checked first." },
    { name: "Computer Science", levels: "Single tier", description: "Pseudocode, programming and data representation." },
  ],

  regionsTitle: "Gohana areas and villages we teach online",
  tutorsIntro:
    "Gohana lessons are taught over live video by tutors based in India, each with the IB programme or IGCSE specification shown on their card. Meeting one in the free first lesson costs nothing.",
  regionsIntro:
    "Lessons reach any Gohana household with a steady connection. The list below mixes town areas and nearby villages families mention, with practical notes on routes and timing.",
  regions: [
    { name: "Old city and bus stand area", note: "The densest part of town, with shops and coaching rooms close together. Noise and crowding make a quiet online lesson at home more attractive than a walk across the market." },
    { name: "Anaj mandi surroundings", note: "Households tied to the grain trade live here, and the mandi season around wheat and paddy arrivals stretches evenings. Lessons move to later slots in peak weeks." },
    { name: "Rohtak Road side", note: "The approach towards Rohtak, about 45 kilometres away by road, is used by families who travel there for shopping, hospitals and exam centres." },
    { name: "Sonipat Road side", note: "The eastern approach towards Sonipat and then Delhi. Parents who commute or plan a move to the capital region often live on this side." },
    { name: "Railway station area", note: "Households near the station suit students who board elsewhere and travel back for holidays, since sessions continue on the same timetable." },
    { name: "Khanpur Kalan", note: "A village near the women's university campus, where academic households ask about degree pathways after school." },
    { name: "Mundlana", note: "A block-level village area. Farming families here are often first-generation international-curriculum households and appreciate a written note after each session." },
    { name: "Bhainswal Kalan", note: "A village belt where internet reliability varies, so we agree a backup plan such as a mobile hotspot before term begins." },
    { name: "Villages along the Gohana bypass road", note: "Families further out gain the most from online lessons because travel to town eats a large part of the evening." },
  ],
  schoolClusters: [
    {
      city: "Gohana itself",
      note: "We could not confirm any school in the town or its villages teaching the IB or a Cambridge or Edexcel IGCSE syllabus. Schools that advertise an international flavour are, as far as we could check, CBSE or Haryana Board.",
      schools: [],
    },
    {
      city: "Nearby: Sonipat district",
      note: "The nearest place we have recorded an IGCSE school, reached by road from Gohana in roughly an hour. Day travel is long for younger children.",
      schools: ["Apollo International School, Bari (Cambridge IGCSE)"],
    },
    {
      city: "Nearby: Gurugram",
      note: "About 100 kilometres away and the closest large cluster of IB and Cambridge schools. Some Gohana families consider boarding or relocation here, and our tutors keep teaching the same syllabus online afterwards.",
      schools: ["Pathways World School", "Heritage Xperiential Learning School"],
    },
    {
      city: "Nearby: Delhi",
      note: "The wider Delhi region has many established IB schools, and a family posted to the capital can continue with the same tutor online.",
      schools: ["Vasant Valley School, Delhi", "Sanskriti School, Delhi", "The British School, New Delhi"],
    },
  ],
  schoolDisclaimer:
    "School names are listed only as places nearby where confirmed IB or Cambridge programmes exist, taken from public information. IB Gram is an independent tutoring service and has no affiliation with any of them, with the IB organisation, with Cambridge or with Pearson.",

  modesIntro:
    "Because we do not visit Gohana, the choice is about how an online lesson is run, not whether a tutor comes to the door.",
  modes: [
    {
      title: "Online home tuition",
      description: "Live one-to-one lessons the student joins from home on a laptop, with a shared digital whiteboard.",
      bullets: [
        "No tutor travels to Gohana; the lesson is online",
        "Weekly or twice-weekly slots on an Indian evening",
        "Handwritten working shared on screen and sent after class",
      ],
    },
    {
      title: "Exam-season intensives",
      description: "Short blocks before the May or November IB session or the IGCSE series, built around past-paper practice.",
      bullets: [
        "Timed papers, then a line-by-line mark-scheme review",
        "Command-term drills for essay subjects",
        "Plans paused around local festivals and harvest weeks",
      ],
    },
    {
      title: "Small-group online sessions",
      description: "Two or three Haryana students from the same course can share a slot, which lowers the rate.",
      bullets: [
        "Grouped by syllabus and level, never mixed",
        "Suited to revision and problem-solving practice",
        "Any student can move back to one-to-one",
      ],
    },
  ],

  sections: [
    {
      heading: "Who looks for IB and IGCSE tutors in Gohana, and why?",
      paragraphs: [
        "Most enquiries from Gohana fall into four groups. The first are families whose child is enrolled with an online international school, often because a parent works abroad or plans to move, and who need a live teacher to replace the classroom. The second are households preparing a transfer to a Gurugram or Delhi IB school, where the child will arrive a year or two behind the local syllabus unless someone bridges the gap.",
        "The third group is boarders. Haryana families sometimes send a teenager to a boarding school in Dehradun, Mussoorie or further, and the student comes home for winter and summer breaks wanting to keep pace. The fourth is returning Gulf or Western families who settled in Gohana for land, elders or business and whose children are mid-way through a Cambridge or Edexcel course.",
        "None of these families can find an IB Physics specialist by asking around the bazaar. The local tutoring market here is thick with Class 10 and Class 12 board preparation, and deservedly so, but the IB Internal Assessment rubric or the Edexcel paper structure is a different subject. A tutor who has taught the course recently knows where students lose marks.",
        "That is why we match on the exact course code rather than on a subject label. We ask for the programme, the subject, the level, the school or centre, and the exam session, then propose a tutor who has worked with that combination. If the fit is wrong after the trial, we change the tutor without any awkward conversation.",
      ],
      bullets: [
        "Online international school students needing a live teacher",
        "Families preparing to move to Gurugram or Delhi",
        "Boarders home for long holidays",
        "Returning overseas families mid-way through a course",
      ],
    },
    {
      heading: "How do Haryana Board, CBSE, IB and IGCSE compare for a Gohana student?",
      paragraphs: [
        "A Gohana student is most likely to be on the Haryana Board or CBSE track, and either can be a perfectly sound route. The IB and IGCSE differ less in difficulty than in style: more writing, more application, more coursework-like tasks and a habit of explaining why an answer works instead of reciting it.",
        "Haryana Board examinations reward recall of the prescribed textbook, and CBSE adds more application. The IB Diploma stretches across six subjects plus three core elements and assesses depth through internal work. IGCSE sits between, with tiered papers and a single examination per subject, which suits students who prefer clear syllabus boundaries.",
        "For university planning, IB Diploma and IGCSE-then-A-Level students are treated as equivalent for Indian admission through the Association of Indian Universities process, and CUET-UG now applies to many central university seats. The table sets the practical differences side by side so a family can see where tutoring help is likely to matter.",
        "Switching is possible, but it is easier at some points than others. The smoothest moves are into Class 9 for IGCSE and Class 11 for the IB Diploma. Mid-year changes are harder, and a short bridge course of tutoring often helps more than anything else.",
      ],
      table: {
        caption: "Board comparison for a Gohana family choosing a route",
        columns: ["Feature", "Haryana Board / CBSE", "IB Diploma", "Cambridge or Edexcel IGCSE"],
        rows: [
          ["Medium of assessment", "Mostly written papers on a set syllabus", "Papers plus internal assessments, essay and oral work", "Written papers, practical skills papers for sciences"],
          ["Subject choice", "Streams with limited mixing", "Six subjects from different groups", "Wide menu, Core or Extended tiers"],
          ["Typical exam months", "February to March", "May or November", "May or June, October or November, some January"],
          ["Local availability near Gohana", "Widely available", "Not confirmed in the town, reachable online", "Not confirmed in the town, reachable online"],
          ["Where tutoring helps most", "Board-paper practice", "Internal assessment planning and HL depth", "Paper technique and tier choice"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for Gohana students?",
      paragraphs: [
        "We do not publish prices, because the fair rate depends on the programme, the level and how often a student meets the tutor. Every family receives the rate in writing after the free trial lesson and before any booking, so nothing is agreed on the phone in a hurry.",
        "Four things move the rate. The subject matters, because Higher Level Physics or Mathematics calls for a tutor with a particular depth. Frequency matters, since one weekly hour costs less per month than three. Experience matters, from a tutor who completed the IB recently to one who has taught it for a decade. Finally, the format matters: a two-student group costs each family less than a private slot.",
        "What is not in the rate is travel, since nothing is travelled. A Gohana family comparing this with a city tutor should count the fuel and the evening lost on the Rohtak or Sonipat road. A weekly lesson at your own desk removes that cost entirely, and a missed lesson can be rescheduled without losing the trip.",
        "If a budget is tight, tell us at the start. We can suggest fewer, more focused sessions before a paper, a shared slot with a classmate, or a plan that covers only the topics a student finds hardest, rather than a full-year retainer.",
      ],
    },
    {
      heading: "Online home tuition, local coaching or self-study: which suits Gohana?",
      paragraphs: [
        "The comparison below is frank. Coaching institutes in the region are built for Haryana Board, JEE and NEET preparation, and they do that well. They are not built around an IB rubric or an IGCSE mark scheme, so a student following either international course usually ends up with a mismatch.",
        "Private home tutors from nearby towns can be excellent teachers in their own curriculum, but finding one who has taught IB Chemistry HL is rare. Self-study with past papers works for disciplined older students, yet stalls when a concept is unclear and nobody is there to explain it.",
        "Online one-to-one tuition puts a specialist in the room for an hour at a time. Its weakness is connectivity, which is why we agree a fallback before term begins, and its strength is that the tutor can be matched by course code from anywhere in India.",
        "Many families combine the options sensibly: the school or online centre for the syllabus, a tutor for the hard parts, and self-study for practice papers.",
      ],
      table: {
        caption: "How the four study options compare for students in Gohana",
        columns: ["Option", "Syllabus match", "Travel needed", "Best suited to"],
        rows: [
          ["Online one-to-one tuition", "Matched by course code", "None, lesson at home", "IB or IGCSE students who need a specialist"],
          ["Local coaching centre", "Built for Haryana Board, JEE, NEET", "Daily trip into town", "Board and entrance-exam preparation"],
          ["Private tutor from a nearby town", "Usually CBSE or state syllabus", "Tutor or student travels", "Class 9 to 12 board subjects"],
          ["Self-study with past papers", "Exact, if papers are correct", "None", "Disciplined older students as a supplement"],
        ],
      },
    },
    {
      heading: "What does the Gohana school year, harvest and weather mean for exam planning?",
      paragraphs: [
        "Study in Gohana follows the agricultural calendar more closely than families in a metro admit. Wheat harvest in April and the paddy season in October pull older brothers and fathers into the fields, and evenings are shorter or noisier. We plan lessons around the household's real routine rather than an ideal one.",
        "Summers are fierce, with May and June regularly pushing well into the forties, and power cuts or voltage dips can interrupt a laptop. A charged device and a phone hotspot as backup solve most problems. Winter brings dense fog from December to January, which shuts buses and makes morning study attractive indoors.",
        "October and November can bring smoke and haze from stubble burning across the region, and Diwali follows. Wedding season from November to February fills social calendars in Haryana, so we agree which weeks the student cannot attend before setting a timetable.",
        "The IB May session begins in early May and the November session in early November. IGCSE series follow May or June and October or November, with Edexcel January for some subjects. The table places these beside the local calendar to show where pressure lands.",
      ],
      table: {
        caption: "Exam calendar set beside the Gohana year",
        columns: ["Period", "Local conditions", "Exam or study event", "Planning advice"],
        rows: [
          ["January to February", "Fog, cold, wedding season tail", "IB mock papers, Edexcel January series", "Morning lessons indoors, protect mock dates"],
          ["March to April", "Wheat harvest begins", "IB DP internal assessment deadlines", "Shift to late evening during peak weeks"],
          ["May to June", "Heat above 40 degrees, power cuts", "IB May session, IGCSE summer series", "Charge devices, keep a hotspot ready"],
          ["July to September", "Monsoon, waterlogging in low areas", "Content teaching for the new year", "Build steady weekly routine"],
          ["October to December", "Paddy harvest, haze, Diwali, weddings", "IGCSE autumn series, IB November session", "Agree unavailable dates well ahead"],
        ],
      },
    },
    {
      heading: "What university routes open up from Gohana with IB or IGCSE?",
      paragraphs: [
        "The Association of Indian Universities recognises the IB Diploma as equivalent to a Class 12 certificate, and IGCSE is accepted at Class 10 level with an A Level or IB for the next stage. Many Delhi University, Ashoka, Shiv Nadar and private university programmes accept IB scores directly or via their own tests.",
        "CUET-UG is the gateway for many central universities, and IB students should check which subject combinations the course asks for. Engineering through JEE Main requires a recognised Class 12 equivalent, which IB usually satisfies, and medicine through NEET-UG asks for Physics, Chemistry, Biology and English in the qualifying examination. Families should confirm current eligibility with the official notices because rules change.",
        "Local options matter too. Maharshi Dayanand University in Rohtak and Bhagat Phool Singh Mahila Vishwavidyalaya at Khanpur Kalan are within reach, and a student who stays in Haryana can present IB results for admission where accepted. Many students look further, to Delhi, Chandigarh or overseas.",
        "For study abroad, the IB Diploma and Cambridge A Levels are read easily by UK, US, Canadian and Australian admissions offices. We do not predict outcomes or promise places, and tutors never write application essays.",
      ],
      bullets: [
        "Confirm AIU equivalence and subject requirements before choosing subjects",
        "Check CUET-UG, JEE Main and NEET-UG notices every admission year",
        "Keep Mathematics and sciences open if engineering or medicine is possible",
        "Ask about IB acceptance at Haryana universities, which varies",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences taught online for Gohana students?",
      paragraphs: [
        "IB Mathematics comes in two forms. Analysis and Approaches suits students comfortable with algebra and proof, particularly future engineers. Applications and Interpretation is stats-heavy and calculator-led, a better fit for economics, psychology and business paths. A wrong choice costs a year of effort, so we help families decide with a sample of each in the trial.",
        "Online, the tutor writes live on a shared tablet screen, which closely resembles a blackboard. Students photograph their own working and send it in, and we review method marks on the image. For Physics, Chemistry and Biology, the emphasis falls on command terms, data questions and precise definitions.",
        "The Internal Assessment is the hardest part to do alone. Our tutors guide a student to choose a workable question, plan the method and understand the criteria, but the student writes and collects everything. Higher Level students often benefit from a second weekly hour in the months before the paper.",
        "At IGCSE, Core versus Extended is the key decision. Extended opens grades up to A star but covers more content, and moving late is difficult, so we assess the student's algebra and reading speed before advising.",
      ],
    },
    {
      heading: "How do you start with IB Gram from Gohana?",
      paragraphs: [
        "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the programme, subject, level, exam session and the school or online centre. A short message is enough. We reply with a tutor suggestion and a few trial slots, usually within a day.",
        "The first lesson is free. It is a real lesson on a real topic, with time at the end for the family to ask questions. After it we send the rate in writing, along with a proposed weekly schedule, and nothing is booked until you say yes.",
        "After each session the tutor sends a short note: what was covered, what the student found difficult, and what to practise. Parents in Gohana who cannot sit in on a lesson find these notes a reliable way to follow progress.",
        "If the student and tutor do not click, say so. We change the tutor and the free trial rule still applies to the new match.",
      ],
    },
  ],

  process: [
    { title: "Share the course details", description: "Send programme, subject, level, exam session and school or centre by message or email." },
    { title: "Receive a matched tutor", description: "We propose a tutor who has taught that exact course and suggest trial slots in IST." },
    { title: "Take the free trial lesson", description: "Join live online from home and work through real material with the tutor." },
    { title: "Agree the rate in writing", description: "You get the rate and weekly schedule by message before any booking is made." },
    { title: "Learn with written notes", description: "Every session ends with a short note on topics covered and practice to do." },
  ],
  whyPoints: [
    { title: "Matched on course code", description: "A tutor is chosen for your exact IB course or IGCSE specification, not a broad subject heading." },
    { title: "Honest about delivery", description: "We say clearly that nobody visits Gohana and that lessons run live online." },
    { title: "No surprise charges", description: "Rates arrive in writing before you book and no price list is hidden behind a form." },
    { title: "Coaching, not ghost-writing", description: "Tutors teach and review; they never write IAs, Extended Essays, TOK essays or coursework." },
    { title: "Change if the fit is wrong", description: "A different tutor is arranged without friction if the first match does not suit." },
    { title: "Evidence of progress", description: "Written session notes let parents see what was taught and what to revise." },
  ],

  faqs: [
    {
      question: "Are there IB or IGCSE tutors in Gohana?",
      answer:
        "Yes, through live online lessons, though not in person. IB Gram matches a Gohana student with a tutor who teaches the exact IB or IGCSE course over video, one to one. Our tutors live elsewhere in India and teach on Indian Standard Time. We could not confirm a local IB or Cambridge school in the town, so most families rely on a specialist online rather than a classroom nearby.",
    },
    {
      question: "Do tutors come to my home in Gohana?",
      answer:
        "No. Home visits run only in Gurugram and parts of Delhi NCR, and none are offered in Gohana. Online home tuition means your child studies at home on a laptop while the tutor teaches live, one to one, over video. You get the convenience of tuition at home with no travel on either side, and a written note after every lesson.",
    },
    {
      question: "Is there an IB school in Gohana?",
      answer:
        "We could not confirm one. Schools in and around the town follow Haryana Board or CBSE, and none we checked is an authorised IB World School or an approved Cambridge or Edexcel centre. The nearest places we have recorded are in Sonipat district and Gurugram. A family should check the IB organisation's school search or the board's centre list directly before enrolling.",
    },
    {
      question: "What does IGCSE home tuition cost in Gohana?",
      answer:
        "Rates are quoted in writing after a free trial lesson, because they depend on the subject, level, frequency and tutor experience. There is no published price list. Higher Level or Extended content and more weekly hours raise the rate, while a shared two-student slot lowers each family's share. Nothing is added for travel since every lesson is online.",
    },
    {
      question: "Can my child move from Haryana Board or CBSE to IB?",
      answer:
        "Yes, and the cleanest points are entry into Class 9 for IGCSE or Class 11 for the IB Diploma. A child switching mid-stream needs a short bridge of tutoring for criteria-based writing and new vocabulary. Admission depends on a registering school or online centre, which we do not control, but we can prepare the student for the coursework style beforehand.",
    },
    {
      question: "Which IB Mathematics should a Gohana student choose?",
      answer:
        "Analysis and Approaches for students who like algebra, calculus and proof, and Applications and Interpretation for those aiming at economics, business or social science. Engineering aspirants usually take Analysis and Approaches at Higher Level. We run a sample lesson of each in the free trial so a family can see the difference before the school or centre submits the choice.",
    },
    {
      question: "Do you help with the IB Internal Assessment or Extended Essay?",
      answer:
        "We coach, but we never write. A tutor can explain the criteria, help a student pick a workable research question, and review a plan or draft for clarity against the rubric. The investigation, data, writing and final submission must be the student's own work. That rule applies to Theory of Knowledge essays, coursework and all other assessed pieces as well.",
    },
    {
      question: "How do lessons work when the power or internet fails?",
      answer:
        "We agree a fallback at the start. Gohana sometimes faces summer voltage dips and patchy mobile data in outlying villages, so a charged laptop and a phone hotspot are the standard backups. If a lesson drops, the tutor reconnects, continues by phone audio if needed, and any lost time is made up at another slot without an extra charge.",
    },
    {
      question: "Which IGCSE board should we choose, Cambridge or Edexcel?",
      answer:
        "That depends on the school or online centre, since the student sits the board that centre registers. Cambridge offers more subjects and two main series, while Edexcel has a January series in some subjects. The syllabus codes differ, for instance 0580 for Cambridge Mathematics and 4MA1 for Edexcel, so we ask for the code before matching a tutor.",
    },
    {
      question: "When are the IB and IGCSE exams?",
      answer:
        "IB Diploma papers fall in the May session, with a smaller November session for some schools. IGCSE runs in May or June and October or November, and Edexcel adds January for a few subjects. Schools and centres confirm exact dates, which differ by subject and year. For a Gohana student we plan lessons backwards from the paper, allowing for harvest, festivals and fog.",
    },
    {
      question: "Is IB accepted for admission to Indian universities?",
      answer:
        "Yes, the IB Diploma is treated as equivalent to Class 12 through the Association of Indian Universities, and many universities accept IB scores directly. For central universities the CUET-UG route may apply, and JEE Main and NEET-UG have their own eligibility rules. Requirements change every year, so always confirm the current notice from the university or exam body before choosing subjects.",
    },
    {
      question: "Can Gohana siblings share a lesson?",
      answer:
        "Sometimes. Two students on the same course and level can share an online slot, which lowers the rate for each family. Different subjects or levels cannot be combined, because a lesson aimed at two syllabi helps neither child. If siblings are at different stages, we suggest two short one-to-one lessons back to back with a single tutor where possible.",
    },
    {
      question: "What can a tutor realistically do for a struggling student?",
      answer:
        "A tutor can fill conceptual gaps, teach exam technique and build a revision routine. No tutor can promise a grade, and we do not make such promises. What we offer is a match on the exact syllabus, a free trial lesson and a written note after each session, so a family can judge progress from evidence rather than assurances.",
    },
    {
      question: "Do you teach younger children in PYP or MYP?",
      answer:
        "Yes. For PYP the focus is spoken English, early reading and numeracy in short, playful lessons, and for MYP it is criterion-based writing and project planning. The IB Personal Project belongs to the student, so tutors advise on planning and reflection without touching content. Sessions for younger children are kept brief, often thirty to forty minutes.",
    },
    {
      question: "How do I book a free trial lesson from Gohana?",
      answer:
        "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the programme, subject, level, exam session and school. We propose a tutor and trial slots, usually within a day. The trial is a genuine lesson with no charge and no obligation, and a written rate follows only if you want to continue.",
    },
    {
      question: "Are you connected with any school or the IB organisation?",
      answer:
        "No. IB Gram is an independent tutoring service with no affiliation to the IB, Cambridge, Pearson or any school mentioned on this page. School names appear only for geographic context and come from public information. Families should verify a school's authorisation directly with the relevant body before making decisions about enrolment.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "City pages and the online model for students anywhere in the country." },
    { label: "Gurugram home tuition", href: "/gurgaon/", description: "The one place where in-person IB and IGCSE home tuition runs." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How we match tutors to IB programmes and subjects." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject choices for Class 9 and 10." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure, core components and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, projects and where tutoring helps." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry learning for younger children." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches against Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and level." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a short message and receive a tutor match and trial slot." },
    { label: "IB and IGCSE tutors in Rohtak", href: "/rohtak/", description: "The nearest large city, about 45 kilometres from Gohana." },
    { label: "IB and IGCSE tutors in Sonipat", href: "/sonipat/", description: "The district headquarters and the closest recorded IGCSE school." },
    { label: "IB and IGCSE tutors in Panipat", href: "/panipat/", description: "Another Haryana town on the NH44 corridor." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson from your home in Gohana",
  closingBody:
    "Tell us the course, level and exam session, and we will suggest a tutor who has taught it. The first lesson is free, the rate follows in writing, and nobody has to ride to Rohtak or Sonipat. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com to begin.",
};
