import type { CitySeoPage } from "../types";

/**
 * Srinivaspur is a mango-growing taluk town in Kolar district, Karnataka, near the Andhra border.
 * No IB or Cambridge school there could be confirmed, so stripSchools is empty and the clusters
 * point to Bengaluru using names already checked on the Kolar page.
 */
export const srinivaspur: CitySeoPage = {
  slug: "srinivaspur",
  countryName: "Srinivaspur",
  countryNameLong: "Srinivaspur, Karnataka",
  demonym: "Srinivaspur",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings once the school day and the orchard chores are finished, and calm Sunday mornings",
  lastUpdated: "2026-09-21",
  state: "Karnataka",
  stateCode: "IN-KA",
  geo: { latitude: 13.3378, longitude: 78.2122 },
  wikipedia: "https://en.wikipedia.org/wiki/Srinivaspur",
  alternateNames: ["Srinivasapura", "Srinivasapur", "Srinivaspur Kolar", "Srinivaspura"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Srinivaspur | Private Online Tuition",
  metaDescription:
    "Private online IB and IGCSE tuition for Srinivaspur, Kolar district: live one-to-one lessons at home, syllabus-matched tutors and a free first lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition at Home in Srinivaspur",
  heroEyebrow: "IB & IGCSE TUITION FOR SRINIVASPUR, KOLAR DISTRICT",
  heroSubtitle:
    "Wondering about private tuition at home for an IB or IGCSE student in Srinivaspur? It is online and one to one: IB Gram tutors do not travel to Karnataka houses, because home visits happen only in Gurugram and parts of Delhi NCR. Srinivaspur is mango country on the Andhra border, roughly a hundred kilometres from Bengaluru's international schools, so a tutor who already teaches your child's papers matters. Share the course and exam sitting, and we book a free trial.",
  primaryKeyword: "IB and IGCSE tutors in Srinivaspur",
  imageAltText: "Srinivaspur student in a live online IB Chemistry lesson with a tutor from a desk at home",
  secondaryKeywords: [
    "IB tutor in Srinivaspur",
    "IGCSE tutor in Srinivaspur",
    "IB home tuition Srinivaspur",
    "IGCSE home tuition Srinivaspur",
    "IB private tuition Srinivaspur",
    "IB Maths tutor Srinivaspur",
    "IGCSE Maths tutor Srinivaspur",
    "IB Physics tutor Srinivaspur",
    "IB Chemistry tutor Srinivaspur",
    "IB Biology tutor Srinivaspur",
    "IB DP tutor Srinivaspur",
    "IB MYP tutor Srinivaspur",
    "IB PYP tutor Srinivaspur",
    "IGCSE online tuition Srinivaspur",
    "IB tutor Srinivasapura",
    "IGCSE tutor Kolar district",
    "IB online classes Kolar Karnataka",
    "IB tuition Srinivaspur mango belt",
  ],

  heroTrustPoints: [
    "Every class is live and for one student alone, with nothing pre-recorded",
    "Teachers who have worked on DP, MYP and PYP, and on Cambridge or Edexcel IGCSE",
    "Timings that bend around orchard season, school buses and power cuts",
    "No charge for lesson one, and written notes after each session",
    "A replacement tutor, free of charge, if the first is not the right fit",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before you commit" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "Mangoes, milk and an international syllabus",
    paragraphs: [
      "Srinivaspur sits at around 819 metres in the eastern part of Kolar district, in dry, gravelly country where ragi, groundnut, pulses and tomatoes are grown and where the taluk is known as the largest producer of mangoes in Karnataka. Milk and silk add to the local economy. The Andhra border towns of Punganur and Madanapalle are close, so Telugu is as common as Kannada in daily conversation. Most children study at schools following the Karnataka State Board or CBSE and look towards KCET, NEET and the colleges in Kolar and Bengaluru.",
      "A few households want something different. They may be orchard owners and traders with children who plan to study abroad, doctors and engineers whose work has taken them to Bengaluru and back, or families with relatives overseas who want the IB or Cambridge and Edexcel IGCSE to stay in reach. The trouble is distance. We found no school in the town with an international syllabus that we could confirm, and the Bengaluru campuses are a long road trip, roughly ninety to a hundred and six kilometres depending on whose figure you take.",
      "Our tutors close that gap online. Each lesson is live and private, the tutor teaches from elsewhere in India on Indian time, and the child sits at home. Tutors do not visit houses in Srinivaspur, and we will not suggest otherwise. IB Gram is independent of the IB, Cambridge, Pearson and all schools, and tutors coach and explain without ever writing an assessment, essay or piece of coursework.",
    ],
  },

  programmesIntro:
    "Few schools near the Andhra border teach the IB programmes, so a family usually meets them after a move or through a screen-based school. A tutor's role changes at each stage.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Big-idea units that culminate in a pupil-led Exhibition. Tutoring stays gentle: shared reading, number puzzles and coaxing a child to say what they think.",
      countryNote:
        "A child here may move between Kannada, Telugu and English in a single day. Short English sessions give the third language a safe place to grow.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subjects marked on written criteria, with the Personal Project at the close. A tutor shows how to take a task apart and aim each paragraph at a descriptor.",
      countryNote:
        "A student arriving from a state-board classroom has to learn that MYP rewards explanation as much as memory. Weekly sessions in the first two terms ease the change.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects plus the core of Theory of Knowledge, the Extended Essay and CAS. The tutor concentrates on exam papers and on how internal assessments are judged, leaving the writing to the student.",
      countryNote:
        "A Diploma learner in the mango belt will not find a Higher Level specialist down the road, so an online tutor often carries the hardest units at course speed.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pair or trio of Diploma courses linked with a vocational strand and a reflective project; help centres on those courses and on academic English.",
      countryNote:
        "CP is almost unknown here. Requests are taken one by one, with a tutor matched to the Diploma courses the student has chosen.",
    },
  ],

  subjectsIntro:
    "Tutors are chosen for the precise course and level, and for the patience a student needs when switching from the Karnataka syllabus or from a Telugu-medium start.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Limits, derivatives, integrals, complex numbers at HL and proof-style thinking, with five minutes of no-calculator practice every session." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Data analysis, probability distributions and modelling, with the graphing calculator used the way examiners expect." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, thermal energy, waves, circuits and fields, with uncertainty handling and graph skills for the lab report." },
    { name: "Chemistry", levels: "SL / HL", description: "Stoichiometry, bonding, energetics, kinetics, acids and bases, and the organic reaction map." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology, genetics, human physiology and ecology, learned with the exact vocabulary mark schemes demand." },
    { name: "Economics", levels: "SL / HL", description: "Supply, demand, market failure, trade and development, argued through mango pricing, cold storage and milk cooperatives." },
    { name: "Business Management", levels: "SL / HL", description: "Reading a case, finance ratios and picking the right tool for an unfamiliar organisation, a good match for trading-family students." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and the pseudocode conventions used in the papers." },
    { name: "Psychology", levels: "SL / HL", description: "Core studies, evaluation language and essay structure for the top band." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Reading unseen texts closely, writing comparisons and preparing the individual oral." },
    { name: "Kannada A / Telugu B", levels: "SL / HL", description: "Literary analysis in Kannada for native speakers, or Telugu B for families whose home language lies across the border." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Water scarcity, soil and land use, using the dry-belt farming a Srinivaspur student sees every day." },
    { name: "Theory of Knowledge", levels: "Core", description: "Rehearsing arguments about knowledge and planning the exhibition, with no one writing it for the student." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE are both taught here. The Core or Extended tier is decided early because it fixes the highest grade a student can earn.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended", description: "Number, algebra, geometry and data handling, with an honest conversation about the right tier." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "Early calculus and functions for students who expect to take IB Mathematics AA." },
    { name: "Physics (0625 / 4PH1)", levels: "Core / Extended", description: "Motion, electricity, waves and thermal physics, with planning and analysis questions from the practical paper." },
    { name: "Chemistry (0620 / 4CH1)", levels: "Core / Extended", description: "Atoms, the mole, reactivity series and organic families, plus the ion tests that appear every year." },
    { name: "Biology (0610 / 4BI1)", levels: "Core / Extended", description: "Cell structure, enzymes, inheritance and ecosystems, with practice at describing an experiment in exam wording." },
    { name: "Computer Science (0478)", levels: "Single tier", description: "Writing and tracing algorithms, number systems and databases." },
    { name: "English as a Second Language", levels: "Single tier", description: "Comprehension, directed writing and speaking, shaped for pupils whose home language is Kannada or Telugu." },
    { name: "Hindi as a Second Language (0549)", levels: "Single tier", description: "Passages to read, letters and compositions to write, in the syllabus style." },
    { name: "Economics (0455) and Business Studies (0450)", levels: "Single tier", description: "Key terms, numerical questions and short case studies." },
  ],

  regionsTitle: "Srinivaspur and the places around it we teach",
  regionsIntro:
    "Every lesson is online, so what counts is signal, the school day and how long the evening road takes. Here is how we think about each part of the area.",
  regions: [
    { name: "Srinivaspur town", note: "The taluk centre with the main private schools and tuition shops; broadband and 4G are generally good enough for video lessons." },
    { name: "Mango orchard villages", note: "Farm settlements around the town where signal can dip; a backup SIM and a lesson time outside harvest rush are sensible." },
    { name: "Kurudumale", note: "A temple village to the west in the taluk, famous for its Ganesha shrine, with families who often study in Mulbagal and Kolar." },
    { name: "Gownipally", note: "A nearby settlement towards the Andhra side, where Telugu is often the home language." },
    { name: "Chintamani", note: "A larger town in the region of Chikkaballapur district, used by many families for shopping and tuition." },
    { name: "Mulbagal", note: "A Kolar district town on the highway to Chennai, with its own temples, colleges and school choices." },
    { name: "Kolar", note: "The district headquarters, home to Sri Devaraj Urs Academy of Higher Education and the largest school choice in the district." },
    { name: "Madanapalle and Punganur", note: "Andhra Pradesh towns just across the border, whose students can take the same online lessons." },
    { name: "Bengaluru", note: "The state capital, roughly ninety to a hundred and six kilometres away, where the nearest international schools sit." },
  ],

  schoolClusters: [
    {
      city: "Srinivaspur and Kolar district",
      note: "We could not confirm an IB or Cambridge school in Srinivaspur or elsewhere in the district. Local choice is very limited, and most students study online, as private IGCSE candidates, or after a move.",
      schools: [],
    },
    {
      city: "Nearby: Bengaluru (north and east)",
      note: "Bengaluru is where confirmed international campuses sit, and a few Kolar-side families board a child or relocate near them. The daily journey from here is too long to commute.",
      schools: ["Stonehill International School", "Trio World Academy", "Greenwood High International School"],
    },
    {
      city: "Nearby: Bengaluru (south and city)",
      note: "A second set of confirmed schools, mostly on the far side of the city, useful mainly for families already planning a move or a boarding place.",
      schools: ["Canadian International School, Bengaluru", "The International School Bangalore", "Inventure Academy"],
    },
  ],
  schoolDisclaimer:
    "Every school named on this page is independent of IB Gram. We list the Bengaluru campuses only because each openly teaches an international programme, and the list is not a suggestion to apply. For admissions and curricula, ask the school.",

  tutorsIntro:
    "Our tutors are based across India and teach on Indian time. A Srinivaspur student need not settle for whoever lives in Kolar district, because we match on subject depth and teaching style.",

  modesIntro:
    "In Srinivaspur the format is online. Families usually arrange it in one of three ways.",
  modes: [
    {
      title: "Private online class at home",
      description: "One teacher, one pupil, video and a shared writing space, all from home.",
      bullets: [
        "No teacher comes to the house; visits exist only in Gurugram and parts of Delhi NCR",
        "A laptop, a notebook and decent headphones are the whole toolkit",
        "Written working is shown on camera and talked through",
        "A short summary lands in the parent's inbox after each class",
      ],
    },
    {
      title: "Run-up to the papers",
      description: "Tighter scheduling in the weeks leading to May or November.",
      bullets: [
        "A handful of sessions per week for roughly a month",
        "Genuine past papers marked step by step against the official scheme",
        "Topics the mock exposed get fixed first",
        "A proper rest before the first paper",
      ],
    },
    {
      title: "Steady weekly slot",
      description: "A fixed weekly session in one subject with a constant tutor.",
      bullets: [
        "Keeps the course from outrunning the student",
        "Well suited to MYP and the first Diploma year",
        "Moves around Ugadi, Dasara and the busiest mango weeks",
        "Begins with the free trial class",
      ],
    },
  ],

  sections: [
    {
      heading: "What are the practical ways to study IB or IGCSE from Srinivaspur?",
      paragraphs: [
        "A family in the mango belt has four sensible routes. They can enrol the child in an online international school, which streams classes to a laptop at home. They can look at a boarding or day place in Bengaluru. They can relocate, perhaps for work. Or they can register the student as a private candidate for IGCSE papers through an approved exam centre. Each route asks something different of a tutor.",
        "Each route leaves a different hole for a tutor to fill. A child at an online school has the lessons but often lacks someone who checks, week by week, whether they have really understood. A boarder who comes home needs a particular weak unit mended. A family relocating wants the pace matched before the new term. A private candidate has nobody setting the syllabus calendar, so the tutor effectively becomes the class teacher.",
        "None of these is the single right answer. Age, comfort with English and plans for university tip the balance, and we are glad to say plainly what each route would ask and how much help is realistic.",
        "Still undecided? One trial lesson in your child's weakest subject tells you more than any prospectus. By the end of the hour an experienced teacher will have a view on how far the student is from the standard the course expects.",
      ],
    },
    {
      heading: "Karnataka State Board, CBSE, IB and IGCSE compared",
      paragraphs: [
        "Most Srinivaspur students sit SSLC at Class 10 and the second PUC at Class 12 under the Karnataka board, or CBSE, and from there aim at KCET, NEET-UG, JEE Main or CUET-UG. Those routes reward speed and recall. The IB and IGCSE reward explanation, data handling and long answers in English.",
        "Switching is rarely a content problem. Students arriving from state-board classrooms usually know their mathematics and science well; what they lack is familiarity with command terms and the way marks are earned, and that can be taught in a few weeks.",
      ],
      table: {
        caption: "Four systems as a Kolar district family sees them",
        columns: ["System", "How the final result is built", "Language of instruction", "Common next step"],
        rows: [
          ["Karnataka State Board (SSLC and 2nd PUC)", "Annual written papers at the end of Class 10 and Class 12", "Kannada, Telugu or English", "KCET, NEET-UG, JEE Main, state counselling"],
          ["CBSE", "Board examinations plus school-assessed marks", "English or Hindi", "JEE Main, NEET-UG and CUET-UG"],
          ["IB Diploma", "Coursework tasks and end-of-programme exams across six subjects", "English", "Degrees abroad, private universities in India, or CUET-UG after equivalence"],
          ["Cambridge or Edexcel IGCSE", "Examined at Core or Extended tier", "English", "IB Diploma or A Level, then university"],
        ],
      },
    },
    {
      heading: "What makes up the fee for IB and IGCSE tuition in Srinivaspur?",
      paragraphs: [
        "The fee for IB and IGCSE tuition in Srinivaspur depends on four things: the subject, the level, how experienced the tutor is, and how often you meet. A written quote comes before any commitment. We keep no rate card, because a Class 6 reading class and Higher Level Chemistry are not the same piece of work.",
        "Online delivery saves a tutor's travel and widens the choice, which counts for a lot in a town where the nearest comparable specialist might be in Bengaluru. You pick on subject strength alone.",
        "A sensible plan front-loads help where it will matter. Early in a new programme a weekly slot builds good habits. As mock exams approach, extra sessions fill the gaps they reveal. Just before the sitting a final burst consolidates. Plenty of families begin with one subject and bring in a second after a month.",
      ],
      bullets: [
        "Teaching Higher Level Mathematics or science generally commands more than a junior language class",
        "Each stage, from primary to Diploma and IGCSE, has its own specialist pool",
        "A year of weekly lessons costs less than frantic cramming",
        "Late requests leave fewer teachers to choose from",
        "Committing for longer makes scheduling simpler",
      ],
    },
    {
      heading: "Local tuition, online tutor or self-study in Srinivaspur?",
      paragraphs: [
        "Three choices come up again and again in Srinivaspur homes. The first is the tuition shop in town, good for board exams and entrance coaching, rarely familiar with IB or IGCSE papers. The second is a stream of free videos, which explain content but cannot tell a student why a particular answer would lose marks. The third is a private tutor online, who knows the papers and marks the work, in return for a quiet corner and a dependable signal.",
        "The table also lists the main limit of screen lessons: handling real apparatus is something only a school or centre laboratory can offer.",
      ],
      table: {
        caption: "Study options for an IB or IGCSE student in Srinivaspur",
        columns: ["Option", "Upside", "Downside", "Fits"],
        rows: [
          ["Personal tutor on screen", "Exact syllabus and corrections on every answer", "Needs signal; no hands-on lab", "Most IB and IGCSE students"],
          ["Neighbourhood tuition shop", "Peers and a fixed timetable", "Built for state board and entrance exams", "Students also sitting SSLC or PUC papers"],
          ["Self-study with videos", "Cheap and flexible", "Nobody marks the work", "Revising topics already understood"],
          ["Campus in Bengaluru", "Labs, teachers and peers on site", "Cost and separation from home", "Families who want the full school experience"],
        ],
      },
    },
    {
      heading: "Mango season, dry summers and festival weeks in Kolar district",
      paragraphs: [
        "Srinivaspur is dry, with rainfall of around 720 millimetres a year spread over fewer than sixty days, and summers are hot, though the altitude of about 819 metres keeps nights kinder than the plains. The May IB and IGCSE session lands in that heat, so lessons at dawn or after dark work best.",
        "The mango season shapes household life from April to June. Orchard owners and their families are busy with picking, packing and trucks to Bengaluru, Chennai and beyond, and children are often needed to help or travel. We keep lessons flexible in those weeks and use the quieter months to move faster.",
        "Festival weeks add their own rhythm. Ugadi in March or April, Dasara in October, Deepavali in October or November and Sankranti in January are family occasions across Karnataka, and the Telugu side of the border keeps its own customs around them. We place revision before the autumn festivals so the November session does not get squeezed.",
      ],
      table: {
        caption: "A study year in Srinivaspur",
        columns: ["Months", "Local pattern", "Tutoring plan"],
        rows: [
          ["January to March", "Sankranti, cool dry weather, school exams, Ugadi", "Steady topic work and mock papers"],
          ["April to June", "Mango harvest, heat, May sessions", "Early or late lessons, timed past papers, flexible slots"],
          ["July to September", "Monsoon showers, new term, assessment drafts", "Settle new subjects, build habits"],
          ["October to December", "Dasara, Deepavali, November sessions", "Mocks early, light festival weeks"],
        ],
      },
    },
    {
      heading: "Where do Srinivaspur students go after an international syllabus?",
      paragraphs: [
        "After school, graduates of these syllabuses head overseas, to private Indian universities, or into central and state institutions through national entrance tests.",
        "For a degree inside India, a student typically needs an equivalence certificate from the Association of Indian Universities, which recognises the Diploma and also IGCSE followed by A Level, and a CUET-UG result if central universities are the target. The tests for engineering and medicine publish fresh subject rules annually. Read that year's notification before letting any subject go.",
        "Close to home sit Sri Devaraj Urs Academy of Higher Education at Tamaka near Kolar, and the many colleges of Bengaluru. Across the border, Sri Venkateswara University in Tirupati draws some families. Abroad, popular targets are the United Kingdom, Canada, the United States, Australia and Singapore; admissions test coaching is a separate service.",
        "It pays to choose subjects by working back from the degree. One conversation with us before the school's selection deadline is usually all it takes.",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences taught on screen?",
      paragraphs: [
        "IB Mathematics comes in two flavours. One, Analysis and Approaches, is built on algebra and calculus and tends to suit future engineers and scientists. The other, Applications and Interpretation, centres on data, statistics and modelling and tends to suit economists and psychologists. A tutor helps you think it through rather than steering you to the tougher course.",
        "Maths works well over video because every line the student writes appears on the shared board, and a slipped sign is spotted at the moment it happens. The no-calculator paper is trained with brief daily drills; the calculator paper is trained with careful layout of working and sure handling of the device.",
        "In Physics, Chemistry and Biology, marks vanish quietly: a graph read from the wrong scale, an answer without its unit, an explanation that names a cause but never connects it to the result. Sessions use real past questions to cure those habits. Walking through an experiment on screen helps, though students still need time at a bench.",
        "The sequence runs from isolated topics, through mixed sets, to complete timed papers in the final term, so that quickness is built on solid understanding.",
      ],
    },
    {
      heading: "Choosing IGCSE tiers and subjects",
      paragraphs: [
        "In several subjects a candidate enters either the easier Core papers or the harder Extended ones. Core tops out below the highest grades, whereas Extended can reach them. Anyone thinking about IB Mathematics AA or A Level sciences should start in Extended.",
        "Cambridge and Edexcel number their syllabuses differently, and the right past papers depend on that number. Physics is 0625 with Cambridge and 4PH1 with Edexcel. Copy the code from your child's subject list into your first message.",
        "When picking subjects, keep options wide. Include a science your child likes, a mathematics tier that is demanding but fair, and a language already heard at home. English goes without saying; Kannada, Telugu or Hindi is the natural companion.",
      ],
    },
  ],

  process: [
    { title: "Write to us", description: "Message us on WhatsApp at +91 7439 368 115 with the board, programme, subject and exam sitting, mentioning Srinivaspur." },
    { title: "Receive a shortlist", description: "We reply with a tutor who has handled those papers and has evenings free." },
    { title: "Sit the free lesson", description: "The first class is on us and takes on a topic that is troubling the student." },
    { title: "Agree terms in writing", description: "Subject, timetable and fee are written out before any payment." },
    { title: "Check and adjust", description: "Notes follow every class; changing tutor or timing is a simple request." },
  ],

  whyPoints: [
    { title: "Straight about format", description: "Screen-based lessons in Srinivaspur and no suggestion of a house visit." },
    { title: "Matched to the paper", description: "We select by course, level and board, not by a vague subject title." },
    { title: "A note each time", description: "Parents read what was taught and what follows." },
    { title: "Fitted to orchard life", description: "Timetables flex for mango season and evening power cuts." },
    { title: "Coaching only", description: "No tutor drafts an assessment, essay or piece of coursework." },
    { title: "Simple to switch", description: "A mismatched tutor is swapped without any fee." },
  ],

  faqs: [
    { question: "Will someone come to our house in Srinivaspur to teach?", answer: "No. Tutors travel to students' homes only in Gurugram and some parts of Delhi NCR. Here the lesson comes through the screen: a live, private class where you and the teacher share a writing board, followed by a written summary of what was done." },
    { question: "What will IB or IGCSE lessons cost for a Srinivaspur student?", answer: "That depends on the subject, the level, the seniority of the teacher and the weekly number of sessions. A quotation in writing reaches you first, and no fixed list of rates is kept. The opening lesson is free, so quality can be tested before any money is spent." },
    { question: "Does the town or Kolar district have an international school?", answer: "Our enquiries turned up none we could verify, which is why no local school is named. The campuses we could verify are in Bengaluru. Plenty of local students therefore learn through an online school or prepare privately. Always check a school's claims with the school." },
    { question: "Is it possible to take IGCSE exams without attending a Cambridge school?", answer: "Often it is, as a private candidate. You need an approved Cambridge or Edexcel centre willing to take the entry, a plan for science practicals, and attention to the registration deadline. We do not run examinations; we prepare the student to sit them." },
    { question: "What hours do students in Srinivaspur usually study?", answer: "Dawn and the hours after dusk, since March to May afternoons are hot and mango harvesting fills the day for many families. Weekends suit long practice sessions. Lessons are shifted around Ugadi, Dasara, Deepavali and the school's own tests." },
    { question: "Can a tutor complete the Internal Assessment or Extended Essay for my child?", answer: "Never; a teacher who offered would be risking the diploma. Reading the criteria together, discussing what a persuasive investigation looks like and flagging weak reasoning are fine. Every sentence, data point and conclusion has to originate with the student." },
    { question: "How good does the internet connection need to be?", answer: "Modest. A handful of megabits a second handles video and a shared board, whether over fixed broadband or a phone hotspot. If your orchard village has weak coverage, keep a SIM from a second operator charged and ready." },
    { question: "Is the first class really free of charge?", answer: "It is, and it is a working lesson, not a demonstration. The topic is whatever is currently worrying your child, you get written feedback afterwards, and you owe nothing if you stop. If the chemistry between tutor and student is off, we suggest someone else before billing starts." },
    { question: "Which IB and IGCSE stages can your tutors cover?", answer: "Everything from PYP to the Diploma, plus both IGCSE boards. Young children get reading and number support, MYP students learn to decode criteria, and Diploma candidates get depth by subject. Where the match works, one teacher can stay as the child moves up." },
    { question: "What should decide between IB Maths AA and AI?", answer: "The degree you have in mind. Calculus-heavy degrees such as engineering suit Analysis and Approaches; statistics-heavy ones such as economics or psychology suit Applications and Interpretation. Both are offered at two levels, and a trial lesson in each will help you decide." },
    { question: "Does an IB route close the door on NEET or KCET?", answer: "Not automatically. The question is whether the subjects studied meet the conditions published for that year, and whether the IB or the IGCSE plus A Level pairing is recognised. Those points are settled in official bulletins, not by us. What we teach is the science and mathematics content." },
    { question: "Which examining boards do you work with?", answer: "Cambridge International and Pearson Edexcel. Each subject has a code, 0620 for Cambridge Chemistry and 4CH1 for Edexcel Chemistry, for example. Send us yours and we will find a tutor who has taught exactly those papers." },
    { question: "How early should we arrange tutoring for the November sitting?", answer: "By August, ideally. Dasara and Deepavali fall just before November, so those weeks are kept light and the heavy past-paper work is moved into September, when there is less on the family calendar." },
    { question: "Do students in Chintamani, Mulbagal or Madanapalle use the same service?", answer: "Yes. All that is needed is a laptop and a connection that holds. Families in Chintamani, Mulbagal, Madanapalle or Punganur get the identical live private session, booked at hours that fit their own commute and school timetable." },
    { question: "How do we begin?", answer: "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com. Say which class your child is in, which subject is hardest, which school or online school they attend, and that you are in Srinivaspur. A suggested tutor and a free-lesson slot normally follow within a day." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Kolar", href: "/kolar/", description: "The district headquarters with the same online format." },
    { label: "IB and IGCSE tutors in Mulbagal", href: "/mulbagal/", description: "A Kolar district town on the Chennai highway." },
    { label: "IB and IGCSE tutors in Bengaluru", href: "/bengaluru/", description: "Where most of Karnataka's international campuses are found." },
    { label: "IB and IGCSE tutors in Tumkur", href: "/tumkur/", description: "Another city page within reach of Bengaluru." },
    { label: "IB tutors across India", href: "/india/", description: "Our national page for live IB and IGCSE tuition." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB tutoring across PYP, MYP and DP." },
    { label: "IGCSE tutors", href: "/igcse/", description: "IGCSE help by subject and board." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "Diploma coaching by subject, with TOK guidance." },
    { label: "Meet the tutors", href: "/tutors/", description: "Who teaches what, with subject and programme details." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book the free first lesson." },
  ],

  closingHeading: "Book a free lesson from Srinivaspur",
  closingBody:
    "Give the class, the subject and the exam you are aiming at, and we line up a suitable tutor with a free opening class. Our WhatsApp number is +91 7439 368 115 and our email is support@ibgram.com.",
};
