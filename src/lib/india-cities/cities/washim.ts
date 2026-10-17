import type { CitySeoPage } from "../types";

/**
 * /washim/ - IB and IGCSE tutoring page for Washim, Vidarbha, Maharashtra. Online-only delivery.
 * No IB or Cambridge/Edexcel school is confirmed inside Washim, so stripSchools is empty and the
 * clusters are labelled nearby cities (Amravati, Nagpur) using names already verified on the
 * finished Amravati, Akola and Nagpur pages. Town facts from Wikipedia's Washim article
 * (formerly Vatsagulma, district formed 1998, Balaji Mandir built 1779, May record 45.4 C).
 */
export const washim: CitySeoPage = {
  slug: "washim",
  countryName: "Washim",
  countryNameLong: "Washim, Maharashtra",
  demonym: "Washim",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions are set around the Vidarbha summer peak in May, the kharif monsoon rush on farms and the weeks when Ganeshotsav and Diwali fill the calendar",
  lastUpdated: "2026-09-21",
  geo: { latitude: 20.1039, longitude: 77.133 },
  wikipedia: "https://en.wikipedia.org/wiki/Washim",
  alternateNames: ["Basim", "Vatsagulma", "Washim Maharashtra"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Washim | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Washim in Vidarbha: one-to-one lessons in Maths, sciences and languages for DP, MYP, PYP and IGCSE, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Washim",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR WASHIM AND VIDARBHA FAMILIES",
  heroSubtitle:
    "Private tuition from home for Washim students on the IB or IGCSE path: live one-to-one lessons on video, with a tutor chosen for the subject, level and exam board on your child's timetable. It suits students who board in Nagpur or Amravati, return from abroad or plan an international route.",
  primaryKeyword: "IB and IGCSE tutors in Washim",
  imageAltText: "A Washim student going through an IB Biology data question with an online tutor over a live lesson",
  secondaryKeywords: [
    "IB tutor Washim",
    "IGCSE tutor Washim",
    "IB home tuition Washim",
    "IGCSE home tuition Washim",
    "IB private tuition Washim",
    "IB Maths tutor Washim",
    "IGCSE Maths tutor Washim",
    "IB Physics tutor Washim",
    "IB Chemistry tutor Washim",
    "IB Biology tutor Washim",
    "IB DP tutor Washim",
    "IB MYP tutor Washim",
    "IB PYP tutor Washim",
    "IGCSE online tuition Washim",
    "Cambridge IGCSE tutor Washim",
    "IB tutor Basim",
    "IB tutor Washim Maharashtra",
    "online IGCSE tutor Akola Naka Washim",
    "IB tutor Mangrulpir",
  ],

  heroTrustPoints: [
    "Tutors are picked for the exact IB course and level or Cambridge and Edexcel paper code your school has entered your child for",
    "Lessons are online only; nobody visits a home in Washim, and in-person home tuition is limited to Gurugram and parts of Delhi NCR",
    "You attend a free trial and keep a written note whether or not you continue",
    "IB Gram is an independent service with no link to the IB, Cambridge, Pearson or any school, and its tutors never write coursework",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "IB stages covered" },
    { value: "Cambridge or Edexcel", label: "IGCSE boards covered" },
    { value: "Evenings in IST", label: "Fits school and batch hours" },
    { value: "Trial lesson free", label: "Judge the fit first" },
  ],

  intro: {
    heading: "An IB or IGCSE tutor for a district town in eastern Vidarbha",
    paragraphs: [
      "Washim was once Vatsagulma, a Vakataka capital, and it has been a district headquarters only since July 1998, when it was carved out of Akola. Today it is a market and administrative town: cotton, soybean and tur come through, the Balaji Mandir from 1779 draws devotees, and the Purna to Khandwa rail line reached it on broad gauge in 2008. It is not a place with an IB campus, and that is why enquiries from Washim parents about IB or IGCSE tutors have a particular shape.",
      "A typical call comes from a family with a child at a boarding school in Nagpur or Amravati, or from officials, doctors and traders whose relatives abroad suggested an international board. Sometimes a Class 8 student is being prepared for a move to Nagpur's MIHAN belt for the Diploma. In each case the child needs help from a teacher who knows the syllabus, and no such teacher works in Washim. Online private tuition at home solves the location problem.",
      "Summer is severe here; the record for May is 45.4 degrees, and hot afternoons make late-day online lessons the sensible choice. Marathi is the everyday language, Hindi is widely used, and English is the language of the IB and IGCSE papers. A good tutor is comfortable explaining in simple English first and in Hindi when a concept needs reinforcing.",
      "IB Gram has no commercial link to the IB, Cambridge, Pearson Edexcel or any school mentioned on this page. Tutors explain, correct and set practice; they do not write an Internal Assessment, Extended Essay, TOK essay or any other assessed work.",
    ],
    bullets: [
      "For Washim families with children boarding in Nagpur or Amravati, or returning from abroad",
      "Explanations in English, with Hindi or Marathi support for difficult ideas",
      "Online only here; in-person visits are for Gurugram and parts of Delhi NCR",
      "Free first lesson, then a written note",
    ],
  },

  programmesIntro:
    "We cannot confirm an IB school in Washim district, so these programmes are followed at schools in Nagpur, Amravati or further away. Each note describes the stage and how it tends to reach a Washim family.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Young learners work through units tied to six themes and finish with an Exhibition where they present self-chosen research. No exams mark the stage, so tutoring emphasises fluent reading, confident number talk and curiosity that turns into a testable question.",
      countryNote:
        "In Washim, PYP enquiries tend to come from parents preparing a child for an international primary school in Nagpur, or from a family who returned from the Gulf.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Four assessment criteria per subject, interdisciplinary units and a Personal Project define MYP. The common mistake is reaching for a description when a criterion asks for justification, so sessions start from the task descriptor itself.",
      countryNote:
        "A Washim MYP student is typically a boarder, so lessons target long weekends and festival breaks such as Ganeshotsav and Diwali.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students choose six subjects across groups, three at Higher Level, plus the Extended Essay, TOK and CAS. Final papers come in May, internal assessments are moderated, and results appear in July, so a school plans the two years backwards from that date.",
      countryNote:
        "Diploma students linked to Washim study in another city during term, so tutoring follows their school calendar and uses holidays at home for longer sessions.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP combines two or more Diploma courses with career-related study and a reflective project. Few Indian schools run it, and most tutoring for CP is simply help with its Diploma course components.",
      countryNote:
        "A CP request from Washim is rare. If one arrives, we focus on the academic Diploma courses and leave the career component to the school.",
    },
  ],

  subjectsIntro:
    "We begin by asking which course, level and exam series a student faces, because the help a Physics SL student needs differs from that of a Physics HL student. After that we see what the school has already assessed.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof-style questions are practised with and without a calculator, and the Exploration is framed around a topic the student can actually sustain for a dozen pages." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and technology take centre stage, so practice includes describing assumptions and commenting on a fitted model's weaknesses." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves and electricity are reviewed through data-booklet work and uncertainty calculations, and the investigation's research question is sharpened before data is collected." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry is repeated until it becomes automatic, and organic pathways are sketched from memory so the exam does not catch the student out." },
    { name: "IB Biology", levels: "HL / SL", description: "Students practise matching command terms to answer lengths and learn which statistical test suits which dataset in the internal investigation." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams are drilled and then linked to examples such as cotton prices and minimum support levels that a Vidarbha student knows first-hand." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study practice shows how to apply a concept to the named firm and reach a justified recommendation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen commentary, comparison of two texts and the Individual Oral are separated into short drills with written feedback." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms and data structures are traced by hand and run in code, and the internal product gets documented early." },
    { name: "IB Psychology", levels: "HL / SL", description: "Key studies are recalled in a four-part pattern and then shaped into essays inside the time limit." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water, soil and climate examples drawn from dry-land farming give system diagrams and evaluation answers a concrete setting." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies need dates, places and figures; data-response questions need map, graph and statistics fluency." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Written tasks and the interactive oral are practised for register and accuracy, useful for Washim students who speak Marathi at home." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Tutors question the exhibition and essay arguments in conversation. The essay and exhibition are the student's own." },
  ],

  igcseSubjectsIntro:
    "IGCSE students connected to Washim usually follow a syllabus begun elsewhere. We confirm the board, the paper code and the tier, then the next series, because Cambridge and Pearson Edexcel ask questions differently.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Core / Extended", description: "Extended students practise algebra and shown working, since method marks rescue many answers." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and trigonometry are introduced early, which makes the later jump to IB Maths AA or A Level smoother." },
    { name: "IGCSE Physics 0625 / 4PH1", levels: "Core / Extended", description: "Equation rearrangement, graphs and practical planning are practised under time, since these decide borderline grades." },
    { name: "IGCSE Chemistry 0620 / 4CH1", levels: "Core / Extended", description: "Mole calculations and organic chemistry are built in steps, with qualitative analysis tests learnt in a table." },
    { name: "IGCSE Biology 0610 / 4BI1", levels: "Core / Extended", description: "Diagrams and long answers in genetics and coordination are written to the mark scheme's wording." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Simple diagrams come fast; evaluative writing earns the higher grades and gets regular practice." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode and Python are taught side by side so that the logic paper feels familiar." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and summaries are practised on unseen passages with comments on tone and accuracy." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension and composition tasks are practised in the format of the syllabus, for students who need it in addition to Marathi or English." },
  ],

  regionsTitle: "Washim areas and nearby towns we match online",
  regionsIntro:
    "Tuition is delivered on screen, so these places are listed for context: the roads families drive, the schools they look towards and the local calendar around each. Rural taluka towns are included because many students travel in from them.",
  regions: [
    { name: "Balaji Mandir area", note: "The old core of Washim around the 1779 temple, with long-settled trading families and a dense school-age population." },
    { name: "Padmatirtha and Kondeshwar", note: "Temple and tank precincts on the older side of town, busy during religious festivals when evening study is harder." },
    { name: "Akola Naka", note: "The entrance towards Akola on the main road, where buses leave for the nearest larger city and boarders catch their rides." },
    { name: "Hingoli side", note: "The southern approach towards Hingoli and Nanded, used by families with relatives in Marathwada." },
    { name: "Civil Lines and district offices", note: "Officials and teachers on transferable postings, who value a tutor that can continue the same syllabus after a move." },
    { name: "Mangrulpir", note: "A taluka town in the district and a gateway to the Pohradevi shrine important to the Banjara community; families here look to Washim or Akola for senior schooling." },
    { name: "Karanja Lad", note: "A historic town in the district with its own trading families and a steady flow of students to Amravati and Nagpur colleges." },
    { name: "Risod", note: "A taluka in the east of the district, often a first stop for families moving towards Nagpur for education." },
    { name: "Malegaon and Manora", note: "Smaller district towns where online learning helps bridge a real shortage of specialist teachers." },
  ],

  schoolDisclaimer:
    "No IB World School or genuine Cambridge or Edexcel centre is confirmed by us inside Washim district. The schools below are in Amravati and Nagpur, where some Washim families look; IB Gram is independent of them and of the IB, Cambridge and Pearson, and school details should be checked with each school directly.",
  schoolClusters: [
    {
      city: "Nearby: Amravati",
      note: "A little over 100 km east, the closest city in this belt that lists a Cambridge-style school in its own cluster.",
      schools: ["KK Cambridge International School, Indala"],
    },
    {
      city: "Nearby: Nagpur (MIHAN and Wardha Road)",
      note: "Roughly 250 to 300 km away, Nagpur's MIHAN belt has a school associated with the IB that draws boarders from across Vidarbha.",
      schools: ["D Y Patil International School, MIHAN"],
    },
    {
      city: "Nearby: Nagpur (central and Wanadongri)",
      note: "Central Nagpur and the Wanadongri belt add more international options for families willing to board a child.",
      schools: ["Centre Point School International", "VIBGYOR World Academy", "International School of Scholars"],
    },
  ],

  modesIntro:
    "Our lessons follow three patterns that suit Washim households. Each happens at home on a laptop or tablet; no tutor visits a home in Washim, since that service is limited to Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Regular evening lessons",
      description:
        "A fixed slot each week, usually after the day's heat has eased and school or batch hours have ended. Consistency builds skill, which is why most families pick this.",
      bullets: [
        "Suits DP, MYP, PYP and IGCSE students",
        "Shared whiteboard and documents replace a desk",
        "The same tutor sees progress across a term",
        "Extra subjects can be added in later terms",
      ],
    },
    {
      title: "Lessons with monthly progress calls",
      description:
        "The weekly slot continues, and every month the tutor and parent review written notes and reset goals, which works for families who want oversight without sitting through every lesson.",
      bullets: [
        "Short notes after each session",
        "Monthly call to agree priorities",
        "Good for younger students and busy parents",
        "Simple to change focus after school tests",
      ],
    },
    {
      title: "Break and exam-season intensives",
      description:
        "Several lessons a week during Diwali, winter or pre-exam weeks, using timed papers and fast feedback, planned away from the hottest weeks and the major festivals.",
      bullets: [
        "Papers marked to the current mark scheme",
        "Work concentrates on weak topics",
        "Best booked several weeks ahead",
        "Begins with a short diagnostic",
      ],
    },
  ],

  sections: [
    {
      heading: "Where do families around Washim find IB and IGCSE schooling?",
      paragraphs: [
        "Inside Washim district, schools follow the Maharashtra State Board, CBSE and a few follow ICSE. We could not confirm an IB or genuine Cambridge or Edexcel school in the district, and it would be misleading to list one. Parents sometimes assume that a school using 'International' in its name teaches an international syllabus, so we advise asking the school directly which board it is registered with.",
        "For international schooling, the nearest cities are Amravati and Nagpur. Amravati has at least one school with a Cambridge association, and Nagpur has several: one in the MIHAN belt, two in central areas and one in the Wanadongri belt. Families from Washim usually choose between day schooling after moving to the city and boarding for the senior years.",
        "Some households are returning from the Gulf or from Western countries where a child completed IGCSE or MYP years. Others are professionals at district offices, the irrigation and agriculture departments or local hospitals who might be posted to another state next year and want a curriculum that follows the child.",
        "Because few local teachers have marked IB or IGCSE scripts, a national pool of tutors is the practical option. Standards do not vary with postcode, and a Washim student's Diploma scripts are moderated against the same global descriptors as those from Mumbai.",
      ],
      table: {
        caption: "Closest cities with international board schooling",
        columns: ["City", "Distance from Washim", "What we can point to"],
        rows: [
          ["Washim", "Home town", "No confirmed IB or genuine IGCSE school"],
          ["Amravati", "A little over 100 km", "KK Cambridge International School, Indala"],
          ["Nagpur", "About 250 to 300 km", "D Y Patil MIHAN, Centre Point, VIBGYOR, International School of Scholars"],
        ],
      },
      bullets: [
        "No confirmed IB or genuine IGCSE school inside Washim district",
        "Amravati and Nagpur are the closest real options",
        "Boarding or relocation is the usual route for senior years",
        "Online tutoring gives access to teachers across India",
      ],
    },
    {
      heading: "State Board, CBSE, ICSE, IB or IGCSE: what changes for a Washim student?",
      paragraphs: [
        "A Maharashtra State Board student works from Balbharati textbooks and sits SSC in Class 10 and HSC in Class 12, typically in February and March. CBSE follows NCERT books with exams from February to April, and ICSE favours detailed written answers. IB and IGCSE keep the subject content but test application, analysis and communication under tighter command words.",
        "The shift is most obvious in languages and humanities. A student used to reproducing a chapter must learn to build an argument, cite evidence and evaluate, and one who writes well in Marathi must now do so in English under time pressure. These are trainable skills, and a tutor targets them early.",
        "The shift in sciences is subtler. The IB and IGCSE ask for more unfamiliar data, graphs and experimental design, and a student used to standard numericals can be surprised by questions that have no obvious formula.",
        "Families often ask whether they must leave the state system entirely to go international. Not always; some keep one foot in each for a year. Tuition follows whichever board the student is registered for, without taking a position on which is superior.",
      ],
      table: {
        caption: "Board comparison for Washim families",
        columns: ["Board", "Approach", "Main exam months", "Typical next step"],
        rows: [
          ["Maharashtra State Board", "Balbharati textbooks, SSC and HSC", "February to March", "MHT-CET routes and state colleges"],
          ["CBSE", "NCERT-based, growing competency questions", "February to April", "JEE, NEET and CUET"],
          ["ICSE and ISC", "Detailed written answers", "February to March", "Humanities and languages"],
          ["IB Diploma", "Internal assessment and extended writing", "May", "Indian and overseas universities"],
          ["Cambridge and Edexcel IGCSE", "Tiered papers, method and explanation", "May-June and October-November", "A Level, IB or overseas schools"],
        ],
      },
    },
    {
      heading: "What do IB and IGCSE lessons cost for a student in Washim?",
      paragraphs: [
        "We do not list fixed prices. The rate depends on who teaches and what is being taught, and it is written down for you before you pay for a lesson. The first lesson is free, which lets you form a view of quality first.",
        "Higher Level sciences and Additional Mathematics need experienced specialists, and rates follow expertise, especially for tutors who have marked or moderated papers. Lesson length and frequency matter as well: a fifty-minute weekly lesson and a three-times-a-week exam push are different commitments.",
        "Private one-to-one teaching costs more per hour than a class of thirty, and it gives far more attention to each mistake. When comparing with a Washim coaching class, it helps to ask how many minutes of personal feedback a child actually receives each week.",
        "There are savings too. A family in a district town does not need to pay for frequent trips to Akola or Nagpur for tuition, nor rent a room in a larger city to be near a specialist. The plan can start with one subject and expand later if it is working.",
      ],
      bullets: [
        "Pricing is based on tutor expertise, level, length and frequency",
        "Quoted in writing before any paid lesson",
        "No travel costs to another town",
        "Begin with one subject and add more later",
      ],
    },
    {
      heading: "Is an online tutor better than a coaching class, a local tutor or self-study in Washim?",
      paragraphs: [
        "The honest answer depends on the student, but for IB and IGCSE the case for an online specialist is strong. Coaching classes in the district town concentrate on state board and entrance preparation, which is excellent for those goals but does not address IB or IGCSE paper structure.",
        "A good local private tutor can be a real asset for mathematics and science at school level. Few have taught IB Internal Assessments or IGCSE Paper 6 alternatives, and there may simply be none in town who have. Self-study with past papers helps disciplined students, yet without marking the same mistakes repeat.",
        "With online tuition the specialist may be in Pune, Hyderabad or Delhi. The requirement is a working internet connection and a quiet space. Power cuts and weak signal in summer can be issues in some taluka towns, and we talk through backup arrangements during the trial.",
        "Tutors do not visit homes in Washim. The table below sets out the trade-offs.",
      ],
      table: {
        caption: "Support options for IB and IGCSE students in Washim",
        columns: ["Option", "IB or IGCSE expertise", "Feedback", "Drawback"],
        rows: [
          ["Online one-to-one lessons", "Matched to subject and board", "Live correction and written notes", "Needs a steady connection"],
          ["Coaching class", "Seldom for IB or IGCSE", "Shared across a batch", "Fixed timetable, travel time"],
          ["Local private tutor", "Varies, often none for IB or IGCSE", "Personal, but on a different syllabus", "Few IB specialists nearby"],
          ["Self-study", "Whatever the student finds", "Only if someone marks the work", "Errors go unnoticed"],
        ],
      },
    },
    {
      heading: "How do Vidarbha's heat, monsoon and festival calendar affect study in Washim?",
      paragraphs: [
        "May in Washim is brutal. The recorded high is 45.4 degrees, and afternoons are unusable for focused work. Winters are mild, sometimes down to 8 degrees. That pattern argues for evening sessions in April to June and for completing the heavy revision before the hottest weeks.",
        "The monsoon arrives around June and runs to September. It matters in a farming district, because families linked to cotton and soybean have a busy season from sowing through to harvest, and students may have responsibilities at home. Roads to the villages can also become difficult.",
        "Festivals add their own rhythm. Ganeshotsav is large across Maharashtra, Navratri and Dussehra follow, and Diwali is a week-long break. The Balaji Mandir in Washim draws crowds on religious days, which can make parts of town noisy and congested.",
        "We therefore plan with the school's calendar and the local one. Lighter weeks appear around festivals, and exam-season blocks are placed where the student can work in peace.",
      ],
      table: {
        caption: "A year of study in Washim",
        columns: ["Months", "Academic tasks", "Local factor"],
        rows: [
          ["January to March", "IB mocks, India Cambridge series, IA drafts", "Mild weather, SSC and HSC season locally"],
          ["April to June", "Main IB and IGCSE exams", "Peak heat, evening study preferred"],
          ["July to September", "Results, new year, Extended Essay starts", "Monsoon, kharif work, Ganeshotsav"],
          ["October to December", "Autumn series, mocks, university lists", "Navratri, Diwali, cooler evenings"],
        ],
      },
    },
    {
      heading: "What can a Washim student do after IB or IGCSE?",
      paragraphs: [
        "An IB Diploma holder can seek admission in India through AIU equivalence, and many universities also use CUET-UG. For engineering and medicine, Maharashtra's own entrance processes and national tests such as JEE and NEET each have rules for international-board students, which change, so read the current official notice and not a forum post.",
        "Within the region, colleges in Washim district are affiliated to Sant Gadge Baba Amravati University, and larger options include Nagpur's universities and medical colleges, plus institutions in Pune and Mumbai. Students aiming for design, law or liberal arts often look at private universities where the IB is well understood.",
        "Studying abroad is the second path. UK universities use UCAS with predicted IB points or A Level grades, and US, Canadian and Australian institutions read IB results with familiarity. A Washim student can start a plan two years ahead with a school counsellor.",
        "Tutoring supports the grades these paths depend on. It does not replace counselling about courses or applications, and we say so directly.",
      ],
      bullets: [
        "AIU equivalence for Indian university entry",
        "CUET-UG, JEE and NEET rules must be read from current notices",
        "Sant Gadge Baba Amravati University serves the district's colleges",
        "UK, US, Canada and Australia recognise IB and IGCSE-plus-A-Level results",
      ],
    },
    {
      heading: "IB Maths and the sciences: how are they taught to a student in Washim?",
      paragraphs: [
        "Mathematics comes first. Analysis and Approaches builds proof and calculus skills for engineering or pure science; Applications and Interpretation builds modelling for economics, social science or business. A tutor works out which suits a student's aims and, where possible, before the school's deadline to change.",
        "Physics, Chemistry and Biology each get a steady cycle of content, worked question and timed practice. Practical work happens at school, but tutors discuss the design and review the data, graphs and conclusions the student produces. They never write the report.",
        "Because some schools have limited laboratory time, simulations and open datasets can supplement practice for analysis skills. They do not replace real experiments, and we are open about that.",
        "A sensible load matters. A student with three Higher Level subjects plus the Extended Essay and TOK carries a heavy week, and a tutor will tell a family honestly if the plan looks unrealistic.",
      ],
    },
    {
      heading: "Core or Extended: how should a Washim student choose IGCSE tiers and subjects?",
      paragraphs: [
        "Core caps at grade C and Extended runs from A star to E. Students who plan to continue a subject should sit Extended, while those who will not may sit Core if the school allows. The decision should be made with the school early in the course, not just before the exam.",
        "A common line-up is English, Mathematics, Physics, Chemistry, Biology or Computer Science, a humanity or business subject and a language. For a Washim student, Hindi as a second language is an option at Cambridge, and Marathi needs checking with the school because it is not always on the IGCSE list.",
        "Cambridge and Edexcel differ in paper layout and question style. Following one board consistently, and telling the tutor the exact code, such as 0580 or 4MA1, is worth more than general practice.",
        "Finally, exam series matter. Cambridge offers an India-specific February and March series as well as May-June and October-November, so a plan should start from whichever series the school has entered the student for.",
      ],
    },
  ],

  tutorsIntro:
    "These profiles show the kind of IB and IGCSE specialists we match with Washim students. Tell us the subject and level, and we propose one tutor and a free first lesson.",
  process: [
    { title: "Send your child's details", description: "Class, board, subject code and next test date are enough to begin." },
    { title: "Get one tutor proposed", description: "We suggest a tutor for that board and subject with a short profile." },
    { title: "Attend a trial lesson", description: "A free live lesson on real questions, open to a parent." },
    { title: "Read the note and the rate", description: "You receive written feedback and a written rate with no obligation." },
    { title: "Continue or change", description: "Go weekly, change the pattern or ask for a different tutor." },
  ],
  whyPoints: [
    { title: "Exact-syllabus tutors", description: "A Cambridge 0625 student and an IB Physics HL student are not matched the same way." },
    { title: "Evening lessons in a hot district", description: "Sessions avoid the worst of Vidarbha's afternoon heat." },
    { title: "Plain about the format", description: "Teaching is online; we do not suggest anyone will visit a house in Washim." },
    { title: "Notes after lessons", description: "Short written summaries let parents see what was covered." },
    { title: "Learning, not ghostwriting", description: "Tutors teach and mark, but the student writes every assessed piece." },
    { title: "Straightforward switching", description: "A poor fit is fixed by a new match, not by pressure to continue." },
  ],

  faqs: [
    {
      question: "Can I find an IB or IGCSE tutor in Washim?",
      answer:
        "Our tutors are not based in Washim, but they teach live online from across India, so a Washim student can learn from a specialist who knows the exact subject and board. There are very few local IB or IGCSE teachers anywhere in the district. The first lesson is free, so you can test how well online teaching works for your child.",
    },
    {
      question: "Is IB or IGCSE home tuition available in Washim?",
      answer:
        "Online home tuition is available: private one-to-one lessons taken at home on a laptop. Tutors do not visit homes in Washim, and in-person home visits run only in Gurugram and parts of Delhi NCR. You still get one-to-one attention, a shared screen and written notes.",
    },
    {
      question: "Which schools near Washim offer IB or IGCSE?",
      answer:
        "Inside Washim district we cannot confirm one. In Amravati, KK Cambridge International School in Indala is listed, and in Nagpur D Y Patil International School in MIHAN, Centre Point School International, VIBGYOR World Academy and International School of Scholars are options. Verify current affiliations with each school before deciding.",
    },
    {
      question: "How much does tuition cost for IB or IGCSE in Washim?",
      answer:
        "We publish no fixed prices because the rate depends on the tutor's experience, the level, lesson length and weekly frequency. You receive the rate in writing before booking, and the trial lesson is free. Families often find the absence of travel to Akola or Nagpur offsets part of the cost.",
    },
    {
      question: "My child boards in Nagpur. Can lessons happen during holidays?",
      answer:
        "Yes. Many students book lessons during Diwali or summer holidays at home in Washim, and some add weekend lessons during term if the boarding school allows devices. Share the school's holiday list early and we plan blocks before internal tests and mock exams.",
    },
    {
      question: "We have returned from abroad. How do we keep an IGCSE or MYP course going?",
      answer:
        "Tell us the last school's board and the syllabus code. A tutor can carry on the same course if the child is still registered, or help translate content into State Board or CBSE style if the family is changing system. A diagnostic first lesson shows the real gaps.",
    },
    {
      question: "Do tutors write IA or Extended Essay work?",
      answer:
        "No. Tutors help students understand criteria, choose a workable question and improve structure through feedback, but the IB requires that the work is the candidate's own, so tutors never write it. Ask your school what outside help is allowed for internal assessments.",
    },
    {
      question: "Should my child take Cambridge or Edexcel IGCSE?",
      answer:
        "The school decides, and the syllabus code on the timetable tells you which board applies. Cambridge Mathematics is 0580 and Edexcel is 4MA1. Give us the code and we match a tutor who has taught that specification, since the two boards differ in paper layout and question style.",
    },
    {
      question: "When should preparation for the May session begin?",
      answer:
        "Begin serious revision about five months before, add timed papers from three months out and leave the last two weeks for error logs. In Washim, March and early April are good for concentrated work because May heat can be intense. The plan adapts to the school's mock dates.",
    },
    {
      question: "Does online teaching work for IB Maths?",
      answer:
        "Yes. A shared tablet screen lets the student and tutor write solutions together, and the tutor can correct a line at the moment it is written. Confirm the student has an approved calculator and has settled between AA and AI with the school.",
    },
    {
      question: "How do you handle science practicals in an online setting?",
      answer:
        "Practicals are done at school, but tutors review the design, data, graphs and conclusions the student produces, which is where many marks are lost. Simulations can supplement analysis practice when lab time is short. The investigation remains the student's own work.",
    },
    {
      question: "What if the internet drops in summer or during storms?",
      answer:
        "We test your connection before the trial and suggest fixes such as moving nearer to the router or using a mobile hotspot. If video becomes unstable, lessons can continue on voice with a shared document. Missed time due to a long outage can be rescheduled.",
    },
    {
      question: "Can my child study Marathi or Hindi alongside an international course?",
      answer:
        "At the IB, Hindi B is widely offered and Marathi may be available through a school-supported route, depending on the school. At IGCSE, Hindi as a second language exists on the Cambridge list. Ask the school what it teaches; a tutor can support reading, writing and oral work in the format the student is entered for.",
    },
    {
      question: "Can parents sit in during lessons?",
      answer:
        "Yes, at the trial and afterwards if the student is comfortable. Many parents prefer reading the written note after each lesson. There is no extra charge for sitting in, and it helps parents see how IB and IGCSE questions are framed.",
    },
    {
      question: "What if the tutor is not a good fit?",
      answer:
        "Say so and we arrange another tutor without asking you to justify the decision. With your permission, the previous tutor's notes are passed on so the student does not start from scratch. A change after the first lesson or two is common and quick.",
    },
    {
      question: "How do I get started from Washim?",
      answer:
        "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with the class, board, subject code and next deadline. We suggest one tutor, arrange a free lesson at a suitable evening time and send the rate in writing afterwards so you can decide calmly.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The national overview with links to every city." },
    { label: "IB and IGCSE tutors in Akola", href: "/akola/", description: "The neighbouring city to the west, the district's old parent." },
    { label: "IB and IGCSE tutors in Amravati", href: "/amravati/", description: "The nearest city listing a Cambridge school." },
    { label: "IB and IGCSE tutors in Yavatmal", href: "/yavatmal/", description: "The district to the east, closely linked with Washim." },
    { label: "IB and IGCSE tutors in Nagpur", href: "/nagpur/", description: "Vidarbha's main hub for international schools." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB subjects and tutoring." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel subjects and format." },
    { label: "IB Diploma programme", href: "/programmes/dp/", description: "What the DP asks of each student." },
    { label: "IB MYP programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and tutoring support." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA versus AI at HL and SL." },
    { label: "Gurugram home tuition", href: "/gurgaon/", description: "Where tutors visit homes, within Delhi NCR." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book the free lesson." },
  ],

  closingHeading: "Start with a free trial lesson in Washim",
  closingBody:
    "Message us the subject, level and next exam. We will match one tutor, set a free lesson for a cool evening hour, and follow it with a written note and a written rate.",
};
