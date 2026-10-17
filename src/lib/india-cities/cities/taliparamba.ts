import type { CitySeoPage } from "../types";

/**
 * /taliparamba/ - IB and IGCSE tutoring page for Taliparamba, Kannur district, Kerala (North
 * Malabar). Online one-to-one only (homeTuition false). No IB or Cambridge/Edexcel school in
 * Taliparamba could be confirmed, so stripSchools is empty; clusters use Kochi and Mangaluru names
 * already verified on neighbouring city pages. Rendered with the shared CountryLanding layout.
 */
export const taliparamba: CitySeoPage = {
  slug: "taliparamba",
  countryName: "Taliparamba",
  countryNameLong: "Taliparamba, Kerala",
  demonym: "Taliparamba",
  state: "Kerala",
  stateCode: "IN-KL",
  flagCode: "in",
  countryCode: "IN",
  region: "Kerala, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We work around the June to September monsoon downpours, the Theyyam season that fills North Malabar evenings, Onam and Vishu, and your child's own school timetable",
  lastUpdated: "2026-09-21",
  geo: { latitude: 12.0367, longitude: 75.36 },
  wikipedia: "https://en.wikipedia.org/wiki/Taliparamba",
  alternateNames: ["Thaliparamba", "Taliparambu", "Trichambaram"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Taliparamba | Online Private Tuition",
  metaDescription:
    "Private online tuition in Taliparamba for IB and IGCSE: Diploma, MYP, PYP, Cambridge and Edexcel, live one to one from home in Kannur, with a free trial first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Taliparamba",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR TALIPARAMBA AND NORTH MALABAR",
  heroSubtitle:
    "Private tuition at home in Taliparamba for an IB or IGCSE student has to arrive by screen: IB Gram teaches live, one to one, on a laptop, with a tutor who has taught the student's exact subject, because tutors do not visit homes in Kerala. The town is known for the Rajarajeshwara temple, a high literacy rate and a large Gulf-linked community, yet its own school list does not include a confirmed IB or Cambridge school.",
  primaryKeyword: "IB and IGCSE tutors in Taliparamba",
  imageAltText: "A Taliparamba student revising IB Chemistry at a desk beside a rain-streaked window during a live online tutoring session",
  secondaryKeywords: [
    "IB tutor Taliparamba",
    "IGCSE tutor Taliparamba",
    "IB home tuition Taliparamba",
    "IGCSE home tuition Taliparamba",
    "IB private tuition Taliparamba",
    "IB Maths tutor Taliparamba",
    "IGCSE Maths tutor Taliparamba",
    "IB Physics tutor Taliparamba",
    "IB Chemistry tutor Taliparamba",
    "IB Biology tutor Taliparamba",
    "IB DP tutor Taliparamba",
    "IB MYP tutor Taliparamba",
    "IB PYP tutor Taliparamba",
    "IGCSE online tuition Taliparamba",
    "IB tutor Kannur district",
    "IB tutor Parassinikkadavu",
    "IGCSE tutor Payyanur",
    "online IB tutor North Malabar",
    "IB and IGCSE tutors in Taliparamba",
  ],

  heroTrustPoints: [
    "Live online lessons for Taliparamba students; no tutor travels to a home in Kerala",
    "Tutors chosen by programme, subject and level, not by distance",
    "A short written note after every session",
    "First lesson free, with the rate put in writing before you book",
    "A different tutor on request if the fit is wrong",
  ],
  heroStats: [
    { value: "Online", label: "Private lessons from home" },
    { value: "DP to PYP", label: "Plus Cambridge and Edexcel IGCSE" },
    { value: "Free trial", label: "Judge the fit before paying" },
    { value: "IST", label: "Tutors in India, evening slots" },
  ],

  intro: {
    heading: "A literate, Gulf-connected town with no international school of its own",
    paragraphs: [
      "Taliparamba is a municipality in Kannur district about twenty-two kilometres north of Kannur city, close to the Valapattanam and Kuppam rivers and the national highway that runs down the Malabar coast. It is a temple town, a college town, and increasingly a textile one, with a Kinfra park set up in 2010. Its literacy rate is among the highest in India, and the culture of studying hard is part of daily life.",
      "Families here are also used to looking outwards. North Malabar has long sent workers and professionals to the Gulf, and many Taliparamba homes have a parent in Dubai, Doha or Muscat, or a parent who has just returned. When those families think about a child's schooling, an international qualification that can cross borders is a natural question, especially for a child who studied an IB or Cambridge course abroad.",
      "What the town lacks is a school that teaches it, at least one that we could confirm. So the student follows the curriculum elsewhere or online, and the gap is in the evening hours at home. IB Gram fills it with a tutor matched to the course, taught live in Indian time, with a written note after each lesson and a free first session.",
    ],
  },

  programmesIntro:
    "The IB offers four programmes that a Taliparamba family might meet. Each needs a slightly different tutoring approach, described below.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "An inquiry approach that connects subjects through themes. Tutors give young children brief, varied activities: reading together, working with numbers, asking questions and explaining answers back in their own words.",
      countryNote:
        "A PYP child in Taliparamba is typically back from the Gulf, where the programme is common in expatriate schools. Weekly online lessons keep the skills steady while the child adjusts to a Malayalam-speaking neighbourhood.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Concepts, contexts and criteria across eight subject groups. Tutors show what each criterion band looks like in practice and help with the structure of written tasks and the Year 5 personal project routine.",
      countryNote:
        "Gulf returnees often arrive mid-MYP. A tutor who knows the programme's language helps the student keep their place even when the local school follows the Kerala state syllabus or CBSE.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three HL and three SL subjects plus TOK, the Extended Essay and CAS. Tutoring focuses on subject content, past-paper technique and exam command terms, never the assessed components themselves.",
      countryNote:
        "For a Taliparamba family, the DP is usually completed at a school outside Kerala or abroad, while a student lives here in the holidays or studies online. Specialist tutoring is most useful in Mathematics and the sciences.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller set of DP courses alongside career-related study and a reflective project. Tutors help the student manage time across the academic and practical strands.",
      countryNote:
        "The CP is rare in this part of Kerala. Requests usually concern one or two DP courses inside it, such as English, Business Management or Mathematics.",
    },
  ],

  subjectsIntro:
    "Students around Taliparamba ask most often for the subjects below. If yours is missing, tell us the course and level and we will look for a tutor.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, functions, vectors and proof, a frequent choice for aspiring engineers and scientists." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, modelling and technology, suited to students in commerce, economics and medicine." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics through atomic and nuclear physics, with heavy practice on data-based and uncertainty questions." },
    { name: "Chemistry", levels: "SL and HL", description: "Calculations, organic mechanisms and equilibrium, with clear writing of reaction steps." },
    { name: "Biology", levels: "SL and HL", description: "Cells, genetics, physiology and ecology, a popular route for students aiming at medicine." },
    { name: "Economics", levels: "SL and HL", description: "Diagrams, evaluation and real-world examples, including remittance economies familiar to Gulf families." },
    { name: "Business Management", levels: "SL and HL", description: "Finance tools, strategy and case-study answers for students from trading and textile families." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming, systems and algorithms in the two theory papers." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Coastal and monsoon ecosystems and sustainability case studies close to home." },
    { name: "Psychology", levels: "SL and HL", description: "Research methods and the approaches to behaviour, with extended-response structure." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Analysis of unseen texts, written tasks and the individual oral." },
    { name: "English B", levels: "SL and HL", description: "Language acquisition for students who think first in Malayalam or Arabic." },
    { name: "Malayalam A", levels: "SL", description: "Support for students who take their home language through a school-supported arrangement." },
    { name: "Arabic B", levels: "SL and HL", description: "Reading and writing support for students back from Gulf schools where Arabic was taught." },
    { name: "Theory of Knowledge", levels: "Core", description: "Coaching on knowledge questions and the exhibition; the essay itself stays with the student." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE are separate syllabuses, so we check the exact code before lesson one. These are the subjects Taliparamba families request.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core and Extended", description: "Algebra, geometry, trigonometry and statistics, with timed Extended papers for strong students." },
    { name: "Additional Mathematics", levels: "Cambridge", description: "Calculus and functions for students who want a head start on IB or A Level mathematics." },
    { name: "Physics", levels: "Core and Extended", description: "Forces, energy, electricity and waves, with practical-skills and graph questions." },
    { name: "Chemistry", levels: "Core and Extended", description: "Structure, reactions, rates and organic basics, plus qualitative analysis." },
    { name: "Biology", levels: "Core and Extended", description: "Organisms, genetics and ecosystems, with long-answer and diagram practice." },
    { name: "English First Language", levels: "Cambridge and Edexcel", description: "Writing for audience and purpose, summary work and close reading." },
    { name: "English as a Second Language", levels: "Cambridge", description: "Four-skills support for students whose home language is Malayalam." },
    { name: "Computer Science", levels: "Cambridge", description: "Logic, pseudocode and programming practice." },
    { name: "Economics", levels: "Cambridge and Edexcel", description: "Structured and data-response questions with precise definitions." },
    { name: "Business Studies", levels: "Cambridge", description: "Case-based questions with finance and operations calculations." },
    { name: "Accounting", levels: "Cambridge", description: "Ledgers, statements and ratios for commerce-minded students." },
    { name: "Arabic as a Foreign Language", levels: "Cambridge", description: "Language support for returnees who studied Arabic in the Gulf." },
  ],

  regionsTitle: "Taliparamba and the Kannur belt around it",
  regionsIntro:
    "Every lesson is online, so the tutor never needs a route map. These notes describe how different parts of the town and its neighbours affect study hours.",
  regions: [
    { name: "Taliparamba town centre", note: "The core around the temple and the market, where school buses start early. After-school slots normally begin around 5:30 pm." },
    { name: "Kuppam", note: "The riverside area on the town's edge, where monsoon floods occasionally disrupt the road. A reserve make-up slot is useful in July and August." },
    { name: "Pariyaram", note: "Known for its medical college. Families here often include doctors and nurses on shift, so evening and weekend slots suit them." },
    { name: "Parassinikkadavu", note: "A few kilometres south, known for a popular temple and snake park. Students here often join Taliparamba classes and benefit from not commuting." },
    { name: "Mayyil", note: "A rural belt to the east with limited tuition options and households that value a subject specialist on screen." },
    { name: "Kurumathur", note: "A quieter residential area whose students may study in Kannur city. Online lessons spare a second commute." },
    { name: "Alakode", note: "A hill town further inland where mobile data can be patchy, so we recommend a hotspot backup." },
    { name: "Sreekandapuram", note: "A small town in the eastern hills, with students who travel to Taliparamba for school." },
    { name: "Payyanur", note: "The larger town about twenty kilometres north, with families who compare options in both places." },
    { name: "Kannur city", note: "The district headquarters, about twenty-two kilometres south, where several families work and students take exams." },
  ],

  schoolClusters: [
    {
      city: "Taliparamba and Kannur district",
      note: "No IB World School or Cambridge or Edexcel centre in Taliparamba could be confirmed, so none is named. Local schools follow the Kerala state syllabus, CBSE or ICSE.",
      schools: [],
    },
    {
      city: "Nearby: Mangaluru",
      note: "Around 150 kilometres up the coast, Mangaluru has confirmed Cambridge IGCSE schools, a realistic option for some North Malabar families.",
      schools: ["The Bharath Academy", "TLC Cambridge International School", "The Cambridge International School, Adyar"],
    },
    {
      city: "Nearby: Kochi",
      note: "Kerala's main group of confirmed IB and Cambridge schools, several hours south by road or rail.",
      schools: ["TIPS Kochi", "Cochin International School", "The Choice School, Ambalamugal"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent tutoring service. It has no connection with the IBO, Cambridge, Pearson or the schools named on this page, which are listed only to describe the wider region. Always confirm programmes and admissions with the school.",

  modesIntro:
    "Tutors do not come to houses in Taliparamba, because in-person tuition is run only in Gurugram and parts of Delhi NCR. Taliparamba families choose among three online formats.",
  modes: [
    {
      title: "Regular weekly lessons",
      description:
        "A standing slot with one tutor and one subject, taken at the family's desk through the school year.",
      bullets: [
        "Same tutor and time each week",
        "Live whiteboard and screen-shared past papers",
        "Written summary after every lesson",
        "Easy pause during Onam or a Gulf visit",
      ],
    },
    {
      title: "Exam-window sessions",
      description:
        "A heavier schedule in the weeks before mocks and the May and November exams.",
      bullets: [
        "Two or three timed-paper lessons a week",
        "Mark-scheme analysis after each paper",
        "Topic checklists that shrink week by week",
        "Stops when the exam series ends",
      ],
    },
    {
      title: "Returnee re-entry block",
      description:
        "A short series for a child who has come back from a Gulf school and needs to settle into a new syllabus or fill gaps.",
      bullets: [
        "Diagnostic lesson to find the gaps",
        "Bridge from the previous school's content",
        "Vocabulary and format practice",
        "Hand-over to weekly lessons",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Taliparamba or Kannur?",
      paragraphs: [
        "We could not confirm an IB World School or a Cambridge or Edexcel centre in Taliparamba, and we have not named one for Kannur district either. Schools in town follow the Kerala state syllabus, CBSE or ICSE, and there are well-known aided and private institutions among them. The town's pride lies in its colleges and its literacy figures rather than in an international campus.",
        "The closest verified international schools are in Mangaluru, where several run Cambridge IGCSE, and in Kochi, where TIPS Kochi, Cochin International School and The Choice School are listed. Both are a long way from Taliparamba, which makes them a relocation or boarding question rather than a daily option.",
        "In practice, a Taliparamba student studying the IB or IGCSE is often either a Gulf returnee continuing a course, or a student enrolled in an online or distance school. The curriculum lives in a browser and a stack of past papers, and the missing piece is a person who can explain it.",
        "If you know a school in or near Taliparamba that teaches either curriculum, let us know and we will check and add it.",
      ],
    },
    {
      heading: "How does Kerala's state syllabus compare with CBSE, the IB and IGCSE?",
      paragraphs: [
        "A student who has studied the Kerala state syllabus is used to a detailed, textbook-led approach and exams that reward accurate recall. CBSE is similar but national. The IB and IGCSE keep the content load comparable, yet they mark explanation, data handling and application more heavily.",
        "The table compares the main routes in a Taliparamba family's world. It gives an orientation only, because each school sets its own calendar and rules.",
        "The shift students notice most is writing. Kerala students are strong at knowing the facts, and they sometimes lose marks by not showing reasoning in a structured way. Tutors teach students to read the command term, plan a short answer and then write it clearly.",
        "Language can also matter. A student whose first language is Malayalam, and who studied in Malayalam medium until Class 8, may need extra time with scientific English. Tutors build this from the student's own notes, and progress is usually visible within a term.",
      ],
      table: {
        caption: "Board choices around Taliparamba",
        columns: ["Board", "Exam style", "Typical user", "Where it leads"],
        rows: [
          ["Kerala state syllabus and Plus Two", "Detailed textbook questions and board exams", "Most local families", "KEAM, NEET, Kerala and other state colleges"],
          ["CBSE", "National board papers with mixed question types", "Families with transfers or national exam goals", "JEE Main, NEET, CUET-UG"],
          ["IGCSE (Cambridge or Edexcel)", "Externally marked structured and practical papers", "Gulf returnees and online students", "IB Diploma, A Level, study abroad"],
          ["IB Diploma", "Six subjects plus TOK, EE and CAS", "Families with international plans", "Universities abroad or AIU-recognised Indian entry"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Taliparamba and what sets the rate?",
      paragraphs: [
        "IB Gram does not publish prices. Instead, every family receives a quote in writing before anything is booked, because rates depend on a short list of factors that differ from one student to the next.",
        "The first factor is level and subject. A teacher of IB Mathematics AA HL or Chemistry HL has a higher preparation load than one supporting IGCSE Core English, and the rate reflects that. Rarer subjects, such as Arabic B or Design Technology, draw on a smaller pool of tutors.",
        "The second is how much teaching a family wants. A weekly hour costs less per month than three sessions a week before an exam, and some Taliparamba families scale up for the two or three months before the May series and scale down after.",
        "The third is tutor experience with the specific course. There is no travel to price in, since lessons are online, and a free trial lesson lets you judge value before paying a rupee.",
      ],
      bullets: [
        "The programme, the level and the subject",
        "How many lessons each week and of what length",
        "The tutor's experience with that exact syllabus",
        "Exam sprint or year-long support",
        "Rarity of the subject",
      ],
    },
    {
      heading: "How does online home tuition compare with Kannur coaching and local tutors?",
      paragraphs: [
        "Kerala has a busy tuition culture, and Kannur district has plenty of centres for Plus Two and entrance coaching. They do that work well, but their timetables are built around the Kerala and CBSE syllabuses and the entrance exams that follow.",
        "An IB Physics HL student has different questions to answer than a Plus Two student, and a student taking a Cambridge 0580 Extended paper meets a question style that an entrance coach may not have seen. A subject tutor who knows the international papers is therefore worth more than a nearby centre that does not.",
        "Online one-to-one lessons also save the commute. A student from Mayyil or Alakode does not lose an hour on the road, and a Gulf-based parent can sit in on a session in the evening. The limit is connectivity, which varies in hill areas and during heavy rain.",
        "The table shows how the choices compare. Many families use two together, such as online lessons for the core subject and self-study for the rest.",
      ],
      table: {
        caption: "Comparing support choices in Taliparamba",
        columns: ["Choice", "Strength", "Weakness", "Suitable for"],
        rows: [
          ["Online one-to-one with IB Gram", "Subject specialist, private, written notes", "Needs reliable internet and a calm space", "DP, MYP and IGCSE subjects needing depth"],
          ["Kannur coaching centre", "Structured classes and peer study", "Built for state and entrance syllabuses", "Plus Two and NEET or KEAM, not IB specifics"],
          ["Nearby private tutor", "Personal and convenient", "May not know IB or IGCSE assessment", "Younger students and foundations"],
          ["Self-study", "Low cost and flexible", "No marking of written answers", "Top-up revision"],
        ],
      },
    },
    {
      heading: "How do monsoon, Onam and Theyyam season affect a Taliparamba school year?",
      paragraphs: [
        "North Malabar's calendar has its own pulse. The southwest monsoon arrives in June and can deliver weeks of heavy rain, sometimes with floods along the Valapattanam and Kuppam rivers, and a second wet spell follows from October. Power cuts and weak mobile signal are more common then.",
        "Festivals add colour and interruption. Onam brings a long break in late summer, Vishu falls in April, and from about November to May the Theyyam season fills temple grounds across the district with all-night performances that children attend with their families.",
        "Exams fall into this mix. The IB sits in May and November, and IGCSE papers fall in the same months as well as October and November for some boards, so the November series lands in the second monsoon and the May series in the heat before it.",
        "We plan accordingly: a spare slot in the wet months, mock exams early enough to survive a lost week, and shared notes so a missed lesson does not become a missed topic.",
      ],
      table: {
        caption: "A sample Taliparamba study year",
        columns: ["Months", "Academic focus", "Local factor", "Our approach"],
        rows: [
          ["June to August", "New units and gap-finding", "Southwest monsoon and flooding risk", "Reserve slot, connection check"],
          ["September", "First mocks and tests", "Onam holidays", "Plan lessons before and after the break"],
          ["October to November", "November exam series", "Second rain spell, Theyyam season begins", "Backup hotspot, flexible evenings"],
          ["December to February", "Mocks and Internal Assessment drafts", "Festival and temple season", "Protect revision time"],
          ["March to May", "Final papers and the May series", "Vishu in April, rising heat", "Morning or late evening papers"],
        ],
      },
    },
    {
      heading: "Where do Taliparamba students go after the IB or IGCSE?",
      paragraphs: [
        "Kerala students travel. After the IB or IGCSE, some go to universities in Bengaluru, Chennai and Hyderabad, others to the United Kingdom, Canada, Australia, Ireland and the Gulf. The IB Diploma is recognised by the Association of Indian Universities as equivalent to Class 12, so Indian routes remain open.",
        "CUET-UG accepts students from all boards and is increasingly used for central universities. For NEET and JEE Main, IB and IGCSE students should read the current brochures carefully and confirm the subject combination and equivalence documents.",
        "Medicine draws many Kannur families, with Pariyaram Medical College on the town's doorstep and a long tradition of nursing and medical careers. A student aiming in this direction needs Biology and Chemistry at the highest level the school allows, and tutors can help with depth there.",
        "Tutors do not pick a university for a student, and they never promise admission. Their job is to lift the subject grades that keep each option open.",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences taught online for a Taliparamba student?",
      paragraphs: [
        "IB Mathematics gives the choice between Analysis and Approaches, which leans on algebra, calculus and proof, and Applications and Interpretation, which leans on statistics, modelling and technology. Each comes at SL and HL.",
        "Kerala students arrive with strong calculation habits. They usually need help with the style of IB marking: method marks, reasoning steps, and the judicious use of a graphic display calculator where permitted. Tutors spend early lessons on these habits.",
        "In the sciences, sessions combine content and exam practice. A typical hour might cover an organic reaction mechanism, then end with a timed data-response question which the tutor marks live on the shared screen.",
        "Practical work is harder at a distance. Tutors coach planning, recording and evaluating with the student's own lab records and never do or write the assessed Internal Assessment.",
      ],
      bullets: [
        "Mathematics AA: calculus, vectors, complex numbers and proof",
        "Mathematics AI: statistics, finance and modelling",
        "Physics: mechanics, waves, fields and nuclear physics",
        "Chemistry: organic, energetics, equilibrium and kinetics",
        "Biology: genetics, physiology, ecology and data questions",
      ],
    },
    {
      heading: "What are the IGCSE Core and Extended tiers, and how should a student choose?",
      paragraphs: [
        "Core papers restrict the top grade, while Extended papers open the full range. Students who plan to continue to the IB Diploma or A Level should normally sit Extended in Mathematics and the sciences.",
        "Subject choices follow the intended path. A student thinking of medicine adds Biology and Chemistry, one thinking of engineering takes Physics and Additional Mathematics, and one aiming at commerce may take Economics, Business Studies and Accounting. A language such as Arabic can suit returnees.",
        "Cambridge and Edexcel cover the same topics with different paper layouts. We check the exact code and train on past papers of the matching board only.",
        "A standard course runs two years, so one lesson a week in each of two or three subjects is common, with extra sessions in the months before the papers. A late starter can use the re-entry block to catch up.",
      ],
    },
  ],

  process: [
    { title: "Write to us with the course details", description: "Share class, board, programme, subject, level and exam session by WhatsApp or email." },
    { title: "Review a matched tutor", description: "We send a profile of a tutor who has taught that course, with open evening slots." },
    { title: "Join the free trial", description: "A live online session on a real topic from your child's syllabus, at no cost." },
    { title: "See the rate in writing", description: "We confirm price, length and schedule in writing before you commit." },
    { title: "Continue weekly", description: "Lessons run each week, with a short note after each and the option of a new tutor." },
  ],

  whyPoints: [
    { title: "Tutor matched to the course", description: "Your child meets someone who has taught that exact subject and level, not a general science tutor." },
    { title: "Indian-time lessons", description: "Tutors teach on IST, so sessions fit after school without night-time calls." },
    { title: "Straightforward about online delivery", description: "We state plainly that nobody visits homes in Taliparamba, and that in-person lessons are limited to Gurugram and parts of Delhi NCR." },
    { title: "Coaching, not ghost-writing", description: "Tutors teach and comment but do not write an IA, Extended Essay, TOK essay or coursework." },
    { title: "Parent-friendly summaries", description: "A brief note after each lesson helps parents abroad follow progress from another time zone." },
    { title: "Low-commitment start", description: "A free first lesson, a written rate and the freedom to change tutor keep the risk small." },
  ],

  tutorsIntro:
    "The tutors below teach online from elsewhere in India, on IST. Each profile shows subjects and levels taught, so a Taliparamba family can see who fits the course.",

  faqs: [
    {
      question: "Can I find IB and IGCSE home tuition in Taliparamba?",
      answer: "You can find it online. IB Gram teaches Taliparamba students live over video, one to one, from home. Tutors do not visit homes in Taliparamba, because in-person home tuition runs only in Gurugram and parts of Delhi NCR. Each tutor is matched to the student's subject and level, and the first lesson is a free trial. Many Kerala families already use online study, so the format feels familiar.",
    },
    {
      question: "Is there an IB or Cambridge school in Taliparamba?",
      answer: "We could not confirm one. Our checks found no IB World School or Cambridge or Edexcel centre in Taliparamba. The nearest confirmed schools on this page are in Mangaluru and Kochi, each a long way off. If you know a local school that teaches either curriculum, tell us and we will check it. Until then families usually choose boarding, relocation or an online programme.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Taliparamba?",
      answer: "No price appears here, and every rate is written down before booking. It depends on the programme, the level, the subject, how many lessons you take each week and the tutor's experience. There is no travel cost because lessons are online. Message us for a written quote. The first trial lesson is free, so you can judge value before any payment.",
    },
    {
      question: "We have just returned from the Gulf. How do we settle into the IB or IGCSE here?",
      answer: "Begin with a diagnostic lesson. A tutor finds where your child's previous school left off, compares it with the course now being followed, and builds a short plan to close gaps. Returnee students often arrive mid-programme, so the first weeks focus on the vocabulary, the paper format and any missing topics. Then weekly lessons keep the pace steady while the family settles.",
    },
    {
      question: "Can tutors write IAs, Extended Essays or TOK essays?",
      answer: "No. Tutors coach and never write assessed work. They can explain the criteria, talk through ideas and comment on a student's own drafts. They do not write, rewrite or supply content for an Internal Assessment, Extended Essay, TOK essay or coursework. This keeps a student clear of misconduct rules and keeps the final work honest.",
    },
    {
      question: "Which IGCSE boards do you cover?",
      answer: "Both Cambridge International and Pearson Edexcel. We confirm the board and syllabus code first, for example Cambridge 0620 Chemistry or Edexcel 4CH1, and then train on past papers of that board. If you are not sure which your child is entered for, check the entry slip or ask the school or online provider and send us the code.",
    },
    {
      question: "What lesson times are available for students in Taliparamba?",
      answer: "Lessons run in Indian Standard Time, mostly on weekday evenings after school and across weekends. Tutors are based in India, so there are no overnight sessions. We can avoid Onam, Vishu and major temple festival days if you tell us in advance, and we move exam-season sessions earlier when it is hot. The slot is agreed before the first paid lesson.",
    },
    {
      question: "How do we cope with monsoon power cuts and weak signal?",
      answer: "With a little preparation. Keep a charged laptop and a phone hotspot as backup, and tell us when heavy rain is forecast. We keep a reserve slot each week in July and August, and if a lesson is lost we reschedule without a penalty. Shared notes mean the student does not lose the thread, and in exam season we can add a short catch-up session.",
    },
    {
      question: "My child can take Malayalam or Arabic in the IB. Can you help?",
      answer: "Often yes, subject to tutor availability. Malayalam A and Arabic B are offered through some schools, and we can look for a tutor who has taught the course. Language tutors focus on reading, writing and oral practice, and on the assessment format. Send us the course and level, and we will tell you honestly whether we can match someone.",
    },
    {
      question: "How do NEET, JEE and CUET-UG work for IB and IGCSE students?",
      answer: "Eligibility depends on subject combinations and equivalence, and rules are updated, so read the current official brochure. The Association of Indian Universities recognises the IB Diploma as equivalent to Class 12, and CUET-UG is open to all boards. For NEET and JEE Main, confirm subject and mark requirements. Tutors teach the subject and do not promise ranks or admission.",
    },
    {
      question: "Do you teach IB PYP and MYP in Taliparamba?",
      answer: "Yes. PYP tutoring supports reading, number and inquiry for Classes 1 to 5, and MYP tutoring covers subjects from Class 6 to 10 with criterion-based assessment. Because these programmes are not offered locally, most of our students are Gulf returnees or follow an online school. A tutor who knows the programme's terms makes it much easier to settle in.",
    },
    {
      question: "What if we want to change tutor?",
      answer: "You can, at any point and at no additional cost. A first match is not always perfect, and pace or style can make a difference. Tell us briefly what felt wrong and we will suggest another tutor. The free trial lesson exists to reduce the chance of needing a change, but the option stays open throughout the course.",
    },
    {
      question: "Will a tutor visit our home in Taliparamba or Kannur?",
      answer: "No. IB Gram does not send tutors to homes in Taliparamba, Kannur or anywhere in Kerala. Home visits run only in Gurugram and parts of Delhi NCR. In Taliparamba, home tuition means private online lessons taken on a laptop at home. We state this plainly so no family waits for a visit that will not happen.",
    },
    {
      question: "What happens in the free trial?",
      answer: "It is a live online lesson of about thirty to forty-five minutes on a real topic from your child's syllabus. The tutor asks what the student finds difficult, explains one idea and sets a short exercise. Parents may join, including from abroad. There is no payment or commitment, and you receive a written summary afterwards and a written rate if you wish to continue.",
    },
    {
      question: "How do we start?",
      answer: "Send a WhatsApp message to +91 7439 368 115 or email support@ibgram.com with your child's class, programme, subject and exam session. We reply with a tutor profile and a trial time, usually within a day. After the trial you receive a written rate and can start weekly lessons only if you are happy. The first step costs nothing.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "See where else IB Gram teaches and how online lessons work." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse IB subject tutors and programme guides." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Subject guides for Cambridge and Edexcel IGCSE." },
    { label: "IB Diploma programme", href: "/programmes/dp/", description: "How DP subjects and the core fit together." },
    { label: "IB MYP programme", href: "/programmes/myp/", description: "MYP criteria, projects and eAssessment." },
    { label: "IB PYP programme", href: "/programmes/pyp/", description: "Inquiry learning for primary years." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI at SL and HL, with paper technique." },
    { label: "Tutor profiles", href: "/tutors/", description: "Tutors by subject, level and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write or WhatsApp to arrange a free trial." },
    { label: "IB and IGCSE tutors in Kozhikode", href: "/kozhikode/", description: "The page for the larger Malabar city to the south." },
    { label: "IB and IGCSE tutors in Kanhangad", href: "/kanhangad/", description: "For families on the Kasaragod side, north of Taliparamba." },
    { label: "IB and IGCSE tutors in Kochi", href: "/kochi/", description: "The city with Kerala's confirmed IB and Cambridge schools." },
    { label: "IB and IGCSE tutors in Vatakara", href: "/vatakara/", description: "For families on the Kozhikode-Kannur border belt." },
  ],

  closingHeading: "A free online lesson for Taliparamba students",
  closingBody:
    "A student in Taliparamba should have a tutor who knows the IB or IGCSE course as well as any teacher in a metro, and online lessons make that possible from the family's own home. Send us the subject, level and exam session, and we will propose a tutor and a trial in Indian time. The first lesson is free, the rate comes in writing, and a different tutor is always available. WhatsApp +91 7439 368 115 or email support@ibgram.com.",
};
