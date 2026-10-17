import type { CitySeoPage } from "../types";

/**
 * /amreli/ - IB and IGCSE tutoring page for Amreli, Saurashtra, Gujarat. Online only: in-person visits
 * exist only in Gurugram and parts of Delhi NCR. No IB or Cambridge/Edexcel campus could be confirmed in
 * Amreli district, so stripSchools is empty and clusters point to Rajkot, Ahmedabad and Vadodara using
 * school names already verified on those cities' published pages.
 */
export const amreli: CitySeoPage = {
  slug: "amreli",
  countryName: "Amreli",
  countryNameLong: "Amreli, Gujarat",
  demonym: "Amreli",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Timetables allow for the three-week Diwali vacation, Navratri nights, Uttarayan kite days and the fierce May heat of Saurashtra",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.6006, longitude: 71.2164 },
  wikipedia: "https://en.wikipedia.org/wiki/Amreli",
  alternateNames: ["Amrely", "Amreli Gujarat"],
  stripSchools: [],

  title: "Amreli IB & IGCSE Tutors | Online Private Home Tuition",
  metaDescription:
    "Private online IB and IGCSE tuition for Amreli and Saurashtra: one-to-one Cambridge, Edexcel and IB PYP to DP lessons at home, with a free trial session.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Amreli",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR AMRELI, DELIVERED ONLINE",
  heroSubtitle:
    "Saurashtra families often want private home tuition that matches an overseas or international syllabus, and Amreli offers none locally. IB and IGCSE tutors in Amreli work over live video instead: one teacher, one child, the actual IB guide or Cambridge paper code on the table, and a free trial before any payment.",
  primaryKeyword: "IB and IGCSE tutors in Amreli",
  imageAltText: "Amreli student working through an IB Economics diagram with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Amreli",
    "IGCSE tutor Amreli",
    "IB home tuition Amreli",
    "IGCSE home tuition Amreli",
    "IB private tuition Amreli",
    "IB Maths tutor Amreli",
    "IGCSE Maths tutor Amreli",
    "IB Physics tutor Amreli",
    "IB Chemistry tutor Amreli",
    "IB Biology tutor Amreli",
    "IB DP tutor Amreli",
    "IB MYP tutor Amreli",
    "IB PYP tutor Amreli",
    "IGCSE online tuition Amreli",
    "Cambridge IGCSE tutor Amreli",
    "Edexcel IGCSE tutor Amreli",
    "IB tutor Savarkundla",
    "IGCSE tutor Dhari",
    "online IB tutor Rajula",
    "IB tutor Amreli Gujarat",
  ],

  heroTrustPoints: [
    "One teacher and one student on a live call, chosen for how well they know your child's course",
    "There are no in-person visits in Amreli; house calls exist only in Gurugram and parts of Delhi NCR",
    "You watch a complete trial lesson before spending anything",
    "IB Gram is independent of the IB, Cambridge, Pearson Edexcel and every school named on the page",
  ],
  heroStats: [
    { value: "Saurashtra-wide", label: "Amreli city and surrounding talukas" },
    { value: "PYP to DP", label: "Every IB stage" },
    { value: "IST", label: "Same clock as your tutor" },
    { value: "Trial first", label: "No fee for the first lesson" },
  ],

  intro: {
    heading: "Amreli families, Gujarati boards and the wider world",
    paragraphs: [
      "Amreli was rebuilt as a modern town in 1793 under Bhavnagar's leadership, joined Saurashtra State in 1947 and Gujarat in 1960. It is now a district headquarters of roughly a lakh and a quarter, in a district known for groundnut and cotton, for diamond-trade households with ties to Surat, and for the Gir lions on its southern side. Schools here run on the Gujarat Board, with some CBSE campuses. We could not verify any that teach the IB or Cambridge or Edexcel IGCSE.",
      "Gujarati families have long looked abroad, and Saurashtra has relatives in the UK, East Africa, the US and the Gulf. That is one reason parents in a town of this size ask about international syllabuses at all. A child who might join cousins overseas, or run a firm with international customers, benefits from a qualification other countries read easily.",
      "The trouble is supply. No school nearby offers the course and no one in town has taught it lately. IB and IGCSE tutors in Amreli therefore come from the rest of India, and reach the child through a live screen at the hour agreed.",
      "Just to be plain about the format: a tutor never turns up at your home in Amreli. What your child receives is private tuition at home, over video. The tutor also never writes a student's IA, Extended Essay, TOK essay or coursework; they explain, mark and coach.",
    ],
    bullets: [
      "For diaspora-linked families planning study abroad",
      "IGCSE by Cambridge or Edexcel paper code",
      "IB support from PYP through the Diploma",
      "Timed around Diwali vacation and Navratri",
      "Online only in Amreli: no home visits",
    ],
  },

  programmesIntro:
    "Amreli has no school we could verify for any IB stage, so a family meets the programmes through relocation, a boarding seat in another city or a plan to move a child to an international school at a later class. This is what each stage tends to involve.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5 (ages 3-12)",
      description:
        "Teaching is arranged around inquiry units rather than timetabled subjects, and the final year brings a group Exhibition. No external paper exists, which leaves tutoring free to concentrate on reading fluency, arithmetic habits and asking better questions.",
      countryNote:
        "Requests for PYP in Amreli usually arrive when a family expects to relocate, perhaps to Ahmedabad, Mumbai or overseas, and wants the child comfortable with inquiry-style learning beforehand.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to 10 (ages 11-16)",
      description:
        "Eight subject groups are marked against criteria, and Year 5 closes with a Personal Project. A child raised on Gujarati-medium textbooks often needs to learn to argue a point in written English before those criteria pay off.",
      countryNote:
        "MYP tuition tied to Amreli is generally for a boarder or a child who has just moved, catching up in Sciences or Language and Literature.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and 12 (ages 16-19)",
      description:
        "Students pursue six subjects, with TOK, an Extended Essay and CAS on top. Internal assessments feed into grades, and results come out after the May or November exams.",
      countryNote:
        "Since no Diploma school exists in the district, a student from Amreli follows it in another city, and evening lessons at home fill vacations and weak spots.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and 12 (ages 16-19)",
      description:
        "Two or more Diploma courses are combined with a career-related qualification, a reflective project and a skills strand. Few Indian schools run it, and support is confined to the Diploma courses inside it.",
      countryNote:
        "CP is rarely asked about from Amreli, and where it is, tutoring covers only the Diploma courses.",
    },
  ],

  subjectsIntro:
    "IB Economics HL revision and a Class 7 MYP Science task are separate jobs, so we start from the subject, the level and the date of the next assessment. Amreli families with a business background often lean to Economics, Business Management and Maths, which we can cover well.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "A course of algebra, calculus and proof. Gujarat Board students usually calculate fast and gain most from practice at setting out reasoning in full." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data, probability and modelling with a graphic calculator, a common choice for children headed to commerce, finance or life sciences." },
    { name: "IB Physics", levels: "HL / SL", description: "Marks tend to be lost to slow data-booklet use and vague explanations, both of which respond to timed practice." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Calculations feel familiar; organic reaction routes and the write-up of the investigation need extra guidance." },
    { name: "IB Biology", levels: "HL / SL", description: "A big syllabus that rewards steady retrieval practice and exact command-word answers, with plenty of scope for local ecology ideas." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams matched to live examples such as groundnut prices, exports or diamond-sector demand help arguments stick." },
    { name: "IB Business Management", levels: "HL / SL", description: "Natural for family-firm households, focused on case-study reading and structured extended responses." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, networks and, at HL, a released case study, all rewarded by regular coding practice." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Land use, water and wildlife, with the Gir landscape a rich source of examples." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Comparative writing and oral commentary, built through timed tasks." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, writing and oral practice for students who want Hindi assessed." },
    { name: "IB Gujarati A: Literature", levels: "SL", description: "A school-supported self-taught option for students who want their mother tongue on the transcript; tutor support depends on availability." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies and fieldwork-style internal assessment, with Saurashtra's semi-arid climate and coastline as points of reference." },
  ],

  igcseSubjectsIntro:
    "No IGCSE school in the district is confirmed, so most students are adding Cambridge or Edexcel content to the Gujarat or CBSE syllabus, or preparing for a move to an international school. Sessions follow the specific paper code.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tackles more algebra, geometry and trigonometry than the state syllabus; working steps carry marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Functions, calculus and vectors ahead of the Diploma or A Level." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation handling and the alternative to practical are given regular slots." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, energetics and organic chemistry with exam-style questions from the outset." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, ecosystems and human systems, answered in the wording the mark scheme expects." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Demand, supply and policy with two-sided evaluation and examples from Indian trade." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Structures, marketing and finance, useful for children from family-firm homes." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, statements and ratios, a good match for trading families." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python and pseudocode alongside networks and data." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative and summary practised under time pressure." },
  ],

  regionsTitle: "Amreli and its talukas, taught online",
  regionsIntro:
    "Every lesson runs on video, so the places below are context about which schools and catchments families come from, how the heat or a power cut affects evening study and how far the nearest confirmed international campus lies.",
  regions: [
    { name: "Amreli city centre", note: "The market core beside the Thebi river, where most professional and trading families live and where broadband is steadiest." },
    { name: "Lathi Road area", note: "A residential belt on the town's western side with a growing number of newer homes and school-going children." },
    { name: "Savarkundla", note: "A large taluka town with textile and trading families that often look to Rajkot and Bhavnagar for schooling." },
    { name: "Dhari", note: "A town towards the Gir forest, where distance from any city makes online teaching a practical choice." },
    { name: "Rajula", note: "A coastal-side taluka with port-linked business families and a tradition of members working overseas." },
    { name: "Babra", note: "A cotton and groundnut belt town where many families are farmers or traders with growing interest in English-medium schooling." },
    { name: "Bagasara", note: "A trading town known for its agro-processing, with families that send older children to Rajkot for study." },
    { name: "Lathi", note: "A smaller taluka with strong ties to the diamond trade in Surat, and household members abroad." },
    { name: "Liliya", note: "A quieter town where evening power and connectivity need a little planning." },
    { name: "Jafrabad and Chalala", note: "Coastal and near-coastal settlements with fishing and industrial families and limited access to city schools." },
  ],

  schoolDisclaimer:
    "We could not confirm an IB World School or a Cambridge or Edexcel IGCSE centre in Amreli district, so the strip above carries none. The schools below are in other Gujarat cities and appear only so families can see where campuses exist. IB Gram is independent and has no tie to any of them.",
  schoolClusters: [
    {
      city: "Nearby: Rajkot",
      note: "The largest Saurashtra city, just over a hundred kilometres away, with a confirmed school offering an international curriculum.",
      schools: ["The Galaxy School"],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "Gujarat's main hub for IB and Cambridge campuses lies well over 250 km from Amreli, and is where boarding and relocation decisions usually end up.",
      schools: ["Ahmedabad International School", "Calorx Olive International School", "Udgam School for Children"],
    },
    {
      city: "Nearby: Vadodara",
      note: "Another Gujarat city with confirmed international schools, reached by rail or road for families weighing a move.",
      schools: ["Navrachana International School"],
    },
  ],

  modesIntro:
    "Amreli sessions all happen the same way, on live video with a single tutor. What you tune is the rhythm: how often, how intensively and how much written follow-up.",
  modes: [
    {
      title: "One evening a week",
      description: "A single dependable slot, extended to two when exams draw near.",
      bullets: [
        "Tutor picked for the syllabus, wherever they live",
        "Covers IB, Cambridge and Edexcel",
        "Past papers marked as the student watches",
        "The same person teaches all term",
      ],
    },
    {
      title: "Weekly slot with monthly reviews",
      description: "The same lessons, plus a short note after each and a fuller review every four weeks or so.",
      bullets: [
        "Notes list what was done and what is set",
        "A monthly parent conversation",
        "Helps a busy business household keep track",
        "Extra sessions available before mocks",
      ],
    },
    {
      title: "Vacation intensives",
      description: "Concentrated blocks in the Diwali vacation, winter or summer, planned around Amreli's heat and festival weeks.",
      bullets: [
        "Timed papers with quick feedback",
        "Suits boarders home for the break",
        "Best arranged a few weeks ahead",
        "Morning or evening slots to avoid peak heat",
      ],
    },
  ],

  sections: [
    {
      heading: "What determines the cost of IB or IGCSE tuition in Amreli?",
      paragraphs: [
        "No fixed prices appear here. The answer is that the rate depends on the subject, the level, the length and frequency of lessons and how experienced the tutor is, and we put the figure in writing before your child attends the free trial.",
        "Higher Level Diploma courses in Maths or the sciences sit above primary or lower-secondary help, since fewer tutors have taught them recently. Someone who has marked IB papers or run Cambridge Extended classes for years charges more than a newer graduate. Two lessons a week cost more than one, though the per-hour rate may differ.",
        "Businesspeople in Amreli will recognise the real comparison: not tuition versus nothing, but tuition versus the other way to obtain this teaching. Coaching in Rajkot or Ahmedabad means lodging, travel and time away from school; an online arrangement removes all three.",
        "For a quotation, message the programme or board, the subject, the level and the lessons per week you have in mind, and we will answer in writing.",
      ],
    },
    {
      heading: "Where do Amreli students go after the IB or IGCSE?",
      paragraphs: [
        "Ahmedabad, Rajkot, Vadodara and Surat draw most undergraduates from the district, and an increasing number head overseas, often to places where the family already has relatives. With an IB Diploma, a student can apply to Indian universities through the Association of Indian Universities' equivalence route, and abroad on predicted and final grades.",
        "Cambridge and Edexcel results normally lead to A Levels or the Diploma before university, though some Indian institutions accept the qualification for Class 10 equivalence. Each publishes its own rules, so read them for the course you are aiming at.",
        "Medicine and engineering need forward planning. NEET and JEE follow the Indian syllabus, so an IB or IGCSE student must prepare separately, and GUJCET has its own eligibility rules that should be checked in the year's brochure. CUET-UG serves central universities, and IB students apply through it as any other candidate.",
        "Many families here want commerce, finance or family-firm skills for the next generation. Business, Economics and Maths in the IB are a good fit, and lead into management, accountancy and finance programmes worldwide.",
      ],
      table: {
        caption: "Routes open to an Amreli student with IB or IGCSE results",
        columns: ["Goal", "Route", "What to check"],
        rows: [
          ["Indian university", "AIU equivalence, then the university's own rules", "Subject combination and minimum marks"],
          ["Medicine or engineering", "NEET or JEE alongside the IB or A Level", "Indian-syllabus preparation and eligibility"],
          ["Central university", "CUET-UG", "Subject mapping for IB and Cambridge students"],
          ["Study abroad", "Predicted or final IB or A Level grades", "Language tests and application deadlines"],
        ],
      },
    },
    {
      heading: "How does a Gujarat Board or CBSE education line up with IB and IGCSE?",
      paragraphs: [
        "The three approaches reward different strengths. The Gujarat Board's Class 10 and 12 lean heavily on textbook recall and worked procedures, and are linked to GUJCET and other state admissions. CBSE stresses NCERT concepts and feeds JEE, NEET and CUET. IGCSE and the IB expect explanation, evaluation and sustained writing.",
        "Whether to switch depends on timing. IGCSE in Grade 9 is easier than the IB Diploma in Class 11, because IGCSE keeps a familiar structure of topics and papers. The Diploma demands an Extended Essay, TOK and a language on top of six subjects.",
        "Language is a real hurdle for Gujarati-medium students. Technical English can be a stumbling block for months, and a patient tutor who makes the student write explanations aloud and on paper is often the difference.",
        "None of these routes is better in every case, which is why a diagnostic lesson helps before a family commits to a change.",
      ],
      table: {
        caption: "Gujarat Board, CBSE, IGCSE and IB Diploma side by side",
        columns: ["Feature", "Gujarat Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["What it rewards", "Recall and procedure", "Concepts and application", "Structured reasoning", "Analysis, research and reflection"],
          ["Language of study", "Gujarati or English", "English or Hindi", "English", "English"],
          ["Entrance link", "GUJCET, NEET, JEE", "JEE, NEET, CUET", "A Level or IB", "AIU equivalence and overseas entry"],
          ["Extras beyond exams", "Few", "Projects and internal marks", "Optional coursework", "IA, Extended Essay, TOK, CAS"],
        ],
      },
      bullets: [
        "IGCSE in Grade 9 is the easier bridge from a state syllabus",
        "The IB Diploma suits students who like writing and independent work",
        "Written English is usually the biggest adjustment",
        "A diagnostic lesson clarifies the choice",
      ],
    },
    {
      heading: "Should we choose an online tutor, a coaching class, a local teacher or self-study?",
      paragraphs: [
        "Coaching in Amreli and nearby towns is built around the Gujarat Board, GUJCET, JEE and NEET, and the good centres do that well. None we know of teaches an international syllabus. A private teacher in town may be excellent at general Maths without knowing IB Analysis and Approaches or Cambridge Extended.",
        "Self-study using past papers works for very organised students, but marks are usually lost on written answers that no one has corrected.",
        "Online one-to-one lessons match the specialist to the child and are held when the household is free. The cost is a stable connection and a quiet room, which are worth confirming before the trial.",
        "The table sets out the trade-offs.",
      ],
      table: {
        caption: "Study routes for an international syllabus from Amreli",
        columns: ["Route", "Course knowledge", "Timing", "Main drawback"],
        rows: [
          ["Online one-to-one tutor", "Chosen for the exact syllabus", "Agreed with family", "Needs reliable internet"],
          ["Local coaching class", "State board, GUJCET, JEE, NEET", "Fixed batches", "No IB or IGCSE teaching that we could confirm"],
          ["Local private teacher", "General school subjects", "Flexible", "May not know the specification"],
          ["Self-study", "Depends on the student", "Any time", "No marking of written work"],
        ],
      },
    },
    {
      heading: "When are the exams, and how do heat and festivals shape the year in Amreli?",
      paragraphs: [
        "The IB Diploma sits in May and November. Cambridge IGCSE has February-March, May-June and October-November series, and Pearson Edexcel International GCSE has January, May-June and October-November. Results arrive some weeks or months on. Anyone sitting as a private candidate should settle the centre and entry dates early.",
        "Amreli's summers are harsh; Wikipedia records a high of 46.2 degrees Celsius in May, and afternoon study is a poor idea. Gujarat schools also take a long Diwali vacation, often close to three weeks, which is a natural window for intensive lessons.",
        "Navratri turns evenings over to garba across the district, and Uttarayan in January fills roofs with kite flyers. Both are worth planning around instead of fighting.",
        "The table gives a rough calendar for planning only; confirm dates with your school or exam centre.",
      ],
      table: {
        caption: "The Amreli study calendar",
        columns: ["Period", "What happens", "Study advice"],
        rows: [
          ["January to March", "Uttarayan; Edexcel January series; IGCSE February-March; state boards", "Short lessons on either side of the exams"],
          ["April to June", "Severe heat; IB May exams; Cambridge summer series", "Mornings and late evenings only"],
          ["July to September", "Monsoon of roughly 615 mm; new school year", "A good time to set a stable weekly slot"],
          ["October to December", "Navratri, Diwali vacation; IB and Cambridge November series", "Intensive blocks in the vacation, light weeks around garba nights"],
        ],
      },
    },
    {
      heading: "Which IB Maths and science subjects suit a business-minded student?",
      paragraphs: [
        "IB Maths Analysis and Approaches builds calculus and proof and suits students headed to engineering or pure sciences. Applications and Interpretation stresses data, modelling and technology, and matches economics, business, finance or biology.",
        "For a student from a trading or diamond family who wants to run or expand the firm, a combination such as Business Management, Economics, Maths Applications and a science keeps commerce, finance and technology open. If the aim is medicine, Biology and Chemistry at Higher Level carry the weight.",
        "The sciences each have an internal investigation that a tutor may guide but not write. Getting a workable question early is worth a couple of weeks of thought.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects to pick?",
      paragraphs: [
        "In Maths and the sciences, Cambridge offers Core, capped at grade C, and Extended, which reaches A*. Students who want A Level, the IB Diploma or any science route should sit Extended, while Core suits those who want a foundation with less pressure.",
        "A common set has six or seven subjects: English, Maths, two sciences, a language and options such as Business Studies, Accounting, Economics or Computer Science. For Amreli's trading families, Accounting and Business Studies are especially popular.",
        "Cambridge and Pearson Edexcel are separate boards with different paper designs, so a student normally sits one board's papers per subject. Tutoring is matched to that choice.",
        "The free trial serves as a diagnostic paper, and its result usually settles the tier.",
      ],
    },
    {
      heading: "Can a small-town student really compete for international university places?",
      paragraphs: [
        "Yes. Cambridge sets the same exam for every candidate worldwide, and the IB moderates every school's work against a global standard, so a lesson given from another city prepares an Amreli child on identical terms.",
        "What sets small-town students apart is usually access, not ability. Fewer teachers with recent IB or Cambridge experience are within reach, and fewer classmates are preparing for the same tests. Online tutoring narrows that gap directly.",
        "Applications also draw on more than grades. Overseas universities ask for reflective writing, references and often language tests, and a tutor can help a student practise the writing without producing it for them.",
        "None of this needs a move to a metro at fifteen. Many families choose to keep the child at home through Class 10, add IGCSE-level preparation online, and decide on a boarding move later.",
      ],
    },
  ],

  tutorsIntro:
    "These tutors already teach IB PYP to Diploma courses and Cambridge or Edexcel IGCSE to Indian families online. Every match is built around the syllabus, level and exam session your child is working toward.",

  process: [
    { title: "Send the brief", description: "Say which board or programme, which subject, how the child is doing and when the house is quiet." },
    { title: "Read the shortlist", description: "We put forward a tutor or two and explain in a paragraph why they fit the course." },
    { title: "Take the free lesson", description: "A live session on a real topic. Nobody is asked to sign up afterwards." },
    { title: "Fix the first month", description: "The tutor lists topics and pace; you agree or change them, and the fee is in writing." },
    { title: "Keep going or switch", description: "A regular slot, short reports after sessions and a simple change of tutor if it is not working." },
  ],

  whyPoints: [
    { title: "Chosen for the course", description: "Tutors are picked because they taught that IB guide or Cambridge code recently." },
    { title: "Built for Saurashtra towns", description: "No verified IB or IGCSE school exists in Amreli, so distance does not decide the tutor." },
    { title: "Try first", description: "A free lesson lets your child judge for themselves." },
    { title: "The student's own work", description: "Tutors never draft assessed pieces; they explain, check and coach." },
    { title: "Clear reports", description: "Short notes after sessions and a longer review each month." },
    { title: "Simple exit", description: "Fees are stated upfront, nothing binds you and a tutor change takes a message." },
  ],

  faqs: [
    { question: "Where can I find an IB tutor in Amreli?", answer: "Through an online match. Tell us the programme, subject, level and exam session, and we find a tutor who taught that course recently, since Amreli has no IB school we could verify. You receive a shortlist and a free lesson, then a written month plan. The tutor teaches live and alone with your child at a time set with your household." },
    { question: "Does a tutor come to our home in Amreli?", answer: "No. IB Gram tutors do not visit homes in Amreli or elsewhere outside Gurugram and parts of Delhi NCR. In Amreli, private home tuition means private lessons taken at home on a laptop or tablet, live with the tutor. The child stays in the comfort of a familiar room and gets an undivided hour." },
    { question: "Can Amreli students get IGCSE tuition?", answer: "Yes, for Cambridge and Pearson Edexcel, online. The tutor is picked for the paper code and tier, such as 0580 Extended Mathematics or 0455 Economics. Students may attend an international school elsewhere, be preparing to move, or be sitting papers privately. The free first lesson is used as a diagnostic so the plan begins in the right place." },
    { question: "How much will IB or IGCSE tuition cost?", answer: "The fee depends on subject, level, session length, weekly frequency and tutor experience, and you receive it in writing before the free trial. We publish no price list. Higher Level Diploma courses generally cost more than junior-level support. Online lessons save the travel and lodging that coaching in Rajkot or Ahmedabad would require." },
    { question: "Is there an IB or IGCSE school in Amreli?", answer: "We could not confirm one. Amreli's schools follow the Gujarat Board or CBSE. Rajkot has one confirmed school with an international curriculum, and Ahmedabad and Vadodara have more. If a school in Amreli has just been authorised, tell us and we will check the official IB or Cambridge listing before we change this page." },
    { question: "My child studies Gujarat Board. Is IGCSE Maths or Science manageable alongside?", answer: "Usually, yes. The subject matter overlaps more than most parents expect. The change is in presentation: Cambridge marks method and reasoning written in English, where board papers often reward the final figure. A tutor works on that habit first, then adds Extended-tier content. A diagnostic hour shows how much extra time is needed." },
    { question: "Can we have a free lesson before deciding?", answer: "Yes. Every match starts with a free lesson on a real topic from your child's course. Afterwards the tutor sends a plan for the first month and you decide. If they do not suit, we introduce another tutor. Fees are already in writing by then, so nothing about cost is left uncertain." },
    { question: "Will the tutor do the IA or Extended Essay?", answer: "No. Tutors do not write Internal Assessments, Extended Essays, TOK essays or coursework of any kind. They can explain what the criteria reward, talk through whether a question is workable, discuss methods and give feedback on what the student has written. The authorship must remain the student's, as the IB and Cambridge require." },
    { question: "Which IB Diploma subjects can you support for Amreli students?", answer: "Maths in both courses at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, Environmental Systems and Societies, Geography, English A, Hindi B and, where a tutor is free, Gujarati A. Ask about any other subject and we will say straight away whether it can be staffed." },
    { question: "Do you teach MYP and PYP too?", answer: "Yes. MYP work is around criteria-marked tasks in the sciences, maths and languages, plus the Personal Project journal. PYP work builds reading, writing and number sense, and helps with unit tasks. Younger children usually do better in shorter sessions, with a parent close by during the first weeks." },
    { question: "Is online tuition enough for a student here?", answer: "For an international syllabus in Amreli it is the workable option, because no local specialist teaches it. A shared whiteboard, papers marked with the student watching and a written note after each lesson deliver most of what a classroom would. You need a stable connection and a quiet space, and the trial shows whether they are adequate." },
    { question: "What happens in a power cut or heatwave?", answer: "Tell the tutor early and the lesson moves, normally to the next day. In summer we favour early mornings and late evenings, and a phone hotspot or charged laptop is a sensible backup. A fixed weekly slot makes it easier to reschedule when the weather or grid interferes." },
    { question: "How do you vet tutors?", answer: "We check degrees, the latest classes taught in the exact subject and level and how the person uses mark schemes and criteria. A short sample lesson comes first. The trial hour with your child is then the real test, and if the match fails we replace the tutor promptly." },
    { question: "When should an Amreli student begin?", answer: "As early in the course as possible: Class 11 for the Diploma, Grade 9 for IGCSE and Year 4 for MYP. That leaves room to correct weaknesses before internal deadlines and mocks. If the exam is close, a dense block still helps; give us the date in your first message." },
    { question: "Can you support Hindi or Gujarati at this level?", answer: "Hindi B is offered for the IB at both levels and Cambridge Hindi as a second language is covered. Gujarati support depends on tutor availability, often as an IB Language A course taken with school approval. Tell us the level and session and we will confirm before the trial." },
    { question: "Is IB Gram linked to a school or exam board?", answer: "No. IB Gram is an independent tutoring service and has no affiliation, endorsement or payment relationship with the IB, Cambridge, Pearson Edexcel or any school mentioned. Names appear solely to show families where campuses are, and each is checked against public sources." },
    { question: "How do I start?", answer: "Send the programme, subject, level, current grade and free hours to support@ibgram.com or WhatsApp +91 7439 368 115. Have a laptop or tablet with camera and microphone, and a steady connection. We normally respond within one working day with a shortlist and trial times." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online tuition serves Indian cities without a local IB school." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one area with in-person home visits." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects, TOK, Extended Essay and CAS." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and assessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "How the two IB Maths courses differ." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your details and ask for a free lesson." },
    { label: "Tutoring in Rajkot", href: "/rajkot/", description: "Saurashtra's largest city and a confirmed international school." },
    { label: "Tutoring in Bhavnagar", href: "/bhavnagar/", description: "A neighbouring Saurashtra city where tuition is online." },
    { label: "Tutoring in Ahmedabad", href: "/ahmedabad/", description: "Gujarat's main IB and Cambridge hub." },
  ],

  closingHeading: "Ask for a free lesson for your Amreli student",
  closingBody:
    "Send the board or programme, subject, level, current marks and the hours you can spare. You will hear back with a tutor, a few lines on their teaching and trial times, all online and without a fee.",
};
