import type { CitySeoPage } from "../types";

/**
 * /lonavla/ - IB and IGCSE tutoring page for Lonavla (Lonavala), Pune district, Maharashtra. No school in Lonavla is
 * confirmed to teach IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and clusters reuse Pune, Mumbai and Navi
 * Mumbai names from existing pages. Angle: weekend-home and naval families between Mumbai and Pune. All lessons online.
 */
export const lonavla: CitySeoPage = {
  slug: "lonavla",
  countryName: "Lonavla",
  countryNameLong: "Lonavla, Maharashtra",
  demonym: "Lonavla",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings and quiet Sunday mornings that dodge monsoon-weekend tourist traffic, Ganeshotsav and the SSC and HSC weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 18.7546, longitude: 73.4062 },
  wikipedia: "https://en.wikipedia.org/wiki/Lonavala",
  alternateNames: ["Lonavala", "Lonavala Khandala", "Lonavla Pune district"],
  stripSchools: [],

  title: "Lonavla IB & IGCSE Tutors | Online Home & Weekend Tuition",
  metaDescription:
    "IB and IGCSE tutors for Lonavla, Khandala and Kamshet families: live one-to-one online lessons that follow students between Mumbai, Pune and home. Free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Lonavla",
  heroEyebrow: "IB & IGCSE LESSONS THAT FOLLOW YOUR CHILD TO LONAVLA",
  heroSubtitle:
    "Private tuition from home for Lonavla students and for Mumbai or Pune children who spend weekends and holidays in the hills: a live one-to-one online lesson with a tutor who knows the IB or IGCSE course. The laptop travels up the ghat with the family, so a missed Saturday class becomes a lesson from the verandah instead.",
  primaryKeyword: "IB and IGCSE tutors in Lonavla",
  imageAltText: "A student on a Lonavla balcony with misty Sahyadri hills behind, taking a live online IB Maths lesson on a laptop",
  secondaryKeywords: [
    "IB tutor Lonavla",
    "IGCSE tutor Lonavla",
    "IB home tuition Lonavla",
    "IGCSE home tuition Lonavla",
    "IB private tuition Lonavla",
    "IB Maths tutor Lonavla",
    "IGCSE Maths tutor Lonavla",
    "IB Physics tutor Lonavla",
    "IB Chemistry tutor Lonavla",
    "IB Biology tutor Lonavla",
    "IB DP tutor Lonavla",
    "IB MYP tutor Lonavla",
    "IB PYP tutor Lonavla",
    "IGCSE online tuition Lonavla",
    "IB tutor Lonavala",
    "IGCSE tutor Khandala Kamshet",
    "online IB tutor Lonavla Pune district",
    "Cambridge IGCSE tutor Lonavala",
  ],

  heroTrustPoints: [
    "Tutors who have already taught the exact IB course or IGCSE syllabus code",
    "Sessions are online in Lonavla; tutors visit homes only in Gurugram and parts of Delhi NCR",
    "A brief written recap after each class and a simple way to switch tutor",
    "A free trial lesson first, with the rate put in writing before you book",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Every IB stage" },
    { value: "Cambridge + Edexcel", label: "Both IGCSE boards" },
    { value: "Weekend-friendly", label: "Hill house or city flat" },
    { value: "Free trial", label: "Try a lesson before paying" },
  ],

  intro: {
    heading: "A hill town between two IB cities, and what that means for tuition",
    paragraphs: [
      "Lonavla sits on the crest of the Sahyadri ghats, on the rail line and expressway that join Mumbai and Pune, and its population is unlike most Maharashtra towns of its size. There are hotel and chikki-trade families who have lived here for generations, naval households connected to the training establishment at INS Shivaji, staff of the yoga institute at Kaivalyadhama, and a very large number of Mumbai and Pune families who keep a bungalow or flat here for weekends.",
      "Each group has its own reason to ask about the IB or IGCSE. A weekend-home family wants its child, enrolled at a Mumbai or Pune international school, to keep up on Fridays and Mondays when the drive to school is impossible. A naval family that expects a transfer wants continuity of course. A local family may be preparing a daughter for a Pune boarding seat.",
      "We could not verify any school inside Lonavla that teaches the IB or the Cambridge or Pearson Edexcel IGCSE, so none is named as local; search listings do mention a few boarding schools here, but their board offerings could not be confirmed. The schools we can verify are in Pune and in Mumbai and Navi Mumbai, two to three hours away by road in weekend traffic.",
      "Our lessons therefore happen on a screen. The tutor may be anywhere in India, the student sits at a desk in the Lonavla house or the city flat, and a shared board carries the working. We are independent of the IB, Cambridge, Pearson and every school mentioned here, and tutors never author a student's assessed coursework, Extended Essay or TOK essay.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, and Cambridge and Edexcel IGCSE",
      "Live one-to-one teaching in English, from tutors across India",
      "One free trial lesson before any fee comes up",
      "No tutor visits in Lonavla; home visits exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "In Lonavla, the IB stage a child is in usually depends on the city school they attend or plan to attend. The notes below explain what each stage expects and how a lesson from a hill-town desk can help.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "Children work through themed inquiry units and close the programme with a self-directed Exhibition. Nothing is sat as an external paper. A tutor keeps the sessions light: read aloud, tidy handwriting, number games and a question or two about how things work.",
      countryNote:
        "A Lonavla child who joins a Pune or Mumbai PYP class mid-year often needs reading and spoken-English confidence built quietly over a few weekends.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Marks come from criteria in each subject, and projects and investigations count alongside tests. The Personal Project near the end asks for planning, research and honest reflection. Students who come from Marathi-medium classrooms often need practice turning knowledge into a structured English answer.",
      countryNote:
        "Families shuttling between a city school week and a Lonavla weekend use MYP lessons to keep criteria-based writing moving on Saturdays.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three or four at Higher Level, plus TOK, an Extended Essay and CAS. A full score is 45 with up to three bonus points from the core, and papers are taken in May or November. Internal assessments run through both years and lift or lower every subject grade.",
      countryNote:
        "DP students who spend weekends and the long monsoon break in Lonavla use lessons to keep internal-assessment drafts on schedule away from the school library.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme puts at least two Diploma courses beside a vocational qualification and a reflective project. Few Indian schools offer it. Its Diploma courses are examined to the same standard as those in the full Diploma.",
      countryNote:
        "CP requests from Lonavla are unusual; if one comes in, the Diploma courses are taught exactly as they would be for a DP student.",
    },
  ],

  subjectsIntro:
    "Lonavla's families lean towards hospitality, science, defence services and the arts, and the subject list below reflects that mix. Name the course, level and exam session and we will look for a tutor who has handled it, including unusual combinations that a city school timetable sometimes forces.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof. Maharashtra-board students are often quick with procedure and need to learn to justify each line in writing." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator work, using data such as rainfall, tourist footfall and ghat traffic." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves and fields, with careful treatment of uncertainties and graphs." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Amount of substance, energetics, equilibrium and organic chemistry, with the data booklet open from the first session." },
    { name: "IB Biology", levels: "HL / SL", description: "A large syllabus turned into recall, application and exam-style writing, with Western Ghats ecology as a rich local case." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and evaluation, with hospitality, tourism multipliers and seasonal employment as natural examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies and business tools, suited to children of hotel and resort families." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis and comparative essays, for students moving from Marathi or Hindi medium." },
    { name: "IB Marathi B", levels: "HL / SL", description: "Comprehension, writing and speaking for students who already speak Marathi at home." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language skills and oral practice at the required level." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming logic and a staged internal project." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking with local material: ghat forests, monsoon runoff, reservoirs and tourism pressure." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, fieldwork method and extended responses." },
    { name: "IB Visual Arts", levels: "HL / SL", description: "Studio process, comparative study and curatorial rationale, guided without producing the student's art." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, research methods and structured essays." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel both award the IGCSE, and their question styles differ, so a tutor needs to know which one your child will sit. These are the subjects Lonavla and weekend-home families ask about most, with Marathi and Hindi available for students who want them.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths with a calculator paper and a non-calculator paper; Extended students sharpen algebra and geometry." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus, functions and vectors for students aiming at Diploma Maths." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson's Maths, two papers of equal weight, with method marks throughout." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, forces, electricity and waves, with alternative-to-practical questions rehearsed." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, rates, electrolysis and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, transport, human biology and ecology." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing, listening and speaking for Marathi and Hindi speakers." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business activity, marketing and finance, with tourism-sector cases." },
    { name: "IGCSE Art & Design 0400", levels: "Grade 9-10", description: "Portfolio development and written analysis, guided without making the work." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming logic, data and networks." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Physical and human themes, with hill and river case studies." },
    { name: "IGCSE Marathi as a Second Language", levels: "Grade 9-10", description: "Language skills for students who want Marathi in their set, subject to the board's current offering." },
  ],

  regionsTitle: "Lonavla, Khandala and Kamshet areas our tutors teach online",
  regionsIntro:
    "A video lesson is the same on a balcony in Khandala or in a flat by the railway station. The notes below describe how households in each pocket of the Lonavla belt tend to organise study, with attention to monsoon crowds, the expressway and the pull of Pune and Mumbai.",
  regions: [
    { name: "Lonavla town and the main bazaar", note: "The commercial core around the railway station; shop-owning families work late, so lessons tend to begin after the shutters come down." },
    { name: "Khandala", note: "The ghat-top neighbour with the most holiday bungalows; many Mumbai families stay here on long weekends and use the week-end lesson slot." },
    { name: "Bhushi Dam road", note: "A monsoon magnet; Saturdays and Sundays in July and August bring heavy traffic, so weekday evenings are more dependable." },
    { name: "Kurvande and Valvan", note: "Quiet residential pockets towards Valvan dam, where several second-home owners keep children's school books and a study corner." },
    { name: "Tungarli and the lake side", note: "Growing housing and villas near Tungarli lake, popular with Pune and Mumbai buyers who use Lonavla as a work-from-home base." },
    { name: "INS Shivaji and the naval quarters", note: "Service families with postings that change every few years; a tutor who can stay the same across a transfer suits them well." },
    { name: "Kaivalyadhama and the yoga-institute neighbourhood", note: "A calm, academic-minded locality; staff and visiting scholars often look for careful, unhurried teaching." },
    { name: "Karla and Malavli", note: "Villages towards the Karla caves and the Malavli railway halt, where households commute to Lonavla or Pune for schooling." },
    { name: "Kamshet", note: "An adventure-sports and villa area to the east, with a growing number of remote-working families." },
    { name: "Khopoli and Kune", note: "Down the ghat in Raigad district and towards the Kune waterfall; families there are nearer to Panvel and Navi Mumbai for school." },
  ],

  schoolDisclaimer:
    "Schools are named on this page only to show where IB and IGCSE classrooms exist within reach of Lonavla. IB Gram has no agreement with any of them, nor with the IB, Cambridge or Pearson, and readers should check programmes, fees and admission rules with each school.",
  schoolClusters: [
    {
      city: "Local: Lonavla and Khandala",
      note: "We could not confirm any school in Lonavla or Khandala that offers IB or Cambridge or Edexcel IGCSE, so none is listed. Some boarding schools in the hills do appear in directories, but their board offerings were not verified.",
      schools: [],
    },
    {
      city: "Nearby: Pune",
      note: "About an hour to an hour and a half by road, Pune holds the widest choice of international-board schools within reach; all three names are on our Pune page.",
      schools: ["Mahindra International School", "Symbiosis International School", "Indus International School, Pune"],
    },
    {
      city: "Nearby: Navi Mumbai and Panvel",
      note: "Down the ghat and across the expressway, the Kharghar and New Panvel belt is the closest part of the Mumbai region; names are taken from our Panvel page.",
      schools: ["Dr Pillai Global Academy, New Panvel", "Ryan Global School, Kharghar"],
    },
    {
      city: "Nearby: Mumbai",
      note: "Two to three hours away in weekend traffic, Mumbai is the home city of many weekend-house families; these appear on our Mumbai page.",
      schools: ["JBCN International School", "DSB International School", "Oberoi International School"],
    },
  ],

  modesIntro:
    "Whether a child lives in Lonavla all year or only at weekends, lessons are booked by video. The choice is about rhythm: a fixed weekly class, a term plan with written recaps, or a concentrated run before papers.",
  modes: [
    {
      title: "Fixed weekly class",
      description:
        "One tutor, one regular hour. The student arrives with questions and unfinished problems, the tutor teaches the next idea, and errors are caught while the pen is still moving.",
      bullets: [
        "Tutor matched on subject, level and board",
        "Generally one hour a week",
        "Working written out on a shared board",
        "Works from the Lonavla house or the city flat",
      ],
    },
    {
      title: "Term plan with written recaps",
      description:
        "A map of the term, a short summary after every class and a check-in every few weeks. Parents who have not studied these boards can see where their child stands without guessing.",
      bullets: [
        "Recaps in everyday English",
        "Check-ins that reorder topics if needed",
        "Fits beside a school's own timetable",
        "Extra classes before unit tests",
      ],
    },
    {
      title: "Holiday and pre-exam sprint",
      description:
        "During the Diwali and summer breaks and in the run-up to mocks and the May or November papers, sessions become more frequent and lean on timed practice and detailed marking.",
      bullets: [
        "Papers marked in the board's own style",
        "Two to four sessions a week if the week allows",
        "Planned around Ganeshotsav and peak monsoon weekends",
        "Best started about three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Lonavla have IB or IGCSE schools, and what do its families use instead?",
      paragraphs: [
        "Lonavla has a reputation as a school town, and several boarding schools are listed for the hills. The difficulty is verification. We could not confirm from school or board sources that any school in Lonavla itself runs the IB or the Cambridge or Edexcel IGCSE, and we do not name a school without that confirmation. If you are considering one, ask for its current board authorisation and the subjects it actually examines.",
        "The schools we can verify lie on either side. To the east, Pune has Mahindra International School, Symbiosis International School and Indus International School, among others. To the west, Navi Mumbai and Panvel have Dr Pillai Global Academy and Ryan Global School at Kharghar, and Mumbai has a long list including JBCN, DSB and Oberoi International.",
        "That geography shapes family choices. Some households keep the child in a city school and treat Lonavla as a weekend home. Others rent in Pune during term. A few rely on a relative in Navi Mumbai. Each school runs its own admissions timetable and age rules.",
        "A tutor cannot give a child a seat, but can help before and after admission: preparing for an entrance assessment, covering content missed during a move, or keeping a busy student on track on days when the expressway makes the school run impossible.",
      ],
    },
    {
      heading: "How do Maharashtra SSC and HSC, CBSE, ICSE, IGCSE and the IB compare?",
      paragraphs: [
        "The Maharashtra State Board holds SSC at Class 10 and HSC at Class 12, with papers in February and March. CBSE and ICSE follow national syllabi, also with spring exams. IGCSE and the IB Diploma are examined in set sessions, mainly May-June and October-November for IGCSE and May or November for the IB.",
        "A child moving from the State Board to an international school often finds the facts familiar and the style new. IB and IGCSE examiners want stated assumptions, labelled diagrams and explanations in whole sentences. The first weeks of tutoring typically go into writing structure and understanding command words.",
        "For later entrance exams, Maharashtra's MHT-CET, JEE Main and NEET matter to students who plan to stay in India. IB and IGCSE candidates should read the current eligibility and equivalence rules for each before choosing subjects, since domicile and subject requirements vary.",
        "The simplest guide is the destination. If the child will finish Class 12 at a city international school or go abroad, stay with the international board and strengthen it. If a Maharashtra professional seat is the aim, weigh the State Board or CBSE carefully.",
      ],
      table: {
        caption: "Boards a Lonavla family might compare",
        columns: ["Board", "Typical setting near Lonavla", "What the papers reward", "Main exam months"],
        rows: [
          ["Maharashtra State Board (SSC, HSC)", "Most local schools", "Accurate recall in Marathi, English or Hindi", "February-March"],
          ["CBSE / ICSE", "Private schools in town and in Pune", "National syllabus, applied questions", "February-March"],
          ["IGCSE (Cambridge or Edexcel)", "Pune, Navi Mumbai and Mumbai", "Applied, tiered papers", "May-June and October-November"],
          ["IB Diploma", "Pune, Navi Mumbai and Mumbai", "Six subjects plus core, criteria based", "May and November"],
        ],
      },
    },
    {
      heading: "How much will IB or IGCSE tuition cost if we live in or visit Lonavla?",
      paragraphs: [
        "No rate card appears on our site, because the price should follow the student. After the free trial we send a written figure, and it depends on the course and level, the tutor's track record with that syllabus and the number of hours a week you choose.",
        "Higher Level IB Physics calls for a tutor with deep, recent subject knowledge, and that shows in the rate. IGCSE English as a Second Language sits differently. A steady weekly arrangement is usually cheaper per hour than a hurried block the fortnight before a paper.",
        "Think about what the alternative costs. Driving a teenager down the ghat twice a week for city coaching means petrol, tolls, a late return and a half-lost evening, and the Mumbai-Pune expressway is unpredictable on any long weekend. A video lesson delivered to the house removes all of that.",
        "Take the trial, read the written rate at home, and decide. Lessons can be paused when the family is travelling and resumed without penalty.",
      ],
      bullets: [
        "Level: IB HL or SL, IGCSE Core, Extended, Foundation or Higher",
        "Subject and the tutor's record with that exact syllabus",
        "Hours per week and how long each class runs",
        "Regular plan or short holiday or exam burst",
      ],
    },
    {
      heading: "Online tutor, city coaching, a local teacher or self-study: which works for a hill-town child?",
      paragraphs: [
        "City coaching in Pune or Mumbai offers a classroom, but from Lonavla it means a long transfer and a tired student. For a child who is already on a city school timetable during the week, adding two more journeys on weekends is hard to sustain.",
        "Teachers in Lonavla and nearby villages are dependable for Maharashtra board and CBSE subjects, and many help with English as well. Few have marked IB internal assessments or IGCSE papers, so they suit general support better than syllabus-specific coaching.",
        "Self-study can work for IGCSE Maths and the sciences when a student is motivated and has mark schemes, though it stalls when written feedback is needed, such as IB essays, Exploration drafts or language orals.",
        "Live one-to-one lessons add a reader who knows the criteria and a slot that travels. The weak point is reception; parts of the ghat and the valley villages have patchy mobile data, so every tutor agrees a voice-call backup before the first class.",
      ],
      table: {
        caption: "Study routes compared for Lonavla students",
        columns: ["Route", "What it offers", "What limits it"],
        rows: [
          ["Online one-to-one", "Exact syllabus, flexible slot, works from any house", "Needs stable data, weak in some ghat pockets"],
          ["City coaching in Pune or Mumbai", "Classroom feel and peers", "Long travel and weekend crowds"],
          ["Local teacher", "Nearby and familiar", "Few with IB or IGCSE marking experience"],
          ["Self-study", "Free and flexible", "No feedback on essays or internal work"],
        ],
      },
    },
    {
      heading: "How do the monsoon, tourist weekends and festivals shape study in Lonavla?",
      paragraphs: [
        "Lonavla receives some of the heaviest monsoon rainfall in Maharashtra, with mist, waterfalls and frequent power and mobile-data interruptions between June and September. The ghat road can slow to a crawl, which is pleasant for visitors and unhelpful for a child trying to reach a class. A live lesson at the house sidesteps the road completely.",
        "Weekends in July and August are the busiest of the year, with crowds at Bhushi Dam, Tiger's Point and the waterfalls. Local families often find Saturday afternoons unreliable, so weekday evenings become the more dependable slot, and weekend-house families plan around their travel days.",
        "Ganeshotsav in August or September and Diwali in October or November fall close to the November sessions for IGCSE and the IB. Revision should be complete before the festivals, because the weeks that follow belong to family.",
        "Winter is the clearest stretch for long sessions, and the summer holidays from April to June are ideal for early starts on IB internal assessments. SSC and HSC weeks in February and March quiet many households.",
      ],
      table: {
        caption: "A year of study around Lonavla",
        columns: ["Months", "What is happening", "Planning advice"],
        rows: [
          ["January-February", "Cool, clear weather, mock exams", "Timed papers and long sessions"],
          ["March-April", "SSC and HSC weeks, warming days", "Light lessons if siblings are sitting board papers"],
          ["May-June", "IB May and IGCSE May-June sessions, first showers", "Early starts; check power backup"],
          ["July-September", "Peak monsoon and tourist weekends, Ganeshotsav", "Weekday evenings; voice-call fallback agreed"],
          ["October-November", "Diwali, IGCSE and IB November sessions", "Finish revision before festivals"],
          ["December", "Cool, school break, weekend-home visits", "Consolidation and internal-assessment planning"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from the Lonavla belt go after school?",
      paragraphs: [
        "Within India, Pune and Mumbai are the natural destinations. Pune offers Symbiosis, Fergusson College, FLAME University, the College of Engineering Pune and MIT World Peace University, while Mumbai has St Xavier's College, NMIMS, the Institute of Chemical Technology and IIT Bombay. Each college publishes its own rules for applicants from outside the State Board.",
        "An Association of Indian Universities equivalence certificate allows IB and IGCSE-based qualifications to be treated alongside an Indian Class 12. IB Diploma holders may apply to central universities through CUET-UG, though the mapping of IB subjects changes from year to year.",
        "Engineering and medicine depend on subject choice. JEE Main and MHT-CET look for Physics, Chemistry and Maths, and NEET looks for Biology with Physics and Chemistry. Confirm eligibility before fixing an IB package or an IGCSE set.",
        "Abroad, the UK, Canada, Australia, Singapore and continental Europe read the Diploma and IGCSE-plus-A-Level results widely, and American colleges consider them with their own tests. For naval and defence families, the National Defence Academy and other service routes have their own rules, which students should read from the official notices.",
      ],
    },
    {
      heading: "What makes IB Maths and the sciences hard, and how can a tutor help?",
      paragraphs: [
        "IB Maths asks for reasoning and not just answers. Analysis and Approaches rewards clean algebra, calculus and proof. Applications and Interpretation rewards sensible modelling and accurate reading of graphing-calculator output. Both courses include an Exploration, a personal investigation worth a fifth of the grade.",
        "Physics marks often vanish on units, loosely drawn graphs and woolly explanations. Chemistry demands quick calculation and fluency with the data booklet. Biology carries a large body of facts, and command words such as outline, discuss and evaluate decide how much detail is needed.",
        "With internal assessments, a tutor can explain the criteria, challenge a research question and read a draft to show which descriptor is still missing. The experiment, the data and the prose must be the student's own.",
        "Children who switch between a city school week and a Lonavla weekend benefit from a single continuous thread. A tutor who sees the same student every Saturday or Sunday can catch slips that two separate classrooms would miss.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: how should a family choose the IGCSE tier?",
      paragraphs: [
        "On Cambridge papers, Core limits the top grade to C while Extended runs to A*. On Edexcel, Foundation caps at grade 5 and Higher reaches 9. A student who plans to take IB Maths HL or sciences at Diploma level should aim for the upper tier from the start.",
        "The school normally decides. A private candidate or a family comparing schools can use a diagnostic paper, and a score close to the boundary is a reason to speak to the school or exam centre before entries close.",
        "Subject choice follows direction. Would-be engineers take Maths, Physics and Chemistry, with Computer Science or Additional Mathematics alongside. Students drawn to hospitality, design or business can mix Business Studies, Art and Design, Geography and English, with Marathi or Hindi where offered.",
        "Fix the board, code and exam session before tutoring begins, so the tutor prepares the correct papers.",
      ],
    },
  ],

  tutorsIntro:
    "Lonavla students are matched on programme, subject, level and exam board. The tutor teaches from within India on IST and is introduced with a short note on why they suit your child's course, whether the lesson happens at the hill house or the city flat.",

  process: [
    { title: "Share your child's profile", description: "Board or programme, subject, level, present school, and the evening or weekend slots available in Lonavla or your other home." },
    { title: "See our tutor suggestion", description: "We name a tutor and describe the syllabus and level they have taught." },
    { title: "Sit a free trial class", description: "A real lesson online, at no cost and without obligation." },
    { title: "Put terms in writing", description: "Weekly hours, rate and first topics are recorded before you pay." },
    { title: "Continue and review", description: "Regular lessons, short notes and a fresh tutor if the fit is not right." },
  ],

  whyPoints: [
    { title: "Right syllabus, right tutor", description: "We choose tutors for your child's exact subject, tier and board." },
    { title: "Honest about boarding claims", description: "We name no school we cannot confirm, so your plan rests on facts." },
    { title: "Lessons that travel", description: "The same tutor follows the student between Lonavla, Pune and Mumbai." },
    { title: "Trial before fees", description: "You judge the teaching first." },
    { title: "Fixed boundaries", description: "Nobody writes a student's assessed work or essays." },
    { title: "Change without fuss", description: "A poor fit is replaced quickly." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Lonavla?", answer: "None that we can verify. Directories mention boarding schools in the Lonavla hills, but we could not confirm any IB or Cambridge or Edexcel offering, so none is named. The schools we can confirm are in Pune, Navi Mumbai and Mumbai. Ask any school for its authorisation and current subject list." },
    { question: "Can I get IB home tuition in Lonavla?", answer: "Yes, as online home tuition: a live private class at your own table with a specialist elsewhere in India. Tutors do not come to Lonavla, since home visits run only in Gurugram and parts of Delhi NCR. We explain that before any booking." },
    { question: "Do you have IGCSE tutors for Lonavla families on both Cambridge and Edexcel?", answer: "Yes, for both boards. We match on syllabus code and tier, such as Cambridge 0620 Chemistry or Edexcel 4MA1 Mathematics A, and classes run online on IST. Tell us the board and session first." },
    { question: "Can the same tutor teach my child in Lonavla and in our city home?", answer: "Yes. Because the lesson is online, the tutor and the time slot stay the same whether your child is in the Lonavla house or the Mumbai or Pune flat. You only need a laptop, a steady connection and a quiet table." },
    { question: "How much does IB or IGCSE tuition cost for a Lonavla family?", answer: "It depends on level, subject, tutor experience and weekly hours, so no figure is published. After the free trial you receive a written rate, which you can compare against the fuel, tolls and time of driving to a city classroom." },
    { question: "Which schools near Lonavla offer IB or IGCSE?", answer: "None in Lonavla that we can verify. In Pune, Mahindra International School, Symbiosis International School and Indus International School appear on our Pune page. Dr Pillai Global Academy and Ryan Global School appear on our Panvel page. Please check admissions directly." },
    { question: "Is the first lesson free?", answer: "Yes. Your child attends one genuine lesson with the suggested tutor online at no charge and no commitment. You decide afterwards whether to continue, and a rate is quoted in writing before any booking." },
    { question: "Can a tutor write my child's IA or Extended Essay?", answer: "No. Tutors can explain the criteria, help refine a topic, review plans and comment on drafts, but the research, data and writing must be your child's own. We decline any request to produce assessed work." },
    { question: "Which IB Diploma subjects can you staff for Lonavla students?", answer: "Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, ESS, Geography, Visual Arts, Psychology and Marathi or Hindi B are regularly requested, at Higher and Standard Level. For an unusual mix, ask and we will say honestly if we can." },
    { question: "Do you teach IB MYP and PYP to Lonavla children?", answer: "Yes. PYP classes are short and activity-based, centred on reading and number sense. MYP classes cover criterion-style writing, science reports and the Personal Project. Parents receive a note after each lesson." },
    { question: "What happens when monsoon rain or a power cut interrupts a lesson?", answer: "The class is shortened or moved. Each tutor agrees a fallback, such as a voice call with photographed working, and we avoid placing key sessions on days with red-alert rain. Families with generators or a mobile hotspot have an easier time." },
    { question: "Does my naval or defence-service family's transfer affect lessons?", answer: "Not much. A transfer means a new school, but the tutor relationship can continue online from any city with a connection, which gives a child one constant while everything else changes. We only ask you to update us on the new board and exam session." },
    { question: "When should my child start tuition?", answer: "Ideally at the start of a course, meaning Grade 9 for IGCSE and Class 11 for the Diploma. A child aiming at a Pune or Mumbai admission can begin a term earlier and focus on English and Maths." },
    { question: "My child is in a Maharashtra board school. Can we move to IB or IGCSE?", answer: "A move needs a school seat, because tutoring cannot enrol a child. A tutor can help with applied questions, content gaps and written English before the first term, which makes the switch less abrupt." },
    { question: "Can lessons work around Ganeshotsav and tourist weekends?", answer: "Yes. Most Lonavla families choose weekday evenings and Sunday mornings, and we plan around Ganeshotsav, Diwali and the busiest monsoon weekends. A clashing slot simply moves to another day." },
    { question: "What if my child does not get on with the tutor?", answer: "Tell us and we will arrange a different tutor. Early check-ins usually catch a poor fit, and the written plan keeps expectations clear." },
    { question: "Is IB Gram connected to any school or exam board?", answer: "No. IB Gram is independent, with no tie to the IB, Cambridge, Pearson or any school in Lonavla, Pune or Mumbai. Schools named here are for context only." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The online service in other Indian towns." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where home visits run." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "Programmes, subjects and matching." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel compared." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, core and scoring." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry for younger children." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI compared." },
    { label: "Browse tutors", href: "/tutors/", description: "Backgrounds and subjects of the team." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a message to start." },
    { label: "IB and IGCSE tutoring in Pune", href: "/pune/", description: "The nearest big city with many international-board schools." },
    { label: "IB and IGCSE tutoring in Mumbai", href: "/mumbai/", description: "The other end of the expressway." },
    { label: "IB and IGCSE tutoring in Panvel", href: "/panvel/", description: "Navi Mumbai schools just down the ghat." },
    { label: "IB and IGCSE tutoring in Thane", href: "/thane/", description: "Another Mumbai-region city served online." },
  ],

  closingHeading: "Book a free trial lesson for your Lonavla student",
  closingBody:
    "Send the programme or board, the subject, the level, and the evenings or weekends that suit you in Lonavla or your other home. We will suggest a tutor, say why, and set up a free trial class on video. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
