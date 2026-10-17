import type { CitySeoPage } from "../types";

/**
 * /venkatagiri/ - IB and IGCSE tutoring page for Venkatagiri, Tirupati district, Andhra Pradesh. No school in
 * Venkatagiri is confirmed to teach IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and clusters reuse Tirupati
 * and Chennai names from neighbouring pages. All lessons online.
 */
export const venkatagiri: CitySeoPage = {
  slug: "venkatagiri",
  countryName: "Venkatagiri",
  countryNameLong: "Venkatagiri, Andhra Pradesh",
  demonym: "Venkatagiri",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  flagCode: "in",
  countryCode: "IN",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and Sunday slots that keep clear of the pre-monsoon heat, Ugadi and Sankranti weeks, cyclone warnings and the SSC and Intermediate months",
  lastUpdated: "2026-09-21",
  geo: { latitude: 13.962, longitude: 79.583 },
  wikipedia: "https://en.wikipedia.org/wiki/Venkatagiri",
  alternateNames: ["Venkatagiri Tirupati district", "Venkatagiri Nellore", "Venkatagiri Town"],
  stripSchools: [],

  title: "Venkatagiri IB & IGCSE Tutors | Online One-to-One Tuition",
  metaDescription:
    "IB and IGCSE tutors for Venkatagiri students in Tirupati district: live one-to-one online lessons that respect cyclone season and Ugadi. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Private Home Tuition in Venkatagiri",
  heroEyebrow: "IB & IGCSE ONLINE TEACHING FOR VENKATAGIRI STUDENTS",
  heroSubtitle:
    "Home tuition for Venkatagiri students working towards the IB or IGCSE, conducted live and one to one on video. This handloom town has a palace, a fort and a long tradition of schooling, but we cannot point to a school here for either board, and Tirupati and Chennai lie hours away, so a screen and a patient tutor do the work of a commute.",
  primaryKeyword: "IB and IGCSE tutors in Venkatagiri",
  imageAltText: "A Venkatagiri student at a home desk in a live online IGCSE Biology lesson, a handloom cloth draped on a chair nearby",
  secondaryKeywords: [
    "IB tutor Venkatagiri",
    "IGCSE tutor Venkatagiri",
    "IB home tuition Venkatagiri",
    "IGCSE home tuition Venkatagiri",
    "IB private tuition Venkatagiri",
    "IB Maths tutor Venkatagiri",
    "IGCSE Maths tutor Venkatagiri",
    "IB Physics tutor Venkatagiri",
    "IB Chemistry tutor Venkatagiri",
    "IB Biology tutor Venkatagiri",
    "IB DP tutor Venkatagiri",
    "IB MYP tutor Venkatagiri",
    "IB PYP tutor Venkatagiri",
    "IGCSE online tuition Venkatagiri",
    "IB tutor Venkatagiri Tirupati district",
    "IGCSE tutor Dakkili Balayapalli Rapur",
    "online IB tutor Venkatagiri Andhra Pradesh",
    "Cambridge IGCSE tutor Venkatagiri",
  ],

  heroTrustPoints: [
    "A tutor who has already handled your child's exact IB subject or IGCSE code",
    "Teaching happens online here, since in-person tutor visits exist only in Gurugram and parts of Delhi NCR",
    "A short written note after each lesson and a painless way to change tutor",
    "One free trial class, and the fee put in writing before you book",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Every IB stage" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "Cyclone-ready", label: "Backup plans built in" },
    { value: "Free trial", label: "Judge a real class first" },
  ],

  intro: {
    heading: "Bringing international-board teaching to a handloom town",
    paragraphs: [
      "Venkatagiri, in the Tirupati district of Andhra Pradesh, is known for its handloom saree weaving, a craft recognised with a Geographical Indication tag, and for the old fort and palace of the Velugoti rulers who once held the town. The surrounding mandals, among them Dakkili, Balayapalli, Rapur and Sydapuram, are a mix of weaving quarters, farms and small businesses. Many households have a son or daughter working in Chennai, Bengaluru, Hyderabad or overseas.",
      "Nothing we can verify puts an IB or Cambridge or Pearson Edexcel IGCSE school inside Venkatagiri, so none is named as local. Local schools run the Andhra Pradesh State Board or CBSE. Confirmed international-board schools are in Tirupati and Chennai, many hours away.",
      "That distance is why video teaching makes sense here. The child stays at home, the tutor appears from wherever in India they live, and a shared digital board carries the working. You get a teacher selected for syllabus experience rather than postcode, while the town keeps its own calm, weavers' rhythm of evening and Sunday study.",
      "We operate independently of the IB, Cambridge, Pearson and all schools mentioned here. A tutor may coach and comment; none will draft a student's Internal Assessment, Extended Essay, TOK essay or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, together with Cambridge and Edexcel IGCSE",
      "Live private sessions in English, given by tutors based across India",
      "A free sample class before any rate is mentioned",
      "Nobody visits homes in Venkatagiri; that service exists only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Venkatagiri families usually encounter an IB stage through a concrete plan: a seat in Tirupati or Chennai, a relative's advice from abroad, or a private IGCSE entry. What follows sets out what each stage asks and where a tutor earns their keep.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "Learning is organised into inquiry units built around big ideas, and the final year ends with an Exhibition the pupils plan themselves. No board paper is sat. A tutor concentrates on fluent reading aloud, neat handwriting, number sense and the courage to ask questions, in brief, cheerful sessions.",
      countryNote:
        "A Telugu-speaking child about to join an English-medium PYP class in Tirupati or Chennai gains most from months of light conversation practice beforehand.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Marks in every subject come from published criteria rather than one exam total, and the programme closes with a Personal Project. State Board pupils often know the facts yet have rarely written explanations, comparisons and evaluations in English, so sessions train that skill.",
      countryNote:
        "For MYP hopefuls in Venkatagiri, tutors usually begin with English paragraph writing and the structure of a science report, then widen to open-ended Maths tasks.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Diploma students carry six subjects, three or four of them at Higher Level, with TOK, the Extended Essay and CAS alongside. Scores reach 45 before bonus core points, sittings fall in May or November, and internal assessments run across both years, shifting every subject grade.",
      countryNote:
        "Diploma students linked to Venkatagiri nearly always attend school in another city, frequently as boarders, and take online lessons in vacations and ahead of mock papers.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP students combine two or more Diploma courses with a vocational qualification and a reflective project. Very few Indian schools offer it, though its Diploma courses are assessed at the ordinary Diploma standard.",
      countryNote:
        "We almost never hear about CP from Venkatagiri. If a request arrives, its Diploma courses are taught as for any Diploma candidate.",
    },
  ],

  subjectsIntro:
    "Families in and around Venkatagiri often steer children to Maths, science, computing and commerce, with a healthy pull towards textile and design. Share the course, level and sitting, and we look for a tutor who has taught it.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof. State Board students arrive quick and accurate, then learn to justify every line in writing." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator technology, with data from textile sales, rainfall and farm output." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves and fields, with sharp attention to graphs, units and uncertainty." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Amount of substance, energetics, rates and organic reactions, using the data booklet from week one, with dye chemistry as a natural local example." },
    { name: "IB Biology", levels: "HL / SL", description: "A broad course built into recall, application and timed writing." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and evaluation, illustrated with handloom cooperatives, GI protection, rural credit and remittances." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies and business tools, relevant to children of weaving and trading families." },
    { name: "IB Design Technology", levels: "HL / SL", description: "Design process, materials and the internal project, guided without making the student's design." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen passages and comparative essay planning, aimed at students who grew up speaking Telugu." },
    { name: "IB Telugu B", levels: "HL / SL", description: "Comprehension, writing and oral work for students who wish to include Telugu in their Diploma." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, code logic and an internal project built in steps." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking, with Eastern Ghats forests, water tanks and cyclone-prone coast as local material." },
    { name: "IB Visual Arts", levels: "HL / SL", description: "Studio process and comparative study, drawing on colour and pattern traditions." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, methods and structured essays." },
  ],

  igcseSubjectsIntro:
    "Both Cambridge and Pearson Edexcel award the IGCSE, and their papers are not built alike, so the first thing we ask is which board your child will sit. The subjects below are the ones Venkatagiri families request, with Telugu available for those who want a home language.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths over two papers; Extended candidates sharpen algebra, geometry and graphs." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus, functions and vectors, meant for strong students heading into Diploma Maths." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson Maths with two equal papers and marks for method." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, forces, electricity and waves, with practical-skills questions rehearsed." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, rates, electrolysis and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, transport, human biology and ecosystems." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "All four language skills for learners who speak Telugu at home." },
    { name: "IGCSE Design & Technology 0445", levels: "Grade 9-10", description: "Design thinking, materials and a coursework project, guided without making the work." },
    { name: "IGCSE Art & Design 0400", levels: "Grade 9-10", description: "Portfolio development and written analysis." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business activity, marketing and finance." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming logic, data and networks." },
    { name: "IGCSE Telugu as a Second Language", levels: "Grade 9-10", description: "Language skills for students who wish to add Telugu, where the board currently offers it." },
  ],

  regionsTitle: "Venkatagiri and surrounding mandals our tutors teach online",
  regionsIntro:
    "A live class is the same on every street. The difference lies in the day around it, so these notes show how families in town and in neighbouring mandals arrange study around heat, loom hours and cyclone-season power.",
  regions: [
    { name: "Venkatagiri town centre and main road", note: "The commercial spine, with shops open late; lessons commonly begin after the evening meal." },
    { name: "Fort and palace area", note: "The historic core around the old Velugoti palace, where families with deep local roots live and value a steady, long-term tutor." },
    { name: "Handloom weavers' quarters", note: "Weaving households whose working day starts early; students often study after the looms fall quiet in the evening." },
    { name: "Bus stand and market side", note: "Noisy with transport and trade, so a headset with noise filtering helps during lessons." },
    { name: "Newer residential colonies", note: "Housing on the town's edge, where broadband quality varies and a hotspot is a useful backup." },
    { name: "Dakkili", note: "A neighbouring mandal of farms and small towns where daily school travel is long and online lessons save hours." },
    { name: "Balayapalli", note: "A nearby mandal with agricultural and salaried households and limited access to specialist teachers." },
    { name: "Rapur and Sydapuram", note: "Mandals in the same revenue division, with families who look to Nellore and Tirupati for schooling." },
    { name: "Srikalahasti and Gudur", note: "Larger neighbours to the south and east, described on our Srikalahasti page and on the Nellore-side pages." },
    { name: "Sriharikota side", note: "The coastal belt near the space launch centre, where some families with science careers take a close interest in Maths and Physics." },
  ],

  schoolDisclaimer:
    "This list exists so you can see where IB and IGCSE classrooms stand near Venkatagiri. IB Gram has made no arrangement with any school, nor with the IB, Cambridge or Pearson. Parents should check programmes, fees and admission rules with the schools themselves.",
  schoolClusters: [
    {
      city: "Local: Venkatagiri town",
      note: "Our checks have found no IB, Cambridge or Edexcel IGCSE school in Venkatagiri, so nothing is listed here. The schools in town follow the State Board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Tirupati",
      note: "The nearest city with verified Cambridge IGCSE schools, about two hours away by road; both names appear on our Tirupati page.",
      schools: ["Sree Vidyanikethan International School", "Edify School"],
    },
    {
      city: "Nearby: Chennai",
      note: "The big southern choice for families with relatives or transfers there; these names appear on our Srikalahasti and Nellore pages.",
      schools: ["Hiranandani Upscale School", "Gateway International School", "APL Global School"],
    },
    {
      city: "Nearby: Visakhapatnam",
      note: "A long journey up the coast, but the closest IB World School in Andhra Pradesh is there; taken from our Nellore page.",
      schools: ["Oakridge International School, Visakhapatnam"],
    },
  ],

  modesIntro:
    "Everything in Venkatagiri runs by video. Families then decide how the teaching is paced: a steady weekly class, a planned term with written summaries, or a tight burst of classes before the papers.",
  modes: [
    {
      title: "A regular weekly slot",
      description:
        "A single tutor at a fixed hour each week. Questions and half-finished problems go on the board, the next idea is taught, and mistakes are fixed while the pen is still moving.",
      bullets: [
        "Tutor matched on subject, level and board",
        "Generally sixty minutes",
        "Working visible on a shared board",
        "Suits IGCSE, MYP and early DP",
      ],
    },
    {
      title: "A planned term with summaries",
      description:
        "A map of the term, a few lines after each class and a progress chat every few weeks. Parents who never sat these exams can still follow what is happening.",
      bullets: [
        "Summaries in simple English",
        "Chats that reorder topics if needed",
        "Fits beside school and tuition timetables",
        "Extra classes before unit tests",
      ],
    },
    {
      title: "A sprint before the papers",
      description:
        "Nearer to mocks and the May or November sittings, classes bunch together and consist mostly of timed questions with careful marking.",
      bullets: [
        "Practice papers marked the way the board marks them",
        "Two to four sessions a week if the week allows",
        "Kept away from Ugadi, Sankranti and cyclone alerts",
        "Best started about three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Venkatagiri, and what do local families do instead?",
      paragraphs: [
        "No school in Venkatagiri is one we can confirm for the IB or for a Cambridge or Edexcel IGCSE. The town's schools, some of them many decades old, follow the State Board or CBSE. If a school promotes an international curriculum, ask to see its authorisation and the list of subjects it actually examines.",
        "The nearest verified choices are in Tirupati, where Sree Vidyanikethan International School and Edify School offer Cambridge IGCSE, and in Chennai, where Hiranandani Upscale School, Gateway International School and APL Global School are among the names on our other pages. Visakhapatnam's Oakridge is the IB option we can point to in Andhra Pradesh. Each has its own admissions process and fees.",
        "The decision is often a family one: relocate, arrange a hostel, or stay with a local board. Families with members in Chennai or abroad are the ones who usually raise the subject first, and a mid-year transfer can make continuity of syllabus a real worry.",
        "Nobody on our side can hand your child a place in school. Lessons instead prepare for an entrance round, repair gaps left by a move, and give a boarder a specialist during the weeks when hostel and library are shut.",
      ],
    },
    {
      heading: "State Board, CBSE, IGCSE and IB: how different are they for a Venkatagiri student?",
      paragraphs: [
        "The Andhra Pradesh State Board runs SSC at the end of Class 10 and Intermediate at the end of Class 12, usually in March and April, in Telugu or English. CBSE has a single national syllabus. IGCSE and IB sittings come in May and November, which moves the exam calendar by months.",
        "Students from the State Board are usually fast, practised at calculation and used to long hours of revision. International examiners also look for assumptions stated, diagrams labelled and judgements explained in full sentences, and the first weeks of tutoring build that habit.",
        "Entrance exams such as AP EAPCET, JEE Main and NEET shape planning for families staying in India. IB and IGCSE candidates can often sit them, but eligibility and subject rules vary by year and exam, so read the current notices before settling on subjects.",
        "One useful question is where your child will finish Class 12. An Andhra professional seat may be easier from the State Board or CBSE. A foreign university or a broad degree may be easier from an international board.",
      ],
      table: {
        caption: "Boards a Venkatagiri family might compare",
        columns: ["Board", "Typical setting near Venkatagiri", "What the papers reward", "Main exam months"],
        rows: [
          ["AP State Board (SSC, Intermediate)", "Most local schools", "Accurate recall in Telugu or English", "March-April"],
          ["CBSE", "A few private schools and in Tirupati", "National syllabus, applied questions", "February-March"],
          ["IGCSE", "Tirupati, Chennai and further", "Applied, tiered papers", "May-June and October-November"],
          ["IB Diploma", "Chennai, Visakhapatnam and further", "Six subjects plus core, criteria based", "May and November"],
        ],
      },
    },
    {
      heading: "What goes into the price of IB or IGCSE tuition for a Venkatagiri family?",
      paragraphs: [
        "Fees are not posted here because they ought to fit the child. Once the free class is done, a written quote follows, built from the course level, the subject, how well the tutor knows your syllabus and the number of weekly hours you choose.",
        "Higher Level teaching by someone who has run the course many times costs more than general help, and IGCSE languages are priced on another footing. A regular weekly plan usually works out cheaper per hour than a hurried fortnight before papers, so early booking tends to save money.",
        "Set the quote against the other choices. A weekly run to Tirupati for specialist coaching costs bus fares, a day and a worn-out child, and moving to Chennai costs far more. A class at your own table removes the trip.",
        "Sit the trial, carry the written quote home, talk it over with the family and choose in your own time. Classes may be paused for festivals and picked up again without penalty.",
      ],
      bullets: [
        "Level of study: IB HL or SL, or the IGCSE tier",
        "Subject, and what the tutor has already taught on that syllabus",
        "Weekly hours and lesson length",
        "Steady plan or short exam burst",
      ],
    },
    {
      heading: "Would an online tutor, Tirupati coaching, a local teacher or self-study suit Venkatagiri best?",
      paragraphs: [
        "Coaching in Tirupati gives a classroom and a peer group, but the road from Venkatagiri takes up a large part of the day and few centres there teach IB or IGCSE syllabuses. A video class brings the specialist to you without the journey.",
        "Venkatagiri has no shortage of teachers for State Board and CBSE work, many with real skill at basics. Very few have marked IB coursework or IGCSE scripts, so their strength lies in general support and not in syllabus-specific preparation.",
        "Working alone can carry a motivated student through IGCSE Maths and sciences with past papers and mark schemes, but it runs dry where written feedback is essential, such as IB essays, the Exploration and oral language exams.",
        "A live private class gives you a reader who understands the criteria and a timetable that fits around the household. Connectivity is the weak point, most of all in cyclone season, which is why a voice-call backup is agreed at the outset.",
      ],
      table: {
        caption: "Study routes compared for Venkatagiri students",
        columns: ["Route", "What it offers", "What limits it"],
        rows: [
          ["Online one-to-one", "Exact syllabus, private pace, no travel", "Needs stable data and power"],
          ["Coaching in Tirupati", "Classroom and peer group", "Few IB or IGCSE specialists, long travel"],
          ["Local teacher", "Close and familiar", "Little IB or IGCSE marking experience"],
          ["Self-study", "Free and flexible", "No feedback on essays or internal work"],
        ],
      },
    },
    {
      heading: "How do pre-monsoon heat, cyclone season and Ugadi shape the study year in Venkatagiri?",
      paragraphs: [
        "Venkatagiri has a hot, dry stretch from April to June, with afternoon temperatures that make midday study miserable. Families with weaving looms indoors feel it even more. Early mornings and evenings are the workable hours, and a fan, water and a charged laptop are part of the study kit.",
        "From October to December the north-east monsoon brings rain and some cyclone danger, the same weeks as the November IGCSE and IB sittings. Storms can shut schools and cut power or data for days. Finish revision by September, and keep a fallback ready.",
        "Ugadi in March or April and Sankranti in January are the main household festivals, with several days of travel and family gathering. Vinayaka Chavithi, Dasara and Diwali also break routine, and local temple festivals such as the jatara of Poleramma add to the calendar.",
        "Board exams in March and April quieten any home with a child in Class 10 or 12, and IGCSE May-June and IB May papers come hard on their heels.",
      ],
      table: {
        caption: "A year of study around Venkatagiri",
        columns: ["Months", "Weather and events", "Planning advice"],
        rows: [
          ["January-February", "Sankranti, mild days, mock exams", "Resume after the festival; begin timed papers"],
          ["March-April", "SSC and Intermediate exams, Ugadi, rising heat", "Light evening sessions"],
          ["May-June", "IB May and IGCSE May-June, peak heat", "Early-morning or evening slots with power backup"],
          ["July-September", "Warm, scattered showers, Vinayaka Chavithi", "Good months for deep revision"],
          ["October-December", "North-east monsoon, Dasara, Diwali, cyclone risk, November sessions", "Finish revision before storm season"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Venkatagiri go after school?",
      paragraphs: [
        "Inside India, Tirupati offers Sri Venkateswara University and engineering colleges, Chennai has the University of Madras, Anna University and IIT Madras, and Bengaluru and Hyderabad attract many Andhra students. Every institution sets its own admission rules for applicants from outside the State Board.",
        "Before an Indian university will read IB or IGCSE marks as a Class 12 equivalent, it usually wants a certificate from the Association of Indian Universities. Some central universities also admit IB Diploma holders via CUET-UG. Which IB subjects count keeps changing, so the newest notice is the one to trust.",
        "A leaning towards engineering or medicine trims the subject list early. Engineering entrances want Maths, Physics and Chemistry behind the student, and the medical entrance wants Biology alongside the other two. Find the notification for the year of application and compare it with your planned IB group or IGCSE list before anything is final.",
        "Many Andhra households have cousins in the United States, Canada, Australia, the UK or Singapore, and each of those countries recognises IB and IGCSE results. Tutors work on subject content only, never on personal statements or application essays.",
      ],
    },
    {
      heading: "What makes IB Maths and the sciences demanding, and how does a tutor help?",
      paragraphs: [
        "IB Maths scoring depends on the reasoning shown as much as on final answers. One course, Analysis, is built on algebra, calculus and proof. The other, Applications, is built on models and on reading graphing-calculator results. Both contain the Exploration, a self-chosen investigation that accounts for twenty per cent.",
        "Examiners in Physics take marks away for absent units, careless graphs and vague claims. Chemistry is won by fast, accurate arithmetic and by knowing where everything sits in the data booklet. Biology depends on memory plus application, and its command words, such as state, outline and evaluate, tell you how much to write.",
        "Internal assessment is what worries parents most. Our tutors explain each criterion in plain words, say whether a chosen question is too wide, and leave comments on drafts. The investigation, figures and wording remain the student's, as examiners require.",
        "Students from Andhra schools bring speed and stamina. A tutor who has taught them before keeps those strengths while adding the explanation and evaluation that international examiners reward.",
      ],
    },
    {
      heading: "Which IGCSE tier, Core or Extended, Foundation or Higher, should a student sit?",
      paragraphs: [
        "Cambridge Core tops out at C; Cambridge Extended runs to A*. Edexcel Foundation tops out at 5; Edexcel Higher runs to 9. Plan for the higher tier if Maths HL or a science Diploma is the goal.",
        "The tier is typically decided by the school. Private candidates, or parents comparing schools, may judge by a timed practice paper, and a mark that sits just under the boundary merits a conversation with the exam centre first.",
        "Match subjects to the destination: engineering and medicine suggest Maths with the three sciences or Computer Science, textile and design interests suggest Design and Technology, Art and Business Studies, and Telugu can take the language place where offered.",
        "Pin down board, code and sitting first, so the right papers get practised.",
      ],
    },
  ],

  tutorsIntro:
    "Each Venkatagiri student is matched on programme, subject, level and board, and the tutor is introduced with a short note on the fit. They all teach from within India, on IST.",

  process: [
    { title: "Describe the student", description: "Board or programme, subject, level, school now attended and the evening or Sunday times that suit your Venkatagiri home." },
    { title: "Consider our suggestion", description: "One tutor is proposed, with the syllabus and level they have taught spelled out." },
    { title: "Take a free class", description: "An actual lesson on video, free and unpressured." },
    { title: "Settle terms on paper", description: "Weekly hours, fee and first topics are written down before any payment." },
    { title: "Carry on, with check-ins", description: "Regular lessons, brief summaries and a new tutor on request." },
  ],

  whyPoints: [
    { title: "Syllabus-level matching", description: "Tutors are selected for the subject, tier and board your child actually faces." },
    { title: "Candid about local schools", description: "We say plainly that no Venkatagiri school is confirmed for IB or IGCSE." },
    { title: "Storm planning included", description: "A backup route is agreed before cyclone season, not during it." },
    { title: "Trial before fees", description: "You judge the teaching first." },
    { title: "Firm limits", description: "No tutor drafts assessed work or essays for a student." },
    { title: "Simple to switch", description: "A poor fit is replaced without awkwardness." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Venkatagiri?", answer: "No. We cannot confirm one. Venkatagiri schools work to the State Board or CBSE, and the nearest confirmed international-board schools are at Tirupati, Chennai and Visakhapatnam. If anyone claims otherwise, request the authorisation and the subject list." },
    { question: "Can I get IB home tuition in Venkatagiri?", answer: "Yes, in its online form: a private live lesson from your own room, taught by a specialist somewhere else in India. Tutors never travel to Venkatagiri. Only Gurugram and parts of Delhi NCR have in-person visits, and we make that clear before you book." },
    { question: "Do you have IGCSE tutors for Venkatagiri students on Cambridge and Edexcel?", answer: "Cambridge and Edexcel are both on the menu. Matching runs on syllabus code and tier, say Cambridge 0610 Biology or Edexcel 4MA1 Mathematics A, and all teaching is online in Indian time. Give us the board and sitting first, then we suggest a name." },
    { question: "Do tutors visit homes in Venkatagiri?", answer: "Not in Venkatagiri. The only places tutors go to homes are Gurugram and parts of Delhi NCR. Here, each class is live and private over video, needing a laptop or tablet, a steady connection and a quiet corner, while the written working is seen on a shared board." },
    { question: "What does IB or IGCSE tuition cost in Venkatagiri?", answer: "It is worked out from the level, the subject, the tutor's background and the weekly hours. We publish no number. A written quote comes after the free class, and it is worth laying next to the cost of bus trips to Tirupati or a move to Chennai." },
    { question: "Which schools near Venkatagiri offer IB or IGCSE?", answer: "None in Venkatagiri that we can confirm. Sree Vidyanikethan and Edify in Tirupati are on our Tirupati page, Chennai options on our Srikalahasti and Nellore pages, and Oakridge in Visakhapatnam on the Nellore page. Check admissions directly." },
    { question: "Is the trial lesson free?", answer: "Yes, free. Your child sits one complete lesson with the tutor we have in mind before money is discussed. If it does not feel right, you stop there; if it does, the rate arrives in writing and only then do bookings begin." },
    { question: "Can a tutor help with my child's IA or Extended Essay?", answer: "Guidance only. A tutor can explain what each criterion asks for, judge whether a research question is workable, and read a plan or draft, pointing to the gaps. Everything submitted for marks, from data to sentences, must be your child's own, so requests for finished work are declined." },
    { question: "Which IB Diploma subjects can you cover for Venkatagiri students?", answer: "Commonly requested: both Maths courses, all three sciences, Economics, Business Management, Design Technology, English A, Telugu B, Computer Science, ESS, Visual Arts and Psychology, each at Higher or Standard Level. If your combination is unusual, ask, and we will tell you honestly whether we can staff it." },
    { question: "Can you teach IB MYP and PYP to younger children in Venkatagiri?", answer: "We do. Young PYP learners get brisk, playful sessions around reading aloud and number games, while MYP learners tackle criteria, lab write-ups and Personal Project planning. After each class you receive a few lines describing what happened." },
    { question: "Will a cyclone warning or a power failure ruin a class?", answer: "A dropped class can be rebuilt. It gets shortened or slides to another evening, and before the first session your tutor and you agree a fallback: a plain phone call, with the student photographing written working and sending it over. We avoid pinning key lessons to a day with a storm alert." },
    { question: "How are tutors chosen for Venkatagiri students?", answer: "We look at qualifications, recent teaching of the precise syllabus and how clearly the person explains. A name goes forward only once we understand your child's level and goal, and the trial class tests the fit in practice." },
    { question: "When should my child start tuition?", answer: "Ideally when a course opens: Grade 9 for IGCSE, Class 11 for the Diploma. For a Tirupati or Chennai entrance test, starting a term early and putting English and Maths first is sensible." },
    { question: "Can my child, now on the AP State Board, change to IB or IGCSE?", answer: "Only after a school offers a seat, because tutoring cannot create one. Meanwhile a tutor can soften the change by teaching application-style questions, reviewing missing topics and building written English." },
    { question: "Can lessons fit around Ugadi, Sankranti and the SSC season?", answer: "Yes. Evenings and Sundays work for most households here, and classes are planned around Ugadi, Sankranti, Dasara, Diwali and the March and April exams. A slot that collides with an event simply moves." },
    { question: "What should we do if the tutor and my child do not click?", answer: "Let us know, and another tutor is introduced. A short check-in after the first few classes usually surfaces a mismatch early, and the written terms make it easy to see what was promised." },
    { question: "Does IB Gram have any connection with a school or exam board?", answer: "No. IB Gram is independent of the IB, Cambridge, Pearson and every school in Venkatagiri, Tirupati or beyond, and the schools named on this page appear for context only." },
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
    { label: "IB and IGCSE tutoring in Tirupati", href: "/tirupati/", description: "The nearest city with verified IGCSE schools." },
    { label: "IB and IGCSE tutoring in Srikalahasti", href: "/srikalahasti/", description: "A neighbouring temple town served online." },
    { label: "IB and IGCSE tutoring in Nellore", href: "/nellore/", description: "The Andhra city that Venkatagiri once belonged to." },
    { label: "IB and IGCSE tutoring in Chittoor", href: "/chittoor/", description: "Another Rayalaseema-side town on the same model." },
  ],

  closingHeading: "Book a free trial lesson for your Venkatagiri student",
  closingBody:
    "Message us the programme or board, subject, level and the calm evening or Sunday hours at your Venkatagiri home. A tutor is named, with reasons, a free sample class follows on video, and only then does a written fee arrive. support@ibgram.com or WhatsApp +91 7439 368 115.",
};
