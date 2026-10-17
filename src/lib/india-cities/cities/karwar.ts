import type { CitySeoPage } from "../types";

/**
 * /karwar/ - IB and IGCSE tutoring page for Karwar, Uttara Kannada, Karnataka. No IB or
 * Cambridge / Edexcel school could be confirmed in Karwar; clusters point to Goa, Hubballi-Dharwad,
 * Mangaluru and Bengaluru. Local angles: naval base and Kaiga postings, the Goa border, Konkani.
 * Online only; in-person home tuition runs only in Gurugram and parts of Delhi NCR.
 */
export const karwar: CitySeoPage = {
  slug: "karwar",
  countryName: "Karwar",
  countryNameLong: "Karwar, Karnataka",
  demonym: "Karwar",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Timetables allow for naval and plant shift patterns at home, the June to September downpour and ghat-road closures, and the school calendar your child already follows",
  lastUpdated: "2026-09-21",
  geo: { latitude: 14.8136, longitude: 74.1290 },
  wikipedia: "https://en.wikipedia.org/wiki/Karwar",
  alternateNames: ["Karwar Uttara Kannada", "Carwar", "Kārwār"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Karwar | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Karwar: online one-to-one private tuition from home for navy, Kaiga and local families, DP, MYP, PYP and Cambridge subjects, free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Karwar",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR KARWAR STUDENTS",
  heroSubtitle:
    "If you want private tuition from home in Karwar for an IB or IGCSE student, the honest version is online: a live one-to-one lesson with a tutor elsewhere in India who has taught the course, taken on a laptop at home. Tutors do not travel to Karwar, because in-person visits run only in Gurugram and parts of Delhi NCR. Postings tend to move families in and out of this port city, and a tutor who stays constant through a transfer is often the point.",
  primaryKeyword: "IB and IGCSE tutors in Karwar",
  imageAltText: "A Karwar student at home near the Kali river taking a live one-to-one IGCSE Mathematics lesson online",
  secondaryKeywords: [
    "IB tutor Karwar",
    "IGCSE tutor Karwar",
    "IB home tuition Karwar",
    "IGCSE home tuition Karwar",
    "IB private tuition Karwar",
    "IB Maths tutor Karwar",
    "IGCSE Maths tutor Karwar",
    "IB Physics tutor Karwar",
    "IB Chemistry tutor Karwar",
    "IB Biology tutor Karwar",
    "IB DP tutor Karwar",
    "IB MYP tutor Karwar",
    "IB PYP tutor Karwar",
    "IGCSE online tuition Karwar",
    "IB tutor Uttara Kannada",
    "IB tutor Kodibag Karwar",
    "online IGCSE tutor Sadashivgad",
    "IB tutor Ankola",
    "IB and IGCSE tuition Karwar Karnataka",
  ],

  heroTrustPoints: [
    "Continuity through transfers: the same tutor stays if your posting moves",
    "Online only in Karwar; tutors visit homes just in Gurugram and parts of Delhi NCR",
    "Free trial lesson, then a written note after each session",
    "Rates in writing before you decide",
    "Independent of every school, the Navy, plant employers and exam boards",
  ],
  heroStats: [
    { value: "IST", label: "Same clock as your school" },
    { value: "PYP to DP", label: "The full IB range" },
    { value: "Move-proof", label: "Tutor stays across postings" },
    { value: "Free trial", label: "No commitment first" },
  ],

  intro: {
    heading: "Postings, borders and a coastline: why Karwar families look for IB and IGCSE help",
    paragraphs: [
      "Karwar is a district headquarters and a working port, and it is also a Navy town. INS Kadamba, the naval base at Karwar, brings service families from across the country, while the Kaiga nuclear power station, some distance inland, brings engineers and their households. Both groups move on after a few years, and both tend to care about a child's schooling staying portable.",
      "We could not confirm an IB World School or a Cambridge or Edexcel IGCSE centre inside Karwar itself, so none is named here. Local schooling runs on the Karnataka state board and CBSE, with Kendriya Vidyalaya-style schools familiar to service families. The nearest options lie across the Goa border, roughly an hour's drive, and in Hubballi-Dharwad or Mangaluru, several hours away.",
      "For a child following an IB or IGCSE syllabus, or planning to, that is a real constraint. An online tutor who knows the course is the piece that can be kept constant when everything else moves. Lessons are held online; IB Gram does not send anyone to a Karwar home.",
      "IB Gram works independently of every school, the Navy, employers and examining bodies mentioned. Tutors coach and explain; they never write Internal Assessments, Extended Essays, TOK essays or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Private online tuition from home, one to one, in IST",
      "No visits in Karwar; home tuition in person is only for Gurugram and parts of Delhi NCR",
      "Free trial lesson and a tutor change if the fit is wrong",
    ],
  },

  programmesIntro:
    "With no IB school we could verify in Karwar, each programme reaches families through a different kind of story: a posting, a Goa-side school, a return from abroad or a plan for study overseas. Each stage asks something different of a tutor.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Learning is arranged around themes that cross subjects, and the closing Exhibition lets a child research a question of their own. The practical goals are fluent reading, secure number sense and a willingness to ask questions.",
      countryNote:
        "Karwar's PYP children are mostly from service or plant families who started primary school in a city with an IB school and want the approach kept alive after a posting here.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are marked against published criteria, and the Personal Project asks each student to plan, carry out and reflect on a self-chosen piece of work.",
      countryNote:
        "A Karwar child arriving from an MYP school often finds the local state-board or CBSE routine more textbook-driven, and needs help keeping criterion-style thinking without falling behind on the local syllabus.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects are combined with Theory of Knowledge, the Extended Essay and CAS, and Internal Assessments count towards most grades.",
      countryNote:
        "Karwar-linked DP students study through a boarding school, a distance arrangement or a school in a city they came from, and use a tutor here to strengthen one Higher Level subject.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A short set of Diploma courses is paired with a career-related study and a reflective project. It is uncommon in India, but its academic content is the same as the Diploma's.",
      countryNote:
        "Very occasional in Karwar, usually a child returning from an overseas school where a CP had begun.",
    },
  ],

  subjectsIntro:
    "Subject and level come first, then the exam session, then a weekly routine that suits a household with shift work, a long commute or exam-year pressure.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Proof, calculus and multi-step problems for HL, and disciplined past-paper timing for SL." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data, modelling and calculator fluency, with an exploration chosen well before the deadline." },
    { name: "IB Physics", levels: "HL / SL", description: "A strong fit for children of engineers at Kaiga and the Navy, with emphasis on reasoning from data." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, then organic mechanisms and equilibrium, where pace picks up at HL." },
    { name: "IB Biology", levels: "HL / SL", description: "Coastal and marine examples help ecology; the exam rewards exact command-term answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams with current examples and policy evaluation, useful for port-economy topics." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study application and a research project on one real organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis, comparative essays and an oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and a solution write-up that justifies design choices." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approach-based essays with accurate studies and a small experimental IA." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Estuary, mangrove and Western Ghats examples are ready-made material for a student in Uttara Kannada." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies with depth and repeatable fieldwork; coastal processes are a natural theme." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and sustained argument." },
    { name: "IB Kannada B and Hindi B", levels: "HL / SL", description: "Language courses for children who speak Konkani, Kannada or Marathi at home; text types, listening and the oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Spoken coaching for the exhibition and for unpacking a prescribed title." },
  ],

  igcseSubjectsIntro:
    "IGCSE students tied to Karwar mostly prepare for Cambridge as private candidates or through a school elsewhere; Pearson Edexcel is available too. Board, code and tier come first, then the calendar.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Method marks, non-calculator accuracy and steady exam pacing." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and trigonometry that ease the move to IB Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation handling, electricity, waves and the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, bonding and practical planning." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Inheritance, ecology and structured long answers." },
    { name: "IGCSE Physical Science 0652", levels: "Core / Extended", description: "For schools that combine physics and chemistry into one grade." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and composition." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "For students whose home language is Konkani or Kannada." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagram accuracy and evaluative writing." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying ideas to the named business in a case study." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode and logic on unfamiliar problems." },
  ],

  regionsTitle: "Karwar neighbourhoods and nearby towns our online students study from",
  regionsIntro:
    "The lesson is the same wherever your child sits, so these places tell us about routine and school context, not travel. Karwar is long and thin, squeezed between the Kali river and the sea, and daily life differs from one end to the other.",
  regions: [
    { name: "Kodibag", note: "A coastal residential area near the river mouth, with older families and many government employees." },
    { name: "Sadashivgad", note: "On the northern side of the Kali, close to the bridge and the Goa direction, with a mix of long-term residents and newer arrivals." },
    { name: "Baithkol", note: "A port-side neighbourhood associated with fishing and the harbour, where shift patterns shape evenings." },
    { name: "Chendia", note: "A residential suburb popular with families connected to the naval base and central-government offices." },
    { name: "Binaga", note: "South of town near the Navy's facilities and a quiet beach, home to many naval and dockyard households." },
    { name: "Devbag", note: "A beach-side stretch near the Kali estuary with resorts and homes, less dense than the town core." },
    { name: "Majali", note: "Toward the Goa border on the highway, where families sometimes look across at Goa for school options." },
    { name: "Shirwad", note: "A growing area inland of the highway with newer apartments and plots." },
    { name: "Ankola", note: "A taluk town to the south, roughly forty minutes away, whose students also join lessons online." },
    { name: "Kaiga township", note: "The residential colony for the nuclear power station inland; families here move on postings and value a tutor who moves with them." },
  ],

  schoolDisclaimer:
    "No school in Karwar could be confirmed as offering the IB or Cambridge or Edexcel IGCSE, so none is named as such. Other cities are mentioned only because Karwar families sometimes consider them, and IB Gram has no link with any school, the Navy, any employer or any exam board.",
  schoolClusters: [
    {
      city: "Karwar and Uttara Kannada",
      note: "Schooling is the Karnataka state board and CBSE, including schools that cater to service families. We found no confirmed IB or IGCSE school in the district, so international-syllabus students study online.",
      schools: [],
    },
    {
      city: "Nearby: Goa",
      note: "Across the border, Goa is about an hour or two from Karwar depending on traffic. We could not verify a specific IB or IGCSE school there for this page, so none is named; families who plan a move should check current listings with the IB and Cambridge school finders.",
      schools: [],
    },
    {
      city: "Nearby: Mangaluru",
      note: "Several hours south along the coast, Mangaluru has a handful of Cambridge IGCSE schools that some Karwar families weigh for a Grade 9 move or boarding.",
      schools: ["The Bharath Academy", "TLC Cambridge International School", "The Cambridge International School, Adyar"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "Karnataka's main IB and Cambridge cluster is in Bengaluru, a long overnight journey away, and boarding there is an option for Diploma years.",
      schools: ["Stonehill International School", "The International School Bangalore"],
    },
  ],

  modesIntro:
    "Karwar families all learn online, but the reasons differ: a transfer that has just happened, a long-term plan, or an exam around the corner.",
  modes: [
    {
      title: "Weekly lessons that survive a transfer",
      description:
        "A fixed weekly slot with one tutor, via video with a shared whiteboard. If your posting changes, the tutor and the schedule stay.",
      bullets: [
        "Suited to Navy, Kaiga and other transferred families",
        "Same tutor across cities",
        "Written note after every session",
        "Time zone unchanged anywhere in India",
      ],
    },
    {
      title: "Arrival support for a new IB or IGCSE student",
      description:
        "Short, focused help for a child arriving mid-year from another board, aimed at command words, coursework and grade expectations.",
      bullets: [
        "Gap map in the first sessions",
        "Aligned with the child's current school",
        "Reviewed every few weeks",
        "Ends when the gap closes",
      ],
    },
    {
      title: "Exam-season blocks",
      description:
        "Concentrated weeks of timed papers before the May or November series, planned around the monsoon.",
      bullets: [
        "Two to four sessions weekly near the exam",
        "Current grade boundaries used",
        "Book a month ahead",
        "Weakest topics first",
      ],
    },
  ],

  sections: [
    {
      heading: "Which families in Karwar look for IB and IGCSE tutors?",
      paragraphs: [
        "Three groups stand out. The first is service households linked to INS Kadamba. Naval postings last a few years, and a child may have begun IB or IGCSE in Mumbai, Kochi, Visakhapatnam or abroad before arriving. The second is plant and project families, notably at Kaiga, where engineers and scientists move between sites. The third is local professionals, port and shipping families and doctors who prefer an international syllabus for a child aimed at study abroad.",
        "These groups share one worry: continuity. Changing a school in Class 9 or Class 11 is disruptive in any system, and disruption is worse when the syllabus is not on offer locally. The right kind of tutor helps by being the constant while the rest changes.",
        "Some households also come from the Goa side of the border. Karwar is close enough to Goa that parents sometimes work in one state and live in the other, which opens options that a landlocked town would not have.",
        "None of this means Karwar lacks good schools or teachers. It means the international-syllabus niche is small, and thin markets are where online, specialist matching does the most for a family.",
        "IB Gram covers the whole range from PYP to Diploma and both major IGCSE boards, and does so without requiring anyone to travel.",
      ],
      table: {
        caption: "Karwar household types and the support they usually seek",
        columns: ["Household", "Situation", "Usual request"],
        rows: [
          ["Naval service family", "Posted to INS Kadamba for a few years", "A tutor who continues across the next posting"],
          ["Kaiga or plant family", "Engineer or scientist on a site posting", "Specialist Maths and Physics for a Diploma student"],
          ["Local professional family", "Prefers IB or IGCSE for a foreign degree", "Weekly lessons beside a state-board or CBSE school day"],
          ["Goa-border family", "Lives in one state, works in the other", "Flexible slots and help choosing between school options"],
        ],
      },
      bullets: [
        "Navy and Kaiga families make up much of the demand",
        "Continuity across transfers is the main concern",
        "Karwar has few local IB or IGCSE specialists",
        "Online matching works the same wherever the posting moves",
      ],
    },
    {
      heading: "State board, CBSE, IB and IGCSE: what changes for a Karwar child?",
      paragraphs: [
        "In Karnataka the SSLC at Class 10 is followed by a pre-university stage in a PU college, while CBSE and the IB carry on inside one school. That structural difference already affects transfers, and children moving between Kendriya Vidyalaya-style CBSE schools and the state board have felt it.",
        "IB and IGCSE differ again in what they reward. State and CBSE papers lean on knowing the prescribed textbook well. IB and IGCSE questions often put a familiar idea into an unfamiliar setting and ask for an explanation, a judgement or a calculation with the working visible. Marks go to the reasoning as much as the answer.",
        "Language is another factor. A Karwar child may speak Konkani at home, Kannada at school and Hindi with service friends, which makes an IB language acquisition course or IGCSE second-language paper a sensible fit rather than a hurdle.",
        "The fix is not to abandon what the child does well. Neat working, steady revision and clear handwriting all carry over. What must be added is fluency in command words and comfort with unfamiliar data.",
      ],
      table: {
        caption: "Board structures a Karwar family may meet",
        columns: ["Feature", "Karnataka state board", "CBSE", "IB or IGCSE"],
        rows: [
          ["After Class 10", "PU college for Class 11-12", "Same school continues", "IGCSE then Diploma or A Level, often in a new school"],
          ["Main question type", "Textbook recall", "Recall and application", "Reasoning, data, evaluation"],
          ["Internal assessment", "Modest", "Moderate", "Significant: IAs, practicals or coursework"],
          ["Common in Karwar", "Yes, most local schools", "Yes, including service-family schools", "None confirmed locally"],
        ],
      },
      bullets: [
        "The PU-college split affects transfers into or out of Karnataka",
        "IB and IGCSE questions change the setting of familiar ideas",
        "Konkani and Kannada households can use language courses as strengths",
        "Working and revision habits transfer between boards",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Karwar family?",
      paragraphs: [
        "Price follows the tutor and the course, not the pin code. Higher Level sciences and Maths draw on a smaller group of experienced teachers, so quotes for those tend to sit above those for IGCSE Core English or Business. Session length and how many lessons a week you want change the total.",
        "Because nobody travels, a Karwar family pays nothing for distance. A tutor in Chennai is not cheaper or dearer than one in Pune because of where your home is. Many families like that clarity, especially those used to negotiating travel or transfer allowances.",
        "The rate is set out in writing before the trial lesson. If you proceed, it stays put unless you ask for a change. Service and plant families with uncertain transfer dates can pause when a move is announced and restart afterwards with the same tutor.",
        "As for value, the useful comparison is not with cheaper state-syllabus tuition in town. It is with what a wrong preparation costs: a lost grade, a resit or a delayed university start.",
      ],
      bullets: [
        "Subject, level, tutor experience and frequency set the rate",
        "Nothing extra for distance",
        "Quote in writing before the trial",
        "Pause and restart around postings",
      ],
    },
    {
      heading: "Online tutor, local classes or self-study: comparing options in Karwar",
      paragraphs: [
        "Karwar's tuition scene is modest in size next to Mangaluru or Hubballi. There are classes for SSLC and PUC subjects, CBSE coaching and some entrance-exam preparation, and many senior students travel or move for NEET and JEE coaching. What the town lacks is a bench of teachers who have taught IB or IGCSE.",
        "A local private teacher can be strong for Karnataka or CBSE syllabuses. For Cambridge or IB, ask specifically whether they have prepared students for those papers and used the official mark schemes. If yes, that can work well, and we would not argue with it.",
        "Self-study suits a motivated student and is common among IGCSE private candidates. Its weak point is feedback, especially for extended writing, where a student cannot easily judge what an examiner wants to see.",
        "Online tutoring fits the remaining gap. The connection is the weak spot in a coastal town during heavy rain, so plan for a hotspot, and choose evening slots when power is steadiest.",
      ],
      table: {
        caption: "Comparing ways to get IB or IGCSE support in Karwar",
        columns: ["Option", "Syllabus fit", "Format", "Main limit"],
        rows: [
          ["State-board or CBSE class", "Wrong exam for IB or IGCSE", "Group", "Useful only for the school syllabus"],
          ["Local private teacher", "Depends on their past classes", "One to one", "Ask for proof of IB or IGCSE experience"],
          ["Self-study", "Fine for past-paper practice", "Solo", "No outside marking or feedback"],
          ["Matched online tutor", "Chosen by code and level", "One to one, online", "Needs a steady connection"],
        ],
      },
      bullets: [
        "Local classes are built for state and CBSE exams",
        "Ask any private teacher about actual IB or IGCSE marking experience",
        "Self-study lacks feedback on long answers",
        "Keep a hotspot ready for the rainy season",
      ],
    },
    {
      heading: "Monsoon, ghat roads and the Karwar academic year",
      paragraphs: [
        "Karwar sits on one of the wettest stretches of the Karnataka coast. From June to September, rain can be steady for days, rivers such as the Kali swell, and roads on the ghat sections toward Hubballi and along the national highway can be closed by landslides. Families have learned to travel less in July and August and to plan around it.",
        "For online lessons the practical effects are power cuts and connectivity dips. We suggest a phone hotspot, a charged laptop and one spare weekly slot in these months. If a lesson is lost, it is rescheduled at no extra cost.",
        "Festivals and school rhythms add their own marks. Ganesh Chaturthi is celebrated widely on this coast, Deepavali follows in autumn, and Christmas is observed by a sizeable community. Naval and plant households also work to duty rosters that do not always match the school year.",
        "On the exam side, Karnataka's SSLC and PUC papers fall in March and April, while IGCSE runs in May-June and October-November and the IB Diploma sits in May. For children on both tracks, staggering revision helps.",
      ],
      table: {
        caption: "A Karwar year and its effect on lessons",
        columns: ["Months", "What is happening", "Planning note"],
        rows: [
          ["March-April", "SSLC and PUC exams", "Stagger lessons if a sibling sits them"],
          ["May-June", "IGCSE main series and IB exams; rain begins", "Book revision early and test the backup connection"],
          ["July-August", "Peak rain; ghat closures", "Spare weekly slot; avoid planning travel"],
          ["September", "Ganesh Chaturthi; rain eases", "Reduced schedule around the festival"],
          ["October-November", "IGCSE resits, IB November session, Deepavali", "Good window for catch-up"],
        ],
      },
      bullets: [
        "Peak rain from June to September affects power and roads",
        "A hotspot and spare slot are sensible precautions",
        "Naval and plant duty rosters may change lesson times",
        "IGCSE: May-June and October-November",
      ],
    },
    {
      heading: "Routes after IB or IGCSE: Goa, Karnataka and abroad",
      paragraphs: [
        "Karwar students often look north to Goa as much as inland to Karnataka. Goa has its own university and medical college, along with a well-known BITS Pilani campus and an NIT, and these are within reach of a Karwar family by road. Whether a given course accepts an IB or IGCSE record, and on what terms, needs checking against current admission rules.",
        "In Karnataka, families look to Dharwad and Belagavi for university and professional colleges, Mangaluru for medical and engineering options, and Bengaluru for the widest choice. NITK Surathkal is a recognised engineering destination on the coast.",
        "The paperwork is the same everywhere: an Association of Indian Universities equivalence certificate for the qualification, and the right subject combination for JEE Main or NEET-UG. CUET-UG opens central universities and some others, with a subject list that does not map neatly to IB groups.",
        "For overseas study, IB points and predicted grades drive UK offers, American colleges read them alongside essays and tests, and Canadian and Australian universities publish their own tables. Navy families sometimes benefit from postings that put a child near an overseas-facing school, but that varies too much for us to generalise.",
        "The tutor's role is academic: teaching well, improving grades where possible, and building exam technique.",
      ],
      bullets: [
        "Goa universities and colleges are within reach of Karwar by road",
        "Dharwad, Belagavi, Mangaluru and Bengaluru are the main Karnataka options",
        "AIU equivalence and subject mix decide Indian eligibility",
        "Predicted grades matter for UK and Canadian applications",
      ],
    },
    {
      heading: "Physics, Maths and Chemistry at Diploma level for a Karwar student",
      paragraphs: [
        "Many Karwar Diploma students come from engineering or defence backgrounds and lean toward Physics HL and Maths AA HL. That is a demanding pairing, and it rewards early attention to the unfamiliar problem types: Paper 3 in Maths, Paper 3 options in Physics and the internal investigation.",
        "Maths AI suits a student who wants Biology, Economics or Psychology alongside it, and the choice is best made after a diagnostic session in Class 11 rather than on advice from an older cousin's experience.",
        "Chemistry brings a quantitative start and a sudden shift into organic mechanisms and equilibrium at HL. Students who found year one easy sometimes need targeted help exactly then. The internal assessment rewards a defined question and a controlled method.",
        "Because the district has no IB classroom, none of this is available locally, and tutors from outside are the way to a specialist. A student does not need a big-city address to study well; they need someone who has taught the course before.",
      ],
      bullets: [
        "Physics HL and Maths AA HL need early Paper 3 practice",
        "AI suits students combining with social science or biology",
        "Chemistry HL gets harder when organic mechanisms arrive",
        "Specialist teaching is delivered online",
      ],
    },
    {
      heading: "Should a Karwar student take IGCSE Core or Extended, and which board?",
      paragraphs: [
        "Core caps the top grade in most subjects; Extended keeps everything open from A* down. A student who might later attempt the Diploma, A Level Sciences or an engineering path should aim for Extended in Mathematics and the sciences. Core suits a student who wants to protect marks while building confidence.",
        "Board choice is often out of the family's hands, since an approved exam centre offers only some. Ask the centre for its list before anything else. Cambridge and Pearson Edexcel differ in codes and papers, so the tutor must know which is being sat.",
        "Because Karwar has no confirmed IGCSE school, private candidacy needs planning: entry deadlines, fees and any practical requirements are set by the centre. A tutor can prepare a student for the papers, but cannot register them.",
        "For service families the calendar can be harder. If a transfer lands in Grade 10, a plan for where the exams will be sat, and with which centre, should be made before the move is confirmed.",
      ],
      bullets: [
        "Extended in Maths and sciences for Diploma or A Level ambitions",
        "Confirm board and code with the exam centre first",
        "Private candidates should plan entry early",
        "Service families should plan exam venue before a transfer",
      ],
    },
    {
      heading: "How does a tutor get chosen for a Karwar student?",
      paragraphs: [
        "It starts with a chat. We ask for board, subject, level, current and target grades, the exam session and what is going wrong. For Karwar families we also ask about postings, because a tutor's schedule should suit a household that may move.",
        "We verify qualifications, recent teaching of the exact syllabus and approach to assessed work. Then we suggest a shortlist and arrange a free trial lesson.",
        "After the trial, the tutor shares a short first-month plan, and we send a written note after each session. You may change anything about the plan.",
        "If the fit is wrong we replace the tutor. That is normal, and does not carry a fee.",
      ],
      bullets: [
        "We ask about postings and duty rosters as well as syllabus",
        "Qualifications and recent syllabus teaching are checked",
        "A free trial lesson comes first",
        "Replacement is straightforward",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors for IB PYP, MYP and Diploma subjects and Cambridge and Edexcel IGCSE, teaching live over video for Karwar families. Matching starts from syllabus and level, then adds availability that suits a household with shifts or postings.",

  process: [
    { title: "Send the details", description: "Programme or board, subject and level, present and target grade, and the hours that fit your Karwar household." },
    { title: "Receive a shortlist", description: "Tutors are chosen for syllabus fit and recent teaching, wherever they are based." },
    { title: "Take a free trial lesson", description: "Your child works on a real topic online, with no obligation." },
    { title: "Confirm the plan", description: "You see the rate in writing, the first-month topics and how progress will be reported." },
    { title: "Start regular lessons", description: "A fixed slot that can travel with you if a posting changes, with reviews every few weeks." },
  ],

  whyPoints: [
    { title: "Matched by syllabus", description: "Tutors are chosen for the exact IB subject and level or IGCSE board, code and tier." },
    { title: "Keeps pace with postings", description: "The same tutor can continue if your family moves, since lessons are online." },
    { title: "Trial first", description: "A live lesson shows you the fit before you commit." },
    { title: "Academic honesty", description: "Tutors guide but never write assessed work." },
    { title: "Written progress", description: "A brief note follows each session." },
    { title: "Independent and flexible", description: "No school or Navy ties, no long contract, and a change of tutor whenever needed." },
  ],

  faqs: [
    { question: "How do I find IB and IGCSE tutors in Karwar?", answer: "Send IB Gram the programme or board, subject, level and exam session, and we shortlist tutors who teach that course online. No IB or IGCSE school in Karwar could be confirmed, so the match rests on syllabus fit, not distance. A free trial lesson comes before you commit." },
    { question: "Is there an IB or IGCSE school in Karwar?", answer: "We could not confirm one. Karwar's schools run the Karnataka state board and CBSE, including schools familiar to service families. The nearest options are across the Goa border and in Mangaluru, Hubballi-Dharwad and Bengaluru. Check current school finders if you plan a move." },
    { question: "Do tutors visit homes in Karwar?", answer: "No. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. In Karwar you get online home tuition, a live one-to-one lesson at home on a laptop with a shared whiteboard. Nobody from IB Gram travels to Karwar." },
    { question: "What does IB or IGCSE tuition cost in Karwar?", answer: "The rate depends on programme, subject, level, tutor experience and session length. It is given in writing before the trial lesson, and it does not change with your neighbourhood in Karwar, as no travel is involved." },
    { question: "Can tutoring continue if my Navy or plant posting changes?", answer: "Yes. Lessons are online, so the same tutor can continue from a new city, and the weekly slot only needs adjusting for your new routine. You can also pause during the move and restart afterwards without a penalty." },
    { question: "My child is in Karnataka state board. Can they add an IGCSE subject?", answer: "Possibly, as a private candidate through an approved exam centre, provided your family arranges entry. Tutoring covers teaching and paper practice. Confirm centre dates, fees and practical requirements early." },
    { question: "Which IB Diploma subjects can you cover for Karwar students?", answer: "Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, ESS, Geography, History, Kannada B and Hindi B, plus TOK coaching. HL and SL are matched separately." },
    { question: "Do you teach MYP and PYP children in Karwar?", answer: "Yes. MYP work centres on criterion-based writing and the Personal Project; PYP work builds reading, writing and number. Both are delivered online in short, age-appropriate sessions with a written note for parents." },
    { question: "Which IGCSE boards do you support?", answer: "Cambridge and Pearson Edexcel. Cambridge codes such as 0580, 0625 and 0620 are most requested. The exam centre decides which board a private candidate can sit, so confirm that first." },
    { question: "Does online tutoring really work from a coastal town like Karwar?", answer: "For most students it does, and it is often the only way to reach a specialist. Rain can interrupt power and internet between June and September, so we plan a spare weekly slot and suggest a hotspot backup." },
    { question: "Can a tutor help with IAs or the Extended Essay?", answer: "A tutor can guide but never write. That includes choosing a question, understanding criteria, planning data and commenting on drafts. Writing assessed work breaches IB integrity rules." },
    { question: "When should my child start tutoring?", answer: "At the start of the course if possible: Grade 9 for IGCSE, Class 11 for the Diploma. Starting later still helps by focusing on high-value topics and past papers." },
    { question: "Can lessons work around duty rosters and shift patterns?", answer: "Yes. Many Karwar families have a parent on shifts, and we pick slots when the child is free and the home is quiet. Times can be shifted for a duty change with reasonable notice." },
    { question: "How do ghat closures and heavy rain affect lessons?", answer: "Road closures do not affect online lessons, but power and broadband can dip in heavy rain. We keep a spare slot each week and reschedule any lost lesson at no cost." },
    { question: "Can my child sit IGCSE from Karwar without a school?", answer: "As a private candidate, possibly, through an approved centre. IB Gram teaches and provides paper practice, but the family arranges entry and practical components. Ask the centre for its dates and fees well ahead." },
    { question: "What happens if we are not happy with the tutor?", answer: "Tell us and we will find another. We review progress regularly, and there is no penalty for changing a tutor or stopping." },
    { question: "Is IB Gram linked with the Navy, any school or an exam board?", answer: "No. IB Gram is independent. It has no link with the Navy, any employer, any school, the International Baccalaureate, Cambridge or Pearson. Names on this page are for context only." },
    { question: "How do I begin?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the programme or board, subject, level and current grade. You will receive a shortlisted tutor and trial slots, at no charge." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring in Mangaluru", href: "/mangaluru/", description: "Nearest coastal city with several Cambridge IGCSE schools." },
    { label: "IB and IGCSE tutoring in Hubli-Dharwad", href: "/hubli-dharwad/", description: "Tutor matching for northern Karnataka families." },
    { label: "IB and IGCSE tutoring in Belagavi", href: "/belagavi/", description: "Online IB and IGCSE tuition for Belagavi students." },
    { label: "IB and IGCSE tutoring in Bengaluru", href: "/bengaluru/", description: "Karnataka's largest IB and IGCSE school cluster." },
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online IB and IGCSE tuition works across Indian cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where IB Gram's in-person home tuition runs." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam sessions." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA versus AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your details and book a free trial." },
  ],

  closingHeading: "Book a free trial lesson for your Karwar student",
  closingBody:
    "Tell us the programme or board, the subject and level, the grade your child has now and the hours that work around your family's duties. We reply with a tutor, their teaching background and trial slots, online and one to one, with nothing to pay and nothing to commit to. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
