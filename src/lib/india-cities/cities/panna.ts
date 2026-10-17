import type { CitySeoPage } from "../types";

/**
 * /panna/ - IB and IGCSE tutoring page for Panna, Madhya Pradesh (Bundelkhand, diamond mine, tiger
 * reserve, near Khajuraho). Online-only delivery. No IB or Cambridge/Edexcel school could be confirmed
 * in Panna, so stripSchools is empty and clusters point honestly to Jabalpur, Bhopal and Indore using
 * names verified on the Satna, Jabalpur, Bhopal and Sagar pages.
 */
export const panna: CitySeoPage = {
  slug: "panna",
  countryName: "Panna",
  countryNameLong: "Panna, Madhya Pradesh",
  demonym: "Panna",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Each slot is placed around MP Board weeks, the Rath Yatra and Diwali stretch, the Khajuraho tourist season and the fierce Bundelkhand afternoons",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.7167, longitude: 80.1833 },
  wikipedia: "https://en.wikipedia.org/wiki/Panna,_Madhya_Pradesh",
  alternateNames: ["Panna MP", "Panna Bundelkhand", "Panna Madhya Pradesh"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Panna | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Panna, Madhya Pradesh: private one-to-one lessons at home, subject-matched tutors, a written note each session, free trial first.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Panna",
  heroEyebrow: "ONLINE IB & IGCSE PRIVATE TUITION FOR PANNA",
  heroSubtitle:
    "Private home tuition for IB and IGCSE students in Panna works through a laptop, since tutors do not travel to Bundelkhand. A teacher who knows your exact course teaches one student at a time, live, in the evening or weekend slot your family picks, and the first lesson is on the house.",
  primaryKeyword: "IB and IGCSE tutors in Panna",
  imageAltText: "Panna student using a laptop for a live online IB Economics lesson at a home study table",
  secondaryKeywords: [
    "IB tutor Panna",
    "IGCSE tutor Panna",
    "IB home tuition Panna",
    "IGCSE home tuition Panna",
    "IB private tuition Panna",
    "IB Maths tutor Panna",
    "IGCSE Maths tutor Panna",
    "IB Physics tutor Panna",
    "IB Chemistry tutor Panna",
    "IB Biology tutor Panna",
    "IB DP tutor Panna",
    "IB MYP tutor Panna",
    "IB PYP tutor Panna",
    "IGCSE online tuition Panna",
    "online IB tutor Panna Madhya Pradesh",
    "IGCSE tutor Panna MP",
    "IB tutor Khajuraho Panna",
    "IB tutor Bundelkhand",
    "IGCSE Hindi tutor Panna",
  ],

  heroTrustPoints: [
    "One tutor chosen for your child's named IB subject and level or IGCSE board and tier",
    "All teaching is online and private; no tutor comes to a house in Panna",
    "A free opening lesson, with the rate sent in writing after it",
    "A short report after each lesson, and the option to swap tutors",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages" },
    { value: "CAIE and Pearson", label: "IGCSE boards" },
    { value: "IST", label: "Indian timings" },
    { value: "Free trial", label: "Nothing upfront" },
  ],

  intro: {
    heading: "Diamonds, tigers and a school system that has not yet met the IB",
    paragraphs: [
      "Panna is best known for two things that have nothing to do with school: the diamond deposits worked at the Majhgawan mine and the tigers of Panna National Park along the Ken river. Khajuraho's temples are about 40 km away. The town's classrooms teach the Madhya Pradesh Board syllabus or CBSE, and we could not confirm an IB or Cambridge or Edexcel IGCSE school in Panna district.",
      "That does not leave the subject empty. Panna draws families of forest officers, mining and revenue staff, hotel and lodge owners who serve the tourist circuit, and a small professional class whose relatives live in Bhopal, Delhi, Pune or overseas. Some of them want a child's record to carry an internationally read qualification. Others hold a posting that may change in three years and want a curriculum that travels.",
      "Distances decide the format. Satna is about 75 km away, Jabalpur roughly 230 km and Bhopal well over 350 km. A weekly class in another city is impractical, and there is nothing to attend in town. A live online tutor, matched to the syllabus code, solves the location problem. Lessons follow Indian Standard Time and can avoid the hottest hours.",
      "IB Gram works independently of the IB, Cambridge, Pearson, NMDC, the tiger reserve and every school mentioned here. A tutor explains, sets practice and comments on it. A tutor does not produce any part of an Internal Assessment, Extended Essay, TOK essay or coursework that is assessed.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP content, taught subject by subject",
      "IGCSE with Cambridge Core or Extended, and Edexcel Foundation or Higher",
      "Private, live and one student per lesson",
      "Free opening lesson, then a written rate card for your child",
      "No visits to Panna: in-person home tuition is limited to Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Since no IB-authorised school in Panna could be verified, each programme is explained by what a Bundelkhand family is usually trying to achieve with it.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Six transdisciplinary themes replace a subject-by-subject timetable, and pupils finish with a self-directed exhibition. Since nothing is examined externally, a tutor concentrates on comfortable English, number fluency and asking clear questions.",
      countryNote:
        "A Panna child of this age usually speaks Hindi or Bundeli at home, so lessons build English through picture books, nature stories and short conversations about the tiger reserve, not through drill.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teaching is organised in eight subject groups with marks given against four published criteria per subject, rounded off by a Year 5 Personal Project that the student drives alone.",
      countryNote:
        "Pupils coming across from MP Board or CBSE find the criteria unfamiliar, so the first fortnight goes into decoding descriptors and writing a short answer that shows reasoning, not only a result.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects, three or four at Higher Level, alongside TOK, the Extended Essay and CAS. Examinations arrive in the May or November session and internal assessments add to the final grade.",
      countryNote:
        "A Panna Diploma candidate almost always studies at a school in another city or with an online provider, and asks for a second teacher in Maths, Physics, Chemistry or Economics when one subject slips.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses sit beside a career-related study, a reflective project and a short course in personal and professional skills.",
      countryNote:
        "Hardly anyone in Panna asks about CP. Those who do usually want hospitality, tourism or conservation links, and the tutoring then supports the Diploma courses inside the pathway.",
    },
  ],

  subjectsIntro:
    "Two students who both say they study IB Physics may be sitting different papers, one at Standard and one at Higher Level. Because Panna has no local school to confirm it, we pin down the subject, level and session in the opening message, then look for a tutor.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, differentiation, integration and proof, meant for future engineers and scientists. HL candidates get extra time on unfamiliar, multi-stage questions." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data handling, probability models and technology-led problem solving. The Exploration can use real local numbers, for example visitor counts at the park." },
    { name: "IB Physics", levels: "HL / SL", description: "From kinematics to fields and quantum ideas, with lab work that relies on clear error analysis and sensible graphs." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Atomic structure, reaction energetics and organic synthesis; mineral and gemstone chemistry adds a locally memorable context for carbon and crystal structure." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell processes through ecology, with tiger habitat, prey populations and riverine ecosystems offering rich material for data questions." },
    { name: "IB Economics", levels: "HL / SL", description: "Tourism, mining royalties and forest-edge livelihoods give specific cases for externalities, public goods and sustainable development." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case analysis of operations, marketing and finance, suited to children of hotel, lodge and transport owners." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Reading unseen texts closely, writing comparisons across works, and giving a recorded oral with composure." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Program design, data structures and networks, with the IA needing a working product plus clear records of how it was built." },
    { name: "IB Psychology", levels: "HL / SL", description: "Biological, cognitive and sociocultural explanations, each tied to well-described studies and evaluated." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Conservation, water flow and land use, well matched to a student who lives beside a tiger reserve and a river." },
    { name: "IB Geography", levels: "HL / SL", description: "Resource extraction, rural change and hazard, with a fieldwork question that could be based on the Ken basin." },
    { name: "IB Global Politics", levels: "HL / SL", description: "Power, rights and development, taught through concrete engagement with current events." },
    { name: "IB Hindi B and A", levels: "HL / SL", description: "Hindi language and literature study that treats home fluency as an asset for exam writing and speaking." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Spoken rehearsal of knowledge questions, and structure for the exhibition and prescribed-title essay, without anyone writing for the student." },
  ],

  igcseSubjectsIntro:
    "An IGCSE candidate should treat the exam board as the first decision. Cambridge and Edexcel split tiers differently and assess practical skills in their own ways, so a plan for a student in Panna starts from the board the eventual exam centre will use.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, shape and data, with marks for method on every line and careful choice of tier." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, circuits, waves and radioactivity, with a practical-skills paper treated as a subject in itself." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "The periodic table, rates, acids and organic families, plus planning and analysis for the practical paper." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Living processes, genetics and ecosystems, with annotated diagrams and graph reading repeated often." },
    { name: "IGCSE Geography", levels: "Cambridge / Edexcel", description: "Rivers, tourism, resources and population, using the Ken and Bundelkhand as examples where they fit the question." },
    { name: "IGCSE English First Language", levels: "Cambridge / Edexcel", description: "Summary, argument and narrative writing judged on control of language." },
    { name: "IGCSE English Second Language", levels: "Cambridge", description: "Listening, speaking, reading and writing for students who think first in Hindi." },
    { name: "IGCSE Travel and Tourism", levels: "Edexcel", description: "A natural fit for a region organised around Khajuraho and the national park, covering destinations, impacts and customer service." },
    { name: "IGCSE Economics", levels: "Cambridge / Edexcel", description: "Basic economic problems, markets and trade, with short data-linked answers." },
    { name: "IGCSE Hindi as a Second Language", levels: "Cambridge", description: "A language paper where everyday fluency supports comprehension and composition." },
  ],

  regionsTitle: "Panna town, the park edge and the villages beyond",
  regionsIntro:
    "Panna is a spread-out district town, and where a family lives changes the evening: the heat, the road to school, the reliability of a signal. These are the places whose students most often ask us about timing.",
  regions: [
    { name: "Panna city centre and Hiranagar", note: "Close to the bazaar and the Prannath and Jugal Kishore temples; traffic peaks during the Rath Yatra and festival weeks, so late evening is calmer." },
    { name: "Ajaigarh Road", note: "Residential stretch on the road to Ajaigarh with government quarters; families of officials who expect transfers often prefer a portable curriculum." },
    { name: "Satna Road and bypass", note: "The approach to Satna, where trucks and buses run all day. A closed window and headphones help during live lessons." },
    { name: "Mohandra and the Majhgawan side", note: "Near the NMDC diamond mine, home to staff families used to fixed shifts and company-run schooling." },
    { name: "Akola and Madla road", note: "Near the park's tourist gates, where lodge-owning families are busiest from October to March and lessons move to late evening." },
    { name: "Gunnor and Pawai direction", note: "Towns to the north-east where families rely on private tuition and travel to Panna for services." },
    { name: "Shahnagar side", note: "Students from Shahnagar, where farming and stone work shape household calendars." },
    { name: "Khajuraho and Rajnagar", note: "About 40 km away, a heritage tourism economy in which English-speaking skills matter and some families look abroad." },
    { name: "Amanganj and Devendranagar", note: "Small towns in the district where broadband is uneven, so a backup hotspot and a flexible slot are sensible." },
    { name: "Panna Tiger Reserve fringe villages", note: "Households near the park boundary whose fathers work as guides, drivers or forest staff, and whose children often excel at Biology and English." },
  ],

  schoolClusters: [
    {
      city: "Panna district",
      note: "No IB or Cambridge/Edexcel IGCSE school could be confirmed in Panna or Khajuraho, so none is named. Local schools teach MP Board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Jabalpur",
      note: "About 230 km away, where one school is listed on our Satna and Jabalpur pages as offering an international curriculum.",
      schools: ["Little World School, Tilwara"],
    },
    {
      city: "Nearby: Bhopal",
      note: "The state capital, relevant for boarding or a family move. Names are drawn from our Bhopal and Satna pages.",
      schools: ["Eastern Public School, Gandhi Nagar", "The Sanskaar Valley School, Chandanpura", "Shrewsbury International School India"],
    },
    {
      city: "Nearby: Indore",
      note: "A long journey, but a recognised centre for international schooling in the state.",
      schools: ["Choithram International", "Daly College Indore"],
    },
  ],
  schoolDisclaimer:
    "These schools are named solely to indicate where international options exist in Madhya Pradesh and are copied from other pages on this site. IB Gram is a separate, independent tutoring company with no affiliation to, or endorsement from, the IB, Cambridge, Pearson or any of these schools. Verify admission, affiliation and fees with each school yourself.",

  modesIntro:
    "Teaching in Panna takes place entirely online. The real decisions are frequency, duration and purpose: a steady weekly rhythm, a burst before papers, or help crossing from one board to another.",
  modes: [
    {
      title: "Ongoing weekly lessons",
      description: "A regular slot, typically sixty to ninety minutes, with one tutor who learns your child's habits and builds on the last session.",
      bullets: [
        "Screen-shared notes, diagrams and past-paper extracts",
        "Short tasks between lessons, marked at the next meeting",
        "A written recap you can read in a minute",
      ],
    },
    {
      title: "Focused revision bursts",
      description: "Tighter blocks, three or four a week, placed in the final month before an IGCSE or IB sitting.",
      bullets: [
        "Timed questions followed by line-level marking",
        "A running list of errors that keep returning",
        "Formula and command-word sheets built with the student",
      ],
    },
    {
      title: "Crossing boards",
      description: "Help for students leaving MP Board or CBSE for IGCSE or IB, or coming back from a stay abroad.",
      bullets: [
        "A first-lesson diagnostic across Maths and English",
        "Practice writing to criteria and command words",
        "Steady pacing for younger MYP-age students",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Panna have IB or IGCSE schools, and who seeks them out?",
      paragraphs: [
        "The short answer is that we could not verify any school in Panna or neighbouring Khajuraho offering the IB or IGCSE. The education landscape is MP Board and CBSE, with government, private and Kendriya-style schools. The nearest verified international options sit in Jabalpur and Bhopal, hours away by road.",
        "That leaves a small but real set of households. Forest, revenue and police officers who may be posted out of Bundelkhand next year. Lodge and resort owners whose guests come from Europe and America and who see English and international credentials as business assets. Doctors and teachers with siblings abroad.",
        "Their children typically attend one of three routes: an online school that follows IB or IGCSE, a boarding school in Bhopal or Indore, or a local school with private IGCSE entries on the side. The tutoring needs differ slightly. Online-school students want extra feedback, boarders want holiday catch-up, and private candidates need a full syllabus plan.",
        "If you are early in the decision, collect the facts before hiring anyone: which board, which exam centre, which session. A short call or message helps us say whether tutoring is the right first step or whether a school decision should come first.",
      ],
    },
    {
      heading: "MP Board, CBSE, IB or IGCSE: how do they differ for a Panna student?",
      paragraphs: [
        "MP Board examinations for Class 10 and 12 fall in February and March and draw on state textbooks, taught in Hindi medium or English medium. CBSE follows NCERT books and a similar calendar. Both reward accurate recall and a clear layout of answers.",
        "Cambridge and Edexcel IGCSE prepare students for a qualification taken at about the end of Class 10 level, examined in May to June or October to November, sometimes January. The IB Diploma comes later, for Class 11 and 12, with six subjects and a larger component of independent work.",
        "The table compares them in plain terms. What it cannot show is the day-to-day difference. A student taught to reproduce a textbook paragraph will find an IGCSE data-response question unfamiliar, and an IB essay more so. The content is learnable; the habit of explaining is what takes months.",
        "None is better in general. A child heading to a state engineering college through JEE and NEET may be well served by CBSE, while a child whose family has a UK plan may benefit from IGCSE followed by A Level or the Diploma.",
      ],
      table: {
        caption: "Boards compared for students in Panna",
        columns: ["Board", "Exam months", "What is tested", "Typical route from Panna"],
        rows: [
          ["MP Board (Class 10 and 12)", "February-March", "Textbook recall and structured answers", "State colleges, JEE or NEET coaching elsewhere"],
          ["CBSE", "February-March", "NCERT content with some application", "National entrance exams and CUET-UG"],
          ["Cambridge IGCSE", "May-June, October-November", "Papers, plus practicals or coursework in some subjects", "A Level, IB Diploma, overseas school"],
          ["Edexcel IGCSE", "May-June, January", "Linear papers in Foundation or Higher tiers", "A Level or IB Diploma"],
          ["IB Diploma", "May, November", "Exams, internal assessments, Extended Essay, TOK", "Universities abroad, and Indian routes via CUET-UG"],
        ],
      },
    },
    {
      heading: "How is tutoring priced for a family in Panna?",
      paragraphs: [
        "Because every family's needs differ, IB Gram quotes in writing instead of publishing a rate card. Understanding what drives a quote helps you assess any offer, including ours.",
        "Level comes first. A Higher Level Diploma science is a heavier assignment than IGCSE Core English. Scarcity follows: a tutor for Further Mathematics, Computer Science HL or a language such as Spanish is harder to find than one for Standard Level Maths.",
        "Then the pattern of lessons. A weekly hour is a modest commitment; four sessions a week before an exam is an intensive one. A tutor's record, such as years on the same syllabus or marking experience, also changes the rate.",
        "What you avoid by learning online is the overhead that would otherwise apply: a day's travel to Satna or Jabalpur, a hostel room, fuel and an escort. The free opening lesson lets you test all this before any money changes hands.",
      ],
      bullets: [
        "Course level and tier chosen",
        "How rare the subject tutor is",
        "Number and length of weekly lessons",
        "Tutor background and experience",
        "A rate sent in writing before any booking",
      ],
    },
    {
      heading: "Online tutor, Satna coaching, a local teacher or studying alone?",
      paragraphs: [
        "Coaching around Panna is concentrated in Satna and Jabalpur and geared to board exams and entrance tests. A school teacher giving private lessons in town will know the MP Board syllabus well, but rarely the IB Analysis paper or the IGCSE mark scheme.",
        "An online one-to-one tutor is picked for the syllabus and looks at your child's own written work. The limits are a dependable connection, a quiet corner and a student who can concentrate on a screen. In Bundelkhand, summer power cuts and monsoon outages deserve a plan.",
        "Studying alone with published past papers is realistic for disciplined students, especially in Maths. The gap is feedback: without someone to mark, recurring mistakes quietly repeat.",
        "A blend works well: live lessons once or twice a week, with independent practice in between.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Panna",
        columns: ["Route", "What it offers", "What it lacks", "Fit for IB or IGCSE"],
        rows: [
          ["Live online tutor", "Syllabus-specific teaching and marked practice", "Needs electricity and broadband", "High"],
          ["Coaching in Satna or Jabalpur", "A fixed routine and classmates", "Days lost to travel, almost no IB content", "Low"],
          ["Local school teacher", "Nearby and trusted", "Not trained on IB or IGCSE mark schemes", "Low to medium"],
          ["Studying alone", "Cheap and flexible", "No marking or correction", "Medium"],
        ],
      },
    },
    {
      heading: "How do Bundelkhand's heat, tourist season and festivals shape a study year?",
      paragraphs: [
        "Bundelkhand heat is severe. From late April to June, afternoons in Panna regularly climb past 43 degrees, and power cuts become more frequent. Study then belongs in the early morning or after dark, and younger children should not have long afternoon lessons.",
        "The tourism calendar matters for many local families. The park and Khajuraho are busiest from October to March, which overlaps with the IGCSE November series and mock season. A family running a lodge may find evenings consumed by guests and choose weekend lessons instead.",
        "Festivals add their own mark: the Rath Yatra at Panna's Jagannath Swami temple in June or July, Raksha Bandhan, Dussehra, Diwali and Makar Sankranti. The Khajuraho Dance Festival in February is a local highlight that coincides with MP Board exams.",
        "A sensible yearly plan puts the heaviest papers in the cooler months of November to February, keeps festival weeks light and protects the last month before each exam.",
      ],
      table: {
        caption: "A study year in Panna",
        columns: ["Months", "Academic focus", "Local factor", "Planning note"],
        rows: [
          ["July-September", "New session begins", "Monsoon, Rath Yatra and Raksha Bandhan", "Set the weekly slot, keep a backup evening"],
          ["October-November", "November exam series", "Dussehra, Diwali, start of tourist season", "Use the holidays for full past papers"],
          ["December-January", "Mocks and coursework", "Cold mornings, Makar Sankranti", "Good months for long sessions"],
          ["February-March", "MP Board and CBSE exams", "Khajuraho Dance Festival", "Reduce lessons for board candidates"],
          ["April-June", "IGCSE and IB May papers", "Extreme heat, summer break", "Early-morning or late-evening sessions"],
        ],
      },
    },
    {
      heading: "Where can a Panna student go after IB or IGCSE?",
      paragraphs: [
        "In India, the IB Diploma earns equivalence through the Association of Indian Universities and opens the CUET-UG route to central universities. Madhya Pradesh options include Dr Harisingh Gour Central University at Sagar, Rani Durgavati Vishwavidyalaya in Jabalpur, APS University in Rewa, MANIT and IISER in Bhopal, and IIT Indore.",
        "Medicine and engineering aspirants should check JEE Main and NEET rules before dropping any subject. IGCSE alone does not meet Class 12 equivalence; the Diploma or A Levels are normally needed.",
        "Students with conservation or tourism interests have special routes: forestry and wildlife programmes, hospitality management and geology, for which Biology, Geography, Chemistry or Economics choices matter. A tutor can explain what Standard and Higher Level mean for each path.",
        "Abroad, the Diploma is widely read in the UK, US, Canada and Europe. Tutors strengthen subject knowledge and exam technique; they do not write applications or promise a place.",
      ],
    },
    {
      heading: "What should Panna students know about IB Maths and the sciences?",
      paragraphs: [
        "Analysis and Approaches appeals to students who like algebra and calculus and expect to study engineering or physical science. Applications and Interpretation attracts those leaning towards business, geography or life science, and depends on confident use of a graphing calculator.",
        "A common gap among students coming from Hindi-medium schooling is in extended written explanation in English: defining terms, justifying a method, stating units. Weekly timed questions, marked carefully, fix this faster than extra content lessons.",
        "Biology and ESS are the subjects where Panna's setting helps most. Predator-prey numbers, water quality in the Ken or grassland regeneration make credible investigation topics, though the student must collect and analyse the data personally.",
        "Physics and Chemistry students should plan the internal investigation early. A tutor can check that an idea is workable, explain the criteria and respond to drafts, but the experiment and write-up remain the student's own.",
      ],
    },
    {
      heading: "How should a student from Panna pick IGCSE subjects and tiers?",
      paragraphs: [
        "Work backwards from the destination. A Diploma in sciences needs Mathematics at Extended or Higher, two sciences and English. A student drawn to tourism, business or economics may add Travel and Tourism, Business Studies or Economics.",
        "Tier decides the top grade available. Extended or Higher keeps all grades open; Core or Foundation caps the maximum. If your child is unsure, a diagnostic session shows the right starting point.",
        "Languages: Hindi as a second language is a sensible, manageable choice, and English must be handled seriously whichever route follows.",
        "Finally, secure an exam centre that takes private candidates, likely in Bhopal, Indore or Delhi, before you book a timetable. The tutor will turn the specification into a dated plan.",
      ],
    },
  ],

  process: [
    { title: "Write to us", description: "Give class, subjects, board and the exam sitting you have in mind through WhatsApp or email." },
    { title: "Hear who we suggest", description: "One tutor is proposed, with a few words on their experience with that specification." },
    { title: "Try the first lesson free", description: "A real topic, a real tutor and no payment, so the decision rests on what you see." },
    { title: "Receive the rate in writing", description: "Timings, length and the rate come on paper before any booking is confirmed." },
    { title: "Keep a steady rhythm", description: "Lessons run weekly with a short recap afterwards, and a different tutor is available on request." },
  ],

  whyPoints: [
    { title: "Chosen for your specification", description: "We read the course code before we read the tutor list." },
    { title: "Undivided attention", description: "Nothing in the lesson is aimed at anyone but your child." },
    { title: "Plain-language recaps", description: "A few lines after each lesson tell you what was covered and what is next." },
    { title: "Mindful of Bundelkhand life", description: "Heat, power cuts, tourist season and festivals are considered when a slot is set." },
    { title: "Honest about boundaries", description: "We explain and mark; we do not write assessed work for students." },
    { title: "Easy to start, easy to leave", description: "A free opening lesson means you commit to nothing until you are sure." },
  ],

  tutorsIntro:
    "All tutors teach from within India on Indian Standard Time, so a Panna evening matches theirs. A sample of the people who teach IB and IGCSE courses is shown below.",

  faqs: [
    { question: "Are IB tutors available for students in Panna?", answer: "Yes, online only. Tutors with experience of the exact IB subject teach live and privately over video. Nobody travels to Panna, because in-person home tuition is limited to Gurugram and parts of Delhi NCR. The first lesson is free, and the rate follows in writing afterwards, so you can judge the teaching before any commitment." },
    { question: "What does home tuition mean if tutors do not come to the house?", answer: "It means your child learns at home, at their own desk, with a live private tutor on a laptop. The teacher is elsewhere in India. We use the phrase because families search for it, and we state the limit plainly so no one waits at the door. A short written recap follows each lesson." },
    { question: "Is there any IB or IGCSE school in Panna or Khajuraho?", answer: "We could not verify one. Schools in the district follow MP Board or CBSE. The nearest international options we list are in Jabalpur, Bhopal and Indore, all a long way off. Schools change their programmes, so contact any of them directly to confirm current affiliation and admission before you plan around a name." },
    { question: "Can a student in Panna take IGCSE without joining a Cambridge school?", answer: "Often, as a private candidate at an approved centre that accepts outside entries. Such centres are mainly in big cities like Bhopal, Indore or Delhi, registration closes many months early and science practicals need extra planning. Fix the centre and session first; the tutor then plans the syllabus against the weeks left." },
    { question: "How much will lessons cost?", answer: "No prices appear on this page. A rate reaches you in writing before anything starts. It reflects the course level, how scarce tutors for that subject are, how often you want lessons and how close the exam is. Online study saves travel to Satna or Jabalpur, and the free first lesson costs nothing." },
    { question: "Which subjects are asked about most from Panna?", answer: "Mathematics, Biology, Chemistry and Economics lead, with English close behind. Many local families are connected to tourism, so Business Management and Travel and Tourism attract interest, and students near the park like Biology and ESS. Each request is matched to a tutor who has taught that exact course and level." },
    { question: "Will the tutor do my Internal Assessment or essay for me?", answer: "No. Tutors never draft, rewrite or ghost-write an IA, Extended Essay, TOK essay or IGCSE coursework. They can go through the marking criteria, help you choose a topic you can really investigate, look at your method and comment on drafts you wrote. The submitted work has to be the student's own." },
    { question: "Which suits my child better, Cambridge IGCSE or Edexcel IGCSE?", answer: "It depends on what the school or exam centre registers. Cambridge commonly uses Core and Extended tiers and a practical or alternative paper in sciences. Edexcel uses Foundation and Higher with linear papers. Mathematics codes are 0580 and 4MA1. Pick the board your centre offers, and the tutor will teach to that specification." },
    { question: "How long does it take to move from an MP Board classroom to IB or IGCSE?", answer: "Most students adjust within a term if they start early. The subject gap is often small; the main change is writing longer, reasoned answers in English and understanding command words like justify or evaluate. A bridging block of four to six weeks before the new course begins helps, and a tutor can design one with you." },
    { question: "Will summer heat and power cuts disrupt lessons?", answer: "They can, so we plan for them. From April to June we usually move lessons to early morning or late evening, and we keep a spare slot each week. A charged laptop, a phone hotspot and a fan near the desk help. A lesson lost to an outage is rescheduled." },
    { question: "Can young children manage online lessons?", answer: "Yes, in shorter sessions. PYP-age children do best with about 45 minutes of stories, counting games and simple inquiry tasks, with a parent nearby. MYP students can take longer lessons and work on writing to criteria and on planning the Personal Project. We will suggest a length that suits your child." },
    { question: "What should be ready at home?", answer: "A working laptop or tablet, steady broadband, headphones and a quiet table, along with paper, pens and the calculator your course allows. A stylus helps with the whiteboard but is optional. Keep a mobile hotspot as a backup, because storms and cuts do happen in this part of Madhya Pradesh." },
    { question: "What if my child does not get on with the tutor?", answer: "Tell us, and we will propose a different tutor with no fee and no awkwardness. Notes from the first tutor pass across so the new one starts from where things stopped and nothing is repeated. Switching is a normal part of finding a good match." },
    { question: "Can IB or IGCSE lead to JEE, NEET or CUET?", answer: "Partly. A completed IB Diploma can support CUET-UG, and with the right subjects and percentages, JEE Main or NEET. IGCSE by itself does not equal Class 12. Always read the institution's own eligibility notes first. Our tutors teach the IB and IGCSE syllabi only and do not offer entrance-exam coaching." },
    { question: "How do I get started?", answer: "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with the class, subjects, board and exam sitting. We suggest a tutor, arrange a free first lesson and send rates in writing after it. You may stop at that point without paying or explaining." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in India", href: "/india/", description: "City pages across the country and how the online service runs." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Look up tutors by IB subject." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Both IGCSE boards and their subjects." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "Six subjects, the core and how lessons fit in." },
    { label: "IB MYP tutoring", href: "/programmes/myp/", description: "Criteria, projects and writing for Years 1 to 5." },
    { label: "IB PYP tutoring", href: "/programmes/pyp/", description: "Inquiry, reading and number work for younger children." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA versus AI at SL and HL." },
    { label: "Tutor profiles", href: "/tutors/", description: "Read about the teachers." },
    { label: "Get in touch", href: "/contact-us/", description: "Ask a question or book the free lesson." },
    { label: "IB and IGCSE tutors in Satna", href: "/satna/", description: "The larger city to the north-east." },
    { label: "IB and IGCSE tutors in Sagar", href: "/sagar/", description: "Bundelkhand's university city to the west." },
    { label: "IB and IGCSE tutors in Rewa", href: "/rewa/", description: "The Vindhya region's main city." },
    { label: "IB and IGCSE tutors in Jabalpur", href: "/jabalpur/", description: "The nearest large city with a confirmed international school." },
  ],

  closingHeading: "Begin with a free lesson, wherever you live around Panna",
  closingBody:
    "Write to us with the class, the subjects and the exam you have in mind. We will propose a tutor, arrange a first lesson at no charge and send terms in writing afterwards. Reach us on WhatsApp at +91 7439 368 115 or at support@ibgram.com.",
};
