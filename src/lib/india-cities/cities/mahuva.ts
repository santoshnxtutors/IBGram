import type { CitySeoPage } from "../types";

/**
 * /mahuva/ - IB and IGCSE tutoring page for Mahuva, Bhavnagar district, Gujarat (Saurashtra coast).
 * Online one-to-one only (homeTuition false). No IB or Cambridge/Edexcel school in Mahuva could be
 * confirmed, so stripSchools is empty; clusters reuse the Bhavnagar/Rajkot/Ahmedabad/Vadodara school
 * names already verified on neighbouring city pages. Rendered with the shared CountryLanding layout.
 */
export const mahuva: CitySeoPage = {
  slug: "mahuva",
  countryName: "Mahuva",
  countryNameLong: "Mahuva, Gujarat",
  demonym: "Mahuva",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions bend around the three-week Diwali vacation, the Uttarayan kite weekend, summer heat and any storm warning along the Saurashtra coast",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.0893, longitude: 71.7593 },
  wikipedia: "https://en.wikipedia.org/wiki/Mahuva,_Bhavnagar",
  alternateNames: ["Mahuva Bhavnagar", "Mahua", "Mahuva Bandar"],
  stripSchools: [],

  title: "Mahuva IB & IGCSE Tutors | Private Online Home Tuition",
  metaDescription:
    "Private online home tuition in Mahuva for IB and IGCSE students: Diploma, MYP, PYP, Cambridge and Edexcel, taught one to one, free trial lesson first.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Mahuva",
  heroEyebrow: "ONLINE HOME TUITION FOR IB & IGCSE STUDENTS IN MAHUVA",
  heroSubtitle:
    "Private tuition from home is what most Mahuva parents ask for, and for the IB and IGCSE it can only be delivered online: a live, one-to-one lesson on a laptop, with a tutor who has taught the student's exact subject. Mahuva sits on the Saurashtra coast in Bhavnagar district, among coconut groves and onion dehydration plants, far from any school that teaches an international syllabus, so IB Gram brings the subject specialist to the screen.",
  primaryKeyword: "IB and IGCSE tutors in Mahuva",
  imageAltText: "A Mahuva student on a laptop during a live IB Economics lesson, notebook and diagram sheet beside the keyboard",
  secondaryKeywords: [
    "IB tutor Mahuva",
    "IGCSE tutor Mahuva",
    "IB home tuition Mahuva",
    "IGCSE home tuition Mahuva",
    "IB private tuition Mahuva",
    "IB Maths tutor Mahuva",
    "IGCSE Maths tutor Mahuva",
    "IB Physics tutor Mahuva",
    "IB Chemistry tutor Mahuva",
    "IB Biology tutor Mahuva",
    "IB DP tutor Mahuva",
    "IB MYP tutor Mahuva",
    "IB PYP tutor Mahuva",
    "IGCSE online tuition Mahuva",
    "IB tutor Mahuva Bhavnagar",
    "IB tutor Talaja",
    "IGCSE tutor Saurashtra",
    "online IB tutor Gujarat coast",
    "IB and IGCSE tutors in Mahuva",
  ],

  heroTrustPoints: [
    "Online, one-to-one lessons for Mahuva students; tutors do not come to the house",
    "Tutor picked by subject, level and exam session, not by postcode",
    "A short written summary after each session for parents",
    "Free trial lesson before any rate is agreed",
    "Switch tutor at any time if the pairing is not working",
  ],
  heroStats: [
    { value: "Online", label: "Live one-to-one, from home in Mahuva" },
    { value: "IB + IGCSE", label: "Cambridge and Edexcel covered" },
    { value: "Free trial", label: "Try a lesson before committing" },
    { value: "IST", label: "Indian-time tutors, no midnight calls" },
  ],

  intro: {
    heading: "Studying an international syllabus far from any international school",
    paragraphs: [
      "Mahuva is a working coastal town. Coconut groves line its outskirts, dehydrated onion is processed on an industrial scale, and the wider Saurashtra belt has sent generations of families to East Africa, the United Kingdom and North America. Schooling follows Gujarat's own structure: the state board, a handful of CBSE and private English-medium schools, and in most homes a plan for GUJCET, NEET or engineering.",
      "An IB or IGCSE student in this setting is usually connected to that diaspora. Perhaps the child is back from abroad, perhaps a cousin overseas has made a university plan seem possible, or perhaps the family wants a qualification that travels. Yet no school in the town offers the curriculum we could verify, so the student either boards in a larger city or studies online from home.",
      "That student needs more than a general maths tutor. IB Gram pairs each child with a teacher who has handled the same subject and level, teaches in Indian Standard Time, and works live over video. Every lesson ends with a short written note, the first trial lesson is free, and the rate is written down before anything is booked.",
    ],
  },

  programmesIntro:
    "The four IB programmes differ in age, structure and assessment. This is how we approach each for a student based in Mahuva or the surrounding Bhavnagar district.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Transdisciplinary units of inquiry, where reading, number and curiosity are taught together. Our tutors keep sessions short, concrete and playful, and they report back on what a child can now do independently.",
      countryNote:
        "In Mahuva the PYP child is most often a returnee from abroad. A steady online tutor helps such a child settle in without the distraction of a new syllabus and a new town at once.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Key concepts, related concepts and global contexts, marked against criteria A to D in each subject. Tutors show students how a top-band answer is built and help them plan the Year 5 personal project routine.",
      countryNote:
        "MYP students from the Saurashtra side often come from a different board in Class 8 or 9. Tutors spend the first fortnight translating marks-out-of-100 habits into criterion descriptors.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subject groups, three at HL and three at SL, plus the core of TOK, Extended Essay and CAS. Tutoring covers content, timing, past papers and exam command terms, and stays clear of the assessed work itself.",
      countryNote:
        "A DP student in Mahuva may be following the course through a school in Ahmedabad, Vadodara or abroad. Online tuition keeps a subject expert within reach without a long bus ride to Bhavnagar.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more DP courses are combined with a career-related study and a reflective project. Tutors support the academic courses and help with planning so the practical work does not crowd them out.",
      countryNote:
        "The CP is seldom found on this coast, so requests mostly concern the DP courses within it, often English, Business Management or Mathematics.",
    },
  ],

  subjectsIntro:
    "The subjects below are those requested most often by Mahuva students. If yours is not listed, send us the subject code and we will check whether a tutor is available.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Algebra, calculus and proof for students headed to engineering or pure science, with strong emphasis on Paper 2 time management." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Data, statistics and modelling, suited to students aiming at commerce, business or social science." },
    { name: "Physics", levels: "SL and HL", description: "From kinematics to fields and waves, with the data-analysis and uncertainty questions that catch many students out." },
    { name: "Chemistry", levels: "SL and HL", description: "Bonding, kinetics and organic chemistry, with the skill of writing clear mechanism steps." },
    { name: "Biology", levels: "SL and HL", description: "Molecular biology through ecology, plus the habit of structuring a long answer and reading a data table." },
    { name: "Economics", levels: "SL and HL", description: "Micro, macro and development economics with diagrams drawn cleanly and evaluation written precisely." },
    { name: "Business Management", levels: "SL and HL", description: "Decision tools, finance calculations and case-study answers, useful for students from trading families." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Systems thinking and case studies, with local coastal and agricultural examples welcome." },
    { name: "Geography", levels: "SL and HL", description: "Population, resource and hazard units, with fieldwork skills and extended answers." },
    { name: "History", levels: "SL and HL", description: "Source analysis and essay structure for the prescribed topics and the twentieth-century themes." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Analysis of unseen texts and set works, and preparation for the individual oral." },
    { name: "English B", levels: "SL and HL", description: "Language acquisition for students whose first language is Gujarati or Hindi." },
    { name: "Hindi B", levels: "SL and HL", description: "Reading, writing and speaking for students who want Hindi as their second language." },
    { name: "Gujarati", levels: "SL", description: "Support for students studying their home language through a school-supported arrangement, where the school offers it." },
    { name: "Theory of Knowledge", levels: "Core", description: "Coaching on knowledge questions and the exhibition, without writing the essay for the student." },
  ],
  igcseSubjectsIntro:
    "Our IGCSE tutoring covers both Cambridge and Pearson Edexcel. The two boards write different papers, so a tutor starts by confirming the syllabus code your school has entered your child for.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core and Extended", description: "Number, algebra, geometry and statistics, with extra time on problem-solving questions in Extended." },
    { name: "Additional Mathematics", levels: "Cambridge", description: "Bridging content for students who aim at IB Mathematics AA HL or A Level Mathematics later." },
    { name: "Physics", levels: "Core and Extended", description: "Formula handling, practical skills and graph questions, in either the Cambridge or Edexcel layout." },
    { name: "Chemistry", levels: "Core and Extended", description: "Atomic structure, reactions, rates and organic chemistry, with clear balancing and calculation routines." },
    { name: "Biology", levels: "Core and Extended", description: "Living organisms, genetics and ecosystems, with data and diagram questions practised frequently." },
    { name: "English First Language", levels: "Cambridge and Edexcel", description: "Writing for different audiences, summary skills and close reading of unseen extracts." },
    { name: "English as a Second Language", levels: "Cambridge", description: "Reading, writing, listening and speaking for students who use Gujarati at home." },
    { name: "Business Studies", levels: "Cambridge", description: "Marketing, operations and finance, with short case questions and calculations." },
    { name: "Accounting", levels: "Cambridge", description: "Bookkeeping, ledgers and financial statements, popular in business families." },
    { name: "Computer Science", levels: "Cambridge", description: "Algorithms, programming logic and hardware theory for the two papers." },
    { name: "Geography", levels: "Cambridge and Edexcel", description: "Physical and human themes, with case studies and map skills." },
    { name: "Hindi as a Second Language", levels: "Cambridge", description: "Reading and writing support for bilingual students." },
  ],

  regionsTitle: "Where our Mahuva students live",
  regionsIntro:
    "All lessons are taken online from home, so no tutor needs to reach a particular lane. The notes below describe how each part of town and its surrounding villages tends to shape study time.",
  regions: [
    { name: "Station Road and the railway junction", note: "The compact town centre around Mahuva Junction. Families here are close to shops and tuition lanes, so after-school slots are easy to fix, usually after 6 pm." },
    { name: "Bus stand area", note: "A crowded commercial stretch with students arriving from nearby villages. Evening online sessions save students the last bus home." },
    { name: "Bhavnagar Road", note: "The highway side of town where many trading families live. Weekend mornings suit students whose parents run shops until late." },
    { name: "Mahuva Bandar", note: "The coastal fishing and port side. Storm warnings and the monsoon matter most here, so we keep a reserve slot each week." },
    { name: "Coconut-grove outskirts", note: "Farm households on the town's edge, where a parent may be in the fields until dusk. Sessions are set once the day's work and school transport are done." },
    { name: "Talaja", note: "A neighbouring town with its own college culture. Students there join Mahuva families in asking for online specialists." },
    { name: "Gopnath", note: "A seaside village known for its temple and cliffs, where school choices are limited and internet can vary." },
    { name: "Rajula", note: "A coastal town to the south, near Pipavav port, where some families have shipping and port jobs." },
    { name: "Savarkundla", note: "An inland town on the Amreli side whose students often look at Bhavnagar and Rajkot for options." },
    { name: "Palitana", note: "The Jain pilgrimage town nearby, where study timetables adjust around major religious events." },
  ],

  schoolClusters: [
    {
      city: "Mahuva and eastern Saurashtra",
      note: "We could not confirm any IB World School or Cambridge or Edexcel centre in Mahuva, so none is named. Local schools follow the Gujarat board, CBSE or CISCE.",
      schools: [],
    },
    {
      city: "Nearby: Rajkot",
      note: "The closest confirmed international option in Saurashtra, reached by a long road journey, so it matters mainly to families who consider boarding.",
      schools: ["The Galaxy School"],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "Gujarat's main cluster of IB and Cambridge schools, several hours away by road or rail.",
      schools: ["Ahmedabad International School", "Calorx Olive International School"],
    },
    {
      city: "Nearby: Vadodara",
      note: "Another option for families willing to relocate within Gujarat.",
      schools: ["Navrachana International School"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent tutoring service. It is not connected to the International Baccalaureate Organization, Cambridge, Pearson or the schools named on this page, which appear only to describe the wider region. Please check programmes and admissions with each school directly.",

  modesIntro:
    "Tutors do not come to houses in Mahuva, because in-person home tuition is offered only in Gurugram and parts of Delhi NCR. Here, private tuition from home means online lessons in one of three shapes.",
  modes: [
    {
      title: "Steady weekly lessons",
      description:
        "One hour, once or twice a week, with the same tutor, for a student who wants regular support through the year.",
      bullets: [
        "Fixed day and time, agreed with your school hours",
        "Shared whiteboard and live past-paper practice",
        "Short written summary after each lesson",
        "Can pause for Diwali vacation or family travel",
      ],
    },
    {
      title: "Pre-exam push",
      description:
        "A denser schedule for the weeks before mocks or the May and November sessions.",
      bullets: [
        "Timed papers followed by marked feedback",
        "Weak-topic revision lists each week",
        "Extra slots on weekends",
        "Ends when the exam series finishes",
      ],
    },
    {
      title: "Bridging block for new entrants",
      description:
        "A compact set of lessons for a student who has just moved from the Gujarat board or from abroad into an IB or IGCSE course.",
      bullets: [
        "Diagnostic session to find the gap",
        "Vocabulary and command-term training",
        "Targeted reading and writing practice",
        "Smooth hand-over to weekly lessons",
      ],
    },
  ],

  sections: [
    {
      heading: "Which schools near Mahuva teach the IB or IGCSE?",
      paragraphs: [
        "None in Mahuva itself, as far as we could confirm. Schools in the town run the Gujarat board curriculum, with a small number of CBSE options, and we found no IB World School or Cambridge or Edexcel centre in the directories we checked. We prefer to say this plainly rather than fill the page with names we cannot stand behind.",
        "The nearest confirmed international schools lie in Rajkot, Ahmedabad and Vadodara, each a long journey away. For a student in Mahuva these are relevant in two ways. They are a boarding or relocation option, and they show the wider standard that the curriculum is taught to.",
        "A common pattern on this coast is that the family holds a link abroad, and the student completes an IB or IGCSE course through an online school or a school in a metro, while living at home. The town has no classroom for the syllabus, so every hour of subject help arrives by video.",
        "If you know a school near Mahuva that teaches either curriculum, tell us and we will check and add it. Until then, this page lists only what we can confirm.",
      ],
    },
    {
      heading: "What changes for a Gujarat board student who moves to the IB or IGCSE?",
      paragraphs: [
        "A Gujarat board student moving to an international curriculum faces a change of habit more than a change of difficulty. The state board rewards textbook recall, frequently in Gujarati, while the IB and IGCSE ask for explanation, reasoning and data in English, marked against published criteria.",
        "The table compares the four routes that Mahuva families meet. Use it as a rough guide, since individual schools add their own rules and calendars.",
        "The hardest shift is language. A student who understands the science in Gujarati may still struggle to write a six-mark explanation in English under time. Tutors plan vocabulary work into the first weeks, using the student's own notes rather than a generic list.",
        "Mathematics usually transfers well, but the presentation differs. IB and IGCSE examiners give marks for method, so a correct answer with no working loses points. We coach students to show reasoning even when the answer seems obvious.",
      ],
      table: {
        caption: "Board routes open to a Mahuva family",
        columns: ["Route", "How it is marked", "Who usually chooses it", "Common next step"],
        rows: [
          ["Gujarat board (GSEB)", "State exams, often in Gujarati, with textbook-based questions", "Most local families", "GUJCET, NEET, state colleges"],
          ["CBSE", "National papers in English or Hindi, with case-based items", "Families expecting transfers or national exams", "JEE Main, NEET, CUET-UG"],
          ["IGCSE (Cambridge or Edexcel)", "Externally set papers with structured and practical-skills questions", "Students online or via a city school", "IB Diploma, A Level, study abroad"],
          ["IB Diploma", "Six subjects plus TOK, EE and CAS", "Families with overseas plans", "Universities abroad, AIU-recognised Indian entry"],
        ],
      },
    },
    {
      heading: "How much does IB or IGCSE tuition cost for a student in Mahuva?",
      paragraphs: [
        "We do not list a price on this page, and we never ask a family to book before it has a rate in writing. Quotes vary because the work varies, and the list below shows what moves them.",
        "Programme and level come first. A tutor who teaches IB Chemistry HL has a different workload from one supporting IGCSE Core Geography, and the hourly rate reflects the preparation, marking and subject depth involved.",
        "Next comes how often you meet. Some Mahuva students take one weekly lesson for a year, while others take three slots a week for six weeks before an exam. The second pattern costs more in a month, though it may cost less across the year.",
        "Finally there is tutor experience with the specific syllabus. A teacher who has guided many candidates through a particular course will often be quoted differently from someone who joined recently. Because lessons are online, no travel cost is added, and the free trial lesson lets you judge value before you pay.",
      ],
      bullets: [
        "Programme and level: HL, SL, Core or Extended",
        "Rarity of the subject and size of the tutor pool",
        "Lessons per week and length of each",
        "Tutor experience with the exact syllabus",
        "Short exam push or year-long support",
      ],
    },
    {
      heading: "Is online home tuition better than a centre or a local tutor in Mahuva?",
      paragraphs: [
        "It depends on the student, but for the IB and IGCSE the match between tutor and syllabus matters most, and Mahuva's tuition market is built around the Gujarat board and entrance exams. A local centre can teach Class 12 Physics well and still be unfamiliar with an IB Physics HL data question.",
        "Online one-to-one means the lesson is private and the tutor is chosen for the subject, not for distance. It also removes the bus, the ride to Bhavnagar and the evening in traffic, so more of the hour is teaching.",
        "A local general tutor remains useful for younger students who need company at the desk, and self-study works for a motivated student with good materials. The table sets out where each approach helps or falls short.",
        "If your child already has a strong school and only needs a little extra help, a short online block may be enough. If there is no school support at all, weekly lessons across the year are usually the safer plan.",
      ],
      table: {
        caption: "Support options for IB and IGCSE students in Mahuva",
        columns: ["Option", "What it does well", "Where it falls short", "Suited to"],
        rows: [
          ["Online one-to-one", "Specialist tutor, private lesson, written feedback", "Needs a steady connection and a quiet corner", "DP, MYP and IGCSE students wanting depth"],
          ["Local coaching centre", "Routine and classroom energy", "Built for Gujarat board and entrance exams", "Board-exam practice, not IB specifics"],
          ["General private tutor", "Personal attention near home", "May not know IB command terms or IGCSE papers", "Younger students and basic content"],
          ["Self-study", "Flexible, inexpensive", "No marking of written answers", "Top-up revision alongside other help"],
        ],
      },
    },
    {
      heading: "What does the school year look like around Diwali, Uttarayan and the monsoon?",
      paragraphs: [
        "Gujarat's calendar shapes study more than most parents expect. The Diwali vacation runs for about three weeks, Navratri fills evenings with garba, and Uttarayan on 14 January turns rooftops into kite grounds. A plan that ignores those weeks will slip.",
        "Weather adds its own risk. Mahuva lies on the coast, where the monsoon arrives in June and storms can cut power, and memories of a major cyclone in 2021 make families alert to warnings. Summer heat in April and May is intense, so exam-season sessions often move to early mornings or late evenings.",
        "IB exams run in May and November, and IGCSE papers in the same months plus October and November for some boards. A student's school decides which applies, so we confirm before planning.",
        "We use the Diwali break as a revision window for students who want one, and pause lessons entirely for families who travel. The table gives a rough calendar that we adjust to the student.",
      ],
      table: {
        caption: "A sample study year for a Mahuva IB or IGCSE student",
        columns: ["Months", "Academic focus", "Local factor", "Our usual plan"],
        rows: [
          ["June to August", "New units and foundations", "Monsoon and the Janmashtami festival", "Weekly lessons, gap diagnosis"],
          ["September to October", "First internal tests and mocks", "Navratri evenings", "Earlier slots, lighter homework"],
          ["November", "IB and IGCSE November series", "Post-Diwali return to school", "Targeted past-paper sessions"],
          ["December to January", "Mock exams and Internal Assessment drafts", "Uttarayan on 14 January", "Schedule around the kite weekend"],
          ["February to May", "Final revision and the May series", "Heat and exam stress", "Morning slots, timed papers, rest built in"],
        ],
      },
    },
    {
      heading: "Where can a Mahuva student go after the IB or IGCSE?",
      paragraphs: [
        "An IB Diploma holder can apply to Indian universities, since the Association of Indian Universities recognises it as equivalent to Class 12. CUET-UG accepts applicants from any board, and many central and private universities take IB scores directly.",
        "Medicine and engineering need care. NEET and JEE Main have published eligibility conditions, and IB or IGCSE students should read the current brochure for subject requirements and equivalence documents. Ask early rather than after results.",
        "Gujarat students have long looked overseas, and a Mahuva family with relatives in the United Kingdom, Kenya or the United States will often focus there. IB points and IGCSE results feed into those applications, along with predicted grades from the school.",
        "Within India, Mahuva students look to Ahmedabad, Vadodara, Pune and Mumbai, as well as Gujarat's own universities. Our tutors do not choose the destination or promise admission. They improve the subject grades that keep doors open.",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences taught online to a Mahuva student?",
      paragraphs: [
        "IB Mathematics has two routes, Analysis and Approaches for algebra and calculus lovers, and Applications and Interpretation for students who prefer data and modelling. Both come at SL and HL, and the choice changes the university courses that stay open.",
        "Students from a Gujarat board background are usually fluent with numbers. What they need is practice explaining steps, using calculator features where permitted, and managing time across papers. Tutors therefore spend early lessons on method marks and the wording of command terms.",
        "In Physics, Chemistry and Biology the lessons alternate between content and exam practice. A student might cover organic reaction mechanisms in the first half of a session, then answer a timed data question in the second, with the tutor marking live.",
        "Practical work is a concern for remote learners. We coach planning, data handling and evaluation using the student's own lab records, and leave the assessed Internal Assessment to the student.",
      ],
      bullets: [
        "Mathematics AA: calculus, sequences, proof and functions",
        "Mathematics AI: statistics, finance and modelling with technology",
        "Physics: mechanics, waves, electricity, atomic physics",
        "Chemistry: organic reactions, acids and bases, energetics",
        "Biology: genetics, physiology, ecology and data questions",
      ],
    },
    {
      heading: "How do IGCSE Core and Extended papers differ, and what should students choose?",
      paragraphs: [
        "Core papers limit the top grade available, while Extended papers allow the full range. For a student who plans to continue to the IB Diploma or A Level, Extended in mathematics and the sciences is usually the sensible route.",
        "Subject choice follows ambition. A student bound for engineering or medicine should build a strong base in Mathematics, Physics, Chemistry and Biology, while one from a trading family may pair Business Studies and Accounting with Economics. Gujarati-speaking families may also consider Hindi as a second language.",
        "Cambridge and Edexcel offer similar subjects but write papers differently. We check the exact code at the first lesson and train on past papers of that board, since practising the wrong style costs marks.",
        "Most students take two years over an IGCSE course, so one lesson a week in each of two or three subjects is typical, with extra sessions before the exams. A student who joins late can use the bridging block described earlier.",
      ],
    },
  ],

  process: [
    { title: "Tell us what your child studies", description: "Share class, board, subject, level and exam session by WhatsApp or email so we begin from the real syllabus." },
    { title: "See a tutor who has taught it", description: "We send a profile of a tutor who has taught that exact course, with their experience and open slots." },
    { title: "Try a free lesson", description: "A live online session on a topic from your child's own notes, with no payment and no obligation." },
    { title: "Receive the rate in writing", description: "You get the price, lesson length and weekly schedule before any paid session begins." },
    { title: "Learn weekly, review in writing", description: "Lessons start, a note follows each one, and a change of tutor is available whenever you want it." },
  ],

  whyPoints: [
    { title: "A tutor chosen for the syllabus", description: "A match is made on programme, subject and level, so a child studying IB Economics HL meets an Economics HL teacher." },
    { title: "Lessons on Indian time", description: "Our tutors live in India, so sessions fit an ordinary school evening rather than an overseas clock." },
    { title: "Clear about online delivery", description: "We tell Mahuva families openly that no tutor visits homes here, and that in-person sessions exist only in Gurugram and parts of Delhi NCR." },
    { title: "Help that keeps the work yours", description: "Tutors teach, question and give feedback, yet they do not author assessed pieces such as an IA, EE or TOK essay." },
    { title: "Parents stay informed", description: "After each session a short summary tells you what the lesson covered and what should be practised next." },
    { title: "Easy to start, easy to leave", description: "The first lesson is free, rates are written down, and moving to a different tutor is always possible." },
  ],

  tutorsIntro:
    "Every tutor below is based in India and teaches online in IST. Read the subjects and levels each has taught, and we will suggest the one closest to your child's syllabus.",

  faqs: [
    {
      question: "Can I get IB or IGCSE home tuition in Mahuva?",
      answer: "You can get online home tuition. IB Gram tutors teach Mahuva students live over video, one to one, from the student's own desk. They do not travel to homes in Mahuva, since in-person home tuition runs only in Gurugram and parts of Delhi NCR. The tutor is matched to the subject and level, and the first trial lesson is free. Many families find the online format practical on this coast, where a good specialist is far away.",
    },
    {
      question: "Is there an IB school in Mahuva or Bhavnagar district?",
      answer: "We could not confirm one. The directories we checked show no IB World School and no Cambridge or Edexcel centre in Mahuva, and our Bhavnagar page tells the same story for the city. The nearest confirmed international schools on this page are in Rajkot, Ahmedabad and Vadodara. If you know a nearer school, send us its name and we will verify it before adding it.",
    },
    {
      question: "What does IB or IGCSE tuition in Mahuva cost?",
      answer: "No price is published here, and every rate is written down before booking. It depends on the programme, the level, the subject, how many lessons you take each week, and the tutor's experience. Online delivery means there is no travel element. Message us with the subject and level for a written quote. The first lesson is a free trial, so you can judge the value before any payment.",
    },
    {
      question: "My child studies in Gujarati medium. Can the IB or IGCSE still work?",
      answer: "Yes, though it needs planning. IB and IGCSE papers are written in English, so a student used to Gujarati-medium teaching needs vocabulary and writing practice alongside the content. Tutors start with the student's own notes, build subject words gradually, and train six-mark explanations aloud before on paper. Most students settle within a term, and mathematics usually transfers with little difficulty.",
    },
    {
      question: "Do tutors write the IA, Extended Essay or TOK essay?",
      answer: "No. Tutors coach and never write assessed work. They can explain the criteria, discuss research questions, and comment on a student's own draft. They do not write, rewrite or supply content for an Internal Assessment, Extended Essay, TOK essay or coursework. This protects the student from academic misconduct procedures and keeps the final work honestly theirs.",
    },
    {
      question: "Which IGCSE boards are covered?",
      answer: "Both Cambridge International and Pearson Edexcel. We confirm the board and syllabus code before the first lesson, for instance Cambridge 0580 or Edexcel 4MA1 for mathematics, then work from past papers of that board. If you are unsure which board your child is entered for, check the exam entry slip or ask the school office and send us the details.",
    },
    {
      question: "What are the lesson timings for Mahuva students?",
      answer: "Lessons run in Indian Standard Time, usually on weekday evenings after school and across weekend days. Tutors are based in India, so there are no midnight sessions. We avoid clashes with Navratri evenings and the Diwali vacation when families ask, and we move sessions earlier in the hottest exam weeks. The exact slot is agreed with you before the first paid lesson.",
    },
    {
      question: "What do we need at home for online lessons?",
      answer: "A laptop or tablet with a camera and microphone, a stable internet connection, and a quiet corner. A second device or a phone hotspot is a helpful backup when coastal weather affects the signal. We use a shared whiteboard and screen-shared past papers, so a bigger screen is easier than a phone. Headphones help with background noise from a busy household.",
    },
    {
      question: "How do NEET, JEE and CUET-UG work for an IB or IGCSE student?",
      answer: "Eligibility depends on subjects and equivalence, and the rules are updated, so read the current official brochure. The IB Diploma is recognised as Class 12 equivalent by the Association of Indian Universities, and CUET-UG is open to all boards. For NEET and JEE Main, confirm the subject and mark conditions. Our tutors teach the subject, and they do not promise admission or ranks.",
    },
    {
      question: "Do you teach IB PYP and MYP in Mahuva?",
      answer: "Yes, we cover PYP and MYP as well as the Diploma. PYP tutoring supports reading, number and inquiry in Classes 1 to 5, and MYP tutoring supports subjects from Class 6 to 10, including criterion-based assessment. Because the programmes are uncommon locally, many families are returnees or follow an online school, and a tutor who knows the programme's vocabulary makes the transition easier.",
    },
    {
      question: "What if the first tutor is not a good match?",
      answer: "Tell us and we will find another at no extra cost. A first match is not always right, and pace or style can make a real difference to a student. You do not need a long explanation; a line about what felt off is enough. The free trial lesson is meant to reduce that risk, but a change of tutor remains available at any point.",
    },
    {
      question: "Will a tutor come to our house in Mahuva or Bhavnagar?",
      answer: "No. IB Gram does not send tutors to homes in Mahuva, Bhavnagar or elsewhere in Gujarat. Home visits run only in Gurugram and parts of Delhi NCR. Private tuition from home for Mahuva students means online, one-to-one lessons taken on a laptop at home. We state this openly so that nobody is left waiting for a visit that will not happen.",
    },
    {
      question: "How does the free trial lesson work?",
      answer: "It is a live online session, usually half an hour to forty-five minutes, on a real topic from your child's syllabus. The tutor asks what the student finds hard, explains one idea and sets a short exercise. Parents may sit in. There is no payment and no commitment, and you receive a written summary afterwards, plus a written rate if you want to continue.",
    },
    {
      question: "What happens if a storm or power cut affects a lesson?",
      answer: "We reschedule without a penalty. Saurashtra's coast can face strong storms and power failures, and families remember the damage of the 2021 cyclone. Tell us as soon as you can, and the tutor offers another slot that week. Shared notes keep the student on track, and in exam months we may add a short catch-up session to cover what was lost.",
    },
    {
      question: "How can we start?",
      answer: "Send a WhatsApp message to +91 7439 368 115 or an email to support@ibgram.com with your child's class, programme, subject and exam session. We reply with a tutor profile and a trial time, normally within a day. After the trial you receive a written rate, and you can begin weekly lessons only if you are satisfied. The first step is free.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "See where else IB Gram teaches online and how the service works." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Explore the IB subject tutors and how each programme is taught." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Pearson Edexcel subject guides." },
    { label: "IB Diploma programme", href: "/programmes/dp/", description: "Understand DP subjects, the core and exam preparation." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, personal project and eAssessment guidance." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "How inquiry learning works in the primary years." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "Analysis and Approaches or Applications and Interpretation." },
    { label: "Tutor profiles", href: "/tutors/", description: "Read about the tutors and the levels they have taught." },
    { label: "Contact us", href: "/contact-us/", description: "Message or WhatsApp to book a free trial lesson." },
    { label: "IB and IGCSE tutors in Bhavnagar", href: "/bhavnagar/", description: "The page for the district headquarters, the nearest large city." },
    { label: "IB and IGCSE tutors in Amreli", href: "/amreli/", description: "For families on the neighbouring Amreli side of the Saurashtra coast." },
    { label: "IB and IGCSE tutors in Rajkot", href: "/rajkot/", description: "The page for Saurashtra's largest city and its confirmed school." },
  ],

  closingHeading: "Book a free online lesson from Mahuva",
  closingBody:
    "Mahuva students deserve a subject specialist as much as any child in a metro, and online lessons make that possible from the family's own home. Send us the subject, level and exam session, and we will propose a tutor and a trial in Indian time. Nothing is charged for the first lesson, the rate arrives in writing, and you can change tutor whenever you like. WhatsApp +91 7439 368 115 or email support@ibgram.com.",
};
