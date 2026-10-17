import type { CitySeoPage } from "../types";

/**
 * /mount-abu/ - IB and IGCSE tutoring page for Mount Abu (Abu Raj), Sirohi district, Rajasthan.
 * Mount Abu has well-known ICSE boarding schools (Sophia High School, St. Mary's High School) but no
 * IB or Cambridge/Edexcel IGCSE school could be confirmed, so stripSchools is empty and the
 * clusters point honestly to Udaipur and Ahmedabad.
 */
export const mountAbu: CitySeoPage = {
  slug: "mount-abu",
  countryName: "Mount Abu",
  countryNameLong: "Mount Abu, Rajasthan",
  demonym: "Mount Abu",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are timed around the May and June tourist rush, the fog-bound July monsoon, Diwali visitors and the cold January mornings on the plateau",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.5925, longitude: 72.7156 },
  wikipedia: "https://en.wikipedia.org/wiki/Mount_Abu",
  alternateNames: ["Abu Raj", "Mt Abu", "Mount Abu Rajasthan", "Arbuda"],
  stripSchools: [],

  title: "Mount Abu IB & IGCSE Tutors | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Mount Abu, Sirohi district: private tuition at home over live video for DP, MYP, PYP, Cambridge and Edexcel, with a free first lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Mount Abu",
  heroEyebrow: "PRIVATE ONLINE IB & IGCSE TUITION FOR MOUNT ABU, THE ARAVALLI HILL STATION",
  heroSubtitle:
    "Mount Abu has famous boarding schools, yet none that we could confirm teaches the IB or a Cambridge or Edexcel IGCSE course, so home tuition for either has to come by screen. IB Gram pairs your child with a tutor who has taught the exact syllabus and runs a live one-to-one class at your own table, whether you live near Nakki Lake, on the Abu Road side or up by Guru Shikhar.",
  primaryKeyword: "IB and IGCSE tutors in Mount Abu",
  imageAltText: "A Mount Abu student having an online IB English lesson on a laptop in a hill-station home",
  secondaryKeywords: [
    "IB tutor Mount Abu",
    "IGCSE tutor Mount Abu",
    "IB home tuition Mount Abu",
    "IGCSE home tuition Mount Abu",
    "IB private tuition Mount Abu",
    "IB Maths tutor Mount Abu",
    "IGCSE Maths tutor Mount Abu",
    "IB Physics tutor Mount Abu",
    "IB Chemistry tutor Mount Abu",
    "IB Biology tutor Mount Abu",
    "IB DP tutor Mount Abu",
    "IB MYP tutor Mount Abu",
    "IB PYP tutor Mount Abu",
    "IGCSE online tuition Mount Abu",
    "IB tutor Abu Raj",
    "IB tutor Sirohi district",
    "IGCSE tutor Abu Road",
    "online IB tutor Mount Abu Rajasthan",
  ],

  heroTrustPoints: [
    "Tutors are chosen because they have taught the same IB or IGCSE course and level",
    "Classes run online; nobody climbs the ghat road to your Mount Abu home",
    "Take the first lesson free and decide afterwards",
    "No link with the IB, Cambridge, Pearson or any school mentioned below",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "Every IB stage" },
    { value: "Cambridge, Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "No time difference" },
    { value: "Free trial", label: "Before any fee" },
  ],

  intro: {
    heading: "Mount Abu has boarding schools, so why is IB and IGCSE tuition done online?",
    paragraphs: [
      "Mount Abu is Rajasthan's only hill station, a granite plateau about 1,220 metres high with the Dilwara Jain temples, Nakki Lake, a wildlife sanctuary and the world headquarters of the Brahma Kumaris. It is also a school town. St. Mary's High School dates back to 1887 and Sophia High School, a girls' school, to 1951, and both take boarders. But the schools we could verify here follow the ICSE and other Indian boards. Our searches found no school in Mount Abu or Abu Road teaching the IB or a Cambridge or Edexcel IGCSE syllabus.",
      "That gap is what this page is about. A family on the plateau whose child needs an international course has three options: move down to Udaipur or Ahmedabad, send the child to a boarding school in another city, or study at home. For the third option, the tutor must come by screen. A teacher in another Indian city and a child at home with a laptop meet live, privately, and work through the syllabus. Tutors do not climb to Mount Abu; teaching in person at the house is limited to Gurugram and parts of Delhi NCR.",
      "Our enquiries come from an unusual mix. Hotel and guest-house families who see visitors from Gujarat, Mumbai and abroad all year and want their children ready for universities elsewhere. Brahma Kumaris members and long-term residents with children from many countries. School staff and officers posted to the hill station. And parents who plan to move to Udaipur, Ahmedabad or Pune and want the child ready for an IB or Cambridge classroom.",
      "IB Gram is an independent tutoring service. We are not part of the International Baccalaureate, Cambridge, Pearson or any school named here, and tutors never write a student's internal assessments, Extended Essay, TOK essay or coursework. They teach, question and coach.",
    ],
    bullets: [
      "Private live tuition for IB PYP, MYP and DP and for Cambridge and Edexcel IGCSE",
      "Online on the plateau; in-person home tuition exists only in Gurugram and parts of Delhi NCR",
      "A written note after each lesson",
      "A different tutor on request",
      "Fees in writing before you book",
    ],
  },

  programmesIntro:
    "The hill station's schools mostly follow the ICSE, the Rajasthan Board or CBSE. These are the four IB stages, described as a tutor would handle them for a family working at home.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Pre-primary up to Class 5 (ages 3-11)",
      description:
        "Young pupils investigate big ideas through questions, reading and projects, and round the stage off with an Exhibition they plan themselves.",
      countryNote:
        "A PYP request from the plateau often involves a child who has lived abroad or in a metro school and needs the habit of inquiry kept going.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 up to Class 10 (ages 11-16)",
      description:
        "Teachers grade eight subject groups against published criteria rather than a single mark, and a Personal Project ends the stage.",
      countryNote:
        "Since no local school teaches the MYP, a tutor puts the criteria into everyday words and shows what top-band work looks like.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and Class 12 (ages 16-19)",
      description:
        "Students choose three subjects at Higher Level and three at Standard Level, add the Extended Essay, TOK and CAS, and are scored out of 45 with bonus core points.",
      countryNote:
        "Diploma interest here comes from hospitality families, doctors, architects and parents planning a degree abroad, so sciences, business and English lead.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and Class 12 (ages 16-19)",
      description:
        "Selected Diploma courses sit beside a career-related qualification and a reflective project, shaping a route for practical learners.",
      countryNote:
        "No CP school is known near Mount Abu, so tutoring supports the academic courses within it, including hospitality-minded business subjects.",
    },
  ],

  subjectsIntro:
    "Please say which course and level your child has. The tutor for Business Management HL is not the tutor for Biology SL, and every subject below is matched in the same careful way.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof for students bound for engineering or architecture; the exploration is planned early." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, finance and modelling with technology, a practical fit for hospitality management and commerce." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves and fields as timed numerical practice, with graph work for the investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Mole calculations, bonding and organic mechanisms repeated until they feel routine." },
    { name: "IB Biology", levels: "HL / SL", description: "Ecology, genetics and physiology, with the Mount Abu sanctuary's plants and animals as readily available examples." },
    { name: "IB Environmental Systems & Societies", levels: "HL / SL", description: "Biodiversity, tourism pressure and water on an Aravalli plateau, with the sanctuary and Nakki Lake as live case studies." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies in hotels, homestays and tourism, tying theory to businesses a hill-station child already knows." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and short explanations, using seasonal demand, tourism spending and pricing as examples." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Text analysis, essay planning and spoken commentary for students who grew up across several languages." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming and databases in the pseudocode form the paper uses." },
    { name: "IB Psychology", levels: "HL / SL", description: "Key studies and research methods turned into evaluated, well-structured answers." },
    { name: "IB Gujarati B", levels: "HL / SL", description: "A relevant language option on the Gujarat border, with formal writing and conversation practice." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Text types, grammar and speaking for students who want Hindi in the Diploma." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "The tutor opens up questions about knowing; the essay and exhibition are the student's own." },
  ],

  igcseSubjectsIntro:
    "For Mount Abu families IGCSE is usually a home course, sometimes a bridge to boarding in another city. Choose Cambridge or Pearson Edexcel first, then the tier.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra and shape in small daily steps, with each line of working explained." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and functions before most schools reach them, for students heading to Diploma or A Level Mathematics." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "The way Edexcel words questions and awards method marks, trained on mixed papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, circuits and waves, plus the alternative-to-practical paper handled as a skill of its own." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atoms, reactions and organic families, locked in through quick recall tests." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Life processes, plants and inheritance, with labelled drawings made without notes." },
    { name: "IGCSE Combined Science 0653", levels: "Core / Extended", description: "One path across the three sciences for students not specialising." },
    { name: "IGCSE Environmental Management 0680", levels: "Grade 9-10", description: "Ecosystems, water and tourism impact, with a wildlife sanctuary and a famous lake on the doorstep." },
    { name: "IGCSE Travel and Tourism 0471", levels: "Grade 9-10", description: "A natural fit for a town that lives on visitors: destinations, services and sustainable tourism." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business types, money and marketing, worked on short hospitality-flavoured cases." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, trade and government policy, shown through seasonal demand in the town." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing and speaking for students whose homes use Hindi, Gujarati or Marwari." },
  ],

  regionsTitle: "Mount Abu and neighbouring places our online tutors reach",
  regionsIntro:
    "Every class is online, so the list shows no tutor journeys. It explains how the hill station's roads, seasons and school hours shape the best time for a lesson.",
  regions: [
    { name: "Nakki Lake and the main bazaar", note: "The town's busy centre, where many hotel and shop families work long hours in the tourist season and prefer late-evening lessons." },
    { name: "Dilwara road", note: "The road to the famous Jain temples, with guest houses and residences whose seasons follow the pilgrim calendar." },
    { name: "Sunset Point and Toad Rock side", note: "Viewpoint areas crowded in the evenings, so mornings and late nights suit lessons better." },
    { name: "Guru Shikhar road", note: "The route to Rajasthan's highest peak, with quiet residential pockets and patchy signal in places." },
    { name: "Achalgarh", note: "A village around the fort and temple a few kilometres out, with families connected to the shrine and to tourism." },
    { name: "Madhuban and Brahma Kumaris campuses", note: "Home to the organisation's global headquarters and a multinational community whose children may already be studying English-medium or international courses." },
    { name: "School zone near the ICSE boarding schools", note: "A part of town with boarders and day pupils, where school-end times and weekend leaves shape lesson slots." },
    { name: "Abu Road", note: "The railway town at the foot of the hill, about 28 kilometres down, with a larger market and several schools." },
    { name: "Sirohi", note: "The district headquarters, an hour or more away, with the area's main colleges and government offices." },
    { name: "Udaipur and Ahmedabad", note: "The two big cities that Mount Abu families visit for hospitals, shopping and university enquiries, around four and five hours away." },
  ],

  schoolDisclaimer:
    "No school in Mount Abu is described as an IB or Cambridge/Edexcel IGCSE school because we could not confirm one. Its well-known boarding schools follow Indian boards such as the ICSE. Schools in other cities below are shown only as options some families consider; none has any link with IB Gram.",
  schoolClusters: [
    {
      city: "Mount Abu and Sirohi district",
      note: "The hill station is known for boarding schools such as St. Mary's High School and Sophia High School, which follow Indian boards. We found no IB or IGCSE school locally, so international-course students study at home with an online tutor.",
      schools: [],
    },
    {
      city: "Nearby: Udaipur",
      note: "Udaipur is the closest Rajasthan city with a group of international-curriculum schools, around four hours by road, and a common destination for families planning a move or boarding place.",
      schools: ["Crossroads International School", "Rockwoods International School", "Seedling The World School"],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "Ahmedabad is the large Gujarat city that many Mount Abu families already visit, with a deep set of IB and IGCSE schools.",
      schools: ["Calorx Olive International School", "Ahmedabad International School", "Fountainhead School", "Eklavya School"],
    },
    {
      city: "Nearby: Jaipur",
      note: "Jaipur is farther but is the state capital, with its own group of international-curriculum campuses.",
      schools: [],
    },
  ],

  modesIntro:
    "Mount Abu families usually settle into one of the three arrangements below. Every class is a private live call; the rhythm and the reason differ.",
  modes: [
    {
      title: "Regular weekly tutor",
      description:
        "A standing hour with one teacher who works through the specification in order and sends back remarks on photographed homework.",
      bullets: [
        "Fits IB, MYP and IGCSE subjects",
        "The shared board stays open",
        "Worksheets come back with remarks",
        "The tutor gets to know your child's pace",
      ],
    },
    {
      title: "Home course beside an ICSE or CBSE school",
      description:
        "For a boarder or day pupil at a local school who follows an IB or IGCSE course in the evenings, on Sundays or in the holidays.",
      bullets: [
        "Only the international specification is taught",
        "Slots avoid test weeks and boarding routines",
        "Parents see a monthly note",
        "Groundwork for a later move to an international school",
      ],
    },
    {
      title: "Off-season intensive",
      description:
        "A concentrated block of classes, often placed in the quieter tourist months, ahead of the May or November papers.",
      bullets: [
        "Scripts marked to examiner schemes",
        "Weak topics revisited every week",
        "Starts about five weeks before the papers",
        "Fitted around peak-season workloads at home",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Mount Abu?",
      paragraphs: [
        "Not that we could confirm. Mount Abu's school scene is old and respected, but it belongs to the Indian boards. St. Mary's High School, founded in 1887, and Sophia High School, a girls' school established in 1951, both take boarders and follow the ICSE system. Other schools in the town and at Abu Road follow the Rajasthan Board or CBSE. None of the listings we checked showed an IB or Cambridge or Edexcel IGCSE programme.",
        "This surprises people who associate hill-station boarding with international curricula. The explanation is history. Mount Abu's schools grew from British-era and missionary roots and kept to the Indian school-leaving systems, which still serve most families well. The international boarding schools of the north sit in Mussoorie, Dehradun and the Nilgiris, far from Rajasthan.",
        "Even so, there is demand. Hotel owners see the world pass through their lobbies. Brahma Kumaris families come from many countries. Doctors and officers posted to the plateau bring children who studied elsewhere. All of them ask the same question: where can my child follow an international course if no school here teaches it?",
        "If an IB or Cambridge school ever opens on the plateau, the IB school finder and the Cambridge directory will list it first. Please check them for any future claim.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Mount Abu or Abu Road",
        "Famous boarding schools here follow the ICSE and other Indian boards",
        "Typical families: hoteliers, Brahma Kumaris community, officers, doctors, returnees",
        "Check ibo.org and the Cambridge list for new schools",
      ],
    },
    {
      heading: "ICSE, CBSE, Rajasthan Board, IB or IGCSE: which suits a Mount Abu child?",
      paragraphs: [
        "Mount Abu is unusual because the ICSE is as visible here as CBSE. That makes the choice a five-way one. None of the routes ranks above the others; each prepares for a different future.",
        "The Rajasthan Board is the widest route and leads into NEET, JEE, CUET and state admissions. CBSE offers a national syllabus. The ICSE and ISC place stronger weight on English and wide subject coverage and are respected by universities. IGCSE trains applied thinking in tiered papers over two years. The IB spreads the load over six subjects, a long essay and service work and suits a child who writes and debates.",
        "A family planning to stay in India often does well with the ICSE or CBSE and good coaching. International options deserve a look where a move is probable, where a degree overseas is the goal, or where the child learns best by explaining.",
      ],
      table: {
        caption: "Five routes compared for a Mount Abu family",
        columns: ["Point", "Rajasthan Board", "CBSE", "ICSE / ISC", "IB", "IGCSE"],
        rows: [
          ["On the plateau", "Yes, government and private schools", "A few schools", "Yes, the well-known boarding schools", "No school found", "No school found"],
          ["How learning is judged", "Written board exams", "Board exams with application", "Wide-syllabus written exams", "Exams, coursework and essay", "Tiered external papers"],
          ["Route to Indian entrance exams", "NEET, JEE, CUET", "NEET, JEE, CUET", "NEET, JEE, CUET", "AIU equivalence, CUET or direct entry", "Class 11 at any board, or A Level"],
          ["Studying it from Mount Abu", "School and coaching", "School and coaching", "School and coaching", "Online tutor, or a move", "Online tutor and private entry"],
        ],
      },
    },
    {
      heading: "What determines the cost of IB or IGCSE tuition in Mount Abu?",
      paragraphs: [
        "Prices vary too much to print. A reading helper for a Class 4 child and a Higher Level Chemistry coach are different professionals, so we begin by listening and then send a written quote. You decide after you have read it.",
        "Four levers move the number. How rare the subject specialist is. How well the tutor knows your child's exact specification. How many sessions per week you want. And whether you plan a calm year or a closing sprint.",
        "Set that beside what the alternatives cost on a hill. The long ghat road to Abu Road or Sirohi. Hotel nights in Udaipur or Ahmedabad for a child sent away to study. A rented room in a coaching city. Teaching through a laptop avoids all of it.",
        "Try before you buy: the first lesson is full length, free, and taught by a working tutor.",
      ],
      bullets: [
        "The fee follows subject, level, tutor record, weekly hours and plan length",
        "You receive a written quote first",
        "No money spent on travel, hotels or rent",
        "A complete opening class at no cost",
      ],
    },
    {
      heading: "Online tutor, coaching class, local teacher or self-study: what works on the plateau?",
      paragraphs: [
        "Coaching on the plateau is modest, and the stronger centres sit in Abu Road, Sirohi, Udaipur and Ahmedabad. Their aim is NEET, JEE, CUET and board marks. If you enquire about IGCSE Physics, the likely answer is that it is not offered.",
        "Teachers at the boarding schools can be excellent in English, Science or Mathematics. Marking to an IB scheme or reading a Cambridge examiner report is a different skill, and not many have had reason to practise it.",
        "Studying alone from past papers suits a few very disciplined children, but with nobody to mark, a mistaken method can stay in the notebook for months.",
        "A tutor who has already taught the identical course, online, is the nearest stand-in for a school class. See how the four compare in the table.",
      ],
      table: {
        caption: "Four ways to follow an international course from Mount Abu",
        columns: ["Choice", "Knows the syllabus", "Uses official mark schemes", "Things to know"],
        rows: [
          ["Online one-to-one tutor", "Selected by board, subject and level", "Yes", "Needs a laptop and steady internet; signal can be patchy on some slopes"],
          ["Coaching class", "IB and IGCSE rarely covered", "Not applicable", "Fixed batches and a trip down the ghat road"],
          ["Local private teacher", "Varies with background", "Seldom", "Flexible but hard to find"],
          ["Self-study", "Only what the specification says", "No", "Free, with slow feedback"],
        ],
      },
    },
    {
      heading: "How do the tourist seasons, the monsoon and winter cold shape the exam year in Mount Abu?",
      paragraphs: [
        "IB Diploma papers arrive in May and November, while Cambridge and Edexcel IGCSE examine in spring, summer and autumn series. Most Indian candidates choose May, which is bad news on the plateau: April to June is the peak tourist season, when hotels are full and hotel families are at their busiest. A student whose parents run a guest house may find the house noisy and the family distracted just when revision peaks.",
        "Mount Abu is also the wettest place in Rajasthan, with heavy monsoon rain, fog and sometimes landslides on the ghat road from July to September. Visitors return at Diwali in October and November, and winter brings crisp, cold mornings with frost. The temperature has fallen below freezing on the plateau in January. Navratri, Diwali and local fairs set family time.",
        "We therefore plan the heaviest content teaching for the monsoon and cooler months, when the town is quieter, hold timed papers in the mornings or late evenings in April and May, and keep a spare slot each week for connection problems in fog or storms.",
      ],
      table: {
        caption: "A year's plan for a Mount Abu candidate aiming at May",
        columns: ["Period", "Study priority", "Local factor"],
        rows: [
          ["June to August", "Start the course, set habits", "Heavy monsoon, fog, landslide risk on the ghat"],
          ["September to October", "Main topics, first assessments", "Navratri, Dussehra, Diwali visitors begin"],
          ["November to January", "Practice papers, internal drafts", "Diwali crowds, then cold dry weather and frost"],
          ["February to March", "Mocks and corrections", "Holi, quiet town, clear skies"],
          ["April to May", "Timed papers, last revision", "Peak tourist season; early or late slots"],
        ],
      },
    },
    {
      heading: "What can a Mount Abu student do after IB or IGCSE?",
      paragraphs: [
        "The route turns on the certificate your child will hold, the subjects behind it and the country in view. Sorting out the paperwork in Class 11 keeps Class 12 calm.",
        "Within India, public universities normally require a Diploma graduate to bring an equivalence letter from the Association of Indian Universities, whereas some private universities simply read the IB score. CUET-UG publishes its stance on international boards each year. IGCSE graduates usually enter Class 11 at a CBSE, ICSE or IB school, or move on to A Level.",
        "Medicine and engineering depend on the subject list: Biology for NEET-UG, Mathematics for JEE Main, with Physics and Chemistry in both. Rajasthan runs counselling of its own for state seats, and international-board candidates may face different conditions, so check them yearly.",
        "Abroad, the UK works through UCAS, Canada and Australia mostly take direct applications, and American colleges use the Common Application. Hotel and hospitality families often look at hospitality management degrees in Switzerland, the UK or Australia, which reward strong English and Business Management. A tutor builds the subject strength every application stands on.",
      ],
      bullets: [
        "AIU equivalence letter for public universities",
        "Recheck CUET-UG, JEE Main, NEET-UG and Rajasthan counselling notices each year",
        "UCAS, direct entry or the Common Application abroad",
        "Match Diploma subjects to the planned degree",
      ],
    },
    {
      heading: "What does an IB Business, Maths or science class look like on video?",
      paragraphs: [
        "Imagine a shared whiteboard. The tutor lays out a method, your child tries the next question on paper beside the laptop, and a photo of the page lets the tutor read the real working. Slips in layout and units are spotted along with wrong answers.",
        "At Diploma level there are two Mathematics courses. Analysis and Approaches rewards a liking for algebra and calculus and points to engineering or architecture. Applications and Interpretation deals with data, probability and finance using technology, and suits hospitality, commerce and life-science plans. Discuss the degree with the tutor before the form is signed.",
        "Business Management is popular in a tourist town. Students practise reading a case study quickly, picking a tool such as break-even or SWOT, and applying it to the firm in front of them, which comes naturally to a child who has watched a hotel run.",
        "Fog and monsoon storms can interrupt the signal on the plateau, so keep a charged laptop and a phone hotspot close during timed papers.",
      ],
    },
    {
      heading: "Which IGCSE tier should a Mount Abu student choose, Core or Extended?",
      paragraphs: [
        "Think of the tier as a lid on the grade. Core results stop at C. Extended results climb to A star. Sit Core and your child will never see a grade above C, no matter how well the paper goes.",
        "Aiming for the IB Diploma, A Level sciences or a demanding degree? Enter Extended for Mathematics and the sciences. Finding a subject hard, or taking it for breadth? Core can be the kinder choice. Some months into lessons the tutor can look again and suggest a switch while entries are open.",
        "Then fill the timetable. English and Mathematics suit nearly everyone, alongside two or three sciences and one of Travel and Tourism, Business or Environmental Management. English as a second language is a dependable scorer for students from multilingual homes.",
        "The vocabulary differs by board: Cambridge uses Core and Extended, Edexcel uses Foundation and Higher. Tell us your child's board and we match a tutor to it.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Give the class, board, subject, level and exam sitting." },
    { title: "Look at the suggestion", description: "We put forward a tutor who has taught that syllabus." },
    { title: "Join a free class", description: "A full lesson, with nothing to pay and no commitment." },
    { title: "Settle the terms", description: "One short note gives rate, timings and a plan for month one." },
    { title: "Study on", description: "Weekly classes, written summaries and a swap if needed." },
  ],

  whyPoints: [
    { title: "Chosen for the course", description: "Your tutor has taught this subject, level and board before." },
    { title: "Flexible for the tourist season", description: "Slots move around the peak months when hotel families are busiest." },
    { title: "Straight about schools", description: "We say that the famous boarding schools here follow Indian boards, not IB or IGCSE." },
    { title: "Records you can follow", description: "A short written summary closes each lesson." },
    { title: "A free first lesson", description: "Watch the teaching before you pay." },
    { title: "Honest coaching", description: "Assessed work always stays with the student." },
  ],

  tutorsIntro:
    "Every tutor teaches from India on Indian time, which leaves Mount Abu with nothing to convert. A profile arrives before the trial and the match considers course, level and manner.",

  faqs: [
    { question: "Mount Abu has famous boarding schools. Do any of them teach the IB or IGCSE?", answer: "Not that we could confirm. The best-known schools, St. Mary's High School and Sophia High School, follow the ICSE and other Indian boards. We found no IB or Cambridge or Edexcel IGCSE programme in Mount Abu or Abu Road. Before assuming otherwise, check each school's website and the IB and Cambridge directories." },
    { question: "Will a teacher climb the hill to our house?", answer: "No. A teacher sitting beside the child at home is something IB Gram offers only in Gurugram and parts of Delhi NCR. On the plateau the teacher is on the laptop, live and one to one, while your child works at the usual desk. Your choice of tutor is not limited by the ghat road." },
    { question: "How is IGCSE home tuition arranged from Mount Abu?", answer: "Message the subject and board. We name a Cambridge or Edexcel tutor who has taught that exact paper, and classes follow by video at hours you pick. With no travel involved, you can ask for a particular tier, paper or exam series, and we match on that." },
    { question: "Where can a Mount Abu private candidate sit IGCSE papers?", answer: "At an approved centre that accepts outside entries, realistically in Udaipur, Ahmedabad or Jaipur. Both boards publish centre lists and sign-up deadlines many months ahead, so ask early about practical papers and fees. We handle preparation; the family and the centre handle registration and the sitting." },
    { question: "What will it cost, and what happens in the trial?", answer: "The trial is a normal lesson with a practising tutor and costs nothing, so you can watch your child at work. A written quote follows, based on the tutor's experience, the subject and level, and weekly hours. Higher Level sciences usually cost more than primary help. Travel is never added." },
    { question: "Which subjects are most requested in Mount Abu?", answer: "Business Management, Economics, English and the sciences feature strongly, reflecting hospitality, medical and engineering plans. Mathematics is near-universal. Environmental Systems and, at IGCSE, Travel and Tourism suit a town that lives on visitors. Theory of Knowledge is asked about now and then; tutors discuss ideas but never write the essay." },
    { question: "Does the IB Diploma still allow NEET or JEE entry?", answer: "Often, though not automatically. Each year the agencies publish eligibility rules, typically requiring Physics and Chemistry with Biology or Mathematics, and many ask for an equivalence certificate. Rajasthan counselling may treat international-board students on different terms. Choose Diploma subjects with that in mind and read the notice before Class 12." },
    { question: "How do the tourist months affect lessons?", answer: "From April to June, hotel and guest-house families work flat out and the house may be noisy. We move classes to early mornings or late evenings, and a session lost to a busy day is rebooked free. The lesson note records where each class stopped, so nothing is covered twice." },
    { question: "What if fog or monsoon storms cut the connection?", answer: "Keep a mobile hotspot beside the laptop. If a call fails, the minutes are made up in a later slot and the note records what was covered before the break. July and August bring the heaviest rain, so we try to place demanding teaching before and after those weeks." },
    { question: "Can a tutor write the Extended Essay or an internal assessment?", answer: "No, because that would be unfair to your child and risky for the Diploma. Tutors explain the criteria, challenge a weak research question and comment broadly on structure. Every sentence, number and argument has to come from the student, which also builds skills universities value." },
    { question: "When is a good time to start IGCSE work?", answer: "Class 8 or 9 allows a relaxed start. A few months of light work help a child move from reciting answers to giving reasons. First lessons deal with command words and basics, with timed past papers later. A single trial shows how your child copes and how many weekly hours are realistic." },
    { question: "My child's home language is Hindi or Gujarati. Is English-only teaching a problem?", answer: "Seldom for long. Teaching is in English because the papers are, though every tutor is Indian and can clear up a hard point in Hindi, and we look for someone who understands the switch. IB Hindi B or IB Gujarati B can be studied alongside the main subjects." },
    { question: "What internet speed do we need on the plateau?", answer: "About 5 Mbps, held steady, is enough. Fibre or reliable Wi-Fi beats mobile data, and some slopes have patchy signal, so a spare hotspot is sensible. When a call drops, the missing minutes are made up and the note shows what was covered." },
    { question: "How many lessons per week should we plan?", answer: "Start with one hour a week plus homework. In the final month before papers, move to two, three or four sessions. The tutor reads past-paper marks and recommends adjustments, and you can change the plan whenever you send written notice." },
    { question: "What is the quickest way to begin?", answer: "WhatsApp +91 7439 368 115 or email support@ibgram.com with the class, board, subject and a convenient time. A tutor is normally suggested within a few days and the trial follows. You are not obliged to continue, and you may ask for another tutor before you pay." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The Indian cities where our tutors teach online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How our IB tutoring works." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Our Cambridge and Edexcel IGCSE tutoring." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the core and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Help for inquiry-led primary years." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Both Mathematics courses at both levels." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse specialist tutor profiles." },
    { label: "Contact us", href: "/contact-us/", description: "Write to us to arrange a trial lesson." },
    { label: "IB and IGCSE tutors in Udaipur", href: "/udaipur/", description: "Our page for the nearest Rajasthan city with international schools." },
    { label: "IB and IGCSE tutors in Pali", href: "/pali/", description: "Our page for the Marwar city to the north." },
    { label: "IB and IGCSE tutors in Ajmer", href: "/ajmer/", description: "Our page for the city of Mayo College." },
  ],

  closingHeading: "Ask for a free lesson from Mount Abu",
  closingBody:
    "Tell us the programme, subject and sitting and a tutor who has taught that course will be put forward. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp; the opening lesson costs you nothing.",
};
