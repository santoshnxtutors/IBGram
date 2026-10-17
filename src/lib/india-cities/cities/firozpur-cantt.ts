import type { CitySeoPage } from "../types";

/**
 * /firozpur-cantt/ - IB and IGCSE tutoring page for Firozpur Cantonment, Punjab. Online only.
 * The civilian city already has /firozpur/; this page takes the cantonment, service-family and
 * border-district angle. No IB or Cambridge/Edexcel school is confirmed, so stripSchools is empty
 * and the clusters reuse names from the Ludhiana, Amritsar and Mohali pages.
 */
export const firozpurCantt: CitySeoPage = {
  slug: "firozpur-cantt",
  countryName: "Firozpur Cantt",
  countryNameLong: "Firozpur Cantonment (Ferozepur Cantt), Punjab",
  demonym: "Firozpur Cantt",
  state: "Punjab",
  stateCode: "IN-PB",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-afternoon and Sunday slots that respect duty rosters, exercise weeks, posting orders and the winter fog on the Sutlej plain",
  lastUpdated: "2026-09-21",
  geo: { latitude: 30.9458, longitude: 74.6100 },
  wikipedia: "https://en.wikipedia.org/wiki/Ferozepur_Cantonment",
  alternateNames: ["Ferozepur Cantt", "Ferozepore Cantonment", "Firozpur Cantonment", "Ferozepur Cantt."],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Firozpur Cantt | Online Tuition",
  metaDescription:
    "IB and IGCSE online tutors for Firozpur Cantt defence and railway families: live one-to-one Maths, Science and English, portable across postings. Free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Firozpur Cantt",
  heroEyebrow: "IB & IGCSE TUITION FOR FIROZPUR CANTT SERVICE FAMILIES, ONLINE",
  heroSubtitle:
    "For a defence or railway family in Firozpur Cantt wanting private tuition at home in an IB or IGCSE subject, the answer that survives a posting order is a live one-to-one lesson on a laptop. The tutor knows the exact syllabus and teaches from elsewhere in India, so the same teacher can follow the child from the cantonment to the next station and the one after.",
  primaryKeyword: "IB and IGCSE tutors in Firozpur Cantt",
  imageAltText: "Child of a service family in Firozpur Cantt revising IB Mathematics at a quarters desk with an online tutor on screen",
  secondaryKeywords: [
    "IB tutor Firozpur Cantt",
    "IGCSE tutor Firozpur Cantt",
    "IB home tuition Firozpur Cantt",
    "IGCSE home tuition Firozpur Cantt",
    "IB private tuition Firozpur Cantt",
    "IB Maths tutor Firozpur Cantt",
    "IGCSE Maths tutor Firozpur Cantt",
    "IB Physics tutor Firozpur Cantt",
    "IB Chemistry tutor Firozpur Cantt",
    "IB Biology tutor Firozpur Cantt",
    "IB DP tutor Firozpur Cantt",
    "IB MYP tutor Firozpur Cantt",
    "IB PYP tutor Firozpur Cantt",
    "IGCSE online tuition Firozpur Cantt",
    "IB tutor for army families Ferozepur",
    "IB tutor for defence officers children Ferozepur Cantt",
    "Cambridge IGCSE tutor Ferozepur Cantonment",
    "IB tutor railway families Ferozepur division",
    "online tuition for students transferring from Ferozepur Cantt",
  ],

  heroTrustPoints: [
    "Tutors picked for the IB course and level, or IGCSE code, a child truly studies",
    "Video lessons that continue unchanged when a family is posted out",
    "No fee for the first session, and a rate in writing before it",
    "Not part of the Army, Railways, any board or any school",
  ],
  heroStats: [
    { value: "Posting-proof", label: "Tutor stays with the child" },
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards covered" },
    { value: "Free trial", label: "First lesson on us" },
  ],

  intro: {
    heading: "A cantonment family's child may sit three different classrooms in five years, so the tutor should be the constant",
    paragraphs: [
      "Firozpur Cantonment lies on the Sutlej plain beside the older city of Firozpur, which has its own page on this site. The cantonment dates to the nineteenth century, sits close to the international border near Hussainiwala, and carries the memory of Saragarhi in its gurdwara and of the Anglo-Sikh wars in the villages around it. Army units, border-area postings and the Ferozepur railway division bring to the town families who expect to move, and expect to move again.",
      "For such households schooling is a question of portability. Cambridge IGCSE and the IB are taught in recognisably the same form at authorised schools across India and abroad, so a child who leaves for Pune, Jammu or Bengaluru can usually find the same course on arrival. The weak point is tutoring. A neighbourhood teacher stays behind. A tutor on video stays with the child, and lessons resume at the next address after a quiet week of packing.",
      "To be exact about the service: lessons are live and one to one, the child studies at home in the cantonment, and the tutor sits in another Indian city. Nobody visits Firozpur Cantt, and in-person home tuition is run only in Gurugram and parts of Delhi NCR. Civilian families in the cantonment bazaar and nearby villages use the service in the same way.",
      "IB Gram is not linked to the Army, the Army Welfare Education Society, the Railways, the IB, Cambridge, Pearson Edexcel or any school. Tutors teach, coach and comment, and they never author a student's assessed work. The first lesson is free.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE",
      "Screen-based lessons only; no tutor visits Firozpur Cantt",
      "The same tutor can carry on after a posting to another station",
      "Free first lesson and a written summary after every session",
    ],
  },

  programmesIntro:
    "Service parents judge a programme by how well it survives a move. Each stage below is described for content and also for what happens to it when a posting lands in the middle of a year.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Shared themes replace the single textbook, and pupils finish with a self-planned Exhibition. A tutor's role at this age is steady and gentle: reading aloud, number fluency and a familiar voice through a run of new classrooms.",
      countryNote:
        "A primary child who has changed school twice often has gaps in reading or number work. A regular weekly tutor fills them without adding pressure at a new station.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Marks follow published criteria, units are organised by concepts, and a Personal Project ends the stage. Newcomers need the criteria explained plainly.",
      countryNote:
        "MYP students arriving from Kendriya Vidyalaya or other CBSE schools usually need practice in writing reasoned answers, and a project journal that can be carried between schools.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, the Extended Essay, Theory of Knowledge and CAS fill two years with little slack. Predictions and internal assessments feed university decisions.",
      countryNote:
        "A posting during Class 11 or 12 is hard on a Diploma student. Families ask for a tutor who can hold Mathematics and the sciences steady across two schools.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A career-related qualification is taken alongside Diploma courses, with a reflective project. Very few Indian schools run it.",
      countryNote:
        "We know of no CP school in Firozpur Cantt. Any help would be for Diploma-level subjects at a school in another place.",
    },
  ],

  subjectsIntro:
    "When a child changes school mid-course, the precise course and level matter more than the subject label. We ask which Mathematics, which sciences and which level are in play, and find a tutor who has taught that combination.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof for future engineers, plus regular work on question types a student has not met before." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and technology, with the exploration topic fixed early enough to survive a move." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, circuits and fields, with HL quantum and nuclear material rebuilt for those who missed a term." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, energy changes, equilibria and organic routes, using the data booklet fluently." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology, with precise answer wording." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram skills, definitions and current-affairs examples for the commentaries." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case reading, numeric tools and balanced recommendations." },
    { name: "IB Global Politics", levels: "HL / SL", description: "Power, borders and security, a subject with obvious local resonance for border-district students." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis, structured essays and the historical investigation, with the Partition era as a familiar backdrop." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis and comparative writing for students from Punjabi-speaking homes." },
    { name: "IB Punjabi A", levels: "HL / SL", description: "Punjabi literature and language, where a school offers the course." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Hindi as an acquired language, useful to children of mixed-language service households." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, networks and documentation of the internal solution." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Talk about how claims count as knowledge, moving towards an exhibition and essay." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Finding a question that fits the limit and planning the method. Comment only." },
    { name: "IB MYP Mathematics and Sciences", levels: "MYP 1-5", description: "Investigation design, reasoning in full sentences and Diploma groundwork." },
  ],

  igcseSubjectsIntro:
    "Cambridge is the more common IGCSE board in Indian schools, and Pearson Edexcel the other. A child arriving in or leaving the cantonment may change board with the school, so we confirm the syllabus code every time.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Number, algebra, geometry and probability, laid out so method marks survive a slip." },
    { name: "IGCSE Additional Mathematics", levels: "Grade 10", description: "Calculus and functions to prepare for IB or A Level Mathematics." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Motion, thermal physics, circuits and waves, plus the practical-skills paper." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, reactivity, organic basics and reading qualitative tests." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cell structure, transport in plants and animals, reproduction and ecosystems, with data-handling questions." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Grade 9-10", description: "Three sciences in one qualification, revised on one timetable." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Algorithms, logic and Python-style pseudocode." },
    { name: "IGCSE Economics and Accounting", levels: "Grade 9-10", description: "Definitions, diagrams, ledgers and final accounts in examiner-friendly layouts." },
    { name: "IGCSE English First and Second Language", levels: "Grade 9-10", description: "Directed writing, summaries and comprehension, with speaking practice where required." },
    { name: "IGCSE Punjabi and Hindi as second languages", levels: "Grade 9-10", description: "Reading and composition in a language spoken at home, where a school enters candidates." },
  ],

  regionsTitle: "Firozpur Cantt, the cantonment roads and the villages around",
  regionsIntro:
    "A live lesson treats an officer's quarters and a village house the same way. The notes below describe how each setting shapes timing: duty rosters, school runs and the season.",
  regions: [
    { name: "Cantonment Mall Road", note: "The central commercial spine of the cantonment, used by service and civilian families, where evening market hours shape lesson slots." },
    { name: "Army residential areas and officers' enclaves", note: "Married accommodation where postings come and go, so timetables are planned around a family's expected date of move." },
    { name: "Saragarhi Gurdwara area", note: "A landmark district known across Punjab, near which many long-settled civilian families live." },
    { name: "Railway colony", note: "Staff families of the Ferozepur division, accustomed to transfers and to fixed shift patterns." },
    { name: "Model Town and Basti areas near the cantonment", note: "Civilian neighbourhoods on the edge of the cantonment, where professionals and traders plan for a child's schooling in Ludhiana or beyond." },
    { name: "Ferozeshah road side", note: "The road towards the historic battlefield village of Ferozeshah, used by farming households south-east of town." },
    { name: "Hussainiwala road side", note: "The border-facing road, with families who link study plans to service careers and to border-area duty cycles." },
    { name: "Makhu and Zira road side", note: "Approaches from the north and east, used by households who commute into the cantonment for school." },
    { name: "Sutlej belt villages", note: "Settlements near the river where monsoon water levels and power supply affect evening study." },
  ],

  schoolClusters: [
    {
      city: "Firozpur Cantt and Firozpur city",
      note: "Nothing we can verify puts an IB or Cambridge / Edexcel IGCSE school in the cantonment or the city. Schools here follow PSEB, CBSE or ICSE, including several service-linked campuses.",
      schools: [],
    },
    {
      city: "Nearby: Ludhiana",
      note: "Around 120 km by road, with the nearest established international options for Malwa and Firozpur families, usually through boarding.",
      schools: ["Britannica International School", "Harvest International School"],
    },
    {
      city: "Nearby: Amritsar",
      note: "A similar distance in the other direction, with international schools that some service and civilian families consider.",
      schools: ["Invictus International School", "International Fateh Academy"],
    },
    {
      city: "Nearby: Mohali",
      note: "A longer trip to the tricity, which has more IB and IGCSE choice and is a common choice at a posting to Chandigarh.",
      schools: ["Oakridge International School, Mohali"],
    },
  ],
  schoolDisclaimer:
    "These schools are named only to show where Punjab families, including service families, sometimes look for international courses. IB Gram is independent of all of them, of the armed forces and Railways, and of the IB, Cambridge and Pearson, and we have confirmed no IB or IGCSE school inside the cantonment. Please check admissions and curriculum with each school.",

  modesIntro:
    "Every lesson for Firozpur Cantt is live and on screen. The three formats below reflect duty rosters and the ever-present possibility of a move.",
  modes: [
    {
      title: "A weekly lesson that travels",
      description:
        "One tutor, one student and a fixed hour. If the family is posted, the lesson resumes at the new address, because the clock stays Indian Standard Time everywhere in the country.",
      bullets: [
        "The same tutor before and after a move",
        "Board work saved for later revision",
        "A written summary after every session",
        "Slots rebooked around a move date",
      ],
    },
    {
      title: "Bridging a mid-year school change",
      description:
        "When a child joins a new school part-way through a course, a short run of lessons rebuilds what the old school taught differently and gets the student to the new teacher's pace.",
      bullets: [
        "A first session that maps what was covered",
        "Topics the new class has already done",
        "Focus on assessments falling due soon",
        "Tapering off as the child settles",
      ],
    },
    {
      title: "Exam-window revision",
      description:
        "Before mocks and the May or November sessions, extra hours go to past papers and error analysis, from wherever the family happens to be stationed.",
      bullets: [
        "Timed papers reviewed against the mark scheme",
        "Targeted sessions on weak topics",
        "More hours only in the busy weeks",
        "Back to the normal slot afterwards",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools can a Firozpur Cantt family consider?",
      paragraphs: [
        "Our checks of school directories, the IB finder and Cambridge's centre lists found no authorised IB or Cambridge / Edexcel IGCSE school in the cantonment or in Firozpur city. Service children usually attend CBSE schools, including service-linked ones, while civilian families choose among PSEB, CBSE and ICSE campuses. We will not name a school we cannot confirm.",
        "Families who want an international curriculum look to bigger cities. Ludhiana has Britannica International School and Harvest International School, and Amritsar has Invictus International School and International Fateh Academy. Mohali has Oakridge International School. All three cities are a long road journey from the cantonment, so boarding is a frequent choice, and a posting to Chandigarh or Delhi sometimes settles the question.",
        "The households who contact us are of several kinds. Some are service families who chose an international curriculum because it is recognised wherever they may be posted. Some are railway employees. Others are civilians in the cantonment bazaar or surrounding villages with plans for study abroad. In each case a tutor supports the child's school route and does not replace it.",
        "A free trial lesson is an inexpensive way to see how a child responds to an IB or Cambridge style of teaching before any deposit is paid.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Firozpur Cantt or Firozpur city",
        "Ludhiana, Amritsar and Mohali hold the nearest options",
        "Enquiries come from service, railway and civilian families",
        "A tutor supports the school route and never replaces it",
      ],
    },
    {
      heading: "Why do defence and railway families look at IB or IGCSE at all?",
      paragraphs: [
        "The short answer is portability. A serving officer or railway employee may move every two to four years, and each move can mean a new board, new textbooks and a different order of topics. CBSE was built for this and serves it well, particularly through service-linked schools. IB and Cambridge offer a second kind of continuity, because the course is defined internationally and is identical in every authorised school.",
        "There is an overseas angle too. Families with relatives abroad, or an officer's child hoping to study in the United Kingdom, Canada or Australia, find that IGCSE followed by A Levels or the IB Diploma is read easily by admissions offices there. That is a useful option for students who may not go to a service academy.",
        "Service careers remain a real goal, and they deserve a clear-eyed note. Entry routes such as the National Defence Academy, technical entry schemes and university schemes set their own eligibility rules, including how international-board qualifications are treated. Those rules change, so they must be read from the official notification of the year in question.",
        "The table compares the boards from a service family's point of view.",
      ],
      table: {
        caption: "CBSE, PSEB and IB or IGCSE for a cantonment family",
        columns: ["Feature", "CBSE", "PSEB", "IB / IGCSE"],
        rows: [
          ["Moving between stations", "Very smooth nationwide", "Weaker outside Punjab", "Smooth between authorised schools, though few stations have one"],
          ["Language of teaching", "English or Hindi", "Punjabi or English", "English, with Punjabi or Hindi as language options"],
          ["What the paper rewards", "Recall and application", "Recall and practice", "Reasoning, evidence and evaluation"],
          ["Availability at Firozpur Cantt", "Several schools, some service-linked", "Widespread", "None confirmed; Ludhiana, Amritsar and Mohali are nearest"],
          ["Overseas recognition", "Accepted with equivalence checks", "Accepted with equivalence checks", "Read directly by most admissions offices"],
        ],
      },
    },
    {
      heading: "How is IB or IGCSE tuition priced for a posting family?",
      paragraphs: [
        "The rate is worked out from programme and level, subject, lesson length, weekly frequency and the tutor's experience with your course. A retired-teacher-style generalist and a specialist who has taught IB Physics HL for years cost different amounts. No single list would be fair to both, so we publish none.",
        "What matters to a service family is that the arrangement does not need rebuilding at each station. The tutor, the lesson hour and the notes carry over, which saves the search and the trial period that a new local teacher would involve. Online delivery also avoids fuel, auto fares and the time spent in traffic on the cantonment roads.",
        "Once you share your child's class, board and goal over WhatsApp, a written rate follows before you book the opening lesson. If the first session does not suit, nothing is owed. You can change tutor, reduce hours or pause during an exercise or a move without penalty.",
        "Many families begin with a weekly lesson in the subject that worries them most, then add hours around mocks or after a school change.",
      ],
      bullets: [
        "Programme, level, subject, lesson length and frequency set the rate",
        "No rebuilding of the arrangement after a posting",
        "Written rate before the free trial",
        "Pause, reduce or change tutor whenever needed",
      ],
    },
    {
      heading: "How does a cantonment tutor compare with coaching, local teachers and self-study?",
      paragraphs: [
        "The cantonment and city have coaching for NDA and other defence entrance tests, JEE, NEET and board exams, plus many private teachers. They serve those exams well. IB and Cambridge papers are constructed differently, and a teacher who has not prepared candidates for them is working from guesswork about the mark scheme.",
        "An IB Gram tutor is chosen for having taught the actual course. They use past papers of the right board, explain the marking logic and leave a written summary after each lesson. Since lessons are online, the student keeps the same tutor after a posting, which no local arrangement can promise.",
        "Self-study is useful for revision and weak where feedback matters. Essays, practical write-ups, orals and internal assessments improve when an experienced reader comments.",
        "The table compares the routes.",
      ],
      table: {
        caption: "Study routes for an IB or IGCSE student in Firozpur Cantt",
        columns: ["Route", "Knows the IB or IGCSE course", "Feedback", "After a posting"],
        rows: [
          ["Online specialist tutor", "Yes, for the named course", "Every lesson, one to one", "Continues from the new address"],
          ["Coaching for NDA, JEE or NEET", "No, different exams", "Shared in a batch", "Ends when the family leaves"],
          ["Local private teacher", "Sometimes, subject only", "Personal", "Ends when the family leaves"],
          ["Self-study with videos", "Depends on the source", "None unless reviewed", "Unaffected but unsupported"],
        ],
      },
    },
    {
      heading: "How do posting orders, fog and the border calendar shape the school year?",
      paragraphs: [
        "In a service family the academic year is laid over a second calendar, the posting cycle. Orders often arrive in spring and summer, and relocations cluster between April and July, exactly when new school terms begin. A tutor who is already in place lets a child walk into a new class with continuity in at least one subject.",
        "Duty hours matter as well. A parent on an exercise or border duty may be unreachable at the expected hour, and an older child may need to work alone with the laptop. Slots are fixed at agreed times and rebooked without fuss when duty intervenes.",
        "The Sutlej plain has its own seasons. Dense fog from December into January disrupts trains and road travel, and online lessons sidestep that risk. Monsoon storms between July and September can cut power and mobile signal, and summer heat pushes study to the evening. Baisakhi, Lohri, Diwali and Republic Day events in the cantonment also reshape the week.",
        "The table ties the local year to international exam dates.",
      ],
      table: {
        caption: "Firozpur Cantt's posting, weather and festival year against IB and IGCSE dates",
        columns: ["Months", "Local pattern", "Academic point"],
        rows: [
          ["December to February", "Dense fog, Lohri, Republic Day", "Mocks; Cambridge February-March series"],
          ["March to May", "Baisakhi, rising heat, posting orders begin", "IB May and Cambridge May-June exams"],
          ["June to August", "Most relocations, monsoon starts", "New school year; IB results in July"],
          ["September to November", "Humid spell, Dussehra, Diwali, cooler nights", "IB November session; Cambridge and Edexcel autumn papers"],
        ],
      },
    },
    {
      heading: "What can a cantonment student do after IB or IGCSE?",
      paragraphs: [
        "Children of service families tend to have wide horizons. After IGCSE and the IB Diploma or A Levels, some aim for the National Defence Academy or another service route, some for engineering or medicine in India, and some for university abroad. Within India, an equivalence certificate from the Association of Indian Universities is the usual first document, and CUET-UG is the gateway to central universities for international-board students.",
        "Defence entrances, the NDA and the technical entry schemes among them, each lay down their own conditions for candidates from international boards, including subject requirements and equivalence. Those conditions must be checked against the official notification for the year, and no tutor can decide them for you. The same holds for NEET and JEE eligibility.",
        "Closer to home, Patiala and Chandigarh hold Thapar Institute of Technology, Punjabi University and Panjab University, while Delhi, Pune and Bengaluru attract many service children. Overseas, the United Kingdom, Canada, Australia and the United States are the usual choices, and an IB Diploma or strong IGCSE to A Level record is read easily.",
        "Our tutors help with grades and technique, and never write applications, statements or essays.",
      ],
      bullets: [
        "Equivalence certificates and CUET-UG for Indian universities",
        "NDA, NEET and JEE rules for international boards must be checked officially",
        "Patiala and Chandigarh institutions are the nearest big names",
        "Overseas study is a frequent second route",
      ],
    },
    {
      heading: "What does IB Mathematics and Science demand of a student moving between schools?",
      paragraphs: [
        "IB Mathematics offers Analysis and Approaches for students who like algebra and calculus, and Applications and Interpretation for those who prefer data and modelling. When a student transfers between schools, the course and level must match, because an AA HL student cannot simply drop into AI SL without a gap. Early in a transfer, a tutor checks what the old school covered and what the new one expects.",
        "IB Physics, Chemistry and Biology combine core content with an Internal Assessment. The assessed investigation is the hardest piece to move between schools, since each teacher sets milestones differently. A tutor can help a student understand the expected method, discuss variables and data handling, and stay on schedule, while the student writes the report.",
        "Command terms matter across all three sciences. Knowing what state, outline, discuss and evaluate each demand is worth marks on every paper, and a student who has moved twice often missed the lesson in which a teacher explained them.",
        "Practice with past papers from the correct board under timed conditions remains the best preparation.",
      ],
      bullets: [
        "Confirm course and level match across both schools",
        "Rebuild missed topics with short problem sets",
        "Practise command terms as much as content",
        "Advice on internal assessments, never authorship",
      ],
    },
    {
      heading: "Which IGCSE tier should a student choose when a posting may come?",
      paragraphs: [
        "Most Cambridge IGCSE subjects are entered at Core or Extended. The Core route covers the basics and limits the top grade, while Extended goes further and can earn A*. A student who expects to continue to IB Mathematics, A Level sciences or engineering should normally enter Extended. A posting should not change that, because Extended content is also what a new school will assume.",
        "Subject choice deserves the same forethought. A usual spread runs English, Mathematics, two sciences or the Combined award, one language and a pair of electives, and subjects such as Computer Science and Economics are offered at most international schools, which eases a move. Punjabi and Hindi as second languages are dependable choices for students from mixed-language service homes.",
        "English as a Second Language or First Language is worth steady practice, since it supports every other paper.",
        "Because Edexcel lays its papers out differently, the tutor checks the board before picking practice material.",
      ],
    },
  ],

  process: [
    { title: "Send your brief", description: "WhatsApp the class, board, subject and any school at the next station if you know it." },
    { title: "Look at the match", description: "We propose a tutor who has taught the exact syllabus and quote a rate in writing." },
    { title: "Take the opening lesson", description: "Meet the tutor on video and test the quarters or home connection at no charge." },
    { title: "Fix a slot that survives duty", description: "Agree an hour that respects rosters, school and, if possible, a likely move date." },
    { title: "Review monthly", description: "Read the written summaries, adjust hours and change tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "The same tutor after a move", description: "Lessons continue from the new station without a fresh search." },
    { title: "Course-specific matching", description: "Tutors are chosen by syllabus code and level, beyond the subject name." },
    { title: "Transfer bridging", description: "Short runs of lessons rebuild what a new school assumes." },
    { title: "Fog-proof and traffic-proof", description: "Lessons run indoors, so winter roads do not matter." },
    { title: "Written summaries for parents", description: "A brief note follows every session, useful when a parent is away on duty." },
    { title: "Honest boundaries", description: "Teaching and feedback only, with no assessed work written for a student and no grade promised." },
  ],

  tutorsIntro:
    "Tutors teach from cities across India on Indian Standard Time. Each has taught the syllabus on offer, and we assign by course and level, which is what lets a lesson follow a family from one station to the next.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Firozpur Cantt?",
      answer:
        "Not that we could confirm. Cantonment and city schools teach PSEB, CBSE or ICSE, and neither the IB nor the Cambridge school finder shows an authorised school there. The nearest established options are in Ludhiana, Amritsar and Mohali. Online lessons let a student prepare for such a move or keep an international course going from home. Please verify any school's status directly.",
    },
    {
      question: "Will a tutor visit our quarters or house in Firozpur Cantt?",
      answer:
        "No. No tutor comes to a Firozpur Cantt address; in-person tuition exists only in Gurugram and parts of Delhi NCR. What we provide is online home tuition: a private live lesson at your own desk, led by a specialist in another city. You keep one-to-one attention, and the tutor can follow the child after a posting.",
    },
    {
      question: "What happens to lessons if my posting order arrives?",
      answer:
        "They carry on. Tutor, slot and notes all stay put, since a lesson travels with the student and India runs on one time zone. We rebook around the week of the move, and if the new school sits on another board the plan is reshaped within a couple of sessions. A fresh tutor match is available on request.",
    },
    {
      question: "Is this service different from the Firozpur page?",
      answer:
        "The tutoring is the same, but this page speaks to cantonment families: postings, duty hours and service-linked schooling. The Firozpur page covers the civilian city. Both are online and both draw on the same tutors. Use whichever describes your circumstances, and mention in your first message if a move is likely.",
    },
    {
      question: "Can an IB or IGCSE student still aim for the NDA or another service route?",
      answer:
        "Possibly, but check first. Entry schemes set their own eligibility conditions, including how international-board qualifications and subjects are treated, and these change by year. Read the official notification for the exact batch and confirm with the authority if anything is unclear. A tutor can strengthen Mathematics and Physics preparation, but cannot confirm eligibility.",
    },
    {
      question: "How much does IB or IGCSE tuition cost for a family in Firozpur Cantt?",
      answer:
        "We keep no price list. Five things decide the figure: level, subject, how long a lesson runs, how many a week, and the tutor's history with your course. Nothing is spent on travel. You see a written quote before the trial, and hours can be cut, paused or ended at any point, a posting included.",
    },
    {
      question: "Can a tutor help with the IB Internal Assessment or Extended Essay?",
      answer:
        "Guidance yes, authorship no. A tutor may talk through a question, a method, the handling of results and the shape of an argument, yet the wording is entirely the student's. Producing IAs, Extended Essays, TOK essays or coursework is outside what our tutors do, full stop.",
    },
    {
      question: "My child has moved schools twice. How do you find the gaps?",
      answer:
        "We start with a short first session that compares what the old school covered with what the new course expects, using past-paper questions and the syllabus guide. The tutor then builds a list of missing topics and works through them in order of exam weight. Most students steady within a few weeks, then settle into one weekly lesson.",
    },
    {
      question: "Can lessons be partly in Punjabi or Hindi?",
      answer:
        "Partly. Exam papers are in English for most subjects, which keeps the teaching mostly in English, although a tutor may open a stubborn idea in Hindi first. Whether Punjabi explanation is possible depends on who is matched. Both languages exist as IB courses and IGCSE second-language papers at schools that enter candidates.",
    },
    {
      question: "Which exam sessions apply, and when should we begin?",
      answer:
        "The IB Diploma examines in May and November. Cambridge IGCSE has three windows (February-March, May-June, October-November) and Edexcel sits in January, May-June and November. Content revision ought to start about half a year before, with timed papers taking over for the final two months. Exact dates come from the school.",
    },
    {
      question: "What is the difference between IGCSE Core and Extended?",
      answer:
        "Core keeps to the essential topics and stops short of the top grades, whereas Extended carries extra content and can reach A*. Anyone heading for IB Mathematics, A Level science or engineering is usually better placed in Extended, and the first lesson's look at current marks settles the choice.",
    },
    {
      question: "Do you teach both IB Mathematics courses, and how do we choose?",
      answer:
        "Yes, at both HL and SL. Analysis and Approaches fits future engineers, physicists and economists; Applications and Interpretation fits those leaning to business, design or social science. Because a posting can change schools, favour the course most schools run. A trial lesson reveals which style your child enjoys.",
    },
    {
      question: "Do fog or power cuts in the cantonment affect online lessons?",
      answer:
        "Fog affects travel far more than lessons, so winter evenings are a good time to teach. Storms in the monsoon can still interrupt power and mobile signal. Have a charged laptop and a phone hotspot to hand, and give the tutor early warning of any trouble. Anything missed is rebooked inside the week.",
    },
    {
      question: "How do I start, and is the first lesson free?",
      answer:
        "Yes, the first lesson costs nothing. Send class, board and subject, plus any likely move, to +91 7439 368 115 on WhatsApp or to support@ibgram.com. A tutor profile and written quote come back, and the trial is fixed for an hour your household can manage. A poor fit means a different tutor.",
    },
    {
      question: "Is IB Gram linked to the Army, Railways or any school?",
      answer:
        "No. IB Gram is a private business with no affiliation to the armed forces, the Army Welfare Education Society, the Railways, the International Baccalaureate, Cambridge, Pearson Edexcel or any school mentioned here. Schools are named only to show where Punjab families sometimes look, so take admissions, fees and curriculum questions to the school.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "Where IB Gram tutors teach online, state by state." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject help across the IB, from PYP to the Diploma." },
    { label: "IGCSE tutors", href: "/igcse/", description: "IGCSE papers from both boards, taken one subject at a time." },
    { label: "IB Diploma Programme tuition", href: "/programmes/dp/", description: "What tutoring looks like across six Diploma subjects and the core." },
    { label: "IB Middle Years Programme tuition", href: "/programmes/myp/", description: "Assessment criteria, concept-based units and the Personal Project." },
    { label: "IB Mathematics tuition", href: "/courses/ib/mathematics/", description: "AA and AI compared, with notes on choosing." },
    { label: "Meet the tutors", href: "/tutors/", description: "Who teaches, and which syllabuses they know." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Message us to arrange the free lesson." },
    { label: "IB and IGCSE tutors in Firozpur", href: "/firozpur/", description: "The civilian city beside the cantonment." },
    { label: "IB and IGCSE tutors in Ludhiana", href: "/ludhiana/", description: "The nearest large city with IB and IGCSE schools." },
    { label: "IB and IGCSE tutors in Amritsar", href: "/amritsar/", description: "The other large border-region city families consider." },
  ],

  closingHeading: "Book one free lesson that will still work after the next posting",
  closingBody:
    "Give us the class, the board and the subject that is giving trouble, and tell us if a move is likely. A matched tutor, a written rate and a trial slot will follow. WhatsApp +91 7439 368 115 or email support@ibgram.com, and the tutor stays with your child through the change of station.",
};
