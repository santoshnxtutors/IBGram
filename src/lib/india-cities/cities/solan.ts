import type { CitySeoPage } from "../types";

/**
 * /solan/ - IB and IGCSE tutoring page for Solan, Himachal Pradesh. Online-only delivery: tutors do not
 * visit homes in Solan, since in-person tuition exists only in Gurugram and parts of Delhi NCR.
 * Checked against edustoke's Solan listing (Dagshai Public School under ICSE, KTS Public School and
 * Gurukul International under CBSE) and Wikipedia (Solan, Solan district, Lawrence School Sanawar, listed
 * as CBSE). No IB or Cambridge/Edexcel school could be confirmed in the district, so stripSchools is empty
 * and the clusters reuse names already checked on chandigarh.ts and dehradun.ts, labelled as nearby.
 */
export const solan: CitySeoPage = {
  slug: "solan",
  countryName: "Solan",
  countryNameLong: "Solan, Himachal Pradesh",
  demonym: "Solan",
  state: "Himachal Pradesh",
  stateCode: "IN-HP",
  flagCode: "in",
  countryCode: "IN",
  region: "Himachal Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings once the school bus is back and homework is done, weekend mornings, and a lighter July and August when monsoon slips can close the highway",
  lastUpdated: "2026-09-21",
  geo: { latitude: 30.9081, longitude: 77.0983 },
  wikipedia: "https://en.wikipedia.org/wiki/Solan",
  alternateNames: ["Solan HP", "Mushroom City of India"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Solan | Online Tuition from Home",
  metaDescription:
    "IB and IGCSE tutors for Solan students: PYP, MYP, DP and Cambridge or Edexcel IGCSE taught one to one online, timed around hill-road school runs. Free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Solan",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR SOLAN, THE MUSHROOM CITY",
  heroSubtitle:
    "Private IB and IGCSE home tuition for Solan arrives as live one-to-one video lessons, not as a tutor at the door, because house visits run only in Gurugram and parts of Delhi NCR. The town has Himachal Board, CBSE and ICSE schools but none we could confirm for the IB or Cambridge, so we look across India for a specialist who has taught your child's exact subject, level and exam session.",
  primaryKeyword: "IB and IGCSE tutors in Solan",
  imageAltText: "Solan student at a laptop in a hill-town home, following a live IB Chemistry lesson with an online tutor",
  secondaryKeywords: [
    "IB tutor Solan",
    "IGCSE tutor Solan",
    "IB home tuition Solan",
    "IGCSE home tuition Solan",
    "IB private tuition Solan",
    "IB Maths tutor Solan",
    "IGCSE Maths tutor Solan",
    "IB Physics tutor Solan",
    "IB Chemistry tutor Solan",
    "IB Biology tutor Solan",
    "IB DP tutor Solan",
    "IB MYP tutor Solan",
    "IB PYP tutor Solan",
    "IGCSE online tuition Solan",
    "Cambridge IGCSE tutor Solan",
    "IB tutor Solan Himachal Pradesh",
    "IB tutor Chambaghat Solan",
    "IGCSE tutor Baddi",
    "IB tutor Kasauli",
    "IB tutor Parwanoo",
    "online IB tutor Himachal Pradesh",
    "IGCSE tutor Waknaghat",
  ],

  heroTrustPoints: [
    "Matched on your child's exact IB subject and level, or IGCSE syllabus code, never on a loose subject label",
    "Lessons are live and one to one on video; no tutor visits homes in Solan, since home visits run only in Gurugram and parts of Delhi NCR",
    "A free trial lesson on your child's own material, then a written rate before you agree to anything",
    "Independent of every Solan school and university, the IB, Cambridge and Pearson Edexcel",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB continuum" },
    { value: "Cambridge & Edexcel", label: "Both IGCSE boards" },
    { value: "Online only", label: "No home visits in Solan" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "Private IB and IGCSE help in a mid-hill town without an IB school",
    paragraphs: [
      "Search for IB home tuition in Solan and what you are really asking for is one-to-one help at a desk in your own house. That is what a Solan family gets from us, with one honest adjustment: the tutor arrives over video, not through the door. IB and IGCSE tutors in Solan do not travel to homes, because in-person tuition exists only in Gurugram and parts of Delhi NCR. The second fact shaping this page is that we could not confirm a single school in the town as teaching the IB or Cambridge IGCSE.",
      "A published listing of Solan schools shows Dagshai Public School under ICSE, and KTS Public School and Gurukul International Senior Secondary School under CBSE. None carries an IB or Cambridge tag. Government schools follow the Himachal Pradesh Board, and the district's best-known boarding campus, the Lawrence School at Sanawar near Kasauli, is listed as CBSE-affiliated. Affiliations do change, so ask any school for its current number before deciding anything.",
      "So who asks about the IB here? Pharmaceutical managers working along the Baddi, Barotiwala and Nalagarh corridor who may be transferred again. Scientists at the Directorate of Mushroom Research in Chambaghat and the horticulture university at Nauni. Lecturers at Shoolini and Jaypee, army families posted at Dagshai, Subathu or Kasauli, and parents whose child already boards in the Doon Valley or Chandigarh. Each wants a curriculum that travels with the child, and each finds that nobody nearby has recently taught it.",
      "IB Gram is an independent tutoring service with no tie-up to any school in Solan district, to any university, or to the IB, Cambridge or Pearson. A tutor explains, questions and marks practice work. The Internal Assessment, Extended Essay, TOK essay and coursework are written by the student, and a tutor's feedback is a conversation or a margin note, never a rewritten paragraph.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Live video lessons with a shared whiteboard, on Indian Standard Time",
      "A free trial lesson first, then a rate in writing before you commit",
      "A short written note after every session",
      "No tutor visits in Solan; in-person tuition runs only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Nothing in the town, as far as we can verify, runs any of the four IB programmes. A Solan family therefore meets the IB sideways: through a boarding school elsewhere, a posting that has just moved them, or a plan to leave the Himachal Board or CBSE route. This is what tutoring looks like at each stage, written for that situation.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "A PYP classroom is organised around six transdisciplinary themes rather than a fixed run of subject periods, and the final year closes with the Exhibition, a group inquiry shown to the whole school. No external exam appears anywhere. A tutor's work is modest but useful: reading aloud, comfort with number, and showing a child how to turn a passing curiosity into a question that can actually be researched.",
      countryNote:
        "Enquiries from Solan usually come from a family just posted to the Baddi industrial belt or a cantonment, with a child arriving from a PYP school in a metro. The first weeks go to rebuilding the reading and number routines that the move disturbed.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Every MYP subject is marked on four criteria, so a parent used to a single percentage sees four separate band scores instead. Units link subjects through global contexts, and the programme closes with the Personal Project, a self-chosen piece of work carried over many months. Marks most often leak where a student describes when the criterion asks for analysis or evaluation.",
      countryNote:
        "A child moving from a Himachal Board or CBSE class into an MYP school in Class 8 or 9 usually needs the command language of the criteria taught first. Content is rarely the obstacle; the phrasing of the task is.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma candidate studies six subjects, three at Higher Level and three at Standard Level, and adds Theory of Knowledge, the Extended Essay and CAS. Internal assessments feed into each subject grade. The May session reports in early July and the November session in January, so the calendar is set by the IB, not by the school.",
      countryNote:
        "For Solan the Diploma is something a student reaches by boarding elsewhere or by moving, so tutoring follows the registered school's term dates, not a local timetable. Weekday evenings and the long breaks carry most of the work.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP pairs two or three Diploma courses with a career-related study, a reflective project, language development and service learning. It suits a student who wants applied study and a route into work or a vocational degree, and the Diploma courses inside it are taught at full depth.",
      countryNote:
        "We know of no CP school in or near Solan, so enquiries are rare. When one arrives, the tutor concentrates on the chosen Diploma courses and the language component, and says plainly if the student would be better placed on the full Diploma.",
    },
  ],

  subjectsIntro:
    "These are the IB Diploma courses Solan enquiries mention most. For each one, the tutor works from the syllabus version and level of the school where the student is registered, which we confirm before the first lesson.",
  subjects: [
    { name: "IB Mathematics: Analysis and Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof, aimed at future engineers and scientists. At HL the Paper 3 problems are unfamiliar by design, so sessions mix technique with open-ended work and fix the Exploration topic early." },
    { name: "IB Mathematics: Applications and Interpretation", levels: "HL / SL", description: "Statistics, modelling and graphic-calculator fluency. A good Exploration uses real data, and Himachal supplies it readily: monsoon rainfall, apple and tomato prices, tourist numbers through the season." },
    { name: "IB Physics", levels: "HL / SL", description: "Unit discipline and the clock decide most marks, followed by whether the individual investigation uses a method a moderator would trust. Mechanics, fields and wave phenomena get the most repetition." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Equilibrium, energetics and organic mechanisms carry the difficulty, and the practical write-up improves with a second marking pass against the published criteria." },
    { name: "IB Biology", levels: "HL / SL", description: "Command terms such as outline, distinguish and evaluate separate similar answers. A student curious about mushroom cultivation can talk through whether a question is workable; the experiment and report stay entirely theirs." },
    { name: "IB Environmental Systems and Societies", levels: "SL / HL", description: "A natural fit for a hill district, with watersheds, land use and monsoon runoff to reason about. Strong answers question the system instead of summarising it." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams earn quick marks and weighing policy trade-offs earns the higher ones. HL adds quantitative questions on Paper 3, and the internal commentaries rest on articles the student chooses." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying theory to the case in front of you beats reciting it, so past case studies anchor most sessions. HL students also need a real organisation for the research project." },
    { name: "IB Geography", levels: "HL / SL", description: "Hazards, resource pressure and population, plus fieldwork design for the internal. Slope failure and road cuttings in the Himalayan foothills make vivid, local illustrations beside the set case studies." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Paper 1 commentary and the Paper 2 comparative essay reward drilled technique more than flair, and the individual oral needs rehearsing aloud, not silently." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode, data structures and the internal solution. Sessions spend real time at the keyboard because the IA needs code that runs and documentation that matches it." },
    { name: "IB Psychology", levels: "HL / SL", description: "Three approaches, research methods and long-response structure. The grade usually turns on whether an essay stays organised once the clock starts." },
    { name: "IB Hindi A / B", levels: "HL / SL", description: "Register and text type cost the most marks early, well before the oral. Useful for households that speak Hindi at home but have never written for an examiner." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions practise questioning, not memorising: testing exhibition objects and defending a prescribed title against counter-arguments. The essay is always the student's own." },
  ],

  igcseSubjectsIntro:
    "Cambridge IGCSE sits in the May-June and October-November series, and Pearson Edexcel International GCSE adds a January series for some subjects. The courses below come up most often from Solan, and the tutor confirms the syllabus code and tier your child's school or exam centre has fixed before planning anything.",
  igcseSubjects: [
    { name: "IGCSE Mathematics (0580 / 4MA1)", levels: "Core / Extended", description: "Students from board schools often calculate correctly but slowly. Extended punishes lost time on the non-calculator Paper 2 more than a wrong final answer, so pacing is drilled alongside algebra and trigonometry." },
    { name: "IGCSE Additional Mathematics (0606)", levels: "Grade 10", description: "Calculus and vectors appear earlier than in Indian boards, which makes this a useful stepping stone towards IB Mathematics Analysis and Approaches." },
    { name: "IGCSE Physics (0625 / 4PH1)", levels: "Core / Extended", description: "Rearranging equations quickly and reading graphs carefully lose more marks than the physics itself, and the alternative-to-practical paper gets sessions of its own." },
    { name: "IGCSE Chemistry (0620 / 4CH1)", levels: "Core / Extended", description: "Reacting masses, electrolysis and organic basics. Practical skills are rehearsed by describing experiments aloud, since few students run every one in a lab." },
    { name: "IGCSE Biology (0610 / 4BI1)", levels: "Core / Extended", description: "Inheritance, ecology and the longer extended-response questions, with data handling practised on real graphs rather than textbook sketches." },
    { name: "IGCSE Environmental Management (0680)", levels: "Single tier", description: "A good match for a hill district: natural resources, energy, pollution and sustainability, with local examples to anchor evaluative answers." },
    { name: "IGCSE Geography (0460)", levels: "Single tier", description: "Map skills, fieldwork enquiry and case studies; landslides, floods and terraced farming are ready local illustrations." },
    { name: "IGCSE Economics (0455)", levels: "Single tier", description: "Markets, trade and government, with diagram accuracy first and written evaluation second, which is where most of the higher marks sit." },
    { name: "IGCSE English as a First Language (0500)", levels: "Single tier", description: "Summary, directed writing and composition. Timed practice on unseen passages beats vocabulary lists." },
    { name: "IGCSE Computer Science (0478)", levels: "Single tier", description: "Computational thinking and pseudocode on paper, plus Python that actually runs; both skills get equal time." },
    { name: "IGCSE Hindi as a Second Language (0549)", levels: "Single tier", description: "Reading, writing and speaking practice, with the exact specification code confirmed before the first session." },
  ],

  regionsTitle: "Solan localities and nearby towns reached by online lessons",
  regionsIntro:
    "Every lesson runs over video, so an address matters only as context: which school catchment a family belongs to, how the hill road and the weather shape the evening, and when the household is free. These are the places families mention most.",
  regions: [
    { name: "Chambaghat", note: "Home to the Directorate of Mushroom Research and an industrial estate, so many scientist and technician households live here. Evenings follow traffic on the Shimla side of the highway." },
    { name: "The Mall and Thodo Ground", note: "Solan's old core, where the Motilal Nehru Central State Library has stood since 1959 and the Shoolini fair gathers each June. A quiet online lesson avoids the market crowd." },
    { name: "Rajgarh Road and Jatoli", note: "The road towards the Jatoli Shiv temple, a sloping residential edge of town where steep lanes and evening buses make a trip out for tuition a real chore." },
    { name: "Bajhol", note: "Where Shoolini University's campus stands, with a lecturer and student population that includes parents weighing international degree routes." },
    { name: "Nauni", note: "The campus village of Dr Y S Parmar University of Horticulture and Forestry, home to research and teaching households." },
    { name: "Kandaghat and Waknaghat", note: "Highway towns on the Shimla side. Waknaghat holds the Jaypee University of Information Technology, so computing and engineering staff families are common." },
    { name: "Dharampur and Kasauli", note: "South of Solan, where the road to Kasauli and the Sanawar boarding campus branches off; cantonment, boarding and hospitality households, many of them between postings." },
    { name: "Subathu and Dagshai", note: "Cantonment stations in the lower hills. Dagshai Public School is listed under ICSE, and army families here often ask about a curriculum that survives a transfer." },
    { name: "Parwanoo and Kumarhatti", note: "Parwanoo is the industrial gateway where Himachal begins on the Haryana border, and Kumarhatti has Manav Bharti University. Many residents commute to Chandigarh and Panchkula." },
    { name: "Baddi, Barotiwala and Nalagarh", note: "The 35 km pharmaceutical corridor in the plains below Solan, with Baddi University of Emerging Sciences and Technologies, Maharaja Agrasen University and Chitkara University HP. Closer to Chandigarh than to Solan town, and a steady source of transfer-based enquiries." },
  ],

  schoolDisclaimer:
    "This page names no school in Solan district as an IB or Cambridge provider, because the published listing we checked showed only CBSE and ICSE affiliation and nothing else could be confirmed. Schools named in the Chandigarh tricity and the Doon Valley appear only as places Himachal families look at, not as partners. IB Gram has no agreement, sponsorship or endorsement with any school mentioned here, with the IB Organization, with Cambridge Assessment International Education or with Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Solan district itself",
      note: "A published listing showed ICSE and CBSE schools only, with the Himachal Board covering the government sector. We confirmed no IB World School or Cambridge/Edexcel centre in the district, including the boarding campuses near Kasauli, so a family here relies on a tutor and on a school elsewhere for registration.",
      schools: [],
    },
    {
      city: "Nearby: Chandigarh tricity, roughly 70 km by road",
      note: "About two hours down NH5 depending on traffic. The tricity holds the nearest checked IB and Cambridge campuses, and some Solan households relocate to Mohali or Chandigarh once a child reaches Class 9 or Class 11.",
      schools: ["Strawberry Fields High School, Sector 26", "Firststeps School, Sector 26", "Oakridge International School, Mohali"],
    },
    {
      city: "Nearby: Dehradun and Mussoorie boarding belt",
      note: "A long journey east, yet the Doon Valley is where many Himalayan families send a child for an international boarding curriculum. A Solan student boarding there comes home for term breaks, which is when online lessons fill the gaps.",
      schools: ["SelaQui International School", "Ecole Globale International Girls' School", "Unison World School", "Woodstock School, Mussoorie"],
    },
    {
      city: "Nearby: Shimla, about 45 km north",
      note: "Shimla's famous schools follow ICSE, ISC or CBSE, and we found no confirmed IB or Cambridge campus there either, so the capital is not a fallback for an international curriculum.",
      schools: [],
    },
  ],

  modesIntro:
    "Home visits run only in Gurugram and parts of Delhi NCR, so all three Solan formats below are delivered live on video. They differ in rhythm, not in quality: a steady weekly slot, a block built around a boarder's holidays, or a concentrated run into an exam series.",
  modes: [
    {
      title: "A steady weekly slot",
      description:
        "One tutor, one student and the same hour each week, fixed around the school run and the evening's homework. Most Solan families start here, because a regular pace suits the long Indian school year better than bursts do.",
      bullets: [
        "The same tutor every week, not a rotating roster",
        "Works for IB DP, MYP, PYP and IGCSE alike",
        "Past papers marked live on the call",
        "A second weekly slot can be added before mocks",
      ],
    },
    {
      title: "Boarding-break and winter-break blocks",
      description:
        "For a child who boards in the Doon Valley, Chandigarh or elsewhere and comes home for the long holidays. Sessions run daily or on alternate days for a fortnight, tackling the topics the term left behind.",
      bullets: [
        "Planned from the boarding school's own holiday dates",
        "A topic list agreed with the student first",
        "Timed papers with written feedback",
        "A foggy morning or snow day does not cancel an online lesson",
      ],
    },
    {
      title: "A sprint into the exam series",
      description:
        "In the six to eight weeks before a May or November series, lessons tighten into timed papers followed by corrections. It works best when booked early, before a good tutor's evenings fill with other candidates.",
      bullets: [
        "Papers marked against the current mark scheme",
        "Feedback inside days, not weeks",
        "Weak topics re-taught before the next paper",
        "Best booked two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Who looks for IB and IGCSE tutors in Solan, and why?",
      paragraphs: [
        "Mostly families whose lives already extend beyond the hills. Pharma managers on the Baddi, Barotiwala and Nalagarh corridor, scientists at Chambaghat and Nauni, cantonment households and university staff form the core, together with parents who have a child boarding elsewhere. What unites them is not a local school, since none is confirmed, but a plan: a child who may be transferred, relocated or sent abroad needs a curriculum that travels.",
        "Pharma is the clearest case. The Baddi-Barotiwala-Nalagarh belt is a 35 km manufacturing corridor, and managers posted there sometimes arrive from metros where their children already studied the IB or Cambridge. Many choose a home in Solan or Parwanoo for the climate, then discover that the nearest international campus is in the Chandigarh tricity or the Doon Valley.",
        "Defence households form a second group. Dagshai, Subathu and Kasauli all have cantonments, and a posting lasts a few years before the next one arrives. A family that settled on the IB for its portability will keep it alive in Solan through tutoring rather than change curriculum at every transfer.",
        "The third group is academic. Dr Y S Parmar University at Nauni, Shoolini and Jaypee at Waknaghat employ lecturers who studied abroad or hope to send children there, and the mushroom research directorate brings scientists on rotation. For all three groups the first question is the same: which exam session is the child sitting, and through which registering school?",
      ],
      table: {
        caption: "Solan households and what they usually need from a tutor",
        columns: ["Household", "Typical situation", "What tutoring covers"],
        rows: [
          ["Pharma and industry managers around Baddi, Barotiwala, Nalagarh and Parwanoo", "A child arrived from an IB or Cambridge school in a metro", "Continuity in the same course and level until the next move"],
          ["Cantonment and defence families at Dagshai, Subathu and Kasauli", "Frequent postings, so the curriculum must travel", "Gap repair after each move and a steady weekly slot"],
          ["University and research staff at Nauni, Bajhol, Waknaghat and Chambaghat", "A plan for a study-abroad route", "DP sciences and Maths, predicted-grade planning"],
          ["Boarding families with a child in the Doon Valley or Chandigarh", "Away in term, home on breaks", "Holiday blocks built from the boarding school's calendar"],
          ["Himachal Board or CBSE families weighing a switch", "Considering IGCSE from Class 9", "Command-word practice and Core versus Extended advice"],
        ],
      },
      bullets: [
        "No Solan school is confirmed for the IB or Cambridge, so demand arrives by other routes",
        "Pharma, defence, university and boarding households make up most enquiries",
        "A plan to relocate or study abroad is the usual trigger",
        "Matching goes by exam session and registering school, not by postcode",
      ],
    },
    {
      heading: "How do Himachal Board, CBSE, ICSE, IGCSE and IB differ for a Solan student?",
      paragraphs: [
        "They differ mainly in what the paper asks you to do. Himachal Board and CBSE papers draw heavily on prescribed textbooks and clear recall, ICSE adds longer written answers, while IGCSE and the IB set unfamiliar scenarios and expect an argument built from the data in front of you. A Solan student who has memorised well will find the content familiar and the wording strange.",
        "Internal assessment is the second divide. Board classrooms in the hills rely almost entirely on the final paper, whereas the IB attaches a coursework piece to nearly every subject, worth roughly a fifth to a third of the grade. IGCSE practical papers test experimental thinking even for students who rarely handle apparatus. Working from a published criteria sheet is a skill, not a talent, and it can be taught.",
        "Direction decides which path makes sense. A student aiming at JEE Main for NIT Hamirpur or at NEET for a medical seat will often stay on CBSE with coaching in Chandigarh. A student aiming at a university in the UK, Canada, Australia or Europe is better served by IGCSE followed by the Diploma, or by A Levels.",
        "Neither route is superior, and we say so plainly when a family's goals fit the board route better, because a switch made for the wrong reason costs a year of confidence. Send current marks and target countries and we will give you a straight view.",
      ],
      table: {
        caption: "Boards a Solan family typically compares",
        columns: ["What matters", "Himachal Board", "CBSE and ICSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Where Solan students meet it", "Government schools and many private ones", "Private schools in the town and cantonments", "Only through schools outside the district", "Only through schools outside the district"],
          ["Question style", "Textbook-led, recall-heavy", "Concept and application; ICSE expects longer answers", "Structured, data-driven and tiered", "Analytical essays and unfamiliar contexts"],
          ["Internal work", "Light", "A modest share of the grade", "Practical paper or coursework in some subjects", "A fifth to a third of most subject grades, plus core tasks"],
          ["Usual onward route", "State universities; JEE and NEET with coaching", "JEE, NEET, CUET-UG, Delhi and Chandigarh colleges", "A Levels, the IB Diploma or Class 11 elsewhere", "Indian and overseas universities, with AIU equivalence for India"],
        ],
      },
      bullets: [
        "Content often feels familiar; the wording of IB and IGCSE questions is what surprises",
        "Coursework and criteria are new habits for most board students",
        "The goal decides the board: entrance exams or overseas universities",
        "We say so when the board route is the better fit",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost in Solan, and what sets the price?",
      paragraphs: [
        "There is no published price list, because the rate follows the tutor and the course rather than the town. A figure reaches you in writing before the trial lesson, and nothing is charged until you agree. Four things drive it: the programme and level, how scarce the subject is, the length and frequency of sessions, and how close the exam is.",
        "Scarcity does most of the work. A tutor who has recently marked IB Physics HL or taught Mathematics Analysis and Approaches at Higher Level sits above one covering IGCSE Core subjects, simply because fewer people can do it well. Uncommon pairings such as Psychology HL or Computer Science HL also sit above very common ones.",
        "Geography changes nothing for a Solan bill. A tutor in Pune, Chennai or Chandigarh costs the same as one anywhere else, because no travel enters an online lesson. Set that against what a family would spend driving a child down NH5 to a Chandigarh tutor twice a week, in fuel and in an evening gone.",
        "Judge value by what fills the hour. A tutor who knows this year's mark scheme gets further in one session than a generalist does in two. We review progress every few weeks, pausing costs nothing, and a tutor who is not clicking is replaced rather than kept out of politeness.",
      ],
      bullets: [
        "Subject scarcity and level move the rate more than the town does",
        "The rate is quoted in writing before the free trial",
        "No travel cost enters a Solan online lesson",
        "Pausing or changing tutor carries no extra charge",
      ],
    },
    {
      heading: "Which works better in Solan: an online tutor, a coaching class, a home tutor or self-study?",
      paragraphs: [
        "For IB and IGCSE tutors in Solan the verdict is that a live one-to-one tutor who has taught the exact syllabus usually works best, because each alternative falls short in a specific way. Coaching in the town is built for board exams and entrances, local home tutors rarely know international mark schemes, and self-study leaves errors uncorrected.",
        "Walk along the coaching lanes near the Mall and Chambaghat and the batches advertise Class 10 and 12 board revision, JEE and NEET foundations and school-subject tuition. That is the demand a town of this size can fill. We found nothing local aimed at IB or Cambridge syllabuses, and a batch for IB Chemistry HL or IGCSE Additional Mathematics would struggle to fill a room.",
        "A good local home tutor is easy to find for ordinary school subjects. The search narrows sharply for someone who has marked Cambridge Physics 0625 alternative-to-practical papers or coached an IB Internal Assessment this year. Self-study can carry a disciplined student through IGCSE Mathematics on past papers, but it cannot read an Exploration draft and say what to fix.",
        "Online one-to-one turns a local supply of nearly zero into a national one. A Solan student keeps the hours that would have gone on hill roads, works with a person who knows the specification, and can still add a local class for Himachal Board or CBSE subjects alongside.",
      ],
      table: {
        caption: "Four ways to get help, compared for a Solan student",
        columns: ["Option", "Fit with the IB or IGCSE syllabus", "Attention per student", "Main gap in Solan"],
        rows: [
          ["Online one-to-one tutor", "Chosen for the exact subject, level and series", "Individual", "Needs a steady connection; keep a hotspot as backup"],
          ["Local coaching class", "Weak; built for board exams and entrances", "Shared across a batch", "Nothing aimed at the IB or Cambridge that we could find"],
          ["Local home tutor", "Varies; few know international mark schemes", "Individual", "Recent IB or IGCSE marking experience is hard to find"],
          ["Self-study", "Depends on the student", "None", "No second reader for IAs, essays or extended answers"],
        ],
      },
      bullets: [
        "Coaching in the town is organised around boards and entrances",
        "Few local tutors know IB or Cambridge mark schemes",
        "Self-study cannot replace a second reader",
        "Online one-to-one widens the pool from the district to the country",
      ],
    },
    {
      heading: "Monsoon slips, mountain winters and the exam year in Solan",
      paragraphs: [
        "At roughly 1,500 metres Solan keeps a calendar unlike the plains. July and August each bring more than 200 mm of rain on average, which is when slips on the Kalka-Shimla highway and the link roads become a regular fact of life. Winters are cold, with occasional snowfall and foggy mornings, and the tourist surge towards Shimla in May and June thickens traffic through the town.",
        "None of this touches an online lesson, but it does shape the year. The IB May session and the Cambridge May-June series fall just before the monsoon, and results arrive during it: IB results in early July, Cambridge June-series results in August. The November sessions sit in clear autumn weather, a good time for mock papers.",
        "Festivals matter too. The Shoolini fair each June at Thodo Ground, Dussehra and Diwali in the autumn, and Lohri in January each take a few evenings out of the week. We plan them as agreed pauses ahead of time instead of letting them turn into cancellations.",
        "Himachal's academic session starts in April and the Himachal Board's Class 10 and 12 exams fall in March, so a child studying both a local board and an international syllabus meets a crowded spring. A tutor can sequence the two so that one does not swallow the other.",
      ],
      table: {
        caption: "A Solan year for an IB or IGCSE student",
        columns: ["Period", "What Solan is like", "What it means for lessons"],
        rows: [
          ["December to February", "Cold, foggy mornings, occasional snow; Lohri in January", "Mock papers and topic repair; slots shift later on foggy mornings"],
          ["March to April", "Himachal Board exams in March; new session in April", "Board revision sequenced around international work"],
          ["May to June", "IB and IGCSE papers, tourist traffic, the Shoolini fair", "Final revision and short timed papers"],
          ["July to September", "Heavy monsoon; IB results in July, IGCSE results in August", "Foundations for the new year; road closures cost nothing online"],
          ["October to November", "Clear weather, Dussehra and Diwali, the November series", "Mock exams and final review around festival days"],
        ],
      },
      bullets: [
        "July and August are the wettest months, with slips on the highway",
        "Snow and fog affect roads, not an online lesson",
        "Festival weeks are agreed pauses, not surprises",
        "Plan Himachal Board and international papers in sequence",
      ],
    },
    {
      heading: "Where do Solan students go after IB or IGCSE?",
      paragraphs: [
        "Three routes stay open at once: an Indian university, a competitive seat through an entrance exam, or a degree abroad. The Association of Indian Universities treats the IB Diploma as equivalent to Class 12, which is the document most admissions offices ask for. IGCSE leads on to A Levels, the IB Diploma or Class 11 elsewhere, so it is really a Class 11 decision.",
        "Locally, Solan has more higher education than its size suggests. Shoolini University of Biotechnology and Management Sciences and the Jaypee University of Information Technology are private universities, Dr Y S Parmar University at Nauni leads in horticulture and forestry, and Chitkara University HP, Baddi University and Maharaja Agrasen University sit further down the valley. Chandigarh and Delhi remain the usual next step for others.",
        "An IB or IGCSE background does not close entrance-exam doors, but eligibility rules differ. CUET-UG admits IB candidates through its registration rules, JEE Main for NIT Hamirpur and JEE Advanced for IIT Mandi expect Physics, Chemistry and Mathematics in the qualifying examination, and NEET asks for Physics, Chemistry, Biology and English. Read each year's information bulletin, because rules change.",
        "Abroad, the number that matters first is the predicted grade a school issues in the autumn of the final year. UK offers are conditional on IB points with Higher Level minimums, while US applications weigh it among several other things. We do not advise on admissions; we raise the grade and the understanding behind it.",
      ],
      bullets: [
        "AIU equivalence makes the IB Diploma valid for Indian university entry",
        "Shoolini, Jaypee Waknaghat and Nauni offer degrees inside the district",
        "CUET-UG, JEE and NEET each set their own subject rules",
        "Predicted grades carry weight in overseas applications",
      ],
    },
    {
      heading: "IB Maths AA or AI, and the three sciences, for a student in Solan",
      paragraphs: [
        "The Maths choice turns on temperament as much as on career. Analysis and Approaches suits a student who enjoys proof, algebra and calculus and is heading for Physics or Engineering. Applications and Interpretation suits one who prefers data, statistics and technology and is looking at Economics, Business, Psychology or design. They are different courses, not easy and hard versions, and each exists at HL and SL.",
        "Because the Exploration counts for a fifth of the Maths grade, we ask students to settle on a topic in the first week of a break, not the last. Himachal offers plenty of material: rainfall patterns at Solan, the economics of apple and tomato prices, the geometry of hairpin roads. The topic and every written word belong to the student.",
        "The three sciences share one demand, an internal investigation that would persuade a moderator. Physics HL adds time pressure across its papers, Chemistry HL leans on organic mechanisms once the opening bonding unit is behind a student, and Biology comes down to answering the exact command term rather than writing everything you know.",
        "A tutor who has taught the current syllabus matters here, because the three science guides were revised for first assessment in 2025 and someone who learned them from the old guide will prepare the wrong paper structure. For a student far from any lab that welcomes outsiders, the tutor helps plan the question and method, while the experiment, data and write-up stay the student's.",
      ],
      bullets: [
        "AA suits proof-minded students; AI suits data-minded ones",
        "Choose the Exploration topic early",
        "The sciences were revised for 2025, so use a current-syllabus tutor",
        "The investigation, data and write-up are always the student's work",
      ],
    },
    {
      heading: "Choosing between IGCSE Core and Extended, and picking subjects, from Solan",
      paragraphs: [
        "Tiering is new to families used to a single paper. In tiered subjects such as Mathematics, the sciences and English as a Second Language, Core caps the grade a student can reach, while Extended reaches the top grades. The choice, made in Class 9 or early Class 10, shapes how comfortable Class 11 feels: a student aiming for IB Maths AA or any science stream should be heading for Extended.",
        "A typical package has English, Mathematics, one to three sciences, a language such as Hindi, and electives. For hill-town students Environmental Management and Geography carry an advantage, because landslides, watersheds and land-use change supply concrete cases for evaluative answers. Additional Mathematics adds calculus and vectors and eases the later step to the Diploma.",
        "Cambridge and Pearson Edexcel differ more than their shared label suggests. Paper layout, coursework in some subjects and the phrasing of questions all vary, so we start from the syllabus code and the school's exam entry and tailor practice to that. A tutor who knows both specifications saves a student from rebuilding exam technique from scratch.",
        "A candidate who is not enrolled in a school that sits the papers must apply through an authorised exam centre, and the nearest ones are in cities such as Chandigarh. Registration closes well before each series. We explain the steps but register no one, and the centre decides practical arrangements.",
      ],
      bullets: [
        "Core caps the grade; Extended reaches the top",
        "Environmental Management and Geography suit hill-town examples",
        "Additional Mathematics smooths the step to IB Maths AA",
        "Private candidates register through an authorised centre",
      ],
    },
  ],

  tutorsIntro:
    "Meet India-based tutors for IB PYP, MYP and Diploma subjects and for Cambridge or Edexcel IGCSE. Each card shows the programmes and subjects the tutor has taught, and every Solan match is checked against your child's exact syllabus and exam session before the free trial.",

  process: [
    { title: "Send the brief", description: "Programme or board, subject and level, registering school, exam session, and the evenings that work in Solan." },
    { title: "Meet a matched tutor", description: "We propose one tutor who has taught that exact course, with a short profile and weekly times in IST." },
    { title: "Take the free trial", description: "A real lesson on your child's own material, online, with no charge and no obligation." },
    { title: "Approve the plan in writing", description: "Topics, pace, the rate and how progress will be reported arrive on paper before you agree." },
    { title: "Settle into a rhythm", description: "A weekly slot, a short note after each lesson, a review every few weeks and a new tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched to the syllabus", description: "Tutors are picked for the IB subject and level or the IGCSE code and tier, not for a loose subject label." },
    { title: "Built for a town without an IB school", description: "With none confirmed in Solan, we search across India for a specialist who has taught the course recently." },
    { title: "Honest about format", description: "Lessons are live online; tutors never visit homes in Solan, and home visits run only in Gurugram and parts of Delhi NCR." },
    { title: "Students keep their own work", description: "Tutors coach, and the Internal Assessment, Extended Essay, TOK essay and coursework are never written for a student." },
    { title: "Progress on paper", description: "A written note follows every session and a longer review arrives every few weeks." },
    { title: "Easy to change", description: "No tie to any school, no long contract, and another tutor on request." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Solan?", answer: "Send us your child's IB programme, subject, level and exam session by WhatsApp or email, and we propose one tutor who has taught that exact course. Because Solan has no IB school we could confirm, matching runs across India instead of across town. Lessons are live one-to-one video calls on Indian Standard Time, a free trial comes first, and you can ask for a different tutor if the fit is wrong." },
    { question: "Do IB and IGCSE tutors visit homes in Solan?", answer: "No, they do not. In-person home tuition exists only in Gurugram and parts of Delhi NCR, and Solan is outside it. A Solan family gets private tuition from home instead: a live one-to-one lesson on video with a shared whiteboard, taken at your own desk. Many hill-town households find this removes the school-run travel on NH5 and the uncertainty of monsoon roads." },
    { question: "Is there an IGCSE tutor in Solan for Cambridge and Edexcel?", answer: "Yes, as a live online tutor matched to your child's board and syllabus code. A tutor for Cambridge IGCSE or Pearson Edexcel International GCSE teaches Mathematics, the sciences, Environmental Management, Economics, English and more, working from the right past papers and mark schemes. Tell us the code and tier, such as 0580 Extended or 4CH1, and we confirm a specialist exists before the trial." },
    { question: "Which schools in Solan teach IB or IGCSE?", answer: "We could not confirm any. A published listing of Solan schools shows ICSE and CBSE affiliations only, and the Himachal Board covers government schools. The nearest checked IB and Cambridge campuses are in the Chandigarh tricity and the Doon Valley. Families set on an international curriculum usually relocate, board a child there, or study privately and register through a school elsewhere, so check any school's current affiliation yourself." },
    { question: "What does IB or IGCSE tuition cost for a student in Solan?", answer: "The rate depends on the programme, level, subject scarcity, session length and how often you book, and it is confirmed in writing before the trial. Diploma Higher Level work generally costs more than IGCSE Core subjects. Because teaching is online, Solan adds no travel cost, and nothing locks you into a long contract. We publish no price list, so ask for a quote on the exact subject." },
    { question: "My child boards in the Doon Valley. Can lessons run in the holidays?", answer: "Yes, and this is a common request from Solan households. We match a tutor to the subject, level and syllabus the boarding school follows, then plan daily or alternate-day blocks around its holiday dates. During term, evening slots are possible only if the school permits them. A short topic list agreed with your child at the start keeps the break focused." },
    { question: "Can a tutor help with the IB Internal Assessment or Extended Essay?", answer: "A tutor can guide the process but never write it. That means helping a student choose a workable research question, read what each criterion rewards, plan data collection and respond to feedback on a draft. Writing or rewriting assessed work breaks IB integrity rules, so our tutors decline it. The words, data and analysis in the IA, Extended Essay, TOK essay and coursework stay the student's." },
    { question: "Does snow or a landslide on the Kalka-Shimla highway affect lessons?", answer: "Not the lesson itself. A blocked highway or a snow day can cancel school buses, but an online lesson needs only power and a connection. If an outage hits, we reschedule without penalty. During heavy monsoon weeks and January cold snaps we suggest a mobile hotspot as a backup, and a laptop charged for the full hour." },
    { question: "What internet connection do we need in the hills?", answer: "A steady home broadband line or a reliable 4G connection is enough for a video lesson. We test audio and video during the free trial and note any weak spots, such as evenings when the signal sags. Tell us your locality, whether Chambaghat, Kandaghat or Baddi, so we can plan a backup. Headphones with a microphone improve clarity noticeably." },
    { question: "Which IB Diploma subjects can you cover for Solan students?", answer: "Most mainstream Diploma subjects, at HL and SL. These include both Maths routes, Physics, Chemistry, Biology, Economics, Business Management, Geography, English A, Computer Science, Psychology, Environmental Systems and Societies and Hindi, plus Theory of Knowledge and Extended Essay guidance. Rarer combinations take a little longer to match, and we say plainly if no suitable specialist is free." },
    { question: "Do you tutor IB MYP and PYP students as well as the Diploma?", answer: "Yes, across the whole continuum. PYP tutoring strengthens reading, writing and number sense and supports the research habits behind the Exhibition. MYP tutoring focuses on four-criteria marking in sciences, humanities and languages, and on the Personal Project's process journal. Solan families often ask for this after a transfer into an IB school, when a child needs help catching up on unit language." },
    { question: "My child is moving from a Himachal Board or CBSE school to IGCSE. How hard is the switch?", answer: "It is manageable with early preparation. Content gaps are usually smaller than expected; command words and unfamiliar question styles cause the shock. Extended tier Maths and sciences go beyond what many board classes cover by Class 10. We suggest starting a term before the move, practising past-paper phrasing such as explain, justify and evaluate, and deciding Core versus Extended with the school." },
    { question: "Is the IB Diploma accepted by Indian universities?", answer: "Yes. The Association of Indian Universities treats the IB Diploma as equivalent to Class 12, and many universities accept it directly. Individual courses still set their own subject and mark requirements, and CUET-UG, JEE and NEET have separate eligibility rules for IB and IGCSE students. Always read the current notice for each course, and ask us if you would like help decoding it." },
    { question: "When should a Solan student begin IB or IGCSE tutoring?", answer: "As early as the course starts, which means Class 9 for IGCSE and Class 11 for the Diploma. That leaves time to fix foundations before internal exams, IA deadlines and predicted grades arrive together. A student starting in the exam year can still improve if sessions target high-value topics and genuine past papers. Late starters should book a pre-exam sprint of six to eight weeks." },
    { question: "Is there a free trial lesson?", answer: "Yes. Every match begins with a free online trial lesson on a real topic from your child's own syllabus, with no obligation. Afterwards you receive a short plan and a rate in writing. If you want to go ahead, lessons begin at the agreed weekly time; if not, nothing is owed. A different tutor can be requested at any point." },
    { question: "Can lessons run in the evening or at weekends?", answer: "Yes. Most Solan families choose weekday evenings after the school run and homework, plus one weekend morning. In winter a slightly later start can suit foggy mornings, and festival weeks such as Diwali or the Shoolini fair can be agreed as pauses in advance. All times are in Indian Standard Time, and a second weekly slot can be added before mocks." },
    { question: "What if my child does not get along with the tutor?", answer: "Tell us and we find another. Progress is reviewed every few weeks, and a change happens as soon as something is clearly not working. No long contract binds you, and pausing or stopping lessons carries no penalty. A tutor stays only while the student is genuinely learning from the sessions." },
    { question: "Can families in Baddi, Nalagarh or Parwanoo use the same service?", answer: "Yes. Every lesson is online, so any address in Solan district with a stable connection works. Many Baddi, Barotiwala and Nalagarh families are closer to Chandigarh than to Solan town, and the steps are identical: send the course and session, take the free trial, and receive the rate in writing before you decide." },
    { question: "Is IB Gram affiliated with any school or examination board?", answer: "No. IB Gram is an independent tutoring service with no affiliation to, or endorsement from, any school in Solan district, any university, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. Tutors follow your child's own school calendar and the board's published syllabus." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How we match IB and IGCSE tutors for families in towns without an IB school." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one area where tutors also teach in person at the student's home." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "How tutors are selected and matched to each IB programme." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel boards, tiers and subject packages explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, core requirements and internal assessment in the Diploma." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, projects and where a tutor helps in the MYP." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition for younger children." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "How the CP combines Diploma courses with career-related study." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches set beside Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and availability." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a short brief to get a tutor match and a free trial slot." },
    { label: "IB and IGCSE tutors in Shimla", href: "/shimla/", description: "The state capital, 45 km north, where lessons also run online." },
    { label: "IB and IGCSE tutors in Chandigarh", href: "/chandigarh/", description: "The nearest city with checked IB and Cambridge campuses." },
    { label: "IB and IGCSE tutors in Panchkula", href: "/panchkula/", description: "Online matching for the Haryana side of the tricity." },
    { label: "IB and IGCSE tutors in Dehradun", href: "/dehradun/", description: "The Doon Valley boarding hub many Himalayan families consider." },
  ],

  closingHeading: "Book a free trial lesson with an IB or IGCSE tutor in Solan",
  closingBody:
    "Tell us the programme or board, the subject and level, how your child is doing now, and the evenings that suit your household. We will come back with one of our IB and IGCSE tutors in Solan matched to that brief, an honest account of their teaching background, and a trial slot, all one to one over video with nothing owed until you decide to continue. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
