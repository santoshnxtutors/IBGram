import type { CitySeoPage } from "../types";

/**
 * /sahaswan/ - IB and IGCSE tutoring page for Sahaswan, Budaun district, Uttar Pradesh (Rohilkhand).
 * Online-only delivery. No IB or Cambridge school was confirmed in Sahaswan, so stripSchools is empty and the
 * clusters are labelled nearby cities whose schools are already named on sibling pages.
 */
export const sahaswan: CitySeoPage = {
  slug: "sahaswan",
  countryName: "Sahaswan",
  countryNameLong: "Sahaswan, Uttar Pradesh",
  demonym: "Sahaswan",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around the winter fog, the wheat harvest and Holi, the Kanwar weeks of Shravan, and the school day your child already keeps",
  lastUpdated: "2026-09-21",
  geo: { latitude: 28.0680, longitude: 78.7510 },
  wikipedia: "https://en.wikipedia.org/wiki/Sahaswan",
  alternateNames: ["Sahaswan Budaun", "Sahaswan Badaun", "Sahaswan Rohilkhand"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sahaswan | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Sahaswan, Budaun: private one-to-one lessons at home on a laptop, planned around fog and harvest weeks, free trial first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sahaswan",
  heroEyebrow: "PRIVATE IB & IGCSE LESSONS FOR SAHASWAN STUDENTS",
  heroSubtitle:
    "Sahaswan families who search for home tuition in an IB or IGCSE subject usually discover that no local teacher has ever taught it, which is why the lesson comes to a laptop instead of a doorstep. One tutor, one student, live on screen, with your child at home in Budaun district and the tutor teaching from elsewhere in India. It is a practical answer for a town known for its musical heritage and farming economy, where an international syllabus is a new idea.",
  primaryKeyword: "IB and IGCSE tutors in Sahaswan",
  imageAltText: "A Sahaswan student revising IB Economics diagrams with an online tutor during a live home lesson",
  secondaryKeywords: [
    "IB tutor Sahaswan",
    "IGCSE tutor Sahaswan",
    "IB home tuition Sahaswan",
    "IGCSE home tuition Sahaswan",
    "IB private tuition Sahaswan",
    "IB Maths tutor Sahaswan",
    "IGCSE Maths tutor Sahaswan",
    "IB Physics tutor Sahaswan",
    "IB Chemistry tutor Sahaswan",
    "IB Biology tutor Sahaswan",
    "IB DP tutor Sahaswan",
    "IB MYP tutor Sahaswan",
    "IB PYP tutor Sahaswan",
    "IGCSE online tuition Sahaswan",
    "Cambridge IGCSE tutor Sahaswan",
    "IB tutor Budaun",
    "IGCSE tutor Budaun district",
    "online IB tutor Rohilkhand",
    "IB tutor Sahaswan Badaun",
  ],

  heroTrustPoints: [
    "Matching begins with the exact IB course and level, or the IGCSE board and syllabus code",
    "Lessons are online; in-person home tuition exists only in Gurugram and parts of Delhi NCR",
    "A free trial lesson comes before anything else",
    "IB Gram is independent of the IB, Cambridge, Pearson Edexcel and every school named here",
  ],
  heroStats: [
    { value: "Online", label: "Live, private and at home" },
    { value: "PYP to DP", label: "The full IB range" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
    { value: "Free trial", label: "Before you decide" },
  ],

  intro: {
    heading: "International-curriculum tutoring for a Rohilkhand town",
    paragraphs: [
      "Sahaswan lies on the plains of Budaun district in western Uttar Pradesh, in the Rohilkhand belt between the Ganga and the Ramganga. It is an old town, tied in popular memory to the Sahaswan gharana of classical singing, and today it is a market and farming centre. Schools here teach the UP board or CBSE syllabus, mostly in Hindi or English, and we could not confirm any school in Sahaswan that offers the IB or a Cambridge or Edexcel IGCSE.",
      "That matters because families who ask about IB and IGCSE tutors in Sahaswan are planning something, rather than describing what their child already does. The plan might be a move to Delhi NCR, a boarding place in Dehradun, a cousin's example abroad, or a job transfer for a parent in government service. Each plan needs a tutor who has taught the target syllabus, which is why lessons are matched from across India.",
      "Tutors do not come to houses in Sahaswan. In-person home tuition is available only in Gurugram and parts of Delhi NCR, so a Sahaswan family receives online home tuition: a private lesson taken at home on a laptop, with the tutor writing on a shared whiteboard and sending a summary afterwards.",
      "IB Gram is an independent tutoring service. It has no partnership with the IB, Cambridge, Pearson Edexcel or any school mentioned on this page. Tutors explain, coach and mark practice work, yet they never write any Internal Assessment, Extended Essay, TOK essay or coursework for a student.",
    ],
    bullets: [
      "Private lessons for IB PYP, MYP and DP, and for Cambridge and Edexcel IGCSE",
      "Hindi-friendly explanations alongside English-medium teaching",
      "Written note after every lesson for parents",
      "Free first lesson and rates agreed in writing before booking",
    ],
  },

  programmesIntro:
    "No IB World School is confirmed in Sahaswan, so the four programmes reach local households indirectly, through relocation, boarding or preparation for a move. Each is described below in the terms a Budaun district family is likely to meet.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 3-12",
      description:
        "Young learners work on units built around a central idea, with reading, writing and number taught inside those units. The programme finishes with a student-led Exhibition. A tutor's role is to keep language and number skills strong so the child enters the inquiry classroom with confidence.",
      countryNote:
        "For a Sahaswan child, PYP tutoring often means English reading support before a move to an international primary school in Delhi NCR or Lucknow.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers mark each subject against set criteria, and students complete a Personal Project. Many learners know the facts but lose marks by not explaining, so practice at reasoning and writing is where a tutor spends time.",
      countryNote:
        "MYP help from Sahaswan commonly serves a student at a boarding school who returns home for the winter and summer breaks.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students study six subjects, three at Higher Level and three at Standard Level, plus the Extended Essay, Theory of Knowledge and CAS. Most exams take place in May and internal assessments are completed throughout.",
      countryNote:
        "Diploma students linked to Sahaswan attend a school in another city, and tutoring follows the dates and assessment deadlines that school sets.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP pairs Diploma courses with a career-related qualification and a reflective core. It suits learners who want a practical track rather than only academic subjects.",
      countryNote:
        "CP is seldom offered in western Uttar Pradesh, so enquiries from Sahaswan usually concern a particular Diploma course in a student's CP mix.",
    },
  ],

  subjectsIntro:
    "Every match begins from the course, the level and the session your child will sit. The list covers the IB subjects that families in Rohilkhand most often ask about.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, algebra, functions and proof, written out clearly so method marks are kept." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Probability, statistics and modelling, using technology as the course expects." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, thermal physics, waves and fields, with unit and uncertainty practice." },
    { name: "Chemistry", levels: "SL / HL", description: "Stoichiometry, bonding, kinetics and organic reactions with structured explanations." },
    { name: "Biology", levels: "SL / HL", description: "Cells, genetics, ecology and physiology, including data-based and extended questions." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "River, soil and farming systems of the Ganga plain give practical case studies." },
    { name: "Economics", levels: "SL / HL", description: "Markets, trade, development and macroeconomic policy, with careful diagrams." },
    { name: "Business Management", levels: "SL / HL", description: "Finance, marketing and operations, with case analysis for family business contexts." },
    { name: "History", levels: "SL / HL", description: "Source analysis and essay planning for twentieth-century topics." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Close reading, comparison and the individual oral, with feedback on writing." },
    { name: "Hindi A: Literature", levels: "SL / HL", description: "A natural choice for students whose home language is Hindi, focusing on literary analysis." },
    { name: "Hindi B", levels: "SL / HL", description: "Language acquisition for students who want a second-language option." },
    { name: "Urdu B", levels: "SL", description: "For families who want an additional regional language; availability is confirmed at the trial stage." },
    { name: "Theory of Knowledge", levels: "Core", description: "Coaching on knowledge questions and the exhibition, without writing the essay for the student." },
  ],
  igcseSubjectsIntro:
    "IGCSE tutoring in Sahaswan is usually preparation for a Cambridge or Edexcel course that a student will take after a school move, so tutors work from the target syllabus code.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with emphasis on setting out working." },
    { name: "IGCSE Additional Mathematics", levels: "Class 10", description: "A stretch towards calculus and vectors before A Level or the Diploma." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, energy, electricity and waves with practical-paper practice." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Atoms, reactions, energy changes and organic chemistry." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, nutrition, inheritance and ecosystems with clear extended answers." },
    { name: "IGCSE English First Language", levels: "Class 9-10", description: "Directed writing, summary and commentary, with feedback after each piece." },
    { name: "IGCSE English as a Second Language", levels: "Class 9-10", description: "A gentler entry for students from Hindi-medium schools." },
    { name: "IGCSE Hindi as a Second Language", levels: "Class 9-10", description: "Reading and writing tasks for students who need a language credit." },
    { name: "IGCSE Economics", levels: "Class 9-10", description: "Basic economic problem, markets and government policy with simple diagrams." },
    { name: "IGCSE Geography", levels: "Class 9-10", description: "Physical and human geography with fieldwork-style questions; river and farming topics suit the Ganga plain." },
  ],

  regionsTitle: "Sahaswan and the Budaun district towns we support",
  regionsIntro:
    "A live online lesson reaches any home with a steady connection. These are the places in and around Sahaswan that families mention most, with notes that affect lesson timing. None is claimed here to be an IB or Cambridge school.",
  regions: [
    { name: "Sahaswan town centre", note: "The market area where many families run shops. Lessons often begin after the evening rush, once shutters come down." },
    { name: "Sahaswan Tehsil area", note: "Households linked to government and court offices tend to prefer fixed weekday evenings." },
    { name: "Bisauli", note: "A neighbouring town. Students sometimes travel to Sahaswan or Budaun for school, so online lessons avoid another commute." },
    { name: "Ujhani", note: "A town on the road towards Bareilly and Badaun, where families look to larger cities for schooling." },
    { name: "Dataganj", note: "Another Budaun district town whose families often consider Bareilly or Moradabad for coaching and boarding." },
    { name: "Budaun city", note: "The district headquarters, with the widest range of CBSE schools in the district and a steady stream of coaching students." },
    { name: "Chandausi", note: "A nearby railway and trading town in Sambhal district, reachable from Sahaswan by road." },
    { name: "Villages along the Ganga and Ramganga plains", note: "Rural households often have patchy electricity in the monsoon, so lessons are booked with a fallback slot." },
  ],

  schoolClusters: [
    {
      city: "Sahaswan and Budaun district",
      note: "We could not confirm an IB World School or a Cambridge or Edexcel IGCSE school in Sahaswan or elsewhere in the district. Local options are limited to UP board and CBSE schools, so confirm any school's curriculum yourself.",
      schools: [],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "The Noida and Gurugram belts are where many western UP families look for day or boarding places, about four to five hours away by road.",
      schools: ["Genesis Global School, Noida", "GD Goenka World School", "Pathways World School"],
    },
    {
      city: "Nearby: Lucknow",
      note: "The state capital has a school with an IB primary programme and schools with Cambridge IGCSE, reachable by train from Bareilly.",
      schools: ["Modern School, Lucknow", "City Montessori School, Cambridge Campus"],
    },
    {
      city: "Nearby: Dehradun and the Doon valley",
      note: "A long-established boarding destination for families in western Uttar Pradesh and Uttarakhand.",
      schools: ["SelaQui International School", "Unison World School"],
    },
  ],
  schoolDisclaimer:
    "Schools are listed only to show where international curricula are offered within reach of Sahaswan. IB Gram is not affiliated with any of them and cannot vouch for their admissions, so please speak to the school.",

  tutorsIntro:
    "Tutors teach online from different parts of India, all on Indian Standard Time. Each profile shows the programme, subject, level and teaching record, and the first lesson is free.",

  modesIntro:
    "All three formats are live lessons between one tutor and one student. Tutors do not visit homes in Sahaswan, and in-person home tuition is offered only in Gurugram and parts of Delhi NCR. The difference lies in how structured the plan is.",
  modes: [
    {
      title: "Online home tuition, one lesson a week",
      description:
        "The simplest route: a fixed hour each week with one tutor, taken at home on a laptop. It suits a student who needs regular help through a school year.",
      bullets: [
        "Same tutor all term",
        "Shared whiteboard for worked solutions",
        "A note to parents after each class",
      ],
    },
    {
      title: "Move-ready preparation",
      description:
        "A focused block in the months before a student joins an international school. The tutor works from the target school's syllabus and entry test.",
      bullets: [
        "Diagnostic lesson in week one",
        "English and Mathematics priority",
        "Practice entry papers marked together",
      ],
    },
    {
      title: "Winter and summer holiday blocks",
      description:
        "Intensive sessions when a boarder is home. The tutor receives the school's topic list in advance and uses each day well.",
      bullets: [
        "Alternate-day or daily lessons",
        "Focus on topics the student found hardest",
        "Hand-over notes before term restarts",
      ],
    },
  ],

  sections: [
    {
      heading: "What is the school picture in and around Sahaswan?",
      paragraphs: [
        "Sahaswan has long-standing inter colleges and a good number of private schools, following the UP board or CBSE. They prepare students well for state and national tests. What the town lacks, on the evidence we could find, is an IB World School or a Cambridge or Edexcel IGCSE centre, so we do not name any local school as offering either.",
        "Budaun city, the district headquarters, offers a wider choice of CBSE schools and coaching classes, and Bareilly and Moradabad serve as the bigger educational hubs of the region. Families considering an international school usually look beyond this circuit, to Delhi NCR, Lucknow or the Doon valley.",
        "A useful habit is to ask any school, in writing, which programmes it is authorised to run and from which year group. International schools also set their own entry tests, and families should ask about them early.",
        "Because online tutors teach from across India, your child can prepare for that test in Sahaswan and continue with the same tutor after the move.",
      ],
    },
    {
      heading: "Why do Sahaswan families ask about IB and IGCSE at all?",
      paragraphs: [
        "Three situations come up again and again. The first is a transfer: a parent in government service, banking or a public-sector company is posted to a city with international schools, and the child must change syllabus within weeks. The second is ambition for study abroad, where a student or parent sees the IB Diploma or IGCSE as a stronger start than a state board. The third is a cousin or neighbour who already studies an international curriculum and sets an example.",
        "In each case the immediate need is a tutor who can explain how IB or IGCSE questions are framed. A student with strong recall may score well in the UP board yet struggle with an IB command term such as evaluate or discuss.",
        "Another common case is a family running a business with contacts in the Gulf or Europe. They may plan a move for a child in Class 8 or 9 and want the child to arrive ready for English-medium science and mathematics.",
        "Whatever the reason, lessons begin with a short diagnostic, so the tutor knows where your child stands.",
      ],
    },
    {
      heading: "How do UP board, CBSE, IB and IGCSE compare for a student from Sahaswan?",
      paragraphs: [
        "Each system has its own logic. The UP board and CBSE are designed around chapter-based learning and end-of-year exams that feed into Indian entrance tests. IB and IGCSE ask students to apply ideas and to explain their reasoning in writing, which suits students who plan to study abroad.",
        "Mathematics generally transfers well between systems. Science transfers less smoothly because IB and IGCSE papers often start from data or an unfamiliar context. English is the biggest change for students from Hindi-medium schools.",
        "The table below is a planning aid, not a verdict on which is better, since the right choice depends on the child and the plan.",
      ],
      table: {
        caption: "UP board, CBSE, IB and IGCSE from a Sahaswan family's point of view",
        columns: ["Question", "UP board", "CBSE", "IB", "IGCSE"],
        rows: [
          ["Medium", "Hindi or English", "English or Hindi", "English mainly", "English mainly"],
          ["How learning is judged", "Board papers on the syllabus", "Board papers with application questions", "Exams plus internal assessments", "Subject papers with some coursework"],
          ["Main next step", "Intermediate then entrance exams", "Class 12 then CUET, JEE or NEET", "University in India or abroad", "A Level, IB or Class 11"],
          ["Typical student", "Staying in UP", "Might move across India", "Plans to study abroad", "Wants a structured route to A Level or IB"],
        ],
      },
    },
    {
      heading: "What shapes the cost of IB and IGCSE tuition for Sahaswan families?",
      paragraphs: [
        "Every family receives a written rate before booking, and there is no published price list. The useful thing to know in advance is what makes a rate higher or lower.",
        "The main factors are the course and level, the tutor's experience with that particular syllabus, the number of hours each week and the length of a lesson. A Higher Level Diploma science tutor is priced differently from a tutor supporting IGCSE English.",
        "Planning also helps. A steady weekly lesson followed by extra sessions before exams usually costs less than repeated emergency blocks. Families can agree a weekly limit and review it after a month.",
        "Online lessons save the travel to Bareilly, Moradabad or Delhi NCR that a class elsewhere would demand, and the free first lesson lets you test the tutor before any payment.",
      ],
    },
    {
      heading: "Online home tuition, local coaching, private tutors or self-study: what works in Sahaswan?",
      paragraphs: [
        "Coaching classes in Sahaswan, Budaun and Bareilly are built for board and entrance exams. They do not usually teach IB or IGCSE, and their group size leaves little room for individual feedback.",
        "A private home tutor from the town can help a younger child with basics, although few have taught an international syllabus. Online one-to-one tutoring provides a specialist for each subject and a flexible hour.",
        "Self-study is useful for revision but it cannot replace feedback, because students repeat errors they cannot see. The table sets out the comparison.",
      ],
      table: {
        caption: "Four routes to IB or IGCSE help from Sahaswan",
        columns: ["Route", "Advantage", "Drawback", "Best used for"],
        rows: [
          ["Online one-to-one tutoring", "Specialist, flexible, written notes", "Needs steady internet", "Exact IB or IGCSE subject help"],
          ["Coaching class in Bareilly or Budaun", "Structured, peer group", "Little IB or IGCSE content, travel", "Indian board and entrance exams"],
          ["Private tutor in town", "Familiar, face to face", "Few with international syllabus experience", "Younger children"],
          ["Self-study with papers", "Cheap, flexible", "No correction of mistakes", "Late revision"],
        ],
      },
    },
    {
      heading: "Fog, harvest, Holi and Kanwar weeks: how does the year run in Sahaswan?",
      paragraphs: [
        "Western Uttar Pradesh has a sharp seasonal rhythm. Winter brings dense fog that shortens the day and sometimes closes schools, while summer heat from April to June makes midday study hard. The monsoon, from July, brings heavy rain and occasional flooding along the rivers of the region.",
        "Farming shapes family time as well. Wheat harvest falls in April, and families with land take children to help or disrupt routines for a week or two. Holi in March and Diwali in autumn are the major festivals, and the Shravan month brings Kanwar traffic on the roads.",
        "IB Diploma papers are held in May, and Cambridge IGCSE runs in May to June and October to November. A student aiming for the May session must plan the final revision weeks around harvest and heat.",
        "The table shows how a year can be planned so that lessons are heavy where the calendar is light.",
      ],
      table: {
        caption: "A Sahaswan year mapped to IB and IGCSE preparation",
        columns: ["Months", "Local conditions", "Study plan"],
        rows: [
          ["July to September", "Monsoon and the Kanwar month", "Early-term foundations, steady weekly lessons"],
          ["October to November", "Dussehra, Diwali, Cambridge October series", "Targeted revision, mock papers"],
          ["December to January", "Fog and cold, school holidays", "Holiday blocks for boarders and IA planning"],
          ["February to March", "Holi and pre-exam weeks", "Two sessions a week with timed papers"],
          ["April to June", "Wheat harvest, heat and May papers", "Early or evening lessons, then rest"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Sahaswan study next?",
      paragraphs: [
        "In India, the IB Diploma is recognised as equivalent to Class 12 by the Association of Indian Universities, and students apply through CUET-UG or directly to institutions. JEE and NEET have their own eligibility criteria, which change, so read the latest notification each year.",
        "Students from Rohilkhand often look to Delhi University, Aligarh Muslim University, Banaras Hindu University and private universities in Delhi NCR, while a growing number consider the UK, Canada, the US, Australia and the Gulf. Higher Level subject choices and predicted scores matter in those applications.",
        "IGCSE students generally move to A Level, the IB Diploma or Class 11 of an Indian board. The decision is made in Class 10, and it depends on the schools that the family can reach.",
        "Tutors explain what each course demands, but admissions decisions belong to the universities, so please verify deadlines directly.",
      ],
    },
    {
      heading: "IB Mathematics and the sciences: where do students from the UP board need help?",
      paragraphs: [
        "IB Mathematics Analysis and Approaches is algebra-heavy and suits students who may study engineering or science. Applications and Interpretation leans on data and modelling and suits economics, commerce and life science students. Both are offered at Standard and Higher Level.",
        "UP board students are often strong in arithmetic and algebra, yet less used to explaining a method in words or using a graphic calculator. A tutor builds those habits early, since they shape Paper 2 and Paper 3 marks.",
        "IB sciences ask for investigation, so the internal assessment is a student-designed experiment. A tutor can discuss the method, data analysis and error treatment, but the plan, the data and the report must be the student's own.",
        "English scientific vocabulary is usually the hidden hurdle for Hindi-medium students, so tutors keep a growing glossary with Hindi equivalents to bridge the gap.",
      ],
    },
    {
      heading: "How do IGCSE tiers and subject choices work for a first-time family?",
      paragraphs: [
        "Many IGCSE subjects come in Core and Extended tiers. Core leads to grades C to G and Extended to A* to G. Students planning A Level or IB sciences and mathematics are usually advised to take Extended.",
        "A standard IGCSE set has five to eight subjects, including English, Mathematics, one or more sciences and a language. If a student wants medicine or engineering, Physics, Chemistry and Mathematics should stay in the mix, and Additional Mathematics helps with the next step.",
        "Cambridge and Edexcel papers differ even when topics overlap, so the tutor works from the syllabus code the target school uses. Please tell us the board at the start.",
        "A student from Hindi-medium schooling often benefits from starting with English and Mathematics, because these two subjects underpin everything else.",
      ],
    },
  ],

  process: [
    { title: "Send your details", description: "Share the programme or board, subject, level, current marks and the evening hours that suit your Sahaswan household." },
    { title: "Look at tutor options", description: "We shortlist by syllabus and level, then describe each tutor's background." },
    { title: "Book a free lesson", description: "A live online lesson on a real topic, free and with no obligation." },
    { title: "Fix the plan", description: "The tutor sets out topics and timing, and the rate is written down before you commit." },
    { title: "Continue weekly", description: "Regular lessons, written notes, reviews every few weeks and a tutor swap if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Course-level matching", description: "Tutors are picked for the exact IB course or IGCSE code, not a general subject." },
    { title: "Plain about format", description: "Lessons are online; we never say a tutor will visit Sahaswan." },
    { title: "Season-aware timing", description: "We plan around fog, harvest and festival weeks." },
    { title: "Parents stay informed", description: "A short note follows each lesson." },
    { title: "Coaching, not ghost-writing", description: "No tutor writes a student's assessed work." },
    { title: "Free first lesson", description: "Test the tutor and the topic before any decision." },
  ],

  faqs: [
    { question: "Can Sahaswan students get IB and IGCSE tutoring?", answer: "Yes, online. Tutors teach live and one to one from elsewhere in India, so a Sahaswan student can study with a specialist at home. The first lesson is free, giving you a chance to judge the tutor and approach before any commitment." },
    { question: "Does a tutor visit my house in Sahaswan?", answer: "No. In-person home tuition runs only in Gurugram and parts of Delhi NCR. Sahaswan families get online home tuition: a private lesson at home on a laptop, with a shared whiteboard and a written note to parents after every session." },
    { question: "Is there any IB or IGCSE school in Sahaswan?", answer: "We could not confirm one. Schools in Sahaswan and Budaun district mainly follow the UP board or CBSE. The nearest confirmed international options are in Delhi NCR, Lucknow and Dehradun, and each school's current offer should be checked directly." },
    { question: "My child studies in Hindi medium. Can IB or IGCSE work for us?", answer: "It can, with preparation. English reading and scientific vocabulary are the main hurdles. A tutor starts with a diagnostic, builds a glossary with Hindi equivalents and introduces IB or IGCSE question styles gradually, so the change feels manageable." },
    { question: "How much does tuition cost?", answer: "Rates are quoted in writing before you book, and there is no public price list. The figure depends on the programme, level, the tutor's experience, hours per week and lesson length. Online lessons save travel to a larger city." },
    { question: "Which IB Mathematics course should we choose?", answer: "Analysis and Approaches suits students heading towards engineering or science, while Applications and Interpretation suits economics, commerce and life sciences. The school advises on the choice, and a tutor can show what each course demands week by week." },
    { question: "Can you prepare a child for an entry test at an international school?", answer: "Yes. We ask which school and year, then build practice on English, Mathematics and sometimes science or reasoning. Preparation usually starts a term or two before the test, with practice papers reviewed together." },
    { question: "Can tutors write Internal Assessments or the Extended Essay?", answer: "No. Tutors coach method, structure and feedback, but they never write or rewrite an Internal Assessment, Extended Essay, TOK essay or coursework. The IB and Cambridge expect that the work is the student's own." },
    { question: "When are the IB and IGCSE exams?", answer: "IB Diploma exams are held in May, with results in early July, and some schools run a November session. Cambridge IGCSE has May to June and October to November series. A tutor plans preparation from the session your child will sit." },
    { question: "Which IGCSE boards do you teach?", answer: "Cambridge IGCSE and Pearson Edexcel IGCSE. Content overlaps, but question styles and mark schemes differ, so tell us the board and code at the start and the tutor will prepare your child for that specification." },
    { question: "Is Core or Extended better for IGCSE Mathematics?", answer: "Extended suits students who plan A Level or IB Mathematics, Physics or Chemistry. Core suits students who need a steady base. The school decides entry, and a tutor helps your child get ready for whichever tier is chosen." },
    { question: "What happens in the fog season if lessons are disturbed?", answer: "Online lessons are not affected by road fog, but power and connection can be. We agree a fallback, such as a mobile hotspot or a rescheduled slot, and the tutor sends notes so your child does not lose the content." },
    { question: "How does the free trial work?", answer: "Send a topic or past-paper question and a tutor teaches it live for about a lesson's length at no cost. You then choose whether to continue, ask for a different tutor or stop, with no obligation." },
    { question: "Can lessons include Hindi explanations?", answer: "Yes. Lessons are mainly in English because the exams are in English, yet tutors can explain difficult ideas in Hindi when that helps. Tell us your preference in the first message and we will try to match it." },
    { question: "My child boards in another city. Can tutoring run during holidays?", answer: "Yes. We plan holiday blocks using the school's topic list, then run lessons on alternate days or daily. Afterwards the tutor leaves hand-over notes so the boarder returns to school with a clear plan." },
    { question: "What if we want a different tutor?", answer: "Tell us by email or WhatsApp and we arrange a new tutor, passing on your lesson notes. Good fit matters more than staying with the first match." },
    { question: "How do we begin?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the programme or board, subject, level and preferred hours. We reply with a tutor shortlist and free trial slots." },
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
    { label: "IB and IGCSE tutoring in Moradabad", href: "/moradabad/", description: "A Rohilkhand city close to Budaun district." },
    { label: "IB and IGCSE tutoring in Chandausi", href: "/chandausi/", description: "A neighbouring trading town served online." },
    { label: "IB and IGCSE tutoring in Rampur", href: "/rampur/", description: "Another Rohilkhand city with online IB and IGCSE tutors." },
  ],

  closingHeading: "Try a free IB or IGCSE lesson from Sahaswan",
  closingBody:
    "Tell us the programme or board, the subject and level, and the hours that work at home. You will receive tutor options and trial slots, all online and one to one, free and with no obligation. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
