import type { CitySeoPage } from "../types";

/**
 * /gudur/ - IB and IGCSE tutoring page for Gudur, Tirupati district, Andhra Pradesh (formerly Nellore district).
 * Online-only delivery. No IB or Cambridge school was confirmed in Gudur, so stripSchools is empty and the
 * clusters are labelled nearby cities whose schools are already named on sibling pages.
 */
export const gudur: CitySeoPage = {
  slug: "gudur",
  countryName: "Gudur",
  countryNameLong: "Gudur, Andhra Pradesh",
  demonym: "Gudur",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  flagCode: "in",
  countryCode: "IN",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are booked around the northeast monsoon and cyclone weeks, the Sankranti and Ugadi breaks, and the school timetable your child already keeps",
  lastUpdated: "2026-09-21",
  geo: { latitude: 14.1474, longitude: 79.8514 },
  wikipedia: "https://en.wikipedia.org/wiki/Gudur,_Tirupati_district",
  alternateNames: ["Gudur Nellore", "Gudur Tirupati district", "Gudur Junction"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Gudur | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Gudur students in Andhra Pradesh: one-to-one online tuition taught at home, cyclone-season planning and a free trial class first.",
  h1: "IB and IGCSE Tutors and Private Online Tuition in Gudur",
  heroEyebrow: "ONE-TO-ONE IB & IGCSE TUITION FOR GUDUR FAMILIES",
  heroSubtitle:
    "If you want private tuition at home for an IB or IGCSE student in Gudur, the practical answer is an online tutor who joins your child's laptop for a live lesson. Gudur is a railway junction town on the Chennai to Vijayawada line, close to the coast, with families whose work takes them to ports, industrial parks and cities further away. That movement is exactly why international-curriculum questions come up here.",
  primaryKeyword: "IB and IGCSE tutors in Gudur",
  imageAltText: "A Gudur student studying IB Chemistry notes at home with a tutor on a live online lesson",
  secondaryKeywords: [
    "IB tutor Gudur",
    "IGCSE tutor Gudur",
    "IB home tuition Gudur",
    "IGCSE home tuition Gudur",
    "IB private tuition Gudur",
    "IB Maths tutor Gudur",
    "IGCSE Maths tutor Gudur",
    "IB Physics tutor Gudur",
    "IB Chemistry tutor Gudur",
    "IB Biology tutor Gudur",
    "IB DP tutor Gudur",
    "IB MYP tutor Gudur",
    "IB PYP tutor Gudur",
    "IGCSE online tuition Gudur",
    "Cambridge IGCSE tutor Gudur",
    "IB tutor Gudur Tirupati district",
    "IB tutor Naidupeta",
    "online IGCSE tutor Nellore region",
    "IB tutor Gudur Junction",
  ],

  heroTrustPoints: [
    "Tutors are matched to an exact IB course or IGCSE syllabus before anything else",
    "Every lesson is online; in-person home tuition is offered only in Gurugram and parts of Delhi NCR",
    "The first lesson is a free trial with no obligation",
    "No tie to the IB, Cambridge, Pearson Edexcel or any school named here",
  ],
  heroStats: [
    { value: "Online", label: "Private lessons from home" },
    { value: "PYP to DP", label: "IB primary to Diploma" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
    { value: "Free trial", label: "Try it first" },
  ],

  intro: {
    heading: "A tutoring service for a railway and coastal town with wider horizons",
    paragraphs: [
      "Gudur sits near the Andhra coast, where the Swarnamukhi flows towards the Bay of Bengal, and most people know it as a junction on the main Chennai to Vijayawada rail route. Its economy mixes trade, agriculture, mining heritage and work tied to nearby ports and industrial zones. Schools in the town follow the Andhra Pradesh state syllabus or CBSE, and we could not confirm a local school that teaches the IB or a Cambridge or Edexcel IGCSE.",
      "Families in Gudur ask about IB and IGCSE tutors for practical reasons. A parent may work for a company that moves staff between Chennai, Nellore, Tirupati and further afield. Another may run a business with overseas partners, or plan a boarding school place for a child. In each case the tutor is a bridge, not an extra.",
      "Because Gudur has no local specialists we can confirm, the tutor is chosen on syllabus and level from across India, and lessons are live and one to one. Tutors do not visit homes in Gudur, since in-person home tuition runs only in Gurugram and parts of Delhi NCR. Online home tuition gives the same attention, taken on your own table, with a shared whiteboard.",
      "IB Gram is an independent service and has no partnership with the IB, Cambridge, Pearson Edexcel or any named school. Tutors coach and explain, and they do not write Internal Assessments, Extended Essays, TOK essays or coursework.",
    ],
    bullets: [
      "IB PYP, MYP and DP, and Cambridge and Edexcel IGCSE",
      "Lessons in English, with Telugu or Hindi explanations where useful",
      "Timing planned around cyclone weeks and festivals",
      "Free first lesson and written notes afterwards",
    ],
  },

  programmesIntro:
    "Gudur has no confirmed IB school of its own, so the four IB programmes reach local families through relocation, boarding or a planned school move. The notes below describe how each stage usually appears in this part of the Nellore and Tirupati belt.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 3-12",
      description:
        "The PYP frames learning as inquiry into six transdisciplinary themes, and ends with the Exhibition in the final year. Tutoring supports early literacy and numeracy while keeping the questioning habit that the programme is built on.",
      countryNote:
        "A PYP learner in Gudur is typically a child whose family moved from a city school, or one preparing for an international primary school in Chennai or Tirupati.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Students are graded on criteria such as knowing, investigating, communicating and reflecting. The Personal Project asks for independent work, and the discipline of planning it is often the biggest challenge.",
      countryNote:
        "MYP support from Gudur often covers a boarder home for holidays or a student catching up after joining a new school mid-year.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects with the Extended Essay, Theory of Knowledge and CAS. The final exams come in May and internal assessments are due through the two years.",
      countryNote:
        "Diploma students linked to Gudur study in a school elsewhere, often Chennai or Bengaluru, and tutoring follows that school's timetable and assessment deadlines.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A route that blends Diploma subjects with a career-related course and reflective project. It suits students who want a more applied pathway towards work or vocational study.",
      countryNote:
        "CP is uncommon in coastal Andhra, so enquiries usually concern particular Diploma courses within the CP choice of a student enrolled elsewhere.",
    },
  ],

  subjectsIntro:
    "Each tutor is matched to the course, the level and the session your child will sit. These are the IB subjects families in the Gudur region ask about most, with notes on where help is usually needed.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Functions, calculus, vectors and proof, for students targeting engineering, science and economics degrees." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and financial applications with heavy use of a graphic display calculator." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, circuits, waves and atomic physics, with attention to units and uncertainty." },
    { name: "Chemistry", levels: "SL / HL", description: "Reaction calculations, equilibrium, acids and bases, and organic mechanisms." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology, genetics, evolution and ecology, with data-based questions practised weekly." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Coastal and river systems make local case studies easy to find for a student on the Andhra coast." },
    { name: "Economics", levels: "SL / HL", description: "Supply, demand, trade and development, using Indian and global examples." },
    { name: "Business Management", levels: "SL / HL", description: "Business plans, finance and marketing, with case-based questions in the style of the papers." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming logic, data structures and databases, with practice in writing precise pseudocode." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis and comparative writing, with oral commentary practice." },
    { name: "Hindi B", levels: "SL / HL", description: "A common second-language choice, with comprehension, writing and speaking support." },
    { name: "Telugu B", levels: "SL", description: "For students who want to keep their home language inside the Diploma; availability is confirmed at the trial stage." },
    { name: "Psychology", levels: "SL / HL", description: "Research methods and studies in behaviour, with structured short and long answers." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion of knowledge questions and exhibition objects, with coaching on thinking and not on writing the essay." },
  ],
  igcseSubjectsIntro:
    "IGCSE tutoring in Gudur is usually part of a bridge plan: a student from an Andhra board or CBSE school getting ready for a Cambridge or Edexcel course. Tutors work from the exact syllabus code.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Algebra, trigonometry, geometry and data handling, with worked method shown on every question." },
    { name: "IGCSE Additional Mathematics", levels: "Class 10", description: "Adds differentiation, integration and vectors, helpful before IB Analysis and Approaches." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Energy, motion and electricity, with practical-style questions included throughout." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, reactions, the periodic table and organic chemistry." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, inheritance, organisms and ecosystems, with careful answer structure." },
    { name: "IGCSE English First Language", levels: "Class 9-10", description: "Reading and writing tasks, with feedback on tone and structure." },
    { name: "IGCSE English as a Second Language", levels: "Class 9-10", description: "Suited to students from Telugu-medium schools who are moving to English-medium study." },
    { name: "IGCSE Economics", levels: "Class 9-10", description: "Basic economic problems, markets and government, with accurate diagrams." },
    { name: "IGCSE Computer Science", levels: "Class 9-10", description: "Programming and computer systems, practised through short code exercises." },
    { name: "IGCSE Accounting", levels: "Class 9-10", description: "Double-entry bookkeeping, statements and ratios, useful for business families." },
  ],

  regionsTitle: "Gudur and nearby towns our online tutors reach",
  regionsIntro:
    "A tutor reaches anyone with a steady connection, so the list below is about daily routines and not delivery. These are the parts of Gudur and its surroundings families most often mention. None is claimed to hold an IB or Cambridge school.",
  regions: [
    { name: "Gudur town centre", note: "The main market area. Shops close late, so many families choose a lesson after dinner hours or early in the morning." },
    { name: "Around Gudur Junction", note: "Railway staff and their families live close to the station, and shift work means lesson times are often set a week at a time." },
    { name: "Chillakur", note: "A nearby mandal with agricultural and mining links. Families often look to Gudur or Nellore for higher schooling." },
    { name: "Kota", note: "A mandal town in the same division. Students may commute to Gudur for school, which makes online lessons a time saver." },
    { name: "Vakadu", note: "A coastal-side mandal where weather and cyclone warnings sometimes interrupt routines, so backup slots are worth agreeing." },
    { name: "Chittamur", note: "Another nearby mandal with a largely rural base. Connection quality varies and a mobile hotspot is a useful fallback." },
    { name: "Naidupeta", note: "A neighbouring town with an industrial zone. Some households here have experience with transfers and with changing boards." },
    { name: "Sullurpeta", note: "A town close to the space-launch centre at Sriharikota, with professionals whose families value English-medium schooling." },
  ],

  schoolClusters: [
    {
      city: "Gudur and its surrounding mandals",
      note: "We could not confirm an IB World School or a Cambridge or Edexcel IGCSE school in Gudur. Local options are limited, so check any school's curriculum directly.",
      schools: [],
    },
    {
      city: "Nearby: Tirupati",
      note: "The closest pilgrimage and education city with schools we have confirmed on sibling pages, reachable by road or rail from Gudur.",
      schools: ["Sree Vidyanikethan International School", "Edify School"],
    },
    {
      city: "Nearby: Chennai",
      note: "About three hours away by train or road, Chennai is where many Gudur families look for day or boarding places in international schools.",
      schools: ["APL Global School", "Gateway International School"],
    },
    {
      city: "Nearby: Nellore",
      note: "The district city to the north. Families use it for coaching and for exam centres, and it is covered by our online service as well.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "School names are included only to show where IB or Cambridge options exist near Gudur. IB Gram has no affiliation with any of them, and admissions, curricula and fees change, so please confirm directly with the school.",

  tutorsIntro:
    "Tutors teach online from several Indian cities, all on Indian Standard Time, so a Gudur student has no offset to work around. Profiles list programme, subject, level and experience, and the first lesson is free.",

  modesIntro:
    "Every format is a live private lesson. Tutors do not travel to Gudur, and in-person home visits exist only in Gurugram and parts of Delhi NCR, so the three options below are all online and differ in pace and structure.",
  modes: [
    {
      title: "A weekly private lesson",
      description:
        "One tutor, one student and a set weekly hour. This suits students who want steady improvement through the school year and a familiar routine.",
      bullets: [
        "A consistent tutor across the term",
        "Worked solutions on a shared whiteboard",
        "Brief written notes after each lesson",
      ],
    },
    {
      title: "Bridge course before a school move",
      description:
        "A block of lessons over a few months to prepare a student for an international school's entry test and first term. Content follows the target school's syllabus and testing style.",
      bullets: [
        "A diagnostic lesson first",
        "English, Mathematics and science focus",
        "Practice entry papers reviewed together",
      ],
    },
    {
      title: "Cyclone-season flexible plan",
      description:
        "From October to December, lessons are scheduled with backup slots in case of heavy rain, power cuts or school closures. Students keep progress without long gaps.",
      bullets: [
        "Two slots reserved per week",
        "Lessons recorded in notes for missed days",
        "Short catch-up sessions after disruptions",
      ],
    },
  ],

  sections: [
    {
      heading: "Why would a family in Gudur look for an IB or IGCSE tutor?",
      paragraphs: [
        "Gudur is a place people pass through and also a place people leave, and both facts matter. Railway families, port and industry employees, traders and professionals move between Chennai, Nellore, Tirupati and further cities. When a family's next posting is in a city with international schools, a child who has studied the state syllabus suddenly needs to catch up on a different style of learning.",
        "A second reason is ambition. Some parents want their child to study abroad, and they see the IB Diploma or Cambridge IGCSE as a better route than waiting until Class 12. They may plan a boarding place in a city school and want a tutor to make that first year a success.",
        "A third is the returning family. A parent who worked overseas and came back to Andhra Pradesh may have a child who finished an IB year abroad. A tutor keeps the course alive, following the same syllabus and assessment style the child already knows.",
        "In all three cases the tutor's first job is to see where the child stands, then match the lesson plan to the target course and to the months available before the next exam or admission test.",
      ],
    },
    {
      heading: "Cyclone season, Sankranti and Ugadi: how does the calendar shape study in Gudur?",
      paragraphs: [
        "Gudur lies close enough to the coast to feel the northeast monsoon, which brings heavy rain and occasional cyclones between October and December. Schools sometimes close at short notice, roads flood and electricity can fail. Online lessons help, but only when the plan allows for backup slots.",
        "Sankranti in January is the big family festival, with schools closed for several days and many students travelling. Ugadi in spring marks the Telugu new year and a shorter break. Summer heat in May and June is intense, which favours early-morning or late-evening lessons.",
        "IB Diploma papers are held in May and the Cambridge IGCSE series runs in May to June and October to November. A student who sits the October series will often face revision in the middle of the rainy season, so a tutor sets extra lessons in September.",
        "The table shows how these pressures line up, so that a family can place intensive weeks where they are least likely to be interrupted.",
      ],
      table: {
        caption: "Gudur calendar pressures and how lessons adapt",
        columns: ["Period", "What to expect in Gudur", "What the tutor does"],
        rows: [
          ["June to August", "School reopens, southwest monsoon is light on the coast", "Foundation topics and a weekly routine"],
          ["September", "Preparation for the October Cambridge series", "Timed papers, extra lessons"],
          ["October to December", "Northeast monsoon and cyclone risk", "Two booked slots per week, notes for missed lessons"],
          ["January", "Sankranti holidays and mock exams", "Mock review and planning for the final term"],
          ["March to April", "Ugadi, internal assessment deadlines", "Shorter, focused sessions"],
          ["May to June", "Exams, peak heat", "Early or late lessons, then rest"],
        ],
      },
    },
    {
      heading: "Which schools near Gudur offer the IB or IGCSE?",
      paragraphs: [
        "In Gudur itself we could not confirm a school that offers the IB or Cambridge and Edexcel IGCSE, so this page names none. Most students attend local Andhra Pradesh board or CBSE schools, which prepare children well for state entrance tests.",
        "The nearest confirmed options sit in Tirupati and Chennai. Tirupati is reachable by rail or road from Gudur, and Chennai is about three hours away. Families who think about a move usually compare day options in Tirupati with boarding options in Chennai, then decide.",
        "A question worth asking any school is which programme it is authorised to teach, at what age entry is possible and what kind of entry test it sets. A tutor can prepare the child for that test, and then continue supporting the child after admission.",
        "Because the tutor teaches online, the same person can work with your child before and after a move, which avoids the gap that normally appears when a student changes cities.",
      ],
    },
    {
      heading: "Andhra Pradesh board, CBSE, IB and IGCSE: what differs?",
      paragraphs: [
        "A student moving from the Andhra Pradesh board or CBSE to IB or IGCSE meets differences in how learning is judged. Content is less of an issue than expression: explaining an answer, using evidence and showing method all count.",
        "Mathematics is usually the easiest bridge, while English and science writing take longer. The table below gives a quick comparison for families weighing a switch.",
        "Telugu-medium students need to budget extra time for English-language reading. A tutor builds vocabulary lists week by week, using the student's own mistakes to decide what to study next.",
      ],
      table: {
        caption: "Board comparison for a Gudur student",
        columns: ["Point", "AP state board", "CBSE", "IB", "IGCSE"],
        rows: [
          ["Medium", "Telugu or English", "English", "English mainly", "English mainly"],
          ["Assessment", "Board exams", "Board exams", "Exams plus internal assessment", "Externally set papers"],
          ["Entrance link", "EAMCET, NEET, JEE via Intermediate", "JEE, NEET, CUET", "Equivalence plus university applications", "Next stage: A Level, IB or Class 11"],
          ["Skills stressed", "Recall and accuracy", "Application and recall", "Inquiry, reflection, communication", "Subject mastery and exam technique"],
        ],
      },
    },
    {
      heading: "What influences the price of IB and IGCSE tuition in Gudur?",
      paragraphs: [
        "No price list is published. Each family receives a written rate before booking, so the amount is always known in advance. This section explains the drivers so you can plan.",
        "The biggest driver is the course and its level. A Higher Level Diploma science tutor with marking experience will charge more than a tutor helping with Class 8 mathematics for a bridge course. The second driver is how many hours a week you need.",
        "Timing also matters. Short, focused blocks before exams raise the monthly figure for a few weeks but avoid long periods of weak progress. Many families plan a steady weekly lesson and add sessions later.",
        "With online lessons, Gudur families avoid the cost of travel to Nellore, Tirupati or Chennai for tuition, and the first lesson is free so you can judge the fit first.",
      ],
    },
    {
      heading: "Online home tuition, coaching centres, private tutors or self-study in Gudur?",
      paragraphs: [
        "Gudur has coaching centres and local tutors that serve the state board and CBSE, and many children benefit from them. For IB and IGCSE the local pool is thin, because few teachers have worked with those syllabi.",
        "Online one-to-one lessons remove the need to find a local specialist. The tutor is chosen for the subject and level, and the lesson happens at home. The comparison below shows how this stacks up against the alternatives.",
        "Self-study with past papers is valuable for revision but weak for diagnosing mistakes. Most strong students combine self-study with regular lessons.",
      ],
      table: {
        caption: "How Gudur families can study for IB or IGCSE",
        columns: ["Option", "What you get", "Drawback", "Good fit when"],
        rows: [
          ["Online home tuition", "A subject specialist, private and flexible", "Needs a stable internet connection", "You need exact IB or IGCSE help"],
          ["Coaching centre in Nellore or Tirupati", "Group classes, structure", "Travel, limited international focus", "Preparing for state entrance tests"],
          ["Local private tutor", "Convenient, face to face", "Rare IB or IGCSE experience", "Younger children needing basics"],
          ["Self-study", "Free, flexible", "No feedback on errors", "Final revision"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Gudur go next?",
      paragraphs: [
        "In India, the Association of Indian Universities treats the IB Diploma as equivalent to Class 12, so students can apply through CUET-UG or directly to institutions. JEE and NEET have their own eligibility rules, so check them against the latest notification.",
        "Families in the Nellore and Tirupati belt often look at universities in Chennai, Bengaluru and Hyderabad, and some aim for study in the UK, the US, Canada, Australia or Singapore. The choice of Higher Level subjects and the predicted score matter in those applications.",
        "IGCSE students often continue to A Level, the IB Diploma or an Indian Class 11. The decision is made in Class 10 and depends on which schools are reachable.",
        "A tutor can explain what a course demands, but admissions decisions belong to the universities and eligibility rules change, so confirm details yourself.",
      ],
    },
    {
      heading: "IB Mathematics, Physics, Chemistry and Biology: what are the real challenges?",
      paragraphs: [
        "IB Mathematics Analysis and Approaches is for students who enjoy algebra and calculus and may study engineering or science. Applications and Interpretation suits students who prefer data and modelling. Both can be taken at Standard or Higher Level.",
        "Physics and Chemistry require accurate units and a clear argument in every answer, and Biology needs a balance between recall and data interpretation. Students from state boards may be used to shorter answers and need practice writing structured explanations.",
        "Internal assessment in sciences is an independent investigation. A tutor can discuss method, data handling and error analysis, but the experiment and the report must be the student's own.",
        "Practice with past papers shows where marks are lost, and a tutor marks them line by line, pointing out the exact wording that earns credit.",
      ],
    },
    {
      heading: "How do IGCSE tiers and subject choices work?",
      paragraphs: [
        "Core and Extended tiers exist in subjects such as Mathematics and the sciences. Core gives grades C to G, and Extended gives A* to G. Students who plan to continue with mathematics or science at A Level are normally entered for Extended.",
        "A typical IGCSE programme includes five to eight subjects: English, Mathematics, at least one science, a language and some electives. Students aiming for medicine or engineering should keep Physics, Chemistry and Mathematics.",
        "Cambridge and Edexcel papers have different styles, even when topics overlap, so tell the tutor which board the school uses.",
        "A student moving from a Telugu-medium school usually benefits from starting with English and Mathematics, because they shape performance across every other subject.",
      ],
    },
  ],

  process: [
    { title: "Share your plan", description: "Tell us the programme or board, subject, level, current marks and what your Gudur household's week looks like." },
    { title: "Review tutor matches", description: "We shortlist tutors by syllabus and level, with a short note on each." },
    { title: "Take a free lesson", description: "Try a live online lesson on a real topic, at no cost and with no obligation." },
    { title: "Agree the terms", description: "The tutor proposes a plan and the rate is confirmed in writing before you book." },
    { title: "Begin weekly lessons", description: "Regular sessions, written notes, periodic reviews and a change of tutor if needed." },
  ],

  whyPoints: [
    { title: "Syllabus before anything else", description: "We match tutors to the exact IB course or IGCSE code before thinking about timing." },
    { title: "Straightforward about format", description: "All lessons are online; we do not promise visits to Gudur." },
    { title: "Weather-aware scheduling", description: "Backup slots are agreed for monsoon and cyclone weeks." },
    { title: "Notes you can read", description: "Parents get a short written summary after each lesson." },
    { title: "Honest coaching", description: "Tutors never write assessed work for students." },
    { title: "Trial first", description: "The first lesson is free, so you can judge the fit." },
  ],

  faqs: [
    { question: "Are there IB and IGCSE tutors for Gudur students?", answer: "Yes, online. Tutors teach live and one to one from across India, so a Gudur student can work with a specialist from home. The first lesson is free, which lets you judge the tutor and the topic before making any commitment." },
    { question: "Will a tutor come to my home in Gudur?", answer: "No. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. Gudur families get online home tuition: private lessons taken at home on a laptop, with the same attention as a visit and a short written note after every session." },
    { question: "Is there an IB or IGCSE school in Gudur?", answer: "We could not confirm one. Gudur's schools mainly follow the Andhra Pradesh board or CBSE. The closest confirmed options are in Tirupati and Chennai. Please check any school's current authorisation directly before making decisions." },
    { question: "What happens to lessons during cyclone season?", answer: "We agree backup slots in advance, usually two per week between October and December. If heavy rain or a power cut stops a lesson, the tutor reschedules quickly and sends notes so your child does not fall behind." },
    { question: "How much does IB or IGCSE tuition cost in Gudur?", answer: "Rates are given in writing before you book, and there is no public price list. The rate depends on the programme, level, tutor experience and hours per week. Online lessons also save the cost of travelling to a bigger city." },
    { question: "Can you help my child move to an international school in Chennai?", answer: "Yes. We ask which school and which year, then build a bridge course covering English, Mathematics and science, with practice entry papers. Afterwards the same tutor can keep supporting your child once the new term begins." },
    { question: "Which IB Mathematics course is right for my child?", answer: "Analysis and Approaches suits students heading for engineering or science, while Applications and Interpretation suits economics, commerce and life sciences. The school usually guides the choice, and a tutor can explain what each course demands." },
    { question: "Do you teach in Telugu?", answer: "Lessons are mostly in English because IB and IGCSE papers are in English, but tutors can clarify difficult ideas in Hindi, and some can in Telugu. Mention the preference when you write to us and we will try to match it." },
    { question: "Can tutors write Internal Assessments or Extended Essays?", answer: "No. Tutors coach method, structure and feedback only. They never write or rewrite any part of an Internal Assessment, Extended Essay, TOK essay or coursework, because these must be the student's own work." },
    { question: "When are the IB and IGCSE exams?", answer: "IB Diploma exams are in May, with results in early July, and some schools also run a November series. Cambridge IGCSE has May to June and October to November series. A tutor plans preparation from the session your child will sit." },
    { question: "Which IGCSE boards do you cover?", answer: "Cambridge IGCSE and Pearson Edexcel IGCSE. Topics overlap, but question styles and mark schemes differ, so tell us the board and syllabus code at the start. The tutor then prepares your child for that specification." },
    { question: "Should my child take Core or Extended IGCSE Mathematics?", answer: "Extended is usually right for students who plan to study Mathematics, Physics or Chemistry at A Level or in the IB. Core suits students who need a steady foundation. The school decides entry, and a tutor helps your child prepare." },
    { question: "How does the free trial work?", answer: "You send a topic or a past-paper question and a tutor teaches it live for about one lesson. You then choose whether to continue, ask for a different tutor or stop, with no obligation at any point." },
    { question: "What if the internet is poor during a lesson?", answer: "We agree a backup plan at the start, such as a mobile hotspot or a quick reschedule. The shared whiteboard keeps the work visible, so the lesson can resume without losing progress." },
    { question: "Can my child start before changing schools?", answer: "Yes, and many families do. Starting a term or two earlier builds English and subject confidence, so the first weeks in the new school are less stressful. The tutor works from the target school's syllabus." },
    { question: "How can I change tutor?", answer: "Write to us by email or WhatsApp and we arrange a new tutor, passing on your lesson notes so there is little disruption. Good fit matters more than staying with the first match." },
    { question: "How do I get started?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the programme or board, subject, level and preferred hours. We reply with a tutor shortlist and free trial slots." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How online IB and IGCSE tutoring works in Indian cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person home tuition is offered." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "Programmes, subjects and tutor matching." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial." },
    { label: "IB and IGCSE tutoring in Nellore", href: "/nellore/", description: "The district city north of Gudur." },
    { label: "IB and IGCSE tutoring in Tirupati", href: "/tirupati/", description: "The nearest city with confirmed international schools." },
    { label: "IB and IGCSE tutoring in Naidupet", href: "/naidupet/", description: "A neighbouring industrial town served online." },
  ],

  closingHeading: "Start with a free IB or IGCSE lesson in Gudur",
  closingBody:
    "Send the programme or board, the subject and level, and the hours that suit your household. You will get tutor options and trial slots, all online and one to one, free and with no obligation. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
