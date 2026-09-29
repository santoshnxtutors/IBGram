import type { CitySeoPage } from "../types";

/**
 * /jind/ - IB and IGCSE tutoring for Jind, Haryana. Online only: tutors do not visit homes in Jind,
 * since in-person home tuition runs only in Gurugram and parts of Delhi NCR. No IB or Cambridge /
 * Edexcel school confirmed in Jind, so stripSchools is empty and clusters point to Karnal,
 * the Chandigarh tricity and Gurugram.
 */
export const jind: CitySeoPage = {
  slug: "jind",
  countryName: "Jind",
  countryNameLong: "Jind, Haryana",
  demonym: "Jind",
  flagCode: "in",
  countryCode: "IN",
  state: "Haryana",
  stateCode: "IN-HR",
  region: "Haryana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "After-school evenings and Sundays, moved around winter fog, harvest weeks and the January school break",
  lastUpdated: "2026-09-21",
  geo: { latitude: 29.316, longitude: 76.317 },
  wikipedia: "https://en.wikipedia.org/wiki/Jind",
  alternateNames: ["Jheend", "Jind city Haryana"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Jind | Online Home Tuition",
  metaDescription:
    "Live one-to-one IB and IGCSE tuition for Jind students, taught online from home by India-based specialists around Haryana fog and harvest weeks. Free trial.",
  h1: "IB and IGCSE Tutors and Home Tuition Online in Jind",
  heroEyebrow: "IB & IGCSE HOME TUITION IN JIND, ONLINE",
  heroSubtitle:
    "Home tuition in Jind for an international syllabus has to be online, because no tutor of ours travels to the town and no school here that we could confirm teaches the IB or the Cambridge and Edexcel IGCSE. What a family gets is a private lesson at the kitchen table or study desk, live over video, with a specialist who has taught your exact course and who marks work the way an examiner would.",
  primaryKeyword: "IB and IGCSE tutors in Jind",
  imageAltText: "A Jind student and an online tutor going through an IB Economics diagram on screen",
  secondaryKeywords: [
    "IB tutor Jind",
    "IGCSE tutor Jind",
    "IB home tuition Jind",
    "IGCSE home tuition Jind",
    "IB private tuition Jind",
    "IB online tuition Jind",
    "IGCSE online tuition Jind",
    "IB Maths tutor Jind",
    "IGCSE Maths tutor Jind",
    "IB Physics tutor Jind",
    "IB Chemistry tutor Jind",
    "IB Biology tutor Jind",
    "IB DP tutor Jind",
    "IB MYP tutor Jind",
    "IB PYP tutor Jind",
    "Cambridge IGCSE tutor Jind",
    "Edexcel IGCSE tutor Jind",
    "IB tutor Civil Lines Jind",
    "IGCSE tutor Rohtak Road Jind",
    "IB tutor Narwana Safidon",
    "online IB tutor Haryana",
  ],

  heroTrustPoints: [
    "Tutors are chosen by subject and syllabus code, not by a generic label",
    "Classes run on IST after school, on weekends and in holidays",
    "Free trial first, with a written note after every lesson",
    "Independent of schools and of every exam board",
  ],
  heroStats: [
    { value: "IST", label: "No time-zone gap" },
    { value: "PYP to DP", label: "Plus CP and IGCSE" },
    { value: "Free trial", label: "Try before paying" },
    { value: "May & Nov", label: "Main exam sessions" },
  ],

  intro: {
    heading: "An international syllabus, studied from a Haryana district town",
    paragraphs: [
      "Jind is a railway junction and district headquarters in the middle of Haryana's wheat and paddy belt, a little over two hours from Delhi and near Rohtak, Hisar and Karnal. Its private schools are CBSE or Haryana Board, and its coaching lanes are built around JEE, NEET and board results. The IB and IGCSE are a different world, and there is no school in Jind that we can confirm as an IB World School or a Cambridge or Edexcel centre.",
      "Most enquiries come from parents who have looked past the district. A child may have a place, or be aiming for one, at an IB boarding school in the Chandigarh region, Gurugram or elsewhere. A father may be transferred to a Gulf posting and want a smooth handover to a foreign curriculum. Sometimes a family with an eye on a British or Canadian university wants the child to start early on a syllabus those admissions teams already know.",
      "For each of these, a tutor is the piece that fills the local gap. Our teachers work from across India and teach live, one to one. They will not turn up at your door in Jind; in-person home tuition is limited to Gurugram and parts of Delhi NCR. Instead your child gets a full lesson at home over video, with past papers, a shared whiteboard and honest marking.",
      "We are an independent service, unconnected to the IB, Cambridge, Pearson or any school. Tutors teach and comment; the Internal Assessment, Extended Essay, TOK essay and coursework are always the student's own writing.",
    ],
    bullets: [
      "Private online tuition across IB PYP, MYP, DP and CP",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended",
      "Timings that allow for winter fog and harvest-season weeks",
      "For boarders, online-school students and private candidates",
      "A free trial lesson and a written plan afterwards",
    ],
  },

  programmesIntro:
    "The absence of a local IB school means each programme reaches a Jind family differently. The four entries below describe the stage itself and then how tutoring normally slots in for someone living in this part of Haryana.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery-Class 5, ages 3-12",
      description:
        "Children follow inquiry units under set themes and close with a Grade 5 Exhibition. No formal exams exist, so tutoring concentrates on reading stamina, number confidence and the habit of explaining thinking aloud.",
      countryNote:
        "PYP help in Jind is generally a preparation year before a move to an IB primary school in another city, or light weekly support for a child on an online PYP timetable.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are assessed on four criteria rather than a percentage, and the programme ends with the Personal Project. The step up from short answers to reasoned argument is where a weekly tutor helps most.",
      countryNote:
        "A Jind MYP student is usually a boarder in Chandigarh or the NCR, so the tutor matches the school's term plan and adds lessons over the December-January break and the long summer holiday.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, split across Higher and Standard Level, sit alongside TOK, CAS and the 4,000-word Extended Essay. Internal Assessments feed into subject grades, and most final papers are sat in May.",
      countryNote:
        "Jind DP students are enrolled elsewhere, and a tutor typically provides continuity in the Higher Level subject that gets the most difficult when they are home between terms.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Learners take a few DP courses with a career-related qualification, a reflective project and a strand on personal and professional skills, for a practical route into work or further study.",
      countryNote:
        "Very uncommon among Jind families and always run through a school elsewhere; tutors assist with the academic courses in the programme.",
    },
  ],

  subjectsIntro:
    "Tutors are picked for the course and the level. A Jind student boarding in another city has a school timetable, mock dates and internal deadlines that the tutor needs to follow closely.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof for future engineers and scientists, with HL Paper 3 practice and an exploration topic fixed in good time." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data, statistics and modelling with technology, aimed at business, economics and social science degrees." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, electricity, fields and modern physics, with the practical investigation scoped early." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, kinetics, equilibria and organic synthesis, with mark-scheme wording built into every answer." },
    { name: "IB Biology", levels: "HL / SL", description: "Genetics, evolution, ecology and human physiology, with accurate command-term responses." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets, macro policy and development, with accurate diagrams and current examples for the portfolio." },
    { name: "IB Business Management", levels: "HL / SL", description: "Finance, marketing and operations through case studies, and a research-based Internal Assessment." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, databases, networks and programming practised in Python or Java." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Analysing texts of every kind, preparing the individual oral and writing comparative essays." },
    { name: "IB Hindi A and Punjabi B", levels: "HL / SL", description: "Hindi literature for home-language readers and Punjabi as an acquired language for families in this part of Haryana." },
    { name: "IB Psychology", levels: "HL / SL", description: "Research methods, cognitive and biological approaches, and an ethical classroom experiment." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Ecosystems, resources and sustainability, topical in an agricultural district, with a fieldwork-style investigation." },
    { name: "Theory of Knowledge", levels: "Core", description: "Guiding discussion of knowledge questions; the exhibition and essay stay in the student's own words." },
  ],
  igcseSubjectsIntro:
    "IGCSE tutoring for Jind students follows whichever board and code the student is entered for, since Cambridge and Pearson Edexcel papers differ in structure and marking language even under identical subject names.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Number, algebra, shape and data handling, with the tier chosen after a diagnostic paper." },
    { name: "IGCSE Additional Mathematics", levels: "Extended", description: "Calculus and functions, a real step towards A Level Maths or IB Maths HL." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, energy, circuits and waves, with alternative-to-practical questions rehearsed." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Periodic trends, electrolysis, rates and organic basics with careful use of the mole." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, digestion, reproduction and ecology, with tidy labelled diagrams." },
    { name: "IGCSE English First Language", levels: "Extended", description: "Argument, description and narrative writing, plus summary skills." },
    { name: "IGCSE English as a Second Language", levels: "Core / Extended", description: "Balanced practice in reading, writing, listening and speaking for Hindi or Punjabi-speaking homes." },
    { name: "IGCSE Computer Science", levels: "Extended", description: "Pseudocode, logic, data representation and a Python-based paper." },
    { name: "IGCSE Economics", levels: "Extended", description: "Markets, government and trade, using short data-response questions." },
    { name: "IGCSE Hindi as a Second Language", levels: "Core / Extended", description: "Comprehension, letter writing and grammar for students using Hindi as an additional language." },
  ],

  regionsTitle: "Jind areas our students learn from",
  regionsIntro:
    "Location does not restrict tutor choice, as every lesson is on video. We still note neighbourhoods because they hint at school routes, evening traffic and the practical timing that suits a household.",
  regions: [
    { name: "Civil Lines", note: "A quieter residential and administrative belt, popular with officer and professional families; evening lessons fit after school and tuition-free hours." },
    { name: "Urban Estate", note: "A planned sector-style colony where many salaried families live; households here often ask about boarding options in Chandigarh or the NCR." },
    { name: "Rohtak Road side", note: "The eastern approach towards Rohtak and Delhi; families here often travel to those cities and compare schools there." },
    { name: "Hansi Road side", note: "The western approach towards Hisar, with a mix of long-settled families and newer colonies." },
    { name: "Patiala Chowk area", note: "A busy junction and market zone where students walk or cycle home after school, so a slightly later start suits." },
    { name: "Rani Talab and the old city", note: "The historic core of Jind, with dense lanes and family-run businesses, where quiet study space and a steady connection are the main practical points." },
    { name: "Railway Road and the junction", note: "Around Jind Junction, home to railway staff and traders, useful for families with relatives elsewhere on the network." },
    { name: "Model Town and newer colonies", note: "Newer housing where families with children in private schools cluster; power supply and fog affect winter evenings." },
    { name: "Narwana and Safidon side", note: "Neighbouring towns in Jind district; students from there attend school in Jind city and add tuition once the plan is clear." },
  ],

  schoolClusters: [
    {
      city: "Jind itself",
      note: "Schools in the city follow CBSE or the Haryana Board. We could not confirm any that teach the IB or Cambridge and Edexcel IGCSE, so local options are limited and families study online or elsewhere.",
      schools: [],
    },
    {
      city: "Nearby: Karnal",
      note: "A larger Haryana city a couple of hours away that many Jind families know; we have not confirmed a full IB or IGCSE school there either, so Karnal is a reference point, not a solution.",
      schools: [],
    },
    {
      city: "Nearby: Chandigarh tricity",
      note: "The nearest cluster of confirmed IB and Cambridge schools for northern Haryana, reachable by road or train, and a common boarding choice for Class 11 and 12.",
      schools: ["Strawberry Fields High School, Chandigarh (IB)", "Oakridge International School, Mohali (IB and Cambridge IGCSE)"],
    },
    {
      city: "Nearby: Gurugram",
      note: "The widest choice of IB and Cambridge schools in Haryana, and the one place where IB Gram teaches at students' homes, in Gurugram and parts of Delhi NCR.",
      schools: ["Pathways World School, Aravali (IB)", "GD Goenka World School (IB and Cambridge IGCSE)"],
    },
  ],
  schoolDisclaimer:
    "Any school named on this page is there so a family can see the wider options, not because it is a partner or an endorsement. IB Gram is independent of the International Baccalaureate Organization, Cambridge, Pearson Edexcel and every school, and school lists should be checked directly with those bodies.",

  tutorsIntro:
    "Tutors are based in different parts of India and teach on IST. For a Jind student we choose someone who has taught that course before, and the free trial shows whether their style works.",

  modesIntro:
    "Online is the only format for Jind, since visits to homes exist only in Gurugram and parts of Delhi NCR. Families choose between three patterns depending on the student's school, the season and how close the exams are.",
  modes: [
    {
      title: "Standing weekly lessons",
      description:
        "A fixed hour with one tutor, live on video with a shared whiteboard. It makes a good backbone for the school term and suits boarders and online learners alike.",
      bullets: [
        "One subject or several",
        "A written recap after every lesson",
        "Fits with any school or online provider",
        "Tutor can be changed if the fit is poor",
      ],
    },
    {
      title: "Holiday blocks",
      description:
        "Haryana schools close for the January cold and the June heat, and boarders are home for weeks. Concentrated blocks then bring a subject up to speed before the next term.",
      bullets: [
        "Three or four lessons a week in a break",
        "Aimed at the topics behind the mock results",
        "Pre-reading for the term ahead",
        "Simple to pause for family travel",
      ],
    },
    {
      title: "Pre-exam revision",
      description:
        "In the last month before the May or November series, students work timed papers, read the mark schemes with the tutor and repair the weakest topics.",
      bullets: [
        "Papers set at the right tier",
        "Marks lost tracked by topic",
        "Concise last-week revision notes",
        "A calm routine in the final days",
      ],
    },
  ],

  sections: [
    {
      heading: "Why would a family in Jind look at the IB or IGCSE?",
      paragraphs: [
        "The reasons are usually practical rather than fashionable. A child who wants to study abroad finds that the IB Diploma and IGCSE with A Levels are read easily by admissions offices. A family expecting a transfer or a foreign posting wants a curriculum that will not have to be restarted. And some students simply thrive on discussion, coursework and applied questions more than on recall.",
        "Jind is an unusual place from which to act on this. The nearest confirmed IB and Cambridge schools are in the Chandigarh region and Gurugram, so the qualification arrives through boarding, an online school or private study. Each route brings a different need, and it is worth being clear about which one applies before choosing a syllabus or a tutor.",
        "A younger child can prepare gently. In Class 6 to 8, the difference between an IB classroom and a Haryana Board one is mainly in how answers are expected to be written. A year of weekly lessons in explaining, comparing and evaluating makes the change much smoother.",
        "If you see your family in any of these situations, a short message about the child's class, board and target is enough to begin.",
      ],
      bullets: [
        "Boarders at IB schools who come home for the holidays",
        "Students on accredited online international programmes",
        "Families preparing for a posting or a move",
        "Private candidates entered for IGCSE papers",
      ],
    },
    {
      heading: "Haryana Board, CBSE, IB or IGCSE: how do they differ?",
      paragraphs: [
        "In Jind, the everyday choices are the Haryana Board, run from Bhiwani, and CBSE. Both connect to national entrance tests, both are taught in schools within a short ride, and both are familiar to parents. IB and IGCSE take a different approach, built around international recognition and applied thinking, and getting to them involves distance or relocation.",
        "It helps to see the four side by side, with attention to what matters for a family in this district rather than a national syllabus comparison. The last column is a rough guide to who each route tends to suit.",
        "Changing board partway is not trivial. A student who moves from Haryana Board into IB DP in Class 11 usually needs a preparatory year, especially for English writing and for the internal-assessment habit.",
      ],
      table: {
        caption: "The four routes as seen from Jind",
        columns: ["Route", "Reachable in Jind", "How it is assessed", "Often suits"],
        rows: [
          ["Haryana Board (HBSE)", "Yes, in government and private schools", "Board exams in Classes 10 and 12", "Students staying within Haryana for college"],
          ["CBSE", "Yes, in many private schools", "Board exams plus school assessment", "JEE, NEET and CUET-UG aspirants"],
          ["IB Diploma", "Not confirmed locally", "Internal work, core and May papers", "Study abroad or relocation to a metro"],
          ["Cambridge or Edexcel IGCSE", "Not confirmed locally", "Externally marked papers, Core or Extended", "A bridge to A Level, IB or an international school"],
        ],
      },
    },
    {
      heading: "What shapes the price of IB and IGCSE tuition for Jind students?",
      paragraphs: [
        "There is no set rate for the town. We quote in writing before booking, and the rate reflects three things: the tutor's experience, the course and level, and the weekly hours. A former IB examiner in HL Chemistry is priced differently from a tutor helping with Class 6 MYP Science.",
        "Level and timing push the figure up as well. DP Higher Level, IGCSE Additional Mathematics and the weeks before May or November cost more than early-year work because preparation is heavier and stakes higher.",
        "Families steer the total mainly through frequency. A single weekly session across the year costs much less than three a week before a mock, and many settle on a light routine that increases only when results demand it.",
        "The safest way to begin is with four or five lessons, then a look at the tutor's notes. If the fit is wrong, another tutor is offered without fuss.",
      ],
      bullets: [
        "Tutor experience and examining background",
        "Programme, subject and level",
        "Hours per week and the length of the block",
        "Distance from the exam series",
      ],
    },
    {
      heading: "Online tutor, coaching institute, local tutor or self-study in Jind?",
      paragraphs: [
        "A Jind family has four realistic choices. Coaching institutes are excellent at entrance and board results, yet rarely have staff who have taught an IB Internal Assessment or the IGCSE practical paper. A local private tutor can be good in one subject but few cover a full portfolio of sciences, economics and English.",
        "Self-study with past papers is feasible for a disciplined student, though extended writing and criterion marking need someone to read the work. Online one-to-one lessons bring a specialist to the screen at a fixed hour, unaffected by fog on the highway.",
        "The comparison below stresses what matters here: a limited pool of specialists, winter fog that disrupts travel, and the need to schedule around school and family routines.",
      ],
      table: {
        caption: "Study options compared for Jind",
        columns: ["Option", "IB and IGCSE coverage", "Travel", "Marked to the right standard"],
        rows: [
          ["Online one-to-one", "Every major subject and level", "None", "Yes, to the real mark scheme"],
          ["Coaching institute", "Mostly entrance and board subjects", "Daily, even in fog", "Not for IB or IGCSE"],
          ["Local private tutor", "Depends on the person", "Tutor or student travels", "Varies"],
          ["Self-study", "Whatever the student manages alone", "None", "Only if someone marks it"],
        ],
      },
    },
    {
      heading: "How do fog, harvest and school breaks shape a Jind study year?",
      paragraphs: [
        "Jind's year is defined by weather and farming. Summers are fierce, monsoon arrives in July, October and November bring paddy harvest and a smoky haze across the plains, and December and January are marked by dense fog. Haryana schools close for the hot weeks in June and for a break around the New Year, and Diwali and Holi add gaps of their own.",
        "The IB and IGCSE calendars are set elsewhere. The IB written papers fall in May, with a November session for some, and IGCSE series run in May to June and October to November. A student who is also on a state-board timetable has to fit international deadlines around February and March school exams.",
        "Tuition therefore tends to run steadily through the year with heavier weeks during the winter break and just before the external series.",
      ],
      table: {
        caption: "A working year for a Jind student on IB or IGCSE",
        columns: ["Months", "What is happening in Jind", "Tuition emphasis"],
        rows: [
          ["January to March", "Fog, school exams, spring on the way", "Mocks, gap analysis and Extended Essay drafts"],
          ["April to June", "Rising heat, May exam series, summer break", "Revision sprint, morning intensives"],
          ["July to September", "Monsoon, new school year, Teej and festivals", "New content, Internal Assessment plans"],
          ["October to December", "Harvest haze, Diwali, November series, fog begins", "Past papers, resit preparation, mock exams"],
        ],
      },
    },
    {
      heading: "Where can IB and IGCSE study lead from Jind?",
      paragraphs: [
        "Within India, the Association of Indian Universities treats the IB Diploma as equivalent to Class 12, and private universities near Delhi, including those in Sonipat, accept IB and Cambridge results. Central universities use CUET-UG. A student aiming for medicine or engineering should read the eligibility rules of NEET and JEE Main closely and see how each treats an IB or IGCSE route.",
        "Regional routes include Chaudhary Ranbir Singh University in Jind, Maharshi Dayanand University in Rohtak and Kurukshetra University, plus Delhi University via CUET. Each has its own admission process and quotas, so the choice of subjects at IB or IGCSE level should be checked against the target course early.",
        "Overseas, UK, US, Canadian, Australian and European universities read IB and IGCSE plus A Level results routinely. Standardised tests such as SAT, IELTS or UCAT may be needed as well. Tutors build subject strength and exam skill; they do not write personal statements.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG for Indian universities",
        "NEET and JEE eligibility checked case by case",
        "Universities in Haryana and the Delhi region",
        "Study abroad with IB or IGCSE plus A Level",
      ],
    },
    {
      heading: "What does IB Maths and science tuition look like online?",
      paragraphs: [
        "Start with the maths route. Analysis and Approaches suits students aiming at engineering, computer science or pure science, and Applications and Interpretation suits business, economics and life-science plans. Pick on the intended degree, not on habit.",
        "Tutors teach on a shared digital whiteboard, so every step of working is visible and the student writes back. Past-paper questions are matched to level, calculator technique is demonstrated on screen, and the exploration topic is fixed early so the ideas are the student's own.",
        "In the sciences, tutors coach experiment design, data handling and evaluation. Where a school lab is limited, simulations and published data can support many investigations if the school approves.",
        "A workable diploma load is one lesson a week per Higher Level subject, plus a fortnightly check on the Extended Essay process.",
      ],
    },
    {
      heading: "Should a Jind IGCSE student sit Core or Extended?",
      paragraphs: [
        "Core papers stop at grade C, while Extended reaches A star. Anyone who may continue with Maths, Physics or Chemistry at A Level or IB Higher Level should usually sit Extended, since Core would close those doors.",
        "Subject choice matters just as much. A frequent line-up is Mathematics, one or two sciences, English, a language and a humanities or business subject. Additional Mathematics helps future engineers but adds workload.",
        "Cambridge and Edexcel word their questions differently, so tutors work to the code on the entry form. For private candidates we also explain how to find an exam centre, dates and fees.",
      ],
      table: {
        caption: "Tier guidance for common IGCSE subjects",
        columns: ["Subject", "Extended is wise if", "Core can do if"],
        rows: [
          ["Mathematics", "A Level Maths or engineering is possible", "A secure pass is the target"],
          ["Sciences", "The subject continues after IGCSE", "It ends at IGCSE"],
          ["English as a Second Language", "Study abroad is planned", "A pass is enough"],
          ["Economics or Computer Science", "A related degree is likely", "Interest is casual"],
        ],
      },
    },
  ],

  process: [
    { title: "Message us", description: "Send class, school or board, and the subjects that need work by WhatsApp or email." },
    { title: "Take a free trial", description: "A tutor experienced in your syllabus teaches one live lesson so you can judge the match." },
    { title: "Get the plan in writing", description: "Topics, weekly frequency and the rate are sent before you commit to anything." },
    { title: "Study weekly", description: "Lessons happen at a fixed time, and a short note after each records what was covered." },
    { title: "Review and adjust", description: "Every few weeks the plan is reviewed, and you can switch tutors if the fit is off." },
  ],

  whyPoints: [
    { title: "Syllabus-specific matching", description: "We choose tutors for the exact programme, subject and level, not for a broad claim about international curricula." },
    { title: "Planned around Haryana's year", description: "Lessons dodge fog nights, harvest-week disruption and long festival breaks, and pause easily when families travel." },
    { title: "Clear about the format", description: "Tutors do not visit Jind; lessons are live online from India, and we state that before you book." },
    { title: "Coaching within the rules", description: "No tutor writes an Internal Assessment, Extended Essay, TOK essay or coursework; they teach and comment." },
    { title: "A free first class", description: "You meet the tutor before paying, and a rate is sent in writing afterwards." },
    { title: "No hidden allegiance", description: "Being independent of schools and boards keeps advice on tiers and routes centred on the student." },
  ],

  faqs: [
    { question: "Is IB or IGCSE home tuition available in Jind?", answer: "Yes, as live online home tuition. Your child studies at home on a laptop, one to one with an India-based tutor. Tutors do not travel to Jind; in-person visits run only in Gurugram and parts of Delhi NCR. We cover IB PYP, MYP, DP and CP and both Cambridge and Pearson Edexcel IGCSE." },
    { question: "Which IB or IGCSE schools are in Jind?", answer: "We could not confirm any. The schools we found in Jind follow CBSE or the Haryana Board, and the nearest confirmed IB and Cambridge campuses are around Chandigarh and Gurugram. Local options are limited, so please check the official school finders on ibo.org and cambridgeinternational.org before making decisions." },
    { question: "Can a student in Jind complete the IB or IGCSE?", answer: "It is possible with planning. The main routes are boarding at a school elsewhere, enrolling with an accredited online international school, or sitting IGCSE papers as a private candidate through an exam centre. A tutor supports any of the three by teaching the syllabus at the student's pace." },
    { question: "How much does tuition cost for Jind students?", answer: "We do not publish prices, since the rate depends on the tutor, the level, the number of lessons and how near the exams are. A written quote comes before you book and the first lesson is free. Higher Level Sciences and Maths cost more than early-years help." },
    { question: "Does winter fog affect online lessons?", answer: "Far less than it affects travel. Fog that slows highways does not touch a video call, though power cuts can, so we suggest a laptop with battery backup and a phone hotspot. Each lesson ends with written notes, and any lost segment is covered at the start of the next class." },
    { question: "Which IB subjects can tutors cover?", answer: "Most of them: Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English, Hindi, Punjabi, Psychology, ESS and Theory of Knowledge coaching. Tell us the level and the school's dates, and we match a tutor who has taught that exact course." },
    { question: "Can a tutor write my Extended Essay or IA?", answer: "No. Tutors coach by explaining the criteria, asking questions and commenting on drafts the student has written. The Internal Assessment, Extended Essay, TOK essay and coursework must be the student's own work, and anything else can cost the qualification." },
    { question: "How do I choose between Core and Extended in IGCSE?", answer: "Take Extended if the student might study the subject further, since Core tops out at grade C. Core suits students who want a secure pass and will not continue. A diagnostic lesson and school advice help, and the tier can often be changed early in the course." },
    { question: "Do you teach Cambridge and Edexcel IGCSE?", answer: "Yes, both. The content is similar, but the papers and mark-scheme wording differ, so tutors work from the code on the entry form. Please share the exact syllabus code so that practice papers and feedback match your exam." },
    { question: "What lesson times are available in Jind?", answer: "Weekday evenings after school and Sunday mornings are the most popular, all in Indian Standard Time. We avoid school hours, late-evening fog and festival weeks unless the student wants extra sessions in a break, and slots are easy to move when exams get closer." },
    { question: "Can my child prepare for JEE or NEET alongside IB?", answer: "In part. IB Maths, Physics, Chemistry and Biology overlap with entrance syllabi, but JEE and NEET cover extra topics and question styles, and their rules for IB and IGCSE students should be checked directly. Our tutors teach IB and IGCSE content and are not an entrance-coaching institute." },
    { question: "Can you help with an IB school entrance test?", answer: "We can strengthen the subject base. A tutor finds gaps in English, Maths and Science, practises the explaining style IB schools prefer and builds confidence. We do not promise admission and have no say in any school's decisions." },
    { question: "Are lessons in English or Hindi?", answer: "Lessons are in English because the exams are, though a tutor may briefly explain a difficult idea in Hindi or Punjabi when that helps a younger student. Language subjects are taught by tutors who are comfortable in that language, using past papers in the right script." },
    { question: "Is there any link between IB Gram and a school or exam board?", answer: "None. IB Gram is independent of the International Baccalaureate Organization, Cambridge, Pearson and every school. That independence means our advice on subjects, tiers and routes does not favour any institution, and it means you should confirm current rules with the official bodies." },
    { question: "How do I book a free trial?", answer: "Message +91 7439 368 115 on WhatsApp or email ibgram24@gmail.com with the class, board and subject. We suggest a tutor and a time in IST and send a joining link. After the lesson you get a written plan and rate, with no obligation to continue." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "Every city we serve online, with Gurugram the one place for home visits." },
    { label: "Karnal page", href: "/karnal/", description: "A neighbouring Haryana city with its own school landscape." },
    { label: "Rohtak page", href: "/rohtak/", description: "The nearby city on the road to Delhi." },
    { label: "Hisar page", href: "/hisar/", description: "Tuition information for families closer to Hisar." },
    { label: "Gurugram page", href: "/gurgaon/", description: "Where in-person home tuition runs, with IB and Cambridge schools nearby." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject specialists across every IB stage." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE tutors by subject." },
    { label: "IB Diploma support", href: "/programmes/dp/", description: "How Diploma tutoring is organised, from HL courses to the core." },
    { label: "IB Maths", href: "/courses/ib/mathematics/", description: "Analysis and Applications routes, topic by topic." },
    { label: "Tutor profiles", href: "/tutors/", description: "The teachers you may be matched with." },
    { label: "Contact us", href: "/contact-us/", description: "Book a free trial or ask a question." },
  ],

  closingHeading: "Book a free lesson from Jind",
  closingBody:
    "Tell us the class, the board and the subject giving the most trouble. We will pick a tutor who has taught it, set a trial lesson on IST and send a written plan and rate afterwards. Reach us on WhatsApp at +91 7439 368 115 or at ibgram24@gmail.com.",
};
