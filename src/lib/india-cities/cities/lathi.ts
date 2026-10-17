import type { CitySeoPage } from "../types";

/**
 * /lathi/ - IB and IGCSE tutoring page for Lathi, a municipality in Amreli district, Gujarat
 * (Saurashtra; former seat of a Gohil princely state merged in 1948; about 21,000 people at the
 * 2001 census). No IB or Cambridge/Edexcel school could be confirmed in Lathi, so stripSchools is
 * empty and the clusters use Rajkot, Ahmedabad, Vadodara and Surat schools already verified on the
 * published Amreli, Ahmedabad, Surat and Rajkot pages. Online delivery only.
 */
export const lathi: CitySeoPage = {
  slug: "lathi",
  countryName: "Lathi",
  countryNameLong: "Lathi, Amreli district, Gujarat",
  demonym: "Lathi",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around Navratri nights, the long Diwali vacation, Uttarayan in January and the weeks when groundnut and cotton come in",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.7167, longitude: 71.3833 },
  wikipedia: "https://en.wikipedia.org/wiki/Lathi,_Gujarat",
  alternateNames: ["Lathi Amreli", "Lathi Saurashtra", "Lathi Kathiawar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Lathi, Gujarat | Online Home Tuition",
  metaDescription: "Online home tuition for IB and IGCSE students in Lathi, Amreli district, Gujarat: DP, MYP, PYP, Cambridge and Edexcel, one to one, free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Lathi, Gujarat",
  heroEyebrow: "IB & IGCSE HOME TUITION, ONLINE, FOR LATHI IN AMRELI DISTRICT",
  heroSubtitle:
    "Looking for IB and IGCSE tutors in Lathi usually means looking for private tuition that happens at home, and for a course that nobody in Saurashtra's farm-and-trade towns has taught. IB Gram delivers it online: your child sits at home in Lathi, a tutor who currently teaches that Diploma, Middle Years or Cambridge syllabus joins by video, and the first lesson costs nothing. Tutors do not visit homes in Lathi, because home visits are limited to Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Lathi",
  imageAltText: "A Lathi student in Amreli district reviewing an IB Economics diagram with an online tutor during a home video lesson",
  secondaryKeywords: [
    "IB tutor Lathi",
    "IGCSE tutor Lathi",
    "IB home tuition Lathi",
    "IGCSE home tuition Lathi",
    "IB private tuition Lathi",
    "IB Maths tutor Lathi",
    "IGCSE Maths tutor Lathi",
    "IB Physics tutor Lathi",
    "IB Chemistry tutor Lathi",
    "IB Biology tutor Lathi",
    "IB DP tutor Lathi",
    "IB MYP tutor Lathi",
    "IB PYP tutor Lathi",
    "IGCSE online tuition Lathi",
    "IB tutor Lathi Amreli",
    "IGCSE tutor Amreli district online",
    "Cambridge IGCSE tutor Saurashtra",
    "IB tutor Damnagar Dhari Babra",
    "online IB tutor Gujarat small town",
  ],

  heroTrustPoints: [
    "Every tutor is chosen for the course your child sits, not for living near Lathi",
    "All lessons are online and one to one; home visits exist only in Gurugram and parts of Delhi NCR",
    "A free trial lesson and a written fee come before any commitment",
    "IB Gram is independent of the IB, Cambridge, Pearson Edexcel and every school named on this page",
  ],
  heroStats: [
    { value: "Saurashtra", label: "Lathi, Amreli district" },
    { value: "PYP to DP", label: "IB at every stage" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
    { value: "Free trial", label: "First lesson at no cost" },
  ],

  intro: {
    heading: "An international syllabus, taught to a child in Lathi",
    paragraphs: [
      "Lathi is a town of about twenty thousand people in Amreli district, in the middle of Saurashtra, and its history is older than most. For centuries it was the seat of a small Gohil princely state, which merged into India in 1948, and the old town still carries that identity. Today its families work in farming and trading, with groundnut and cotton as the crops people talk about, and many have relatives in Surat, Mumbai, East Africa, the UK or the United States.",
      "That last detail explains the questions we receive. A household with a brother in London or a cousin in Atlanta thinks about the IB Diploma and IGCSE as recognised currency abroad. A family whose business takes them to Rajkot or Ahmedabad considers an international school there and wants the child to arrive ready. A parent who has simply read about the IB wants to know whether it suits a bright child before moving anywhere. All three need a teacher for a syllabus that is not taught in Lathi.",
      "We solve that with private online tuition. A tutor anywhere in India who has recently taught your child's exact subject works one to one with your child at home, on a shared whiteboard, in Indian Standard Time. Home tuition in the traditional sense, with a person arriving at the door, is not something we offer in Lathi. It is limited to Gurugram and parts of Delhi NCR, and we say so up front.",
      "IB Gram is independent. It has no connection with the International Baccalaureate, Cambridge, Pearson Edexcel or any school named below. Tutors explain, practise and give honest feedback, but never write an Internal Assessment, Extended Essay, TOK essay or coursework for a student.",
    ],
    bullets: [
      "IB PYP, MYP and DP, with help for CP subjects, and Cambridge or Edexcel IGCSE",
      "Tutors matched on the exact syllabus and level",
      "Live lessons on IST, with no time-zone difficulty for a Gujarat household",
      "Written notes after each session",
      "No home visits in Lathi; online only",
    ],
  },

  programmesIntro:
    "A Lathi family generally meets the IB through a school in another city or through a plan to move abroad. The notes below put each stage in that context.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Learning is built around inquiry into themes, not a list of separate subjects, and ends with a student-led Exhibition. Since nothing is externally examined, the best tutoring is gentle: reading aloud, number games and helping a child put a question into words.",
      countryNote: "From Lathi, PYP questions come from parents who expect their child to enter an international school in Rajkot or Ahmedabad, or abroad, and want the transition to be easy.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Students are marked on criteria such as knowing, investigating, communicating and reflecting, and complete a Personal Project in the final year. The skill that changes most is moving from learning an answer to building an argument.",
      countryNote: "For students coming from a Gujarati-medium background, MYP's English-language writing demands are the first adjustment, so tutors spend time on structure and vocabulary.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects, with Theory of Knowledge, an Extended Essay and CAS. The final grade combines May exams with internal assessments, giving a score out of 45 plus up to three bonus points.",
      countryNote: "There is no Diploma school in Lathi, so DP candidates are either studying in a larger Gujarat city or following the course online.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller number of Diploma courses combined with a career-related study and a reflective project. Rare in India, but the Diploma components still need disciplined preparation.",
      countryNote: "CP queries from Lathi are uncommon and normally turn out to be requests for one or two Diploma subjects.",
    },
  ],

  subjectsIntro:
    "Gujarat's business families often favour Mathematics, Economics, Business and Computer Science, while many others are drawn to the sciences. Whatever the combination, we assign a tutor who has taught that specific subject at your child's level.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Strong arithmetic habits, common in Gujarat, are an asset; we add proof, abstraction and the harder problem-solving in Paper 3." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling taught with real data, such as crop yields or market prices, before the calculator-led exploration." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through to fields, with extra attention to graphs, uncertainties and the written investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Calculations, energetics and organic chemistry, with a practical write-up that follows the criteria." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology and genetics through ecology, drilling the habit of answering exactly what the command term asks." },
    { name: "IB Economics", levels: "HL / SL", description: "Clean diagrams, policy evaluation and commentaries drawn from current news, well suited to trading families." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies and finance tools, with the internal assessment centred on a real organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis and the oral, valuable for students whose home language is Gujarati." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming practice and the structured solution document that the internal assessment requires." },
    { name: "IB Psychology", levels: "HL / SL", description: "Research methods and key studies, with extended-response structure." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water, soil and land-use topics that resonate in a semi-arid district where rainfall decides the year." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study recall with named places and a fieldwork investigation planned carefully." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis, comparative essays and an internal assessment question that can actually be researched." },
    { name: "IB Hindi B", levels: "HL / SL", description: "A comfortable second language for Gujarati speakers, with oral practice and the exam's text types." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Coaching through discussion on knowledge questions and the exhibition, never writing for the student." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel IGCSE are the most common starting point for Lathi families, since a student can take the exams as a private candidate. We confirm the board, code and tier first, then plan lessons backwards from the exam month.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tier with a firm base in algebra, geometry and statistics and plenty of non-calculator work." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus, functions and vectors, a strong bridge to IB Maths." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Concepts, calculations and the practical-skills paper rehearsed together." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, acids and bases, organic basics and qualitative analysis." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Body systems, inheritance and ecosystems, with practice on data-based questions." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, final accounts and ratios, a natural choice for a student from a business family." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case-study answers tied to the company given, not generic definitions." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagram skills first, then evaluation for the longer questions." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python practice with theory and pseudocode tracing." },
  ],

  regionsTitle: "Lathi and the Amreli district towns around it",
  regionsIntro:
    "These are the places that a Lathi family travels to, compares schools across and has relatives in. Since lessons are online they are context, but they show how a study week fits the district.",
  regions: [
    { name: "Lathi town", note: "The municipal centre, with its old Gohil-era core and bazaar, where most families live within a short ride of each other." },
    { name: "Amreli", note: "The district headquarters, the usual place for government work, larger schools and coaching classes." },
    { name: "Damnagar", note: "A town in the district to the south-east, whose families share Lathi's schooling options and travel patterns." },
    { name: "Babra", note: "A taluka town in the district that families pass through when travelling towards Rajkot." },
    { name: "Bhurakhiya", note: "A village about ten kilometres east of Lathi, known for the Bhurakhiya Hanumanji temple and a typical rural-town mix of homes." },
    { name: "Chalala", note: "A town in the district whose families often compare it with Lathi when considering schools for older children." },
    { name: "Savarkundla", note: "A larger town in the district with more private schools and coaching than Lathi." },
    { name: "Dhari", note: "A town on the Gir side of the district, with a similar schooling picture." },
    { name: "Rajkot and Bhavnagar", note: "The two large cities that Lathi families look towards for specialist schools, hospitals and shopping." },
  ],

  schoolDisclaimer:
    "The schools named in this page show where international curricula can be found relative to Lathi, which has none of its own that we could confirm. IB Gram is independent and has no contract, endorsement or partnership with any of them, or with the International Baccalaureate, Cambridge or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Lathi and Amreli district",
      note: "We could not confirm any school in Lathi or elsewhere in Amreli district that teaches the IB or a Cambridge or Edexcel IGCSE, so local options are limited. Local schools follow the Gujarat Board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Rajkot",
      note: "The largest city in Saurashtra and the closest big city for most Lathi families, though international school choice there is also narrow.",
      schools: ["The Galaxy School"],
    },
    {
      city: "Nearby: Ahmedabad and Vadodara",
      note: "The state's IB and Cambridge schools are concentrated in these two cities, reached by a longer drive or train journey and used mainly by boarding or relocating families.",
      schools: ["Ahmedabad International School", "Calorx Olive International School", "Navrachana International School"],
    },
    {
      city: "Nearby: Surat",
      note: "Home to many families from Amreli district through the diamond and textile trades, and the city whose schools Lathi relatives most often mention.",
      schools: ["Fountainhead School", "P. P. Savani Cambridge International School"],
    },
  ],

  modesIntro:
    "Whatever the format, it is one tutor and one student on a live video lesson. We adapt the rhythm to the family's work, whether that is a shop open in the evening, a harvest, or a child's stay at a hostel in another city.",
  modes: [
    {
      title: "Weekly home lesson, online",
      description: "A fixed slot each week, most often in the evening, with the same tutor.",
      bullets: [
        "Matched to a named IB subject or IGCSE code",
        "Student's own work is marked live",
        "A short note for parents afterwards",
        "Easy to move for festivals or shop hours",
      ],
    },
    {
      title: "Vacation intensive",
      description: "Gujarat's long Diwali vacation and the summer break suit a concentrated block of lessons that closes gaps.",
      bullets: [
        "Several sessions a week over the break",
        "Planned around the school's next topics",
        "Useful before mocks or entrance tests",
        "Paused easily when school resumes",
      ],
    },
    {
      title: "Pre-exam run",
      description: "A six- to eight-week programme of timed papers before the IGCSE or IB series.",
      bullets: [
        "Papers marked against current schemes",
        "Quick, specific feedback",
        "Topic priorities changed weekly",
        "Best begun two months before the exam",
      ],
    },
  ],

  sections: [
    {
      heading: "What do schools around Lathi teach, and where does an international curriculum fit?",
      paragraphs: [
        "In Lathi and across Amreli district the schools follow the Gujarat Secondary and Higher Secondary Education Board, with a growing number of CBSE schools, many teaching in Gujarati and some in English. The district has a long record of producing capable students, and a large number leave for Surat, Ahmedabad or abroad. We could not confirm any school in the district that teaches the International Baccalaureate or a Cambridge or Edexcel IGCSE.",
        "Rajkot, the biggest city in Saurashtra, is the nearest option, though its international school choice is small. Ahmedabad and Vadodara have the real concentration, with schools such as Ahmedabad International School, Calorx Olive International School and Navrachana International School. Surat, where so many Amreli families have relatives, adds Fountainhead School and P. P. Savani Cambridge International School.",
        "For most Lathi families, moving a child to those cities as a boarder or after relocating is a big decision, so many begin by preparing at home. A student may study IGCSE subjects privately, or prepare for the entrance test of a school elsewhere, or follow an online school. In each case a tutor is the one person who can answer subject questions.",
        "The exam itself is the same wherever it is sat. Cambridge and Edexcel set one paper for everyone, and the IB marks to a global standard, so a Lathi student with a good tutor competes on equal terms.",
      ],
      table: {
        caption: "Where Lathi families find which curriculum",
        columns: ["Place", "Curriculum on offer", "Relevance to Lathi"],
        rows: [
          ["Lathi and Amreli district", "Gujarat Board, CBSE", "Home base; no IB or IGCSE school confirmed"],
          ["Rajkot", "Gujarat Board, CBSE and a small number of other boards", "Nearest large city, limited international choice"],
          ["Ahmedabad and Vadodara", "IB and Cambridge schools, including Ahmedabad International School and Navrachana", "Boarding or relocation option"],
          ["Surat", "Fountainhead School and P. P. Savani Cambridge International School", "Where many Amreli families have relatives"],
        ],
      },
      bullets: [
        "No IB or IGCSE school could be confirmed in Lathi or Amreli district",
        "Ahmedabad, Vadodara and Surat hold most of Gujarat's international schools",
        "Private IGCSE study at home is a realistic starting point",
        "Exams and marking are identical wherever they are sat",
      ],
    },
    {
      heading: "Gujarat Board, CBSE, IGCSE and IB: how different are they for a child in Lathi?",
      paragraphs: [
        "A Gujarat Board student is usually well drilled in the content of a defined textbook. That is a real strength. The IGCSE asks for the same ideas, but the questions are set in situations the textbook did not show, and an answer must be explained in clear English sentences.",
        "Mathematics is the best illustration. Gujarat's culture of mental arithmetic and accounts gives many students speed and accuracy. IB Maths and IGCSE Extended Mathematics add reasons: why a method works, how to justify a step, how to handle a problem set in words. Students who learn to explain, not just compute, move up a grade quickly.",
        "Language matters for a Gujarati-medium student. Technical vocabulary in English, and the ability to write a four-mark explanation without padding, take time. We do not translate the whole lesson; we teach the English that the examiner expects, using Gujarati or Hindi only to settle a confusing idea.",
        "A third difference is independence. The IB Diploma includes an Extended Essay and internal assessments that run for months, and IGCSE sciences include practical skills. Students who have only sat one annual board exam need time to learn to plan.",
      ],
      table: {
        caption: "Boards compared for a Lathi student",
        columns: ["Feature", "Gujarat Board / CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Language of exam", "Gujarati or English", "English", "English, with a language A of choice"],
          ["Style of question", "Textbook-led, recall and standard problems", "Application, shown working", "Application, analysis, independent work"],
          ["Internal work", "Limited", "Practical skills and coursework in some subjects", "Internal assessment, Extended Essay, TOK"],
          ["Recognition abroad", "Needs equivalence checks", "Recognised for entry and as a base for A levels or the IB", "Widely recognised for degree entry"],
        ],
      },
      bullets: [
        "Fast, accurate arithmetic is a real advantage",
        "Explaining why a method works is the new skill",
        "Technical English is taught deliberately",
        "Long projects need a planning habit",
      ],
    },
    {
      heading: "What shapes the price of IB or IGCSE tuition for Lathi families?",
      paragraphs: [
        "Gujarati families are good at asking what they are paying for, and we welcome it. The rate depends on level, subject, session length and the tutor's recent experience with the exact syllabus. Higher Level Diploma sciences sit above IGCSE Core subjects because the pool of good teachers is smaller. We put the number in writing before the free trial.",
        "Where the tutor is based does not alter the fee. A lesson to Lathi costs the same as one to Rajkot or Surat, and there is no travel line. Tutors use public past papers, official specimen papers and their own solutions, so no separate material charge appears.",
        "Compare it with the routine many families already follow: a child commuting to Amreli or Rajkot for evening coaching, with fuel and time on top. One weekly online lesson from home often costs no more than that, and the child gets a specialist who would never run a batch in Lathi.",
        "No contract binds you. A different tutor is arranged without charge if the first is not a fit, and lessons pause without penalty for a wedding, a business trip or a long festival break.",
      ],
      bullets: [
        "Level and subject decide the rate",
        "Fees are given in writing before any trial",
        "Online delivery removes travel costs",
        "No contract, and tutor changes are free",
      ],
    },
    {
      heading: "Which is better for a Lathi student: an online tutor, a coaching class, a local tutor or self-study?",
      paragraphs: [
        "The coaching classes of Amreli and Rajkot are efficient at what they do: board exam preparation and NEET and JEE foundations. The batches are large and aimed at the Gujarat Board and CBSE syllabus, so there is no Higher Level Physics or Cambridge Chemistry batch to join.",
        "A local private tutor is an established arrangement in Lathi and works well for school subjects. Finding one who has taught the present IB subject guides or Cambridge specifications is the difficulty, since there are so few students sitting them in the district.",
        "Self-study is attractive because past papers are free, and some students go a long way alone. What is hard to do alone is to judge your own internal assessment draft or extended answer against a mark scheme.",
        "An online tutor matched for the exact course gives one-to-one attention and the right syllabus, at the cost of needing a quiet corner and a stable connection. For most IB and IGCSE needs in a town like Lathi it is the only option that offers both.",
      ],
      table: {
        caption: "Study routes available from Lathi",
        columns: ["Route", "Right syllabus?", "One-to-one?", "Catch"],
        rows: [
          ["Coaching in Amreli or Rajkot", "Board and entrance exams only", "No", "Travel; no IB or IGCSE batch"],
          ["Local private tutor", "School subjects", "Yes", "Rarely current in IB or Cambridge"],
          ["Self-study", "If the student chooses well", "No", "No feedback on written work"],
          ["Matched online tutor", "Yes, chosen for the course", "Yes", "Needs a stable connection"],
        ],
      },
      bullets: [
        "Coaching suits board and entrance exams",
        "Local tutors rarely have IB or IGCSE experience",
        "Written coursework benefits from informed review",
        "An online match combines the syllabus and the attention",
      ],
    },
    {
      heading: "How do Navratri, Uttarayan and the Saurashtra seasons shape a study year in Lathi?",
      paragraphs: [
        "Saurashtra is semi-arid, and the year is organised around the monsoon from late June to September. A good monsoon brings full fields and happy homes; a poor one changes household budgets. Groundnut and cotton are harvested in the autumn, and busy weeks in the fields or the market yard can draw teenagers away from books.",
        "Navratri is the great social event of Gujarat. For nine nights in autumn, families go out to garba, and an evening lesson is rarely sensible. Diwali follows, and Gujarat schools have a long vacation around it, usually two or three weeks. Those weeks are ideal for intensive blocks, provided the family is not travelling.",
        "Uttarayan on 14 January fills the sky with kites and closes many routines for a day or two. March brings Gujarat Board exams, and summer is hot, with May temperatures that make afternoon study unpleasant. Evening and early morning slots are the practical choice.",
        "On the exam side, IGCSE papers fall in May-June and October-November, and IB Diploma exams in May. That puts the heaviest preparation in March and April, which overlap with the Gujarat Board exams for students who take both, so we plan those months carefully with the family.",
      ],
      table: {
        caption: "Lathi's year and the lesson calendar",
        columns: ["Period", "What is happening", "How we plan"],
        rows: [
          ["January", "Uttarayan, winter pleasant", "Normal lessons, skip the kite days"],
          ["March-April", "Gujarat Board exams; IB and IGCSE preparation", "Priority to the board fortnight, then a push to May"],
          ["May-June", "Heat, IGCSE and IB papers", "Early morning or evening slots; light revision"],
          ["July-September", "Monsoon, new school year", "Build routine; fix weak topics"],
          ["October-November", "Navratri, Diwali vacation, groundnut and cotton season", "Vacation intensive, then November series push"],
        ],
      },
      bullets: [
        "Navratri evenings are treated as free",
        "The Diwali vacation suits an intensive block",
        "Summer afternoons are avoided",
        "March and April need joint planning with board exams",
      ],
    },
    {
      heading: "Where can an IB or IGCSE student from Lathi go next?",
      paragraphs: [
        "Gujarat's students from smaller towns have long gone to Ahmedabad, Vadodara and Surat for higher education and work, and many families have members abroad. An IB or IGCSE background opens the same Indian doors and many more overseas. Gujarat itself has CEPT University, Nirma University, PDEU, IIT Gandhinagar and the National Institute of Design among others, and some admit through national exams or their own tests.",
        "For Indian universities, an equivalence certificate from the Association of Indian Universities is needed for IB and IGCSE-based qualifications. CUET-UG accepts students of any board. JEE Main and NEET have subject and marks requirements to be checked against the actual combination of subjects taken, which is best done in Class 10.",
        "Abroad, families with relatives in the UK, USA, Canada and East Africa often ask about Gujarati-diaspora networks. Admission depends on predicted grades, which come long before results, and on each country's rules. UK universities name Higher Level subjects and points, Canadian universities ask for subject averages, and US colleges treat the IB as part of a wider file.",
        "Our tutors lift the subject grades behind those applications; they do not run admissions counselling or write essays for applicants.",
      ],
      bullets: [
        "Ahmedabad, Vadodara and Surat are familiar routes within Gujarat",
        "AIU equivalence and subject rules matter for JEE and NEET",
        "Predicted grades shape offers abroad",
        "Tutors build subject grades, not applications",
      ],
    },
    {
      heading: "IB Maths, Economics and the sciences from a Lathi desk",
      paragraphs: [
        "Business-minded families often choose Maths Applications & Interpretation with Economics and Business Management. That combination works well, provided the student masters statistics and the graphic calculator early. The exploration, a piece of independent mathematical writing, is best started months before the deadline with a topic from real life, such as the break-even point of a small trading business.",
        "Analysis & Approaches suits a student aiming for engineering. The content is similar to Class 11-12 Indian mathematics, but IB papers include questions where the method is not given, and the Higher Level Paper 3 stretches reasoning further than any board paper.",
        "In the sciences, the extra elements are the data-based questions and the individual investigation. A student in Lathi may have limited lab access, so tutors help plan an investigation that can be done with ordinary equipment, and then coach how to process the results and evaluate the method.",
        "Economics rewards a daily habit of reading the news with a diagram in mind. Tutors set short weekly tasks that connect a headline to a model, and those become the commentaries the course requires.",
      ],
      bullets: [
        "Applications & Interpretation pairs well with Economics and Business",
        "Choose the exploration topic early and keep it practical",
        "Investigations can be planned with ordinary equipment",
        "Weekly news-to-diagram tasks build Economics commentaries",
      ],
    },
    {
      heading: "Choosing between Cambridge and Edexcel IGCSE, and Core or Extended",
      paragraphs: [
        "Both Cambridge and Edexcel IGCSE are respected, and the practical difference is in the paper style. Cambridge is more common in Indian schools and has a very wide choice of subjects, including Accounting and Hindi. Edexcel offers a tidy structure in Mathematics, with Foundation and Higher tiers.",
        "For private candidates, the main constraint is finding an exam centre that registers the chosen board and subjects in the right series. We help you think through that early, since centre deadlines come months before the exam.",
        "Tier decisions matter. Cambridge Core tops out at grade C, while Extended allows A* to E, so a student aiming at IB Higher Level or a competitive A level should take Extended. If a child needs more confidence first, Core in a subject like Biology is a sensible start.",
        "Subject choice should reflect the path ahead. A family business might point to Accounting, Business Studies and Economics with Mathematics; a medical path means Biology, Chemistry and Physics; an engineering path adds Additional Mathematics and Computer Science.",
      ],
      bullets: [
        "Cambridge has the wider subject range in India",
        "Edexcel Mathematics uses Foundation and Higher tiers",
        "Check exam-centre deadlines months ahead",
        "Subjects should follow the intended career",
      ],
    },
  ],

  tutorsIntro:
    "The tutors we propose for Lathi teach IB across the continuum and both IGCSE boards. Each comes with a stated reason, and every lesson is online; none visits a home in Lathi.",

  process: [
    { title: "Share the details", description: "Programme or board, subject, level, and evenings that are free in your Lathi household." },
    { title: "Review the shortlist", description: "Two or three tutors, each with a reason linked to the syllabus." },
    { title: "Sit a free trial", description: "A real topic from the course, taught live, at no cost." },
    { title: "Set the plan", description: "Pace, topics and the written fee for the first month." },
    { title: "Continue and review", description: "Weekly lessons, notes afterwards and a free tutor change if needed." },
  ],

  whyPoints: [
    { title: "Syllabus before location", description: "A tutor who has taught your child's course matters more than one nearby." },
    { title: "Candid about Lathi", description: "We say plainly that no IB or IGCSE school was found locally." },
    { title: "Trial first", description: "Your child decides if the style fits before any fee." },
    { title: "Student's own work", description: "Guidance on IAs and essays, never authorship." },
    { title: "Readable notes", description: "Short written updates for busy parents." },
    { title: "Fits family life", description: "Navratri, Diwali, harvest and shop hours all shape the schedule." },
  ],

  faqs: [
    { question: "Where can I find an IB tutor in Lathi?", answer: "Send us your child's programme, subject, level and exam month and we will shortlist tutors who teach that course now. Because Lathi has no IB school, the match is made across India on syllabus knowledge, and the lessons run live online with a free trial first." },
    { question: "Is IGCSE home tuition available in Lathi?", answer: "Yes, as online home tuition. Your child studies in their own room in Lathi and works one to one with a Cambridge or Edexcel IGCSE tutor on video. The tutor does not come to your house, as in-person visits are limited to Gurugram and parts of Delhi NCR." },
    { question: "Will a tutor visit our house in Lathi?", answer: "No. Home visits are offered only in Gurugram and parts of Delhi NCR. In Lathi every lesson is live online, with a shared whiteboard and real-time marking, so your child still gets private, personal attention." },
    { question: "Are there IB or IGCSE schools in Lathi or Amreli?", answer: "We could not confirm any in Lathi or Amreli district, so none is named. Families seeking one usually look at Ahmedabad, Vadodara or Surat, and some at Rajkot. Online tutoring helps those who stay in Lathi." },
    { question: "How much does tuition cost in Lathi?", answer: "The rate depends on level, subject, session length and the tutor's recent experience with the syllabus, and is confirmed in writing before the free trial. Higher Level Diploma subjects typically cost more than IGCSE Core. Online delivery means no travel cost." },
    { question: "Can lessons be moved during Navratri or Diwali?", answer: "Yes. We plan the calendar around Navratri, the Diwali vacation and Uttarayan, either pausing lessons or using the vacation for an intensive block. There is no penalty for rescheduling, and we recap before resuming." },
    { question: "How does the free trial work?", answer: "Your child takes a real topic from their own syllabus with a tutor on video, free of charge. You then receive a written plan for the first month and can accept it, request another tutor or stop. Nothing is owed in any case." },
    { question: "Will a tutor write the IA or Extended Essay?", answer: "No. Tutors coach, they do not write. They can explain criteria, help sharpen a research question and review drafts honestly, but the assessed work must be the student's own, as IB rules require. Requests to write it are declined." },
    { question: "Which IB subjects are offered?", answer: "Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, Geography, History, Environmental Systems and Societies, Hindi B, TOK and Extended Essay guidance. Ask if your subject is not listed." },
    { question: "Is there help for younger MYP or PYP students?", answer: "Yes. For MYP, tutors work on criteria-based writing and the Personal Project process. For PYP, they build reading, number sense and inquiry habits. Younger students have shorter, more varied sessions." },
    { question: "Is the internet in Lathi good enough?", answer: "A standard broadband or 4G connection is enough for a video lesson with a whiteboard. For the monsoon or any power interruption, a phone hotspot is a sensible backup, and any time lost is made up." },
    { question: "How do you check tutors?", answer: "We check qualifications, recent teaching of the specific syllabus and how the tutor guides coursework before suggesting anyone. Because Lathi has no local specialist pool, recency counts most, and the trial lesson gives your family the final say." },
    { question: "When should we start?", answer: "The start of a course gives the most time: Class 9 for IGCSE or Class 11 for the Diploma. A later start still helps, because tutoring then focuses on the topics that will move the grade most before the next exam series." },
    { question: "Can IB or IGCSE lessons fit alongside Gujarat Board exams?", answer: "Yes. Lessons slow or pause for the board fortnight in March and resume for the May or November series. We map this early so board preparation is never squeezed." },
    { question: "Can a tutor explain in Gujarati or Hindi?", answer: "Lessons run mainly in English because the exams are in English, but a tutor can clarify a hard idea in Hindi, and sometimes Gujarati, then return to the English wording the examiner expects. Tell us your preference when you enquire." },
    { question: "Does IB Gram have ties to any school or board?", answer: "No. IB Gram is independent and is not affiliated with the International Baccalaureate, Cambridge, Pearson Edexcel or any school mentioned. Schools in Rajkot, Ahmedabad, Vadodara and Surat are named only to show where an international education can be found." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How online IB and IGCSE tutoring works for families across Indian cities and towns." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only region where tutors visit homes." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and the IGCSE exam calendar." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, internal assessments, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and preparing for the Diploma." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis & Approaches and Applications & Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "See tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your child's details to arrange a free trial." },
    { label: "IB and IGCSE tutoring in Amreli", href: "/amreli/", description: "The district headquarters, for families comparing options in Amreli district." },
    { label: "IB and IGCSE tutoring in Rajkot", href: "/rajkot/", description: "The largest Saurashtra city, where many Lathi families shop and study." },
    { label: "IB and IGCSE tutoring in Bhavnagar", href: "/bhavnagar/", description: "Another Saurashtra city with a similar online-first picture." },
  ],

  closingHeading: "Book a free trial lesson for your Lathi student",
  closingBody:
    "Send the programme or board, the subject and level, and the exam month. We reply with a tutor who has taught that course and a trial slot that suits your evenings, with nothing to pay until you have seen a lesson. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
