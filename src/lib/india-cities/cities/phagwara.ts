import type { CitySeoPage } from "../types";

/**
 * /phagwara/ - IB and IGCSE tutoring page for Phagwara, Kapurthala district, Punjab. No IB or
 * Cambridge/Edexcel IGCSE school in Phagwara could be confirmed, so stripSchools is empty and the
 * clusters use schools already verified on the Ludhiana, Amritsar and Chandigarh pages. Rendered with
 * the shared CountryLanding layout used by /gurgaon/.
 */
export const phagwara: CitySeoPage = {
  slug: "phagwara",
  countryName: "Phagwara",
  countryNameLong: "Phagwara, Punjab",
  demonym: "Phagwara",
  state: "Punjab",
  stateCode: "IN-PB",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Built around Phagwara's school timings, winter fog on the GT Road belt and the Baisakhi, Lohri and Diwali breaks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 31.2240, longitude: 75.7708 },
  wikipedia: "https://en.wikipedia.org/wiki/Phagwara",
  alternateNames: ["Phagwara Punjab", "Phagwara Kapurthala"],
  stripSchools: [],

  title: "Phagwara IB & IGCSE Tutors | Home Tuition Online",
  metaDescription:
    "Online IB and IGCSE home tuition in Phagwara: Diploma, MYP, PYP, Cambridge and Edexcel subjects, one-to-one over video, with a free first lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Phagwara",
  heroEyebrow: "IB & IGCSE HOME TUITION, ONLINE, FOR PHAGWARA",
  heroSubtitle:
    "Phagwara families are used to looking beyond the town: to Jalandhar and Ludhiana on the GT Road, and to Canada and the UK further out. For IB and IGCSE, home tuition follows that habit. A specialist tutor teaches one to one over video, in your home, while you skip the highway run to a tuition centre in another city.",
  primaryKeyword: "IB and IGCSE tutors in Phagwara",
  imageAltText: "A Phagwara student revising IGCSE Additional Mathematics with an online tutor at a desk at home",
  secondaryKeywords: [
    "IB tutor Phagwara",
    "IGCSE tutor Phagwara",
    "IB home tuition Phagwara",
    "IGCSE home tuition Phagwara",
    "IB private tuition Phagwara",
    "IB Maths tutor Phagwara",
    "IGCSE Maths tutor Phagwara",
    "IB Physics tutor Phagwara",
    "IB Chemistry tutor Phagwara",
    "IB Biology tutor Phagwara",
    "IB DP tutor Phagwara",
    "IB MYP tutor Phagwara",
    "IB PYP tutor Phagwara",
    "IGCSE online tuition Phagwara",
    "IB tutor Phagwara Punjab",
    "IB tutor Model Town Phagwara",
    "IGCSE tutor Hargobind Nagar Phagwara",
    "online IB tutor Chaheru Phagwara",
  ],

  heroTrustPoints: [
    "Tutors picked for the exact IB or IGCSE course your child studies",
    "Lessons happen on screen; nobody from IB Gram visits homes in Phagwara",
    "One complete trial lesson before you pay",
    "Independent of every school, university and exam board named here",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "The IB stages we teach" },
    { value: "CAIE + Edexcel", label: "IGCSE boards covered" },
    { value: "IST", label: "One clock for everyone" },
    { value: "Trial first", label: "No payment up front" },
  ],

  intro: {
    heading: "IB and IGCSE tuition for a Doaba town on the GT Road",
    paragraphs: [
      "Phagwara sits on the Grand Trunk Road between Jalandhar and Ludhiana, in Kapurthala district, and is known for its sugar mill, its industrial belt and Lovely Professional University, whose sprawling campus draws students and faculty from across India. Many Doaba families here have relatives in Canada, the UK or Australia. That link is the main reason parents ask about the IB and IGCSE.",
      "The town's own schools follow the Punjab board and CBSE. We could not confirm a local school teaching the IB or a Cambridge or Edexcel IGCSE course, so families rely on private tuition. Tutors do not visit homes in Phagwara: in-home lessons run only in Gurugram and parts of Delhi NCR. In Phagwara, a tutor teaches live on video, one child at a time, while the student sits at a desk at home.",
      "The families who use this are varied. Some have a parent abroad who wants the child to follow a curriculum familiar to overseas universities. Some are university households whose children began an IB programme elsewhere. Others simply want a Class 9 student to try Cambridge Mathematics before choosing between streams.",
      "IB Gram is an independent tutoring service. It has no affiliation with the IB, Cambridge, Pearson, Lovely Professional University or any school named here. Tutors teach and coach; they never write internal assessments, Extended Essays, TOK essays or coursework.",
    ],
    bullets: [
      "Teaching for IB PYP, MYP and DP, plus Cambridge and Edexcel IGCSE",
      "Lessons are online in Phagwara; home visits exist only in Gurugram and parts of Delhi NCR",
      "A written note after every lesson",
      "A replacement tutor on request",
      "Rates set out in writing before you book",
    ],
  },

  programmesIntro:
    "In Phagwara the IB programmes tend to arrive with a family, not with a school. That changes what the tutor does at each stage, as the notes below explain.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3 to 12 (Nursery to Class 5)",
      description:
        "Inquiry units around themes such as how we organise ourselves take the place of a strict subject timetable, ending in a Primary Years Exhibition. Tutoring supports reading, number work and the confidence to ask questions.",
      countryNote:
        "A PYP request from Phagwara usually means a child who began the programme abroad or in a metro and is now living with grandparents in the Doaba.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11 to 16 (Class 6 to 10)",
      description:
        "Every subject is judged against four criteria, and Year 5 adds a Personal Project. Coaching helps a student turn what they know into organised, reasoned answers.",
      countryNote:
        "With no MYP classroom in town, a Phagwara student needs the criteria explained in plain language and shown through worked examples.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Ages 16 to 19 (Class 11 and 12)",
      description:
        "Three Higher Level and three Standard Level subjects are joined by TOK, an Extended Essay and CAS. External exams and internal assessment together decide the final score.",
      countryNote:
        "Diploma enquiries from the Phagwara area often come with study abroad in mind, so predicted grades and consistent coursework matter from day one.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Ages 16 to 19 (Class 11 and 12)",
      description:
        "A pair of Diploma courses is combined with career-related study, service and a reflective project. Few schools in India offer it.",
      countryNote:
        "We know of no CP school around Phagwara, so tutoring targets the academic courses inside the pathway.",
    },
  ],

  subjectsIntro:
    "Tell us the exact course, level and, for IGCSE, the syllabus code. Mathematics AA at HL and Mathematics AI at SL are entirely different teaching jobs, and the match starts there.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, sequences, vectors and proof are worked through in order, and students practise laying out solutions the way examiners prefer." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Probability, hypothesis tests and financial models come up often, so lessons stress calculator technique and interpretation in words." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, electric fields and nuclear physics are practised through numerical work, and the investigation plan is reviewed early." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, equilibrium and organic mechanisms are the recurring trouble spots, so they get repeated attention with the data booklet at hand." },
    { name: "IB Biology", levels: "HL / SL", description: "Precise wording is rehearsed for topics like enzymes, inheritance and ecology, along with diagram and data-response practice." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy and explanation are drilled, and examples draw on agriculture, remittances and trade, all familiar to Doaba households." },
    { name: "IB Business Management", levels: "HL / SL", description: "Students practise reading a case study and picking the right tool, from ratios to stakeholder analysis." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen analysis, comparative essays and the individual oral are practised in turn, with detailed comments on structure." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, data structures and system fundamentals are combined with the exam's specific pseudocode format." },
    { name: "IB Psychology", levels: "HL / SL", description: "Research studies are learned with their methods and limits, then turned into balanced, evidence-led essays." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies and data questions are practised, with local examples such as groundwater and crop patterns where the syllabus allows." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and argument-driven essays are built through short, regular writing tasks." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Punjabi-speaking students often find Hindi B accessible, and lessons focus on formal writing, comprehension and speaking." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Tutors discuss knowledge questions and real-life situations; the essay and exhibition remain entirely the student's own work." },
  ],

  igcseSubjectsIntro:
    "Most Phagwara IGCSE candidates study alongside a Punjab board or CBSE school, or prepare before moving abroad. The first decisions are board and tier, then subject mix.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended students drill algebra, trigonometry and probability until working is fast and neat." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and coordinate geometry begin early, helping students who plan to take Mathematics further." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Papers follow the Edexcel format, and students practise showing method clearly on every question." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy, electricity and waves are practised with graded problems and the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, reactivity and organic chemistry are revisited until equation writing becomes automatic." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Body systems, plant science and genetics are revised with labelled diagrams and short recall quizzes." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, inflation and trade are taught with examples from Punjab's farm economy and overseas remittances." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Students learn to apply concepts to the case study on the paper rather than repeat definitions." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Logic gates, algorithms and networks are practised before programming problems begin." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Students practise different writing styles with timed tasks and line-by-line feedback." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and speaking tasks are practised for a straightforward language credit." },
  ],

  regionsTitle: "Phagwara localities and nearby towns we support online",
  regionsIntro:
    "Lessons are online, so this list is about context: the school mix around each area and the daily rhythm that decides when a lesson fits best.",
  regions: [
    { name: "Model Town", note: "A settled residential area near the town centre where many families combine CBSE schooling with evening tuition." },
    { name: "Hargobind Nagar", note: "A well-known residential locality with many households linked to trade and services; weekday evenings suit lessons." },
    { name: "Chaheru", note: "A neighbourhood on the Jalandhar side, close to the highway and to the university corridor." },
    { name: "Satnampura", note: "An industrial and residential area where working families rely on flexible lesson timings." },
    { name: "Hadiabad", note: "A locality towards the Kapurthala road, popular with families who commute to Jalandhar for work or school." },
    { name: "GT Road belt", note: "The main highway strip, where heavy traffic makes evening trips slow and at-home video lessons attractive." },
    { name: "Lovely Professional University area", note: "Faculty and staff families near the campus often arrive from other states and carry syllabuses from earlier postings." },
    { name: "Phillaur", note: "A town on the Ludhiana side with an old fort and a police training academy; students study locally or travel towards Jalandhar." },
    { name: "Goraya", note: "A GT Road town towards Ludhiana whose families often send children to schools in Phagwara or Jalandhar." },
    { name: "Kapurthala", note: "The nearby district headquarters with a strong school tradition and links to Jalandhar and Phagwara." },
  ],

  schoolDisclaimer:
    "No school in Phagwara is named as an IB or Cambridge/Edexcel IGCSE school because none could be confirmed. Schools below are in other cities, shown only as context, and have no link with IB Gram.",
  schoolClusters: [
    {
      city: "Phagwara itself",
      note: "Local schooling runs on the Punjab board and CBSE. We could not confirm an IB or IGCSE school here, so families who follow an international syllabus study privately and online.",
      schools: [],
    },
    {
      city: "Nearby: Ludhiana",
      note: "Ludhiana is a short drive along the GT Road and has the closest international-curriculum options we could confirm.",
      schools: ["Britannica International School", "Harvest International School"],
    },
    {
      city: "Nearby: Amritsar",
      note: "Amritsar is farther but has options that some Doaba families consider for boarding or relocation.",
      schools: ["Invictus International School", "International Fateh Academy"],
    },
    {
      city: "Nearby: Chandigarh and Mohali",
      note: "The tricity is a longer drive, with one confirmed IB option in Mohali.",
      schools: ["Oakridge International School, Mohali"],
    },
  ],

  modesIntro:
    "Phagwara families usually choose one of three shapes. Each is a live, one-to-one video lesson, and each answers a different need.",
  modes: [
    {
      title: "Weekly lessons with one tutor",
      description:
        "A fixed weekly slot and one tutor who follows the specification in order and marks homework in between.",
      bullets: [
        "Covers IB, IGCSE and MYP subjects",
        "Digital whiteboard used in every lesson",
        "Handwritten work photographed for marking",
        "Builds continuity across the year",
      ],
    },
    {
      title: "A second syllabus after school",
      description:
        "For students in a Punjab board or CBSE school who study an international course in the evenings or at weekends.",
      bullets: [
        "Lessons follow the international syllabus only",
        "Slots avoid school test weeks",
        "Monthly summary for parents",
        "Useful groundwork before a move abroad",
      ],
    },
    {
      title: "Concentrated exam preparation",
      description:
        "Several lessons a week over a few weeks, centred on timed papers, marking and correction.",
      bullets: [
        "Official mark schemes used",
        "Repeat mistakes tracked",
        "Best started a month before exams",
        "Planned around fog and festival weeks",
      ],
    },
  ],

  sections: [
    {
      heading: "Why do Phagwara families ask about IB and IGCSE?",
      paragraphs: [
        "In the Doaba region, migration is part of family life. A cousin in Brampton, an uncle in Birmingham or a sibling in Melbourne means that the question of overseas study comes up early. IB and IGCSE grades are easily read by overseas admissions offices, and that familiarity is a real practical advantage.",
        "Lovely Professional University adds another group of families. Faculty, staff and their children come from many states and sometimes from abroad, and their expectations reflect where they last lived. A child who studied the IB in Bengaluru or Dubai and then moved to Phagwara is not unusual.",
        "The third group are ambitious local families who want a child to test a different style of learning. They might begin IGCSE Mathematics in Class 8 to see whether it suits the child before they commit to an expensive move.",
        "We could not confirm an IB or IGCSE school in Phagwara itself, so all three groups face the same practical problem. Online one-to-one tuition addresses it by bringing a specialist teacher into the home, without the long drive to Jalandhar or Ludhiana.",
      ],
      bullets: [
        "Overseas family links drive much of the interest",
        "University households arrive with syllabuses from other cities",
        "Some families use IGCSE as a trial before a bigger decision",
        "No IB or IGCSE school confirmed in Phagwara",
      ],
    },
    {
      heading: "Punjab board, CBSE, IB or IGCSE: what should a Phagwara parent weigh?",
      paragraphs: [
        "The Punjab board and CBSE are the natural default here, well supported by local teachers, and they lead into JEE, NEET and CUET without extra paperwork. Nothing about an IB or IGCSE course makes those routes wrong, and for many students they remain the best fit.",
        "The international boards ask for something different. They test how a student uses knowledge, explains reasoning and writes at length, more than how much a student can reproduce from a textbook. A child who enjoys open-ended problems often thrives; a child who prefers memorising a defined syllabus may find it stressful.",
        "The table lists the main differences in a way that parents in Phagwara have found useful. It is a simplification, because schools within each board vary.",
        "If you are unsure, start with a single IGCSE subject and see how your child responds over a term before making a larger change.",
      ],
      table: {
        caption: "Four routes compared for a Phagwara household",
        columns: ["Point", "Punjab board", "CBSE", "IB", "IGCSE"],
        rows: [
          ["Local availability", "Everywhere in town", "Several schools", "No school confirmed", "No school confirmed"],
          ["What is rewarded", "Textbook accuracy", "Accuracy plus application", "Analysis and explanation", "Structured, applied answers"],
          ["Route to Indian entrance exams", "Direct", "Direct", "Equivalence rules apply", "Via Class 11 in another board"],
          ["Fit for study abroad", "Case by case", "Widely accepted", "Very widely accepted", "Widely accepted"],
        ],
      },
    },
    {
      heading: "What makes IB and IGCSE tuition cost more or less in Phagwara?",
      paragraphs: [
        "A published price would be wrong for most families, so we do not print one. After you tell us the course, level and timetable, we send a written quotation and you decide with a clear figure in front of you.",
        "Three things move the rate. The subject and level come first: HL Mathematics, HL Chemistry and IGCSE Additional Mathematics need seasoned specialists. Second is the tutor's experience with your board and paper. Third is the schedule, since one weekly lesson across a year costs differently from three lessons a week in the run-up to an exam.",
        "Phagwara families avoid a cost that many people overlook. The drive to Jalandhar or Ludhiana for a tutor takes fuel, time and often an hour of a parent's evening. With online tuition, none of that is needed, and a trial lesson costs nothing.",
        "Longer term, we can arrange lessons in blocks that follow the exam calendar, so that spending peaks when the student needs most help.",
      ],
      bullets: [
        "Subject, level and tutor experience set the rate",
        "Lesson frequency changes the total",
        "Quotation in writing before booking",
        "No fuel or travel costs; trial lesson is free",
      ],
    },
    {
      heading: "Tutor at home online, tuition centre in Jalandhar, or self-study: which works best from Phagwara?",
      paragraphs: [
        "Jalandhar and Ludhiana have busy tuition markets, and some families in Phagwara send children there for evening classes. The difficulty is that most of those centres cater for CBSE, JEE and NEET and only a few offer IB or Cambridge, so the journey may not solve the problem.",
        "A private tutor at home in Phagwara may be excellent at general subjects but may never have taught an IB or IGCSE syllabus. Self-study with past papers works for disciplined students but leaves mistakes uncorrected.",
        "The comparison below shows the practical differences between the four common options.",
      ],
      table: {
        caption: "Study options for an international syllabus from Phagwara",
        columns: ["Option", "Syllabus knowledge", "Marking to official schemes", "Practical burden"],
        rows: [
          ["Online one-to-one tutor", "Specific to the child's course", "Yes", "Needs internet and a quiet space"],
          ["Centre in Jalandhar or Ludhiana", "Rarely IB or IGCSE focused", "Depends on the batch", "Highway travel, fixed timings"],
          ["Local private tutor", "Varies by individual", "Seldom", "Small pool of options"],
          ["Self-study", "Student's own reading", "None unless self-marked", "Slow to correct errors"],
        ],
      },
    },
    {
      heading: "How do exams, fog and festivals shape a Phagwara study year?",
      paragraphs: [
        "IB Diploma exams run in May and November, and IGCSE exams follow February to March, May to June and October to November. Most Indian IB candidates sit in May, so the final push falls in a Punjab summer that regularly reaches extremes.",
        "The seasons matter. Late October and November bring smoke and pollution across the region after the paddy harvest, and dense fog in December and January can slow travel and even close schools. Online lessons avoid the road problems, though families should keep a backup for the power cuts that sometimes follow storms.",
        "The festival calendar is just as busy. Lohri and Maghi in January, Baisakhi in April, and Diwali in the autumn all bring holidays, and wedding season adds more. Tutors schedule the heaviest new content before those breaks.",
        "The table shows a sample year for a student sitting a May exam.",
      ],
      table: {
        caption: "Sample study year for a Phagwara student sitting in May",
        columns: ["Period", "Main task", "Local factor"],
        rows: [
          ["July to September", "Cover new content steadily", "Monsoon humidity; Diwali approaching"],
          ["October to November", "First mock papers and IA planning", "Post-harvest smoke; Diwali break"],
          ["December to January", "Consolidation and longer papers", "Dense fog; Lohri and Maghi"],
          ["February to March", "Full mocks and correction", "Clear, cool weather; good study window"],
          ["April to May", "Final revision, sit exams", "Baisakhi; rising heat"],
        ],
      },
    },
    {
      heading: "What can a Phagwara student do after IB or IGCSE?",
      paragraphs: [
        "For many Phagwara families, the ultimate goal is a university abroad, but Indian universities and professional courses also remain open. The rules are worth learning early.",
        "In India, IB Diploma holders usually need an equivalence certificate from the Association of Indian Universities for public institutions, and many private universities accept IB scores directly. CUET-UG publishes provisions for foreign boards each year. IGCSE students typically continue to Class 11 in CBSE, ICSE or IB, or to A Level.",
        "Medicine and engineering require the right subjects: Physics, Chemistry and Biology for NEET-UG, and Physics, Chemistry and Mathematics for JEE Main. Students from international boards must also meet equivalence conditions, so Diploma choices should be made with these rules in mind.",
        "For the UK, applications run through UCAS; for the United States through the Common Application; for Canada and Australia through direct or provincial routes. Predicted grades and IGCSE results carry different weight in each. Tutors focus on the subject learning that produces strong results.",
      ],
      bullets: [
        "AIU equivalence for many Indian public universities",
        "NEET-UG, JEE Main and CUET-UG have separate rules",
        "UCAS for the UK; Common App for the US; direct routes elsewhere",
        "Check current notices before finalising subject choices",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences taught over video?",
      paragraphs: [
        "A lesson combines a shared whiteboard with the student's own paper. The tutor explains a concept, sets a problem, watches the student attempt it and comments on the working. Photographed pages after the lesson let the tutor mark real handwriting.",
        "In IB Mathematics, the choice between Analysis and Approaches and Applications and Interpretation shapes the course. The first is algebra and calculus heavy, and suits future engineers and economists. The second emphasises statistics and modelling and suits business, social science and design paths. We advise on the choice early.",
        "Science courses combine understanding, recall and an internal investigation. Tutors help with the first two directly, and coach the third through questions, leaving the write-up to the student.",
        "A typical hour includes a review of homework, new teaching and a short task to complete before the next lesson.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a Phagwara student decide?",
      paragraphs: [
        "Core and Extended are separate papers with different ceilings. Core reaches grade C, and Extended reaches A star. The choice therefore shapes later options.",
        "Students planning the IB Diploma, A Level or a demanding degree abroad should generally sit Extended in Mathematics and the sciences. Core is reasonable for students who struggle in a subject or take it for breadth. Tutors review the decision after a term of lessons.",
        "Subject choice usually begins with English, Mathematics and two or three sciences, then adds a business or economics subject. Hindi as a second language is popular among Punjabi-speaking students who want a reliable grade.",
        "Cambridge and Edexcel use different styles and tier names. Edexcel uses Foundation and Higher. Tell us your board and we match a tutor familiar with it.",
      ],
    },
  ],

  process: [
    { title: "Send the details", description: "Tell us the programme, subject, level and exam session on WhatsApp or by email." },
    { title: "See a match", description: "We propose a tutor who already teaches that syllabus." },
    { title: "Take the trial", description: "Sit a full lesson at no cost to judge the fit." },
    { title: "Agree in writing", description: "Fees, timing and plan are sent as a short note." },
    { title: "Study and review", description: "Regular lessons, written feedback and a tutor swap if needed." },
  ],

  whyPoints: [
    { title: "A tutor for your course", description: "IB Physics HL students meet a tutor who teaches IB Physics HL." },
    { title: "No highway trips", description: "Nothing to drive to Jalandhar or Ludhiana for tuition." },
    { title: "Open about local options", description: "We say plainly that no IB or IGCSE school in Phagwara could be confirmed." },
    { title: "Feedback that parents can read", description: "A short note follows every lesson." },
    { title: "Free trial lesson", description: "See the teaching before deciding." },
    { title: "Coaching, not ghostwriting", description: "Tutors never write assessed work." },
  ],

  tutorsIntro:
    "All tutors teach from India on Indian Standard Time, so a Phagwara family avoids time-zone confusion. We match by syllabus, level and teaching style, and share a short profile before the trial.",

  faqs: [
    { question: "Will an IB Gram tutor come to our house in Phagwara?", answer: "No. Nobody from IB Gram travels to Phagwara homes, because in-home teaching is restricted to Gurugram and parts of Delhi NCR. What your child gets is an online private lesson, delivered live from a desk at home, with one teacher focused on one student. It is the closest thing to a home tutor that this district can offer for an international syllabus." },
    { question: "Which schools in Phagwara teach IB or IGCSE?", answer: "None that we were able to verify. Phagwara's schools work with the Punjab board and CBSE, and our checks turned up no local IB World School or Cambridge or Edexcel centre. The closest options we could confirm sit in Ludhiana, Amritsar and Mohali. Since approvals are added over time, the official IB and Cambridge school finders are the sources to trust." },
    { question: "How do we start looking for an IB or IGCSE tutor from Phagwara?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's class, board, subjects and exam month. Within a few days we propose one or two tutors who already teach that course, and set a free first lesson. Because the sessions are online, the tutor may be based anywhere in India, so proximity plays no part in the choice." },
    { question: "What should I expect to pay for IB tuition in Phagwara?", answer: "A figure would be misleading here, because rates follow the tutor, the course and the lesson pattern. Higher Level sciences, HL Mathematics and IGCSE Additional Mathematics sit at the upper end; early primary or language support usually costs less. You receive a written quotation before you commit, the first lesson is free, and there is no petrol or highway time to add." },
    { question: "Can a Phagwara student enter IGCSE papers privately?", answer: "Generally yes, provided an exam centre agrees to take private entries. Such centres are typically in bigger cities nearby, and each sets its own fees and closing dates. Cambridge and Pearson each keep a list of centres. Sciences need particular attention, since practical assessment must be arranged. Tutors prepare your child for the papers; the entry itself is yours to arrange." },
    { question: "Which subjects are most requested by Phagwara families?", answer: "Mathematics and the three sciences dominate, followed by Economics, Business Management and English. A noticeable share of families also ask about Theory of Knowledge and the Extended Essay because study abroad is their goal. Tutors discuss ideas and structure in those areas, but never draft anything the student submits." },
    { question: "Does an IB Diploma open NEET or JEE doors from Punjab?", answer: "Sometimes, depending on the year's eligibility notice. Indian professional exams set conditions on subject combinations and on recognition of the certificate, and both change. A student who wants medicine should carry Physics, Chemistry and Biology; one who wants engineering needs Mathematics. Confirm the present rules with the agency in writing before finalising Diploma subjects." },
    { question: "Is winter fog a problem for online lessons?", answer: "Much less than for travel. Dense December and January fog closes roads and delays school buses, but a video lesson at home carries on. The one risk is a power failure after a storm, so a charged laptop and a phone hotspot are sensible. If a session is cut short, the missing time is rescheduled without a charge." },
    { question: "May a tutor help with an Internal Assessment or the Extended Essay?", answer: "Only with thinking, never with writing. A tutor can unpack a criterion, challenge a weak research question or react to an outline, yet cannot supply sentences, data or conclusions. Submitted work must be the student's own, and breaching that rule can cost marks or the whole Diploma, which is why we hold the line." },
    { question: "Is Class 8 too early to try IGCSE material?", answer: "No, and several families do it deliberately. A younger child gets time to shift from remembering answers to explaining them, without a paper looming. We keep the first term relaxed, concentrate on command words and neat working, and bring in past papers later. A free trial lesson usually shows quickly whether the style suits the student." },
    { question: "Our home language is Punjabi. Will English-medium lessons be hard?", answer: "It is a common starting point and rarely a barrier. Lessons and papers are in English, but tutors are Indian and can restate a tricky idea in Hindi when that helps. Academic English generally becomes comfortable within a term or two, and Hindi B or IGCSE Hindi can be added as a scoring subject." },
    { question: "What kind of internet connection works best?", answer: "A steady line of about 5 Mbps handles video and a shared whiteboard. Broadband or good Wi-Fi beats a mobile signal. Keep a second device or hotspot nearby so a dropped connection costs a minute rather than a lesson." },
    { question: "How often should my child meet the tutor?", answer: "For a settled course, one weekly hour plus homework is typical. As exams near, families move to two, three or four sessions a week for a month or so. Progress on past papers guides the decision, and you can change the pattern with a written message whenever your circumstances shift." },
    { question: "Do you teach Cambridge and Pearson Edexcel both?", answer: "Yes, along with A Level and AS for background. Papers, tier names and question wording differ between the two boards, so please tell us which entry your child holds. We pair the student with a tutor who has taught that specific board and can rematch you if the plan changes." },
    { question: "What is the quickest way to try a lesson?", answer: "Send a WhatsApp message to +91 7439 368 115 or email support@ibgram.com, mentioning class, board, subject and a convenient evening. A trial is usually arranged within days and carries no obligation. If the first tutor is not right, ask for another before agreeing to anything." },
    { question: "Could my child study alongside a Lovely Professional University relocation?", answer: "Yes, and it is more common than people assume. Staff who join the university from other states often arrive with a child midway through an IB or IGCSE course. An online tutor lets the syllabus continue without a break, whichever school the child eventually joins, and lessons can move with the family if they relocate again." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The full list of cities where we teach online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How IB tutoring works, programme by programme." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Boards, tiers and subjects explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What the Diploma asks of a student and where tutoring fits." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, Personal Project and typical stumbling blocks." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Support for inquiry-led learning in the early years." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation." },
    { label: "Meet the tutors", href: "/tutors/", description: "Who teaches what, and how we match." },
    { label: "Contact us", href: "/contact-us/", description: "Reach us on WhatsApp or by email." },
    { label: "IB and IGCSE tutors in Jalandhar", href: "/jalandhar/", description: "The page for the neighbouring Doaba city." },
    { label: "IB and IGCSE tutors in Ludhiana", href: "/ludhiana/", description: "The page for the industrial city down the GT Road." },
    { label: "IB and IGCSE tutors in Hoshiarpur", href: "/hoshiarpur/", description: "The page for another Doaba town." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson from Phagwara",
  closingBody:
    "Tell us the programme, subject and exam session, and we will introduce a tutor who teaches that course. Message +91 7439 368 115 on WhatsApp or email support@ibgram.com, and take the first lesson free.",
};
