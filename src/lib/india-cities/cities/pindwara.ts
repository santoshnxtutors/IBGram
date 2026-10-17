import type { CitySeoPage } from "../types";

/**
 * Pindwara is a marble and stone-carving municipality in Sirohi district, Rajasthan, in the Aravallis
 * about 100 km from Udaipur. No IB or Cambridge school there could be confirmed, so stripSchools is
 * empty and the clusters point to Udaipur and Ahmedabad using names already checked on the Sirohi page.
 */
export const pindwara: CitySeoPage = {
  slug: "pindwara",
  countryName: "Pindwara",
  countryNameLong: "Pindwara, Rajasthan",
  demonym: "Pindwara",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Cooler evening hours once the workshops close, with Sunday mornings kept clear for longer papers",
  lastUpdated: "2026-09-21",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  geo: { latitude: 24.7944, longitude: 73.055 },
  wikipedia: "https://en.wikipedia.org/wiki/Pindwara",
  alternateNames: ["Pindwara Sirohi", "Pindwara Rajasthan", "Pindwada", "Pindwara tehsil"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Pindwara | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Pindwara in Sirohi district: live private lessons online from home, tutors matched to your papers, plus a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition from Home in Pindwara",
  heroEyebrow: "IB & IGCSE TUITION FOR PINDWARA, SIROHI DISTRICT",
  heroSubtitle:
    "For an IB or IGCSE student in Pindwara, private tuition at home is an online lesson with one teacher and one student, since IB Gram tutors go to houses only in Gurugram and parts of Delhi NCR. Pindwara sits in the Aravallis, famous for marble and stone carving, about a hundred kilometres from the nearest Cambridge schools in Udaipur. A tutor who has taught your child's exact papers makes the biggest difference. Tell us the course and we book a free first lesson.",
  primaryKeyword: "IB and IGCSE tutors in Pindwara",
  imageAltText: "Pindwara student in a live one-to-one online IGCSE Physics class with a tutor, working at home in Rajasthan",
  secondaryKeywords: [
    "IB tutor in Pindwara",
    "IGCSE tutor in Pindwara",
    "IB home tuition Pindwara",
    "IGCSE home tuition Pindwara",
    "IB private tuition Pindwara",
    "IB Maths tutor Pindwara",
    "IGCSE Maths tutor Pindwara",
    "IB Physics tutor Pindwara",
    "IB Chemistry tutor Pindwara",
    "IB Biology tutor Pindwara",
    "IB DP tutor Pindwara",
    "IB MYP tutor Pindwara",
    "IB PYP tutor Pindwara",
    "IGCSE online tuition Pindwara",
    "IB tutor Pindwara Sirohi",
    "IGCSE tutor Abu Road",
    "IB online classes Sirohi district",
    "IB tuition south Rajasthan",
  ],

  heroTrustPoints: [
    "Teaching is live and for one student, never a recording or a crowded batch",
    "Tutors experienced in IB DP, MYP, PYP and in Cambridge or Edexcel IGCSE",
    "Class times set around workshop hours and Rajasthan's summer heat",
    "A free first lesson and a written summary after every class",
    "A replacement tutor at no charge if the first one is not right",
  ],
  heroStats: [
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before any payment" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "Where stone is carved, an international syllabus is rare",
    paragraphs: [
      "Pindwara is a municipality and tehsil of about twenty-four thousand people in Sirohi district, tucked between the Aravalli hills and the Marwar plains at roughly 370 metres. For generations it has been a centre of marble and stone carving, and carved pieces for large temples, including work associated with the Akshardham temples and the Ram temple at Ayodhya, have been made here. After Abu Road it is one of the district's main commercial centres. Literacy is above the state average, and most children attend Rajasthan Board or CBSE schools.",
      "A few Pindwara families look beyond that. A sculptor's son who sells to clients abroad, a doctor at a district hospital, a parent returning from the Gulf, or relatives in Ahmedabad or the UK can all make the IB or a Cambridge or Edexcel IGCSE seem a sensible choice. The trouble is distance. We could not confirm a school in Pindwara or Sirohi district that teaches those syllabuses. Udaipur, about a hundred kilometres away, and Ahmedabad, some 230, hold the nearest campuses.",
      "The practical answer is an online tutor who has taught the exact papers, meeting the student on screen at a regular hour. Tutors do not visit homes in Pindwara. IB Gram is independent of the IB, Cambridge, Pearson and every school, and our tutors explain and coach without ever writing assessments, essays or coursework on a student's behalf.",
    ],
  },

  programmesIntro:
    "In a stone-carving town the IB programmes arrive by an unusual route: a move, an online school or a plan for study abroad. The tutor's role depends on the child's stage.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Themed units of inquiry ending in a pupil-led Exhibition. For small children the work is shared reading, counting games and giving them time to say what they think.",
      countryNote:
        "A Pindwara child hears Marwari, Mewari or Hindi at home and in the workshop family, so English grows best in short, cheerful slots.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subjects marked on published criteria, closing with the Personal Project. A tutor shows how to break down a task and write toward each band.",
      countryNote:
        "A student from Rajasthan Board textbooks must adjust to criterion marking. Weekly help in the first two terms usually settles it.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects with Theory of Knowledge, the Extended Essay and CAS. The tutor prepares for exam papers and explains coursework marking, leaving the writing to the student.",
      countryNote:
        "A Diploma student near the Aravallis seldom has a Higher Level teacher within reach, so an online specialist covers the gap.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Diploma courses combined with a vocational strand and a reflective project. Help covers those courses and academic English.",
      countryNote:
        "CP is almost unknown in southern Rajasthan. Each request is handled on its own and a tutor is matched to the courses chosen.",
    },
  ],

  subjectsIntro:
    "We pick by course and level, and prefer tutors who know students arriving from Rajasthan Board or Hindi-medium classrooms.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Differentiation, integration, vectors and logical argument for future engineers, with unaided starter questions to keep Paper 1 familiar." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Data, probability and modelling, using quarry output and marble pricing as realistic material for statistics questions." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics through fields and quantum ideas, with attention to graphs, uncertainties and the lab-report format." },
    { name: "Chemistry", levels: "SL / HL", description: "Moles, energetics, rates, equilibrium and organic routes; the chemistry of limestone and marble offers handy examples for carbonates." },
    { name: "Biology", levels: "SL / HL", description: "Cells, genetics, human physiology and ecology, learned in the precise words mark schemes reward." },
    { name: "Economics", levels: "SL / HL", description: "Markets, policy, trade and development, using stone exports, craft pricing and tourism around Mount Abu as live cases." },
    { name: "Business Management", levels: "SL / HL", description: "Reading cases, finance ratios and choosing a management tool, an easy subject to ground in a workshop family's experience." },
    { name: "Computer Science", levels: "SL / HL", description: "Breaking problems down, data structures and pseudocode in the form papers use." },
    { name: "Psychology", levels: "SL / HL", description: "Landmark studies, how to criticise them and how to build an essay that earns the top band." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Detailed reading of unseen passages, comparison essays and rehearsal of the individual oral." },
    { name: "Hindi A / Hindi B", levels: "SL / HL", description: "Literary study for native speakers, or organised reading and writing for Hindi B." },
    { name: "Visual Arts", levels: "SL / HL", description: "Developing a studio portfolio and comparative study; students from a carving town often bring unusual technical skill." },
    { name: "Theory of Knowledge", levels: "Core", description: "Trying out knowledge arguments and planning the exhibition, all in the student's own words." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE are both taught. Make the Core or Extended choice in Class 9, as it sets the highest possible grade.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with an honest conversation about which tier fits." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "A first look at calculus and functions, before IB Mathematics AA or A Level." },
    { name: "Physics (0625 / 4PH1)", levels: "Core / Extended", description: "Mechanics, electricity, waves and thermal physics, plus experiment-design questions from the practical paper." },
    { name: "Chemistry (0620 / 4CH1)", levels: "Core / Extended", description: "Atoms, bonding, reactivity and organic families, including carbonates, with ion tests learned thoroughly." },
    { name: "Biology (0610 / 4BI1)", levels: "Core / Extended", description: "Cells, enzymes, inheritance and ecosystems, with practice at describing an experiment as examiners expect." },
    { name: "Computer Science (0478)", levels: "Single tier", description: "Designing algorithms, tracing them by hand, number systems and databases." },
    { name: "English as a Second Language", levels: "Single tier", description: "Reading, directed writing and speaking for pupils who use Marwari or Hindi at home." },
    { name: "Hindi as a Second Language (0549)", levels: "Single tier", description: "Reading comprehension, letter writing and brief essays in the syllabus format." },
    { name: "Art and Design (0400)", levels: "Single tier", description: "Coursework portfolio and controlled test, a natural strength for children raised around sculptors." },
  ],

  regionsTitle: "Pindwara and the Sirohi-side places we teach",
  regionsIntro:
    "All lessons are online, so what matters is signal, heat, power and the length of the school day. This is how we read each place.",
  regions: [
    { name: "Pindwara town", note: "The municipal centre with its carving workshops, schools and tuition shops; mobile data is usually enough for video lessons." },
    { name: "Stone-carving workshop lanes", note: "Households of sculptors and stone traders, where evenings are when the workshop noise finally drops." },
    { name: "Aravalli foothill villages", note: "Settlements in the tehsil's hundred-odd villages where signal can be patchy and a second SIM is wise." },
    { name: "Abu Road", note: "The district's other main commercial centre and a railway junction, with a larger range of schools." },
    { name: "Mount Abu", note: "The hill station nearby, whose hospitality families sometimes look for English-medium schooling." },
    { name: "Sirohi", note: "The district headquarters, with government offices, hospitals and colleges." },
    { name: "Falna", note: "A railway town to the north-east on the same line, with its own market and schools." },
    { name: "Palanpur, Gujarat", note: "The nearest large Gujarat town, an important rail and trade link for Pindwara families." },
    { name: "Udaipur", note: "The nearest city with confirmed Cambridge schools, about a hundred kilometres away, and a regional airport." },
  ],

  schoolClusters: [
    {
      city: "Pindwara and Sirohi district",
      note: "We could not confirm an IB or Cambridge school in Pindwara or elsewhere in Sirohi district, so local choice is limited. Students study online, privately or after relocating.",
      schools: [],
    },
    {
      city: "Nearby: Udaipur",
      note: "Roughly three hours by road, Udaipur is the closest Rajasthan city with confirmed IB and Cambridge schools, a natural choice for a Pindwara family weighing a move or boarding.",
      schools: ["Rockwoods International School", "Seedling The World School", "Crossroads International School"],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "A major Gujarat city on the same rail corridor, with a deeper set of IB and Cambridge schools, and a place many Sirohi families already visit for work or healthcare.",
      schools: ["Calorx Olive International School", "Ahmedabad International School", "Eklavya School"],
    },
  ],
  schoolDisclaimer:
    "No school on this page is connected with IB Gram. Rockwoods, Seedling, Crossroads, Calorx Olive, Ahmedabad International and Eklavya appear only because they are the nearest campuses we know of that teach an international programme, which does not amount to advice. Direct admission questions to the school.",

  tutorsIntro:
    "Tutors work from across India on Indian time. For a Pindwara student that means a match based on subject depth and clarity of explanation, not on where the tutor lives.",

  modesIntro:
    "Every lesson in Pindwara is online. Families usually choose one of three arrangements.",
  modes: [
    {
      title: "Weekly online lesson at your own table",
      description: "A tutor appears on screen, a whiteboard is shared, and the work happens in your child's own room.",
      bullets: [
        "House calls belong to Gurugram and parts of Delhi NCR, so no tutor travels to Pindwara",
        "All that is required is a laptop, a notebook and a pair of headphones",
        "Written solutions are shown to the camera and fixed straight away",
        "A few lines for parents arrive when the lesson is over",
      ],
    },
    {
      title: "Intensive weeks before the papers",
      description: "More frequent lessons through the month before the May or November sitting.",
      bullets: [
        "Several lessons each week for about four weeks",
        "Genuine past papers, graded against the published mark scheme",
        "Topics that the mock exposed are tackled first",
        "A pause for rest before the first paper",
      ],
    },
    {
      title: "A standing slot all year",
      description: "One subject, one time and one tutor, every week of the school year.",
      bullets: [
        "Stops the syllabus from running away from the student",
        "Helpful in MYP and in the first Diploma year",
        "Adjusts for Gangaur, Teej, Navratri and school tests",
        "Begins with a trial lesson that costs nothing",
      ],
    },
  ],

  sections: [
    {
      heading: "Which routes could a Pindwara family take to the IB or IGCSE?",
      paragraphs: [
        "A family has four choices in practice. An online international school sends lessons to a laptop at home. A campus in Udaipur or Ahmedabad takes the child as a day student or boarder. A move, perhaps for a business or a posting, changes the school. Or the student registers privately for IGCSE papers at an approved centre. The tutor's part is different in each case.",
        "A child at an online school attends lessons without necessarily having a person who checks the learning. A boarder home for the holidays wants one troublesome unit fixed. A family about to relocate needs the new school's speed matched. A private candidate has nobody setting the pace, so the tutor becomes the syllabus calendar.",
        "We do not recommend any one of them. The child's age, comfort with English and the university plan decide the matter, and we can explain frankly what each would ask of a tutor.",
        "If you cannot decide, sit one lesson in the subject your child dreads. In an hour an experienced teacher can show how close or far the student is from the course standard, something no brochure manages.",
      ],
    },
    {
      heading: "Rajasthan Board, CBSE, IB or IGCSE: what changes for a Sirohi student?",
      paragraphs: [
        "Rajasthan Board or CBSE at Class 10 and 12 is the usual route for Pindwara students, followed by Udaipur, Jodhpur, Jaipur or Ahmedabad through JEE Main, NEET-UG or CUET-UG. Those exams pay for recall and speed. IB and IGCSE papers pay for reasoning, working with data and extended answers in English.",
        "A change of board rarely uncovers missing facts; what it uncovers is a gap in understanding command words and mark schemes, which a few focused weeks can close.",
      ],
      table: {
        caption: "Four systems as a Sirohi family meets them",
        columns: ["System", "How the result is built", "Language", "Where students usually head"],
        rows: [
          ["Rajasthan Board (RBSE)", "Papers set annually by the state at Class 10 and 12", "Hindi or English", "Local colleges, JEE Main, NEET-UG, CUET-UG"],
          ["CBSE", "Board examinations alongside marks the school awards", "English or Hindi", "JEE Main, NEET-UG, CUET-UG"],
          ["IB Diploma", "Six subjects marked on coursework and final exams", "English", "Universities abroad, Indian private universities, or CUET-UG once equivalence is granted"],
          ["Cambridge or Edexcel IGCSE", "Taken at Core or at Extended level", "English", "IB Diploma or A Level, then university"],
        ],
      },
    },
    {
      heading: "How is the cost of IB and IGCSE tuition in Pindwara decided?",
      paragraphs: [
        "The cost of IB and IGCSE tuition in Pindwara depends on four inputs: subject, level, tutor experience and number of weekly lessons. A quote in writing always comes first. One tariff for all would make no sense, as a Class 7 language class and Higher Level Chemistry are not alike.",
        "Because nobody travels and tutors come from all over India, a Pindwara family picks on subject strength alone, whereas the closest equal specialist could otherwise be in Udaipur or Ahmedabad.",
        "The calendar of lessons matters more than their number. Habits are formed in a programme's first term, gaps surface after the mocks, and the last fortnight is for polish. Plenty of families start with Mathematics alone, adding a science a month later.",
      ],
      bullets: [
        "Higher Level science and mathematics tutors usually cost more than junior-language ones",
        "Tutors for PYP, MYP, the Diploma and IGCSE are mostly different people",
        "Lessons spread across a year usually cost less than a last-minute rush",
        "Booking late leaves fewer tutors to pick from",
        "Committing for longer makes timetables easier",
      ],
    },
    {
      heading: "Coaching class, online tutor or self-study around Pindwara?",
      paragraphs: [
        "Pindwara parents usually weigh three things. Coaching classes in Abu Road, Sirohi or Udaipur are built for Rajasthan Board and entrance exams, and rarely handle IB or IGCSE papers. Free videos explain content without ever grading a student's attempt. A private online tutor knows the papers and corrects the work, needing in return a quiet room and a connection that does not drop.",
        "As the last column says, video cannot place apparatus in a pupil's hands.",
      ],
      table: {
        caption: "Study routes open to a Pindwara student",
        columns: ["Option", "Upside", "Downside", "Fits"],
        rows: [
          ["Online private tutor", "Teaching tied to the syllabus, with marked practice", "Needs signal; no hands-on lab", "Most IB and IGCSE students"],
          ["Coaching class in a nearby town", "Classmates and a fixed timetable", "Built for board and entrance exams, and needs travel", "Those who also sit Rajasthan Board or CBSE papers"],
          ["Self-study with videos", "Cheap and available at any hour", "Nobody marks the work", "Revising topics already understood"],
          ["Campus in Udaipur or Ahmedabad", "Labs, teachers and classmates on one campus", "Cost and living apart from family", "Families who want the full school experience"],
        ],
      },
    },
    {
      heading: "Summer heat, monsoon rain and Rajasthan festivals: a Pindwara year",
      paragraphs: [
        "Pindwara sits where the Aravalli hills meet the Marwar plains, with a steppe climate: hot summers near thirty-seven degrees on average and often well above, May the warmest month, and cool winters that can drop close to freezing at night. The May IB and IGCSE session is sat in heat, so dawn and evening lessons suit best, and mock papers in a warm room are useful practice.",
        "The monsoon from July brings welcome rain to the hills, with some road disruption and the odd power cut. Marble workshops run through the year, though the heaviest shipping often follows temple-season orders, and many parents work long hours. We keep lesson times flexible for such weeks.",
        "Rajasthan keeps a bright festival calendar. Holi in March, Gangaur in the spring, Teej in the monsoon, Navratri and Dussehra in October and Diwali in October or November fill the autumn. Mount Abu's summer festival in June draws visitors to the district. The November IB and IGCSE sessions fall close to Diwali, so we move heavy revision earlier and keep festival weeks light.",
      ],
      table: {
        caption: "A study year in Pindwara",
        columns: ["Months", "Local pattern", "Tutoring plan"],
        rows: [
          ["January to March", "Cool weather, Holi, school exams", "Steady topic work, mock papers"],
          ["April to June", "Gangaur, peak heat, May sessions", "Dawn or late classes, timed past papers"],
          ["July to September", "Monsoon, Teej, new term", "Flexible slots, assessment planning"],
          ["October to December", "Navratri, Dussehra, Diwali, November sessions", "Mocks early, light festival weeks"],
        ],
      },
    },
    {
      heading: "Where do Pindwara students go after an international syllabus?",
      paragraphs: [
        "Pindwara students typically go on to universities overseas, private universities within India, or central and state institutions via national tests.",
        "A degree in India normally calls for the Association of Indian Universities' equivalence certificate, granted to Diploma holders and to IGCSE-then-A-Level students, and for central universities a CUET-UG score. As NEET and JEE vary their eligibility rules, always read that year's notice before dropping a science or mathematics subject.",
        "Reachable choices include Mohanlal Sukhadia University at Udaipur, colleges in Jodhpur and Jaipur, IIT Jodhpur, and Ahmedabad's institutes, among them design and management schools. Children of a carving town sometimes look at design, architecture and fine arts. Applicants abroad lean towards the UK, Canada, the US, Australia and Singapore; admissions-test coaching is separate.",
        "Decide on the degree, then let it set the subjects. One short chat ahead of the school's deadline normally suffices.",
      ],
    },
    {
      heading: "What does IB Mathematics and science teaching look like on screen?",
      paragraphs: [
        "Every Diploma student picks one of two mathematics routes. Analysis and Approaches suits people who like algebra and calculus, typically future engineers. Applications and Interpretation suits people who like data, probability and modelling, often those heading for commerce or the social sciences. Our advice rests on fit and not on status.",
        "On a common whiteboard the tutor reads each line as it appears and corrects at once. Calculator-free practice happens in the first minutes of every class; calculator practice concentrates on tidy presentation, so that method marks are never thrown away, and on knowing the permitted device inside out.",
        "In the sciences, examiners reward small disciplines: reading the scale on an axis, writing the unit, carrying an explanation through to its consequence. Every session isolates one of these and practises it on real past questions. Showing how an experiment is run is easy on video, though the feel of glassware and circuits has to come from a laboratory.",
        "We begin with single topics, then use mixed sets, then finish with full timed papers; speed follows understanding.",
      ],
    },
    {
      heading: "Can a stone-carving childhood help in the IB?",
      paragraphs: [
        "Pindwara has an advantage that few towns can claim. Children here grow up near people who turn blocks of marble into temple pillars, brackets and figures, some of them destined for large temples elsewhere in India. That familiarity with form, proportion and patience carries straight into several Diploma and IGCSE subjects, and a good tutor will use it rather than ignore it.",
        "Visual Arts asks for a process portfolio, a comparative study and an exhibition, and a student who has watched a chisel work knows what a process journal should record: tools, mistakes, decisions and revisions. Design Technology rewards the same attention to materials. In Physics, the strength of stone, load on a lintel or the geometry of an arch makes statics feel real, and in Chemistry the behaviour of calcium carbonate under acid is a classic practical.",
        "Careers matter too. Some Pindwara children go into the family workshop, and some want architecture, product design or heritage conservation. Architecture entry in India usually runs through JEE Main Paper 2 or NATA, and abroad through portfolios, so the choice of subjects and the quality of a portfolio both count. Mathematics at the right level keeps structural and architectural courses open.",
        "We are not art teachers by default, and we only match a student with a visual arts or design tutor where one is available. What we can offer is help with the written parts, the comparative study, the Extended Essay planning and the exam subjects, always leaving the creative work and the writing to the student.",
      ],
    },
    {
      heading: "Core, Extended and choosing IGCSE subjects",
      paragraphs: [
        "Some IGCSE subjects are examined at Core or at Extended level. Core limits the highest grade attainable; Extended does not. Students planning IB Mathematics AA or A Level sciences afterwards should enter at Extended level.",
        "IGCSE courses are catalogued by number, Physics being 0625 for Cambridge and 4PH1 for Edexcel. Mention it when you first write and the specification will be known before the first class.",
        "Aim for flexibility: a science the child enjoys, a mathematics tier that stretches but does not overwhelm, and the language of home. English is taken for granted and Hindi is the usual extra. For a sculptor's child, Art and Design is a strong candidate.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Message +91 7439 368 115 on WhatsApp with the board, programme, subject and exam sitting, and say you are in Pindwara." },
    { title: "Get a tutor suggestion", description: "We suggest a tutor who knows that syllabus and is free in the evenings." },
    { title: "Take the first lesson", description: "Lesson one costs nothing and works on a topic the student finds tough." },
    { title: "Confirm in writing", description: "We put the subject, weekly timings and fee in writing before you pay." },
    { title: "Review and adjust", description: "A note comes after each class, and swapping tutor or time is simple." },
  ],

  whyPoints: [
    { title: "Plain about the format", description: "Online only in Pindwara; no suggestion of a house call." },
    { title: "Matched to the papers", description: "We match on course, level and board as well as subject." },
    { title: "A note after every class", description: "Parents read what was covered and what comes next." },
    { title: "Planned around the climate", description: "Schedules bend for summer heat, power cuts and festivals." },
    { title: "Coaching, not writing", description: "No tutor writes assessments, essays or coursework." },
    { title: "Easy to change", description: "If a tutor does not suit, we replace them free of charge." },
  ],

  faqs: [
    { question: "Is a home visit possible for my child in Pindwara?", answer: "Not in Rajasthan. Teachers go to homes only in Gurugram and parts of Delhi NCR. A Pindwara student studies through a live video class instead, sharing a writing board with the tutor and receiving a written summary afterwards. Rain on the ghat road or a blocked lane near the workshops does not stop it." },
    { question: "What will lessons cost a family in Pindwara?", answer: "There is no price list. The figure depends on which subject, which level, how senior the tutor is and how many sessions a week, and you get it in writing before agreeing to anything. Since the first session is free, you can judge the teaching before you spend." },
    { question: "Does Sirohi district have any IB or Cambridge school?", answer: "None that we could verify. Udaipur, about a hundred kilometres away, and Ahmedabad, about 230, have the closest campuses we could confirm. For most Pindwara families that is too far for a daily trip, which is why online schooling or private study is common. Check any school directly." },
    { question: "Could my child take IGCSE as a private candidate?", answer: "Very often. The requirements are an approved Cambridge or Edexcel centre that will accept the entry, an arrangement for the practical side of the sciences, and attention to a registration date that never moves. Udaipur or Ahmedabad may host the nearest centre. We handle the teaching only." },
    { question: "Which part of the day is best for studying here?", answer: "Evening, after workshops and shops wind down, and Sunday morning for long papers. Summer afternoons are too hot to be useful. Holi, Gangaur, Navratri and Diwali all disturb the timetable, so the schedule is agreed with them in view." },
    { question: "May a tutor write part of the Extended Essay or an IA?", answer: "No part of it. A tutor can explain the marking criteria, show what a convincing investigation looks like and say where an argument is weak, but producing text, results or conclusions would breach the IB's rules and endanger the diploma. Those belong to your child alone." },
    { question: "How much bandwidth do online lessons really use?", answer: "Very little: a few megabits a second covers video and the shared board, from fixed broadband or a phone hotspot. If monsoon storms might cut power, charge the laptop first and keep a second operator's SIM to hand." },
    { question: "What exactly happens in the free lesson?", answer: "Your child gets an actual class in a topic they find hard, with feedback written up afterwards. If you decide to stop there, nothing is owed. If the personalities do not fit, a different tutor is offered before any payment is discussed." },
    { question: "Are younger children in PYP or MYP taught as well?", answer: "Yes. A primary pupil gets reading practice and number games, an MYP pupil gets help making sense of the criteria, and a Diploma student gets depth in each subject. A tutor who suits can stay with the same child for years." },
    { question: "How do I decide between Mathematics AA and AI?", answer: "Look at the degree. Engineering, as at IIT Jodhpur, depends on calculus, so Analysis and Approaches fits. Economics, psychology and business depend on statistics, so Applications and Interpretation fits. Both come at Standard and Higher Level, and one trial lesson in each is a good test." },
    { question: "Does the IB stop a student from sitting NEET or JEE?", answer: "It need not. Eligibility depends on which subjects were studied and on conditions the testing agency publishes every year, including how it counts the IB or IGCSE with A Level. Only the official bulletin settles it. We cover the Physics, Chemistry, Biology and Mathematics teaching." },
    { question: "Which examination boards can your tutors cover?", answer: "Cambridge International and Pearson Edexcel. Each subject carries a code, such as 0610 for Cambridge Biology and 4BI1 for Edexcel. Tell us the code on your child's list and the tutor we suggest will have taught those papers." },
    { question: "How far ahead should we plan for November?", answer: "Early August works well. Navratri, Dussehra and Diwali crowd the weeks before the November papers, so we keep those weeks light and move the hardest past papers into September." },
    { question: "Can relatives in Abu Road or Sirohi take the same lessons?", answer: "Anyone with a laptop and a dependable connection can. A family in Abu Road, Sirohi, Falna or elsewhere gets exactly the same private live class, timed around their own school day." },
    { question: "How do we begin?", answer: "Message us on WhatsApp, +91 7439 368 115, or email support@ibgram.com. Tell us the class, the subject that troubles your child, the school or online school, and that you are in Pindwara. A tutor suggestion and a trial slot usually arrive within a day." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Sirohi", href: "/sirohi/", description: "The district headquarters with the same online format." },
    { label: "IB and IGCSE tutors in Udaipur", href: "/udaipur/", description: "The nearest city with confirmed Cambridge schools." },
    { label: "IB and IGCSE tutors in Ahmedabad", href: "/ahmedabad/", description: "The Gujarat city with a deeper set of IB and Cambridge schools." },
    { label: "IB and IGCSE tutors in Palanpur", href: "/palanpur/", description: "The nearest large Gujarat town on the rail line." },
    { label: "IB and IGCSE tutors in Jodhpur", href: "/jodhpur/", description: "A larger Rajasthan city with an IIT." },
    { label: "IB tutors across India", href: "/india/", description: "Our national page on live IB and IGCSE lessons." },
    { label: "IGCSE tutors", href: "/igcse/", description: "IGCSE help grouped by subject and board." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "Diploma help by subject, TOK included." },
    { label: "Meet the tutors", href: "/tutors/", description: "Our tutors, listed by subject and programme." },
    { label: "Contact us", href: "/contact-us/", description: "Send a question or arrange your free first lesson." },
  ],

  closingHeading: "Book a free lesson from Pindwara",
  closingBody:
    "Give the class, subject and sitting and we will suggest a tutor and fix a free first class. Contact: WhatsApp +91 7439 368 115, or email support@ibgram.com.",
};
