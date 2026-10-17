import type { CitySeoPage } from "../types";

/**
 * /savanur/ - IB and IGCSE tutoring page for Savanur, a taluk town in Haveri district, Karnataka. No IB or
 * Cambridge/Edexcel school in Savanur could be confirmed, so stripSchools is empty and the clusters borrow
 * Belagavi, Bengaluru and Mysuru names from existing city pages. All lessons online.
 */
export const savanur: CitySeoPage = {
  slug: "savanur",
  countryName: "Savanur",
  countryNameLong: "Savanur, Karnataka",
  demonym: "Savanur",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings after school or PU college and Sunday mornings, kept clear of Ugadi, Dasara and the March exam weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 14.9731, longitude: 75.3328 },
  wikipedia: "https://en.wikipedia.org/wiki/Savanur",
  alternateNames: ["Savanuru", "Savanoor"],
  stripSchools: [],

  title: "IB and IGCSE Tutors in Savanur | Online Tuition from Home",
  metaDescription:
    "Savanur students in Haveri district learn IB and IGCSE online, one to one, with tutors matched to the syllabus. Book a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Savanur",
  heroEyebrow: "ONE-TO-ONE IB AND IGCSE TUITION FOR SAVANUR, HAVERI DISTRICT",
  heroSubtitle:
    "Private tuition from home for Savanur students on the IB or an IGCSE: a live one-to-one lesson on your own laptop with a tutor who has taught your exact course before. Savanur is a taluk town in Haveri district with no school we can confirm for either board, so the lesson reaches the child on a screen instead of the family driving to Hubballi or Bengaluru every week.",
  primaryKeyword: "IB and IGCSE tutors in Savanur",
  imageAltText: "A Savanur student working through an IB Mathematics problem with a tutor in a live video lesson at a home desk",
  secondaryKeywords: [
    "IB tutor Savanur",
    "IGCSE tutor Savanur",
    "IB home tuition Savanur",
    "IGCSE home tuition Savanur",
    "IB private tuition Savanur",
    "IB Maths tutor Savanur",
    "IGCSE Maths tutor Savanur",
    "IB Physics tutor Savanur",
    "IB Chemistry tutor Savanur",
    "IB Biology tutor Savanur",
    "IB DP tutor Savanur",
    "IB MYP tutor Savanur",
    "IB PYP tutor Savanur",
    "IGCSE online tuition Savanur",
    "online IB tutor Haveri district",
    "IGCSE tutor Haveri",
    "IB tutor Shiggaon",
    "IB tutor Hubballi Dharwad",
    "Cambridge IGCSE tutor Karnataka",
    "Savanuru IB tuition",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact IB course or IGCSE syllabus code",
    "Every lesson is online in Savanur; in-person tuition exists only in Gurugram and parts of Delhi NCR",
    "A short written note after each class so parents can follow progress",
    "A free trial lesson first, then the rate in writing",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "Cambridge + Edexcel", label: "IGCSE boards taught" },
    { value: "IST", label: "After school and PU college" },
    { value: "Free trial", label: "Before any fee is discussed" },
  ],

  intro: {
    heading: "A Nawabi town in Haveri district, and the case for learning IB and IGCSE online",
    paragraphs: [
      "Savanur is the headquarters of its own taluk in Haveri district, in the middle of Karnataka, and it carries more history than most towns of its size. Until 1948 it gave its name to a princely state ruled by the Nawabs of Savanur, and the palace known as Majid Castle now houses the Taluk Panchayath office. The town is better known for the Brindavana of Satyabodha Tirtha and three giant baobab trees than for international school boards.",
      "So when a parent here looks for IB and IGCSE tutors in Savanur, the question normally comes out of a plan. A child may be about to join a school in Bengaluru, Mysuru or Mangaluru that teaches one of these boards. A family may be preparing a transfer. A student already enrolled elsewhere may need a specialist that a taluk town simply does not have. We have not been able to confirm any school in Savanur itself that teaches the IB or an IGCSE.",
      "That is why every lesson is online. The student sits at home with a laptop, a notebook and a shared whiteboard, and the tutor teaches live from elsewhere in India, in Indian Standard Time. Nobody travels to Savanur, since home visits run only in Gurugram and parts of Delhi NCR. What the family gains is a choice of people who have actually taught IB Maths or IGCSE Chemistry, rather than whoever lives within a bus ride.",
      "IB Gram is an independent tutoring service. It has no link with the IB, Cambridge, Pearson or any school named on this page. Our tutors explain, correct and coach, and they leave Internal Assessments, Extended Essays, TOK essays and coursework to the students who must submit them.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Live one-to-one lessons in English, taught from India in IST",
      "A free trial lesson first, with the rate quoted in writing before you book",
      "Online only in Savanur, because in-person home visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Most Savanur students meet these programmes through a change of school, not through a classroom already in town, so tutoring tends to have a date attached: an entrance assessment, the first term in a new school or a set of mock papers. This is what each stage asks of a child.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "Learning is organised around units of inquiry, where children ask questions, make things and explain what they found. There is no external paper, and the last year ends with a self-directed Exhibition. A tutor at this age works on fluent reading, tidy written English and a comfortable feel for numbers, so inquiry has something solid underneath it.",
      countryNote:
        "For a Savanur child heading to an IB primary classroom in another city, lessons are short and conversational, often in English for a child whose daily speech is Kannada or Urdu.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are marked against published criteria instead of a single percentage, and a child is expected to apply what they know to unfamiliar situations. In the last year the Personal Project asks for a self-directed product and a written report. Students from state-board classrooms usually arrive knowing plenty and writing less than the criteria ask for.",
      countryNote:
        "In Savanur, MYP help centres on English paragraph writing, science investigations with a clear method and Maths problems set in everyday contexts.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three or four of them at Higher Level, are studied alongside Theory of Knowledge, the Extended Essay and CAS. Each subject is graded 1 to 7, and the core adds up to three bonus points, for a maximum of 45. Written papers fall in May, and some schools also sit the November session.",
      countryNote:
        "A Savanur Diploma student is almost always enrolled at a school in another city, and online lessons fill evenings and holiday weeks when the family is back home.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "At least two Diploma courses are combined with a career-related study and a reflective project. Few schools in India run it. The Diploma courses inside a CP are taught to the same standard as in a full Diploma.",
      countryNote:
        "CP is rare in Karnataka. If it comes up, we staff the Diploma courses exactly as we would for a full DP student.",
    },
  ],

  subjectsIntro:
    "A subject name is only half the specification. Tell us the level, the school's exam session and, for Mathematics, whether your child follows Analysis and Approaches or Applications and Interpretation, because the two are taught and revised in quite different ways. We then look for a tutor who has delivered that course before.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof. Students from the Karnataka PUC Maths course usually find the content familiar and the demand for full written reasoning new." },
    { name: "IB Maths Applications & Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology, practised on real data sets with a graphic display calculator in hand." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves, fields and nuclear physics, with steady practice on uncertainty, graphs and the data booklet." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Mole calculations, bonding, kinetics, equilibrium and organic reactions. Lessons build speed and accuracy before depth." },
    { name: "IB Biology", levels: "HL / SL", description: "A long syllabus where recall, application and data-response questions all carry marks, so revision is built around all three." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram-led microeconomics and macroeconomics with evaluation. Cotton, jowar and chilli markets give honest examples of price floors and supply shocks." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study analysis, tools such as break-even and SWOT, and the internal research project." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen texts and a comparative essay, helpful for students who speak Kannada or Urdu at home and use English mainly at school." },
    { name: "IB Kannada A", levels: "SL / HL", description: "Literature in the mother tongue. Fluency helps the oral, though the structure of a literary essay still has to be taught." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Text types, listening practice and unscripted speaking for the individual oral." },
    { name: "IB Computer Science", levels: "SL / HL", description: "Algorithms, programming logic, databases and a solution built in stages for the internal assessment." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Systems thinking with local material, from rain-fed farming to the irrigation tanks credited to the last Nawab." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, data handling and the fieldwork skills tested in the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Landmark studies, research methods and structured essay answers." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel both set IGCSEs, and a tutor has to know which board, syllabus code and tier your child will sit. The list below covers the codes families in Karnataka ask us about most.",
  igcseSubjects: [
    { name: "Cambridge IGCSE Mathematics 0580", levels: "Core / Extended", description: "Two papers at each tier. Extended candidates are drilled on algebra, trigonometry and graphs." },
    { name: "Cambridge IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "A stretch course for strong Maths students, with calculus and functions introduced early." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson's two-paper Mathematics, where method marks are awarded throughout." },
    { name: "Cambridge IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy, electricity and waves, with practice on the alternative-to-practical paper." },
    { name: "Cambridge IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atomic structure, reactions, rates and organic chemistry, with calculations rehearsed little and often." },
    { name: "Cambridge IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, human biology, plants and ecosystems, with diagrams and data questions." },
    { name: "Cambridge IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing, listening and speaking for students whose home language is Kannada, Urdu or Hindi." },
    { name: "Cambridge IGCSE First Language English 0500", levels: "Grade 9-10", description: "Directed writing and composition for fluent English users." },
    { name: "Cambridge IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming logic, data representation, networks and security." },
    { name: "Cambridge IGCSE Economics 0455", levels: "Grade 9-10", description: "An entry to economics with data response and short essays." },
    { name: "Cambridge IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and speaking skills for students who add Hindi to their subject set." },
    { name: "Cambridge IGCSE Urdu as a Second Language 0539", levels: "Grade 9-10", description: "For Urdu-speaking households who want the language recognised in an international certificate." },
  ],

  regionsTitle: "Savanur and the Haveri district towns our tutors serve online",
  regionsIntro:
    "A live lesson works the same from the town centre as from a farmhouse at the edge of the taluk, so what matters is each area's daily pattern. These notes cover school hours, travel habits and the points that decide when a lesson fits.",
  regions: [
    { name: "Savanur town centre", note: "The old core around Majid Castle, where the Taluk Panchayath office now stands. Distances are short in the old core, so a lesson after about 6 pm is easy to hold." },
    { name: "Baobab grove outskirts", note: "The three huge baobabs, locally the Dodda Hunise Mara, stand at the edge of town. Families living out this way may depend on buses or two-wheelers, so a fixed late-afternoon or Sunday slot is easiest to keep." },
    { name: "Satyabodha Tirtha Brindavana area", note: "The annual celebrations fall in Phalguna, in March or April, close to the SSLC and PUC exam run-up. If your household takes part, move lessons aside for that week." },
    { name: "Shiggaon", note: "A neighbouring taluk of Haveri district. Students here tend to look towards Hubballi and Dharwad for coaching, and an online lesson spares them the bus." },
    { name: "Haveri", note: "The district headquarters, nicknamed the Land of Cardamom. District-level offices are based here, and families weigh the same question as in Savanur: stay on the state syllabus or move to a city for an international board." },
    { name: "Byadgi", note: "Nicknamed Asia's red chilli market. In a trading town, households tied to market hours may prefer evening and Sunday lessons." },
    { name: "Hirekerur", note: "A taluk town further south in the district, where Davanagere and Shivamogga are closer reference points than Bengaluru for most families." },
    { name: "Ranebennur", note: "The district's commercial centre and home to a blackbuck sanctuary. Its families have a wider choice of private schools and often compare them with Hubballi." },
    { name: "Hanagal and Rattihalli", note: "Taluks on the district's quieter side, with temple towns and farming villages. Reliable data coverage matters more here than the clock, so we test the connection in the trial lesson." },
    { name: "Hubballi and Dharwad", note: "The nearest large urban centre, where students from across the district go for coaching and college." },
  ],

  schoolDisclaimer:
    "The schools named in the clusters below sit in other cities and are listed only to show where the nearest IB and Cambridge or Edexcel classrooms are. IB Gram has no agreement, partnership or endorsement with any of them, or with the IB, Cambridge or Pearson. Programmes, admissions and fees change, so check each school directly.",
  schoolClusters: [
    {
      city: "Local: Savanur and Haveri district",
      note: "We could not confirm any school in Savanur, or elsewhere in Haveri district, that offers the IB or a Cambridge or Edexcel IGCSE, so we name none. Local schools follow the Karnataka State Board, CBSE or ICSE.",
      schools: [],
    },
    {
      city: "Nearby: Belagavi",
      note: "The closest city to the north-west with a school that appears on our other Karnataka pages for an international board.",
      schools: ["Indus Altum International School, Belagavi"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "About 335 km from Haveri, Bengaluru has the state's widest choice of IB and IGCSE campuses and is where most Savanur families would look first for a day school or a boarding place.",
      schools: ["Inventure Academy", "Indus International School, Bengaluru", "Stonehill International School", "Canadian International School"],
    },
    {
      city: "Nearby: Mysuru",
      note: "A calmer alternative to Bengaluru, with a residential option at Srirangapatna for families who want boarding.",
      schools: ["I Can International School", "De Paul International Residential School, Srirangapatna"],
    },
  ],

  modesIntro:
    "Every lesson for a Savanur student is online and private. What differs is the rhythm a family picks: a steady weekly slot, a longer plan with written reports, or a short burst before papers.",
  modes: [
    {
      title: "Steady weekly lessons",
      description:
        "One tutor, one fixed slot, one subject. The student brings the week's questions, the tutor teaches the next topic and sets short practice for the days in between.",
      bullets: [
        "A tutor matched to subject, level and board",
        "Usually sixty minutes",
        "Working shown on a shared digital whiteboard",
        "Suits IGCSE, MYP and the first year of the Diploma",
      ],
    },
    {
      title: "A term mapped out with written reports",
      description:
        "A topic plan agreed at the start, a short note after every class and a review with the parent every few weeks.",
      bullets: [
        "Notes written so a non-specialist parent can follow them",
        "Reviews that adjust the plan as marks come in",
        "Useful when the child also attends classes at school",
        "Extra sessions added before unit tests",
      ],
    },
    {
      title: "Exam-season intensives",
      description:
        "In the weeks before mocks and the May or November papers, lessons become frequent and consist mainly of timed papers, marking and error analysis.",
      bullets: [
        "Past papers marked against the board's own mark scheme",
        "Two to four sessions a week where timetables allow",
        "Booked away from Ugadi, Dasara and Deepavali weeks",
        "Best started about three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Savanur, and where do families look instead?",
      paragraphs: [
        "We could not confirm an IB or IGCSE school anywhere in Savanur, and we would rather say so plainly than name one that does not exist. Schools in the town teach the Karnataka State Board syllabus, with CBSE and ICSE as the other national options. Families who want an international board look to Bengaluru, Mysuru, Mangaluru or Belagavi, each a long road journey from Haveri district.",
        "Schooling has a long record in Savanur. The last Nawab, Abdul Majid Khan II, is credited with founding schools, dispensaries, courts, roads and irrigation tanks, and the palace linked to his reign, Majid Castle, now houses the Taluk Panchayath office. In Karnataka, Kannada, Urdu and English are all used as media of instruction, and Savanur's households reflect that mix. After Class 10, most students move to a Pre-University college for Class 11 and 12.",
        "An international board enters a Savanur household as a decision about the next school. A parent may be choosing a day school or boarding house in Bengaluru for Class 6 or Class 9, or a Cambridge IGCSE school on the coast at Mangaluru. Another may be planning a transfer for work. The Diploma cannot be taken privately, because the IB examines only students registered through an authorised IB World School, so the school place comes first and the tutoring follows.",
        "IGCSE is more flexible. Cambridge accepts private candidates through a registered exam centre, which in practice means a city rather than the taluk, and entries close months before each session. A student who stays in the local school and adds one or two Cambridge subjects, such as Mathematics or Computer Science, is following a real route, though it needs planning and a tutor who knows the paper. IB and IGCSE tutors in Savanur who work online make that route practical.",
      ],
    },
    {
      heading: "How do the Karnataka SSLC and PUC compare with CBSE, ICSE, IGCSE and IB?",
      paragraphs: [
        "The Karnataka State Board holds SSLC at Class 10 and the second-year PUC examination at Class 12, in March and April, while CBSE and ICSE run national papers in February and March. IGCSE and IB are international programmes examined in May-June and October-November, and they reward explained, applied answers more than recalled ones.",
        "The comparison most useful to a Savanur family is PUC against the Diploma. A PU science student carries a heavy load of content across Physics, Chemistry, Mathematics and Biology. The Diploma asks for fewer topics at a time but more explanation, an internal assessment in each subject and the core of Theory of Knowledge, the Extended Essay and CAS.",
        "At school level, SSLC leans on recall and familiar problem types, whereas MYP and IGCSE reward a student who can show a method and justify a choice. Neither is easier. They are different skills, and a child who has not written long English answers will need a few weeks to adjust.",
        "Destination decides the rest. Karnataka's professional courses run through KCET and NEET, and the KCET rank has traditionally combined the entrance score with qualifying-exam marks, so students from other boards should read the current Karnataka Examinations Authority rules on how their results are treated. An international board changes the paperwork, not the ambition.",
      ],
      table: {
        caption: "Boards a Savanur family may meet, at a glance",
        columns: ["Board", "Where it is taught", "How assessment feels", "Main exam months"],
        rows: [
          ["Karnataka SSLC and PUC", "Schools and PU colleges across Haveri district", "Recall and standard problem types, in Kannada, Urdu or English", "March-April"],
          ["CBSE", "Private schools in some Karnataka towns and cities", "National syllabus, a mix of recall and application", "February-March"],
          ["ICSE / ISC", "A few schools, mostly in larger cities", "Wide, English-rich syllabus", "February-March"],
          ["Cambridge or Edexcel IGCSE", "International schools in Bengaluru, Mysuru, Mangaluru and similar cities", "Applied papers with tiered entry", "May-June, October-November"],
          ["IB Diploma", "Authorised IB World Schools in other cities", "Six subjects, internal assessments and a core", "May, with November in some schools"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Savanur family, and what sets the rate?",
      paragraphs: [
        "There is no price list on this site, because a fair rate depends on the student and not on the town. We quote one in writing after the free trial lesson, and it reflects four things: the course level, how scarce the subject specialist is, the length and frequency of lessons, and whether the plan is steady or an exam-season burst.",
        "Higher Level Physics and Standard Level Business Management call for different depth, and a tutor who has taught a syllabus several times can usually shorten the path to competence. That is why a higher hourly rate can mean fewer hours overall. A younger child on PYP reading support sits at the other end of the scale.",
        "The comparison most families make is with the alternatives. Weekly coaching in Hubballi or Dharwad adds bus fares and a lost evening, and Bengaluru boarding is a larger commitment than any tuition fee. Online lessons carry no travel cost, and they let a family test a subject for a term before committing to a school move.",
        "Take the trial lesson, read the written rate, and decide. There is no contract to sign, and you can pause or change tutor whenever the plan stops working.",
      ],
      bullets: [
        "Course level: IB HL or SL, IGCSE Core, Extended, Foundation or Higher",
        "Subject and the tutor's record with that exact syllabus",
        "Lesson length and number of lessons each week",
        "A steady plan across the year or an intensive before papers",
      ],
    },
    {
      heading: "Online tutor, Hubballi-Dharwad coaching, a local tutor or self-study?",
      paragraphs: [
        "Hubballi and Dharwad have established coaching for KCET, NEET and JEE. For IB and IGCSE, though, batches are few, and a Savanur student travelling there repeatedly gives up hours that a one-to-one online lesson hands back.",
        "Private tutors closer to home are easy to arrange and often skilled at state-board subjects. Fewer have worked with IB command terms or Cambridge mark schemes, so they serve best for general subject support, language practice or a child who needs a confidence boost.",
        "Self-study with past papers is realistic for a disciplined student in IGCSE Maths and the sciences, and costs nothing. It tends to stall on written subjects and internal assessments, where the student needs a reader who knows the criteria and will say candidly where marks were lost.",
        "Online one-to-one lessons offer syllabus-specific teaching and full attention. The cost is reliance on a steady connection, so tutors agree a fallback plan in advance.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Savanur",
        columns: ["Route", "What it gives", "Where it falls short"],
        rows: [
          ["Online one-to-one lessons", "A tutor chosen for the exact syllabus, with written working checked live", "Needs a steady connection and a quiet hour at home"],
          ["Coaching in Hubballi or Dharwad", "Classroom energy and peer company", "Travel time, few IB or IGCSE batches and fixed timetables"],
          ["A local private tutor", "Easy to arrange, often strong on state-board subjects", "Rarely trained on IB command terms or Cambridge mark schemes"],
          ["Self-study with past papers", "Free, flexible, and workable for IGCSE Maths and sciences", "No feedback on written answers or internal assessments"],
        ],
      },
    },
    {
      heading: "How do the monsoon, Ugadi and Dasara shape a Savanur study year?",
      paragraphs: [
        "Savanur sits on the northern Karnataka plateau, about 573 metres above sea level, and the southwest monsoon brings the main rains from June to September, with showers sometimes lasting into October. Storms can interrupt power and mobile data for an evening, so a good lesson plan includes a fallback such as a hotspot or a rescheduled slot.",
        "March and April are the busiest and the most crowded. SSLC and PUC papers fall then, Ugadi marks the new year, and the annual aradhana at the Satyabodha Tirtha Brindavana is held in Phalguna. Students on a state-board timetable should have light lessons in that window, while those preparing for another board follow their own school's calendar.",
        "Ganesh Chaturthi arrives around August or September and Dasara follows, with a school break in Karnataka. Deepavali comes soon after, which is exactly when Cambridge and IB November papers are written. Revision therefore has to be finished before the festival weeks, not squeezed between them. Ramzan and Eid move through the calendar each year and can be planned around once the dates are known.",
        "Summer from March to May is hot, and early evening is the most comfortable hour for focused work. Winter, from December to February, is the calm stretch when long consolidation sessions and mock papers fit best.",
      ],
      table: {
        caption: "A year of study for an IB or IGCSE student in Savanur",
        columns: ["Months", "What is happening", "Planning note"],
        rows: [
          ["January-February", "Makara Sankranti, cool dry weather, SSLC and PUC preparatory tests", "Steady lessons and catch-up on the first half of a course"],
          ["March-April", "SSLC and PUC papers, Ugadi, the Brindavana aradhana, rising heat", "Keep lessons light around exam days and festival week"],
          ["May-June", "IB May session, Cambridge May-June papers, monsoon onset, schools reopen", "Timed papers in the cooler early evening; set monsoon fallbacks"],
          ["July-September", "Main monsoon rains, Ganesh Chaturthi, Dasara break begins", "Hold internal-assessment work steady and use the break to consolidate"],
          ["October-November", "Dasara, Deepavali, Cambridge and IB November sessions", "Finish revision before the festival weeks"],
          ["December", "Cool weather and the year-end school break", "Longer sessions and full mock papers"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Savanur go after school?",
      paragraphs: [
        "Most go on to a university in Karnataka, elsewhere in India or abroad, and the route depends on the subjects chosen in Class 11. The nearest centres are at Dharwad and Hubballi, Bengaluru offers a wider choice, and IB Diploma and IGCSE results are read directly by universities in the UK, Canada, Australia and much of Europe.",
        "Close to home, the Hubballi-Dharwad belt has Karnatak University, the University of Agricultural Sciences at Dharwad, KLE Technological University at Hubballi, and the national institutions IIT Dharwad and IIIT Dharwad. Savanur is farming country, so agriculture, horticulture and food technology are natural fields for some students, and they need Biology or Chemistry in the school subject set.",
        "For Indian degrees, an IB Diploma or an IGCSE-based qualification usually needs an equivalence certificate from the Association of Indian Universities. Central universities admit through CUET-UG. Engineering routes such as JEE Main and KCET look for Physics, Chemistry and Mathematics, and NEET looks for Physics, Chemistry and Biology. Rules change each year, so confirm the current notification before fixing the subject package.",
        "Students aiming abroad often add an admissions test, such as the SAT or UCAT depending on the country, and need predicted grades from their school. A tutor strengthens the subject side of that profile. Personal statements and application essays stay the student's own work.",
      ],
    },
    {
      heading: "Why do IB Mathematics and the sciences feel harder than they look, and what does a tutor change?",
      paragraphs: [
        "IB Mathematics rewards explanation as much as answers. Analysis and Approaches leans on algebraic reasoning, calculus and proof, while Applications and Interpretation asks whether a model fits the data and what a result means in context. Papers are split into calculator and no-calculator sections, and the Exploration, an independent investigation, is worth a fifth of the final grade.",
        "In Physics, marks leak through missing units, unlabelled graph axes and explanations that name a law without applying it. Chemistry demands calculation speed with the data booklet at the student's side, and Biology depends on knowing what each command term, such as describe, explain or evaluate, expects on the page.",
        "Each science also includes an internal investigation worth about a fifth of the grade. Tutors coach on choosing a researchable question, planning a sound method and evaluating the results honestly, and they read drafts to show which criterion is missed. They do not design the experiment or write the report.",
        "A Savanur student coming from the PUC course already has depth in content. The usual gap is on the written side: showing each line of reasoning, interpreting a graph in words and structuring a long answer. A tutor who has met that adjustment before can usually close it within a term.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: which IGCSE tier suits your child?",
      paragraphs: [
        "Cambridge splits most subjects into Core, which caps the grade at C, and Extended, which reaches A*. Edexcel offers Foundation, capped at grade 5, and Higher, which runs to 9. A student who plans to take IB Mathematics at Higher Level or a science Diploma should aim for the upper tier from the start.",
        "The school usually decides the tier. A private candidate, or a family still choosing between schools, can settle it with a diagnostic paper. If the result lands close to the boundary, talk to the school or the exam centre before entering, because a wrong tier is hard to change once entries close.",
        "Subject choice follows direction. Students pointing to engineering or medicine take Mathematics, Physics, Chemistry and Biology or Computer Science. Business-minded students add Economics, Business Studies or Accounting. A language such as Hindi or Urdu, where offered, rounds out the profile and often lifts a total.",
        "Before lessons begin, confirm the board and code. A tutor who prepares a student for Cambridge 0580 when the school sits Edexcel 4MA1 wastes weeks, and that is the commonest early mistake we help families avoid.",
      ],
    },
    {
      heading: "Which languages work for a Savanur student: Kannada, Urdu, Hindi and English?",
      paragraphs: [
        "English is the language of instruction and examination in both IB and IGCSE, but it need not be the student's strongest language. In Savanur, many children think in Kannada or Urdu at home and use English at school. That is a strength for the language courses and a point to manage in written papers.",
        "A child coming from a Kannada-medium or Urdu-medium school may know a topic thoroughly and still lose marks to unfamiliar phrasing in English. Tutors spend early lessons on command words, paragraph structure and the vocabulary of each subject, so that knowledge shows up on the page in full.",
        "For the language subjects themselves, the IB offers Kannada, Hindi and Urdu literature as Language A courses and Hindi as a Language B course, while Cambridge offers Hindi and Urdu as second-language IGCSEs. Availability depends on the school, so ask the school about the language options it can examine before assuming a choice.",
        "Choosing a language is partly strategic. A native-level language course can raise a total with comparatively little added study, while a second language taken seriously builds skills that matter for universities abroad. We help families weigh both.",
      ],
    },
  ],

  tutorsIntro:
    "Our IB and IGCSE tutors in Savanur are matched to students on programme, subject, level and exam board. Each tutor teaches from India in IST and is introduced with a short note explaining why they suit your child's course.",

  process: [
    { title: "Tell us about your child", description: "Class, school or board, subjects and level, the exam session, and the evening hours when your Savanur household is free." },
    { title: "Hear who we suggest and why", description: "We name a tutor and say which courses they have taught that match yours." },
    { title: "Take a free trial lesson", description: "A live lesson online before any fee is discussed, so you can judge the teaching yourself." },
    { title: "Confirm the plan in writing", description: "Weekly hours, the rate and the first topics are set out before you pay anything." },
    { title: "Review and adjust", description: "A written note follows each class, and the tutor is changed if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched to the syllabus code", description: "Tutors are chosen for the exact subject, level and board your child sits." },
    { title: "Straight about Savanur", description: "We say openly that no school in town is confirmed for these boards, so your plan is realistic." },
    { title: "A trial before any commitment", description: "One free lesson gives you first-hand evidence of how the tutor teaches." },
    { title: "Coaching, never ghost-writing", description: "Tutors will not write internal assessments, essays or coursework." },
    { title: "Notes you can read", description: "A short written summary after every class keeps you informed." },
    { title: "A fair way out", description: "If the fit is poor, we find a new tutor without fuss." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Savanur?", answer: "Not one we can confirm. Savanur's schools follow the Karnataka State Board, CBSE or ICSE, and the nearest IB and Cambridge schools we can name are in Bengaluru, Mysuru, Mangaluru and Belagavi. If a school says it offers the Diploma or an IGCSE, ask for its IB authorisation or Cambridge centre number and a list of the subjects it actually teaches." },
    { question: "Can I get IB or IGCSE home tuition in Savanur?", answer: "You can get online home tuition, which is a live private lesson your child takes at home on a laptop, taught by a specialist elsewhere in India. Nobody travels to Savanur. In-person home tuition is offered only in Gurugram and parts of Delhi NCR, and we say so before you book anything." },
    { question: "Do tutors visit homes in Savanur?", answer: "No. Tutors teach from their own desks in India over video, and home visits run only in Gurugram and parts of Delhi NCR. Your child needs a laptop or tablet, headphones, a steady connection and a quiet corner. The tutor sees written work through a shared whiteboard or a phone camera pointed at the page." },
    { question: "Do you have IGCSE tutors for Cambridge and Edexcel students in Savanur?", answer: "Yes, for both boards, and we match IB and IGCSE tutors in Savanur on syllabus code and tier, such as Cambridge 0620 Chemistry Extended or Edexcel 4MA1 Mathematics A Higher. Tell us the board, subject, tier and exam session before we propose anyone, because paper layouts and command words differ between Cambridge and Pearson." },
    { question: "How much does IB or IGCSE tuition cost in Savanur?", answer: "It depends on the course, the tutor's experience with that exact syllabus and the number of lessons a week, so we publish no price list. You receive a written rate after the free trial lesson, which is easy to set beside the cost of regular travel to Hubballi, a coaching fee or a boarding place in Bengaluru." },
    { question: "Is the first lesson really free?", answer: "Yes. Your child joins one live lesson with the tutor we propose, at no charge and with no obligation. Afterwards you decide whether to go on, and the rate and weekly hours are put in writing before any booking is confirmed." },
    { question: "Can a tutor write my child's IA, Extended Essay or TOK essay?", answer: "No. Tutors explain the assessment criteria, help a student choose and narrow a topic, check a plan and comment on a draft, but the research, data, writing and conclusions must be the student's own. We decline requests to produce assessed work, because it puts the result at risk and breaks IB and Cambridge rules." },
    { question: "Which IB Diploma subjects can you cover for Savanur students?", answer: "Maths Analysis and Approaches, Maths Applications and Interpretation, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, ESS, Geography and language courses such as Kannada A and Hindi B are regular requests, at Higher or Standard Level. For an unusual mix, ask first and we will say honestly whether we can staff it." },
    { question: "Do you teach IB MYP and PYP to children in Savanur?", answer: "Yes. PYP lessons are short and conversational, built around reading, writing and number sense. MYP lessons cover criterion-based writing, science investigations, Maths in context and the Class 10 Personal Project, and parents receive a note after each session." },
    { question: "My child studies in a Karnataka State Board school. Can we move to IGCSE or IB?", answer: "A move needs a school place, because tutoring cannot enrol a child in an IB or Cambridge school. What a tutor can do is prepare the ground: longer English writing, explained working in Maths and science, and the habit of answering from a command word. Starting a term or two before the switch usually makes the first months easier." },
    { question: "Can my child take IGCSE papers from Savanur as a private candidate?", answer: "Cambridge accepts private candidates through a registered exam centre, but these are mostly in larger cities and entries close months before each session. Ask a centre which syllabuses it can host, then tell us the codes. We tutor towards the paper itself, and we can explain what each tier means for your child." },
    { question: "Will an IB or IGCSE result work for Karnataka colleges, KCET and NEET?", answer: "Often yes, but the conditions differ by course, so check them early. Indian universities usually ask for an Association of Indian Universities equivalence certificate, KCET and NEET have their own rules on subjects and board equivalence, and central universities admit through CUET-UG. Confirm the current notification for your admission year." },
    { question: "What happens if the power or the connection drops during a lesson?", answer: "We plan for it. At the start, tutor and family agree a fallback: move to a phone hotspot, carry on by voice with photographs of the working, or shift the session to a nearby slot. Monsoon storms and local power cuts are the usual causes, and a charged laptop plus a phone with data covers most interruptions." },
    { question: "Are lessons in English, or can my child get help in Kannada, Urdu or Hindi?", answer: "Lessons are taught in English, which is also the language of IB and IGCSE papers. Language courses such as Hindi B are taught in the target language. For a child who thinks in Kannada or Urdu, tutors give extra time to command words and sentence structure, so knowledge shows up fully in the answers." },
    { question: "When is the right time to start?", answer: "At the start of a course if you can: Class 6 for MYP, Class 9 for IGCSE and Class 11 for the Diploma. A student heading to a new school can start a term earlier and work on English and Maths. Exam candidates gain from three or four weeks of intensive paper practice before May or November." },
    { question: "What if my child does not get on with the tutor?", answer: "Tell us and we will arrange a different tutor, with no penalty and no need for a long explanation. We check in after the first few lessons because small mismatches are easiest to fix early, and the written plan helps you see whether lessons are doing what was promised." },
    { question: "Is IB Gram linked to any school or exam board?", answer: "No. IB Gram is an independent tutoring service with no tie to the IB, Cambridge, Pearson or any school in Savanur, Bengaluru or elsewhere. School names on this page appear only to show where the nearest classrooms for these boards are." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The same online model in cities and towns nationwide." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where in-person visits are offered." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "Programmes, subjects and how matching works." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel boards explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects, the core and how grades add up." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, projects and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry learning for younger children." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "How CP pairs Diploma courses with career study." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor backgrounds and subjects." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write or message to begin." },
    { label: "IB and IGCSE tutoring in Hubli-Dharwad", href: "/hubli-dharwad/", description: "The nearest big city pair to Savanur." },
    { label: "IB and IGCSE tutoring in Bengaluru", href: "/bengaluru/", description: "Where the state's IB and IGCSE schools are concentrated." },
    { label: "IB and IGCSE tutoring in Davanagere", href: "/davanagere/", description: "A central Karnataka city using the same online model." },
  ],

  closingHeading: "Book a free trial lesson for your Savanur student",
  closingBody:
    "Send the programme or board, subject, level and the evenings that suit your household, and we will line up IB and IGCSE tutors in Savanur who fit. We will propose one tutor, explain the choice and arrange a free online trial lesson. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
