import type { CitySeoPage } from "../types";

/**
 * /udhampur/ - IB and IGCSE tutoring page for Udhampur, Jammu and Kashmir. Online-only delivery
 * (in-person home tuition runs only in Gurugram and parts of Delhi NCR). No school in Udhampur could be
 * confirmed as teaching the IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and the clusters
 * point honestly to the wider region, reusing names already confirmed on neighbouring pages.
 * Kept strictly non-political: education, climate, travel and exams only.
 */
export const udhampur: CitySeoPage = {
  slug: "udhampur",
  countryName: "Udhampur",
  countryNameLong: "Udhampur, Jammu and Kashmir",
  demonym: "Udhampur",
  state: "Jammu and Kashmir",
  stateCode: "IN-JK",
  flagCode: "in",
  countryCode: "IN",
  region: "Jammu and Kashmir, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are set around Udhampur's cold January evenings, hot pre-monsoon weeks and the exam series a student is actually sitting",
  lastUpdated: "2026-09-21",
  geo: { latitude: 32.9275, longitude: 75.1419 },
  wikipedia: "https://en.wikipedia.org/wiki/Udhampur",
  alternateNames: ["Udhampur city", "Udhampur Jammu"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Udhampur | Live Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Udhampur students: DP, MYP, PYP and Cambridge or Edexcel subjects, taught one to one online from home, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Udhampur",
  heroEyebrow: "UDHAMPUR IB & IGCSE TUTORING, LIVE ONLINE",
  heroSubtitle:
    "Home tuition in Udhampur for an IB or IGCSE course means a live online lesson at your own table, since tutors do not visit homes here and home visits run only in Gurugram and parts of Delhi NCR. We pair your child with a specialist who has taught the same syllabus, keep lessons to Indian Standard Time, and plan around a hill-town winter, so a cold evening or a slow connection does not wreck the week.",
  primaryKeyword: "IB and IGCSE tutors in Udhampur",
  imageAltText: "An Udhampur student in a winter jacket attends an IGCSE Physics lesson with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Udhampur",
    "IGCSE tutor Udhampur",
    "IB home tuition Udhampur",
    "IGCSE home tuition Udhampur",
    "IB private tuition Udhampur",
    "IB Maths tutor Udhampur",
    "IGCSE Maths tutor Udhampur",
    "IB Physics tutor Udhampur",
    "IB Chemistry tutor Udhampur",
    "IB Biology tutor Udhampur",
    "IB DP tutor Udhampur",
    "IB MYP tutor Udhampur",
    "IB PYP tutor Udhampur",
    "IGCSE online tuition Udhampur",
    "IB tutor Ramnagar Udhampur",
    "IGCSE tutor Chenani",
    "online IB tutor Majalta",
    "IB tuition Udhampur Jammu",
    "IB and IGCSE tutors in Udhampur",
  ],

  heroTrustPoints: [
    "Your child's board, subject and tier are fixed before a tutor is proposed",
    "Lessons are online only; a tutor at the door happens in Gurugram and parts of Delhi NCR alone",
    "The first lesson is free and the plan is written down",
    "No link to any school, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "All four IB stages", label: "PYP, MYP, DP and CP" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "IST", label: "No time-zone gap" },
    { value: "Free first lesson", label: "Before any commitment" },
  ],

  intro: {
    heading: "Studying IB or IGCSE material from a hill town like Udhampur",
    paragraphs: [
      "Udhampur sits at roughly 750 metres in the Shivalik hills, on the rail line to Jammu, and carries the pace of a district town: government offices, a medical college, degree colleges, and schools that run mostly on the JKBOSE or CBSE syllabus. Those looking at the IB or an IGCSE here generally do so for particular reasons, such as a posting that moves the family every few years or a parent who wants study abroad kept open.",
      "No school in Udhampur could be confirmed by us as teaching the IB Diploma or a Cambridge or Edexcel IGCSE, so private tuition carries more weight than it would in a big city. Students either prepare as private candidates, follow an online programme, or board elsewhere and return for holidays. A tutor in these cases acts as the one person who knows the course end to end.",
      "That is why we describe it plainly: private home tuition in Udhampur, for these syllabuses, is delivered online. A student opens a laptop at home at the agreed hour, joins a video call with a tutor and works on a shared page. There is no journey, which matters when winter fog or a landslide-affected road makes travel unpredictable.",
      "We are independent. IB Gram has no connection with the IB Organization, Cambridge, Pearson or any school, and tutors will coach and explain but never write an Internal Assessment, Extended Essay or any coursework that carries a student's name.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, and Cambridge and Edexcel IGCSE",
      "Live, one-to-one, on Indian time",
      "Free trial, then a written plan and rate",
      "Tutors change on request if the fit is wrong",
      "No home visits in Udhampur; those exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "A family in Udhampur is rarely choosing between IB schools down the road, so the question is different: what does each programme ask of a student, and where does a tutor help? The four programmes below are described in those terms, with a note on how each tends to arise here.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Children explore transdisciplinary themes through inquiry, finishing the programme with a group Exhibition. There are no external exams, which frees a tutor to concentrate on reading comprehension, number sense and the confidence to talk through an idea.",
      countryNote:
        "In Udhampur the PYP usually comes up when a service or government family expects a posting to an IB school and wants a child ready for inquiry-style classrooms.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Subjects are assessed against criteria, with interdisciplinary units and a Personal Project at the end. Students used to textbook recall must learn to plan, reflect and justify, so tutoring begins with the rubric before it begins with the topic.",
      countryNote:
        "Udhampur parents most often ask about MYP Mathematics and Sciences, where a gap in Class 8 algebra can quietly cost marks two years later.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects across three groups, the Extended Essay, Theory of Knowledge and CAS together make up the Diploma, assessed by final papers and internal tasks. Support aims at subject understanding, paper technique and planning the internal work without ever writing it.",
      countryNote:
        "For Udhampur students, DP is nearly always completed away from home, so our lessons usually run on weekends and during winter and summer holidays.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP mixes two or more Diploma courses with a career-related study and a reflective project. The Diploma elements still need serious subject depth.",
      countryNote:
        "CP is uncommon in India, so we see few Udhampur enquiries; those that arrive focus on the Diploma subjects inside the chosen pathway.",
    },
  ],

  subjectsIntro:
    "A subject name alone does not tell us who should teach it. IB Mathematics has two separate courses, each at Higher or Standard Level, and IGCSE Mathematics has a Core and Extended tier. We start from the syllabus code and the current grade, then check the timetable.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and structured proof, with Higher Level papers that test unfamiliar multi-step problems that cannot be solved by pattern matching." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Real data, probability and modelling, with a calculator used constantly, and an exploration that needs a topic a student can genuinely measure." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through to fields, assessed by structured data questions, with an investigation judged on method and honest evaluation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics and organic mechanisms, where practice with the data booklet saves minutes in every paper." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics and ecology, where reading the command term correctly often matters as much as knowing the fact." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams that are labelled correctly and linked to current events earn more than general theory." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based answers must name the firm and use its figures, rather than recite textbook definitions." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis of unseen extracts, a comparative essay and a spoken oral, each trained on its own." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms and data structures on paper, with a working program for the internal task." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies must be cited and evaluated, not simply listed, and essays reward a clear line of argument." },
    { name: "IB Geography", levels: "HL / SL", description: "Mountain environments and hazards are familiar territory to an Udhampur student, while case-study precision still has to be learnt." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking, with strong marks for evaluating solutions and not just describing problems." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Fluency in reading unseen texts and speaking without a script decide most of the grade." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Guided discussion on knowledge claims and perspectives, practised until the student can argue both sides." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel IGCSE specifications differ, and each subject may have Core and Extended papers. We confirm the board, the code and the tier first, then plan lessons backwards from the sitting.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Extended students need speed in algebra and trigonometry, while Core students gain from accuracy and clear steps." },
    { name: "IGCSE Additional Mathematics", levels: "Cambridge", description: "Calculus and functions that bridge into IB Maths Analysis and Approaches." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Formula handling, units and the practical-skills paper reward steady weekly drilling." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, reactivity and identification tests are learnt through repeated worked examples." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Exact vocabulary and diagrams carry the marks, along with experiment design." },
    { name: "IGCSE English as a First Language", levels: "Cambridge / Edexcel", description: "Writing for different audiences, with feedback on tone and structure." },
    { name: "IGCSE English as a Second Language", levels: "Cambridge", description: "Reading, writing and speaking practised in short, regular lessons." },
    { name: "IGCSE Business Studies", levels: "Cambridge / Edexcel", description: "Definitions applied to short cases, with calculation questions practised separately." },
    { name: "IGCSE Computer Science", levels: "Cambridge", description: "Pseudocode and logic under time pressure." },
    { name: "IGCSE Hindi as a Second Language", levels: "Cambridge", description: "Comprehension and structured writing in a language most Udhampur students already use daily." },
  ],

  regionsTitle: "Udhampur city and district towns our online students join from",
  regionsIntro:
    "Udhampur district runs from the city on the Shivalik slopes into hillier country beyond. The places below are where families write from. A note on practical timing follows each, and every lesson is online.",
  regions: [
    { name: "Udhampur city centre", note: "The district's main school and market area, where evening lessons after tuition-free hours fit well from about 5 pm." },
    { name: "Railway station area", note: "A short distance from the line to Jammu, used by families who commute for work, so lessons begin after they return." },
    { name: "Rehambal", note: "A residential neighbourhood close to the city, where home broadband is usually the simplest option for a video lesson." },
    { name: "Chenani", note: "A hill town to the north-east, where winter weather can interrupt connectivity and we keep a backup slot." },
    { name: "Ramnagar", note: "A town further into the hills, with fewer schools nearby and a greater reliance on online learning." },
    { name: "Majalta", note: "A small town on the road towards Ramnagar, where a mobile hotspot is a sensible backup." },
    { name: "Panchari", note: "A town on the district's western side, where school-end times and bus schedules decide lesson timing." },
    { name: "Basantgarh", note: "A remote hill area, where we test a video call before the trial lesson." },
    { name: "Tikri", note: "A smaller settlement, where a student may share one device with siblings, so we agree a fixed daily slot." },
  ],

  schoolClusters: [
    {
      city: "Udhampur district",
      note: "We could not confirm any school here teaching the IB or Cambridge or Edexcel IGCSE, so local options are limited and we do not name schools we cannot verify.",
      schools: [],
    },
    {
      city: "Nearby: Chandigarh and Mohali",
      note: "The tricity holds the region's longest-established IB and Cambridge schools and is reachable by train or road, used mostly by families willing to board a child.",
      schools: ["Oakridge International School, Mohali", "Strawberry Fields High School, Sector 26"],
    },
    {
      city: "Nearby: Amritsar",
      note: "A major Punjab city with two IB World Schools, reachable via Jammu and Pathankot, and an option some Jammu division families weigh for boarding.",
      schools: ["Invictus International School", "International Fateh Academy"],
    },
    {
      city: "Further: Dehradun and Mussoorie",
      note: "A well-known boarding hub in the Himalayan foothills with several international-curriculum schools, popular with northern families.",
      schools: ["SelaQui International School", "Unison World School", "Woodstock School, Mussoorie"],
    },
  ],
  schoolDisclaimer:
    "Schools are named only to describe the wider region. IB Gram is independent, with no partnership or endorsement involving these schools, the IB, Cambridge or Pearson, and we cannot promise a place at any of them.",

  modesIntro:
    "Our Udhampur families choose among three rhythms. All three are live and online, because tutors do not visit homes outside Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Steady weekly lessons",
      description: "A fixed slot with one tutor, following what the student is learning that month.",
      bullets: ["Same tutor all year", "Short written note each time", "Homework reviewed next session"],
    },
    {
      title: "Exam-season intensives",
      description: "Several sessions a week in the last weeks before a paper, built around timed questions.",
      bullets: ["Past papers marked together", "Weak topics ranked", "Time management practice"],
    },
    {
      title: "Winter and summer break blocks",
      description: "A boarder home in Udhampur uses the holiday for concentrated work in one or two subjects.",
      bullets: ["Plan agreed before the break", "Daily short lessons", "Notes handed to school tutors"],
    },
  ],

  sections: [
    {
      heading: "Who looks for IB or IGCSE tuition in and around Udhampur?",
      paragraphs: [
        "The families are fewer in number than in a metro, and each has a clear reason. Government and defence service households, whose postings rotate, are the largest group, and they value a curriculum that follows a child from one state to another. Doctors and faculty linked to the medical and degree colleges are another.",
        "A third group is families with relatives abroad or an eye on overseas study, who see IB points or IGCSE grades as a currency universities in the UK, Canada, Australia and Europe understand. A fourth is simply parents who have read about inquiry-based learning and want a child to experience it before Class 9.",
        "Since the city has no confirmed IB or IGCSE school, the tutor often becomes the child's main contact with the syllabus. That raises the bar for matching. We ask who sets the papers, which year the child is in, and what has gone well and badly so far, before we propose anyone.",
        "Parents are sometimes anxious that a child will fall behind JKBOSE or CBSE work if they add IGCSE. In our experience the opposite is common: the Extended Mathematics and science content overlaps with Indian Class 9 and 10, and writing skills built through IGCSE English help in every subject.",
      ],
      bullets: [
        "Government and service families facing frequent postings",
        "Doctors and academics linked to local colleges",
        "Families planning study abroad",
        "Parents who want an inquiry-based approach early",
      ],
    },
    {
      heading: "How do JKBOSE, CBSE, IB and IGCSE differ for an Udhampur student?",
      paragraphs: [
        "JKBOSE and CBSE are built on a fixed textbook and a final exam, with some internal assessment. IB and IGCSE are built on a published specification, with papers that test application and reasoning. The distinction shows up most in questions that have no obvious formula.",
        "In practice an Udhampur student moving to IGCSE will find longer questions with several parts, command words such as 'justify' and 'evaluate', and mark schemes that award credit for reasoning. A student moving to the IB Diploma must also manage coursework alongside revision, which adds an organisational dimension.",
        "Language is another difference. Many students here are comfortable in Dogri, Hindi or Urdu, and English academic writing needs deliberate practice. Our tutors spend time on paragraph structure and key vocabulary so a good idea is not lost in a clumsy sentence.",
        "The right choice depends on destination. Students aiming for Indian engineering or medicine through entrance tests may stay on CBSE and use IGCSE as an enrichment; those aiming abroad may prefer the Diploma. We describe both honestly and let families decide.",
      ],
      table: {
        caption: "JKBOSE, CBSE, IB and IGCSE side by side",
        columns: ["Feature", "JKBOSE / CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["Typical stage", "Classes 9-12", "Classes 11-12", "Classes 9-10"],
          ["How marks are earned", "Final board papers", "Papers and internal tasks", "Final papers, some coursework"],
          ["Availability in Udhampur", "Widely taught", "No confirmed school", "No confirmed school"],
          ["Focus", "Syllabus recall and accuracy", "Application and independent inquiry", "Structured problem solving"],
          ["Usual onward path", "CUET, JEE, NEET", "Indian and overseas universities", "IB, A Level or Class 11"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost from Udhampur?",
      paragraphs: [
        "We quote rates in writing and do not publish a price list, because two Udhampur students asking for 'IB Maths' can need very different amounts of teaching. What matters is how the rate is formed, which we can explain.",
        "The subject and level come first. Higher Level sciences and Mathematics need tutors with more specialised experience than a Core IGCSE English course, and the rate reflects that. Next is how much teaching the student needs: a catch-up on a missed unit is different from fine tuning a strong student's exam technique.",
        "Sessions per week and length of each are the third factor. Many families begin with one lesson a week and add a second in the months before an exam series. Short lessons for younger students cost less per session than long Diploma sessions.",
        "Because teaching is online, no travel is added and no centre fees apply. That keeps quotes clean, but it also means the price is for the tutor's time and preparation only. The free trial lets a family judge quality before discussing money.",
      ],
      bullets: [
        "Course and level",
        "Tutor's depth of experience with that syllabus",
        "Number and length of sessions",
        "Intensity near exam series",
      ],
    },
    {
      heading: "Is online tuition better than coaching, a local tutor or self-study in Udhampur?",
      paragraphs: [
        "It depends on the syllabus and the child. For JEE, NEET and board exams, local coaching and teachers remain the right tool. For IB and IGCSE, the knowledge needed is specialised and scarce in a smaller city, which is why families look beyond it.",
        "Self-study with past papers is possible for a motivated student, and Cambridge and IB resources are available online. The weakness is feedback: a wrong method can go unnoticed for weeks. A tutor catches it in a single lesson and explains why.",
        "Online tuition removes the problem of distance but depends on connectivity. In Udhampur, broadband or a stable 4G signal usually works, though winter storms may interrupt service. We plan for that with a make-up slot.",
        "The table compares the four approaches on what actually matters to a family.",
      ],
      table: {
        caption: "Study options for an IB or IGCSE student in Udhampur",
        columns: ["Option", "Knowledge of IB / IGCSE", "Flexibility", "Weak point"],
        rows: [
          ["Online one-to-one", "Matched to the exact course", "Evenings and weekends", "Needs steady internet"],
          ["Local coaching", "Board and entrance exams", "Fixed batches", "Little IB or IGCSE content"],
          ["Local private tutor", "Varies", "Flexible", "Few with IB Higher Level experience"],
          ["Self-study", "Whatever is found online", "Fully flexible", "No feedback on errors"],
        ],
      },
    },
    {
      heading: "What does the exam calendar look like, and how does Udhampur's weather fit?",
      paragraphs: [
        "IB Diploma exams are held in May and November, with Indian schools mostly using the May session and results arriving in early July. Cambridge IGCSE offers sittings in February-March, May-June and October-November. Edexcel runs January, May-June and October-November.",
        "Udhampur's climate affects study. Winters bring sub-zero nights in higher parts of the district and hail is common in February and March, which can disturb power and internet. Summers before the monsoon can pass 40 degrees, so lessons move to evenings.",
        "Local festivals such as Lohri, Baisakhi, Navratri and Diwali also shape the calendar, as do family weddings. We ask for these dates early and write them into the plan so a gap is expected and not a surprise.",
        "A sensible pattern is to hold the main revision push eight to ten weeks before a series, with a half-term review, and to mark each mock paper in a lesson, because the discussion after a paper teaches more than the mark itself.",
      ],
      table: {
        caption: "Exam sessions and how lessons are planned around them",
        columns: ["Session", "Usual timing", "Who sits it", "Lesson emphasis"],
        rows: [
          ["IB Diploma May", "May, results early July", "Class 12 students", "Timed papers, internal task review"],
          ["IB November", "November", "Retakes and some schools", "Fixing weak papers"],
          ["Cambridge IGCSE", "Feb-Mar, May-Jun, Oct-Nov", "Class 10 candidates", "Past papers by component"],
          ["Edexcel IGCSE", "Jan, May-Jun, Oct-Nov", "Class 10 candidates", "Mark-scheme technique"],
          ["JKBOSE / CBSE", "Spring and autumn cycles", "Classes 10 and 12", "Aligning school work with IB or IGCSE"],
        ],
      },
    },
    {
      heading: "Which universities can an IB or IGCSE student from Udhampur target?",
      paragraphs: [
        "The Association of Indian Universities recognises the IB Diploma and IGCSE results for admission purposes, and many Indian universities, public and private, accept IB scores directly. For CUET-UG, a student chooses subjects that match the programme applied to, and should check each university's list.",
        "JEE Main and NEET have their own eligibility conditions for IB and IGCSE students, which change by year. We tell families to read the current bulletin, rather than rely on advice that may be out of date, and not to choose subjects before checking.",
        "Nearer home, students look at the University of Jammu, the central universities, and institutes in Chandigarh, Delhi and Pune. Further away, UK, Canadian and Australian universities read IB points and IGCSE grades routinely, and many degrees require Higher Level Mathematics or sciences.",
        "A tutor cannot guarantee a place anywhere, but can explain what a grade means and which subjects a target course expects, which helps a family choose before it is too late to change.",
      ],
      bullets: [
        "AIU equivalence for Indian admissions",
        "CUET-UG subject lists differ by university",
        "JEE and NEET rules need reading each year",
        "Overseas courses often ask for Higher Level Maths or sciences",
      ],
    },
    {
      heading: "How do IB Maths and the sciences work, and where do students lose marks?",
      paragraphs: [
        "IB Mathematics offers Analysis and Approaches for students heading to engineering or pure sciences, and Applications and Interpretation for those headed to social science, business or health courses. Both are available at Higher and Standard Level, so a family must know which the school has chosen.",
        "Marks are most often lost not on difficult questions but on setting out. A solution that jumps from line one to line five loses method marks even if the answer is right. Our tutors ask students to write steps as if for someone else to follow.",
        "In Physics, Chemistry and Biology, the internal investigation is worth a fifth of the grade, and the final papers combine short answers and extended responses. Students who learn the command terms early, and who practise with the data booklet, are calmer under time pressure.",
        "Because a student in Udhampur may not have a lab at school, we help them plan investigations that can be done with accessible equipment or simulations, and we explain what the marking criteria ask for in design, data handling and evaluation.",
        "Our usual pattern is topic-by-topic teaching in the first year and mixed past-paper practice in the second, with a short written note after every lesson.",
      ],
    },
    {
      heading: "Core or Extended: how should an Udhampur student choose IGCSE tiers and subjects?",
      paragraphs: [
        "Core papers cover the essential syllabus and limit the highest grade; Extended papers include harder content and open all grades. Most schools decide, but a private candidate chooses with the exam centre.",
        "We usually recommend Extended in Mathematics and the sciences for any student who may continue to the IB Diploma, A Level or an engineering path. Core is a reasonable choice when a student's confidence in a subject is fragile and a secure result matters more.",
        "Subject choices should follow strengths and destination. A student heading to medicine will want Biology and Chemistry; one eyeing business will find Economics and Business Studies useful. Hindi as a second language is often a dependable grade.",
        "The board matters too. Cambridge reports A* to G in most subjects, and Edexcel's newer specifications use 9 to 1. Papers, codes and mark schemes differ, so we ask for them at the start.",
      ],
      bullets: [
        "Extended tier keeps IB, A Level and engineering paths open",
        "Core tier suits a confidence-building route",
        "Hindi often scores well",
        "Confirm board and tier with the exam centre",
      ],
    },
  ],

  process: [
    { title: "Share the details", description: "Programme, subject, level, board and exam series, by WhatsApp or email." },
    { title: "Receive a tutor proposal", description: "A specialist who has taught that course, with a short profile." },
    { title: "Try the free lesson", description: "A live session on a topic your child is learning, with no obligation." },
    { title: "Agree a written plan", description: "Slots, rate and goals confirmed before anything is booked." },
    { title: "Review and adjust", description: "Notes after each lesson, and a change of tutor if needed." },
  ],
  whyPoints: [
    { title: "Syllabus-specific matching", description: "Tutors are proposed for your child's exact course, not a general subject." },
    { title: "No travel, ever", description: "Lessons come to your home in Udhampur by video, whatever the weather." },
    { title: "India-based tutors", description: "Everyone teaches in IST, so evenings and weekends work easily." },
    { title: "Plain written notes", description: "Each lesson ends with what was covered and what to practise." },
    { title: "Free trial, tutor change", description: "Try first, and switch if the fit is not right." },
    { title: "Clear limits", description: "Tutors coach and never write assessed coursework." },
  ],

  tutorsIntro:
    "These tutors teach IB and IGCSE online across India. An Udhampur student can work with any of them, because the lesson happens on screen.",

  faqs: [
    { question: "Can an IB or IGCSE tutor come to my house in Udhampur?", answer: "No. Tutors do not visit homes in Udhampur, because in-person home tuition is offered only in Gurugram and parts of Delhi NCR. What we offer is online home tuition, where your child takes a live one-to-one lesson at home on a laptop. The tutor is a specialist in the syllabus, and the lesson works on a shared screen." },
    { question: "Is there an IB or IGCSE school in Udhampur?", answer: "We could not confirm one. We looked for IB World Schools and Cambridge or Edexcel centres in Udhampur and did not find any we could verify, so we name none. Students usually prepare through private tutoring, an online programme or boarding elsewhere, and the nearest well-known clusters are in Chandigarh, Amritsar and Dehradun." },
    { question: "How do online lessons work for a student in Udhampur?", answer: "Your child joins a video call from home at a fixed time. The tutor teaches on a shared whiteboard, sets questions, marks them live and sends a short written note. Lessons run on Indian Standard Time, so there is no time-zone gap, and a make-up slot is kept for winter disruptions." },
    { question: "What does IB and IGCSE tuition cost for Udhampur families?", answer: "We do not publish prices. The rate depends on the course, the level, the tutor's experience and the number of sessions, and we give it in writing before booking. Higher Level sciences usually cost more than IGCSE English. The first lesson is free, so you can judge the teaching first." },
    { question: "My child studies JKBOSE or CBSE. Can they still take IGCSE?", answer: "Yes, as a private candidate through an exam centre, though the centre must accept the entry. Many students use IGCSE Mathematics or sciences alongside their school course. A tutor prepares them for the paper style, but we cannot arrange registration, so check deadlines with the centre." },
    { question: "Do you teach both IB Maths courses?", answer: "Yes. Analysis and Approaches and Applications and Interpretation are separate courses, each at Higher and Standard Level. Tell us which one the school has chosen and we shortlist a tutor who has taught it, since the content and the style of exploration are different." },
    { question: "Will tutors write Internal Assessments or Extended Essays?", answer: "No. Tutors coach and never write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework. They explain criteria, discuss topic choices, give feedback on structure and help with exam technique. The submitted work must be the student's own." },
    { question: "Do you cover primary and middle years too?", answer: "Yes. We support PYP, MYP, DP and CP students. Younger children often need reading, number fluency and clear written explanations, while MYP students need help with criterion-based tasks and the Personal Project. Families of younger students are welcome." },
    { question: "Which IGCSE boards do you support?", answer: "Cambridge International and Pearson Edexcel. They have different codes, papers and grade scales, so we ask for the board and subject code in the first message. A student sitting Cambridge 0625 Physics needs different practice from one sitting Edexcel 4PH1." },
    { question: "How do we handle winter weather and power cuts?", answer: "We plan ahead. From December to February we suggest earlier slots when the day is warmest and keep a make-up session for disruptions. If a lesson is lost to a power or network failure, it is rescheduled without charge. A mobile hotspot makes a good backup." },
    { question: "Can students from Chenani, Ramnagar or Majalta join?", answer: "Yes. Any student in Udhampur district with a stable internet connection can take lessons, because everything runs online. In hill areas where signal is weaker we recommend testing a video call before the trial lesson and choosing a spot in the house with the best reception." },
    { question: "How do I book the free trial?", answer: "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com with the programme, subject, level, board and year. We suggest a tutor and a trial time, usually within a few days. The trial is a real lesson on a current topic, with no obligation." },
    { question: "What if my child does not get on with the tutor?", answer: "Tell us and we will change the tutor. Teaching style matters as much as subject knowledge, and a mismatch shows within a few lessons. There is no awkwardness in asking, and the new tutor receives the notes so your child does not start from zero." },
    { question: "Are IB and IGCSE accepted by Indian universities?", answer: "Generally yes. The Association of Indian Universities recognises the IB Diploma and IGCSE results for admission, and many universities accept IB scores. Entrance tests such as CUET-UG, JEE and NEET have their own subject rules, so check the current bulletin. We do not guarantee admission anywhere." },
    { question: "Is IB Gram linked to any school or to the IB?", answer: "No. IB Gram is an independent tutoring service. It has no affiliation with the IB Organization, Cambridge, Pearson or any school on this page. School names appear only to describe the regional picture, and entries, grades and admissions remain matters for the family, school and exam body." },
    { question: "Can a boarder from Udhampur use your tutors in holidays?", answer: "Yes, and many do. A student away at school can have weekend lessons from the hostel when permitted, and a concentrated block at home during winter or summer holidays. Notes pass between sessions, so a tutor picks up exactly where the last lesson ended." },
  ],

  internalLinks: [
    { label: "IB and IGCSE across India", href: "/india/", description: "All the Indian cities where we teach online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB subject tutoring across programmes." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE tuition." },
    { label: "IB Diploma support", href: "/programmes/dp/", description: "Subjects, papers and internal assessment coaching." },
    { label: "IB PYP support", href: "/programmes/pyp/", description: "Early years inquiry learning and literacy." },
    { label: "IB Maths tutoring", href: "/courses/ib/mathematics/", description: "Both IB Maths courses explained." },
    { label: "Our tutors", href: "/tutors/", description: "Meet the people who will teach your child." },
    { label: "Get in touch", href: "/contact-us/", description: "Book a trial or ask a question." },
    { label: "Jammu", href: "/jammu/", description: "Our page for Jammu, the nearest large city." },
    { label: "Pathankot", href: "/pathankot/", description: "Our page for Pathankot, on the road to Punjab." },
    { label: "Srinagar", href: "/srinagar/", description: "Our page for Srinagar in the Valley." },
  ],

  closingHeading: "A first lesson costs nothing and shows a lot",
  closingBody:
    "Share the programme, subject and exam series, and we will propose a tutor for a free trial your child can take at home in Udhampur. If it suits, we write down the plan and rate. If not, you have spent an hour and nothing else. Email support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
