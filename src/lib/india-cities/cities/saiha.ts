import type { CitySeoPage } from "../types";

/**
 * Saiha (also spelt Siaha) is the headquarters of Saiha district in the far south of Mizoram, a hill
 * town about 1,225 metres up, some 378 km from Aizawl by NH 54. No school there could be confirmed as
 * an IB World School or a Cambridge or Edexcel centre, so stripSchools is empty and the clusters
 * point to schools verified on other city pages. Strictly non-political: communities are described
 * only through language, schooling and daily life.
 */
export const saiha: CitySeoPage = {
  slug: "saiha",
  countryName: "Saiha",
  countryNameLong: "Saiha, Mizoram",
  demonym: "Saiha",
  flagCode: "in",
  countryCode: "IN",
  region: "Mizoram, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Mid-afternoon or early evening, because dusk comes early in the hills and landslide days can disturb the road and the network",
  lastUpdated: "2026-09-21",
  state: "Mizoram",
  stateCode: "IN-MZ",
  geo: { latitude: 22.4833, longitude: 92.9667 },
  wikipedia: "https://en.wikipedia.org/wiki/Siaha",
  alternateNames: ["Siaha", "Saiha Mizoram", "Saiha district", "Siaha town"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Saiha | Online Private Home Tuition",
  metaDescription:
    "Live one-to-one IB and IGCSE tuition for Saiha students, taught online from home in the Mizoram hills, with subject-matched tutors and a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Saiha",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR SAIHA STUDENTS",
  heroSubtitle:
    "Private tuition from home for IB and IGCSE learners in Saiha, run as live video lessons on a laptop in the family sitting room. The town stands high in the southern hills, hundreds of kilometres from Aizawl by road, so a classroom with an international syllabus is far beyond a daily trip. Instead, a tutor who has taught the exact course joins online. Tell us the programme, the subject and the exam session, and a free trial lesson follows.",
  primaryKeyword: "IB and IGCSE tutors in Saiha",
  imageAltText: "Saiha student in a hillside home taking a live IB English lesson with an online tutor",
  secondaryKeywords: [
    "IB tutor in Saiha",
    "IGCSE tutor in Saiha",
    "IB home tuition Saiha",
    "IGCSE home tuition Saiha",
    "IB private tuition Saiha",
    "IB Maths tutor Saiha",
    "IGCSE Maths tutor Saiha",
    "IB Physics tutor Saiha",
    "IB Chemistry tutor Saiha",
    "IB Biology tutor Saiha",
    "IB DP tutor Saiha",
    "IB MYP tutor Saiha",
    "IB PYP tutor Saiha",
    "IGCSE online tuition Saiha",
    "IB tutor Siaha",
    "IB tuition Siaha Mizoram",
    "IGCSE tutor Lunglei",
    "IB online classes southern Mizoram",
  ],

  heroTrustPoints: [
    "Every class is live and private, never a recording or a crowded batch",
    "Tutors who have handled IB DP, MYP and PYP, and Cambridge and Edexcel IGCSE",
    "Timings set for hill-town daylight and a sometimes fragile network",
    "A free trial class first, then a written note after each session",
    "A swap of tutor at no charge if the match feels wrong",
  ],
  heroStats: [
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before any decision" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "Why Saiha families look to online IB and IGCSE tutors",
    paragraphs: [
      "Saiha is a small, tidy hill town where schooling is taken seriously and English is part of everyday life. Children study under the Mizoram Board of School Education or CBSE, speak Mara, Mizo and English across a single day, and many dream of colleges in Aizawl, Shillong, Guwahati, Bengaluru or overseas. For a handful of households that dream includes an IB Diploma or an IGCSE certificate, usually prompted by a relative abroad or a parent's job outside the state.",
      "Geography is the obstacle. The road to Aizawl runs 378 kilometres along National Highway 54, with a helicopter service as the quicker alternative, and none of the schools in town could be verified as teaching an international curriculum. Sending a child away at twelve is a serious step. IB and IGCSE tutors in Saiha who teach live over the internet let the child remain with the family, in familiar surroundings, while learning from someone who has taught the real papers.",
      "What follows explains how that works at a Saiha address. We look at the schools within reach, how the state board compares with the IB and IGCSE, what shapes a tutor's rate, how the hill climate and the church-centred festival year meet the exam series, where students go afterwards and how subject choices are made. Tutors do not come to homes in Saiha; lessons are online throughout.",
    ],
  },

  programmesIntro:
    "The IB offers four stages and Cambridge and Edexcel offer two IGCSE routes. In southern Mizoram a family usually discovers them from the top down, hearing about the Diploma before anyone explains what the earlier stages involve.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Young children learn through units built on big questions, finishing with an Exhibition. Tutoring is a light weekly visit with reading, counting games, short writing and confident speaking.",
      countryNote:
        "Mizo and Mara are the languages of home for most pupils here, so a kind online tutor can strengthen spoken and written English at an age when it grows fastest.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject areas are marked on published criteria, with a Personal Project at the close. Tutors teach students to decode a task, plan a reply and meet every strand of the rubric.",
      countryNote:
        "Pupils from board-syllabus classes may know their content well but need practice turning knowledge into reasoned, structured answers; weekly online coaching builds that habit.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six courses, Theory of Knowledge, the Extended Essay and CAS make up the Diploma. Tutors concentrate on examined papers and on the method behind internal assessments, never producing an assessed piece themselves.",
      countryNote:
        "A Diploma candidate in the Saiha hills has no Higher Level teacher nearby, which makes a live specialist the most practical way to cover demanding content on schedule.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Selected Diploma courses sit beside a career-related study and a reflective project. Tutors handle the academic courses and the English behind them.",
      countryNote:
        "Practically unknown in this region. It is available on request, and each Diploma course gets its own matched tutor.",
    },
  ],

  subjectsIntro:
    "The tutor is chosen for the specific course, the level and the style of its examiners, and for gentleness with a student who has not yet met IB command terms.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Functions, calculus and reasoned algebra, with the two written papers practised under the clock." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, probability and modelling worked on a graphical calculator until the keystrokes become automatic." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, thermal ideas, waves and fields, with question types on uncertainty and experimental method." },
    { name: "Chemistry", levels: "SL / HL", description: "Bonding, energetics, equilibrium and organic pathways, plus the quantitative accuracy that wins marks." },
    { name: "Biology", levels: "SL / HL", description: "Cell function through ecology, with the hill forests and jhum fields of Mizoram as ready examples." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and development questions, with bamboo, ginger, horticulture and border trade as case material." },
    { name: "Business Management", levels: "SL / HL", description: "Case reading, key formulae and applying a framework to an organisation seen for the first time." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, program structure and the pseudocode form the exam expects." },
    { name: "Psychology", levels: "SL / HL", description: "Landmark studies, how to evaluate them and the shape of a high-scoring essay." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Reading unseen texts closely, writing commentary and comparing works in an argument." },
    { name: "Hindi B", levels: "SL / HL", description: "Reading, writing and speaking for those studying Hindi as an additional language." },
    { name: "Mizo and Mara language support", levels: "School-based", description: "Assistance with a home-language element where a school offers one; in Saiha the household often moves between Mara, Mizo and English each day." },
    { name: "Theory of Knowledge", levels: "Core", description: "Spoken practice on knowledge questions and the exhibition, while the essay is the student's alone." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE tutors are matched by syllabus code, because the two boards lay out their papers differently even for subjects with identical titles.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, geometry and statistics, tackled through repeated timed papers." },
    { name: "Physics", levels: "Core / Extended", description: "Energy, motion, light and electricity, with exam questions on practical skills." },
    { name: "Chemistry", levels: "Core / Extended", description: "Particles, reactions, acids and salts, and an introduction to carbon chemistry." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, human biology, heredity and the environment, plus graph and table reading." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "Designed for schools running double-award science." },
    { name: "English as a First or Second Language", levels: "Core / Extended", description: "Comprehension, directed writing and spoken assessment preparation." },
    { name: "Computer Science", levels: "Single tier", description: "Programming logic, data storage and networks." },
    { name: "Economics and Business Studies", levels: "Single tier", description: "Basic ideas, calculations and short case responses." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Reading, composition and speaking practice." },
    { name: "Geography", levels: "Single tier", description: "Landforms, climate, settlement and fieldwork-style questions, with hill-country examples." },
  ],

  regionsTitle: "Saiha town, Tuipang, Phura and the road north",
  regionsIntro:
    "Pupils live in a compact hill town and in villages scattered along ridges and valleys. For lesson planning, the useful facts are how long the road to town takes, how steady the signal is and which larger centre a family has in mind.",
  regions: [
    { name: "Saiha town", note: "The district headquarters and seat of the Mara Autonomous District Council, on a ridge about 1,225 metres up. Cool air, early dark and short evenings shape the study day." },
    { name: "Chakhei", note: "One of the district's towns and villages named in the official record. Households here depend on the town for secondary school, so the morning commute and the evening return set the timetable." },
    { name: "Phura", note: "Another settlement of the district. Network strength can vary with the ridge, so we test the connection before a trial and keep a second device charged." },
    { name: "Sangau", note: "A district settlement toward the southern edge, where distances to town are long and families often arrange lessons for weekend mornings." },
    { name: "Tuipang", note: "A district town to the south-west, reached by hill road. Heavy rain can slow travel, so classes are booked with a spare slot in the week." },
    { name: "Lawngtlai", note: "The neighbouring district headquarters to the north, a common stop on journeys toward Lunglei and Aizawl and a point many parents weigh for future schooling." },
    { name: "Lunglei", note: "The major town in the south, with colleges and a wider set of schools. Some families look here first when thinking about a move or boarding." },
    { name: "Aizawl", note: "The state capital, 378 kilometres by NH 54 or a shorter helicopter hop, home to the state university and the schools most Saiha families have heard of." },
  ],

  tutorsIntro:
    "Tutors teach from across India on Indian Standard Time. The sun sets early in the east, so Saiha lessons usually sit in the mid-afternoon or early evening, hours when most of our tutors are already online.",

  sections: [
    {
      heading: "Which IB and IGCSE schools can a family in Saiha realistically use?",
      paragraphs: [
        "At the moment, none that we can name with confidence. Saiha has good schools, including some run by churches and institutions of long standing, but we found no verification that any of them is an authorised IB World School or an approved Cambridge or Edexcel centre. Pupils study under the Mizoram Board or CBSE, which is the right base for the great majority of local families.",
        "The nearest established international programmes are outside the state, in Guwahati and Kolkata, and a family seeking a full IB classroom must plan around a long journey. By road, Aizawl alone is a day's travel. That leaves three paths: boarding in another city, relocating with a parent's posting, or studying at home with a specialist online.",
        "The households asking these questions include officers and teachers posted across the Northeast, doctors and engineers who studied elsewhere, and families with relatives in Bengaluru, Delhi or overseas. Their goals are broad, and they want a child's options kept open past the state's board exams.",
        "We keep this page free of school names we cannot check. Should a Saiha school start an international programme, parents will hear before us, and we can begin tutoring against its syllabus within a week of being told.",
      ],
    },
    {
      heading: "Mizoram Board, CBSE, IB and IGCSE: what separates them for a Saiha pupil?",
      paragraphs: [
        "In Mizoram, the state board conducts the High School Leaving Certificate at Class 10 and the Higher Secondary exam at Class 12, with English as the working language of most classrooms. CBSE runs in some schools. After Class 12, science students aim for NEET or JEE Main, and many others choose degree colleges within the state or in Guwahati and Shillong.",
        "The IB values a different skill set. Marks go to application and structured argument, and the Diploma adds an essay, a knowledge course and service. IGCSE sits between the board system and the IB: subject papers at Core or Extended level, a clear syllabus and exams held in fixed series. Changing track is simpler in Class 8 or 9 than in Class 11.",
        "The table is a quick reference for parents weighing a switch.",
      ],
      table: {
        caption: "How the main systems appear from a Saiha household",
        columns: ["System", "How it is assessed", "Language used in class", "Common next step", "Specialist tutors nearby"],
        rows: [
          ["Mizoram Board (HSLC and HSSLC)", "State papers at the end of Class 10 and 12", "English with Mizo or Mara at home", "NEET, JEE Main, colleges in Aizawl and Guwahati", "Several"],
          ["CBSE", "Central board papers at Class 10 and 12", "English", "JEE, NEET, CUET-UG", "A few"],
          ["Cambridge or Edexcel IGCSE", "Tiered papers in fixed series", "English", "Class 11 IB, A Level or an Indian board", "Next to none"],
          ["IB Diploma", "Exams plus internal assessments, essay and CAS", "English", "AIU recognition, CUET-UG, study abroad", "None"],
        ],
      },
    },
    {
      heading: "How is the cost of IB and IGCSE tuition in Saiha worked out?",
      paragraphs: [
        "No price list is published for IB and IGCSE tuition in Saiha, because the cost of a plan depends on a few facts about the child. The rate is written out and sent to you before any trial is booked, so you never have to settle money in a hurried phone call.",
        "Programme and level carry the most weight. A Higher Level Diploma Physics tutor with long experience of the papers is priced differently from someone coaching a Class 6 MYP learner. Rarity also matters; a tutor who can teach Further Mathematics or HL Chemistry is harder to find than a generalist.",
        "How often and for how long also shape the monthly figure. Two lessons a week through a school year differs from a three-week sprint before a November exam. We describe the arrangement first and then price that arrangement, not a number that fits nobody.",
        "A realistic comparison for a Saiha parent is the cost of getting a child to Aizawl or beyond for classes, with long bus or helicopter trips, lodging and missed school. A live lesson from the family sitting room removes those expenses entirely.",
      ],
      bullets: [
        "Programme and level (SL, HL, Core, Extended)",
        "How hard it is to find a tutor in the subject",
        "Number of lessons per week and the plan's length",
        "Regular support against short exam-season blocks",
      ],
    },
    {
      heading: "Online tutoring, city coaching, local teachers and self-study: which suits a Saiha student?",
      paragraphs: [
        "Four options are open. A live private online tutor brings real syllabus knowledge to the house without travel. Coaching classes in Aizawl, Guwahati or Kolkata offer depth but require relocation or long trips. A local teacher knows the community and the state syllabus, though few have prepared pupils for international papers. Self-study with past papers rewards only the most self-disciplined learner.",
        "They can be mixed. Many families keep a local teacher for Mizo or a general subject and add an online specialist where exam technique matters most, usually in Mathematics and the sciences.",
      ],
      table: {
        caption: "Four ways to study IB or IGCSE from Saiha",
        columns: ["Option", "Subject depth", "Travel", "Scheduling", "Suits"],
        rows: [
          ["Live private tutor online", "High, matched to the exact course", "None", "Afternoons, evenings and weekends, easily shifted", "Every programme and subject"],
          ["Coaching in a larger city", "High but pitched at a group", "Very long, with lodging", "Fixed batches", "Families already relocating"],
          ["Local teacher in town", "Mostly state-board and CBSE training", "Little", "Fairly flexible", "Revision on a familiar syllabus"],
          ["Self-study from past papers", "Depends on the learner", "None", "Fully self-set", "A very disciplined older student"],
        ],
      },
    },
    {
      heading: "How do hill weather, the church calendar and exam series fit together in Saiha?",
      paragraphs: [
        "The first thing to plan around is the monsoon. Southern Mizoram receives heavy rain from late spring to early autumn, and slips on hill roads can cut supplies, power and the mobile network for a day or more. Weekly plans carry a reserve slot, and a missed class is rearranged with a short message.",
        "Saiha's year is shaped by church and community more than by any other calendar. Christmas and New Year are the high points, with preparation, choir practice and visiting filling December. Chapchar Kut in March and local harvest gatherings add further breaks. The exam series of the IB, Cambridge and Edexcel land in May and June, and again in October and November, so dates must be fixed early.",
        "At 1,225 metres, the town is cool, and winter evenings can be cold and dark by five. Lessons in daylight or early evening, with a warm study corner, work best.",
      ],
      table: {
        caption: "Calendar pressure points for a Saiha student",
        columns: ["Months", "What is happening", "Effect on study", "How tutoring adapts"],
        rows: [
          ["Jan to Mar", "Board exams, Chapchar Kut, early IGCSE series", "Busy exam weeks and festival breaks", "Mock papers on fixed dates, short sessions"],
          ["Apr to Jun", "IB May session, onset of heavy rain", "Slips on roads, patchy network", "Afternoon slots, reserve classes"],
          ["Jul to Sep", "Peak monsoon, school reopens, IB results in July", "Disruption and settling into new topics", "Foundation lessons, flexible moves"],
          ["Oct to Nov", "Autumn exam series, build-up to December", "Mocks as the festive season approaches", "Compact revision blocks, dates agreed early"],
          ["Dec", "Christmas, New Year, IB January results", "Long break, many family events", "Light review, planning for the next term"],
        ],
      },
    },
    {
      heading: "Where can a Saiha student go after IB or IGCSE?",
      paragraphs: [
        "A Diploma holder from southern Mizoram has three broad directions: universities in India, universities overseas and professional courses. The Association of Indian Universities provides an equivalence certificate for the Diploma, and a growing number of institutions also consider CUET-UG scores. In the state itself, Mizoram University and NIT Mizoram, both in Aizawl, are the main public options.",
        "Engineering and medicine need extra care. A Diploma with Mathematics, Physics and Chemistry or Biology can be steered toward JEE Main or NEET, though eligibility rules change, so check the latest notices before fixing subjects. Beyond the state, Guwahati, Shillong, Kolkata, Bengaluru and Delhi are the common destinations.",
        "IGCSE graduates go on to Class 11 in the IB, A Level or an Indian board. For study abroad, the United Kingdom, Canada, Australia and the United States are popular, and predicted grades with school references carry weight in those applications.",
        "A tutor helps a family see how subject choices made now keep later routes open. A student who drops Mathematics at fifteen may find several degrees unavailable at seventeen.",
      ],
    },
    {
      heading: "What does IB Mathematics and Science tutoring look like online?",
      paragraphs: [
        "Mathematics Analysis and Approaches suits learners who enjoy calculus, algebra and proof, and it is the usual route toward engineering or pure science. Applications and Interpretation leans on data, modelling and technology, a good match for future economists, biologists and social scientists. Both are offered at Standard and Higher Level, and a trial class often shows which fits.",
        "A tutor fills the spaces school teaching may leave: an unfinished unit, hesitant use of the graphical calculator, or solutions that skip method marks. Paper 1 and Paper 2 each have their own rhythm, so timed work under exam conditions forms part of the plan.",
        "In the sciences, Physics repays a feel for units and magnitudes, Chemistry exposes weak mole arithmetic, and Biology pays for exact vocabulary. The tutor uses a shared whiteboard and past questions, and a parent receives a short note afterwards.",
        "Higher Level students gain from longer sessions before mocks because the content runs deeper. Standard Level students tend to do better with short, steady lessons than with rare, long ones.",
      ],
    },
    {
      heading: "Core or Extended, Cambridge or Edexcel: how does a Saiha student choose IGCSE tiers?",
      paragraphs: [
        "Cambridge IGCSE gives Core and Extended papers in most subjects. Core restricts the highest grade, while Extended spans the whole scale, so a student planning to take Mathematics or a science further normally enters Extended. Pearson Edexcel uses Foundation and Higher tiers on the same principle.",
        "Where a child stands today and where they want to go decide the tier. A pupil aiming for the Diploma or A Level in science should generally sit the upper tier. Someone finding the content difficult may be safer at the lower tier, and a tutor can judge that after a few weeks of lessons.",
        "The mix of subjects matters as much as the tier. A sound spread of languages, mathematics, sciences and a business or humanities subject protects options in Class 11. Tutors explain what each choice opens and how school-assessed parts differ between boards.",
        "For pupils from classrooms where English is a second or third language, extended writing is the usual hurdle. Directed writing, summary and structured answers improve markedly with regular practice and feedback in a term or two.",
      ],
    },
  ],

  schoolClusters: [
    {
      city: "Saiha and the southern districts",
      note: "No school here could be confirmed as an authorised IB World School or a listed Cambridge or Edexcel centre. Local schools follow the state board or CBSE, so choice for IB and IGCSE is very limited.",
      schools: [],
    },
    {
      city: "Nearby: Guwahati",
      note: "Guwahati has an established international school and is the main gateway city of the Northeast. It is far from Saiha, so it suits boarding or relocation rather than commuting.",
      schools: ["International School Guwahati"],
    },
    {
      city: "Nearby: Kolkata",
      note: "Kolkata holds longer-established IB and Cambridge schools and is reachable by air via Aizawl or Guwahati. Best seen as an option for families already planning a longer move.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
  ],
  schoolDisclaimer:
    "School names are listed only to show where genuine IB or Cambridge options lie for Saiha families. IB Gram is an independent tutoring service with no tie to any school, the IB, Cambridge or Pearson, and every admission is decided by the school concerned.",

  modesIntro:
    "No tutor visits homes in Saiha, so all three formats are delivered online; home visits belong only to Gurugram and parts of Delhi NCR. Each format is live, private and fitted to the rhythm of a hill-town day.",
  modes: [
    {
      title: "Live private lessons at home",
      description: "The main format: your child, the family laptop and a specialist who knows the board and level.",
      bullets: ["One tutor and one student on a shared whiteboard", "Past questions taken apart step by step", "A short written summary for parents after each class"],
    },
    {
      title: "Concentrated exam preparation",
      description: "A tighter run of classes in the weeks before school mocks and the May or November series.",
      bullets: ["Papers sat on the clock, then reviewed line by line", "Command terms and mark schemes rehearsed", "Reserve slots for landslide and outage days"],
    },
    {
      title: "A gentle weekly class",
      description: "One session a week in one subject, enough to keep pace with school without crowding the evenings.",
      bullets: ["Sensible in MYP and early IGCSE years", "Paused around Christmas week", "Subject can be changed later"],
    },
  ],

  process: [
    { title: "Write to us", description: "Send the board, subject, level and exam session over WhatsApp or email, with any note about the school's pace." },
    { title: "Meet the tutor", description: "A specialist who has taught that exact course is shortlisted, and a short profile arrives before the first class." },
    { title: "Attend the trial", description: "A real class on a real topic, so your child can sense the tutor's style before anything is settled." },
    { title: "Review the fee", description: "If the trial works, the fee and lesson plan are sent in writing. Nothing starts without your agreement." },
    { title: "Learn steadily", description: "Regular live classes with a written note after each, and a change of tutor if the pairing is not right." },
  ],

  whyPoints: [
    { title: "A specialist for your paper", description: "A Diploma Economics student is not handed a generalist. The tutor has already taught the course your child will sit." },
    { title: "Planned for the hills", description: "Slots allow for early dusk, rain, slips and network trouble, with reserve classes built in." },
    { title: "Candid about local options", description: "If no school nearby offers your programme, we say so plainly and describe what follows." },
    { title: "Records you can read", description: "A brief summary after each class sets out what was covered and what comes next." },
    { title: "Coaching, not ghost-writing", description: "Tutors explain method and content, and never write internal assessments, essays or coursework." },
    { title: "Free to walk away", description: "The trial costs nothing, fees are put in writing and a new tutor is arranged at no extra charge." },
  ],

  faqs: [
    { question: "Is it possible to get an IB tutor while living in Saiha?", answer: "Yes, through live video. We could not find an IB specialist teaching in Saiha itself, so the tutor joins from elsewhere in India while your child studies at home. Matching follows programme, subject and level, and the person chosen has taught the actual papers, a skill a teacher trained for the state board is unlikely to have." },
    { question: "Does a tutor ever come to the house in Saiha?", answer: "No. In-person visits are available only in Gurugram and parts of Delhi NCR, and Saiha is outside that area. You get online tuition at home instead: a private live class on your laptop, with a specialist picked for the subject rather than for living close by." },
    { question: "Is online home tuition properly one-to-one?", answer: "Yes. Each class has one teacher and one learner, never a batch. The phrase home tuition here means private tuition received at home with the tutor on screen. A parent may sit in at first for a younger child, and a written note after every class records topics covered, difficulties met and the next step." },
    { question: "Are there any schools in Saiha teaching IB or IGCSE?", answer: "We found none that we could verify. Schools in the town and district follow the Mizoram Board or CBSE. The nearest international programmes are outside the state, in Guwahati and Kolkata. If a Saiha school announces one, tell us and tutoring on its syllabus can start in about a week." },
    { question: "How is the price of IB tuition decided?", answer: "By the programme and level, how rare qualified tutors are in the subject, how many classes a week you want and how long the plan lasts. We publish no prices. After hearing about your child we put a figure in writing, and this happens before any trial is scheduled." },
    { question: "Can a child from a Mizoram Board school move to IGCSE?", answer: "Yes, and it is easiest before Class 9. A state-board student usually needs bridging in written English, Mathematics and Science. A later switch is harder but still possible. A trial class lets a tutor find the gaps and estimate how many weeks of preparation are sensible." },
    { question: "What happens to lessons when the road or network goes down?", answer: "Each weekly plan includes a reserve slot, and any class can be shifted with a short message. A missed session is rearranged, not lost. We suggest keeping a second charged device and mobile data in reserve, since classes are live and no recording stands in for them." },
    { question: "Will a tutor write my child's IA or Extended Essay?", answer: "No, never. Tutors explain criteria, show what strong work looks like and comment on drafts the student has written. The topic, research, argument and wording stay with the student, which is what the IB requires and what moderators look for in submitted work." },
    { question: "Do you teach both Cambridge and Edexcel IGCSE?", answer: "Yes. Their papers, tiers and exam series differ, so we match the tutor by board code as well as subject. Tell us which board your child is registered with. AS and A Level tutoring can also be arranged for students planning that route afterwards." },
    { question: "What separates Core from Extended papers?", answer: "Core covers a smaller part of the syllabus and limits the top grade. Extended goes wider and opens every grade. A student expecting to continue Mathematics or a science usually sits Extended. Edexcel offers Foundation and Higher on a similar basis. A few weeks of lessons show which tier is realistic." },
    { question: "How far ahead of an exam should we begin?", answer: "Four to six months gives comfortable room for a major exam, and ten to twelve weeks is the shortest sensible window. The IB Diploma examines in May and November, and IGCSE boards run several series each year. In Saiha, leave a few extra weeks for monsoon disruption." },
    { question: "Will Indian universities accept an IB Diploma?", answer: "Broadly yes. The Association of Indian Universities issues an equivalence certificate, and many institutions also accept CUET-UG scores. Engineering and medicine need more care, because JEE and NEET eligibility changes. Settle subject choices early and check each university's requirements before applying." },
    { question: "What internet setup does a lesson need?", answer: "A few megabits per second suffice, along with a laptop, headphones and a working microphone. Keep mobile data as a backup. On ridge-top settlements signal can waver, so try a test call a day before the trial and make sure a second device is topped up." },
    { question: "Is the trial lesson free with no strings?", answer: "Yes. The first class is free and carries no obligation to continue. It is a proper lesson, not a sales pitch. After it you receive a written rate and nothing begins until you agree. If the tutor feels wrong for your child, a replacement is arranged without a fee." },
    { question: "What if my child and the tutor do not click?", answer: "We swap the tutor at no cost. Compatibility matters more than most parents expect, especially with younger students and hard subjects. Tell us whether pace, manner or style was the problem and we shortlist someone else. Our class notes also help us see early when a pairing is off." },
    { question: "My child is in Class 8 and may join an IB school later. Can you prepare her?", answer: "Yes. In the term before a move, a bridging plan covers MYP-style tasks, written English and whatever the entrance test will probe. A tutor who has taught MYP helps a child arrive at ease. We never promise a place, because only the school decides admission." },
    { question: "What is the quickest way to start?", answer: "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with the programme, subject, level, board and exam session. A tutor suggestion and a trial time usually come back within a day, and the fee is shown in writing before anything is booked." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "How this online service reaches students in towns and cities nationwide." },
    { label: "IB tutors, all programmes", href: "/ib-tutors/", description: "A fuller picture of how IB tutoring is organised." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects, each with tutors who know the board." },
    { label: "Diploma Programme help", href: "/programmes/dp/", description: "Subject coaching across Classes 11 and 12." },
    { label: "Middle Years Programme help", href: "/programmes/myp/", description: "Guidance on criterion-based tasks from Class 6 to 10." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "Analysis and Approaches alongside Applications and Interpretation." },
    { label: "Meet the tutors", href: "/tutors/", description: "The people who teach IB and IGCSE with us." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or request a trial class." },
    { label: "IB and IGCSE tutors in Aizawl", href: "/aizawl/", description: "The Mizoram state capital, 378 kilometres north of Saiha by road." },
    { label: "IB and IGCSE tutors in Lunglei", href: "/lunglei/", description: "The large southern Mizoram town on the way to Aizawl." },
    { label: "IB and IGCSE tutors in Guwahati", href: "/guwahati/", description: "The Northeast's gateway city, home to the region's established international school." },
  ],

  closingHeading: "Book a free trial class at home in Saiha",
  closingBody:
    "Share your child's programme, subject and exam session. A tutor is lined up, a trial class is arranged and the fee is stated in writing before you commit to anything. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp. IB Gram is independent and is not linked to the IB, Cambridge, Pearson or any school.",
};
