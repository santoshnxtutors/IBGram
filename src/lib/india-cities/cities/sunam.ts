import type { CitySeoPage } from "../types";

/**
 * /sunam/ - IB and IGCSE tutoring page for Sunam, Sangrur district, Punjab (Malwa).
 * Online-only delivery. No IB or Cambridge school was confirmed in Sunam, so stripSchools is empty and the
 * clusters are labelled nearby cities whose schools are already named on sibling pages.
 */
export const sunam: CitySeoPage = {
  slug: "sunam",
  countryName: "Sunam",
  countryNameLong: "Sunam, Punjab",
  demonym: "Sunam",
  state: "Punjab",
  stateCode: "IN-PB",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons work around Baisakhi and the wheat harvest, the stubble-smoke weeks after paddy, Lohri and the foggy winter mornings, and your child's school hours",
  lastUpdated: "2026-09-21",
  geo: { latitude: 30.1290, longitude: 75.7990 },
  wikipedia: "https://en.wikipedia.org/wiki/Sunam",
  alternateNames: ["Sunam Udham Singh Wala", "Sunam Sangrur", "Sunam Punjab"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sunam | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Sunam students in Punjab: private one-to-one online lessons taught from home, with Malwa calendar planning and a free trial class.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Sunam",
  heroEyebrow: "ONE-TO-ONE IB & IGCSE TUITION FOR SUNAM STUDENTS",
  heroSubtitle:
    "If you are after private tuition at home for an IB or IGCSE subject in Sunam, you will find the local pool narrow, so lessons run online:",
  primaryKeyword: "IB and IGCSE tutors in Sunam",
  imageAltText: "A Sunam student preparing for IGCSE Mathematics with an online tutor at a home study desk",
  secondaryKeywords: [
    "IB tutor Sunam",
    "IGCSE tutor Sunam",
    "IB home tuition Sunam",
    "IGCSE home tuition Sunam",
    "IB private tuition Sunam",
    "IB Maths tutor Sunam",
    "IGCSE Maths tutor Sunam",
    "IB Physics tutor Sunam",
    "IB Chemistry tutor Sunam",
    "IB Biology tutor Sunam",
    "IB DP tutor Sunam",
    "IB MYP tutor Sunam",
    "IB PYP tutor Sunam",
    "IGCSE online tuition Sunam",
    "Cambridge IGCSE tutor Sunam",
    "IB tutor Sunam Udham Singh Wala",
    "IB tutor Sangrur district",
    "online IGCSE tutor Punjab Malwa",
    "IB tutor Cheema",
  ],

  heroTrustPoints: [
    "Tutors are paired by exact IB course and level, or by IGCSE board and code",
    "Every lesson is online; a tutor at your door exists only in Gurugram and parts of Delhi NCR",
    "One complete free trial lesson comes first",
    "Independent of the IB, Cambridge, Pearson Edexcel and every school or college mentioned here",
  ],
  heroStats: [
    { value: "Online", label: "Live one-to-one from home" },
    { value: "PYP to DP", label: "IB from primary upward" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
    { value: "Free trial", label: "Try before committing" },
  ],

  intro: {
    heading: "Who uses IB and IGCSE tutoring in a Malwa town like Sunam?",
    paragraphs: [
      "Sunam is a grain-market and trading town in Sangrur district, known across Punjab as the birthplace of Udham Singh and home to a dental college and a government college. Its railway station carries his name. Schools in town follow the Punjab board or CBSE, and we could not confirm any school in Sunam that teaches the IB or a Cambridge or Edexcel IGCSE, so this page names none.",
      "Even so, international curricula come up in conversation here more than one might expect. Malwa families have cousins, siblings and parents in Canada, Australia and the UK, and many plan for their own children to follow. A child who already studies IB or IGCSE, or who moves into it in Class 9 or 11, is easier to place abroad and easier to place in a city school with an international stream.",
      "Tutors do not turn up at Sunam homes; door-to-door teaching is run only in Gurugram and parts of Delhi NCR. A family here gets online home tuition instead, meaning a private hour with the child at the family desk, a shared whiteboard and a written recap afterwards.",
      "IB Gram works independently of the IB, Cambridge, Pearson Edexcel and any school or college named on this page. A tutor teaches and marks practice work; writing an Internal Assessment, Extended Essay, TOK essay or coursework for a student is never part of it.",
    ],
    bullets: [
      "Private lessons across PYP, MYP and DP, with Cambridge and Edexcel IGCSE alongside",
      "Punjabi, Hindi or English explanations where they help understanding",
      "Schedules that respect harvest, festivals and fog",
      "Free trial and written rates before any booking",
    ],
  },

  programmesIntro:
    "The four IB programmes reach Sunam households in different ways, mostly through a planned move or a boarding school. The descriptions below explain what each stage involves and how it tends to appear in Sangrur district.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 3-12",
      description:
        "The programme organises primary learning around themes that connect subjects, and pupils complete a final Exhibition. Private tutoring keeps reading, writing and number skills strong, so that the inquiry approach has something solid to build on.",
      countryNote:
        "A Sunam PYP learner is often a child whose family is returning from abroad or preparing a move to a school in Ludhiana or the Mohali belt.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Students study eight subject groups, are assessed on criteria and finish with a Personal Project. The difficulty for many is the step from remembering a topic to writing a reasoned answer that fits a rubric.",
      countryNote:
        "MYP help from Sunam typically serves a boarder who studies away and comes home for winter and summer breaks.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma student carries six subjects, three at Higher Level and three at Standard Level, and adds Theory of Knowledge, the Extended Essay and CAS. The big written exams come in May, while internal assessments pile up across both years.",
      countryNote:
        "Diploma students linked to Sunam study in another city, often in the Chandigarh and Mohali area or further afield, and tutoring follows that school's calendar.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take Diploma courses with a career-related qualification and a reflective project, a route suited to learners who want a practical focus.",
      countryNote:
        "CP is rare in Punjab, so a Sunam enquiry normally concerns a specific Diploma course inside a student's CP choice, such as Business Management or English.",
    },
  ],

  subjectsIntro:
    "Every match starts with the course, the level and the exam session your child will sit. The list below shows IB subjects that Malwa families ask about most.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Algebra, calculus, vectors and proof, written with full working." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, financial mathematics and modelling with technology." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, electricity, waves and modern physics with careful units." },
    { name: "Chemistry", levels: "SL / HL", description: "Quantitative chemistry, bonding, equilibrium and organic mechanisms." },
    { name: "Biology", levels: "SL / HL", description: "Cells, genetics, ecology and human physiology with data questions." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Groundwater, crop and soil systems make strong Punjab case studies." },
    { name: "Economics", levels: "SL / HL", description: "Markets, trade and development, with diagrams and evaluation." },
    { name: "Business Management", levels: "SL / HL", description: "Finance, marketing and operations, tied to family business examples." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming, algorithms and data structures with clean pseudocode." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Analysis of texts, comparison and the individual oral." },
    { name: "Punjabi B", levels: "SL", description: "A route for students who wish to keep Punjabi in the Diploma; whether a tutor is free is checked at the trial stage." },
    { name: "Hindi B", levels: "SL / HL", description: "A common second-language route with reading and writing support." },
    { name: "Psychology", levels: "SL / HL", description: "Research methods and studies, with clear short and long answers." },
    { name: "Theory of Knowledge", levels: "Core", description: "Knowledge questions and exhibition planning, coached without writing the essay." },
  ],
  igcseSubjectsIntro:
    "IGCSE tutoring in Sunam often prepares a student for a course at a school in another city, or supports a family with overseas plans. Tutors work from the exact syllabus code.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics, with well laid-out working." },
    { name: "IGCSE Additional Mathematics", levels: "Class 10", description: "Differentiation, integration and vectors ahead of A Level or the Diploma." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, energy, circuits and waves, with practical-paper practice." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, reactivity, energy changes and organic chemistry." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, enzymes, inheritance and ecosystems with clear extended answers." },
    { name: "IGCSE English First Language", levels: "Class 9-10", description: "Writing for effect, summary and unseen-text analysis." },
    { name: "IGCSE English as a Second Language", levels: "Class 9-10", description: "A gentler entry for students from Punjabi or Hindi-medium schooling." },
    { name: "IGCSE Punjabi", levels: "Class 9-10", description: "Language practice for heritage speakers; availability is confirmed at the trial stage." },
    { name: "IGCSE Business Studies", levels: "Class 9-10", description: "Business activity, marketing and finance, ideal for trading families." },
    { name: "IGCSE Accounting", levels: "Class 9-10", description: "Double entry, statements and ratios with real-world style questions." },
  ],

  regionsTitle: "Sunam and the Sangrur district towns we support",
  regionsIntro:
    "Any home with a decent connection can take an online lesson, so these notes are about daily routine and not delivery. They cover the places around Sunam that families mention most, and none is claimed to hold an IB or Cambridge school.",
  regions: [
    { name: "Sunam old town and grain market", note: "Trading families keep long shop hours, so lessons often begin after the market closes." },
    { name: "Around Sunam Udham Singh Wala railway station", note: "A well-connected area on the Ludhiana to Hisar line, with commuting families who value fixed slots." },
    { name: "Near the Guru Nanak Dev Dental College", note: "Staff and student households live here, and they are familiar with professional education paths." },
    { name: "Near Shaheed Udham Singh Government College", note: "A college neighbourhood with teachers' families who often look for supplementary tuition." },
    { name: "Chhajli", note: "A village near Sunam where farming households plan lessons around sowing and harvest weeks." },
    { name: "Cheema", note: "A nearby town in Sangrur district with a market and mixed farming base." },
    { name: "Longowal", note: "A town to the south whose families often look to Sangrur or Patiala for schooling." },
    { name: "Sangrur city", note: "The district headquarters about thirteen kilometres away, with the widest range of schools and coaching in the district." },
  ],

  schoolClusters: [
    {
      city: "Sunam and Sangrur district",
      note: "No IB World School and no Cambridge or Edexcel IGCSE centre turned up for Sunam in our checks. Schools in town run the Punjab board or CBSE. Since curricula change, ask any school for its current authorisation in writing.",
      schools: [],
    },
    {
      city: "Nearby: Ludhiana",
      note: "About ninety kilometres from Sunam, Ludhiana is the closest large city with confirmed international schools.",
      schools: ["Britannica International School", "Harvest International School"],
    },
    {
      city: "Nearby: Mohali and Chandigarh",
      note: "Roughly two and a half hours away, the tricity has the widest spread of IB and British-curriculum schools in the region.",
      schools: ["Oakridge International School, Mohali", "Strawberry Fields High School, Chandigarh"],
    },
    {
      city: "Nearby: Jalandhar",
      note: "A Cambridge-curriculum school is referenced for Jalandhar. Check its current offer and entry rules with the school directly.",
      schools: ["Cambridge International School, Jalandhar"],
    },
  ],
  schoolDisclaimer:
    "Schools are named only to show where international curricula are available near Sunam. IB Gram has no affiliation with any school, and offers and entry rules change, so please confirm with the school.",

  tutorsIntro:
    "Tutors log in from several Indian cities and keep Indian Standard Time, so Sunam students never adjust for time zones. A profile lists programme, subject, level and teaching record; the first lesson costs nothing.",

  modesIntro:
    "Each option below is a live lesson with one tutor and one student. A tutor will not arrive at a Sunam doorstep, since house visits exist solely in Gurugram and parts of Delhi NCR. What changes from one format to the next is the level of planning around the lessons.",
  modes: [
    {
      title: "Weekly online home tuition",
      description:
        "One tutor, one learner and a regular weekly hour at the family laptop. Choose this if steady progress through the school year matters more than a sudden sprint.",
      bullets: [
        "The same tutor for each term",
        "Worked solutions on a shared whiteboard",
        "A short note to parents after each class",
      ],
    },
    {
      title: "Overseas-ready preparation",
      description:
        "A plan for students who expect to study abroad, with extra focus on English writing, subject depth and exam technique for the target curriculum.",
      bullets: [
        "English writing practice each week",
        "Subject levels chosen with future courses in mind",
        "Mock papers under exam conditions",
      ],
    },
    {
      title: "Break-time intensive",
      description:
        "Daily or alternate-day lessons during school holidays for boarders or students catching up. The tutor uses the school's topic list.",
      bullets: [
        "Short blocks of one to two weeks",
        "Hardest topics first",
        "Hand-over notes for the new term",
      ],
    },
  ],

  sections: [
    {
      heading: "Why do families in Sunam and Malwa ask about international curricula?",
      paragraphs: [
        "Punjab's link with the wider world is unusually strong. Many Sunam families have relatives in Canada, Australia, the UK, New Zealand or the Gulf, and the idea that a child might study abroad is often in the air. An IB or IGCSE background is seen as a way to arrive prepared.",
        "A second reason is schooling in the big cities. Ludhiana, Mohali and Chandigarh have international schools that attract families from smaller Malwa towns, sometimes for day places, sometimes for boarding. A child moving from a Punjab board school into one of them needs help with English, mathematics and the style of questions.",
        "A third reason is curiosity about different teaching methods. Some parents have read or heard that IB encourages projects and independent thinking, and they want to see whether their child responds to it before they commit.",
        "Whatever the reason, the first step is a conversation about current marks and target syllabus, followed by a free trial lesson that tells both sides whether the approach works.",
      ],
    },
    {
      heading: "Which international schools can a Sunam student actually reach?",
      paragraphs: [
        "Sunam itself turned up no school that we could confirm for the IB or for Cambridge or Edexcel IGCSE, so none is named here. Town schools mostly run the Punjab board or CBSE, and the colleges serve local needs well.",
        "Families look to Ludhiana at around ninety kilometres, to Mohali and Chandigarh at about two and a half hours, and to Jalandhar. Ludhiana suits day travel for some, while the tricity is more often chosen for boarding.",
        "When comparing schools, ask which programmes each is authorised for, which year groups it admits and what it tests at entry. Schools revise these details, so a call or visit is worth more than a page like this one.",
        "An online tutor can prepare your child for the entry test and continue working after admission, so that preparation and support come from the same person.",
      ],
    },
    {
      heading: "Punjab board, CBSE, IB and IGCSE: how do they differ?",
      paragraphs: [
        "The Punjab board and CBSE are the usual routes in Sunam, and they lead directly to Indian entrance tests. IB and IGCSE differ in assessment style, in the use of English and in the weight they give to explanation.",
        "Mathematics usually moves across systems with modest adjustment. Sciences need more, as IB and IGCSE questions often start from data or a context. English is the largest change for students from Punjabi or Hindi-medium schools.",
        "The table gives a quick comparison, though the right choice depends on the child's goals and on which schools are reachable.",
      ],
      table: {
        caption: "Four systems compared for a Sunam family",
        columns: ["Point", "Punjab board", "CBSE", "IB", "IGCSE"],
        rows: [
          ["Language", "Punjabi, Hindi or English", "English or Hindi", "English mainly", "English mainly"],
          ["Assessment", "Board papers", "Board papers with application", "Exams plus internal assessment", "Subject papers, some with coursework"],
          ["Usual next step", "Class 12 then entrance exams", "CUET, JEE or NEET routes", "University in India or abroad", "A Level, IB or Class 11"],
          ["Good fit", "Families staying in Punjab", "Families who may relocate within India", "Students aiming abroad", "Students wanting a staged route to A Level or IB"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Sunam, and why does it vary?",
      paragraphs: [
        "No price list is published; a written quote always precedes booking, so here is what drives the number.",
        "Course and level come first: a Higher Level Diploma science specialist with marking experience is priced differently from a tutor supporting IGCSE English. Weekly hours and lesson length follow.",
        "Timing matters too. A steady weekly lesson with extra sessions before exams usually costs less overall than repeated emergency blocks. Families often set a weekly limit and review it monthly.",
        "Because lessons are online, there is no bus to Sangrur, Patiala or Ludhiana, and the free first lesson means quality is judged before any money moves.",
      ],
    },
    {
      heading: "Online tuition, coaching classes, private tutors or self-study: what suits a Sunam student?",
      paragraphs: [
        "Sunam and nearby towns have coaching classes and home tutors for the state board, CBSE and competitive exams. Those serve local goals well. For IB and IGCSE the options thin out fast, because few local teachers have worked with those syllabi.",
        "Online private lessons close that gap, because the tutor is selected for subject and level and not for postcode. The table sets the four routes side by side.",
        "Self-study is good for final revision, but without feedback students repeat mistakes. Most successful students combine regular lessons with self-study.",
      ],
      table: {
        caption: "Study routes compared for IB and IGCSE from Sunam",
        columns: ["Route", "Strength", "Weakness", "Best used when"],
        rows: [
          ["Online one-to-one lessons", "Subject specialist, flexible hours, written notes", "Needs a steady connection", "You need exact IB or IGCSE help"],
          ["Coaching class in Sangrur or Patiala", "Structure and peers", "Little IB or IGCSE focus, travel time", "Preparing for Indian board or entrance exams"],
          ["Private tutor in Sunam", "Face to face, familiar", "Few have international syllabus experience", "Younger students needing basics"],
          ["Self-study with past papers", "Low cost, flexible", "No feedback on errors", "Late-stage revision"],
        ],
      },
    },
    {
      heading: "Harvest, stubble smoke, Lohri and fog: how does the Malwa year shape study?",
      paragraphs: [
        "Punjab's agricultural calendar sets family rhythm. Wheat harvest in April and the Baisakhi festival pull many families into fields and celebrations, while paddy harvest in October and November brings stubble smoke and sometimes poor air that keeps children indoors.",
        "Winter brings dense fog and cold, with Lohri in January as a festive break. Summers are hot, with temperatures climbing in May and June, so morning or evening lessons are kinder to students and to laptops.",
        "Sitting the IB in May means final revision lands in the hottest weeks, while an October IGCSE entry pushes revision into September, before the paddy harvest brings smoke. Whichever series applies, the tutor counts back from the paper dates.",
        "The table lays out how a year can be planned to keep lessons steady.",
      ],
      table: {
        caption: "A Sunam year mapped to IB and IGCSE preparation",
        columns: ["Months", "Local pattern", "Study plan"],
        rows: [
          ["July to September", "Monsoon and paddy growing season", "Early-term foundation lessons, October-series preparation"],
          ["October to November", "Paddy harvest, stubble smoke, Diwali", "Indoor lessons, timed papers, mock exams"],
          ["December to January", "Fog, cold and Lohri", "Holiday blocks and internal assessment planning"],
          ["February to March", "Pre-exam weeks", "Two sessions a week with past papers"],
          ["April to June", "Wheat harvest, Baisakhi, heat and May exams", "Early or evening lessons, then rest"],
        ],
      },
    },
    {
      heading: "What are the university pathways for an IB or IGCSE student from Sunam?",
      paragraphs: [
        "Within India, the IB Diploma is treated as equal to Class 12 under Association of Indian Universities equivalence, and entry then runs through CUET-UG or a university's own route. JEE and NEET have conditions that change by year, so read the current notification before choosing subjects.",
        "Many Punjab students look at Panjab University, Delhi University and private universities in the region, while a large number aim at Canada, Australia, the UK, the US and New Zealand. Higher Level subject choices and predicted or final scores matter in those applications.",
        "After IGCSE, most students go to A Level, the IB Diploma or Class 11 of an Indian board. The choice is made during Class 10 and depends on which schools a household can realistically reach.",
        "A tutor can explain what a course demands; admissions decisions rest with the universities, so check every deadline and requirement with them directly.",
      ],
    },
    {
      heading: "IB Mathematics and sciences: where do Punjab board students need extra help?",
      paragraphs: [
        "Two IB Mathematics courses exist. Analysis and Approaches leans on algebra, calculus and proof and suits future engineers and scientists. Applications and Interpretation leans on data, modelling and calculator work and suits economics, commerce and life science. Each comes at Standard or Higher Level.",
        "Punjab board students usually handle procedure well; the IB asks for more written explanation, modelling, and confident use of a graphic calculator, and a tutor starts on those early.",
        "Each science has an internal investigation that the student designs and runs alone. Tutors may talk through how to plan a fair test, handle uncertainty in data and read the assessment criteria, but the experiment, the numbers and the write-up stay the candidate's own.",
        "Scientific English is a common hurdle, so tutors build a glossary with Punjabi or Hindi equivalents and revisit it weekly.",
      ],
    },
    {
      heading: "IGCSE Core and Extended tiers: what should a first-time family know?",
      paragraphs: [
        "Some IGCSE subjects are offered at two tiers. Core tops out at grade C; Extended reaches A*. A student eyeing A Level or IB sciences and mathematics is usually entered for Extended, which asks for more algebra, graphs and sustained reasoning.",
        "Most candidates sit five to eight subjects: English, Mathematics, a science or more, and a language. Engineering or medicine stay open only if Physics, Chemistry and Mathematics remain, and Additional Mathematics gives a head start.",
        "Cambridge and Edexcel papers read differently even on shared topics, so say early which board your school uses.",
        "A student from a Punjabi or Hindi-medium school usually benefits from beginning with English and Mathematics, since these two subjects underpin every other one.",
      ],
    },
  ],

  process: [
    { title: "Send your brief", description: "Send us the programme or board, the subject, current marks, and which evenings are free in your Sunam home." },
    { title: "Review the tutor shortlist", description: "We match on syllabus and level, then explain each tutor's background." },
    { title: "Take a free lesson", description: "One live lesson on a real topic of your choice, at no cost and with no strings." },
    { title: "Agree the plan", description: "The tutor sketches topics and rhythm, and the quote is given in writing first." },
    { title: "Start regular lessons", description: "Weekly lessons, a written recap each time, a check-in every few weeks, and a swap of tutor whenever it is needed." },
  ],

  whyPoints: [
    { title: "Matched by syllabus", description: "We start from your child's course and pick a tutor who has taught it." },
    { title: "Frank about format", description: "Lessons are online; we never claim tutors visit Sunam." },
    { title: "Malwa-aware timing", description: "Harvest, smoke weeks, Lohri and fog are built into the plan." },
    { title: "Written follow-up", description: "Parents receive a short note after each lesson." },
    { title: "Honest coaching", description: "Tutors never write assessed work for students." },
    { title: "Free first lesson", description: "Judge the tutor and approach before committing." },
  ],

  faqs: [
    { question: "Can Sunam students find IB and IGCSE tutors?", answer: "Yes, and they teach online. A specialist from elsewhere in India joins your child's laptop for a live one-to-one lesson, so Sunam's lack of local IB or IGCSE teachers no longer matters. A free first lesson lets you test the fit." },
    { question: "Will a tutor come to my home in Sunam?", answer: "No tutor travels to Sunam. House visits are a Gurugram and Delhi NCR service only. What you get here is the same private attention through a screen: your child at the family desk, the tutor drawing on a shared board, and a summary for you once the lesson ends." },
    { question: "Is there an IB or IGCSE school in Sunam?", answer: "Not that we could confirm. Sunam's schools run the Punjab board or CBSE, and the nearest confirmed international options sit in Ludhiana, the Mohali and Chandigarh area and Jalandhar. Verify current status with each school yourself." },
    { question: "We plan for our child to study abroad. Should we start IB or IGCSE early?", answer: "Starting early can help, especially with English writing and subject depth. A tutor can assess where your child stands and suggest whether IGCSE in Class 9 and 10 or the IB Diploma later fits your plan, but the school and target universities decide the route." },
    { question: "What does tuition cost?", answer: "We do not publish prices; a written quote reaches you before any booking. Four things set it: which programme and level, how seasoned the tutor is in that exact course, how many lessons a week, and how long each runs. No travel to Ludhiana or Patiala is needed, which is a real saving for many Sunam households." },
    { question: "Can a tutor prepare my child for an international school admission test?", answer: "Yes. Tell us the target school and class, and the tutor builds practice around that test, typically English and Mathematics and at times science or reasoning. A term or two of lead time works well, with practice papers marked line by line." },
    { question: "Which IB Mathematics course is right?", answer: "The answer follows the degree your child may want. Analysis and Approaches is the stronger base for engineering, mathematics and physical science; Applications and Interpretation fits economics, business, psychology and biology. Teachers at the school usually guide the pick, and a tutor can walk you through a sample week of each." },
    { question: "Can tutors write Internal Assessments or Extended Essays?", answer: "No. A tutor explains, questions, corrects and gives feedback on drafts the student wrote. Nobody writes or rewrites part of an Internal Assessment, Extended Essay, TOK essay or coursework, because IB and Cambridge rules make that the candidate's own work." },
    { question: "When are IB and IGCSE exams held?", answer: "May is the main IB Diploma session, results follow in July, and a handful of schools add a November sitting. Cambridge IGCSE is split between a summer series and an autumn one. Ask the school which sitting your child is entered for; the tutor counts back from that date and puts the heaviest lessons into the last eight weeks." },
    { question: "Which IGCSE boards do you cover?", answer: "Both Cambridge and Pearson Edexcel IGCSE. Many topics repeat across the two, yet the wording of questions and the mark schemes do not, so the exact board and code matter. Give us both at the start and the tutor works only from that specification." },
    { question: "Is Core or Extended better for IGCSE Mathematics?", answer: "Extended is the safer tier for a student who may take A Level or IB Mathematics or a science later, since it keeps every grade open. Core fits a child who first needs confidence with the basics. Entry is settled by the school's teachers, and the tutor then trains your child for that tier's papers." },
    { question: "How do stubble-smoke weeks affect lessons?", answer: "Online lessons keep going indoors, so poor air outside does not interrupt them. We plan timed papers and mock exams for that period, and agree a backup slot in case of power cuts or school closures." },
    { question: "How does the free trial work?", answer: "Pick a chapter or a stuck past-paper question, and a tutor teaches it live for roughly one lesson, free. You may then carry on, request another tutor, or walk away, with nothing owed." },
    { question: "Can lessons include Punjabi or Hindi explanations?", answer: "Mostly English, since every paper is set in English. Where a concept will not land, many tutors switch to Hindi for a minute, and a few can use Punjabi. Mention which you prefer when you write and we will try to pair accordingly." },
    { question: "My child boards away. Can tutoring run in the holidays?", answer: "Yes. Holiday lessons are planned from the school's topic list, run daily or on alternate days, and end with hand-over notes so the boarder goes back to term knowing the next step." },
    { question: "What if we want to change tutor?", answer: "If the chemistry between student and tutor is off, say so over email or WhatsApp. A replacement is arranged and your earlier notes travel with the student, so nothing learnt is lost." },
    { question: "How do we get started?", answer: "Email support@ibgram.com or WhatsApp +91 7439 368 115 and tell us the course, the level, the marks so far and when evenings are free in your house. A shortlist and trial times follow, and the choice stays with you." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "Online IB and IGCSE tutoring city by city across India." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person home tuition is offered." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "Programmes, subjects and tutor matching." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Higher and Standard Level, internal assessments, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Tell us what you need and book a free lesson." },
    { label: "IB and IGCSE tutoring in Sangrur", href: "/sangrur/", description: "The district headquarters near Sunam." },
    { label: "IB and IGCSE tutoring in Patiala", href: "/patiala/", description: "A nearby Malwa city served online." },
    { label: "IB and IGCSE tutoring in Barnala", href: "/barnala/", description: "A neighbouring Malwa town with online IB and IGCSE tutors." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson in Sunam",
  closingBody:
    "Send us a few lines: the board or programme, the subject, your child's current level and the evening hours your household keeps. A tutor shortlist and open trial slots come back to you, every lesson live on screen, private, free at the start and with nothing to sign. Reach support@ibgram.com, or WhatsApp +91 7439 368 115.",
};
