import type { CitySeoPage } from "../types";

/**
 * Nowgong here is Nowgong (Nowgaon) in Chhatarpur district, Madhya Pradesh, not Nagaon in Assam,
 * which has its own page at /nagaon/. No school in or near the town could be confirmed as an IB World
 * School or a Cambridge / Edexcel centre, so stripSchools is empty. The clusters name Bhopal, Indore
 * and Delhi NCR schools already checked on the neighbouring Tikamgarh, Panna, Jhansi and Lalitpur
 * pages, and say plainly that local choice is limited.
 */
export const nowgong: CitySeoPage = {
  slug: "nowgong",
  countryName: "Nowgong",
  countryNameLong: "Nowgong, Chhatarpur district, Madhya Pradesh",
  demonym: "Nowgong",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings once the day's heat has eased, and weekend mornings before it builds, with gaps for wedding weeks and board dates",
  lastUpdated: "2026-09-21",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  geo: { latitude: 25.0574, longitude: 79.4381 },
  wikipedia: "https://en.wikipedia.org/wiki/Nowgong,_Chhatarpur",
  alternateNames: ["Nowgaon", "Naugaon", "Nowgong Cantonment", "Nowgong Chhatarpur", "Nowgong MP", "Nowgaon Chhawni"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Nowgong | Online Tuition, Madhya Pradesh",
  metaDescription:
    "Private IB and IGCSE lessons for Nowgong (Chhatarpur) students, live one-to-one at home over video, with subject-matched tutors, notes and a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Nowgong, Madhya Pradesh",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR NOWGONG, CHHATARPUR DISTRICT",
  heroSubtitle:
    "Online home tuition for IB and IGCSE students in Nowgong, Madhya Pradesh: private lessons over video, one tutor and one student, from a laptop at home. This is Nowgong (Nowgaon) in Chhatarpur district, the old Bundelkhand cantonment, not Nagaon in Assam, which has its own page. The nearest international schools are several hours away in Bhopal or beyond, so a tutor who already teaches your child's syllabus matters. Send the board and subject for a matched tutor and a free trial lesson.",
  primaryKeyword: "IB and IGCSE tutors in Nowgong",
  imageAltText: "Nowgong student in a live online IB Physics lesson with a private tutor, studying from home in Madhya Pradesh",
  secondaryKeywords: [
    "IB tutor in Nowgong",
    "IGCSE tutor in Nowgong",
    "IB home tuition Nowgong",
    "IGCSE home tuition Nowgong",
    "IB private tuition Nowgong",
    "IB Maths tutor Nowgong",
    "IGCSE Maths tutor Nowgong",
    "IB Physics tutor Nowgong",
    "IB Chemistry tutor Nowgong",
    "IB Biology tutor Nowgong",
    "IB DP tutor Nowgong",
    "IB MYP tutor Nowgong",
    "IB PYP tutor Nowgong",
    "IGCSE online tuition Nowgong",
    "IB tutor Nowgaon",
    "IB tutor Nowgong Chhatarpur",
    "IGCSE tuition Chhatarpur district",
    "IB online classes Bundelkhand",
    "IB tuition Nowgong cantt",
  ],

  heroTrustPoints: [
    "Live private lessons, one tutor to one student, with nothing recorded and no big batches",
    "Tutors who have taught IB PYP, MYP and DP and Cambridge or Edexcel IGCSE papers",
    "Lesson slots that step around summer heat, wedding weeks and board exam dates",
    "A free first lesson, then a short written note after every session",
    "The same tutor can carry on if your family is transferred to another city",
  ],
  heroStats: [
    { value: "IST", label: "Indian hours, no time-zone fuss" },
    { value: "PYP to DP", label: "All four IB programmes" },
    { value: "Free trial", label: "Lesson one is on us" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
  ],

  intro: {
    heading: "Online IB and IGCSE tuition in Nowgong, the old Bundelkhand cantonment",
    paragraphs: [
      "Nowgong is an unusual small town. It was laid out in 1842-43 as a British cantonment on the sites of four villages, became the headquarters of the Bundelkhand Political Agency in 1859, and in the twentieth century hosted officer-training institutions that later moved away. Today it is a quiet municipal town on NH 39 in Chhatarpur district, with a polytechnic, an engineering college and schools that follow the Madhya Pradesh Board or CBSE. A few families look further afield: households with several postings behind them, professionals whose children may study abroad, and parents who want a curriculum that travels from city to city. For them, the IB and IGCSE are syllabuses that no classroom in town teaches.",
      "IB and IGCSE tutors in Nowgong, as we provide them, work online. A tutor from elsewhere in India teaches your child one to one over video on Indian Standard Time, and all the household needs is a laptop, a notebook and a connection that can carry an hour. Because the tutor is not tied to a postcode, the same person can carry on if the family is transferred, and a child boarding in Bhopal or Indore can keep lessons going through the holidays at home. Each session ends with a short written note on the topic, the errors and the next task.",
      "A word on the name. Nowgong here is the town in Chhatarpur district, Madhya Pradesh, also written Nowgaon. Colonial records used the same spelling for Nagaon in Assam, which is a different place with its own page on this site. The sections below cover schools, boards, fees, the local calendar, university routes and subject lessons. IB Gram is an independent service with no link to the IB, Cambridge, Pearson or any school named, and tutors never write IAs, Extended Essays, TOK essays or coursework.",
    ],
  },

  programmesIntro:
    "An IB programme is usually met in a school that the family has found in another city, so most Nowgong students arrive at tutoring already partway through one. This is what help looks like at each stage.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5 (ages 6-11)",
      description:
        "Teachers plan around big ideas and finish with a self-chosen Exhibition project. For a young child, tutoring means short, warm sessions: reading aloud, number talk and learning to say why an answer is right.",
      countryNote:
        "Hardly any family here meets PYP at home. It usually begins after a move to Bhopal, Indore or Delhi NCR, and a tutor helps a Hindi-medium child pick up the classroom English of inquiry units.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10 (ages 11-16)",
      description:
        "Criteria, not a single mark, decide how each subject is graded, and the programme ends with a Personal Project. A tutor breaks each criterion into plain questions a child can ask about their own answer.",
      countryNote:
        "Students from MP Board or Hindi-medium classrooms carry solid content but meet a new vocabulary of analyse, justify and evaluate. Weekly online sessions give them room to practise that English calmly.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12 (ages 16-19)",
      description:
        "Six subjects, with three usually at Higher Level, plus a 4,000-word Extended Essay, a theory-of-knowledge course and a service strand. Tutors teach for the papers and explain the internal assessment criteria, while the writing remains the student's.",
      countryNote:
        "No Diploma school is within easy reach, so a Nowgong student is typically boarding in Bhopal, Indore or further, or attending online. Holidays at home are when a private tutor matters most.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12 (ages 16-19)",
      description:
        "Two or three Diploma subjects are combined with a career-related study and a reflective project. Tutors support the academic subjects within it.",
      countryNote:
        "CP is unusual in this region. A student on it will have a clear subject list from the school, and once you share it we find a tutor for those papers.",
    },
  ],

  subjectsIntro:
    "Students here often come from Hindi-medium classrooms, so the tutor is chosen for subject depth and for the knack of teaching in precise, plain English.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL or HL", description: "Algebra, calculus and proof-style reasoning for future engineers and scientists, with the step from board-style problems to IB question styles made explicit." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL or HL", description: "Statistics, probability and modelling for students bound for commerce, economics, design or the life sciences, with calculator work built in." },
    { name: "Physics", levels: "SL or HL", description: "From kinematics and waves to electromagnetism and quantum ideas, with attention to significant figures and graph uncertainty." },
    { name: "Chemistry", levels: "SL or HL", description: "Mole concept, bonding and energetics, then organic chemistry and equilibrium, with reaction pathways drilled on paper." },
    { name: "Biology", levels: "SL or HL", description: "Cell biology, genetics, human physiology and ecology, with model answers that show how much detail a mark needs." },
    { name: "Economics", levels: "SL or HL", description: "Micro, macro and development topics, using farm prices, monsoon risk and rural credit as real examples." },
    { name: "Business Management", levels: "SL or HL", description: "Case studies, financial ratios and strategy tools, with the habit of answering in the language of the case." },
    { name: "Computer Science", levels: "SL or HL", description: "Algorithms, data structures and the pseudocode style used in papers, practised by tracing on paper." },
    { name: "Geography", levels: "SL or HL", description: "Population, resources and change, with Bundelkhand's water stress as a live case study." },
    { name: "History", levels: "SL or HL", description: "Source analysis and essay planning across the twentieth-century world." },
    { name: "English A: Language and Literature", levels: "SL or HL", description: "Commentary, comparative writing and the oral, taught as separate skills." },
    { name: "Hindi B", levels: "SL or HL", description: "Reading, writing and conversation for students for whom Hindi is an additional language, with Hindi A literature where a school offers it." },
    { name: "Psychology", levels: "SL or HL", description: "Landmark studies, evaluation and essay structure." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion practice on knowledge questions and the exhibition, with the essay left to the student." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel are handled by separate tutors, since their papers, tiers and question wording differ even under the same subject name.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Two tiers", description: "Arithmetic to trigonometry and statistics, with paper practice that shows where the tier choice matters." },
    { name: "Additional Mathematics", levels: "Class 9-10", description: "Calculus, logarithms and coordinate geometry for strong students who want a bridge to Diploma Mathematics." },
    { name: "Physics", levels: "Two tiers", description: "Motion, electricity, thermal physics and waves, with practical-based questions." },
    { name: "Chemistry", levels: "Two tiers", description: "Atomic structure, reactions, rates, organic chemistry and chemical calculations." },
    { name: "Biology", levels: "Two tiers", description: "Life processes, genetics, ecosystems and data handling." },
    { name: "Combined and Co-ordinated Sciences", levels: "Two tiers", description: "For schools on the double-award science route." },
    { name: "English as a Second Language", levels: "Two tiers", description: "Reading, directed writing, listening and speaking for students whose first language is Hindi or Bundeli." },
    { name: "Hindi as a Second Language", levels: "Two tiers", description: "Comprehension, composition and oral practice." },
    { name: "Computer Science", levels: "Single tier", description: "Logic, pseudocode and programming, traced by hand before any code is typed." },
    { name: "Geography", levels: "Single tier", description: "Landforms, rivers, population and development, with fieldwork-style questions." },
    { name: "Economics and Business Studies", levels: "Single tier", description: "Core ideas, data questions and short evaluation." },
  ],

  regionsTitle: "Nowgong, its old cantonment and the roads to Chhatarpur and Jhansi",
  regionsIntro:
    "Nowgong is a compact town with fields and small villages on every side, and a trip to a bigger city takes hours, not minutes. The notes below describe how a study day tends to run in each pocket and on the roads that link them.",
  regions: [
    { name: "Nowgong town and bazaar", note: "The market area on NH 39, busy from morning and noisy into the evening. Households here usually have reliable mobile coverage, though power cuts still happen in peak summer." },
    { name: "The old cantonment quarter", note: "The part of town laid out when the cantonment was founded in 1842-43, with a British-era church still standing. Quieter streets suit lessons that need a calm corner." },
    { name: "Polytechnic and engineering college area", note: "Nowgong Polytechnic dates from 1952 and the Government Engineering College from 2012, so faculty and student households live close by." },
    { name: "Bilerhi, Dudri and Pipri", note: "Villages named in the cantonment's founding records, now merged into the wider settlement. Many families rely on mobile data, and lessons are easier in the cooler evening." },
    { name: "Farming villages around Nowgong", note: "Wheat and pulses dominate the fields here, and harvest weeks pull families out of routine. Lesson timing is easier to agree a season ahead." },
    { name: "Chhatarpur", note: "The district headquarters, roughly 30 km east, with Maharaja Chhatrasal Bundelkhand University, a wider market and more private schools." },
    { name: "Khajuraho", note: "About 70 km away, a World Heritage temple town whose hotel and guiding economy gives some families an English-speaking, international outlook." },
    { name: "Jhansi", note: "Around 110 km up NH 39, the rail and coaching hub across the Uttar Pradesh border, used by many Bundelkhand families for colleges and hospitals." },
    { name: "Sagar", note: "The university city to the south-east, home to Dr Hari Singh Gour University, which matters to families thinking about CUET-UG and central universities." },
  ],

  schoolClusters: [
    {
      city: "Nowgong and Chhatarpur district: local choice is limited",
      note: "We could not confirm any school in Nowgong or elsewhere in Chhatarpur district as an IB World School or a listed Cambridge or Edexcel centre. Local private schools follow the Madhya Pradesh Board or CBSE, which means international schooling begins a long way from home.",
      schools: [],
    },
    {
      city: "Nearby: Bhopal",
      note: "The state capital holds the nearest confirmed IB and Cambridge schools, more than 300 km from Nowgong by road. For most families that means boarding or relocation rather than a commute.",
      schools: ["Eastern Public School, Bhopal (IB PYP, MYP and Diploma Programme, plus Cambridge IGCSE at Class 9-10)", "Shrewsbury International School India"],
    },
    {
      city: "Nearby: Indore, for boarders",
      note: "A longer journey again, but Indore has long-established international and boarding schools that some Bundelkhand families consider.",
      schools: ["Daly College", "Choithram International School", "The Emerald Heights International School"],
    },
    {
      city: "Further afield: Delhi NCR boarding",
      note: "For families prepared to look at residential schools across the country, Gurugram and Delhi NCR have confirmed IB campuses that take boarders.",
      schools: ["Pathways World School, Aravali", "The Shri Ram School, Aravali"],
    },
  ],
  schoolDisclaimer:
    "These schools are listed only to show where international options lie for families in Nowgong. IB Gram is independent of every school named, of the IB, of Cambridge and of Pearson, and each school makes its own admission decisions.",

  modesIntro:
    "Tutors do not visit homes in Nowgong. Home visits run only in Gurugram and parts of Delhi NCR, so all three formats below are live online teaching, arranged around the heat, the school day and the family routine.",
  modes: [
    {
      title: "Weekly online lessons for the school year",
      description: "A fixed evening slot with one tutor, keeping a student level with the syllabus in a subject that needs extra depth.",
      bullets: ["Shared whiteboard and photographed written work", "Past-paper questions solved together", "A written note for parents after each session"],
    },
    {
      title: "Mock-and-board season intensives",
      description: "Short, dense blocks before mocks and before the IB or IGCSE series a student is entered for.",
      bullets: ["Timed papers with marks explained", "Revision built around the student's own errors", "Spare slots for power cuts and heat waves"],
    },
    {
      title: "Holiday-home lessons for boarders",
      description: "For students who board in Bhopal, Indore or further and come home for breaks, when the school's own support is out of reach.",
      bullets: ["Picks up the school's current unit", "Builds mock-exam stamina in vacations", "Pauses cleanly when term restarts"],
    },
  ],

  tutorsIntro:
    "Our tutors work from several cities on Indian Standard Time, which means a Nowgong student can be taught without a time-zone shift. Most lessons fall in the cooler hours between late afternoon and night.",

  sections: [
    {
      heading: "Which Nowgong is this, and is there an IB or IGCSE school here?",
      paragraphs: [
        "This is Nowgong, also written Nowgaon, in Chhatarpur district of Madhya Pradesh, and we could not confirm an IB or IGCSE school here. The nearest schools we could verify are in Bhopal and Indore, more than 300 km away, with further boarding options in Delhi NCR.",
        "The spelling causes confusion, because colonial records used Nowgong for Nagaon in Assam as well. Our Nagaon page covers that town. The two share a name and little else: the boards, languages, climate and distance to an international school are all different.",
        "Schools in and around Nowgong teach the Madhya Pradesh Board syllabus or CBSE, in Hindi or English. The town has an unusual educational past. Kitchener College, an officer-training college, operated here from 1929 until 1964, taking the name Army Cadet College in 1960, and King George's School ran from 1952 to 1960 before it became Chail Military School. Families with a service background know how postings disrupt a child's schooling, and a curriculum that follows the child from city to city appeals to such households.",
        "Families who commit to the IB or IGCSE usually take one of three routes: boarding in Bhopal or Indore, moving to a larger city, or studying the syllabus from home with online support. Whichever route applies, choose a tutor by the syllabus the child is sitting, not by distance.",
      ],
    },
    {
      heading: "MP Board, CBSE, ICSE, IGCSE and IB: how the boards compare for a Nowgong student",
      paragraphs: [
        "The Madhya Pradesh Board of Secondary Education sets the Class 10 and Class 12 papers taken by most students in town, usually in February and March, with results in spring. Teaching is mainly in Hindi, with English-medium sections growing, and Bundeli is the language of many homes: in Chhatarpur district about three-quarters of people gave it as their first language in the census, and most of the rest said Hindi.",
        "CBSE schools in Nowgong and Chhatarpur follow the national syllabus in English or Hindi and lead towards JEE, NEET and CUET-UG. ICSE is rarer in the region.",
        "IGCSE and the IB belong to a different world. They are taught in English, tested in English and reward explanation in English, so for a Hindi-speaking or Bundeli-speaking child the biggest change is the language of reasoning, not the mathematics or science. The table lays the boards side by side.",
      ],
      table: {
        caption: "Five boards, seen from Nowgong",
        columns: ["Board", "How it is marked", "Main language", "Usual next step", "Local tutoring supply"],
        rows: [
          ["MP Board (MPBSE)", "Board papers in Class 10 and 12", "Hindi, with growing English medium", "JEE, NEET, CUET-UG, state colleges", "Plenty"],
          ["CBSE", "Board papers in Class 10 and 12", "English or Hindi", "JEE, NEET, CUET-UG", "Good in Chhatarpur and Jhansi, thinner here"],
          ["ICSE and ISC", "Broader syllabus, more writing", "English", "CUET-UG, Indian colleges", "Limited"],
          ["Cambridge or Edexcel IGCSE", "Tiered papers over two years", "English", "IB, A Level or Class 11 in India", "Almost none"],
          ["IB Diploma", "Exams, internal assessments and a core", "English", "AIU-recognised study, universities abroad", "None locally"],
        ],
      },
    },
    {
      heading: "What should a Nowgong family ask before agreeing a fee for IB or IGCSE tuition?",
      paragraphs: [
        "When you look for IB and IGCSE tutors in Nowgong, ask four things: which programme and level the tutor has taught, how scarce the subject is, how many lessons are planned each week, and whether the rate will arrive in writing. Those four points decide the fee and protect the family. IB Gram publishes no prices and sends every quote in writing before a trial lesson is booked.",
        "Level drives the rate because it drives the depth needed. A tutor for Higher Level Diploma Physics has to be comfortable with university-style derivations and with how papers are marked, which costs more than a tutor for Class 8 MYP science. Rarity adds to it, since few teachers handle Computer Science HL or Further Mathematics.",
        "Length and frequency change the sum. A weekly lesson across a school year and a burst of daily lessons before a mock exam are different products, and the honest way to compare them is by the plan, not by an hourly figure quoted out of context.",
        "Compare the alternatives too. Coaching in a larger city means fares, a hostel or a daily journey of hours, and boarding means fees, travel and separation from home. An online lesson at home has none of those costs, though it cannot replace a school.",
      ],
      bullets: [
        "Which course and level has the tutor actually taught?",
        "How many lessons a week, and for how many weeks?",
        "Is the rate written down before the trial?",
        "What happens if the fit is wrong?",
        "Are there costs beyond the tutor's rate?",
      ],
    },
    {
      heading: "Online tutor, coaching in a bigger city, local tutor or self-study: which suits a Nowgong student?",
      paragraphs: [
        "For most Nowgong students, IB and IGCSE tutors in Nowgong teaching live at home give specialist teaching without the journey, which is why we recommend them. The other routes have genuine uses, and the table shows where.",
        "Coaching in Bhopal, Indore, Gwalior or Jhansi offers depth, yet these cities are hours away, and most coaching is built around JEE, NEET or the state boards rather than IB or IGCSE papers. A local tutor is convenient and often excellent for board subjects, though few have seen an IB command term. Self-study with past papers works for disciplined students.",
        "Many families use two routes together: a local tutor for school homework and an online specialist for the international syllabus.",
      ],
      table: {
        caption: "Four routes to IB or IGCSE help from Nowgong",
        columns: ["Route", "IB or IGCSE depth", "Travel from Nowgong", "Fit with school hours", "Suits"],
        rows: [
          ["Live private lessons online", "High, matched to board and level", "None", "Evenings and weekends, easily moved", "Any programme or subject"],
          ["Coaching in a bigger city", "Often JEE or NEET focused", "Hours each way, or a hostel", "Fixed batches", "Families already relocating"],
          ["Local private tutor", "Strong on MP Board and CBSE", "Short", "Flexible", "Homework and board subjects"],
          ["Self-study with past papers", "Varies with the student", "None", "Entirely your own", "Disciplined students in a favourite subject"],
        ],
      },
    },
    {
      heading: "The Nowgong calendar: summer loo, monsoon, wedding season and exam dates",
      paragraphs: [
        "A Nowgong student works to two timetables. CBSE schools in Madhya Pradesh open in April and state-board schools around June or July, and both finish by March or April, while IB and IGCSE examinations follow the examining boards' own dates.",
        "The IB Diploma is examined in May and November, with results in early July and early January. Cambridge IGCSE runs in February-March, May-June and October-November, and Pearson Edexcel International GCSE in January, May-June and October-November. The school registers the student for one series, and tutoring is planned backwards from it.",
        "The weather shapes the day. Nowgong's record high is 48.8 degrees Celsius and its record low is minus 1.7, and rainfall averages about 1,020 mm a year, most of it in the monsoon months. April to June afternoons are too hot for real study, so lessons move to the evening. December and January bring cold nights, and power and broadband can be uneven in any season.",
        "Holi in March, Raksha Bandhan in August, Dussehra and Diwali in October or November, and the winter wedding season each take days out of the calendar. We ask families to share dates early and we build in spare slots.",
      ],
      table: {
        caption: "A year in Nowgong",
        columns: ["Months", "What shapes the week", "Exam or school milestone", "How lessons adjust"],
        rows: [
          ["January to March", "Cold nights, then Holi; MP Board exams begin", "IGCSE February-March series, IB mocks", "Timed papers, calm weekday slots"],
          ["April to June", "Fierce afternoon heat and summer holidays", "IB May session", "Late-evening lessons, early revision starts"],
          ["July to September", "Monsoon, school reopens, Raksha Bandhan", "IB results in early July", "Foundation lessons and catch-up"],
          ["October to November", "Dussehra, Diwali and the start of wedding season", "IB and IGCSE November series", "Compressed revision, spare slots"],
          ["December", "Cold weather, weddings and year-end travel", "IB January results, review time", "Lighter plan, goal setting"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Nowgong go next?",
      paragraphs: [
        "Most students head to colleges in Madhya Pradesh, other Indian states or abroad, and the IB Diploma is usually accepted by Indian universities once the Association of Indian Universities has issued an equivalence certificate. CUET-UG is the standard route into central universities.",
        "For engineering, JEE Main opens the door to the NITs and other institutes, and MANIT Bhopal, IIT Indore and IIITDM Jabalpur are the most familiar names in the state. NEET-UG leads to medical colleges, including AIIMS Bhopal. Madhya Pradesh seat rules depend on domicile and schooling, so check with the counselling authority before choosing subjects in Class 11.",
        "Closer to home, Dr Hari Singh Gour University in Sagar is a central university, Maharaja Chhatrasal Bundelkhand University sits in Chhatarpur, and Bundelkhand University in Jhansi is another nearby option. Nowgong's own polytechnic, established in 1952, and its Government Engineering College, established in 2012, offer diploma and degree routes.",
        "Given the town's history, some students think of a defence career through the NDA or CDS. Eligibility for students from other boards, including Physics and Mathematics requirements for some wings of the NDA, should be checked in the current UPSC notice. Others go abroad to the UK, Canada, the US, Australia or Germany, where predicted grades and school references count.",
      ],
      bullets: [
        "AIU equivalence certificate for Indian university admission",
        "CUET-UG for central and participating universities",
        "JEE Main and NEET-UG eligibility checked against subject choices",
        "NDA and CDS rules for students from other boards",
        "UK, Canada, US, Australia and Germany through predicted grades",
      ],
    },
    {
      heading: "IB Mathematics and the sciences for students coming from Hindi-medium schools",
      paragraphs: [
        "A student from a Hindi-medium school often knows the concept but not the English term for it. We begin each topic with a two-column glossary in Hindi and English, then move towards English-only explanations as confidence grows. The aim is for the child to reason in English under exam pressure, not just to translate.",
        "Analysis and Approaches suits a student who enjoys algebra and calculus and is thinking about engineering or pure science. Applications and Interpretation suits students bound for commerce, economics, design or medicine-adjacent courses. The choice is made in Class 11, so a tutor reviews the student's strengths before anyone commits.",
        "In the sciences each subject has its own habits. Physics needs units and a feel for size, Chemistry needs mole arithmetic and mechanisms drawn cleanly, and Biology needs exact wording. We use past-paper items to show how marks are actually awarded, and we correct the small slips that move a grade.",
        "Higher Level students gain from longer sessions before mocks, and Standard Level students from short, regular ones. Internal assessments remain the student's own: the tutor explains the criteria and the method, and the choice of question, the data and the report stay with your child.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, Cambridge or Edexcel: choosing for a Bundelkhand student",
      paragraphs: [
        "Cambridge offers many IGCSE subjects at Core and Extended level. Core limits the top grade, and Extended opens the whole range, so a student who may carry Mathematics or a science further normally sits Extended. Pearson Edexcel gives Mathematics A as Foundation or Higher for similar reasons.",
        "The choice depends on where the child stands now and where they want to go. A student aiming for the Diploma or A Level in a science should lean towards Extended or Higher, while a student who is struggling may do better at the lower tier. Deciding in Class 9 is wiser than deciding a month before the paper.",
        "Subject mix matters as much as tier. A balanced set usually pairs languages, Mathematics, the sciences and a humanities or business subject. Strong Mathematics students sometimes add Additional Mathematics as a bridge to Diploma Mathematics.",
        "For students in Nowgong the commonest hurdle is written English at extended level, especially for children who think in Hindi or Bundeli. A tutor usually starts with directed writing and summary skills, which can be improved quickly with regular practice.",
      ],
    },
    {
      heading: "How do online lessons cope with heat, power cuts and patchy signals in Nowgong?",
      paragraphs: [
        "Plan for them rather than hope. A charged laptop, a backup phone hotspot and a lesson slot outside the hottest hours solve most problems, and every plan keeps spare sessions for the days when they do not.",
        "Evening is better than afternoon. From April to June heat and power demand both peak in the afternoon, which makes concentration and connections worse, and a slot after sunset is calmer. In winter the reverse is sometimes true, and a mid-afternoon lesson in the sun-warmed hours can suit a student who gets cold at night.",
        "Written work is easy to share. The student photographs the page, sends it, and the tutor marks it on screen and explains the corrections. A cheap phone stand makes this smoother, but no special equipment is needed, and a laptop or tablet is better than a phone for the shared whiteboard.",
        "Parents do not need to sit in on lessons. The note after each one gives the topic, the errors and the next task, and if the family is transferred to another city, the tutor and the weekly slot stay exactly where they are.",
      ],
    },
  ],

  process: [
    { title: "Tell us the board and subject", description: "Send the board, subject, level and exam series by WhatsApp or email, and mention any dates the school has already announced." },
    { title: "Receive one matched tutor", description: "We propose a single tutor who has taught that exact course and share a short profile for you to read first." },
    { title: "Try a free lesson", description: "A live trial lesson on a genuine topic from the syllabus, with no payment and no obligation." },
    { title: "Read the rate in writing", description: "If you want to carry on, the rate and lesson plan arrive in writing. Nothing starts until you say yes." },
    { title: "Fix a weekly slot", description: "Lessons run at the same time each week, with a note after each, and a change of tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched to the paper", description: "Tutors are chosen for the exact course and level, not the subject in general." },
    { title: "Built for Nowgong's climate", description: "Slots avoid the hottest hours, and spare sessions cover power cuts and wedding weeks." },
    { title: "Honest about distance", description: "We say clearly that no local school could be confirmed and explain what that means for your options." },
    { title: "Language support built in", description: "A Hindi and English glossary helps students who know the idea but need the IB's English for it." },
    { title: "Coaching only", description: "The tutor explains and trains; internal assessments, essays and coursework stay the student's own." },
    { title: "Portable across postings", description: "Because lessons are online, a transfer to another city does not change the tutor." },
  ],

  faqs: [
    { question: "Which Nowgong does this page cover, and is there an IB school there?", answer: "It covers Nowgong (Nowgaon) in Chhatarpur district, Madhya Pradesh, not Nagaon in Assam. We could not confirm an IB or IGCSE school in or near the town, and local schools follow the Madhya Pradesh Board or CBSE. The nearest international schools we could verify are in Bhopal, Indore and Delhi NCR." },
    { question: "Does a tutor visit the house in Nowgong?", answer: "No, tutors do not visit homes in Nowgong; home visits run only in Gurugram and parts of Delhi NCR. Nowgong families get online home tuition instead: live private lessons over video while your child sits at home with a laptop. It removes long journeys and keeps one tutor for the year." },
    { question: "How do I find an IB Chemistry or IGCSE Physics tutor in Nowgong?", answer: "To find IB and IGCSE tutors in Nowgong for one subject, send us the programme, subject, level and exam series on WhatsApp or email. We propose one tutor who has taught that course, send a short profile and arrange a free trial lesson. If the fit is wrong, we find someone else without an extra charge for the change." },
    { question: "What will tuition cost for a student in Nowgong?", answer: "The rate depends on the programme and level, how scarce the subject is, how many lessons you want and how long the plan runs. We publish no fixed prices, and the quote always arrives in writing before any trial lesson is booked." },
    { question: "Is online tuition reliable in Nowgong, with power cuts and patchy signals?", answer: "Yes, with simple planning. A charged laptop, a phone hotspot and an evening slot cover most problems, and a dropped lesson resumes from the same point. Every plan includes spare sessions so a lost evening can be rebooked within the week." },
    { question: "Can a child from an MP Board or Hindi-medium school start IGCSE or the IB?", answer: "Yes, and many do. The content often overlaps, but the question style, the command words and the English of reasoning are new. A tutor begins with vocabulary and paper style, using a Hindi and English glossary where it helps, and then fills any gaps in content." },
    { question: "We are a transfer family. Can tutoring follow us between postings?", answer: "Yes. Because lessons are online, the same tutor can continue in any city with a stable connection, which keeps the syllabus and the lesson notes unbroken. Tell us the exam series your child is entered for and we plan around the moves." },
    { question: "Which exam series can you prepare a student for?", answer: "We plan for the IB May and November sessions and for whichever Cambridge or Edexcel series the school enters the student for. The school sets the series, and we count backwards from that date. IB results arrive in early July and early January." },
    { question: "Will the tutor write the IA, Extended Essay or TOK essay?", answer: "No. Internal assessments, Extended Essays, TOK essays and coursework are the student's own work. A tutor explains the criteria, teaches the method and comments on ideas the student produces, and that is where coaching ends." },
    { question: "What happens in the free trial lesson?", answer: "It is a live lesson on a real topic from your child's syllabus, given by a tutor who has taught that course. There is no payment and no commitment. Afterwards you receive a short note, and the rate follows in writing only if you want to continue." },
    { question: "Do you cover both Cambridge and Pearson Edexcel IGCSE?", answer: "Yes, both. Because the boards differ in paper layout and tiers, we match tutors by board code and subject. Tell us which board the school uses and which papers your child will sit." },
    { question: "Should my child take Maths AA or Maths AI?", answer: "Analysis and Approaches suits students who enjoy algebra and calculus and may head to engineering or pure science. Applications and Interpretation suits students heading to commerce, design or the life sciences. A tutor can review your child's strengths and offer a view before the Class 11 choice is final." },
    { question: "Can students from Chhatarpur, Khajuraho or nearby villages join?", answer: "Yes. Lessons are online, so any household with a stable connection can take part. We schedule around bus times, harvest weeks and wedding dates, and we suggest a backup mobile network for the hot months." },
    { question: "Do we need a laptop, or will a phone do?", answer: "A laptop or tablet is better, because the shared whiteboard and past papers are easier to see and write on. A phone can work for short lessons or as a backup. A headset and a quiet corner matter more than an expensive device." },
    { question: "Will colleges in India accept an IB Diploma?", answer: "Generally yes, with an equivalence certificate from the Association of Indian Universities, and CUET-UG is the usual route into central universities. JEE, NEET and Madhya Pradesh seat rules depend on subject choices, so check them with the relevant authority before settling subjects." },
    { question: "Is this page about Nagaon in Assam?", answer: "No. Nagaon in Assam, historically also spelled Nowgong, has a separate page on this site. This one covers Nowgong in Chhatarpur district, Madhya Pradesh, where the boards, languages, climate and nearest international schools are entirely different." },
    { question: "How do we get started?", answer: "Email support@ibgram.com, or send a WhatsApp message to +91 7439 368 115, with your child's board, subject and level. A tutor match and a trial time normally come back within a day or two." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The other cities and towns our online tutoring serves." },
    { label: "IB tutors for every programme", href: "/ib-tutors/", description: "How we teach from PYP through to the Diploma." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel help from board-specific tutors." },
    { label: "Diploma Programme tutoring", href: "/programmes/dp/", description: "Subject support for the two Diploma years." },
    { label: "Middle Years Programme tutoring", href: "/programmes/myp/", description: "Help with criteria and the Personal Project rules." },
    { label: "Primary Years Programme tutoring", href: "/programmes/pyp/", description: "Gentle lessons for younger students." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI at Standard and Higher Level." },
    { label: "Our tutors", href: "/tutors/", description: "The people who teach IB and IGCSE with us." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us or book a free first lesson." },
    { label: "IB and IGCSE tutors in Nagaon, Assam", href: "/nagaon/", description: "The other town once spelled Nowgong, with its own page." },
    { label: "IB and IGCSE tutors in Jhansi", href: "/jhansi/", description: "The nearest big city up NH 39." },
    { label: "IB and IGCSE tutors in Tikamgarh", href: "/tikamgarh/", description: "A neighbouring Bundelkhand district town." },
    { label: "IB and IGCSE tutors in Sagar", href: "/sagar/", description: "The university city to the south-east." },
  ],

  closingHeading: "Try a free IB or IGCSE lesson from home in Nowgong",
  closingBody:
    "To begin with IB and IGCSE tutors in Nowgong, write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's board, subject and the exam series in view. We will arrange a matched tutor and a free trial, and the rate comes in writing well before you decide.",
};
