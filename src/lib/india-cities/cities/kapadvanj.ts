import type { CitySeoPage } from "../types";

/**
 * /kapadvanj/ - IB and IGCSE tutoring page for Kapadvanj, Kheda district, Gujarat. Online only.
 * No IB or Cambridge/Edexcel school is confirmed in Kapadvanj, so stripSchools is empty and the clusters
 * reuse the Vadodara and Ahmedabad options from the existing Nadiad and Anand pages, clearly labelled.
 */
export const kapadvanj: CitySeoPage = {
  slug: "kapadvanj",
  countryName: "Kapadvanj",
  countryNameLong: "Kapadvanj, Kheda, Gujarat",
  demonym: "Kapadvanj",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons kept clear of the nine Navratri nights, Uttarayan kite days, Diwali week and the hottest April afternoons",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.0233, longitude: 73.0703 },
  wikipedia: "https://en.wikipedia.org/wiki/Kapadvanj",
  alternateNames: ["Kapadwanj", "Kapadvanj Kheda", "Kapadvanj Gujarat"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Kapadvanj | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Kapadvanj, Kheda: online one-to-one home tuition in Maths and Science, with Gujarati-medium students in mind. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Kapadvanj, Online",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR KAPADVANJ AND KHEDA, ONLINE",
  heroSubtitle:
    "Want private tuition at home in Kapadvanj for an IB or IGCSE student? What we offer is online: one-to-one lessons the child takes from the family study corner, with a tutor who has already taught the same course and works in Indian Standard Time. Tutors do not travel to Kapadvanj, but the lesson is still personal, scheduled around school, and built on the real syllabus.",
  primaryKeyword: "IB and IGCSE tutors in Kapadvanj",
  imageAltText: "A Kapadvanj student in Kheda district revising IGCSE Mathematics on a laptop during a live one-to-one lesson",
  secondaryKeywords: [
    "IB tutor Kapadvanj",
    "IGCSE tutor Kapadvanj",
    "IB home tuition Kapadvanj",
    "IGCSE home tuition Kapadvanj",
    "IB private tuition Kapadvanj",
    "IB Maths tutor Kapadvanj",
    "IGCSE Maths tutor Kapadvanj",
    "IB Physics tutor Kapadvanj",
    "IB Chemistry tutor Kapadvanj",
    "IB Biology tutor Kapadvanj",
    "IB DP tutor Kapadvanj",
    "IB MYP tutor Kapadvanj",
    "IB PYP tutor Kapadvanj",
    "IGCSE online tuition Kapadvanj",
    "IB tutor Kheda district",
    "IGCSE tuition Nadiad Kapadvanj",
    "online IB tutor Kapadwanj",
    "Cambridge IGCSE tutor Kheda Gujarat",
  ],

  heroTrustPoints: [
    "Tutors matched to the IB subject and level or the IGCSE syllabus code your child follows",
    "Live private lessons that fit round a GSEB or CBSE school day",
    "A free first lesson and a written rate before you commit",
    "Independent of the IB, Cambridge, Pearson and every school",
  ],
  heroStats: [
    { value: "IST", label: "Kapadvanj's own time zone" },
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards taught" },
    { value: "Free trial", label: "First lesson at no cost" },
  ],

  intro: {
    heading: "Kheda's old market town, and why families here ask about international syllabuses",
    paragraphs: [
      "Kapadvanj is one of the older towns of Kheda district, known for its historic stepwell and temples, its weekly markets and the farming economy of the Charotar belt around it. The school landscape is mainly Gujarati-medium under the Gujarat board, with English-medium CBSE schools in smaller numbers. Yet this region has unusually strong ties abroad: many families have relatives in the United Kingdom, the United States, Canada or East Africa, and questions about IB and IGCSE often start with a cousin overseas.",
      "We do not send tutors to houses in Kapadvanj. In-person home visits exist only in Gurugram and parts of Delhi NCR. The alternative we run for Kapadvanj is online home tuition, where a private lesson happens live on a laptop while the child sits at home and the tutor teaches from another Indian city. It gives a student in a taluka town the same kind of subject specialist who would otherwise be found only in Ahmedabad or Vadodara.",
      "Typical learners include children in Class 8 to 10 whose parents are weighing a move to a Vadodara or Ahmedabad international school, students at such schools who board or commute and want extra lessons, and families planning to settle abroad who want the child to carry a recognised syllabus.",
      "Tutors coach; they never write an Internal Assessment, Extended Essay or any assessed piece. IB Gram is independent of every board and school.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE",
      "Online lessons only; no tutor comes to Kapadvanj",
      "Friendly to students moving from Gujarati-medium classes",
      "Free trial lesson and a short note after each session",
    ],
  },

  programmesIntro:
    "The four IB programmes can look unfamiliar to parents who know the Gujarat board. Each summary below says what the stage involves and how online tutoring supports a Kapadvanj child.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Learning is organised into units of inquiry on themes such as how the world works, and the final-year Exhibition is a project pupils run themselves. It values asking questions as much as giving answers.",
      countryNote:
        "A Kapadvanj child who speaks Gujarati at home gains from short, playful English sessions on picture books and number puzzles before joining a PYP classroom in a larger city.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teaching is concept-driven and each subject is graded on published criteria. The Personal Project asks a student to choose a topic, plan it and reflect on the outcome.",
      countryNote:
        "Gujarati-medium students usually calculate quickly but are asked to explain in full sentences for the first time in MYP, and that is where a patient tutor makes a difference.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students choose three Higher Level and three Standard Level subjects and complete the Extended Essay, Theory of Knowledge and CAS. Final grades and school predictions carry into university applications.",
      countryNote:
        "DP students tied to Kapadvanj are likely to be at a school in Vadodara or Ahmedabad, and the weekends and Diwali break at home suit a steady online tutor.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students pair a selection of DP courses with a career-related qualification, a personal development course and a service learning project. Few Indian schools run it.",
      countryNote:
        "We are not aware of a CP school in Kapadvanj. Support would apply to the academic courses a student studies at a school elsewhere.",
    },
  ],

  subjectsIntro:
    "Kheda's families lean towards business, pharmacy, engineering and medicine, so we pay special attention to Mathematics and the sciences, while matching language support to children who think in Gujarati.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof, with full written working at every stage." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Statistics, probability and modelling, with calculator routines practised early." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves and fields, using unfamiliar contexts." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, kinetics, equilibrium and organic chemistry, with exact language in answers." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and physiology, written in the terms examiners expect." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram practice and evaluation, with Gujarat's dairy cooperatives and trade as examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies, ratios and recommendations, well suited to business-minded households." },
    { name: "IB MYP Individuals and Societies", levels: "MYP 4-5", description: "Early economics and enterprise reasoning before the Diploma." },
    { name: "IB MYP Mathematics and Sciences", levels: "MYP 1-5", description: "Investigations and written explanations that prepare for the Diploma." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysis of prose and non-literary texts, with practice in comparative essays." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language acquisition focused on speaking, reading and writing." },
    { name: "IB Gujarati A", levels: "HL / SL", description: "Literature in the home language, where the school arranges it, with guidance on analytical writing." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, networks and the programming solution." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion of how we know what we claim to know, feeding the exhibition and essay the student writes." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Research question, structure and referencing discussed in feedback only." },
  ],

  igcseSubjectsIntro:
    "IGCSE is the route most Vadodara and Ahmedabad international schools use before Class 11. We find out whether your child sits Cambridge or Pearson Edexcel and which tier, then teach to that paper.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Algebra, mensuration, graphs and probability, with guidance on tier entry." },
    { name: "IGCSE Additional Mathematics", levels: "Grade 10", description: "Calculus, logarithms and trigonometry, to prepare for IB or A Level." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Energy, forces, electricity and waves, with the practical paper covered." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Mole calculations, acids and bases, reactivity and organic basics." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, transport, reproduction, inheritance and ecosystems." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Grade 9-10", description: "Three sciences taught under one award." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Programming logic, data representation and networks." },
    { name: "IGCSE Accounting and Business Studies", levels: "Grade 9-10", description: "Ledgers, final accounts and business concepts for trading families." },
    { name: "IGCSE English First and Second Language", levels: "Grade 9-10", description: "Comprehension, summary and composition for students who speak Gujarati at home." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "Reading, writing and oral work in a widely understood language." },
  ],

  regionsTitle: "Kapadvanj and the villages around it, taught online",
  regionsIntro:
    "A lesson on a screen reaches the town centre and the farm road alike. These notes describe how daily life around Kapadvanj shapes our timetable, from market days to bus schedules and the school day.",
  regions: [
    { name: "Kapadvanj town centre and old market", note: "Shop and trading families in the walled-town lanes, where lessons work best after the evening rush." },
    { name: "Near the stepwell and old temples", note: "A heritage quarter of long-settled households, many with relatives overseas." },
    { name: "Kapadvanj bus stand and Nadiad road", note: "The main link to Nadiad and Ahmedabad, used by students and office staff who commute." },
    { name: "Kapadvanj Nagar Panchayat colonies", note: "Newer residential pockets with government staff, teachers and bankers." },
    { name: "Kathlal and the Kheda road", note: "Neighbouring villages where families look to Kheda and Nadiad for schooling." },
    { name: "Mahudha and Thasra side", note: "Towns to the south where parents often enquire about online options for science subjects." },
    { name: "Balasinor side", note: "Families from the eastern talukas who travel through Kapadvanj for shopping and schools." },
    { name: "Farming villages of Kapadvanj taluka", note: "Tobacco, cotton and cereal farming households, where lessons are planned around harvest labour and power supply." },
    { name: "Prantij and Modasa approach", note: "Border areas towards Sabarkantha where students may also use Modasa or Himmatnagar for coaching." },
  ],

  schoolClusters: [
    {
      city: "Kapadvanj and Kheda district",
      note: "We could not confirm an IB or Cambridge / Edexcel IGCSE school in Kapadvanj or the surrounding taluka. Local schools follow the Gujarat board or CBSE, so anyone wanting an international syllabus looks to a larger city.",
      schools: [],
    },
    {
      city: "Nearby: Vadodara",
      note: "The larger city that many Charotar families choose for an international school, reached by road via Nadiad or Anand and often on a hostel or shared-ride basis.",
      schools: ["Navrachana International School", "VIBGYOR High School, Padra Road"],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "The state's main hub for IB and Cambridge schools, roughly two hours away by road, with a long-standing habit of families from Kheda moving there.",
      schools: ["Ahmedabad International School", "Mahatma Gandhi International School", "Calorx Olive International School"],
    },
  ],
  schoolDisclaimer:
    "The Vadodara and Ahmedabad schools appear only because families from Kheda district sometimes consider them. IB Gram is an independent tutoring business with no link to any school, the IB, Cambridge or Pearson, and we have not confirmed an IB or IGCSE school in Kapadvanj itself. Please check programmes and admissions with the school.",

  modesIntro:
    "Every lesson for Kapadvanj is online. These three formats reflect a taluka town with a strong Gujarati-medium tradition and a steady stream of families heading to larger cities.",
  modes: [
    {
      title: "Weekly online home tuition",
      description:
        "A fixed evening hour with a tutor chosen for the course. It suits students already in an international school and those building up to one.",
      bullets: [
        "One specialist per subject",
        "Digital whiteboard and timed past papers",
        "Written summary after each class",
        "No tutor travels to Kapadvanj",
      ],
    },
    {
      title: "Language-bridge programme",
      description:
        "For students from Gujarati-medium schools who aim at an English-medium international classroom, lessons combine subject content with spoken and written English.",
      bullets: [
        "Reading aloud and paraphrasing routines",
        "Glossaries for Maths and Science",
        "Writing one short explanation each week",
        "Quarterly check against the target syllabus",
      ],
    },
    {
      title: "Vacation and exam sprints",
      description:
        "Longer sessions in the Diwali and summer breaks and in the weeks before mock and board papers, then a return to the usual weekly slot.",
      bullets: [
        "Daily or alternate-day sessions",
        "Timed mocks with mark-scheme review",
        "Revision plan shared with parents",
        "Gap analysis after every mock",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Kapadvanj have an IB or IGCSE school, and where do Kheda families go?",
      paragraphs: [
        "We could not confirm any IB or Cambridge / Edexcel IGCSE school in Kapadvanj, so we do not name one. Schools in the taluka follow the Gujarat Secondary and Higher Secondary Education Board or CBSE. Families who want an international syllabus generally look to Vadodara or Ahmedabad, both within a few hours by road, where schools listed on our Vadodara, Anand and Ahmedabad pages offer IB or Cambridge courses.",
        "Distance decides a great deal. A daily commute of that length is unrealistic for a child, so the decision becomes boarding, renting a flat in the city, or relocating the household. Families with business interests in Ahmedabad sometimes already have a second home there, which makes the move simpler.",
        "That is why online lessons become the stepping stone. A child can spend six months building English fluency and IB-style problem solving at home in Kapadvanj, then join a city school in Class 9 or 11 without a shock. For a family abroad or planning to go, the same lessons keep the syllabus alive.",
        "In every case, the tutor supports the school arrangement and never takes its place. A free trial shows whether your child responds to the teaching style.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Kapadvanj",
        "Vadodara and Ahmedabad are the usual destinations",
        "Online lessons prepare a child before any move",
        "Tutoring complements the school and never replaces it",
      ],
    },
    {
      heading: "How is IB or IGCSE different from GSEB and CBSE for a Kapadvanj student?",
      paragraphs: [
        "Most children in Kapadvanj sit the Gujarat board's Class 10 and Class 12 examinations in Gujarati, with English and Hindi as languages. The syllabus leads naturally to GUJCET for engineering and pharmacy, to NEET for medicine, and to local universities. CBSE schools, fewer in number, teach in English along national lines.",
        "IB and IGCSE differ chiefly in how they test. A GSEB answer is often judged on whether the right fact is stated. An IB or IGCSE answer is judged on whether the reason is given, the unit is right and the conclusion follows from the data. The same knowledge earns a different number of marks depending on how it is presented.",
        "There is also a change in language. Students who do their sums in Gujarati quickly sometimes freeze when a question is written as a paragraph of English. We work on reading a question, underlining the command word and planning an answer before writing a line.",
        "The table below sets the options next to each other.",
      ],
      table: {
        caption: "GSEB, CBSE and IB or IGCSE, compared for a Kheda household",
        columns: ["Feature", "GSEB", "CBSE", "IB / IGCSE"],
        rows: [
          ["Teaching language", "Mostly Gujarati", "English", "English, with Hindi or Gujarati as languages where offered"],
          ["Style of assessment", "Factual recall with some application", "Recall and application", "Explanation, data use and evaluation"],
          ["Available near Kapadvanj", "Yes, widely", "A few schools", "None confirmed; nearest in Vadodara and Ahmedabad"],
          ["Main Indian entrance routes", "GUJCET, NEET, JEE", "JEE, NEET, CUET-UG", "CUET-UG, NEET and JEE subject to equivalence and eligibility"],
          ["Recognition abroad", "Assessed individually", "Assessed individually", "Broadly recognised"],
        ],
      },
    },
    {
      heading: "What decides the fee for online IB or IGCSE tuition in Kapadvanj?",
      paragraphs: [
        "The rate for a lesson reflects the programme and year, the subject, the length of each class, the number of classes per week and the experience of the tutor with your exact board. IB Physics HL in Class 12 is taught by someone with a different track record from the tutor of Class 6 reading and Mathematics, and their rates differ. We do not publish a list because it would be inaccurate for most families.",
        "Online teaching removes several costs that used to come with specialist help. No petrol to Nadiad, no bus fare to Vadodara, no hostel stay near a coaching centre, and no evening lost in travel. For a family in a taluka town those savings are real, and the lesson time itself is spent teaching.",
        "After you send the class, board and subject on WhatsApp, we propose a tutor and quote a rate in writing. You see the figure before the trial lesson, and if the trial does not suit, you pay nothing. Later you may cut hours, pause for a wedding or festival, or ask for a new tutor without charge.",
        "We suggest starting with a single weekly lesson in the hardest subject and reviewing after a month.",
      ],
      bullets: [
        "Level, subject, duration, frequency and tutor experience set the rate",
        "No travel, hostel or petrol costs",
        "Written rate before the free trial",
        "Flexible hours and a no-fee tutor change",
      ],
    },
    {
      heading: "Online tutor, local tuition class or self-study: which works best in Kheda district?",
      paragraphs: [
        "Kapadvanj and Nadiad have good local teachers and coaching classes for GSEB subjects, GUJCET and NEET, and for those goals they are the natural choice. Where they fall short is international syllabuses. A teacher who has not prepared students for IGCSE Chemistry Paper 4 or for an IB Mathematics exploration cannot be expected to know what markers prefer.",
        "Online IB Gram tutors are chosen for having taught the actual course, with the correct past papers, mark schemes and examiner reports. The one-to-one setting also helps students still gaining confidence in English, because a tutor can pause, rephrase and let the child answer in their own time.",
        "Self-study through videos is helpful for revision, but no video can read a student's attempt or notice a consistent error in working. Feedback is where improvement comes from.",
        "The table shows how the routes compare.",
      ],
      table: {
        caption: "Study routes for an IB or IGCSE student in Kapadvanj",
        columns: ["Route", "Course knowledge", "Attention to your child", "Suitability for Kapadvanj"],
        rows: [
          ["Online one-to-one tutor", "Chosen for the exact syllabus", "Full attention, every lesson", "Needs reliable internet; no journey"],
          ["Local tuition class in Kapadvanj or Nadiad", "Strong for GSEB, GUJCET and NEET", "Shared among a batch", "Close by, but not built for international papers"],
          ["Coaching in Ahmedabad or Vadodara", "Mixed; some centres cover IGCSE", "Depends on batch size", "Needs a move or a long daily journey"],
          ["Self-study from videos", "Varies", "No feedback unless reviewed", "Flexible but unsupervised"],
        ],
      },
    },
    {
      heading: "How do Uttarayan, Navratri and the Gujarat summer affect the study year?",
      paragraphs: [
        "Gujarat's festivals are loud and joyful, and they affect study hours more than most parents admit. Navratri runs for nine nights with garba late into the evening, and few teenagers can be expected to concentrate at eight o'clock. Uttarayan in mid-January fills rooftops with kite flyers for a day or two, and Diwali week with the Gujarati New Year following brings shopping, guests and firecrackers.",
        "We plan around these pauses rather than against them. Heavy lessons move to the weeks before, Navratri evenings are left free or given a light half hour, and Diwali week gets a single revision slot if any. The day after Bestu Varas is a good time to restart.",
        "The weather sets its own limits. Kheda's summers are dry and very hot from April to early June, and afternoon power supply can wobble. The monsoon from late June brings heavy rain and occasional flooding on rural roads. Winter, November to February, is the season for long study blocks and mock papers.",
        "The table lines up the local year with exam dates.",
      ],
      table: {
        caption: "Kapadvanj's festival and weather calendar against the IB and IGCSE year",
        columns: ["Months", "Local rhythm", "Academic focus"],
        rows: [
          ["January to March", "Uttarayan, cool weather, Holi and Dhuleti", "Mocks; Cambridge February-March series; IB final revision"],
          ["April to June", "Fierce heat, weddings, school holidays", "IB May exams; Cambridge and Edexcel May-June papers"],
          ["July to September", "Monsoon, school restarts, Janmashtami, Ganesh Chaturthi", "IB results in July; new Class 9 and 11 terms; Edexcel and Cambridge resits planning"],
          ["October to December", "Navratri, Diwali, Gujarati New Year, pleasant winter", "IB November session; Cambridge October-November and Edexcel November papers"],
        ],
      },
    },
    {
      heading: "What can a Kapadvanj student do after IB or IGCSE?",
      paragraphs: [
        "Students who complete IGCSE and the IB Diploma or A Levels have several options open. In India they can seek places through the Association of Indian Universities equivalence process and CUET-UG for central universities, or apply to private universities that recognise international qualifications. Gujarat has strong institutions such as IIT Gandhinagar, NIRMA University, PDEU, Ahmedabad University and IIM Ahmedabad for management, each with its own admission rules.",
        "For medicine and engineering, NEET and JEE publish eligibility conditions for students of international boards, including subjects studied and equivalence. These rules change and must be read from current official notices each year. A tutor cannot decide your eligibility, only help you meet the academic requirement.",
        "Because Kheda families have long-standing links abroad, study overseas is a common goal. Universities in the United Kingdom, Canada, Australia and the United States understand IB grades, and IGCSE followed by A Levels is a familiar entry route in the UK.",
        "We support grades and exam technique. Applications, personal statements and university choices belong to the student and family.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG for central universities",
        "IIT Gandhinagar, Ahmedabad University and PDEU are well-known local options",
        "NEET and JEE eligibility for international boards must be rechecked annually",
        "Study abroad suits Kheda's diaspora ties",
      ],
    },
    {
      heading: "What are the hardest parts of IB Mathematics and the sciences for Gujarati-medium students?",
      paragraphs: [
        "IB Mathematics is offered as Analysis and Approaches or Applications and Interpretation. The first builds algebra, calculus and proof and suits future engineers and scientists. The second uses statistics and modelling with technology and suits business, design and social science. Students from the Gujarat board usually bring strong arithmetic and algebra, but often have not used a graphic display calculator nor written a sentence justifying each step.",
        "In the sciences, Physics asks for reasoning in new situations, Chemistry needs exact terms and a clean layout for calculations, and Biology asks for precise vocabulary. A student who learnt photosynthesis or electrolysis in Gujarati may know the science, but lose marks because the English term slipped.",
        "We deal with this through a running glossary, annotated model answers, and regular practice with command terms such as define, describe, explain, compare and evaluate. Timed questions build speed without panic.",
        "For an Internal Assessment, a tutor can discuss a research question, variables and data handling and comment on clarity. The work and the writing belong to the student.",
      ],
      bullets: [
        "Choose Mathematics AA or AI by the degree you want",
        "Keep a bilingual glossary of science terms",
        "Practise command words under timed conditions",
        "Get feedback on the IA without ghost-writing",
      ],
    },
    {
      heading: "How should a Kapadvanj family choose IGCSE subjects and tiers?",
      paragraphs: [
        "Cambridge IGCSE offers most subjects at Core and Extended tiers. Core is shorter and capped at grade C, while Extended covers the full syllabus and leads to A*. A student who wants IB Mathematics, A Level sciences or a pharmacy or engineering route abroad should normally sit Extended.",
        "A standard package includes English, Mathematics, two or three sciences, a language and electives. Gujarati-speaking families often take Hindi as the second language, because it is widely taught and scores reliably. Accounting, Business Studies and Economics are popular electives in business households, while Computer Science appeals to students aiming at technology.",
        "English underpins the lot. A student who reads fluently writes better science and humanities answers, so short daily reading and a weekly composition are worth the effort even in quiet months.",
        "Pearson Edexcel IGCSE papers differ in layout from Cambridge ones, so we check the board and code first.",
      ],
    },
  ],

  process: [
    { title: "Send a WhatsApp message", description: "Share the class, board, subject and any Vadodara or Ahmedabad school you are considering." },
    { title: "Get a tutor and a rate", description: "We suggest a tutor who has taught your syllabus and state the rate in writing." },
    { title: "Try a free lesson", description: "Meet online and check the internet link and the fit, without paying." },
    { title: "Pick a weekly slot", description: "Choose an evening that avoids school tests, tuition classes and festival nights." },
    { title: "Review and adjust", description: "Read the lesson notes each month and change hours or tutor if needed." },
  ],

  whyPoints: [
    { title: "Matched to your course", description: "We choose by syllabus code and level, which matters more than the subject name." },
    { title: "English confidence for Gujarati speakers", description: "Tutors rebuild reading, vocabulary and written explanation step by step." },
    { title: "No journeys to Nadiad or Vadodara", description: "Specialist teaching arrives on the screen, and travel hours go back to study." },
    { title: "Parents stay informed", description: "A brief note after each session records what was done and what is next." },
    { title: "Festival-aware timetable", description: "Navratri, Uttarayan and Diwali are planned for, not fought." },
    { title: "Clear boundaries", description: "We coach and explain; we do not write assessed work or promise results." },
  ],

  tutorsIntro:
    "IB Gram tutors teach from several Indian cities and follow Indian Standard Time, exactly as Kapadvanj does. Each is chosen for the courses they have taught, not for a general subject label.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Kapadvanj?",
      answer:
        "We could not confirm one. Schools in Kapadvanj and its taluka follow the Gujarat board or CBSE, and we found no authorised IB or Cambridge school there. The nearest options are in Vadodara and Ahmedabad. Online lessons let a student prepare for a move or follow an international syllabus from home. Please check any school's status directly with it.",
    },
    {
      question: "Can a tutor visit our house in Kapadvanj?",
      answer:
        "No. Tutors do not visit homes in Kapadvanj, and in-person home tuition is offered only in Gurugram and parts of Delhi NCR. We provide online home tuition instead: a live, private lesson at your own table with a tutor based elsewhere in India. You keep the comfort of learning at home and gain access to specialists who do not live in Kheda.",
    },
    {
      question: "Can a Gujarati-medium student prepare for IB or IGCSE from Kapadvanj?",
      answer:
        "Yes, as preparation, though official IB enrolment needs an authorised school. A few months of online lessons build English reading, written reasoning and subject vocabulary. Many families begin in Class 7 or 8 so that a move to an international school in Vadodara or Ahmedabad at Class 9 or 11 feels manageable.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Kapadvanj?",
      answer:
        "Rates are given individually, not from a public list. They depend on the programme and level, the subject, the length and frequency of lessons and the tutor's experience. Because lessons are online, there is no travel charge. You receive the rate in writing before the free trial and can reduce, pause or change tutor later without any penalty.",
    },
    {
      question: "Do tutors help write the Internal Assessment or Extended Essay?",
      answer:
        "No. They coach and give feedback but do not write. A tutor can help a student pick a question, plan a method, think about data and improve the structure of a draft. Every sentence of the assessed work must be the student's own, and IB Gram will not write coursework under any circumstances.",
    },
    {
      question: "Can a tutor explain in Gujarati or Hindi?",
      answer:
        "Partly. IB and IGCSE papers are in English, so lessons run mostly in English, but a tutor who speaks Hindi can clarify a tricky idea in that language first and then build the English vocabulary to match. Gujarati is also possible as a subject, IB Gujarati A, where the school arranges it.",
    },
    {
      question: "When are the IB and IGCSE exams?",
      answer:
        "IB Diploma exams are in May and November. Cambridge IGCSE runs in February-March, May-June and October-November, and Pearson Edexcel has January, May-June and November series. Begin revision at least six months ahead and move to timed past papers in the final eight weeks. The school or exam centre will confirm dates for your child.",
    },
    {
      question: "Will Navratri or Diwali affect lessons?",
      answer:
        "We plan for them. During Navratri evenings, we leave the slot free or use a short half hour, and we shift heavy lessons to the weeks before. Diwali week usually has one revision session at most. After the festival we return to the normal weekly pattern, and any missed hour is rebooked within the month.",
    },
    {
      question: "Should my child take Core or Extended IGCSE?",
      answer:
        "Extended, for most students who want to keep choices open. Core limits the top grade and covers less, while Extended covers the full syllabus and allows A*. A diagnostic lesson shows where your child stands today, and the tutor then advises on the tier with the intended IB, A Level or degree route in mind.",
    },
    {
      question: "Can my child keep the same tutor if we move to Vadodara or Ahmedabad?",
      answer:
        "Yes. The tutor, the weekly slot and the notes travel with your child because lessons are online. If the new school follows a different board, the tutor adapts the plan within a session or two. You can ask for a fresh match whenever the fit changes, without explanation or fee.",
    },
    {
      question: "Do you teach both IB Mathematics AA and AI?",
      answer:
        "Yes, at Higher and Standard Level. Analysis and Approaches suits students aiming at engineering, physics or pure mathematics, while Applications and Interpretation suits business, design and social science routes. The school decides which is offered. A trial lesson on a sample problem shows which style your child finds more comfortable.",
    },
    {
      question: "My child struggles with English questions in Science. What helps?",
      answer:
        "A structured routine helps most. The tutor teaches the command words, builds a bilingual glossary, and has the student explain each step aloud and then in writing. Short weekly practice over two or three months usually changes how confidently a child reads a question, even before the content itself gets harder.",
    },
    {
      question: "How do we begin, and is the first lesson free?",
      answer:
        "The first lesson is free. Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with the class, board and subject. We reply with a tutor profile and a written rate, then arrange a trial at a convenient hour. If the tutor is not the right fit, we will suggest another.",
    },
    {
      question: "Is IB Gram connected to any school or exam board?",
      answer:
        "No. IB Gram is an independent tutoring service and is not affiliated with or endorsed by the International Baccalaureate, Cambridge, Pearson Edexcel or any school mentioned here. School names appear only to show where Kheda families sometimes look. Always confirm fees, curriculum and admission rules with the school itself.",
    },
    {
      question: "Do you also teach students in Nadiad, Kathlal and nearby villages?",
      answer:
        "Yes. Lessons are online, so the same tutors work with students anywhere in Kheda district and beyond. What varies is local detail such as school hours, bus timings and power supply. Tell us your town in your first message, and we plan the timetable to match. Everyone starts with the same free trial.",
    },
    {
      question: "Can a child from a business family study Accounting and Economics at IGCSE?",
      answer:
        "Yes, where the school offers them. IGCSE Accounting, Economics and Business Studies are popular with families from trading backgrounds and lead naturally to IB Business Management or Economics. We match a tutor who has taught the specification and use local examples so that concepts feel familiar.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The national page for students in every state." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Support across every IB stage." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects." },
    { label: "IB Diploma Programme tuition", href: "/programmes/dp/", description: "Six subjects and the core explained." },
    { label: "IB Career-related Programme tuition", href: "/programmes/cp/", description: "How the CP combines academic and career study." },
    { label: "IB Mathematics tuition", href: "/courses/ib/mathematics/", description: "AA and AI courses compared." },
    { label: "Meet the tutors", href: "/tutors/", description: "Tutor profiles and syllabus experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Book a free trial lesson." },
    { label: "IB and IGCSE tutors in Nadiad", href: "/nadiad/", description: "The Kheda district's main city, also served online." },
    { label: "IB and IGCSE tutors in Anand", href: "/anand/", description: "A Charotar neighbour with a similar school picture." },
    { label: "IB and IGCSE tutors in Vadodara", href: "/vadodara/", description: "The nearest large city with international schools." },
    { label: "IB and IGCSE tutors in Ahmedabad", href: "/ahmedabad/", description: "Gujarat's largest hub for IB and Cambridge schools." },
  ],

  closingHeading: "Book a free online lesson from your own home in Kapadvanj",
  closingBody:
    "Send us your child's class, board and the subject that is giving trouble. We will propose a matched tutor, put the rate in writing and fix a trial at a time your family can manage between school, tuition and festivals. Write on WhatsApp to +91 7439 368 115 or email support@ibgram.com.",
};
