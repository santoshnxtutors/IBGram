import type { CitySeoPage } from "../types";

/**
 * Sahaspur here is the nagar panchayat town in Bijnor district, Uttar Pradesh (not the Dehradun-district
 * Sahaspur in Uttarakhand). No IB or Cambridge school there could be confirmed, so stripSchools is empty
 * and the clusters point to Dehradun and Mussoorie using names already checked on the Dehradun page.
 */
export const sahaspur: CitySeoPage = {
  slug: "sahaspur",
  countryName: "Sahaspur",
  countryNameLong: "Sahaspur, Uttar Pradesh",
  demonym: "Sahaspur",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-afternoon and early-evening slots in the cold months, and after-dinner slots through the hot, humid summer",
  lastUpdated: "2026-09-21",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  geo: { latitude: 29.1208, longitude: 78.6208 },
  wikipedia: "https://en.wikipedia.org/wiki/Sahaspur",
  alternateNames: ["Sahaspur Bijnor", "Sahaspur UP", "Sahaspur Uttar Pradesh", "Sahespur"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sahaspur | Online Tuition, Bijnor",
  metaDescription:
    "IB and IGCSE tutors for Sahaspur in Bijnor district, UP: private one-to-one lessons online from home, with syllabus-matched teachers and a free trial.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Sahaspur",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR SAHASPUR, BIJNOR DISTRICT",
  heroSubtitle:
    "Written for Sahaspur in Bijnor district, Uttar Pradesh, and not for the Sahaspur near Dehradun. For an IB or IGCSE student here, private home tuition is an online one-to-one class: our tutors do not call at Uttar Pradesh houses, as visits are confined to Gurugram and parts of Delhi NCR. Lessons are live, matched to the exact course and followed by written notes. Tell us the class and subject, and the first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Sahaspur",
  imageAltText: "Sahaspur student in a live online IGCSE Biology tutorial at home with a laptop and a notebook",
  secondaryKeywords: [
    "IB tutor in Sahaspur",
    "IGCSE tutor in Sahaspur",
    "IB home tuition Sahaspur",
    "IGCSE home tuition Sahaspur",
    "IB private tuition Sahaspur",
    "IB Maths tutor Sahaspur",
    "IGCSE Maths tutor Sahaspur",
    "IB Physics tutor Sahaspur",
    "IB Chemistry tutor Sahaspur",
    "IB Biology tutor Sahaspur",
    "IB DP tutor Sahaspur",
    "IB MYP tutor Sahaspur",
    "IB PYP tutor Sahaspur",
    "IGCSE online tuition Sahaspur",
    "IB tutor Sahaspur Bijnor",
    "IGCSE tutor Bijnor district",
    "IB online classes Bijnor",
    "IB tuition Rohilkhand",
  ],

  heroTrustPoints: [
    "Every lesson is live and aimed at a single student, never a recording",
    "Teachers with classroom experience in IB DP, MYP and PYP and in Cambridge or Edexcel IGCSE",
    "Slots that fit Bijnor's winter fog and the Kanwar season road closures",
    "A free first lesson, and a written summary after each class",
    "No-cost replacement if the first tutor is not a good fit",
  ],
  heroStats: [
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before you commit" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "An international syllabus in the sugarcane belt of Bijnor",
    paragraphs: [
      "Sahaspur is a nagar panchayat town in Bijnor district, in the Rohilkhand plain of western Uttar Pradesh, at about two hundred metres above sea level. The surrounding country is sugarcane land, and the crushing season from November to March sets the pace for many households. Literacy in the town is a little below the state average, and most children attend UP Board or CBSE schools in Hindi or English, with eyes on Meerut, Moradabad, Roorkee or Dehradun for college. International-curriculum schools are far off, and we found none in or near the town that we could confirm.",
      "A few families still ask for the IB or a Cambridge or Edexcel IGCSE. Their reasons are usually practical: a parent working in the Gulf, a relative in the UK or Canada, a child who is already enrolled with an online international school, or a plan to study overseas. For those children the question is not whether the syllabus is good but who will explain Paper 2 of Chemistry on a Tuesday evening when the nearest campus is a long drive away.",
      "Our answer is a live online tutor, teaching from elsewhere in India on Indian time, with the child at home and a short written account after each class. Tutors do not travel to Sahaspur, and we would rather say so than imply otherwise. IB Gram works independently of the IB, Cambridge, Pearson and every school, and its tutors coach students but never write assessments, essays or coursework for them.",
    ],
  },

  programmesIntro:
    "In a Bijnor town the IB programmes appear unevenly: through an online school, a family move or a plan for university abroad. A tutor's role changes with the stage.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "A primary framework of themed inquiry units that ends in a student-led Exhibition. Help for young children means patient reading time, number games and room to talk through an idea.",
      countryNote:
        "A child in Sahaspur often hears Hindi, Urdu and local speech more than English at home, so a calm quarter-hour of spoken English inside each session builds confidence gently.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject areas marked on published criteria and capped by the Personal Project. A tutor teaches how to dissect a task and aim each answer at the right band.",
      countryNote:
        "Pupils from UP Board backgrounds must learn that MYP rewards explained reasoning. Regular weekly sessions during the first two terms take most of the strain out of that move.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The full six-subject diploma with Theory of Knowledge, the Extended Essay and CAS. A tutor concentrates on exam preparation and on how coursework is assessed, while the student alone writes it.",
      countryNote:
        "In a district town a Diploma student can seldom find a Higher Level teacher, so a remote specialist often handles the steepest units at the course's own pace.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Diploma courses combined with a career-related strand and a reflective project. Support covers the chosen Diploma courses and academic English.",
      countryNote:
        "CP is almost unknown in western Uttar Pradesh. We treat each enquiry on its own and match a tutor to the courses involved.",
    },
  ],

  subjectsIntro:
    "We choose by exact course and level, and prefer tutors with experience of students who have crossed over from Hindi-medium or UP Board classrooms.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Limits, derivatives, integrals, series and vectors for the algebra-minded, with ten minutes of calculator-free practice opening each class." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Sampling, hypothesis tests, regression and financial models for the data-minded, including how to put a result into a sentence." },
    { name: "Physics", levels: "SL / HL", description: "Newtonian mechanics up to quantum and nuclear topics, plus uncertainty handling and the shape of a good lab report." },
    { name: "Chemistry", levels: "SL / HL", description: "Mole arithmetic, enthalpy, rates, equilibrium, acids and the organic reaction mechanisms." },
    { name: "Biology", levels: "SL / HL", description: "Cells and genetics through physiology and ecology, learned in the wording that mark schemes look for." },
    { name: "Economics", levels: "SL / HL", description: "Market structures, policy, trade and development, with sugar pricing and cane payments as unusually local case material." },
    { name: "Business Management", levels: "SL / HL", description: "Reading cases, finance ratios and picking a tool for an unfamiliar organisation, handy for children of trading and mill families." },
    { name: "Computer Science", levels: "SL / HL", description: "Computational thinking, data structures and the pseudocode style of the exam." },
    { name: "Psychology", levels: "SL / HL", description: "Core experiments, critique vocabulary and the shape of a top-band essay." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Analysing unseen passages, comparing texts and getting ready for the individual oral." },
    { name: "Hindi A / Hindi B", levels: "SL / HL", description: "Literary analysis for native speakers, structured reading and writing practice for Hindi B." },
    { name: "Geography", levels: "SL / HL", description: "River systems, floodplains and farming, with the Ganga and Bijnor's cane belt as familiar examples." },
    { name: "Theory of Knowledge", levels: "Core", description: "Building arguments about knowledge and planning the exhibition, every word written by the student." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE are both covered. Core or Extended entry should be settled early since it caps the highest grade a student can earn.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended", description: "Number, algebra, shape and statistics, with a candid discussion of which entry tier is realistic." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "A first look at calculus and functions for pupils who will probably go on to IB Mathematics AA or A Level." },
    { name: "Physics (0625 / 4PH1)", levels: "Core / Extended", description: "Forces, circuits, waves and heat, plus the planning questions that turn up in the practical paper." },
    { name: "Chemistry (0620 / 4CH1)", levels: "Core / Extended", description: "Atoms, bonding, reactivity and organic families, with the standard ion tests learned by heart." },
    { name: "Biology (0610 / 4BI1)", levels: "Core / Extended", description: "Cells, enzymes, heredity and ecosystems, with rehearsal in writing up an experiment the way examiners like." },
    { name: "Computer Science (0478)", levels: "Single tier", description: "Designing and tracing algorithms, binary numbers and databases." },
    { name: "English as a Second Language", levels: "Single tier", description: "Reading, directed writing and speaking, pitched at pupils who speak Hindi or Urdu at home." },
    { name: "Hindi as a Second Language (0549)", levels: "Single tier", description: "Comprehension passages, letters and short compositions in the style of the syllabus." },
    { name: "Economics (0455) and Business Studies (0450)", levels: "Single tier", description: "Core vocabulary, calculations and short case questions." },
  ],

  regionsTitle: "Sahaspur and the Bijnor-side places we serve",
  regionsIntro:
    "Every lesson is online, so what matters is signal, fog, floods and the length of the school run rather than a tutor's travel. Here is how we read each place.",
  regions: [
    { name: "Sahaspur town", note: "The nagar panchayat centre with most of the local private schools and tuition shops; mobile data is normally good enough for video classes." },
    { name: "Sugar-mill neighbourhoods", note: "Households connected with cane purchase and mill work, whose evenings change during the crushing season." },
    { name: "Bijnor", note: "The district headquarters and the largest school and college scene nearby, close to the Ganga barrage." },
    { name: "Najibabad", note: "A neighbouring town on the road towards Kotdwara and Haridwar, with its own colleges and a mixed trading community." },
    { name: "Nagina", note: "A town known for woodcraft, whose students share the same online timetable as Sahaspur." },
    { name: "Dhampur", note: "A sugar town in the district where mill families often value English-medium schooling." },
    { name: "Moradabad", note: "The brassware city to the south-west, a common choice for coaching and higher studies." },
    { name: "Haridwar and Roorkee", note: "Across the Uttarakhand border, home to Gurukul Kangri and IIT Roorkee and reachable by road or rail." },
    { name: "Dehradun", note: "The nearest city with confirmed international campuses, a few hours away by road." },
  ],

  schoolClusters: [
    {
      city: "Sahaspur and Bijnor district",
      note: "Our checks found no confirmed IB or Cambridge school in Sahaspur or elsewhere in Bijnor district, so local choice is limited. Students here study online, as private IGCSE candidates, or after relocating.",
      schools: [],
    },
    {
      city: "Nearby: Dehradun (Doon valley)",
      note: "The nearest set of confirmed international campuses sits in the Doon valley, a few hours from Bijnor district; boarding is the practical way to use them.",
      schools: ["SelaQui International School", "Unison World School", "Ecole Globale International Girls' School"],
    },
    {
      city: "Nearby: Mussoorie",
      note: "A hill-station boarding school that is an authorised IB World School, well known to families across western Uttar Pradesh.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],
  schoolDisclaimer:
    "None of the schools listed here has any connection with IB Gram. SelaQui, Unison, Ecole Globale and Woodstock are named because each is openly known to teach an international programme, and the list is not advice to apply. Please ask the school about admissions and curricula.",

  tutorsIntro:
    "Our tutors are spread across India and teach on Indian time. A student in Sahaspur does not have to settle for whoever lives in Bijnor district; we choose on subject depth and the way they explain.",

  modesIntro:
    "Sahaspur lessons are online. Families tend to organise them in three ways.",
  modes: [
    {
      title: "Private video lesson at home",
      description: "Just a tutor and a student, a camera and a shared writing board, from the family's own room.",
      bullets: [
        "Nobody travels to Sahaspur, since house visits operate only in Gurugram and parts of Delhi NCR",
        "The equipment is a laptop, a notebook and headphones",
        "Written solutions are held to the camera and corrected there and then",
        "Parents receive a short note once each session ends",
      ],
    },
    {
      title: "Concentrated exam preparation",
      description: "Closer-spaced classes as the May or November papers come near.",
      bullets: [
        "Three or four lessons weekly across roughly four weeks",
        "Genuine past papers, graded with the official mark scheme",
        "Weak spots from the mock are mended first",
        "One day off before paper one",
      ],
    },
    {
      title: "Weekly all-year support",
      description: "A standing weekly slot in one subject, always with the same teacher.",
      bullets: [
        "Keeps the syllabus from sprinting past the student",
        "A good match for MYP and the first year of the Diploma",
        "Adapts to Holi, Diwali, Kanwar season and school tests",
        "Starts with a trial class at no charge",
      ],
    },
  ],

  sections: [
    {
      heading: "Which routes lead a Sahaspur student to an IB or IGCSE qualification?",
      paragraphs: [
        "Four routes are open to a Bijnor family, and each demands something different of a tutor. The first is an online international school, which sends lessons to a laptop at home. The second is a boarding place in a hill or valley school, such as those around Dehradun and Mussoorie. The third is relocation, usually tied to employment. The fourth is entering IGCSE papers as a private candidate at an approved centre.",
        "An online school gives the lessons, but a child can drift without someone to check weekly that ideas have landed. A boarder home for the holidays wants one troublesome unit fixed before term. A family on the move wants the pace matched to the new school. A private candidate has no class teacher, so the tutor essentially keeps the syllabus calendar.",
        "We rank none of these routes above another. A child's age, comfort in English and the family's university plans decide, and we are happy to describe what each would require from a tutor.",
        "If you remain unsure, book a trial in the subject your child finds hardest. It tells you more than a prospectus. After an hour an experienced teacher can estimate how far the student stands from the standard the course needs.",
      ],
    },
    {
      heading: "UP Board, CBSE, IB and IGCSE: a plain comparison",
      paragraphs: [
        "UP Board or CBSE at Class 10 and 12 is the usual path here, followed by colleges in Meerut, Moradabad, Roorkee, Dehradun or Delhi through JEE Main, NEET-UG or CUET-UG. Those exams prize recall and speed. IB and IGCSE papers prize reasoning, handling data and writing at length in English.",
        "Students who change systems seldom lack knowledge. What they miss is the logic of command words and mark schemes, and a short run of focused lessons usually fills that gap.",
      ],
      table: {
        caption: "Four systems from a Bijnor household's point of view",
        columns: ["System", "How the result is built", "Language", "Usual next step"],
        rows: [
          ["UP Board", "State-set written papers at Class 10 and 12", "Hindi or English", "Local colleges, JEE Main, NEET-UG, CUET-UG"],
          ["CBSE", "Board exams plus marks from the school", "English or Hindi", "JEE Main, NEET-UG and CUET-UG"],
          ["IB Diploma", "Coursework tasks and final exams in six subjects", "English", "Degrees abroad, private Indian universities, or CUET-UG after equivalence"],
          ["Cambridge or Edexcel IGCSE", "Sat at Core or Extended level", "English", "IB Diploma or A Level, then university"],
        ],
      },
    },
    {
      heading: "How are tuition fees decided for IB and IGCSE students in Sahaspur?",
      paragraphs: [
        "Fees for IB and IGCSE tuition in Sahaspur reflect the subject, the level, the tutor's seniority and the number of lessons you book each week. A written quotation arrives before anything is agreed. We keep no fixed price list, as a Class 7 language class and a Higher Level Chemistry course are different jobs.",
        "Online teaching removes any charge for a tutor's travel and enlarges the pool of teachers. If the nearest equal specialist would otherwise be in Dehradun or Delhi, choosing purely on subject strength is the main advantage.",
        "Concentrate lessons at the moments that matter: the opening term of a programme, when habits form; the weeks after mock exams, when gaps show; and the fortnight before the real papers. Plenty of households begin with Mathematics on its own and add a science after four weeks.",
      ],
      bullets: [
        "Higher Level Mathematics and science teaching tends to be priced above a junior language slot",
        "Primary, middle years, Diploma and IGCSE tutoring come from separate pools of teachers",
        "Steady weekly lessons across a year usually cost less than last-minute cramming",
        "Booking late shrinks the field of available teachers",
        "A longer commitment makes timetabling easier",
      ],
    },
    {
      heading: "Coaching centre, online tutor or self-study around Sahaspur?",
      paragraphs: [
        "Bijnor families usually weigh three alternatives. Coaching centres in Bijnor, Moradabad or Meerut cater to board and entrance exams, and few have seen an IB or IGCSE paper. Free online videos explain content but never grade an answer. A private online tutor knows the papers and marks the work, asking only for a quiet space and a stable connection.",
        "The last column notes the weak spot of screen teaching: it cannot give hands-on experience with laboratory equipment.",
      ],
      table: {
        caption: "How a Sahaspur student can approach IB or IGCSE study",
        columns: ["Option", "Upside", "Downside", "Fits"],
        rows: [
          ["Private tutor on screen", "Exact syllabus and marked practice", "Needs steady signal; no hands-on lab", "Most IB and IGCSE students"],
          ["Coaching centre in a nearby city", "Classmates and a set timetable", "Aimed at board and entrance exams, plus a commute", "Students also sitting UP Board or CBSE papers"],
          ["Self-study with videos", "Low cost and flexible", "Nobody marks the work", "Revising topics already understood"],
          ["Boarding school in Dehradun or Mussoorie", "Labs, teachers and peers on site", "Cost and separation from home", "Families who want the full school experience"],
        ],
      },
    },
    {
      heading: "Fog, floods, Kanwar season and cane crushing: the Bijnor calendar",
      paragraphs: [
        "Western Uttar Pradesh has a pronounced climate. Winters bring thick fog and cold nights, and December to January can slow transport and shorten the school week; online lessons keep running when a bus cannot. Summers are hot and then humid, with the May exam session falling in the heat. Monsoon rain from July raises the Ganga and its tributaries, and low land near the river can flood.",
        "The Kanwar Yatra in the month of Sawan, usually July, sends millions of pilgrims along the roads between Haridwar and western Uttar Pradesh, and roads and schools are often disrupted. Families in Bijnor district know to plan around it, and so do we.",
        "The cane year matters too. Crushing runs from about November to March, and mill-linked households keep irregular hours then. Holi, Diwali and Eid shape the calendar, and the November IB and IGCSE sessions land close to Diwali. We bring heavy revision forward and keep festival weeks light.",
      ],
      table: {
        caption: "A study year in Sahaspur",
        columns: ["Months", "Local pattern", "Tutoring plan"],
        rows: [
          ["December to February", "Fog, cold, cane crushing, school exams", "Steady topic work, online on foggy days"],
          ["March to June", "Holi, rising heat, May sessions", "Early or late lessons, timed past papers"],
          ["July to September", "Kanwar season, monsoon, flooding risk, new term", "Flexible slots, assessment planning"],
          ["October to November", "Dussehra, Diwali, November sessions", "Mocks early, light festival weeks"],
        ],
      },
    },
    {
      heading: "Where do students from Sahaspur go after an international syllabus?",
      paragraphs: [
        "Graduates head overseas, to private universities in India, or into central and state institutions via national tests.",
        "If home is where the degree will be earned, keep an eye on two papers: the Association of Indian Universities' equivalence letter, which recognises the Diploma and the IGCSE with A Level route, and a CUET-UG result for central universities. Entrance tests for engineering and medicine revise their subject requirements regularly, so read the latest notice before giving up any science or mathematics.",
        "Within reach are IIT Roorkee, Gurukul Kangri at Haridwar, Chaudhary Charan Singh University at Meerut and the colleges of Moradabad and Dehradun; Delhi is further. Applicants heading abroad mostly target the UK, Canada, the US, Australia and Singapore, and coaching for the admissions tests they require is offered separately.",
        "Choose subjects by looking at the degree first. One short conversation ahead of the school's deadline is normally enough.",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences taught over video?",
      paragraphs: [
        "Before the Diploma begins, a student must pick one of two mathematics courses. The first, Analysis and Approaches, rewards fluent algebra and calculus and tends to draw prospective engineers and physicists. The second, Applications and Interpretation, handles statistics and modelling and tends to draw those heading for economics or psychology. We try to give a straight view and never favour the tougher option for its own sake.",
        "A shared digital board lets the tutor read each line as it is written, which means a lost minus sign is flagged almost immediately. Calculator-free papers are prepared with brief, frequent drills. Calculator papers are prepared by laying out working so that method marks survive and by getting to know the exact model of device in use.",
        "Ask any examiner where science candidates lose marks and the answer is dull: scales misread, units dropped, explanations that stop one step short. Lessons therefore run on real past questions, tackled one habit at a time. A call can walk through how an experiment is done; handling the apparatus is something only a lab can teach.",
        "The course of work moves from one topic at a time, to mixed question sets, to whole timed papers at the end. Speed is allowed to follow understanding.",
      ],
    },
    {
      heading: "Core, Extended and subject choice in IGCSE",
      paragraphs: [
        "A number of IGCSE subjects are sat at either Core or Extended level. A Core candidate cannot reach the top grades, while an Extended candidate can. Anyone heading towards IB Mathematics AA or the A Level sciences should enter Extended.",
        "Cambridge and Edexcel give each subject its own number, and past papers are filed by it; Chemistry is 0620 at Cambridge and 4CH1 at Edexcel. Copy the number from your child's subject list when you first write to us.",
        "A good subject list keeps the future open: one science that interests the child, a mathematics tier that challenges without flattening, and a language the household already speaks. English is a given, and Hindi is its easy partner.",
      ],
    },
  ],

  process: [
    { title: "Contact us", description: "Message +91 7439 368 115 on WhatsApp with the board, programme, subject and exam sitting, and mention Sahaspur in Bijnor." },
    { title: "Get matched", description: "A tutor comes back to you, someone who has taught that syllabus and whose evenings are open." },
    { title: "Try the free class", description: "Lesson one carries no fee and deals with a topic the student finds hard." },
    { title: "Confirm the terms", description: "The subject, weekly times and fee go into writing before money changes hands." },
    { title: "Look back and adjust", description: "Each class ends with notes, and a different tutor or time is only a request away." },
  ],

  whyPoints: [
    { title: "Honest on format", description: "Lessons by video in Sahaspur, with no pretence of a house call." },
    { title: "Picked for your papers", description: "Matching is done on course, level and board rather than a loose subject title." },
    { title: "Written follow-up", description: "Parents can read what was done and what comes next." },
    { title: "Built around local life", description: "Times bend around fog, Kanwar season and mill-season hours." },
    { title: "Coaching only", description: "Tutors do not draft assessments, essays or coursework." },
    { title: "Easy to change tutor", description: "If tutor and student do not suit, we change the tutor free." },
  ],

  faqs: [
    { question: "Will a tutor come to our home in Sahaspur?", answer: "No; house visits are a feature of Gurugram and parts of Delhi NCR only. Sahaspur's lessons come over video, privately and live, with a drawing board both sides can write on and a written record of the session afterwards." },
    { question: "What do IB or IGCSE tutors cost for a Sahaspur student?", answer: "The figure follows the subject, the level, how experienced the tutor is and how many sessions you book. A written quotation comes first and there is no standard rate card. With a free opening lesson, you see the teaching before paying." },
    { question: "Is there an IB or Cambridge school in Sahaspur or Bijnor?", answer: "None that we could verify, in the town or the district. The nearest confirmed campuses are in the Dehradun valley and at Mussoorie, a few hours away. Many local students therefore use online schools or study privately. Check any school's claims with the school itself." },
    { question: "Can my child take IGCSE exams privately from Bijnor district?", answer: "In many cases. The practical hurdles are an approved Cambridge or Edexcel centre prepared to take the entry, a way to cover science practicals, and a registration date that does not move. Examinations themselves are not ours to run; the preparation is." },
    { question: "When do Sahaspur students usually study?", answer: "In winter, late afternoon before the fog thickens; in the hot months, after dinner. Sunday suits long papers. Holi, Diwali, Kanwar season and school tests all move the timetable." },
    { question: "Can a tutor write my child's IA or Extended Essay?", answer: "Certainly not; any tutor who proposed it would be gambling with the diploma. Acceptable help stops at explaining how the work is marked, describing what a convincing investigation involves and noting where reasoning is weak. Sentences, measurements and conclusions are the student's own." },
    { question: "How fast must the internet be?", answer: "Modest speed is enough. A few megabits a second handles video and a shared board, through broadband or a phone hotspot. In cold, foggy spells and summer power cuts, keep a charged laptop and a backup SIM ready." },
    { question: "Is the first lesson really free?", answer: "It is. The class tackles a subject your child is currently struggling with and comes with written feedback. You can stop afterwards without owing anything, and if the personalities clash we offer another tutor before asking for a rupee." },
    { question: "Which IB and IGCSE stages do you cover?", answer: "Every one: the three IB programmes that students normally meet, plus Cambridge and Edexcel IGCSE. A seven-year-old needs story time and number games, a fourteen-year-old needs help with criteria, a seventeen-year-old needs subject depth. If the first tutor suits, the relationship can carry on through those years." },
    { question: "How do we choose between IB Maths AA and AI?", answer: "Work backwards from the degree. Courses such as engineering and physics expect the calculus-based Analysis and Approaches; economics, psychology and business are happier with statistics-based Applications and Interpretation. Both exist at Standard and Higher Level. Sitting one short lesson in each is a sensible test." },
    { question: "Does an IB route close the door on JEE or NEET?", answer: "It might not, but check carefully. Eligibility turns on which subjects were studied and on rules the testing agency issues every year, including how it treats the IB and IGCSE-with-A-Level combinations. Only the official bulletin can settle that. We cover the content: Physics, Chemistry, Biology and Mathematics." },
    { question: "Which examining boards do you work with?", answer: "We teach Cambridge International and Pearson Edexcel. Tell us the course number (for Biology, 0610 or 4BI1) and we propose a tutor who has actually taught those papers." },
    { question: "How early should we book for the November session?", answer: "August is the sensible moment. With Dussehra and Diwali arriving just ahead of November, we ease off in festival weeks and shift the demanding paper practice into September." },
    { question: "Can students in Najibabad, Nagina or Dhampur use the same service?", answer: "Yes; all that is needed is a laptop and a connection that holds. Whether the family lives in Najibabad, Nagina, Dhampur or Bijnor, the session is the same private live class, timed around that home's own school run." },
    { question: "How do we begin?", answer: "Send a WhatsApp message to +91 7439 368 115, or write to support@ibgram.com, listing your child's class, the subject they find hardest, their school or online school, and that you are in Sahaspur, Bijnor. A tutor proposal and a free-lesson slot usually come back within a day." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Moradabad", href: "/moradabad/", description: "The large city to the south-west of Bijnor district." },
    { label: "IB and IGCSE tutors in Najibabad", href: "/najibabad/", description: "A neighbouring Bijnor district town." },
    { label: "IB and IGCSE tutors in Nagina", href: "/nagina/", description: "Another Bijnor district page with the same online format." },
    { label: "IB and IGCSE tutors in Dehradun", href: "/dehradun/", description: "The nearest city with confirmed international campuses." },
    { label: "IB and IGCSE tutors in Roorkee", href: "/roorkee/", description: "Home of IIT Roorkee, just across the Uttarakhand border." },
    { label: "IB tutors across India", href: "/india/", description: "The all-India overview of our live IB and IGCSE lessons." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Support for each IGCSE subject and board." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "Subject-by-subject Diploma support, including TOK." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse tutors by subject and programme." },
    { label: "Contact us", href: "/contact-us/", description: "Send a question or reserve the free first lesson." },
  ],

  closingHeading: "Book a free lesson from Sahaspur",
  closingBody:
    "Share your child's class, the subject and the sitting you have in mind, and we will suggest a tutor and arrange the free first class. WhatsApp +91 7439 368 115; email support@ibgram.com.",
};
