import type { CitySeoPage } from "../types";

/**
 * /roorkee/ - IB and IGCSE tutoring page for Roorkee, Haridwar district, Uttarakhand.
 * Online-only delivery: tutors do not visit homes in Roorkee, since in-person home tuition is offered
 * only in Gurugram and parts of Delhi NCR. No IB or Cambridge school inside the city is confirmed here,
 * so stripSchools is empty and the clusters are labelled nearby cities (Dehradun boarding belt first).
 */
export const roorkee: CitySeoPage = {
  slug: "roorkee",
  countryName: "Roorkee",
  countryNameLong: "Roorkee, Uttarakhand",
  demonym: "Roorkee",
  state: "Uttarakhand",
  stateCode: "IN-UT",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttarakhand, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are timed around the Sawan Kanwar traffic weeks, winter fog on the Delhi side and the IIT semester rhythm",
  lastUpdated: "2026-09-21",
  geo: { latitude: 29.8543, longitude: 77.8880 },
  wikipedia: "https://en.wikipedia.org/wiki/Roorkee",
  alternateNames: ["Rurki", "Roorkee Haridwar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Roorkee | One-to-One Home Tuition Online",
  metaDescription:
    "IB and IGCSE tutors in Roorkee for IIT-faculty, defence and science families: live one-to-one online lessons from home, Cambridge and Edexcel, free trial.",
  h1: "IB and IGCSE Tutors and Home Tuition in Roorkee",
  heroEyebrow: "IB AND IGCSE HOME TUITION, ONLINE, FOR ROORKEE",
  heroSubtitle:
    "Roorkee is a town of professors, scientists, army engineers and students, and its households tend to ask sharper questions about a curriculum than most. If you want private home tuition for IB or IGCSE here, the honest answer is that it runs online: a subject specialist teaches live, one to one, while your child sits at their own desk. IB Gram matches by exact syllabus, and nobody has to travel to Dehradun or Delhi for it.",
  primaryKeyword: "IB and IGCSE tutors in Roorkee",
  imageAltText: "Roorkee student solving an IB Physics HL kinematics problem with a tutor over a live video session",
  secondaryKeywords: [
    "IB tutor Roorkee",
    "IGCSE tutor Roorkee",
    "IB home tuition Roorkee",
    "IGCSE home tuition Roorkee",
    "IB private tuition Roorkee",
    "IB Maths tutor Roorkee",
    "IGCSE Maths tutor Roorkee",
    "IB Physics tutor Roorkee",
    "IB Chemistry tutor Roorkee",
    "IB Biology tutor Roorkee",
    "IB DP tutor Roorkee",
    "IB MYP tutor Roorkee",
    "IB PYP tutor Roorkee",
    "IGCSE online tuition Roorkee",
    "IB tutor IIT Roorkee campus",
    "IGCSE tutor Civil Lines Roorkee",
    "online IB tutor Roorkee Cantonment",
    "IB tutor Haridwar district",
    "IB tutor Uttarakhand online",
  ],

  heroTrustPoints: [
    "Tutors are chosen for the exact course code and level a Roorkee student is on",
    "All lessons run online, because tutors do not visit homes in Roorkee and home visits exist only in Gurugram and parts of Delhi NCR",
    "A written note after every lesson gives parents a clear record",
    "IB Gram is independent of every school, institute and exam body on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The full IB continuum" },
    { value: "Cambridge + Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "Lessons on local time" },
    { value: "Free trial", label: "Before any payment" },
  ],

  intro: {
    heading: "An academic town with no IB classroom, and how private tuition fills it",
    paragraphs: [
      "Roorkee has an unusual profile for a small city. IIT Roorkee, whose roots go back to the Thomason College of Civil Engineering in 1847, the Bengal Engineer Group and Centre, the Central Building Research Institute and the National Institute of Hydrology all sit here, so a large share of local households have PhDs, postings and views about education. Yet the schools are mostly CBSE and Uttarakhand Board, and we could not confirm an IB or Cambridge school in the city.",
      "That mismatch is the reason IB and IGCSE tutors in Roorkee are hard to find on the doorstep. A faculty family that lived in Singapore or Boston for a few years, a scientist posted here from Bengaluru, an army officer on a two-year tenure with a child mid-Diploma: each wants private home tuition for a syllabus the neighbourhood does not teach. IB Gram serves them with live online lessons.",
      "The format is straightforward. A tutor who has taught the exact course, whether IB Chemistry HL, MYP Mathematics or Cambridge Additional Mathematics, teaches over video with a shared whiteboard and marked past papers. Lessons run on IST, so an evening slot in Roorkee is an evening slot for the tutor too.",
      "IB Gram is independent. We are not part of IIT Roorkee, any school, the IB, Cambridge or Pearson. Tutors coach and mark practice work, but they do not write Internal Assessments, Extended Essays, TOK essays or any coursework a student submits.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Tutors with recent experience of the exact course and level",
      "A free trial lesson and a written note after each session",
      "Online only in Roorkee; home visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is taught in a school we can confirm inside Roorkee, so local families meet them through postings, boarding or online schools. The notes below reflect the situations that actually arise in this town.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Children work through inquiry units under transdisciplinary themes, and in the final year they run an Exhibition. There are no exams, which is why tutoring at this age is about language, number sense and articulate curiosity.",
      countryNote:
        "PYP families in Roorkee are often academics or officers returning from an overseas or metro posting, who want a child to keep an inquiry-based habit while the local school runs a conventional timetable.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are assessed on four criteria and the last year brings the Personal Project. Bright students can get stuck when the mark depends on how a reasoning is presented, not only on the answer.",
      countryNote:
        "In Roorkee, MYP support tends to involve children of transferred families finishing a course begun elsewhere, or boarders home from a school in the Doon valley.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, plus TOK, the Extended Essay and CAS. Internal assessments count towards each grade, and most exams fall in May.",
      countryNote:
        "A Roorkee DP student is usually enrolled via an online school or a boarding school elsewhere, and often asks first for HL Mathematics and Physics, which suit a family used to engineering talk at the dinner table.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pathway that combines two or more Diploma courses with career-related study and a reflective project. It is rare in India, but the Diploma subjects inside it still need strong teaching.",
      countryNote:
        "CP is seldom asked about in Roorkee, and any enquiry is handled by focusing on the specific Diploma courses the student is following.",
    },
  ],

  subjectsIntro:
    "In a town like Roorkee many parents can check the mathematics themselves, which makes them quick to notice a weak tutor. We therefore match by course, level, and where the student is in the internal assessment, and we invite a parent to sit in on the free trial to judge the teaching directly.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "The natural home for students who like calculus and proof, including the open-ended Paper 3 problems and an exploration that shows real mathematical curiosity." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Data, statistics and modelling with technology, better suited to students aiming at economics, biology or design than at pure mathematics." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, fields and modern physics at HL depth, plus a controlled Scientific Investigation with honest uncertainty analysis." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, thermodynamics, kinetics and organic pathways, with practical work assessed on design and evaluation." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology to ecology, where precision with command terms and statistics inside the investigation separate the grades." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, object-oriented ideas and a documented software product for the internal assessment." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, evidence and evaluation, with HL adding quantitative analysis of policy." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers that require theory tied to the organisation in the stimulus." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text commentary, comparative essays and an oral built on a well-argued position." },
    { name: "IB Design Technology", levels: "HL / SL", description: "Design thinking, modelling and a design project, attractive to students from an engineering-heavy household." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "River, canal and mountain-ecosystem case material sits naturally within a course on human-environment systems." },
    { name: "IB Geography", levels: "HL / SL", description: "Hazards, resources and a fieldwork investigation, with the Ganga canal system an obvious real-world example." },
    { name: "IB Hindi B and Hindi A", levels: "HL / SL", description: "Written, oral and literary skills for students whose home language is Hindi and who want structured exam practice." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion-based preparation for the exhibition and essay, useful for students with scientific backgrounds who find knowledge questions unfamiliar." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel both offer IGCSE, and a Roorkee family should first find out which one their school or online provider uses. Cambridge sits in May-June and October-November, and Edexcel in January and May-June, and the papers differ enough that practice must be on the right board.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended students need careful algebra and clear working under time pressure, and Core students need secure fundamentals with a sensible route to the next stage." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus and functions that suit a strong mathematician and prepare directly for IB AA Higher Level." },
    { name: "Edexcel IGCSE Mathematics B 4MB1", levels: "Grade 10", description: "A different style from Cambridge, with questions that reward clear structured methods and comfort with unusual phrasing." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Mechanics, thermal physics, waves and electricity, plus practical-paper questions that require a real feel for experimental design." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, reactivity, electrochemistry and organic chemistry, with alternative-to-practical techniques taught alongside theory." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells to ecosystems, with extended answers taught as a distinct skill." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Computational thinking, data representation and programming, with regular practice on unfamiliar problems." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Microeconomics, macroeconomics and evaluation, with attention to how a good answer is structured." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Writing for effect and argument, summary skills and comprehension on unseen texts." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Structured practice in reading, writing and speaking for students who want the board's expectations laid out." },
  ],

  regionsTitle: "Roorkee neighbourhoods and nearby towns we teach online",
  regionsIntro:
    "Online lessons do not depend on distance, so the list below is meant to give context, not a service boundary. Each entry notes the kind of household and the kind of evening that shapes a lesson slot in that part of the Roorkee area.",
  regions: [
    { name: "IIT Roorkee campus", note: "Faculty, research staff and residents on the campus itself, where a child's curriculum is often a topic of conversation, and where lessons must fit around academic schedules." },
    { name: "Civil Lines", note: "A leafy, older part of town with officials, doctors and long-term residents, close to several established schools and a strong home-tuition tradition." },
    { name: "Roorkee Cantonment", note: "The Bengal Engineer Group and Centre area, home to army families who move on a fixed posting cycle and value a tutor who can follow a child between stations." },
    { name: "Ramnagar", note: "A residential neighbourhood on the town's central side, mostly CBSE households where interest in IGCSE mathematics is growing." },
    { name: "Ganeshpur", note: "A fast-growing residential belt where new housing and young families have raised demand for private tuition." },
    { name: "Manglaur", note: "A separate town to the north, with a local-trade economy, where online tuition offers a specialist option that no nearby institute provides." },
    { name: "Bhagwanpur and Jhabrera", note: "Semi-urban towns on the roads towards Haridwar and Saharanpur, with families who are used to travelling for education and welcome a way not to." },
    { name: "Landhaura and Laksar", note: "Smaller towns in the same district, where timing depends on power and connectivity more than on distance." },
    { name: "Piran Kaliyar and canal-side villages", note: "Communities along the Upper Ganga Canal, where students often study in the early evening between farm and school schedules." },
  ],

  schoolDisclaimer:
    "The schools listed are named only to say what curriculum they run. IB Gram has no partnership with any of them, none has approved this page, and IB Gram is independent of IIT Roorkee, the IB, Cambridge and Pearson.",
  schoolClusters: [
    {
      city: "Roorkee itself",
      note: "We could not confirm an IB school or a Cambridge or Edexcel centre in the city, and so name none. Schools follow CBSE, the Uttarakhand Board and, in some cases, ICSE, and families use online schools or boarding for an international route.",
      schools: [],
    },
    {
      city: "Nearby: Dehradun and the Doon valley",
      note: "About 70 km away, this is the natural boarding and day-school choice for Roorkee families seeking IB or Cambridge, and the destination many parents visit first.",
      schools: ["SelaQui International School", "Unison World School"],
    },
    {
      city: "Nearby: Delhi NCR and Noida",
      note: "A few hours by road or rail, with the widest range of IB and IGCSE schools for families who consider relocating for the Diploma years.",
      schools: ["Genesis Global School, Noida", "GD Goenka World School", "Pathways World School"],
    },
    {
      city: "Nearby: Chandigarh region",
      note: "For families with ties in Punjab, Haryana or Himachal, Chandigarh is reachable by road and is another place where international curricula are offered, though we do not name a specific school we have not verified.",
      schools: [],
    },
  ],

  modesIntro:
    "For a Roorkee family the arrangement is constant: a tutor elsewhere in India, a live video lesson, one student. The three formats below differ in weekly volume and reporting. A visit to your house is not one of them, because in-person tuition exists only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "A weekly lesson through the term",
      description:
        "A fixed hour with one tutor, moving through whichever unit the student's course has reached. It suits a student who is already coping and needs steady depth.",
      bullets: [
        "One tutor, one slot, every week",
        "Matches the student's current unit",
        "Fits IB, Cambridge and Edexcel",
        "Adds a second lesson easily near mocks",
      ],
    },
    {
      title: "Weekly lessons with a parent-facing progress record",
      description:
        "Every lesson closes with a written summary, and a review is held every few weeks. Parents who are themselves scientists or engineers often like to see the topics and the gaps laid out clearly.",
      bullets: [
        "Summary note after each session",
        "Review at fixed intervals",
        "Good for army families who change postings",
        "A portable record if the student moves school",
      ],
    },
    {
      title: "Concentrated block before an exam",
      description:
        "Several lessons a week for a few weeks, spent on timed papers and correction. It is popular before the May IB session and the Cambridge and Edexcel series.",
      bullets: [
        "Timed papers with detailed marking",
        "Fast correction cycles",
        "Scheduled around Kanwar and fog weeks",
        "Best booked two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "What does IIT Roorkee mean for a family choosing IB or IGCSE?",
      paragraphs: [
        "IIT Roorkee shapes the town's ambitions. Many local parents know the JEE Advanced route well, some have taught it, and some hope a child will eventually reach the campus. IB and IGCSE students are not shut out of that ambition, but they need to plan for it deliberately, because eligibility depends on qualification equivalence and on the subjects the student has studied.",
        "The practical message is to check, and check early. The Association of Indian Universities equivalence process, the current eligibility rules for JEE Main and JEE Advanced for students with international qualifications, and the rules for foreign-qualification candidates all change from time to time. Please confirm them from official notices in the year of application, not from a page like this one.",
        "For a student who takes IB Mathematics AA HL, Physics HL and Chemistry, the preparation is closer to an engineering preparation than many assume. The depth of calculus, mechanics and electromagnetism is real, and the internal assessments train the student in designing and evaluating investigations, which is what a good engineer does.",
        "A number of Roorkee families also look abroad, sometimes because of faculty exchanges and conference ties that make foreign universities familiar. In that case the IB Diploma is a widely understood credential, and its predicted grades in autumn of Class 12 drive many offers.",
      ],
      table: {
        caption: "Ways an IB or IGCSE student from Roorkee can aim at engineering",
        columns: ["Route", "What to check", "IB or IGCSE focus"],
        rows: [
          ["JEE Main and Advanced", "Current eligibility for international qualification holders", "HL Mathematics, Physics and Chemistry"],
          ["Other Indian engineering entrances", "State and institute rules and equivalence", "Same core subjects, plus English"],
          ["Foreign engineering degrees", "Predicted grades and subject prerequisites", "Mathematics AA HL and Physics HL"],
          ["Science and research degrees", "Subject combinations and university preferences", "Sciences at HL, strong internal assessments"],
        ],
      },
      bullets: [
        "Check JEE and AIU rules for international qualifications every year",
        "IB Mathematics AA HL and Physics HL are demanding preparation for engineering",
        "Internal assessments train investigation design, a core engineering skill",
        "We tutor subjects and do not run admissions counselling",
      ],
    },
    {
      heading: "Which schools serve IB and IGCSE students around Roorkee?",
      paragraphs: [
        "We could not confirm any school inside Roorkee that is authorised for the IB or registered to teach Cambridge or Edexcel IGCSE, so we prefer to say that plainly and not to list a school we cannot vouch for. Schools in the city are mostly CBSE, the Uttarakhand Board and a few ICSE institutions.",
        "The nearest real choices are in Dehradun, about 70 km away, which is the region's best-known school city. SelaQui International School and Unison World School are two schools in the valley with international-curriculum credentials, and both have boarding. Delhi NCR is farther away but has the largest choice.",
        "Roorkee's location on the Delhi-Dehradun corridor shapes how families think about this. Delhi is a few hours away by road or train, and Haridwar and Dehradun sit on either side. A family that decides on an international Diploma will usually think about boarding or relocating for two years, and will want a tutor to bridge the time before and after.",
        "Because the school landscape in town is thin, tuition often starts earlier here. A child in Class 8 or 9 who is likely to switch for Class 11 gains a lot from starting Extended-tier IGCSE mathematics and science at home first, and the eventual move is less abrupt.",
      ],
      table: {
        caption: "IB and IGCSE choices for Roorkee families",
        columns: ["Place", "Distance from Roorkee", "What we can say", "Typical use"],
        rows: [
          ["Roorkee", "In town", "No authorised IB or Cambridge school confirmed", "Tutoring plus a school elsewhere"],
          ["Dehradun", "About 70 km", "International-curriculum schools with boarding", "Boarding or day school for the Diploma years"],
          ["Delhi NCR", "A few hours by road or rail", "The widest choice of IB and IGCSE schools", "Relocation for the Diploma"],
          ["Online schools", "From home", "Accredited options exist, registration is the family's decision", "Study from Roorkee with tutoring beside it"],
        ],
      },
      bullets: [
        "No IB or Cambridge school is confirmed inside Roorkee",
        "Dehradun is the closest cluster of international schools",
        "Delhi NCR offers the widest choice but requires relocation or boarding",
        "Tutoring at home smooths the years before and after any move",
      ],
    },
    {
      heading: "How is a CBSE or Uttarakhand Board education different from IB or IGCSE?",
      paragraphs: [
        "Ask a strong CBSE student in Roorkee to attempt an IB Physics Paper 2 and the difference is clear within minutes. The physics is familiar, but the questions ask the student to explain why, to choose an approach, and to comment on a graph. In the board exam, a similar question tends to specify the method in advance.",
        "The Extended Essay and the Internal Assessments are the second difference. A student in an IB school writes a 4,000-word essay of their own design and completes an investigation in each subject. That sort of independent work is rare in a CBSE timetable, and it takes months to learn to plan.",
        "The third difference is the mark scheme. IB and Cambridge examiners award marks for specific statements, and they publish the scheme. A student who reads mark schemes learns what the examiner wants, and a good tutor teaches this habit early.",
        "None of this makes one system better. CBSE is the direct road to JEE and NEET, and many Roorkee families rightly prefer it. IB and IGCSE make sense when the destination is international, when a family expects to move often, or when a child learns better through inquiry and coursework.",
      ],
      table: {
        caption: "CBSE, Uttarakhand Board and ICSE beside IB and IGCSE",
        columns: ["Feature", "CBSE / Uttarakhand Board", "ICSE", "IB / IGCSE"],
        rows: [
          ["Independent work", "Limited projects", "Some projects", "Extended Essay, internal assessments or coursework"],
          ["Question style", "Method often specified", "Detailed and descriptive", "Open, applied and justified"],
          ["Entrance link", "Direct to JEE and NEET syllabus", "Largely direct", "Needs equivalence and subject planning"],
          ["Global recognition", "Accepted with conditions", "Accepted with conditions", "Widely recognised"],
        ],
      },
      bullets: [
        "The physics is familiar; the question style is not",
        "Independent work takes months to learn",
        "Mark schemes are published and worth studying",
        "Choose the system that matches the family's destination",
      ],
    },
    {
      heading: "What does IB or IGCSE tutoring cost in Roorkee?",
      paragraphs: [
        "We do not publish rates. The rate depends on what is being taught, to whom and how often: the programme, the subject and level, the session length and the weekly frequency, and the scarcity of the tutor's recent experience. IB Physics HL from a tutor who has taught it lately is priced differently from IGCSE Core Biology.",
        "A rate is always sent in writing before the free trial. There are no hidden charges, no registration fee and no lock-in period.",
        "Roorkee families sometimes assume that a specialist from Bengaluru or Pune will cost far more than a local teacher. Online, the difference in travel disappears, so the comparison becomes one of teaching quality and experience, not geography.",
        "A tip from experience: ask the tutor for a sample explanation of a topic your child finds hard, and judge the clarity yourself. Many Roorkee parents are well placed to do so.",
      ],
      bullets: [
        "Rate follows programme, subject, level, length and frequency",
        "Sent in writing before the free trial",
        "No travel charge, registration fee or contract",
        "Parents are welcome to sit in on the trial",
      ],
    },
    {
      heading: "Online IB Gram tuition, an IIT-student tutor, a coaching centre or self-study: which suits Roorkee?",
      paragraphs: [
        "Roorkee has an abundance of talented undergraduates, and it is natural to think of hiring an IIT student as a tutor. Many are excellent mathematicians. The catch is that JEE-style mathematics is a different animal from IB HL or IGCSE Additional Mathematics, and few have seen the mark schemes.",
        "Coaching institutes in and around Roorkee concentrate on JEE, NEET and foundation courses for Classes 8 to 10. They are good at what they do, though IB and IGCSE do not appear on their timetables, so a family cannot find a batch for either.",
        "Self-study can work for an IGCSE mathematics student with a good set of past papers. For IB, the internal assessments and the Extended Essay call for a second reader, and self-study leaves that gap.",
        "Live online tuition offers a subject specialist, a mark-scheme-focused approach and lesson slots that fit around a school or campus schedule. It does not replace hard work by the student, but it removes the search for someone who knows the syllabus.",
      ],
      table: {
        caption: "Support options for IB and IGCSE in Roorkee",
        columns: ["Option", "Strength", "Gap for IB or IGCSE", "Note"],
        rows: [
          ["IIT student as tutor", "Strong mathematics and physics", "Little exposure to IB or Cambridge mark schemes", "Useful for problem practice, not for coursework guidance"],
          ["JEE or NEET institute", "Rigorous entrance training", "No IB or IGCSE batches", "Can complement, not replace"],
          ["Self-study", "Independent and flexible", "No second reader for IAs and essays", "Works best for IGCSE mathematics"],
          ["Online IB Gram tutor", "Matched to the exact syllabus", "Requires a steady connection", "Flexible evening and weekend slots"],
        ],
      },
      bullets: [
        "Strong JEE mathematics is not the same as IB or IGCSE mathematics",
        "Institutes in town focus on entrance exams",
        "Self-study lacks feedback on coursework",
        "Online tuition matches the syllabus, not the postcode",
      ],
    },
    {
      heading: "How do Kanwar weeks, fog and the semester rhythm affect the Roorkee calendar?",
      paragraphs: [
        "In the month of Sawan, usually July, the Kanwar Yatra brings enormous crowds along the Delhi-Haridwar corridor. Roads near Roorkee are diverted or closed, and schools sometimes shut for days. Online lessons are a small mercy in such weeks, since nobody needs to cross town, but power and connectivity can still wobble.",
        "Winter brings fog. From December to January, morning visibility is poor across the plains of western Uttarakhand, and train and road schedules slip. Evening lessons are more reliable than early morning ones then, and it helps not to schedule a mock on a fog-prone morning.",
        "The IIT and the institutes shape a rhythm of their own: semester exams, break weeks and the arrival of new students each summer. Families living on campus should check the academic calendar before fixing regular lesson times.",
        "Boards do not adjust for any of this. IB May exams, Cambridge May-June and October-November series, and Edexcel January and May-June exams stay where they are. Working backwards from those dates, the best plan leaves buffer weeks for Kanwar and fog, and starts revision early.",
      ],
      table: {
        caption: "The Roorkee year and the exam calendar",
        columns: ["Month", "Local factor", "Exam factor", "Planning advice"],
        rows: [
          ["December-January", "Dense fog", "Edexcel January series", "Evening lessons, mocks after fog lifts"],
          ["March-April", "School year-end exams", "IB and Cambridge revision begins", "Start timed papers early"],
          ["May-June", "Heat, IB exams", "IB May session, Cambridge series", "Short cooler-hour sessions"],
          ["July", "Kanwar Yatra traffic", "Results period", "Flexible lesson days"],
          ["October-November", "Festival season", "Cambridge November series", "Plan around Diwali"],
        ],
      },
      bullets: [
        "Kanwar weeks can close roads and schools",
        "Winter fog favours evening sessions",
        "Campus calendars affect regular lesson slots",
        "Exam dates do not move for local events",
      ],
    },
    {
      heading: "How should Roorkee students approach IB Mathematics, Physics and Chemistry?",
      paragraphs: [
        "Students in Roorkee are often strong at mathematics, and the danger is complacency. IB Mathematics AA HL rewards not just calculation but the ability to prove, to interpret and to attack an unfamiliar problem in Paper 3. A student who has practised only routine exercises may find the first HL paper humbling.",
        "Physics HL resembles an engineering course in miniature. The data booklet, a small set of formulae, and a heavy reliance on reasoning mean that a student who has learnt physics as a set of formulae struggles, while one who understands the concepts can rebuild a result. The Scientific Investigation tests the ability to design a controlled experiment with an honest error analysis.",
        "Chemistry HL is the subject where students from a mathematically strong background sometimes underestimate the memory load in organic chemistry. Regular retrieval practice on reaction pathways, and past-paper questions marked to the scheme, help far more than rereading notes.",
        "Across all three, a tutor's most valuable contribution is often the small conventions: how many significant figures, how to phrase a justification, when to state an assumption. These are the habits that turn a good student into a top-band one.",
      ],
      bullets: [
        "AA HL rewards proof and unfamiliar problems, not only routine exercises",
        "Physics HL is conceptual; formulae alone will not carry the paper",
        "Chemistry HL needs steady retrieval practice on organic pathways",
        "Small conventions in wording and units decide top bands",
      ],
    },
    {
      heading: "Choosing between Cambridge and Edexcel IGCSE, and between Core and Extended",
      paragraphs: [
        "The first decision is board. If a school or online provider sets it, the family follows. If the family is arranging the route on its own, they should look at which exam centre they can reach and which series dates suit.",
        "The second is tier. Extended papers allow the highest grades and prepare best for HL courses later, while Core suits subjects where a student wants a lighter load. In mathematics and the sciences, a student who is aiming at engineering should take Extended.",
        "The third is preparation. Cambridge and Edexcel papers differ in question style and in how practical skills are examined, so every past paper should be from the board the student will sit. A tutor who knows both can flag differences, but each student should practise one board at a time.",
      ],
      bullets: [
        "Board is usually set by the school or online provider",
        "Extended tier for engineering-bound students",
        "Practise past papers only from the board being sat",
        "Ask about exam-centre access early",
      ],
    },
    {
      heading: "How does IB Gram match a Roorkee student with a tutor?",
      paragraphs: [
        "We begin with a short exchange about the programme or board, the subject, the level, the exam session and the parent's main concern. For army families, we also ask about the likely posting dates so the arrangement can travel with the child.",
        "Next, a shortlist of tutors who have taught that exact course recently, with a description of why each fits. Credentials and teaching history are checked before the profile is shared.",
        "The free trial is where the decision is made. A parent may sit in, and both parent and student can say what worked and what did not. If it works, the tutor sets out a first-month plan.",
        "If it does not, we find another tutor. No contract, no pressure.",
      ],
      bullets: [
        "Short intake with attention to postings and holidays",
        "Shortlist based on recent teaching of the exact course",
        "Parents welcome in the trial lesson",
        "Easy change of tutor",
      ],
    },
  ],

  tutorsIntro:
    "The tutors below cover the IB continuum and both IGCSE boards for students connected to Roorkee, whether they live on the IIT campus, in the cantonment or in the wider district. Each match weighs syllabus, level and exam date, and all lessons run on screen.",

  process: [
    { title: "Send the details", description: "Programme or board, subject, level, exam session and the hours that work in Roorkee." },
    { title: "See the shortlist", description: "Tutors with recent teaching of the exact course, with a note on each." },
    { title: "Attend a free lesson", description: "Real content, live, with no charge and no obligation. Parents may sit in." },
    { title: "Agree a first month", description: "A written plan of topics and reporting, settled with you first." },
    { title: "Continue or switch", description: "Steady lessons with reviews, and a simple change if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched by course", description: "The syllabus and level decide the shortlist, not the address, so a specialist elsewhere is as reachable as a neighbour." },
    { title: "Built for a town of scientists", description: "Parents here notice weak teaching, so we welcome them in the trial lesson." },
    { title: "Portable for postings", description: "A tutor and a written record can move with an army or PSU family between stations." },
    { title: "Free first lesson", description: "You see the teaching before any discussion of continuing." },
    { title: "No ghost-writing", description: "Tutors give feedback on IAs and essays but never write the submitted work." },
    { title: "Leave without cost", description: "No lock-in, and changing tutor is a simple request." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Roorkee?", answer: "Send us the programme, subject, level and exam session, and we will shortlist tutors who have taught that course recently. Roorkee has no confirmed IB school to anchor the search, so the match relies on syllabus knowledge. A free trial lesson lets you and your child judge the teaching, and a replacement is offered if it is not right." },
    { question: "Do you offer IGCSE home tuition in Roorkee for Cambridge and Edexcel?", answer: "Yes, as online home tuition: the student studies at home while the tutor teaches live over video. Cambridge and Edexcel are handled separately, using each board's syllabus code, tier and past papers. A tutor for Cambridge 0620 Chemistry differs from one for Edexcel 4CH1, and we match on that basis." },
    { question: "Will a tutor visit our home in Roorkee?", answer: "No. Tutors do not visit homes in Roorkee. In-person tuition runs only in Gurugram and parts of Delhi NCR. In Roorkee each lesson is a live one-to-one video session at a fixed weekly time, and the student needs a laptop, a stable connection and a quiet place to study." },
    { question: "Is there an IB or Cambridge school in Roorkee?", answer: "We could not confirm one, so we name none. Schools in the city follow CBSE, the Uttarakhand Board and ICSE. Dehradun, about 70 km away, has international-curriculum schools with boarding, and Delhi NCR has the widest choice. If a Roorkee school has recently gained authorisation, tell us and we will verify it." },
    { question: "How much does IB or IGCSE tutoring cost in Roorkee?", answer: "The rate depends on programme, subject, level, session length and frequency, and it is quoted in writing before the free trial. HL Diploma subjects with few experienced tutors usually cost more than Core IGCSE topics. There is no travel charge, since lessons are online, and no contract, so you can pause or stop at will." },
    { question: "Can my child take the IB Diploma while living in Roorkee?", answer: "Only through a school or online provider that is authorised for the Diploma. Once that is arranged, IB Gram supplies subject teaching at home. Registration and exam-centre questions are between the family and the school, and we suggest settling them before subjects are chosen." },
    { question: "Is the trial lesson really free?", answer: "Yes. It uses real syllabus content, and you do not need to give payment details. Parents may sit in. Afterwards you decide whether to continue, and if the fit is poor we arrange another tutor at no cost." },
    { question: "Can tutors help with the Internal Assessment or Extended Essay?", answer: "A tutor can help a student choose a workable question, understand the criteria, plan an investigation and respond to feedback on a draft. A tutor never writes or rewrites the Internal Assessment, Extended Essay or TOK essay, because those must be the student's own work." },
    { question: "Which IB subjects can you cover for Roorkee students?", answer: "Most subjects are available. Requests often include Mathematics AA and AI, Physics, Chemistry, Biology, Computer Science, Design Technology, Economics, English A and Hindi, plus TOK and Extended Essay guidance. If a subject is not listed, ask us, since the tutor network is national." },
    { question: "Do you teach MYP and PYP for Roorkee children?", answer: "Yes. MYP support concentrates on writing to the criteria and on the Personal Project, and PYP sessions focus on reading, number fluency and inquiry habits. Both are common among children of transferred families who are between schools or boarding elsewhere." },
    { question: "Is online tuition as effective as a tutor in the room?", answer: "In Roorkee it is usually the only route to a syllabus specialist, so the real comparison is online against no specialist. A shared whiteboard, screen-shared past papers and recorded solutions cover almost all that a tutor at the table would. The advantage is teachers who have taught the exact course." },
    { question: "Can an IIT student tutor replace a specialist IB tutor?", answer: "An IIT student can be excellent for problem-solving practice, but IB and Cambridge papers are marked to published schemes with their own conventions. Many students find that a specialist who knows those schemes gains them marks faster. The two can be combined if the family wishes." },
    { question: "When should a Roorkee student begin tutoring?", answer: "At the start of the course if possible: Grade 9 for IGCSE and Class 11 for the Diploma. This leaves time to fix gaps before mocks and internal assessments. A later start still helps, as the plan focuses on the highest-value topics." },
    { question: "My child is switching from CBSE to IB or IGCSE. What should we expect?", answer: "The content will feel familiar, but the questions will not. Command terms such as evaluate and justify, sustained coursework and mark-scheme habits are the main adjustments. Starting a few weeks before the switch, with marked practice, makes the first term calmer." },
    { question: "Can lessons work around Kanwar Yatra traffic and winter fog?", answer: "Yes. Online lessons avoid the roads, and we can reschedule around power cuts. Fog favours evening slots, and Kanwar weeks may need flexible days. Tell the tutor early and the plan adjusts without penalty." },
    { question: "What if we are unhappy with the tutor?", answer: "Tell us and we will arrange a replacement. Reviews happen regularly so that a poor fit is caught early, and nothing obliges your child to stay. Pausing or stopping costs nothing." },
    { question: "Is IB Gram connected to IIT Roorkee, any school here, or the IB, Cambridge or Pearson?", answer: "No. IB Gram is an independent tutoring service, without partnership or endorsement from IIT Roorkee, any school, or the International Baccalaureate Organization, Cambridge or Pearson Edexcel. Institutions appear on this page only to describe context." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online tuition works for students in cities and towns nationwide." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The area where tutors also visit in person." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB subjects and formats." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and sessions explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, the core and internal assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "Career-related study with Diploma courses." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA or AI for your child." },
    { label: "Browse tutors", href: "/tutors/", description: "Search tutor profiles by subject and level." },
    { label: "Test prep and admissions support", href: "/admissions/test-prep/", description: "Entrance preparation beside subject tutoring." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a trial lesson." },
    { label: "IB and IGCSE tutoring in Dehradun", href: "/dehradun/", description: "The Doon valley, with the nearest international-curriculum schools." },
    { label: "IB and IGCSE tutoring in Haridwar", href: "/haridwar/", description: "The neighbouring city on the same district road." },
    { label: "IB and IGCSE tutoring in Saharanpur", href: "/saharanpur/", description: "The next city on the road towards western Uttar Pradesh." },
    { label: "IB and IGCSE tutoring in Meerut", href: "/meerut/", description: "The larger western UP city on the Delhi side." },
  ],

  closingHeading: "Book a free IB or IGCSE trial lesson for your Roorkee student",
  closingBody:
    "Give us the board or programme, the subject and level, and the hours that work in your household. We will send a tutor profile and trial slots, with no fee and nothing to sign. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115.",
};
