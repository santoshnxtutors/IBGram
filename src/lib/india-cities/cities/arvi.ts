import type { CitySeoPage } from "../types";

/**
 * /arvi/ - IB and IGCSE tutoring page for Arvi, Wardha district, Maharashtra. Online-only delivery: tutors
 * do not visit homes here, that runs only in Gurugram and parts of Delhi NCR. No school in Wardha district
 * is confirmed to teach the IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and schoolClusters
 * point to Amravati (KK Cambridge International School, Indala) and Nagpur, reusing names already
 * published on amravati.ts and nagpur.ts. Coordinates come from OpenStreetMap: Wikipedia's are wrong.
 * Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const arvi: CitySeoPage = {
  slug: "arvi",
  countryName: "Arvi",
  countryNameLong: "Arvi, Wardha, Maharashtra",
  demonym: "Arvi",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions are set around school timings first, then around Vidarbha's May heat, the sowing and picking weeks that pull many households into the fields, and festival stretches such as Ganeshotsav, Dussehra and Diwali",
  lastUpdated: "2026-09-21",
  geo: { latitude: 20.9986, longitude: 78.2301 },
  wikipedia: "https://en.wikipedia.org/wiki/Arvi,_Wardha",
  alternateNames: ["Arvi Wardha", "Arvi Maharashtra", "Arvi taluka"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Arvi | Private Online Tuition at Home",
  metaDescription: "IB and IGCSE tutors for Arvi, Wardha: private one-to-one lessons taught live online at home, PYP to DP and Cambridge or Edexcel IGCSE, with a free trial class.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Arvi",
  heroEyebrow: "ONLINE PRIVATE TUITION FOR ARVI AND WARDHA FAMILIES",
  heroSubtitle: "Private tuition for students in Arvi, taught at home over live video: IB Gram pairs your child with a tutor for the precise IB subject or Cambridge and Edexcel IGCSE code, one to one, from a desk in your own house. Arvi has no IB or IGCSE school we can confirm, and the nearest Cambridge campus is in Amravati, so the specialist comes by screen.",
  primaryKeyword: "IB and IGCSE tutors in Arvi",
  imageAltText: "Arvi student revising IGCSE Chemistry notes with a tutor on a laptop during a live online private tuition lesson",
  secondaryKeywords: [
    "IB tutor Arvi",
    "IGCSE tutor Arvi",
    "IB home tuition Arvi",
    "IGCSE home tuition Arvi",
    "IB private tuition Arvi",
    "IB Maths tutor Arvi",
    "IGCSE Maths tutor Arvi",
    "IB Physics tutor Arvi",
    "IB Chemistry tutor Arvi",
    "IB Biology tutor Arvi",
    "IB DP tutor Arvi Maharashtra",
    "IB MYP tutor Arvi",
    "IB PYP tutor Arvi",
    "IGCSE online tuition Arvi",
    "Cambridge IGCSE tutor Arvi Wardha",
    "online home tuition Arvi",
    "IB tutor Wardha",
    "IB tutor Pulgaon",
    "IGCSE tutor Hinganghat"
  ],
  heroTrustPoints: [
    "Matching begins with the syllabus your child is really following, then narrows to a tutor who has taught it lately",
    "Lessons arrive on your own laptop, timed to suit Arvi's school day and the farming season",
    "The first lesson costs nothing, so you decide after seeing how your child responds",
    "After every session a few written lines record what was covered and what comes next",
    "IB Gram stands apart from all schools and from the IB, Cambridge and Pearson themselves"
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB from primary to Diploma" },
    { value: "Two boards", label: "Cambridge and Edexcel IGCSE" },
    { value: "IST", label: "Your tutor keeps your clock" },
    { value: "Free trial", label: "See it before you commit" }
  ],

  intro: {
    heading: "What private IB and IGCSE tuition at home looks like for an Arvi family",
    paragraphs: [
      "Arvi is a cotton and soybean trading town in Wardha district, in the Vidarbha region, with a municipal council that dates from 1865 and about 43,000 residents at the 2011 census. The nearest railway station is Pulgaon Junction, roughly 35 kilometres away, and we could not confirm a school anywhere in Wardha district that offers the IB or either IGCSE board. A search for IB and IGCSE tutors in Arvi therefore leads to online teaching, given live from elsewhere in India to one student at a time.",
      "The families who ask are a varied group. There are trading households from the cotton and soybean market, doctors and clinic owners, teachers and officials in the taluka offices, and staff connected to the defence depot at Pulgaon whose postings can bring in a child from a different board. What they share is a wish to keep the child at home through Class 10 while holding a qualification that is understood in Pune, Mumbai or overseas.",
      "Searching for home tuition in Arvi usually means wanting a teacher at the dining table. What IB Gram provides is that same undivided attention at your table, delivered through a laptop: a live video lesson with a shared screen, taught by a tutor based elsewhere in India. Nobody travels to Arvi. Teaching inside a student's house is limited to Gurugram and parts of Delhi NCR, and we say so before you book.",
      "IB Gram works independently of every school, the IB, Cambridge and Pearson. Tutors explain, correct and mark practice work, but they do not draft or polish anything a student submits for marks, whether that is an IA, the Extended Essay, a TOK essay or IGCSE coursework."
    ],
    bullets: [
      "IB help from PYP and MYP through to the Diploma and CP",
      "Cambridge and Edexcel IGCSE matched paper by paper",
      "Live lessons on Indian Standard Time, one student at a time",
      "No tutor visits in Arvi; house visits exist only in Gurugram and parts of Delhi NCR",
      "A free first lesson, then a short written plan"
    ]
  },

  programmesIntro: "No IB programme is taught in Wardha district, so an Arvi family reaches each one by a side door: a previous school in another city, a boarding seat, an online school, or a plan for next year. The notes below say what that tends to mean for the child, and where a tutor fits.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description: "Children learn through themed inquiries that blend subjects, then plan and present an Exhibition in the last year. With no outside exam, a tutor concentrates on comfortable reading, number sense and the knack of asking questions that can actually be researched.",
      countryNote: "PYP enquiries from Arvi come from families whose child began the programme in another city, and the first sessions rebuild continuity with whichever inquiry the earlier school was midway through."
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description: "Marks are awarded against four published criteria in every subject, not as one blended score, the Personal Project closes the programme, and some schools add on-screen eAssessment. The commonest loss is describing a topic when the higher bands want it analysed.",
      countryNote: "For Arvi the MYP question is usually about the gap year before IGCSE: a Class 8 student on the State Board who will soon meet criterion-based science and language tasks at a new school."
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description: "Students take six subjects, three at Higher Level, and complete the Extended Essay, Theory of Knowledge and a service requirement. Internal assessments supply a sizeable slice of most subject grades, and the written papers come in May or November.",
      countryNote: "The Diploma is not taught within a long drive of Arvi, so a student works to the calendar of a school elsewhere, and a tutor has to learn that calendar before planning anything."
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description: "Two or more Diploma courses are paired with a career-related study, a reflective project and work on personal and professional skills. Few schools in India run it, yet the Diploma courses inside it are taught at full depth.",
      countryNote: "CP is almost never asked about from Arvi, and when it comes up the tutoring simply follows whichever Diploma courses the child's programme includes."
    }
  ],

  subjectsIntro: "An IB Chemistry HL student in Nagpur revising before November papers and a Class 11 Mathematics SL student catching up after a school change need different hours, so matching starts from subject, level and the exam session, and only then from the word IB.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Class 12 State Board students are often quick with calculus routines but unsure how to justify each step in a proof; lessons build that reasoning and leave time to plan the Exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and confident use of a graphic calculator carry the marks, and the Exploration rewards a topic the student truly cares about." },
    { name: "IB Physics", levels: "HL / SL", description: "Fluency with the data booklet, sensible handling of uncertainty and an investigation that someone else could repeat are what lift a 5 to a 6 or 7." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry feels familiar, then organic pathways and equilibrium arrive at pace; worked mark-scheme answers show how examiners reward reasoning." },
    { name: "IB Biology", levels: "HL / SL", description: "A State Board student usually knows the facts and needs practice shaping them into answers that respect command terms such as outline, compare and evaluate." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams must be correct and labelled, and Paper 3 at HL rewards calculations and policy judgement built on live examples, including farm prices and trade." },
    { name: "IB Business Management", levels: "HL / SL", description: "A family business or a local market trader can supply real data for the Internal Assessment, provided the student keeps the question focused." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Marathi-medium learners often have sharp analytical instincts in their own language, and the work is to carry them into English commentary and the Individual Oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms stick only after real coding practice, and the Internal Assessment product needs to run and be clearly documented." },
    { name: "IB Psychology", levels: "HL / SL", description: "Named studies must be recalled accurately across the approaches, and an extended response has to stay organised from the first line to the last." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Land use, water and soil questions in a cotton district give the student plenty of real examples, as long as answers evaluate systems and not just describe them." },
    { name: "IB Marathi A and Hindi B", levels: "HL / SL", description: "Text types and register are taught first, then the spontaneous speaking that the oral tests; a student who reads Marathi literature at home starts with an advantage." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions run as a structured argument, pulling apart an exhibition object and defending the prescribed title from an uncomfortable side." }
  ],

  igcseSubjectsIntro: "Cambridge and Pearson Edexcel each set their own International GCSE papers, and the question wording differs between them. A student near Arvi may enter through either board, so preparation follows the exact code and tier, then drills with that board's own earlier papers.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Core / Extended", description: "Extended asks for speed and tidy working more than new topics, so early lessons rescue the method marks that hurried students drop." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "An early look at calculus and vectors that makes IB Maths AA far less of a shock two years later." },
    { name: "IGCSE Physics 0625 / 4PH1", levels: "Core / Extended", description: "Rearranging formulae calmly under time pressure matters most, and the alternative-to-practical paper is practised from the start." },
    { name: "IGCSE Chemistry 0620 / 4CH1", levels: "Core / Extended", description: "Moles and titration arithmetic are paired with practical technique, so neither turns into a late surprise before the exam." },
    { name: "IGCSE Biology 0610 / 4BI1", levels: "Core / Extended", description: "Inheritance and genetics carry heavy weight, and the long-answer questions are the best place to win back lost marks." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Quick, accurate diagrams earn early marks, while the evaluative answers grow out of steady work on real cases." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Writing real Python programs turns trace tables and algorithm questions into routine work." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Suited to Marathi- and Hindi-medium students, with listening, speaking and writing practised to the paper format." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Case studies, map skills and a fieldwork question, with local river, farm and monsoon examples to keep them concrete." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "A sensible certificate for a child who already speaks Hindi at home and wants the language recorded." }
  ],

  regionsTitle: "Arvi, the roads out of it and the towns our online lessons reach",
  regionsIntro: "Because every lesson runs on a laptop, this list is about context and not travel: which town has what, how long the road to each one is, and what a normal evening looks like in a taluka with no railway station of its own.",
  regions: [
    { name: "Arvi town centre and market yard", note: "The commercial centre of the taluka, where cotton and soybean are traded; a lesson at home here saves a bus ride to Wardha for subjects no local class covers." },
    { name: "Bus stand and the Wardha and Amravati roads", note: "Roads lead to Wardha, about 56 kilometres, and Amravati, about 54 kilometres; with no railway in town, a school visit in either city is a road journey worth planning in advance." },
    { name: "Wardha river side", note: "Farming villages along the river where monsoon flooding and field work shape the year; run a test video call from the exact room before the trial." },
    { name: "Pulgaon", note: "The nearest railway junction, roughly 35 kilometres from Arvi and home to a Central Ammunition Depot whose defence postings bring families who began another board elsewhere." },
    { name: "Wardha city", note: "District headquarters with the Hindi university and the Gandhi ashram nearby; no IB or IGCSE school is confirmed in the city either." },
    { name: "Sevagram and Sawangi", note: "Campus settlements around the Gandhi-linked medical college and the Datta Meghe institutions, where Biology and Chemistry questions come up most." },
    { name: "Hinganghat", note: "Another cotton-trading town in the district, served by the same online matching as Arvi because no specialist teaches these courses nearby." },
    { name: "Ashti and Karanja", note: "Neighbouring tehsils of Wardha district with State Board schooling, where online lessons are the practical route to an international syllabus." },
    { name: "Amravati", note: "About 54 kilometres away and home to KK Cambridge International School at Indala, the nearest confirmed Cambridge IGCSE option." },
    { name: "Nagpur", note: "Roughly 125 kilometres off, with the MIHAN and Wardha Road international schools and the usual base for specialist hospital visits, AIIMS and VNIT." }
  ],

  schoolDisclaimer: "The schools named here are listed only so parents can see where confirmed Cambridge or IB options exist beyond Wardha district. IB Gram is an independent tutoring service with no link to any of them, the International Baccalaureate, Cambridge or Pearson, and a mention is not an endorsement.",
  schoolClusters: [
    {
      city: "Arvi and Wardha district",
      note: "We could not confirm any school in Arvi or the rest of Wardha district that teaches the IB or the Cambridge and Edexcel IGCSE. Local schools run the Maharashtra State Board or CBSE, and we name no school we cannot verify.",
      schools: []
    },
    {
      city: "Nearby: Amravati",
      note: "Roughly 55 kilometres by road, Amravati has one school we can confirm teaches Cambridge IGCSE, with a CBSE wing beside it. It is the closest physical option, though not a full international-curriculum campus.",
      schools: ["KK Cambridge International School, Indala"]
    },
    {
      city: "Nearby: Nagpur (MIHAN and Wardha Road)",
      note: "About 125 kilometres away, the belt toward MIHAN holds an international campus that is the usual first look for families considering IB or IGCSE at school level.",
      schools: ["D Y Patil International School, MIHAN"]
    },
    {
      city: "Nearby: Nagpur (central and Wanadongri)",
      note: "Further campuses inside Nagpur give a wider choice, including Cambridge-track schools, for families willing to consider boarding or a move.",
      schools: ["Centre Point School International", "VIBGYOR World Academy", "International School of Scholars"]
    }
  ],

  modesIntro: "Each arrangement below stands on the same footing: one tutor, one student, live on video, at times that fit your house. Only the tempo differs. A few students want a steady weekly hour, others a short bridge before a school change, and some need a burst before papers. No tutor comes to a house in Arvi under any of them.",
  modes: [
    {
      title: "A steady weekly hour at the family table",
      description: "One fixed slot a week, placed after school or on a Sunday morning, with a shared screen for working through problems side by side.",
      bullets: [
        "Tutor chosen for syllabus fit, never for location",
        "Fits IB DP and MYP as well as both IGCSE boards",
        "Past papers marked live while the student watches",
        "One tutor stays on for the whole term"
      ]
    },
    {
      title: "A bridge from State Board or CBSE into IGCSE or IB",
      description: "A short block of lessons for a child about to change boards, aimed at command words, written English and the style of unfamiliar questions.",
      bullets: [
        "Gaps between old and new syllabus listed in week one",
        "Marathi or Hindi explanations where a tutor can give them",
        "Most useful when begun a term before the change",
        "Closes with a written summary of what is now secure"
      ]
    },
    {
      title: "Revision blocks ahead of an exam series",
      description: "Extra sessions in the weeks before the May-June or October-November papers, built on timed questions and fast written feedback, and planned around the farming and festival calendar.",
      bullets: [
        "Timed papers marked to the current criteria",
        "Feedback returned in days",
        "Planned around Ganeshotsav, Dussehra and Diwali",
        "Best booked two to three weeks before school breaks begin"
      ]
    }
  ],

  sections: [
    {
      heading: "Which families around Arvi look at IB or IGCSE, and what do they find locally?",
      paragraphs: [
        "Mostly trading, professional and transferred households, and locally they find no IB or IGCSE school at all. Arvi lies in Wardha district, and the nearest confirmed Cambridge campus is KK Cambridge International School at Indala in Amravati, roughly 55 kilometres away by road, while the Nagpur cluster is about 125 kilometres off. So families usually pair a local State Board or CBSE school with an online specialist.",
        "The groups are easy to name. Cotton and soybean traders and the businesses that work around the market yard make up one; doctors and clinic owners another; teachers and officials in the taluka offices a third; and staff connected to the ammunition depot at Pulgaon a fourth, often arriving on a posting with a child already midway through another board. A few have relatives abroad and want a qualification that travels.",
        "Consider a family that decides to move a Class 8 child to the Cambridge school in Amravati for Class 9. Tutoring can begin a year earlier to cover the distance between State Board and IGCSE thinking. A family that stays in Arvi can instead prepare a child for Cambridge papers, entered through an authorised exam centre, without moving at all.",
        "Neither route leaves an Arvi student behind. Cambridge sets one 0580 paper for every candidate and the IB moderates Diploma work against a single world standard, so a child studying in a taluka town is marked exactly as a student in a metro would be."
      ],
      table: {
        caption: "Where IB and IGCSE can be studied near Arvi",
        columns: ["Place", "What we can confirm", "Road distance from Arvi"],
        rows: [
          ["Arvi and Wardha district", "No IB or Cambridge/Edexcel IGCSE school confirmed", "Local"],
          ["Amravati", "KK Cambridge International School, Indala teaches Cambridge IGCSE with a CBSE wing", "About 55 km"],
          ["Nagpur", "D Y Patil International School at MIHAN and Centre Point School International, among others", "About 125 km"],
          ["Online from Arvi", "Any IB subject or IGCSE code, taught live to one student at a time", "From your own desk"]
        ]
      },
      bullets: [
        "Wardha district has no IB World School and no confirmed IGCSE centre",
        "The Indala campus in Amravati is the closest confirmed Cambridge option",
        "Traders, professionals and transferred families drive most of the interest",
        "The papers and marking are the same ones sat in any big city"
      ]
    },
    {
      heading: "How different are the State Board, CBSE, IGCSE and the IB for an Arvi student?",
      paragraphs: [
        "Different enough that the first term after a switch needs a plan. Maharashtra State Board and CBSE papers test a fixed syllabus mainly through recall and standard methods, while IGCSE and the IB test application and explanation and assess some work across months. Subject content overlaps up to Class 10, so the aim is bridging skills, not relearning chapters.",
        "Language matters in Wardha district, where 87.78 percent of residents speak Marathi as a first language and 6.88 percent Hindi. A student taught in Marathi medium may understand the science well and yet not know how to write an evaluation in English in twenty minutes. IGCSE and IB papers are in English, so tutors often begin with technical vocabulary and timed paragraph writing.",
        "Assessment weight also differs. State Board practicals are largely certified in a journal and examined orally, while an IB Internal Assessment contributes about a fifth of most subject grades and IGCSE coursework or practical papers carry published criteria. Students who have never planned an investigation independently find that planning, not memory, is the first real gap.",
        "Depth is the final difference. IB Higher Level Chemistry and Physics go beyond Class 12 board papers in places, and IGCSE Extended sits a step above routine board difficulty while Core sits near it. That is no reason to avoid the switch; it is a reason to start support early, before the pressure of Class 11 arrives."
      ],
      table: {
        caption: "What changes when an Arvi student crosses from State Board or CBSE to IGCSE or IB",
        columns: ["Skill", "State Board or CBSE habit", "What IGCSE or IB asks"],
        rows: [
          ["Reading a question", "Spot the chapter and recall the answer", "Read the command word first, then decide what to write"],
          ["Writing a long answer", "Textbook points in a fixed order", "An argued response with evidence and a conclusion"],
          ["Practical work", "A certified journal and a viva", "Planning, analysing and evaluating an investigation"],
          ["The exam calendar", "One set of papers each March", "A May-June or October-November series, plus internal work"]
        ]
      },
      bullets: [
        "A Marathi-medium child needs academic English before anything else",
        "IB internal work counts for about one fifth of a typical subject grade",
        "Extended tier outruns routine board difficulty while Core stays close",
        "The term right after a switch is when help pays off most"
      ]
    },
    {
      heading: "What does IB or IGCSE tuition cost for an Arvi family, and why do rates differ?",
      paragraphs: [
        "For IB and IGCSE tutors in Arvi, rates differ because of the level, the subject, how recently the tutor taught that exact syllabus and how many hours a week you book. None of them includes a travel element for Arvi. We publish no price list, since an hour of IGCSE Mathematics Core and an hour of IB Physics HL do not cost the same to supply, and you receive the rate in writing before the free trial.",
        "The national tutor pool is uneven. Plenty of teachers have worked with Core-tier Cambridge subjects, while only a handful have taught Chemistry HL or Maths AA HL in recent years, and scarcity shows up in the quote. For Arvi the local pool is effectively empty for both, so every match is made across India and the comparison is between tutors, not between localities.",
        "It helps to think about what a family in Arvi normally spends on tuition: bus fares to Wardha, a fee to a class that covers the wrong syllabus, sometimes a hostel. Online lessons remove the journey and the room rent entirely, so the whole payment goes toward teaching time rather than logistics.",
        "Value shows up inside the lesson. A tutor who has marked Cambridge 0620 practical-style papers recently, or guided a Maths AI Exploration to a good mark, changes more in one hour than a generalist does in two. Ask about exact syllabus experience first and the hourly figure second, and remember that no contract binds you beyond the sessions you choose."
      ],
      bullets: [
        "Four things move the price: level, subject, tutor experience and hours",
        "An Arvi quote carries no travel component",
        "The figure is sent in writing before the trial lesson",
        "Stopping or pausing costs nothing extra"
      ]
    },
    {
      heading: "Online tutor, Wardha coaching class, village teacher or solo study: choosing the support that fits",
      paragraphs: [
        "Coaching in and around Wardha and Nagpur is built on JEE, NEET and MHT-CET preparation, because that is where paying demand sits. A batch for IB Physics HL or IGCSE Additional Mathematics does not exist within commuting range of Arvi, and travelling 56 kilometres to Wardha for an evening class is not a realistic weekly habit.",
        "Teachers nearer home are invaluable for State Board subjects and for steadying a student who has fallen behind. The limitation is narrow: a tutor who has taught this year's Cambridge alternative-to-practical paper or coached a Maths AI Exploration through to the final mark is hard to find in any taluka town, and we cannot point to one in Arvi.",
        "Self-study is stronger than many parents expect. Cambridge past papers are easy to find, free video lessons cover much of IGCSE Mathematics, and a disciplined student can go far alone. Progress stalls at Internal Assessment planning and extended writing, where students cannot see their own weaknesses and need an experienced second reader.",
        "An online tutor replaces a local supply that barely exists with a national one. It supplies syllabus precision that coaching batches are not designed for and the correction that self-study lacks, which is what families looking for IB and IGCSE tutors in Arvi are really after."
      ],
      table: {
        caption: "Support options for an Arvi student",
        columns: ["Option", "Syllabus precision", "Personal attention", "Catch for Arvi families"],
        rows: [
          ["Coaching class in Wardha or Nagpur", "Low; built for State Board, JEE and NEET", "Shared with a batch", "Long travel and no IB or Cambridge batch exists"],
          ["Teacher from the town", "Uneven, strongest in board subjects", "One to one", "Few have taught the current IB or IGCSE syllabus"],
          ["Solo study with free resources", "Whatever the student finds", "None", "No one checks internal assessments or long answers"],
          ["Matched online tutor", "Picked for the exact code and level", "One to one", "Depends on a steady home connection"]
        ]
      },
      bullets: [
        "Nothing in commuting range is built around IB or Cambridge papers",
        "Town teachers with recent IB or IGCSE classes are hard to find",
        "Going it alone leaves internal assessments unread",
        "An online match puts national specialists on your table"
      ]
    },
    {
      heading: "How do Vidarbha's summers, monsoon sowing and festivals shape an Arvi study year?",
      paragraphs: [
        "They shape it more than most parents expect: May heat in the mid-forties pushes lessons to early morning or after dusk, the first monsoon rains pull many households into cotton and soybean sowing, and autumn festivals and the harvest each claim a few weeks. A workable plan starts from these and places lessons in the gaps between them.",
        "The academic year runs from the June reopening of schools to the March board exams, and Maharashtra's HSC and SSC papers usually fall between late February and March. Cambridge holds two main series, May-June and October-November, while IB Diploma papers fall in May and November, with results in July and January. A student's own school or exam centre fixes which applies.",
        "August and September bring Pola, when farming households honour their bullocks, and Ganeshotsav, which fills evenings for nearly two weeks. October adds Navratri and Dussehra, which Buddhist communities in Vidarbha also mark as Dhamma Chakra Pravartan Din, followed quickly by Diwali. These are breaks, not obstacles, and a plan that pauses for them and restarts with a timed paper loses very little.",
        "Connection and power need thought too. Monsoon storms and summer load can interrupt broadband, so keep the laptop charged, test the link from the room you will use and keep a phone hotspot as a backup. Tell the tutor about any outage early so a replacement slot can be found."
      ],
      table: {
        caption: "Arvi's seasons and what they mean for lessons",
        columns: ["Months", "What is happening in and around Arvi", "What we do with lessons"],
        rows: [
          ["March to early June", "Board exams, then peak heat in the mid-forties, MHT-CET and NEET in spring", "Early-morning or evening slots, shorter sessions, Cambridge May-June series and IB May papers"],
          ["Late June to July", "Monsoon arrives and cotton and soybean sowing begins", "Work around sowing weeks, steady weekly lessons, IB results in July"],
          ["August to September", "Pola, Ganeshotsav and heavy rain", "Light weeks during the festivals, then timed practice"],
          ["October to November", "Navratri, Dussehra, Diwali, soybean harvest, second Cambridge series and IB November papers", "Pause for festival weeks, then focused revision blocks"],
          ["December to February", "Cooler weather, cotton picking winds down, mock exams, HSC papers start in late February", "Evening slots, mock-paper review, Cambridge and IB November results"]
        ]
      },
      bullets: [
        "Mid-forties heat in May favours early and late slots",
        "Sowing for cotton and soybean follows the first rains",
        "Pola, Ganeshotsav, Dussehra and Diwali each interrupt a week or two",
        "Cambridge offers series in May-June and October-November"
      ]
    },
    {
      heading: "Where can an Arvi student study after IB or IGCSE?",
      paragraphs: [
        "Most look toward Nagpur, Pune, Mumbai and abroad, and each route has paperwork. Indian universities treat an IB Diploma as a Class 12 qualification only once the Association of Indian Universities has issued equivalence, while IGCSE results stand in for Class 10 and lead into two further years of study. The right subject mix matters as much as the marks, since some courses require Physics, Chemistry and Mathematics at a particular level.",
        "Near home, Wardha offers the Mahatma Gandhi Institute of Medical Sciences at Sevagram, the Datta Meghe institutions at Sawangi and the central Hindi university; Nagpur adds VNIT, AIIMS Nagpur, the government medical college and Rashtrasant Tukadoji Maharaj Nagpur University. Central universities admit through CUET-UG, while state engineering and medical seats run through Maharashtra's CET Cell and NEET counselling, whose rules for candidates from non-State boards should be read early.",
        "JEE Main and NEET-UG ask for particular subjects at the qualifying level, and Maharashtra's state-quota rules can differ for students outside the State Board. An Arvi family should check the official notice for the exact course, since a subject dropped in Class 11 cannot be added back later.",
        "Study abroad depends on predicted grades issued in the autumn of the final year. A UK offer normally names a total points figure with Higher Level minimums, while US and Canadian applications treat predictions as one part of a larger file. Tutors work on subject marks and technique, not on applications or visas."
      ],
      bullets: [
        "AIU equivalence turns an IB Diploma into a Class 12 match for India",
        "CUET-UG serves central universities; Maharashtra seats use the CET Cell",
        "JEE Main and NEET-UG name the subjects that must have been studied",
        "Autumn predictions in the last year count heavily abroad"
      ]
    },
    {
      heading: "IB Maths and the sciences: what an Arvi student should know before choosing",
      paragraphs: [
        "The first choice in IB Mathematics is between Analysis and Approaches (AA) and Applications and Interpretation (AI). AA follows algebra, functions, calculus and proof and suits students heading to engineering, pure science or economics, and its HL Paper 3 sets long investigative problems that board-style practice rarely prepares for. AI is about data, modelling and a graphic calculator, and its Exploration punishes starting late.",
        "Physics HL rewards a student who keeps accuracy over long papers and handles the data booklet without hunting, with a Scientific Investigation built on a method that holds up when questioned. Chemistry HL changes gear once bonding gives way to organic mechanisms and energetics, and marking against the real IB rubric, not a generic science standard, is where tutoring changes outcomes.",
        "Biology students usually have the facts and lack the answer shape that command terms demand, and they need enough statistics to defend an investigation's conclusion. Across the three sciences a State Board student often knows the content well and has rehearsed command-word precision too little; fixing that lifts marks faster than adding topics.",
        "No school near Arvi teaches these courses, so a specialist matched to the exact level and current syllabus is the quickest way to close gaps between holidays. Relying on a generalist with the nearest textbook costs a term of revision that most students on this route do not have."
      ],
      bullets: [
        "AA leans on calculus and proof, AI on data and modelling",
        "Physics and Chemistry HL both hang on the Scientific Investigation",
        "Biology wants exact command-term answers as well as facts",
        "State Board students know the content yet seldom drill command words"
      ]
    },
    {
      heading: "IGCSE tiers and subject choices for an Arvi family",
      paragraphs: [
        "The IGCSE tiers limit different grade ranges. Core stops at grade C on the A* to G scale, or grade 5 in the 9 to 1 versions, while Extended reaches the top grades. For an Arvi student who may later join an IB Diploma school in Nagpur, the tier chosen in Class 9 decides how steep Higher Level Mathematics and the sciences feel two years on.",
        "Extended Mathematics 0580, combined with Additional Mathematics 0606 where an exam centre allows it, is the best preparation for IB Maths AA at HL. The Extended sciences work in the same way, because the depth they reach is close to what DP Physics and Chemistry expect on the first day.",
        "Students generally follow the subject list their school or exam centre has fixed, so tutoring works inside that structure. The task is to close the gaps left by a particular combination, such as a student who has Economics without Mathematics strength, not to redesign the timetable.",
        "A child coming from an Edexcel school needs a tutor who knows how Pearson phrases questions against Cambridge. The mathematics overlaps heavily, yet exam technique does not transfer, and students who assume it will lose marks through wording alone."
      ],
      table: {
        caption: "Choosing an IGCSE tier in Class 9",
        columns: ["Point", "Core tier", "Extended tier"],
        rows: [
          ["Highest grade", "C, or 5 in the 9 to 1 versions", "A*, or 9 in the 9 to 1 versions"],
          ["Sensible for", "Students finishing at Grade 10 or moving to a Class 11 board", "Students aiming at IB DP, A Level or engineering and medicine"],
          ["Link to IB Maths AA HL", "Bigger gap to bridge", "Strong preparation, stronger still with Additional Mathematics"]
        ]
      },
      bullets: [
        "Tier choice in Class 9 sets the steepness of the later IB climb",
        "0606 Additional Mathematics is the nearest thing to a bridge into AA HL",
        "A tutor works within whatever subject list the school has chosen",
        "Pearson and Cambridge technique part ways even on shared content"
      ]
    }
  ],

  tutorsIntro: "Meet tutors who teach IB PYP, MYP and Diploma subjects as well as Cambridge and Pearson Edexcel IGCSE. For Arvi families each introduction is judged on syllabus, level and exam session first, and every lesson is live and online.",
  process: [
    { title: "Tell us about your child", description: "Which programme or board, which subject and level, the latest grade, and the hours that work in your Arvi home." },
    { title: "Meet your matches", description: "A shortlist drawn for syllabus fit, each with a plain reason why that tutor suits your child." },
    { title: "Try a lesson on us", description: "A live topic from the real syllabus, taught online, free of charge and with no obligation." },
    { title: "Fix the first month", description: "The tutor suggests topics and a weekly rhythm and explains how progress will be reported, and you approve or amend the plan." },
    { title: "Keep going, or change", description: "One fixed online slot every week, a review every few weeks, and a new tutor whenever the pairing is not working." }
  ],
  whyPoints: [
    { title: "Syllabus first, distance never", description: "Nobody who teaches these courses lives near Arvi, so tutors are chosen only for subject, level, code and tier." },
    { title: "Built for a taluka with no IB option", description: "With no confirmed IB or IGCSE school in Wardha district, matching looks across the whole country." },
    { title: "Judge it yourself", description: "The free trial lets your child meet the tutor on a live topic before anything is decided." },
    { title: "The work stays your child's", description: "Tutors coach Internal Assessments, coursework and Extended Essays and never write any of them." },
    { title: "Progress you can read", description: "A short written note follows each lesson, with a fuller review every few weeks." },
    { title: "Free to leave", description: "No long contract, no attachment to any school or exam board, and a re-match on request." }
  ],

  faqs: [
    { question: "How do I find an IB tutor in Arvi?", answer: "Write to IB Gram with the programme, subject, level and exam session. A shortlist is then drawn for that exact course from tutors across India, because Wardha district has no IB school to supply local ones. You fix the lesson times afterwards, try a free lesson first, and can ask for a different tutor if the first pairing feels wrong." },
    { question: "Are IGCSE tutors available for students in Arvi, Cambridge or Edexcel?", answer: "Yes, for both boards. Matching goes by subject code and tier, for example Cambridge 0620 Chemistry or Edexcel 4MA1 Mathematics, and the practice material is that board's own papers and mark schemes. Lessons are live and online, so an Arvi student gets the kind of specialist a student in Mumbai or Bengaluru would." },
    { question: "Will a tutor come to our house in Arvi?", answer: "No. Tutors do not visit homes in Arvi, and in-person teaching exists only in Gurugram and parts of Delhi NCR. What your child gets is private tuition at home, online: a desk in your house, a laptop, and a tutor on live video with a shared screen. Be wary of anyone promising a doorstep visit here." },
    { question: "What does IB or IGCSE tuition cost for a family in Arvi?", answer: "It depends on level, subject, the tutor's recent experience with that syllabus and the weekly hours, and not on where in Arvi you live. IB Higher Level subjects generally cost more than IGCSE Core because fewer tutors have taught them lately. You get the figure in writing before the free trial, with no travel charge and no long contract." },
    { question: "Which schools near Arvi offer IB or IGCSE?", answer: "None that we can confirm in Arvi or Wardha district, where schools follow the Maharashtra State Board or CBSE. The nearest confirmed Cambridge option is KK Cambridge International School at Indala in Amravati, about 55 kilometres away, and Nagpur has a wider cluster roughly 125 kilometres off. Most families keep the child in a local school and add an online tutor." },
    { question: "Can a Marathi-medium student take up IGCSE or IB?", answer: "Yes, with a bridging plan. Subject knowledge usually carries over, but IGCSE and IB papers are in English, so the first weeks go on technical vocabulary, command words and short timed paragraphs. If you would like a tutor who can also explain a stuck idea in Marathi or Hindi, tell us at matching and we will look for one." },
    { question: "Is online tuition practical with Arvi's internet and power supply?", answer: "Yes, with simple precautions. Keep the laptop charged, test the connection from the room you will use and have a phone hotspot ready as a backup. Monsoon storms and summer load can cause cuts, so tell the tutor early about an outage and a replacement slot can be arranged. Run a trial call before the free lesson if connectivity worries you." },
    { question: "Is there a free trial class before we commit?", answer: "Yes. The first lesson costs nothing: your child takes a real topic from their own syllabus with the proposed tutor on video, and no payment is due afterwards. A short plan for the first month follows, and you may accept it, ask for edits or request a different tutor. Many Arvi families choose a Sunday morning for this first session." },
    { question: "Can a tutor help with IB Internal Assessments or the Extended Essay from Arvi?", answer: "Yes, by coaching only. A tutor can help pick a question that can be researched, explain what each criterion rewards, plan how data will be gathered and comment honestly on drafts the student wrote. Writing or reworking the assessed text would breach IB academic integrity rules, so IB Gram tutors decline any such request." },
    { question: "Which IB Diploma subjects can you help with for Arvi students?", answer: "Families ask most often about Maths AA and AI at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Geography and Marathi or Hindi. Theory of Knowledge and Extended Essay guidance are offered as coaching. A rarer subject goes through the same matching, from a smaller pool of tutors." },
    { question: "Do you teach IB MYP and PYP students connected to Arvi?", answer: "Yes. For PYP children the work is reading, writing, number sense and the research habits behind the Exhibition; for MYP students it is criterion-based analysis in sciences and languages and the Personal Project journal. This suits families whose child attends an IB school in another city or is preparing for a move." },
    { question: "When should an Arvi student begin IGCSE or IB tutoring?", answer: "As close to the start of the course as possible: Class 9 for IGCSE, Class 11 for the Diploma. Starting early gives weak foundations time to mend before internal exams, IA deadlines and predicted grades arrive together. A student who joins late still benefits, with sessions trimmed to the highest-value topics and built around timed past papers." },
    { question: "Can lessons be scheduled around the farming and festival calendar in Arvi?", answer: "Yes. Most families pick weekday evenings or weekend mornings, and the plan leaves room for sowing and harvest weeks, Ganeshotsav, Dussehra and Diwali. In the hottest weeks early-morning or late-evening slots work better. A second weekly slot before mocks or an exam series is easy to add online." },
    { question: "Can IB or IGCSE students from Arvi still sit MHT-CET, JEE or NEET?", answer: "Usually yes, if the subject combination and equivalence rules are met. JEE Main, NEET-UG and Maharashtra's CET Cell each publish eligibility notices, and students from non-State boards may need equivalence paperwork. Read the official notice for your exact course early, and keep tutoring focused on the subject depth those exams expect." },
    { question: "What happens if we are not happy with the tutor?", answer: "Say so and a different tutor is found. Progress is reviewed with you every few weeks, and a re-match is available whenever the fit is off, because a child should not have to stay with a tutor who is not helping. Nothing ties you to a long contract, so pausing or stopping carries no penalty either." },
    { question: "How are IB Gram tutors vetted for Arvi students?", answer: "Each tutor is screened before any introduction for qualifications, recent teaching of the exact subject and level, and skill with assessment criteria. With no local specialist base near Arvi, preference goes to tutors who taught the current syllabus recently over general subject teachers. The free trial then lets you test the fit yourself." },
    { question: "Is IB Gram connected to KK Cambridge International School or any other school?", answer: "No. IB Gram is independent and has no affiliation with, endorsement from or role at KK Cambridge International School, any other school named on this page, the International Baccalaureate, Cambridge University Press and Assessment or Pearson Edexcel. Schools are named only to show where confirmed options exist." }
  ],

  internalLinks: [
    { label: "How IB Gram works across India", href: "/india/", description: "An overview of tutoring students in small towns and large cities alike." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where a tutor can actually come to the house." },
    { label: "IGCSE explained", href: "/igcse/", description: "Cambridge and Edexcel boards, tiers and exam months." },
    { label: "IB subject tutors", href: "/ib-tutors/", description: "Find IB support by subject, from PYP to Diploma level." },
    { label: "The IB Diploma", href: "/programmes/dp/", description: "Six subjects, the core, IAs and how the points add up." },
    { label: "The IB MYP", href: "/programmes/myp/", description: "Criteria-based marking, the Personal Project and eAssessment." },
    { label: "The IB PYP", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition in the final year." },
    { label: "IB Mathematics options", href: "/courses/ib/mathematics/", description: "AA or AI: which course fits which student." },
    { label: "Our tutors", href: "/tutors/", description: "Profiles arranged by subject, programme and teaching experience." },
    { label: "Talk to IB Gram", href: "/contact-us/", description: "Describe what your child needs and arrange the free trial." },
    { label: "IB and IGCSE tutoring in Wardha", href: "/wardha/", description: "The district headquarters, about 56 kilometres from Arvi." },
    { label: "IB and IGCSE tutoring in Amravati", href: "/amravati/", description: "Home to the nearest confirmed Cambridge school." },
    { label: "IB and IGCSE tutoring in Nagpur", href: "/nagpur/", description: "Vidarbha's largest cluster of international schools." },
    { label: "IB and IGCSE tutoring in Yavatmal", href: "/yavatmal/", description: "A neighbouring Vidarbha district with a similar school picture." }
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor for your Arvi student",
  closingBody: "Looking for IB and IGCSE tutors in Arvi? Tell us which programme or board your child follows, the subject and level, the latest grade and the evenings that work at home. A shortlist follows, with a brief profile of each tutor and a few slots for the trial lesson. The trial is free, nothing obliges you afterwards, and all teaching is online. Contact support@ibgram.com or WhatsApp +91 7439 368 115."
};
