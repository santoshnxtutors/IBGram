import type { CitySeoPage } from "../types";

/**
 * /kottayam/ - IB and IGCSE tutoring page for Kottayam, Kerala. Online-only delivery: tutors do not
 * visit homes in Kottayam, since in-person home tuition is offered only in Gurugram and parts of
 * Delhi NCR. Directory checks found one unverified IGCSE listing in the district and no confirmed IB
 * school, so stripSchools is empty and clusters are labelled.
 */
export const kottayam: CitySeoPage = {
  slug: "kottayam",
  countryName: "Kottayam",
  countryNameLong: "Kottayam, Kerala",
  demonym: "Kottayam",
  state: "Kerala",
  stateCode: "IN-KL",
  flagCode: "in",
  countryCode: "IN",
  region: "Kerala, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson times respect the June start of the Kerala school year, the Onam and Christmas term exams and heavy monsoon evenings",
  lastUpdated: "2026-09-21",
  geo: { latitude: 9.5916, longitude: 76.5222 },
  wikipedia: "https://en.wikipedia.org/wiki/Kottayam",
  alternateNames: ["Kottayam Kerala", "Kottayam city"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Kottayam | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Kottayam: DP, MYP, PYP and Cambridge or Edexcel IGCSE, private one-to-one tuition at home, free trial.",
  h1: "IB and IGCSE Tutors in Kottayam: Private Tuition Taught Online",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR KOTTAYAM FAMILIES",
  heroSubtitle:
    "Kottayam has one of India's highest literacy rates and a long habit of serious schooling, yet private tuition at home for an IB or IGCSE syllabus is hard to find locally. IB Gram teaches it on live video: one tutor, one student, matched to the exact course. No tutor visits a Kottayam house, and lessons sit around the June-to-March school year.",
  primaryKeyword: "IB and IGCSE tutors in Kottayam",
  imageAltText: "A Kottayam student reviewing an IGCSE Chemistry mole calculation with an online tutor over video",
  secondaryKeywords: [
    "IB tutor Kottayam",
    "IGCSE tutor Kottayam",
    "IB home tuition Kottayam",
    "IGCSE home tuition Kottayam",
    "IB private tuition Kottayam",
    "IB Maths tutor Kottayam",
    "IGCSE Maths tutor Kottayam",
    "IB Physics tutor Kottayam",
    "IB Chemistry tutor Kottayam",
    "IB Biology tutor Kottayam",
    "IB DP tutor Kottayam",
    "IB MYP tutor Kottayam",
    "IB PYP tutor Kottayam",
    "IGCSE online tuition Kottayam",
    "online IB tutor Kottayam Kerala",
    "IB tutor Kodimatha",
    "IGCSE tutor Puthuppally",
    "IB tutor Ettumanoor",
    "IGCSE tutor Changanassery",
    "Cambridge IGCSE tutor Kottayam",
  ],

  heroTrustPoints: [
    "A tutor chosen for the course, tier and level on your child's timetable, not a generic international label",
    "Lessons happen online only; in-person home tuition runs solely in Gurugram and parts of Delhi NCR",
    "A complete trial lesson first, with nothing to pay",
    "Independent of the IB, Cambridge, Pearson, MG University and every school named here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB continuum" },
    { value: "CAIE and Edexcel", label: "Both IGCSE awarding bodies" },
    { value: "IST", label: "One clock for family and tutor" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition means in a town of readers and publishers",
    paragraphs: [
      "Kottayam calls itself the city of letters for good reason. It sits on the Meenachil River near the Vembanad backwaters, about 66 km south of Kochi, with a literacy figure of 99.66 percent in the 2011 census, the Rubber Board headquarters, Malayala Manorama and a publishing trade that produces most of Kerala's books. CMS College dates to 1817, and Mahatma Gandhi University, IIIT Kottayam and the Government Medical College give the district real weight in higher education.",
      "What the town does not obviously have is an IB or Cambridge school. A directory search turns up one school in the Kurichy area listed as IGCSE and CBSE, which we could not confirm independently, and no IB school at all. Families here mostly choose between the Kerala State Board, CBSE and ICSE, and those who want an international route look at Kochi or Thiruvananthapuram, or arrange an overseas move.",
      "Kottayam also has one of Kerala's larger overseas communities, with relatives in the Gulf, the United Kingdom, the United States, Canada and Australia. A returning family whose child has been studying IGCSE or IB in Dubai or Doha is a typical enquiry. So is a household whose child will leave in two years and wants a curriculum that travels.",
      "IB Gram answers with live online lessons. Nobody is sent to a home in Kottayam, since in-person home tuition is limited to Gurugram and parts of Delhi NCR. We are independent of the IB, Cambridge International, Pearson Edexcel and every school named here, and tutors coach rather than write your child's assessed work.",
    ],
    bullets: [
      "IB PYP, MYP and DP support, including TOK and Extended Essay process",
      "Cambridge and Pearson Edexcel IGCSE at Core, Extended, Foundation and Higher",
      "Private online tuition at home, live, on IST",
      "A free trial class and a written note after each lesson",
      "No home visits in Kottayam; those exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Kottayam students meet these programmes in three ways: as returning residents from overseas schools, as boarders or movers to Kochi and beyond, and as families planning an exit abroad. What a tutor does differs in each case, and the notes below describe each programme accordingly.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 6, roughly 3 to 12 years",
      description:
        "Learning is grouped under themes of inquiry instead of a fixed subject list, finishing with the Exhibition. There are no formal exams, so help is about reading comfort, number sense and expressing an idea in clear English.",
      countryNote:
        "A Kottayam child returning from a Gulf PYP school often needs Malayalam fluency and a smooth re-entry, while one heading out needs spoken English polish.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to 10, roughly 11 to 16 years",
      description:
        "Each subject is scored on criteria and linked by global contexts, ending with the Personal Project. A student who learned by rote needs to practise explaining and reflecting.",
      countryNote:
        "Children moving from a Kerala Syllabus or CBSE classroom often need help turning a textbook answer into an argued one, especially in Sciences and Individuals and Societies.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Classes 11 and 12, about 16 to 19 years",
      description:
        "Six subjects over two years, three at Higher Level, together with TOK, an Extended Essay and CAS. Internal Assessments are built up across both years.",
      countryNote:
        "With no Diploma school confirmed in Kottayam, most DP help goes to boarders at schools in Kochi, returnees from overseas and distance learners, and Mathematics and Chemistry lead the requests.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Classes 11 and 12, about 16 to 19 years",
      description:
        "Diploma courses are paired with a career-related study, a reflective project and a skills course. It suits students certain about a vocational direction.",
      countryNote:
        "CP is offered by very few Indian schools, so enquiries from Kottayam are rare; tutors support the Diploma courses within it and the reflective project.",
    },
  ],

  subjectsIntro:
    "A match always begins with course code and level. A Mathematics AA HL student and an AI SL student need different people even if they share a school. Malayalam and Hindi B are available for families who want home-language support as well.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Kerala students are usually fluent with algebra and calculus drills. The IB difference is proof-like reasoning and open Paper 3 problems that do not announce their method." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and calculator technique, with each result explained in a sentence a reader could follow." },
    { name: "IB Physics", levels: "HL / SL", description: "Content load is manageable. Marks turn on concise written explanation, uncertainty and practising Paper 1 and 2 against a clock." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Students from the Kerala syllabus know much of the content; the extra ask is data interpretation and a fully evaluated investigation." },
    { name: "IB Biology", levels: "HL / SL", description: "Breadth is wide, and answers are marked against the command term. Ecology and evolution questions reward linking the question to named examples." },
    { name: "IB Economics", levels: "HL / SL", description: "Labelled diagrams with live examples. Kerala's remittance economy, rubber prices and tourism provide concrete cases for evaluation." },
    { name: "IB Business Management", levels: "HL / SL", description: "Marks come from tying each concept to the firm named in the case, which suits students who grew up around shops, plantations and family enterprises once they learn to write it up." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Kottayam's reading habit is a real head start. Timed comparison essays and a fluent, unscripted oral still have to be rehearsed separately." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Trace tables, recursion, class diagrams and a solution folder the examiner can follow from the first page." },
    { name: "IB Psychology", levels: "HL / SL", description: "Each approach needs its landmark studies recalled accurately, then argued about in a long response written against a clock." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Flood plains, paddy fields and lagoon ecology are on the doorstep, so case material feels real; the marks reward quantifying it." },
    { name: "IB Geography", levels: "HL / SL", description: "Rivers, coastlines and migration are prime topics here; the skill to build is an enquiry whose method survives a sceptical reader." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 is about judging documents, Paper 2 about holding one line of argument for forty minutes, and each is coached on its own." },
    { name: "IB Malayalam and Hindi B", levels: "HL / SL", description: "Unseen reading, correct forms for letters and articles, and speaking without a script ahead of the interactive oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Talking through knowledge claims aloud, then stress-testing an exhibition commentary from the opposite side." },
  ],

  igcseSubjectsIntro:
    "Both Cambridge (CAIE) and Pearson Edexcel award IGCSEs, and their papers are not interchangeable. Board and tier are fixed first, then the plan counts back from the sitting: Cambridge in May-June or October-November, Edexcel in January or May-June.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "On the Extended tier a student who writes every step keeps method marks even when the final figure is wrong, and speed without a calculator is trained on Paper 2." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "A compact tour of differentiation, integration and trigonometric identities, a good rehearsal for IB Maths AA HL or entrance-level algebra." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Broad overlap with Cambridge, yet the Higher papers word and sequence questions differently, so practice comes from the right board." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging formulae, series and parallel circuits, and planning answers for the paper that replaces a live practical." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, rates, electrolysis and the flame and precipitate tests students are expected to recall without a prompt." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Enzymes, transport and inheritance in exact terms, plus graph questions where the axis labels decide the answer." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "Three sciences compressed into one award, so the tutor must move between them inside a single hour." },
    { name: "IGCSE English as a Second Language", levels: "Grade 9-10", description: "Summary in the student's own words, directed writing for a named audience and listening for detail, for those coming from Malayalam-medium classes." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Supply and demand diagrams, inflation and trade questions with data to read before writing." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Every answer is expected to quote a figure or fact from the case, so the student learns to annotate the booklet as they read." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Flowcharts, binary and pseudocode, with a written paper that tests tracing code rather than typing it." },
    { name: "IGCSE Malayalam and Hindi as second languages", levels: "Grade 9-10", description: "Reading, writing and conversation practice for schools that put a language option beside English." },
  ],

  regionsTitle: "Kottayam neighbourhoods and nearby towns our online tutors serve",
  tutorsIntro:
    "These tutors live in different Indian cities and teach Kottayam students only over live video on Indian Standard Time. Compare the programmes, subjects and levels on each card, then ask for a trial class with the tutor who fits your child.",
  regionsIntro:
    "These places are named for context rather than travel. A student in any of them meets the same tutor on the same screen, and what matters is the school calendar, the weather and each household's evening routine.",
  regions: [
    { name: "Kottayam town and Thirunakkara", note: "The old centre around the Thirunakkara temple and the Collectorate, with established families and the densest tutoring culture." },
    { name: "Nagampadam and Baker Junction", note: "Busy commercial and residential stretches close to the bus stand and railway station; evening noise and traffic shape study hours." },
    { name: "Kodimatha", note: "A fast-growing residential area on the Meenachil side with many apartments and professional households." },
    { name: "Puthuppally", note: "East of the town, known for its church and politics, with a mix of homes and small farms." },
    { name: "Aymanam", note: "A backwater village famous through literature, where flooding and boat travel are part of the monsoon rhythm." },
    { name: "Thazhathangady", note: "A historic quarter by the river, with old Muslim and Christian communities and long-standing businesses." },
    { name: "Ettumanoor", note: "A temple town north of Kottayam, close to the MG University road and to many student households." },
    { name: "Athirampuzha", note: "The Mahatma Gandhi University area, with academics and students living nearby." },
    { name: "Kumarakom", note: "A backwater tourism settlement west of town where hospitality families plan education around the tourist season." },
    { name: "Changanassery", note: "A town to the south, about a short drive away, with its own colleges and schools that Kottayam families compare." },
  ],

  schoolDisclaimer:
    "We could not confirm any IB school in Kottayam, and our only lead for Cambridge, a school in Kurichy, appears on a school directory as offering IGCSE alongside CBSE but could not be checked against the school's own site or the Cambridge centre list. Treat it as a lead to verify directly. The Kochi schools below are labelled as nearby options. Naming any school is not a link, partnership or endorsement; IB Gram is independent of all of them and of the IB, Cambridge and Pearson.",
  schoolClusters: [
    {
      city: "Kottayam district: a directory listing to verify",
      note: "A school in Kurichy, The Rajas International School, is listed on a school directory as IGCSE and CBSE, day and boarding. We have not been able to confirm this independently, so please check the school directly.",
      schools: ["The Rajas International School, Kurichy (directory listing, unconfirmed)"],
    },
    {
      city: "Nearby: Kochi, Ambalamugal and Kakkanad",
      note: "About 66 km to the north, Kochi has the closest confirmed international-curriculum campuses, and is where Kottayam boarders and movers most often go.",
      schools: ["The Choice School, Ambalamugal", "TIPS Kochi"],
    },
    {
      city: "Nearby: Kochi, Thiruvankulam and Pukkattupady",
      note: "Further campuses on the southern and north-eastern edges of Kochi, reached by the main road from Kottayam.",
      schools: ["Global Public School, Thiruvankulam", "Cochin International School"],
    },
    {
      city: "Nearby: Thiruvananthapuram",
      note: "About 154 km south, the capital has one confirmed international campus and is a longer boarding option.",
      schools: ["Trivandrum International School"],
    },
  ],

  modesIntro:
    "Kottayam families use online tuition only. Tutors do not visit homes here; in-person tuition at a student's house is offered solely in Gurugram and parts of Delhi NCR. The three modes below differ in rhythm, not in medium.",
  modes: [
    {
      title: "Weekly online home tuition",
      description:
        "A fixed weekly hour on video and a shared board, working from the student's own textbooks and papers at their own desk at home.",
      bullets: [
        "Private lessons at home, no scooter ride through monsoon traffic",
        "The same tutor across the term",
        "Live marking of past papers",
        "Timed around Kerala's school exam weeks and evening rain",
      ],
    },
    {
      title: "Returning-resident re-entry plan",
      description:
        "For a child back from a Gulf or overseas school, a few weeks of lessons to match the Kerala or Indian school calendar and to cover what differed in syllabus.",
      bullets: [
        "A gap analysis in the first session",
        "Malayalam and Hindi support if needed",
        "Focus on two or three subjects",
        "A written plan for the new term",
      ],
    },
    {
      title: "Exam-season intensive",
      description:
        "A dense block of two or three lessons weekly for the last weeks before a school exam or an IB or IGCSE series.",
      bullets: [
        "Timed papers and honest marking",
        "Error log reviewed every lesson",
        "Command-word practice",
        "Ends when the paper is sat",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or Cambridge schools in Kottayam?",
      paragraphs: [
        "We could not confirm an IB World School in Kottayam, and the Cambridge position is uncertain. A school directory lists The Rajas International School in Kurichy as offering IGCSE and CBSE as a day and boarding school, but its own website could not be reached for us and the Cambridge centre list was not available to check. We mention it so you can ask the school directly, not because we can vouch for it.",
        "Most Kottayam children study under the Kerala State Board, CBSE or ICSE, in schools with long histories, many started by churches and missions. For an established international route, families look to Kochi, where several schools run IB or Cambridge programmes, or to Thiruvananthapuram. Some choose to board, some commute across districts for a time and some move.",
        "The pattern of enquiry follows. A Gulf-returning family wants to keep IGCSE going until they decide on a school. A parent comparing the Kerala Plus Two route with IB asks what a Diploma student actually does in a week. A family planning study abroad wants a tutor who can handle the maths before an overseas admissions test.",
        "When you contact a school, ask which boards and tiers it is authorised for, how results have changed over recent series and how it treats students who join after Class 9. A tutor can prepare your child for an entrance test, but the school makes the decision.",
        "The clusters below keep confirmed and unconfirmed names apart, and label the nearby ones by city.",
      ],
      bullets: [
        "No IB school is confirmed in Kottayam",
        "One IGCSE and CBSE listing in Kurichy needs direct verification",
        "Kochi holds the closest confirmed international campuses",
        "Always check authorisation and recent results with the school itself",
      ],
    },
    {
      heading: "Kerala Syllabus, CBSE, ICSE, IGCSE and IB: what differs for a student here?",
      paragraphs: [
        "The Kerala Syllabus is textbook-led and emphasises clear, complete written answers, backed by continuous assessment and a strong examination culture at SSLC and Plus Two. CBSE and ICSE follow the same overall shape with differing emphasis on application and language. Kottayam students are used to hard work and high marks.",
        "IGCSE changes the style: precise definitions, calculations with units, data reading and, in the sciences, a separate practical-skills paper. IB changes the rhythm again, adding internal assessments, orals and independent projects that run for months. Students with strong exam habits often find the reflective parts unfamiliar, not difficult.",
        "Malayalam-medium students face the added step of English writing at speed. A clean scientific explanation in English is a skill of its own, and it improves fastest with marked practice against the real mark scheme.",
        "No route suits every child. A family eyeing Kerala's entrance exams will weigh those carefully, while one planning study abroad may prefer IGCSE into IB or A Level. The table sets out the main differences.",
      ],
      table: {
        caption: "Boards compared for a Kottayam student",
        columns: ["Board", "What earns marks", "Practical or coursework", "Main adjustment from the Kerala Syllabus"],
        rows: [
          ["Kerala Syllabus", "Complete, well-organised written answers", "Continuous assessment", "Baseline for most local students"],
          ["CBSE or ICSE", "Recall plus application and language skills", "Internal assessment and practicals", "More application and wider English use"],
          ["Cambridge or Edexcel IGCSE", "Exact definitions, visible working, data reading", "A practical paper in sciences", "Written English and method marks"],
          ["IB MYP", "Criteria, reflection and explanation", "Personal Project", "Planning long independent tasks"],
          ["IB Diploma", "Analysis, orals, extended writing", "IAs, Extended Essay, TOK", "Two years of sustained independent work"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Kottayam and why?",
      paragraphs: [
        "There is no published rate. IB Gram gives a written quote before you commit, and it reflects the tutor's experience with your child's exact course, the level, the lessons per week and the length of the plan. Your postcode in Kerala does not enter into it.",
        "A tutor who has recently taught IB Chemistry HL or IGCSE Additional Mathematics is harder to find than a general teacher, and the rate follows. Higher Level and Extended material takes more preparation per session. A six-week intensive before a May paper is priced differently from a steady weekly hour across a whole school year.",
        "Many Kottayam families are used to paying for evening tuition and entrance coaching, and will compare us with those. Batch coaching costs less per seat and suits KEAM and NEET drilling. A one-to-one lesson costs more per hour and suits a student who needs a person to see exactly where a solution goes wrong.",
        "Online lessons carry no travel cost, and a free trial means you meet the tutor before paying. If the fit is wrong, we arrange another tutor.",
      ],
      bullets: [
        "Written quote before booking",
        "Tutor rarity, level and weekly hours drive the rate",
        "Free trial first",
        "No travel cost, because lessons are online",
      ],
    },
    {
      heading: "Online home tuition, entrance coaching or a local tutor: how do they compare?",
      paragraphs: [
        "Kerala has a mature tuition market, from neighbourhood teachers to large coaching institutes. They are well suited to the state syllabus and to KEAM and NEET. The question is whether they suit IGCSE or IB.",
        "Most do not, simply because few have taught those papers. Online one-to-one tuition lets a family choose someone from anywhere in India who has. The trade-off is that a stable power supply and internet link matter more, and Kottayam's monsoon can test both.",
      ],
      table: {
        caption: "Study routes compared for Kottayam",
        columns: ["Route", "IB and IGCSE fit", "Travel", "Attention", "Main limit"],
        rows: [
          ["Online one-to-one tuition", "Matched to exact board, tier and level", "None", "Whole hour for one student", "Needs steady power and internet"],
          ["Entrance coaching institute", "Strong for KEAM and NEET", "Daily commute", "Shared among many", "Little IGCSE or IB depth"],
          ["Neighbourhood tutor", "Depends on the person", "Short", "High for a few students", "Few know international mark schemes"],
          ["Self-study", "Suits disciplined students", "None", "Self-directed", "No feedback on coursework or orals"],
        ],
      },
    },
    {
      heading: "How does the Kerala school year and monsoon shape exams and study?",
      paragraphs: [
        "Kerala's school year starts in June, earlier than many states, and runs through three term exams: the Onam exam around August or September, the Christmas exam in December and the annual exam in March. IB Diploma papers fall in May and November, Cambridge IGCSE in May-June and October-November, and Edexcel in January and May-June. Your school names the series for your child.",
        "The south-west monsoon arrives in June and delivers more than 500 mm a month through August, and the north-east monsoon adds rain in October and November. Flooding has affected Kottayam's low-lying parts, including around the Meenachil and Aymanam, and power and internet can fail. Plan a backup, and keep an eye on forecasts during important papers.",
        "Festivals punctuate the year. Onam brings a long holiday, Vishu and Christmas bring family travel and a large Christian community marks Easter and Christmas with services and gatherings. Online lessons can move easily around these dates.",
      ],
      table: {
        caption: "Planning the year from Kottayam",
        columns: ["Period", "Exam or school event", "Local factor", "Advice"],
        rows: [
          ["June to August", "School year begins, Onam term exam build-up", "Heavy south-west monsoon", "Start early on projects; keep backup power"],
          ["September", "Onam holidays and term exam", "Festival travel", "Plan catch-up lessons around the break"],
          ["October to December", "Cambridge Oct-Nov series, IB November, Christmas exam", "North-east monsoon rains", "Keep flexible slots for storm days"],
          ["January to March", "Edexcel January series, annual exams, mocks", "Dry, warm days", "Best stretch for long revision"],
          ["April to June", "IB May session, Cambridge and Edexcel summer papers", "Hot, humid, pre-monsoon storms", "Check power before timed papers"],
        ],
      },
    },
    {
      heading: "Where do Kottayam students go after IB or IGCSE?",
      paragraphs: [
        "Start from the destination. For Indian universities, the Association of Indian Universities issues equivalence for IB Diploma and recognised IGCSE-based qualifications, and CUET-UG is the main gateway to central universities. Subject-mapping and registration rules should be checked a year ahead.",
        "Kottayam has its own academic options: Mahatma Gandhi University with its affiliated colleges, CMS College, IIIT Kottayam and the Government Medical College. Many students look at Kerala's national institutes, including NIT Calicut and the IITs through JEE, and at medical courses through NEET. IB and IGCSE students can apply if they meet the subject and equivalence conditions, and exam notices should be read afresh each year.",
        "Given the local overseas ties, study abroad is a major route. Universities in the UK, Canada, Australia, the Gulf and the United States read IB, A Level and IGCSE results in different ways, and a tutor can explain which subjects weigh most for a chosen course, though each university decides.",
        "Whichever path, choose subjects a year before the decision becomes urgent. A workable Extended Essay topic and a meaningful CAS record also help.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG mapping are best checked a year early",
        "JEE and NEET eligibility depends on subject combination",
        "Local options include MG University, CMS College, IIIT Kottayam and the Government Medical College",
        "Overseas universities assess each result individually",
      ],
    },
    {
      heading: "What does a live IB Mathematics or science class involve?",
      paragraphs: [
        "A Mathematics lesson begins with a couple of problems chosen to show how the student thinks. The tutor asks for spoken reasoning while the student writes on the shared board, which shows whether the gap is algebra, reading or checking. Then comes a past-paper section at the correct route and level.",
        "Sciences follow the same pattern with extra attention to method. A tutor cannot run an experiment over video, but can rehearse design, uncertainty and evaluation, which drive internal-assessment marks. Data-based questions from past papers need no apparatus.",
        "Short and frequent beats long and rare. After each lesson the student completes a small timed set and logs errors, and the log opens the next session.",
        "The student designs the investigation and writes every assessed piece. The tutor questions and comments, and that line is firm.",
      ],
    },
    {
      heading: "Core or Extended: how should a Kottayam student choose IGCSE tiers and subjects?",
      paragraphs: [
        "Most IGCSE subjects have Core and Extended tiers. Core limits the top grade, and Extended reaches A*. The school normally sets the tier, but parents can ask why, because the choice shapes later options, particularly for IB Mathematics AA HL.",
        "Subjects should follow the goal. Medicine or engineering points to Mathematics and the sciences, often with Additional Mathematics. Commerce, law or hospitality management points to Economics, Business Studies and English. A family that may return to the Kerala Plus Two route should check how schools and entrance bodies treat IGCSE grades.",
        "Cambridge and Edexcel differ in calendar and style, so the right board's past papers are used. For a Malayalam-medium student, written English in every subject deserves weekly practice.",
      ],
      table: {
        caption: "IGCSE choices by goal",
        columns: ["Goal", "Suggested subjects", "Tier", "Note"],
        rows: [
          ["IB Diploma with Mathematics HL", "Mathematics, Additional Mathematics, sciences", "Extended", "Additional Mathematics helps with calculus"],
          ["Medicine or engineering", "Mathematics and the three sciences", "Extended", "Check entrance-exam eligibility for IGCSE grades"],
          ["Commerce, law or hospitality", "Economics, Business Studies, English", "Extended if possible", "English strength helps every paper"],
          ["Study abroad via A Levels", "Subjects lined up with A Level choices", "Extended", "Choose A Levels first, then IGCSE"],
        ],
      },
    },
  ],

  process: [
    {
      title: "Tell us about your child",
      description: "Share the board, programme, subject, level and exam series, and where your child is now studying.",
    },
    {
      title: "See a matched tutor",
      description: "A teacher experienced in the exact course is proposed, with their background and open times.",
    },
    {
      title: "Take a free trial lesson",
      description: "A real session on a topic from your child's syllabus, with no payment and no pressure.",
    },
    {
      title: "Agree the plan in writing",
      description: "Rate, weekly slot and plan length are written down before any payment.",
    },
    {
      title: "Review and refine",
      description: "A note after each lesson, a wider check every few weeks and a new tutor if the fit is wrong.",
    },
  ],

  whyPoints: [
    {
      title: "Specialists from across India",
      description: "Kottayam has few IB or Cambridge teachers, so the tutor is chosen for the course and not for the pin code.",
    },
    {
      title: "Plain about online",
      description: "Nobody visits a Kottayam house; home visits exist only in Gurugram and parts of Delhi NCR.",
    },
    {
      title: "Fits the Kerala calendar",
      description: "Onam and Christmas term exams, the June start and monsoon evenings are built in.",
    },
    {
      title: "Returnee-friendly",
      description: "Families back from the Gulf or overseas can use a bridge plan to settle a child into the new calendar.",
    },
    {
      title: "Guidance, not ghost-writing",
      description: "Tutors never write an IA, Extended Essay, TOK essay or coursework.",
    },
    {
      title: "Written notes and a fair exit",
      description: "Parents read what happened in each lesson, and a tutor change is arranged if the fit is wrong.",
    },
  ],

  faqs: [
    {
      question: "Can I find IB and IGCSE tutors for my child in Kottayam?",
      answer: "Yes, through live online lessons. IB Gram pairs Kottayam students with IB and IGCSE tutors who teach one to one on video, in Indian Standard Time. No tutor visits Kottayam, because meeting a student at their house is offered only in Gurugram and parts of Delhi NCR. Each tutor is matched to the board, tier and level, and the first lesson is a free trial.",
    },
    {
      question: "Is IB or IGCSE home tuition available in Kottayam?",
      answer: "Only as online home tuition. The lesson takes place at your own desk, on your own laptop, with a teacher based elsewhere in India. Tutors do not come to houses in Kottayam, since in-person teaching is limited to Gurugram and parts of Delhi NCR. The advantage is access to a specialist for the exact syllabus, which a local search rarely provides.",
    },
    {
      question: "Is there an IB or Cambridge school in Kottayam?",
      answer: "We could not confirm an IB school. A school directory lists The Rajas International School in Kurichy as IGCSE and CBSE, but we could not verify that on the school's own site or with Cambridge, so please check it directly. Kochi has the nearest confirmed IB and Cambridge schools. Always ask any school for its current board authorisation before applying.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Kottayam?",
      answer: "We publish no price list. The rate is quoted in writing before you book and depends on the tutor's experience with the course, the level, the lessons each week and the length of the plan. Higher Level Diploma and Extended IGCSE tutors usually charge more than generalists because preparation is heavier and such teachers are scarcer. The trial lesson costs nothing.",
    },
    {
      question: "We are returning from the Gulf. Can you help our child settle in?",
      answer: "Yes, this is a common request. A short re-entry plan can compare what your child covered abroad with the Kerala or Indian syllabus, fill gaps and prepare for an entrance test if needed. Malayalam and Hindi support can be included. The school decides admission, and IB Gram has no partnership with any school, so our role is preparation and continuity.",
    },
    {
      question: "Which IGCSE boards do you teach?",
      answer: "Both Cambridge International and Pearson Edexcel. Papers, tiers and mark schemes differ, so we confirm the board before matching. Cambridge sits in May-June and October-November, Edexcel in January and May-June. Your school tells you which series your child is entered for, and lessons are planned backwards from that date.",
    },
    {
      question: "Will a tutor write my child's IA or Extended Essay?",
      answer: "No. Tutors coach, and the writing remains the student's. They can explain marking criteria, test whether a research question is workable and respond to a draft the student wrote. They do not write, rewrite or heavily edit any Internal Assessment, Extended Essay, TOK essay or coursework, because the student must submit it as their own.",
    },
    {
      question: "How do monsoon floods and power cuts affect lessons?",
      answer: "Heavy rain in June to August and again in October and November can interrupt electricity and mobile data, and low-lying areas near the Meenachil and backwaters are the most exposed. Keep a charged laptop and a phone hotspot ready. A lesson can be shifted with notice and a missed one is usually made up. Whiteboard work uses little data.",
    },
    {
      question: "What equipment does my child need?",
      answer: "A laptop or tablet with a working camera and microphone, and a connection that can hold a video call. The shared board needs little data, and video can go off if the line weakens. Test everything in the free trial, use a headset if the house is noisy and keep a printed copy of the paper for students who prefer to write by hand.",
    },
    {
      question: "Can lessons fit around Onam and Christmas term exams?",
      answer: "Yes. Kerala's school year has term exams around Onam and Christmas, and online lessons are easier to rearrange than travel to an institute. Tell the tutor the dates at the outset. In exam weeks, sessions can be reduced or shifted to revision of the specific school papers, and the IB or IGCSE plan resumes afterwards.",
    },
    {
      question: "Can you prepare students for IB or IGCSE school entrance tests?",
      answer: "Within limits, yes. Schools often test English and Mathematics, sometimes reasoning and an interview, for entry in Class 6, 9 or 11, and a tutor can practise that material and build spoken confidence. Admission is the school's decision alone, and IB Gram has no partnership with any school, so treat our role as preparation, not a route to a seat.",
    },
    {
      question: "Can IB or IGCSE students still sit JEE, NEET or KEAM?",
      answer: "Often, but rules change, so read current notices from the exam bodies. Eligibility usually depends on the subject mix and a recognised Class 12 equivalence, and state entrance bodies may have their own conditions. An IB student with Mathematics, Physics and Chemistry or Biology is commonly in a fair position. Tutors help with the subjects; forms and certificates are for the family and school.",
    },
    {
      question: "Are lessons in Malayalam or English?",
      answer: "Mainly English, since the papers are in English. A tutor can explain a difficult idea briefly in Malayalam or Hindi if a student is stuck, and Malayalam or Hindi can be taught as subjects where the school offers them. Exam answers must be written in English, so the student practises that throughout.",
    },
    {
      question: "How do we start from Kottayam?",
      answer: "Send the board, subject, level and exam date by email or WhatsApp. A shortlisted tutor and trial times come back, and the trial is free. Rates follow in writing once you have seen the teaching. Reach us at support@ibgram.com or message +91 7439 368 115, and mention any term-exam dates so the weekly slot avoids them.",
    },
    {
      question: "Will we get feedback after each lesson?",
      answer: "Yes. A brief written note follows every session, covering what was taught, which questions went wrong and what to practise before the next one. A wider review takes place every few weeks. If progress is slower than hoped, we alter the method or change the tutor and explain why in writing, so parents are never left guessing.",
    },
    {
      question: "Is IB Gram linked to the IB, Cambridge, Pearson or MG University?",
      answer: "No. IB Gram is an independent tutoring service with no connection to the International Baccalaureate, Cambridge University Press and Assessment, Pearson Edexcel, Mahatma Gandhi University or any school mentioned here. Our tutors are experienced teachers based in India who teach from published specifications and past papers.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "Compare how this service works in other towns and cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where visits to a student's house are possible, unlike Kottayam." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject-by-subject pages for Diploma, MYP and PYP help." },
    { label: "IGCSE guide", href: "/igcse/", description: "Which board, which tier and which exam series to choose." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects, three core elements and how they are graded." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "How criteria, projects and eAssessment shape Years 1 to 5." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the final-year Exhibition for younger children." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "Career study, reflective project and Diploma courses in one pathway." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Deciding whether Analysis or Applications suits your child." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles arranged by programme, subject and teaching experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us with a short brief and ask for trial times." },
    { label: "IB and IGCSE tutoring in Kochi", href: "/kochi/", description: "Sixty-odd kilometres north, with the nearest confirmed IB and Cambridge campuses." },
    { label: "IB and IGCSE tutoring in Alappuzha", href: "/alappuzha/", description: "The backwater district next door, taught the same way." },
    { label: "IB and IGCSE tutoring in Thiruvalla", href: "/thiruvalla/", description: "A town to the south in Pathanamthitta district." },
    { label: "IB and IGCSE tutoring in Thodupuzha", href: "/thodupuzha/", description: "An Idukki district town east of Kottayam." },
  ],

  closingHeading: "A free first lesson for your Kottayam student",
  closingBody:
    "Tell us the board, the subject and level, where your child stands now and which evenings the Kerala term calendar and the rain leave free. A matched tutor replies with a profile and trial times, and the first lesson costs nothing. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
