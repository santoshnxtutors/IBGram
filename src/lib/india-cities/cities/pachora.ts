import type { CitySeoPage } from "../types";

/**
 * /pachora/ - IB and IGCSE tutoring page for Pachora, Jalgaon district, Khandesh, Maharashtra. Online-only
 * delivery: tutors do not visit homes in Pachora, since in-person home tuition is offered only in Gurugram
 * and parts of Delhi NCR. No IB or Cambridge school in town was confirmed, so stripSchools is empty and the
 * clusters point honestly to Pune and other cities using names already on neighbouring pages.
 */
export const pachora: CitySeoPage = {
  slug: "pachora",
  countryName: "Pachora",
  countryNameLong: "Pachora, Maharashtra",
  demonym: "Pachora",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions dodge the Khandesh summer afternoons, the banana and cotton picking weeks, Ganeshotsav and Diwali holidays, and the Central Railway timetable when a child commutes",
  lastUpdated: "2026-09-21",
  geo: { latitude: 20.6667, longitude: 75.35 },
  wikipedia: "https://en.wikipedia.org/wiki/Pachora",
  alternateNames: ["Pachora Jalgaon", "Pachora Maharashtra", "Pachora Junction", "Pachora Khandesh"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Pachora | Online Tuition from Home",
  metaDescription:
    "Online IB and IGCSE tutors for Pachora, Jalgaon district: lessons in DP, MYP, PYP, Cambridge and Edexcel, fitted to Khandesh summers. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Pachora",
  heroEyebrow: "KHANDESH ONLINE IB & IGCSE TUITION: PACHORA",
  heroSubtitle:
    "A family in Pachora asking about private tuition at home for an IB or IGCSE course will find that no local classroom teaches either, and that no tutor comes to the door. IB and IGCSE tutors in Pachora from IB Gram work over video instead: a subject specialist teaches your child alone, live, from a desk at home, and sends a written note after each lesson.",
  primaryKeyword: "IB and IGCSE tutors in Pachora",
  imageAltText: "Pachora student with a laptop and revision cards in a live one-to-one online IGCSE Chemistry lesson at home",
  secondaryKeywords: [
    "IB tutor Pachora",
    "IGCSE tutor Pachora",
    "IB home tuition Pachora",
    "IGCSE home tuition Pachora",
    "IB private tuition Pachora",
    "IB Maths tutor Pachora",
    "IGCSE Maths tutor Pachora",
    "IB Physics tutor Pachora",
    "IB Chemistry tutor Pachora",
    "IB Biology tutor Pachora",
    "IB DP tutor Pachora",
    "IB MYP tutor Pachora",
    "IB PYP tutor Pachora",
    "IGCSE online tuition Pachora",
    "IB tutor Jalgaon district",
    "IGCSE tutor Chalisgaon",
    "IB tutor Khandesh",
    "IB tutor Pachora Maharashtra",
    "online IB tutor Maharashtra",
    "Pachora IB IGCSE tuition",
  ],

  heroTrustPoints: [
    "Pachora lessons are online; tutors do not visit homes, and house visits run only in Gurugram and parts of Delhi NCR",
    "A tutor chosen for the exact syllabus and exam session, wherever the tutor lives",
    "A free trial, a written note and a written quote before any commitment",
    "Independent of the IB, Cambridge, Pearson and every school named on this page",
  ],
  heroStats: [
    { value: "Khandesh", label: "Built for the region" },
    { value: "PYP to DP", label: "IB range" },
    { value: "Two boards", label: "Cambridge and Edexcel" },
    { value: "Free trial", label: "First lesson on us" },
  ],

  intro: {
    heading: "Pachora: a Khandesh railway town where international syllabuses are taught only on screen",
    paragraphs: [
      "Pachora is a taluka town in Jalgaon district, in the north-western part of Maharashtra known as Khandesh. It stands on the Mumbai to Bhusawal main line of Central Railway, between Chalisgaon and Jalgaon, which makes the train the natural way out for students and workers alike. The surrounding land grows cotton, bananas, maize and pulses, and Jalgaon district is famous for its bananas and its gold market. Marathi is the school language, Ahirani is the everyday tongue for many households, and Hindi and English fill in the rest.",
      "Schools in Pachora follow the Maharashtra State Board, CBSE or, in a few cases, ICSE. We found no IB, Cambridge or Edexcel school in the town. The realistic choices for a family that wants one are a hostel in Pune or Nashik, a move to a large city, or a support route that reaches a student at home.",
      "On home tuition, precisely: no tutor travels to a Pachora house. In-person tuition is offered only in Gurugram and parts of Delhi NCR. Pachora students get private tuition from home by video, which means a laptop at the family table, a live lesson with a specialist, a shared whiteboard and papers marked the same week.",
      "Tutors teach, set practice and mark. They never write IAs, Extended Essays, TOK essays or coursework. IB Gram is an independent service and is not affiliated with the IB, Cambridge, Pearson or any school.",
    ],
    bullets: [
      "IB PYP, MYP, Diploma and Career-related Programme subjects, taught live",
      "Cambridge and Pearson Edexcel IGCSE from Class 9",
      "Timings set around Khandesh heat, farm seasons and train schedules",
      "A free first lesson and a quoted rate in writing",
      "No tutor visits in Pachora; in-person tuition is for Gurugram and parts of Delhi NCR only",
    ],
  },

  programmesIntro:
    "Few parents in Pachora meet the IB by chance. More often there is a plan behind the question: a child heading to a hostel in Pune, a relative abroad, or a wish to study outside Maharashtra. The programme notes below are written for those plans.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Children investigate themes such as how we express ourselves and where we are in place and time, through inquiry units that cross subjects. A learner-led Exhibition closes the programme, and there are no formal written tests.",
      countryNote:
        "A young Pachora child who may one day join a PYP school usually gains most from confident English reading and from speaking about ideas, since home and school are mainly in Marathi.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Eight subject groups are built around concepts and contexts, with teachers grading against published criteria. In the final year students carry out a Personal Project on a topic they choose.",
      countryNote:
        "A student from a State Board or CBSE classroom often knows the chapter content but has not met criteria-based grading, so early MYP tutoring practises tasks against real descriptors.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects are studied alongside Theory of Knowledge, the Extended Essay and CAS. The majority of external papers fall in May, and results arrive in early July.",
      countryNote:
        "Diploma lessons for Pachora generally serve a student boarding in Pune, Nashik or further afield who returns for holidays, or a student following a flexible route, with Maths and the sciences asked for first.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A few Diploma courses are combined with a career-related study and a reflective project. The route suits vocational goals and is offered by few Indian schools.",
      countryNote:
        "CP is very rarely asked about from Pachora. If it comes up, we teach the academic courses and help the student plan the reflective project.",
    },
  ],

  subjectsIntro:
    "Everything depends on naming the course exactly: Maths AA or AI, HL or SL, and the May or November session. Students from Maharashtra board backgrounds often bring firm arithmetic and science habits, and what tutors add is structured written reasoning and familiarity with IB command terms.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, sequences and proof for future engineers and scientists, with mark schemes studied closely." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, financial maths and modelling with technology, for students leaning to commerce or social science." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics and waves, with short justified answers and careful units." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, acids and bases and organic reactions, practised through timed questions." },
    { name: "IB Biology", levels: "HL / SL", description: "Genetics, physiology and ecology, with data-analysis questions taken under time." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram-based answers, with cotton pricing, banana exports and farm credit as real regional cases." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case answers and a project that may draw on a family firm, oil mill or agri-trading business." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Commentary, essays and oral work, with attention to academic English for students whose schooling is in Marathi." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, databases and object-oriented programming for the solution project." },
    { name: "IB Geography", levels: "HL / SL", description: "Drought, irrigation and the Tapi basin offer concrete local case studies." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water use, soils and crop systems in a semi-arid belt make living examples." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and extended writing." },
    { name: "IB Psychology", levels: "HL / SL", description: "Key studies turned into clear, balanced arguments." },
    { name: "IB Marathi B and Hindi B", levels: "HL / SL", description: "Formal written and spoken language skills, useful for a student from a Marathi-speaking home." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion of knowledge questions and the exhibition; the essay is the student's own." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Help in shaping a question and pacing the work, not in writing it." },
  ],

  igcseSubjectsIntro:
    "For Pachora families IGCSE is the gentlest first step, because it starts in Class 9 and leads on to A Level, the IB Diploma or Indian Class 11. Fix the board before buying papers, since Cambridge and Edexcel differ in codes and exam timing.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended students practise non-calculator technique and clear presentation." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and trigonometry that prepare for IB Maths AA." },
    { name: "Edexcel IGCSE Mathematics B 4MB1", levels: "Grade 9-10", description: "Specification B with its own paper structure and wording." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, electricity and thermal physics, with the alternative-to-practical paper rehearsed." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Stoichiometry, electrolysis and organic chemistry in short timed sets." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Nutrition, transport and ecology with mark-scheme phrasing." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying terms to the case and arguing a judgement." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, logic and Python programming." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "All four skills, for students strengthening academic English." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension, writing and oral work for Hindi and Marathi speakers." },
  ],

  regionsTitle: "Pachora areas and nearby towns covered by our online tutors",
  regionsIntro:
    "All teaching is online, so the entries below are about context and timing, not travel: how each part of Pachora sits against the railway, the highways and the school day, and where a lesson needs a backup for power or signal.",
  tutorsIntro:
    "These tutors teach from other Indian cities on IST, matched to the course a Pachora student follows. Each profile describes live private lessons, and none involves a visit to Pachora.",
  regions: [
    { name: "Pachora town centre and main market", note: "The busy commercial core, where farm-trading families keep long shop hours." },
    { name: "Pachora railway station area", note: "The junction on the main line, important for families whose children travel to Jalgaon or Pune for school." },
    { name: "Bhadgaon road", note: "The road towards Bhadgaon, used by households with farms and shops along it." },
    { name: "Jamner road", note: "The route towards Jamner and beyond, historically served by a branch railway from Pachora." },
    { name: "Chalisgaon direction", note: "The larger neighbouring taluka town to the west, a common commute for work and coaching." },
    { name: "Jalgaon direction", note: "The district headquarters, where more school and coaching options exist." },
    { name: "Nandgaon and Manmad corridor", note: "The western railway route towards Nashik and Mumbai used by many families." },
    { name: "Farm-belt villages around Pachora", note: "Cotton and banana villages where picking weeks shape family time." },
    { name: "Bhusawal side", note: "The railway division town to the east, connecting families with relatives and jobs." },
    { name: "Nashik and Pune corridors", note: "The two cities that most shape school and college decisions for Khandesh families." },
  ],

  schoolDisclaimer:
    "We could not confirm an IB, Cambridge or Edexcel school in Pachora or elsewhere in the taluka, so none is listed as local. The Pune names are for orientation, because Khandesh families sometimes consider a hostel there. IB Gram has no arrangement with any of these schools and cannot speak for them, so please ask each school directly about courses, fees and admissions.",
  schoolClusters: [
    {
      city: "Pachora and Jalgaon district",
      note: "Schools follow the Maharashtra State Board, CBSE or ICSE. We found no IB or Cambridge option locally, so an international syllabus is taught online.",
      schools: [],
    },
    {
      city: "Nearby: Jalgaon and Chalisgaon",
      note: "The larger towns on the same railway, with more schools, though we could not confirm IB or Cambridge teaching for this page.",
      schools: [],
    },
    {
      city: "Nearby: Nashik and Aurangabad",
      note: "Two bigger cities within a long train or bus journey, which may suit a family considering a hostel. Local provision was not confirmed for this page.",
      schools: [],
    },
    {
      city: "Nearby: Pune",
      note: "The state's main education city, reached by train via Manmad or Bhusawal routes, and the usual reference point for Khandesh families looking at international schools.",
      schools: ["Symbiosis International School", "Mercedes-Benz International School"],
    },
  ],

  modesIntro:
    "Every Pachora family gets the same core service: a live one-to-one lesson with a tutor based elsewhere in India. The patterns below show how households in a Khandesh farm and railway town arrange it.",
  modes: [
    {
      title: "After-school weekly slot",
      description:
        "One or two fixed hours each week, late enough to miss the afternoon heat, with the same tutor so feedback builds over the term.",
      bullets: [
        "One tutor for the whole term",
        "A written note after each lesson",
        "First lesson free",
      ],
    },
    {
      title: "Hostel-holiday block",
      description:
        "For a student who studies in Pune, Nashik or further away and is home at Diwali or in summer, a short run of lessons on the weakest topics.",
      bullets: [
        "Topics taken from the latest report",
        "Timed practice with marking",
        "Online only; no tutor travels to Pachora",
      ],
    },
    {
      title: "Pre-exam push",
      description:
        "A few weeks of frequent sessions before a Cambridge, Edexcel or IB paper, built around past questions and mark schemes.",
      bullets: [
        "Repeated past-paper cycles",
        "Examiner-style comments",
        "Plan agreed in writing",
      ],
    },
  ],

  sections: [
    {
      heading: "Which Pachora families think about IB and IGCSE?",
      paragraphs: [
        "The group is small and easy to describe. Some are farm-trading and business families who want their children to have options beyond the Maharashtra board, particularly for study in Pune, Mumbai or overseas. A parent who has visited a cousin in Pune and seen how an international curriculum is taught sometimes returns with a long list of questions.",
        "Others are salaried families, teachers, railway staff and bank officers, who know that the railway makes Jalgaon, Nashik and Pune accessible but still cannot find anything local. A few have children already enrolled at an international school elsewhere and need help through holidays.",
        "There is also a steady number who are interested in subjects the local school does not offer, such as Economics, Computer Science or Psychology, and who realise that an IGCSE or IB route allows organised study of them.",
        "None of these families can rely on a classroom in town, since we could not confirm one. This page therefore offers no centre. It describes live online tuition and is explicit about what it covers and what it does not.",
      ],
      table: {
        caption: "Pachora enquiries and our opening step",
        columns: ["Family situation", "Typical stage", "Opening step"],
        rows: [
          ["Child in a Pune or Nashik hostel", "Class 8 to Class 12", "Holiday catch-up plan based on the latest report"],
          ["Family planning a move to a metro", "Class 6 to Class 10", "Bridge lessons in English, command terms and problem solving"],
          ["Study abroad in mind", "Class 9 to Class 11", "IGCSE Maths and sciences, guidance on Diploma subjects"],
          ["Subjects missing locally", "Class 9 to Class 12", "Economics, Business, Computer Science or Psychology"],
        ],
      },
    },
    {
      heading: "What shapes the price of IB and IGCSE tuition for a Pachora student?",
      paragraphs: [
        "There is no fixed price for IB or IGCSE tuition in Pachora, and we do not publish a rate card. A Class 9 Extended Maths student and a Diploma Chemistry HL candidate need very different kinds of preparation. Every rate is given in writing for a named course and a set number of lessons before booking, and the trial lesson is free.",
        "The tutor's record with the exact syllabus counts most. Level comes next, then weekly hours, then the gap to the exam, because a short revision push is more intensive than a year-long plan.",
        "A fair comparison looks at the local market. Tutors for State Board and CBSE are plentiful and usually affordable, but almost none teach IGCSE Extended Mathematics or IB Physics. A specialist who travels from Jalgaon or Nashik adds train fare and several hours per visit. Online lessons put the full cost into teaching time.",
        "When you compare quotes, check how many weeks each covers, how a missed lesson is handled, and whether the tutor has taught your exact syllabus code.",
      ],
      bullets: [
        "Tutor's experience with the course",
        "Level and subject",
        "Weekly lesson hours",
        "Optional planning help for TOK, EE or project deadlines",
      ],
    },
    {
      heading: "How different is the Maharashtra State Board from IGCSE and IB?",
      paragraphs: [
        "The Maharashtra State Board examines a fixed textbook syllabus set by Balbharati, and its papers follow familiar formats. Students who work through the books and past papers can score very well, and that discipline is a solid foundation.",
        "IGCSE and IB keep much of the subject content but change the questions. A paper may describe a new situation and ask the student to apply a principle, weigh two methods or justify a conclusion. A bare numerical answer earns little if the reasoning is missing.",
        "There is a language shift as well. Many Pachora students think in Marathi or Ahirani and write exams in English, so the first months should give time to building subject-specific English through short, corrected paragraphs.",
        "The best switch points are Class 6, Class 9 and Class 11. A bridge of two terms, with command-term practice, practical design and writing, avoids a rough first year.",
      ],
      table: {
        caption: "Boards a Pachora family may compare",
        columns: ["Feature", "State Board / CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Main demand", "Textbook recall and accuracy", "Understanding and application", "Application, evaluation and independent study"],
          ["Independent work", "Practical journals", "Coursework in some subjects", "IAs, EE and TOK"],
          ["Language of study", "Marathi, Hindi or English", "English", "English with a language course"],
          ["Usual entry class", "Not relevant", "Class 9", "Class 11"],
        ],
      },
    },
    {
      heading: "Can online IB and IGCSE lessons really work from Pachora?",
      paragraphs: [
        "Yes, with sensible planning. Mobile networks cover Pachora and most surrounding villages, and broadband is available in the town. A video lesson needs a steady connection, not a fast one, and a spare hotspot on a second phone saves most lessons that might otherwise be lost.",
        "Power cuts and summer heat are the practical concerns. Khandesh summers are fierce, and load on the grid rises. A laptop battery and a power bank protect a lesson, and scheduling after the afternoon heat helps both the student and the equipment.",
        "What the student gains is a specialist in the exact syllabus at a fixed hour, marked work within days, a shared whiteboard for worked solutions and a note to revise from. All this without the train journey to a bigger town.",
        "The limits are real. No school lab and no classmates, and younger children need an adult nearby. For a student whose school cannot teach the syllabus at all, the trade is a good one.",
      ],
      table: {
        caption: "Study routes open to a Pachora student",
        columns: ["Route", "Syllabus fit", "Attention", "Main drawback"],
        rows: [
          ["Local State Board tuition", "Board exams", "Group", "No IB or IGCSE batch we could confirm"],
          ["Tutor travelling from Jalgaon or Nashik", "Depends on the tutor", "One-to-one", "Train fare and time on each visit"],
          ["Online IB Gram lessons", "Matched by code and level", "One-to-one, live", "Needs steady power and signal"],
          ["Self-study from past papers", "Self-chosen", "None", "No marked feedback"],
        ],
      },
    },
    {
      heading: "How do Khandesh heat, farm seasons and festivals affect the study year?",
      paragraphs: [
        "Khandesh has one of the hottest summers in Maharashtra, with April to June temperatures often in the forties. That coincides with the Cambridge and IB May examinations, so revision should be scheduled for mornings and evenings, and the content should be taught well before the heat peaks.",
        "The monsoon arrives in June or July and brings relief, with the new academic year starting soon after. It is a good time to begin a new syllabus. Rain seldom causes the long outages seen in flood-prone districts, though short interruptions occur.",
        "Cotton picking in autumn and banana harvesting through the year keep farm households busy, and a child in such a family may be needed at home. Fixed lesson hours agreed in writing protect study time.",
        "Festivals punctuate the calendar. Gudi Padwa in spring, Ganeshotsav in late summer, Navratri and Dussehra and then Diwali in autumn all bring family visits. Winter is cool and dry and suits steady study, so it is a good season for mock papers.",
      ],
      table: {
        caption: "Pachora calendar against the exam series",
        columns: ["Months", "Exam or school event", "Local factor"],
        rows: [
          ["December to February", "Edexcel January series, mock papers", "Cool, dry weather and steady study"],
          ["March to June", "Cambridge and IB May sessions", "Extreme heat and high power demand"],
          ["July to September", "New academic year, IB results in early July", "Monsoon rain, Ganeshotsav"],
          ["October to November", "Cambridge, Edexcel and IB November sessions", "Navratri, Dussehra, Diwali, cotton picking"],
        ],
      },
    },
    {
      heading: "Where can a Pachora student go after IB or IGCSE?",
      paragraphs: [
        "Closest to home is Kavayitri Bahinabai Chaudhari North Maharashtra University in Jalgaon, which serves the region. Further afield, Pune has COEP, Symbiosis and Savitribai Phule Pune University, and Mumbai has IIT Bombay, VJTI and many others. Each sets its own rules for IB and IGCSE applicants, so ask the admissions office.",
        "An IB Diploma holder can apply to the Association of Indian Universities for an equivalence certificate where an Indian university requires one, and many private universities accept IB scores directly. CUET-UG is the usual route to central universities. Maharashtra's own state entrance process has separate rules, which change and should be checked each year.",
        "IGCSE is a Class 10 level qualification, so students proceed to A Level, the IB Diploma or Indian Class 11 and 12. Later tests such as NEET-UG and JEE set their own subject conditions.",
        "Families who send children overseas often look to the UK, Canada, Australia and the Gulf. Each university publishes its own entry requirements for IB and IGCSE students, and reading them before fixing subjects saves trouble.",
      ],
      bullets: [
        "AIU equivalence for IB Diploma holders where needed",
        "CUET-UG for central universities",
        "State and national entrance tests carry their own subject rules",
        "Overseas universities publish their own requirements",
      ],
    },
    {
      heading: "How hard are IB Maths and the sciences for a Maharashtra board student?",
      paragraphs: [
        "Maharashtra board students typically bring good procedural skill, particularly in algebra and basic calculus. Analysis and Approaches builds on that with proof, limits and more abstract functions. Applications and Interpretation emphasises data, statistics and technology, and suits commerce, economics or design.",
        "The part that feels new is the Exploration, a piece of independent mathematics worth a fifth of the grade. A student chooses a topic, frames a question and writes out the reasoning. Tutors discuss scale, criteria and structure, and read a plan, but do not write or edit the piece.",
        "In the sciences, most lost marks come from units, command terms and the design and evaluation of experiments. Knowing a formula is not enough: the student needs to defend a method and judge how reliable a result is. Short, frequent written practice helps most.",
        "To choose between Higher and Standard Level, the student can try a recent past paper at each and see which feels manageable unaided. A diagnostic lesson gives a fair, unbiased answer.",
      ],
    },
    {
      heading: "Which IGCSE tier and board fit a Khandesh student?",
      paragraphs: [
        "Tiers set the highest attainable grade, so they should reflect real strength and future plans. A student who expects to take IB Maths AA or A Level Maths should usually sit Extended on Cambridge or Higher on Edexcel. Core and Foundation suit a steady pass across many subjects.",
        "The board often depends on where an exam can be taken. A private candidate needs a registered centre, and the closest for a given board may be in Pune, Nashik, Mumbai or Aurangabad. Ask early, because switching board late forces the student to relearn codes and paper formats.",
        "Cambridge and Edexcel each have a house style. Cambridge papers are numbered components with a practical-skills paper in the sciences, whereas Edexcel papers use their own command words and mark-scheme habits. Practising on the right board's papers matters.",
        "Language choice is worth a thought. Hindi as a second language suits many Khandesh families, and Business, Economics or Computer Science can fill gaps the school leaves.",
      ],
      table: {
        caption: "IGCSE choices at a glance",
        columns: ["Decision", "Lighter route", "Stronger route", "Deciding factor"],
        rows: [
          ["Maths tier", "Core or Foundation", "Extended or Higher", "Planned IB or A Level maths"],
          ["Board", "Cambridge", "Pearson Edexcel", "Nearest registered exam centre"],
          ["Sciences", "Combined where offered", "Three separate sciences", "Future science plans"],
          ["Language", "Hindi second language", "English first language", "Home language and study plans"],
        ],
      },
    },
  ],

  process: [
    { title: "Tell us the brief", description: "Send the board or programme, subject, level, present grade and the after-school hours that are cool and quiet enough for a lesson." },
    { title: "Look at the suggested tutor", description: "We name a tutor who has taught that syllabus and explain the match." },
    { title: "Try the free lesson", description: "Your child works live with the tutor, and both sides judge the fit with nothing to pay." },
    { title: "Read the note and the quote", description: "A short written note covers strengths and gaps, and the rate arrives in writing." },
    { title: "Decide the shape", description: "Choose weekly lessons, a holiday block or a pre-exam push, and ask for a new tutor whenever the fit is off." },
  ],

  whyPoints: [
    { title: "Exact-syllabus matching", description: "Tutors are chosen by course code and level since nothing local teaches them." },
    { title: "Plain about home visits", description: "Pachora lessons are online; in-person home tuition is offered only in Gurugram and parts of Delhi NCR." },
    { title: "Planned for Khandesh", description: "Timings respect summer heat, farm weeks and festival travel." },
    { title: "Parents stay informed", description: "A short written note follows every lesson." },
    { title: "Coaching with firm limits", description: "Tutors never write IAs, essays or graded coursework." },
    { title: "A gentle start", description: "A free trial, a tutor swap on request and rates in writing." },
  ],

  faqs: [
    {
      question: "Is an IB or IGCSE tutor available for Pachora students?",
      answer:
        "Yes, through online lessons. We found no local tutor or school teaching IB or IGCSE, so IB Gram tutors teach Pachora students live by video from other parts of India on IST. Each is selected for the student's programme and level, and the first lesson is a free trial to test the fit.",
    },
    {
      question: "Will a tutor come to our house in Pachora?",
      answer:
        "No. Tutors do not visit homes in Pachora, since in-person home tuition is limited to Gurugram and parts of Delhi NCR. A Pachora student studies at home with a laptop, joins a live video lesson and writes on a shared whiteboard. It is private tuition from home, with nobody travelling to you.",
    },
    {
      question: "Is there an IB school in Pachora or Jalgaon district?",
      answer:
        "We could not confirm one. Schools in Pachora follow the Maharashtra State Board, CBSE or ICSE. Larger cities such as Nashik, Aurangabad and Pune have more choice, and Pune in particular has international schools. Please confirm any school's current courses, fees and admissions directly, because IB Gram has no affiliation with them.",
    },
    {
      question: "What is the cost of IB or IGCSE tuition in Pachora?",
      answer:
        "It depends on the tutor's experience, the subject and level, the weekly lessons and the time left before the exam. There is no published price list. A written quote for your named course comes before booking, and the trial is free. Online lessons avoid the train fare and time of a tutor coming from Jalgaon or Nashik.",
    },
    {
      question: "Can my child move from the Maharashtra State Board to IGCSE or IB?",
      answer:
        "Yes. Class 6, Class 9 and Class 11 are the smoothest points. Most students need practice with command terms, applied questions, practical design and subject English, since school is in Marathi. A diagnostic lesson shows the gaps and how long a bridge would need, typically one or two terms.",
    },
    {
      question: "Which IGCSE boards are covered?",
      answer:
        "Cambridge International and Pearson Edexcel. Their syllabus codes, paper styles and exam windows are different, so the board is settled before any tutor is proposed. Cambridge sits around February and March, May and June, and October and November, and Edexcel in January, May and June, and November. Your exam centre confirms current dates.",
    },
    {
      question: "Does the tutor write IAs, Extended Essays or TOK essays?",
      answer:
        "No, never. Tutors coach and give feedback on the student's own work. They do not write any Internal Assessment, Extended Essay, TOK essay or coursework that is graded. They can explain criteria, help find a workable topic, plan a timetable and react to an outline. The work that is submitted must be the student's.",
    },
    {
      question: "What if a power cut or weak signal interrupts a lesson?",
      answer:
        "We reschedule the lost time free of charge. A charged laptop, a phone hotspot and a small power bank handle most short outages, including those in peak summer demand. If cuts are frequent, shorter and more regular lessons with written notes that can be read offline keep progress steady.",
    },
    {
      question: "How do we begin with a free trial lesson?",
      answer:
        "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board or programme, subject, level, latest marks and the hours that suit. We propose a tutor and fix the trial. Afterwards you receive a written note and a written rate, and you can decide freely whether to carry on.",
    },
    {
      question: "My child is in a hostel in Pune or Nashik. Can lessons happen in the holidays?",
      answer:
        "Yes. Diwali and the summer break are popular for a concentrated block. Since the lessons are online, they can take place at home in Pachora or wherever the student is. Share the latest results and the tutor will plan the block around the topics that cost the most marks.",
    },
    {
      question: "Can a Pachora student take IGCSE or IB exams privately?",
      answer:
        "Sometimes. IGCSE papers from Cambridge or Edexcel can often be sat privately at a registered exam centre, and the closest could be in Pune, Nashik or Mumbai. The IB Diploma is normally taken only through an authorised school, so that route is narrow. Fees and deadlines vary, so check with the centre well ahead.",
    },
    {
      question: "Which subjects do Pachora families request most?",
      answer:
        "Mathematics leads, followed by Physics, Chemistry and Biology, then English, Economics and Business. A few families ask for Computer Science. We match by level as well as subject, because Higher Level and Standard Level preparation differ, and the wrong match wastes the lesson hour.",
    },
    {
      question: "Can an IB or IGCSE student still reach NEET or JEE?",
      answer:
        "Yes, if subjects are chosen carefully. NEET-UG needs Physics, Chemistry and Biology or Biotechnology with English, and JEE has its own eligibility conditions. They are reissued each year, so read the current notice before settling Class 11 subjects. Tutors can show how IB or IGCSE topics map to those syllabi.",
    },
    {
      question: "How often should lessons happen?",
      answer:
        "Most students do well with one or two lessons a week in term, moving to three before an exam series. A holiday block can be short and dense. We set the pattern after the trial and adjust it as the exam nears, or when summer heat, farm weeks or festivals change what works at home.",
    },
    {
      question: "Do you teach younger PYP and early MYP children?",
      answer:
        "Yes. Primary lessons are short and interactive, centred on reading, number sense and inquiry. For early MYP we teach criteria, paragraph building and study habits. A parent or older sibling should stay close for the youngest children, to manage the screen and keep the session on track.",
    },
    {
      question: "Is IB Gram linked to any school, board or university?",
      answer:
        "No. IB Gram is an independent tutoring service, with no affiliation to the IB, Cambridge, Pearson, any school or any university named here. Names appear only to describe regional options, and you should confirm curriculum, fees and admission rules with each institution before making decisions.",
    },
  ],

  internalLinks: [
    { label: "IB tutors overview", href: "/ib-tutors/", description: "How matching works for each programme and subject." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel tiers, codes and subjects." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, core and exam dates." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "Career study beside Diploma courses." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI compared, HL and SL." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles by subject and programme." },
    { label: "Test preparation", href: "/admissions/test-prep/", description: "Admission tests after school." },
    { label: "IB and IGCSE across India", href: "/india/", description: "How online tutoring reaches cities nationwide." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only place with in-person home visits, in Delhi NCR." },
    { label: "Contact us", href: "/contact-us/", description: "Send a brief and book a trial." },
    { label: "IB and IGCSE tutoring in Amalner", href: "/amalner/", description: "A Jalgaon district neighbour with similar school options." },
    { label: "IB and IGCSE tutoring in Dhule", href: "/dhule/", description: "The Khandesh city to the north." },
    { label: "IB and IGCSE tutoring in Nashik", href: "/nashik/", description: "The larger city on the Mumbai line to the south-west." },
    { label: "IB and IGCSE tutoring in Pune", href: "/pune/", description: "The state's main education hub for international schools." },
  ],

  closingHeading: "Book a free IB or IGCSE trial lesson in Pachora",
  closingBody:
    "Tell us the board or programme, the subject and level, the latest grade and the after-school hours that are quiet and cool enough for a lesson. We will propose a tutor, and the first lesson is free. Message +91 7439 368 115 on WhatsApp or email support@ibgram.com, and you will get a suggested match with a written rate.",
};
