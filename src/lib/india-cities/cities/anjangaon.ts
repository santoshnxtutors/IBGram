import type { CitySeoPage } from "../types";

/**
 * Anjangaon (Anjangaon Surji, Amravati district, Maharashtra). No IB or Cambridge/Edexcel school could be
 * confirmed in the town, so stripSchools is empty. School clusters reuse the Amravati and Nagpur names
 * already verified on those pages, labelled as nearby. Online only; no home visits.
 */
export const anjangaon: CitySeoPage = {
  slug: "anjangaon",
  countryName: "Anjangaon",
  countryNameLong: "Anjangaon, Maharashtra",
  demonym: "Anjangaon",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening hours that steer clear of banana-harvest dispatch days, Diwali week and the hottest weeks of May",
  lastUpdated: "2026-09-21",

  title: "IB & IGCSE Tutors in Anjangaon | Live Online Home Tuition",
  metaDescription:
    "IB and IGCSE tuition for Anjangaon Surji students in Amravati district, taught live and one to one online from home by syllabus specialists. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Anjangaon",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION FOR ANJANGAON",
  heroSubtitle:
    "Anjangaon, widely written as Anjangaon Surji, is a banana-trading town in northern Amravati district with its nearest international-syllabus classrooms a long road away in Amravati and Nagpur. Private tuition at home here means a live video lesson with a single specialist, so IB or IGCSE learning happens at your own table and not on a highway. The first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Anjangaon",
  imageAltText: "An Anjangaon student and an online tutor going through an IB Economics diagram on a shared screen during a home evening lesson",
  secondaryKeywords: [
    "IB tutor Anjangaon",
    "IGCSE tutor Anjangaon",
    "IB home tuition Anjangaon",
    "IGCSE home tuition Anjangaon",
    "IB private tuition Anjangaon",
    "IB Maths tutor Anjangaon",
    "IGCSE Maths tutor Anjangaon",
    "IB Physics tutor Anjangaon",
    "IB Chemistry tutor Anjangaon",
    "IB Biology tutor Anjangaon",
    "IB DP tutor Anjangaon",
    "IB MYP tutor Anjangaon",
    "IB PYP tutor Anjangaon",
    "IGCSE online tuition Anjangaon",
    "online IB tutor Anjangaon Surji",
    "IB tutor Anjangaon Surji Amravati",
    "IGCSE tutor Anjangaon Surji",
    "IB tutor Daryapur",
    "IGCSE tutor Murtizapur",
    "IB tutor Achalpur Paratwada",
    "Cambridge IGCSE tutor Anjangaon Maharashtra",
  ],

  heroTrustPoints: [
    "Tutors are picked for your child's exact IB course and level or Cambridge and Edexcel syllabus code",
    "Live one-to-one lessons taken at home in Anjangaon, with no visitor arriving at the house",
    "A free first lesson, a written note after each class and a new tutor if the match is wrong",
    "No ties to any school, board or examining body",
  ],
  heroStats: [
    { value: "IST", label: "Indian-time lessons" },
    { value: "PYP to DP", label: "IB coverage" },
    { value: "Core + Extended", label: "IGCSE tiers" },
    { value: "Free trial", label: "Before any plan" },
  ],

  intro: {
    heading: "IB and IGCSE home tuition in Anjangaon, delivered over video",
    paragraphs: [
      "For a family in Anjangaon, the trouble with an international syllabus is not the ability of the child. It is the address. The nearest places that teach the IB or Cambridge IGCSE are in Amravati and Nagpur, which means a hostel, a relocation or a very long daily drive. Online one-to-one tuition removes that barrier for the subject side of the work. A student opens a laptop at home, a tutor who has taught the same course appears on screen, and the session runs as a private class: worked examples, a shared page and marked practice afterwards.",
      "Anjangaon sits on the Shahanur river and is known across Maharashtra as a centre of the banana trade, with trucks leaving for distant markets and a business class that thinks outward. It is also remembered in history books for the 1803 Treaty of Surji-Anjangaon. Schooling in the town follows the Maharashtra State Board or CBSE, and we could not confirm any IB or Cambridge school here. That is the gap a remote specialist fills.",
      "A straight statement about format: IB Gram does not send tutors to Anjangaon addresses. Only Gurugram and parts of Delhi NCR have in-person home tuition. Here, teaching is online and live, which for examination preparation works as well as a teacher in the room and gives access to people the district could not offer.",
      "We are a private tutoring service and nobody else's agent. Nothing ties us to the IB organisation, to Cambridge, to Pearson Edexcel or to the schools mentioned below. What tutors do: teach, ask questions, mark practice. What they never do: produce a student's Internal Assessment, Extended Essay, TOK essay or coursework.",
    ],
    bullets: [
      "Teachers for PYP, MYP and Diploma courses",
      "Cambridge and Pearson Edexcel IGCSE at both tiers",
      "Online only in Anjangaon, with visits confined to Gurugram and parts of Delhi NCR",
      "A free trial, then the rate set out in writing",
    ],
  },

  programmesIntro:
    "Getting onto an IB programme from Anjangaon rarely happens in one step. It may follow a hostel year in Amravati or Nagpur, a parent's transfer, a return from overseas or a move after Class 8. Below, each stage is described from where an Anjangaon family stands.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Children explore units of inquiry instead of isolated chapters, and in the last year present a self-chosen Exhibition. Tuition is mostly about fluent reading, comfort with numbers and learning to put a question in words.",
      countryNote:
        "A child who speaks Marathi at home may need gentle, frequent English conversation before the classroom discussion in a PYP school feels natural.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers mark against stated criteria, and MYP 5 students complete a Personal Project. The real step up is from recalling information to analysing it and defending a judgement.",
      countryNote:
        "For a student raised on the Balbharati textbooks, it helps to rehearse writing a method in numbered steps and then explaining why each step makes sense.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Diploma means six subjects (three Higher Level, three Standard Level) plus TOK, the Extended Essay and CAS. Coursework counts in most subjects, and papers are sat each May and November.",
      countryNote:
        "Families in trading towns like Anjangaon often push for Economics and Business Management beside Mathematics, with an eye on management degrees in India or overseas.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Diploma courses are paired with a career-related strand, a reflective project and skills work. Smaller Maharashtra towns have almost no CP, so tutors usually support the academic courses inside it.",
      countryNote:
        "If an Anjangaon student takes a CP at a school far away, tutors can help with the DP subjects and with building a reflective project on a subject from home, such as how banana supply chains work.",
    },
  ],

  subjectsIntro:
    "In Anjangaon we match on course and level, not just the IB label. A tutor who is comfortable with Economics SL may not be right for Economics HL, and Maths AA HL and Maths AI SL ask for very different teaching. Syllabus fit comes first. Then we look for a late-afternoon or evening hour that survives the school timetable and any classes already in the week.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof, with extended problems at Higher Level for future engineers." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data, statistics and modelling with calculator skill, for business and life-science routes." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics, including uncertainty in the practical." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, energetics, equilibrium and organic chemistry, with efficient use of the data booklet." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology, with practice in describing experimental design." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram-based micro and macro, trade and development, with commentaries on real events." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study writing and the finance and operations calculations examiners set." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Agriculture, water and land-use cases that connect to a banana and cotton district." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading and comparison for students who think first in Marathi." },
    { name: "IB Marathi", levels: "HL / SL", description: "Language A literature or Language B acquisition in the student's own language." },
    { name: "IB Hindi", levels: "SL", description: "Language B acquisition for students adding a second Indian language." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming and the documented solution for the internal assessment." },
    { name: "IB Geography", levels: "HL / SL", description: "Resources, development and a fieldwork method that holds up under the marking criteria." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and essay planning, plus a compact internal investigation." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Examining how we know, and keeping the exhibition's argument coherent." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Picking a question, handling sources, working with a supervisor. We advise; the essay is the student's own." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Investigation criteria and the algebra that feeds later DP Mathematics." },
  ],

  igcseSubjectsIntro:
    "Two things define an IGCSE plan: the syllabus number and the tier. Mathematics 0580 Extended is one job, Additional Mathematics 0606 another, and Chemistry 0620 is unlike Co-ordinated Sciences 0654. Whether the student heads to the IB Diploma or to A Levels is worth settling early, because it sets how much maths and science depth to build now.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, geometry, statistics and non-calculator accuracy under timed conditions." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and trigonometry that lead into IB Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy, electricity and waves, with the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Stoichiometry, rates, electrolysis and planning of qualitative tests." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Human physiology, plants, inheritance and data-handling questions." },
    { name: "IGCSE Co-ordinated Sciences", levels: "0654", description: "A double award that spans all three sciences." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative and summary, with attention to tone." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, listening and speaking for Marathi-first learners." },
    { name: "IGCSE Marathi and Hindi as a Second Language", levels: "Grade 9-10", description: "Writing and speaking tasks in languages used at home, often a reliable grade." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, graphs and short evaluation." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case studies, accounts basics and structured answers." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, networks, logic and programming." },
  ],

  regionsTitle: "Anjangaon and the surrounding towns our online tutors teach",
  regionsIntro:
    "Where a student lives in the area makes no difference to the tutors on offer, so Daryapur and Anjangaon's main market draw on one pool. Daily routine is what differs. Buses to Achalpur or Amravati, tuition in town, harvest-season errands: the lesson follows the real week. Heat and storm power cuts get discussed before the first session.",
  regions: [
    { name: "Anjangaon main market", note: "The heart of the banana and trading economy, where merchant families often plan overseas study for their children." },
    { name: "Anjangaon bus stand area", note: "The transport hub for routes to Amravati, Akola and Achalpur, used by students who travel for senior classes." },
    { name: "Shahanur river side", note: "A quieter belt of homes near the river, where families notice monsoon water levels and plan study time with them in mind." },
    { name: "Railway station area", note: "Near the narrow-gauge line linked to the Achalpur to Murtizapur route, with long-standing railway-employee families." },
    { name: "Achalpur and Paratwada", note: "The twin town to the south with a wider school choice, so some students study there and some families compare options." },
    { name: "Daryapur", note: "A neighbouring taluka town, with agricultural households and students who look to Amravati for senior schooling." },
    { name: "Murtizapur", note: "A rail junction town on the broad-gauge line, useful for families who need trains to Akola or Nagpur." },
    { name: "Bhatkuli side", note: "A rural belt towards Amravati where broadband varies and a hotspot backup is worth testing early." },
    { name: "Dhamangaon Gadhi and the Melghat fringe", note: "Near the hill country, where students have long travel times and online study removes a real barrier." },
  ],

  schoolDisclaimer:
    "Independent tutors, not a school's partner. Schools are listed only so families can see where IB and IGCSE teaching exists at a distance from Anjangaon. None asked to appear or recommended us, and we have no link with the IB body, Cambridge or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Anjangaon and northern Amravati district",
      note: "No IB or Cambridge IGCSE school in Anjangaon could be verified, so none is named. Local choice is limited, and these syllabuses generally mean a school in another city.",
      schools: [],
    },
    {
      city: "Nearby: Amravati",
      note: "Amravati, a long drive south, has the closest confirmed Cambridge IGCSE school, which also takes boarders from the surrounding talukas.",
      schools: ["KK Cambridge International School, Indala"],
    },
    {
      city: "Nearby: Nagpur, MIHAN and Wardha Road",
      note: "Nagpur has the broadest choice in Vidarbha and is reachable by rail from Murtizapur and Amravati, with hostels for older students.",
      schools: ["D Y Patil International School, MIHAN"],
    },
    {
      city: "Nearby: Nagpur, central and Wanadongri",
      note: "More Nagpur schools that teach international syllabuses, suited to families that can manage a hostel or a move for Class 9 to 12.",
      schools: ["Centre Point School International", "VIBGYOR World Academy", "International School of Scholars"],
    },
  ],

  modesIntro:
    "Nobody from our team knocks on doors in Anjangaon: in-person home tuition is offered in Gurugram and parts of Delhi NCR and nowhere else. An Anjangaon lesson is live and private on video, from the student's own desk, in one of three formats picked to suit the subject and the weight of the term.",
  modes: [
    {
      title: "Regular weekly lesson",
      description:
        "One live hour each week at the same time with the same tutor, closed with a written summary. Works best for subjects that build step by step.",
      bullets: [
        "The same tutor every time",
        "Solutions written out on a shared page",
        "A recap note after each class",
        "No bus fare or fuel",
      ],
    },
    {
      title: "Mock and deadline intensives",
      description:
        "More sessions in the run-up to school mocks, coursework dates and the main sittings, with timed questions and comments in the way an examiner would write them.",
      bullets: [
        "Past papers sorted by topic",
        "Extra sessions only where marks are lost",
        "Useful before predicted-grade dates",
        "Reduced once the papers are done",
      ],
    },
    {
      title: "Brief live class plus marked practice",
      description:
        "A shorter live session weekly, with practice sets that the tutor marks between meetings. Fits students who have long days and little spare evening time.",
      bullets: [
        "One live session a week",
        "Comments on practice done alone",
        "Keeps going in the holidays",
        "Can become two lessons weekly",
      ],
    },
  ],

  sections: [
    {
      heading: "Who studies IB and IGCSE around Anjangaon, and where are the nearest classrooms?",
      paragraphs: [
        "Anjangaon was the first municipal council in Amravati district, and it has grown as a market town on the strength of bananas, cotton and small industry. Its schools follow the Maharashtra State Board or CBSE, and there is no IB or Cambridge school we can verify within the town. The school names on this page therefore appear as nearby options, not local ones.",
        "The households asking about international syllabuses are a small but distinct group. Merchant families think about degrees in management or commerce abroad. Officers of banks, railways and the revenue service expect transfers and want a course that moves with them. Some households have come home from the Gulf, the UK or a metro and have a child halfway through an IB or Cambridge programme.",
        "For each of them, the puzzle is how to follow a syllabus that is taught elsewhere. A few send a child to a hostel in Amravati or Nagpur from Class 9. Others keep a local school for daily life and arrange specialist help on video so that the international route stays available. A growing number are simply catching up after a change of school.",
        "A remote tutor is especially helpful for a child moving from a Marathi-medium class into an English-medium international one. Scientific terms and the habit of writing to a mark scheme are unfamiliar at first, and focused one-to-one sessions close those gaps faster than general classroom support.",
      ],
      bullets: [
        "No IB or Cambridge school in Anjangaon could be verified",
        "Amravati and Nagpur hold the nearest confirmed campuses",
        "Trading, transfer and returning families drive demand",
        "Online tutors provide the missing subject depth",
      ],
    },
    {
      heading: "Maharashtra State Board, CBSE, IB or IGCSE: what actually changes for an Anjangaon student?",
      paragraphs: [
        "Maharashtra's SSC and HSC examinations, run by the Amravati divisional board here, rely on Balbharati textbooks and predictable question types. Many students also prepare for MHT-CET, JEE or NEET, which rewards speed and repetition. IB and IGCSE papers often open with a scenario the student has not seen and ask for analysis in words.",
        "CBSE sits nearer the international style, since NCERT books explain concepts carefully and recent papers add case-based items. That is why a CBSE student often settles into IGCSE sciences a little sooner. For every board, command words matter. Describe, explain, evaluate and justify each ask for a different structure.",
        "Coursework is the other difference. The IB Diploma weighs internal assessments in most subjects alongside the final exam. The state board puts almost all the weight on the written paper, and IGCSE is mainly examined at the end of the course.",
        "The table lines up the points that Anjangaon parents raise most often.",
      ],
      table: {
        caption: "Maharashtra State Board, CBSE and IB / IGCSE for Anjangaon families",
        columns: ["Point", "Maharashtra State Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Medium", "Marathi, Hindi or English", "Mostly English", "English, with Marathi and Hindi as language subjects"],
          ["Style of question", "Textbook recall and standard problems", "Recall mixed with application", "New contexts needing analysis and judgement"],
          ["Coursework weight", "Small practical marks", "Internal marks and projects", "Heavy in IB, light in IGCSE"],
          ["Route after school", "MHT-CET, JEE, NEET", "JEE, NEET, CUET-UG", "CUET-UG, overseas study, and JEE or NEET after eligibility checks"],
          ["Closest school offering it", "In Anjangaon", "Anjangaon and Amravati", "Amravati or Nagpur; none confirmed locally"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Anjangaon, and why do quotes vary?",
      paragraphs: [
        "Rates move with four things: the tutor's track record on your exact course, the level taught, weekly hours and session length. A specialist who has guided many students through IB Physics HL will normally charge more than a tutor helping with MYP language work, and two hours a week costs more than one. You receive a written quote before the free trial, and we keep no public price list.",
        "Online teaching leaves out some costs a local arrangement would add. A family in Anjangaon avoids diesel for the drive to Amravati, avoids paying a city premium and saves the hours a student would spend on a state transport bus. For a pupil already in school all day, those hours are often worth more than the saving in rupees.",
        "Think about what the money buys. One hour on the anatomy of a top-band Economics evaluation usually beats several hours rereading. Ask any tutor to describe month one, the way progress will be measured and the date of the first review.",
        "Plans can bend. A family may take a break for Diwali or a wedding fortnight, resume afterwards and change tutor with no fresh setup.",
      ],
      bullets: [
        "Rate follows experience, subject, level and weekly hours",
        "No travel cost and no travel time",
        "A written rate before the trial lesson",
        "Pause, resume or switch freely",
      ],
    },
    {
      heading: "Online tutor, Amravati or Akola classes, a local teacher or self-study: how do they compare?",
      paragraphs: [
        "Amravati, Akola and Nagpur are full of classes, mostly for JEE, NEET, CET and board marks. Enrol an IB or IGCSE student and they sit among pupils of another syllabus, at set hours, after a long bus ride from Anjangaon. Calculus help, yes; built for these qualifications, no.",
        "Private teachers in town give personal attention, yet almost none has taught IB Diploma or Cambridge Extended papers. A senior who is very self-driven can work from past papers alone, but nobody tells them whether their answers would score.",
        "Online tuition offers personal attention and subject knowledge together. What it needs: dependable internet, camera and microphone, and a student who shows up with one clear question. A hotspot and a charged laptop handle most outages.",
        "The table compares the four options against what matters for these courses.",
      ],
      table: {
        caption: "Support options for IB or IGCSE students in Anjangaon",
        columns: ["Option", "Knows IB and IGCSE papers", "Attention", "Practical points"],
        rows: [
          ["Online one-to-one tutor", "Yes, matched to course and level", "Undivided", "Needs steady internet; no journey"],
          ["Classes in Amravati or Akola", "Rarely, focus is entrance exams", "Shared with a batch", "Long bus ride, fixed hours"],
          ["Local private teacher", "Varies, few have taught these boards", "High", "Small pool in Anjangaon"],
          ["Self-study", "Only what the student finds", "None unless reviewed", "Cheap, weak on feedback"],
        ],
      },
    },
    {
      heading: "The Anjangaon year: summer heat, banana season, Diwali and exam series",
      paragraphs: [
        "Northern Amravati is hot. April to early June regularly brings afternoon temperatures that make study difficult, and load-shedding adds to the strain. The monsoon arrives in June, the Shahanur and its streams fill, and the cooler months from November to February are the most comfortable time for long revision blocks.",
        "The banana trade has its own rhythm. Harvest and dispatch follow the crop, and a merchant household can be extremely busy on loading days. Festivals add to the calendar: Gudi Padwa in spring, Ganeshotsav, Navratri, Dussehra and Diwali in autumn, and Makar Sankranti in January. The IB November series and Cambridge's October-November series fall in the thick of Dussehra and Diwali.",
        "Put heavy papers in winter, keep summer light, treat festival weeks as closed. The table is a rough guide; your school or exam centre sets the real dates.",
      ],
      table: {
        caption: "An Anjangaon year for an IB or IGCSE student",
        columns: ["Months", "What is going on", "Study focus"],
        rows: [
          ["March to June", "Board exams, new session, peak heat, May series", "Finish exams, then a light summer routine"],
          ["July to September", "Monsoon, Ganeshotsav, long teaching terms", "New topics and first coursework drafts"],
          ["October to November", "Navratri, Dussehra, Diwali, November series", "Targeted past papers before festivals"],
          ["December to February", "Cool weather, Sankranti, mocks, applications", "Long revision blocks and mock papers"],
        ],
      },
    },
    {
      heading: "Where can an Anjangaon IB or IGCSE student go after school?",
      paragraphs: [
        "Admissions offices in the UK, US, Canada, Australia, Singapore and Europe take IB Diploma results, while the Association of Indian Universities places the Diploma level with Class 12. One result set works in both directions, provided each programme's prerequisites are met.",
        "Sant Gadge Baba Amravati University is the regional university, and Nagpur adds VNIT, AIIMS, IIM and the National Law University. Pune and Mumbai attract students to COEP, Fergusson and the IITs. Central universities take IB and IGCSE-route applicants through CUET-UG. JEE and NEET are different: eligibility for IB students turns on the subjects taken and on each year's rules, so read the bulletin first.",
        "Anyone aiming overseas should begin real planning in Class 11. Offers look at predicted grades, a personal statement and, for some courses, tests or interviews. The tutor handles the subject content; the family deals with applications through the school or an adviser.",
        "Once IGCSE is done, the choices are A Levels, the IB Diploma, or Class 11 in an Indian board at a school willing to take transfers. A Level grades carry roughly the weight of IB scores with overseas admissions staff.",
      ],
      bullets: [
        "AIU recognition puts the Diploma level with Class 12",
        "Amravati University and Nagpur's institutions are the nearest",
        "CUET-UG is open to IB-route applicants",
        "JEE and NEET eligibility needs checking each year",
      ],
    },
    {
      heading: "IB Maths AA or AI and the sciences: what to expect as a Class 11 student from a trading town",
      paragraphs: [
        "IB Mathematics splits in two. Analysis and Approaches: for students who enjoy algebra, calculus and proof, the standard pick for engineering and computing. Applications and Interpretation: data, modelling and technology, a fit for business, psychology and biology. Boys and girls expecting to join a family business sometimes undervalue AI, yet its statistics and finance-style modelling suit commerce degrees well.",
        "Physics HL is built on the calculus of Maths AA, so pairing it with AI is unwise. Chemistry HL adds organic routes, rates and equilibrium. Biology HL pays for careful reading of data and exact description of a method. Someone quick at state-board numericals may struggle more with written justification than with the sums.",
        "Each science has an internal investigation where the student asks a question, designs the method, collects data and weighs the outcome. The tutor decodes the criteria, probes a weak plan and checks understanding. Question, data and prose stay with the student. Short of lab hours? Simulations and school-approved datasets can help.",
        "Early starts pay off. Class 11's first term sets the pattern for two years, and tuition that begins then seldom turns into a rescue operation at predicted-grade time.",
      ],
      bullets: [
        "AA means calculus and proof; AI means data and modelling",
        "Physics HL pairs best with Maths AA",
        "Coursework is coached but never written by tutors",
        "Begin early in Class 11 for cumulative subjects",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should an Anjangaon student decide?",
      paragraphs: [
        "Every IGCSE subject is entered at Core or Extended. Core ends at grade C, Extended goes up to A*. Plan for Extended if A Levels or IB sciences are next. Core can make sense after a dent to confidence, when a safe pass matters most, though changing tier after entries close is difficult.",
        "Which subjects go together is the second question. Future engineers and doctors gain from three separate sciences rather than a combined award. Additional Mathematics 0606 eases the path to IB Maths AA and A Level Mathematics, and Marathi or Hindi as a second language often earns a steady grade from students who speak it daily.",
        "Practical skills turn up either as a written paper or a practical session, according to the syllabus. A school with a modest lab still expects the student to plan, tabulate and evaluate, so tutors rely on recorded demonstrations and data sets.",
        "Private candidates need a Cambridge-registered centre that takes outside entries, probably in Nagpur or Pune, and must register months ahead. Revision can be timed around those dates; reserving the seat is the family's task.",
      ],
      bullets: [
        "Extended tier for A Level and IB science routes",
        "Three separate sciences for engineering and medicine goals",
        "Marathi and Hindi papers often reward home fluency",
        "Private entry needs a centre and early registration",
      ],
    },
  ],

  tutorsIntro:
    "Tutors here cover IB PYP, MYP and DP subjects and Cambridge and Edexcel IGCSE for Anjangaon students. The syllabus, level and exam series come first, then an hour that suits the child's day. All lessons are online.",

  process: [
    { title: "Write to us", description: "Say which programme or board, subject, level and recent grades, and which evenings are free in Anjangaon." },
    { title: "Look at who we suggest", description: "A short list of tutors arrives, each with a reason they were picked." },
    { title: "Try a free lesson", description: "Your child works on a real topic on video, with no cost and no commitment." },
    { title: "Agree the first month", description: "The tutor explains what will be covered, the weekly rhythm and how you will hear about progress." },
    { title: "Hold a regular slot", description: "One set hour weekly, shifted for exams, festivals and heat waves." },
  ],

  whyPoints: [
    { title: "Syllabus first", description: "The tutor has taught the very course your child follows." },
    { title: "Clear about online delivery", description: "Anjangaon families are told from the start that lessons are on video and no tutor visits." },
    { title: "Judge before paying", description: "A free lesson on a genuine topic shows more than any profile." },
    { title: "Fair on coursework", description: "Guidance on coursework, never ghost-writing." },
    { title: "Written notes", description: "A short summary follows each class, with a longer review every few weeks." },
    { title: "Easy to leave", description: "Pause, change tutor or stop whenever you need to." },
  ],

  faqs: [
    {
      question: "Is IB or IGCSE home tuition possible in Anjangaon?",
      answer:
        "Yes, but online only. Nobody from IB Gram visits Anjangaon houses, and in-person tuition exists just in Gurugram and parts of Delhi NCR. The child sits a live private lesson at home with a laptop, the tutor on video and a shared page for working, which is what most parents picture when they say home tuition.",
    },
    {
      question: "How can I find an IB tutor from Anjangaon?",
      answer:
        "Give the programme, subject, level and school. We reply with tutors experienced in that course. Specialists are scarce in northern Amravati district, so they teach from elsewhere in India by video. A free lesson precedes any weekly slot or written rate.",
    },
    {
      question: "Does Anjangaon have an IB or Cambridge school?",
      answer:
        "Not one we could verify, so the town gets no school name. Nearest confirmed: KK Cambridge International School in Amravati and several Nagpur campuses. Families here tend to stay with a state board or CBSE school and add online tutoring for depth.",
    },
    {
      question: "What is the cost of IB or IGCSE tuition in Anjangaon?",
      answer:
        "Subject, level, weekly hours and tutor experience set the figure, which you receive in writing before the trial. No fixed list exists: IB Economics HL and MYP Marathi differ too much. With no travel cost, the fee pays for teaching.",
    },
    {
      question: "Can a state board student move to IGCSE?",
      answer:
        "Certainly. Class 8 or 9 is the gentlest point for the switch. Balbharati material overlaps a good deal. Left to fix: English written for a mark scheme, command words, and showing how a result was reached. A few months of weekly one-to-one lessons normally handle it.",
    },
    {
      question: "Which IB subjects do students from trading families ask for?",
      answer:
        "Economics, Business Management and Mathematics are requested most, alongside Physics and Chemistry for engineering plans. Students from Marathi-medium schools often need English writing support. Tutors can also teach Marathi as a language subject, where fluency at home helps the grade.",
    },
    {
      question: "Will a tutor write the Internal Assessment or Extended Essay?",
      answer:
        "Never. Rules forbid it and our tutors follow them. Expect explanations of criteria, help settling on a question, feedback on drafts and method teaching. Data, ideas and sentences belong to the student, since authenticity checks can put a whole qualification at risk.",
    },
    {
      question: "What happens in the trial lesson?",
      answer:
        "The child picks a topic and works on it live with the suggested tutor, free and without obligation. A brief note follows, covering what happened and what comes next. A poor fit means we suggest another tutor before anything is arranged.",
    },
    {
      question: "What device and internet do we need?",
      answer:
        "Bring a laptop or tablet with camera and microphone, and internet that can manage video. For summer power cuts and monsoon storms, have a hotspot and a full battery. Stylus tablets suit maths and science; plain paper shown to the camera does too.",
    },
    {
      question: "Can my child take IGCSE privately from Anjangaon?",
      answer:
        "Possible, using a Cambridge-registered centre that accepts private entries, likely Nagpur or Pune. Sign-up closes months before each series and written papers replace practicals. Revision can follow the centre's calendar; the family locates and books the centre.",
    },
    {
      question: "Is the IB valid for admission in India?",
      answer:
        "It is valid. The Association of Indian Universities ranks the Diploma with Class 12, and IB graduates enter CUET-UG alongside everyone else. Some programmes name required subjects, and JEE or NEET eligibility follows the subjects taken and current rules, so check every year's bulletin.",
    },
    {
      question: "My child travels to Achalpur or Amravati for school. Will lessons fit?",
      answer:
        "Most often yes; online study saves a second trip. We pick an hour once your child is home and fed, frequently early evening or Sunday morning, and hold it steady. A shorter class plus marked practice eases very full days.",
    },
    {
      question: "When should IB Diploma tuition start?",
      answer:
        "Class 11, first term, is the ideal start, above all for Mathematics, Physics and Chemistry. Two years of content pile up and coursework starts early. Waiting until Class 12 leaves few chances at timed papers before predicted grades reach universities.",
    },
    {
      question: "What if a power cut or storm interrupts a lesson?",
      answer:
        "We move the lesson. Load-shedding and pre-monsoon storms happen in this part of Vidarbha, so a fallback is fixed in advance: hotspot, charged laptop, make-up hour. A lesson lost like this is never billed again, and spare weeks are kept before the November series.",
    },
    {
      question: "How do I begin from Anjangaon?",
      answer:
        "Send your board, subject, level, current grade and free evenings by WhatsApp to +91 7439 368 115 or by mail to support@ibgram.com. A shortlisted tutor, trial time and written rate follow. You pay nothing until a lesson has been seen and you choose to carry on.",
    },
  ],

  internalLinks: [
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE overview", href: "/igcse/", description: "Cambridge and Edexcel subjects, tiers and exam sessions." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, board and experience." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the core and internal assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project for parents." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition for younger learners." },
    { label: "IB Maths guide", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI, and preparing for each." },
    { label: "Admissions and test prep", href: "/admissions/test-prep/", description: "Support around CUET, JEE, NEET and overseas applications." },
    { label: "IB and IGCSE tutoring in Amravati", href: "/amravati/", description: "The nearest city with a confirmed Cambridge school." },
    { label: "IB and IGCSE tutoring in Achalpur", href: "/achalpur/", description: "Matching for families in the twin town next door." },
    { label: "IB and IGCSE tutoring in Akola", href: "/akola/", description: "Online matching for the neighbouring district." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and book a free trial lesson." },
  ],

  closingHeading: "Begin with a free IB or IGCSE trial lesson in Anjangaon",
  closingBody:
    "Tell us the programme or board, subject, level, current school and genuinely free hours. Back comes a tutor with experience of the course, a trial slot on video and a written rate; no payment arises before the first lesson. Reach us at support@ibgram.com or on WhatsApp, +91 7439 368 115.",

  geo: { latitude: 21.15, longitude: 77.28 },
  alternateNames: ["Anjangaon Surji", "Anjangaon Surji Amravati"],
  wikipedia: "https://en.wikipedia.org/wiki/Anjangaon",
  stripSchools: [],
};
